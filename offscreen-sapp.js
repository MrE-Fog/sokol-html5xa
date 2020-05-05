
var e;e||(e=typeof Module !== 'undefined' ? Module : {});var h={},l;for(l in e)e.hasOwnProperty(l)&&(h[l]=e[l]);var r=[],aa="./this.program";function t(a,b){throw b;}var ba=!1,u=!1,ca=!1,da=!1;ba="object"===typeof window;u="function"===typeof importScripts;ca="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;da=!ba&&!ca&&!u;var v="",ea,w,fa,ha;
if(ca)v=u?require("path").dirname(v)+"/":__dirname+"/",ea=function(a,b){fa||(fa=require("fs"));ha||(ha=require("path"));a=ha.normalize(a);return fa.readFileSync(a,b?null:"utf8")},w=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/")),r=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=e),process.on("uncaughtException",function(a){if(!(a instanceof ia))throw a;}),process.on("unhandledRejection",
ja),t=function(a){process.exit(a)},e.inspect=function(){return"[Emscripten Module object]"};else if(da)"undefined"!=typeof read&&(ea=function(a){return read(a)}),w=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?r=scriptArgs:"undefined"!=typeof arguments&&(r=arguments),"function"===typeof quit&&(t=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===typeof console&&
(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(ba||u)u?v=self.location.href:document.currentScript&&(v=document.currentScript.src),v=0!==v.indexOf("blob:")?v.substr(0,v.lastIndexOf("/")+1):"",ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},u&&(w=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});
var ka=e.print||console.log.bind(console),x=e.printErr||console.warn.bind(console);for(l in h)h.hasOwnProperty(l)&&(e[l]=h[l]);h=null;e.arguments&&(r=e.arguments);e.thisProgram&&(aa=e.thisProgram);e.quit&&(t=e.quit);var z;e.wasmBinary&&(z=e.wasmBinary);var noExitRuntime;e.noExitRuntime&&(noExitRuntime=e.noExitRuntime);"object"!==typeof WebAssembly&&x("no native wasm support detected");var A,la=new WebAssembly.Table({initial:19,maximum:19,element:"anyfunc"}),ma=!1;
function assert(a,b){a||ja("Assertion failed: "+b)}function na(){var a=e.__sapp_emsc_onpaste;assert(a,"Cannot call unknown function _sapp_emsc_onpaste, make sure it is exported");return a}
function oa(a){var b=["string"],c={string:function(n){var p=0;if(null!==n&&void 0!==n&&0!==n){var q=(n.length<<2)+1;p=B(q);C(n,D,p,q)}return p},array:function(n){var p=B(n.length);pa.set(n,p);return p}},d=na(),f=[],k=0;if(a)for(var g=0;g<a.length;g++){var m=c[b[g]];m?(0===k&&(k=qa()),f[g]=m(a[g])):f[g]=a[g]}d.apply(null,f);0!==k&&ra(k)}var sa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function E(a,b){if(a){var c=D,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&sa)a=sa.decode(c.subarray(a,b));else{for(d="";a<b;){var f=c[a++];if(f&128){var k=c[a++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|k);else{var g=c[a++]&63;f=224==(f&240)?(f&15)<<12|k<<6|g:(f&7)<<18|k<<12|g<<6|c[a++]&63;65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else d+=String.fromCharCode(f)}a=d}}else a="";return a}
function C(a,b,c,d){if(!(0<d))return 0;var f=c;d=c+d-1;for(var k=0;k<a.length;++k){var g=a.charCodeAt(k);if(55296<=g&&57343>=g){var m=a.charCodeAt(++k);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-f}
function ta(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function ua(a){var b=ta(a)+1,c=B(b);C(a,pa,c,b);return c}var va,pa,D,wa,xa,F,ya,G,H;
function za(a){va=a;e.HEAP8=pa=new Int8Array(a);e.HEAP16=wa=new Int16Array(a);e.HEAP32=F=new Int32Array(a);e.HEAPU8=D=new Uint8Array(a);e.HEAPU16=xa=new Uint16Array(a);e.HEAPU32=ya=new Uint32Array(a);e.HEAPF32=G=new Float32Array(a);e.HEAPF64=H=new Float64Array(a)}var Aa=e.INITIAL_MEMORY||33554432;e.wasmMemory?A=e.wasmMemory:A=new WebAssembly.Memory({initial:Aa/65536,maximum:32768});A&&(va=A.buffer);Aa=va.byteLength;za(va);F[9308]=5280272;
function Ba(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(e);else{var c=b.nc;"number"===typeof c?void 0===b.bc?e.dynCall_v(c):e.dynCall_vi(c,b.bc):c(void 0===b.bc?null:b.bc)}}}var Ca=[],Da=[],Ea=[],Fa=[],Ga=[];function Ha(){var a=e.preRun.shift();Ca.unshift(a)}var I=0,Ia=null,Ja=null;e.preloadedImages={};e.preloadedAudios={};function ja(a){if(e.onAbort)e.onAbort(a);ka(a);x(a);ma=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}
function Ka(){var a=J;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var J="offscreen-sapp.wasm";if(!Ka()){var La=J;J=e.locateFile?e.locateFile(La,v):v+La}function Ma(){try{if(z)return new Uint8Array(z);if(w)return w(J);throw"both async and sync fetching of the wasm failed";}catch(a){ja(a)}}
function Na(){return z||!ba&&!u||"function"!==typeof fetch?new Promise(function(a){a(Ma())}):fetch(J,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+J+"'";return a.arrayBuffer()}).catch(function(){return Ma()})}Da.push({nc:function(){Oa()}});var Pa=0,Qa=0,K=0,Ra=0,Sa=0,Ta=null,Ua=null,Va=!1;function Wa(){for(var a=L.length-1;0<=a;--a)Xa(a);L=[];Ya=[]}var Ya=[];
function Za(){if($a&&ab.$b)for(var a=0;a<Ya.length;++a){var b=Ya[a];Ya.splice(a,1);--a;b.yc.apply(null,b.rc)}}var $a=0,ab=null,L=[];function Xa(a){var b=L[a];b.target.removeEventListener(b.Tb,b.lc,b.Ub);L.splice(a,1)}function M(a){function b(d){++$a;ab=a;Za();a.Xb(d);Za();--$a}if(a.Vb)a.lc=b,a.target.addEventListener(a.Tb,b,a.Ub),L.push(a),Va||(Fa.push(Wa),Va=!0);else for(var c=0;c<L.length;++c)L[c].target==a.target&&L[c].Tb==a.Tb&&Xa(c--)}function bb(a){return a===a+0?E(a):a}
var cb=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function N(a){return cb[a]||("undefined"!==typeof document?document.querySelector(bb(a)):void 0)}function db(a){return 0>cb.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}
function eb(a,b,c,d,f,k){Pa||(Pa=O(164));a={target:N(a),$b:!0,Tb:k,Vb:d,Xb:function(g){g=g||event;var m=Pa;C(g.key?g.key:"",D,m+0,32);C(g.code?g.code:"",D,m+32,32);F[m+64>>2]=g.location;F[m+68>>2]=g.ctrlKey;F[m+72>>2]=g.shiftKey;F[m+76>>2]=g.altKey;F[m+80>>2]=g.metaKey;F[m+84>>2]=g.repeat;C(g.locale?g.locale:"",D,m+88,32);C(g.char?g.char:"",D,m+120,32);F[m+152>>2]=g.charCode;F[m+156>>2]=g.keyCode;F[m+160>>2]=g.which;P(d,f,m,b)&&g.preventDefault()},Ub:c};M(a)}
function fb(a,b,c){F[a>>2]=b.screenX;F[a+4>>2]=b.screenY;F[a+8>>2]=b.clientX;F[a+12>>2]=b.clientY;F[a+16>>2]=b.ctrlKey;F[a+20>>2]=b.shiftKey;F[a+24>>2]=b.altKey;F[a+28>>2]=b.metaKey;wa[a+32>>1]=b.button;wa[a+34>>1]=b.buttons;var d=b.movementY||b.screenY-Ua;F[a+36>>2]=b.movementX||b.screenX-Ta;F[a+40>>2]=d;c=db(c);F[a+44>>2]=b.clientX-c.left;F[a+48>>2]=b.clientY-c.top;"wheel"!==b.type&&"mousewheel"!==b.type&&(Ta=b.screenX,Ua=b.screenY)}
function gb(a,b,c,d,f,k){Qa||(Qa=O(64));a=N(a);M({target:a,$b:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,Tb:k,Vb:d,Xb:function(g){g=g||event;fb(Qa,g,a);P(d,f,Qa,b)&&g.preventDefault()},Ub:c})}
function hb(a,b,c,d){Ra||(Ra=O(36));a=N(a);M({target:a,Tb:"resize",Vb:d,Xb:function(f){f=f||event;if(f.target==a){var k=Ra,g=document.body;F[k>>2]=f.detail;F[k+4>>2]=g.clientWidth;F[k+8>>2]=g.clientHeight;F[k+12>>2]=innerWidth;F[k+16>>2]=innerHeight;F[k+20>>2]=outerWidth;F[k+24>>2]=outerHeight;F[k+28>>2]=pageXOffset;F[k+32>>2]=pageYOffset;P(d,10,k,b)&&f.preventDefault()}},Ub:c})}
function ib(a,b,c,d,f,k){Sa||(Sa=O(1684));a=N(a);M({target:a,$b:"touchstart"==k||"touchend"==k,Tb:k,Vb:d,Xb:function(g){g=g||event;for(var m={},n=0;n<g.touches.length;++n){var p=g.touches[n];p.dc=!1;m[p.identifier]=p}for(n=0;n<g.changedTouches.length;++n)p=g.changedTouches[n],m[p.identifier]=p,p.dc=!0;for(n=0;n<g.targetTouches.length;++n)p=g.targetTouches[n],m[p.identifier].pc=!0;var q=p=Sa;F[q+4>>2]=g.ctrlKey;F[q+8>>2]=g.shiftKey;F[q+12>>2]=g.altKey;F[q+16>>2]=g.metaKey;q+=20;var lb=db(a),mb=0;for(n in m){var y=
m[n];F[q>>2]=y.identifier;F[q+4>>2]=y.screenX;F[q+8>>2]=y.screenY;F[q+12>>2]=y.clientX;F[q+16>>2]=y.clientY;F[q+20>>2]=y.pageX;F[q+24>>2]=y.pageY;F[q+28>>2]=y.dc;F[q+32>>2]=y.pc;F[q+36>>2]=y.clientX-lb.left;F[q+40>>2]=y.clientY-lb.top;q+=52;if(32<=++mb)break}F[p>>2]=mb;P(d,f,p,b)&&g.preventDefault()},Ub:c})}function jb(a,b,c,d,f,k){a={target:N(a),Tb:k,Vb:d,Xb:function(g){g=g||event;P(d,f,0,b)&&g.preventDefault()},Ub:c};M(a)}
function kb(a,b,c,d,f){function k(m){m=m||event;fb(K,m,a);H[K+64>>3]=m.wheelDeltaX||0;H[K+72>>3]=-(m.wheelDeltaY||m.wheelDelta);H[K+80>>3]=0;F[K+88>>2]=0;P(d,9,K,b)&&m.preventDefault()}function g(m){m=m||event;var n=K;fb(n,m,a);H[n+64>>3]=m.deltaX;H[n+72>>3]=m.deltaY;H[n+80>>3]=m.deltaZ;F[n+88>>2]=m.deltaMode;P(d,9,n,b)&&m.preventDefault()}K||(K=O(96));M({target:a,$b:!0,Tb:f,Vb:d,Xb:"wheel"==f?g:k,Ub:c})}
function nb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,f,k){b.drawArraysInstancedANGLE(c,d,f,k)},a.drawElementsInstanced=function(c,d,f,k,g){b.drawElementsInstancedANGLE(c,d,f,k,g)})}
function ob(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function pb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
var qb=1,rb=0,sb=[],Q=[],tb=[],ub=[],R=[],S=[],T=[],vb=[],wb=[],U=null,xb={},yb={},zb={};function V(a){rb||(rb=a)}function W(a){for(var b=qb++,c=a.length;c<b;c++)a[c]=null;return b}var X=[0];
function Ab(a){a||(a=U);if(!a.oc){a.oc=!0;var b=a.ac;2>a.version&&(nb(b),ob(b),pb(b));b.tc=b.getExtension("EXT_disjoint_timer_query");var c="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod EXT_texture_norm16 WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2 WEBKIT_WEBGL_compressed_texture_pvrtc".split(" ");(b.getSupportedExtensions()||
[]).forEach(function(d){-1!=c.indexOf(d)&&b.getExtension(d)})}}var Bb,Cb,Db=["default","low-power","high-performance"],Eb=[];function Fb(a,b,c,d){for(var f=0;f<a;f++){var k=Y[c](),g=k&&W(d);k?(k.name=g,d[g]=k):V(1282);F[b+4*f>>2]=g}}
function Gb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=Y.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>U.version){V(1282);return}c=2*(Y.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>U.version){V(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=Y.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":V(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 35097:case 36389:case 34068:c=
0;break;default:V(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)F[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(f){V(1280);x("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+f+")");return}}break;default:V(1280);x("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}F[b>>2]=c}else V(1281)}
function Hb(a){var b=ta(a)+1,c=O(b);C(a,D,c,b);return c}function Ib(a){a-=5120;return 0==a?pa:1==a?D:2==a?wa:4==a?F:6==a?G:5==a||28922==a||28520==a||30779==a||30782==a?ya:xa}function Jb(a,b,c,d,f){a=Ib(a);var k=31-Math.clz32(a.BYTES_PER_ELEMENT);return a.subarray(f>>k,f+d*(c*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[b-6402]||1)*(1<<k)+4-1&-4)>>k)}for(var Y,Kb=new Float32Array(256),Z=0;256>Z;Z++)X[Z]=Kb.subarray(0,Z+1);for(Z=0;256>Z;Z++);for(var Lb=0;32>Lb;Lb++)Eb.push(Array(Lb));
var Pb={ba:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},pa:function(a,b,c){a=N(a);if(!a)return-4;a=db(a);H[b>>3]=a.width;H[c>>3]=a.height;return 0},Za:function(a,b,c){D.copyWithin(a,b,b+c)},Qa:function(a,b){function c(d){Mb(a,d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},_a:function(a){var b=D.length;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(16777216,a,d);0<d%65536&&(d+=65536-d%65536);a:{try{A.grow(Math.min(2147483648,
d)-va.byteLength+65535>>>16);za(A.buffer);var f=1;break a}catch(k){}f=void 0}if(f)return!0}return!1},Y:function(a,b,c){a=N(a);if(!a)return-4;a.width=b;a.height=c;return 0},ga:function(a,b,c,d){eb(a,b,c,d,2,"keydown");return 0},ea:function(a,b,c,d){eb(a,b,c,d,1,"keypress");return 0},fa:function(a,b,c,d){eb(a,b,c,d,3,"keyup");return 0},D:function(a,b,c,d){gb(a,b,c,d,5,"mousedown");return 0},ja:function(a,b,c,d){gb(a,b,c,d,33,"mouseenter");return 0},ia:function(a,b,c,d){gb(a,b,c,d,34,"mouseleave");return 0},
ka:function(a,b,c,d){gb(a,b,c,d,8,"mousemove");return 0},oa:function(a,b,c,d){gb(a,b,c,d,6,"mouseup");return 0},mb:function(a,b,c,d){hb(a,b,c,d);return 0},$:function(a,b,c,d){ib(a,b,c,d,25,"touchcancel");return 0},aa:function(a,b,c,d){ib(a,b,c,d,23,"touchend");return 0},ca:function(a,b,c,d){ib(a,b,c,d,24,"touchmove");return 0},da:function(a,b,c,d){ib(a,b,c,d,22,"touchstart");return 0},_:function(a,b,c,d){jb(a,b,c,d,31,"webglcontextlost");return 0},Z:function(a,b,c,d){jb(a,b,c,d,32,"webglcontextrestored");
return 0},ha:function(a,b,c,d){a=N(a);return"undefined"!==typeof a.onwheel?(kb(a,b,c,d,"wheel"),0):"undefined"!==typeof a.onmousewheel?(kb(a,b,c,d,"mousewheel"),0):-1},K:function(a,b){var c={};b>>=2;c.alpha=!!F[b];c.depth=!!F[b+1];c.stencil=!!F[b+2];c.antialias=!!F[b+3];c.premultipliedAlpha=!!F[b+4];c.preserveDrawingBuffer=!!F[b+5];c.powerPreference=Db[F[b+6]];c.failIfMajorPerformanceCaveat=!!F[b+7];c.hc=F[b+8];c.vc=F[b+9];c.fc=F[b+10];c.mc=F[b+11];c.wc=F[b+12];c.xc=F[b+13];a=N(a);if(!a||c.mc)c=0;
else if(a=1<c.hc?a.getContext("webgl2",c):a.getContext("webgl",c)){b=W(wb);var d={uc:b,attributes:c,version:c.hc,ac:a};a.canvas&&(a.canvas.qc=d);wb[b]=d;("undefined"===typeof c.fc||c.fc)&&Ab(d);c=b}else c=0;return c},za:function(a,b){a=wb[a];b=E(b);0==b.indexOf("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b?nb(Y):"OES_vertex_array_object"==b?ob(Y):"WEBGL_draw_buffers"==b&&pb(Y);return!!a.ac.getExtension(b)},Na:function(a){a>>=2;for(var b=0;14>b;++b)F[a+b]=0;F[a]=F[a+1]=F[a+3]=F[a+4]=F[a+8]=F[a+
10]=1},Fa:function(a){U=wb[a];e.sc=Y=U&&U.ac;return!a||Y?0:-5},m:function(a){Y.activeTexture(a)},H:function(a,b){Y.attachShader(Q[a],T[b])},e:function(a,b){35051==a?Y.ec=b:35052==a&&(Y.Wb=b);Y.bindBuffer(a,sb[b])},c:function(a,b){Y.bindFramebuffer(a,tb[b])},L:function(a,b){Y.bindRenderbuffer(a,ub[b])},b:function(a,b){Y.bindTexture(a,R[b])},X:function(a){Y.bindVertexArray(vb[a])},T:function(a,b,c,d){Y.blendColor(a,b,c,d)},U:function(a,b){Y.blendEquationSeparate(a,b)},V:function(a,b,c,d){Y.blendFuncSeparate(a,
b,c,d)},u:function(a,b,c,d,f,k,g,m,n,p){Y.blitFramebuffer(a,b,c,d,f,k,g,m,n,p)},O:function(a,b,c,d){2<=U.version?c?Y.bufferData(a,D,d,c,b):Y.bufferData(a,b,d):Y.bufferData(a,c?D.subarray(c,c+b):b,d)},N:function(a,b,c,d){2<=U.version?Y.bufferSubData(a,b,D,d,c):Y.bufferSubData(a,b,D.subarray(d,d+c))},n:function(a){return Y.checkFramebufferStatus(a)},B:function(a){Y.clear(a)},lb:function(a,b,c,d){Y.clearBufferfi(a,b,c,d)},p:function(a,b,c){Y.clearBufferfv(a,b,G,c>>2)},kb:function(a,b,c){Y.clearBufferuiv(a,
b,ya,c>>2)},sa:function(a,b,c,d){Y.clearColor(a,b,c,d)},ra:function(a){Y.clearDepth(a)},qa:function(a){Y.clearStencil(a)},x:function(a,b,c,d){Y.colorMask(!!a,!!b,!!c,!!d)},Aa:function(a){Y.compileShader(T[a])},Ka:function(a,b,c,d,f,k,g,m){2<=U.version?Y.Wb?Y.compressedTexImage2D(a,b,c,d,f,k,g,m):Y.compressedTexImage2D(a,b,c,d,f,k,D,m,g):Y.compressedTexImage2D(a,b,c,d,f,k,m?D.subarray(m,m+g):null)},Ia:function(a,b,c,d,f,k,g,m,n){Y.Wb?Y.compressedTexImage3D(a,b,c,d,f,k,g,m,n):Y.compressedTexImage3D(a,
b,c,d,f,k,g,D,n,m)},Ga:function(){var a=W(Q),b=Y.createProgram();b.name=a;Q[a]=b;return a},Ca:function(a){var b=W(T);T[b]=Y.createShader(a);return b},Q:function(a){Y.cullFace(a)},wa:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],f=sb[d];f&&(Y.deleteBuffer(f),f.name=0,sb[d]=null,d==Bb&&(Bb=0),d==Cb&&(Cb=0),d==Y.ec&&(Y.ec=0),d==Y.Wb&&(Y.Wb=0))}},k:function(a,b){for(var c=0;c<a;++c){var d=F[b+4*c>>2],f=tb[d];f&&(Y.deleteFramebuffer(f),f.name=0,tb[d]=null)}},F:function(a){if(a){var b=Q[a];b?(Y.deleteProgram(b),
b.name=0,Q[a]=null,xb[a]=null):V(1281)}},C:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],f=ub[d];f&&(Y.deleteRenderbuffer(f),f.name=0,ub[d]=null)}},w:function(a){if(a){var b=T[a];b?(Y.deleteShader(b),T[a]=null):V(1281)}},va:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],f=R[d];f&&(Y.deleteTexture(f),f.name=0,R[d]=null)}},Sa:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2];Y.deleteVertexArray(vb[d]);vb[d]=null}},A:function(a){Y.depthFunc(a)},z:function(a){Y.depthMask(!!a)},d:function(a){Y.disable(a)},
W:function(a){Y.disableVertexAttribArray(a)},$a:function(a,b,c){Y.drawArrays(a,b,c)},j:function(a,b){for(var c=Eb[a],d=0;d<a;d++)c[d]=F[b+4*d>>2];Y.drawBuffers(c)},ab:function(a,b,c,d){Y.drawElements(a,b,c,d)},i:function(a){Y.enable(a)},gb:function(a){Y.enableVertexAttribArray(a)},l:function(a,b,c,d){Y.framebufferRenderbuffer(a,b,c,ub[d])},a:function(a,b,c,d,f){Y.framebufferTexture2D(a,b,c,R[d],f)},g:function(a,b,c,d,f){Y.framebufferTextureLayer(a,b,R[c],d,f)},R:function(a){Y.frontFace(a)},P:function(a,
b){Fb(a,b,"createBuffer",sb)},o:function(a,b){Fb(a,b,"createFramebuffer",tb)},M:function(a,b){Fb(a,b,"createRenderbuffer",ub)},La:function(a,b){Fb(a,b,"createTexture",R)},Ra:function(a,b){Fb(a,b,"createVertexArray",vb)},xa:function(a,b){return Y.getAttribLocation(Q[a],E(b))},f:function(a,b){Gb(a,b)},Da:function(a,b,c,d){a=Y.getProgramInfoLog(Q[a]);null===a&&(a="(unknown error)");b=0<b&&d?C(a,D,d,b):0;c&&(F[c>>2]=b)},G:function(a,b,c){if(c)if(a>=qb)V(1281);else{var d=xb[a];if(d)if(35716==b)a=Y.getProgramInfoLog(Q[a]),
null===a&&(a="(unknown error)"),F[c>>2]=a.length+1;else if(35719==b)F[c>>2]=d.cc;else if(35722==b){if(-1==d.Yb){a=Q[a];var f=Y.getProgramParameter(a,35721);for(b=d.Yb=0;b<f;++b)d.Yb=Math.max(d.Yb,Y.getActiveAttrib(a,b).name.length+1)}F[c>>2]=d.Yb}else if(35381==b){if(-1==d.Zb)for(a=Q[a],f=Y.getProgramParameter(a,35382),b=d.Zb=0;b<f;++b)d.Zb=Math.max(d.Zb,Y.getActiveUniformBlockName(a,b).length+1);F[c>>2]=d.Zb}else F[c>>2]=Y.getProgramParameter(Q[a],b);else V(1282)}else V(1281)},ya:function(a,b,c,
d){a=Y.getShaderInfoLog(T[a]);null===a&&(a="(unknown error)");b=0<b&&d?C(a,D,d,b):0;c&&(F[c>>2]=b)},E:function(a,b,c){c?35716==b?(a=Y.getShaderInfoLog(T[a]),null===a&&(a="(unknown error)"),F[c>>2]=a.length+1):35720==b?(a=Y.getShaderSource(T[a]),F[c>>2]=null===a||0==a.length?0:a.length+1):F[c>>2]=Y.getShaderParameter(T[a],b):V(1281)},Ua:function(a){if(yb[a])return yb[a];switch(a){case 7939:var b=Y.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Hb(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=
Y.getParameter(a))||V(1280);b=Hb(b);break;case 7938:b=Y.getParameter(7938);b=2<=U.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Hb(b);break;case 35724:b=Y.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Hb(b);break;default:return V(1280),0}return yb[a]=b},Ta:function(a,b){if(2>U.version)return V(1282),0;var c=zb[a];if(c)return 0>b||b>=c.length?(V(1281),0):c[b];switch(a){case 7939:return c=
Y.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return Hb(d)}),c=zb[a]=c,0>b||b>=c.length?(V(1281),0):c[b];default:return V(1280),0}},q:function(a,b){b=E(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,d)}return(a=xb[a]&&xb[a].kc[b])&&0<=c&&c<a[0]?a[1]+c:-1},Ea:function(a){Y.linkProgram(Q[a]);var b=Q[a];a=xb[a]={kc:{},cc:0,Yb:-1,Zb:-1};for(var c=a.kc,d=Y.getProgramParameter(b,35718),f=0;f<
d;++f){var k=Y.getActiveUniform(b,f),g=k.name;a.cc=Math.max(a.cc,g.length+1);"]"==g.slice(-1)&&(g=g.slice(0,g.lastIndexOf("[")));var m=Y.getUniformLocation(b,g);if(m){var n=W(S);c[g]=[k.size,n];S[n]=m;for(var p=1;p<k.size;++p)m=Y.getUniformLocation(b,g+"["+p+"]"),n=W(S),S[n]=m}}},S:function(a,b){Y.polygonOffset(a,b)},v:function(a){Y.readBuffer(a)},Ma:function(a,b,c,d){Y.renderbufferStorage(a,b,c,d)},J:function(a,b,c,d,f){Y.renderbufferStorageMultisample(a,b,c,d,f)},ta:function(a,b,c,d){Y.scissor(a,
b,c,d)},Ba:function(a,b,c,d){for(var f="",k=0;k<b;++k){var g=d?F[d+4*k>>2]:-1;f+=E(F[c+4*k>>2],0>g?void 0:g)}Y.shaderSource(T[a],f)},Pa:function(a,b,c){Y.stencilFunc(a,b,c)},na:function(a,b,c,d){Y.stencilFuncSeparate(a,b,c,d)},y:function(a){Y.stencilMask(a)},Oa:function(a,b,c){Y.stencilOp(a,b,c)},ma:function(a,b,c,d){Y.stencilOpSeparate(a,b,c,d)},Ja:function(a,b,c,d,f,k,g,m,n){if(2<=U.version)if(Y.Wb)Y.texImage2D(a,b,c,d,f,k,g,m,n);else if(n){var p=Ib(m);Y.texImage2D(a,b,c,d,f,k,g,m,p,n>>31-Math.clz32(p.BYTES_PER_ELEMENT))}else Y.texImage2D(a,
b,c,d,f,k,g,m,null);else Y.texImage2D(a,b,c,d,f,k,g,m,n?Jb(m,g,d,f,n):null)},Ha:function(a,b,c,d,f,k,g,m,n,p){if(Y.Wb)Y.texImage3D(a,b,c,d,f,k,g,m,n,p);else if(p){var q=Ib(n);Y.texImage3D(a,b,c,d,f,k,g,m,n,q,p>>31-Math.clz32(q.BYTES_PER_ELEMENT))}else Y.texImage3D(a,b,c,d,f,k,g,m,n,null)},I:function(a,b,c){Y.texParameterf(a,b,c)},h:function(a,b,c){Y.texParameteri(a,b,c)},fb:function(a,b,c){if(2<=U.version)Y.uniform1fv(S[a],G,c>>2,b);else{if(256>=b)for(var d=X[b-1],f=0;f<b;++f)d[f]=G[c+4*f>>2];else d=
G.subarray(c>>2,c+4*b>>2);Y.uniform1fv(S[a],d)}},la:function(a,b){Y.uniform1i(S[a],b)},eb:function(a,b,c){if(2<=U.version)Y.uniform2fv(S[a],G,c>>2,2*b);else{if(256>=2*b)for(var d=X[2*b-1],f=0;f<2*b;f+=2)d[f]=G[c+4*f>>2],d[f+1]=G[c+(4*f+4)>>2];else d=G.subarray(c>>2,c+8*b>>2);Y.uniform2fv(S[a],d)}},db:function(a,b,c){if(2<=U.version)Y.uniform3fv(S[a],G,c>>2,3*b);else{if(256>=3*b)for(var d=X[3*b-1],f=0;f<3*b;f+=3)d[f]=G[c+4*f>>2],d[f+1]=G[c+(4*f+4)>>2],d[f+2]=G[c+(4*f+8)>>2];else d=G.subarray(c>>2,
c+12*b>>2);Y.uniform3fv(S[a],d)}},cb:function(a,b,c){if(2<=U.version)Y.uniform4fv(S[a],G,c>>2,4*b);else{if(256>=4*b){var d=X[4*b-1],f=G;c>>=2;for(var k=0;k<4*b;k+=4){var g=c+k;d[k]=f[g];d[k+1]=f[g+1];d[k+2]=f[g+2];d[k+3]=f[g+3]}}else d=G.subarray(c>>2,c+16*b>>2);Y.uniform4fv(S[a],d)}},bb:function(a,b,c,d){if(2<=U.version)Y.uniformMatrix4fv(S[a],!!c,G,d>>2,16*b);else{if(256>=16*b){var f=X[16*b-1],k=G;d>>=2;for(var g=0;g<16*b;g+=16){var m=d+g;f[g]=k[m];f[g+1]=k[m+1];f[g+2]=k[m+2];f[g+3]=k[m+3];f[g+
4]=k[m+4];f[g+5]=k[m+5];f[g+6]=k[m+6];f[g+7]=k[m+7];f[g+8]=k[m+8];f[g+9]=k[m+9];f[g+10]=k[m+10];f[g+11]=k[m+11];f[g+12]=k[m+12];f[g+13]=k[m+13];f[g+14]=k[m+14];f[g+15]=k[m+15]}}else f=G.subarray(d>>2,d+64*b>>2);Y.uniformMatrix4fv(S[a],!!c,f)}},jb:function(a){Y.useProgram(Q[a])},hb:function(a,b){Y.vertexAttribDivisor(a,b)},ib:function(a,b,c,d,f,k){Y.vertexAttribPointer(a,b,c,!!d,f,k)},ua:function(a,b,c,d){Y.viewport(a,b,c,d)},memory:A,Ya:function(){e.ic=function(a){0!=Nb()&&(a.preventDefault(),a.returnValue=
" ")};window.addEventListener("beforeunload",e.ic)},Xa:function(){e.jc=function(a){a=a.clipboardData.getData("text");oa([a])};window.addEventListener("paste",e.jc)},t:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Ob()});document.body.append(a)},s:function(){document.getElementById("_sokol_app_input_element").focus()},r:function(){document.getElementById("_sokol_app_input_element").blur()},
Wa:function(){window.removeEventListener("beforeunload",e.ic)},Va:function(){window.removeEventListener("paste",e.jc)},table:la},Qb=function(){function a(f){e.asm=f.exports;I--;e.monitorRunDependencies&&e.monitorRunDependencies(I);0==I&&(null!==Ia&&(clearInterval(Ia),Ia=null),Ja&&(f=Ja,Ja=null,f()))}function b(f){a(f.instance)}function c(f){return Na().then(function(k){return WebAssembly.instantiate(k,d)}).then(f,function(k){x("failed to asynchronously prepare wasm: "+k);ja(k)})}var d={a:Pb};I++;
e.monitorRunDependencies&&e.monitorRunDependencies(I);if(e.instantiateWasm)try{return e.instantiateWasm(d,a)}catch(f){return x("Module.instantiateWasm callback failed with error: "+f),!1}(function(){if(z||"function"!==typeof WebAssembly.instantiateStreaming||Ka()||"function"!==typeof fetch)return c(b);fetch(J,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,d).then(b,function(k){x("wasm streaming compile failed: "+k);x("falling back to ArrayBuffer instantiation");
c(b)})})})();return{}}();e.asm=Qb;var Oa=e.___wasm_call_ctors=function(){return(Oa=e.___wasm_call_ctors=e.asm.nb).apply(null,arguments)},Ob=e.__sapp_emsc_notify_keyboard_hidden=function(){return(Ob=e.__sapp_emsc_notify_keyboard_hidden=e.asm.ob).apply(null,arguments)};e.___em_js__sapp_js_create_textfield=function(){return(e.___em_js__sapp_js_create_textfield=e.asm.pb).apply(null,arguments)};
e.___em_js__sapp_js_focus_textfield=function(){return(e.___em_js__sapp_js_focus_textfield=e.asm.qb).apply(null,arguments)};e.___em_js__sapp_js_unfocus_textfield=function(){return(e.___em_js__sapp_js_unfocus_textfield=e.asm.rb).apply(null,arguments)};e.__sapp_emsc_onpaste=function(){return(e.__sapp_emsc_onpaste=e.asm.sb).apply(null,arguments)};var Nb=e.__sapp_html5_get_ask_leave_site=function(){return(Nb=e.__sapp_html5_get_ask_leave_site=e.asm.tb).apply(null,arguments)};
e.___em_js__sapp_add_js_hook_beforeunload=function(){return(e.___em_js__sapp_add_js_hook_beforeunload=e.asm.ub).apply(null,arguments)};e.___em_js__sapp_remove_js_hook_beforeunload=function(){return(e.___em_js__sapp_remove_js_hook_beforeunload=e.asm.vb).apply(null,arguments)};e.___em_js__sapp_add_js_hook_clipboard=function(){return(e.___em_js__sapp_add_js_hook_clipboard=e.asm.wb).apply(null,arguments)};
e.___em_js__sapp_remove_js_hook_clipboard=function(){return(e.___em_js__sapp_remove_js_hook_clipboard=e.asm.xb).apply(null,arguments)};e.___em_js__sapp_js_write_clipboard=function(){return(e.___em_js__sapp_js_write_clipboard=e.asm.yb).apply(null,arguments)};e._main=function(){return(e._main=e.asm.zb).apply(null,arguments)};e.___em_js__stm_js_perfnow=function(){return(e.___em_js__stm_js_perfnow=e.asm.Ab).apply(null,arguments)};
e.__saudio_emsc_pull=function(){return(e.__saudio_emsc_pull=e.asm.Bb).apply(null,arguments)};e.___em_js__saudio_js_init=function(){return(e.___em_js__saudio_js_init=e.asm.Cb).apply(null,arguments)};e.___em_js__saudio_js_sample_rate=function(){return(e.___em_js__saudio_js_sample_rate=e.asm.Db).apply(null,arguments)};e.___em_js__saudio_js_buffer_frames=function(){return(e.___em_js__saudio_js_buffer_frames=e.asm.Eb).apply(null,arguments)};
e.___em_js__sfetch_js_send_head_request=function(){return(e.___em_js__sfetch_js_send_head_request=e.asm.Fb).apply(null,arguments)};e.___em_js__sfetch_js_send_get_request=function(){return(e.___em_js__sfetch_js_send_get_request=e.asm.Gb).apply(null,arguments)};e.__sfetch_emsc_head_response=function(){return(e.__sfetch_emsc_head_response=e.asm.Hb).apply(null,arguments)};e.__sfetch_emsc_get_response=function(){return(e.__sfetch_emsc_get_response=e.asm.Ib).apply(null,arguments)};
e.__sfetch_emsc_failed_http_status=function(){return(e.__sfetch_emsc_failed_http_status=e.asm.Jb).apply(null,arguments)};e.__sfetch_emsc_failed_buffer_too_small=function(){return(e.__sfetch_emsc_failed_buffer_too_small=e.asm.Kb).apply(null,arguments)};
var O=e._malloc=function(){return(O=e._malloc=e.asm.Lb).apply(null,arguments)},qa=e.stackSave=function(){return(qa=e.stackSave=e.asm.Mb).apply(null,arguments)},B=e.stackAlloc=function(){return(B=e.stackAlloc=e.asm.Nb).apply(null,arguments)},ra=e.stackRestore=function(){return(ra=e.stackRestore=e.asm.Ob).apply(null,arguments)};e.dynCall_vi=function(){return(e.dynCall_vi=e.asm.Pb).apply(null,arguments)};e.dynCall_v=function(){return(e.dynCall_v=e.asm.Qb).apply(null,arguments)};
var P=e.dynCall_iiii=function(){return(P=e.dynCall_iiii=e.asm.Rb).apply(null,arguments)},Mb=e.dynCall_idi=function(){return(Mb=e.dynCall_idi=e.asm.Sb).apply(null,arguments)};e.asm=Qb;var Rb;function ia(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}Ja=function Sb(){Rb||Tb();Rb||(Ja=Sb)};
function Tb(a){function b(){if(!Rb&&(Rb=!0,e.calledRun=!0,!ma)){Ba(Da);Ba(Ea);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(Ub){var c=a,d=e._main;c=c||[];var f=c.length+1,k=B(4*(f+1));F[k>>2]=ua(aa);for(var g=1;g<f;g++)F[(k>>2)+g]=ua(c[g-1]);F[(k>>2)+f]=0;try{var m=d(f,k);if(!noExitRuntime||0!==m){if(!noExitRuntime&&(ma=!0,e.onExit))e.onExit(m);t(m,new ia(m))}}catch(n){n instanceof ia||("unwind"==n?noExitRuntime=!0:((c=n)&&"object"===typeof n&&n.stack&&(c=[n,n.stack]),x("exception thrown: "+
c),t(1,n)))}finally{}}if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;)c=e.postRun.shift(),Ga.unshift(c);Ba(Ga)}}a=a||r;if(!(0<I)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Ha();Ba(Ca);0<I||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);b()},1)):b())}}e.run=Tb;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();
var Ub=!0;e.noInitialRun&&(Ub=!1);noExitRuntime=!0;Tb();
