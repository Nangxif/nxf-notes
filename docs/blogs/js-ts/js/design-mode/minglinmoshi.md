# 模式十六——命令模式

> 有时候需要向某些对象发送请求，但是并不知道请求的接受者是谁，也不知道被请求的操作是什么。需要一种松耦合的方式来设计程序，使得发送者和接受者呢能够消除彼此之间的耦合关系。

命令模式由三种角色构成：

1. 发布者`invoker`（发出命令，调用命令对象，不知道如何执行与谁执行）；
2. 接收者`receiver`（提供对应接口处理请求，不知道谁发起请求）；
3. 命令对象`command`（接收命令，调用接收者对应接口处理发布者的请求）。

```
class Receiver {
	// 接收者类
	excute() {
		console.log("接收者执行请求");
	}
}
class Command {
	// 命令对象类
	constructor(reciver) {
		this.reciver = reciver;
	}
	excute() {
		// 调用接收者对应接口执行
		console.log("命令对象->接收者->对应接口执行");
		this.receiver.excute();
	}
}
class Invoker {
	// 发布类
	constructor(command) {
		this.command = command;
	}
	excute() {
		console.log("发布请求");
		this.command.excute();
	}
}

const order = new Command(new Reciver());
const client = new Invoker(order);

client.excute();
```

