import{_ as s,c as n,o as a,h as p}from"./app.3ee162e0.js";const m=JSON.parse('{"title":"\u751F\u547D\u5468\u671F","description":"","frontmatter":{},"headers":[],"relativePath":"blogs/front-frame/vue3/sound-code/runtime-core/apiLifecycle.md","lastUpdated":1699785161000}'),e={name:"blogs/front-frame/vue3/sound-code/runtime-core/apiLifecycle.md"},l=p(`<h1 id="\u751F\u547D\u5468\u671F" tabindex="-1">\u751F\u547D\u5468\u671F <a class="header-anchor" href="#\u751F\u547D\u5468\u671F" aria-hidden="true">#</a></h1><p>vue\u7684\u751F\u547D\u5468\u671F\u6709\u5F88\u591A\uFF0C\u5728\u8FD9\u91CC\u6211\u4EEC\u53EA\u8BB2\u56DB\u4E2A\uFF0C\u80FD\u4E86\u89E3\u539F\u7406\u5C31\u884C\u4E86</p><ul><li>onBeforeMount</li><li>onMounted</li><li>onBeforeUpdate</li><li>onUpdated</li></ul><p>\u6211\u4EEC\u4F7F\u7528\u5B83\u4EEC\u53EF\u80FD\u662F\u8FD9\u6837\u7684</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const useCounter = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const state = reactive({ count: 1 });</span></span>
<span class="line"><span style="color:#A6ACCD;">    const dobuleCount = computed(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return state.count * 2;</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;">    const handleClick = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      state.count++;</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u751F\u547D\u5468\u671F\u4F1A\u81EA\u52A8\u548C\u5F53\u524D\u7684\u7EC4\u4EF6\u5173\u8054\u8D77\u6765</span></span>
<span class="line"><span style="color:#A6ACCD;">    onBeforeMount(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(&#39;before mount&#39;, getCurrentInstance());</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;">    onMounted(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(&#39;mounted1&#39;, getCurrentInstance());</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;">    onMounted(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(&#39;mounted2&#39;, getCurrentInstance());</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;">    onBeforeUpdate(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(&#39;before update&#39;, getCurrentInstance());</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;">    onUpdated(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(&#39;updated&#39;, getCurrentInstance());</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;setup&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    return { state, handleClick, dobuleCount };</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">const VueComponent = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    setup() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      const { state: counter, handleClick, dobuleCount } = useCounter();</span></span>
<span class="line"><span style="color:#A6ACCD;">      return {</span></span>
<span class="line"><span style="color:#A6ACCD;">        ...toRefs(counter),</span></span>
<span class="line"><span style="color:#A6ACCD;">        dobuleCount,</span></span>
<span class="line"><span style="color:#A6ACCD;">        handleClick,</span></span>
<span class="line"><span style="color:#A6ACCD;">      };</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(&#39;render&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">      return h(</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;p&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        { onClick: this.handleClick },</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.count.value + &#39;:&#39; + this.dobuleCount</span></span>
<span class="line"><span style="color:#A6ACCD;">      );</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">render(h(VueComponent), app);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u4E0A\u9762\u7684\u4F8B\u5B50\u8F93\u51FA\u7684\u7ED3\u679C\u4E3A</span></span>
<span class="line"><span style="color:#A6ACCD;">setup</span></span>
<span class="line"><span style="color:#A6ACCD;">before mount</span></span>
<span class="line"><span style="color:#A6ACCD;">render</span></span>
<span class="line"><span style="color:#A6ACCD;">mounted1</span></span>
<span class="line"><span style="color:#A6ACCD;">mounted2</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u70B9\u51FB\u4E4B\u540E</span></span>
<span class="line"><span style="color:#A6ACCD;">before update</span></span>
<span class="line"><span style="color:#A6ACCD;">render</span></span>
<span class="line"><span style="color:#A6ACCD;">updated</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br></div></div><p>\u4E0A\u9762\u7528\u5230\u7684\u51E0\u4E2A\u751F\u547D\u5468\u671F\u90FD\u662F\u4ECEvue\u76F4\u63A5\u5BFC\u51FA\u7684\uFF0C\u800C\u4E14\u8FD9\u4E9B\u751F\u547D\u5468\u671F\u90FD\u662F\u7531\u4E00\u4E2A\u504F\u51FD\u6570\u521B\u9020\u51FA\u6765\u7684</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { currentInstance, setCurrentInstance } from &#39;./component&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export const enum LifecycleHooks {</span></span>
<span class="line"><span style="color:#A6ACCD;">  BEFORE_MOUNT = &#39;bm&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  MOUNTED = &#39;m&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  BEFORE_UPDATE = &#39;bu&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  UPDATED = &#39;u&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function createHook(type) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return (hook, target = currentInstance) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // hook\u9700\u8981\u7ED1\u5B9A\u5230\u5BF9\u5E94\u7684\u5B9E\u4F8B\u4E0A\uFF0C\u4F46\u662F\u6211\u4EEC\u8981\u600E\u4E48\u77E5\u9053\u5B9E\u4F8B\u662F\u54EA\u4E2A</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (target) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u5173\u8054\u6B64currentInstance\u548Chook</span></span>
<span class="line"><span style="color:#A6ACCD;">      /**</span></span>
<span class="line"><span style="color:#A6ACCD;">       *onBeforeMount(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          console.log(&#39;before mount&#39;, getCurrentInstance());</span></span>
<span class="line"><span style="color:#A6ACCD;">        });</span></span>
<span class="line"><span style="color:#A6ACCD;">        onMounted(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          console.log(&#39;mounted&#39;, getCurrentInstance());</span></span>
<span class="line"><span style="color:#A6ACCD;">        });</span></span>
<span class="line"><span style="color:#A6ACCD;">        onBeforeUpdate(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          console.log(&#39;before update&#39;, getCurrentInstance());</span></span>
<span class="line"><span style="color:#A6ACCD;">        });</span></span>
<span class="line"><span style="color:#A6ACCD;">        onUpdated(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          console.log(&#39;updated&#39;, getCurrentInstance());</span></span>
<span class="line"><span style="color:#A6ACCD;">        });</span></span>
<span class="line"><span style="color:#A6ACCD;">       *</span></span>
<span class="line"><span style="color:#A6ACCD;">       * */</span></span>
<span class="line"><span style="color:#A6ACCD;">      const hooks = target[type] || (target[type] = []);</span></span>
<span class="line"><span style="color:#A6ACCD;">      const wrapperHook = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        setCurrentInstance(target);</span></span>
<span class="line"><span style="color:#A6ACCD;">        hook(); //\u5C06\u5F53\u524D\u5B9E\u4F8B\u4FDD\u5B58\u5230currentInstance\u4E0A</span></span>
<span class="line"><span style="color:#A6ACCD;">        // \u751F\u547D\u5468\u671F\u6267\u884C\u5B8C\u4E4B\u540E\u5FC5\u987B\u8981\u6E05\u7A7A\uFF0C\u4E0D\u7136\u4F1A\u6CC4\u9732</span></span>
<span class="line"><span style="color:#A6ACCD;">        setCurrentInstance(null);</span></span>
<span class="line"><span style="color:#A6ACCD;">      };</span></span>
<span class="line"><span style="color:#A6ACCD;">      hooks.push(wrapperHook);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u5DE5\u5382\u6A21\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">export const onBeforeMount = createHook(LifecycleHooks.BEFORE_MOUNT);</span></span>
<span class="line"><span style="color:#A6ACCD;">export const onMounted = createHook(LifecycleHooks.MOUNTED);</span></span>
<span class="line"><span style="color:#A6ACCD;">export const onBeforeUpdate = createHook(LifecycleHooks.BEFORE_UPDATE);</span></span>
<span class="line"><span style="color:#A6ACCD;">export const onUpdated = createHook(LifecycleHooks.UPDATED);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div><p>\u4E00\u5F00\u59CB\u5E76\u4E0D\u662F\u5C06hook\u518D\u8FDB\u884C\u4E00\u5C42\u5305\u88C5\uFF0C\u53D8\u6210wrapperHook\uFF0C\u800C\u662F\u76F4\u63A5\u91C7\u7528</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">hooks.push(hook)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u8FD9\u6837\u4F1A\u5BFC\u81F4\u5728\u751F\u547D\u5468\u671F\u94A9\u5B50\u51FD\u6570\u91CC\u9762\u83B7\u53D6\u5F53\u524D\u5B9E\u4F8B\u7684\u65F6\u5019\u90FD\u8FD4\u56DEnull\u3002</p><p><em><strong>\u751F\u547D\u5468\u671F\u662F\u5728setup\u4E4B\u540E\u624D\u6267\u884C\u7684\uFF0C\u56E0\u4E3A\u751F\u547D\u5468\u671F\u8868\u793A\u7684\u662F\u4E00\u4E2A\u8282\u70B9\u7684\u5468\u671F\uFF0C\u800C\u4E0D\u662Fsetup\u7684\u5468\u671F\uFF0Csetup\u53EA\u662F\u628A\u5F53\u524D\u7684instance\u548C\u751F\u547D\u5468\u671F\u505A\u4E00\u4E2A\u7ED1\u5B9A\u3002</strong></em></p><p><em><strong>\u4F46\u662F\u5728component\u7684\u4EE3\u7801\u91CC\u9762\u6211\u4EEC\u80FD\u770B\u5230setup\u4E4B\u540Einstance\u5C31\u88AB\u6E05\u7A7A\u4E86\uFF0C\u6240\u4EE5\u4E0D\u505A\u5904\u7406\u7684\u8BDD\u751F\u547D\u5468\u671F\u91CC\u9762\u53BB\u83B7\u53D6instance\u80AF\u5B9A\u662Fnull\uFF0C\u9700\u8981\u505A\u4E00\u4E2A\u95ED\u5305\u3002</strong></em></p><p><em><strong>\u5047\u8BBEonBeforeMount\u5728\u540C\u4E00\u4E2Asetup\u4E2D\u88AB\u4F7F\u7528\u4E86\u591A\u6B21\uFF0C\u4E5F\u6CA1\u6709\u5F71\u54CD\uFF0C\u56E0\u4E3A\u6BCF\u4E2AonBeforeMount\u90FD\u662F\u4E00\u4E2AwrapperHook\u95ED\u5305\uFF0C\u91CC\u9762\u4F1A\u6709\u5B58\u653E\u5916\u9762\u51FD\u6570\u7684target\u3002</strong></em></p><p><em><strong>\u904D\u5386\u6267\u884ConBeforeMount\u751F\u547D\u5468\u671F\u51FD\u6570\u7684\u65F6\u5019\uFF0C\u90FD\u4F1AsetCurrentInstance\uFF0C\u7B49\u8FD9\u4E2Ahook\u6267\u884C\u5B8C\u4E4B\u540E\u7ACB\u9A6C\u6E05\u7A7A\uFF0C\u76F8\u5F53\u4E8E\u6BCF\u4E2A\u751F\u547D\u5468\u671F\u51FD\u6570\u91CC\u9762\u90FD\u590D\u5236\u4E86\u4E00\u4EFDinstance\u3002</strong></em></p><p>\u6211\u4EEC\u6765\u770B\u770B\u4E4B\u524D\u5199\u5728setupComponent\u91CC\u9762\u7684\u6E90\u7801</p><p>\u5982\u679C\u53D1\u73B0\u4F20\u8FDB\u6765\u7684\u5BF9\u8C61\u91CC\u9762\u6709setup\u5C5E\u6027\uFF0C\u90A3\u4E48\u8FD9\u91CC\u6709\u4E00\u6BB5\u5904\u7406\u503C\u5F97\u5206\u6790</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">setCurrentInstance(instance);</span></span>
<span class="line"><span style="color:#A6ACCD;">const setupResult = setup(instance.props, setupContext);</span></span>
<span class="line"><span style="color:#A6ACCD;">// setup\u6267\u884C\u5B8C\u4E4B\u540E\u7F6E\u7A7A</span></span>
<span class="line"><span style="color:#A6ACCD;">setCurrentInstance(null);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u5728\u4E0A\u9762\u6267\u884Csetup\u7684\u65F6\u5019\uFF0C\u5982\u679C\u6211\u4EEC\u8C03\u7528\u4E86\u751F\u547D\u94A9\u5B50\uFF0C\u90A3\u4E48createHook\u8FD4\u56DE\u7684\u51FD\u6570\u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570target\uFF0C\u80AF\u5B9A\u5C31\u62FF\u5230\u4E86\u5F53\u524D\u7684\u7EC4\u4EF6\u5B9E\u4F8B\u3002\u8FD9\u4E2A\u7EC4\u4EF6\u5B9E\u4F8B\u62FF\u5230\u4E4B\u540E\uFF0C\u76F4\u63A5\u7528wrapperHook\u5305\u4E00\u5C42\uFF0C\u5C06target\u5B58\u653E\u5230\u6BCF\u4E2A\u751F\u547D\u94A9\u5B50\u4E2D\uFF0C\u5F62\u6210\u4E00\u4E2A\u95ED\u5305\uFF0C\u8FD9\u4E5F\u5C31\u662F\u4E0A\u9762\u7684\u659C\u4F53\u52A0\u7C97\u90E8\u5206\u771F\u6B63\u7684\u542B\u4E49\u3002</p><p>\u90A3\u4E48\u8FD9\u51E0\u4E2A\u751F\u547D\u94A9\u5B50\u5728\u4EC0\u4E48\u65F6\u5019\u88AB\u8C03\u7528\u7684\u5462\uFF1F\u4E0A\u9762\u5DF2\u7ECF\u8BF4\u4E86\uFF0C\u5F53\u7136\u662F\u5728\u6267\u884Csetup\u7684\u65F6\u5019\u3002\u90A3\u751F\u547D\u94A9\u5B50\u91CC\u9762\u7684\u56DE\u8C03\u51FD\u6570\u662F\u5728\u4EC0\u4E48\u6267\u884C\u7684\u5462\uFF1F\u6CE8\u610F\uFF01\uFF01\u8FD9\u91CC\u662F\u6709\u533A\u522B\u7684\uFF0C\u8C03\u7528\u7684\u5730\u65B9\u548C\u56DE\u8C03\u51FD\u6570\u6267\u884C\u7684\u65F6\u673A\uFF0C\u662F\u4E0D\u4E00\u6837\u7684\u3002</p><p>\u56DE\u8C03\u51FD\u6570\u7684\u6267\u884C\uFF0C\u5728<strong>componentUpdateFn</strong>\u91CC\u9762</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const componentUpdateFn = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (!instance.isMounted) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    let { bm, m } = instance;</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (bm) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      invokeArrayFns(bm);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    const subTree = render.call(instance.proxy);</span></span>
<span class="line"><span style="color:#A6ACCD;">    patch(null, subTree, container, anchor);</span></span>
<span class="line"><span style="color:#A6ACCD;">    instance.subTree = subTree;</span></span>
<span class="line"><span style="color:#A6ACCD;">    instance.isMounted = true;</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (m) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      invokeArrayFns(m);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">    let { next, bu, u } = instance;</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (bu) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      invokeArrayFns(bu);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (next) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      updateComponentPreRender(instance, next);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    const subTree = render.call(instance.proxy);</span></span>
<span class="line"><span style="color:#A6ACCD;">    patch(instance.subTree, subTree, container, anchor);</span></span>
<span class="line"><span style="color:#A6ACCD;">    instance.subTree = subTree;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    if (u) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      invokeArrayFns(u);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>\u521B\u5EFA\u7684\u65F6\u5019\uFF0Crender\u4E4B\u524D\u904D\u5386\u6267\u884C\u5728setup\u91CC\u9762\u6302\u8F7D\u7684<strong>onBeforeMount</strong>\u7684\u56DE\u8C03\uFF0Crender\u4E4B\u540E\u904D\u5386\u6267\u884C\u5728setup\u91CC\u9762\u6302\u8F7D\u7684<strong>onMounted</strong>\u7684\u56DE\u8C03\u3002</p><p>\u66F4\u65B0\u7684\u65F6\u5019\uFF0Crender\u4E4B\u524D\u904D\u5386\u6267\u884C\u5728setup\u91CC\u9762\u6302\u8F7D\u7684<strong>onBeforeUpdate</strong>\u7684\u56DE\u8C03\uFF0Crender\u4E4B\u540E\u904D\u5386\u6267\u884C\u5728setup\u91CC\u9762\u6302\u8F7D\u7684<strong>onUpdated</strong>\u7684\u56DE\u8C03\u3002</p>`,23),r=[l];function c(o,t,i,b,C,u){return a(),n("div",null,r)}const y=s(e,[["render",c]]);export{m as __pageData,y as default};
