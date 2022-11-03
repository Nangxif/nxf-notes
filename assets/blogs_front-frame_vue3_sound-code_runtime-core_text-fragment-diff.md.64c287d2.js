import{_ as s,c as n,o as e,h as a}from"./app.d29683ac.js";const u=JSON.parse('{"title":"\u6587\u672C\u548C\u65E0\u7528\u6807\u7B7E(Fragment)\u7684diff\u7B97\u6CD5","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u6587\u672C\u7C7B\u578B\u7684diff-processText","slug":"\u4E00\u3001\u6587\u672C\u7C7B\u578B\u7684diff-processtext","link":"#\u4E00\u3001\u6587\u672C\u7C7B\u578B\u7684diff-processtext","children":[]},{"level":2,"title":"\u4E8C\u3001\u65E0\u7528\u6807\u7B7E(Fragment)\u7684diff-processFragment","slug":"\u4E8C\u3001\u65E0\u7528\u6807\u7B7E-fragment-\u7684diff-processfragment","link":"#\u4E8C\u3001\u65E0\u7528\u6807\u7B7E-fragment-\u7684diff-processfragment","children":[]}],"relativePath":"blogs/front-frame/vue3/sound-code/runtime-core/text-fragment-diff.md","lastUpdated":1667487672000}'),l={name:"blogs/front-frame/vue3/sound-code/runtime-core/text-fragment-diff.md"},p=a(`<h1 id="\u6587\u672C\u548C\u65E0\u7528\u6807\u7B7E-fragment-\u7684diff\u7B97\u6CD5" tabindex="-1">\u6587\u672C\u548C\u65E0\u7528\u6807\u7B7E(Fragment)\u7684diff\u7B97\u6CD5 <a class="header-anchor" href="#\u6587\u672C\u548C\u65E0\u7528\u6807\u7B7E-fragment-\u7684diff\u7B97\u6CD5" aria-hidden="true">#</a></h1><p>\u4E0A\u4E00\u8282\u3010createRenderer\u521B\u5EFA\u6E32\u67D3\u5668\u3011\u7684\u672B\u5C3E\u6211\u4EEC\u63D0\u4F9B\u4E86patch\u7684\u6E90\u7801\u3002\u8FD9\u6BB5\u6E90\u7801\u4E2D\u3002\u4F1A\u9996\u5148\u901A\u8FC7switch\u5C06\u65B0\u865A\u62DF\u8282\u70B9\u662F\u6587\u672C\u7C7B\u578B\u7684\u548C\u65E0\u7528\u6807\u7B7E\u7684\u90FD\u5355\u72EC\u62BD\u79BB\u51FA\u6765\u5904\u7406\u3002</p><h2 id="\u4E00\u3001\u6587\u672C\u7C7B\u578B\u7684diff-processtext" tabindex="-1">\u4E00\u3001\u6587\u672C\u7C7B\u578B\u7684diff-processText <a class="header-anchor" href="#\u4E00\u3001\u6587\u672C\u7C7B\u578B\u7684diff-processtext" aria-hidden="true">#</a></h2><p>\u5982\u679C\u65B0\u7684\u865A\u62DF\u8282\u70B9\u662F\u6587\u672C\u7C7B\u578B\u3002\u90A3\u4E48\u53EF\u80FD\u4F1A\u51FA\u73B0\u4E24\u79CD\u60C5\u51B5</p><ol><li>\u65E7\u7684\u865A\u62DF\u8282\u70B9\u4E0D\u5B58\u5728-\u90A3\u4E48\u610F\u5473\u7740\u8981\u521B\u5EFA</li><li>\u65E7\u7684\u865A\u62DF\u8282\u70B9\u5B58\u5728\uFF0C\u5E76\u4E14\u65B0\u7684\u865A\u62DF\u8282\u70B9\u7684\u5B50\u8282\u70B9\uFF08\u4E5F\u5C31\u662F\u6587\u672C\uFF09\u4E0E\u65E7\u7684\u865A\u62DF\u8282\u70B9\u7684\u5B50\u8282\u70B9\u4E0D\u4E00\u6837\uFF08\u4E5F\u5C31\u662F\u6587\u672C\u5185\u5BB9\u4E0D\u4E00\u6837\uFF09-\u90A3\u4E48\u610F\u5473\u7740\u8981\u66F4\u65B0</li></ol><p>\u5982\u679C\u4EE3\u7801\u6267\u884C\u5230processText\u51FD\u6570\u4E86\uFF0C\u90A3\u4E48\u65B0\u7684\u865A\u62DF\u8282\u70B9\u4E00\u5B9A\u662F\u5B58\u5728\u7684\uFF0C\u56E0\u4E3A\u5728render\u51FD\u6570\u91CC\u9762\uFF0C\u65B0\u7684\u865A\u62DF\u8282\u70B9\u5982\u679C\u4E3Anull\u7684\u8BDD\uFF0C\u6709\u53EF\u80FD\u4F1A\u8FDB\u884C\u5378\u8F7D\u64CD\u4F5C\uFF0C\u5426\u5219\u624D\u4F1A\u8D70\u5230patch\u903B\u8F91\uFF0C\u8FDB\u800C\u6267\u884CprocessText\u6D41\u7A0B\u3002</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const processText = (n1, n2, container) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (n1 === null) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u521B\u5EFA</span></span>
<span class="line"><span style="color:#A6ACCD;">      /**</span></span>
<span class="line"><span style="color:#A6ACCD;">       * n2</span></span>
<span class="line"><span style="color:#A6ACCD;">       * {type: Symbol(Text), props: null, children: &#39;123&#39;, el: null, key: undefined,\xA0\u2026}children: &quot;123&quot;el: textkey: undefinedprops: nullshapeFlag: 8type: Symbol(Text)__v_isVnode: true[[Prototype]]: Object</span></span>
<span class="line"><span style="color:#A6ACCD;">       * n2.children</span></span>
<span class="line"><span style="color:#A6ACCD;">       * &#39;123&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">       * */</span></span>
<span class="line"><span style="color:#A6ACCD;">      hostInsert((n2.el = hostCreateText(n2.children)), container);</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u6587\u672C\u66F4\u65B0\u6D41\u7A0B</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u6587\u672C\u7684\u5185\u5BB9\u53D8\u5316\u4E86\uFF0C\u6211\u53EF\u4EE5\u590D\u7528\u8001\u7684\u8282\u70B9</span></span>
<span class="line"><span style="color:#A6ACCD;">      const el = (n2.el = n1.el); // \u8FD9\u91CC\u7ED9\u65B0\u7684\u865A\u62DF\u8282\u70B9\u7684el\u5C5E\u6027\u8D4B\u503C\u4E0A\u771F\u5B9E\u7684dom\u8282\u70B9</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (n1.children !== n2.children) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        hostSetText(el, n2.children);</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="\u4E8C\u3001\u65E0\u7528\u6807\u7B7E-fragment-\u7684diff-processfragment" tabindex="-1">\u4E8C\u3001\u65E0\u7528\u6807\u7B7E(Fragment)\u7684diff-processFragment <a class="header-anchor" href="#\u4E8C\u3001\u65E0\u7528\u6807\u7B7E-fragment-\u7684diff-processfragment" aria-hidden="true">#</a></h2><p>\u5728\u8FD9\u4E4B\u524D\u6211\u4EEC\u5F97\u5148\u4E86\u89E3Fragment\u6807\u7B7E\u662F\u5E72\u561B\u7528\u7684\u3002</p><p>Fragment\u6807\u7B7E\u662F\u7528\u6765\u5305\u88F9\u4E00\u5806\u5176\u4ED6\u7684\u8282\u70B9\u7684\uFF0C\u5728\u6E32\u67D3\u7684\u65F6\u5019Fragment\u6807\u7B7E\u5728\u8282\u70B9\u4E0A\u5E76\u4E0D\u4F1A\u6709\u4F53\u73B0\u3002</p>`,10),r=[p];function t(c,i,o,d,f,m){return e(),n("div",null,r)}const A=s(l,[["render",t]]);export{u as __pageData,A as default};
