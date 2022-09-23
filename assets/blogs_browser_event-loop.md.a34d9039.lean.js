import{_ as e,c as p,b as n,h as a,a as l,o as r,e as c}from"./app.99a55a37.js";const L=JSON.parse('{"title":"\u4E8B\u4EF6\u5FAA\u73AF/\u5B8F\u4EFB\u52A1/\u5FAE\u4EFB\u52A1","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u4E8B\u4EF6\u5FAA\u73AF","slug":"\u4E00\u3001\u4E8B\u4EF6\u5FAA\u73AF","link":"#\u4E00\u3001\u4E8B\u4EF6\u5FAA\u73AF","children":[]},{"level":2,"title":"\u4E8C\u3001\u4E8B\u4EF6\u5FAA\u73AF\u548C\u9875\u9762\u6E32\u67D3","slug":"\u4E8C\u3001\u4E8B\u4EF6\u5FAA\u73AF\u548C\u9875\u9762\u6E32\u67D3","link":"#\u4E8C\u3001\u4E8B\u4EF6\u5FAA\u73AF\u548C\u9875\u9762\u6E32\u67D3","children":[]},{"level":2,"title":"\u4E09\u3001\u5B8F\u4EFB\u52A1\u548C\u5FAE\u4EFB\u52A1","slug":"\u4E09\u3001\u5B8F\u4EFB\u52A1\u548C\u5FAE\u4EFB\u52A1","link":"#\u4E09\u3001\u5B8F\u4EFB\u52A1\u548C\u5FAE\u4EFB\u52A1","children":[{"level":3,"title":"1.\u4E3A\u4EC0\u4E48\u8981\u6709\u5B8F\u4EFB\u52A1\u548C\u5FAE\u4EFB\u52A1\uFF1F","slug":"_1-\u4E3A\u4EC0\u4E48\u8981\u6709\u5B8F\u4EFB\u52A1\u548C\u5FAE\u4EFB\u52A1\uFF1F","link":"#_1-\u4E3A\u4EC0\u4E48\u8981\u6709\u5B8F\u4EFB\u52A1\u548C\u5FAE\u4EFB\u52A1\uFF1F","children":[]},{"level":3,"title":"2.\u90A3\u4E48\u5B8F\u4EFB\u52A1\u548C\u5FAE\u4EFB\u52A1\u5904\u4E8E\u4E8B\u4EF6\u5FAA\u73AF\u4E2D\u7684\u54EA\u4E2A\u73AF\u8282\uFF1F","slug":"_2-\u90A3\u4E48\u5B8F\u4EFB\u52A1\u548C\u5FAE\u4EFB\u52A1\u5904\u4E8E\u4E8B\u4EF6\u5FAA\u73AF\u4E2D\u7684\u54EA\u4E2A\u73AF\u8282\uFF1F","link":"#_2-\u90A3\u4E48\u5B8F\u4EFB\u52A1\u548C\u5FAE\u4EFB\u52A1\u5904\u4E8E\u4E8B\u4EF6\u5FAA\u73AF\u4E2D\u7684\u54EA\u4E2A\u73AF\u8282\uFF1F","children":[]},{"level":3,"title":"3.\u54EA\u4E9B\u662F\u5B8F\u4EFB\u52A1\u54EA\u4E9B\u662F\u5FAE\u4EFB\u52A1","slug":"_3-\u54EA\u4E9B\u662F\u5B8F\u4EFB\u52A1\u54EA\u4E9B\u662F\u5FAE\u4EFB\u52A1","link":"#_3-\u54EA\u4E9B\u662F\u5B8F\u4EFB\u52A1\u54EA\u4E9B\u662F\u5FAE\u4EFB\u52A1","children":[]},{"level":3,"title":"4.\u5B8F\u4EFB\u52A1\u548C\u5FAE\u4EFB\u52A1\u7684\u6267\u884C\u987A\u5E8F","slug":"_4-\u5B8F\u4EFB\u52A1\u548C\u5FAE\u4EFB\u52A1\u7684\u6267\u884C\u987A\u5E8F","link":"#_4-\u5B8F\u4EFB\u52A1\u548C\u5FAE\u4EFB\u52A1\u7684\u6267\u884C\u987A\u5E8F","children":[]},{"level":3,"title":"5.\u5B8C\u6574\u7684EventLoop","slug":"_5-\u5B8C\u6574\u7684eventloop","link":"#_5-\u5B8C\u6574\u7684eventloop","children":[]}]}],"relativePath":"blogs/browser/event-loop.md","lastUpdated":1663944803000}'),o={name:"blogs/browser/event-loop.md"},i=a("",5),t=a("",3),b=a("",7),u=a("",20),A=l("p",null,"webapi\u662F\u6D4F\u89C8\u5668\u63D0\u4F9B\u7ED9\u6211\u4EEC\u7684\u4E00\u4E9Bapi\uFF0C\u8FD8\u6709\u4E00\u4E2A\u795E\u79D8\u7684\u4E8B\u4EF6\u5FAA\u73AF\uFF08Event Loop\uFF09\u548C\u4E00\u4E2A\u56DE\u8C03\u4EFB\u52A1\u961F\u5217\uFF08Task Queue\uFF09 JavaScript\u662F\u4E00\u95E8\u5355\u7EBF\u7A0B\u7684\u8BED\u8A00\uFF0C\u5355\u7EBF\u7A0B\u5728\u8FD0\u884C\u65F6\uFF0C\u610F\u5473\u7740\u5B83\u53EA\u6709\u4E00\u4E2A\u8C03\u7528\u6808\uFF0C\u4E5F\u5C31\u662F\u4E0A\u56FE\u7684stack\uFF0C\u540C\u4E00\u65F6\u523B\u53EA\u80FD\u505A\u4E00\u4EF6\u4E8B\uFF0C\u6211\u4EEC\u5148\u6765\u770B\u4E00\u4E2A\u7B80\u5355\u7684\u6848\u4F8B\uFF0C\u53EF\u4EE5\u7528\u53EF\u89C6\u5316\u7684\u65B9\u5F0F\u7406\u89E3\u4E00\u4E0B\u8FD9\u90E8\u5206\u7684\u77E5\u8BC6",-1),C=a("",3),m=a("",3),d=a("",3),y=l("p",null,"\u6211\u4EEC\u770B\u5230\u6E32\u67D3\u53EF\u80FD\u5728\u4EFB\u52A1\u4E4B\u95F4\u6267\u884C\uFF0C\u4F46\u662F\u8FD9\u4E0D\u610F\u5473\u7740\u5FC5\u987B\u662F\u6267\u884C\u4E00\u6B21\u8C03\u7528\u6808\u4ECE\u4EFB\u52A1\u961F\u5217\u91CC\u9762\u62FF\u5230\u7684\u4EFB\u52A1\u5C31\u5FC5\u987B\u6267\u884C\u4E00\u6B21\u6E32\u67D3\u4EFB\u52A1\uFF0C\u6709\u53EF\u80FD\u4F1A\u6267\u884C\u51E0\u6B21\u8C03\u7528\u6808\u91CC\u9762\u7684\u4E1C\u897F\u518D\u6E32\u67D3\u4E00\u6B21\u9875\u9762\uFF0C\u56E0\u4E3A\u8C03\u7528\u6808\u91CC\u9762\u7684\u4EFB\u52A1\u53EF\u80FD\u4E0D\u662F\u5F88\u5927\uFF0C\u4E0D\u523016.6\u6BEB\u79D2\u5C31\u6267\u884C\u5B8C\u4E86\uFF0C\u6240\u4EE5\u6211\u4EEC\u4E0A\u9762\u8BF4\u5230\u7684display\u7684\u4F8B\u5B50\uFF0C\u90A3\u4E24\u53E5\u4EE3\u7801\u5728\u4E00\u5E27\u7684\u65F6\u95F4\u5185\u5C31\u88AB\u6267\u884C\u5B8C\u4E86\uFF0C\u6240\u4EE5\u4E0D\u5B58\u5728\u95EA\u73B0\u7684\u73B0\u8C61\u3002 \u6211\u4EEC\u4E00\u76F4\u5728\u7EA0\u7ED3setTimeout\u76840\u662F\u5426\u771F\u7684\u662F\u7ACB\u5373\u6267\u884C\u7684\uFF0C\u5176\u5B9EsetTimeout\u5C31\u7B97\u8BBE\u7F6E\u4E3A0\u8FD8\u662F\u4F1A\u6709\u5EF6\u8FDF\u3002\u5373\u4F7F\u6211\u4EEC\u5C06\u5EF6\u8FDF\u8BBE\u7F6E\u4E3A0\uFF0C\u6D4F\u89C8\u5668\u4F1A\u6839\u636E\u6807\u51C6\u89C4\u5B9A\u9009\u62E9\u4EFB\u610F\u6570\u5B57\u4F5C\u4E3A\u5EF6\u65F6\uFF0C\u4ECE\u6D4B\u8BD5\u4E0A\u770B\u5927\u6982\u662F4.7ms\u3002 \u6211\u4EEC\u5047\u8BBE\u8FD9\u662F\u663E\u793A\u7ED9\u7528\u6237\u7684\u5E27\u56FE\uFF0C\u6D4F\u89C8\u5668\u7684\u6E32\u67D3\u53D1\u751F\u5728\u6BCF\u4E2A\u5E27\u7684\u5F00\u5934\uFF0C\u5305\u62EC\u6837\u5F0F\u8BA1\u7B97\uFF0C\u5E03\u5C40\u548C\u7ED8\u5236\uFF0C\u4E0D\u4E00\u5B9A\u4E09\u4E2A\u90FD\u6709\uFF0C\u53D6\u51B3\u4E8E\u9700\u8981\u66F4\u65B0\u7684\u5185\u5BB9",-1),D=l("p",null,"\u63A5\u4E0B\u6765\u5047\u8BBE\u6709\u4E00\u4E9B\u4EFB\u52A1",-1),_=l("p",null,"\u4ED6\u4EEC\u4E0D\u5728\u4E4E\u6574\u6D01\uFF0C\u4ED6\u4EEC\u53EF\u4EE5\u51FA\u73B0\u5728\u4EFB\u4F55\u5730\u65B9\uFF0C\u4F46\u5C31\u5E27\u5185\u7684\u65F6\u95F4\u6BB5\u800C\u8A00\uFF0C\u6CA1\u6709\u4EFB\u4F55\u987A\u5E8F\uFF0C\u6211\u4EEC\u901A\u8FC7setTimeout\u89C2\u5BDF\u5230\u4E86\u8FD9\u4E00\u70B9\uFF0C\u5047\u8BBE\u6211\u4EEC\u6BCF\u5E27\u90FD\u4F1A\u6267\u884C\u4E09\u5230\u56DB\u4E2A\u4EFB\u52A1",-1),v=l("p",null,"\u8FD9\u610F\u5473\u7740\u56DB\u5206\u4E4B\u4E09\u7684\u4EFB\u52A1\u90FD\u662F\u4E0D\u5FC5\u8981\u7684\uFF0C\u56E0\u4E3A\u538B\u6839\u4E0D\u4F1A\u88AB\u6E32\u67D3",-1),g=l("p",null,"\u4E00\u4E9B\u8001\u7684\u52A8\u753B\u5E93\u4E3A\u4E86\u907F\u514D\u4E0A\u9762\u8FD9\u79CD\u60C5\u51B5\uFF0C\u4F1A\u91C7\u53D6\u4E0B\u9762\u8FD9\u79CD\u505A\u6CD5 setTimeout(animationFrame,1000/60) \u4ED6\u4EEC\u5229\u7528\u8FD9\u4E48\u4E00\u4E2A\u6BEB\u79D2\u503C\uFF0C\u6BCF\u79D2\u6267\u884C60\u6B21\uFF0C\u4ED6\u4EEC\u5047\u8BBE\u8FD9\u662F\u4E00\u4E2A60\u8D6B\u5179\u7684\u5C4F\u5E55\uFF0C\u6240\u4EE5\u8FD9\u6837\u505A\u53EF\u4EE5\u51CF\u5C11\u65E0\u7528\u7684\u4EFB\u52A1\uFF0C\u8FD9\u662F\u4E00\u4E2A\u65E0\u5948\u4E4B\u4E3E\uFF0C\u56E0\u4E3AsetTimeout\u4E0D\u662F\u4E3A\u4E86\u52A8\u753B\u5B58\u5728\u7684\uFF0C\u8FD9\u79CD\u505A\u6CD5\u7531\u4E8E\u4E0D\u7CBE\u786E\u4F1A\u9020\u6210\u6F02\u79FB\u3002\u8FD9\u91CC\u663E\u793A\u7684\u5C31\u662F\u4E00\u5E27\u6CA1\u6709\u4EFB\u52A1\u6267\u884C\uFF0C\u7136\u540E\u4E0B\u4E00\u5E27\u6267\u884C\u4E86\u4E24\u4E2A\u4EFB\u52A1",-1),h=l("p",null,"\u5BF9\u7528\u6237\u6765\u8BF4\u663E\u793A\u6548\u679C\u5E76\u4E0D\u597D\u3002\u9664\u6B64\u4E4B\u5916\u5982\u679C\u67D0\u4E2A\u4EFB\u52A1\u8FD0\u884C\u65F6\u95F4\u8FC7\u957F\uFF0C\u6D4F\u89C8\u5668\u4F1A\u63A8\u8FDF\u6E32\u67D3\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u90FD\u5728\u540C\u4E00\u4E2A\u7EBF\u7A0B\u4E0A\u8FD0\u884C\u3002",-1),T=l("p",null,"\u8FD9\u6837\u5C31\u7834\u574F\u4E86\u65E2\u5B9A\u7684\u7A0B\u5E8F\uFF0C\u5982\u679C\u6211\u4EEC\u4F7F\u7528\u7684\u662FrequestAnimationFrame\u800C\u4E0D\u662F\u7528setTimeout\uFF0C\u5B83\u4EEC\u770B\u8D77\u6765\u4F1A\u50CF\u8FD9\u6837\uFF0C\u4E00\u5207\u90FD\u6574\u6D01\u6709\u5E8F\uFF0C\u6BCF\u4E00\u5E27\u90FD\u6309\u987A\u5E8F\u53D1\u751F\uFF0C\u5373\u4F7F\u6709\u4EFB\u52A1\u8017\u65F6\u8F83\u957F\uFF0C\u4E5F\u662F\u8FD9\u4E2A\u7ED3\u679C",-1),f=l("p",null,"\u5F53\u7136\uFF0C\u4F60\u65E0\u6CD5\u5B8C\u5168\u907F\u514D\u4EFB\u52A1\u50CF\u70B9\u51FB\u4E8B\u4EF6\u4F1A\u5728\u4EFB\u52A1\u4E2D\u4F20\u9012\uFF0C\u901A\u5E38\u4F60\u5E0C\u671B\u5C3D\u5FEB\u54CD\u5E94\u4E8B\u4EF6\uFF0C\u4F46\u5982\u679C\u4F60\u6709\u50CF\u8BA1\u65F6\u5668\u8FD9\u6837\u7684\u4E1C\u897F\uFF0C\u6216\u8005\u4F60\u6709\u6765\u81EA\u7F51\u7EDC\u7684\u54CD\u5E94\uFF0C\u771F\u5FC3\u5EFA\u8BAE\u4F7F\u7528requestAnimationFrame\uFF0C\u5C06\u52A8\u753B\u7684\u5DE5\u4F5C\u6253\u5305\u8D77\u6765\uFF0C\u7279\u522B\u662F\u5982\u679C\u4F60\u5DF2\u7ECF\u6709\u52A8\u753B\u8FD0\u884C\uFF0C\u56E0\u4E3A\u8FD9\u6837\u4F1A\u8282\u7701\u5F88\u591A\u91CD\u590D\u7684\u5DE5\u4F5C",-1),w=a("",19),x=a("",9);function k(S,E,P,q,I,V){const s=c("Image");return r(),p("div",null,[i,n(s,{src:"/browser/event-loop/1.png"},null,8,["src"]),t,n(s,{src:"/browser/event-loop/2.png"},null,8,["src"]),b,n(s,{src:"/browser/event-loop/3.png"},null,8,["src"]),n(s,{src:"/browser/event-loop/4.png"},null,8,["src"]),u,n(s,{src:"/browser/event-loop/5.png"},null,8,["src"]),A,n(s,{src:"/browser/event-loop/6.png"},null,8,["src"]),C,n(s,{src:"/browser/event-loop/7.png"},null,8,["src"]),m,n(s,{src:"/browser/event-loop/8.png"},null,8,["src"]),d,n(s,{src:"/browser/event-loop/9.png"},null,8,["src"]),y,n(s,{src:"/browser/event-loop/10.png"},null,8,["src"]),D,n(s,{src:"/browser/event-loop/11.png"},null,8,["src"]),_,n(s,{src:"/browser/event-loop/12.png"},null,8,["src"]),v,n(s,{src:"/browser/event-loop/13.png"},null,8,["src"]),g,n(s,{src:"/browser/event-loop/14.png"},null,8,["src"]),h,n(s,{src:"/browser/event-loop/15.png"},null,8,["src"]),T,n(s,{src:"/browser/event-loop/16.png"},null,8,["src"]),f,n(s,{src:"/browser/event-loop/17.png"},null,8,["src"]),w,n(s,{src:"/browser/event-loop/18.png"},null,8,["src"]),x])}const N=e(o,[["render",k]]);export{L as __pageData,N as default};
