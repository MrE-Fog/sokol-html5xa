
var d;d||(d=typeof Module !== 'undefined' ? Module : {});var g={},l;for(l in d)d.hasOwnProperty(l)&&(g[l]=d[l]);var r=[],aa="./this.program";function u(a,b){throw b;}var v=!1,w=!1,ba=!1,ca=!1;v="object"===typeof window;w="function"===typeof importScripts;ba="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;ca=!v&&!ba&&!w;var x="",y,z,da,ea;
if(ba)x=w?require("path").dirname(x)+"/":__dirname+"/",y=function(a,b){da||(da=require("fs"));ea||(ea=require("path"));a=ea.normalize(a);return da.readFileSync(a,b?null:"utf8")},z=function(a){a=y(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/")),r=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=d),process.on("uncaughtException",function(a){if(!(a instanceof fa))throw a;}),process.on("unhandledRejection",
A),u=function(a){process.exit(a)},d.inspect=function(){return"[Emscripten Module object]"};else if(ca)"undefined"!=typeof read&&(y=function(a){return read(a)}),z=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?r=scriptArgs:"undefined"!=typeof arguments&&(r=arguments),"function"===typeof quit&&(u=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===typeof console&&
(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(v||w)w?x=self.location.href:document.currentScript&&(x=document.currentScript.src),x=0!==x.indexOf("blob:")?x.substr(0,x.lastIndexOf("/")+1):"",y=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},w&&(z=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});
var ha=d.print||console.log.bind(console),B=d.printErr||console.warn.bind(console);for(l in g)g.hasOwnProperty(l)&&(d[l]=g[l]);g=null;d.arguments&&(r=d.arguments);d.thisProgram&&(aa=d.thisProgram);d.quit&&(u=d.quit);var C;d.wasmBinary&&(C=d.wasmBinary);var noExitRuntime;d.noExitRuntime&&(noExitRuntime=d.noExitRuntime);"object"!==typeof WebAssembly&&A("no native wasm support detected");var D,ia=new WebAssembly.Table({initial:18,maximum:18,element:"anyfunc"}),ja=!1;
function assert(a,b){a||A("Assertion failed: "+b)}function ka(){var a=d.__sapp_emsc_onpaste;assert(a,"Cannot call unknown function _sapp_emsc_onpaste, make sure it is exported");return a}
function la(a){var b=["string"],c={string:function(m){var n=0;if(null!==m&&void 0!==m&&0!==m){var p=(m.length<<2)+1;n=E(p);F(m,G,n,p)}return n},array:function(m){var n=E(m.length);ma.set(m,n);return n}},e=ka(),f=[],h=0;if(a)for(var k=0;k<a.length;k++){var q=c[b[k]];q?(0===h&&(h=na()),f[k]=q(a[k])):f[k]=a[k]}e.apply(null,f);0!==h&&oa(h)}var pa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function qa(a){if(a){for(var b=G,c=a+NaN,e=a;b[e]&&!(e>=c);)++e;if(16<e-a&&b.subarray&&pa)a=pa.decode(b.subarray(a,e));else{for(c="";a<e;){var f=b[a++];if(f&128){var h=b[a++]&63;if(192==(f&224))c+=String.fromCharCode((f&31)<<6|h);else{var k=b[a++]&63;f=224==(f&240)?(f&15)<<12|h<<6|k:(f&7)<<18|h<<12|k<<6|b[a++]&63;65536>f?c+=String.fromCharCode(f):(f-=65536,c+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else c+=String.fromCharCode(f)}a=c}}else a="";return a}
function F(a,b,c,e){if(0<e){e=c+e-1;for(var f=0;f<a.length;++f){var h=a.charCodeAt(f);if(55296<=h&&57343>=h){var k=a.charCodeAt(++f);h=65536+((h&1023)<<10)|k&1023}if(127>=h){if(c>=e)break;b[c++]=h}else{if(2047>=h){if(c+1>=e)break;b[c++]=192|h>>6}else{if(65535>=h){if(c+2>=e)break;b[c++]=224|h>>12}else{if(c+3>=e)break;b[c++]=240|h>>18;b[c++]=128|h>>12&63}b[c++]=128|h>>6&63}b[c++]=128|h&63}}b[c]=0}}
function ra(a){for(var b=0,c=0;c<a.length;++c){var e=a.charCodeAt(c);55296<=e&&57343>=e&&(e=65536+((e&1023)<<10)|a.charCodeAt(++c)&1023);127>=e?++b:b=2047>=e?b+2:65535>=e?b+3:b+4}return b}function sa(a){var b=ra(a)+1,c=E(b);F(a,ma,c,b);return c}var H,ma,G,ta,I,ua,J;
function va(a){H=a;d.HEAP8=ma=new Int8Array(a);d.HEAP16=ta=new Int16Array(a);d.HEAP32=I=new Int32Array(a);d.HEAPU8=G=new Uint8Array(a);d.HEAPU16=new Uint16Array(a);d.HEAPU32=new Uint32Array(a);d.HEAPF32=ua=new Float32Array(a);d.HEAPF64=J=new Float64Array(a)}var wa=d.INITIAL_MEMORY||33554432;d.wasmMemory?D=d.wasmMemory:D=new WebAssembly.Memory({initial:wa/65536,maximum:32768});D&&(H=D.buffer);wa=H.byteLength;va(H);I[5212]=5263888;
function K(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(d);else{var c=b.tb;"number"===typeof c?void 0===b.jb?d.dynCall_v(c):d.dynCall_vi(c,b.jb):c(void 0===b.jb?null:b.jb)}}}var xa=[],ya=[],za=[],Aa=[],Ba=[];function Ca(){var a=d.preRun.shift();xa.unshift(a)}var L=0,Da=null,M=null;d.preloadedImages={};d.preloadedAudios={};function A(a){if(d.onAbort)d.onAbort(a);ha(a);B(a);ja=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}
function Ea(a){var b=N;return String.prototype.startsWith?b.startsWith(a):0===b.indexOf(a)}function Fa(){return Ea("data:application/octet-stream;base64,")}var N="saudio-sapp.wasm";if(!Fa()){var Ga=N;N=d.locateFile?d.locateFile(Ga,x):x+Ga}function Ha(){try{if(C)return new Uint8Array(C);if(z)return z(N);throw"both async and sync fetching of the wasm failed";}catch(a){A(a)}}
function Ia(){return C||!v&&!w||"function"!==typeof fetch||Ea("file://")?new Promise(function(a){a(Ha())}):fetch(N,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+N+"'";return a.arrayBuffer()}).catch(function(){return Ha()})}ya.push({tb:function(){Ja()}});function Ka(){for(var a=O.length-1;0<=a;--a)La(a);O=[];P=[]}var P=[];function Ma(){if(Na.nb&&Oa.hb)for(var a=0;a<P.length;++a){var b=P[a];P.splice(a,1);--a;b.Gb.apply(null,b.yb)}}var O=[];
function La(a){var b=O[a];b.target.removeEventListener(b.bb,b.rb,b.eb);O.splice(a,1)}function Q(a){function b(e){++Na.nb;Oa=a;Ma();a.gb(e);Ma();--Na.nb}if(a.fb)a.rb=b,a.target.addEventListener(a.bb,b,a.eb),O.push(a),Pa||(Aa.push(Ka),Pa=!0);else for(var c=0;c<O.length;++c)O[c].target==a.target&&O[c].bb==a.bb&&La(c--)}var Na={},Pa,Oa,Qa,Ra,Sa,Ta,Ua,Va=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];
function R(a){a=2<a?qa(a):a;return Va[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}function Wa(a){return 0>Va.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}
function Xa(a,b,c,e,f,h){Qa||(Qa=S(164));a={target:R(a),hb:!0,bb:h,fb:e,gb:function(k){var q=Qa,m=q>>2;I[m]=k.location;I[m+1]=k.ctrlKey;I[m+2]=k.shiftKey;I[m+3]=k.altKey;I[m+4]=k.metaKey;I[m+5]=k.repeat;I[m+6]=k.charCode;I[m+7]=k.keyCode;I[m+8]=k.which;F(k.key||"",G,q+36,32);F(k.code||"",G,q+68,32);F(k.char||"",G,q+100,32);F(k.locale||"",G,q+132,32);T(e,f,q,b)&&k.preventDefault()},eb:c};Q(a)}
function Ya(a,b,c){a>>=2;I[a]=b.screenX;I[a+1]=b.screenY;I[a+2]=b.clientX;I[a+3]=b.clientY;I[a+4]=b.ctrlKey;I[a+5]=b.shiftKey;I[a+6]=b.altKey;I[a+7]=b.metaKey;ta[2*a+16]=b.button;ta[2*a+17]=b.buttons;I[a+9]=b.movementX;I[a+10]=b.movementY;c=Wa(c);I[a+11]=b.clientX-c.left;I[a+12]=b.clientY-c.top}function U(a,b,c,e,f,h){Ra||(Ra=S(64));a=R(a);Q({target:a,hb:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,bb:h,fb:e,gb:function(k){k=k||event;Ya(Ra,k,a);T(e,f,Ra,b)&&k.preventDefault()},eb:c})}
function ab(a,b,c,e){Sa||(Sa=S(36));a=R(a);Q({target:a,bb:"resize",fb:e,gb:function(f){f=f||event;if(f.target==a){var h=Sa,k=document.body;I[h>>2]=f.detail;I[h+4>>2]=k.clientWidth;I[h+8>>2]=k.clientHeight;I[h+12>>2]=innerWidth;I[h+16>>2]=innerHeight;I[h+20>>2]=outerWidth;I[h+24>>2]=outerHeight;I[h+28>>2]=pageXOffset;I[h+32>>2]=pageYOffset;T(e,10,h,b)&&f.preventDefault()}},eb:c})}
function bb(a,b,c,e,f,h){Ta||(Ta=S(1684));a=R(a);Q({target:a,hb:"touchstart"==h||"touchend"==h,bb:h,fb:e,gb:function(k){for(var q={},m=k.touches,n=0;n<m.length;++n){var p=m[n];q[p.identifier]=p}m=k.changedTouches;for(n=0;n<m.length;++n)p=m[n],p.vb=1,q[p.identifier]=p;m=k.targetTouches;for(n=0;n<m.length;++n)q[m[n].identifier].wb=1;m=Ta;p=m>>2;I[p+1]=k.ctrlKey;I[p+2]=k.shiftKey;I[p+3]=k.altKey;I[p+4]=k.metaKey;p+=5;var Za=Wa(a),$a=0;for(n in q){var t=q[n];I[p]=t.identifier;I[p+1]=t.screenX;I[p+2]=
t.screenY;I[p+3]=t.clientX;I[p+4]=t.clientY;I[p+5]=t.pageX;I[p+6]=t.pageY;I[p+7]=t.vb;I[p+8]=t.wb;I[p+9]=t.clientX-Za.left;I[p+10]=t.clientY-Za.top;p+=13;if(31<++$a)break}I[m>>2]=$a;T(e,f,m,b)&&k.preventDefault()},eb:c})}function cb(a,b,c,e,f,h){a={target:R(a),bb:h,fb:e,gb:function(k){k=k||event;T(e,f,0,b)&&k.preventDefault()},eb:c};Q(a)}
function db(a,b,c,e){Ua||(Ua=S(96));Q({target:a,hb:!0,bb:"wheel",fb:e,gb:function(f){f=f||event;var h=Ua;Ya(h,f,a);J[h+64>>3]=f.deltaX;J[h+72>>3]=f.deltaY;J[h+80>>3]=f.deltaZ;I[h+88>>2]=f.deltaMode;T(e,9,h,b)&&f.preventDefault()},eb:c})}
function eb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,e){b.vertexAttribDivisorANGLE(c,e)},a.drawArraysInstanced=function(c,e,f,h){b.drawArraysInstancedANGLE(c,e,f,h)},a.drawElementsInstanced=function(c,e,f,h,k){b.drawElementsInstancedANGLE(c,e,f,h,k)})}
function fb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function gb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,e){b.drawBuffersWEBGL(c,e)})}
function hb(a){a.Ab=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}var ib=1,jb=[],kb=[],lb=[],mb=[],nb=[],V=[],ob=[],pb={},qb={};function W(a){rb||(rb=a)}function sb(a){for(var b=ib++,c=a.length;c<b;c++)a[c]=null;return b}
function tb(a){a||(a=X);if(!a.ub){a.ub=!0;var b=a.ib;eb(b);fb(b);gb(b);hb(b);b.Bb=b.getExtension("EXT_disjoint_timer_query");var c="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod EXT_texture_norm16 WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2 WEBKIT_WEBGL_compressed_texture_pvrtc".split(" ");(b.getSupportedExtensions()||
[]).forEach(function(e){-1!=c.indexOf(e)&&b.getExtension(e)})}}var rb,X,ub=["default","low-power","high-performance"];
function vb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var e=Y.getParameter(34467);c=e?e.length:0;break;case 33309:if(2>X.version){W(1282);return}c=2*(Y.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>X.version){W(1280);return}c=33307==a?3:0}if(void 0===c)switch(e=Y.getParameter(a),typeof e){case "number":c=e;break;case "boolean":c=e?1:0;break;case "string":W(1280);return;case "object":if(null===e)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:W(1280);return}else{if(e instanceof Float32Array||e instanceof Uint32Array||e instanceof Int32Array||e instanceof Array){for(a=0;a<e.length;++a)I[b+4*a>>2]=e[a];return}try{c=e.name|0}catch(f){W(1280);B("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+f+")");return}}break;default:W(1280);B("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+e+" of type "+typeof e+"!");return}I[b>>2]=c}else W(1281)}
function Z(a){var b=ra(a)+1,c=S(b);F(a,G,c,b);return c}
var Y,Ab={A:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},L:function(a,b,c){a=R(a);if(!a)return-4;a=Wa(a);J[b>>3]=a.width;J[c>>3]=a.height;return 0},N:function(a,b,c){G.copyWithin(a,b,b+c)},la:function(a,b){function c(e){wb(a,e,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},O:function(a){a>>>=0;var b=G.length;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var e=b*(1+.2/c);e=Math.min(e,a+100663296);e=Math.max(16777216,a,e);0<e%65536&&(e+=65536-e%65536);a:{try{D.grow(Math.min(2147483648,
e)-H.byteLength+65535>>>16);va(D.buffer);var f=1;break a}catch(h){}f=void 0}if(f)return!0}return!1},v:function(a,b,c){a=R(a);if(!a)return-4;a.width=b;a.height=c;return 0},F:function(a,b,c,e){Xa(a,b,c,e,2,"keydown");return 0},D:function(a,b,c,e){Xa(a,b,c,e,1,"keypress");return 0},E:function(a,b,c,e){Xa(a,b,c,e,3,"keyup");return 0},m:function(a,b,c,e){U(a,b,c,e,5,"mousedown");return 0},I:function(a,b,c,e){U(a,b,c,e,33,"mouseenter");return 0},H:function(a,b,c,e){U(a,b,c,e,34,"mouseleave");return 0},
J:function(a,b,c,e){U(a,b,c,e,8,"mousemove");return 0},K:function(a,b,c,e){U(a,b,c,e,6,"mouseup");return 0},va:function(a,b,c,e){ab(a,b,c,e);return 0},y:function(a,b,c,e){bb(a,b,c,e,25,"touchcancel");return 0},z:function(a,b,c,e){bb(a,b,c,e,23,"touchend");return 0},B:function(a,b,c,e){bb(a,b,c,e,24,"touchmove");return 0},C:function(a,b,c,e){bb(a,b,c,e,22,"touchstart");return 0},x:function(a,b,c,e){cb(a,b,c,e,31,"webglcontextlost");return 0},w:function(a,b,c,e){cb(a,b,c,e,32,"webglcontextrestored");
return 0},G:function(a,b,c,e){a=R(a);return"undefined"!==typeof a.onwheel?(db(a,b,c,e),0):-1},o:function(a,b){var c={};b>>=2;c.alpha=!!I[b];c.depth=!!I[b+1];c.stencil=!!I[b+2];c.antialias=!!I[b+3];c.premultipliedAlpha=!!I[b+4];c.preserveDrawingBuffer=!!I[b+5];c.powerPreference=ub[I[b+6]];c.failIfMajorPerformanceCaveat=!!I[b+7];c.ob=I[b+8];c.Db=I[b+9];c.mb=I[b+10];c.sb=I[b+11];c.Eb=I[b+12];c.Fb=I[b+13];if(a=R(a))if(c.sb)c=-1;else if(a=1<c.ob?a.getContext("webgl2",c):a.getContext("webgl",c)){b=sb(ob);
var e={Cb:b,attributes:c,version:c.ob,ib:a};a.canvas&&(a.canvas.xb=e);ob[b]=e;("undefined"===typeof c.mb||c.mb)&&tb(e);c=b}else c=0;else c=-4;return c},M:function(a,b){a=ob[a];b=qa(b);0==b.indexOf("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&eb(Y);"OES_vertex_array_object"==b&&fb(Y);"WEBGL_draw_buffers"==b&&gb(Y);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&hb(Y);return!!a.ib.getExtension(b)},ea:function(a){a>>=2;for(var b=0;14>b;++b)I[a+b]=0;I[a]=I[a+1]=I[a+3]=I[a+4]=I[a+8]=I[a+10]=
1},T:function(a){X=ob[a];d.zb=Y=X&&X.ib;return!a||Y?0:-5},p:function(a){Y.activeTexture(a)},h:function(a,b){35051==a?Y.kb=b:35052==a&&(Y.lb=b);Y.bindBuffer(a,jb[b])},c:function(a,b){Y.bindFramebuffer(a,lb[b])},b:function(a,b){Y.bindTexture(a,nb[b])},u:function(a){Y.bindVertexArray(V[a])},ga:function(a,b,c,e){Y.blendColor(a,b,c,e)},ha:function(a,b){Y.blendEquationSeparate(a,b)},ia:function(a,b,c,e){Y.blendFuncSeparate(a,b,c,e)},f:function(a,b,c,e,f,h,k,q,m,n){Y.blitFramebuffer(a,b,c,e,f,h,k,q,m,n)},
U:function(a){Y.clear(a)},X:function(a,b,c,e){Y.clearColor(a,b,c,e)},W:function(a){Y.clearDepth(a)},V:function(a){Y.clearStencil(a)},q:function(a,b,c,e){Y.colorMask(!!a,!!b,!!c,!!e)},ca:function(a){Y.cullFace(a)},$:function(a,b){for(var c=0;c<a;c++){var e=I[b+4*c>>2],f=jb[e];f&&(Y.deleteBuffer(f),f.name=0,jb[e]=null,e==Y.kb&&(Y.kb=0),e==Y.lb&&(Y.lb=0))}},d:function(a,b){for(var c=0;c<a;++c){var e=I[b+4*c>>2],f=lb[e];f&&(Y.deleteFramebuffer(f),f.name=0,lb[e]=null)}},ba:function(a){if(a){var b=kb[a];
b?(Y.deleteProgram(b),b.name=0,kb[a]=null):W(1281)}},n:function(a,b){for(var c=0;c<a;c++){var e=I[b+4*c>>2],f=mb[e];f&&(Y.deleteRenderbuffer(f),f.name=0,mb[e]=null)}},_:function(a,b){for(var c=0;c<a;c++){var e=I[b+4*c>>2],f=nb[e];f&&(Y.deleteTexture(f),f.name=0,nb[e]=null)}},oa:function(a,b){for(var c=0;c<a;c++){var e=I[b+4*c>>2];Y.deleteVertexArray(V[e]);V[e]=null}},t:function(a){Y.depthFunc(a)},s:function(a){Y.depthMask(!!a)},e:function(a){Y.disable(a)},ma:function(a){Y.disableVertexAttribArray(a)},
l:function(a){Y.enable(a)},da:function(a){Y.frontFace(a)},na:function(a,b){for(var c=0;c<a;c++){var e=Y.createVertexArray(),f=e&&sb(V);e?(e.name=f,V[f]=e):W(1282);I[b+4*c>>2]=f}},a:function(a,b){vb(a,b)},qa:function(a){if(pb[a])return pb[a];switch(a){case 7939:var b=Y.getSupportedExtensions()||[];b=b.concat(b.map(function(e){return"GL_"+e}));b=Z(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Y.getParameter(a))||W(1280);b=Z(b);break;case 7938:b=Y.getParameter(7938);b=2<=X.version?
"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Z(b);break;case 35724:b=Y.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Z(b);break;default:return W(1280),0}return pb[a]=b},pa:function(a,b){if(2>X.version)return W(1282),0;var c=qb[a];if(c)return 0>b||b>=c.length?(W(1281),0):c[b];switch(a){case 7939:return c=Y.getSupportedExtensions()||[],c=c.concat(c.map(function(e){return"GL_"+e})),
c=c.map(function(e){return Z(e)}),c=qb[a]=c,0>b||b>=c.length?(W(1281),0):c[b];default:return W(1280),0}},fa:function(a,b){Y.polygonOffset(a,b)},g:function(a){Y.readBuffer(a)},Y:function(a,b,c,e){Y.scissor(a,b,c,e)},ka:function(a,b,c){Y.stencilFunc(a,b,c)},r:function(a){Y.stencilMask(a)},ja:function(a,b,c){Y.stencilOp(a,b,c)},aa:function(a){Y.useProgram(kb[a])},Z:function(a,b,c,e){Y.viewport(a,b,c,e)},memory:D,ua:function(){d.pb=function(a){0!=xb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",
d.pb)},ta:function(){d.qb=function(a){a=a.clipboardData.getData("text");la([a])};window.addEventListener("paste",d.qb)},k:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){yb()});document.body.append(a)},j:function(){document.getElementById("_sokol_app_input_element").focus()},i:function(){document.getElementById("_sokol_app_input_element").blur()},sa:function(){window.removeEventListener("beforeunload",
d.pb)},ra:function(){window.removeEventListener("paste",d.qb)},Q:function(){return d.cb?d.cb.bufferSize:0},S:function(a,b,c){d.ab=null;d.cb=null;"undefined"!==typeof AudioContext?d.ab=new AudioContext({sampleRate:a,latencyHint:"interactive"}):"undefined"!==typeof webkitAudioContext?d.ab=new webkitAudioContext({sampleRate:a,latencyHint:"interactive"}):(d.ab=null,console.log("sokol_audio.h: no WebAudio support"));return d.ab?(console.log("sokol_audio.h: sample rate ",d.ab.sampleRate),d.cb=d.ab.createScriptProcessor(c,
0,b),d.cb.onaudioprocess=function(e){var f=e.outputBuffer.length,h=zb(f);if(h)for(var k=e.outputBuffer.numberOfChannels,q=0;q<k;q++)for(var m=e.outputBuffer.getChannelData(q),n=0;n<f;n++)m[n]=ua[(h>>2)+(k*n+q)]},d.cb.connect(d.ab.destination),a=function(){d.ab&&"suspended"===d.ab.state&&d.ab.resume()},document.addEventListener("click",a,{once:!0}),document.addEventListener("touchstart",a,{once:!0}),document.addEventListener("keydown",a,{once:!0}),1):0},R:function(){return d.ab?d.ab.sampleRate:0},
P:function(){null!==d.ab&&(d.cb&&d.cb.disconnect(),d.ab.close(),d.ab=null,d.cb=null)},table:ia};
(function(){function a(f){d.asm=f.exports;L--;d.monitorRunDependencies&&d.monitorRunDependencies(L);0==L&&(null!==Da&&(clearInterval(Da),Da=null),M&&(f=M,M=null,f()))}function b(f){a(f.instance)}function c(f){return Ia().then(function(h){return WebAssembly.instantiate(h,e)}).then(f,function(h){B("failed to asynchronously prepare wasm: "+h);A(h)})}var e={a:Ab};L++;d.monitorRunDependencies&&d.monitorRunDependencies(L);if(d.instantiateWasm)try{return d.instantiateWasm(e,a)}catch(f){return B("Module.instantiateWasm callback failed with error: "+
f),!1}(function(){if(C||"function"!==typeof WebAssembly.instantiateStreaming||Fa()||Ea("file://")||"function"!==typeof fetch)return c(b);fetch(N,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,e).then(b,function(h){B("wasm streaming compile failed: "+h);B("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
var Ja=d.___wasm_call_ctors=function(){return(Ja=d.___wasm_call_ctors=d.asm.wa).apply(null,arguments)},yb=d.__sapp_emsc_notify_keyboard_hidden=function(){return(yb=d.__sapp_emsc_notify_keyboard_hidden=d.asm.xa).apply(null,arguments)};d.___em_js__sapp_js_create_textfield=function(){return(d.___em_js__sapp_js_create_textfield=d.asm.ya).apply(null,arguments)};d.___em_js__sapp_js_focus_textfield=function(){return(d.___em_js__sapp_js_focus_textfield=d.asm.za).apply(null,arguments)};
d.___em_js__sapp_js_unfocus_textfield=function(){return(d.___em_js__sapp_js_unfocus_textfield=d.asm.Aa).apply(null,arguments)};d.__sapp_emsc_onpaste=function(){return(d.__sapp_emsc_onpaste=d.asm.Ba).apply(null,arguments)};var xb=d.__sapp_html5_get_ask_leave_site=function(){return(xb=d.__sapp_html5_get_ask_leave_site=d.asm.Ca).apply(null,arguments)};d.___em_js__sapp_add_js_hook_beforeunload=function(){return(d.___em_js__sapp_add_js_hook_beforeunload=d.asm.Da).apply(null,arguments)};
d.___em_js__sapp_remove_js_hook_beforeunload=function(){return(d.___em_js__sapp_remove_js_hook_beforeunload=d.asm.Ea).apply(null,arguments)};d.___em_js__sapp_add_js_hook_clipboard=function(){return(d.___em_js__sapp_add_js_hook_clipboard=d.asm.Fa).apply(null,arguments)};d.___em_js__sapp_remove_js_hook_clipboard=function(){return(d.___em_js__sapp_remove_js_hook_clipboard=d.asm.Ga).apply(null,arguments)};
d.___em_js__sapp_js_write_clipboard=function(){return(d.___em_js__sapp_js_write_clipboard=d.asm.Ha).apply(null,arguments)};d._main=function(){return(d._main=d.asm.Ia).apply(null,arguments)};d.___em_js__stm_js_perfnow=function(){return(d.___em_js__stm_js_perfnow=d.asm.Ja).apply(null,arguments)};var zb=d.__saudio_emsc_pull=function(){return(zb=d.__saudio_emsc_pull=d.asm.Ka).apply(null,arguments)};d.___em_js__saudio_js_init=function(){return(d.___em_js__saudio_js_init=d.asm.La).apply(null,arguments)};
d.___em_js__saudio_js_shutdown=function(){return(d.___em_js__saudio_js_shutdown=d.asm.Ma).apply(null,arguments)};d.___em_js__saudio_js_sample_rate=function(){return(d.___em_js__saudio_js_sample_rate=d.asm.Na).apply(null,arguments)};d.___em_js__saudio_js_buffer_frames=function(){return(d.___em_js__saudio_js_buffer_frames=d.asm.Oa).apply(null,arguments)};d.___em_js__sfetch_js_send_head_request=function(){return(d.___em_js__sfetch_js_send_head_request=d.asm.Pa).apply(null,arguments)};
d.___em_js__sfetch_js_send_get_request=function(){return(d.___em_js__sfetch_js_send_get_request=d.asm.Qa).apply(null,arguments)};d.__sfetch_emsc_head_response=function(){return(d.__sfetch_emsc_head_response=d.asm.Ra).apply(null,arguments)};d.__sfetch_emsc_get_response=function(){return(d.__sfetch_emsc_get_response=d.asm.Sa).apply(null,arguments)};d.__sfetch_emsc_failed_http_status=function(){return(d.__sfetch_emsc_failed_http_status=d.asm.Ta).apply(null,arguments)};
d.__sfetch_emsc_failed_buffer_too_small=function(){return(d.__sfetch_emsc_failed_buffer_too_small=d.asm.Ua).apply(null,arguments)};var S=d._malloc=function(){return(S=d._malloc=d.asm.Va).apply(null,arguments)},na=d.stackSave=function(){return(na=d.stackSave=d.asm.Wa).apply(null,arguments)},oa=d.stackRestore=function(){return(oa=d.stackRestore=d.asm.Xa).apply(null,arguments)},E=d.stackAlloc=function(){return(E=d.stackAlloc=d.asm.Ya).apply(null,arguments)};
d.dynCall_v=function(){return(d.dynCall_v=d.asm.Za).apply(null,arguments)};var T=d.dynCall_iiii=function(){return(T=d.dynCall_iiii=d.asm._a).apply(null,arguments)},wb=d.dynCall_idi=function(){return(wb=d.dynCall_idi=d.asm.$a).apply(null,arguments)},Bb;function fa(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}M=function Cb(){Bb||Db();Bb||(M=Cb)};
function Db(a){function b(){if(!Bb&&(Bb=!0,d.calledRun=!0,!ja)){K(ya);K(za);if(d.onRuntimeInitialized)d.onRuntimeInitialized();if(Eb){var c=a,e=d._main;c=c||[];var f=c.length+1,h=E(4*(f+1));I[h>>2]=sa(aa);for(var k=1;k<f;k++)I[(h>>2)+k]=sa(c[k-1]);I[(h>>2)+f]=0;try{var q=e(f,h);if(!noExitRuntime||0!==q){if(!noExitRuntime&&(ja=!0,d.onExit))d.onExit(q);u(q,new fa(q))}}catch(m){m instanceof fa||("unwind"==m?noExitRuntime=!0:((c=m)&&"object"===typeof m&&m.stack&&(c=[m,m.stack]),B("exception thrown: "+
c),u(1,m)))}finally{}}if(d.postRun)for("function"==typeof d.postRun&&(d.postRun=[d.postRun]);d.postRun.length;)c=d.postRun.shift(),Ba.unshift(c);K(Ba)}}a=a||r;if(!(0<L)){if(d.preRun)for("function"==typeof d.preRun&&(d.preRun=[d.preRun]);d.preRun.length;)Ca();K(xa);0<L||(d.setStatus?(d.setStatus("Running..."),setTimeout(function(){setTimeout(function(){d.setStatus("")},1);b()},1)):b())}}d.run=Db;if(d.preInit)for("function"==typeof d.preInit&&(d.preInit=[d.preInit]);0<d.preInit.length;)d.preInit.pop()();
var Eb=!0;d.noInitialRun&&(Eb=!1);noExitRuntime=!0;Db();
