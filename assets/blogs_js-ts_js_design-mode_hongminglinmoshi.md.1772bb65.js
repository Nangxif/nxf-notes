import{_ as s,c as n,o as a,h as l}from"./app.f9f5284b.js";const u=JSON.parse('{"title":"\u6A21\u5F0F\u5341\u4E03\u2014\u2014\u5B8F\u547D\u4EE4\u6A21\u5F0F","description":"","frontmatter":{},"headers":[],"relativePath":"blogs/js-ts/js/design-mode/hongminglinmoshi.md","lastUpdated":1676908139000}'),p={name:"blogs/js-ts/js/design-mode/hongminglinmoshi.md"},e=l(`<h1 id="\u6A21\u5F0F\u5341\u4E03\u2014\u2014\u5B8F\u547D\u4EE4\u6A21\u5F0F" tabindex="-1">\u6A21\u5F0F\u5341\u4E03\u2014\u2014\u5B8F\u547D\u4EE4\u6A21\u5F0F <a class="header-anchor" href="#\u6A21\u5F0F\u5341\u4E03\u2014\u2014\u5B8F\u547D\u4EE4\u6A21\u5F0F" aria-hidden="true">#</a></h1><blockquote><p>\u5B8F\u547D\u4EE4\u6A21\u5F0F\u4E5F\u5C31\u662F\u7EC4\u5408\u6A21\u5F0F\u8DDF\u547D\u4EE4\u6A21\u5F0F\u5408\u5E76\u5728\u4E00\u8D77\u3002\u4E00\u7EC4\u547D\u4EE4\u7684\u96C6\u5408\u3002</p></blockquote><p>\u5047\u8BBE\u6709\u8FD9\u4E48\u4E00\u4E2A\u573A\u666F\uFF0C\u4E00\u4E2A\u9875\u9762\u6709\u9009\u9879\u5361\u7684\u529F\u80FD\u4E5F\u6709\u8F6E\u64AD\u7684\u529F\u80FD\uFF0C\u4E5F\u6709\u7011\u5E03\u6D41\uFF0C\u6211\u60F3\u505A\u7684\u662F\uFF0C\u5728\u6574\u4E2A\u9875\u9762\u52A0\u8F7D\u7684\u65F6\u5019\uFF0C\u5C31\u6267\u884C\u4E00\u4E2A\u547D\u4EE4\uFF0C\u7136\u540E\u8FD9\u4E2A\u547D\u4EE4\u4F1A\u904D\u5386\u6267\u884C\u521B\u5EFA\u9009\u9879\u5361\uFF0C\u8F6E\u64AD\u4EE5\u53CA\u7011\u5E03\u6D41\u7684\u4EE3\u7801\u3002</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class MacroCommand {</span></span>
<span class="line"><span style="color:#A6ACCD;">	constructor() {</span></span>
<span class="line"><span style="color:#A6ACCD;">		this.list = [];</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">	add(command) {</span></span>
<span class="line"><span style="color:#A6ACCD;">		this.list.push(command);</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">	execute() {</span></span>
<span class="line"><span style="color:#A6ACCD;">		for(let item of this.list) {</span></span>
<span class="line"><span style="color:#A6ACCD;">			item.execute();</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const Tabs = {</span></span>
<span class="line"><span style="color:#A6ACCD;">	execute() {</span></span>
<span class="line"><span style="color:#A6ACCD;">		console.log(&quot;\u9009\u9879\u5361\u6267\u884C&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">		this.init();</span></span>
<span class="line"><span style="color:#A6ACCD;">		this.getData();</span></span>
<span class="line"><span style="color:#A6ACCD;">		this.render();</span></span>
<span class="line"><span style="color:#A6ACCD;">	},</span></span>
<span class="line"><span style="color:#A6ACCD;">	init() {</span></span>
<span class="line"><span style="color:#A6ACCD;">		console.log(&quot;init&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">	},</span></span>
<span class="line"><span style="color:#A6ACCD;">	getData() {</span></span>
<span class="line"><span style="color:#A6ACCD;">		console.log(&quot;getData&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">	},</span></span>
<span class="line"><span style="color:#A6ACCD;">	render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">		console.log(&quot;render&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">const Swipe = {</span></span>
<span class="line"><span style="color:#A6ACCD;">	execute() {</span></span>
<span class="line"><span style="color:#A6ACCD;">		console.log(&quot;\u8F6E\u64AD\u6267\u884C&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">const macroCommand = new MacroCommand();</span></span>
<span class="line"><span style="color:#A6ACCD;">macroCommand.add(Tabs);</span></span>
<span class="line"><span style="color:#A6ACCD;">macroCommand.add(Swipe);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">macroCommand.execute();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div>`,4),c=[e];function o(r,t,i,b,C,A){return a(),n("div",null,c)}const d=s(p,[["render",o]]);export{u as __pageData,d as default};
