import{_ as s,c as n,o as a,h as l}from"./app.e4480542.js";const m=JSON.parse('{"title":"\u6A21\u5F0F\u5341\u4E5D\u2014\u2014\u8FED\u4EE3\u5668\u6A21\u5F0F","description":"","frontmatter":{},"headers":[],"relativePath":"blogs/js-ts/js/design-mode/diedaiqimoshi.md","lastUpdated":1720104467000}'),p={name:"blogs/js-ts/js/design-mode/diedaiqimoshi.md"},e=l(`<h1 id="\u6A21\u5F0F\u5341\u4E5D\u2014\u2014\u8FED\u4EE3\u5668\u6A21\u5F0F" tabindex="-1">\u6A21\u5F0F\u5341\u4E5D\u2014\u2014\u8FED\u4EE3\u5668\u6A21\u5F0F <a class="header-anchor" href="#\u6A21\u5F0F\u5341\u4E5D\u2014\u2014\u8FED\u4EE3\u5668\u6A21\u5F0F" aria-hidden="true">#</a></h1><blockquote><p>\u8FED\u4EE3\u5668\u6A21\u5F0F\u662F\u6307\u63D0\u4F9B\u4E00\u79CD\u65B9\u6CD5\u987A\u5E8F\u8BBF\u95EE\u4E00\u4E2A\u805A\u5408\u5BF9\u8C61\u4E2D\u7684\u5404\u4E2A\u5143\u7D20\uFF0C\u800C\u4E0D\u9700\u8981\u66B4\u9732\u5BF9\u8C61\u7684\u5185\u90E8\u8868\u793A\u3002\u8FED\u4EE3\u5668\u6A21\u5F0F\u53EF\u4EE5\u628A\u8FED\u4EE3\u8FC7\u7A0B\u4ECE\u4E1A\u52A1\u903B\u8F91\u4E2D\u5206\u79BB\u51FA\u6765\uFF0C\u5728\u4F7F\u7528\u8FED\u4EE3\u5668\u6A21\u5F0F\u4E4B\u540E\uFF0C\u53CA\u65F6\u4E0D\u5173\u7CFB\u5BF9\u8C61\u7684\u5185\u90E8\u6784\u9020\uFF0C\u4E5F\u53EF\u4EE5\u6309\u987A\u5E8F\u8BBF\u95EE\u5176\u4E2D\u7684\u6BCF\u4E2A\u5143\u7D20\u3002</p></blockquote><ol><li>\u4E3A\u904D\u5386\u4E0D\u540C\u7684\u6570\u636E\u7ED3\u6784\u7684\u201C\u96C6\u5408\u201D\u63D0\u4F9B\u7EDF\u4E00\u7684\u63A5\u53E3\uFF1B</li><li>\u80FD\u904D\u5386\u8BBF\u95EE\u201C\u96C6\u5408\u201D\u6570\u636E\u4E2D\u7684\u9879\uFF0C\u4E0D\u5173\u5FC3\u9879\u7684\u6570\u636E\u7ED3\u6784</li></ol><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">var myEach = function(arr, callback) {</span></span>
<span class="line"><span style="color:#A6ACCD;">	for(let i = 0;i &lt; arr.length;i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">		callback(i, arr[i]);</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">myEach([11,22,33,44], function(key, value) {</span></span>
<span class="line"><span style="color:#A6ACCD;">	console.log(key, value);</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>ES6\u4E4B\u540E\u51FA\u73B0\u4E86\u65B0api\u2014\u2014Iterator</p><p>\u90A3\u4E48\u54EA\u4E9B\u5BF9\u8C61\u62E5\u6709\u8FD9\u4E2A\u8FED\u4EE3\u5668\u5462\uFF1F</p><ul><li>Array</li><li>Map</li><li>Set</li><li>String</li><li>arguments</li><li>NodeList</li></ul><p>\u8FD9\u4E9B\u5BF9\u8C61\u90FD\u5185\u7F6E\u8FED\u4EE3\u5668\u3002</p><p>\u5C31\u62FF\u6570\u7EC4\u4E3A\u4F8B</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">var arr = [&quot;nangxi1&quot;,&quot;nangxi2&quot;,&quot;nangxi3&quot;];</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u56E0\u4E3A\u6570\u7EC4\u62E5\u6709\u8FED\u4EE3\u5668\uFF0C\u6240\u4EE5\u53EF\u4EE5\u901A\u8FC7for...of\u904D\u5386\u6570\u7EC4</span></span>
<span class="line"><span style="color:#A6ACCD;">for(let i of arr) {</span></span>
<span class="line"><span style="color:#A6ACCD;">	console.log(i);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u4E5F\u53EF\u4EE5\u76F4\u63A5\u5C06\u8FED\u4EE3\u5668\u53D6\u51FA\u6765\u6267\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;">let it = arr[Symbol.iterator]();</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(it.next());</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(it.next());</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(it.next());</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(it.next());</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u90A3\u4E48\u6309\u7167\u8FD9\u79CD\u4F7F\u7528\u65B9\u6CD5\uFF0C\u5982\u679C\u67D0\u4E2A\u5BF9\u8C61\u6CA1\u6709\u8FED\u4EE3\u5668\u63A5\u53E3\uFF0C\u4F46\u662F\u6211\u4EEC\u7ED9\u4ED6\u4EEC\u90E8\u7F72\u4E0A\u8FED\u4EE3\u5668\u63A5\u53E3\uFF0C\u90A3\u5176\u5B9E\u4E5F\u53EF\u4EE5\u5B9E\u73B0for...of\u7684\u904D\u5386\u3002</p><p>\u56E0\u4E3A\u539F\u751F\u5BF9\u8C61\u6CA1\u6709\u8FED\u4EE3\u5668\uFF0C\u6211\u4EEC\u5C31\u4EE5\u5B83\u4E3A\u4F8B\uFF0C\u7ED9\u5B83\u90E8\u7F72\u4E00\u4E2A\u8FED\u4EE3\u5668</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">var obj = {</span></span>
<span class="line"><span style="color:#A6ACCD;">	0: &quot;nangxi1&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">	1: &quot;nangxi2&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">	2: &quot;nangxi3&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">	length: 3,</span></span>
<span class="line"><span style="color:#A6ACCD;">	[Symbol.iterator]: Array.property[Symbol.iterator]</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">for(let i of obj) {</span></span>
<span class="line"><span style="color:#A6ACCD;">	console.log(i);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u8FED\u4EE3\u5668\u6A21\u5F0F\u5728\u771F\u5B9E\u7684\u4E1A\u52A1\u4E2D\u4E5F\u53EF\u4EE5\u8FD9\u4E48\u4F7F\u7528</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">var obj = {</span></span>
<span class="line"><span style="color:#A6ACCD;">	code: 200,</span></span>
<span class="line"><span style="color:#A6ACCD;">	name: &quot;nangxi&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">	list: [&quot;aaa&quot;, &quot;bbb&quot;, &quot;ccc&quot;],</span></span>
<span class="line"><span style="color:#A6ACCD;">	[Symbol.iterator]: function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">		let index = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">		return {</span></span>
<span class="line"><span style="color:#A6ACCD;">			next:() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">				if(index &lt; this.list.length) {</span></span>
<span class="line"><span style="color:#A6ACCD;">					return {</span></span>
<span class="line"><span style="color:#A6ACCD;">						value: this.list[index++],</span></span>
<span class="line"><span style="color:#A6ACCD;">						done: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">					}</span></span>
<span class="line"><span style="color:#A6ACCD;">				}</span></span>
<span class="line"><span style="color:#A6ACCD;">				return {</span></span>
<span class="line"><span style="color:#A6ACCD;">					value: undefined,</span></span>
<span class="line"><span style="color:#A6ACCD;">					done: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">				}</span></span>
<span class="line"><span style="color:#A6ACCD;">			}</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">var it = obj[Symbol.iterator]();</span></span>
<span class="line"><span style="color:#A6ACCD;">it.next();</span></span>
<span class="line"><span style="color:#A6ACCD;">it.next();</span></span>
<span class="line"><span style="color:#A6ACCD;">it.next();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div>`,15),t=[e];function r(o,c,i,b,A,C){return a(),n("div",null,t)}const y=s(p,[["render",r]]);export{m as __pageData,y as default};
