if(!self.define){let e,s={};const n=(n,l)=>(n=new URL(n+".js",l).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(l,a)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(s[f])return;let u={};const r=e=>n(e,f),i={module:{uri:f},exports:u,require:r};s[f]=Promise.all(l.map((e=>i[e]||r(e)))).then((e=>(a(...e),u)))}}define(["./workbox-840c4745"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/assets/../index.html",revision:"ae62d9589dba29bb4b094ca446f6d456"},{url:"/assets/0.b7cf74eaac24fd3751f2.bundle.js",revision:null},{url:"/assets/1.b7cf74eaac24fd3751f2.bundle.js",revision:null},{url:"/assets/10.b7cf74eaac24fd3751f2.bundle.js",revision:null},{url:"/assets/11.b7cf74eaac24fd3751f2.bundle.js",revision:null},{url:"/assets/12.b7cf74eaac24fd3751f2.bundle.js",revision:null},{url:"/assets/13.b7cf74eaac24fd3751f2.bundle.js",revision:null},{url:"/assets/14.b7cf74eaac24fd3751f2.bundle.js",revision:null},{url:"/assets/15.b7cf74eaac24fd3751f2.bundle.js",revision:null},{url:"/assets/16.b7cf74eaac24fd3751f2.bundle.js",revision:null},{url:"/assets/17.b7cf74eaac24fd3751f2.bundle.js",revision:null},{url:"/assets/18.b7cf74eaac24fd3751f2.bundle.js",revision:null},{url:"/assets/19.b7cf74eaac24fd3751f2.bundle.js",revision:null},{url:"/assets/20.b7cf74eaac24fd3751f2.bundle.js",revision:null},{url:"/assets/21.b7cf74eaac24fd3751f2.bundle.js",revision:null},{url:"/assets/22.b7cf74eaac24fd3751f2.bundle.js",revision:null},{url:"/assets/23.b7cf74eaac24fd3751f2.bundle.js",revision:null},{url:"/assets/24.b7cf74eaac24fd3751f2.bundle.js",revision:null},{url:"/assets/4.b7cf74eaac24fd3751f2.bundle.js",revision:null},{url:"/assets/5.b7cf74eaac24fd3751f2.bundle.js",revision:null},{url:"/assets/6.b7cf74eaac24fd3751f2.bundle.js",revision:null},{url:"/assets/7.b7cf74eaac24fd3751f2.bundle.js",revision:null},{url:"/assets/8.b7cf74eaac24fd3751f2.bundle.js",revision:null},{url:"/assets/9.b7cf74eaac24fd3751f2.bundle.js",revision:null},{url:"/assets/dagre.bundle.worker.js",revision:"2e1dffda33296f093f92d2cb1fed326c"},{url:"/assets/main.bundle.js",revision:"85f81098fafb280e718bc830ba517e0a"},{url:"/assets/vendor.bundle.js",revision:"a01074ba7c289f416fdc23f0f3c7ece4"},{url:"/assets/worker.bundle.worker.js",revision:"746625e68ef5f03f79773d994e971c2e"}],{ignoreURLParametersMatching:[/.*/]}),e.cleanupOutdatedCaches(),e.registerRoute(/^(http)(s)?(\:\/\/).*\.(?:css)$/,new e.CacheFirst({cacheName:"css",plugins:[new e.ExpirationPlugin({maxEntries:10})]}),"GET"),e.registerRoute(/^(http)(s)?(\:\/\/).*\.(?:env|md|json|adoc)/,new e.CacheFirst({cacheName:"data",plugins:[new e.ExpirationPlugin({maxEntries:5})]}),"GET"),e.registerRoute(/^(http)(s)?(\:\/\/).*\/(?:env)/,new e.CacheFirst({cacheName:"env",plugins:[new e.ExpirationPlugin({maxEntries:5})]}),"GET")}));
