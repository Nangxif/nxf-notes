import{_ as l,c as p,b as n,h as a,r as e,o as c}from"./app.3b75e319.js";const _=JSON.parse('{"title":"\u5B9E\u73B0\u6DF1\u62F7\u8D1D","description":"","frontmatter":{},"headers":[],"relativePath":"blogs/js-ts/js/js-api/deep-clone.md","lastUpdated":1709367431000}'),r={name:"blogs/js-ts/js/js-api/deep-clone.md"},o=a(`<h1 id="\u5B9E\u73B0\u6DF1\u62F7\u8D1D" tabindex="-1">\u5B9E\u73B0\u6DF1\u62F7\u8D1D <a class="header-anchor" href="#\u5B9E\u73B0\u6DF1\u62F7\u8D1D" aria-hidden="true">#</a></h1><p><strong>\u6DF1\u62F7\u8D1D\uFF1A\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u5BF9\u8C61\uFF0C\u5C06\u4E00\u4E2A\u5BF9\u8C61\u4ECE\u5185\u5B58\u4E2D\u5B8C\u6574\u5730\u62F7\u8D1D\u51FA\u6765\u4E00\u4EFD\u7ED9\u8BE5\u65B0\u5BF9\u8C61\uFF0C\u5E76\u4ECE\u5806\u5185\u5B58\u4E2D\u5F00\u8F9F\u4E00\u4E2A\u5168\u65B0\u7684\u7A7A\u95F4\u5B58\u653E\u65B0\u5BF9\u8C61\uFF0C\u4E14\u65B0\u5BF9\u8C61\u7684\u4FEE\u6539\u5E76\u4E0D\u4F1A\u6539\u53D8\u539F\u5BF9\u8C61\uFF0C\u4E8C\u8005\u5B9E\u73B0\u771F\u6B63\u7684\u5206\u79BB\u3002</strong></p><p><strong>\u5E38\u89C1\u7684\u65B9\u6CD5\u6709\uFF1A</strong></p><p>\u65B9\u6CD51\uFF1AJSON.stringify()</p><p>JSON.stringfy() \u5176\u5B9E\u5C31\u662F\u5C06\u4E00\u4E2A JavaScript \u5BF9\u8C61\u6216\u503C\u8F6C\u6362\u4E3A JSON \u5B57\u7B26\u4E32\uFF0C\u6700\u540E\u518D\u7528 JSON.parse() \u7684\u65B9\u6CD5\u5C06JSON \u5B57\u7B26\u4E32\u751F\u6210\u4E00\u4E2A\u65B0\u7684\u5BF9\u8C61\u3002</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function deepClone(target) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (typeof target === &#39;object&#39; &amp;&amp; target !== null) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return JSON.parse(JSON.stringify(target));</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return target;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u65B9\u6CD52\uFF1A\u4F7F\u7528\u9012\u5F52\u8FDB\u884C\u6DF1\u62F7\u8D1D</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function deepClone(obj) {</span></span>
<span class="line"><span style="color:#A6ACCD;">	if (typeof obj === &#39;object&#39; &amp;&amp; obj !== null) {</span></span>
<span class="line"><span style="color:#A6ACCD;">		let cloneObj = Array.isArray(obj) ? [] : {}</span></span>
<span class="line"><span style="color:#A6ACCD;">		for (let key in obj) { //\u904D\u5386</span></span>
<span class="line"><span style="color:#A6ACCD;">			if (typeof obj[key] === &#39;object&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">				cloneObj[key] = deepClone(obj[key]) //\u662F\u5BF9\u8C61\u5C31\u518D\u6B21\u8C03\u7528\u8BE5\u51FD\u6570\u9012\u5F52</span></span>
<span class="line"><span style="color:#A6ACCD;">			} else {</span></span>
<span class="line"><span style="color:#A6ACCD;">				cloneObj[key] = obj[key] //\u57FA\u672C\u7C7B\u578B\u7684\u8BDD\u76F4\u63A5\u590D\u5236\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">			}</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;">		return cloneObj</span></span>
<span class="line"><span style="color:#A6ACCD;">	} else {</span></span>
<span class="line"><span style="color:#A6ACCD;">		return obj;</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let obj1 = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    name:&#39;wb&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    info:{</span></span>
<span class="line"><span style="color:#A6ACCD;">        address: &#39;guangzhou&#39;    </span></span>
<span class="line"><span style="color:#A6ACCD;">    } </span></span>
<span class="line"><span style="color:#A6ACCD;">} </span></span>
<span class="line"><span style="color:#A6ACCD;">let obj2 = deepClone(obj1);</span></span>
<span class="line"><span style="color:#A6ACCD;">obj1.name = &#39;weibin&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(obj2)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div>`,8),t=a(`<p>\u4E0A\u8FB9\u4E24\u79CD\u5DF2\u7ECF\u53EF\u4EE5\u6EE1\u8DB3\u5927\u90E8\u5206\u5E94\u7528\u573A\u666F\uFF0C\u4F46\u662F\u5BF9\u4E8ESymbol\u7C7B\u578B\u7684\u6570\u636E\u548C\u4E0D\u53EF\u679A\u4E3E\u5C5E\u6027\u4EE5\u53CARegExp\u3001Date\u3001Map\u3001Set\u3001Function\u7B49\u5F15\u7528\u7C7B\u578B\u65E0\u6CD5\u8FDB\u884C\u62F7\u8D1D\u3002</p><p>\u5728\u65B9\u6CD51\u4E2D\uFF0CJSON\u5728\u6267\u884C\u5B57\u7B26\u4E32\u5316\u7684\u8FD9\u4E2A\u8FC7\u7A0B\u65F6\uFF0C\u4F1A\u5148\u8FDB\u884C\u4E00\u4E2AJSON\u683C\u5F0F\u5316\uFF0C\u83B7\u5F97\u5B89\u5168\u7684JSON\u503C\uFF0C\u56E0\u6B64\u5982\u679C\u662F\u975E\u5B89\u5168\u7684JSON\u503C\uFF0C\u5C31\u4F1A\u88AB\u4E22\u5F03\u6389\u3002JSON.stringfy() \u5B58\u5728\u4EE5\u4E0B\u4E00\u4E9B\u95EE\u9898:</p><p>1\u3001\u6267\u884C\u4F1A\u62A5\u9519\uFF1A\u5B58\u5728BigInt\u7C7B\u578B\u3001\u5FAA\u73AF\u5F15\u7528\u3002</p><p>2\u3001\u62F7\u8D1DDate\u5F15\u7528\u7C7B\u578B\u4F1A\u53D8\u6210\u5B57\u7B26\u4E32\u3002</p><p>3\u3001\u952E\u503C\u4F1A\u6D88\u5931\uFF1A\u5BF9\u8C61\u7684\u503C\u4E2D\u4E3AFunction\u3001Undefined\u3001Symbol \u8FD9\u51E0\u79CD\u7C7B\u578B\u3002</p><p>4\u3001\u952E\u503C\u53D8\u6210\u7A7A\u5BF9\u8C61\uFF1A\u5BF9\u8C61\u7684\u503C\u4E2D\u4E3AMap\u3001Set\u3001RegExp\u8FD9\u51E0\u79CD\u7C7B\u578B\u3002</p><p>5\u3001\u65E0\u6CD5\u62F7\u8D1D\uFF1A\u4E0D\u53EF\u679A\u4E3E\u5C5E\u6027\u3001\u5BF9\u8C61\u7684\u539F\u578B\u94FE\u3002</p><p>\u5728\u65B9\u6CD52\u4E2D\uFF0C\u5982\u679C\u5B58\u5728\u5FAA\u73AF\u5F15\u7528\u7684\u8BDD\uFF0C\u4EE5\u4E0A\u4EE3\u7801\u4F1A\u5BFC\u81F4\u65E0\u9650\u9012\u5F52\uFF0C\u4ECE\u800C\u4F7F\u5F97\u5806\u6808\u6EA2\u51FA</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">var data = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: &#39;snail&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  obj: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">data.obj = data;</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(data, &#39;is data&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(deepClone(data));</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,9),i=a(`<p>\u4E0B\u9762\u662F\u4F18\u5316\u7684\u65B9\u6CD5\uFF1A</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function deepClone(obj) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const hash = new WeakMap();</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u521D\u6B21\u8C03\u7528deepCopy\u65F6\uFF0C\u53C2\u6570\u4F1A\u521B\u5EFA\u4E00\u4E2AWeakMap\u7ED3\u6784\u7684\u5BF9\u8C61\uFF0C\u8FD9\u79CD\u6570\u636E\u7ED3\u6784\u7684\u7279\u70B9\u4E4B\u4E00\u662F\uFF0C\u5B58\u50A8\u952E\u503C\u5BF9\u4E2D\u7684\u5065\u5FC5\u987B\u662F\u5BF9\u8C61\u7C7B\u578B\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u9996\u6B21\u8C03\u7528\u65F6\uFF0CweakMap\u4E3A\u7A7A\uFF0C\u4E0D\u4F1A\u8D70if(hash.has())\u8BED\u53E5\uFF0C\u5982\u679C\u5F85\u62F7\u8D1D\u5BF9\u8C61\u4E2D\u6709\u5C5E\u6027\u4E5F\u4E3A\u5BF9\u8C61\u65F6\uFF0C\u5219\u5C06\u8BE5\u5F85\u62F7\u8D1D\u5BF9\u8C61\u5B58\u5165weakMap\u4E2D\uFF0C\u6B64\u65F6\u7684\u5065\u503C\u548C\u5065\u540D\u90FD\u662F\u5BF9\u8BE5\u5F85\u62F7\u8D1D\u5BF9\u8C61\u7684\u5F15\u7528\u7136\u540E\u9012\u5F52\u8C03\u7528\u8BE5\u51FD\u6570\u518D\u6B21\u8FDB\u5165\u8BE5\u51FD\u6570\uFF0C\u4F20\u5165\u4E86\u4E0A\u4E00\u4E2A\u5F85\u62F7\u8D1D\u5BF9\u8C61\u7684\u5BF9\u8C61\u5C5E\u6027\u7684\u5F15\u7528\u548C\u5B58\u50A8\u4E86\u4E0A\u4E00\u4E2A\u5F85\u62F7\u8D1D\u5BF9\u8C61\u5F15\u7528\u7684weakMap\uFF0C</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u56E0\u4E3A\u5982\u679C\u662F\u5FAA\u73AF\u5F15\u7528\u4EA7\u751F\u7684\u95ED\u73AF\uFF0C\u90A3\u4E48\u8FD9\u4E24\u4E2A\u5F15\u7528\u662F\u6307\u5411\u76F8\u540C\u7684\u5BF9\u8C61\u7684\uFF0C\u56E0\u6B64\u4F1A\u8FDB\u5165if(hash.has())\u8BED\u53E5\u5185\uFF0C\u7136\u540Ereturn\uFF0C\u9000\u51FA\u51FD\u6570\uFF0C\u6240\u4EE5\u4E0D\u4F1A\u4E00\u76F4\u9012\u5F52\u8FDB\u6808\uFF0C\u4EE5\u6B64\u9632\u6B62\u6808\u6EA2\u51FA\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  function isObject(obj) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return (typeof obj === &#39;object&#39; &amp;&amp; obj) || typeof obj === &#39;function&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  function clone(data) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (!isObject(data)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return data; // \u57FA\u7840\u6570\u636E\u7C7B\u578B</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    if ([Date, RegExp].includes(data.constructor)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return new data.constructor(data); // \u65E5\u671F\u5BF9\u8C61\u76F4\u63A5\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u65E5\u671F\u5BF9\u8C61\uFF0C\u6B63\u5219\u5BF9\u8C61\u76F4\u63A5\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u6B63\u5219\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (typeof data === &#39;function&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return new Function(&#39;return &#39; + data.toString())();</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    //\u5982\u679C\u5FAA\u73AF\u5F15\u7528\u4E86\u5C31\u7528 weakMap \u6765\u89E3\u51B3\uFF0CweakMap\u4E3A\u5F31\u5F15\u7528\uFF0C\u4F1A\u81EA\u52A8\u8FDB\u884C\u5783\u573E\u56DE\u6536~~~~</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (hash.has(data)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return hash.get(data);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    if (data instanceof Map) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      const result = new Map()</span></span>
<span class="line"><span style="color:#A6ACCD;">      hash.set(data, result)</span></span>
<span class="line"><span style="color:#A6ACCD;">      data.forEach((val, key) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (isObject(val)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          result.set(key, clone(val));</span></span>
<span class="line"><span style="color:#A6ACCD;">        } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">          result.set(key, val);</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      })</span></span>
<span class="line"><span style="color:#A6ACCD;">      return result</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    if (data instanceof Set) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      const result = new Set()</span></span>
<span class="line"><span style="color:#A6ACCD;">      hash.set(data, result)</span></span>
<span class="line"><span style="color:#A6ACCD;">      data.forEach(val =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (isObject(val)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          result.add(clone(val));</span></span>
<span class="line"><span style="color:#A6ACCD;">        } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">          result.add(val);</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      })</span></span>
<span class="line"><span style="color:#A6ACCD;">      return result</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">	  // \u9488\u5BF9\u80FD\u591F\u904D\u5386\u5BF9\u8C61\u7684\u4E0D\u53EF\u679A\u4E3E\u5C5E\u6027\u4EE5\u53CA Symbol \u7C7B\u578B\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 Reflect.ownKeys()</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5728\u904D\u5386 Object \u7C7B\u578B\u6570\u636E\u65F6\uFF0C\u6211\u4EEC\u9700\u8981\u628A Symbol \u7C7B\u578B\u7684\u952E\u540D\u4E5F\u8003\u8651\u8FDB\u6765\uFF0C\u6240\u4EE5\u4E0D\u80FD\u901A\u8FC7 Object.keys \u83B7\u53D6\u952E\u540D\u6216 for...in \u65B9\u5F0F\u904D\u5386\uFF0C\u800C\u662F\u901A\u8FC7Reflect.ownKeys()\u83B7\u53D6\u6240\u6709\u81EA\u8EAB\u7684\u952E\u540D</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // Reflect.owmKeys(obj)\u65B9\u6CD5\u7C7B\u4F3C\u4E8E Object.keys(obj)\uFF0C \u4F46\u662F\u540E\u8005\u4F1A\u53D7enumerable\u5F71\u54CD\uFF0C\u524D\u8005\u4E0D\u4F1A\uFF0C\u4F7F\u7528\u8FD9\u4E2A\u65B9\u6CD5\u53EF\u4EE5\u5C06Symbol\u7C7B\u578B\u7684\u6570\u636E\u4E5F\u8FDB\u884C\u62F7\u8D1D\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u8BE6\u89C1 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    const keys = Reflect.ownKeys(data);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u904D\u5386\u6240\u6709\u952E\u7684\u7279\u5F81\uFF0CObject.getOwnPropertyDescriptors(obj)\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5BF9\u8C61\u7684\u5C5E\u6027\u540D\u5C31\u662F\u6E90\u5BF9\u8C61\u7684\u5C5E\u6027\u540D\uFF0C\u5C5E\u6027\u503C\u5C31\u662F\u8BE5\u5BF9\u8C61\u7684\u63CF\u8FF0\u5BF9\u8C61\uFF08\u5373\u8BBF\u95EE\u5668\u5C5E\u6027\u6216\u6570\u636E\u5C5E\u6027\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">    const allDesc = Object.getOwnPropertyDescriptors(data);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u904D\u5386\u4F20\u5165\u53C2\u6570\u6240\u6709\u952E\u7684\u7279\u6027</span></span>
<span class="line"><span style="color:#A6ACCD;">    // Object.assign() \u65B9\u6CD5\u53EA\u80FD\u62F7\u8D1D\u6E90\u5BF9\u8C61\u7684\u53EF\u679A\u4E3E\u7684\u81EA\u8EAB\u5C5E\u6027\uFF0C\u540C\u65F6\u62F7\u8D1D\u65F6\u65E0\u6CD5\u62F7\u8D1D\u5C5E\u6027\u7684\u7279\u6027\u4EEC\uFF0C\u800C\u4E14\u8BBF\u95EE\u5668\u5C5E\u6027\u4F1A\u88AB\u8F6C\u6362\u6210\u6570\u636E\u5C5E\u6027\uFF0C\u4E5F\u65E0\u6CD5\u62F7\u8D1D\u6E90\u5BF9\u8C61\u7684\u539F\u578B\uFF0C\u8BE5\u65B9\u6CD5\u914D\u5408 Object.create() \u65B9\u6CD5\u53EF\u4EE5\u5B9E\u73B0\u4E0A\u9762\u8BF4\u7684\u8FD9\u4E9B\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u8BE6\u89C1  https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors#%E6%B5%85%E6%8B%B7%E8%B4%9D%E4%B8%80%E4%B8%AA%E5%AF%B9%E8%B1%A1</span></span>
<span class="line"><span style="color:#A6ACCD;">   	const cloneObj = Object.create(Object.getPrototypeOf(data), allDesc);</span></span>
<span class="line"><span style="color:#A6ACCD;">    hash.set(data, cloneObj)</span></span>
<span class="line"><span style="color:#A6ACCD;">    keys.forEach(key =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      const val = data[key]</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (isObject(val)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        cloneObj[key] = clone(val)</span></span>
<span class="line"><span style="color:#A6ACCD;">      } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">        cloneObj[key] = val</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">    return cloneObj</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return clone(obj)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  // const player = { name: &#39;Allen Iverson&#39;, [Symbol(&#39;birthday&#39;)]: &#39;1975/06/07&#39;, };</span></span>
<span class="line"><span style="color:#A6ACCD;">	// let obj = {</span></span>
<span class="line"><span style="color:#A6ACCD;">	// 	age: 18,</span></span>
<span class="line"><span style="color:#A6ACCD;">	// 	name: &quot;cwb&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">	// 	education: [&quot;\u5C0F\u5B66&quot;, &quot;\u521D\u4E2D&quot;, &quot;\u9AD8\u4E2D&quot;, &quot;\u5927\u5B66&quot;, undefined, null],</span></span>
<span class="line"><span style="color:#A6ACCD;">	// 	likesFood: new Set([&quot;fish&quot;, &quot;banana&quot;]),</span></span>
<span class="line"><span style="color:#A6ACCD;">	// 	friends: [</span></span>
<span class="line"><span style="color:#A6ACCD;">	// 		{ name: &quot;yiyi&quot;, sex: &quot;woman&quot; },</span></span>
<span class="line"><span style="color:#A6ACCD;">	// 		{ name: &quot;erer&quot;, sex: &quot;woman&quot; },</span></span>
<span class="line"><span style="color:#A6ACCD;">	// 		{ name: &quot;sansan&quot;, sex: &quot;man&quot; }],</span></span>
<span class="line"><span style="color:#A6ACCD;">	// 	work: {</span></span>
<span class="line"><span style="color:#A6ACCD;">	// 		time: &quot;2022&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">	// 		project: { name: &quot;1111111&quot;, obtain: [&quot;css&quot;, &quot;html&quot;, &quot;js&quot;] }</span></span>
<span class="line"><span style="color:#A6ACCD;">	// 	},</span></span>
<span class="line"><span style="color:#A6ACCD;">	// 	play: function () { console.log(&quot;\u6253\u7FBD\u6BDB\u7403&quot;); }</span></span>
<span class="line"><span style="color:#A6ACCD;">	// }</span></span>
<span class="line"><span style="color:#A6ACCD;">	// let obj1 = deepClone(obj0);</span></span>
<span class="line"><span style="color:#A6ACCD;">	// console.log(obj1, &#39;obj1=========&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br></div></div>`,2),b=a(`<div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const data = { name: &#39;Allen Iverson&#39;, [Symbol(&#39;birthday&#39;)]: &#39;1975/06/07&#39;, };</span></span>
<span class="line"><span style="color:#A6ACCD;">const keys111 = Object.keys(data)</span></span>
<span class="line"><span style="color:#A6ACCD;">const keys = Reflect.ownKeys(data);</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(keys111, &#39;Object.keys&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(keys, &#39;Reflect.ownKeys(data)&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,1);function A(C,u,y,m,D,d){const s=e("Image");return c(),p("div",null,[o,n(s,{src:"/js-ts/js/js-api/deep-clone/1.png"},null,8,["src"]),t,n(s,{src:"/js-ts/js/js-api/deep-clone/2.png"},null,8,["src"]),i,n(s,{src:"/js-ts/js/js-api/deep-clone/3.png"},null,8,["src"]),b,n(s,{src:"/js-ts/js/js-api/deep-clone/4.png"},null,8,["src"])])}const g=l(r,[["render",A]]);export{_ as __pageData,g as default};
