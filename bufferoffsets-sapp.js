var e;e||(e=typeof Module !== 'undefined' ? Module : {});var f={},h;for(h in e)e.hasOwnProperty(h)&&(f[h]=e[h]);e.arguments=[];e.thisProgram="./this.program";e.quit=function(a,b){throw b;};e.preRun=[];e.postRun=[];var p=!1,q=!1,aa=!1,ba=!1,ca=!1;p="object"===typeof window;q="function"===typeof importScripts;aa=(ba="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)&&!p&&!q;ca=!p&&!aa&&!q;var r="";
if(aa){r=__dirname+"/";var da,ea;e.read=function(a,b){da||(da=require("fs"));ea||(ea=require("path"));a=ea.normalize(a);a=da.readFileSync(a);return b?a:a.toString()};e.readBinary=function(a){a=e.read(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||u("Assertion failed: undefined");return a};1<process.argv.length&&(e.thisProgram=process.argv[1].replace(/\\/g,"/"));e.arguments=process.argv.slice(2);"undefined"!==typeof module&&(module.exports=e);process.on("uncaughtException",function(a){if(!(a instanceof
v))throw a;});process.on("unhandledRejection",u);e.quit=function(a){process.exit(a)};e.inspect=function(){return"[Emscripten Module object]"}}else if(ca)"undefined"!=typeof read&&(e.read=function(a){return read(a)}),e.readBinary=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");"object"===typeof a||u("Assertion failed: undefined");return a},"undefined"!=typeof scriptArgs?e.arguments=scriptArgs:"undefined"!=typeof arguments&&(e.arguments=arguments),
"function"===typeof quit&&(e.quit=function(a){quit(a)});else if(p||q)q?r=self.location.href:document.currentScript&&(r=document.currentScript.src),r=0!==r.indexOf("blob:")?r.substr(0,r.lastIndexOf("/")+1):"",e.read=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},q&&(e.readBinary=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),e.readAsync=function(a,b,c){var d=new XMLHttpRequest;
d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)},e.setWindowTitle=function(a){document.title=a};var fa=e.print||("undefined"!==typeof console?console.log.bind(console):"undefined"!==typeof print?print:null),w=e.printErr||("undefined"!==typeof printErr?printErr:"undefined"!==typeof console&&console.warn.bind(console)||fa);for(h in f)f.hasOwnProperty(h)&&(e[h]=f[h]);f=void 0;
var ha={"f64-rem":function(a,b){return a%b},"debugger":function(){debugger}};"object"!==typeof WebAssembly&&w("no native wasm support detected");var x,ia=!1,ja="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function y(a,b){if(a){var c=z,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&ja)a=ja.decode(c.subarray(a,b));else{for(d="";a<b;){var g=c[a++];if(g&128){var k=c[a++]&63;if(192==(g&224))d+=String.fromCharCode((g&31)<<6|k);else{var l=c[a++]&63;g=224==(g&240)?(g&15)<<12|k<<6|l:(g&7)<<18|k<<12|l<<6|c[a++]&63;65536>g?d+=String.fromCharCode(g):(g-=65536,d+=String.fromCharCode(55296|g>>10,56320|g&1023))}}else d+=String.fromCharCode(g)}a=d}}else a="";return a}
function A(a,b,c,d){if(!(0<d))return 0;var g=c;d=c+d-1;for(var k=0;k<a.length;++k){var l=a.charCodeAt(k);if(55296<=l&&57343>=l){var D=a.charCodeAt(++k);l=65536+((l&1023)<<10)|D&1023}if(127>=l){if(c>=d)break;b[c++]=l}else{if(2047>=l){if(c+1>=d)break;b[c++]=192|l>>6}else{if(65535>=l){if(c+2>=d)break;b[c++]=224|l>>12}else{if(c+3>=d)break;b[c++]=240|l>>18;b[c++]=128|l>>12&63}b[c++]=128|l>>6&63}b[c++]=128|l&63}}b[c]=0;return c-g}
function ka(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function la(a){var b=ka(a)+1,c=ma(b);A(a,na,c,b);return c}function oa(a){0<a%65536&&(a+=65536-a%65536);return a}var buffer,na,z,pa,B,C;
function qa(){e.HEAP8=na=new Int8Array(buffer);e.HEAP16=pa=new Int16Array(buffer);e.HEAP32=B=new Int32Array(buffer);e.HEAPU8=z=new Uint8Array(buffer);e.HEAPU16=new Uint16Array(buffer);e.HEAPU32=new Uint32Array(buffer);e.HEAPF32=new Float32Array(buffer);e.HEAPF64=C=new Float64Array(buffer)}var E=e.TOTAL_MEMORY||33554432;5242880>E&&w("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+E+"! (TOTAL_STACK=5242880)");e.wasmMemory?x=e.wasmMemory:x=new WebAssembly.Memory({initial:E/65536});
x&&(buffer=x.buffer);E=buffer.byteLength;qa();B[6004]=5266928;function F(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.Jb;"number"===typeof c?void 0===b.rb?e.dynCall_v(c):e.dynCall_vi(c,b.rb):c(void 0===b.rb?null:b.rb)}}}var ra=[],sa=[],ta=[],ua=[],wa=[];function xa(){var a=e.preRun.shift();ra.unshift(a)}var G=0,ya=null,H=null;e.preloadedImages={};e.preloadedAudios={};
function za(){var a=I;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var I="bufferoffsets-sapp.wasm";if(!za()){var Aa=I;I=e.locateFile?e.locateFile(Aa,r):r+Aa}function Ba(){try{if(e.wasmBinary)return new Uint8Array(e.wasmBinary);if(e.readBinary)return e.readBinary(I);throw"both async and sync fetching of the wasm failed";}catch(a){u(a)}}
function Ca(){return e.wasmBinary||!p&&!q||"function"!==typeof fetch?new Promise(function(a){a(Ba())}):fetch(I,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+I+"'";return a.arrayBuffer()}).catch(function(){return Ba()})}
function Da(a){function b(a){e.asm=a.exports;G--;e.monitorRunDependencies&&e.monitorRunDependencies(G);0==G&&(null!==ya&&(clearInterval(ya),ya=null),H&&(a=H,H=null,a()))}function c(a){b(a.instance)}function d(a){return Ca().then(function(a){return WebAssembly.instantiate(a,g)}).then(a,function(a){w("failed to asynchronously prepare wasm: "+a);u(a)})}var g={env:a,global:{NaN:NaN,Infinity:Infinity},"global.Math":Math,asm2wasm:ha};G++;e.monitorRunDependencies&&e.monitorRunDependencies(G);if(e.instantiateWasm)try{return e.instantiateWasm(g,
b)}catch(k){return w("Module.instantiateWasm callback failed with error: "+k),!1}(function(){if(e.wasmBinary||"function"!==typeof WebAssembly.instantiateStreaming||za()||"function"!==typeof fetch)return d(c);fetch(I,{credentials:"same-origin"}).then(function(a){return WebAssembly.instantiateStreaming(a,g).then(c,function(a){w("wasm streaming compile failed: "+a);w("falling back to ArrayBuffer instantiation");d(c)})})})();return{}}
e.asm=function(a,b){b.memory=x;b.table=new WebAssembly.Table({initial:27,maximum:27,element:"anyfunc"});b.__memory_base=1024;b.__table_base=0;return Da(b)};var Ea=0,J=0,K=0,Fa=0,Ga=0,Ha=null,Ia=null,Ja=!1;function Ka(){for(var a=L.length-1;0<=a;--a)La(a);L=[];Ma=[]}var Ma=[];function Na(){if(Oa&&Pa.lb)for(var a=0;a<Ma.length;++a){var b=Ma[a];Ma.splice(a,1);--a;b.Nb.apply(this,b.Gb)}}var Oa=0,Pa=null,L=[];
function Qa(){return-1!==navigator.userAgent.indexOf("MSIE")||0<navigator.appVersion.indexOf("Trident/")}function La(a){var b=L[a];b.target.removeEventListener(b.kb,b.Bb,b.mb);L.splice(a,1)}function M(a){function b(b){++Oa;Pa=a;Na();a.ob(b);Na();--Oa}if(a.nb)a.Bb=b,a.target.addEventListener(a.kb,b,a.mb),L.push(a),Ja||(ua.push(Ka),Ja=!0);else for(var c=0;c<L.length;++c)L[c].target==a.target&&L[c].kb==a.kb&&La(c--)}
var Ra=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function N(a){try{if(!a)return window;"number"===typeof a&&(a=Ra[a]||y(a));return"#window"===a?window:"#document"===a?document:"#screen"===a?screen:"#canvas"===a?e.canvas:"string"===typeof a?document.getElementById(a):a}catch(b){return null}}function Sa(){return na.length}
function Ta(a){"number"===typeof a&&(a=y(a));return a&&"#canvas"!==a?"undefined"!==typeof Ua&&Va[a]?Va[a]:N(a):"undefined"!==typeof Ua&&Va.canvas?Va.canvas:e.canvas}
function Wa(a,b,c,d,g,k){Ea||(Ea=P(164));a={target:N(a),lb:Qa()?!1:!0,kb:k,nb:d,ob:function(a){a=a||window.event;var c=Ea;A(a.key?a.key:"",z,c+0,32);A(a.code?a.code:"",z,c+32,32);B[c+64>>2]=a.location;B[c+68>>2]=a.ctrlKey;B[c+72>>2]=a.shiftKey;B[c+76>>2]=a.altKey;B[c+80>>2]=a.metaKey;B[c+84>>2]=a.repeat;A(a.locale?a.locale:"",z,c+88,32);A(a.char?a.char:"",z,c+120,32);B[c+152>>2]=a.charCode;B[c+156>>2]=a.keyCode;B[c+160>>2]=a.which;Q(d,g,c,b)&&a.preventDefault()},mb:c};M(a)}
function Za(a,b,c){C[a>>3]=window.performance&&window.performance.now?window.performance.now():Date.now();B[a+8>>2]=b.screenX;B[a+12>>2]=b.screenY;B[a+16>>2]=b.clientX;B[a+20>>2]=b.clientY;B[a+24>>2]=b.ctrlKey;B[a+28>>2]=b.shiftKey;B[a+32>>2]=b.altKey;B[a+36>>2]=b.metaKey;pa[a+40>>1]=b.button;pa[a+42>>1]=b.buttons;B[a+44>>2]=b.movementX||b.mozMovementX||b.webkitMovementX||b.screenX-Ha;B[a+48>>2]=b.movementY||b.mozMovementY||b.webkitMovementY||b.screenY-Ia;if(e.canvas){var d=e.canvas.getBoundingClientRect();
B[a+60>>2]=b.clientX-d.left;B[a+64>>2]=b.clientY-d.top}else B[a+60>>2]=0,B[a+64>>2]=0;c?(d=c.getBoundingClientRect?c.getBoundingClientRect():{left:0,top:0},B[a+52>>2]=b.clientX-d.left,B[a+56>>2]=b.clientY-d.top):(B[a+52>>2]=0,B[a+56>>2]=0);"wheel"!==b.type&&"mousewheel"!==b.type&&(Ha=b.screenX,Ia=b.screenY)}
function R(a,b,c,d,g,k){J||(J=P(72));a=N(a);c={target:a,lb:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,kb:k,nb:d,ob:function(c){c=c||window.event;Za(J,c,a);Q(d,g,J,b)&&c.preventDefault()},mb:c};Qa()&&"mousedown"==k&&(c.lb=!1);M(c)}
function $a(a,b,c,d){Fa||(Fa=P(36));a=N(a);M({target:a,lb:!1,kb:"resize",nb:d,ob:function(c){c=c||window.event;if(c.target==a){var g=0<window.pageXOffset||0<window.pageYOffset?[window.pageXOffset,window.pageYOffset]:"undefined"!==typeof document.documentElement.scrollLeft||"undefined"!==typeof document.documentElement.scrollTop?[document.documentElement.scrollLeft,document.documentElement.scrollTop]:[document.body.scrollLeft|0,document.body.scrollTop|0],l=Fa;B[l>>2]=c.detail;B[l+4>>2]=document.body.clientWidth;
B[l+8>>2]=document.body.clientHeight;B[l+12>>2]=window.innerWidth;B[l+16>>2]=window.innerHeight;B[l+20>>2]=window.outerWidth;B[l+24>>2]=window.outerHeight;B[l+28>>2]=g[0];B[l+32>>2]=g[1];Q(d,10,l,b)&&c.preventDefault()}},mb:c})}
function ab(a,b,c,d,g,k){Ga||(Ga=P(1684));a=N(a);M({target:a,lb:"touchstart"==k||"touchend"==k,kb:k,nb:d,ob:function(c){c=c||window.event;for(var l={},k=0;k<c.touches.length;++k){var n=c.touches[k];n.ub=!1;l[n.identifier]=n}for(k=0;k<c.changedTouches.length;++k)n=c.changedTouches[k],l[n.identifier]=n,n.ub=!0;for(k=0;k<c.targetTouches.length;++k)n=c.targetTouches[k],l[n.identifier].Eb=!0;var m=n=Ga;B[m+4>>2]=c.ctrlKey;B[m+8>>2]=c.shiftKey;B[m+12>>2]=c.altKey;B[m+16>>2]=c.metaKey;m+=20;var va=e.canvas?
e.canvas.getBoundingClientRect():void 0,Xa=a.getBoundingClientRect?a.getBoundingClientRect():{left:0,top:0},Ya=0;for(k in l){var t=l[k];B[m>>2]=t.identifier;B[m+4>>2]=t.screenX;B[m+8>>2]=t.screenY;B[m+12>>2]=t.clientX;B[m+16>>2]=t.clientY;B[m+20>>2]=t.pageX;B[m+24>>2]=t.pageY;B[m+28>>2]=t.ub;B[m+32>>2]=t.Eb;va?(B[m+44>>2]=t.clientX-va.left,B[m+48>>2]=t.clientY-va.top):(B[m+44>>2]=0,B[m+48>>2]=0);B[m+36>>2]=t.clientX-Xa.left;B[m+40>>2]=t.clientY-Xa.top;m+=52;if(32<=++Ya)break}B[n>>2]=Ya;Q(d,g,n,b)&&
c.preventDefault()},mb:c})}function bb(a,b,c,d,g,k){a||(a=e.canvas);a={target:N(a),lb:!1,kb:k,nb:d,ob:function(a){a=a||window.event;Q(d,g,0,b)&&a.preventDefault()},mb:c};M(a)}
function cb(a,b,c,d,g){function k(c){c=c||window.event;Za(K,c,a);C[K+72>>3]=c.wheelDeltaX||0;C[K+80>>3]=-(c.wheelDeltaY?c.wheelDeltaY:c.wheelDelta);C[K+88>>3]=0;B[K+96>>2]=0;Q(d,9,K,b)&&c.preventDefault()}function l(c){c=c||window.event;var g=K;Za(g,c,a);C[g+72>>3]=c.deltaX;C[g+80>>3]=c.deltaY;C[g+88>>3]=c.deltaZ;B[g+96>>2]=c.deltaMode;Q(d,9,g,b)&&c.preventDefault()}K||(K=P(104));M({target:a,lb:!0,kb:g,nb:d,ob:"wheel"==g?l:k,mb:c})}
var db=1,eb=0,fb=[],S=[],gb=[],hb=[],ib=[],T=[],U=[],jb=[],kb={},V=null,Va={},W={},lb={};function X(a){eb||(eb=a)}function Y(a){for(var b=db++,c=a.length;c<b;c++)a[c]=null;return b}function mb(a,b){function c(){var a=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);return a?parseInt(a[2],10):!1}var d=P(8),g={handle:d,attributes:b,version:b.yb,tb:a};g.zb=2<=g.version&&(!1===c()||58<=c());a.canvas&&(a.canvas.Fb=g);kb[d]=g;("undefined"===typeof b.xb||b.xb)&&nb(g);return d}
function nb(a){a||(a=V);if(!a.Db){a.Db=!0;var b=a.tb;if(2>a.version){var c=b.getExtension("ANGLE_instanced_arrays");c&&(b.vertexAttribDivisor=function(a,b){c.vertexAttribDivisorANGLE(a,b)},b.drawArraysInstanced=function(a,b,d,g){c.drawArraysInstancedANGLE(a,b,d,g)},b.drawElementsInstanced=function(a,b,d,g,k){c.drawElementsInstancedANGLE(a,b,d,g,k)});var d=b.getExtension("OES_vertex_array_object");d&&(b.createVertexArray=function(){return d.createVertexArrayOES()},b.deleteVertexArray=function(a){d.deleteVertexArrayOES(a)},
b.bindVertexArray=function(a){d.bindVertexArrayOES(a)},b.isVertexArray=function(a){return d.isVertexArrayOES(a)});var g=b.getExtension("WEBGL_draw_buffers");g&&(b.drawBuffers=function(a,b){g.drawBuffersWEBGL(a,b)})}b.Ib=b.getExtension("EXT_disjoint_timer_query");var k="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2".split(" ");
(a=b.getSupportedExtensions())&&0<a.length&&b.getSupportedExtensions().forEach(function(a){-1!=k.indexOf(a)&&b.getExtension(a)})}}var Ua={},ob,pb,qb=["default","low-power","high-performance"],rb=[];function sb(a,b,c,d){for(var g=0;g<a;g++){var k=Z[c](),l=k&&Y(d);k?(k.name=l,d[l]=k):X(1282);B[b+4*g>>2]=l}}
function tb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=Z.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>V.version){X(1282);return}d=Z.getSupportedExtensions();c=null===d?0:2*d.length;break;case 33307:case 33308:if(2>V.version){X(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=Z.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":X(1280);return;case "object":if(null===
d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 35097:case 36389:case 34068:c=0;break;default:X(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)B[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(g){X(1280);w("GL_INVALID_ENUM in glGetIntegerv: Unknown object returned from WebGL getParameter("+a+")! (error: "+g+")");return}}break;default:X(1280);return}B[b>>2]=c}else X(1281)}
function ub(a){var b=ka(a)+1,c=P(b);A(a,z,c,b);return c}function vb(a){a=oa(a);var b=buffer.byteLength;try{return-1!==x.grow((a-b)/65536)?(buffer=x.buffer,!0):!1}catch(c){return!1}}for(var Z,wb=0;256>wb;wb++);for(var xb=0;32>xb;xb++)rb.push(Array(xb));
var Ab=e.asm({},{g:u,Q:function(a){e.___errno_location&&(B[e.___errno_location()>>2]=a);return a},P:function(){return window.devicePixelRatio||1},M:function(a,b,c){a=a?N(a):e.canvas;if(!a)return-4;a.getBoundingClientRect?(a=a.getBoundingClientRect(),C[b>>3]=a.right-a.left,C[c>>3]=a.bottom-a.top):(C[b>>3]=a.clientWidth,C[c>>3]=a.clientHeight);return 0},wa:Sa,na:function(a,b,c){z.set(z.subarray(b,b+c),a)},ka:function(a,b){function c(d){yb(a,d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},
ea:function(a){if(2147418112<a)return!1;for(var b=Math.max(Sa(),16777216);b<a;)536870912>=b?b=oa(2*b):b=Math.min(oa((3*b+2147483648)/4),2147418112);if(!vb(b))return!1;qa();return!0},x:function(a,b,c){a=Ta(a);if(!a)return-4;a.width=b;a.height=c;return 0},U:function(a,b,c,d){Wa(a,b,c,d,2,"keydown");return 0},Na:function(a,b,c,d){Wa(a,b,c,d,1,"keypress");return 0},Ma:function(a,b,c,d){Wa(a,b,c,d,3,"keyup");return 0},La:function(a,b,c,d){R(a,b,c,d,5,"mousedown");return 0},Ka:function(a,b,c,d){R(a,b,c,
d,33,"mouseenter");return 0},Ja:function(a,b,c,d){R(a,b,c,d,34,"mouseleave");return 0},Ia:function(a,b,c,d){R(a,b,c,d,8,"mousemove");return 0},Ha:function(a,b,c,d){R(a,b,c,d,6,"mouseup");return 0},Ga:function(a,b,c,d){$a(a,b,c,d);return 0},Fa:function(a,b,c,d){ab(a,b,c,d,25,"touchcancel");return 0},Ea:function(a,b,c,d){ab(a,b,c,d,23,"touchend");return 0},Da:function(a,b,c,d){ab(a,b,c,d,24,"touchmove");return 0},Ca:function(a,b,c,d){ab(a,b,c,d,22,"touchstart");return 0},Ba:function(a,b,c,d){bb(a,b,
c,d,31,"webglcontextlost");return 0},Aa:function(a,b,c,d){bb(a,b,c,d,32,"webglcontextrestored");return 0},za:function(a,b,c,d){a=N(a);return"undefined"!==typeof a.onwheel?(cb(a,b,c,d,"wheel"),0):"undefined"!==typeof a.onmousewheel?(cb(a,b,c,d,"mousewheel"),0):-1},O:function(a,b){var c={};b>>=2;c.alpha=!!B[b];c.depth=!!B[b+1];c.stencil=!!B[b+2];c.antialias=!!B[b+3];c.premultipliedAlpha=!!B[b+4];c.preserveDrawingBuffer=!!B[b+5];c.powerPreference=qb[B[b+6]];c.failIfMajorPerformanceCaveat=!!B[b+7];c.yb=
B[b+8];c.Kb=B[b+9];c.xb=B[b+10];c.Cb=B[b+11];c.Lb=B[b+12];c.Mb=B[b+13];a=Ta(a);!a||c.Cb?c=0:c=(a=1<c.yb?a.getContext("webgl2",c):a.getContext("webgl",c)||a.getContext("experimental-webgl",c))?mb(a,c):0;return c},ya:function(a){a>>=2;for(var b=0;14>b;++b)B[a+b]=0;B[a]=B[a+1]=B[a+3]=B[a+4]=B[a+8]=B[a+10]=1},xa:function(a){V=kb[a];e.Hb=Z=V&&V.tb;return!a||Z?0:-5},n:function(a){Z.activeTexture(a)},N:function(a,b){Z.attachShader(S[a],U[b])},e:function(a,b){35051==a?Z.vb=b:35052==a&&(Z.wb=b);Z.bindBuffer(a,
fb[b])},h:function(a,b){Z.bindFramebuffer(a,gb[b])},c:function(a,b){Z.bindTexture(a,ib[b])},L:function(a){Z.bindVertexArray(jb[a])},K:function(a,b,c,d){Z.blendColor(a,b,c,d)},J:function(a,b){Z.blendEquationSeparate(a,b)},I:function(a,b,c,d){Z.blendFuncSeparate(a,b,c,d)},m:function(a,b,c,d,g,k,l,D,O,n){Z.blitFramebuffer(a,b,c,d,g,k,l,D,O,n)},H:function(a,b,c,d){V.zb?c?Z.bufferData(a,z,d,c,b):Z.bufferData(a,b,d):Z.bufferData(a,c?z.subarray(c,c+b):b,d)},G:function(a,b,c,d){V.zb?Z.bufferSubData(a,b,z,
d,c):Z.bufferSubData(a,b,z.subarray(d,d+c))},va:function(a){Z.clear(a)},ua:function(a,b,c,d){Z.clearColor(a,b,c,d)},ta:function(a){Z.clearDepth(a)},sa:function(a){Z.clearStencil(a)},t:function(a,b,c,d){Z.colorMask(!!a,!!b,!!c,!!d)},ra:function(a){Z.compileShader(U[a])},qa:function(){var a=Y(S),b=Z.createProgram();b.name=a;S[a]=b;return a},pa:function(a){var b=Y(U);U[b]=Z.createShader(a);return b},F:function(a){Z.cullFace(a)},oa:function(a,b){for(var c=0;c<a;c++){var d=B[b+4*c>>2],g=fb[d];g&&(Z.deleteBuffer(g),
g.name=0,fb[d]=null,d==ob&&(ob=0),d==pb&&(pb=0),d==Z.vb&&(Z.vb=0),d==Z.wb&&(Z.wb=0))}},j:function(a,b){for(var c=0;c<a;++c){var d=B[b+4*c>>2],g=gb[d];g&&(Z.deleteFramebuffer(g),g.name=0,gb[d]=null)}},E:function(a){if(a){var b=S[a];b?(Z.deleteProgram(b),b.name=0,S[a]=null,W[a]=null):X(1281)}},D:function(a,b){for(var c=0;c<a;c++){var d=B[b+4*c>>2],g=hb[d];g&&(Z.deleteRenderbuffer(g),g.name=0,hb[d]=null)}},s:function(a){if(a){var b=U[a];b?(Z.deleteShader(b),U[a]=null):X(1281)}},ma:function(a,b){for(var c=
0;c<a;c++){var d=B[b+4*c>>2],g=ib[d];g&&(Z.deleteTexture(g),g.name=0,ib[d]=null)}},la:function(a,b){for(var c=0;c<a;c++){var d=B[b+4*c>>2];Z.deleteVertexArray(jb[d]);jb[d]=null}},r:function(a){Z.depthFunc(a)},q:function(a){Z.depthMask(!!a)},d:function(a){Z.disable(a)},b:function(a){Z.disableVertexAttribArray(a)},ja:function(a,b,c){Z.drawArrays(a,b,c)},l:function(a,b){for(var c=rb[a],d=0;d<a;d++)c[d]=B[b+4*d>>2];Z.drawBuffers(c)},ia:function(a,b,c,d){Z.drawElements(a,b,c,d)},f:function(a){Z.enable(a)},
ha:function(a){Z.enableVertexAttribArray(a)},C:function(a){Z.frontFace(a)},B:function(a,b){sb(a,b,"createBuffer",fb)},ga:function(a,b){sb(a,b,"createVertexArray",jb)},fa:function(a,b){return Z.getAttribLocation(S[a],y(b))},p:function(a,b){tb(a,b)},da:function(a,b,c,d){a=Z.getProgramInfoLog(S[a]);null===a&&(a="(unknown error)");0<b&&d?(b=A(a,z,d,b),c&&(B[c>>2]=b)):c&&(B[c>>2]=0)},A:function(a,b,c){if(c)if(a>=db)X(1281);else{var d=W[a];if(d)if(35716==b)a=Z.getProgramInfoLog(S[a]),null===a&&(a="(unknown error)"),
B[c>>2]=a.length+1;else if(35719==b)B[c>>2]=d.sb;else if(35722==b){if(-1==d.pb){a=S[a];var g=Z.getProgramParameter(a,35721);for(b=d.pb=0;b<g;++b)d.pb=Math.max(d.pb,Z.getActiveAttrib(a,b).name.length+1)}B[c>>2]=d.pb}else if(35381==b){if(-1==d.qb)for(a=S[a],g=Z.getProgramParameter(a,35382),b=d.qb=0;b<g;++b)d.qb=Math.max(d.qb,Z.getActiveUniformBlockName(a,b).length+1);B[c>>2]=d.qb}else B[c>>2]=Z.getProgramParameter(S[a],b);else X(1282)}else X(1281)},ca:function(a,b,c,d){a=Z.getShaderInfoLog(U[a]);null===
a&&(a="(unknown error)");0<b&&d?(b=A(a,z,d,b),c&&(B[c>>2]=b)):c&&(B[c>>2]=0)},z:function(a,b,c){c?35716==b?(a=Z.getShaderInfoLog(U[a]),null===a&&(a="(unknown error)"),B[c>>2]=a.length+1):35720==b?(a=Z.getShaderSource(U[a]),B[c>>2]=null===a||0==a.length?0:a.length+1):B[c>>2]=Z.getShaderParameter(U[a],b):X(1281)},ba:function(a){if(lb[a])return lb[a];switch(a){case 7939:var b=Z.getSupportedExtensions();for(var c=[],d=0;d<b.length;++d)c.push(b[d]),c.push("GL_"+b[d]);b=ub(c.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=
Z.getParameter(a))||X(1280);b=ub(b);break;case 7938:b=Z.getParameter(Z.VERSION);b=2<=V.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=ub(b);break;case 35724:b=Z.getParameter(Z.SHADING_LANGUAGE_VERSION);c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=ub(b);break;default:return X(1280),0}return lb[a]=b},i:function(a,b){b=y(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+
1)):0;b=b.slice(0,d)}return(a=W[a]&&W[a].Ab[b])&&0<=c&&c<a[0]?a[1]+c:-1},aa:function(a){Z.linkProgram(S[a]);var b=S[a];a=W[a]={Ab:{},sb:0,pb:-1,qb:-1};for(var c=a.Ab,d=Z.getProgramParameter(b,35718),g=0;g<d;++g){var k=Z.getActiveUniform(b,g),l=k.name;a.sb=Math.max(a.sb,l.length+1);"]"==l.slice(-1)&&(l=l.slice(0,l.lastIndexOf("[")));var D=Z.getUniformLocation(b,l);if(D){var O=Y(T);c[l]=[k.size,O];T[O]=D;for(var n=1;n<k.size;++n)D=Z.getUniformLocation(b,l+"["+n+"]"),O=Y(T),T[O]=D}}},y:function(a,b){Z.polygonOffset(a,
b)},k:function(a){Z.readBuffer(a)},$:function(a,b,c,d){Z.scissor(a,b,c,d)},_:function(a,b,c,d){for(var g="",k=0;k<b;++k){var l=d?B[d+4*k>>2]:-1;g+=y(B[c+4*k>>2],0>l?void 0:l)}Z.shaderSource(U[a],g)},Z:function(a,b,c){Z.stencilFunc(a,b,c)},w:function(a,b,c,d){Z.stencilFuncSeparate(a,b,c,d)},o:function(a){Z.stencilMask(a)},Y:function(a,b,c){Z.stencilOp(a,b,c)},v:function(a,b,c,d){Z.stencilOpSeparate(a,b,c,d)},u:function(a,b){Z.uniform1i(T[a],b)},X:function(a){Z.useProgram(S[a])},W:function(a,b){Z.vertexAttribDivisor(a,
b)},V:function(a,b,c,d,g,k){Z.vertexAttribPointer(a,b,c,!!d,g,k)},T:function(a,b,c,d){Z.viewport(a,b,c,d)},S:function(){window.addEventListener("beforeunload",function(a){0!=zb()&&(a.preventDefault(),a.returnValue=" ")})},R:function(){u("OOM")},a:24016},buffer);e.asm=Ab;e.___em_js__sapp_js_create_textfield=function(){return e.asm.Oa.apply(null,arguments)};e.___em_js__sapp_js_focus_textfield=function(){return e.asm.Pa.apply(null,arguments)};
e.___em_js__sapp_js_hook_beforeunload=function(){return e.asm.Qa.apply(null,arguments)};e.___em_js__sapp_js_unfocus_textfield=function(){return e.asm.Ra.apply(null,arguments)};e.___em_js__saudio_js_buffer_frames=function(){return e.asm.Sa.apply(null,arguments)};e.___em_js__saudio_js_init=function(){return e.asm.Ta.apply(null,arguments)};e.___em_js__saudio_js_sample_rate=function(){return e.asm.Ua.apply(null,arguments)};
e.___em_js__sfetch_js_send_head_request=function(){return e.asm.Va.apply(null,arguments)};e.___em_js__sfetch_js_send_range_request=function(){return e.asm.Wa.apply(null,arguments)};e.___em_js__stm_js_perfnow=function(){return e.asm.Xa.apply(null,arguments)};e.__sapp_emsc_notify_keyboard_hidden=function(){return e.asm.Ya.apply(null,arguments)};var zb=e.__sapp_html5_get_ask_leave_site=function(){return e.asm.Za.apply(null,arguments)};e.__saudio_emsc_pull=function(){return e.asm._a.apply(null,arguments)};
e.__sfetch_emsc_failed=function(){return e.asm.$a.apply(null,arguments)};e.__sfetch_emsc_head_response=function(){return e.asm.ab.apply(null,arguments)};e.__sfetch_emsc_range_response=function(){return e.asm.bb.apply(null,arguments)};e._free=function(){return e.asm.cb.apply(null,arguments)};e._main=function(){return e.asm.db.apply(null,arguments)};
var P=e._malloc=function(){return e.asm.eb.apply(null,arguments)},ma=e.stackAlloc=function(){return e.asm.jb.apply(null,arguments)},yb=e.dynCall_idi=function(){return e.asm.fb.apply(null,arguments)},Q=e.dynCall_iiii=function(){return e.asm.gb.apply(null,arguments)};e.dynCall_v=function(){return e.asm.hb.apply(null,arguments)};e.dynCall_vi=function(){return e.asm.ib.apply(null,arguments)};e.asm=Ab;
function v(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}v.prototype=Error();v.prototype.constructor=v;H=function Bb(){e.calledRun||Cb();e.calledRun||(H=Bb)};
e.callMain=function(a){a=a||[];var b=a.length+1,c=ma(4*(b+1));B[c>>2]=la(e.thisProgram);for(var d=1;d<b;d++)B[(c>>2)+d]=la(a[d-1]);B[(c>>2)+b]=0;try{var g=e._main(b,c,0);if(!e.noExitRuntime||0!==g){if(!e.noExitRuntime&&(ia=!0,e.onExit))e.onExit(g);e.quit(g,new v(g))}}catch(k){k instanceof v||("SimulateInfiniteLoop"==k?e.noExitRuntime=!0:((a=k)&&"object"===typeof k&&k.stack&&(a=[k,k.stack]),w("exception thrown: "+a),e.quit(1,k)))}finally{}};
function Cb(a){function b(){if(!e.calledRun&&(e.calledRun=!0,!ia)){F(sa);F(ta);if(e.onRuntimeInitialized)e.onRuntimeInitialized();e._main&&Db&&e.callMain(a);if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;){var b=e.postRun.shift();wa.unshift(b)}F(wa)}}a=a||e.arguments;if(!(0<G)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)xa();F(ra);0<G||e.calledRun||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},
1);b()},1)):b())}}e.run=Cb;function u(a){if(e.onAbort)e.onAbort(a);void 0!==a?(fa(a),w(a),a='"'+a+'"'):a="";ia=!0;throw"abort("+a+"). Build with -s ASSERTIONS=1 for more info.";}e.abort=u;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();var Db=!0;e.noInitialRun&&(Db=!1);e.noExitRuntime=!0;Cb();
