if(!self.define){let e,i={};const d=(d,c)=>(d=new URL(d+".js",c).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(c,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let a={};const f=e=>d(e,r),l={module:{uri:r},exports:a,require:f};i[r]=Promise.all(c.map((e=>l[e]||f(e)))).then((e=>(s(...e),a)))}}define(["./workbox-c2bc8b5b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2023/07/16/python文件删除系统/index.html",revision:"d0dbe700b30977c92c62b0a26d8f814b"},{url:"2023/08/03/VS2022/index.html",revision:"59dabd0bbbc1e23eb16e01c7f3814fa1"},{url:"2023/08/03/window设置开机启动/index.html",revision:"89c0fd2cf17ae719b464209b2e043f19"},{url:"2023/09/16/中文乱码/index.html",revision:"f475152f44c32a4f7b0ba7db2d1c03be"},{url:"2023/10/10/Comodo防护软件的正确使用/index.html",revision:"a8249f1dfcf4a8ad9cb0371ef07196e4"},{url:"2023/10/11/Comodo Internet Security 5.0 免費防毒防火牆軟體新手上手教學/index.html",revision:"59350e6862aec4679cf308a998c8e25f"},{url:"2023/10/17/新建 Markdown/index.html",revision:"ef9d4a11911104bbd8551a6178075f43"},{url:"archives/2023/07/index.html",revision:"14f7fd698041687d63d92b7f27b8b1fd"},{url:"archives/2023/08/index.html",revision:"d9ce970985a4b0e370297d2667d25787"},{url:"archives/2023/09/index.html",revision:"f2b31772c145edda5790719f578a2af8"},{url:"archives/2023/10/index.html",revision:"5df118cc97896b2cfcc2ef6a0be819bf"},{url:"archives/2023/index.html",revision:"8e9becc94e6ee965fbe4a0aaf2d1b3c2"},{url:"archives/index.html",revision:"089e5d6fdc25c0d47369a4758d5a6aef"},{url:"categories/index.html",revision:"14986d0fbc2f96aacbae328d279c23ff"},{url:"categories/娱乐/index.html",revision:"2db64d20ed2590ae15138fdbf90714e0"},{url:"categories/工具/index.html",revision:"05b4b516033ba3fbebc1cd80e1ae5d91"},{url:"categories/教程/index.html",revision:"f3fea6bb1f31d8a43f312a6d2159e9ef"},{url:"categories/编程/index.html",revision:"793607ab5713ec3901f786e3aa9f91de"},{url:"comment/index.html",revision:"7658e92e3c3fa1c6f5b4276803395fc1"},{url:"css/1.css",revision:"ac189803a084b2a056d27368c7c9dbc0"},{url:"css/123.css",revision:"f9d64d89c6df12e699b1282932a01cac"},{url:"css/index.css",revision:"eb22504d8093a84254f2a03bb969cb75"},{url:"css/my.css",revision:"29943dd5ac0eb931848db1d2b384bd74"},{url:"css/progress_bar.css",revision:"835e6017d8958b40a35eadc2c1510896"},{url:"css/rightMenu.css",revision:"0831549fae56a6a3f5f4a02736bbca60"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"gallery/index.html",revision:"b6a51d94e7f76180830fd769801eb889"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/alipay.jpg",revision:"106f26a2c1cec7d004e0c38789c154ee"},{url:"img/favicon.png",revision:"2e3c2b3f3a964c83665bf53cb1fda0bf"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/wechat.jpg",revision:"bcb34b9a30c33296b3e5c6694f642361"},{url:"index.html",revision:"c4e5631d98dd04e58186ee2290ac0c74"},{url:"js/jelly.js",revision:"7a7cf46c4b690d9466c481a664da7487"},{url:"js/main.js",revision:"c1abc98ff6aa69f598f43b8604fb7b3e"},{url:"js/rightMenu.js",revision:"4a9be693ecb9b73f01bb24e303d671f3"},{url:"js/search/algolia.js",revision:"5e2a2c65f28bddbb3d94529453e91716"},{url:"js/search/local-search.js",revision:"2e3ff3d156bb208f752d95375ebca557"},{url:"js/tw_cn.js",revision:"fd395fc3b4df9c7da17e730d173cfbea"},{url:"js/utils.js",revision:"2fd35bd141fd541a188ef52dd30108d5"},{url:"link/index.html",revision:"fd8c4df40e65bde886149d976fc7d93b"},{url:"live2d-widget/assets/screenshot-1.png",revision:"30b70e6cd9be9812adcb347536f0da85"},{url:"live2d-widget/assets/screenshot-2.png",revision:"1295844e29a6d6dc3a4aa0db8faa7da7"},{url:"live2d-widget/assets/screenshot-3.png",revision:"4aa1995daf77bc19803648fe6a65c33e"},{url:"live2d-widget/autoload.js",revision:"a1cce74b48eea6cdd15a9567f04065be"},{url:"live2d-widget/demo/demo.html",revision:"141482d5569a35aec669d6b111908c58"},{url:"live2d-widget/demo/login.html",revision:"bf42aaf8b22335b60412591922b85210"},{url:"live2d-widget/live2d.min.js",revision:"ee7efff8ff5d1d4bd4a0ff99affd3ec7"},{url:"live2d-widget/README.en.html",revision:"adc7d9bacfbef2bc60afd113947b2119"},{url:"live2d-widget/README.html",revision:"63a1ce5163917efeaec1c2cdfc13ced5"},{url:"live2d-widget/rollup.config.js",revision:"171b7912f3e5340c9fc61251ef193bd1"},{url:"live2d-widget/src/index.js",revision:"327f309d88198834dd4bd2fe6a606dc5"},{url:"live2d-widget/src/message.js",revision:"5f980402bfc065345253e6ce024dc1de"},{url:"live2d-widget/src/model.js",revision:"b5562a236eeda01308e5a4107e6ec80f"},{url:"live2d-widget/src/tools.js",revision:"fda693610457903a19c3861298fb416a"},{url:"live2d-widget/src/utils.js",revision:"2578501ad87a8d99ceec05d79fe2c64b"},{url:"live2d-widget/src/waifu-tips.js",revision:"e49236cc73dbcfda841588bba50dbfd3"},{url:"live2d-widget/waifu-tips.js",revision:"7ef813587dba0e4bc55c7ccafcaea531"},{url:"live2d-widget/waifu.css",revision:"7b2e3721ddc81c7073476f750af0923f"},{url:"music/index.html",revision:"c31cababe78e138b6c599b81cd62cb22"},{url:"tags/index.html",revision:"bdb733e1478bb8caa5f42af1331d46e8"},{url:"tags/python/index.html",revision:"f5dc7b17caca54db99f08ae0c64f1ac8"},{url:"tags/win11/index.html",revision:"52892e7eba6cab6b9a4fa9fe3c3e521a"},{url:"tags/教程/index.html",revision:"4b78e6ac6e2863403bb2a9a266079afd"},{url:"tags/资源/index.html",revision:"61760d2219869238c26526f22049fe2d"},{url:"tags/防火墙/index.html",revision:"a1f8aecdda81e8d3878d9215e1f24279"},{url:"user/index.html",revision:"4e6e0a9d704cf7e7ead322d9640e3e16"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
