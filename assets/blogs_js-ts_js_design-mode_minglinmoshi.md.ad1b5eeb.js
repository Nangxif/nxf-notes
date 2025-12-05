import{_ as n,c as a,g as l,o as e}from"./app.d651a09e.js";const A=JSON.parse('{"title":"\u6A21\u5F0F\u5341\u516D\u2014\u2014\u547D\u4EE4\u6A21\u5F0F","description":"","frontmatter":{},"headers":[],"relativePath":"blogs/js-ts/js/design-mode/minglinmoshi.md","lastUpdated":1764907094000}'),p={name:"blogs/js-ts/js/design-mode/minglinmoshi.md"};function c(r,s,o,t,i,b){return e(),a("div",null,[...s[0]||(s[0]=[l(`<h1 id="\u6A21\u5F0F\u5341\u516D\u2014\u2014\u547D\u4EE4\u6A21\u5F0F" tabindex="-1">\u6A21\u5F0F\u5341\u516D\u2014\u2014\u547D\u4EE4\u6A21\u5F0F <a class="header-anchor" href="#\u6A21\u5F0F\u5341\u516D\u2014\u2014\u547D\u4EE4\u6A21\u5F0F" aria-hidden="true">#</a></h1><blockquote><p>\u6709\u65F6\u5019\u9700\u8981\u5411\u67D0\u4E9B\u5BF9\u8C61\u53D1\u9001\u8BF7\u6C42\uFF0C\u4F46\u662F\u5E76\u4E0D\u77E5\u9053\u8BF7\u6C42\u7684\u63A5\u53D7\u8005\u662F\u8C01\uFF0C\u4E5F\u4E0D\u77E5\u9053\u88AB\u8BF7\u6C42\u7684\u64CD\u4F5C\u662F\u4EC0\u4E48\u3002\u9700\u8981\u4E00\u79CD\u677E\u8026\u5408\u7684\u65B9\u5F0F\u6765\u8BBE\u8BA1\u7A0B\u5E8F\uFF0C\u4F7F\u5F97\u53D1\u9001\u8005\u548C\u63A5\u53D7\u8005\u5462\u80FD\u591F\u6D88\u9664\u5F7C\u6B64\u4E4B\u95F4\u7684\u8026\u5408\u5173\u7CFB\u3002</p></blockquote><p>\u547D\u4EE4\u6A21\u5F0F\u7531\u4E09\u79CD\u89D2\u8272\u6784\u6210\uFF1A</p><ol><li>\u53D1\u5E03\u8005<code>invoker</code>\uFF08\u53D1\u51FA\u547D\u4EE4\uFF0C\u8C03\u7528\u547D\u4EE4\u5BF9\u8C61\uFF0C\u4E0D\u77E5\u9053\u5982\u4F55\u6267\u884C\u4E0E\u8C01\u6267\u884C\uFF09\uFF1B</li><li>\u63A5\u6536\u8005<code>receiver</code>\uFF08\u63D0\u4F9B\u5BF9\u5E94\u63A5\u53E3\u5904\u7406\u8BF7\u6C42\uFF0C\u4E0D\u77E5\u9053\u8C01\u53D1\u8D77\u8BF7\u6C42\uFF09\uFF1B</li><li>\u547D\u4EE4\u5BF9\u8C61<code>command</code>\uFF08\u63A5\u6536\u547D\u4EE4\uFF0C\u8C03\u7528\u63A5\u6536\u8005\u5BF9\u5E94\u63A5\u53E3\u5904\u7406\u53D1\u5E03\u8005\u7684\u8BF7\u6C42\uFF09\u3002</li></ol><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class Receiver {</span></span>
<span class="line"><span style="color:#A6ACCD;">	// \u63A5\u6536\u8005\u7C7B</span></span>
<span class="line"><span style="color:#A6ACCD;">	excute() {</span></span>
<span class="line"><span style="color:#A6ACCD;">		console.log(&quot;\u63A5\u6536\u8005\u6267\u884C\u8BF7\u6C42&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">class Command {</span></span>
<span class="line"><span style="color:#A6ACCD;">	// \u547D\u4EE4\u5BF9\u8C61\u7C7B</span></span>
<span class="line"><span style="color:#A6ACCD;">	constructor(reciver) {</span></span>
<span class="line"><span style="color:#A6ACCD;">		this.reciver = reciver;</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">	excute() {</span></span>
<span class="line"><span style="color:#A6ACCD;">		// \u8C03\u7528\u63A5\u6536\u8005\u5BF9\u5E94\u63A5\u53E3\u6267\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;">		console.log(&quot;\u547D\u4EE4\u5BF9\u8C61-&gt;\u63A5\u6536\u8005-&gt;\u5BF9\u5E94\u63A5\u53E3\u6267\u884C&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">		this.receiver.excute();</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">class Invoker {</span></span>
<span class="line"><span style="color:#A6ACCD;">	// \u53D1\u5E03\u7C7B</span></span>
<span class="line"><span style="color:#A6ACCD;">	constructor(command) {</span></span>
<span class="line"><span style="color:#A6ACCD;">		this.command = command;</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">	excute() {</span></span>
<span class="line"><span style="color:#A6ACCD;">		console.log(&quot;\u53D1\u5E03\u8BF7\u6C42&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">		this.command.excute();</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const order = new Command(new Reciver());</span></span>
<span class="line"><span style="color:#A6ACCD;">const client = new Invoker(order);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">client.excute();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div>`,5)])])}const m=n(p,[["render",c]]);export{A as __pageData,m as default};
