if(!self.define){let s,e={};const n=(n,l)=>(n=new URL(n+".js",l).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(l,a)=>{const d=s||("document"in self?document.currentScript.src:"")||location.href;if(e[d])return;let u={};const r=s=>n(s,d),i={module:{uri:d},exports:u,require:r};e[d]=Promise.all(l.map((s=>i[s]||r(s)))).then((s=>(a(...s),u)))}}define(["./workbox-c1d7c543"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"/assets/../index.html",revision:"c58ffc45369bc56ffb49c58a8ca18c21"},{url:"/assets/10.4cfaa8b5bc39612dd013.bundle.js",revision:null},{url:"/assets/11.4cfaa8b5bc39612dd013.bundle.js",revision:null},{url:"/assets/12.4cfaa8b5bc39612dd013.bundle.js",revision:null},{url:"/assets/13.4cfaa8b5bc39612dd013.bundle.js",revision:null},{url:"/assets/14.4cfaa8b5bc39612dd013.bundle.js",revision:null},{url:"/assets/15.4cfaa8b5bc39612dd013.bundle.js",revision:null},{url:"/assets/16.4cfaa8b5bc39612dd013.bundle.js",revision:null},{url:"/assets/17.4cfaa8b5bc39612dd013.bundle.js",revision:null},{url:"/assets/18.4cfaa8b5bc39612dd013.bundle.js",revision:null},{url:"/assets/19.4cfaa8b5bc39612dd013.bundle.js",revision:null},{url:"/assets/2.4cfaa8b5bc39612dd013.bundle.js",revision:null},{url:"/assets/20.4cfaa8b5bc39612dd013.bundle.js",revision:null},{url:"/assets/3.4cfaa8b5bc39612dd013.bundle.js",revision:null},{url:"/assets/4.4cfaa8b5bc39612dd013.bundle.js",revision:null},{url:"/assets/5.4cfaa8b5bc39612dd013.bundle.js",revision:null},{url:"/assets/6.4cfaa8b5bc39612dd013.bundle.js",revision:null},{url:"/assets/7.4cfaa8b5bc39612dd013.bundle.js",revision:null},{url:"/assets/8.4cfaa8b5bc39612dd013.bundle.js",revision:null},{url:"/assets/9.4cfaa8b5bc39612dd013.bundle.js",revision:null},{url:"/assets/main.bundle.js",revision:"f4c9bdbf1ac6cd3f148f994341ea3ead"},{url:"/assets/vendor.bundle.js",revision:"a0ad8869f11e6d6b87a5b20227ae4876"},{url:"/assets/worker.bundle.worker.js",revision:"445c7ab0e7a69837a3e60d2f869b1d5c"}],{ignoreURLParametersMatching:[/.*/]}),s.registerRoute(/^(http)(s)?(\:\/\/).*\.(?:css)$/,new s.CacheFirst({cacheName:"css",plugins:[new s.ExpirationPlugin({maxEntries:10})]}),"GET"),s.registerRoute(/^(http)(s)?(\:\/\/).*\.(?:env|md|json)$/,new s.CacheFirst({cacheName:"env",plugins:[new s.ExpirationPlugin({maxEntries:5})]}),"GET"),s.registerRoute(/^(http)(s)?(\:\/\/).*\/(?:env)$/,new s.CacheFirst({cacheName:"env",plugins:[new s.ExpirationPlugin({maxEntries:5})]}),"GET")}));