# 模式二十——职责链模式

> 使多个对象都有机会处理请求，从而避免了请求的发送者与多个接收者直接的耦合关系，将这些接收者连接成一条链，顺着这条链传递该请求，直到找到能处理该请求的对象。

我们可以使用职责链模式来实现表单校验

```
btn.onclick = function() {
	if(input.value.length === 0) {
		console.log("这里不能为空");
	} else if(Number.isNaN(_input.value)) {
		console.log("这里必须是数字");
	} else if(input.value.length < 6) {
		console.log("这里必须要大于6个数字");
	}
}
```

上面这种写法，如果这个输入框还有更多校验规则，那么我们就得一个一个if...else往上加，无疑增加了代码的阅读难度。我们用职责链模式来修改一下。

```
function checkEmpty() {
	if(input.value.length === 0) {
		console.log("这里不能为空");
		return;
	}
	return "next";
}
function checkNumber() {
	if(Number.isNaN(_input.value)) {
		console.log("这里必须是数字");
		return;
	}
	return "next";
}
function checkLength() {
	if(input.value.length < 6) {
		console.log("这里必须要大于6个数字");
		return;
	}
	return "next";
}
class Chain {
	constructor(fn) {
		this.checkRule = fn;
		this.nextRule = null;
	}
	end() {
		this.nextRule = {
			check: ()=> "end";
		}
	}
	addRule(nextRule) {
		this.nextRule = new Chain(nextRule);
		return this.nextRule;
	}
	check() {
		this.checkRule() === "next"? this.nextRule.check(): null;
	}
}
const checks = new Chain(checkEmpty);
checks.addRule(checkNumber).addRule(checkLength).end();
btn.onclick = function() {
	checks.check();
}
```

