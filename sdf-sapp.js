var f;f||(f=typeof Module !== 'undefined' ? Module : {});var g={},h;for(h in f)f.hasOwnProperty(h)&&(g[h]=f[h]);var m=[],aa="./this.program";function p(a,b){throw b;}var r=!1,v=!1,ba=!1,ca=!1,da=!1;r="object"===typeof window;v="function"===typeof importScripts;ba=(ca="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)&&!r&&!v;da=!r&&!ba&&!v;var w="",ea,x,fa,ha;
if(ba)w=__dirname+"/",ea=function(a,b){fa||(fa=require("fs"));ha||(ha=require("path"));a=ha.normalize(a);return fa.readFileSync(a,b?null:"utf8")},x=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||z("Assertion failed: undefined");return a},1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/")),m=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=f),process.on("uncaughtException",function(a){if(!(a instanceof ia))throw a;}),process.on("unhandledRejection",z),
p=function(a){process.exit(a)},f.inspect=function(){return"[Emscripten Module object]"};else if(da)"undefined"!=typeof read&&(ea=function(a){return read(a)}),x=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");"object"===typeof a||z("Assertion failed: undefined");return a},"undefined"!=typeof scriptArgs?m=scriptArgs:"undefined"!=typeof arguments&&(m=arguments),"function"===typeof quit&&(p=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===
typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(r||v)v?w=self.location.href:document.currentScript&&(w=document.currentScript.src),w=0!==w.indexOf("blob:")?w.substr(0,w.lastIndexOf("/")+1):"",ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},v&&(x=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});
var ja=f.print||console.log.bind(console),A=f.printErr||console.warn.bind(console);for(h in g)g.hasOwnProperty(h)&&(f[h]=g[h]);g=null;f.arguments&&(m=f.arguments);f.thisProgram&&(aa=f.thisProgram);f.quit&&(p=f.quit);var B;f.wasmBinary&&(B=f.wasmBinary);var C;f.noExitRuntime&&(C=f.noExitRuntime);"object"!==typeof WebAssembly&&A("no native wasm support detected");
var D,ka=new WebAssembly.Table({initial:16,maximum:16,element:"anyfunc"}),la=!1,ma="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function E(a,b){if(a){var c=F,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&ma)a=ma.decode(c.subarray(a,b));else{for(d="";a<b;){var e=c[a++];if(e&128){var k=c[a++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|k);else{var l=c[a++]&63;e=224==(e&240)?(e&15)<<12|k<<6|l:(e&7)<<18|k<<12|l<<6|c[a++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}a=d}}else a="";return a}
function G(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var k=0;k<a.length;++k){var l=a.charCodeAt(k);if(55296<=l&&57343>=l){var t=a.charCodeAt(++k);l=65536+((l&1023)<<10)|t&1023}if(127>=l){if(c>=d)break;b[c++]=l}else{if(2047>=l){if(c+1>=d)break;b[c++]=192|l>>6}else{if(65535>=l){if(c+2>=d)break;b[c++]=224|l>>12}else{if(c+3>=d)break;b[c++]=240|l>>18;b[c++]=128|l>>12&63}b[c++]=128|l>>6&63}b[c++]=128|l&63}}b[c]=0;return c-e}
function na(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function oa(a){var b=na(a)+1,c=pa(b);G(a,qa,c,b);return c}function ra(a){0<a%65536&&(a+=65536-a%65536);return a}var buffer,qa,F,sa,H,I,J;
function ta(a){buffer=a;f.HEAP8=qa=new Int8Array(a);f.HEAP16=sa=new Int16Array(a);f.HEAP32=H=new Int32Array(a);f.HEAPU8=F=new Uint8Array(a);f.HEAPU16=new Uint16Array(a);f.HEAPU32=new Uint32Array(a);f.HEAPF32=I=new Float32Array(a);f.HEAPF64=J=new Float64Array(a)}var ua=f.TOTAL_MEMORY||33554432;f.wasmMemory?D=f.wasmMemory:D=new WebAssembly.Memory({initial:ua/65536});D&&(buffer=D.buffer);ua=buffer.byteLength;ta(buffer);H[9544]=5281216;
function va(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.Lb;"number"===typeof c?void 0===b.Bb?f.dynCall_v(c):f.dynCall_vi(c,b.Bb):c(void 0===b.Bb?null:b.Bb)}}}var wa=[],xa=[],ya=[],za=[],Aa=[];function Ba(){var a=f.preRun.shift();wa.unshift(a)}var K=0,Ca=null,L=null;f.preloadedImages={};f.preloadedAudios={};function z(a){if(f.onAbort)f.onAbort(a);ja(a);A(a);la=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}
function Da(){var a=M;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var M="sdf-sapp.wasm";if(!Da()){var Fa=M;M=f.locateFile?f.locateFile(Fa,w):w+Fa}function Ga(){try{if(B)return new Uint8Array(B);if(x)return x(M);throw"both async and sync fetching of the wasm failed";}catch(a){z(a)}}
function Ha(){return B||!r&&!v||"function"!==typeof fetch?new Promise(function(a){a(Ga())}):fetch(M,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+M+"'";return a.arrayBuffer()}).catch(function(){return Ga()})}xa.push({Lb:function(){Ia()}});var Ja=0,Ka=0,N=0,La=0,Ma=0,Na=null,Oa=null,Pa=!1;function Qa(){for(var a=O.length-1;0<=a;--a)Ra(a);O=[];Sa=[]}var Sa=[];
function Ta(){if(Ua&&Va.tb)for(var a=0;a<Sa.length;++a){var b=Sa[a];Sa.splice(a,1);--a;b.Vb.apply(this,b.Pb)}}var Ua=0,Va=null,O=[];function Wa(){return-1!==navigator.userAgent.indexOf("MSIE")||0<navigator.appVersion.indexOf("Trident/")}function Ra(a){var b=O[a];b.target.removeEventListener(b.sb,b.Jb,b.vb);O.splice(a,1)}
function P(a){function b(b){++Ua;Va=a;Ta();a.xb(b);Ta();--Ua}if(a.wb)a.Jb=b,a.target.addEventListener(a.sb,b,a.vb),O.push(a),Pa||(za.push(Qa),Pa=!0);else for(var c=0;c<O.length;++c)O[c].target==a.target&&O[c].sb==a.sb&&Ra(c--)}var Xa=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];
function Q(a){try{if(!a)return window;"number"===typeof a&&(a=Xa[a]||E(a));return"#window"===a?window:"#document"===a?document:"#screen"===a?screen:"#canvas"===a?f.canvas:"string"===typeof a?document.getElementById(a):a}catch(b){return null}}function Ya(a){"number"===typeof a&&(a=E(a));return a&&"#canvas"!==a?"undefined"!==typeof Za&&$a[a]?$a[a]:Q(a):"undefined"!==typeof Za&&$a.canvas?$a.canvas:f.canvas}
function ab(a,b,c,d,e,k){Ja||(Ja=R(164));a={target:Q(a),tb:Wa()?!1:!0,sb:k,wb:d,xb:function(a){a=a||event;var c=Ja;G(a.key?a.key:"",F,c+0,32);G(a.code?a.code:"",F,c+32,32);H[c+64>>2]=a.location;H[c+68>>2]=a.ctrlKey;H[c+72>>2]=a.shiftKey;H[c+76>>2]=a.altKey;H[c+80>>2]=a.metaKey;H[c+84>>2]=a.repeat;G(a.locale?a.locale:"",F,c+88,32);G(a.char?a.char:"",F,c+120,32);H[c+152>>2]=a.charCode;H[c+156>>2]=a.keyCode;H[c+160>>2]=a.which;S(d,e,c,b)&&a.preventDefault()},vb:c};P(a)}
function bb(a,b,c){J[a>>3]=window.performance&&window.performance.now?window.performance.now():Date.now();H[a+8>>2]=b.screenX;H[a+12>>2]=b.screenY;H[a+16>>2]=b.clientX;H[a+20>>2]=b.clientY;H[a+24>>2]=b.ctrlKey;H[a+28>>2]=b.shiftKey;H[a+32>>2]=b.altKey;H[a+36>>2]=b.metaKey;sa[a+40>>1]=b.button;sa[a+42>>1]=b.buttons;H[a+44>>2]=b.movementX||b.mozMovementX||b.webkitMovementX||b.screenX-Na;H[a+48>>2]=b.movementY||b.mozMovementY||b.webkitMovementY||b.screenY-Oa;if(f.canvas){var d=f.canvas.getBoundingClientRect();
H[a+60>>2]=b.clientX-d.left;H[a+64>>2]=b.clientY-d.top}else H[a+60>>2]=0,H[a+64>>2]=0;c?(d=c.getBoundingClientRect?c.getBoundingClientRect():{left:0,top:0},H[a+52>>2]=b.clientX-d.left,H[a+56>>2]=b.clientY-d.top):(H[a+52>>2]=0,H[a+56>>2]=0);"wheel"!==b.type&&"mousewheel"!==b.type&&(Na=b.screenX,Oa=b.screenY)}
function cb(a,b,c,d,e,k){Ka||(Ka=R(72));a=Q(a);c={target:a,tb:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,sb:k,wb:d,xb:function(c){c=c||event;bb(Ka,c,a);S(d,e,Ka,b)&&c.preventDefault()},vb:c};Wa()&&"mousedown"==k&&(c.tb=!1);P(c)}
function db(a,b,c,d){La||(La=R(36));a=Q(a);P({target:a,tb:!1,sb:"resize",wb:d,xb:function(c){c=c||event;if(c.target==a){var e=0<pageXOffset||0<pageYOffset?[pageXOffset,pageYOffset]:"undefined"!==typeof document.documentElement.scrollLeft||"undefined"!==typeof document.documentElement.scrollTop?[document.documentElement.scrollLeft,document.documentElement.scrollTop]:[document.body.scrollLeft|0,document.body.scrollTop|0],l=La;H[l>>2]=c.detail;H[l+4>>2]=document.body.clientWidth;H[l+8>>2]=document.body.clientHeight;
H[l+12>>2]=innerWidth;H[l+16>>2]=innerHeight;H[l+20>>2]=outerWidth;H[l+24>>2]=outerHeight;H[l+28>>2]=e[0];H[l+32>>2]=e[1];S(d,10,l,b)&&c.preventDefault()}},vb:c})}
function eb(a,b,c,d,e,k){Ma||(Ma=R(1684));a=Q(a);P({target:a,tb:"touchstart"==k||"touchend"==k,sb:k,wb:d,xb:function(c){c=c||event;for(var k={},l=0;l<c.touches.length;++l){var q=c.touches[l];q.Db=!1;k[q.identifier]=q}for(l=0;l<c.changedTouches.length;++l)q=c.changedTouches[l],k[q.identifier]=q,q.Db=!0;for(l=0;l<c.targetTouches.length;++l)q=c.targetTouches[l],k[q.identifier].Nb=!0;var n=q=Ma;H[n+4>>2]=c.ctrlKey;H[n+8>>2]=c.shiftKey;H[n+12>>2]=c.altKey;H[n+16>>2]=c.metaKey;n+=20;var Ea=f.canvas?f.canvas.getBoundingClientRect():
void 0,hb=a.getBoundingClientRect?a.getBoundingClientRect():{left:0,top:0},ib=0;for(l in k){var y=k[l];H[n>>2]=y.identifier;H[n+4>>2]=y.screenX;H[n+8>>2]=y.screenY;H[n+12>>2]=y.clientX;H[n+16>>2]=y.clientY;H[n+20>>2]=y.pageX;H[n+24>>2]=y.pageY;H[n+28>>2]=y.Db;H[n+32>>2]=y.Nb;Ea?(H[n+44>>2]=y.clientX-Ea.left,H[n+48>>2]=y.clientY-Ea.top):(H[n+44>>2]=0,H[n+48>>2]=0);H[n+36>>2]=y.clientX-hb.left;H[n+40>>2]=y.clientY-hb.top;n+=52;if(32<=++ib)break}H[q>>2]=ib;S(d,e,q,b)&&c.preventDefault()},vb:c})}
function fb(a,b,c,d,e,k){a||(a=f.canvas);a={target:Q(a),tb:!1,sb:k,wb:d,xb:function(a){a=a||event;S(d,e,0,b)&&a.preventDefault()},vb:c};P(a)}
function gb(a,b,c,d,e){function k(c){c=c||event;bb(N,c,a);J[N+72>>3]=c.wheelDeltaX||0;J[N+80>>3]=-(c.wheelDeltaY||c.wheelDelta);J[N+88>>3]=0;H[N+96>>2]=0;S(d,9,N,b)&&c.preventDefault()}function l(c){c=c||event;var e=N;bb(e,c,a);J[e+72>>3]=c.deltaX;J[e+80>>3]=c.deltaY;J[e+88>>3]=c.deltaZ;H[e+96>>2]=c.deltaMode;S(d,9,e,b)&&c.preventDefault()}N||(N=R(104));P({target:a,tb:!0,sb:e,wb:d,xb:"wheel"==e?l:k,vb:c})}
var jb=1,kb=0,lb=[],T=[],mb=[],nb=[],ob=[],U=[],V=[],pb=[],qb={},W=null,$a={},rb={},sb={},tb={};function X(a){kb||(kb=a)}function ub(a){for(var b=jb++,c=a.length;c<b;c++)a[c]=null;return b}var vb=null,Y=[0];
function wb(a,b){function c(){var a=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);return a?parseInt(a[2],10):!1}var d=R(8),e={handle:d,attributes:b,version:b.Hb,Ab:a};e.ub=2<=e.version&&(!1===c()||58<=c());a.canvas&&(a.canvas.Ob=e);qb[d]=e;("undefined"===typeof b.Gb||b.Gb)&&xb(e);return d}
function yb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(a,d){b.vertexAttribDivisorANGLE(a,d)},a.drawArraysInstanced=function(a,d,e,k){b.drawArraysInstancedANGLE(a,d,e,k)},a.drawElementsInstanced=function(a,d,e,k,l){b.drawElementsInstancedANGLE(a,d,e,k,l)})}
function zb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(a){b.deleteVertexArrayOES(a)},a.bindVertexArray=function(a){b.bindVertexArrayOES(a)},a.isVertexArray=function(a){return b.isVertexArrayOES(a)})}function Ab(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(a,d){b.drawBuffersWEBGL(a,d)})}
function xb(a){a||(a=W);if(!a.Mb){a.Mb=!0;var b=a.Ab;2>a.version&&(yb(b),zb(b),Ab(b));b.Rb=b.getExtension("EXT_disjoint_timer_query");var c="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2".split(" ");
(b.getSupportedExtensions()||[]).forEach(function(a){-1!=c.indexOf(a)&&b.getExtension(a)})}}var Za={},Bb,Cb,Db=["default","low-power","high-performance"],Eb=[];function Fb(a,b,c,d){for(var e=0;e<a;e++){var k=Z[c](),l=k&&ub(d);k?(k.name=l,d[l]=k):X(1282);H[b+4*e>>2]=l}}
function Gb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=Z.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>W.version){X(1282);return}c=2*(Z.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>W.version){X(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=Z.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":X(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 35097:case 36389:case 34068:c=
0;break;default:X(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)H[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){X(1280);A("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:X(1280);A("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}H[b>>2]=c}else X(1281)}
function Hb(a){var b=na(a)+1,c=R(b);G(a,F,c,b);return c}var Z;vb=new Float32Array(256);for(var Ib=0;256>Ib;Ib++)Y[Ib]=vb.subarray(0,Ib+1);for(var Jb=0;32>Jb;Jb++)Eb.push(Array(Jb));
var Qb={Q:function(){return devicePixelRatio||1},R:function(a,b,c){a=a?Q(a):f.canvas;if(!a)return-4;a.getBoundingClientRect?(a=a.getBoundingClientRect(),J[b>>3]=a.right-a.left,J[c>>3]=a.bottom-a.top):(J[b>>3]=a.clientWidth,J[c>>3]=a.clientHeight);return 0},S:function(a,b,c){F.set(F.subarray(b,b+c),a)},Fa:function(a,b){function c(d){Kb(a,d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},T:function(a){if(2147418112<a)return!1;for(var b=Math.max(qa.length,16777216);b<a;)536870912>=b?b=
ra(2*b):b=Math.min(ra((3*b+2147483648)/4),2147418112);a:{try{D.grow(b-buffer.byteLength+65535>>16);ta(D.buffer);var c=1;break a}catch(d){}c=void 0}return c?!0:!1},O:function(a,b,c){a=Ya(a);if(!a)return-4;a.width=b;a.height=c;return 0},Oa:function(a,b,c,d){ab(a,b,c,d,2,"keydown");return 0},Ma:function(a,b,c,d){ab(a,b,c,d,1,"keypress");return 0},Na:function(a,b,c,d){ab(a,b,c,d,3,"keyup");return 0},fa:function(a,b,c,d){cb(a,b,c,d,5,"mousedown");return 0},Ra:function(a,b,c,d){cb(a,b,c,d,33,"mouseenter");
return 0},Qa:function(a,b,c,d){cb(a,b,c,d,34,"mouseleave");return 0},Sa:function(a,b,c,d){cb(a,b,c,d,8,"mousemove");return 0},Y:function(a,b,c,d){cb(a,b,c,d,6,"mouseup");return 0},Ta:function(a,b,c,d){db(a,b,c,d);return 0},Ia:function(a,b,c,d){eb(a,b,c,d,25,"touchcancel");return 0},Ja:function(a,b,c,d){eb(a,b,c,d,23,"touchend");return 0},Ka:function(a,b,c,d){eb(a,b,c,d,24,"touchmove");return 0},La:function(a,b,c,d){eb(a,b,c,d,22,"touchstart");return 0},Ha:function(a,b,c,d){fb(a,b,c,d,31,"webglcontextlost");
return 0},Ga:function(a,b,c,d){fb(a,b,c,d,32,"webglcontextrestored");return 0},Pa:function(a,b,c,d){a=Q(a);return"undefined"!==typeof a.onwheel?(gb(a,b,c,d,"wheel"),0):"undefined"!==typeof a.onmousewheel?(gb(a,b,c,d,"mousewheel"),0):-1},G:function(a,b){var c={};b>>=2;c.alpha=!!H[b];c.depth=!!H[b+1];c.stencil=!!H[b+2];c.antialias=!!H[b+3];c.premultipliedAlpha=!!H[b+4];c.preserveDrawingBuffer=!!H[b+5];c.powerPreference=Db[H[b+6]];c.failIfMajorPerformanceCaveat=!!H[b+7];c.Hb=H[b+8];c.Sb=H[b+9];c.Gb=
H[b+10];c.Kb=H[b+11];c.Tb=H[b+12];c.Ub=H[b+13];a=Ya(a);!a||c.Kb?c=0:c=(a=1<c.Hb?a.getContext("webgl2",c):a.getContext("webgl",c)||a.getContext("experimental-webgl",c))?wb(a,c):0;return c},ma:function(a,b){a=qb[a];b=E(b);0==b.indexOf("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b?yb(Z):"OES_vertex_array_object"==b?zb(Z):"WEBGL_draw_buffers"==b&&Ab(Z);return!!a.Ab.getExtension(b)},xa:function(a){a>>=2;for(var b=0;14>b;++b)H[a+b]=0;H[a]=H[a+1]=H[a+3]=H[a+4]=H[a+8]=H[a+10]=1},oa:function(a){W=qb[a];
f.Qb=Z=W&&W.Ab;return!a||Z?0:-5},o:function(a){Z.activeTexture(a)},I:function(a,b){Z.attachShader(T[a],V[b])},c:function(a,b){35051==a?Z.Eb=b:35052==a&&(Z.Fb=b);Z.bindBuffer(a,lb[b])},f:function(a,b){Z.bindFramebuffer(a,mb[b])},a:function(a,b){Z.bindTexture(a,ob[b])},P:function(a){Z.bindVertexArray(pb[a])},A:function(a,b,c,d){Z.blendColor(a,b,c,d)},B:function(a,b){Z.blendEquationSeparate(a,b)},C:function(a,b,c,d){Z.blendFuncSeparate(a,b,c,d)},l:function(a,b,c,d,e,k,l,t,u,q){Z.blitFramebuffer(a,b,
c,d,e,k,l,t,u,q)},K:function(a,b,c,d){W.ub?c?Z.bufferData(a,F,d,c,b):Z.bufferData(a,b,d):Z.bufferData(a,c?F.subarray(c,c+b):b,d)},J:function(a,b,c,d){W.ub?Z.bufferSubData(a,b,F,d,c):Z.bufferSubData(a,b,F.subarray(d,d+c))},F:function(a){Z.clear(a)},qa:function(a,b,c,d){Z.clearColor(a,b,c,d)},pa:function(a){Z.clearDepth(a)},na:function(a){Z.clearStencil(a)},s:function(a,b,c,d){Z.colorMask(!!a,!!b,!!c,!!d)},V:function(a){Z.compileShader(V[a])},wa:function(){var a=ub(T),b=Z.createProgram();b.name=a;T[a]=
b;return a},X:function(a){var b=ub(V);V[b]=Z.createShader(a);return b},z:function(a){Z.cullFace(a)},za:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],e=lb[d];e&&(Z.deleteBuffer(e),e.name=0,lb[d]=null,d==Bb&&(Bb=0),d==Cb&&(Cb=0),d==Z.Eb&&(Z.Eb=0),d==Z.Fb&&(Z.Fb=0))}},g:function(a,b){for(var c=0;c<a;++c){var d=H[b+4*c>>2],e=mb[d];e&&(Z.deleteFramebuffer(e),e.name=0,mb[d]=null)}},M:function(a){if(a){var b=T[a];b?(Z.deleteProgram(b),b.name=0,T[a]=null,rb[a]=null):X(1281)}},N:function(a,b){for(var c=
0;c<a;c++){var d=H[b+4*c>>2],e=nb[d];e&&(Z.deleteRenderbuffer(e),e.name=0,nb[d]=null)}},t:function(a){if(a){var b=V[a];b?(Z.deleteShader(b),V[a]=null):X(1281)}},ya:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],e=ob[d];e&&(Z.deleteTexture(e),e.name=0,ob[d]=null)}},Aa:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2];Z.deleteVertexArray(pb[d]);pb[d]=null}},q:function(a){Z.depthFunc(a)},r:function(a){Z.depthMask(!!a)},b:function(a){Z.disable(a)},v:function(a){Z.disableVertexAttribArray(a)},
aa:function(a,b,c){Z.drawArrays(a,b,c)},n:function(a,b){for(var c=Eb[a],d=0;d<a;d++)c[d]=H[b+4*d>>2];Z.drawBuffers(c)},ba:function(a,b,c,d){Z.drawElements(a,b,c,d)},e:function(a){Z.enable(a)},ia:function(a){Z.enableVertexAttribArray(a)},y:function(a){Z.frontFace(a)},L:function(a,b){Fb(a,b,"createBuffer",lb)},Ba:function(a,b){Fb(a,b,"createVertexArray",pb)},ta:function(a,b){return Z.getAttribLocation(T[a],E(b))},d:function(a,b){Gb(a,b)},ua:function(a,b,c,d){a=Z.getProgramInfoLog(T[a]);null===a&&(a=
"(unknown error)");b=0<b&&d?G(a,F,d,b):0;c&&(H[c>>2]=b)},H:function(a,b,c){if(c)if(a>=jb)X(1281);else{var d=rb[a];if(d)if(35716==b)a=Z.getProgramInfoLog(T[a]),null===a&&(a="(unknown error)"),H[c>>2]=a.length+1;else if(35719==b)H[c>>2]=d.Cb;else if(35722==b){if(-1==d.yb){a=T[a];var e=Z.getProgramParameter(a,35721);for(b=d.yb=0;b<e;++b)d.yb=Math.max(d.yb,Z.getActiveAttrib(a,b).name.length+1)}H[c>>2]=d.yb}else if(35381==b){if(-1==d.zb)for(a=T[a],e=Z.getProgramParameter(a,35382),b=d.zb=0;b<e;++b)d.zb=
Math.max(d.zb,Z.getActiveUniformBlockName(a,b).length+1);H[c>>2]=d.zb}else H[c>>2]=Z.getProgramParameter(T[a],b);else X(1282)}else X(1281)},U:function(a,b,c,d){a=Z.getShaderInfoLog(V[a]);null===a&&(a="(unknown error)");b=0<b&&d?G(a,F,d,b):0;c&&(H[c>>2]=b)},u:function(a,b,c){c?35716==b?(a=Z.getShaderInfoLog(V[a]),null===a&&(a="(unknown error)"),H[c>>2]=a.length+1):35720==b?(a=Z.getShaderSource(V[a]),H[c>>2]=null===a||0==a.length?0:a.length+1):H[c>>2]=Z.getShaderParameter(V[a],b):X(1281)},Da:function(a){if(sb[a])return sb[a];
switch(a){case 7939:var b=Z.getSupportedExtensions()||[];b=b.concat(b.map(function(a){return"GL_"+a}));b=Hb(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Z.getParameter(a))||X(1280);b=Hb(b);break;case 7938:b=Z.getParameter(Z.VERSION);b=2<=W.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Hb(b);break;case 35724:b=Z.getParameter(Z.SHADING_LANGUAGE_VERSION);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+
c[1]+" ("+b+")");b=Hb(b);break;default:return X(1280),0}return sb[a]=b},Ca:function(a,b){if(2>W.version)return X(1282),0;var c=tb[a];if(c)return 0>b||b>=c.length?(X(1281),0):c[b];switch(a){case 7939:return c=Z.getSupportedExtensions()||[],c=c.concat(c.map(function(a){return"GL_"+a})),c=c.map(function(a){return Hb(a)}),c=tb[a]=c,0>b||b>=c.length?(X(1281),0):c[b];default:return X(1280),0}},h:function(a,b){b=E(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+
1)):0;b=b.slice(0,d)}return(a=rb[a]&&rb[a].Ib[b])&&0<=c&&c<a[0]?a[1]+c:-1},va:function(a){Z.linkProgram(T[a]);var b=T[a];a=rb[a]={Ib:{},Cb:0,yb:-1,zb:-1};for(var c=a.Ib,d=Z.getProgramParameter(b,35718),e=0;e<d;++e){var k=Z.getActiveUniform(b,e),l=k.name;a.Cb=Math.max(a.Cb,l.length+1);"]"==l.slice(-1)&&(l=l.slice(0,l.lastIndexOf("[")));var t=Z.getUniformLocation(b,l);if(t){var u=ub(U);c[l]=[k.size,u];U[u]=t;for(var q=1;q<k.size;++q)t=Z.getUniformLocation(b,l+"["+q+"]"),u=ub(U),U[u]=t}}},x:function(a,
b){Z.polygonOffset(a,b)},m:function(a){Z.readBuffer(a)},ra:function(a,b,c,d){Z.scissor(a,b,c,d)},W:function(a,b,c,d){for(var e="",k=0;k<b;++k){var l=d?H[d+4*k>>2]:-1;e+=E(H[c+4*k>>2],0>l?void 0:l)}Z.shaderSource(V[a],e)},$:function(a,b,c){Z.stencilFunc(a,b,c)},E:function(a,b,c,d){Z.stencilFuncSeparate(a,b,c,d)},p:function(a){Z.stencilMask(a)},_:function(a,b,c){Z.stencilOp(a,b,c)},D:function(a,b,c,d){Z.stencilOpSeparate(a,b,c,d)},ha:function(a,b,c){if(W.ub)Z.uniform1fv(U[a],I,c>>2,b);else{if(256>=
b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=I[c+4*e>>2];else d=I.subarray(c>>2,c+4*b>>2);Z.uniform1fv(U[a],d)}},w:function(a,b){Z.uniform1i(U[a],b)},ga:function(a,b,c){if(W.ub)Z.uniform2fv(U[a],I,c>>2,2*b);else{if(256>=2*b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=I[c+4*e>>2],d[e+1]=I[c+(4*e+4)>>2];else d=I.subarray(c>>2,c+8*b>>2);Z.uniform2fv(U[a],d)}},ea:function(a,b,c){if(W.ub)Z.uniform3fv(U[a],I,c>>2,3*b);else{if(256>=3*b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=I[c+4*e>>2],d[e+1]=I[c+(4*e+4)>>2],d[e+2]=I[c+
(4*e+8)>>2];else d=I.subarray(c>>2,c+12*b>>2);Z.uniform3fv(U[a],d)}},da:function(a,b,c){if(W.ub)Z.uniform4fv(U[a],I,c>>2,4*b);else{if(256>=4*b)for(var d=Y[4*b-1],e=0;e<4*b;e+=4)d[e]=I[c+4*e>>2],d[e+1]=I[c+(4*e+4)>>2],d[e+2]=I[c+(4*e+8)>>2],d[e+3]=I[c+(4*e+12)>>2];else d=I.subarray(c>>2,c+16*b>>2);Z.uniform4fv(U[a],d)}},ca:function(a,b,c,d){if(W.ub)Z.uniformMatrix4fv(U[a],!!c,I,d>>2,16*b);else{if(256>=16*b)for(var e=Y[16*b-1],k=0;k<16*b;k+=16)e[k]=I[d+4*k>>2],e[k+1]=I[d+(4*k+4)>>2],e[k+2]=I[d+(4*k+
8)>>2],e[k+3]=I[d+(4*k+12)>>2],e[k+4]=I[d+(4*k+16)>>2],e[k+5]=I[d+(4*k+20)>>2],e[k+6]=I[d+(4*k+24)>>2],e[k+7]=I[d+(4*k+28)>>2],e[k+8]=I[d+(4*k+32)>>2],e[k+9]=I[d+(4*k+36)>>2],e[k+10]=I[d+(4*k+40)>>2],e[k+11]=I[d+(4*k+44)>>2],e[k+12]=I[d+(4*k+48)>>2],e[k+13]=I[d+(4*k+52)>>2],e[k+14]=I[d+(4*k+56)>>2],e[k+15]=I[d+(4*k+60)>>2];else e=I.subarray(d>>2,d+64*b>>2);Z.uniformMatrix4fv(U[a],!!c,e)}},la:function(a){Z.useProgram(T[a])},ja:function(a,b){Z.vertexAttribDivisor(a,b)},ka:function(a,b,c,d,e,k){Z.vertexAttribPointer(a,
b,c,!!d,e,k)},sa:function(a,b,c,d){Z.viewport(a,b,c,d)},memory:D,k:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Lb()});document.body.append(a)},j:function(){document.getElementById("_sokol_app_input_element").focus()},Ea:function(){window.addEventListener("beforeunload",function(a){0!=Mb()&&(a.preventDefault(),a.returnValue=" ")})},i:function(){document.getElementById("_sokol_app_input_element").blur()},
Z:function(a,b,c,d,e,k){b=E(b);var l=new XMLHttpRequest;l.open("GET",b);l.responseType="arraybuffer";var t=0<d;t&&l.setRequestHeader("Range","bytes="+c+"-"+(c+d));l.onreadystatechange=function(){if(this.readyState==this.DONE)if(206==this.status||200==this.status&&!t){var b=new Uint8Array(l.response),c=b.length;c<=k?(F.set(b,e),Nb(a,d,c)):Ob(a)}else Pb(a,this.status)};l.send()},table:ka},Rb=function(){function a(a){f.asm=a.exports;K--;f.monitorRunDependencies&&f.monitorRunDependencies(K);0==K&&(null!==
Ca&&(clearInterval(Ca),Ca=null),L&&(a=L,L=null,a()))}function b(b){a(b.instance)}function c(a){return Ha().then(function(a){return WebAssembly.instantiate(a,d)}).then(a,function(a){A("failed to asynchronously prepare wasm: "+a);z(a)})}var d={env:Qb,wasi_unstable:Qb};K++;f.monitorRunDependencies&&f.monitorRunDependencies(K);if(f.instantiateWasm)try{return f.instantiateWasm(d,a)}catch(e){return A("Module.instantiateWasm callback failed with error: "+e),!1}(function(){if(B||"function"!==typeof WebAssembly.instantiateStreaming||
Da()||"function"!==typeof fetch)return c(b);fetch(M,{credentials:"same-origin"}).then(function(a){return WebAssembly.instantiateStreaming(a,d).then(b,function(a){A("wasm streaming compile failed: "+a);A("falling back to ArrayBuffer instantiation");c(b)})})})();return{}}();f.asm=Rb;var Ia=f.___wasm_call_ctors=function(){return f.asm.Ua.apply(null,arguments)},Lb=f.__sapp_emsc_notify_keyboard_hidden=function(){return f.asm.Va.apply(null,arguments)};
f.___em_js__sapp_js_create_textfield=function(){return f.asm.Wa.apply(null,arguments)};f.___em_js__sapp_js_focus_textfield=function(){return f.asm.Xa.apply(null,arguments)};f.___em_js__sapp_js_unfocus_textfield=function(){return f.asm.Ya.apply(null,arguments)};var Mb=f.__sapp_html5_get_ask_leave_site=function(){return f.asm.Za.apply(null,arguments)};f.___em_js__sapp_js_hook_beforeunload=function(){return f.asm._a.apply(null,arguments)};f._main=function(){return f.asm.$a.apply(null,arguments)};
var R=f._malloc=function(){return f.asm.ab.apply(null,arguments)};f._free=function(){return f.asm.bb.apply(null,arguments)};f.___em_js__stm_js_perfnow=function(){return f.asm.cb.apply(null,arguments)};f.__saudio_emsc_pull=function(){return f.asm.db.apply(null,arguments)};f.___em_js__saudio_js_init=function(){return f.asm.eb.apply(null,arguments)};f.___em_js__saudio_js_sample_rate=function(){return f.asm.fb.apply(null,arguments)};
f.___em_js__saudio_js_buffer_frames=function(){return f.asm.gb.apply(null,arguments)};f.___em_js__sfetch_js_send_head_request=function(){return f.asm.hb.apply(null,arguments)};f.___em_js__sfetch_js_send_get_request=function(){return f.asm.ib.apply(null,arguments)};f.__sfetch_emsc_head_response=function(){return f.asm.jb.apply(null,arguments)};
var Nb=f.__sfetch_emsc_get_response=function(){return f.asm.kb.apply(null,arguments)},Pb=f.__sfetch_emsc_failed_http_status=function(){return f.asm.lb.apply(null,arguments)},Ob=f.__sfetch_emsc_failed_buffer_too_small=function(){return f.asm.mb.apply(null,arguments)},pa=f.stackAlloc=function(){return f.asm.nb.apply(null,arguments)};f.dynCall_vi=function(){return f.asm.ob.apply(null,arguments)};f.dynCall_v=function(){return f.asm.pb.apply(null,arguments)};
var S=f.dynCall_iiii=function(){return f.asm.qb.apply(null,arguments)},Kb=f.dynCall_idi=function(){return f.asm.rb.apply(null,arguments)};f.asm=Rb;var Sb;function ia(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}L=function Tb(){Sb||Ub();Sb||(L=Tb)};
function Ub(a){function b(){if(!Sb&&(Sb=!0,!la)){va(xa);va(ya);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if(Vb){var b=a,d=f._main;b=b||[];var e=b.length+1,k=pa(4*(e+1));H[k>>2]=oa(aa);for(var l=1;l<e;l++)H[(k>>2)+l]=oa(b[l-1]);H[(k>>2)+e]=0;try{var t=d(e,k);if(!C||0!==t){if(!C&&(la=!0,f.onExit))f.onExit(t);p(t,new ia(t))}}catch(u){u instanceof ia||("SimulateInfiniteLoop"==u?C=!0:((b=u)&&"object"===typeof u&&u.stack&&(b=[u,u.stack]),A("exception thrown: "+b),p(1,u)))}finally{}}if(f.postRun)for("function"==
typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;)b=f.postRun.shift(),Aa.unshift(b);va(Aa)}}a=a||m;if(!(0<K)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Ba();va(wa);0<K||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},1)):b())}}f.run=Ub;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var Vb=!0;f.noInitialRun&&(Vb=!1);C=!0;Ub();
