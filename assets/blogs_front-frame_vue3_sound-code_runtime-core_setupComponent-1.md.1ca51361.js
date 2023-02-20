import{_ as s,c as n,o as a,h as p}from"./app.174bd7af.js";const m=JSON.parse('{"title":"setup\u7EC4\u4EF6\u7684\u521B\u5EFA\u548C\u66F4\u65B0\u3010\u4E0A\u3011","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u7EC4\u4EF6\u7684\u521B\u5EFAmountComponent","slug":"\u4E00\u3001\u7EC4\u4EF6\u7684\u521B\u5EFAmountcomponent","link":"#\u4E00\u3001\u7EC4\u4EF6\u7684\u521B\u5EFAmountcomponent","children":[{"level":3,"title":"1.\u521B\u5EFA\u7EC4\u4EF6\u5B9E\u4F8B","slug":"_1-\u521B\u5EFA\u7EC4\u4EF6\u5B9E\u4F8B","link":"#_1-\u521B\u5EFA\u7EC4\u4EF6\u5B9E\u4F8B","children":[]},{"level":3,"title":"2.\u7ED9\u5B9E\u4F8B\u8D4B\u503C","slug":"_2-\u7ED9\u5B9E\u4F8B\u8D4B\u503C","link":"#_2-\u7ED9\u5B9E\u4F8B\u8D4B\u503C","children":[]}]}],"relativePath":"blogs/front-frame/vue3/sound-code/runtime-core/setupComponent-1.md","lastUpdated":1676907932000}'),e={name:"blogs/front-frame/vue3/sound-code/runtime-core/setupComponent-1.md"},l=p(`<h1 id="setup\u7EC4\u4EF6\u7684\u521B\u5EFA\u548C\u66F4\u65B0\u3010\u4E0A\u3011" tabindex="-1">setup\u7EC4\u4EF6\u7684\u521B\u5EFA\u548C\u66F4\u65B0\u3010\u4E0A\u3011 <a class="header-anchor" href="#setup\u7EC4\u4EF6\u7684\u521B\u5EFA\u548C\u66F4\u65B0\u3010\u4E0A\u3011" aria-hidden="true">#</a></h1><p>\u8FD9\u4E2A\u7AE0\u8282\u7684\u5185\u5BB9\u6BD4\u8F83\u957F\uFF0C\u6211\u5C31\u5206\u4E3A\u4E0A\u4E0B\u7AE0\u8282\u6765\u8BB2\u89E3</p><p>\u5728<a href="https://nangxif.github.io/nxf-notes/blogs/front-frame/vue3/sound-code/runtime-core/createRenderer.html" target="_blank" rel="noreferrer">\u3010createRenderer\u521B\u5EFA\u6E32\u67D3\u5668\u3011</a>\u4E00\u8282\u4E2D\uFF0Cpatch\u7684\u6700\u540E\u4E00\u4E2A\u5224\u65AD</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">if (shapeFlag &amp; ShapeFlags.COMPONENT) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u51FD\u6570\u5F0F\u7EC4\u4EF6\u548C\u72B6\u6001\u7EC4\u4EF6\u90FD\u8D70\u8FD9\u91CC</span></span>
<span class="line"><span style="color:#A6ACCD;">  processComponent(n1, n2, container, anchor);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u5C31\u662F\u5904\u7406\u7EC4\u4EF6\u7684\u521B\u5EFA\u548C\u66F4\u65B0\u3002\u8FD8\u662F\u6309\u7167\u524D\u9762\u51E0\u79CD\u7C7B\u578B\u7684\u5904\u7406\u65B9\u5F0F\uFF0Cn1\u4E3Anull\u8868\u793A\u9700\u8981\u8D70\u521B\u5EFA\u6D41\u7A0B\uFF0C\u4E0D\u4E3Anull\u8868\u793A\u9700\u8981\u8D70\u66F4\u65B0\u6D41\u7A0B\u3002</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const processComponent = (n1, n2, container, anchor) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7EDF\u4E00\u5904\u7406\u7EC4\u4EF6\uFF0C\u91CC\u9762\u518D\u533A\u5206\u662F\u666E\u901A\u7EC4\u4EF6\u8FD8\u662F\u51FD\u6570\u5F0F\u7EC4\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (n1 == null) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u7EC4\u4EF6\u521B\u5EFA</span></span>
<span class="line"><span style="color:#A6ACCD;">      mountComponent(n2, container, anchor);</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u5982\u679C\u662F\u5916\u9762\u7684render\u5BFC\u81F4\u7EC4\u4EF6\u53D1\u751F\u53D8\u5316\uFF0C\u90A3\u4E48\u4F1A\u8D70\u8FD9\u6BB5\u903B\u8F91</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u7EC4\u4EF6\u66F4\u65B0\u9760\u7684\u662Fprops</span></span>
<span class="line"><span style="color:#A6ACCD;">      updateComponent(n1, n2);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="\u4E00\u3001\u7EC4\u4EF6\u7684\u521B\u5EFAmountcomponent" tabindex="-1">\u4E00\u3001\u7EC4\u4EF6\u7684\u521B\u5EFAmountComponent <a class="header-anchor" href="#\u4E00\u3001\u7EC4\u4EF6\u7684\u521B\u5EFAmountcomponent" aria-hidden="true">#</a></h2><p>\u8FD9\u4E2A\u8FC7\u7A0B\u5206\u4E3A\u4E09\u6B65\uFF1A</p><ol><li>\u521B\u5EFA\u7EC4\u4EF6\u5B9E\u4F8B</li><li>\u5904\u7406\u8FD9\u4E2A\u5B9E\u4F8B\uFF0C\u7ED9\u5B9E\u4F8B\u8D4B\u503C</li><li>\u521B\u5EFA\u5B9E\u4F8B\u7684\u526F\u4F5C\u7528</li></ol><p>\u9996\u5148\u6211\u4EEC\u5148\u5199\u7B2C\u4E00\u6B65</p><h3 id="_1-\u521B\u5EFA\u7EC4\u4EF6\u5B9E\u4F8B" tabindex="-1">1.\u521B\u5EFA\u7EC4\u4EF6\u5B9E\u4F8B <a class="header-anchor" href="#_1-\u521B\u5EFA\u7EC4\u4EF6\u5B9E\u4F8B" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">let instance = (vnode.component = createComponentInstance(vnode));</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u5C06\u521B\u5EFA\u51FA\u6765\u7684\u5B9E\u4F8B\u653E\u5230\u865A\u62DF\u8282\u70B9\u7684component\u5C5E\u6027\u4E0A\u3002</p><p>createComponentInstance\u5C31\u662F\u5148\u521D\u59CB\u5316\u4E00\u4E2Acomponent\u5B9E\u4F8B\u5BF9\u8C61</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function createComponentInstance(vnode) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const instance = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7EC4\u4EF6\u7684\u5B9E\u4F8B</span></span>
<span class="line"><span style="color:#A6ACCD;">    data: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">    vnode,</span></span>
<span class="line"><span style="color:#A6ACCD;">    subTree: null, //vnode\u7EC4\u4EF6\u7684\u865A\u62DF\u8282\u70B9\uFF0CsubTree\u6E32\u67D3\u7684\u7EC4\u4EF6\u5185\u5BB9</span></span>
<span class="line"><span style="color:#A6ACCD;">    isMounted: false, //\u7EC4\u4EF6\u662F\u5426\u6302\u8F7D</span></span>
<span class="line"><span style="color:#A6ACCD;">    update: null, //\u7EC4\u4EF6\u7684render\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;">    propsOptions: vnode.type.props,</span></span>
<span class="line"><span style="color:#A6ACCD;">    props: {}, //\u7EC4\u4EF6\u7684props</span></span>
<span class="line"><span style="color:#A6ACCD;">    attrs: {}, //\u7EC4\u4EF6\u7684attrs</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxy: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">    render: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">    component: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">    next: null,</span></span>
<span class="line"><span style="color:#A6ACCD;">    setupState: {}, //setup\u5982\u679C\u8FD4\u56DE\u7684\u662F\u5BF9\u8C61\u7684\u8BDD\uFF0C\u8FD9\u4E2A\u5C31\u5B58\u50A8\u8FD9\u4E2A\u8FD4\u56DE\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">    slots: {}, //\u8FD9\u91CC\u8FB9\u5C31\u662F\u63D2\u69FD\u76F8\u5173\u5185\u5BB9</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;">  return instance;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h3 id="_2-\u7ED9\u5B9E\u4F8B\u8D4B\u503C" tabindex="-1">2.\u7ED9\u5B9E\u4F8B\u8D4B\u503C <a class="header-anchor" href="#_2-\u7ED9\u5B9E\u4F8B\u8D4B\u503C" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">setupComponent(instance);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u8FD9\u91CC\u8FD8\u53EF\u4EE5\u7EC6\u5206\u6210\u4EE5\u4E0B\u51E0\u4E2A\u6B65\u9AA4</p><p>\u2460\u521D\u59CB\u5316props\u4EE5\u53CAattrs</p><p>\u2461\u521D\u59CB\u5316\u63D2\u69FD</p><p>\u2462\u8D4B\u503C\u5B9E\u4F8B\u4E0A\u7684proxy\u5C5E\u6027</p><p>\u2463\u5904\u7406\u7EC4\u4EF6\u7684data</p><p>\u2464\u5904\u7406\u7EC4\u4EF6\u7684setup\u51FD\u6570</p><p>\u2465\u521D\u59CB\u5316\u51FA\u5B9E\u4F8B\u7684render\u51FD\u6570</p><p>\u6211\u4EECsetup\u7EC4\u4EF6\u53EF\u80FD\u662F\u8FD9\u4E48\u4F7F\u7528\u7684</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const VueComponent = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  props: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    address: String,</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  setup(props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const name = ref(&#39;\u73E0\u5CF0&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    const age = ref(&#39;13&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      age.value++;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }, 1000);</span></span>
<span class="line"><span style="color:#A6ACCD;">    return { name, age, address: props.address + &#39;\u5317\u4EAC&#39; };</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  render() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return h(Fragment, [this.name, this.age, this.address]);</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">render(h(VueComponent, { address: &#39;\u5730\u7403&#39; }), app);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u56E0\u6B64\u5728\u8FD9\u91CC\u4F1A\u5148\u5904\u7406\u7EC4\u4EF6\u7684\u5C5E\u6027\uFF0C\u5C06\u865A\u62DF\u8282\u70B9\u4E0Aprops\u5C5E\u6027\u6839\u636E\u7EC4\u4EF6\u5728\u4F7F\u7528\u65F6\u5B9A\u4E49\u7684props\u6620\u5C04\u8868\uFF0C\u5206\u7C7B\u6210\u7EC4\u4EF6\u7684props\u4EE5\u53CAattrs\u3002\u5E76\u4E14\u628Aprops\u53D8\u6210\u54CD\u5E94\u5F0F\u7684\u3002</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const initProps = (instance, rawProps) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const props = {};</span></span>
<span class="line"><span style="color:#A6ACCD;">  const attrs = {};</span></span>
<span class="line"><span style="color:#A6ACCD;">  // instance.propsOptions = vnode.type.props</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u770B\u5230\u8FD9\u91CC\u7A81\u7136\u4ECEnode\u4E0A\u7684type\u4E0A\u9762\u53D6props\u7684\u503C\u6709\u70B9\u7EB3\u95F7\uFF0C\u4F46\u662F\u56DE\u53BB\u770B\u6E90\u7801\u5C31\u61C2\u4E86</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u7EC4\u4EF6\u7C7B\u578B\u7684type\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u7C7B\u4F3C\u8FD9\u6837</span></span>
<span class="line"><span style="color:#A6ACCD;">  // const VueComponent = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  //   props: {</span></span>
<span class="line"><span style="color:#A6ACCD;">  //     address: String,</span></span>
<span class="line"><span style="color:#A6ACCD;">  //   },</span></span>
<span class="line"><span style="color:#A6ACCD;">  //   setup(props) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  //     const name = ref(&#39;\u66E9\u6614&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  //     const age = ref(&#39;27&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  //     setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  //       age.value++;</span></span>
<span class="line"><span style="color:#A6ACCD;">  //     }, 1000);</span></span>
<span class="line"><span style="color:#A6ACCD;">  //     return h(Fragment, [name.value, age.value, props.address]);</span></span>
<span class="line"><span style="color:#A6ACCD;">  //   },</span></span>
<span class="line"><span style="color:#A6ACCD;">  // };</span></span>
<span class="line"><span style="color:#A6ACCD;">  const options = instance.propsOptions || {};</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (rawProps) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    for (let key in rawProps) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      const value = rawProps[key];</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (hasOwn(options, key)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        props[key] = value;</span></span>
<span class="line"><span style="color:#A6ACCD;">      } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">        attrs[key] = value;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  //   \u8FD9\u91CCprops\u4E0D\u5E0C\u671B\u5728\u7EC4\u4EF6\u5185\u90E8\u88AB\u66F4\u6539\uFF0C\u4F46\u662Fprops\u5F97\u662F\u54CD\u5E94\u5F0F\u7684\uFF0C\u56E0\u4E3A\u540E\u7EED\u5C5E\u6027\u53D8\u5316\u4E86\u8981\u66F4\u65B0\u89C6\u56FE\uFF0C\u7528\u7684\u5E94\u8BE5\u662FshallowReactive\uFF0C\u4F46\u662F\u6211\u4EEC\u6CA1\u5199shallowReactive\uFF0C\u6240\u4EE5\u7528reactive\u4EE3\u66FF</span></span>
<span class="line"><span style="color:#A6ACCD;">  instance.props = reactive(props);</span></span>
<span class="line"><span style="color:#A6ACCD;">  instance.attrs = attrs;</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><p>\u63A5\u7740\u9700\u8981\u521D\u59CB\u5316\u63D2\u69FD</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function initSlots(instance, children) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (instance.vnode.shapeFlag &amp; ShapeFlags.SLOTS_CHILDREN) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    instance.slots = children;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u7B2C\u4E09\u6B65\uFF0C\u8D4B\u503C\u5B9E\u4F8B\u4E0A\u7684proxy\u5C5E\u6027</p><p>\u6211\u4EEC\u751F\u6210\u7684\u8FD9\u4E2Aproxy\uFF0C\u540E\u7EED\u8FD9\u4E2A\u7EC4\u4EF6\u5728\u53D6data\u4E0A\u9762\u7684\u5C5E\u6027\u7684\u65F6\u5019\uFF0C\u5728\u53D6setupState\u4E0A\u9762\u7684\u5C5E\u6027\u7684\u65F6\u5019\uFF0C\u5728\u53D6props\u4E0A\u9762\u7684\u719F\u6089\u7684\u65F6\u5019\uFF0C\u751A\u81F3\u662F\u53D6$attr\u548C$slots\u7684\u503C\u7684\u65F6\u5019\uFF0C\u90FD\u4F1A\u5728\u8FD9\u4E2A\u4EE3\u7406\u5BF9\u8C61\u4E0A\u62FF\u3002</p><p>\u56E0\u6B64\uFF0C\u901A\u8FC7\u4E0A\u9762\u6211\u4EEC\u53EF\u4EE5\u77E5\u9053\uFF0C\u5728\u5B9E\u4F8B\u4E0A\u53D6\u5C5E\u6027\uFF0C\u9996\u5148\u4F1A\u5148\u68C0\u67E5data\u4E0A\u9762\u6709\u6CA1\u6709\u8FD9\u4E2A\u5C5E\u6027\uFF0C\u518D\u53BB\u68C0\u67E5setupState\uFF0C\u6700\u540E\u68C0\u67E5props\u4E0A\u9762\u7684\u5C5E\u6027\u3002</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">instance.proxy = new Proxy(instance, publicInstanceProxy);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const publicInstanceProxy = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  get(target, key) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const { data, props, setupState } = target;</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (data &amp;&amp; hasOwn(data, key)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return data[key];</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else if (setupState &amp;&amp; hasOwn(setupState, key)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return setupState[key];</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else if (props &amp;&amp; hasOwn(props, key)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return props[key];</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    let getter = publicPropertyMap[key]; //this.$attrs</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (getter) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return getter(target);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  set(target, key, value) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const { data, props, setupState } = target;</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (data &amp;&amp; hasOwn(data, key)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      data[key] = value;</span></span>
<span class="line"><span style="color:#A6ACCD;">      return true;</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u7528\u6237\u64CD\u4F5C\u7684\u662F\u4EE3\u7406\u5BF9\u8C61\uFF0C\u8FD9\u91CC\u5C4F\u853D\u4E86</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u4F46\u662F\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7instance.props\u62FF\u5230\u771F\u5B9E\u7684props</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else if (setupState &amp;&amp; hasOwn(setupState, key)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      setupState[key] = value;</span></span>
<span class="line"><span style="color:#A6ACCD;">      return true;</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else if (props &amp;&amp; hasOwn(props, key)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u901A\u8FC7\u8FD9\u91CC\u6211\u4EEC\u53EF\u4EE5\u77E5\u9053\uFF0C\u5B9E\u4F8B\u4E0A\u7684props\u662F\u4E0D\u80FD\u4FEE\u6539\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.warn(\`attempting to mutate prop \${key as string}\`);</span></span>
<span class="line"><span style="color:#A6ACCD;">      return false;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    return true;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><p>\u7B2C\u56DB\u6B65\uFF0C\u5904\u7406\u7EC4\u4EF6\u7684data</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">let data = type.data;</span></span>
<span class="line"><span style="color:#A6ACCD;">if (data) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (!isFunction(data)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return console.warn(&#39;data option must be a function&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    instance.data = reactive(data.call(instance.proxy));</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u7531\u4E0A\u9762\u8FD9\u4E00\u6BB5\u5C31\u53EF\u4EE5\u770B\u51FAdata\u5FC5\u987B\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u6700\u540E\u6267\u884C\u5B8C\u8FD4\u56DE\u7684\u5BF9\u8C61\u8FD8\u8981\u5305\u4E00\u5C42reactive\uFF0C\u5B9E\u73B0\u54CD\u5E94\u5F0F\u3002data\u51FD\u6570\u91CC\u9762\u7684this\u6307\u5411instance.proxy\u3002</p><p>\u7B2C\u4E94\u6B65\uFF0C\u5904\u7406\u7EC4\u4EF6\u7684setup\u51FD\u6570</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">let setup = type.setup;</span></span>
<span class="line"><span style="color:#A6ACCD;">if (setup) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const setupContext = {</span></span>
<span class="line"><span style="color:#A6ACCD;">      emit: (event, ...args) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // \u4E8B\u4EF6\u7684\u5B9E\u73B0\u539F\u7406</span></span>
<span class="line"><span style="color:#A6ACCD;">        const eventName = \`on\${event[0].toUpperCase() + event.slice(1)}\`;</span></span>
<span class="line"><span style="color:#A6ACCD;">        const handler = instance.vnode.props[eventName];</span></span>
<span class="line"><span style="color:#A6ACCD;">        handler &amp;&amp; handler(...args);</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      attrs: instance.attrs,</span></span>
<span class="line"><span style="color:#A6ACCD;">      slots: instance.slots,</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;">    setCurrentInstance(instance);</span></span>
<span class="line"><span style="color:#A6ACCD;">    const setupResult = setup(instance.props, setupContext);</span></span>
<span class="line"><span style="color:#A6ACCD;">    // setup\u6267\u884C\u5B8C\u4E4B\u540E\u7F6E\u7A7A</span></span>
<span class="line"><span style="color:#A6ACCD;">    setCurrentInstance(null);</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (isFunction(setupResult)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // render\u51FD\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">      instance.render = setupResult;</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else if (isObject(setupResult)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u5BF9\u5185\u90E8\u7684ref\u8FDB\u884C\u53D6\u6D88.value</span></span>
<span class="line"><span style="color:#A6ACCD;">      instance.setupState = proxyRefs(setupResult);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>setup\u51FD\u6570\u53C2\u6570\u6709\u4E24\u4E2A\uFF0C\u4E00\u4E2A\u662Fprops\uFF0C\u662F\u4E00\u4E2A\u4E0A\u4E0B\u6587\u5BF9\u8C61\uFF08\u8FD9\u4E2A\u4E0A\u4E0B\u6587\u5BF9\u8C61\u91CC\u9762\u5305\u542Bemit\u65B9\u6CD5\u4EE5\u53CAattrs\u548Cslots\u5BF9\u8C61\uFF09\u3002</p><p>\u4E0E\u6B64\u540C\u65F6\u8981\u7ED9\u5168\u5C40\u53D8\u91CFcurrentInstance\u8D4B\u503C\uFF0C\u5C06\u5F53\u524D\u751F\u6210\u7684\u8FD9\u4E2A\u5B9E\u4F8B\u5B58\u653E\u5230\u8BE5\u53D8\u91CF\u4E0A\uFF0C\u5728\u5176\u4ED6\u5730\u65B9\u53EF\u4EE5\u901A\u8FC7<code>const getCurrentInstance = () =&gt; currentInstance;</code>\u53D6\u5230\u5F53\u524D\u7684\u7EC4\u4EF6\u5B9E\u4F8B\u3002</p><p>\u6700\u540E\u8981\u6267\u884C\u4E00\u4E0Bsetup\u51FD\u6570\uFF0C\u5224\u65AD\u4E00\u4E0BsetupResult\u7684\u503C\u662F\u4E00\u4E2A\u51FD\u6570\u8FD8\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5982\u679C\u662F\u51FD\u6570\u7684\u8BDD\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u51FD\u6570\u5C31\u662Frender\u51FD\u6570\uFF0C\u5982\u679C\u662F\u5BF9\u8C61\u7684\u8BDD\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u5BF9\u8C61\u5C31\u662F\u5B9E\u4F8B\u4E0A\u7684setupState\u3002</p><p>\u81F3\u6B64\u4E00\u4E2A\u5B9E\u4F8B\u5C31\u521B\u5EFA\u5B8C\u6210\u4E86\u3002</p>`,43),r=[l];function c(o,t,i,b,C,u){return a(),n("div",null,r)}const y=s(e,[["render",c]]);export{m as __pageData,y as default};
