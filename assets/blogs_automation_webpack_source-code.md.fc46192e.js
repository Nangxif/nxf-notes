import{_ as a,c as l,b as p,h as s,r as e,o as r}from"./app.ccee9938.js";const d=JSON.parse('{"title":"\u624B\u5199\u8FF7\u4F60\u7248webpack","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u8C03\u8BD5webpack","slug":"\u4E00\u3001\u8C03\u8BD5webpack","link":"#\u4E00\u3001\u8C03\u8BD5webpack","children":[{"level":3,"title":"1.\u901A\u8FC7chrome\u8C03\u8BD5","slug":"_1-\u901A\u8FC7chrome\u8C03\u8BD5","link":"#_1-\u901A\u8FC7chrome\u8C03\u8BD5","children":[]},{"level":3,"title":"2.\u901A\u8FC7\u6267\u884C\u547D\u4EE4\u8C03\u8BD5","slug":"_2-\u901A\u8FC7\u6267\u884C\u547D\u4EE4\u8C03\u8BD5","link":"#_2-\u901A\u8FC7\u6267\u884C\u547D\u4EE4\u8C03\u8BD5","children":[]}]},{"level":2,"title":"\u4E8C\u3001tapable.js","slug":"\u4E8C\u3001tapable-js","link":"#\u4E8C\u3001tapable-js","children":[]},{"level":2,"title":"\u4E09\u3001webpack\u6267\u884C\u6D41\u7A0B","slug":"\u4E09\u3001webpack\u6267\u884C\u6D41\u7A0B","link":"#\u4E09\u3001webpack\u6267\u884C\u6D41\u7A0B","children":[]},{"level":2,"title":"\u56DB\u3001\u4EE3\u7801\u6267\u884C\u6D41\u7A0B","slug":"\u56DB\u3001\u4EE3\u7801\u6267\u884C\u6D41\u7A0B","link":"#\u56DB\u3001\u4EE3\u7801\u6267\u884C\u6D41\u7A0B","children":[]},{"level":2,"title":"\u4E94\u3001\u4EE3\u7801\u5B9E\u73B0","slug":"\u4E94\u3001\u4EE3\u7801\u5B9E\u73B0","link":"#\u4E94\u3001\u4EE3\u7801\u5B9E\u73B0","children":[]},{"level":2,"title":"\u516D\u3001Q&A","slug":"\u516D\u3001q-a","link":"#\u516D\u3001q-a","children":[]}],"relativePath":"blogs/automation/webpack/source-code.md","lastUpdated":1714835970000}'),c={name:"blogs/automation/webpack/source-code.md"},o=s(`<h1 id="\u624B\u5199\u8FF7\u4F60\u7248webpack" tabindex="-1">\u624B\u5199\u8FF7\u4F60\u7248webpack <a class="header-anchor" href="#\u624B\u5199\u8FF7\u4F60\u7248webpack" aria-hidden="true">#</a></h1><h2 id="\u4E00\u3001\u8C03\u8BD5webpack" tabindex="-1">\u4E00\u3001\u8C03\u8BD5webpack <a class="header-anchor" href="#\u4E00\u3001\u8C03\u8BD5webpack" aria-hidden="true">#</a></h2><h3 id="_1-\u901A\u8FC7chrome\u8C03\u8BD5" tabindex="-1">1.\u901A\u8FC7chrome\u8C03\u8BD5 <a class="header-anchor" href="#_1-\u901A\u8FC7chrome\u8C03\u8BD5" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">node --inspect-brk ./node_modules/webpack-cli/bin/cli.js</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u7136\u540E\u6253\u5F00Chrome\u6D4F\u89C8\u5668\u63A7\u5236\u53F0\u5C31\u53EF\u4EE5\u8C03\u8BD5\u4E86</p><h3 id="_2-\u901A\u8FC7\u6267\u884C\u547D\u4EE4\u8C03\u8BD5" tabindex="-1">2.\u901A\u8FC7\u6267\u884C\u547D\u4EE4\u8C03\u8BD5 <a class="header-anchor" href="#_2-\u901A\u8FC7\u6267\u884C\u547D\u4EE4\u8C03\u8BD5" aria-hidden="true">#</a></h3><ul><li>\u6253\u5F00\u5DE5\u7A0B\u76EE\u5F55\uFF0C\u70B9\u51FB\u8C03\u8BD5\u6309\u94AE\uFF0C\u518D\u70B9\u51FB\u5C0F\u9F7F\u8F6E\u7684\u914D\u7F6E\u6309\u94AE\uFF0C\u7CFB\u7EDF\u5C31\u4F1A\u751F\u6210lanuch.json\u914D\u7F6E\u6587\u4EF6</li><li>\u4FEE\u6539\u597D\u4E86\u4E4B\u540E\u76F4\u63A5\u70B9\u51FBF5\u5C31\u53EF\u4EE5\u542F\u52A8\u8C03\u8BD5</li></ul><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// .vscode/lanuch.json</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	&quot;version&quot;: &quot;0.2.0&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">	&quot;configurations&quot;: [{</span></span>
<span class="line"><span style="color:#A6ACCD;">		&quot;type&quot;: &quot;node&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">		&quot;request&quot;: &quot;lanuch&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">		&quot;name&quot;: &quot;debug webpack&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">		&quot;cmd&quot;: &quot;\${workspaceFolder}&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">		&quot;program&quot;: &quot;\${workspaceFolder}/node_modules/webpack-cli/bin/cli.js&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	}]</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="\u4E8C\u3001tapable-js" tabindex="-1">\u4E8C\u3001tapable.js <a class="header-anchor" href="#\u4E8C\u3001tapable-js" aria-hidden="true">#</a></h2><ul><li><p>tapable\u662F\u4E00\u4E2A\u7C7B\u4F3C\u4E8ENode.js\u4E2D\u7684EventEmitter\u7684\u5E93\uFF0C\u4F46\u66F4\u4E13\u6CE8\u4E8E\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u7684\u89E6\u53D1\u548C\u5904\u7406</p></li><li><p>webpack\u901A\u8FC7tapable\u5C06\u5B9E\u73B0\u4E0E\u6D41\u7A0B\u89E3\u8026\uFF0C\u6240\u6709\u5177\u4F53\u5B9E\u73B0\u901A\u8FC7\u63D2\u4EF6\u7684\u5F62\u5F0F\u5B58\u5728</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class SyncHook {</span></span>
<span class="line"><span style="color:#A6ACCD;">	constructor() {</span></span>
<span class="line"><span style="color:#A6ACCD;">		this.taps = [];</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">	tap(name, fn) {</span></span>
<span class="line"><span style="color:#A6ACCD;">		this.taps.push(fn);</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">	call() {</span></span>
<span class="line"><span style="color:#A6ACCD;">		this.taps.forEach((tap) =&gt; tap())</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">let hook = new SyncHook();</span></span>
<span class="line"><span style="color:#A6ACCD;">hook.tap(&quot;some name&quot;, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">	console.log(&quot;some name&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">class Plugin {</span></span>
<span class="line"><span style="color:#A6ACCD;">	apply() {</span></span>
<span class="line"><span style="color:#A6ACCD;">		hook.tap(&quot;Plugin&quot;, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">			console.log(&quot;Plugin&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">		})</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">new Plugin().apply();</span></span>
<span class="line"><span style="color:#A6ACCD;">hook.call();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div></li></ul><h2 id="\u4E09\u3001webpack\u6267\u884C\u6D41\u7A0B" tabindex="-1">\u4E09\u3001webpack\u6267\u884C\u6D41\u7A0B <a class="header-anchor" href="#\u4E09\u3001webpack\u6267\u884C\u6D41\u7A0B" aria-hidden="true">#</a></h2><ol><li>\u521D\u59CB\u5316\u53C2\u6570\uFF0C\u4ECE\u914D\u7F6E\u6587\u4EF6\u548CShell\u8BED\u53E5\u4E2D\u8BFB\u53D6\u5E76\u5408\u5E76\u53C2\u6570\uFF0C\u5F97\u51FA\u6700\u7EC8\u7684\u914D\u7F6E\u5BF9\u8C61</li><li>\u7528\u4E0A\u4E00\u6B65\u5F97\u5230\u7684\u53C2\u6570\u521D\u59CB\u5316Compiler\u5BF9\u8C61</li><li>\u52A0\u8F7D\u6240\u6709\u914D\u7F6E\u7684\u63D2\u4EF6</li><li>\u6267\u884C\u5BF9\u8C61\u7684run\u65B9\u6CD5\u5F00\u59CB\u6267\u884C\u7F16\u8BD1</li><li>\u6839\u636E\u914D\u7F6E\u4E2D\u7684entry\u627E\u51FA\u5165\u53E3\u6587\u4EF6</li><li>\u4ECE\u5165\u53E3\u6587\u4EF6\u51FA\u53D1\uFF0C\u8C03\u7528\u6240\u6709\u914D\u7F6E\u7684loader\u5BF9\u6A21\u5757\u8FDB\u884C\u7F16\u8BD1</li><li>\u518D\u627E\u51FA\u8BE5\u6A21\u5757\u4F9D\u8D56\u7684\u6A21\u5757\uFF0C\u518D\u9012\u5F52\u672C\u6B65\u9AA4\u76F4\u5230\u6240\u6709\u5165\u53E3\u4F9D\u8D56\u7684\u6587\u4EF6\u90FD\u7ECF\u8FC7\u4E86\u672C\u6B65\u9AA4\u7684\u5904\u7406</li><li>\u6839\u636E\u5165\u53E3\u548C\u6A21\u5757\u4E4B\u95F4\u7684\u4F9D\u8D56\u5173\u7CFB\uFF0C\u7EC4\u88C5\u6210\u4E00\u4E2A\u4E2A\u5305\u542B\u591A\u4E2A\u6A21\u5757\u7684chunk</li><li>\u518D\u628A\u6BCF\u4E2Achunk\u8F6C\u6362\u6210\u4E00\u4E2A\u5355\u72EC\u7684\u6587\u4EF6\u52A0\u5165\u5230\u8F93\u51FA\u5217\u8868</li><li>\u5728\u786E\u5B9A\u597D\u8F93\u51FA\u5185\u5BB9\u540E\uFF0C\u6839\u636E\u914D\u7F6E\u786E\u5B9A\u8F93\u51FA\u5230\u8DEF\u5F84\u548C\u6587\u4EF6\u540D\uFF0C\u628A\u6587\u4EF6\u5185\u5BB9\u5199\u5165\u5230\u6587\u4EF6\u7CFB\u7EDF</li><li>\u4EE5\u4E0A\u8FC7\u7A0B\u4E2D\uFF0Cwebpack\u4F1A\u5728\u7279\u5B9A\u7684\u65F6\u95F4\u70B9\u5E7F\u64AD\u51FA\u7279\u5B9A\u7684\u4E8B\u4EF6\uFF0C\u63D2\u4EF6\u5728\u76D1\u542C\u5230\u611F\u5174\u8DA3\u7684\u4E8B\u4EF6\u540E\u4F1A\u6267\u884C\u7279\u5B9A\u7684\u903B\u8F91\uFF0C\u5E76\u4E14\u63D2\u4EF6\u53EF\u4EE5\u8C03\u7528webpack\u63D0\u4F9B\u7684api\u6539\u53D8webpack\u7684\u8FD0\u884C\u7ED3\u679C</li></ol><h2 id="\u56DB\u3001\u4EE3\u7801\u6267\u884C\u6D41\u7A0B" tabindex="-1">\u56DB\u3001\u4EE3\u7801\u6267\u884C\u6D41\u7A0B <a class="header-anchor" href="#\u56DB\u3001\u4EE3\u7801\u6267\u884C\u6D41\u7A0B" aria-hidden="true">#</a></h2>`,13),i=s(`<h2 id="\u4E94\u3001\u4EE3\u7801\u5B9E\u73B0" tabindex="-1">\u4E94\u3001\u4EE3\u7801\u5B9E\u73B0 <a class="header-anchor" href="#\u4E94\u3001\u4EE3\u7801\u5B9E\u73B0" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// \u5165\u53E3\u6587\u4EF6index.js</span></span>
<span class="line"><span style="color:#A6ACCD;">const Compiler = require(&#39;./compiler&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function  webpack(options) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 1\u3001\u521D\u59CB\u5316\u53C2\u6570\uFF0C\u4ECE\u914D\u7F6E\u6587\u4EF6\u548C Shell \u8BED\u53E5\u4E2D\u8BFB\u53D6\u53C2\u6570\uFF0C\u5F97\u51FA\u6700\u7EC8\u7684\u914D\u7F6E\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#A6ACCD;">  const argv = process.argv.slice(2);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const shellOpions = argv.reduce((shellOpion, option) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const [key, value] = option.split(&#39;=&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    shellOpion[key.slice(2)] = value;</span></span>
<span class="line"><span style="color:#A6ACCD;">    return shellOpion</span></span>
<span class="line"><span style="color:#A6ACCD;">  }, {});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const finalOptions = {...options, ...shellOpions};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // 2\u3001\u7528\u4E0A\u4E00\u6B65\u5F97\u5230\u7684\u53C2\u6570 \u521D\u59CB\u5316 compiler \u5BF9\u8C61</span></span>
<span class="line"><span style="color:#A6ACCD;">  const compiler = new Compiler(finalOptions);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // 3\u3001\u52A0\u8F7D\u6240\u6709\u914D\u7F6E\u7684\u63D2\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">  const { plugins } = finalOptions;</span></span>
<span class="line"><span style="color:#A6ACCD;">  plugins.forEach((plugin) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    plugin.apply(compiler)</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return compiler;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">module.exports = webpack;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// compiler.js</span></span>
<span class="line"><span style="color:#A6ACCD;">const { SyncHook } = require(&#39;tapable&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const path  = require(&#39;path&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const fs = require(&#39;fs&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const Compilation = require(&#39;./compilation&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/**</span></span>
<span class="line"><span style="color:#A6ACCD;"> * \u4EE3\u8868\u6574\u4E2A\u7F16\u8BD1\u5BF9\u8C61\uFF0C\u8D1F\u8D23\u6574\u4E2A\u7F16\u8BD1\u7684\u8FC7\u7A0B\uFF0C\u91CC\u9762\u4F1A\u4FDD\u5B58\u6240\u6709\u7F16\u8BD1\u7684\u914D\u7F6E\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#A6ACCD;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;">class Compiler {</span></span>
<span class="line"><span style="color:#A6ACCD;">  constructor(options) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.options = options;</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u4FDD\u5B58\u5F53\u524D Compiler \u4E0A\u9762\u6240\u6709\u7684\u94A9\u5B50</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.hooks = {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u5F00\u59CB\u7F16\u8BD1\u65F6\u89E6\u53D1</span></span>
<span class="line"><span style="color:#A6ACCD;">      run: new SyncHook(),</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u7F16\u8BD1\u7ED3\u675F\u65F6\u89E6\u53D1</span></span>
<span class="line"><span style="color:#A6ACCD;">      done: new SyncHook(),</span></span>
<span class="line"><span style="color:#A6ACCD;">      compilation: new SyncHook([&#39;chunk&#39;, &#39;filename&#39;])</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  run = (callback) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u2460\u3001\u5F00\u59CB\u7F16\u8BD1</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.hooks.run.call();</span></span>
<span class="line"><span style="color:#A6ACCD;">    const _this = this;</span></span>
<span class="line"><span style="color:#A6ACCD;">    function onCompiled(err, stats, fileDependencies) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 10\u3001\u5728\u786E\u5B9A\u597D\u8F93\u51FA\u5185\u5BB9\u540E\uFF0C\u6839\u636E\u914D\u7F6E\u786E\u5B9A\u8F93\u51FA\u7684\u8DEF\u5F84\u548C\u6587\u4EF6\u540D\uFF0C\u628A\u6587\u4EF6\u5199\u5165\u5230\u6587\u4EF6\u7CFB\u7EDF</span></span>
<span class="line"><span style="color:#A6ACCD;">      for (const filename in stats.assets) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        const filePath = path.join(_this.options.output.path, filename);</span></span>
<span class="line"><span style="color:#A6ACCD;">        fs.writeFileSync(filePath, stats.assets[filename], &#39;utf8&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      callback(null, {</span></span>
<span class="line"><span style="color:#A6ACCD;">        toJson: () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          return stats;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      })</span></span>
<span class="line"><span style="color:#A6ACCD;">      fileDependencies.forEach((fileDependencie) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        fs.watch(fileDependencie, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          _this.compile(onCompiled);</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">      })</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u2461\u3001\u7F16\u8BD1\u8FC7\u7A0B</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.compile(onCompiled);</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u2462\u3001\u7ED3\u675F\u7F16\u8BD1</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.hooks.done.call();</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  compile = (onCompiled) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u6BCF\u6B21\u5F00\u542F\u4E00\u6B21\u65B0\u7684\u7F16\u8BD1\uFF0C\u90FD\u4F1A\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684 Compilation \u7C7B\u7684\u5B9E\u4F8B</span></span>
<span class="line"><span style="color:#A6ACCD;">    const compilation = new Compilation(this.options);</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.hooks.compilation.call(compilation)</span></span>
<span class="line"><span style="color:#A6ACCD;">    compilation.build(onCompiled);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">module.exports = Compiler;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br></div></div><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// compilcation.js</span></span>
<span class="line"><span style="color:#A6ACCD;">const path = require(&quot;path&quot;).posix;</span></span>
<span class="line"><span style="color:#A6ACCD;">const fs = require(&quot;fs&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const parser = require(&quot;@babel/parser&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const traverse = require(&quot;@babel/traverse&quot;).default;</span></span>
<span class="line"><span style="color:#A6ACCD;">const generator = require(&quot;@babel/generator&quot;).default;</span></span>
<span class="line"><span style="color:#A6ACCD;">const types = require(&quot;@babel/types&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const { SyncHook } = require(&quot;tapable&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const baseDir = toUnixPath(process.cwd());</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function toUnixPath(filePath) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return filePath.replace(/\\\\/g, &quot;/&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class Compilation {</span></span>
<span class="line"><span style="color:#A6ACCD;">  constructor(options) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.options = options;</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5F53\u524D\u7F16\u8BD1\u4F9D\u8D56\u7684\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u6240\u6709\u6D89\u53CA\u5230\u7684\u6587\u4EF6\u7684\u7EDD\u5BF9\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.fileDependencies = [];</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u672C\u6B21\u7F16\u8BD1\u7684\u6240\u6709\u6A21\u5757</span></span>
<span class="line"><span style="color:#A6ACCD;">    /**</span></span>
<span class="line"><span style="color:#A6ACCD;">     * module\u7684\u7ED3\u6784</span></span>
<span class="line"><span style="color:#A6ACCD;">     * {</span></span>
<span class="line"><span style="color:#A6ACCD;">          id: string,</span></span>
<span class="line"><span style="color:#A6ACCD;">          dependencies: {depModuleId: string; depModulePath: string;}[],</span></span>
<span class="line"><span style="color:#A6ACCD;">          names: string[],</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    */</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.modules = [];</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u91CC\u9762\u653E\u7F6E\u6240\u6709\u7684\u4EE3\u7801\u5757</span></span>
<span class="line"><span style="color:#A6ACCD;">    /**</span></span>
<span class="line"><span style="color:#A6ACCD;">     * chunk\u7684\u7ED3\u6784</span></span>
<span class="line"><span style="color:#A6ACCD;">     * {</span></span>
<span class="line"><span style="color:#A6ACCD;">     *    name: &#39;&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">     *    entryModule: Module,</span></span>
<span class="line"><span style="color:#A6ACCD;">     *    modules: Module[]</span></span>
<span class="line"><span style="color:#A6ACCD;">     * }</span></span>
<span class="line"><span style="color:#A6ACCD;">    */</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.chunks = [];</span></span>
<span class="line"><span style="color:#A6ACCD;">    /**</span></span>
<span class="line"><span style="color:#A6ACCD;">     * assets\u662F\u6700\u540E\u7528\u4E8E\u63D0\u53D6\u5185\u5BB9\u5E76\u751F\u6210\u6587\u4EF6\u7684\uFF0C\u5B83\u7684\u7ED3\u6784\u662F</span></span>
<span class="line"><span style="color:#A6ACCD;">     * {</span></span>
<span class="line"><span style="color:#A6ACCD;">     *    chunkName: source;</span></span>
<span class="line"><span style="color:#A6ACCD;">     * }</span></span>
<span class="line"><span style="color:#A6ACCD;">     * </span></span>
<span class="line"><span style="color:#A6ACCD;">    */</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.assets = [];</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.hooks = {</span></span>
<span class="line"><span style="color:#A6ACCD;">      chunkAsset: new SyncHook([&quot;chunk&quot;, &quot;filename&quot;]),</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  build = (onCompiled) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 5\u3001\u6839\u636E\u914D\u7F6E\u4E2D\u7684 entry \u627E\u51FA\u5165\u53E3\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">    let entry = {};</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (typeof this.options.entry === &quot;string&quot;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      entry.main = this.options.entry;</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">      entry = this.options.entry;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    for (const entryName in entry) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u83B7\u53D6\u5230\u4E86\u6240\u6709\u5165\u53E3\u6587\u4EF6\u7684\u7EDD\u5BF9\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#A6ACCD;">      const entryPath = path.join(baseDir, entry[entryName]);</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.fileDependencies.push(entryPath);</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 6\u3001\u4ECE\u5165\u53E3\u6587\u4EF6\u51FA\u53D1\uFF0C\u8C03\u7528\u6240\u6709\u914D\u7F6E\u7684 loader \u5BF9\u6A21\u5757\u8FDB\u884C\u7F16\u8BD1</span></span>
<span class="line"><span style="color:#A6ACCD;">      const entryModule = this.buildModule(entryName, entryPath);</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 8\u3001\u6839\u636E\u5165\u53E3\u548C\u6A21\u5757\u4E4B\u95F4\u7684\u4F9D\u8D56\u5173\u7CFB\uFF0C\u7EC4\u88C5\u6210\u4E00\u4E2A\u4E2A\u5305\u542B\u591A\u4E2A\u6A21\u5757\u7684 chunk</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u76EE\u524D\u770B\u7740\u662F\u5165\u53E3\u6709\u51E0\u4E2A\uFF0Cchunk\u81F3\u5C11\u5C31\u6709\u51E0\u4E2A\uFF0Cchunk\u662F\u7528\u4E8E\u751F\u6210this.assets\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">      const chunk = {</span></span>
<span class="line"><span style="color:#A6ACCD;">        name: entryName,</span></span>
<span class="line"><span style="color:#A6ACCD;">        entryModule,</span></span>
<span class="line"><span style="color:#A6ACCD;">        modules: this.modules.filter((module) =&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          module.names.includes(entryName)</span></span>
<span class="line"><span style="color:#A6ACCD;">        ),</span></span>
<span class="line"><span style="color:#A6ACCD;">      };</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.chunks.push(chunk);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 9\u3001\u518D\u628A\u6BCF\u4E2A chunk \u8F6C\u6362\u6210\u4E00\u4E2A\u5355\u72EC\u7684\u6587\u4EF6\u52A0\u5165\u5230\u8F93\u51FA\u5217\u8868</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.dir(this.chunks, { depth: null });</span></span>
<span class="line"><span style="color:#A6ACCD;">    this.chunks.forEach((chunk) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      const filename = this.options.output.filename.replace(</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;[name]&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        chunk.name</span></span>
<span class="line"><span style="color:#A6ACCD;">      );</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.hooks.chunkAsset.call(chunk, filename);</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.assets[filename] = getSource(chunk);</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;">    onCompiled(</span></span>
<span class="line"><span style="color:#A6ACCD;">      null,</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        module: this.modules,</span></span>
<span class="line"><span style="color:#A6ACCD;">        chunks: this.chunks,</span></span>
<span class="line"><span style="color:#A6ACCD;">        assets: this.assets,</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.fileDependencies</span></span>
<span class="line"><span style="color:#A6ACCD;">    );</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;">  /**</span></span>
<span class="line"><span style="color:#A6ACCD;">   * \u7F16\u8BD1\u6A21\u5757</span></span>
<span class="line"><span style="color:#A6ACCD;">   * @param {*} name \u5165\u53E3\u7684\u540D\u79F0</span></span>
<span class="line"><span style="color:#A6ACCD;">   * @param {*} modulePath \u6A21\u5757\u7684\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#A6ACCD;">   */</span></span>
<span class="line"><span style="color:#A6ACCD;">  buildModule = (name, modulePath) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const _this = this;</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u2460 \u8BFB\u53D6\u6E90\u4EE3\u7801\u7684\u5185\u5BB9</span></span>
<span class="line"><span style="color:#A6ACCD;">    let sourceCode = fs.readFileSync(modulePath, &quot;utf8&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u2461 \u8C03\u7528\u6B64\u6A21\u5757\u9700\u8981\u4F7F\u7528\u7684loader</span></span>
<span class="line"><span style="color:#A6ACCD;">    const { rules } = this.options.module;</span></span>
<span class="line"><span style="color:#A6ACCD;">    const loaders = [];</span></span>
<span class="line"><span style="color:#A6ACCD;">    rules.forEach((rule) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (modulePath.match(rule.test)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        loaders.push(...rule.use);</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;">    sourceCode = loaders.reduceRight((code, loader) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return require(loader)(code);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }, sourceCode);</span></span>
<span class="line"><span style="color:#A6ACCD;">    // src/entry1.js src/entry2.js</span></span>
<span class="line"><span style="color:#A6ACCD;">    const moduleId = &quot;./&quot; + path.relative(baseDir, modulePath);</span></span>
<span class="line"><span style="color:#A6ACCD;">    /**</span></span>
<span class="line"><span style="color:#A6ACCD;">     * \u521B\u5EFA\u4E00\u4E2A\u6A21\u5757\u5BF9\u8C61\uFF0C</span></span>
<span class="line"><span style="color:#A6ACCD;">     * id moduleId\u662F\u76F8\u5BF9\u4E8E\u6839\u76EE\u5F55\u7684\u76F8\u5BF9\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#A6ACCD;">     * dependencies \u8868\u793A\u6B64\u6A21\u5757\u4F9D\u8D56\u7684\u6A21\u5757</span></span>
<span class="line"><span style="color:#A6ACCD;">     * names  \u8868\u793A\u6B64\u6A21\u5757\u6DFB\u52A0\u4E86\u90A3\u51E0\u4E2A\u5165\u53E3\u4F9D\u8D56</span></span>
<span class="line"><span style="color:#A6ACCD;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    const module = {</span></span>
<span class="line"><span style="color:#A6ACCD;">      id: moduleId,</span></span>
<span class="line"><span style="color:#A6ACCD;">      dependencies: [],</span></span>
<span class="line"><span style="color:#A6ACCD;">      names: [name],</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u83B7\u53D6\u5F53\u524D\u8DEF\u5F84\u6240\u5728\u7684\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#A6ACCD;">    const dirName = path.dirname(modulePath);</span></span>
<span class="line"><span style="color:#A6ACCD;">    const extensions = this.options.resolve.extensions;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // 7\u3001\u518D\u627E\u51FA\u8BE5\u6A21\u5757\u4F9D\u8D56\u7684\u6A21\u5757\uFF0C\u5728\u9012\u5F52\u672C\u6B65\u9AA4\uFF08buildModule\uFF09\uFF0C\u77E5\u9053\u6240\u6709\u4F9D\u8D56\u5165\u53E3\u6587\u4EF6\u52A0\u8F7D\u5B8C</span></span>
<span class="line"><span style="color:#A6ACCD;">    const ast = parser.parse(sourceCode, { sourceType: &quot;module&quot; });</span></span>
<span class="line"><span style="color:#A6ACCD;">    traverse(ast, {</span></span>
<span class="line"><span style="color:#A6ACCD;">      CallExpression({ node }) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (node.callee.name === &quot;require&quot;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          const depModuleName = node.arguments[0].value; // &#39;.title&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">          // \u83B7\u53D6\u4F9D\u8D56\u8DEF\u5F84\u7684\u7EDD\u5BF9\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#A6ACCD;">          let depModulePath = path.join(dirName, depModuleName);</span></span>
<span class="line"><span style="color:#A6ACCD;">          depModulePath = tryExtensions(depModulePath, extensions);</span></span>
<span class="line"><span style="color:#A6ACCD;">          // \u628A\u6B64\u4F9D\u8D56\u6587\u4EF6\u6DFB\u52A0\u5230\u4F9D\u8D56\u6570\u7EC4\u91CC\u9762\uFF0C\u5F53\u6587\u4EF6\u53D1\u751F\u53D8\u5316\u4E86\uFF0C\u4F1A\u91CD\u65B0\u7F16\u8BD1\u6587\u4EF6\uFF0C\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684 Compilation</span></span>
<span class="line"><span style="color:#A6ACCD;">          _this.fileDependencies.push(depModulePath);</span></span>
<span class="line"><span style="color:#A6ACCD;">          const depModuleId = &quot;./&quot; + path.relative(baseDir, depModulePath);</span></span>
<span class="line"><span style="color:#A6ACCD;">          // \u4FEE\u6539 ast \u8BED\u6CD5\u6811\uFF0C\u628A require \u65B9\u6CD5\u7684\u53C2\u6570\u53D8\u6210\u4F9D\u8D56\u7684\u6A21\u5757 ID</span></span>
<span class="line"><span style="color:#A6ACCD;">          node.arguments = [types.stringLiteral(depModuleId)];</span></span>
<span class="line"><span style="color:#A6ACCD;">          module.dependencies.push({</span></span>
<span class="line"><span style="color:#A6ACCD;">            depModuleId,</span></span>
<span class="line"><span style="color:#A6ACCD;">            depModulePath,</span></span>
<span class="line"><span style="color:#A6ACCD;">          });</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    const { code } = generator(ast);</span></span>
<span class="line"><span style="color:#A6ACCD;">    module._source = code;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    module.dependencies.forEach(({ depModuleId, depModulePath }) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    	// \u5C06\u5F53\u524D\u8FD9\u4E2Amodule\u904D\u5386\u8282\u70B9\u5F97\u6765\u7684dependencies\u8FDB\u884C\u904D\u5386\uFF0C\u5982\u679C\u8FD9\u4E2Aid\u5DF2\u7ECF\u88AB\u904D\u5386\u8FC7\u4E86\uFF0C\u90A3\u4E48\u76F4\u63A5\u5C06\u5F53\u524D\u7684\u5165\u53E3\u7684name\u653E\u5165\u5F53\u524Dmodule\u7684names\u4E2D</span></span>
<span class="line"><span style="color:#A6ACCD;">      const buildModule = _this.modules.find(</span></span>
<span class="line"><span style="color:#A6ACCD;">        (module) =&gt; module.id === depModuleId</span></span>
<span class="line"><span style="color:#A6ACCD;">      );</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (buildModule) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        buildModule.names.push(name);</span></span>
<span class="line"><span style="color:#A6ACCD;">      } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // \u5982\u679C\u904D\u5386\u5230\u7684module\u6CA1\u88AB\u6784\u5EFA\u8FC7\uFF0C\u90A3\u4E48\u5C31\u9012\u5F52\u8C03\u7528buildModule</span></span>
<span class="line"><span style="color:#A6ACCD;">        const depModule = _this.buildModule(name, depModulePath);</span></span>
<span class="line"><span style="color:#A6ACCD;">        _this.modules.push(depModule);</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    return module;</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/**</span></span>
<span class="line"><span style="color:#A6ACCD;"> * \u5C1D\u8BD5\u7ED9\u5F53\u524D\u7684\u8DEF\u5F84\u6DFB\u52A0\u6269\u5C55\u540D\uFF0C\u76F4\u5230\u627E\u5230\u6587\u4EF6\u4E3A\u6B62</span></span>
<span class="line"><span style="color:#A6ACCD;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;">function tryExtensions(modulePath, extensions) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (fs.existsSync(modulePath)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return modulePath;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  for (let i = 0; i &lt; extensions.length; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const filePath = modulePath + extensions[i];</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (fs.existsSync(filePath)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return filePath;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  throw new Error(\`\u627E\u4E0D\u5230\${modulePath}\`);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function getSource(chunk) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return \`</span></span>
<span class="line"><span style="color:#A6ACCD;">    (() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      var modules = {</span></span>
<span class="line"><span style="color:#A6ACCD;">        \${chunk.modules.map(</span></span>
<span class="line"><span style="color:#A6ACCD;">          (module) =&gt; \`</span></span>
<span class="line"><span style="color:#A6ACCD;">          &quot;\${module.id}&quot;: (module) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            \${module._source}</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        \`</span></span>
<span class="line"><span style="color:#A6ACCD;">        )}</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      var cache = {};</span></span>
<span class="line"><span style="color:#A6ACCD;">      function require(moduleId) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        var cachedModule = cache[moduleId];</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (cachedModule !== undefined) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          return cachedModule.exports;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        var module = cache[moduleId] = {</span></span>
<span class="line"><span style="color:#A6ACCD;">          exports: {}</span></span>
<span class="line"><span style="color:#A6ACCD;">        };</span></span>
<span class="line"><span style="color:#A6ACCD;">        modules[moduleId](module, module.exports, require);</span></span>
<span class="line"><span style="color:#A6ACCD;">        return module.exports;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      var exports = {};</span></span>
<span class="line"><span style="color:#A6ACCD;">      \${chunk.entryModule._source}</span></span>
<span class="line"><span style="color:#A6ACCD;">    })();</span></span>
<span class="line"><span style="color:#A6ACCD;">  \`;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">module.exports = Compilation;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br><span class="line-number">226</span><br><span class="line-number">227</span><br><span class="line-number">228</span><br><span class="line-number">229</span><br></div></div><h2 id="\u516D\u3001q-a" tabindex="-1">\u516D\u3001Q&amp;A <a class="header-anchor" href="#\u516D\u3001q-a" aria-hidden="true">#</a></h2><p>1.module\u3001chunk\u3001bundle\u662F\u4EC0\u4E48\uFF1F</p><p>2.loader\u548Cplugin\u7684\u533A\u522B\u662F\u4EC0\u4E48\uFF1F</p><ul><li>\u5BF9\u6A21\u5757\u6E90\u7801\u7684\u8F6C\u6362\uFF0C\u63CF\u8FF0\u4E86 webpack \u5982\u4F55\u5904\u7406\u975E javascript \u6A21\u5757\uFF0C\u5E76\u4E14\u5728 build \u4E2D\u5F15\u5165\u8FD9\u4E9B\u4F9D\u8D56\u3002loader \u53EF\u4EE5\u5C06\u6587\u4EF6\u4ECE\u4E0D\u540C\u7684\u8BED\u8A00\uFF08\u5982 TypeScript\uFF09\u8F6C\u6362\u4E3A JavaScript\uFF0C\u6216\u8005\u5C06\u5185\u8054\u56FE\u50CF\u8F6C\u6362\u4E3A data URL\u3002\u6BD4\u5982\u8BF4\uFF1Acss-loader\uFF0Cstyle-loader \u7B49\u3002</li><li>\u89E3\u51B3 loader \u65E0\u6CD5\u5B9E\u73B0\u7684\u5176\u4ED6\u4E8B,\u6269\u5C55\u4E86webpack\u7684\u529F\u80FD\u3002\u63D2\u4EF6\u7684\u8303\u56F4\u5305\u62EC\uFF0C\u4ECE\u6253\u5305\u4F18\u5316\u548C\u538B\u7F29\uFF0C\u4E00\u76F4\u5230\u91CD\u65B0\u5B9A\u4E49\u73AF\u5883\u4E2D\u7684\u53D8\u91CF\u3002\u63D2\u4EF6\u63A5\u53E3\u529F\u80FD\u6781\u5176\u5F3A\u5927\uFF0C\u53EF\u4EE5\u7528\u6765\u5904\u7406\u5404\u79CD\u5404\u6837\u7684\u4EFB\u52A1\u3002</li></ul>`,8);function t(b,C,A,u,m,y){const n=e("Image");return r(),l("div",null,[o,p(n,{src:"/automation/webpack/source-code/1.png"}),i])}const h=a(c,[["render",t]]);export{d as __pageData,h as default};
