var f;f||(f=typeof Module !== 'undefined' ? Module : {});var g={},k;for(k in f)f.hasOwnProperty(k)&&(g[k]=f[k]);var m=[],aa="./this.program";function q(a,b){throw b;}var t=!1,v=!1,ba=!1,ca=!1,da=!1;t="object"===typeof window;v="function"===typeof importScripts;ba=(ca="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)&&!t&&!v;da=!t&&!ba&&!v;var w="",ea,x,fa,ha;
if(ba)w=__dirname+"/",ea=function(a,b){fa||(fa=require("fs"));ha||(ha=require("path"));a=ha.normalize(a);return fa.readFileSync(a,b?null:"utf8")},x=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||z("Assertion failed: undefined");return a},1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/")),m=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=f),process.on("uncaughtException",function(a){if(!(a instanceof ia))throw a;}),process.on("unhandledRejection",z),
q=function(a){process.exit(a)},f.inspect=function(){return"[Emscripten Module object]"};else if(da)"undefined"!=typeof read&&(ea=function(a){return read(a)}),x=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");"object"===typeof a||z("Assertion failed: undefined");return a},"undefined"!=typeof scriptArgs?m=scriptArgs:"undefined"!=typeof arguments&&(m=arguments),"function"===typeof quit&&(q=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===
typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(t||v)v?w=self.location.href:document.currentScript&&(w=document.currentScript.src),w=0!==w.indexOf("blob:")?w.substr(0,w.lastIndexOf("/")+1):"",ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},v&&(x=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});
var ja=f.print||console.log.bind(console),A=f.printErr||console.warn.bind(console);for(k in g)g.hasOwnProperty(k)&&(f[k]=g[k]);g=null;f.arguments&&(m=f.arguments);f.thisProgram&&(aa=f.thisProgram);f.quit&&(q=f.quit);var B;f.wasmBinary&&(B=f.wasmBinary);var C;f.noExitRuntime&&(C=f.noExitRuntime);"object"!==typeof WebAssembly&&A("no native wasm support detected");
var D,ka=new WebAssembly.Table({initial:16,maximum:16,element:"anyfunc"}),la=!1,ma="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function E(a,b){if(a){var c=F,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&ma)a=ma.decode(c.subarray(a,b));else{for(d="";a<b;){var e=c[a++];if(e&128){var h=c[a++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|h);else{var l=c[a++]&63;e=224==(e&240)?(e&15)<<12|h<<6|l:(e&7)<<18|h<<12|l<<6|c[a++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}a=d}}else a="";return a}
function G(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var h=0;h<a.length;++h){var l=a.charCodeAt(h);if(55296<=l&&57343>=l){var n=a.charCodeAt(++h);l=65536+((l&1023)<<10)|n&1023}if(127>=l){if(c>=d)break;b[c++]=l}else{if(2047>=l){if(c+1>=d)break;b[c++]=192|l>>6}else{if(65535>=l){if(c+2>=d)break;b[c++]=224|l>>12}else{if(c+3>=d)break;b[c++]=240|l>>18;b[c++]=128|l>>12&63}b[c++]=128|l>>6&63}b[c++]=128|l&63}}b[c]=0;return c-e}
function na(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function oa(a){var b=na(a)+1,c=pa(b);G(a,qa,c,b);return c}function ra(a){0<a%65536&&(a+=65536-a%65536);return a}var buffer,qa,F,sa,ta,H,ua,I,J;
function va(a){buffer=a;f.HEAP8=qa=new Int8Array(a);f.HEAP16=sa=new Int16Array(a);f.HEAP32=H=new Int32Array(a);f.HEAPU8=F=new Uint8Array(a);f.HEAPU16=ta=new Uint16Array(a);f.HEAPU32=ua=new Uint32Array(a);f.HEAPF32=I=new Float32Array(a);f.HEAPF64=J=new Float64Array(a)}var wa=f.TOTAL_MEMORY||33554432;f.wasmMemory?D=f.wasmMemory:D=new WebAssembly.Memory({initial:wa/65536});D&&(buffer=D.buffer);wa=buffer.byteLength;va(buffer);H[9816]=5282304;
function xa(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.dc;"number"===typeof c?void 0===b.Vb?f.dynCall_v(c):f.dynCall_vi(c,b.Vb):c(void 0===b.Vb?null:b.Vb)}}}var ya=[],za=[],Aa=[],Ba=[],Ca=[];function Da(){var a=f.preRun.shift();ya.unshift(a)}var K=0,Ea=null,Fa=null;f.preloadedImages={};f.preloadedAudios={};function z(a){if(f.onAbort)f.onAbort(a);ja(a);A(a);la=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}
function Ga(){var a=L;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var L="mrt-sapp.wasm";if(!Ga()){var Ha=L;L=f.locateFile?f.locateFile(Ha,w):w+Ha}function Ia(){try{if(B)return new Uint8Array(B);if(x)return x(L);throw"both async and sync fetching of the wasm failed";}catch(a){z(a)}}
function Ja(){return B||!t&&!v||"function"!==typeof fetch?new Promise(function(a){a(Ia())}):fetch(L,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+L+"'";return a.arrayBuffer()}).catch(function(){return Ia()})}za.push({dc:function(){La()}});var Ma=0,Na=0,M=0,Oa=0,Pa=0,Qa=null,Ra=null,Sa=!1;function Ta(){for(var a=N.length-1;0<=a;--a)Ua(a);N=[];Va=[]}var Va=[];
function Wa(){if(Xa&&Ya.Nb)for(var a=0;a<Va.length;++a){var b=Va[a];Va.splice(a,1);--a;b.oc.apply(this,b.ic)}}var Xa=0,Ya=null,N=[];function Za(){return-1!==navigator.userAgent.indexOf("MSIE")||0<navigator.appVersion.indexOf("Trident/")}function Ua(a){var b=N[a];b.target.removeEventListener(b.Mb,b.bc,b.Ob);N.splice(a,1)}
function O(a){function b(b){++Xa;Ya=a;Wa();a.Rb(b);Wa();--Xa}if(a.Pb)a.bc=b,a.target.addEventListener(a.Mb,b,a.Ob),N.push(a),Sa||(Ba.push(Ta),Sa=!0);else for(var c=0;c<N.length;++c)N[c].target==a.target&&N[c].Mb==a.Mb&&Ua(c--)}var $a=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];
function P(a){try{if(!a)return window;"number"===typeof a&&(a=$a[a]||E(a));return"#window"===a?window:"#document"===a?document:"#screen"===a?screen:"#canvas"===a?f.canvas:"string"===typeof a?document.getElementById(a):a}catch(b){return null}}function ab(a){"number"===typeof a&&(a=E(a));return a&&"#canvas"!==a?"undefined"!==typeof bb&&cb[a]?cb[a]:P(a):"undefined"!==typeof bb&&cb.canvas?cb.canvas:f.canvas}
function db(a,b,c,d,e,h){Ma||(Ma=Q(164));a={target:P(a),Nb:Za()?!1:!0,Mb:h,Pb:d,Rb:function(a){a=a||event;var c=Ma;G(a.key?a.key:"",F,c+0,32);G(a.code?a.code:"",F,c+32,32);H[c+64>>2]=a.location;H[c+68>>2]=a.ctrlKey;H[c+72>>2]=a.shiftKey;H[c+76>>2]=a.altKey;H[c+80>>2]=a.metaKey;H[c+84>>2]=a.repeat;G(a.locale?a.locale:"",F,c+88,32);G(a.char?a.char:"",F,c+120,32);H[c+152>>2]=a.charCode;H[c+156>>2]=a.keyCode;H[c+160>>2]=a.which;R(d,e,c,b)&&a.preventDefault()},Ob:c};O(a)}
function eb(a,b,c){J[a>>3]=window.performance&&window.performance.now?window.performance.now():Date.now();H[a+8>>2]=b.screenX;H[a+12>>2]=b.screenY;H[a+16>>2]=b.clientX;H[a+20>>2]=b.clientY;H[a+24>>2]=b.ctrlKey;H[a+28>>2]=b.shiftKey;H[a+32>>2]=b.altKey;H[a+36>>2]=b.metaKey;sa[a+40>>1]=b.button;sa[a+42>>1]=b.buttons;H[a+44>>2]=b.movementX||b.mozMovementX||b.webkitMovementX||b.screenX-Qa;H[a+48>>2]=b.movementY||b.mozMovementY||b.webkitMovementY||b.screenY-Ra;if(f.canvas){var d=f.canvas.getBoundingClientRect();
H[a+60>>2]=b.clientX-d.left;H[a+64>>2]=b.clientY-d.top}else H[a+60>>2]=0,H[a+64>>2]=0;c?(d=c.getBoundingClientRect?c.getBoundingClientRect():{left:0,top:0},H[a+52>>2]=b.clientX-d.left,H[a+56>>2]=b.clientY-d.top):(H[a+52>>2]=0,H[a+56>>2]=0);"wheel"!==b.type&&"mousewheel"!==b.type&&(Qa=b.screenX,Ra=b.screenY)}
function fb(a,b,c,d,e,h){Na||(Na=Q(72));a=P(a);c={target:a,Nb:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,Mb:h,Pb:d,Rb:function(c){c=c||event;eb(Na,c,a);R(d,e,Na,b)&&c.preventDefault()},Ob:c};Za()&&"mousedown"==h&&(c.Nb=!1);O(c)}
function gb(a,b,c,d){Oa||(Oa=Q(36));a=P(a);O({target:a,Nb:!1,Mb:"resize",Pb:d,Rb:function(c){c=c||event;if(c.target==a){var e=0<pageXOffset||0<pageYOffset?[pageXOffset,pageYOffset]:"undefined"!==typeof document.documentElement.scrollLeft||"undefined"!==typeof document.documentElement.scrollTop?[document.documentElement.scrollLeft,document.documentElement.scrollTop]:[document.body.scrollLeft|0,document.body.scrollTop|0],l=Oa;H[l>>2]=c.detail;H[l+4>>2]=document.body.clientWidth;H[l+8>>2]=document.body.clientHeight;
H[l+12>>2]=innerWidth;H[l+16>>2]=innerHeight;H[l+20>>2]=outerWidth;H[l+24>>2]=outerHeight;H[l+28>>2]=e[0];H[l+32>>2]=e[1];R(d,10,l,b)&&c.preventDefault()}},Ob:c})}
function hb(a,b,c,d,e,h){Pa||(Pa=Q(1684));a=P(a);O({target:a,Nb:"touchstart"==h||"touchend"==h,Mb:h,Pb:d,Rb:function(c){c=c||event;for(var h={},l=0;l<c.touches.length;++l){var r=c.touches[l];r.Xb=!1;h[r.identifier]=r}for(l=0;l<c.changedTouches.length;++l)r=c.changedTouches[l],h[r.identifier]=r,r.Xb=!0;for(l=0;l<c.targetTouches.length;++l)r=c.targetTouches[l],h[r.identifier].fc=!0;var u=r=Pa;H[u+4>>2]=c.ctrlKey;H[u+8>>2]=c.shiftKey;H[u+12>>2]=c.altKey;H[u+16>>2]=c.metaKey;u+=20;var Ka=f.canvas?f.canvas.getBoundingClientRect():
void 0,lb=a.getBoundingClientRect?a.getBoundingClientRect():{left:0,top:0},mb=0;for(l in h){var y=h[l];H[u>>2]=y.identifier;H[u+4>>2]=y.screenX;H[u+8>>2]=y.screenY;H[u+12>>2]=y.clientX;H[u+16>>2]=y.clientY;H[u+20>>2]=y.pageX;H[u+24>>2]=y.pageY;H[u+28>>2]=y.Xb;H[u+32>>2]=y.fc;Ka?(H[u+44>>2]=y.clientX-Ka.left,H[u+48>>2]=y.clientY-Ka.top):(H[u+44>>2]=0,H[u+48>>2]=0);H[u+36>>2]=y.clientX-lb.left;H[u+40>>2]=y.clientY-lb.top;u+=52;if(32<=++mb)break}H[r>>2]=mb;R(d,e,r,b)&&c.preventDefault()},Ob:c})}
function ib(a,b,c,d,e,h){a||(a=f.canvas);a={target:P(a),Nb:!1,Mb:h,Pb:d,Rb:function(a){a=a||event;R(d,e,0,b)&&a.preventDefault()},Ob:c};O(a)}
function jb(a,b,c,d,e){function h(c){c=c||event;eb(M,c,a);J[M+72>>3]=c.wheelDeltaX||0;J[M+80>>3]=-(c.wheelDeltaY||c.wheelDelta);J[M+88>>3]=0;H[M+96>>2]=0;R(d,9,M,b)&&c.preventDefault()}function l(c){c=c||event;var e=M;eb(e,c,a);J[e+72>>3]=c.deltaX;J[e+80>>3]=c.deltaY;J[e+88>>3]=c.deltaZ;H[e+96>>2]=c.deltaMode;R(d,9,e,b)&&c.preventDefault()}M||(M=Q(104));O({target:a,Nb:!0,Mb:e,Pb:d,Rb:"wheel"==e?l:h,Ob:c})}
var kb=1,nb=0,ob=[],S=[],pb=[],qb=[],T=[],U=[],V=[],rb=[],sb={},W=null,cb={},tb={},ub={},vb={};function X(a){nb||(nb=a)}function wb(a){for(var b=kb++,c=a.length;c<b;c++)a[c]=null;return b}var xb=null,Y=[0];
function yb(a,b){function c(){var a=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);return a?parseInt(a[2],10):!1}var d=Q(8),e={handle:d,attributes:b,version:b.$b,Ub:a};e.Lb=2<=e.version&&(!1===c()||58<=c());a.canvas&&(a.canvas.hc=e);sb[d]=e;("undefined"===typeof b.Zb||b.Zb)&&zb(e);return d}
function Ab(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(a,d){b.vertexAttribDivisorANGLE(a,d)},a.drawArraysInstanced=function(a,d,e,h){b.drawArraysInstancedANGLE(a,d,e,h)},a.drawElementsInstanced=function(a,d,e,h,l){b.drawElementsInstancedANGLE(a,d,e,h,l)})}
function Bb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(a){b.deleteVertexArrayOES(a)},a.bindVertexArray=function(a){b.bindVertexArrayOES(a)},a.isVertexArray=function(a){return b.isVertexArrayOES(a)})}function Cb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(a,d){b.drawBuffersWEBGL(a,d)})}
function zb(a){a||(a=W);if(!a.ec){a.ec=!0;var b=a.Ub;2>a.version&&(Ab(b),Bb(b),Cb(b));b.kc=b.getExtension("EXT_disjoint_timer_query");var c="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2".split(" ");
(b.getSupportedExtensions()||[]).forEach(function(a){-1!=c.indexOf(a)&&b.getExtension(a)})}}var bb={},Db,Eb,Fb=["default","low-power","high-performance"],Gb=[];function Hb(a,b,c,d){for(var e=0;e<a;e++){var h=Z[c](),l=h&&wb(d);h?(h.name=l,d[l]=h):X(1282);H[b+4*e>>2]=l}}
function Ib(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=Z.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>W.version){X(1282);return}c=2*(Z.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>W.version){X(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=Z.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":X(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 35097:case 36389:case 34068:c=
0;break;default:X(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)H[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){X(1280);A("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:X(1280);A("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}H[b>>2]=c}else X(1281)}
function Jb(a){var b=na(a)+1,c=Q(b);G(a,F,c,b);return c}var Kb={6402:1,6403:1,6406:1,6407:3,6408:4,6409:1,6410:2,33319:2,33320:2,35904:3,35906:4,36244:1,36248:3,36249:4},Lb={5120:1,5121:1,5122:2,5123:2,5124:4,5125:4,5126:4,5131:2,32819:2,32820:2,33635:2,33640:4,34042:4,35899:4,35902:4,36193:2};
function Mb(a,b,c,d,e){if(b=Kb[b]*Lb[a])switch(c=e+d*(c*b+4-1&-4),a){case 5120:return qa.subarray(e,c);case 5121:return F.subarray(e,c);case 5122:return sa.subarray(e>>1,c>>1);case 5124:return H.subarray(e>>2,c>>2);case 5126:return I.subarray(e>>2,c>>2);case 5125:case 34042:case 35902:case 33640:case 35899:return ua.subarray(e>>2,c>>2);case 5123:case 33635:case 32819:case 32820:case 36193:case 5131:return ta.subarray(e>>1,c>>1);default:X(1280)}else X(1280)}
function Nb(a){switch(a){case 5120:return qa;case 5121:return F;case 5122:return sa;case 5123:case 33635:case 32819:case 32820:case 36193:case 5131:return ta;case 5124:return H;case 5125:case 34042:case 35902:case 33640:case 35899:case 34042:return ua;case 5126:return I}}var Ob={5122:1,5123:1,5124:2,5125:2,5126:2,5131:1,32819:1,32820:1,33635:1,33640:2,34042:2,35899:2,35902:2,36193:1},Z;xb=new Float32Array(256);for(var Pb=0;256>Pb;Pb++)Y[Pb]=xb.subarray(0,Pb+1);for(var Qb=0;32>Qb;Qb++)Gb.push(Array(Qb));
var Xb={aa:function(){return devicePixelRatio||1},ca:function(a,b,c){a=a?P(a):f.canvas;if(!a)return-4;a.getBoundingClientRect?(a=a.getBoundingClientRect(),J[b>>3]=a.right-a.left,J[c>>3]=a.bottom-a.top):(J[b>>3]=a.clientWidth,J[c>>3]=a.clientHeight);return 0},Xa:function(a,b,c){F.set(F.subarray(b,b+c),a)},La:function(a,b){function c(d){Rb(a,d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},Ya:function(a){if(2147418112<a)return!1;for(var b=Math.max(qa.length,16777216);b<a;)536870912>=
b?b=ra(2*b):b=Math.min(ra((3*b+2147483648)/4),2147418112);a:{try{D.grow(b-buffer.byteLength+65535>>16);va(D.buffer);var c=1;break a}catch(d){}c=void 0}return c?!0:!1},_:function(a,b,c){a=ab(a);if(!a)return-4;a.width=b;a.height=c;return 0},Ua:function(a,b,c,d){db(a,b,c,d,2,"keydown");return 0},Sa:function(a,b,c,d){db(a,b,c,d,1,"keypress");return 0},Ta:function(a,b,c,d){db(a,b,c,d,3,"keyup");return 0},ma:function(a,b,c,d){fb(a,b,c,d,5,"mousedown");return 0},bb:function(a,b,c,d){fb(a,b,c,d,33,"mouseenter");
return 0},Wa:function(a,b,c,d){fb(a,b,c,d,34,"mouseleave");return 0},jb:function(a,b,c,d){fb(a,b,c,d,8,"mousemove");return 0},ka:function(a,b,c,d){fb(a,b,c,d,6,"mouseup");return 0},kb:function(a,b,c,d){gb(a,b,c,d);return 0},Oa:function(a,b,c,d){hb(a,b,c,d,25,"touchcancel");return 0},Pa:function(a,b,c,d){hb(a,b,c,d,23,"touchend");return 0},Qa:function(a,b,c,d){hb(a,b,c,d,24,"touchmove");return 0},Ra:function(a,b,c,d){hb(a,b,c,d,22,"touchstart");return 0},Na:function(a,b,c,d){ib(a,b,c,d,31,"webglcontextlost");
return 0},Ma:function(a,b,c,d){ib(a,b,c,d,32,"webglcontextrestored");return 0},Va:function(a,b,c,d){a=P(a);return"undefined"!==typeof a.onwheel?(jb(a,b,c,d,"wheel"),0):"undefined"!==typeof a.onmousewheel?(jb(a,b,c,d,"mousewheel"),0):-1},Q:function(a,b){var c={};b>>=2;c.alpha=!!H[b];c.depth=!!H[b+1];c.stencil=!!H[b+2];c.antialias=!!H[b+3];c.premultipliedAlpha=!!H[b+4];c.preserveDrawingBuffer=!!H[b+5];c.powerPreference=Fb[H[b+6]];c.failIfMajorPerformanceCaveat=!!H[b+7];c.$b=H[b+8];c.lc=H[b+9];c.Zb=
H[b+10];c.cc=H[b+11];c.mc=H[b+12];c.nc=H[b+13];a=ab(a);!a||c.cc?c=0:c=(a=1<c.$b?a.getContext("webgl2",c):a.getContext("webgl",c)||a.getContext("experimental-webgl",c))?yb(a,c):0;return c},ra:function(a,b){a=sb[a];b=E(b);0==b.indexOf("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b?Ab(Z):"OES_vertex_array_object"==b?Bb(Z):"WEBGL_draw_buffers"==b&&Cb(Z);return!!a.Ub.getExtension(b)},Ea:function(a){a>>=2;for(var b=0;14>b;++b)H[a+b]=0;H[a]=H[a+1]=H[a+3]=H[a+4]=H[a+8]=H[a+10]=1},ta:function(a){W=sb[a];
f.jc=Z=W&&W.Ub;return!a||Z?0:-5},n:function(a){Z.activeTexture(a)},P:function(a,b){Z.attachShader(S[a],V[b])},e:function(a,b){35051==a?Z.Yb=b:35052==a&&(Z.Qb=b);Z.bindBuffer(a,ob[b])},c:function(a,b){Z.bindFramebuffer(a,pb[b])},T:function(a,b){Z.bindRenderbuffer(a,qb[b])},b:function(a,b){Z.bindTexture(a,T[b])},$:function(a){Z.bindVertexArray(rb[a])},H:function(a,b,c,d){Z.blendColor(a,b,c,d)},I:function(a,b){Z.blendEquationSeparate(a,b)},J:function(a,b,c,d){Z.blendFuncSeparate(a,b,c,d)},v:function(a,
b,c,d,e,h,l,n,p,r){Z.blitFramebuffer(a,b,c,d,e,h,l,n,p,r)},W:function(a,b,c,d){W.Lb?c?Z.bufferData(a,F,d,c,b):Z.bufferData(a,b,d):Z.bufferData(a,c?F.subarray(c,c+b):b,d)},V:function(a,b,c,d){W.Lb?Z.bufferSubData(a,b,F,d,c):Z.bufferSubData(a,b,F.subarray(d,d+c))},p:function(a){return Z.checkFramebufferStatus(a)},M:function(a){Z.clear(a)},na:function(a,b,c,d){Z.clearBufferfi(a,b,c,d)},o:function(a,b,c){Z.clearBufferfv(a,b,I,c>>2)},la:function(a,b,c){Z.clearBufferuiv(a,b,ua,c>>2)},qa:function(a,b,c,
d){Z.clearColor(a,b,c,d)},pa:function(a){Z.clearDepth(a)},oa:function(a){Z.clearStencil(a)},A:function(a,b,c,d){Z.colorMask(!!a,!!b,!!c,!!d)},_a:function(a){Z.compileShader(V[a])},Ba:function(a,b,c,d,e,h,l,n){W.Lb?Z.Qb?Z.compressedTexImage2D(a,b,c,d,e,h,l,n):Z.compressedTexImage2D(a,b,c,d,e,h,F,n,l):Z.compressedTexImage2D(a,b,c,d,e,h,n?F.subarray(n,n+l):null)},za:function(a,b,c,d,e,h,l,n,p){W.Lb?Z.Qb?Z.compressedTexImage3D(a,b,c,d,e,h,l,n,p):Z.compressedTexImage3D(a,b,c,d,e,h,l,F,p,n):Z.compressedTexImage3D(a,
b,c,d,e,h,l,p?F.subarray(p,p+n):null)},xa:function(){var a=wb(S),b=Z.createProgram();b.name=a;S[a]=b;return a},ab:function(a){var b=wb(V);V[b]=Z.createShader(a);return b},G:function(a){Z.cullFace(a)},Fa:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],e=ob[d];e&&(Z.deleteBuffer(e),e.name=0,ob[d]=null,d==Db&&(Db=0),d==Eb&&(Eb=0),d==Z.Yb&&(Z.Yb=0),d==Z.Qb&&(Z.Qb=0))}},k:function(a,b){for(var c=0;c<a;++c){var d=H[b+4*c>>2],e=pb[d];e&&(Z.deleteFramebuffer(e),e.name=0,pb[d]=null)}},Y:function(a){if(a){var b=
S[a];b?(Z.deleteProgram(b),b.name=0,S[a]=null,tb[a]=null):X(1281)}},r:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],e=qb[d];e&&(Z.deleteRenderbuffer(e),e.name=0,qb[d]=null)}},B:function(a){if(a){var b=V[a];b?(Z.deleteShader(b),V[a]=null):X(1281)}},Z:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],e=T[d];e&&(Z.deleteTexture(e),e.name=0,T[d]=null)}},Ga:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2];Z.deleteVertexArray(rb[d]);rb[d]=null}},y:function(a){Z.depthFunc(a)},z:function(a){Z.depthMask(!!a)},
d:function(a){Z.disable(a)},C:function(a){Z.disableVertexAttribArray(a)},fb:function(a,b,c){Z.drawArrays(a,b,c)},j:function(a,b){for(var c=Gb[a],d=0;d<a;d++)c[d]=H[b+4*d>>2];Z.drawBuffers(c)},gb:function(a,b,c,d){Z.drawElements(a,b,c,d)},g:function(a){Z.enable(a)},ga:function(a){Z.enableVertexAttribArray(a)},l:function(a,b,c,d){Z.framebufferRenderbuffer(a,b,c,qb[d])},a:function(a,b,c,d,e){Z.framebufferTexture2D(a,b,c,T[d],e)},h:function(a,b,c,d,e){Z.framebufferTextureLayer(a,b,T[c],d,e)},F:function(a){Z.frontFace(a)},
X:function(a,b){Hb(a,b,"createBuffer",ob)},q:function(a,b){Hb(a,b,"createFramebuffer",pb)},U:function(a,b){Hb(a,b,"createRenderbuffer",qb)},Ca:function(a,b){Hb(a,b,"createTexture",T)},Ha:function(a,b){Hb(a,b,"createVertexArray",rb)},ua:function(a,b){return Z.getAttribLocation(S[a],E(b))},f:function(a,b){Ib(a,b)},va:function(a,b,c,d){a=Z.getProgramInfoLog(S[a]);null===a&&(a="(unknown error)");b=0<b&&d?G(a,F,d,b):0;c&&(H[c>>2]=b)},O:function(a,b,c){if(c)if(a>=kb)X(1281);else{var d=tb[a];if(d)if(35716==
b)a=Z.getProgramInfoLog(S[a]),null===a&&(a="(unknown error)"),H[c>>2]=a.length+1;else if(35719==b)H[c>>2]=d.Wb;else if(35722==b){if(-1==d.Sb){a=S[a];var e=Z.getProgramParameter(a,35721);for(b=d.Sb=0;b<e;++b)d.Sb=Math.max(d.Sb,Z.getActiveAttrib(a,b).name.length+1)}H[c>>2]=d.Sb}else if(35381==b){if(-1==d.Tb)for(a=S[a],e=Z.getProgramParameter(a,35382),b=d.Tb=0;b<e;++b)d.Tb=Math.max(d.Tb,Z.getActiveUniformBlockName(a,b).length+1);H[c>>2]=d.Tb}else H[c>>2]=Z.getProgramParameter(S[a],b);else X(1282)}else X(1281)},
Za:function(a,b,c,d){a=Z.getShaderInfoLog(V[a]);null===a&&(a="(unknown error)");b=0<b&&d?G(a,F,d,b):0;c&&(H[c>>2]=b)},ba:function(a,b,c){c?35716==b?(a=Z.getShaderInfoLog(V[a]),null===a&&(a="(unknown error)"),H[c>>2]=a.length+1):35720==b?(a=Z.getShaderSource(V[a]),H[c>>2]=null===a||0==a.length?0:a.length+1):H[c>>2]=Z.getShaderParameter(V[a],b):X(1281)},Ja:function(a){if(ub[a])return ub[a];switch(a){case 7939:var b=Z.getSupportedExtensions()||[];b=b.concat(b.map(function(a){return"GL_"+a}));b=Jb(b.join(" "));
break;case 7936:case 7937:case 37445:case 37446:(b=Z.getParameter(a))||X(1280);b=Jb(b);break;case 7938:b=Z.getParameter(Z.VERSION);b=2<=W.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Jb(b);break;case 35724:b=Z.getParameter(Z.SHADING_LANGUAGE_VERSION);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Jb(b);break;default:return X(1280),0}return ub[a]=b},Ia:function(a,b){if(2>W.version)return X(1282),
0;var c=vb[a];if(c)return 0>b||b>=c.length?(X(1281),0):c[b];switch(a){case 7939:return c=Z.getSupportedExtensions()||[],c=c.concat(c.map(function(a){return"GL_"+a})),c=c.map(function(a){return Jb(a)}),c=vb[a]=c,0>b||b>=c.length?(X(1281),0):c[b];default:return X(1280),0}},m:function(a,b){b=E(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,d)}return(a=tb[a]&&tb[a].ac[b])&&0<=c&&c<a[0]?a[1]+c:-1},wa:function(a){Z.linkProgram(S[a]);var b=S[a];
a=tb[a]={ac:{},Wb:0,Sb:-1,Tb:-1};for(var c=a.ac,d=Z.getProgramParameter(b,35718),e=0;e<d;++e){var h=Z.getActiveUniform(b,e),l=h.name;a.Wb=Math.max(a.Wb,l.length+1);"]"==l.slice(-1)&&(l=l.slice(0,l.lastIndexOf("[")));var n=Z.getUniformLocation(b,l);if(n){var p=wb(U);c[l]=[h.size,p];U[p]=n;for(var r=1;r<h.size;++r)n=Z.getUniformLocation(b,l+"["+r+"]"),p=wb(U),U[p]=n}}},E:function(a,b){Z.polygonOffset(a,b)},w:function(a){Z.readBuffer(a)},Da:function(a,b,c,d){Z.renderbufferStorage(a,b,c,d)},S:function(a,
b,c,d,e){Z.renderbufferStorageMultisample(a,b,c,d,e)},sa:function(a,b,c,d){Z.scissor(a,b,c,d)},$a:function(a,b,c,d){for(var e="",h=0;h<b;++h){var l=d?H[d+4*h>>2]:-1;e+=E(H[c+4*h>>2],0>l?void 0:l)}Z.shaderSource(V[a],e)},eb:function(a,b,c){Z.stencilFunc(a,b,c)},L:function(a,b,c,d){Z.stencilFuncSeparate(a,b,c,d)},x:function(a){Z.stencilMask(a)},db:function(a,b,c){Z.stencilOp(a,b,c)},K:function(a,b,c,d){Z.stencilOpSeparate(a,b,c,d)},Aa:function(a,b,c,d,e,h,l,n,p){W.Lb?Z.Qb?Z.texImage2D(a,b,c,d,e,h,l,
n,p):0!=p?Z.texImage2D(a,b,c,d,e,h,l,n,Nb(n),p>>(Ob[n]|0)):Z.texImage2D(a,b,c,d,e,h,l,n,null):Z.texImage2D(a,b,c,d,e,h,l,n,p?Mb(n,l,d,e,p):null)},ya:function(a,b,c,d,e,h,l,n,p,r){Z.Qb?Z.texImage3D(a,b,c,d,e,h,l,n,p,r):0!=r?Z.texImage3D(a,b,c,d,e,h,l,n,p,Nb(p),r>>(Ob[p]|0)):Z.texImage3D(a,b,c,d,e,h,l,n,p,null)},R:function(a,b,c){Z.texParameterf(a,b,c)},i:function(a,b,c){Z.texParameteri(a,b,c)},fa:function(a,b,c){if(W.Lb)Z.uniform1fv(U[a],I,c>>2,b);else{if(256>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=I[c+
4*e>>2];else d=I.subarray(c>>2,c+4*b>>2);Z.uniform1fv(U[a],d)}},D:function(a,b){Z.uniform1i(U[a],b)},ea:function(a,b,c){if(W.Lb)Z.uniform2fv(U[a],I,c>>2,2*b);else{if(256>=2*b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=I[c+4*e>>2],d[e+1]=I[c+(4*e+4)>>2];else d=I.subarray(c>>2,c+8*b>>2);Z.uniform2fv(U[a],d)}},da:function(a,b,c){if(W.Lb)Z.uniform3fv(U[a],I,c>>2,3*b);else{if(256>=3*b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=I[c+4*e>>2],d[e+1]=I[c+(4*e+4)>>2],d[e+2]=I[c+(4*e+8)>>2];else d=I.subarray(c>>2,c+
12*b>>2);Z.uniform3fv(U[a],d)}},ib:function(a,b,c){if(W.Lb)Z.uniform4fv(U[a],I,c>>2,4*b);else{if(256>=4*b)for(var d=Y[4*b-1],e=0;e<4*b;e+=4)d[e]=I[c+4*e>>2],d[e+1]=I[c+(4*e+4)>>2],d[e+2]=I[c+(4*e+8)>>2],d[e+3]=I[c+(4*e+12)>>2];else d=I.subarray(c>>2,c+16*b>>2);Z.uniform4fv(U[a],d)}},hb:function(a,b,c,d){if(W.Lb)Z.uniformMatrix4fv(U[a],!!c,I,d>>2,16*b);else{if(256>=16*b)for(var e=Y[16*b-1],h=0;h<16*b;h+=16)e[h]=I[d+4*h>>2],e[h+1]=I[d+(4*h+4)>>2],e[h+2]=I[d+(4*h+8)>>2],e[h+3]=I[d+(4*h+12)>>2],e[h+4]=
I[d+(4*h+16)>>2],e[h+5]=I[d+(4*h+20)>>2],e[h+6]=I[d+(4*h+24)>>2],e[h+7]=I[d+(4*h+28)>>2],e[h+8]=I[d+(4*h+32)>>2],e[h+9]=I[d+(4*h+36)>>2],e[h+10]=I[d+(4*h+40)>>2],e[h+11]=I[d+(4*h+44)>>2],e[h+12]=I[d+(4*h+48)>>2],e[h+13]=I[d+(4*h+52)>>2],e[h+14]=I[d+(4*h+56)>>2],e[h+15]=I[d+(4*h+60)>>2];else e=I.subarray(d>>2,d+64*b>>2);Z.uniformMatrix4fv(U[a],!!c,e)}},ja:function(a){Z.useProgram(S[a])},ha:function(a,b){Z.vertexAttribDivisor(a,b)},ia:function(a,b,c,d,e,h){Z.vertexAttribPointer(a,b,c,!!d,e,h)},N:function(a,
b,c,d){Z.viewport(a,b,c,d)},memory:D,u:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Sb()});document.body.append(a)},t:function(){document.getElementById("_sokol_app_input_element").focus()},Ka:function(){window.addEventListener("beforeunload",function(a){0!=Tb()&&(a.preventDefault(),a.returnValue=" ")})},s:function(){document.getElementById("_sokol_app_input_element").blur()},cb:function(a,
b,c,d,e,h){b=E(b);var l=new XMLHttpRequest;l.open("GET",b);l.responseType="arraybuffer";var n=0<d;n&&l.setRequestHeader("Range","bytes="+c+"-"+(c+d));l.onreadystatechange=function(){if(this.readyState==this.DONE)if(206==this.status||200==this.status&&!n){var b=new Uint8Array(l.response),c=b.length;c<=h?(F.set(b,e),Ub(a,d,c)):Vb(a)}else Wb(a,this.status)};l.send()},table:ka},Yb=function(){function a(a){f.asm=a.exports;K--;f.monitorRunDependencies&&f.monitorRunDependencies(K);0==K&&(null!==Ea&&(clearInterval(Ea),
Ea=null),Fa&&(a=Fa,Fa=null,a()))}function b(b){a(b.instance)}function c(a){return Ja().then(function(a){return WebAssembly.instantiate(a,d)}).then(a,function(a){A("failed to asynchronously prepare wasm: "+a);z(a)})}var d={env:Xb,wasi_unstable:Xb};K++;f.monitorRunDependencies&&f.monitorRunDependencies(K);if(f.instantiateWasm)try{return f.instantiateWasm(d,a)}catch(e){return A("Module.instantiateWasm callback failed with error: "+e),!1}(function(){if(B||"function"!==typeof WebAssembly.instantiateStreaming||
Ga()||"function"!==typeof fetch)return c(b);fetch(L,{credentials:"same-origin"}).then(function(a){return WebAssembly.instantiateStreaming(a,d).then(b,function(a){A("wasm streaming compile failed: "+a);A("falling back to ArrayBuffer instantiation");c(b)})})})();return{}}();f.asm=Yb;var La=f.___wasm_call_ctors=function(){return f.asm.lb.apply(null,arguments)},Sb=f.__sapp_emsc_notify_keyboard_hidden=function(){return f.asm.mb.apply(null,arguments)};
f.___em_js__sapp_js_create_textfield=function(){return f.asm.nb.apply(null,arguments)};f.___em_js__sapp_js_focus_textfield=function(){return f.asm.ob.apply(null,arguments)};f.___em_js__sapp_js_unfocus_textfield=function(){return f.asm.pb.apply(null,arguments)};var Tb=f.__sapp_html5_get_ask_leave_site=function(){return f.asm.qb.apply(null,arguments)};f.___em_js__sapp_js_hook_beforeunload=function(){return f.asm.rb.apply(null,arguments)};f._main=function(){return f.asm.sb.apply(null,arguments)};
var Q=f._malloc=function(){return f.asm.tb.apply(null,arguments)};f._free=function(){return f.asm.ub.apply(null,arguments)};f.___em_js__stm_js_perfnow=function(){return f.asm.vb.apply(null,arguments)};f.__saudio_emsc_pull=function(){return f.asm.wb.apply(null,arguments)};f.___em_js__saudio_js_init=function(){return f.asm.xb.apply(null,arguments)};f.___em_js__saudio_js_sample_rate=function(){return f.asm.yb.apply(null,arguments)};
f.___em_js__saudio_js_buffer_frames=function(){return f.asm.zb.apply(null,arguments)};f.___em_js__sfetch_js_send_head_request=function(){return f.asm.Ab.apply(null,arguments)};f.___em_js__sfetch_js_send_get_request=function(){return f.asm.Bb.apply(null,arguments)};f.__sfetch_emsc_head_response=function(){return f.asm.Cb.apply(null,arguments)};
var Ub=f.__sfetch_emsc_get_response=function(){return f.asm.Db.apply(null,arguments)},Wb=f.__sfetch_emsc_failed_http_status=function(){return f.asm.Eb.apply(null,arguments)},Vb=f.__sfetch_emsc_failed_buffer_too_small=function(){return f.asm.Fb.apply(null,arguments)},pa=f.stackAlloc=function(){return f.asm.Gb.apply(null,arguments)};f.dynCall_vi=function(){return f.asm.Hb.apply(null,arguments)};f.dynCall_v=function(){return f.asm.Ib.apply(null,arguments)};
var R=f.dynCall_iiii=function(){return f.asm.Jb.apply(null,arguments)},Rb=f.dynCall_idi=function(){return f.asm.Kb.apply(null,arguments)};f.asm=Yb;var Zb;function ia(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}Fa=function $b(){Zb||ac();Zb||(Fa=$b)};
function ac(a){function b(){if(!Zb&&(Zb=!0,!la)){xa(za);xa(Aa);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if(bc){var b=a,d=f._main;b=b||[];var e=b.length+1,h=pa(4*(e+1));H[h>>2]=oa(aa);for(var l=1;l<e;l++)H[(h>>2)+l]=oa(b[l-1]);H[(h>>2)+e]=0;try{var n=d(e,h);if(!C||0!==n){if(!C&&(la=!0,f.onExit))f.onExit(n);q(n,new ia(n))}}catch(p){p instanceof ia||("SimulateInfiniteLoop"==p?C=!0:((b=p)&&"object"===typeof p&&p.stack&&(b=[p,p.stack]),A("exception thrown: "+b),q(1,p)))}finally{}}if(f.postRun)for("function"==
typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;)b=f.postRun.shift(),Ca.unshift(b);xa(Ca)}}a=a||m;if(!(0<K)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Da();xa(ya);0<K||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},1)):b())}}f.run=ac;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var bc=!0;f.noInitialRun&&(bc=!1);C=!0;ac();
