import{_ as s,c as n,o as a,h as e}from"./app.15c3eca2.js";const m=JSON.parse('{"title":"\u5B9E\u73B0instanceof\u64CD\u4F5C\u7B26","description":"","frontmatter":{},"headers":[],"relativePath":"blogs/js-ts/js/js-api/instanceof.md","lastUpdated":1720104828000}'),p={name:"blogs/js-ts/js/js-api/instanceof.md"},l=e(`<h1 id="\u5B9E\u73B0instanceof\u64CD\u4F5C\u7B26" tabindex="-1">\u5B9E\u73B0instanceof\u64CD\u4F5C\u7B26 <a class="header-anchor" href="#\u5B9E\u73B0instanceof\u64CD\u4F5C\u7B26" aria-hidden="true">#</a></h1><p>\u7528\u4E8E\u68C0\u6D4B\u6784\u9020\u51FD\u6570\u7684prototype\u5C5E\u6027\u662F\u5426\u51FA\u73B0\u5728\u67D0\u4E2A\u5B9E\u4F8B\u5BF9\u8C61\u7684\u539F\u578B\u94FE\u4E0A</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function Person(name) {</span></span>
<span class="line"><span style="color:#A6ACCD;">	this.name = name;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">const child = new Person(&quot;\u674E\u56DB&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(child instanceof Person);</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(child instanceof Object);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function myInstanceof(left, right) {</span></span>
<span class="line"><span style="color:#A6ACCD;">	// \u83B7\u53D6\u5BF9\u8C61\u539F\u578B</span></span>
<span class="line"><span style="color:#A6ACCD;">	let proto = Object.getPrototypeOf(left);</span></span>
<span class="line"><span style="color:#A6ACCD;">	// \u83B7\u53D6\u6784\u9020\u51FD\u6570\u7684prototype\u5C5E\u6027</span></span>
<span class="line"><span style="color:#A6ACCD;">	const prototype = right.prototype;</span></span>
<span class="line"><span style="color:#A6ACCD;">	while(true) {</span></span>
<span class="line"><span style="color:#A6ACCD;">		if(!proto) return false;</span></span>
<span class="line"><span style="color:#A6ACCD;">		if(proto === prototype) return true;</span></span>
<span class="line"><span style="color:#A6ACCD;">		proto = Object.getPrototypeOf(proto);</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div>`,3),t=[l];function o(r,c,i,b,A,C){return a(),n("div",null,t)}const d=s(p,[["render",o]]);export{m as __pageData,d as default};
