
var f;f||(f=typeof Module !== 'undefined' ? Module : {});var h={},l;for(l in f)f.hasOwnProperty(l)&&(h[l]=f[l]);var ba=[],ca="./this.program";function da(a,b){throw b;}var ea="object"===typeof window,r="function"===typeof importScripts,t="",fa,ha,ia,u,v;
if("object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)t=r?require("path").dirname(t)+"/":__dirname+"/",fa=function(a,b){u||(u=require("fs"));v||(v=require("path"));a=v.normalize(a);return u.readFileSync(a,b?null:"utf8")},ia=function(a){a=fa(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||w("Assertion failed: undefined");return a},ha=function(a,b,c){u||(u=require("fs"));v||(v=require("path"));a=v.normalize(a);u.readFile(a,function(d,e){d?c(d):b(e.buffer)})},
1<process.argv.length&&(ca=process.argv[1].replace(/\\/g,"/")),ba=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=f),process.on("uncaughtException",function(a){if(!(a instanceof ja))throw a;}),process.on("unhandledRejection",w),da=function(a,b){if(noExitRuntime||0<ka)throw process.exitCode=a,b;process.exit(a)},f.inspect=function(){return"[Emscripten Module object]"};else if(ea||r)r?t=self.location.href:"undefined"!==typeof document&&document.currentScript&&(t=document.currentScript.src),
t=0!==t.indexOf("blob:")?t.substr(0,t.lastIndexOf("/")+1):"",fa=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},r&&(ia=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),ha=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};
f.print||console.log.bind(console);var x=f.printErr||console.warn.bind(console);for(l in h)h.hasOwnProperty(l)&&(f[l]=h[l]);h=null;f.arguments&&(ba=f.arguments);f.thisProgram&&(ca=f.thisProgram);f.quit&&(da=f.quit);var y;f.wasmBinary&&(y=f.wasmBinary);var noExitRuntime=f.noExitRuntime||!0;"object"!==typeof WebAssembly&&w("no native wasm support detected");var la,ma=!1;function na(a){var b=f["_"+a];b||w("Assertion failed: Cannot call unknown function "+(a+", make sure it is exported"));return b}
function oa(a,b,c){var d={string:function(n){var p=0;if(null!==n&&void 0!==n&&0!==n){var q=(n.length<<2)+1;p=z(q);B(n,C,p,q)}return p},array:function(n){var p=z(n.length);pa.set(n,p);return p}};a=na(a);var e=[],k=0;if(c)for(var g=0;g<c.length;g++){var m=d[b[g]];m?(0===k&&(k=qa()),e[g]=m(c[g])):e[g]=c[g]}b=a.apply(null,e);b=function(n){0!==k&&ra(k);return n}(b)}var sa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function D(a,b){if(a){var c=C,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&sa)a=sa.decode(c.subarray(a,b));else{for(d="";a<b;){var e=c[a++];if(e&128){var k=c[a++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|k);else{var g=c[a++]&63;e=224==(e&240)?(e&15)<<12|k<<6|g:(e&7)<<18|k<<12|g<<6|c[a++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}a=d}}else a="";return a}
function B(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var k=0;k<a.length;++k){var g=a.charCodeAt(k);if(55296<=g&&57343>=g){var m=a.charCodeAt(++k);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-e}
function ta(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function ua(a){var b=ta(a)+1,c=z(b);B(a,pa,c,b);return c}var va,pa,C,wa,xa,E,ya,F,G;
function za(){var a=la.buffer;va=a;f.HEAP8=pa=new Int8Array(a);f.HEAP16=wa=new Int16Array(a);f.HEAP32=E=new Int32Array(a);f.HEAPU8=C=new Uint8Array(a);f.HEAPU16=xa=new Uint16Array(a);f.HEAPU32=ya=new Uint32Array(a);f.HEAPF32=F=new Float32Array(a);f.HEAPF64=G=new Float64Array(a)}var H,Aa=[],Ba=[],Ca=[],Da=[],Ea=[],ka=0;function Fa(){var a=f.preRun.shift();Aa.unshift(a)}var I=0,Ga=null,J=null;f.preloadedImages={};f.preloadedAudios={};
function w(a){if(f.onAbort)f.onAbort(a);x(a);ma=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}function Ha(){return K.startsWith("data:application/octet-stream;base64,")}var K;K="sgl-context-sapp.wasm";if(!Ha()){var Ia=K;K=f.locateFile?f.locateFile(Ia,t):t+Ia}function Ja(){var a=K;try{if(a==K&&y)return new Uint8Array(y);if(ia)return ia(a);throw"both async and sync fetching of the wasm failed";}catch(b){w(b)}}
function Ka(){if(!y&&(ea||r)){if("function"===typeof fetch&&!K.startsWith("file://"))return fetch(K,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+K+"'";return a.arrayBuffer()}).catch(function(){return Ja()});if(ha)return new Promise(function(a,b){ha(K,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ja()})}
function La(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(f);else{var c=b.Fc;"number"===typeof c?void 0===b.cc?H.get(c)():H.get(c)(b.cc):c(void 0===b.cc?null:b.cc)}}}var Ma=0;function Na(){for(var a=L.length-1;0<=a;--a)Oa(a);L=[];Pa=[]}var Pa=[];function Qa(){if(Ma&&Ra.Yb)for(var a=0;a<Pa.length;++a){var b=Pa[a];Pa.splice(a,1);--a;b.Oc.apply(null,b.Cc)}}var L=[];function Oa(a){var b=L[a];b.target.removeEventListener(b.Rb,b.wc,b.Sb);L.splice(a,1)}
function M(a){function b(d){++Ma;Ra=a;Qa();a.Ub(d);Qa();--Ma}if(a.Tb)a.wc=b,a.target.addEventListener(a.Rb,b,a.Sb),L.push(a),Sa||(Da.push(Na),Sa=!0);else for(var c=0;c<L.length;++c)L[c].target==a.target&&L[c].Rb==a.Rb&&Oa(c--)}function Ta(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}var Sa,Ra,Ua,Va,Wa,Xa,Ya,Za,$a,ab=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];
function N(a){a=2<a?D(a):a;return ab[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}function bb(a){return 0>ab.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}function cb(a,b,c,d,e,k){Ua||(Ua=O(256));a={target:N(a),Rb:k,Tb:d,Ub:function(g){g=g||event;var m=g.target.id?g.target.id:"",n=Ua;B(Ta(g.target),C,n+0,128);B(m,C,n+128,128);H.get(d)(e,n,b)&&g.preventDefault()},Sb:c};M(a)}
function db(a,b,c,d,e,k){Va||(Va=O(176));a={target:N(a),Yb:!0,Rb:k,Tb:d,Ub:function(g){var m=Va;G[m>>3]=g.timeStamp;var n=m>>2;E[n+2]=g.location;E[n+3]=g.ctrlKey;E[n+4]=g.shiftKey;E[n+5]=g.altKey;E[n+6]=g.metaKey;E[n+7]=g.repeat;E[n+8]=g.charCode;E[n+9]=g.keyCode;E[n+10]=g.which;B(g.key||"",C,m+44,32);B(g.code||"",C,m+76,32);B(g.char||"",C,m+108,32);B(g.locale||"",C,m+140,32);H.get(d)(e,m,b)&&g.preventDefault()},Sb:c};M(a)}
function eb(a,b,c){G[a>>3]=b.timeStamp;a>>=2;E[a+2]=b.screenX;E[a+3]=b.screenY;E[a+4]=b.clientX;E[a+5]=b.clientY;E[a+6]=b.ctrlKey;E[a+7]=b.shiftKey;E[a+8]=b.altKey;E[a+9]=b.metaKey;wa[2*a+20]=b.button;wa[2*a+21]=b.buttons;E[a+11]=b.movementX;E[a+12]=b.movementY;c=bb(c);E[a+13]=b.clientX-c.left;E[a+14]=b.clientY-c.top}
function P(a,b,c,d,e,k){Wa||(Wa=O(72));a=N(a);M({target:a,Yb:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,Rb:k,Tb:d,Ub:function(g){g=g||event;eb(Wa,g,a);H.get(d)(e,Wa,b)&&g.preventDefault()},Sb:c})}function fb(a,b,c,d,e){Xa||(Xa=O(260));M({target:a,Rb:e,Tb:d,Ub:function(k){k=k||event;var g=Xa,m=document.pointerLockElement||document.ec||document.hc||document.fc;E[g>>2]=!!m;var n=m&&m.id?m.id:"";B(Ta(m),C,g+4,128);B(n,C,g+132,128);H.get(d)(20,g,b)&&k.preventDefault()},Sb:c})}
function gb(a,b,c,d,e){M({target:a,Rb:e,Tb:d,Ub:function(k){k=k||event;H.get(d)(38,0,b)&&k.preventDefault()},Sb:c})}
function hb(a,b,c,d){Ya||(Ya=O(36));a=N(a);M({target:a,Rb:"resize",Tb:d,Ub:function(e){e=e||event;if(e.target==a){var k=document.body;if(k){var g=Ya;E[g>>2]=e.detail;E[g+4>>2]=k.clientWidth;E[g+8>>2]=k.clientHeight;E[g+12>>2]=innerWidth;E[g+16>>2]=innerHeight;E[g+20>>2]=outerWidth;E[g+24>>2]=outerHeight;E[g+28>>2]=pageXOffset;E[g+32>>2]=pageYOffset;H.get(d)(10,g,b)&&e.preventDefault()}}},Sb:c})}
function ib(a,b,c,d,e,k){Za||(Za=O(1696));a=N(a);M({target:a,Yb:"touchstart"==k||"touchend"==k,Rb:k,Tb:d,Ub:function(g){for(var m={},n=g.touches,p=0;p<n.length;++p){var q=n[p];m[q.identifier]=q}n=g.changedTouches;for(p=0;p<n.length;++p)q=n[p],q.zc=1,m[q.identifier]=q;n=g.targetTouches;for(p=0;p<n.length;++p)m[n[p].identifier].Ac=1;n=Za;G[n>>3]=g.timeStamp;q=n>>2;E[q+3]=g.ctrlKey;E[q+4]=g.shiftKey;E[q+5]=g.altKey;E[q+6]=g.metaKey;q+=7;var aa=bb(a),R=0;for(p in m){var A=m[p];E[q]=A.identifier;E[q+1]=
A.screenX;E[q+2]=A.screenY;E[q+3]=A.clientX;E[q+4]=A.clientY;E[q+5]=A.pageX;E[q+6]=A.pageY;E[q+7]=A.zc;E[q+8]=A.Ac;E[q+9]=A.clientX-aa.left;E[q+10]=A.clientY-aa.top;q+=13;if(31<++R)break}E[n+8>>2]=R;H.get(d)(e,n,b)&&g.preventDefault()},Sb:c})}function jb(a,b,c,d,e,k){a={target:N(a),Rb:k,Tb:d,Ub:function(g){g=g||event;H.get(d)(e,0,b)&&g.preventDefault()},Sb:c};M(a)}
function kb(a,b,c,d){$a||($a=O(104));M({target:a,Yb:!0,Rb:"wheel",Tb:d,Ub:function(e){e=e||event;var k=$a;eb(k,e,a);G[k+72>>3]=e.deltaX;G[k+80>>3]=e.deltaY;G[k+88>>3]=e.deltaZ;E[k+96>>2]=e.deltaMode;H.get(d)(9,k,b)&&e.preventDefault()},Sb:c})}
function lb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,k){b.drawArraysInstancedANGLE(c,d,e,k)},a.drawElementsInstanced=function(c,d,e,k,g){b.drawElementsInstancedANGLE(c,d,e,k,g)})}
function mb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function nb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function ob(a){a.Ec=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function pb(a){a.Hc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function qb(a){a.Jc=a.getExtension("WEBGL_multi_draw")}var rb=1,sb=[],Q=[],tb=[],ub=[],S=[],T=[],vb=[],wb=[],xb={},yb={};function U(a){zb||(zb=a)}function Ab(a){for(var b=rb++,c=a.length;c<b;c++)a[c]=null;return b}
function Bb(a,b){a.lc||(a.lc=a.getContext,a.getContext=function(d,e){e=a.lc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.mc?a.getContext("webgl2",b):a.getContext("webgl",b);return c?Cb(c,b):0}function Cb(a,b){var c=Ab(wb),d={Gc:c,attributes:b,version:b.mc,bc:a};a.canvas&&(a.canvas.Bc=d);wb[c]=d;("undefined"===typeof b.kc||b.kc)&&Db(d);return c}
function Db(a){a||(a=V);if(!a.yc){a.yc=!0;var b=a.bc;lb(b);mb(b);nb(b);ob(b);pb(b);2<=a.version&&(b.jc=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.jc)b.jc=b.getExtension("EXT_disjoint_timer_query");qb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var zb,V,Eb=["default","low-power","high-performance"],Fb=[];
function Gb(a,b,c,d){for(var e=0;e<a;e++){var k=W[c](),g=k&&Ab(d);k?(k.name=g,d[g]=k):U(1282);E[b+4*e>>2]=g}}
function Hb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=W.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>V.version){U(1282);return}c=2*(W.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>V.version){U(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=W.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":U(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:U(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)E[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){U(1280);x("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:U(1280);x("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}E[b>>2]=c}else U(1281)}
function Ib(a){var b=ta(a)+1,c=O(b);B(a,C,c,b);return c}function Jb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function Kb(a){a-=5120;return 0==a?pa:1==a?C:2==a?wa:4==a?E:6==a?F:5==a||28922==a||28520==a||30779==a||30782==a?ya:xa}function X(a){var b=W.vc;if(b){var c=b.Xb[a];"number"===typeof c&&(b.Xb[a]=c=W.getUniformLocation(b,b.tc[a]+(0<c?"["+c+"]":"")));return c}U(1282)}for(var Y=[],W,Z=0;32>Z;++Z)Fb.push(Array(Z));var Lb=new Float32Array(288);for(Z=0;288>Z;++Z)Y[Z]=Lb.subarray(0,Z+1);
var Qb={Z:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},ua:function(a,b,c){a=N(a);if(!a)return-4;a=bb(a);G[b>>3]=a.width;G[c>>3]=a.height;return 0},eb:function(a,b,c){C.copyWithin(a,b,b+c)},Sa:function(a,b){function c(d){H.get(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},fb:function(a){var b=C.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(a,d);0<d%65536&&(d+=65536-d%65536);a:{try{la.grow(Math.min(2147483648,
d)-va.byteLength+65535>>>16);za();var e=1;break a}catch(k){}e=void 0}if(e)return!0}return!1},_:function(a,b,c,d){cb(a,b,c,d,12,"blur");return 0},W:function(a,b,c){a=N(a);if(!a)return-4;a.width=b;a.height=c;return 0},$:function(a,b,c,d){cb(a,b,c,d,13,"focus");return 0},ia:function(a,b,c,d){db(a,b,c,d,2,"keydown");return 0},ga:function(a,b,c,d){db(a,b,c,d,1,"keypress");return 0},ha:function(a,b,c,d){db(a,b,c,d,3,"keyup");return 0},ta:function(a,b,c,d){P(a,b,c,d,5,"mousedown");return 0},la:function(a,
b,c,d){P(a,b,c,d,33,"mouseenter");return 0},ka:function(a,b,c,d){P(a,b,c,d,34,"mouseleave");return 0},ma:function(a,b,c,d){P(a,b,c,d,8,"mousemove");return 0},qa:function(a,b,c,d){P(a,b,c,d,6,"mouseup");return 0},ba:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.ec||document.body.hc||document.body.fc))return-1;a=N(a);if(!a)return-4;fb(a,b,c,d,"pointerlockchange");fb(a,b,c,d,"mozpointerlockchange");fb(a,b,c,d,"webkitpointerlockchange");fb(a,b,c,d,"mspointerlockchange");
return 0},aa:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.ec||document.body.hc||document.body.fc))return-1;a=N(a);if(!a)return-4;gb(a,b,c,d,"pointerlockerror");gb(a,b,c,d,"mozpointerlockerror");gb(a,b,c,d,"webkitpointerlockerror");gb(a,b,c,d,"mspointerlockerror");return 0},db:function(a,b,c,d){hb(a,b,c,d);return 0},ca:function(a,b,c,d){ib(a,b,c,d,25,"touchcancel");return 0},da:function(a,b,c,d){ib(a,b,c,d,23,"touchend");return 0},ea:function(a,b,c,d){ib(a,b,c,
d,24,"touchmove");return 0},fa:function(a,b,c,d){ib(a,b,c,d,22,"touchstart");return 0},Y:function(a,b,c,d){jb(a,b,c,d,31,"webglcontextlost");return 0},X:function(a,b,c,d){jb(a,b,c,d,32,"webglcontextrestored");return 0},ja:function(a,b,c,d){a=N(a);return"undefined"!==typeof a.onwheel?(kb(a,b,c,d),0):-1},N:function(a,b){b>>=2;b={alpha:!!E[b],depth:!!E[b+1],stencil:!!E[b+2],antialias:!!E[b+3],premultipliedAlpha:!!E[b+4],preserveDrawingBuffer:!!E[b+5],powerPreference:Eb[E[b+6]],failIfMajorPerformanceCaveat:!!E[b+
7],mc:E[b+8],Ic:E[b+9],kc:E[b+10],xc:E[b+11],Kc:E[b+12],Lc:E[b+13]};a=N(a);return!a||b.xc?0:Bb(a,b)},Ba:function(a,b){a=wb[a];b=D(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&lb(W);"OES_vertex_array_object"==b&&mb(W);"WEBGL_draw_buffers"==b&&nb(W);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&ob(W);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&pb(W);"WEBGL_multi_draw"==b&&qb(W);return!!a.bc.getExtension(b)},Pa:function(a){a>>=2;for(var b=0;14>b;++b)E[a+
b]=0;E[a]=E[a+1]=E[a+3]=E[a+4]=E[a+8]=E[a+10]=1},Ia:function(a){V=wb[a];f.Dc=W=V&&V.bc;return!a||W?0:-5},b:function(a){W.activeTexture(a)},H:function(a,b){W.attachShader(Q[a],T[b])},d:function(a,b){35051==a?W.ic=b:35052==a&&(W.Vb=b);W.bindBuffer(a,sb[b])},f:function(a,b){W.bindFramebuffer(a,tb[b])},K:function(a,b){W.bindRenderbuffer(a,ub[b])},a:function(a,b){W.bindTexture(a,S[b])},U:function(a){W.bindVertexArray(vb[a])},Q:function(a,b,c,d){W.blendColor(a,b,c,d)},R:function(a,b){W.blendEquationSeparate(a,
b)},S:function(a,b,c,d){W.blendFuncSeparate(a,b,c,d)},w:function(a,b,c,d,e,k,g,m,n,p){W.blitFramebuffer(a,b,c,d,e,k,g,m,n,p)},La:function(a,b,c,d){2<=V.version?c?W.bufferData(a,C,d,c,b):W.bufferData(a,b,d):W.bufferData(a,c?C.subarray(c,c+b):b,d)},s:function(a,b,c,d){2<=V.version?W.bufferSubData(a,b,C,d,c):W.bufferSubData(a,b,C.subarray(d,d+c))},q:function(a){return W.checkFramebufferStatus(a)},sb:function(a){W.clear(a)},rb:function(a,b,c,d){W.clearBufferfi(a,b,c,d)},pa:function(a,b,c){W.clearBufferfv(a,
b,F,c>>2)},qb:function(a,b,c){W.clearBufferiv(a,b,E,c>>2)},vb:function(a,b,c,d){W.clearColor(a,b,c,d)},ub:function(a){W.clearDepth(a)},tb:function(a){W.clearStencil(a)},n:function(a,b,c,d){W.colorMask(!!a,!!b,!!c,!!d)},xa:function(a){W.compileShader(T[a])},Ha:function(a,b,c,d,e,k,g,m){2<=V.version?W.Vb?W.compressedTexImage2D(a,b,c,d,e,k,g,m):W.compressedTexImage2D(a,b,c,d,e,k,C,m,g):W.compressedTexImage2D(a,b,c,d,e,k,m?C.subarray(m,m+g):null)},Fa:function(a,b,c,d,e,k,g,m,n){W.Vb?W.compressedTexImage3D(a,
b,c,d,e,k,g,m,n):W.compressedTexImage3D(a,b,c,d,e,k,g,C,n,m)},Da:function(){var a=Ab(Q),b=W.createProgram();b.name=a;b.ac=b.Zb=b.$b=0;b.dc=1;Q[a]=b;return a},za:function(a){var b=Ab(T);T[b]=W.createShader(a);return b},M:function(a){W.cullFace(a)},Ua:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2],e=sb[d];e&&(W.deleteBuffer(e),e.name=0,sb[d]=null,d==W.ic&&(W.ic=0),d==W.Vb&&(W.Vb=0))}},k:function(a,b){for(var c=0;c<a;++c){var d=E[b+4*c>>2],e=tb[d];e&&(W.deleteFramebuffer(e),e.name=0,tb[d]=null)}},
C:function(a){if(a){var b=Q[a];b?(W.deleteProgram(b),b.name=0,Q[a]=null):U(1281)}},V:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2],e=ub[d];e&&(W.deleteRenderbuffer(e),e.name=0,ub[d]=null)}},y:function(a){if(a){var b=T[a];b?(W.deleteShader(b),T[a]=null):U(1281)}},Ta:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2],e=S[d];e&&(W.deleteTexture(e),e.name=0,S[d]=null)}},Ra:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2];W.deleteVertexArray(vb[d]);vb[d]=null}},B:function(a){W.depthFunc(a)},
A:function(a){W.depthMask(!!a)},g:function(a){W.disable(a)},T:function(a){W.disableVertexAttribArray(a)},gb:function(a,b,c){W.drawArrays(a,b,c)},p:function(a,b){for(var c=Fb[a],d=0;d<a;d++)c[d]=E[b+4*d>>2];W.drawBuffers(c)},hb:function(a,b,c,d){W.drawElements(a,b,c,d)},i:function(a){W.enable(a)},nb:function(a){W.enableVertexAttribArray(a)},l:function(a,b,c,d){W.framebufferRenderbuffer(a,b,c,ub[d])},c:function(a,b,c,d,e){W.framebufferTexture2D(a,b,c,S[d],e)},j:function(a,b,c,d,e){W.framebufferTextureLayer(a,
b,S[c],d,e)},O:function(a){W.frontFace(a)},Ma:function(a,b){Gb(a,b,"createBuffer",sb)},m:function(a,b){Gb(a,b,"createFramebuffer",tb)},L:function(a,b){Gb(a,b,"createRenderbuffer",ub)},Ja:function(a,b){Gb(a,b,"createTexture",S)},Qa:function(a,b){Gb(a,b,"createVertexArray",vb)},va:function(a,b){return W.getAttribLocation(Q[a],D(b))},e:function(a,b){Hb(a,b)},Aa:function(a,b,c,d){a=W.getProgramInfoLog(Q[a]);null===a&&(a="(unknown error)");b=0<b&&d?B(a,C,d,b):0;c&&(E[c>>2]=b)},G:function(a,b,c){if(c)if(a>=
rb)U(1281);else if(a=Q[a],35716==b)a=W.getProgramInfoLog(a),null===a&&(a="(unknown error)"),E[c>>2]=a.length+1;else if(35719==b){if(!a.ac)for(b=0;b<W.getProgramParameter(a,35718);++b)a.ac=Math.max(a.ac,W.getActiveUniform(a,b).name.length+1);E[c>>2]=a.ac}else if(35722==b){if(!a.Zb)for(b=0;b<W.getProgramParameter(a,35721);++b)a.Zb=Math.max(a.Zb,W.getActiveAttrib(a,b).name.length+1);E[c>>2]=a.Zb}else if(35381==b){if(!a.$b)for(b=0;b<W.getProgramParameter(a,35382);++b)a.$b=Math.max(a.$b,W.getActiveUniformBlockName(a,
b).length+1);E[c>>2]=a.$b}else E[c>>2]=W.getProgramParameter(a,b);else U(1281)},wa:function(a,b,c,d){a=W.getShaderInfoLog(T[a]);null===a&&(a="(unknown error)");b=0<b&&d?B(a,C,d,b):0;c&&(E[c>>2]=b)},E:function(a,b,c){c?35716==b?(a=W.getShaderInfoLog(T[a]),null===a&&(a="(unknown error)"),E[c>>2]=a?a.length+1:0):35720==b?(a=W.getShaderSource(T[a]),E[c>>2]=a?a.length+1:0):E[c>>2]=W.getShaderParameter(T[a],b):U(1281)},Wa:function(a){var b=xb[a];if(!b){switch(a){case 7939:b=W.getSupportedExtensions()||
[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Ib(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=W.getParameter(a))||U(1280);b=b&&Ib(b);break;case 7938:b=W.getParameter(7938);b=2<=V.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Ib(b);break;case 35724:b=W.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Ib(b);break;default:U(1280)}xb[a]=b}return b},Va:function(a,
b){if(2>V.version)return U(1282),0;var c=yb[a];if(c)return 0>b||b>=c.length?(U(1281),0):c[b];switch(a){case 7939:return c=W.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return Ib(d)}),c=yb[a]=c,0>b||b>=c.length?(U(1281),0):c[b];default:return U(1280),0}},r:function(a,b){b=D(b);if(a=Q[a]){var c=a,d=c.Xb,e=c.uc,k;if(!d)for(c.Xb=d={},c.tc={},k=0;k<W.getProgramParameter(c,35718);++k){var g=W.getActiveUniform(c,k);var m=g.name;g=g.size;var n=Jb(m);n=0<
n?m.slice(0,n):m;var p=c.dc;c.dc+=g;e[n]=[g,p];for(m=0;m<g;++m)d[p]=m,c.tc[p++]=n}c=a.Xb;d=0;e=b;k=Jb(b);0<k&&(d=parseInt(b.slice(k+1))>>>0,e=b.slice(0,k));if((e=a.uc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||W.getUniformLocation(a,b)))return d}else U(1281);return-1},Ca:function(a){a=Q[a];W.linkProgram(a);a.Xb=0;a.uc={}},P:function(a,b){W.polygonOffset(a,b)},x:function(a){W.readBuffer(a)},Ka:function(a,b,c,d){W.renderbufferStorage(a,b,c,d)},J:function(a,b,c,d,e){W.renderbufferStorageMultisample(a,b,c,d,e)},
ra:function(a,b,c,d){W.scissor(a,b,c,d)},ya:function(a,b,c,d){for(var e="",k=0;k<b;++k){var g=d?E[d+4*k>>2]:-1;e+=D(E[c+4*k>>2],0>g?void 0:g)}W.shaderSource(T[a],e)},Oa:function(a,b,c){W.stencilFunc(a,b,c)},oa:function(a,b,c,d){W.stencilFuncSeparate(a,b,c,d)},z:function(a){W.stencilMask(a)},Na:function(a,b,c){W.stencilOp(a,b,c)},na:function(a,b,c,d){W.stencilOpSeparate(a,b,c,d)},Ga:function(a,b,c,d,e,k,g,m,n){if(2<=V.version)if(W.Vb)W.texImage2D(a,b,c,d,e,k,g,m,n);else if(n){var p=Kb(m);W.texImage2D(a,
b,c,d,e,k,g,m,p,n>>31-Math.clz32(p.BYTES_PER_ELEMENT))}else W.texImage2D(a,b,c,d,e,k,g,m,null);else{p=W;var q=p.texImage2D;if(n){var aa=Kb(m),R=31-Math.clz32(aa.BYTES_PER_ELEMENT);n=aa.subarray(n>>R,n+e*(d*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[g-6402]||1)*(1<<R)+4-1&-4)>>R)}else n=null;q.call(p,a,b,c,d,e,k,g,m,n)}},Ea:function(a,b,c,d,e,k,g,m,n,p){if(W.Vb)W.texImage3D(a,b,c,d,e,k,g,m,n,p);else if(p){var q=Kb(n);W.texImage3D(a,b,c,d,e,k,g,m,n,q,p>>31-Math.clz32(q.BYTES_PER_ELEMENT))}else W.texImage3D(a,
b,c,d,e,k,g,m,n,null)},I:function(a,b,c){W.texParameterf(a,b,c)},h:function(a,b,c){W.texParameteri(a,b,c)},mb:function(a,b,c){if(2<=V.version)W.uniform1fv(X(a),F,c>>2,b);else{if(288>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=F[c+4*e>>2];else d=F.subarray(c>>2,c+4*b>>2);W.uniform1fv(X(a),d)}},F:function(a,b){W.uniform1i(X(a),b)},lb:function(a,b,c){if(2<=V.version)W.uniform2fv(X(a),F,c>>2,2*b);else{if(144>=b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=F[c+4*e>>2],d[e+1]=F[c+(4*e+4)>>2];else d=F.subarray(c>>2,
c+8*b>>2);W.uniform2fv(X(a),d)}},kb:function(a,b,c){if(2<=V.version)W.uniform3fv(X(a),F,c>>2,3*b);else{if(96>=b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=F[c+4*e>>2],d[e+1]=F[c+(4*e+4)>>2],d[e+2]=F[c+(4*e+8)>>2];else d=F.subarray(c>>2,c+12*b>>2);W.uniform3fv(X(a),d)}},jb:function(a,b,c){if(2<=V.version)W.uniform4fv(X(a),F,c>>2,4*b);else{if(72>=b){var d=Y[4*b-1],e=F;c>>=2;for(var k=0;k<4*b;k+=4){var g=c+k;d[k]=e[g];d[k+1]=e[g+1];d[k+2]=e[g+2];d[k+3]=e[g+3]}}else d=F.subarray(c>>2,c+16*b>>2);W.uniform4fv(X(a),
d)}},ib:function(a,b,c,d){if(2<=V.version)W.uniformMatrix4fv(X(a),!!c,F,d>>2,16*b);else{if(18>=b){var e=Y[16*b-1],k=F;d>>=2;for(var g=0;g<16*b;g+=16){var m=d+g;e[g]=k[m];e[g+1]=k[m+1];e[g+2]=k[m+2];e[g+3]=k[m+3];e[g+4]=k[m+4];e[g+5]=k[m+5];e[g+6]=k[m+6];e[g+7]=k[m+7];e[g+8]=k[m+8];e[g+9]=k[m+9];e[g+10]=k[m+10];e[g+11]=k[m+11];e[g+12]=k[m+12];e[g+13]=k[m+13];e[g+14]=k[m+14];e[g+15]=k[m+15]}}else e=F.subarray(d>>2,d+64*b>>2);W.uniformMatrix4fv(X(a),!!c,e)}},o:function(a){a=Q[a];W.useProgram(a);W.vc=
a},ob:function(a,b){W.vertexAttribDivisor(a,b)},pb:function(a,b,c,d,e,k){W.vertexAttribPointer(a,b,c,!!d,e,k)},sa:function(a,b,c,d){W.viewport(a,b,c,d)},cb:function(){f.nc=function(a){0!=Mb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",f.nc)},bb:function(){f.sc=function(a){a=a.clipboardData.getData("text");oa("_sapp_emsc_onpaste",["string"],[a])};window.addEventListener("paste",f.sc)},ab:function(a){f.Mc=[];a=D(a);a=document.getElementById(a);f.oc=function(b){b.stopPropagation();
b.preventDefault()};f.pc=function(b){b.stopPropagation();b.preventDefault()};f.qc=function(b){b.stopPropagation();b.preventDefault()};f.rc=function(b){b.stopPropagation();b.preventDefault();var c=b.dataTransfer.files;f.Nc=c;Nb(c.length);var d;for(d=0;d<c.length;d++)oa("_sapp_emsc_drop",["number","string"],[d,c[d].name]);Ob(b.clientX,b.clientY)};a.addEventListener("dragenter",f.oc,!1);a.addEventListener("dragleave",f.pc,!1);a.addEventListener("dragover",f.qc,!1);a.addEventListener("drop",f.rc,!1)},
Ya:function(){var a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},v:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Pb()});document.body.append(a)},u:function(){document.getElementById("_sokol_app_input_element").focus()},wb:function(a){a=D(a);f.Wb=document.getElementById(a);f.Wb||console.log("sokol_app.h: invalid target:"+a);f.Wb.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+
a)},$a:function(){window.removeEventListener("beforeunload",f.nc)},_a:function(){window.removeEventListener("paste",f.sc)},Za:function(a){a=D(a);a=document.getElementById(a);a.removeEventListener("dragenter",f.oc);a.removeEventListener("dragleave",f.pc);a.removeEventListener("dragover",f.qc);a.removeEventListener("drop",f.rc)},D:function(){f.Wb&&f.Wb.requestPointerLock&&f.Wb.requestPointerLock()},Xa:function(a,b,c){var d=document.createElement("canvas");d.width=a;d.height=b;var e=d.getContext("2d"),
k=e.createImageData(a,b);k.data.set(C.subarray(c,c+a*b*4));e.putImageData(k,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},t:function(){document.getElementById("_sokol_app_input_element").blur()}};
(function(){function a(e){f.asm=e.exports;la=f.asm.xb;za();H=f.asm.Qb;Ba.unshift(f.asm.yb);I--;f.monitorRunDependencies&&f.monitorRunDependencies(I);0==I&&(null!==Ga&&(clearInterval(Ga),Ga=null),J&&(e=J,J=null,e()))}function b(e){a(e.instance)}function c(e){return Ka().then(function(k){return WebAssembly.instantiate(k,d)}).then(function(k){return k}).then(e,function(k){x("failed to asynchronously prepare wasm: "+k);w(k)})}var d={a:Qb};I++;f.monitorRunDependencies&&f.monitorRunDependencies(I);if(f.instantiateWasm)try{return f.instantiateWasm(d,
a)}catch(e){return x("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return y||"function"!==typeof WebAssembly.instantiateStreaming||Ha()||K.startsWith("file://")||"function"!==typeof fetch?c(b):fetch(K,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(k){x("wasm streaming compile failed: "+k);x("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
f.___wasm_call_ctors=function(){return(f.___wasm_call_ctors=f.asm.yb).apply(null,arguments)};var O=f._malloc=function(){return(O=f._malloc=f.asm.zb).apply(null,arguments)},Pb=f.__sapp_emsc_notify_keyboard_hidden=function(){return(Pb=f.__sapp_emsc_notify_keyboard_hidden=f.asm.Ab).apply(null,arguments)};f.__sapp_emsc_onpaste=function(){return(f.__sapp_emsc_onpaste=f.asm.Bb).apply(null,arguments)};
var Mb=f.__sapp_html5_get_ask_leave_site=function(){return(Mb=f.__sapp_html5_get_ask_leave_site=f.asm.Cb).apply(null,arguments)},Nb=f.__sapp_emsc_begin_drop=function(){return(Nb=f.__sapp_emsc_begin_drop=f.asm.Db).apply(null,arguments)};f.__sapp_emsc_drop=function(){return(f.__sapp_emsc_drop=f.asm.Eb).apply(null,arguments)};var Ob=f.__sapp_emsc_end_drop=function(){return(Ob=f.__sapp_emsc_end_drop=f.asm.Fb).apply(null,arguments)};
f.__sapp_emsc_invoke_fetch_cb=function(){return(f.__sapp_emsc_invoke_fetch_cb=f.asm.Gb).apply(null,arguments)};f._main=function(){return(f._main=f.asm.Hb).apply(null,arguments)};f.__saudio_emsc_pull=function(){return(f.__saudio_emsc_pull=f.asm.Ib).apply(null,arguments)};f.__sfetch_emsc_head_response=function(){return(f.__sfetch_emsc_head_response=f.asm.Jb).apply(null,arguments)};f.__sfetch_emsc_get_response=function(){return(f.__sfetch_emsc_get_response=f.asm.Kb).apply(null,arguments)};
f.__sfetch_emsc_failed_http_status=function(){return(f.__sfetch_emsc_failed_http_status=f.asm.Lb).apply(null,arguments)};f.__sfetch_emsc_failed_buffer_too_small=function(){return(f.__sfetch_emsc_failed_buffer_too_small=f.asm.Mb).apply(null,arguments)};
var qa=f.stackSave=function(){return(qa=f.stackSave=f.asm.Nb).apply(null,arguments)},ra=f.stackRestore=function(){return(ra=f.stackRestore=f.asm.Ob).apply(null,arguments)},z=f.stackAlloc=function(){return(z=f.stackAlloc=f.asm.Pb).apply(null,arguments)},Rb;function ja(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}J=function Sb(){Rb||Tb();Rb||(J=Sb)};
function Tb(a){function b(){if(!Rb&&(Rb=!0,f.calledRun=!0,!ma)){La(Ba);La(Ca);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if(Ub){var c=a,d=f._main;c=c||[];var e=c.length+1,k=z(4*(e+1));E[k>>2]=ua(ca);for(var g=1;g<e;g++)E[(k>>2)+g]=ua(c[g-1]);E[(k>>2)+e]=0;try{var m=d(e,k);if(!(noExitRuntime||0<ka)){if(f.onExit)f.onExit(m);ma=!0}da(m,new ja(m))}catch(n){c=n,c instanceof ja||"unwind"==c||(x("exception thrown: "+c),da(1,c))}finally{}}if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=
[f.postRun]);f.postRun.length;)c=f.postRun.shift(),Ea.unshift(c);La(Ea)}}a=a||ba;if(!(0<I)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Fa();La(Aa);0<I||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},1)):b())}}f.run=Tb;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var Ub=!0;f.noInitialRun&&(Ub=!1);Tb();
