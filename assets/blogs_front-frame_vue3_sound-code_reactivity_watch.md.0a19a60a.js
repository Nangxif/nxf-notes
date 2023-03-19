import{_ as a,c as l,b as e,h as s,o as p,e as c}from"./app.36bb7e4c.js";const d=JSON.parse('{"title":"watch","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001watch\u7684\u4F7F\u7528","slug":"\u4E00\u3001watch\u7684\u4F7F\u7528","link":"#\u4E00\u3001watch\u7684\u4F7F\u7528","children":[]},{"level":2,"title":"\u4E8C\u3001watch\u6D41\u7A0B\u56FE","slug":"\u4E8C\u3001watch\u6D41\u7A0B\u56FE","link":"#\u4E8C\u3001watch\u6D41\u7A0B\u56FE","children":[]},{"level":2,"title":"\u4E09\u3001watch\u6D41\u7A0B","slug":"\u4E09\u3001watch\u6D41\u7A0B","link":"#\u4E09\u3001watch\u6D41\u7A0B","children":[]}],"relativePath":"blogs/front-frame/vue3/sound-code/reactivity/watch.md","lastUpdated":1679235457000}'),r={name:"blogs/front-frame/vue3/sound-code/reactivity/watch.md"},o=s(`<h1 id="watch" tabindex="-1">watch <a class="header-anchor" href="#watch" aria-hidden="true">#</a></h1><p>watch\u76F8\u5BF9computed\u6765\u8BF4\u5C31\u7B80\u5355\u5F88\u591A</p><h2 id="\u4E00\u3001watch\u7684\u4F7F\u7528" tabindex="-1">\u4E00\u3001watch\u7684\u4F7F\u7528 <a class="header-anchor" href="#\u4E00\u3001watch\u7684\u4F7F\u7528" aria-hidden="true">#</a></h2><p>\u4E0B\u9762\u53EA\u5B9E\u73B0\u6BD4\u8F83\u7B80\u5355\u7684watch\u7684\u6E90\u7801\uFF0C\u6240\u4EE5\u5BF9\u4E8Ewatch\u7684\u4F7F\u7528\u7684\u6F14\u793A\uFF0C\u6211\u4EEC\u4E5F\u57FA\u4E8E\u4E0B\u9762\u7684\u6E90\u7801\u6765</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;script lang=&quot;ts&quot; setup&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { reactive, watch } from &quot;vue&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">const counter = reactive({ count: { num: 1 } });</span></span>
<span class="line"><span style="color:#A6ACCD;">watch(counter, (newVal, oldVal) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(newVal, oldVal);</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;">watch(counter.count, (newVal, oldVal) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(newVal, oldVal);</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;">watch(</span></span>
<span class="line"><span style="color:#A6ACCD;">  () =&gt; counter.count.num,</span></span>
<span class="line"><span style="color:#A6ACCD;">  (newVal, oldVal) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(newVal, oldVal);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">// PS: watch\u76D1\u542C\u7684\u5FC5\u987B\u662F\u4E00\u4E2Areactive\uFF0Cref\u6216\u8005function\uFF0C\u4E0D\u80FD\u662F\u4E00\u4E2A\u5E38\u91CF\uFF0C\u56E0\u6B64\u4E0B\u9762\u8FD9\u79CD\u5199\u6CD5\u662F\u9519\u8BEF\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">watch(</span></span>
<span class="line"><span style="color:#A6ACCD;">  counter.count.num,</span></span>
<span class="line"><span style="color:#A6ACCD;">  (newVal, oldVal) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(newVal, oldVal);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">watch(</span></span>
<span class="line"><span style="color:#A6ACCD;">  () =&gt; counter.count.num,</span></span>
<span class="line"><span style="color:#A6ACCD;">  (newVal, oldVal, onCleanup) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&quot;watch&quot;, newVal, oldVal);</span></span>
<span class="line"><span style="color:#A6ACCD;">    onCleanup(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // onCleanup\u4F1A\u5728\u4E0B\u4E00\u6B21\u6570\u636E\u66F4\u65B0\u7684\u65F6\u5019\u89E6\u53D1\uFF0ConCleanup\u80FD\u4FDD\u5B58\u4E0A\u4E00\u6B21watch\u7684\u72B6\u6001</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(&quot;onCleanup&quot;, newVal, oldVal);</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  {{ counter.count.num }}</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;button type=&quot;button&quot; @click=&quot;counter.count.num++&quot;&gt;\u53D8\u66F4&lt;/button&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><h2 id="\u4E8C\u3001watch\u6D41\u7A0B\u56FE" tabindex="-1">\u4E8C\u3001watch\u6D41\u7A0B\u56FE <a class="header-anchor" href="#\u4E8C\u3001watch\u6D41\u7A0B\u56FE" aria-hidden="true">#</a></h2>`,6),t=s(`<h2 id="\u4E09\u3001watch\u6D41\u7A0B" tabindex="-1">\u4E09\u3001watch\u6D41\u7A0B <a class="header-anchor" href="#\u4E09\u3001watch\u6D41\u7A0B" aria-hidden="true">#</a></h2><p>\u5176\u5B9Ewacth\u5C31\u662F\u76D1\u542Creactive\uFF0Cref\u7B49\u54CD\u5E94\u5F0F\u6570\u636E\u7684\u53D8\u5316\uFF0C\u6211\u4EEC\u53EF\u4EE5\u7528reactiveEffect\u6765\u5B9E\u73B0\u8FD9\u4E2A\u529F\u80FD\u3002reactiveEffect\u9700\u8981\u6536\u96C6watch\u76D1\u542C\u7684\u5BF9\u8C61\u4F9D\u8D56\uFF0C\u5F53\u4F9D\u8D56\u53D1\u751F\u53D8\u5316\u7684\u65F6\u5019\uFF0C\u4F1A\u89E6\u53D1scheduler\uFF0Cscheduler\u6709\u4EE5\u4E0B\u4E09\u4E2A\u4EFB\u52A1</p><ol><li>\u89E6\u53D1cleanup\u51FD\u6570\uFF08\u5982\u679C\u6709\u7684\u8BDD\uFF09\uFF0C</li><li>\u6267\u884Cwatch\u56DE\u8C03\uFF0C</li><li>\u65E7\u503C\u8D4B\u503C\u65B0\u503C</li></ol><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function traversal(value, set = new Set()) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u8003\u8651\u5982\u679C\u5BF9\u8C61\u4E2D\u6709\u5FAA\u73AF\u5F15\u7528\u7684\u95EE\u9898</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u5982\u679C\u4E0D\u662F\u5BF9\u8C61\uFF0C\u90A3\u4E48\u76F4\u63A5\u8FD4\u56DE</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (!isObject(value)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return value;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u5982\u679C\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u90A3\u4E48\u5224\u65AD\u8FD9\u4E2A\u5BF9\u8C61\u662F\u5426\u5728set\u91CC\u9762\uFF0C\u6709\u7684\u8BDD\u76F4\u63A5\u8FD4\u56DE</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (set.has(value)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return value;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u5982\u679C\u6CA1\u6709\u7684\u8BDD\u5C31add</span></span>
<span class="line"><span style="color:#A6ACCD;">  set.add(value);</span></span>
<span class="line"><span style="color:#A6ACCD;">  for (let key in value) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    traversal(value[key], set);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  return value;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// source\u4F7F\u7528\u6237\u4F20\u5165\u7684\u5BF9\u8C61\uFF0Ccb\u5C31\u662F\u5BF9\u5E94\u7684\u7528\u6237\u56DE\u8C03</span></span>
<span class="line"><span style="color:#A6ACCD;">export function watch(source, cb) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  let getter;</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (isReactive(source)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5BF9\u6211\u4EEC\u7528\u6237\u4F20\u5165\u7684\u6570\u636E\u8FDB\u884C\u5FAA\u73AF\uFF08\u9012\u5F52\u5FAA\u73AF\uFF0C\u53EA\u8981\u5FAA\u73AF\u5C31\u4F1A\u8BBF\u95EE\u5BF9\u8C61\u4E0A\u7684\u6BCF\u4E00\u4E2A\u5C5E\u6027\uFF0C\u8BBF\u95EE\u5C5E\u6027\u7684\u65F6\u5019\u4F1A\u6536\u96C6effect\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u4E4B\u6240\u4EE5\u8981\u9012\u5F52\uFF0C\u662F\u56E0\u4E3A\u662F\u6DF1\u5C42\u76D1\u542C</span></span>
<span class="line"><span style="color:#A6ACCD;">    getter = () =&gt; traversal(source);</span></span>
<span class="line"><span style="color:#A6ACCD;">  } else if (isFunction(source)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    getter = source;</span></span>
<span class="line"><span style="color:#A6ACCD;">  } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  let cleanup: () =&gt; void;</span></span>
<span class="line"><span style="color:#A6ACCD;">  const onCleanup = (fn: () =&gt; void) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u8FD9\u91CC\u662F\u4E00\u4E2A\u95ED\u5305\uFF0C\u4FDD\u5B58\u7684\u662F\u4E0A\u4E00\u6B21\u7684cleanup</span></span>
<span class="line"><span style="color:#A6ACCD;">    cleanup = fn; //\u4FDD\u5B58\u7528\u6237\u7684\u51FD\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;">  let oldValue: any;</span></span>
<span class="line"><span style="color:#A6ACCD;">  const job = () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (cleanup) cleanup();</span></span>
<span class="line"><span style="color:#A6ACCD;">    const newValue = effect.run();</span></span>
<span class="line"><span style="color:#A6ACCD;">    cb(newValue, oldValue, onCleanup);</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7B49cb\u628A\u8001\u503C\u8FD4\u56DE\u4E4B\u540E\uFF0C\u518D\u628A\u65B0\u503C\u8D4B\u503C\u7ED9\u8001\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">    oldValue = newValue;</span></span>
<span class="line"><span style="color:#A6ACCD;">  };</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u76D1\u63A7\u81EA\u5DF1\u6784\u9020\u7684\u51FD\u6570\uFF0C\u53D8\u5316\u540E\u91CD\u65B0\u6267\u884Cjob</span></span>
<span class="line"><span style="color:#A6ACCD;">  const effect = new ReactiveEffect(getter, job);</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u6536\u96C6getter\u91CC\u9762\u7684\u4F9D\u8D56\u5E76\u4E14\u8FD4\u56DE\u6700\u65B0\u503C\uFF0C\u8FD9\u662Fwatch\u7B2C\u4E00\u6B21\u76D1\u542C\u7684\u65F6\u5019\u8FD4\u56DE\u7684\u65E7\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">  oldValue = effect.run();</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div><p>\u81F3\u6B64vue3\u7684reactivity\u90E8\u5206\u7ED3\u675F</p>`,5);function i(u,b,C,A,m,y){const n=c("Image");return p(),l("div",null,[o,e(n,{src:"/front-frame/vue3/sound-code/reactivity/watch/1.png"},null,8,["src"]),t])}const h=a(r,[["render",i]]);export{d as __pageData,h as default};
