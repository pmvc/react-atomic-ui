"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[15],{16(f,c,a){a.d(c,{U:()=>L,Z:()=>z});var g,h,i,j,k,l,m=a(11),d=a(1),n=a(3),o=a(18),p=a(19),q=a(20),r=a(21),s=a(5);let t=function(){var c=(0,d.useState)(function(){return g||function(){}}),b=(0,m.Z)(c,2),e=b[0],f=b[1];return g||a.e(27).then(a.bind(a,148)).then(function(a){g=(0,s.MV)(a),f(function(){return g})}),e};var u=a(0);let v=function(a){var b=t(),c="```".concat("js","\n").concat(a.children,"\n```");return(0,u.jsx)(n.ER,{children:b(c)})};var w=a(13),x=a(15);let y=function(c){var g=c.url,h=(0,x.s4)(),e=(0,d.useState)(),a=(0,m.Z)(e,2),b=a[0],i=a[1],f=t();return((0,d.useEffect)(function(){(0,w.Bt)("ajaxGet",{url:g,callback:function(c,a,b){if(!1===h())return!1;200===b.status&&i(a.replace(/(\<\!\-\-hidden\-\-\>)([\s\S]*?)(\<\!\-\-\/hidden\-\-\>)/g,""))}})},[]),b)?(0,u.jsx)(n.XX,{children:(0,u.jsx)(n.ER,{children:f(b)})}):null},z=function(a){l=(0,n.UM)(B,l);var c,e,f,g,s,C=a.header,D=a.children,E=a.code,b=a.git,t=a.npm,w=a.edit,F=a.id,G=(0,d.useState)({on:!1}),x=(0,m.Z)(G,2),H=x[0],L=x[1],z={};if(H.on?c=(0,u.jsx)(v,{children:E}):z=A.hidden,b){var I="https://raw.githubusercontent.com/"+b.replace(/(\/(blob|tree)\/(master|main)\/)/,"/$3/")+"README.md",J="https://github.com/"+b;e=(0,u.jsx)(y,{url:I}),f=(0,u.jsx)(n.JO,{atom:"a",target:"_blank",href:J,style:A.icon,children:h||(h=(0,u.jsx)(p.Z,{}))})}if(t){var K="https://www.npmjs.com/package/"+t;g=(0,u.jsx)(n.JO,{atom:"a",target:"_blank",href:K,style:A.icon,children:i||(i=(0,u.jsx)(q.Z,{}))})}return w&&(s=(0,u.jsx)(n.JO,{atom:"a",target:"_blank",href:w,style:A.icon,children:j||(j=(0,u.jsx)(r.Z,{}))})),(0,u.jsxs)(n.aV,{type:"segments",id:F,children:[(0,u.jsxs)(n.XX,{className:"tertiary",children:[(0,u.jsx)(n.h4,{style:A.header,className:"grey",children:C}),(0,u.jsxs)(n.iX,{style:A.iconBlock,children:[s,g,f,(0,u.jsx)(n.JO,{onClick:function(){return L(function(a){return{on:!a.on}})},style:A.icon,children:k||(k=(0,u.jsx)(o.Z,{}))})]})]}),(0,u.jsx)(n.XX,{className:"secondary",style:z,styles:l.code,children:c}),(0,u.jsx)(n.XX,{children:D}),e]})};var A={header:{margin:0},hidden:{maxHeight:0,padding:"0 16px",margin:0,ovarflow:"hidden"},iconBlock:{position:"absolute",top:16,right:6},icon:{maxWidth:24,cursor:"pointer",marginRight:10}},B={code:[{transition:["padding 500ms ease"]}],fitWidth:[{whiteSpace:"break-spaces"},"code"]},C=a(462),D=a(463),E=a(472),F=a(9),G=a(10),e=a(460),H=a(17),I=a(8),J=function(){var a=document.URL.split("#"),b=a.length-1,c=a[b];return c},K=function(a){return history.pushState("","",a)},b=function(b){(0,F.Z)(a,b);var c=(0,G.Z)(a);function a(){var b;(0,C.Z)(this,a);for(var f=arguments.length,g=new Array(f),d=0;d<f;d++)g[d]=arguments[d];return b=c.call.apply(c,[this].concat(g)),(0,e.Z)((0,E.Z)(b),"state",{showFullScreen:!1}),(0,e.Z)((0,E.Z)(b),"handleClick",function(){var a=b.props.id,c=J();a&&a!==c&&K(document.URL+"#"+a),b.setState({showFullScreen:!0})}),(0,e.Z)((0,E.Z)(b),"handleClose",function(){var a=b.props,e=a.id,f=a.onClose,c=document.URL,d=c.lastIndexOf("#"+e);-1!==d&&K(c.substring(0,d)),(0,I.ZP)(f),b.setState({showFullScreen:!1})}),b}return(0,D.Z)(a,[{key:"componentDidMount",value:function(){var a=this.props.id,b=J();a===b&&this.setState({showFullScreen:!0})}},{key:"render",value:function(){var a=this.props,c=a.button,d=a.children,e=this.state.showFullScreen,b=null;return e&&(b=(0,u.jsx)(H.IT,{onClose:this.handleClose,children:d})),(0,u.jsxs)(n.iX,{children:[(0,u.jsx)(n.zx,{onClick:this.handleClick,children:c}),b]})}}]),a}(d.PureComponent);(0,e.Z)(b,"defaultProps",{button:"Open full screen"});let L=b},11(c,b,a){a.d(b,{Z:()=>e});var d=a(7);function e(a,e){var b,f,c;return function(a){if(Array.isArray(a))return a}(a)||(b=a,f=e,c=[],(0,d.tW)(b).some(function(a,d){if(c.push(b[a]),f===d+1)return!0}),c)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}},18(c,b,a){a.d(b,{Z:()=>e});var d=a(6);let e=function(a){return(0,d.Z)("Code","M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z")(a)}},21(c,b,a){a.d(b,{Z:()=>e});var d=a(6);let e=function(a){return(0,d.Z)("Edit","M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z")(a)}},19(c,b,a){a.d(b,{Z:()=>g});var d=a(4),e=a(6),f=["viewBox"];let g=function(a){var b=a.viewBox,c=(0,d.Z)(a,f);return c.viewBox=void 0===b?"0 0 16 16":b,(0,e.Z)("Git","M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z")(c)}},20(c,b,a){a.d(b,{Z:()=>g});var d=a(4),e=a(6),f=["viewBox","fill"];let g=function(a){var c=a.viewBox,g=a.fill,b=(0,d.Z)(a,f);return b.viewBox=void 0===c?"0 0 3200 3200":c,b.fill=void 0===g?"#b93131":g,(0,e.Z)("Npm","M269 3186 c-99 -27 -193 -106 -243 -205 l-26 -50 0 -1332 0 -1331 31 -59 c40 -75 102 -132 187 -172 l67 -32 1255 -3 c911 -2 1271 0 1315 8 119 23 224 102 282 211 l28 54 0 1325 0 1325 -29 54 c-42 80 -128 163 -201 192 l-60 24 -1280 2 c-992 1 -1290 -1 -1326 -11z m1311 -1386 l0 -600 200 0 200 0 0 600 0 600 200 0 200 0 0 -800 0 -800 -800 0 -800 0 0 800 0 800 400 0 400 0 0 -600z")(b)}},6(c,b,a){a.d(b,{Z:()=>j});var d=a(2),e=a(4),f=a(28),g=a(25),h=a(0),i=["type","children"];let j=function(b,c){var a=function(a){var j=a.type,k=a.children,l=(0,e.Z)(a,i);return(0,h.jsxs)(f.Z,(0,d.Z)((0,d.Z)({},l),{},{"data-name":b,children:[(0,h.jsx)(g.Z,{d:c[void 0===j?null:j]||c["_"]||c}),k]}))};return a.displayName=b,a}},36(c,b,a){a.d(b,{Z:()=>i});var d,e=a(1),f=a(23),g=a(27),h=a(13);let i=function(a){var b=a.pageName,c=a.tplProps;(0,e.useEffect)(function(){return setTimeout(function(){(0,g.Ns)({params:{activeMenu:b}}),(0,f.WI)({tplProps:c,pageName:b})}),d||(d=1,(0,h.Bt)("ajaxGet",{url:"/data/env",ini:!0,disableCacheBusting:!0})),function(){(0,g.Ns)({params:{activeMenu:null}})}},[])}},397(n,f,a){a.r(f),a.d(f,{default:()=>am});var o,p,q=a(2),r=a(16),s=a(36),t=a(3),u=a(1),v=a(4),w=a(462),x=a(463),y=a(460),g=a(22),z=a(151),A=a(154),B=a(31),C=a(5),D=a(7),E=a(8),F=a(12),G=a(42);let H=function(){var a=window,c=!1;try{var b=Object.defineProperty({},"passive",{get:function(){c=!0}});a.addEventListener("test",null,b),a.removeEventListener("test",null,b)}catch(d){}return c};var I=0,h=function(){function a(){(0,w.Z)(this,a),(0,y.Z)(this,"storeName","delayScroll"),(0,y.Z)(this,"isInitResizeEvent",!1),(0,y.Z)(this,"checkIsActive",function(a,b){return a>=b.top-1&&a<=b.bottom-2})}return(0,x.Z)(a,[{key:"initResizeEvent",value:function(){var a=(0,F.p_)();a.__null||(this.isInitResizeEvent=!0,a.addEventListener?a.addEventListener("resize",this.bindHandleResize):a.attachEvent("onresize",this.bindHandleResize))}},{key:"initEvent",value:function(a,c){var d=this;if(void 0!==a){if(a.addEventListener){var b=H();a.addEventListener("scroll",this.scrollMonitor,!!b&&{passive:!0})}else a.attachEvent("onscroll",this.scrollMonitor);var e=0;this.clearInitTimer(),this.initTimer=setInterval(function(){d.trigger(a),++e>c&&d.clearInitTimer()},300),this.isInitResizeEvent||this.initResizeEvent()}}},{key:"removeEvent",value:function(a){null!=a&&a.removeEventListener?a.removeEventListener("scroll",this.scrollMonitor):null==a||a.deachEvent("onscroll",this.scrollMonitor)}},{key:"handleResize",value:function(){var a=this;this.spys.forEach(function(c,b){a.scrollMonitor({target:{id:b}})})}},{key:"runScrollMonitor",value:function(a){var b=this.store.getState().get("scrollDelay");this.scrollDebounce({delay:b,args:[null==a?void 0:a.target]})}},{key:"triggerScroll",value:function(b){var h=this,c=(0,C.ZP)(b,["id"])|| -1,d=this.store.getState().get("scrollMargin"),e={mdefault:null},f={},g=[],a=(0,z.Z)(),i=a.top+d;(this.spys.get(c)||[]).forEach(function(b){var j=b.getOffsetEl();if(j){var k=h.getNodeId(b),l=(0,E.ZP)(b.getMonitorScroll),m=(0,E.ZP)(b.getScrollMargin),c=(0,B.ZP)(j);l&&(h.checkIsActive(i,c)&&(e.mdefault=k),g.unshift(b));var n=m||d;c=(0,A.isOnScreen)(c,a,n),f[k]=c}});var j=g.length;this.margins.forEach(function(b){var i=a.top+b;e["m"+b]=null;for(var c=j;c--;){var k=g[c],d=h.getNodeId(k),l=f[d];if(h.checkIsActive(i,l)){e["m"+b]=d;break}}}),this.margins=this.margins.clear(),this.dispatch((0,q.Z)((0,q.Z)({},e),{},{offsetCache:f,scroll:a,storeName:this.storeName}))}},{key:"getOffset",value:function(b){var a=this.store.getMap("offsetCache")[b];if(a&&a.h&&a.w)return a;var c=this.getNode(b)||{},d=(0,E.ZP)(c.getOffsetEl)||G.ZP.one("#"+b),e=d&&(0,B.ZP)(d);if(!e)return a;var f=(0,z.Z)(),g=this.store.getState().get("scrollMargin"),h=(0,E.ZP)(c.getScrollMargin)||g;return(0,A.isOnScreen)(e,f,h)}},{key:"hasAttach",value:function(a){var b=this.getAttachDestId(a),c=this.spys.get(b);return!!(c&&c.has(a))&&b}},{key:"getNodeId",value:function(a){var b=(0,E.ZP)(a.getId)||a.id;return b||(a===(0,F.p_)()?-1:this.setNodeId(a))}},{key:"setNodeId",value:function(a){var b="spy-"+I;return I++,a.setId?a.setId(b):a.id=b,b}},{key:"getAttachDestId",value:function(b){var a,c=(0,E.ZP)(b.getAttachDest);if(c)a=this.getNodeId(c);else{var d=(0,F.p_)();d.__null||b.setAttachDest(d),a=-1}return a}},{key:"getNode",value:function(a){return this.arrNode.get(a)}},{key:"attach",value:function(a){var c=this.getNodeId(a),b=this.getAttachDestId(a),d=this.spys.get(b);return d?this.spys=this.spys.set(b,d.add(a)):this.spys=this.spys.set(b,(0,g.l4)().add(a)),this.arrNode=this.arrNode.set(c,a),this.isInitEvent.get(b)||(this.isInitEvent=this.isInitEvent.set(b,!0),this.initEvent((0,E.ZP)(a.getAttachDest),(0,E.ZP)(a.getAttachDestRetry))),c}},{key:"detach",value:function(b){var a=this.hasAttach(b);a&&(this.spys=this.spys.set(a,this.spys.get(a).remove(b)),this.arrNode=this.arrNode.delete(this.getNodeId(b)),this.spys.get(a).size||(this.removeEvent(b.attachDestId),this.spys=this.spys.delete(a),this.isInitEvent=this.isInitEvent.delete(a)))}},{key:"addMargin",value:function(a){this.margins=this.margins.add(a)}},{key:"deleteMargin",value:function(a){this.margins=this.margins.remove(a)}},{key:"clearInitTimer",value:function(){this.initTimer&&(clearInterval(this.initTimer),this.initTimer=null)}},{key:"getInitialState",value:function(){return this.initTimer=null,this.trigger=this.triggerScroll.bind(this),this.isInitEvent=(0,g.D5)(),this.spys=(0,g.D5)(),this.arrNode=(0,g.D5)(),this.margins=(0,g.l4)(),this.scrollMonitor=this.runScrollMonitor.bind(this),this.scrollDebounce=(0,E.Ds)(this.trigger),this.bindHandleResize=this.handleResize.bind(this),(0,g.D5)({scrollDelay:50,scrollMargin:0})}},{key:"reduce",value:function(a,b){return(0,g.zg)(a,b)}}]),a}(),b=new h,i=(0,g.Cl)(b.reduce.bind(b),b.getInitialState.bind(b)),d=i[0],l=i[1];d.scroller=b,b.dispatch=l,b.store=d;let J=d;var K=a(472),L=a(9),M=a(10),c=new(function(b){(0,L.Z)(a,b);var c=(0,M.Z)(a);function a(){var d;(0,w.Z)(this,a);for(var e=arguments.length,f=new Array(e),b=0;b<e;b++)f[b]=arguments[b];return d=c.call.apply(c,[this].concat(f)),(0,y.Z)((0,K.Z)(d),"storeName","fastScroll"),d}return(0,x.Z)(a,[{key:"runScrollMonitor",value:function(a){this.triggerScroll(a.target)}}]),a}(h)),j=(0,g.Cl)(c.reduce.bind(c),c.getInitialState.bind(c)),e=j[0],m=j[1];e.scroller=c,c.dispatch=m,c.store=e;let N=e;var O=a(15),P=["noDelay","monitorScroll","attachDestRetry","id","scrollMargin","children","container","className","attachDest"],Q=function(a){var e=a.noDelay,j=void 0!==e&&e,f=a.monitorScroll,g=a.attachDestRetry,x=void 0===g?20:g,k=a.id,l=a.scrollMargin,m=a.children,n=a.container,h=a.className,o=a.attachDest,c=(0,v.Z)(a,P),i=(0,u.useState)(k),b=i[0],p=i[1],y=(0,O.s4)(),r=(0,u.useRef)(),d=(0,u.useRef)({});d.current=(0,q.Z)((0,q.Z)({},d.current),{},{id:b,attachDest:d.current.attachDest||o,monitorScroll:void 0===f||f,scrollMargin:l});var s=(0,u.useRef)();(0,u.useEffect)(function(){var a=j?N:J,b=a.scroller.attach(A);return d.current.store=a,p(b),function(){a.scroller.detach(A)}},[]);var z=(0,O.Nr)(function(a){!r.current&&y()&&console.warn('Please use SemanticUI. props.container -> import {SemanticUI} from "react-atomic-molecule"',a)},1500),w=(0,u.useCallback)(function(){if(r.current)return r.current;z({targetId:b,container:s.current})},[b]),A={lastConfig:d,getOffsetEl:w,detach:function(){return d.current.store.scroller.detach(A)},getId:function(){return d.current.id},setId:p,getAttachDest:function(){return d.current.attachDest},setAttachDest:function(a){return d.current.attachDest=a},getMonitorScroll:function(){return d.current.monitorScroll},getScrollMargin:function(){return d.current.scrollMargin},getAttachDestRetry:function(){return x}};return c.id=b,c.refCb=r,c.className=(0,t.Jx)(h,"spy-tar-"+b),{targetId:b,className:h,children:m,container:n,noDelay:j,nextContainer:s,restProps:c}};let R=function(b){var a=Q(b),c=a.targetId,d=(a.className,a.children),e=a.container,f=a.noDelay,g=a.nextContainer,h=a.restProps;return(0,u.useMemo)(function(){var a;return"ScrollReceiver"===(0,t.Gf)(d)?(g.current=d,a=(0,q.Z)((0,q.Z)((0,q.Z)({},d.props),h),{},{targetId:c,container:e,noDelay:f})):(g.current=e||t.iX,a=(0,q.Z)((0,q.Z)({},h),{},{children:d})),(0,t.J_)(g.current)(a)},[d,c])};var S=a(41),T=["scrollMargin","noDelay","targetId","container","children"],U=function(a){var e=a.scrollMargin,b=void 0===e?D.TP:e,f=a.noDelay,c=a.targetId,l=a.container,m=a.children,n=(0,v.Z)(a,T),g=(0,u.useRef)(),d=void 0!==f&&f?N:J,o=(0,S.XD)(["scroll"],d),h=o.scroll,i=void 0===h?{}:h,p=d.getState().get("m"+b),r=i.top,j=d.scroller.getOffset(c)||{},s=g.current||!1,t=D.i_!==typeof c&&c===p,k=(0,q.Z)((0,q.Z)({},j),{},{active:t,scrollTop:r,scrollInfo:i,scrollMargin:b,isShown:s,targetId:c});return j.isOnScreen&&(k.isShown=!0,g.current=!0),isNaN(b)||d.scroller.addMargin(b),{targetInfo:k,container:l,children:m,restProps:n}},k=function(e){var b=U(e),f=b.targetInfo,g=b.container,d=b.children,h=b.restProps,a=g,c=d;return a||(a=d,c=null),!c&&(0,u.isValidElement)(a)&&(c=a.props.children),(0,t.J_)(a)((0,q.Z)((0,q.Z)({},h),{},{targetInfo:f}),c)};k.displayName="ScrollReceiver";let V=k;var W=a(0),X=["children"];let Y=function(a){var b=a.children,c=(0,v.Z)(a,X);return(0,W.jsx)(R,(0,q.Z)((0,q.Z)({},c),{},{children:(0,W.jsx)(V,{children:b})}))};a(70),a(159);var Z=null,$=function(){Z&&(clearTimeout(Z),Z=null)},_=a(152),aa=["refCb","speed","style","styles","children","targetInfo","background"],ab=["container","noDelay","speed","className"],ac=function(a){var b,f=a.lastEl,g=a.speed,h=a.targetInfo,i=a.scrollInfo,c=f.current;if(b=c?(0,B.ZP)(c):h){var d=b,e=d.top;return d.h,g*(i.top-(void 0===e?0:e))}},ad=function(a){var e=a.refCb,l=a.speed,m=a.style,n=a.styles,o=a.children,f=a.targetInfo,p=a.background,r=(0,v.Z)(a,aa),b=f||{},g=b.scrollInfo;b.isOnScreen,b.top,b.h;var h=g||{},c=h.top;h.scrollNodeHeight;var s=(0,O.D9)(c),i=(0,u.useState)(0),w=i[0],x=i[1],d=(0,u.useRef)({});if(!isNaN(c)&&s!==c){d.current=(0,q.Z)((0,q.Z)({},d.current),{},{lastEl:e,speed:l,targetInfo:f,scrollInfo:g});var j=ac(d.current);isNaN(j)||x(j)}(0,u.useEffect)(function(){var a=function(){d.current.scrollInfo=(0,z.Z)();var a=ac(d.current);isNaN(a)||x(a)},b=(0,F.p_)();return b.addEventListener("resize",a),function(){b.removeEventListener("resize",a)}},[]);var y=(0,u.useMemo)(function(){return(0,_.ZP)((0,t._s)((0,q.Z)((0,q.Z)({},ag.content),m),!1,!1),n)},[m,n]),k=(0,u.useMemo)(function(){return(0,t._s)((0,q.Z)((0,q.Z)({},ag.backgroundLayer),{},{transform:["translate3d(0, "+w+"px, 0)"]}),!1,!1)},[w]);return{handler:{el:e},styles:y,layerStyles:k,background:k?p:null,children:o,others:r}},ae=function(b){var a=ad(b),c=a.handler,d=a.styles,e=a.layerStyles,f=a.background,g=a.children,h=a.others;return(0,W.jsxs)(t.iX,(0,q.Z)((0,q.Z)({},h),{},{refCb:c.el,styles:d,children:[g,(0,W.jsx)(t.iX,{className:"parllax-background",style:ag.background,children:(0,W.jsx)(t.iX,{className:"parllax-layer",styles:e,children:f})})]}))};let af=function(a){var b=a.container,c=a.noDelay,d=a.speed,e=a.className,f=(0,v.Z)(a,ab);return(0,W.jsx)(Y,(0,q.Z)((0,q.Z)({},f),{},{className:(0,t.Jx)(e,"parallax"),container:void 0===b?ae:b,noDelay:void 0===c||c,speed:void 0===d?.5:d}))};var ag={content:{overflow:"hidden",position:"relative",zIndex:0},background:{position:"absolute",top:0,left:0,zIndex:-1,willChange:"scroll-position"},backgroundLayer:{position:"relative",willChange:"transform, opacity"}},ah=["backgroundImage","backgroundImageStyle"];let ai=function(a){var b=a.backgroundImage,d=a.backgroundImageStyle,e=(0,v.Z)(a,ah),c=null;return b&&(c=(0,W.jsx)(t.iX,{className:"parllax-image",style:(0,q.Z)((0,q.Z)((0,q.Z)({},aj.backgroundImage),d),{},{backgroundImage:'url("'+b+'")'})})),(0,W.jsx)(af,(0,q.Z)((0,q.Z)({},e),{},{background:c}))};var aj={backgroundImage:{backgroundPosition:"50% 50%",backgroundRepeat:"no-repeat",backgroundSize:"cover",minWidth:"100vw",minHeight:"100vh",willChange:"scroll-position"}};let ak=function(){return(0,W.jsx)(ai,{style:al.container,backgroundImage:"https://c1.staticflickr.com/9/8621/16732897815_4705c08fe6_h.jpg",children:"test"})};var al={container:{height:600,color:"#fff",textAlign:"center",paddingTop:200}};let am=function(a){return(0,s.Z)((0,q.Z)((0,q.Z)({},a),{},{pageName:"Parallax",tplProps:{className:"Parallax"}})),p=(0,t.UM)(an,p),(0,W.jsx)(W.Fragment,{children:o||(o=(0,W.jsx)(r.Z,{code:'import React from "react";\nimport { ParallaxBackgroundImage } from "organism-react-parallax";\n\nconst ParallaxBackgroundImageExample = () => (\n  <ParallaxBackgroundImage\n    style={Styles.container}\n    backgroundImage="https://c1.staticflickr.com/9/8621/16732897815_4705c08fe6_h.jpg"\n  >\n    test\n  </ParallaxBackgroundImage>\n);\n\nexport default ParallaxBackgroundImageExample;\n\nconst Styles = {\n  container: {\n    height: 600,\n    color: "#fff",\n    textAlign: "center",\n    paddingTop: 200,\n  },\n};\n',header:"Parallax Example",children:(0,W.jsx)(ak,{})}))})};var an={doc:[{paddingTop:"300px !important",paddingBottom:"150vh !important"},"div#doc.Parallax"]}}}])