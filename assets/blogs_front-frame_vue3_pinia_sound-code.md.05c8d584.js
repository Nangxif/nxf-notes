import{_ as s,c as n,o as a,d as e}from"./app.eb8a3e4e.js";const C=JSON.parse('{"title":"\u5B9E\u73B0\u4E00\u4E2APinia","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u9879\u76EE\u76EE\u5F55","slug":"\u4E00\u3001\u9879\u76EE\u76EE\u5F55","link":"#\u4E00\u3001\u9879\u76EE\u76EE\u5F55","children":[]},{"level":2,"title":"\u4E8C\u3001\u524D\u8A00","slug":"\u4E8C\u3001\u524D\u8A00","link":"#\u4E8C\u3001\u524D\u8A00","children":[]},{"level":2,"title":"\u4E09\u3001\u5165\u53E3\u6587\u4EF6","slug":"\u4E09\u3001\u5165\u53E3\u6587\u4EF6","link":"#\u4E09\u3001\u5165\u53E3\u6587\u4EF6","children":[]},{"level":2,"title":"\u56DB\u3001createPinia\u7684\u7531\u6765","slug":"\u56DB\u3001createpinia\u7684\u7531\u6765","link":"#\u56DB\u3001createpinia\u7684\u7531\u6765","children":[]}],"relativePath":"blogs/front-frame/vue3/pinia/sound-code.md"}'),l={name:"blogs/front-frame/vue3/pinia/sound-code.md"},p=e(`<h1 id="\u5B9E\u73B0\u4E00\u4E2Apinia" tabindex="-1">\u5B9E\u73B0\u4E00\u4E2APinia <a class="header-anchor" href="#\u5B9E\u73B0\u4E00\u4E2Apinia" aria-hidden="true">#</a></h1><h2 id="\u4E00\u3001\u9879\u76EE\u76EE\u5F55" tabindex="-1">\u4E00\u3001\u9879\u76EE\u76EE\u5F55 <a class="header-anchor" href="#\u4E00\u3001\u9879\u76EE\u76EE\u5F55" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">- pinia</span></span>
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
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="\u56DB\u3001createpinia\u7684\u7531\u6765" tabindex="-1">\u56DB\u3001createPinia\u7684\u7531\u6765 <a class="header-anchor" href="#\u56DB\u3001createpinia\u7684\u7531\u6765" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// createPinia.js</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,16),c=[p];function r(i,o,t,b,d,u){return a(),n("div",null,c)}const m=s(l,[["render",r]]);export{C as __pageData,m as default};
