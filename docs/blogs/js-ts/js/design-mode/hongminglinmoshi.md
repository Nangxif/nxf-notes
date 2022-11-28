# 模式十七——宏命令模式

> 宏命令模式也就是组合模式跟命令模式合并在一起。一组命令的集合。
>

假设有这么一个场景，一个页面有选项卡的功能也有轮播的功能，也有瀑布流，我想做的是，在整个页面加载的时候，就执行一个命令，然后这个命令会遍历执行创建选项卡，轮播以及瀑布流的代码。

```
class MacroCommand {
	constructor() {
		this.list = [];
	}
	add(command) {
		this.list.push(command);
	}
	execute() {
		for(let item of this.list) {
			item.execute();
		}
	}
}

const Tabs = {
	execute() {
		console.log("选项卡执行");
		this.init();
		this.getData();
		this.render();
	},
	init() {
		console.log("init");
	},
	getData() {
		console.log("getData");
	},
	render() {
		console.log("render");
	}
}
const Swipe = {
	execute() {
		console.log("轮播执行");
	}
}
const macroCommand = new MacroCommand();
macroCommand.add(Tabs);
macroCommand.add(Swipe);

macroCommand.execute();
```

