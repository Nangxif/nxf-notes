import{_ as e,r,c,b as a,a as s,g as l,h as p,o}from"./app.5cc6121b.js";const q=JSON.parse('{"title":"\u5143\u7D20\u8282\u70B9\u7EC4\u4EF6\u7684diff\u7B97\u6CD5\u3010\u4E0B\u3011","description":"","frontmatter":{},"headers":[{"level":3,"title":"5.\u6C42\u6700\u957F\u9012\u589E\u5B50\u5E8F\u5217","slug":"_5-\u6C42\u6700\u957F\u9012\u589E\u5B50\u5E8F\u5217","link":"#_5-\u6C42\u6700\u957F\u9012\u589E\u5B50\u5E8F\u5217","children":[]}],"relativePath":"blogs/front-frame/vue3/sound-code/runtime-core/diff-2.md","lastUpdated":1686810471000}'),i={name:"blogs/front-frame/vue3/sound-code/runtime-core/diff-2.md"},t=s("h1",{id:"\u5143\u7D20\u8282\u70B9\u7EC4\u4EF6\u7684diff\u7B97\u6CD5\u3010\u4E0B\u3011",tabindex:"-1"},[l("\u5143\u7D20\u8282\u70B9\u7EC4\u4EF6\u7684diff\u7B97\u6CD5\u3010\u4E0B\u3011 "),s("a",{class:"header-anchor",href:"#\u5143\u7D20\u8282\u70B9\u7EC4\u4EF6\u7684diff\u7B97\u6CD5\u3010\u4E0B\u3011","aria-hidden":"true"},"#")],-1),b=s("p",null,"\u56E0\u4E3A\u7BC7\u5E45\u592A\u957F\u4E86\uFF0C\u6240\u4EE5\u4E0A\u4E00\u8282\u7B2C\u4E09\u7AE0\u7B2C5\u5C0F\u70B9\u653E\u5728\u4E0B\u8282\u8FD9\u91CC\u8BB2\u3002",-1),C=s("h3",{id:"_5-\u6C42\u6700\u957F\u9012\u589E\u5B50\u5E8F\u5217",tabindex:"-1"},[l("5.\u6C42\u6700\u957F\u9012\u589E\u5B50\u5E8F\u5217 "),s("a",{class:"header-anchor",href:"#_5-\u6C42\u6700\u957F\u9012\u589E\u5B50\u5E8F\u5217","aria-hidden":"true"},"#")],-1),A=s("p",null,"\u7ECF\u5386\u8FC7\u4E0A\u9762\u51E0\u4E2A\u6B65\u9AA4\u4E4B\u540E\uFF0C\u4E5F\u7B97\u662F\u4F18\u5316\u5B8C\u6BD5\uFF0C\u5269\u4F59\u7684\u90E8\u5206\u5C31\u662F\u4E71\u5E8F\u7684\u3002",-1),u=s("p",null,"\u5148\u63D0\u4F9B\u4E00\u4E2A\u4F8B\u5B50\uFF0C\u5E76\u4E14\u8FD9\u4E2A\u4F8B\u5B50\u6309\u7167\u4E0A\u9762\u7684\u6B65\u9AA4\u6267\u884C\u5B8C\u4E4B\u540E\uFF0Cs1\u6307\u9488\uFF0Cs2\u6307\u9488\uFF08\u4E0A\u9762\u8BF4\u5230i\u6307\u9488\u5176\u5B9E\u4E5F\u53EF\u4EE5\u5206\u4E3A\u4E24\u4E2A\u6307\u9488\uFF0C\u53EA\u662F\u4E24\u4E2A\u6307\u9488\u662F\u540C\u6B65\u7684\uFF09\uFF0Ce1\u6307\u9488\uFF0Ce2\u6307\u9488\u7684\u6307\u5411\u5982\u4E0B",-1),d=p("",10),m=s("p",null,"\u4E3A\u4EC0\u4E48newIndexToOldIndexMap\u7684\u503C\u4F1A\u88AB\u52A01\u5462\uFF1F\u56E0\u4E3A\u65E7\u5143\u7D20\u4E71\u5E8F\u90E8\u5206\u53EF\u80FD\u7B2C\u4E00\u4E2A\u5143\u7D20\u5C31\u662F\u65E7\u7684\u4E71\u5E8F\u6570\u7EC4\u7684\u5F00\u5934\uFF0C\u7D22\u5F15\u4E3A0\uFF0C\u4F46\u662F\u6211\u4EEC\u8BF4\u4E86\u7D22\u5F15\u4E3A0\u8868\u793A\u6CA1\u6709\u88ABpatch\u8FC7\uFF0C\u5982\u679C0\u8FD8\u4EE3\u8868\u53BB\u5176\u4ED6\u7684\u610F\u601D\uFF0C\u90A3\u5C31\u4E0D\u884C\u4E86\uFF0C\u6240\u4EE5\u624D\u5168\u90E8\u52A01\u3002",-1),y=s("p",null,"\u6267\u884C\u5B8C\u4E0A\u9762\u7684\u4EE3\u7801\u4E4B\u540E\uFF0C\u5C31\u7B97\u6267\u884C\u4E86patch\uFF0C\u4E5F\u53EA\u662F\u6BD4\u5BF9key\u76F8\u540C\u7684\u5143\u7D20\u5DEE\u5F02\uFF0C\u5E76\u4E0D\u4F1A\u79FB\u52A8\u5143\u7D20\u7684\u4F4D\u7F6E\u3002\u56E0\u6B64\u6267\u884C\u5B8C\u4E0A\u9762\u4E4B\u540E\uFF0C\u7ED3\u679C\u8FD8\u662Fa b c d e f g\uFF0C\u53EA\u4E0D\u8FC7\u6BCF\u4E2A\u8282\u70B9\u90FD\u88ABpatch\u8FC7\u4E86\u3002",-1),D=s("p",null,"\u6211\u4EEC\u63A5\u4E0B\u6765\u9700\u8981\u8FDB\u884C\u4E24\u4E2A\u6B65\u9AA4\uFF1A",-1),h=s("ol",null,[s("li",null,"\u5982\u679C\u65B0\u7684\u5B50\u8282\u70B9\u662F\u590D\u7528\u65E7\u7684\u5B50\u8282\u70B9\uFF0C\u90A3\u4E48\u53EF\u80FD\u9700\u8981\u8C03\u6574\u65E7\u7684\u5B50\u8282\u70B9\u7684\u4F4D\u7F6E\uFF0C\u8BA9\u5176\u8DDF\u65B0\u7684\u5B50\u8282\u70B9\u5217\u8868\u987A\u5E8F\u4E00\u81F4\uFF1B"),s("li",null,"\u5982\u679C\u65B0\u7684\u5B50\u8282\u70B9\u5728\u65E7\u7684\u5B50\u8282\u70B9\u5217\u8868\u91CC\u9762\u662F\u6CA1\u6709\u7684\uFF0C\u90A3\u4E48\u9700\u8981\u65B0\u589E\u5F53\u524D\u8FD9\u4E2A\u5B50\u8282\u70B9\u5E76\u4E14\u63D2\u5165\u5230\u65B0\u7684\u5B50\u8282\u70B9\u5217\u8868\u91CC\u9762\uFF1B")],-1),g=p("",44);function _(f,v,x,I,w,T){const n=r("Image");return o(),c("div",null,[t,b,C,A,u,a(n,{src:"/front-frame/vue3/sound-code/runtime-core/diff/7.png"},null,8,["src"]),d,a(n,{src:"/front-frame/vue3/sound-code/runtime-core/diff/8.png"},null,8,["src"]),m,y,D,h,a(n,{src:"/front-frame/vue3/sound-code/runtime-core/diff/9.png"},null,8,["src"]),g])}const O=e(i,[["render",_]]);export{q as __pageData,O as default};
