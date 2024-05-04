import{_ as s,c as n,o as a,h as l}from"./app.ccee9938.js";const m=JSON.parse('{"title":"\u5B9E\u73B0new\u64CD\u4F5C\u7B26","description":"","frontmatter":{},"headers":[],"relativePath":"blogs/js-ts/js/js-api/new.md","lastUpdated":1714836224000}'),e={name:"blogs/js-ts/js/js-api/new.md"},p=l(`<h1 id="\u5B9E\u73B0new\u64CD\u4F5C\u7B26" tabindex="-1">\u5B9E\u73B0new\u64CD\u4F5C\u7B26 <a class="header-anchor" href="#\u5B9E\u73B0new\u64CD\u4F5C\u7B26" aria-hidden="true">#</a></h1><p>\u5728\u8C03\u7528new\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u6709\u4EE5\u4E0B\u56DB\u4E2A\u6B65\u9AA4\uFF1A</p><ol><li>\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u7A7A\u5BF9\u8C61</li><li>\u8BBE\u7F6E\u539F\u578B\uFF0C\u5C06\u5BF9\u8C61\u7684\u539F\u578B\u8BBE\u7F6E\u4E3A\u6784\u9020\u51FD\u6570\u7684prototype\u5BF9\u8C61</li><li>\u8BA9\u51FD\u6570\u7684this\u6307\u5411\u8FD9\u4E2A\u5BF9\u8C61\uFF0C\u6267\u884C\u6784\u9020\u51FD\u6570\u7684\u4EE3\u7801\uFF08\u4E3A\u8FD9\u4E2A\u65B0\u5BF9\u8C61\u6DFB\u52A0\u5C5E\u6027\uFF09</li><li>\u5224\u65AD\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u7C7B\u578B\uFF0C\u5982\u679C\u662F\u503C\u7C7B\u578B\uFF0C\u90A3\u4E48\u5C31\u8FD4\u56DE\u521B\u5EFA\u7684\u5BF9\u8C61\u3002\u5982\u679C\u662F\u5F15\u7528\u7C7B\u578B\uFF0C\u5C31\u8FD4\u56DE\u8FD9\u4E2A\u5F15\u7528\u7C7B\u578B\u7684\u5BF9\u8C61</li></ol><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// \u5148\u770B\u770B\u4E4B\u524D\u7684new\u662F\u600E\u4E48\u4F7F\u7528\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">function Person(name, age) {</span></span>
<span class="line"><span style="color:#A6ACCD;">	this.name = name;</span></span>
<span class="line"><span style="color:#A6ACCD;">	this.age = age;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">new Person(&quot;\u674E\u56DB&quot;, 18)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u5B9E\u73B0</span></span>
<span class="line"><span style="color:#A6ACCD;">function myNew(constructor, ...args) {</span></span>
<span class="line"><span style="color:#A6ACCD;">	// \u65B0\u5EFA\u7A7A\u5BF9\u8C61\uFF0C\u5BF9\u8C61\u539F\u578B\u4E3A\u6784\u9020\u51FD\u6570\u7684prototype\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#A6ACCD;">	const obj = Object.create(constructor.prototype);</span></span>
<span class="line"><span style="color:#A6ACCD;">	// \u5C06this\u6307\u5411\u65B0\u5EFA\u5BF9\u8C61\uFF0C\u5E76\u6267\u884C\u6784\u9020\u51FD\u6570\u91CC\u9762\u7684\u521D\u59CB\u5316\u64CD\u4F5C\uFF0C\u7ED9ob j\u8D4B\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">	const result = constructor.apply(obj, args);</span></span>
<span class="line"><span style="color:#A6ACCD;">	// \u5224\u65AD\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u7C7B\u578B</span></span>
<span class="line"><span style="color:#A6ACCD;">	if (result &amp;&amp; (typeof result === &quot;object&quot; || typeof result === &#39;function&#39;)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">		return result;</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">	return obj;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u4F7F\u7528</span></span>
<span class="line"><span style="color:#A6ACCD;">myNew(Object);</span></span>
<span class="line"><span style="color:#A6ACCD;">myNew(Function);</span></span>
<span class="line"><span style="color:#A6ACCD;">myNew(String);</span></span>
<span class="line"><span style="color:#A6ACCD;">myNew(Person, &quot;\u674E\u56DB&quot;, 18);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div>`,4),r=[p];function c(t,o,i,b,u,A){return a(),n("div",null,r)}const y=s(e,[["render",c]]);export{m as __pageData,y as default};
