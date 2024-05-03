import{_ as s,c as n,o as a,h as l}from"./app.79f4ed46.js";const y=JSON.parse('{"title":"\u5B9E\u73B0Map","description":"","frontmatter":{},"headers":[],"relativePath":"blogs/js-ts/js/js-api/map.md","lastUpdated":1714747046000}'),p={name:"blogs/js-ts/js/js-api/map.md"},e=l(`<h1 id="\u5B9E\u73B0map" tabindex="-1">\u5B9E\u73B0Map <a class="header-anchor" href="#\u5B9E\u73B0map" aria-hidden="true">#</a></h1><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">function MyHashMap () {</span></span>
<span class="line"><span style="color:#A6ACCD;">	this.initStore();</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">MyHashMap.prototype.initStore = function () {</span></span>
<span class="line"><span style="color:#A6ACCD;">	this.storeList = new Array(8);</span></span>
<span class="line"><span style="color:#A6ACCD;">	for(let i = 0;i &lt; this.storeList.length;i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">		// \u7A7A\u7684\u94FE\u8868\u5934</span></span>
<span class="line"><span style="color:#A6ACCD;">		this.storeList[i] = {};</span></span>
<span class="line"><span style="color:#A6ACCD;">		this.storeList[i].next = null;</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">MyHashMap.prototype.hash = function (k) {</span></span>
<span class="line"><span style="color:#A6ACCD;">	return k % this.storeList.length;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">MyHashMap.prototype.set = function (key, val) {</span></span>
<span class="line"><span style="color:#A6ACCD;">	// \u83B7\u53D6\u623F\u95F4\u7D22\u5F15hash\u7B97\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;">	let index = this.hash(key);</span></span>
<span class="line"><span style="color:#A6ACCD;">	// \u83B7\u53D6\u623F\u95F4\uFF1A\u94FE\u8868\u5934</span></span>
<span class="line"><span style="color:#A6ACCD;">	let queue = this.storeList[index];</span></span>
<span class="line"><span style="color:#A6ACCD;">	// \u627E\u8868\u5934\u4E0B\u9762\u7684\u5BF9\u8C61 \u8986\u76D6 \u5426\u5219\u8FD4\u56DEundefined</span></span>
<span class="line"><span style="color:#A6ACCD;">	// \u6709\u4E24\u79CD\u60C5\u51B5\uFF1A\u7A7A\u8868\u5934\u540E\u6709\u6570\u636E\uFF0C\u4E4B\u524Dset\u8FC7</span></span>
<span class="line"><span style="color:#A6ACCD;">	// \u7A7A\u8868\u5934\u540E\u6709\u6570\u636E \u65E0\u6570\u636E \u76F4\u63A5\u8FDE\u5230\u7A7A\u8868\u5934</span></span>
<span class="line"><span style="color:#A6ACCD;">	while(queue.next) {</span></span>
<span class="line"><span style="color:#A6ACCD;">		// \u7A7A\u8868\u5934\u540E\u6709\u6570\u636E\uFF0C\u4E4B\u524Dset\u8FC7</span></span>
<span class="line"><span style="color:#A6ACCD;">		if(queue.next.key === key) {</span></span>
<span class="line"><span style="color:#A6ACCD;">			// \u8986\u76D6</span></span>
<span class="line"><span style="color:#A6ACCD;">			queue.next.value = val;</span></span>
<span class="line"><span style="color:#A6ACCD;">			return true;</span></span>
<span class="line"><span style="color:#A6ACCD;">		} else {</span></span>
<span class="line"><span style="color:#A6ACCD;">			// \u4E0B\u79FB\u6307\u9488\uFF0C\u6307\u5411\u4E0B\u4E00\u4E2A</span></span>
<span class="line"><span style="color:#A6ACCD;">			queue = queue.next;</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">	// \u5047\u5982\u662F\u7B2C\u4E00\u4E2A</span></span>
<span class="line"><span style="color:#A6ACCD;">	queue.next = {</span></span>
<span class="line"><span style="color:#A6ACCD;">		key: key,</span></span>
<span class="line"><span style="color:#A6ACCD;">		value: val,</span></span>
<span class="line"><span style="color:#A6ACCD;">		next: null</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">MyHashMap.prototype.get = function (key) {</span></span>
<span class="line"><span style="color:#A6ACCD;">	// \u83B7\u53D6\u623F\u95F4\u7D22\u5F15hash\u7B97\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;">	let index = this.hash(key);</span></span>
<span class="line"><span style="color:#A6ACCD;">	// \u83B7\u53D6\u623F\u95F4\uFF1A\u94FE\u8868\u5934</span></span>
<span class="line"><span style="color:#A6ACCD;">	let queue = this.storeList[index];</span></span>
<span class="line"><span style="color:#A6ACCD;">	// \u4E0B\u79FB\u5230\u975E\u7A7A\u8868\u5934</span></span>
<span class="line"><span style="color:#A6ACCD;">	queue = queue.next;</span></span>
<span class="line"><span style="color:#A6ACCD;">	while(queue) {</span></span>
<span class="line"><span style="color:#A6ACCD;">		if(queue.key === key) {</span></span>
<span class="line"><span style="color:#A6ACCD;">			return queue.value;</span></span>
<span class="line"><span style="color:#A6ACCD;">		} else {</span></span>
<span class="line"><span style="color:#A6ACCD;">			queue = queue.next;</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">	return undefined;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br></div></div>`,2),t=[e];function r(c,i,o,b,A,C){return a(),n("div",null,t)}const m=s(p,[["render",r]]);export{y as __pageData,m as default};
