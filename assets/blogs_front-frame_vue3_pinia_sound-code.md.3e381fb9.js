import{_ as s,c as n,o as a,h as p}from"./app.99a55a37.js";const m=JSON.parse('{"title":"\u5B9E\u73B0\u4E00\u4E2APinia","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u9879\u76EE\u76EE\u5F55","slug":"\u4E00\u3001\u9879\u76EE\u76EE\u5F55","link":"#\u4E00\u3001\u9879\u76EE\u76EE\u5F55","children":[]},{"level":2,"title":"\u4E8C\u3001\u524D\u8A00","slug":"\u4E8C\u3001\u524D\u8A00","link":"#\u4E8C\u3001\u524D\u8A00","children":[]},{"level":2,"title":"\u4E09\u3001\u5165\u53E3\u6587\u4EF6","slug":"\u4E09\u3001\u5165\u53E3\u6587\u4EF6","link":"#\u4E09\u3001\u5165\u53E3\u6587\u4EF6","children":[]},{"level":2,"title":"\u56DB\u3001createPinia\u7684\u7531\u6765","slug":"\u56DB\u3001createpinia\u7684\u7531\u6765","link":"#\u56DB\u3001createpinia\u7684\u7531\u6765","children":[]}],"relativePath":"blogs/front-frame/vue3/pinia/sound-code.md","lastUpdated":1663944803000}'),e={name:"blogs/front-frame/vue3/pinia/sound-code.md"},l=p(`<h1 id="\u5B9E\u73B0\u4E00\u4E2Apinia" tabindex="-1">\u5B9E\u73B0\u4E00\u4E2APinia <a class="header-anchor" href="#\u5B9E\u73B0\u4E00\u4E2Apinia" aria-hidden="true">#</a></h1><h2 id="\u4E00\u3001\u9879\u76EE\u76EE\u5F55" tabindex="-1">\u4E00\u3001\u9879\u76EE\u76EE\u5F55 <a class="header-anchor" href="#\u4E00\u3001\u9879\u76EE\u76EE\u5F55" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">- pinia</span></span>
<span class="line"><span style="color:#A6ACCD;">  - createPinia.js</span></span>
<span class="line"><span style="color:#A6ACCD;">  - index.js</span></span>
<span class="line"><span style="color:#A6ACCD;">  - rootStore.js</span></span>
<span class="line"><span style="color:#A6ACCD;">  - store.js</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u4E8C\u3001\u524D\u8A00" tabindex="-1">\u4E8C\u3001\u524D\u8A00 <a class="header-anchor" href="#\u4E8C\u3001\u524D\u8A00" aria-hidden="true">#</a></h2><p>\u5728\u5F00\u59CB\u8BB2\u89E3\u6E90\u7801\u4E4B\u524D\uFF0C\u6211\u4EEC\u5148\u8BF4\u4E00\u4E0B\u4E00\u4E2Avue api\u2014\u2014effect</p><p>\u5047\u8BBE\u73B0\u5728\u6709\u8FD9\u6837\u4E00\u6BB5\u4EE3\u7801</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const state = reactive({name:&#39;nangxi&#39;});</span></span>
<span class="line"><span style="color:#A6ACCD;">const e1 = effect(()=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">     console.log(state.name)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">const e2 = effect(()=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">     console.log(state.name)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u5982\u679C\u6211\u60F3\u505C\u6B62e1\u548Ce2\u7684\u4F9D\u8D56\u6536\u96C6\uFF0C\u90A3\u4E48\u6211\u9700\u8981</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">e1.effect.stop();</span></span>
<span class="line"><span style="color:#A6ACCD;">e2.effect.stop();</span></span>
<span class="line"><span style="color:#A6ACCD;">state.name = &#39;nangxif&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">state.name = &#39;nangxif1&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u5982\u679C\u6211\u6709\u4E00\u5343\u4E00\u4E07\u4E2Aeffect\u9700\u8981\u6211stop\uFF0C\u90A3\u5C82\u4E0D\u662F\u5F88\u9EBB\u70E6\uFF1F\u5F53\u7136\u6211\u4EEC\u53EF\u4EE5\u7528\u4E00\u4E2Amap\u6765\u5B58\u8FD9\u4E9Beffect\uFF0C\u7136\u540E\u7528\u5FAA\u73AF\u6E05\u9664\uFF0C\u4F46\u662F\u8FD8\u662F\u5F88\u9EBB\u70E6\uFF01\u8FD9\u65F6\u5019\u6709\u4E2A\u65B0\u7684api\u2014\u2014effectScope\u53EF\u4EE5\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u7528\u4E00\u4E2Ascope\u6765\u6536\u96C6\u8FD9\u4E9Beffect\u3002</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const state = reactive({name:&#39;nangxi&#39;});</span></span>
<span class="line"><span style="color:#A6ACCD;">const scope = effectScope(true);</span></span>
<span class="line"><span style="color:#A6ACCD;">scope.run(()=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">     effect(()=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">         console.log(state.name);</span></span>
<span class="line"><span style="color:#A6ACCD;">     })</span></span>
<span class="line"><span style="color:#A6ACCD;">     effect(()=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">         console.log(state.name);</span></span>
<span class="line"><span style="color:#A6ACCD;">     })</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">scope.stop()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u597D\u4E86\uFF0C\u77E5\u9053\u4E86\u8FD9\u4E2A\u524D\u7F6E\u77E5\u8BC6\u4E4B\u540E\u6211\u4EEC\u5F00\u59CB\u8BB2\u6E90\u7801\u2026\u2026</p><h2 id="\u4E09\u3001\u5165\u53E3\u6587\u4EF6" tabindex="-1">\u4E09\u3001\u5165\u53E3\u6587\u4EF6 <a class="header-anchor" href="#\u4E09\u3001\u5165\u53E3\u6587\u4EF6" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// index.js</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export { createPinia } from &#39;./createPinia&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">export { defineStore } from &#39;./store&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="\u56DB\u3001createpinia\u7684\u7531\u6765" tabindex="-1">\u56DB\u3001createPinia\u7684\u7531\u6765 <a class="header-anchor" href="#\u56DB\u3001createpinia\u7684\u7531\u6765" aria-hidden="true">#</a></h2><p>pinia\u662F\u600E\u4E48\u6CE8\u5165\u5230vue\u91CC\u9762\u7684\u5462</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { createPinia } from &#39;@/pinia&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const pinia = createPinia();</span></span>
<span class="line"><span style="color:#A6ACCD;">app.use(pinia)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u7531\u6B64\u6211\u4EEC\u6839\u636Evue\u63D2\u4EF6\u7684\u5F00\u53D1\u89C4\u8303\u6211\u4EEC\u53EF\u4EE5\u77E5\u9053createPinia\u8FD4\u56DE\u7684\u80AF\u5B9A\u662F\u4E00\u4E2A\u6709install\u65B9\u6CD5\u7684\u5BF9\u8C61</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// createPinia.js</span></span>
<span class="line"><span style="color:#A6ACCD;">import { effectScope, markRaw, ref } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import type { App } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { setActivePinia, piniaSymbol, Pinia } from &#39;./rootStore&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">/**</span></span>
<span class="line"><span style="color:#A6ACCD;"> * \u8FD4\u56DE\u4E00\u4E2Apinia\u5BF9\u8C61\uFF0C\u5185\u90E8\u63D0\u4F9Binstall\u65B9\u6CD5\uFF0C\u65B9\u4FBF\u6CE8\u518C</span></span>
<span class="line"><span style="color:#A6ACCD;"> * _a \u7528\u4E8E\u4FDD\u5B58Vue\u7684\u5B9E\u4F8B\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#A6ACCD;"> * _s \u53C2\u6570\u7528\u4E8E\u4FDD\u5B58\u6240\u6709\u7684\u6A21\u5757</span></span>
<span class="line"><span style="color:#A6ACCD;"> * _e \u6700\u5916\u5C42\u7684\u4F5C\u7528\u57DFscope</span></span>
<span class="line"><span style="color:#A6ACCD;"> * state \u901A\u8FC7\u4F5C\u7528\u57DF\u521B\u5EFA\u7684ref\u5BF9\u8C61,\u521D\u59CB\u503C\u662F\u4E00\u4E2A\u7A7A\u5BF9\u8C61{}</span></span>
<span class="line"><span style="color:#A6ACCD;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;">export function createPinia() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u521B\u5EFA\u4E00\u4E2Ascope\u7528\u4E8E\u63A7\u5236\u4F9D\u8D56\u6536\u96C6</span></span>
<span class="line"><span style="color:#A6ACCD;">  const scope = effectScope(true)</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u521D\u59CB\u5316\u4E00\u4E2Astate \u7528\u4E8E\u4FDD\u5B58store\u6240\u6709\u7684\u72B6\u6001</span></span>
<span class="line"><span style="color:#A6ACCD;">  const state: any = scope.run(() =&gt; ref({}))</span></span>
<span class="line"><span style="color:#A6ACCD;">  const _p: Pinia[&#39;_p&#39;] = []</span></span>
<span class="line"><span style="color:#A6ACCD;">  const pinia: Pinia = markRaw({</span></span>
<span class="line"><span style="color:#A6ACCD;">    install(app: App) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      setActivePinia(pinia)</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u4FDD\u5B58Vue\u7684\u5B9E\u4F8B\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#A6ACCD;">      pinia._a = app</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u5C06pinia\u6CE8\u5165\u7EC4\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">      app.provide(piniaSymbol, pinia)</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u5C06pinia\u6302\u8F7D\u5230\u5168\u5C40</span></span>
<span class="line"><span style="color:#A6ACCD;">      app.config.globalProperties.$pinia = pinia</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    use(plugin: never) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      _p.push(plugin)</span></span>
<span class="line"><span style="color:#A6ACCD;">      return this</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    _p,</span></span>
<span class="line"><span style="color:#A6ACCD;">    _a: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">    _e: scope,</span></span>
<span class="line"><span style="color:#A6ACCD;">    _s: new Map(),</span></span>
<span class="line"><span style="color:#A6ACCD;">    state</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">  return pinia;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div>`,19),c=[l];function r(i,o,t,b,A,C){return a(),n("div",null,c)}const d=s(e,[["render",r]]);export{m as __pageData,d as default};
