# updateQueue

每个fiber节点里面，都有一个updateQueue属性，这个属性里面保存着一个对象，对象里面有shared属性，这个属性也保存着一个对象，这个对象里面有一个pending属性，这个属性会指向一个action，当然，如果没有任何更新的话，这个pending指向一个null。初始图如下

<Image :src="'/front-frame/react/sound-code/update-queue/1.png'" />

那么这个updateQueue它是什么样的一个工作机制呢？
假设现在有一个fiber长这样

```
const queue = createUpdateQueue();
// 这个fiber初始值为0
let fiber = { baseState: {number: 0} };
// 如果现在需要更新这个number值，那么就需要创建一个Update然后将这个Update插入到queue队列里面去
const update = createUpdate({ number: 1 });
enqueueUpdate(queue, update);

```

