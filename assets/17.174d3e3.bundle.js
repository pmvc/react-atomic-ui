"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[17],{14(c,b,a){a.d(b,{UB:()=>H,JG:()=>K,ZP:()=>w});var d,e,f,g,h,i,j=a(1),k=a(3),l=a(17),m=a(19),n=a(20),o=a(18),p=a(5);let q=function(){var[b,c]=(0,j.useState)(function(){return d||function(){}});return d||a.e(23).then(a.bind(a,44)).then(function(a){d=(0,p.MV)(a),c(function(){return d})}),b};var r=a(0);let s=function(a){var b=q(),c="```js\n"+a.children+"\n```";return(0,r.jsx)(k.ER,{children:b(c)})};var t=a(11),u=a(12);let v=function(b){var{url:d}=b,e=(0,u.s4)(),[a,f]=(0,j.useState)(),c=q();return((0,j.useEffect)(function(){(0,t.Bt)("ajaxGet",{url:d,callback:function(c,a,b){if(!1===e())return!1;200===b.status&&f(a.replace(/(\<\!\-\-hidden\-\-\>)([\s\S]*?)(\<\!\-\-\/hidden\-\-\>)/g,""))}})},[]),a)?(0,r.jsx)(k.XX,{children:(0,r.jsx)(k.ER,{children:c(a)})}):null},w=function(z){i=(0,k.UM)(y,i);var b,c,d,p,q,{header:A,children:B,code:C,git:a,npm:t,edit:u,id:D}=z,[E,I]=(0,j.useState)({on:!1}),w={};if(E.on?b=(0,r.jsx)(s,{children:C}):w=x.hidden,a){var F="https://raw.githubusercontent.com/"+a.replace(/(\/(blob|tree)\/(master|main)\/)/,"/$3/")+"README.md",G="https://github.com/"+a;c=(0,r.jsx)(v,{url:F}),d=(0,r.jsx)(k.JO,{atom:"a",target:"_blank",href:G,style:x.icon,children:e||(e=(0,r.jsx)(m.Z,{}))})}if(t){var H="https://www.npmjs.com/package/"+t;p=(0,r.jsx)(k.JO,{atom:"a",target:"_blank",href:H,style:x.icon,children:f||(f=(0,r.jsx)(n.Z,{}))})}return u&&(q=(0,r.jsx)(k.JO,{atom:"a",target:"_blank",href:u,style:x.icon,children:g||(g=(0,r.jsx)(o.Z,{}))})),(0,r.jsxs)(k.aV,{type:"segments",id:D,children:[(0,r.jsxs)(k.XX,{className:"tertiary",children:[(0,r.jsx)(k.h4,{style:x.header,className:"grey",children:A}),(0,r.jsxs)(k.iX,{style:x.iconBlock,children:[q,p,d,(0,r.jsx)(k.JO,{onClick:function(){return I(function(a){var{on:b}=a;return{on:!b}})},style:x.icon,children:h||(h=(0,r.jsx)(l.Z,{}))})]})]}),(0,r.jsx)(k.XX,{className:"secondary",style:w,styles:i.code,children:b}),(0,r.jsx)(k.XX,{children:B}),c]})};var x={header:{margin:0},hidden:{maxHeight:0,padding:"0 16px",margin:0,ovarflow:"hidden"},iconBlock:{position:"absolute",top:16,right:6},icon:{maxWidth:24,cursor:"pointer",marginRight:10}},y={code:[{transition:["padding 500ms ease"]}],fitWidth:[{whiteSpace:"break-spaces"},"code"]},z=a(2),A=a(468),B=a(16),C=a(7),D=a(8),E=["button","anchorLocator","updateUrl","resetUrl","children","id","onClose","path"],F=function(){var a=document.URL.split("#"),b=a.length-1,c="#"+a[b];return{lastAnchor:c}},G=function(c){var a=(0,D.JU)().URL,b=a.lastIndexOf("#"+c);-1!==b&&history.pushState("","",a.substring(0,b))};let H=function(b){var{button:f="Open full screen",anchorLocator:c=F,updateUrl:p=function(a){return history.pushState("","",(0,D.JU)().URL+"#"+a)},resetUrl:g=G,children:h,id:a,onClose:i,path:d}=b,l=(0,A.Z)(b,E),[m,q]=(0,j.useState)(),s=(0,j.useRef)();(0,j.useEffect)(function(){var{lastAnchor:b}=(0,C.ZP)(c,[d])||{};"#"+a===b?q(!0):q(function(a){return a&&(s.current="path"),!1})},[c,a,d]);var n=(0,j.useCallback)(function(){var{lastAnchor:b}=(0,C.ZP)(c,[d])||{};a&&a!==b&&p(a),q(!0)},[c,a,d]),o=(0,j.useCallback)(function(){"path"!==s.current&&(0,C.ZP)(g,[a]),(0,C.ZP)(i),q(!1),s.current=null},[g,a,i]),e=null;return m&&(e=(0,r.jsx)(B.IT,(0,z.Z)((0,z.Z)({},l),{},{onClose:o,children:h}))),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(k.zx,{onClick:n,children:f}),e]})};var I=a(36),J=["id"];let K=function(a){var{id:b="fullscreen"}=a,c=(0,A.Z)(a,J);return(0,r.jsx)(I.yR,{initStates:{":hash":"path"},children:function(a){return(0,r.jsx)(H,(0,z.Z)((0,z.Z)({},(0,z.Z)((0,z.Z)({},c),a)),{},{id:b,anchorLocator:I.ul,updateUrl:function(a){return(0,I.gH)("url",{url:(0,D.JU)().URL+"#"+a})},resetUrl:function(a){return(0,I.gH)("resetAnchor",a)}}))}})}},17(c,b,a){a.d(b,{Z:()=>e});var d=a(4);let e=function(a){return(0,d.Z)("Code","M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z")(a)}},18(c,b,a){a.d(b,{Z:()=>e});var d=a(4);let e=function(a){return(0,d.Z)("Edit","M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z")(a)}},19(c,b,a){a.d(b,{Z:()=>g});var d=a(468),e=a(4),f=["viewBox"];let g=function(a){var{viewBox:c="0 0 16 16"}=a,b=(0,d.Z)(a,f);return b.viewBox=c,(0,e.Z)("Git","M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z")(b)}},20(c,b,a){a.d(b,{Z:()=>g});var d=a(468),e=a(4),f=["viewBox","fill"];let g=function(b){var{viewBox:c="0 0 3200 3200",fill:g="#b93131"}=b,a=(0,d.Z)(b,f);return a.viewBox=c,a.fill=g,(0,e.Z)("Npm","M269 3186 c-99 -27 -193 -106 -243 -205 l-26 -50 0 -1332 0 -1331 31 -59 c40 -75 102 -132 187 -172 l67 -32 1255 -3 c911 -2 1271 0 1315 8 119 23 224 102 282 211 l28 54 0 1325 0 1325 -29 54 c-42 80 -128 163 -201 192 l-60 24 -1280 2 c-992 1 -1290 -1 -1326 -11z m1311 -1386 l0 -600 200 0 200 0 0 600 0 600 200 0 200 0 0 -800 0 -800 -800 0 -800 0 0 800 0 800 400 0 400 0 0 -600z")(a)}},4(c,b,a){a.d(b,{Z:()=>j});var d=a(2),e=a(468),f=a(26),g=a(24),h=a(0),i=["type","children"];let j=function(b,c){var a=function(j){var{type:k=null,children:l}=j,m=(0,e.Z)(j,i),a=c[k]||c["_"]||c;return(0,h.jsxs)(f.Z,(0,d.Z)((0,d.Z)({},m),{},{"data-name":b,children:[a.map?a.map(function(a){return(0,h.jsx)(g.Z,{d:a})}):(0,h.jsx)(g.Z,{d:a}),l]}))};return a.displayName=b,a}},403(o,e,a){a.r(e),a.d(e,{default:()=>an});var p,q,d=a(2),r=a(14),s=a(31),t=a(3),u=a(1),v=a(15),w=a(470),x=a(471),y=a(467),f=a(21),z=a(57),A=a(68),B=a(29),C=a(5),D=a(7),E=a(8),F=a(39);let G=function(){var a=window,c=!1;try{var b=Object.defineProperty({},"passive",{get:function(){c=!0}});a.addEventListener("test",null,b),a.removeEventListener("test",null,b)}catch(d){}return c};var H=0,g=function(){function a(){(0,w.Z)(this,a),(0,y.Z)(this,"storeName","delayScroll"),(0,y.Z)(this,"isInitResizeEvent",!1),(0,y.Z)(this,"checkIsActive",function(a,b){return a>=b.top-1&&a<=b.bottom-2})}return(0,x.Z)(a,[{key:"initResizeEvent",value:function(){var a=(0,E.p_)();a.__null||(this.isInitResizeEvent=!0,a.addEventListener?a.addEventListener("resize",this.bindHandleResize):a.attachEvent("onresize",this.bindHandleResize))}},{key:"initEvent",value:function(a,c){var d=this;if(void 0!==a){if(a.addEventListener){var b=G();a.addEventListener("scroll",this.scrollMonitor,!!b&&{passive:!0})}else a.attachEvent("onscroll",this.scrollMonitor);var e=0;this.clearInitTimer(),this.initTimer=setInterval(function(){d.trigger(a),++e>c&&d.clearInitTimer()},300),this.isInitResizeEvent||this.initResizeEvent()}}},{key:"removeEvent",value:function(a){null!=a&&a.removeEventListener?a.removeEventListener("scroll",this.scrollMonitor):null==a||a.deachEvent("onscroll",this.scrollMonitor)}},{key:"handleResize",value:function(){var a=this;this.spys.keySeq().forEach(function(b){a.scrollMonitor({target:{id:b}})})}},{key:"runScrollMonitor",value:function(a){var b=this.store.getState().get("scrollDelay");this.scrollDebounce({delay:b,args:[null==a?void 0:a.target]})}},{key:"triggerScroll",value:function(b){var i=this,c=(0,C.ZP)(b,["id"])|| -1,e=this.store.getState().get("scrollMargin"),f={mdefault:null},g={},h=[],a=(0,z.Z)(),j=a.top+e;(this.spys.get(c)||[]).forEach(function(b){var d=b.getOffsetEl();if(d){var k=i.getNodeId(b),l=(0,D.ZP)(b.getMonitorScroll),m=(0,D.ZP)(b.getScrollMargin),c=(0,B.ZP)(d);l&&(i.checkIsActive(j,c)&&(f.mdefault=k),h.unshift(b));var n=m||e;c=(0,A.isOnScreen)(c,a,n),g[k]=c}});var k=h.length;this.margins.forEach(function(b){var e=a.top+b;f["m"+b]=null;for(var c=k;c--;){var j=h[c],d=i.getNodeId(j),l=g[d];if(i.checkIsActive(e,l)){f["m"+b]=d;break}}}),this.margins=this.margins.clear(),this.dispatch((0,d.Z)((0,d.Z)({},f),{},{offsetCache:g,scroll:a,storeName:this.storeName}))}},{key:"getOffset",value:function(b){var a=this.store.getMap("offsetCache")[b];if(a&&a.h&&a.w)return a;var c=this.getNode(b)||{},d=(0,D.ZP)(c.getOffsetEl)||F.ZP.one("#"+b),e=d&&(0,B.ZP)(d);if(!e)return a;var f=(0,z.Z)(),g=this.store.getState().get("scrollMargin"),h=(0,D.ZP)(c.getScrollMargin)||g;return(0,A.isOnScreen)(e,f,h)}},{key:"hasAttach",value:function(a){var b=this.getAttachDestId(a),c=this.spys.get(b);return!!(c&&c.has(a))&&b}},{key:"getNodeId",value:function(a){var b=(0,D.ZP)(a.getId)||a.id;return b||(a===(0,E.p_)()?-1:this.setNodeId(a))}},{key:"setNodeId",value:function(a){var b="spy-"+H;return H++,a.setId?a.setId(b):a.id=b,b}},{key:"getAttachDestId",value:function(b){var a,c=(0,D.ZP)(b.getAttachDest);if(c)a=this.getNodeId(c);else{var d=(0,E.p_)();d.__null||b.setAttachDest(d),a=-1}return a}},{key:"getNode",value:function(a){return this.arrNode.get(a)}},{key:"attach",value:function(a){var c=this.getNodeId(a),b=this.getAttachDestId(a),d=this.spys.get(b);return d?this.spys=this.spys.set(b,d.add(a)):this.spys=this.spys.set(b,(0,f.l4)().add(a)),this.arrNode=this.arrNode.set(c,a),this.isInitEvent.get(b)||(this.isInitEvent=this.isInitEvent.set(b,!0),this.initEvent((0,D.ZP)(a.getAttachDest),(0,D.ZP)(a.getAttachDestRetry))),c}},{key:"detach",value:function(b){var a=this.hasAttach(b);a&&(this.spys=this.spys.set(a,this.spys.get(a).remove(b)),this.arrNode=this.arrNode.delete(this.getNodeId(b)),this.spys.get(a).size||(this.removeEvent(b.attachDestId),this.spys=this.spys.delete(a),this.isInitEvent=this.isInitEvent.delete(a)))}},{key:"addMargin",value:function(a){this.margins=this.margins.add(a)}},{key:"deleteMargin",value:function(a){this.margins=this.margins.remove(a)}},{key:"clearInitTimer",value:function(){this.initTimer&&(clearInterval(this.initTimer),this.initTimer=null)}},{key:"getInitialState",value:function(){return this.initTimer=null,this.trigger=this.triggerScroll.bind(this),this.isInitEvent=(0,f.D5)(),this.spys=(0,f.D5)(),this.arrNode=(0,f.D5)(),this.margins=(0,f.l4)(),this.scrollMonitor=this.runScrollMonitor.bind(this),this.scrollDebounce=(0,D.Ds)(this.trigger),this.bindHandleResize=this.handleResize.bind(this),(0,f.D5)({scrollDelay:50,scrollMargin:0})}},{key:"reduce",value:function(a,b){return(0,f.zg)(a,b)}}]),a}(),b=new g,[h,k]=(0,f.Cl)(b.reduce.bind(b),b.getInitialState.bind(b)),l=(0,d.Z)((0,d.Z)({},h),{},{scroller:b});b.dispatch=k,b.store=h;let I=l;var J=a(480),K=a(9),L=a(10),c=new(function(b){(0,K.Z)(a,b);var c=(0,L.Z)(a);function a(){var d;(0,w.Z)(this,a);for(var e=arguments.length,f=new Array(e),b=0;b<e;b++)f[b]=arguments[b];return d=c.call.apply(c,[this].concat(f)),(0,y.Z)((0,J.Z)(d),"storeName","fastScroll"),d}return(0,x.Z)(a,[{key:"runScrollMonitor",value:function(a){this.triggerScroll(a.target)}}]),a}(g)),[i,m]=(0,f.Cl)(c.reduce.bind(c),c.getInitialState.bind(c)),n=(0,d.Z)((0,d.Z)({},i),{},{scroller:c});c.dispatch=m,c.store=i;let M=n;var N=a(468),O=a(12),P=["noDelay","monitorScroll","attachDestRetry","id","scrollMargin","children","container","className","attachDest"],Q=function(e){var{noDelay:g=!1,monitorScroll:h=!0,attachDestRetry:r=20,id:i,scrollMargin:j,children:k,container:l,className:f,attachDest:m}=e,b=(0,N.Z)(e,P),[a,n]=(0,u.useState)(i),s=(0,O.s4)(),o=(0,u.useRef)(),c=(0,u.useRef)({});c.current=(0,d.Z)((0,d.Z)({},c.current),{},{id:a,attachDest:c.current.attachDest||m,monitorScroll:h,scrollMargin:j});var p=(0,u.useRef)();(0,u.useEffect)(function(){var a=g?M:I,b=a.scroller.attach(w);return c.current.store=a,n(b),function(){a.scroller.detach(w)}},[]);var v=(0,O.Nr)(function(a){!o.current&&s()&&console.warn('Please use SemanticUI. props.container -> import {SemanticUI} from "react-atomic-molecule"',a)},1500),q=(0,u.useCallback)(function(){if(o.current)return o.current;v({targetId:a,container:p.current})},[a]),w={lastConfig:c,getOffsetEl:q,detach:function(){return c.current.store.scroller.detach(w)},getId:function(){return c.current.id},setId:n,getAttachDest:function(){return c.current.attachDest},setAttachDest:function(a){return c.current.attachDest=a},getMonitorScroll:function(){return c.current.monitorScroll},getScrollMargin:function(){return c.current.scrollMargin},getAttachDestRetry:function(){return r}};return b.id=a,b.refCb=o,b.className=(0,t.Jx)(f,"spy-tar-"+a),{targetId:a,className:f,children:k,container:l,noDelay:g,nextContainer:p,restProps:b}};let R=function(a){var{targetId:b,children:c,container:e,noDelay:f,nextContainer:g,restProps:h}=Q(a);return(0,u.useMemo)(function(){var a;return"ScrollReceiver"===(0,t.Gf)(c)?(g.current=c,a=(0,d.Z)((0,d.Z)((0,d.Z)({},c.props),h),{},{targetId:b,container:e,noDelay:f})):(g.current=e||t.iX,a=(0,d.Z)((0,d.Z)({},h),{},{children:c})),(0,t.J_)(g.current)(a)},[c,b])};var S=a(41),T=a(6),U=["scrollMargin","noDelay","targetId","container","children"],V=function(e){var{scrollMargin:a=T.TP,noDelay:j=!1,targetId:b,container:k,children:l}=e,m=(0,N.Z)(e,U),f=(0,u.useRef)(),c=j?M:I,{scroll:g={}}=(0,S.XD)(["scroll"],c),n=c.getState().get("m"+a),o=g.top,h=c.scroller.getOffset(b)||{},p=f.current||!1,q=T.i_!==typeof b&&b===n,i=(0,d.Z)((0,d.Z)({},h),{},{active:q,scrollTop:o,scrollInfo:g,scrollMargin:a,isShown:p,targetId:b});return h.isOnScreen&&(i.isShown=!0,f.current=!0),isNaN(a)||c.scroller.addMargin(a),{targetInfo:i,container:k,children:l,restProps:m}},j=function(e){var{targetInfo:f,container:g,children:c,restProps:h}=V(e),a=g,b=c;return a||(a=c,b=null),!b&&(0,u.isValidElement)(a)&&(b=a.props.children),(0,t.J_)(a)((0,d.Z)((0,d.Z)({},h),{},{targetInfo:f}),b)};j.displayName="ScrollReceiver";let W=j;var X=a(0),Y=["children"];let Z=function(a){var{children:b}=a,c=(0,N.Z)(a,Y);return(0,X.jsx)(R,(0,d.Z)((0,d.Z)({},c),{},{children:(0,X.jsx)(W,{children:b})}))};a(79),a(36);var $=null,_=function(){$&&(clearTimeout($),$=null)},aa=a(67),ab=["refCb","speed","style","styles","children","targetInfo","background"],ac=["container","noDelay","speed","className"],ad=function(a){var b,f=a.lastEl,g=a.speed,h=a.targetInfo,i=a.scrollInfo,c=f.current;if(b=c?(0,B.ZP)(c):h){var d=b,e=d.top;return d.h,g*(i.top-(void 0===e?0:e))}},ae=function(a){var f=a.refCb,m=a.speed,n=a.style,o=a.styles,p=a.children,g=a.targetInfo,q=a.background,r=(0,v.Z)(a,ab),b=g||{},h=b.scrollInfo;b.isOnScreen,b.top,b.h;var i=h||{},c=i.top;i.scrollNodeHeight;var s=(0,O.D9)(c),j=(0,u.useState)(0),w=j[0],x=j[1],e=(0,u.useRef)({});if(!isNaN(c)&&s!==c){e.current=(0,d.Z)((0,d.Z)({},e.current),{},{lastEl:f,speed:m,targetInfo:g,scrollInfo:h});var k=ad(e.current);isNaN(k)||x(k)}(0,u.useEffect)(function(){var a=function(){e.current.scrollInfo=(0,z.Z)();var a=ad(e.current);isNaN(a)||x(a)},b=(0,E.p_)();return b.addEventListener("resize",a),function(){b.removeEventListener("resize",a)}},[]);var y=(0,u.useMemo)(function(){return(0,aa.ZP)((0,t._s)((0,d.Z)((0,d.Z)({},ah.content),n),!1,!1),o)},[n,o]),l=(0,u.useMemo)(function(){return(0,t._s)((0,d.Z)((0,d.Z)({},ah.backgroundLayer),{},{transform:["translate3d(0, "+w+"px, 0)"]}),!1,!1)},[w]);return{handler:{el:f},styles:y,layerStyles:l,background:l?q:null,children:p,others:r}},af=function(b){var a=ae(b),c=a.handler,e=a.styles,f=a.layerStyles,g=a.background,h=a.children,i=a.others;return(0,X.jsxs)(t.iX,(0,d.Z)((0,d.Z)({},i),{},{refCb:c.el,styles:e,children:[h,(0,X.jsx)(t.iX,{className:"parllax-background",style:ah.background,children:(0,X.jsx)(t.iX,{className:"parllax-layer",styles:f,children:g})})]}))};let ag=function(a){var b=a.container,c=a.noDelay,e=a.speed,f=a.className,g=(0,v.Z)(a,ac);return(0,X.jsx)(Z,(0,d.Z)((0,d.Z)({},g),{},{className:(0,t.Jx)(f,"parallax"),container:void 0===b?af:b,noDelay:void 0===c||c,speed:void 0===e?.5:e}))};var ah={content:{overflow:"hidden",position:"relative",zIndex:0},background:{position:"absolute",top:0,left:0,zIndex:-1,willChange:"scroll-position"},backgroundLayer:{position:"relative",willChange:"transform, opacity"}},ai=["backgroundImage","backgroundImageStyle"];let aj=function(a){var b=a.backgroundImage,e=a.backgroundImageStyle,f=(0,v.Z)(a,ai),c=null;return b&&(c=(0,X.jsx)(t.iX,{className:"parllax-image",style:(0,d.Z)((0,d.Z)((0,d.Z)({},ak.backgroundImage),e),{},{backgroundImage:'url("'+b+'")'})})),(0,X.jsx)(ag,(0,d.Z)((0,d.Z)({},f),{},{background:c}))};var ak={backgroundImage:{backgroundPosition:"50% 50%",backgroundRepeat:"no-repeat",backgroundSize:"cover",minWidth:"100vw",minHeight:"100vh",willChange:"scroll-position"}};let al=function(){return(0,X.jsx)(aj,{style:am.container,backgroundImage:"https://c1.staticflickr.com/9/8621/16732897815_4705c08fe6_h.jpg",children:"test"})};var am={container:{height:600,color:"#fff",textAlign:"center",paddingTop:200}};let an=function(a){return(0,s.Z)((0,d.Z)((0,d.Z)({},a),{},{pageName:"Parallax",tplProps:{className:"Parallax"}})),q=(0,t.UM)(ao,q),(0,X.jsx)(X.Fragment,{children:p||(p=(0,X.jsx)(r.ZP,{code:'import React from "react";\nimport { ParallaxBackgroundImage } from "organism-react-parallax";\n\nconst ParallaxBackgroundImageExample = () => (\n  <ParallaxBackgroundImage\n    style={Styles.container}\n    backgroundImage="https://c1.staticflickr.com/9/8621/16732897815_4705c08fe6_h.jpg"\n  >\n    test\n  </ParallaxBackgroundImage>\n);\n\nexport default ParallaxBackgroundImageExample;\n\nconst Styles = {\n  container: {\n    height: 600,\n    color: "#fff",\n    textAlign: "center",\n    paddingTop: 200,\n  },\n};\n',header:"Parallax Example",children:(0,X.jsx)(al,{})}))})};var ao={doc:[{paddingTop:"300px !important",paddingBottom:"150vh !important"},"div#doc.Parallax"]}},31(c,b,a){a.d(b,{Z:()=>i});var d,e=a(1),f=a(22),g=a(23),h=a(11);let i=function(a){var b=a.pageName,c=a.tplProps;(0,e.useEffect)(function(){return setTimeout(function(){(0,g.Ns)({params:{activeMenu:b}}),(0,f.WI)({tplProps:c,pageName:b})}),d||(d=1,(0,h.Bt)("ajaxGet",{url:"/data/env",ini:!0,disableCacheBusting:!0})),function(){(0,g.Ns)({params:{activeMenu:null}})}},[])}}}])