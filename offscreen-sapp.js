
var f;f||(f=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign,ba=aa({},f),ca=[],da="./this.program",h=(a,b)=>{throw b;},ea="object"===typeof window,l="function"===typeof importScripts,q="",fa,ha,ia,fs,ja,ka;
if("object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)q=l?require("path").dirname(q)+"/":__dirname+"/",ka=function(){ja||(fs=require("fs"),ja=require("path"))},fa=function(a,b){ka();a=ja.normalize(a);return fs.readFileSync(a,b?null:"utf8")},ia=function(a){a=fa(a,!0);a.buffer||(a=new Uint8Array(a));return a},ha=function(a,b,c){ka();a=ja.normalize(a);fs.readFile(a,function(d,e){d?c(d):b(e.buffer)})},1<process.argv.length&&(da=process.argv[1].replace(/\\/g,
"/")),ca=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=f),process.on("uncaughtException",function(a){if(!(a instanceof la))throw a;}),process.on("unhandledRejection",function(a){throw a;}),h=(a,b)=>{if(noExitRuntime||0<ma)throw process.exitCode=a,b;b instanceof la||t("exiting due to exception: "+b);process.exit(a)},f.inspect=function(){return"[Emscripten Module object]"};else if(ea||l)l?q=self.location.href:"undefined"!==typeof document&&document.currentScript&&(q=document.currentScript.src),
q=0!==q.indexOf("blob:")?q.substr(0,q.replace(/[?#].*/,"").lastIndexOf("/")+1):"",fa=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},l&&(ia=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),ha=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};
f.print||console.log.bind(console);var t=f.printErr||console.warn.bind(console);aa(f,ba);ba=null;f.arguments&&(ca=f.arguments);f.thisProgram&&(da=f.thisProgram);f.quit&&(h=f.quit);var u;f.wasmBinary&&(u=f.wasmBinary);var noExitRuntime=f.noExitRuntime||!0;"object"!==typeof WebAssembly&&na("no native wasm support detected");var oa,pa=!1;
function qa(a,b,c){var d={string:function(n){var p=0;if(null!==n&&void 0!==n&&0!==n){var r=(n.length<<2)+1;p=v(r);x(n,y,p,r)}return p},array:function(n){var p=v(n.length);ra.set(n,p);return p}};a=f["_"+a];var e=[],k=0;if(c)for(var g=0;g<c.length;g++){var m=d[b[g]];m?(0===k&&(k=sa()),e[g]=m(c[g])):e[g]=c[g]}b=a.apply(null,e);b=function(n){0!==k&&ta(k);return n}(b)}var ua="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function z(a,b){if(a){var c=y,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&ua)a=ua.decode(c.subarray(a,b));else{for(d="";a<b;){var e=c[a++];if(e&128){var k=c[a++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|k);else{var g=c[a++]&63;e=224==(e&240)?(e&15)<<12|k<<6|g:(e&7)<<18|k<<12|g<<6|c[a++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}a=d}}else a="";return a}
function x(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var k=0;k<a.length;++k){var g=a.charCodeAt(k);if(55296<=g&&57343>=g){var m=a.charCodeAt(++k);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-e}
function va(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function wa(a){var b=va(a)+1,c=v(b);x(a,ra,c,b);return c}var xa,ra,y,ya,za,A,Aa,B,C;
function Ba(){var a=oa.buffer;xa=a;f.HEAP8=ra=new Int8Array(a);f.HEAP16=ya=new Int16Array(a);f.HEAP32=A=new Int32Array(a);f.HEAPU8=y=new Uint8Array(a);f.HEAPU16=za=new Uint16Array(a);f.HEAPU32=Aa=new Uint32Array(a);f.HEAPF32=B=new Float32Array(a);f.HEAPF64=C=new Float64Array(a)}var Ca,Da=[],Ea=[],Fa=[],Ga=[],Ha=[],ma=0;function Ia(){var a=f.preRun.shift();Da.unshift(a)}var D=0,Ja=null,E=null;f.preloadedImages={};f.preloadedAudios={};
function na(a){if(f.onAbort)f.onAbort(a);a="Aborted("+a+")";t(a);pa=!0;throw new WebAssembly.RuntimeError(a+". Build with -s ASSERTIONS=1 for more info.");}function Ka(){return F.startsWith("data:application/octet-stream;base64,")}var F;F="offscreen-sapp.wasm";if(!Ka()){var La=F;F=f.locateFile?f.locateFile(La,q):q+La}function Ma(){var a=F;try{if(a==F&&u)return new Uint8Array(u);if(ia)return ia(a);throw"both async and sync fetching of the wasm failed";}catch(b){na(b)}}
function Na(){if(!u&&(ea||l)){if("function"===typeof fetch&&!F.startsWith("file://"))return fetch(F,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+F+"'";return a.arrayBuffer()}).catch(function(){return Ma()});if(ha)return new Promise(function(a,b){ha(F,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ma()})}
function Oa(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(f);else{var c=b.Lc;"number"===typeof c?void 0===b.jc?G(c)():G(c)(b.jc):c(void 0===b.jc?null:b.jc)}}}var Pa=[];function G(a){var b=Pa[a];b||(a>=Pa.length&&(Pa.length=a+1),Pa[a]=b=Ca.get(a));return b}var Qa=0;function Ra(){for(var a=H.length-1;0<=a;--a)Sa(a);H=[];Ta=[]}var Ta=[];function Ua(){if(Qa&&Va.dc)for(var a=0;a<Ta.length;++a){var b=Ta[a];Ta.splice(a,1);--a;b.Uc.apply(null,b.Ic)}}var H=[];
function Sa(a){var b=H[a];b.target.removeEventListener(b.Xb,b.Ec,b.Yb);H.splice(a,1)}function I(a){function b(d){++Qa;Va=a;Ua();a.$b(d);Ua();--Qa}if(a.Zb)a.Ec=b,a.target.addEventListener(a.Xb,b,a.Yb),H.push(a),Wa||(Ga.push(Ra),Wa=!0);else for(var c=0;c<H.length;++c)H[c].target==a.target&&H[c].Xb==a.Xb&&Sa(c--)}function Xa(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}
var Wa,Va,Ya,Za,$a,ab,bb,cb,db,eb=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function J(a){a=2<a?z(a):a;return eb[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}function fb(a){return 0>eb.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}
function gb(a,b,c,d,e,k){Ya||(Ya=K(256));a={target:J(a),Xb:k,Zb:d,$b:function(g){g=g||event;var m=g.target.id?g.target.id:"",n=Ya;x(Xa(g.target),y,n+0,128);x(m,y,n+128,128);G(d)(e,n,b)&&g.preventDefault()},Yb:c};I(a)}
function hb(a,b,c,d,e,k){Za||(Za=K(176));a={target:J(a),dc:!0,Xb:k,Zb:d,$b:function(g){var m=Za;C[m>>3]=g.timeStamp;var n=m>>2;A[n+2]=g.location;A[n+3]=g.ctrlKey;A[n+4]=g.shiftKey;A[n+5]=g.altKey;A[n+6]=g.metaKey;A[n+7]=g.repeat;A[n+8]=g.charCode;A[n+9]=g.keyCode;A[n+10]=g.which;x(g.key||"",y,m+44,32);x(g.code||"",y,m+76,32);x(g.char||"",y,m+108,32);x(g.locale||"",y,m+140,32);G(d)(e,m,b)&&g.preventDefault()},Yb:c};I(a)}
function ib(a,b,c){C[a>>3]=b.timeStamp;a>>=2;A[a+2]=b.screenX;A[a+3]=b.screenY;A[a+4]=b.clientX;A[a+5]=b.clientY;A[a+6]=b.ctrlKey;A[a+7]=b.shiftKey;A[a+8]=b.altKey;A[a+9]=b.metaKey;ya[2*a+20]=b.button;ya[2*a+21]=b.buttons;A[a+11]=b.movementX;A[a+12]=b.movementY;c=fb(c);A[a+13]=b.clientX-c.left;A[a+14]=b.clientY-c.top}
function L(a,b,c,d,e,k){$a||($a=K(72));a=J(a);I({target:a,dc:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,Xb:k,Zb:d,$b:function(g){g=g||event;ib($a,g,a);G(d)(e,$a,b)&&g.preventDefault()},Yb:c})}function jb(a,b,c,d,e){ab||(ab=K(260));I({target:a,Xb:e,Zb:d,$b:function(k){k=k||event;var g=ab,m=document.pointerLockElement||document.lc||document.nc||document.mc;A[g>>2]=!!m;var n=m&&m.id?m.id:"";x(Xa(m),y,g+4,128);x(n,y,g+132,128);G(d)(20,g,b)&&k.preventDefault()},Yb:c})}
function kb(a,b,c,d,e){I({target:a,Xb:e,Zb:d,$b:function(k){k=k||event;G(d)(38,0,b)&&k.preventDefault()},Yb:c})}
function lb(a,b,c,d){bb||(bb=K(36));a=J(a);I({target:a,Xb:"resize",Zb:d,$b:function(e){e=e||event;if(e.target==a){var k=document.body;if(k){var g=bb;A[g>>2]=e.detail;A[g+4>>2]=k.clientWidth;A[g+8>>2]=k.clientHeight;A[g+12>>2]=innerWidth;A[g+16>>2]=innerHeight;A[g+20>>2]=outerWidth;A[g+24>>2]=outerHeight;A[g+28>>2]=pageXOffset;A[g+32>>2]=pageYOffset;G(d)(10,g,b)&&e.preventDefault()}}},Yb:c})}
function mb(a,b,c,d,e,k){cb||(cb=K(1696));a=J(a);I({target:a,dc:"touchstart"==k||"touchend"==k,Xb:k,Zb:d,$b:function(g){for(var m,n={},p=g.touches,r=0;r<p.length;++r)m=p[r],m.sc=m.uc=0,n[m.identifier]=m;for(r=0;r<g.changedTouches.length;++r)m=g.changedTouches[r],m.sc=1,n[m.identifier]=m;for(r=0;r<g.targetTouches.length;++r)n[g.targetTouches[r].identifier].uc=1;p=cb;C[p>>3]=g.timeStamp;var w=p>>2;A[w+3]=g.ctrlKey;A[w+4]=g.shiftKey;A[w+5]=g.altKey;A[w+6]=g.metaKey;w+=7;var N=fb(a),pb=0;for(r in n)if(m=
n[r],A[w]=m.identifier,A[w+1]=m.screenX,A[w+2]=m.screenY,A[w+3]=m.clientX,A[w+4]=m.clientY,A[w+5]=m.pageX,A[w+6]=m.pageY,A[w+7]=m.sc,A[w+8]=m.uc,A[w+9]=m.clientX-N.left,A[w+10]=m.clientY-N.top,w+=13,31<++pb)break;A[p+8>>2]=pb;G(d)(e,p,b)&&g.preventDefault()},Yb:c})}function nb(a,b,c,d,e,k){a={target:J(a),Xb:k,Zb:d,$b:function(g){g=g||event;G(d)(e,0,b)&&g.preventDefault()},Yb:c};I(a)}
function ob(a,b,c,d){db||(db=K(104));I({target:a,dc:!0,Xb:"wheel",Zb:d,$b:function(e){e=e||event;var k=db;ib(k,e,a);C[k+72>>3]=e.deltaX;C[k+80>>3]=e.deltaY;C[k+88>>3]=e.deltaZ;A[k+96>>2]=e.deltaMode;G(d)(9,k,b)&&e.preventDefault()},Yb:c})}
function qb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,k){b.drawArraysInstancedANGLE(c,d,e,k)},a.drawElementsInstanced=function(c,d,e,k,g){b.drawElementsInstancedANGLE(c,d,e,k,g)})}
function rb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function sb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function tb(a){a.Kc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function ub(a){a.Nc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function vb(a){a.Pc=a.getExtension("WEBGL_multi_draw")}var wb=1,xb=[],M=[],yb=[],O=[],P=[],Q=[],zb=[],Ab=[],Bb={},Cb={};function R(a){Db||(Db=a)}function Eb(a){for(var b=wb++,c=a.length;c<b;c++)a[c]=null;return b}
function Fb(a,b){a.rc||(a.rc=a.getContext,a.getContext=function(d,e){e=a.rc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.tc?a.getContext("webgl2",b):a.getContext("webgl",b);return c?Gb(c,b):0}function Gb(a,b){var c=Eb(Ab),d={Mc:c,attributes:b,version:b.tc,ic:a};a.canvas&&(a.canvas.Hc=d);Ab[c]=d;("undefined"===typeof b.qc||b.qc)&&Hb(d);return c}
function Hb(a){a||(a=S);if(!a.Gc){a.Gc=!0;var b=a.ic;qb(b);rb(b);sb(b);tb(b);ub(b);2<=a.version&&(b.pc=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.pc)b.pc=b.getExtension("EXT_disjoint_timer_query");vb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var Db,S,Ib=["default","low-power","high-performance"],Jb=[];
function T(a,b,c,d){for(var e=0;e<a;e++){var k=U[c](),g=k&&Eb(d);k?(k.name=g,d[g]=k):R(1282);A[b+4*e>>2]=g}}
function Kb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=U.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>S.version){R(1282);return}c=2*(U.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>S.version){R(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=U.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":R(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:R(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)A[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){R(1280);t("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:R(1280);t("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}A[b>>2]=c}else R(1281)}
function V(a){var b=va(a)+1,c=K(b);x(a,y,c,b);return c}function Lb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function Mb(a){a-=5120;return 0==a?ra:1==a?y:2==a?ya:4==a?A:6==a?B:5==a||28922==a||28520==a||30779==a||30782==a?Aa:za}function W(a){var b=U.Dc;if(b){var c=b.cc[a];"number"===typeof c&&(b.cc[a]=c=U.getUniformLocation(b,b.Bc[a]+(0<c?"["+c+"]":"")));return c}R(1282)}for(var X=[],Y=[],U,Z=0;32>Z;++Z)Jb.push(Array(Z));var Nb=new Float32Array(288);for(Z=0;288>Z;++Z)X[Z]=Nb.subarray(0,Z+1);
var Ob=new Int32Array(288);for(Z=0;288>Z;++Z)Y[Z]=Ob.subarray(0,Z+1);
var Tb={Y:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},ra:function(a,b,c){a=J(a);if(!a)return-4;a=fb(a);C[b>>3]=a.width;C[c>>3]=a.height;return 0},cb:function(a,b,c){y.copyWithin(a,b,b+c)},Qa:function(a,b){function c(d){G(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},db:function(a){var b=y.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(a,d);0<d%65536&&(d+=65536-d%65536);a:{try{oa.grow(Math.min(2147483648,
d)-xa.byteLength+65535>>>16);Ba();var e=1;break a}catch(k){}e=void 0}if(e)return!0}return!1},Z:function(a,b,c,d){gb(a,b,c,d,12,"blur");return 0},V:function(a,b,c){a=J(a);if(!a)return-4;a.width=b;a.height=c;return 0},_:function(a,b,c,d){gb(a,b,c,d,13,"focus");return 0},ha:function(a,b,c,d){hb(a,b,c,d,2,"keydown");return 0},fa:function(a,b,c,d){hb(a,b,c,d,1,"keypress");return 0},ga:function(a,b,c,d){hb(a,b,c,d,3,"keyup");return 0},qa:function(a,b,c,d){L(a,b,c,d,5,"mousedown");return 0},ka:function(a,
b,c,d){L(a,b,c,d,33,"mouseenter");return 0},ja:function(a,b,c,d){L(a,b,c,d,34,"mouseleave");return 0},la:function(a,b,c,d){L(a,b,c,d,8,"mousemove");return 0},pa:function(a,b,c,d){L(a,b,c,d,6,"mouseup");return 0},aa:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.lc||document.body.nc||document.body.mc))return-1;a=J(a);if(!a)return-4;jb(a,b,c,d,"pointerlockchange");jb(a,b,c,d,"mozpointerlockchange");jb(a,b,c,d,"webkitpointerlockchange");jb(a,b,c,d,"mspointerlockchange");
return 0},$:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.lc||document.body.nc||document.body.mc))return-1;a=J(a);if(!a)return-4;kb(a,b,c,d,"pointerlockerror");kb(a,b,c,d,"mozpointerlockerror");kb(a,b,c,d,"webkitpointerlockerror");kb(a,b,c,d,"mspointerlockerror");return 0},bb:function(a,b,c,d){lb(a,b,c,d);return 0},ba:function(a,b,c,d){mb(a,b,c,d,25,"touchcancel");return 0},ca:function(a,b,c,d){mb(a,b,c,d,23,"touchend");return 0},da:function(a,b,c,d){mb(a,b,c,d,
24,"touchmove");return 0},ea:function(a,b,c,d){mb(a,b,c,d,22,"touchstart");return 0},X:function(a,b,c,d){nb(a,b,c,d,31,"webglcontextlost");return 0},W:function(a,b,c,d){nb(a,b,c,d,32,"webglcontextrestored");return 0},ia:function(a,b,c,d){a=J(a);return"undefined"!==typeof a.onwheel?(ob(a,b,c,d),0):-1},L:function(a,b){b>>=2;b={alpha:!!A[b],depth:!!A[b+1],stencil:!!A[b+2],antialias:!!A[b+3],premultipliedAlpha:!!A[b+4],preserveDrawingBuffer:!!A[b+5],powerPreference:Ib[A[b+6]],failIfMajorPerformanceCaveat:!!A[b+
7],tc:A[b+8],Oc:A[b+9],qc:A[b+10],Fc:A[b+11],Qc:A[b+12],Rc:A[b+13]};a=J(a);return!a||b.Fc?0:Fb(a,b)},ya:function(a,b){a=Ab[a];b=z(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&qb(U);"OES_vertex_array_object"==b&&rb(U);"WEBGL_draw_buffers"==b&&sb(U);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&tb(U);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&ub(U);"WEBGL_multi_draw"==b&&vb(U);return!!a.ic.getExtension(b)},Na:function(a){a>>=2;for(var b=0;14>b;++b)A[a+
b]=0;A[a]=A[a+1]=A[a+3]=A[a+4]=A[a+8]=A[a+10]=1},Fa:function(a){S=Ab[a];f.Jc=U=S&&S.ic;return!a||U?0:-5},b:function(a){U.activeTexture(a)},F:function(a,b){U.attachShader(M[a],Q[b])},g:function(a,b){35051==a?U.oc=b:35052==a&&(U.ac=b);U.bindBuffer(a,xb[b])},e:function(a,b){U.bindFramebuffer(a,yb[b])},I:function(a,b){U.bindRenderbuffer(a,O[b])},a:function(a,b){U.bindTexture(a,P[b])},S:function(a){U.bindVertexArray(zb[a])},O:function(a,b,c,d){U.blendColor(a,b,c,d)},P:function(a,b){U.blendEquationSeparate(a,
b)},Q:function(a,b,c,d){U.blendFuncSeparate(a,b,c,d)},v:function(a,b,c,d,e,k,g,m,n,p){U.blitFramebuffer(a,b,c,d,e,k,g,m,n,p)},Ja:function(a,b,c,d){2<=S.version?c?U.bufferData(a,y,d,c,b):U.bufferData(a,b,d):U.bufferData(a,c?y.subarray(c,c+b):b,d)},Ia:function(a,b,c,d){2<=S.version?U.bufferSubData(a,b,y,d,c):U.bufferSubData(a,b,y.subarray(d,d+c))},p:function(a){return U.checkFramebufferStatus(a)},wb:function(a){U.clear(a)},vb:function(a,b,c,d){U.clearBufferfi(a,b,c,d)},oa:function(a,b,c){U.clearBufferfv(a,
b,B,c>>2)},ub:function(a,b,c){U.clearBufferiv(a,b,A,c>>2)},zb:function(a,b,c,d){U.clearColor(a,b,c,d)},yb:function(a){U.clearDepth(a)},xb:function(a){U.clearStencil(a)},n:function(a,b,c,d){U.colorMask(!!a,!!b,!!c,!!d)},ua:function(a){U.compileShader(Q[a])},Ea:function(a,b,c,d,e,k,g,m){2<=S.version?U.ac?U.compressedTexImage2D(a,b,c,d,e,k,g,m):U.compressedTexImage2D(a,b,c,d,e,k,y,m,g):U.compressedTexImage2D(a,b,c,d,e,k,m?y.subarray(m,m+g):null)},Ca:function(a,b,c,d,e,k,g,m,n){U.ac?U.compressedTexImage3D(a,
b,c,d,e,k,g,m,n):U.compressedTexImage3D(a,b,c,d,e,k,g,y,n,m)},Aa:function(){var a=Eb(M),b=U.createProgram();b.name=a;b.hc=b.ec=b.fc=0;b.kc=1;M[a]=b;return a},wa:function(a){var b=Eb(Q);Q[b]=U.createShader(a);return b},K:function(a){U.cullFace(a)},Sa:function(a,b){for(var c=0;c<a;c++){var d=A[b+4*c>>2],e=xb[d];e&&(U.deleteBuffer(e),e.name=0,xb[d]=null,d==U.oc&&(U.oc=0),d==U.ac&&(U.ac=0))}},k:function(a,b){for(var c=0;c<a;++c){var d=A[b+4*c>>2],e=yb[d];e&&(U.deleteFramebuffer(e),e.name=0,yb[d]=null)}},
T:function(a){if(a){var b=M[a];b?(U.deleteProgram(b),b.name=0,M[a]=null):R(1281)}},U:function(a,b){for(var c=0;c<a;c++){var d=A[b+4*c>>2],e=O[d];e&&(U.deleteRenderbuffer(e),e.name=0,O[d]=null)}},x:function(a){if(a){var b=Q[a];b?(U.deleteShader(b),Q[a]=null):R(1281)}},Ra:function(a,b){for(var c=0;c<a;c++){var d=A[b+4*c>>2],e=P[d];e&&(U.deleteTexture(e),e.name=0,P[d]=null)}},Pa:function(a,b){for(var c=0;c<a;c++){var d=A[b+4*c>>2];U.deleteVertexArray(zb[d]);zb[d]=null}},A:function(a){U.depthFunc(a)},
z:function(a){U.depthMask(!!a)},f:function(a){U.disable(a)},R:function(a){U.disableVertexAttribArray(a)},eb:function(a,b,c){U.drawArrays(a,b,c)},fb:function(a,b,c,d){U.drawArraysInstanced(a,b,c,d)},o:function(a,b){for(var c=Jb[a],d=0;d<a;d++)c[d]=A[b+4*d>>2];U.drawBuffers(c)},gb:function(a,b,c,d){U.drawElements(a,b,c,d)},hb:function(a,b,c,d,e){U.drawElementsInstanced(a,b,c,d,e)},i:function(a){U.enable(a)},rb:function(a){U.enableVertexAttribArray(a)},l:function(a,b,c,d){U.framebufferRenderbuffer(a,
b,c,O[d])},c:function(a,b,c,d,e){U.framebufferTexture2D(a,b,c,P[d],e)},j:function(a,b,c,d,e){U.framebufferTextureLayer(a,b,P[c],d,e)},M:function(a){U.frontFace(a)},Ka:function(a,b){T(a,b,"createBuffer",xb)},m:function(a,b){T(a,b,"createFramebuffer",yb)},J:function(a,b){T(a,b,"createRenderbuffer",O)},Ga:function(a,b){T(a,b,"createTexture",P)},Oa:function(a,b){T(a,b,"createVertexArray",zb)},sa:function(a,b){return U.getAttribLocation(M[a],z(b))},d:function(a,b){Kb(a,b)},xa:function(a,b,c,d){a=U.getProgramInfoLog(M[a]);
null===a&&(a="(unknown error)");b=0<b&&d?x(a,y,d,b):0;c&&(A[c>>2]=b)},E:function(a,b,c){if(c)if(a>=wb)R(1281);else if(a=M[a],35716==b)a=U.getProgramInfoLog(a),null===a&&(a="(unknown error)"),A[c>>2]=a.length+1;else if(35719==b){if(!a.hc)for(b=0;b<U.getProgramParameter(a,35718);++b)a.hc=Math.max(a.hc,U.getActiveUniform(a,b).name.length+1);A[c>>2]=a.hc}else if(35722==b){if(!a.ec)for(b=0;b<U.getProgramParameter(a,35721);++b)a.ec=Math.max(a.ec,U.getActiveAttrib(a,b).name.length+1);A[c>>2]=a.ec}else if(35381==
b){if(!a.fc)for(b=0;b<U.getProgramParameter(a,35382);++b)a.fc=Math.max(a.fc,U.getActiveUniformBlockName(a,b).length+1);A[c>>2]=a.fc}else A[c>>2]=U.getProgramParameter(a,b);else R(1281)},ta:function(a,b,c,d){a=U.getShaderInfoLog(Q[a]);null===a&&(a="(unknown error)");b=0<b&&d?x(a,y,d,b):0;c&&(A[c>>2]=b)},C:function(a,b,c){c?35716==b?(a=U.getShaderInfoLog(Q[a]),null===a&&(a="(unknown error)"),A[c>>2]=a?a.length+1:0):35720==b?(a=U.getShaderSource(Q[a]),A[c>>2]=a?a.length+1:0):A[c>>2]=U.getShaderParameter(Q[a],
b):R(1281)},Ua:function(a){var b=Bb[a];if(!b){switch(a){case 7939:b=U.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=V(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=U.getParameter(a))||R(1280);b=b&&V(b);break;case 7938:b=U.getParameter(7938);b=2<=S.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=V(b);break;case 35724:b=U.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),
b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=V(b);break;default:R(1280)}Bb[a]=b}return b},Ta:function(a,b){if(2>S.version)return R(1282),0;var c=Cb[a];if(c)return 0>b||b>=c.length?(R(1281),0):c[b];switch(a){case 7939:return c=U.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return V(d)}),c=Cb[a]=c,0>b||b>=c.length?(R(1281),0):c[b];default:return R(1280),0}},q:function(a,b){b=z(b);if(a=M[a]){var c=a,d=c.cc,e=c.Cc,k;if(!d)for(c.cc=d={},c.Bc={},k=0;k<U.getProgramParameter(c,
35718);++k){var g=U.getActiveUniform(c,k);var m=g.name;g=g.size;var n=Lb(m);n=0<n?m.slice(0,n):m;var p=c.kc;c.kc+=g;e[n]=[g,p];for(m=0;m<g;++m)d[p]=m,c.Bc[p++]=n}c=a.cc;d=0;e=b;k=Lb(b);0<k&&(d=parseInt(b.slice(k+1))>>>0,e=b.slice(0,k));if((e=a.Cc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||U.getUniformLocation(a,b)))return d}else R(1281);return-1},za:function(a){a=M[a];U.linkProgram(a);a.cc=0;a.Cc={}},N:function(a,b){U.polygonOffset(a,b)},w:function(a){U.readBuffer(a)},Ha:function(a,b,c,d){U.renderbufferStorage(a,
b,c,d)},H:function(a,b,c,d,e){U.renderbufferStorageMultisample(a,b,c,d,e)},Ab:function(a,b,c,d){U.scissor(a,b,c,d)},va:function(a,b,c,d){for(var e="",k=0;k<b;++k){var g=d?A[d+4*k>>2]:-1;e+=z(A[c+4*k>>2],0>g?void 0:g)}U.shaderSource(Q[a],e)},Ma:function(a,b,c){U.stencilFunc(a,b,c)},na:function(a,b,c,d){U.stencilFuncSeparate(a,b,c,d)},y:function(a){U.stencilMask(a)},La:function(a,b,c){U.stencilOp(a,b,c)},ma:function(a,b,c,d){U.stencilOpSeparate(a,b,c,d)},Da:function(a,b,c,d,e,k,g,m,n){if(2<=S.version)if(U.ac)U.texImage2D(a,
b,c,d,e,k,g,m,n);else if(n){var p=Mb(m);U.texImage2D(a,b,c,d,e,k,g,m,p,n>>31-Math.clz32(p.BYTES_PER_ELEMENT))}else U.texImage2D(a,b,c,d,e,k,g,m,null);else{p=U;var r=p.texImage2D;if(n){var w=Mb(m),N=31-Math.clz32(w.BYTES_PER_ELEMENT);n=w.subarray(n>>N,n+e*(d*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[g-6402]||1)*(1<<N)+4-1&-4)>>N)}else n=null;r.call(p,a,b,c,d,e,k,g,m,n)}},Ba:function(a,b,c,d,e,k,g,m,n,p){if(U.ac)U.texImage3D(a,b,c,d,e,k,g,m,n,p);else if(p){var r=Mb(n);U.texImage3D(a,
b,c,d,e,k,g,m,n,r,p>>31-Math.clz32(r.BYTES_PER_ELEMENT))}else U.texImage3D(a,b,c,d,e,k,g,m,n,null)},G:function(a,b,c){U.texParameterf(a,b,c)},h:function(a,b,c){U.texParameteri(a,b,c)},qb:function(a,b,c){if(2<=S.version)U.uniform1fv(W(a),B,c>>2,b);else{if(288>=b)for(var d=X[b-1],e=0;e<b;++e)d[e]=B[c+4*e>>2];else d=B.subarray(c>>2,c+4*b>>2);U.uniform1fv(W(a),d)}},D:function(a,b){U.uniform1i(W(a),b)},mb:function(a,b,c){if(2<=S.version)U.uniform1iv(W(a),A,c>>2,b);else{if(288>=b)for(var d=Y[b-1],e=0;e<
b;++e)d[e]=A[c+4*e>>2];else d=A.subarray(c>>2,c+4*b>>2);U.uniform1iv(W(a),d)}},pb:function(a,b,c){if(2<=S.version)U.uniform2fv(W(a),B,c>>2,2*b);else{if(144>=b)for(var d=X[2*b-1],e=0;e<2*b;e+=2)d[e]=B[c+4*e>>2],d[e+1]=B[c+(4*e+4)>>2];else d=B.subarray(c>>2,c+8*b>>2);U.uniform2fv(W(a),d)}},lb:function(a,b,c){if(2<=S.version)U.uniform2iv(W(a),A,c>>2,2*b);else{if(144>=b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=A[c+4*e>>2],d[e+1]=A[c+(4*e+4)>>2];else d=A.subarray(c>>2,c+8*b>>2);U.uniform2iv(W(a),d)}},ob:function(a,
b,c){if(2<=S.version)U.uniform3fv(W(a),B,c>>2,3*b);else{if(96>=b)for(var d=X[3*b-1],e=0;e<3*b;e+=3)d[e]=B[c+4*e>>2],d[e+1]=B[c+(4*e+4)>>2],d[e+2]=B[c+(4*e+8)>>2];else d=B.subarray(c>>2,c+12*b>>2);U.uniform3fv(W(a),d)}},kb:function(a,b,c){if(2<=S.version)U.uniform3iv(W(a),A,c>>2,3*b);else{if(96>=b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=A[c+4*e>>2],d[e+1]=A[c+(4*e+4)>>2],d[e+2]=A[c+(4*e+8)>>2];else d=A.subarray(c>>2,c+12*b>>2);U.uniform3iv(W(a),d)}},nb:function(a,b,c){if(2<=S.version)U.uniform4fv(W(a),
B,c>>2,4*b);else{if(72>=b){var d=X[4*b-1],e=B;c>>=2;for(var k=0;k<4*b;k+=4){var g=c+k;d[k]=e[g];d[k+1]=e[g+1];d[k+2]=e[g+2];d[k+3]=e[g+3]}}else d=B.subarray(c>>2,c+16*b>>2);U.uniform4fv(W(a),d)}},jb:function(a,b,c){if(2<=S.version)U.uniform4iv(W(a),A,c>>2,4*b);else{if(72>=b)for(var d=Y[4*b-1],e=0;e<4*b;e+=4)d[e]=A[c+4*e>>2],d[e+1]=A[c+(4*e+4)>>2],d[e+2]=A[c+(4*e+8)>>2],d[e+3]=A[c+(4*e+12)>>2];else d=A.subarray(c>>2,c+16*b>>2);U.uniform4iv(W(a),d)}},ib:function(a,b,c,d){if(2<=S.version)U.uniformMatrix4fv(W(a),
!!c,B,d>>2,16*b);else{if(18>=b){var e=X[16*b-1],k=B;d>>=2;for(var g=0;g<16*b;g+=16){var m=d+g;e[g]=k[m];e[g+1]=k[m+1];e[g+2]=k[m+2];e[g+3]=k[m+3];e[g+4]=k[m+4];e[g+5]=k[m+5];e[g+6]=k[m+6];e[g+7]=k[m+7];e[g+8]=k[m+8];e[g+9]=k[m+9];e[g+10]=k[m+10];e[g+11]=k[m+11];e[g+12]=k[m+12];e[g+13]=k[m+13];e[g+14]=k[m+14];e[g+15]=k[m+15]}}else e=B.subarray(d>>2,d+64*b>>2);U.uniformMatrix4fv(W(a),!!c,e)}},r:function(a){a=M[a];U.useProgram(a);U.Dc=a},sb:function(a,b){U.vertexAttribDivisor(a,b)},tb:function(a,b,c,
d,e,k){U.vertexAttribPointer(a,b,c,!!d,e,k)},Bb:function(a,b,c,d){U.viewport(a,b,c,d)},ab:function(){f.vc=function(a){0!=Pb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",f.vc)},$a:function(){f.Ac=function(a){a=a.clipboardData.getData("text");qa("_sapp_emsc_onpaste",["string"],[a])};window.addEventListener("paste",f.Ac)},_a:function(a){f.Sc=[];a=z(a);a=document.getElementById(a);f.wc=function(b){b.stopPropagation();b.preventDefault()};f.xc=function(b){b.stopPropagation();
b.preventDefault()};f.yc=function(b){b.stopPropagation();b.preventDefault()};f.zc=function(b){b.stopPropagation();b.preventDefault();var c=b.dataTransfer.files;f.Tc=c;Qb(c.length);var d;for(d=0;d<c.length;d++)qa("_sapp_emsc_drop",["number","string"],[d,c[d].name]);Rb(b.clientX,b.clientY)};a.addEventListener("dragenter",f.wc,!1);a.addEventListener("dragleave",f.xc,!1);a.addEventListener("dragover",f.yc,!1);a.addEventListener("drop",f.zc,!1)},Wa:function(){var a=document.getElementById("sokol-app-favicon");
a&&document.head.removeChild(a)},u:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Sb()});document.body.append(a)},t:function(){document.getElementById("_sokol_app_input_element").focus()},Cb:function(a){a=z(a);f.bc=document.getElementById(a);f.bc||console.log("sokol_app.h: invalid target:"+a);f.bc.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+
a)},Za:function(){window.removeEventListener("beforeunload",f.vc)},Ya:function(){window.removeEventListener("paste",f.Ac)},Xa:function(a){a=z(a);a=document.getElementById(a);a.removeEventListener("dragenter",f.wc);a.removeEventListener("dragleave",f.xc);a.removeEventListener("dragover",f.yc);a.removeEventListener("drop",f.zc)},B:function(){f.bc&&f.bc.requestPointerLock&&f.bc.requestPointerLock()},Va:function(a,b,c){var d=document.createElement("canvas");d.width=a;d.height=b;var e=d.getContext("2d"),
k=e.createImageData(a,b);k.data.set(y.subarray(c,c+a*b*4));e.putImageData(k,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},s:function(){document.getElementById("_sokol_app_input_element").blur()}};
(function(){function a(e){f.asm=e.exports;oa=f.asm.Db;Ba();Ca=f.asm.Wb;Ea.unshift(f.asm.Eb);D--;f.monitorRunDependencies&&f.monitorRunDependencies(D);0==D&&(null!==Ja&&(clearInterval(Ja),Ja=null),E&&(e=E,E=null,e()))}function b(e){a(e.instance)}function c(e){return Na().then(function(k){return WebAssembly.instantiate(k,d)}).then(function(k){return k}).then(e,function(k){t("failed to asynchronously prepare wasm: "+k);na(k)})}var d={a:Tb};D++;f.monitorRunDependencies&&f.monitorRunDependencies(D);if(f.instantiateWasm)try{return f.instantiateWasm(d,
a)}catch(e){return t("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return u||"function"!==typeof WebAssembly.instantiateStreaming||Ka()||F.startsWith("file://")||"function"!==typeof fetch?c(b):fetch(F,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(k){t("wasm streaming compile failed: "+k);t("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
f.___wasm_call_ctors=function(){return(f.___wasm_call_ctors=f.asm.Eb).apply(null,arguments)};var Sb=f.__sapp_emsc_notify_keyboard_hidden=function(){return(Sb=f.__sapp_emsc_notify_keyboard_hidden=f.asm.Fb).apply(null,arguments)};f.__sapp_emsc_onpaste=function(){return(f.__sapp_emsc_onpaste=f.asm.Gb).apply(null,arguments)};
var Pb=f.__sapp_html5_get_ask_leave_site=function(){return(Pb=f.__sapp_html5_get_ask_leave_site=f.asm.Hb).apply(null,arguments)},Qb=f.__sapp_emsc_begin_drop=function(){return(Qb=f.__sapp_emsc_begin_drop=f.asm.Ib).apply(null,arguments)};f.__sapp_emsc_drop=function(){return(f.__sapp_emsc_drop=f.asm.Jb).apply(null,arguments)};var Rb=f.__sapp_emsc_end_drop=function(){return(Rb=f.__sapp_emsc_end_drop=f.asm.Kb).apply(null,arguments)};
f.__sapp_emsc_invoke_fetch_cb=function(){return(f.__sapp_emsc_invoke_fetch_cb=f.asm.Lb).apply(null,arguments)};f._main=function(){return(f._main=f.asm.Mb).apply(null,arguments)};f.__saudio_emsc_pull=function(){return(f.__saudio_emsc_pull=f.asm.Nb).apply(null,arguments)};f.__sfetch_emsc_head_response=function(){return(f.__sfetch_emsc_head_response=f.asm.Ob).apply(null,arguments)};f.__sfetch_emsc_get_response=function(){return(f.__sfetch_emsc_get_response=f.asm.Pb).apply(null,arguments)};
f.__sfetch_emsc_failed_http_status=function(){return(f.__sfetch_emsc_failed_http_status=f.asm.Qb).apply(null,arguments)};f.__sfetch_emsc_failed_buffer_too_small=function(){return(f.__sfetch_emsc_failed_buffer_too_small=f.asm.Rb).apply(null,arguments)};
var K=f._malloc=function(){return(K=f._malloc=f.asm.Sb).apply(null,arguments)},sa=f.stackSave=function(){return(sa=f.stackSave=f.asm.Tb).apply(null,arguments)},ta=f.stackRestore=function(){return(ta=f.stackRestore=f.asm.Ub).apply(null,arguments)},v=f.stackAlloc=function(){return(v=f.stackAlloc=f.asm.Vb).apply(null,arguments)},Ub;function la(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}E=function Vb(){Ub||Wb();Ub||(E=Vb)};
function Wb(a){function b(){if(!Ub&&(Ub=!0,f.calledRun=!0,!pa)){Oa(Ea);Oa(Fa);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if(Xb){var c=a,d=f._main;c=c||[];var e=c.length+1,k=v(4*(e+1));A[k>>2]=wa(da);for(var g=1;g<e;g++)A[(k>>2)+g]=wa(c[g-1]);A[(k>>2)+e]=0;try{var m=d(e,k);if(!(noExitRuntime||0<ma)){if(f.onExit)f.onExit(m);pa=!0}h(m,new la(m))}catch(n){n instanceof la||"unwind"==n||h(1,n)}finally{}}if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;)c=f.postRun.shift(),
Ha.unshift(c);Oa(Ha)}}a=a||ca;if(!(0<D)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Ia();Oa(Da);0<D||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},1)):b())}}f.run=Wb;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var Xb=!0;f.noInitialRun&&(Xb=!1);Wb();
