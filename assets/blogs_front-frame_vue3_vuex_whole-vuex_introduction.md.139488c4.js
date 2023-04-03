import{_ as n,c as a,b as l,h as p,o as e,e as c}from"./app.9b1cc3ec.js";const D=JSON.parse('{"title":"\u524D\u8A00","description":"","frontmatter":{},"headers":[],"relativePath":"blogs/front-frame/vue3/vuex/whole-vuex/introduction.md","lastUpdated":1680491167000}'),r={name:"blogs/front-frame/vue3/vuex/whole-vuex/introduction.md"},o=p(`<h1 id="\u524D\u8A00" tabindex="-1">\u524D\u8A00 <a class="header-anchor" href="#\u524D\u8A00" aria-hidden="true">#</a></h1><p>\u4E0A\u4E00\u8282\u6211\u4EEC\u8BB2\u89E3\u7684vuex\u662F\u8131\u79BBmodules\u6982\u5FF5\u7684\u4E00\u4E2A\u7B80\u5355\u7684\u5B9E\u73B0\uFF0C\u8FD9\u4E00\u8282\u5F00\u59CB\u6211\u4EEC\u628A\u6838\u5FC3\u6982\u5FF5modules\u4E5F\u52A0\u8FDB\u6765\u3002</p><p>\u6211\u4EEC\u5148\u6765\u770B\u4E00\u4E2A\u7528\u6CD5</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// store/index.js</span></span>
<span class="line"><span style="color:#A6ACCD;">import Vue from &#39;vue&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import Vuex from &#39;vuex&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">Vue.use(Vuex);</span></span>
<span class="line"><span style="color:#A6ACCD;">export default new Vuex.Store({</span></span>
<span class="line"><span style="color:#A6ACCD;">  state: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    age: 26,</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  getters: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    getAge(state) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return state.age + 10;</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  mutations: {\u3001</span></span>
<span class="line"><span style="color:#A6ACCD;">    changeAge(state, payload) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      state.age += payload;</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  modules: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    a: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      state: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        c: 100,</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      mutations: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        changeAge(state, payload) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          console.log(&#39;c\u66F4\u65B0&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    b: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      state: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        d: 100,</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      mutations: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        changeAge(state, payload) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          console.log(&#39;d\u66F4\u65B0&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// App.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u5E74\u9F84\uFF1A{{ $store.state.age }}&lt;br /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u8BA1\u7B97\u5E74\u9F84\uFF1A{{ $store.getters.getAge }}&lt;br /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;button @click=&quot;$store.commit(&#39;changeAge&#39;, 5)&quot;&gt;\u540C\u6B65\u66F4\u65B0\u72B6\u6001&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    {{ $store.state.a.c }}</span></span>
<span class="line"><span style="color:#A6ACCD;">    {{ $store.state.b.d }}</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br></div></div><p>\u6211\u4EEC\u53D1\u73B0\u6BCF\u6B21\u70B9\u51FB\u201C\u540C\u6B65\u66F4\u65B0\u72B6\u6001\u201D\u6309\u94AE\u7684\u65F6\u5019\uFF0C\u63A7\u5236\u53F0\u4E5F\u4F1A\u8F93\u51FA\u201Cc\u66F4\u65B0\u201D\uFF0C\u201Cd\u66F4\u65B0\u201D\uFF0C\u4E5F\u5C31\u662F\u8BF4\u6BCF\u4E2A\u6A21\u5757\u4E0B\u9762\u4E0E<code>changeAge</code>\u540C\u540D\u7684mutations\u90FD\u88AB\u89E6\u53D1\u4E86\uFF0C\u597D\u50CF\u6CA1\u4F5C\u7528\u57DF\u4E00\u6837\u3002\u5176\u5B9E\u5185\u90E8\u4F1A\u628A\u540C\u540D\u7684mutations\u653E\u5728\u540C\u4E00\u4E2A\u6570\u7EC4\u91CC\u9762\uFF0C\u4E00\u65E6<code>commit</code>\u5C31\u4F1A\u89E6\u53D1\u8FD9\u4E2A\u6570\u7EC4\u4E0B\u9762\u6240\u6709\u88AB\u8BA2\u9605\u7684\u51FD\u6570\u3002\u9ED8\u8BA4\u7684\u6A21\u5757\u662F\u6CA1\u6709\u4F5C\u7528\u57DF\u95EE\u9898\u7684\u3002</p><p>\u6211\u4EEC\u518D\u6765\u770B\u4E00\u4E2A\u4F8B\u5B50</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">modules:{</span></span>
<span class="line"><span style="color:#A6ACCD;">	b: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      state: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        d: 100,</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      modules: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      	d: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      	  state: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      	  	e: 500</span></span>
<span class="line"><span style="color:#A6ACCD;">      	  }</span></span>
<span class="line"><span style="color:#A6ACCD;">      	}</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u6211\u4EEC\u53EF\u4EE5\u770B\u5230b\u4E0B\u9762\u7684state\u6709\u4E2Ad\u72B6\u6001\uFF0C\u540C\u65F6b\u7684modules\u4E0B\u9762\u4E5F\u6709\u4E2Ad\u6A21\u5757\uFF0C\u90A3\u4E48\u6211\u4EEC\u53D6\u503C<code>$store.state.b.d</code>\uFF0C\u62FF\u7684\u662Fd\u72B6\u6001\u8FD8\u662Fd\u6A21\u5757\u5462\uFF1F</p><p>\u7ECF\u68C0\u9A8C\u4F1A\u5728\u9875\u9762\u4E0A\u663E\u793A <code>{ &quot;e&quot;: 500 }</code>\uFF0C\u4E5F\u5C31\u662F\u8BF4\u62FF\u7684\u662Fd\u6A21\u5757\u3002</p><p>\u6240\u4EE5\u6211\u4EEC\u5728\u4E66\u5199\u7684\u65F6\u5019\u8981\u5C3D\u91CF\u907F\u514D\u4E00\u4E2A\u95EE\u9898\uFF0C\u5C31\u662F\u72B6\u6001\u4E0D\u8981\u548C\u6A21\u5757\u7684\u540D\u5B57\u76F8\u540C\u3002</p><p>\u8FD8\u6709\u4E00\u4E2A\u4F8B\u5B50</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">modules:{</span></span>
<span class="line"><span style="color:#A6ACCD;">	b: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      state: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        d: 100,</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      getters: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      	getD(state) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      		return state.d + 100</span></span>
<span class="line"><span style="color:#A6ACCD;">      	}</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">$store.getters.b.getD; //\u8FD9\u6837\u662F\u53D6\u4E0D\u5230\u503C\u7684\uFF0Cgetters.b is undefined</span></span>
<span class="line"><span style="color:#A6ACCD;">$store.getters.getD; //\u8FD9\u6837\u624D\u53D6\u5F97\u5230\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u518D\u6765\u770B\u770B\u6700\u540E\u4E00\u4E2A\u4F8B\u5B50</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">eg1</span></span>
<span class="line"><span style="color:#A6ACCD;">modules: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    a: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      namespaced: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">      state: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        c: 100,</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      mutations: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        changeAge(state, payload) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          console.log(&#39;c\u66F4\u65B0&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">$store.commit(&#39;a/changeAge&#39;, 5); //\u9700\u91C7\u7528/\u7684\u5F62\u5F0F\u8C03\u7528a\u6A21\u5757\u4E0B\u7684mutations</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">eg2</span></span>
<span class="line"><span style="color:#A6ACCD;">modules: {</span></span>
<span class="line"><span style="color:#A6ACCD;">	a: {}</span></span>
<span class="line"><span style="color:#A6ACCD;">	b: {</span></span>
<span class="line"><span style="color:#A6ACCD;">		modules: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            c: {</span></span>
<span class="line"><span style="color:#A6ACCD;">              namespaced: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">              state: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                e: 500,</span></span>
<span class="line"><span style="color:#A6ACCD;">              },</span></span>
<span class="line"><span style="color:#A6ACCD;">              mutations: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                changeAge(state, payload) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                  console.log(&#39;b/c \u66F4\u65B0&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">                },</span></span>
<span class="line"><span style="color:#A6ACCD;">              },</span></span>
<span class="line"><span style="color:#A6ACCD;">          },</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">$store.commit(&#39;b/c/changeAge&#39;, 5); // \u8FD9\u79CD\u60C5\u51B5\u4E0B\u7528b/c\u662F\u53D6\u4E0D\u5230changeAge\u7684\uFF0C\u56E0\u4E3Ab\u8FD9\u4E2A\u6A21\u5757\u6CA1\u6709\u5B9A\u4E49namespaced:true</span></span>
<span class="line"><span style="color:#A6ACCD;">$store.commit(&#39;c/changeAge&#39;, 5); // \u8FD9\u6837\u624D\u80FD\u53D6\u5230c\u6A21\u5757\u4E0B\u7684changeAge</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">eg3</span></span>
<span class="line"><span style="color:#A6ACCD;">modules: {</span></span>
<span class="line"><span style="color:#A6ACCD;">	a: {}</span></span>
<span class="line"><span style="color:#A6ACCD;">	b: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        namespaced: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">		modules: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            c: {</span></span>
<span class="line"><span style="color:#A6ACCD;">              state: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                e: 500,</span></span>
<span class="line"><span style="color:#A6ACCD;">              },</span></span>
<span class="line"><span style="color:#A6ACCD;">              mutations: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                changeAge(state, payload) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                  console.log(&#39;b/c \u66F4\u65B0&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">                },</span></span>
<span class="line"><span style="color:#A6ACCD;">              },</span></span>
<span class="line"><span style="color:#A6ACCD;">          },</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">$store.commit(&#39;b/changeAge&#39;, 5); // c\u6CA1\u6709\u5B9A\u4E49namespaced\uFF0C\u56E0\u6B64mutations\u6302\u8F7D\u5728b\u6A21\u5757\u4E0A</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br></div></div><p>\u56E0\u6B64\u901A\u8FC7\u4E0A\u9762\u56DB\u4E2A\u4F8B\u5B50\u6211\u4EEC\u53EF\u4EE5\u5F97\u51FA\u4E0B\u9762\u7684\u7ED3\u8BBA\uFF1A</p><ol><li>\u9ED8\u8BA4\u6A21\u5757\u6CA1\u6709\u4F5C\u7528\u57DF\u7684\u95EE\u9898</li><li>\u72B6\u6001\u4E0D\u8981\u548C\u6A21\u5757\u7684\u540D\u5B57\u76F8\u540C</li><li>\u9ED8\u8BA4\u8BA1\u7B97\u5C5E\u6027\uFF0C\u76F4\u63A5\u901A\u8FC7getters\u53D6\u503C</li><li>\u5982\u679C\u589E\u52A0namespaced:true\uFF0C\u5219\u4F1A\u5C06\u8FD9\u4E2A\u6A21\u5757\u7684\u5C5E\u6027\uFF0C\u90FD\u5C01\u88C5\u5230\u8FD9\u4E2A\u4F5C\u7528\u57DF\u4E0B</li><li>\u9ED8\u8BA4\u4F1A\u627E\u5F53\u524D\u6A21\u5757\u4E0A\u662F\u5426\u6709namespaced\uFF0C\u5E76\u4E14\u5C06\u7236\u7EA7\u7684namespaced\u4E00\u540C\u7B97\u4E0A\uFF0C\u505A\u6210\u547D\u540D\u7A7A\u95F4</li></ol><p>\u63A5\u4E0B\u6765\u6211\u4EEC\u6839\u636E\u4E0A\u9762\u4E94\u70B9\uFF0C\u6765\u5B9E\u73B0\u4E00\u4E2A\u5B8C\u6574\u7684vuex</p><p>\u6211\u8FD9\u91CC\u5148\u628A\u6E90\u7801\u653E\u4E0A\u6765\uFF0C\u5927\u5BB6\u53EF\u4EE5\u914D\u5408\u6587\u6863\u4E00\u8D77\u201C\u98DF\u7528\u201D</p>`,18);function t(i,b,A,C,u,m){const s=c("Codesandbox");return e(),a("div",null,[o,l(s,{src:"https://codesandbox.io/p/github/Nangxif/vue-vuex/draft/wild-forest?file=%2FREADME.md"},null,8,["src"])])}const d=n(r,[["render",t]]);export{D as __pageData,d as default};
