import{_ as e,c as l,b as p,a as s,g as n,h as r,o as c,e as i}from"./app.a9d4589f.js";const k=JSON.parse('{"title":"runtime-dom","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001runtime-dom\u5927\u81F4\u67B6\u6784","slug":"\u4E00\u3001runtime-dom\u5927\u81F4\u67B6\u6784","link":"#\u4E00\u3001runtime-dom\u5927\u81F4\u67B6\u6784","children":[]},{"level":2,"title":"\u4E8C\u3001\u4EE3\u7801\u89E3\u6790","slug":"\u4E8C\u3001\u4EE3\u7801\u89E3\u6790","link":"#\u4E8C\u3001\u4EE3\u7801\u89E3\u6790","children":[{"level":3,"title":"1.\u76EE\u5F55\u7ED3\u6784","slug":"_1-\u76EE\u5F55\u7ED3\u6784","link":"#_1-\u76EE\u5F55\u7ED3\u6784","children":[]},{"level":3,"title":"2.index.ts\u5165\u53E3\u6587\u4EF6","slug":"_2-index-ts\u5165\u53E3\u6587\u4EF6","link":"#_2-index-ts\u5165\u53E3\u6587\u4EF6","children":[]},{"level":3,"title":"3.nodeOps.ts\u64CD\u4F5C\u8282\u70B9\u7684api","slug":"_3-nodeops-ts\u64CD\u4F5C\u8282\u70B9\u7684api","link":"#_3-nodeops-ts\u64CD\u4F5C\u8282\u70B9\u7684api","children":[]},{"level":3,"title":"4.patchProp.ts\u521B\u5EFA\u548C\u5904\u7406\u5C5E\u6027\u7684api","slug":"_4-patchprop-ts\u521B\u5EFA\u548C\u5904\u7406\u5C5E\u6027\u7684api","link":"#_4-patchprop-ts\u521B\u5EFA\u548C\u5904\u7406\u5C5E\u6027\u7684api","children":[]},{"level":3,"title":"5.patch\u65B9\u6CD5\u6C47\u603B","slug":"_5-patch\u65B9\u6CD5\u6C47\u603B","link":"#_5-patch\u65B9\u6CD5\u6C47\u603B","children":[]}]}],"relativePath":"blogs/front-frame/vue3/runtime-dom.md","lastUpdated":1664260900000}'),o={name:"blogs/front-frame/vue3/runtime-dom.md"},t=s("h1",{id:"runtime-dom",tabindex:"-1"},[n("runtime-dom "),s("a",{class:"header-anchor",href:"#runtime-dom","aria-hidden":"true"},"#")],-1),b=s("p",null,[n("\u6211\u4EEC\u5148\u8BB2\u4E00\u4E0Bruntime-dom\u7684\u7531\u6765\u5427\u3002vue3\u6709\u4E00\u90E8\u5206\u903B\u8F91\u5C31\u662F\u521B\u5EFA\u4E00\u4E2A\u6E32\u67D3\u5668\uFF0C\u6E32\u67D3\u5668\u4E0A\u6709\u4E00\u4E2Arender\u65B9\u6CD5\uFF0Crender\u65B9\u6CD5\u4F1A\u5C06\u865A\u62DF\u8282\u70B9\u8F6C\u6362\u4E3A\u771F\u5B9E\u8282\u70B9\uFF0C\u771F\u5B9E\u8282\u70B9\u6302\u8F7D\u5230\u771F\u5B9E\u6839\u8282\u70B9\u4E0A\uFF0C\u5728\u66F4\u65B0\u7684\u65F6\u5019\u91C7\u7528diff\u7B97\u6CD5\u8FDB\u884C\u66F4\u65B0\u4EE5\u63D0\u5347\u6027\u80FD\u7B49\u3002\u90A3\u4E48\u5728render\u8FDB\u884C\u8FD9\u4E9B\u5DE5\u4F5C\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u4F1A\u4F7F\u7528\u5230\u521B\u5EFA\u8282\u70B9\uFF0C\u521B\u5EFA\u6587\u672C\u8282\u70B9\uFF0C\u63D2\u5165\u5143\u7D20\u8282\u70B9\uFF0C\u5220\u9664\u5143\u7D20\u8282\u70B9\u7B49\u64CD\u4F5C\uFF0C\u90A3\u4E48\u8FD9\u4E9B\u64CD\u4F5C\uFF0C\u5176\u5B9E\u662F\u53EF\u4EE5\u89E3\u8026\u51FA\u6765\u7684\uFF0C\u4E3A\u4EC0\u4E48\u8FD9\u4E48\u8BF4\uFF1F\u5728\u5C0F\u7A0B\u5E8F\u5E73\u53F0\uFF0C\u6D4F\u89C8\u5668\u5E73\u53F0\uFF0C\u8FD8\u6709\u5176\u4ED6\u7684\u4E00\u4E9B\u9002\u5408\u4F7F\u7528vue\u8FD9\u79CD\u6E32\u67D3\u903B\u8F91\u7684\u5E73\u53F0\uFF0C\u4ED6\u4EEC\u7684\u521B\u5EFA\u8282\u70B9\u7684\u65B9\u5F0F\uFF0C\u63D2\u5165\u5143\u7D20\u7684\u65B9\u5F0F\uFF0C\u80AF\u5B9A\u662F\u4E0D\u4E00\u6837\u7684\uFF0C\u4F8B\u5982\uFF0C\u5C0F\u7A0B\u5E8F\u80AF\u5B9A\u6CA1\u6709\u6D4F\u89C8\u5668\u7684"),s("code",null,"document.createElement()"),n("\uFF0C\u90A3\u4E48\u6211\u4EEC\u5982\u679C\u8981\u4F7F\u7528vue\u7684diff\u7B97\u6CD5\uFF0C\u9776\u5411\u66F4\u65B0\uFF0C\u865A\u62DF\u8282\u70B9\u8F6C\u6362\u4E3A\u771F\u5B9E\u8282\u70B9\u7B49\u529F\u80FD\uFF0C\u603B\u4E0D\u80FD\u4E00\u4E2A\u5E73\u53F0\u5199\u4E00\u4EFD\u4EE3\u7801\u5427\uFF0C\u5176\u5B9E\u6211\u4EEC\u53EF\u4EE5\u5B9A\u4E49\u597D\u4E00\u4E9B\u64CD\u4F5C\uFF08\u5C06\u5143\u7D20\u521B\u5EFA\uFF0C\u63D2\u5165\u8282\u70B9\u5C01\u88C5\u6210\u4E00\u4E2A\u4E2A\u7684api\uFF09\u4F5C\u4E3A\u914D\u7F6E\uFF0C\u7136\u540E\u4F20\u7ED9createRenderer\u53BB\u521B\u5EFA\u6E32\u67D3\u5668\uFF0C\u56E0\u6B64\uFF0Cruntime-dom\u5C31\u662F\u63D0\u4F9B\u8FD9\u4EFDapi\u914D\u7F6E\u7684\u4E00\u4E2A\u5305\uFF0C\u800Cruntime-core\u5C31\u662F\u63D0\u4F9B\u521B\u5EFA\u6E32\u67D3\u5668\u65B9\u6CD5\uFF08createRenderer\uFF09\u7684\u4E00\u4E2A\u5305\uFF0C\u8FD9\u4E2A\u6E32\u67D3\u5668\u7684render\u53EF\u4EE5\u4F7F\u7528runtime-dom\u63D0\u4F9B\u7684\u57FA\u4E8E\u6D4F\u89C8\u5668\u7684\u914D\u7F6E\u3002\u5F53\u7136\uFF0C\u5982\u679C\u4F60\u60F3\u5728\u5C0F\u7A0B\u5E8F\u4F7F\u7528\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u81EA\u5DF1\u5199\u4E00\u4E2A\u914D\u7F6E\u5305\uFF0C\u81EA\u5DF1\u63D0\u4F9B\u5C0F\u7A0B\u5E8F\u7684\u5143\u7D20\u521B\u5EFA\u65B9\u6CD5\uFF0C\u5143\u7D20\u63D2\u5165\u7B49\u65B9\u6CD5\u3002")],-1),C=s("h2",{id:"\u4E00\u3001runtime-dom\u5927\u81F4\u67B6\u6784",tabindex:"-1"},[n("\u4E00\u3001runtime-dom\u5927\u81F4\u67B6\u6784 "),s("a",{class:"header-anchor",href:"#\u4E00\u3001runtime-dom\u5927\u81F4\u67B6\u6784","aria-hidden":"true"},"#")],-1),A=r("",11);function u(m,y,d,D,v,h){const a=i("Image");return c(),l("div",null,[t,b,C,p(a,{src:"/front-frame/vue3/runtime-dom/1.png"},null,8,["src"]),A])}const f=e(o,[["render",u]]);export{k as __pageData,f as default};
