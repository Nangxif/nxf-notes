import{_ as s,c as n,o as a,h as l}from"./app.1fc04290.js";const d=JSON.parse('{"title":"\u6A21\u5F0F\u5341\u4E94\u2014\u2014\u7EC4\u5408\u6A21\u5F0F","description":"","frontmatter":{},"headers":[],"relativePath":"blogs/js-ts/js/design-mode/zuhemoshi.md","lastUpdated":1681543905000}'),e={name:"blogs/js-ts/js/design-mode/zuhemoshi.md"},p=l(`<h1 id="\u6A21\u5F0F\u5341\u4E94\u2014\u2014\u7EC4\u5408\u6A21\u5F0F" tabindex="-1">\u6A21\u5F0F\u5341\u4E94\u2014\u2014\u7EC4\u5408\u6A21\u5F0F <a class="header-anchor" href="#\u6A21\u5F0F\u5341\u4E94\u2014\u2014\u7EC4\u5408\u6A21\u5F0F" aria-hidden="true">#</a></h1><blockquote><p>\u7EC4\u5408\u6A21\u5F0F\u5728\u5BF9\u8C61\u95F4\u5F62\u6210\u6811\u5F62\u7ED3\u6784\uFF1B</p><p>\u7EC4\u5408\u6A21\u5F0F\u4E2D\u57FA\u672C\u5BF9\u8C61\u548C\u7EC4\u5408\u5BF9\u8C61\u88AB\u4E00\u81F4\u5BF9\u5F85\uFF1B</p><p>\u65E0\u9700\u5173\u5FC3\u5BF9\u8C61\u6709\u591A\u5C11\u5C42\uFF0C\u8C03\u7528\u65F6\u53EA\u9700\u5728\u6839\u90E8\u8FDB\u884C\u8C03\u7528\u3002</p></blockquote><p>\u5B83\u5728\u6211\u4EEC\u7684\u6811\u5F62\u7ED3\u6784\u7684\u95EE\u9898\u4E2D\uFF0C\u6A21\u7CCA\u4E86\u7B80\u5355\u5143\u7D20\u548C\u590D\u6742\u5143\u7D20\u7684\u6982\u5FF5\u3002\u5BA2\u6237\u7A0B\u5E8F\u53EF\u4EE5\u50CF\u5904\u7406\u7B80\u5355\u5143\u7D20\u4E00\u6837\u6765\u5904\u7406\u590D\u6742\u5143\u7D20\uFF0C\u4ECE\u800C\u4F7F\u5F97\u5BA2\u6237\u7A0B\u5E8F\u4E0E\u590D\u6742\u5143\u7D20\u5185\u90E8\u7684\u7ED3\u6784\u89E3\u8026\u3002</p><p>\u6211\u4EEC\u73B0\u5728\u6765\u5199\u4E00\u6BB5\u904D\u5386\u6587\u4EF6\u5939\u4EE5\u53CA\u904D\u5386\u6587\u4EF6\u5939\u91CC\u9762\u7684\u6587\u4EF6\u7684\u7A0B\u5E8F</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const Folder = function(folder) {</span></span>
<span class="line"><span style="color:#A6ACCD;">	this.folder = folder;</span></span>
<span class="line"><span style="color:#A6ACCD;">	this.lists = [];</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">Folder.prototype.add = function(res) {</span></span>
<span class="line"><span style="color:#A6ACCD;">	this.lists.push(res);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">Folder.prototype.scan = function(res) {</span></span>
<span class="line"><span style="color:#A6ACCD;">	console.log(\`\u5F00\u59CB\u626B\u63CF\u6587\u4EF6\u5939\uFF1A\${this.folder}\`);</span></span>
<span class="line"><span style="color:#A6ACCD;">	for(let index = 0;index &lt; this.lists.length; index++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">		this.lists[index].scan();</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">const File = function(file) {</span></span>
<span class="line"><span style="color:#A6ACCD;">	this.file = file;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">File.prototype.scan = function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">	console.log(\`\u5F00\u59CB\u626B\u63CF\u6587\u4EF6\uFF1A\${this.file}\`);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const folder = new Folder(&quot;root&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const folder1 = new Folder(&quot;html&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const folder2 = new Folder(&quot;js&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const file1 = new File(&quot;html4&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const file2 = new File(&quot;html5&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const file3 = new File(&quot;es5&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const file4 = new File(&quot;es6&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">folder.add(folder1);</span></span>
<span class="line"><span style="color:#A6ACCD;">folder.add(folder2);</span></span>
<span class="line"><span style="color:#A6ACCD;">folder1.add(file1);</span></span>
<span class="line"><span style="color:#A6ACCD;">folder1.add(file2);</span></span>
<span class="line"><span style="color:#A6ACCD;">folder2.add(file3);</span></span>
<span class="line"><span style="color:#A6ACCD;">folder2.add(file4);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">folder.scan();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div>`,5),o=[p];function r(c,t,i,b,A,C){return a(),n("div",null,o)}const m=s(e,[["render",r]]);export{d as __pageData,m as default};
