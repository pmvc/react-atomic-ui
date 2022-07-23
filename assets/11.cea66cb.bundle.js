"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[11],{16(f,c,a){a.d(c,{U:()=>L,Z:()=>z});var g,h,i,j,k,l,m=a(11),d=a(1),n=a(3),o=a(18),p=a(19),q=a(20),r=a(21),s=a(5);let t=function(){var c=(0,d.useState)(function(){return g||function(){}}),b=(0,m.Z)(c,2),e=b[0],f=b[1];return g||a.e(22).then(a.bind(a,46)).then(function(a){g=(0,s.MV)(a),f(function(){return g})}),e};var u=a(0);let v=function(a){var b=t(),c="```".concat("js","\n").concat(a.children,"\n```");return(0,u.jsx)(n.ER,{children:b(c)})};var w=a(13),x=a(15);let y=function(c){var g=c.url,h=(0,x.s4)(),e=(0,d.useState)(),a=(0,m.Z)(e,2),b=a[0],i=a[1],f=t();return((0,d.useEffect)(function(){(0,w.Bt)("ajaxGet",{url:g,callback:function(c,a,b){if(!1===h())return!1;200===b.status&&i(a.replace(/(\<\!\-\-hidden\-\-\>)([\s\S]*?)(\<\!\-\-\/hidden\-\-\>)/g,""))}})},[]),b)?(0,u.jsx)(n.XX,{children:(0,u.jsx)(n.ER,{children:f(b)})}):null},z=function(a){l=(0,n.UM)(B,l);var c,e,f,g,s,C=a.header,D=a.children,E=a.code,b=a.git,t=a.npm,w=a.edit,F=a.id,G=(0,d.useState)({on:!1}),x=(0,m.Z)(G,2),H=x[0],L=x[1],z={};if(H.on?c=(0,u.jsx)(v,{children:E}):z=A.hidden,b){var I="https://raw.githubusercontent.com/"+b.replace(/(\/(blob|tree)\/(master|main)\/)/,"/$3/")+"README.md",J="https://github.com/"+b;e=(0,u.jsx)(y,{url:I}),f=(0,u.jsx)(n.JO,{atom:"a",target:"_blank",href:J,style:A.icon,children:h||(h=(0,u.jsx)(p.Z,{}))})}if(t){var K="https://www.npmjs.com/package/"+t;g=(0,u.jsx)(n.JO,{atom:"a",target:"_blank",href:K,style:A.icon,children:i||(i=(0,u.jsx)(q.Z,{}))})}return w&&(s=(0,u.jsx)(n.JO,{atom:"a",target:"_blank",href:w,style:A.icon,children:j||(j=(0,u.jsx)(r.Z,{}))})),(0,u.jsxs)(n.aV,{type:"segments",id:F,children:[(0,u.jsxs)(n.XX,{className:"tertiary",children:[(0,u.jsx)(n.h4,{style:A.header,className:"grey",children:C}),(0,u.jsxs)(n.iX,{style:A.iconBlock,children:[s,g,f,(0,u.jsx)(n.JO,{onClick:function(){return L(function(a){return{on:!a.on}})},style:A.icon,children:k||(k=(0,u.jsx)(o.Z,{}))})]})]}),(0,u.jsx)(n.XX,{className:"secondary",style:z,styles:l.code,children:c}),(0,u.jsx)(n.XX,{children:D}),e]})};var A={header:{margin:0},hidden:{maxHeight:0,padding:"0 16px",margin:0,ovarflow:"hidden"},iconBlock:{position:"absolute",top:16,right:6},icon:{maxWidth:24,cursor:"pointer",marginRight:10}},B={code:[{transition:["padding 500ms ease"]}],fitWidth:[{whiteSpace:"break-spaces"},"code"]},C=a(463),D=a(464),E=a(472),F=a(9),G=a(10),e=a(461),H=a(17),I=a(8),J=function(){var a=document.URL.split("#"),b=a.length-1,c=a[b];return c},K=function(a){return history.pushState("","",a)},b=function(b){(0,F.Z)(a,b);var c=(0,G.Z)(a);function a(){var b;(0,C.Z)(this,a);for(var f=arguments.length,g=new Array(f),d=0;d<f;d++)g[d]=arguments[d];return b=c.call.apply(c,[this].concat(g)),(0,e.Z)((0,E.Z)(b),"state",{showFullScreen:!1}),(0,e.Z)((0,E.Z)(b),"handleClick",function(){var a=b.props.id,c=J();a&&a!==c&&K(document.URL+"#"+a),b.setState({showFullScreen:!0})}),(0,e.Z)((0,E.Z)(b),"handleClose",function(){var a=b.props,e=a.id,f=a.onClose,c=document.URL,d=c.lastIndexOf("#"+e);-1!==d&&K(c.substring(0,d)),(0,I.ZP)(f),b.setState({showFullScreen:!1})}),b}return(0,D.Z)(a,[{key:"componentDidMount",value:function(){var a=this.props.id,b=J();a===b&&this.setState({showFullScreen:!0})}},{key:"render",value:function(){var a=this.props,c=a.button,d=a.children,e=this.state.showFullScreen,b=null;return e&&(b=(0,u.jsx)(H.IT,{onClose:this.handleClose,children:d})),(0,u.jsxs)(n.iX,{children:[(0,u.jsx)(n.zx,{onClick:this.handleClick,children:c}),b]})}}]),a}(d.PureComponent);(0,e.Z)(b,"defaultProps",{button:"Open full screen"});let L=b},70(c,a,b){b.d(a,{Z:()=>d});let d=function(b,d){var c={};for(var a in b)!(d.indexOf(a)>=0)&&Object.prototype.hasOwnProperty.call(b,a)&&(c[a]=b[a]);return c}},11(c,b,a){a.d(b,{Z:()=>e});var d=a(7);function e(a,e){var b,f,c;return function(a){if(Array.isArray(a))return a}(a)||(b=a,f=e,c=[],(0,d.tW)(b).some(function(a,d){if(c.push(b[a]),f===d+1)return!0}),c)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}},18(c,b,a){a.d(b,{Z:()=>e});var d=a(6);let e=function(a){return(0,d.Z)("Code","M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z")(a)}},21(c,b,a){a.d(b,{Z:()=>e});var d=a(6);let e=function(a){return(0,d.Z)("Edit","M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z")(a)}},19(c,b,a){a.d(b,{Z:()=>g});var d=a(4),e=a(6),f=["viewBox"];let g=function(a){var b=a.viewBox,c=(0,d.Z)(a,f);return c.viewBox=void 0===b?"0 0 16 16":b,(0,e.Z)("Git","M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z")(c)}},20(c,b,a){a.d(b,{Z:()=>g});var d=a(4),e=a(6),f=["viewBox","fill"];let g=function(a){var c=a.viewBox,g=a.fill,b=(0,d.Z)(a,f);return b.viewBox=void 0===c?"0 0 3200 3200":c,b.fill=void 0===g?"#b93131":g,(0,e.Z)("Npm","M269 3186 c-99 -27 -193 -106 -243 -205 l-26 -50 0 -1332 0 -1331 31 -59 c40 -75 102 -132 187 -172 l67 -32 1255 -3 c911 -2 1271 0 1315 8 119 23 224 102 282 211 l28 54 0 1325 0 1325 -29 54 c-42 80 -128 163 -201 192 l-60 24 -1280 2 c-992 1 -1290 -1 -1326 -11z m1311 -1386 l0 -600 200 0 200 0 0 600 0 600 200 0 200 0 0 -800 0 -800 -800 0 -800 0 0 800 0 800 400 0 400 0 0 -600z")(b)}},118(c,b,a){a.d(b,{Z:()=>j});var d=a(2),e=a(4),f=a(28),g=a(25),h=a(0),i=["fgColor","bgColor"];let j=function(a){var b=a.fgColor,c=a.bgColor,j=(0,e.Z)(a,i);return(0,h.jsxs)(f.Z,(0,d.Z)((0,d.Z)({},j),{},{children:[(0,h.jsx)(g.Z,{d:"M12 20c4.41 0 8-3.59 8-8s-3.59-8-8-8-8 3.59-8 8 3.59 8 8 8zM10 7.5l6 4.5-6 4.5v-9z",opacity:".3",fill:c}),(0,h.jsx)(g.Z,{d:"M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10zm0-18c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8zm-2 3.5v9l6-4.5z",fill:b})]}))}},6(c,b,a){a.d(b,{Z:()=>j});var d=a(2),e=a(4),f=a(28),g=a(25),h=a(0),i=["type","children"];let j=function(b,c){var a=function(a){var j=a.type,k=a.children,l=(0,e.Z)(a,i);return(0,h.jsxs)(f.Z,(0,d.Z)((0,d.Z)({},l),{},{"data-name":b,children:[(0,h.jsx)(g.Z,{d:c[void 0===j?null:j]||c["_"]||c}),k]}))};return a.displayName=b,a}},36(c,b,a){a.d(b,{Z:()=>i});var d,e=a(1),f=a(22),g=a(27),h=a(13);let i=function(a){var b=a.pageName,c=a.tplProps;(0,e.useEffect)(function(){return setTimeout(function(){(0,g.Ns)({params:{activeMenu:b}}),(0,f.WI)({tplProps:c,pageName:b})}),d||(d=1,(0,h.Bt)("ajaxGet",{url:"/data/env",ini:!0,disableCacheBusting:!0})),function(){(0,g.Ns)({params:{activeMenu:null}})}},[])}},399(j,d,a){a.r(d),a.d(d,{default:()=>W});var k,l,m,n,o=a(2),p=a(16),q=a(36),b=a(1),r=a(3),s=a(5),e=function(a){var i=a.mask,f=a.children,c=a.corp,j=a.showControllBar,g=a.restart,d="function"==typeof g?g:function(){},h=null;i&&(h=b.createElement(r.iX,{className:"play-mask",style:u.mask,onTouchStart:d,onTouchEnd:d,onClick:d}));var e={};return j?e.marginBottom=-c+"vw":e.marginBottom=-(2*c)+"vw",b.createElement(r.iX,{className:"rwd-video",style:u.container},b.createElement(r.iX,{className:"rwd-video-inner",style:(0,o.Z)((0,o.Z)({},u.inner),e)},(0,b.cloneElement)(f,{style:(0,o.Z)((0,o.Z)((0,o.Z)({},(0,s.ZP)(f,["props","style"])),u.videoContainer),{},{margin:"-".concat(c,"vw 0")})})),h)};e.defaultProps={showControllBar:!1,mask:!0,corp:23};let t=e;var u={container:{overflow:"hidden",position:"relative",zIndex:0},inner:{position:"relative",padding:"0 0 100%",height:0,overflow:"hidden",zIndex:0},videoContainer:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},mask:{zIndex:1,position:"absolute",top:-10,left:-10,right:-10,bottom:-10}},v=a(70),w=a(35),x=a(7),y=["src","sourceType","otherSources"];let z=function(a){var e=a.src,f=a.sourceType,c=a.otherSources,g=(0,v.Z)(a,y),d=null;return c&&(d=(0,x.tW)(c).map(function(a){var d=c[a];return b.createElement(r.iX,{atom:"source",src:d,type:a,key:a})})),b.createElement(r.iX,(0,w.Z)({atom:"video",controls:!0},g),b.createElement(r.iX,{atom:"source",src:e,type:f}),d)};var A=["showControllBar","mask","corp"],f=(0,b.memo)(function(a){var c=a.showControllBar,d=a.mask,e=a.corp,f=(0,v.Z)(a,A);return b.createElement(t,{showControllBar:c,mask:d,corp:e},b.createElement(z,f))});f.defaultProps={mask:!1};let B=f;var C=a(118);let D=function(a){var c=a.onClick,d=a.playBgColor,e=a.playFgColor,f=a.src;return b.createElement(r.iX,{onTouchStart:c,onTouchEnd:c,onClick:c},b.createElement(r.Ee,{styles:(0,r._s)(E.thumb,!1,!1),src:f}),b.createElement(r.JO,{styles:(0,r._s)(E.play,!1,!1)},b.createElement(C.Z,{bgColor:d,fgColor:e})))};var E={thumb:{width:"100%",top:"50%",position:"absolute",transform:["translateY(-50%)"]},play:{top:"50%",left:"50%",position:"absolute",transform:["translate(-50%, -50%)"],width:100,cursor:"pointer"}},F=a(463),G=a(464),H=a(472),I=a(9),J=a(10),g=a(461),K=a(48),L=a(12),M=["defaultVideoParams","videoId","videoParams"],N=Object.keys,c=function(c){(0,I.Z)(a,c);var d=(0,J.Z)(a);function a(){var b;(0,F.Z)(this,a);for(var e=arguments.length,f=new Array(e),c=0;c<e;c++)f[c]=arguments[c];return b=d.call.apply(d,[this].concat(f)),(0,g.Z)((0,H.Z)(b),"state",{load:0}),(0,g.Z)((0,H.Z)(b),"iframe",null),(0,g.Z)((0,H.Z)(b),"handleEl",function(a){b.iframe=a,b.restart()}),(0,g.Z)((0,H.Z)(b),"restart",function(){b.exec("playVideo")}),(0,g.Z)((0,H.Z)(b),"handleLoad",function(){b.restart()}),b}return(0,G.Z)(a,[{key:"exec",value:function(b){var c=arguments.length>1&& void 0!==arguments[1]?arguments[1]:[];if(this.iframe){var a,d,e=(a=b,JSON.stringify({event:"command",func:a,args:d=c}));this.iframe.contentWindow.postMessage(e,"*")}}},{key:"componentDidMount",value:function(){var a=(0,L.JU)().location;this.setState({load:1,hostname:a.protocol+"//"+a.hostname})}},{key:"render",value:function(){var d=this.state,g=d.load,h=d.hostname;if(!g)return null;var c=this.props,i=c.defaultVideoParams,e=c.videoId,j=c.videoParams,k=(0,v.Z)(c,M),f=[],a=(0,o.Z)((0,o.Z)({},i),j);a.enablejsapi&&(a.origin=h),N(a).forEach(function(b){return f.push(b+"="+encodeURIComponent(a[b]))}),a.loop&&!a.playlist&&f.push("playlist="+e);var l="https://www.youtube.com/embed/"+e+"?"+f.join("&");return b.createElement(t,(0,w.Z)({},k,{restart:this.restart}),b.createElement(K.G,{allow:"autoplay; fullscreen; encrypted-media",src:l,refCb:this.handleEl,onLoad:this.handleLoad}))}}]),a}(b.PureComponent);(0,g.Z)(c,"defaultProps",{defaultVideoParams:{autoplay:1,loop:1,showinfo:0,controls:0,rel:0,mute:1,modestbranding:1,iv_load_policy:3,enablejsapi:1},videoParams:{}}),c.propTypes={};let O=c;var P=a(0);let Q=function(){return k||(k=(0,P.jsx)(O,{videoId:"CjxugyZCfuw"}))};var R=a(11),S=a(58),T=["showControllBar","mask","corp"],i=function(c){(0,I.Z)(a,c);var d=(0,J.Z)(a);function a(){var b;(0,F.Z)(this,a);for(var e=arguments.length,f=new Array(e),c=0;c<e;c++)f[c]=arguments[c];return b=d.call.apply(d,[this].concat(f)),(0,g.Z)((0,H.Z)(b),"state",{src:"",isPlay:!1,curVideoId:null}),(0,g.Z)((0,H.Z)(b),"handleClick",function(){var a=b.props.iframe;b.setState({isPlay:!0},function(){a.postHeight()})}),(0,g.Z)((0,H.Z)(b),"handleInitVideo",function(){var c=b.props,e=c.api,d=c.videoId,a=c.iframe,i=c.srcTpl,f=b.state.curVideoId;if(d!==f&&a){var g=e.replace("[VIDEO_ID]",d),j=a.getWindow(),h=a.getBody();(0,S.js)(h)(function(){var c=j.QZOutputJson,a=(0,s.ZP)(c,["vl","vi",0]);(0,s.ZP)(a,["ul","ui",0,"url"],"").split("/");var e=i.replace("[IP]","apd-9f28976740363721e53bdebab52f428c.v.smtcdns.com").replace("[NAME]",(0,s.ZP)(a,["fn"])).replace("[KEY]",(0,s.ZP)(a,["fvkey"]));b.setState({curVideoId:d,src:e})})(g)}a&&a.postHeight()}),b}return(0,G.Z)(a,[{key:"componentDidMount",value:function(){this.handleInitVideo()}},{key:"componentDidUpdate",value:function(a,b,c){this.handleInitVideo()}},{key:"render",value:function(){var c=this.state,d=c.src,e=c.isPlay,a=this.props,f=a.videoId,g=a.thumbTpl,h=a.playBgColor,i=a.playFgColor;return e&&d?b.createElement(B,{sourceType:'video/mp4; codecs="avc1.42E01E,mp4a.40.2"',refCb:function(a){return setTimeout(function(){return a.play()})},showControllBar:!0,mask:!1,corp:0,src:d}):b.createElement(D,{onClick:this.handleClick,src:g.replace("[VIDEO_ID]",f),playBgColor:h,playFgColor:i})}}]),a}(b.PureComponent);(0,g.Z)(i,"defaultProps",{api:"https://h5vv.video.qq.com/getinfo?otype=json&vids=[VIDEO_ID]&platform=11001",videoId:"",srcTpl:"https://[IP]/vlive.qqvideo.tc.qq.com/[NAME]?vkey=[KEY]&fmt=shd",thumbTpl:"//shp.qpic.cn/qqvideo_ori/0/[VIDEO_ID]_496_280/0"});var h=function(a){var e=a.showControllBar,f=a.mask,g=a.corp,h=(0,v.Z)(a,T),j=(0,b.useState)(),c=(0,R.Z)(j,2),d=c[0],m=c[1],k=(0,b.useRef)(),l=(0,b.useCallback)(function(a){k.current=a,d||m(!0)},[d]);return b.createElement(t,{showControllBar:e,mask:f,corp:g},b.createElement(K.Z,{ref:l},d&&b.createElement(i,(0,w.Z)({iframe:k.current},h))))};h.defaultProps={mask:!1};let U=h,V=function(){return l||(l=(0,P.jsx)(U,{videoId:"j0792wzb6v8"}))},W=function(a){return(0,q.Z)((0,o.Z)((0,o.Z)({},a),{},{pageName:"Video"})),(0,P.jsxs)(P.Fragment,{children:[m||(m=(0,P.jsx)(p.Z,{code:'import React from "react";\nimport { YoutubeRWD } from "organism-react-video";\n\nconst YouTubeRWDExample = () => <YoutubeRWD videoId="CjxugyZCfuw" />;\n\nexport default YouTubeRWDExample;\n',header:"YouTube RWD player",children:(0,P.jsx)(Q,{})})),n||(n=(0,P.jsx)(p.Z,{code:'import React from "react";\nimport QQVideo from "organism-react-qq-video";\n\nconst QQVideoExample = () => <QQVideo videoId="j0792wzb6v8" />;\n\nexport default QQVideoExample;\n',header:"v.qq.com player",children:(0,P.jsx)(V,{})}))]})}}}])