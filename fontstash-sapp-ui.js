
var e;e||(e=typeof Module !== 'undefined' ? Module : {});var k={},l;for(l in e)e.hasOwnProperty(l)&&(k[l]=e[l]);var r=[],aa="./this.program";function t(a,b){throw b;}var ca=!1,u=!1,da=!1,ea=!1;ca="object"===typeof window;u="function"===typeof importScripts;da="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;ea=!ca&&!da&&!u;var v="",fa,w,ha,ia;
if(da)v=u?require("path").dirname(v)+"/":__dirname+"/",fa=function(a,b){ha||(ha=require("fs"));ia||(ia=require("path"));a=ia.normalize(a);return ha.readFileSync(a,b?null:"utf8")},w=function(a){a=fa(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/")),r=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=e),process.on("uncaughtException",function(a){if(!(a instanceof ja))throw a;}),process.on("unhandledRejection",
x),t=function(a){process.exit(a)},e.inspect=function(){return"[Emscripten Module object]"};else if(ea)"undefined"!=typeof read&&(fa=function(a){return read(a)}),w=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?r=scriptArgs:"undefined"!=typeof arguments&&(r=arguments),"function"===typeof quit&&(t=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===typeof console&&
(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(ca||u)u?v=self.location.href:document.currentScript&&(v=document.currentScript.src),v=0!==v.indexOf("blob:")?v.substr(0,v.lastIndexOf("/")+1):"",fa=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},u&&(w=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});
var ka=e.print||console.log.bind(console),y=e.printErr||console.warn.bind(console);for(l in k)k.hasOwnProperty(l)&&(e[l]=k[l]);k=null;e.arguments&&(r=e.arguments);e.thisProgram&&(aa=e.thisProgram);e.quit&&(t=e.quit);var z;e.wasmBinary&&(z=e.wasmBinary);var noExitRuntime;e.noExitRuntime&&(noExitRuntime=e.noExitRuntime);"object"!==typeof WebAssembly&&x("no native wasm support detected");var B,la=new WebAssembly.Table({initial:102,maximum:102,element:"anyfunc"}),ma=!1;
function assert(a,b){a||x("Assertion failed: "+b)}function na(){var a=e.__sapp_emsc_onpaste;assert(a,"Cannot call unknown function _sapp_emsc_onpaste, make sure it is exported");return a}
function oa(a){var b=["string"],c={string:function(n){var p=0;if(null!==n&&void 0!==n&&0!==n){var q=(n.length<<2)+1;p=C(q);D(n,E,p,q)}return p},array:function(n){var p=C(n.length);pa.set(n,p);return p}},d=na(),f=[],h=0;if(a)for(var g=0;g<a.length;g++){var m=c[b[g]];m?(0===h&&(h=qa()),f[g]=m(a[g])):f[g]=a[g]}d.apply(null,f);0!==h&&ra(h)}var sa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function ta(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&sa)return sa.decode(a.subarray(b,c));for(d="";b<c;){var f=a[b++];if(f&128){var h=a[b++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|h);else{var g=a[b++]&63;f=224==(f&240)?(f&15)<<12|h<<6|g:(f&7)<<18|h<<12|g<<6|a[b++]&63;65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else d+=String.fromCharCode(f)}return d}function F(a,b){return a?ta(E,a,b):""}
function D(a,b,c,d){if(!(0<d))return 0;var f=c;d=c+d-1;for(var h=0;h<a.length;++h){var g=a.charCodeAt(h);if(55296<=g&&57343>=g){var m=a.charCodeAt(++h);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-f}
function ua(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function va(a){var b=ua(a)+1,c=C(b);D(a,pa,c,b);return c}var G,pa,E,wa,xa,H,ya,I,J;
function za(a){G=a;e.HEAP8=pa=new Int8Array(a);e.HEAP16=wa=new Int16Array(a);e.HEAP32=H=new Int32Array(a);e.HEAPU8=E=new Uint8Array(a);e.HEAPU16=xa=new Uint16Array(a);e.HEAPU32=ya=new Uint32Array(a);e.HEAPF32=I=new Float32Array(a);e.HEAPF64=J=new Float64Array(a)}var Aa=e.INITIAL_MEMORY||33554432;e.wasmMemory?B=e.wasmMemory:B=new WebAssembly.Memory({initial:Aa/65536,maximum:32768});B&&(G=B.buffer);Aa=G.byteLength;za(G);H[1115544]=9705216;
function Ba(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(e);else{var c=b.Ac;"number"===typeof c?void 0===b.mc?e.dynCall_v(c):e.dynCall_vi(c,b.mc):c(void 0===b.mc?null:b.mc)}}}var Ca=[],Da=[],Ea=[],Fa=[],Ga=[];function Ha(){var a=e.preRun.shift();Ca.unshift(a)}var K=0,Ia=null,L=null;e.preloadedImages={};e.preloadedAudios={};function x(a){if(e.onAbort)e.onAbort(a);ka(a);y(a);ma=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}
function Ja(a){var b=M;return String.prototype.startsWith?b.startsWith(a):0===b.indexOf(a)}function Ka(){return Ja("data:application/octet-stream;base64,")}var M="fontstash-sapp-ui.wasm";if(!Ka()){var La=M;M=e.locateFile?e.locateFile(La,v):v+La}function Ma(){try{if(z)return new Uint8Array(z);if(w)return w(M);throw"both async and sync fetching of the wasm failed";}catch(a){x(a)}}
function Na(){return z||!ca&&!u||"function"!==typeof fetch||Ja("file://")?new Promise(function(a){a(Ma())}):fetch(M,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+M+"'";return a.arrayBuffer()}).catch(function(){return Ma()})}Da.push({Ac:function(){Oa()}});var Pa=[null,[],[]],Qa={};function Ra(){for(var a=N.length-1;0<=a;--a)Sa(a);N=[];Ta=[]}var Ta=[];
function Ua(){if(Va.tc&&Wa.kc)for(var a=0;a<Ta.length;++a){var b=Ta[a];Ta.splice(a,1);--a;b.Pc.apply(null,b.Fc)}}var N=[];function Sa(a){var b=N[a];b.target.removeEventListener(b.cc,b.yc,b.dc);N.splice(a,1)}function O(a){function b(d){++Va.tc;Wa=a;Ua();a.hc(d);Ua();--Va.tc}if(a.ec)a.yc=b,a.target.addEventListener(a.cc,b,a.dc),N.push(a),Xa||(Fa.push(Ra),Xa=!0);else for(var c=0;c<N.length;++c)N[c].target==a.target&&N[c].cc==a.cc&&Sa(c--)}
var Va={},Xa,Wa,Ya,Za,$a,ab,bb,cb,db=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function P(a){a=2<a?F(a):a;return db[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}function eb(a){return 0>db.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}
function fb(a,b,c,d,f,h){Ya||(Ya=Q(164));a={target:P(a),kc:!0,cc:h,ec:d,hc:function(g){var m=Ya,n=m>>2;H[n]=g.location;H[n+1]=g.ctrlKey;H[n+2]=g.shiftKey;H[n+3]=g.altKey;H[n+4]=g.metaKey;H[n+5]=g.repeat;H[n+6]=g.charCode;H[n+7]=g.keyCode;H[n+8]=g.which;D(g.key||"",E,m+36,32);D(g.code||"",E,m+68,32);D(g.char||"",E,m+100,32);D(g.locale||"",E,m+132,32);R(d,f,m,b)&&g.preventDefault()},dc:c};O(a)}
function gb(a,b,c){a>>=2;H[a]=b.screenX;H[a+1]=b.screenY;H[a+2]=b.clientX;H[a+3]=b.clientY;H[a+4]=b.ctrlKey;H[a+5]=b.shiftKey;H[a+6]=b.altKey;H[a+7]=b.metaKey;wa[2*a+16]=b.button;wa[2*a+17]=b.buttons;H[a+9]=b.movementX;H[a+10]=b.movementY;c=eb(c);H[a+11]=b.clientX-c.left;H[a+12]=b.clientY-c.top}function hb(a,b,c,d,f,h){Za||(Za=Q(64));a=P(a);O({target:a,kc:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,cc:h,ec:d,hc:function(g){g=g||event;gb(Za,g,a);R(d,f,Za,b)&&g.preventDefault()},dc:c})}
function ib(a,b,c,d,f){$a||($a=Q(260));O({target:a,cc:f,ec:d,hc:function(h){h=h||event;var g=$a,m=document.pointerLockElement||document.oc||document.rc||document.qc;H[g>>2]=!!m;var n=m&&m.id?m.id:"";D(m?m==window?"#window":m==screen?"#screen":m&&m.nodeName?m.nodeName:"":"",E,g+4,128);D(n,E,g+132,128);R(d,20,g,b)&&h.preventDefault()},dc:c})}function jb(a,b,c,d,f){O({target:a,cc:f,ec:d,hc:function(h){h=h||event;R(d,38,0,b)&&h.preventDefault()},dc:c})}
function kb(a,b,c,d){ab||(ab=Q(36));a=P(a);O({target:a,cc:"resize",ec:d,hc:function(f){f=f||event;if(f.target==a){var h=ab,g=document.body;H[h>>2]=f.detail;H[h+4>>2]=g.clientWidth;H[h+8>>2]=g.clientHeight;H[h+12>>2]=innerWidth;H[h+16>>2]=innerHeight;H[h+20>>2]=outerWidth;H[h+24>>2]=outerHeight;H[h+28>>2]=pageXOffset;H[h+32>>2]=pageYOffset;R(d,10,h,b)&&f.preventDefault()}},dc:c})}
function lb(a,b,c,d,f,h){bb||(bb=Q(1684));a=P(a);O({target:a,kc:"touchstart"==h||"touchend"==h,cc:h,ec:d,hc:function(g){for(var m={},n=g.touches,p=0;p<n.length;++p){var q=n[p];m[q.identifier]=q}n=g.changedTouches;for(p=0;p<n.length;++p)q=n[p],q.Cc=1,m[q.identifier]=q;n=g.targetTouches;for(p=0;p<n.length;++p)m[n[p].identifier].Dc=1;n=bb;q=n>>2;H[q+1]=g.ctrlKey;H[q+2]=g.shiftKey;H[q+3]=g.altKey;H[q+4]=g.metaKey;q+=5;var ba=eb(a),sb=0;for(p in m){var A=m[p];H[q]=A.identifier;H[q+1]=A.screenX;H[q+2]=
A.screenY;H[q+3]=A.clientX;H[q+4]=A.clientY;H[q+5]=A.pageX;H[q+6]=A.pageY;H[q+7]=A.Cc;H[q+8]=A.Dc;H[q+9]=A.clientX-ba.left;H[q+10]=A.clientY-ba.top;q+=13;if(31<++sb)break}H[n>>2]=sb;R(d,f,n,b)&&g.preventDefault()},dc:c})}function mb(a,b,c,d,f,h){a={target:P(a),cc:h,ec:d,hc:function(g){g=g||event;R(d,f,0,b)&&g.preventDefault()},dc:c};O(a)}
function nb(a,b,c,d){cb||(cb=Q(96));O({target:a,kc:!0,cc:"wheel",ec:d,hc:function(f){f=f||event;var h=cb;gb(h,f,a);J[h+64>>3]=f.deltaX;J[h+72>>3]=f.deltaY;J[h+80>>3]=f.deltaZ;H[h+88>>2]=f.deltaMode;R(d,9,h,b)&&f.preventDefault()},dc:c})}
function ob(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,f,h){b.drawArraysInstancedANGLE(c,d,f,h)},a.drawElementsInstanced=function(c,d,f,h,g){b.drawElementsInstancedANGLE(c,d,f,h,g)})}
function pb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function qb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function rb(a){a.Hc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}var tb=1,ub=[],S=[],vb=[],wb=[],xb=[],T=[],U=[],yb=[],zb=[],Ab={},Bb={},Cb={};function V(a){Db||(Db=a)}function W(a){for(var b=tb++,c=a.length;c<b;c++)a[c]=null;return b}
function Eb(a){a||(a=X);if(!a.Bc){a.Bc=!0;var b=a.lc;ob(b);pb(b);qb(b);rb(b);b.Ic=b.getExtension("EXT_disjoint_timer_query");var c="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod EXT_texture_norm16 WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2 WEBKIT_WEBGL_compressed_texture_pvrtc".split(" ");(b.getSupportedExtensions()||
[]).forEach(function(d){-1!=c.indexOf(d)&&b.getExtension(d)})}}var Db,X,Fb=["default","low-power","high-performance"];function Gb(a,b,c,d){for(var f=0;f<a;f++){var h=Y[c](),g=h&&W(d);h?(h.name=g,d[g]=h):V(1282);H[b+4*f>>2]=g}}
function Hb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=Y.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>X.version){V(1282);return}c=2*(Y.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>X.version){V(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=Y.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":V(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:V(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)H[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(f){V(1280);y("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+f+")");return}}break;default:V(1280);y("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}H[b>>2]=c}else V(1281)}
function Ib(a){var b=ua(a)+1,c=Q(b);D(a,E,c,b);return c}function Jb(a){a-=5120;return 0==a?pa:1==a?E:2==a?wa:4==a?H:6==a?I:5==a||28922==a||28520==a||30779==a||30782==a?ya:xa}function Kb(a){return 31-Math.clz32(a.BYTES_PER_ELEMENT)}function Lb(a,b,c,d,f){a=Jb(a);var h=Kb(a);return a.subarray(f>>h,f+d*(c*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[b-6402]||1)*(1<<h)+4-1&-4)>>h)}for(var Z=[],Y,Mb=new Float32Array(288),Nb=0;288>Nb;++Nb)Z[Nb]=Mb.subarray(0,Nb+1);
var Vb={ka:function(){return 0},gb:function(){return 0},hb:function(){},_sapp_emsc_exit_pointerlock:function(){document.exitPointerLock&&document.exitPointerLock()},A:function(a){a=F(a);var b=document.getElementById(a);b?b.requestPointerLock?b.requestPointerLock():console.log("sokol_app.h: target doesn't doesn't support pointer lock:"+a):console.log("sokol_app.h: invalid target:"+a)},X:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},va:function(a,b,c){a=P(a);if(!a)return-4;
a=eb(a);J[b>>3]=a.width;J[c>>3]=a.height;return 0},db:function(a,b,c){E.copyWithin(a,b,b+c)},Ra:function(a,b){function c(d){Ob(a,d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},eb:function(a){a>>>=0;var b=E.length;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(16777216,a,d);0<d%65536&&(d+=65536-d%65536);a:{try{B.grow(Math.min(2147483648,d)-G.byteLength+65535>>>16);za(B.buffer);var f=1;break a}catch(h){}f=void 0}if(f)return!0}return!1},
W:function(a,b,c){a=P(a);if(!a)return-4;a.width=b;a.height=c;return 0},ga:function(a,b,c,d){fb(a,b,c,d,2,"keydown");return 0},ea:function(a,b,c,d){fb(a,b,c,d,1,"keypress");return 0},fa:function(a,b,c,d){fb(a,b,c,d,3,"keyup");return 0},ua:function(a,b,c,d){hb(a,b,c,d,5,"mousedown");return 0},ja:function(a,b,c,d){hb(a,b,c,d,33,"mouseenter");return 0},ia:function(a,b,c,d){hb(a,b,c,d,34,"mouseleave");return 0},na:function(a,b,c,d){hb(a,b,c,d,8,"mousemove");return 0},ra:function(a,b,c,d){hb(a,b,c,d,6,
"mouseup");return 0},$:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.oc||document.body.rc||document.body.qc))return-1;a=P(a);if(!a)return-4;ib(a,b,c,d,"pointerlockchange");ib(a,b,c,d,"mozpointerlockchange");ib(a,b,c,d,"webkitpointerlockchange");ib(a,b,c,d,"mspointerlockchange");return 0},_:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.oc||document.body.rc||document.body.qc))return-1;a=P(a);if(!a)return-4;jb(a,
b,c,d,"pointerlockerror");jb(a,b,c,d,"mozpointerlockerror");jb(a,b,c,d,"webkitpointerlockerror");jb(a,b,c,d,"mspointerlockerror");return 0},bb:function(a,b,c,d){kb(a,b,c,d);return 0},aa:function(a,b,c,d){lb(a,b,c,d,25,"touchcancel");return 0},ba:function(a,b,c,d){lb(a,b,c,d,23,"touchend");return 0},ca:function(a,b,c,d){lb(a,b,c,d,24,"touchmove");return 0},da:function(a,b,c,d){lb(a,b,c,d,22,"touchstart");return 0},Z:function(a,b,c,d){mb(a,b,c,d,31,"webglcontextlost");return 0},Y:function(a,b,c,d){mb(a,
b,c,d,32,"webglcontextrestored");return 0},ha:function(a,b,c,d){a=P(a);return"undefined"!==typeof a.onwheel?(nb(a,b,c,d),0):-1},H:function(a,b){var c={};b>>=2;c.alpha=!!H[b];c.depth=!!H[b+1];c.stencil=!!H[b+2];c.antialias=!!H[b+3];c.premultipliedAlpha=!!H[b+4];c.preserveDrawingBuffer=!!H[b+5];c.powerPreference=Fb[H[b+6]];c.failIfMajorPerformanceCaveat=!!H[b+7];c.uc=H[b+8];c.Mc=H[b+9];c.sc=H[b+10];c.zc=H[b+11];c.Nc=H[b+12];c.Oc=H[b+13];if(a=P(a))if(c.zc)c=-1;else if(a=1<c.uc?a.getContext("webgl2",
c):a.getContext("webgl",c)){b=W(zb);var d={Lc:b,attributes:c,version:c.uc,lc:a};a.canvas&&(a.canvas.Ec=d);zb[b]=d;("undefined"===typeof c.sc||c.sc)&&Eb(d);c=b}else c=0;else c=-4;return c},Aa:function(a,b){a=zb[a];b=F(b);0==b.indexOf("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&ob(Y);"OES_vertex_array_object"==b&&pb(Y);"WEBGL_draw_buffers"==b&&qb(Y);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&rb(Y);return!!a.lc.getExtension(b)},Qa:function(a){a>>=2;for(var b=0;14>b;++b)H[a+b]=0;H[a]=
H[a+1]=H[a+3]=H[a+4]=H[a+8]=H[a+10]=1},Ga:function(a){X=zb[a];e.Gc=Y=X&&X.lc;return!a||Y?0:-5},ma:function(){return 0},fb:function(a,b,c,d){a=Qa.Kc(a);b=Qa.Jc(a,b,c);H[d>>2]=b;return 0},cb:function(){},la:function(a,b,c,d){for(var f=0,h=0;h<c;h++){for(var g=H[b+8*h>>2],m=H[b+(8*h+4)>>2],n=0;n<m;n++){var p=E[g+n],q=Pa[a];0===p||10===p?((1===a?ka:y)(ta(q,0)),q.length=0):q.push(p)}f+=m}H[d>>2]=f;return 0},f:function(a){Y.activeTexture(a)},G:function(a,b){Y.attachShader(S[a],U[b])},b:function(a,b){35051==
a?Y.pc=b:35052==a&&(Y.fc=b);Y.bindBuffer(a,ub[b])},h:function(a,b){Y.bindFramebuffer(a,vb[b])},K:function(a,b){Y.bindRenderbuffer(a,wb[b])},a:function(a,b){Y.bindTexture(a,xb[b])},V:function(a){Y.bindVertexArray(yb[a])},R:function(a,b,c,d){Y.blendColor(a,b,c,d)},S:function(a,b){Y.blendEquationSeparate(a,b)},T:function(a,b,c,d){Y.blendFuncSeparate(a,b,c,d)},s:function(a,b,c,d,f,h,g,m,n,p){Y.blitFramebuffer(a,b,c,d,f,h,g,m,n,p)},M:function(a,b,c,d){2<=X.version?c?Y.bufferData(a,E,d,c,b):Y.bufferData(a,
b,d):Y.bufferData(a,c?E.subarray(c,c+b):b,d)},j:function(a,b,c,d){2<=X.version?Y.bufferSubData(a,b,E,d,c):Y.bufferSubData(a,b,E.subarray(d,d+c))},tb:function(a){Y.clear(a)},za:function(a,b,c,d){Y.clearColor(a,b,c,d)},ya:function(a){Y.clearDepth(a)},xa:function(a){Y.clearStencil(a)},w:function(a,b,c,d){Y.colorMask(!!a,!!b,!!c,!!d)},Da:function(a){Y.compileShader(U[a])},Na:function(a,b,c,d,f,h,g,m){2<=X.version?Y.fc?Y.compressedTexImage2D(a,b,c,d,f,h,g,m):Y.compressedTexImage2D(a,b,c,d,f,h,E,m,g):Y.compressedTexImage2D(a,
b,c,d,f,h,m?E.subarray(m,m+g):null)},La:function(a,b,c,d,f,h,g,m,n){Y.fc?Y.compressedTexImage3D(a,b,c,d,f,h,g,m,n):Y.compressedTexImage3D(a,b,c,d,f,h,g,E,n,m)},Ja:function(){var a=W(S),b=Y.createProgram();b.name=a;S[a]=b;return a},Fa:function(a){var b=W(U);U[b]=Y.createShader(a);return b},O:function(a){Y.cullFace(a)},C:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],f=ub[d];f&&(Y.deleteBuffer(f),f.name=0,ub[d]=null,d==Y.pc&&(Y.pc=0),d==Y.fc&&(Y.fc=0))}},i:function(a,b){for(var c=0;c<a;++c){var d=
H[b+4*c>>2],f=vb[d];f&&(Y.deleteFramebuffer(f),f.name=0,vb[d]=null)}},u:function(a){if(a){var b=S[a];b?(Y.deleteProgram(b),b.name=0,S[a]=null,Ab[a]=null):V(1281)}},n:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],f=wb[d];f&&(Y.deleteRenderbuffer(f),f.name=0,wb[d]=null)}},v:function(a){if(a){var b=U[a];b?(Y.deleteShader(b),U[a]=null):V(1281)}},B:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],f=xb[d];f&&(Y.deleteTexture(f),f.name=0,xb[d]=null)}},Va:function(a,b){for(var c=0;c<a;c++){var d=
H[b+4*c>>2];Y.deleteVertexArray(yb[d]);yb[d]=null}},z:function(a){Y.depthFunc(a)},y:function(a){Y.depthMask(!!a)},c:function(a){Y.disable(a)},U:function(a){Y.disableVertexAttribArray(a)},jb:function(a,b,c){Y.drawArrays(a,b,c)},kb:function(a,b,c,d){Y.drawElements(a,b,c,d)},g:function(a){Y.enable(a)},qb:function(a){Y.enableVertexAttribArray(a)},P:function(a){Y.frontFace(a)},N:function(a,b){Gb(a,b,"createBuffer",ub)},L:function(a,b){Gb(a,b,"createRenderbuffer",wb)},Oa:function(a,b){Gb(a,b,"createTexture",
xb)},Ua:function(a,b){Gb(a,b,"createVertexArray",yb)},Ba:function(a,b){return Y.getAttribLocation(S[a],F(b))},d:function(a,b){Hb(a,b)},Ha:function(a,b,c,d){a=Y.getProgramInfoLog(S[a]);null===a&&(a="(unknown error)");b=0<b&&d?D(a,E,d,b):0;c&&(H[c>>2]=b)},F:function(a,b,c){if(c)if(a>=tb)V(1281);else{var d=Ab[a];if(d)if(35716==b)a=Y.getProgramInfoLog(S[a]),null===a&&(a="(unknown error)"),H[c>>2]=a.length+1;else if(35719==b)H[c>>2]=d.nc;else if(35722==b){if(-1==d.ic){a=S[a];var f=Y.getProgramParameter(a,
35721);for(b=d.ic=0;b<f;++b)d.ic=Math.max(d.ic,Y.getActiveAttrib(a,b).name.length+1)}H[c>>2]=d.ic}else if(35381==b){if(-1==d.jc)for(a=S[a],f=Y.getProgramParameter(a,35382),b=d.jc=0;b<f;++b)d.jc=Math.max(d.jc,Y.getActiveUniformBlockName(a,b).length+1);H[c>>2]=d.jc}else H[c>>2]=Y.getProgramParameter(S[a],b);else V(1282)}else V(1281)},Ca:function(a,b,c,d){a=Y.getShaderInfoLog(U[a]);null===a&&(a="(unknown error)");b=0<b&&d?D(a,E,d,b):0;c&&(H[c>>2]=b)},D:function(a,b,c){c?35716==b?(a=Y.getShaderInfoLog(U[a]),
null===a&&(a="(unknown error)"),H[c>>2]=a.length+1):35720==b?(a=Y.getShaderSource(U[a]),H[c>>2]=null===a||0==a.length?0:a.length+1):H[c>>2]=Y.getShaderParameter(U[a],b):V(1281)},Xa:function(a){if(Bb[a])return Bb[a];switch(a){case 7939:var b=Y.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Ib(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Y.getParameter(a))||V(1280);b=Ib(b);break;case 7938:b=Y.getParameter(7938);b=2<=X.version?"OpenGL ES 3.0 ("+b+")":
"OpenGL ES 2.0 ("+b+")";b=Ib(b);break;case 35724:b=Y.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Ib(b);break;default:return V(1280),0}return Bb[a]=b},Wa:function(a,b){if(2>X.version)return V(1282),0;var c=Cb[a];if(c)return 0>b||b>=c.length?(V(1281),0):c[b];switch(a){case 7939:return c=Y.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return Ib(d)}),
c=Cb[a]=c,0>b||b>=c.length?(V(1281),0):c[b];default:return V(1280),0}},o:function(a,b){b=F(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,d)}return(a=Ab[a]&&Ab[a].xc[b])&&0<=c&&c<a[0]?a[1]+c:-1},Ia:function(a){Y.linkProgram(S[a]);var b=S[a];a=Ab[a]={xc:{},nc:0,ic:-1,jc:-1};for(var c=a.xc,d=Y.getProgramParameter(b,35718),f=0;f<d;++f){var h=Y.getActiveUniform(b,f),g=h.name;a.nc=Math.max(a.nc,g.length+1);"]"==g.slice(-1)&&(g=g.slice(0,g.lastIndexOf("[")));
var m=Y.getUniformLocation(b,g);if(m){var n=W(T);c[g]=[h.size,n];T[n]=m;for(var p=1;p<h.size;++p)m=Y.getUniformLocation(b,g+"["+p+"]"),n=W(T),T[n]=m}}},Q:function(a,b){Y.polygonOffset(a,b)},t:function(a){Y.readBuffer(a)},Pa:function(a,b,c,d){Y.renderbufferStorage(a,b,c,d)},J:function(a,b,c,d,f){Y.renderbufferStorageMultisample(a,b,c,d,f)},k:function(a,b,c,d){Y.scissor(a,b,c,d)},Ea:function(a,b,c,d){for(var f="",h=0;h<b;++h){var g=d?H[d+4*h>>2]:-1;f+=F(H[c+4*h>>2],0>g?void 0:g)}Y.shaderSource(U[a],
f)},Ta:function(a,b,c){Y.stencilFunc(a,b,c)},ta:function(a,b,c,d){Y.stencilFuncSeparate(a,b,c,d)},x:function(a){Y.stencilMask(a)},Sa:function(a,b,c){Y.stencilOp(a,b,c)},sa:function(a,b,c,d){Y.stencilOpSeparate(a,b,c,d)},Ma:function(a,b,c,d,f,h,g,m,n){if(2<=X.version)if(Y.fc)Y.texImage2D(a,b,c,d,f,h,g,m,n);else if(n){var p=Jb(m);Y.texImage2D(a,b,c,d,f,h,g,m,p,n>>Kb(p))}else Y.texImage2D(a,b,c,d,f,h,g,m,null);else Y.texImage2D(a,b,c,d,f,h,g,m,n?Lb(m,g,d,f,n):null)},Ka:function(a,b,c,d,f,h,g,m,n,p){if(Y.fc)Y.texImage3D(a,
b,c,d,f,h,g,m,n,p);else if(p){var q=Jb(n);Y.texImage3D(a,b,c,d,f,h,g,m,n,q,p>>Kb(q))}else Y.texImage3D(a,b,c,d,f,h,g,m,n,null)},I:function(a,b,c){Y.texParameterf(a,b,c)},e:function(a,b,c){Y.texParameteri(a,b,c)},qa:function(a,b,c,d,f,h,g,m,n){if(2<=X.version)if(Y.fc)Y.texSubImage2D(a,b,c,d,f,h,g,m,n);else if(n){var p=Jb(m);Y.texSubImage2D(a,b,c,d,f,h,g,m,p,n>>Kb(p))}else Y.texSubImage2D(a,b,c,d,f,h,g,m,null);else p=null,n&&(p=Lb(m,g,f,h,n)),Y.texSubImage2D(a,b,c,d,f,h,g,m,p)},pa:function(a,b,c,d,
f,h,g,m,n,p,q){if(Y.fc)Y.texSubImage3D(a,b,c,d,f,h,g,m,n,p,q);else if(q){var ba=Jb(p);Y.texSubImage3D(a,b,c,d,f,h,g,m,n,p,ba,q>>Kb(ba))}else Y.texSubImage3D(a,b,c,d,f,h,g,m,n,p,null)},pb:function(a,b,c){if(2<=X.version)Y.uniform1fv(T[a],I,c>>2,b);else{if(288>=b)for(var d=Z[b-1],f=0;f<b;++f)d[f]=I[c+4*f>>2];else d=I.subarray(c>>2,c+4*b>>2);Y.uniform1fv(T[a],d)}},E:function(a,b){Y.uniform1i(T[a],b)},ob:function(a,b,c){if(2<=X.version)Y.uniform2fv(T[a],I,c>>2,2*b);else{if(144>=b)for(var d=Z[2*b-1],f=
0;f<2*b;f+=2)d[f]=I[c+4*f>>2],d[f+1]=I[c+(4*f+4)>>2];else d=I.subarray(c>>2,c+8*b>>2);Y.uniform2fv(T[a],d)}},nb:function(a,b,c){if(2<=X.version)Y.uniform3fv(T[a],I,c>>2,3*b);else{if(96>=b)for(var d=Z[3*b-1],f=0;f<3*b;f+=3)d[f]=I[c+4*f>>2],d[f+1]=I[c+(4*f+4)>>2],d[f+2]=I[c+(4*f+8)>>2];else d=I.subarray(c>>2,c+12*b>>2);Y.uniform3fv(T[a],d)}},mb:function(a,b,c){if(2<=X.version)Y.uniform4fv(T[a],I,c>>2,4*b);else{if(72>=b){var d=Z[4*b-1],f=I;c>>=2;for(var h=0;h<4*b;h+=4){var g=c+h;d[h]=f[g];d[h+1]=f[g+
1];d[h+2]=f[g+2];d[h+3]=f[g+3]}}else d=I.subarray(c>>2,c+16*b>>2);Y.uniform4fv(T[a],d)}},lb:function(a,b,c,d){if(2<=X.version)Y.uniformMatrix4fv(T[a],!!c,I,d>>2,16*b);else{if(18>=b){var f=Z[16*b-1],h=I;d>>=2;for(var g=0;g<16*b;g+=16){var m=d+g;f[g]=h[m];f[g+1]=h[m+1];f[g+2]=h[m+2];f[g+3]=h[m+3];f[g+4]=h[m+4];f[g+5]=h[m+5];f[g+6]=h[m+6];f[g+7]=h[m+7];f[g+8]=h[m+8];f[g+9]=h[m+9];f[g+10]=h[m+10];f[g+11]=h[m+11];f[g+12]=h[m+12];f[g+13]=h[m+13];f[g+14]=h[m+14];f[g+15]=h[m+15]}}else f=I.subarray(d>>2,d+
64*b>>2);Y.uniformMatrix4fv(T[a],!!c,f)}},m:function(a){Y.useProgram(S[a])},rb:function(a,b){Y.vertexAttribDivisor(a,b)},sb:function(a,b,c,d,f,h){Y.vertexAttribPointer(a,b,c,!!d,f,h)},l:function(a,b,c,d){Y.viewport(a,b,c,d)},memory:B,ab:function(){e.vc=function(a){0!=Pb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",e.vc)},$a:function(){e.wc=function(a){a=a.clipboardData.getData("text");oa([a])};window.addEventListener("paste",e.wc)},r:function(){var a=document.createElement("input");
a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Qb()});document.body.append(a)},q:function(){document.getElementById("_sokol_app_input_element").focus()},p:function(){document.getElementById("_sokol_app_input_element").blur()},Ya:function(a){a=F(a);var b=document.createElement("textarea");b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");b.setAttribute("spellcheck","false");
b.style.left="-100px";b.style.top="-100px";b.style.height=1;b.style.width=1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");document.body.removeChild(b)},_a:function(){window.removeEventListener("beforeunload",e.vc)},Za:function(){window.removeEventListener("paste",e.wc)},wa:function(a,b,c,d,f,h){b=F(b);var g=new XMLHttpRequest;g.open("GET",b);g.responseType="arraybuffer";var m=0<d;m&&g.setRequestHeader("Range","bytes="+c+"-"+(c+d));g.onreadystatechange=function(){if(this.readyState==
this.DONE)if(206==this.status||200==this.status&&!m){var n=new Uint8Array(g.response),p=n.length;p<=h?(E.set(n,f),Rb(a,d,p)):Sb(a)}else Tb(a,this.status)};g.send()},ib:function(a,b){b=F(b);var c=new XMLHttpRequest;c.open("HEAD",b);c.onreadystatechange=function(){if(this.readyState==this.DONE)if(200==this.status){var d=this.getResponseHeader("Content-Length");Ub(a,d)}else Tb(a,this.status)};c.send()},oa:function(){return navigator.userAgent.includes("Macintosh")?1:0},table:la};
(function(){function a(f){e.asm=f.exports;K--;e.monitorRunDependencies&&e.monitorRunDependencies(K);0==K&&(null!==Ia&&(clearInterval(Ia),Ia=null),L&&(f=L,L=null,f()))}function b(f){a(f.instance)}function c(f){return Na().then(function(h){return WebAssembly.instantiate(h,d)}).then(f,function(h){y("failed to asynchronously prepare wasm: "+h);x(h)})}var d={a:Vb};K++;e.monitorRunDependencies&&e.monitorRunDependencies(K);if(e.instantiateWasm)try{return e.instantiateWasm(d,a)}catch(f){return y("Module.instantiateWasm callback failed with error: "+
f),!1}(function(){if(z||"function"!==typeof WebAssembly.instantiateStreaming||Ka()||Ja("file://")||"function"!==typeof fetch)return c(b);fetch(M,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,d).then(b,function(h){y("wasm streaming compile failed: "+h);y("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
var Oa=e.___wasm_call_ctors=function(){return(Oa=e.___wasm_call_ctors=e.asm.ub).apply(null,arguments)},Q=e._malloc=function(){return(Q=e._malloc=e.asm.vb).apply(null,arguments)},Qb=e.__sapp_emsc_notify_keyboard_hidden=function(){return(Qb=e.__sapp_emsc_notify_keyboard_hidden=e.asm.wb).apply(null,arguments)};e.___em_js__sapp_js_create_textfield=function(){return(e.___em_js__sapp_js_create_textfield=e.asm.xb).apply(null,arguments)};
e.___em_js__sapp_js_focus_textfield=function(){return(e.___em_js__sapp_js_focus_textfield=e.asm.yb).apply(null,arguments)};e.___em_js__sapp_js_unfocus_textfield=function(){return(e.___em_js__sapp_js_unfocus_textfield=e.asm.zb).apply(null,arguments)};e.__sapp_emsc_onpaste=function(){return(e.__sapp_emsc_onpaste=e.asm.Ab).apply(null,arguments)};var Pb=e.__sapp_html5_get_ask_leave_site=function(){return(Pb=e.__sapp_html5_get_ask_leave_site=e.asm.Bb).apply(null,arguments)};
e.___em_js__sapp_add_js_hook_beforeunload=function(){return(e.___em_js__sapp_add_js_hook_beforeunload=e.asm.Cb).apply(null,arguments)};e.___em_js__sapp_remove_js_hook_beforeunload=function(){return(e.___em_js__sapp_remove_js_hook_beforeunload=e.asm.Db).apply(null,arguments)};e.___em_js__sapp_add_js_hook_clipboard=function(){return(e.___em_js__sapp_add_js_hook_clipboard=e.asm.Eb).apply(null,arguments)};
e.___em_js__sapp_remove_js_hook_clipboard=function(){return(e.___em_js__sapp_remove_js_hook_clipboard=e.asm.Fb).apply(null,arguments)};e.___em_js__sapp_js_write_clipboard=function(){return(e.___em_js__sapp_js_write_clipboard=e.asm.Gb).apply(null,arguments)};e.___em_js___sapp_emsc_request_pointerlock=function(){return(e.___em_js___sapp_emsc_request_pointerlock=e.asm.Hb).apply(null,arguments)};
e.___em_js___sapp_emsc_exit_pointerlock=function(){return(e.___em_js___sapp_emsc_exit_pointerlock=e.asm.Ib).apply(null,arguments)};e._main=function(){return(e._main=e.asm.Jb).apply(null,arguments)};e.___em_js__stm_js_perfnow=function(){return(e.___em_js__stm_js_perfnow=e.asm.Kb).apply(null,arguments)};e.__saudio_emsc_pull=function(){return(e.__saudio_emsc_pull=e.asm.Lb).apply(null,arguments)};e.___em_js__saudio_js_init=function(){return(e.___em_js__saudio_js_init=e.asm.Mb).apply(null,arguments)};
e.___em_js__saudio_js_shutdown=function(){return(e.___em_js__saudio_js_shutdown=e.asm.Nb).apply(null,arguments)};e.___em_js__saudio_js_sample_rate=function(){return(e.___em_js__saudio_js_sample_rate=e.asm.Ob).apply(null,arguments)};e.___em_js__saudio_js_buffer_frames=function(){return(e.___em_js__saudio_js_buffer_frames=e.asm.Pb).apply(null,arguments)};e.___em_js__sfetch_js_send_head_request=function(){return(e.___em_js__sfetch_js_send_head_request=e.asm.Qb).apply(null,arguments)};
e.___em_js__sfetch_js_send_get_request=function(){return(e.___em_js__sfetch_js_send_get_request=e.asm.Rb).apply(null,arguments)};
var Ub=e.__sfetch_emsc_head_response=function(){return(Ub=e.__sfetch_emsc_head_response=e.asm.Sb).apply(null,arguments)},Rb=e.__sfetch_emsc_get_response=function(){return(Rb=e.__sfetch_emsc_get_response=e.asm.Tb).apply(null,arguments)},Tb=e.__sfetch_emsc_failed_http_status=function(){return(Tb=e.__sfetch_emsc_failed_http_status=e.asm.Ub).apply(null,arguments)},Sb=e.__sfetch_emsc_failed_buffer_too_small=function(){return(Sb=e.__sfetch_emsc_failed_buffer_too_small=e.asm.Vb).apply(null,arguments)};
e.___em_js__simgui_js_is_osx=function(){return(e.___em_js__simgui_js_is_osx=e.asm.Wb).apply(null,arguments)};var qa=e.stackSave=function(){return(qa=e.stackSave=e.asm.Xb).apply(null,arguments)},ra=e.stackRestore=function(){return(ra=e.stackRestore=e.asm.Yb).apply(null,arguments)},C=e.stackAlloc=function(){return(C=e.stackAlloc=e.asm.Zb).apply(null,arguments)};e.dynCall_vi=function(){return(e.dynCall_vi=e.asm._b).apply(null,arguments)};
var R=e.dynCall_iiii=function(){return(R=e.dynCall_iiii=e.asm.$b).apply(null,arguments)};e.dynCall_v=function(){return(e.dynCall_v=e.asm.ac).apply(null,arguments)};var Ob=e.dynCall_idi=function(){return(Ob=e.dynCall_idi=e.asm.bc).apply(null,arguments)},Wb;function ja(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}L=function Xb(){Wb||Yb();Wb||(L=Xb)};
function Yb(a){function b(){if(!Wb&&(Wb=!0,e.calledRun=!0,!ma)){Ba(Da);Ba(Ea);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(Zb){var c=a,d=e._main;c=c||[];var f=c.length+1,h=C(4*(f+1));H[h>>2]=va(aa);for(var g=1;g<f;g++)H[(h>>2)+g]=va(c[g-1]);H[(h>>2)+f]=0;try{var m=d(f,h);if(!noExitRuntime||0!==m){if(!noExitRuntime&&(ma=!0,e.onExit))e.onExit(m);t(m,new ja(m))}}catch(n){n instanceof ja||("unwind"==n?noExitRuntime=!0:((c=n)&&"object"===typeof n&&n.stack&&(c=[n,n.stack]),y("exception thrown: "+
c),t(1,n)))}finally{}}if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;)c=e.postRun.shift(),Ga.unshift(c);Ba(Ga)}}a=a||r;if(!(0<K)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Ha();Ba(Ca);0<K||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);b()},1)):b())}}e.run=Yb;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();
var Zb=!0;e.noInitialRun&&(Zb=!1);noExitRuntime=!0;Yb();
