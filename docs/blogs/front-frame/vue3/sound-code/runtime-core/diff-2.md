# 元素节点组件的diff算法【下】

因为篇幅太长了，所以上一节第三章第5小点放在下节这里讲。

### 5.求最长递增子序列

经历过上面几个步骤之后，也算是优化完毕，剩余的部分就是乱序的。

先提供一个例子，并且这个例子按照上面的步骤执行完之后，s1指针，s2指针（上面说到i指针其实也可以分为两个指针，只是两个指针是同步的），e1指针，e2指针的指向如下

<Image :src="'/front-frame/vue3/sound-code/runtime-core/diff/7.png'" />

我们可以看出这一段需要做乱序比对

```
c d e
e c d h
```

也就是旧子节点的s1-e1部分，新子节点的s2-e2部分。

我们先创建一个映射表（Map），这个映射表的key存储新的子节点的key，value存储的是新的子节点的索引。这个映射表用于下面在遍历旧子节点的时候，查看新子节点是否还有复用旧的子节点。我们先从**s2-e2**遍历新子节点。

```
const keyToNewIndexMap = new Map();
for (let i = s2; i <= e2; i++) {
  keyToNewIndexMap.set(c2[i].key, i);
}
```

得到的Map如下所示

```
Map{
  e: 2,
  c: 3,
  d: 4,
  h: 5
}
```

接着我们要循环旧的子节点（就是循环s1-e1），看一下新子节点的里面有没有旧的子节点（即在keyToNewIndexMap里面有没有旧的子节点），如果有说明要比较差异（patch），如果没有就要添加到新的列表中。如果旧的子节点有，新的子节点没有，那么就要删除。

```
const toBePatched = e2 - s2 + 1; //新元素乱序的总个数
const newIndexToOldIndexMap = new Array(toBePatched).fill(0); 
for (let i = s1; i <= e1; i++) {
  const oldChild = c1[i]; // 老的孩子
  // 用老的孩子去新的里面找
  let newIndex = keyToNewIndexMap.get(oldChild.key); // 传入的依次为c d e 输出的依次为3 4 2
  if (newIndex == undefined) {
    // 就如上面所说，旧的子节点有，但是在新的子节点里面找不到，那么就卸载掉
    unmount(oldChild);
  } else {
    newIndexToOldIndexMap[newIndex - s2] = i + 1; //这个map如果按照上面的例子最后会变成[5,3,4,0]
    patch(oldChild, c2[newIndex], el);
  }
}
```

newIndexToOldIndexMap是一个数组，这个数组的长度是新元素乱序的总个数。这个数组用来记录新的乱序元素中某个元素是否比对过（即patch过）的映射表，为0表示没有被patch过，不为0表示被patch过。这个数组的索引代表新子节点在新列表的位置，值代表旧子节点在旧列表的位置。

<Image :src="'/front-frame/vue3/sound-code/runtime-core/diff/8.png'" />

为什么newIndexToOldIndexMap的值会被加1呢？因为旧元素乱序部分可能第一个元素就是旧的乱序数组的开头，索引为0，但是我们说了索引为0表示没有被patch过，如果0还代表去其他的意思，那就不行了，所以才全部加1。

执行完上面的代码之后，就算执行了patch，也只是比对key相同的元素差异，并不会移动元素的位置。因此执行完上面之后，结果还是a  b  c  d  e  f  g，只不过每个节点都被patch过了。

我们接下来需要进行两个步骤：

1. 如果新的子节点是复用旧的子节点，那么可能需要调整旧的子节点的位置，让其跟新的子节点列表顺序一致；
2. 如果新的子节点在旧的子节点列表里面是没有的，那么需要新增当前这个子节点并且插入到新的子节点列表里面；

<Image :src="'/front-frame/vue3/sound-code/runtime-core/diff/9.png'" />

就拿上面的例子来说，我们需要这样挪动旧的子节点，才能满足新的子节点列表的顺序。旧的子节点c d e在新的子节点里面会被复用，已经被patch过，所以在newIndexToOldIndexMap里面对应的值是大于0的，新的子节点列表里面，h节点是在旧的子节点列表里面找不到的，没有被patch过，因此在newIndexToOldIndexMap里面对应的值为0。

接下来我们先执行第一步，此时需要先求出newIndexToOldIndexMap这个数组的最长递增子序列。

为什么要取最长递增子序列？因为最长递增子序列以为着这个数组的值随着索引的增加而增加（即：索引递增，值递增），那么这样旧节点的顺序才不用改变，因为在新的节点列表里面，这个最长递增子序列对应的几个新子节点顺序跟旧子节点的顺序是一致的，可以跳过插入的步骤（这块优化逻辑在vue2没有，所以有性能浪费）。

我们先来看一下这个例子

```
<ul id="box">
  <li id="li1">1</li>
  <li id="li2">2</li>
  <li id="li3">3</li>
  <li id="li4">4</li>
</ul>
<script>
  var box = document.querySelector('#box');
  var li2 = document.querySelector('#li2');
  var li3 = document.querySelector('#li3');
  box.insertBefore(li3, li2);
</script>

// 最后输出 1，3,2,4
```

我们拿到li3，然后直接插入到li2的前面，li2没有执行插入的动作，但是被迫更改了位置，上面说的插入的步骤，就是指这一步。按照上面的例子c,d两个节点是不用更换位置的，直接把e插入到c之前即可，那么我们的最长递增子序列，就是算出c和d这两个不用更换位置的节点的位置。

#### ①最长递增子序列的原理以及实现

**求最长递增子序列（贪心算法+二分法查找）**

举个例子

```
2  3  1  5  6  8  7  9  4  求最长递增子序列的长度
```

思路：

1. 遍历这个数组，如果当前这一项比我们最后一项大，则直接放到末尾；

2. 如果当前这一项比最后一项小，需要在序列中通过二分法查找到比当前大的这一项，用他来替换掉；

3. 最优的情况就是默认递增；

所以上面的例子我们一步一步取值的话，会是这么一个流程

```
 * 2
 * 2 3
 * 1 3
 * 1 3 5
 * 1 3 5 6
 * 1 3 5 6 8
 * 1 3 5 6 7
 * 1 3 5 6 7 9
 * 1 3 4 6 7 9
```

虽然算出来的结果可能不太对，但是长度肯定是对的。

因为4不应该在第三个位置（即6的前面），所以这个结果确实不太对，但是算出来的长度是对的。

有什么办法让这个结果也是对的呢？我们引申出回溯的思想。

```
数组 2  3  1  5  6  8  7  9  4
索引 0  1  2  3  4  5  6  7  8
```

第一步放入2，不用记录前驱节点

第二步放入3，需要记录前驱节点，前驱节点为2，前驱节点在原数组索引为0

第三步放入1，需要记录前驱节点，前驱节点为undefined，不记录索引

第四步放入5，需要记录前驱节点，前驱节点为3，前驱节点在原数组索引为1

第五步放入6，需要记录前驱节点，前驱节点为5，前驱节点在原数组索引为3

第六步放入8，需要记录前驱节点，前驱节点为6，前驱节点在原数组索引为4

第七步放入7，需要记录前驱节点，前驱节点为6，前驱节点在原数组索引为4

第八步放入9，需要记录前驱节点，前驱节点为7，前驱节点在原数组索引为6

第九步放入4，需要记录前驱节点，前驱节点为3，前驱节点在原数组索引为1

上面1 3 4 6 7 9 最后一位数字9一定是正确的，我们从9往前推

9的索引是7，前一位值是7，前一位索引是6

7的索引是6，前一位值是6，前一位索引是4

6的索引是4，前一位值是5，前一位索引是3

5的索引是3，前一位值是3，前一位索引是1

3的索引是1，前一位值是2，前一位索引是0

结果就是

```
2  3  5  6  7  9
```

当然这个答案可能不是唯一的，但是我们只需要得到其中的一个最长的递增子序列，那么这个优化就已经达到了最大化了。

```
export function getSequence(arr: number[]) {
  const len = arr.length;
  const result = [0]; //以默认第0个为基准来做序列，存放的也是索引，因为一开始要取arr[0]
  // p的索引是原来arr的值对应的索引，p的值对应的是前驱节点的索引
  const p = new Array(len).fill(0); //复制数组，最后要标记索引，放的东西不用关心，但是要和数组一样长
  let start;
  let end;
  let middle;
  let resultLastIndex;
  for (let i = 0; i < len; i++) {
    let arrI = arr[i];
    if (arrI !== 0) {
      // 因为vue里面的序列中，0意味着没有意义需要创建
      // 取出最后一个值的索引
      resultLastIndex = result[result.length - 1];
      if (arr[resultLastIndex] < arrI) {
        // 比较最后一项和当前项的值，如果比最后的大，则将当前索引当道结果集合中
        result.push(i);
        p[i] = resultLastIndex; //当前放到末尾的要记住他前面的那个节点是谁
        continue;
      }
      //   这里需要通过二分法查找，在结果集合中找到比当前值还大的，用当前的值的索引将其替换掉
      start = 0;
      end = result.length - 1;
      while (start < end) {
        // start===end的时候就停止了
        // 这个二分查找只是在找索引
        // 向下取整
        middle = ((start + end) / 2) | 0;
        if (arr[result[middle]] < arrI) {
          start = middle + 1;
        } else {
          end = middle;
        }
      }
      // 找到中间值后，我们需要做替换操作
      // 下面这里用arr[result[end]]或者arr[result[start]]都可以
      // 如果是相等的话就没必要替换了，但是如果当前的值比选中的这个值还小，那就有必要替换
      if (arr[result[end]] > arrI) {
        // 这里用当前这一项替换掉已有的比当前大的那一项（即更有潜力的那一项）
        result[end] = i;
        p[i] = result[end - 1]; //记住他的前一个节点的索引是谁
      }
    }
  }
  // 通过最后一项进行回溯
  let index = result.length;
  let last = result[index - 1]; //找到最后一项了
  while (index-- > 0) {
    // 倒叙追溯
    result[index] = last; //最后一项是确定的
    // 然后把last赋值为p的上一个索引值，p存的是result的值，存的是追溯的值
    last = p[last];
  }
  return result;
}
```

#### ②使用最长递增子序列

上面的最长递增子序列算出来之后，我们就要开始使用它。

遍历新的子节点乱序的部分（倒着遍历，因为我们用不了appendChild方法，appendChild方法会插入到节点列表的末尾，但是我们要插入的地方不一定是末尾，所以不适用，我们只能用insertBefore）因此我们要从后面往前遍历，先找出乱序的最后一项，查看这一项的后面是否有兄弟节点，如果为null的话就说明是最后一项了，然后拿这个兄弟节点为参照物，通过遍历，一个节点一个节点往前插入。

如果检测到在newIndexToOldIndexMap对应的值为0的，即没有被patch过的，说明这个节点是新增的。

如果有被patch过（即在newIndexToOldIndexMap对应的值大于0），那么说明已经是比对过属性的儿子了，这种元素被创建过了，才能走到比对的流程，因此虚拟节点肯定有el属性（虚拟节点的真实节点）。如果这个新子节点的索引刚好有在我们求出来的最长递增子序列里面，那么我们就跳过插入的步骤，如果没有，那么我们就执行插入的操作。

```
const increment = getSequence(newIndexToOldIndexMap);
let j = increment.length - 1;
// 这里遍历的是新子节点树
for (let i = toBePatched - 1; i >= 0; i--) {
    let index = i + s2;
    let current = c2[index]; //找到h
    // 如果anchor为null的话说明h是新节点的最后一项了
    let anchor = index + 1 < c2.length ? c2[index + 1].el : null;
    // 但是按照上面的例子，当前的h是新增的还没有所谓的el
    if (newIndexToOldIndexMap[i] === 0) {
      // 为0表示这个元素没有被patch（比对）过，所以要创建
      patch(null, current, el, anchor);
    } else {
      // 不是0的话，说明已经是比对过属性的儿子了
      // 这种元素被创建过了，才能走到比对的流程，因此肯定有el
      if (i != increment[j]) {
          hostInsert(current.el, el, anchor);
          // 但是如果我们一个元素一个元素地插入的话，性能可能有些差，因为按照上面的例子
          // c d的顺序是没变的，可以整块直接插入
          // 从newIndexToOldIndexMap的结果[5,3,4,0]我们可以发现
          // c d是里面的最长递增子序列 这块优化逻辑在vue2没有所以有性能浪费
        } else {
          // increment的长度和newIndexToOldIndexMap可能不一样，j--表示直接跳过插入逻辑
          j--;
        }
    }
}
```

至此，diff算法告一段落！！！