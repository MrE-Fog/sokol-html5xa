var e;e||(e=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign({},e),ba=[],ca="./this.program",g=(a,b)=>{throw b;},da="object"==typeof window,l="function"==typeof importScripts,ea="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,p="",fa,r,v;
if(ea){var fs=require("fs"),ha=require("path");p=l?ha.dirname(p)+"/":__dirname+"/";fa=(a,b)=>{a=a.startsWith("file://")?new URL(a):ha.normalize(a);return fs.readFileSync(a,b?void 0:"utf8")};v=a=>{a=fa(a,!0);a.buffer||(a=new Uint8Array(a));return a};r=(a,b,c)=>{a=a.startsWith("file://")?new URL(a):ha.normalize(a);fs.readFile(a,function(d,f){d?c(d):b(f.buffer)})};1<process.argv.length&&(ca=process.argv[1].replace(/\\/g,"/"));ba=process.argv.slice(2);"undefined"!=typeof module&&(module.exports=e);process.on("uncaughtException",
function(a){if(!(a instanceof w))throw a;});if(15>process.version.match(/^v(\d+)\./)[1])process.on("unhandledRejection",function(a){throw a;});g=(a,b)=>{if(noExitRuntime)throw process.exitCode=a,b;b instanceof w||x("exiting due to exception: "+b);process.exit(a)};e.inspect=function(){return"[Emscripten Module object]"}}else if(da||l)l?p=self.location.href:"undefined"!=typeof document&&document.currentScript&&(p=document.currentScript.src),p=0!==p.indexOf("blob:")?p.substr(0,p.replace(/[?#].*/,"").lastIndexOf("/")+
1):"",fa=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},l&&(v=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),r=(a,b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};e.print||console.log.bind(console);var x=e.printErr||console.warn.bind(console);
Object.assign(e,aa);aa=null;e.arguments&&(ba=e.arguments);e.thisProgram&&(ca=e.thisProgram);e.quit&&(g=e.quit);var y;e.wasmBinary&&(y=e.wasmBinary);var noExitRuntime=e.noExitRuntime||!0;"object"!=typeof WebAssembly&&z("no native wasm support detected");var A,ia=!1,ja="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;
function B(a,b){if(a){var c=C,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.buffer&&ja)a=ja.decode(c.subarray(a,b));else{for(d="";a<b;){var f=c[a++];if(f&128){var k=c[a++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|k);else{var h=c[a++]&63;f=224==(f&240)?(f&15)<<12|k<<6|h:(f&7)<<18|k<<12|h<<6|c[a++]&63;65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else d+=String.fromCharCode(f)}a=d}}else a="";return a}
function D(a,b,c,d){if(!(0<d))return 0;var f=c;d=c+d-1;for(var k=0;k<a.length;++k){var h=a.charCodeAt(k);if(55296<=h&&57343>=h){var m=a.charCodeAt(++k);h=65536+((h&1023)<<10)|m&1023}if(127>=h){if(c>=d)break;b[c++]=h}else{if(2047>=h){if(c+1>=d)break;b[c++]=192|h>>6}else{if(65535>=h){if(c+2>=d)break;b[c++]=224|h>>12}else{if(c+3>=d)break;b[c++]=240|h>>18;b[c++]=128|h>>12&63}b[c++]=128|h>>6&63}b[c++]=128|h&63}}b[c]=0;return c-f}
function ka(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);127>=d?b++:2047>=d?b+=2:55296<=d&&57343>=d?(b+=4,++c):b+=3}return b}var la,C,E,ma,F,na,oa,G;function pa(){var a=A.buffer;e.HEAP8=la=new Int8Array(a);e.HEAP16=E=new Int16Array(a);e.HEAP32=F=new Int32Array(a);e.HEAPU8=C=new Uint8Array(a);e.HEAPU16=ma=new Uint16Array(a);e.HEAPU32=na=new Uint32Array(a);e.HEAPF32=oa=new Float32Array(a);e.HEAPF64=G=new Float64Array(a)}var qa,ra=[],sa=[],ta=[],ua=[],va=[];
function wa(){var a=e.preRun.shift();ra.unshift(a)}var H=0,xa=null,I=null;function z(a){if(e.onAbort)e.onAbort(a);a="Aborted("+a+")";x(a);ia=!0;throw new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");}function ya(){return J.startsWith("data:application/octet-stream;base64,")}var J;J="debugtext-sapp.wasm";if(!ya()){var za=J;J=e.locateFile?e.locateFile(za,p):p+za}
function Aa(){var a=J;try{if(a==J&&y)return new Uint8Array(y);if(v)return v(a);throw"both async and sync fetching of the wasm failed";}catch(b){z(b)}}
function Ba(){if(!y&&(da||l)){if("function"==typeof fetch&&!J.startsWith("file://"))return fetch(J,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+J+"'";return a.arrayBuffer()}).catch(function(){return Aa()});if(r)return new Promise(function(a,b){r(J,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Aa()})}function w(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}
function L(a){for(;0<a.length;)a.shift()(e)}function Ca(a){var b=Da();a();Ea(b)}var Fa=0;function Ga(){for(var a=M.length-1;0<=a;--a)Ha(a);M=[];N=[]}var N=[];function Ia(){if(Fa&&Ja.Qb)for(var a=0;a<N.length;++a){var b=N[a];N.splice(a,1);--a;b.Cc.apply(null,b.rc)}}var M=[];function Ha(a){var b=M[a];b.target.removeEventListener(b.Ib,b.nc,b.Jb);M.splice(a,1)}
function O(a){function b(d){++Fa;Ja=a;Ia();a.Lb(d);Ia();--Fa}if(a.Kb)a.nc=b,a.target.addEventListener(a.Ib,b,a.Jb),M.push(a),Ka||(ua.push(Ga),Ka=!0);else for(var c=0;c<M.length;++c)M[c].target==a.target&&M[c].Ib==a.Ib&&Ha(c--)}function La(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}var Ka,Ja,Ma,Na,Oa,Pa,Qa,Ra,Sa,Ta=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0];
function Q(a){a=2<a?B(a):a;return Ta[a]||("undefined"!=typeof document?document.querySelector(a):void 0)}function Ua(a){return 0>Ta.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}var Va=[];function R(a){var b=Va[a];b||(a>=Va.length&&(Va.length=a+1),Va[a]=b=qa.get(a));return b}function Wa(a,b,c,d,f,k){Ma||(Ma=S(256));a={target:Q(a),Ib:k,Kb:d,Lb:function(h=event){var m=h.target.id?h.target.id:"",n=Ma;D(La(h.target),C,n+0,128);D(m,C,n+128,128);R(d)(f,n,b)&&h.preventDefault()},Jb:c};O(a)}
function Xa(a,b,c,d,f,k){Na||(Na=S(176));a={target:Q(a),Qb:!0,Ib:k,Kb:d,Lb:function(h){var m=Na;G[m>>3]=h.timeStamp;var n=m>>2;F[n+2]=h.location;F[n+3]=h.ctrlKey;F[n+4]=h.shiftKey;F[n+5]=h.altKey;F[n+6]=h.metaKey;F[n+7]=h.repeat;F[n+8]=h.charCode;F[n+9]=h.keyCode;F[n+10]=h.which;D(h.key||"",C,m+44,32);D(h.code||"",C,m+76,32);D(h.char||"",C,m+108,32);D(h.locale||"",C,m+140,32);R(d)(f,m,b)&&h.preventDefault()},Jb:c};O(a)}
function Ya(a,b,c){G[a>>3]=b.timeStamp;a>>=2;F[a+2]=b.screenX;F[a+3]=b.screenY;F[a+4]=b.clientX;F[a+5]=b.clientY;F[a+6]=b.ctrlKey;F[a+7]=b.shiftKey;F[a+8]=b.altKey;F[a+9]=b.metaKey;E[2*a+20]=b.button;E[2*a+21]=b.buttons;F[a+11]=b.movementX;F[a+12]=b.movementY;c=Ua(c);F[a+13]=b.clientX-c.left;F[a+14]=b.clientY-c.top}
function T(a,b,c,d,f,k){Oa||(Oa=S(72));a=Q(a);O({target:a,Qb:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,Ib:k,Kb:d,Lb:function(h=event){Ya(Oa,h,a);R(d)(f,Oa,b)&&h.preventDefault()},Jb:c})}function Za(a,b,c,d,f){Pa||(Pa=S(260));O({target:a,Ib:f,Kb:d,Lb:function(k=event){var h=Pa,m=document.pointerLockElement||document.Nb||document.Xb||document.Wb;F[h>>2]=!!m;var n=m&&m.id?m.id:"";D(La(m),C,h+4,128);D(n,C,h+132,128);R(d)(20,h,b)&&k.preventDefault()},Jb:c})}
function $a(a,b,c,d,f){O({target:a,Ib:f,Kb:d,Lb:function(k=event){R(d)(38,0,b)&&k.preventDefault()},Jb:c})}function ab(a,b,c,d){Qa||(Qa=S(36));a=Q(a);O({target:a,Ib:"resize",Kb:d,Lb:function(f=event){if(f.target==a){var k=document.body;if(k){var h=Qa;F[h>>2]=f.detail;F[h+4>>2]=k.clientWidth;F[h+8>>2]=k.clientHeight;F[h+12>>2]=innerWidth;F[h+16>>2]=innerHeight;F[h+20>>2]=outerWidth;F[h+24>>2]=outerHeight;F[h+28>>2]=pageXOffset;F[h+32>>2]=pageYOffset;R(d)(10,h,b)&&f.preventDefault()}}},Jb:c})}
function bb(a,b,c,d,f,k){Ra||(Ra=S(1696));a=Q(a);O({target:a,Qb:"touchstart"==k||"touchend"==k,Ib:k,Kb:d,Lb:function(h){for(var m,n={},q=h.touches,u=0;u<q.length;++u)m=q[u],m.ac=m.cc=0,n[m.identifier]=m;for(u=0;u<h.changedTouches.length;++u)m=h.changedTouches[u],m.ac=1,n[m.identifier]=m;for(u=0;u<h.targetTouches.length;++u)n[h.targetTouches[u].identifier].cc=1;q=Ra;G[q>>3]=h.timeStamp;var t=q>>2;F[t+3]=h.ctrlKey;F[t+4]=h.shiftKey;F[t+5]=h.altKey;F[t+6]=h.metaKey;t+=7;var K=Ua(a),P=0;for(u in n)if(m=
n[u],F[t]=m.identifier,F[t+1]=m.screenX,F[t+2]=m.screenY,F[t+3]=m.clientX,F[t+4]=m.clientY,F[t+5]=m.pageX,F[t+6]=m.pageY,F[t+7]=m.ac,F[t+8]=m.cc,F[t+9]=m.clientX-K.left,F[t+10]=m.clientY-K.top,t+=13,31<++P)break;F[q+8>>2]=P;R(d)(f,q,b)&&h.preventDefault()},Jb:c})}function cb(a,b,c,d,f,k){a={target:Q(a),Ib:k,Kb:d,Lb:function(h=event){R(d)(f,0,b)&&h.preventDefault()},Jb:c};O(a)}
function db(a,b,c,d){Sa||(Sa=S(104));O({target:a,Qb:!0,Ib:"wheel",Kb:d,Lb:function(f=event){var k=Sa;Ya(k,f,a);G[k+72>>3]=f.deltaX;G[k+80>>3]=f.deltaY;G[k+88>>3]=f.deltaZ;F[k+96>>2]=f.deltaMode;R(d)(9,k,b)&&f.preventDefault()},Jb:c})}
function eb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,f,k){b.drawArraysInstancedANGLE(c,d,f,k)},a.drawElementsInstanced=function(c,d,f,k,h){b.drawElementsInstancedANGLE(c,d,f,k,h)})}
function fb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function gb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function hb(a){a.tc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function ib(a){a.vc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function jb(a){a.xc=a.getExtension("WEBGL_multi_draw")}var kb=1,lb=[],U=[],mb=[],nb=[],ob=[],V=[],pb=[],qb=[],rb={},sb={},tb=4;function W(a){ub||(ub=a)}function vb(a){for(var b=kb++,c=a.length;c<b;c++)a[c]=null;return b}
function wb(a,b){a.Nb||(a.Nb=a.getContext,a.getContext=function(d,f){f=a.Nb(d,f);return"webgl"==d==f instanceof WebGLRenderingContext?f:null});var c=1<b.bc?a.getContext("webgl2",b):a.getContext("webgl",b);return c?xb(c,b):0}function xb(a,b){var c=vb(qb),d={uc:c,attributes:b,version:b.bc,Ub:a};a.canvas&&(a.canvas.qc=d);qb[c]=d;("undefined"==typeof b.$b||b.$b)&&yb(d);return c}
function yb(a){a||(a=X);if(!a.pc){a.pc=!0;var b=a.Ub;eb(b);fb(b);gb(b);hb(b);ib(b);2<=a.version&&(b.Zb=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.Zb)b.Zb=b.getExtension("EXT_disjoint_timer_query");jb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var ub,X,zb=["default","low-power","high-performance"];
function Ab(a,b,c,d){for(var f=0;f<a;f++){var k=Y[c](),h=k&&vb(d);k?(k.name=h,d[h]=k):W(1282);F[b+4*f>>2]=h}}
function Bb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=Y.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>X.version){W(1282);return}c=2*(Y.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>X.version){W(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=Y.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":W(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:W(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)F[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(f){W(1280);x("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+f+")");return}}break;default:W(1280);x("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}F[b>>2]=c}else W(1281)}
function Z(a){var b=ka(a)+1,c=S(b);D(a,C,c,b);return c}function Cb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function Db(a){a-=5120;return 0==a?la:1==a?C:2==a?E:4==a?F:6==a?oa:5==a||28922==a||28520==a||30779==a||30782==a?na:ma}function Eb(a){if(!noExitRuntime){if(e.onExit)e.onExit(a);ia=!0}g(a,new w(a))}function Fb(a){var b=ka(a)+1,c=Gb(b);D(a,la,c,b);return c}
var Y,Nb={j:function(){z("")},P:function(){return"number"==typeof devicePixelRatio&&devicePixelRatio||1},T:function(a,b,c){a=Q(a);if(!a)return-4;a=Ua(a);G[b>>3]=a.width;G[c>>3]=a.height;return 0},_a:function(a,b,c){C.copyWithin(a,b,b+c)},Fa:function(a,b){function c(d){R(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},Za:function(a){var b=C.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);var f=Math,k=f.min;d=Math.max(a,d);
d+=(65536-d%65536)%65536;a:{var h=A.buffer;try{A.grow(k.call(f,2147483648,d)-h.byteLength+65535>>>16);pa();var m=1;break a}catch(n){}m=void 0}if(m)return!0}return!1},U:function(a,b,c,d){Wa(a,b,c,d,12,"blur");return 0},M:function(a,b,c){a=Q(a);if(!a)return-4;a.width=b;a.height=c;return 0},V:function(a,b,c,d){Wa(a,b,c,d,13,"focus");return 0},ca:function(a,b,c,d){Xa(a,b,c,d,2,"keydown");return 0},aa:function(a,b,c,d){Xa(a,b,c,d,1,"keypress");return 0},ba:function(a,b,c,d){Xa(a,b,c,d,3,"keyup");return 0},
ia:function(a,b,c,d){T(a,b,c,d,5,"mousedown");return 0},fa:function(a,b,c,d){T(a,b,c,d,33,"mouseenter");return 0},ea:function(a,b,c,d){T(a,b,c,d,34,"mouseleave");return 0},ga:function(a,b,c,d){T(a,b,c,d,8,"mousemove");return 0},ha:function(a,b,c,d){T(a,b,c,d,6,"mouseup");return 0},X:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.Nb||document.body.Xb||document.body.Wb))return-1;a=Q(a);if(!a)return-4;Za(a,b,c,d,"pointerlockchange");Za(a,b,c,d,"mozpointerlockchange");
Za(a,b,c,d,"webkitpointerlockchange");Za(a,b,c,d,"mspointerlockchange");return 0},W:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.Nb||document.body.Xb||document.body.Wb))return-1;a=Q(a);if(!a)return-4;$a(a,b,c,d,"pointerlockerror");$a(a,b,c,d,"mozpointerlockerror");$a(a,b,c,d,"webkitpointerlockerror");$a(a,b,c,d,"mspointerlockerror");return 0},Sa:function(a,b,c,d){ab(a,b,c,d);return 0},Y:function(a,b,c,d){bb(a,b,c,d,25,"touchcancel");return 0},Z:function(a,b,c,
d){bb(a,b,c,d,23,"touchend");return 0},_:function(a,b,c,d){bb(a,b,c,d,24,"touchmove");return 0},$:function(a,b,c,d){bb(a,b,c,d,22,"touchstart");return 0},S:function(a,b,c,d){cb(a,b,c,d,31,"webglcontextlost");return 0},R:function(a,b,c,d){cb(a,b,c,d,32,"webglcontextrestored");return 0},da:function(a,b,c,d){a=Q(a);return"undefined"!=typeof a.onwheel?(db(a,b,c,d),0):-1},D:function(a,b){b>>=2;b={alpha:!!F[b],depth:!!F[b+1],stencil:!!F[b+2],antialias:!!F[b+3],premultipliedAlpha:!!F[b+4],preserveDrawingBuffer:!!F[b+
5],powerPreference:zb[F[b+6]],failIfMajorPerformanceCaveat:!!F[b+7],bc:F[b+8],wc:F[b+9],$b:F[b+10],oc:F[b+11],yc:F[b+12],zc:F[b+13]};a=Q(a);return!a||b.oc?0:wb(a,b)},gb:function(a,b){a=qb[a];b=B(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&eb(Y);"OES_vertex_array_object"==b&&fb(Y);"WEBGL_draw_buffers"==b&&gb(Y);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&hb(Y);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&ib(Y);"WEBGL_multi_draw"==b&&jb(Y);return!!a.Ub.getExtension(b)},
za:function(a){a>>=2;for(var b=0;14>b;++b)F[a+b]=0;F[a]=F[a+1]=F[a+3]=F[a+4]=F[a+8]=F[a+10]=1},nb:function(a){X=qb[a];e.sc=Y=X&&X.Ub;return!a||Y?0:-5},g:function(a){Y.activeTexture(a)},E:function(a,b){Y.attachShader(U[a],V[b])},b:function(a,b){35051==a?Y.Yb=b:35052==a&&(Y.Mb=b);Y.bindBuffer(a,lb[b])},h:function(a,b){Y.bindFramebuffer(a,mb[b])},Ba:function(a,b){Y.bindRenderbuffer(a,nb[b])},a:function(a,b){Y.bindTexture(a,ob[b])},O:function(a){Y.bindVertexArray(pb[a])},J:function(a,b,c,d){Y.blendColor(a,
b,c,d)},K:function(a,b){Y.blendEquationSeparate(a,b)},L:function(a,b,c,d){Y.blendFuncSeparate(a,b,c,d)},r:function(a,b,c,d,f,k,h,m,n,q){Y.blitFramebuffer(a,b,c,d,f,k,h,m,n,q)},Da:function(a,b,c,d){2<=X.version?c&&b?Y.bufferData(a,C,d,c,b):Y.bufferData(a,b,d):Y.bufferData(a,c?C.subarray(c,c+b):b,d)},n:function(a,b,c,d){2<=X.version?c&&Y.bufferSubData(a,b,C,d,c):Y.bufferSubData(a,b,C.subarray(d,d+c))},hb:function(a){Y.clear(a)},la:function(a,b,c,d){Y.clearColor(a,b,c,d)},z:function(a){Y.clearDepth(a)},
ib:function(a){Y.clearStencil(a)},k:function(a,b,c,d){Y.colorMask(!!a,!!b,!!c,!!d)},na:function(a){Y.compileShader(V[a])},wa:function(a,b,c,d,f,k,h,m){2<=X.version?Y.Mb||!h?Y.compressedTexImage2D(a,b,c,d,f,k,h,m):Y.compressedTexImage2D(a,b,c,d,f,k,C,m,h):Y.compressedTexImage2D(a,b,c,d,f,k,m?C.subarray(m,m+h):null)},ua:function(a,b,c,d,f,k,h,m,n){Y.Mb?Y.compressedTexImage3D(a,b,c,d,f,k,h,m,n):Y.compressedTexImage3D(a,b,c,d,f,k,h,C,n,m)},sa:function(){var a=vb(U),b=Y.createProgram();b.name=a;b.Tb=b.Rb=
b.Sb=0;b.Vb=1;U[a]=b;return a},pa:function(a){var b=vb(V);V[b]=Y.createShader(a);return b},G:function(a){Y.cullFace(a)},Ma:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],f=lb[d];f&&(Y.deleteBuffer(f),f.name=0,lb[d]=null,d==Y.Yb&&(Y.Yb=0),d==Y.Mb&&(Y.Mb=0))}},i:function(a,b){for(var c=0;c<a;++c){var d=F[b+4*c>>2],f=mb[d];f&&(Y.deleteFramebuffer(f),f.name=0,mb[d]=null)}},x:function(a){if(a){var b=U[a];b?(Y.deleteProgram(b),b.name=0,U[a]=null):W(1281)}},Q:function(a,b){for(var c=0;c<a;c++){var d=
F[b+4*c>>2],f=nb[d];f&&(Y.deleteRenderbuffer(f),f.name=0,nb[d]=null)}},t:function(a){if(a){var b=V[a];b?(Y.deleteShader(b),V[a]=null):W(1281)}},La:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],f=ob[d];f&&(Y.deleteTexture(f),f.name=0,ob[d]=null)}},Ka:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2];Y.deleteVertexArray(pb[d]);pb[d]=null}},w:function(a){Y.depthFunc(a)},v:function(a){Y.depthMask(!!a)},d:function(a){Y.disable(a)},N:function(a){Y.disableVertexAttribArray(a)},$a:function(a,b,
c){Y.drawArrays(a,b,c)},ab:function(a,b,c,d){Y.drawArraysInstanced(a,b,c,d)},bb:function(a,b,c,d){Y.drawElements(a,b,c,d)},cb:function(a,b,c,d,f){Y.drawElementsInstanced(a,b,c,d,f)},f:function(a){Y.enable(a)},db:function(a){Y.enableVertexAttribArray(a)},H:function(a){Y.frontFace(a)},Ea:function(a,b){Ab(a,b,"createBuffer",lb)},Ca:function(a,b){Ab(a,b,"createRenderbuffer",nb)},xa:function(a,b){Ab(a,b,"createTexture",ob)},Ja:function(a,b){Ab(a,b,"createVertexArray",pb)},lb:function(a,b){return Y.getAttribLocation(U[a],
B(b))},c:function(a,b){Bb(a,b)},qa:function(a,b,c,d){a=Y.getProgramInfoLog(U[a]);null===a&&(a="(unknown error)");b=0<b&&d?D(a,C,d,b):0;c&&(F[c>>2]=b)},C:function(a,b,c){if(c)if(a>=kb)W(1281);else if(a=U[a],35716==b)a=Y.getProgramInfoLog(a),null===a&&(a="(unknown error)"),F[c>>2]=a.length+1;else if(35719==b){if(!a.Tb)for(b=0;b<Y.getProgramParameter(a,35718);++b)a.Tb=Math.max(a.Tb,Y.getActiveUniform(a,b).name.length+1);F[c>>2]=a.Tb}else if(35722==b){if(!a.Rb)for(b=0;b<Y.getProgramParameter(a,35721);++b)a.Rb=
Math.max(a.Rb,Y.getActiveAttrib(a,b).name.length+1);F[c>>2]=a.Rb}else if(35381==b){if(!a.Sb)for(b=0;b<Y.getProgramParameter(a,35382);++b)a.Sb=Math.max(a.Sb,Y.getActiveUniformBlockName(a,b).length+1);F[c>>2]=a.Sb}else F[c>>2]=Y.getProgramParameter(a,b);else W(1281)},mb:function(a,b,c,d){a=Y.getShaderInfoLog(V[a]);null===a&&(a="(unknown error)");b=0<b&&d?D(a,C,d,b):0;c&&(F[c>>2]=b)},A:function(a,b,c){c?35716==b?(a=Y.getShaderInfoLog(V[a]),null===a&&(a="(unknown error)"),F[c>>2]=a?a.length+1:0):35720==
b?(a=Y.getShaderSource(V[a]),F[c>>2]=a?a.length+1:0):F[c>>2]=Y.getShaderParameter(V[a],b):W(1281)},Oa:function(a){var b=rb[a];if(!b){switch(a){case 7939:b=Y.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Z(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Y.getParameter(a))||W(1280);b=b&&Z(b);break;case 7938:b=Y.getParameter(7938);b=2<=X.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Z(b);break;case 35724:b=Y.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);
null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Z(b);break;default:W(1280)}rb[a]=b}return b},Na:function(a,b){if(2>X.version)return W(1282),0;var c=sb[a];if(c)return 0>b||b>=c.length?(W(1281),0):c[b];switch(a){case 7939:return c=Y.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return Z(d)}),c=sb[a]=c,0>b||b>=c.length?(W(1281),0):c[b];default:return W(1280),0}},m:function(a,b){b=B(b);if(a=U[a]){var c=a,d=c.Pb,f=c.lc,k;
if(!d)for(c.Pb=d={},c.kc={},k=0;k<Y.getProgramParameter(c,35718);++k){var h=Y.getActiveUniform(c,k);var m=h.name;h=h.size;var n=Cb(m);n=0<n?m.slice(0,n):m;var q=c.Vb;c.Vb+=h;f[n]=[h,q];for(m=0;m<h;++m)d[q]=m,c.kc[q++]=n}c=a.Pb;d=0;f=b;k=Cb(b);0<k&&(d=parseInt(b.slice(k+1))>>>0,f=b.slice(0,k));if((f=a.lc[f])&&d<f[0]&&(d+=f[1],c[d]=c[d]||Y.getUniformLocation(a,b)))return d}else W(1281);return-1},ra:function(a){a=U[a];Y.linkProgram(a);a.Pb=0;a.lc={}},Ia:function(a,b){3317==a&&(tb=b);Y.pixelStorei(a,
b)},I:function(a,b){Y.polygonOffset(a,b)},s:function(a){Y.readBuffer(a)},ya:function(a,b,c,d){Y.renderbufferStorage(a,b,c,d)},Aa:function(a,b,c,d,f){Y.renderbufferStorageMultisample(a,b,c,d,f)},jb:function(a,b,c,d){Y.scissor(a,b,c,d)},oa:function(a,b,c,d){for(var f="",k=0;k<b;++k){var h=d?F[d+4*k>>2]:-1;f+=B(F[c+4*k>>2],0>h?void 0:h)}Y.shaderSource(V[a],f)},Ha:function(a,b,c){Y.stencilFunc(a,b,c)},ka:function(a,b,c,d){Y.stencilFuncSeparate(a,b,c,d)},u:function(a){Y.stencilMask(a)},Ga:function(a,b,
c){Y.stencilOp(a,b,c)},ja:function(a,b,c,d){Y.stencilOpSeparate(a,b,c,d)},va:function(a,b,c,d,f,k,h,m,n){if(2<=X.version)if(Y.Mb)Y.texImage2D(a,b,c,d,f,k,h,m,n);else if(n){var q=Db(m);Y.texImage2D(a,b,c,d,f,k,h,m,q,n>>31-Math.clz32(q.BYTES_PER_ELEMENT))}else Y.texImage2D(a,b,c,d,f,k,h,m,null);else{q=Y;var u=q.texImage2D;if(n){var t=Db(m),K=31-Math.clz32(t.BYTES_PER_ELEMENT),P=tb;n=t.subarray(n>>K,n+f*(d*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[h-6402]||1)*(1<<K)+P-1&-P)>>K)}else n=
null;u.call(q,a,b,c,d,f,k,h,m,n)}},ta:function(a,b,c,d,f,k,h,m,n,q){if(Y.Mb)Y.texImage3D(a,b,c,d,f,k,h,m,n,q);else if(q){var u=Db(n);Y.texImage3D(a,b,c,d,f,k,h,m,n,u,q>>31-Math.clz32(u.BYTES_PER_ELEMENT))}else Y.texImage3D(a,b,c,d,f,k,h,m,n,null)},F:function(a,b,c){Y.texParameterf(a,b,c)},e:function(a,b,c){Y.texParameteri(a,b,c)},B:function(a,b){var c=Y,d=c.uniform1i;var f=Y.mc;if(f){var k=f.Pb[a];"number"==typeof k&&(f.Pb[a]=k=Y.getUniformLocation(f,f.kc[a]+(0<k?"["+k+"]":"")));a=k}else W(1282),
a=void 0;d.call(c,a,b)},l:function(a){a=U[a];Y.useProgram(a);Y.mc=a},eb:function(a,b){Y.vertexAttribDivisor(a,b)},fb:function(a,b,c,d,f,k){Y.vertexAttribPointer(a,b,c,!!d,f,k)},kb:function(a,b,c,d){Y.viewport(a,b,c,d)},Xa:function(){e.dc=a=>{0!=Hb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",e.dc)},Wa:function(){e.jc=a=>{const b=a.clipboardData.getData("text");Ca(()=>{const c=Fb(b);Ib(c)})};window.addEventListener("paste",e.jc)},Va:function(a){e.Ac=[];a=B(a);a=
document.getElementById(a);e.ec=b=>{b.stopPropagation();b.preventDefault()};e.fc=b=>{b.stopPropagation();b.preventDefault()};e.hc=b=>{b.stopPropagation();b.preventDefault()};e.ic=b=>{b.stopPropagation();b.preventDefault();const c=b.dataTransfer.files;e.Bc=c;Jb(c.length);for(let d=0;d<c.length;d++)Ca(()=>{const f=Fb(c[d].name);Kb(d,f)});Lb(b.clientX,b.clientY)};a.addEventListener("dragenter",e.ec,!1);a.addEventListener("dragleave",e.fc,!1);a.addEventListener("dragover",e.hc,!1);a.addEventListener("drop",
e.ic,!1)},Qa:function(){const a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},q:function(){const a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Mb()});document.body.append(a)},p:function(){document.getElementById("_sokol_app_input_element").focus()},Ya:function(a){a=B(a);e.Ob=document.getElementById(a);e.Ob||console.log("sokol_app.h: invalid target:"+a);e.Ob.requestPointerLock||
console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Ua:function(){window.removeEventListener("beforeunload",e.dc)},Ta:function(){window.removeEventListener("paste",e.jc)},Ra:function(a){a=B(a);a=document.getElementById(a);a.removeEventListener("dragenter",e.ec);a.removeEventListener("dragleave",e.fc);a.removeEventListener("dragover",e.hc);a.removeEventListener("drop",e.ic)},y:function(){e.Ob&&e.Ob.requestPointerLock&&e.Ob.requestPointerLock()},Pa:function(a,b,c){const d=document.createElement("canvas");
d.width=a;d.height=b;const f=d.getContext("2d"),k=f.createImageData(a,b);k.data.set(C.subarray(c,c+a*b*4));f.putImageData(k,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},o:function(){document.getElementById("_sokol_app_input_element").blur()},ma:function(a,b){b=B(b);switch(a){case 0:console.error(b);break;case 1:console.error(b);break;case 2:console.warn(b);break;default:console.info(b)}}};
(function(){function a(f){e.asm=f.exports;A=e.asm.ob;pa();qa=e.asm.Eb;sa.unshift(e.asm.pb);H--;e.monitorRunDependencies&&e.monitorRunDependencies(H);0==H&&(null!==xa&&(clearInterval(xa),xa=null),I&&(f=I,I=null,f()))}function b(f){a(f.instance)}function c(f){return Ba().then(function(k){return WebAssembly.instantiate(k,d)}).then(function(k){return k}).then(f,function(k){x("failed to asynchronously prepare wasm: "+k);z(k)})}var d={a:Nb};H++;e.monitorRunDependencies&&e.monitorRunDependencies(H);if(e.instantiateWasm)try{return e.instantiateWasm(d,
a)}catch(f){return x("Module.instantiateWasm callback failed with error: "+f),!1}(function(){return y||"function"!=typeof WebAssembly.instantiateStreaming||ya()||J.startsWith("file://")||ea||"function"!=typeof fetch?c(b):fetch(J,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,d).then(b,function(k){x("wasm streaming compile failed: "+k);x("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
function S(){return(S=e.asm.qb).apply(null,arguments)}
var Mb=e.__sapp_emsc_notify_keyboard_hidden=function(){return(Mb=e.__sapp_emsc_notify_keyboard_hidden=e.asm.rb).apply(null,arguments)},Ib=e.__sapp_emsc_onpaste=function(){return(Ib=e.__sapp_emsc_onpaste=e.asm.sb).apply(null,arguments)},Hb=e.__sapp_html5_get_ask_leave_site=function(){return(Hb=e.__sapp_html5_get_ask_leave_site=e.asm.tb).apply(null,arguments)},Jb=e.__sapp_emsc_begin_drop=function(){return(Jb=e.__sapp_emsc_begin_drop=e.asm.ub).apply(null,arguments)},Kb=e.__sapp_emsc_drop=function(){return(Kb=
e.__sapp_emsc_drop=e.asm.vb).apply(null,arguments)},Lb=e.__sapp_emsc_end_drop=function(){return(Lb=e.__sapp_emsc_end_drop=e.asm.wb).apply(null,arguments)};e.__sapp_emsc_invoke_fetch_cb=function(){return(e.__sapp_emsc_invoke_fetch_cb=e.asm.xb).apply(null,arguments)};var Ob=e._main=function(){return(Ob=e._main=e.asm.yb).apply(null,arguments)};e.__saudio_emsc_pull=function(){return(e.__saudio_emsc_pull=e.asm.zb).apply(null,arguments)};
e.__sfetch_emsc_head_response=function(){return(e.__sfetch_emsc_head_response=e.asm.Ab).apply(null,arguments)};e.__sfetch_emsc_get_response=function(){return(e.__sfetch_emsc_get_response=e.asm.Bb).apply(null,arguments)};e.__sfetch_emsc_failed_http_status=function(){return(e.__sfetch_emsc_failed_http_status=e.asm.Cb).apply(null,arguments)};e.__sfetch_emsc_failed_buffer_too_small=function(){return(e.__sfetch_emsc_failed_buffer_too_small=e.asm.Db).apply(null,arguments)};
function Da(){return(Da=e.asm.Fb).apply(null,arguments)}function Ea(){return(Ea=e.asm.Gb).apply(null,arguments)}function Gb(){return(Gb=e.asm.Hb).apply(null,arguments)}e.___start_em_js=17088;e.___stop_em_js=26607;var Pb;I=function Qb(){Pb||Rb();Pb||(I=Qb)};function Sb(a=[]){var b=Ob;a.unshift(ca);var c=a.length,d=Gb(4*(c+1)),f=d>>2;a.forEach(h=>{F[f++]=Fb(h)});F[f]=0;try{var k=b(c,d);Eb(k)}catch(h){h instanceof w||"unwind"==h||g(1,h)}}
function Rb(){var a=ba;function b(){if(!Pb&&(Pb=!0,e.calledRun=!0,!ia)){L(sa);L(ta);if(e.onRuntimeInitialized)e.onRuntimeInitialized();Tb&&Sb(a);if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;){var c=e.postRun.shift();va.unshift(c)}L(va)}}if(!(0<H)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)wa();L(ra);0<H||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);b()},1)):
b())}}if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();var Tb=!0;e.noInitialRun&&(Tb=!1);Rb();
