"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[10],{15(c,b,a){a.d(b,{UB:()=>H,JG:()=>K,ZP:()=>w});var d,e,f,g,h,i,j=a(1),k=a(3),l=a(17),m=a(19),n=a(20),o=a(18),p=a(5);let q=function(){var[b,c]=(0,j.useState)(function(){return d||function(){}});return d||a.e(23).then(a.bind(a,45)).then(function(a){d=(0,p.MV)(a),c(function(){return d})}),b};var r=a(0);let s=function(a){var b=q(),c="```js\n"+a.children+"\n```";return(0,r.jsx)(k.ER,{children:b(c)})};var t=a(11),u=a(13);let v=function(b){var{url:d}=b,e=(0,u.s4)(),[a,f]=(0,j.useState)(),c=q();return((0,j.useEffect)(function(){(0,t.Bt)("ajaxGet",{url:d,callback:function(c,a,b){if(!1===e())return!1;200===b.status&&f(a.replace(/(\<\!\-\-hidden\-\-\>)([\s\S]*?)(\<\!\-\-\/hidden\-\-\>)/g,""))}})},[]),a)?(0,r.jsx)(k.XX,{children:(0,r.jsx)(k.ER,{children:c(a)})}):null},w=function(z){i=(0,k.UM)(y,i);var b,c,d,p,q,{header:A,children:B,code:C,git:a,npm:t,edit:u,id:D}=z,[E,I]=(0,j.useState)({on:!1}),w={};if(E.on?b=(0,r.jsx)(s,{children:C}):w=x.hidden,a){var F="https://raw.githubusercontent.com/"+a.replace(/(\/(blob|tree)\/(master|main)\/)/,"/$3/")+"README.md",G="https://github.com/"+a;c=(0,r.jsx)(v,{url:F}),d=(0,r.jsx)(k.JO,{atom:"a",target:"_blank",href:G,style:x.icon,children:e||(e=(0,r.jsx)(m.Z,{}))})}if(t){var H="https://www.npmjs.com/package/"+t;p=(0,r.jsx)(k.JO,{atom:"a",target:"_blank",href:H,style:x.icon,children:f||(f=(0,r.jsx)(n.Z,{}))})}return u&&(q=(0,r.jsx)(k.JO,{atom:"a",target:"_blank",href:u,style:x.icon,children:g||(g=(0,r.jsx)(o.Z,{}))})),(0,r.jsxs)(k.aV,{type:"segments",id:D,children:[(0,r.jsxs)(k.XX,{className:"tertiary",children:[(0,r.jsx)(k.h4,{style:x.header,className:"grey",children:A}),(0,r.jsxs)(k.iX,{style:x.iconBlock,children:[q,p,d,(0,r.jsx)(k.JO,{onClick:function(){return I(function(a){var{on:b}=a;return{on:!b}})},style:x.icon,children:h||(h=(0,r.jsx)(l.Z,{}))})]})]}),(0,r.jsx)(k.XX,{className:"secondary",style:w,styles:i.code,children:b}),(0,r.jsx)(k.XX,{children:B}),c]})};var x={header:{margin:0},hidden:{maxHeight:0,padding:"0 16px",margin:0,ovarflow:"hidden"},iconBlock:{position:"absolute",top:16,right:6},icon:{maxWidth:24,cursor:"pointer",marginRight:10}},y={code:[{transition:["padding 500ms ease"]}],fitWidth:[{whiteSpace:"break-spaces"},"code"]},z=a(2),A=a(452),B=a(16),C=a(7),D=a(8),E=["button","anchorLocator","updateUrl","resetUrl","children","id","onClose","path"],F=function(){var a=document.URL.split("#"),b=a.length-1,c="#"+a[b];return{lastAnchor:c}},G=function(c){var a=(0,D.JU)().URL,b=a.lastIndexOf("#"+c);-1!==b&&history.pushState("","",a.substring(0,b))};let H=function(b){var{button:f="Open full screen",anchorLocator:c=F,updateUrl:p=function(a){return history.pushState("","",(0,D.JU)().URL+"#"+a)},resetUrl:g=G,children:h,id:a,onClose:i,path:d}=b,l=(0,A.Z)(b,E),[m,q]=(0,j.useState)(),s=(0,j.useRef)();(0,j.useEffect)(function(){var{lastAnchor:b}=(0,C.ZP)(c,[d])||{};"#"+a===b?q(!0):q(function(a){return a&&(s.current="path"),!1})},[c,a,d]);var n=(0,j.useCallback)(function(){var{lastAnchor:b}=(0,C.ZP)(c,[d])||{};a&&a!==b&&p(a),q(!0)},[c,a,d]),o=(0,j.useCallback)(function(){"path"!==s.current&&(0,C.ZP)(g,[a]),(0,C.ZP)(i),q(!1),s.current=null},[g,a,i]),e=null;return m&&(e=(0,r.jsx)(B.IT,(0,z.Z)((0,z.Z)({},l),{},{onClose:o,children:h}))),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(k.zx,{onClick:n,children:f}),e]})};var I=a(36),J=["id"];let K=function(a){var{id:b="fullscreen"}=a,c=(0,A.Z)(a,J);return(0,r.jsx)(I.yR,{initStates:{":hash":"path"},children:function(a){return(0,r.jsx)(H,(0,z.Z)((0,z.Z)({},(0,z.Z)((0,z.Z)({},c),a)),{},{id:b,anchorLocator:I.ul,updateUrl:function(a){return(0,I.gH)("url",{url:(0,D.JU)().URL+"#"+a})},resetUrl:function(a){return(0,I.gH)("resetAnchor",a)}}))}})}},47(c,b,a){a.d(b,{Z:()=>e});var d=a(6);function e(a,e){var b,f,c;return function(a){if(Array.isArray(a))return a}(a)||(b=a,f=e,c=[],(0,d.tW)(b).some(function(a,d){if(c.push(b[a]),f===d+1)return!0}),c)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}},115(c,b,a){a.d(b,{Z:()=>e});var d=a(4);let e=function(a){return(0,d.Z)("ChevronRight","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z")(a)}},17(c,b,a){a.d(b,{Z:()=>e});var d=a(4);let e=function(a){return(0,d.Z)("Code","M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z")(a)}},18(c,b,a){a.d(b,{Z:()=>e});var d=a(4);let e=function(a){return(0,d.Z)("Edit","M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z")(a)}},19(c,b,a){a.d(b,{Z:()=>g});var d=a(452),e=a(4),f=["viewBox"];let g=function(a){var{viewBox:c="0 0 16 16"}=a,b=(0,d.Z)(a,f);return b.viewBox=c,(0,e.Z)("Git","M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z")(b)}},20(c,b,a){a.d(b,{Z:()=>g});var d=a(452),e=a(4),f=["viewBox","fill"];let g=function(b){var{viewBox:c="0 0 3200 3200",fill:g="#b93131"}=b,a=(0,d.Z)(b,f);return a.viewBox=c,a.fill=g,(0,e.Z)("Npm","M269 3186 c-99 -27 -193 -106 -243 -205 l-26 -50 0 -1332 0 -1331 31 -59 c40 -75 102 -132 187 -172 l67 -32 1255 -3 c911 -2 1271 0 1315 8 119 23 224 102 282 211 l28 54 0 1325 0 1325 -29 54 c-42 80 -128 163 -201 192 l-60 24 -1280 2 c-992 1 -1290 -1 -1326 -11z m1311 -1386 l0 -600 200 0 200 0 0 600 0 600 200 0 200 0 0 -800 0 -800 -800 0 -800 0 0 800 0 800 400 0 400 0 0 -600z")(a)}},4(c,b,a){a.d(b,{Z:()=>j});var d=a(2),e=a(452),f=a(26),g=a(24),h=a(0),i=["type","children"];let j=function(b,c){var a=function(j){var{type:k=null,children:l}=j,m=(0,e.Z)(j,i),a=c[k]||c["_"]||c;return(0,h.jsxs)(f.Z,(0,d.Z)((0,d.Z)({},m),{},{"data-name":b,children:[a.map?a.map(function(a){return(0,h.jsx)(g.Z,{d:a})}):(0,h.jsx)(g.Z,{d:a}),l]}))};return a.displayName=b,a}},399(k,c,a){a.r(c),a.d(c,{default:()=>aq});var l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C=a(2),D=a(15),E=a(31),b=a(1),g=a(3),F=a(42),G=a(47),H=a(452),I=a(5),J=["hoverStyle","className","style"];let K=function(a){var e=a.hoverStyle,f=a.className,h=a.style,i=(0,H.Z)(a,J),j=(0,b.useState)({}),c=(0,G.Z)(j,2),k=c[0],l=c[1],d={enter:(0,b.useCallback)(function(){e&&l(e)},[e]),leave:function(){l({})}};return b.createElement(g.iX,(0,F.Z)({},i,{className:(0,g.Jx)("carousel",f),style:(0,C.Z)((0,C.Z)((0,C.Z)({},L.container),h),k),onMouseEnter:d.enter,onMouseLeave:d.leave}))};var L={container:{display:"inline-block",maxWidth:"100%",maxHeight:"100%",overflow:"hidden",width:"100%",textAlign:"center"}},M=a(454),N=a(455),O=a(480),P=a(9),Q=a(10),h=a(451),R=a(115),S=["style","iconStyle","onClick"],T=["children","carouselAttr","innerContainer","style","onLeft","onRight"],U=function(c){(0,P.Z)(a,c);var d=(0,Q.Z)(a);function a(){var b;(0,M.Z)(this,a);for(var e=arguments.length,f=new Array(e),c=0;c<e;c++)f[c]=arguments[c];return b=d.call.apply(d,[this].concat(f)),(0,h.Z)((0,O.Z)(b),"handleEnter",function(){b.setState({hoverStyle:{opacity:".9"}})}),(0,h.Z)((0,O.Z)(b),"handleLeave",function(){b.setState({hoverStyle:{}})}),b}return(0,N.Z)(a,[{key:"render",value:function(){var a=this.props,c=a.style,d=a.iconStyle,e=a.onClick,f=(0,H.Z)(a,S),h=(0,I.ZP)(this.state,["hoverStyle"],{});return b.createElement(g.iX,{style:(0,C.Z)((0,C.Z)((0,C.Z)({},W.arrowContainer),c),h),onMouseEnter:this.handleEnter,onMouseLeave:this.handleLeave,onClick:e},b.createElement(g.JO,(0,F.Z)({},f,{styles:(0,g._s)((0,C.Z)((0,C.Z)({},W.icon),d),!1,!1)}),b.createElement(R.Z,{style:{cursor:"pointer"}})))}}]),a}(b.Component),i=function(c){(0,P.Z)(a,c);var d=(0,Q.Z)(a);function a(){return(0,M.Z)(this,a),d.apply(this,arguments)}return(0,N.Z)(a,[{key:"render",value:function(){var d,e,a=this.props,f=a.children,k=a.carouselAttr,h=a.innerContainer,l=a.style,i=a.onLeft,j=a.onRight,m=(0,H.Z)(a,T),c=f;return k&&(c=b.Children.map(f,function(a){return b.cloneElement(a,(0,C.Z)({},k))})),h&&(c=b.cloneElement(h,{},c)),i&&(d=b.createElement(U,{className:"backward",onClick:i,iconStyle:W.leftIcon,style:W.arrowLeft})),j&&(e=b.createElement(U,{className:"forward",onClick:j,iconStyle:W.rightIcon,style:W.arrowRight})),b.createElement(g.iX,(0,F.Z)({},m,{style:(0,C.Z)((0,C.Z)({},W.container),l)}),c,d,e)}}]),a}(b.Component);let V=i;var W={container:{position:"relative",whiteSpace:"nowrap",overflow:"hidden",minHeight:100},arrowContainer:{width:"15%",height:"100%",position:"absolute",top:0,backgroundRepeat:"repeat-x",opacity:".3",cursor:"pointer"},arrowLeft:{left:0,backgroundImage:"linear-gradient(to right, rgba(0,0,0,0.3) 0, rgba(0,0,0,0.001) 100%)"},arrowRight:{right:0,backgroundImage:"linear-gradient(to right, rgba(0,0,0,0.001) 0, rgba(0,0,0,0.3) 100%)"},icon:{width:50,height:50,position:"absolute",top:"50%",transform:["translateY(-50%)"],fill:"#fff"},leftIcon:{transform:["rotate(180deg) translateY(50%)"]},rightIcon:{right:0}},X=a(60),Y=a(7),Z=["style","className","carouselAttr","container","children","thumbAttr","thumbListStyle","carouselListStyle","infinity","selected","onChange","onSelected","hideThumb"],d=function(a){var q=a.style,r=a.className,c=a.carouselAttr,s=a.container,h=a.children,d=a.thumbAttr,t=a.thumbListStyle,u=a.carouselListStyle,v=a.infinity,i=a.selected,w=a.onChange,x=a.onSelected,y=a.hideThumb,z=(0,H.Z)(a,Z),j=(0,b.useState)(),e=(0,G.Z)(j,2),k=e[0],A=e[1],o=(0,b.useState)(),f=(0,G.Z)(o,2),p=f[0],B=f[1],D=(0,b.useRef)(),E=(0,b.useRef)(),J=(0,C.Z)((0,C.Z)((0,C.Z)({},c),d),{},{hoverStyle:_.thumbHover,className:"link card",style:(0,C.Z)((0,C.Z)((0,C.Z)({},(0,I.ZP)(c,["style"],{})),_.thumb),(0,I.ZP)(d,["style"],{}))});(0,b.useEffect)(function(){var c,a=[];b.Children.forEach(h,function(b){b&&a.push(b)}),B(a),a&&a.length&&(a.some(function(b,d){var a=(0,I.ZP)(b,["props","name"])||d;return a===i&&(c=a,!0)}),c||(c=(0,I.ZP)(a.slice(0,1)[0],["props","name"],0)),A(c))},[i,h]);var L=function(){N(D.current)},M=function(){N(E.current)},N=function(a){A(a),(0,Y.ZP)(w,[a])};return(0,b.useMemo)(function(){if(!p||!p.length)return null;D.current=null,E.current=null;var d=null,f=!1,e=[];p.forEach(function(h,j){var a=(0,I.ZP)(h,["props","name"])||j,o={},q=a===k;if(p[j]=h=(0,g.J_)(h)((0,C.Z)((0,C.Z)({},c),{},{name:a,key:a})),q?(z.key=a,o=_.thumbActive,d=x({selected:k,childs:p,activeEl:f=h,handleChange:N})):f?E.current||(E.current=a):D.current=a,!y){var r=(0,C.Z)((0,C.Z)({key:a},J),{},{className:(0,g.Jx)(J.className,{active:q}),onClick:function(){N(a)},onMouseMove:function(a){n&&(clearTimeout(n),n=null);var b=a.screenX,c=a.screenY;n=setTimeout(function(){l=b,m=c},100)},onMouseOver:function(b){var c=b.screenX,d=b.screenY;(l!==c||m!==d)&&N(a)},style:null,styles:(0,g._s)((0,C.Z)((0,C.Z)({},J.style),o),!1,!1)}),i=(0,I.ZP)(h,["props","thumbContainer"]);i=i?b.createElement(K,null,i):h,e.push((0,g.J_)(i)(r))}});var a=[];return a.push(b.createElement(V,{key:"list",style:u,onLeft:L,onRight:M},(0,g.J_)(d)(z))),y||a.push(b.createElement(V,(0,F.Z)({key:"thumb-list"},z,{style:(0,C.Z)((0,C.Z)({},_.thumbList),t),className:"cards thumbs"}),e)),null===E.current&&v&&p&&(E.current=p.slice(0,1)[0].props.name),null===D.current&&v&&p&&(D.current=p.slice(-1)[0].props.name),(0,g.J_)(s)({style:(0,C.Z)((0,C.Z)({},_.container),q),className:(0,g.Jx)(r,"carousel-navigation")},a)},[p,k])};d.defaultProps={container:g.iX,infinity:!0};let $=d;var _={container:{position:"relative",marginBottom:35},thumbList:{fontSize:"1rem",width:"77%",margin:"-85px auto 0",minHeight:50,padding:5,whiteSpace:"normal"},thumb:{margin:"0 5px 10px 0",opacity:.5,overflow:"hidden",width:50,height:50,verticalAlign:"bottom"},thumbHover:{opacity:1},thumbActive:{opacity:1,border:"1px solid #fff"}},aa=["animate","className"],e=function(c){(0,P.Z)(a,c);var d=(0,Q.Z)(a);function a(){var e;(0,M.Z)(this,a);for(var f=arguments.length,g=new Array(f),c=0;c<f;c++)g[c]=arguments[c];return e=d.call.apply(d,[this].concat(g)),(0,h.Z)((0,O.Z)(e),"handleSelected",function(a){var c=a.activeEl;a.selected,a.handleChange;var d=e.props.animate;return b.createElement(X.RI,d,c)}),e}return(0,N.Z)(a,[{key:"render",value:function(){var a=this.props,c=(a.animate,a.className),d=(0,H.Z)(a,aa),e=(0,g.Jx)("carousel-animation",c);return b.createElement($,(0,F.Z)({},d,{className:e,onSelected:this.handleSelected}))}}]),a}(b.Component);(0,h.Z)(e,"defaultProps",{animate:{enter:"fadeIn-500",leave:"fadeOut-100"}});let ab=e;var ac=["onHeight","className","disableScroll"],ad=function(a){return void 0!==a.touches?a.touches[0].pageX:a.clientX},j=(0,b.forwardRef)(function(c,e){var k=c.onHeight,f=c.className,h=c.disableScroll,i=(0,H.Z)(c,ac),j=(0,b.useRef)(),l=(0,b.useRef)(),m=(0,b.useRef)(),n={getEl:function(){return j.current}},a={swipeStart:function(a){l.current=!0,m.current=ad(a)},swipeMove:function(a){if(!l.current)return!1;ad(a),m.current},swipeEnd:function(a){l.current=!1}};(0,b.useImperativeHandle)(e,function(){return n},[]),(0,b.useEffect)(function(){var a;return k&&(a=setTimeout(function(){return(0,Y.ZP)(k,[j.current.offsetHeight])},700)),function(){a&&clearTimeout(a)}},[]);var d=(0,C.Z)({},af.container);return h&&(d.overflow="hidden"),b.createElement(g.iX,{style:d,refCb:j},b.createElement(g.aV,(0,F.Z)({className:(0,g.Jx)("carousel-swipe",f),style:af.inside},i,{onMouseDown:a.swipeStart,onMouseMove:a.swipeMove,onMouseUp:a.swipeEnd,onMouseLeave:a.swipeMove,onTouchStart:a.swipeStart,onTouchMove:a.swipeMove,onTouchEnd:a.swipeEnd,onTouchCancel:a.swipeMove})))});let ae=j;var af={container:{overflow:"scroll hidden",position:"relative",paddingBottom:5,fontSize:"1rem"},inside:{display:"inline-block",position:"relative",whiteSpace:"nowrap",overflow:"hidden"}},ag=["listClassName"],f=(0,b.forwardRef)(function(a,e){var f=a.listClassName,h=(0,H.Z)(a,ag),i=(0,b.useState)("auto"),c=(0,G.Z)(i,2),d=c[0],k=c[1],j=(0,b.useRef)(),l={resetScroll:function(){var a,b=null===(a=j.current)|| void 0===a?void 0:a.getEl();b&&(b.scrollLeft=0)}};return(0,b.useImperativeHandle)(e,function(){return l},[]),b.createElement(g.iX,{style:(0,C.Z)((0,C.Z)({},ai.container),{},{height:d})},b.createElement(V,(0,F.Z)({},h,{innerContainer:b.createElement(ae,{horizontal:!0,ref:j,className:f,onHeight:function(a){k(a)},disableScroll:"auto"===d})})))});f.displayName="HorizontalScroll";let ah=f;var ai={container:{overflow:"hidden"}},aj=a(0);let ak=function(a){return(0,aj.jsxs)(ab,{carouselAttr:{style:al.carousel},carouselListStyle:al.carouselList,style:al.container,children:[(0,aj.jsx)(K,{children:(0,aj.jsx)("img",{style:al.img,src:"https://c1.staticflickr.com/9/8567/16584613141_d984a3680a_b.jpg"})}),(0,aj.jsx)(K,{children:(0,aj.jsx)(g.Ee,{style:al.img,src:"https://source.unsplash.com/random"})}),o||(o=(0,aj.jsx)(K,{children:"3"})),p||(p=(0,aj.jsx)(K,{children:"4"})),q||(q=(0,aj.jsx)(K,{children:"5"}))]})};var al={container:{margin:"0 10%"},carouselList:{minHeight:305},carousel:{width:"100%",height:300,background:"#00558B"},img:{maxWidth:"100%",maxHeight:"100%",verticalAlign:"bottom"}};let am=function(a){return(0,aj.jsxs)(ab,{carouselAttr:{style:an.carousel},carouselListStyle:an.carouselList,style:an.container,hideThumb:!0,children:[(0,aj.jsx)(K,{children:(0,aj.jsx)("img",{style:an.img,src:"https://c1.staticflickr.com/9/8567/16584613141_d984a3680a_b.jpg"})}),r||(r=(0,aj.jsx)(K,{children:"2"})),s||(s=(0,aj.jsx)(K,{children:"3"})),t||(t=(0,aj.jsx)(K,{children:"4"})),u||(u=(0,aj.jsx)(K,{children:"5"}))]})};var an={container:{margin:"0 10%"},carouselList:{minHeight:305},carousel:{width:"100%",height:300,background:"#00558B"},img:{maxWidth:"100%",verticalAlign:"bottom"}};let ao=function(a){return(0,aj.jsxs)(ah,{carouselAttr:{style:ap.carousel},children:[(0,aj.jsx)(K,{children:(0,aj.jsx)("img",{style:ap.img,src:"https://c1.staticflickr.com/9/8567/16584613141_d984a3680a_b.jpg"})}),v||(v=(0,aj.jsx)(K,{children:"2"})),w||(w=(0,aj.jsx)(K,{children:"3"})),x||(x=(0,aj.jsx)(K,{children:"4"})),y||(y=(0,aj.jsx)(K,{children:"5"}))]})};var ap={carousel:{width:300,height:300,background:"#00558B",fontSize:"5rem"}};let aq=function(a){return(0,E.Z)((0,C.Z)((0,C.Z)({},a),{},{pageName:"Carousel"})),(0,aj.jsxs)(aj.Fragment,{children:[z||(z=(0,aj.jsx)(D.ZP,{code:'import React from "react";\nimport { Image } from "react-atomic-molecule";\nimport { Carousel, CarouselAnimation } from "organism-react-carousel";\n\nconst CarouselAnimationExample = (props) => {\n  return (\n    <CarouselAnimation\n      carouselAttr={{\n        style: Styles.carousel,\n      }}\n      carouselListStyle={Styles.carouselList}\n      style={Styles.container}\n    >\n      <Carousel>\n        <img\n          style={Styles.img}\n          src="https://c1.staticflickr.com/9/8567/16584613141_d984a3680a_b.jpg"\n        />\n      </Carousel>\n      <Carousel>\n        <Image style={Styles.img} src="https://source.unsplash.com/random" />\n      </Carousel>\n      <Carousel>3</Carousel>\n      <Carousel>4</Carousel>\n      <Carousel>5</Carousel>\n    </CarouselAnimation>\n  );\n};\n\nexport default CarouselAnimationExample;\n\nconst height = 300;\n\nconst Styles = {\n  container: {\n    margin: "0 10%",\n  },\n  carouselList: {\n    minHeight: height + 5,\n  },\n  carousel: {\n    width: "100%",\n    height,\n    background: "#00558B",\n  },\n  img: {\n    maxWidth: "100%",\n    maxHeight: "100%",\n    verticalAlign: "bottom",\n  },\n};\n',header:"Carousel Animation",git:"react-atomic/react-atomic-organism/blob/main/packages/organism-react-carousel/",npm:"organism-react-carousel",children:(0,aj.jsx)(ak,{})})),A||(A=(0,aj.jsx)(D.ZP,{code:'import React from "react";\nimport { Carousel, CarouselAnimation } from "organism-react-carousel";\n\nconst CarouselAnimationExample = (props) => {\n  return (\n    <CarouselAnimation\n      carouselAttr={{\n        style: Styles.carousel,\n      }}\n      carouselListStyle={Styles.carouselList}\n      style={Styles.container}\n      hideThumb\n    >\n      <Carousel>\n        <img\n          style={Styles.img}\n          src="https://c1.staticflickr.com/9/8567/16584613141_d984a3680a_b.jpg"\n        />\n      </Carousel>\n      <Carousel>2</Carousel>\n      <Carousel>3</Carousel>\n      <Carousel>4</Carousel>\n      <Carousel>5</Carousel>\n    </CarouselAnimation>\n  );\n};\n\nexport default CarouselAnimationExample;\n\nconst height = 300;\n\nconst Styles = {\n  container: {\n    margin: "0 10%",\n  },\n  carouselList: {\n    minHeight: height + 5,\n  },\n  carousel: {\n    width: "100%",\n    height,\n    background: "#00558B",\n  },\n  img: {\n    maxWidth: "100%",\n    verticalAlign: "bottom",\n  },\n};\n',header:"Carousel Animation Hide Thumb",git:"react-atomic/react-atomic-organism/blob/main/packages/organism-react-carousel/",npm:"organism-react-carousel",children:(0,aj.jsx)(am,{})})),B||(B=(0,aj.jsx)(D.ZP,{code:'import React from "react";\nimport { Carousel, HorizontalScroll } from "organism-react-carousel";\n\nconst CarouselHorizontalScrollExample = (props) => {\n  return (\n    <HorizontalScroll\n      carouselAttr={{\n        style: Styles.carousel,\n      }}\n    >\n      <Carousel>\n        <img\n          style={Styles.img}\n          src="https://c1.staticflickr.com/9/8567/16584613141_d984a3680a_b.jpg"\n        />\n      </Carousel>\n      <Carousel>2</Carousel>\n      <Carousel>3</Carousel>\n      <Carousel>4</Carousel>\n      <Carousel>5</Carousel>\n    </HorizontalScroll>\n  );\n};\n\nexport default CarouselHorizontalScrollExample;\n\nconst Styles = {\n  carousel: {\n    width: 300,\n    height: 300,\n    background: "#00558B",\n    fontSize: "5rem",\n  },\n};\n',header:"Carousel Horizontal Scroll",children:(0,aj.jsx)(ao,{})}))]})}},31(c,b,a){a.d(b,{Z:()=>i});var d,e=a(1),f=a(22),g=a(23),h=a(11);let i=function(a){var b=a.pageName,c=a.tplProps;(0,e.useEffect)(function(){return setTimeout(function(){(0,g.Ns)({params:{activeMenu:b}}),(0,f.WI)({tplProps:c,pageName:b})}),d||(d=1,(0,h.Bt)("ajaxGet",{url:"/data/env",ini:!0,disableCacheBusting:!0})),function(){(0,g.Ns)({params:{activeMenu:null}})}},[])}}}])