import{_ as s,c as n,o as a,h as p}from"./app.5838d134.js";const m=JSON.parse('{"title":"single-spa\u5B9E\u6218","description":"","frontmatter":{},"headers":[{"level":2,"title":"1.\u5B89\u88C5\u811A\u624B\u67B6","slug":"_1-\u5B89\u88C5\u811A\u624B\u67B6","link":"#_1-\u5B89\u88C5\u811A\u624B\u67B6","children":[]},{"level":2,"title":"2.\u521B\u5EFA\u57FA\u5EA7","slug":"_2-\u521B\u5EFA\u57FA\u5EA7","link":"#_2-\u521B\u5EFA\u57FA\u5EA7","children":[]},{"level":2,"title":"3.react\u5B50\u5E94\u7528\u7684\u521B\u5EFA","slug":"_3-react\u5B50\u5E94\u7528\u7684\u521B\u5EFA","link":"#_3-react\u5B50\u5E94\u7528\u7684\u521B\u5EFA","children":[]},{"level":2,"title":"4.vue\u5B50\u5E94\u7528\u7684\u521B\u5EFA","slug":"_4-vue\u5B50\u5E94\u7528\u7684\u521B\u5EFA","link":"#_4-vue\u5B50\u5E94\u7528\u7684\u521B\u5EFA","children":[]}],"relativePath":"blogs/front-frame/microfront/single-spa-use.md","lastUpdated":1680832599000}'),l={name:"blogs/front-frame/microfront/single-spa-use.md"},e=p(`<h1 id="single-spa\u5B9E\u6218" tabindex="-1">single-spa\u5B9E\u6218 <a class="header-anchor" href="#single-spa\u5B9E\u6218" aria-hidden="true">#</a></h1><h2 id="_1-\u5B89\u88C5\u811A\u624B\u67B6" tabindex="-1">1.\u5B89\u88C5\u811A\u624B\u67B6 <a class="header-anchor" href="#_1-\u5B89\u88C5\u811A\u624B\u67B6" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install create-single-spa -g</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="_2-\u521B\u5EFA\u57FA\u5EA7" tabindex="-1">2.\u521B\u5EFA\u57FA\u5EA7 <a class="header-anchor" href="#_2-\u521B\u5EFA\u57FA\u5EA7" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u901A\u8FC7single-spa\u7684\u811A\u624B\u67B6\u6765\u521B\u5EFA\u57FA\u5EA7\u4EE5\u53CA\u5B50\u5E94\u7528\uFF0C\u8FD9\u4E2A\u811A\u624B\u67B6\u4F1A\u81EA\u52A8\u5E2E\u6211\u4EEC\u751F\u6210\u4E00\u4E2A\u53EF\u4EE5\u4F5C\u4E3A\u57FA\u5EA7\u6216\u8005\u662F\u5B50\u5E94\u7528\u7684\u6A21\u677F\u3002</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">create-single-spa substrate</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u8F93\u5165\u4E4B\u540E\u4F1A\u5F39\u51FA\u4E0B\u9762\u51E0\u4E2A\u9009\u9879</span></span>
<span class="line"><span style="color:#A6ACCD;"># \u521B\u5EFA\u4E00\u4E2A\u5B50\u5E94\u7528\uFF08application\uFF09\u6216\u8005\u7269\u6599\uFF08parcel--\u591A\u4E2A\u5E94\u7528\u4E4B\u95F4\u5171\u4EAB\u7684\u4E1C\u897F\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">single-spa application / parcel</span></span>
<span class="line"><span style="color:#A6ACCD;"># \u7528\u4E8E\u8DE8\u5E94\u7528\u5171\u4EABJavaScript\u903B\u8F91\u7684\u5FAE\u5E94\u7528</span></span>
<span class="line"><span style="color:#A6ACCD;">in-browser utility module (styleguide, api cache, etc)</span></span>
<span class="line"><span style="color:#A6ACCD;"># \u521B\u5EFA\u57FA\u5EA7\u5BB9\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">single-spa root config</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u6211\u4EEC\u5148\u6765\u770B\u770Bwebpack.config.js</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const { merge } = require(&quot;webpack-merge&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const singleSpaDefaults = require(&quot;webpack-config-single-spa&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const HtmlWebpackPlugin = require(&quot;html-webpack-plugin&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">module.exports = (webpackConfigEnv, argv) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const orgName = &quot;nangxi&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  const defaultConfig = singleSpaDefaults({</span></span>
<span class="line"><span style="color:#A6ACCD;">    orgName,</span></span>
<span class="line"><span style="color:#A6ACCD;">    projectName: &quot;root-config&quot;,  // \u6700\u540E\u540D\u5B57\u4F1A\u62FC\u6210@nangxi/root-config</span></span>
<span class="line"><span style="color:#A6ACCD;">    webpackConfigEnv,</span></span>
<span class="line"><span style="color:#A6ACCD;">    argv,</span></span>
<span class="line"><span style="color:#A6ACCD;">    disableHtmlGeneration: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return merge(defaultConfig, {</span></span>
<span class="line"><span style="color:#A6ACCD;">    plugins: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      new HtmlWebpackPlugin({ // \u8FD9\u4E2A\u63D2\u4EF6\u53EF\u4EE5\u652F\u6301ejs\u6A21\u677F</span></span>
<span class="line"><span style="color:#A6ACCD;">        inject: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">        template: &quot;src/index.ejs&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        templateParameters: {</span></span>
<span class="line"><span style="color:#A6ACCD;">          isLocal: webpackConfigEnv &amp;&amp; webpackConfigEnv.isLocal,</span></span>
<span class="line"><span style="color:#A6ACCD;">          orgName,</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">      }),</span></span>
<span class="line"><span style="color:#A6ACCD;">    ],</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>\u7136\u540E\u518D\u770B\u770Bindex.ejs</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">#1</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script type=&quot;systemjs-importmap&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;imports&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;single-spa&quot;: &quot;https://cdn.jsdelivr.net/npm/single-spa@5.9.0/lib/system/single-spa.min.js&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#2</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script type=&quot;systemjs-importmap&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;imports&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;@nangxi/root-config&quot;: &quot;//localhost:9000/jw-root-config.js&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;@nangxi/react&quot;:&quot;//localhost:3000/jw-react.js&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;@nangxi/vue&quot;:&quot;//localhost:4000/js/app.js&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#3</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    System.import(&#39;@nangxi/root-config&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>\u770B\u5230\u8FD9\u91CC\u4F1A\u4E0D\u4F1A\u89C9\u5F97\u7279\u522B\u719F\u6089\uFF0C\u8DDF\u6211\u4EEC\u4E0A\u4E00\u8282\u8BB2\u7684\u4E1C\u897F\u4E00\u6837\u3002\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u6211\u7528#\u4F5C\u4E3A\u951A\u70B9\u65B9\u4FBF\u540E\u7EED\u8BB2\u89E3\u3002</p><p>\u6267\u884C#3\u7684\u65F6\u5019\uFF0C\u4F1A\u5728#2\u627E\u5230\u5BF9\u5E94\u7684import\u6A21\u5757\u5730\u5740\uFF0C\u6839\u636Esystemjs-importmap\u7684\u6620\u5C04\uFF0C\u6211\u4EEC\u627E\u5230\u57FA\u5EA7\u9879\u76EE\u7684jw-root-config.js\u6587\u4EF6\u3002\u8FD9\u4E2A\u6587\u4EF6\u5C31\u662F\u7528\u6765\u6CE8\u518C\u5E94\u7528\u7684\u3002\u6309\u7167\u4E0B\u9762\u7684\u4EE3\u7801\u6765\u8BF4\uFF0C\u662F\u6CE8\u518C\u4E86\u4E00\u4E2A\u8FDC\u7A0B\u5E94\u7528\uFF0C\u540D\u4E3A@single-spa/welcome\uFF0C\u5F53\u8DEF\u5F84\u4E3A**/**\u7684\u65F6\u5019\uFF0C\u5C31\u4F1A\u53BB\u52A0\u8F7Dwelcome\u8FDC\u7A0B\u6A21\u5757\u3002</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// jw-root-config.js</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">import { registerApplication, start } from &quot;single-spa&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u6CE8\u518C\u5E94\u7528</span></span>
<span class="line"><span style="color:#A6ACCD;">registerApplication({</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: &quot;@single-spa/welcome&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  app: () =&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    System.import( // \u8FDC\u7A0B\u52A0\u8F7D\u6A21\u5757</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ),</span></span>
<span class="line"><span style="color:#A6ACCD;">  activeWhen: (location)=&gt;location.pathname === &#39;/&#39; ,</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">start({</span></span>
<span class="line"><span style="color:#A6ACCD;">  urlRerouteOnly: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u63A5\u7740\u6211\u4EEC\u6765\u521B\u5EFA\u4E00\u4E2Areact\u6846\u67B6\u7684\u5B50\u5E94\u7528</p><h2 id="_3-react\u5B50\u5E94\u7528\u7684\u521B\u5EFA" tabindex="-1">3.react\u5B50\u5E94\u7528\u7684\u521B\u5EFA <a class="header-anchor" href="#_3-react\u5B50\u5E94\u7528\u7684\u521B\u5EFA" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">create-single-spa react-project</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u63A5\u7740\u914D\u7F6E\u8DEF\u7531</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install react-router-dom</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">import { BrowserRouter as Router, Route, Link, Routes } from &#39;react-router-dom&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import Home from &#39;./components/Home.js&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import About from &#39;./components/About.js&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default function Root(props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return &lt;Router basename=&quot;/react&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;Link to=&quot;/&quot;&gt;Home React&lt;/Link&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;Link to=&quot;/about&quot;&gt;About React&lt;/Link&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;Routes&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;Route path=&quot;/&quot; element={&lt;Home /&gt;} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;Route path=&quot;/about&quot; element={&lt;About /&gt;} /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/Routes&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/Router&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u7136\u540E\u4FEE\u6539webpack.config.js\u914D\u7F6E</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const { merge } = require(&quot;webpack-merge&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const singleSpaDefaults = require(&quot;webpack-config-single-spa-react&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">module.exports = (webpackConfigEnv, argv) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const defaultConfig = singleSpaDefaults({</span></span>
<span class="line"><span style="color:#A6ACCD;">    orgName: &quot;nangxi&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    projectName: &quot;react&quot;, // @nangxi/react</span></span>
<span class="line"><span style="color:#A6ACCD;">    webpackConfigEnv,</span></span>
<span class="line"><span style="color:#A6ACCD;">    argv,</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;">  delete defaultConfig.externals; // \u8BA9react \u548C react-dom \u5C31\u6253\u5305\u5230\u5F53\u524D\u9879\u76EE\u4E2D</span></span>
<span class="line"><span style="color:#A6ACCD;">  return merge(defaultConfig, {</span></span>
<span class="line"><span style="color:#A6ACCD;">    devServer:{</span></span>
<span class="line"><span style="color:#A6ACCD;">      port:3000 // react \u9879\u76EE</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u7528\u4E0B\u9762\u7684\u547D\u4EE4\u884C\u8DD1\u9879\u76EE</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm run start</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u8DD1\u5B8C\u9879\u76EE\u4E4B\u540E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728\u6D4F\u89C8\u5668\u770B\u5230\u5B83\u66B4\u9732\u51FA\u4E00\u4E2A\u8DEF\u5F84\uFF0C\u8FD9\u4E2A\u8DEF\u5F84\u5C31\u662Fwebpack\u6253\u5305\u4E4B\u540E\u751F\u6210\u7684\u6587\u4EF6</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">http://localhost:3000/nangxi-react.js</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u63A5\u4E0B\u6765\u6211\u4EEC\u628A\u5B50\u9879\u76EE\u96C6\u6210\u5230\u7236\u5E94\u7528</p><p>\u5728\u4E3B\u5E94\u7528\u7684jw-root-config.js\u4E2D\u6DFB\u52A0</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">registerApplication({</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: &quot;@nangxi/react&quot;, // \u4E0D\u91CD\u540D\u5373\u53EF</span></span>
<span class="line"><span style="color:#A6ACCD;">  app: () =&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    System.import(&#39;@nangxi/react&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">  activeWhen: (location)=&gt;location.pathname.startsWith(&#39;/react&#39;)  ,</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u7136\u540E\u5728\u4E3B\u5E94\u7528\u7684ejs\u6587\u4EF6\u4E2D\u6DFB\u52A0</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;script type=&quot;systemjs-importmap&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;imports&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;@nangxi/root-config&quot;: &quot;//localhost:9000/jw-root-config.js&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;@nangxi/react&quot;:&quot;//localhost:3000/jw-react.js&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="_4-vue\u5B50\u5E94\u7528\u7684\u521B\u5EFA" tabindex="-1">4.vue\u5B50\u5E94\u7528\u7684\u521B\u5EFA <a class="header-anchor" href="#_4-vue\u5B50\u5E94\u7528\u7684\u521B\u5EFA" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">create-single-spa vue-project</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u7136\u540E\u6211\u4EEC\u9700\u8981\u5C06vue\u7684\u914D\u7F6E\u4FEE\u6539\u4E00\u4E0B</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const { defineConfig } = require(&#39;@vue/cli-service&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">module.exports = defineConfig({</span></span>
<span class="line"><span style="color:#A6ACCD;">    transpileDependencies: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u8BBE\u7F6E\u9759\u6001\u8D44\u6E90\u8DEF\u5F84\uFF0C\u5426\u5219\u9759\u6001\u8D44\u6E90\u5730\u5740\u4F1A\u6709\u95EE\u9898</span></span>
<span class="line"><span style="color:#A6ACCD;">    publicPath: &#39;http://localhost:3002&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5B9A\u4E49\u7AEF\u53E3\u53F7</span></span>
<span class="line"><span style="color:#A6ACCD;">    devServer: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    	port: 3002</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    chainWebpack: (config) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">       // \u8FD9\u6BB5\u914D\u7F6E\u4E0D\u52A0\u7684\u8BDD\uFF0Cvue3\u4F1A\u62A5\u9519\uFF0C\u8FD9\u4E2A\u63D2\u4EF6\u5F15\u8D77\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (config.plugins.has(&quot;SystemJSPublicPathWebpackPlugin&quot;)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        	config.plugins.delete(&quot;SystemJSPublicPathWebpackPlugin&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u4FEE\u6539\u8DEF\u7531\u914D\u7F6E</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const router = createRouter({</span></span>
<span class="line"><span style="color:#A6ACCD;">  history: createWebHistory(&#39;/vue&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">  routes</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u7528\u4E0B\u9762\u7684\u547D\u4EE4\u884C\u8DD1\u9879\u76EE</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm run serve</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u8DD1\u5B8C\u9879\u76EE\u4E4B\u540E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728\u6D4F\u89C8\u5668\u770B\u5230\u5B83\u66B4\u9732\u51FA\u4E00\u4E2A\u8DEF\u5F84\uFF0C\u8FD9\u4E2A\u8DEF\u5F84\u5C31\u662Fwebpack\u6253\u5305\u4E4B\u540E\u751F\u6210\u7684\u6587\u4EF6</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">http://localhost:4000/js/app.js</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u63A5\u4E0B\u6765\u6211\u4EEC\u628A\u5B50\u9879\u76EE\u96C6\u6210\u5230\u7236\u5E94\u7528</p><p>\u5728\u4E3B\u5E94\u7528\u7684jw-root-config.js\u4E2D\u6DFB\u52A0</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">registerApplication({</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: &quot;@nangxi/vue&quot;, // \u4E0D\u91CD\u540D\u5373\u53EF</span></span>
<span class="line"><span style="color:#A6ACCD;">  app: () =&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    System.import(&#39;@nangxi/vue&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">  activeWhen: (location)=&gt;location.pathname.startsWith(&#39;/vue&#39;)  ,</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u7136\u540E\u5728\u4E3B\u5E94\u7528\u7684ejs\u6587\u4EF6\u4E2D\u6DFB\u52A0</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;script type=&quot;systemjs-importmap&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;imports&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;@nangxi/root-config&quot;: &quot;//localhost:9000/jw-root-config.js&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;@nangxi/react&quot;:&quot;//localhost:3000/jw-react.js&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;@nangxi/vue&quot;:&quot;//localhost:4000/js/app.js&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,44),r=[e];function c(o,t,i,u,b,C){return a(),n("div",null,r)}const y=s(l,[["render",c]]);export{m as __pageData,y as default};
