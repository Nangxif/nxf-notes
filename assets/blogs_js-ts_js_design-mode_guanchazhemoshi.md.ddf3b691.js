import{_ as s,c as n,o as a,h as l}from"./app.3eb8740b.js";const m=JSON.parse('{"title":"\u6A21\u5F0F\u5341\u4E00\u2014\u2014\u89C2\u5BDF\u8005\u6A21\u5F0F","description":"","frontmatter":{},"headers":[],"relativePath":"blogs/js-ts/js/design-mode/guanchazhemoshi.md","lastUpdated":1718205114000}'),p={name:"blogs/js-ts/js/design-mode/guanchazhemoshi.md"},e=l(`<h1 id="\u6A21\u5F0F\u5341\u4E00\u2014\u2014\u89C2\u5BDF\u8005\u6A21\u5F0F" tabindex="-1">\u6A21\u5F0F\u5341\u4E00\u2014\u2014\u89C2\u5BDF\u8005\u6A21\u5F0F <a class="header-anchor" href="#\u6A21\u5F0F\u5341\u4E00\u2014\u2014\u89C2\u5BDF\u8005\u6A21\u5F0F" aria-hidden="true">#</a></h1><p>\u89C2\u5BDF\u8005\u6A21\u5F0F\u5305\u542B\u89C2\u5BDF\u76EE\u6807\u548C\u89C2\u5BDF\u8005\u4E24\u7C7B\u5BF9\u8C61\uFF0C</p><p>\u4E00\u4E2A\u76EE\u6807\u53EF\u4EE5\u6709\u4EFB\u610F\u6570\u76EE\u7684\u4E0E\u4E4B\u76F8\u4F9D\u8D56\u7684\u89C2\u5BDF\u8005\u3002</p><p>\u4E00\u65E6\u89C2\u5BDF\u76EE\u6807\u7684\u72B6\u6001\u53D1\u751F\u6539\u53D8\uFF0C\u6240\u6709\u7684\u89C2\u5BDF\u8005\u90FD\u5C06\u5F97\u5230\u901A\u77E5\u3002</p><p>\u5F53\u4E00\u4E2A\u5BF9\u8C61\u7684\u72B6\u6001\u53D1\u751F\u6539\u53D8\u65F6\uFF0C\u6240\u6709\u4F9D\u8D56\u4E8E\u5B83\u7684\u5BF9\u8C61\u90FD\u5F97\u5230\u901A\u77E5\u5E76\u88AB\u81EA\u52A8\u66F4\u65B0\uFF0C\u89E3\u51B3\u4E86\u4E3B\u4F53\u5BF9\u8C61\u4E0E\u89C2\u5BDF\u8005\u4E4B\u95F4\u529F\u80FD\u7684\u8026\u5408\uFF0C\u5373\u4E00\u4E2A\u5BF9\u8C61\u72B6\u6001\u6539\u53D8\u7ED9\u5176\u4ED6\u5BF9\u8C61\u901A\u77E5\u7684\u95EE\u9898\u3002</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class Sub {</span></span>
<span class="line"><span style="color:#A6ACCD;">	constructor() {</span></span>
<span class="line"><span style="color:#A6ACCD;">		this.observers = [];</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">	add(observer) {</span></span>
<span class="line"><span style="color:#A6ACCD;">		this.observers.push(observer);</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">	// \u5982\u679C\u4E0D\u60F3\u89C2\u5BDF\u4E86\uFF0C\u90A3\u4E48\u4E5F\u53EF\u4EE5\u53D6\u6D88\u89C2\u5BDF</span></span>
<span class="line"><span style="color:#A6ACCD;">	remove(observer) {</span></span>
<span class="line"><span style="color:#A6ACCD;">		this.observers = this.observers.filter(item =&gt; item !== observer);</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">	notify() {</span></span>
<span class="line"><span style="color:#A6ACCD;">		this.observers.forEach(item =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">			item.update();</span></span>
<span class="line"><span style="color:#A6ACCD;">		})</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">class Observer {</span></span>
<span class="line"><span style="color:#A6ACCD;">	// \u53EF\u4EE5\u7ED9\u8FD9\u4E2A\u89C2\u5BDF\u8005\u5B9A\u4E49\u4E00\u4E2A\u540D\u5B57\u65B9\u4FBF\u533A\u5206</span></span>
<span class="line"><span style="color:#A6ACCD;">	constructor(name) {</span></span>
<span class="line"><span style="color:#A6ACCD;">		this.name = name;</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">	update() {</span></span>
<span class="line"><span style="color:#A6ACCD;">		console.log(&quot;update&quot;, this.name);</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">const subject = new Subject();</span></span>
<span class="line"><span style="color:#A6ACCD;">const observer1 = new Observer(&quot;nangxi1&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const observer2 = new Observer(&quot;nangxi2&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">subject.add(observer1);</span></span>
<span class="line"><span style="color:#A6ACCD;">subject.add(observer2);</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u53EA\u8981subject\u8FD9\u4E2A\u4E3B\u4F53\u5BF9\u8C61\u6709\u4EFB\u4F55\u98CE\u5439\u8349\u52A8\uFF0C\u4E5F\u5C31\u662F\u8C03\u7528\u4E86notify\uFF0C\u90A3\u4E48\u5C31\u53EF\u4EE5\u8C03\u7528\u6240\u6709\u7684\u89C2\u5BDF\u8005\u7684update\u65B9\u6CD5\uFF0C\u8FD9\u6837\u89C2\u5BDF\u8005\u5C31\u5F97\u5230\u4E00\u4E2A\u901A\u77E5\u4E86</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><p>\u4E0A\u9762\u7684\u89C2\u5BDF\u8005\u6A21\u5F0F\u662F\u6700\u57FA\u672C\u7684\u4E00\u5957\u5199\u6CD5\u3002</p><p>\u63A5\u4E0B\u6765\u6211\u4EEC\u7528\u4E00\u4E2A\u4F8B\u5B50\u6765\u5B9E\u8DF5\u4E00\u4E0B\uFF0C\u6BD4\u5982\u73B0\u5728\u6709\u4E2A\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\uFF0C\u83DC\u5355\u680F\u6709\u9996\u9875\u3001\u7528\u6237\u7BA1\u7406\u3001\u6743\u9650\u7BA1\u7406\u3001\u65B0\u95FB\u7BA1\u7406\u8FD9\u51E0\u4E2A\u6A21\u5757\uFF0C\u70B9\u51FB\u76F8\u5E94\u6A21\u5757\u4F1A\u5728\u5185\u5BB9\u533A\u663E\u793A\u9762\u5305\u5C51\u3002</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;header class=&quot;header&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	&lt;!-- \u8FD9\u91CC\u7528\u6765\u663E\u793A\u8DEF\u5F84\u4FE1\u606F --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/header&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;div class=&quot;box&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	&lt;div class=&quot;left&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		&lt;ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">			&lt;li&gt;\u9996\u9875&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">			&lt;li&gt;\u7528\u6237\u7BA1\u7406&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">			&lt;li&gt;\u6743\u9650\u7BA1\u7406&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">			&lt;li&gt;\u65B0\u95FB\u7BA1\u7406&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		&lt;/ul&gt;	</span></span>
<span class="line"><span style="color:#A6ACCD;">	&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">	&lt;div class=&quot;right&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		&lt;div class=&quot;bread&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class Sub {</span></span>
<span class="line"><span style="color:#A6ACCD;">	constructor() {</span></span>
<span class="line"><span style="color:#A6ACCD;">		this.observers = [];</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">	add(observer) {</span></span>
<span class="line"><span style="color:#A6ACCD;">		this.observers.push(observer);</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">	remove(observer) {</span></span>
<span class="line"><span style="color:#A6ACCD;">		this.observers = this.observers.filter(item =&gt; item !== observer);</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">	notify(data) {</span></span>
<span class="line"><span style="color:#A6ACCD;">		this.observers.forEach(item =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">			item.update(data);</span></span>
<span class="line"><span style="color:#A6ACCD;">		})</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">class Observer {</span></span>
<span class="line"><span style="color:#A6ACCD;">	// \u53EF\u4EE5\u7ED9\u8FD9\u4E2A\u89C2\u5BDF\u8005\u5B9A\u4E49\u4E00\u4E2A\u540D\u5B57\u65B9\u4FBF\u533A\u5206</span></span>
<span class="line"><span style="color:#A6ACCD;">	constructor(name) {</span></span>
<span class="line"><span style="color:#A6ACCD;">		this.el = document.querySelector(name);</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">	update(data) {</span></span>
<span class="line"><span style="color:#A6ACCD;">		this.el.innerHTML = data;</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">const subject = new Subject();</span></span>
<span class="line"><span style="color:#A6ACCD;">const observer1 = new Observer(&quot;.bread&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const observer2 = new Observer(&quot;.header&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">subject.add(observer1);</span></span>
<span class="line"><span style="color:#A6ACCD;">subject.add(observer2);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let oli = document.querySelectorAll(&quot;.left li&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">for(let i = 0;i &lt; oli.length;i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">	oli[i].onclick = function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">		subject.notify(this.innerHTML);</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br></div></div><p>\u4F18\u52BF\uFF1A\u76EE\u6807\u8005\u4E0E\u89C2\u5BDF\u8005\uFF0C\u529F\u80FD\u8026\u5408\u5EA6\u964D\u4F4E\uFF0C\u4E13\u6CE8\u4E8E\u81EA\u8EAB\u7684\u529F\u80FD\u903B\u8F91\uFF1B\u89C2\u5BDF\u8005\u88AB\u52A8\u63A5\u6536\u66F4\u65B0\uFF0C\u65F6\u95F4\u4E0A\u89E3\u8026\uFF0C\u5B9E\u65F6\u63A5\u6536\u76EE\u6807\u8005\u66F4\u65B0\u72B6\u6001\u3002</p><p>\u7F3A\u70B9\uFF1A\u89C2\u5BDF\u8005\u6A21\u5F0F\u867D\u7136\u5B9E\u73B0\u4E86\u5BF9\u8C61\u95F4\u4F9D\u8D56\u5173\u7CFB\u7684\u4F4E\u8026\u5408\uFF0C\u4F46\u5374\u4E0D\u80FD\u5BF9\u4E8B\u4EF6\u901A\u77E5\u8FDB\u884C\u7EC6\u5206\u7BA1\u63A7\uFF0C\u5982\u7B5B\u9009\u901A\u77E5\uFF0C\u6307\u5B9A\u4E3B\u9898\u4E8B\u4EF6\u901A\u77E5\u3002</p><p>\u8FD9\u4E2A\u4E0D\u80FD\u7EC6\u5206\u7BA1\u63A7\u662F\u4EC0\u4E48\u610F\u601D\u5462\uFF1F</p><p>\u6BD4\u5982\u4E0A\u9762\u4FA7\u8FB9\u680F\u7684\u4F8B\u5B50\u3002\u5982\u679C\u6211\u4EEC\u73B0\u5728\u8981\u5728mouseover\u7684\u65F6\u5019\u4E5F\u8981\u89E6\u53D1\uFF0C\u4F46\u662F\u6211\u4EEC\u8FD9\u79CD\u89C2\u5BDF\u8005\u6A21\u5F0F\uFF0C\u5728\u8FD9\u4E00\u6B65\u5E76\u4E0D\u80FD\u505A\u4E8B\u4EF6\u7BA1\u63A7</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">for(let i = 0;i &lt; oli.length;i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">	oli[i].onclick = function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">		subject.notify(this.innerHTML);</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u4E5F\u5C31\u662F\u8BF4\u6211\u4EEC\u8981\u60F3\u89E6\u53D1\uFF0C\u5C31\u4E00\u4E2Anotify\uFF0Cnotify\u4E4B\u540E\u5C31\u8C03\u7528\u5B83\u7684update\uFF0C\u90A3\u6709\u4EBA\u8BF4\u4E86\uFF0C\u6211\u53EF\u4EE5\u5728\u89C2\u5BDF\u8005\u548C\u76EE\u6807\u8005\u4E4B\u95F4\u591A\u52A0update1\uFF0Cnotify1\u8FD8\u9700\u8981\u7684\u8BDD\u518D\u52A0update2\uFF0Cnotify2\uFF0C\u8FD9\u6837\u8026\u5408\u5EA6\u53C8\u53D8\u9AD8\u4E86\uFF0C\u56E0\u6B64\u624D\u8BF4\u6CA1\u529E\u6CD5\u8FDB\u884C\u7EC6\u5206\u7BA1\u63A7\u3002</p><p>\u56E0\u6B64\u624D\u884D\u751F\u51FA\u4E86\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F\uFF0C\u89C2\u5BDF\u8005\u6A21\u5F0F\u548C\u4E0B\u4E00\u8282\u7684\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F\u6781\u4E3A\u76F8\u4F3C\u3002\u6240\u4EE5\u5176\u5B9E\u4E5F\u53EF\u4EE5\u8BA4\u4E3A\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F\u662F\u4E3A\u4E86\u89E3\u51B3\u89C2\u5BDF\u8005\u6A21\u5F0F\u8FD9\u79CD\u5F0A\u7AEF\u800C\u51FA\u73B0\u7684\u4E00\u79CD\u8BBE\u8BA1\u6A21\u5F0F\uFF0C\u6216\u8005\u4E5F\u53EF\u4EE5\u8BF4\u662F\u89E3\u8026\u4E4B\u540E\u7684\u89C2\u5BDF\u8005\u6A21\u5F0F\u3002</p>`,16),r=[e];function t(c,o,i,b,A,C){return a(),n("div",null,r)}const y=s(p,[["render",t]]);export{m as __pageData,y as default};
