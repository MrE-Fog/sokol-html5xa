
var e;e||(e=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign({},e),ba=[],ca="./this.program",g=(a,b)=>{throw b;},da="object"==typeof window,l="function"==typeof importScripts,ea="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,p="",fa,r,v;
if(ea){p=l?require("path").dirname(p)+"/":__dirname+"/";var fs,ha;"function"===typeof require&&(fs=require("fs"),ha=require("path"));fa=(a,b)=>{a=ha.normalize(a);return fs.readFileSync(a,b?void 0:"utf8")};v=a=>{a=fa(a,!0);a.buffer||(a=new Uint8Array(a));return a};r=(a,b,c)=>{a=ha.normalize(a);fs.readFile(a,function(d,f){d?c(d):b(f.buffer)})};1<process.argv.length&&(ca=process.argv[1].replace(/\\/g,"/"));ba=process.argv.slice(2);"undefined"!=typeof module&&(module.exports=e);process.on("uncaughtException",
function(a){if(!(a instanceof w))throw a;});process.on("unhandledRejection",function(a){throw a;});g=(a,b)=>{if(noExitRuntime)throw process.exitCode=a,b;b instanceof w||x("exiting due to exception: "+b);process.exit(a)};e.inspect=function(){return"[Emscripten Module object]"}}else if(da||l)l?p=self.location.href:"undefined"!=typeof document&&document.currentScript&&(p=document.currentScript.src),p=0!==p.indexOf("blob:")?p.substr(0,p.replace(/[?#].*/,"").lastIndexOf("/")+1):"",fa=a=>{var b=new XMLHttpRequest;
b.open("GET",a,!1);b.send(null);return b.responseText},l&&(v=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),r=(a,b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};e.print||console.log.bind(console);var x=e.printErr||console.warn.bind(console);Object.assign(e,aa);aa=null;e.arguments&&(ba=e.arguments);
e.thisProgram&&(ca=e.thisProgram);e.quit&&(g=e.quit);var y;e.wasmBinary&&(y=e.wasmBinary);var noExitRuntime=e.noExitRuntime||!0;"object"!=typeof WebAssembly&&ia("no native wasm support detected");var ja,ka=!1,la="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;
function z(a,b){if(a){var c=A,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.buffer&&la)a=la.decode(c.subarray(a,b));else{for(d="";a<b;){var f=c[a++];if(f&128){var k=c[a++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|k);else{var h=c[a++]&63;f=224==(f&240)?(f&15)<<12|k<<6|h:(f&7)<<18|k<<12|h<<6|c[a++]&63;65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else d+=String.fromCharCode(f)}a=d}}else a="";return a}
function B(a,b,c,d){if(!(0<d))return 0;var f=c;d=c+d-1;for(var k=0;k<a.length;++k){var h=a.charCodeAt(k);if(55296<=h&&57343>=h){var m=a.charCodeAt(++k);h=65536+((h&1023)<<10)|m&1023}if(127>=h){if(c>=d)break;b[c++]=h}else{if(2047>=h){if(c+1>=d)break;b[c++]=192|h>>6}else{if(65535>=h){if(c+2>=d)break;b[c++]=224|h>>12}else{if(c+3>=d)break;b[c++]=240|h>>18;b[c++]=128|h>>12&63}b[c++]=128|h>>6&63}b[c++]=128|h&63}}b[c]=0;return c-f}
function ma(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);127>=d?b++:2047>=d?b+=2:55296<=d&&57343>=d?(b+=4,++c):b+=3}return b}var na,oa,A,C,pa,D,qa,ra,E;function sa(){var a=ja.buffer;na=a;e.HEAP8=oa=new Int8Array(a);e.HEAP16=C=new Int16Array(a);e.HEAP32=D=new Int32Array(a);e.HEAPU8=A=new Uint8Array(a);e.HEAPU16=pa=new Uint16Array(a);e.HEAPU32=qa=new Uint32Array(a);e.HEAPF32=ra=new Float32Array(a);e.HEAPF64=E=new Float64Array(a)}var ta,ua=[],va=[],wa=[],xa=[],ya=[];
function za(){var a=e.preRun.shift();ua.unshift(a)}var F=0,Aa=null,G=null;function ia(a){if(e.onAbort)e.onAbort(a);a="Aborted("+a+")";x(a);ka=!0;throw new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");}function Ba(){return H.startsWith("data:application/octet-stream;base64,")}var H;H="debugtext-sapp.wasm";if(!Ba()){var Ca=H;H=e.locateFile?e.locateFile(Ca,p):p+Ca}
function Da(){var a=H;try{if(a==H&&y)return new Uint8Array(y);if(v)return v(a);throw"both async and sync fetching of the wasm failed";}catch(b){ia(b)}}
function Ea(){if(!y&&(da||l)){if("function"==typeof fetch&&!H.startsWith("file://"))return fetch(H,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+H+"'";return a.arrayBuffer()}).catch(function(){return Da()});if(r)return new Promise(function(a,b){r(H,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Da()})}function w(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}
function I(a){for(;0<a.length;)a.shift()(e)}function Fa(a){var b=Ga();a();Ha(b)}var Ia=0;function Ja(){for(var a=J.length-1;0<=a;--a)Ka(a);J=[];L=[]}var L=[];function La(){if(Ia&&Ma.Nb)for(var a=0;a<L.length;++a){var b=L[a];L.splice(a,1);--a;b.zc.apply(null,b.oc)}}var J=[];function Ka(a){var b=J[a];b.target.removeEventListener(b.Fb,b.kc,b.Gb);J.splice(a,1)}
function M(a){function b(d){++Ia;Ma=a;La();a.Ib(d);La();--Ia}if(a.Hb)a.kc=b,a.target.addEventListener(a.Fb,b,a.Gb),J.push(a),Na||(xa.push(Ja),Na=!0);else for(var c=0;c<J.length;++c)J[c].target==a.target&&J[c].Fb==a.Fb&&Ka(c--)}function Oa(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}var Na,Ma,Pa,Qa,N,Ra,Sa,Ta,Ua,Va=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0];
function O(a){a=2<a?z(a):a;return Va[a]||("undefined"!=typeof document?document.querySelector(a):void 0)}function Wa(a){return 0>Va.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}var P=[];function Q(a){var b=P[a];b||(a>=P.length&&(P.length=a+1),P[a]=b=ta.get(a));return b}function Xa(a,b,c,d,f,k){Pa||(Pa=R(256));a={target:O(a),Fb:k,Hb:d,Ib:function(h){h=h||event;var m=h.target.id?h.target.id:"",n=Pa;B(Oa(h.target),A,n+0,128);B(m,A,n+128,128);Q(d)(f,n,b)&&h.preventDefault()},Gb:c};M(a)}
function Ya(a,b,c,d,f,k){Qa||(Qa=R(176));a={target:O(a),Nb:!0,Fb:k,Hb:d,Ib:function(h){var m=Qa;E[m>>3]=h.timeStamp;var n=m>>2;D[n+2]=h.location;D[n+3]=h.ctrlKey;D[n+4]=h.shiftKey;D[n+5]=h.altKey;D[n+6]=h.metaKey;D[n+7]=h.repeat;D[n+8]=h.charCode;D[n+9]=h.keyCode;D[n+10]=h.which;B(h.key||"",A,m+44,32);B(h.code||"",A,m+76,32);B(h.char||"",A,m+108,32);B(h.locale||"",A,m+140,32);Q(d)(f,m,b)&&h.preventDefault()},Gb:c};M(a)}
function Za(a,b,c){E[a>>3]=b.timeStamp;a>>=2;D[a+2]=b.screenX;D[a+3]=b.screenY;D[a+4]=b.clientX;D[a+5]=b.clientY;D[a+6]=b.ctrlKey;D[a+7]=b.shiftKey;D[a+8]=b.altKey;D[a+9]=b.metaKey;C[2*a+20]=b.button;C[2*a+21]=b.buttons;D[a+11]=b.movementX;D[a+12]=b.movementY;c=Wa(c);D[a+13]=b.clientX-c.left;D[a+14]=b.clientY-c.top}
function S(a,b,c,d,f,k){N||(N=R(72));a=O(a);M({target:a,Nb:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,Fb:k,Hb:d,Ib:function(h){h=h||event;Za(N,h,a);Q(d)(f,N,b)&&h.preventDefault()},Gb:c})}function T(a,b,c,d,f){Ra||(Ra=R(260));M({target:a,Fb:f,Hb:d,Ib:function(k){k=k||event;var h=Ra,m=document.pointerLockElement||document.Kb||document.Ub||document.Tb;D[h>>2]=!!m;var n=m&&m.id?m.id:"";B(Oa(m),A,h+4,128);B(n,A,h+132,128);Q(d)(20,h,b)&&k.preventDefault()},Gb:c})}
function $a(a,b,c,d,f){M({target:a,Fb:f,Hb:d,Ib:function(k){k=k||event;Q(d)(38,0,b)&&k.preventDefault()},Gb:c})}
function ab(a,b,c,d){Sa||(Sa=R(36));a=O(a);M({target:a,Fb:"resize",Hb:d,Ib:function(f){f=f||event;if(f.target==a){var k=document.body;if(k){var h=Sa;D[h>>2]=f.detail;D[h+4>>2]=k.clientWidth;D[h+8>>2]=k.clientHeight;D[h+12>>2]=innerWidth;D[h+16>>2]=innerHeight;D[h+20>>2]=outerWidth;D[h+24>>2]=outerHeight;D[h+28>>2]=pageXOffset;D[h+32>>2]=pageYOffset;Q(d)(10,h,b)&&f.preventDefault()}}},Gb:c})}
function bb(a,b,c,d,f,k){Ta||(Ta=R(1696));a=O(a);M({target:a,Nb:"touchstart"==k||"touchend"==k,Fb:k,Hb:d,Ib:function(h){for(var m,n={},q=h.touches,u=0;u<q.length;++u)m=q[u],m.Yb=m.$b=0,n[m.identifier]=m;for(u=0;u<h.changedTouches.length;++u)m=h.changedTouches[u],m.Yb=1,n[m.identifier]=m;for(u=0;u<h.targetTouches.length;++u)n[h.targetTouches[u].identifier].$b=1;q=Ta;E[q>>3]=h.timeStamp;var t=q>>2;D[t+3]=h.ctrlKey;D[t+4]=h.shiftKey;D[t+5]=h.altKey;D[t+6]=h.metaKey;t+=7;var K=Wa(a),ib=0;for(u in n)if(m=
n[u],D[t]=m.identifier,D[t+1]=m.screenX,D[t+2]=m.screenY,D[t+3]=m.clientX,D[t+4]=m.clientY,D[t+5]=m.pageX,D[t+6]=m.pageY,D[t+7]=m.Yb,D[t+8]=m.$b,D[t+9]=m.clientX-K.left,D[t+10]=m.clientY-K.top,t+=13,31<++ib)break;D[q+8>>2]=ib;Q(d)(f,q,b)&&h.preventDefault()},Gb:c})}function cb(a,b,c,d,f,k){a={target:O(a),Fb:k,Hb:d,Ib:function(h){h=h||event;Q(d)(f,0,b)&&h.preventDefault()},Gb:c};M(a)}
function db(a,b,c,d){Ua||(Ua=R(104));M({target:a,Nb:!0,Fb:"wheel",Hb:d,Ib:function(f){f=f||event;var k=Ua;Za(k,f,a);E[k+72>>3]=f.deltaX;E[k+80>>3]=f.deltaY;E[k+88>>3]=f.deltaZ;D[k+96>>2]=f.deltaMode;Q(d)(9,k,b)&&f.preventDefault()},Gb:c})}
function eb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,f,k){b.drawArraysInstancedANGLE(c,d,f,k)},a.drawElementsInstanced=function(c,d,f,k,h){b.drawElementsInstancedANGLE(c,d,f,k,h)})}
function fb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function gb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function hb(a){a.qc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function jb(a){a.sc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function kb(a){a.uc=a.getExtension("WEBGL_multi_draw")}var lb=1,mb=[],U=[],nb=[],ob=[],pb=[],V=[],qb=[],rb=[],sb={},tb={};function W(a){ub||(ub=a)}function vb(a){for(var b=lb++,c=a.length;c<b;c++)a[c]=null;return b}
function wb(a,b){a.Kb||(a.Kb=a.getContext,a.getContext=function(d,f){f=a.Kb(d,f);return"webgl"==d==f instanceof WebGLRenderingContext?f:null});var c=1<b.Zb?a.getContext("webgl2",b):a.getContext("webgl",b);return c?xb(c,b):0}function xb(a,b){var c=vb(rb),d={rc:c,attributes:b,version:b.Zb,Rb:a};a.canvas&&(a.canvas.nc=d);rb[c]=d;("undefined"==typeof b.Xb||b.Xb)&&yb(d);return c}
function yb(a){a||(a=X);if(!a.mc){a.mc=!0;var b=a.Rb;eb(b);fb(b);gb(b);hb(b);jb(b);2<=a.version&&(b.Wb=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.Wb)b.Wb=b.getExtension("EXT_disjoint_timer_query");kb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var ub,X,zb=["default","low-power","high-performance"];
function Ab(a,b,c,d){for(var f=0;f<a;f++){var k=Y[c](),h=k&&vb(d);k?(k.name=h,d[h]=k):W(1282);D[b+4*f>>2]=h}}
function Bb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=Y.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>X.version){W(1282);return}c=2*(Y.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>X.version){W(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=Y.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":W(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:W(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)D[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(f){W(1280);x("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+f+")");return}}break;default:W(1280);x("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}D[b>>2]=c}else W(1281)}
function Z(a){var b=ma(a)+1,c=R(b);B(a,A,c,b);return c}function Cb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function Db(a){a-=5120;return 0==a?oa:1==a?A:2==a?C:4==a?D:6==a?ra:5==a||28922==a||28520==a||30779==a||30782==a?qa:pa}function Eb(a){if(!noExitRuntime){if(e.onExit)e.onExit(a);ka=!0}g(a,new w(a))}function Fb(a){var b=ma(a)+1,c=Gb(b);B(a,oa,c,b);return c}
var Y,Nb={R:function(){return"number"==typeof devicePixelRatio&&devicePixelRatio||1},ka:function(a,b,c){a=O(a);if(!a)return-4;a=Wa(a);E[b>>3]=a.width;E[c>>3]=a.height;return 0},_a:function(a,b,c){A.copyWithin(a,b,b+c)},La:function(a,b){function c(d){Q(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},Za:function(a){var b=A.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);var f=Math;d=Math.max(a,d);f=f.min.call(f,2147483648,d+
(65536-d%65536)%65536);a:{try{ja.grow(f-na.byteLength+65535>>>16);sa();var k=1;break a}catch(h){}k=void 0}if(k)return!0}return!1},S:function(a,b,c,d){Xa(a,b,c,d,12,"blur");return 0},O:function(a,b,c){a=O(a);if(!a)return-4;a.width=b;a.height=c;return 0},T:function(a,b,c,d){Xa(a,b,c,d,13,"focus");return 0},aa:function(a,b,c,d){Ya(a,b,c,d,2,"keydown");return 0},_:function(a,b,c,d){Ya(a,b,c,d,1,"keypress");return 0},$:function(a,b,c,d){Ya(a,b,c,d,3,"keyup");return 0},ja:function(a,b,c,d){S(a,b,c,d,5,
"mousedown");return 0},da:function(a,b,c,d){S(a,b,c,d,33,"mouseenter");return 0},ca:function(a,b,c,d){S(a,b,c,d,34,"mouseleave");return 0},ea:function(a,b,c,d){S(a,b,c,d,8,"mousemove");return 0},fa:function(a,b,c,d){S(a,b,c,d,6,"mouseup");return 0},V:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.Kb||document.body.Ub||document.body.Tb))return-1;a=O(a);if(!a)return-4;T(a,b,c,d,"pointerlockchange");T(a,b,c,d,"mozpointerlockchange");T(a,b,c,d,"webkitpointerlockchange");
T(a,b,c,d,"mspointerlockchange");return 0},U:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.Kb||document.body.Ub||document.body.Tb))return-1;a=O(a);if(!a)return-4;$a(a,b,c,d,"pointerlockerror");$a(a,b,c,d,"mozpointerlockerror");$a(a,b,c,d,"webkitpointerlockerror");$a(a,b,c,d,"mspointerlockerror");return 0},Ya:function(a,b,c,d){ab(a,b,c,d);return 0},W:function(a,b,c,d){bb(a,b,c,d,25,"touchcancel");return 0},X:function(a,b,c,d){bb(a,b,c,d,23,"touchend");return 0},
Y:function(a,b,c,d){bb(a,b,c,d,24,"touchmove");return 0},Z:function(a,b,c,d){bb(a,b,c,d,22,"touchstart");return 0},Q:function(a,b,c,d){cb(a,b,c,d,31,"webglcontextlost");return 0},P:function(a,b,c,d){cb(a,b,c,d,32,"webglcontextrestored");return 0},ba:function(a,b,c,d){a=O(a);return"undefined"!=typeof a.onwheel?(db(a,b,c,d),0):-1},F:function(a,b){b>>=2;b={alpha:!!D[b],depth:!!D[b+1],stencil:!!D[b+2],antialias:!!D[b+3],premultipliedAlpha:!!D[b+4],preserveDrawingBuffer:!!D[b+5],powerPreference:zb[D[b+
6]],failIfMajorPerformanceCaveat:!!D[b+7],Zb:D[b+8],tc:D[b+9],Xb:D[b+10],lc:D[b+11],vc:D[b+12],wc:D[b+13]};a=O(a);return!a||b.lc?0:wb(a,b)},ra:function(a,b){a=rb[a];b=z(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&eb(Y);"OES_vertex_array_object"==b&&fb(Y);"WEBGL_draw_buffers"==b&&gb(Y);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&hb(Y);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&jb(Y);"WEBGL_multi_draw"==b&&kb(Y);return!!a.Rb.getExtension(b)},Ia:function(a){a>>=
2;for(var b=0;14>b;++b)D[a+b]=0;D[a]=D[a+1]=D[a+3]=D[a+4]=D[a+8]=D[a+10]=1},ya:function(a){X=rb[a];e.pc=Y=X&&X.Rb;return!a||Y?0:-5},b:function(a){Y.activeTexture(a)},B:function(a,b){Y.attachShader(U[a],V[b])},c:function(a,b){35051==a?Y.Vb=b:35052==a&&(Y.Jb=b);Y.bindBuffer(a,mb[b])},h:function(a,b){Y.bindFramebuffer(a,nb[b])},Ca:function(a,b){Y.bindRenderbuffer(a,ob[b])},a:function(a,b){Y.bindTexture(a,pb[b])},M:function(a){Y.bindVertexArray(qb[a])},I:function(a,b,c,d){Y.blendColor(a,b,c,d)},J:function(a,
b){Y.blendEquationSeparate(a,b)},K:function(a,b,c,d){Y.blendFuncSeparate(a,b,c,d)},p:function(a,b,c,d,f,k,h,m,n,q){Y.blitFramebuffer(a,b,c,d,f,k,h,m,n,q)},Ea:function(a,b,c,d){2<=X.version?c&&b?Y.bufferData(a,A,d,c,b):Y.bufferData(a,b,d):Y.bufferData(a,c?A.subarray(c,c+b):b,d)},D:function(a,b,c,d){2<=X.version?c&&Y.bufferSubData(a,b,A,d,c):Y.bufferSubData(a,b,A.subarray(d,d+c))},gb:function(a){Y.clear(a)},ia:function(a,b,c,d){Y.clearColor(a,b,c,d)},x:function(a){Y.clearDepth(a)},hb:function(a){Y.clearStencil(a)},
j:function(a,b,c,d){Y.colorMask(!!a,!!b,!!c,!!d)},na:function(a){Y.compileShader(V[a])},xa:function(a,b,c,d,f,k,h,m){2<=X.version?Y.Jb||!h?Y.compressedTexImage2D(a,b,c,d,f,k,h,m):Y.compressedTexImage2D(a,b,c,d,f,k,A,m,h):Y.compressedTexImage2D(a,b,c,d,f,k,m?A.subarray(m,m+h):null)},va:function(a,b,c,d,f,k,h,m,n){Y.Jb?Y.compressedTexImage3D(a,b,c,d,f,k,h,m,n):Y.compressedTexImage3D(a,b,c,d,f,k,h,A,n,m)},ta:function(){var a=vb(U),b=Y.createProgram();b.name=a;b.Qb=b.Ob=b.Pb=0;b.Sb=1;U[a]=b;return a},
pa:function(a){var b=vb(V);V[b]=Y.createShader(a);return b},E:function(a){Y.cullFace(a)},Na:function(a,b){for(var c=0;c<a;c++){var d=D[b+4*c>>2],f=mb[d];f&&(Y.deleteBuffer(f),f.name=0,mb[d]=null,d==Y.Vb&&(Y.Vb=0),d==Y.Jb&&(Y.Jb=0))}},i:function(a,b){for(var c=0;c<a;++c){var d=D[b+4*c>>2],f=nb[d];f&&(Y.deleteFramebuffer(f),f.name=0,nb[d]=null)}},v:function(a){if(a){var b=U[a];b?(Y.deleteProgram(b),b.name=0,U[a]=null):W(1281)}},N:function(a,b){for(var c=0;c<a;c++){var d=D[b+4*c>>2],f=ob[d];f&&(Y.deleteRenderbuffer(f),
f.name=0,ob[d]=null)}},r:function(a){if(a){var b=V[a];b?(Y.deleteShader(b),V[a]=null):W(1281)}},Ma:function(a,b){for(var c=0;c<a;c++){var d=D[b+4*c>>2],f=pb[d];f&&(Y.deleteTexture(f),f.name=0,pb[d]=null)}},Ka:function(a,b){for(var c=0;c<a;c++){var d=D[b+4*c>>2];Y.deleteVertexArray(qb[d]);qb[d]=null}},u:function(a){Y.depthFunc(a)},t:function(a){Y.depthMask(!!a)},e:function(a){Y.disable(a)},L:function(a){Y.disableVertexAttribArray(a)},$a:function(a,b,c){Y.drawArrays(a,b,c)},ab:function(a,b,c,d){Y.drawArraysInstanced(a,
b,c,d)},bb:function(a,b,c,d){Y.drawElements(a,b,c,d)},cb:function(a,b,c,d,f){Y.drawElementsInstanced(a,b,c,d,f)},g:function(a){Y.enable(a)},db:function(a){Y.enableVertexAttribArray(a)},G:function(a){Y.frontFace(a)},Fa:function(a,b){Ab(a,b,"createBuffer",mb)},Da:function(a,b){Ab(a,b,"createRenderbuffer",ob)},za:function(a,b){Ab(a,b,"createTexture",pb)},Ja:function(a,b){Ab(a,b,"createVertexArray",qb)},la:function(a,b){return Y.getAttribLocation(U[a],z(b))},d:function(a,b){Bb(a,b)},qa:function(a,b,c,
d){a=Y.getProgramInfoLog(U[a]);null===a&&(a="(unknown error)");b=0<b&&d?B(a,A,d,b):0;c&&(D[c>>2]=b)},A:function(a,b,c){if(c)if(a>=lb)W(1281);else if(a=U[a],35716==b)a=Y.getProgramInfoLog(a),null===a&&(a="(unknown error)"),D[c>>2]=a.length+1;else if(35719==b){if(!a.Qb)for(b=0;b<Y.getProgramParameter(a,35718);++b)a.Qb=Math.max(a.Qb,Y.getActiveUniform(a,b).name.length+1);D[c>>2]=a.Qb}else if(35722==b){if(!a.Ob)for(b=0;b<Y.getProgramParameter(a,35721);++b)a.Ob=Math.max(a.Ob,Y.getActiveAttrib(a,b).name.length+
1);D[c>>2]=a.Ob}else if(35381==b){if(!a.Pb)for(b=0;b<Y.getProgramParameter(a,35382);++b)a.Pb=Math.max(a.Pb,Y.getActiveUniformBlockName(a,b).length+1);D[c>>2]=a.Pb}else D[c>>2]=Y.getProgramParameter(a,b);else W(1281)},ma:function(a,b,c,d){a=Y.getShaderInfoLog(V[a]);null===a&&(a="(unknown error)");b=0<b&&d?B(a,A,d,b):0;c&&(D[c>>2]=b)},y:function(a,b,c){c?35716==b?(a=Y.getShaderInfoLog(V[a]),null===a&&(a="(unknown error)"),D[c>>2]=a?a.length+1:0):35720==b?(a=Y.getShaderSource(V[a]),D[c>>2]=a?a.length+
1:0):D[c>>2]=Y.getShaderParameter(V[a],b):W(1281)},Pa:function(a){var b=sb[a];if(!b){switch(a){case 7939:b=Y.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Z(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Y.getParameter(a))||W(1280);b=b&&Z(b);break;case 7938:b=Y.getParameter(7938);b=2<=X.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Z(b);break;case 35724:b=Y.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);
null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Z(b);break;default:W(1280)}sb[a]=b}return b},Oa:function(a,b){if(2>X.version)return W(1282),0;var c=tb[a];if(c)return 0>b||b>=c.length?(W(1281),0):c[b];switch(a){case 7939:return c=Y.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return Z(d)}),c=tb[a]=c,0>b||b>=c.length?(W(1281),0):c[b];default:return W(1280),0}},l:function(a,b){b=z(b);if(a=U[a]){var c=a,d=c.Mb,f=c.ic,k;
if(!d)for(c.Mb=d={},c.hc={},k=0;k<Y.getProgramParameter(c,35718);++k){var h=Y.getActiveUniform(c,k);var m=h.name;h=h.size;var n=Cb(m);n=0<n?m.slice(0,n):m;var q=c.Sb;c.Sb+=h;f[n]=[h,q];for(m=0;m<h;++m)d[q]=m,c.hc[q++]=n}c=a.Mb;d=0;f=b;k=Cb(b);0<k&&(d=parseInt(b.slice(k+1))>>>0,f=b.slice(0,k));if((f=a.ic[f])&&d<f[0]&&(d+=f[1],c[d]=c[d]||Y.getUniformLocation(a,b)))return d}else W(1281);return-1},sa:function(a){a=U[a];Y.linkProgram(a);a.Mb=0;a.ic={}},H:function(a,b){Y.polygonOffset(a,b)},q:function(a){Y.readBuffer(a)},
Aa:function(a,b,c,d){Y.renderbufferStorage(a,b,c,d)},Ba:function(a,b,c,d,f){Y.renderbufferStorageMultisample(a,b,c,d,f)},ib:function(a,b,c,d){Y.scissor(a,b,c,d)},oa:function(a,b,c,d){for(var f="",k=0;k<b;++k){var h=d?D[d+4*k>>2]:-1;f+=z(D[c+4*k>>2],0>h?void 0:h)}Y.shaderSource(V[a],f)},Ha:function(a,b,c){Y.stencilFunc(a,b,c)},ha:function(a,b,c,d){Y.stencilFuncSeparate(a,b,c,d)},s:function(a){Y.stencilMask(a)},Ga:function(a,b,c){Y.stencilOp(a,b,c)},ga:function(a,b,c,d){Y.stencilOpSeparate(a,b,c,d)},
wa:function(a,b,c,d,f,k,h,m,n){if(2<=X.version)if(Y.Jb)Y.texImage2D(a,b,c,d,f,k,h,m,n);else if(n){var q=Db(m);Y.texImage2D(a,b,c,d,f,k,h,m,q,n>>31-Math.clz32(q.BYTES_PER_ELEMENT))}else Y.texImage2D(a,b,c,d,f,k,h,m,null);else{q=Y;var u=q.texImage2D;if(n){var t=Db(m),K=31-Math.clz32(t.BYTES_PER_ELEMENT);n=t.subarray(n>>K,n+f*(d*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[h-6402]||1)*(1<<K)+4-1&-4)>>K)}else n=null;u.call(q,a,b,c,d,f,k,h,m,n)}},ua:function(a,b,c,d,f,k,h,m,n,q){if(Y.Jb)Y.texImage3D(a,
b,c,d,f,k,h,m,n,q);else if(q){var u=Db(n);Y.texImage3D(a,b,c,d,f,k,h,m,n,u,q>>31-Math.clz32(u.BYTES_PER_ELEMENT))}else Y.texImage3D(a,b,c,d,f,k,h,m,n,null)},C:function(a,b,c){Y.texParameterf(a,b,c)},f:function(a,b,c){Y.texParameteri(a,b,c)},z:function(a,b){var c=Y,d=c.uniform1i;var f=Y.jc;if(f){var k=f.Mb[a];"number"==typeof k&&(f.Mb[a]=k=Y.getUniformLocation(f,f.hc[a]+(0<k?"["+k+"]":"")));a=k}else W(1282),a=void 0;d.call(c,a,b)},k:function(a){a=U[a];Y.useProgram(a);Y.jc=a},eb:function(a,b){Y.vertexAttribDivisor(a,
b)},fb:function(a,b,c,d,f,k){Y.vertexAttribPointer(a,b,c,!!d,f,k)},jb:function(a,b,c,d){Y.viewport(a,b,c,d)},Xa:function(){e.ac=a=>{0!=Hb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",e.ac)},Wa:function(){e.fc=a=>{const b=a.clipboardData.getData("text");Fa(()=>{const c=Fb(b);Ib(c)})};window.addEventListener("paste",e.fc)},Va:function(a){e.xc=[];a=z(a);a=document.getElementById(a);e.bc=b=>{b.stopPropagation();b.preventDefault()};e.cc=b=>{b.stopPropagation();b.preventDefault()};
e.dc=b=>{b.stopPropagation();b.preventDefault()};e.ec=b=>{b.stopPropagation();b.preventDefault();const c=b.dataTransfer.files;e.yc=c;Jb(c.length);for(let d=0;d<c.length;d++)Fa(()=>{const f=Fb(c[d].name);Kb(d,f)});Lb(b.clientX,b.clientY)};a.addEventListener("dragenter",e.bc,!1);a.addEventListener("dragleave",e.cc,!1);a.addEventListener("dragover",e.dc,!1);a.addEventListener("drop",e.ec,!1)},Ra:function(){const a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},o:function(){const a=
document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Mb()});document.body.append(a)},n:function(){document.getElementById("_sokol_app_input_element").focus()},kb:function(a){a=z(a);e.Lb=document.getElementById(a);e.Lb||console.log("sokol_app.h: invalid target:"+a);e.Lb.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Ua:function(){window.removeEventListener("beforeunload",
e.ac)},Ta:function(){window.removeEventListener("paste",e.fc)},Sa:function(a){a=z(a);a=document.getElementById(a);a.removeEventListener("dragenter",e.bc);a.removeEventListener("dragleave",e.cc);a.removeEventListener("dragover",e.dc);a.removeEventListener("drop",e.ec)},w:function(){e.Lb&&e.Lb.requestPointerLock&&e.Lb.requestPointerLock()},Qa:function(a,b,c){const d=document.createElement("canvas");d.width=a;d.height=b;const f=d.getContext("2d"),k=f.createImageData(a,b);k.data.set(A.subarray(c,c+a*
b*4));f.putImageData(k,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},m:function(){document.getElementById("_sokol_app_input_element").blur()}};
(function(){function a(f){e.asm=f.exports;ja=e.asm.lb;sa();ta=e.asm.Bb;va.unshift(e.asm.mb);F--;e.monitorRunDependencies&&e.monitorRunDependencies(F);0==F&&(null!==Aa&&(clearInterval(Aa),Aa=null),G&&(f=G,G=null,f()))}function b(f){a(f.instance)}function c(f){return Ea().then(function(k){return WebAssembly.instantiate(k,d)}).then(function(k){return k}).then(f,function(k){x("failed to asynchronously prepare wasm: "+k);ia(k)})}var d={a:Nb};F++;e.monitorRunDependencies&&e.monitorRunDependencies(F);if(e.instantiateWasm)try{return e.instantiateWasm(d,
a)}catch(f){return x("Module.instantiateWasm callback failed with error: "+f),!1}(function(){return y||"function"!=typeof WebAssembly.instantiateStreaming||Ba()||H.startsWith("file://")||ea||"function"!=typeof fetch?c(b):fetch(H,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,d).then(b,function(k){x("wasm streaming compile failed: "+k);x("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
e.___wasm_call_ctors=function(){return(e.___wasm_call_ctors=e.asm.mb).apply(null,arguments)};
var R=e._malloc=function(){return(R=e._malloc=e.asm.nb).apply(null,arguments)},Mb=e.__sapp_emsc_notify_keyboard_hidden=function(){return(Mb=e.__sapp_emsc_notify_keyboard_hidden=e.asm.ob).apply(null,arguments)},Ib=e.__sapp_emsc_onpaste=function(){return(Ib=e.__sapp_emsc_onpaste=e.asm.pb).apply(null,arguments)},Hb=e.__sapp_html5_get_ask_leave_site=function(){return(Hb=e.__sapp_html5_get_ask_leave_site=e.asm.qb).apply(null,arguments)},Jb=e.__sapp_emsc_begin_drop=function(){return(Jb=e.__sapp_emsc_begin_drop=
e.asm.rb).apply(null,arguments)},Kb=e.__sapp_emsc_drop=function(){return(Kb=e.__sapp_emsc_drop=e.asm.sb).apply(null,arguments)},Lb=e.__sapp_emsc_end_drop=function(){return(Lb=e.__sapp_emsc_end_drop=e.asm.tb).apply(null,arguments)};e.__sapp_emsc_invoke_fetch_cb=function(){return(e.__sapp_emsc_invoke_fetch_cb=e.asm.ub).apply(null,arguments)};e._main=function(){return(e._main=e.asm.vb).apply(null,arguments)};e.__saudio_emsc_pull=function(){return(e.__saudio_emsc_pull=e.asm.wb).apply(null,arguments)};
e.__sfetch_emsc_head_response=function(){return(e.__sfetch_emsc_head_response=e.asm.xb).apply(null,arguments)};e.__sfetch_emsc_get_response=function(){return(e.__sfetch_emsc_get_response=e.asm.yb).apply(null,arguments)};e.__sfetch_emsc_failed_http_status=function(){return(e.__sfetch_emsc_failed_http_status=e.asm.zb).apply(null,arguments)};e.__sfetch_emsc_failed_buffer_too_small=function(){return(e.__sfetch_emsc_failed_buffer_too_small=e.asm.Ab).apply(null,arguments)};
var Ga=e.stackSave=function(){return(Ga=e.stackSave=e.asm.Cb).apply(null,arguments)},Ha=e.stackRestore=function(){return(Ha=e.stackRestore=e.asm.Db).apply(null,arguments)},Gb=e.stackAlloc=function(){return(Gb=e.stackAlloc=e.asm.Eb).apply(null,arguments)};e.___start_em_js=16964;e.___stop_em_js=26251;var Ob;G=function Pb(){Ob||Qb();Ob||(G=Pb)};
function Rb(a){var b=e._main;a=a||[];a.unshift(ca);var c=a.length,d=Gb(4*(c+1)),f=d>>2;a.forEach(h=>{D[f++]=Fb(h)});D[f]=0;try{var k=b(c,d);Eb(k)}catch(h){h instanceof w||"unwind"==h||g(1,h)}}
function Qb(){function a(){if(!Ob&&(Ob=!0,e.calledRun=!0,!ka)){I(va);I(wa);if(e.onRuntimeInitialized)e.onRuntimeInitialized();Sb&&Rb(b);if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;){var c=e.postRun.shift();ya.unshift(c)}I(ya)}}var b=b||ba;if(!(0<F)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)za();I(ua);0<F||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);a()},
1)):a())}}if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();var Sb=!0;e.noInitialRun&&(Sb=!1);Qb();
