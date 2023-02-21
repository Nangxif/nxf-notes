import{_ as s,c as n,o as a,h as l}from"./app.f40c8d04.js";const m=JSON.parse('{"title":"\u6A21\u5F0F\u5341\u516B\u2014\u2014\u6A21\u677F\u65B9\u6CD5\u6A21\u5F0F","description":"","frontmatter":{},"headers":[],"relativePath":"blogs/js-ts/js/design-mode/mubanfangfamoshi.md","lastUpdated":1676908288000}'),p={name:"blogs/js-ts/js/design-mode/mubanfangfamoshi.md"},e=l(`<h1 id="\u6A21\u5F0F\u5341\u516B\u2014\u2014\u6A21\u677F\u65B9\u6CD5\u6A21\u5F0F" tabindex="-1">\u6A21\u5F0F\u5341\u516B\u2014\u2014\u6A21\u677F\u65B9\u6CD5\u6A21\u5F0F <a class="header-anchor" href="#\u6A21\u5F0F\u5341\u516B\u2014\u2014\u6A21\u677F\u65B9\u6CD5\u6A21\u5F0F" aria-hidden="true">#</a></h1><blockquote><p>\u6A21\u677F\u65B9\u6CD5\u6A21\u5F0F\u7531\u4E24\u90E8\u5206\u7EC4\u6210\uFF0C\u7B2C\u4E00\u90E8\u5206\u662F\u62BD\u8C61\u7236\u7C7B\uFF0C\u7B2C\u4E8C\u90E8\u5206\u662F\u5177\u4F53\u7684\u5B9E\u73B0\u5B50\u7C7B\u3002\u901A\u5E38\u5728\u62BD\u8C61\u7236\u7C7B\u4E2D\u5C01\u88C5\u4E86\u5B50\u7C7B\u7684\u7B97\u6CD5\u6846\u67B6\uFF0C\u5305\u62EC\u5B9E\u73B0\u4E00\u4E9B\u516C\u5171\u65B9\u6CD5\u4EE5\u53CA\u5C01\u88C5\u5B50\u7C7B\u4E2D\u6240\u6709\u65B9\u6CD5\u7684\u6267\u884C\u987A\u5E8F\u3002\u5B50\u7C7B\u901A\u8FC7\u7EE7\u627F\u8FD9\u4E2A\u62BD\u8C61\u7C7B\uFF0C\u4E5F\u7EE9\u627F\u4E86\u6574\u4E2A\u7B97\u6CD5\u7ED3\u6784\uFF0C\u5E76\u4E14\u53EF\u4EE5\u9009\u62E9\u91CD\u5199\u7236\u7C7B\u7684\u65B9\u6CD5\u3002</p></blockquote><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">var Container = function(param) {</span></span>
<span class="line"><span style="color:#A6ACCD;">	var render = function(list) {</span></span>
<span class="line"><span style="color:#A6ACCD;">		conosle.log(&quot;render-list&quot;, list);</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">	var getData = param.getData || function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">		throw new Error(&quot;\u5FC5\u987B\u4F20\u9012getData\u65B9\u6CD5&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">	var F = function() {}; //\u5BF9\u8C61 \u7C7B</span></span>
<span class="line"><span style="color:#A6ACCD;">	// \u5C01\u88C5\u5B50\u7C7B\u4E2D\u6240\u6709\u65B9\u6CD5\u7684\u6267\u884C\u987A\u5E8F</span></span>
<span class="line"><span style="color:#A6ACCD;">	F.prototype.init = async function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">		let list = await getData();</span></span>
<span class="line"><span style="color:#A6ACCD;">		render(list);</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">	return F;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">var MyClass1 = Container({</span></span>
<span class="line"><span style="color:#A6ACCD;">	getData() {</span></span>
<span class="line"><span style="color:#A6ACCD;">		console.log(&quot;\u83B7\u53D6\u6570\u636E&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">		return [1,2,3];</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">new MyClass1().init();</span></span>
<span class="line"><span style="color:#A6ACCD;">var MyClass2 = Container({</span></span>
<span class="line"><span style="color:#A6ACCD;">	getData() {</span></span>
<span class="line"><span style="color:#A6ACCD;">		console.log(&quot;\u83B7\u53D6\u6570\u636E&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">		return [4,5,6];</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">new MyClass2().init();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div>`,3),r=[e];function t(c,o,i,b,C,A){return a(),n("div",null,r)}const D=s(p,[["render",t]]);export{m as __pageData,D as default};
