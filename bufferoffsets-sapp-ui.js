
var f;f||(f=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign,ba=aa({},f),ca=[],da="./this.program",h=(a,b)=>{throw b;},ea="object"===typeof window,l="function"===typeof importScripts,q="",fa,t,u,fs,v,ha;
if("object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)q=l?require("path").dirname(q)+"/":__dirname+"/",ha=function(){v||(fs=require("fs"),v=require("path"))},fa=function(a,b){ha();a=v.normalize(a);return fs.readFileSync(a,b?null:"utf8")},u=function(a){a=fa(a,!0);a.buffer||(a=new Uint8Array(a));return a},t=function(a,b,c){ha();a=v.normalize(a);fs.readFile(a,function(d,e){d?c(d):b(e.buffer)})},1<process.argv.length&&(da=process.argv[1].replace(/\\/g,
"/")),ca=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=f),process.on("uncaughtException",function(a){if(!(a instanceof ia))throw a;}),process.on("unhandledRejection",function(a){throw a;}),h=(a,b)=>{if(noExitRuntime||0<ja)throw process.exitCode=a,b;b instanceof ia||x("exiting due to exception: "+b);process.exit(a)},f.inspect=function(){return"[Emscripten Module object]"};else if(ea||l)l?q=self.location.href:"undefined"!==typeof document&&document.currentScript&&(q=document.currentScript.src),
q=0!==q.indexOf("blob:")?q.substr(0,q.replace(/[?#].*/,"").lastIndexOf("/")+1):"",fa=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},l&&(u=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),t=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};
var ka=f.print||console.log.bind(console),x=f.printErr||console.warn.bind(console);aa(f,ba);ba=null;f.arguments&&(ca=f.arguments);f.thisProgram&&(da=f.thisProgram);f.quit&&(h=f.quit);var y;f.wasmBinary&&(y=f.wasmBinary);var noExitRuntime=f.noExitRuntime||!0;"object"!==typeof WebAssembly&&la("no native wasm support detected");var ma,na=!1;
function oa(a,b,c){var d={string:function(n){var p=0;if(null!==n&&void 0!==n&&0!==n){var r=(n.length<<2)+1;p=z(r);A(n,B,p,r)}return p},array:function(n){var p=z(n.length);pa.set(n,p);return p}};a=f["_"+a];var e=[],k=0;if(c)for(var g=0;g<c.length;g++){var m=d[b[g]];m?(0===k&&(k=qa()),e[g]=m(c[g])):e[g]=c[g]}b=a.apply(null,e);b=function(n){0!==k&&ra(k);return n}(b)}var sa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function ta(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&sa)return sa.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var k=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|k);else{var g=a[b++]&63;e=224==(e&240)?(e&15)<<12|k<<6|g:(e&7)<<18|k<<12|g<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function C(a,b){return a?ta(B,a,b):""}
function A(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var k=0;k<a.length;++k){var g=a.charCodeAt(k);if(55296<=g&&57343>=g){var m=a.charCodeAt(++k);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-e}
function ua(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function va(a){var b=ua(a)+1,c=z(b);A(a,pa,c,b);return c}var wa,pa,B,xa,ya,D,za,E,F;
function Aa(){var a=ma.buffer;wa=a;f.HEAP8=pa=new Int8Array(a);f.HEAP16=xa=new Int16Array(a);f.HEAP32=D=new Int32Array(a);f.HEAPU8=B=new Uint8Array(a);f.HEAPU16=ya=new Uint16Array(a);f.HEAPU32=za=new Uint32Array(a);f.HEAPF32=E=new Float32Array(a);f.HEAPF64=F=new Float64Array(a)}var Ba,Ca=[],Da=[],Ea=[],Fa=[],Ga=[],ja=0;function Ha(){var a=f.preRun.shift();Ca.unshift(a)}var G=0,Ia=null,H=null;f.preloadedImages={};f.preloadedAudios={};
function la(a){if(f.onAbort)f.onAbort(a);a="Aborted("+a+")";x(a);na=!0;throw new WebAssembly.RuntimeError(a+". Build with -s ASSERTIONS=1 for more info.");}function Ja(){return I.startsWith("data:application/octet-stream;base64,")}var I;I="bufferoffsets-sapp-ui.wasm";if(!Ja()){var Ka=I;I=f.locateFile?f.locateFile(Ka,q):q+Ka}function La(){var a=I;try{if(a==I&&y)return new Uint8Array(y);if(u)return u(a);throw"both async and sync fetching of the wasm failed";}catch(b){la(b)}}
function Ma(){if(!y&&(ea||l)){if("function"===typeof fetch&&!I.startsWith("file://"))return fetch(I,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+I+"'";return a.arrayBuffer()}).catch(function(){return La()});if(t)return new Promise(function(a,b){t(I,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return La()})}
function Na(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(f);else{var c=b.Mc;"number"===typeof c?void 0===b.jc?J(c)():J(c)(b.jc):c(void 0===b.jc?null:b.jc)}}}var Oa=[];function J(a){var b=Oa[a];b||(a>=Oa.length&&(Oa.length=a+1),Oa[a]=b=Ba.get(a));return b}var Pa=[null,[],[]],Qa={},Ra=0;function Sa(){for(var a=K.length-1;0<=a;--a)Ta(a);K=[];Ua=[]}var Ua=[];function Va(){if(Ra&&Wa.dc)for(var a=0;a<Ua.length;++a){var b=Ua[a];Ua.splice(a,1);--a;b.Wc.apply(null,b.Ic)}}var K=[];
function Ta(a){var b=K[a];b.target.removeEventListener(b.Xb,b.Ec,b.Yb);K.splice(a,1)}function L(a){function b(d){++Ra;Wa=a;Va();a.$b(d);Va();--Ra}if(a.Zb)a.Ec=b,a.target.addEventListener(a.Xb,b,a.Yb),K.push(a),Xa||(Fa.push(Sa),Xa=!0);else for(var c=0;c<K.length;++c)K[c].target==a.target&&K[c].Xb==a.Xb&&Ta(c--)}function Ya(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}
var Xa,Wa,Za,$a,ab,bb,cb,db,eb,fb=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function M(a){a=2<a?C(a):a;return fb[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}function gb(a){return 0>fb.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}
function hb(a,b,c,d,e,k){Za||(Za=O(256));a={target:M(a),Xb:k,Zb:d,$b:function(g){g=g||event;var m=g.target.id?g.target.id:"",n=Za;A(Ya(g.target),B,n+0,128);A(m,B,n+128,128);J(d)(e,n,b)&&g.preventDefault()},Yb:c};L(a)}
function ib(a,b,c,d,e,k){$a||($a=O(176));a={target:M(a),dc:!0,Xb:k,Zb:d,$b:function(g){var m=$a;F[m>>3]=g.timeStamp;var n=m>>2;D[n+2]=g.location;D[n+3]=g.ctrlKey;D[n+4]=g.shiftKey;D[n+5]=g.altKey;D[n+6]=g.metaKey;D[n+7]=g.repeat;D[n+8]=g.charCode;D[n+9]=g.keyCode;D[n+10]=g.which;A(g.key||"",B,m+44,32);A(g.code||"",B,m+76,32);A(g.char||"",B,m+108,32);A(g.locale||"",B,m+140,32);J(d)(e,m,b)&&g.preventDefault()},Yb:c};L(a)}
function jb(a,b,c){F[a>>3]=b.timeStamp;a>>=2;D[a+2]=b.screenX;D[a+3]=b.screenY;D[a+4]=b.clientX;D[a+5]=b.clientY;D[a+6]=b.ctrlKey;D[a+7]=b.shiftKey;D[a+8]=b.altKey;D[a+9]=b.metaKey;xa[2*a+20]=b.button;xa[2*a+21]=b.buttons;D[a+11]=b.movementX;D[a+12]=b.movementY;c=gb(c);D[a+13]=b.clientX-c.left;D[a+14]=b.clientY-c.top}
function P(a,b,c,d,e,k){ab||(ab=O(72));a=M(a);L({target:a,dc:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,Xb:k,Zb:d,$b:function(g){g=g||event;jb(ab,g,a);J(d)(e,ab,b)&&g.preventDefault()},Yb:c})}function kb(a,b,c,d,e){bb||(bb=O(260));L({target:a,Xb:e,Zb:d,$b:function(k){k=k||event;var g=bb,m=document.pointerLockElement||document.lc||document.nc||document.mc;D[g>>2]=!!m;var n=m&&m.id?m.id:"";A(Ya(m),B,g+4,128);A(n,B,g+132,128);J(d)(20,g,b)&&k.preventDefault()},Yb:c})}
function lb(a,b,c,d,e){L({target:a,Xb:e,Zb:d,$b:function(k){k=k||event;J(d)(38,0,b)&&k.preventDefault()},Yb:c})}
function mb(a,b,c,d){cb||(cb=O(36));a=M(a);L({target:a,Xb:"resize",Zb:d,$b:function(e){e=e||event;if(e.target==a){var k=document.body;if(k){var g=cb;D[g>>2]=e.detail;D[g+4>>2]=k.clientWidth;D[g+8>>2]=k.clientHeight;D[g+12>>2]=innerWidth;D[g+16>>2]=innerHeight;D[g+20>>2]=outerWidth;D[g+24>>2]=outerHeight;D[g+28>>2]=pageXOffset;D[g+32>>2]=pageYOffset;J(d)(10,g,b)&&e.preventDefault()}}},Yb:c})}
function nb(a,b,c,d,e,k){db||(db=O(1696));a=M(a);L({target:a,dc:"touchstart"==k||"touchend"==k,Xb:k,Zb:d,$b:function(g){for(var m,n={},p=g.touches,r=0;r<p.length;++r)m=p[r],m.sc=m.uc=0,n[m.identifier]=m;for(r=0;r<g.changedTouches.length;++r)m=g.changedTouches[r],m.sc=1,n[m.identifier]=m;for(r=0;r<g.targetTouches.length;++r)n[g.targetTouches[r].identifier].uc=1;p=db;F[p>>3]=g.timeStamp;var w=p>>2;D[w+3]=g.ctrlKey;D[w+4]=g.shiftKey;D[w+5]=g.altKey;D[w+6]=g.metaKey;w+=7;var N=gb(a),rb=0;for(r in n)if(m=
n[r],D[w]=m.identifier,D[w+1]=m.screenX,D[w+2]=m.screenY,D[w+3]=m.clientX,D[w+4]=m.clientY,D[w+5]=m.pageX,D[w+6]=m.pageY,D[w+7]=m.sc,D[w+8]=m.uc,D[w+9]=m.clientX-N.left,D[w+10]=m.clientY-N.top,w+=13,31<++rb)break;D[p+8>>2]=rb;J(d)(e,p,b)&&g.preventDefault()},Yb:c})}function ob(a,b,c,d,e,k){a={target:M(a),Xb:k,Zb:d,$b:function(g){g=g||event;J(d)(e,0,b)&&g.preventDefault()},Yb:c};L(a)}
function pb(a,b,c,d){eb||(eb=O(104));L({target:a,dc:!0,Xb:"wheel",Zb:d,$b:function(e){e=e||event;var k=eb;jb(k,e,a);F[k+72>>3]=e.deltaX;F[k+80>>3]=e.deltaY;F[k+88>>3]=e.deltaZ;D[k+96>>2]=e.deltaMode;J(d)(9,k,b)&&e.preventDefault()},Yb:c})}
function qb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,k){b.drawArraysInstancedANGLE(c,d,e,k)},a.drawElementsInstanced=function(c,d,e,k,g){b.drawElementsInstancedANGLE(c,d,e,k,g)})}
function sb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function tb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function ub(a){a.Kc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function vb(a){a.Pc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function wb(a){a.Rc=a.getExtension("WEBGL_multi_draw")}var xb=1,yb=[],Q=[],zb=[],Ab=[],Bb=[],R=[],Cb=[],Db=[],Eb={},Fb={};function S(a){Gb||(Gb=a)}function Hb(a){for(var b=xb++,c=a.length;c<b;c++)a[c]=null;return b}
function Ib(a,b){a.rc||(a.rc=a.getContext,a.getContext=function(d,e){e=a.rc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.tc?a.getContext("webgl2",b):a.getContext("webgl",b);return c?Jb(c,b):0}function Jb(a,b){var c=Hb(Db),d={Oc:c,attributes:b,version:b.tc,ic:a};a.canvas&&(a.canvas.Hc=d);Db[c]=d;("undefined"===typeof b.qc||b.qc)&&Kb(d);return c}
function Kb(a){a||(a=T);if(!a.Gc){a.Gc=!0;var b=a.ic;qb(b);sb(b);tb(b);ub(b);vb(b);2<=a.version&&(b.pc=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.pc)b.pc=b.getExtension("EXT_disjoint_timer_query");wb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var Gb,T,Lb=["default","low-power","high-performance"];
function Mb(a,b,c,d){for(var e=0;e<a;e++){var k=U[c](),g=k&&Hb(d);k?(k.name=g,d[g]=k):S(1282);D[b+4*e>>2]=g}}
function Nb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=U.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>T.version){S(1282);return}c=2*(U.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>T.version){S(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=U.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":S(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:S(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)D[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){S(1280);x("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:S(1280);x("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}D[b>>2]=c}else S(1281)}
function V(a){var b=ua(a)+1,c=O(b);A(a,B,c,b);return c}function Ob(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function Pb(a){a-=5120;return 0==a?pa:1==a?B:2==a?xa:4==a?D:6==a?E:5==a||28922==a||28520==a||30779==a||30782==a?za:ya}function W(a){var b=U.Dc;if(b){var c=b.cc[a];"number"===typeof c&&(b.cc[a]=c=U.getUniformLocation(b,b.Bc[a]+(0<c?"["+c+"]":"")));return c}S(1282)}for(var X=[],Y=[],U,Qb=new Float32Array(288),Z=0;288>Z;++Z)X[Z]=Qb.subarray(0,Z+1);var Rb=new Int32Array(288);
for(Z=0;288>Z;++Z)Y[Z]=Rb.subarray(0,Z+1);
var Wb={ha:function(){return 0},ib:function(){return 0},jb:function(){},T:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},pa:function(a,b,c){a=M(a);if(!a)return-4;a=gb(a);F[b>>3]=a.width;F[c>>3]=a.height;return 0},eb:function(a,b,c){B.copyWithin(a,b,b+c)},Qa:function(a,b){function c(d){J(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},fb:function(a){var b=B.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);
d=Math.max(a,d);0<d%65536&&(d+=65536-d%65536);a:{try{ma.grow(Math.min(2147483648,d)-wa.byteLength+65535>>>16);Aa();var e=1;break a}catch(k){}e=void 0}if(e)return!0}return!1},U:function(a,b,c,d){hb(a,b,c,d,12,"blur");return 0},Q:function(a,b,c){a=M(a);if(!a)return-4;a.width=b;a.height=c;return 0},V:function(a,b,c,d){hb(a,b,c,d,13,"focus");return 0},ca:function(a,b,c,d){ib(a,b,c,d,2,"keydown");return 0},aa:function(a,b,c,d){ib(a,b,c,d,1,"keypress");return 0},ba:function(a,b,c,d){ib(a,b,c,d,3,"keyup");
return 0},oa:function(a,b,c,d){P(a,b,c,d,5,"mousedown");return 0},ga:function(a,b,c,d){P(a,b,c,d,33,"mouseenter");return 0},ea:function(a,b,c,d){P(a,b,c,d,34,"mouseleave");return 0},ja:function(a,b,c,d){P(a,b,c,d,8,"mousemove");return 0},ka:function(a,b,c,d){P(a,b,c,d,6,"mouseup");return 0},X:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.lc||document.body.nc||document.body.mc))return-1;a=M(a);if(!a)return-4;kb(a,b,c,d,"pointerlockchange");kb(a,b,
c,d,"mozpointerlockchange");kb(a,b,c,d,"webkitpointerlockchange");kb(a,b,c,d,"mspointerlockchange");return 0},W:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.lc||document.body.nc||document.body.mc))return-1;a=M(a);if(!a)return-4;lb(a,b,c,d,"pointerlockerror");lb(a,b,c,d,"mozpointerlockerror");lb(a,b,c,d,"webkitpointerlockerror");lb(a,b,c,d,"mspointerlockerror");return 0},cb:function(a,b,c,d){mb(a,b,c,d);return 0},Y:function(a,b,c,d){nb(a,b,c,d,25,"touchcancel");
return 0},Z:function(a,b,c,d){nb(a,b,c,d,23,"touchend");return 0},_:function(a,b,c,d){nb(a,b,c,d,24,"touchmove");return 0},$:function(a,b,c,d){nb(a,b,c,d,22,"touchstart");return 0},S:function(a,b,c,d){ob(a,b,c,d,31,"webglcontextlost");return 0},R:function(a,b,c,d){ob(a,b,c,d,32,"webglcontextrestored");return 0},da:function(a,b,c,d){a=M(a);return"undefined"!==typeof a.onwheel?(pb(a,b,c,d),0):-1},I:function(a,b){b>>=2;b={alpha:!!D[b],depth:!!D[b+1],stencil:!!D[b+2],antialias:!!D[b+3],premultipliedAlpha:!!D[b+
4],preserveDrawingBuffer:!!D[b+5],powerPreference:Lb[D[b+6]],failIfMajorPerformanceCaveat:!!D[b+7],tc:D[b+8],Qc:D[b+9],qc:D[b+10],Fc:D[b+11],Sc:D[b+12],Tc:D[b+13]};a=M(a);return!a||b.Fc?0:Ib(a,b)},wa:function(a,b){a=Db[a];b=C(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&qb(U);"OES_vertex_array_object"==b&&sb(U);"WEBGL_draw_buffers"==b&&tb(U);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&ub(U);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&vb(U);"WEBGL_multi_draw"==
b&&wb(U);return!!a.ic.getExtension(b)},Na:function(a){a>>=2;for(var b=0;14>b;++b)D[a+b]=0;D[a]=D[a+1]=D[a+3]=D[a+4]=D[a+8]=D[a+10]=1},Da:function(a){T=Db[a];f.Jc=U=T&&T.ic;return!a||U?0:-5},fa:function(){return 0},hb:function(a,b,c,d){a=Qa.Nc(a);b=Qa.Lc(a,b,c);D[d>>2]=b;return 0},db:function(){},gb:function(a,b,c,d){for(var e=0,k=0;k<c;k++){var g=D[b>>2],m=D[b+4>>2];b+=8;for(var n=0;n<m;n++){var p=B[g+n],r=Pa[a];0===p||10===p?((1===a?ka:x)(ta(r,0)),r.length=0):r.push(p)}e+=m}D[d>>2]=e;return 0},b:function(a){U.activeTexture(a)},
E:function(a,b){U.attachShader(Q[a],R[b])},c:function(a,b){35051==a?U.oc=b:35052==a&&(U.ac=b);U.bindBuffer(a,yb[b])},h:function(a,b){U.bindFramebuffer(a,zb[b])},Ha:function(a,b){U.bindRenderbuffer(a,Ab[b])},a:function(a,b){U.bindTexture(a,Bb[b])},O:function(a){U.bindVertexArray(Cb[a])},K:function(a,b,c,d){U.blendColor(a,b,c,d)},L:function(a,b){U.blendEquationSeparate(a,b)},M:function(a,b,c,d){U.blendFuncSeparate(a,b,c,d)},q:function(a,b,c,d,e,k,g,m,n,p){U.blitFramebuffer(a,b,c,d,e,k,g,m,n,p)},Ja:function(a,
b,c,d){2<=T.version?c?U.bufferData(a,B,d,c,b):U.bufferData(a,b,d):U.bufferData(a,c?B.subarray(c,c+b):b,d)},m:function(a,b,c,d){2<=T.version?U.bufferSubData(a,b,B,d,c):U.bufferSubData(a,b,B.subarray(d,d+c))},Ab:function(a){U.clear(a)},na:function(a,b,c,d){U.clearColor(a,b,c,d)},A:function(a){U.clearDepth(a)},Bb:function(a){U.clearStencil(a)},j:function(a,b,c,d){U.colorMask(!!a,!!b,!!c,!!d)},sa:function(a){U.compileShader(R[a])},Ca:function(a,b,c,d,e,k,g,m){2<=T.version?U.ac?U.compressedTexImage2D(a,
b,c,d,e,k,g,m):U.compressedTexImage2D(a,b,c,d,e,k,B,m,g):U.compressedTexImage2D(a,b,c,d,e,k,m?B.subarray(m,m+g):null)},Aa:function(a,b,c,d,e,k,g,m,n){U.ac?U.compressedTexImage3D(a,b,c,d,e,k,g,m,n):U.compressedTexImage3D(a,b,c,d,e,k,g,B,n,m)},ya:function(){var a=Hb(Q),b=U.createProgram();b.name=a;b.hc=b.ec=b.fc=0;b.kc=1;Q[a]=b;return a},ua:function(a){var b=Hb(R);R[b]=U.createShader(a);return b},G:function(a){U.cullFace(a)},Sa:function(a,b){for(var c=0;c<a;c++){var d=D[b+4*c>>2],e=yb[d];e&&(U.deleteBuffer(e),
e.name=0,yb[d]=null,d==U.oc&&(U.oc=0),d==U.ac&&(U.ac=0))}},i:function(a,b){for(var c=0;c<a;++c){var d=D[b+4*c>>2],e=zb[d];e&&(U.deleteFramebuffer(e),e.name=0,zb[d]=null)}},y:function(a){if(a){var b=Q[a];b?(U.deleteProgram(b),b.name=0,Q[a]=null):S(1281)}},P:function(a,b){for(var c=0;c<a;c++){var d=D[b+4*c>>2],e=Ab[d];e&&(U.deleteRenderbuffer(e),e.name=0,Ab[d]=null)}},u:function(a){if(a){var b=R[a];b?(U.deleteShader(b),R[a]=null):S(1281)}},Ra:function(a,b){for(var c=0;c<a;c++){var d=D[b+4*c>>2],e=Bb[d];
e&&(U.deleteTexture(e),e.name=0,Bb[d]=null)}},Pa:function(a,b){for(var c=0;c<a;c++){var d=D[b+4*c>>2];U.deleteVertexArray(Cb[d]);Cb[d]=null}},x:function(a){U.depthFunc(a)},w:function(a){U.depthMask(!!a)},e:function(a){U.disable(a)},N:function(a){U.disableVertexAttribArray(a)},kb:function(a,b,c){U.drawArrays(a,b,c)},lb:function(a,b,c,d){U.drawArraysInstanced(a,b,c,d)},mb:function(a,b,c,d){U.drawElements(a,b,c,d)},nb:function(a,b,c,d,e){U.drawElementsInstanced(a,b,c,d,e)},g:function(a){U.enable(a)},
xb:function(a){U.enableVertexAttribArray(a)},H:function(a){U.frontFace(a)},Ka:function(a,b){Mb(a,b,"createBuffer",yb)},Ia:function(a,b){Mb(a,b,"createRenderbuffer",Ab)},Ea:function(a,b){Mb(a,b,"createTexture",Bb)},Oa:function(a,b){Mb(a,b,"createVertexArray",Cb)},qa:function(a,b){return U.getAttribLocation(Q[a],C(b))},d:function(a,b){Nb(a,b)},va:function(a,b,c,d){a=U.getProgramInfoLog(Q[a]);null===a&&(a="(unknown error)");b=0<b&&d?A(a,B,d,b):0;c&&(D[c>>2]=b)},D:function(a,b,c){if(c)if(a>=xb)S(1281);
else if(a=Q[a],35716==b)a=U.getProgramInfoLog(a),null===a&&(a="(unknown error)"),D[c>>2]=a.length+1;else if(35719==b){if(!a.hc)for(b=0;b<U.getProgramParameter(a,35718);++b)a.hc=Math.max(a.hc,U.getActiveUniform(a,b).name.length+1);D[c>>2]=a.hc}else if(35722==b){if(!a.ec)for(b=0;b<U.getProgramParameter(a,35721);++b)a.ec=Math.max(a.ec,U.getActiveAttrib(a,b).name.length+1);D[c>>2]=a.ec}else if(35381==b){if(!a.fc)for(b=0;b<U.getProgramParameter(a,35382);++b)a.fc=Math.max(a.fc,U.getActiveUniformBlockName(a,
b).length+1);D[c>>2]=a.fc}else D[c>>2]=U.getProgramParameter(a,b);else S(1281)},ra:function(a,b,c,d){a=U.getShaderInfoLog(R[a]);null===a&&(a="(unknown error)");b=0<b&&d?A(a,B,d,b):0;c&&(D[c>>2]=b)},B:function(a,b,c){c?35716==b?(a=U.getShaderInfoLog(R[a]),null===a&&(a="(unknown error)"),D[c>>2]=a?a.length+1:0):35720==b?(a=U.getShaderSource(R[a]),D[c>>2]=a?a.length+1:0):D[c>>2]=U.getShaderParameter(R[a],b):S(1281)},Ua:function(a){var b=Eb[a];if(!b){switch(a){case 7939:b=U.getSupportedExtensions()||
[];b=b.concat(b.map(function(d){return"GL_"+d}));b=V(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=U.getParameter(a))||S(1280);b=b&&V(b);break;case 7938:b=U.getParameter(7938);b=2<=T.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=V(b);break;case 35724:b=U.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=V(b);break;default:S(1280)}Eb[a]=b}return b},Ta:function(a,
b){if(2>T.version)return S(1282),0;var c=Fb[a];if(c)return 0>b||b>=c.length?(S(1281),0):c[b];switch(a){case 7939:return c=U.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return V(d)}),c=Fb[a]=c,0>b||b>=c.length?(S(1281),0):c[b];default:return S(1280),0}},l:function(a,b){b=C(b);if(a=Q[a]){var c=a,d=c.cc,e=c.Cc,k;if(!d)for(c.cc=d={},c.Bc={},k=0;k<U.getProgramParameter(c,35718);++k){var g=U.getActiveUniform(c,k);var m=g.name;g=g.size;var n=Ob(m);n=0<n?
m.slice(0,n):m;var p=c.kc;c.kc+=g;e[n]=[g,p];for(m=0;m<g;++m)d[p]=m,c.Bc[p++]=n}c=a.cc;d=0;e=b;k=Ob(b);0<k&&(d=parseInt(b.slice(k+1))>>>0,e=b.slice(0,k));if((e=a.Cc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||U.getUniformLocation(a,b)))return d}else S(1281);return-1},xa:function(a){a=Q[a];U.linkProgram(a);a.cc=0;a.Cc={}},J:function(a,b){U.polygonOffset(a,b)},r:function(a){U.readBuffer(a)},Fa:function(a,b,c,d){U.renderbufferStorage(a,b,c,d)},Ga:function(a,b,c,d,e){U.renderbufferStorageMultisample(a,b,c,d,e)},
s:function(a,b,c,d){U.scissor(a,b,c,d)},ta:function(a,b,c,d){for(var e="",k=0;k<b;++k){var g=d?D[d+4*k>>2]:-1;e+=C(D[c+4*k>>2],0>g?void 0:g)}U.shaderSource(R[a],e)},Ma:function(a,b,c){U.stencilFunc(a,b,c)},ma:function(a,b,c,d){U.stencilFuncSeparate(a,b,c,d)},v:function(a){U.stencilMask(a)},La:function(a,b,c){U.stencilOp(a,b,c)},la:function(a,b,c,d){U.stencilOpSeparate(a,b,c,d)},Ba:function(a,b,c,d,e,k,g,m,n){if(2<=T.version)if(U.ac)U.texImage2D(a,b,c,d,e,k,g,m,n);else if(n){var p=Pb(m);U.texImage2D(a,
b,c,d,e,k,g,m,p,n>>31-Math.clz32(p.BYTES_PER_ELEMENT))}else U.texImage2D(a,b,c,d,e,k,g,m,null);else{p=U;var r=p.texImage2D;if(n){var w=Pb(m),N=31-Math.clz32(w.BYTES_PER_ELEMENT);n=w.subarray(n>>N,n+e*(d*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[g-6402]||1)*(1<<N)+4-1&-4)>>N)}else n=null;r.call(p,a,b,c,d,e,k,g,m,n)}},za:function(a,b,c,d,e,k,g,m,n,p){if(U.ac)U.texImage3D(a,b,c,d,e,k,g,m,n,p);else if(p){var r=Pb(n);U.texImage3D(a,b,c,d,e,k,g,m,n,r,p>>31-Math.clz32(r.BYTES_PER_ELEMENT))}else U.texImage3D(a,
b,c,d,e,k,g,m,n,null)},F:function(a,b,c){U.texParameterf(a,b,c)},f:function(a,b,c){U.texParameteri(a,b,c)},wb:function(a,b,c){if(2<=T.version)U.uniform1fv(W(a),E,c>>2,b);else{if(288>=b)for(var d=X[b-1],e=0;e<b;++e)d[e]=E[c+4*e>>2];else d=E.subarray(c>>2,c+4*b>>2);U.uniform1fv(W(a),d)}},C:function(a,b){U.uniform1i(W(a),b)},sb:function(a,b,c){if(2<=T.version)U.uniform1iv(W(a),D,c>>2,b);else{if(288>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=D[c+4*e>>2];else d=D.subarray(c>>2,c+4*b>>2);U.uniform1iv(W(a),d)}},
vb:function(a,b,c){if(2<=T.version)U.uniform2fv(W(a),E,c>>2,2*b);else{if(144>=b)for(var d=X[2*b-1],e=0;e<2*b;e+=2)d[e]=E[c+4*e>>2],d[e+1]=E[c+(4*e+4)>>2];else d=E.subarray(c>>2,c+8*b>>2);U.uniform2fv(W(a),d)}},rb:function(a,b,c){if(2<=T.version)U.uniform2iv(W(a),D,c>>2,2*b);else{if(144>=b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=D[c+4*e>>2],d[e+1]=D[c+(4*e+4)>>2];else d=D.subarray(c>>2,c+8*b>>2);U.uniform2iv(W(a),d)}},ub:function(a,b,c){if(2<=T.version)U.uniform3fv(W(a),E,c>>2,3*b);else{if(96>=b)for(var d=
X[3*b-1],e=0;e<3*b;e+=3)d[e]=E[c+4*e>>2],d[e+1]=E[c+(4*e+4)>>2],d[e+2]=E[c+(4*e+8)>>2];else d=E.subarray(c>>2,c+12*b>>2);U.uniform3fv(W(a),d)}},qb:function(a,b,c){if(2<=T.version)U.uniform3iv(W(a),D,c>>2,3*b);else{if(96>=b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=D[c+4*e>>2],d[e+1]=D[c+(4*e+4)>>2],d[e+2]=D[c+(4*e+8)>>2];else d=D.subarray(c>>2,c+12*b>>2);U.uniform3iv(W(a),d)}},tb:function(a,b,c){if(2<=T.version)U.uniform4fv(W(a),E,c>>2,4*b);else{if(72>=b){var d=X[4*b-1],e=E;c>>=2;for(var k=0;k<4*b;k+=
4){var g=c+k;d[k]=e[g];d[k+1]=e[g+1];d[k+2]=e[g+2];d[k+3]=e[g+3]}}else d=E.subarray(c>>2,c+16*b>>2);U.uniform4fv(W(a),d)}},pb:function(a,b,c){if(2<=T.version)U.uniform4iv(W(a),D,c>>2,4*b);else{if(72>=b)for(var d=Y[4*b-1],e=0;e<4*b;e+=4)d[e]=D[c+4*e>>2],d[e+1]=D[c+(4*e+4)>>2],d[e+2]=D[c+(4*e+8)>>2],d[e+3]=D[c+(4*e+12)>>2];else d=D.subarray(c>>2,c+16*b>>2);U.uniform4iv(W(a),d)}},ob:function(a,b,c,d){if(2<=T.version)U.uniformMatrix4fv(W(a),!!c,E,d>>2,16*b);else{if(18>=b){var e=X[16*b-1],k=E;d>>=2;for(var g=
0;g<16*b;g+=16){var m=d+g;e[g]=k[m];e[g+1]=k[m+1];e[g+2]=k[m+2];e[g+3]=k[m+3];e[g+4]=k[m+4];e[g+5]=k[m+5];e[g+6]=k[m+6];e[g+7]=k[m+7];e[g+8]=k[m+8];e[g+9]=k[m+9];e[g+10]=k[m+10];e[g+11]=k[m+11];e[g+12]=k[m+12];e[g+13]=k[m+13];e[g+14]=k[m+14];e[g+15]=k[m+15]}}else e=E.subarray(d>>2,d+64*b>>2);U.uniformMatrix4fv(W(a),!!c,e)}},k:function(a){a=Q[a];U.useProgram(a);U.Dc=a},yb:function(a,b){U.vertexAttribDivisor(a,b)},zb:function(a,b,c,d,e,k){U.vertexAttribPointer(a,b,c,!!d,e,k)},t:function(a,b,c,d){U.viewport(a,
b,c,d)},bb:function(){f.vc=function(a){0!=Sb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",f.vc)},ab:function(){f.Ac=function(a){a=a.clipboardData.getData("text");oa("_sapp_emsc_onpaste",["string"],[a])};window.addEventListener("paste",f.Ac)},$a:function(a){f.Uc=[];a=C(a);a=document.getElementById(a);f.wc=function(b){b.stopPropagation();b.preventDefault()};f.xc=function(b){b.stopPropagation();b.preventDefault()};f.yc=function(b){b.stopPropagation();b.preventDefault()};
f.zc=function(b){b.stopPropagation();b.preventDefault();var c=b.dataTransfer.files;f.Vc=c;Tb(c.length);var d;for(d=0;d<c.length;d++)oa("_sapp_emsc_drop",["number","string"],[d,c[d].name]);Ub(b.clientX,b.clientY)};a.addEventListener("dragenter",f.wc,!1);a.addEventListener("dragleave",f.xc,!1);a.addEventListener("dragover",f.yc,!1);a.addEventListener("drop",f.zc,!1)},Wa:function(){var a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},p:function(){var a=document.createElement("input");
a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Vb()});document.body.append(a)},o:function(){document.getElementById("_sokol_app_input_element").focus()},Cb:function(a){a=C(a);f.bc=document.getElementById(a);f.bc||console.log("sokol_app.h: invalid target:"+a);f.bc.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},_a:function(){window.removeEventListener("beforeunload",f.vc)},Za:function(){window.removeEventListener("paste",
f.Ac)},Ya:function(a){a=C(a);a=document.getElementById(a);a.removeEventListener("dragenter",f.wc);a.removeEventListener("dragleave",f.xc);a.removeEventListener("dragover",f.yc);a.removeEventListener("drop",f.zc)},z:function(){f.bc&&f.bc.requestPointerLock&&f.bc.requestPointerLock()},Va:function(a,b,c){var d=document.createElement("canvas");d.width=a;d.height=b;var e=d.getContext("2d"),k=e.createImageData(a,b);k.data.set(B.subarray(c,c+a*b*4));e.putImageData(k,0,0);a=document.createElement("link");
a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},n:function(){document.getElementById("_sokol_app_input_element").blur()},Xa:function(a){a=C(a);var b=document.createElement("textarea");b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");b.setAttribute("spellcheck","false");b.style.left="-100px";b.style.top="-100px";b.style.height=1;b.style.width=1;b.value=a;document.body.appendChild(b);b.select();
document.execCommand("copy");document.body.removeChild(b)},ia:function(){return navigator.userAgent.includes("Macintosh")?1:0}};
(function(){function a(e){f.asm=e.exports;ma=f.asm.Db;Aa();Ba=f.asm.Wb;Da.unshift(f.asm.Eb);G--;f.monitorRunDependencies&&f.monitorRunDependencies(G);0==G&&(null!==Ia&&(clearInterval(Ia),Ia=null),H&&(e=H,H=null,e()))}function b(e){a(e.instance)}function c(e){return Ma().then(function(k){return WebAssembly.instantiate(k,d)}).then(function(k){return k}).then(e,function(k){x("failed to asynchronously prepare wasm: "+k);la(k)})}var d={a:Wb};G++;f.monitorRunDependencies&&f.monitorRunDependencies(G);if(f.instantiateWasm)try{return f.instantiateWasm(d,
a)}catch(e){return x("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return y||"function"!==typeof WebAssembly.instantiateStreaming||Ja()||I.startsWith("file://")||"function"!==typeof fetch?c(b):fetch(I,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(k){x("wasm streaming compile failed: "+k);x("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
f.___wasm_call_ctors=function(){return(f.___wasm_call_ctors=f.asm.Eb).apply(null,arguments)};var Vb=f.__sapp_emsc_notify_keyboard_hidden=function(){return(Vb=f.__sapp_emsc_notify_keyboard_hidden=f.asm.Fb).apply(null,arguments)};f.__sapp_emsc_onpaste=function(){return(f.__sapp_emsc_onpaste=f.asm.Gb).apply(null,arguments)};
var Sb=f.__sapp_html5_get_ask_leave_site=function(){return(Sb=f.__sapp_html5_get_ask_leave_site=f.asm.Hb).apply(null,arguments)},Tb=f.__sapp_emsc_begin_drop=function(){return(Tb=f.__sapp_emsc_begin_drop=f.asm.Ib).apply(null,arguments)};f.__sapp_emsc_drop=function(){return(f.__sapp_emsc_drop=f.asm.Jb).apply(null,arguments)};var Ub=f.__sapp_emsc_end_drop=function(){return(Ub=f.__sapp_emsc_end_drop=f.asm.Kb).apply(null,arguments)};
f.__sapp_emsc_invoke_fetch_cb=function(){return(f.__sapp_emsc_invoke_fetch_cb=f.asm.Lb).apply(null,arguments)};f._main=function(){return(f._main=f.asm.Mb).apply(null,arguments)};f.__saudio_emsc_pull=function(){return(f.__saudio_emsc_pull=f.asm.Nb).apply(null,arguments)};f.__sfetch_emsc_head_response=function(){return(f.__sfetch_emsc_head_response=f.asm.Ob).apply(null,arguments)};f.__sfetch_emsc_get_response=function(){return(f.__sfetch_emsc_get_response=f.asm.Pb).apply(null,arguments)};
f.__sfetch_emsc_failed_http_status=function(){return(f.__sfetch_emsc_failed_http_status=f.asm.Qb).apply(null,arguments)};f.__sfetch_emsc_failed_buffer_too_small=function(){return(f.__sfetch_emsc_failed_buffer_too_small=f.asm.Rb).apply(null,arguments)};
var O=f._malloc=function(){return(O=f._malloc=f.asm.Sb).apply(null,arguments)},qa=f.stackSave=function(){return(qa=f.stackSave=f.asm.Tb).apply(null,arguments)},ra=f.stackRestore=function(){return(ra=f.stackRestore=f.asm.Ub).apply(null,arguments)},z=f.stackAlloc=function(){return(z=f.stackAlloc=f.asm.Vb).apply(null,arguments)},Xb;function ia(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}H=function Yb(){Xb||Zb();Xb||(H=Yb)};
function Zb(a){function b(){if(!Xb&&(Xb=!0,f.calledRun=!0,!na)){Na(Da);Na(Ea);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if($b){var c=a,d=f._main;c=c||[];var e=c.length+1,k=z(4*(e+1));D[k>>2]=va(da);for(var g=1;g<e;g++)D[(k>>2)+g]=va(c[g-1]);D[(k>>2)+e]=0;try{var m=d(e,k);if(!(noExitRuntime||0<ja)){if(f.onExit)f.onExit(m);na=!0}h(m,new ia(m))}catch(n){n instanceof ia||"unwind"==n||h(1,n)}finally{}}if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;)c=f.postRun.shift(),
Ga.unshift(c);Na(Ga)}}a=a||ca;if(!(0<G)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Ha();Na(Ca);0<G||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},1)):b())}}f.run=Zb;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var $b=!0;f.noInitialRun&&($b=!1);Zb();
