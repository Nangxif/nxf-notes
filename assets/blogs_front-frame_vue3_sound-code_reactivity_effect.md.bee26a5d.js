import{_ as e,c as p,b as l,a as s,g as n,h as c,o as r,e as t}from"./app.b608c1d0.js";const h=JSON.parse('{"title":"effect","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u6D41\u7A0B\u56FE","slug":"\u4E00\u3001\u6D41\u7A0B\u56FE","link":"#\u4E00\u3001\u6D41\u7A0B\u56FE","children":[]},{"level":2,"title":"\u4E8C\u3001\u51FD\u6570\u6982\u89C8","slug":"\u4E8C\u3001\u51FD\u6570\u6982\u89C8","link":"#\u4E8C\u3001\u51FD\u6570\u6982\u89C8","children":[]},{"level":2,"title":"\u4E09\u3001\u793A\u4F8B","slug":"\u4E09\u3001\u793A\u4F8B","link":"#\u4E09\u3001\u793A\u4F8B","children":[]},{"level":2,"title":"\u56DB\u3001\u8BE6\u89E3","slug":"\u56DB\u3001\u8BE6\u89E3","link":"#\u56DB\u3001\u8BE6\u89E3","children":[]},{"level":2,"title":"\u4E94\u3001\u8865\u5145","slug":"\u4E94\u3001\u8865\u5145","link":"#\u4E94\u3001\u8865\u5145","children":[]}],"relativePath":"blogs/front-frame/vue3/sound-code/reactivity/effect.md","lastUpdated":1681108177000}'),i={name:"blogs/front-frame/vue3/sound-code/reactivity/effect.md"},o=s("h1",{id:"effect",tabindex:"-1"},[n("effect "),s("a",{class:"header-anchor",href:"#effect","aria-hidden":"true"},"#")],-1),b=s("h2",{id:"\u4E00\u3001\u6D41\u7A0B\u56FE",tabindex:"-1"},[n("\u4E00\u3001\u6D41\u7A0B\u56FE "),s("a",{class:"header-anchor",href:"#\u4E00\u3001\u6D41\u7A0B\u56FE","aria-hidden":"true"},"#")],-1),A=c(`<h2 id="\u4E8C\u3001\u51FD\u6570\u6982\u89C8" tabindex="-1">\u4E8C\u3001\u51FD\u6570\u6982\u89C8 <a class="header-anchor" href="#\u4E8C\u3001\u51FD\u6570\u6982\u89C8" aria-hidden="true">#</a></h2><p>\u5728\u8BB2effect\u6E90\u7801\u4E4B\u524D\uFF0C\u6211\u5148\u5217\u51FA\u91CC\u9762\u6BCF\u4E2A\u51FD\u6570\u7684\u529F\u80FD\u5206\u522B\u662F\u4EC0\u4E48</p><table><thead><tr><th>\u51FD\u6570\u540D/\u7C7B\u540D</th><th>\u53C2\u6570</th><th>\u529F\u80FD</th></tr></thead><tbody><tr><td>cleanupEffect</td><td>effect</td><td>\u6E05\u9664\u8FD9\u4E2Aeffect\u7ED1\u5B9A\u7684\u6240\u6709\u4F9D\u8D56</td></tr><tr><td>ReactiveEffect</td><td>fn\u3001scheduler\uFF08\u8C03\u5EA6\u56DE\u8C03\u51FD\u6570\uFF09</td><td>\u4E00\u4E2A\u7528\u6765\u6267\u884Cfn\u6536\u96C6\u4F9D\u8D56\uFF0C\u5E76\u4E14\u5F53\u8FD9\u4E9B\u4F9D\u8D56\u6709\u53D8\u5316\u7684\u65F6\u5019\uFF0C\u89E6\u53D1\u66F4\u65B0\u7684\u7C7B</td></tr><tr><td>effect</td><td>fn\u3001options</td><td>\u521B\u5EFA\u4E00\u4E2AReactiveEffect\u5B9E\u4F8B</td></tr><tr><td>track</td><td>target\uFF08reactive\u7684\u539F\u5BF9\u8C61\uFF09\u3001type\uFF08\u6682\u65F6\u6CA1\u5565\u7528\uFF09\u3001key\uFF08\u4F20\u7ED9effect\u7684fn\u51FD\u6570\u91CC\u9762\uFF0C\u6709\u8BBF\u95EE\u5230\u7684\u4EE3\u7406\u5BF9\u8C61\u5C5E\u6027\u7684key\uFF09</td><td>\u6536\u96C6\u4F9D\u8D56\uFF0C\u5728reactive\u4EE3\u7406\u5BF9\u8C61\u7684get\u52AB\u6301\u91CC\u9762\u8C03\u7528\uFF0C\u8C03\u7528effect\u7684fn\u65F6\u4F1A\u89E6\u53D1\uFF0Ctrack\u5206\u4E3A\u4E24\u6B65\uFF0C\u7B2C\u4E00\u6B65\u662F\u5C06\u4F9D\u8D56\u6536\u96C6\u5230\u4E00\u4E2A\u5168\u5C40WeakMap\u5BF9\u8C61\u2014\u2014targetMap\uFF08\u540E\u7EED\u89E6\u53D1\u66F4\u65B0\u7684\u65F6\u5019\u53EF\u4EE5\u5728targetMap\u4E0A\u9762\u627E\u9700\u8981\u6267\u884C\u7684\u56DE\u8C03\uFF09\u3002\u7B2C\u4E8C\u6B65\u662F\u4E0B\u9762\u7684trackEffects</td></tr><tr><td>trackEffects</td><td>dep</td><td>\u7ED9\u5F53\u524D\u6D3B\u8DC3\u7684effect\u5BF9\u8C61\u6DFB\u52A0deps</td></tr><tr><td>trigger</td><td>target\uFF08reactive\u7684\u539F\u5BF9\u8C61\uFF09\u3001type\uFF0Cvalue\uFF0ColdValue\uFF08\u6682\u65F6\u6CA1\u5565\u7528\uFF09\u3001key\uFF08\u4F20\u7ED9effect\u7684fn\u51FD\u6570\u91CC\u9762\uFF0C\u6709\u8BBF\u95EE\u5230\u7684\u4EE3\u7406\u5BF9\u8C61\u5C5E\u6027\u7684key\uFF09</td><td>\u5F53effect\u6536\u96C6\u7684\u4F9D\u8D56\u53D1\u751F\u53D8\u5316\u7684\u65F6\u5019\uFF0C\u4F1A\u89E6\u53D1\u8FD9\u4E9B\u4F9D\u8D56\u91CC\u9762\u7684set\u52AB\u6301\u51FD\u6570\uFF0Cset\u91CC\u9762\u5C31\u4F1A\u89E6\u53D1trigger\uFF0Ctrigger\u4F1A\u4ECEtargetMap\u91CC\u9762\u627E\u51FA\u9700\u8981\u66F4\u65B0\u7684effect\uFF0C\u7136\u540E\u901A\u8FC7\u4E0B\u9762\u7684triggerEffects\u904D\u5386\u6267\u884C\u6240\u6709\u9700\u8981\u66F4\u65B0\u7684effects\uFF0C</td></tr><tr><td>triggerEffects</td><td>effects</td><td>\u904D\u5386\u6267\u884C\u6240\u6709\u9700\u8981\u66F4\u65B0\u7684effects</td></tr></tbody></table><h2 id="\u4E09\u3001\u793A\u4F8B" tabindex="-1">\u4E09\u3001\u793A\u4F8B <a class="header-anchor" href="#\u4E09\u3001\u793A\u4F8B" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u4E00\u822C\u5728\u4F7F\u7528effect\u7684\u65F6\u5019\u662F\u8FD9\u6837\u4F7F\u7528\u7684</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const data = { name: &#39;nangxi&#39;, age: 26, address: { num: 200 } };</span></span>
<span class="line"><span style="color:#A6ACCD;">const state = reactive(data);</span></span>
<span class="line"><span style="color:#A6ACCD;">effect(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    document.getElementById(&#39;app&#39;).innerHTML = state.name + &#39;\u4ECA\u5E74&#39; + state.age + &#39;\u5C81\u4E86&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u56DB\u3001\u8BE6\u89E3" tabindex="-1">\u56DB\u3001\u8BE6\u89E3 <a class="header-anchor" href="#\u56DB\u3001\u8BE6\u89E3" aria-hidden="true">#</a></h2><p>\u6B64effect\u51FD\u6570\u9ED8\u8BA4\u4F1A\u5148\u6267\u884C\u4E00\u6B21\uFF0C\u5BF9\u54CD\u5E94\u5F0F\u6570\u636E\u53D6\u503C\uFF0C\u53D6\u503C\u7684\u8FC7\u7A0B\u4E2D\u6570\u636E\u4F1A\u4F9D\u8D56\u4E8E\u5F53\u524D\u7684effect\u3002</p><p>\u8C03\u7528effect\u7684\u65F6\u5019\uFF0C\u5176\u5B9E\u53EA\u662F\u5728\u91CC\u9762\u521B\u5EFA\u4E86\u4E00\u4E2AReactiveEffect\u5BF9\u8C61\uFF0C\u5E76\u4E14\u8FD4\u56DE\u4E00\u4E2Arunner</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">export function effect(fn, options: any = {}) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u8FD9\u91CCfn\u53EF\u4EE5\u6839\u636E\u72B6\u6001\u53D8\u5316\u91CD\u65B0\u6267\u884C effect\u53EF\u4EE5\u5D4C\u5957\u7740\u5199</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u4E3A\u4EC0\u4E48\u53EF\u4EE5\u5D4C\u5957\u7740\u5199\uFF0C\u56E0\u4E3A\u7EC4\u4EF6\u4E5F\u662F\u57FA\u4E8Eeffect\uFF0C\u7EC4\u4EF6\u53EF\u4EE5\u5D4C\u5957\u7740\u5199</span></span>
<span class="line"><span style="color:#A6ACCD;">  /**</span></span>
<span class="line"><span style="color:#A6ACCD;">   * effect(()=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">   *      effect(()=&gt;{})</span></span>
<span class="line"><span style="color:#A6ACCD;">   * })</span></span>
<span class="line"><span style="color:#A6ACCD;">   * */</span></span>
<span class="line"><span style="color:#A6ACCD;">  const _effect = new ReactiveEffect(fn, options.scheduler);</span></span>
<span class="line"><span style="color:#A6ACCD;">  //   \u9ED8\u8BA4\u5148\u6267\u884C\u4E00\u6B21</span></span>
<span class="line"><span style="color:#A6ACCD;">  _effect.run();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  const runner = _effect.run.bind(_effect); //\u7ED1\u5B9Athis\u6267\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;">  runner.effect = _effect; //\u5C06effect\u6302\u8F7D\u5230runner\u4E0A</span></span>
<span class="line"><span style="color:#A6ACCD;">  return runner;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>ReactiveEffect\u7C7B\u662F\u7528\u6765\u5E72\u4EC0\u4E48\u7684\u5462\uFF1F\u7528\u6765\u5B9E\u4F8B\u5316\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u8FD9\u4E2A\u5BF9\u8C61\u5305\u542B\u7684run\u65B9\u6CD5\u53EF\u4EE5\u6267\u884C\u4F20\u7ED9effect\u7B2C\u4E00\u4E2A\u53C2\u6570\u7684\u51FD\u6570\uFF0C\u7136\u540E\u6E05\u9664\u5F53\u524D\u8FD9\u4E2Aeffect\u4E0A\u4E00\u6B21\u6536\u96C6\u8FC7\u7684\u4F9D\u8D56\uFF0C\u7136\u540E\u91CD\u65B0\u6536\u96C6\uFF08\u6CE8\u610F\uFF0C\u6BCF\u6B21\u6536\u96C6\u7684\u4F9D\u8D56\u53EA\u7528\u4E8E\u89E6\u53D1\u4E00\u6B21\uFF0C\u5728\u4E0B\u4E00\u6B21\u89E6\u53D1\u4E4B\u524D\u4F1A\u5C06\u6BCF\u4E2Aeffect\u4F1A\u5C06\u4E0E\u81EA\u5DF1\u7ED1\u5B9A\u7684\u4F9D\u8D56\u5168\u90E8\u6E05\u9664\u7136\u540E\u91CD\u65B0\u6536\u96C6\uFF0C\u65B9\u4FBF\u4E0B\u6B21\u89E6\u53D1\u7684\u65F6\u5019\u4F7F\u7528\uFF09\uFF0C\u8FD9\u4E2A\u5B9E\u4F8B\u5316\u7684\u5BF9\u8C61\u8FD8\u6709stop\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u505C\u6B62effect\u7684\u4F9D\u8D56\u6536\u96C6\u4EE5\u53CA\u89E6\u53D1\u3002</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">export class ReactiveEffect {</span></span>
<span class="line"><span style="color:#A6ACCD;">  /**</span></span>
<span class="line"><span style="color:#A6ACCD;">     * </span></span>
<span class="line"><span style="color:#A6ACCD;">     * effect(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        document.getElementById(&#39;app&#39;).innerHTML =</span></span>
<span class="line"><span style="color:#A6ACCD;">          state.name + &#39;\u4ECA\u5E74&#39; + state.age + &#39;\u5C81\u4E86&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">      });</span></span>
<span class="line"><span style="color:#A6ACCD;">      active\u662F\u6FC0\u6D3B\u7684\u8BDD\uFF0Cstate.name\u548Cstate.age\u624D\u4F1A\u53BB\u5173\u8054\u5F53\u524D\u7684effect</span></span>
<span class="line"><span style="color:#A6ACCD;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u8FD9\u91CC\u8868\u793A\u5728\u5B9E\u4F8B\u4E0A\u65B0\u589E\u4E86active\u5C5E\u6027</span></span>
<span class="line"><span style="color:#A6ACCD;">  public active = true; //\u8FD9\u4E2Aeffect\u9ED8\u8BA4\u662F\u6FC0\u6D3B\u72B6\u6001</span></span>
<span class="line"><span style="color:#A6ACCD;">  public parent = null;</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u7528\u6765\u8BB0\u5F55effect\u4F9D\u8D56\u4E86\u54EA\u4E9B\u5C5E\u6027\u6240\u5173\u8054\u7684effect\uFF0Cdeps\u662F\u4E00\u4E2A\u5143\u7D20\u4E3ASet\u7684\u6570\u7EC4\uFF0CSet\u91CC\u9762\u90FD\u662Feffect</span></span>
<span class="line"><span style="color:#A6ACCD;">  public deps = [];</span></span>
<span class="line"><span style="color:#A6ACCD;">  constructor(public fn, public scheduler?) {}</span></span>
<span class="line"><span style="color:#A6ACCD;">  run() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // run\u5C31\u662F\u6267\u884Ceffect</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (!this.active) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u8FD9\u91CC\u8868\u793A\u5982\u679C\u662F\u975E\u6FC0\u6D3B\u7684\u60C5\u51B5\uFF0C\u53EA\u9700\u8981\u6267\u884C\u51FD\u6570\uFF0C\u4E0D\u9700\u8981\u8FDB\u884C\u4F9D\u8D56\u6536\u96C6</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.fn();</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u8FD9\u91CC\u5C31\u9700\u8981\u8FDB\u884C\u4F9D\u8D56\u6536\u96C6\u4E86 \u6838\u5FC3\u5C31\u662F\u5C06\u5F53\u524D\u7684effect</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u548C\u7A0D\u540E\u6E32\u67D3\u7684\u5C5E\u6027\u5173\u8054\u5728\u4E00\u8D77</span></span>
<span class="line"><span style="color:#A6ACCD;">    try {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.parent = activeEffect;</span></span>
<span class="line"><span style="color:#A6ACCD;">      activeEffect = this;</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u8FD9\u91CC\u6211\u4EEC\u9700\u8981\u5728\u6267\u884C\u7528\u6237\u51FD\u6570\u4E4B\u524D\u5C06\u4E4B\u524D\u6536\u96C6\u7684\u5185\u5BB9\u6E05\u7A7A\uFF0C\u7136\u540E\u5728this.fn()\u91CC\u9762\u518D\u6536\u96C6</span></span>
<span class="line"><span style="color:#A6ACCD;">      // activeEffect.deps = [name: Set(),age:Set()]</span></span>
<span class="line"><span style="color:#A6ACCD;">      // state.name\u53D8\u6210state.age\u90A3\u4E48\u5C31\u8981\u79FB\u9664state.name\u7684effect</span></span>
<span class="line"><span style="color:#A6ACCD;">      cleanupEffect(this);</span></span>
<span class="line"><span style="color:#A6ACCD;">      //   \u5F53\u6211\u4EEC\u6267\u884Cthis.fn()\u7684\u65F6\u5019\u4F1A\u6267\u884Cstate.name\u548Cstate.age\u7B49\u4E00\u4E9B\u53D6\u503C\u64CD\u4F5C</span></span>
<span class="line"><span style="color:#A6ACCD;">      //   \u56E0\u4E3Astate.name\u548Cstate.age\u662F\u54CD\u5E94\u5F0F\u6570\u636E\uFF0C\u6240\u4EE5\u4F1A\u8D70get</span></span>
<span class="line"><span style="color:#A6ACCD;">      return this.fn(); //\u5F53\u7A0D\u540E\u8C03\u7528\u53D6\u503C\u64CD\u4F5C\u7684\u65F6\u5019\u5C31\u53EF\u4EE5\u83B7\u53D6\u5230\u8FD9\u4E2A\u5168\u5C40\u7684activeEffect</span></span>
<span class="line"><span style="color:#A6ACCD;">    } finally {</span></span>
<span class="line"><span style="color:#A6ACCD;">      //   activeEffect = undefined;</span></span>
<span class="line"><span style="color:#A6ACCD;">      activeEffect = this.parent;</span></span>
<span class="line"><span style="color:#A6ACCD;">      //   \u8FD9\u4E00\u6B65\u5199\u4E0D\u5199\u90FD\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.parent = null;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  stop() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (this.active) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      this.active = false;</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u5149\u6539\u6FC0\u6D3B\u4E0D\u884C\uFF0C\u6570\u636E\u53D8\u4E86\u4F9D\u7136\u4F1A\u91CD\u65B0run</span></span>
<span class="line"><span style="color:#A6ACCD;">      cleanupEffect(this); //\u505C\u6B62effect\u7684\u6536\u96C6</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div><p>\u6BCF\u4E00\u4E2Aeffect\u7684\u6267\u884C\u6709\u70B9\u7C7B\u4F3C\u6DF1\u5EA6\u4F18\u5148\u904D\u5386</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// effect1</span></span>
<span class="line"><span style="color:#A6ACCD;">effect(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">	// effect2</span></span>
<span class="line"><span style="color:#A6ACCD;">	effect(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">	})</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">// effect 3</span></span>
<span class="line"><span style="color:#A6ACCD;">effect(() =&gt; {})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u4E5F\u5C31\u662F\u8BF4\uFF0C\u4E0A\u9762\u7684\u4E09\u4E2Aeffect\u7684\u6267\u884C\u987A\u5E8F\u662Feffect1 -&gt; effect2 -&gt; effect3</p><p>\u672C\u6765activeEffect\u6211\u4EEC\u4E5F\u53EF\u4EE5\u7528\u6808\u7684\u601D\u60F3\u6765\u5B9E\u73B0\uFF0C\u6267\u884C\u65F6\u5165\u6808\uFF0C\u6267\u884C\u5B8C\u51FA\u6808\uFF0C\u6BD4\u5982</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u6267\u884C                 \u6808                 activiteEffect</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6267\u884Ceffect1          [effect1]          effect1</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6267\u884Ceffect2          [effect1,effect2]  effect2</span></span>
<span class="line"><span style="color:#A6ACCD;">effect2\u5B8C\u6BD5          [effect1]          effect1</span></span>
<span class="line"><span style="color:#A6ACCD;">effect1\u5B8C\u6BD5          []                 undefined</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6267\u884Ceffect3          [effect3]          effect3</span></span>
<span class="line"><span style="color:#A6ACCD;">effect3\u5B8C\u6BD5          []                 undefined</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u4F46\u662F\u4EE3\u7801\u5B9E\u73B0\u8D77\u6765\u4E0D\u597D\u7406\u89E3\uFF0C\u6240\u4EE5\u91C7\u7528\u4E0A\u9762\u8FD9\u79CD\u65B9\u5F0F\u5B9E\u73B0</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">try {</span></span>
<span class="line"><span style="color:#A6ACCD;">	// \u5148\u5C06\u5916\u5C42\u7684activiteEffect\u8D4B\u503C\u7ED9\u5F53\u524D\u8FD9\u4E2Aeffect\u7684parent</span></span>
<span class="line"><span style="color:#A6ACCD;">	this.parent = activiteEffect;</span></span>
<span class="line"><span style="color:#A6ACCD;">	// \u518D\u5C06activiteEffect\u53D8\u4E3A\u5F53\u524D\u6D3B\u8DC3\u7684effect</span></span>
<span class="line"><span style="color:#A6ACCD;">	activiteEffect = this</span></span>
<span class="line"><span style="color:#A6ACCD;">}finally {</span></span>
<span class="line"><span style="color:#A6ACCD;">	// \u6700\u540E\u5728\u5F53\u524D\u7684effect.run\u6536\u96C6\u4F9D\u8D56\u5B8C\u6BD5\u4E4B\u540E\uFF0C\u91CD\u7F6E\u4E3A\u5916\u5C42\u7684effect</span></span>
<span class="line"><span style="color:#A6ACCD;">	activiteEffect = this.parent;</span></span>
<span class="line"><span style="color:#A6ACCD;">	this.parent = undefined;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u4E0B\u9762\u662F\u4F9D\u8D56\u6536\u96C6\u7684\u4E3B\u8981\u4EE3\u7801</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const targetMap = new WeakMap();</span></span>
<span class="line"><span style="color:#A6ACCD;">export function track(target, type, key) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  /**</span></span>
<span class="line"><span style="color:#A6ACCD;">   * effect(()=&gt;{state.name})</span></span>
<span class="line"><span style="color:#A6ACCD;">   * effect(()=&gt;{state.name})</span></span>
<span class="line"><span style="color:#A6ACCD;">   * \u4E0A\u9762\u7684name\u5BF9\u5E94\u4E24\u4E2Aeffect</span></span>
<span class="line"><span style="color:#A6ACCD;">   * \u4E00\u4E2A\u5BF9\u8C61\u4E0A\u7684\u67D0\u4E2A\u5C5E\u6027\u53EF\u80FD\u5BF9\u5E94\u591A\u4E2Aeffect</span></span>
<span class="line"><span style="color:#A6ACCD;">   * \u6211\u4EEC\u53EF\u4EE5\u7528\u4E00\u4E2Aweakmap\u7ED3\u6784\uFF0C\u4E0B\u9762\u7684name\u6307\u7684\u662F\u5C5E\u6027\uFF0CSet\u6307\u7684\u662Feffect</span></span>
<span class="line"><span style="color:#A6ACCD;">   * WeakMap {</span></span>
<span class="line"><span style="color:#A6ACCD;">        { name: &#39;nangxi&#39;, age: 26} : Map {</span></span>
<span class="line"><span style="color:#A6ACCD;">                                       name: dep = Set([activeEffect])</span></span>
<span class="line"><span style="color:#A6ACCD;">                                       age: dep = Set([activeEffect])</span></span>
<span class="line"><span style="color:#A6ACCD;">                                   }</span></span>
<span class="line"><span style="color:#A6ACCD;">	 }</span></span>
<span class="line"><span style="color:#A6ACCD;">   */</span></span>
<span class="line"><span style="color:#A6ACCD;">  /**</span></span>
<span class="line"><span style="color:#A6ACCD;">   * \u6211\u4EEC\u4EC0\u4E48\u65F6\u5019\u5F00\u59CB\u6536\u96C6\u5462</span></span>
<span class="line"><span style="color:#A6ACCD;">   * \u6211\u4EEC\u8981\u5728activeEffect\u6709\u503C\u7684\u65F6\u5019\u5F00\u59CB\u6536\u96C6\uFF0C\u56E0\u4E3A\u6709\u53EF\u80FD\u4F1A\u5199\u5728\u8FD9\u91CC\uFF0C\u6700\u5916\u5C42effect\u7684\u5916\u9762</span></span>
<span class="line"><span style="color:#A6ACCD;">   * \u53EA\u6709\u5728effect\u6267\u884C\u7684\u65F6\u5019\u624D\u9700\u8981\u6536\u96C6\u5C5E\u6027</span></span>
<span class="line"><span style="color:#A6ACCD;">   * state.name</span></span>
<span class="line"><span style="color:#A6ACCD;">   * effect(()=&gt;{})</span></span>
<span class="line"><span style="color:#A6ACCD;">   * */</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (!activeEffect) return;</span></span>
<span class="line"><span style="color:#A6ACCD;">  let depsMap = targetMap.get(target); //\u7B2C\u4E00\u6B21\u6CA1\u6709</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (!depsMap) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // target\u539F\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#A6ACCD;">    targetMap.set(target, (depsMap = new Map()));</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  let dep = depsMap.get(key);</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (!dep) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    depsMap.set(key, (dep = new Set()));</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  trackEffects(dep);</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u4E0A\u9762\u8FD9\u90E8\u5206\u53EA\u662F\u5355\u5411\u8BB0\u5F55\uFF08\u5C5E\u6027\u8BB0\u5F55\u4E86effect\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u4F46\u662F\u8FD9\u662F\u4E0D\u591F\u7684\uFF0C\u7B49\u4F1A\u6211\u53EF\u80FD\u8981\u628Aeffect\u5220\u6389\uFF0C\u5220\u6389\u7684\u8BDD\uFF0C\u90A3\u4E48\u6211\u5C31\u9700\u8981\u628A\u5C5E\u6027\u91CC\u9762\u7684effect\u5220\u6389</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u6240\u4EE5\u6211\u4EEC\u8FD8\u9700\u8981\u53CD\u5411\u8BB0\u5F55\uFF0C\u5E94\u8BE5\u8BA9effect\u4E5F\u8BB0\u5F55\u4ED6\u88AB\u54EA\u4E9B\u5C5E\u6027\u6536\u96C6\uFF0C\u8FD9\u6837\u505A\u7684\u597D\u5904\u662F\u4E3A\u4E86\u53EF\u4EE5\u6E05\u7406</span></span>
<span class="line"><span style="color:#A6ACCD;">  /**</span></span>
<span class="line"><span style="color:#A6ACCD;">   * \u4EC0\u4E48\u60C5\u51B5\u4E0B\u4F1A\u5220\u9664effect\u5462</span></span>
<span class="line"><span style="color:#A6ACCD;">   * eg\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">   * effect(()=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">   *    flag ? this.name : this.age</span></span>
<span class="line"><span style="color:#A6ACCD;">   * })</span></span>
<span class="line"><span style="color:#A6ACCD;">   * **/</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export function trackEffects(dep) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u4E00\u4E2A\u5C5E\u6027\u53EF\u80FD\u5728effect\u91CC\u9762\u88AB\u7528\u4E86\u591A\u6B21\uFF0C\u6536\u96C6\u4E00\u6B21\u5C31\u591F\u4E86</span></span>
<span class="line"><span style="color:#A6ACCD;">  // Set\u786E\u5B9E\u4F1A\u53BB\u91CD\uFF0C\u4F46\u662F\u4E3A\u4E86\u6027\u80FD\u4F18\u5316\uFF0C\u91CD\u590D\u7684\u8FD8\u662F\u5148\u5224\u65AD\u4E00\u4E0B\uFF0C\u4E0D\u8981\u653E\u8FDB\u53BB</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (activeEffect) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    let shouldTrack = !dep.has(activeEffect);</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (shouldTrack) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u8FD9\u91CC\u7684dep\u6307\u7684\u662F\u67D0\u4E2A\u5C5E\u6027\u5BF9\u5E94\u7684\u6240\u6709effect\uFF0C\u4E0B\u9762\u4F1Apush\u5230\u5F53\u524D\u6D3B\u8DC3\u7684effect\u7684deps\uFF0C</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u6240\u4EE5deps\u91CC\u9762\u5305\u542B\u4E86\u591A\u4E2A\u5C5E\u6027\u7684effect</span></span>
<span class="line"><span style="color:#A6ACCD;">      // dep\u662F\u4E00\u4E2ASet</span></span>
<span class="line"><span style="color:#A6ACCD;">      dep.add(activeEffect);</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u8BA9effect\u8BB0\u5F55\u5BF9\u5E94\u7684dep\uFF0C\u7A0D\u540E\u6E05\u7406\u7684\u65F6\u5019\u4F1A\u7528\u5230</span></span>
<span class="line"><span style="color:#A6ACCD;">      // deps\u8BB0\u5F55\u7684\u662F\u5F53\u524D\u5C5E\u6027key\u5BF9\u5E94\u7684effect\u7684Set</span></span>
<span class="line"><span style="color:#A6ACCD;">      /**</span></span>
<span class="line"><span style="color:#A6ACCD;">       * deps\u957F\u8FD9\u6837</span></span>
<span class="line"><span style="color:#A6ACCD;">       * [Set,Set]</span></span>
<span class="line"><span style="color:#A6ACCD;">       * */</span></span>
<span class="line"><span style="color:#A6ACCD;">      activeEffect.deps.push(dep);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br></div></div><p>\u4E0B\u9762\u662F\u4F9D\u8D56\u89E6\u53D1\u7684\u6838\u5FC3\u4EE3\u7801</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">export function trigger(target, type, key, value, oldValue) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const depsMap = targetMap.get(target);</span></span>
<span class="line"><span style="color:#A6ACCD;">  /**</span></span>
<span class="line"><span style="color:#A6ACCD;">   * \u6709\u53EF\u80FD\u89E6\u53D1\u66F4\u65B0\u7684\u503C\uFF0C\u4E0D\u5728effect\u91CC\u9762\uFF0C\u6BD4\u5982</span></span>
<span class="line"><span style="color:#A6ACCD;">   * effect(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        document.getElementById(&#39;app&#39;).innerHTML =</span></span>
<span class="line"><span style="color:#A6ACCD;">          state.name + &#39;\u4ECA\u5E74&#39; + state.age + &#39;\u5C81\u4E86&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">      });</span></span>
<span class="line"><span style="color:#A6ACCD;">      setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        state.address=&#39;&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">      });</span></span>
<span class="line"><span style="color:#A6ACCD;">      \u8FD9\u79CD\u60C5\u51B5\u4E0B\u4E0D\u7528\u89E6\u53D1effect\u7684\u56DE\u8C03</span></span>
<span class="line"><span style="color:#A6ACCD;">   * */</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (!depsMap) return;</span></span>
<span class="line"><span style="color:#A6ACCD;">  let effects = depsMap.get(key); //\u627E\u5230\u4E86\u5C5E\u6027\u5BF9\u5E94\u7684effect</span></span>
<span class="line"><span style="color:#A6ACCD;">  /**</span></span>
<span class="line"><span style="color:#A6ACCD;">   * let s = new Set([1]);</span></span>
<span class="line"><span style="color:#A6ACCD;">   * s.forEach(item =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">   *   s.delete(1);</span></span>
<span class="line"><span style="color:#A6ACCD;">   *   s.add(1);</span></span>
<span class="line"><span style="color:#A6ACCD;">   * });</span></span>
<span class="line"><span style="color:#A6ACCD;">  \u4F1A\u9677\u5165\u6B7B\u5FAA\u73AF\uFF0C\u6240\u4EE5\u6211\u4EEC\u5728\u5FAA\u73AF\u7684\u65F6\u5019\uFF0C\u5148\u590D\u5236\u4E00\u4EFDeffects</span></span>
<span class="line"><span style="color:#A6ACCD;">  * */</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (effects) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    triggerEffects(effects);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">export function triggerEffects(effects) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  effects = new Set(effects);</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u8FD9\u6837\u5B50\u540E\u9762\u7684deps\u5728\u5220\u9664\u7684\u65F6\u5019\uFF0C\u5220\u7684\u5C31\u662F\u539F\u6765\u7684\uFF0C\u5FAA\u73AF\u7684\u90A3\u4E2A\u6570\u7EC4\u5C31\u4E0D\u4F1A\u53D1\u751F\u6539\u53D8</span></span>
<span class="line"><span style="color:#A6ACCD;">  effects &amp;&amp;</span></span>
<span class="line"><span style="color:#A6ACCD;">    effects.forEach((effect) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u6211\u4EEC\u5728\u6267\u884Ceffect\u7684\u65F6\u5019\uFF0C\u5047\u8BBE\u53C8\u8981\u6267\u884C\u81EA\u5DF1\uFF0C\u90A3\u6211\u4EEC\u9700\u8981\u5C4F\u853D\u6389\uFF0C\u4E0D\u8981\u65E0\u9650\u8C03\u7528</span></span>
<span class="line"><span style="color:#A6ACCD;">      /**</span></span>
<span class="line"><span style="color:#A6ACCD;">     * effect(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">     * \u6CE8\u610F\u8FD9\u91CC</span></span>
<span class="line"><span style="color:#A6ACCD;">     * state.age++;</span></span>
<span class="line"><span style="color:#A6ACCD;">       document.getElementById(&#39;app&#39;).innerHTML =</span></span>
<span class="line"><span style="color:#A6ACCD;">         state.name + &#39;\u4ECA\u5E74&#39; + state.age + &#39;\u5C81\u4E86&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">     });</span></span>
<span class="line"><span style="color:#A6ACCD;">     setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">       state.age++;</span></span>
<span class="line"><span style="color:#A6ACCD;">     });</span></span>
<span class="line"><span style="color:#A6ACCD;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (effect !== activeEffect) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (effect.scheduler) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          effect.scheduler(); //\u5982\u679C\u7528\u6237\u4F20\u5165\u4E86\u8C03\u5EA6\u7684\u51FD\u6570\uFF0C\u5219\u7528\u7528\u6237\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">        } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">          effect.run(); //\u5426\u5219\u9ED8\u8BA4\u5237\u65B0\u8BD5\u56FE</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u81F3\u6B64\u5148\u4E0D\u8003\u8651\u5408\u5E76</span></span>
<span class="line"><span style="color:#A6ACCD;">  /**</span></span>
<span class="line"><span style="color:#A6ACCD;">   * \u4EC0\u4E48\u662F\u5408\u5E76</span></span>
<span class="line"><span style="color:#A6ACCD;">   * setTimeout(()=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">   *   state.age++;</span></span>
<span class="line"><span style="color:#A6ACCD;">   *    state.age++;</span></span>
<span class="line"><span style="color:#A6ACCD;">   * })</span></span>
<span class="line"><span style="color:#A6ACCD;">   */</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br></div></div><h2 id="\u4E94\u3001\u8865\u5145" tabindex="-1">\u4E94\u3001\u8865\u5145 <a class="header-anchor" href="#\u4E94\u3001\u8865\u5145" aria-hidden="true">#</a></h2><h4 id="_1-\u4E3A\u4EC0\u4E48\u5728\u4F9D\u8D56\u6536\u96C6\u4E4B\u524D\u9700\u8981\u6E05\u9664\u4E0A\u4E00\u6B21\u6536\u96C6\u7684\u4F9D\u8D56" tabindex="-1">1.\u4E3A\u4EC0\u4E48\u5728\u4F9D\u8D56\u6536\u96C6\u4E4B\u524D\u9700\u8981\u6E05\u9664\u4E0A\u4E00\u6B21\u6536\u96C6\u7684\u4F9D\u8D56 <a class="header-anchor" href="#_1-\u4E3A\u4EC0\u4E48\u5728\u4F9D\u8D56\u6536\u96C6\u4E4B\u524D\u9700\u8981\u6E05\u9664\u4E0A\u4E00\u6B21\u6536\u96C6\u7684\u4F9D\u8D56" aria-hidden="true">#</a></h4><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const state = reactive({ flag: true, name: &#39;nangxi&#39;, age: 30 });</span></span>
<span class="line"><span style="color:#A6ACCD;">effect(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(&#39;render&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">  document.body.innerHTML = state.flag ? state.name : state.age;</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;">setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  state.flag = false;</span></span>
<span class="line"><span style="color:#A6ACCD;">  setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u8FD9\u91CC\u4FEE\u6539\u7684\u662Fname\uFF0C\u56E0\u4E3Aflag\u662Ffalse\u4E86\uFF0C\u6240\u4EE5\u663E\u793A\u7684\u662Fage</span></span>
<span class="line"><span style="color:#A6ACCD;">    // name\u539F\u5219\u4E0A\u5C31\u4E0D\u5E94\u8BE5\u89E6\u53D1\u526F\u4F5C\u7528\u4E86\uFF0C\u6240\u4EE5\u8981\u6E05\u9664\u526F\u4F5C\u7528</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;\u4FEE\u6539name\uFF0C\u539F\u5219\u4E0A\u4E0D\u66F4\u65B0&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    state.name = &#39;zf&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }, 1000);</span></span>
<span class="line"><span style="color:#A6ACCD;">}, 1000);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u5982\u679C\u4E0D\u8FDB\u884C\u4F9D\u8D56\u6E05\u9664\u7684\u8BDD\uFF0C\u90A3\u4E48name\u4FEE\u6539\u4E86\uFF0C\u8FD8\u662F\u4F1A\u89E6\u53D1effect.run\u7684\u6267\u884C\uFF0C\u6240\u4EE5\u5728state.flag\u66F4\u65B0\u7684\u65F6\u5019\uFF0C\u4F1A\u89E6\u53D1set\u7136\u540E\u8C03\u7528trigger\uFF0C\u7136\u540E\u6267\u884C\u4E4B\u524D\u6536\u96C6\u7684\u4F9D\u8D56\u5BF9\u5E94\u7684effect\uFF0C\u7136\u540E\u5728\u6BCF\u4E2Aeffect\u91CC\u9762\u6E05\u9664\u6389effect\u91CC\u9762\u6536\u96C6\u7684\u4F9D\u8D56\uFF0C\u7136\u540E\u91CD\u65B0\u6536\u96C6\u3002</p><h4 id="_2-\u8C03\u5EA6\u5668" tabindex="-1">2.\u8C03\u5EA6\u5668 <a class="header-anchor" href="#_2-\u8C03\u5EA6\u5668" aria-hidden="true">#</a></h4><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const state = reactive({ flag: true, name: &#39;nangxi&#39;, age: 30 });</span></span>
<span class="line"><span style="color:#A6ACCD;">let runner = effect(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">	document.body.innerHTML = state.age;</span></span>
<span class="line"><span style="color:#A6ACCD;">}\uFF0C{</span></span>
<span class="line"><span style="color:#A6ACCD;">    scheduler() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        //\u8C03\u5EA6 \u5982\u4F55\u66F4\u65B0\u81EA\u5DF1\u51B3\u5B9A</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;run&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">          runner();</span></span>
<span class="line"><span style="color:#A6ACCD;">        });</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u8FD9\u91CC\u505C\u6389\u4E0D\u8BA9\u4ED6\u81EA\u52A8\u89E6\u53D1</span></span>
<span class="line"><span style="color:#A6ACCD;">runner.effect.stop();</span></span>
<span class="line"><span style="color:#A6ACCD;">setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    state.age = 1000;</span></span>
<span class="line"><span style="color:#A6ACCD;">    setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u4E09\u79D2\u540E\u624B\u52A8\u89E6\u53D1</span></span>
<span class="line"><span style="color:#A6ACCD;">      runner();</span></span>
<span class="line"><span style="color:#A6ACCD;">    }, 2000);</span></span>
<span class="line"><span style="color:#A6ACCD;">}, 1000);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>\u56E0\u6B64\u5728trigger\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u4F1A\u53D1\u73B0\u6709\u4E00\u4E2A\u5224\u65AD\uFF0C\u5C31\u662F\u5148\u5224\u65AD\u9700\u8981\u904D\u5386\u6267\u884C\u7684effect\u91CC\u9762\u6709\u6CA1\u6709scheduler\uFF0C\u6709\u7684\u8BDD\u5C31\u6267\u884C\u8C03\u5EA6\u51FD\u6570\uFF0C\u6CA1\u6709\u7684\u8BDD\u5C31\u6267\u884Ceffect.run\u3002\u5728\u8C03\u5EA6\u51FD\u6570\u91CC\u9762\uFF0C\u6211\u4EEC\u4EC0\u4E48\u65F6\u5019\u60F3\u6267\u884Crun\u518D\u6267\u884Crun\u3002</p>`,30);function C(u,f,m,y,D,d){const a=t("Image");return r(),p("div",null,[o,b,l(a,{src:"/front-frame/vue3/sound-code/reactivity/effect/1.png"},null,8,["src"]),A])}const v=e(i,[["render",C]]);export{h as __pageData,v as default};
