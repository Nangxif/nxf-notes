import{_ as s,c as n,o as a,h as l}from"./app.bc6e129d.js";const y=JSON.parse('{"title":"\u6A21\u5F0F\u5341\u2014\u2014\u4EE3\u7406\u6A21\u5F0F","description":"","frontmatter":{},"headers":[],"relativePath":"blogs/js-ts/js/design-mode/dailimoshi.md","lastUpdated":1718897146000}'),p={name:"blogs/js-ts/js/design-mode/dailimoshi.md"},e=l(`<h1 id="\u6A21\u5F0F\u5341\u2014\u2014\u4EE3\u7406\u6A21\u5F0F" tabindex="-1">\u6A21\u5F0F\u5341\u2014\u2014\u4EE3\u7406\u6A21\u5F0F <a class="header-anchor" href="#\u6A21\u5F0F\u5341\u2014\u2014\u4EE3\u7406\u6A21\u5F0F" aria-hidden="true">#</a></h1><p>\u4EE3\u7406\u6A21\u5F0F\uFF08Proxy\uFF09\uFF0C\u4E3A\u5176\u4ED6\u5BF9\u8C61\u63D0\u4F9B\u4E00\u79CD\u4EE3\u7406\u4EE5\u63A7\u5236\u5BF9\u8FD9\u4E2A\u5BF9\u8C61\u7684\u8BBF\u95EE\u3002</p><p>\u4EE3\u7406\u6A21\u5F0F\u4F7F\u5F97\u4EE3\u7406\u5BF9\u8C61\u63A7\u5236\u5177\u4F53\u5BF9\u8C61\u7684\u5F15\u7528\u3002\u4EE3\u7406\u51E0\u4E4E\u53EF\u4EE5\u662F\u4EFB\u4F55\u5BF9\u8C61\uFF1A\u6587\u4EF6\uFF0C\u8D44\u6E90\uFF0C\u5185\u5B58\u4E2D\u7684\u5BF9\u8C61\uFF0C\u6216\u8005\u662F\u4E00\u4E9B\u96BE\u4EE5\u590D\u5236\u7684\u4E1C\u897F\u3002</p><p>\u6211\u4EEC\u6765\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u6BD4\u5982\u660E\u661F\u662F\u4E0D\u53EF\u4EE5\u81EA\u5DF1\u63A5\u620F\u7684\uFF0C\u9700\u8981\u7ECF\u7EAA\u4EBA\u8DDF\u5BF9\u65B9\u516C\u53F8\u8C08\u59A5\u4E86\uFF0C\u4F4E\u4E8E\u67D0\u4E2A\u4EF7\u683C\uFF0C\u4E0D\u80FD\u63A5\uFF0C\u9AD8\u4E8E\u67D0\u4E2A\u4EF7\u683C\u624D\u80FD\u63A5\u3002</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class Star {</span></span>
<span class="line"><span style="color:#A6ACCD;">	play() {</span></span>
<span class="line"><span style="color:#A6ACCD;">		console.log(&quot;\u6F14\u620F&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class StarProxy {</span></span>
<span class="line"><span style="color:#A6ACCD;">	constructor() {</span></span>
<span class="line"><span style="color:#A6ACCD;">		this.superStar = new Star();</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">	talk(price) {</span></span>
<span class="line"><span style="color:#A6ACCD;">		if(price &gt;= 1000) {</span></span>
<span class="line"><span style="color:#A6ACCD;">			this.superStar.play();</span></span>
<span class="line"><span style="color:#A6ACCD;">		}else {</span></span>
<span class="line"><span style="color:#A6ACCD;">			throw new Error(&quot;\u4EF7\u94B1\u4E0D\u5408\u9002&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let jr = new StarProxy();</span></span>
<span class="line"><span style="color:#A6ACCD;">jr.talk(1000);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>\u4EE3\u7406\u6A21\u5F0F\u5E76\u4E0D\u662F\u8BF4\u8981\u9650\u5236\u6211\u4EEC\u53BB\u8BBF\u95EE\u6E90\u5BF9\u8C61\uFF0C\u800C\u4EC5\u4EC5\u662F\u4EE3\u7406\u7684\u529F\u80FD\u3002</p><p>\u5BF9\u4E8E\u8FD9\u79CD\u6A21\u5F0F\uFF0C\u540E\u6765ES6\u63D0\u4F9B\u4E86\u4E00\u4E2A\u65B0\u7684api\u53EF\u4EE5\u4F9B\u6211\u4EEC\u5B9E\u73B0\u8FD9\u79CD\u6A21\u5F0F\uFF0C\u4E5F\u5C31\u662FProxy\uFF0C\u5305\u62ECvue3\u90FD\u662F\u4F7F\u7528\u8FD9\u4E2Aapi\u3002</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">var star = {</span></span>
<span class="line"><span style="color:#A6ACCD;">	name: &quot;nangxi&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">	workprice: 1000</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">let proxy = new Proxy(star, {</span></span>
<span class="line"><span style="color:#A6ACCD;">	get(target, key) {</span></span>
<span class="line"><span style="color:#A6ACCD;">		if(key === &quot;workprice&quot;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">			console.log(&quot;\u8BBF\u95EE\u4E86&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;">		return target[key];</span></span>
<span class="line"><span style="color:#A6ACCD;">	},</span></span>
<span class="line"><span style="color:#A6ACCD;">	set(target, key, value) {</span></span>
<span class="line"><span style="color:#A6ACCD;">		if(key === &quot;workprice&quot;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">			console.log(&quot;\u8BBE\u7F6E\u4E86&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">			if(value &gt; 1000) {</span></span>
<span class="line"><span style="color:#A6ACCD;">				console.log(&quot;\u53EF\u4EE5\u5408\u4F5C&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">			} else {</span></span>
<span class="line"><span style="color:#A6ACCD;">				throw new Error(&quot;\u4EF7\u94B1\u4E0D\u5408\u9002&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">			}</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">proxy.workprice = 1000;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>\u63A5\u4E0B\u6765\u6211\u4EEC\u7B80\u5355\u5B9E\u73B0\u4E00\u4E2Avue\u7684\u54CD\u5E94\u5F0F</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;div id=&quot;box&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">let vueObj = {};</span></span>
<span class="line"><span style="color:#A6ACCD;">let proxy = new Proxy(vueObj, {</span></span>
<span class="line"><span style="color:#A6ACCD;">	get(target, key) {</span></span>
<span class="line"><span style="color:#A6ACCD;">		console.log(&quot;get&quot;, target[key]);</span></span>
<span class="line"><span style="color:#A6ACCD;">		return target[key];</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">	set(target, key, value) {</span></span>
<span class="line"><span style="color:#A6ACCD;">		console.log(&quot;set&quot;, target, key, value);</span></span>
<span class="line"><span style="color:#A6ACCD;">		if(key === &quot;data&quot;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">			box.innerHTML = value;</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;">		target[key] = value;</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;">vueObj.data = &quot;222&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>`,10),r=[e];function t(c,o,i,b,A,C){return a(),n("div",null,r)}const m=s(p,[["render",t]]);export{y as __pageData,m as default};
