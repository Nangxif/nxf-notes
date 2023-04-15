import{_ as s,c as n,o as a,h as l}from"./app.1fc04290.js";const m=JSON.parse('{"title":"\u6A21\u5F0F\u4E94\u2014\u2014\u5EFA\u9020\u8005\u6A21\u5F0F","description":"","frontmatter":{},"headers":[],"relativePath":"blogs/js-ts/js/design-mode/jianzaozhemoshi.md","lastUpdated":1681543905000}'),p={name:"blogs/js-ts/js/design-mode/jianzaozhemoshi.md"},e=l(`<h1 id="\u6A21\u5F0F\u4E94\u2014\u2014\u5EFA\u9020\u8005\u6A21\u5F0F" tabindex="-1">\u6A21\u5F0F\u4E94\u2014\u2014\u5EFA\u9020\u8005\u6A21\u5F0F <a class="header-anchor" href="#\u6A21\u5F0F\u4E94\u2014\u2014\u5EFA\u9020\u8005\u6A21\u5F0F" aria-hidden="true">#</a></h1><p>\u5EFA\u9020\u8005\u6A21\u5F0F\u5C5E\u4E8E\u521B\u5EFA\u578B\u6A21\u5F0F\u7684\u4E00\u79CD\uFF0C\u63D0\u4F9B\u4E00\u79CD\u521B\u5EFA\u590D\u6742\u5BF9\u8C61\u7684\u65B9\u5F0F\u3002\u5B83\u5C06\u4E00\u4E2A\u590D\u6742\u7684\u5BF9\u8C61\u7684\u6784\u5EFA\u4E0E\u5B83\u7684\u6807\u8BC6\u5206\u79BB\uFF0C\u4F7F\u5F97\u540C\u6837\u7684\u6784\u5EFA\u8FC7\u7A0B\u53EF\u4EE5\u521B\u5EFA\u4E0D\u540C\u7684\u8868\u793A\u3002</p><p>\u5EFA\u9020\u8005\u6A21\u5F0F\u662F\u4E00\u6B65\u4E00\u6B65\u5730\u521B\u5EFA\u4E00\u4E2A\u590D\u6742\u7684\u5BF9\u8C61\uFF0C\u5B83\u5141\u8BB8\u7528\u6237\u53EA\u901A\u8FC7\u6307\u5B9A\u590D\u6742\u7684\u5BF9\u8C61\u7684\u7C7B\u578B\u548C\u5185\u5BB9\u5C31\u53EF\u4EE5\u6784\u5EFA\u5B83\u4EEC\uFF0C\u7528\u6237\u4E0D\u9700\u8981\u6307\u5B9A\u5185\u90E8\u7684\u5177\u4F53\u6784\u9020\u7EC6\u8282\u3002</p><p>\u5047\u8BBE\u73B0\u5728\u6709\u4E2A\u4F8B\u5B50\uFF0C\u6DD8\u7968\u7968\u6709\u4E00\u4E2Anavbar\u7528\u6765\u663E\u793A\u4E0D\u540C\u7684\u7535\u5F71\u79CD\u7C7B\uFF0C\u540C\u65F6\u4E5F\u6709\u4E00\u4E2Alist\u6765\u663E\u793Anavbar\u9009\u62E9\u7684\u4E0D\u540C\u7684\u79CD\u7C7B\u7684\u7535\u5F71\u3002</p><p>\u90A3\u4E48\u6B64\u65F6navbar\u548Clist\u90FD\u9700\u8981\u7ECF\u8FC7\u4E09\u4E2A\u6B65\u9AA4</p><ol><li>init\u521B\u5EFA\u5404\u81EA\u7684\u5BB9\u5668\u8282\u70B9</li><li>ajax\u8BF7\u6C42\u6570\u636E</li><li>render\u6E32\u67D3\u9875\u9762</li></ol><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class Navbar {</span></span>
<span class="line"><span style="color:#A6ACCD;">	init() {</span></span>
<span class="line"><span style="color:#A6ACCD;">		console.log(&quot;navbar-init&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">	getData() {</span></span>
<span class="line"><span style="color:#A6ACCD;">		return new Promise((resolve) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">			setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">				resolve();</span></span>
<span class="line"><span style="color:#A6ACCD;">				console.log(&quot;navbar-getData&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">			}, 1000)</span></span>
<span class="line"><span style="color:#A6ACCD;">		})</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">	render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">		console.log(&quot;navbar-render&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">class List {</span></span>
<span class="line"><span style="color:#A6ACCD;">	init() {</span></span>
<span class="line"><span style="color:#A6ACCD;">		console.log(&quot;list-init&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">	getData() {</span></span>
<span class="line"><span style="color:#A6ACCD;">		return new Promise((resolve) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">			setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">				resolve();</span></span>
<span class="line"><span style="color:#A6ACCD;">				console.log(&quot;list-getData&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">			}, 1000)</span></span>
<span class="line"><span style="color:#A6ACCD;">		})</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">	render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">		console.log(&quot;list-render&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u5EFA\u9020\u8005\u6A21\u5F0F\u5C31\u662F\u901A\u8FC7\u5EFA\u9020\u7684\u8FD9\u4E48\u4E00\u4E2A\u7C7B\uFF0C\u8FD9\u4E2A\u7C7B\u5173\u6CE8\u7684\u662F\u6211\u4EEC\u6BCF\u4E00\u6B65\u7684\u6B65\u9AA4\uFF0C\u60F3\u770B\u7EC6\u8282\u6211\u4EEC\u4E5F\u53EF\u4EE5\u770B\u5230\u7EC6\u8282</span></span>
<span class="line"><span style="color:#A6ACCD;">class Creator {</span></span>
<span class="line"><span style="color:#A6ACCD;">	async startBuild(builder) {</span></span>
<span class="line"><span style="color:#A6ACCD;">		await builder.init();</span></span>
<span class="line"><span style="color:#A6ACCD;">		await builder.getData();</span></span>
<span class="line"><span style="color:#A6ACCD;">		await builder.render();</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">const op = new Creator();</span></span>
<span class="line"><span style="color:#A6ACCD;">op.startBuild(new Navbar());</span></span>
<span class="line"><span style="color:#A6ACCD;">op.startBuild(new List());</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div><p>\u5EFA\u9020\u8005\u6A21\u5F0F\u5C06\u4E00\u4E2A\u590D\u6742\u5BF9\u8C61\u7684\u6784\u5EFA\u5C42\u4E0E\u5176\u8868\u793A\u5C42\u76F8\u4E92\u5206\u79BB\uFF0C\u540C\u6837\u7684\u6784\u5EFA\u8FC7\u7A0B\u53EF\u91C7\u7528\u4E0D\u540C\u7684\u8868\u793A\u3002\u5DE5\u5382\u6A21\u5F0F\u4E3B\u8981\u662F\u4E3A\u4E86\u521B\u5EFA\u5BF9\u8C61\u5B9E\u4F8B\u6216\u8005\u7C7B\u7C07\uFF08\u62BD\u8C61\u5DE5\u5382\uFF09\uFF0C\u5173\u5FC3\u7684\u662F\u6700\u7EC8\u4EA7\u51FA\uFF08\u521B\u5EFA\uFF09\u7684\u662F\u4EC0\u4E48\uFF0C\u800C\u4E0D\u5173\u5FC3\u521B\u5EFA\u7684\u8FC7\u7A0B\u3002\u800C\u5EFA\u9020\u8005\u6A21\u5F0F\u5173\u5FC3\u7684\u662F\u521B\u5EFA\u8FD9\u4E2A\u5BF9\u8C61\u7684\u6574\u4E2A\u8FC7\u7A0B\uFF0C\u751A\u81F3\u4E8E\u521B\u5EFA\u5BF9\u8C61\u7684\u6BCF\u4E00\u4E2A\u7EC6\u8282\u3002</p><p>\u4E0A\u9762\u7684\u4EE3\u7801\u5982\u679C\u6211\u4EEC\u8BF4\u4E0D\u8981Creator\uFF0C\u6211\u4EEC\u975E\u8981\u5199\u6210\u8FD9\u6837\u5B50</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class Navbar {</span></span>
<span class="line"><span style="color:#A6ACCD;">	init() {</span></span>
<span class="line"><span style="color:#A6ACCD;">		console.log(&quot;navbar-init&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">		getData();</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">	getData() {</span></span>
<span class="line"><span style="color:#A6ACCD;">		return new Promise((resolve) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">			setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">				resolve();</span></span>
<span class="line"><span style="color:#A6ACCD;">				console.log(&quot;navbar-getData&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">			}, 1000)</span></span>
<span class="line"><span style="color:#A6ACCD;">		})</span></span>
<span class="line"><span style="color:#A6ACCD;">		render();</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">	render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">		console.log(&quot;navbar-render&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>\u8FD9\u6837\u5B50\u5199\u884C\u4E0D\u884C\uFF0C\u5F53\u7136\u53EF\u4EE5\uFF0C\u4F46\u662F\u4EE3\u7801\u770B\u8D77\u6765\u5C31\u5F88\u6DF7\u4E71\u3002init\uFF0CgetData\u548Crender\u672C\u6765\u5C31\u662F\u540C\u7EA7\u7684\u51FD\u6570\uFF0C\u975E\u8981\u628A\u5B83\u4EEC\u5408\u5E76\u5728\u4E00\u8D77\u3002</p>`,11),t=[e];function r(c,o,i,b,C,A){return a(),n("div",null,t)}const D=s(p,[["render",r]]);export{m as __pageData,D as default};
