import{_ as n,c as a,g as l,o as p}from"./app.d651a09e.js";const C=JSON.parse('{"title":"\u5B9E\u73B0call,apply,bind","description":"","frontmatter":{},"headers":[],"relativePath":"blogs/js-ts/js/js-api/call-apply-bind.md","lastUpdated":1764907094000}'),e={name:"blogs/js-ts/js/js-api/call-apply-bind.md"};function r(c,s,o,t,i,b){return p(),a("div",null,[...s[0]||(s[0]=[l(`<h1 id="\u5B9E\u73B0call-apply-bind" tabindex="-1">\u5B9E\u73B0call,apply,bind <a class="header-anchor" href="#\u5B9E\u73B0call-apply-bind" aria-hidden="true">#</a></h1><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">Function.prototype.myCall = function (context, ...args) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u5224\u65AD\u8C03\u7528myCall\u7684\u662F\u5426\u4E3A\u51FD\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (typeof this !== &quot;function&quot;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    throw new TypeError(&quot;Function.prototype.myCall - \u88AB\u8C03\u7528\u7684\u5BF9\u8C61\u5FC5\u987B\u662F\u51FD\u6570&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u5982\u679C\u6CA1\u6709\u4F20\u5165\u4E0A\u4E0B\u6587\u5BF9\u8C61\uFF0C\u5219\u9ED8\u8BA4\u4E3A\u5168\u5C40\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#A6ACCD;">  // ES11 \u5F15\u5165\u4E86 globalThis\uFF0C\u5B83\u662F\u4E00\u4E2A\u7EDF\u4E00\u7684\u5168\u5C40\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u65E0\u8BBA\u5728\u6D4F\u89C8\u5668\u8FD8\u662F Node.js \u4E2D\uFF0C\u90FD\u53EF\u4EE5\u4F7F\u7528 globalThis \u6765\u8BBF\u95EE\u5168\u5C40\u5BF9\u8C61\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">  context = context || globalThis;</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u7528Symbol\u6765\u521B\u5EFA\u552F\u4E00\u7684fn\uFF0C\u9632\u6B62\u540D\u5B57\u51B2\u7A81</span></span>
<span class="line"><span style="color:#A6ACCD;">  let fn = Symbol(&quot;key&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  // this\u662F\u8C03\u7528myCall\u7684\u51FD\u6570\uFF0C\u5C06\u51FD\u6570\u7ED1\u5B9A\u5230\u4E0A\u4E0B\u6587\u5BF9\u8C61\u7684\u65B0\u5C5E\u6027\u4E0A</span></span>
<span class="line"><span style="color:#A6ACCD;">  context[fn] = this;</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u4F20\u5165MyCall\u7684\u591A\u4E2A\u53C2\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">  const result = context[fn](...args);</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u5C06\u589E\u52A0\u7684fn\u65B9\u6CD5\u5220\u9664</span></span>
<span class="line"><span style="color:#A6ACCD;">  delete context[fn];</span></span>
<span class="line"><span style="color:#A6ACCD;">  return result;</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">Function.prototype.myApply = function (context, argsArr) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u5224\u65AD\u8C03\u7528myApply\u7684\u662F\u5426\u4E3A\u51FD\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (typeof this !== &quot;function&quot;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    throw new TypeError(&quot;Function.prototype.myApply - \u88AB\u8C03\u7528\u7684\u5BF9\u8C61\u5FC5\u987B\u662F\u51FD\u6570&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u5224\u65AD\u4F20\u5165\u7684\u53C2\u6570\u662F\u5426\u4E3A\u6570\u7EC4</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (argsArr &amp;&amp; !Array.isArray(argsArr)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    throw new TypeError(&quot;Function.prototype.myApply - \u7B2C\u4E8C\u4E2A\u53C2\u6570\u5FC5\u987B\u662F\u6570\u7EC4&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u5982\u679C\u6CA1\u6709\u4F20\u5165\u4E0A\u4E0B\u6587\u5BF9\u8C61\uFF0C\u5219\u9ED8\u8BA4\u4E3A\u5168\u5C40\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#A6ACCD;">  // ES11 \u5F15\u5165\u4E86 globalThis\uFF0C\u5B83\u662F\u4E00\u4E2A\u7EDF\u4E00\u7684\u5168\u5C40\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u65E0\u8BBA\u5728\u6D4F\u89C8\u5668\u8FD8\u662F Node.js \u4E2D\uFF0C\u90FD\u53EF\u4EE5\u4F7F\u7528 globalThis \u6765\u8BBF\u95EE\u5168\u5C40\u5BF9\u8C61\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">  context = context || globalThis;</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u7528Symbol\u6765\u521B\u5EFA\u552F\u4E00\u7684fn\uFF0C\u9632\u6B62\u540D\u5B57\u51B2\u7A81</span></span>
<span class="line"><span style="color:#A6ACCD;">  let fn = Symbol(&quot;key&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  // this\u662F\u8C03\u7528myApply\u7684\u51FD\u6570\uFF0C\u5C06\u51FD\u6570\u7ED1\u5B9A\u5230\u4E0A\u4E0B\u6587\u5BF9\u8C61\u7684\u65B0\u5C5E\u6027\u4E0A</span></span>
<span class="line"><span style="color:#A6ACCD;">  context[fn] = this;</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u4F20\u5165myApply\u7684\u591A\u4E2A\u53C2\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">  const result = Array.isArray(argsArr)</span></span>
<span class="line"><span style="color:#A6ACCD;">    ? context[fn](...argsArr)</span></span>
<span class="line"><span style="color:#A6ACCD;">    : context[fn]();</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u5C06\u589E\u52A0\u7684fn\u65B9\u6CD5\u5220\u9664</span></span>
<span class="line"><span style="color:#A6ACCD;">  delete context[fn];</span></span>
<span class="line"><span style="color:#A6ACCD;">  return result;</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">Function.prototype.myBind = function (context, ...args) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u5224\u65AD\u8C03\u7528myBind\u7684\u662F\u5426\u4E3A\u51FD\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (typeof this !== &quot;function&quot;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    throw new TypeError(&quot;Function.prototype.myBind - \u88AB\u8C03\u7528\u7684\u5BF9\u8C61\u5FC5\u987B\u662F\u51FD\u6570&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u5982\u679C\u6CA1\u6709\u4F20\u5165\u4E0A\u4E0B\u6587\u5BF9\u8C61\uFF0C\u5219\u9ED8\u8BA4\u4E3A\u5168\u5C40\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#A6ACCD;">  // ES11 \u5F15\u5165\u4E86 globalThis\uFF0C\u5B83\u662F\u4E00\u4E2A\u7EDF\u4E00\u7684\u5168\u5C40\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u65E0\u8BBA\u5728\u6D4F\u89C8\u5668\u8FD8\u662F Node.js \u4E2D\uFF0C\u90FD\u53EF\u4EE5\u4F7F\u7528 globalThis \u6765\u8BBF\u95EE\u5168\u5C40\u5BF9\u8C61\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">  context = context || globalThis;</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u4FDD\u5B58\u539F\u59CB\u51FD\u6570\u7684\u5F15\u7528\uFF0Cthis\u5C31\u662F\u8981\u7ED1\u5B9A\u7684\u51FD\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">  const _this = this;</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u51FD\u6570\u4F5C\u4E3A\u7ED1\u5B9A\u51FD\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">  return function fn(...innerArgs) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5224\u65AD\u8FD4\u56DE\u51FA\u53BB\u7684\u51FD\u6570\u6709\u6CA1\u6709\u88ABnew</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (this instanceof fn) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return new _this(...args, ...innerArgs);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u4F7F\u7528apply\u65B9\u6CD5\u5C06\u539F\u51FD\u6570\u7ED1\u5B9A\u5230\u6307\u5B9A\u7684\u4E0A\u4E0B\u6587\u5BF9\u8C61\u4E0A</span></span>
<span class="line"><span style="color:#A6ACCD;">    return _this.apply(context,args.concat(innerArgs));</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>`,4)])])}const u=n(e,[["render",r]]);export{C as __pageData,u as default};
