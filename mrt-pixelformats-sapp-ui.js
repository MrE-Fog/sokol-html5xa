
var f;f||(f=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign,ba=aa({},f),ca=[],da="./this.program",h=(a,b)=>{throw b;},ea="object"===typeof window,l="function"===typeof importScripts,q="",fa,ha,ia,fs,ja,ka;
if("object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)q=l?require("path").dirname(q)+"/":__dirname+"/",ka=function(){ja||(fs=require("fs"),ja=require("path"))},fa=function(a,b){ka();a=ja.normalize(a);return fs.readFileSync(a,b?null:"utf8")},ia=function(a){a=fa(a,!0);a.buffer||(a=new Uint8Array(a));return a},ha=function(a,b,c){ka();a=ja.normalize(a);fs.readFile(a,function(d,e){d?c(d):b(e.buffer)})},1<process.argv.length&&(da=process.argv[1].replace(/\\/g,
"/")),ca=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=f),process.on("uncaughtException",function(a){if(!(a instanceof la))throw a;}),process.on("unhandledRejection",function(a){throw a;}),h=(a,b)=>{if(noExitRuntime||0<ma)throw process.exitCode=a,b;b instanceof la||t("exiting due to exception: "+b);process.exit(a)},f.inspect=function(){return"[Emscripten Module object]"};else if(ea||l)l?q=self.location.href:"undefined"!==typeof document&&document.currentScript&&(q=document.currentScript.src),
q=0!==q.indexOf("blob:")?q.substr(0,q.replace(/[?#].*/,"").lastIndexOf("/")+1):"",fa=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},l&&(ia=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),ha=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};
var na=f.print||console.log.bind(console),t=f.printErr||console.warn.bind(console);aa(f,ba);ba=null;f.arguments&&(ca=f.arguments);f.thisProgram&&(da=f.thisProgram);f.quit&&(h=f.quit);var u;f.wasmBinary&&(u=f.wasmBinary);var noExitRuntime=f.noExitRuntime||!0;"object"!==typeof WebAssembly&&oa("no native wasm support detected");var pa,qa=!1;
function ra(a,b,c){var d={string:function(n){var p=0;if(null!==n&&void 0!==n&&0!==n){var r=(n.length<<2)+1;p=v(r);x(n,y,p,r)}return p},array:function(n){var p=v(n.length);sa.set(n,p);return p}};a=f["_"+a];var e=[],k=0;if(c)for(var g=0;g<c.length;g++){var m=d[b[g]];m?(0===k&&(k=ta()),e[g]=m(c[g])):e[g]=c[g]}b=a.apply(null,e);b=function(n){0!==k&&ua(k);return n}(b)}var va="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function wa(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&va)return va.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var k=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|k);else{var g=a[b++]&63;e=224==(e&240)?(e&15)<<12|k<<6|g:(e&7)<<18|k<<12|g<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function z(a,b){return a?wa(y,a,b):""}
function x(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var k=0;k<a.length;++k){var g=a.charCodeAt(k);if(55296<=g&&57343>=g){var m=a.charCodeAt(++k);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-e}
function xa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function ya(a){var b=xa(a)+1,c=v(b);x(a,sa,c,b);return c}var za,sa,y,Aa,Ba,A,Ca,B,C;
function Da(){var a=pa.buffer;za=a;f.HEAP8=sa=new Int8Array(a);f.HEAP16=Aa=new Int16Array(a);f.HEAP32=A=new Int32Array(a);f.HEAPU8=y=new Uint8Array(a);f.HEAPU16=Ba=new Uint16Array(a);f.HEAPU32=Ca=new Uint32Array(a);f.HEAPF32=B=new Float32Array(a);f.HEAPF64=C=new Float64Array(a)}var Ea,Fa=[],Ga=[],Ha=[],Ia=[],Ja=[],ma=0;function Ka(){var a=f.preRun.shift();Fa.unshift(a)}var D=0,La=null,E=null;f.preloadedImages={};f.preloadedAudios={};
function oa(a){if(f.onAbort)f.onAbort(a);a="Aborted("+a+")";t(a);qa=!0;throw new WebAssembly.RuntimeError(a+". Build with -s ASSERTIONS=1 for more info.");}function Ma(){return F.startsWith("data:application/octet-stream;base64,")}var F;F="mrt-pixelformats-sapp-ui.wasm";if(!Ma()){var Na=F;F=f.locateFile?f.locateFile(Na,q):q+Na}function Oa(){var a=F;try{if(a==F&&u)return new Uint8Array(u);if(ia)return ia(a);throw"both async and sync fetching of the wasm failed";}catch(b){oa(b)}}
function Pa(){if(!u&&(ea||l)){if("function"===typeof fetch&&!F.startsWith("file://"))return fetch(F,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+F+"'";return a.arrayBuffer()}).catch(function(){return Oa()});if(ha)return new Promise(function(a,b){ha(F,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Oa()})}
function Qa(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(f);else{var c=b.Uc;"number"===typeof c?void 0===b.rc?G(c)():G(c)(b.rc):c(void 0===b.rc?null:b.rc)}}}var Ra=[];function G(a){var b=Ra[a];b||(a>=Ra.length&&(Ra.length=a+1),Ra[a]=b=Ea.get(a));return b}var Sa=[null,[],[]],Ta={},Ua=0;function Va(){for(var a=H.length-1;0<=a;--a)Wa(a);H=[];Xa=[]}var Xa=[];function Ya(){if(Ua&&Za.mc)for(var a=0;a<Xa.length;++a){var b=Xa[a];Xa.splice(a,1);--a;b.dd.apply(null,b.Qc)}}var H=[];
function Wa(a){var b=H[a];b.target.removeEventListener(b.ec,b.Mc,b.fc);H.splice(a,1)}function I(a){function b(d){++Ua;Za=a;Ya();a.ic(d);Ya();--Ua}if(a.hc)a.Mc=b,a.target.addEventListener(a.ec,b,a.fc),H.push(a),$a||(Ia.push(Va),$a=!0);else for(var c=0;c<H.length;++c)H[c].target==a.target&&H[c].ec==a.ec&&Wa(c--)}function ab(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}
var $a,Za,bb,cb,db,eb,fb,gb,hb,ib=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function J(a){a=2<a?z(a):a;return ib[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}function jb(a){return 0>ib.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}
function kb(a,b,c,d,e,k){bb||(bb=K(256));a={target:J(a),ec:k,hc:d,ic:function(g){g=g||event;var m=g.target.id?g.target.id:"",n=bb;x(ab(g.target),y,n+0,128);x(m,y,n+128,128);G(d)(e,n,b)&&g.preventDefault()},fc:c};I(a)}
function lb(a,b,c,d,e,k){cb||(cb=K(176));a={target:J(a),mc:!0,ec:k,hc:d,ic:function(g){var m=cb;C[m>>3]=g.timeStamp;var n=m>>2;A[n+2]=g.location;A[n+3]=g.ctrlKey;A[n+4]=g.shiftKey;A[n+5]=g.altKey;A[n+6]=g.metaKey;A[n+7]=g.repeat;A[n+8]=g.charCode;A[n+9]=g.keyCode;A[n+10]=g.which;x(g.key||"",y,m+44,32);x(g.code||"",y,m+76,32);x(g.char||"",y,m+108,32);x(g.locale||"",y,m+140,32);G(d)(e,m,b)&&g.preventDefault()},fc:c};I(a)}
function mb(a,b,c){C[a>>3]=b.timeStamp;a>>=2;A[a+2]=b.screenX;A[a+3]=b.screenY;A[a+4]=b.clientX;A[a+5]=b.clientY;A[a+6]=b.ctrlKey;A[a+7]=b.shiftKey;A[a+8]=b.altKey;A[a+9]=b.metaKey;Aa[2*a+20]=b.button;Aa[2*a+21]=b.buttons;A[a+11]=b.movementX;A[a+12]=b.movementY;c=jb(c);A[a+13]=b.clientX-c.left;A[a+14]=b.clientY-c.top}
function L(a,b,c,d,e,k){db||(db=K(72));a=J(a);I({target:a,mc:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,ec:k,hc:d,ic:function(g){g=g||event;mb(db,g,a);G(d)(e,db,b)&&g.preventDefault()},fc:c})}function nb(a,b,c,d,e){eb||(eb=K(260));I({target:a,ec:e,hc:d,ic:function(k){k=k||event;var g=eb,m=document.pointerLockElement||document.vc||document.zc||document.xc;A[g>>2]=!!m;var n=m&&m.id?m.id:"";x(ab(m),y,g+4,128);x(n,y,g+132,128);G(d)(20,g,b)&&k.preventDefault()},fc:c})}
function ob(a,b,c,d,e){I({target:a,ec:e,hc:d,ic:function(k){k=k||event;G(d)(38,0,b)&&k.preventDefault()},fc:c})}
function pb(a,b,c,d){fb||(fb=K(36));a=J(a);I({target:a,ec:"resize",hc:d,ic:function(e){e=e||event;if(e.target==a){var k=document.body;if(k){var g=fb;A[g>>2]=e.detail;A[g+4>>2]=k.clientWidth;A[g+8>>2]=k.clientHeight;A[g+12>>2]=innerWidth;A[g+16>>2]=innerHeight;A[g+20>>2]=outerWidth;A[g+24>>2]=outerHeight;A[g+28>>2]=pageXOffset;A[g+32>>2]=pageYOffset;G(d)(10,g,b)&&e.preventDefault()}}},fc:c})}
function qb(a,b,c,d,e,k){gb||(gb=K(1696));a=J(a);I({target:a,mc:"touchstart"==k||"touchend"==k,ec:k,hc:d,ic:function(g){for(var m,n={},p=g.touches,r=0;r<p.length;++r)m=p[r],m.Ac=m.Cc=0,n[m.identifier]=m;for(r=0;r<g.changedTouches.length;++r)m=g.changedTouches[r],m.Ac=1,n[m.identifier]=m;for(r=0;r<g.targetTouches.length;++r)n[g.targetTouches[r].identifier].Cc=1;p=gb;C[p>>3]=g.timeStamp;var w=p>>2;A[w+3]=g.ctrlKey;A[w+4]=g.shiftKey;A[w+5]=g.altKey;A[w+6]=g.metaKey;w+=7;var N=jb(a),rb=0;for(r in n)if(m=
n[r],A[w]=m.identifier,A[w+1]=m.screenX,A[w+2]=m.screenY,A[w+3]=m.clientX,A[w+4]=m.clientY,A[w+5]=m.pageX,A[w+6]=m.pageY,A[w+7]=m.Ac,A[w+8]=m.Cc,A[w+9]=m.clientX-N.left,A[w+10]=m.clientY-N.top,w+=13,31<++rb)break;A[p+8>>2]=rb;G(d)(e,p,b)&&g.preventDefault()},fc:c})}function sb(a,b,c,d,e,k){a={target:J(a),ec:k,hc:d,ic:function(g){g=g||event;G(d)(e,0,b)&&g.preventDefault()},fc:c};I(a)}
function tb(a,b,c,d){hb||(hb=K(104));I({target:a,mc:!0,ec:"wheel",hc:d,ic:function(e){e=e||event;var k=hb;mb(k,e,a);C[k+72>>3]=e.deltaX;C[k+80>>3]=e.deltaY;C[k+88>>3]=e.deltaZ;A[k+96>>2]=e.deltaMode;G(d)(9,k,b)&&e.preventDefault()},fc:c})}
function ub(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,k){b.drawArraysInstancedANGLE(c,d,e,k)},a.drawElementsInstanced=function(c,d,e,k,g){b.drawElementsInstancedANGLE(c,d,e,k,g)})}
function vb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function wb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function xb(a){a.Sc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function yb(a){a.Xc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function zb(a){a.Zc=a.getExtension("WEBGL_multi_draw")}var Ab=1,Bb=[],M=[],Cb=[],O=[],P=[],Q=[],Db=[],Eb=[],Fb={},Gb={};function R(a){Hb||(Hb=a)}function Ib(a){for(var b=Ab++,c=a.length;c<b;c++)a[c]=null;return b}
function Jb(a,b){a.yc||(a.yc=a.getContext,a.getContext=function(d,e){e=a.yc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.Bc?a.getContext("webgl2",b):a.getContext("webgl",b);return c?Kb(c,b):0}function Kb(a,b){var c=Ib(Eb),d={Wc:c,attributes:b,version:b.Bc,qc:a};a.canvas&&(a.canvas.Pc=d);Eb[c]=d;("undefined"===typeof b.wc||b.wc)&&Lb(d);return c}
function Lb(a){a||(a=S);if(!a.Oc){a.Oc=!0;var b=a.qc;ub(b);vb(b);wb(b);xb(b);yb(b);2<=a.version&&(b.uc=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.uc)b.uc=b.getExtension("EXT_disjoint_timer_query");zb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var Hb,S,Mb=["default","low-power","high-performance"],Nb=[];
function T(a,b,c,d){for(var e=0;e<a;e++){var k=U[c](),g=k&&Ib(d);k?(k.name=g,d[g]=k):R(1282);A[b+4*e>>2]=g}}
function Ob(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=U.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>S.version){R(1282);return}c=2*(U.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>S.version){R(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=U.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":R(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:R(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)A[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){R(1280);t("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:R(1280);t("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}A[b>>2]=c}else R(1281)}
function V(a){var b=xa(a)+1,c=K(b);x(a,y,c,b);return c}function Pb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function Qb(a){a-=5120;return 0==a?sa:1==a?y:2==a?Aa:4==a?A:6==a?B:5==a||28922==a||28520==a||30779==a||30782==a?Ca:Ba}function W(a){var b=U.Lc;if(b){var c=b.lc[a];"number"===typeof c&&(b.lc[a]=c=U.getUniformLocation(b,b.Jc[a]+(0<c?"["+c+"]":"")));return c}R(1282)}for(var X=[],Y=[],U,Z=0;32>Z;++Z)Nb.push(Array(Z));var Rb=new Float32Array(288);for(Z=0;288>Z;++Z)X[Z]=Rb.subarray(0,Z+1);
var Sb=new Int32Array(288);for(Z=0;288>Z;++Z)Y[Z]=Sb.subarray(0,Z+1);
var Xb={oa:function(){return 0},nb:function(){return 0},ob:function(){},$:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},xa:function(a,b,c){a=J(a);if(!a)return-4;a=jb(a);C[b>>3]=a.width;C[c>>3]=a.height;return 0},jb:function(a,b,c){y.copyWithin(a,b,b+c)},Va:function(a,b){function c(d){G(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},kb:function(a){var b=y.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);
d=Math.max(a,d);0<d%65536&&(d+=65536-d%65536);a:{try{pa.grow(Math.min(2147483648,d)-za.byteLength+65535>>>16);Da();var e=1;break a}catch(k){}e=void 0}if(e)return!0}return!1},aa:function(a,b,c,d){kb(a,b,c,d,12,"blur");return 0},Y:function(a,b,c){a=J(a);if(!a)return-4;a.width=b;a.height=c;return 0},ba:function(a,b,c,d){kb(a,b,c,d,13,"focus");return 0},ka:function(a,b,c,d){lb(a,b,c,d,2,"keydown");return 0},ia:function(a,b,c,d){lb(a,b,c,d,1,"keypress");return 0},ja:function(a,b,c,d){lb(a,b,c,d,3,"keyup");
return 0},wa:function(a,b,c,d){L(a,b,c,d,5,"mousedown");return 0},qa:function(a,b,c,d){L(a,b,c,d,33,"mouseenter");return 0},na:function(a,b,c,d){L(a,b,c,d,34,"mouseleave");return 0},ra:function(a,b,c,d){L(a,b,c,d,8,"mousemove");return 0},va:function(a,b,c,d){L(a,b,c,d,6,"mouseup");return 0},da:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.vc||document.body.zc||document.body.xc))return-1;a=J(a);if(!a)return-4;nb(a,b,c,d,"pointerlockchange");nb(a,
b,c,d,"mozpointerlockchange");nb(a,b,c,d,"webkitpointerlockchange");nb(a,b,c,d,"mspointerlockchange");return 0},ca:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.vc||document.body.zc||document.body.xc))return-1;a=J(a);if(!a)return-4;ob(a,b,c,d,"pointerlockerror");ob(a,b,c,d,"mozpointerlockerror");ob(a,b,c,d,"webkitpointerlockerror");ob(a,b,c,d,"mspointerlockerror");return 0},hb:function(a,b,c,d){pb(a,b,c,d);return 0},ea:function(a,b,c,d){qb(a,b,c,d,25,"touchcancel");
return 0},fa:function(a,b,c,d){qb(a,b,c,d,23,"touchend");return 0},ga:function(a,b,c,d){qb(a,b,c,d,24,"touchmove");return 0},ha:function(a,b,c,d){qb(a,b,c,d,22,"touchstart");return 0},_:function(a,b,c,d){sb(a,b,c,d,31,"webglcontextlost");return 0},Z:function(a,b,c,d){sb(a,b,c,d,32,"webglcontextrestored");return 0},la:function(a,b,c,d){a=J(a);return"undefined"!==typeof a.onwheel?(tb(a,b,c,d),0):-1},Q:function(a,b){b>>=2;b={alpha:!!A[b],depth:!!A[b+1],stencil:!!A[b+2],antialias:!!A[b+3],premultipliedAlpha:!!A[b+
4],preserveDrawingBuffer:!!A[b+5],powerPreference:Mb[A[b+6]],failIfMajorPerformanceCaveat:!!A[b+7],Bc:A[b+8],Yc:A[b+9],wc:A[b+10],Nc:A[b+11],$c:A[b+12],ad:A[b+13]};a=J(a);return!a||b.Nc?0:Jb(a,b)},Ea:function(a,b){a=Eb[a];b=z(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&ub(U);"OES_vertex_array_object"==b&&vb(U);"WEBGL_draw_buffers"==b&&wb(U);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&xb(U);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&yb(U);"WEBGL_multi_draw"==
b&&zb(U);return!!a.qc.getExtension(b)},Sa:function(a){a>>=2;for(var b=0;14>b;++b)A[a+b]=0;A[a]=A[a+1]=A[a+3]=A[a+4]=A[a+8]=A[a+10]=1},La:function(a){S=Eb[a];f.Rc=U=S&&S.qc;return!a||U?0:-5},ma:function(){return 0},mb:function(a,b,c,d){a=Ta.Vc(a);b=Ta.Tc(a,b,c);A[d>>2]=b;return 0},ib:function(){},lb:function(a,b,c,d){for(var e=0,k=0;k<c;k++){var g=A[b>>2],m=A[b+4>>2];b+=8;for(var n=0;n<m;n++){var p=y[g+n],r=Sa[a];0===p||10===p?((1===a?na:t)(wa(r,0)),r.length=0):r.push(p)}e+=m}A[d>>2]=e;return 0},b:function(a){U.activeTexture(a)},
J:function(a,b){U.attachShader(M[a],Q[b])},d:function(a,b){35051==a?U.tc=b:35052==a&&(U.jc=b);U.bindBuffer(a,Bb[b])},f:function(a,b){U.bindFramebuffer(a,Cb[b])},M:function(a,b){U.bindRenderbuffer(a,O[b])},a:function(a,b){U.bindTexture(a,P[b])},W:function(a){U.bindVertexArray(Db[a])},S:function(a,b,c,d){U.blendColor(a,b,c,d)},T:function(a,b){U.blendEquationSeparate(a,b)},U:function(a,b,c,d){U.blendFuncSeparate(a,b,c,d)},x:function(a,b,c,d,e,k,g,m,n,p){U.blitFramebuffer(a,b,c,d,e,k,g,m,n,p)},Oa:function(a,
b,c,d){2<=S.version?c?U.bufferData(a,y,d,c,b):U.bufferData(a,b,d):U.bufferData(a,c?y.subarray(c,c+b):b,d)},t:function(a,b,c,d){2<=S.version?U.bufferSubData(a,b,y,d,c):U.bufferSubData(a,b,y.subarray(d,d+c))},q:function(a){return U.checkFramebufferStatus(a)},Hb:function(a){U.clear(a)},Gb:function(a,b,c,d){U.clearBufferfi(a,b,c,d)},ua:function(a,b,c){U.clearBufferfv(a,b,B,c>>2)},Fb:function(a,b,c){U.clearBufferiv(a,b,A,c>>2)},Kb:function(a,b,c,d){U.clearColor(a,b,c,d)},Jb:function(a){U.clearDepth(a)},
Ib:function(a){U.clearStencil(a)},n:function(a,b,c,d){U.colorMask(!!a,!!b,!!c,!!d)},Aa:function(a){U.compileShader(Q[a])},Ka:function(a,b,c,d,e,k,g,m){2<=S.version?U.jc?U.compressedTexImage2D(a,b,c,d,e,k,g,m):U.compressedTexImage2D(a,b,c,d,e,k,y,m,g):U.compressedTexImage2D(a,b,c,d,e,k,m?y.subarray(m,m+g):null)},Ia:function(a,b,c,d,e,k,g,m,n){U.jc?U.compressedTexImage3D(a,b,c,d,e,k,g,m,n):U.compressedTexImage3D(a,b,c,d,e,k,g,y,n,m)},Ga:function(){var a=Ib(M),b=U.createProgram();b.name=a;b.pc=b.nc=
b.oc=0;b.sc=1;M[a]=b;return a},Ca:function(a){var b=Ib(Q);Q[b]=U.createShader(a);return b},O:function(a){U.cullFace(a)},Xa:function(a,b){for(var c=0;c<a;c++){var d=A[b+4*c>>2],e=Bb[d];e&&(U.deleteBuffer(e),e.name=0,Bb[d]=null,d==U.tc&&(U.tc=0),d==U.jc&&(U.jc=0))}},l:function(a,b){for(var c=0;c<a;++c){var d=A[b+4*c>>2],e=Cb[d];e&&(U.deleteFramebuffer(e),e.name=0,Cb[d]=null)}},E:function(a){if(a){var b=M[a];b?(U.deleteProgram(b),b.name=0,M[a]=null):R(1281)}},X:function(a,b){for(var c=0;c<a;c++){var d=
A[b+4*c>>2],e=O[d];e&&(U.deleteRenderbuffer(e),e.name=0,O[d]=null)}},A:function(a){if(a){var b=Q[a];b?(U.deleteShader(b),Q[a]=null):R(1281)}},Wa:function(a,b){for(var c=0;c<a;c++){var d=A[b+4*c>>2],e=P[d];e&&(U.deleteTexture(e),e.name=0,P[d]=null)}},Ua:function(a,b){for(var c=0;c<a;c++){var d=A[b+4*c>>2];U.deleteVertexArray(Db[d]);Db[d]=null}},D:function(a){U.depthFunc(a)},C:function(a){U.depthMask(!!a)},g:function(a){U.disable(a)},V:function(a){U.disableVertexAttribArray(a)},pb:function(a,b,c){U.drawArrays(a,
b,c)},qb:function(a,b,c,d){U.drawArraysInstanced(a,b,c,d)},p:function(a,b){for(var c=Nb[a],d=0;d<a;d++)c[d]=A[b+4*d>>2];U.drawBuffers(c)},rb:function(a,b,c,d){U.drawElements(a,b,c,d)},sb:function(a,b,c,d,e){U.drawElementsInstanced(a,b,c,d,e)},i:function(a){U.enable(a)},Cb:function(a){U.enableVertexAttribArray(a)},m:function(a,b,c,d){U.framebufferRenderbuffer(a,b,c,O[d])},c:function(a,b,c,d,e){U.framebufferTexture2D(a,b,c,P[d],e)},k:function(a,b,c,d,e){U.framebufferTextureLayer(a,b,P[c],d,e)},P:function(a){U.frontFace(a)},
Pa:function(a,b){T(a,b,"createBuffer",Bb)},r:function(a,b){T(a,b,"createFramebuffer",Cb)},N:function(a,b){T(a,b,"createRenderbuffer",O)},Ma:function(a,b){T(a,b,"createTexture",P)},Ta:function(a,b){T(a,b,"createVertexArray",Db)},ya:function(a,b){return U.getAttribLocation(M[a],z(b))},e:function(a,b){Ob(a,b)},Da:function(a,b,c,d){a=U.getProgramInfoLog(M[a]);null===a&&(a="(unknown error)");b=0<b&&d?x(a,y,d,b):0;c&&(A[c>>2]=b)},I:function(a,b,c){if(c)if(a>=Ab)R(1281);else if(a=M[a],35716==b)a=U.getProgramInfoLog(a),
null===a&&(a="(unknown error)"),A[c>>2]=a.length+1;else if(35719==b){if(!a.pc)for(b=0;b<U.getProgramParameter(a,35718);++b)a.pc=Math.max(a.pc,U.getActiveUniform(a,b).name.length+1);A[c>>2]=a.pc}else if(35722==b){if(!a.nc)for(b=0;b<U.getProgramParameter(a,35721);++b)a.nc=Math.max(a.nc,U.getActiveAttrib(a,b).name.length+1);A[c>>2]=a.nc}else if(35381==b){if(!a.oc)for(b=0;b<U.getProgramParameter(a,35382);++b)a.oc=Math.max(a.oc,U.getActiveUniformBlockName(a,b).length+1);A[c>>2]=a.oc}else A[c>>2]=U.getProgramParameter(a,
b);else R(1281)},za:function(a,b,c,d){a=U.getShaderInfoLog(Q[a]);null===a&&(a="(unknown error)");b=0<b&&d?x(a,y,d,b):0;c&&(A[c>>2]=b)},G:function(a,b,c){c?35716==b?(a=U.getShaderInfoLog(Q[a]),null===a&&(a="(unknown error)"),A[c>>2]=a?a.length+1:0):35720==b?(a=U.getShaderSource(Q[a]),A[c>>2]=a?a.length+1:0):A[c>>2]=U.getShaderParameter(Q[a],b):R(1281)},Za:function(a){var b=Fb[a];if(!b){switch(a){case 7939:b=U.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=V(b.join(" "));
break;case 7936:case 7937:case 37445:case 37446:(b=U.getParameter(a))||R(1280);b=b&&V(b);break;case 7938:b=U.getParameter(7938);b=2<=S.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=V(b);break;case 35724:b=U.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=V(b);break;default:R(1280)}Fb[a]=b}return b},Ya:function(a,b){if(2>S.version)return R(1282),0;var c=Gb[a];if(c)return 0>
b||b>=c.length?(R(1281),0):c[b];switch(a){case 7939:return c=U.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return V(d)}),c=Gb[a]=c,0>b||b>=c.length?(R(1281),0):c[b];default:return R(1280),0}},s:function(a,b){b=z(b);if(a=M[a]){var c=a,d=c.lc,e=c.Kc,k;if(!d)for(c.lc=d={},c.Jc={},k=0;k<U.getProgramParameter(c,35718);++k){var g=U.getActiveUniform(c,k);var m=g.name;g=g.size;var n=Pb(m);n=0<n?m.slice(0,n):m;var p=c.sc;c.sc+=g;e[n]=[g,p];for(m=0;m<g;++m)d[p]=
m,c.Jc[p++]=n}c=a.lc;d=0;e=b;k=Pb(b);0<k&&(d=parseInt(b.slice(k+1))>>>0,e=b.slice(0,k));if((e=a.Kc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||U.getUniformLocation(a,b)))return d}else R(1281);return-1},Fa:function(a){a=M[a];U.linkProgram(a);a.lc=0;a.Kc={}},R:function(a,b){U.polygonOffset(a,b)},y:function(a){U.readBuffer(a)},Na:function(a,b,c,d){U.renderbufferStorage(a,b,c,d)},L:function(a,b,c,d,e){U.renderbufferStorageMultisample(a,b,c,d,e)},z:function(a,b,c,d){U.scissor(a,b,c,d)},Ba:function(a,b,c,d){for(var e=
"",k=0;k<b;++k){var g=d?A[d+4*k>>2]:-1;e+=z(A[c+4*k>>2],0>g?void 0:g)}U.shaderSource(Q[a],e)},Ra:function(a,b,c){U.stencilFunc(a,b,c)},ta:function(a,b,c,d){U.stencilFuncSeparate(a,b,c,d)},B:function(a){U.stencilMask(a)},Qa:function(a,b,c){U.stencilOp(a,b,c)},sa:function(a,b,c,d){U.stencilOpSeparate(a,b,c,d)},Ja:function(a,b,c,d,e,k,g,m,n){if(2<=S.version)if(U.jc)U.texImage2D(a,b,c,d,e,k,g,m,n);else if(n){var p=Qb(m);U.texImage2D(a,b,c,d,e,k,g,m,p,n>>31-Math.clz32(p.BYTES_PER_ELEMENT))}else U.texImage2D(a,
b,c,d,e,k,g,m,null);else{p=U;var r=p.texImage2D;if(n){var w=Qb(m),N=31-Math.clz32(w.BYTES_PER_ELEMENT);n=w.subarray(n>>N,n+e*(d*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[g-6402]||1)*(1<<N)+4-1&-4)>>N)}else n=null;r.call(p,a,b,c,d,e,k,g,m,n)}},Ha:function(a,b,c,d,e,k,g,m,n,p){if(U.jc)U.texImage3D(a,b,c,d,e,k,g,m,n,p);else if(p){var r=Qb(n);U.texImage3D(a,b,c,d,e,k,g,m,n,r,p>>31-Math.clz32(r.BYTES_PER_ELEMENT))}else U.texImage3D(a,b,c,d,e,k,g,m,n,null)},K:function(a,b,c){U.texParameterf(a,
b,c)},h:function(a,b,c){U.texParameteri(a,b,c)},Bb:function(a,b,c){if(2<=S.version)U.uniform1fv(W(a),B,c>>2,b);else{if(288>=b)for(var d=X[b-1],e=0;e<b;++e)d[e]=B[c+4*e>>2];else d=B.subarray(c>>2,c+4*b>>2);U.uniform1fv(W(a),d)}},H:function(a,b){U.uniform1i(W(a),b)},xb:function(a,b,c){if(2<=S.version)U.uniform1iv(W(a),A,c>>2,b);else{if(288>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=A[c+4*e>>2];else d=A.subarray(c>>2,c+4*b>>2);U.uniform1iv(W(a),d)}},Ab:function(a,b,c){if(2<=S.version)U.uniform2fv(W(a),B,c>>
2,2*b);else{if(144>=b)for(var d=X[2*b-1],e=0;e<2*b;e+=2)d[e]=B[c+4*e>>2],d[e+1]=B[c+(4*e+4)>>2];else d=B.subarray(c>>2,c+8*b>>2);U.uniform2fv(W(a),d)}},wb:function(a,b,c){if(2<=S.version)U.uniform2iv(W(a),A,c>>2,2*b);else{if(144>=b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=A[c+4*e>>2],d[e+1]=A[c+(4*e+4)>>2];else d=A.subarray(c>>2,c+8*b>>2);U.uniform2iv(W(a),d)}},zb:function(a,b,c){if(2<=S.version)U.uniform3fv(W(a),B,c>>2,3*b);else{if(96>=b)for(var d=X[3*b-1],e=0;e<3*b;e+=3)d[e]=B[c+4*e>>2],d[e+1]=B[c+
(4*e+4)>>2],d[e+2]=B[c+(4*e+8)>>2];else d=B.subarray(c>>2,c+12*b>>2);U.uniform3fv(W(a),d)}},vb:function(a,b,c){if(2<=S.version)U.uniform3iv(W(a),A,c>>2,3*b);else{if(96>=b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=A[c+4*e>>2],d[e+1]=A[c+(4*e+4)>>2],d[e+2]=A[c+(4*e+8)>>2];else d=A.subarray(c>>2,c+12*b>>2);U.uniform3iv(W(a),d)}},yb:function(a,b,c){if(2<=S.version)U.uniform4fv(W(a),B,c>>2,4*b);else{if(72>=b){var d=X[4*b-1],e=B;c>>=2;for(var k=0;k<4*b;k+=4){var g=c+k;d[k]=e[g];d[k+1]=e[g+1];d[k+2]=e[g+2];
d[k+3]=e[g+3]}}else d=B.subarray(c>>2,c+16*b>>2);U.uniform4fv(W(a),d)}},ub:function(a,b,c){if(2<=S.version)U.uniform4iv(W(a),A,c>>2,4*b);else{if(72>=b)for(var d=Y[4*b-1],e=0;e<4*b;e+=4)d[e]=A[c+4*e>>2],d[e+1]=A[c+(4*e+4)>>2],d[e+2]=A[c+(4*e+8)>>2],d[e+3]=A[c+(4*e+12)>>2];else d=A.subarray(c>>2,c+16*b>>2);U.uniform4iv(W(a),d)}},tb:function(a,b,c,d){if(2<=S.version)U.uniformMatrix4fv(W(a),!!c,B,d>>2,16*b);else{if(18>=b){var e=X[16*b-1],k=B;d>>=2;for(var g=0;g<16*b;g+=16){var m=d+g;e[g]=k[m];e[g+1]=
k[m+1];e[g+2]=k[m+2];e[g+3]=k[m+3];e[g+4]=k[m+4];e[g+5]=k[m+5];e[g+6]=k[m+6];e[g+7]=k[m+7];e[g+8]=k[m+8];e[g+9]=k[m+9];e[g+10]=k[m+10];e[g+11]=k[m+11];e[g+12]=k[m+12];e[g+13]=k[m+13];e[g+14]=k[m+14];e[g+15]=k[m+15]}}else e=B.subarray(d>>2,d+64*b>>2);U.uniformMatrix4fv(W(a),!!c,e)}},o:function(a){a=M[a];U.useProgram(a);U.Lc=a},Db:function(a,b){U.vertexAttribDivisor(a,b)},Eb:function(a,b,c,d,e,k){U.vertexAttribPointer(a,b,c,!!d,e,k)},j:function(a,b,c,d){U.viewport(a,b,c,d)},gb:function(){f.Dc=function(a){0!=
Tb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",f.Dc)},fb:function(){f.Ic=function(a){a=a.clipboardData.getData("text");ra("_sapp_emsc_onpaste",["string"],[a])};window.addEventListener("paste",f.Ic)},eb:function(a){f.bd=[];a=z(a);a=document.getElementById(a);f.Ec=function(b){b.stopPropagation();b.preventDefault()};f.Fc=function(b){b.stopPropagation();b.preventDefault()};f.Gc=function(b){b.stopPropagation();b.preventDefault()};f.Hc=function(b){b.stopPropagation();
b.preventDefault();var c=b.dataTransfer.files;f.cd=c;Ub(c.length);var d;for(d=0;d<c.length;d++)ra("_sapp_emsc_drop",["number","string"],[d,c[d].name]);Vb(b.clientX,b.clientY)};a.addEventListener("dragenter",f.Ec,!1);a.addEventListener("dragleave",f.Fc,!1);a.addEventListener("dragover",f.Gc,!1);a.addEventListener("drop",f.Hc,!1)},$a:function(){var a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},w:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";
a.autocapitalize="none";a.addEventListener("focusout",function(){Wb()});document.body.append(a)},v:function(){document.getElementById("_sokol_app_input_element").focus()},Lb:function(a){a=z(a);f.kc=document.getElementById(a);f.kc||console.log("sokol_app.h: invalid target:"+a);f.kc.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},db:function(){window.removeEventListener("beforeunload",f.Dc)},cb:function(){window.removeEventListener("paste",f.Ic)},bb:function(a){a=
z(a);a=document.getElementById(a);a.removeEventListener("dragenter",f.Ec);a.removeEventListener("dragleave",f.Fc);a.removeEventListener("dragover",f.Gc);a.removeEventListener("drop",f.Hc)},F:function(){f.kc&&f.kc.requestPointerLock&&f.kc.requestPointerLock()},_a:function(a,b,c){var d=document.createElement("canvas");d.width=a;d.height=b;var e=d.getContext("2d"),k=e.createImageData(a,b);k.data.set(y.subarray(c,c+a*b*4));e.putImageData(k,0,0);a=document.createElement("link");a.id="sokol-app-favicon";
a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},u:function(){document.getElementById("_sokol_app_input_element").blur()},ab:function(a){a=z(a);var b=document.createElement("textarea");b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");b.setAttribute("spellcheck","false");b.style.left="-100px";b.style.top="-100px";b.style.height=1;b.style.width=1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");
document.body.removeChild(b)},pa:function(){return navigator.userAgent.includes("Macintosh")?1:0}};
(function(){function a(e){f.asm=e.exports;pa=f.asm.Mb;Da();Ea=f.asm.dc;Ga.unshift(f.asm.Nb);D--;f.monitorRunDependencies&&f.monitorRunDependencies(D);0==D&&(null!==La&&(clearInterval(La),La=null),E&&(e=E,E=null,e()))}function b(e){a(e.instance)}function c(e){return Pa().then(function(k){return WebAssembly.instantiate(k,d)}).then(function(k){return k}).then(e,function(k){t("failed to asynchronously prepare wasm: "+k);oa(k)})}var d={a:Xb};D++;f.monitorRunDependencies&&f.monitorRunDependencies(D);if(f.instantiateWasm)try{return f.instantiateWasm(d,
a)}catch(e){return t("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return u||"function"!==typeof WebAssembly.instantiateStreaming||Ma()||F.startsWith("file://")||"function"!==typeof fetch?c(b):fetch(F,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(k){t("wasm streaming compile failed: "+k);t("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
f.___wasm_call_ctors=function(){return(f.___wasm_call_ctors=f.asm.Nb).apply(null,arguments)};var Wb=f.__sapp_emsc_notify_keyboard_hidden=function(){return(Wb=f.__sapp_emsc_notify_keyboard_hidden=f.asm.Ob).apply(null,arguments)};f.__sapp_emsc_onpaste=function(){return(f.__sapp_emsc_onpaste=f.asm.Pb).apply(null,arguments)};
var Tb=f.__sapp_html5_get_ask_leave_site=function(){return(Tb=f.__sapp_html5_get_ask_leave_site=f.asm.Qb).apply(null,arguments)},Ub=f.__sapp_emsc_begin_drop=function(){return(Ub=f.__sapp_emsc_begin_drop=f.asm.Rb).apply(null,arguments)};f.__sapp_emsc_drop=function(){return(f.__sapp_emsc_drop=f.asm.Sb).apply(null,arguments)};var Vb=f.__sapp_emsc_end_drop=function(){return(Vb=f.__sapp_emsc_end_drop=f.asm.Tb).apply(null,arguments)};
f.__sapp_emsc_invoke_fetch_cb=function(){return(f.__sapp_emsc_invoke_fetch_cb=f.asm.Ub).apply(null,arguments)};f._main=function(){return(f._main=f.asm.Vb).apply(null,arguments)};f.__saudio_emsc_pull=function(){return(f.__saudio_emsc_pull=f.asm.Wb).apply(null,arguments)};f.__sfetch_emsc_head_response=function(){return(f.__sfetch_emsc_head_response=f.asm.Xb).apply(null,arguments)};f.__sfetch_emsc_get_response=function(){return(f.__sfetch_emsc_get_response=f.asm.Yb).apply(null,arguments)};
f.__sfetch_emsc_failed_http_status=function(){return(f.__sfetch_emsc_failed_http_status=f.asm.Zb).apply(null,arguments)};f.__sfetch_emsc_failed_buffer_too_small=function(){return(f.__sfetch_emsc_failed_buffer_too_small=f.asm._b).apply(null,arguments)};
var K=f._malloc=function(){return(K=f._malloc=f.asm.$b).apply(null,arguments)},ta=f.stackSave=function(){return(ta=f.stackSave=f.asm.ac).apply(null,arguments)},ua=f.stackRestore=function(){return(ua=f.stackRestore=f.asm.bc).apply(null,arguments)},v=f.stackAlloc=function(){return(v=f.stackAlloc=f.asm.cc).apply(null,arguments)},Yb;function la(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}E=function Zb(){Yb||$b();Yb||(E=Zb)};
function $b(a){function b(){if(!Yb&&(Yb=!0,f.calledRun=!0,!qa)){Qa(Ga);Qa(Ha);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if(ac){var c=a,d=f._main;c=c||[];var e=c.length+1,k=v(4*(e+1));A[k>>2]=ya(da);for(var g=1;g<e;g++)A[(k>>2)+g]=ya(c[g-1]);A[(k>>2)+e]=0;try{var m=d(e,k);if(!(noExitRuntime||0<ma)){if(f.onExit)f.onExit(m);qa=!0}h(m,new la(m))}catch(n){n instanceof la||"unwind"==n||h(1,n)}finally{}}if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;)c=f.postRun.shift(),
Ja.unshift(c);Qa(Ja)}}a=a||ca;if(!(0<D)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Ka();Qa(Fa);0<D||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},1)):b())}}f.run=$b;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var ac=!0;f.noInitialRun&&(ac=!1);$b();
