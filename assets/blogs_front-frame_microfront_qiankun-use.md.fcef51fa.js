import{_ as s,c as n,o as a,h as l}from"./app.e4480542.js";const m=JSON.parse('{"title":"qiankun\u5B9E\u6218","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u521B\u5EFA\u4E00\u4E2A\u57FA\u5EA7\uFF08\u4E3B\u5E94\u7528\uFF09","slug":"\u4E00\u3001\u521B\u5EFA\u4E00\u4E2A\u57FA\u5EA7\uFF08\u4E3B\u5E94\u7528\uFF09","link":"#\u4E00\u3001\u521B\u5EFA\u4E00\u4E2A\u57FA\u5EA7\uFF08\u4E3B\u5E94\u7528\uFF09","children":[{"level":3,"title":"1.\u5B9A\u4E49\u5B50\u5E94\u7528\u8DEF\u7531","slug":"_1-\u5B9A\u4E49\u5B50\u5E94\u7528\u8DEF\u7531","link":"#_1-\u5B9A\u4E49\u5B50\u5E94\u7528\u8DEF\u7531","children":[]},{"level":3,"title":"2.\u6CE8\u518C\u5E94\u7528\u5E76\u5B9A\u4E49\u751F\u547D\u5468\u671F","slug":"_2-\u6CE8\u518C\u5E94\u7528\u5E76\u5B9A\u4E49\u751F\u547D\u5468\u671F","link":"#_2-\u6CE8\u518C\u5E94\u7528\u5E76\u5B9A\u4E49\u751F\u547D\u5468\u671F","children":[]},{"level":3,"title":"3.\u542F\u52A8\u5E94\u7528","slug":"_3-\u542F\u52A8\u5E94\u7528","link":"#_3-\u542F\u52A8\u5E94\u7528","children":[]}]},{"level":2,"title":"\u4E8C\u3001\u521B\u5EFA\u5B50\u5E94\u7528","slug":"\u4E8C\u3001\u521B\u5EFA\u5B50\u5E94\u7528","link":"#\u4E8C\u3001\u521B\u5EFA\u5B50\u5E94\u7528","children":[{"level":3,"title":"1.vue\u5B50\u5E94\u7528","slug":"_1-vue\u5B50\u5E94\u7528","link":"#_1-vue\u5B50\u5E94\u7528","children":[]},{"level":3,"title":"2.react\u5B50\u5E94\u7528","slug":"_2-react\u5B50\u5E94\u7528","link":"#_2-react\u5B50\u5E94\u7528","children":[]},{"level":3,"title":"3.\u539F\u751F\u5B50\u5E94\u7528","slug":"_3-\u539F\u751F\u5B50\u5E94\u7528","link":"#_3-\u539F\u751F\u5B50\u5E94\u7528","children":[]}]}],"relativePath":"blogs/front-frame/microfront/qiankun-use.md","lastUpdated":1720104467000}'),p={name:"blogs/front-frame/microfront/qiankun-use.md"},e=l(`<h1 id="qiankun\u5B9E\u6218" tabindex="-1">qiankun\u5B9E\u6218 <a class="header-anchor" href="#qiankun\u5B9E\u6218" aria-hidden="true">#</a></h1><h2 id="\u4E00\u3001\u521B\u5EFA\u4E00\u4E2A\u57FA\u5EA7\uFF08\u4E3B\u5E94\u7528\uFF09" tabindex="-1">\u4E00\u3001\u521B\u5EFA\u4E00\u4E2A\u57FA\u5EA7\uFF08\u4E3B\u5E94\u7528\uFF09 <a class="header-anchor" href="#\u4E00\u3001\u521B\u5EFA\u4E00\u4E2A\u57FA\u5EA7\uFF08\u4E3B\u5E94\u7528\uFF09" aria-hidden="true">#</a></h2><p>PS\uFF1A\u57FA\u5EA7\u4E3AReact</p><h3 id="_1-\u5B9A\u4E49\u5B50\u5E94\u7528\u8DEF\u7531" tabindex="-1">1.\u5B9A\u4E49\u5B50\u5E94\u7528\u8DEF\u7531 <a class="header-anchor" href="#_1-\u5B9A\u4E49\u5B50\u5E94\u7528\u8DEF\u7531" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;BrowserRouter&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;Link to=&quot;/react&quot;&gt;React\u5E94\u7528&lt;/Link&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;Link to=&quot;/vue&quot;&gt;Vue\u5E94\u7528&lt;/Link&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/BrowserRouter&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!-- \u5B50\u5E94\u7528\u6302\u8F7D\u7684\u8282\u70B9 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;div id=&#39;container&#39;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="_2-\u6CE8\u518C\u5E94\u7528\u5E76\u5B9A\u4E49\u751F\u547D\u5468\u671F" tabindex="-1">2.\u6CE8\u518C\u5E94\u7528\u5E76\u5B9A\u4E49\u751F\u547D\u5468\u671F <a class="header-anchor" href="#_2-\u6CE8\u518C\u5E94\u7528\u5E76\u5B9A\u4E49\u751F\u547D\u5468\u671F" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">registerMicroApps([</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">        name: &#39;reactApp&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        entry: &#39;//localhost:40000&#39;, // \u9ED8\u8BA4react\u542F\u52A8\u7684\u5165\u53E3\u662F10000\u7AEF\u53E3</span></span>
<span class="line"><span style="color:#A6ACCD;">        activeRule: &#39;/react&#39;, // \u5F53\u8DEF\u5F84\u662F /react\u7684\u65F6\u5019\u542F\u52A8</span></span>
<span class="line"><span style="color:#A6ACCD;">        container: &#39;#container&#39;, // \u5E94\u7528\u6302\u8F7D\u7684\u4F4D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">        loader,</span></span>
<span class="line"><span style="color:#A6ACCD;">        props: { a: 1, util: {} }</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">        name: &#39;vueApp&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        entry: &#39;//localhost:20000&#39;, // \u9ED8\u8BA4react\u542F\u52A8\u7684\u5165\u53E3\u662F10000\u7AEF\u53E3</span></span>
<span class="line"><span style="color:#A6ACCD;">        activeRule: &#39;/vue&#39;, // \u5F53\u8DEF\u5F84\u662F /react\u7684\u65F6\u5019\u542F\u52A8</span></span>
<span class="line"><span style="color:#A6ACCD;">        container: &#39;#container&#39;, // \u5E94\u7528\u6302\u8F7D\u7684\u4F4D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">        loader,</span></span>
<span class="line"><span style="color:#A6ACCD;">        props: { a: 1, util: {} }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">], {</span></span>
<span class="line"><span style="color:#A6ACCD;">    beforeLoad() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;before load&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    beforeMount() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;before mount&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    afterMount() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;after mount&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    beforeUnmount() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;before unmount&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    afterUnmount() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;after unmount&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><h3 id="_3-\u542F\u52A8\u5E94\u7528" tabindex="-1">3.\u542F\u52A8\u5E94\u7528 <a class="header-anchor" href="#_3-\u542F\u52A8\u5E94\u7528" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">start();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="\u4E8C\u3001\u521B\u5EFA\u5B50\u5E94\u7528" tabindex="-1">\u4E8C\u3001\u521B\u5EFA\u5B50\u5E94\u7528 <a class="header-anchor" href="#\u4E8C\u3001\u521B\u5EFA\u5B50\u5E94\u7528" aria-hidden="true">#</a></h2><h3 id="_1-vue\u5B50\u5E94\u7528" tabindex="-1">1.vue\u5B50\u5E94\u7528 <a class="header-anchor" href="#_1-vue\u5B50\u5E94\u7528" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// \u5728main.js</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u4F5C\u4E3A\u5B50\u5E94\u7528\u6253\u5F00\u9879\u76EE\u7684\u65F6\u5019\uFF0C\u9759\u6001\u8D44\u6E90\u8DEF\u5F84\u9700\u8981\u66F4\u6539</span></span>
<span class="line"><span style="color:#A6ACCD;">if(window.__POWERED_BY_QIANKUN__){</span></span>
<span class="line"><span style="color:#A6ACCD;">    // eslint-disable-next-line no-undef</span></span>
<span class="line"><span style="color:#A6ACCD;">    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let history;</span></span>
<span class="line"><span style="color:#A6ACCD;">let router;</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u5B9A\u4E49render\u65B9\u6CD5\u5728\u751F\u547D\u5468\u671Fmount\u7684\u65F6\u5019\u4F7F\u7528\uFF0C\u6B64\u65F6\u4E3B\u5E94\u7528\u5728\u6253\u5F00\u5B50\u5E94\u7528\u7684\u65F6\u5019\u4F1A\u4F20\u4E00\u4E2Aprops\uFF0C\u8FD9\u4E2Aprops\u91CC\u9762\u6709container\u5C5E\u6027\uFF0C\u8868\u793A\u5B50\u5E94\u7528\u7684\u6302\u8F7D\u8282\u70B9</span></span>
<span class="line"><span style="color:#A6ACCD;">function render(props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    app = createApp(App);</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u4F5C\u4E3A\u5B50\u5E94\u7528\u6253\u5F00\u7684\u8BDD\u9700\u8981\u6DFB\u52A0\u8DEF\u5F84\u524D\u7F00/vue</span></span>
<span class="line"><span style="color:#A6ACCD;">    history = createWebHistory(window.__POWERED_BY_QIANKUN__ ? &#39;/vue&#39; : &#39;/&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    router = createRouter({</span></span>
<span class="line"><span style="color:#A6ACCD;">        history,</span></span>
<span class="line"><span style="color:#A6ACCD;">        routes</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;">    app.use(router);</span></span>
<span class="line"><span style="color:#A6ACCD;">    const container = props.container;</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5982\u679C\u68C0\u6D4B\u5230\u6709container\uFF0C\u8BF4\u660E\u662F\u4F5C\u4E3A\u5B50\u5E94\u7528\u6253\u5F00\u7684\uFF0C\u90A3\u4E48\u5C31\u627Econtainer\u4E0B\u9762\u7684#app\u8282\u70B9</span></span>
<span class="line"><span style="color:#A6ACCD;">    app.mount(container ? container.querySelector(&#39;#app&#39;):document.getElementById(&#39;app&#39;));</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// qiankun \u63D0\u4F9B\u4E86\u4E00\u4E9B\u6807\u8BC6\uFF0C\u7528\u4E8E\u8868\u793A\u5F53\u524D\u5E94\u7528\u662F\u5426\u5728\u7236\u5E94\u7528\u4E2D\u88AB\u5F15\u5165\u8FC7</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u5982\u679C\u4E0D\u4F5C\u4E3A\u5B50\u5E94\u7528\u6253\u5F00\uFF0C\u800C\u662F\u72EC\u7ACB\u6253\u5F00\u7684\u8BDD\uFF0C\u76F4\u63A5\u6267\u884Crender</span></span>
<span class="line"><span style="color:#A6ACCD;">if(!window.__POWERED_BY_QIANKUN__){</span></span>
<span class="line"><span style="color:#A6ACCD;">    render({});</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u5B9A\u4E49\u5B50\u5E94\u7528\u7684\u751F\u547D\u5468\u671F</span></span>
<span class="line"><span style="color:#A6ACCD;">export async function bootstrap() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;vue bootsrap&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">export async function mount(props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    render(props);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">export async function unmount() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    app.unmount();</span></span>
<span class="line"><span style="color:#A6ACCD;">    history.destroy();</span></span>
<span class="line"><span style="color:#A6ACCD;">    app = null;</span></span>
<span class="line"><span style="color:#A6ACCD;">    router = null;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const { defineConfig } = require(&#39;@vue/cli-service&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">module.exports = defineConfig({</span></span>
<span class="line"><span style="color:#A6ACCD;">  transpileDependencies: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">  devServer:{</span></span>
<span class="line"><span style="color:#A6ACCD;">    port:20000,</span></span>
<span class="line"><span style="color:#A6ACCD;">    headers:{</span></span>
<span class="line"><span style="color:#A6ACCD;">      &#39;Access-Control-Allow-Origin&#39;:&quot;*&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  configureWebpack:{</span></span>
<span class="line"><span style="color:#A6ACCD;">  	// qiankun \u8981\u6C42\u5E94\u7528\u66B4\u9732\u7684\u65B9\u5F0F\u9700\u8981\u65F6umd\u683C\u5F0F </span></span>
<span class="line"><span style="color:#A6ACCD;">    output:{</span></span>
<span class="line"><span style="color:#A6ACCD;">      libraryTarget:&#39;umd&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      library:&#39;m-vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="_2-react\u5B50\u5E94\u7528" tabindex="-1">2.react\u5B50\u5E94\u7528 <a class="header-anchor" href="#_2-react\u5B50\u5E94\u7528" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">if(window.__POWERED_BY_QIANKUN__){</span></span>
<span class="line"><span style="color:#A6ACCD;">    // eslint-disable-next-line no-undef</span></span>
<span class="line"><span style="color:#A6ACCD;">    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let root;</span></span>
<span class="line"><span style="color:#A6ACCD;">function render(props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const container = props.container</span></span>
<span class="line"><span style="color:#A6ACCD;">    root = ReactDOM.createRoot(container ? container.querySelector(&#39;#root&#39;) : document.getElementById(&#39;root&#39;));</span></span>
<span class="line"><span style="color:#A6ACCD;">    root.render(</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;App /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// qiankun \u63D0\u4F9B\u4E86\u4E00\u4E9B\u6807\u8BC6\uFF0C\u7528\u4E8E\u8868\u793A\u5F53\u524D\u5E94\u7528\u662F\u5426\u5728\u7236\u5E94\u7528\u4E2D\u88AB\u5F15\u5165\u8FC7</span></span>
<span class="line"><span style="color:#A6ACCD;">if (!window.__POWERED_BY_QIANKUN__) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    render({}); // \u72EC\u7ACB\u8FD0\u884C\u8C03\u7528render\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// qiankun \u8981\u6C42\u5E94\u7528\u66B4\u9732\u7684\u65B9\u5F0F\u9700\u8981\u65F6umd\u683C\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">export async function bootstrap(props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(props)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">export async function mount(props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">	// \u76D1\u542C\u4E3B\u5E94\u7528\u4F20\u8FDB\u6765\u7684\u53C2\u6570\u7684\u53D8\u5316</span></span>
<span class="line"><span style="color:#A6ACCD;">    props.onGlobalStateChange((newVal, oldVal) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;child&#39;, newVal, oldVal)</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u4FEE\u6539\u4E3B\u5E94\u7528\u7684\u72B6\u6001</span></span>
<span class="line"><span style="color:#A6ACCD;">    props.setGlobalState({ name: &#39;jw2&#39; })</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5916\u5C42\u57FA\u5EA7\u7684\u5BB9\u5668\u53EBcontainer\u5BB9\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">    render(props); // \u7236\u5E94\u7528\u6302\u8F7D\u7684\u65F6\u5019\u4F1A\u4F20\u9012props\uFF0C props\u6709\u6302\u8F7D\u70B9container</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">export async function unmount(props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    root.unmount();</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><p>\u56E0\u4E3A\u6211\u4EEC\u6CA1\u529E\u6CD5\u76F4\u63A5\u4FEE\u6539\u901A\u8FC7create-react-app\u811A\u624B\u67B6\u521B\u5EFA\u7684react\u9879\u76EE\u7684webpack\u914D\u7F6E\uFF0C\u56E0\u6B64\u6211\u4EEC\u9700\u8981\u5B89\u88C5\u4E00\u4E2A\u5305**@rescripts/cli**\uFF0C\u6765\u914D\u5408\u6211\u4EEC\u91CD\u5199webpack\u914D\u7F6E\u3002</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// scripts\u811A\u672C\u6539\u4E3A</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;start&quot;: &quot;rescripts start&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;build&quot;: &quot;rescripts build&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;test&quot;: &quot;rescripts test&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;eject&quot;: &quot;rescripts eject&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u521B\u5EFA\u4E00\u4E2A.rescriptsrc.js\u6587\u4EF6</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    webpack:(config)=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">        config.output.libraryTarget = &#39;umd&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">        config.output.library = &#39;m-react&#39;; // \u6253\u5305\u7684\u683C\u5F0F\u662Fumd\u683C\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">        return config</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    devServer:(config)=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">        config.headers = {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &#39;Access-control-Allow-Origin&#39;:&quot;*&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        return config</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u4FEE\u6539env\u73AF\u5883\u53D8\u91CF</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">PORT=40000</span></span>
<span class="line"><span style="color:#A6ACCD;">WDS_SOCKET_PORT=40000</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_3-\u539F\u751F\u5B50\u5E94\u7528" tabindex="-1">3.\u539F\u751F\u5B50\u5E94\u7528 <a class="header-anchor" href="#_3-\u539F\u751F\u5B50\u5E94\u7528" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;title&gt;\u9759\u6001\u5E94\u7528&lt;/title&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div id=&quot;static&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;script &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        const app = document.getElementById(&#39;static&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        // \u6700\u7EC8\u5BFC\u51FA\u63A5\u5165\u534F\u8BAE\u5373\u53EF</span></span>
<span class="line"><span style="color:#A6ACCD;">        function render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">            app.innerHTML = &#39;static&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (!window.__POWERED_BY_QIANKUN__) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            render()</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">		// \u5176\u5B9Evue\u548Creact\u6846\u67B6\u4F5C\u4E3A\u5B50\u5E94\u7528\uFF0C\u7528umd\u6A21\u5F0F\u6253\u5305\u51FA\u6765\u7684\u6587\u4EF6\u5C31\u662F\u957F\u8FD9\u6837\u7684\uFF0CtargetName\u6302\u8F7D\u5230window\u4E0A</span></span>
<span class="line"><span style="color:#A6ACCD;">        window[&#39;m-static&#39;] = {</span></span>
<span class="line"><span style="color:#A6ACCD;">            bootstrap: async () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                console.log(&#39;static bootstrap&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">            },</span></span>
<span class="line"><span style="color:#A6ACCD;">            mount: async () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                render()</span></span>
<span class="line"><span style="color:#A6ACCD;">            },</span></span>
<span class="line"><span style="color:#A6ACCD;">            unmount: async () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                app.innerHTML = &#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/html&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><p>\u5982\u679C\u6211\u4EEC\u8FD9\u6B21\u5C06\u5B50\u5E94\u7528\u901A\u8FC7\u52A8\u6001\u7684\u5F62\u5F0F\u5F15\u5165\uFF0C\u90A3\u4E48\u6211\u4EEC\u5C06\u5728\u4E3B\u5E94\u7528\u505A\u5982\u4E0B\u7684\u6CE8\u518C</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// \u7ED9\u8FD9\u4E2A\u5B50\u5E94\u7528\u4E00\u4E2A\u8282\u70B9</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;div ref={containerRef}&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const containerRef = React.createRef();</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">useEffect(()=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">    loadMicroApp({</span></span>
<span class="line"><span style="color:#A6ACCD;">      name:&#39;m-static&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      entry: &#39;http://localhost:30000&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      container:containerRef.current</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,25),r=[e];function c(o,i,t,b,A,C){return a(),n("div",null,r)}const y=s(p,[["render",c]]);export{m as __pageData,y as default};
