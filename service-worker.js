if(!self.define){let e,i={};const d=(d,c)=>(d=new URL(d+".js",c).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(c,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let a={};const f=e=>d(e,r),l={module:{uri:r},exports:a,require:f};i[r]=Promise.all(c.map((e=>l[e]||f(e)))).then((e=>(s(...e),a)))}}define(["./workbox-c2bc8b5b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2023/07/16/python文件删除系统/index.html",revision:"393a5bffd44807ad287d962b18a317d3"},{url:"2023/08/03/VS2022/index.html",revision:"7804f9c39dc0f9aea9605856b42486f0"},{url:"2023/08/03/window设置开机启动/index.html",revision:"10a777659b4fc5816d212320b1bea6d0"},{url:"2023/09/16/中文乱码/index.html",revision:"401226f22aee8dc441076bf227eaac45"},{url:"2023/10/10/Comodo防护软件的正确使用/index.html",revision:"c587014c58163e049ef17e3ebf4592f3"},{url:"2023/10/11/Comodo Internet Security 5.0 免費防毒防火牆軟體新手上手教學/index.html",revision:"8f6e9f5c0568ac5a3c64bfff8dc524b6"},{url:"2023/10/17/新建 Markdown/index.html",revision:"e13b3dfa9d2666e66be107b960fc12cc"},{url:"archives/2023/07/index.html",revision:"dc9f0893a690cfe9f087441f4db0e7cc"},{url:"archives/2023/08/index.html",revision:"0c9d54d2bea962109b01a0937bb5e7b9"},{url:"archives/2023/09/index.html",revision:"2fe27519ba0837609a6a60124c4da8f4"},{url:"archives/2023/10/index.html",revision:"7e98e13774f4065590c815e6b2cfbace"},{url:"archives/2023/index.html",revision:"b5998d0843c528961d2f1765346c9a43"},{url:"archives/index.html",revision:"d8e151bcf01cb61038250005392ea3c3"},{url:"categories/index.html",revision:"83e449f652426902ba50ef97cd0c5d20"},{url:"categories/娱乐/index.html",revision:"9a425b9e9c9bf12768e33fa1d379ddd0"},{url:"categories/工具/index.html",revision:"5e9384871b59a17ec5af9bd02a7d2afe"},{url:"categories/教程/index.html",revision:"e8de60cd13282cbd826171c2c4bccf72"},{url:"categories/编程/index.html",revision:"b3bff7e9aa06d3e951dc05c197bec0b6"},{url:"comment/index.html",revision:"1d1308fab5e5f01819cc0aea1b2557f1"},{url:"css/1.css",revision:"ac189803a084b2a056d27368c7c9dbc0"},{url:"css/123.css",revision:"f9d64d89c6df12e699b1282932a01cac"},{url:"css/index.css",revision:"eb22504d8093a84254f2a03bb969cb75"},{url:"css/my.css",revision:"29943dd5ac0eb931848db1d2b384bd74"},{url:"css/progress_bar.css",revision:"835e6017d8958b40a35eadc2c1510896"},{url:"css/rightMenu.css",revision:"0831549fae56a6a3f5f4a02736bbca60"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"gallery/index.html",revision:"a82150f69fcbaf1ce82531499d99ecdb"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/alipay.jpg",revision:"106f26a2c1cec7d004e0c38789c154ee"},{url:"img/favicon.png",revision:"2e3c2b3f3a964c83665bf53cb1fda0bf"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/wechat.jpg",revision:"bcb34b9a30c33296b3e5c6694f642361"},{url:"index.html",revision:"7ee977242bbed0330c0781954a9d35e6"},{url:"js/jelly.js",revision:"7a7cf46c4b690d9466c481a664da7487"},{url:"js/main.js",revision:"c1abc98ff6aa69f598f43b8604fb7b3e"},{url:"js/rightMenu.js",revision:"4a9be693ecb9b73f01bb24e303d671f3"},{url:"js/search/algolia.js",revision:"5e2a2c65f28bddbb3d94529453e91716"},{url:"js/search/local-search.js",revision:"2e3ff3d156bb208f752d95375ebca557"},{url:"js/tw_cn.js",revision:"fd395fc3b4df9c7da17e730d173cfbea"},{url:"js/utils.js",revision:"2fd35bd141fd541a188ef52dd30108d5"},{url:"link/index.html",revision:"38f851ad8cb0dc2f981f2705dfc0cd9e"},{url:"live2d-widget/assets/screenshot-1.png",revision:"30b70e6cd9be9812adcb347536f0da85"},{url:"live2d-widget/assets/screenshot-2.png",revision:"1295844e29a6d6dc3a4aa0db8faa7da7"},{url:"live2d-widget/assets/screenshot-3.png",revision:"4aa1995daf77bc19803648fe6a65c33e"},{url:"live2d-widget/autoload.js",revision:"a1cce74b48eea6cdd15a9567f04065be"},{url:"live2d-widget/demo/demo.html",revision:"141482d5569a35aec669d6b111908c58"},{url:"live2d-widget/demo/login.html",revision:"bf42aaf8b22335b60412591922b85210"},{url:"live2d-widget/live2d.min.js",revision:"ee7efff8ff5d1d4bd4a0ff99affd3ec7"},{url:"live2d-widget/README.en.html",revision:"adc7d9bacfbef2bc60afd113947b2119"},{url:"live2d-widget/README.html",revision:"63a1ce5163917efeaec1c2cdfc13ced5"},{url:"live2d-widget/rollup.config.js",revision:"171b7912f3e5340c9fc61251ef193bd1"},{url:"live2d-widget/src/index.js",revision:"327f309d88198834dd4bd2fe6a606dc5"},{url:"live2d-widget/src/message.js",revision:"5f980402bfc065345253e6ce024dc1de"},{url:"live2d-widget/src/model.js",revision:"b5562a236eeda01308e5a4107e6ec80f"},{url:"live2d-widget/src/tools.js",revision:"fda693610457903a19c3861298fb416a"},{url:"live2d-widget/src/utils.js",revision:"2578501ad87a8d99ceec05d79fe2c64b"},{url:"live2d-widget/src/waifu-tips.js",revision:"e49236cc73dbcfda841588bba50dbfd3"},{url:"live2d-widget/waifu-tips.js",revision:"7ef813587dba0e4bc55c7ccafcaea531"},{url:"live2d-widget/waifu.css",revision:"7b2e3721ddc81c7073476f750af0923f"},{url:"music/index.html",revision:"cb53223bddc6900a4f3876b857cf5765"},{url:"tags/index.html",revision:"bd003b85f0828765eeba62c323bdd71e"},{url:"tags/python/index.html",revision:"ab0899716ca56f59b276ee99505a668f"},{url:"tags/win11/index.html",revision:"01789a4fa7f363cf5d5832b13ad3f3c8"},{url:"tags/教程/index.html",revision:"31bcea5b9a0a9568948dead23af8a8f4"},{url:"tags/资源/index.html",revision:"23afe83af79cf0369feab2e764fa1a8b"},{url:"tags/防火墙/index.html",revision:"0acfae32bc8e008395e511730d085d60"},{url:"user/index.html",revision:"fbdf6db2a3e1e645cf28e849c1df2144"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
