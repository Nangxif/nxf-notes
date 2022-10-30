import{_ as s,c as n,o as a,h as l}from"./app.da77c6ed.js";const m=JSON.parse('{"title":"\u624B\u5199react-router","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001HashRouter\u548CRoute","slug":"\u4E00\u3001hashrouter\u548Croute","link":"#\u4E00\u3001hashrouter\u548Croute","children":[{"level":3,"title":"1.context","slug":"_1-context","link":"#_1-context","children":[]},{"level":3,"title":"2.HashRouter","slug":"_2-hashrouter","link":"#_2-hashrouter","children":[]},{"level":3,"title":"3.Route","slug":"_3-route","link":"#_3-route","children":[]}]}],"relativePath":"blogs/front-frame/react/react-router.md","lastUpdated":1667144493000}'),e={name:"blogs/front-frame/react/react-router.md"},p=l(`<h1 id="\u624B\u5199react-router" tabindex="-1">\u624B\u5199react-router <a class="header-anchor" href="#\u624B\u5199react-router" aria-hidden="true">#</a></h1><p>\u8FD9\u91CC\u624B\u5199\u7684react-router-dom\u662F\u57FA\u4E8E5.1.2\u7248\u672C\u3002</p><p>\u4F46\u662Freact-router-dom\u76845.1.2\u7684\u7248\u672C\u5728react18\u4EE5\u4E0A\u7248\u672C\u5DF2\u7ECF\u4E0D\u9002\u7528\u4E86\uFF0Creact-router-dom\u6700\u65B0\u7248\u672C\u7684\u7528\u6CD5\u5DF2\u7ECF\u6539\u53D8\u4E86\u5F88\u591A\u3002</p><p>\u6211\u4EEC\u5F00\u59CB\u624B\u5199react-router-dom\uFF0C\u4E0B\u9762\u662F\u5F00\u53D1\u7684\u65F6\u5019\u7684\u4E3B\u8981\u4F9D\u8D56\u5305\u7248\u672C</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&quot;path-to-regexp&quot;: &quot;^6.2.1&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;react&quot;: &quot;16.13.1&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;react-dom&quot;: &quot;16.13.1&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;react-router-dom&quot;: &quot;5.1.2&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;react-scripts&quot;: &quot;5.0.1&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u6211\u4EEC\u8FD9\u91CC\u53EA\u5B9E\u73B0react-router-dom\u7684\u4E00\u4E9B\u4E3B\u8981\u7684\u7EC4\u4EF6\uFF0C\u5176\u4E2D\u5305\u62EC</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">- HashRouter</span></span>
<span class="line"><span style="color:#A6ACCD;">- Link</span></span>
<span class="line"><span style="color:#A6ACCD;">- Redirect</span></span>
<span class="line"><span style="color:#A6ACCD;">- Route</span></span>
<span class="line"><span style="color:#A6ACCD;">- Switch</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u6211\u4EEC\u4E00\u822C\u4F7F\u7528hash\u8DEF\u7531\u662F\u8FD9\u4E48\u4F7F\u7528\u7684</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import {</span></span>
<span class="line"><span style="color:#A6ACCD;">  HashRouter as Router,</span></span>
<span class="line"><span style="color:#A6ACCD;">  Route,</span></span>
<span class="line"><span style="color:#A6ACCD;">  Link,</span></span>
<span class="line"><span style="color:#A6ACCD;">  Redirect,</span></span>
<span class="line"><span style="color:#A6ACCD;">  Switch,</span></span>
<span class="line"><span style="color:#A6ACCD;">} from &#39;./react-router-dom&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">ReactDOM.render(</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;Router&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;Link to=&quot;/home&quot;&gt;\u9996\u9875&lt;/Link&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;Link to=&quot;/profile&quot;&gt;\u4E2A\u4EBA\u4E2D\u5FC3&lt;/Link&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;Link to=&quot;/user&quot;&gt;\u7528\u6237&lt;/Link&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;Route path=&quot;/home&quot; component={Home} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;Route path=&quot;/profile&quot; component={Profile} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;Route path=&quot;/user&quot; component={User} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/Router&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  document.getElementById(&#39;root&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>\u6211\u4EEC\u8FD9\u91CC\u5199\u4E86\u4E09\u4E2A\u9875\u9762/home\u3001/profile\u3001/user\u3002\u70B9\u51FB\u4E09\u4E2ALink\u5206\u522B\u8DF3\u5230\u5BF9\u5E94\u7684Route\u3002</p><h2 id="\u4E00\u3001hashrouter\u548Croute" tabindex="-1">\u4E00\u3001HashRouter\u548CRoute <a class="header-anchor" href="#\u4E00\u3001hashrouter\u548Croute" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u8FD9\u91CC\u5148\u8BB2\u4E00\u4E0Breact-router-dom\u7684\u76EE\u5F55\u7ED3\u6784\uFF0C\u5176\u5B9E\u5F88\u7B80\u5355</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">- index.js \u5165\u53E3\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">- context.js \u8D2F\u7A7F\u6574\u4E2A\u6E90\u7801\u7684\u4E0A\u4E0B\u6587</span></span>
<span class="line"><span style="color:#A6ACCD;">- HashRouter.js</span></span>
<span class="line"><span style="color:#A6ACCD;">- Link.js</span></span>
<span class="line"><span style="color:#A6ACCD;">- Redirect.js</span></span>
<span class="line"><span style="color:#A6ACCD;">- Route.js</span></span>
<span class="line"><span style="color:#A6ACCD;">- Switch.js</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u5165\u53E3\u6587\u4EF6\u7684\u4F5C\u7528\u5C31\u662F\u5C06\u51E0\u4E2A\u7EC4\u4EF6\u6574\u5408\u5230\u4E00\u8D77\u7136\u540E\u66B4\u9732\u51FA\u53BB</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import HashRouter from &#39;./HashRouter&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import Route from &#39;./Route&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import Link from &#39;./Link&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import Redirect from &#39;./Redirect&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import Switch from &#39;./Switch&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export { HashRouter, Route, Link, Redirect, Switch };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u7531\u4E0A\u9762\u7684\u6E90\u7801\u6211\u4EEC\u53EF\u4EE5\u770B\u51FA\uFF0CHashRouter\u7EC4\u4EF6\u662F\u5305\u88F9\u7740Route\u7EC4\u4EF6\u7684\uFF0C\u5F53\u7136\uFF0C\u6240\u6709\u7684\u7EC4\u4EF6\u90FD\u4F1A\u88AB\u8FD9\u4E2A\u7EC4\u4EF6\u5305\u88F9\u7740\uFF0CHashRouter\u548CBroswerRouter\u8FD9\u4E24\u4E2A\u662Freact-router\u6700\u9876\u7EA7\u7684\u7EC4\u4EF6\uFF0C\u8FD9\u4E24\u4E2A\u7EC4\u4EF6\u7684\u4F5C\u7528\u662F\u76D1\u542Chash\u7684\u53D8\u5316\u6216\u8005\u8DEF\u7531\u7684\u53D8\u5316\uFF0C\u540C\u65F6\u66F4\u65B0\u5B58\u50A8\u7684location\u72B6\u6001\uFF0C\u6700\u540E\u5C06\u8FD9\u4E2A\u72B6\u6001\u4E0B\u53D1\u5230\u6BCF\u4E2A\u5B50\u7EC4\u4EF6\uFF0C\u56E0\u6B64\u6211\u4EEC\u624D\u4F1A\u7528\u5230react\u7684\u4E00\u4E2A\u65B9\u6CD5<code>React.createContext();</code>\u521B\u5EFA\u4E00\u4E2A\u4E0A\u4E0B\u6587\u6765\u7BA1\u7406\u8FD9\u4E9B\u4E1C\u897F\uFF0C\u8FDB\u884C\u7EC4\u4EF6\u7684\u901A\u8BAF\u3002</p><h3 id="_1-context" tabindex="-1">1.context <a class="header-anchor" href="#_1-context" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import React from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u8FD9\u4E2A\u65B9\u6CD5\u662Freact16.3\u65B0\u589E\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">let { Provider, Consumer } = React.createContext();</span></span>
<span class="line"><span style="color:#A6ACCD;">export { Provider, Consumer };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_2-hashrouter" tabindex="-1">2.HashRouter <a class="header-anchor" href="#_2-hashrouter" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import React, { Component } from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { Provider } from &#39;./context&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default class HashRouter extends Component {</span></span>
<span class="line"><span style="color:#A6ACCD;">  constructor() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    super();</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u672C\u5730\u5B58\u50A8\u7684\u72B6\u6001\uFF0C\u91CC\u9762\u5305\u62EClocation</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.state = {</span></span>
<span class="line"><span style="color:#A6ACCD;">      location: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        pathname: window.location.hash.slice(1) || &#39;/&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  componentDidMount() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u9ED8\u8BA4hash\u6CA1\u6709\u65F6\u8DF3\u8F6C\u5230/</span></span>
<span class="line"><span style="color:#A6ACCD;">    window.location.hash = window.location.hash || &#39;/&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u76D1\u542Chash\u503C\u53D8\u5316\uFF0C\u91CD\u65B0\u8BBE\u7F6E\u72B6\u6001</span></span>
<span class="line"><span style="color:#A6ACCD;">    window.addEventListener(&#39;hashchange&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.setState({</span></span>
<span class="line"><span style="color:#A6ACCD;">        location: {</span></span>
<span class="line"><span style="color:#A6ACCD;">          ...this.state.location,</span></span>
<span class="line"><span style="color:#A6ACCD;">          pathname: window.location.hash.slice(1) || &#39;/&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">      });</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  	// \u62FC\u63A5\u597D\u8981\u4F20\u7ED9\u5B50\u7EC4\u4EF6\u7684\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#A6ACCD;">    let value = {</span></span>
<span class="line"><span style="color:#A6ACCD;">      location: this.state.location,</span></span>
<span class="line"><span style="color:#A6ACCD;">      history: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        push(to) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          window.location.hash = to;</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;">    // Provider\u4E0B\u53D1\u5B50\u7EC4\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">    return &lt;Provider value={value}&gt;{this.props.children}&lt;/Provider&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><h3 id="_3-route" tabindex="-1">3.Route <a class="header-anchor" href="#_3-route" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import React, { Component } from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { Consumer } from &#39;./context&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { pathToRegexp } from &#39;path-to-regexp&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default class Route extends Component {</span></span>
<span class="line"><span style="color:#A6ACCD;">  render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;Consumer&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        {(state) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          let { path, component: Component, exact = false } = this.props;</span></span>
<span class="line"><span style="color:#A6ACCD;">          let pathname = state.location.pathname;</span></span>
<span class="line"><span style="color:#A6ACCD;">          //   \u6839\u636Epath\u5B9E\u73B0\u4E00\u4E2A\u6B63\u5219 \u901A\u8FC7\u6B63\u5219\u5339\u914D</span></span>
<span class="line"><span style="color:#A6ACCD;">          let reg = pathToRegexp(path, [], { end: exact });</span></span>
<span class="line"><span style="color:#A6ACCD;">          let result = pathname.match(reg);</span></span>
<span class="line"><span style="color:#A6ACCD;">          let props = {</span></span>
<span class="line"><span style="color:#A6ACCD;">            location: state.location,</span></span>
<span class="line"><span style="color:#A6ACCD;">            history: state.history,</span></span>
<span class="line"><span style="color:#A6ACCD;">          };</span></span>
<span class="line"><span style="color:#A6ACCD;">          if (result) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            return &lt;Component {...props}&gt;&lt;/Component&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">          return null;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }}</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/Consumer&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    );</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div>`,22),r=[p];function o(c,t,i,u,b,C){return a(),n("div",null,r)}const d=s(e,[["render",o]]);export{m as __pageData,d as default};
