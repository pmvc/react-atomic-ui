"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3],{16(c,b,a){a.d(b,{U:()=>G,Z:()=>w});var d,e,f,g,h,i,j=a(1),k=a(3),l=a(18),m=a(20),n=a(21),o=a(19),p=a(5);let q=function(){var b=(0,j.useState)(function(){return d||function(){}}),c=b[0],e=b[1];return d||a.e(24).then(a.bind(a,43)).then(function(a){d=(0,p.MV)(a),e(function(){return d})}),c};var r=a(0);let s=function(a){var b=q(),c="```js\n"+a.children+"\n```";return(0,r.jsx)(k.ER,{children:b(c)})};var t=a(11),u=a(13);let v=function(c){var e=c.url,f=(0,u.s4)(),a=(0,j.useState)(),b=a[0],g=a[1],d=q();return((0,j.useEffect)(function(){(0,t.Bt)("ajaxGet",{url:e,callback:function(c,a,b){if(!1===f())return!1;200===b.status&&g(a.replace(/(\<\!\-\-hidden\-\-\>)([\s\S]*?)(\<\!\-\-\/hidden\-\-\>)/g,""))}})},[]),b)?(0,r.jsx)(k.XX,{children:(0,r.jsx)(k.ER,{children:d(b)})}):null},w=function(a){i=(0,k.UM)(y,i);var c,d,p,q,t,B=a.header,C=a.children,D=a.code,b=a.git,u=a.npm,w=a.edit,E=a.id,z=(0,j.useState)({on:!1}),F=z[0],J=z[1],A={};if(F.on?c=(0,r.jsx)(s,{children:D}):A=x.hidden,b){var G="https://raw.githubusercontent.com/"+b.replace(/(\/(blob|tree)\/(master|main)\/)/,"/$3/")+"README.md",H="https://github.com/"+b;d=(0,r.jsx)(v,{url:G}),p=(0,r.jsx)(k.JO,{atom:"a",target:"_blank",href:H,style:x.icon,children:e||(e=(0,r.jsx)(m.Z,{}))})}if(u){var I="https://www.npmjs.com/package/"+u;q=(0,r.jsx)(k.JO,{atom:"a",target:"_blank",href:I,style:x.icon,children:f||(f=(0,r.jsx)(n.Z,{}))})}return w&&(t=(0,r.jsx)(k.JO,{atom:"a",target:"_blank",href:w,style:x.icon,children:g||(g=(0,r.jsx)(o.Z,{}))})),(0,r.jsxs)(k.aV,{type:"segments",id:E,children:[(0,r.jsxs)(k.XX,{className:"tertiary",children:[(0,r.jsx)(k.h4,{style:x.header,className:"grey",children:B}),(0,r.jsxs)(k.iX,{style:x.iconBlock,children:[t,q,p,(0,r.jsx)(k.JO,{onClick:function(){return J(function(a){return{on:!a.on}})},style:x.icon,children:h||(h=(0,r.jsx)(l.Z,{}))})]})]}),(0,r.jsx)(k.XX,{className:"secondary",style:A,styles:i.code,children:c}),(0,r.jsx)(k.XX,{children:C}),d]})};var x={header:{margin:0},hidden:{maxHeight:0,padding:"0 16px",margin:0,ovarflow:"hidden"},iconBlock:{position:"absolute",top:16,right:6},icon:{maxWidth:24,cursor:"pointer",marginRight:10}},y={code:[{transition:["padding 500ms ease"]}],fitWidth:[{whiteSpace:"break-spaces"},"code"]},z=a(2),A=a(8),B=a(17),C=a(6),D=["button","children","id","onClose"],E=function(){var a=document.URL.split("#"),b=a.length-1,c=a[b];return c},F=function(a){return history.pushState("","",a)};let G=function(a){var b=a.button,e=a.children,h=a.id,i=a.onClose,f=(0,A.Z)(a,D),c=(0,j.useState)(),g=c[0],l=c[1];(0,j.useEffect)(function(){var a=E();h===a&&l(!0)},[]);var d=null;return g&&(d=(0,r.jsx)(B.IT,(0,z.Z)((0,z.Z)({},f),{},{onClose:function(){var a=document.URL,b=a.lastIndexOf("#"+h);-1!==b&&F(a.substring(0,b)),(0,C.ZP)(i),l(!1)},children:e}))),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(k.zx,{onClick:function(){var a=E();h&&h!==a&&F(document.URL+"#"+h),l(!0)},children:void 0===b?"Open full screen":b}),d]})}},81(v,l,a){a.d(l,{O5:()=>aH});var w=a(325),x=a(326),y=a(498),z=a(9),A=a(10),c=a(324),B=a(2),C=a(8),b=a(1),D=a(3),E=a(46),F=a(5),G=a(327),H=a(30),I=a(6),J=a(55),K=a(7),L=a(54),M=a(45),N=a(23),O=a(0),P=["multi","id"],Q=["d"],R=Object.keys,f=function(a){var b=a.multi,c=a.id,d=(0,C.Z)(a,P);return(0,O.jsx)("defs",{children:R(b).map(function(a){var e=(0,B.Z)((0,B.Z)({},d),b[a]),f=e.d,g=(0,C.Z)(e,Q);return c+=a,(0,O.jsx)("marker",(0,B.Z)((0,B.Z)({id:c},g),{},{children:(0,O.jsx)(N.Z,{d:f,style:S.path})}),c)})})};f.defaultProps={multi:{"":{}},id:"marker-arrow-head",viewBox:"0 0 10 10",d:"M 0 0 L 10 5 L 0 10 z",refX:9,refY:5,markerUnits:"strokeWidth",markerWidth:8,markerHeight:6,orient:"auto",fill:"#bbb"};let m=(0,b.memo)(f);var S={path:{strokeWidth:1,strokeDasharray:"1, 0"}};let T=(0,b.memo)(function(a){return(0,O.jsx)(N.Z,(0,B.Z)((0,B.Z)({},a),{},{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}))});var g=function(b){(0,z.Z)(a,b);var d=(0,A.Z)(a);function a(){var b;(0,w.Z)(this,a);for(var f=arguments.length,g=new Array(f),e=0;e<f;e++)g[e]=arguments[e];return b=d.call.apply(d,[this].concat(g)),(0,c.Z)((0,y.Z)(b),"state",{r:0}),(0,c.Z)((0,y.Z)(b),"handleEl",function(a){return b.el=a}),b}return(0,x.Z)(a,[{key:"componentDidMount",value:function(){var a=this.el.getBBox().width;a&&this.setState({r:a/2})}},{key:"render",value:function(){var b=this.props,d=b.x,e=b.y,g=b.style,h=b.onClick,i=b.show,a=this.state.r,f=null;a&&(f=(0,O.jsx)(E.Cd,{r:a+1,cx:a+2,cy:a+2,fill:"transparent"}));var c=(0,B.Z)((0,B.Z)({},V.container),g);return i||(c=(0,B.Z)((0,B.Z)({},c),V.hide)),(0,O.jsxs)(E.ZA,{className:"cance-button",refCb:this.handleEl,style:c,transform:d&&e?"translate("+(d-a)+", "+(e-a)+")":null,onClick:h,children:[(0,O.jsx)(T,{style:V.cancel,transform:"scale(0.8)"}),f]})}}]),a}(b.PureComponent);(0,c.Z)(g,"defaultProps",{show:!0});let U=g;var V={container:{cursor:"pointer"},cancel:{fill:"#f00"},circle:{strokeLinejoin:"round",strokeWidth:15,strokeOpacity:1,fill:"none"},hide:{opacity:0}},n=function(b){(0,z.Z)(a,b);var c=(0,A.Z)(a);function a(){return(0,w.Z)(this,a),c.apply(this,arguments)}return(0,x.Z)(a,[{key:"getEl",value:function(){console.error("You need implement getEl()")}}]),a}(b.Component);let d=n;var W=Object.keys,X=function(a){var c=a.children,b=(a.x,a.y,a.width);return(0,O.jsxs)(E.ZA,{transform:"translate(0, 20)",style:Z.boxGroupHeader,children:[(0,O.jsx)(E.UL,{x:"0",y:"-20",rx:"5",width:b,height:"20",fill:"#aaa"}),(0,O.jsx)(E.xv,{y:"-5",alignCenter:!0,parentWidth:b,fill:"#fff",children:c})]})},o=function(d){(0,z.Z)(a,d);var e=(0,A.Z)(a);function a(){var b;(0,w.Z)(this,a);for(var f=arguments.length,g=new Array(f),d=0;d<f;d++)g[d]=arguments[d];return b=e.call.apply(e,[this].concat(g)),(0,c.Z)((0,y.Z)(b),"state",{rectW:100,rectH:100,boxsPos:{}}),(0,c.Z)((0,y.Z)(b),"childrenEl",{}),b}return(0,x.Z)(a,[{key:"getEl",value:function(){return this.el}},{key:"update",value:function(b){var g=this,c=15,d={},e=[0],f=this.props.zoomK;W(this.childrenEl).forEach(function(a){var j=g.childrenEl[a].getEl(),b=(0,H.ZP)(j),h=b.w,i=b.h;c+=i/f,e.push(h),d[a]={y:c,w:h,h:i}});var a=Math.max.apply(Math,e);a>0&&!b.maxW&&this.setState({maxW:a,rectW:a/f+10,rectH:c+5,boxsPos:d})}},{key:"componentDidMount",value:function(){this.update({})}},{key:"componentDidUpdate",value:function(b,a,c){this.update(a)}},{key:"render",value:function(){var g,h,w=this,a=this.props,m=a.id,n=a.className,o=(a.showConnectPoint,a.text),p=a.children,q=a.isInsideVector,j=a.boxGroupAbsX,k=a.boxGroupAbsY,x=a.onGetEl,r=a.onMouseEnter,s=a.onMouseLeave,y=a.onDel,t=a.onEdit,u=(a.zoomK,a.style),i=this.state,c=i.rectW,d=i.rectH,z=i.boxsPos,e=(0,B.Z)((0,B.Z)({},Z.container),u),l={},f={};q(this.el)?(g="g",h="g",l.transform="translate("+j+", "+k+")"):(g="i",h="svg",e.transform="translate("+j+"px, "+k+"px)",e.width=c+10,e.height=d+10,f.width=c,f.height=d,f.viewBox="0 0 "+c+" "+d);var v=(0,O.jsx)(U,{x:-10,y:-10,onClick:function(a){a.preventDefault(),y(a)}});return(0,O.jsx)(E.kJ,(0,B.Z)((0,B.Z)({},l),{},{className:n,atom:g,style:e,"data-id":m,refCb:function(a){return w.el=x(a)},children:(0,O.jsxs)(E.ZA,(0,B.Z)((0,B.Z)({atom:h},f),{},{style:Z.group,children:[(0,O.jsx)(E.UL,{style:Z.rect,rx:"5",ry:"5",width:c,height:d,onMouseEnter:r,onMouseLeave:s,onClick:t}),(0,O.jsx)(X,{width:c,children:o}),v,b.Children.map(p,function(d,a){return(0,b.cloneElement)(d,{key:a,x:5,y:(0,F.ZP)(z,[a,"y"],0),width:c,ref:function(b){return w.childrenEl[a]=b},onClick:t})})]}))}))}}]),a}(d);let Y=o;var Z={container:{position:"absolute",pointerEvents:"all"},group:{overflow:"visible"},rect:{stroke:"#999",fill:"#fff"},boxGroupHeader:{pointerEvents:"none"}},$=["connectPointComponent","text","x","y","width"],p=function(b){(0,z.Z)(a,b);var d=(0,A.Z)(a);function a(){var e;(0,w.Z)(this,a);for(var f=arguments.length,g=new Array(f),b=0;b<f;b++)g[b]=arguments[b];return e=d.call.apply(d,[this].concat(g)),(0,c.Z)((0,y.Z)(e),"handleEl",function(a){a&&(e.el=a)}),e}return(0,x.Z)(a,[{key:"getEl",value:function(){return this.el}},{key:"render",value:function(){var a=this.props,b=a.connectPointComponent,c=a.text,d=a.x,e=a.y,f=a.width,g=(0,C.Z)(a,$),h=[b({key:"left",cy:-5,cx:-12}),b({key:"right",cy:-5,cx:f+2})];return(0,O.jsxs)(E.ZA,{transform:"translate("+d+", "+e+")",children:[(0,O.jsx)(E.xv,(0,B.Z)((0,B.Z)({},g),{},{refCb:this.handleEl,children:c})),h]})}}]),a}(d);let _=p;var aa=["x","y","name","text","host","onEdit","onDel","onDragEnd","onWillDrag","children"],ab=1,q=function(d){(0,z.Z)(a,d);var e=(0,A.Z)(a);function a(d){var b;return(0,w.Z)(this,a),b=e.call(this,d),(0,c.Z)((0,y.Z)(b),"state",{absX:0,absY:0}),(0,c.Z)((0,y.Z)(b),"boxNameInvertMap",{}),(0,c.Z)((0,y.Z)(b),"boxs",{}),(0,c.Z)((0,y.Z)(b),"move",function(a,c){b._mount&&(b.el.setXY(a,c),b.setState({absX:a,absY:c}))}),(0,c.Z)((0,y.Z)(b),"handleDrag",function(a){var c=a.absX,d=a.absY,e={boxGroup:(0,y.Z)(b)},f=(0,I.ZP)(b.props.onWillDrag,[e]);!1!==f&&b.move(c,d)}),(0,c.Z)((0,y.Z)(b),"handleDragEnd",function(a){var c=b.state,d=c.absX,e=c.absY;if(b.lastX!==d&&b.lastY!==e){b.lastX=d,b.lastY=e;var f=b.props.onDragEnd;a.boxGroup=(0,y.Z)(b),(0,I.ZP)(f,[a])}}),(0,c.Z)((0,y.Z)(b),"handleEdit",function(a){a.stopPropagation&&a.stopPropagation();var c=b.props,d=c.onEdit,e=c.name;d(e,(0,y.Z)(b))}),(0,c.Z)((0,y.Z)(b),"handleDel",function(a){a.stopPropagation&&a.stopPropagation();var c=b.props,d=c.onDel,e=c.name;d(e)}),(0,c.Z)((0,y.Z)(b),"handleSetRef",function(a){a&&(b.el=a)}),(0,c.Z)((0,y.Z)(b),"handleGetEl",function(){return b.getEl()}),b.id=ab,ab++,b}return(0,x.Z)(a,[{key:"addBox",value:function(a){a&&(this.boxs[a.getId()]=a)}},{key:"getXY",value:function(){var a=this.state,b=a.absX,c=a.absY;return{x:b,y:c}}},{key:"getBoxIdByName",value:function(a){return(0,F.ZP)(this.boxNameInvertMap,[a])}},{key:"getBox",value:function(a){return(0,F.ZP)(this.boxs,[a])}},{key:"getWH",value:function(){if(!this.getEl())return{width:1,height:1};var a=(0,H.ZP)(this.getEl()),b=a.width,c=a.height;return{width:b,height:c}}},{key:"getName",value:function(){return this.props.name}},{key:"getId",value:function(){return this.id}},{key:"getEl",value:function(){if(this.el)return this.el.getEl()}},{key:"setBoxNameInvertMap",value:function(a,b){this.boxNameInvertMap[b]=a}},{key:"componentDidMount",value:function(){this._mount=!0;var c=this.props,e=c.name,f=c.host,g=c.x,h=c.y,d=f.getLazyMoveByName(e)||{},a=d.x,b=d.y;null==a&&(a=g),null==b&&(b=h),(a||b)&&(this.lastX=a,this.lastY=b,this.move(a,b))}},{key:"componentWillUnmount",value:function(){this._mount=!1}},{key:"render",value:function(){var m=this,a=this.props,e=(a.x,a.y,a.name),f=a.text,d=a.host,g=(a.onEdit,a.onDel,a.onDragEnd,a.onWillDrag,a.children),h=(0,C.Z)(a,aa),c=this.state,i=(c.rectW,c.rectH,c.boxsPos,c.absX),j=c.absY,k=(0,D.J_)(d.getBoxGroupComponent(e)),l=b.Children.map(g,function(a){return(0,b.cloneElement)(a,{boxGroupId:m.id,boxGroupAbsX:i,boxGroupAbsY:j})});return(0,O.jsx)(E.lk,{keepLastAbsXY:!0,ref:this.handleSetRef,zoom:d.getTransform,onDrag:this.handleDrag,onGetEl:this.handleGetEl,onDragEnd:this.handleDragEnd,component:k((0,B.Z)((0,B.Z)({},h),{},{id:this.id,isInsideVector:d.insideVector,onEdit:this.handleEdit,onDel:this.handleDel,className:"box-group",boxGroupAbsX:i,boxGroupAbsY:j,zoomK:d.getZoomK(),text:f||e}),l)})}}]),a}(b.Component);let ac=q;var ad=a(41),ae=["style","onGetEl"],r=function(b){(0,z.Z)(a,b);var d=(0,A.Z)(a);function a(){var e;(0,w.Z)(this,a);for(var f=arguments.length,g=new Array(f),b=0;b<f;b++)g[b]=arguments[b];return e=d.call.apply(d,[this].concat(g)),(0,c.Z)((0,y.Z)(e),"handleEl",function(a){var b=e.props.onGetEl;a&&(b(a),e.el=a)}),e}return(0,x.Z)(a,[{key:"getEl",value:function(){if(this.el)return this.el}},{key:"render",value:function(){var a=this.props,d=a.style,c=(a.onGetEl,(0,C.Z)(a,ae)),e=c["data-is-show"],b=(0,B.Z)((0,B.Z)({},d),af.container);return e&&(b=(0,B.Z)((0,B.Z)({},b),af.visible)),(0,O.jsx)(E.Cd,(0,B.Z)((0,B.Z)({style:b,fill:"#3c5d9b",fillOpacity:"0.4",r:"5"},c),{},{refCb:this.handleEl}))}}]),a}(d),af={container:{visibility:"hidden",cursor:"move"},visible:{visibility:"visible"}},ag=["host","boxId","boxGroupId","boxGroupAbsX","boxGroupAbsY","onDragStart","onMount","onWillDrag","show","component"],ah=1,ai=Object.keys,h=function(b){(0,z.Z)(a,b);var d=(0,A.Z)(a);function a(e){var b;return(0,w.Z)(this,a),b=d.call(this,e),(0,c.Z)((0,y.Z)(b),"state",{start:null,absX:0,absY:0}),(0,c.Z)((0,y.Z)(b),"start",!1),(0,c.Z)((0,y.Z)(b),"dnd",null),(0,c.Z)((0,y.Z)(b),"lines",{}),(0,c.Z)((0,y.Z)(b),"getEl",function(){if(b.dnd)return(0,I.ZP)(b.dnd.getEl,null,b.dnd)}),(0,c.Z)((0,y.Z)(b),"handleDragStart",function(e){var a=e.start,c=b.props,f=c.onDragStart,d=c.host;(0,I.ZP)(f,[!0]);var g=d.oConn.addLine();a.center=b.getCenter(),a.lineId=g,b.setState({start:a}),d.setConnectStartPoint((0,y.Z)(b))}),(0,c.Z)((0,y.Z)(b),"handleDrag",function(e){var f,k=b.props,a=k.host,p=k.onWillDrag;if(!1!==(0,I.ZP)(p,[{connectPoint:(0,y.Z)(b)}])){var q=e.absX,r=e.absY,s=e.sourceEvent;b.setState({absX:q,absY:r});var t=a.getVectorEl(),h=(0,H.Jz)(s,t),l=b.state.start,m=l.lineId,n=l.center,g=e.getClientPointerTarget();if(g){var c=g.getAttribute("data-id"),d=g.getAttribute("data-group");if(!c&&!d){var i=(0,ad.J_)(g,"[data-id]");i&&(c=i.getAttribute("data-id"),d=i.getAttribute("data-group"))}if(c&&d){var o=a.getBox(c,d);if(!o)return console.error("[ConnectPoint] target-box not found",{targetId:c,targetGroup:d});var j=o.getConnectPoint(n,h);j&&(f=j.getCenter(),a.setConnectEndPoint(j))}}f||(a.setConnectEndPoint(null),f=a.applyXY(h[0],h[1])),a.oConn.setLineStart(m,n),a.oConn.setLineEnd(m,f)}}),(0,c.Z)((0,y.Z)(b),"handleDragEnd",function(i){var d=b.state.start.lineId,e=b.props,h=e.onDragStart,a=e.host,f=a.oConn,c=a.getConnectEndPoint(),g=!1;c&&(g=f.addConnected(d,(0,y.Z)(b),c)),b.setState({start:null}),a.setConnectStartPoint(null),c&&g||f.deleteLine(d),(0,I.ZP)(h,[!1])}),(0,c.Z)((0,y.Z)(b),"handleEl",function(a){a&&(b.dnd=a)}),(0,c.Z)((0,y.Z)(b),"handleMouseEnter",function(){b.setState({isHover:!0})}),(0,c.Z)((0,y.Z)(b),"handleMouseLeave",function(){b.setState({isHover:!1})}),b.id=ah,ah++,b}return(0,x.Z)(a,[{key:"setLine",value:function(a,b){this.lines[a]=b}},{key:"delLine",value:function(a){delete this.lines[a]}},{key:"getVectorCenter",value:function(b,d){var c=b.getBBox(),a=b.getBoundingClientRect(),e=(a.left,a.top,a.width),f=a.height,g=e/2+c.x,h=f/2+c.y;return d.applyXY(g,h,b)}},{key:"getHtmlCenter",value:function(b,c){var a=b&&b.getBoundingClientRect?b.getBoundingClientRect():{left:0,top:0,width:0,height:0},e=a.left,f=a.top,g=a.width,h=a.height,i=c.getVectorEl(),d=(0,H.zN)(i)(g/2+e,h/2+f);return c.applyXY(d.x,d.y)}},{key:"getCenter",value:function(){var c,a=this.props.host,b=this.getEl();return a.insideVector(b)?c=this.getVectorCenter(b,a):a.insideHtml(b)&&(c=this.getHtmlCenter(b,a)),c}},{key:"getBox",value:function(){var a=this.props,b=a.host,c=a.boxId,d=a.boxGroupId;return b.getBox(c,d)}},{key:"getBoxName",value:function(){return this.getBox().getName()}},{key:"getBoxGroupName",value:function(){return this.getBox().getBoxGroup().getName()}},{key:"getId",value:function(){return this.id}},{key:"isShow",value:function(){var a=this.props.show,b=this.state.isHover;return!a&&(this.state.start&&(a=!0),ai(this.lines).length&&(a=!0)),b||a}},{key:"componentDidMount",value:function(){(0,this.props.onMount)(this)}},{key:"componentWillUnmount",value:function(){var a=ai(this.lines);if(a.length){var b=this.props.host;a.forEach(function(a){return b.oConn.deleteLine(a)})}}},{key:"componentDidUpdate",value:function(d,i,j){var k=this,a=this.props,e=a.boxGroupAbsX,f=a.boxGroupAbsY,b=d||{},g=b.boxGroupAbsX,h=b.boxGroupAbsY;if(e!==g||f!==h){var c=ai(this.lines);if(c.length){var l=this.props.host,m=this.getCenter();c.forEach(function(a){"from"===k.lines[a]?l.oConn.setLineStart(a,m):l.oConn.setLineEnd(a,m)})}}}},{key:"render",value:function(){var a=this.props,c=(a.host,a.boxId,a.boxGroupId,a.boxGroupAbsX,a.boxGroupAbsY,a.onDragStart,a.onMount,a.onWillDrag,a.show,a.component),d=(0,C.Z)(a,ag),b=this.state;return b.absX,b.absY,(0,O.jsx)(E.lk,(0,B.Z)((0,B.Z)({},d),{},{onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,"data-id":this.id,"data-is-show":this.isShow(),onDragStart:this.handleDragStart,onDragEnd:this.handleDragEnd,onDrag:this.handleDrag,ref:this.handleEl,component:c}))}}]),a}(b.Component);(0,c.Z)(h,"defaultProps",{component:r});let aj=h;var ak=["host","boxGroupAbsX","boxGroupAbsY","boxGroupId","boxGroupName","boxComponent","text"],al=1,am=Object.keys,s=function(b){(0,z.Z)(a,b);var d=(0,A.Z)(a);function a(e){var b;return(0,w.Z)(this,a),b=d.call(this,e),(0,c.Z)((0,y.Z)(b),"isConnectPointDrag",!1),(0,c.Z)((0,y.Z)(b),"points",{}),(0,c.Z)((0,y.Z)(b),"hoverTimer",!1),(0,c.Z)((0,y.Z)(b),"state",{showConnectPoint:!1}),(0,c.Z)((0,y.Z)(b),"addPoint",function(a){a&&(b.points[a.getId()]=a)}),(0,c.Z)((0,y.Z)(b),"handleMouseEnter",function(){b.clearHoverTimer(),b.setState({showConnectPoint:!0})}),(0,c.Z)((0,y.Z)(b),"handleMouseLeave",function(){var a=b.getFromBoxId();a&&b.getId()!==a?b.setState({showConnectPoint:!1}):b.isConnectPointDrag||(b.hoverTimer=setTimeout(function(){b.setState({showConnectPoint:!1})},1e3))}),(0,c.Z)((0,y.Z)(b),"handlePointDrag",function(a){b.isConnectPointDrag=a}),(0,c.Z)((0,y.Z)(b),"handleEl",function(a){a&&(b.elRef=a)}),b.id=al,al++,b}return(0,x.Z)(a,[{key:"getFromBoxId",value:function(){var a=this.props.host.getConnectStartPoint();if(a)return a.getBox().getId()}},{key:"getBoxGroup",value:function(){var a=this.props,b=a.host,c=a.boxGroupId;return b.getBoxGroup(c)}},{key:"getBoxGroupId",value:function(){return this.props.boxGroupId}},{key:"getName",value:function(){var a=this.props.name;return 0===a||a||(a=this.getId()),a}},{key:"getId",value:function(){return this.id}},{key:"getRef",value:function(){return this.elRef}},{key:"getEl",value:function(){var a=this.getRef();if(a&&a.getEl)return a.getEl()}},{key:"getEdge",value:function(){var c=this.props.host,a=this.getEl(),b=a&&a.getBoundingClientRect?a.getBoundingClientRect():{right:0,bottom:0},d=b.right,e=b.bottom;return c.applyXY(d,e)}},{key:"getRecentPoint",value:function(c){var d=this,a=[],b={};return am(this.points).forEach(function(h){var e=d.points[h],f=e.getCenter();if(f){var g=(0,E.Sp)(c,f);a.push(g),b[g]=e}}),b[Math.min.apply(Math,a)]}},{key:"getConnectPoint",value:function(b,c){var a=this.getRef();return a&&a.getConnectPoint?a.getConnectPoint(b,c):this.getRecentPoint(b)}},{key:"getFromPoint",value:function(){var a=this.getRef();return a&&a.getFromPoint?a.getFromPoint():this.getRecentPoint(this.getEdge())}},{key:"getToPoint",value:function(){var a=this.getRef();return a&&a.getToPoint?a.getToPoint():this.getRecentPoint({x:0,y:0})}},{key:"getPoint",value:function(a){return this.points[a]}},{key:"clearHoverTimer",value:function(){this.hoverTimer&&(clearTimeout(this.hoverTimer),this.hoverTimer=!1)}},{key:"componentDidMount",value:function(){this.props.host.addBox(this)}},{key:"componentWillUnmount",value:function(){this.clearHoverTimer()}},{key:"render",value:function(){var a=this.props,b=a.host,e=a.boxGroupAbsX,f=a.boxGroupAbsY,c=a.boxGroupId,g=a.boxGroupName,h=a.boxComponent,i=a.text,j=(0,C.Z)(a,ak),d=this.getName(),k=this.state.showConnectPoint,l=(0,D.J_)((0,O.jsx)(aj,{boxId:this.id,boxGroupId:c,boxGroupAbsX:e,boxGroupAbsY:f,show:k,host:b,onDragStart:this.handlePointDrag,onMount:this.addPoint})),m=(0,D.J_)(h||b.getBoxComponent(d,g));return m((0,B.Z)((0,B.Z)({},j),{},{connectPointComponent:l,ref:this.handleEl,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,"data-id":this.id,"data-group":c,text:i||d}))}}]),a}(b.Component);let an=s;var ao=["id","start","end","from","to","isHover","onMouseEnter","onMouseLeave","onDeleteButtonClick","onClick","curve"],i=function(b){(0,z.Z)(a,b);var d=(0,A.Z)(a);function a(){var b;(0,w.Z)(this,a);for(var f=arguments.length,g=new Array(f),e=0;e<f;e++)g[e]=arguments[e];return b=d.call.apply(d,[this].concat(g)),(0,c.Z)((0,y.Z)(b),"handleEl",function(a){b.el=a}),(0,c.Z)((0,y.Z)(b),"handleLineEl",function(a){a&&(b.lineEl=a)}),b}return(0,x.Z)(a,[{key:"getEl",value:function(){return this.el}},{key:"getLinePoint",value:function(b,e){var a=this.lineEl;if(a){var c=a.getTotalLength(),d=Math.floor(e*c/100),f=b>d?d:b;if(c)return a.getPointAtLength(f)}}},{key:"render",value:function(){var a=this.props,i=a.id,c=a.start,j=a.end,k=a.from,l=a.to,m=a.isHover,n=a.onMouseEnter,o=a.onMouseLeave,p=a.onDeleteButtonClick,q=a.onClick,r=a.curve,s=(0,C.Z)(a,ao),d=null,e=null,b=ap.area,f=!1,g=this.getLinePoint(50,50)||c||{},t=g.x,u=g.y,h=(0,D.J_)((0,O.jsx)(E.x1,{start:c,end:j,curve:r}));return k&&l&&(m&&(b=(0,B.Z)((0,B.Z)({},b),ap.hover),f=!0),e=(0,O.jsx)(U,{x:t,y:u,onClick:p,show:f}),d=h({onClick:q,style:b,className:"area"})),(0,O.jsxs)(E.ZA,{name:i,onMouseEnter:n,onMouseLeave:o,refCb:this.handleEl,children:[h((0,B.Z)((0,B.Z)({},s),{},{refCb:this.handleLineEl,className:"line",style:ap.line})),d,e]})}}]),a}(d);(0,c.Z)(i,"defaultProps",{markerEnd:"url(#marker-arrow-head)",curve:!0});var ap={line:{stroke:"#bbb",strokeWidth:1.5,fill:"none"},area:{strokeLinecap:"round",stroke:"#999",strokeWidth:15,strokeOpacity:0,fill:"none",cursor:"default"},hover:{strokeOpacity:".1"}},aq=["start","end","props","init","host","component"],e=(0,b.forwardRef)(function(a,h){var c=a.start,d=a.end,p=(a.props,a.init,a.host),i=a.component,j=(0,C.Z)(a,aq),e=(0,b.useState)(),k=e[0],q=e[1],f=(0,b.useState)(c),l=f[0],m=f[1],g=(0,b.useState)(d),n=g[0],o=g[1],r={getId:function(){return a.id},getFromTo:function(){return{from:a.from,to:a.to}},getIsHover:function(){return k},setStart:m,setEnd:o};return(0,b.useImperativeHandle)(h,function(){return r},[]),(0,b.useEffect)(function(){m(c)},[c]),(0,b.useEffect)(function(){o(d)},[d]),(0,b.useEffect)(function(){var a=r.getId();p.oConn.setLineObj(a,r)},[]),(0,D.J_)(i)((0,B.Z)((0,B.Z)({},j),{},{start:l,end:n,isHover:k,onClick:function(b){b.preventDefault();var a=r.getId();p.handleLineEdit({ref:r,lineId:a,lineData:p.oConn.getLine(a)})},onDeleteButtonClick:function(b){b.preventDefault();var a=r.getId();p.handleLineDel({ref:r,lineId:a,lineData:p.oConn.getLine(a)})},onMouseEnter:function(a){p.getConnectStartPoint()||q(!0)},onMouseLeave:function(a){p.getConnectStartPoint()||q(!1)}}))});e.displayName="UmlLine",e.defaultProps={component:i};let ar=e;var as=Object.keys,j=(0,b.forwardRef)(function(a,g){var c,i=a.lineDefaultProps,j=a.host,d=(0,b.useState)([]),e=d[0],h=d[1],k=(0,b.useRef)([]),l=(0,b.useRef)(),m={setLines:h,getLines:function(){return l.current},addUpdateCb:function(a){k.current.push(a)}};(0,b.useImperativeHandle)(g,function(){return m},[]),(0,b.useEffect)(function(){l.current=e,setTimeout(function(){k.current.forEach(function(a){return(0,I.ZP)(a)}),k.current=[]})},[e]);var f=[];return as(e).forEach(function(a){var g=e[a],h=j.oConn.getIsHover(a),d=(0,b.createElement)(ar,(0,B.Z)((0,B.Z)((0,B.Z)({},i),g),{},{id:a,key:a,host:j}));h?c=d:f.push(d)}),c&&f.push(c),f});j.displayName="LineList";let at=j;var au=a(70),av=1,aw=Object.keys,t=function(){function a(b){(0,w.Z)(this,a),(0,c.Z)(this,"lineTimer",null),(0,c.Z)(this,"connects",{}),(0,c.Z)(this,"queue",null),(0,c.Z)(this,"updateCbQueue",[]),(0,c.Z)(this,"host",null),(0,c.Z)(this,"lineObjs",{}),this.host=b.host}return(0,x.Z)(a,[{key:"getLine",value:function(a){return(0,F.ZP)(this.host.getLines(),[a])}},{key:"getLineObj",value:function(a){return this.lineObjs[a]}},{key:"getIsHover",value:function(b){var a=this.lineObjs[b];if(a)return a.getIsHover()}},{key:"setLineObj",value:function(a,b){this.lineObjs[a]=b}},{key:"setLineStart",value:function(b,c){var a=this.lineObjs[b];a&&a.setStart(c)}},{key:"setLineEnd",value:function(b,c){var a=this.lineObjs[b];a&&a.setEnd(c)}},{key:"addLine",value:function(b){var a="line-"+av;return av++,this.setState(function(c){return c[a]={props:b},c}),a}},{key:"updateLine",value:function(a,b){this.setState(function(c){return c[a]=(0,B.Z)((0,B.Z)({},c[a]),b),c})}},{key:"deleteLine",value:function(a){var b=this,c={};this.setState(function(g){var f=g[a];if(f){c.line=f;var d=f.from,e=f.to;if(d&&(d.delLine(a),c.from=d.getBoxGroupName()),e&&(e.delLine(a),c.to=e.getBoxGroupName()),d&&e){var h=b.getConnectIds(d,e),i=h.mergeId,j=h.invertMergeId;delete b.connects[i],delete b.connects[j]}delete g[a]}return g})}},{key:"getConnectIds",value:function(a,b){if(!a||!b)return console.warn("Can not get point type for 'from' or 'to'.",{from:a,to:b}),{};var c=a.getBox().getId(),d=b.getBox().getId();return{fromBoxId:c,toBoxId:d,mergeId:c+"-"+d,invertMergeId:d+"-"+c}}},{key:"getConnectNames",value:function(a,b){var g=this.getConnectIds(a,b),c=a.getBox(),d=b.getBox(),e=c.getBoxGroup(),f=d.getBoxGroup(),h=c.getName(),i=e.getName(),j=e.getId(),k=d.getName(),l=f.getName(),m=f.getId();return(0,B.Z)((0,B.Z)({},g),{},{fromBoxName:h,toBoxName:k,fromBoxGroupName:i,toBoxGroupName:l,fromBoxGroupId:j,toBoxGroupId:m})}},{key:"getConnects",value:function(){var c=this,a=this.connects,d=this.host.getLines(),b=[];return aw(a).forEach(function(j){var e=a[j],f=d[e],g=f.from,h=f.to;if(g&&h){var i=c.getConnectNames(g,h);i.id=e,b.push(i)}}),b}},{key:"addConnected",value:function(a,b,c,j){var d=this.getConnectIds(b,c),k=d.fromBoxId,l=d.toBoxId,g=d.mergeId,m=d.invertMergeId,e=this.connects;if((0,F.ZP)(e,[g])||(0,F.ZP)(e,[m])||k===l)return!1;var h=this.host,f=(0,au.HO)({from:b,to:c,init:j,start:b.getCenter(),end:c.getCenter()}),i=h.handleConnWillAdd((0,B.Z)((0,B.Z)({},f),{},{lineId:a}));return i&&(e[g]=a,b.setLine(a,"from"),c.setLine(a,"to"),this.updateLine(a,f),h.handleConnAdd((0,B.Z)((0,B.Z)({},f),{},{lineId:a}))),i}},{key:"clearTimeout",value:function(b){function a(){return b.apply(this,arguments)}return a.toString=function(){return b.toString()},a}(function(){this.lineTimer&&(clearTimeout(this.lineTimer),this.lineTimer=!1)})},{key:"setState",value:function(a,b,c){var d=this;this.clearTimeout(),a&&(this.queue=a(this.queue||this.host.getLines()||[])),b&&this.updateCbQueue.push(b),this.lineTimer=setTimeout(function(){var a,b,c=d.host;c.mount&&(null===(a=c.lineList)|| void 0===a||a.setLines((0,B.Z)({},d.queue)),null===(b=c.lineList)|| void 0===b||b.addUpdateCb(function(){d.queue=null,d.updateCbQueue.forEach(function(a){return a()}),d.updateCbQueue=[]}))},null!=c?c:10)}},{key:"getUniqueFromTo",value:function(){var a=this.getConnects(),b={},c=function(a,c){var d=[a,c].sort();b[d[0]+"-"+d[1]]=[a,c]};return a.forEach(function(a){c(a.fromBoxGroupId,a.toBoxGroupId)}),b}}]),a}();let ax=t;var ay=["d3OnLoad"],az=["autoArrange","arrowHeadComponent","disableDagreWorker","data","uniqueBoxGroupNameLocator","boxNameLocator","boxsLocator","boxGroupsLocator","boxGroupXLocator","boxGroupYLocator","connsLocator","connFromBoxGroupLocator","connToBoxGroupLocator","connFromBoxLocator","connToBoxLocator","children","editToCenter","editToCenterCb","editToCenterDelay","onAdd","onBoxWillDrag","onEdit","onDel","onDragEnd","onConnAdd","onConnWillAdd","onLineEdit","onLineDel","onLoad","onGetBoxGroupComponent","onGetBoxComponent","onZoom","scaleExtent","lineDefaultProps","style"],aA={current:null},aB={current:null},aC={},aD=function(a,b){return function(c){a.current=c,a.current.addEventListener("message",function(b){var a=(null==b?void 0:b.data)||{};if("ready"===a.type);else{var c=a.queueId,d=a.nextXY;aC[c].callback(d),delete aC[c]}}),aE(b,a)}},aE=function(b,c){var a=aC[b];a&&c.current.postMessage({queueId:b,conns:a.conns,nodes:a.nodes})},aF=function(b){aA.current?aE(b,aA):a.e(27).then(a.bind(a,482)).then(function(a){return aD(aA,b)((0,F.MV)(a))})},aG=function(b){aB.current?aE(b,aB):a.e(45).then(a.bind(a,293)).then(function(a){aD(aB,b)(new F.MV(a)())})},u=(0,b.forwardRef)(function(c,e){var f=c.d3OnLoad,g=(0,C.Z)(c,ay);(0,L.J)(f);var d=(0,b.useState)(),h=d[0],i=d[1],o={setTransform:i};(0,b.useImperativeHandle)(e,function(){return o},[]);var a=h||{},j=a.k,k=a.x,l=a.y,m="translate("+(0,J.Hq)(k)+"px, "+(0,J.Hq)(l)+"px) scale("+j+")",n=(0,B.Z)((0,B.Z)({},aI.htmlGraph),{},{transform:m});return(0,O.jsx)(D.iX,(0,B.Z)((0,B.Z)({},g),{},{style:n,className:"html-graph"}))});u.displayName="HTMLGraph";var k=function(b){(0,z.Z)(a,b);var d=(0,A.Z)(a);function a(){var b;(0,w.Z)(this,a);for(var f=arguments.length,g=new Array(f),e=0;e<f;e++)g[e]=arguments[e];return b=d.call.apply(d,[this].concat(g)),(0,c.Z)((0,y.Z)(b),"boxGroupNameInvertMap",{}),(0,c.Z)((0,y.Z)(b),"boxGroupMap",{}),(0,c.Z)((0,y.Z)(b),"boxQueue",{}),(0,c.Z)((0,y.Z)(b),"startPoint",null),(0,c.Z)((0,y.Z)(b),"endPoint",null),(0,c.Z)((0,y.Z)(b),"lazyMove",{}),(0,c.Z)((0,y.Z)(b),"oConn",void 0),(0,c.Z)((0,y.Z)(b),"mount",!1),(0,c.Z)((0,y.Z)(b),"addBoxGroup",function(a){if(a){var c=a.getId(),d=a.getName();b.boxGroupNameInvertMap[d]=c,b.boxGroupMap[c]=a,(0,K.tW)(b.boxQueue[c]||{}).forEach(function(a){var d=b.boxQueue[c][a];b.addBox(d)})}}),(0,c.Z)((0,y.Z)(b),"getTransform",function(){if(b.zoom)return b.zoom.getTransform()}),(0,c.Z)((0,y.Z)(b),"getZoomK",function(){return(b.getTransform()||{}).k||1}),(0,c.Z)((0,y.Z)(b),"edit",function(c,d){var a=b.props,e=a.onEdit,f=a.editToCenter,h=a.editToCenterCb,g=a.editToCenterDelay;b.zoom.disable(),f&&setTimeout(function(){return b.center(d,h)},g),(0,I.ZP)(e,[c,d]),setTimeout(function(){return b.zoom.enable()},1500)}),(0,c.Z)((0,y.Z)(b),"del",function(a){var c=b.props.onDel;(0,I.ZP)(c,[a])}),(0,c.Z)((0,y.Z)(b),"insideHtml",function(a){return b.html&&b.html.contains(a)}),(0,c.Z)((0,y.Z)(b),"insideVector",function(a){return b.vector&&b.vector.contains(a)}),(0,c.Z)((0,y.Z)(b),"isOnGraph",function(d){var a=(0,H.ZP)(b.zoomEl);if(!d)return!1;var c=(0,H.ZP)(d),e=c.bottom<=a.top,f=c.left>=a.right,g=c.top>=a.bottom,h=c.right<=a.left;return!(e||f||g||h)}),(0,c.Z)((0,y.Z)(b),"applyXY",function(d,e,a){a||(a=b.getVectorEl());var f=b.getTransform(),c=(0,H.jL)(a,f)(d,e),g=c.x,h=c.y;return{x:g,y:h}}),(0,c.Z)((0,y.Z)(b),"handleD3Load",function(){return setTimeout(function(){return b.syncPropConnects()})}),(0,c.Z)((0,y.Z)(b),"handleBoxGroupDragEnd",function(a){var c=b.props.onDragEnd;(0,I.ZP)(c,[a])}),(0,c.Z)((0,y.Z)(b),"handleZoom",function(a){var c=b.props.onZoom;b.htmlObj.setTransform(a.transform),(0,I.ZP)(c,[a])}),(0,c.Z)((0,y.Z)(b),"handleLineEdit",function(a){(0,I.ZP)(b.props.onLineEdit,[a])}),(0,c.Z)((0,y.Z)(b),"handleLineDel",function(a){!1!==(0,I.ZP)(b.props.onLineDel,[a])&&b.oConn.deleteLine(a.lineId)}),(0,c.Z)((0,y.Z)(b),"handleConnAdd",function(a){var e=b.props.onConnAdd,c=(0,F.ZP)(a,["from"]).getBoxGroupName(),d=(0,F.ZP)(a,["to"]).getBoxGroupName();c&&d&&(a.fromTo={from:c,to:d}),(0,I.ZP)(e,[a])}),(0,c.Z)((0,y.Z)(b),"handleConnWillAdd",function(e){var a=b.props.onConnWillAdd,c=!0;if(a){var d=(0,I.ZP)(a,[e]);K.i_===typeof d?console.warn("onConnWillAdd should not return undefined."):c=d}return c}),(0,c.Z)((0,y.Z)(b),"handleLoad",function(){b.isInit||(b.isInit=!0,(0,I.ZP)(b.props.onLoad,[(0,y.Z)(b)]))}),(0,c.Z)((0,y.Z)(b),"handleSetLineListRef",function(a){b.lineList=a}),(0,c.Z)((0,y.Z)(b),"handleZoomRef",function(a){a&&(b.zoom=a)}),(0,c.Z)((0,y.Z)(b),"handleSetZoomEl",function(a){b.zoomEl=a}),(0,c.Z)((0,y.Z)(b),"handleGetZoomEl",function(){return b.zoomEl}),(0,c.Z)((0,y.Z)(b),"handleSetVector",function(a){b.vector=a}),(0,c.Z)((0,y.Z)(b),"handleSetHtmlEl",function(a){b.html=a}),(0,c.Z)((0,y.Z)(b),"handleSetHtmlObj",function(a){b.htmlObj=a}),b}return(0,x.Z)(a,[{key:"addLazyMoveWithMouseEvent",value:function(m,n,a){var b=this.getVectorEl();if(b){var c=(0,H.Jz)(n,b),d=c[0],e=c[1];if(a){var f=this.getZoomK(),g=(0,F.ZP)(a,["start"],{}),h=g.fromX,i=g.fromY;h&&i&&(d-=h*f,e-=i*f)}var j=this.applyXY(d,e),k=j.x,l=j.y;return this.addLazyMove(m,k,l),{x:k,y:l}}}},{key:"addLazyMove",value:function(a,b,c){this.lazyMove[a]={x:b,y:c}}},{key:"add",value:function(a){var b=this.props.onAdd;(0,I.ZP)(b,[a])}},{key:"addBoxQueue",value:function(a){if(a){var b=a.getName(),c=a.getBoxGroupId();(0,G.Z)(this.boxQueue,[c,b],a)}}},{key:"addBox",value:function(a){if(a){var b=a.getBoxGroup();if(!b){this.addBoxQueue(a);return}b.addBox(a);var d=b.getId(),c=a.getName(),e=a.getId();return b.setBoxNameInvertMap(e,c),(0,F.ZP)(this.boxQueue,[d,c])&&delete this.boxQueue[d][c],!0}}},{key:"getLazyMoveByName",value:function(a){var b=(0,B.Z)({},this.lazyMove[a]);if(b)return delete this.lazyMove[a],b}},{key:"getLines",value:function(){var a;return null===(a=this.lineList)|| void 0===a?void 0:a.getLines()}},{key:"getBox",value:function(b,c){var a=(0,F.ZP)(this.boxGroupMap,[c]);if(a)return a.getBox(b)}},{key:"getBoxGroup",value:function(a){return(0,F.ZP)(this.boxGroupMap,[a])}},{key:"getBoxGroupByName",value:function(b){var a=this.getBoxGroupIdByName(b);if(a)return this.getBoxGroup(a)}},{key:"getBoxGroupIdByName",value:function(a){return(0,F.ZP)(this,["boxGroupNameInvertMap",a])}},{key:"getBoxComponent",value:function(a,b){var c=this.props.onGetBoxComponent;return(0,I.ZP)(c,[a,b])||_}},{key:"getBoxGroupComponent",value:function(a){var b=this.props.onGetBoxGroupComponent;return(0,I.ZP)(b,[a])||Y}},{key:"getVectorEl",value:function(){return this.vector}},{key:"getBoundingClientRect",value:function(){var a=this.getVectorEl();return(0,H.ZP)(a)}},{key:"getConnectStartPoint",value:function(){return this.startPoint}},{key:"getConnectEndPoint",value:function(){return this.endPoint}},{key:"setConnectStartPoint",value:function(a){return this.startPoint=a,this.startPoint}},{key:"setConnectEndPoint",value:function(a){this.endPoint=a}},{key:"center",value:function(a,f){var b=a.getWH(),g=b.width,h=b.height,i=a.lastX,j=a.lastY,c=this.getBoundingClientRect(),k=c.width,l=c.height,d=this.getZoomK(),e={x:(-i-g/2)*d+k/2,y:(-j-h/2)*d+l/2};this.zoom.setXYK((0,B.Z)((0,B.Z)({},e),(0,I.ZP)(f,[e])))}},{key:"arrange",value:function(){var b,e=this,c=null===(b=this.oConn)|| void 0===b?void 0:b.getUniqueFromTo(),d=(0,K.tW)(this.boxGroupMap||{}).map(function(a){var b=e.boxGroupMap[a];return(0,B.Z)({key:a},b.getWH())}),a=(0,M.W_)("dagre");aC[a]={queueId:a,conns:c,nodes:d,callback:function(a){(0,K.tW)(a||{}).forEach(function(b){e.getBoxGroup(b).move(a[b].x,a[b].y)}),e.handleLoad()}},this.props.disableDagreWorker?aF(a):aG(a)}},{key:"syncPropConnects",value:function(){var g=this,c=this.props.autoArrange,d=this.oConn,a=this.props,e=a.data,f=a.connsLocator,h=a.connFromBoxGroupLocator,i=a.connToBoxGroupLocator,j=a.connFromBoxLocator,k=a.connToBoxLocator;a.boxGroupsLocator,a.onConnAdd;var b=f(e);b&&b.length&&(b.forEach(function(a){var b=h(a),c=j(a),e=i(a),f=k(a);if(!b||!c||!e||!f){console.error("Sync props conns failed",[b,c,e,f,a]);return}var l=g.getBoxGroupIdByName(b),m=g.getBoxGroupIdByName(e),p=d.addLine(a),q=g.getBoxGroup(l).getBoxIdByName(c),r=g.getBoxGroup(m).getBoxIdByName(f),n=g.getBox(q,l),o=g.getBox(r,m);n&&o&&d.addConnected(p,n.getFromPoint(),o.getToPoint(),!0)}),d.setState(null,function(){c&&g.arrange()}),c||this.handleLoad())}},{key:"componentDidMount",value:function(){this.oConn=new ax({host:this}),this.mount=!0}},{key:"componentWillUnmount",value:function(){var a;this.mount=!1,null===(a=this.oConn)|| void 0===a||a.clearTimeout()}},{key:"render",value:function(){var j=this,a=this.props,b=(a.autoArrange,a.arrowHeadComponent),c=(a.disableDagreWorker,a.data),k=a.uniqueBoxGroupNameLocator,l=a.boxNameLocator,m=a.boxsLocator,d=a.boxGroupsLocator,n=a.boxGroupXLocator,o=a.boxGroupYLocator,e=(a.connsLocator,a.connFromBoxGroupLocator,a.connToBoxGroupLocator,a.connFromBoxLocator,a.connToBoxLocator,a.children),p=(a.editToCenter,a.editToCenterCb,a.editToCenterDelay,a.onAdd,a.onBoxWillDrag),f=(a.onEdit,a.onDel,a.onDragEnd,a.onConnAdd,a.onConnWillAdd,a.onLineEdit,a.onLineDel,a.onLoad,a.onGetBoxGroupComponent,a.onGetBoxComponent,a.onZoom,a.scaleExtent),g=a.lineDefaultProps,h=a.style,i=(0,C.Z)(a,az);return(0,O.jsxs)(D.iX,{className:"d3-uml",style:(0,B.Z)((0,B.Z)({},aI.container),h),refCb:this.handleSetZoomEl,children:[(0,O.jsx)(E.kJ,(0,B.Z)((0,B.Z)({refCb:this.handleSetVector},i),{},{style:aI.svg,children:(0,O.jsxs)(E.LG,{onGetEl:this.handleGetZoomEl,ref:this.handleZoomRef,onZoom:this.handleZoom,scaleExtent:f,children:[(0,D.J_)(b)(),(0,O.jsx)(at,{ref:this.handleSetLineListRef,host:this,lineDefaultProps:g})]})})),(0,O.jsx)(u,{refCb:this.handleSetHtmlEl,ref:this.handleSetHtmlObj,d3OnLoad:this.handleD3Load,children:(d(c)||[]).map(function(a){var b=k(a);return b.name?(0,O.jsx)(ac,(0,B.Z)((0,B.Z)({ref:j.addBoxGroup,host:j,onEdit:j.edit,onDel:j.del,onDragEnd:j.handleBoxGroupDragEnd,onWillDrag:p,x:n(a),y:o(a)},b),{},{children:m(a).map(function(a,c){return(0,O.jsx)(an,(0,B.Z)({host:j,boxGroupName:b.name},l(a)),"box-"+c)})}),"box-group-"+b.name):null})}),e]})}}]),a}(b.Component);(0,c.Z)(k,"defaultProps",{boxGroupsLocator:function(a){return(a||{}).tables||[]},boxGroupXLocator:function(){},boxGroupYLocator:function(){},boxsLocator:function(a){return(a||{}).cols||[]},uniqueBoxGroupNameLocator:function(a){return a},boxNameLocator:function(a){return{name:a}},connsLocator:function(a){return a},connFromBoxGroupLocator:function(a){return a},connToBoxGroupLocator:function(a){return a},connFromBoxLocator:function(a){return a},connToBoxLocator:function(a){return a},arrowHeadComponent:m,autoArrange:!0,editToCenter:!1,editToCenterDelay:500,disableDagreWorker:!1});let aH=k;var aI={container:{overflow:"hidden",width:"100%",height:"100%",minHeight:100,position:"relative"},svg:{cursor:"crosshair",position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"visible"},htmlGraph:{pointerEvents:"none",transformOrigin:"0 0",width:"100%",height:"100%"}}},18(c,b,a){a.d(b,{Z:()=>e});var d=a(4);let e=function(a){return(0,d.Z)("Code","M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z")(a)}},19(c,b,a){a.d(b,{Z:()=>e});var d=a(4);let e=function(a){return(0,d.Z)("Edit","M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z")(a)}},20(c,b,a){a.d(b,{Z:()=>g});var d=a(332),e=a(4),f=["viewBox"];let g=function(a){var{viewBox:c="0 0 16 16"}=a,b=(0,d.Z)(a,f);return b.viewBox=c,(0,e.Z)("Git","M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z")(b)}},21(c,b,a){a.d(b,{Z:()=>g});var d=a(332),e=a(4),f=["viewBox","fill"];let g=function(b){var{viewBox:c="0 0 3200 3200",fill:g="#b93131"}=b,a=(0,d.Z)(b,f);return a.viewBox=c,a.fill=g,(0,e.Z)("Npm","M269 3186 c-99 -27 -193 -106 -243 -205 l-26 -50 0 -1332 0 -1331 31 -59 c40 -75 102 -132 187 -172 l67 -32 1255 -3 c911 -2 1271 0 1315 8 119 23 224 102 282 211 l28 54 0 1325 0 1325 -29 54 c-42 80 -128 163 -201 192 l-60 24 -1280 2 c-992 1 -1290 -1 -1326 -11z m1311 -1386 l0 -600 200 0 200 0 0 600 0 600 200 0 200 0 0 -800 0 -800 -800 0 -800 0 0 800 0 800 400 0 400 0 0 -600z")(a)}},4(c,b,a){a.d(b,{Z:()=>j});var d=a(2),e=a(332),f=a(26),g=a(23),h=a(0),i=["type","children"];let j=function(b,c){var a=function(j){var{type:k=null,children:l}=j,m=(0,e.Z)(j,i),a=c[k]||c["_"]||c;return(0,h.jsxs)(f.Z,(0,d.Z)((0,d.Z)({},m),{},{"data-name":b,children:[a.map?a.map(function(a){return(0,h.jsx)(g.Z,{d:a})}):(0,h.jsx)(g.Z,{d:a}),l]}))};return a.displayName=b,a}}}])