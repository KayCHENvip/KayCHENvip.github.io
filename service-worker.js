if(!self.define){let e,i={};const c=(c,r)=>(c=new URL(c+".js",r).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(r,d)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let a={};const n=e=>c(e,s),l={module:{uri:s},exports:a,require:n};i[s]=Promise.all(r.map((e=>l[e]||n(e)))).then((e=>(d(...e),a)))}}define(["./workbox-c2bc8b5b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2023/07/16/hello-world/index.html",revision:"9deacf9bcab9ff08231f5113f1a428a8"},{url:"archives/2023/07/index.html",revision:"9e79a2a43032a10ee76ccfab0a9e8d60"},{url:"archives/2023/index.html",revision:"196d3ddb09fae8a773d5e78de03f7edf"},{url:"archives/index.html",revision:"c140b34455a8a50fe30106fa17b5b749"},{url:"categories/index.html",revision:"d76c7fe68ded31440c2f2016e5587dfa"},{url:"categories/好活/index.html",revision:"6b5841e1fc083de3988c72a33c3c909f"},{url:"css/index.css",revision:"b8bed18aad070e23c7675e3b37ee4af0"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"gallery/index.html",revision:"e6beaed3071d6b170424e90fd2bc7b9e"},{url:"gallery/k/index.html",revision:"5816f1ceb005c912d78064ca25ce3040"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/alipay.jpg",revision:"106f26a2c1cec7d004e0c38789c154ee"},{url:"img/favicon.png",revision:"aa0ce99d298e6f00363d29b6d5717c77"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/wechat.jpg",revision:"bcb34b9a30c33296b3e5c6694f642361"},{url:"index.html",revision:"ed62eae70fcec6c26cb02057890a153e"},{url:"js/main.js",revision:"c1abc98ff6aa69f598f43b8604fb7b3e"},{url:"js/search/algolia.js",revision:"5e2a2c65f28bddbb3d94529453e91716"},{url:"js/search/local-search.js",revision:"2e3ff3d156bb208f752d95375ebca557"},{url:"js/tw_cn.js",revision:"fd395fc3b4df9c7da17e730d173cfbea"},{url:"js/utils.js",revision:"2fd35bd141fd541a188ef52dd30108d5"},{url:"link/index.html",revision:"e6b8c773324fde69cd626de47d9832b0"},{url:"music/index.html",revision:"d282ba4bb341bcabaa5180a73776637d"},{url:"tags/index.html",revision:"38a64739a957e64b036face5a3f6ca68"},{url:"tags/教程/index.html",revision:"c805aaf11713890a5c41b32890ef2082"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
