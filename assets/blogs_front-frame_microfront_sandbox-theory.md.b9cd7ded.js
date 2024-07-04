import{_ as s,c as n,o as a,h as p}from"./app.15c3eca2.js";const d=JSON.parse('{"title":"\u6C99\u7BB1\u7684\u539F\u7406","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u5355\u4F8B\u6C99\u7BB1","slug":"\u4E00\u3001\u5355\u4F8B\u6C99\u7BB1","link":"#\u4E00\u3001\u5355\u4F8B\u6C99\u7BB1","children":[{"level":3,"title":"1.\u5FEB\u7167\u6C99\u7BB1SnapshotSandbox","slug":"_1-\u5FEB\u7167\u6C99\u7BB1snapshotsandbox","link":"#_1-\u5FEB\u7167\u6C99\u7BB1snapshotsandbox","children":[]},{"level":3,"title":"2.proxy\u6C99\u7BB1LegacySandbox","slug":"_2-proxy\u6C99\u7BB1legacysandbox","link":"#_2-proxy\u6C99\u7BB1legacysandbox","children":[]}]},{"level":2,"title":"\u4E8C\u3001\u591A\u4F8B\u6A21\u5F0F","slug":"\u4E8C\u3001\u591A\u4F8B\u6A21\u5F0F","link":"#\u4E8C\u3001\u591A\u4F8B\u6A21\u5F0F","children":[{"level":3,"title":"1.ProxySandbox","slug":"_1-proxysandbox","link":"#_1-proxysandbox","children":[]}]}],"relativePath":"blogs/front-frame/microfront/sandbox-theory.md","lastUpdated":1720104828000}'),l={name:"blogs/front-frame/microfront/sandbox-theory.md"},e=p(`<h1 id="\u6C99\u7BB1\u7684\u539F\u7406" tabindex="-1">\u6C99\u7BB1\u7684\u539F\u7406 <a class="header-anchor" href="#\u6C99\u7BB1\u7684\u539F\u7406" aria-hidden="true">#</a></h1><p>\u6C99\u7BB1\u7684\u4F5C\u7528\u662F\u9632\u6B62\u5E94\u7528\u52A0\u8F7D\u7684\u65F6\u5019\uFF0C\u5BF9widow\u9020\u6210\u6C61\u67D3\u3002</p><h2 id="\u4E00\u3001\u5355\u4F8B\u6C99\u7BB1" tabindex="-1">\u4E00\u3001\u5355\u4F8B\u6C99\u7BB1 <a class="header-anchor" href="#\u4E00\u3001\u5355\u4F8B\u6C99\u7BB1" aria-hidden="true">#</a></h2><h3 id="_1-\u5FEB\u7167\u6C99\u7BB1snapshotsandbox" tabindex="-1">1.\u5FEB\u7167\u6C99\u7BB1SnapshotSandbox <a class="header-anchor" href="#_1-\u5FEB\u7167\u6C99\u7BB1snapshotsandbox" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class SnapshotSandbox {</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.modifyPropsMap = {}; // \u5B58\u50A8\u5168\u5C40\u54EA\u4E9B\u5C5E\u6027\u88AB\u4FEE\u6539\u4E86</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    active(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.windowSnapShot = {};</span></span>
<span class="line"><span style="color:#A6ACCD;">        // \u7ED9window\u62CD\u7167</span></span>
<span class="line"><span style="color:#A6ACCD;">        Object.keys(window).forEach(prop=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.windowSnapShot[prop] = window[prop]</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">        // \u6FC0\u6D3B\u7684\u65F6\u5019\u628A\u88AB\u4FEE\u6539\u8FC7\u7684\u5C5E\u6027\u91CD\u65B0\u8D4B\u503C\u7ED9window</span></span>
<span class="line"><span style="color:#A6ACCD;">        Object.keys(this.modifyPropsMap).forEach(prop=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">            window[prop] = this.modifyPropsMap[prop]</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    inactive(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        // \u5931\u6D3B\u7684\u65F6\u5019\uFF0C\u5C06modifyPropsMap\u5148\u6E05\u7A7A\uFF0C\u7136\u540E\u5B58\u50A8\u6700\u65B0\u7684\u88AB\u4FEE\u6539\u7684window\u5C5E\u6027</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.modifyPropsMap = {}</span></span>
<span class="line"><span style="color:#A6ACCD;">        Object.keys(window).forEach(prop=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">            if(window[prop] !== this.windowSnapShot[prop]){</span></span>
<span class="line"><span style="color:#A6ACCD;">                this.modifyPropsMap[prop] = window[prop]; </span></span>
<span class="line"><span style="color:#A6ACCD;">                // \u6700\u540E\u628Awindow\u4E0A\u7684\u5C5E\u6027\u91CD\u7F6E\u56DE\u6FC0\u6D3B\u524D\u7684\u72B6\u6001</span></span>
<span class="line"><span style="color:#A6ACCD;">                window[prop] = this.windowSnapShot[prop];</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">let sandbox = new SnapshotSandbox();</span></span>
<span class="line"><span style="color:#A6ACCD;">sandbox.active();</span></span>
<span class="line"><span style="color:#A6ACCD;">window.a = 100;</span></span>
<span class="line"><span style="color:#A6ACCD;">window.b = 200;</span></span>
<span class="line"><span style="color:#A6ACCD;">sandbox.inactive();</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(window.a,window.b)</span></span>
<span class="line"><span style="color:#A6ACCD;">sandbox.active();</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(window.a,window.b)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><p>\u7F3A\u70B9\uFF1A\u6D6A\u8D39\u5185\u5B58\u3002</p><h3 id="_2-proxy\u6C99\u7BB1legacysandbox" tabindex="-1">2.proxy\u6C99\u7BB1LegacySandbox <a class="header-anchor" href="#_2-proxy\u6C99\u7BB1legacysandbox" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class LegacySandbox {</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 1) \u4FEE\u6539\u7684\u5185\u5BB9    </span></span>
<span class="line"><span style="color:#A6ACCD;">        this.modifyPropsMap = new Map();</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 2) \u65B0\u589E\u7684\u5185\u5BB9</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.addedPropsMap = new Map();</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 3) \u4E0D\u7BA1\u4FEE\u6539\u8FD8\u662F\u65B0\u589E\u7684\u5185\u5BB9</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.currentPropsMap = new Map();</span></span>
<span class="line"><span style="color:#A6ACCD;">		// \u521B\u5EFA\u4E00\u4E2A\u7A7A\u5BF9\u8C61\uFF0C\u7528\u4F5C\u4EE3\u7406\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#A6ACCD;">        const fakeWindow = Object.create(null)</span></span>
<span class="line"><span style="color:#A6ACCD;">        const proxy = new Proxy(fakeWindow,{</span></span>
<span class="line"><span style="color:#A6ACCD;">            get:(target,key,recevier)=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">            	// \u53D6\u503C\u4EE3\u7406\u5BF9\u8C61\u7684\u65F6\u5019\uFF0C\u76F4\u63A5\u4ECEwindow\u4E0A\u67E5\u627E\u76F8\u5E94\u7684\u5C5E\u6027</span></span>
<span class="line"><span style="color:#A6ACCD;">                return window[key]</span></span>
<span class="line"><span style="color:#A6ACCD;">            },</span></span>
<span class="line"><span style="color:#A6ACCD;">            set:(target,key,value)=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">            	// \u7ED9\u4EE3\u7406\u5BF9\u8C61\u8BBE\u7F6E\u503C\u7684\u65F6\u5019\uFF0C\u9700\u8981\u533A\u5206\u662F\u6DFB\u52A0\u7684\u5C5E\u6027\u8FD8\u662F\u4FEE\u6539\u7684\u5C5E\u6027</span></span>
<span class="line"><span style="color:#A6ACCD;">                if(!window.hasOwnProperty(key)){</span></span>
<span class="line"><span style="color:#A6ACCD;">                    // \u5982\u679C\u8FD9\u4E2Akey\u5728window\u627E\u4E0D\u5230\uFF0C\u90A3\u4E48\u5C31\u662F\u6DFB\u52A0\u7684\u5C5E\u6027</span></span>
<span class="line"><span style="color:#A6ACCD;">                    this.addedPropsMap.set(key,value)</span></span>
<span class="line"><span style="color:#A6ACCD;">                }else if(!this.modifyPropsMap.has(key)){</span></span>
<span class="line"><span style="color:#A6ACCD;">                    // \u5982\u679Ckey\u5728window\u627E\u5F97\u5230\uFF0C\u4F46\u662F\u5728modifyPropsMap\u627E\u4E0D\u5230\uFF0C\u90A3\u4E48\u5C31\u4FDD\u5B58\u4FEE\u6539\u7684\u524D\u7684\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">                    this.modifyPropsMap.set(key,window[key])</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">                // \u6240\u6709\u7684\u4FEE\u6539\u64CD\u4F5C\u90FD\u4FDD\u7559\u4E86\u4E00\u4EFD\u6700\u65B0\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">                this.currentPropsMap.set(key,value);</span></span>
<span class="line"><span style="color:#A6ACCD;">                window[key] = value;// \u4FEE\u6539\u6210\u6700\u65B0\u7684\u5185\u5BB9 </span></span>
<span class="line"><span style="color:#A6ACCD;">            },</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.proxy = proxy</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    setWindowProp(key,value){</span></span>
<span class="line"><span style="color:#A6ACCD;">        if(value == undefined){</span></span>
<span class="line"><span style="color:#A6ACCD;">        	// \u5982\u679C\u4F20\u8FDB\u6765\u7684value\u662Fundefined\u90A3\u4E48\u5C31\u76F4\u63A5\u5220\u9664\u8FD9\u4E2A\u5C5E\u6027</span></span>
<span class="line"><span style="color:#A6ACCD;">            delete window[key];</span></span>
<span class="line"><span style="color:#A6ACCD;">        }else{</span></span>
<span class="line"><span style="color:#A6ACCD;">            window[key] = value; // \u8986\u76D6\u4FEE\u6539\u524D\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    active(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    	// \u6C99\u7BB1\u88AB\u6FC0\u6D3B\u7684\u65F6\u5019\uFF0C\u904D\u5386currentPropsMap\u5C06\u4E4B\u524D\u64CD\u4F5C\u8FC7\u7684\u503C\u8D4B\u503C\u7ED9window</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.currentPropsMap.forEach((value,key)=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.setWindowProp(key,value)</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    inactive(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    	// \u6C99\u7BB1\u5931\u6D3B\u7684\u65F6\u5019\uFF0C\u904D\u5386modifyPropsMap\u5C06\u5B58\u50A8\u7684window\u88AB\u4FEE\u6539\u524D\u7684\u503C\u91CD\u7F6E\u8D4B\u503C\u7ED9window</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.modifyPropsMap.forEach((value,key)=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.setWindowProp(key,value)</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">        // \u6C99\u7BB1\u5931\u6D3B\u7684\u65F6\u5019\uFF0C\u904D\u5386addedPropsMap\u5C06\u6DFB\u52A0\u7684\u5C5E\u6027\u4ECEwindow\u5220\u9664</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.addedPropsMap.forEach((value,key)=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.setWindowProp(key,undefined)</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">let sandbox = new LegacySandbox();</span></span>
<span class="line"><span style="color:#A6ACCD;">sandbox.proxy.a = 100;</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(window.a,sandbox.proxy.a)</span></span>
<span class="line"><span style="color:#A6ACCD;">sandbox.inactive();</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(window.a,sandbox.proxy.a)</span></span>
<span class="line"><span style="color:#A6ACCD;">sandbox.active();</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(window.a,sandbox.proxy.a)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br></div></div><p>\u4F18\u70B9\uFF1A\u76F8\u6BD4\u5FEB\u7167\u6A21\u5F0F\u8282\u7EA6\u5185\u5B58\u3002</p><p>\u7F3A\u70B9\uFF1Aproxy\u517C\u5BB9\u6027\u95EE\u9898\u3002</p><p><strong>\u5355\u4F8B\u6A21\u5F0F\u7684\u7F3A\u70B9\uFF1A\u5FEB\u7167 \u3001\u57FA\u4E8Eproxy\u53EA\u80FD\u5355\u4F8B\u7684\u60C5\u51B5\u4E0B\u4F7F\u7528\uFF0C\u540C\u65F6\u52A0\u8F7D\u4E24\u4E2A\u5E94\u7528\u5C31\u4F1A\u6DF7\u4E71\uFF0C\u6709\u98CE\u9669</strong></p><h2 id="\u4E8C\u3001\u591A\u4F8B\u6A21\u5F0F" tabindex="-1">\u4E8C\u3001\u591A\u4F8B\u6A21\u5F0F <a class="header-anchor" href="#\u4E8C\u3001\u591A\u4F8B\u6A21\u5F0F" aria-hidden="true">#</a></h2><h3 id="_1-proxysandbox" tabindex="-1">1.ProxySandbox <a class="header-anchor" href="#_1-proxysandbox" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class ProxySandbox {</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    	// \u5F53\u524D\u6C99\u7BB1\u662F\u5426\u5904\u4E8E\u6FC0\u6D3B\u72B6\u6001</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.running = false</span></span>
<span class="line"><span style="color:#A6ACCD;">        // \u521B\u5EFA\u4E00\u4E2A\u5BF9\u8C61\u4F5C\u4E3Awindow\u7684\u4EE3\u7406\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#A6ACCD;">        const fakeWindow = Object.create(null)</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.proxy = new Proxy(fakeWindow,{</span></span>
<span class="line"><span style="color:#A6ACCD;">            get:(target,key)=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">            	// \u4ECE\u4EE3\u7406\u5BF9\u8C61\u53D6\u503C\u7684\u65F6\u5019\uFF0C\u5148\u5224\u65AD\u8FD9\u4E2Akey\u6709\u6CA1\u6709\u5728fakeWindow\u4E0A\uFF0C\u6CA1\u6709\u7684\u8BDD\u53BBwindow\u4E0A\u9762\u53D6</span></span>
<span class="line"><span style="color:#A6ACCD;">                return key in target ? target[key]:window[key]</span></span>
<span class="line"><span style="color:#A6ACCD;">            },</span></span>
<span class="line"><span style="color:#A6ACCD;">            set:(target,key,value)=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">                if(this.running) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    // \u7ED9\u6C99\u7BB1\u7684fakeWindow\u8BBE\u7F6E\u503C\u7684\u65F6\u5019\u5FC5\u987B\u5728\u6C99\u7BB1\u5904\u4E8E\u6FC0\u6D3B\u72B6\u6001\u7684\u65F6\u5019\uFF0C\u8FD9\u79CD\u6A21\u5F0F\u4FEE\u6539\u4E0D\u518D\u64CD\u4F5Cwindow\u5C5E\u6027</span></span>
<span class="line"><span style="color:#A6ACCD;">                    target[key] = value;</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">                return true;</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    active(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        if(!this.running) this.running = true</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    inactive(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.running = false;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">let sandbox1 = new ProxySandbox();</span></span>
<span class="line"><span style="color:#A6ACCD;">let sandbox2 = new ProxySandbox();</span></span>
<span class="line"><span style="color:#A6ACCD;">sandbox1.active();</span></span>
<span class="line"><span style="color:#A6ACCD;">sandbox2.active();</span></span>
<span class="line"><span style="color:#A6ACCD;">sandbox1.proxy.a = 100;</span></span>
<span class="line"><span style="color:#A6ACCD;">sandbox2.proxy.a = 100; // \u4E0D\u4F1A\u5F71\u54CDwindow</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(sandbox1.proxy.a)</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(sandbox2.proxy.a)</span></span>
<span class="line"><span style="color:#A6ACCD;">sandbox1.inactive();</span></span>
<span class="line"><span style="color:#A6ACCD;">sandbox2.inactive();</span></span>
<span class="line"><span style="color:#A6ACCD;">sandbox1.proxy.a = 200;</span></span>
<span class="line"><span style="color:#A6ACCD;">sandbox2.proxy.a = 200;</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(sandbox1.proxy.a,window.a)</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(sandbox2.proxy.a)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div>`,14),r=[e];function o(c,i,b,t,A,C){return a(),n("div",null,r)}const u=s(l,[["render",o]]);export{d as __pageData,u as default};
