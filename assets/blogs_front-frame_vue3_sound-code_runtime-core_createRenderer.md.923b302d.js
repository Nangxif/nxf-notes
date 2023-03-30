import{_ as e,c as l,b as p,a as n,g as s,h as r,o as c,e as o}from"./app.f91df359.js";const g=JSON.parse('{"title":"createRenderer\u521B\u5EFA\u6E32\u67D3\u5668","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001createRenderer\u6D41\u7A0B\u56FE","slug":"\u4E00\u3001createrenderer\u6D41\u7A0B\u56FE","link":"#\u4E00\u3001createrenderer\u6D41\u7A0B\u56FE","children":[]},{"level":2,"title":"\u4E8C\u3001createRenderer\u521B\u5EFA\u6E32\u67D3\u5668\u63D0\u4F9Brender\u6E32\u67D3\u65B9\u6CD5","slug":"\u4E8C\u3001createrenderer\u521B\u5EFA\u6E32\u67D3\u5668\u63D0\u4F9Brender\u6E32\u67D3\u65B9\u6CD5","link":"#\u4E8C\u3001createrenderer\u521B\u5EFA\u6E32\u67D3\u5668\u63D0\u4F9Brender\u6E32\u67D3\u65B9\u6CD5","children":[]},{"level":2,"title":"\u4E09\u3001\u6838\u5FC3\u903B\u8F91patch","slug":"\u4E09\u3001\u6838\u5FC3\u903B\u8F91patch","link":"#\u4E09\u3001\u6838\u5FC3\u903B\u8F91patch","children":[]}],"relativePath":"blogs/front-frame/vue3/sound-code/runtime-core/createRenderer.md","lastUpdated":1680139685000}'),t={name:"blogs/front-frame/vue3/sound-code/runtime-core/createRenderer.md"},i=n("h1",{id:"createrenderer\u521B\u5EFA\u6E32\u67D3\u5668",tabindex:"-1"},[s("createRenderer\u521B\u5EFA\u6E32\u67D3\u5668 "),n("a",{class:"header-anchor",href:"#createrenderer\u521B\u5EFA\u6E32\u67D3\u5668","aria-hidden":"true"},"#")],-1),b=n("h2",{id:"\u4E00\u3001createrenderer\u6D41\u7A0B\u56FE",tabindex:"-1"},[s("\u4E00\u3001createRenderer\u6D41\u7A0B\u56FE "),n("a",{class:"header-anchor",href:"#\u4E00\u3001createrenderer\u6D41\u7A0B\u56FE","aria-hidden":"true"},"#")],-1),C=r(`<h2 id="\u4E8C\u3001createrenderer\u521B\u5EFA\u6E32\u67D3\u5668\u63D0\u4F9Brender\u6E32\u67D3\u65B9\u6CD5" tabindex="-1">\u4E8C\u3001createRenderer\u521B\u5EFA\u6E32\u67D3\u5668\u63D0\u4F9Brender\u6E32\u67D3\u65B9\u6CD5 <a class="header-anchor" href="#\u4E8C\u3001createrenderer\u521B\u5EFA\u6E32\u67D3\u5668\u63D0\u4F9Brender\u6E32\u67D3\u65B9\u6CD5" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u5728vue\u4E2D\u4F7F\u7528\u7684render\uFF0C\u5176\u5B9E\u662F\u5728runtime-dom\u91CC\u9762\u5B9E\u73B0\u7684\uFF0C\u800Cruntime-dom\u91CC\u9762\u7684render\uFF0C\u662F\u57FA\u4E8Eruntime-core\u7684createRenderer\u521B\u5EFA\u7684\u6E32\u67D3\u5668\u63D0\u4F9B\u7684render\u6E32\u67D3\u65B9\u6CD5\u5B9E\u73B0\u7684\u3002</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">export function render(vnode, container) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  createRenderer(renderOptions).render(vnode, container);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u56E0\u6B64createRenderer\u4E2D\u7684render\u63A5\u6536\u4E24\u4E2A\u53C2\u6570\uFF0C\u865A\u62DFdom\u4EE5\u53CA\u865A\u62DFdom\u6302\u8F7D\u7684\u771F\u5B9Edom\u8282\u70B9\u3002</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">export function createRenderer(renderOptions) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const render = (vnode, container) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">	// TODO</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;">  return {</span></span>
<span class="line"><span style="color:#A6ACCD;">    render,</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u7ED3\u6784\u5C31\u662F\u8FD9\u6837\u3002\u90A3\u4E48\u8FD9\u4E2Arender\u65B9\u6CD5\u7684\u6838\u5FC3\u662F\u5E72\u4EC0\u4E48\u7684\u5462\uFF1F</p><ol><li>\u5C06\u5F53\u524D\u5C06\u8981\u6E32\u67D3\u7684\u865A\u62DFdom\u6570\u636E\u4E0E\u4E0A\u4E00\u6B21\u6E32\u67D3\u7684\u865A\u62DFdom\u6570\u636E\u8FDB\u884C\u5BF9\u6BD4\uFF1B</li><li>\u5982\u679C\u5F53\u524D\u5C06\u8981\u6E32\u67D3\u7684\u865A\u62DFdom\u662F\u7A7A\u7684\uFF0C\u800C\u4E14\u4E0A\u4E00\u6B21\u6709\u5728\u5F53\u524D\u8FD9\u4E2A\u771F\u5B9Edom\u8282\u70B9\u6E32\u67D3\u8FC7\uFF0C\u90A3\u4E48\u5C31\u8981\u5378\u8F7D\u5F53\u524D\u8FD9\u4E2A\u771F\u5B9Edom\u4E0B\u7684\u6240\u6709\u5B50\u8282\u70B9-\u3010unmount\u3011\uFF1B</li><li>\u5982\u679C\u5F53\u524D\u5C06\u8981\u6E32\u67D3\u7684\u865A\u62DFdom\u4E0D\u4E3A\u7A7A\uFF0C\u800C\u4E14\u4E0A\u4E00\u6B21\u6709\u5728\u5F53\u524D\u8FD9\u4E2A\u771F\u5B9Edom\u8282\u70B9\u6E32\u67D3\u8FC7\uFF0C\u90A3\u4E48\u5C31\u8981\u6267\u884Cdiff\u7B97\u6CD5\u66F4\u65B0\u9875\u9762-\u3010patch\u3011\u3002</li></ol><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">export function createRenderer(renderOptions) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u7ED3\u6784\u5728runtime-dom\u4F20\u8FDB\u6765\u7684renderOptions\u53C2\u6570\uFF0C\u91CC\u9762\u63D0\u4F9B\u4E86\u6D4F\u89C8\u5668\u5E73\u53F0\u64CD\u4F5Cdom\u7684\u65B9\u6CD5\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">  const {</span></span>
<span class="line"><span style="color:#A6ACCD;">    insert: hostInsert,</span></span>
<span class="line"><span style="color:#A6ACCD;">    remove: hostRemove,</span></span>
<span class="line"><span style="color:#A6ACCD;">    setElementText: hostSetElementText,</span></span>
<span class="line"><span style="color:#A6ACCD;">    setText: hostSetText,</span></span>
<span class="line"><span style="color:#A6ACCD;">    querySelector: hostQuerySelector,</span></span>
<span class="line"><span style="color:#A6ACCD;">    parentNode: hostParentNode,</span></span>
<span class="line"><span style="color:#A6ACCD;">    nextSibling: hostNextSibling,</span></span>
<span class="line"><span style="color:#A6ACCD;">    createElement: hostCreateElement,</span></span>
<span class="line"><span style="color:#A6ACCD;">    createText: hostCreateText,</span></span>
<span class="line"><span style="color:#A6ACCD;">    patchProp: hostPatchProp,</span></span>
<span class="line"><span style="color:#A6ACCD;">  } = renderOptions;</span></span>
<span class="line"><span style="color:#A6ACCD;">  const unmount = (vnode) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    hostRemove(vnode.el);</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;">  const render = (vnode, container) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">	// \u6E32\u67D3\u8FC7\u7A0B\u662F\u7528\u4F60\u4F20\u5165\u7684renderOptions\u6765\u6E32\u67D3</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5982\u679C\u5F53\u524Dvnode\u662F\u7A7A\u7684\u8BDD</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (vnode == null) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u5378\u8F7D\u903B\u8F91</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (container._vnode) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // \u4E4B\u524D\u6709\u6E32\u67D3\u8FC7\uFF0C\u624D\u9700\u8981\u5378\u8F7D</span></span>
<span class="line"><span style="color:#A6ACCD;">        unmount(container._vnode);</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u6302\u8F7D\u903B\u8F91</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u8FD9\u91CC\u65E2\u6709\u521D\u59CB\u5316\u7684\u903B\u8F91\u53C8\u6709\u66F4\u65B0\u7684\u903B\u8F91</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u7B2C\u4E00\u6B21\u521D\u59CB\u5316\u7684\u65F6\u5019\uFF0C\u5C06\u865A\u62DF\u8282\u70B9\u5B58\u653E\u5230\u8282\u70B9\u7684_vnode\u5C5E\u6027\u4E0A</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u4E0B\u4E00\u6B21\u8FD9\u4E2A\u8282\u70B9\u66F4\u65B0\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4ECEcontainer\u4E0A\u62FF\u5230\u8FD9\u4E2A\u65E7\u7684\u865A\u62DF\u8282\u70B9</span></span>
<span class="line"><span style="color:#A6ACCD;">      patch(container._vnode || null, vnode, container);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5728unmount\u6216\u8005patch\u903B\u8F91\u6267\u884C\u5B8C\u6210\u4E4B\u540E\uFF0C\u8981\u5C06\u5F53\u524D\u7684\u865A\u62DF\u8282\u70B9\u653E\u5728\u771F\u5B9E\u8282\u70B9\u7684_vnode\u5C5E\u6027\u4E0A\uFF0C\u4EE5\u4FBF\u4E0B\u4E00\u6B21\u66F4\u65B0\u65F6\u6267\u884C\u540C\u6837\u7684\u5BF9\u6BD4\u64CD\u4F5C</span></span>
<span class="line"><span style="color:#A6ACCD;">    container._vnode = vnode;</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;">  return {</span></span>
<span class="line"><span style="color:#A6ACCD;">    render,</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><h2 id="\u4E09\u3001\u6838\u5FC3\u903B\u8F91patch" tabindex="-1">\u4E09\u3001\u6838\u5FC3\u903B\u8F91patch <a class="header-anchor" href="#\u4E09\u3001\u6838\u5FC3\u903B\u8F91patch" aria-hidden="true">#</a></h2><p>patch\u65B9\u6CD5\u5176\u5B9E\u63A5\u6536\u56DB\u4E2A\u4F20\u53C2</p><ol><li>n1-\u4E0A\u4E00\u6B21\u6E32\u67D3\u7684\u865A\u62DFdom\u6570\u636E</li><li>n2-\u5F53\u524D\u5373\u5C06\u6E32\u67D3\u7684\u865A\u62DFdom\u6570\u636E</li><li>container-\u8981\u6302\u8F7D\u7684\u771F\u5B9E\u8282\u70B9</li><li>anchor-\u5982\u679C\u6709\u8981\u521B\u5EFA\u8282\u70B9\uFF0C\u90A3\u4E48\u9700\u8981\u4E00\u4E2A\u53C2\u7167\u7684\u8282\u70B9\uFF08container\u7684\u5B50\u8282\u70B9\uFF09</li></ol><p>patch\u51FD\u6570\u5176\u5B9E\u8FD8\u4E0D\u662F\u771F\u6B63\u7684\u6267\u884Cdiff\u64CD\u4F5C\u7684\uFF0C\u7531\u4E8E\u6587\u672C\uFF0CFragment\uFF0C\u5143\u7D20\u8282\u70B9\u548C\u51FD\u6570\u5F0F\u7EC4\u4EF6\u7B49\u7684diff\u6D41\u7A0B\u4E0D\u4E00\u6837\uFF0C\u6240\u4EE5patch\u5176\u5B9E\u662F\u4E00\u4E2A\u5206\u6D41\u7684\u51FD\u6570\uFF0C\u901A\u8FC7\u5224\u65AD\u5F53\u524D\u8981\u6E32\u67D3\u7684\u865A\u62DFdom\u8282\u70B9\u7684\u7C7B\u578B\uFF0C\u5C06\u6587\u672C\uFF0CFragment\uFF0C\u5143\u7D20\u8282\u70B9\u548C\u51FD\u6570\u5F0F\u7EC4\u4EF6\u7B49\u5F62\u5F0F\u7684\u8282\u70B9\u5206\u522B\u6267\u884C\u4ED6\u4EEC\u5BF9\u5E94\u7684diff\u6D41\u7A0B\u3002</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const patch = (n1, n2, container, anchor = null) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u6838\u5FC3patch\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (n1 === n2) return;</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u4E4B\u6240\u4EE5\u628A\u66F4\u65B0\u7684\u7B2C\u4E00\u6B65\u653E\u5728\u8FD9\u91CC\uFF0C\u662F\u56E0\u4E3A\u5982\u679C\u662F\u4E00\u4E2A\u8282\u70B9\u4ECE\u5143\u7D20\u53D8\u4E3A\u6587\u672C</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u6216\u8005\u4E00\u4E2A\u8282\u70B9\u4ECE\u6587\u672C\u53D8\u4E3A\u5143\u7D20\uFF0C\u90A3\u4E48\u5C31\u6CA1\u5FC5\u8981\u8D70\u4E0B\u9762\u7684process\uFF0C\u56E0\u4E3A\u6D41\u7A0B\u90FD\u662F\u4E00\u6837\u7684\uFF0C\u9700\u8981\u5220\u9664\u540E\u91CD\u65B0\u63D2\u5165</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u4F46\u662F\u6211\u4EEC\u4E0D\u80FD\u76F4\u63A5\u901A\u8FC7n1===n2\u53BB\u5224\u65AD\u4E24\u4E2A\u8282\u70B9\u662F\u5426\u4E00\u81F4\uFF0C\u56E0\u4E3A\u4E24\u4E2A\u76F8\u540C\u7684\u5BF9\u8C61\u4E5F\u662F\u4E0D\u4F1A\u76F8\u7B49\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    if (n1 &amp;&amp; !isSameVnode(n1, n2)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u5982\u679C\u65E7\u7684\u865A\u62DF\u8282\u70B9\u5B58\u5728\uFF0C\u5E76\u4E14\u65E7\u7684\u865A\u62DF\u8282\u70B9\u548C\u65B0\u7684\u865A\u62DF\u8282\u70B9\u7684type\uFF08\u8FD9\u91CC\u7684type\u662F\u6307&#39;div&#39;,&#39;span&#39;,Text,Fragment\u7B49\uFF09\u4EE5\u53CAkey\u4E0D\u4E00\u6837\uFF0C\u90A3\u4E48\u5C31\u8981\u5378\u8F7D\u6389\u8FD9\u4E2A\u65E7\u7684\u865A\u62DF\u8282\u70B9\uFF0C\u5E76\u4E14\u5C06\u65E7\u7684\u865A\u62DF\u8282\u70B9\u7F6E\u4E3Anull</span></span>
<span class="line"><span style="color:#A6ACCD;">      unmount(n1); //\u5220\u9664\u8001\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u8FD9\u4E00\u6B65\u5F88\u5999\uFF0C\u56E0\u4E3An1\u8BBE\u7F6E\u4E3Anull\u4E86\uFF0C\u4ED6\u53BB\u8D70\u4E0B\u9762\u7684process\u903B\u8F91\u7684\u8BDD\uFF0C\u5C31\u4F1A\u81EA\u52A8\u8D70\u91CC\u9762\u7684\u521B\u5EFA\u903B\u8F91</span></span>
<span class="line"><span style="color:#A6ACCD;">      n1 = null;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    const { type, shapeFlag } = n2;</span></span>
<span class="line"><span style="color:#A6ACCD;">    switch (type) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      case Text:</span></span>
<span class="line"><span style="color:#A6ACCD;">        processText(n1, n2, container);</span></span>
<span class="line"><span style="color:#A6ACCD;">        break;</span></span>
<span class="line"><span style="color:#A6ACCD;">      case Fragment: //\u65E0\u7528\u6807\u7B7E</span></span>
<span class="line"><span style="color:#A6ACCD;">        processFragment(n1, n2, container);</span></span>
<span class="line"><span style="color:#A6ACCD;">        break;</span></span>
<span class="line"><span style="color:#A6ACCD;">      default:</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (shapeFlag &amp; ShapeFlags.ELEMENT) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          // \u521D\u6B21\u6E32\u67D3</span></span>
<span class="line"><span style="color:#A6ACCD;">          /**</span></span>
<span class="line"><span style="color:#A6ACCD;">       * render(</span></span>
<span class="line"><span style="color:#A6ACCD;">        h(&#39;h1&#39;, { style: { color: &#39;red&#39; }, onClick: () =&gt; alert(1) }, [</span></span>
<span class="line"><span style="color:#A6ACCD;">          h(&#39;span&#39;, &#39;world&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">          &#39;123&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        ]),</span></span>
<span class="line"><span style="color:#A6ACCD;">        app</span></span>
<span class="line"><span style="color:#A6ACCD;">      );</span></span>
<span class="line"><span style="color:#A6ACCD;">       * \u50CF\u4E0A\u9762\u90A3\u79CD\u60C5\u51B5\uFF0C123\u662F\u6E32\u67D3\u4E0D\u51FA\u6765\u7684\uFF0C\u56E0\u4E3A123\u4F1A\u8D70\u5230\u4E0B\u9762\u7684mountElement\u7136\u540E\u4F20\u7ED9n2\uFF0C</span></span>
<span class="line"><span style="color:#A6ACCD;">      \u56E0\u4E3A123\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u5B57\u7B26\u4E32\u91CC\u9762\u6CA1\u6709type\u5C5E\u6027\uFF0C\u6240\u4EE5\u4F1A\u88AB\u521B\u5EFA\u4E00\u4E2Aundefined\u8282\u70B9</span></span>
<span class="line"><span style="color:#A6ACCD;">       * */</span></span>
<span class="line"><span style="color:#A6ACCD;">          // \u540E\u7EED\u8FD8\u6709\u7EC4\u4EF6\u7684\u521D\u6B21\u6E32\u67D3\uFF0C\u76EE\u524D\u662F\u5143\u7D20\u7684\u521D\u59CB\u5316\u6E32\u67D3</span></span>
<span class="line"><span style="color:#A6ACCD;">          processElement(n1, n2, container, anchor);</span></span>
<span class="line"><span style="color:#A6ACCD;">        } else if (shapeFlag &amp; ShapeFlags.COMPONENT) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          // \u51FD\u6570\u5F0F\u7EC4\u4EF6\u548C\u72B6\u6001\u7EC4\u4EF6\u90FD\u8D70\u8FD9\u91CC</span></span>
<span class="line"><span style="color:#A6ACCD;">          processComponent(n1, n2, container, anchor);</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div><p>\u63A5\u4E0B\u6765\u5C31\u662F\u5404\u79CD\u7C7B\u578B\u7684diff\u7B97\u6CD5\uFF0C\u6211\u4EEC\u4E0B\u4E00\u8282\u8BB2\u89E3\u3002</p>`,14);function A(d,m,u,y,D,h){const a=o("Image");return c(),l("div",null,[i,b,p(a,{src:"/front-frame/vue3/sound-code/runtime-core/createRenderer/1.png"},null,8,["src"]),C])}const f=e(t,[["render",A]]);export{g as __pageData,f as default};