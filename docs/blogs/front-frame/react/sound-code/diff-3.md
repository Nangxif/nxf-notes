# diff之后在commit阶段的操作

## 一、移动操作的执行

我们之前在render阶段进行标记的时候，如果发现元素标记了Placement，其实对应的是两种操作：

* 移动
* 插入

对于插入操作，之前对应的方法是parentNode.appendChild，现在为了实现移动操作，需要支持parentNode.insertBefore。

parentNode.insertBefore需要找到「目标兄弟Host节点」，需要考虑两个因素：

* 可能并不是目标fiber的直接兄弟节点

  ```typescript
  // 情况1:
  // 对于A来说，兄弟节点是B组件，但是A的兄弟Host节点并不是B，而是B的子组件div，实际上B可能还return <C/>，C可能还return <D/>，最后D的子节点才是一个div节点，因此A要找到目标Host兄弟节点，要遍历A的sibling，每找到一个sibling就要向下遍历，直到我们找到第一个Host节点。
  <A/><B/>
  function B () {
    return <div/>
  }
  // 情况2:
  // 对于App组件，App组件的兄弟节点是div节点，child是A组件，那么A组件的Host类型的兄弟节点是父节点的兄弟节点，这种情况下我们需要向上找，找到它的父节点的兄弟节点。
  <App/><div/>
  function App () {
    return <A/>
  }
  ```
  
* 而不稳定的Host节点不能作为「目标兄弟Host节点」


针对上面的情况，我们来实现一个查找兄弟Host节点的方法getHostSibling

  ```typescript
  function getHostSibling(fiber: FiberNode) {
  	let node: FiberNode = fiber;
  	findSibling: while (true) {
  		while (node.sibling === null) {
  			// 如果没有兄弟节点那么就要向上遍历，找父组件的兄弟节点
  			const parent = node.return;
  			if (
  				parent === null ||
  				parent.tag === HostComponent ||
  				parent.tag === HostRoot
  			) {
  				return null;
  			}
  			node = parent;
  		}
  		node.sibling.return = node.return;
  		node = node.sibling;
  		while (node.tag !== HostText && node.tag !== HostComponent) {
  			// 向下遍历，一直遍历到tag类型为Host的节点为止
  			if ((node.flags & Placement) !== NoFlags) {
  				continue findSibling;
  			} else {
  				node!.child!.return = node;
  				node = node.child!;
  			}
  		}
  		if ((node.flags & Placement) === NoFlags) {
        // 找到了节点就返回
  			return node.stateNode;
  		}
  	}
  }
  ```

  接下来我们得修改一下之前的插入方法。

  ```typescript
  function insertOrAppendPlacementNodeIntoContainer(
  	finishedWork: FiberNode,
  	hostParent: Container,
  	before?: Instance
  ) {
  	if (finishedWork.tag === HostComponent || finishedWork.tag === HostText) {
  		if (before) {
  			insertChildToContainer(finishedWork.stateNode, hostParent, before);
  		} else {
  			appendChildToContainer(hostParent, finishedWork.stateNode);
  		}
  		return;
  	}
  	// 向下遍历，找到那个tag类型是HostComponent或者HostText的fiber节点
  	const child = finishedWork.child;
  	if (child !== null) {
  		insertOrAppendPlacementNodeIntoContainer(child, hostParent);
  		let sibling = child.sibling;
  		while (sibling !== null) {
  			insertOrAppendPlacementNodeIntoContainer(sibling, hostParent);
  			sibling = sibling.sibling;
  		}
  	}
  }
  ```

## 二、不足

* 不支持数组与Fragment，比如下面几种情况

  ```html
  <>
  	<div/>
  	<div/>
  </>
  
  <ul>
  	{[<li/>,<li/>]}
  </ul>
  
  <ul>
    <li/>
    <li/>
  	{[<li/>,<li/>]}
  </ul>
  ```

* 可能有未考虑到的边界情况