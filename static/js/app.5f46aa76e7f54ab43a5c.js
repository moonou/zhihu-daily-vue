webpackJsonp([7,5],{0:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(12),u=o(r),a=n(37),i=o(a),s=n(173),f=o(s),c=n(176),l=o(c),d=n(249),p=o(d);n(244),n(234),n(235);var v=n(5);i.default.mixin({data:function(){return{proxyserver:v.proxyserver}}}),new i.default((0,u.default)({router:f.default,store:l.default},p.default)).$mount("#app")},5:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){for(var n in e)"object"===(0,i.default)(e[n])?r(e[n],t):e[n]=t+e[n]}function u(e,t){for(var n in t)"object"===(0,i.default)(t[n])?(e[n]={},u(e[n],t[n])):e[n]=t[n]}Object.defineProperty(t,"__esModule",{value:!0}),t.proxyserver=t.getApi=void 0;var a=n(193),i=o(a),s="http://news-at.zhihu.com",f=s+"/api",c=4,l=n(245),d=!0,p={startImage:"/start-image/1080*1776",news:{before:"/news/before/",latest:"/news/latest",content:"/news"},themes:{list:"/themes",content:"/theme"}};t.getApi=function(){var e={};return u(e,p),r(e,f+"/"+c),d?r(e,l.host):"",e},t.proxyserver=l.host},17:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.GETBOOTIMAGE="getbootimage",t.UPDATENEWS="updatenews",t.UPDATETHEMES="updatethemes"},172:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){NProgress.start(),n.e(3,function(){NProgress.done(),e(n(253))})},r=function(e){NProgress.start(),n.e(0,function(){NProgress.done(),e(n(255))})},u=function(e){NProgress.start(),n.e(1,function(){NProgress.done(),e(n(257))})},a=function(e){NProgress.start(),n.e(2,function(){NProgress.done(),e(n(254))})},i=function(e){return n.e(4,function(){return e(n(256))})};t.default=[{path:"/home",component:r,name:"home"},{path:"/boot",component:o},{path:"/play",component:i},{path:"/theme/:id",component:u,name:"theme"},{path:"/content/:id",component:a,name:"content"},{path:"/",redirect:"/home"}]},173:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(37),u=o(r),a=n(267),i=o(a),s=n(172),f=o(s);u.default.use(i.default),t.default=new i.default({routes:f.default})},174:function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}Object.defineProperty(t,"__esModule",{value:!0}),t.getThemes=t.getNews=t.getNewsByDate=t.getBootImage=void 0;var r=n(17),u=o(r),a=n(5);t.getBootImage=function(e){var t=e.commit;fetch((0,a.getApi)().startImage).then(function(e){return e.json()}).then(function(e){t(u.GETBOOTIMAGE,e)})},t.getNewsByDate=function(e,t){var n=e.commit,o=(0,a.getApi)().news.before+t;fetch(o).then(function(e){return e.json()}).then(function(e){n(u.UPDATENEWS,e)})},t.getNews=function(e){var t=e.commit,n=(0,a.getApi)().news.latest;fetch(n).then(function(e){return e.json()}).then(function(e){t(u.UPDATENEWS,e)})},t.getThemes=function(e){var t=e.commit;fetch((0,a.getApi)().themes.list).then(function(e){return e.json()}).then(function(e){t(u.UPDATETHEMES,e)})}},175:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.bootimage=function(e){return e.bootimage},t.news=function(e){return e.news.news},t.themes=function(e){return e.theme.data}},176:function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),n(269);var u=n(37),a=r(u),i=n(16),s=r(i),f=n(179),c=o(f),l=n(174),d=o(l),p=n(175),v=o(p);n(233).polyfill(),a.default.use(s.default);var m=!1;t.default=new s.default.Store({actions:d,getters:v,modules:c,strict:m})},177:function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(24),a=r(u),i=n(17),s=o(i),f={text:"",img:""},c=(0,a.default)({},s.GETBOOTIMAGE,function(e,t){e.text=t.text,e.img=t.img});t.default={state:f,mutations:c}},178:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={text:"Hello world"};t.default={state:n}},179:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.theme=t.news=t.bootimage=t.hello=void 0;var r=n(178),u=o(r),a=n(177),i=o(a),s=n(180),f=o(s),c=n(181),l=o(c);t.hello=u.default,t.bootimage=i.default,t.news=f.default,t.theme=l.default},180:function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(24),a=r(u),i=n(17),s=o(i),f={news:[]},c=(0,a.default)({},s.UPDATENEWS,function(e,t){var n=!0;e.news.forEach(function(e){e.date===t.date&&(e.stories=t.stories,n=!1)}),n&&e.news.push(t)});t.default={state:f,mutations:c}},181:function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(24),a=r(u),i=n(17),s=o(i),f={data:{}},c=(0,a.default)({},s.UPDATETHEMES,function(e,t){e.data=t});t.default={state:f,mutations:c}},234:function(e,t){},235:function(e,t){},244:function(e,t){},245:function(e,t){e.exports={host:"//vn.baka9.trade:3000/?target="}},249:function(e,t,n){var o,r,u=n(266);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=u.render,r.staticRenderFns=u.staticRenderFns,e.exports=o},266:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}}});
//# sourceMappingURL=app.5f46aa76e7f54ab43a5c.js.map