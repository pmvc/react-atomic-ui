"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[12],{15(c,b,a){a.d(b,{UB:()=>H,JG:()=>K,ZP:()=>w});var d,e,f,g,h,i,j=a(1),k=a(3),l=a(17),m=a(19),n=a(20),o=a(18),p=a(5);let q=function(){var[b,c]=(0,j.useState)(function(){return d||function(){}});return d||a.e(23).then(a.bind(a,44)).then(function(a){d=(0,p.MV)(a),c(function(){return d})}),b};var r=a(0);let s=function(a){var b=q(),c="```js\n"+a.children+"\n```";return(0,r.jsx)(k.ER,{children:b(c)})};var t=a(12),u=a(13);let v=function(b){var{url:d}=b,e=(0,u.s4)(),[a,f]=(0,j.useState)(),c=q();return((0,j.useEffect)(function(){(0,t.Bt)("ajaxGet",{url:d,callback:function(c,a,b){if(!1===e())return!1;200===b.status&&f(a.replace(/(\<\!\-\-hidden\-\-\>)([\s\S]*?)(\<\!\-\-\/hidden\-\-\>)/g,""))}})},[]),a)?(0,r.jsx)(k.XX,{children:(0,r.jsx)(k.ER,{children:c(a)})}):null},w=function(z){i=(0,k.UM)(y,i);var b,c,d,p,q,{header:A,children:B,code:C,git:a,npm:t,edit:u,id:D}=z,[E,I]=(0,j.useState)({on:!1}),w={};if(E.on?b=(0,r.jsx)(s,{children:C}):w=x.hidden,a){var F="https://raw.githubusercontent.com/"+a.replace(/(\/(blob|tree)\/(master|main)\/)/,"/$3/")+"README.md",G="https://github.com/"+a;c=(0,r.jsx)(v,{url:F}),d=(0,r.jsx)(k.JO,{atom:"a",target:"_blank",href:G,style:x.icon,children:e||(e=(0,r.jsx)(m.Z,{}))})}if(t){var H="https://www.npmjs.com/package/"+t;p=(0,r.jsx)(k.JO,{atom:"a",target:"_blank",href:H,style:x.icon,children:f||(f=(0,r.jsx)(n.Z,{}))})}return u&&(q=(0,r.jsx)(k.JO,{atom:"a",target:"_blank",href:u,style:x.icon,children:g||(g=(0,r.jsx)(o.Z,{}))})),(0,r.jsxs)(k.aV,{type:"segments",id:D,children:[(0,r.jsxs)(k.XX,{className:"tertiary",children:[(0,r.jsx)(k.h4,{style:x.header,className:"grey",children:A}),(0,r.jsxs)(k.iX,{style:x.iconBlock,children:[q,p,d,(0,r.jsx)(k.JO,{onClick:function(){return I(function(a){var{on:b}=a;return{on:!b}})},style:x.icon,children:h||(h=(0,r.jsx)(l.Z,{}))})]})]}),(0,r.jsx)(k.XX,{className:"secondary",style:w,styles:i.code,children:b}),(0,r.jsx)(k.XX,{children:B}),c]})};var x={header:{margin:0},hidden:{maxHeight:0,padding:"0 16px",margin:0,ovarflow:"hidden"},iconBlock:{position:"absolute",top:16,right:6},icon:{maxWidth:24,cursor:"pointer",marginRight:10}},y={code:[{transition:["padding 500ms ease"]}],fitWidth:[{whiteSpace:"break-spaces"},"code"]},z=a(2),A=a(473),B=a(16),C=a(6),D=a(11),E=["button","anchorLocator","updateUrl","resetUrl","children","id","onClose","path"],F=function(){var a=document.URL.split("#"),b=a.length-1,c="#"+a[b];return{lastAnchor:c}},G=function(c){var a=(0,D.JU)().URL,b=a.lastIndexOf("#"+c);-1!==b&&history.pushState("","",a.substring(0,b))};let H=function(b){var{button:f="Open full screen",anchorLocator:c=F,updateUrl:p=function(a){return history.pushState("","",(0,D.JU)().URL+"#"+a)},resetUrl:g=G,children:h,id:a,onClose:i,path:d}=b,l=(0,A.Z)(b,E),[m,q]=(0,j.useState)(),s=(0,j.useRef)();(0,j.useEffect)(function(){var{lastAnchor:b}=(0,C.ZP)(c,[d])||{};"#"+a===b?q(!0):q(function(a){return a&&(s.current="path"),!1})},[c,a,d]);var n=(0,j.useCallback)(function(){var{lastAnchor:b}=(0,C.ZP)(c,[d])||{};a&&a!==b&&p(a),q(!0)},[c,a,d]),o=(0,j.useCallback)(function(){"path"!==s.current&&(0,C.ZP)(g,[a]),(0,C.ZP)(i),q(!1),s.current=null},[g,a,i]),e=null;return m&&(e=(0,r.jsx)(B.IT,(0,z.Z)((0,z.Z)({},l),{},{onClose:o,children:h}))),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(k.zx,{onClick:n,children:f}),e]})};var I=a(36),J=["id"];let K=function(a){var{id:b="fullscreen"}=a,c=(0,A.Z)(a,J);return(0,r.jsx)(I.yR,{initStates:{":hash":"path"},children:function(a){return(0,r.jsx)(H,(0,z.Z)((0,z.Z)({},(0,z.Z)((0,z.Z)({},c),a)),{},{id:b,anchorLocator:I.ul,updateUrl:function(a){return(0,I.gH)("url",{url:(0,D.JU)().URL+"#"+a})},resetUrl:function(a){return(0,I.gH)("resetAnchor",a)}}))}})}},46(c,b,a){a.d(b,{Z:()=>e});var d=a(7);function e(a,e){var b,f,c;return function(a){if(Array.isArray(a))return a}(a)||(b=a,f=e,c=[],(0,d.tW)(b).some(function(a,d){if(c.push(b[a]),f===d+1)return!0}),c)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}},17(c,b,a){a.d(b,{Z:()=>e});var d=a(4);let e=function(a){return(0,d.Z)("Code","M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z")(a)}},18(c,b,a){a.d(b,{Z:()=>e});var d=a(4);let e=function(a){return(0,d.Z)("Edit","M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z")(a)}},19(c,b,a){a.d(b,{Z:()=>g});var d=a(473),e=a(4),f=["viewBox"];let g=function(a){var{viewBox:c="0 0 16 16"}=a,b=(0,d.Z)(a,f);return b.viewBox=c,(0,e.Z)("Git","M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z")(b)}},20(c,b,a){a.d(b,{Z:()=>g});var d=a(473),e=a(4),f=["viewBox","fill"];let g=function(b){var{viewBox:c="0 0 3200 3200",fill:g="#b93131"}=b,a=(0,d.Z)(b,f);return a.viewBox=c,a.fill=g,(0,e.Z)("Npm","M269 3186 c-99 -27 -193 -106 -243 -205 l-26 -50 0 -1332 0 -1331 31 -59 c40 -75 102 -132 187 -172 l67 -32 1255 -3 c911 -2 1271 0 1315 8 119 23 224 102 282 211 l28 54 0 1325 0 1325 -29 54 c-42 80 -128 163 -201 192 l-60 24 -1280 2 c-992 1 -1290 -1 -1326 -11z m1311 -1386 l0 -600 200 0 200 0 0 600 0 600 200 0 200 0 0 -800 0 -800 -800 0 -800 0 0 800 0 800 400 0 400 0 0 -600z")(a)}},4(c,b,a){a.d(b,{Z:()=>j});var d=a(2),e=a(473),f=a(26),g=a(24),h=a(0),i=["type","children"];let j=function(b,c){var a=function(j){var{type:k=null,children:l}=j,m=(0,e.Z)(j,i),a=c[k]||c["_"]||c;return(0,h.jsxs)(f.Z,(0,d.Z)((0,d.Z)({},m),{},{"data-name":b,children:[a.map?a.map(function(a){return(0,h.jsx)(g.Z,{d:a})}):(0,h.jsx)(g.Z,{d:a}),l]}))};return a.displayName=b,a}},404(e,b,a){a.r(b),a.d(b,{default:()=>w});var f,g=a(2),h=a(15),i=a(31),j=a(46),d=a(1),k=a(5),l=a(48),m=a(3),n=a(6),o=a(93),p=a(39),q=a(13),r="[VERSION]",s=function(a){var c=a.onLoadDelay,C=void 0===c?1500:c,e=a.inlineCSS,m=void 0===e?"body {padding: 0; margin: 0; background: transparent !important;}":e,f=a.js,s=void 0===f?"https://cdn.jsdelivr.net/npm/@asciidoctor/core@[VERSION]/dist/browser/asciidoctor.min.js":f,h=a.css,t=void 0===h?"https://cdn.jsdelivr.net/npm/@asciidoctor/core@[VERSION]/dist/css/asciidoctor.min.css":h,i=a.npmVersion,l=void 0===i?"2.2.6":i,D=a.onLoad,b=a.options,u=a.attributes,v=a.children,w=(0,d.useRef)(),x=(0,q.J7)(),y=(0,j.Z)(x,1),E=y[0];(0,d.useEffect)(function(){var b,a=w.current.getWindow(),c=function(a){w.current.postHeight(),(0,n.ZP)(D,[a])};return a.onRender=function(h){var e=(0,o.Z)({doc:a.document}),d=(0,j.Z)(e,2),f=d[0],g=d[1];b=g;var i=function(){E(function(){return c(h)},C)};f(function(){var a=p.ZP.from(h).all("img"),b=null==a?void 0:a.length;if(b){var c=0;a.forEach(function(d){var a=new Image;a.onload=function(){++c>=b&&i()},a.onerror=function(){++c>=b&&i()},a.src=d.src})}i(),w.current.postHeight()})},function(){(0,n.ZP)(b)}},[]),(b=b||{}).attributes=(0,g.Z)((0,g.Z)({},(0,k.ZP)(b,["attributes"],{})),u);var z=s.replace(r,l),A=t.replace(r,l),B=(0,d.useMemo)(function(){return['<link rel="stylesheet" type="text/css" href="'.concat(A,'" />'),'<script src="'.concat(z,'"></script>'),'<div id="data" style="display:none;">'+v+"</div>",'<div id="output"></div>',"\n        <script>\n	    var asciidoctor = Asciidoctor();\n	    var html = asciidoctor.convert(\n              document.getElementById('data').innerHTML,\n              ".concat(JSON.stringify(b),"\n            );\n            var output = document.getElementById('output');\n	    output.innerHTML = html;\n            window.onRender(output);\n        </script>\n        ")].join("")},[A,z,v,b]);return{expose:{getBody:function(){return w.current.getBody()}},inlineCSS:m,lastIframe:w,html:B}},c=(0,d.forwardRef)(function(b,c){var a=s(b),h=a.expose,e=a.inlineCSS,f=a.lastIframe,g=a.html;return(0,d.useImperativeHandle)(c,function(){return h},[]),d.createElement(l.Z,{ref:f,inlineCSS:e,autoHeight:!0},d.createElement(m.ER,null,g))});c.displayName="Asciidoc";let t=c;var u=a(0);let v=function(a){return(0,u.jsx)(t,{options:{doctype:"book"},children:"\n:toc:\n:toc-placement!:\ntoc::[]\n\n= h1 - test\ntest\n\n== h2 - test2\n* Hello *world*\n\n== h2 - test3\n- [ ] option1\n- [*] option1\n"})},w=function(a){return(0,i.Z)((0,g.Z)((0,g.Z)({},a),{},{pageName:"AsciiDoc"})),(0,u.jsx)(u.Fragment,{children:f||(f=(0,u.jsx)(h.ZP,{code:'import Asciidoc from "organism-react-asciidoc";\n\nconst adoc = `\n:toc:\n:toc-placement!:\ntoc::[]\n\n= h1 - test\ntest\n\n== h2 - test2\n* Hello *world*\n\n== h2 - test3\n- [ ] option1\n- [*] option1\n`;\n\nconst AsciidocDemo = (props) => (\n  <Asciidoc options={{ doctype: "book" }}>{adoc}</Asciidoc>\n);\n\nexport default AsciidocDemo;\n',header:"Ascii Doc",edit:"https://codesandbox.io/s/8vj7x3m82",git:"react-atomic/react-atomic-organism/tree/main/packages/organism-react-asciidoc/",children:(0,u.jsx)(v,{})}))})}},31(c,b,a){a.d(b,{Z:()=>i});var d,e=a(1),f=a(22),g=a(23),h=a(12);let i=function(a){var b=a.pageName,c=a.tplProps;(0,e.useEffect)(function(){return setTimeout(function(){(0,g.Ns)({params:{activeMenu:b}}),(0,f.WI)({tplProps:c,pageName:b})}),d||(d=1,(0,h.Bt)("ajaxGet",{url:"/data/env",ini:!0,disableCacheBusting:!0})),function(){(0,g.Ns)({params:{activeMenu:null}})}},[])}}}])