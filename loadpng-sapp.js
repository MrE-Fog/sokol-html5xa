
var f;f||(f=typeof Module !== 'undefined' ? Module : {});var h={},l;for(l in f)f.hasOwnProperty(l)&&(h[l]=f[l]);var r=[],aa="./this.program";function t(a,b){throw b;}var ba=!1,u=!1,ca=!1,da=!1;ba="object"===typeof window;u="function"===typeof importScripts;ca="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;da=!ba&&!ca&&!u;var v="",ea,fa,x,ha,ia;
if(ca)v=u?require("path").dirname(v)+"/":__dirname+"/",ea=function(a,b){ha||(ha=require("fs"));ia||(ia=require("path"));a=ia.normalize(a);return ha.readFileSync(a,b?null:"utf8")},x=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/")),r=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=f),process.on("uncaughtException",function(a){if(!(a instanceof ja))throw a;}),process.on("unhandledRejection",
y),t=function(a){process.exit(a)},f.inspect=function(){return"[Emscripten Module object]"};else if(da)"undefined"!=typeof read&&(ea=function(a){return read(a)}),x=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?r=scriptArgs:"undefined"!=typeof arguments&&(r=arguments),"function"===typeof quit&&(t=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===typeof console&&
(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(ba||u)u?v=self.location.href:"undefined"!==typeof document&&document.currentScript&&(v=document.currentScript.src),v=0!==v.indexOf("blob:")?v.substr(0,v.lastIndexOf("/")+1):"",ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},u&&(x=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),
fa=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};f.print||console.log.bind(console);var z=f.printErr||console.warn.bind(console);for(l in h)h.hasOwnProperty(l)&&(f[l]=h[l]);h=null;f.arguments&&(r=f.arguments);f.thisProgram&&(aa=f.thisProgram);f.quit&&(t=f.quit);var A;f.wasmBinary&&(A=f.wasmBinary);var noExitRuntime=f.noExitRuntime||!0;
"object"!==typeof WebAssembly&&y("no native wasm support detected");var ka,la=!1;function assert(a,b){a||y("Assertion failed: "+b)}function ma(a){var b=f["_"+a];assert(b,"Cannot call unknown function "+a+", make sure it is exported");return b}
function na(a,b,c){var d={string:function(n){var p=0;if(null!==n&&void 0!==n&&0!==n){var q=(n.length<<2)+1;p=C(q);D(n,E,p,q)}return p},array:function(n){var p=C(n.length);oa.set(n,p);return p}};a=ma(a);var e=[],k=0;if(c)for(var g=0;g<c.length;g++){var m=d[b[g]];m?(0===k&&(k=pa()),e[g]=m(c[g])):e[g]=c[g]}a.apply(null,e);0!==k&&qa(k)}var ra="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function F(a,b){if(a){var c=E,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&ra)a=ra.decode(c.subarray(a,b));else{for(d="";a<b;){var e=c[a++];if(e&128){var k=c[a++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|k);else{var g=c[a++]&63;e=224==(e&240)?(e&15)<<12|k<<6|g:(e&7)<<18|k<<12|g<<6|c[a++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}a=d}}else a="";return a}
function D(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var k=0;k<a.length;++k){var g=a.charCodeAt(k);if(55296<=g&&57343>=g){var m=a.charCodeAt(++k);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-e}
function sa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function ta(a){var b=sa(a)+1,c=C(b);D(a,oa,c,b);return c}var ua,oa,E,va,wa,G,xa,I,J;
function ya(){var a=ka.buffer;ua=a;f.HEAP8=oa=new Int8Array(a);f.HEAP16=va=new Int16Array(a);f.HEAP32=G=new Int32Array(a);f.HEAPU8=E=new Uint8Array(a);f.HEAPU16=wa=new Uint16Array(a);f.HEAPU32=xa=new Uint32Array(a);f.HEAPF32=I=new Float32Array(a);f.HEAPF64=J=new Float64Array(a)}var K,za=[],Aa=[],Ba=[],Ca=[],Da=[];function Ea(){var a=f.preRun.shift();za.unshift(a)}var L=0,Fa=null,M=null;f.preloadedImages={};f.preloadedAudios={};
function y(a){if(f.onAbort)f.onAbort(a);z(a);la=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}function Ga(){return N.startsWith("data:application/octet-stream;base64,")}var N="loadpng-sapp.wasm";if(!Ga()){var Ha=N;N=f.locateFile?f.locateFile(Ha,v):v+Ha}function Ia(){var a=N;try{if(a==N&&A)return new Uint8Array(A);if(x)return x(a);throw"both async and sync fetching of the wasm failed";}catch(b){y(b)}}
function Ja(){if(!A&&(ba||u)){if("function"===typeof fetch&&!N.startsWith("file://"))return fetch(N,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+N+"'";return a.arrayBuffer()}).catch(function(){return Ia()});if(fa)return new Promise(function(a,b){fa(N,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ia()})}
function Ka(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(f);else{var c=b.vc;"number"===typeof c?void 0===b.Tb?K.get(c)():K.get(c)(b.Tb):c(void 0===b.Tb?null:b.Tb)}}}var La=0;function Ma(){for(var a=O.length-1;0<=a;--a)Na(a);O=[];Oa=[]}var Oa=[];function Pa(){if(La&&Qa.Nb)for(var a=0;a<Oa.length;++a){var b=Oa[a];Oa.splice(a,1);--a;b.Ec.apply(null,b.sc)}}var O=[];function Na(a){var b=O[a];b.target.removeEventListener(b.Hb,b.lc,b.Ib);O.splice(a,1)}
function P(a){function b(d){++La;Qa=a;Pa();a.Kb(d);Pa();--La}if(a.Jb)a.lc=b,a.target.addEventListener(a.Hb,b,a.Ib),O.push(a),Ra||(Ca.push(Ma),Ra=!0);else for(var c=0;c<O.length;++c)O[c].target==a.target&&O[c].Hb==a.Hb&&Na(c--)}var Ra,Qa,Sa,Ta,Ua,Va,Wa,Xa,Ya=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function Q(a){a=2<a?F(a):a;return Ya[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}
function Za(a){return 0>Ya.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}function $a(a,b,c,d,e,k){Sa||(Sa=R(164));a={target:Q(a),Nb:!0,Hb:k,Jb:d,Kb:function(g){var m=Sa,n=m>>2;G[n]=g.location;G[n+1]=g.ctrlKey;G[n+2]=g.shiftKey;G[n+3]=g.altKey;G[n+4]=g.metaKey;G[n+5]=g.repeat;G[n+6]=g.charCode;G[n+7]=g.keyCode;G[n+8]=g.which;D(g.key||"",E,m+36,32);D(g.code||"",E,m+68,32);D(g.char||"",E,m+100,32);D(g.locale||"",E,m+132,32);K.get(d)(e,m,b)&&g.preventDefault()},Ib:c};P(a)}
function ab(a,b,c){a>>=2;G[a]=b.screenX;G[a+1]=b.screenY;G[a+2]=b.clientX;G[a+3]=b.clientY;G[a+4]=b.ctrlKey;G[a+5]=b.shiftKey;G[a+6]=b.altKey;G[a+7]=b.metaKey;va[2*a+16]=b.button;va[2*a+17]=b.buttons;G[a+9]=b.movementX;G[a+10]=b.movementY;c=Za(c);G[a+11]=b.clientX-c.left;G[a+12]=b.clientY-c.top}function S(a,b,c,d,e,k){Ta||(Ta=R(64));a=Q(a);P({target:a,Nb:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,Hb:k,Jb:d,Kb:function(g){g=g||event;ab(Ta,g,a);K.get(d)(e,Ta,b)&&g.preventDefault()},Ib:c})}
function bb(a,b,c,d,e){Ua||(Ua=R(260));P({target:a,Hb:e,Jb:d,Kb:function(k){k=k||event;var g=Ua,m=document.pointerLockElement||document.Vb||document.Xb||document.Wb;G[g>>2]=!!m;var n=m&&m.id?m.id:"";D(m?m==window?"#window":m==screen?"#screen":m&&m.nodeName?m.nodeName:"":"",E,g+4,128);D(n,E,g+132,128);K.get(d)(20,g,b)&&k.preventDefault()},Ib:c})}function cb(a,b,c,d,e){P({target:a,Hb:e,Jb:d,Kb:function(k){k=k||event;K.get(d)(38,0,b)&&k.preventDefault()},Ib:c})}
function db(a,b,c,d){Va||(Va=R(36));a=Q(a);P({target:a,Hb:"resize",Jb:d,Kb:function(e){e=e||event;if(e.target==a){var k=document.body;if(k){var g=Va;G[g>>2]=e.detail;G[g+4>>2]=k.clientWidth;G[g+8>>2]=k.clientHeight;G[g+12>>2]=innerWidth;G[g+16>>2]=innerHeight;G[g+20>>2]=outerWidth;G[g+24>>2]=outerHeight;G[g+28>>2]=pageXOffset;G[g+32>>2]=pageYOffset;K.get(d)(10,g,b)&&e.preventDefault()}}},Ib:c})}
function eb(a,b,c,d,e,k){Wa||(Wa=R(1684));a=Q(a);P({target:a,Nb:"touchstart"==k||"touchend"==k,Hb:k,Jb:d,Kb:function(g){for(var m={},n=g.touches,p=0;p<n.length;++p){var q=n[p];m[q.identifier]=q}n=g.changedTouches;for(p=0;p<n.length;++p)q=n[p],q.oc=1,m[q.identifier]=q;n=g.targetTouches;for(p=0;p<n.length;++p)m[n[p].identifier].pc=1;n=Wa;q=n>>2;G[q+1]=g.ctrlKey;G[q+2]=g.shiftKey;G[q+3]=g.altKey;G[q+4]=g.metaKey;q+=5;var B=Za(a),H=0;for(p in m){var w=m[p];G[q]=w.identifier;G[q+1]=w.screenX;G[q+2]=w.screenY;
G[q+3]=w.clientX;G[q+4]=w.clientY;G[q+5]=w.pageX;G[q+6]=w.pageY;G[q+7]=w.oc;G[q+8]=w.pc;G[q+9]=w.clientX-B.left;G[q+10]=w.clientY-B.top;q+=13;if(31<++H)break}G[n>>2]=H;K.get(d)(e,n,b)&&g.preventDefault()},Ib:c})}function fb(a,b,c,d,e,k){a={target:Q(a),Hb:k,Jb:d,Kb:function(g){g=g||event;K.get(d)(e,0,b)&&g.preventDefault()},Ib:c};P(a)}
function gb(a,b,c,d){Xa||(Xa=R(96));P({target:a,Nb:!0,Hb:"wheel",Jb:d,Kb:function(e){e=e||event;var k=Xa;ab(k,e,a);J[k+64>>3]=e.deltaX;J[k+72>>3]=e.deltaY;J[k+80>>3]=e.deltaZ;G[k+88>>2]=e.deltaMode;K.get(d)(9,k,b)&&e.preventDefault()},Ib:c})}
function hb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,k){b.drawArraysInstancedANGLE(c,d,e,k)},a.drawElementsInstanced=function(c,d,e,k,g){b.drawElementsInstancedANGLE(c,d,e,k,g)})}
function ib(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function jb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function kb(a){a.uc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function lb(a){a.xc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function mb(a){a.zc=a.getExtension("WEBGL_multi_draw")}var nb=1,ob=[],T=[],pb=[],qb=[],rb=[],U=[],sb=[],tb=[],ub={},vb={};function V(a){wb||(wb=a)}function xb(a){for(var b=nb++,c=a.length;c<b;c++)a[c]=null;return b}
function yb(a,b){a.ac||(a.ac=a.getContext,a.getContext=function(d,e){e=a.ac(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.bc?a.getContext("webgl2",b):a.getContext("webgl",b);return c?zb(c,b):0}function zb(a,b){var c=xb(tb),d={wc:c,attributes:b,version:b.bc,Sb:a};a.canvas&&(a.canvas.rc=d);tb[c]=d;("undefined"===typeof b.$b||b.$b)&&Ab(d);return c}
function Ab(a){a||(a=W);if(!a.nc){a.nc=!0;var b=a.Sb;hb(b);ib(b);jb(b);kb(b);lb(b);2<=a.version&&(b.Zb=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.Zb)b.Zb=b.getExtension("EXT_disjoint_timer_query");mb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var wb,W,Bb=["default","low-power","high-performance"];
function Cb(a,b,c,d){for(var e=0;e<a;e++){var k=X[c](),g=k&&xb(d);k?(k.name=g,d[g]=k):V(1282);G[b+4*e>>2]=g}}
function Db(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=X.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>W.version){V(1282);return}c=2*(X.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>W.version){V(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=X.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":V(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:V(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)G[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){V(1280);z("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:V(1280);z("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}G[b>>2]=c}else V(1281)}
function Eb(a){var b=sa(a)+1,c=R(b);D(a,E,c,b);return c}function Fb(a){a-=5120;return 0==a?oa:1==a?E:2==a?va:4==a?G:6==a?I:5==a||28922==a||28520==a||30779==a||30782==a?xa:wa}function Y(a){var b=X.kc,c=b.Rb[a];0<=c&&(b.Rb[a]=c=X.getUniformLocation(b,b.jc[a]+(0<c?"["+c+"]":"")));return c}for(var Z=[],X,Gb=new Float32Array(288),Hb=0;288>Hb;++Hb)Z[Hb]=Gb.subarray(0,Hb+1);
var Qb={O:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},X:function(a,b,c){a=Q(a);if(!a)return-4;a=Za(a);J[b>>3]=a.width;J[c>>3]=a.height;return 0},Ya:function(a,b,c){E.copyWithin(a,b,b+c)},Ia:function(a,b){function c(d){K.get(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},Za:function(a){var b=E.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(a,d);0<d%65536&&(d+=65536-d%65536);a:{try{ka.grow(Math.min(2147483648,
d)-ua.byteLength+65535>>>16);ya();var e=1;break a}catch(k){}e=void 0}if(e)return!0}return!1},L:function(a,b,c){a=Q(a);if(!a)return-4;a.width=b;a.height=c;return 0},_:function(a,b,c,d){$a(a,b,c,d,2,"keydown");return 0},Y:function(a,b,c,d){$a(a,b,c,d,1,"keypress");return 0},Z:function(a,b,c,d){$a(a,b,c,d,3,"keyup");return 0},fa:function(a,b,c,d){S(a,b,c,d,5,"mousedown");return 0},ba:function(a,b,c,d){S(a,b,c,d,33,"mouseenter");return 0},aa:function(a,b,c,d){S(a,b,c,d,34,"mouseleave");return 0},ca:function(a,
b,c,d){S(a,b,c,d,8,"mousemove");return 0},da:function(a,b,c,d){S(a,b,c,d,6,"mouseup");return 0},S:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.Vb||document.body.Xb||document.body.Wb))return-1;a=Q(a);if(!a)return-4;bb(a,b,c,d,"pointerlockchange");bb(a,b,c,d,"mozpointerlockchange");bb(a,b,c,d,"webkitpointerlockchange");bb(a,b,c,d,"mspointerlockchange");return 0},R:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.Vb||
document.body.Xb||document.body.Wb))return-1;a=Q(a);if(!a)return-4;cb(a,b,c,d,"pointerlockerror");cb(a,b,c,d,"mozpointerlockerror");cb(a,b,c,d,"webkitpointerlockerror");cb(a,b,c,d,"mspointerlockerror");return 0},Ua:function(a,b,c,d){db(a,b,c,d);return 0},T:function(a,b,c,d){eb(a,b,c,d,25,"touchcancel");return 0},U:function(a,b,c,d){eb(a,b,c,d,23,"touchend");return 0},V:function(a,b,c,d){eb(a,b,c,d,24,"touchmove");return 0},W:function(a,b,c,d){eb(a,b,c,d,22,"touchstart");return 0},Q:function(a,b,c,
d){fb(a,b,c,d,31,"webglcontextlost");return 0},P:function(a,b,c,d){fb(a,b,c,d,32,"webglcontextrestored");return 0},$:function(a,b,c,d){a=Q(a);return"undefined"!==typeof a.onwheel?(gb(a,b,c,d),0):-1},B:function(a,b){b>>=2;b={alpha:!!G[b],depth:!!G[b+1],stencil:!!G[b+2],antialias:!!G[b+3],premultipliedAlpha:!!G[b+4],preserveDrawingBuffer:!!G[b+5],powerPreference:Bb[G[b+6]],failIfMajorPerformanceCaveat:!!G[b+7],bc:G[b+8],yc:G[b+9],$b:G[b+10],mc:G[b+11],Ac:G[b+12],Bc:G[b+13]};a=Q(a);return!a||b.mc?0:
yb(a,b)},lb:function(a,b){a=tb[a];b=F(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&hb(X);"OES_vertex_array_object"==b&&ib(X);"WEBGL_draw_buffers"==b&&jb(X);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&kb(X);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&lb(X);"WEBGL_multi_draw"==b&&mb(X);return!!a.Sb.getExtension(b)},Fa:function(a){a>>=2;for(var b=0;14>b;++b)G[a+b]=0;G[a]=G[a+1]=G[a+3]=G[a+4]=G[a+8]=G[a+10]=1},qa:function(a){W=tb[a];f.tc=X=W&&W.Sb;return!a||
X?0:-5},b:function(a){X.activeTexture(a)},A:function(a,b){X.attachShader(T[a],U[b])},e:function(a,b){35051==a?X.Yb=b:35052==a&&(X.Lb=b);X.bindBuffer(a,ob[b])},h:function(a,b){X.bindFramebuffer(a,pb[b])},Aa:function(a,b){X.bindRenderbuffer(a,qb[b])},a:function(a,b){X.bindTexture(a,rb[b])},K:function(a){X.bindVertexArray(sb[a])},G:function(a,b,c,d){X.blendColor(a,b,c,d)},H:function(a,b){X.blendEquationSeparate(a,b)},I:function(a,b,c,d){X.blendFuncSeparate(a,b,c,d)},p:function(a,b,c,d,e,k,g,m,n,p){X.blitFramebuffer(a,
b,c,d,e,k,g,m,n,p)},Da:function(a,b,c,d){2<=W.version?c?X.bufferData(a,E,d,c,b):X.bufferData(a,b,d):X.bufferData(a,c?E.subarray(c,c+b):b,d)},Ca:function(a,b,c,d){2<=W.version?X.bufferSubData(a,b,E,d,c):X.bufferSubData(a,b,E.subarray(d,d+c))},ib:function(a){X.clear(a)},ia:function(a,b,c,d){X.clearColor(a,b,c,d)},kb:function(a){X.clearDepth(a)},jb:function(a){X.clearStencil(a)},j:function(a,b,c,d){X.colorMask(!!a,!!b,!!c,!!d)},na:function(a){X.compileShader(U[a])},xa:function(a,b,c,d,e,k,g,m){2<=W.version?
X.Lb?X.compressedTexImage2D(a,b,c,d,e,k,g,m):X.compressedTexImage2D(a,b,c,d,e,k,E,m,g):X.compressedTexImage2D(a,b,c,d,e,k,m?E.subarray(m,m+g):null)},va:function(a,b,c,d,e,k,g,m,n){X.Lb?X.compressedTexImage3D(a,b,c,d,e,k,g,m,n):X.compressedTexImage3D(a,b,c,d,e,k,g,E,n,m)},ta:function(){var a=xb(T),b=X.createProgram();b.name=a;b.Qb=b.Ob=b.Pb=0;b.Ub=1;T[a]=b;return a},pa:function(a){var b=xb(U);U[b]=X.createShader(a);return b},D:function(a){X.cullFace(a)},Ma:function(a,b){for(var c=0;c<a;c++){var d=
G[b+4*c>>2],e=ob[d];e&&(X.deleteBuffer(e),e.name=0,ob[d]=null,d==X.Yb&&(X.Yb=0),d==X.Lb&&(X.Lb=0))}},i:function(a,b){for(var c=0;c<a;++c){var d=G[b+4*c>>2],e=pb[d];e&&(X.deleteFramebuffer(e),e.name=0,pb[d]=null)}},M:function(a){if(a){var b=T[a];b?(X.deleteProgram(b),b.name=0,T[a]=null):V(1281)}},N:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2],e=qb[d];e&&(X.deleteRenderbuffer(e),e.name=0,qb[d]=null)}},r:function(a){if(a){var b=U[a];b?(X.deleteShader(b),U[a]=null):V(1281)}},La:function(a,b){for(var c=
0;c<a;c++){var d=G[b+4*c>>2],e=rb[d];e&&(X.deleteTexture(e),e.name=0,rb[d]=null)}},Ka:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2];X.deleteVertexArray(sb[d]);sb[d]=null}},u:function(a){X.depthFunc(a)},t:function(a){X.depthMask(!!a)},d:function(a){X.disable(a)},J:function(a){X.disableVertexAttribArray(a)},_a:function(a,b,c){X.drawArrays(a,b,c)},$a:function(a,b,c,d){X.drawElements(a,b,c,d)},g:function(a){X.enable(a)},fb:function(a){X.enableVertexAttribArray(a)},E:function(a){X.frontFace(a)},
Ea:function(a,b){Cb(a,b,"createBuffer",ob)},Ba:function(a,b){Cb(a,b,"createRenderbuffer",qb)},ya:function(a,b){Cb(a,b,"createTexture",rb)},Ja:function(a,b){Cb(a,b,"createVertexArray",sb)},la:function(a,b){return X.getAttribLocation(T[a],F(b))},c:function(a,b){Db(a,b)},ra:function(a,b,c,d){a=X.getProgramInfoLog(T[a]);null===a&&(a="(unknown error)");b=0<b&&d?D(a,E,d,b):0;c&&(G[c>>2]=b)},z:function(a,b,c){if(c)if(a>=nb)V(1281);else if(a=T[a],35716==b)a=X.getProgramInfoLog(a),null===a&&(a="(unknown error)"),
G[c>>2]=a.length+1;else if(35719==b){if(!a.Qb)for(b=0;b<X.getProgramParameter(a,35718);++b)a.Qb=Math.max(a.Qb,X.getActiveUniform(a,b).name.length+1);G[c>>2]=a.Qb}else if(35722==b){if(!a.Ob)for(b=0;b<X.getProgramParameter(a,35721);++b)a.Ob=Math.max(a.Ob,X.getActiveAttrib(a,b).name.length+1);G[c>>2]=a.Ob}else if(35381==b){if(!a.Pb)for(b=0;b<X.getProgramParameter(a,35382);++b)a.Pb=Math.max(a.Pb,X.getActiveUniformBlockName(a,b).length+1);G[c>>2]=a.Pb}else G[c>>2]=X.getProgramParameter(a,b);else V(1281)},
ma:function(a,b,c,d){a=X.getShaderInfoLog(U[a]);null===a&&(a="(unknown error)");b=0<b&&d?D(a,E,d,b):0;c&&(G[c>>2]=b)},x:function(a,b,c){c?35716==b?(a=X.getShaderInfoLog(U[a]),null===a&&(a="(unknown error)"),G[c>>2]=a?a.length+1:0):35720==b?(a=X.getShaderSource(U[a]),G[c>>2]=a?a.length+1:0):G[c>>2]=X.getShaderParameter(U[a],b):V(1281)},Oa:function(a){var b=ub[a];if(!b){switch(a){case 7939:b=X.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Eb(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=
X.getParameter(a))||V(1280);b=b&&Eb(b);break;case 7938:b=X.getParameter(7938);b=2<=W.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Eb(b);break;case 35724:b=X.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Eb(b);break;default:V(1280)}ub[a]=b}return b},Na:function(a,b){if(2>W.version)return V(1282),0;var c=vb[a];if(c)return 0>b||b>=c.length?(V(1281),0):c[b];switch(a){case 7939:return c=
X.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return Eb(d)}),c=vb[a]=c,0>b||b>=c.length?(V(1281),0):c[b];default:return V(1280),0}},k:function(a,b){function c(w){return"]"==w.slice(-1)&&w.lastIndexOf("[")}b=F(b);a=T[a];var d=a.Rb,e=a.qc,k,g=0,m=b,n=c(b);if(!d)for(a.Rb=d={},a.jc={},k=0;k<X.getProgramParameter(a,35718);++k){var p=X.getActiveUniform(a,k);var q=p.name;p=p.size;var B=c(q);B=0<B?q.slice(0,B):q;var H=a.Ub;a.Ub+=p;e[B]=[p,H];for(q=0;q<p;++q)d[H]=
q,a.jc[H++]=B}0<n&&(g=parseInt(b.slice(n+1))>>>0,m=b.slice(0,n));return(e=e[m])&&g<e[0]&&(g+=e[1],d[g]=d[g]||X.getUniformLocation(a,b))?g:-1},sa:function(a){a=T[a];X.linkProgram(a);a.Rb=0;a.qc={}},F:function(a,b){X.polygonOffset(a,b)},q:function(a){X.readBuffer(a)},za:function(a,b,c,d){X.renderbufferStorage(a,b,c,d)},ja:function(a,b,c,d){X.scissor(a,b,c,d)},oa:function(a,b,c,d){for(var e="",k=0;k<b;++k){var g=d?G[d+4*k>>2]:-1;e+=F(G[c+4*k>>2],0>g?void 0:g)}X.shaderSource(U[a],e)},Ha:function(a,b,
c){X.stencilFunc(a,b,c)},ha:function(a,b,c,d){X.stencilFuncSeparate(a,b,c,d)},s:function(a){X.stencilMask(a)},Ga:function(a,b,c){X.stencilOp(a,b,c)},ga:function(a,b,c,d){X.stencilOpSeparate(a,b,c,d)},wa:function(a,b,c,d,e,k,g,m,n){if(2<=W.version)if(X.Lb)X.texImage2D(a,b,c,d,e,k,g,m,n);else if(n){var p=Fb(m);X.texImage2D(a,b,c,d,e,k,g,m,p,n>>31-Math.clz32(p.BYTES_PER_ELEMENT))}else X.texImage2D(a,b,c,d,e,k,g,m,null);else{p=X;var q=p.texImage2D;if(n){var B=Fb(m),H=31-Math.clz32(B.BYTES_PER_ELEMENT);
n=B.subarray(n>>H,n+e*(d*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[g-6402]||1)*(1<<H)+4-1&-4)>>H)}else n=null;q.call(p,a,b,c,d,e,k,g,m,n)}},ua:function(a,b,c,d,e,k,g,m,n,p){if(X.Lb)X.texImage3D(a,b,c,d,e,k,g,m,n,p);else if(p){var q=Fb(n);X.texImage3D(a,b,c,d,e,k,g,m,n,q,p>>31-Math.clz32(q.BYTES_PER_ELEMENT))}else X.texImage3D(a,b,c,d,e,k,g,m,n,null)},C:function(a,b,c){X.texParameterf(a,b,c)},f:function(a,b,c){X.texParameteri(a,b,c)},eb:function(a,b,c){if(2<=W.version)X.uniform1fv(Y(a),
I,c>>2,b);else{if(288>=b)for(var d=Z[b-1],e=0;e<b;++e)d[e]=I[c+4*e>>2];else d=I.subarray(c>>2,c+4*b>>2);X.uniform1fv(Y(a),d)}},y:function(a,b){X.uniform1i(Y(a),b)},db:function(a,b,c){if(2<=W.version)X.uniform2fv(Y(a),I,c>>2,2*b);else{if(144>=b)for(var d=Z[2*b-1],e=0;e<2*b;e+=2)d[e]=I[c+4*e>>2],d[e+1]=I[c+(4*e+4)>>2];else d=I.subarray(c>>2,c+8*b>>2);X.uniform2fv(Y(a),d)}},cb:function(a,b,c){if(2<=W.version)X.uniform3fv(Y(a),I,c>>2,3*b);else{if(96>=b)for(var d=Z[3*b-1],e=0;e<3*b;e+=3)d[e]=I[c+4*e>>
2],d[e+1]=I[c+(4*e+4)>>2],d[e+2]=I[c+(4*e+8)>>2];else d=I.subarray(c>>2,c+12*b>>2);X.uniform3fv(Y(a),d)}},bb:function(a,b,c){if(2<=W.version)X.uniform4fv(Y(a),I,c>>2,4*b);else{if(72>=b){var d=Z[4*b-1],e=I;c>>=2;for(var k=0;k<4*b;k+=4){var g=c+k;d[k]=e[g];d[k+1]=e[g+1];d[k+2]=e[g+2];d[k+3]=e[g+3]}}else d=I.subarray(c>>2,c+16*b>>2);X.uniform4fv(Y(a),d)}},ab:function(a,b,c,d){if(2<=W.version)X.uniformMatrix4fv(Y(a),!!c,I,d>>2,16*b);else{if(18>=b){var e=Z[16*b-1],k=I;d>>=2;for(var g=0;g<16*b;g+=16){var m=
d+g;e[g]=k[m];e[g+1]=k[m+1];e[g+2]=k[m+2];e[g+3]=k[m+3];e[g+4]=k[m+4];e[g+5]=k[m+5];e[g+6]=k[m+6];e[g+7]=k[m+7];e[g+8]=k[m+8];e[g+9]=k[m+9];e[g+10]=k[m+10];e[g+11]=k[m+11];e[g+12]=k[m+12];e[g+13]=k[m+13];e[g+14]=k[m+14];e[g+15]=k[m+15]}}else e=I.subarray(d>>2,d+64*b>>2);X.uniformMatrix4fv(Y(a),!!c,e)}},l:function(a){a=T[a];X.useProgram(a);X.kc=a},gb:function(a,b){X.vertexAttribDivisor(a,b)},hb:function(a,b,c,d,e,k){X.vertexAttribPointer(a,b,c,!!d,e,k)},ka:function(a,b,c,d){X.viewport(a,b,c,d)},Xa:function(){f.cc=
function(a){0!=Ib()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",f.cc)},Wa:function(){f.ic=function(a){a=a.clipboardData.getData("text");na("_sapp_emsc_onpaste",["string"],[a])};window.addEventListener("paste",f.ic)},Va:function(a){f.Cc=[];a=F(a);a=document.getElementById(a);f.dc=function(b){b.stopPropagation();b.preventDefault()};f.ec=function(b){b.stopPropagation();b.preventDefault()};f.fc=function(b){b.stopPropagation();b.preventDefault()};f.hc=function(b){b.stopPropagation();
b.preventDefault();var c=b.dataTransfer.files;f.Dc=c;Jb(c.length);var d;for(d=0;d<c.length;d++)na("_sapp_emsc_drop",["number","string"],[d,c[d].name]);Kb(b.clientX,b.clientY)};a.addEventListener("dragenter",f.dc,!1);a.addEventListener("dragleave",f.ec,!1);a.addEventListener("dragover",f.fc,!1);a.addEventListener("drop",f.hc,!1)},Qa:function(){var a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},o:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";
a.autocapitalize="none";a.addEventListener("focusout",function(){Lb()});document.body.append(a)},n:function(){document.getElementById("_sokol_app_input_element").focus()},mb:function(a){a=F(a);f.Mb=document.getElementById(a);f.Mb||console.log("sokol_app.h: invalid target:"+a);f.Mb.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Ta:function(){window.removeEventListener("beforeunload",f.cc)},Sa:function(){window.removeEventListener("paste",f.ic)},Ra:function(a){a=
F(a);a=document.getElementById(a);a.removeEventListener("dragenter",f.dc);a.removeEventListener("dragleave",f.ec);a.removeEventListener("dragover",f.fc);a.removeEventListener("drop",f.hc)},v:function(){f.Mb&&f.Mb.requestPointerLock&&f.Mb.requestPointerLock()},Pa:function(a,b,c){var d=document.createElement("canvas");d.width=a;d.height=b;var e=d.getContext("2d"),k=e.createImageData(a,b);k.data.set(E.subarray(c,c+a*b*4));e.putImageData(k,0,0);a=document.createElement("link");a.id="sokol-app-favicon";
a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},m:function(){document.getElementById("_sokol_app_input_element").blur()},w:function(a,b,c,d,e,k){b=F(b);var g=new XMLHttpRequest;g.open("GET",b);g.responseType="arraybuffer";var m=0<d;m&&g.setRequestHeader("Range","bytes="+c+"-"+(c+d-1));g.onreadystatechange=function(){if(this.readyState==this.DONE)if(206==this.status||200==this.status&&!m){var n=new Uint8Array(g.response),p=n.length;p<=k?(E.set(n,e),Mb(a,d,p)):Nb(a)}else Ob(a,
this.status)};g.send()},ea:function(a,b){b=F(b);var c=new XMLHttpRequest;c.open("HEAD",b);c.onreadystatechange=function(){if(this.readyState==this.DONE)if(200==this.status){var d=this.getResponseHeader("Content-Length");Pb(a,d)}else Ob(a,this.status)};c.send()}};
(function(){function a(e){f.asm=e.exports;ka=f.asm.nb;ya();K=f.asm.Gb;Aa.unshift(f.asm.ob);L--;f.monitorRunDependencies&&f.monitorRunDependencies(L);0==L&&(null!==Fa&&(clearInterval(Fa),Fa=null),M&&(e=M,M=null,e()))}function b(e){a(e.instance)}function c(e){return Ja().then(function(k){return WebAssembly.instantiate(k,d)}).then(e,function(k){z("failed to asynchronously prepare wasm: "+k);y(k)})}var d={a:Qb};L++;f.monitorRunDependencies&&f.monitorRunDependencies(L);if(f.instantiateWasm)try{return f.instantiateWasm(d,
a)}catch(e){return z("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return A||"function"!==typeof WebAssembly.instantiateStreaming||Ga()||N.startsWith("file://")||"function"!==typeof fetch?c(b):fetch(N,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(k){z("wasm streaming compile failed: "+k);z("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
f.___wasm_call_ctors=function(){return(f.___wasm_call_ctors=f.asm.ob).apply(null,arguments)};var Lb=f.__sapp_emsc_notify_keyboard_hidden=function(){return(Lb=f.__sapp_emsc_notify_keyboard_hidden=f.asm.pb).apply(null,arguments)};f.__sapp_emsc_onpaste=function(){return(f.__sapp_emsc_onpaste=f.asm.qb).apply(null,arguments)};
var Ib=f.__sapp_html5_get_ask_leave_site=function(){return(Ib=f.__sapp_html5_get_ask_leave_site=f.asm.rb).apply(null,arguments)},Jb=f.__sapp_emsc_begin_drop=function(){return(Jb=f.__sapp_emsc_begin_drop=f.asm.sb).apply(null,arguments)};f.__sapp_emsc_drop=function(){return(f.__sapp_emsc_drop=f.asm.tb).apply(null,arguments)};var Kb=f.__sapp_emsc_end_drop=function(){return(Kb=f.__sapp_emsc_end_drop=f.asm.ub).apply(null,arguments)};
f.__sapp_emsc_invoke_fetch_cb=function(){return(f.__sapp_emsc_invoke_fetch_cb=f.asm.vb).apply(null,arguments)};f._main=function(){return(f._main=f.asm.wb).apply(null,arguments)};f.__saudio_emsc_pull=function(){return(f.__saudio_emsc_pull=f.asm.xb).apply(null,arguments)};
var Pb=f.__sfetch_emsc_head_response=function(){return(Pb=f.__sfetch_emsc_head_response=f.asm.yb).apply(null,arguments)},Mb=f.__sfetch_emsc_get_response=function(){return(Mb=f.__sfetch_emsc_get_response=f.asm.zb).apply(null,arguments)},Ob=f.__sfetch_emsc_failed_http_status=function(){return(Ob=f.__sfetch_emsc_failed_http_status=f.asm.Ab).apply(null,arguments)},Nb=f.__sfetch_emsc_failed_buffer_too_small=function(){return(Nb=f.__sfetch_emsc_failed_buffer_too_small=f.asm.Bb).apply(null,arguments)},R=
f._malloc=function(){return(R=f._malloc=f.asm.Cb).apply(null,arguments)},pa=f.stackSave=function(){return(pa=f.stackSave=f.asm.Db).apply(null,arguments)},qa=f.stackRestore=function(){return(qa=f.stackRestore=f.asm.Eb).apply(null,arguments)},C=f.stackAlloc=function(){return(C=f.stackAlloc=f.asm.Fb).apply(null,arguments)},Rb;function ja(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}M=function Sb(){Rb||Tb();Rb||(M=Sb)};
function Tb(a){function b(){if(!Rb&&(Rb=!0,f.calledRun=!0,!la)){Ka(Aa);Ka(Ba);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if(Ub){var c=a,d=f._main;c=c||[];var e=c.length+1,k=C(4*(e+1));G[k>>2]=ta(aa);for(var g=1;g<e;g++)G[(k>>2)+g]=ta(c[g-1]);G[(k>>2)+e]=0;try{var m=d(e,k);if(!noExitRuntime||0!==m){if(!noExitRuntime){if(f.onExit)f.onExit(m);la=!0}t(m,new ja(m))}}catch(n){n instanceof ja||"unwind"==n||((c=n)&&"object"===typeof n&&n.stack&&(c=[n,n.stack]),z("exception thrown: "+c),t(1,n))}finally{}}if(f.postRun)for("function"==
typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;)c=f.postRun.shift(),Da.unshift(c);Ka(Da)}}a=a||r;if(!(0<L)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Ea();Ka(za);0<L||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},1)):b())}}f.run=Tb;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var Ub=!0;f.noInitialRun&&(Ub=!1);Tb();
