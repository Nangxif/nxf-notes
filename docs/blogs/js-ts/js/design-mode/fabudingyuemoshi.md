# 模式十二——发布订阅模式

> 1. 观察者和目标要相互知道
> 2. 发布者和订阅者不用互相知道，通过第三方实现调度。属于经过解耦合的观察者模式
>

接下来我们先来写一个极简单版的发布订阅模式，当然这个发布订阅模式也无法实现事件信息筛选，但是理念上已经体现出来了订阅发布。

```
const PubSub = {
	list: [],
	publish() {
		this.list.forEach(item => item());
	},
	subscribe(cb) {
		this.list.push(cb);
	},
}
function testA() {
	console.log("testA");
}
function testB() {
	console.log("testB");
}
PubSub.subscribe(testA);

PubSub.subscribe(testB);
PubSub.publish();
```

现在我们一旦publish，那么所有subscribe的函数都会被触发，我们所期望的，是能够publish（发布）AAA就只触发AAA订阅的方法。

```
PubSub.subscribe("AAA",testA);
PubSub.publish("AAA");
```

接下来我们改造一下这个发布订阅

```
const PubSub = {
	message: {},
	publish(type, data) {
		if(!this.message[type]) {
			return;
		}else {
			this.message[type].forEach(item => item(data));
		}
	},
	subscribe(type, cb) {
		if(!this.message[type]) {
			this.message[type] = [cb];
		}else {
			this.message[type].push(cb);
		}
	},
	unSubscribe(type, cb) {
		if(!this.message[type]) {
			return;
		}
		if(!cb) {
			// 取消所有当前type事件
			this.message[type] && (this.message[type].length = 0);
		}else {
			this.message[type] = this..message[type].filter(item => item != cb);
		}
	}
}
function testA(data) {
	console.log("testA", data);
}
function testB(data) {
	console.log("testB", data);
}
PubSub.subscribe("A", testA);
PubSub.subscribe("B", testB);
PubSub.publish("A");
```