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
          let props = {
            location: state.location,
            history: state.history,
          };
          if (pathname === path) {
            return <Component {...props}></Component>;
          }
          return null;
        }}
      </Consumer>
    );
  }
}
```

完成上面这三个文件之后，我们就基本实现了一个hash路由。

在上面的Route实现中，匹配路由采用`===`的方式实在太过暴力。

在真正的react-router-dom包中，如果Route不配置exact属性，那么`/home/1`这个路径也可以匹配上`/home`这个路径，那这个效果是怎么实现的？

在这里我们介绍一个包`path-to-regexp`，这个包的作用就是将路径转换为一个正则，我们可以来举个例子

```
pathToRegexp("/home", [], { end: false });
// 会生成这样的正则/^\/home(?:[\/#\?](?=[]|$))?(?=[\/#\?]|[]|$)/i
// 这个正则可以匹配/home，/home/1，但是不可以匹配/homes
pathToRegexp("/home", [], { end: true });
// 会生成这样的正则/^\/home[\/#\?]?$/i
// 这个正则可以匹配/home，但是不能匹配/home/1和/homes
```

Route的exact属性，就是通过他来实现的。

因此我们修改一下Route组件

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

现在就可以实现我们刚刚说的效果了。通过exact去开启是否严格匹配或者说全匹配路径。

那么现在问题来了，如果我们配置了两个路由一样的，比如

```
<Route path="/home" component={Home} />
<Route path="/home" component={Home} />
```

那么界面上会显示`/home`路由的内容两次。

有没有什么办法能让它显示一次呢？

## 二、Switch

`Switch`的作用就是匹配一个组件

`Switch`的使用方式如下

```
<Switch>
    <Route path="/home" component={Home} />
    <Route path="/home" component={Home} />
    <Route path="/profile" component={Profile} />
    <Route path="/user" component={User} />
</Switch>
```

这种情况下`/home`的内容只会显示一次。

因此我们也可以知道`Switch`的功能就是遍历子节点的`path`属性，用pathToRegexp工具将`path`属性生成一个正则，然后与浏览器输入的路径进行一一匹配，将第一个匹配到的路由组件返回即可。

```
import React, { Component } from 'react';
import { Consumer } from './context';
import { pathToRegexp } from 'path-to-regexp';

// Switch的作用就是匹配一个组件
export default class Switch extends Component {
  render() {
    return (
      <Consumer>
        {(state) => {
          let pathname = state.location.pathname;
          let children = this.props.children;
          for (var i = 0; i < children.length; i++) {
            let child = children[i];
            // redirect可能没有path属性
            let path = child.props.path || '';
            let reg = pathToRegexp(path, [], { end: false });
            if (reg.test(pathname)) {
              // 把匹配到的组件返回即可
              return child;
            }
          }
          return null;
        }}
      </Consumer>
    );
  }
}
```

上面pathToRegexp工具的end属性之所以用false，是因为路由是否全匹配是有Route组件来决定的，因此`Switch`组件里面不用那么严格限制全匹配。

## 三、Redirect

我们在浏览器输入路由的时候，有时候可能会输入一个错误的路由，导致页面渲染不出来，这时候我们需要一个兜底的页面，`Redirect`组件的功能就是，如果上面`Route`组件的`path`没有一个能匹配上，那么就显示`Redirect`组件的内容。

使用方式如下

```
<Switch>
    <Route path="/home" component={Home} />
    <Route path="/profile" component={Profile} />
    <Route path="/user" component={User} />
    <Redirect to="/home"></Redirect>
</Switch>
```

`Redirect`组件的使用会放在所有Route的下面，当`Switch`遍历匹配不到上面的`Route`之后，`Switch`里面的`path`变量就会变为空字符串，因为`Redirect`组件没有`path`属性，因此`reg.text(pathname)`就会变为true，进而渲染`Redirect`组件的内容，所以这个组件的实现也很简单

```
import React, { Component } from 'react';
import { Consumer } from './context';

export default class Redirect extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Consumer>
        {(state) => {
          // 重定向就是匹配不到后直接跳转redirect中的to路径
          state.history.push(this.props.to);
          return null;
        }}
      </Consumer>
    );
  }
}
```

直接跳转`to`定义的属性就可以了。

## 四、Link

知道路由怎么匹配了，那么总得有个组件可以实现跳转的吧。

```
<Router>
    <div>
      <Link to="/home">首页</Link>
      <Link to="/profile">个人中心</Link>
      <Link to="/user">用户</Link>
    </div>
    <div>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/user" component={User} />
        <Redirect to="/home"></Redirect>
      </Switch>
    </div>
</Router>
```

源码很简单

```
import React, { Component } from 'react';
import { Consumer } from './context';
export default class Link extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Consumer>
        {(state) => {
          return (
            <a
              onClick={() => {
                state.history.push(this.props.to);
              }}
            >
              {this.props.children}
            </a>
          );
        }}
      </Consumer>
    );
  }
}
```

跳就完事了。

## 五、补充

react-router有这么一种用法，叫“路由动态传参”。

比如

```
/home/:id
/home/:id/:name
```

上面这两个路径可以匹配到`/home`路由的内容，与此同时，在`/home`路由渲染的页面的`props`参数里面，能获取到`match`对象，这个`match`对象里面有个`params`对象，这个对象存储着所有动态传参的键值。

因此我们得改一下`Route`组件。

在此之前我们先看一下`props.match.params`这个对象里面的内容是怎么来的。

```
let k = [];
let r = pathToRegexp('/home/:id/:name', k, { end: true });
console.log('k=', k);
console.log('match=', '/home/1/2'.match(r));
```

k数组会输出这么一个东西。

<Image :src="'/front-frame/react/react-router/1.png'" />

k数组元素的name属性，就是上面的对应的id和name这两个key，而match输出的，就是对应的值。因此，`match.params`的参数可以这么实现。

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
          let keys = [];
          let reg = pathToRegexp(path, keys, { end: exact });
          keys = keys.map((item) => item.name);
          let result = pathname.match(reg);
          let [url, ...values] = result || [];
          let props = {
            location: state.location,
            history: state.history,
            match: {
              params: keys.reduce((obj, current, idx) => {
                obj[current] = values[idx];
                return obj;
              }, {}),
            },
          };
          if (result) {
            return <Component {...props}></Component>;
          }
          return null;
        }}
      </Consumer>
      // </Consumer>
    );
  }
}
```

