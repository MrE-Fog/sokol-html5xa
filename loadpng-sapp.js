var f;f||(f=typeof Module !== 'undefined' ? Module : {});var g={},k;for(k in f)f.hasOwnProperty(k)&&(g[k]=f[k]);var m=[],aa="./this.program";function q(a,b){throw b;}var t=!1,v=!1,ba=!1,ca=!1,da=!1;t="object"===typeof window;v="function"===typeof importScripts;ba=(ca="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)&&!t&&!v;da=!t&&!ba&&!v;var w="",ea,x,fa,ha;
if(ba)w=__dirname+"/",ea=function(a,b){fa||(fa=require("fs"));ha||(ha=require("path"));a=ha.normalize(a);return fa.readFileSync(a,b?null:"utf8")},x=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||z("Assertion failed: undefined");return a},1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/")),m=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=f),process.on("uncaughtException",function(a){if(!(a instanceof ia))throw a;}),process.on("unhandledRejection",z),
q=function(a){process.exit(a)},f.inspect=function(){return"[Emscripten Module object]"};else if(da)"undefined"!=typeof read&&(ea=function(a){return read(a)}),x=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");"object"===typeof a||z("Assertion failed: undefined");return a},"undefined"!=typeof scriptArgs?m=scriptArgs:"undefined"!=typeof arguments&&(m=arguments),"function"===typeof quit&&(q=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===
typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(t||v)v?w=self.location.href:document.currentScript&&(w=document.currentScript.src),w=0!==w.indexOf("blob:")?w.substr(0,w.lastIndexOf("/")+1):"",ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},v&&(x=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});
var ja=f.print||console.log.bind(console),A=f.printErr||console.warn.bind(console);for(k in g)g.hasOwnProperty(k)&&(f[k]=g[k]);g=null;f.arguments&&(m=f.arguments);f.thisProgram&&(aa=f.thisProgram);f.quit&&(q=f.quit);var B;f.wasmBinary&&(B=f.wasmBinary);var C;f.noExitRuntime&&(C=f.noExitRuntime);"object"!==typeof WebAssembly&&A("no native wasm support detected");
var D,ka=new WebAssembly.Table({initial:25,maximum:25,element:"anyfunc"}),la=!1,ma="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function E(a,b){if(a){var c=F,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&ma)a=ma.decode(c.subarray(a,b));else{for(d="";a<b;){var e=c[a++];if(e&128){var h=c[a++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|h);else{var l=c[a++]&63;e=224==(e&240)?(e&15)<<12|h<<6|l:(e&7)<<18|h<<12|l<<6|c[a++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}a=d}}else a="";return a}
function G(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var h=0;h<a.length;++h){var l=a.charCodeAt(h);if(55296<=l&&57343>=l){var n=a.charCodeAt(++h);l=65536+((l&1023)<<10)|n&1023}if(127>=l){if(c>=d)break;b[c++]=l}else{if(2047>=l){if(c+1>=d)break;b[c++]=192|l>>6}else{if(65535>=l){if(c+2>=d)break;b[c++]=224|l>>12}else{if(c+3>=d)break;b[c++]=240|l>>18;b[c++]=128|l>>12&63}b[c++]=128|l>>6&63}b[c++]=128|l&63}}b[c]=0;return c-e}
function na(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function oa(a){var b=na(a)+1,c=pa(b);G(a,H,c,b);return c}function qa(a){0<a%65536&&(a+=65536-a%65536);return a}var buffer,H,F,ra,sa,I,ta,J,K;
function ua(a){buffer=a;f.HEAP8=H=new Int8Array(a);f.HEAP16=ra=new Int16Array(a);f.HEAP32=I=new Int32Array(a);f.HEAPU8=F=new Uint8Array(a);f.HEAPU16=sa=new Uint16Array(a);f.HEAPU32=ta=new Uint32Array(a);f.HEAPF32=J=new Float32Array(a);f.HEAPF64=K=new Float64Array(a)}var va=f.TOTAL_MEMORY||33554432;f.wasmMemory?D=f.wasmMemory:D=new WebAssembly.Memory({initial:va/65536});D&&(buffer=D.buffer);va=buffer.byteLength;ua(buffer);I[73304]=5536256;
function wa(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.Xb;"number"===typeof c?void 0===b.Ob?f.dynCall_v(c):f.dynCall_vi(c,b.Ob):c(void 0===b.Ob?null:b.Ob)}}}var xa=[],ya=[],za=[],Aa=[],Ba=[];function Ca(){var a=f.preRun.shift();xa.unshift(a)}var L=0,Da=null,Ea=null;f.preloadedImages={};f.preloadedAudios={};function z(a){if(f.onAbort)f.onAbort(a);ja(a);A(a);la=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}
function Fa(){var a=M;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var M="loadpng-sapp.wasm";if(!Fa()){var Ga=M;M=f.locateFile?f.locateFile(Ga,w):w+Ga}function Ha(){try{if(B)return new Uint8Array(B);if(x)return x(M);throw"both async and sync fetching of the wasm failed";}catch(a){z(a)}}
function Ia(){return B||!t&&!v||"function"!==typeof fetch?new Promise(function(a){a(Ha())}):fetch(M,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+M+"'";return a.arrayBuffer()}).catch(function(){return Ha()})}ya.push({Xb:function(){Ka()}});var La=0,Ma=0,N=0,Na=0,Oa=0,Pa=null,Qa=null,Ra=!1;function Sa(){for(var a=O.length-1;0<=a;--a)Ta(a);O=[];Ua=[]}var Ua=[];
function Va(){if(Wa&&Xa.Gb)for(var a=0;a<Ua.length;++a){var b=Ua[a];Ua.splice(a,1);--a;b.hc.apply(this,b.ac)}}var Wa=0,Xa=null,O=[];function Ya(){return-1!==navigator.userAgent.indexOf("MSIE")||0<navigator.appVersion.indexOf("Trident/")}function Ta(a){var b=O[a];b.target.removeEventListener(b.Fb,b.Vb,b.Hb);O.splice(a,1)}
function P(a){function b(b){++Wa;Xa=a;Va();a.Kb(b);Va();--Wa}if(a.Ib)a.Vb=b,a.target.addEventListener(a.Fb,b,a.Hb),O.push(a),Ra||(Aa.push(Sa),Ra=!0);else for(var c=0;c<O.length;++c)O[c].target==a.target&&O[c].Fb==a.Fb&&Ta(c--)}var Za=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];
function Q(a){try{if(!a)return window;"number"===typeof a&&(a=Za[a]||E(a));return"#window"===a?window:"#document"===a?document:"#screen"===a?screen:"#canvas"===a?f.canvas:"string"===typeof a?document.getElementById(a):a}catch(b){return null}}function $a(a){"number"===typeof a&&(a=E(a));return a&&"#canvas"!==a?"undefined"!==typeof ab&&bb[a]?bb[a]:Q(a):"undefined"!==typeof ab&&bb.canvas?bb.canvas:f.canvas}
function cb(a,b,c,d,e,h){La||(La=R(164));a={target:Q(a),Gb:Ya()?!1:!0,Fb:h,Ib:d,Kb:function(a){a=a||event;var c=La;G(a.key?a.key:"",F,c+0,32);G(a.code?a.code:"",F,c+32,32);I[c+64>>2]=a.location;I[c+68>>2]=a.ctrlKey;I[c+72>>2]=a.shiftKey;I[c+76>>2]=a.altKey;I[c+80>>2]=a.metaKey;I[c+84>>2]=a.repeat;G(a.locale?a.locale:"",F,c+88,32);G(a.char?a.char:"",F,c+120,32);I[c+152>>2]=a.charCode;I[c+156>>2]=a.keyCode;I[c+160>>2]=a.which;S(d,e,c,b)&&a.preventDefault()},Hb:c};P(a)}
function db(a,b,c){K[a>>3]=window.performance&&window.performance.now?window.performance.now():Date.now();I[a+8>>2]=b.screenX;I[a+12>>2]=b.screenY;I[a+16>>2]=b.clientX;I[a+20>>2]=b.clientY;I[a+24>>2]=b.ctrlKey;I[a+28>>2]=b.shiftKey;I[a+32>>2]=b.altKey;I[a+36>>2]=b.metaKey;ra[a+40>>1]=b.button;ra[a+42>>1]=b.buttons;I[a+44>>2]=b.movementX||b.mozMovementX||b.webkitMovementX||b.screenX-Pa;I[a+48>>2]=b.movementY||b.mozMovementY||b.webkitMovementY||b.screenY-Qa;if(f.canvas){var d=f.canvas.getBoundingClientRect();
I[a+60>>2]=b.clientX-d.left;I[a+64>>2]=b.clientY-d.top}else I[a+60>>2]=0,I[a+64>>2]=0;c?(d=c.getBoundingClientRect?c.getBoundingClientRect():{left:0,top:0},I[a+52>>2]=b.clientX-d.left,I[a+56>>2]=b.clientY-d.top):(I[a+52>>2]=0,I[a+56>>2]=0);"wheel"!==b.type&&"mousewheel"!==b.type&&(Pa=b.screenX,Qa=b.screenY)}
function eb(a,b,c,d,e,h){Ma||(Ma=R(72));a=Q(a);c={target:a,Gb:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,Fb:h,Ib:d,Kb:function(c){c=c||event;db(Ma,c,a);S(d,e,Ma,b)&&c.preventDefault()},Hb:c};Ya()&&"mousedown"==h&&(c.Gb=!1);P(c)}
function fb(a,b,c,d){Na||(Na=R(36));a=Q(a);P({target:a,Gb:!1,Fb:"resize",Ib:d,Kb:function(c){c=c||event;if(c.target==a){var e=0<pageXOffset||0<pageYOffset?[pageXOffset,pageYOffset]:"undefined"!==typeof document.documentElement.scrollLeft||"undefined"!==typeof document.documentElement.scrollTop?[document.documentElement.scrollLeft,document.documentElement.scrollTop]:[document.body.scrollLeft|0,document.body.scrollTop|0],l=Na;I[l>>2]=c.detail;I[l+4>>2]=document.body.clientWidth;I[l+8>>2]=document.body.clientHeight;
I[l+12>>2]=innerWidth;I[l+16>>2]=innerHeight;I[l+20>>2]=outerWidth;I[l+24>>2]=outerHeight;I[l+28>>2]=e[0];I[l+32>>2]=e[1];S(d,10,l,b)&&c.preventDefault()}},Hb:c})}
function gb(a,b,c,d,e,h){Oa||(Oa=R(1684));a=Q(a);P({target:a,Gb:"touchstart"==h||"touchend"==h,Fb:h,Ib:d,Kb:function(c){c=c||event;for(var h={},l=0;l<c.touches.length;++l){var r=c.touches[l];r.Qb=!1;h[r.identifier]=r}for(l=0;l<c.changedTouches.length;++l)r=c.changedTouches[l],h[r.identifier]=r,r.Qb=!0;for(l=0;l<c.targetTouches.length;++l)r=c.targetTouches[l],h[r.identifier].Zb=!0;var u=r=Oa;I[u+4>>2]=c.ctrlKey;I[u+8>>2]=c.shiftKey;I[u+12>>2]=c.altKey;I[u+16>>2]=c.metaKey;u+=20;var Ja=f.canvas?f.canvas.getBoundingClientRect():
void 0,lb=a.getBoundingClientRect?a.getBoundingClientRect():{left:0,top:0},mb=0;for(l in h){var y=h[l];I[u>>2]=y.identifier;I[u+4>>2]=y.screenX;I[u+8>>2]=y.screenY;I[u+12>>2]=y.clientX;I[u+16>>2]=y.clientY;I[u+20>>2]=y.pageX;I[u+24>>2]=y.pageY;I[u+28>>2]=y.Qb;I[u+32>>2]=y.Zb;Ja?(I[u+44>>2]=y.clientX-Ja.left,I[u+48>>2]=y.clientY-Ja.top):(I[u+44>>2]=0,I[u+48>>2]=0);I[u+36>>2]=y.clientX-lb.left;I[u+40>>2]=y.clientY-lb.top;u+=52;if(32<=++mb)break}I[r>>2]=mb;S(d,e,r,b)&&c.preventDefault()},Hb:c})}
function hb(a,b,c,d,e,h){a||(a=f.canvas);a={target:Q(a),Gb:!1,Fb:h,Ib:d,Kb:function(a){a=a||event;S(d,e,0,b)&&a.preventDefault()},Hb:c};P(a)}
function ib(a,b,c,d,e){function h(c){c=c||event;db(N,c,a);K[N+72>>3]=c.wheelDeltaX||0;K[N+80>>3]=-(c.wheelDeltaY||c.wheelDelta);K[N+88>>3]=0;I[N+96>>2]=0;S(d,9,N,b)&&c.preventDefault()}function l(c){c=c||event;var e=N;db(e,c,a);K[e+72>>3]=c.deltaX;K[e+80>>3]=c.deltaY;K[e+88>>3]=c.deltaZ;I[e+96>>2]=c.deltaMode;S(d,9,e,b)&&c.preventDefault()}N||(N=R(104));P({target:a,Gb:!0,Fb:e,Ib:d,Kb:"wheel"==e?l:h,Hb:c})}
var jb=1,kb=0,nb=[],T=[],ob=[],pb=[],qb=[],U=[],V=[],rb=[],sb={},W=null,bb={},tb={},ub={},vb={};function X(a){kb||(kb=a)}function wb(a){for(var b=jb++,c=a.length;c<b;c++)a[c]=null;return b}var xb=null,Y=[0];
function yb(a,b){function c(){var a=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);return a?parseInt(a[2],10):!1}var d=R(8),e={handle:d,attributes:b,version:b.Tb,Nb:a};e.Eb=2<=e.version&&(!1===c()||58<=c());a.canvas&&(a.canvas.$b=e);sb[d]=e;("undefined"===typeof b.Sb||b.Sb)&&zb(e);return d}
function Ab(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(a,d){b.vertexAttribDivisorANGLE(a,d)},a.drawArraysInstanced=function(a,d,e,h){b.drawArraysInstancedANGLE(a,d,e,h)},a.drawElementsInstanced=function(a,d,e,h,l){b.drawElementsInstancedANGLE(a,d,e,h,l)})}
function Bb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(a){b.deleteVertexArrayOES(a)},a.bindVertexArray=function(a){b.bindVertexArrayOES(a)},a.isVertexArray=function(a){return b.isVertexArrayOES(a)})}function Cb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(a,d){b.drawBuffersWEBGL(a,d)})}
function zb(a){a||(a=W);if(!a.Yb){a.Yb=!0;var b=a.Nb;2>a.version&&(Ab(b),Bb(b),Cb(b));b.cc=b.getExtension("EXT_disjoint_timer_query");var c="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2".split(" ");
(b.getSupportedExtensions()||[]).forEach(function(a){-1!=c.indexOf(a)&&b.getExtension(a)})}}var ab={},Db,Eb,Fb=["default","low-power","high-performance"],Gb=[];function Hb(a,b,c,d){for(var e=0;e<a;e++){var h=Z[c](),l=h&&wb(d);h?(h.name=l,d[l]=h):X(1282);I[b+4*e>>2]=l}}
function Ib(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=Z.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>W.version){X(1282);return}c=2*(Z.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>W.version){X(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=Z.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":X(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 35097:case 36389:case 34068:c=
0;break;default:X(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)I[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){X(1280);A("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:X(1280);A("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}I[b>>2]=c}else X(1281)}
function Jb(a){var b=na(a)+1,c=R(b);G(a,F,c,b);return c}var Kb={6402:1,6403:1,6406:1,6407:3,6408:4,6409:1,6410:2,33319:2,33320:2,35904:3,35906:4,36244:1,36248:3,36249:4},Lb={5120:1,5121:1,5122:2,5123:2,5124:4,5125:4,5126:4,5131:2,32819:2,32820:2,33635:2,33640:4,34042:4,35899:4,35902:4,36193:2};
function Mb(a,b,c,d,e){if(b=Kb[b]*Lb[a])switch(c=e+d*(c*b+4-1&-4),a){case 5120:return H.subarray(e,c);case 5121:return F.subarray(e,c);case 5122:return ra.subarray(e>>1,c>>1);case 5124:return I.subarray(e>>2,c>>2);case 5126:return J.subarray(e>>2,c>>2);case 5125:case 34042:case 35902:case 33640:case 35899:return ta.subarray(e>>2,c>>2);case 5123:case 33635:case 32819:case 32820:case 36193:case 5131:return sa.subarray(e>>1,c>>1);default:X(1280)}else X(1280)}
function Nb(a){switch(a){case 5120:return H;case 5121:return F;case 5122:return ra;case 5123:case 33635:case 32819:case 32820:case 36193:case 5131:return sa;case 5124:return I;case 5125:case 34042:case 35902:case 33640:case 35899:case 34042:return ta;case 5126:return J}}var Ob={5122:1,5123:1,5124:2,5125:2,5126:2,5131:1,32819:1,32820:1,33635:1,33640:2,34042:2,35899:2,35902:2,36193:1},Z;xb=new Float32Array(256);for(var Pb=0;256>Pb;Pb++)Y[Pb]=xb.subarray(0,Pb+1);for(var Qb=0;32>Qb;Qb++)Gb.push(Array(Qb));
var Yb={U:function(){return devicePixelRatio||1},X:function(a,b,c){a=a?Q(a):f.canvas;if(!a)return-4;a.getBoundingClientRect?(a=a.getBoundingClientRect(),K[b>>3]=a.right-a.left,K[c>>3]=a.bottom-a.top):(K[b>>3]=a.clientWidth,K[c>>3]=a.clientHeight);return 0},Wa:function(a,b,c){F.set(F.subarray(b,b+c),a)},Ka:function(a,b){function c(d){Rb(a,d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},Xa:function(a){if(2147418112<a)return!1;for(var b=Math.max(H.length,16777216);b<a;)536870912>=b?b=
qa(2*b):b=Math.min(qa((3*b+2147483648)/4),2147418112);a:{try{D.grow(b-buffer.byteLength+65535>>16);ua(D.buffer);var c=1;break a}catch(d){}c=void 0}return c?!0:!1},S:function(a,b,c){a=$a(a);if(!a)return-4;a.width=b;a.height=c;return 0},Ta:function(a,b,c,d){cb(a,b,c,d,2,"keydown");return 0},Ra:function(a,b,c,d){cb(a,b,c,d,1,"keypress");return 0},Sa:function(a,b,c,d){cb(a,b,c,d,3,"keyup");return 0},ka:function(a,b,c,d){eb(a,b,c,d,5,"mousedown");return 0},Ya:function(a,b,c,d){eb(a,b,c,d,33,"mouseenter");
return 0},Va:function(a,b,c,d){eb(a,b,c,d,34,"mouseleave");return 0},cb:function(a,b,c,d){eb(a,b,c,d,8,"mousemove");return 0},ea:function(a,b,c,d){eb(a,b,c,d,6,"mouseup");return 0},db:function(a,b,c,d){fb(a,b,c,d);return 0},Na:function(a,b,c,d){gb(a,b,c,d,25,"touchcancel");return 0},Oa:function(a,b,c,d){gb(a,b,c,d,23,"touchend");return 0},Pa:function(a,b,c,d){gb(a,b,c,d,24,"touchmove");return 0},Qa:function(a,b,c,d){gb(a,b,c,d,22,"touchstart");return 0},Ma:function(a,b,c,d){hb(a,b,c,d,31,"webglcontextlost");
return 0},La:function(a,b,c,d){hb(a,b,c,d,32,"webglcontextrestored");return 0},Ua:function(a,b,c,d){a=Q(a);return"undefined"!==typeof a.onwheel?(ib(a,b,c,d,"wheel"),0):"undefined"!==typeof a.onmousewheel?(ib(a,b,c,d,"mousewheel"),0):-1},I:function(a,b){var c={};b>>=2;c.alpha=!!I[b];c.depth=!!I[b+1];c.stencil=!!I[b+2];c.antialias=!!I[b+3];c.premultipliedAlpha=!!I[b+4];c.preserveDrawingBuffer=!!I[b+5];c.powerPreference=Fb[I[b+6]];c.failIfMajorPerformanceCaveat=!!I[b+7];c.Tb=I[b+8];c.dc=I[b+9];c.Sb=
I[b+10];c.Wb=I[b+11];c.ec=I[b+12];c.fc=I[b+13];a=$a(a);!a||c.Wb?c=0:c=(a=1<c.Tb?a.getContext("webgl2",c):a.getContext("webgl",c)||a.getContext("experimental-webgl",c))?yb(a,c):0;return c},na:function(a,b){a=sb[a];b=E(b);0==b.indexOf("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b?Ab(Z):"OES_vertex_array_object"==b?Bb(Z):"WEBGL_draw_buffers"==b&&Cb(Z);return!!a.Nb.getExtension(b)},Ca:function(a){a>>=2;for(var b=0;14>b;++b)I[a+b]=0;I[a]=I[a+1]=I[a+3]=I[a+4]=I[a+8]=I[a+10]=1},ra:function(a){W=sb[a];
f.bc=Z=W&&W.Nb;return!a||Z?0:-5},j:function(a){Z.activeTexture(a)},H:function(a,b){Z.attachShader(T[a],V[b])},c:function(a,b){35051==a?Z.Rb=b:35052==a&&(Z.Jb=b);Z.bindBuffer(a,nb[b])},g:function(a,b){Z.bindFramebuffer(a,ob[b])},L:function(a,b){Z.bindRenderbuffer(a,pb[b])},a:function(a,b){Z.bindTexture(a,qb[b])},T:function(a){Z.bindVertexArray(rb[a])},A:function(a,b,c,d){Z.blendColor(a,b,c,d)},B:function(a,b){Z.blendEquationSeparate(a,b)},C:function(a,b,c,d){Z.blendFuncSeparate(a,b,c,d)},k:function(a,
b,c,d,e,h,l,n,p,r){Z.blitFramebuffer(a,b,c,d,e,h,l,n,p,r)},O:function(a,b,c,d){W.Eb?c?Z.bufferData(a,F,d,c,b):Z.bufferData(a,b,d):Z.bufferData(a,c?F.subarray(c,c+b):b,d)},N:function(a,b,c,d){W.Eb?Z.bufferSubData(a,b,F,d,c):Z.bufferSubData(a,b,F.subarray(d,d+c))},F:function(a){Z.clear(a)},oa:function(a,b,c,d){Z.clearColor(a,b,c,d)},ma:function(a){Z.clearDepth(a)},la:function(a){Z.clearStencil(a)},t:function(a,b,c,d){Z.colorMask(!!a,!!b,!!c,!!d)},_a:function(a){Z.compileShader(V[a])},za:function(a,
b,c,d,e,h,l,n){W.Eb?Z.Jb?Z.compressedTexImage2D(a,b,c,d,e,h,l,n):Z.compressedTexImage2D(a,b,c,d,e,h,F,n,l):Z.compressedTexImage2D(a,b,c,d,e,h,n?F.subarray(n,n+l):null)},xa:function(a,b,c,d,e,h,l,n,p){W.Eb?Z.Jb?Z.compressedTexImage3D(a,b,c,d,e,h,l,n,p):Z.compressedTexImage3D(a,b,c,d,e,h,l,F,p,n):Z.compressedTexImage3D(a,b,c,d,e,h,l,p?F.subarray(p,p+n):null)},va:function(){var a=wb(T),b=Z.createProgram();b.name=a;T[a]=b;return a},ab:function(a){var b=wb(V);V[b]=Z.createShader(a);return b},z:function(a){Z.cullFace(a)},
Ea:function(a,b){for(var c=0;c<a;c++){var d=I[b+4*c>>2],e=nb[d];e&&(Z.deleteBuffer(e),e.name=0,nb[d]=null,d==Db&&(Db=0),d==Eb&&(Eb=0),d==Z.Rb&&(Z.Rb=0),d==Z.Jb&&(Z.Jb=0))}},h:function(a,b){for(var c=0;c<a;++c){var d=I[b+4*c>>2],e=ob[d];e&&(Z.deleteFramebuffer(e),e.name=0,ob[d]=null)}},Q:function(a){if(a){var b=T[a];b?(Z.deleteProgram(b),b.name=0,T[a]=null,tb[a]=null):X(1281)}},R:function(a,b){for(var c=0;c<a;c++){var d=I[b+4*c>>2],e=pb[d];e&&(Z.deleteRenderbuffer(e),e.name=0,pb[d]=null)}},u:function(a){if(a){var b=
V[a];b?(Z.deleteShader(b),V[a]=null):X(1281)}},Da:function(a,b){for(var c=0;c<a;c++){var d=I[b+4*c>>2],e=qb[d];e&&(Z.deleteTexture(e),e.name=0,qb[d]=null)}},Fa:function(a,b){for(var c=0;c<a;c++){var d=I[b+4*c>>2];Z.deleteVertexArray(rb[d]);rb[d]=null}},r:function(a){Z.depthFunc(a)},s:function(a){Z.depthMask(!!a)},b:function(a){Z.disable(a)},v:function(a){Z.disableVertexAttribArray(a)},_:function(a,b,c){Z.drawArrays(a,b,c)},m:function(a,b){for(var c=Gb[a],d=0;d<a;d++)c[d]=I[b+4*d>>2];Z.drawBuffers(c)},
$:function(a,b,c,d){Z.drawElements(a,b,c,d)},e:function(a){Z.enable(a)},ga:function(a){Z.enableVertexAttribArray(a)},y:function(a){Z.frontFace(a)},P:function(a,b){Hb(a,b,"createBuffer",nb)},M:function(a,b){Hb(a,b,"createRenderbuffer",pb)},Aa:function(a,b){Hb(a,b,"createTexture",qb)},Ga:function(a,b){Hb(a,b,"createVertexArray",rb)},sa:function(a,b){return Z.getAttribLocation(T[a],E(b))},d:function(a,b){Ib(a,b)},ta:function(a,b,c,d){a=Z.getProgramInfoLog(T[a]);null===a&&(a="(unknown error)");b=0<b&&
d?G(a,F,d,b):0;c&&(I[c>>2]=b)},G:function(a,b,c){if(c)if(a>=jb)X(1281);else{var d=tb[a];if(d)if(35716==b)a=Z.getProgramInfoLog(T[a]),null===a&&(a="(unknown error)"),I[c>>2]=a.length+1;else if(35719==b)I[c>>2]=d.Pb;else if(35722==b){if(-1==d.Lb){a=T[a];var e=Z.getProgramParameter(a,35721);for(b=d.Lb=0;b<e;++b)d.Lb=Math.max(d.Lb,Z.getActiveAttrib(a,b).name.length+1)}I[c>>2]=d.Lb}else if(35381==b){if(-1==d.Mb)for(a=T[a],e=Z.getProgramParameter(a,35382),b=d.Mb=0;b<e;++b)d.Mb=Math.max(d.Mb,Z.getActiveUniformBlockName(a,
b).length+1);I[c>>2]=d.Mb}else I[c>>2]=Z.getProgramParameter(T[a],b);else X(1282)}else X(1281)},Za:function(a,b,c,d){a=Z.getShaderInfoLog(V[a]);null===a&&(a="(unknown error)");b=0<b&&d?G(a,F,d,b):0;c&&(I[c>>2]=b)},V:function(a,b,c){c?35716==b?(a=Z.getShaderInfoLog(V[a]),null===a&&(a="(unknown error)"),I[c>>2]=a.length+1):35720==b?(a=Z.getShaderSource(V[a]),I[c>>2]=null===a||0==a.length?0:a.length+1):I[c>>2]=Z.getShaderParameter(V[a],b):X(1281)},Ia:function(a){if(ub[a])return ub[a];switch(a){case 7939:var b=
Z.getSupportedExtensions()||[];b=b.concat(b.map(function(a){return"GL_"+a}));b=Jb(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Z.getParameter(a))||X(1280);b=Jb(b);break;case 7938:b=Z.getParameter(Z.VERSION);b=2<=W.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Jb(b);break;case 35724:b=Z.getParameter(Z.SHADING_LANGUAGE_VERSION);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=
Jb(b);break;default:return X(1280),0}return ub[a]=b},Ha:function(a,b){if(2>W.version)return X(1282),0;var c=vb[a];if(c)return 0>b||b>=c.length?(X(1281),0):c[b];switch(a){case 7939:return c=Z.getSupportedExtensions()||[],c=c.concat(c.map(function(a){return"GL_"+a})),c=c.map(function(a){return Jb(a)}),c=vb[a]=c,0>b||b>=c.length?(X(1281),0):c[b];default:return X(1280),0}},i:function(a,b){b=E(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,
d)}return(a=tb[a]&&tb[a].Ub[b])&&0<=c&&c<a[0]?a[1]+c:-1},ua:function(a){Z.linkProgram(T[a]);var b=T[a];a=tb[a]={Ub:{},Pb:0,Lb:-1,Mb:-1};for(var c=a.Ub,d=Z.getProgramParameter(b,35718),e=0;e<d;++e){var h=Z.getActiveUniform(b,e),l=h.name;a.Pb=Math.max(a.Pb,l.length+1);"]"==l.slice(-1)&&(l=l.slice(0,l.lastIndexOf("[")));var n=Z.getUniformLocation(b,l);if(n){var p=wb(U);c[l]=[h.size,p];U[p]=n;for(var r=1;r<h.size;++r)n=Z.getUniformLocation(b,l+"["+r+"]"),p=wb(U),U[p]=n}}},x:function(a,b){Z.polygonOffset(a,
b)},l:function(a){Z.readBuffer(a)},Ba:function(a,b,c,d){Z.renderbufferStorage(a,b,c,d)},K:function(a,b,c,d,e){Z.renderbufferStorageMultisample(a,b,c,d,e)},pa:function(a,b,c,d){Z.scissor(a,b,c,d)},$a:function(a,b,c,d){for(var e="",h=0;h<b;++h){var l=d?I[d+4*h>>2]:-1;e+=E(I[c+4*h>>2],0>l?void 0:l)}Z.shaderSource(V[a],e)},Z:function(a,b,c){Z.stencilFunc(a,b,c)},E:function(a,b,c,d){Z.stencilFuncSeparate(a,b,c,d)},q:function(a){Z.stencilMask(a)},Y:function(a,b,c){Z.stencilOp(a,b,c)},D:function(a,b,c,d){Z.stencilOpSeparate(a,
b,c,d)},ya:function(a,b,c,d,e,h,l,n,p){W.Eb?Z.Jb?Z.texImage2D(a,b,c,d,e,h,l,n,p):0!=p?Z.texImage2D(a,b,c,d,e,h,l,n,Nb(n),p>>(Ob[n]|0)):Z.texImage2D(a,b,c,d,e,h,l,n,null):Z.texImage2D(a,b,c,d,e,h,l,n,p?Mb(n,l,d,e,p):null)},wa:function(a,b,c,d,e,h,l,n,p,r){Z.Jb?Z.texImage3D(a,b,c,d,e,h,l,n,p,r):0!=r?Z.texImage3D(a,b,c,d,e,h,l,n,p,Nb(p),r>>(Ob[p]|0)):Z.texImage3D(a,b,c,d,e,h,l,n,p,null)},J:function(a,b,c){Z.texParameterf(a,b,c)},f:function(a,b,c){Z.texParameteri(a,b,c)},fa:function(a,b,c){if(W.Eb)Z.uniform1fv(U[a],
J,c>>2,b);else{if(256>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=J[c+4*e>>2];else d=J.subarray(c>>2,c+4*b>>2);Z.uniform1fv(U[a],d)}},w:function(a,b){Z.uniform1i(U[a],b)},da:function(a,b,c){if(W.Eb)Z.uniform2fv(U[a],J,c>>2,2*b);else{if(256>=2*b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=J[c+4*e>>2],d[e+1]=J[c+(4*e+4)>>2];else d=J.subarray(c>>2,c+8*b>>2);Z.uniform2fv(U[a],d)}},ca:function(a,b,c){if(W.Eb)Z.uniform3fv(U[a],J,c>>2,3*b);else{if(256>=3*b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=J[c+4*e>>2],d[e+1]=J[c+
(4*e+4)>>2],d[e+2]=J[c+(4*e+8)>>2];else d=J.subarray(c>>2,c+12*b>>2);Z.uniform3fv(U[a],d)}},ba:function(a,b,c){if(W.Eb)Z.uniform4fv(U[a],J,c>>2,4*b);else{if(256>=4*b)for(var d=Y[4*b-1],e=0;e<4*b;e+=4)d[e]=J[c+4*e>>2],d[e+1]=J[c+(4*e+4)>>2],d[e+2]=J[c+(4*e+8)>>2],d[e+3]=J[c+(4*e+12)>>2];else d=J.subarray(c>>2,c+16*b>>2);Z.uniform4fv(U[a],d)}},aa:function(a,b,c,d){if(W.Eb)Z.uniformMatrix4fv(U[a],!!c,J,d>>2,16*b);else{if(256>=16*b)for(var e=Y[16*b-1],h=0;h<16*b;h+=16)e[h]=J[d+4*h>>2],e[h+1]=J[d+(4*h+
4)>>2],e[h+2]=J[d+(4*h+8)>>2],e[h+3]=J[d+(4*h+12)>>2],e[h+4]=J[d+(4*h+16)>>2],e[h+5]=J[d+(4*h+20)>>2],e[h+6]=J[d+(4*h+24)>>2],e[h+7]=J[d+(4*h+28)>>2],e[h+8]=J[d+(4*h+32)>>2],e[h+9]=J[d+(4*h+36)>>2],e[h+10]=J[d+(4*h+40)>>2],e[h+11]=J[d+(4*h+44)>>2],e[h+12]=J[d+(4*h+48)>>2],e[h+13]=J[d+(4*h+52)>>2],e[h+14]=J[d+(4*h+56)>>2],e[h+15]=J[d+(4*h+60)>>2];else e=J.subarray(d>>2,d+64*b>>2);Z.uniformMatrix4fv(U[a],!!c,e)}},ja:function(a){Z.useProgram(T[a])},ha:function(a,b){Z.vertexAttribDivisor(a,b)},ia:function(a,
b,c,d,e,h){Z.vertexAttribPointer(a,b,c,!!d,e,h)},qa:function(a,b,c,d){Z.viewport(a,b,c,d)},memory:D,p:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Sb()});document.body.append(a)},o:function(){document.getElementById("_sokol_app_input_element").focus()},Ja:function(){window.addEventListener("beforeunload",function(a){0!=Tb()&&(a.preventDefault(),a.returnValue=" ")})},n:function(){document.getElementById("_sokol_app_input_element").blur()},
W:function(a,b,c,d,e,h){b=E(b);var l=new XMLHttpRequest;l.open("GET",b);l.responseType="arraybuffer";var n=0<d;n&&l.setRequestHeader("Range","bytes="+c+"-"+(c+d));l.onreadystatechange=function(){if(this.readyState==this.DONE)if(206==this.status||200==this.status&&!n){var b=new Uint8Array(l.response),c=b.length;c<=h?(F.set(b,e),Ub(a,d,c)):Vb(a)}else Wb(a,this.status)};l.send()},bb:function(a,b){b=E(b);var c=new XMLHttpRequest;c.open("HEAD",b);c.onreadystatechange=function(){if(this.readyState==this.DONE)if(200==
this.status){var b=this.getResponseHeader("Content-Length");Xb(a,b)}else Wb(a,this.status)};c.send()},table:ka},Zb=function(){function a(a){f.asm=a.exports;L--;f.monitorRunDependencies&&f.monitorRunDependencies(L);0==L&&(null!==Da&&(clearInterval(Da),Da=null),Ea&&(a=Ea,Ea=null,a()))}function b(b){a(b.instance)}function c(a){return Ia().then(function(a){return WebAssembly.instantiate(a,d)}).then(a,function(a){A("failed to asynchronously prepare wasm: "+a);z(a)})}var d={env:Yb,wasi_unstable:Yb};L++;
f.monitorRunDependencies&&f.monitorRunDependencies(L);if(f.instantiateWasm)try{return f.instantiateWasm(d,a)}catch(e){return A("Module.instantiateWasm callback failed with error: "+e),!1}(function(){if(B||"function"!==typeof WebAssembly.instantiateStreaming||Fa()||"function"!==typeof fetch)return c(b);fetch(M,{credentials:"same-origin"}).then(function(a){return WebAssembly.instantiateStreaming(a,d).then(b,function(a){A("wasm streaming compile failed: "+a);A("falling back to ArrayBuffer instantiation");
c(b)})})})();return{}}();f.asm=Zb;var Ka=f.___wasm_call_ctors=function(){return f.asm.eb.apply(null,arguments)},Sb=f.__sapp_emsc_notify_keyboard_hidden=function(){return f.asm.fb.apply(null,arguments)};f.___em_js__sapp_js_create_textfield=function(){return f.asm.gb.apply(null,arguments)};f.___em_js__sapp_js_focus_textfield=function(){return f.asm.hb.apply(null,arguments)};f.___em_js__sapp_js_unfocus_textfield=function(){return f.asm.ib.apply(null,arguments)};
var Tb=f.__sapp_html5_get_ask_leave_site=function(){return f.asm.jb.apply(null,arguments)};f.___em_js__sapp_js_hook_beforeunload=function(){return f.asm.kb.apply(null,arguments)};f._main=function(){return f.asm.lb.apply(null,arguments)};var R=f._malloc=function(){return f.asm.mb.apply(null,arguments)};f._free=function(){return f.asm.nb.apply(null,arguments)};f.___em_js__stm_js_perfnow=function(){return f.asm.ob.apply(null,arguments)};f.__saudio_emsc_pull=function(){return f.asm.pb.apply(null,arguments)};
f.___em_js__saudio_js_init=function(){return f.asm.qb.apply(null,arguments)};f.___em_js__saudio_js_sample_rate=function(){return f.asm.rb.apply(null,arguments)};f.___em_js__saudio_js_buffer_frames=function(){return f.asm.sb.apply(null,arguments)};f.___em_js__sfetch_js_send_head_request=function(){return f.asm.tb.apply(null,arguments)};f.___em_js__sfetch_js_send_get_request=function(){return f.asm.ub.apply(null,arguments)};
var Xb=f.__sfetch_emsc_head_response=function(){return f.asm.vb.apply(null,arguments)},Ub=f.__sfetch_emsc_get_response=function(){return f.asm.wb.apply(null,arguments)},Wb=f.__sfetch_emsc_failed_http_status=function(){return f.asm.xb.apply(null,arguments)},Vb=f.__sfetch_emsc_failed_buffer_too_small=function(){return f.asm.yb.apply(null,arguments)},pa=f.stackAlloc=function(){return f.asm.zb.apply(null,arguments)};f.dynCall_vi=function(){return f.asm.Ab.apply(null,arguments)};
f.dynCall_v=function(){return f.asm.Bb.apply(null,arguments)};var S=f.dynCall_iiii=function(){return f.asm.Cb.apply(null,arguments)},Rb=f.dynCall_idi=function(){return f.asm.Db.apply(null,arguments)};f.asm=Zb;var $b;function ia(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}Ea=function ac(){$b||bc();$b||(Ea=ac)};
function bc(a){function b(){if(!$b&&($b=!0,!la)){wa(ya);wa(za);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if(cc){var b=a,d=f._main;b=b||[];var e=b.length+1,h=pa(4*(e+1));I[h>>2]=oa(aa);for(var l=1;l<e;l++)I[(h>>2)+l]=oa(b[l-1]);I[(h>>2)+e]=0;try{var n=d(e,h);if(!C||0!==n){if(!C&&(la=!0,f.onExit))f.onExit(n);q(n,new ia(n))}}catch(p){p instanceof ia||("SimulateInfiniteLoop"==p?C=!0:((b=p)&&"object"===typeof p&&p.stack&&(b=[p,p.stack]),A("exception thrown: "+b),q(1,p)))}finally{}}if(f.postRun)for("function"==
typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;)b=f.postRun.shift(),Ba.unshift(b);wa(Ba)}}a=a||m;if(!(0<L)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Ca();wa(xa);0<L||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},1)):b())}}f.run=bc;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var cc=!0;f.noInitialRun&&(cc=!1);C=!0;bc();
