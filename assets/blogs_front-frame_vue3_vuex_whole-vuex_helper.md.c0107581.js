import{_ as s,c as n,o as a,h as p}from"./app.f40c8d04.js";const m=JSON.parse('{"title":"vuex\u8F85\u52A9\u51FD\u6570","description":"","frontmatter":{},"headers":[],"relativePath":"blogs/front-frame/vue3/vuex/whole-vuex/helper.md","lastUpdated":1676908288000}'),l={name:"blogs/front-frame/vue3/vuex/whole-vuex/helper.md"},e=p(`<h1 id="vuex\u8F85\u52A9\u51FD\u6570" tabindex="-1">vuex\u8F85\u52A9\u51FD\u6570 <a class="header-anchor" href="#vuex\u8F85\u52A9\u51FD\u6570" aria-hidden="true">#</a></h1><p>\u6211\u4EEC\u6700\u76F4\u63A5\u7684\u4F7F\u7528vuex\u7684state\uFF0Cgetters\uFF0Cmutations\uFF0C\u4EE5\u53CAactions\u662F\u8FD9\u6837\u4F7F\u7528\u7684\u3002</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$store.state.age;</span></span>
<span class="line"><span style="color:#A6ACCD;">$store.getters.getAge;</span></span>
<span class="line"><span style="color:#A6ACCD;">$store.commit(&#39;changeAgeMutation&#39;, payload);</span></span>
<span class="line"><span style="color:#A6ACCD;">$store.dispatch(&#39;changeAgeAction&#39;, payload);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u4F46\u662F\u6BCF\u6B21\u8FD9\u6837\u5199\u4F1A\u663E\u5F97\u7279\u522B\u9EBB\u70E6\u7279\u522B\u957F\u3002</p><p>\u56E0\u6B64\u6211\u4EEC\u53EF\u4EE5\u6362\u4E00\u79CD\u5199\u6CD5</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  computed: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    age() {</span></span>
<span class="line"><span style="color:#A6ACCD;">       return this.$store.state.age;</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    getAge() {</span></span>
<span class="line"><span style="color:#A6ACCD;">       return this.$store.getters.getAge;</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    changeAgeMutation(payload) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.$store.commit(&#39;changeAgeMutation&#39;, payload);</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    changeAgeAction(payload) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.$store.dispatch(&#39;changeAgeAction&#39;, payload);</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>\u8FD9\u6837\u5199\u5C31\u53EF\u4EE5\u76F4\u63A5\u5728template\u4E2D\u4F7F\u7528age\u4EE5\u53CAgetAge\u7B49\u54CD\u5E94\u5F0F\u53D8\u91CF\uFF0C\u4EE5\u53CAchangeAgeMutation\u548CchangeAgeAction\u7B49\u51FD\u6570\u3002</p><p>\u4F46\u662F\u8FD9\u4E48\u5199\u8FD8\u4E0D\u591F\u7B80\u6D01\u3002\u56E0\u6B64vuex\u63D0\u4F9B\u4E86mapState\uFF0CmapGetters\uFF0CmapMutations\uFF0CmapActions\u8FD9\u4E9B\u8F85\u52A9\u51FD\u6570\u3002</p><p>\u4F7F\u7528\u65B9\u5F0F\u5982\u4E0B</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  computed: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...mapState([&#39;age&#39;]),</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...mapGetters([&#39;getAge&#39;])</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">  	...mapMutations([&#39;changeAgeMutation&#39;]),</span></span>
<span class="line"><span style="color:#A6ACCD;">  	...mapActions([&#39;changeAgeAction&#39;])</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u5230\u6B64\u6211\u4EEC\u7A81\u7136\u610F\u8BC6\u5230\uFF0C\u90A3\u4E0A\u9762\u7684\u5199\u6CD5\u4E0D\u5C31\u662F\u8F85\u52A9\u51FD\u6570\u7684\u5B9E\u73B0\u539F\u7406\u5417\uFF1F\u6211\u4EEC\u6574\u7406\u6210\u4E00\u4E2Ahelper.js\u6587\u4EF6</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// helper.js</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u4F20\u7ED9\u8F85\u52A9\u51FD\u6570\u7684\u53C2\u6570arrList\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u9700\u8981\u904D\u5386</span></span>
<span class="line"><span style="color:#A6ACCD;">export const mapState = (arrList) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  let obj = {};</span></span>
<span class="line"><span style="color:#A6ACCD;">  for (let i = 0; i &lt; arrList.length; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    let stateName = arrList[i];</span></span>
<span class="line"><span style="color:#A6ACCD;">    obj[stateName] = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return this.$store.state[stateName];</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  return obj;</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export const mapGetters = (arrList) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  let obj = {};</span></span>
<span class="line"><span style="color:#A6ACCD;">  for (let i = 0; i &lt; arrList.length; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    let getterName = arrList[i];</span></span>
<span class="line"><span style="color:#A6ACCD;">    obj[getterName] = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return this.$store.getters[getterName];</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  return obj;</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export const mapMutations = (arrList) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  let obj = {};</span></span>
<span class="line"><span style="color:#A6ACCD;">  for (let i = 0; i &lt; arrList.length; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    let mutationName = arrList[i];</span></span>
<span class="line"><span style="color:#A6ACCD;">    obj[mutationName] = function (payload) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.$store.commit(mutationName, payload);</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  return obj;</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export const mapActions = (arrList) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  let obj = {};</span></span>
<span class="line"><span style="color:#A6ACCD;">  for (let i = 0; i &lt; arrList.length; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    let actionName = arrList[i];</span></span>
<span class="line"><span style="color:#A6ACCD;">    obj[actionName] = function (payload) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.$store.dispatch(actionName, payload);</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  return obj;</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div><p>\u5230\u6B64\u5B8C\u6574\u7684vuex\u5C31\u5168\u90E8\u7ED3\u675F\u4E86\u3002</p>`,13),r=[e];function c(t,o,i,A,b,C){return a(),n("div",null,r)}const y=s(l,[["render",c]]);export{m as __pageData,y as default};
