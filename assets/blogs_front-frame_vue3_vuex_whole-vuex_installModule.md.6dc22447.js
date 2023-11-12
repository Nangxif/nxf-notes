import{_ as e,r as t,c,a as s,b as l,g as p,h as n,o as r}from"./app.3ee162e0.js";const V=JSON.parse('{"title":"\u9012\u5F52\u5B89\u88C5\u6A21\u5757\u4EE5\u53CA\u683C\u5F0F\u5316vuex","description":"","frontmatter":{},"headers":[{"level":2,"title":"1.\u9012\u5F52\u5B89\u88C5\u6A21\u5757\u524D\u51C6\u5907\u5DE5\u4F5C","slug":"_1-\u9012\u5F52\u5B89\u88C5\u6A21\u5757\u524D\u51C6\u5907\u5DE5\u4F5C","link":"#_1-\u9012\u5F52\u5B89\u88C5\u6A21\u5757\u524D\u51C6\u5907\u5DE5\u4F5C","children":[]},{"level":2,"title":"2.\u9012\u5F52\u5B89\u88C5\u6A21\u5757","slug":"_2-\u9012\u5F52\u5B89\u88C5\u6A21\u5757","link":"#_2-\u9012\u5F52\u5B89\u88C5\u6A21\u5757","children":[]}],"relativePath":"blogs/front-frame/vue3/vuex/whole-vuex/installModule.md","lastUpdated":1699785161000}'),o={name:"blogs/front-frame/vue3/vuex/whole-vuex/installModule.md"},i=s("h1",{id:"\u9012\u5F52\u5B89\u88C5\u6A21\u5757\u4EE5\u53CA\u683C\u5F0F\u5316vuex",tabindex:"-1"},[p("\u9012\u5F52\u5B89\u88C5\u6A21\u5757\u4EE5\u53CA\u683C\u5F0F\u5316vuex "),s("a",{class:"header-anchor",href:"#\u9012\u5F52\u5B89\u88C5\u6A21\u5757\u4EE5\u53CA\u683C\u5F0F\u5316vuex","aria-hidden":"true"},"#")],-1),b=s("p",null,[p("\u9012\u5F52\u5B89\u88C5\u6A21\u5757\u5E76\u4E14\u683C\u5F0F\u5316vuex\u7684state\uFF0Cmutations\uFF0Cactions\uFF0Cgetters\uFF0C\u8FD9\u5757\u903B\u8F91\u6211\u4EEC\u90FD\u653E\u5728"),s("code",null,"installModule"),p("\u51FD\u6570\u91CC\u9762\u3002")],-1),A=s("p",null,"\u4E0A\u4E00\u7AE0\u8282\u3010ModuleCollection\u7684\u5B9E\u73B0\u3011\u6700\u540E\u6211\u4EEC\u629B\u51FA\u4E86\u4E00\u4E2A\u95EE\u9898\uFF0C\u4E3A\u4EC0\u4E48\u4F1A\u6709\u8DEF\u5F84\u8FD9\u4E2A\u4E1C\u897F\uFF1F",-1),C=s("p",null,"vuex\u6709\u6A21\u5757\u7684\u6982\u5FF5\uFF0C\u4F46\u662F\u8FD9\u4E2A\u6A21\u5757\u7684\u6982\u5FF5\u5BF9\u4E8Estate\u4EE5\u53CA\u5269\u4F59\u7684getters\uFF0Cmutations\u4EE5\u53CAactions\u6765\u8BF4\uFF0C\u5904\u7406\u65B9\u5F0F\u8FD8\u6709\u70B9\u4E0D\u4E00\u6837\uFF0C\u6211\u5148\u603B\u7ED3\u6210\u4E00\u53E5\u8BDD\uFF0Cstate\u7684\u6A21\u5757\u5316\u4E0Enamespaced\u5C5E\u6027\u65E0\u5173\uFF0Cgetters\uFF0Cmutations\u4EE5\u53CAactions\u7684\u6A21\u5757\u5316\u4E0Enamespaced\u5C5E\u6027\u6709\u5173\u3002",-1),u=n(`<p>state\u7684\u6A21\u5757\u5316\u4E0Enamespaced\u5C5E\u6027\u65E0\u5173</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">new Vuex.Store({</span></span>
<span class="line"><span style="color:#A6ACCD;">	state: {</span></span>
<span class="line"><span style="color:#A6ACCD;">		age: 26</span></span>
<span class="line"><span style="color:#A6ACCD;">	},</span></span>
<span class="line"><span style="color:#A6ACCD;">	modules: {</span></span>
<span class="line"><span style="color:#A6ACCD;">		a: {</span></span>
<span class="line"><span style="color:#A6ACCD;">			state: {</span></span>
<span class="line"><span style="color:#A6ACCD;">				c: 100</span></span>
<span class="line"><span style="color:#A6ACCD;">			}</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;">		b: {</span></span>
<span class="line"><span style="color:#A6ACCD;">			state: {</span></span>
<span class="line"><span style="color:#A6ACCD;">				d: 100</span></span>
<span class="line"><span style="color:#A6ACCD;">			}</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;">		e: {</span></span>
<span class="line"><span style="color:#A6ACCD;">			state: {}</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>\u8FD9\u79CD\u7ED3\u6784\u6700\u540E\u751F\u6210\u7684Store\u5B9E\u4F8B\u7684state\u5C5E\u6027\u7ED3\u6784\u5982\u4E0B</p>`,3),m=s("p",null,"\u6211\u4EEC\u53EF\u4EE5\u770B\u51FA\u7ED3\u6784\u8DDF\u4EE3\u7801\u7684\u7ED3\u6784\u51E0\u4E4E\u4E00\u81F4\u3002",-1),y=s("li",null,[s("p",null,"getters\uFF0Cmutations\u4EE5\u53CAactions\u7684\u6A21\u5757\u5316\u4E0Enamespaced\u5C5E\u6027\u6709\u5173")],-1),d=n(`<p>\u4E0E\u4E0A\u9762\u540C\u6837\u7684\u7ED3\u6784\uFF0C\u6211\u4EEC\u7ED9\u6BCF\u4E2A\u6A21\u5757\u7684mutations\u6DFB\u52A0changeAge\uFF0C\u770B\u770B\u6700\u7EC8\u7684\u7ED3\u6784\u4F1A\u662F\u4EC0\u4E48\u6837\u7684</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">new Vuex.Store({</span></span>
<span class="line"><span style="color:#A6ACCD;">	state: {</span></span>
<span class="line"><span style="color:#A6ACCD;">		age: 26</span></span>
<span class="line"><span style="color:#A6ACCD;">	},</span></span>
<span class="line"><span style="color:#A6ACCD;">	mutations: {</span></span>
<span class="line"><span style="color:#A6ACCD;">		changeAge(state, payload) {</span></span>
<span class="line"><span style="color:#A6ACCD;">         state.age += payload;</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;">	},</span></span>
<span class="line"><span style="color:#A6ACCD;">	modules: {</span></span>
<span class="line"><span style="color:#A6ACCD;">		a: {</span></span>
<span class="line"><span style="color:#A6ACCD;">			state: {</span></span>
<span class="line"><span style="color:#A6ACCD;">				c: 100</span></span>
<span class="line"><span style="color:#A6ACCD;">			},</span></span>
<span class="line"><span style="color:#A6ACCD;">			mutations: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        	    changeAge(state, payload) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          	        console.log(&#39;c\u66F4\u65B0&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        	    },</span></span>
<span class="line"><span style="color:#A6ACCD;">      	},</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;">		b: {</span></span>
<span class="line"><span style="color:#A6ACCD;">			state: {</span></span>
<span class="line"><span style="color:#A6ACCD;">				d: 100</span></span>
<span class="line"><span style="color:#A6ACCD;">			},</span></span>
<span class="line"><span style="color:#A6ACCD;">			mutations: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        	    changeAge(state, payload) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          	    console.log(&#39;d\u66F4\u65B0&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        	    },</span></span>
<span class="line"><span style="color:#A6ACCD;">      	},</span></span>
<span class="line"><span style="color:#A6ACCD;">      	modules: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      		c: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      			state: {},</span></span>
<span class="line"><span style="color:#A6ACCD;">                 mutations: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                     changeAge(state, payload) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                         console.log(&#39;d\u66F4\u65B0&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">                     }</span></span>
<span class="line"><span style="color:#A6ACCD;">                 }</span></span>
<span class="line"><span style="color:#A6ACCD;">      		}</span></span>
<span class="line"><span style="color:#A6ACCD;">      	}</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;">		e: {</span></span>
<span class="line"><span style="color:#A6ACCD;">			state: {}</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div>`,2),D=n(`<p>\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\u6BCF\u4E2A\u6A21\u5757\u4E0B\u7684changeAge\u65B9\u6CD5\uFF0C\u90FD\u88AB\u6302\u9760\u5728\u6839\u6A21\u5757\u4E0B\u7684changeAge\u6570\u7EC4\u4E2D\uFF0C\u6BCF\u6B21commit\u8C03\u7528changeAge\u7684\u65F6\u5019\uFF0C\u4F1A\u5FAA\u73AF\u6267\u884C\u6839\u6A21\u5757\u4E0BchangeAge\u6570\u7EC4\u5B58\u653E\u7684\u6240\u6709\u65B9\u6CD5\u3002</p><p>\u5176\u5B9E\uFF0C\u6211\u4EEC\u4E0A\u9762\u770B\u5230\u867D\u7136\u662F\u6A21\u5757\u7684\u5199\u6CD5\uFF0C\u4F46\u662Fvuex\u771F\u6B63\u7684\u5C06\u4E00\u4E2A\u6A21\u5757\u8BC6\u522B\u4E3A\u6A21\u5757\uFF0C\u53D6\u7684\u662F\u6A21\u5757\u4E0A\u7684namespaced\u5C5E\u6027\uFF0C\u8FD9\u4E2A\u5C5E\u6027\u8BBE\u7F6E\u4E3Atrue\uFF0Cvuex\u624D\u8BC6\u522B\u4E3A\u771F\u6B63\u7684\u6A21\u5757\u3002\u6240\u4EE5</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">new Vuex.Store({</span></span>
<span class="line"><span style="color:#A6ACCD;">   	state: {</span></span>
<span class="line"><span style="color:#A6ACCD;">   		age: 26</span></span>
<span class="line"><span style="color:#A6ACCD;">   	},</span></span>
<span class="line"><span style="color:#A6ACCD;">   	mutations: {</span></span>
<span class="line"><span style="color:#A6ACCD;">   		changeAge(state, payload) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            state.age += payload;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">   	},</span></span>
<span class="line"><span style="color:#A6ACCD;">   	modules: {</span></span>
<span class="line"><span style="color:#A6ACCD;">   		a: {</span></span>
<span class="line"><span style="color:#A6ACCD;">   			namespaced: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">   			state: {</span></span>
<span class="line"><span style="color:#A6ACCD;">   				c: 100</span></span>
<span class="line"><span style="color:#A6ACCD;">   			},</span></span>
<span class="line"><span style="color:#A6ACCD;">   			mutations: {</span></span>
<span class="line"><span style="color:#A6ACCD;">           	    changeAge(state, payload) {</span></span>
<span class="line"><span style="color:#A6ACCD;">             	        console.log(&#39;c\u66F4\u65B0&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">           	    },</span></span>
<span class="line"><span style="color:#A6ACCD;">         	},</span></span>
<span class="line"><span style="color:#A6ACCD;">   		}</span></span>
<span class="line"><span style="color:#A6ACCD;">   		b: {</span></span>
<span class="line"><span style="color:#A6ACCD;">   			state: {</span></span>
<span class="line"><span style="color:#A6ACCD;">   				d: 100</span></span>
<span class="line"><span style="color:#A6ACCD;">   			},</span></span>
<span class="line"><span style="color:#A6ACCD;">   			mutations: {</span></span>
<span class="line"><span style="color:#A6ACCD;">           	    changeAge(state, payload) {</span></span>
<span class="line"><span style="color:#A6ACCD;">             	    console.log(&#39;d\u66F4\u65B0&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">           	    },</span></span>
<span class="line"><span style="color:#A6ACCD;">         	},</span></span>
<span class="line"><span style="color:#A6ACCD;">         	modules: {</span></span>
<span class="line"><span style="color:#A6ACCD;">         		c: {</span></span>
<span class="line"><span style="color:#A6ACCD;">   					namespaced: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">         			state: {},</span></span>
<span class="line"><span style="color:#A6ACCD;">                    mutations: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                        changeAge(state, payload) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                            console.log(&#39;d\u66F4\u65B0&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">                        }</span></span>
<span class="line"><span style="color:#A6ACCD;">                    }</span></span>
<span class="line"><span style="color:#A6ACCD;">         		}</span></span>
<span class="line"><span style="color:#A6ACCD;">         	}</span></span>
<span class="line"><span style="color:#A6ACCD;">   		}</span></span>
<span class="line"><span style="color:#A6ACCD;">   		e: {</span></span>
<span class="line"><span style="color:#A6ACCD;">   			state: {}</span></span>
<span class="line"><span style="color:#A6ACCD;">   		}</span></span>
<span class="line"><span style="color:#A6ACCD;">   	}</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br></div></div>`,3),g=n(`<p>\u6211\u4EEC\u53EF\u4EE5\u770B\u51FAa\u4E0B\u7684changeAge\u5B58\u653E\u5728a/changeAge\u6570\u7EC4\u4E2D\uFF0Cb\u4E0B\u7684changeAge\u7531\u4E8Eb\u6CA1\u6709\u8BBE\u7F6Enamespaced\u5C5E\u6027\uFF0C\u56E0\u6B64\u4E0D\u8BA4\u4E3A\u662F\u4E00\u4E2A\u6A21\u5757\uFF0C\u56E0\u6B64changeAge\u5B58\u653E\u5728changeAge\u6570\u7EC4\u4E2D\uFF0Cc\u6709\u8BBE\u7F6Enamespaced\u5C5E\u6027\uFF0C\u4F46\u662F\u7531\u4E8Eb\u6CA1\u6709\uFF0C\u6240\u4EE5changeAge\u5B58\u653E\u5728c/changeAge\u6570\u7EC4\u4E2D\u3002</p><p>\u56E0\u6B64\u6211\u4EEC\u53EF\u4EE5\u5F97\u51FA\u7ED3\u8BBA</p><p>\u6BCF\u4E2A\u6A21\u5757\u4E0B\u7684getters\uFF0Cmutations\uFF0Cactions\uFF0C\u4F1A\u8DDF\u539F\u578B\u94FE\u4E00\u6837\u5F80\u4E0A\u67E5\u627Enamespaced\u5C5E\u6027\uFF0C\u4E00\u65E6\u627E\u5230\u5C31\u7528\u201C/\u201D\u7B26\u53F7\u62FC\u63A5\u6A21\u5757\u540D\u79F0\uFF0C\u76F4\u81F3\u627E\u5230\u6839\u6A21\u5757\u3002</p><h2 id="_1-\u9012\u5F52\u5B89\u88C5\u6A21\u5757\u524D\u51C6\u5907\u5DE5\u4F5C" tabindex="-1">1.\u9012\u5F52\u5B89\u88C5\u6A21\u5757\u524D\u51C6\u5907\u5DE5\u4F5C <a class="header-anchor" href="#_1-\u9012\u5F52\u5B89\u88C5\u6A21\u5757\u524D\u51C6\u5907\u5DE5\u4F5C" aria-hidden="true">#</a></h2><p>\u2460\u751F\u6210\u4E00\u68F5\u6811</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">this._modules = new ModuleCollection(options);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u2461\u5B9A\u4E49\u6A21\u5757\u7684state\uFF0Cgetters\uFF0Cmutations\uFF0Cactions\u5B58\u653E\u7684\u5BB9\u5668</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">let state = this._modules.root.state;</span></span>
<span class="line"><span style="color:#A6ACCD;">this._mutations = {}; // \u5B58\u653E\u6240\u6709\u6A21\u5757\u4E2D\u7684mutations\uFF0C\u5148\u4E0D\u8003\u8651\u547D\u540D\u7A7A\u95F4</span></span>
<span class="line"><span style="color:#A6ACCD;">this._actions = {}; // \u5B58\u653E\u6240\u6709\u6A21\u5757\u4E2D\u7684actions</span></span>
<span class="line"><span style="color:#A6ACCD;">this._wrappedGetters = {}; // \u5B58\u653E\u6240\u6709\u6A21\u5757\u4E2D\u7684getters</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u2462\u5F00\u59CB\u9012\u5F52\u5B89\u88C5\u6A21\u5757</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// this \u5F53\u524D\u7684Store\u5B9E\u4F8B</span></span>
<span class="line"><span style="color:#A6ACCD;">// state \u6839\u6A21\u5757\u7684state</span></span>
<span class="line"><span style="color:#A6ACCD;">// [] \u8DEF\u5F84</span></span>
<span class="line"><span style="color:#A6ACCD;">// this._modules.root \u4E4B\u524D\u751F\u6210\u7684\u6811\u7684\u6839\u8282\u70B9</span></span>
<span class="line"><span style="color:#A6ACCD;">installModule(this, state, [], this._modules.root);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="_2-\u9012\u5F52\u5B89\u88C5\u6A21\u5757" tabindex="-1">2.\u9012\u5F52\u5B89\u88C5\u6A21\u5757 <a class="header-anchor" href="#_2-\u9012\u5F52\u5B89\u88C5\u6A21\u5757" aria-hidden="true">#</a></h2><p>\u2460\u83B7\u53D6\u5F53\u524D\u8DEF\u5F84</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">let namespace = store._modules.getNamespace(path);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u2461\u5B89\u88C5mutations</p><p>\u5C06\u6240\u6709\u7684mutations\u6536\u96C6\u5230_mutations</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">module.forEachMutation((mutation, type) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // changeAge:[fn,fn,fn] \u53D1\u5E03\u8BA2\u9605</span></span>
<span class="line"><span style="color:#A6ACCD;">    store._mutations[namespace + type] =</span></span>
<span class="line"><span style="color:#A6ACCD;">      store._mutations[namespace + type] || [];</span></span>
<span class="line"><span style="color:#A6ACCD;">    store._mutations[namespace + type].push((payload) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u5185\u90E8\u53EF\u80FD\u4F1A\u66FF\u6362\u72B6\u6001\uFF0C\u8FD9\u91CC\u5982\u679C\u4E00\u76F4\u4F7F\u7528module.state\uFF0C\u53EF\u80FD\u662F\u8001\u7684\u72B6\u6001</span></span>
<span class="line"><span style="color:#A6ACCD;">      // mutation.call(store, module.state, payload);</span></span>
<span class="line"><span style="color:#A6ACCD;">      mutation.call(store, getState(store, path), payload);</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u8FD9\u4E0A\u9762\u6709\u6BB5\u6CE8\u91CA\uFF0C\u6211\u4EEC\u6765\u8BB2\u89E3\u4E00\u4E0B\u3002\u8C03\u7528mutation\u5B9E\u9645\u662F\u901A\u8FC7\u8C03\u7528</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">	mutation.call(store, module.state, payload);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u4F46\u662F\u8FD9\u6837\u4F1A\u6709\u4E00\u4E2A\u95EE\u9898\uFF0C\u8FD9\u4E2A\u51FD\u6570\u662F\u4E00\u4E2A\u95ED\u5305\uFF0C\u4F1A\u4FDD\u5B58\u4E4B\u524D\u65E7\u7684\u6570\u636E\uFF0C\u5BFC\u81F4mutation\u62FF\u5230\u7684state\u6709\u53EF\u80FD\u4E0D\u662F\u6700\u65B0\u7684\uFF0C\u56E0\u6B64\u6211\u4EEC\u53EF\u4EE5\u6539\u6210\u7528getState\u8FD9\u4E2A\u65B9\u6CD5\u53BB\u53D6\u6700\u65B0\u7684\u503C</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function getState(store, path) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return path.reduce((newState, current) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return newState[current];</span></span>
<span class="line"><span style="color:#A6ACCD;">  }, store.state);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u2462\u5B89\u88C5actions</p><p>\u5C06\u6240\u6709\u7684actions\u6536\u96C6\u5230_actions</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">module.forEachAction((action, type) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    store._actions[namespace + type] = store._actions[namespace + type] || [];</span></span>
<span class="line"><span style="color:#A6ACCD;">    store._actions[namespace + type].push((payload) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      action.call(store, store, payload);</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u2463\u5B89\u88C5getters</p><p>\u5C06\u6240\u6709\u7684getters\u6536\u96C6\u5230_wrappedGetters</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">module.forEachGetters((getter, key) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // getters\u91CD\u540D\u4F1A\u8986\u76D6</span></span>
<span class="line"><span style="color:#A6ACCD;">    store._wrappedGetters[namespace + key] = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // return getter(module.state);</span></span>
<span class="line"><span style="color:#A6ACCD;">      return getter(getState(store, path));</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u2464\u904D\u5386\u6A21\u5757\u7684\u5B50\u6A21\u5757\uFF0C\u7136\u540E\u9012\u5F52\u8C03\u7528installModule</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">module.forEachChild((child, key) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    installModule(store, rootState, path.concat(key), child);</span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u2465\u5C06\u5B50\u6A21\u5757\u7684state\u6302\u5230\u7236\u7EA7\u6A21\u5757\u4E0A</p><p>\u9012\u5F52\u7684\u65F6\u5019\u53D1\u73B0path\u8DEF\u5F84\u7684\u957F\u5EA6\u4E0D\u4E3A0\uFF0C\u56E0\u6B64\u662F\u5B50\u6A21\u5757</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">if (path.length &gt; 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u8BF4\u660E\u662F\u5B50\u6A21\u5757\u7684\u5FAA\u73AF\uFF0C\u9700\u8981\u5C06\u5B50\u6A21\u5757\u7684\u72B6\u6001\u5B9A\u4E49\u5230\u6839\u6A21\u5757\u4E0A</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u53C8\u8981\u5F00\u59CB\u627E\u7238\u7238</span></span>
<span class="line"><span style="color:#A6ACCD;">    let parent = path.slice(0, -1).reduce((memo, current) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      return memo[current];</span></span>
<span class="line"><span style="color:#A6ACCD;">    }, rootState);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u8FD9\u4E2Aapi\u53EF\u4EE5\u65B0\u589E\u5C5E\u6027\uFF0C\u5982\u679C\u672C\u8EAB\u5BF9\u8C61\u4E0D\u662F\u54CD\u5E94\u5F0F\uFF0C\u5219\u4F1A\u76F4\u63A5\u590D\u5236</span></span>
<span class="line"><span style="color:#A6ACCD;">    // Vue.set\u4F1A\u533A\u5206\u662F\u5426\u662F\u54CD\u5E94\u5F0F\u6570\u636E</span></span>
<span class="line"><span style="color:#A6ACCD;">    Vue.set(parent, path[path.length - 1], module.state);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u4F46\u662F\u5230\u76EE\u524D\u4E3A\u6B62\uFF0C\u6211\u4EEC\u7684state\u548Cgetters\u8FD8\u6CA1\u5B9E\u73B0\u54CD\u5E94\u5F0F\uFF0C\u4E5F\u5C31\u662F\u8BF4state\u66F4\u65B0\u4E86\u4E0D\u4F1A\u89E6\u53D1\u89C6\u56FE\u66F4\u65B0\u3002\u8FD9\u4E2A\u8981\u600E\u4E48\u5904\u7406\u5462\uFF1F\u4E0B\u4E2A\u7AE0\u8282\u3010vuex\u589E\u52A0\u54CD\u5E94\u5F0F\u6548\u679C\u3011\u4F1A\u8FDB\u884C\u8BB2\u89E3\u3002</p>`,32);function _(h,v,f,x,w,S){const a=t("Image");return r(),c("div",null,[i,b,A,C,s("ol",null,[s("li",null,[u,l(a,{src:"/front-frame/vue3/vuex/whole-vuex/installModule/1.png"},null,8,["src"]),m]),y]),d,l(a,{src:"/front-frame/vue3/vuex/whole-vuex/installModule/2.png"},null,8,["src"]),D,l(a,{src:"/front-frame/vue3/vuex/whole-vuex/installModule/3.png"},null,8,["src"]),g])}const M=e(o,[["render",_]]);export{V as __pageData,M as default};
