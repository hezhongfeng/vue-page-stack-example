(function(e){function n(n){for(var a,r,c=n[0],i=n[1],s=n[2],l=0,p=[];l<c.length;l++)r=c[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);d&&d(n);while(p.length)p.shift()();return u.push.apply(u,s||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],a=!0,r=1;r<t.length;r++){var c=t[r];0!==o[c]&&(a=!1)}a&&(u.splice(n--,1),e=i(i.s=t[0]))}return e}var a={},r={app:0},o={app:0},u=[];function c(e){return i.p+"static/js/"+({}[e]||e)+"."+{"chunk-06af7318":"7ba7307d","chunk-345c093e":"541bf37c","chunk-641a8ba6":"d02f97ab","chunk-abaaf38e":"719e9a2a"}[e]+".js"}function i(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-06af7318":1,"chunk-345c093e":1,"chunk-641a8ba6":1,"chunk-abaaf38e":1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise((function(n,t){for(var a="static/css/"+({}[e]||e)+"."+{"chunk-06af7318":"31417d0d","chunk-345c093e":"d40109be","chunk-641a8ba6":"245b30de","chunk-abaaf38e":"53518508"}[e]+".css",o=i.p+a,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var s=u[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===a||l===o))return n()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){s=p[c],l=s.getAttribute("data-href");if(l===a||l===o)return n()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=n,d.onerror=function(n){var a=n&&n.target&&n.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=a,delete r[e],d.parentNode.removeChild(d),t(u)},d.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)n.push(a[2]);else{var u=new Promise((function(n,t){a=o[e]=[n,t]}));n.push(a[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e);var p=new Error;s=function(n){l.onerror=l.onload=null,clearTimeout(d);var t=o[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;p.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",p.name="ChunkLoadError",p.type=a,p.request=r,t[1](p)}o[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(n)},i.m=e,i.c=a,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)i.d(t,a,function(n){return e[n]}.bind(null,a));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/vue-page-stack-example/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var p=0;p<s.length;p++)n(s[p]);var d=l;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},3504:function(e){e.exports=JSON.parse('{"language":"语言","quickStart":"开始体验","explain":"让Vue单页应用像原生App一样缓存UI页面","home":"主页","about":"关于","login":"登录","signup":"注册","placeholder":{"username":"请输入用户名","password":"请输入密码"},"detail":{"desc":"可以在下面的input中输入内容，然后push到下一页面","placeholder":"输入一些信息","push":{"same":"Push到下一页","login":"Push到登录","list":"Push到列表(可以缓存相同的页面)"},"replace":"Replace当前页","currentPageNumber":"当前页码","currentUserName":"当前用户"},"aboutPage":{"desc1":"Vue 单页应用导航管理器","desc2":"想法来源于实际业务需求，在进行公众号开发和Hybrid App开发的时候经常会有这样的需求，最后vue-stack-page诞生了","desc3":"欢迎使用，欢迎提PR，希望能帮到你"}}')},"49f8":function(e,n,t){var a={"./en.json":"edd4","./zh.json":"3504"};function r(e){var n=o(e);return t(n)}function o(e){if(!t.o(a,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id="49f8"},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("2b0e"),r=(t("8d0b"),t("0c10")),o=t.n(r),u=t("8cc1"),c=t.n(u),i=t("72b3"),s=t.n(i),l=t("294d"),p=t.n(l),d=t("0bb5"),f=t.n(d),h=t("b7ec"),m=t.n(h);t("955f"),t("692e"),t("54bb"),t("14bd"),t("082a"),t("5c85"),t("1012");a["a"].use(o.a),a["a"].use(c.a),a["a"].use(s.a),a["a"].use(p.a),a["a"].use(f.a),a["a"].use(m.a);var b=function(){var e=this,n=e._self._c;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:e.transitionName}},[n("vue-page-stack",[n("router-view",{key:e.$route.fullPath,staticClass:"router-view-c"})],1)],1)],1)},g=[],v={name:"App",data:function(){return{transitionName:"forward"}},components:{},created:function(){},watch:{$route:function(e,n){"forward"===e.params["stack-key-dir"]?this.transitionName="forward":this.transitionName="back"}},methods:{}},k=v,y=(t("a756"),t("2877")),w=Object(y["a"])(k,b,g,!1,null,null,null),P=w.exports,x=(t("d3b7"),t("3ca3"),t("ddb0"),t("8c4f")),O=function(){return t.e("chunk-345c093e").then(t.bind(null,"0a0d"))},N=function(){return t.e("chunk-abaaf38e").then(t.bind(null,"9e87"))},S=function(){return t.e("chunk-641a8ba6").then(t.bind(null,"ede4"))},j=function(){return t.e("chunk-06af7318").then(t.bind(null,"b3d7"))};a["a"].use(x["a"]);var A=[{path:"/",component:O},{path:"/home/:tab",component:j},{path:"/main-detail/:id",component:N},{path:"/login",component:S}],E=new x["a"]({mode:"history",base:"/vue-page-stack-example/",routes:A});E.beforeEach((function(e,n,t){console.log("beforeEach"),t()}));var _=E,C=t("04e1"),L=t.n(C),T=(t("4160"),t("159b"),t("ac1f"),t("466d"),t("a925"));function U(){var e=t("49f8"),n={};return e.keys().forEach((function(t){var a=t.match(/([A-Za-z0-9-_]+)\./i);if(a&&a.length>1){var r=a[1];n[r]=e(t)}})),n}a["a"].use(T["a"]);var M=new T["a"]({locale:"zh",fallbackLocale:"zh",messages:U()});a["a"].config.productionTip=!1,a["a"].use(L.a,{router:_}),new a["a"]({router:_,i18n:M,render:function(e){return e(P)}}).$mount("#app")},"6d07":function(e,n,t){},a756:function(e,n,t){"use strict";t("6d07")},edd4:function(e){e.exports=JSON.parse('{"language":"language","quickStart":"Quick Start","explain":"Caching Vue component instances without destroying them like native App in Vue SPA.","home":"Home","about":"About","login":"Login","signup":"Signup","placeholder":{"username":"please enter user name","password":"please enter password"},"detail":{"desc":"enter some text in the input，then push to next page","placeholder":"enter some text","push":{"same":"Push to next page","login":"Push to Login page","list":"Push to List (cached same page)"},"replace":"Replace current page","currentPageNumber":"current page number","currentUserName":"current user name"},"aboutPage":{"desc1":"Routing and navigation for your Vue SPA.","desc2":"The idea comes from actual business needs, there is often such a need when developing WeChat and Hybrid App, Finally vue-stack-page was born.","desc3":"Welcome to use, welcome to PR, hope to help you."}}')}});