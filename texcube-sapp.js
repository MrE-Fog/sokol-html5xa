var e;e||(e=typeof Module !== 'undefined' ? Module : {});var g={},h;for(h in e)e.hasOwnProperty(h)&&(g[h]=e[h]);e.arguments=[];e.thisProgram="./this.program";e.quit=function(a,b){throw b;};e.preRun=[];e.postRun=[];var m=!1,t=!1,aa=!1,ba=!1,ca=!1;m="object"===typeof window;t="function"===typeof importScripts;aa=(ba="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)&&!m&&!t;ca=!m&&!aa&&!t;var u="";
if(aa){u=__dirname+"/";var da,ea;e.read=function(a,b){da||(da=require("fs"));ea||(ea=require("path"));a=ea.normalize(a);a=da.readFileSync(a);return b?a:a.toString()};e.readBinary=function(a){a=e.read(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||v("Assertion failed: undefined");return a};1<process.argv.length&&(e.thisProgram=process.argv[1].replace(/\\/g,"/"));e.arguments=process.argv.slice(2);"undefined"!==typeof module&&(module.exports=e);process.on("uncaughtException",function(a){if(!(a instanceof
w))throw a;});process.on("unhandledRejection",v);e.quit=function(a){process.exit(a)};e.inspect=function(){return"[Emscripten Module object]"}}else if(ca)"undefined"!=typeof read&&(e.read=function(a){return read(a)}),e.readBinary=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");"object"===typeof a||v("Assertion failed: undefined");return a},"undefined"!=typeof scriptArgs?e.arguments=scriptArgs:"undefined"!=typeof arguments&&(e.arguments=arguments),
"function"===typeof quit&&(e.quit=function(a){quit(a)});else if(m||t)t?u=self.location.href:document.currentScript&&(u=document.currentScript.src),u=0!==u.indexOf("blob:")?u.substr(0,u.lastIndexOf("/")+1):"",e.read=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},t&&(e.readBinary=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),e.readAsync=function(a,b,c){var d=new XMLHttpRequest;
d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)},e.setWindowTitle=function(a){document.title=a};var fa=e.print||("undefined"!==typeof console?console.log.bind(console):"undefined"!==typeof print?print:null),x=e.printErr||("undefined"!==typeof printErr?printErr:"undefined"!==typeof console&&console.warn.bind(console)||fa);for(h in g)g.hasOwnProperty(h)&&(e[h]=g[h]);g=void 0;
var ha={"f64-rem":function(a,b){return a%b},"debugger":function(){debugger}};"object"!==typeof WebAssembly&&x("no native wasm support detected");var z,ia=!1,ja="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function A(a,b){if(a){var c=B,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&ja)a=ja.decode(c.subarray(a,b));else{for(d="";a<b;){var f=c[a++];if(f&128){var k=c[a++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|k);else{var l=c[a++]&63;f=224==(f&240)?(f&15)<<12|k<<6|l:(f&7)<<18|k<<12|l<<6|c[a++]&63;65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else d+=String.fromCharCode(f)}a=d}}else a="";return a}
function C(a,b,c,d){if(!(0<d))return 0;var f=c;d=c+d-1;for(var k=0;k<a.length;++k){var l=a.charCodeAt(k);if(55296<=l&&57343>=l){var q=a.charCodeAt(++k);l=65536+((l&1023)<<10)|q&1023}if(127>=l){if(c>=d)break;b[c++]=l}else{if(2047>=l){if(c+1>=d)break;b[c++]=192|l>>6}else{if(65535>=l){if(c+2>=d)break;b[c++]=224|l>>12}else{if(c+3>=d)break;b[c++]=240|l>>18;b[c++]=128|l>>12&63}b[c++]=128|l>>6&63}b[c++]=128|l&63}}b[c]=0;return c-f}
function ka(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function la(a){var b=ka(a)+1,c=ma(b);C(a,D,c,b);return c}function na(a){0<a%65536&&(a+=65536-a%65536);return a}var buffer,D,B,E,oa,F,pa,G,H;
function qa(){e.HEAP8=D=new Int8Array(buffer);e.HEAP16=E=new Int16Array(buffer);e.HEAP32=F=new Int32Array(buffer);e.HEAPU8=B=new Uint8Array(buffer);e.HEAPU16=oa=new Uint16Array(buffer);e.HEAPU32=pa=new Uint32Array(buffer);e.HEAPF32=G=new Float32Array(buffer);e.HEAPF64=H=new Float64Array(buffer)}var ra=e.TOTAL_MEMORY||33554432;5242880>ra&&x("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+ra+"! (TOTAL_STACK=5242880)");e.wasmMemory?z=e.wasmMemory:z=new WebAssembly.Memory({initial:ra/65536});
z&&(buffer=z.buffer);ra=buffer.byteLength;qa();F[6332]=5268240;function sa(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.Tb;"number"===typeof c?void 0===b.Db?e.dynCall_v(c):e.dynCall_vi(c,b.Db):c(void 0===b.Db?null:b.Db)}}}var ta=[],ua=[],va=[],wa=[],xa=[];function ya(){var a=e.preRun.shift();ta.unshift(a)}var I=0,za=null,J=null;e.preloadedImages={};e.preloadedAudios={};
function Aa(){var a=K;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var K="texcube-sapp.wasm";if(!Aa()){var Ca=K;K=e.locateFile?e.locateFile(Ca,u):u+Ca}function Da(){try{if(e.wasmBinary)return new Uint8Array(e.wasmBinary);if(e.readBinary)return e.readBinary(K);throw"both async and sync fetching of the wasm failed";}catch(a){v(a)}}
function Ea(){return e.wasmBinary||!m&&!t||"function"!==typeof fetch?new Promise(function(a){a(Da())}):fetch(K,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+K+"'";return a.arrayBuffer()}).catch(function(){return Da()})}
function Fa(a){function b(a){e.asm=a.exports;I--;e.monitorRunDependencies&&e.monitorRunDependencies(I);0==I&&(null!==za&&(clearInterval(za),za=null),J&&(a=J,J=null,a()))}function c(a){b(a.instance)}function d(a){return Ea().then(function(a){return WebAssembly.instantiate(a,f)}).then(a,function(a){x("failed to asynchronously prepare wasm: "+a);v(a)})}var f={env:a,global:{NaN:NaN,Infinity:Infinity},"global.Math":Math,asm2wasm:ha};I++;e.monitorRunDependencies&&e.monitorRunDependencies(I);if(e.instantiateWasm)try{return e.instantiateWasm(f,
b)}catch(k){return x("Module.instantiateWasm callback failed with error: "+k),!1}(function(){if(e.wasmBinary||"function"!==typeof WebAssembly.instantiateStreaming||Aa()||"function"!==typeof fetch)return d(c);fetch(K,{credentials:"same-origin"}).then(function(a){return WebAssembly.instantiateStreaming(a,f).then(c,function(a){x("wasm streaming compile failed: "+a);x("falling back to ArrayBuffer instantiation");d(c)})})})();return{}}
e.asm=function(a,b){b.memory=z;b.table=new WebAssembly.Table({initial:28,maximum:28,element:"anyfunc"});b.__memory_base=1024;b.__table_base=0;return Fa(b)};var Ga=0,Ha=0,L=0,Ia=0,Ja=0,Ka=null,La=null,Ma=!1;function Na(){for(var a=M.length-1;0<=a;--a)Oa(a);M=[];Pa=[]}var Pa=[];function Qa(){if(Ra&&Sa.wb)for(var a=0;a<Pa.length;++a){var b=Pa[a];Pa.splice(a,1);--a;b.Xb.apply(this,b.Qb)}}var Ra=0,Sa=null,M=[];
function Ta(){return-1!==navigator.userAgent.indexOf("MSIE")||0<navigator.appVersion.indexOf("Trident/")}function Oa(a){var b=M[a];b.target.removeEventListener(b.ub,b.Lb,b.xb);M.splice(a,1)}function N(a){function b(b){++Ra;Sa=a;Qa();a.zb(b);Qa();--Ra}if(a.yb)a.Lb=b,a.target.addEventListener(a.ub,b,a.xb),M.push(a),Ma||(wa.push(Na),Ma=!0);else for(var c=0;c<M.length;++c)M[c].target==a.target&&M[c].ub==a.ub&&Oa(c--)}
var Ua=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function O(a){try{if(!a)return window;"number"===typeof a&&(a=Ua[a]||A(a));return"#window"===a?window:"#document"===a?document:"#screen"===a?screen:"#canvas"===a?e.canvas:"string"===typeof a?document.getElementById(a):a}catch(b){return null}}function Va(){return D.length}
function Wa(a){"number"===typeof a&&(a=A(a));return a&&"#canvas"!==a?"undefined"!==typeof Xa&&Ya[a]?Ya[a]:O(a):"undefined"!==typeof Xa&&Ya.canvas?Ya.canvas:e.canvas}
function Za(a,b,c,d,f,k){Ga||(Ga=P(164));a={target:O(a),wb:Ta()?!1:!0,ub:k,yb:d,zb:function(a){a=a||window.event;var c=Ga;C(a.key?a.key:"",B,c+0,32);C(a.code?a.code:"",B,c+32,32);F[c+64>>2]=a.location;F[c+68>>2]=a.ctrlKey;F[c+72>>2]=a.shiftKey;F[c+76>>2]=a.altKey;F[c+80>>2]=a.metaKey;F[c+84>>2]=a.repeat;C(a.locale?a.locale:"",B,c+88,32);C(a.char?a.char:"",B,c+120,32);F[c+152>>2]=a.charCode;F[c+156>>2]=a.keyCode;F[c+160>>2]=a.which;Q(d,f,c,b)&&a.preventDefault()},xb:c};N(a)}
function $a(a,b,c){H[a>>3]=window.performance&&window.performance.now?window.performance.now():Date.now();F[a+8>>2]=b.screenX;F[a+12>>2]=b.screenY;F[a+16>>2]=b.clientX;F[a+20>>2]=b.clientY;F[a+24>>2]=b.ctrlKey;F[a+28>>2]=b.shiftKey;F[a+32>>2]=b.altKey;F[a+36>>2]=b.metaKey;E[a+40>>1]=b.button;E[a+42>>1]=b.buttons;F[a+44>>2]=b.movementX||b.mozMovementX||b.webkitMovementX||b.screenX-Ka;F[a+48>>2]=b.movementY||b.mozMovementY||b.webkitMovementY||b.screenY-La;if(e.canvas){var d=e.canvas.getBoundingClientRect();
F[a+60>>2]=b.clientX-d.left;F[a+64>>2]=b.clientY-d.top}else F[a+60>>2]=0,F[a+64>>2]=0;c?(d=c.getBoundingClientRect?c.getBoundingClientRect():{left:0,top:0},F[a+52>>2]=b.clientX-d.left,F[a+56>>2]=b.clientY-d.top):(F[a+52>>2]=0,F[a+56>>2]=0);"wheel"!==b.type&&"mousewheel"!==b.type&&(Ka=b.screenX,La=b.screenY)}
function R(a,b,c,d,f,k){Ha||(Ha=P(72));a=O(a);c={target:a,wb:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,ub:k,yb:d,zb:function(c){c=c||window.event;$a(Ha,c,a);Q(d,f,Ha,b)&&c.preventDefault()},xb:c};Ta()&&"mousedown"==k&&(c.wb=!1);N(c)}
function ab(a,b,c,d){Ia||(Ia=P(36));a=O(a);N({target:a,wb:!1,ub:"resize",yb:d,zb:function(c){c=c||window.event;if(c.target==a){var f=0<window.pageXOffset||0<window.pageYOffset?[window.pageXOffset,window.pageYOffset]:"undefined"!==typeof document.documentElement.scrollLeft||"undefined"!==typeof document.documentElement.scrollTop?[document.documentElement.scrollLeft,document.documentElement.scrollTop]:[document.body.scrollLeft|0,document.body.scrollTop|0],l=Ia;F[l>>2]=c.detail;F[l+4>>2]=document.body.clientWidth;
F[l+8>>2]=document.body.clientHeight;F[l+12>>2]=window.innerWidth;F[l+16>>2]=window.innerHeight;F[l+20>>2]=window.outerWidth;F[l+24>>2]=window.outerHeight;F[l+28>>2]=f[0];F[l+32>>2]=f[1];Q(d,10,l,b)&&c.preventDefault()}},xb:c})}
function bb(a,b,c,d,f,k){Ja||(Ja=P(1684));a=O(a);N({target:a,wb:"touchstart"==k||"touchend"==k,ub:k,yb:d,zb:function(c){c=c||window.event;for(var k={},l=0;l<c.touches.length;++l){var n=c.touches[l];n.Gb=!1;k[n.identifier]=n}for(l=0;l<c.changedTouches.length;++l)n=c.changedTouches[l],k[n.identifier]=n,n.Gb=!0;for(l=0;l<c.targetTouches.length;++l)n=c.targetTouches[l],k[n.identifier].Ob=!0;var p=n=Ja;F[p+4>>2]=c.ctrlKey;F[p+8>>2]=c.shiftKey;F[p+12>>2]=c.altKey;F[p+16>>2]=c.metaKey;p+=20;var Ba=e.canvas?
e.canvas.getBoundingClientRect():void 0,cb=a.getBoundingClientRect?a.getBoundingClientRect():{left:0,top:0},db=0;for(l in k){var y=k[l];F[p>>2]=y.identifier;F[p+4>>2]=y.screenX;F[p+8>>2]=y.screenY;F[p+12>>2]=y.clientX;F[p+16>>2]=y.clientY;F[p+20>>2]=y.pageX;F[p+24>>2]=y.pageY;F[p+28>>2]=y.Gb;F[p+32>>2]=y.Ob;Ba?(F[p+44>>2]=y.clientX-Ba.left,F[p+48>>2]=y.clientY-Ba.top):(F[p+44>>2]=0,F[p+48>>2]=0);F[p+36>>2]=y.clientX-cb.left;F[p+40>>2]=y.clientY-cb.top;p+=52;if(32<=++db)break}F[n>>2]=db;Q(d,f,n,b)&&
c.preventDefault()},xb:c})}function eb(a,b,c,d,f,k){a||(a=e.canvas);a={target:O(a),wb:!1,ub:k,yb:d,zb:function(a){a=a||window.event;Q(d,f,0,b)&&a.preventDefault()},xb:c};N(a)}
function fb(a,b,c,d,f){function k(c){c=c||window.event;$a(L,c,a);H[L+72>>3]=c.wheelDeltaX||0;H[L+80>>3]=-(c.wheelDeltaY?c.wheelDeltaY:c.wheelDelta);H[L+88>>3]=0;F[L+96>>2]=0;Q(d,9,L,b)&&c.preventDefault()}function l(c){c=c||window.event;var f=L;$a(f,c,a);H[f+72>>3]=c.deltaX;H[f+80>>3]=c.deltaY;H[f+88>>3]=c.deltaZ;F[f+96>>2]=c.deltaMode;Q(d,9,f,b)&&c.preventDefault()}L||(L=P(104));N({target:a,wb:!0,ub:f,yb:d,zb:"wheel"==f?l:k,xb:c})}
var gb=1,hb=0,ib=[],S=[],jb=[],kb=[],lb=[],T=[],U=[],mb=[],nb={},V=null,Ya={},W={},ob={};function X(a){hb||(hb=a)}function pb(a){for(var b=gb++,c=a.length;c<b;c++)a[c]=null;return b}var qb=null,Y=[0];function rb(a,b){function c(){var a=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);return a?parseInt(a[2],10):!1}var d=P(8),f={handle:d,attributes:b,version:b.Jb,Fb:a};f.vb=2<=f.version&&(!1===c()||58<=c());a.canvas&&(a.canvas.Pb=f);nb[d]=f;("undefined"===typeof b.Ib||b.Ib)&&sb(f);return d}
function sb(a){a||(a=V);if(!a.Nb){a.Nb=!0;var b=a.Fb;if(2>a.version){var c=b.getExtension("ANGLE_instanced_arrays");c&&(b.vertexAttribDivisor=function(a,b){c.vertexAttribDivisorANGLE(a,b)},b.drawArraysInstanced=function(a,b,d,f){c.drawArraysInstancedANGLE(a,b,d,f)},b.drawElementsInstanced=function(a,b,d,f,k){c.drawElementsInstancedANGLE(a,b,d,f,k)});var d=b.getExtension("OES_vertex_array_object");d&&(b.createVertexArray=function(){return d.createVertexArrayOES()},b.deleteVertexArray=function(a){d.deleteVertexArrayOES(a)},
b.bindVertexArray=function(a){d.bindVertexArrayOES(a)},b.isVertexArray=function(a){return d.isVertexArrayOES(a)});var f=b.getExtension("WEBGL_draw_buffers");f&&(b.drawBuffers=function(a,b){f.drawBuffersWEBGL(a,b)})}b.Sb=b.getExtension("EXT_disjoint_timer_query");var k="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2".split(" ");
(a=b.getSupportedExtensions())&&0<a.length&&b.getSupportedExtensions().forEach(function(a){-1!=k.indexOf(a)&&b.getExtension(a)})}}var Xa={},tb,ub,vb=["default","low-power","high-performance"],wb=[];function xb(a,b,c,d){for(var f=0;f<a;f++){var k=Z[c](),l=k&&pb(d);k?(k.name=l,d[l]=k):X(1282);F[b+4*f>>2]=l}}
function yb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=Z.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>V.version){X(1282);return}d=Z.getSupportedExtensions();c=null===d?0:2*d.length;break;case 33307:case 33308:if(2>V.version){X(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=Z.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":X(1280);return;case "object":if(null===
d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 35097:case 36389:case 34068:c=0;break;default:X(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)F[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(f){X(1280);x("GL_INVALID_ENUM in glGetIntegerv: Unknown object returned from WebGL getParameter("+a+")! (error: "+f+")");return}}break;default:X(1280);return}F[b>>2]=c}else X(1281)}
function zb(a){var b=ka(a)+1,c=P(b);C(a,B,c,b);return c}var Ab={6402:1,6403:1,6406:1,6407:3,6408:4,6409:1,6410:2,33319:2,33320:2,35904:3,35906:4,36244:1,36248:3,36249:4},Bb={5120:1,5121:1,5122:2,5123:2,5124:4,5125:4,5126:4,5131:2,32819:2,32820:2,33635:2,33640:4,34042:4,35899:4,35902:4,36193:2};
function Cb(a,b,c,d,f){if(b=Ab[b]*Bb[a])switch(c=f+d*(c*b+4-1&-4),a){case 5120:return D.subarray(f,c);case 5121:return B.subarray(f,c);case 5122:return E.subarray(f>>1,c>>1);case 5124:return F.subarray(f>>2,c>>2);case 5126:return G.subarray(f>>2,c>>2);case 5125:case 34042:case 35902:case 33640:case 35899:case 34042:return pa.subarray(f>>2,c>>2);case 5123:case 33635:case 32819:case 32820:case 36193:case 5131:return oa.subarray(f>>1,c>>1);default:X(1280)}else X(1280)}
function Db(a){switch(a){case 5120:return D;case 5121:return B;case 5122:return E;case 5123:case 33635:case 32819:case 32820:case 36193:case 5131:return oa;case 5124:return F;case 5125:case 34042:case 35902:case 33640:case 35899:case 34042:return pa;case 5126:return G}}var Eb={5122:1,5123:1,5124:2,5125:2,5126:2,5131:1,32819:1,32820:1,33635:1,33640:2,34042:2,35899:2,35902:2,36193:1};
function Fb(a){a=na(a);var b=buffer.byteLength;try{return-1!==z.grow((a-b)/65536)?(buffer=z.buffer,!0):!1}catch(c){return!1}}var Z;qb=new Float32Array(256);for(var Gb=0;256>Gb;Gb++)Y[Gb]=qb.subarray(0,Gb+1);for(var Hb=0;32>Hb;Hb++)wb.push(Array(Hb));
var Kb=e.asm({},{f:v,S:function(a){e.___errno_location&&(F[e.___errno_location()>>2]=a);return a},R:function(){return window.devicePixelRatio||1},O:function(a,b,c){a=a?O(a):e.canvas;if(!a)return-4;a.getBoundingClientRect?(a=a.getBoundingClientRect(),H[b>>3]=a.right-a.left,H[c>>3]=a.bottom-a.top):(H[b>>3]=a.clientWidth,H[c>>3]=a.clientHeight);return 0},Da:Va,ua:function(a,b,c){B.set(B.subarray(b,b+c),a)},ra:function(a,b){function c(d){Ib(a,d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},
ka:function(a){if(2147418112<a)return!1;for(var b=Math.max(Va(),16777216);b<a;)536870912>=b?b=na(2*b):b=Math.min(na((3*b+2147483648)/4),2147418112);if(!Fb(b))return!1;qa();return!0},z:function(a,b,c){a=Wa(a);if(!a)return-4;a.width=b;a.height=c;return 0},$:function(a,b,c,d){Za(a,b,c,d,2,"keydown");return 0},Xa:function(a,b,c,d){Za(a,b,c,d,1,"keypress");return 0},Ta:function(a,b,c,d){Za(a,b,c,d,3,"keyup");return 0},Sa:function(a,b,c,d){R(a,b,c,d,5,"mousedown");return 0},Ra:function(a,b,c,d){R(a,b,c,
d,33,"mouseenter");return 0},Qa:function(a,b,c,d){R(a,b,c,d,34,"mouseleave");return 0},Pa:function(a,b,c,d){R(a,b,c,d,8,"mousemove");return 0},Oa:function(a,b,c,d){R(a,b,c,d,6,"mouseup");return 0},Na:function(a,b,c,d){ab(a,b,c,d);return 0},Ma:function(a,b,c,d){bb(a,b,c,d,25,"touchcancel");return 0},La:function(a,b,c,d){bb(a,b,c,d,23,"touchend");return 0},Ka:function(a,b,c,d){bb(a,b,c,d,24,"touchmove");return 0},Ja:function(a,b,c,d){bb(a,b,c,d,22,"touchstart");return 0},Ia:function(a,b,c,d){eb(a,b,
c,d,31,"webglcontextlost");return 0},Ha:function(a,b,c,d){eb(a,b,c,d,32,"webglcontextrestored");return 0},Ga:function(a,b,c,d){a=O(a);return"undefined"!==typeof a.onwheel?(fb(a,b,c,d,"wheel"),0):"undefined"!==typeof a.onmousewheel?(fb(a,b,c,d,"mousewheel"),0):-1},Q:function(a,b){var c={};b>>=2;c.alpha=!!F[b];c.depth=!!F[b+1];c.stencil=!!F[b+2];c.antialias=!!F[b+3];c.premultipliedAlpha=!!F[b+4];c.preserveDrawingBuffer=!!F[b+5];c.powerPreference=vb[F[b+6]];c.failIfMajorPerformanceCaveat=!!F[b+7];c.Jb=
F[b+8];c.Ub=F[b+9];c.Ib=F[b+10];c.Mb=F[b+11];c.Vb=F[b+12];c.Wb=F[b+13];a=Wa(a);!a||c.Mb?c=0:c=(a=1<c.Jb?a.getContext("webgl2",c):a.getContext("webgl",c)||a.getContext("experimental-webgl",c))?rb(a,c):0;return c},Fa:function(a){a>>=2;for(var b=0;14>b;++b)F[a+b]=0;F[a]=F[a+1]=F[a+3]=F[a+4]=F[a+8]=F[a+10]=1},Ea:function(a){V=nb[a];e.Rb=Z=V&&V.Fb;return!a||Z?0:-5},l:function(a){Z.activeTexture(a)},P:function(a,b){Z.attachShader(S[a],U[b])},e:function(a,b){35051==a?Z.Hb=b:35052==a&&(Z.Cb=b);Z.bindBuffer(a,
ib[b])},i:function(a,b){Z.bindFramebuffer(a,jb[b])},c:function(a,b){Z.bindTexture(a,lb[b])},N:function(a){Z.bindVertexArray(mb[a])},M:function(a,b,c,d){Z.blendColor(a,b,c,d)},L:function(a,b){Z.blendEquationSeparate(a,b)},K:function(a,b,c,d){Z.blendFuncSeparate(a,b,c,d)},o:function(a,b,c,d,f,k,l,q,r,n){Z.blitFramebuffer(a,b,c,d,f,k,l,q,r,n)},J:function(a,b,c,d){V.vb?c?Z.bufferData(a,B,d,c,b):Z.bufferData(a,b,d):Z.bufferData(a,c?B.subarray(c,c+b):b,d)},I:function(a,b,c,d){V.vb?Z.bufferSubData(a,b,B,
d,c):Z.bufferSubData(a,b,B.subarray(d,d+c))},Ca:function(a){Z.clear(a)},Ba:function(a,b,c,d){Z.clearColor(a,b,c,d)},Aa:function(a){Z.clearDepth(a)},za:function(a){Z.clearStencil(a)},u:function(a,b,c,d){Z.colorMask(!!a,!!b,!!c,!!d)},ya:function(a){Z.compileShader(U[a])},xa:function(){var a=pb(S),b=Z.createProgram();b.name=a;S[a]=b;return a},wa:function(a){var b=pb(U);U[b]=Z.createShader(a);return b},H:function(a){Z.cullFace(a)},va:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],f=ib[d];f&&(Z.deleteBuffer(f),
f.name=0,ib[d]=null,d==tb&&(tb=0),d==ub&&(ub=0),d==Z.Hb&&(Z.Hb=0),d==Z.Cb&&(Z.Cb=0))}},k:function(a,b){for(var c=0;c<a;++c){var d=F[b+4*c>>2],f=jb[d];f&&(Z.deleteFramebuffer(f),f.name=0,jb[d]=null)}},G:function(a){if(a){var b=S[a];b?(Z.deleteProgram(b),b.name=0,S[a]=null,W[a]=null):X(1281)}},F:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],f=kb[d];f&&(Z.deleteRenderbuffer(f),f.name=0,kb[d]=null)}},t:function(a){if(a){var b=U[a];b?(Z.deleteShader(b),U[a]=null):X(1281)}},ta:function(a,b){for(var c=
0;c<a;c++){var d=F[b+4*c>>2],f=lb[d];f&&(Z.deleteTexture(f),f.name=0,lb[d]=null)}},sa:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2];Z.deleteVertexArray(mb[d]);mb[d]=null}},s:function(a){Z.depthFunc(a)},r:function(a){Z.depthMask(!!a)},d:function(a){Z.disable(a)},b:function(a){Z.disableVertexAttribArray(a)},qa:function(a,b,c){Z.drawArrays(a,b,c)},n:function(a,b){for(var c=wb[a],d=0;d<a;d++)c[d]=F[b+4*d>>2];Z.drawBuffers(c)},pa:function(a,b,c,d){Z.drawElements(a,b,c,d)},h:function(a){Z.enable(a)},
oa:function(a){Z.enableVertexAttribArray(a)},E:function(a){Z.frontFace(a)},D:function(a,b){xb(a,b,"createBuffer",ib)},na:function(a,b){xb(a,b,"createTexture",lb)},ma:function(a,b){xb(a,b,"createVertexArray",mb)},la:function(a,b){return Z.getAttribLocation(S[a],A(b))},q:function(a,b){yb(a,b)},ja:function(a,b,c,d){a=Z.getProgramInfoLog(S[a]);null===a&&(a="(unknown error)");0<b&&d?(b=C(a,B,d,b),c&&(F[c>>2]=b)):c&&(F[c>>2]=0)},C:function(a,b,c){if(c)if(a>=gb)X(1281);else{var d=W[a];if(d)if(35716==b)a=
Z.getProgramInfoLog(S[a]),null===a&&(a="(unknown error)"),F[c>>2]=a.length+1;else if(35719==b)F[c>>2]=d.Eb;else if(35722==b){if(-1==d.Ab){a=S[a];var f=Z.getProgramParameter(a,35721);for(b=d.Ab=0;b<f;++b)d.Ab=Math.max(d.Ab,Z.getActiveAttrib(a,b).name.length+1)}F[c>>2]=d.Ab}else if(35381==b){if(-1==d.Bb)for(a=S[a],f=Z.getProgramParameter(a,35382),b=d.Bb=0;b<f;++b)d.Bb=Math.max(d.Bb,Z.getActiveUniformBlockName(a,b).length+1);F[c>>2]=d.Bb}else F[c>>2]=Z.getProgramParameter(S[a],b);else X(1282)}else X(1281)},
ia:function(a,b,c,d){a=Z.getShaderInfoLog(U[a]);null===a&&(a="(unknown error)");0<b&&d?(b=C(a,B,d,b),c&&(F[c>>2]=b)):c&&(F[c>>2]=0)},B:function(a,b,c){c?35716==b?(a=Z.getShaderInfoLog(U[a]),null===a&&(a="(unknown error)"),F[c>>2]=a.length+1):35720==b?(a=Z.getShaderSource(U[a]),F[c>>2]=null===a||0==a.length?0:a.length+1):F[c>>2]=Z.getShaderParameter(U[a],b):X(1281)},ha:function(a){if(ob[a])return ob[a];switch(a){case 7939:var b=Z.getSupportedExtensions();for(var c=[],d=0;d<b.length;++d)c.push(b[d]),
c.push("GL_"+b[d]);b=zb(c.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Z.getParameter(a))||X(1280);b=zb(b);break;case 7938:b=Z.getParameter(Z.VERSION);b=2<=V.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=zb(b);break;case 35724:b=Z.getParameter(Z.SHADING_LANGUAGE_VERSION);c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=zb(b);break;default:return X(1280),0}return ob[a]=b},j:function(a,
b){b=A(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,d)}return(a=W[a]&&W[a].Kb[b])&&0<=c&&c<a[0]?a[1]+c:-1},ga:function(a){Z.linkProgram(S[a]);var b=S[a];a=W[a]={Kb:{},Eb:0,Ab:-1,Bb:-1};for(var c=a.Kb,d=Z.getProgramParameter(b,35718),f=0;f<d;++f){var k=Z.getActiveUniform(b,f),l=k.name;a.Eb=Math.max(a.Eb,l.length+1);"]"==l.slice(-1)&&(l=l.slice(0,l.lastIndexOf("[")));var q=Z.getUniformLocation(b,l);if(q){var r=pb(T);c[l]=[k.size,r];T[r]=
q;for(var n=1;n<k.size;++n)q=Z.getUniformLocation(b,l+"["+n+"]"),r=pb(T),T[r]=q}}},A:function(a,b){Z.polygonOffset(a,b)},m:function(a){Z.readBuffer(a)},fa:function(a,b,c,d){Z.scissor(a,b,c,d)},ea:function(a,b,c,d){for(var f="",k=0;k<b;++k){var l=d?F[d+4*k>>2]:-1;f+=A(F[c+4*k>>2],0>l?void 0:l)}Z.shaderSource(U[a],f)},da:function(a,b,c){Z.stencilFunc(a,b,c)},y:function(a,b,c,d){Z.stencilFuncSeparate(a,b,c,d)},p:function(a){Z.stencilMask(a)},ca:function(a,b,c){Z.stencilOp(a,b,c)},x:function(a,b,c,d){Z.stencilOpSeparate(a,
b,c,d)},ba:function(a,b,c,d,f,k,l,q,r){V.vb?Z.Cb?Z.texImage2D(a,b,c,d,f,k,l,q,r):0!=r?Z.texImage2D(a,b,c,d,f,k,l,q,Db(q),r>>(Eb[q]|0)):Z.texImage2D(a,b,c,d,f,k,l,q,null):Z.texImage2D(a,b,c,d,f,k,l,q,r?Cb(q,l,d,f,r):null)},aa:function(a,b,c,d,f,k,l,q,r,n){Z.Cb?Z.texImage3D(a,b,c,d,f,k,l,q,r,n):0!=n?Z.texImage3D(a,b,c,d,f,k,l,q,r,Db(r),n>>(Eb[r]|0)):Z.texImage3D(a,b,c,d,f,k,l,q,r,null)},w:function(a,b,c){Z.texParameterf(a,b,c)},g:function(a,b,c){Z.texParameteri(a,b,c)},_:function(a,b,c){if(V.vb)Z.uniform1fv(T[a],
G,c>>2,b);else{if(256>=b)for(var d=Y[b-1],f=0;f<b;++f)d[f]=G[c+4*f>>2];else d=G.subarray(c>>2,c+4*b>>2);Z.uniform1fv(T[a],d)}},v:function(a,b){Z.uniform1i(T[a],b)},Z:function(a,b,c){if(V.vb)Z.uniform2fv(T[a],G,c>>2,2*b);else{if(256>=2*b)for(var d=Y[2*b-1],f=0;f<2*b;f+=2)d[f]=G[c+4*f>>2],d[f+1]=G[c+(4*f+4)>>2];else d=G.subarray(c>>2,c+8*b>>2);Z.uniform2fv(T[a],d)}},Y:function(a,b,c){if(V.vb)Z.uniform3fv(T[a],G,c>>2,3*b);else{if(256>=3*b)for(var d=Y[3*b-1],f=0;f<3*b;f+=3)d[f]=G[c+4*f>>2],d[f+1]=G[c+
(4*f+4)>>2],d[f+2]=G[c+(4*f+8)>>2];else d=G.subarray(c>>2,c+12*b>>2);Z.uniform3fv(T[a],d)}},X:function(a,b,c){if(V.vb)Z.uniform4fv(T[a],G,c>>2,4*b);else{if(256>=4*b)for(var d=Y[4*b-1],f=0;f<4*b;f+=4)d[f]=G[c+4*f>>2],d[f+1]=G[c+(4*f+4)>>2],d[f+2]=G[c+(4*f+8)>>2],d[f+3]=G[c+(4*f+12)>>2];else d=G.subarray(c>>2,c+16*b>>2);Z.uniform4fv(T[a],d)}},W:function(a,b,c,d){if(V.vb)Z.uniformMatrix4fv(T[a],!!c,G,d>>2,16*b);else{if(256>=16*b)for(var f=Y[16*b-1],k=0;k<16*b;k+=16)f[k]=G[d+4*k>>2],f[k+1]=G[d+(4*k+4)>>
2],f[k+2]=G[d+(4*k+8)>>2],f[k+3]=G[d+(4*k+12)>>2],f[k+4]=G[d+(4*k+16)>>2],f[k+5]=G[d+(4*k+20)>>2],f[k+6]=G[d+(4*k+24)>>2],f[k+7]=G[d+(4*k+28)>>2],f[k+8]=G[d+(4*k+32)>>2],f[k+9]=G[d+(4*k+36)>>2],f[k+10]=G[d+(4*k+40)>>2],f[k+11]=G[d+(4*k+44)>>2],f[k+12]=G[d+(4*k+48)>>2],f[k+13]=G[d+(4*k+52)>>2],f[k+14]=G[d+(4*k+56)>>2],f[k+15]=G[d+(4*k+60)>>2];else f=G.subarray(d>>2,d+64*b>>2);Z.uniformMatrix4fv(T[a],!!c,f)}},V:function(a){Z.useProgram(S[a])},U:function(a,b){Z.vertexAttribDivisor(a,b)},T:function(a,
b,c,d,f,k){Z.vertexAttribPointer(a,b,c,!!d,f,k)},Wa:function(a,b,c,d){Z.viewport(a,b,c,d)},Va:function(){window.addEventListener("beforeunload",function(a){0!=Jb()&&(a.preventDefault(),a.returnValue=" ")})},Ua:function(){v("OOM")},a:25328},buffer);e.asm=Kb;e.___em_js__sapp_js_create_textfield=function(){return e.asm.Ya.apply(null,arguments)};e.___em_js__sapp_js_focus_textfield=function(){return e.asm.Za.apply(null,arguments)};
e.___em_js__sapp_js_hook_beforeunload=function(){return e.asm._a.apply(null,arguments)};e.___em_js__sapp_js_unfocus_textfield=function(){return e.asm.$a.apply(null,arguments)};e.___em_js__saudio_js_buffer_frames=function(){return e.asm.ab.apply(null,arguments)};e.___em_js__saudio_js_init=function(){return e.asm.bb.apply(null,arguments)};e.___em_js__saudio_js_sample_rate=function(){return e.asm.cb.apply(null,arguments)};
e.___em_js__sfetch_js_send_head_request=function(){return e.asm.db.apply(null,arguments)};e.___em_js__sfetch_js_send_range_request=function(){return e.asm.eb.apply(null,arguments)};e.___em_js__stm_js_perfnow=function(){return e.asm.fb.apply(null,arguments)};e.__sapp_emsc_notify_keyboard_hidden=function(){return e.asm.gb.apply(null,arguments)};var Jb=e.__sapp_html5_get_ask_leave_site=function(){return e.asm.hb.apply(null,arguments)};e.__saudio_emsc_pull=function(){return e.asm.ib.apply(null,arguments)};
e.__sfetch_emsc_failed=function(){return e.asm.jb.apply(null,arguments)};e.__sfetch_emsc_head_response=function(){return e.asm.kb.apply(null,arguments)};e.__sfetch_emsc_range_response=function(){return e.asm.lb.apply(null,arguments)};e._free=function(){return e.asm.mb.apply(null,arguments)};e._main=function(){return e.asm.nb.apply(null,arguments)};
var P=e._malloc=function(){return e.asm.ob.apply(null,arguments)},ma=e.stackAlloc=function(){return e.asm.tb.apply(null,arguments)},Ib=e.dynCall_idi=function(){return e.asm.pb.apply(null,arguments)},Q=e.dynCall_iiii=function(){return e.asm.qb.apply(null,arguments)};e.dynCall_v=function(){return e.asm.rb.apply(null,arguments)};e.dynCall_vi=function(){return e.asm.sb.apply(null,arguments)};e.asm=Kb;
function w(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}w.prototype=Error();w.prototype.constructor=w;J=function Lb(){e.calledRun||Mb();e.calledRun||(J=Lb)};
e.callMain=function(a){a=a||[];var b=a.length+1,c=ma(4*(b+1));F[c>>2]=la(e.thisProgram);for(var d=1;d<b;d++)F[(c>>2)+d]=la(a[d-1]);F[(c>>2)+b]=0;try{var f=e._main(b,c,0);if(!e.noExitRuntime||0!==f){if(!e.noExitRuntime&&(ia=!0,e.onExit))e.onExit(f);e.quit(f,new w(f))}}catch(k){k instanceof w||("SimulateInfiniteLoop"==k?e.noExitRuntime=!0:((a=k)&&"object"===typeof k&&k.stack&&(a=[k,k.stack]),x("exception thrown: "+a),e.quit(1,k)))}finally{}};
function Mb(a){function b(){if(!e.calledRun&&(e.calledRun=!0,!ia)){sa(ua);sa(va);if(e.onRuntimeInitialized)e.onRuntimeInitialized();e._main&&Nb&&e.callMain(a);if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;){var b=e.postRun.shift();xa.unshift(b)}sa(xa)}}a=a||e.arguments;if(!(0<I)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)ya();sa(ta);0<I||e.calledRun||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},
1);b()},1)):b())}}e.run=Mb;function v(a){if(e.onAbort)e.onAbort(a);void 0!==a?(fa(a),x(a),a='"'+a+'"'):a="";ia=!0;throw"abort("+a+"). Build with -s ASSERTIONS=1 for more info.";}e.abort=v;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();var Nb=!0;e.noInitialRun&&(Nb=!1);e.noExitRuntime=!0;Mb();
