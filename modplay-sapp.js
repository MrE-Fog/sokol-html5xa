
var d;d||(d=typeof Module !== 'undefined' ? Module : {});var g={},l;for(l in d)d.hasOwnProperty(l)&&(g[l]=d[l]);var r=[],t="./this.program";function v(a,b){throw b;}var w=!1,x=!1,aa=!1,ba=!1;w="object"===typeof window;x="function"===typeof importScripts;aa="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;ba=!w&&!aa&&!x;var y="",ca,z,da,ea;
if(aa)y=x?require("path").dirname(y)+"/":__dirname+"/",ca=function(a,b){da||(da=require("fs"));ea||(ea=require("path"));a=ea.normalize(a);return da.readFileSync(a,b?null:"utf8")},z=function(a){a=ca(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&(t=process.argv[1].replace(/\\/g,"/")),r=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=d),process.on("uncaughtException",function(a){if(!(a instanceof fa))throw a;}),process.on("unhandledRejection",
A),v=function(a){process.exit(a)},d.inspect=function(){return"[Emscripten Module object]"};else if(ba)"undefined"!=typeof read&&(ca=function(a){return read(a)}),z=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?r=scriptArgs:"undefined"!=typeof arguments&&(r=arguments),"function"===typeof quit&&(v=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===typeof console&&
(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(w||x)x?y=self.location.href:document.currentScript&&(y=document.currentScript.src),y=0!==y.indexOf("blob:")?y.substr(0,y.lastIndexOf("/")+1):"",ca=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},x&&(z=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});
var ha=d.print||console.log.bind(console),B=d.printErr||console.warn.bind(console);for(l in g)g.hasOwnProperty(l)&&(d[l]=g[l]);g=null;d.arguments&&(r=d.arguments);d.thisProgram&&(t=d.thisProgram);d.quit&&(v=d.quit);var C;d.wasmBinary&&(C=d.wasmBinary);var noExitRuntime;d.noExitRuntime&&(noExitRuntime=d.noExitRuntime);"object"!==typeof WebAssembly&&A("no native wasm support detected");var D,ia=new WebAssembly.Table({initial:106,maximum:106,element:"anyfunc"}),ja=!1;
function assert(a,b){a||A("Assertion failed: "+b)}function ka(){var a=d.__sapp_emsc_onpaste;assert(a,"Cannot call unknown function _sapp_emsc_onpaste, make sure it is exported");return a}
function la(a){var b=["string"],c={string:function(m){var n=0;if(null!==m&&void 0!==m&&0!==m){var p=(m.length<<2)+1;n=E(p);F(m,G,n,p)}return n},array:function(m){var n=E(m.length);H.set(m,n);return n}},e=ka(),f=[],h=0;if(a)for(var k=0;k<a.length;k++){var q=c[b[k]];q?(0===h&&(h=ma()),f[k]=q(a[k])):f[k]=a[k]}e.apply(null,f);0!==h&&na(h)}var oa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function pa(a,b,c){var e=b+c;for(c=b;a[c]&&!(c>=e);)++c;if(16<c-b&&a.subarray&&oa)return oa.decode(a.subarray(b,c));for(e="";b<c;){var f=a[b++];if(f&128){var h=a[b++]&63;if(192==(f&224))e+=String.fromCharCode((f&31)<<6|h);else{var k=a[b++]&63;f=224==(f&240)?(f&15)<<12|h<<6|k:(f&7)<<18|h<<12|k<<6|a[b++]&63;65536>f?e+=String.fromCharCode(f):(f-=65536,e+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else e+=String.fromCharCode(f)}return e}
function F(a,b,c,e){if(0<e){e=c+e-1;for(var f=0;f<a.length;++f){var h=a.charCodeAt(f);if(55296<=h&&57343>=h){var k=a.charCodeAt(++f);h=65536+((h&1023)<<10)|k&1023}if(127>=h){if(c>=e)break;b[c++]=h}else{if(2047>=h){if(c+1>=e)break;b[c++]=192|h>>6}else{if(65535>=h){if(c+2>=e)break;b[c++]=224|h>>12}else{if(c+3>=e)break;b[c++]=240|h>>18;b[c++]=128|h>>12&63}b[c++]=128|h>>6&63}b[c++]=128|h&63}}b[c]=0}}
function qa(a){for(var b=0,c=0;c<a.length;++c){var e=a.charCodeAt(c);55296<=e&&57343>=e&&(e=65536+((e&1023)<<10)|a.charCodeAt(++c)&1023);127>=e?++b:b=2047>=e?b+2:65535>=e?b+3:b+4}return b}function ra(a){var b=qa(a)+1,c=E(b);F(a,H,c,b);return c}var I,H,G,sa,J,ta,K;
function ua(a){I=a;d.HEAP8=H=new Int8Array(a);d.HEAP16=sa=new Int16Array(a);d.HEAP32=J=new Int32Array(a);d.HEAPU8=G=new Uint8Array(a);d.HEAPU16=new Uint16Array(a);d.HEAPU32=new Uint32Array(a);d.HEAPF32=ta=new Float32Array(a);d.HEAPF64=K=new Float64Array(a)}var va=d.INITIAL_MEMORY||33554432;d.wasmMemory?D=d.wasmMemory:D=new WebAssembly.Memory({initial:va/65536,maximum:32768});D&&(I=D.buffer);va=I.byteLength;ua(I);J[402536]=6853184;
function wa(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(d);else{var c=b.Fb;"number"===typeof c?void 0===b.vb?d.dynCall_v(c):d.dynCall_vi(c,b.vb):c(void 0===b.vb?null:b.vb)}}}var xa=[],ya=[],za=[],Aa=[],Ba=[];function Ca(){var a=d.preRun.shift();xa.unshift(a)}var L=0,Da=null,M=null;d.preloadedImages={};d.preloadedAudios={};function A(a){if(d.onAbort)d.onAbort(a);ha(a);B(a);ja=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}
function Ea(a){var b=N;return String.prototype.startsWith?b.startsWith(a):0===b.indexOf(a)}function Fa(){return Ea("data:application/octet-stream;base64,")}var N="modplay-sapp.wasm";if(!Fa()){var Ga=N;N=d.locateFile?d.locateFile(Ga,y):y+Ga}function Ha(){try{if(C)return new Uint8Array(C);if(z)return z(N);throw"both async and sync fetching of the wasm failed";}catch(a){A(a)}}
function Ia(){return C||!w&&!x||"function"!==typeof fetch||Ea("file://")?new Promise(function(a){a(Ha())}):fetch(N,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+N+"'";return a.arrayBuffer()}).catch(function(){return Ha()})}ya.push({Fb:function(){Ja()}});var Ka=[null,[],[]],La={};function Ma(){for(var a=O.length-1;0<=a;--a)Na(a);O=[];Oa=[]}var Oa=[];
function Pa(){if(Qa.zb&&Ra.tb)for(var a=0;a<Oa.length;++a){var b=Oa[a];Oa.splice(a,1);--a;b.Ub.apply(null,b.Kb)}}var O=[];function Na(a){var b=O[a];b.target.removeEventListener(b.ob,b.Db,b.qb);O.splice(a,1)}function P(a){function b(e){++Qa.zb;Ra=a;Pa();a.sb(e);Pa();--Qa.zb}if(a.rb)a.Db=b,a.target.addEventListener(a.ob,b,a.qb),O.push(a),Sa||(Aa.push(Ma),Sa=!0);else for(var c=0;c<O.length;++c)O[c].target==a.target&&O[c].ob==a.ob&&Na(c--)}
var Qa={},Sa,Ra,Ta,Ua,Va,Wa,Xa,Ya=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function Q(a){a=2<a?a?pa(G,a,void 0):"":a;return Ya[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}function Za(a){return 0>Ya.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}
function $a(a,b,c,e,f,h){Ta||(Ta=R(164));a={target:Q(a),tb:!0,ob:h,rb:e,sb:function(k){var q=Ta,m=q>>2;J[m]=k.location;J[m+1]=k.ctrlKey;J[m+2]=k.shiftKey;J[m+3]=k.altKey;J[m+4]=k.metaKey;J[m+5]=k.repeat;J[m+6]=k.charCode;J[m+7]=k.keyCode;J[m+8]=k.which;F(k.key||"",G,q+36,32);F(k.code||"",G,q+68,32);F(k.char||"",G,q+100,32);F(k.locale||"",G,q+132,32);S(e,f,q,b)&&k.preventDefault()},qb:c};P(a)}
function ab(a,b,c){a>>=2;J[a]=b.screenX;J[a+1]=b.screenY;J[a+2]=b.clientX;J[a+3]=b.clientY;J[a+4]=b.ctrlKey;J[a+5]=b.shiftKey;J[a+6]=b.altKey;J[a+7]=b.metaKey;sa[2*a+16]=b.button;sa[2*a+17]=b.buttons;J[a+9]=b.movementX;J[a+10]=b.movementY;c=Za(c);J[a+11]=b.clientX-c.left;J[a+12]=b.clientY-c.top}function T(a,b,c,e,f,h){Ua||(Ua=R(64));a=Q(a);P({target:a,tb:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,ob:h,rb:e,sb:function(k){k=k||event;ab(Ua,k,a);S(e,f,Ua,b)&&k.preventDefault()},qb:c})}
function bb(a,b,c,e){Va||(Va=R(36));a=Q(a);P({target:a,ob:"resize",rb:e,sb:function(f){f=f||event;if(f.target==a){var h=Va,k=document.body;J[h>>2]=f.detail;J[h+4>>2]=k.clientWidth;J[h+8>>2]=k.clientHeight;J[h+12>>2]=innerWidth;J[h+16>>2]=innerHeight;J[h+20>>2]=outerWidth;J[h+24>>2]=outerHeight;J[h+28>>2]=pageXOffset;J[h+32>>2]=pageYOffset;S(e,10,h,b)&&f.preventDefault()}},qb:c})}
function cb(a,b,c,e,f,h){Wa||(Wa=R(1684));a=Q(a);P({target:a,tb:"touchstart"==h||"touchend"==h,ob:h,rb:e,sb:function(k){for(var q={},m=k.touches,n=0;n<m.length;++n){var p=m[n];q[p.identifier]=p}m=k.changedTouches;for(n=0;n<m.length;++n)p=m[n],p.Hb=1,q[p.identifier]=p;m=k.targetTouches;for(n=0;n<m.length;++n)q[m[n].identifier].Ib=1;m=Wa;p=m>>2;J[p+1]=k.ctrlKey;J[p+2]=k.shiftKey;J[p+3]=k.altKey;J[p+4]=k.metaKey;p+=5;var db=Za(a),eb=0;for(n in q){var u=q[n];J[p]=u.identifier;J[p+1]=u.screenX;J[p+2]=
u.screenY;J[p+3]=u.clientX;J[p+4]=u.clientY;J[p+5]=u.pageX;J[p+6]=u.pageY;J[p+7]=u.Hb;J[p+8]=u.Ib;J[p+9]=u.clientX-db.left;J[p+10]=u.clientY-db.top;p+=13;if(31<++eb)break}J[m>>2]=eb;S(e,f,m,b)&&k.preventDefault()},qb:c})}function fb(a,b,c,e,f,h){a={target:Q(a),ob:h,rb:e,sb:function(k){k=k||event;S(e,f,0,b)&&k.preventDefault()},qb:c};P(a)}
function gb(a,b,c,e){Xa||(Xa=R(96));P({target:a,tb:!0,ob:"wheel",rb:e,sb:function(f){f=f||event;var h=Xa;ab(h,f,a);K[h+64>>3]=f.deltaX;K[h+72>>3]=f.deltaY;K[h+80>>3]=f.deltaZ;J[h+88>>2]=f.deltaMode;S(e,9,h,b)&&f.preventDefault()},qb:c})}
function hb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,e){b.vertexAttribDivisorANGLE(c,e)},a.drawArraysInstanced=function(c,e,f,h){b.drawArraysInstancedANGLE(c,e,f,h)},a.drawElementsInstanced=function(c,e,f,h,k){b.drawElementsInstancedANGLE(c,e,f,h,k)})}
function ib(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function jb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,e){b.drawBuffersWEBGL(c,e)})}
function kb(a){a.Mb=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}var lb=1,mb=[],nb=[],ob=[],pb=[],qb=[],U=[],rb=[],sb={},tb={};function V(a){ub||(ub=a)}function vb(a){for(var b=lb++,c=a.length;c<b;c++)a[c]=null;return b}
function wb(a){a||(a=W);if(!a.Gb){a.Gb=!0;var b=a.ub;hb(b);ib(b);jb(b);kb(b);b.Nb=b.getExtension("EXT_disjoint_timer_query");var c="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod EXT_texture_norm16 WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2 WEBKIT_WEBGL_compressed_texture_pvrtc".split(" ");(b.getSupportedExtensions()||
[]).forEach(function(e){-1!=c.indexOf(e)&&b.getExtension(e)})}}var ub,W,xb=["default","low-power","high-performance"],yb={};function zb(){if(!Ab){var a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"===typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:t||"./this.program"},b;for(b in yb)a[b]=yb[b];var c=[];for(b in a)c.push(b+"="+a[b]);Ab=c}return Ab}var Ab;
function Bb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var e=X.getParameter(34467);c=e?e.length:0;break;case 33309:if(2>W.version){V(1282);return}c=2*(X.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>W.version){V(1280);return}c=33307==a?3:0}if(void 0===c)switch(e=X.getParameter(a),typeof e){case "number":c=e;break;case "boolean":c=e?1:0;break;case "string":V(1280);return;case "object":if(null===e)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:V(1280);return}else{if(e instanceof Float32Array||e instanceof Uint32Array||e instanceof Int32Array||e instanceof Array){for(a=0;a<e.length;++a)J[b+4*a>>2]=e[a];return}try{c=e.name|0}catch(f){V(1280);B("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+f+")");return}}break;default:V(1280);B("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+e+" of type "+typeof e+"!");return}J[b>>2]=c}else V(1281)}
function Y(a){var b=qa(a)+1,c=R(b);F(a,G,c,b);return c}var Z;aa?Z=function(){var a=process.hrtime();return 1E3*a[0]+a[1]/1E6}:"undefined"!==typeof dateNow?Z=dateNow:Z=function(){return performance.now()};function Cb(a){for(var b=Z();Z()-b<a/1E3;);}d._usleep=Cb;
var X,Ib={n:function(){return 0},W:function(){return 0},Y:function(){},S:function(){A()},D:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},O:function(a,b,c){a=Q(a);if(!a)return-4;a=Za(a);K[b>>3]=a.width;K[c>>3]=a.height;return 0},Q:function(a,b,c){G.copyWithin(a,b,b+c)},xa:function(a,b){function c(e){Db(a,e,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},R:function(a){a>>>=0;var b=G.length;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var e=b*(1+.2/c);e=Math.min(e,
a+100663296);e=Math.max(16777216,a,e);0<e%65536&&(e+=65536-e%65536);a:{try{D.grow(Math.min(2147483648,e)-I.byteLength+65535>>>16);ua(D.buffer);var f=1;break a}catch(h){}f=void 0}if(f)return!0}return!1},y:function(a,b,c){a=Q(a);if(!a)return-4;a.width=b;a.height=c;return 0},I:function(a,b,c,e){$a(a,b,c,e,2,"keydown");return 0},G:function(a,b,c,e){$a(a,b,c,e,1,"keypress");return 0},H:function(a,b,c,e){$a(a,b,c,e,3,"keyup");return 0},m:function(a,b,c,e){T(a,b,c,e,5,"mousedown");return 0},L:function(a,
b,c,e){T(a,b,c,e,33,"mouseenter");return 0},K:function(a,b,c,e){T(a,b,c,e,34,"mouseleave");return 0},M:function(a,b,c,e){T(a,b,c,e,8,"mousemove");return 0},N:function(a,b,c,e){T(a,b,c,e,6,"mouseup");return 0},Ha:function(a,b,c,e){bb(a,b,c,e);return 0},B:function(a,b,c,e){cb(a,b,c,e,25,"touchcancel");return 0},C:function(a,b,c,e){cb(a,b,c,e,23,"touchend");return 0},E:function(a,b,c,e){cb(a,b,c,e,24,"touchmove");return 0},F:function(a,b,c,e){cb(a,b,c,e,22,"touchstart");return 0},A:function(a,b,c,e){fb(a,
b,c,e,31,"webglcontextlost");return 0},z:function(a,b,c,e){fb(a,b,c,e,32,"webglcontextrestored");return 0},J:function(a,b,c,e){a=Q(a);return"undefined"!==typeof a.onwheel?(gb(a,b,c,e),0):-1},r:function(a,b){var c={};b>>=2;c.alpha=!!J[b];c.depth=!!J[b+1];c.stencil=!!J[b+2];c.antialias=!!J[b+3];c.premultipliedAlpha=!!J[b+4];c.preserveDrawingBuffer=!!J[b+5];c.powerPreference=xb[J[b+6]];c.failIfMajorPerformanceCaveat=!!J[b+7];c.Ab=J[b+8];c.Rb=J[b+9];c.yb=J[b+10];c.Eb=J[b+11];c.Sb=J[b+12];c.Tb=J[b+13];
if(a=Q(a))if(c.Eb)c=-1;else if(a=1<c.Ab?a.getContext("webgl2",c):a.getContext("webgl",c)){b=vb(rb);var e={Qb:b,attributes:c,version:c.Ab,ub:a};a.canvas&&(a.canvas.Jb=e);rb[b]=e;("undefined"===typeof c.yb||c.yb)&&wb(e);c=b}else c=0;else c=-4;return c},X:function(a,b){a=rb[a];b=b?pa(G,b,void 0):"";0==b.indexOf("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&hb(X);"OES_vertex_array_object"==b&&ib(X);"WEBGL_draw_buffers"==b&&jb(X);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&kb(X);return!!a.ub.getExtension(b)},
qa:function(a){a>>=2;for(var b=0;14>b;++b)J[a+b]=0;J[a]=J[a+1]=J[a+3]=J[a+4]=J[a+8]=J[a+10]=1},da:function(a){W=rb[a];d.Lb=X=W&&W.ub;return!a||X?0:-5},T:function(a,b){var c=0;zb().forEach(function(e,f){var h=b+c;f=J[a+4*f>>2]=h;for(h=0;h<e.length;++h)H[f++>>0]=e.charCodeAt(h);H[f>>0]=0;c+=e.length+1});return 0},U:function(a,b){var c=zb();J[a>>2]=c.length;var e=0;c.forEach(function(f){e+=f.length+1});J[b>>2]=e;return 0},p:function(){return 0},V:function(a,b,c,e){a=La.Pb(a);b=La.Ob(a,b,c);J[e>>2]=b;
return 0},P:function(){},o:function(a,b,c,e){for(var f=0,h=0;h<c;h++){for(var k=J[b+8*h>>2],q=J[b+(8*h+4)>>2],m=0;m<q;m++){var n=G[k+m],p=Ka[a];0===n||10===n?((1===a?ha:B)(pa(p,0)),p.length=0):p.push(n)}f+=q}J[e>>2]=f;return 0},s:function(a){X.activeTexture(a)},h:function(a,b){35051==a?X.wb=b:35052==a&&(X.xb=b);X.bindBuffer(a,mb[b])},c:function(a,b){X.bindFramebuffer(a,ob[b])},b:function(a,b){X.bindTexture(a,qb[b])},x:function(a){X.bindVertexArray(U[a])},sa:function(a,b,c,e){X.blendColor(a,b,c,e)},
ta:function(a,b){X.blendEquationSeparate(a,b)},ua:function(a,b,c,e){X.blendFuncSeparate(a,b,c,e)},f:function(a,b,c,e,f,h,k,q,m,n){X.blitFramebuffer(a,b,c,e,f,h,k,q,m,n)},ea:function(a){X.clear(a)},ha:function(a,b,c,e){X.clearColor(a,b,c,e)},ga:function(a){X.clearDepth(a)},fa:function(a){X.clearStencil(a)},t:function(a,b,c,e){X.colorMask(!!a,!!b,!!c,!!e)},oa:function(a){X.cullFace(a)},la:function(a,b){for(var c=0;c<a;c++){var e=J[b+4*c>>2],f=mb[e];f&&(X.deleteBuffer(f),f.name=0,mb[e]=null,e==X.wb&&
(X.wb=0),e==X.xb&&(X.xb=0))}},d:function(a,b){for(var c=0;c<a;++c){var e=J[b+4*c>>2],f=ob[e];f&&(X.deleteFramebuffer(f),f.name=0,ob[e]=null)}},na:function(a){if(a){var b=nb[a];b?(X.deleteProgram(b),b.name=0,nb[a]=null):V(1281)}},q:function(a,b){for(var c=0;c<a;c++){var e=J[b+4*c>>2],f=pb[e];f&&(X.deleteRenderbuffer(f),f.name=0,pb[e]=null)}},ka:function(a,b){for(var c=0;c<a;c++){var e=J[b+4*c>>2],f=qb[e];f&&(X.deleteTexture(f),f.name=0,qb[e]=null)}},Aa:function(a,b){for(var c=0;c<a;c++){var e=J[b+
4*c>>2];X.deleteVertexArray(U[e]);U[e]=null}},w:function(a){X.depthFunc(a)},v:function(a){X.depthMask(!!a)},e:function(a){X.disable(a)},ya:function(a){X.disableVertexAttribArray(a)},l:function(a){X.enable(a)},pa:function(a){X.frontFace(a)},za:function(a,b){for(var c=0;c<a;c++){var e=X.createVertexArray(),f=e&&vb(U);e?(e.name=f,U[f]=e):V(1282);J[b+4*c>>2]=f}},a:function(a,b){Bb(a,b)},Ca:function(a){if(sb[a])return sb[a];switch(a){case 7939:var b=X.getSupportedExtensions()||[];b=b.concat(b.map(function(e){return"GL_"+
e}));b=Y(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=X.getParameter(a))||V(1280);b=Y(b);break;case 7938:b=X.getParameter(7938);b=2<=W.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Y(b);break;case 35724:b=X.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Y(b);break;default:return V(1280),0}return sb[a]=b},Ba:function(a,b){if(2>W.version)return V(1282),0;
var c=tb[a];if(c)return 0>b||b>=c.length?(V(1281),0):c[b];switch(a){case 7939:return c=X.getSupportedExtensions()||[],c=c.concat(c.map(function(e){return"GL_"+e})),c=c.map(function(e){return Y(e)}),c=tb[a]=c,0>b||b>=c.length?(V(1281),0):c[b];default:return V(1280),0}},ra:function(a,b){X.polygonOffset(a,b)},g:function(a){X.readBuffer(a)},ia:function(a,b,c,e){X.scissor(a,b,c,e)},wa:function(a,b,c){X.stencilFunc(a,b,c)},u:function(a){X.stencilMask(a)},va:function(a,b,c){X.stencilOp(a,b,c)},ma:function(a){X.useProgram(nb[a])},
ja:function(a,b,c,e){X.viewport(a,b,c,e)},memory:D,Z:function(a,b){if(0===a)return J[Eb()>>2]=28,-1;var c=J[a>>2];a=J[a+4>>2];if(0>a||999999999<a||0>c)return J[Eb()>>2]=28,-1;0!==b&&(J[b>>2]=0,J[b+4>>2]=0);return Cb(1E6*c+a/1E3)},Ga:function(){d.Bb=function(a){0!=Fb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",d.Bb)},Fa:function(){d.Cb=function(a){a=a.clipboardData.getData("text");la([a])};window.addEventListener("paste",d.Cb)},k:function(){var a=document.createElement("input");
a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Gb()});document.body.append(a)},j:function(){document.getElementById("_sokol_app_input_element").focus()},i:function(){document.getElementById("_sokol_app_input_element").blur()},Ea:function(){window.removeEventListener("beforeunload",d.Bb)},Da:function(){window.removeEventListener("paste",d.Cb)},aa:function(){return d.pb?d.pb.bufferSize:0},ca:function(a,b,c){d.nb=null;d.pb=null;"undefined"!==
typeof AudioContext?d.nb=new AudioContext({sampleRate:a,latencyHint:"interactive"}):"undefined"!==typeof webkitAudioContext?d.nb=new webkitAudioContext({sampleRate:a,latencyHint:"interactive"}):(d.nb=null,console.log("sokol_audio.h: no WebAudio support"));return d.nb?(console.log("sokol_audio.h: sample rate ",d.nb.sampleRate),d.pb=d.nb.createScriptProcessor(c,0,b),d.pb.onaudioprocess=function(e){var f=e.outputBuffer.length,h=Hb(f);if(h)for(var k=e.outputBuffer.numberOfChannels,q=0;q<k;q++)for(var m=
e.outputBuffer.getChannelData(q),n=0;n<f;n++)m[n]=ta[(h>>2)+(k*n+q)]},d.pb.connect(d.nb.destination),a=function(){d.nb&&"suspended"===d.nb.state&&d.nb.resume()},document.addEventListener("click",a,{once:!0}),document.addEventListener("touchstart",a,{once:!0}),document.addEventListener("keydown",a,{once:!0}),1):0},ba:function(){return d.nb?d.nb.sampleRate:0},$:function(){null!==d.nb&&(d.pb&&d.pb.disconnect(),d.nb.close(),d.nb=null,d.pb=null)},table:ia,_:function(a){var b=Date.now()/1E3|0;a&&(J[a>>
2]=b);return b}};
(function(){function a(f){d.asm=f.exports;L--;d.monitorRunDependencies&&d.monitorRunDependencies(L);0==L&&(null!==Da&&(clearInterval(Da),Da=null),M&&(f=M,M=null,f()))}function b(f){a(f.instance)}function c(f){return Ia().then(function(h){return WebAssembly.instantiate(h,e)}).then(f,function(h){B("failed to asynchronously prepare wasm: "+h);A(h)})}var e={a:Ib};L++;d.monitorRunDependencies&&d.monitorRunDependencies(L);if(d.instantiateWasm)try{return d.instantiateWasm(e,a)}catch(f){return B("Module.instantiateWasm callback failed with error: "+f),
!1}(function(){if(C||"function"!==typeof WebAssembly.instantiateStreaming||Fa()||Ea("file://")||"function"!==typeof fetch)return c(b);fetch(N,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,e).then(b,function(h){B("wasm streaming compile failed: "+h);B("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
var Ja=d.___wasm_call_ctors=function(){return(Ja=d.___wasm_call_ctors=d.asm.Ia).apply(null,arguments)},Gb=d.__sapp_emsc_notify_keyboard_hidden=function(){return(Gb=d.__sapp_emsc_notify_keyboard_hidden=d.asm.Ja).apply(null,arguments)};d.___em_js__sapp_js_create_textfield=function(){return(d.___em_js__sapp_js_create_textfield=d.asm.Ka).apply(null,arguments)};d.___em_js__sapp_js_focus_textfield=function(){return(d.___em_js__sapp_js_focus_textfield=d.asm.La).apply(null,arguments)};
d.___em_js__sapp_js_unfocus_textfield=function(){return(d.___em_js__sapp_js_unfocus_textfield=d.asm.Ma).apply(null,arguments)};d.__sapp_emsc_onpaste=function(){return(d.__sapp_emsc_onpaste=d.asm.Na).apply(null,arguments)};var Fb=d.__sapp_html5_get_ask_leave_site=function(){return(Fb=d.__sapp_html5_get_ask_leave_site=d.asm.Oa).apply(null,arguments)};d.___em_js__sapp_add_js_hook_beforeunload=function(){return(d.___em_js__sapp_add_js_hook_beforeunload=d.asm.Pa).apply(null,arguments)};
d.___em_js__sapp_remove_js_hook_beforeunload=function(){return(d.___em_js__sapp_remove_js_hook_beforeunload=d.asm.Qa).apply(null,arguments)};d.___em_js__sapp_add_js_hook_clipboard=function(){return(d.___em_js__sapp_add_js_hook_clipboard=d.asm.Ra).apply(null,arguments)};d.___em_js__sapp_remove_js_hook_clipboard=function(){return(d.___em_js__sapp_remove_js_hook_clipboard=d.asm.Sa).apply(null,arguments)};
d.___em_js__sapp_js_write_clipboard=function(){return(d.___em_js__sapp_js_write_clipboard=d.asm.Ta).apply(null,arguments)};d._main=function(){return(d._main=d.asm.Ua).apply(null,arguments)};d.___em_js__stm_js_perfnow=function(){return(d.___em_js__stm_js_perfnow=d.asm.Va).apply(null,arguments)};var Hb=d.__saudio_emsc_pull=function(){return(Hb=d.__saudio_emsc_pull=d.asm.Wa).apply(null,arguments)};d.___em_js__saudio_js_init=function(){return(d.___em_js__saudio_js_init=d.asm.Xa).apply(null,arguments)};
d.___em_js__saudio_js_shutdown=function(){return(d.___em_js__saudio_js_shutdown=d.asm.Ya).apply(null,arguments)};d.___em_js__saudio_js_sample_rate=function(){return(d.___em_js__saudio_js_sample_rate=d.asm.Za).apply(null,arguments)};d.___em_js__saudio_js_buffer_frames=function(){return(d.___em_js__saudio_js_buffer_frames=d.asm._a).apply(null,arguments)};d.___em_js__sfetch_js_send_head_request=function(){return(d.___em_js__sfetch_js_send_head_request=d.asm.$a).apply(null,arguments)};
d.___em_js__sfetch_js_send_get_request=function(){return(d.___em_js__sfetch_js_send_get_request=d.asm.ab).apply(null,arguments)};d.__sfetch_emsc_head_response=function(){return(d.__sfetch_emsc_head_response=d.asm.bb).apply(null,arguments)};d.__sfetch_emsc_get_response=function(){return(d.__sfetch_emsc_get_response=d.asm.cb).apply(null,arguments)};d.__sfetch_emsc_failed_http_status=function(){return(d.__sfetch_emsc_failed_http_status=d.asm.db).apply(null,arguments)};
d.__sfetch_emsc_failed_buffer_too_small=function(){return(d.__sfetch_emsc_failed_buffer_too_small=d.asm.eb).apply(null,arguments)};
var R=d._malloc=function(){return(R=d._malloc=d.asm.fb).apply(null,arguments)},Eb=d.___errno_location=function(){return(Eb=d.___errno_location=d.asm.gb).apply(null,arguments)},ma=d.stackSave=function(){return(ma=d.stackSave=d.asm.hb).apply(null,arguments)},na=d.stackRestore=function(){return(na=d.stackRestore=d.asm.ib).apply(null,arguments)},E=d.stackAlloc=function(){return(E=d.stackAlloc=d.asm.jb).apply(null,arguments)};d.dynCall_vi=function(){return(d.dynCall_vi=d.asm.kb).apply(null,arguments)};
var S=d.dynCall_iiii=function(){return(S=d.dynCall_iiii=d.asm.lb).apply(null,arguments)},Db=d.dynCall_idi=function(){return(Db=d.dynCall_idi=d.asm.mb).apply(null,arguments)},Jb;function fa(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}M=function Kb(){Jb||Lb();Jb||(M=Kb)};
function Lb(a){function b(){if(!Jb&&(Jb=!0,d.calledRun=!0,!ja)){wa(ya);wa(za);if(d.onRuntimeInitialized)d.onRuntimeInitialized();if(Mb){var c=a,e=d._main;c=c||[];var f=c.length+1,h=E(4*(f+1));J[h>>2]=ra(t);for(var k=1;k<f;k++)J[(h>>2)+k]=ra(c[k-1]);J[(h>>2)+f]=0;try{var q=e(f,h);if(!noExitRuntime||0!==q){if(!noExitRuntime&&(ja=!0,d.onExit))d.onExit(q);v(q,new fa(q))}}catch(m){m instanceof fa||("unwind"==m?noExitRuntime=!0:((c=m)&&"object"===typeof m&&m.stack&&(c=[m,m.stack]),B("exception thrown: "+
c),v(1,m)))}finally{}}if(d.postRun)for("function"==typeof d.postRun&&(d.postRun=[d.postRun]);d.postRun.length;)c=d.postRun.shift(),Ba.unshift(c);wa(Ba)}}a=a||r;if(!(0<L)){if(d.preRun)for("function"==typeof d.preRun&&(d.preRun=[d.preRun]);d.preRun.length;)Ca();wa(xa);0<L||(d.setStatus?(d.setStatus("Running..."),setTimeout(function(){setTimeout(function(){d.setStatus("")},1);b()},1)):b())}}d.run=Lb;if(d.preInit)for("function"==typeof d.preInit&&(d.preInit=[d.preInit]);0<d.preInit.length;)d.preInit.pop()();
var Mb=!0;d.noInitialRun&&(Mb=!1);noExitRuntime=!0;Lb();
