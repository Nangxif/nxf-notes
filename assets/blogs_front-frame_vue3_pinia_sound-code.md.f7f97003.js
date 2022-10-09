import{_ as e,c as r,b as s,h as a,o as c,e as n}from"./app.8d28953e.js";const f=JSON.parse('{"title":"\u5B9E\u73B0\u4E00\u4E2APinia","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u9879\u76EE\u76EE\u5F55","slug":"\u4E00\u3001\u9879\u76EE\u76EE\u5F55","link":"#\u4E00\u3001\u9879\u76EE\u76EE\u5F55","children":[]},{"level":2,"title":"\u4E8C\u3001\u524D\u8A00","slug":"\u4E8C\u3001\u524D\u8A00","link":"#\u4E8C\u3001\u524D\u8A00","children":[]},{"level":2,"title":"\u4E09\u3001\u6D41\u7A0B","slug":"\u4E09\u3001\u6D41\u7A0B","link":"#\u4E09\u3001\u6D41\u7A0B","children":[]},{"level":2,"title":"\u56DB\u3001createPinia\u7684\u7531\u6765","slug":"\u56DB\u3001createpinia\u7684\u7531\u6765","link":"#\u56DB\u3001createpinia\u7684\u7531\u6765","children":[]},{"level":2,"title":"\u4E94\u3001defineStore","slug":"\u4E94\u3001definestore","link":"#\u4E94\u3001definestore","children":[{"level":3,"title":"1.createOptionsStore","slug":"_1-createoptionsstore","link":"#_1-createoptionsstore","children":[]},{"level":3,"title":"2.createSetupStore","slug":"_2-createsetupstore","link":"#_2-createsetupstore","children":[]},{"level":3,"title":"3.addSubscription\u4EE5\u53CAtriggerSubscription","slug":"_3-addsubscription\u4EE5\u53CAtriggersubscription","link":"#_3-addsubscription\u4EE5\u53CAtriggersubscription","children":[]}]},{"level":2,"title":"\u516D\u3001storeToRefs","slug":"\u516D\u3001storetorefs","link":"#\u516D\u3001storetorefs","children":[]},{"level":2,"title":"\u4E03\u3001\u4F53\u9A8C","slug":"\u4E03\u3001\u4F53\u9A8C","link":"#\u4E03\u3001\u4F53\u9A8C","children":[]}],"relativePath":"blogs/front-frame/vue3/pinia/sound-code.md","lastUpdated":1665325936000}'),i={name:"blogs/front-frame/vue3/pinia/sound-code.md"},o=a(`<h1 id="\u5B9E\u73B0\u4E00\u4E2Apinia" tabindex="-1">\u5B9E\u73B0\u4E00\u4E2APinia <a class="header-anchor" href="#\u5B9E\u73B0\u4E00\u4E2Apinia" aria-hidden="true">#</a></h1><h2 id="\u4E00\u3001\u9879\u76EE\u76EE\u5F55" tabindex="-1">\u4E00\u3001\u9879\u76EE\u76EE\u5F55 <a class="header-anchor" href="#\u4E00\u3001\u9879\u76EE\u76EE\u5F55" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">- pinia</span></span>
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
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u597D\u4E86\uFF0C\u77E5\u9053\u4E86\u8FD9\u4E2A\u524D\u7F6E\u77E5\u8BC6\u4E4B\u540E\u6211\u4EEC\u5F00\u59CB\u8BB2\u6E90\u7801\u2026\u2026</p><h2 id="\u4E09\u3001\u6D41\u7A0B" tabindex="-1">\u4E09\u3001\u6D41\u7A0B <a class="header-anchor" href="#\u4E09\u3001\u6D41\u7A0B" aria-hidden="true">#</a></h2>`,13),t=a(`<h2 id="\u56DB\u3001createpinia\u7684\u7531\u6765" tabindex="-1">\u56DB\u3001createPinia\u7684\u7531\u6765 <a class="header-anchor" href="#\u56DB\u3001createpinia\u7684\u7531\u6765" aria-hidden="true">#</a></h2><p>pinia\u662F\u600E\u4E48\u6CE8\u5165\u5230vue\u91CC\u9762\u7684\u5462</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { createPinia } from &#39;@/pinia&#39;</span></span>
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
<span class="line"><span style="color:#A6ACCD;"> * _p \u6240\u6709\u6CE8\u518C\u7684pinia\u63D2\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;"> * state \u901A\u8FC7\u4F5C\u7528\u57DF\u521B\u5EFA\u7684ref\u5BF9\u8C61,\u521D\u59CB\u503C\u662F\u4E00\u4E2A\u7A7A\u5BF9\u8C61{}</span></span>
<span class="line"><span style="color:#A6ACCD;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;">export function createPinia() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u521B\u5EFA\u9876effectScope\uFF0C\u5B58\u653E\u4E8Epinia._e</span></span>
<span class="line"><span style="color:#A6ACCD;">  const scope = effectScope(true)</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u521B\u5EFAref\u5BF9\u8C61\u7528\u4E8E\u5B58\u653E\u6BCF\u4E2Astore\u7684state\uFF0C\u5B58\u653E\u4E8Epinia.state</span></span>
<span class="line"><span style="color:#A6ACCD;">  const state: any = scope.run(() =&gt; ref({}))</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u521B\u5EFA\u4E00\u4E2A\u6570\u7EC4\u7528\u4E8E\u5B58\u653E\u6BCF\u4E2A\u63D2\u4EF6plugin\uFF0C\u5B58\u653E\u4E8Epinia._p</span></span>
<span class="line"><span style="color:#A6ACCD;">  const _p: Pinia[&#39;_p&#39;] = []</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u4F7F\u7528markRaw\u6807\u8BB0pinia\u4F7F\u5176\u4E0D\u4F1A\u88AB\u8F6C\u4E3A\u54CD\u5E94\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">  const pinia: Pinia = markRaw({</span></span>
<span class="line"><span style="color:#A6ACCD;">    install(app: App) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      setActivePinia(pinia)</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u521B\u5EFA\u4E00\u4E2A\u5BF9\u8C61\u7528\u4E8E\u5B58\u653EVue\u5B9E\u4F8B\uFF0C\u5B58\u653E\u4E8Epinia._a</span></span>
<span class="line"><span style="color:#A6ACCD;">      pinia._a = app</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u5C06pinia\u6CE8\u5165\u7EC4\u4EF6\uFF0C\u540E\u7EED\u5728useStore\u91CC\u9762\u901A\u8FC7inject\u83B7\u53D6\u6CE8\u5165\u7684\u8FD9\u4E2Apinia</span></span>
<span class="line"><span style="color:#A6ACCD;">      app.provide(piniaSymbol, pinia)</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u5C06pinia\u6302\u8F7D\u5230\u5168\u5C40</span></span>
<span class="line"><span style="color:#A6ACCD;">      app.config.globalProperties.$pinia = pinia</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u66B4\u9732\u4E00\u4E2A\u65B9\u6CD5\u7528\u4E8E\u63D2\u5165pinia\u7EC4\u4EF6\uFF0Cpinia.use\uFF0C\u8FD4\u56DEthis\u53EF\u4EE5\u94FE\u5F0F\u8C03\u7528</span></span>
<span class="line"><span style="color:#A6ACCD;">    use(plugin: never) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      _p.push(plugin)</span></span>
<span class="line"><span style="color:#A6ACCD;">      return this</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    _p,</span></span>
<span class="line"><span style="color:#A6ACCD;">    _a: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">    _e: scope,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u521B\u5EFAMap\u7528\u4E8E\u5B58\u653E\u6BCF\u4E2Astore\uFF0C\u5B58\u653E\u4E8Epinia._s</span></span>
<span class="line"><span style="color:#A6ACCD;">    _s: new Map(),</span></span>
<span class="line"><span style="color:#A6ACCD;">    state</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">  return pinia;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><p>\u6211\u4EEC\u6709\u65F6\u5019\u4F1A\u8131\u79BB\u7EC4\u4EF6\u4F7F\u7528store\uFF0C\u5982\u679C\u6211\u4EEC\u53EA\u6709inject\u65B9\u6CD5\u6CE8\u5165pinia\u7684\u8BDD\uFF0C\u5728\u6CA1\u6709\u7EC4\u4EF6\u7684\u73AF\u5883\u6BD4\u5982\u6211\u60F3\u5728\u8DEF\u7531\u91CC\u9762\u4F7F\u7528store\uFF0C\u8FD9\u6837\u7684\u8BDD\u4F1A\u83B7\u53D6\u4E0D\u5230pinia\uFF0C\u56E0\u6B64\u6211\u4EEC\u624D\u8003\u8651\u8BA9pinia\u901A\u8FC7setActivePinia\u7684\u65B9\u6CD5\u653E\u5728\u5168\u5C40\u4E0A\u3002\u90A3\u4E3A\u5565\u6709setActivePinia\u4E86\u8FD8\u8981\u7528inject\u5462\uFF0C\u56E0\u4E3A\u6709\u4E9B\u4EBA\u53EF\u80FD\u6CA1\u6709\u901A\u8FC7app.use\u8C03\u7528pinia\u7684install\uFF0C\u6240\u4EE5\u6CA1\u6709\u8C03\u7528setActivePinia\uFF0C\u5BFC\u81F4\u8FD8\u662F\u6CA1\u6709\u5168\u5C40\u53D8\u91CF\u3002</p><h2 id="\u4E94\u3001definestore" tabindex="-1">\u4E94\u3001defineStore <a class="header-anchor" href="#\u4E94\u3001definestore" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u5728\u4F7F\u7528defineStore\u7684\u65F6\u5019\u662F\u8FD9\u6837\u7684</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">export const useCounterStore = defineStore(&#39;counter&#39;,{</span></span>
<span class="line"><span style="color:#A6ACCD;">	// \u4E0A\u9762\u7684counter\u4E5F\u53EF\u4EE5\u5199\u5728\u5BF9\u8C61\u91CC\u9762</span></span>
<span class="line"><span style="color:#A6ACCD;">	// id: &#39;counter&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">	state: () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">		return {</span></span>
<span class="line"><span style="color:#A6ACCD;">			count: 0</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;">	},</span></span>
<span class="line"><span style="color:#A6ACCD;">	getters: {</span></span>
<span class="line"><span style="color:#A6ACCD;">		dobule() {</span></span>
<span class="line"><span style="color:#A6ACCD;">			return this.count * 2</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;">	},</span></span>
<span class="line"><span style="color:#A6ACCD;">	actions: {</span></span>
<span class="line"><span style="color:#A6ACCD;">		increment(payload) {</span></span>
<span class="line"><span style="color:#A6ACCD;">			this.count += payload</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	import { useCounterStore } from &#39;./stores/counter&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">	const store = useCountStore();</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>\u8FD9\u8BF4\u660E\u4E86\u4E00\u4E2A\u95EE\u9898\uFF0CdefineStore\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u51FD\u6570\uFF0C\u8FD9\u4E2A\u51FD\u6570\u8C03\u7528\u4E4B\u540E\u4F1A\u8FD4\u56DEdefineStore\u5B9A\u4E49\u8FC7\u7684store\u3002</p><p>defineStore\u4F1A\u533A\u5206\u53C2\u6570\u5B9A\u4E49id\u548Coptions\uFF0C\u5B9A\u4E49useStore\u5E76\u8FD4\u56DE\u3002useStore\u4F1A\u901A\u8FC7inject\u83B7\u53D6\u4ECEcreatePinia\u6CE8\u5165\u7684pinia\u5BF9\u8C61\uFF0C\u4ECE\u91CC\u9762\u83B7\u53D6_s\u5224\u65AD\u662F\u5426\u6709\u521B\u5EFA\u8FC7\u5F53\u524D\u4ED3\u5E93\uFF0C\u82E5\u6709\u5219\u76F4\u63A5\u8FD4\u56DE\uFF0C\u6CA1\u6709\u5219\u521B\u5EFA\u3002</p><p>\u521B\u5EFA\u7684\u8FC7\u7A0B\u4F1A\u533A\u5206options\u521B\u5EFA\u65B9\u5F0F\uFF08createOptionsStore\uFF09\u548Csetup\u521B\u5EFA\u65B9\u5F0F\uFF08createSetupStore\uFF09\uFF0C\u53D6\u51B3\u4E8EdefineStore\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u5BF9\u8C61\u8FD8\u662F\u51FD\u6570\uFF0C\u662F\u5BF9\u8C61\u7684\u8BDD\u7528createOptionsStore\uFF0C\u51FD\u6570\u7684\u8BDD\u7528createSetupStore\u3002</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">/**</span></span>
<span class="line"><span style="color:#A6ACCD;"> * \u53C2\u53EF\u80FD\u7684\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;"> * id + options</span></span>
<span class="line"><span style="color:#A6ACCD;"> * options</span></span>
<span class="line"><span style="color:#A6ACCD;"> * id + setup</span></span>
<span class="line"><span style="color:#A6ACCD;"> * \u56E0\u4E3A\u6211\u4EEC\u5728\u4F7F\u7528defineStore\u7684\u65F6\u5019\uFF0C\u662F\u8FD4\u56DE\u4E00\u4E2AuseStore</span></span>
<span class="line"><span style="color:#A6ACCD;"> * \u6700\u540E\u8FD9\u4E2AuseStore\u5728\u4F7F\u7528\u7684\u65F6\u5019\uFF0C\u662FuseStore()\u7136\u540E\u8FD4\u56DE\u4E00\u4E2Astore\uFF0C\u90A3\u4E48\u8BF4\u660EuseStore\u662F\u4E00\u4E2A\u51FD\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;"> * */</span></span>
<span class="line"><span style="color:#A6ACCD;">export function defineStore(idOrOptions: any, setup?: any, setupOptions?: any) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  let id: string</span></span>
<span class="line"><span style="color:#A6ACCD;">  let options: any</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u7B2C\u4E00\u4E2A\u4F20\u662FID</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (typeof idOrOptions === &#39;string&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    id = idOrOptions</span></span>
<span class="line"><span style="color:#A6ACCD;">    options = setup</span></span>
<span class="line"><span style="color:#A6ACCD;">  } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5BF9\u8C61</span></span>
<span class="line"><span style="color:#A6ACCD;">    options = idOrOptions</span></span>
<span class="line"><span style="color:#A6ACCD;">    id = idOrOptions.id</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u5224\u65ADsetup\u662F\u5426\u4E3A\u4E00\u4E2A\u51FD\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">  const isSetupStore = typeof setup === &#39;function&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u521B\u5EFAstore \u5E76\u6DFB\u52A0\u5230pinia._m\u4E2D</span></span>
<span class="line"><span style="color:#A6ACCD;">  function useStore() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u83B7\u53D6\u5F53\u524D\u7EC4\u4EF6\u7684\u5B9E\u4F8B</span></span>
<span class="line"><span style="color:#A6ACCD;">    let instance = getCurrentInstance();</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u4F7F\u7528inject\u83B7\u53D6\u5728createPinia\u6CE8\u5165\u7684pinia</span></span>
<span class="line"><span style="color:#A6ACCD;">    let pinia = instance &amp;&amp; inject(piniaSymbol);</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (pinia) setActivePinia(pinia)</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5168\u5C40\u53D8\u91CF\u7ED9\u4F60\uFF0C\u8FD9\u4E2A\u4E00\u5B9A\u5B58\u5728</span></span>
<span class="line"><span style="color:#A6ACCD;">    pinia = activePinia</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7B2C\u4E00\u6B21\u5982\u679C\uFF0C\u6CA1\u6709\u8FD9\u4E2Aid, \u5219\u521B\u5EFA\u4ED3\u5E93</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (!pinia?._s.has(id)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u5982\u679Csetup\u53C2\u6570\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u90A3\u4E48\u5C31\u521B\u5EFA\u4E00\u4E2AsetupStore\uFF0C\u5426\u5219\u521B\u5EFA\u4E00\u4E2AoptionsStore</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (isSetupStore) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        createSetupStore(id, setup, pinia)</span></span>
<span class="line"><span style="color:#A6ACCD;">      } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">        createOptionsStore(id, options, pinia)</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    const store = pinia?._s.get(id)</span></span>
<span class="line"><span style="color:#A6ACCD;">    return store</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  return useStore</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div><p>createOptionsStore\u548CcreateSetupStore\u6709\u90E8\u5206\u903B\u8F91\u662F\u4E00\u81F4\u7684\u3002\u6362\u79CD\u8BF4\u6CD5\uFF0C\u5728useStore\u91CC\u9762\uFF0C\u4F1A\u533A\u5206\u4F20\u7ED9defineStore\u7684\u53C2\u6570\u662F\u4EC0\u4E48\u7C7B\u578B\u7684\uFF0C\u5982\u679C\u53C2\u6570\u6709options\u90A3\u4E48\u5C31\u8C03\u7528createOptionsStore\u521B\u5EFA\u4E00\u4E2Astore\uFF0C\u800CcreateOptionsStore\u7684\u529F\u80FD\u5C31\u662F\u5C06\u4F20\u7ED9defineStore\u7684options\u62FC\u51D1\u6210\u4E00\u4E2Asetup\uFF0C\u7136\u540E\u518D\u4F20\u7ED9createSetupStore\u53BB\u521B\u5EFA\u4E00\u4E2Astore\uFF0C\u5982\u679C\u53C2\u6570\u6709setup\uFF0C\u90A3\u4E48\u5C31\u76F4\u63A5\u8C03\u7528createSetupStore\u53BB\u521B\u5EFA\u4E00\u4E2Astore\uFF0C\u800CcreateSetupStore\u91CC\u9762\u4F1A\u5C06\u81EA\u5E26\u7684methods\u6DFB\u52A0\u5230store\u4E0A\u9762\u3002</p><h3 id="_1-createoptionsstore" tabindex="-1">1.createOptionsStore <a class="header-anchor" href="#_1-createoptionsstore" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function createOptionsStore(id, options, pinia) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const { state, actions, getters } = options;</span></span>
<span class="line"><span style="color:#A6ACCD;">  function setup() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u8FD9\u91CC\u9762\u4F1A\u5BF9\u7528\u6237\u4F20\u9012\u7684state\uFF0Cactions getters \u505A\u5904\u7406</span></span>
<span class="line"><span style="color:#A6ACCD;">    pinia.state.value[id] = state ? state() : {};</span></span>
<span class="line"><span style="color:#A6ACCD;">    // localState\u4E0D\u505A\u5904\u7406\u7684\u8BDD\u5C31\u662F\u4E00\u4E2A\u666E\u901A\u7684\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u6211\u4EEC\u9700\u8981\u5C06\u72B6\u6001\u8F6C\u6210ref\uFF0C\u56E0\u4E3A\u666E\u901A\u503C\u662F\u6CA1\u6709\u54CD\u5E94\u5F0F\u7684\uFF0C\u9700\u8981\u8F6C\u6362\u6210ref\u624D\u5177\u5907\u54CD\u5E94\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">    const localState = toRefs(pinia.state.value[id]);</span></span>
<span class="line"><span style="color:#A6ACCD;">    // getters</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u89E3\u51B3this\u95EE\u9898</span></span>
<span class="line"><span style="color:#A6ACCD;">    /**</span></span>
<span class="line"><span style="color:#A6ACCD;">     * const store = useCounter();</span></span>
<span class="line"><span style="color:#A6ACCD;">     * store.increment();</span></span>
<span class="line"><span style="color:#A6ACCD;">     * \u8FD9\u4E48\u5199increment\u7684this\u6307\u5411\u80AF\u5B9A\u662Fstore\uFF0C\u5982\u679C\u901A\u8FC7\u89E3\u6784\u5462\uFF1F</span></span>
<span class="line"><span style="color:#A6ACCD;">     * const { increment } = useCounter();</span></span>
<span class="line"><span style="color:#A6ACCD;">     * increment(); \u5982\u679C\u4E0D\u505A\u5904\u7406\u7684\u8BDD\uFF0Cthis\u6307\u5411\u5C31\u4E0D\u662Fstore\u4E86</span></span>
<span class="line"><span style="color:#A6ACCD;">     * */</span></span>
<span class="line"><span style="color:#A6ACCD;">    return Object.assign(</span></span>
<span class="line"><span style="color:#A6ACCD;">      localState, // \u7528\u6237\u7684\u72B6\u6001</span></span>
<span class="line"><span style="color:#A6ACCD;">      actions, // \u7528\u6237\u7684\u52A8\u4F5C</span></span>
<span class="line"><span style="color:#A6ACCD;">      Object.keys(getters || {}).reduce((memo, name) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // \u7528\u6237\u8BA1\u7B97\u5C5E\u6027</span></span>
<span class="line"><span style="color:#A6ACCD;">        memo[name] = computed(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          let store = pinia._s.get(id);</span></span>
<span class="line"><span style="color:#A6ACCD;">          return getters[name].call(store);</span></span>
<span class="line"><span style="color:#A6ACCD;">        });</span></span>
<span class="line"><span style="color:#A6ACCD;">        return memo;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }, {})</span></span>
<span class="line"><span style="color:#A6ACCD;">    );</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  const store = createSetupStore(id, setup, pinia, true);</span></span>
<span class="line"><span style="color:#A6ACCD;">  //   \u53EA\u6709options api\u624D\u6709$reset\u65B9\u6CD5\uFF0Csetup api\u6CA1\u6709</span></span>
<span class="line"><span style="color:#A6ACCD;">  //   \u56E0\u4E3Asetup api\u6211\u4EEC\u4E0D\u77E5\u9053\u521D\u59CB\u72B6\u6001\u662F\u4EC0\u4E48</span></span>
<span class="line"><span style="color:#A6ACCD;">  store.$reset = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const newState = state ? state() : {};</span></span>
<span class="line"><span style="color:#A6ACCD;">    store.$patch((state) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u9ED8\u8BA4\u72B6\u6001\u8986\u76D6\u6389\u8001\u72B6\u6001</span></span>
<span class="line"><span style="color:#A6ACCD;">      Object.assign(state, newState);</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><h3 id="_2-createsetupstore" tabindex="-1">2.createSetupStore <a class="header-anchor" href="#_2-createsetupstore" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function createSetupStore(id, setup, pinia, isOption) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  let scope;</span></span>
<span class="line"><span style="color:#A6ACCD;">  function $patch(partialStateOrMutatior) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (typeof partialStateOrMutatior === &#39;object&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u7528\u65B0\u7684\u72B6\u6001\u5408\u5E76\u8001\u7684\u72B6\u6001</span></span>
<span class="line"><span style="color:#A6ACCD;">      mergeReactiveObject(pinia.state.value[id], partialStateOrMutatior);</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">      partialStateOrMutatior(pinia.state.value[id]);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u5F53\u7528\u6237\u72B6\u6001\u53D8\u5316\u7684\u65F6\u5019 \u53EF\u4EE5\u76D1\u63A7\u5230\u53D8\u5316 \u5E76\u4E14\u901A\u77E5\u7528\u6237 \u53D1\u5E03\u8BA2\u9605</span></span>
<span class="line"><span style="color:#A6ACCD;">  let actionSubscribes = [];</span></span>
<span class="line"><span style="color:#A6ACCD;">  const partialStore = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u6279\u5904\u7406\u7684api</span></span>
<span class="line"><span style="color:#A6ACCD;">    $patch,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u76D1\u542C\u5C5E\u6027\u53D8\u5316</span></span>
<span class="line"><span style="color:#A6ACCD;">    $subscribe(callback, options) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // watch\uFF0C\u8FD9\u91CC\u4E4B\u6240\u4EE5\u7528scope\u5305\u4E00\u5C42\u662F\u4E3A\u4E86\u540E\u9762$dispose\u4E4B\u540E\uFF0C$subscribe\u7684\u76D1\u542C\u4E5F\u53EF\u4EE5\u5931\u6548</span></span>
<span class="line"><span style="color:#A6ACCD;">      scope.run(() =&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        watch(</span></span>
<span class="line"><span style="color:#A6ACCD;">          pinia.state.value[id],</span></span>
<span class="line"><span style="color:#A6ACCD;">          (state) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            // \u76D1\u63A7\u72B6\u6001\u53D8\u5316</span></span>
<span class="line"><span style="color:#A6ACCD;">            callback({ type: &#39;dirct&#39; }, state);</span></span>
<span class="line"><span style="color:#A6ACCD;">          },</span></span>
<span class="line"><span style="color:#A6ACCD;">          options</span></span>
<span class="line"><span style="color:#A6ACCD;">        )</span></span>
<span class="line"><span style="color:#A6ACCD;">      );</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u76D1\u542C\u89E6\u53D1action</span></span>
<span class="line"><span style="color:#A6ACCD;">    $onAction: addSubscription.bind(null, actionSubscribes),</span></span>
<span class="line"><span style="color:#A6ACCD;">    $dispose: () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      scope.stop(); // \u6E05\u9664\u54CD\u5E94\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">      actionSubscribes = []; //\u53D6\u6D88\u8BA2\u9605</span></span>
<span class="line"><span style="color:#A6ACCD;">      pinia._s.delete(id); // \u5220\u9664store, \u6570\u636E\u53D8\u5316\u4E86\u4E0D\u4F1A\u518D\u66F4\u65B0\u89C6\u56FE</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u540E\u7EED\u4E00\u4E9B\u4E0D\u662F\u7528\u6237\u5B9A\u4E49\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u5185\u7F6E\u7684api\u4F1A\u589E\u52A0\u5230\u8FD9\u4E2Astore\u4E0A</span></span>
<span class="line"><span style="color:#A6ACCD;">  const store = reactive(partialStore); // store\u5C31\u662F\u4E00\u4E2A\u54CD\u5E94\u5F0F\u5BF9\u8C61\u800C\u5DF2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const initialState = pinia.state.value[id]; //\u5BF9\u4E8Esetup api \u6CA1\u6709\u521D\u59CB\u5316\u8FC7\u72B6\u6001</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  if (!initialState &amp;&amp; !isOption) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u8FD9\u6837\u624D\u80FD\u8868\u793A\u662F\u4E00\u4E2Asetup api</span></span>
<span class="line"><span style="color:#A6ACCD;">    pinia.state.value[id] = {};</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u7236\u4EB2\u53EF\u4EE5\u505C\u6B62\u6240\u6709 , setupStore \u662F\u7528\u6237\u4F20\u9012\u7684\u5C5E\u6027\u548C\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;">  // _e \u80FD\u505C\u6B62\u6240\u6709\u7684store</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u6BCF\u4E2Astore\u8FD8\u80FD\u505C\u6B62\u81EA\u5DF1\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">  const setupStore = pinia._e.run(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    scope = effectScope(); // \u81EA\u5DF1\u53EF\u4EE5\u505C\u6B62\u81EA\u5DF1</span></span>
<span class="line"><span style="color:#A6ACCD;">    return scope.run(() =&gt; setup());</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;">  function wrapAction(name, action) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u89E6\u53D1action\u7684\u65F6\u5019 \u53EF\u4EE5\u89E6\u53D1\u4E00\u4E9B\u989D\u5916\u7684\u903B\u8F91</span></span>
<span class="line"><span style="color:#A6ACCD;">      const afterCallbackList = [];</span></span>
<span class="line"><span style="color:#A6ACCD;">      const onErrorCallbackList = [];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      function after(callback) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        afterCallbackList.push(callback);</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      function onError(callback) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        onErrorCallbackList.push(callback);</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u89E6\u53D1actionSubscriptions\u4E2D\u8BA2\u9605\u7684store.$Action\u7684\u5168\u90E8\u56DE\u8C03\u51FD\u6570,\u5E76\u5C06\u53C2\u6570\u4F20\u5165</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u6B64\u65F6store.$Action\u7684callback\u5DF2\u7ECF\u6267\u884C,\u4F46\u662Fafter onError\u7684\u56DE\u8C03\u51FD\u6570\u5C1A\u672A\u6267\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u89E6\u53D1action</span></span>
<span class="line"><span style="color:#A6ACCD;">      triggerSubscription(actionSubscribes, {</span></span>
<span class="line"><span style="color:#A6ACCD;">        after,</span></span>
<span class="line"><span style="color:#A6ACCD;">        onError,</span></span>
<span class="line"><span style="color:#A6ACCD;">        store,</span></span>
<span class="line"><span style="color:#A6ACCD;">        name,</span></span>
<span class="line"><span style="color:#A6ACCD;">      });</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      let ret;</span></span>
<span class="line"><span style="color:#A6ACCD;">      try {</span></span>
<span class="line"><span style="color:#A6ACCD;">        ret = action.apply(store, arguments); // \u76F4\u63A5\u51FA\u9519</span></span>
<span class="line"><span style="color:#A6ACCD;">      } catch (error) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        triggerSubscription(onErrorCallbackList, error);</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      if (ret instanceof Promise) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return ret</span></span>
<span class="line"><span style="color:#A6ACCD;">          .then((value) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            triggerSubscription(afterCallbackList, value);</span></span>
<span class="line"><span style="color:#A6ACCD;">          })</span></span>
<span class="line"><span style="color:#A6ACCD;">          .catch((error) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            triggerSubscription(onErrorCallbackList, error);</span></span>
<span class="line"><span style="color:#A6ACCD;">            return Promise.reject(error);</span></span>
<span class="line"><span style="color:#A6ACCD;">          });</span></span>
<span class="line"><span style="color:#A6ACCD;">      } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">        triggerSubscription(afterCallbackList, ret);</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      return ret;</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  for (let key in setupStore) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const prop = setupStore[key];</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (typeof prop == &#39;function&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u4F60\u662F\u4E00\u4E2Aaction</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u5BF9action\u4E2D\u7684this \u548C \u540E\u7EED\u7684\u903B\u8F91\u8FDB\u884C\u5904\u7406 \uFF0C \u51FD\u6570\u52AB\u6301</span></span>
<span class="line"><span style="color:#A6ACCD;">      setupStore[key] = wrapAction(key, prop);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5982\u4F55\u770B\u8FD9\u4E2A\u503C\u662F\u4E0D\u662F\u72B6\u6001state\uFF0C\u5982\u679C\u8FD9\u4E2A\u503C\u662F\u4E00\u4E2Aref\u6216\u8005reactive\uFF0C\u4E0D\u5305\u62ECcomputed\uFF0C\u90A3\u4E48\u4ED6\u5C31\u53EF\u4EE5\u8BA4\u4E3A\u662Fstore\u7684state</span></span>
<span class="line"><span style="color:#A6ACCD;">    // computed\u4E5F\u662Fref</span></span>
<span class="line"><span style="color:#A6ACCD;">    if ((isRef(prop) &amp;&amp; !isComputed(prop)) || isReactive(prop)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (!isOption) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        pinia.state.value[id][key] = prop;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  Object.defineProperty(store, &#39;$state&#39;, {</span></span>
<span class="line"><span style="color:#A6ACCD;">    get: () =&gt; pinia.state.value[id],</span></span>
<span class="line"><span style="color:#A6ACCD;">    set: (state) =&gt; $patch(($state) =&gt; Object.assign($state, state)),</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  store.$id = id;</span></span>
<span class="line"><span style="color:#A6ACCD;">  pinia._s.set(id, store); // \u5C06store \u548C id\u6620\u5C04\u8D77\u6765</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  pinia._p.forEach((plugin) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5C06\u63D2\u4EF6\u7684\u8FD4\u56DE\u503C\u4F5C\u4E3Astore\u7684\u5C5E\u6027</span></span>
<span class="line"><span style="color:#A6ACCD;">    Object.assign(</span></span>
<span class="line"><span style="color:#A6ACCD;">      store,</span></span>
<span class="line"><span style="color:#A6ACCD;">      scope.run(() =&gt; plugin({ store }))</span></span>
<span class="line"><span style="color:#A6ACCD;">    );</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  Object.assign(store, setupStore);</span></span>
<span class="line"><span style="color:#A6ACCD;">  return store;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br></div></div><p>PS\uFF1A\u4E3A\u4EC0\u4E48$patch\u8981\u7528mergeReactiveObject\u53BB\u5408\u5E76\u5BF9\u8C61\uFF0C\u800C\u4E0D\u7528Object.assign\u5408\u5E76\uFF0C\u56E0\u4E3AObject.assign\u53EA\u80FD\u5408\u5E76\u4E00\u5C42\uFF0C\u6CA1\u529E\u6CD5\u5408\u5E76\u5BF9\u8C61\u4E2D\u7684\u5BF9\u8C61\uFF0C\u6240\u4EE5\u8FD8\u662F\u8981\u81EA\u5DF1\u5B9E\u73B0</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function mergeReactiveObject(target, state) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  for (let key in state) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    let oldValue = target[key];</span></span>
<span class="line"><span style="color:#A6ACCD;">    let newValue = state[key];</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u65B0\u503C\u548C\u8001\u503C\u4E5F\u53EF\u80FD\u662F\u5BF9\u8C61\uFF0C\u6240\u4EE5\u5408\u5E76\u7684\u65F6\u5019\u53EF\u80FD\u8981\u9012\u5F52</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (isObject(oldValue) &amp;&amp; isObject(newValue)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      target[key] = mergeReactiveObject(oldValue, newValue);</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">      target[key] = newValue;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  return target;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="_3-addsubscription\u4EE5\u53CAtriggersubscription" tabindex="-1">3.addSubscription\u4EE5\u53CAtriggerSubscription <a class="header-anchor" href="#_3-addsubscription\u4EE5\u53CAtriggersubscription" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">export const noop = () =&gt; {};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export function addSubscription(</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u8FD9\u4E2A\u6570\u7EC4\u662Fpinia\u5185\u90E8\u5B9A\u4E49\u7684\uFF0C\u91CC\u9762\u5B58\u653E\u7684\u662F\u7B2C\u4E8C\u4E2A\u53C2\u6570callback</span></span>
<span class="line"><span style="color:#A6ACCD;">  subscriptions,</span></span>
<span class="line"><span style="color:#A6ACCD;">  callback,</span></span>
<span class="line"><span style="color:#A6ACCD;">  detached,</span></span>
<span class="line"><span style="color:#A6ACCD;">  onCleanup = noop</span></span>
<span class="line"><span style="color:#A6ACCD;">) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  subscriptions.push(callback);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const removeSubscription = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const idx = subscriptions.indexOf(callback);</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (idx &gt; -1) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      subscriptions.splice(idx, 1);</span></span>
<span class="line"><span style="color:#A6ACCD;">      onCleanup();</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u5982\u679C$onAction\u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662Ftrue\uFF0C\u90A3\u4E48\u5728\u7EC4\u4EF6\u5378\u8F7D\u7684\u65F6\u5019\uFF0C$onAction\u8BA2\u9605\u7684\u56DE\u8C03\u8FD8\u4F1A\u88AB\u89E6\u53D1</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (!detached &amp;&amp; getCurrentInstance()) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    onUnmounted(removeSubscription);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return removeSubscription;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export function triggerSubscription(subscriptions, ...args) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  subscriptions.forEach((cb) =&gt; cb(...args));</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h2 id="\u516D\u3001storetorefs" tabindex="-1">\u516D\u3001storeToRefs <a class="header-anchor" href="#\u516D\u3001storetorefs" aria-hidden="true">#</a></h2><p>\u5982\u679C\u6211\u4EEC\u5728\u4F7F\u7528store\u7684\u65F6\u5019\u91C7\u7528\u89E3\u6784\u7684\u65B9\u5F0F</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const { count, dobule } = store; // \u8FD9\u79CD\u5199\u6CD5\u6CA1\u6709\u54CD\u5E94\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">const { count, dobule } = toRefs(store); //\u8FD9\u79CD\u5199\u6CD5\u6709\u54CD\u5E94\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">// pinia\u8FD8\u63D0\u4F9B\u4E86\u4E00\u4E2AstoreToRefs()</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u6211\u4EEC\u7528pinia\u89E3\u6784store\u7684\u65F6\u5019\u4E0D\u8981\u7528toRefs\uFF0C\u8981\u7528storeToRefs\uFF0C\u53EF\u4EE5\u8DF3\u8FC7\u51FD\u6570\u7684\u5904\u7406</span></span>
<span class="line"><span style="color:#A6ACCD;">const { count, dobule } = storeToRefs(store); //\u8FD9\u79CD\u5199\u6CD5\u6709\u54CD\u5E94\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u6E90\u7801</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { isReactive, isRef, toRaw, toRef } from &#39;vue&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export function storeToRefs(store) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // store\u662Fproxy\uFF0C\u91CC\u9762\u4F1A\u6709store\u7684\u81EA\u5B9A\u4E49\u65B9\u6CD5\u548C\u5C5E\u6027\uFF0C\u4F46\u662F\u8FD9\u4E9B\u5C5E\u6027\u6211\u4EEC\u662F\u4E0D\u9700\u8981\u89E3\u6784\u7684\uFF0C\u6211\u4EEC\u9700\u8981\u89E3\u6784\u7684\u662F\u6211\u4EEC\u81EA\u5DF1\u5B9A\u4E49\u7684state\uFF0Cgetter</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u56E0\u6B64\u6211\u4EEC\u624D\u4F1A\u5728\u904D\u5386store\u5C5E\u6027\u7684\u65F6\u5019\u5224\u65AD\u662F\u5426\u4E3Aref\u6216\u8005\u662F\u5426\u4E3Areactive</span></span>
<span class="line"><span style="color:#A6ACCD;">  store = toRaw(store);</span></span>
<span class="line"><span style="color:#A6ACCD;">  const refs = {};</span></span>
<span class="line"><span style="color:#A6ACCD;">  for (let key in store) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const value = store[key];</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (isRef(value) || isReactive(value)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      refs[key] = toRef(store, key);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="\u4E03\u3001\u4F53\u9A8C" tabindex="-1">\u4E03\u3001\u4F53\u9A8C <a class="header-anchor" href="#\u4E03\u3001\u4F53\u9A8C" aria-hidden="true">#</a></h2>`,28);function b(C,A,u,m,y,D){const p=n("Image"),l=n("Codesandbox");return c(),r("div",null,[o,s(p,{src:"/front-frame/vue3/pinia/2.png"},null,8,["src"]),t,s(l,{src:"https://codesandbox.io/p/github/Nangxif/pinia-project/draft/friendly-cray?file=%2FREADME.md"},null,8,["src"])])}const g=e(i,[["render",b]]);export{f as __pageData,g as default};