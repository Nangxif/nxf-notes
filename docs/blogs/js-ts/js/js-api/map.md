# 实现Map

```
function MyHashMap () {
	this.initStore();
}
MyHashMap.prototype.initStore = function () {
	this.storeList = new Array(8);
	for(let i = 0;i < this.storeList.length;i++) {
		// 空的链表头
		this.storeList[i] = {};
		this.storeList[i].next = null;
	}
}
MyHashMap.prototype.hash = function (k) {
	return k % this.storeList.length;
}
MyHashMap.prototype.set = function (key, val) {
	// 获取房间索引hash算法
	let index = this.hash(key);
	// 获取房间：链表头
	let queue = this.storeList[index];
	// 找表头下面的对象 覆盖 否则返回undefined
	// 有两种情况：空表头后有数据，之前set过
	// 空表头后有数据 无数据 直接连到空表头
	while(queue.next) {
		// 空表头后有数据，之前set过
		if(queue.next.key === key) {
			// 覆盖
			queue.next.value = val;
			return true;
		} else {
			// 下移指针，指向下一个
			queue = queue.next;
		}
	}
	// 假如是第一个
	queue.next = {
		key: key,
		value: val,
		next: null
	}
}
MyHashMap.prototype.get = function (key) {
	// 获取房间索引hash算法
	let index = this.hash(key);
	// 获取房间：链表头
	let queue = this.storeList[index];
	// 下移到非空表头
	queue = queue.next;
	while(queue) {
		if(queue.key === key) {
			return queue.value;
		} else {
			queue = queue.next;
		}
	}
	return undefined;
}
```

