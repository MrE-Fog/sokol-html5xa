
var e;e||(e=typeof Module !== 'undefined' ? Module : {});var k={},m;for(m in e)e.hasOwnProperty(m)&&(k[m]=e[m]);var r=[],aa="./this.program";function t(a,b){throw b;}var ca=!1,u=!1,da=!1,ea=!1;ca="object"===typeof window;u="function"===typeof importScripts;da="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;ea=!ca&&!da&&!u;var v="",fa,w,ha,ia;
if(da)v=u?require("path").dirname(v)+"/":__dirname+"/",fa=function(a,b){ha||(ha=require("fs"));ia||(ia=require("path"));a=ia.normalize(a);return ha.readFileSync(a,b?null:"utf8")},w=function(a){a=fa(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/")),r=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=e),process.on("uncaughtException",function(a){if(!(a instanceof ja))throw a;}),process.on("unhandledRejection",
x),t=function(a){process.exit(a)},e.inspect=function(){return"[Emscripten Module object]"};else if(ea)"undefined"!=typeof read&&(fa=function(a){return read(a)}),w=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?r=scriptArgs:"undefined"!=typeof arguments&&(r=arguments),"function"===typeof quit&&(t=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===typeof console&&
(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(ca||u)u?v=self.location.href:document.currentScript&&(v=document.currentScript.src),v=0!==v.indexOf("blob:")?v.substr(0,v.lastIndexOf("/")+1):"",fa=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},u&&(w=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});
var ka=e.print||console.log.bind(console),y=e.printErr||console.warn.bind(console);for(m in k)k.hasOwnProperty(m)&&(e[m]=k[m]);k=null;e.arguments&&(r=e.arguments);e.thisProgram&&(aa=e.thisProgram);e.quit&&(t=e.quit);var z;e.wasmBinary&&(z=e.wasmBinary);var noExitRuntime;e.noExitRuntime&&(noExitRuntime=e.noExitRuntime);"object"!==typeof WebAssembly&&x("no native wasm support detected");var B,la=new WebAssembly.Table({initial:28,maximum:28,element:"anyfunc"}),ma=!1;
function assert(a,b){a||x("Assertion failed: "+b)}function na(){var a=e.__sapp_emsc_onpaste;assert(a,"Cannot call unknown function _sapp_emsc_onpaste, make sure it is exported");return a}
function oa(a){var b=["string"],c={string:function(n){var p=0;if(null!==n&&void 0!==n&&0!==n){var q=(n.length<<2)+1;p=C(q);D(n,E,p,q)}return p},array:function(n){var p=C(n.length);pa.set(n,p);return p}},d=na(),f=[],h=0;if(a)for(var g=0;g<a.length;g++){var l=c[b[g]];l?(0===h&&(h=qa()),f[g]=l(a[g])):f[g]=a[g]}d.apply(null,f);0!==h&&ra(h)}var sa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function F(a,b){if(a){var c=E,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&sa)a=sa.decode(c.subarray(a,b));else{for(d="";a<b;){var f=c[a++];if(f&128){var h=c[a++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|h);else{var g=c[a++]&63;f=224==(f&240)?(f&15)<<12|h<<6|g:(f&7)<<18|h<<12|g<<6|c[a++]&63;65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else d+=String.fromCharCode(f)}a=d}}else a="";return a}
function D(a,b,c,d){if(!(0<d))return 0;var f=c;d=c+d-1;for(var h=0;h<a.length;++h){var g=a.charCodeAt(h);if(55296<=g&&57343>=g){var l=a.charCodeAt(++h);g=65536+((g&1023)<<10)|l&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-f}
function ta(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function ua(a){var b=ta(a)+1,c=C(b);D(a,pa,c,b);return c}var G,pa,E,va,wa,H,xa,I,J;
function ya(a){G=a;e.HEAP8=pa=new Int8Array(a);e.HEAP16=va=new Int16Array(a);e.HEAP32=H=new Int32Array(a);e.HEAPU8=E=new Uint8Array(a);e.HEAPU16=wa=new Uint16Array(a);e.HEAPU32=xa=new Uint32Array(a);e.HEAPF32=I=new Float32Array(a);e.HEAPF64=J=new Float64Array(a)}var za=e.INITIAL_MEMORY||33554432;e.wasmMemory?B=e.wasmMemory:B=new WebAssembly.Memory({initial:za/65536,maximum:32768});B&&(G=B.buffer);za=G.byteLength;ya(G);H[533636]=7377584;
function Aa(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(e);else{var c=b.wc;"number"===typeof c?void 0===b.ic?e.dynCall_v(c):e.dynCall_vi(c,b.ic):c(void 0===b.ic?null:b.ic)}}}var Ba=[],Ca=[],Da=[],Ea=[],Fa=[];function Ga(){var a=e.preRun.shift();Ba.unshift(a)}var K=0,Ha=null,L=null;e.preloadedImages={};e.preloadedAudios={};function x(a){if(e.onAbort)e.onAbort(a);ka(a);y(a);ma=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}
function Ia(a){var b=M;return String.prototype.startsWith?b.startsWith(a):0===b.indexOf(a)}function Ja(){return Ia("data:application/octet-stream;base64,")}var M="plmpeg-sapp.wasm";if(!Ja()){var Ka=M;M=e.locateFile?e.locateFile(Ka,v):v+Ka}function La(){try{if(z)return new Uint8Array(z);if(w)return w(M);throw"both async and sync fetching of the wasm failed";}catch(a){x(a)}}
function Ma(){return z||!ca&&!u||"function"!==typeof fetch||Ia("file://")?new Promise(function(a){a(La())}):fetch(M,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+M+"'";return a.arrayBuffer()}).catch(function(){return La()})}Ca.push({wc:function(){Na()}});function Oa(){for(var a=N.length-1;0<=a;--a)Pa(a);N=[];Qa=[]}var Qa=[];function Ra(){if(Sa.pc&&Ta.fc)for(var a=0;a<Qa.length;++a){var b=Qa[a];Qa.splice(a,1);--a;b.Jc.apply(null,b.Bc)}}var N=[];
function Pa(a){var b=N[a];b.target.removeEventListener(b.Yb,b.uc,b.Zb);N.splice(a,1)}function O(a){function b(d){++Sa.pc;Ta=a;Ra();a.bc(d);Ra();--Sa.pc}if(a.$b)a.uc=b,a.target.addEventListener(a.Yb,b,a.Zb),N.push(a),Ua||(Ea.push(Oa),Ua=!0);else for(var c=0;c<N.length;++c)N[c].target==a.target&&N[c].Yb==a.Yb&&Pa(c--)}var Sa={},Ua,Ta,Va,Wa,Xa,Ya,Za,$a,ab=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];
function P(a){a=2<a?F(a):a;return ab[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}function bb(a){return 0>ab.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}
function cb(a,b,c,d,f,h){Va||(Va=Q(164));a={target:P(a),fc:!0,Yb:h,$b:d,bc:function(g){var l=Va,n=l>>2;H[n]=g.location;H[n+1]=g.ctrlKey;H[n+2]=g.shiftKey;H[n+3]=g.altKey;H[n+4]=g.metaKey;H[n+5]=g.repeat;H[n+6]=g.charCode;H[n+7]=g.keyCode;H[n+8]=g.which;D(g.key||"",E,l+36,32);D(g.code||"",E,l+68,32);D(g.char||"",E,l+100,32);D(g.locale||"",E,l+132,32);R(d,f,l,b)&&g.preventDefault()},Zb:c};O(a)}
function db(a,b,c){a>>=2;H[a]=b.screenX;H[a+1]=b.screenY;H[a+2]=b.clientX;H[a+3]=b.clientY;H[a+4]=b.ctrlKey;H[a+5]=b.shiftKey;H[a+6]=b.altKey;H[a+7]=b.metaKey;va[2*a+16]=b.button;va[2*a+17]=b.buttons;H[a+9]=b.movementX;H[a+10]=b.movementY;c=bb(c);H[a+11]=b.clientX-c.left;H[a+12]=b.clientY-c.top}function eb(a,b,c,d,f,h){Wa||(Wa=Q(64));a=P(a);O({target:a,fc:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,Yb:h,$b:d,bc:function(g){g=g||event;db(Wa,g,a);R(d,f,Wa,b)&&g.preventDefault()},Zb:c})}
function fb(a,b,c,d,f){Xa||(Xa=Q(260));O({target:a,Yb:f,$b:d,bc:function(h){h=h||event;var g=Xa,l=document.pointerLockElement||document.kc||document.mc||document.lc;H[g>>2]=!!l;var n=l&&l.id?l.id:"";D(l?l==window?"#window":l==screen?"#screen":l&&l.nodeName?l.nodeName:"":"",E,g+4,128);D(n,E,g+132,128);R(d,20,g,b)&&h.preventDefault()},Zb:c})}function gb(a,b,c,d,f){O({target:a,Yb:f,$b:d,bc:function(h){h=h||event;R(d,38,0,b)&&h.preventDefault()},Zb:c})}
function hb(a,b,c,d){Ya||(Ya=Q(36));a=P(a);O({target:a,Yb:"resize",$b:d,bc:function(f){f=f||event;if(f.target==a){var h=Ya,g=document.body;H[h>>2]=f.detail;H[h+4>>2]=g.clientWidth;H[h+8>>2]=g.clientHeight;H[h+12>>2]=innerWidth;H[h+16>>2]=innerHeight;H[h+20>>2]=outerWidth;H[h+24>>2]=outerHeight;H[h+28>>2]=pageXOffset;H[h+32>>2]=pageYOffset;R(d,10,h,b)&&f.preventDefault()}},Zb:c})}
function ib(a,b,c,d,f,h){Za||(Za=Q(1684));a=P(a);O({target:a,fc:"touchstart"==h||"touchend"==h,Yb:h,$b:d,bc:function(g){for(var l={},n=g.touches,p=0;p<n.length;++p){var q=n[p];l[q.identifier]=q}n=g.changedTouches;for(p=0;p<n.length;++p)q=n[p],q.yc=1,l[q.identifier]=q;n=g.targetTouches;for(p=0;p<n.length;++p)l[n[p].identifier].zc=1;n=Za;q=n>>2;H[q+1]=g.ctrlKey;H[q+2]=g.shiftKey;H[q+3]=g.altKey;H[q+4]=g.metaKey;q+=5;var ba=bb(a),pb=0;for(p in l){var A=l[p];H[q]=A.identifier;H[q+1]=A.screenX;H[q+2]=
A.screenY;H[q+3]=A.clientX;H[q+4]=A.clientY;H[q+5]=A.pageX;H[q+6]=A.pageY;H[q+7]=A.yc;H[q+8]=A.zc;H[q+9]=A.clientX-ba.left;H[q+10]=A.clientY-ba.top;q+=13;if(31<++pb)break}H[n>>2]=pb;R(d,f,n,b)&&g.preventDefault()},Zb:c})}function jb(a,b,c,d,f,h){a={target:P(a),Yb:h,$b:d,bc:function(g){g=g||event;R(d,f,0,b)&&g.preventDefault()},Zb:c};O(a)}
function kb(a,b,c,d){$a||($a=Q(96));O({target:a,fc:!0,Yb:"wheel",$b:d,bc:function(f){f=f||event;var h=$a;db(h,f,a);J[h+64>>3]=f.deltaX;J[h+72>>3]=f.deltaY;J[h+80>>3]=f.deltaZ;H[h+88>>2]=f.deltaMode;R(d,9,h,b)&&f.preventDefault()},Zb:c})}
function lb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,f,h){b.drawArraysInstancedANGLE(c,d,f,h)},a.drawElementsInstanced=function(c,d,f,h,g){b.drawElementsInstancedANGLE(c,d,f,h,g)})}
function mb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function nb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function ob(a){a.Dc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}var qb=1,rb=[],S=[],sb=[],tb=[],ub=[],T=[],U=[],vb=[],wb=[],xb={},yb={},zb={};function V(a){Ab||(Ab=a)}function W(a){for(var b=qb++,c=a.length;c<b;c++)a[c]=null;return b}
function Bb(a){a||(a=X);if(!a.xc){a.xc=!0;var b=a.hc;lb(b);mb(b);nb(b);ob(b);b.Ec=b.getExtension("EXT_disjoint_timer_query");var c="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod EXT_texture_norm16 WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2 WEBKIT_WEBGL_compressed_texture_pvrtc".split(" ");(b.getSupportedExtensions()||
[]).forEach(function(d){-1!=c.indexOf(d)&&b.getExtension(d)})}}var Ab,X,Cb=["default","low-power","high-performance"];function Db(a,b,c,d){for(var f=0;f<a;f++){var h=Y[c](),g=h&&W(d);h?(h.name=g,d[g]=h):V(1282);H[b+4*f>>2]=g}}
function Eb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=Y.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>X.version){V(1282);return}c=2*(Y.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>X.version){V(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=Y.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":V(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:V(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)H[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(f){V(1280);y("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+f+")");return}}break;default:V(1280);y("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}H[b>>2]=c}else V(1281)}
function Fb(a){var b=ta(a)+1,c=Q(b);D(a,E,c,b);return c}function Gb(a){a-=5120;return 0==a?pa:1==a?E:2==a?va:4==a?H:6==a?I:5==a||28922==a||28520==a||30779==a||30782==a?xa:wa}function Hb(a){return 31-Math.clz32(a.BYTES_PER_ELEMENT)}function Ib(a,b,c,d,f){a=Gb(a);var h=Hb(a);return a.subarray(f>>h,f+d*(c*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[b-6402]||1)*(1<<h)+4-1&-4)>>h)}for(var Z=[],Y,Jb=new Float32Array(288),Kb=0;288>Kb;++Kb)Z[Kb]=Jb.subarray(0,Kb+1);
var Tb={_sapp_emsc_exit_pointerlock:function(){document.exitPointerLock&&document.exitPointerLock()},w:function(a){a=F(a);var b=document.getElementById(a);b?b.requestPointerLock?b.requestPointerLock():console.log("sokol_app.h: target doesn't doesn't support pointer lock:"+a):console.log("sokol_app.h: invalid target:"+a)},R:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},la:function(a,b,c){a=P(a);if(!a)return-4;a=bb(a);J[b>>3]=a.width;J[c>>3]=a.height;return 0},_a:function(a,
b,c){E.copyWithin(a,b,b+c)},Oa:function(a,b){function c(d){Lb(a,d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},$a:function(a){a>>>=0;var b=E.length;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(16777216,a,d);0<d%65536&&(d+=65536-d%65536);a:{try{B.grow(Math.min(2147483648,d)-G.byteLength+65535>>>16);ya(B.buffer);var f=1;break a}catch(h){}f=void 0}if(f)return!0}return!1},Q:function(a,b,c){a=P(a);if(!a)return-4;a.width=b;a.height=
c;return 0},aa:function(a,b,c,d){cb(a,b,c,d,2,"keydown");return 0},_:function(a,b,c,d){cb(a,b,c,d,1,"keypress");return 0},$:function(a,b,c,d){cb(a,b,c,d,3,"keyup");return 0},ka:function(a,b,c,d){eb(a,b,c,d,5,"mousedown");return 0},da:function(a,b,c,d){eb(a,b,c,d,33,"mouseenter");return 0},ca:function(a,b,c,d){eb(a,b,c,d,34,"mouseleave");return 0},ea:function(a,b,c,d){eb(a,b,c,d,8,"mousemove");return 0},ha:function(a,b,c,d){eb(a,b,c,d,6,"mouseup");return 0},V:function(a,b,c,d){if(!document||!document.body||
!(document.body.requestPointerLock||document.body.kc||document.body.mc||document.body.lc))return-1;a=P(a);if(!a)return-4;fb(a,b,c,d,"pointerlockchange");fb(a,b,c,d,"mozpointerlockchange");fb(a,b,c,d,"webkitpointerlockchange");fb(a,b,c,d,"mspointerlockchange");return 0},U:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.kc||document.body.mc||document.body.lc))return-1;a=P(a);if(!a)return-4;gb(a,b,c,d,"pointerlockerror");gb(a,b,c,d,"mozpointerlockerror");gb(a,b,c,d,
"webkitpointerlockerror");gb(a,b,c,d,"mspointerlockerror");return 0},Za:function(a,b,c,d){hb(a,b,c,d);return 0},W:function(a,b,c,d){ib(a,b,c,d,25,"touchcancel");return 0},X:function(a,b,c,d){ib(a,b,c,d,23,"touchend");return 0},Y:function(a,b,c,d){ib(a,b,c,d,24,"touchmove");return 0},Z:function(a,b,c,d){ib(a,b,c,d,22,"touchstart");return 0},T:function(a,b,c,d){jb(a,b,c,d,31,"webglcontextlost");return 0},S:function(a,b,c,d){jb(a,b,c,d,32,"webglcontextrestored");return 0},ba:function(a,b,c,d){a=P(a);
return"undefined"!==typeof a.onwheel?(kb(a,b,c,d),0):-1},D:function(a,b){var c={};b>>=2;c.alpha=!!H[b];c.depth=!!H[b+1];c.stencil=!!H[b+2];c.antialias=!!H[b+3];c.premultipliedAlpha=!!H[b+4];c.preserveDrawingBuffer=!!H[b+5];c.powerPreference=Cb[H[b+6]];c.failIfMajorPerformanceCaveat=!!H[b+7];c.qc=H[b+8];c.Gc=H[b+9];c.oc=H[b+10];c.vc=H[b+11];c.Hc=H[b+12];c.Ic=H[b+13];if(a=P(a))if(c.vc)c=-1;else if(a=1<c.qc?a.getContext("webgl2",c):a.getContext("webgl",c)){b=W(wb);var d={Fc:b,attributes:c,version:c.qc,
hc:a};a.canvas&&(a.canvas.Ac=d);wb[b]=d;("undefined"===typeof c.oc||c.oc)&&Bb(d);c=b}else c=0;else c=-4;return c},ua:function(a,b){a=wb[a];b=F(b);0==b.indexOf("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&lb(Y);"OES_vertex_array_object"==b&&mb(Y);"WEBGL_draw_buffers"==b&&nb(Y);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&ob(Y);return!!a.hc.getExtension(b)},Na:function(a){a>>=2;for(var b=0;14>b;++b)H[a+b]=0;H[a]=H[a+1]=H[a+3]=H[a+4]=H[a+8]=H[a+10]=1},Aa:function(a){X=wb[a];e.Cc=Y=X&&
X.hc;return!a||Y?0:-5},f:function(a){Y.activeTexture(a)},C:function(a,b){Y.attachShader(S[a],U[b])},d:function(a,b){35051==a?Y.nc=b:35052==a&&(Y.ac=b);Y.bindBuffer(a,rb[b])},h:function(a,b){Y.bindFramebuffer(a,sb[b])},La:function(a,b){Y.bindRenderbuffer(a,tb[b])},a:function(a,b){Y.bindTexture(a,ub[b])},P:function(a){Y.bindVertexArray(vb[a])},L:function(a,b,c,d){Y.blendColor(a,b,c,d)},M:function(a,b){Y.blendEquationSeparate(a,b)},N:function(a,b,c,d){Y.blendFuncSeparate(a,b,c,d)},p:function(a,b,c,d,
f,h,g,l,n,p){Y.blitFramebuffer(a,b,c,d,f,h,g,l,n,p)},G:function(a,b,c,d){2<=X.version?c?Y.bufferData(a,E,d,c,b):Y.bufferData(a,b,d):Y.bufferData(a,c?E.subarray(c,c+b):b,d)},F:function(a,b,c,d){2<=X.version?Y.bufferSubData(a,b,E,d,c):Y.bufferSubData(a,b,E.subarray(d,d+c))},na:function(a){Y.clear(a)},qa:function(a,b,c,d){Y.clearColor(a,b,c,d)},pa:function(a){Y.clearDepth(a)},oa:function(a){Y.clearStencil(a)},s:function(a,b,c,d){Y.colorMask(!!a,!!b,!!c,!!d)},xa:function(a){Y.compileShader(U[a])},Ha:function(a,
b,c,d,f,h,g,l){2<=X.version?Y.ac?Y.compressedTexImage2D(a,b,c,d,f,h,g,l):Y.compressedTexImage2D(a,b,c,d,f,h,E,l,g):Y.compressedTexImage2D(a,b,c,d,f,h,l?E.subarray(l,l+g):null)},Fa:function(a,b,c,d,f,h,g,l,n){Y.ac?Y.compressedTexImage3D(a,b,c,d,f,h,g,l,n):Y.compressedTexImage3D(a,b,c,d,f,h,g,E,n,l)},Da:function(){var a=W(S),b=Y.createProgram();b.name=a;S[a]=b;return a},za:function(a){var b=W(U);U[b]=Y.createShader(a);return b},I:function(a){Y.cullFace(a)},ta:function(a,b){for(var c=0;c<a;c++){var d=
H[b+4*c>>2],f=rb[d];f&&(Y.deleteBuffer(f),f.name=0,rb[d]=null,d==Y.nc&&(Y.nc=0),d==Y.ac&&(Y.ac=0))}},i:function(a,b){for(var c=0;c<a;++c){var d=H[b+4*c>>2],f=sb[d];f&&(Y.deleteFramebuffer(f),f.name=0,sb[d]=null)}},A:function(a){if(a){var b=S[a];b?(Y.deleteProgram(b),b.name=0,S[a]=null,xb[a]=null):V(1281)}},j:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],f=tb[d];f&&(Y.deleteRenderbuffer(f),f.name=0,tb[d]=null)}},r:function(a){if(a){var b=U[a];b?(Y.deleteShader(b),U[a]=null):V(1281)}},x:function(a,
b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],f=ub[d];f&&(Y.deleteTexture(f),f.name=0,ub[d]=null)}},Sa:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2];Y.deleteVertexArray(vb[d]);vb[d]=null}},v:function(a){Y.depthFunc(a)},u:function(a){Y.depthMask(!!a)},b:function(a){Y.disable(a)},O:function(a){Y.disableVertexAttribArray(a)},eb:function(a,b,c){Y.drawArrays(a,b,c)},fb:function(a,b,c,d){Y.drawElements(a,b,c,d)},g:function(a){Y.enable(a)},lb:function(a){Y.enableVertexAttribArray(a)},J:function(a){Y.frontFace(a)},
H:function(a,b){Db(a,b,"createBuffer",rb)},Ma:function(a,b){Db(a,b,"createRenderbuffer",tb)},Ia:function(a,b){Db(a,b,"createTexture",ub)},Ra:function(a,b){Db(a,b,"createVertexArray",vb)},va:function(a,b){return Y.getAttribLocation(S[a],F(b))},c:function(a,b){Eb(a,b)},Ba:function(a,b,c,d){a=Y.getProgramInfoLog(S[a]);null===a&&(a="(unknown error)");b=0<b&&d?D(a,E,d,b):0;c&&(H[c>>2]=b)},B:function(a,b,c){if(c)if(a>=qb)V(1281);else{var d=xb[a];if(d)if(35716==b)a=Y.getProgramInfoLog(S[a]),null===a&&(a=
"(unknown error)"),H[c>>2]=a.length+1;else if(35719==b)H[c>>2]=d.jc;else if(35722==b){if(-1==d.dc){a=S[a];var f=Y.getProgramParameter(a,35721);for(b=d.dc=0;b<f;++b)d.dc=Math.max(d.dc,Y.getActiveAttrib(a,b).name.length+1)}H[c>>2]=d.dc}else if(35381==b){if(-1==d.ec)for(a=S[a],f=Y.getProgramParameter(a,35382),b=d.ec=0;b<f;++b)d.ec=Math.max(d.ec,Y.getActiveUniformBlockName(a,b).length+1);H[c>>2]=d.ec}else H[c>>2]=Y.getProgramParameter(S[a],b);else V(1282)}else V(1281)},wa:function(a,b,c,d){a=Y.getShaderInfoLog(U[a]);
null===a&&(a="(unknown error)");b=0<b&&d?D(a,E,d,b):0;c&&(H[c>>2]=b)},y:function(a,b,c){c?35716==b?(a=Y.getShaderInfoLog(U[a]),null===a&&(a="(unknown error)"),H[c>>2]=a.length+1):35720==b?(a=Y.getShaderSource(U[a]),H[c>>2]=null===a||0==a.length?0:a.length+1):H[c>>2]=Y.getShaderParameter(U[a],b):V(1281)},Ua:function(a){if(yb[a])return yb[a];switch(a){case 7939:var b=Y.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Fb(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=
Y.getParameter(a))||V(1280);b=Fb(b);break;case 7938:b=Y.getParameter(7938);b=2<=X.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Fb(b);break;case 35724:b=Y.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Fb(b);break;default:return V(1280),0}return yb[a]=b},Ta:function(a,b){if(2>X.version)return V(1282),0;var c=zb[a];if(c)return 0>b||b>=c.length?(V(1281),0):c[b];switch(a){case 7939:return c=
Y.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return Fb(d)}),c=zb[a]=c,0>b||b>=c.length?(V(1281),0):c[b];default:return V(1280),0}},l:function(a,b){b=F(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,d)}return(a=xb[a]&&xb[a].tc[b])&&0<=c&&c<a[0]?a[1]+c:-1},Ca:function(a){Y.linkProgram(S[a]);var b=S[a];a=xb[a]={tc:{},jc:0,dc:-1,ec:-1};for(var c=a.tc,d=Y.getProgramParameter(b,35718),f=0;f<
d;++f){var h=Y.getActiveUniform(b,f),g=h.name;a.jc=Math.max(a.jc,g.length+1);"]"==g.slice(-1)&&(g=g.slice(0,g.lastIndexOf("[")));var l=Y.getUniformLocation(b,g);if(l){var n=W(T);c[g]=[h.size,n];T[n]=l;for(var p=1;p<h.size;++p)l=Y.getUniformLocation(b,g+"["+p+"]"),n=W(T),T[n]=l}}},K:function(a,b){Y.polygonOffset(a,b)},q:function(a){Y.readBuffer(a)},Ja:function(a,b,c,d){Y.renderbufferStorage(a,b,c,d)},Ka:function(a,b,c,d,f){Y.renderbufferStorageMultisample(a,b,c,d,f)},ra:function(a,b,c,d){Y.scissor(a,
b,c,d)},ya:function(a,b,c,d){for(var f="",h=0;h<b;++h){var g=d?H[d+4*h>>2]:-1;f+=F(H[c+4*h>>2],0>g?void 0:g)}Y.shaderSource(U[a],f)},Qa:function(a,b,c){Y.stencilFunc(a,b,c)},ja:function(a,b,c,d){Y.stencilFuncSeparate(a,b,c,d)},t:function(a){Y.stencilMask(a)},Pa:function(a,b,c){Y.stencilOp(a,b,c)},ia:function(a,b,c,d){Y.stencilOpSeparate(a,b,c,d)},Ga:function(a,b,c,d,f,h,g,l,n){if(2<=X.version)if(Y.ac)Y.texImage2D(a,b,c,d,f,h,g,l,n);else if(n){var p=Gb(l);Y.texImage2D(a,b,c,d,f,h,g,l,p,n>>Hb(p))}else Y.texImage2D(a,
b,c,d,f,h,g,l,null);else Y.texImage2D(a,b,c,d,f,h,g,l,n?Ib(l,g,d,f,n):null)},Ea:function(a,b,c,d,f,h,g,l,n,p){if(Y.ac)Y.texImage3D(a,b,c,d,f,h,g,l,n,p);else if(p){var q=Gb(n);Y.texImage3D(a,b,c,d,f,h,g,l,n,q,p>>Hb(q))}else Y.texImage3D(a,b,c,d,f,h,g,l,n,null)},E:function(a,b,c){Y.texParameterf(a,b,c)},e:function(a,b,c){Y.texParameteri(a,b,c)},ga:function(a,b,c,d,f,h,g,l,n){if(2<=X.version)if(Y.ac)Y.texSubImage2D(a,b,c,d,f,h,g,l,n);else if(n){var p=Gb(l);Y.texSubImage2D(a,b,c,d,f,h,g,l,p,n>>Hb(p))}else Y.texSubImage2D(a,
b,c,d,f,h,g,l,null);else p=null,n&&(p=Ib(l,g,f,h,n)),Y.texSubImage2D(a,b,c,d,f,h,g,l,p)},fa:function(a,b,c,d,f,h,g,l,n,p,q){if(Y.ac)Y.texSubImage3D(a,b,c,d,f,h,g,l,n,p,q);else if(q){var ba=Gb(p);Y.texSubImage3D(a,b,c,d,f,h,g,l,n,p,ba,q>>Hb(ba))}else Y.texSubImage3D(a,b,c,d,f,h,g,l,n,p,null)},kb:function(a,b,c){if(2<=X.version)Y.uniform1fv(T[a],I,c>>2,b);else{if(288>=b)for(var d=Z[b-1],f=0;f<b;++f)d[f]=I[c+4*f>>2];else d=I.subarray(c>>2,c+4*b>>2);Y.uniform1fv(T[a],d)}},z:function(a,b){Y.uniform1i(T[a],
b)},jb:function(a,b,c){if(2<=X.version)Y.uniform2fv(T[a],I,c>>2,2*b);else{if(144>=b)for(var d=Z[2*b-1],f=0;f<2*b;f+=2)d[f]=I[c+4*f>>2],d[f+1]=I[c+(4*f+4)>>2];else d=I.subarray(c>>2,c+8*b>>2);Y.uniform2fv(T[a],d)}},ib:function(a,b,c){if(2<=X.version)Y.uniform3fv(T[a],I,c>>2,3*b);else{if(96>=b)for(var d=Z[3*b-1],f=0;f<3*b;f+=3)d[f]=I[c+4*f>>2],d[f+1]=I[c+(4*f+4)>>2],d[f+2]=I[c+(4*f+8)>>2];else d=I.subarray(c>>2,c+12*b>>2);Y.uniform3fv(T[a],d)}},hb:function(a,b,c){if(2<=X.version)Y.uniform4fv(T[a],I,
c>>2,4*b);else{if(72>=b){var d=Z[4*b-1],f=I;c>>=2;for(var h=0;h<4*b;h+=4){var g=c+h;d[h]=f[g];d[h+1]=f[g+1];d[h+2]=f[g+2];d[h+3]=f[g+3]}}else d=I.subarray(c>>2,c+16*b>>2);Y.uniform4fv(T[a],d)}},gb:function(a,b,c,d){if(2<=X.version)Y.uniformMatrix4fv(T[a],!!c,I,d>>2,16*b);else{if(18>=b){var f=Z[16*b-1],h=I;d>>=2;for(var g=0;g<16*b;g+=16){var l=d+g;f[g]=h[l];f[g+1]=h[l+1];f[g+2]=h[l+2];f[g+3]=h[l+3];f[g+4]=h[l+4];f[g+5]=h[l+5];f[g+6]=h[l+6];f[g+7]=h[l+7];f[g+8]=h[l+8];f[g+9]=h[l+9];f[g+10]=h[l+10];
f[g+11]=h[l+11];f[g+12]=h[l+12];f[g+13]=h[l+13];f[g+14]=h[l+14];f[g+15]=h[l+15]}}else f=I.subarray(d>>2,d+64*b>>2);Y.uniformMatrix4fv(T[a],!!c,f)}},k:function(a){Y.useProgram(S[a])},mb:function(a,b){Y.vertexAttribDivisor(a,b)},nb:function(a,b,c,d,f,h){Y.vertexAttribPointer(a,b,c,!!d,f,h)},sa:function(a,b,c,d){Y.viewport(a,b,c,d)},memory:B,Ya:function(){e.rc=function(a){0!=Mb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",e.rc)},Xa:function(){e.sc=function(a){a=a.clipboardData.getData("text");
oa([a])};window.addEventListener("paste",e.sc)},o:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Nb()});document.body.append(a)},n:function(){document.getElementById("_sokol_app_input_element").focus()},m:function(){document.getElementById("_sokol_app_input_element").blur()},Wa:function(){window.removeEventListener("beforeunload",e.rc)},Va:function(){window.removeEventListener("paste",
e.sc)},bb:function(){return e.cc?e.cc.bufferSize:0},db:function(a,b,c){e.Xb=null;e.cc=null;"undefined"!==typeof AudioContext?e.Xb=new AudioContext({sampleRate:a,latencyHint:"interactive"}):"undefined"!==typeof webkitAudioContext?e.Xb=new webkitAudioContext({sampleRate:a,latencyHint:"interactive"}):(e.Xb=null,console.log("sokol_audio.h: no WebAudio support"));return e.Xb?(console.log("sokol_audio.h: sample rate ",e.Xb.sampleRate),e.cc=e.Xb.createScriptProcessor(c,0,b),e.cc.onaudioprocess=function(d){var f=
d.outputBuffer.length,h=Ob(f);if(h)for(var g=d.outputBuffer.numberOfChannels,l=0;l<g;l++)for(var n=d.outputBuffer.getChannelData(l),p=0;p<f;p++)n[p]=I[(h>>2)+(g*p+l)]},e.cc.connect(e.Xb.destination),a=function(){e.Xb&&"suspended"===e.Xb.state&&e.Xb.resume()},document.addEventListener("click",a,{once:!0}),document.addEventListener("touchstart",a,{once:!0}),document.addEventListener("keydown",a,{once:!0}),1):0},cb:function(){return e.Xb?e.Xb.sampleRate:0},ma:function(a,b,c,d,f,h){b=F(b);var g=new XMLHttpRequest;
g.open("GET",b);g.responseType="arraybuffer";var l=0<d;l&&g.setRequestHeader("Range","bytes="+c+"-"+(c+d));g.onreadystatechange=function(){if(this.readyState==this.DONE)if(206==this.status||200==this.status&&!l){var n=new Uint8Array(g.response),p=n.length;p<=h?(E.set(n,f),Pb(a,d,p)):Qb(a)}else Rb(a,this.status)};g.send()},ab:function(a,b){b=F(b);var c=new XMLHttpRequest;c.open("HEAD",b);c.onreadystatechange=function(){if(this.readyState==this.DONE)if(200==this.status){var d=this.getResponseHeader("Content-Length");
Sb(a,d)}else Rb(a,this.status)};c.send()},table:la};
(function(){function a(f){e.asm=f.exports;K--;e.monitorRunDependencies&&e.monitorRunDependencies(K);0==K&&(null!==Ha&&(clearInterval(Ha),Ha=null),L&&(f=L,L=null,f()))}function b(f){a(f.instance)}function c(f){return Ma().then(function(h){return WebAssembly.instantiate(h,d)}).then(f,function(h){y("failed to asynchronously prepare wasm: "+h);x(h)})}var d={a:Tb};K++;e.monitorRunDependencies&&e.monitorRunDependencies(K);if(e.instantiateWasm)try{return e.instantiateWasm(d,a)}catch(f){return y("Module.instantiateWasm callback failed with error: "+
f),!1}(function(){if(z||"function"!==typeof WebAssembly.instantiateStreaming||Ja()||Ia("file://")||"function"!==typeof fetch)return c(b);fetch(M,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,d).then(b,function(h){y("wasm streaming compile failed: "+h);y("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
var Na=e.___wasm_call_ctors=function(){return(Na=e.___wasm_call_ctors=e.asm.ob).apply(null,arguments)},Q=e._malloc=function(){return(Q=e._malloc=e.asm.pb).apply(null,arguments)},Nb=e.__sapp_emsc_notify_keyboard_hidden=function(){return(Nb=e.__sapp_emsc_notify_keyboard_hidden=e.asm.qb).apply(null,arguments)};e.___em_js__sapp_js_create_textfield=function(){return(e.___em_js__sapp_js_create_textfield=e.asm.rb).apply(null,arguments)};
e.___em_js__sapp_js_focus_textfield=function(){return(e.___em_js__sapp_js_focus_textfield=e.asm.sb).apply(null,arguments)};e.___em_js__sapp_js_unfocus_textfield=function(){return(e.___em_js__sapp_js_unfocus_textfield=e.asm.tb).apply(null,arguments)};e.__sapp_emsc_onpaste=function(){return(e.__sapp_emsc_onpaste=e.asm.ub).apply(null,arguments)};var Mb=e.__sapp_html5_get_ask_leave_site=function(){return(Mb=e.__sapp_html5_get_ask_leave_site=e.asm.vb).apply(null,arguments)};
e.___em_js__sapp_add_js_hook_beforeunload=function(){return(e.___em_js__sapp_add_js_hook_beforeunload=e.asm.wb).apply(null,arguments)};e.___em_js__sapp_remove_js_hook_beforeunload=function(){return(e.___em_js__sapp_remove_js_hook_beforeunload=e.asm.xb).apply(null,arguments)};e.___em_js__sapp_add_js_hook_clipboard=function(){return(e.___em_js__sapp_add_js_hook_clipboard=e.asm.yb).apply(null,arguments)};
e.___em_js__sapp_remove_js_hook_clipboard=function(){return(e.___em_js__sapp_remove_js_hook_clipboard=e.asm.zb).apply(null,arguments)};e.___em_js__sapp_js_write_clipboard=function(){return(e.___em_js__sapp_js_write_clipboard=e.asm.Ab).apply(null,arguments)};e.___em_js___sapp_emsc_request_pointerlock=function(){return(e.___em_js___sapp_emsc_request_pointerlock=e.asm.Bb).apply(null,arguments)};
e.___em_js___sapp_emsc_exit_pointerlock=function(){return(e.___em_js___sapp_emsc_exit_pointerlock=e.asm.Cb).apply(null,arguments)};e._main=function(){return(e._main=e.asm.Db).apply(null,arguments)};e.___em_js__stm_js_perfnow=function(){return(e.___em_js__stm_js_perfnow=e.asm.Eb).apply(null,arguments)};var Ob=e.__saudio_emsc_pull=function(){return(Ob=e.__saudio_emsc_pull=e.asm.Fb).apply(null,arguments)};e.___em_js__saudio_js_init=function(){return(e.___em_js__saudio_js_init=e.asm.Gb).apply(null,arguments)};
e.___em_js__saudio_js_shutdown=function(){return(e.___em_js__saudio_js_shutdown=e.asm.Hb).apply(null,arguments)};e.___em_js__saudio_js_sample_rate=function(){return(e.___em_js__saudio_js_sample_rate=e.asm.Ib).apply(null,arguments)};e.___em_js__saudio_js_buffer_frames=function(){return(e.___em_js__saudio_js_buffer_frames=e.asm.Jb).apply(null,arguments)};e.___em_js__sfetch_js_send_head_request=function(){return(e.___em_js__sfetch_js_send_head_request=e.asm.Kb).apply(null,arguments)};
e.___em_js__sfetch_js_send_get_request=function(){return(e.___em_js__sfetch_js_send_get_request=e.asm.Lb).apply(null,arguments)};
var Sb=e.__sfetch_emsc_head_response=function(){return(Sb=e.__sfetch_emsc_head_response=e.asm.Mb).apply(null,arguments)},Pb=e.__sfetch_emsc_get_response=function(){return(Pb=e.__sfetch_emsc_get_response=e.asm.Nb).apply(null,arguments)},Rb=e.__sfetch_emsc_failed_http_status=function(){return(Rb=e.__sfetch_emsc_failed_http_status=e.asm.Ob).apply(null,arguments)},Qb=e.__sfetch_emsc_failed_buffer_too_small=function(){return(Qb=e.__sfetch_emsc_failed_buffer_too_small=e.asm.Pb).apply(null,arguments)},qa=
e.stackSave=function(){return(qa=e.stackSave=e.asm.Qb).apply(null,arguments)},ra=e.stackRestore=function(){return(ra=e.stackRestore=e.asm.Rb).apply(null,arguments)},C=e.stackAlloc=function(){return(C=e.stackAlloc=e.asm.Sb).apply(null,arguments)};e.dynCall_vi=function(){return(e.dynCall_vi=e.asm.Tb).apply(null,arguments)};e.dynCall_v=function(){return(e.dynCall_v=e.asm.Ub).apply(null,arguments)};
var R=e.dynCall_iiii=function(){return(R=e.dynCall_iiii=e.asm.Vb).apply(null,arguments)},Lb=e.dynCall_idi=function(){return(Lb=e.dynCall_idi=e.asm.Wb).apply(null,arguments)},Ub;function ja(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}L=function Vb(){Ub||Wb();Ub||(L=Vb)};
function Wb(a){function b(){if(!Ub&&(Ub=!0,e.calledRun=!0,!ma)){Aa(Ca);Aa(Da);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(Xb){var c=a,d=e._main;c=c||[];var f=c.length+1,h=C(4*(f+1));H[h>>2]=ua(aa);for(var g=1;g<f;g++)H[(h>>2)+g]=ua(c[g-1]);H[(h>>2)+f]=0;try{var l=d(f,h);if(!noExitRuntime||0!==l){if(!noExitRuntime&&(ma=!0,e.onExit))e.onExit(l);t(l,new ja(l))}}catch(n){n instanceof ja||("unwind"==n?noExitRuntime=!0:((c=n)&&"object"===typeof n&&n.stack&&(c=[n,n.stack]),y("exception thrown: "+
c),t(1,n)))}finally{}}if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;)c=e.postRun.shift(),Fa.unshift(c);Aa(Fa)}}a=a||r;if(!(0<K)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Ga();Aa(Ba);0<K||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);b()},1)):b())}}e.run=Wb;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();
var Xb=!0;e.noInitialRun&&(Xb=!1);noExitRuntime=!0;Wb();
