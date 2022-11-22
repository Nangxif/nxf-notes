import{_ as s,c as n,o as a,h as e}from"./app.102f7a7e.js";const C=JSON.parse('{"title":"\u6A21\u5F0F\u56DB\u2014\u2014\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F","description":"","frontmatter":{},"headers":[],"relativePath":"blogs/js-ts/js/design-mode/chouxianggongchangmoshi.md","lastUpdated":1669132130000}'),l={name:"blogs/js-ts/js/design-mode/chouxianggongchangmoshi.md"},p=e(`<h1 id="\u6A21\u5F0F\u56DB\u2014\u2014\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F" tabindex="-1">\u6A21\u5F0F\u56DB\u2014\u2014\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F <a class="header-anchor" href="#\u6A21\u5F0F\u56DB\u2014\u2014\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F" aria-hidden="true">#</a></h1><p>\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F\u5E76\u4E0D\u76F4\u63A5\u751F\u6210\u5B9E\u4F8B\uFF0C\u800C\u662F\u7528\u4E8E\u5BF9\u4EA7\u54C1\u7C7B\u7C07\u7684\u521B\u5EFA\u3002</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class User {</span></span>
<span class="line"><span style="color:#A6ACCD;">	constructor(name) {</span></span>
<span class="line"><span style="color:#A6ACCD;">		this.name = name;</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">	welcome() {</span></span>
<span class="line"><span style="color:#A6ACCD;">		console.log(&quot;\u6B22\u8FCE\u56DE\u6765&quot;,this.name);</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">	dataShow() {</span></span>
<span class="line"><span style="color:#A6ACCD;">		throw new Error(&quot;\u62BD\u8C61\u65B9\u6CD5\u4E0D\u5141\u8BB8\u76F4\u63A5\u8C03\u7528&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">class Editor extend User {</span></span>
<span class="line"><span style="color:#A6ACCD;">	constructor(name) {</span></span>
<span class="line"><span style="color:#A6ACCD;">		super(name);</span></span>
<span class="line"><span style="color:#A6ACCD;">		this.role = &quot;editor&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">		this.pages = [&quot;home&quot;, &quot;news-manage&quot;];</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">	dataShow() {</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>`,3),o=[p];function t(r,c,i,b,u,A){return a(),n("div",null,o)}const d=s(l,[["render",t]]);export{C as __pageData,d as default};
