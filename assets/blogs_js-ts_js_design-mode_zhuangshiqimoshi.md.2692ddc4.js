import{_ as s,c as n,o as a,h as l}from"./app.f91df359.js";const m=JSON.parse('{"title":"\u6A21\u5F0F\u4E03\u2014\u2014\u88C5\u9970\u5668\u6A21\u5F0F","description":"","frontmatter":{},"headers":[],"relativePath":"blogs/js-ts/js/design-mode/zhuangshiqimoshi.md","lastUpdated":1679378646000}'),p={name:"blogs/js-ts/js/design-mode/zhuangshiqimoshi.md"},e=l(`<h1 id="\u6A21\u5F0F\u4E03\u2014\u2014\u88C5\u9970\u5668\u6A21\u5F0F" tabindex="-1">\u6A21\u5F0F\u4E03\u2014\u2014\u88C5\u9970\u5668\u6A21\u5F0F <a class="header-anchor" href="#\u6A21\u5F0F\u4E03\u2014\u2014\u88C5\u9970\u5668\u6A21\u5F0F" aria-hidden="true">#</a></h1><p>\u88C5\u9970\u5668\u6A21\u5F0F\u80FD\u591F\u5F88\u597D\u7684\u5BF9\u5DF2\u6709\u7684\u529F\u80FD\u8FDB\u884C\u62D3\u5C55\uFF0C\u8FD9\u6837\u4E0D\u4F1A\u66F4\u6539\u539F\u6709\u7684\u4EE3\u7801\uFF0C\u5BF9\u5176\u4ED6\u7684\u4E1A\u52A1\u4EA7\u751F\u5F71\u54CD\uFF0C\u8FD9\u65B9\u4FBF\u6211\u4EEC\u5728\u8F83\u5C11\u7684\u6539\u52A8\u4E0B\u5BF9\u8F6F\u4EF6\u7684\u529F\u80FD\u8FDB\u884C\u62D3\u5C55\u3002</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">Function.prototype.before = function(beforeFn) {</span></span>
<span class="line"><span style="color:#A6ACCD;">	var _this = this;</span></span>
<span class="line"><span style="color:#A6ACCD;">	return function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">		beforeFn.apply(this, arguments);</span></span>
<span class="line"><span style="color:#A6ACCD;">		return _this.apply(this, arguments);</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">Function.prototype.after = function(afterFn) {</span></span>
<span class="line"><span style="color:#A6ACCD;">	var _this = this;</span></span>
<span class="line"><span style="color:#A6ACCD;">	return function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">		var ret = _this.apply(this, arguments);</span></span>
<span class="line"><span style="color:#A6ACCD;">		afterFn.apply(this, arguments);</span></span>
<span class="line"><span style="color:#A6ACCD;">		return ret;</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function test() {</span></span>
<span class="line"><span style="color:#A6ACCD;">	console.log(&quot;11111&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">var test1 = test.before(()=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">	console.log(&quot;00000&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">}).after(()=&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">	console.log(&quot;22222&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>\u8FD9\u79CD\u6A21\u5F0F\u6709\u5F88\u591A\u4F7F\u7528\u573A\u666F\uFF0C\u6BD4\u5982ajax\u5728\u8BF7\u6C42\u4E4B\u524D\uFF0C\u6211\u4EEC\u8981\u4FEE\u6539header\u91CC\u9762\u7684\u53C2\u6570\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u5728ajax\u8BF7\u6C42\u4E4B\u524D\u6CE8\u5165\u8FD9\u79CD\u903B\u8F91\uFF0C\u518D\u6BD4\u5982\u6211\u4EEC\u8FDB\u5165\u4E00\u4E2A\u7F51\u7AD9\u8981\u8FDB\u884C\u6570\u636E\u7EDF\u8BA1\u7684\u65F6\u5019\uFF0C\u70B9\u51FB\u67D0\u4E2A\u6309\u94AE\u8981\u8FDB\u884C\u57CB\u70B9\u7EDF\u8BA1\uFF0C\u90A3\u4E48\u4E5F\u53EF\u4EE5\u901A\u8FC7\u8FD9\u79CD\u8BBE\u8BA1\u6A21\u5F0F\u6CE8\u5165\u903B\u8F91\u3002</p><p>\u6211\u4EEC\u8FD9\u91CC\u4E3E\u4E2A\u4F8B\u5B50\u6765\u4F7F\u7528\u8FD9\u79CD\u6A21\u5F0F</p><p>\u8FD9\u91CC\u6211\u4EEC\u5B9E\u73B0\u70B9\u51FB\u67D0\u4E2A\u6309\u94AE\u4E0A\u4F20\u57CB\u70B9\u6570\u636E\u3002</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function log() {</span></span>
<span class="line"><span style="color:#A6ACCD;">	console.log(&quot;\u4E0A\u4F20pv,uv\u6570\u636E&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">	// \u5199\u5728\u8FD9\u91CC\u4E5F\u53EF\u4EE5\u5B9E\u73B0\u4E00\u6837\u7684\u6548\u679C\uFF0C\u4F46\u662F\u6BD5\u7ADFrender\u903B\u8F91\u4E0D\u5C5E\u4E8Elog</span></span>
<span class="line"><span style="color:#A6ACCD;">	// render();</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">function render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">	console.log(&quot;\u9875\u9762\u5904\u7406\u903B\u8F91&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">render = render.before(log);</span></span>
<span class="line"><span style="color:#A6ACCD;">filmbtn.onclick = funciton() {</span></span>
<span class="line"><span style="color:#A6ACCD;">	render();</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,7),r=[e];function o(c,t,i,b,u,A){return a(),n("div",null,r)}const y=s(p,[["render",o]]);export{m as __pageData,y as default};
