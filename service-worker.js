if(!self.define){let e,i={};const c=(c,r)=>(c=new URL(c+".js",r).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(r,s)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let a={};const f=e=>c(e,d),n={module:{uri:d},exports:a,require:f};i[d]=Promise.all(r.map((e=>n[e]||f(e)))).then((e=>(s(...e),a)))}}define(["./workbox-c2bc8b5b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2023/07/16/hello-world/index.html",revision:"9deacf9bcab9ff08231f5113f1a428a8"},{url:"archives/2023/07/index.html",revision:"bee30e0520e73604f9eb0242026ad6e6"},{url:"archives/2023/index.html",revision:"69b582c0955218b3bf01149f728c276e"},{url:"archives/index.html",revision:"6bd12c9eaee4201bbff53f88b0c891fc"},{url:"categories/index.html",revision:"3c79aec19a4f11918f9a7991a5901acc"},{url:"categories/好活/index.html",revision:"55cde1b669870dedafe9ecf0a6c24f12"},{url:"css/index.css",revision:"b8bed18aad070e23c7675e3b37ee4af0"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"gallery/index.html",revision:"fecf0a15c43b623eb4dc25c450010e08"},{url:"gallery/ohmygirl/index.html",revision:"99e6a5a77b7ad468097f02b47e60ef83"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/alipay.jpg",revision:"106f26a2c1cec7d004e0c38789c154ee"},{url:"img/favicon.png",revision:"aa0ce99d298e6f00363d29b6d5717c77"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/wechat.jpg",revision:"bcb34b9a30c33296b3e5c6694f642361"},{url:"index.html",revision:"58e15b9da25e88333462ae61f8169788"},{url:"js/main.js",revision:"c1abc98ff6aa69f598f43b8604fb7b3e"},{url:"js/search/algolia.js",revision:"5e2a2c65f28bddbb3d94529453e91716"},{url:"js/search/local-search.js",revision:"2e3ff3d156bb208f752d95375ebca557"},{url:"js/tw_cn.js",revision:"fd395fc3b4df9c7da17e730d173cfbea"},{url:"js/utils.js",revision:"2fd35bd141fd541a188ef52dd30108d5"},{url:"link/index.html",revision:"b14c445ae79686974e0c1a6cc8e93363"},{url:"music/index.html",revision:"2b8bfeac3dbd312ea80b7f9853c794de"},{url:"tags/index.html",revision:"4d2356ca9ac94830a6994f0a9600a78b"},{url:"tags/教程/index.html",revision:"333bcb46f82ddf33c3a1d866fc6eff69"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
