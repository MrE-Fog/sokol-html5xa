var f;f||(f=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign({},f),ba=[],ca="./this.program",h=(a,b)=>{throw b;},da="object"==typeof window,k="function"==typeof importScripts,ea="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,p="",fa,q,r;
if(ea){var fs=require("fs"),ha=require("path");p=k?ha.dirname(p)+"/":__dirname+"/";fa=(a,b)=>{a=a.startsWith("file://")?new URL(a):ha.normalize(a);return fs.readFileSync(a,b?void 0:"utf8")};r=a=>{a=fa(a,!0);a.buffer||(a=new Uint8Array(a));return a};q=(a,b,c)=>{a=a.startsWith("file://")?new URL(a):ha.normalize(a);fs.readFile(a,function(d,e){d?c(d):b(e.buffer)})};1<process.argv.length&&(ca=process.argv[1].replace(/\\/g,"/"));ba=process.argv.slice(2);"undefined"!=typeof module&&(module.exports=f);process.on("uncaughtException",
function(a){if(!(a instanceof t))throw a;});if(15>process.version.match(/^v(\d+)\./)[1])process.on("unhandledRejection",function(a){throw a;});h=(a,b)=>{if(noExitRuntime)throw process.exitCode=a,b;b instanceof t||u("exiting due to exception: "+b);process.exit(a)};f.inspect=function(){return"[Emscripten Module object]"}}else if(da||k)k?p=self.location.href:"undefined"!=typeof document&&document.currentScript&&(p=document.currentScript.src),p=0!==p.indexOf("blob:")?p.substr(0,p.replace(/[?#].*/,"").lastIndexOf("/")+
1):"",fa=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},k&&(r=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),q=(a,b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};f.print||console.log.bind(console);var u=f.printErr||console.warn.bind(console);
Object.assign(f,aa);aa=null;f.arguments&&(ba=f.arguments);f.thisProgram&&(ca=f.thisProgram);f.quit&&(h=f.quit);var y;f.wasmBinary&&(y=f.wasmBinary);var noExitRuntime=f.noExitRuntime||!0;"object"!=typeof WebAssembly&&z("no native wasm support detected");var A,ia=!1,ja="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;
function B(a,b){if(a){var c=C,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.buffer&&ja)a=ja.decode(c.subarray(a,b));else{for(d="";a<b;){var e=c[a++];if(e&128){var l=c[a++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|l);else{var g=c[a++]&63;e=224==(e&240)?(e&15)<<12|l<<6|g:(e&7)<<18|l<<12|g<<6|c[a++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}a=d}}else a="";return a}
function D(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var l=0;l<a.length;++l){var g=a.charCodeAt(l);if(55296<=g&&57343>=g){var m=a.charCodeAt(++l);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-e}
function ka(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);127>=d?b++:2047>=d?b+=2:55296<=d&&57343>=d?(b+=4,++c):b+=3}return b}var la,C,ma,E,F,G;function na(){var a=A.buffer;f.HEAP8=la=new Int8Array(a);f.HEAP16=ma=new Int16Array(a);f.HEAP32=E=new Int32Array(a);f.HEAPU8=C=new Uint8Array(a);f.HEAPU16=new Uint16Array(a);f.HEAPU32=new Uint32Array(a);f.HEAPF32=F=new Float32Array(a);f.HEAPF64=G=new Float64Array(a)}var oa,pa=[],qa=[],ra=[],sa=[],ta=[];
function ua(){var a=f.preRun.shift();pa.unshift(a)}var H=0,va=null,I=null;function z(a){if(f.onAbort)f.onAbort(a);a="Aborted("+a+")";u(a);ia=!0;throw new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");}function wa(){return J.startsWith("data:application/octet-stream;base64,")}var J;J="blend-sapp.wasm";if(!wa()){var xa=J;J=f.locateFile?f.locateFile(xa,p):p+xa}
function ya(){var a=J;try{if(a==J&&y)return new Uint8Array(y);if(r)return r(a);throw"both async and sync fetching of the wasm failed";}catch(b){z(b)}}
function za(){if(!y&&(da||k)){if("function"==typeof fetch&&!J.startsWith("file://"))return fetch(J,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+J+"'";return a.arrayBuffer()}).catch(function(){return ya()});if(q)return new Promise(function(a,b){q(J,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return ya()})}function t(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}
function Aa(a){for(;0<a.length;)a.shift()(f)}function Ba(a){var b=Ca();a();Da(b)}var Ea=0;function Fa(){for(var a=K.length-1;0<=a;--a)Ga(a);K=[];Ha=[]}var Ha=[];function Ia(){if(Ea&&Ja.Nb)for(var a=0;a<Ha.length;++a){var b=Ha[a];Ha.splice(a,1);--a;b.Ac.apply(null,b.pc)}}var K=[];function Ga(a){var b=K[a];b.target.removeEventListener(b.Gb,b.lc,b.Hb);K.splice(a,1)}
function L(a){function b(d){++Ea;Ja=a;Ia();a.Jb(d);Ia();--Ea}if(a.Ib)a.lc=b,a.target.addEventListener(a.Gb,b,a.Hb),K.push(a),Ka||(sa.push(Fa),Ka=!0);else for(var c=0;c<K.length;++c)K[c].target==a.target&&K[c].Gb==a.Gb&&Ga(c--)}function La(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}var Ka,Ja,Ma,Na,Oa,Pa,Qa,Ra,Sa,Ta=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0];
function M(a){a=2<a?B(a):a;return Ta[a]||("undefined"!=typeof document?document.querySelector(a):void 0)}function Ua(a){return 0>Ta.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}var Va=[];function N(a){var b=Va[a];b||(a>=Va.length&&(Va.length=a+1),Va[a]=b=oa.get(a));return b}function Wa(a,b,c,d,e,l){Ma||(Ma=O(256));a={target:M(a),Gb:l,Ib:d,Jb:function(g=event){var m=g.target.id?g.target.id:"",n=Ma;D(La(g.target),C,n+0,128);D(m,C,n+128,128);N(d)(e,n,b)&&g.preventDefault()},Hb:c};L(a)}
function Xa(a,b,c,d,e,l){Na||(Na=O(176));a={target:M(a),Nb:!0,Gb:l,Ib:d,Jb:function(g){var m=Na;G[m>>3]=g.timeStamp;var n=m>>2;E[n+2]=g.location;E[n+3]=g.ctrlKey;E[n+4]=g.shiftKey;E[n+5]=g.altKey;E[n+6]=g.metaKey;E[n+7]=g.repeat;E[n+8]=g.charCode;E[n+9]=g.keyCode;E[n+10]=g.which;D(g.key||"",C,m+44,32);D(g.code||"",C,m+76,32);D(g.char||"",C,m+108,32);D(g.locale||"",C,m+140,32);N(d)(e,m,b)&&g.preventDefault()},Hb:c};L(a)}
function Ya(a,b,c){G[a>>3]=b.timeStamp;a>>=2;E[a+2]=b.screenX;E[a+3]=b.screenY;E[a+4]=b.clientX;E[a+5]=b.clientY;E[a+6]=b.ctrlKey;E[a+7]=b.shiftKey;E[a+8]=b.altKey;E[a+9]=b.metaKey;ma[2*a+20]=b.button;ma[2*a+21]=b.buttons;E[a+11]=b.movementX;E[a+12]=b.movementY;c=Ua(c);E[a+13]=b.clientX-c.left;E[a+14]=b.clientY-c.top}
function P(a,b,c,d,e,l){Oa||(Oa=O(72));a=M(a);L({target:a,Nb:"mousemove"!=l&&"mouseenter"!=l&&"mouseleave"!=l,Gb:l,Ib:d,Jb:function(g=event){Ya(Oa,g,a);N(d)(e,Oa,b)&&g.preventDefault()},Hb:c})}function Za(a,b,c,d,e){Pa||(Pa=O(260));L({target:a,Gb:e,Ib:d,Jb:function(l=event){var g=Pa,m=document.pointerLockElement||document.Kb||document.Ub||document.Tb;E[g>>2]=!!m;var n=m&&m.id?m.id:"";D(La(m),C,g+4,128);D(n,C,g+132,128);N(d)(20,g,b)&&l.preventDefault()},Hb:c})}
function $a(a,b,c,d,e){L({target:a,Gb:e,Ib:d,Jb:function(l=event){N(d)(38,0,b)&&l.preventDefault()},Hb:c})}function ab(a,b,c,d){Qa||(Qa=O(36));a=M(a);L({target:a,Gb:"resize",Ib:d,Jb:function(e=event){if(e.target==a){var l=document.body;if(l){var g=Qa;E[g>>2]=e.detail;E[g+4>>2]=l.clientWidth;E[g+8>>2]=l.clientHeight;E[g+12>>2]=innerWidth;E[g+16>>2]=innerHeight;E[g+20>>2]=outerWidth;E[g+24>>2]=outerHeight;E[g+28>>2]=pageXOffset;E[g+32>>2]=pageYOffset;N(d)(10,g,b)&&e.preventDefault()}}},Hb:c})}
function bb(a,b,c,d,e,l){Ra||(Ra=O(1696));a=M(a);L({target:a,Nb:"touchstart"==l||"touchend"==l,Gb:l,Ib:d,Jb:function(g){for(var m,n={},w=g.touches,x=0;x<w.length;++x)m=w[x],m.Zb=m.ac=0,n[m.identifier]=m;for(x=0;x<g.changedTouches.length;++x)m=g.changedTouches[x],m.Zb=1,n[m.identifier]=m;for(x=0;x<g.targetTouches.length;++x)n[g.targetTouches[x].identifier].ac=1;w=Ra;G[w>>3]=g.timeStamp;var v=w>>2;E[v+3]=g.ctrlKey;E[v+4]=g.shiftKey;E[v+5]=g.altKey;E[v+6]=g.metaKey;v+=7;var fb=Ua(a),gb=0;for(x in n)if(m=
n[x],E[v]=m.identifier,E[v+1]=m.screenX,E[v+2]=m.screenY,E[v+3]=m.clientX,E[v+4]=m.clientY,E[v+5]=m.pageX,E[v+6]=m.pageY,E[v+7]=m.Zb,E[v+8]=m.ac,E[v+9]=m.clientX-fb.left,E[v+10]=m.clientY-fb.top,v+=13,31<++gb)break;E[w+8>>2]=gb;N(d)(e,w,b)&&g.preventDefault()},Hb:c})}function cb(a,b,c,d,e,l){a={target:M(a),Gb:l,Ib:d,Jb:function(g=event){N(d)(e,0,b)&&g.preventDefault()},Hb:c};L(a)}
function db(a,b,c,d){Sa||(Sa=O(104));L({target:a,Nb:!0,Gb:"wheel",Ib:d,Jb:function(e=event){var l=Sa;Ya(l,e,a);G[l+72>>3]=e.deltaX;G[l+80>>3]=e.deltaY;G[l+88>>3]=e.deltaZ;E[l+96>>2]=e.deltaMode;N(d)(9,l,b)&&e.preventDefault()},Hb:c})}
function eb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,l){b.drawArraysInstancedANGLE(c,d,e,l)},a.drawElementsInstanced=function(c,d,e,l,g){b.drawElementsInstancedANGLE(c,d,e,l,g)})}
function hb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function ib(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function jb(a){a.rc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function kb(a){a.tc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function lb(a){a.vc=a.getExtension("WEBGL_multi_draw")}var mb=1,nb=[],Q=[],ob=[],pb=[],qb=[],R=[],rb=[],sb=[],tb={},ub={};function S(a){vb||(vb=a)}function wb(a){for(var b=mb++,c=a.length;c<b;c++)a[c]=null;return b}
function xb(a,b){a.Kb||(a.Kb=a.getContext,a.getContext=function(d,e){e=a.Kb(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.$b?a.getContext("webgl2",b):a.getContext("webgl",b);return c?yb(c,b):0}function yb(a,b){var c=wb(sb),d={sc:c,attributes:b,version:b.$b,Rb:a};a.canvas&&(a.canvas.oc=d);sb[c]=d;("undefined"==typeof b.Yb||b.Yb)&&zb(d);return c}
function zb(a){a||(a=T);if(!a.nc){a.nc=!0;var b=a.Rb;eb(b);hb(b);ib(b);jb(b);kb(b);2<=a.version&&(b.Xb=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.Xb)b.Xb=b.getExtension("EXT_disjoint_timer_query");lb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var vb,T,Ab=["default","low-power","high-performance"];
function Bb(a,b,c,d){for(var e=0;e<a;e++){var l=U[c](),g=l&&wb(d);l?(l.name=g,d[g]=l):S(1282);E[b+4*e>>2]=g}}
function Cb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=U.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>T.version){S(1282);return}c=2*(U.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>T.version){S(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=U.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":S(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:S(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)E[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){S(1280);u("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:S(1280);u("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}E[b>>2]=c}else S(1281)}
function V(a){var b=ka(a)+1,c=O(b);D(a,C,c,b);return c}function Db(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function W(a){var b=U.kc;if(b){var c=b.Mb[a];"number"==typeof c&&(b.Mb[a]=c=U.getUniformLocation(b,b.ic[a]+(0<c?"["+c+"]":"")));return c}S(1282)}var X=[],Y=[];function Eb(a){if(!noExitRuntime){if(f.onExit)f.onExit(a);ia=!0}h(a,new t(a))}function Fb(a){var b=ka(a)+1,c=Gb(b);D(a,la,c,b);return c}for(var U,Hb=new Float32Array(288),Z=0;288>Z;++Z)X[Z]=Hb.subarray(0,Z+1);var Ib=new Int32Array(288);
for(Z=0;288>Z;++Z)Y[Z]=Ib.subarray(0,Z+1);
var Pb={h:function(){z("")},P:function(){return"number"==typeof devicePixelRatio&&devicePixelRatio||1},T:function(a,b,c){a=M(a);if(!a)return-4;a=Ua(a);G[b>>3]=a.width;G[c>>3]=a.height;return 0},Va:function(a,b,c){C.copyWithin(a,b,b+c)},Aa:function(a,b){function c(d){N(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},Ua:function(a){var b=C.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);var e=Math,l=e.min;d=Math.max(a,d);d+=
(65536-d%65536)%65536;a:{var g=A.buffer;try{A.grow(l.call(e,2147483648,d)-g.byteLength+65535>>>16);na();var m=1;break a}catch(n){}m=void 0}if(m)return!0}return!1},U:function(a,b,c,d){Wa(a,b,c,d,12,"blur");return 0},L:function(a,b,c){a=M(a);if(!a)return-4;a.width=b;a.height=c;return 0},V:function(a,b,c,d){Wa(a,b,c,d,13,"focus");return 0},ca:function(a,b,c,d){Xa(a,b,c,d,2,"keydown");return 0},aa:function(a,b,c,d){Xa(a,b,c,d,1,"keypress");return 0},ba:function(a,b,c,d){Xa(a,b,c,d,3,"keyup");return 0},
ia:function(a,b,c,d){P(a,b,c,d,5,"mousedown");return 0},fa:function(a,b,c,d){P(a,b,c,d,33,"mouseenter");return 0},ea:function(a,b,c,d){P(a,b,c,d,34,"mouseleave");return 0},ga:function(a,b,c,d){P(a,b,c,d,8,"mousemove");return 0},ha:function(a,b,c,d){P(a,b,c,d,6,"mouseup");return 0},X:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.Kb||document.body.Ub||document.body.Tb))return-1;a=M(a);if(!a)return-4;Za(a,b,c,d,"pointerlockchange");Za(a,b,c,d,"mozpointerlockchange");
Za(a,b,c,d,"webkitpointerlockchange");Za(a,b,c,d,"mspointerlockchange");return 0},W:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.Kb||document.body.Ub||document.body.Tb))return-1;a=M(a);if(!a)return-4;$a(a,b,c,d,"pointerlockerror");$a(a,b,c,d,"mozpointerlockerror");$a(a,b,c,d,"webkitpointerlockerror");$a(a,b,c,d,"mspointerlockerror");return 0},Na:function(a,b,c,d){ab(a,b,c,d);return 0},Y:function(a,b,c,d){bb(a,b,c,d,25,"touchcancel");return 0},Z:function(a,b,c,
d){bb(a,b,c,d,23,"touchend");return 0},_:function(a,b,c,d){bb(a,b,c,d,24,"touchmove");return 0},$:function(a,b,c,d){bb(a,b,c,d,22,"touchstart");return 0},S:function(a,b,c,d){cb(a,b,c,d,31,"webglcontextlost");return 0},R:function(a,b,c,d){cb(a,b,c,d,32,"webglcontextrestored");return 0},da:function(a,b,c,d){a=M(a);return"undefined"!=typeof a.onwheel?(db(a,b,c,d),0):-1},A:function(a,b){b>>=2;b={alpha:!!E[b],depth:!!E[b+1],stencil:!!E[b+2],antialias:!!E[b+3],premultipliedAlpha:!!E[b+4],preserveDrawingBuffer:!!E[b+
5],powerPreference:Ab[E[b+6]],failIfMajorPerformanceCaveat:!!E[b+7],$b:E[b+8],uc:E[b+9],Yb:E[b+10],mc:E[b+11],wc:E[b+12],xc:E[b+13]};a=M(a);return!a||b.mc?0:xb(a,b)},ab:function(a,b){a=sb[a];b=B(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&eb(U);"OES_vertex_array_object"==b&&hb(U);"WEBGL_draw_buffers"==b&&ib(U);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&jb(U);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&kb(U);"WEBGL_multi_draw"==b&&lb(U);return!!a.Rb.getExtension(b)},
ua:function(a){a>>=2;for(var b=0;14>b;++b)E[a+b]=0;E[a]=E[a+1]=E[a+3]=E[a+4]=E[a+8]=E[a+10]=1},lb:function(a){T=sb[a];f.qc=U=T&&T.Rb;return!a||U?0:-5},j:function(a){U.activeTexture(a)},E:function(a,b){U.attachShader(Q[a],R[b])},d:function(a,b){35051==a?U.Vb=b:35052==a&&(U.Wb=b);U.bindBuffer(a,nb[b])},f:function(a,b){U.bindFramebuffer(a,ob[b])},a:function(a,b){U.bindTexture(a,qb[b])},N:function(a){U.bindVertexArray(rb[a])},I:function(a,b,c,d){U.blendColor(a,b,c,d)},J:function(a,b){U.blendEquationSeparate(a,
b)},K:function(a,b,c,d){U.blendFuncSeparate(a,b,c,d)},p:function(a,b,c,d,e,l,g,m,n,w){U.blitFramebuffer(a,b,c,d,e,l,g,m,n,w)},ya:function(a,b,c,d){2<=T.version?c&&b?U.bufferData(a,C,d,c,b):U.bufferData(a,b,d):U.bufferData(a,c?C.subarray(c,c+b):b,d)},xa:function(a,b,c,d){2<=T.version?c&&U.bufferSubData(a,b,C,d,c):U.bufferSubData(a,b,C.subarray(d,d+c))},ka:function(a){U.clear(a)},z:function(a,b,c,d){U.clearColor(a,b,c,d)},r:function(a){U.clearDepth(a)},la:function(a){U.clearStencil(a)},i:function(a,
b,c,d){U.colorMask(!!a,!!b,!!c,!!d)},qa:function(a){U.compileShader(R[a])},wa:function(){var a=wb(Q),b=U.createProgram();b.name=a;b.Qb=b.Ob=b.Pb=0;b.Sb=1;Q[a]=b;return a},sa:function(a){var b=wb(R);R[b]=U.createShader(a);return b},F:function(a){U.cullFace(a)},Ha:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2],e=nb[d];e&&(U.deleteBuffer(e),e.name=0,nb[d]=null,d==U.Vb&&(U.Vb=0),d==U.Wb&&(U.Wb=0))}},g:function(a,b){for(var c=0;c<a;++c){var d=E[b+4*c>>2],e=ob[d];e&&(U.deleteFramebuffer(e),e.name=
0,ob[d]=null)}},O:function(a){if(a){var b=Q[a];b?(U.deleteProgram(b),b.name=0,Q[a]=null):S(1281)}},Q:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2],e=pb[d];e&&(U.deleteRenderbuffer(e),e.name=0,pb[d]=null)}},s:function(a){if(a){var b=R[a];b?(U.deleteShader(b),R[a]=null):S(1281)}},Ga:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2],e=qb[d];e&&(U.deleteTexture(e),e.name=0,qb[d]=null)}},Fa:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2];U.deleteVertexArray(rb[d]);rb[d]=null}},v:function(a){U.depthFunc(a)},
u:function(a){U.depthMask(!!a)},c:function(a){U.disable(a)},M:function(a){U.disableVertexAttribArray(a)},Wa:function(a,b,c){U.drawArrays(a,b,c)},Xa:function(a,b,c,d){U.drawArraysInstanced(a,b,c,d)},Ya:function(a,b,c,d){U.drawElements(a,b,c,d)},Za:function(a,b,c,d,e){U.drawElementsInstanced(a,b,c,d,e)},e:function(a){U.enable(a)},ib:function(a){U.enableVertexAttribArray(a)},G:function(a){U.frontFace(a)},za:function(a,b){Bb(a,b,"createBuffer",nb)},Ea:function(a,b){Bb(a,b,"createVertexArray",rb)},oa:function(a,
b){return U.getAttribLocation(Q[a],B(b))},b:function(a,b){Cb(a,b)},ta:function(a,b,c,d){a=U.getProgramInfoLog(Q[a]);null===a&&(a="(unknown error)");b=0<b&&d?D(a,C,d,b):0;c&&(E[c>>2]=b)},D:function(a,b,c){if(c)if(a>=mb)S(1281);else if(a=Q[a],35716==b)a=U.getProgramInfoLog(a),null===a&&(a="(unknown error)"),E[c>>2]=a.length+1;else if(35719==b){if(!a.Qb)for(b=0;b<U.getProgramParameter(a,35718);++b)a.Qb=Math.max(a.Qb,U.getActiveUniform(a,b).name.length+1);E[c>>2]=a.Qb}else if(35722==b){if(!a.Ob)for(b=
0;b<U.getProgramParameter(a,35721);++b)a.Ob=Math.max(a.Ob,U.getActiveAttrib(a,b).name.length+1);E[c>>2]=a.Ob}else if(35381==b){if(!a.Pb)for(b=0;b<U.getProgramParameter(a,35382);++b)a.Pb=Math.max(a.Pb,U.getActiveUniformBlockName(a,b).length+1);E[c>>2]=a.Pb}else E[c>>2]=U.getProgramParameter(a,b);else S(1281)},pa:function(a,b,c,d){a=U.getShaderInfoLog(R[a]);null===a&&(a="(unknown error)");b=0<b&&d?D(a,C,d,b):0;c&&(E[c>>2]=b)},B:function(a,b,c){c?35716==b?(a=U.getShaderInfoLog(R[a]),null===a&&(a="(unknown error)"),
E[c>>2]=a?a.length+1:0):35720==b?(a=U.getShaderSource(R[a]),E[c>>2]=a?a.length+1:0):E[c>>2]=U.getShaderParameter(R[a],b):S(1281)},Ja:function(a){var b=tb[a];if(!b){switch(a){case 7939:b=U.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=V(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=U.getParameter(a))||S(1280);b=b&&V(b);break;case 7938:b=U.getParameter(7938);b=2<=T.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=V(b);break;case 35724:b=U.getParameter(35724);
var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=V(b);break;default:S(1280)}tb[a]=b}return b},Ia:function(a,b){if(2>T.version)return S(1282),0;var c=ub[a];if(c)return 0>b||b>=c.length?(S(1281),0):c[b];switch(a){case 7939:return c=U.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return V(d)}),c=ub[a]=c,0>b||b>=c.length?(S(1281),0):c[b];default:return S(1280),
0}},k:function(a,b){b=B(b);if(a=Q[a]){var c=a,d=c.Mb,e=c.jc,l;if(!d)for(c.Mb=d={},c.ic={},l=0;l<U.getProgramParameter(c,35718);++l){var g=U.getActiveUniform(c,l);var m=g.name;g=g.size;var n=Db(m);n=0<n?m.slice(0,n):m;var w=c.Sb;c.Sb+=g;e[n]=[g,w];for(m=0;m<g;++m)d[w]=m,c.ic[w++]=n}c=a.Mb;d=0;e=b;l=Db(b);0<l&&(d=parseInt(b.slice(l+1))>>>0,e=b.slice(0,l));if((e=a.jc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||U.getUniformLocation(a,b)))return d}else S(1281);return-1},va:function(a){a=Q[a];U.linkProgram(a);a.Mb=
0;a.jc={}},Da:function(a,b){U.pixelStorei(a,b)},H:function(a,b){U.polygonOffset(a,b)},q:function(a){U.readBuffer(a)},ma:function(a,b,c,d){U.scissor(a,b,c,d)},ra:function(a,b,c,d){for(var e="",l=0;l<b;++l){var g=d?E[d+4*l>>2]:-1;e+=B(E[c+4*l>>2],0>g?void 0:g)}U.shaderSource(R[a],e)},Ca:function(a,b,c){U.stencilFunc(a,b,c)},y:function(a,b,c,d){U.stencilFuncSeparate(a,b,c,d)},t:function(a){U.stencilMask(a)},Ba:function(a,b,c){U.stencilOp(a,b,c)},x:function(a,b,c,d){U.stencilOpSeparate(a,b,c,d)},hb:function(a,
b,c){if(2<=T.version)b&&U.uniform1fv(W(a),F,c>>2,b);else{if(288>=b)for(var d=X[b-1],e=0;e<b;++e)d[e]=F[c+4*e>>2];else d=F.subarray(c>>2,c+4*b>>2);U.uniform1fv(W(a),d)}},C:function(a,b){U.uniform1i(W(a),b)},db:function(a,b,c){if(2<=T.version)b&&U.uniform1iv(W(a),E,c>>2,b);else{if(288>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=E[c+4*e>>2];else d=E.subarray(c>>2,c+4*b>>2);U.uniform1iv(W(a),d)}},gb:function(a,b,c){if(2<=T.version)b&&U.uniform2fv(W(a),F,c>>2,2*b);else{if(144>=b)for(var d=X[2*b-1],e=0;e<2*b;e+=
2)d[e]=F[c+4*e>>2],d[e+1]=F[c+(4*e+4)>>2];else d=F.subarray(c>>2,c+8*b>>2);U.uniform2fv(W(a),d)}},cb:function(a,b,c){if(2<=T.version)b&&U.uniform2iv(W(a),E,c>>2,2*b);else{if(144>=b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=E[c+4*e>>2],d[e+1]=E[c+(4*e+4)>>2];else d=E.subarray(c>>2,c+8*b>>2);U.uniform2iv(W(a),d)}},fb:function(a,b,c){if(2<=T.version)b&&U.uniform3fv(W(a),F,c>>2,3*b);else{if(96>=b)for(var d=X[3*b-1],e=0;e<3*b;e+=3)d[e]=F[c+4*e>>2],d[e+1]=F[c+(4*e+4)>>2],d[e+2]=F[c+(4*e+8)>>2];else d=F.subarray(c>>
2,c+12*b>>2);U.uniform3fv(W(a),d)}},bb:function(a,b,c){if(2<=T.version)b&&U.uniform3iv(W(a),E,c>>2,3*b);else{if(96>=b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=E[c+4*e>>2],d[e+1]=E[c+(4*e+4)>>2],d[e+2]=E[c+(4*e+8)>>2];else d=E.subarray(c>>2,c+12*b>>2);U.uniform3iv(W(a),d)}},eb:function(a,b,c){if(2<=T.version)b&&U.uniform4fv(W(a),F,c>>2,4*b);else{if(72>=b){var d=X[4*b-1],e=F;c>>=2;for(var l=0;l<4*b;l+=4){var g=c+l;d[l]=e[g];d[l+1]=e[g+1];d[l+2]=e[g+2];d[l+3]=e[g+3]}}else d=F.subarray(c>>2,c+16*b>>2);
U.uniform4fv(W(a),d)}},$a:function(a,b,c){if(2<=T.version)b&&U.uniform4iv(W(a),E,c>>2,4*b);else{if(72>=b)for(var d=Y[4*b-1],e=0;e<4*b;e+=4)d[e]=E[c+4*e>>2],d[e+1]=E[c+(4*e+4)>>2],d[e+2]=E[c+(4*e+8)>>2],d[e+3]=E[c+(4*e+12)>>2];else d=E.subarray(c>>2,c+16*b>>2);U.uniform4iv(W(a),d)}},_a:function(a,b,c,d){if(2<=T.version)b&&U.uniformMatrix4fv(W(a),!!c,F,d>>2,16*b);else{if(18>=b){var e=X[16*b-1],l=F;d>>=2;for(var g=0;g<16*b;g+=16){var m=d+g;e[g]=l[m];e[g+1]=l[m+1];e[g+2]=l[m+2];e[g+3]=l[m+3];e[g+4]=l[m+
4];e[g+5]=l[m+5];e[g+6]=l[m+6];e[g+7]=l[m+7];e[g+8]=l[m+8];e[g+9]=l[m+9];e[g+10]=l[m+10];e[g+11]=l[m+11];e[g+12]=l[m+12];e[g+13]=l[m+13];e[g+14]=l[m+14];e[g+15]=l[m+15]}}else e=F.subarray(d>>2,d+64*b>>2);U.uniformMatrix4fv(W(a),!!c,e)}},l:function(a){a=Q[a];U.useProgram(a);U.kc=a},jb:function(a,b){U.vertexAttribDivisor(a,b)},kb:function(a,b,c,d,e,l){U.vertexAttribPointer(a,b,c,!!d,e,l)},na:function(a,b,c,d){U.viewport(a,b,c,d)},Sa:function(){f.bc=a=>{0!=Jb()&&(a.preventDefault(),a.returnValue=" ")};
window.addEventListener("beforeunload",f.bc)},Ra:function(){f.hc=a=>{const b=a.clipboardData.getData("text");Ba(()=>{const c=Fb(b);Kb(c)})};window.addEventListener("paste",f.hc)},Qa:function(a){f.yc=[];a=B(a);a=document.getElementById(a);f.cc=b=>{b.stopPropagation();b.preventDefault()};f.dc=b=>{b.stopPropagation();b.preventDefault()};f.ec=b=>{b.stopPropagation();b.preventDefault()};f.fc=b=>{b.stopPropagation();b.preventDefault();const c=b.dataTransfer.files;f.zc=c;Lb(c.length);for(let d=0;d<c.length;d++)Ba(()=>
{const e=Fb(c[d].name);Mb(d,e)});Nb(b.clientX,b.clientY)};a.addEventListener("dragenter",f.cc,!1);a.addEventListener("dragleave",f.dc,!1);a.addEventListener("dragover",f.ec,!1);a.addEventListener("drop",f.fc,!1)},La:function(){const a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},o:function(){const a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Ob()});document.body.append(a)},
n:function(){document.getElementById("_sokol_app_input_element").focus()},Ta:function(a){a=B(a);f.Lb=document.getElementById(a);f.Lb||console.log("sokol_app.h: invalid target:"+a);f.Lb.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Pa:function(){window.removeEventListener("beforeunload",f.bc)},Oa:function(){window.removeEventListener("paste",f.hc)},Ma:function(a){a=B(a);a=document.getElementById(a);a.removeEventListener("dragenter",f.cc);a.removeEventListener("dragleave",
f.dc);a.removeEventListener("dragover",f.ec);a.removeEventListener("drop",f.fc)},w:function(){f.Lb&&f.Lb.requestPointerLock&&f.Lb.requestPointerLock()},Ka:function(a,b,c){const d=document.createElement("canvas");d.width=a;d.height=b;const e=d.getContext("2d"),l=e.createImageData(a,b);l.data.set(C.subarray(c,c+a*b*4));e.putImageData(l,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},m:function(){document.getElementById("_sokol_app_input_element").blur()},
ja:function(a,b){b=B(b);switch(a){case 0:console.error(b);break;case 1:console.error(b);break;case 2:console.warn(b);break;default:console.info(b)}}};
(function(){function a(e){f.asm=e.exports;A=f.asm.mb;na();oa=f.asm.Cb;qa.unshift(f.asm.nb);H--;f.monitorRunDependencies&&f.monitorRunDependencies(H);0==H&&(null!==va&&(clearInterval(va),va=null),I&&(e=I,I=null,e()))}function b(e){a(e.instance)}function c(e){return za().then(function(l){return WebAssembly.instantiate(l,d)}).then(function(l){return l}).then(e,function(l){u("failed to asynchronously prepare wasm: "+l);z(l)})}var d={a:Pb};H++;f.monitorRunDependencies&&f.monitorRunDependencies(H);if(f.instantiateWasm)try{return f.instantiateWasm(d,
a)}catch(e){return u("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return y||"function"!=typeof WebAssembly.instantiateStreaming||wa()||J.startsWith("file://")||ea||"function"!=typeof fetch?c(b):fetch(J,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(l){u("wasm streaming compile failed: "+l);u("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
var Ob=f.__sapp_emsc_notify_keyboard_hidden=function(){return(Ob=f.__sapp_emsc_notify_keyboard_hidden=f.asm.ob).apply(null,arguments)},Kb=f.__sapp_emsc_onpaste=function(){return(Kb=f.__sapp_emsc_onpaste=f.asm.pb).apply(null,arguments)},Jb=f.__sapp_html5_get_ask_leave_site=function(){return(Jb=f.__sapp_html5_get_ask_leave_site=f.asm.qb).apply(null,arguments)},Lb=f.__sapp_emsc_begin_drop=function(){return(Lb=f.__sapp_emsc_begin_drop=f.asm.rb).apply(null,arguments)},Mb=f.__sapp_emsc_drop=function(){return(Mb=
f.__sapp_emsc_drop=f.asm.sb).apply(null,arguments)},Nb=f.__sapp_emsc_end_drop=function(){return(Nb=f.__sapp_emsc_end_drop=f.asm.tb).apply(null,arguments)};f.__sapp_emsc_invoke_fetch_cb=function(){return(f.__sapp_emsc_invoke_fetch_cb=f.asm.ub).apply(null,arguments)};var Qb=f._main=function(){return(Qb=f._main=f.asm.vb).apply(null,arguments)};f.__saudio_emsc_pull=function(){return(f.__saudio_emsc_pull=f.asm.wb).apply(null,arguments)};
f.__sfetch_emsc_head_response=function(){return(f.__sfetch_emsc_head_response=f.asm.xb).apply(null,arguments)};f.__sfetch_emsc_get_response=function(){return(f.__sfetch_emsc_get_response=f.asm.yb).apply(null,arguments)};f.__sfetch_emsc_failed_http_status=function(){return(f.__sfetch_emsc_failed_http_status=f.asm.zb).apply(null,arguments)};f.__sfetch_emsc_failed_buffer_too_small=function(){return(f.__sfetch_emsc_failed_buffer_too_small=f.asm.Ab).apply(null,arguments)};
function O(){return(O=f.asm.Bb).apply(null,arguments)}function Ca(){return(Ca=f.asm.Db).apply(null,arguments)}function Da(){return(Da=f.asm.Eb).apply(null,arguments)}function Gb(){return(Gb=f.asm.Fb).apply(null,arguments)}f.___start_em_js=8504;f.___stop_em_js=18023;var Rb;I=function Sb(){Rb||Tb();Rb||(I=Sb)};function Ub(a=[]){var b=Qb;a.unshift(ca);var c=a.length,d=Gb(4*(c+1)),e=d>>2;a.forEach(g=>{E[e++]=Fb(g)});E[e]=0;try{var l=b(c,d);Eb(l)}catch(g){g instanceof t||"unwind"==g||h(1,g)}}
function Tb(){var a=ba;function b(){if(!Rb&&(Rb=!0,f.calledRun=!0,!ia)){Aa(qa);Aa(ra);if(f.onRuntimeInitialized)f.onRuntimeInitialized();Vb&&Ub(a);if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;){var c=f.postRun.shift();ta.unshift(c)}Aa(ta)}}if(!(0<H)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)ua();Aa(pa);0<H||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},
1)):b())}}if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var Vb=!0;f.noInitialRun&&(Vb=!1);Tb();
