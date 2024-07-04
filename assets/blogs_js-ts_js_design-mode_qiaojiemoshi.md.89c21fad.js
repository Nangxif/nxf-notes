import{_ as s,c as n,o as a,h as l}from"./app.e4480542.js";const m=JSON.parse('{"title":"\u6A21\u5F0F\u5341\u56DB\u2014\u2014\u6865\u63A5\u6A21\u5F0F","description":"","frontmatter":{},"headers":[],"relativePath":"blogs/js-ts/js/design-mode/qiaojiemoshi.md","lastUpdated":1720104467000}'),p={name:"blogs/js-ts/js/design-mode/qiaojiemoshi.md"},e=l(`<h1 id="\u6A21\u5F0F\u5341\u56DB\u2014\u2014\u6865\u63A5\u6A21\u5F0F" tabindex="-1">\u6A21\u5F0F\u5341\u56DB\u2014\u2014\u6865\u63A5\u6A21\u5F0F <a class="header-anchor" href="#\u6A21\u5F0F\u5341\u56DB\u2014\u2014\u6865\u63A5\u6A21\u5F0F" aria-hidden="true">#</a></h1><p>\u5C06\u62BD\u8C61\u90E8\u5206\u4E0E\u5B83\u7684\u5B9E\u73B0\u90E8\u5206\u5206\u79BB\uFF0C\u4F7F\u4ED6\u4EEC\u90FD\u53EF\u4EE5\u72EC\u7ACB\u5730\u53D8\u5316\u3002</p><p>\u4F7F\u7528\u573A\u666F\uFF1A\u4E00\u4E2A\u7C7B\u5B58\u5728\u4E24\u4E2A\u6216\u591A\u4E2A\u72EC\u7ACB\u53D8\u5316\u7684\u7EF4\u5EA6\uFF0C\u4E14\u8FD9\u4E24\u4E2A\u7EF4\u5EA6\u90FD\u9700\u8981\u8FDB\u884C\u62D3\u5C55</p><p><strong>\u4F18\u70B9\uFF1A</strong></p><p>\u628A\u62BD\u8C61\u4E0E\u5B9E\u73B0\u9694\u79BB\u5F00\uFF0C\u6709\u52A9\u4E8E\u72EC\u7ACB\u5730\u7BA1\u7406\u5404\u7EC4\u6210\u90E8\u5206\u3002</p><p><strong>\u7F3A\u70B9\uFF1A</strong></p><p>\u6BCF\u4F7F\u7528\u4E00\u4E2A\u6865\u63A5\u5143\u7D20\u90FD\u8981\u589E\u52A0\u4E00\u6B21\u51FD\u6570\u8C03\u7528\uFF0C\u8FD9\u5BF9\u5E94\u7528\u7A0B\u5E8F\u7684\u6027\u80FD\u4F1A\u6709\u4E00\u4E9B\u8D1F\u9762\u5F71\u54CD\u2014\u2014\u63D0\u9AD8\u4E86\u7CFB\u7EDF\u7684\u590D\u6742\u7A0B\u5EA6\u3002</p><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF1A\u67D0\u8F66\u4F01\u7684\u5DE5\u5382\u6709\u4E09\u79CD\u53D1\u52A8\u673A\u5E73\u53F0A\u3001B\u3001C\uFF0C\u5E76\u4E14\u6709\u4E09\u79CD\u5F15\u64CEA\u3001B\u3001C\uFF0C\u56E0\u6B64\u53EF\u4EE5\u53D1\u52A8\u673AA\u548C\u5F15\u64CEA\u7EC4\u5408\u8FDB\u884C\u7EC4\u88C5\u6C7D\u8F66\uFF0C\u53D1\u52A8\u673AA\u548C\u5F15\u64CEB\u7EC4\u5408\u8FDB\u884C\u7EC4\u88C5\u6C7D\u8F66\uFF0C\u53D1\u52A8\u673AA\u548C\u5F15\u64CEC\u7EC4\u5408\u8FDB\u884C\u7EC4\u88C5\u6C7D\u8F66\uFF0C\u4EE5\u6B64\u7C7B\u63A8\u3002</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function Aodi1(engine) {</span></span>
<span class="line"><span style="color:#A6ACCD;">	this.engine = engine;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">Aodi1.prototype.planform = function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">	console.log(&quot;Aodi1 \u5E73\u53F0&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">Aodi1.prototype.loadEngine = function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">	this.engine.run();</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u8FD9\u6837\u5B50Aodi1\u5E73\u53F0\u5C31\u53EF\u4EE5\u6839\u636E\u4F20\u8FDB\u6765\u7684\u662F\u54EA\u4E2A\u5F15\u64CE\u8FDB\u884C\u6C7D\u8F66\u7684\u7EC4\u88C5</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function V6() {</span></span>
<span class="line"><span style="color:#A6ACCD;">	this.run = function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">		console.log(&quot;V6\u53D1\u52A8\u673A&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">function V8() {</span></span>
<span class="line"><span style="color:#A6ACCD;">	this.run = function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">		console.log(&quot;V8\u53D1\u52A8\u673A&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let aodi1 = new Aodi1(new V6());</span></span>
<span class="line"><span style="color:#A6ACCD;">let aodi2 = new Aodi1(new V8());</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">aodi1.loadEngine();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>\u8FD9\u53EA\u662F\u4E00\u4E2A\u8F85\u52A9\u6211\u4EEC\u7406\u89E3\u7684\u4F8B\u5B50\uFF0C\u90A3\u6211\u4EEC\u5199\u524D\u7AEF\u9875\u9762\u7684\u65F6\u5019\uFF0C\u8FD9\u79CD\u8BBE\u8BA1\u6A21\u5F0F\u5728\u4EC0\u4E48\u573A\u666F\u4E0B\u53EF\u4EE5\u4F7F\u7528\u5462\uFF1F</p><p>\u6BD4\u5982\u5728\u9879\u76EE\u4E2D\uFF0C\u6211\u4EEC\u53EF\u80FD\u4F1A\u4F7F\u7528modal\u3001message\u3001toast\u4E09\u79CD\u5F39\u7A97\uFF0C\u6BCF\u4E00\u79CD\u5F39\u7A97\u7684\u51FA\u73B0\u90FD\u6709\u54CD\u5E94\u7684\u52A8\u753B\u3002</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const Animates = {</span></span>
<span class="line"><span style="color:#A6ACCD;">	bounce: {</span></span>
<span class="line"><span style="color:#A6ACCD;">		show(ele) {</span></span>
<span class="line"><span style="color:#A6ACCD;">			console.log(ele, &quot;\u5F39\u8DF3\u663E\u793A&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">		},</span></span>
<span class="line"><span style="color:#A6ACCD;">		hide(ele) {</span></span>
<span class="line"><span style="color:#A6ACCD;">			console.log(ele, &quot;\u5F39\u8DF3\u9690\u85CF&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;">	},</span></span>
<span class="line"><span style="color:#A6ACCD;">	slide: {</span></span>
<span class="line"><span style="color:#A6ACCD;">		show(ele) {</span></span>
<span class="line"><span style="color:#A6ACCD;">			console.log(ele, &quot;\u6ED1\u52A8\u663E\u793A&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">		},</span></span>
<span class="line"><span style="color:#A6ACCD;">		hide(ele) {</span></span>
<span class="line"><span style="color:#A6ACCD;">			console.log(ele, &quot;\u6ED1\u52A8\u9690\u85CF&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;">	},</span></span>
<span class="line"><span style="color:#A6ACCD;">	rotate: {</span></span>
<span class="line"><span style="color:#A6ACCD;">		show(ele) {</span></span>
<span class="line"><span style="color:#A6ACCD;">			console.log(ele, &quot;\u65CB\u8F6C\u663E\u793A&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">		},</span></span>
<span class="line"><span style="color:#A6ACCD;">		hide(ele) {</span></span>
<span class="line"><span style="color:#A6ACCD;">			console.log(ele, &quot;\u65CB\u8F6C\u9690\u85CF&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u73B0\u5728\u6709\u4E2A\u52A8\u753B\u5E93\uFF0Cmodal\u3001message\u3001toast\u4E09\u79CD\u5F39\u7A97\u90FD\u53EF\u4EE5\u5206\u522B\u7ED3\u5408\u8FD9\u4E09\u79CD\u52A8\u753B\u8FDB\u884C\u4F7F\u7528\uFF0C\u56E0\u4E3A\u8FD9\u4E09\u79CD\u5F39\u7A97\u90FD\u9700\u8981\u6709\u52A8\u753B\u8FDB\u884C\u5F39\u51FA\u548C\u9690\u85CF\uFF0C\u90A3\u4E48\u6211\u4EEC\u5C31\u53EF\u4EE5\u628A\u8FD9\u5757\u903B\u8F91\u62BD\u8C61\u51FA\u6765\uFF0C\u5F62\u6210\u8FD9\u4E2A\u52A8\u753B\u5E93\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function Toast(ele, animation) {</span></span>
<span class="line"><span style="color:#A6ACCD;">	this.ele = ele;</span></span>
<span class="line"><span style="color:#A6ACCD;">	this.animation = animation;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">Toast.prototype.show = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">	this.animation.show();</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">Toast.prototype.hide = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">	this.animation.hide();</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const toast = new Toast(&quot;div1&quot;, Animates.bounce);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div>`,12),o=[e];function c(r,t,i,A,b,C){return a(),n("div",null,o)}const y=s(p,[["render",c]]);export{m as __pageData,y as default};
