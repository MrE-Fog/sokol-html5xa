
var f;f||(f=typeof Module !== 'undefined' ? Module : {});var h={},l;for(l in f)f.hasOwnProperty(l)&&(h[l]=f[l]);var r=[],aa="./this.program";function t(a,b){throw b;}var ba=!1,u=!1,da=!1,ea=!1;ba="object"===typeof window;u="function"===typeof importScripts;da="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;ea=!ba&&!da&&!u;var v="",fa,ha,w,ia,ja;
if(da)v=u?require("path").dirname(v)+"/":__dirname+"/",fa=function(a,b){ia||(ia=require("fs"));ja||(ja=require("path"));a=ja.normalize(a);return ia.readFileSync(a,b?null:"utf8")},w=function(a){a=fa(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/")),r=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=f),process.on("uncaughtException",function(a){if(!(a instanceof ka))throw a;}),process.on("unhandledRejection",
x),t=function(a){process.exit(a)},f.inspect=function(){return"[Emscripten Module object]"};else if(ea)"undefined"!=typeof read&&(fa=function(a){return read(a)}),w=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?r=scriptArgs:"undefined"!=typeof arguments&&(r=arguments),"function"===typeof quit&&(t=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===typeof console&&
(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(ba||u)u?v=self.location.href:"undefined"!==typeof document&&document.currentScript&&(v=document.currentScript.src),v=0!==v.indexOf("blob:")?v.substr(0,v.lastIndexOf("/")+1):"",fa=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},u&&(w=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),
ha=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};f.print||console.log.bind(console);var y=f.printErr||console.warn.bind(console);for(l in h)h.hasOwnProperty(l)&&(f[l]=h[l]);h=null;f.arguments&&(r=f.arguments);f.thisProgram&&(aa=f.thisProgram);f.quit&&(t=f.quit);var z;f.wasmBinary&&(z=f.wasmBinary);var noExitRuntime=f.noExitRuntime||!0;
"object"!==typeof WebAssembly&&x("no native wasm support detected");var la,ma=!1;function assert(a,b){a||x("Assertion failed: "+b)}function na(a){var b=f["_"+a];assert(b,"Cannot call unknown function "+a+", make sure it is exported");return b}
function oa(a,b,c){var d={string:function(n){var p=0;if(null!==n&&void 0!==n&&0!==n){var q=(n.length<<2)+1;p=A(q);C(n,D,p,q)}return p},array:function(n){var p=A(n.length);pa.set(n,p);return p}};a=na(a);var e=[],k=0;if(c)for(var g=0;g<c.length;g++){var m=d[b[g]];m?(0===k&&(k=qa()),e[g]=m(c[g])):e[g]=c[g]}a.apply(null,e);0!==k&&ra(k)}var sa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function E(a,b){if(a){var c=D,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&sa)a=sa.decode(c.subarray(a,b));else{for(d="";a<b;){var e=c[a++];if(e&128){var k=c[a++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|k);else{var g=c[a++]&63;e=224==(e&240)?(e&15)<<12|k<<6|g:(e&7)<<18|k<<12|g<<6|c[a++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}a=d}}else a="";return a}
function C(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var k=0;k<a.length;++k){var g=a.charCodeAt(k);if(55296<=g&&57343>=g){var m=a.charCodeAt(++k);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-e}
function ta(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function ua(a){var b=ta(a)+1,c=A(b);C(a,pa,c,b);return c}var va,pa,D,wa,xa,F,ya,G,H;
function za(){var a=la.buffer;va=a;f.HEAP8=pa=new Int8Array(a);f.HEAP16=wa=new Int16Array(a);f.HEAP32=F=new Int32Array(a);f.HEAPU8=D=new Uint8Array(a);f.HEAPU16=xa=new Uint16Array(a);f.HEAPU32=ya=new Uint32Array(a);f.HEAPF32=G=new Float32Array(a);f.HEAPF64=H=new Float64Array(a)}var I,Aa=[],Ba=[],Ca=[],Da=[],Ea=[];function Fa(){var a=f.preRun.shift();Aa.unshift(a)}var J=0,Ga=null,Ha=null;f.preloadedImages={};f.preloadedAudios={};
function x(a){if(f.onAbort)f.onAbort(a);y(a);ma=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}function Ia(a){var b=K;return String.prototype.startsWith?b.startsWith(a):0===b.indexOf(a)}function Ja(){return Ia("data:application/octet-stream;base64,")}var K="shadows-sapp.wasm";if(!Ja()){var Ka=K;K=f.locateFile?f.locateFile(Ka,v):v+Ka}
function La(){var a=K;try{if(a==K&&z)return new Uint8Array(z);if(w)return w(a);throw"both async and sync fetching of the wasm failed";}catch(b){x(b)}}
function Ma(){if(!z&&(ba||u)){if("function"===typeof fetch&&!Ia("file://"))return fetch(K,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+K+"'";return a.arrayBuffer()}).catch(function(){return La()});if(ha)return new Promise(function(a,b){ha(K,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return La()})}
function Na(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(f);else{var c=b.Ac;"number"===typeof c?void 0===b.$b?I.get(c)():I.get(c)(b.$b):c(void 0===b.$b?null:b.$b)}}}var Oa=0;function Pa(){for(var a=L.length-1;0<=a;--a)Qa(a);L=[];Ra=[]}var Ra=[];function Sa(){if(Oa&&Ta.Yb)for(var a=0;a<Ra.length;++a){var b=Ra[a];Ra.splice(a,1);--a;b.Jc.apply(null,b.wc)}}var L=[];function Qa(a){var b=L[a];b.target.removeEventListener(b.Qb,b.qc,b.Rb);L.splice(a,1)}
function M(a){function b(d){++Oa;Ta=a;Sa();a.Tb(d);Sa();--Oa}if(a.Sb)a.qc=b,a.target.addEventListener(a.Qb,b,a.Rb),L.push(a),Ua||(Da.push(Pa),Ua=!0);else for(var c=0;c<L.length;++c)L[c].target==a.target&&L[c].Qb==a.Qb&&Qa(c--)}var Ua,Ta,Va,Wa,Xa,Ya,Za,$a,ab=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function N(a){a=2<a?E(a):a;return ab[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}
function bb(a){return 0>ab.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}function cb(a,b,c,d,e,k){Va||(Va=O(164));a={target:N(a),Yb:!0,Qb:k,Sb:d,Tb:function(g){var m=Va,n=m>>2;F[n]=g.location;F[n+1]=g.ctrlKey;F[n+2]=g.shiftKey;F[n+3]=g.altKey;F[n+4]=g.metaKey;F[n+5]=g.repeat;F[n+6]=g.charCode;F[n+7]=g.keyCode;F[n+8]=g.which;C(g.key||"",D,m+36,32);C(g.code||"",D,m+68,32);C(g.char||"",D,m+100,32);C(g.locale||"",D,m+132,32);I.get(d)(e,m,b)&&g.preventDefault()},Rb:c};M(a)}
function db(a,b,c){a>>=2;F[a]=b.screenX;F[a+1]=b.screenY;F[a+2]=b.clientX;F[a+3]=b.clientY;F[a+4]=b.ctrlKey;F[a+5]=b.shiftKey;F[a+6]=b.altKey;F[a+7]=b.metaKey;wa[2*a+16]=b.button;wa[2*a+17]=b.buttons;F[a+9]=b.movementX;F[a+10]=b.movementY;c=bb(c);F[a+11]=b.clientX-c.left;F[a+12]=b.clientY-c.top}function eb(a,b,c,d,e,k){Wa||(Wa=O(64));a=N(a);M({target:a,Yb:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,Qb:k,Sb:d,Tb:function(g){g=g||event;db(Wa,g,a);I.get(d)(e,Wa,b)&&g.preventDefault()},Rb:c})}
function fb(a,b,c,d,e){Xa||(Xa=O(260));M({target:a,Qb:e,Sb:d,Tb:function(k){k=k||event;var g=Xa,m=document.pointerLockElement||document.bc||document.dc||document.cc;F[g>>2]=!!m;var n=m&&m.id?m.id:"";C(m?m==window?"#window":m==screen?"#screen":m&&m.nodeName?m.nodeName:"":"",D,g+4,128);C(n,D,g+132,128);I.get(d)(20,g,b)&&k.preventDefault()},Rb:c})}function gb(a,b,c,d,e){M({target:a,Qb:e,Sb:d,Tb:function(k){k=k||event;I.get(d)(38,0,b)&&k.preventDefault()},Rb:c})}
function hb(a,b,c,d){Ya||(Ya=O(36));a=N(a);M({target:a,Qb:"resize",Sb:d,Tb:function(e){e=e||event;if(e.target==a){var k=document.body;if(k){var g=Ya;F[g>>2]=e.detail;F[g+4>>2]=k.clientWidth;F[g+8>>2]=k.clientHeight;F[g+12>>2]=innerWidth;F[g+16>>2]=innerHeight;F[g+20>>2]=outerWidth;F[g+24>>2]=outerHeight;F[g+28>>2]=pageXOffset;F[g+32>>2]=pageYOffset;I.get(d)(10,g,b)&&e.preventDefault()}}},Rb:c})}
function ib(a,b,c,d,e,k){Za||(Za=O(1684));a=N(a);M({target:a,Yb:"touchstart"==k||"touchend"==k,Qb:k,Sb:d,Tb:function(g){for(var m={},n=g.touches,p=0;p<n.length;++p){var q=n[p];m[q.identifier]=q}n=g.changedTouches;for(p=0;p<n.length;++p)q=n[p],q.tc=1,m[q.identifier]=q;n=g.targetTouches;for(p=0;p<n.length;++p)m[n[p].identifier].uc=1;n=Za;q=n>>2;F[q+1]=g.ctrlKey;F[q+2]=g.shiftKey;F[q+3]=g.altKey;F[q+4]=g.metaKey;q+=5;var ca=bb(a),Q=0;for(p in m){var B=m[p];F[q]=B.identifier;F[q+1]=B.screenX;F[q+2]=B.screenY;
F[q+3]=B.clientX;F[q+4]=B.clientY;F[q+5]=B.pageX;F[q+6]=B.pageY;F[q+7]=B.tc;F[q+8]=B.uc;F[q+9]=B.clientX-ca.left;F[q+10]=B.clientY-ca.top;q+=13;if(31<++Q)break}F[n>>2]=Q;I.get(d)(e,n,b)&&g.preventDefault()},Rb:c})}function jb(a,b,c,d,e,k){a={target:N(a),Qb:k,Sb:d,Tb:function(g){g=g||event;I.get(d)(e,0,b)&&g.preventDefault()},Rb:c};M(a)}
function kb(a,b,c,d){$a||($a=O(96));M({target:a,Yb:!0,Qb:"wheel",Sb:d,Tb:function(e){e=e||event;var k=$a;db(k,e,a);H[k+64>>3]=e.deltaX;H[k+72>>3]=e.deltaY;H[k+80>>3]=e.deltaZ;F[k+88>>2]=e.deltaMode;I.get(d)(9,k,b)&&e.preventDefault()},Rb:c})}
function lb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,k){b.drawArraysInstancedANGLE(c,d,e,k)},a.drawElementsInstanced=function(c,d,e,k,g){b.drawElementsInstancedANGLE(c,d,e,k,g)})}
function mb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function nb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function ob(a){a.yc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function pb(a){a.Cc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function qb(a){a.Ec=a.getExtension("WEBGL_multi_draw")}var rb=1,sb=[],P=[],tb=[],ub=[],R=[],S=[],T=[],vb=[],wb=[],xb={},yb={},zb={};function U(a){Ab||(Ab=a)}function V(a){for(var b=rb++,c=a.length;c<b;c++)a[c]=null;return b}
function Bb(a,b){a.hc||(a.hc=a.getContext,a.getContext=function(d,e){e=a.hc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.ic?a.getContext("webgl2",b):a.getContext("webgl",b);return c?Cb(c,b):0}function Cb(a,b){var c=V(wb),d={Bc:c,attributes:b,version:b.ic,Zb:a};a.canvas&&(a.canvas.vc=d);wb[c]=d;("undefined"===typeof b.fc||b.fc)&&Db(d);return c}
function Db(a){a||(a=W);if(!a.sc){a.sc=!0;var b=a.Zb;lb(b);mb(b);nb(b);ob(b);pb(b);b.zc=b.getExtension("EXT_disjoint_timer_query");qb(b);(b.getSupportedExtensions()||[]).forEach(function(c){0>c.indexOf("lose_context")&&0>c.indexOf("debug")&&b.getExtension(c)})}}var Ab,W,Eb=["default","low-power","high-performance"],Fb=[];function Gb(a,b,c,d){for(var e=0;e<a;e++){var k=X[c](),g=k&&V(d);k?(k.name=g,d[g]=k):U(1282);F[b+4*e>>2]=g}}
function Hb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=X.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>W.version){U(1282);return}c=2*(X.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>W.version){U(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=X.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":U(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:U(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)F[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){U(1280);y("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:U(1280);y("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}F[b>>2]=c}else U(1281)}
function Ib(a){var b=ta(a)+1,c=O(b);C(a,D,c,b);return c}function Jb(a){a-=5120;return 0==a?pa:1==a?D:2==a?wa:4==a?F:6==a?G:5==a||28922==a||28520==a||30779==a||30782==a?ya:xa}for(var Y=[],X,Z=0;32>Z;++Z)Fb.push(Array(Z));var Kb=new Float32Array(288);for(Z=0;288>Z;++Z)Y[Z]=Kb.subarray(0,Z+1);
var Pb={Z:function(){x()},_:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},ta:function(a,b,c){a=N(a);if(!a)return-4;a=bb(a);H[b>>3]=a.width;H[c>>3]=a.height;return 0},bb:function(a,b,c){D.copyWithin(a,b,b+c)},Pa:function(a,b){function c(d){I.get(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},cb:function(a){var b=D.length;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(a,d);0<d%65536&&(d+=65536-d%65536);
a:{try{la.grow(Math.min(2147483648,d)-va.byteLength+65535>>>16);za();var e=1;break a}catch(k){}e=void 0}if(e)return!0}return!1},Y:function(a,b,c){a=N(a);if(!a)return-4;a.width=b;a.height=c;return 0},ja:function(a,b,c,d){cb(a,b,c,d,2,"keydown");return 0},ha:function(a,b,c,d){cb(a,b,c,d,1,"keypress");return 0},ia:function(a,b,c,d){cb(a,b,c,d,3,"keyup");return 0},sa:function(a,b,c,d){eb(a,b,c,d,5,"mousedown");return 0},ma:function(a,b,c,d){eb(a,b,c,d,33,"mouseenter");return 0},la:function(a,b,c,d){eb(a,
b,c,d,34,"mouseleave");return 0},na:function(a,b,c,d){eb(a,b,c,d,8,"mousemove");return 0},ra:function(a,b,c,d){eb(a,b,c,d,6,"mouseup");return 0},ca:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.bc||document.body.dc||document.body.cc))return-1;a=N(a);if(!a)return-4;fb(a,b,c,d,"pointerlockchange");fb(a,b,c,d,"mozpointerlockchange");fb(a,b,c,d,"webkitpointerlockchange");fb(a,b,c,d,"mspointerlockchange");return 0},ba:function(a,b,c,d){if(!document||
!(document.body.requestPointerLock||document.body.bc||document.body.dc||document.body.cc))return-1;a=N(a);if(!a)return-4;gb(a,b,c,d,"pointerlockerror");gb(a,b,c,d,"mozpointerlockerror");gb(a,b,c,d,"webkitpointerlockerror");gb(a,b,c,d,"mspointerlockerror");return 0},ab:function(a,b,c,d){hb(a,b,c,d);return 0},da:function(a,b,c,d){ib(a,b,c,d,25,"touchcancel");return 0},ea:function(a,b,c,d){ib(a,b,c,d,23,"touchend");return 0},fa:function(a,b,c,d){ib(a,b,c,d,24,"touchmove");return 0},ga:function(a,b,c,
d){ib(a,b,c,d,22,"touchstart");return 0},aa:function(a,b,c,d){jb(a,b,c,d,31,"webglcontextlost");return 0},$:function(a,b,c,d){jb(a,b,c,d,32,"webglcontextrestored");return 0},ka:function(a,b,c,d){a=N(a);return"undefined"!==typeof a.onwheel?(kb(a,b,c,d),0):-1},N:function(a,b){b>>=2;b={alpha:!!F[b],depth:!!F[b+1],stencil:!!F[b+2],antialias:!!F[b+3],premultipliedAlpha:!!F[b+4],preserveDrawingBuffer:!!F[b+5],powerPreference:Eb[F[b+6]],failIfMajorPerformanceCaveat:!!F[b+7],ic:F[b+8],Dc:F[b+9],fc:F[b+10],
rc:F[b+11],Fc:F[b+12],Gc:F[b+13]};a=N(a);return!a||b.rc?0:Bb(a,b)},za:function(a,b){a=wb[a];b=E(b);0==b.indexOf("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&lb(X);"OES_vertex_array_object"==b&&mb(X);"WEBGL_draw_buffers"==b&&nb(X);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&ob(X);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&pb(X);"WEBGL_multi_draw"==b&&qb(X);return!!a.Zb.getExtension(b)},Ma:function(a){a>>=2;for(var b=0;14>b;++b)F[a+b]=0;F[a]=F[a+1]=F[a+3]=F[a+4]=F[a+
8]=F[a+10]=1},Ha:function(a){W=wb[a];f.xc=X=W&&W.Zb;return!a||X?0:-5},b:function(a){X.activeTexture(a)},F:function(a,b){X.attachShader(P[a],T[b])},e:function(a,b){35051==a?X.ec=b:35052==a&&(X.Ub=b);X.bindBuffer(a,sb[b])},d:function(a,b){X.bindFramebuffer(a,tb[b])},I:function(a,b){X.bindRenderbuffer(a,ub[b])},a:function(a,b){X.bindTexture(a,R[b])},V:function(a){X.bindVertexArray(vb[a])},R:function(a,b,c,d){X.blendColor(a,b,c,d)},S:function(a,b){X.blendEquationSeparate(a,b)},T:function(a,b,c,d){X.blendFuncSeparate(a,
b,c,d)},v:function(a,b,c,d,e,k,g,m,n,p){X.blitFramebuffer(a,b,c,d,e,k,g,m,n,p)},L:function(a,b,c,d){2<=W.version?c?X.bufferData(a,D,d,c,b):X.bufferData(a,b,d):X.bufferData(a,c?D.subarray(c,c+b):b,d)},K:function(a,b,c,d){2<=W.version?X.bufferSubData(a,b,D,d,c):X.bufferSubData(a,b,D.subarray(d,d+c))},p:function(a){return X.checkFramebufferStatus(a)},pb:function(a){X.clear(a)},ob:function(a,b,c,d){X.clearBufferfi(a,b,c,d)},qa:function(a,b,c){X.clearBufferfv(a,b,G,c>>2)},nb:function(a,b,c){X.clearBufferiv(a,
b,F,c>>2)},sb:function(a,b,c,d){X.clearColor(a,b,c,d)},rb:function(a){X.clearDepth(a)},qb:function(a){X.clearStencil(a)},n:function(a,b,c,d){X.colorMask(!!a,!!b,!!c,!!d)},wa:function(a){X.compileShader(T[a])},Ga:function(a,b,c,d,e,k,g,m){2<=W.version?X.Ub?X.compressedTexImage2D(a,b,c,d,e,k,g,m):X.compressedTexImage2D(a,b,c,d,e,k,D,m,g):X.compressedTexImage2D(a,b,c,d,e,k,m?D.subarray(m,m+g):null)},Ea:function(a,b,c,d,e,k,g,m,n){X.Ub?X.compressedTexImage3D(a,b,c,d,e,k,g,m,n):X.compressedTexImage3D(a,
b,c,d,e,k,g,D,n,m)},Ca:function(){var a=V(P),b=X.createProgram();b.name=a;P[a]=b;return a},ya:function(a){var b=V(T);T[b]=X.createShader(a);return b},O:function(a){X.cullFace(a)},Ra:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],e=sb[d];e&&(X.deleteBuffer(e),e.name=0,sb[d]=null,d==X.ec&&(X.ec=0),d==X.Ub&&(X.Ub=0))}},k:function(a,b){for(var c=0;c<a;++c){var d=F[b+4*c>>2],e=tb[d];e&&(X.deleteFramebuffer(e),e.name=0,tb[d]=null)}},W:function(a){if(a){var b=P[a];b?(X.deleteProgram(b),b.name=0,P[a]=
null,xb[a]=null):U(1281)}},X:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],e=ub[d];e&&(X.deleteRenderbuffer(e),e.name=0,ub[d]=null)}},x:function(a){if(a){var b=T[a];b?(X.deleteShader(b),T[a]=null):U(1281)}},Qa:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],e=R[d];e&&(X.deleteTexture(e),e.name=0,R[d]=null)}},Oa:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2];X.deleteVertexArray(vb[d]);vb[d]=null}},A:function(a){X.depthFunc(a)},z:function(a){X.depthMask(!!a)},g:function(a){X.disable(a)},
U:function(a){X.disableVertexAttribArray(a)},db:function(a,b,c){X.drawArrays(a,b,c)},o:function(a,b){for(var c=Fb[a],d=0;d<a;d++)c[d]=F[b+4*d>>2];X.drawBuffers(c)},eb:function(a,b,c,d){X.drawElements(a,b,c,d)},i:function(a){X.enable(a)},kb:function(a){X.enableVertexAttribArray(a)},l:function(a,b,c,d){X.framebufferRenderbuffer(a,b,c,ub[d])},c:function(a,b,c,d,e){X.framebufferTexture2D(a,b,c,R[d],e)},j:function(a,b,c,d,e){X.framebufferTextureLayer(a,b,R[c],d,e)},P:function(a){X.frontFace(a)},M:function(a,
b){Gb(a,b,"createBuffer",sb)},m:function(a,b){Gb(a,b,"createFramebuffer",tb)},J:function(a,b){Gb(a,b,"createRenderbuffer",ub)},Ia:function(a,b){Gb(a,b,"createTexture",R)},Na:function(a,b){Gb(a,b,"createVertexArray",vb)},ua:function(a,b){return X.getAttribLocation(P[a],E(b))},f:function(a,b){Hb(a,b)},Aa:function(a,b,c,d){a=X.getProgramInfoLog(P[a]);null===a&&(a="(unknown error)");b=0<b&&d?C(a,D,d,b):0;c&&(F[c>>2]=b)},E:function(a,b,c){if(c)if(a>=rb)U(1281);else{var d=xb[a];if(d)if(35716==b)a=X.getProgramInfoLog(P[a]),
null===a&&(a="(unknown error)"),F[c>>2]=a.length+1;else if(35719==b)F[c>>2]=d.ac;else if(35722==b){if(-1==d.Vb){a=P[a];var e=X.getProgramParameter(a,35721);for(b=d.Vb=0;b<e;++b)d.Vb=Math.max(d.Vb,X.getActiveAttrib(a,b).name.length+1)}F[c>>2]=d.Vb}else if(35381==b){if(-1==d.Wb)for(a=P[a],e=X.getProgramParameter(a,35382),b=d.Wb=0;b<e;++b)d.Wb=Math.max(d.Wb,X.getActiveUniformBlockName(a,b).length+1);F[c>>2]=d.Wb}else F[c>>2]=X.getProgramParameter(P[a],b);else U(1282)}else U(1281)},va:function(a,b,c,
d){a=X.getShaderInfoLog(T[a]);null===a&&(a="(unknown error)");b=0<b&&d?C(a,D,d,b):0;c&&(F[c>>2]=b)},C:function(a,b,c){c?35716==b?(a=X.getShaderInfoLog(T[a]),null===a&&(a="(unknown error)"),F[c>>2]=a?a.length+1:0):35720==b?(a=X.getShaderSource(T[a]),F[c>>2]=a?a.length+1:0):F[c>>2]=X.getShaderParameter(T[a],b):U(1281)},Ta:function(a){if(yb[a])return yb[a];switch(a){case 7939:var b=X.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Ib(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=
X.getParameter(a))||U(1280);b=Ib(b);break;case 7938:b=X.getParameter(7938);b=2<=W.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Ib(b);break;case 35724:b=X.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Ib(b);break;default:return U(1280),0}return yb[a]=b},Sa:function(a,b){if(2>W.version)return U(1282),0;var c=zb[a];if(c)return 0>b||b>=c.length?(U(1281),0):c[b];switch(a){case 7939:return c=
X.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return Ib(d)}),c=zb[a]=c,0>b||b>=c.length?(U(1281),0):c[b];default:return U(1280),0}},q:function(a,b){b=E(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,d)}return(a=xb[a]&&xb[a].pc[b])&&0<=c&&c<a[0]?a[1]+c:-1},Ba:function(a){X.linkProgram(P[a]);var b=P[a];a=xb[a]={pc:{},ac:0,Vb:-1,Wb:-1};for(var c=a.pc,d=X.getProgramParameter(b,35718),e=0;e<
d;++e){var k=X.getActiveUniform(b,e),g=k.name;a.ac=Math.max(a.ac,g.length+1);"]"==g.slice(-1)&&(g=g.slice(0,g.lastIndexOf("[")));var m=X.getUniformLocation(b,g);if(m){var n=V(S);c[g]=[k.size,n];S[n]=m;for(var p=1;p<k.size;++p)m=X.getUniformLocation(b,g+"["+p+"]"),n=V(S),S[n]=m}}},Q:function(a,b){X.polygonOffset(a,b)},w:function(a){X.readBuffer(a)},Ja:function(a,b,c,d){X.renderbufferStorage(a,b,c,d)},H:function(a,b,c,d,e){X.renderbufferStorageMultisample(a,b,c,d,e)},tb:function(a,b,c,d){X.scissor(a,
b,c,d)},xa:function(a,b,c,d){for(var e="",k=0;k<b;++k){var g=d?F[d+4*k>>2]:-1;e+=E(F[c+4*k>>2],0>g?void 0:g)}X.shaderSource(T[a],e)},La:function(a,b,c){X.stencilFunc(a,b,c)},pa:function(a,b,c,d){X.stencilFuncSeparate(a,b,c,d)},y:function(a){X.stencilMask(a)},Ka:function(a,b,c){X.stencilOp(a,b,c)},oa:function(a,b,c,d){X.stencilOpSeparate(a,b,c,d)},Fa:function(a,b,c,d,e,k,g,m,n){if(2<=W.version)if(X.Ub)X.texImage2D(a,b,c,d,e,k,g,m,n);else if(n){var p=Jb(m);X.texImage2D(a,b,c,d,e,k,g,m,p,n>>31-Math.clz32(p.BYTES_PER_ELEMENT))}else X.texImage2D(a,
b,c,d,e,k,g,m,null);else{p=X;var q=p.texImage2D;if(n){var ca=Jb(m),Q=31-Math.clz32(ca.BYTES_PER_ELEMENT);n=ca.subarray(n>>Q,n+e*(d*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[g-6402]||1)*(1<<Q)+4-1&-4)>>Q)}else n=null;q.call(p,a,b,c,d,e,k,g,m,n)}},Da:function(a,b,c,d,e,k,g,m,n,p){if(X.Ub)X.texImage3D(a,b,c,d,e,k,g,m,n,p);else if(p){var q=Jb(n);X.texImage3D(a,b,c,d,e,k,g,m,n,q,p>>31-Math.clz32(q.BYTES_PER_ELEMENT))}else X.texImage3D(a,b,c,d,e,k,g,m,n,null)},G:function(a,b,c){X.texParameterf(a,
b,c)},h:function(a,b,c){X.texParameteri(a,b,c)},jb:function(a,b,c){if(2<=W.version)X.uniform1fv(S[a],G,c>>2,b);else{if(288>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=G[c+4*e>>2];else d=G.subarray(c>>2,c+4*b>>2);X.uniform1fv(S[a],d)}},D:function(a,b){X.uniform1i(S[a],b)},ib:function(a,b,c){if(2<=W.version)X.uniform2fv(S[a],G,c>>2,2*b);else{if(144>=b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=G[c+4*e>>2],d[e+1]=G[c+(4*e+4)>>2];else d=G.subarray(c>>2,c+8*b>>2);X.uniform2fv(S[a],d)}},hb:function(a,b,c){if(2<=W.version)X.uniform3fv(S[a],
G,c>>2,3*b);else{if(96>=b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=G[c+4*e>>2],d[e+1]=G[c+(4*e+4)>>2],d[e+2]=G[c+(4*e+8)>>2];else d=G.subarray(c>>2,c+12*b>>2);X.uniform3fv(S[a],d)}},gb:function(a,b,c){if(2<=W.version)X.uniform4fv(S[a],G,c>>2,4*b);else{if(72>=b){var d=Y[4*b-1],e=G;c>>=2;for(var k=0;k<4*b;k+=4){var g=c+k;d[k]=e[g];d[k+1]=e[g+1];d[k+2]=e[g+2];d[k+3]=e[g+3]}}else d=G.subarray(c>>2,c+16*b>>2);X.uniform4fv(S[a],d)}},fb:function(a,b,c,d){if(2<=W.version)X.uniformMatrix4fv(S[a],!!c,G,d>>2,
16*b);else{if(18>=b){var e=Y[16*b-1],k=G;d>>=2;for(var g=0;g<16*b;g+=16){var m=d+g;e[g]=k[m];e[g+1]=k[m+1];e[g+2]=k[m+2];e[g+3]=k[m+3];e[g+4]=k[m+4];e[g+5]=k[m+5];e[g+6]=k[m+6];e[g+7]=k[m+7];e[g+8]=k[m+8];e[g+9]=k[m+9];e[g+10]=k[m+10];e[g+11]=k[m+11];e[g+12]=k[m+12];e[g+13]=k[m+13];e[g+14]=k[m+14];e[g+15]=k[m+15]}}else e=G.subarray(d>>2,d+64*b>>2);X.uniformMatrix4fv(S[a],!!c,e)}},r:function(a){X.useProgram(P[a])},lb:function(a,b){X.vertexAttribDivisor(a,b)},mb:function(a,b,c,d,e,k){X.vertexAttribPointer(a,
b,c,!!d,e,k)},ub:function(a,b,c,d){X.viewport(a,b,c,d)},$a:function(){f.jc=function(a){0!=Lb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",f.jc)},_a:function(){f.oc=function(a){a=a.clipboardData.getData("text");oa("_sapp_emsc_onpaste",["string"],[a])};window.addEventListener("paste",f.oc)},Za:function(a){f.Hc=[];a=E(a);a=document.getElementById(a);f.kc=function(b){b.stopPropagation();b.preventDefault()};f.lc=function(b){b.stopPropagation();b.preventDefault()};f.mc=
function(b){b.stopPropagation();b.preventDefault()};f.nc=function(b){b.stopPropagation();b.preventDefault();var c=b.dataTransfer.files;f.Ic=c;Mb(c.length);var d;for(d=0;d<c.length;d++)oa("_sapp_emsc_drop",["number","string"],[d,c[d].name]);Nb(b.clientX,b.clientY)};a.addEventListener("dragenter",f.kc,!1);a.addEventListener("dragleave",f.lc,!1);a.addEventListener("dragover",f.mc,!1);a.addEventListener("drop",f.nc,!1)},Va:function(){var a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},
u:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Ob()});document.body.append(a)},t:function(){document.getElementById("_sokol_app_input_element").focus()},vb:function(a){a=E(a);f.Xb=document.getElementById(a);f.Xb||console.log("sokol_app.h: invalid target:"+a);f.Xb.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Ya:function(){window.removeEventListener("beforeunload",
f.jc)},Xa:function(){window.removeEventListener("paste",f.oc)},Wa:function(a){a=E(a);a=document.getElementById(a);a.removeEventListener("dragenter",f.kc);a.removeEventListener("dragleave",f.lc);a.removeEventListener("dragover",f.mc);a.removeEventListener("drop",f.nc)},B:function(){f.Xb&&f.Xb.requestPointerLock&&f.Xb.requestPointerLock()},Ua:function(a,b,c){var d=document.createElement("canvas");d.width=a;d.height=b;var e=d.getContext("2d"),k=e.createImageData(a,b);k.data.set(D.subarray(c,c+a*b*4));
e.putImageData(k,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},s:function(){document.getElementById("_sokol_app_input_element").blur()}};
(function(){function a(e){f.asm=e.exports;la=f.asm.wb;za();I=f.asm.Pb;Ba.unshift(f.asm.xb);J--;f.monitorRunDependencies&&f.monitorRunDependencies(J);0==J&&(null!==Ga&&(clearInterval(Ga),Ga=null),Ha&&(e=Ha,Ha=null,e()))}function b(e){a(e.instance)}function c(e){return Ma().then(function(k){return WebAssembly.instantiate(k,d)}).then(e,function(k){y("failed to asynchronously prepare wasm: "+k);x(k)})}var d={a:Pb};J++;f.monitorRunDependencies&&f.monitorRunDependencies(J);if(f.instantiateWasm)try{return f.instantiateWasm(d,
a)}catch(e){return y("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return z||"function"!==typeof WebAssembly.instantiateStreaming||Ja()||Ia("file://")||"function"!==typeof fetch?c(b):fetch(K,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(k){y("wasm streaming compile failed: "+k);y("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
f.___wasm_call_ctors=function(){return(f.___wasm_call_ctors=f.asm.xb).apply(null,arguments)};var Ob=f.__sapp_emsc_notify_keyboard_hidden=function(){return(Ob=f.__sapp_emsc_notify_keyboard_hidden=f.asm.yb).apply(null,arguments)};f.__sapp_emsc_onpaste=function(){return(f.__sapp_emsc_onpaste=f.asm.zb).apply(null,arguments)};
var Lb=f.__sapp_html5_get_ask_leave_site=function(){return(Lb=f.__sapp_html5_get_ask_leave_site=f.asm.Ab).apply(null,arguments)},Mb=f.__sapp_emsc_begin_drop=function(){return(Mb=f.__sapp_emsc_begin_drop=f.asm.Bb).apply(null,arguments)};f.__sapp_emsc_drop=function(){return(f.__sapp_emsc_drop=f.asm.Cb).apply(null,arguments)};var Nb=f.__sapp_emsc_end_drop=function(){return(Nb=f.__sapp_emsc_end_drop=f.asm.Db).apply(null,arguments)};
f.__sapp_emsc_invoke_fetch_cb=function(){return(f.__sapp_emsc_invoke_fetch_cb=f.asm.Eb).apply(null,arguments)};f._main=function(){return(f._main=f.asm.Fb).apply(null,arguments)};f.__saudio_emsc_pull=function(){return(f.__saudio_emsc_pull=f.asm.Gb).apply(null,arguments)};f.__sfetch_emsc_head_response=function(){return(f.__sfetch_emsc_head_response=f.asm.Hb).apply(null,arguments)};f.__sfetch_emsc_get_response=function(){return(f.__sfetch_emsc_get_response=f.asm.Ib).apply(null,arguments)};
f.__sfetch_emsc_failed_http_status=function(){return(f.__sfetch_emsc_failed_http_status=f.asm.Jb).apply(null,arguments)};f.__sfetch_emsc_failed_buffer_too_small=function(){return(f.__sfetch_emsc_failed_buffer_too_small=f.asm.Kb).apply(null,arguments)};
var O=f._malloc=function(){return(O=f._malloc=f.asm.Lb).apply(null,arguments)},qa=f.stackSave=function(){return(qa=f.stackSave=f.asm.Mb).apply(null,arguments)},ra=f.stackRestore=function(){return(ra=f.stackRestore=f.asm.Nb).apply(null,arguments)},A=f.stackAlloc=function(){return(A=f.stackAlloc=f.asm.Ob).apply(null,arguments)},Qb;function ka(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}Ha=function Rb(){Qb||Sb();Qb||(Ha=Rb)};
function Sb(a){function b(){if(!Qb&&(Qb=!0,f.calledRun=!0,!ma)){Na(Ba);Na(Ca);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if(Tb){var c=a,d=f._main;c=c||[];var e=c.length+1,k=A(4*(e+1));F[k>>2]=ua(aa);for(var g=1;g<e;g++)F[(k>>2)+g]=ua(c[g-1]);F[(k>>2)+e]=0;try{var m=d(e,k);if(!noExitRuntime||0!==m){if(!noExitRuntime){if(f.onExit)f.onExit(m);ma=!0}t(m,new ka(m))}}catch(n){n instanceof ka||"unwind"==n||((c=n)&&"object"===typeof n&&n.stack&&(c=[n,n.stack]),y("exception thrown: "+c),t(1,n))}finally{}}if(f.postRun)for("function"==
typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;)c=f.postRun.shift(),Ea.unshift(c);Na(Ea)}}a=a||r;if(!(0<J)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Fa();Na(Aa);0<J||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},1)):b())}}f.run=Sb;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var Tb=!0;f.noInitialRun&&(Tb=!1);Sb();
