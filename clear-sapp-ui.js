
var f;f||(f=typeof Module !== 'undefined' ? Module : {});var k={},l;for(l in f)f.hasOwnProperty(l)&&(k[l]=f[l]);var aa=[],ba="./this.program";function ca(a,b){throw b;}var da="object"===typeof window,r="function"===typeof importScripts,t="",ea,fa,ha,u,v;
if("object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)t=r?require("path").dirname(t)+"/":__dirname+"/",ea=function(a,b){u||(u=require("fs"));v||(v=require("path"));a=v.normalize(a);return u.readFileSync(a,b?null:"utf8")},ha=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||w("Assertion failed: undefined");return a},fa=function(a,b,c){u||(u=require("fs"));v||(v=require("path"));a=v.normalize(a);u.readFile(a,function(d,e){d?c(d):b(e.buffer)})},
1<process.argv.length&&(ba=process.argv[1].replace(/\\/g,"/")),aa=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=f),process.on("uncaughtException",function(a){if(!(a instanceof ia))throw a;}),process.on("unhandledRejection",w),ca=function(a,b){if(noExitRuntime||0<ja)throw process.exitCode=a,b;process.exit(a)},f.inspect=function(){return"[Emscripten Module object]"};else if(da||r)r?t=self.location.href:"undefined"!==typeof document&&document.currentScript&&(t=document.currentScript.src),
t=0!==t.indexOf("blob:")?t.substr(0,t.lastIndexOf("/")+1):"",ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},r&&(ha=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),fa=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};
var ka=f.print||console.log.bind(console),x=f.printErr||console.warn.bind(console);for(l in k)k.hasOwnProperty(l)&&(f[l]=k[l]);k=null;f.arguments&&(aa=f.arguments);f.thisProgram&&(ba=f.thisProgram);f.quit&&(ca=f.quit);var y;f.wasmBinary&&(y=f.wasmBinary);var noExitRuntime=f.noExitRuntime||!0;"object"!==typeof WebAssembly&&w("no native wasm support detected");var la,ma=!1;
function na(a){var b=f["_"+a];b||w("Assertion failed: Cannot call unknown function "+(a+", make sure it is exported"));return b}function oa(a,b,c){var d={string:function(n){var p=0;if(null!==n&&void 0!==n&&0!==n){var q=(n.length<<2)+1;p=z(q);B(n,C,p,q)}return p},array:function(n){var p=z(n.length);pa.set(n,p);return p}};a=na(a);var e=[],h=0;if(c)for(var g=0;g<c.length;g++){var m=d[b[g]];m?(0===h&&(h=qa()),e[g]=m(c[g])):e[g]=c[g]}b=a.apply(null,e);b=function(n){0!==h&&ra(h);return n}(b)}
var sa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function ta(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&sa)return sa.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var h=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|h);else{var g=a[b++]&63;e=224==(e&240)?(e&15)<<12|h<<6|g:(e&7)<<18|h<<12|g<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function D(a,b){return a?ta(C,a,b):""}
function B(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var h=0;h<a.length;++h){var g=a.charCodeAt(h);if(55296<=g&&57343>=g){var m=a.charCodeAt(++h);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-e}
function ua(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function va(a){var b=ua(a)+1,c=z(b);B(a,pa,c,b);return c}var wa,pa,C,xa,ya,E,za,F,G;
function Aa(){var a=la.buffer;wa=a;f.HEAP8=pa=new Int8Array(a);f.HEAP16=xa=new Int16Array(a);f.HEAP32=E=new Int32Array(a);f.HEAPU8=C=new Uint8Array(a);f.HEAPU16=ya=new Uint16Array(a);f.HEAPU32=za=new Uint32Array(a);f.HEAPF32=F=new Float32Array(a);f.HEAPF64=G=new Float64Array(a)}var H,Ba=[],Ca=[],Da=[],Ea=[],Fa=[],ja=0;function Ga(){var a=f.preRun.shift();Ba.unshift(a)}var I=0,Ha=null,J=null;f.preloadedImages={};f.preloadedAudios={};
function w(a){if(f.onAbort)f.onAbort(a);x(a);ma=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}function Ia(){return K.startsWith("data:application/octet-stream;base64,")}var K;K="clear-sapp-ui.wasm";if(!Ia()){var Ja=K;K=f.locateFile?f.locateFile(Ja,t):t+Ja}function Ka(){var a=K;try{if(a==K&&y)return new Uint8Array(y);if(ha)return ha(a);throw"both async and sync fetching of the wasm failed";}catch(b){w(b)}}
function La(){if(!y&&(da||r)){if("function"===typeof fetch&&!K.startsWith("file://"))return fetch(K,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+K+"'";return a.arrayBuffer()}).catch(function(){return Ka()});if(fa)return new Promise(function(a,b){fa(K,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ka()})}
function Ma(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(f);else{var c=b.Gc;"number"===typeof c?void 0===b.cc?H.get(c)():H.get(c)(b.cc):c(void 0===b.cc?null:b.cc)}}}var Na=[null,[],[]],Oa={},Pa=0;function Qa(){for(var a=L.length-1;0<=a;--a)Ra(a);L=[];Sa=[]}var Sa=[];function Ta(){if(Pa&&Ua.Yb)for(var a=0;a<Sa.length;++a){var b=Sa[a];Sa.splice(a,1);--a;b.Qc.apply(null,b.Cc)}}var L=[];function Ra(a){var b=L[a];b.target.removeEventListener(b.Rb,b.wc,b.Sb);L.splice(a,1)}
function M(a){function b(d){++Pa;Ua=a;Ta();a.Ub(d);Ta();--Pa}if(a.Tb)a.wc=b,a.target.addEventListener(a.Rb,b,a.Sb),L.push(a),Va||(Ea.push(Qa),Va=!0);else for(var c=0;c<L.length;++c)L[c].target==a.target&&L[c].Rb==a.Rb&&Ra(c--)}function Wa(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}var Va,Ua,Xa,Ya,Za,$a,ab,bb,cb,db=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];
function N(a){a=2<a?D(a):a;return db[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}function eb(a){return 0>db.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}function fb(a,b,c,d,e,h){Xa||(Xa=O(256));a={target:N(a),Rb:h,Tb:d,Ub:function(g){g=g||event;var m=g.target.id?g.target.id:"",n=Xa;B(Wa(g.target),C,n+0,128);B(m,C,n+128,128);H.get(d)(e,n,b)&&g.preventDefault()},Sb:c};M(a)}
function gb(a,b,c,d,e,h){Ya||(Ya=O(176));a={target:N(a),Yb:!0,Rb:h,Tb:d,Ub:function(g){var m=Ya;G[m>>3]=g.timeStamp;var n=m>>2;E[n+2]=g.location;E[n+3]=g.ctrlKey;E[n+4]=g.shiftKey;E[n+5]=g.altKey;E[n+6]=g.metaKey;E[n+7]=g.repeat;E[n+8]=g.charCode;E[n+9]=g.keyCode;E[n+10]=g.which;B(g.key||"",C,m+44,32);B(g.code||"",C,m+76,32);B(g.char||"",C,m+108,32);B(g.locale||"",C,m+140,32);H.get(d)(e,m,b)&&g.preventDefault()},Sb:c};M(a)}
function hb(a,b,c){G[a>>3]=b.timeStamp;a>>=2;E[a+2]=b.screenX;E[a+3]=b.screenY;E[a+4]=b.clientX;E[a+5]=b.clientY;E[a+6]=b.ctrlKey;E[a+7]=b.shiftKey;E[a+8]=b.altKey;E[a+9]=b.metaKey;xa[2*a+20]=b.button;xa[2*a+21]=b.buttons;E[a+11]=b.movementX;E[a+12]=b.movementY;c=eb(c);E[a+13]=b.clientX-c.left;E[a+14]=b.clientY-c.top}
function P(a,b,c,d,e,h){Za||(Za=O(72));a=N(a);M({target:a,Yb:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,Rb:h,Tb:d,Ub:function(g){g=g||event;hb(Za,g,a);H.get(d)(e,Za,b)&&g.preventDefault()},Sb:c})}function ib(a,b,c,d,e){$a||($a=O(260));M({target:a,Rb:e,Tb:d,Ub:function(h){h=h||event;var g=$a,m=document.pointerLockElement||document.ec||document.hc||document.fc;E[g>>2]=!!m;var n=m&&m.id?m.id:"";B(Wa(m),C,g+4,128);B(n,C,g+132,128);H.get(d)(20,g,b)&&h.preventDefault()},Sb:c})}
function jb(a,b,c,d,e){M({target:a,Rb:e,Tb:d,Ub:function(h){h=h||event;H.get(d)(38,0,b)&&h.preventDefault()},Sb:c})}
function kb(a,b,c,d){ab||(ab=O(36));a=N(a);M({target:a,Rb:"resize",Tb:d,Ub:function(e){e=e||event;if(e.target==a){var h=document.body;if(h){var g=ab;E[g>>2]=e.detail;E[g+4>>2]=h.clientWidth;E[g+8>>2]=h.clientHeight;E[g+12>>2]=innerWidth;E[g+16>>2]=innerHeight;E[g+20>>2]=outerWidth;E[g+24>>2]=outerHeight;E[g+28>>2]=pageXOffset;E[g+32>>2]=pageYOffset;H.get(d)(10,g,b)&&e.preventDefault()}}},Sb:c})}
function lb(a,b,c,d,e,h){bb||(bb=O(1696));a=N(a);M({target:a,Yb:"touchstart"==h||"touchend"==h,Rb:h,Tb:d,Ub:function(g){for(var m={},n=g.touches,p=0;p<n.length;++p){var q=n[p];m[q.identifier]=q}n=g.changedTouches;for(p=0;p<n.length;++p)q=n[p],q.zc=1,m[q.identifier]=q;n=g.targetTouches;for(p=0;p<n.length;++p)m[n[p].identifier].Ac=1;n=bb;G[n>>3]=g.timeStamp;q=n>>2;E[q+3]=g.ctrlKey;E[q+4]=g.shiftKey;E[q+5]=g.altKey;E[q+6]=g.metaKey;q+=7;var Y=eb(a),Q=0;for(p in m){var A=m[p];E[q]=A.identifier;E[q+1]=
A.screenX;E[q+2]=A.screenY;E[q+3]=A.clientX;E[q+4]=A.clientY;E[q+5]=A.pageX;E[q+6]=A.pageY;E[q+7]=A.zc;E[q+8]=A.Ac;E[q+9]=A.clientX-Y.left;E[q+10]=A.clientY-Y.top;q+=13;if(31<++Q)break}E[n+8>>2]=Q;H.get(d)(e,n,b)&&g.preventDefault()},Sb:c})}function mb(a,b,c,d,e,h){a={target:N(a),Rb:h,Tb:d,Ub:function(g){g=g||event;H.get(d)(e,0,b)&&g.preventDefault()},Sb:c};M(a)}
function nb(a,b,c,d){cb||(cb=O(104));M({target:a,Yb:!0,Rb:"wheel",Tb:d,Ub:function(e){e=e||event;var h=cb;hb(h,e,a);G[h+72>>3]=e.deltaX;G[h+80>>3]=e.deltaY;G[h+88>>3]=e.deltaZ;E[h+96>>2]=e.deltaMode;H.get(d)(9,h,b)&&e.preventDefault()},Sb:c})}
function ob(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,h){b.drawArraysInstancedANGLE(c,d,e,h)},a.drawElementsInstanced=function(c,d,e,h,g){b.drawElementsInstancedANGLE(c,d,e,h,g)})}
function pb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function qb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function rb(a){a.Ec=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function sb(a){a.Jc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function tb(a){a.Lc=a.getExtension("WEBGL_multi_draw")}var ub=1,vb=[],R=[],wb=[],xb=[],yb=[],S=[],zb=[],Ab=[],Bb={},Cb={};function T(a){Db||(Db=a)}function Eb(a){for(var b=ub++,c=a.length;c<b;c++)a[c]=null;return b}
function Fb(a,b){a.lc||(a.lc=a.getContext,a.getContext=function(d,e){e=a.lc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.mc?a.getContext("webgl2",b):a.getContext("webgl",b);return c?Gb(c,b):0}function Gb(a,b){var c=Eb(Ab),d={Ic:c,attributes:b,version:b.mc,bc:a};a.canvas&&(a.canvas.Bc=d);Ab[c]=d;("undefined"===typeof b.kc||b.kc)&&Hb(d);return c}
function Hb(a){a||(a=U);if(!a.yc){a.yc=!0;var b=a.bc;ob(b);pb(b);qb(b);rb(b);sb(b);2<=a.version&&(b.jc=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.jc)b.jc=b.getExtension("EXT_disjoint_timer_query");tb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var Db,U,Ib=["default","low-power","high-performance"];
function Jb(a,b,c,d){for(var e=0;e<a;e++){var h=V[c](),g=h&&Eb(d);h?(h.name=g,d[g]=h):T(1282);E[b+4*e>>2]=g}}
function Kb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=V.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>U.version){T(1282);return}c=2*(V.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>U.version){T(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=V.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":T(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:T(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)E[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){T(1280);x("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:T(1280);x("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}E[b>>2]=c}else T(1281)}
function W(a){var b=ua(a)+1,c=O(b);B(a,C,c,b);return c}function Lb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function Mb(a){a-=5120;return 0==a?pa:1==a?C:2==a?xa:4==a?E:6==a?F:5==a||28922==a||28520==a||30779==a||30782==a?za:ya}function X(a){var b=V.vc;if(b){var c=b.Xb[a];"number"===typeof c&&(b.Xb[a]=c=V.getUniformLocation(b,b.tc[a]+(0<c?"["+c+"]":"")));return c}T(1282)}for(var Z=[],V,Nb=new Float32Array(288),Ob=0;288>Ob;++Ob)Z[Ob]=Nb.subarray(0,Ob+1);
var Tb={fa:function(){return 0},gb:function(){return 0},ib:function(){},S:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},oa:function(a,b,c){a=N(a);if(!a)return-4;a=eb(a);G[b>>3]=a.width;G[c>>3]=a.height;return 0},db:function(a,b,c){C.copyWithin(a,b,b+c)},Pa:function(a,b){function c(d){H.get(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},eb:function(a){var b=C.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,
a+100663296);d=Math.max(a,d);0<d%65536&&(d+=65536-d%65536);a:{try{la.grow(Math.min(2147483648,d)-wa.byteLength+65535>>>16);Aa();var e=1;break a}catch(h){}e=void 0}if(e)return!0}return!1},T:function(a,b,c,d){fb(a,b,c,d,12,"blur");return 0},P:function(a,b,c){a=N(a);if(!a)return-4;a.width=b;a.height=c;return 0},U:function(a,b,c,d){fb(a,b,c,d,13,"focus");return 0},ba:function(a,b,c,d){gb(a,b,c,d,2,"keydown");return 0},$:function(a,b,c,d){gb(a,b,c,d,1,"keypress");return 0},aa:function(a,b,c,d){gb(a,b,
c,d,3,"keyup");return 0},na:function(a,b,c,d){P(a,b,c,d,5,"mousedown");return 0},ea:function(a,b,c,d){P(a,b,c,d,33,"mouseenter");return 0},da:function(a,b,c,d){P(a,b,c,d,34,"mouseleave");return 0},ia:function(a,b,c,d){P(a,b,c,d,8,"mousemove");return 0},ja:function(a,b,c,d){P(a,b,c,d,6,"mouseup");return 0},W:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.ec||document.body.hc||document.body.fc))return-1;a=N(a);if(!a)return-4;ib(a,b,c,d,"pointerlockchange");
ib(a,b,c,d,"mozpointerlockchange");ib(a,b,c,d,"webkitpointerlockchange");ib(a,b,c,d,"mspointerlockchange");return 0},V:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.ec||document.body.hc||document.body.fc))return-1;a=N(a);if(!a)return-4;jb(a,b,c,d,"pointerlockerror");jb(a,b,c,d,"mozpointerlockerror");jb(a,b,c,d,"webkitpointerlockerror");jb(a,b,c,d,"mspointerlockerror");return 0},bb:function(a,b,c,d){kb(a,b,c,d);return 0},X:function(a,b,c,d){lb(a,b,c,d,25,"touchcancel");
return 0},Y:function(a,b,c,d){lb(a,b,c,d,23,"touchend");return 0},Z:function(a,b,c,d){lb(a,b,c,d,24,"touchmove");return 0},_:function(a,b,c,d){lb(a,b,c,d,22,"touchstart");return 0},R:function(a,b,c,d){mb(a,b,c,d,31,"webglcontextlost");return 0},Q:function(a,b,c,d){mb(a,b,c,d,32,"webglcontextrestored");return 0},ca:function(a,b,c,d){a=N(a);return"undefined"!==typeof a.onwheel?(nb(a,b,c,d),0):-1},H:function(a,b){b>>=2;b={alpha:!!E[b],depth:!!E[b+1],stencil:!!E[b+2],antialias:!!E[b+3],premultipliedAlpha:!!E[b+
4],preserveDrawingBuffer:!!E[b+5],powerPreference:Ib[E[b+6]],failIfMajorPerformanceCaveat:!!E[b+7],mc:E[b+8],Kc:E[b+9],kc:E[b+10],xc:E[b+11],Mc:E[b+12],Nc:E[b+13]};a=N(a);return!a||b.xc?0:Fb(a,b)},va:function(a,b){a=Ab[a];b=D(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&ob(V);"OES_vertex_array_object"==b&&pb(V);"WEBGL_draw_buffers"==b&&qb(V);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&rb(V);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&sb(V);"WEBGL_multi_draw"==
b&&tb(V);return!!a.bc.getExtension(b)},Ma:function(a){a>>=2;for(var b=0;14>b;++b)E[a+b]=0;E[a]=E[a+1]=E[a+3]=E[a+4]=E[a+8]=E[a+10]=1},Ca:function(a){U=Ab[a];f.Dc=V=U&&U.bc;return!a||V?0:-5},ga:function(){return 0},fb:function(a,b,c,d){a=Oa.Hc(a);b=Oa.Fc(a,b,c);E[d>>2]=b;return 0},cb:function(){},hb:function(a,b,c,d){for(var e=0,h=0;h<c;h++){for(var g=E[b+8*h>>2],m=E[b+(8*h+4)>>2],n=0;n<m;n++){var p=C[g+n],q=Na[a];0===p||10===p?((1===a?ka:x)(ta(q,0)),q.length=0):q.push(p)}e+=m}E[d>>2]=e;return 0},
b:function(a){V.activeTexture(a)},C:function(a,b){V.attachShader(R[a],S[b])},c:function(a,b){35051==a?V.ic=b:35052==a&&(V.Vb=b);V.bindBuffer(a,vb[b])},h:function(a,b){V.bindFramebuffer(a,wb[b])},Ga:function(a,b){V.bindRenderbuffer(a,xb[b])},a:function(a,b){V.bindTexture(a,yb[b])},N:function(a){V.bindVertexArray(zb[a])},J:function(a,b,c,d){V.blendColor(a,b,c,d)},K:function(a,b){V.blendEquationSeparate(a,b)},L:function(a,b,c,d){V.blendFuncSeparate(a,b,c,d)},p:function(a,b,c,d,e,h,g,m,n,p){V.blitFramebuffer(a,
b,c,d,e,h,g,m,n,p)},Ia:function(a,b,c,d){2<=U.version?c?V.bufferData(a,C,d,c,b):V.bufferData(a,b,d):V.bufferData(a,c?C.subarray(c,c+b):b,d)},E:function(a,b,c,d){2<=U.version?V.bufferSubData(a,b,C,d,c):V.bufferSubData(a,b,C.subarray(d,d+c))},tb:function(a){V.clear(a)},ma:function(a,b,c,d){V.clearColor(a,b,c,d)},vb:function(a){V.clearDepth(a)},ub:function(a){V.clearStencil(a)},j:function(a,b,c,d){V.colorMask(!!a,!!b,!!c,!!d)},ra:function(a){V.compileShader(S[a])},Ba:function(a,b,c,d,e,h,g,m){2<=U.version?
V.Vb?V.compressedTexImage2D(a,b,c,d,e,h,g,m):V.compressedTexImage2D(a,b,c,d,e,h,C,m,g):V.compressedTexImage2D(a,b,c,d,e,h,m?C.subarray(m,m+g):null)},za:function(a,b,c,d,e,h,g,m,n){V.Vb?V.compressedTexImage3D(a,b,c,d,e,h,g,m,n):V.compressedTexImage3D(a,b,c,d,e,h,g,C,n,m)},xa:function(){var a=Eb(R),b=V.createProgram();b.name=a;b.ac=b.Zb=b.$b=0;b.dc=1;R[a]=b;return a},ta:function(a){var b=Eb(S);S[b]=V.createShader(a);return b},F:function(a){V.cullFace(a)},Ra:function(a,b){for(var c=0;c<a;c++){var d=
E[b+4*c>>2],e=vb[d];e&&(V.deleteBuffer(e),e.name=0,vb[d]=null,d==V.ic&&(V.ic=0),d==V.Vb&&(V.Vb=0))}},i:function(a,b){for(var c=0;c<a;++c){var d=E[b+4*c>>2],e=wb[d];e&&(V.deleteFramebuffer(e),e.name=0,wb[d]=null)}},x:function(a){if(a){var b=R[a];b?(V.deleteProgram(b),b.name=0,R[a]=null):T(1281)}},O:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2],e=xb[d];e&&(V.deleteRenderbuffer(e),e.name=0,xb[d]=null)}},t:function(a){if(a){var b=S[a];b?(V.deleteShader(b),S[a]=null):T(1281)}},Qa:function(a,b){for(var c=
0;c<a;c++){var d=E[b+4*c>>2],e=yb[d];e&&(V.deleteTexture(e),e.name=0,yb[d]=null)}},Oa:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2];V.deleteVertexArray(zb[d]);zb[d]=null}},w:function(a){V.depthFunc(a)},v:function(a){V.depthMask(!!a)},e:function(a){V.disable(a)},M:function(a){V.disableVertexAttribArray(a)},jb:function(a,b,c){V.drawArrays(a,b,c)},kb:function(a,b,c,d){V.drawElements(a,b,c,d)},g:function(a){V.enable(a)},qb:function(a){V.enableVertexAttribArray(a)},G:function(a){V.frontFace(a)},
Ja:function(a,b){Jb(a,b,"createBuffer",vb)},Ha:function(a,b){Jb(a,b,"createRenderbuffer",xb)},Da:function(a,b){Jb(a,b,"createTexture",yb)},Na:function(a,b){Jb(a,b,"createVertexArray",zb)},pa:function(a,b){return V.getAttribLocation(R[a],D(b))},d:function(a,b){Kb(a,b)},ua:function(a,b,c,d){a=V.getProgramInfoLog(R[a]);null===a&&(a="(unknown error)");b=0<b&&d?B(a,C,d,b):0;c&&(E[c>>2]=b)},B:function(a,b,c){if(c)if(a>=ub)T(1281);else if(a=R[a],35716==b)a=V.getProgramInfoLog(a),null===a&&(a="(unknown error)"),
E[c>>2]=a.length+1;else if(35719==b){if(!a.ac)for(b=0;b<V.getProgramParameter(a,35718);++b)a.ac=Math.max(a.ac,V.getActiveUniform(a,b).name.length+1);E[c>>2]=a.ac}else if(35722==b){if(!a.Zb)for(b=0;b<V.getProgramParameter(a,35721);++b)a.Zb=Math.max(a.Zb,V.getActiveAttrib(a,b).name.length+1);E[c>>2]=a.Zb}else if(35381==b){if(!a.$b)for(b=0;b<V.getProgramParameter(a,35382);++b)a.$b=Math.max(a.$b,V.getActiveUniformBlockName(a,b).length+1);E[c>>2]=a.$b}else E[c>>2]=V.getProgramParameter(a,b);else T(1281)},
qa:function(a,b,c,d){a=V.getShaderInfoLog(S[a]);null===a&&(a="(unknown error)");b=0<b&&d?B(a,C,d,b):0;c&&(E[c>>2]=b)},z:function(a,b,c){c?35716==b?(a=V.getShaderInfoLog(S[a]),null===a&&(a="(unknown error)"),E[c>>2]=a?a.length+1:0):35720==b?(a=V.getShaderSource(S[a]),E[c>>2]=a?a.length+1:0):E[c>>2]=V.getShaderParameter(S[a],b):T(1281)},Ta:function(a){var b=Bb[a];if(!b){switch(a){case 7939:b=V.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=W(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=
V.getParameter(a))||T(1280);b=b&&W(b);break;case 7938:b=V.getParameter(7938);b=2<=U.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=W(b);break;case 35724:b=V.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=W(b);break;default:T(1280)}Bb[a]=b}return b},Sa:function(a,b){if(2>U.version)return T(1282),0;var c=Cb[a];if(c)return 0>b||b>=c.length?(T(1281),0):c[b];switch(a){case 7939:return c=
V.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return W(d)}),c=Cb[a]=c,0>b||b>=c.length?(T(1281),0):c[b];default:return T(1280),0}},l:function(a,b){b=D(b);if(a=R[a]){var c=a,d=c.Xb,e=c.uc,h;if(!d)for(c.Xb=d={},c.tc={},h=0;h<V.getProgramParameter(c,35718);++h){var g=V.getActiveUniform(c,h);var m=g.name;g=g.size;var n=Lb(m);n=0<n?m.slice(0,n):m;var p=c.dc;c.dc+=g;e[n]=[g,p];for(m=0;m<g;++m)d[p]=m,c.tc[p++]=n}c=a.Xb;d=0;e=b;h=Lb(b);0<h&&(d=parseInt(b.slice(h+
1))>>>0,e=b.slice(0,h));if((e=a.uc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||V.getUniformLocation(a,b)))return d}else T(1281);return-1},wa:function(a){a=R[a];V.linkProgram(a);a.Xb=0;a.uc={}},I:function(a,b){V.polygonOffset(a,b)},q:function(a){V.readBuffer(a)},Ea:function(a,b,c,d){V.renderbufferStorage(a,b,c,d)},Fa:function(a,b,c,d,e){V.renderbufferStorageMultisample(a,b,c,d,e)},r:function(a,b,c,d){V.scissor(a,b,c,d)},sa:function(a,b,c,d){for(var e="",h=0;h<b;++h){var g=d?E[d+4*h>>2]:-1;e+=D(E[c+4*h>>2],0>
g?void 0:g)}V.shaderSource(S[a],e)},La:function(a,b,c){V.stencilFunc(a,b,c)},la:function(a,b,c,d){V.stencilFuncSeparate(a,b,c,d)},u:function(a){V.stencilMask(a)},Ka:function(a,b,c){V.stencilOp(a,b,c)},ka:function(a,b,c,d){V.stencilOpSeparate(a,b,c,d)},Aa:function(a,b,c,d,e,h,g,m,n){if(2<=U.version)if(V.Vb)V.texImage2D(a,b,c,d,e,h,g,m,n);else if(n){var p=Mb(m);V.texImage2D(a,b,c,d,e,h,g,m,p,n>>31-Math.clz32(p.BYTES_PER_ELEMENT))}else V.texImage2D(a,b,c,d,e,h,g,m,null);else{p=V;var q=p.texImage2D;if(n){var Y=
Mb(m),Q=31-Math.clz32(Y.BYTES_PER_ELEMENT);n=Y.subarray(n>>Q,n+e*(d*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[g-6402]||1)*(1<<Q)+4-1&-4)>>Q)}else n=null;q.call(p,a,b,c,d,e,h,g,m,n)}},ya:function(a,b,c,d,e,h,g,m,n,p){if(V.Vb)V.texImage3D(a,b,c,d,e,h,g,m,n,p);else if(p){var q=Mb(n);V.texImage3D(a,b,c,d,e,h,g,m,n,q,p>>31-Math.clz32(q.BYTES_PER_ELEMENT))}else V.texImage3D(a,b,c,d,e,h,g,m,n,null)},D:function(a,b,c){V.texParameterf(a,b,c)},f:function(a,b,c){V.texParameteri(a,b,c)},
pb:function(a,b,c){if(2<=U.version)V.uniform1fv(X(a),F,c>>2,b);else{if(288>=b)for(var d=Z[b-1],e=0;e<b;++e)d[e]=F[c+4*e>>2];else d=F.subarray(c>>2,c+4*b>>2);V.uniform1fv(X(a),d)}},A:function(a,b){V.uniform1i(X(a),b)},ob:function(a,b,c){if(2<=U.version)V.uniform2fv(X(a),F,c>>2,2*b);else{if(144>=b)for(var d=Z[2*b-1],e=0;e<2*b;e+=2)d[e]=F[c+4*e>>2],d[e+1]=F[c+(4*e+4)>>2];else d=F.subarray(c>>2,c+8*b>>2);V.uniform2fv(X(a),d)}},nb:function(a,b,c){if(2<=U.version)V.uniform3fv(X(a),F,c>>2,3*b);else{if(96>=
b)for(var d=Z[3*b-1],e=0;e<3*b;e+=3)d[e]=F[c+4*e>>2],d[e+1]=F[c+(4*e+4)>>2],d[e+2]=F[c+(4*e+8)>>2];else d=F.subarray(c>>2,c+12*b>>2);V.uniform3fv(X(a),d)}},mb:function(a,b,c){if(2<=U.version)V.uniform4fv(X(a),F,c>>2,4*b);else{if(72>=b){var d=Z[4*b-1],e=F;c>>=2;for(var h=0;h<4*b;h+=4){var g=c+h;d[h]=e[g];d[h+1]=e[g+1];d[h+2]=e[g+2];d[h+3]=e[g+3]}}else d=F.subarray(c>>2,c+16*b>>2);V.uniform4fv(X(a),d)}},lb:function(a,b,c,d){if(2<=U.version)V.uniformMatrix4fv(X(a),!!c,F,d>>2,16*b);else{if(18>=b){var e=
Z[16*b-1],h=F;d>>=2;for(var g=0;g<16*b;g+=16){var m=d+g;e[g]=h[m];e[g+1]=h[m+1];e[g+2]=h[m+2];e[g+3]=h[m+3];e[g+4]=h[m+4];e[g+5]=h[m+5];e[g+6]=h[m+6];e[g+7]=h[m+7];e[g+8]=h[m+8];e[g+9]=h[m+9];e[g+10]=h[m+10];e[g+11]=h[m+11];e[g+12]=h[m+12];e[g+13]=h[m+13];e[g+14]=h[m+14];e[g+15]=h[m+15]}}else e=F.subarray(d>>2,d+64*b>>2);V.uniformMatrix4fv(X(a),!!c,e)}},k:function(a){a=R[a];V.useProgram(a);V.vc=a},rb:function(a,b){V.vertexAttribDivisor(a,b)},sb:function(a,b,c,d,e,h){V.vertexAttribPointer(a,b,c,!!d,
e,h)},s:function(a,b,c,d){V.viewport(a,b,c,d)},ab:function(){f.nc=function(a){0!=Pb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",f.nc)},$a:function(){f.sc=function(a){a=a.clipboardData.getData("text");oa("_sapp_emsc_onpaste",["string"],[a])};window.addEventListener("paste",f.sc)},_a:function(a){f.Oc=[];a=D(a);a=document.getElementById(a);f.oc=function(b){b.stopPropagation();b.preventDefault()};f.pc=function(b){b.stopPropagation();b.preventDefault()};f.qc=function(b){b.stopPropagation();
b.preventDefault()};f.rc=function(b){b.stopPropagation();b.preventDefault();var c=b.dataTransfer.files;f.Pc=c;Qb(c.length);var d;for(d=0;d<c.length;d++)oa("_sapp_emsc_drop",["number","string"],[d,c[d].name]);Rb(b.clientX,b.clientY)};a.addEventListener("dragenter",f.oc,!1);a.addEventListener("dragleave",f.pc,!1);a.addEventListener("dragover",f.qc,!1);a.addEventListener("drop",f.rc,!1)},Va:function(){var a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},o:function(){var a=
document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Sb()});document.body.append(a)},n:function(){document.getElementById("_sokol_app_input_element").focus()},wb:function(a){a=D(a);f.Wb=document.getElementById(a);f.Wb||console.log("sokol_app.h: invalid target:"+a);f.Wb.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Za:function(){window.removeEventListener("beforeunload",
f.nc)},Ya:function(){window.removeEventListener("paste",f.sc)},Xa:function(a){a=D(a);a=document.getElementById(a);a.removeEventListener("dragenter",f.oc);a.removeEventListener("dragleave",f.pc);a.removeEventListener("dragover",f.qc);a.removeEventListener("drop",f.rc)},y:function(){f.Wb&&f.Wb.requestPointerLock&&f.Wb.requestPointerLock()},Ua:function(a,b,c){var d=document.createElement("canvas");d.width=a;d.height=b;var e=d.getContext("2d"),h=e.createImageData(a,b);h.data.set(C.subarray(c,c+a*b*4));
e.putImageData(h,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},m:function(){document.getElementById("_sokol_app_input_element").blur()},Wa:function(a){a=D(a);var b=document.createElement("textarea");b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");b.setAttribute("spellcheck","false");b.style.left="-100px";b.style.top="-100px";b.style.height=1;b.style.width=
1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");document.body.removeChild(b)},ha:function(){return navigator.userAgent.includes("Macintosh")?1:0}};
(function(){function a(e){f.asm=e.exports;la=f.asm.xb;Aa();H=f.asm.Qb;Ca.unshift(f.asm.yb);I--;f.monitorRunDependencies&&f.monitorRunDependencies(I);0==I&&(null!==Ha&&(clearInterval(Ha),Ha=null),J&&(e=J,J=null,e()))}function b(e){a(e.instance)}function c(e){return La().then(function(h){return WebAssembly.instantiate(h,d)}).then(function(h){return h}).then(e,function(h){x("failed to asynchronously prepare wasm: "+h);w(h)})}var d={a:Tb};I++;f.monitorRunDependencies&&f.monitorRunDependencies(I);if(f.instantiateWasm)try{return f.instantiateWasm(d,
a)}catch(e){return x("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return y||"function"!==typeof WebAssembly.instantiateStreaming||Ia()||K.startsWith("file://")||"function"!==typeof fetch?c(b):fetch(K,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(h){x("wasm streaming compile failed: "+h);x("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
f.___wasm_call_ctors=function(){return(f.___wasm_call_ctors=f.asm.yb).apply(null,arguments)};var Sb=f.__sapp_emsc_notify_keyboard_hidden=function(){return(Sb=f.__sapp_emsc_notify_keyboard_hidden=f.asm.zb).apply(null,arguments)};f.__sapp_emsc_onpaste=function(){return(f.__sapp_emsc_onpaste=f.asm.Ab).apply(null,arguments)};
var Pb=f.__sapp_html5_get_ask_leave_site=function(){return(Pb=f.__sapp_html5_get_ask_leave_site=f.asm.Bb).apply(null,arguments)},Qb=f.__sapp_emsc_begin_drop=function(){return(Qb=f.__sapp_emsc_begin_drop=f.asm.Cb).apply(null,arguments)};f.__sapp_emsc_drop=function(){return(f.__sapp_emsc_drop=f.asm.Db).apply(null,arguments)};var Rb=f.__sapp_emsc_end_drop=function(){return(Rb=f.__sapp_emsc_end_drop=f.asm.Eb).apply(null,arguments)};
f.__sapp_emsc_invoke_fetch_cb=function(){return(f.__sapp_emsc_invoke_fetch_cb=f.asm.Fb).apply(null,arguments)};f._main=function(){return(f._main=f.asm.Gb).apply(null,arguments)};f.__saudio_emsc_pull=function(){return(f.__saudio_emsc_pull=f.asm.Hb).apply(null,arguments)};f.__sfetch_emsc_head_response=function(){return(f.__sfetch_emsc_head_response=f.asm.Ib).apply(null,arguments)};f.__sfetch_emsc_get_response=function(){return(f.__sfetch_emsc_get_response=f.asm.Jb).apply(null,arguments)};
f.__sfetch_emsc_failed_http_status=function(){return(f.__sfetch_emsc_failed_http_status=f.asm.Kb).apply(null,arguments)};f.__sfetch_emsc_failed_buffer_too_small=function(){return(f.__sfetch_emsc_failed_buffer_too_small=f.asm.Lb).apply(null,arguments)};
var O=f._malloc=function(){return(O=f._malloc=f.asm.Mb).apply(null,arguments)},qa=f.stackSave=function(){return(qa=f.stackSave=f.asm.Nb).apply(null,arguments)},ra=f.stackRestore=function(){return(ra=f.stackRestore=f.asm.Ob).apply(null,arguments)},z=f.stackAlloc=function(){return(z=f.stackAlloc=f.asm.Pb).apply(null,arguments)},Ub;function ia(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}J=function Vb(){Ub||Wb();Ub||(J=Vb)};
function Wb(a){function b(){if(!Ub&&(Ub=!0,f.calledRun=!0,!ma)){Ma(Ca);Ma(Da);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if(Xb){var c=a,d=f._main;c=c||[];var e=c.length+1,h=z(4*(e+1));E[h>>2]=va(ba);for(var g=1;g<e;g++)E[(h>>2)+g]=va(c[g-1]);E[(h>>2)+e]=0;try{var m=d(e,h);if(!(noExitRuntime||0<ja)){if(f.onExit)f.onExit(m);ma=!0}ca(m,new ia(m))}catch(n){c=n,c instanceof ia||"unwind"==c||(x("exception thrown: "+c),ca(1,c))}finally{}}if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=
[f.postRun]);f.postRun.length;)c=f.postRun.shift(),Fa.unshift(c);Ma(Fa)}}a=a||aa;if(!(0<I)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Ga();Ma(Ba);0<I||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},1)):b())}}f.run=Wb;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var Xb=!0;f.noInitialRun&&(Xb=!1);Wb();
