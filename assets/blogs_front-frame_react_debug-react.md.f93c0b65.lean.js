import{_ as e,c as o,b as n,h as a,a as l,g as p,o as r,e as c}from"./app.36bb7e4c.js";const I=JSON.parse('{"title":"\u5982\u4F55\u8C03\u8BD5react\u6E90\u7801","description":"","frontmatter":{},"headers":[{"level":2,"title":"1.\u521B\u5EFA\u4E00\u4E2Areact\u9879\u76EE","slug":"_1-\u521B\u5EFA\u4E00\u4E2Areact\u9879\u76EE","link":"#_1-\u521B\u5EFA\u4E00\u4E2Areact\u9879\u76EE","children":[]},{"level":2,"title":"2.\u8FD0\u884Ceject\uFF0C\u521B\u5EFAconfig\u76EE\u5F55\uFF0C\u66B4\u9732webpack\u914D\u7F6E","slug":"_2-\u8FD0\u884Ceject\uFF0C\u521B\u5EFAconfig\u76EE\u5F55\uFF0C\u66B4\u9732webpack\u914D\u7F6E","link":"#_2-\u8FD0\u884Ceject\uFF0C\u521B\u5EFAconfig\u76EE\u5F55\uFF0C\u66B4\u9732webpack\u914D\u7F6E","children":[]},{"level":2,"title":"3.\u5C06facebook\u4ED3\u5E93\u7684react\u6E90\u7801clone\u6216\u8005\u4E0B\u8F7D\uFF0C\u653E\u81F3src/react\u76EE\u5F55\u4E0B","slug":"_3-\u5C06facebook\u4ED3\u5E93\u7684react\u6E90\u7801clone\u6216\u8005\u4E0B\u8F7D\uFF0C\u653E\u81F3src-react\u76EE\u5F55\u4E0B","link":"#_3-\u5C06facebook\u4ED3\u5E93\u7684react\u6E90\u7801clone\u6216\u8005\u4E0B\u8F7D\uFF0C\u653E\u81F3src-react\u76EE\u5F55\u4E0B","children":[]},{"level":2,"title":"4.\u4FEE\u6539react-app/src/index.js\u91CC\u9762\u5173\u4E8Ereact\u7684\u5F15\u5165\u65B9\u5F0F","slug":"_4-\u4FEE\u6539react-app-src-index-js\u91CC\u9762\u5173\u4E8Ereact\u7684\u5F15\u5165\u65B9\u5F0F","link":"#_4-\u4FEE\u6539react-app-src-index-js\u91CC\u9762\u5173\u4E8Ereact\u7684\u5F15\u5165\u65B9\u5F0F","children":[]},{"level":2,"title":"5.react-app/config/webpack.config.js\u4FEE\u6539alias\u6307\u5411\uFF0C\u6307\u5411\u4E0B\u8F7D\u5230\u672C\u5730\u7684react\u4EE3\u7801","slug":"_5-react-app-config-webpack-config-js\u4FEE\u6539alias\u6307\u5411\uFF0C\u6307\u5411\u4E0B\u8F7D\u5230\u672C\u5730\u7684react\u4EE3\u7801","link":"#_5-react-app-config-webpack-config-js\u4FEE\u6539alias\u6307\u5411\uFF0C\u6307\u5411\u4E0B\u8F7D\u5230\u672C\u5730\u7684react\u4EE3\u7801","children":[]},{"level":2,"title":"6.\u5173\u6389eslint","slug":"_6-\u5173\u6389eslint","link":"#_6-\u5173\u6389eslint","children":[]},{"level":2,"title":"7.\u5148\u5C06\u9879\u76EE\u8FD0\u884C\u8D77\u6765","slug":"_7-\u5148\u5C06\u9879\u76EE\u8FD0\u884C\u8D77\u6765","link":"#_7-\u5148\u5C06\u9879\u76EE\u8FD0\u884C\u8D77\u6765","children":[]},{"level":2,"title":"8.\u4FEE\u6539\u7B2C\u4E00\u4E2A\u9047\u5230\u7684\u9519\u8BEF","slug":"_8-\u4FEE\u6539\u7B2C\u4E00\u4E2A\u9047\u5230\u7684\u9519\u8BEF","link":"#_8-\u4FEE\u6539\u7B2C\u4E00\u4E2A\u9047\u5230\u7684\u9519\u8BEF","children":[]},{"level":2,"title":"9.\u9879\u76EE\u8DD1\u8D77\u6765\u4E86\uFF0C\u4F46\u662F\u6211\u4EEC\u4F9D\u7136\u80FD\u5728\u6D4F\u89C8\u5668\u63A7\u5236\u53F0\u770B\u5230\u62A5\u9519","slug":"_9-\u9879\u76EE\u8DD1\u8D77\u6765\u4E86\uFF0C\u4F46\u662F\u6211\u4EEC\u4F9D\u7136\u80FD\u5728\u6D4F\u89C8\u5668\u63A7\u5236\u53F0\u770B\u5230\u62A5\u9519","link":"#_9-\u9879\u76EE\u8DD1\u8D77\u6765\u4E86\uFF0C\u4F46\u662F\u6211\u4EEC\u4F9D\u7136\u80FD\u5728\u6D4F\u89C8\u5668\u63A7\u5236\u53F0\u770B\u5230\u62A5\u9519","children":[]},{"level":2,"title":"10.\u89E3\u51B3__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED\u95EE\u9898","slug":"_10-\u89E3\u51B3-secret-internals-do-not-use-or-you-will-be-fired\u95EE\u9898","link":"#_10-\u89E3\u51B3-secret-internals-do-not-use-or-you-will-be-fired\u95EE\u9898","children":[]},{"level":2,"title":"11.This module must be shimmed by a specific renderer","slug":"_11-this-module-must-be-shimmed-by-a-specific-renderer","link":"#_11-this-module-must-be-shimmed-by-a-specific-renderer","children":[]},{"level":2,"title":"12.\u8DD1\u8D77\u6765\u4E86","slug":"_12-\u8DD1\u8D77\u6765\u4E86","link":"#_12-\u8DD1\u8D77\u6765\u4E86","children":[]},{"level":2,"title":"13.\u5F00\u59CBdebug","slug":"_13-\u5F00\u59CBdebug","link":"#_13-\u5F00\u59CBdebug","children":[]},{"level":2,"title":"14.\u5927\u529F\u544A\u6210","slug":"_14-\u5927\u529F\u544A\u6210","link":"#_14-\u5927\u529F\u544A\u6210","children":[]}],"relativePath":"blogs/front-frame/react/debug-react.md","lastUpdated":1679235457000}'),t={name:"blogs/front-frame/react/debug-react.md"},D=a("",8),i=l("p",null,"\u8DD1\u547D\u4EE4\u540E\u7684\u6837\u5B50",-1),y=l("p",null,"\u8DD1\u5B8C\u8FD9\u6BB5\u547D\u4EE4\u4F1A\u521B\u5EFA.git\u6587\u4EF6\u5939\u5E76\u5728\u9879\u76EE\u751F\u6210\u4ED3\u5E93\uFF0C\u5982\u679C\u6211\u4EEC\u662F\u5148\u8FDB\u884C3\u6B65\u9AA4\u518D\u8FDB\u884C2\u6B65\u9AA4\uFF0C\u90A3\u4E48\u5728\u8FDB\u884C2\u6B65\u9AA4\u7684\u65F6\u5019\u4F1A\u62A5\u9519\uFF0C\u8BF4\u4ED3\u5E93\u8FD8\u6709\u672Acommit\u7684\u4EE3\u7801\uFF0C\u5BFC\u81F4eject\u547D\u4EE4\u65E0\u6CD5\u6267\u884C\uFF0C\u8FD9\u65F6\u5019\u6211\u4EEC\u9700\u8981\u5C06\u4EE3\u7801\u5168\u90E8commit\uFF0C\u518D\u8DD1\u8FD9\u4E32\u547D\u4EE4\u3002",-1),F=l("h2",{id:"_3-\u5C06facebook\u4ED3\u5E93\u7684react\u6E90\u7801clone\u6216\u8005\u4E0B\u8F7D\uFF0C\u653E\u81F3src-react\u76EE\u5F55\u4E0B",tabindex:"-1"},[p("3.\u5C06facebook\u4ED3\u5E93\u7684react\u6E90\u7801clone\u6216\u8005\u4E0B\u8F7D\uFF0C\u653E\u81F3src/react\u76EE\u5F55\u4E0B "),l("a",{class:"header-anchor",href:"#_3-\u5C06facebook\u4ED3\u5E93\u7684react\u6E90\u7801clone\u6216\u8005\u4E0B\u8F7D\uFF0C\u653E\u81F3src-react\u76EE\u5F55\u4E0B","aria-hidden":"true"},"#")],-1),A=a("",12),C=a("",2),b=a("",2),d=a("",2),u=a("",3),_=a("",3),m=a("",3),h=a("",4),g=l("p",null,"\u7AEF\u53E3\u6539\u4E3A\u5F53\u524D\u9879\u76EE\u7684\u670D\u52A1\u7AEF\u53E33000\uFF0C\u70B9\u51FB\u8FD0\u884C\u548C\u8C03\u8BD5",-1),f=l("h2",{id:"_14-\u5927\u529F\u544A\u6210",tabindex:"-1"},[p("14.\u5927\u529F\u544A\u6210 "),l("a",{class:"header-anchor",href:"#_14-\u5927\u529F\u544A\u6210","aria-hidden":"true"},"#")],-1);function E(v,T,S,k,j,w){const s=c("Image");return r(),o("div",null,[D,n(s,{src:"/front-frame/react/debug-react/1.png"},null,8,["src"]),i,n(s,{src:"/front-frame/react/debug-react/2.png"},null,8,["src"]),y,F,n(s,{src:"/front-frame/react/debug-react/3.png"},null,8,["src"]),A,n(s,{src:"/front-frame/react/debug-react/4.png"},null,8,["src"]),C,n(s,{src:"/front-frame/react/debug-react/5.png"},null,8,["src"]),b,n(s,{src:"/front-frame/react/debug-react/6.png"},null,8,["src"]),d,n(s,{src:"/front-frame/react/debug-react/7.png"},null,8,["src"]),u,n(s,{src:"/front-frame/react/debug-react/8.png"},null,8,["src"]),_,n(s,{src:"/front-frame/react/debug-react/9.png"},null,8,["src"]),m,n(s,{src:"/front-frame/react/debug-react/10.png"},null,8,["src"]),h,n(s,{src:"/front-frame/react/debug-react/11.png"},null,8,["src"]),g,n(s,{src:"/front-frame/react/debug-react/12.png"},null,8,["src"]),f,n(s,{src:"/front-frame/react/debug-react/13.png"},null,8,["src"])])}const V=e(t,[["render",E]]);export{I as __pageData,V as default};