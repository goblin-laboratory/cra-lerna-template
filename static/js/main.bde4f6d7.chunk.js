(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{207:function(e,t,n){"use strict";var a=n(151),r=n(738);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}t.a=function(e,t){var n=null,c=new Promise(function(c){n=r.a[e](function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(n,!0).forEach(function(t){Object(a.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},t,{onOk:function(){return c(!0)},onCancel:function(){return c(!1)}}))}).finally(function(){n=null,delete c.modal});return c.modal=n,c.clear=function(){if(n)try{n.destory()}catch(e){}n=null,delete c.modal},c}},333:function(e,t,n){"use strict";(function(e){t.a=function(t){return new Promise(function(n){e.setTimeout(n,t)})}}).call(this,n(37))},334:function(e,t,n){"use strict";(function(e){var a=n(58),r=n.n(a);t.a=function(t){var n=e.location,a=n.origin,o=n.pathname,c=n.hash,i=r.a.stringify(t),l=i?"?".concat(i):"";e.history.replaceState({},"","".concat(a).concat(o).concat(l).concat(c))}}).call(this,n(37))},335:function(e,t,n){e.exports={loading:"loading--2ums7"}},337:function(e,t,n){e.exports={dashboard:"dashboard--B4QH2"}},342:function(e,t,n){e.exports={center:"center--If3b1"}},349:function(e,t,n){e.exports=n(737)},598:function(e,t){},659:function(e,t,n){},661:function(e,t,n){"use strict";n.r(t),function(e){var a=n(59),r=n.n(a),o=n(206),c=n(212),i=n(35),l=n(58),s=n.n(l),u=n(207),p=n(333),f=n(334),d=function(){var t=s.a.parse(e.location.search),n=t.name,a=t.title,r=Object(c.a)(t,["name","title"]);if(Object(f.a)(r),n&&a)return localStorage.setItem("username",n),localStorage.setItem("usertitle",a),{username:n,usertitle:a};var o={username:localStorage.getItem("username"),usertitle:localStorage.getItem("usertitle")};return o.username&&o.usertitle?o:(localStorage.removeItem("username"),localStorage.removeItem("usertitle"),null)},m=function(){var t=s.a.stringify({from:e.location.href});if("localhost"===e.location.hostname&&e.location.port)e.location.replace("".concat(e.location.protocol,"//").concat(e.location.hostname,":").concat(parseInt(e.location.port,10)+1,"?").concat(t));else if(e.location.pathname.match(/\/app(\/[^\/]*)?$/)){var n=e.location.pathname.replace(/\/app(\/[^\/]*)?$/,"/login");e.location.replace("".concat(e.location.origin).concat(n,"?").concat(t))}else e.location.replace("https://goblin-laboratory.github.io/lerna/login?".concat(t))};t.default={namespace:"app",state:{userInfo:null},subscriptions:{setup:function(e){var t=e.dispatch,n=e.history;return t({type:"jump2loading",payload:n.location}),n.listen(function(e){var n=e.pathname,a=e.search;"/"===n&&t({type:"load",payload:a})})}},effects:{jump2loading:r.a.mark(function e(t,n){var a,c,l,u;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.payload,c=n.put,"/"!==a.pathname){e.next=4;break}return e.abrupt("return");case 4:return l=s.a.parse(a.search),u=s.a.stringify(Object(o.a)({},l,{pathname:a.pathname})),e.next=8,c(i.routerRedux.replace({pathname:"/",search:u}));case 8:case"end":return e.stop()}},e)}),load:r.a.mark(function e(t,n){var a,o,l,u,f,m,h,g;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.payload,o=n.put,l=n.call,e.next=4,l(p.a,3e3);case 4:if(u=d()){e.next=9;break}return e.next=8,o({type:"loginFaild"});case 8:return e.abrupt("return");case 9:return e.next=11,o({type:"save",payload:{userInfo:u}});case 11:return f=s.a.parse(a),m=f.pathname,h=Object(c.a)(f,["pathname"]),g=s.a.stringify(h),e.next=15,o(i.routerRedux.replace({pathname:m,search:g}));case 15:if(!m){e.next=20;break}return e.next=18,o(i.routerRedux.replace({pathname:m,search:g}));case 18:e.next=22;break;case 20:return e.next=22,o(i.routerRedux.replace("/dashboard"));case 22:case"end":return e.stop()}},e)}),loginFaild:r.a.mark(function e(t,n){var a,o,c,i;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.payload,o=n.call,c=n.put,i=a&&a.content||"\u7528\u6237\u672a\u767b\u5f55\uff0c\u8bf7\u767b\u5f55",e.next=5,o(u.a,"info",{title:"\u63d0\u793a",content:i,okText:"\u53bb\u767b\u5f55"});case 5:if(!e.sent){e.next=10;break}return e.next=9,c({type:"save",payload:{userInfo:null}});case 9:m();case 10:case"end":return e.stop()}},e)}),logout:r.a.mark(function e(t,n){var a,o;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.payload,a=n.put,o=n.call,e.next=4,o(u.a,"confirm",{title:"\u6ce8\u9500",content:"\u786e\u8ba4\u8981\u9000\u51fa\u767b\u5f55\u5417\uff1f"});case 4:if(!e.sent){e.next=10;break}return localStorage.removeItem("usertitle"),e.next=9,a({type:"save",payload:{userInfo:null}});case 9:m();case 10:case"end":return e.stop()}},e)})},reducers:{save:function(e,t){return Object(o.a)({},e,t.payload)}}}}.call(this,n(37))},736:function(e,t,n){"use strict";n.r(t);n(693);var a=n(346),r=n(0),o=n.n(r),c=n(35),i=n(343),l=n.n(i),s=(n(695),n(26)),u=n(335),p=n.n(u),f=function(){return o.a.createElement("div",{className:p.a.loading},o.a.createElement(s.a,{type:"loading"}))},d=(n(735),n(344)),m=(n(700),n(336)),h=n.n(m),g=(n(713),n(81)),v=n(147),b=n(337),y=n.n(b),w=Object(v.connect)(function(e){return{userInfo:e.app.userInfo}})(function(e){var t=e.dispatch,n=e.userInfo,a=o.a.useCallback(function(){t({type:"app/logout"})},[t]);return o.a.createElement(d.a,{className:y.a.dashboard},o.a.createElement(h.a,{type:"success",title:"\u767b\u5f55\u6210\u529f",description:o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,"\u7528\u6237\u540d: ",n.username),o.a.createElement("div",null,"\u6635\u79f0: ",n.usertitle)),actions:o.a.createElement(g.a,{onClick:a},"\u6ce8\u9500")}))}),x=n(342),O=n.n(x),k=function(){return o.a.createElement("div",{className:O.a.center},o.a.createElement(c.Switch,null,o.a.createElement(c.Route,{path:"/",exact:!0,component:f}),o.a.createElement(c.Route,{path:"/dashboard",component:w}),o.a.createElement(c.Redirect,{from:"(.*)",to:"/"})))};t.default=function(e){var t=e.history,n=e.app;return o.a.createElement(a.a,{locale:l.a},o.a.createElement(c.Router,{history:t},o.a.createElement(c.Switch,null,o.a.createElement(c.Route,{path:"(.*)",render:function(e){return o.a.createElement(k,Object.assign({},e,{app:n}))}}))))}},737:function(e,t,n){"use strict";n.r(t);n(350),n(360);var a=n(147),r=n.n(a),o=n(345),c=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function i(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}n(659);var l=r()({});l.use(Object(o.a)()),l.model(n(661).default),l.router(n(736).default),l.start("#root"),function(e){if("serviceWorker"in navigator){if(new URL("/goblin-laboratory/lerna",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/goblin-laboratory/lerna","/service-worker.js");c?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):i(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):i(t,e)})}}();t.default=l._store}},[[349,1,2]]]);