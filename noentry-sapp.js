
var e;e||(e=typeof Module !== 'undefined' ? Module : {});var k={},l;for(l in e)e.hasOwnProperty(l)&&(k[l]=e[l]);var r=[],aa="./this.program";function t(a,b){throw b;}var ba=!1,u=!1,ca=!1,da=!1;ba="object"===typeof window;u="function"===typeof importScripts;ca="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;da=!ba&&!ca&&!u;var v="",ea,w,fa,ha;
if(ca)v=u?require("path").dirname(v)+"/":__dirname+"/",ea=function(a,b){fa||(fa=require("fs"));ha||(ha=require("path"));a=ha.normalize(a);return fa.readFileSync(a,b?null:"utf8")},w=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/")),r=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=e),process.on("uncaughtException",function(a){if(!(a instanceof ia))throw a;}),process.on("unhandledRejection",
x),t=function(a){process.exit(a)},e.inspect=function(){return"[Emscripten Module object]"};else if(da)"undefined"!=typeof read&&(ea=function(a){return read(a)}),w=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?r=scriptArgs:"undefined"!=typeof arguments&&(r=arguments),"function"===typeof quit&&(t=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===typeof console&&
(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(ba||u)u?v=self.location.href:document.currentScript&&(v=document.currentScript.src),v=0!==v.indexOf("blob:")?v.substr(0,v.lastIndexOf("/")+1):"",ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},u&&(w=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});
var ja=e.print||console.log.bind(console),y=e.printErr||console.warn.bind(console);for(l in k)k.hasOwnProperty(l)&&(e[l]=k[l]);k=null;e.arguments&&(r=e.arguments);e.thisProgram&&(aa=e.thisProgram);e.quit&&(t=e.quit);var z;e.wasmBinary&&(z=e.wasmBinary);var noExitRuntime;e.noExitRuntime&&(noExitRuntime=e.noExitRuntime);"object"!==typeof WebAssembly&&x("no native wasm support detected");var B,ka=new WebAssembly.Table({initial:20,maximum:20,element:"anyfunc"}),la=!1;
function assert(a,b){a||x("Assertion failed: "+b)}function ma(){var a=e.__sapp_emsc_onpaste;assert(a,"Cannot call unknown function _sapp_emsc_onpaste, make sure it is exported");return a}
function na(a){var b=["string"],c={string:function(n){var q=0;if(null!==n&&void 0!==n&&0!==n){var p=(n.length<<2)+1;q=C(p);D(n,E,q,p)}return q},array:function(n){var q=C(n.length);oa.set(n,q);return q}},d=ma(),f=[],h=0;if(a)for(var g=0;g<a.length;g++){var m=c[b[g]];m?(0===h&&(h=pa()),f[g]=m(a[g])):f[g]=a[g]}d.apply(null,f);0!==h&&qa(h)}var ra="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function F(a,b){if(a){var c=E,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&ra)a=ra.decode(c.subarray(a,b));else{for(d="";a<b;){var f=c[a++];if(f&128){var h=c[a++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|h);else{var g=c[a++]&63;f=224==(f&240)?(f&15)<<12|h<<6|g:(f&7)<<18|h<<12|g<<6|c[a++]&63;65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else d+=String.fromCharCode(f)}a=d}}else a="";return a}
function D(a,b,c,d){if(!(0<d))return 0;var f=c;d=c+d-1;for(var h=0;h<a.length;++h){var g=a.charCodeAt(h);if(55296<=g&&57343>=g){var m=a.charCodeAt(++h);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-f}
function sa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function ta(a){var b=sa(a)+1,c=C(b);D(a,oa,c,b);return c}var G,oa,E,ua,H,I,J;
function va(a){G=a;e.HEAP8=oa=new Int8Array(a);e.HEAP16=ua=new Int16Array(a);e.HEAP32=H=new Int32Array(a);e.HEAPU8=E=new Uint8Array(a);e.HEAPU16=new Uint16Array(a);e.HEAPU32=new Uint32Array(a);e.HEAPF32=I=new Float32Array(a);e.HEAPF64=J=new Float64Array(a)}var wa=e.INITIAL_MEMORY||33554432;e.wasmMemory?B=e.wasmMemory:B=new WebAssembly.Memory({initial:wa/65536,maximum:32768});B&&(G=B.buffer);wa=G.byteLength;va(G);H[7128]=5271552;
function xa(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(e);else{var c=b.Wb;"number"===typeof c?void 0===b.Hb?e.dynCall_v(c):e.dynCall_vi(c,b.Hb):c(void 0===b.Hb?null:b.Hb)}}}var ya=[],za=[],Aa=[],Ba=[],Ca=[];function Da(){var a=e.preRun.shift();ya.unshift(a)}var K=0,Ea=null,L=null;e.preloadedImages={};e.preloadedAudios={};function x(a){if(e.onAbort)e.onAbort(a);ja(a);y(a);la=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}
function Fa(a){var b=M;return String.prototype.startsWith?b.startsWith(a):0===b.indexOf(a)}function Ga(){return Fa("data:application/octet-stream;base64,")}var M="noentry-sapp.wasm";if(!Ga()){var Ha=M;M=e.locateFile?e.locateFile(Ha,v):v+Ha}function Ia(){try{if(z)return new Uint8Array(z);if(w)return w(M);throw"both async and sync fetching of the wasm failed";}catch(a){x(a)}}
function Ja(){return z||!ba&&!u||"function"!==typeof fetch||Fa("file://")?new Promise(function(a){a(Ia())}):fetch(M,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+M+"'";return a.arrayBuffer()}).catch(function(){return Ia()})}za.push({Wb:function(){Ka()}});function La(){for(var a=N.length-1;0<=a;--a)Ma(a);N=[];Na=[]}var Na=[];function Oa(){if(Pa.Ob&&Qa.Fb)for(var a=0;a<Na.length;++a){var b=Na[a];Na.splice(a,1);--a;b.jc.apply(null,b.ac)}}var N=[];
function Ma(a){var b=N[a];b.target.removeEventListener(b.zb,b.Ub,b.Ab);N.splice(a,1)}function O(a){function b(d){++Pa.Ob;Qa=a;Oa();a.Cb(d);Oa();--Pa.Ob}if(a.Bb)a.Ub=b,a.target.addEventListener(a.zb,b,a.Ab),N.push(a),Ra||(Ba.push(La),Ra=!0);else for(var c=0;c<N.length;++c)N[c].target==a.target&&N[c].zb==a.zb&&Ma(c--)}var Pa={},Ra,Qa,Sa,Ta,Ua,Va,Wa,Xa,Ya=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];
function P(a){a=2<a?F(a):a;return Ya[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}function Za(a){return 0>Ya.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}
function $a(a,b,c,d,f,h){Sa||(Sa=Q(164));a={target:P(a),Fb:!0,zb:h,Bb:d,Cb:function(g){var m=Sa,n=m>>2;H[n]=g.location;H[n+1]=g.ctrlKey;H[n+2]=g.shiftKey;H[n+3]=g.altKey;H[n+4]=g.metaKey;H[n+5]=g.repeat;H[n+6]=g.charCode;H[n+7]=g.keyCode;H[n+8]=g.which;D(g.key||"",E,m+36,32);D(g.code||"",E,m+68,32);D(g.char||"",E,m+100,32);D(g.locale||"",E,m+132,32);R(d,f,m,b)&&g.preventDefault()},Ab:c};O(a)}
function ab(a,b,c){a>>=2;H[a]=b.screenX;H[a+1]=b.screenY;H[a+2]=b.clientX;H[a+3]=b.clientY;H[a+4]=b.ctrlKey;H[a+5]=b.shiftKey;H[a+6]=b.altKey;H[a+7]=b.metaKey;ua[2*a+16]=b.button;ua[2*a+17]=b.buttons;H[a+9]=b.movementX;H[a+10]=b.movementY;c=Za(c);H[a+11]=b.clientX-c.left;H[a+12]=b.clientY-c.top}function bb(a,b,c,d,f,h){Ta||(Ta=Q(64));a=P(a);O({target:a,Fb:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,zb:h,Bb:d,Cb:function(g){g=g||event;ab(Ta,g,a);R(d,f,Ta,b)&&g.preventDefault()},Ab:c})}
function cb(a,b,c,d,f){Ua||(Ua=Q(260));O({target:a,zb:f,Bb:d,Cb:function(h){h=h||event;var g=Ua,m=document.pointerLockElement||document.Tb||document.Kb||document.Jb;H[g>>2]=!!m;var n=m&&m.id?m.id:"";D(m?m==window?"#window":m==screen?"#screen":m&&m.nodeName?m.nodeName:"":"",E,g+4,128);D(n,E,g+132,128);R(d,20,g,b)&&h.preventDefault()},Ab:c})}function db(a,b,c,d,f){O({target:a,zb:f,Bb:d,Cb:function(h){h=h||event;R(d,38,0,b)&&h.preventDefault()},Ab:c})}
function eb(a,b,c,d){Va||(Va=Q(36));a=P(a);O({target:a,zb:"resize",Bb:d,Cb:function(f){f=f||event;if(f.target==a){var h=Va,g=document.body;H[h>>2]=f.detail;H[h+4>>2]=g.clientWidth;H[h+8>>2]=g.clientHeight;H[h+12>>2]=innerWidth;H[h+16>>2]=innerHeight;H[h+20>>2]=outerWidth;H[h+24>>2]=outerHeight;H[h+28>>2]=pageXOffset;H[h+32>>2]=pageYOffset;R(d,10,h,b)&&f.preventDefault()}},Ab:c})}
function fb(a,b,c,d,f,h){Wa||(Wa=Q(1684));a=P(a);O({target:a,Fb:"touchstart"==h||"touchend"==h,zb:h,Bb:d,Cb:function(g){for(var m={},n=g.touches,q=0;q<n.length;++q){var p=n[q];m[p.identifier]=p}n=g.changedTouches;for(q=0;q<n.length;++q)p=n[q],p.Yb=1,m[p.identifier]=p;n=g.targetTouches;for(q=0;q<n.length;++q)m[n[q].identifier].Zb=1;n=Wa;p=n>>2;H[p+1]=g.ctrlKey;H[p+2]=g.shiftKey;H[p+3]=g.altKey;H[p+4]=g.metaKey;p+=5;var hb=Za(a),ib=0;for(q in m){var A=m[q];H[p]=A.identifier;H[p+1]=A.screenX;H[p+2]=
A.screenY;H[p+3]=A.clientX;H[p+4]=A.clientY;H[p+5]=A.pageX;H[p+6]=A.pageY;H[p+7]=A.Yb;H[p+8]=A.Zb;H[p+9]=A.clientX-hb.left;H[p+10]=A.clientY-hb.top;p+=13;if(31<++ib)break}H[n>>2]=ib;R(d,f,n,b)&&g.preventDefault()},Ab:c})}function gb(a,b,c,d,f,h){a={target:P(a),zb:h,Bb:d,Cb:function(g){g=g||event;R(d,f,0,b)&&g.preventDefault()},Ab:c};O(a)}
function jb(a,b,c,d){Xa||(Xa=Q(96));O({target:a,Fb:!0,zb:"wheel",Bb:d,Cb:function(f){f=f||event;var h=Xa;ab(h,f,a);J[h+64>>3]=f.deltaX;J[h+72>>3]=f.deltaY;J[h+80>>3]=f.deltaZ;H[h+88>>2]=f.deltaMode;R(d,9,h,b)&&f.preventDefault()},Ab:c})}
function kb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,f,h){b.drawArraysInstancedANGLE(c,d,f,h)},a.drawElementsInstanced=function(c,d,f,h,g){b.drawElementsInstancedANGLE(c,d,f,h,g)})}
function lb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function mb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function nb(a){a.cc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}var ob=1,pb=[],S=[],qb=[],rb=[],sb=[],T=[],U=[],tb=[],ub=[],vb={},wb={},xb={};function V(a){yb||(yb=a)}function W(a){for(var b=ob++,c=a.length;c<b;c++)a[c]=null;return b}
function zb(a){a||(a=X);if(!a.Xb){a.Xb=!0;var b=a.Gb;kb(b);lb(b);mb(b);nb(b);b.dc=b.getExtension("EXT_disjoint_timer_query");var c="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod EXT_texture_norm16 WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2 WEBKIT_WEBGL_compressed_texture_pvrtc".split(" ");(b.getSupportedExtensions()||
[]).forEach(function(d){-1!=c.indexOf(d)&&b.getExtension(d)})}}var yb,X,Ab=["default","low-power","high-performance"];function Bb(a,b,c,d){for(var f=0;f<a;f++){var h=Y[c](),g=h&&W(d);h?(h.name=g,d[g]=h):V(1282);H[b+4*f>>2]=g}}
function Cb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=Y.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>X.version){V(1282);return}c=2*(Y.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>X.version){V(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=Y.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":V(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:V(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)H[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(f){V(1280);y("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+f+")");return}}break;default:V(1280);y("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}H[b>>2]=c}else V(1281)}
function Db(a){var b=sa(a)+1,c=Q(b);D(a,E,c,b);return c}for(var Z=[],Y,Eb=new Float32Array(288),Fb=0;288>Fb;++Fb)Z[Fb]=Eb.subarray(0,Fb+1);
var Jb={_sapp_emsc_exit_pointerlock:function(){document.exitPointerLock&&document.exitPointerLock()},u:function(a){a=F(a);var b=document.getElementById(a);b?b.requestPointerLock?b.requestPointerLock():console.log("sokol_app.h: target doesn't doesn't support pointer lock:"+a):console.log("sokol_app.h: invalid target:"+a)},X:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},ga:function(a,b,c){a=P(a);if(!a)return-4;a=Za(a);J[b>>3]=a.width;J[c>>3]=a.height;return 0},Va:function(a,
b,c){E.copyWithin(a,b,b+c)},Ma:function(a,b){function c(d){Gb(a,d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},Wa:function(a){a>>>=0;var b=E.length;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(16777216,a,d);0<d%65536&&(d+=65536-d%65536);a:{try{B.grow(Math.min(2147483648,d)-G.byteLength+65535>>>16);va(B.buffer);var f=1;break a}catch(h){}f=void 0}if(f)return!0}return!1},Q:function(a,b,c){a=P(a);if(!a)return-4;a.width=b;a.height=
c;return 0},aa:function(a,b,c,d){$a(a,b,c,d,2,"keydown");return 0},_:function(a,b,c,d){$a(a,b,c,d,1,"keypress");return 0},$:function(a,b,c,d){$a(a,b,c,d,3,"keyup");return 0},v:function(a,b,c,d){bb(a,b,c,d,5,"mousedown");return 0},da:function(a,b,c,d){bb(a,b,c,d,33,"mouseenter");return 0},ca:function(a,b,c,d){bb(a,b,c,d,34,"mouseleave");return 0},ea:function(a,b,c,d){bb(a,b,c,d,8,"mousemove");return 0},fa:function(a,b,c,d){bb(a,b,c,d,6,"mouseup");return 0},U:function(a,b,c,d){if(!document||!document.body||
!(document.body.requestPointerLock||document.body.Tb||document.body.Kb||document.body.Jb))return-1;a=P(a);if(!a)return-4;cb(a,b,c,d,"pointerlockchange");cb(a,b,c,d,"mozpointerlockchange");cb(a,b,c,d,"webkitpointerlockchange");cb(a,b,c,d,"mspointerlockchange");return 0},T:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.Tb||document.body.Kb||document.body.Jb))return-1;a=P(a);if(!a)return-4;db(a,b,c,d,"pointerlockerror");db(a,b,c,d,"mozpointerlockerror");db(a,b,c,d,
"webkitpointerlockerror");db(a,b,c,d,"mspointerlockerror");return 0},Xa:function(a,b,c,d){eb(a,b,c,d);return 0},V:function(a,b,c,d){fb(a,b,c,d,25,"touchcancel");return 0},W:function(a,b,c,d){fb(a,b,c,d,23,"touchend");return 0},Y:function(a,b,c,d){fb(a,b,c,d,24,"touchmove");return 0},Z:function(a,b,c,d){fb(a,b,c,d,22,"touchstart");return 0},S:function(a,b,c,d){gb(a,b,c,d,31,"webglcontextlost");return 0},R:function(a,b,c,d){gb(a,b,c,d,32,"webglcontextrestored");return 0},ba:function(a,b,c,d){a=P(a);
return"undefined"!==typeof a.onwheel?(jb(a,b,c,d),0):-1},F:function(a,b){var c={};b>>=2;c.alpha=!!H[b];c.depth=!!H[b+1];c.stencil=!!H[b+2];c.antialias=!!H[b+3];c.premultipliedAlpha=!!H[b+4];c.preserveDrawingBuffer=!!H[b+5];c.powerPreference=Ab[H[b+6]];c.failIfMajorPerformanceCaveat=!!H[b+7];c.Pb=H[b+8];c.fc=H[b+9];c.Nb=H[b+10];c.Vb=H[b+11];c.hc=H[b+12];c.ic=H[b+13];if(a=P(a))if(c.Vb)c=-1;else if(a=1<c.Pb?a.getContext("webgl2",c):a.getContext("webgl",c)){b=W(ub);var d={ec:b,attributes:c,version:c.Pb,
Gb:a};a.canvas&&(a.canvas.$b=d);ub[b]=d;("undefined"===typeof c.Nb||c.Nb)&&zb(d);c=b}else c=0;else c=-4;return c},xa:function(a,b){a=ub[a];b=F(b);0==b.indexOf("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&kb(Y);"OES_vertex_array_object"==b&&lb(Y);"WEBGL_draw_buffers"==b&&mb(Y);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&nb(Y);return!!a.Gb.getExtension(b)},Ja:function(a){a>>=2;for(var b=0;14>b;++b)H[a+b]=0;H[a]=H[a+1]=H[a+3]=H[a+4]=H[a+8]=H[a+10]=1},Fa:function(a){X=ub[a];e.bc=Y=X&&
X.Gb;return!a||Y?0:-5},j:function(a){Y.activeTexture(a)},D:function(a,b){Y.attachShader(S[a],U[b])},d:function(a,b){35051==a?Y.Lb=b:35052==a&&(Y.Mb=b);Y.bindBuffer(a,pb[b])},f:function(a,b){Y.bindFramebuffer(a,qb[b])},a:function(a,b){Y.bindTexture(a,sb[b])},P:function(a){Y.bindVertexArray(tb[a])},L:function(a,b,c,d){Y.blendColor(a,b,c,d)},M:function(a,b){Y.blendEquationSeparate(a,b)},N:function(a,b,c,d){Y.blendFuncSeparate(a,b,c,d)},n:function(a,b,c,d,f,h,g,m,n,q){Y.blitFramebuffer(a,b,c,d,f,h,g,
m,n,q)},G:function(a,b,c,d){2<=X.version?c?Y.bufferData(a,E,d,c,b):Y.bufferData(a,b,d):Y.bufferData(a,c?E.subarray(c,c+b):b,d)},E:function(a,b,c,d){2<=X.version?Y.bufferSubData(a,b,E,d,c):Y.bufferSubData(a,b,E.subarray(d,d+c))},ra:function(a){Y.clear(a)},ua:function(a,b,c,d){Y.clearColor(a,b,c,d)},ta:function(a){Y.clearDepth(a)},sa:function(a){Y.clearStencil(a)},q:function(a,b,c,d){Y.colorMask(!!a,!!b,!!c,!!d)},Ca:function(a){Y.compileShader(U[a])},Ia:function(){var a=W(S),b=Y.createProgram();b.name=
a;S[a]=b;return a},Ea:function(a){var b=W(U);U[b]=Y.createShader(a);return b},I:function(a){Y.cullFace(a)},za:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],f=pb[d];f&&(Y.deleteBuffer(f),f.name=0,pb[d]=null,d==Y.Lb&&(Y.Lb=0),d==Y.Mb&&(Y.Mb=0))}},g:function(a,b){for(var c=0;c<a;++c){var d=H[b+4*c>>2],f=qb[d];f&&(Y.deleteFramebuffer(f),f.name=0,qb[d]=null)}},B:function(a){if(a){var b=S[a];b?(Y.deleteProgram(b),b.name=0,S[a]=null,vb[a]=null):V(1281)}},y:function(a,b){for(var c=0;c<a;c++){var d=
H[b+4*c>>2],f=rb[d];f&&(Y.deleteRenderbuffer(f),f.name=0,rb[d]=null)}},p:function(a){if(a){var b=U[a];b?(Y.deleteShader(b),U[a]=null):V(1281)}},ya:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],f=sb[d];f&&(Y.deleteTexture(f),f.name=0,sb[d]=null)}},Oa:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2];Y.deleteVertexArray(tb[d]);tb[d]=null}},t:function(a){Y.depthFunc(a)},s:function(a){Y.depthMask(!!a)},b:function(a){Y.disable(a)},O:function(a){Y.disableVertexAttribArray(a)},ha:function(a,b,
c){Y.drawArrays(a,b,c)},ia:function(a,b,c,d){Y.drawElements(a,b,c,d)},e:function(a){Y.enable(a)},oa:function(a){Y.enableVertexAttribArray(a)},J:function(a){Y.frontFace(a)},H:function(a,b){Bb(a,b,"createBuffer",pb)},Na:function(a,b){Bb(a,b,"createVertexArray",tb)},Aa:function(a,b){return Y.getAttribLocation(S[a],F(b))},c:function(a,b){Cb(a,b)},Ga:function(a,b,c,d){a=Y.getProgramInfoLog(S[a]);null===a&&(a="(unknown error)");b=0<b&&d?D(a,E,d,b):0;c&&(H[c>>2]=b)},C:function(a,b,c){if(c)if(a>=ob)V(1281);
else{var d=vb[a];if(d)if(35716==b)a=Y.getProgramInfoLog(S[a]),null===a&&(a="(unknown error)"),H[c>>2]=a.length+1;else if(35719==b)H[c>>2]=d.Ib;else if(35722==b){if(-1==d.Db){a=S[a];var f=Y.getProgramParameter(a,35721);for(b=d.Db=0;b<f;++b)d.Db=Math.max(d.Db,Y.getActiveAttrib(a,b).name.length+1)}H[c>>2]=d.Db}else if(35381==b){if(-1==d.Eb)for(a=S[a],f=Y.getProgramParameter(a,35382),b=d.Eb=0;b<f;++b)d.Eb=Math.max(d.Eb,Y.getActiveUniformBlockName(a,b).length+1);H[c>>2]=d.Eb}else H[c>>2]=Y.getProgramParameter(S[a],
b);else V(1282)}else V(1281)},Ba:function(a,b,c,d){a=Y.getShaderInfoLog(U[a]);null===a&&(a="(unknown error)");b=0<b&&d?D(a,E,d,b):0;c&&(H[c>>2]=b)},z:function(a,b,c){c?35716==b?(a=Y.getShaderInfoLog(U[a]),null===a&&(a="(unknown error)"),H[c>>2]=a.length+1):35720==b?(a=Y.getShaderSource(U[a]),H[c>>2]=null===a||0==a.length?0:a.length+1):H[c>>2]=Y.getShaderParameter(U[a],b):V(1281)},Qa:function(a){if(wb[a])return wb[a];switch(a){case 7939:var b=Y.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+
d}));b=Db(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Y.getParameter(a))||V(1280);b=Db(b);break;case 7938:b=Y.getParameter(7938);b=2<=X.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Db(b);break;case 35724:b=Y.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Db(b);break;default:return V(1280),0}return wb[a]=b},Pa:function(a,b){if(2>X.version)return V(1282),
0;var c=xb[a];if(c)return 0>b||b>=c.length?(V(1281),0):c[b];switch(a){case 7939:return c=Y.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return Db(d)}),c=xb[a]=c,0>b||b>=c.length?(V(1281),0):c[b];default:return V(1280),0}},i:function(a,b){b=F(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,d)}return(a=vb[a]&&vb[a].Sb[b])&&0<=c&&c<a[0]?a[1]+c:-1},Ha:function(a){Y.linkProgram(S[a]);var b=S[a];
a=vb[a]={Sb:{},Ib:0,Db:-1,Eb:-1};for(var c=a.Sb,d=Y.getProgramParameter(b,35718),f=0;f<d;++f){var h=Y.getActiveUniform(b,f),g=h.name;a.Ib=Math.max(a.Ib,g.length+1);"]"==g.slice(-1)&&(g=g.slice(0,g.lastIndexOf("[")));var m=Y.getUniformLocation(b,g);if(m){var n=W(T);c[g]=[h.size,n];T[n]=m;for(var q=1;q<h.size;++q)m=Y.getUniformLocation(b,g+"["+q+"]"),n=W(T),T[n]=m}}},K:function(a,b){Y.polygonOffset(a,b)},o:function(a){Y.readBuffer(a)},va:function(a,b,c,d){Y.scissor(a,b,c,d)},Da:function(a,b,c,d){for(var f=
"",h=0;h<b;++h){var g=d?H[d+4*h>>2]:-1;f+=F(H[c+4*h>>2],0>g?void 0:g)}Y.shaderSource(U[a],f)},La:function(a,b,c){Y.stencilFunc(a,b,c)},x:function(a,b,c,d){Y.stencilFuncSeparate(a,b,c,d)},r:function(a){Y.stencilMask(a)},Ka:function(a,b,c){Y.stencilOp(a,b,c)},w:function(a,b,c,d){Y.stencilOpSeparate(a,b,c,d)},na:function(a,b,c){if(2<=X.version)Y.uniform1fv(T[a],I,c>>2,b);else{if(288>=b)for(var d=Z[b-1],f=0;f<b;++f)d[f]=I[c+4*f>>2];else d=I.subarray(c>>2,c+4*b>>2);Y.uniform1fv(T[a],d)}},A:function(a,
b){Y.uniform1i(T[a],b)},ma:function(a,b,c){if(2<=X.version)Y.uniform2fv(T[a],I,c>>2,2*b);else{if(144>=b)for(var d=Z[2*b-1],f=0;f<2*b;f+=2)d[f]=I[c+4*f>>2],d[f+1]=I[c+(4*f+4)>>2];else d=I.subarray(c>>2,c+8*b>>2);Y.uniform2fv(T[a],d)}},la:function(a,b,c){if(2<=X.version)Y.uniform3fv(T[a],I,c>>2,3*b);else{if(96>=b)for(var d=Z[3*b-1],f=0;f<3*b;f+=3)d[f]=I[c+4*f>>2],d[f+1]=I[c+(4*f+4)>>2],d[f+2]=I[c+(4*f+8)>>2];else d=I.subarray(c>>2,c+12*b>>2);Y.uniform3fv(T[a],d)}},ka:function(a,b,c){if(2<=X.version)Y.uniform4fv(T[a],
I,c>>2,4*b);else{if(72>=b){var d=Z[4*b-1],f=I;c>>=2;for(var h=0;h<4*b;h+=4){var g=c+h;d[h]=f[g];d[h+1]=f[g+1];d[h+2]=f[g+2];d[h+3]=f[g+3]}}else d=I.subarray(c>>2,c+16*b>>2);Y.uniform4fv(T[a],d)}},ja:function(a,b,c,d){if(2<=X.version)Y.uniformMatrix4fv(T[a],!!c,I,d>>2,16*b);else{if(18>=b){var f=Z[16*b-1],h=I;d>>=2;for(var g=0;g<16*b;g+=16){var m=d+g;f[g]=h[m];f[g+1]=h[m+1];f[g+2]=h[m+2];f[g+3]=h[m+3];f[g+4]=h[m+4];f[g+5]=h[m+5];f[g+6]=h[m+6];f[g+7]=h[m+7];f[g+8]=h[m+8];f[g+9]=h[m+9];f[g+10]=h[m+10];
f[g+11]=h[m+11];f[g+12]=h[m+12];f[g+13]=h[m+13];f[g+14]=h[m+14];f[g+15]=h[m+15]}}else f=I.subarray(d>>2,d+64*b>>2);Y.uniformMatrix4fv(T[a],!!c,f)}},h:function(a){Y.useProgram(S[a])},pa:function(a,b){Y.vertexAttribDivisor(a,b)},qa:function(a,b,c,d,f,h){Y.vertexAttribPointer(a,b,c,!!d,f,h)},wa:function(a,b,c,d){Y.viewport(a,b,c,d)},memory:B,Ua:function(){e.Qb=function(a){0!=Hb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",e.Qb)},Ta:function(){e.Rb=function(a){a=a.clipboardData.getData("text");
na([a])};window.addEventListener("paste",e.Rb)},m:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Ib()});document.body.append(a)},l:function(){document.getElementById("_sokol_app_input_element").focus()},k:function(){document.getElementById("_sokol_app_input_element").blur()},Sa:function(){window.removeEventListener("beforeunload",e.Qb)},Ra:function(){window.removeEventListener("paste",
e.Rb)},table:ka};
(function(){function a(f){e.asm=f.exports;K--;e.monitorRunDependencies&&e.monitorRunDependencies(K);0==K&&(null!==Ea&&(clearInterval(Ea),Ea=null),L&&(f=L,L=null,f()))}function b(f){a(f.instance)}function c(f){return Ja().then(function(h){return WebAssembly.instantiate(h,d)}).then(f,function(h){y("failed to asynchronously prepare wasm: "+h);x(h)})}var d={a:Jb};K++;e.monitorRunDependencies&&e.monitorRunDependencies(K);if(e.instantiateWasm)try{return e.instantiateWasm(d,a)}catch(f){return y("Module.instantiateWasm callback failed with error: "+f),
!1}(function(){if(z||"function"!==typeof WebAssembly.instantiateStreaming||Ga()||Fa("file://")||"function"!==typeof fetch)return c(b);fetch(M,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,d).then(b,function(h){y("wasm streaming compile failed: "+h);y("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();var Ka=e.___wasm_call_ctors=function(){return(Ka=e.___wasm_call_ctors=e.asm.Ya).apply(null,arguments)};
e._main=function(){return(e._main=e.asm.Za).apply(null,arguments)};var Ib=e.__sapp_emsc_notify_keyboard_hidden=function(){return(Ib=e.__sapp_emsc_notify_keyboard_hidden=e.asm._a).apply(null,arguments)};e.___em_js__sapp_js_create_textfield=function(){return(e.___em_js__sapp_js_create_textfield=e.asm.$a).apply(null,arguments)};e.___em_js__sapp_js_focus_textfield=function(){return(e.___em_js__sapp_js_focus_textfield=e.asm.ab).apply(null,arguments)};
e.___em_js__sapp_js_unfocus_textfield=function(){return(e.___em_js__sapp_js_unfocus_textfield=e.asm.bb).apply(null,arguments)};e.__sapp_emsc_onpaste=function(){return(e.__sapp_emsc_onpaste=e.asm.cb).apply(null,arguments)};var Hb=e.__sapp_html5_get_ask_leave_site=function(){return(Hb=e.__sapp_html5_get_ask_leave_site=e.asm.db).apply(null,arguments)};e.___em_js__sapp_add_js_hook_beforeunload=function(){return(e.___em_js__sapp_add_js_hook_beforeunload=e.asm.eb).apply(null,arguments)};
e.___em_js__sapp_remove_js_hook_beforeunload=function(){return(e.___em_js__sapp_remove_js_hook_beforeunload=e.asm.fb).apply(null,arguments)};e.___em_js__sapp_add_js_hook_clipboard=function(){return(e.___em_js__sapp_add_js_hook_clipboard=e.asm.gb).apply(null,arguments)};e.___em_js__sapp_remove_js_hook_clipboard=function(){return(e.___em_js__sapp_remove_js_hook_clipboard=e.asm.hb).apply(null,arguments)};
e.___em_js__sapp_js_write_clipboard=function(){return(e.___em_js__sapp_js_write_clipboard=e.asm.ib).apply(null,arguments)};e.___em_js___sapp_emsc_request_pointerlock=function(){return(e.___em_js___sapp_emsc_request_pointerlock=e.asm.jb).apply(null,arguments)};e.___em_js___sapp_emsc_exit_pointerlock=function(){return(e.___em_js___sapp_emsc_exit_pointerlock=e.asm.kb).apply(null,arguments)};e.___em_js__stm_js_perfnow=function(){return(e.___em_js__stm_js_perfnow=e.asm.lb).apply(null,arguments)};
e.__saudio_emsc_pull=function(){return(e.__saudio_emsc_pull=e.asm.mb).apply(null,arguments)};e.___em_js__saudio_js_init=function(){return(e.___em_js__saudio_js_init=e.asm.nb).apply(null,arguments)};e.___em_js__saudio_js_shutdown=function(){return(e.___em_js__saudio_js_shutdown=e.asm.ob).apply(null,arguments)};e.___em_js__saudio_js_sample_rate=function(){return(e.___em_js__saudio_js_sample_rate=e.asm.pb).apply(null,arguments)};
e.___em_js__saudio_js_buffer_frames=function(){return(e.___em_js__saudio_js_buffer_frames=e.asm.qb).apply(null,arguments)};var Q=e._malloc=function(){return(Q=e._malloc=e.asm.rb).apply(null,arguments)},pa=e.stackSave=function(){return(pa=e.stackSave=e.asm.sb).apply(null,arguments)},qa=e.stackRestore=function(){return(qa=e.stackRestore=e.asm.tb).apply(null,arguments)},C=e.stackAlloc=function(){return(C=e.stackAlloc=e.asm.ub).apply(null,arguments)};
e.dynCall_vi=function(){return(e.dynCall_vi=e.asm.vb).apply(null,arguments)};e.dynCall_v=function(){return(e.dynCall_v=e.asm.wb).apply(null,arguments)};var R=e.dynCall_iiii=function(){return(R=e.dynCall_iiii=e.asm.xb).apply(null,arguments)},Gb=e.dynCall_idi=function(){return(Gb=e.dynCall_idi=e.asm.yb).apply(null,arguments)},Kb;function ia(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}L=function Lb(){Kb||Mb();Kb||(L=Lb)};
function Mb(a){function b(){if(!Kb&&(Kb=!0,e.calledRun=!0,!la)){xa(za);xa(Aa);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(Nb){var c=a,d=e._main;c=c||[];var f=c.length+1,h=C(4*(f+1));H[h>>2]=ta(aa);for(var g=1;g<f;g++)H[(h>>2)+g]=ta(c[g-1]);H[(h>>2)+f]=0;try{var m=d(f,h);if(!noExitRuntime||0!==m){if(!noExitRuntime&&(la=!0,e.onExit))e.onExit(m);t(m,new ia(m))}}catch(n){n instanceof ia||("unwind"==n?noExitRuntime=!0:((c=n)&&"object"===typeof n&&n.stack&&(c=[n,n.stack]),y("exception thrown: "+
c),t(1,n)))}finally{}}if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;)c=e.postRun.shift(),Ca.unshift(c);xa(Ca)}}a=a||r;if(!(0<K)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Da();xa(ya);0<K||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);b()},1)):b())}}e.run=Mb;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();
var Nb=!0;e.noInitialRun&&(Nb=!1);noExitRuntime=!0;Mb();
