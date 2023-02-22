import{_ as s,c as n,o as a,h as l}from"./app.b58501a6.js";const m=JSON.parse('{"title":"\u6A21\u5F0F\u516D\u2014\u2014\u5355\u4F8B\u6A21\u5F0F","description":"","frontmatter":{},"headers":[],"relativePath":"blogs/js-ts/js/design-mode/danlimoshi.md","lastUpdated":1677037297000}'),p={name:"blogs/js-ts/js/design-mode/danlimoshi.md"},e=l(`<h1 id="\u6A21\u5F0F\u516D\u2014\u2014\u5355\u4F8B\u6A21\u5F0F" tabindex="-1">\u6A21\u5F0F\u516D\u2014\u2014\u5355\u4F8B\u6A21\u5F0F <a class="header-anchor" href="#\u6A21\u5F0F\u516D\u2014\u2014\u5355\u4F8B\u6A21\u5F0F" aria-hidden="true">#</a></h1><ol><li>\u4FDD\u8BC1\u4E00\u4E2A\u7C7B\u4EC5\u6709\u4E00\u4E2A\u5B9E\u4F8B\uFF0C\u5E76\u63D0\u4F9B\u4E00\u4E2A\u8BBF\u95EE\u5B83\u7684\u5168\u5C40\u8BBF\u95EE\u70B9\uFF08\u5168\u5C40\u53D8\u91CF\u5BB9\u6613\u9020\u6210\u547D\u540D\u7A7A\u95F4\u7684\u6C61\u67D3\uFF0C\u800C\u4E14\u4E0D\u5C0F\u5FC3\u53C8\u4F1A\u88AB\u8986\u76D6\u6389\uFF09\uFF1B</li><li>\u4E3B\u8981\u89E3\u51B3\u4E00\u4E2A\u5168\u5C40\u4F7F\u7528\u7684\u7C7B\u9891\u7E41\u5730\u521B\u5EFA\u548C\u9500\u6BC1\uFF0C\u5360\u7528\u5185\u5B58 \u3002</li></ol><p><strong>ES5\u5199\u6CD5</strong></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">var Singleton = (function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">	var instance;</span></span>
<span class="line"><span style="color:#A6ACCD;">	function User(name, age) {</span></span>
<span class="line"><span style="color:#A6ACCD;">		this.name = name;</span></span>
<span class="line"><span style="color:#A6ACCD;">		this.age = age;</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">	return function(name, age) {</span></span>
<span class="line"><span style="color:#A6ACCD;">		if(!instance) {</span></span>
<span class="line"><span style="color:#A6ACCD;">			// \u521B\u5EFA\u5B9E\u4F8B</span></span>
<span class="line"><span style="color:#A6ACCD;">			instance = new User(name, age);</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;">		return instance;</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">})()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">var a = Singleton(&quot;nangxi1&quot;, 100);</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u540E\u9762\u65E0\u8BBA\u4F60\u518D\u600E\u4E48\u6539\u600E\u4E48\u4F20\uFF0C\u8FD4\u56DE\u7684\u5B9E\u4F8B\u90FD\u662F\u540C\u4E00\u4E2Aa === b</span></span>
<span class="line"><span style="color:#A6ACCD;">var b = Singleton(&quot;nangxi2&quot;, 100);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p><strong>ES6\u5199\u6CD5</strong></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class Singleton {</span></span>
<span class="line"><span style="color:#A6ACCD;">	constructor(name, age) {</span></span>
<span class="line"><span style="color:#A6ACCD;">		if(!Singleton.instance) {</span></span>
<span class="line"><span style="color:#A6ACCD;">			this.name = name;</span></span>
<span class="line"><span style="color:#A6ACCD;">			this.age = age;</span></span>
<span class="line"><span style="color:#A6ACCD;">			Singleton.instance = this;</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;">		return Singleton.instance;</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">	// \u8FD9\u91CC\u53EF\u4EE5\u5199a\u65B9\u6CD5b\u65B9\u6CD5\uFF0C\u4F46\u662Fnew\u51FA\u6765\u90FD\u53EA\u6709\u4E00\u4E2A\u5B9E\u4F8B</span></span>
<span class="line"><span style="color:#A6ACCD;">	a() {}</span></span>
<span class="line"><span style="color:#A6ACCD;">	b() {}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">var a = new Singleton(&quot;nangxi1&quot;, 100);</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u540E\u9762\u65E0\u8BBA\u4F60\u518D\u600E\u4E48\u6539\u600E\u4E48\u4F20\uFF0C\u8FD4\u56DE\u7684\u5B9E\u4F8B\u90FD\u662F\u540C\u4E00\u4E2Aa === b</span></span>
<span class="line"><span style="color:#A6ACCD;">var b = new Singleton(&quot;nangxi2&quot;, 100);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>redux\u548Cvuex\u90FD\u662F\u5355\u4F8B\u6A21\u5F0F\uFF0C\u4F46\u662F\u8FD9\u4E9B\u4F8B\u5B50\u90FD\u6BD4\u8F83\u9065\u8FDC\uFF0C\u6211\u4EEC\u627E\u4E00\u4E2A\u7B80\u5355\u7684\u4F8B\u5B50\u3002</p><p>\u6211\u4EEC\u7528\u5F39\u7A97\u6765\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u4E00\u822C\u6211\u4EEC\u5728\u540C\u4E00\u65F6\u95F4\u53EA\u4F1A\u5F39\u51FA\u4E00\u4E2A\u5F39\u7A97\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u5F39\u7A97\u5C31\u6CA1\u5FC5\u8981\u591A\u6B21\u521B\u5EFA\u4E86\uFF0C\u7528\u4E4B\u524D\u521B\u5EFA\u7684\u90A3\u4E00\u4E2A\u5F39\u7A97\u5C31\u53EF\u4EE5\u4E86\u3002</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">.modal {</span></span>
<span class="line"><span style="color:#A6ACCD;">	position:fixed;</span></span>
<span class="line"><span style="color:#A6ACCD;">	width:200px;</span></span>
<span class="line"><span style="color:#A6ACCD;">	height:300px;</span></span>
<span class="line"><span style="color:#A6ACCD;">	left: 50%;</span></span>
<span class="line"><span style="color:#A6ACCD;">	top: 50%;</span></span>
<span class="line"><span style="color:#A6ACCD;">	transform:translate(-50%,-50%);</span></span>
<span class="line"><span style="color:#A6ACCD;">	// \u6709\u4EBA\u5C31\u8BF4\u4E86\uFF0C\u90A3\u6211\u4E0D\u80FD\u76F4\u63A5\u63A7\u5236display\u7684\u663E\u793A\u548C\u9690\u85CF\u5417\uFF1F\u4E0D\u7BA1\u7528\u4E0D\u5230\uFF0C\u5148\u521B\u5EFA\u51FA\u6765\uFF0C\u5F53\u7136\u53EF\u4EE5\uFF0C\u4F46\u662F\u8FD9\u79CD\u505A\u6CD5\u8FD8\u4E0D\u591F\u4F18\u5316\uFF0C\u5982\u679C\u6211\u4EEC\u7528\u4E0D\u4E0A\u8FD9\u4E2A\u5F39\u7A97\u90A3\u4E0D\u662F\u6D6A\u8D39\u8D44\u6E90\u4E86\u5417\uFF1F\u6211\u4EEC\u8981\u5B9E\u73B0\u7684\u662F\u52A8\u6001\u521B\u5EFA\uFF0C\u8981\u7684\u65F6\u5019\u518D\u521B\u5EFA</span></span>
<span class="line"><span style="color:#A6ACCD;">	display: none;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;div class=&quot;modal&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const Modal = (function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">	let instance = null;</span></span>
<span class="line"><span style="color:#A6ACCD;">	return function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">		if(!instance) {</span></span>
<span class="line"><span style="color:#A6ACCD;">			instance = document.createElement(&quot;div&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">			instance.innerHTML = &quot;\u5F39\u7A97&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">			instance.className = &quot;modal&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">			instance.style.display = &quot;none&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">			document.body.appendChild(instance);</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;">		return instance</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">})()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">document.querySelector(&quot;#open&quot;).onclick = function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">	const modal = Modal();</span></span>
<span class="line"><span style="color:#A6ACCD;">	modal.style.display = &quot;block&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">document.querySelector(&quot;#close&quot;).onclick = function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">	const modal = Modal();</span></span>
<span class="line"><span style="color:#A6ACCD;">	modal.style.display = &quot;none&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div>`,10),c=[e];function t(r,o,i,b,A,C){return a(),n("div",null,c)}const y=s(p,[["render",t]]);export{m as __pageData,y as default};
