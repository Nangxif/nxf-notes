# CSS-in-JS：一个充满争议的技术方案

HTML、JS、CSS 是 Web 开发的三大核心技术。Web 开发早期，开发人员的工作内容以编写可在浏览器渲染的页面文档为主，此时的最佳实践推崇 “关注点分离“ 原则，使得开发者可以在一个时间点只关注单一技术。通过声明式的语法，CSS 可以脱离 HTML 上下文进行独立维护，同时依赖于选择器、伪选择器、媒体查询等方式与 HTML 松耦合，最终将样式应用于 DOM 元素上。



随着以 React 为首的现代前端开发框架的兴起，在 JS 中维护 CSS 的方案（也就是 CSS-in-JS）成为了当代前端社区的新趋势，以解决在现代 Web 应用开发中使用 CSS 时出现的一些痛点。

CSS-in-JS 的出现与争议
CSS-in-JS （后文简称为 CIJ）在 2014 年由 Facebook 的员工 Vjeux 在 NationJS 会议上提出：可以借用 JS 解决许多 CSS 本身的一些“缺陷”，比如全局作用域、死代码移除、生效顺序依赖于样式加载顺序、常量共享等等问题。
CIJ 的一大特点是它的方案众多，这种看似混乱的状态很符合前端社区喜欢重复造轮子的特征。发展初期，社区在各个方向上探索着用 JS 开发和维护 CSS 的可能性。每隔一段时间，都会有新的语法方案或实现，尝试补充、增强或是修复已有实现。

随着时间流逝，他们中的大多数不是被官方宣布废弃，就是长时间不再维护。如：
glam/glamor:  由 React 的前项目经理 Sunil Pai 维护，首先提出了 CSS 属性接口方案
glamorous by PayPal
aphrodite by Khan
radium by FormidableLabs
从 CIJ 概念的诞生到 6 年后的今天，社区对于它的看法依然充满了争议，并且热度不减。甚至 Chrome 在新版中为了 CIJ 的需求修复了一个问题，这也可以从侧面看出来 CIJ 已经得到了浏览器厂商的重视。



争议主要集中在以下几点：



- 使用 CIJ 是一种伪需求。假如开发者足够理解 CSS 的概念，如 specificity （特异性）、cascading （级联）等，同时利用预、后处理工具（如 scss/postcss）和方法论（如 BEM），只靠 CSS 就足以完成任务
- CIJ 方案和工具过多，缺乏标准，许多处于不成熟的状态，使用起来有较大风险。假如使用了一个方案，就需要承担起这种实现可能会被遗弃的风险
- CIJ 有运行时性能损耗

## 趋于融合的事实标准

虽然 CIJ 还没有形成真正的标准，但在接口 API 设计、功能或是使用体验上，不同的实现方案越来越接近，其中最受欢迎的两个解决方案是 Emotion 和 styled-components。通过几年间的竞争，为了满足开发者的需求，同时结合社区的使用反馈，在不断的更新过程中，它们渐渐具有了几乎相同的 API，只是在内部实现上有所不同。



这种状态形成了 CIJ 在 API 接口上的事实标准。不管是现有的主流方案还是新出现的方案，几乎在接口上使用同样的（或是一部分的）接口设计：CSS prop 与样式组件（styled components，与 styled-components 库名称相同）。以 Emotion 为例：

**css prop**

```css
export function MyContainer({ color, children }) {
  return (
    <div
      css={css`
        padding: 32px;
        background-color: hotpink;
        font-size: 24px;
        &:hover {
          color: ${color};
        }
      `}
    >
      {children}
    </div>
  );
}
```

**样式组件**

```javascript
import styled from '@emotion/styled';

export const MyContainer = styled.div`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  &:hover {
    color: ${(props) => props.color};
  }
`;
```

同时，这两种方案都支持模板字符串或是对象样式。

```javascript
import styled from '@emotion/styled';

export function MyContainer({ color, children }) {
  return (
    <div
      css={{
        padding: '32px',
        backgroundColor: 'hotpink',
        fontSize: '24px',
        '&:hover': {
          color,
        },
      }}
    >
      {children}
    </div>
  );
}

export const MyContainer = styled.div((props) => ({
  padding: '32px',
  backgroundColor: 'hotpink',
  fontSize: '24px',
  '&:hover': {
    color: props.color,
  },
}));
```

两种方案在内部实现中都会享受当代前端工程化的福利，如语法检查、自动增加浏览器属性前缀、帮助开发者增强样式的浏览器兼容性等等。同时利用 vscode-styled-components、stylelint 等代码编辑器插件，我们可以在 JS 代码中增加对于 CSS 的语法高亮支持。

**"css prop" vs "样式组件"**



这两种 CIJ 的 API 接口模式代表着两种组件化样式风格。



css prop 可以算是内联样式的升级版，用户定义的内联样式以 JSX 标签属性的方式与组件紧密结合，可以帮助用户快速迭代开发，让用户可以更快速的定位问题。不过由于样式直接内嵌在 JSX 中，势必在一定程度上会影响组件代码的可读性。



样式组件更像是 CSS 的组件化封装，将样式抽象为语义化的标签，把样式从组件实现中分离出来，让 JSX 结构更“干净整洁”。相对而言，样式组件定义的样式不如内联样式更方便直接，而且需要给额外多出来的样式组件定义新的标签名，会在一定程度上影响开发效率；但从另外一个角度来说，样式组件以更规范的接口提供给团队复用，适合有成熟确定的设计语言的组件库或是产品。

选择用哪一种方案并没有决定性方法论，可根据项目需要进行取舍。

## 新趋势

虽说由于马太效应，CIJ 的市场份额被 styled-components 和 Emotion 吃掉了一大部分，但社区依然有新的实现不断涌现，探索新的 CIJ 方向，或是解决先前技术的不足。

### 移除运行时性能损耗

在框架内部，Emotion 和 styled-components 在浏览器中都有一个运行时，这不光增加了最终构建产物大小，更严重的问题是还带来了运行时成本。举例来说，CSS 属性的实现思路是这样的：

- 解析用户样式，在需要时添加前缀，并将其放入 CSS 类中
- 生成哈希类名
- 利用 CSSOM，创建或更新样式
- 生成新样式时更新 css 节点/规则



对于大型前端项目来说，CIJ 的运行时损耗有时是可以感知到的，这会对用户体验造成一些影响。有些新方案选择将 CSS 在构建时输出为静态 CSS 文件，如 Linaria。不过这种方案有一些语法上的限制，比如不支持内联 CSS 样式。



值得一提的是 @compiled/css-in-js，这个库会用类似于 Angular 的预先（AoT）编译器，将组件样式预先编译为 CSS 字符串，嵌入转译的 JS 代码中。这种方式显著减少了因变量引起的 CSS 冗余问题。



### 原子化

以 Tailwind CSS 为代表，CSS 原子化是使用纯 CSS 的一种流行方案。这种方案中，用户使用库提供的功能性 CSS 类修饰 DOM 结构。下面是一个使用 Tailwind 的例子：

```html
<button class="bg-blue-500 hover:bg-blue-700 rounded">
  Button
</button>
```

其中 bg-blue-500 hover:bg-blue-700 rounded 是 Tailwind 预定义的原子 CSS 类，每个类里面只有一条唯一的样式规则。使用原子化 CSS 有一些好处，比如：减少 CSS 规则冲突可能性（Specificity）；CSS 的大小恒定，不会跟随项目的增长而增长；用户可以直接修改 HTML 属性而不用修改 CSS，改变最终渲染的效果 。



不过选择使用原子化 CSS，用户要么需要自己生成一系列原子化的功能性类（工程化成本），要么需要引入 Tailwind 方案（学习成本）。而 CIJ 给 CSS 原子化带来了一些新的可能性，社区正在探索利用 CIJ 完成自动化的原子化 CSS 的可能性，比如 Styletron、Fela、Otion 等。



原子化 CSS 可能会给 CIJ 带来不少好处，比如 CSS 规则去重。CIJ 在运行时会产生许多新的 CSS 类，增加浏览器的负担，遗憾的是这需要框架本身支持把 CSS 抽离为静态文件的需求。目前流行的 CSS-in-JS 框架，比如 Emotion，暂时还无法支持这样的特性。

