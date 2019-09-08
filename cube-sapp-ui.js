var f;f||(f=typeof Module !== 'undefined' ? Module : {});var g={},k;for(k in f)f.hasOwnProperty(k)&&(g[k]=f[k]);var n=[],aa="./this.program";function t(a,b){throw b;}var u=!1,v=!1,ba=!1,ca=!1,da=!1;u="object"===typeof window;v="function"===typeof importScripts;ba=(ca="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)&&!u&&!v;da=!u&&!ba&&!v;var w="",ea,x;
if(ba){w=__dirname+"/";var fa,ha;ea=function(a,b){fa||(fa=require("fs"));ha||(ha=require("path"));a=ha.normalize(a);a=fa.readFileSync(a);return b?a:a.toString()};x=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||z("Assertion failed: undefined");return a};1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/"));n=process.argv.slice(2);"undefined"!==typeof module&&(module.exports=f);process.on("uncaughtException",function(a){if(!(a instanceof ia))throw a;});process.on("unhandledRejection",
z);t=function(a){process.exit(a)};f.inspect=function(){return"[Emscripten Module object]"}}else if(da)"undefined"!=typeof read&&(ea=function(a){return read(a)}),x=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");"object"===typeof a||z("Assertion failed: undefined");return a},"undefined"!=typeof scriptArgs?n=scriptArgs:"undefined"!=typeof arguments&&(n=arguments),"function"===typeof quit&&(t=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===
typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(u||v)v?w=self.location.href:document.currentScript&&(w=document.currentScript.src),w=0!==w.indexOf("blob:")?w.substr(0,w.lastIndexOf("/")+1):"",ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},v&&(x=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});
var ja=f.print||console.log.bind(console),A=f.printErr||console.warn.bind(console);for(k in g)g.hasOwnProperty(k)&&(f[k]=g[k]);g=null;f.arguments&&(n=f.arguments);f.thisProgram&&(aa=f.thisProgram);f.quit&&(t=f.quit);var ka;f.wasmBinary&&(ka=f.wasmBinary);"object"!==typeof WebAssembly&&A("no native wasm support detected");var B,la=!1,ma="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function na(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&ma)return ma.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var h=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|h);else{var l=a[b++]&63;e=224==(e&240)?(e&15)<<12|h<<6|l:(e&7)<<18|h<<12|l<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function C(a,b){return a?na(D,a,b):""}
function E(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var h=0;h<a.length;++h){var l=a.charCodeAt(h);if(55296<=l&&57343>=l){var m=a.charCodeAt(++h);l=65536+((l&1023)<<10)|m&1023}if(127>=l){if(c>=d)break;b[c++]=l}else{if(2047>=l){if(c+1>=d)break;b[c++]=192|l>>6}else{if(65535>=l){if(c+2>=d)break;b[c++]=224|l>>12}else{if(c+3>=d)break;b[c++]=240|l>>18;b[c++]=128|l>>12&63}b[c++]=128|l>>6&63}b[c++]=128|l&63}}b[c]=0;return c-e}
function oa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function pa(a){var b=oa(a)+1,c=qa(b);E(a,F,c,b);return c}function ra(a){0<a%65536&&(a+=65536-a%65536);return a}var buffer,F,D,sa,ta,G,ua,H,I;
function va(){f.HEAP8=F=new Int8Array(buffer);f.HEAP16=sa=new Int16Array(buffer);f.HEAP32=G=new Int32Array(buffer);f.HEAPU8=D=new Uint8Array(buffer);f.HEAPU16=ta=new Uint16Array(buffer);f.HEAPU32=ua=new Uint32Array(buffer);f.HEAPF32=H=new Float32Array(buffer);f.HEAPF64=I=new Float64Array(buffer)}var wa=f.TOTAL_MEMORY||33554432;f.wasmMemory?B=f.wasmMemory:B=new WebAssembly.Memory({initial:wa/65536});B&&(buffer=B.buffer);wa=buffer.byteLength;va();G[391508]=6808928;
function xa(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.Xb;"number"===typeof c?void 0===b.Nb?f.dynCall_v(c):f.dynCall_vi(c,b.Nb):c(void 0===b.Nb?null:b.Nb)}}}var ya=[],za=[],Aa=[],Ba=[],Ca=[];function Da(){var a=f.preRun.shift();ya.unshift(a)}var J=0,Ea=null,Fa=null;f.preloadedImages={};f.preloadedAudios={};
function Ga(){var a=K;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var K="cube-sapp-ui.wasm";if(!Ga()){var Ha=K;K=f.locateFile?f.locateFile(Ha,w):w+Ha}function Ia(){try{if(ka)return new Uint8Array(ka);if(x)return x(K);throw"both async and sync fetching of the wasm failed";}catch(a){z(a)}}
function Ja(){return ka||!u&&!v||"function"!==typeof fetch?new Promise(function(a){a(Ia())}):fetch(K,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+K+"'";return a.arrayBuffer()}).catch(function(){return Ia()})}
function Ka(a){function b(a){f.asm=a.exports;J--;f.monitorRunDependencies&&f.monitorRunDependencies(J);0==J&&(null!==Ea&&(clearInterval(Ea),Ea=null),Fa&&(a=Fa,Fa=null,a()))}function c(a){b(a.instance)}function d(a){return Ja().then(function(a){return WebAssembly.instantiate(a,e)}).then(a,function(a){A("failed to asynchronously prepare wasm: "+a);z(a)})}var e={env:a};J++;f.monitorRunDependencies&&f.monitorRunDependencies(J);if(f.instantiateWasm)try{return f.instantiateWasm(e,b)}catch(h){return A("Module.instantiateWasm callback failed with error: "+
h),!1}(function(){if(ka||"function"!==typeof WebAssembly.instantiateStreaming||Ga()||"function"!==typeof fetch)return d(c);fetch(K,{credentials:"same-origin"}).then(function(a){return WebAssembly.instantiateStreaming(a,e).then(c,function(a){A("wasm streaming compile failed: "+a);A("falling back to ArrayBuffer instantiation");d(c)})})})();return{}}f.asm=function(a,b){b.memory=B;b.table=new WebAssembly.Table({initial:86,maximum:86,element:"anyfunc"});return Ka(b)};za.push({Xb:function(){La()}});
var Na=[null,[],[]],L=0;function M(){L+=4;return G[L-4>>2]}var Oa={};function Pa(){f.___errno_location&&(G[f.___errno_location()>>2]=12)}var Qa=0,Ra=0,N=0,Sa=0,Ta=0,Ua=null,Va=null,Wa=!1;function Xa(){for(var a=O.length-1;0<=a;--a)Ya(a);O=[];Za=[]}var Za=[];function $a(){if(ab&&bb.Eb)for(var a=0;a<Za.length;++a){var b=Za[a];Za.splice(a,1);--a;b.ic.apply(this,b.ac)}}var ab=0,bb=null,O=[];function cb(){return-1!==navigator.userAgent.indexOf("MSIE")||0<navigator.appVersion.indexOf("Trident/")}
function Ya(a){var b=O[a];b.target.removeEventListener(b.Db,b.Vb,b.Fb);O.splice(a,1)}function P(a){function b(b){++ab;bb=a;$a();a.Ib(b);$a();--ab}if(a.Gb)a.Vb=b,a.target.addEventListener(a.Db,b,a.Fb),O.push(a),Wa||(Ba.push(Xa),Wa=!0);else for(var c=0;c<O.length;++c)O[c].target==a.target&&O[c].Db==a.Db&&Ya(c--)}var db=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];
function Q(a){try{if(!a)return window;"number"===typeof a&&(a=db[a]||C(a));return"#window"===a?window:"#document"===a?document:"#screen"===a?screen:"#canvas"===a?f.canvas:"string"===typeof a?document.getElementById(a):a}catch(b){return null}}function eb(a){"number"===typeof a&&(a=C(a));return a&&"#canvas"!==a?"undefined"!==typeof fb&&gb[a]?gb[a]:Q(a):"undefined"!==typeof fb&&gb.canvas?gb.canvas:f.canvas}
function hb(a,b,c,d,e,h){Qa||(Qa=R(164));a={target:Q(a),Eb:cb()?!1:!0,Db:h,Gb:d,Ib:function(a){a=a||event;var c=Qa;E(a.key?a.key:"",D,c+0,32);E(a.code?a.code:"",D,c+32,32);G[c+64>>2]=a.location;G[c+68>>2]=a.ctrlKey;G[c+72>>2]=a.shiftKey;G[c+76>>2]=a.altKey;G[c+80>>2]=a.metaKey;G[c+84>>2]=a.repeat;E(a.locale?a.locale:"",D,c+88,32);E(a.char?a.char:"",D,c+120,32);G[c+152>>2]=a.charCode;G[c+156>>2]=a.keyCode;G[c+160>>2]=a.which;S(d,e,c,b)&&a.preventDefault()},Fb:c};P(a)}
function ib(a,b,c){I[a>>3]=window.performance&&window.performance.now?window.performance.now():Date.now();G[a+8>>2]=b.screenX;G[a+12>>2]=b.screenY;G[a+16>>2]=b.clientX;G[a+20>>2]=b.clientY;G[a+24>>2]=b.ctrlKey;G[a+28>>2]=b.shiftKey;G[a+32>>2]=b.altKey;G[a+36>>2]=b.metaKey;sa[a+40>>1]=b.button;sa[a+42>>1]=b.buttons;G[a+44>>2]=b.movementX||b.mozMovementX||b.webkitMovementX||b.screenX-Ua;G[a+48>>2]=b.movementY||b.mozMovementY||b.webkitMovementY||b.screenY-Va;if(f.canvas){var d=f.canvas.getBoundingClientRect();
G[a+60>>2]=b.clientX-d.left;G[a+64>>2]=b.clientY-d.top}else G[a+60>>2]=0,G[a+64>>2]=0;c?(d=c.getBoundingClientRect?c.getBoundingClientRect():{left:0,top:0},G[a+52>>2]=b.clientX-d.left,G[a+56>>2]=b.clientY-d.top):(G[a+52>>2]=0,G[a+56>>2]=0);"wheel"!==b.type&&"mousewheel"!==b.type&&(Ua=b.screenX,Va=b.screenY)}
function jb(a,b,c,d,e,h){Ra||(Ra=R(72));a=Q(a);c={target:a,Eb:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,Db:h,Gb:d,Ib:function(c){c=c||event;ib(Ra,c,a);S(d,e,Ra,b)&&c.preventDefault()},Fb:c};cb()&&"mousedown"==h&&(c.Eb=!1);P(c)}
function kb(a,b,c,d){Sa||(Sa=R(36));a=Q(a);P({target:a,Eb:!1,Db:"resize",Gb:d,Ib:function(c){c=c||event;if(c.target==a){var e=0<pageXOffset||0<pageYOffset?[pageXOffset,pageYOffset]:"undefined"!==typeof document.documentElement.scrollLeft||"undefined"!==typeof document.documentElement.scrollTop?[document.documentElement.scrollLeft,document.documentElement.scrollTop]:[document.body.scrollLeft|0,document.body.scrollTop|0],l=Sa;G[l>>2]=c.detail;G[l+4>>2]=document.body.clientWidth;G[l+8>>2]=document.body.clientHeight;
G[l+12>>2]=innerWidth;G[l+16>>2]=innerHeight;G[l+20>>2]=outerWidth;G[l+24>>2]=outerHeight;G[l+28>>2]=e[0];G[l+32>>2]=e[1];S(d,10,l,b)&&c.preventDefault()}},Fb:c})}
function lb(a,b,c,d,e,h){Ta||(Ta=R(1684));a=Q(a);P({target:a,Eb:"touchstart"==h||"touchend"==h,Db:h,Gb:d,Ib:function(c){c=c||event;for(var h={},l=0;l<c.touches.length;++l){var q=c.touches[l];q.Pb=!1;h[q.identifier]=q}for(l=0;l<c.changedTouches.length;++l)q=c.changedTouches[l],h[q.identifier]=q,q.Pb=!0;for(l=0;l<c.targetTouches.length;++l)q=c.targetTouches[l],h[q.identifier].Zb=!0;var r=q=Ta;G[r+4>>2]=c.ctrlKey;G[r+8>>2]=c.shiftKey;G[r+12>>2]=c.altKey;G[r+16>>2]=c.metaKey;r+=20;var Ma=f.canvas?f.canvas.getBoundingClientRect():
void 0,qb=a.getBoundingClientRect?a.getBoundingClientRect():{left:0,top:0},rb=0;for(l in h){var y=h[l];G[r>>2]=y.identifier;G[r+4>>2]=y.screenX;G[r+8>>2]=y.screenY;G[r+12>>2]=y.clientX;G[r+16>>2]=y.clientY;G[r+20>>2]=y.pageX;G[r+24>>2]=y.pageY;G[r+28>>2]=y.Pb;G[r+32>>2]=y.Zb;Ma?(G[r+44>>2]=y.clientX-Ma.left,G[r+48>>2]=y.clientY-Ma.top):(G[r+44>>2]=0,G[r+48>>2]=0);G[r+36>>2]=y.clientX-qb.left;G[r+40>>2]=y.clientY-qb.top;r+=52;if(32<=++rb)break}G[q>>2]=rb;S(d,e,q,b)&&c.preventDefault()},Fb:c})}
function mb(a,b,c,d,e,h){a||(a=f.canvas);a={target:Q(a),Eb:!1,Db:h,Gb:d,Ib:function(a){a=a||event;S(d,e,0,b)&&a.preventDefault()},Fb:c};P(a)}
function nb(a,b,c,d,e){function h(c){c=c||event;ib(N,c,a);I[N+72>>3]=c.wheelDeltaX||0;I[N+80>>3]=-(c.wheelDeltaY||c.wheelDelta);I[N+88>>3]=0;G[N+96>>2]=0;S(d,9,N,b)&&c.preventDefault()}function l(c){c=c||event;var e=N;ib(e,c,a);I[e+72>>3]=c.deltaX;I[e+80>>3]=c.deltaY;I[e+88>>3]=c.deltaZ;G[e+96>>2]=c.deltaMode;S(d,9,e,b)&&c.preventDefault()}N||(N=R(104));P({target:a,Eb:!0,Db:e,Gb:d,Ib:"wheel"==e?l:h,Fb:c})}
var ob=1,pb=0,sb=[],T=[],tb=[],ub=[],vb=[],U=[],V=[],wb=[],xb={},W=null,gb={},yb={},zb={},Ab={};function X(a){pb||(pb=a)}function Bb(a){for(var b=ob++,c=a.length;c<b;c++)a[c]=null;return b}var Cb=null,Y=[0];
function Db(a,b){function c(){var a=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);return a?parseInt(a[2],10):!1}var d=R(8),e={handle:d,attributes:b,version:b.Tb,Mb:a};e.Cb=2<=e.version&&(!1===c()||58<=c());a.canvas&&(a.canvas.$b=e);xb[d]=e;("undefined"===typeof b.Rb||b.Rb)&&Eb(e);return d}
function Fb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(a,d){b.vertexAttribDivisorANGLE(a,d)},a.drawArraysInstanced=function(a,d,e,h){b.drawArraysInstancedANGLE(a,d,e,h)},a.drawElementsInstanced=function(a,d,e,h,l){b.drawElementsInstancedANGLE(a,d,e,h,l)})}
function Gb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(a){b.deleteVertexArrayOES(a)},a.bindVertexArray=function(a){b.bindVertexArrayOES(a)},a.isVertexArray=function(a){return b.isVertexArrayOES(a)})}function Hb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(a,d){b.drawBuffersWEBGL(a,d)})}
function Eb(a){a||(a=W);if(!a.Yb){a.Yb=!0;var b=a.Mb;2>a.version&&(Fb(b),Gb(b),Hb(b));b.cc=b.getExtension("EXT_disjoint_timer_query");var c="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2".split(" ");
(b.getSupportedExtensions()||[]).forEach(function(a){-1!=c.indexOf(a)&&b.getExtension(a)})}}var fb={},Ib,Jb,Kb=["default","low-power","high-performance"],Lb=[];function Mb(a,b,c,d){for(var e=0;e<a;e++){var h=Z[c](),l=h&&Bb(d);h?(h.name=l,d[l]=h):X(1282);G[b+4*e>>2]=l}}
function Nb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=Z.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>W.version){X(1282);return}c=2*(Z.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>W.version){X(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=Z.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":X(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 35097:case 36389:case 34068:c=
0;break;default:X(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)G[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){X(1280);A("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:X(1280);A("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}G[b>>2]=c}else X(1281)}
function Ob(a){var b=oa(a)+1,c=R(b);E(a,D,c,b);return c}var Pb={6402:1,6403:1,6406:1,6407:3,6408:4,6409:1,6410:2,33319:2,33320:2,35904:3,35906:4,36244:1,36248:3,36249:4},Qb={5120:1,5121:1,5122:2,5123:2,5124:4,5125:4,5126:4,5131:2,32819:2,32820:2,33635:2,33640:4,34042:4,35899:4,35902:4,36193:2};
function Rb(a,b,c,d,e){if(b=Pb[b]*Qb[a])switch(c=e+d*(c*b+4-1&-4),a){case 5120:return F.subarray(e,c);case 5121:return D.subarray(e,c);case 5122:return sa.subarray(e>>1,c>>1);case 5124:return G.subarray(e>>2,c>>2);case 5126:return H.subarray(e>>2,c>>2);case 5125:case 34042:case 35902:case 33640:case 35899:return ua.subarray(e>>2,c>>2);case 5123:case 33635:case 32819:case 32820:case 36193:case 5131:return ta.subarray(e>>1,c>>1);default:X(1280)}else X(1280)}
function Sb(a){switch(a){case 5120:return F;case 5121:return D;case 5122:return sa;case 5123:case 33635:case 32819:case 32820:case 36193:case 5131:return ta;case 5124:return G;case 5125:case 34042:case 35902:case 33640:case 35899:case 34042:return ua;case 5126:return H}}var Tb={5122:1,5123:1,5124:2,5125:2,5126:2,5131:1,32819:1,32820:1,33635:1,33640:2,34042:2,35899:2,35902:2,36193:1};
function Ub(a){a=ra(a);var b=buffer.byteLength;try{return-1!==B.grow((a-b)/65536)?(buffer=B.buffer,!0):!1}catch(c){return!1}}var Z;Cb=new Float32Array(256);for(var Vb=0;256>Vb;Vb++)Y[Vb]=Cb.subarray(0,Vb+1);for(var Wb=0;32>Wb;Wb++)Lb.push(Array(Wb));
var cc=f.asm({},{ab:function(){},cb:function(a,b){L=b;try{return Oa.Sb(),M(),M(),M(),M(),0}catch(c){return z(c),-c.Lb}},bb:function(a,b){L=b;try{var c=Oa.Sb(),d=M(),e=M();return Oa.dc(c,d,e)}catch(h){return z(h),-h.Lb}},ba:function(a,b){L=b;try{var c=M(),d=M(),e=M();for(b=a=0;b<e;b++){for(var h=G[d+8*b>>2],l=G[d+(8*b+4)>>2],m=0;m<l;m++){var p=D[h+m],q=Na[c];0===p||10===p?((1===c?ja:A)(na(q,0)),q.length=0):q.push(p)}a+=l}return a}catch(r){return z(r),-r.Lb}},q:function(a,b){L=b;return 0},eb:function(a,
b){L=b;try{var c=C(M()),d=M(),e=M();return(void 0).open(c,d,e).fd}catch(h){return z(h),-h.Lb}},ca:function(a,b){L=b;return 0},aa:function(a,b){L=b;try{return Oa.Sb(),0}catch(c){return z(c),-c.Lb}},A:function(){},$:function(){return devicePixelRatio||1},ea:function(a,b,c){a=a?Q(a):f.canvas;if(!a)return-4;a.getBoundingClientRect?(a=a.getBoundingClientRect(),I[b>>3]=a.right-a.left,I[c>>3]=a.bottom-a.top):(I[b>>3]=a.clientWidth,I[c>>3]=a.clientHeight);return 0},$a:function(a,b,c){D.set(D.subarray(b,b+
c),a)},Pa:function(a,b){function c(d){Xb(a,d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},Z:function(a,b,c){a=eb(a);if(!a)return-4;a.width=b;a.height=c;return 0},Ya:function(a,b,c,d){hb(a,b,c,d,2,"keydown");return 0},Wa:function(a,b,c,d){hb(a,b,c,d,1,"keypress");return 0},Xa:function(a,b,c,d){hb(a,b,c,d,3,"keyup");return 0},ta:function(a,b,c,d){jb(a,b,c,d,5,"mousedown");return 0},db:function(a,b,c,d){jb(a,b,c,d,33,"mouseenter");return 0},_a:function(a,b,c,d){jb(a,b,c,d,34,"mouseleave");
return 0},kb:function(a,b,c,d){jb(a,b,c,d,8,"mousemove");return 0},na:function(a,b,c,d){jb(a,b,c,d,6,"mouseup");return 0},lb:function(a,b,c,d){kb(a,b,c,d);return 0},Sa:function(a,b,c,d){lb(a,b,c,d,25,"touchcancel");return 0},Ta:function(a,b,c,d){lb(a,b,c,d,23,"touchend");return 0},Ua:function(a,b,c,d){lb(a,b,c,d,24,"touchmove");return 0},Va:function(a,b,c,d){lb(a,b,c,d,22,"touchstart");return 0},Ra:function(a,b,c,d){mb(a,b,c,d,31,"webglcontextlost");return 0},Qa:function(a,b,c,d){mb(a,b,c,d,32,"webglcontextrestored");
return 0},Za:function(a,b,c,d){a=Q(a);return"undefined"!==typeof a.onwheel?(nb(a,b,c,d,"wheel"),0):"undefined"!==typeof a.onmousewheel?(nb(a,b,c,d,"mousewheel"),0):-1},Q:function(a,b){var c={};b>>=2;c.alpha=!!G[b];c.depth=!!G[b+1];c.stencil=!!G[b+2];c.antialias=!!G[b+3];c.premultipliedAlpha=!!G[b+4];c.preserveDrawingBuffer=!!G[b+5];c.powerPreference=Kb[G[b+6]];c.failIfMajorPerformanceCaveat=!!G[b+7];c.Tb=G[b+8];c.ec=G[b+9];c.Rb=G[b+10];c.Wb=G[b+11];c.fc=G[b+12];c.hc=G[b+13];a=eb(a);!a||c.Wb?c=0:c=
(a=1<c.Tb?a.getContext("webgl2",c):a.getContext("webgl",c)||a.getContext("experimental-webgl",c))?Db(a,c):0;return c},wa:function(a,b){a=xb[a];b=C(b);0==b.indexOf("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b?Fb(Z):"OES_vertex_array_object"==b?Gb(Z):"WEBGL_draw_buffers"==b&&Hb(Z);return!!a.Mb.getExtension(b)},Ja:function(a){a>>=2;for(var b=0;14>b;++b)G[a+b]=0;G[a]=G[a+1]=G[a+3]=G[a+4]=G[a+8]=G[a+10]=1},ya:function(a){W=xb[a];f.bc=Z=W&&W.Mb;return!a||Z?0:-5},k:function(a){Z.activeTexture(a)},
P:function(a,b){Z.attachShader(T[a],V[b])},b:function(a,b){35051==a?Z.Qb=b:35052==a&&(Z.Hb=b);Z.bindBuffer(a,sb[b])},g:function(a,b){Z.bindFramebuffer(a,tb[b])},T:function(a,b){Z.bindRenderbuffer(a,ub[b])},a:function(a,b){Z.bindTexture(a,vb[b])},_:function(a){Z.bindVertexArray(wb[a])},G:function(a,b,c,d){Z.blendColor(a,b,c,d)},H:function(a,b){Z.blendEquationSeparate(a,b)},I:function(a,b,c,d){Z.blendFuncSeparate(a,b,c,d)},l:function(a,b,c,d,e,h,l,m,p,q){Z.blitFramebuffer(a,b,c,d,e,h,l,m,p,q)},V:function(a,
b,c,d){W.Cb?c?Z.bufferData(a,D,d,c,b):Z.bufferData(a,b,d):Z.bufferData(a,c?D.subarray(c,c+b):b,d)},o:function(a,b,c,d){W.Cb?Z.bufferSubData(a,b,D,d,c):Z.bufferSubData(a,b,D.subarray(d,d+c))},L:function(a){Z.clear(a)},xa:function(a,b,c,d){Z.clearColor(a,b,c,d)},va:function(a){Z.clearDepth(a)},ua:function(a){Z.clearStencil(a)},x:function(a,b,c,d){Z.colorMask(!!a,!!b,!!c,!!d)},gb:function(a){Z.compileShader(V[a])},Ga:function(a,b,c,d,e,h,l,m){W.Cb?Z.Hb?Z.compressedTexImage2D(a,b,c,d,e,h,l,m):Z.compressedTexImage2D(a,
b,c,d,e,h,D,m,l):Z.compressedTexImage2D(a,b,c,d,e,h,m?D.subarray(m,m+l):null)},Ea:function(a,b,c,d,e,h,l,m,p){W.Cb?Z.Hb?Z.compressedTexImage3D(a,b,c,d,e,h,l,m,p):Z.compressedTexImage3D(a,b,c,d,e,h,l,D,p,m):Z.compressedTexImage3D(a,b,c,d,e,h,l,p?D.subarray(p,p+m):null)},Ca:function(){var a=Bb(T),b=Z.createProgram();b.name=a;T[a]=b;return a},ib:function(a){var b=Bb(V);V[b]=Z.createShader(a);return b},F:function(a){Z.cullFace(a)},Y:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2],e=sb[d];e&&(Z.deleteBuffer(e),
e.name=0,sb[d]=null,d==Ib&&(Ib=0),d==Jb&&(Jb=0),d==Z.Qb&&(Z.Qb=0),d==Z.Hb&&(Z.Hb=0))}},i:function(a,b){for(var c=0;c<a;++c){var d=G[b+4*c>>2],e=tb[d];e&&(Z.deleteFramebuffer(e),e.name=0,tb[d]=null)}},z:function(a){if(a){var b=T[a];b?(Z.deleteProgram(b),b.name=0,T[a]=null,yb[a]=null):X(1281)}},p:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2],e=ub[d];e&&(Z.deleteRenderbuffer(e),e.name=0,ub[d]=null)}},y:function(a){if(a){var b=V[a];b?(Z.deleteShader(b),V[a]=null):X(1281)}},X:function(a,b){for(var c=
0;c<a;c++){var d=G[b+4*c>>2],e=vb[d];e&&(Z.deleteTexture(e),e.name=0,vb[d]=null)}},Ka:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2];Z.deleteVertexArray(wb[d]);wb[d]=null}},v:function(a){Z.depthFunc(a)},w:function(a){Z.depthMask(!!a)},c:function(a){Z.disable(a)},B:function(a){Z.disableVertexAttribArray(a)},ha:function(a,b,c){Z.drawArrays(a,b,c)},n:function(a,b){for(var c=Lb[a],d=0;d<a;d++)c[d]=G[b+4*d>>2];Z.drawBuffers(c)},ia:function(a,b,c,d){Z.drawElements(a,b,c,d)},e:function(a){Z.enable(a)},
pa:function(a){Z.enableVertexAttribArray(a)},E:function(a){Z.frontFace(a)},W:function(a,b){Mb(a,b,"createBuffer",sb)},U:function(a,b){Mb(a,b,"createRenderbuffer",ub)},Ha:function(a,b){Mb(a,b,"createTexture",vb)},La:function(a,b){Mb(a,b,"createVertexArray",wb)},za:function(a,b){return Z.getAttribLocation(T[a],C(b))},d:function(a,b){Nb(a,b)},Aa:function(a,b,c,d){a=Z.getProgramInfoLog(T[a]);null===a&&(a="(unknown error)");b=0<b&&d?E(a,D,d,b):0;c&&(G[c>>2]=b)},O:function(a,b,c){if(c)if(a>=ob)X(1281);
else{var d=yb[a];if(d)if(35716==b)a=Z.getProgramInfoLog(T[a]),null===a&&(a="(unknown error)"),G[c>>2]=a.length+1;else if(35719==b)G[c>>2]=d.Ob;else if(35722==b){if(-1==d.Jb){a=T[a];var e=Z.getProgramParameter(a,35721);for(b=d.Jb=0;b<e;++b)d.Jb=Math.max(d.Jb,Z.getActiveAttrib(a,b).name.length+1)}G[c>>2]=d.Jb}else if(35381==b){if(-1==d.Kb)for(a=T[a],e=Z.getProgramParameter(a,35382),b=d.Kb=0;b<e;++b)d.Kb=Math.max(d.Kb,Z.getActiveUniformBlockName(a,b).length+1);G[c>>2]=d.Kb}else G[c>>2]=Z.getProgramParameter(T[a],
b);else X(1282)}else X(1281)},fb:function(a,b,c,d){a=Z.getShaderInfoLog(V[a]);null===a&&(a="(unknown error)");b=0<b&&d?E(a,D,d,b):0;c&&(G[c>>2]=b)},da:function(a,b,c){c?35716==b?(a=Z.getShaderInfoLog(V[a]),null===a&&(a="(unknown error)"),G[c>>2]=a.length+1):35720==b?(a=Z.getShaderSource(V[a]),G[c>>2]=null===a||0==a.length?0:a.length+1):G[c>>2]=Z.getShaderParameter(V[a],b):X(1281)},Na:function(a){if(zb[a])return zb[a];switch(a){case 7939:var b=Z.getSupportedExtensions()||[];b=b.concat(b.map(function(a){return"GL_"+
a}));b=Ob(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Z.getParameter(a))||X(1280);b=Ob(b);break;case 7938:b=Z.getParameter(Z.VERSION);b=2<=W.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Ob(b);break;case 35724:b=Z.getParameter(Z.SHADING_LANGUAGE_VERSION);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Ob(b);break;default:return X(1280),0}return zb[a]=b},Ma:function(a,b){if(2>
W.version)return X(1282),0;var c=Ab[a];if(c)return 0>b||b>=c.length?(X(1281),0):c[b];switch(a){case 7939:return c=Z.getSupportedExtensions()||[],c=c.concat(c.map(function(a){return"GL_"+a})),c=c.map(function(a){return Ob(a)}),c=Ab[a]=c,0>b||b>=c.length?(X(1281),0):c[b];default:return X(1280),0}},j:function(a,b){b=C(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,d)}return(a=yb[a]&&yb[a].Ub[b])&&0<=c&&c<a[0]?a[1]+c:-1},Ba:function(a){Z.linkProgram(T[a]);
var b=T[a];a=yb[a]={Ub:{},Ob:0,Jb:-1,Kb:-1};for(var c=a.Ub,d=Z.getProgramParameter(b,35718),e=0;e<d;++e){var h=Z.getActiveUniform(b,e),l=h.name;a.Ob=Math.max(a.Ob,l.length+1);"]"==l.slice(-1)&&(l=l.slice(0,l.lastIndexOf("[")));var m=Z.getUniformLocation(b,l);if(m){var p=Bb(U);c[l]=[h.size,p];U[p]=m;for(var q=1;q<h.size;++q)m=Z.getUniformLocation(b,l+"["+q+"]"),p=Bb(U),U[p]=m}}},D:function(a,b){Z.polygonOffset(a,b)},m:function(a){Z.readBuffer(a)},Ia:function(a,b,c,d){Z.renderbufferStorage(a,b,c,d)},
S:function(a,b,c,d,e){Z.renderbufferStorageMultisample(a,b,c,d,e)},M:function(a,b,c,d){Z.scissor(a,b,c,d)},hb:function(a,b,c,d){for(var e="",h=0;h<b;++h){var l=d?G[d+4*h>>2]:-1;e+=C(G[c+4*h>>2],0>l?void 0:l)}Z.shaderSource(V[a],e)},ga:function(a,b,c){Z.stencilFunc(a,b,c)},K:function(a,b,c,d){Z.stencilFuncSeparate(a,b,c,d)},u:function(a){Z.stencilMask(a)},fa:function(a,b,c){Z.stencilOp(a,b,c)},J:function(a,b,c,d){Z.stencilOpSeparate(a,b,c,d)},Fa:function(a,b,c,d,e,h,l,m,p){W.Cb?Z.Hb?Z.texImage2D(a,
b,c,d,e,h,l,m,p):0!=p?Z.texImage2D(a,b,c,d,e,h,l,m,Sb(m),p>>(Tb[m]|0)):Z.texImage2D(a,b,c,d,e,h,l,m,null):Z.texImage2D(a,b,c,d,e,h,l,m,p?Rb(m,l,d,e,p):null)},Da:function(a,b,c,d,e,h,l,m,p,q){Z.Hb?Z.texImage3D(a,b,c,d,e,h,l,m,p,q):0!=q?Z.texImage3D(a,b,c,d,e,h,l,m,p,Sb(p),q>>(Tb[p]|0)):Z.texImage3D(a,b,c,d,e,h,l,m,p,null)},R:function(a,b,c){Z.texParameterf(a,b,c)},f:function(a,b,c){Z.texParameteri(a,b,c)},oa:function(a,b,c){if(W.Cb)Z.uniform1fv(U[a],H,c>>2,b);else{if(256>=b)for(var d=Y[b-1],e=0;e<
b;++e)d[e]=H[c+4*e>>2];else d=H.subarray(c>>2,c+4*b>>2);Z.uniform1fv(U[a],d)}},C:function(a,b){Z.uniform1i(U[a],b)},ma:function(a,b,c){if(W.Cb)Z.uniform2fv(U[a],H,c>>2,2*b);else{if(256>=2*b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=H[c+4*e>>2],d[e+1]=H[c+(4*e+4)>>2];else d=H.subarray(c>>2,c+8*b>>2);Z.uniform2fv(U[a],d)}},la:function(a,b,c){if(W.Cb)Z.uniform3fv(U[a],H,c>>2,3*b);else{if(256>=3*b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=H[c+4*e>>2],d[e+1]=H[c+(4*e+4)>>2],d[e+2]=H[c+(4*e+8)>>2];else d=H.subarray(c>>
2,c+12*b>>2);Z.uniform3fv(U[a],d)}},ka:function(a,b,c){if(W.Cb)Z.uniform4fv(U[a],H,c>>2,4*b);else{if(256>=4*b)for(var d=Y[4*b-1],e=0;e<4*b;e+=4)d[e]=H[c+4*e>>2],d[e+1]=H[c+(4*e+4)>>2],d[e+2]=H[c+(4*e+8)>>2],d[e+3]=H[c+(4*e+12)>>2];else d=H.subarray(c>>2,c+16*b>>2);Z.uniform4fv(U[a],d)}},ja:function(a,b,c,d){if(W.Cb)Z.uniformMatrix4fv(U[a],!!c,H,d>>2,16*b);else{if(256>=16*b)for(var e=Y[16*b-1],h=0;h<16*b;h+=16)e[h]=H[d+4*h>>2],e[h+1]=H[d+(4*h+4)>>2],e[h+2]=H[d+(4*h+8)>>2],e[h+3]=H[d+(4*h+12)>>2],e[h+
4]=H[d+(4*h+16)>>2],e[h+5]=H[d+(4*h+20)>>2],e[h+6]=H[d+(4*h+24)>>2],e[h+7]=H[d+(4*h+28)>>2],e[h+8]=H[d+(4*h+32)>>2],e[h+9]=H[d+(4*h+36)>>2],e[h+10]=H[d+(4*h+40)>>2],e[h+11]=H[d+(4*h+44)>>2],e[h+12]=H[d+(4*h+48)>>2],e[h+13]=H[d+(4*h+52)>>2],e[h+14]=H[d+(4*h+56)>>2],e[h+15]=H[d+(4*h+60)>>2];else e=H.subarray(d>>2,d+64*b>>2);Z.uniformMatrix4fv(U[a],!!c,e)}},sa:function(a){Z.useProgram(T[a])},qa:function(a,b){Z.vertexAttribDivisor(a,b)},ra:function(a,b,c,d,e,h){Z.vertexAttribPointer(a,b,c,!!d,e,h)},N:function(a,
b,c,d){Z.viewport(a,b,c,d)},t:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Yb()});document.body.append(a)},s:function(){document.getElementById("_sokol_app_input_element").focus()},Oa:function(){window.addEventListener("beforeunload",function(a){0!=Zb()&&(a.preventDefault(),a.returnValue=" ")})},r:function(){document.getElementById("_sokol_app_input_element").blur()},h:function(a){a|=
0;var b=F.length|0;var c=G[391508]|0;var d=c+a|0;if(0<(a|0)&(d|0)<(c|0)|0>(d|0))return z("OOM"),0,Pa(),-1;if(a=(d|0)>(b|0)){a=d|0;if(2147418112<a)a=!1;else{for(b=Math.max(F.length,16777216);b<a;)536870912>=b?b=ra(2*b):b=Math.min(ra((3*b+2147483648)/4),2147418112);Ub(b)?(va(),a=!0):a=!1}a=!(a|0)}if(a)return Pa(),-1;G[391508]=d|0;return c|0},jb:function(a,b,c,d,e,h){b=C(b);var l=new XMLHttpRequest;l.open("GET",b);l.responseType="arraybuffer";var m=0<d;m&&l.setRequestHeader("Range","bytes="+c+"-"+(c+
d));l.onreadystatechange=function(){if(this.readyState==this.DONE)if(206==this.status||200==this.status&&!m){var b=new Uint8Array(l.response),c=b.length;c<=h?(D.set(b,e),$b(a,d,c)):ac(a)}else bc(a,this.status)};l.send()}},buffer);f.asm=cc;var La=f.___wasm_call_ctors=function(){return f.asm.mb.apply(null,arguments)},Yb=f.__sapp_emsc_notify_keyboard_hidden=function(){return f.asm.nb.apply(null,arguments)},Zb=f.__sapp_html5_get_ask_leave_site=function(){return f.asm.ob.apply(null,arguments)};
f._main=function(){return f.asm.pb.apply(null,arguments)};var R=f._malloc=function(){return f.asm.qb.apply(null,arguments)};f._free=function(){return f.asm.rb.apply(null,arguments)};f.__saudio_emsc_pull=function(){return f.asm.sb.apply(null,arguments)};f.__sfetch_emsc_head_response=function(){return f.asm.tb.apply(null,arguments)};
var $b=f.__sfetch_emsc_get_response=function(){return f.asm.ub.apply(null,arguments)},bc=f.__sfetch_emsc_failed_http_status=function(){return f.asm.vb.apply(null,arguments)},ac=f.__sfetch_emsc_failed_buffer_too_small=function(){return f.asm.wb.apply(null,arguments)},qa=f.stackAlloc=function(){return f.asm.xb.apply(null,arguments)};f.dynCall_vi=function(){return f.asm.yb.apply(null,arguments)};f.dynCall_v=function(){return f.asm.zb.apply(null,arguments)};
var S=f.dynCall_iiii=function(){return f.asm.Ab.apply(null,arguments)},Xb=f.dynCall_idi=function(){return f.asm.Bb.apply(null,arguments)};f.asm=cc;var dc;function ia(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}Fa=function ec(){dc||fc();dc||(Fa=ec)};
function fc(a){function b(){if(!dc&&(dc=!0,!la)){xa(za);xa(Aa);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if(hc){var b=a;b=b||[];var d=b.length+1,e=qa(4*(d+1));G[e>>2]=pa(aa);for(var h=1;h<d;h++)G[(e>>2)+h]=pa(b[h-1]);G[(e>>2)+d]=0;try{var l=f._main(d,e);if(!f.noExitRuntime||0!==l){if(!f.noExitRuntime&&(la=!0,f.onExit))f.onExit(l);t(l,new ia(l))}}catch(m){m instanceof ia||("SimulateInfiniteLoop"==m?f.noExitRuntime=!0:((b=m)&&"object"===typeof m&&m.stack&&(b=[m,m.stack]),A("exception thrown: "+
b),t(1,m)))}finally{}}if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;)b=f.postRun.shift(),Ca.unshift(b);xa(Ca)}}a=a||n;if(!(0<J)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Da();xa(ya);0<J||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},1)):b())}}f.run=fc;
function z(a){if(f.onAbort)f.onAbort(a);ja(a);A(a);la=!0;throw"abort("+a+"). Build with -s ASSERTIONS=1 for more info.";}f.abort=z;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var hc=!0;f.noInitialRun&&(hc=!1);f.noExitRuntime=!0;fc();
