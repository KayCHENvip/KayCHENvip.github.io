if(!self.define){let e,i={};const d=(d,c)=>(d=new URL(d+".js",c).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(c,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let a={};const l=e=>d(e,r),f={module:{uri:r},exports:a,require:l};i[r]=Promise.all(c.map((e=>f[e]||l(e)))).then((e=>(s(...e),a)))}}define(["./workbox-c2bc8b5b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2023/07/16/python文件删除系统/index.html",revision:"7e5c287e38723bfda6d07f8ab500c515"},{url:"2023/08/03/VS2022/index.html",revision:"e2d6713bbe64fe991051da4c023f51b5"},{url:"2023/08/03/window设置开机启动/index.html",revision:"6d9b039a120c63cd6880a6ad465891f8"},{url:"2023/09/16/中文乱码/index.html",revision:"2c1f311abeaa48b50636d5f38e353c90"},{url:"2023/10/10/Comodo防护软件的正确使用/index.html",revision:"5fca2131de710c4996163f2284af8c74"},{url:"archives/2023/07/index.html",revision:"5ec4250b860d43d909c5d1a0504d1590"},{url:"archives/2023/08/index.html",revision:"ae35d8ac41b376a8aa6659faeb42ea98"},{url:"archives/2023/09/index.html",revision:"55b40195b99cad111b09235984c1fde4"},{url:"archives/2023/10/index.html",revision:"af46d16fb37a170146253f843ffd6505"},{url:"archives/2023/index.html",revision:"1966eda7c8c6ae621deae3b025f5d00f"},{url:"archives/index.html",revision:"553639bfd238e0ed35f7a279734f3335"},{url:"categories/index.html",revision:"e20810505009412265d8c3343265d0b9"},{url:"categories/工具/index.html",revision:"e4c93fb7aee3f9097bebcc85a4b3b59c"},{url:"categories/教程/index.html",revision:"4bc939f9e61ead956bcda7c3e864b284"},{url:"categories/编程/index.html",revision:"3b8807d312c07f631186247f3b840e4a"},{url:"comment/index.html",revision:"ba9c5bb422b5b3c937cc57e9a18dffea"},{url:"css/1.css",revision:"ac189803a084b2a056d27368c7c9dbc0"},{url:"css/123.css",revision:"f9d64d89c6df12e699b1282932a01cac"},{url:"css/index.css",revision:"2294d9da772448f2996035e42976253d"},{url:"css/my.css",revision:"29943dd5ac0eb931848db1d2b384bd74"},{url:"css/progress_bar.css",revision:"835e6017d8958b40a35eadc2c1510896"},{url:"css/rightMenu.css",revision:"0831549fae56a6a3f5f4a02736bbca60"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"gallery/index.html",revision:"dac506d2ddd6272ef19f1dc46373f3bb"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/alipay.jpg",revision:"106f26a2c1cec7d004e0c38789c154ee"},{url:"img/favicon.png",revision:"2e3c2b3f3a964c83665bf53cb1fda0bf"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/wechat.jpg",revision:"bcb34b9a30c33296b3e5c6694f642361"},{url:"index.html",revision:"71b1b5656e546498cd15c570ebad82f7"},{url:"js/jelly.js",revision:"7a7cf46c4b690d9466c481a664da7487"},{url:"js/main.js",revision:"c1abc98ff6aa69f598f43b8604fb7b3e"},{url:"js/rightMenu.js",revision:"4a9be693ecb9b73f01bb24e303d671f3"},{url:"js/search/algolia.js",revision:"5e2a2c65f28bddbb3d94529453e91716"},{url:"js/search/local-search.js",revision:"2e3ff3d156bb208f752d95375ebca557"},{url:"js/tw_cn.js",revision:"fd395fc3b4df9c7da17e730d173cfbea"},{url:"js/utils.js",revision:"2fd35bd141fd541a188ef52dd30108d5"},{url:"link/index.html",revision:"e64bd880f80b0b4129be0390b8067553"},{url:"live2d-widget/assets/screenshot-1.png",revision:"30b70e6cd9be9812adcb347536f0da85"},{url:"live2d-widget/assets/screenshot-2.png",revision:"1295844e29a6d6dc3a4aa0db8faa7da7"},{url:"live2d-widget/assets/screenshot-3.png",revision:"4aa1995daf77bc19803648fe6a65c33e"},{url:"live2d-widget/autoload.js",revision:"a1cce74b48eea6cdd15a9567f04065be"},{url:"live2d-widget/demo/demo.html",revision:"141482d5569a35aec669d6b111908c58"},{url:"live2d-widget/demo/login.html",revision:"bf42aaf8b22335b60412591922b85210"},{url:"live2d-widget/live2d.min.js",revision:"ee7efff8ff5d1d4bd4a0ff99affd3ec7"},{url:"live2d-widget/README.en.html",revision:"adc7d9bacfbef2bc60afd113947b2119"},{url:"live2d-widget/README.html",revision:"63a1ce5163917efeaec1c2cdfc13ced5"},{url:"live2d-widget/rollup.config.js",revision:"171b7912f3e5340c9fc61251ef193bd1"},{url:"live2d-widget/src/index.js",revision:"327f309d88198834dd4bd2fe6a606dc5"},{url:"live2d-widget/src/message.js",revision:"5f980402bfc065345253e6ce024dc1de"},{url:"live2d-widget/src/model.js",revision:"b5562a236eeda01308e5a4107e6ec80f"},{url:"live2d-widget/src/tools.js",revision:"fda693610457903a19c3861298fb416a"},{url:"live2d-widget/src/utils.js",revision:"2578501ad87a8d99ceec05d79fe2c64b"},{url:"live2d-widget/src/waifu-tips.js",revision:"e49236cc73dbcfda841588bba50dbfd3"},{url:"live2d-widget/waifu-tips.js",revision:"7ef813587dba0e4bc55c7ccafcaea531"},{url:"live2d-widget/waifu.css",revision:"7b2e3721ddc81c7073476f750af0923f"},{url:"music/index.html",revision:"c873e0bffa18d19d65fd20e3599fcf8d"},{url:"tags/index.html",revision:"d011c9c80c4bc6a096833797d093c0cf"},{url:"tags/python/index.html",revision:"ab003938af28992adda9299d8da3435e"},{url:"tags/win11/index.html",revision:"d28265f334ed3c29dfa41c3e0267a7c3"},{url:"tags/教程/index.html",revision:"ac454a10ec01a311fc76686634bcb890"},{url:"tags/资源/index.html",revision:"2930b0457f953a6a7720394f1342d0e5"},{url:"tags/防火墙/index.html",revision:"799c201f4291f80f37c6b9b21529d8f3"},{url:"user/index.html",revision:"5172344ebc7546c4301796f90ba735d1"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
