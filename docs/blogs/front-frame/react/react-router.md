# 手写react-router

这里手写的react-router-dom是基于5.1.2版本。

但是react-router-dom的5.1.2的版本在react18以上版本已经不适用了，react-router-dom最新版本的用法已经改变了很多。

我们开始手写react-router-dom，下面是开发的时候的主要依赖包版本

```
"path-to-regexp": "^6.2.1",
"react": "16.13.1",
"react-dom": "16.13.1",
"react-router-dom": "5.1.2",
"react-scripts": "5.0.1"
```

我们这里只实现react-router-dom的一些主要的组件，其中包括

```
- HashRouter
- Link
- Redirect
- Route
- Switch
```

我们一般使用hash路由是这么使用的

```
import {
  HashRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
} from './react-router-dom';

ReactDOM.render(
  <Router>
    <div>
      <Link to="/home">首页</Link>
      <Link to="/profile">个人中心</Link>
      <Link to="/user">用户</Link>
    </div>
    <div>
      <Route path="/home" component={Home} />
      <Route path="/profile" component={Profile} />
      <Route path="/user" component={User} />
    </div>
  </Router>,
  document.getElementById('root')
);
```

我们这里写了三个页面/home、/profile、/user。点击三个Link分别跳到对应的Route。

## 一、HashRouter和Route

我们这里先讲一下react-router-dom的目录结构，其实很简单

```
- index.js 入口文件
- context.js 贯穿整个源码的上下文
- HashRouter.js
- Link.js
- Redirect.js
- Route.js
- Switch.js
```

入口文件的作用就是将几个组件整合到一起然后暴露出去

```
import HashRouter from './HashRouter';
import Route from './Route';
import Link from './Link';
import Redirect from './Redirect';
import Switch from './Switch';

export { HashRouter, Route, Link, Redirect, Switch };
```

由上面的源码我们可以看出，HashRouter组件是包裹着Route组件的，当然，所有的组件都会被这个组件包裹着，HashRouter和BroswerRouter这两个是react-router最顶级的组件，这两个组件的作用是监听hash的变化或者路由的变化，同时更新存储的location状态，最后将这个状态下发到每个子组件，因此我们才会用到react的一个方法`React.createContext();`创建一个上下文来管理这些东西，进行组件的通讯。

### 1.context

```
import React from 'react';
// 这个方法是react16.3新增的
let { Provider, Consumer } = React.createContext();
export { Provider, Consumer };
```

### 2.HashRouter

```
import React, { Component } from 'react';
import { Provider } from './context';

export default class HashRouter extends Component {
  constructor() {
    super();
    // 本地存储的状态，里面包括location
    this.state = {
      location: {
        pathname: window.location.hash.slice(1) || '/',
      },
    };
  }
  componentDidMount() {
    // 默认hash没有时跳转到/
    window.location.hash = window.location.hash || '/';
    // 监听hash值变化，重新设置状态
    window.addEventListener('hashchange', () => {
      this.setState({
        location: {
          ...this.state.location,
          pathname: window.location.hash.slice(1) || '/',
        },
      });
    });
  }
  render() {
  	// 拼接好要传给子组件的对象
    let value = {
      location: this.state.location,
      history: {
        push(to) {
          window.location.hash = to;
        },
      },
    };
    // Provider下发子组件
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}
```

### 3.Route

```
import React, { Component } from 'react';
import { Consumer } from './context';
import { pathToRegexp } from 'path-to-regexp';

export default class Route extends Component {
  render() {
    return (
      <Consumer>
        {(state) => {
          let { path, component: Component, exact = false } = this.props;
          let pathname = state.location.pathname;
          //   根据path实现一个正则 通过正则匹配
          let reg = pathToRegexp(path, [], { end: exact });
          let result = pathname.match(reg);
          let props = {
            location: state.location,
            history: state.history,
          };
          if (result) {
            return <Component {...props}></Component>;
          }
          return null;
        }}
      </Consumer>
    );
  }
}
```

