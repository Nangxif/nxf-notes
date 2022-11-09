import{_ as s,c as n,o as a,h as l}from"./app.75fde8e0.js";const m=JSON.parse('{"title":"Vue3\u73AF\u5883\u642D\u5EFA","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u5168\u5C40\u5B89\u88C5pnpm","slug":"\u4E00\u3001\u5168\u5C40\u5B89\u88C5pnpm","link":"#\u4E00\u3001\u5168\u5C40\u5B89\u88C5pnpm","children":[]},{"level":2,"title":"\u4E8C\u3001\u521B\u5EFA.npmrc\u6587\u4EF6","slug":"\u4E8C\u3001\u521B\u5EFA-npmrc\u6587\u4EF6","link":"#\u4E8C\u3001\u521B\u5EFA-npmrc\u6587\u4EF6","children":[]},{"level":2,"title":"\u4E09\u3001\u76EE\u5F55\u7ED3\u6784","slug":"\u4E09\u3001\u76EE\u5F55\u7ED3\u6784","link":"#\u4E09\u3001\u76EE\u5F55\u7ED3\u6784","children":[]},{"level":2,"title":"\u56DB\u3001\u6253\u5305\u914D\u7F6E\uFF08dev.js\uFF09","slug":"\u56DB\u3001\u6253\u5305\u914D\u7F6E\uFF08dev-js\uFF09","link":"#\u56DB\u3001\u6253\u5305\u914D\u7F6E\uFF08dev-js\uFF09","children":[]},{"level":2,"title":"\u4E94\u3001\u8FD0\u884C\u7684\u547D\u4EE4","slug":"\u4E94\u3001\u8FD0\u884C\u7684\u547D\u4EE4","link":"#\u4E94\u3001\u8FD0\u884C\u7684\u547D\u4EE4","children":[]},{"level":2,"title":"\u516D\u3001\u5404\u4E2A\u5305\u7684package.json\u914D\u7F6E","slug":"\u516D\u3001\u5404\u4E2A\u5305\u7684package-json\u914D\u7F6E","link":"#\u516D\u3001\u5404\u4E2A\u5305\u7684package-json\u914D\u7F6E","children":[{"level":3,"title":"1.reactivity","slug":"_1-reactivity","link":"#_1-reactivity","children":[]},{"level":3,"title":"2.runtime-core","slug":"_2-runtime-core","link":"#_2-runtime-core","children":[]},{"level":3,"title":"3.runtime-dom","slug":"_3-runtime-dom","link":"#_3-runtime-dom","children":[]},{"level":3,"title":"4.shared","slug":"_4-shared","link":"#_4-shared","children":[]}]}],"relativePath":"blogs/front-frame/vue3/sound-code/environment-setup.md","lastUpdated":1668007990000}'),e={name:"blogs/front-frame/vue3/sound-code/environment-setup.md"},p=l(`<h1 id="vue3\u73AF\u5883\u642D\u5EFA" tabindex="-1">Vue3\u73AF\u5883\u642D\u5EFA <a class="header-anchor" href="#vue3\u73AF\u5883\u642D\u5EFA" aria-hidden="true">#</a></h1><p>Vue3\u4E2D\u4F7F\u7528<code>pnpm</code> <code>workspace</code>\u6765\u5B9E\u73B0<code>monorepo</code></p><h2 id="\u4E00\u3001\u5168\u5C40\u5B89\u88C5pnpm" tabindex="-1">\u4E00\u3001\u5168\u5C40\u5B89\u88C5pnpm <a class="header-anchor" href="#\u4E00\u3001\u5168\u5C40\u5B89\u88C5pnpm" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm instanll pnpm -g</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">pnpm init -y</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u4E8C\u3001\u521B\u5EFA-npmrc\u6587\u4EF6" tabindex="-1">\u4E8C\u3001\u521B\u5EFA.npmrc\u6587\u4EF6 <a class="header-anchor" href="#\u4E8C\u3001\u521B\u5EFA-npmrc\u6587\u4EF6" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">shamefully-hoist = true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u8FD9\u91CC\u53EF\u4EE5\u5C1D\u8BD5\u4E00\u4E0B\u5B89\u88C5Vue3\uFF0C<code>pnpm install vue@next</code> \u6B64\u65F6\u9ED8\u8BA4\u60C5\u51B5\u4E0BVue3\u4E2D\u4F9D\u8D56\u7684\u6A21\u5757\u4E0D\u4F1A\u88AB\u63D0\u5347\u5230node_modules\u4E0B\uFF0C\u6DFB\u52A0\u7F9E\u803B\u7684\u63D0\u5347\u53EF\u4EE5\u5C06Vue3\u6240\u4F9D\u8D56\u7684\u6A21\u5757\u63D0\u5347\u5230node_modules\u4E2D</p><h2 id="\u4E09\u3001\u76EE\u5F55\u7ED3\u6784" tabindex="-1">\u4E09\u3001\u76EE\u5F55\u7ED3\u6784 <a class="header-anchor" href="#\u4E09\u3001\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">packages</span></span>
<span class="line"><span style="color:#A6ACCD;"> - reactivity  // Vue3\u54CD\u5E94\u5F0Fapi\u903B\u8F91\u4EE3\u7801</span></span>
<span class="line"><span style="color:#A6ACCD;"> - runtime-core  // Vue3\u865A\u62DF\u8282\u70B9\uFF0C\u521B\u5EFA\u8282\u70B9\uFF0Cdiff\u7B97\u6CD5\uFF0C\u751F\u547D\u5468\u671F\u7B49\u903B\u8F91\u4EE3\u7801</span></span>
<span class="line"><span style="color:#A6ACCD;"> - runtime-dom  // Vue3\u6E32\u67D3\u5668createRenderer\uFF0C\u4EE5\u53CA\u6E32\u67D3\u5668\u7684\u914D\u7F6E\u4EE3\u7801</span></span>
<span class="line"><span style="color:#A6ACCD;"> - shared  // Vue3\u516C\u5171\u65B9\u6CD5\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">scripts</span></span>
<span class="line"><span style="color:#A6ACCD;"> - dev.js</span></span>
<span class="line"><span style="color:#A6ACCD;">.npmrc</span></span>
<span class="line"><span style="color:#A6ACCD;">pnpm-workspace.yaml</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="\u56DB\u3001\u6253\u5305\u914D\u7F6E\uFF08dev-js\uFF09" tabindex="-1">\u56DB\u3001\u6253\u5305\u914D\u7F6E\uFF08dev.js\uFF09 <a class="header-anchor" href="#\u56DB\u3001\u6253\u5305\u914D\u7F6E\uFF08dev-js\uFF09" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const args = require(&#39;minimist&#39;)(process.argv.slice(2));</span></span>
<span class="line"><span style="color:#A6ACCD;">const { build } = require(&#39;esbuild&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const { resolve } = require(&#39;path&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const target = args._[0] || &#39;reactivity&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">const format = args.f || &#39;global&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const pkg = require(resolve(__dirname, \`../packages/\${target}/package.json\`));</span></span>
<span class="line"><span style="color:#A6ACCD;">// iife \u7ACB\u5373\u6267\u884C\u51FD\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">// cjs node\u4E2D\u7684\u6A21\u5757</span></span>
<span class="line"><span style="color:#A6ACCD;">// esm \u6D4F\u89C8\u5668\u4E2D\u7684esmodule\u6A21\u5757</span></span>
<span class="line"><span style="color:#A6ACCD;">const outputformat = format.startsWith(&#39;global&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  ? &#39;iife&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  : format === &#39;cjs&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  ? &#39;cjs&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  : &#39;esm&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const outfile = resolve(</span></span>
<span class="line"><span style="color:#A6ACCD;">  __dirname,</span></span>
<span class="line"><span style="color:#A6ACCD;">  \`../packages/\${target}/dist/\${target}.\${format}.js\`</span></span>
<span class="line"><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">build({</span></span>
<span class="line"><span style="color:#A6ACCD;">  entryPoints: [resolve(__dirname, \`../packages/\${target}/src/index.ts\`)],</span></span>
<span class="line"><span style="color:#A6ACCD;">  outfile,</span></span>
<span class="line"><span style="color:#A6ACCD;">  bundle: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">  sourcemap: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">  format: outputformat,</span></span>
<span class="line"><span style="color:#A6ACCD;">  globalName: pkg.buildOptions?.name,</span></span>
<span class="line"><span style="color:#A6ACCD;">  platform: format === &#39;cjs&#39; ? &#39;node&#39; : &#39;browser&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  watch: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    onRebuild(error) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (!error) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(error);</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">}).then(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(&#39;watching----&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><h2 id="\u4E94\u3001\u8FD0\u884C\u7684\u547D\u4EE4" tabindex="-1">\u4E94\u3001\u8FD0\u884C\u7684\u547D\u4EE4 <a class="header-anchor" href="#\u4E94\u3001\u8FD0\u884C\u7684\u547D\u4EE4" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&quot;dev&quot;: &quot;node scripts/dev.js reactivity -f global&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;dev:runtimeDOM&quot;: &quot;node scripts/dev.js runtime-dom -f global&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">&quot;dev:runtimeCORE&quot;: &quot;node scripts/dev.js runtime-core -f global&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u516D\u3001\u5404\u4E2A\u5305\u7684package-json\u914D\u7F6E" tabindex="-1">\u516D\u3001\u5404\u4E2A\u5305\u7684package.json\u914D\u7F6E <a class="header-anchor" href="#\u516D\u3001\u5404\u4E2A\u5305\u7684package-json\u914D\u7F6E" aria-hidden="true">#</a></h2><h3 id="_1-reactivity" tabindex="-1">1.reactivity <a class="header-anchor" href="#_1-reactivity" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;name&quot;: &quot;@vue/reactivity&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;version&quot;: &quot;1.0.0&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;description&quot;: &quot;&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;main&quot;: &quot;index.js&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;keywords&quot;: [],</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;author&quot;: &quot;&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;license&quot;: &quot;ISC&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;buildOptions&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;name&quot;: &quot;VueReactivity&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;formats&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;global&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;cjs&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;esm-bundler&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="_2-runtime-core" tabindex="-1">2.runtime-core <a class="header-anchor" href="#_2-runtime-core" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;name&quot;: &quot;@vue/runtime-core&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;version&quot;: &quot;1.0.0&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;description&quot;: &quot;&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;main&quot;: &quot;index.js&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;keywords&quot;: [],</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;author&quot;: &quot;&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;license&quot;: &quot;ISC&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;buildOptions&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;name&quot;: &quot;VueRuntimeCORE&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;formats&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;cjs&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;esm-bundler&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="_3-runtime-dom" tabindex="-1">3.runtime-dom <a class="header-anchor" href="#_3-runtime-dom" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;name&quot;: &quot;@vue/runtime-dom&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;version&quot;: &quot;1.0.0&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;description&quot;: &quot;&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;main&quot;: &quot;index.js&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;keywords&quot;: [],</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;author&quot;: &quot;&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;license&quot;: &quot;ISC&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;buildOptions&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;name&quot;: &quot;VueRuntimeDOM&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;formats&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;cjs&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;esm-bundler&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;global&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="_4-shared" tabindex="-1">4.shared <a class="header-anchor" href="#_4-shared" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;name&quot;: &quot;@vue/shared&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;version&quot;: &quot;1.0.0&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;description&quot;: &quot;&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;main&quot;: &quot;index.js&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;keywords&quot;: [],</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;author&quot;: &quot;&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;license&quot;: &quot;ISC&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;buildOptions&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;formats&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;cjs&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;esm-bundler&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>`,22),r=[p];function o(c,t,i,u,b,C){return a(),n("div",null,r)}const d=s(e,[["render",o]]);export{m as __pageData,d as default};
