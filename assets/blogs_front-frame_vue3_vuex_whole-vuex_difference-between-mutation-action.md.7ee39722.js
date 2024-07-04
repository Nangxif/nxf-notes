import{_ as a,c as e,b as p,h as s,r as l,o as t}from"./app.15c3eca2.js";const D=JSON.parse('{"title":"\u533A\u5206mutation\u548Caction","description":"","frontmatter":{},"headers":[],"relativePath":"blogs/front-frame/vue3/vuex/whole-vuex/difference-between-mutation-action.md","lastUpdated":1720104828000}'),c={name:"blogs/front-frame/vue3/vuex/whole-vuex/difference-between-mutation-action.md"},r=s(`<h1 id="\u533A\u5206mutation\u548Caction" tabindex="-1">\u533A\u5206mutation\u548Caction <a class="header-anchor" href="#\u533A\u5206mutation\u548Caction" aria-hidden="true">#</a></h1><p>\u6211\u4EEC\u4E00\u76F4\u5728\u8BF4\u4FEE\u6539state\u4E00\u5B9A\u8981\u901A\u8FC7mutation\u6765\u4FEE\u6539\uFF0C\u4F46\u662F\u6211\u4EEC\u5728\u5B9E\u9645\u64CD\u4F5C\u7684\u65F6\u5019</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$store.state.age += 1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u8FD9\u79CD\u65B9\u5F0F\u8FD8\u662F\u53EF\u4EE5\u6210\u529F\u4FEE\u6539state\u3002\u5176\u5B9Evuex\u7684Store\u914D\u7F6E\u9879\u8FD8\u6709\u4E00\u4E2A\u5C5E\u6027\u53EBstrict\uFF0C\u8BBE\u7F6E\u4E3Atrue\uFF0C\u8868\u793A\u5F00\u542F\u4E25\u683C\u6A21\u5F0F\uFF0C\u4E25\u683C\u6A21\u5F0F\u4E0B\uFF0C\u53EA\u80FD\u901A\u8FC7mutation\u66F4\u6539\u72B6\u6001\uFF0C\u5176\u4ED6\u90FD\u4E0D\u53EF\u4EE5\u3002\u5982\u679C\u8FD8\u5F3A\u884C\u66F4\u6539\uFF0C\u63A7\u5236\u53F0\u4F1A\u62A5\u9519\uFF01\uFF01\uFF01\uFF08<em>\u867D\u7136\u4F1A\u98D8\u7EA2\u62A5\u9519\uFF0C\u4F46\u662F\u9875\u9762\u4E0A\u7684\u6570\u636E\u8FD8\u662F\u88AB\u66F4\u6539\u4E86</em>\uFF09</p>`,4),o=s(`<p>\u6211\u4EEC\u53EF\u4EE5\u5728Store\u5B9E\u4F8B\u6DFB\u52A0\u4E00\u4E2A_committing\u5C5E\u6027\uFF08\u6CA1\u6709\u9ED8\u8BA4\u503C\uFF09\uFF0C\u5F53\u8FD9\u4E2A\u5C5E\u6027\u4E3Atrue\u7684\u65F6\u5019\uFF0C\u8BF4\u660E\u6B63\u5728\u901A\u8FC7commit\u7684\u65B9\u5F0F\uFF08\u4E5F\u5C31\u662Fmutation\u7684\u65B9\u5F0F\uFF09\u66F4\u6539state\uFF0C\u8FD9\u4E2A\u65F6\u5019\u63A7\u5236\u53F0\u4E0D\u4F1A\u62A5\u9519\uFF0C\u5F53\u8FD9\u4E2A\u5C5E\u6027\u4E3Afalse\u7684\u4E4B\u540E\uFF0C\u8BF4\u660E\u5728mutation\u4E4B\u5916\u66F4\u6539\u4E86\u6570\u636E\uFF0C\u8FD9\u65F6\u5019\u63A7\u5236\u53F0\u4F1A\u62A5\u9519\u3002</p><p>\u90A3\u4E48\u5C31\u662F\u8BF4\uFF0C\u6211\u4EEC\u5728\u5408\u6CD5\u5730\u66F4\u6539state\u5730\u65B9\uFF0C\u8981\u5C06_committing\u8BBE\u7F6E\u4E3Atrue\uFF0C\u5F53\u503C\u66F4\u6539\u5B8C\u4E4B\u540E\u8981\u91CD\u7F6E\u4E3Afalse\u3002</p><p>\u90A3\u4E48\u6211\u4EEC\u53EF\u4EE5\u5728Store\u5B9E\u4F8B\u4E0A\u6DFB\u52A0\u4E00\u4E2A_withCommitting\u65B9\u6CD5\uFF0C\u8FD9\u4E2A\u65B9\u6CD5\u7684\u53C2\u6570\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u8FD9\u4E2A\u65B9\u6CD5\u5728\u8C03\u7528\u7684\u65F6\u5019\u4F1A\u5C06 _withCommitting\u53D8\u4E3Atrue\uFF0C\u5728\u6267\u884C\u53C2\u6570\u51FD\u6570\u4E4B\u540E _withCommitting\u4F1A\u91CD\u7F6E\u4E3Afalse\u3002</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">_withCommitting(fn) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    let committing = this._committing;</span></span>
<span class="line"><span style="color:#A6ACCD;">    this._committing = true; //\u5728\u51FD\u6570\u8C03\u7528\u524D \u8868\u793A_committing\u4E3Atrue</span></span>
<span class="line"><span style="color:#A6ACCD;">    fn();</span></span>
<span class="line"><span style="color:#A6ACCD;">    this._committing = committing;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u6709\u4E86\u8FD9\u4E2A\u9AD8\u9636\u51FD\u6570\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u5728\u5408\u6CD5\u66F4\u6539state\u7684\u5730\u65B9\u7528_withCommitting\u5305\u88F9\u8D77\u6765</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// \u7B2C\u4E00\u4E2A\u5730\u65B9\uFF1AinstallModule\uFF08\u4E24\u5904\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">if (path.length &gt; 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    let parent = path.slice(0, -1).reduce((memo, current) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return memo[current];</span></span>
<span class="line"><span style="color:#A6ACCD;">    }, rootState);</span></span>
<span class="line"><span style="color:#A6ACCD;">    store._withCommitting(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      Vue.set(parent, path[path.length - 1], module.state);</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">module.forEachMutation((mutation, type) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    store._mutations[namespace + type] =</span></span>
<span class="line"><span style="color:#A6ACCD;">      store._mutations[namespace + type] || [];</span></span>
<span class="line"><span style="color:#A6ACCD;">    store._mutations[namespace + type].push((payload) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      store._withCommitting(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        mutation.call(store, getState(store, path), payload);</span></span>
<span class="line"><span style="color:#A6ACCD;">      });</span></span>
<span class="line"><span style="color:#A6ACCD;">      store._subscribers.forEach((sub) =&gt; sub({ mutation, type }, store.state));</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u7B2C\u4E8C\u4E2A\u5730\u65B9\uFF1AreplaceState</span></span>
<span class="line"><span style="color:#A6ACCD;">replaceState(newState) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    this._withCommitting(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this._vm._data.$$state = newState;</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>\u63A5\u4E0B\u6765\u6211\u4EEC\u8BE5\u600E\u4E48\u5B9E\u73B0\u8FD9\u4E2A\u62A5\u9519\uFF1F</p><p>\u5728\u5B9E\u73B0resetStoreVm\u7684\u65F6\u5019\u3002\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7vue\u7684\u5B9E\u4F8B\u7684$watch\u6765\u76D1\u542Cstore._vm. _data.$$state\u7684\u53D8\u5316\uFF0C\u5982\u679C\u5728\u53D8\u5316\u7684\u65F6\u5019store. _committing\u4E3Atrue\uFF0C\u90A3\u4E48\u5C31\u8BF4\u660E\u662F\u4E00\u6B21\u5408\u89C4\u7684\u5BF9state\u7684\u64CD\u4F5C\uFF0C\u5982\u679C\u4E3Afalse\uFF0C\u90A3\u4E48\u8BF4\u660E\u662F\u4E00\u6B21\u4E0D\u5408\u89C4\u7684\u64CD\u4F5C\u3002\u5F53\u7136\uFF0C\u8FD9\u4E9B\u529F\u80FD\u53EF\u4EE5\u4F7F\u7528\u7684\u524D\u63D0\u662F\u6709\u914D\u7F6Estrict:true</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">if (store.strict) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u53EA\u8981\u72B6\u6001\u4E00\u53D8\u5316\uFF0C\u4F1A\u7ACB\u5373\u6267\u884C\uFF0C\u5728\u72B6\u6001\u53D8\u5316\u540E\u540C\u6B65\u6267\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;">    store._vm.$watch(</span></span>
<span class="line"><span style="color:#A6ACCD;">      () =&gt; store._vm._data.$$state,</span></span>
<span class="line"><span style="color:#A6ACCD;">      () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.assert(store._committing, &#39;\u5728mutation\u4E4B\u5916\u66F4\u6539\u4E86\u72B6\u6001&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">      	// \u914D\u7F6Edeep\uFF0Cstate\u6709\u6DF1\u5C42\u5D4C\u5957\u4E5F\u53EF\u4EE5\u76D1\u542C\u5230</span></span>
<span class="line"><span style="color:#A6ACCD;">        deep: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">        // \u914D\u7F6E\u540C\u6B65\uFF0C\u624D\u53EF\u4EE5\u53CA\u65F6\u5730\u62FF\u5230_committing\u7684\u6700\u65B0\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">        sync: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u5230\u8FD9\u91CCmutation\u548Caction\u7684\u533A\u522B\u4E5F\u5C31\u51FA\u6765\u4E86\uFF1A</p><ol><li><p>action\u91CC\u9762\u662F\u4E0D\u53EF\u4EE5\u76F4\u63A5\u4FEE\u6539state\u7684\uFF0C\u53EA\u80FD\u901A\u8FC7\u8C03\u7528mutation\u53BB\u4FEE\u6539</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">actions: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    changeAge({ state,commit }) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      	// \u8FD9\u79CD\u60C5\u51B5\u4E0B_committing\u4E3Afalse\uFF0C\u4F1A\u62A5\u9519</span></span>
<span class="line"><span style="color:#A6ACCD;">        state.age += 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }, 3000);</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">},</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></li><li><p>mutation\u91CC\u9762\u4E0D\u53EF\u4EE5\u5F02\u6B65\u66F4\u6539state</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">mutations: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // vue\u4E2D\u7684\u65B9\u6CD5\uFF0C\u552F\u4E00\u53EF\u4EE5\u6539\u72B6\u6001\u7684\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u66F4\u6539\u72B6\u6001\u7684\u65B9\u5F0F\u5FC5\u987B\u662F\u540C\u6B65\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">    changeAge(state, payload) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u5982\u679C\u6211\u5728mutation\u91CC\u9762\u5199\u4E86\u5F02\u6B65\u7684\u903B\u8F91\u5C31\u4F1A\u62A5\u9519</span></span>
<span class="line"><span style="color:#A6ACCD;">      setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // \u6B64\u65F6this._committing\u4E3Afalse</span></span>
<span class="line"><span style="color:#A6ACCD;">        state.age += payload;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }, 1000);</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></li></ol>`,11);function i(m,b,u,C,A,y){const n=l("Image");return t(),e("div",null,[r,p(n,{src:"/front-frame/vue3/vuex/whole-vuex/difference-between-mutation-action/1.png"}),o])}const _=a(c,[["render",i]]);export{D as __pageData,_ as default};