import{_ as s,c as n,o as a,h as e}from"./app.cdb0f69d.js";const m=JSON.parse('{"title":"reactive","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001reactive\u4EE3\u7801\u7247\u6BB5","slug":"\u4E00\u3001reactive\u4EE3\u7801\u7247\u6BB5","link":"#\u4E00\u3001reactive\u4EE3\u7801\u7247\u6BB5","children":[]},{"level":2,"title":"\u4E8C\u3001mutableHandlers\u4EE3\u7801\u7247\u6BB5","slug":"\u4E8C\u3001mutablehandlers\u4EE3\u7801\u7247\u6BB5","link":"#\u4E8C\u3001mutablehandlers\u4EE3\u7801\u7247\u6BB5","children":[]}],"relativePath":"blogs/front-frame/vue3/reactivity/reactive.md","lastUpdated":1664359202000}'),l={name:"blogs/front-frame/vue3/reactivity/reactive.md"},p=e(`<h1 id="reactive" tabindex="-1">reactive <a class="header-anchor" href="#reactive" aria-hidden="true">#</a></h1><p>Vue3\u63D0\u4F9B\u7684reactive\u65B9\u6CD5\u53EF\u5C06\u4E00\u4E2A\u5BF9\u8C61\u5305\u88C5\u6210\u4E00\u4E2Aproxy\u5BF9\u8C61\uFF0C\u4ECE\u800C\u5B9E\u73B0\u5BF9\u8FD9\u4E2A\u5BF9\u8C61\u7684\u4F9D\u8D56\u6536\u96C6\uFF0Creactive\u91C7\u7528\u4E86\u4E00\u79CD\u61D2\u4EE3\u7406\u7684\u65B9\u5F0F\uFF0C\u5F53\u6211\u4EEC\u4F20\u7ED9reactive\u7684\u5BF9\u8C61\u4F8B\u5982\u662F\u8FD9\u6837\u7684</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const reactiveData = reactive({</span></span>
<span class="line"><span style="color:#A6ACCD;">	a: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">	b: {</span></span>
<span class="line"><span style="color:#A6ACCD;">		c: 2</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u90A3\u6211\u4EEC\u5728\u53D6reactiveData\u7684\u65F6\u5019\u6211\u4EEC\u4F1A\u53D1\u73B0\u5B83\u662F\u4E00\u4E2Aproxy\uFF0C\u4F46\u662Fb\u5374\u8FD8\u4E0D\u662F\u4E00\u4E2Aproxy\uFF0C\u4F46\u662F\u5F53\u6211\u4EEC\u53D6reactiveData.b\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u5C31\u53D1\u73B0\u5B83\u53D8\u6210\u4E86\u4E00\u4E2Aproxy\uFF0C\u8FD9\u5C31\u662F\u61D2\u4EE3\u7406\uFF0C\u4E0EVue2\u7684\u5904\u7406\u65B9\u5F0F\u6709\u5F88\u5927\u7684\u4E0D\u540C\uFF0CVue2\u5728\u4E00\u5F00\u59CB\u7684\u65F6\u5019\uFF0C\u5C31\u5229\u7528\u9012\u5F52\u5C06\u5D4C\u5957\u5BF9\u8C61\u90FD\u7528dineProperty\u8F6C\u6362\u4E86\u4E00\u904D\uFF0C\u8FD9\u6837\u5F88\u8017\u6027\u80FD\u3002</p><h2 id="\u4E00\u3001reactive\u4EE3\u7801\u7247\u6BB5" tabindex="-1">\u4E00\u3001reactive\u4EE3\u7801\u7247\u6BB5 <a class="header-anchor" href="#\u4E00\u3001reactive\u4EE3\u7801\u7247\u6BB5" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { isObject } from &#39;@vue/shared&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { mutableHandlers, ReactiveFlags } from &#39;./baseHandler&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u5C06\u6570\u636E\u8F6C\u5316\u6210\u54CD\u5E94\u5F0F\u7684\u6570\u636E\uFF0C\u53EA\u80FD\u505A\u5BF9\u8C61\u7684\u4EE3\u7406</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u56E0\u4E3A\u540C\u4E00\u4E2A\u5BF9\u8C61\u53EF\u4EE5\u88AB\u591A\u6B21\u4EE3\u7406\uFF0C\u6D6A\u8D39\u6027\u80FD\uFF0C\u6240\u4EE5\u9700\u8981\u52A0\u4E00\u4E2A\u7F13\u5B58</span></span>
<span class="line"><span style="color:#A6ACCD;">const reactiveMap = new WeakMap(); // key\u53EA\u80FD\u662F\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u5224\u65AD\u4E00\u4E2A\u5BF9\u8C61\u662F\u5426\u662Freactive\u4EE3\u7406\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#A6ACCD;">export function isReactive(value) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return !!(value &amp;&amp; value[ReactiveFlags.IS_REACTIVE]);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export function reactive(target: Record&lt;string, any&gt;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (!isObject(target)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (target[ReactiveFlags.IS_REACTIVE]) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // target[ReactiveFlags.IS_REACTIVE]\u8FD9\u91CC\u4F1A\u89E6\u53D1\u4E0B\u9762\u7684get</span></span>
<span class="line"><span style="color:#A6ACCD;">    return target;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  /* \u5E76\u6CA1\u6709\u91CD\u65B0\u5B9A\u4E49\u5C5E\u6027\uFF0C\u53EA\u662F\u4EE3\u7406\uFF0C\u5728\u53D6\u503C\u7684\u65F6\u5019\u4F1A\u8C03\u7528get</span></span>
<span class="line"><span style="color:#A6ACCD;">   \u5F53\u8D4B\u503C\u7684\u65F6\u5019\u4F1A\u8C03\u7528set</span></span>
<span class="line"><span style="color:#A6ACCD;">  */</span></span>
<span class="line"><span style="color:#A6ACCD;">  let exisitingProxy = reactiveMap.get(target);</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (exisitingProxy) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return exisitingProxy;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  /**</span></span>
<span class="line"><span style="color:#A6ACCD;"> * \u6709\u53EF\u80FD\u4F1A\u51FA\u73B0\u8FD9\u79CD\u5199\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;"> *  const state1 = reactive(data);</span></span>
<span class="line"><span style="color:#A6ACCD;">    const state2 = reactive(state1);</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u56E0\u6B64\u5728\u4EE3\u7406\u4E4B\u524D\u9700\u8981\u5224\u65AD\u6709\u6CA1\u6709\u88AB\u4EE3\u7406\u8FC7</span></span>
<span class="line"><span style="color:#A6ACCD;"> * */</span></span>
<span class="line"><span style="color:#A6ACCD;">  //   \u7B2C\u4E00\u6B21\u666E\u901A\u5BF9\u8C61\u4EE3\u7406\uFF0C\u6211\u4EEC\u4F1A\u901A\u8FC7new Proxy\u4EE3\u7406\u4E00\u6B21</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u4E0B\u4E00\u6B21\u4F60\u4F20\u9012\u7684\u662Fproxy\uFF0C\u6211\u4EEC\u53EF\u4EE5\u770B\u4E00\u4E0B\u5979\u6709\u6CA1\u6709\u4EE3\u7406\u8FC7</span></span>
<span class="line"><span style="color:#A6ACCD;">  //   \u5982\u679C\u8BBF\u95EE\u8FD9\u4E2Aproxy \u6709get\u65B9\u6CD5\u7684\u65F6\u5019\u8BF4\u660E\u5C31\u8BBF\u95EE\u8FC7\u4E86</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const proxy = new Proxy(target, mutableHandlers);</span></span>
<span class="line"><span style="color:#A6ACCD;">  reactiveMap.set(target, proxy);</span></span>
<span class="line"><span style="color:#A6ACCD;">  return proxy;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/** \u4E0A\u9762\u7684get\u4E4B\u6240\u4EE5\u4E0D\u7528return target[key]\uFF0C</span></span>
<span class="line"><span style="color:#A6ACCD;"> * \u662F\u56E0\u4E3A\u53EF\u80FD\u4F1A\u51FA\u73B0\u8FD9\u79CD\u7C7B\u578B\u7684\u4EE3\u7406\u6570\u636E</span></span>
<span class="line"><span style="color:#A6ACCD;"> * let target = {</span></span>
<span class="line"><span style="color:#A6ACCD;"> *      name: &#39;zf&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;"> *      get alias(){</span></span>
<span class="line"><span style="color:#A6ACCD;"> *          return this.name</span></span>
<span class="line"><span style="color:#A6ACCD;"> *      }</span></span>
<span class="line"><span style="color:#A6ACCD;"> * }</span></span>
<span class="line"><span style="color:#A6ACCD;"> * const proxy = new Proxy(target, {</span></span>
<span class="line"><span style="color:#A6ACCD;">    get(target, key, receiver) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return target[key];</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    set(target, key, value, receiver) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      target[key] = value;</span></span>
<span class="line"><span style="color:#A6ACCD;">        return true;</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">    \u8FD9\u6837\u5982\u679C\u6211\u8981\u53D6\u503Cproxy[alias]\uFF0C\u90A3\u4E48get\u53EA\u4F1A\u6267\u884C\u4E00\u6B21\uFF0C\u800C\u4E0D\u4F1A\u6267\u884C\u4E24\u6B21</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u4E3A\u4F55\u8BF4\u8981\u6267\u884C\u4E24\u6B21\uFF0C\u56E0\u4E3Aalias\u91CC\u9762\u8FD8\u6709\u83B7\u53D6\u5F53\u524D\u4E0A\u4E0B\u6587\u7684name\u503C\uFF0C\u800C\u5982\u679C\u7528</span></span>
<span class="line"><span style="color:#A6ACCD;">    target[key]\u8FD9\u79CD\u65B9\u5F0F\u53D6\u503C\u7684\u8BDD\uFF0Cthis.name\u7684this\u6307\u5411\u7684\u662Ftarget\uFF0Ctarget\u662F</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u6E90\u5BF9\u8C61\u5E76\u4E0D\u662F\u4EE3\u7406\u5BF9\u8C61\uFF0C\u81EA\u7136\u4E0D\u4F1A\u91CD\u65B0\u8D70\u4E00\u6B21get</span></span>
<span class="line"><span style="color:#A6ACCD;">*/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br></div></div><p>PS\uFF1Areative\u603B\u5171\u5C31\u505A\u4E86\u8FD9\u4E48\u51E0\u4EF6\u4E8B</p><ol><li><p>\u5224\u65AD\u662F\u5426\u4E3A\u5BF9\u8C61\uFF0C\u5982\u679C\u4E0D\u662F\u5BF9\u8C61\u7684\u8BDD\u5C31\u76F4\u63A5\u8FD4\u56DEundefined\uFF1B</p></li><li><p>Vue3\u4E3Areactive\u5BF9\u8C61\u63D0\u4F9B\u4E86\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7684\u5C5E\u6027\u53EB<code>__v_isReactive</code>\uFF0C\u53EA\u6709reactive\u5BF9\u8C61\u624D\u53EF\u4EE5\u62FF\u5230 <code>__v_isReactive</code>\u5C5E\u6027\uFF0C\u5F53\u6211\u4EEC\u5BF9\u4E00\u4E2Areactive\u5BF9\u8C61\u518D\u8FDB\u884Creactive\u7684\u65F6\u5019\uFF0C\u90A3\u4E48\u4F1A\u53BB\u5224\u65AD\u5BF9\u8C61\u91CC\u9762\u6709\u6CA1\u6709<code>__v_isReactive</code>\uFF0C\u6709\u7684\u8BDD\u76F4\u63A5\u8FD4\u56DEreactive\u8FC7\u7684\u5BF9\u8C61\uFF1B</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const data = { name: &#39;nangxi&#39;, age: 26, address: { num: 200 } };</span></span>
<span class="line"><span style="color:#A6ACCD;">const state = reactive(data);</span></span>
<span class="line"><span style="color:#A6ACCD;">const state1 = reactive(state);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li><li><p>\u5982\u679C\u62FF\u4E00\u4E2A\u5BF9\u8C61\u591A\u6B21\u8FDB\u884Creative\uFF0C\u90A3\u4E48\u5B83\u53EA\u4F1A\u4EE3\u7406\u4E00\u6B21\uFF0C\u540E\u9762\u76F4\u63A5\u4ECEreactiveMap\u91CC\u9762\u53D6\u7F13\u5B58\u3002</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const data = { name: &#39;nangxi&#39;, age: 26, address: { num: 200 } };</span></span>
<span class="line"><span style="color:#A6ACCD;">const state1 = reactive(data);</span></span>
<span class="line"><span style="color:#A6ACCD;">const state2 = reactive(data);</span></span>
<span class="line"><span style="color:#A6ACCD;">state1 === state2 // true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li></ol><h2 id="\u4E8C\u3001mutablehandlers\u4EE3\u7801\u7247\u6BB5" tabindex="-1">\u4E8C\u3001mutableHandlers\u4EE3\u7801\u7247\u6BB5 <a class="header-anchor" href="#\u4E8C\u3001mutablehandlers\u4EE3\u7801\u7247\u6BB5" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { isObject } from &#39;@vue/shared&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { activeEffect, track, trigger } from &#39;./effect&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { reactive } from &#39;./reactive&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">export enum ReactiveFlags {</span></span>
<span class="line"><span style="color:#A6ACCD;">  IS_REACTIVE = &#39;__v_isReactive&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">export const mutableHandlers = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  get(target: Record&lt;string, any&gt;, key: string | symbol, receiver: any) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (key === ReactiveFlags.IS_REACTIVE) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return true;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u6211\u4EEC\u9700\u8981\u628AactiveEffect\u548Ckey\u5173\u8054\u5728\u4E00\u8D77\uFF0C\u5C31\u662F\u8BF4\u54EA\u4E2A\u5C5E\u6027\u5BF9\u5E94\u7684effect\u662F\u8C01</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u6240\u4EE5\u6211\u4EEC\u8FDB\u884C\u4F9D\u8D56\u6536\u96C6</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u4E00\u4E2A\u5C5E\u6027\u53EF\u4EE5\u5BF9\u5E94\u591A\u4E2Aeffect</span></span>
<span class="line"><span style="color:#A6ACCD;">    /**</span></span>
<span class="line"><span style="color:#A6ACCD;">     * effect(()=&gt;{state.name})</span></span>
<span class="line"><span style="color:#A6ACCD;">     * effect(()=&gt;{state.name})</span></span>
<span class="line"><span style="color:#A6ACCD;">     * \u4E0A\u9762\u7684name\u5BF9\u5E94\u4E24\u4E2Aeffect</span></span>
<span class="line"><span style="color:#A6ACCD;">     * \u4E00\u4E2A\u5BF9\u8C61\u4E0A\u7684\u67D0\u4E2A\u5C5E\u6027\u53EF\u80FD\u5BF9\u5E94\u591A\u4E2Aeffect</span></span>
<span class="line"><span style="color:#A6ACCD;">     * \u6211\u4EEC\u53EF\u4EE5\u7528\u4E00\u4E2Aweakmap\u7ED3\u6784\uFF0C\u4E0B\u9762\u7684name\u6307\u7684\u662F\u5C5E\u6027\uFF0CSet\u6307\u7684\u662Feffect</span></span>
<span class="line"><span style="color:#A6ACCD;">     * WeakMap = {\u5BF9\u8C61:Map{name:Set}}</span></span>
<span class="line"><span style="color:#A6ACCD;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    track(target, &#39;get&#39;, key);</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u53BB\u4EE3\u7406\u5BF9\u8C61\u4E0A\u53D6\u503C\uFF0C\u5C31\u8D70get</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u8FD9\u91CC\u53EF\u4EE5\u76D1\u63A7\u5230\u53D6\u503C\u4E86</span></span>
<span class="line"><span style="color:#A6ACCD;">    // return target[key]</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u6709\u53EF\u80FD\u83B7\u53D6\u5230\u7684\u8FD9\u4E2A\u503C\u8FD8\u662F\u5BF9\u8C61\uFF0C\u8FD9\u4E2A\u5BF9\u8C61\u4E5F\u8981\u505A\u4EE3\u7406</span></span>
<span class="line"><span style="color:#A6ACCD;">    let res = Reflect.get(target, key, receiver);</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (isObject(res)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return reactive(res); //\u6DF1\u5EA6\u4EE3\u7406\u7684\u5B9E\u73B0\uFF0C\u6027\u80FD\u597D\uFF0C\u53D6\u503C\u5C31\u53EF\u4EE5\u8FDB\u884C\u4EE3\u7406\uFF0C\u4E0D\u53D6\u5C31\u4E0D\u4EE3\u7406\uFF0Cvue2\u662F\u4E00\u4E0A\u6765\u5C31\u9012\u5F52\u4EE3\u7406\uFF0C\u6027\u80FD\u65B9\u9762\u53EF\u60F3\u800C\u77E5</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    return res as any;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  set(</span></span>
<span class="line"><span style="color:#A6ACCD;">    target: Record&lt;string, any&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    key: string | symbol,</span></span>
<span class="line"><span style="color:#A6ACCD;">    value: any,</span></span>
<span class="line"><span style="color:#A6ACCD;">    receiver: any</span></span>
<span class="line"><span style="color:#A6ACCD;">  ) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u53BB\u4EE3\u7406\u8BBE\u7F6E\u503C\uFF0C\u6267\u884Cset</span></span>
<span class="line"><span style="color:#A6ACCD;">    let oldValue = target[key as string];</span></span>
<span class="line"><span style="color:#A6ACCD;">    let result = Reflect.set(target, key, value, receiver);</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (oldValue !== value) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u503C\u53D8\u5316\u4E86 \u8981\u66F4\u65B0\u4E86</span></span>
<span class="line"><span style="color:#A6ACCD;">      trigger(target, &#39;set&#39;, key, value, oldValue);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u8FD9\u91CC\u53EF\u4EE5\u76D1\u63A7\u5230\u8BBE\u7F6E\u503C\u4E86</span></span>
<span class="line"><span style="color:#A6ACCD;">    return result;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br></div></div><p>reactive\u4E4B\u6240\u4EE5\u505A\u6210\u4EE3\u7406\u5BF9\u8C61\uFF0C\u90A3\u662F\u56E0\u4E3A\u9700\u8981\u7528\u5B83\u6765\u505A\u4F9D\u8D56\u6536\u96C6<code>track</code>\u4EE5\u53CA\u4F9D\u8D56\u7684\u89E6\u53D1<code>trigger</code>\uFF0C\u5F53\u6211\u4EEC\u53D6\u503C\u7684\u65F6\u5019\u8FDB\u884C\u4F9D\u8D56\u6536\u96C6\uFF0C\u5F53\u6211\u4EEC\u8BBE\u7F6E\u503C\u7684\u65F6\u5019\u9700\u8981\u89E6\u53D1\u6536\u96C6\u7684\u4F9D\u8D56\uFF0C\u5E76\u4E14\u628A\u4E4B\u524D\u6536\u96C6\u7684\u4F9D\u8D56\u6E05\u9664\u6389\u518D\u91CD\u65B0\u6536\u96C6\u3002</p>`,11),r=[p];function c(t,i,o,b,A,C){return a(),n("div",null,r)}const y=s(l,[["render",c]]);export{m as __pageData,y as default};
