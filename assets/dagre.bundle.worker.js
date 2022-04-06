(()=>{var b=[(b,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(a){return a&&a.filter?a.filter(function(a,b,c){return c.indexOf(a)===b}):a},b.exports=a.default},,()=>{Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e,f){if(this==null)throw new TypeError('"this" is null or not defined');var d=Object(this),a=d.length>>>0;if(0===a)return!1;var b=0|f,c=Math.max(b>=0?b:a-Math.abs(b),0);function g(a,b){return a===b||"number"==typeof a&&"number"==typeof b&&isNaN(a)&&isNaN(b)}for(;c<a;){if(g(d[c],e))return!0;c++}return!1}}),String.prototype.includes||(String.prototype.includes=function(b,a){if(b instanceof RegExp)throw TypeError("first argument must not be a RegExp");return void 0===a&&(a=0),-1!==this.indexOf(b,a)})}],c={};function a(d){var f=c[d];if(void 0!==f)return f.exports;var e=c[d]={exports:{}};return b[d](e,e.exports,a),e.exports}a.n=c=>{var b=c&&c.__esModule?()=>c.default:()=>c;return a.d(b,{a:b}),b},a.d=(d,c)=>{for(var b in c)a.o(c,b)&&!a.o(d,b)&&Object.defineProperty(d,b,{enumerable:!0,get:c[b]})},a.o=(a,b)=>Object.prototype.hasOwnProperty.call(a,b),(()=>{"use strict";const n=function(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a};var f="function",g="object",o="symbol",h="undefined",p=void 0,q=Object.keys,r=function(a){return a?q(a).length:0},s=Array.isArray,t="|boolean|number|string|"+g+"|"+f+"|"+h+"|",u=function(a,b){return -1===t.indexOf("|"+a+"|")?(b||(b=a),b):a},v=function(a,b){return u(Object.prototype.toString.call(a).replace(/^\[object\s(.*)\]$/,"$1").toLowerCase(),b)};const w=function(a,b){if(null==a)return v(a,b);try{var c=Object.getPrototypeOf(a).constructor.name.toLowerCase();return u(c,b)}catch(d){return v(a,b)}};function x(c){for(var a=1,e=arguments.length;a<e;a++)if(a%2||!Object.getOwnPropertyDescriptors){var d=null!=arguments[a]?arguments[a]:{},b=q(d);w(Object.getOwnPropertySymbols)===f&&(b=b.concat(Object.getOwnPropertySymbols(d).filter(function(a){return Object.getOwnPropertyDescriptor(d,a).enumerable}))),b.forEach(function(a){n(c,a,d[a])})}else Object.defineProperties(c,Object.getOwnPropertyDescriptors(arguments[a]));return c}const y=function(a){if(!Array.isArray(a)&&Array.from)return Array.from(a);for(var b=0,c=Array(a.length),d=a.length;b<d;b++)c[b]=a[b];return c},z=function(a){return o===w(a)?o:w(a,g)};var A=function(a,b){return f===z(a)?a(b):null!=a?a:b};const B=function(e,b,d){if(null==e)return A(d,e);var c,a=(c=e,c&&c.toJS?c.toJS():c);if(!b||!s(b))return a;try{for(var f=b.length,i=b.length-1;f--;){var g=b[i-f];if(a&&h!==z(a[g])){if(a=a[g],null==a){a=A(d,a);break}}else{a=A(d);break}}}catch(j){console.warn({e:j}),a=A(d)}return a};var i=a(0),C=a.n(i),D=function(d,c){for(var b=0,e=c.length;b<e;b++){var a=c[b];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(d,a.key,a)}};const j=function(a,b,c){return b&&D(a.prototype,b),c&&D(a,c),a},E=function(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")};a(2);var F={__null:!0},G=function(a){return"undefined"!=typeof window?window:a||F},k=j(function c(b){var f=this;if(E(this,c),n(this,"callbacks",[]),n(this,"addEventListener",function(b,a){return f.callbacks.push(a)}),n(this,"postMessage",function(a){f.onmessage({data:a})}),this.post=function(a){var b={data:a};f.callbacks.forEach(function(a){return a(b)})},this.onmessage=b,G().__null){try{onmessage=b}catch(d){console.error(d)}try{var a=postMessage;a&&(a({type:"ready"}),this.post=a)}catch(e){console.error(e)}}}),H={},I=function(a){var b;return H[a]=null!==(b=H[a])&& void 0!==b?b:0,(a||"")+"_"+H[a]++},J=function(a){return s(a)&&a.length},K=function(a){return!a||!r(a)},L=function(a){return y(Array(a).keys())},M=function(a,e,c,f){for(var g=-1,b=Math.max(Math.ceil((e-a)/(c||1)),0),d=Array(b);b--;)d[f?b:++g]=a,a+=c;return d},N=function f(e,b,c){c--;for(var d=0,g=e.length;d<g;d++){var a=e[d];a&&(c> -1&&J(a)?f(a,b,c):b.push(a))}return b},O=function(b,e){var c={},a=q(b);a.forEach(function(a){var d=e(b[a],a);isNaN(d)||(c[a]=d)});var f=W(U(c)),d=null;return a.some(function(a){return f===c[a]&&(d=b[a],!0)}),d},P=function(a,c){var b;return q(a).some(function(d){return!!c(a[d],d)&&(b=a[d],!0)}),b},Q=function(a,b){var c={};return r(a)&&b.forEach(function(b){X(a,b)&&(c[b]=a[b])}),c},R=function(a,c){var b={};return q(a).forEach(function(d){return b[d]=c(a[d],d)}),b},S=function(a,c){var b={};return a.forEach(function(a,d){b[a]=c[d]}),b},T=function(){return G().Date.now()},U=function(a){return a&&q(a).map(function(b){return a[b]})},V=function(b){for(var c=arguments.length,d=new Array(c>1?c-1:0),a=1;a<c;a++)d[a-1]=arguments[a];return J(b)?Math.max.apply(Math,y(b)):Math.max.apply(Math,[b].concat(d))},W=function(b){for(var c=arguments.length,d=new Array(c>1?c-1:0),a=1;a<c;a++)d[a-1]=arguments[a];return J(b)?Math.min.apply(Math,y(b)):Math.min.apply(Math,[b].concat(d))},X=function(a,b){return a&&a.hasOwnProperty(b)},Y=function(a){return f===z(a)},Z=function(a){return h===z(a)},d=function(a){return function(){return a}},$=function(){for(var d=[],b=arguments.length,c=new Array(b),a=0;a<b;a++)c[a]=arguments[a];return c.forEach(function(a){d=[].concat(y(d),y(a))}),C()(d)},_=Object.keys;function b(a){this._isDirected=!X(a,"directed")||a.directed,this._isMultigraph=!!X(a,"multigraph")&&a.multigraph,this._isCompound=!!X(a,"compound")&&a.compound,this._label=void 0,this._defaultNodeLabelFn=d(void 0),this._defaultEdgeLabelFn=d(void 0),this._nodes={},this._isCompound&&(this._parent={},this._children={},this._children["\0"]={}),this._in={},this._preds={},this._out={},this._sucs={},this._edgeObjs={},this._edgeLabels={}}function aa(a,b){a[b]?a[b]++:a[b]=1}function ab(a,b){--a[b]||delete a[b]}function ac(d,e,f,c){var a=""+e,b=""+f;if(!d&&a>b){var g=a;a=b,b=g}return a+"\x01"+b+"\x01"+(Z(c)?"\0":c)}function ad(b,a){return ac(b,a.v,a.w,a.name)}function c(){this._arr=[],this._keyIndices={}}b.prototype._nodeCount=0,b.prototype._edgeCount=0,b.prototype.isDirected=function(){return this._isDirected},b.prototype.isMultigraph=function(){return this._isMultigraph},b.prototype.isCompound=function(){return this._isCompound},b.prototype.setGraph=function(a){return this._label=a,this},b.prototype.graph=function(){return this._label},b.prototype.setDefaultNodeLabel=function(a){return Y(a)||(a=d(a)),this._defaultNodeLabelFn=a,this},b.prototype.nodeCount=function(){return this._nodeCount},b.prototype.nodes=function(){return _(this._nodes)},b.prototype.sources=function(){var a=this;return this.nodes().filter(function(b){return K(a._in[b])})},b.prototype.sinks=function(){var a=this;return this.nodes().filter(function(b){return K(a._out[b])})},b.prototype.setNodes=function(a,b){var c=arguments,d=this;return a.forEach(function(a){c.length>1?d.setNode(a,b):d.setNode(a)}),this},b.prototype.setNode=function(a,b){return X(this._nodes,a)?(arguments.length>1&&(this._nodes[a]=b),this):(this._nodes[a]=arguments.length>1?b:this._defaultNodeLabelFn(a),this._isCompound&&(this._parent[a]="\0",this._children[a]={},this._children["\0"][a]=!0),this._in[a]={},this._preds[a]={},this._out[a]={},this._sucs[a]={},++this._nodeCount,this)},b.prototype.node=function(a){return this._nodes[a]},b.prototype.hasNode=function(a){return X(this._nodes,a)},b.prototype.removeNode=function(a){var c=this;if(X(this._nodes,a)){var b=function(a){c.removeEdge(c._edgeObjs[a])};delete this._nodes[a],this._isCompound&&(this._removeFromParentsChildList(a),delete this._parent[a],this.children(a).forEach(function(a){c.setParent(a)}),delete this._children[a]),_(this._in[a]).forEach(b),delete this._in[a],delete this._preds[a],_(this._out[a]).forEach(b),delete this._out[a],delete this._sucs[a],--this._nodeCount}return this},b.prototype.setParent=function(b,a){if(!this._isCompound)throw new Error("Cannot set parent in a non-compound graph");if(Z(a))a="\0";else{a+="";for(var c=a;!Z(c);c=this.parent(c))if(c===b)throw new Error("Setting "+a+" as parent of "+b+" would create a cycle");this.setNode(a)}return this.setNode(b),this._removeFromParentsChildList(b),this._parent[b]=a,this._children[a][b]=!0,this},b.prototype._removeFromParentsChildList=function(a){delete this._children[this._parent[a]][a]},b.prototype.parent=function(b){if(this._isCompound){var a=this._parent[b];if("\0"!==a)return a}},b.prototype.children=function(a){if(Z(a)&&(a="\0"),this._isCompound){var b=this._children[a];if(b)return _(b)}else if("\0"===a)return this.nodes();else if(this.hasNode(a))return[]},b.prototype.predecessors=function(b){var a=this._preds[b];if(a)return _(a)},b.prototype.successors=function(b){var a=this._sucs[b];if(a)return _(a)},b.prototype.neighbors=function(a){var b=this.predecessors(a);if(b)return $(b,this.successors(a))},b.prototype.isLeaf=function(a){var b;return 0===(this.isDirected()?this.successors(a):this.neighbors(a)).length},b.prototype.filterNodes=function(b){var a=new this.constructor({directed:this._isDirected,multigraph:this._isMultigraph,compound:this._isCompound});a.setGraph(this.graph());var c=this;this._nodes.forEach(function(d,c){b(c)&&a.setNode(c,d)}),this._edgeObjs.forEach(function(b){a.hasNode(b.v)&&a.hasNode(b.w)&&a.setEdge(b,c.edge(b))});var d={};function e(f){var b=c.parent(f);return void 0===b||a.hasNode(b)?(d[f]=b,b):b in d?d[b]:e(b)}return this._isCompound&&a.nodes().forEach(function(b){a.setParent(b,e(b))}),a},b.prototype.setDefaultEdgeLabel=function(a){return Y(a)||(a=d(a)),this._defaultEdgeLabelFn=a,this},b.prototype.edgeCount=function(){return this._edgeCount},b.prototype.edges=function(){return U(this._edgeObjs)},b.prototype.setPath=function(a,b){var c=this,d=arguments;return a.reduce(function(e,a){return d.length>1?c.setEdge(e,a,b):c.setEdge(e,a),a}),this},b.prototype.setEdge=function(){var a,b,c,g,h=!1,d=arguments[0];"object"===z(d)&&null!==d&&"v"in d?(a=d.v,b=d.w,c=d.name,2===arguments.length&&(g=arguments[1],h=!0)):(a=d,b=arguments[1],c=arguments[3],arguments.length>2&&(g=arguments[2],h=!0)),a=""+a,b=""+b,Z(c)||(c=""+c);var e=ac(this._isDirected,a,b,c);if(X(this._edgeLabels,e))return h&&(this._edgeLabels[e]=g),this;if(!Z(c)&&!this._isMultigraph)throw new Error("Cannot set a named edge when isMultigraph = false");this.setNode(a),this.setNode(b),this._edgeLabels[e]=h?g:this._defaultEdgeLabelFn(a,b,c);var f=function i(e,f,g,c){var a=""+f,b=""+g;if(!e&&a>b){var h=a;a=b,b=h}var d={v:a,w:b};return c&&(d.name=c),d}(this._isDirected,a,b,c);return a=f.v,b=f.w,Object.freeze(f),this._edgeObjs[e]=f,aa(this._preds[b],a),aa(this._sucs[a],b),this._in[b][e]=f,this._out[a][e]=f,this._edgeCount++,this},b.prototype.edge=function(a,b,c){var d=1===arguments.length?ad(this._isDirected,arguments[0]):ac(this._isDirected,a,b,c);return this._edgeLabels[d]},b.prototype.hasEdge=function(a,b,c){var d=1===arguments.length?ad(this._isDirected,arguments[0]):ac(this._isDirected,a,b,c);return X(this._edgeLabels,d)},b.prototype.removeEdge=function(a,b,e){var c=1===arguments.length?ad(this._isDirected,arguments[0]):ac(this._isDirected,a,b,e),d=this._edgeObjs[c];return d&&(a=d.v,b=d.w,delete this._edgeLabels[c],delete this._edgeObjs[c],ab(this._preds[b],a),ab(this._sucs[a],b),delete this._in[b][c],delete this._out[a][c],this._edgeCount--),this},b.prototype.inEdges=function(c,d){var a=this._in[c];if(a){var b=U(a);return d?b.filter(function(a){return a.v===d}):b}},b.prototype.outEdges=function(c,d){var a=this._out[c];if(a){var b=U(a);return d?b.filter(function(a){return a.w===d}):b}},b.prototype.nodeEdges=function(a,b){var c=this.inEdges(a,b);if(c)return c.concat(this.outEdges(a,b))},c.prototype.size=function(){return this._arr.length},c.prototype.keys=function(){return this._arr.map(function(a){return a.key})},c.prototype.has=function(a){return X(this._keyIndices,a)},c.prototype.priority=function(b){var a=this._keyIndices[b];if(void 0!==a)return this._arr[a].priority},c.prototype.min=function(){if(0===this.size())throw new Error("Queue underflow");return this._arr[0].key},c.prototype.add=function(a,e){var b=this._keyIndices;if(!X(b,a=String(a))){var c=this._arr,d=c.length;return b[a]=d,c.push({key:a,priority:e}),this._decrease(d),!0}return!1},c.prototype.removeMin=function(){this._swap(0,this._arr.length-1);var a=this._arr.pop();return delete this._keyIndices[a.key],this._heapify(0),a.key},c.prototype.decrease=function(c,b){var a=this._keyIndices[c];if(b>this._arr[a].priority)throw new Error("New priority is greater than current priority. Key: "+c+" Old: "+this._arr[a].priority+" New: "+b);this._arr[a].priority=b,this._decrease(a)},c.prototype._heapify=function(c){var b=this._arr,d=2*c,e=d+1,a=c;d<b.length&&(a=b[d].priority<b[a].priority?d:a,e<b.length&&(a=b[e].priority<b[a].priority?e:a),a!==c&&(this._swap(c,a),this._heapify(a)))},c.prototype._decrease=function(a){for(var b,c=this._arr,d=c[a].priority;0!==a&&!(c[b=a>>1].priority<d);)this._swap(a,b),a=b},c.prototype._swap=function(b,c){var a=this._arr,d=this._keyIndices,e=a[b],f=a[c];a[b]=f,a[c]=e,d[f.key]=b,d[e.key]=c},d(1);d(1);function e(){}(function(a){var b={},f={},c=[];function d(g){if(X(f,g))throw new e;X(b,g)||(f[g]=!0,b[g]=!0,a.predecessors(g).forEach(d),delete f[g],c.push(g))}if(a.sinks().forEach(d),r(b)!==a.nodeCount())throw new e;return c}).CycleException=e,e.prototype=new Error;const ae=function(b,d,f){var a,c,g=(b.isDirected()?b.successors:b.neighbors).bind(b),e=[],h={};return(a=d,(c=c||function(a){return!s(a)})(a)?a===p?[]:[a]:a).forEach(function(a){if(!b.hasNode(a))throw new Error("Graph does not have node: "+a);af(b,a,"post"===f,h,g,e)}),e};function af(f,a,b,c,e,d){!X(c,a)&&(c[a]=!0,b||d.push(a),e(a).forEach(function(a){af(f,a,b,c,e,d)}),b&&d.push(a))}var ag=b,ah=function(a){a._prev._next=a._next,a._next._prev=a._prev,delete a._next,delete a._prev},ai=function(a,b){if("_next"!==a&&"_prev"!==a)return b},l=function(){function a(){E(this,a);var b={};b._next=b._prev=b,this._sentinel=b}return j(a,[{key:"dequeue",value:function(){var b=this._sentinel,a=b._prev;if(a!==b)return ah(a),a}},{key:"enqueue",value:function(a){var b=this._sentinel;a._prev&&a._next&&ah(a),a._next=b._next,b._next._prev=a,b._next=a,a._prev=b}},{key:"toString",value:function(){for(var b=[],c=this._sentinel,a=c._prev;a!==c;)b.push(JSON.stringify(a,ai)),a=a._prev;return"["+b.join(", ")+"]"}}]),a}();const aj=l,ak=function(b,c){if(1>=b.nodeCount())return[];var a=an(b,c||function(){return 1});return N(al(a.graph,a.buckets,a.zeroIdx).map(function(a){return b.outEdges(a.v,a.w)}),[],1)};function al(c,a,d){for(var b,e=[],g=a[a.length-1],h=a[0];c.nodeCount();){for(;b=h.dequeue();)am(c,a,d,b);for(;b=g.dequeue();)am(c,a,d,b);if(c.nodeCount()){for(var f=a.length-2;f>0;--f)if(b=a[f].dequeue()){e=e.concat(am(c,a,d,b,!0));break}}}return e}function am(a,e,f,b,c){var d=c?[]:void 0;return a.inEdges(b.v).forEach(function(b){var h=a.edge(b),g=a.node(b.v);c&&d.push({v:b.v,w:b.w}),g.out-=h,ao(e,f,g)}),a.outEdges(b.v).forEach(function(b){var d=a.edge(b),g=b.w,c=a.node(g);c.in-=d,ao(e,f,c)}),a.removeNode(b.v),d}function an(a,g){var b=new ag,c=0,d=0;a.nodes().forEach(function(a){b.setNode(a,{v:a,"in":0,out:0})}),a.edges().forEach(function(a){var f=b.edge(a.v,a.w)||0,e=g(a);b.setEdge(a.v,a.w,f+e),d=Math.max(d,b.node(a.v).out+=e),c=Math.max(c,b.node(a.w).in+=e)});var e=L(d+c+3).map(function(){return new aj}),f=c+1;return b.nodes().forEach(function(a){ao(e,f,b.node(a))}),{graph:b,buckets:e,zeroIdx:f}}function ao(b,c,a){a.out?a.in?b[a.out-a.in+c].enqueue(a):b[b.length-1].enqueue(a):b[0].enqueue(a)}var ap=function(a){var b=[],c={},d={};return a.nodes().forEach(function f(e){!d[e]&&(d[e]=!0,c[e]=!0,a.outEdges(e).forEach(function(a){c[a.w]?b.push(a):f(a.w)}),delete c[e])}),b},aq=function(a){var b;("greedy"===a.graph().acyclicer?ak(a,(b=a,function(a){return b.edge(a).weight})):ap(a)).forEach(function(b){var c=a.edge(b);a.removeEdge(b),c.forwardName=b.name,c.reversed=!0,a.setEdge(b.w,b.v,c,I("rev"))})},ar=function(a){a.edges().forEach(function(c){var b=a.edge(c);if(b.reversed){a.removeEdge(c);var d=b.forwardName;delete b.reversed,delete b.forwardName,a.setEdge(c.w,c.v,b,d)}})};function as(b,d,c,e){var a;do a=I(e);while(b.hasNode(a))return c.dummy=d,b.setNode(a,c),a}function at(a){var b=new ag({multigraph:a.isMultigraph()}).setGraph(a.graph());return a.nodes().forEach(function(c){a.children(c).length||b.setNode(c,a.node(c))}),a.edges().forEach(function(c){b.setEdge(c,a.edge(c))}),b}function au(e,h){var f,g,i=e.x,j=e.y,a=h.x-i,b=h.y-j,c=e.width/2,d=e.height/2;if(!a&&!b)throw new Error("Not possible to find intersection inside of the rectangle");return Math.abs(b)*c>Math.abs(a)*d?(b<0&&(d=-d),f=d*a/b,g=d):(a<0&&(c=-c),f=c,g=c*b/a),{x:i+f,y:j+g}}function av(a){var b=L(ax(a)+1).map(function(){return[]});return a.nodes().forEach(function(c){var d=a.node(c),e=d.rank;void 0!==e&&(b[e][d.order]=c)}),b}function aw(b,c,d,e){var a={width:0,height:0};return arguments.length>=4&&(a.rank=d,a.order=e),as(b,"border",a,c)}function ax(c,a){a||(a=c.nodes());var b=a.map(function(b){var a=c.node(b).rank;if(void 0!==a)return a});return b.length?V(b):0}function ay(a,b){var c=T();try{return b()}finally{console.log(a+" time: "+(T()-c)+"ms")}}function az(b,a){return a()}function aA(a,c,h,k,i,j,b){var e=a.children(b);if(!e.length){b!==c&&a.setEdge(c,b,{weight:0,minlen:h});return}var d=aw(a,"_bt"),f=aw(a,"_bb"),g=a.node(b);a.setParent(d,b),g.borderTop=d,a.setParent(f,b),g.borderBottom=f,e.forEach(function(g){aA(a,c,h,k,i,j,g);var e=a.node(g),l=e.borderTop?e.borderTop:g,m=e.borderBottom?e.borderBottom:g,n=e.borderTop?k:2*k,o=l!==m?1:i-j[b]+1;a.setEdge(d,l,{weight:n,minlen:o,nestingEdge:!0}),a.setEdge(m,f,{weight:n,minlen:o,nestingEdge:!0})}),a.parent(b)||a.setEdge(c,d,{weight:0,minlen:i+j[b]})}function aB(a){a.nodes().forEach(function(b){aC(a.node(b))}),a.edges().forEach(function(b){aC(a.edge(b))})}function aC(a){var b=a.width;a.width=a.height,a.height=b}function aD(a){a.y=-a.y}function aE(a){var b=a.x;a.x=a.y,a.y=b}function m(a){var c={};function b(e){var f=a.node(e);if(c.v)return f.rank;c[e]=!0;var d=W(a.outEdges(e).map(function(c){return b(c.w)-a.edge(c).minlen}));return(d===Number.POSITIVE_INFINITY||null==d)&&(d=0),f.rank=d}a.sources().forEach(b)}function aF(a,b){return a.node(b.w).rank-a.node(b.v).rank-a.edge(b).minlen}const aG=function(a){var c,d,b=new ag({directed:!1}),e=a.nodes()[0],f=a.nodeCount();for(b.setNode(e,{});aH(b,a)<f;)c=aI(b,a),d=b.hasNode(c.v)?aF(a,c):-aF(a,c),aJ(b,a,d);return b};function aH(a,c){function b(d){c.nodeEdges(d).forEach(function(f){var g=f.v,e=d===g?f.w:g;a.hasNode(e)||aF(c,f)||(a.setNode(e,{}),a.setEdge(d,e,{}),b(e))})}return a.nodes().forEach(b),a.nodeCount()}function aI(b,a){return O(a.edges(),function(c){if(b.hasNode(c.v)!==b.hasNode(c.w))return aF(a,c)})}function aJ(a,b,c){a.nodes().forEach(function(a){b.node(a).rank+=c})}var aK=function(a,b){return ae(a,b,"pre")},aL=function(a,b){return ae(a,b,"post")};const aM=function(a){m(a=(e=a,f=new ag().setGraph(e.graph()),e.nodes().forEach(function(a){f.setNode(a,e.node(a))}),e.edges().forEach(function(a){var b=f.edge(a.v,a.w)||{weight:0,minlen:1},c=e.edge(a);f.setEdge(a.v,a.w,{weight:b.weight+c.weight,minlen:Math.max(b.minlen,c.minlen)})}),f));var e,f,c,d,b=aG(a);for(aQ(b),aN(b,a);c=aS(b);)d=aT(b,a,c),aU(b,a,c,d)};function aN(b,c){var a=aL(b,b.nodes());(a=a.slice(0,a.length-1)).forEach(function(a){aO(b,c,a)})}function aO(a,c,b){var d=a.node(b).parent;a.edge(b,d).cutvalue=aP(a,c,b)}function aP(f,b,a){var d=f.node(a).parent,g=!0,c=b.edge(a,d),e=0;return c||(g=!1,c=b.edge(d,a)),e=c.weight,b.nodeEdges(a).forEach(function(c){var i=c.v===a,h=i?c.w:c.v;if(h!==d){var j=i===g,k=b.edge(c).weight;if(e+=j?k:-k,aW(f,a,h)){var l=f.edge(a,h).cutvalue;e+=j?-l:l}}}),e}function aQ(a,b){arguments.length<2&&(b=a.nodes()[0]),aR(a,{},1,b)}function aR(d,f,b,c,e){var g=b,a=d.node(c);return f[c]=!0,d.neighbors(c).forEach(function(a){f[a]||(b=aR(d,f,b,a,c))}),a.low=g,a.lim=b++,e?a.parent=e:delete a.parent,b}function aS(a){return P(a.edges(),function(b){return a.edge(b).cutvalue<0})}function aT(d,e,a){var b=a.v,c=a.w;e.hasEdge(b,c)||(b=a.w,c=a.v);var f=d.node(b),g=d.node(c),h=f,i=!1;return f.lim>g.lim&&(h=g,i=!0),O(e.edges().filter(function(a){return i===aX(d,d.node(a.v),h)&&i!==aX(d,d.node(a.w),h)}),function(a){return aF(e,a)})}function aU(a,b,c,d){var e=c.v,f=c.w;a.removeEdge(e,f),a.setEdge(d.v,d.w,{}),aQ(a),aN(a,b),aV(a,b)}function aV(a,d){var c=P(a.nodes(),function(a){return!d.node(a).parent}),b=aK(a,c);(b=b.slice(1)).forEach(function(b){var e=a.node(b).parent,c=d.edge(b,e),f=!1;c||(c=d.edge(e,b),f=!0),d.node(b).rank=d.node(e).rank+(f?c.minlen:-c.minlen)})}function aW(a,b,c){return a.hasEdge(b,c)}function aX(c,a,b){return b.low<=a.lim&&a.lim<=b.lim}const aY=function(a){switch(a.graph().ranker){case"tight-tree":a$(a);break;case"longest-path":aZ(a);break;case"network-simplex":default:a_(a);break}};var aZ=m;function a$(a){m(a),aG(a)}function a_(a){aM(a)}const a0=function(a,d,e){var b=a1(a),c=new ag({compound:!0}).setGraph({root:b}).setDefaultNodeLabel(function(b){return a.node(b)});return a.nodes().forEach(function(f){var g=a.node(f),h=a.parent(f);(g.rank===d||g.minRank<=d&&d<=g.maxRank)&&(c.setNode(f),c.setParent(f,h||b),a[e](f).forEach(function(b){var d=b.v===f?b.w:b.v,e=c.edge(d,f),g=void 0!==e?e.weight:0;c.setEdge(d,f,{weight:a.edge(b).weight+g})}),void 0!==g.minRank&&c.setNode(f,{borderLeft:g.borderLeft[d],borderRight:g.borderRight[d]}))}),c};function a1(b){for(var a;b.hasNode(a=I("_root")););return a}const a2=function(a,b){var c={};return a.forEach(function(a,d){var b=c[a.v]={indegree:0,"in":[],out:[],vs:[a.v],i:d};void 0!==a.barycenter&&(b.barycenter=a.barycenter,b.weight=a.weight)}),b.edges().forEach(function(a){var b=c[a.v],d=c[a.w];void 0!==b&& void 0!==d&&(d.indegree++,b.out.push(c[a.w]))}),a4(a3(c).filter(function(a){return!c[a].indegree}).map(function(a){return c[a]}))};var a3=Object.keys;function a4(b){var c=[];function d(a){return function(b){!b.merged&&(void 0===b.barycenter|| void 0===a.barycenter||b.barycenter>=a.barycenter)&&a5(a,b)}}function e(a){return function(c){c.in.push(a),0== --c.indegree&&b.push(c)}}for(;b.length;){var a=b.pop();c.push(a),a.in.reverse().forEach(d(a)),a.out.forEach(e(a))}return c.filter(function(a){return!a.merged}).map(function(a){return Q(a,["vs","i","barycenter","weight"])}).map(function(a){return a})}function a5(a,b){var d=0,c=0;a.weight&&(d+=a.barycenter*a.weight,c+=a.weight),b.weight&&(d+=b.barycenter*b.weight,c+=b.weight),a.vs=b.vs.concat(a.vs),a.barycenter=d/c,a.weight=c,a.i=Math.min(b.i,a.i),b.merged=!0}const a6=function(g,h){var c=function(a,c){var b={lhs:[],rhs:[]};return a.forEach(function(a){c(a)?b.lhs.push(a):b.rhs.push(a)}),b}(g,function(a){return void 0!==a.barycenter}),d=c.lhs,i=c.rhs.sort(function(a){return-a.i}),e=[],j=0,a=0,f=0;d.sort(a8(!!h)),f=a7(e,i,f),d.forEach(function(b){f+=b.vs.length,e.push(b.vs),j+=b.barycenter*b.weight,a+=b.weight,f=a7(e,i,f)});var b={vs:N(e,[],1)};return a&&(b.barycenter=j/a,b.weight=a),b};function a7(d,a,b){for(var c;a.length&&(c=a.slice(-1)[0]).i<=b;)a.pop(),d.push(c.vs),b++;return b}function a8(a){return function(b,c){return b.barycenter<c.barycenter?-1:b.barycenter>c.barycenter?1:a?c.i-b.i:b.i-c.i}}const a9=ba;function ba(b,f,k,l){var m,g,e=b.children(f),d=b.node(f),c=d?d.borderLeft:void 0,h=d?d.borderRight:void 0,n={};c&&(e=e.filter(function(a){return a!==c&&a!==h}));var i=(m=b,g=e,g.map(function(a){var c=m.inEdges(a);if(!c.length)return{v:a};var b=c.reduce(function(a,b){var c=m.edge(b),d=m.node(b.v);return{sum:a.sum+c.weight*d.order,weight:a.weight+c.weight}},{sum:0,weight:0});return{v:a,barycenter:b.sum/b.weight,weight:b.weight}}));i.forEach(function(a){if(b.children(a.v).length){var c=ba(b,a.v,k,l);n[a.v]=c,c.barycenter&&bc(a,c)}});var j=a2(i,k);bb(j,n);var a=a6(j,l);if(c&&(a.vs=N([c,a.vs,h],[],1),b.predecessors(c).length)){var o=b.node(b.predecessors(c)[0]),p=b.node(b.predecessors(h)[0]);void 0===a.barycenter&&(a.barycenter=0,a.weight=0),a.barycenter=(a.barycenter*a.weight+o.order+p.order)/(a.weight+2),a.weight+=2}return a}function bb(a,b){a.forEach(function(a){a.vs=N(a.vs.map(function(a){return b[a]?b[a].vs:a}),[],1)})}function bc(a,b){void 0!==a.barycenter?(a.barycenter=(a.barycenter*a.weight+b.barycenter*b.weight)/(a.weight+b.weight),a.weight+=b.weight):(a.barycenter=b.barycenter,a.weight=b.weight)}const bd=function(b,c,a){var d,e={};a.forEach(function(h){for(var g,f,a=b.parent(h);a;){if((g=b.parent(a))?(f=e[g],e[g]=a):(f=d,d=a),f&&f!==a){c.setEdge(f,a);return}a=g}})},be=function(a){var e={},b=a.nodes().filter(function(b){return!a.children(b).length}),c=L(ax(a,b)+1).map(function(){return[]});function d(b){!e[b]&&(e[b]=!0,c[a.node(b).rank].push(b),a.successors(b).forEach(d))}return b.sort(function(b){return a.node(b).rank}).forEach(d),c},bf=function(d,b){for(var c=0,a=1;a<b.length;++a)c+=bg(d,b[a-1],b[a]);return c};function bg(g,c,b){for(var h=S(b,b.map(function(b,a){return a})),d=N(c.map(function(a){return g.outEdges(a).map(function(a){return{pos:h[a.w],weight:g.edge(a).weight}}).sort(function(a){return a.pos}).map(function(a){return a})}),[],1),a=1;a<b.length;)a<<=1;var e=2*a-1;a-=1;var i=L(e).map(function(){return 0}),f=0;return d.forEach(function(c){var b=c.pos+a;i[b]+=c.weight;for(var d=0;b>0;)b%2&&(d+=i[b+1]),b=b-1>>1,i[b]+=c.weight;f+=c.weight*d}),f}var bh=Object.keys;const bi=function(a){var e=ax(a),i=bj(a,L(e+1).slice(1),"inEdges"),j=bj(a,M(e-1,-1,-1),"outEdges"),b=be(a);bl(a,b);for(var f,g=Number.POSITIVE_INFINITY,c=0,d=0;d<4;++c,++d){bk(c%2?i:j,c%4>=2),b=av(a);var h=bf(a,b);h<g&&(d=0,f=x({},b),g=h)}bl(a,f)};function bj(b,a,c){return a.map(function(a){return a0(b,a,c)})}function bk(a,b){var c=new ag;a.forEach(function(a){var e=a.graph().root,d=a9(a,e,c,b);d.vs.forEach(function(b,c){a.node(b).order=c}),bd(a,c,d.vs)})}function bl(b,a){bh(a||{}).forEach(function(c){a[c].forEach(function(a,c){return b.node(a).order=c})})}const bm=function(a){var b=bo(a);a.graph().dummyChains.forEach(function(d){for(var g=a.node(d),h=g.edgeObj,j=bn(a,b,h.v,h.w),f=j.path,k=j.lca,c=0,e=f[c],i=!0;d!==h.w;){if(g=a.node(d),i){for(;(e=f[c])!==k&&a.node(e).maxRank<g.rank;)c++;e===k&&(i=!1)}if(!i){for(;c<f.length-1&&a.node(e=f[c+1]).minRank<=g.rank;)c++;e=f[c]}a.setParent(d,e),d=a.successors(d)[0]}})};function bn(f,b,c,d){var a,e,g=[],h=[],i=Math.min(b[c].low,b[d].low),j=Math.max(b[c].lim,b[d].lim);a=c;do a=f.parent(a),g.push(a);while(a&&(b[a].low>i||j>b[a].lim))for(e=a,a=d;(a=f.parent(a))!==e;)h.push(a);return{path:g.concat(h.reverse()),lca:e}}function bo(a){var b={},d=0;function c(e){var f=d;a.children(e).forEach(c),b[e]={low:f,lim:d++}}return a.children().forEach(c),b}var bp=function(a,b,g,h,e,c){var f=e[b][c-1],d=as(a,"border",{width:0,height:0,rank:c,borderType:b},g);e[b][c]=d,a.setParent(d,h),f&&a.setEdge(f,d,{weight:1})};const bq=function(a){a.children().forEach(function f(c){var e,b=a.node(c);if(null===(e=a.children(c))|| void 0===e||e.forEach(f),b.minRank){b.borderLeft=[],b.borderRight=[];for(var d=b.minRank,g=b.maxRank+1;d<g;++d)bp(a,"borderLeft","_bl",c,b,d),bp(a,"borderRight","_br",c,b,d)}})};var br=function(c,a){var b={};return a.reduce(function(d,a){var e=0,f=0,g=d.length,h=a.slice(-1)[0];return a.forEach(function(i,j){var d=bs(c,i),k=d?c.node(d).order:g;(d||i===h)&&(a.slice(f,j+1).forEach(function(a){c.predecessors(a).forEach(function(d){var f=c.node(d),g=f.order;(g<e||k<g)&&!(f.dummy&&c.node(a).dummy)&&bt(b,d,a)})}),f=j+1,e=k)}),a}),b};function bs(a,b){if(a.node(b).dummy){var c;return a.predecessors(b).some(function(b){return!!a.node(b).dummy&&(c=b,!0)}),c}}var bt=function(d,a,b){if(a>b){var e=a;a=b,b=e}var c=d[a];c||(d[a]=c={}),c[b]=!0},bu=function(c,a,b){if(a>b){var d=a;a=b,b=d}return!!B(c,[a,b])},bv=function(d,a,e,f){var b={},c={},g={};return a.forEach(function(a){return a.forEach(function(a,d){b[a]=a,c[a]=a,g[a]=d})}),a.forEach(function(a){var d=-1;a.forEach(function(a){var i=f(a);if(i.length){i.sort(function(a,b){return g[a]-g[b]});for(var k=(i.length-1)/2,j=Math.floor(k),l=Math.ceil(k);j<=l;++j){var h=i[j];c[a]===a&&d<g[h]&&!bu(e,a,h)&&(c[h]=a,c[a]=b[a]=b[h],d=g[h])}}})}),{root:b,align:c}},bw=function(d,e,f,g,b){var h={},a=bx(d,e,f,b),i=b?"borderLeft":"borderRight";function c(e,f){for(var c=a.nodes(),d={},b=c.pop();b;)d[b]?e(b):(d[b]=!0,c.push.apply(c,[b].concat(y(f(b))))),b=c.pop()}return c(function(b){h[b]=a.inEdges(b).reduce(function(c,b){return Math.max(c,h[b.v]+a.edge(b))},0)},a.predecessors.bind(a)),c(function(b){var c=a.outEdges(b).reduce(function(c,b){return Math.min(c,h[b.w]-a.edge(b))},Number.POSITIVE_INFINITY),e=d.node(b);c!==Number.POSITIVE_INFINITY&&e.borderType!==i&&(h[b]=Math.max(h[b],c))},a.successors.bind(a)),U(g).forEach(function(a){h[a]=h[f[a]]}),h};function bx(b,c,f,d){var e=new ag,a=b.graph(),g=bA(a.nodesep,a.edgesep,d);return c.forEach(function(a){var c;a.forEach(function(a){var d=f[a];if(e.setNode(d),c){var h=f[c],i=e.edge(h,d);e.setEdge(h,d,Math.max(g(b,a,c),i||0))}c=a})}),e}var by=function(c,b){var a=U(b),d=W(a),e=V(a);["u","d"].forEach(function(a){["l","r"].forEach(function(g){var j,h=a+g,f=c[h];if(f!==b){var i=U(f);(j="l"===g?d-W(i):e-V(i))&&(c[h]=R(f,function(a){return a+j}))}})})},bz=function(a){var i,e,f,c=av(a),j=x(x({},br(a,c)),function(c,a){var b={};function d(e,a,d,f,g){var h;L(d).slice(a).forEach(function(a){h=e[a],c.node(h).dummy&&c.predecessors(h).forEach(function(d){var a=c.node(d);a.dummy&&(a.order<f||a.order>g)&&bt(b,d,h)})})}return a.reduce(function(b,a){var e,f=-1,g=0;return a.forEach(function(h,i){if("border"===c.node(h).dummy){var j=c.predecessors(h);j.length&&(d(a,g,i,f,e=c.node(j[0]).order),g=i,f=e)}d(a,g,a.length,e,b.length)}),a}),b}(a,c)),b={};["u","d"].forEach(function(d){i="u"===d?c:U(c).reverse(),["l","r"].forEach(function(c){"r"===c&&(i=i.map(function(a){return U(a).reverse()}));var g=("u"===d?a.predecessors:a.successors).bind(a),f=bv(a,i,j,g),e=bw(a,i,f.root,f.align,"r"===c);"r"===c&&(e=R(e,function(a){return-a})),b[d+c]=e})});var d,g,h=(e=a,O(U(f=b),function(a){var b=Number.NEGATIVE_INFINITY,c=Number.POSITIVE_INFINITY;return q(a).forEach(function(d){var f=a[d],g=bB(e,d)/2;b=Math.max(f+g,b),c=Math.min(f-g,c)}),b-c}));return by(b,h),d=b,g=a.graph().align,R(d.ul,function(c,b){if(g)return d[g.toLowerCase()][b];var a=q(d).map(function(a){return d[a][b]}).sort(function(a,b){return a-b});return(a[1]+a[2])/2})},bA=function(a,b,c){return function(h,i,j){var d,f=h.node(i),g=h.node(j),e=0;if(e+=f.width/2,X(f,"labelpos"))switch(f.labelpos.toLowerCase()){case"l":d=-f.width/2;break;case"r":d=f.width/2;break}if(d&&(e+=c?d:-d),d=0,e+=(f.dummy?b:a)/2,e+=(g.dummy?b:a)/2,e+=g.width/2,X(g,"labelpos"))switch(g.labelpos.toLowerCase()){case"l":d=g.width/2;break;case"r":d=-g.width/2;break}return d&&(e+=c?d:-d),e}},bB=function(a,b){return a.node(b).width},bC=function(a){var b=av(a),c=a.graph().ranksep,d=0;b.forEach(function(b){var e=V(b.map(function(b){return a.node(b).height}));b.forEach(function(b){return a.node(b).y=d+e/2}),d+=e+c})};const bD=function(a){bC(a=at(a));var b=bz(a);q(b).forEach(function(c){return a.node(c).x=b[c]})};var bE=function(a){var b=W(a.nodes().map(function(b){return a.node(b).rank}));a.nodes().forEach(function(d){var c=a.node(d);void 0!==c.rank&&(c.rank-=b)})},bF=function(a){var c=W(a.nodes().map(function(b){return a.node(b).rank})),b=[];a.nodes().forEach(function(e){var d=a.node(e).rank-c;b[d]||(b[d]=[]),b[d].push(e)});var d=0,e=a.graph().nodeRankFactor;b.forEach(function(b,c){void 0===b&&c%e!=0?--d:d&&b.forEach(function(b){a.node(b).rank+=d})})};const bG=function(c,a){var b=a&&a.debugTiming?ay:az;b("layout",function(){var a=b("  buildLayoutGraph",function(){return bR(c)});b("  runLayout",function(){bH(a,b)}),b("  updateInputGraph",function(){bI(c,a)})})};function bH(b,a){a("    makeSpaceForEdgeLabels",function(){bS(b)}),a("    removeSelfEdges",function(){b_(b)}),a("    acyclic",function(){aq(b)}),a("    nestingGraph.run",function(){var a,c,d,e,f,h,g;c=as(a=b,"root",{},"_root"),d=function c(a){var b={};function d(e,f){var c=a.children(e);c&&c.length&&c.forEach(function(a){d(a,f+1)}),b[e]=f}return a.children().forEach(function(a){d(a,1)}),b}(a),e=V(U(d))-1,f=2*e+1,a.graph().nestingRoot=c,a.edges().forEach(function(b){a.edge(b).minlen*=f}),h=(g=a,g.edges().reduce(function(a,b){return a+g.edge(b).weight},0)+1),a.children().forEach(function(b){aA(a,c,f,h,e,d,b)}),a.graph().nodeRankFactor=f}),a("    rank",function(){aY(at(b))}),a("    injectEdgeLabelProxies",function(){bT(b)}),a("    removeEmptyRanks",function(){bF(b)}),a("    nestingGraph.cleanup",function(){var a,c;c=(a=b).graph(),a.removeNode(c.nestingRoot),delete c.nestingRoot,a.edges().forEach(function(b){a.edge(b).nestingEdge&&a.removeEdge(b)})}),a("    normalizeRanks",function(){bE(b)}),a("    assignRankMinMax",function(){bU(b)}),a("    removeEdgeLabelProxies",function(){bV(b)}),a("    normalize.run",function(){var a;(a=b).graph().dummyChains=[],a.edges().forEach(function(b){(function m(a,c){var f,e,h,g=c.v,d=a.node(g).rank,i=c.w,j=a.node(i).rank,k=c.name,b=a.edge(c),l=b.labelRank;if(j!==d+1){for(a.removeEdge(c),h=0,++d;d<j;++h,++d)b.points=[],f=as(a,"edge",e={width:0,height:0,edgeLabel:b,edgeObj:c,rank:d},"_d"),d===l&&(e.width=b.width,e.height=b.height,e.dummy="edge-label",e.labelpos=b.labelpos),a.setEdge(g,f,{weight:b.weight},k),0===h&&a.graph().dummyChains.push(f),g=f;a.setEdge(g,i,{weight:b.weight},k)}})(a,b)})}),a("    parentDummyChains",function(){bm(b)}),a("    addBorderSegments",function(){bq(b)}),a("    order",function(){bi(b)}),a("    insertSelfEdges",function(){b0(b)}),a("    adjustCoordinateSystem",function(){var a,c;("lr"===(c=(a=b).graph().rankdir.toLowerCase())||"rl"===c)&&aB(a)}),a("    position",function(){bD(b)}),a("    positionSelfEdges",function(){b1(b)}),a("    removeBorderNodes",function(){b$(b)}),a("    normalize.undo",function(){!function(a){a.graph().dummyChains.forEach(function(d){var e,b=a.node(d),c=b.edgeLabel;for(a.setEdge(b.edgeObj,c);b.dummy;)e=a.successors(d)[0],a.removeNode(d),c.points.push({x:b.x,y:b.y}),"edge-label"===b.dummy&&(c.x=b.x,c.y=b.y,c.width=b.width,c.height=b.height),d=e,b=a.node(d)})}(b)}),a("    fixupEdgeLabelCoords",function(){bY(b)}),a("    undoCoordinateSystem",function(){var a,c,d,e;("bt"===(c=(a=b).graph().rankdir.toLowerCase())||"rl"===c)&&(d=a,d.nodes().forEach(function(a){aD(d.node(a))}),d.edges().forEach(function(b){var a=d.edge(b);a.points.forEach(aD),a.y&&aD(a)})),("lr"===c||"rl"===c)&&((e=a).nodes().forEach(function(a){aE(e.node(a))}),e.edges().forEach(function(b){var a=e.edge(b);a.points.forEach(aE),a.x&&aE(a)}),aB(a))}),a("    translateGraph",function(){bW(b)}),a("    assignNodeIntersects",function(){bX(b)}),a("    reversePoints",function(){bZ(b)}),a("    acyclic.undo",function(){ar(b)})}function bI(a,b){a.nodes().forEach(function(e){var c=a.node(e),d=b.node(e);c&&(c.x=d.x,c.y=d.y,b.children(e).length&&(c.width=d.width,c.height=d.height))}),a.edges().forEach(function(e){var d=a.edge(e),c=b.edge(e);d.points=c.points,c.x&&(d.x=c.x,d.y=c.y)}),a.graph().width=b.graph().width,a.graph().height=b.graph().height}var bJ=["nodesep","edgesep","ranksep","marginx","marginy"],bK={ranksep:50,edgesep:20,nodesep:50,rankdir:"tb"},bL=["acyclicer","ranker","rankdir","align"],bM=["width","height"],bN={width:0,height:0},bO=["minlen","weight","width","height","labeloffset"],bP={minlen:1,weight:1,width:0,height:0,labeloffset:10,labelpos:"r"},bQ=["labelpos"];function bR(a){var b=new ag({multigraph:!0,compound:!0}),c=b3(a.graph());return b.setGraph(x(x(x({},bK),b2(c,bJ)),Q(c,bL))),a.nodes().forEach(function(c){var d=b3(a.node(c));b.setNode(c,x(x({},bN),b2(d,bM))),b.setParent(c,a.parent(c))}),a.edges().forEach(function(c){var d=b3(a.edge(c));b.setEdge(c,x(x(x({},bP),b2(d,bO)),Q(d,bQ)))}),b}function bS(a){var b=a.graph();b.ranksep/=2,a.edges().forEach(function(d){var c=a.edge(d);c.minlen*=2,"c"!==c.labelpos.toLowerCase()&&("TB"===b.rankdir||"BT"===b.rankdir?c.width+=c.labeloffset:c.height+=c.labeloffset)})}function bT(a){a.edges().forEach(function(b){var c=a.edge(b);if(c.width&&c.height){var d=a.node(b.v),e={rank:(a.node(b.w).rank-d.rank)/2+d.rank,e:b};as(a,"edge-proxy",e,"_ep")}})}function bU(a){var b=0;a.nodes().forEach(function(d){var c=a.node(d);c.borderTop&&(c.minRank=a.node(c.borderTop).rank,c.maxRank=a.node(c.borderBottom).rank,b=Math.max(b,c.maxRank))}),a.graph().maxRank=b}function bV(a){a.nodes().forEach(function(c){var b=a.node(c);"edge-proxy"===b.dummy&&(a.edge(b.e).labelRank=b.rank,a.removeNode(c))})}function bW(a){var c=Number.POSITIVE_INFINITY,g=0,d=Number.POSITIVE_INFINITY,h=0,b=a.graph(),e=b.marginx||0,f=b.marginy||0;function i(a){var b=a.x,e=a.y,f=a.width,i=a.height;c=Math.min(c,b-f/2),g=Math.max(g,b+f/2),d=Math.min(d,e-i/2),h=Math.max(h,e+i/2)}a.nodes().forEach(function(b){i(a.node(b))}),a.edges().forEach(function(c){var b=a.edge(c);b&&b.x&&i(b)}),c-=e,d-=f,a.nodes().forEach(function(e){var b=a.node(e);b.x-=c,b.y-=d}),a.edges().forEach(function(e){var b=a.edge(e);b.points.forEach(function(a){a.x-=c,a.y-=d}),b.x&&(b.x-=c),b.y&&(b.y-=d)}),b.width=g-c+e,b.height=h-d+f}function bX(a){a.edges().forEach(function(c){var d,e,b=a.edge(c),f=a.node(c.v),g=a.node(c.w);b.points?(d=b.points[0],e=b.points[b.points.length-1]):(b.points=[],d=g,e=f),b.points.unshift(au(f,d)),b.points.push(au(g,e))})}function bY(a){a.edges().forEach(function(c){var b=a.edge(c);if(b.x)switch(("l"===b.labelpos||"r"===b.labelpos)&&(b.width-=b.labeloffset),b.labelpos){case"l":b.x-=b.width/2+b.labeloffset;break;case"r":b.x+=b.width/2+b.labeloffset;break}})}function bZ(a){a.edges().forEach(function(c){var b=a.edge(c);b.reversed&&b.points.reverse()})}function b$(a){a.nodes().forEach(function(c){if(a.children(c).length){var b=a.node(c),d=a.node(b.borderTop),f=a.node(b.borderBottom),e=a.node(b.borderLeft.slice(-1)[0]),g=a.node(b.borderRight.slice(-1)[0]);b.width=Math.abs(g.x-e.x),b.height=Math.abs(f.y-d.y),b.x=e.x+b.width/2,b.y=d.y+b.height/2}}),a.nodes().forEach(function(b){"border"===a.node(b).dummy&&a.removeNode(b)})}function b_(a){a.edges().forEach(function(b){if(b.v===b.w){var c=a.node(b.v);c.selfEdges||(c.selfEdges=[]),c.selfEdges.push({e:b,label:a.edge(b)}),a.removeEdge(b)}})}function b0(a){av(a).forEach(function(b){var c=0;b.forEach(function(d,e){var b=a.node(d);b.order=e+c,b.selfEdges&&b.selfEdges.forEach(function(d){as(a,"selfedge",{width:d.label.width,height:d.label.height,rank:b.rank,order:e+ ++c,e:d.e,label:d.label},"_se")}),delete b.selfEdges})})}function b1(a){a.nodes().forEach(function(h){var b=a.node(h);if("selfedge"===b.dummy){var f=a.node(b.e.v),c=f.x+f.width/2,d=f.y,e=b.x-c,g=f.height/2;a.setEdge(b.e,b.label),a.removeNode(h),b.label.points=[{x:c+2*e/3,y:d-g},{x:c+5*e/6,y:d-g},{x:c+e,y:d},{x:c+5*e/6,y:d+g},{x:c+2*e/3,y:d+g}],b.label.x=b.x,b.label.y=b.y}})}function b2(a,b){return R(Q(a,b),Number)}function b3(a){var b={};return q(a||{}).forEach(function(c){return b[c.toLowerCase()]=a[c]}),b}var b4=void 0,b5=new k(function(b){var a=B(b,["data"]),c=a.nodes,d=a.conns,e=a.queueId,f=b7(c,d);b6({nextXY:f,queueId:e})}),b6=function(a){return b5.post.call(b4,a)},b7=function(a){var e=arguments.length>1&& void 0!==arguments[1]?arguments[1]:{},b=new ag().setGraph({rankdir:"LR"}).setDefaultEdgeLabel(function(){return{}});a&&a.length||console.warn("[Dagre] empty node");var c=[];q(e||{}).forEach(function(a){var d;b.setEdge.apply(b,y(e[a])),(d=c).push.apply(d,y(e[a]))}),c=C()(c);var d=[];a.forEach(function(e){var f,a=parseInt(f=e.key,10);-1!==c.indexOf(a)?b.setNode(a,x({label:a},e)):d.push(a)}),bG(b);var f={};if(b.nodes().forEach(function(a){return f[a]=b.node(a)}),d.length){var g=1;d.forEach(function(a){f[a]={x:10,y:20* ++g}})}return f}})()})()