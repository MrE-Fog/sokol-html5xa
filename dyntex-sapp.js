
var g;g||(g=typeof Module !== 'undefined' ? Module : {});var k={},l;for(l in g)g.hasOwnProperty(l)&&(k[l]=g[l]);var aa=[],ba="./this.program";function ca(a,b){throw b;}var da="object"===typeof window,r="function"===typeof importScripts,t="",ea,fa,ha,u,v;
if("object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)t=r?require("path").dirname(t)+"/":__dirname+"/",ea=function(a,b){u||(u=require("fs"));v||(v=require("path"));a=v.normalize(a);return u.readFileSync(a,b?null:"utf8")},ha=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||w("Assertion failed: undefined");return a},fa=function(a,b,c){u||(u=require("fs"));v||(v=require("path"));a=v.normalize(a);u.readFile(a,function(d,e){d?c(d):b(e.buffer)})},
1<process.argv.length&&(ba=process.argv[1].replace(/\\/g,"/")),aa=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=g),process.on("uncaughtException",function(a){if(!(a instanceof ia))throw a;}),process.on("unhandledRejection",w),ca=function(a,b){if(noExitRuntime||0<ja)throw process.exitCode=a,b;process.exit(a)},g.inspect=function(){return"[Emscripten Module object]"};else if(da||r)r?t=self.location.href:"undefined"!==typeof document&&document.currentScript&&(t=document.currentScript.src),
t=0!==t.indexOf("blob:")?t.substr(0,t.lastIndexOf("/")+1):"",ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},r&&(ha=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),fa=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};
g.print||console.log.bind(console);var x=g.printErr||console.warn.bind(console);for(l in k)k.hasOwnProperty(l)&&(g[l]=k[l]);k=null;g.arguments&&(aa=g.arguments);g.thisProgram&&(ba=g.thisProgram);g.quit&&(ca=g.quit);var y;g.wasmBinary&&(y=g.wasmBinary);var noExitRuntime=g.noExitRuntime||!0;"object"!==typeof WebAssembly&&w("no native wasm support detected");var ka,la=!1;function ma(a){var b=g["_"+a];b||w("Assertion failed: Cannot call unknown function "+(a+", make sure it is exported"));return b}
function na(a,b,c){var d={string:function(n){var p=0;if(null!==n&&void 0!==n&&0!==n){var q=(n.length<<2)+1;p=z(q);B(n,C,p,q)}return p},array:function(n){var p=z(n.length);oa.set(n,p);return p}};a=ma(a);var e=[],h=0;if(c)for(var f=0;f<c.length;f++){var m=d[b[f]];m?(0===h&&(h=pa()),e[f]=m(c[f])):e[f]=c[f]}b=a.apply(null,e);b=function(n){0!==h&&qa(h);return n}(b)}var ra="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function D(a,b){if(a){var c=C,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&ra)a=ra.decode(c.subarray(a,b));else{for(d="";a<b;){var e=c[a++];if(e&128){var h=c[a++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|h);else{var f=c[a++]&63;e=224==(e&240)?(e&15)<<12|h<<6|f:(e&7)<<18|h<<12|f<<6|c[a++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}a=d}}else a="";return a}
function B(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var h=0;h<a.length;++h){var f=a.charCodeAt(h);if(55296<=f&&57343>=f){var m=a.charCodeAt(++h);f=65536+((f&1023)<<10)|m&1023}if(127>=f){if(c>=d)break;b[c++]=f}else{if(2047>=f){if(c+1>=d)break;b[c++]=192|f>>6}else{if(65535>=f){if(c+2>=d)break;b[c++]=224|f>>12}else{if(c+3>=d)break;b[c++]=240|f>>18;b[c++]=128|f>>12&63}b[c++]=128|f>>6&63}b[c++]=128|f&63}}b[c]=0;return c-e}
function sa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function ta(a){var b=sa(a)+1,c=z(b);B(a,oa,c,b);return c}var ua,oa,C,va,wa,E,xa,F,G;
function ya(){var a=ka.buffer;ua=a;g.HEAP8=oa=new Int8Array(a);g.HEAP16=va=new Int16Array(a);g.HEAP32=E=new Int32Array(a);g.HEAPU8=C=new Uint8Array(a);g.HEAPU16=wa=new Uint16Array(a);g.HEAPU32=xa=new Uint32Array(a);g.HEAPF32=F=new Float32Array(a);g.HEAPF64=G=new Float64Array(a)}var H,za=[],Aa=[],Ba=[],Ca=[],Da=[],ja=0;function Ea(){var a=g.preRun.shift();za.unshift(a)}var I=0,Fa=null,J=null;g.preloadedImages={};g.preloadedAudios={};
function w(a){if(g.onAbort)g.onAbort(a);x(a);la=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}function Ga(){return K.startsWith("data:application/octet-stream;base64,")}var K;K="dyntex-sapp.wasm";if(!Ga()){var Ha=K;K=g.locateFile?g.locateFile(Ha,t):t+Ha}function Ia(){var a=K;try{if(a==K&&y)return new Uint8Array(y);if(ha)return ha(a);throw"both async and sync fetching of the wasm failed";}catch(b){w(b)}}
function Ja(){if(!y&&(da||r)){if("function"===typeof fetch&&!K.startsWith("file://"))return fetch(K,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+K+"'";return a.arrayBuffer()}).catch(function(){return Ia()});if(fa)return new Promise(function(a,b){fa(K,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ia()})}
function Ka(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(g);else{var c=b.yc;"number"===typeof c?void 0===b.Wb?H.get(c)():H.get(c)(b.Wb):c(void 0===b.Wb?null:b.Wb)}}}var La=0;function Ma(){for(var a=L.length-1;0<=a;--a)Na(a);L=[];Oa=[]}var Oa=[];function Pa(){if(La&&Qa.Rb)for(var a=0;a<Oa.length;++a){var b=Oa[a];Oa.splice(a,1);--a;b.Hc.apply(null,b.vc)}}var L=[];function Na(a){var b=L[a];b.target.removeEventListener(b.Kb,b.pc,b.Lb);L.splice(a,1)}
function M(a){function b(d){++La;Qa=a;Pa();a.Nb(d);Pa();--La}if(a.Mb)a.pc=b,a.target.addEventListener(a.Kb,b,a.Lb),L.push(a),Ra||(Ca.push(Ma),Ra=!0);else for(var c=0;c<L.length;++c)L[c].target==a.target&&L[c].Kb==a.Kb&&Na(c--)}function Sa(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}var Ra,Qa,Ta,Ua,Va,Wa,Xa,Ya,Za,$a=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];
function N(a){a=2<a?D(a):a;return $a[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}function ab(a){return 0>$a.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}function bb(a,b,c,d,e,h){Ta||(Ta=O(256));a={target:N(a),Kb:h,Mb:d,Nb:function(f){f=f||event;var m=f.target.id?f.target.id:"",n=Ta;B(Sa(f.target),C,n+0,128);B(m,C,n+128,128);H.get(d)(e,n,b)&&f.preventDefault()},Lb:c};M(a)}
function cb(a,b,c,d,e,h){Ua||(Ua=O(176));a={target:N(a),Rb:!0,Kb:h,Mb:d,Nb:function(f){var m=Ua;G[m>>3]=f.timeStamp;var n=m>>2;E[n+2]=f.location;E[n+3]=f.ctrlKey;E[n+4]=f.shiftKey;E[n+5]=f.altKey;E[n+6]=f.metaKey;E[n+7]=f.repeat;E[n+8]=f.charCode;E[n+9]=f.keyCode;E[n+10]=f.which;B(f.key||"",C,m+44,32);B(f.code||"",C,m+76,32);B(f.char||"",C,m+108,32);B(f.locale||"",C,m+140,32);H.get(d)(e,m,b)&&f.preventDefault()},Lb:c};M(a)}
function db(a,b,c){G[a>>3]=b.timeStamp;a>>=2;E[a+2]=b.screenX;E[a+3]=b.screenY;E[a+4]=b.clientX;E[a+5]=b.clientY;E[a+6]=b.ctrlKey;E[a+7]=b.shiftKey;E[a+8]=b.altKey;E[a+9]=b.metaKey;va[2*a+20]=b.button;va[2*a+21]=b.buttons;E[a+11]=b.movementX;E[a+12]=b.movementY;c=ab(c);E[a+13]=b.clientX-c.left;E[a+14]=b.clientY-c.top}
function P(a,b,c,d,e,h){Va||(Va=O(72));a=N(a);M({target:a,Rb:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,Kb:h,Mb:d,Nb:function(f){f=f||event;db(Va,f,a);H.get(d)(e,Va,b)&&f.preventDefault()},Lb:c})}function eb(a,b,c,d,e){Wa||(Wa=O(260));M({target:a,Kb:e,Mb:d,Nb:function(h){h=h||event;var f=Wa,m=document.pointerLockElement||document.Yb||document.$b||document.Zb;E[f>>2]=!!m;var n=m&&m.id?m.id:"";B(Sa(m),C,f+4,128);B(n,C,f+132,128);H.get(d)(20,f,b)&&h.preventDefault()},Lb:c})}
function fb(a,b,c,d,e){M({target:a,Kb:e,Mb:d,Nb:function(h){h=h||event;H.get(d)(38,0,b)&&h.preventDefault()},Lb:c})}
function gb(a,b,c,d){Xa||(Xa=O(36));a=N(a);M({target:a,Kb:"resize",Mb:d,Nb:function(e){e=e||event;if(e.target==a){var h=document.body;if(h){var f=Xa;E[f>>2]=e.detail;E[f+4>>2]=h.clientWidth;E[f+8>>2]=h.clientHeight;E[f+12>>2]=innerWidth;E[f+16>>2]=innerHeight;E[f+20>>2]=outerWidth;E[f+24>>2]=outerHeight;E[f+28>>2]=pageXOffset;E[f+32>>2]=pageYOffset;H.get(d)(10,f,b)&&e.preventDefault()}}},Lb:c})}
function hb(a,b,c,d,e,h){Ya||(Ya=O(1696));a=N(a);M({target:a,Rb:"touchstart"==h||"touchend"==h,Kb:h,Mb:d,Nb:function(f){for(var m={},n=f.touches,p=0;p<n.length;++p){var q=n[p];m[q.identifier]=q}n=f.changedTouches;for(p=0;p<n.length;++p)q=n[p],q.sc=1,m[q.identifier]=q;n=f.targetTouches;for(p=0;p<n.length;++p)m[n[p].identifier].tc=1;n=Ya;G[n>>3]=f.timeStamp;q=n>>2;E[q+3]=f.ctrlKey;E[q+4]=f.shiftKey;E[q+5]=f.altKey;E[q+6]=f.metaKey;q+=7;var X=ab(a),nb=0;for(p in m){var A=m[p];E[q]=A.identifier;E[q+1]=
A.screenX;E[q+2]=A.screenY;E[q+3]=A.clientX;E[q+4]=A.clientY;E[q+5]=A.pageX;E[q+6]=A.pageY;E[q+7]=A.sc;E[q+8]=A.tc;E[q+9]=A.clientX-X.left;E[q+10]=A.clientY-X.top;q+=13;if(31<++nb)break}E[n+8>>2]=nb;H.get(d)(e,n,b)&&f.preventDefault()},Lb:c})}function ib(a,b,c,d,e,h){a={target:N(a),Kb:h,Mb:d,Nb:function(f){f=f||event;H.get(d)(e,0,b)&&f.preventDefault()},Lb:c};M(a)}
function jb(a,b,c,d){Za||(Za=O(104));M({target:a,Rb:!0,Kb:"wheel",Mb:d,Nb:function(e){e=e||event;var h=Za;db(h,e,a);G[h+72>>3]=e.deltaX;G[h+80>>3]=e.deltaY;G[h+88>>3]=e.deltaZ;E[h+96>>2]=e.deltaMode;H.get(d)(9,h,b)&&e.preventDefault()},Lb:c})}
function kb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,h){b.drawArraysInstancedANGLE(c,d,e,h)},a.drawElementsInstanced=function(c,d,e,h,f){b.drawElementsInstancedANGLE(c,d,e,h,f)})}
function lb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function mb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function ob(a){a.xc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function pb(a){a.Ac=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function qb(a){a.Cc=a.getExtension("WEBGL_multi_draw")}var rb=1,sb=[],Q=[],tb=[],ub=[],vb=[],R=[],wb=[],xb=[],yb={},zb={};function S(a){Ab||(Ab=a)}function Bb(a){for(var b=rb++,c=a.length;c<b;c++)a[c]=null;return b}
function Cb(a,b){a.dc||(a.dc=a.getContext,a.getContext=function(d,e){e=a.dc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.ec?a.getContext("webgl2",b):a.getContext("webgl",b);return c?Db(c,b):0}function Db(a,b){var c=Bb(xb),d={zc:c,attributes:b,version:b.ec,Vb:a};a.canvas&&(a.canvas.uc=d);xb[c]=d;("undefined"===typeof b.cc||b.cc)&&Eb(d);return c}
function Eb(a){a||(a=T);if(!a.rc){a.rc=!0;var b=a.Vb;kb(b);lb(b);mb(b);ob(b);pb(b);2<=a.version&&(b.bc=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.bc)b.bc=b.getExtension("EXT_disjoint_timer_query");qb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var Ab,T,Fb=["default","low-power","high-performance"];
function Gb(a,b,c,d){for(var e=0;e<a;e++){var h=U[c](),f=h&&Bb(d);h?(h.name=f,d[f]=h):S(1282);E[b+4*e>>2]=f}}
function Hb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=U.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>T.version){S(1282);return}c=2*(U.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>T.version){S(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=U.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":S(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:S(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)E[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){S(1280);x("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:S(1280);x("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}E[b>>2]=c}else S(1281)}
function V(a){var b=sa(a)+1,c=O(b);B(a,C,c,b);return c}function Ib(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function W(a){a-=5120;return 0==a?oa:1==a?C:2==a?va:4==a?E:6==a?F:5==a||28922==a||28520==a||30779==a||30782==a?xa:wa}function Jb(a){return 31-Math.clz32(a.BYTES_PER_ELEMENT)}function Kb(a,b,c,d,e){a=W(a);var h=Jb(a);return a.subarray(e>>h,e+d*(c*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[b-6402]||1)*(1<<h)+4-1&-4)>>h)}
function Y(a){var b=U.oc;if(b){var c=b.Qb[a];"number"===typeof c&&(b.Qb[a]=c=U.getUniformLocation(b,b.mc[a]+(0<c?"["+c+"]":"")));return c}S(1282)}for(var Z=[],U,Lb=new Float32Array(288),Mb=0;288>Mb;++Mb)Z[Mb]=Lb.subarray(0,Mb+1);
var Rb={P:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},ia:function(a,b,c){a=N(a);if(!a)return-4;a=ab(a);G[b>>3]=a.width;G[c>>3]=a.height;return 0},Ya:function(a,b,c){C.copyWithin(a,b,b+c)},Ka:function(a,b){function c(d){H.get(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},Za:function(a){var b=C.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(a,d);0<d%65536&&(d+=65536-d%65536);a:{try{ka.grow(Math.min(2147483648,
d)-ua.byteLength+65535>>>16);ya();var e=1;break a}catch(h){}e=void 0}if(e)return!0}return!1},Q:function(a,b,c,d){bb(a,b,c,d,12,"blur");return 0},M:function(a,b,c){a=N(a);if(!a)return-4;a.width=b;a.height=c;return 0},R:function(a,b,c,d){bb(a,b,c,d,13,"focus");return 0},_:function(a,b,c,d){cb(a,b,c,d,2,"keydown");return 0},Y:function(a,b,c,d){cb(a,b,c,d,1,"keypress");return 0},Z:function(a,b,c,d){cb(a,b,c,d,3,"keyup");return 0},ha:function(a,b,c,d){P(a,b,c,d,5,"mousedown");return 0},ba:function(a,b,
c,d){P(a,b,c,d,33,"mouseenter");return 0},aa:function(a,b,c,d){P(a,b,c,d,34,"mouseleave");return 0},ca:function(a,b,c,d){P(a,b,c,d,8,"mousemove");return 0},da:function(a,b,c,d){P(a,b,c,d,6,"mouseup");return 0},T:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.Yb||document.body.$b||document.body.Zb))return-1;a=N(a);if(!a)return-4;eb(a,b,c,d,"pointerlockchange");eb(a,b,c,d,"mozpointerlockchange");eb(a,b,c,d,"webkitpointerlockchange");eb(a,b,c,d,"mspointerlockchange");
return 0},S:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.Yb||document.body.$b||document.body.Zb))return-1;a=N(a);if(!a)return-4;fb(a,b,c,d,"pointerlockerror");fb(a,b,c,d,"mozpointerlockerror");fb(a,b,c,d,"webkitpointerlockerror");fb(a,b,c,d,"mspointerlockerror");return 0},Xa:function(a,b,c,d){gb(a,b,c,d);return 0},U:function(a,b,c,d){hb(a,b,c,d,25,"touchcancel");return 0},V:function(a,b,c,d){hb(a,b,c,d,23,"touchend");return 0},W:function(a,b,c,d){hb(a,b,c,d,24,
"touchmove");return 0},X:function(a,b,c,d){hb(a,b,c,d,22,"touchstart");return 0},O:function(a,b,c,d){ib(a,b,c,d,31,"webglcontextlost");return 0},N:function(a,b,c,d){ib(a,b,c,d,32,"webglcontextrestored");return 0},$:function(a,b,c,d){a=N(a);return"undefined"!==typeof a.onwheel?(jb(a,b,c,d),0):-1},C:function(a,b){b>>=2;b={alpha:!!E[b],depth:!!E[b+1],stencil:!!E[b+2],antialias:!!E[b+3],premultipliedAlpha:!!E[b+4],preserveDrawingBuffer:!!E[b+5],powerPreference:Fb[E[b+6]],failIfMajorPerformanceCaveat:!!E[b+
7],ec:E[b+8],Bc:E[b+9],cc:E[b+10],qc:E[b+11],Dc:E[b+12],Ec:E[b+13]};a=N(a);return!a||b.qc?0:Cb(a,b)},pa:function(a,b){a=xb[a];b=D(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&kb(U);"OES_vertex_array_object"==b&&lb(U);"WEBGL_draw_buffers"==b&&mb(U);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&ob(U);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&pb(U);"WEBGL_multi_draw"==b&&qb(U);return!!a.Vb.getExtension(b)},Ha:function(a){a>>=2;for(var b=0;14>b;++b)E[a+
b]=0;E[a]=E[a+1]=E[a+3]=E[a+4]=E[a+8]=E[a+10]=1},wa:function(a){T=xb[a];g.wc=U=T&&T.Vb;return!a||U?0:-5},b:function(a){U.activeTexture(a)},z:function(a,b){U.attachShader(Q[a],R[b])},e:function(a,b){35051==a?U.ac=b:35052==a&&(U.Ob=b);U.bindBuffer(a,sb[b])},h:function(a,b){U.bindFramebuffer(a,tb[b])},Aa:function(a,b){U.bindRenderbuffer(a,ub[b])},a:function(a,b){U.bindTexture(a,vb[b])},J:function(a){U.bindVertexArray(wb[a])},F:function(a,b,c,d){U.blendColor(a,b,c,d)},G:function(a,b){U.blendEquationSeparate(a,
b)},H:function(a,b,c,d){U.blendFuncSeparate(a,b,c,d)},p:function(a,b,c,d,e,h,f,m,n,p){U.blitFramebuffer(a,b,c,d,e,h,f,m,n,p)},Da:function(a,b,c,d){2<=T.version?c?U.bufferData(a,C,d,c,b):U.bufferData(a,b,d):U.bufferData(a,c?C.subarray(c,c+b):b,d)},Ca:function(a,b,c,d){2<=T.version?U.bufferSubData(a,b,C,d,c):U.bufferSubData(a,b,C.subarray(d,d+c))},kb:function(a){U.clear(a)},ga:function(a,b,c,d){U.clearColor(a,b,c,d)},mb:function(a){U.clearDepth(a)},lb:function(a){U.clearStencil(a)},j:function(a,b,c,
d){U.colorMask(!!a,!!b,!!c,!!d)},la:function(a){U.compileShader(R[a])},va:function(a,b,c,d,e,h,f,m){2<=T.version?U.Ob?U.compressedTexImage2D(a,b,c,d,e,h,f,m):U.compressedTexImage2D(a,b,c,d,e,h,C,m,f):U.compressedTexImage2D(a,b,c,d,e,h,m?C.subarray(m,m+f):null)},ta:function(a,b,c,d,e,h,f,m,n){U.Ob?U.compressedTexImage3D(a,b,c,d,e,h,f,m,n):U.compressedTexImage3D(a,b,c,d,e,h,f,C,n,m)},ra:function(){var a=Bb(Q),b=U.createProgram();b.name=a;b.Ub=b.Sb=b.Tb=0;b.Xb=1;Q[a]=b;return a},na:function(a){var b=
Bb(R);R[b]=U.createShader(a);return b},B:function(a){U.cullFace(a)},Ma:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2],e=sb[d];e&&(U.deleteBuffer(e),e.name=0,sb[d]=null,d==U.ac&&(U.ac=0),d==U.Ob&&(U.Ob=0))}},i:function(a,b){for(var c=0;c<a;++c){var d=E[b+4*c>>2],e=tb[d];e&&(U.deleteFramebuffer(e),e.name=0,tb[d]=null)}},K:function(a){if(a){var b=Q[a];b?(U.deleteProgram(b),b.name=0,Q[a]=null):S(1281)}},L:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2],e=ub[d];e&&(U.deleteRenderbuffer(e),e.name=
0,ub[d]=null)}},r:function(a){if(a){var b=R[a];b?(U.deleteShader(b),R[a]=null):S(1281)}},La:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2],e=vb[d];e&&(U.deleteTexture(e),e.name=0,vb[d]=null)}},Ja:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2];U.deleteVertexArray(wb[d]);wb[d]=null}},u:function(a){U.depthFunc(a)},t:function(a){U.depthMask(!!a)},d:function(a){U.disable(a)},I:function(a){U.disableVertexAttribArray(a)},ab:function(a,b,c){U.drawArrays(a,b,c)},bb:function(a,b,c,d){U.drawElements(a,
b,c,d)},g:function(a){U.enable(a)},hb:function(a){U.enableVertexAttribArray(a)},D:function(a){U.frontFace(a)},Ea:function(a,b){Gb(a,b,"createBuffer",sb)},Ba:function(a,b){Gb(a,b,"createRenderbuffer",ub)},xa:function(a,b){Gb(a,b,"createTexture",vb)},Ia:function(a,b){Gb(a,b,"createVertexArray",wb)},ja:function(a,b){return U.getAttribLocation(Q[a],D(b))},c:function(a,b){Hb(a,b)},oa:function(a,b,c,d){a=U.getProgramInfoLog(Q[a]);null===a&&(a="(unknown error)");b=0<b&&d?B(a,C,d,b):0;c&&(E[c>>2]=b)},y:function(a,
b,c){if(c)if(a>=rb)S(1281);else if(a=Q[a],35716==b)a=U.getProgramInfoLog(a),null===a&&(a="(unknown error)"),E[c>>2]=a.length+1;else if(35719==b){if(!a.Ub)for(b=0;b<U.getProgramParameter(a,35718);++b)a.Ub=Math.max(a.Ub,U.getActiveUniform(a,b).name.length+1);E[c>>2]=a.Ub}else if(35722==b){if(!a.Sb)for(b=0;b<U.getProgramParameter(a,35721);++b)a.Sb=Math.max(a.Sb,U.getActiveAttrib(a,b).name.length+1);E[c>>2]=a.Sb}else if(35381==b){if(!a.Tb)for(b=0;b<U.getProgramParameter(a,35382);++b)a.Tb=Math.max(a.Tb,
U.getActiveUniformBlockName(a,b).length+1);E[c>>2]=a.Tb}else E[c>>2]=U.getProgramParameter(a,b);else S(1281)},ka:function(a,b,c,d){a=U.getShaderInfoLog(R[a]);null===a&&(a="(unknown error)");b=0<b&&d?B(a,C,d,b):0;c&&(E[c>>2]=b)},w:function(a,b,c){c?35716==b?(a=U.getShaderInfoLog(R[a]),null===a&&(a="(unknown error)"),E[c>>2]=a?a.length+1:0):35720==b?(a=U.getShaderSource(R[a]),E[c>>2]=a?a.length+1:0):E[c>>2]=U.getShaderParameter(R[a],b):S(1281)},Oa:function(a){var b=yb[a];if(!b){switch(a){case 7939:b=
U.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=V(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=U.getParameter(a))||S(1280);b=b&&V(b);break;case 7938:b=U.getParameter(7938);b=2<=T.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=V(b);break;case 35724:b=U.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=V(b);break;default:S(1280)}yb[a]=
b}return b},Na:function(a,b){if(2>T.version)return S(1282),0;var c=zb[a];if(c)return 0>b||b>=c.length?(S(1281),0):c[b];switch(a){case 7939:return c=U.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return V(d)}),c=zb[a]=c,0>b||b>=c.length?(S(1281),0):c[b];default:return S(1280),0}},k:function(a,b){b=D(b);if(a=Q[a]){var c=a,d=c.Qb,e=c.nc,h;if(!d)for(c.Qb=d={},c.mc={},h=0;h<U.getProgramParameter(c,35718);++h){var f=U.getActiveUniform(c,h);var m=f.name;
f=f.size;var n=Ib(m);n=0<n?m.slice(0,n):m;var p=c.Xb;c.Xb+=f;e[n]=[f,p];for(m=0;m<f;++m)d[p]=m,c.mc[p++]=n}c=a.Qb;d=0;e=b;h=Ib(b);0<h&&(d=parseInt(b.slice(h+1))>>>0,e=b.slice(0,h));if((e=a.nc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||U.getUniformLocation(a,b)))return d}else S(1281);return-1},qa:function(a){a=Q[a];U.linkProgram(a);a.Qb=0;a.nc={}},E:function(a,b){U.polygonOffset(a,b)},q:function(a){U.readBuffer(a)},ya:function(a,b,c,d){U.renderbufferStorage(a,b,c,d)},za:function(a,b,c,d,e){U.renderbufferStorageMultisample(a,
b,c,d,e)},nb:function(a,b,c,d){U.scissor(a,b,c,d)},ma:function(a,b,c,d){for(var e="",h=0;h<b;++h){var f=d?E[d+4*h>>2]:-1;e+=D(E[c+4*h>>2],0>f?void 0:f)}U.shaderSource(R[a],e)},Ga:function(a,b,c){U.stencilFunc(a,b,c)},fa:function(a,b,c,d){U.stencilFuncSeparate(a,b,c,d)},s:function(a){U.stencilMask(a)},Fa:function(a,b,c){U.stencilOp(a,b,c)},ea:function(a,b,c,d){U.stencilOpSeparate(a,b,c,d)},ua:function(a,b,c,d,e,h,f,m,n){if(2<=T.version)if(U.Ob)U.texImage2D(a,b,c,d,e,h,f,m,n);else if(n){var p=W(m);
U.texImage2D(a,b,c,d,e,h,f,m,p,n>>Jb(p))}else U.texImage2D(a,b,c,d,e,h,f,m,null);else U.texImage2D(a,b,c,d,e,h,f,m,n?Kb(m,f,d,e,n):null)},sa:function(a,b,c,d,e,h,f,m,n,p){if(U.Ob)U.texImage3D(a,b,c,d,e,h,f,m,n,p);else if(p){var q=W(n);U.texImage3D(a,b,c,d,e,h,f,m,n,q,p>>Jb(q))}else U.texImage3D(a,b,c,d,e,h,f,m,n,null)},A:function(a,b,c){U.texParameterf(a,b,c)},f:function(a,b,c){U.texParameteri(a,b,c)},$a:function(a,b,c,d,e,h,f,m,n){if(2<=T.version)if(U.Ob)U.texSubImage2D(a,b,c,d,e,h,f,m,n);else if(n){var p=
W(m);U.texSubImage2D(a,b,c,d,e,h,f,m,p,n>>Jb(p))}else U.texSubImage2D(a,b,c,d,e,h,f,m,null);else p=null,n&&(p=Kb(m,f,e,h,n)),U.texSubImage2D(a,b,c,d,e,h,f,m,p)},_a:function(a,b,c,d,e,h,f,m,n,p,q){if(U.Ob)U.texSubImage3D(a,b,c,d,e,h,f,m,n,p,q);else if(q){var X=W(p);U.texSubImage3D(a,b,c,d,e,h,f,m,n,p,X,q>>Jb(X))}else U.texSubImage3D(a,b,c,d,e,h,f,m,n,p,null)},gb:function(a,b,c){if(2<=T.version)U.uniform1fv(Y(a),F,c>>2,b);else{if(288>=b)for(var d=Z[b-1],e=0;e<b;++e)d[e]=F[c+4*e>>2];else d=F.subarray(c>>
2,c+4*b>>2);U.uniform1fv(Y(a),d)}},x:function(a,b){U.uniform1i(Y(a),b)},fb:function(a,b,c){if(2<=T.version)U.uniform2fv(Y(a),F,c>>2,2*b);else{if(144>=b)for(var d=Z[2*b-1],e=0;e<2*b;e+=2)d[e]=F[c+4*e>>2],d[e+1]=F[c+(4*e+4)>>2];else d=F.subarray(c>>2,c+8*b>>2);U.uniform2fv(Y(a),d)}},eb:function(a,b,c){if(2<=T.version)U.uniform3fv(Y(a),F,c>>2,3*b);else{if(96>=b)for(var d=Z[3*b-1],e=0;e<3*b;e+=3)d[e]=F[c+4*e>>2],d[e+1]=F[c+(4*e+4)>>2],d[e+2]=F[c+(4*e+8)>>2];else d=F.subarray(c>>2,c+12*b>>2);U.uniform3fv(Y(a),
d)}},db:function(a,b,c){if(2<=T.version)U.uniform4fv(Y(a),F,c>>2,4*b);else{if(72>=b){var d=Z[4*b-1],e=F;c>>=2;for(var h=0;h<4*b;h+=4){var f=c+h;d[h]=e[f];d[h+1]=e[f+1];d[h+2]=e[f+2];d[h+3]=e[f+3]}}else d=F.subarray(c>>2,c+16*b>>2);U.uniform4fv(Y(a),d)}},cb:function(a,b,c,d){if(2<=T.version)U.uniformMatrix4fv(Y(a),!!c,F,d>>2,16*b);else{if(18>=b){var e=Z[16*b-1],h=F;d>>=2;for(var f=0;f<16*b;f+=16){var m=d+f;e[f]=h[m];e[f+1]=h[m+1];e[f+2]=h[m+2];e[f+3]=h[m+3];e[f+4]=h[m+4];e[f+5]=h[m+5];e[f+6]=h[m+6];
e[f+7]=h[m+7];e[f+8]=h[m+8];e[f+9]=h[m+9];e[f+10]=h[m+10];e[f+11]=h[m+11];e[f+12]=h[m+12];e[f+13]=h[m+13];e[f+14]=h[m+14];e[f+15]=h[m+15]}}else e=F.subarray(d>>2,d+64*b>>2);U.uniformMatrix4fv(Y(a),!!c,e)}},l:function(a){a=Q[a];U.useProgram(a);U.oc=a},ib:function(a,b){U.vertexAttribDivisor(a,b)},jb:function(a,b,c,d,e,h){U.vertexAttribPointer(a,b,c,!!d,e,h)},ob:function(a,b,c,d){U.viewport(a,b,c,d)},Wa:function(){g.fc=function(a){0!=Nb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",
g.fc)},Va:function(){g.lc=function(a){a=a.clipboardData.getData("text");na("_sapp_emsc_onpaste",["string"],[a])};window.addEventListener("paste",g.lc)},Ua:function(a){g.Fc=[];a=D(a);a=document.getElementById(a);g.hc=function(b){b.stopPropagation();b.preventDefault()};g.ic=function(b){b.stopPropagation();b.preventDefault()};g.jc=function(b){b.stopPropagation();b.preventDefault()};g.kc=function(b){b.stopPropagation();b.preventDefault();var c=b.dataTransfer.files;g.Gc=c;Ob(c.length);var d;for(d=0;d<
c.length;d++)na("_sapp_emsc_drop",["number","string"],[d,c[d].name]);Pb(b.clientX,b.clientY)};a.addEventListener("dragenter",g.hc,!1);a.addEventListener("dragleave",g.ic,!1);a.addEventListener("dragover",g.jc,!1);a.addEventListener("drop",g.kc,!1)},Qa:function(){var a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},o:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Qb()});
document.body.append(a)},n:function(){document.getElementById("_sokol_app_input_element").focus()},pb:function(a){a=D(a);g.Pb=document.getElementById(a);g.Pb||console.log("sokol_app.h: invalid target:"+a);g.Pb.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Ta:function(){window.removeEventListener("beforeunload",g.fc)},Sa:function(){window.removeEventListener("paste",g.lc)},Ra:function(a){a=D(a);a=document.getElementById(a);a.removeEventListener("dragenter",
g.hc);a.removeEventListener("dragleave",g.ic);a.removeEventListener("dragover",g.jc);a.removeEventListener("drop",g.kc)},v:function(){g.Pb&&g.Pb.requestPointerLock&&g.Pb.requestPointerLock()},Pa:function(a,b,c){var d=document.createElement("canvas");d.width=a;d.height=b;var e=d.getContext("2d"),h=e.createImageData(a,b);h.data.set(C.subarray(c,c+a*b*4));e.putImageData(h,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},
m:function(){document.getElementById("_sokol_app_input_element").blur()}};
(function(){function a(e){g.asm=e.exports;ka=g.asm.qb;ya();H=g.asm.Jb;Aa.unshift(g.asm.rb);I--;g.monitorRunDependencies&&g.monitorRunDependencies(I);0==I&&(null!==Fa&&(clearInterval(Fa),Fa=null),J&&(e=J,J=null,e()))}function b(e){a(e.instance)}function c(e){return Ja().then(function(h){return WebAssembly.instantiate(h,d)}).then(function(h){return h}).then(e,function(h){x("failed to asynchronously prepare wasm: "+h);w(h)})}var d={a:Rb};I++;g.monitorRunDependencies&&g.monitorRunDependencies(I);if(g.instantiateWasm)try{return g.instantiateWasm(d,
a)}catch(e){return x("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return y||"function"!==typeof WebAssembly.instantiateStreaming||Ga()||K.startsWith("file://")||"function"!==typeof fetch?c(b):fetch(K,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(h){x("wasm streaming compile failed: "+h);x("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
g.___wasm_call_ctors=function(){return(g.___wasm_call_ctors=g.asm.rb).apply(null,arguments)};var Qb=g.__sapp_emsc_notify_keyboard_hidden=function(){return(Qb=g.__sapp_emsc_notify_keyboard_hidden=g.asm.sb).apply(null,arguments)};g.__sapp_emsc_onpaste=function(){return(g.__sapp_emsc_onpaste=g.asm.tb).apply(null,arguments)};
var Nb=g.__sapp_html5_get_ask_leave_site=function(){return(Nb=g.__sapp_html5_get_ask_leave_site=g.asm.ub).apply(null,arguments)},Ob=g.__sapp_emsc_begin_drop=function(){return(Ob=g.__sapp_emsc_begin_drop=g.asm.vb).apply(null,arguments)};g.__sapp_emsc_drop=function(){return(g.__sapp_emsc_drop=g.asm.wb).apply(null,arguments)};var Pb=g.__sapp_emsc_end_drop=function(){return(Pb=g.__sapp_emsc_end_drop=g.asm.xb).apply(null,arguments)};
g.__sapp_emsc_invoke_fetch_cb=function(){return(g.__sapp_emsc_invoke_fetch_cb=g.asm.yb).apply(null,arguments)};g._main=function(){return(g._main=g.asm.zb).apply(null,arguments)};g.__saudio_emsc_pull=function(){return(g.__saudio_emsc_pull=g.asm.Ab).apply(null,arguments)};g.__sfetch_emsc_head_response=function(){return(g.__sfetch_emsc_head_response=g.asm.Bb).apply(null,arguments)};g.__sfetch_emsc_get_response=function(){return(g.__sfetch_emsc_get_response=g.asm.Cb).apply(null,arguments)};
g.__sfetch_emsc_failed_http_status=function(){return(g.__sfetch_emsc_failed_http_status=g.asm.Db).apply(null,arguments)};g.__sfetch_emsc_failed_buffer_too_small=function(){return(g.__sfetch_emsc_failed_buffer_too_small=g.asm.Eb).apply(null,arguments)};
var O=g._malloc=function(){return(O=g._malloc=g.asm.Fb).apply(null,arguments)},pa=g.stackSave=function(){return(pa=g.stackSave=g.asm.Gb).apply(null,arguments)},qa=g.stackRestore=function(){return(qa=g.stackRestore=g.asm.Hb).apply(null,arguments)},z=g.stackAlloc=function(){return(z=g.stackAlloc=g.asm.Ib).apply(null,arguments)},Sb;function ia(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}J=function Tb(){Sb||Ub();Sb||(J=Tb)};
function Ub(a){function b(){if(!Sb&&(Sb=!0,g.calledRun=!0,!la)){Ka(Aa);Ka(Ba);if(g.onRuntimeInitialized)g.onRuntimeInitialized();if(Vb){var c=a,d=g._main;c=c||[];var e=c.length+1,h=z(4*(e+1));E[h>>2]=ta(ba);for(var f=1;f<e;f++)E[(h>>2)+f]=ta(c[f-1]);E[(h>>2)+e]=0;try{var m=d(e,h);if(!(noExitRuntime||0<ja)){if(g.onExit)g.onExit(m);la=!0}ca(m,new ia(m))}catch(n){c=n,c instanceof ia||"unwind"==c||(x("exception thrown: "+c),ca(1,c))}finally{}}if(g.postRun)for("function"==typeof g.postRun&&(g.postRun=
[g.postRun]);g.postRun.length;)c=g.postRun.shift(),Da.unshift(c);Ka(Da)}}a=a||aa;if(!(0<I)){if(g.preRun)for("function"==typeof g.preRun&&(g.preRun=[g.preRun]);g.preRun.length;)Ea();Ka(za);0<I||(g.setStatus?(g.setStatus("Running..."),setTimeout(function(){setTimeout(function(){g.setStatus("")},1);b()},1)):b())}}g.run=Ub;if(g.preInit)for("function"==typeof g.preInit&&(g.preInit=[g.preInit]);0<g.preInit.length;)g.preInit.pop()();var Vb=!0;g.noInitialRun&&(Vb=!1);Ub();
