if(!self.define){let e,i={};const d=(d,c)=>(d=new URL(d+".js",c).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(c,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let a={};const f=e=>d(e,r),l={module:{uri:r},exports:a,require:f};i[r]=Promise.all(c.map((e=>l[e]||f(e)))).then((e=>(s(...e),a)))}}define(["./workbox-c2bc8b5b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2023/07/16/python文件删除系统/index.html",revision:"71331ec38ab9f034a91e158b5fb17445"},{url:"2023/08/03/VS2022/index.html",revision:"db9ec3c93a5d16afd60cb4e77753c8f0"},{url:"2023/08/03/window设置开机启动/index.html",revision:"5baeb7e8e088096f48dc77f32b648525"},{url:"2023/08/03/新建 Markdown/index.html",revision:"e9d78a8afbd8b8d0afc524b051b3a0e5"},{url:"2023/09/16/中文乱码/index.html",revision:"d3b05e51b5f51e07852549dd302c699e"},{url:"2023/10/10/Comodo防护软件的正确使用/index.html",revision:"3c10a59409026c4d51e05a841d3d0f2b"},{url:"2023/10/11/Comodo Internet Security 5.0 免費防毒防火牆軟體新手上手教學/index.html",revision:"4fbc3be4387777faedfcc5c1e5aea347"},{url:"archives/2023/07/index.html",revision:"a87d1b5499ccfc64f91f2da6fdfa82d4"},{url:"archives/2023/08/index.html",revision:"707fa57977ae289b5440060f3d46e677"},{url:"archives/2023/09/index.html",revision:"89b50b7b7dff6a17de2c5e41bfca597f"},{url:"archives/2023/10/index.html",revision:"b1b3f733aefb98672b7cfb98535f46fa"},{url:"archives/2023/index.html",revision:"b7ec93aa2dd26f956da6c076b698b1ea"},{url:"archives/index.html",revision:"ce34680c4bb2de9860f891b17e50c8b7"},{url:"categories/index.html",revision:"35ee7ae9b266dcf7482b12ab0715e85b"},{url:"categories/娱乐/index.html",revision:"7d1eebe5e1fb69ab5173ef02357dc4a7"},{url:"categories/工具/index.html",revision:"077bdee094d215e5ac3e11d24bcc53f7"},{url:"categories/教程/index.html",revision:"aa9b99f12b1922e4b1fb1143aa244ab6"},{url:"categories/编程/index.html",revision:"ad7044c6e5536d40f1831beb298773fc"},{url:"categories/�̳�/index.html",revision:"c24aed72ec8fb968ff1674f24c891efd"},{url:"comment/index.html",revision:"ce5623d7009229981ad9a8f940a805c1"},{url:"css/1.css",revision:"ac189803a084b2a056d27368c7c9dbc0"},{url:"css/123.css",revision:"f9d64d89c6df12e699b1282932a01cac"},{url:"css/index.css",revision:"2294d9da772448f2996035e42976253d"},{url:"css/my.css",revision:"29943dd5ac0eb931848db1d2b384bd74"},{url:"css/progress_bar.css",revision:"835e6017d8958b40a35eadc2c1510896"},{url:"css/rightMenu.css",revision:"0831549fae56a6a3f5f4a02736bbca60"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"gallery/index.html",revision:"6084dbc17de6854b562869babd0e72b3"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/alipay.jpg",revision:"106f26a2c1cec7d004e0c38789c154ee"},{url:"img/favicon.png",revision:"2e3c2b3f3a964c83665bf53cb1fda0bf"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/wechat.jpg",revision:"bcb34b9a30c33296b3e5c6694f642361"},{url:"index.html",revision:"0573814c6722b88c8009e4bffa908faf"},{url:"js/jelly.js",revision:"7a7cf46c4b690d9466c481a664da7487"},{url:"js/main.js",revision:"c1abc98ff6aa69f598f43b8604fb7b3e"},{url:"js/rightMenu.js",revision:"4a9be693ecb9b73f01bb24e303d671f3"},{url:"js/search/algolia.js",revision:"5e2a2c65f28bddbb3d94529453e91716"},{url:"js/search/local-search.js",revision:"2e3ff3d156bb208f752d95375ebca557"},{url:"js/tw_cn.js",revision:"fd395fc3b4df9c7da17e730d173cfbea"},{url:"js/utils.js",revision:"2fd35bd141fd541a188ef52dd30108d5"},{url:"link/index.html",revision:"61f0ef947e8cf4eb44d2e74a8a2da37e"},{url:"live2d-widget/assets/screenshot-1.png",revision:"30b70e6cd9be9812adcb347536f0da85"},{url:"live2d-widget/assets/screenshot-2.png",revision:"1295844e29a6d6dc3a4aa0db8faa7da7"},{url:"live2d-widget/assets/screenshot-3.png",revision:"4aa1995daf77bc19803648fe6a65c33e"},{url:"live2d-widget/autoload.js",revision:"a1cce74b48eea6cdd15a9567f04065be"},{url:"live2d-widget/demo/demo.html",revision:"141482d5569a35aec669d6b111908c58"},{url:"live2d-widget/demo/login.html",revision:"bf42aaf8b22335b60412591922b85210"},{url:"live2d-widget/live2d.min.js",revision:"ee7efff8ff5d1d4bd4a0ff99affd3ec7"},{url:"live2d-widget/README.en.html",revision:"adc7d9bacfbef2bc60afd113947b2119"},{url:"live2d-widget/README.html",revision:"63a1ce5163917efeaec1c2cdfc13ced5"},{url:"live2d-widget/rollup.config.js",revision:"171b7912f3e5340c9fc61251ef193bd1"},{url:"live2d-widget/src/index.js",revision:"327f309d88198834dd4bd2fe6a606dc5"},{url:"live2d-widget/src/message.js",revision:"5f980402bfc065345253e6ce024dc1de"},{url:"live2d-widget/src/model.js",revision:"b5562a236eeda01308e5a4107e6ec80f"},{url:"live2d-widget/src/tools.js",revision:"fda693610457903a19c3861298fb416a"},{url:"live2d-widget/src/utils.js",revision:"2578501ad87a8d99ceec05d79fe2c64b"},{url:"live2d-widget/src/waifu-tips.js",revision:"e49236cc73dbcfda841588bba50dbfd3"},{url:"live2d-widget/waifu-tips.js",revision:"7ef813587dba0e4bc55c7ccafcaea531"},{url:"live2d-widget/waifu.css",revision:"7b2e3721ddc81c7073476f750af0923f"},{url:"music/index.html",revision:"eff29f2c8c0e28c1ddf9add9fb8f5e3b"},{url:"tags/index.html",revision:"cb29105842996eb55b7315081cf8d38f"},{url:"tags/python/index.html",revision:"b13db167a94195ce5fd4323494fc82c5"},{url:"tags/win11/index.html",revision:"32521452d5f53450d67cb60c73a3adef"},{url:"tags/教程/index.html",revision:"ecdf88c963f2e8a105cd7f67a40fda90"},{url:"tags/资源/index.html",revision:"a1f56737dc805c1433fa8fab0c5448a6"},{url:"tags/防火墙/index.html",revision:"5069b0a15106f8e6453e357e45ee2dee"},{url:"user/index.html",revision:"880325e030b2bc91a19cb6c0aca15d5d"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
