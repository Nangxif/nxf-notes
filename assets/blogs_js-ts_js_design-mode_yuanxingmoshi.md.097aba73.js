import{_ as s,c as n,o as a,h as l}from"./app.15c3eca2.js";const m=JSON.parse('{"title":"\u6A21\u5F0F\u4E8C\u2014\u2014\u539F\u578B\u6A21\u5F0F","description":"","frontmatter":{},"headers":[],"relativePath":"blogs/js-ts/js/design-mode/yuanxingmoshi.md","lastUpdated":1720104828000}'),e={name:"blogs/js-ts/js/design-mode/yuanxingmoshi.md"},p=l(`<h1 id="\u6A21\u5F0F\u4E8C\u2014\u2014\u539F\u578B\u6A21\u5F0F" tabindex="-1">\u6A21\u5F0F\u4E8C\u2014\u2014\u539F\u578B\u6A21\u5F0F <a class="header-anchor" href="#\u6A21\u5F0F\u4E8C\u2014\u2014\u539F\u578B\u6A21\u5F0F" aria-hidden="true">#</a></h1><p>\u6211\u4EEC\u63A5\u7740\u4E0A\u4E00\u4E2A\u6A21\u5F0F\u7684\u4EE3\u7801\u3010\u6784\u9020\u5668\u6A21\u5F0F\u3011\u6765\u8BB2</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function Employee(name, age) {</span></span>
<span class="line"><span style="color:#A6ACCD;">	this.name = name;</span></span>
<span class="line"><span style="color:#A6ACCD;">	this.age = age;</span></span>
<span class="line"><span style="color:#A6ACCD;">	this.say = function (){</span></span>
<span class="line"><span style="color:#A6ACCD;">		console.log(this.name + &quot;-&quot; + this.age);</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u6211\u4EEC\u6BCF\u6B21\u5728new Employee\u7684\u65F6\u5019\uFF0Csay\u51FD\u6570\u90FD\u662F\u4E00\u6837\u7684\uFF0C\u4F46\u662F\u6BCF\u6B21\u5B9E\u4F8B\u5316\u7684\u65F6\u5019\uFF0C\u90FD\u4F1A\u968F\u7740\u4E00\u8D77\u5F00\u8F9F\u4E00\u4E2A\u5185\u5B58\u7A7A\u95F4\u6765\u5B58\u50A8say\u8FD9\u4E2A\u51FD\u6570\u3002</p><p>\u8FD9\u4E2A\u65F6\u5019\u5C31\u6709\u70B9\u6CA1\u5FC5\u8981\u4E86\uFF0C\u56E0\u4E3A\u6211\u4EEC\u65E0\u8BBAnew\u591A\u5C11\u4E2AEmployee\uFF0C\u6211\u4EEC\u8FD9\u4E2Asay\u90FD\u662F\u4E00\u6837\u7684\uFF0C\u4F46\u662F\u5F53\u6570\u636E\u91CF\u5927\u7684\u65F6\u5019\uFF0C\u5C31\u5F88\u5360\u5185\u5B58\u7A7A\u95F4\u4E86\u3002\u8FD9\u6837\u4E5F\u4E0D\u592A\u590D\u5408\u6211\u4EEC\u4EE3\u7801\u7684\u53EF\u590D\u7528\u6027\u7684\u539F\u5219\u3002\u56E0\u6B64\u6211\u4EEC\u53EF\u4EE5\u6839\u636E\u539F\u578B\u6A21\u5F0F\uFF0C\u6765\u4F18\u5316\u8FD9\u79CD\u5199\u6CD5\u3002\u51FD\u6570\u7684\u539F\u578B\u662F\u552F\u4E00\u7684\uFF0C\u5B83\u5728\u5185\u5B58\u4E2D\u53EA\u6709\u4E00\u4EFD\uFF0C\u90A3\u4E48\u5C31\u8FBE\u5230\u4E86\u6211\u4EEC\u5171\u7528\u7684\u539F\u5219\u3002</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function Employee(name, age) {</span></span>
<span class="line"><span style="color:#A6ACCD;">	this.name = name;</span></span>
<span class="line"><span style="color:#A6ACCD;">	this.age = age;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">Employee.prototype.say = function (){</span></span>
<span class="line"><span style="color:#A6ACCD;">	console.log(this.name + &quot;-&quot; + this.age);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>ES6\u51FA\u73B0\u4E4B\u540E\uFF0C\u6211\u4EEC\u6709\u4E86\u65B0\u7684\u5199\u6CD5</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class Employee {</span></span>
<span class="line"><span style="color:#A6ACCD;">	constructor(name, age) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.name = name;</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.age = age;</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">	say (){</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(this.name + &quot;-&quot; + this.age);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u8FD9\u79CD\u5199\u6CD5\u7684say\u662F\u5728Employee\u7C7B\u7684\u539F\u578B\u4E0A\u7684\u3002</p><p>\u63A5\u4E0B\u6765\u6211\u4EEC\u7528\u4E00\u4E2A\u4F8B\u5B50\u6765\u5B9E\u8DF5\u8FD9\u79CD\u8BBE\u8BA1\u6A21\u5F0F\u3002</p><p>\u5047\u8BBE\u73B0\u5728\u9875\u9762\u6709\u591A\u4E2A\u9009\u9879\u5361\uFF0C\u6216\u8005\u9875\u9762\u4E2D\u6709\u591A\u4E2A\u8F6E\u64AD\u3002\u9875\u9762\u4E0A\u6BCF\u4E2A\u9009\u9879\u5361\u7684tab\u70B9\u51FB\u7684\u65F6\u5019\u6211\u4EEC\u9700\u8981\u7ED1\u5B9A\u70B9\u51FB\u4E8B\u4EF6\uFF0C\u70B9\u51FB\u4E4B\u540E\u4E0B\u9762\u663E\u793A\u76F8\u5E94\u7684content\u5185\u5BB9\u3002\u5982\u679C\u6211\u4EEC\u6309\u7167\u9762\u5411\u5BF9\u8C61\u7684\u601D\u7EF4\u65B9\u5F0F\u53BB\u505A\uFF0C\u6211\u5355\u72EC\u521B\u5EFA\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u5BF9\u8C61\u91CC\u9762\u662F\u4E0D\u662F\u5F97\u6709\u8FD9\u51E0\u4E2A\u9009\u9879\u5361\u6309\u94AE\uFF0C\u8FD8\u6709\u4E0B\u9762\u5BF9\u5E94\u7684\u5185\u5BB9\uFF0C\u8FD8\u5F97\u6709\u65B9\u6CD5\u8BA9\u5B83\u70B9\u5B8C\u4E4B\u540E\u80FD\u591F\u5B8C\u6210\u5207\u6362\u3002\u4E00\u4E2A\u5BF9\u8C61\u91CC\u9762\u5C31\u8981\u6709\u8FD9\u4E2A\u4E1C\u897F\uFF0C\u90A3\u4E48\u6211\u4EEC\u6709\u591A\u4E2A\u9009\u9879\u5361\u7684\u65F6\u5019\uFF0C\u5C82\u4E0D\u662F\u8981\u521B\u5EFA\u591A\u4E2A\u5BF9\u8C61\uFF1F\u8FD9\u663E\u7136\u662F\u4E0D\u5408\u7406\u7684\u3002\u6240\u4EE5\u4E0B\u9762\u6211\u4EEC\u7528\u539F\u578B\u6A21\u5F0F\u7684\u5199\u6CD5\u6765\u5B9E\u73B0\u8FD9\u4E2A\u529F\u80FD\u3002</p><p><strong>ES5\u5199\u6CD5</strong></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;div class=&quot;container1&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	&lt;ul class=&quot;header&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		&lt;li class=&quot;active&quot;&gt;1&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		&lt;li&gt;2&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		&lt;li&gt;3&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		&lt;li&gt;4&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		&lt;li&gt;5&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	&lt;/ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	&lt;ul class=&quot;box&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		&lt;li class=&quot;active&quot;&gt;111&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		&lt;li&gt;222&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		&lt;li&gt;333&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		&lt;li&gt;444&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		&lt;li&gt;555&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	&lt;/ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;div class=&quot;container2&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	&lt;ul class=&quot;header&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		&lt;li class=&quot;active&quot;&gt;1&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		&lt;li&gt;2&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		&lt;li&gt;3&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		&lt;li&gt;4&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		&lt;li&gt;5&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	&lt;/ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	&lt;ul class=&quot;box&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		&lt;li class=&quot;active&quot;&gt;111&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		&lt;li&gt;222&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		&lt;li&gt;333&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		&lt;li&gt;444&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		&lt;li&gt;555&lt;/li&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	&lt;/ul&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function Tabs(selector, type){</span></span>
<span class="line"><span style="color:#A6ACCD;">	this.selector = document.querySelector(selector);</span></span>
<span class="line"><span style="color:#A6ACCD;">	this.headerItems = this.selector.querySelectorAll(&quot;.header li&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">	this.boxItems = this.selector.querySelectorAll(&quot;.box li&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">	this.type = type;</span></span>
<span class="line"><span style="color:#A6ACCD;">	this.change();</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">Tabs.prototype.change = function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">	for(let i = 0;i &lt; this.headerItems.length;i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">		this.headerItems[i].addEventListener(this.type,() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">			for(let m = 0;m &lt; this.headerItems.length;m++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">				this.headerItems[m].classList.remove(&quot;active&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">				this.boxItems[m].classList.remove(&quot;active&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">			}</span></span>
<span class="line"><span style="color:#A6ACCD;">			this.headerItems[i].classList.add(&quot;active&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">			this.boxItems[i].classList.add(&quot;active&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">		},false);</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">new Tabs(&quot;.container1&quot;, &quot;click&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">new Tabs(&quot;.container2&quot;, &quot;mouseover&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p><strong>ES6\u5199\u6CD5</strong></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class Tabs{</span></span>
<span class="line"><span style="color:#A6ACCD;">	constructor(selector, type) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.selector = document.querySelector(selector);</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.headerItems = this.selector.querySelectorAll(&quot;.header li&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.boxItems = this.selector.querySelectorAll(&quot;.box li&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.type = type;</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.change();</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">	change() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        for(let i = 0;i &lt; this.headerItems.length;i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.headerItems[i].addEventListener(this.type,() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                for(let m = 0;m &lt; this.headerItems.length;m++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    this.headerItems[m].classList.remove(&quot;active&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">                    this.boxItems[m].classList.remove(&quot;active&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">                this.headerItems[i].classList.add(&quot;active&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">                this.boxItems[i].classList.add(&quot;active&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">            },false);</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">new Tabs(&quot;.container1&quot;, &quot;click&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">new Tabs(&quot;.container2&quot;, &quot;mouseover&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div>`,16),t=[p];function c(r,o,i,b,u,A){return a(),n("div",null,t)}const y=s(e,[["render",c]]);export{m as __pageData,y as default};
