
var f;f||(f=typeof Module !== 'undefined' ? Module : {});var k={},l;for(l in f)f.hasOwnProperty(l)&&(k[l]=f[l]);var r=[],aa="./this.program";function t(a,b){throw b;}var ba=!1,u=!1,ca=!1,da=!1;ba="object"===typeof window;u="function"===typeof importScripts;ca="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;da=!ba&&!ca&&!u;var v="",ea,fa,x,ha,ia;
if(ca)v=u?require("path").dirname(v)+"/":__dirname+"/",ea=function(a,b){ha||(ha=require("fs"));ia||(ia=require("path"));a=ia.normalize(a);return ha.readFileSync(a,b?null:"utf8")},x=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/")),r=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=f),process.on("uncaughtException",function(a){if(!(a instanceof ja))throw a;}),process.on("unhandledRejection",
y),t=function(a){process.exit(a)},f.inspect=function(){return"[Emscripten Module object]"};else if(da)"undefined"!=typeof read&&(ea=function(a){return read(a)}),x=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?r=scriptArgs:"undefined"!=typeof arguments&&(r=arguments),"function"===typeof quit&&(t=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===typeof console&&
(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(ba||u)u?v=self.location.href:"undefined"!==typeof document&&document.currentScript&&(v=document.currentScript.src),v=0!==v.indexOf("blob:")?v.substr(0,v.lastIndexOf("/")+1):"",ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},u&&(x=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),
fa=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};f.print||console.log.bind(console);var z=f.printErr||console.warn.bind(console);for(l in k)k.hasOwnProperty(l)&&(f[l]=k[l]);k=null;f.arguments&&(r=f.arguments);f.thisProgram&&(aa=f.thisProgram);f.quit&&(t=f.quit);var B;f.wasmBinary&&(B=f.wasmBinary);var noExitRuntime=f.noExitRuntime||!0;
"object"!==typeof WebAssembly&&y("no native wasm support detected");var ka,la=!1;function assert(a,b){a||y("Assertion failed: "+b)}function ma(a){var b=f["_"+a];assert(b,"Cannot call unknown function "+a+", make sure it is exported");return b}
function na(a,b,c){var d={string:function(n){var p=0;if(null!==n&&void 0!==n&&0!==n){var q=(n.length<<2)+1;p=C(q);D(n,E,p,q)}return p},array:function(n){var p=C(n.length);oa.set(n,p);return p}};a=ma(a);var e=[],h=0;if(c)for(var g=0;g<c.length;g++){var m=d[b[g]];m?(0===h&&(h=pa()),e[g]=m(c[g])):e[g]=c[g]}a.apply(null,e);0!==h&&qa(h)}var ra="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function F(a,b){if(a){var c=E,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&ra)a=ra.decode(c.subarray(a,b));else{for(d="";a<b;){var e=c[a++];if(e&128){var h=c[a++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|h);else{var g=c[a++]&63;e=224==(e&240)?(e&15)<<12|h<<6|g:(e&7)<<18|h<<12|g<<6|c[a++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}a=d}}else a="";return a}
function D(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var h=0;h<a.length;++h){var g=a.charCodeAt(h);if(55296<=g&&57343>=g){var m=a.charCodeAt(++h);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-e}
function sa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function ta(a){var b=sa(a)+1,c=C(b);D(a,oa,c,b);return c}var ua,oa,E,va,wa,G,xa,H,I;
function ya(){var a=ka.buffer;ua=a;f.HEAP8=oa=new Int8Array(a);f.HEAP16=va=new Int16Array(a);f.HEAP32=G=new Int32Array(a);f.HEAPU8=E=new Uint8Array(a);f.HEAPU16=wa=new Uint16Array(a);f.HEAPU32=xa=new Uint32Array(a);f.HEAPF32=H=new Float32Array(a);f.HEAPF64=I=new Float64Array(a)}var J,za=[],Aa=[],Ba=[],Ca=[],Da=[];function Ea(){var a=f.preRun.shift();za.unshift(a)}var K=0,Fa=null,L=null;f.preloadedImages={};f.preloadedAudios={};
function y(a){if(f.onAbort)f.onAbort(a);z(a);la=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}function Ga(a){var b=M;return String.prototype.startsWith?b.startsWith(a):0===b.indexOf(a)}function Ha(){return Ga("data:application/octet-stream;base64,")}var M="dyntex-sapp.wasm";if(!Ha()){var Ia=M;M=f.locateFile?f.locateFile(Ia,v):v+Ia}
function Ja(){var a=M;try{if(a==M&&B)return new Uint8Array(B);if(x)return x(a);throw"both async and sync fetching of the wasm failed";}catch(b){y(b)}}
function Ka(){if(!B&&(ba||u)){if("function"===typeof fetch&&!Ga("file://"))return fetch(M,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+M+"'";return a.arrayBuffer()}).catch(function(){return Ja()});if(fa)return new Promise(function(a,b){fa(M,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ja()})}
function La(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(f);else{var c=b.wc;"number"===typeof c?void 0===b.Ub?J.get(c)():J.get(c)(b.Ub):c(void 0===b.Ub?null:b.Ub)}}}var Ma=0;function Na(){for(var a=N.length-1;0<=a;--a)Oa(a);N=[];Pa=[]}var Pa=[];function Qa(){if(Ma&&Ra.Ob)for(var a=0;a<Pa.length;++a){var b=Pa[a];Pa.splice(a,1);--a;b.Fc.apply(null,b.tc)}}var N=[];function Oa(a){var b=N[a];b.target.removeEventListener(b.Ib,b.mc,b.Jb);N.splice(a,1)}
function O(a){function b(d){++Ma;Ra=a;Qa();a.Mb(d);Qa();--Ma}if(a.Kb)a.mc=b,a.target.addEventListener(a.Ib,b,a.Jb),N.push(a),Sa||(Ca.push(Na),Sa=!0);else for(var c=0;c<N.length;++c)N[c].target==a.target&&N[c].Ib==a.Ib&&Oa(c--)}var Sa,Ra,Ta,Ua,Va,Wa,Xa,Ya,Za=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function Q(a){a=2<a?F(a):a;return Za[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}
function $a(a){return 0>Za.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}function ab(a,b,c,d,e,h){Ta||(Ta=R(164));a={target:Q(a),Ob:!0,Ib:h,Kb:d,Mb:function(g){var m=Ta,n=m>>2;G[n]=g.location;G[n+1]=g.ctrlKey;G[n+2]=g.shiftKey;G[n+3]=g.altKey;G[n+4]=g.metaKey;G[n+5]=g.repeat;G[n+6]=g.charCode;G[n+7]=g.keyCode;G[n+8]=g.which;D(g.key||"",E,m+36,32);D(g.code||"",E,m+68,32);D(g.char||"",E,m+100,32);D(g.locale||"",E,m+132,32);J.get(d)(e,m,b)&&g.preventDefault()},Jb:c};O(a)}
function bb(a,b,c){a>>=2;G[a]=b.screenX;G[a+1]=b.screenY;G[a+2]=b.clientX;G[a+3]=b.clientY;G[a+4]=b.ctrlKey;G[a+5]=b.shiftKey;G[a+6]=b.altKey;G[a+7]=b.metaKey;va[2*a+16]=b.button;va[2*a+17]=b.buttons;G[a+9]=b.movementX;G[a+10]=b.movementY;c=$a(c);G[a+11]=b.clientX-c.left;G[a+12]=b.clientY-c.top}function S(a,b,c,d,e,h){Ua||(Ua=R(64));a=Q(a);O({target:a,Ob:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,Ib:h,Kb:d,Mb:function(g){g=g||event;bb(Ua,g,a);J.get(d)(e,Ua,b)&&g.preventDefault()},Jb:c})}
function cb(a,b,c,d,e){Va||(Va=R(260));O({target:a,Ib:e,Kb:d,Mb:function(h){h=h||event;var g=Va,m=document.pointerLockElement||document.Wb||document.Yb||document.Xb;G[g>>2]=!!m;var n=m&&m.id?m.id:"";D(m?m==window?"#window":m==screen?"#screen":m&&m.nodeName?m.nodeName:"":"",E,g+4,128);D(n,E,g+132,128);J.get(d)(20,g,b)&&h.preventDefault()},Jb:c})}function db(a,b,c,d,e){O({target:a,Ib:e,Kb:d,Mb:function(h){h=h||event;J.get(d)(38,0,b)&&h.preventDefault()},Jb:c})}
function eb(a,b,c,d){Wa||(Wa=R(36));a=Q(a);O({target:a,Ib:"resize",Kb:d,Mb:function(e){e=e||event;if(e.target==a){var h=document.body;if(h){var g=Wa;G[g>>2]=e.detail;G[g+4>>2]=h.clientWidth;G[g+8>>2]=h.clientHeight;G[g+12>>2]=innerWidth;G[g+16>>2]=innerHeight;G[g+20>>2]=outerWidth;G[g+24>>2]=outerHeight;G[g+28>>2]=pageXOffset;G[g+32>>2]=pageYOffset;J.get(d)(10,g,b)&&e.preventDefault()}}},Jb:c})}
function fb(a,b,c,d,e,h){Xa||(Xa=R(1684));a=Q(a);O({target:a,Ob:"touchstart"==h||"touchend"==h,Ib:h,Kb:d,Mb:function(g){for(var m={},n=g.touches,p=0;p<n.length;++p){var q=n[p];m[q.identifier]=q}n=g.changedTouches;for(p=0;p<n.length;++p)q=n[p],q.pc=1,m[q.identifier]=q;n=g.targetTouches;for(p=0;p<n.length;++p)m[n[p].identifier].qc=1;n=Xa;q=n>>2;G[q+1]=g.ctrlKey;G[q+2]=g.shiftKey;G[q+3]=g.altKey;G[q+4]=g.metaKey;q+=5;var A=$a(a),P=0;for(p in m){var w=m[p];G[q]=w.identifier;G[q+1]=w.screenX;G[q+2]=w.screenY;
G[q+3]=w.clientX;G[q+4]=w.clientY;G[q+5]=w.pageX;G[q+6]=w.pageY;G[q+7]=w.pc;G[q+8]=w.qc;G[q+9]=w.clientX-A.left;G[q+10]=w.clientY-A.top;q+=13;if(31<++P)break}G[n>>2]=P;J.get(d)(e,n,b)&&g.preventDefault()},Jb:c})}function gb(a,b,c,d,e,h){a={target:Q(a),Ib:h,Kb:d,Mb:function(g){g=g||event;J.get(d)(e,0,b)&&g.preventDefault()},Jb:c};O(a)}
function hb(a,b,c,d){Ya||(Ya=R(96));O({target:a,Ob:!0,Ib:"wheel",Kb:d,Mb:function(e){e=e||event;var h=Ya;bb(h,e,a);I[h+64>>3]=e.deltaX;I[h+72>>3]=e.deltaY;I[h+80>>3]=e.deltaZ;G[h+88>>2]=e.deltaMode;J.get(d)(9,h,b)&&e.preventDefault()},Jb:c})}
function ib(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,h){b.drawArraysInstancedANGLE(c,d,e,h)},a.drawElementsInstanced=function(c,d,e,h,g){b.drawElementsInstancedANGLE(c,d,e,h,g)})}
function jb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function kb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function lb(a){a.vc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function mb(a){a.yc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function nb(a){a.Ac=a.getExtension("WEBGL_multi_draw")}var ob=1,pb=[],T=[],qb=[],rb=[],sb=[],U=[],tb=[],ub=[],vb={},wb={};function V(a){xb||(xb=a)}function yb(a){for(var b=ob++,c=a.length;c<b;c++)a[c]=null;return b}
function zb(a,b){a.bc||(a.bc=a.getContext,a.getContext=function(d,e){e=a.bc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.cc?a.getContext("webgl2",b):a.getContext("webgl",b);return c?Ab(c,b):0}function Ab(a,b){var c=yb(ub),d={xc:c,attributes:b,version:b.cc,Tb:a};a.canvas&&(a.canvas.sc=d);ub[c]=d;("undefined"===typeof b.ac||b.ac)&&Bb(d);return c}
function Bb(a){a||(a=W);if(!a.oc){a.oc=!0;var b=a.Tb;ib(b);jb(b);kb(b);lb(b);mb(b);2<=a.version&&(b.$b=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.$b)b.$b=b.getExtension("EXT_disjoint_timer_query");nb(b);(b.getSupportedExtensions()||[]).forEach(function(c){0>c.indexOf("lose_context")&&0>c.indexOf("debug")&&b.getExtension(c)})}}var xb,W,Cb=["default","low-power","high-performance"];
function Db(a,b,c,d){for(var e=0;e<a;e++){var h=X[c](),g=h&&yb(d);h?(h.name=g,d[g]=h):V(1282);G[b+4*e>>2]=g}}
function Eb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=X.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>W.version){V(1282);return}c=2*(X.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>W.version){V(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=X.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":V(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:V(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)G[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){V(1280);z("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:V(1280);z("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}G[b>>2]=c}else V(1281)}
function Fb(a){var b=sa(a)+1,c=R(b);D(a,E,c,b);return c}function Gb(a){a-=5120;return 0==a?oa:1==a?E:2==a?va:4==a?G:6==a?H:5==a||28922==a||28520==a||30779==a||30782==a?xa:wa}function Hb(a){return 31-Math.clz32(a.BYTES_PER_ELEMENT)}function Ib(a,b,c,d,e){a=Gb(a);var h=Hb(a);return a.subarray(e>>h,e+d*(c*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[b-6402]||1)*(1<<h)+4-1&-4)>>h)}
function Y(a){var b=X.lc,c=b.Sb[a];0<=c&&(b.Sb[a]=c=X.getUniformLocation(b,b.kc[a]+(0<c?"["+c+"]":"")));return c}for(var Z=[],X,Jb=new Float32Array(288),Kb=0;288>Kb;++Kb)Z[Kb]=Jb.subarray(0,Kb+1);
var Pb={N:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},ga:function(a,b,c){a=Q(a);if(!a)return-4;a=$a(a);I[b>>3]=a.width;I[c>>3]=a.height;return 0},Ya:function(a,b,c){E.copyWithin(a,b,b+c)},Ka:function(a,b){function c(d){J.get(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},Za:function(a){var b=E.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(a,d);0<d%65536&&(d+=65536-d%65536);a:{try{ka.grow(Math.min(2147483648,
d)-ua.byteLength+65535>>>16);ya();var e=1;break a}catch(h){}e=void 0}if(e)return!0}return!1},M:function(a,b,c){a=Q(a);if(!a)return-4;a.width=b;a.height=c;return 0},Y:function(a,b,c,d){ab(a,b,c,d,2,"keydown");return 0},W:function(a,b,c,d){ab(a,b,c,d,1,"keypress");return 0},X:function(a,b,c,d){ab(a,b,c,d,3,"keyup");return 0},fa:function(a,b,c,d){S(a,b,c,d,5,"mousedown");return 0},$:function(a,b,c,d){S(a,b,c,d,33,"mouseenter");return 0},_:function(a,b,c,d){S(a,b,c,d,34,"mouseleave");return 0},aa:function(a,
b,c,d){S(a,b,c,d,8,"mousemove");return 0},ba:function(a,b,c,d){S(a,b,c,d,6,"mouseup");return 0},R:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.Wb||document.body.Yb||document.body.Xb))return-1;a=Q(a);if(!a)return-4;cb(a,b,c,d,"pointerlockchange");cb(a,b,c,d,"mozpointerlockchange");cb(a,b,c,d,"webkitpointerlockchange");cb(a,b,c,d,"mspointerlockchange");return 0},Q:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.Wb||
document.body.Yb||document.body.Xb))return-1;a=Q(a);if(!a)return-4;db(a,b,c,d,"pointerlockerror");db(a,b,c,d,"mozpointerlockerror");db(a,b,c,d,"webkitpointerlockerror");db(a,b,c,d,"mspointerlockerror");return 0},Xa:function(a,b,c,d){eb(a,b,c,d);return 0},S:function(a,b,c,d){fb(a,b,c,d,25,"touchcancel");return 0},T:function(a,b,c,d){fb(a,b,c,d,23,"touchend");return 0},U:function(a,b,c,d){fb(a,b,c,d,24,"touchmove");return 0},V:function(a,b,c,d){fb(a,b,c,d,22,"touchstart");return 0},P:function(a,b,c,
d){gb(a,b,c,d,31,"webglcontextlost");return 0},O:function(a,b,c,d){gb(a,b,c,d,32,"webglcontextrestored");return 0},Z:function(a,b,c,d){a=Q(a);return"undefined"!==typeof a.onwheel?(hb(a,b,c,d),0):-1},B:function(a,b){b>>=2;b={alpha:!!G[b],depth:!!G[b+1],stencil:!!G[b+2],antialias:!!G[b+3],premultipliedAlpha:!!G[b+4],preserveDrawingBuffer:!!G[b+5],powerPreference:Cb[G[b+6]],failIfMajorPerformanceCaveat:!!G[b+7],cc:G[b+8],zc:G[b+9],ac:G[b+10],nc:G[b+11],Bc:G[b+12],Cc:G[b+13]};a=Q(a);return!a||b.nc?0:
zb(a,b)},oa:function(a,b){a=ub[a];b=F(b);0==b.indexOf("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&ib(X);"OES_vertex_array_object"==b&&jb(X);"WEBGL_draw_buffers"==b&&kb(X);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&lb(X);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&mb(X);"WEBGL_multi_draw"==b&&nb(X);return!!a.Tb.getExtension(b)},Ga:function(a){a>>=2;for(var b=0;14>b;++b)G[a+b]=0;G[a]=G[a+1]=G[a+3]=G[a+4]=G[a+8]=G[a+10]=1},va:function(a){W=ub[a];f.uc=X=W&&W.Tb;return!a||
X?0:-5},b:function(a){X.activeTexture(a)},z:function(a,b){X.attachShader(T[a],U[b])},c:function(a,b){35051==a?X.Zb=b:35052==a&&(X.Lb=b);X.bindBuffer(a,pb[b])},h:function(a,b){X.bindFramebuffer(a,qb[b])},Aa:function(a,b){X.bindRenderbuffer(a,rb[b])},a:function(a,b){X.bindTexture(a,sb[b])},J:function(a){X.bindVertexArray(tb[a])},F:function(a,b,c,d){X.blendColor(a,b,c,d)},G:function(a,b){X.blendEquationSeparate(a,b)},H:function(a,b,c,d){X.blendFuncSeparate(a,b,c,d)},p:function(a,b,c,d,e,h,g,m,n,p){X.blitFramebuffer(a,
b,c,d,e,h,g,m,n,p)},Da:function(a,b,c,d){2<=W.version?c?X.bufferData(a,E,d,c,b):X.bufferData(a,b,d):X.bufferData(a,c?E.subarray(c,c+b):b,d)},Ca:function(a,b,c,d){2<=W.version?X.bufferSubData(a,b,E,d,c):X.bufferSubData(a,b,E.subarray(d,d+c))},kb:function(a){X.clear(a)},ea:function(a,b,c,d){X.clearColor(a,b,c,d)},mb:function(a){X.clearDepth(a)},lb:function(a){X.clearStencil(a)},j:function(a,b,c,d){X.colorMask(!!a,!!b,!!c,!!d)},la:function(a){X.compileShader(U[a])},wa:function(a,b,c,d,e,h,g,m){2<=W.version?
X.Lb?X.compressedTexImage2D(a,b,c,d,e,h,g,m):X.compressedTexImage2D(a,b,c,d,e,h,E,m,g):X.compressedTexImage2D(a,b,c,d,e,h,m?E.subarray(m,m+g):null)},ta:function(a,b,c,d,e,h,g,m,n){X.Lb?X.compressedTexImage3D(a,b,c,d,e,h,g,m,n):X.compressedTexImage3D(a,b,c,d,e,h,g,E,n,m)},ra:function(){var a=yb(T),b=X.createProgram();b.name=a;b.Rb=b.Pb=b.Qb=0;b.Vb=1;T[a]=b;return a},na:function(a){var b=yb(U);U[b]=X.createShader(a);return b},C:function(a){X.cullFace(a)},Ma:function(a,b){for(var c=0;c<a;c++){var d=
G[b+4*c>>2],e=pb[d];e&&(X.deleteBuffer(e),e.name=0,pb[d]=null,d==X.Zb&&(X.Zb=0),d==X.Lb&&(X.Lb=0))}},i:function(a,b){for(var c=0;c<a;++c){var d=G[b+4*c>>2],e=qb[d];e&&(X.deleteFramebuffer(e),e.name=0,qb[d]=null)}},K:function(a){if(a){var b=T[a];b?(X.deleteProgram(b),b.name=0,T[a]=null):V(1281)}},L:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2],e=rb[d];e&&(X.deleteRenderbuffer(e),e.name=0,rb[d]=null)}},r:function(a){if(a){var b=U[a];b?(X.deleteShader(b),U[a]=null):V(1281)}},La:function(a,b){for(var c=
0;c<a;c++){var d=G[b+4*c>>2],e=sb[d];e&&(X.deleteTexture(e),e.name=0,sb[d]=null)}},Ja:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2];X.deleteVertexArray(tb[d]);tb[d]=null}},u:function(a){X.depthFunc(a)},t:function(a){X.depthMask(!!a)},d:function(a){X.disable(a)},I:function(a){X.disableVertexAttribArray(a)},ab:function(a,b,c){X.drawArrays(a,b,c)},bb:function(a,b,c,d){X.drawElements(a,b,c,d)},g:function(a){X.enable(a)},hb:function(a){X.enableVertexAttribArray(a)},D:function(a){X.frontFace(a)},
Ea:function(a,b){Db(a,b,"createBuffer",pb)},Ba:function(a,b){Db(a,b,"createRenderbuffer",rb)},xa:function(a,b){Db(a,b,"createTexture",sb)},Ia:function(a,b){Db(a,b,"createVertexArray",tb)},ja:function(a,b){return X.getAttribLocation(T[a],F(b))},e:function(a,b){Eb(a,b)},pa:function(a,b,c,d){a=X.getProgramInfoLog(T[a]);null===a&&(a="(unknown error)");b=0<b&&d?D(a,E,d,b):0;c&&(G[c>>2]=b)},y:function(a,b,c){if(c)if(a>=ob)V(1281);else if(a=T[a],35716==b)a=X.getProgramInfoLog(a),null===a&&(a="(unknown error)"),
G[c>>2]=a.length+1;else if(35719==b){if(!a.Rb)for(b=0;b<X.getProgramParameter(a,35718);++b)a.Rb=Math.max(a.Rb,X.getActiveUniform(a,b).name.length+1);G[c>>2]=a.Rb}else if(35722==b){if(!a.Pb)for(b=0;b<X.getProgramParameter(a,35721);++b)a.Pb=Math.max(a.Pb,X.getActiveAttrib(a,b).name.length+1);G[c>>2]=a.Pb}else if(35381==b){if(!a.Qb)for(b=0;b<X.getProgramParameter(a,35382);++b)a.Qb=Math.max(a.Qb,X.getActiveUniformBlockName(a,b).length+1);G[c>>2]=a.Qb}else G[c>>2]=X.getProgramParameter(a,b);else V(1281)},
ka:function(a,b,c,d){a=X.getShaderInfoLog(U[a]);null===a&&(a="(unknown error)");b=0<b&&d?D(a,E,d,b):0;c&&(G[c>>2]=b)},w:function(a,b,c){c?35716==b?(a=X.getShaderInfoLog(U[a]),null===a&&(a="(unknown error)"),G[c>>2]=a?a.length+1:0):35720==b?(a=X.getShaderSource(U[a]),G[c>>2]=a?a.length+1:0):G[c>>2]=X.getShaderParameter(U[a],b):V(1281)},Oa:function(a){var b=vb[a];if(!b){switch(a){case 7939:b=X.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Fb(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=
X.getParameter(a))||V(1280);b=b&&Fb(b);break;case 7938:b=X.getParameter(7938);b=2<=W.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Fb(b);break;case 35724:b=X.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Fb(b);break;default:V(1280)}vb[a]=b}return b},Na:function(a,b){if(2>W.version)return V(1282),0;var c=wb[a];if(c)return 0>b||b>=c.length?(V(1281),0):c[b];switch(a){case 7939:return c=
X.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return Fb(d)}),c=wb[a]=c,0>b||b>=c.length?(V(1281),0):c[b];default:return V(1280),0}},k:function(a,b){function c(w){return"]"==w.slice(-1)&&w.lastIndexOf("[")}b=F(b);a=T[a];var d=a.Sb,e=a.rc,h,g=0,m=b,n=c(b);if(!d)for(a.Sb=d={},a.kc={},h=0;h<X.getProgramParameter(a,35718);++h){var p=X.getActiveUniform(a,h);var q=p.name;p=p.size;var A=c(q);A=0<A?q.slice(0,A):q;var P=a.Vb;a.Vb+=p;e[A]=[p,P];for(q=0;q<p;++q)d[P]=
q,a.kc[P++]=A}0<n&&(g=parseInt(b.slice(n+1))>>>0,m=b.slice(0,n));return(e=e[m])&&g<e[0]&&(g+=e[1],d[g]=d[g]||X.getUniformLocation(a,b))?g:-1},qa:function(a){a=T[a];X.linkProgram(a);a.Sb=0;a.rc={}},E:function(a,b){X.polygonOffset(a,b)},q:function(a){X.readBuffer(a)},ya:function(a,b,c,d){X.renderbufferStorage(a,b,c,d)},za:function(a,b,c,d,e){X.renderbufferStorageMultisample(a,b,c,d,e)},ha:function(a,b,c,d){X.scissor(a,b,c,d)},ma:function(a,b,c,d){for(var e="",h=0;h<b;++h){var g=d?G[d+4*h>>2]:-1;e+=
F(G[c+4*h>>2],0>g?void 0:g)}X.shaderSource(U[a],e)},Ha:function(a,b,c){X.stencilFunc(a,b,c)},da:function(a,b,c,d){X.stencilFuncSeparate(a,b,c,d)},s:function(a){X.stencilMask(a)},Fa:function(a,b,c){X.stencilOp(a,b,c)},ca:function(a,b,c,d){X.stencilOpSeparate(a,b,c,d)},ua:function(a,b,c,d,e,h,g,m,n){if(2<=W.version)if(X.Lb)X.texImage2D(a,b,c,d,e,h,g,m,n);else if(n){var p=Gb(m);X.texImage2D(a,b,c,d,e,h,g,m,p,n>>Hb(p))}else X.texImage2D(a,b,c,d,e,h,g,m,null);else X.texImage2D(a,b,c,d,e,h,g,m,n?Ib(m,g,
d,e,n):null)},sa:function(a,b,c,d,e,h,g,m,n,p){if(X.Lb)X.texImage3D(a,b,c,d,e,h,g,m,n,p);else if(p){var q=Gb(n);X.texImage3D(a,b,c,d,e,h,g,m,n,q,p>>Hb(q))}else X.texImage3D(a,b,c,d,e,h,g,m,n,null)},A:function(a,b,c){X.texParameterf(a,b,c)},f:function(a,b,c){X.texParameteri(a,b,c)},$a:function(a,b,c,d,e,h,g,m,n){if(2<=W.version)if(X.Lb)X.texSubImage2D(a,b,c,d,e,h,g,m,n);else if(n){var p=Gb(m);X.texSubImage2D(a,b,c,d,e,h,g,m,p,n>>Hb(p))}else X.texSubImage2D(a,b,c,d,e,h,g,m,null);else p=null,n&&(p=Ib(m,
g,e,h,n)),X.texSubImage2D(a,b,c,d,e,h,g,m,p)},_a:function(a,b,c,d,e,h,g,m,n,p,q){if(X.Lb)X.texSubImage3D(a,b,c,d,e,h,g,m,n,p,q);else if(q){var A=Gb(p);X.texSubImage3D(a,b,c,d,e,h,g,m,n,p,A,q>>Hb(A))}else X.texSubImage3D(a,b,c,d,e,h,g,m,n,p,null)},gb:function(a,b,c){if(2<=W.version)X.uniform1fv(Y(a),H,c>>2,b);else{if(288>=b)for(var d=Z[b-1],e=0;e<b;++e)d[e]=H[c+4*e>>2];else d=H.subarray(c>>2,c+4*b>>2);X.uniform1fv(Y(a),d)}},x:function(a,b){X.uniform1i(Y(a),b)},fb:function(a,b,c){if(2<=W.version)X.uniform2fv(Y(a),
H,c>>2,2*b);else{if(144>=b)for(var d=Z[2*b-1],e=0;e<2*b;e+=2)d[e]=H[c+4*e>>2],d[e+1]=H[c+(4*e+4)>>2];else d=H.subarray(c>>2,c+8*b>>2);X.uniform2fv(Y(a),d)}},eb:function(a,b,c){if(2<=W.version)X.uniform3fv(Y(a),H,c>>2,3*b);else{if(96>=b)for(var d=Z[3*b-1],e=0;e<3*b;e+=3)d[e]=H[c+4*e>>2],d[e+1]=H[c+(4*e+4)>>2],d[e+2]=H[c+(4*e+8)>>2];else d=H.subarray(c>>2,c+12*b>>2);X.uniform3fv(Y(a),d)}},db:function(a,b,c){if(2<=W.version)X.uniform4fv(Y(a),H,c>>2,4*b);else{if(72>=b){var d=Z[4*b-1],e=H;c>>=2;for(var h=
0;h<4*b;h+=4){var g=c+h;d[h]=e[g];d[h+1]=e[g+1];d[h+2]=e[g+2];d[h+3]=e[g+3]}}else d=H.subarray(c>>2,c+16*b>>2);X.uniform4fv(Y(a),d)}},cb:function(a,b,c,d){if(2<=W.version)X.uniformMatrix4fv(Y(a),!!c,H,d>>2,16*b);else{if(18>=b){var e=Z[16*b-1],h=H;d>>=2;for(var g=0;g<16*b;g+=16){var m=d+g;e[g]=h[m];e[g+1]=h[m+1];e[g+2]=h[m+2];e[g+3]=h[m+3];e[g+4]=h[m+4];e[g+5]=h[m+5];e[g+6]=h[m+6];e[g+7]=h[m+7];e[g+8]=h[m+8];e[g+9]=h[m+9];e[g+10]=h[m+10];e[g+11]=h[m+11];e[g+12]=h[m+12];e[g+13]=h[m+13];e[g+14]=h[m+
14];e[g+15]=h[m+15]}}else e=H.subarray(d>>2,d+64*b>>2);X.uniformMatrix4fv(Y(a),!!c,e)}},l:function(a){a=T[a];X.useProgram(a);X.lc=a},ib:function(a,b){X.vertexAttribDivisor(a,b)},jb:function(a,b,c,d,e,h){X.vertexAttribPointer(a,b,c,!!d,e,h)},ia:function(a,b,c,d){X.viewport(a,b,c,d)},Wa:function(){f.dc=function(a){0!=Lb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",f.dc)},Va:function(){f.jc=function(a){a=a.clipboardData.getData("text");na("_sapp_emsc_onpaste",["string"],
[a])};window.addEventListener("paste",f.jc)},Ua:function(a){f.Dc=[];a=F(a);a=document.getElementById(a);f.ec=function(b){b.stopPropagation();b.preventDefault()};f.fc=function(b){b.stopPropagation();b.preventDefault()};f.hc=function(b){b.stopPropagation();b.preventDefault()};f.ic=function(b){b.stopPropagation();b.preventDefault();var c=b.dataTransfer.files;f.Ec=c;Mb(c.length);var d;for(d=0;d<c.length;d++)na("_sapp_emsc_drop",["number","string"],[d,c[d].name]);Nb(b.clientX,b.clientY)};a.addEventListener("dragenter",
f.ec,!1);a.addEventListener("dragleave",f.fc,!1);a.addEventListener("dragover",f.hc,!1);a.addEventListener("drop",f.ic,!1)},Qa:function(){var a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},o:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Ob()});document.body.append(a)},n:function(){document.getElementById("_sokol_app_input_element").focus()},nb:function(a){a=
F(a);f.Nb=document.getElementById(a);f.Nb||console.log("sokol_app.h: invalid target:"+a);f.Nb.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Ta:function(){window.removeEventListener("beforeunload",f.dc)},Sa:function(){window.removeEventListener("paste",f.jc)},Ra:function(a){a=F(a);a=document.getElementById(a);a.removeEventListener("dragenter",f.ec);a.removeEventListener("dragleave",f.fc);a.removeEventListener("dragover",f.hc);a.removeEventListener("drop",
f.ic)},v:function(){f.Nb&&f.Nb.requestPointerLock&&f.Nb.requestPointerLock()},Pa:function(a,b,c){var d=document.createElement("canvas");d.width=a;d.height=b;var e=d.getContext("2d"),h=e.createImageData(a,b);h.data.set(E.subarray(c,c+a*b*4));e.putImageData(h,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},m:function(){document.getElementById("_sokol_app_input_element").blur()}};
(function(){function a(e){f.asm=e.exports;ka=f.asm.ob;ya();J=f.asm.Hb;Aa.unshift(f.asm.pb);K--;f.monitorRunDependencies&&f.monitorRunDependencies(K);0==K&&(null!==Fa&&(clearInterval(Fa),Fa=null),L&&(e=L,L=null,e()))}function b(e){a(e.instance)}function c(e){return Ka().then(function(h){return WebAssembly.instantiate(h,d)}).then(e,function(h){z("failed to asynchronously prepare wasm: "+h);y(h)})}var d={a:Pb};K++;f.monitorRunDependencies&&f.monitorRunDependencies(K);if(f.instantiateWasm)try{return f.instantiateWasm(d,
a)}catch(e){return z("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return B||"function"!==typeof WebAssembly.instantiateStreaming||Ha()||Ga("file://")||"function"!==typeof fetch?c(b):fetch(M,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(h){z("wasm streaming compile failed: "+h);z("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
f.___wasm_call_ctors=function(){return(f.___wasm_call_ctors=f.asm.pb).apply(null,arguments)};var Ob=f.__sapp_emsc_notify_keyboard_hidden=function(){return(Ob=f.__sapp_emsc_notify_keyboard_hidden=f.asm.qb).apply(null,arguments)};f.__sapp_emsc_onpaste=function(){return(f.__sapp_emsc_onpaste=f.asm.rb).apply(null,arguments)};
var Lb=f.__sapp_html5_get_ask_leave_site=function(){return(Lb=f.__sapp_html5_get_ask_leave_site=f.asm.sb).apply(null,arguments)},Mb=f.__sapp_emsc_begin_drop=function(){return(Mb=f.__sapp_emsc_begin_drop=f.asm.tb).apply(null,arguments)};f.__sapp_emsc_drop=function(){return(f.__sapp_emsc_drop=f.asm.ub).apply(null,arguments)};var Nb=f.__sapp_emsc_end_drop=function(){return(Nb=f.__sapp_emsc_end_drop=f.asm.vb).apply(null,arguments)};
f.__sapp_emsc_invoke_fetch_cb=function(){return(f.__sapp_emsc_invoke_fetch_cb=f.asm.wb).apply(null,arguments)};f._main=function(){return(f._main=f.asm.xb).apply(null,arguments)};f.__saudio_emsc_pull=function(){return(f.__saudio_emsc_pull=f.asm.yb).apply(null,arguments)};f.__sfetch_emsc_head_response=function(){return(f.__sfetch_emsc_head_response=f.asm.zb).apply(null,arguments)};f.__sfetch_emsc_get_response=function(){return(f.__sfetch_emsc_get_response=f.asm.Ab).apply(null,arguments)};
f.__sfetch_emsc_failed_http_status=function(){return(f.__sfetch_emsc_failed_http_status=f.asm.Bb).apply(null,arguments)};f.__sfetch_emsc_failed_buffer_too_small=function(){return(f.__sfetch_emsc_failed_buffer_too_small=f.asm.Cb).apply(null,arguments)};
var R=f._malloc=function(){return(R=f._malloc=f.asm.Db).apply(null,arguments)},pa=f.stackSave=function(){return(pa=f.stackSave=f.asm.Eb).apply(null,arguments)},qa=f.stackRestore=function(){return(qa=f.stackRestore=f.asm.Fb).apply(null,arguments)},C=f.stackAlloc=function(){return(C=f.stackAlloc=f.asm.Gb).apply(null,arguments)},Qb;function ja(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}L=function Rb(){Qb||Sb();Qb||(L=Rb)};
function Sb(a){function b(){if(!Qb&&(Qb=!0,f.calledRun=!0,!la)){La(Aa);La(Ba);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if(Tb){var c=a,d=f._main;c=c||[];var e=c.length+1,h=C(4*(e+1));G[h>>2]=ta(aa);for(var g=1;g<e;g++)G[(h>>2)+g]=ta(c[g-1]);G[(h>>2)+e]=0;try{var m=d(e,h);if(!noExitRuntime||0!==m){if(!noExitRuntime){if(f.onExit)f.onExit(m);la=!0}t(m,new ja(m))}}catch(n){n instanceof ja||"unwind"==n||((c=n)&&"object"===typeof n&&n.stack&&(c=[n,n.stack]),z("exception thrown: "+c),t(1,n))}finally{}}if(f.postRun)for("function"==
typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;)c=f.postRun.shift(),Da.unshift(c);La(Da)}}a=a||r;if(!(0<K)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Ea();La(za);0<K||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},1)):b())}}f.run=Sb;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var Tb=!0;f.noInitialRun&&(Tb=!1);Sb();
