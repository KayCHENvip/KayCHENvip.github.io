if(!self.define){let e,i={};const r=(r,d)=>(r=new URL(r+".js",d).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(d,c)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let f={};const a=e=>r(e,s),n={module:{uri:s},exports:f,require:a};i[s]=Promise.all(d.map((e=>n[e]||a(e)))).then((e=>(c(...e),f)))}}define(["./workbox-c2bc8b5b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2023/07/16/hello-world/index.html",revision:"9deacf9bcab9ff08231f5113f1a428a8"},{url:"archives/2023/07/index.html",revision:"d5843925422870f6bed349a449a2fd5d"},{url:"archives/2023/index.html",revision:"648376b44edbf9b969a0659f38c0f2f7"},{url:"archives/index.html",revision:"35f9e794202e640fb581a2417f42708f"},{url:"categories/index.html",revision:"890a938fc036495774fac1fbfbe15a98"},{url:"categories/好活/index.html",revision:"d4d3c107bd46772ae5f8a82700340857"},{url:"css/index.css",revision:"b8bed18aad070e23c7675e3b37ee4af0"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"gallery/index.html",revision:"2b179ca77260adb2cbf5ecc347670303"},{url:"gallery/kk/index.html",revision:"e5bb82294e287316fa25a4cf4ac34774"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/alipay.jpg",revision:"106f26a2c1cec7d004e0c38789c154ee"},{url:"img/favicon.png",revision:"aa0ce99d298e6f00363d29b6d5717c77"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/wechat.jpg",revision:"bcb34b9a30c33296b3e5c6694f642361"},{url:"index.html",revision:"20467433da62513b3d956b01bf6d664b"},{url:"js/main.js",revision:"c1abc98ff6aa69f598f43b8604fb7b3e"},{url:"js/search/algolia.js",revision:"5e2a2c65f28bddbb3d94529453e91716"},{url:"js/search/local-search.js",revision:"2e3ff3d156bb208f752d95375ebca557"},{url:"js/tw_cn.js",revision:"fd395fc3b4df9c7da17e730d173cfbea"},{url:"js/utils.js",revision:"2fd35bd141fd541a188ef52dd30108d5"},{url:"link/index.html",revision:"541d14445c1e1ed16cd51871f77e0dee"},{url:"music/index.html",revision:"e05456fcff24438f6e4d4f0afccd932d"},{url:"tags/index.html",revision:"090a7a17a20c5f46bee08e9ba6bacc07"},{url:"tags/教程/index.html",revision:"c4129ada9a2dffe86798618b0dfbad51"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
