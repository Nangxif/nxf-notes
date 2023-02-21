import{_ as s,c as n,o as a,h as l}from"./app.f40c8d04.js";const m=JSON.parse('{"title":"ModuleCollection\u7684\u5B9E\u73B0","description":"","frontmatter":{},"headers":[{"level":2,"title":"1.register\u51FD\u6570","slug":"_1-register\u51FD\u6570","link":"#_1-register\u51FD\u6570","children":[]},{"level":2,"title":"2.Module\u7C7B","slug":"_2-module\u7C7B","link":"#_2-module\u7C7B","children":[]}],"relativePath":"blogs/front-frame/vue3/vuex/whole-vuex/ModuleCollection.md","lastUpdated":1676908288000}'),p={name:"blogs/front-frame/vue3/vuex/whole-vuex/ModuleCollection.md"},e=l(`<h1 id="modulecollection\u7684\u5B9E\u73B0" tabindex="-1">ModuleCollection\u7684\u5B9E\u73B0 <a class="header-anchor" href="#modulecollection\u7684\u5B9E\u73B0" aria-hidden="true">#</a></h1><p>\u56E0\u4E3A\u8981\u5904\u7406\u6A21\u5757\u7684\u6570\u636E\uFF0C\u5982\u679C\u6211\u4EEC\u76F4\u63A5\u6309\u7167<code>new Store</code>\u6240\u5199\u7684\u7ED3\u6784\u6765\u8FDB\u884C\u5904\u7406\uFF0C\u4F1A\u4E0D\u662F\u5F88\u76F4\u89C2\uFF0C\u56E0\u6B64\u6211\u4EEC\u63D0\u51FA\u4E86\u4E00\u79CD\u6811\u5F62\u7ED3\u6784</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// this.root = {</span></span>
<span class="line"><span style="color:#A6ACCD;">//   _raw: xxx, // \u539F\u59CB\u7684\u7528\u6237\u7684\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">//   _children: {</span></span>
<span class="line"><span style="color:#A6ACCD;">//     a: {</span></span>
<span class="line"><span style="color:#A6ACCD;">//       _raw: xxx,</span></span>
<span class="line"><span style="color:#A6ACCD;">//       state: a.state,</span></span>
<span class="line"><span style="color:#A6ACCD;">//     },</span></span>
<span class="line"><span style="color:#A6ACCD;">//     b: {</span></span>
<span class="line"><span style="color:#A6ACCD;">//       _raw: xxx,</span></span>
<span class="line"><span style="color:#A6ACCD;">//       _children: {},</span></span>
<span class="line"><span style="color:#A6ACCD;">//       state: b.state,</span></span>
<span class="line"><span style="color:#A6ACCD;">//     },</span></span>
<span class="line"><span style="color:#A6ACCD;">//   },</span></span>
<span class="line"><span style="color:#A6ACCD;">//   //   \u6211\u4EEC\u8FD8\u53EF\u4EE5\u628A\u72B6\u6001\u62FF\u51FA\u6765</span></span>
<span class="line"><span style="color:#A6ACCD;">//   state: this.root.state,</span></span>
<span class="line"><span style="color:#A6ACCD;">// };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u6211\u4EEC\u8981\u5C06\u5B9E\u4F8B\u5316\u7684\u65F6\u5019\u4F20\u7ED9Store\u6784\u9020\u51FD\u6570\u7684\u53C2\u6570\u8FDB\u884CModuleCollection\u5904\u7406\uFF0C\u56E0\u6B64ModuleCollection\u7684\u4F5C\u7528\u5C31\u662F\u5C06\u6A21\u5757\u8F6C\u53D8\u4E3A\u4E00\u68F5\u6811\u72B6\u7684\u7ED3\u6784\uFF0C\u7136\u540E\u5C06\u5176\u8D4B\u503C\u7ED9Store\u5B9E\u4F8B\u7684_modules\u5C5E\u6027</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class Store {</span></span>
<span class="line"><span style="color:#A6ACCD;">  constructor(options) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  	this._modules = new ModuleCollection(options);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>ModuleCollection\u7C7B\u7684\u4E3B\u8981\u903B\u8F91\u5728register\u51FD\u6570\uFF0C\u8FD9\u4E2A\u51FD\u6570\u4F1A\u91C7\u53D6\u9012\u5F52\u7684\u65B9\u5F0F\u6CE8\u518C\u6A21\u5757\u3002\u6700\u540E\u751F\u6210\u7684\u6811\u5B58\u653E\u5728ModuleCollection\u5B9E\u4F8B\u7684<strong>root</strong>\u5C5E\u6027\u4E0A\u3002</p><h2 id="_1-register\u51FD\u6570" tabindex="-1">1.register\u51FD\u6570 <a class="header-anchor" href="#_1-register\u51FD\u6570" aria-hidden="true">#</a></h2><p>register\u51FD\u6570\u662F\u8981\u7528\u6765\u5C06\u6A21\u5757\u8F6C\u53D8\u6210\u6811\u72B6\u7ED3\u6784\u7684\uFF0C\u90A3\u6211\u4EEC\u8981\u4F20\u7ED9register\u7684\u53C2\u6570\u662F\u4EC0\u4E48\uFF1F</p><ul><li>\u53C2\u65701\u3010path\u3011\uFF1A\u4E00\u4E2A\u6570\u7EC4\uFF0C\u7528\u6765\u5B58\u653E\u5F53\u524D\u7684module\u8DEF\u5F84\uFF0C\u6BD4\u5982\u6839\u6A21\u5757\u4E0B\u7684a\u6A21\u5757\uFF0C\u90A3\u4E48\u5C31\u8868\u793A\u4E3A[&#39;a&#39;]\uFF0Ca\u6A21\u5757\u4E0B\u7684b\uFF0C\u90A3\u4E48\u5C31\u8868\u793A\u4E3A[&#39;a&#39;,&#39;b&#39;]\u4EE5\u6B64\u7C7B\u63A8\u3002</li><li>\u53C2\u65702\u3010options\u3011\uFF1A\u6BCF\u4E2A\u6A21\u5757\u5BF9\u5E94\u7684module\u539F\u5BF9\u8C61\uFF0C\u5C31\u662F<code>{state:{},getters:{},mutations:{},actions:{}}</code>\u8FD9\u4E9B\uFF08<strong>\u4EE5\u4E0B\u90FD\u4EE5\u201Cmodule\u539F\u5BF9\u8C61\u201D\u6765\u8868\u793A\u7528\u6237\u5728\u4F7F\u7528\u65F6\u5B9A\u4E49\u7684\u8FD9\u4E2A\u5BF9\u8C61</strong>\uFF09\u3002</li></ul><p>\u7136\u540E\u6211\u4EEC\u4E00\u5F00\u59CB\u8981\u5148\u5B9A\u4E49\u6574\u68F5\u6811\u7684\u8282\u70B9\u7ED3\u6784</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">let newModule = {</span></span>
<span class="line"><span style="color:#A6ACCD;">	// \u5B58\u653E\u539F\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#A6ACCD;">    _raw: rootModule,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5B58\u653E\u5B50\u6A21\u5757</span></span>
<span class="line"><span style="color:#A6ACCD;">    _children: {},</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5B58\u653E\u5F53\u524D\u6A21\u5757\u7684state</span></span>
<span class="line"><span style="color:#A6ACCD;">    state: rootModule.state,</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u63A5\u7740\u5F00\u59CB\u9012\u5F52\u904D\u5386module\u539F\u5BF9\u8C61</p><p>\u5982\u679Cpath\u7684\u957F\u5EA6\u4E3A0\uFF0C\u90A3\u4E48\u8BF4\u660E\u662F\u7B2C\u4E00\u6B21\u904D\u5386\uFF0C\u6B63\u5728\u904D\u5386module\u539F\u5BF9\u8C61\u7684\u6839\uFF0C\u56E0\u6B64</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">if (path.length === 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  this.root = newModule;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5230\u76EE\u524D\u4E3A\u6B62\u6839\u5C31\u904D\u5386\u597D\u4E86\uFF0C\u7136\u540E\u6211\u4EEC\u9700\u8981\u5224\u65ADmodule\u539F\u5BF9\u8C61\u662F\u5426\u5B9A\u4E49\u4E86modules\u5C5E\u6027\uFF0C\u5982\u679C\u6709\u7684\u8BDD\u8BF4\u660E\u53EF\u80FD\u6709\u5B50\u6A21\u5757\uFF0C\u56E0\u6B64\u6211\u4EEC\u9700\u8981\u5C06\u8FD9\u4E2Amodules\u91CC\u9762\u7684\u6A21\u5757\u8FDB\u884C\u904D\u5386\u6CE8\u518C\u3002</p><p>\u5728\u8FD9\u4E4B\u524D\u6211\u4EEC\u63D0\u4F9B\u4E00\u4E2A\u904D\u5386\u5DE5\u5177\u51FD\u6570\uFF0C<strong>\u8FD9\u4E2A\u51FD\u6570\u4F1A\u8D2F\u7A7F\u6574\u4E2Avuex\u7684\u5B9E\u73B0\u8FC7\u7A0B</strong>\u3002</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">export const forEach = (obj = {}, fn) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  Object.keys(obj).forEach((key, index) =&gt; fn(obj[key], key));</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u7136\u540E\u6211\u4EEC\u63A5\u7740\u5199\u904D\u5386\u5B50\u6A21\u5757\u7684\u903B\u8F91\uFF0C\u8FD9\u91CC\u5F00\u59CB\u5C31\u8981\u9012\u5F52register\u4E86\u3002</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">if (rootModule.modoles) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  forEach(rootModule.modoles, (module, moduleName) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  	// \u6BCF\u6B21\u904D\u5386\u5B50\u6A21\u5757\uFF0C\u90FD\u4F1A\u91CD\u65B0\u62FC\u63A5path\uFF0C\u5C06\u5F53\u524D\u7684\u4E0E\u81EA\u5DF1\u7684\u7236\u7EA7\u6A21\u5757\u8DEF\u5F84\u62FC\u63A5\u8D77\u6765\uFF0C\u540C\u65F6\u4F20\u5165\u5C5E\u4E8E\u5F53\u524D\u6A21\u5757\u7684module\u539F\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.register([...path, moduleName], module);</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u5728\u8FDB\u884C\u9012\u5F52\u7684\u65F6\u5019\uFF0Cpath\u7684\u957F\u5EA6\u4E0D\u662F0\u4E86\uFF0C\u56E0\u6B64\uFF0C\u6211\u4EEC\u9700\u8981\u628A\u6BCF\u4E2A\u6A21\u5757\u5404\u81EA\u5BF9\u5E94\u7684newModule\u653E\u5230\u7236\u7EA7newModule\u7684_children\u91CC\u9762\u3002</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">let parent = path.slice(0, -1).reduce((memo, current) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return memo._children[current];</span></span>
<span class="line"><span style="color:#A6ACCD;">}, this.root);</span></span>
<span class="line"><span style="color:#A6ACCD;">parent._children[path[path.length - 1]] = newModule;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u5B8C\u6574\u4EE3\u7801\u5982\u4E0B</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">export default class ModuleCollection {</span></span>
<span class="line"><span style="color:#A6ACCD;">  constructor(options) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u6CE8\u518C\u6A21\u5757 \u80AF\u5B9A\u6709\u4E2A\u9012\u5F52\u7684\u64CD\u4F5C\uFF0C\u9012\u5F52\u6CE8\u518C\uFF0C\u6211\u4EEC\u6CE8\u518C\u5B8C\u6839\u6A21\u5757\u4E4B\u540E\uFF0C\u518D\u628A\u5B50\u6A21\u5757\u6CE8\u518C\u5230\u6839\u6A21\u5757\u4E0A</span></span>
<span class="line"><span style="color:#A6ACCD;">    // vuex\u901A\u8FC7\u4E00\u4E2A\u6570\u7EC4\u6765\u8BB0\u5F55\u6BCF\u6B21\u8981\u9012\u5F52\u7684\u72B6\u6001</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.register([], options);</span></span>
<span class="line"><span style="color:#A6ACCD;">  } </span></span>
<span class="line"><span style="color:#A6ACCD;">  register(path, rootModule) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7C7B\u4F3Cast\u8BED\u6CD5\u6811\u89E3\u6790</span></span>
<span class="line"><span style="color:#A6ACCD;">    let newModule = {</span></span>
<span class="line"><span style="color:#A6ACCD;">      _raw: rootModule,</span></span>
<span class="line"><span style="color:#A6ACCD;">      _children: {},</span></span>
<span class="line"><span style="color:#A6ACCD;">      state: rootModule.state,</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (path.length === 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.root = newModule;</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u9012\u5F52\u7B2C\u4E8C\u6B21\u5C31\u8D70\u5230\u8FD9\u91CC</span></span>
<span class="line"><span style="color:#A6ACCD;">      // [b,c]\uFF0Cb\u6A21\u5757\u4E0B\u7684c</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u8FD9\u91CC\u5E94\u8BE5\u6709\u4E2A\u627E\u7236\u4EB2\u7684\u8FC7\u7A0B</span></span>
<span class="line"><span style="color:#A6ACCD;">      //   [a,b,c]\uFF0C\u5148\u628Ac\u53BB\u6389\uFF0Creduce\u51FA\u6765\u7684\u5C31\u662Fc\u7684\u6839</span></span>
<span class="line"><span style="color:#A6ACCD;">      let parent = path.slice(0, -1).reduce((memo, current) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return memo._children[current];</span></span>
<span class="line"><span style="color:#A6ACCD;">      }, this.root);</span></span>
<span class="line"><span style="color:#A6ACCD;">      parent._children[path[path.length - 1]] = newModule;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5982\u679C\u6709modules\u8BF4\u660E\u6709\u5B50\u6A21\u5757</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (rootModule.modoles) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      forEach(rootModule.modoles, (module, moduleName) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.register([...path, moduleName], module);</span></span>
<span class="line"><span style="color:#A6ACCD;">      });</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><p>\u4F46\u662F\u4EE3\u7801\u76F4\u63A5\u8FD9\u6837\u5199\u4F1A\u89C9\u5F97\u6709\u70B9\u5570\u55E6\uFF0C\u5982\u679C\u7528\u9762\u5411\u5BF9\u8C61\u7684\u601D\u60F3\uFF0C\u5982\u679C\u6D89\u53CA\u5230\u5BF9\u4E00\u4E2A\u4E1C\u897F\u64CD\u4F5C\u4E86\uFF0C\u6BD4\u5982\u589E\u5220\u6539\u67E5\uFF0C\u90A3\u6211\u4EEC\u53EF\u4EE5\u641E\u4E00\u4E2A\u7C7B\u6765\u5C01\u88C5\u8FD9\u4E2A\u64CD\u4F5C\u3002\u6211\u4EEC\u53D1\u73B0newModule\u8FD9\u4E2A\u4E1C\u897F\u5B8C\u5168\u53EF\u4EE5\u4F5C\u4E3A\u4E00\u4E2A\u7C7B\u7684\u5B9E\u4F8B\uFF0C\u8FD9\u4E2A\u7C7B\u7528\u6709\u83B7\u53D6\u5B50\u8282\u70B9\uFF0C\u6DFB\u52A0\u5B50\u8282\u70B9\u7B49\u529F\u80FD\u3002</p><h2 id="_2-module\u7C7B" tabindex="-1">2.Module\u7C7B <a class="header-anchor" href="#_2-module\u7C7B" aria-hidden="true">#</a></h2><p>\u4E0A\u4E00\u6BB5\u8BB2\u5230\u8FD9\u4E2A\u7C7B\u6709\u83B7\u53D6\u5B50\u8282\u70B9\u548C\u6DFB\u52A0\u5B50\u8282\u70B9\u7684\u529F\u80FD\uFF0C\u4E3A\u4E86\u540E\u7EED\u7684\u4E00\u4E9B\u9700\u8981\uFF0C\u6211\u4EEC\u5728\u8FD9\u603B\u7ED3\u8FD9\u4E2A\u7C7B\u5168\u90E8\u7684\u5C5E\u6027\u4EE5\u53CA\u65B9\u6CD5\u3002</p><table><thead><tr><th>\u65B9\u6CD5/\u5C5E\u6027</th><th>\u7528\u9014</th></tr></thead><tbody><tr><td>namespaced</td><td>\u5F53\u524D\u539F\u5BF9\u8C61\u4E0A\u7684namespaced\u914D\u7F6E</td></tr><tr><td>getChild</td><td>\u83B7\u53D6\u5F53\u524D\u6A21\u5757\u7684\u5B50\u6A21\u5757</td></tr><tr><td>addChild</td><td>\u4E3A\u5F53\u524D\u6A21\u5757\u6DFB\u52A0\u5B50\u6A21\u5757</td></tr><tr><td>forEachMutation</td><td>\u904D\u5386\u5F53\u524D\u6A21\u5757\u7684mutations</td></tr><tr><td>forEachAction</td><td>\u904D\u5386\u5F53\u524D\u6A21\u5757\u7684actions</td></tr><tr><td>forEachGetters</td><td>\u904D\u5386\u5F53\u524D\u6A21\u5757\u7684getters</td></tr><tr><td>forEachChild</td><td>\u904D\u5386\u5F53\u524D\u6A21\u5757\u7684\u5B50\u6A21\u5757</td></tr></tbody></table><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">export default class Module {</span></span>
<span class="line"><span style="color:#A6ACCD;">  constructor(rootModule) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  	// module\u539F\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#A6ACCD;">    this._rawModule = rootModule;</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5B58\u653E\u5B50\u6A21\u5757</span></span>
<span class="line"><span style="color:#A6ACCD;">    this._children = {};</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5B58\u653E\u5F53\u524D\u6A21\u5757\u7684state</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.state = rootModule.state;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  get namespaced() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return this._rawModule.namespaced;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  getChild(key) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return this._children[key];</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  addChild(key, module) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this._children[key] = module;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  forEachMutation(fn) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (this._rawModule.mutations) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      forEach(this._rawModule.mutations, fn);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  forEachAction(fn) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (this._rawModule.actions) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      forEach(this._rawModule.actions, fn);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  forEachGetters(fn) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (this._rawModule.getters) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      forEach(this._rawModule.getters, fn);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  forEachChild(fn) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5B69\u5B50\u80AF\u5B9A\u662F\u6709\u7684\uFF0C\u9ED8\u8BA4\u7A7A\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#A6ACCD;">    forEach(this._children, fn);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><p>\u6709\u4E86\u8FD9\u4E2A\u7C7B\u4E4B\u540E\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u5BF9\u4E0A\u9762\u7684\u5199\u6CD5\u8FDB\u884C\u6539\u8FDB\u3002</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { forEach } from &#39;../util&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import Module from &#39;./module&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default class ModuleCollection {</span></span>
<span class="line"><span style="color:#A6ACCD;">  constructor(options) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u6CE8\u518C\u6A21\u5757 \u80AF\u5B9A\u6709\u4E2A\u9012\u5F52\u7684\u64CD\u4F5C\uFF0C\u9012\u5F52\u6CE8\u518C\uFF0C\u6211\u4EEC\u6CE8\u518C\u5B8C\u6839\u6A21\u5757\u4E4B\u540E\uFF0C\u518D\u628A\u5B50\u6A21\u5757\u6CE8\u518C\u5230\u6839\u6A21\u5757\u4E0A</span></span>
<span class="line"><span style="color:#A6ACCD;">    // vuex\u901A\u8FC7\u4E00\u4E2A\u6570\u7EC4\u6765\u8BB0\u5F55\u6BCF\u6B21\u8981\u9012\u5F52\u7684\u72B6\u6001</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.register([], options);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  register(path, rootModule) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7C7B\u4F3Cast\u8BED\u6CD5\u6811\u89E3\u6790</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u62BD\u79BB\u6210Module\u7C7B</span></span>
<span class="line"><span style="color:#A6ACCD;">    let newModule = new Module(rootModule);</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5728\u5F53\u524D\u8981\u6CE8\u518C\u7684\u6A21\u5757\u4E0A\uFF0C\u505A\u4E00\u4E2A\u6620\u5C04\uFF0C\u8FD9\u4E00\u6B65\u4E3B\u8981\u662F\u4E3A\u4E86\u5728store.registerModule\u5B89\u88C5\u6A21\u5757\u7684\u65F6\u5019\uFF0C\u91CC\u9762\u7684installModule\u7B2C\u56DB\u4E2A\u53C2\u6570\u80FD\u62FF\u5230Module\u5B9E\u4F8B</span></span>
<span class="line"><span style="color:#A6ACCD;">    rootModule.newModule = newModule;</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (path.length === 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.root = newModule;</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u9012\u5F52\u7B2C\u4E8C\u6B21\u5C31\u8D70\u5230\u8FD9\u91CC</span></span>
<span class="line"><span style="color:#A6ACCD;">      // [b,c]\uFF0Cb\u6A21\u5757\u4E0B\u7684c</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u8FD9\u91CC\u5E94\u8BE5\u6709\u4E2A\u627E\u7236\u4EB2\u7684\u8FC7\u7A0B</span></span>
<span class="line"><span style="color:#A6ACCD;">      //   [a,b,c]\uFF0C\u5148\u628Ac\u53BB\u6389\uFF0Creduce\u51FA\u6765\u7684\u5C31\u662Fc\u7684\u6839</span></span>
<span class="line"><span style="color:#A6ACCD;">      let parent = path.slice(0, -1).reduce((memo, current) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return memo.getChild(current);</span></span>
<span class="line"><span style="color:#A6ACCD;">      }, this.root);</span></span>
<span class="line"><span style="color:#A6ACCD;">      parent.addChild(path[path.length - 1], newModule);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5982\u679C\u6709modules\u8BF4\u660E\u6709\u5B50\u6A21\u5757</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (rootModule.modules) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      forEach(rootModule.modules, (module, moduleName) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.register([...path, moduleName], module);</span></span>
<span class="line"><span style="color:#A6ACCD;">      });</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u83B7\u53D6\u547D\u540D\u7A7A\u95F4</span></span>
<span class="line"><span style="color:#A6ACCD;">  getNamespace(path) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    let root = this.root;</span></span>
<span class="line"><span style="color:#A6ACCD;">    return path.reduce((namespace, key) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u8FD9\u91CC\u8981\u770B\u770B\u5F53\u524D\u7684\u6A21\u5757\u6709\u6CA1\u6709namespace</span></span>
<span class="line"><span style="color:#A6ACCD;">      root = root.getChild(key);</span></span>
<span class="line"><span style="color:#A6ACCD;">      return namespace + (root.namespaced ? key + &#39;/&#39; : &#39;&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }, &#39;&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><p>\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\u6539\u8FDB\u540E\u7684ModuleCollection\u7C7B\u591A\u4E86getNamespace\u8FD9\u4E48\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u8FD9\u4E2A\u65B9\u6CD5\u662F\u6839\u636E\u539F\u6A21\u5757\u4E0A\u7684namespaced\uFF0C\u6765\u62FC\u63A5\u51FA\u5B8C\u6574\u7684\u8DEF\u5F84</p><p>\u6BD4\u5982\uFF0C\u6709\u4E2A\u6A21\u5757\u7684\u7ED3\u6784\u662F\u8FD9\u6837\u7684</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">new Vuex.Store({</span></span>
<span class="line"><span style="color:#A6ACCD;">	state:{},</span></span>
<span class="line"><span style="color:#A6ACCD;">	modules:{</span></span>
<span class="line"><span style="color:#A6ACCD;">		a: {</span></span>
<span class="line"><span style="color:#A6ACCD;">			namespaced: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">			state: {},</span></span>
<span class="line"><span style="color:#A6ACCD;">			modules: {</span></span>
<span class="line"><span style="color:#A6ACCD;">				b: {</span></span>
<span class="line"><span style="color:#A6ACCD;">					namespaced: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">					mutations: {</span></span>
<span class="line"><span style="color:#A6ACCD;">						changeAge(){}</span></span>
<span class="line"><span style="color:#A6ACCD;">					}</span></span>
<span class="line"><span style="color:#A6ACCD;">				}</span></span>
<span class="line"><span style="color:#A6ACCD;">			}</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u90A3\u4E48b\u6A21\u5757\u91CC\u9762changeAge\u7684\u8DEF\u5F84\u5C31\u662F<code>a/b/changeAge</code>\uFF0C\u5982\u679C\u53BB\u6389a\u6A21\u5757\u4E0B\u7684namespaced\uFF0C\u90A3\u4E48b\u6A21\u5757\u91CC\u9762changeAge\u7684\u8DEF\u5F84\u5C31\u662F<code>b/changeAge</code>\u3002\u4E3A\u4EC0\u4E48\u4F1A\u6709\u8DEF\u5F84\u8FD9\u4E2A\u4E1C\u897F\uFF1F\u6211\u4EEC\u5728\u4E0B\u4E00\u4E2A\u7AE0\u8282\u3010\u9012\u5F52\u5B89\u88C5\u6A21\u5757\u4EE5\u53CA\u683C\u5F0F\u5316vuex\u3011\u4F1A\u8BB2\u5230\u3002</p>`,34),r=[e];function c(o,t,i,b,C,u){return a(),n("div",null,r)}const d=s(p,[["render",c]]);export{m as __pageData,d as default};
