webpackJsonp([2,5],{186:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var d=t(5);a.default={name:"Content",data:function(){return{newsid:4772126,data:void 0,proxyserver:d.proxyserver,headop:0}},created:function(){var e=this;this.$route.params.id&&(this.newsid=this.$route.params.id),fetch((0,d.getApi)().news.content+"/"+this.newsid).then(function(e){return e.json()}).then(function(a){1===a.type?e.$router.push({name:"theme",params:{id:a.theme.id}}):(a.body=e.fixImageUrl(a.body),e.data=a)})},methods:{fixImageUrl:function(e){return e.replace(/src="http/g,'src="'+d.proxyserver+"http")},scroll:function(e){var a=e.target.scrollTop;a<330?this.headop=a/330:this.headop=1}}}},231:function(e,a,t){a=e.exports=t(3)(),a.push([e.id,".backpanel[data-v-7edda615]{position:fixed;top:0;z-index:-1;width:100%;overflow:hidden;background-color:#ddd;height:30vw}.backpanel img[data-v-7edda615]{width:100%;filter:blur(10px);transform:scale(1.2)}.backpanel .imagecopy[data-v-7edda615]{position:absolute;top:28vw;left:30px;color:#fff;text-shadow:1px 1px 1px #666}.header[data-v-7edda615]{color:#fff;padding:20px 30px;box-sizing:border-box;background:transparent;position:fixed;z-index:2;width:100%;transition:background .6s ease-out}.header.active[data-v-7edda615]{box-shadow:0 2px 22px -1px #424242}.header .home i[data-v-7edda615]{transition:all .1s ease-out;display:inline-block;color:#fff;cursor:pointer}.header .home i[data-v-7edda615]:hover{transform:scale(1.2)}.content_page .page[data-v-7edda615]{width:100%;position:absolute;z-index:1;height:100%;top:0;overflow:scroll;-webkit-overflow-scrolling:touch}.content_page .page[data-v-7edda615]:hover::-webkit-scrollbar-thumb{background:#646464}.content_page .page[data-v-7edda615]::-webkit-scrollbar{width:5px}.content_page .page[data-v-7edda615]::-webkit-scrollbar-thumb{background:hsla(0,0%,87%,0);border-radius:4px;transition:all .4s ease}.content_page .page .content[data-v-7edda615]{width:60%;background-color:#fff;margin:400px auto 50px;box-shadow:4px 4px 10px -1px #ddd;border-radius:4px;border:1px solid #eee}.content_page .page .content .title[data-v-7edda615]{box-sizing:border-box;padding:20px 10px;font-size:20px;border-bottom:1px solid #eee}.content_page .page .content .html[data-v-7edda615]{box-sizing:border-box;padding:20px 10px;font-size:15px}.content_page .page .content .html .view-more a[data-v-7edda615]{border:1px solid #eee}.loading[data-v-7edda615]{position:absolute;width:100%;height:100%;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;z-index:4}.loading>.panel[data-v-7edda615]{padding:10px 30px;background-color:#fff;border:1px solid #eee;border-radius:4px;box-shadow:2px 2px 20px -2px #ccc}@media screen and (max-width:767px){.backpanel[data-v-7edda615]{height:50vh}.header[data-v-7edda615]{padding:10px 20px}.content_page .page .content[data-v-7edda615]{width:95%;margin:200px auto 50px}}","",{version:3,sources:["/./src/pages/Content.vue"],names:[],mappings:"AACA,4BAA4B,eAAe,MAAM,WAAW,WAAW,gBAAgB,sBAAsB,WAAW,CACvH,AACD,gCAAgC,WAAW,kBAAkB,oBAAoB,CAChF,AACD,uCAAuC,kBAAkB,SAAS,UAAU,WAAW,4BAA4B,CAClH,AACD,yBAAyB,WAAW,kBAAkB,sBAAsB,uBAAuB,eAAe,UAAU,WAAW,kCAAkC,CACxK,AACD,gCAAgC,kCAAoC,CACnE,AACD,iCAAiC,4BAA4B,qBAAqB,WAAW,cAAc,CAC1G,AACD,uCAAuC,oBAAoB,CAC1D,AACD,qCAAqC,WAAW,kBAAkB,UAAU,YAAY,MAAM,gBAAgB,gCAAgC,CAC7I,AACD,oEAAoE,kBAAkB,CACrF,AACD,wDAAwD,SAAS,CAChE,AACD,8DAA8D,4BAA+B,kBAAkB,uBAAuB,CACrI,AACD,8CAA8C,UAAU,sBAAsB,uBAA4B,kCAAkC,kBAAkB,qBAAqB,CAClL,AACD,qDAAqD,sBAAsB,kBAAkB,eAAe,4BAA4B,CACvI,AACD,oDAAoD,sBAAsB,kBAAkB,cAAc,CACzG,AACD,iEAAiE,qBAAqB,CACrF,AACD,0BAA0B,kBAAkB,WAAW,YAAY,qBAAqB,uBAAuB,sBAAsB,mBAAmB,oBAAoB,aAAa,SAAS,CACjM,AACD,iCAAiC,kBAAkB,sBAAsB,sBAAsB,kBAAkB,iCAAiC,CACjJ,AACD,oCACA,4BAA4B,WAAW,CACtC,AACD,yBAAyB,iBAAiB,CACzC,AACD,8CAA8C,UAAU,sBAA2B,CAClF,CACA",file:"Content.vue",sourcesContent:["\n.backpanel[data-v-7edda615]{position:fixed;top:0;z-index:-1;width:100%;overflow:hidden;background-color:#ddd;height:30vw\n}\n.backpanel img[data-v-7edda615]{width:100%;filter:blur(10px);transform:scale(1.2)\n}\n.backpanel .imagecopy[data-v-7edda615]{position:absolute;top:28vw;left:30px;color:#fff;text-shadow:1px 1px 1px #666\n}\n.header[data-v-7edda615]{color:#fff;padding:20px 30px;box-sizing:border-box;background:transparent;position:fixed;z-index:2;width:100%;transition:background .6s ease-out\n}\n.header.active[data-v-7edda615]{box-shadow:0px 2px 22px -1px #424242\n}\n.header .home i[data-v-7edda615]{transition:all .1s ease-out;display:inline-block;color:#fff;cursor:pointer\n}\n.header .home i[data-v-7edda615]:hover{transform:scale(1.2)\n}\n.content_page .page[data-v-7edda615]{width:100%;position:absolute;z-index:1;height:100%;top:0;overflow:scroll;-webkit-overflow-scrolling:touch\n}\n.content_page .page[data-v-7edda615]:hover::-webkit-scrollbar-thumb{background:#646464\n}\n.content_page .page[data-v-7edda615]::-webkit-scrollbar{width:5px\n}\n.content_page .page[data-v-7edda615]::-webkit-scrollbar-thumb{background:rgba(222,222,222,0);border-radius:4px;transition:all .4s ease\n}\n.content_page .page .content[data-v-7edda615]{width:60%;background-color:#fff;margin:400px auto 50px auto;box-shadow:4px 4px 10px -1px #ddd;border-radius:4px;border:solid 1px #eee\n}\n.content_page .page .content .title[data-v-7edda615]{box-sizing:border-box;padding:20px 10px;font-size:20px;border-bottom:solid 1px #eee\n}\n.content_page .page .content .html[data-v-7edda615]{box-sizing:border-box;padding:20px 10px;font-size:15px\n}\n.content_page .page .content .html .view-more a[data-v-7edda615]{border:solid 1px #eee\n}\n.loading[data-v-7edda615]{position:absolute;width:100%;height:100%;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;z-index:4\n}\n.loading>.panel[data-v-7edda615]{padding:10px 30px;background-color:#fff;border:solid 1px #eee;border-radius:4px;box-shadow:2px 2px 20px -2px #ccc\n}\n@media screen and (max-width: 767px){\n.backpanel[data-v-7edda615]{height:50vh\n}\n.header[data-v-7edda615]{padding:10px 20px\n}\n.content_page .page .content[data-v-7edda615]{width:95%;margin:200px auto 50px auto\n}\n}\n"],sourceRoot:"webpack://"}])},242:function(e,a,t){var d=t(231);"string"==typeof d&&(d=[[e.id,d,""]]);t(4)(d,{});d.locals&&(e.exports=d.locals)},254:function(e,a,t){var d,o;t(242),d=t(186);var n=t(264);o=d=d||{},"object"!=typeof d.default&&"function"!=typeof d.default||(o=d=d.default),"function"==typeof o&&(o=o.options),o.render=n.render,o.staticRenderFns=n.staticRenderFns,o._scopeId="data-v-7edda615",e.exports=d},264:function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[e.data?t("div",{staticClass:"content_page"},[t("div",{class:["header",{active:1===e.headop}],style:{background:"rgba(7, 97, 125, "+e.headop+")"}},[t("div",{staticClass:"home"},[t("router-link",{attrs:{to:{name:"home"}}},[t("i",{staticClass:"iconfont icon-home"})])],1)]),e._v(" "),t("div",{staticClass:"backpanel"},[e.data.image?t("img",{attrs:{src:e.proxyserver+e.data.image,alt:""}}):e._e(),e._v(" "),e.data.images?t("img",{attrs:{src:e.proxyserver+e.data.images[0],alt:""}}):e._e(),e._v(" "),t("div",{staticClass:"imagecopy"},[e._v("背景图来源："+e._s(e.data.image_source))])]),e._v(" "),t("div",{staticClass:"page",on:{scroll:function(a){e.scroll(a)}}},[t("div",{staticClass:"content"},[t("div",{staticClass:"title"},[e._v(e._s(e.data.title))]),e._v(" "),t("div",{staticClass:"html"},[t("p",{staticClass:"typo",domProps:{innerHTML:e._s(e.data.body)}})])])])]):t("div",{staticClass:"loading"},[t("div",{staticClass:"panel"},[e._v("加载中...")])])])},staticRenderFns:[]}}});
//# sourceMappingURL=2.64b3d23f46d70cdf036f.js.map