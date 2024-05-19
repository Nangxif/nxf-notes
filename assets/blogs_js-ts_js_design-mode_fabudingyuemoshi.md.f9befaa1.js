import{_ as s,c as n,o as a,h as l}from"./app.ce6f49de.js";const m=JSON.parse('{"title":"\u6A21\u5F0F\u5341\u4E8C\u2014\u2014\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F","description":"","frontmatter":{},"headers":[],"relativePath":"blogs/js-ts/js/design-mode/fabudingyuemoshi.md","lastUpdated":1716104157000}'),p={name:"blogs/js-ts/js/design-mode/fabudingyuemoshi.md"},e=l(`<h1 id="\u6A21\u5F0F\u5341\u4E8C\u2014\u2014\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F" tabindex="-1">\u6A21\u5F0F\u5341\u4E8C\u2014\u2014\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F <a class="header-anchor" href="#\u6A21\u5F0F\u5341\u4E8C\u2014\u2014\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F" aria-hidden="true">#</a></h1><blockquote><ol><li>\u89C2\u5BDF\u8005\u548C\u76EE\u6807\u8981\u76F8\u4E92\u77E5\u9053</li><li>\u53D1\u5E03\u8005\u548C\u8BA2\u9605\u8005\u4E0D\u7528\u4E92\u76F8\u77E5\u9053\uFF0C\u901A\u8FC7\u7B2C\u4E09\u65B9\u5B9E\u73B0\u8C03\u5EA6\u3002\u5C5E\u4E8E\u7ECF\u8FC7\u89E3\u8026\u5408\u7684\u89C2\u5BDF\u8005\u6A21\u5F0F</li></ol></blockquote><p>\u63A5\u4E0B\u6765\u6211\u4EEC\u5148\u6765\u5199\u4E00\u4E2A\u6781\u7B80\u5355\u7248\u7684\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F\uFF0C\u5F53\u7136\u8FD9\u4E2A\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F\u4E5F\u65E0\u6CD5\u5B9E\u73B0\u4E8B\u4EF6\u4FE1\u606F\u7B5B\u9009\uFF0C\u4F46\u662F\u7406\u5FF5\u4E0A\u5DF2\u7ECF\u4F53\u73B0\u51FA\u6765\u4E86\u8BA2\u9605\u53D1\u5E03\u3002</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const PubSub = {</span></span>
<span class="line"><span style="color:#A6ACCD;">	list: [],</span></span>
<span class="line"><span style="color:#A6ACCD;">	publish() {</span></span>
<span class="line"><span style="color:#A6ACCD;">		this.list.forEach(item =&gt; item());</span></span>
<span class="line"><span style="color:#A6ACCD;">	},</span></span>
<span class="line"><span style="color:#A6ACCD;">	subscribe(cb) {</span></span>
<span class="line"><span style="color:#A6ACCD;">		this.list.push(cb);</span></span>
<span class="line"><span style="color:#A6ACCD;">	},</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">function testA() {</span></span>
<span class="line"><span style="color:#A6ACCD;">	console.log(&quot;testA&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">function testB() {</span></span>
<span class="line"><span style="color:#A6ACCD;">	console.log(&quot;testB&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">PubSub.subscribe(testA);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">PubSub.subscribe(testB);</span></span>
<span class="line"><span style="color:#A6ACCD;">PubSub.publish();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>\u73B0\u5728\u6211\u4EEC\u4E00\u65E6publish\uFF0C\u90A3\u4E48\u6240\u6709subscribe\u7684\u51FD\u6570\u90FD\u4F1A\u88AB\u89E6\u53D1\uFF0C\u6211\u4EEC\u6240\u671F\u671B\u7684\uFF0C\u662F\u80FD\u591Fpublish\uFF08\u53D1\u5E03\uFF09AAA\u5C31\u53EA\u89E6\u53D1AAA\u8BA2\u9605\u7684\u65B9\u6CD5\u3002</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">PubSub.subscribe(&quot;AAA&quot;,testA);</span></span>
<span class="line"><span style="color:#A6ACCD;">PubSub.publish(&quot;AAA&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u63A5\u4E0B\u6765\u6211\u4EEC\u6539\u9020\u4E00\u4E0B\u8FD9\u4E2A\u53D1\u5E03\u8BA2\u9605</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const PubSub = {</span></span>
<span class="line"><span style="color:#A6ACCD;">	message: {},</span></span>
<span class="line"><span style="color:#A6ACCD;">	publish(type, data) {</span></span>
<span class="line"><span style="color:#A6ACCD;">		if(!this.message[type]) {</span></span>
<span class="line"><span style="color:#A6ACCD;">			return;</span></span>
<span class="line"><span style="color:#A6ACCD;">		}else {</span></span>
<span class="line"><span style="color:#A6ACCD;">			this.message[type].forEach(item =&gt; item(data));</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;">	},</span></span>
<span class="line"><span style="color:#A6ACCD;">	subscribe(type, cb) {</span></span>
<span class="line"><span style="color:#A6ACCD;">		if(!this.message[type]) {</span></span>
<span class="line"><span style="color:#A6ACCD;">			this.message[type] = [cb];</span></span>
<span class="line"><span style="color:#A6ACCD;">		}else {</span></span>
<span class="line"><span style="color:#A6ACCD;">			this.message[type].push(cb);</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;">	},</span></span>
<span class="line"><span style="color:#A6ACCD;">	unSubscribe(type, cb) {</span></span>
<span class="line"><span style="color:#A6ACCD;">		if(!this.message[type]) {</span></span>
<span class="line"><span style="color:#A6ACCD;">			return;</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;">		if(!cb) {</span></span>
<span class="line"><span style="color:#A6ACCD;">			// \u53D6\u6D88\u6240\u6709\u5F53\u524Dtype\u4E8B\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">			this.message[type] &amp;&amp; (this.message[type].length = 0);</span></span>
<span class="line"><span style="color:#A6ACCD;">		}else {</span></span>
<span class="line"><span style="color:#A6ACCD;">			this.message[type] = this.message[type].filter(item =&gt; item != cb);</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">function testA(data) {</span></span>
<span class="line"><span style="color:#A6ACCD;">	console.log(&quot;testA&quot;, data);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">function testB(data) {</span></span>
<span class="line"><span style="color:#A6ACCD;">	console.log(&quot;testB&quot;, data);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">PubSub.subscribe(&quot;A&quot;, testA);</span></span>
<span class="line"><span style="color:#A6ACCD;">PubSub.subscribe(&quot;B&quot;, testB);</span></span>
<span class="line"><span style="color:#A6ACCD;">PubSub.publish(&quot;A&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div>`,8),t=[e];function c(r,o,i,b,u,A){return a(),n("div",null,t)}const y=s(p,[["render",c]]);export{m as __pageData,y as default};
