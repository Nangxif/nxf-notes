import{_ as e,c as l,b as p,a as s,g as n,h as r,r as c,o as i}from"./app.3eb8740b.js";const k=JSON.parse('{"title":"runtime-dom","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001runtime-dom\u5927\u81F4\u67B6\u6784","slug":"\u4E00\u3001runtime-dom\u5927\u81F4\u67B6\u6784","link":"#\u4E00\u3001runtime-dom\u5927\u81F4\u67B6\u6784","children":[]},{"level":2,"title":"\u4E8C\u3001\u4EE3\u7801\u89E3\u6790","slug":"\u4E8C\u3001\u4EE3\u7801\u89E3\u6790","link":"#\u4E8C\u3001\u4EE3\u7801\u89E3\u6790","children":[{"level":3,"title":"1.\u76EE\u5F55\u7ED3\u6784","slug":"_1-\u76EE\u5F55\u7ED3\u6784","link":"#_1-\u76EE\u5F55\u7ED3\u6784","children":[]},{"level":3,"title":"2.index.ts\u5165\u53E3\u6587\u4EF6","slug":"_2-index-ts\u5165\u53E3\u6587\u4EF6","link":"#_2-index-ts\u5165\u53E3\u6587\u4EF6","children":[]},{"level":3,"title":"3.nodeOps.ts\u64CD\u4F5C\u8282\u70B9\u7684api","slug":"_3-nodeops-ts\u64CD\u4F5C\u8282\u70B9\u7684api","link":"#_3-nodeops-ts\u64CD\u4F5C\u8282\u70B9\u7684api","children":[]},{"level":3,"title":"4.patchProp.ts\u521B\u5EFA\u548C\u5904\u7406\u5C5E\u6027\u7684api","slug":"_4-patchprop-ts\u521B\u5EFA\u548C\u5904\u7406\u5C5E\u6027\u7684api","link":"#_4-patchprop-ts\u521B\u5EFA\u548C\u5904\u7406\u5C5E\u6027\u7684api","children":[]},{"level":3,"title":"5.patch\u65B9\u6CD5\u6C47\u603B","slug":"_5-patch\u65B9\u6CD5\u6C47\u603B","link":"#_5-patch\u65B9\u6CD5\u6C47\u603B","children":[]}]}],"relativePath":"blogs/front-frame/vue3/sound-code/runtime-dom.md","lastUpdated":1718205114000}'),o={name:"blogs/front-frame/vue3/sound-code/runtime-dom.md"},t=s("h1",{id:"runtime-dom",tabindex:"-1"},[n("runtime-dom "),s("a",{class:"header-anchor",href:"#runtime-dom","aria-hidden":"true"},"#")],-1),b=s("p",null,[n("\u6211\u4EEC\u5148\u8BB2\u4E00\u4E0Bruntime-dom\u7684\u7531\u6765\u5427\u3002vue3\u6709\u4E00\u90E8\u5206\u903B\u8F91\u5C31\u662F\u521B\u5EFA\u4E00\u4E2A\u6E32\u67D3\u5668\uFF0C\u6E32\u67D3\u5668\u4E0A\u6709\u4E00\u4E2Arender\u65B9\u6CD5\uFF0Crender\u65B9\u6CD5\u4F1A\u5C06\u865A\u62DF\u8282\u70B9\u8F6C\u6362\u4E3A\u771F\u5B9E\u8282\u70B9\uFF0C\u771F\u5B9E\u8282\u70B9\u6302\u8F7D\u5230\u771F\u5B9E\u6839\u8282\u70B9\u4E0A\uFF0C\u5728\u66F4\u65B0\u7684\u65F6\u5019\u91C7\u7528diff\u7B97\u6CD5\u8FDB\u884C\u66F4\u65B0\u4EE5\u63D0\u5347\u6027\u80FD\u7B49\u3002\u90A3\u4E48\u5728render\u8FDB\u884C\u8FD9\u4E9B\u5DE5\u4F5C\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u4F1A\u4F7F\u7528\u5230\u521B\u5EFA\u8282\u70B9\uFF0C\u521B\u5EFA\u6587\u672C\u8282\u70B9\uFF0C\u63D2\u5165\u5143\u7D20\u8282\u70B9\uFF0C\u5220\u9664\u5143\u7D20\u8282\u70B9\u7B49\u64CD\u4F5C\uFF0C\u90A3\u4E48\u8FD9\u4E9B\u64CD\u4F5C\uFF0C\u5176\u5B9E\u662F\u53EF\u4EE5\u89E3\u8026\u51FA\u6765\u7684\uFF0C\u4E3A\u4EC0\u4E48\u8FD9\u4E48\u8BF4\uFF1F\u5728\u5C0F\u7A0B\u5E8F\u5E73\u53F0\uFF0C\u6D4F\u89C8\u5668\u5E73\u53F0\uFF0C\u8FD8\u6709\u5176\u4ED6\u7684\u4E00\u4E9B\u9002\u5408\u4F7F\u7528vue\u8FD9\u79CD\u6E32\u67D3\u903B\u8F91\u7684\u5E73\u53F0\uFF0C\u4ED6\u4EEC\u7684\u521B\u5EFA\u8282\u70B9\u7684\u65B9\u5F0F\uFF0C\u63D2\u5165\u5143\u7D20\u7684\u65B9\u5F0F\uFF0C\u80AF\u5B9A\u662F\u4E0D\u4E00\u6837\u7684\uFF0C\u4F8B\u5982\uFF0C\u5C0F\u7A0B\u5E8F\u80AF\u5B9A\u6CA1\u6709\u6D4F\u89C8\u5668\u7684"),s("code",null,"document.createElement()"),n("\uFF0C\u90A3\u4E48\u6211\u4EEC\u5982\u679C\u8981\u4F7F\u7528vue\u7684diff\u7B97\u6CD5\uFF0C\u9776\u5411\u66F4\u65B0\uFF0C\u865A\u62DF\u8282\u70B9\u8F6C\u6362\u4E3A\u771F\u5B9E\u8282\u70B9\u7B49\u529F\u80FD\uFF0C\u603B\u4E0D\u80FD\u4E00\u4E2A\u5E73\u53F0\u5199\u4E00\u4EFD\u4EE3\u7801\u5427\uFF0C\u5176\u5B9E\u6211\u4EEC\u53EF\u4EE5\u5B9A\u4E49\u597D\u4E00\u4E9B\u64CD\u4F5C\uFF08\u5C06\u5143\u7D20\u521B\u5EFA\uFF0C\u63D2\u5165\u8282\u70B9\u5C01\u88C5\u6210\u4E00\u4E2A\u4E2A\u7684api\uFF09\u4F5C\u4E3A\u914D\u7F6E\uFF0C\u7136\u540E\u4F20\u7ED9createRenderer\u53BB\u521B\u5EFA\u6E32\u67D3\u5668\uFF0C\u56E0\u6B64\uFF0Cruntime-dom\u5C31\u662F\u63D0\u4F9B\u8FD9\u4EFDapi\u914D\u7F6E\u7684\u4E00\u4E2A\u5305\uFF0C\u800Cruntime-core\u5C31\u662F\u63D0\u4F9B\u521B\u5EFA\u6E32\u67D3\u5668\u65B9\u6CD5\uFF08createRenderer\uFF09\u7684\u4E00\u4E2A\u5305\uFF0C\u8FD9\u4E2A\u6E32\u67D3\u5668\u7684render\u53EF\u4EE5\u4F7F\u7528runtime-dom\u63D0\u4F9B\u7684\u57FA\u4E8E\u6D4F\u89C8\u5668\u7684\u914D\u7F6E\u3002\u5F53\u7136\uFF0C\u5982\u679C\u4F60\u60F3\u5728\u5C0F\u7A0B\u5E8F\u4F7F\u7528\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u81EA\u5DF1\u5199\u4E00\u4E2A\u914D\u7F6E\u5305\uFF0C\u81EA\u5DF1\u63D0\u4F9B\u5C0F\u7A0B\u5E8F\u7684\u5143\u7D20\u521B\u5EFA\u65B9\u6CD5\uFF0C\u5143\u7D20\u63D2\u5165\u7B49\u65B9\u6CD5\u3002")],-1),C=s("h2",{id:"\u4E00\u3001runtime-dom\u5927\u81F4\u67B6\u6784",tabindex:"-1"},[n("\u4E00\u3001runtime-dom\u5927\u81F4\u67B6\u6784 "),s("a",{class:"header-anchor",href:"#\u4E00\u3001runtime-dom\u5927\u81F4\u67B6\u6784","aria-hidden":"true"},"#")],-1),A=r(`<h2 id="\u4E8C\u3001\u4EE3\u7801\u89E3\u6790" tabindex="-1">\u4E8C\u3001\u4EE3\u7801\u89E3\u6790 <a class="header-anchor" href="#\u4E8C\u3001\u4EE3\u7801\u89E3\u6790" aria-hidden="true">#</a></h2><h3 id="_1-\u76EE\u5F55\u7ED3\u6784" tabindex="-1">1.\u76EE\u5F55\u7ED3\u6784 <a class="header-anchor" href="#_1-\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">- index.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">- nodeOps.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">- patchProp.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">- modules</span></span>
<span class="line"><span style="color:#A6ACCD;">  - attr.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">  - class.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">  - event.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">  - style.ts</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="_2-index-ts\u5165\u53E3\u6587\u4EF6" tabindex="-1">2.index.ts\u5165\u53E3\u6587\u4EF6 <a class="header-anchor" href="#_2-index-ts\u5165\u53E3\u6587\u4EF6" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// \u8FD9\u4E2A\u5305\u672C\u8D28\u4E0A\u5565\u90FD\u6CA1\u505A\uFF0C\u5C31\u5C01\u88C5\u4E86\u4E00\u4E9B\u5E73\u53F0\u4E0A\u8FD0\u884C\u7684\u4EE3\u7801</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u7136\u540E\u53BB\u8C03\u7528\u5185\u90E8\u7684\u521B\u5EFA\u6E32\u67D3\u5668\u8FDB\u884C\u6E32\u67D3</span></span>
<span class="line"><span style="color:#A6ACCD;">import { createRenderer } from &#39;@vue/runtime-core&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { nodeOps } from &#39;./nodeOps&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { patchProp } from &#39;./patchProp&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u8FD9\u91CC\u63D0\u4F9B\u4E86\u4E00\u4E9BdomAPI\u548C\u5C5E\u6027API</span></span>
<span class="line"><span style="color:#A6ACCD;">const renderOptions = Object.assign(nodeOps, { patchProp });</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// createRenderer\u65B9\u6CD5\u662F\u7528\u6765\u521B\u5EFA\u4E00\u4E2A\u6E32\u67D3\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">// h\u65B9\u6CD5\u662F\u7528\u6765\u521B\u5EFA\u865A\u62DFDOM\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u5728\u521B\u5EFA\u6E32\u67D3\u5668\u7684\u65F6\u5019\u4F20\u5165\u9009\u9879</span></span>
<span class="line"><span style="color:#A6ACCD;">export function render(vnode, container) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  createRenderer(renderOptions).render(vnode, container);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// h\u548CcreateRenderer\u90FD\u53EF\u4EE5\u5728runtime-dom\u5305\u76F4\u63A5\u62FF\u5230</span></span>
<span class="line"><span style="color:#A6ACCD;">export * from &#39;@vue/runtime-core&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="_3-nodeops-ts\u64CD\u4F5C\u8282\u70B9\u7684api" tabindex="-1">3.nodeOps.ts\u64CD\u4F5C\u8282\u70B9\u7684api <a class="header-anchor" href="#_3-nodeops-ts\u64CD\u4F5C\u8282\u70B9\u7684api" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">export const nodeOps = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u589E\u52A0 \u5220\u9664 \u4FEE\u6539 \u67E5\u8BE2</span></span>
<span class="line"><span style="color:#A6ACCD;">  // anchor\u53C2\u7167\u7269\uFF0C\u628A\u8C01\u63D2\u5230\u8C01\u7684\u524D\u9762\u53BB</span></span>
<span class="line"><span style="color:#A6ACCD;">  insert(child, parent, anchor = null) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5F53anchor = null\u65F6\uFF0CinsertBefore\u76F8\u5F53\u4E8EappendChild</span></span>
<span class="line"><span style="color:#A6ACCD;">    parent.insertBefore(child, anchor);</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  //   \u5220\u9664\u8282\u70B9</span></span>
<span class="line"><span style="color:#A6ACCD;">  remove(child) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const parentNode = child.parentNode;</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (parentNode) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      parentNode.removeChild(child);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  //   \u6587\u672C\u8282\u70B9\uFF0C\u5143\u7D20\u4E2D\u7684\u5185\u5BB9</span></span>
<span class="line"><span style="color:#A6ACCD;">  setElementText(el, text) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5207\u8BB0\u6539\u6587\u672C\u4E0D\u53EF\u4EE5\u7528innerHTML\u64CD\u4F5C\uFF0C\u56E0\u4E3A\u8FD9\u4E2A\u64CD\u4F5C\u53EF\u4EE5\u6267\u884Cjs\u811A\u672C</span></span>
<span class="line"><span style="color:#A6ACCD;">    el.textContent = text;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  setText(node, text) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    node.nodeValue = text;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  querySelector(selector) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return document.querySelector(selector);</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  parentNode(node) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return node.parentNode;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  nextSibling(node) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return node.nextSibling;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  createElement(tagName) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return document.createElement(tagName);</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  createText(text) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return document.createTextNode(text);</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><h3 id="_4-patchprop-ts\u521B\u5EFA\u548C\u5904\u7406\u5C5E\u6027\u7684api" tabindex="-1">4.patchProp.ts\u521B\u5EFA\u548C\u5904\u7406\u5C5E\u6027\u7684api <a class="header-anchor" href="#_4-patchprop-ts\u521B\u5EFA\u548C\u5904\u7406\u5C5E\u6027\u7684api" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// \u5BF9\u5C5E\u6027\u8FDB\u884C\u5904\u7406\uFF0C\u5C5E\u6027\u7684\u64CD\u4F5C</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u6211\u4EEC\u5728\u66F4\u65B0\u5C5E\u6027\uFF0C\u521B\u5EFA\u5C5E\u6027\uFF0C\u8981\u6709\u4E00\u4E2A\u524D\u540E\u7684\u5BF9\u6BD4</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u8FD9\u4E2A\u65B9\u6CD5\u65E2\u80FD\u521B\u5EFA\uFF0C\u53C8\u80FD\u4FEE\u6539\uFF0C\u53C8\u80FD\u79FB\u9664</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">import { patchAttr } from &#39;./modules/attr&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { patchClass } from &#39;./modules/class&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { patchEvent } from &#39;./modules/event&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { patchStyle } from &#39;./modules/style&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u6240\u4EE5\u624D\u5355\u72EC\u628A\u5BF9\u5C5E\u6027\u7684\u5904\u7406\u62BD\u51FA\u6765</span></span>
<span class="line"><span style="color:#A6ACCD;">export function patchProp(el, key, prevValue, nextValue) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u7C7B\u540D el.className</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (key === &#39;class&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    patchClass(el, nextValue);</span></span>
<span class="line"><span style="color:#A6ACCD;">  } else if (key === &#39;style&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u6837\u5F0Fel.style</span></span>
<span class="line"><span style="color:#A6ACCD;">    patchStyle(el, prevValue, nextValue);</span></span>
<span class="line"><span style="color:#A6ACCD;">  } else if (/^on[^a-z]/.test(key)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // events addEventListener</span></span>
<span class="line"><span style="color:#A6ACCD;">    patchEvent(el, key, nextValue);</span></span>
<span class="line"><span style="color:#A6ACCD;">  } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u666E\u901A\u5C5E\u6027 el.setAttribute</span></span>
<span class="line"><span style="color:#A6ACCD;">    patchAttr(el, key, nextValue);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h3 id="_5-patch\u65B9\u6CD5\u6C47\u603B" tabindex="-1">5.patch\u65B9\u6CD5\u6C47\u603B <a class="header-anchor" href="#_5-patch\u65B9\u6CD5\u6C47\u603B" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// attr.ts \u5904\u7406\u5C5E\u6027</span></span>
<span class="line"><span style="color:#A6ACCD;">export function patchAttr(el, key, nextValue) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (nextValue) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    el.setAttribute(key, nextValue);</span></span>
<span class="line"><span style="color:#A6ACCD;">  } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">    el.removeAttribute(key);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// class.ts \u5904\u7406\u6837\u5F0F\u7C7B</span></span>
<span class="line"><span style="color:#A6ACCD;">export function patchClass(el, nextValue) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (nextValue) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    el.className = nextValue;</span></span>
<span class="line"><span style="color:#A6ACCD;">  } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">    el.removeAttribute(&#39;class&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// event.ts \u5904\u7406\u4E8B\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">function createInvoker(callback) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const invoker = (e) =&gt; invoker.value(e);</span></span>
<span class="line"><span style="color:#A6ACCD;">  invoker.value = callback;</span></span>
<span class="line"><span style="color:#A6ACCD;">  return invoker;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// eg</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u7B2C\u4E00\u6B21\u7ED1\u5B9A\u4E86onClick\u4E8B\u4EF6a el._vei = {click:onClick} el.addEventListener(click,(e)=&gt;a(e))</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u7B2C\u4E00\u6B21\u7ED1\u5B9A\u4E86onClick\u4E8B\u4EF6b el._vei = {click:onClick} el.addEventListener(click,(e)=&gt;b(e))</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u7B2C\u4E00\u6B21\u7ED1\u5B9A\u4E86onClick\u4E8B\u4EF6 null el.removeEventListener(click,(e)=&gt;b(e)) el._vei = {}</span></span>
<span class="line"><span style="color:#A6ACCD;">// export function patchEvent(el, eventName, nextValue) {</span></span>
<span class="line"><span style="color:#A6ACCD;">//   // \u4E8B\u4EF6\u90FD\u7F13\u5B58\u5230\u4E86\u5F53\u524Ddom\u4E0A</span></span>
<span class="line"><span style="color:#A6ACCD;">//   /**</span></span>
<span class="line"><span style="color:#A6ACCD;">//    * \u53EF\u4EE5\u5148\u79FB\u9664\u6389\u4E8B\u4EF6\uFF0C\u518D\u91CD\u65B0\u7ED1\u5B9A\u4E8B\u4EF6\uFF0C\u4F46\u662F\u8FD9\u6837\u6BCF\u6B21\u90FD\u8981\u8C03\u7528addEventListener\u548CremoveEventListener</span></span>
<span class="line"><span style="color:#A6ACCD;">//    * \u8FD9\u6837\u5F88\u8017\u6027\u80FD</span></span>
<span class="line"><span style="color:#A6ACCD;">//    * \u56E0\u6B64\u6211\u4EEC\u53EF\u4EE5\u7528\u7C7B\u4F3C\u4EE5\u4E0B\u8FD9\u79CD\u5F62\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">//    * add = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">//    *    drink()//\u6BCF\u6B21\u8981\u4FEE\u6539\u76F4\u63A5\u6539\u6389drink\u8FD9\u4E2A\u65B9\u6CD5\uFF0C\u53EA\u9700\u8981\u4E00\u5F00\u59CB\u7ED1\u5B9Aadd\u8FD9\u4E2A\u65B9\u6CD5\u5C31\u597D\u4E86</span></span>
<span class="line"><span style="color:#A6ACCD;">//    * }</span></span>
<span class="line"><span style="color:#A6ACCD;">//    * */</span></span>
<span class="line"><span style="color:#A6ACCD;">//   //   .vei\u7528\u6765\u7F13\u5B58\u7ED1\u5B9A\u7684\u4E8B\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">//   let invokers = el._vei || (el.vei = {});</span></span>
<span class="line"><span style="color:#A6ACCD;">//   //   \u5148\u770B\u4E00\u4E0B\u7F13\u5B58\u4E0A\u9762\u6709\u6CA1\u6709\u7ED1\u5B9A\u8FC7\u8FD9\u4E2A\u4E8B\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">//   let exits = invokers[eventName];</span></span>
<span class="line"><span style="color:#A6ACCD;">//   if (exits &amp;&amp; nextValue) {</span></span>
<span class="line"><span style="color:#A6ACCD;">//     exits.value = nextValue; //\u6CA1\u6709\u5378\u8F7D\u51FD\u6570\uFF0C\u53EA\u662F\u6539\u4E86invoker.value\u5C5E\u6027</span></span>
<span class="line"><span style="color:#A6ACCD;">//   } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">//     // \u5982\u679C\u4E4B\u524D\u6CA1\u6709\u7F13\u5B58\u8FC7</span></span>
<span class="line"><span style="color:#A6ACCD;">//     let event = eventName.slice(2).toLowerCase();</span></span>
<span class="line"><span style="color:#A6ACCD;">//     if (nextValue) {</span></span>
<span class="line"><span style="color:#A6ACCD;">//       const invoker = (invokers[eventName] = createInvoker(nextValue));</span></span>
<span class="line"><span style="color:#A6ACCD;">//       el.addEventListener(event, invoker);</span></span>
<span class="line"><span style="color:#A6ACCD;">//     } else if (exits) {</span></span>
<span class="line"><span style="color:#A6ACCD;">//       // \u5982\u679C\u6709\u8001\u503C\uFF0C\u9700\u8981\u5C06\u8001\u7684\u7ED1\u5B9A\u4E8B\u4EF6\u79FB\u9664\u6389</span></span>
<span class="line"><span style="color:#A6ACCD;">//       el.removeEventListener(event, exits);</span></span>
<span class="line"><span style="color:#A6ACCD;">//       invokers[eventName] = undefined;</span></span>
<span class="line"><span style="color:#A6ACCD;">//     }</span></span>
<span class="line"><span style="color:#A6ACCD;">//   }</span></span>
<span class="line"><span style="color:#A6ACCD;">// }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export function patchEvent(el: HTMLElement, eventName: string, nextValue: any) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // vei\uFF1Avnode event invoker</span></span>
<span class="line"><span style="color:#A6ACCD;">  let invokers = el._vei || (el.vei = {});</span></span>
<span class="line"><span style="color:#A6ACCD;">  let exist = invokers[eventName];</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (exist) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u4E4B\u524D\u7ED1\u5B9A\u8FC7\u8BE5\u4E8B\u4EF6\uFF0C\u5E76\u4E14\u6709\u66F4\u65B0\u7684\u4E8B\u4EF6\uFF0C\u90A3\u4E48\u9700\u8981\u66F4\u6539\u7ED1\u5B9A</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (nextValue) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      invokers[eventName].value = nextValue;</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u4E4B\u524D\u7ED1\u5B9A\u8FC7\u8BE5\u4E8B\u4EF6\uFF0C\u5E76\u4E14\u6CA1\u6709\u66F4\u65B0\u7684\u4E8B\u4EF6\uFF0C\u90A3\u4E48\u5C31\u9700\u8981\u79FB\u9664\u7ED1\u5B9A</span></span>
<span class="line"><span style="color:#A6ACCD;">      el.removeEventListener(eventName.slice(2).toLowerCase(), exist);</span></span>
<span class="line"><span style="color:#A6ACCD;">      invokers[eventName] = undefined;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u4E4B\u524D\u6CA1\u7ED1\u5B9A\u8FC7\u8BE5\u4E8B\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">    let event = eventName.slice(2).toLowerCase(); // onClick =&gt; click</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (nextValue) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      const invoker = (invokers[eventName] = createInvoker(nextValue));</span></span>
<span class="line"><span style="color:#A6ACCD;">      el.addEventListener(event, invoker);</span></span>
<span class="line"><span style="color:#A6ACCD;">      el._vei = invokers;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// style.ts \u5904\u7406\u6837\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">export function patchStyle(el, prevValue, nextValue) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u56E0\u4E3A\u53EF\u80FD\u4E0B\u4E00\u6B21\u66F4\u65B0\u7684\u65F6\u5019\u90FD\u6CA1\u6709style\u4E86\uFF0C\u4E5F\u5C31\u662F\u8BF4nextValue\u53EF\u80FD\u4E3Anull\uFF0C\u4E3A\u4E86\u4E0B\u9762\u4E0D\u62A5\u9519\uFF0C\u6240\u4EE5\u8981\u7ED9\u4E2A\u9ED8\u8BA4\u7684{}</span></span>
<span class="line"><span style="color:#A6ACCD;">  nextValue = nextValue || {};</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u6837\u5F0F\u9700\u8981\u6BD4\u5BF9\u5DEE\u5F02</span></span>
<span class="line"><span style="color:#A6ACCD;">  for (let key in nextValue) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    //    \u7528\u65B0\u7684\u76F4\u63A5\u8986\u76D6\u5373\u53EF</span></span>
<span class="line"><span style="color:#A6ACCD;">    el.style[key] = nextValue[key];</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u4E0D\u80FD\u76F4\u63A5\u8FD9\u4E48\u5199</span></span>
<span class="line"><span style="color:#A6ACCD;">  //   el.style = nextValue;</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u76F4\u63A5\u8FD9\u6837\u5199\u662F\u6539\u53D8\u4E0D\u4E86\u6837\u5F0F\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (prevValue) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5982\u679C\u4E4B\u524D\u7684style\u6709\u4E00\u4E2AfontSize\u4E4B\u540E\u6CA1\u6709\uFF0C\u90A3\u4E48\u9700\u8981\u5220\u6389</span></span>
<span class="line"><span style="color:#A6ACCD;">    for (let key in prevValue) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (nextValue[key] == null) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        el.style[key] = null;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br></div></div>`,11);function u(m,y,d,D,v,h){const a=c("Image");return i(),l("div",null,[t,b,C,p(a,{src:"/front-frame/vue3/sound-code/runtime-dom/1.png"}),A])}const f=e(o,[["render",u]]);export{k as __pageData,f as default};
