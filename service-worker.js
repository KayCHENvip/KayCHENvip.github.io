if(!self.define){let e,i={};const d=(d,c)=>(d=new URL(d+".js",c).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(c,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let a={};const l=e=>d(e,r),f={module:{uri:r},exports:a,require:l};i[r]=Promise.all(c.map((e=>f[e]||l(e)))).then((e=>(s(...e),a)))}}define(["./workbox-c2bc8b5b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2023/07/16/hello-world/index.html",revision:"15d5c115c9591c804644092a27a37a70"},{url:"2023/07/16/python文件删除系统/index.html",revision:"faa8c89abd747eee86e485e637448252"},{url:"archives/2023/07/index.html",revision:"4befe05f2748c9ffb6c992f705b2b700"},{url:"archives/2023/index.html",revision:"7b21f50c57db9f6711290394db455ca2"},{url:"archives/index.html",revision:"57a746c23d5736a07d6a9b7f8487f0c1"},{url:"categories/index.html",revision:"7f00a516e7d577b6d120b081c7343971"},{url:"categories/好活/index.html",revision:"807839b6bf3ee41e3e0614be2f9fc9d1"},{url:"comment/index.html",revision:"18fd8f8d760c86528b2b97f46775da8c"},{url:"css/index.css",revision:"922df2000790abf1865e4d2a0487f86b"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"gallery/index.html",revision:"f2191653c45e599f55e9ea730180cca8"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/alipay.jpg",revision:"106f26a2c1cec7d004e0c38789c154ee"},{url:"img/favicon.png",revision:"aa0ce99d298e6f00363d29b6d5717c77"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/wechat.jpg",revision:"bcb34b9a30c33296b3e5c6694f642361"},{url:"index.html",revision:"7c3e20c36ecc48aa5b41cbaffac6e005"},{url:"js/main.js",revision:"c1abc98ff6aa69f598f43b8604fb7b3e"},{url:"js/search/algolia.js",revision:"5e2a2c65f28bddbb3d94529453e91716"},{url:"js/search/local-search.js",revision:"2e3ff3d156bb208f752d95375ebca557"},{url:"js/tw_cn.js",revision:"fd395fc3b4df9c7da17e730d173cfbea"},{url:"js/utils.js",revision:"2fd35bd141fd541a188ef52dd30108d5"},{url:"link/index.html",revision:"e94470280b2d9197aa9ea4fc92265411"},{url:"live2d-widget/assets/screenshot-1.png",revision:"30b70e6cd9be9812adcb347536f0da85"},{url:"live2d-widget/assets/screenshot-2.png",revision:"1295844e29a6d6dc3a4aa0db8faa7da7"},{url:"live2d-widget/assets/screenshot-3.png",revision:"4aa1995daf77bc19803648fe6a65c33e"},{url:"live2d-widget/autoload.js",revision:"a1cce74b48eea6cdd15a9567f04065be"},{url:"live2d-widget/demo/demo.html",revision:"141482d5569a35aec669d6b111908c58"},{url:"live2d-widget/demo/login.html",revision:"bf42aaf8b22335b60412591922b85210"},{url:"live2d-widget/live2d.min.js",revision:"ee7efff8ff5d1d4bd4a0ff99affd3ec7"},{url:"live2d-widget/README.en.html",revision:"adc7d9bacfbef2bc60afd113947b2119"},{url:"live2d-widget/README.html",revision:"63a1ce5163917efeaec1c2cdfc13ced5"},{url:"live2d-widget/rollup.config.js",revision:"171b7912f3e5340c9fc61251ef193bd1"},{url:"live2d-widget/src/index.js",revision:"327f309d88198834dd4bd2fe6a606dc5"},{url:"live2d-widget/src/message.js",revision:"5f980402bfc065345253e6ce024dc1de"},{url:"live2d-widget/src/model.js",revision:"b5562a236eeda01308e5a4107e6ec80f"},{url:"live2d-widget/src/tools.js",revision:"fda693610457903a19c3861298fb416a"},{url:"live2d-widget/src/utils.js",revision:"2578501ad87a8d99ceec05d79fe2c64b"},{url:"live2d-widget/src/waifu-tips.js",revision:"e49236cc73dbcfda841588bba50dbfd3"},{url:"live2d-widget/waifu-tips.js",revision:"7ef813587dba0e4bc55c7ccafcaea531"},{url:"live2d-widget/waifu.css",revision:"7b2e3721ddc81c7073476f750af0923f"},{url:"music/index.html",revision:"d767342c35631da085fe1d027daa2faf"},{url:"tags/index.html",revision:"019544becde0c8988d144f6653e83d03"},{url:"tags/教程/index.html",revision:"024811643ef4ccde06ce970e9a098f1e"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
