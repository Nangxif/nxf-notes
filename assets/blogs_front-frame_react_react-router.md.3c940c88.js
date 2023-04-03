import{_ as e,c as r,b as s,h as a,o,e as n}from"./app.9b1cc3ec.js";const h=JSON.parse('{"title":"\u624B\u5199react-router","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001HashRouter\u548CRoute","slug":"\u4E00\u3001hashrouter\u548Croute","link":"#\u4E00\u3001hashrouter\u548Croute","children":[{"level":3,"title":"1.context","slug":"_1-context","link":"#_1-context","children":[]},{"level":3,"title":"2.HashRouter","slug":"_2-hashrouter","link":"#_2-hashrouter","children":[]},{"level":3,"title":"3.Route","slug":"_3-route","link":"#_3-route","children":[]}]},{"level":2,"title":"\u4E8C\u3001Switch","slug":"\u4E8C\u3001switch","link":"#\u4E8C\u3001switch","children":[]},{"level":2,"title":"\u4E09\u3001Redirect","slug":"\u4E09\u3001redirect","link":"#\u4E09\u3001redirect","children":[]},{"level":2,"title":"\u56DB\u3001Link","slug":"\u56DB\u3001link","link":"#\u56DB\u3001link","children":[]},{"level":2,"title":"\u4E94\u3001\u8865\u5145","slug":"\u4E94\u3001\u8865\u5145","link":"#\u4E94\u3001\u8865\u5145","children":[]},{"level":2,"title":"\u516D\u3001BroswerRouter","slug":"\u516D\u3001broswerrouter","link":"#\u516D\u3001broswerrouter","children":[]},{"level":2,"title":"\u4E03\u3001\u6E90\u7801","slug":"\u4E03\u3001\u6E90\u7801","link":"#\u4E03\u3001\u6E90\u7801","children":[]}],"relativePath":"blogs/front-frame/react/react-router.md","lastUpdated":1680491167000}'),c={name:"blogs/front-frame/react/react-router.md"},t=a(`<h1 id="\u624B\u5199react-router" tabindex="-1">\u624B\u5199react-router <a class="header-anchor" href="#\u624B\u5199react-router" aria-hidden="true">#</a></h1><p>\u8FD9\u91CC\u624B\u5199\u7684react-router-dom\u662F\u57FA\u4E8E5.1.2\u7248\u672C\u3002</p><p>\u4F46\u662Freact-router-dom\u76845.1.2\u7684\u7248\u672C\u5728react18\u4EE5\u4E0A\u7248\u672C\u5DF2\u7ECF\u4E0D\u9002\u7528\u4E86\uFF0Creact-router-dom\u6700\u65B0\u7248\u672C\u7684\u7528\u6CD5\u5DF2\u7ECF\u6539\u53D8\u4E86\u5F88\u591A\u3002</p><p>\u6211\u4EEC\u5F00\u59CB\u624B\u5199react-router-dom\uFF0C\u4E0B\u9762\u662F\u5F00\u53D1\u7684\u65F6\u5019\u7684\u4E3B\u8981\u4F9D\u8D56\u5305\u7248\u672C</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&quot;path-to-regexp&quot;: &quot;^6.2.1&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;react&quot;: &quot;16.13.1&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;react-dom&quot;: &quot;16.13.1&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;react-router-dom&quot;: &quot;5.1.2&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;react-scripts&quot;: &quot;5.0.1&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u6211\u4EEC\u8FD9\u91CC\u53EA\u5B9E\u73B0react-router-dom\u7684\u4E00\u4E9B\u4E3B\u8981\u7684\u7EC4\u4EF6\uFF0C\u5176\u4E2D\u5305\u62EC</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">- HashRouter</span></span>
<span class="line"><span style="color:#A6ACCD;">- BroswerRouter</span></span>
<span class="line"><span style="color:#A6ACCD;">- Link</span></span>
<span class="line"><span style="color:#A6ACCD;">- Redirect</span></span>
<span class="line"><span style="color:#A6ACCD;">- Route</span></span>
<span class="line"><span style="color:#A6ACCD;">- Switch</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u6211\u4EEC\u4E00\u822C\u4F7F\u7528hash\u8DEF\u7531\u662F\u8FD9\u4E48\u4F7F\u7528\u7684</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import {</span></span>
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
<span class="line"><span style="color:#A6ACCD;">          let props = {</span></span>
<span class="line"><span style="color:#A6ACCD;">            location: state.location,</span></span>
<span class="line"><span style="color:#A6ACCD;">            history: state.history,</span></span>
<span class="line"><span style="color:#A6ACCD;">          };</span></span>
<span class="line"><span style="color:#A6ACCD;">          if (pathname === path) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            return &lt;Component {...props}&gt;&lt;/Component&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">          return null;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }}</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/Consumer&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    );</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>\u5B8C\u6210\u4E0A\u9762\u8FD9\u4E09\u4E2A\u6587\u4EF6\u4E4B\u540E\uFF0C\u6211\u4EEC\u5C31\u57FA\u672C\u5B9E\u73B0\u4E86\u4E00\u4E2Ahash\u8DEF\u7531\u3002</p><p>\u5728\u4E0A\u9762\u7684Route\u5B9E\u73B0\u4E2D\uFF0C\u5339\u914D\u8DEF\u7531\u91C7\u7528<code>===</code>\u7684\u65B9\u5F0F\u5B9E\u5728\u592A\u8FC7\u66B4\u529B\u3002</p><p>\u5728\u771F\u6B63\u7684react-router-dom\u5305\u4E2D\uFF0C\u5982\u679CRoute\u4E0D\u914D\u7F6Eexact\u5C5E\u6027\uFF0C\u90A3\u4E48<code>/home/1</code>\u8FD9\u4E2A\u8DEF\u5F84\u4E5F\u53EF\u4EE5\u5339\u914D\u4E0A<code>/home</code>\u8FD9\u4E2A\u8DEF\u5F84\uFF0C\u90A3\u8FD9\u4E2A\u6548\u679C\u662F\u600E\u4E48\u5B9E\u73B0\u7684\uFF1F</p><p>\u5728\u8FD9\u91CC\u6211\u4EEC\u4ECB\u7ECD\u4E00\u4E2A\u5305<code>path-to-regexp</code>\uFF0C\u8FD9\u4E2A\u5305\u7684\u4F5C\u7528\u5C31\u662F\u5C06\u8DEF\u5F84\u8F6C\u6362\u4E3A\u4E00\u4E2A\u6B63\u5219\uFF0C\u6211\u4EEC\u53EF\u4EE5\u6765\u4E3E\u4E2A\u4F8B\u5B50</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">pathToRegexp(&quot;/home&quot;, [], { end: false });</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u4F1A\u751F\u6210\u8FD9\u6837\u7684\u6B63\u5219/^\\/home(?:[\\/#\\?](?=[]|$))?(?=[\\/#\\?]|[]|$)/i</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u8FD9\u4E2A\u6B63\u5219\u53EF\u4EE5\u5339\u914D/home\uFF0C/home/1\uFF0C\u4F46\u662F\u4E0D\u53EF\u4EE5\u5339\u914D/homes</span></span>
<span class="line"><span style="color:#A6ACCD;">pathToRegexp(&quot;/home&quot;, [], { end: true });</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u4F1A\u751F\u6210\u8FD9\u6837\u7684\u6B63\u5219/^\\/home[\\/#\\?]?$/i</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u8FD9\u4E2A\u6B63\u5219\u53EF\u4EE5\u5339\u914D/home\uFF0C\u4F46\u662F\u4E0D\u80FD\u5339\u914D/home/1\u548C/homes</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Route\u7684exact\u5C5E\u6027\uFF0C\u5C31\u662F\u901A\u8FC7\u4ED6\u6765\u5B9E\u73B0\u7684\u3002</p><p>\u56E0\u6B64\u6211\u4EEC\u4FEE\u6539\u4E00\u4E0BRoute\u7EC4\u4EF6</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import React, { Component } from &#39;react&#39;;</span></span>
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
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>\u73B0\u5728\u5C31\u53EF\u4EE5\u5B9E\u73B0\u6211\u4EEC\u521A\u521A\u8BF4\u7684\u6548\u679C\u4E86\u3002\u901A\u8FC7exact\u53BB\u5F00\u542F\u662F\u5426\u4E25\u683C\u5339\u914D\u6216\u8005\u8BF4\u5168\u5339\u914D\u8DEF\u5F84\u3002</p><p>\u90A3\u4E48\u73B0\u5728\u95EE\u9898\u6765\u4E86\uFF0C\u5982\u679C\u6211\u4EEC\u914D\u7F6E\u4E86\u4E24\u4E2A\u8DEF\u7531\u4E00\u6837\u7684\uFF0C\u6BD4\u5982</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;Route path=&quot;/home&quot; component={Home} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;Route path=&quot;/home&quot; component={Home} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u90A3\u4E48\u754C\u9762\u4E0A\u4F1A\u663E\u793A<code>/home</code>\u8DEF\u7531\u7684\u5185\u5BB9\u4E24\u6B21\u3002</p><p>\u6709\u6CA1\u6709\u4EC0\u4E48\u529E\u6CD5\u80FD\u8BA9\u5B83\u663E\u793A\u4E00\u6B21\u5462\uFF1F</p><h2 id="\u4E8C\u3001switch" tabindex="-1">\u4E8C\u3001Switch <a class="header-anchor" href="#\u4E8C\u3001switch" aria-hidden="true">#</a></h2><p><code>Switch</code>\u7684\u4F5C\u7528\u5C31\u662F\u5339\u914D\u4E00\u4E2A\u7EC4\u4EF6</p><p><code>Switch</code>\u7684\u4F7F\u7528\u65B9\u5F0F\u5982\u4E0B</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;Switch&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;Route path=&quot;/home&quot; component={Home} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;Route path=&quot;/home&quot; component={Home} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;Route path=&quot;/profile&quot; component={Profile} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;Route path=&quot;/user&quot; component={User} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/Switch&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u8FD9\u79CD\u60C5\u51B5\u4E0B<code>/home</code>\u7684\u5185\u5BB9\u53EA\u4F1A\u663E\u793A\u4E00\u6B21\u3002</p><p>\u56E0\u6B64\u6211\u4EEC\u4E5F\u53EF\u4EE5\u77E5\u9053<code>Switch</code>\u7684\u529F\u80FD\u5C31\u662F\u904D\u5386\u5B50\u8282\u70B9\u7684<code>path</code>\u5C5E\u6027\uFF0C\u7528pathToRegexp\u5DE5\u5177\u5C06<code>path</code>\u5C5E\u6027\u751F\u6210\u4E00\u4E2A\u6B63\u5219\uFF0C\u7136\u540E\u4E0E\u6D4F\u89C8\u5668\u8F93\u5165\u7684\u8DEF\u5F84\u8FDB\u884C\u4E00\u4E00\u5339\u914D\uFF0C\u5C06\u7B2C\u4E00\u4E2A\u5339\u914D\u5230\u7684\u8DEF\u7531\u7EC4\u4EF6\u8FD4\u56DE\u5373\u53EF\u3002</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import React, { Component } from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { Consumer } from &#39;./context&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { pathToRegexp } from &#39;path-to-regexp&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// Switch\u7684\u4F5C\u7528\u5C31\u662F\u5339\u914D\u4E00\u4E2A\u7EC4\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">export default class Switch extends Component {</span></span>
<span class="line"><span style="color:#A6ACCD;">  render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;Consumer&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        {(state) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          let pathname = state.location.pathname;</span></span>
<span class="line"><span style="color:#A6ACCD;">          let children = this.props.children;</span></span>
<span class="line"><span style="color:#A6ACCD;">          for (var i = 0; i &lt; children.length; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            let child = children[i];</span></span>
<span class="line"><span style="color:#A6ACCD;">            // redirect\u53EF\u80FD\u6CA1\u6709path\u5C5E\u6027</span></span>
<span class="line"><span style="color:#A6ACCD;">            let path = child.props.path || &#39;&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">            let reg = pathToRegexp(path, [], { end: false });</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (reg.test(pathname)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">              // \u628A\u5339\u914D\u5230\u7684\u7EC4\u4EF6\u8FD4\u56DE\u5373\u53EF</span></span>
<span class="line"><span style="color:#A6ACCD;">              return child;</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">          return null;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }}</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/Consumer&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    );</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>\u4E0A\u9762pathToRegexp\u5DE5\u5177\u7684end\u5C5E\u6027\u4E4B\u6240\u4EE5\u7528false\uFF0C\u662F\u56E0\u4E3A\u8DEF\u7531\u662F\u5426\u5168\u5339\u914D\u662F\u6709Route\u7EC4\u4EF6\u6765\u51B3\u5B9A\u7684\uFF0C\u56E0\u6B64<code>Switch</code>\u7EC4\u4EF6\u91CC\u9762\u4E0D\u7528\u90A3\u4E48\u4E25\u683C\u9650\u5236\u5168\u5339\u914D\u3002</p><h2 id="\u4E09\u3001redirect" tabindex="-1">\u4E09\u3001Redirect <a class="header-anchor" href="#\u4E09\u3001redirect" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u5728\u6D4F\u89C8\u5668\u8F93\u5165\u8DEF\u7531\u7684\u65F6\u5019\uFF0C\u6709\u65F6\u5019\u53EF\u80FD\u4F1A\u8F93\u5165\u4E00\u4E2A\u9519\u8BEF\u7684\u8DEF\u7531\uFF0C\u5BFC\u81F4\u9875\u9762\u6E32\u67D3\u4E0D\u51FA\u6765\uFF0C\u8FD9\u65F6\u5019\u6211\u4EEC\u9700\u8981\u4E00\u4E2A\u515C\u5E95\u7684\u9875\u9762\uFF0C<code>Redirect</code>\u7EC4\u4EF6\u7684\u529F\u80FD\u5C31\u662F\uFF0C\u5982\u679C\u4E0A\u9762<code>Route</code>\u7EC4\u4EF6\u7684<code>path</code>\u6CA1\u6709\u4E00\u4E2A\u80FD\u5339\u914D\u4E0A\uFF0C\u90A3\u4E48\u5C31\u663E\u793A<code>Redirect</code>\u7EC4\u4EF6\u7684\u5185\u5BB9\u3002</p><p>\u4F7F\u7528\u65B9\u5F0F\u5982\u4E0B</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;Switch&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;Route path=&quot;/home&quot; component={Home} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;Route path=&quot;/profile&quot; component={Profile} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;Route path=&quot;/user&quot; component={User} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;Redirect to=&quot;/home&quot;&gt;&lt;/Redirect&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/Switch&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><code>Redirect</code>\u7EC4\u4EF6\u7684\u4F7F\u7528\u4F1A\u653E\u5728\u6240\u6709Route\u7684\u4E0B\u9762\uFF0C\u5F53<code>Switch</code>\u904D\u5386\u5339\u914D\u4E0D\u5230\u4E0A\u9762\u7684<code>Route</code>\u4E4B\u540E\uFF0C<code>Switch</code>\u91CC\u9762\u7684<code>path</code>\u53D8\u91CF\u5C31\u4F1A\u53D8\u4E3A\u7A7A\u5B57\u7B26\u4E32\uFF0C\u56E0\u4E3A<code>Redirect</code>\u7EC4\u4EF6\u6CA1\u6709<code>path</code>\u5C5E\u6027\uFF0C\u56E0\u6B64<code>reg.text(pathname)</code>\u5C31\u4F1A\u53D8\u4E3Atrue\uFF0C\u8FDB\u800C\u6E32\u67D3<code>Redirect</code>\u7EC4\u4EF6\u7684\u5185\u5BB9\uFF0C\u6240\u4EE5\u8FD9\u4E2A\u7EC4\u4EF6\u7684\u5B9E\u73B0\u4E5F\u5F88\u7B80\u5355</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import React, { Component } from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { Consumer } from &#39;./context&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default class Redirect extends Component {</span></span>
<span class="line"><span style="color:#A6ACCD;">  constructor() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    super();</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;Consumer&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        {(state) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          // \u91CD\u5B9A\u5411\u5C31\u662F\u5339\u914D\u4E0D\u5230\u540E\u76F4\u63A5\u8DF3\u8F6Credirect\u4E2D\u7684to\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#A6ACCD;">          state.history.push(this.props.to);</span></span>
<span class="line"><span style="color:#A6ACCD;">          return null;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }}</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/Consumer&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    );</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>\u76F4\u63A5\u8DF3\u8F6C<code>to</code>\u5B9A\u4E49\u7684\u5C5E\u6027\u5C31\u53EF\u4EE5\u4E86\u3002</p><h2 id="\u56DB\u3001link" tabindex="-1">\u56DB\u3001Link <a class="header-anchor" href="#\u56DB\u3001link" aria-hidden="true">#</a></h2><p>\u77E5\u9053\u8DEF\u7531\u600E\u4E48\u5339\u914D\u4E86\uFF0C\u90A3\u4E48\u603B\u5F97\u6709\u4E2A\u7EC4\u4EF6\u53EF\u4EE5\u5B9E\u73B0\u8DF3\u8F6C\u7684\u5427\u3002</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;Router&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;Link to=&quot;/home&quot;&gt;\u9996\u9875&lt;/Link&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;Link to=&quot;/profile&quot;&gt;\u4E2A\u4EBA\u4E2D\u5FC3&lt;/Link&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;Link to=&quot;/user&quot;&gt;\u7528\u6237&lt;/Link&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;Switch&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;Route path=&quot;/home&quot; component={Home} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;Route path=&quot;/profile&quot; component={Profile} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;Route path=&quot;/user&quot; component={User} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;Redirect to=&quot;/home&quot;&gt;&lt;/Redirect&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/Switch&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/Router&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u6E90\u7801\u5F88\u7B80\u5355</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import React, { Component } from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { Consumer } from &#39;./context&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default class Link extends Component {</span></span>
<span class="line"><span style="color:#A6ACCD;">  constructor() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    super();</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;Consumer&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        {(state) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          return (</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;a</span></span>
<span class="line"><span style="color:#A6ACCD;">              onClick={() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                state.history.push(this.props.to);</span></span>
<span class="line"><span style="color:#A6ACCD;">              }}</span></span>
<span class="line"><span style="color:#A6ACCD;">            &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">              {this.props.children}</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;/a&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          );</span></span>
<span class="line"><span style="color:#A6ACCD;">        }}</span></span>
<span class="line"><span style="color:#A6ACCD;">      &lt;/Consumer&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    );</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>\u8DF3\u5C31\u5B8C\u4E8B\u4E86\u3002</p><h2 id="\u4E94\u3001\u8865\u5145" tabindex="-1">\u4E94\u3001\u8865\u5145 <a class="header-anchor" href="#\u4E94\u3001\u8865\u5145" aria-hidden="true">#</a></h2><p>react-router\u6709\u8FD9\u4E48\u4E00\u79CD\u7528\u6CD5\uFF0C\u53EB\u201C\u8DEF\u7531\u52A8\u6001\u4F20\u53C2\u201D\u3002</p><p>\u6BD4\u5982</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">/home/:id</span></span>
<span class="line"><span style="color:#A6ACCD;">/home/:id/:name</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u4E0A\u9762\u8FD9\u4E24\u4E2A\u8DEF\u5F84\u53EF\u4EE5\u5339\u914D\u5230<code>/home</code>\u8DEF\u7531\u7684\u5185\u5BB9\uFF0C\u4E0E\u6B64\u540C\u65F6\uFF0C\u5728<code>/home</code>\u8DEF\u7531\u6E32\u67D3\u7684\u9875\u9762\u7684<code>props</code>\u53C2\u6570\u91CC\u9762\uFF0C\u80FD\u83B7\u53D6\u5230<code>match</code>\u5BF9\u8C61\uFF0C\u8FD9\u4E2A<code>match</code>\u5BF9\u8C61\u91CC\u9762\u6709\u4E2A<code>params</code>\u5BF9\u8C61\uFF0C\u8FD9\u4E2A\u5BF9\u8C61\u5B58\u50A8\u7740\u6240\u6709\u52A8\u6001\u4F20\u53C2\u7684\u952E\u503C\u3002</p><p>\u56E0\u6B64\u6211\u4EEC\u5F97\u6539\u4E00\u4E0B<code>Route</code>\u7EC4\u4EF6\u3002</p><p>\u5728\u6B64\u4E4B\u524D\u6211\u4EEC\u5148\u770B\u4E00\u4E0B<code>props.match.params</code>\u8FD9\u4E2A\u5BF9\u8C61\u91CC\u9762\u7684\u5185\u5BB9\u662F\u600E\u4E48\u6765\u7684\u3002</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">let k = [];</span></span>
<span class="line"><span style="color:#A6ACCD;">let r = pathToRegexp(&#39;/home/:id/:name&#39;, k, { end: true });</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(&#39;k=&#39;, k);</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(&#39;match=&#39;, &#39;/home/1/2&#39;.match(r));</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>k\u6570\u7EC4\u4F1A\u8F93\u51FA\u8FD9\u4E48\u4E00\u4E2A\u4E1C\u897F\u3002</p>`,65),i=a(`<p>k\u6570\u7EC4\u5143\u7D20\u7684name\u5C5E\u6027\uFF0C\u5C31\u662F\u4E0A\u9762\u7684\u5BF9\u5E94\u7684id\u548Cname\u8FD9\u4E24\u4E2Akey\uFF0C\u800Cmatch\u8F93\u51FA\u7684\uFF0C\u5C31\u662F\u5BF9\u5E94\u7684\u503C\u3002\u56E0\u6B64\uFF0C<code>match.params</code>\u7684\u53C2\u6570\u53EF\u4EE5\u8FD9\u4E48\u5B9E\u73B0\u3002</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import React, { Component } from &#39;react&#39;;</span></span>
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
<span class="line"><span style="color:#A6ACCD;">          let keys = [];</span></span>
<span class="line"><span style="color:#A6ACCD;">          let reg = pathToRegexp(path, keys, { end: exact });</span></span>
<span class="line"><span style="color:#A6ACCD;">          keys = keys.map((item) =&gt; item.name);</span></span>
<span class="line"><span style="color:#A6ACCD;">          let result = pathname.match(reg);</span></span>
<span class="line"><span style="color:#A6ACCD;">          let [url, ...values] = result || [];</span></span>
<span class="line"><span style="color:#A6ACCD;">          let props = {</span></span>
<span class="line"><span style="color:#A6ACCD;">            location: state.location,</span></span>
<span class="line"><span style="color:#A6ACCD;">            history: state.history,</span></span>
<span class="line"><span style="color:#A6ACCD;">            match: {</span></span>
<span class="line"><span style="color:#A6ACCD;">              params: keys.reduce((obj, current, idx) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                obj[current] = values[idx];</span></span>
<span class="line"><span style="color:#A6ACCD;">                return obj;</span></span>
<span class="line"><span style="color:#A6ACCD;">              }, {}),</span></span>
<span class="line"><span style="color:#A6ACCD;">            },</span></span>
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
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><h2 id="\u516D\u3001broswerrouter" tabindex="-1">\u516D\u3001BroswerRouter <a class="header-anchor" href="#\u516D\u3001broswerrouter" aria-hidden="true">#</a></h2><p>\u8FD9\u91CC\u6211\u4EEC\u5148\u8BB2\u4E00\u4E9B\u524D\u7F6E\u7684\u77E5\u8BC6\u70B9</p><p>\u8DEF\u7531\u8DF3\u8F6C\u7684\u65B9\u6CD5</p><p>\u524D\u9762\u4E09\u4E2A\u4F1A\u5237\u65B0\u9875\u9762</p><ul><li>window.history.go</li><li>window.history.back</li><li>window.history.forward</li></ul><p>\u540E\u9762\u4E24\u4E2A\u4E0D\u4F1A\u89E6\u53D1\u9875\u9762\u7684\u5237\u65B0</p><ul><li>window.history.pushState</li><li>window.history.replaceState</li></ul><p>\u90A3\u4E48\u5982\u4F55\u76D1\u542C\u8DEF\u7531\u7684\u53D8\u5316\u5462\uFF1F\u76D1\u542C\u6211\u4EEC\u719F\u77E5\u7684<code>onpopstate</code>\u4E8B\u4EF6\uFF1F\u4E0D\u4E0D\u4E0D\uFF0C\u8FD9\u4E2A\u4E8B\u4EF6\u53EA\u80FD\u76D1\u542C\u4E0A\u9762\u524D\u4E09\u4E2A\u4F1A\u89E6\u53D1\u9875\u9762\u5237\u65B0\u7684\u8DF3\u8F6C\u65B9\u6CD5\uFF0C\u540E\u9762\u4E24\u4E2A\u65B9\u6CD5\u5E76\u4E0D\u80FD\u76D1\u542C\u5230\uFF0C\u90A3\u600E\u4E48\u529E\uFF1F\u522B\u7740\u6025\uFF0C\u6211\u4EEC\u53EF\u4EE5\u81EA\u5B9A\u4E49\u76D1\u542C\u4E8B\u4EF6\u3002</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// \u76F4\u63A5\u81EA\u5B9A\u4E49\u4E8B\u4EF6\uFF0C\u4F7F\u7528 Event \u6784\u9020\u51FD\u6570\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">var event = new Event(&#39;build&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">var elem = document.querySelector(&#39;#id&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u76D1\u542C\u4E8B\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">elem.addEventListener(&#39;build&#39;, function (e) { ... }, false);</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u89E6\u53D1\u4E8B\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">elem.dispatchEvent(event);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u8FD9\u79CD\u65B9\u5F0F\uFF0C\u91CD\u5199\u5168\u5C40\u7684<code>pushState</code>\u65B9\u6CD5\uFF0C\u5E76\u4E14\u76D1\u542C\u81EA\u5B9A\u4E49\u7684<code>pushState</code>\u4E8B\u4EF6\u3002</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import React, { Component } from &#39;react&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { Provider } from &#39;./context&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default class BroswerRouter extends Component {</span></span>
<span class="line"><span style="color:#A6ACCD;">  constructor() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    super();</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.state = {</span></span>
<span class="line"><span style="color:#A6ACCD;">      location: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        pathname: window.location.pathname || &#39;/&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  componentDidMount() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u76D1\u542Cpathname\u503C\u53D8\u5316\uFF0C\u91CD\u65B0\u8BBE\u7F6E\u72B6\u6001</span></span>
<span class="line"><span style="color:#A6ACCD;">    var _wr = function (type) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      var orig = window.history[type];</span></span>
<span class="line"><span style="color:#A6ACCD;">      return function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">        var rv = orig.apply(this, arguments);</span></span>
<span class="line"><span style="color:#A6ACCD;">        var e = new Event(type);</span></span>
<span class="line"><span style="color:#A6ACCD;">        e.arguments = arguments;</span></span>
<span class="line"><span style="color:#A6ACCD;">        window.dispatchEvent(e);</span></span>
<span class="line"><span style="color:#A6ACCD;">        return rv;</span></span>
<span class="line"><span style="color:#A6ACCD;">      };</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;">    window.history.pushState = _wr(&#39;pushState&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    window.addEventListener(&#39;pushState&#39;, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.setState({</span></span>
<span class="line"><span style="color:#A6ACCD;">        location: {</span></span>
<span class="line"><span style="color:#A6ACCD;">          ...this.state.location,</span></span>
<span class="line"><span style="color:#A6ACCD;">          pathname: window.location.pathname || &#39;/&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">      });</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u9ED8\u8BA4pathname\u6CA1\u6709\u65F6\u8DF3\u8F6C\u5230/</span></span>
<span class="line"><span style="color:#A6ACCD;">    window.history.pushState(</span></span>
<span class="line"><span style="color:#A6ACCD;">      { path: window.location.pathname || &#39;/&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">      null,</span></span>
<span class="line"><span style="color:#A6ACCD;">      window.location.pathname || &#39;/&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    );</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    let value = {</span></span>
<span class="line"><span style="color:#A6ACCD;">      location: this.state.location,</span></span>
<span class="line"><span style="color:#A6ACCD;">      history: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        push(to) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          window.history.pushState({ path: to }, null, to);</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;">    return &lt;Provider value={value}&gt;{this.props.children}&lt;/Provider&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br></div></div><h2 id="\u4E03\u3001\u6E90\u7801" tabindex="-1">\u4E03\u3001\u6E90\u7801 <a class="header-anchor" href="#\u4E03\u3001\u6E90\u7801" aria-hidden="true">#</a></h2>`,14);function b(C,u,A,m,d,y){const p=n("Image"),l=n("Codesandbox");return o(),r("div",null,[t,s(p,{src:"/front-frame/react/react-router/1.png"},null,8,["src"]),i,s(l,{src:"https://codesandbox.io/p/github/Nangxif/react-router/draft/silly-butterfly?file=%2FREADME.md"},null,8,["src"])])}const g=e(c,[["render",b]]);export{h as __pageData,g as default};
