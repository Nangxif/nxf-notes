# 什么是jsx

JSX是一种JavaScript的语法扩展，常在React.js框架中使用，用于定义React元素结构。JSX看起来非常像HTML。为什么JSX能在js环境中运行呢？其实得益于react开发了可以将JSX转译成js代码的babel。

比如我们有下面这段jsx

```html
<div id="1" name="box">
	<span>hello world 1</span>
	<span>hello world 2</span>
</div>
```

那么经过babel的转译，实际最后在运行时会变成下面这段代码

```javascript
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
_jsxs("div", {
  id: "1",
  name: "box",
  children: [
    _jsx("span", {
      children: "hello world 1"
    }),
    _jsx("span", {
      children: "hello world 2"
    })]
});
```

那么接下来我们就来实现一下这个jsx方法，jsx方法会输出一个ReactElement，这种数据结构大致长这个样子

```javascript
const supportSymbol = typeof Symbol === 'function' && Symbol.for;
export const REACT_ELEMENT_TYPE = supportSymbol
	? Symbol.for('react.element')
	: 0xeac7;

const ReactElement = function (
	type: ElementType,
	key: Key,
	ref: Ref,
	props: Props
): ReactElementType {
	const element = {
		// 如何判断当前的数据结构是reactElement呢，用$$typeof
		$$typeof: REACT_ELEMENT_TYPE,
		type,
		key,
		ref,
		props,
		__mark: 'nangxi'
	};
	return element;
};


export const jsx = (type: ElementType, config: any, ...maybeChildren: any) => {
	let key: Key = null;
	const props: Props = {};
	let ref: Ref = null;
	for (const prop in config) {
		const val = config[prop];
		if (prop === 'key') {
			if (val !== undefined) {
				key = '' + val;
			}
			continue;
		}
		if (prop === 'ref') {
			if (val !== undefined) {
				ref = val;
			}
			continue;
		}
		if ({}.hasOwnProperty.call(config, prop)) {
			props[prop] = val;
		}
	}
	const maybeChildrenLength = maybeChildren.length;
	if (maybeChildrenLength > 0) {
		// [child] [child,child]
		if (maybeChildrenLength === 1) {
			props.children = maybeChildren[0];
		} else {
			props.children = maybeChildren;
		}
	}
	return ReactElement(type, key, ref, props);
};
```

