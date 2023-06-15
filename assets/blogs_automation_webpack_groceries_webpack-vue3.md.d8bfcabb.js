import{_ as l,r as e,c as p,b as a,h as s,o as r}from"./app.5cc6121b.js";const h=JSON.parse('{"title":"webpack\u6253\u5305vue3","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u9879\u76EE\u76EE\u5F55","slug":"\u4E00\u3001\u9879\u76EE\u76EE\u5F55","link":"#\u4E00\u3001\u9879\u76EE\u76EE\u5F55","children":[]},{"level":2,"title":"\u4E8C\u3001\u8BE6\u7EC6\u914D\u7F6E","slug":"\u4E8C\u3001\u8BE6\u7EC6\u914D\u7F6E","link":"#\u4E8C\u3001\u8BE6\u7EC6\u914D\u7F6E","children":[{"level":3,"title":"1.\u5F00\u53D1\u65F6","slug":"_1-\u5F00\u53D1\u65F6","link":"#_1-\u5F00\u53D1\u65F6","children":[]},{"level":3,"title":"2.\u6253\u5305\u65F6","slug":"_2-\u6253\u5305\u65F6","link":"#_2-\u6253\u5305\u65F6","children":[]},{"level":3,"title":"3.\u57FA\u7840\u914D\u7F6E","slug":"_3-\u57FA\u7840\u914D\u7F6E","link":"#_3-\u57FA\u7840\u914D\u7F6E","children":[]},{"level":3,"title":"4.babel\u914D\u7F6E","slug":"_4-babel\u914D\u7F6E","link":"#_4-babel\u914D\u7F6E","children":[]},{"level":3,"title":"5.ts\u914D\u7F6E","slug":"_5-ts\u914D\u7F6E","link":"#_5-ts\u914D\u7F6E","children":[]},{"level":3,"title":"6.scripts\u8FD0\u884C\u547D\u4EE4","slug":"_6-scripts\u8FD0\u884C\u547D\u4EE4","link":"#_6-scripts\u8FD0\u884C\u547D\u4EE4","children":[]}]},{"level":2,"title":"\u4E09\u3001\u9700\u6CE8\u610F\u7684\u70B9","slug":"\u4E09\u3001\u9700\u6CE8\u610F\u7684\u70B9","link":"#\u4E09\u3001\u9700\u6CE8\u610F\u7684\u70B9","children":[{"level":3,"title":"1.\u7C7B\u578B\u58F0\u660E","slug":"_1-\u7C7B\u578B\u58F0\u660E","link":"#_1-\u7C7B\u578B\u58F0\u660E","children":[]},{"level":3,"title":"2.\u5F53style\u62E5\u6709scoped","slug":"_2-\u5F53style\u62E5\u6709scoped","link":"#_2-\u5F53style\u62E5\u6709scoped","children":[]},{"level":3,"title":"3.\u56FE\u7247\u7C7B\u578B\u7684loader","slug":"_3-\u56FE\u7247\u7C7B\u578B\u7684loader","link":"#_3-\u56FE\u7247\u7C7B\u578B\u7684loader","children":[]},{"level":3,"title":"4.\u8BB0\u5F97\u5728resolve\u6DFB\u52A0\u540E\u7F00\u81EA\u52A8\u8865\u9F50\u7684\u914D\u7F6E","slug":"_4-\u8BB0\u5F97\u5728resolve\u6DFB\u52A0\u540E\u7F00\u81EA\u52A8\u8865\u9F50\u7684\u914D\u7F6E","link":"#_4-\u8BB0\u5F97\u5728resolve\u6DFB\u52A0\u540E\u7F00\u81EA\u52A8\u8865\u9F50\u7684\u914D\u7F6E","children":[]},{"level":3,"title":"5.\u89E3\u6790vue\u6587\u4EF6","slug":"_5-\u89E3\u6790vue\u6587\u4EF6","link":"#_5-\u89E3\u6790vue\u6587\u4EF6","children":[]},{"level":3,"title":"6.webpack\u8F6C\u8BD1Typescript","slug":"_6-webpack\u8F6C\u8BD1typescript","link":"#_6-webpack\u8F6C\u8BD1typescript","children":[]},{"level":3,"title":"7.babel\u914D\u7F6E","slug":"_7-babel\u914D\u7F6E","link":"#_7-babel\u914D\u7F6E","children":[]},{"level":3,"title":"8.@vue/babel-preset-jsx","slug":"_8-vue-babel-preset-jsx","link":"#_8-vue-babel-preset-jsx","children":[]}]}],"relativePath":"blogs/automation/webpack/groceries/webpack-vue3.md","lastUpdated":1686812683000}'),c={name:"blogs/automation/webpack/groceries/webpack-vue3.md"},o=s(`<h1 id="webpack\u6253\u5305vue3" tabindex="-1">webpack\u6253\u5305vue3 <a class="header-anchor" href="#webpack\u6253\u5305vue3" aria-hidden="true">#</a></h1><p>\u6211\u4EEC\u7528webpack5+pnpm\u6765\u6253\u5305vue3</p><h2 id="\u4E00\u3001\u9879\u76EE\u76EE\u5F55" tabindex="-1">\u4E00\u3001\u9879\u76EE\u76EE\u5F55 <a class="header-anchor" href="#\u4E00\u3001\u9879\u76EE\u76EE\u5F55" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">- scripts</span></span>
<span class="line"><span style="color:#A6ACCD;">  - webpack.config.dev.js</span></span>
<span class="line"><span style="color:#A6ACCD;">  - webpack.config.base.js</span></span>
<span class="line"><span style="color:#A6ACCD;">  - webpack.config.prod.js</span></span>
<span class="line"><span style="color:#A6ACCD;">- src</span></span>
<span class="line"><span style="color:#A6ACCD;">- babel.config.js</span></span>
<span class="line"><span style="color:#A6ACCD;">- package.json</span></span>
<span class="line"><span style="color:#A6ACCD;">- pnpm-lock.yaml</span></span>
<span class="line"><span style="color:#A6ACCD;">- tsconfig.json</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>PS\uFF1A\u56E0\u4E3A\u6211\u4EEC\u4E00\u4E2A\u9879\u76EE\u80AF\u5B9A\u4F1A\u5206\u6210\u5F00\u53D1\u548C\u53D1\u5E03\uFF0C\u6240\u4EE5\u6211\u4EEC\u5C06webpack.config.base.js\u914D\u7F6E\u62C6\u5206\u6210prod\u548Cdev\u7248\u672C\u7684\u914D\u7F6E\uFF0C\u516C\u6709\u914D\u7F6E\u90FD\u653E\u7F6E\u4E8Ewebpack.config.base.js\u3002</p><h2 id="\u4E8C\u3001\u8BE6\u7EC6\u914D\u7F6E" tabindex="-1">\u4E8C\u3001\u8BE6\u7EC6\u914D\u7F6E <a class="header-anchor" href="#\u4E8C\u3001\u8BE6\u7EC6\u914D\u7F6E" aria-hidden="true">#</a></h2><h3 id="_1-\u5F00\u53D1\u65F6" tabindex="-1">1.\u5F00\u53D1\u65F6 <a class="header-anchor" href="#_1-\u5F00\u53D1\u65F6" aria-hidden="true">#</a></h3><p><code>webpack.config.dev.js</code></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  mode: &#39;development&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  devServer: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    port: 3000,</span></span>
<span class="line"><span style="color:#A6ACCD;">    compress: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    hot: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  cache: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    type: &#39;filesystem&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  plugins: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    new HtmlWebpackPlugin({</span></span>
<span class="line"><span style="color:#A6ACCD;">      template: &#39;./src/index.html&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    }),</span></span>
<span class="line"><span style="color:#A6ACCD;">  ],</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="_2-\u6253\u5305\u65F6" tabindex="-1">2.\u6253\u5305\u65F6 <a class="header-anchor" href="#_2-\u6253\u5305\u65F6" aria-hidden="true">#</a></h3><p><code>webpack.config.prod.js</code></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  mode: &#39;production&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  plugins: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    new HtmlWebpackPlugin({</span></span>
<span class="line"><span style="color:#A6ACCD;">      //\u521B\u5EFA\u63D2\u4EF6\u7684\u5B9E\u4F8B\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#A6ACCD;">      template: &#39;./src/index.html&#39;, //\u6307\u5B9A\u8981\u7528\u5230\u7684\u6A21\u677F\u6587\u4EF6\uFF0C\u4F1A\u81EA\u52A8\u5F15\u5165\u6253\u5305\u540E\u7684\u8D44\u6E90</span></span>
<span class="line"><span style="color:#A6ACCD;">      filename: &#39;index.html&#39;, //\u6307\u5B9A\u751F\u6210\u7684\u6587\u4EF6\u7684\u540D\u79F0\uFF0C\u8BE5\u6587\u4EF6\u5B58\u5728\u4E8E\u5185\u5B58\u4E2D\uFF0C\u5728\u76EE\u5F55\u4E2D\u4E0D\u663E\u793A</span></span>
<span class="line"><span style="color:#A6ACCD;">      minify: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        //\u53EF\u4EE5\u51CF\u5C11\u6253\u5305\u540Ehtml\u4E00\u4E9B\u4F53\u79EF\u7684\u64CD\u4F5C</span></span>
<span class="line"><span style="color:#A6ACCD;">        removeAttributeQuotes: true, //\u662F\u5426\u53BB\u6389html\u91CC\u9762\u7684\u53EF\u4EE5\u53BB\u6389\u7684\u53CC\u5F15\u53F7</span></span>
<span class="line"><span style="color:#A6ACCD;">        collapseWhitespace: true, //\u79FB\u9664\u7A7A\u683C\uFF0C\u751F\u6210\u7684html\u53D8\u6210\u4E00\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;">        removeComments: true, //\u79FB\u9664\u6CE8\u91CA</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      hash: true, //\u751F\u6210\u7684html\u91CC\u9762\u5F15\u5165\u7684\u5165\u53E3\u6587\u4EF6\u662F\u5426\u6709hash\u6233eg\uFF1Abandle.js?hash\u6233</span></span>
<span class="line"><span style="color:#A6ACCD;">    }),</span></span>
<span class="line"><span style="color:#A6ACCD;">  ],</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="_3-\u57FA\u7840\u914D\u7F6E" tabindex="-1">3.\u57FA\u7840\u914D\u7F6E <a class="header-anchor" href="#_3-\u57FA\u7840\u914D\u7F6E" aria-hidden="true">#</a></h3><p><code>webpack.config.base.js</code></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const path = require(&#39;path&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const { merge } = require(&#39;webpack-merge&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const MiniCssExtractPlugin = require(&#39;mini-css-extract-plugin&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const OptimizeCssAssetsWebpackPlugin = require(&#39;optimize-css-assets-webpack-plugin&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const WebpackBar = require(&#39;webpackbar&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const ForkTsCheckerWebpackPlugin = require(&#39;fork-ts-checker-webpack-plugin&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const { VueLoaderPlugin } = require(&#39;vue-loader&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const prodWebpackConfig = require(&#39;./webpack.config.prod&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">const devWebpackConfig = require(&#39;./webpack.config.dev&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const mergeConfig =</span></span>
<span class="line"><span style="color:#A6ACCD;">  p<wbr>rocess.env.NODE_ENV === &#39;production&#39; ? prodWebpackConfig : devWebpackConfig;</span></span>
<span class="line"><span style="color:#A6ACCD;">module.exports = merge(</span></span>
<span class="line"><span style="color:#A6ACCD;">  {</span></span>
<span class="line"><span style="color:#A6ACCD;">    entry: path.join(__dirname, &#39;../src/main.ts&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">    output: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      path: path.join(__dirname, &#39;../dist&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">      filename: &#39;./js/[name].[contenthash:5].js&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    module: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      rules: [</span></span>
<span class="line"><span style="color:#A6ACCD;">        {</span></span>
<span class="line"><span style="color:#A6ACCD;">          test: /\\.js$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">          exclude: [/node_modules/],</span></span>
<span class="line"><span style="color:#A6ACCD;">          use: [</span></span>
<span class="line"><span style="color:#A6ACCD;">            {</span></span>
<span class="line"><span style="color:#A6ACCD;">              loader: &#39;babel-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            },</span></span>
<span class="line"><span style="color:#A6ACCD;">          ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        {</span></span>
<span class="line"><span style="color:#A6ACCD;">          test: /\\.(ts|tsx)$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">          exclude: /node_modules/,</span></span>
<span class="line"><span style="color:#A6ACCD;">          use: [</span></span>
<span class="line"><span style="color:#A6ACCD;">            &#39;babel-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            {</span></span>
<span class="line"><span style="color:#A6ACCD;">              loader: &#39;ts-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">              options: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                transpileOnly: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">                happyPackMode: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">                appendTsSuffixTo: [/\\.vue$/],</span></span>
<span class="line"><span style="color:#A6ACCD;">              },</span></span>
<span class="line"><span style="color:#A6ACCD;">            },</span></span>
<span class="line"><span style="color:#A6ACCD;">          ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        {</span></span>
<span class="line"><span style="color:#A6ACCD;">          test: /\\.vue$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">          exclude: /node_modules/,</span></span>
<span class="line"><span style="color:#A6ACCD;">          loader: &#39;vue-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        {</span></span>
<span class="line"><span style="color:#A6ACCD;">          test: /\\.css$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">          use: [</span></span>
<span class="line"><span style="color:#A6ACCD;">            MiniCssExtractPlugin.loader,</span></span>
<span class="line"><span style="color:#A6ACCD;">            {</span></span>
<span class="line"><span style="color:#A6ACCD;">              loader: &#39;css-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">              options: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                modules: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">              },</span></span>
<span class="line"><span style="color:#A6ACCD;">            },</span></span>
<span class="line"><span style="color:#A6ACCD;">          ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        {</span></span>
<span class="line"><span style="color:#A6ACCD;">          test: /\\.less$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">          use: [</span></span>
<span class="line"><span style="color:#A6ACCD;">            &#39;vue-style-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            {</span></span>
<span class="line"><span style="color:#A6ACCD;">              loader: &#39;css-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">              options: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                importLoaders: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">              },</span></span>
<span class="line"><span style="color:#A6ACCD;">            },</span></span>
<span class="line"><span style="color:#A6ACCD;">            &#39;postcss-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            &#39;less-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          ],</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        {</span></span>
<span class="line"><span style="color:#A6ACCD;">          test: /\\.(png|svg|jpg|jpeg|gif)$/i,</span></span>
<span class="line"><span style="color:#A6ACCD;">          type: &#39;asset/resource&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          generator: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            filename: &#39;images/[hash][ext][query]&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          },</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        {</span></span>
<span class="line"><span style="color:#A6ACCD;">          test: /\\.html$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">          loader: &#39;html-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">      ],</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    resolve: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      extensions: [</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;.tsx&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;.ts&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;.mjs&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;.js&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;.jsx&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;.vue&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;.json&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;.wasm&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      ],</span></span>
<span class="line"><span style="color:#A6ACCD;">      alias: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;@&#39;: path.join(__dirname, &#39;../src&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    plugins: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      new MiniCssExtractPlugin({</span></span>
<span class="line"><span style="color:#A6ACCD;">        filename: &#39;css/main.css&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      }),</span></span>
<span class="line"><span style="color:#A6ACCD;">      new OptimizeCssAssetsWebpackPlugin(),</span></span>
<span class="line"><span style="color:#A6ACCD;">      new VueLoaderPlugin(),</span></span>
<span class="line"><span style="color:#A6ACCD;">      new ForkTsCheckerWebpackPlugin(),</span></span>
<span class="line"><span style="color:#A6ACCD;">      new WebpackBar({</span></span>
<span class="line"><span style="color:#A6ACCD;">        color: &#39;#85d&#39;, // \u9ED8\u8BA4green\uFF0C\u8FDB\u5EA6\u6761\u989C\u8272\u652F\u6301HEX</span></span>
<span class="line"><span style="color:#A6ACCD;">        basic: false, // \u9ED8\u8BA4true\uFF0C\u542F\u7528\u4E00\u4E2A\u7B80\u5355\u7684\u65E5\u5FD7\u62A5\u544A\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">        profile: false, // \u9ED8\u8BA4false\uFF0C\u542F\u7528\u63A2\u67E5\u5668\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">      }),</span></span>
<span class="line"><span style="color:#A6ACCD;">    ],</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  mergeConfig</span></span>
<span class="line"><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br></div></div><h3 id="_4-babel\u914D\u7F6E" tabindex="-1">4.babel\u914D\u7F6E <a class="header-anchor" href="#_4-babel\u914D\u7F6E" aria-hidden="true">#</a></h3><p><code>babel.config.js</code></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  presets: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;@vue/cli-plugin-babel/preset&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_5-ts\u914D\u7F6E" tabindex="-1">5.ts\u914D\u7F6E <a class="header-anchor" href="#_5-ts\u914D\u7F6E" aria-hidden="true">#</a></h3><p><code>tsconfig.json</code></p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;compilerOptions&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;target&quot;: &quot;esnext&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;module&quot;: &quot;esnext&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;strict&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;jsx&quot;: &quot;preserve&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;moduleResolution&quot;: &quot;node&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;skipLibCheck&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;esModuleInterop&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;allowSyntheticDefaultImports&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;forceConsistentCasingInFileNames&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;useDefineForClassFields&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;noImplicitAny&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;sourceMap&quot;: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;baseUrl&quot;: &quot;.&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;types&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;webpack-env&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ],</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;paths&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;@/*&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;src/*&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      ]</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;lib&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;esnext&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;dom&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;dom.iterable&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;scripthost&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;include&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;src/**/*.ts&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;src/**/*.tsx&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;src/**/*.vue&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;tests/**/*.ts&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;tests/**/*.tsx&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  ],</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;exclude&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;node_modules&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><h3 id="_6-scripts\u8FD0\u884C\u547D\u4EE4" tabindex="-1">6.scripts\u8FD0\u884C\u547D\u4EE4 <a class="header-anchor" href="#_6-scripts\u8FD0\u884C\u547D\u4EE4" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;dev&quot;: &quot;cross-env NODE_ENV=development webpack serve  --config ./script/webpack.config.base.js&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;build&quot;: &quot;cross-env NODE_ENV=production webpack --config ./script/webpack.config.base.js&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="\u4E09\u3001\u9700\u6CE8\u610F\u7684\u70B9" tabindex="-1">\u4E09\u3001\u9700\u6CE8\u610F\u7684\u70B9 <a class="header-anchor" href="#\u4E09\u3001\u9700\u6CE8\u610F\u7684\u70B9" aria-hidden="true">#</a></h2><h3 id="_1-\u7C7B\u578B\u58F0\u660E" tabindex="-1">1.\u7C7B\u578B\u58F0\u660E <a class="header-anchor" href="#_1-\u7C7B\u578B\u58F0\u660E" aria-hidden="true">#</a></h3><p><code>\u56E0\u4E3A\u6211\u4EEC\u4F7F\u7528\u4E86&lt;script lang=&quot;ts&quot;&gt;</code>\uFF0C\u6240\u4EE5\u4E3A\u4E86ts\u80FD\u591F\u517C\u5BB9vue\u6587\u4EF6\uFF0C\u6211\u4EEC\u9700\u8981\u5728src<code>\u76EE\u5F55\u4E0B\u521B\u5EFA\u4E00\u4E2Ashims-vue.d.ts</code>\u6587\u4EF6\uFF0C\u5185\u5BB9\u5982\u4E0B</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">declare module &#39;*.vue&#39; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  import type { DefineComponent } from &#39;vue&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  const component: DefineComponent&lt;{}, {}, any&gt;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  export default component;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_2-\u5F53style\u62E5\u6709scoped" tabindex="-1">2.\u5F53style\u62E5\u6709scoped <a class="header-anchor" href="#_2-\u5F53style\u62E5\u6709scoped" aria-hidden="true">#</a></h3><p>\u5982\u679Cvue\u6587\u4EF6\u91CC\u9762\u7684style\u4F7F\u7528\u4E86scoped\uFF0Ccss\u6837\u5F0F\u57DF\u7684\u5199\u6CD5\uFF0C<code>\u6211\u4EEC\u9700\u8981\u5C06\u539F\u6765\u7684MiniCssExtractPlugin.loader</code>\u6362\u6210<code>vue-style-loader</code></p><h3 id="_3-\u56FE\u7247\u7C7B\u578B\u7684loader" tabindex="-1">3.\u56FE\u7247\u7C7B\u578B\u7684loader <a class="header-anchor" href="#_3-\u56FE\u7247\u7C7B\u578B\u7684loader" aria-hidden="true">#</a></h3><p>\u56FE\u7247\u7C7B\u578B\u7684loader\u5728webpack5\u5DF2\u7ECF\u88AB\u5185\u7F6E\u4E86\uFF0C\u91C7\u7528<code>asset/resource</code></p><h3 id="_4-\u8BB0\u5F97\u5728resolve\u6DFB\u52A0\u540E\u7F00\u81EA\u52A8\u8865\u9F50\u7684\u914D\u7F6E" tabindex="-1">4.\u8BB0\u5F97\u5728resolve\u6DFB\u52A0\u540E\u7F00\u81EA\u52A8\u8865\u9F50\u7684\u914D\u7F6E <a class="header-anchor" href="#_4-\u8BB0\u5F97\u5728resolve\u6DFB\u52A0\u540E\u7F00\u81EA\u52A8\u8865\u9F50\u7684\u914D\u7F6E" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">extensions: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;.tsx&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;.ts&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;.mjs&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;.js&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;.jsx&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;.vue&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;.json&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;.wasm&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="_5-\u89E3\u6790vue\u6587\u4EF6" tabindex="-1">5.\u89E3\u6790vue\u6587\u4EF6 <a class="header-anchor" href="#_5-\u89E3\u6790vue\u6587\u4EF6" aria-hidden="true">#</a></h3><p>\u89E3\u6790vue\u6587\u4EF6\u9664\u4E86\u9700\u8981<code>vue-loader</code>\u4E4B\u5916\u8FD8\u9700\u8981\u4E00\u4E2Aplugin</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  test: /\\.vue$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">  exclude: /node_modules/,</span></span>
<span class="line"><span style="color:#A6ACCD;">  loader: &#39;vue-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const { VueLoaderPlugin } = require(&#39;vue-loader&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">plugins: [</span></span>
<span class="line"><span style="color:#A6ACCD;">	new VueLoaderPlugin()</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_6-webpack\u8F6C\u8BD1typescript" tabindex="-1">6.webpack\u8F6C\u8BD1Typescript <a class="header-anchor" href="#_6-webpack\u8F6C\u8BD1typescript" aria-hidden="true">#</a></h3><p>webpack\u8F6C\u8BD1Typescript\u73B0\u6709\u65B9\u6848</p><table><thead><tr><th>\u8FDB\u7A0B</th><th></th><th></th><th></th></tr></thead><tbody><tr><td>\u5355\u8FDB\u7A0B\u65B9\u6848(\u7C7B\u578B\u68C0\u67E5\u548C\u8F6C\u8BD1\u5728\u540C\u4E00\u4E2A\u8FDB\u7A0B)</td><td>ts-loader(transpileOnly\u4E3Afalse)</td><td>awesome-typescript-loader</td><td></td></tr><tr><td>\u591A\u8FDB\u7A0B\u65B9\u6848</td><td>ts-loader(transpileOnly\u4E3Atrue) + fork-ts-checker-webpack-plugin</td><td>awesome-typescript-loader + \u81EA\u5E26\u7684CheckerPlugin</td><td>babel + fork-ts-checker-webpack-plugin</td></tr></tbody></table><p>\u7EFC\u5408\u8003\u8651\u6027\u80FD\u548C\u6269\u5C55\u6027\uFF0C\u76EE\u524D\u6BD4\u8F83\u63A8\u8350\u7684\u662F<code>babel+fork-ts-checker-webpack-plugin</code>\u65B9\u6848</p><p>\u7528\u5B9E\u4F8B\u89E3\u91CA\u4E00\u4E0B\u5427\u3002</p><p>\u9996\u5148\u662F\u5355\u8FDB\u7A0B\u65B9\u6848\uFF1A</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  mode: &#39;development&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  entry: &#39;./src/index.tsx&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  output: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    path: path.resolve(__dirname, &#39;dist&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">    filename: &#39;bundle.js&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  module: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    rules: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        test: /\\.tsx?$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">        use:{</span></span>
<span class="line"><span style="color:#A6ACCD;">          loader: &#39;ts-loader&#39;, // ? \u5355\u8FDB\u7A0B\uFF0C\u53EA\u4F7F\u7528ts-loader\u8FDB\u884C&#39;\u8F6C\u8BD1&#39;\u548C\u2018\u7C7B\u578B\u68C0\u67E5\u2019</span></span>
<span class="line"><span style="color:#A6ACCD;">          options: {</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  devServer: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    contentBase: &#39;./dist&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    overlay: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  plugins: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    new HtmlWebpackPlugin(),</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>\u5355\u8FDB\u7A0B\u56E0\u4E3A\u662F\u540C\u6B65\u6240\u4EE5webpack\u53EF\u4EE5\u6536\u96C6\u9519\u8BEF\u4FE1\u606F\uFF0C\u5E76\u901A\u8FC7dev-server\u53CD\u9988\u5230\u6D4F\u89C8\u5668:</p>`,45),i=s(`<p>\u73B0\u5728\u8BD5\u8BD5\u591A\u8FDB\u7A0B\u65B9\u6848\uFF1A</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  mode: &#39;development&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  entry: &#39;./src/index.tsx&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  output: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    path: path.resolve(__dirname, &#39;dist&#39;),</span></span>
<span class="line"><span style="color:#A6ACCD;">    filename: &#39;bundle.js&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  module: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    rules: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        test: /\\.tsx?$/,</span></span>
<span class="line"><span style="color:#A6ACCD;">        use:{</span></span>
<span class="line"><span style="color:#A6ACCD;">          loader: &#39;ts-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          options: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            transpileOnly: true  // ? \u5173\u95ED\u7C7B\u578B\u68C0\u67E5\uFF0C\u5373\u53EA\u8FDB\u884C\u8F6C\u8BD1</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  devServer: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    contentBase: &#39;./dist&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    overlay: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  plugins: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    new HtmlWebpackPlugin(),</span></span>
<span class="line"><span style="color:#A6ACCD;">    new ForkTsCheckerWebpackPlugin({ // ? fork\u4E00\u4E2A\u8FDB\u7A0B\u8FDB\u884C\u68C0\u67E5\uFF0C\u5E76\u8BBE\u7F6Easync\u4E3Afalse\uFF0C\u5C06\u9519\u8BEF\u4FE1\u606F\u53CD\u9988\u7ED9webpack</span></span>
<span class="line"><span style="color:#A6ACCD;">      async: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">      eslint: false</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><p>Ok\uFF0C\u540C\u6837\u53EF\u4EE5\u5DE5\u4F5C:</p>`,3),t=s(`<p>\u5BF9\u4E8Ebabel\u8FD8\u662Fatl\uFF0C\u914D\u7F6E\u65B9\u5F0F\u540C\u7406, \u53EA\u662F\u628Ats-loader\u66FF\u6362\u800C\u5DF2\u3002</p><p>fork-ts-checker-webpack-plugin\uFF0C\u987E\u540D\u601D\u4E49\u5C31\u662F\u521B\u5EFA\u4E00\u4E2A\u65B0\u8FDB\u7A0B\uFF0C\u4E13\u95E8\u6765\u8FD0\u884CTypescript\u7C7B\u578B\u68C0\u67E5\u3002\u8FD9\u4E48\u505A\u7684\u539F\u56E0\u662F\u4E3A\u4E86\u5229\u7528\u591A\u6838\u8D44\u6E90\u6765\u63D0\u5347\u7F16\u8BD1\u7684\u901F\u5EA6. \u6240\u4EE5\u5927\u591A\u6570CLI\u90FD\u662F\u8FD9\u6837\u5B50\u914D\u7F6E\u7684\uFF1A</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">addLoader({</span></span>
<span class="line"><span style="color:#A6ACCD;">      loader: &#39;ts-loader&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      options: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // ? \u7981\u7528Typescript\u7C7B\u578B\u68C0\u67E5\uFF0C\u53EA\u505A\u8F6C\u8BD1\u3002\u8FD9\u91CC\u9762\u901F\u5EA6\u5C31\u53EF\u4EE5\u5F88\u5FEB\u4E86\uFF0C\u56E0\u4E3A\u8F6C\u8BD1\u4E0D\u8FC7\u662F\u5220\u9664\u6389\u7C7B\u578B\u6CE8\u91CA\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">        // \u73B0\u5728ts-loader\u57FA\u672C\u5DF2\u7ECF\u88ABbabel(babel7\u652F\u6301Typescript)\u53D6\u4EE3\u4E86</span></span>
<span class="line"><span style="color:#A6ACCD;">        transpileOnly: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">        appendTsSuffixTo: [&#39;\\\\.vue$&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">        // https://github.com/TypeStrong/ts-loader#happypackmode-boolean-defaultfalse</span></span>
<span class="line"><span style="color:#A6ACCD;">        happyPackMode: useThreads</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">          config</span></span>
<span class="line"><span style="color:#A6ACCD;">        .plugin(&#39;fork-ts-checker&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">          // ? \u5F15\u8FDBfork-ts-checker-webpack-plugin\u4E13\u95E8\u5728\u4E00\u4E2A\u8FDB\u7A0B\u4E2D\u8FDB\u884C\u7C7B\u578B\u68C0\u67E5</span></span>
<span class="line"><span style="color:#A6ACCD;">          .use(require(&#39;fork-ts-checker-webpack-plugin&#39;), [{</span></span>
<span class="line"><span style="color:#A6ACCD;">            vue: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">            tslint: options.lintOnSave !== false &amp;&amp; fs.existsSync(api.resolve(&#39;tslint.json&#39;)),</span></span>
<span class="line"><span style="color:#A6ACCD;">            formatter: &#39;codeframe&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            // https://github.com/TypeStrong/ts-loader#happypackmode-boolean-defaultfalse</span></span>
<span class="line"><span style="color:#A6ACCD;">            checkSyntacticErrors: useThreads</span></span>
<span class="line"><span style="color:#A6ACCD;">          }])</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>\u56E0\u4E3Afork-ts-checker-webpack-plugin\u662F\u5728\u5355\u72EC\u7684\u8FDB\u7A0B\u8DD1\u7684\uFF0C<strong>\u6240\u4EE5\u5B83\u7684\u9519\u8BEF\u6216\u8B66\u544A\u4FE1\u606F\u662F\u5F02\u6B65\u56DE\u4F20\u7ED9\u5230webpack\u8FDB\u7A0B\u7684</strong>\u3002\u800C\u5F53webpack\u81EA\u5DF1\u5904\u7406\u5B8C\u8F6C\u8BD1\u4EFB\u52A1\u540E\uFF0C\u4F1A\u5C06\u7ED3\u679C\u540C\u6B65\u62A5\u544A\u7ED9\u6D4F\u89C8\u5668\u53BB\u663E\u793A\u3002\u5C06async\u8BBE\u7F6E\u4E3Afalse\u540E\uFF0C\u5C31\u8981\u6C42webpack\u7B49\u5F85fork-ts-checker-webpack-plugin\u8FDB\u7A0B\u8FD4\u56DE\u4FE1\u606F\u3002\u4E0D\u8FC7\u8FD9\u6837\u505A\u4E5F\u53EF\u80FD\u4F1A\u62D6\u6162\u6574\u4E2Awebpack\u7684\u8F6C\u8BD1\u7B49\u5F85\u65F6\u95F4\u3002\u8FD9\u5C31\u8981\u770B\u600E\u4E48\u9009\u62E9\u4E86\u3002</p><h3 id="_7-babel\u914D\u7F6E" tabindex="-1">7.babel\u914D\u7F6E <a class="header-anchor" href="#_7-babel\u914D\u7F6E" aria-hidden="true">#</a></h3><p>\u7528vue-cli\u521B\u5EFA\u7684vue\u9879\u76EE\uFF0C\u6211\u4EEC\u53EF\u4EE5\u53D1\u73B0\u4ED6\u5728\u9884\u8BBE\u91CC\u9762\u53EA\u6709\u4E00\u4E2A\u9884\u8BBE\u914D\u7F6E</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  presets: [&quot;@vue/cli-plugin-babel/preset&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u786E\u5B9E\uFF0C\u6211\u4EEC\u81EA\u5DF1\u642D\u5EFA\u7684\u9879\u76EE\u53EA\u9700\u8981\u7528\u8FD9\u4E2A\u5C31\u597D\u4E86\uFF0C\u8FD9\u4E2A\u91CC\u9762\u5C31\u96C6\u6210\u4E86\u5305\u62EC</p><ul><li>@babel/core</li><li>@vue/babel-preset-app</li><li>babel-loader</li><li>thread-loader</li></ul><p>\u7B49\u7B49\uFF0C\u800C@vue/babel-preset-app\u53C8\u5305\u542B\u4E86</p><ul><li>@babel/core</li><li>@babel/helper-compilation-targets</li><li>@babel/helper-module-imports</li><li>@babel/plugin-proposal-class-properties</li><li>@babel/plugin-proposal-decorators</li><li>@babel/plugin-syntax-dynamic-import</li><li>@babel/plugin-syntax-jsx</li><li>@babel/plugin-transform-runtime</li><li>@babel/preset-env</li><li>@babel/runtime</li><li>@vue/babel-plugin-jsx</li><li>@vue/babel-preset-jsx</li><li>babel-plugin-dynamic-import-node</li><li>core-js</li><li>core-js-compat</li></ul><p>\u5176\u5B9E\u6211\u4EEC\u5927\u6982\u53EF\u4EE5\u731C\u5230\uFF0C\u8FD9\u4E2A\u9884\u8BBE\u5DF2\u7ECF\u628A@babel/preset-env\u90FD\u7ED9\u914D\u7F6E\u597D\u4E86\u3002</p><p>\u4E00\u5F00\u59CB\u60F3\u5728vue\u91CC\u9762\u7528jsx\u7684\u5199\u6CD5\uFF0C\u67E5\u4E86\u5F88\u591A\u8D44\u6599\u90FD\u8BF4\u7528 @vue/babel-preset-jsx\uFF0C\u8FD8\u6709\u7684\u8BF4\u7528@vue/babel-plugin-jsx\uFF0C\u5BB3\u5F97\u6211\u662F\u4E00\u987F\u914D\u7F6E\uFF0C\u5176\u5B9E\u4E0D\u7528\u914D\u7F6E\u4E86\uFF0C@vue/cli-plugin-babel/preset\u91CC\u9762\u90FD\u6709\u3002\u81F3\u4E8E\u4E0A\u9762\u7684@vue/babel-preset-jsx\u662F\u7528\u6765\u5E72\u561B\u7684\uFF1F</p><h3 id="_8-vue-babel-preset-jsx" tabindex="-1">8.@vue/babel-preset-jsx <a class="header-anchor" href="#_8-vue-babel-preset-jsx" aria-hidden="true">#</a></h3><p>Vue JSX \u63D2\u4EF6\u7684\u53EF\u914D\u7F6E\u9884\u8BBE\u3002</p><p>\u6B64 repo \u4EC5\u4E0E Babel 7.x \u517C\u5BB9\uFF0C\u5BF9\u4E8E 6.x\uFF0C\u8BF7\u4F7F\u7528<a href="https://github.com/vuejs/babel-plugin-transform-vue-jsx" target="_blank" rel="noreferrer">vuejs/babel-plugin-transform-vue-jsx</a></p><p>\u7528\u6CD5\uFF1A</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  presets: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    [</span></span>
<span class="line"><span style="color:#A6ACCD;">      &#39;@vue/babel-preset-jsx&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        vModel: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">        compositionAPI: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">    ],</span></span>
<span class="line"><span style="color:#A6ACCD;">  ],</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u53C2\u6570\u8BF4\u660E\uFF1A</p><ul><li><code>compositionAPI</code>- Enables @vue/babel-sugar-composition-api-inject-h and @vue/babel-sugar-composition-api-render-instance, support returning render function in <code>setup</code>. <ul><li>The default value is <code>false</code>;</li><li>When set to <code>&#39;auto&#39;</code> (or <code>true</code>), it will detect the Vue version in the project. If it&#39;s &gt;= 2.7, it will import the composition utilities from <code>vue</code>, otherwise from <code>@vue/composition-api</code>;</li><li>When set to <code>&#39;native&#39;</code> (or <code>&#39;naruto&#39;</code>), it will always import the composition utilities from <code>vue</code></li><li>When set to <code>plugin</code>, it will always import the composition utilities from <code>@vue/composition-api</code>, but it will redirect to <code>&#39;vue&#39;</code> itself when the vue version is <code>2.7.x</code></li><li>When set to <code>vue-demi</code>, it will always import the composition utilities from <code>vue-demi</code></li><li>When set to an object like <code>{ importSource: string; }</code>, it will always import the composition utilities from the importSource you set</li></ul></li><li><code>functional</code> <a href="https://npmmirror.com/package/@vue/babel-preset-jsx" target="_blank" rel="noreferrer">@vue/babel-sugar-functional-vue</a> - Functional components syntactic sugar</li><li><code>injectH</code> <a href="https://npmmirror.com/package/@vue/babel-preset-jsx" target="_blank" rel="noreferrer">@vue/babel-sugar-inject-h</a> - Automatic <code>h</code> injection syntactic sugar</li><li><code>vModel</code> <a href="https://npmmirror.com/package/@vue/babel-preset-jsx" target="_blank" rel="noreferrer">@vue/babel-sugar-v-model</a> - <code>vModel</code> syntactic sugar</li><li><code>vOn</code> <a href="https://npmmirror.com/package/@vue/babel-preset-jsx" target="_blank" rel="noreferrer">@vue/babel-sugar-v-on</a> - <code>vOn</code> syntactic sugar</li></ul>`,20);function b(u,C,A,m,d,y){const n=e("Image");return r(),p("div",null,[o,a(n,{src:"/automation/webpack/webpack-vue3/1.png"},null,8,["src"]),i,a(n,{src:"/automation/webpack/webpack-vue3/2.png"},null,8,["src"]),t])}const v=l(c,[["render",b]]);export{h as __pageData,v as default};
