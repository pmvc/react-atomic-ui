if(!self.define){let s,e={};const d=(d,n)=>(d=new URL(d+".js",n).href,e[d]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=d,s.onload=e,document.head.appendChild(s)}else s=d,importScripts(d),e()})).then((()=>{let s=e[d];if(!s)throw new Error(`Module ${d} didn’t register its module`);return s})));self.define=(n,l)=>{const u=s||("document"in self?document.currentScript.src:"")||location.href;if(e[u])return;let f={};const r=s=>d(s,u),i={module:{uri:u},exports:f,require:r};e[u]=Promise.all(n.map((s=>i[s]||r(s)))).then((s=>(l(...s),f)))}}define(["./workbox-82da6cfc"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"/assets/../index.html",revision:"ae62d9589dba29bb4b094ca446f6d456"},{url:"/assets/0.18f09ddcd2f66a4c51bf.bundle.js",revision:null},{url:"/assets/1.18f09ddcd2f66a4c51bf.bundle.js",revision:null},{url:"/assets/10.18f09ddcd2f66a4c51bf.bundle.js",revision:null},{url:"/assets/11.18f09ddcd2f66a4c51bf.bundle.js",revision:null},{url:"/assets/12.18f09ddcd2f66a4c51bf.bundle.js",revision:null},{url:"/assets/13.18f09ddcd2f66a4c51bf.bundle.js",revision:null},{url:"/assets/14.18f09ddcd2f66a4c51bf.bundle.js",revision:null},{url:"/assets/15.18f09ddcd2f66a4c51bf.bundle.js",revision:null},{url:"/assets/16.18f09ddcd2f66a4c51bf.bundle.js",revision:null},{url:"/assets/17.18f09ddcd2f66a4c51bf.bundle.js",revision:null},{url:"/assets/18.18f09ddcd2f66a4c51bf.bundle.js",revision:null},{url:"/assets/19.18f09ddcd2f66a4c51bf.bundle.js",revision:null},{url:"/assets/20.18f09ddcd2f66a4c51bf.bundle.js",revision:null},{url:"/assets/21.18f09ddcd2f66a4c51bf.bundle.js",revision:null},{url:"/assets/22.18f09ddcd2f66a4c51bf.bundle.js",revision:null},{url:"/assets/23.18f09ddcd2f66a4c51bf.bundle.js",revision:null},{url:"/assets/24.18f09ddcd2f66a4c51bf.bundle.js",revision:null},{url:"/assets/4.18f09ddcd2f66a4c51bf.bundle.js",revision:null},{url:"/assets/5.18f09ddcd2f66a4c51bf.bundle.js",revision:null},{url:"/assets/6.18f09ddcd2f66a4c51bf.bundle.js",revision:null},{url:"/assets/7.18f09ddcd2f66a4c51bf.bundle.js",revision:null},{url:"/assets/8.18f09ddcd2f66a4c51bf.bundle.js",revision:null},{url:"/assets/9.18f09ddcd2f66a4c51bf.bundle.js",revision:null},{url:"/assets/dagre.bundle.worker.js",revision:"2e1dffda33296f093f92d2cb1fed326c"},{url:"/assets/main.bundle.js",revision:"8790d0fb3582d94cb869d85b27c0c31c"},{url:"/assets/vendor.bundle.js",revision:"2f2cc5e23ae89923c11189d60ca2bd9b"},{url:"/assets/worker.bundle.worker.js",revision:"746625e68ef5f03f79773d994e971c2e"}],{ignoreURLParametersMatching:[/.*/]}),s.cleanupOutdatedCaches(),s.registerRoute(/^(http)(s)?(\:\/\/).*\.(?:css)$/,new s.CacheFirst({cacheName:"css",plugins:[new s.ExpirationPlugin({maxEntries:10})]}),"GET"),s.registerRoute(/^(http)(s)?(\:\/\/).*\.(?:env|md|json|adoc)/,new s.CacheFirst({cacheName:"data",plugins:[new s.ExpirationPlugin({maxEntries:5})]}),"GET"),s.registerRoute(/^(http)(s)?(\:\/\/).*\/(?:env)/,new s.CacheFirst({cacheName:"env",plugins:[new s.ExpirationPlugin({maxEntries:5})]}),"GET")}));
