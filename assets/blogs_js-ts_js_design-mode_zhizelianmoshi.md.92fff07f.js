import{_ as s,c as n,o as a,h as l}from"./app.f91df359.js";const m=JSON.parse('{"title":"\u6A21\u5F0F\u4E8C\u5341\u2014\u2014\u804C\u8D23\u94FE\u6A21\u5F0F","description":"","frontmatter":{},"headers":[],"relativePath":"blogs/js-ts/js/design-mode/zhizelianmoshi.md","lastUpdated":1680139528000}'),p={name:"blogs/js-ts/js/design-mode/zhizelianmoshi.md"},e=l(`<h1 id="\u6A21\u5F0F\u4E8C\u5341\u2014\u2014\u804C\u8D23\u94FE\u6A21\u5F0F" tabindex="-1">\u6A21\u5F0F\u4E8C\u5341\u2014\u2014\u804C\u8D23\u94FE\u6A21\u5F0F <a class="header-anchor" href="#\u6A21\u5F0F\u4E8C\u5341\u2014\u2014\u804C\u8D23\u94FE\u6A21\u5F0F" aria-hidden="true">#</a></h1><blockquote><p>\u4F7F\u591A\u4E2A\u5BF9\u8C61\u90FD\u6709\u673A\u4F1A\u5904\u7406\u8BF7\u6C42\uFF0C\u4ECE\u800C\u907F\u514D\u4E86\u8BF7\u6C42\u7684\u53D1\u9001\u8005\u4E0E\u591A\u4E2A\u63A5\u6536\u8005\u76F4\u63A5\u7684\u8026\u5408\u5173\u7CFB\uFF0C\u5C06\u8FD9\u4E9B\u63A5\u6536\u8005\u8FDE\u63A5\u6210\u4E00\u6761\u94FE\uFF0C\u987A\u7740\u8FD9\u6761\u94FE\u4F20\u9012\u8BE5\u8BF7\u6C42\uFF0C\u76F4\u5230\u627E\u5230\u80FD\u5904\u7406\u8BE5\u8BF7\u6C42\u7684\u5BF9\u8C61\u3002</p></blockquote><p>\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u804C\u8D23\u94FE\u6A21\u5F0F\u6765\u5B9E\u73B0\u8868\u5355\u6821\u9A8C</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">btn.onclick = function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">	if(input.value.length === 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">		console.log(&quot;\u8FD9\u91CC\u4E0D\u80FD\u4E3A\u7A7A&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">	} else if(Number.isNaN(_input.value)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">		console.log(&quot;\u8FD9\u91CC\u5FC5\u987B\u662F\u6570\u5B57&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">	} else if(input.value.length &lt; 6) {</span></span>
<span class="line"><span style="color:#A6ACCD;">		console.log(&quot;\u8FD9\u91CC\u5FC5\u987B\u8981\u5927\u4E8E6\u4E2A\u6570\u5B57&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u4E0A\u9762\u8FD9\u79CD\u5199\u6CD5\uFF0C\u5982\u679C\u8FD9\u4E2A\u8F93\u5165\u6846\u8FD8\u6709\u66F4\u591A\u6821\u9A8C\u89C4\u5219\uFF0C\u90A3\u4E48\u6211\u4EEC\u5C31\u5F97\u4E00\u4E2A\u4E00\u4E2Aif...else\u5F80\u4E0A\u52A0\uFF0C\u65E0\u7591\u589E\u52A0\u4E86\u4EE3\u7801\u7684\u9605\u8BFB\u96BE\u5EA6\u3002\u6211\u4EEC\u7528\u804C\u8D23\u94FE\u6A21\u5F0F\u6765\u4FEE\u6539\u4E00\u4E0B\u3002</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function checkEmpty() {</span></span>
<span class="line"><span style="color:#A6ACCD;">	if(input.value.length === 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">		console.log(&quot;\u8FD9\u91CC\u4E0D\u80FD\u4E3A\u7A7A&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">		return;</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">	return &quot;next&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">function checkNumber() {</span></span>
<span class="line"><span style="color:#A6ACCD;">	if(Number.isNaN(_input.value)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">		console.log(&quot;\u8FD9\u91CC\u5FC5\u987B\u662F\u6570\u5B57&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">		return;</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">	return &quot;next&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">function checkLength() {</span></span>
<span class="line"><span style="color:#A6ACCD;">	if(input.value.length &lt; 6) {</span></span>
<span class="line"><span style="color:#A6ACCD;">		console.log(&quot;\u8FD9\u91CC\u5FC5\u987B\u8981\u5927\u4E8E6\u4E2A\u6570\u5B57&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">		return;</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">	return &quot;next&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">class Chain {</span></span>
<span class="line"><span style="color:#A6ACCD;">	constructor(fn) {</span></span>
<span class="line"><span style="color:#A6ACCD;">		this.checkRule = fn;</span></span>
<span class="line"><span style="color:#A6ACCD;">		this.nextRule = null;</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">	end() {</span></span>
<span class="line"><span style="color:#A6ACCD;">		this.nextRule = {</span></span>
<span class="line"><span style="color:#A6ACCD;">			check: ()=&gt; &quot;end&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">	addRule(nextRule) {</span></span>
<span class="line"><span style="color:#A6ACCD;">		this.nextRule = new Chain(nextRule);</span></span>
<span class="line"><span style="color:#A6ACCD;">		return this.nextRule;</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">	check() {</span></span>
<span class="line"><span style="color:#A6ACCD;">		this.checkRule() === &quot;next&quot;? this.nextRule.check(): null;</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">const checks = new Chain(checkEmpty);</span></span>
<span class="line"><span style="color:#A6ACCD;">checks.addRule(checkNumber).addRule(checkLength).end();</span></span>
<span class="line"><span style="color:#A6ACCD;">btn.onclick = function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">	checks.check();</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div>`,6),c=[e];function t(r,o,i,u,b,C){return a(),n("div",null,c)}const y=s(p,[["render",t]]);export{m as __pageData,y as default};
