import{_ as s,c as n,o as a,h as e}from"./app.99a55a37.js";const d=JSON.parse('{"title":"Vue3\u6E32\u67D3\u7684\u51E0\u79CD\u65B9\u5F0F","description":"","frontmatter":{},"headers":[{"level":2,"title":"1.template\u6807\u7B7E","slug":"_1-template\u6807\u7B7E","link":"#_1-template\u6807\u7B7E","children":[]},{"level":2,"title":"2.setup\u7684return","slug":"_2-setup\u7684return","link":"#_2-setup\u7684return","children":[]},{"level":2,"title":"3.render","slug":"_3-render","link":"#_3-render","children":[]}],"relativePath":"blogs/front-frame/vue3/groceries/rendering.md","lastUpdated":1663944803000}'),l={name:"blogs/front-frame/vue3/groceries/rendering.md"},p=e(`<h1 id="vue3\u6E32\u67D3\u7684\u51E0\u79CD\u65B9\u5F0F" tabindex="-1">Vue3\u6E32\u67D3\u7684\u51E0\u79CD\u65B9\u5F0F <a class="header-anchor" href="#vue3\u6E32\u67D3\u7684\u51E0\u79CD\u65B9\u5F0F" aria-hidden="true">#</a></h1><h2 id="_1-template\u6807\u7B7E" tabindex="-1">1.template\u6807\u7B7E <a class="header-anchor" href="#_1-template\u6807\u7B7E" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;123&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="_2-setup\u7684return" tabindex="-1">2.setup\u7684return <a class="header-anchor" href="#_2-setup\u7684return" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;script lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { h } from &quot;vue&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: &quot;App&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  setup() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return h(&quot;div&quot;, 123);</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { defineComponent } from &quot;vue&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default defineComponent({</span></span>
<span class="line"><span style="color:#A6ACCD;">  setup() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return () =&gt; &lt;div&gt;123&lt;/div&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u4E0B\u9762\u8FD9\u79CD\u5199\u6CD5\u662F\u9519\u8BEF\u7684</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;script lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: &quot;App&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  setup() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return &lt;div&gt;123&lt;/div&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="_3-render" tabindex="-1">3.render <a class="header-anchor" href="#_3-render" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;script lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { h } from &quot;vue&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: &quot;App&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return h(&quot;div&quot;, 123);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { defineComponent } from &quot;vue&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default defineComponent({</span></span>
<span class="line"><span style="color:#A6ACCD;">  render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return &lt;div&gt;123&lt;/div&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u4E0B\u9762\u8FD9\u79CD\u5199\u6CD5\u662F\u9519\u8BEF\u7684</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;script lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: &quot;App&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return &lt;div&gt;123&lt;/div&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,13),r=[p];function t(c,o,i,u,b,A){return a(),n("div",null,r)}const m=s(l,[["render",t]]);export{d as __pageData,m as default};
