
var f;f||(f=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign({},f),ba=[],ca="./this.program",g=(a,b)=>{throw b;},da="object"==typeof window,l="function"==typeof importScripts,ea="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,p="",fa,r,ha;
if(ea){p=l?require("path").dirname(p)+"/":__dirname+"/";var fs,ia;"function"===typeof require&&(fs=require("fs"),ia=require("path"));fa=(a,b)=>{a=ia.normalize(a);return fs.readFileSync(a,b?void 0:"utf8")};ha=a=>{a=fa(a,!0);a.buffer||(a=new Uint8Array(a));return a};r=(a,b,c)=>{a=ia.normalize(a);fs.readFile(a,function(d,e){d?c(d):b(e.buffer)})};1<process.argv.length&&(ca=process.argv[1].replace(/\\/g,"/"));ba=process.argv.slice(2);"undefined"!=typeof module&&(module.exports=f);process.on("uncaughtException",
function(a){if(!(a instanceof ja))throw a;});process.on("unhandledRejection",function(a){throw a;});g=(a,b)=>{if(noExitRuntime)throw process.exitCode=a,b;b instanceof ja||t("exiting due to exception: "+b);process.exit(a)};f.inspect=function(){return"[Emscripten Module object]"}}else if(da||l)l?p=self.location.href:"undefined"!=typeof document&&document.currentScript&&(p=document.currentScript.src),p=0!==p.indexOf("blob:")?p.substr(0,p.replace(/[?#].*/,"").lastIndexOf("/")+1):"",fa=a=>{var b=new XMLHttpRequest;
b.open("GET",a,!1);b.send(null);return b.responseText},l&&(ha=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),r=(a,b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};f.print||console.log.bind(console);var t=f.printErr||console.warn.bind(console);Object.assign(f,aa);aa=null;f.arguments&&(ba=f.arguments);
f.thisProgram&&(ca=f.thisProgram);f.quit&&(g=f.quit);var u;f.wasmBinary&&(u=f.wasmBinary);var noExitRuntime=f.noExitRuntime||!0;"object"!=typeof WebAssembly&&ka("no native wasm support detected");var la,ma=!1,na="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;
function w(a,b){if(a){var c=y,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.buffer&&na)a=na.decode(c.subarray(a,b));else{for(d="";a<b;){var e=c[a++];if(e&128){var k=c[a++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|k);else{var h=c[a++]&63;e=224==(e&240)?(e&15)<<12|k<<6|h:(e&7)<<18|k<<12|h<<6|c[a++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}a=d}}else a="";return a}
function z(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var k=0;k<a.length;++k){var h=a.charCodeAt(k);if(55296<=h&&57343>=h){var m=a.charCodeAt(++k);h=65536+((h&1023)<<10)|m&1023}if(127>=h){if(c>=d)break;b[c++]=h}else{if(2047>=h){if(c+1>=d)break;b[c++]=192|h>>6}else{if(65535>=h){if(c+2>=d)break;b[c++]=224|h>>12}else{if(c+3>=d)break;b[c++]=240|h>>18;b[c++]=128|h>>12&63}b[c++]=128|h>>6&63}b[c++]=128|h&63}}b[c]=0;return c-e}
function oa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);127>=d?b++:2047>=d?b+=2:55296<=d&&57343>=d?(b+=4,++c):b+=3}return b}var pa,qa,y,ra,sa,A,ta,B,C;function ua(){var a=la.buffer;pa=a;f.HEAP8=qa=new Int8Array(a);f.HEAP16=ra=new Int16Array(a);f.HEAP32=A=new Int32Array(a);f.HEAPU8=y=new Uint8Array(a);f.HEAPU16=sa=new Uint16Array(a);f.HEAPU32=ta=new Uint32Array(a);f.HEAPF32=B=new Float32Array(a);f.HEAPF64=C=new Float64Array(a)}var va,wa=[],xa=[],ya=[],za=[],Aa=[];
function Ba(){var a=f.preRun.shift();wa.unshift(a)}var D=0,Ca=null,E=null;function ka(a){if(f.onAbort)f.onAbort(a);a="Aborted("+a+")";t(a);ma=!0;throw new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");}function Da(){return F.startsWith("data:application/octet-stream;base64,")}var F;F="offscreen-sapp.wasm";if(!Da()){var Ea=F;F=f.locateFile?f.locateFile(Ea,p):p+Ea}
function Fa(){var a=F;try{if(a==F&&u)return new Uint8Array(u);if(ha)return ha(a);throw"both async and sync fetching of the wasm failed";}catch(b){ka(b)}}
function Ga(){if(!u&&(da||l)){if("function"==typeof fetch&&!F.startsWith("file://"))return fetch(F,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+F+"'";return a.arrayBuffer()}).catch(function(){return Fa()});if(r)return new Promise(function(a,b){r(F,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Fa()})}function ja(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}
function Ha(a){for(;0<a.length;)a.shift()(f)}function Ia(a){var b=Ja();a();Ka(b)}var La=0;function Ma(){for(var a=G.length-1;0<=a;--a)Na(a);G=[];Oa=[]}var Oa=[];function Pa(){if(La&&Qa.ec)for(var a=0;a<Oa.length;++a){var b=Oa[a];Oa.splice(a,1);--a;b.Rc.apply(null,b.Gc)}}var G=[];function Na(a){var b=G[a];b.target.removeEventListener(b.Xb,b.Cc,b.Yb);G.splice(a,1)}
function H(a){function b(d){++La;Qa=a;Pa();a.$b(d);Pa();--La}if(a.Zb)a.Cc=b,a.target.addEventListener(a.Xb,b,a.Yb),G.push(a),Ra||(za.push(Ma),Ra=!0);else for(var c=0;c<G.length;++c)G[c].target==a.target&&G[c].Xb==a.Xb&&Na(c--)}function Sa(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}var Ra,Qa,Ta,Ua,Va,Wa,Xa,Ya,Za,$a=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0];
function I(a){a=2<a?w(a):a;return $a[a]||("undefined"!=typeof document?document.querySelector(a):void 0)}function ab(a){return 0>$a.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}var bb=[];function J(a){var b=bb[a];b||(a>=bb.length&&(bb.length=a+1),bb[a]=b=va.get(a));return b}function cb(a,b,c,d,e,k){Ta||(Ta=K(256));a={target:I(a),Xb:k,Zb:d,$b:function(h){h=h||event;var m=h.target.id?h.target.id:"",n=Ta;z(Sa(h.target),y,n+0,128);z(m,y,n+128,128);J(d)(e,n,b)&&h.preventDefault()},Yb:c};H(a)}
function db(a,b,c,d,e,k){Ua||(Ua=K(176));a={target:I(a),ec:!0,Xb:k,Zb:d,$b:function(h){var m=Ua;C[m>>3]=h.timeStamp;var n=m>>2;A[n+2]=h.location;A[n+3]=h.ctrlKey;A[n+4]=h.shiftKey;A[n+5]=h.altKey;A[n+6]=h.metaKey;A[n+7]=h.repeat;A[n+8]=h.charCode;A[n+9]=h.keyCode;A[n+10]=h.which;z(h.key||"",y,m+44,32);z(h.code||"",y,m+76,32);z(h.char||"",y,m+108,32);z(h.locale||"",y,m+140,32);J(d)(e,m,b)&&h.preventDefault()},Yb:c};H(a)}
function eb(a,b,c){C[a>>3]=b.timeStamp;a>>=2;A[a+2]=b.screenX;A[a+3]=b.screenY;A[a+4]=b.clientX;A[a+5]=b.clientY;A[a+6]=b.ctrlKey;A[a+7]=b.shiftKey;A[a+8]=b.altKey;A[a+9]=b.metaKey;ra[2*a+20]=b.button;ra[2*a+21]=b.buttons;A[a+11]=b.movementX;A[a+12]=b.movementY;c=ab(c);A[a+13]=b.clientX-c.left;A[a+14]=b.clientY-c.top}
function L(a,b,c,d,e,k){Va||(Va=K(72));a=I(a);H({target:a,ec:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,Xb:k,Zb:d,$b:function(h){h=h||event;eb(Va,h,a);J(d)(e,Va,b)&&h.preventDefault()},Yb:c})}function fb(a,b,c,d,e){Wa||(Wa=K(260));H({target:a,Xb:e,Zb:d,$b:function(k){k=k||event;var h=Wa,m=document.pointerLockElement||document.bc||document.mc||document.lc;A[h>>2]=!!m;var n=m&&m.id?m.id:"";z(Sa(m),y,h+4,128);z(n,y,h+132,128);J(d)(20,h,b)&&k.preventDefault()},Yb:c})}
function gb(a,b,c,d,e){H({target:a,Xb:e,Zb:d,$b:function(k){k=k||event;J(d)(38,0,b)&&k.preventDefault()},Yb:c})}
function hb(a,b,c,d){Xa||(Xa=K(36));a=I(a);H({target:a,Xb:"resize",Zb:d,$b:function(e){e=e||event;if(e.target==a){var k=document.body;if(k){var h=Xa;A[h>>2]=e.detail;A[h+4>>2]=k.clientWidth;A[h+8>>2]=k.clientHeight;A[h+12>>2]=innerWidth;A[h+16>>2]=innerHeight;A[h+20>>2]=outerWidth;A[h+24>>2]=outerHeight;A[h+28>>2]=pageXOffset;A[h+32>>2]=pageYOffset;J(d)(10,h,b)&&e.preventDefault()}}},Yb:c})}
function ib(a,b,c,d,e,k){Ya||(Ya=K(1696));a=I(a);H({target:a,ec:"touchstart"==k||"touchend"==k,Xb:k,Zb:d,$b:function(h){for(var m,n={},q=h.touches,x=0;x<q.length;++x)m=q[x],m.qc=m.sc=0,n[m.identifier]=m;for(x=0;x<h.changedTouches.length;++x)m=h.changedTouches[x],m.qc=1,n[m.identifier]=m;for(x=0;x<h.targetTouches.length;++x)n[h.targetTouches[x].identifier].sc=1;q=Ya;C[q>>3]=h.timeStamp;var v=q>>2;A[v+3]=h.ctrlKey;A[v+4]=h.shiftKey;A[v+5]=h.altKey;A[v+6]=h.metaKey;v+=7;var N=ab(a),mb=0;for(x in n)if(m=
n[x],A[v]=m.identifier,A[v+1]=m.screenX,A[v+2]=m.screenY,A[v+3]=m.clientX,A[v+4]=m.clientY,A[v+5]=m.pageX,A[v+6]=m.pageY,A[v+7]=m.qc,A[v+8]=m.sc,A[v+9]=m.clientX-N.left,A[v+10]=m.clientY-N.top,v+=13,31<++mb)break;A[q+8>>2]=mb;J(d)(e,q,b)&&h.preventDefault()},Yb:c})}function jb(a,b,c,d,e,k){a={target:I(a),Xb:k,Zb:d,$b:function(h){h=h||event;J(d)(e,0,b)&&h.preventDefault()},Yb:c};H(a)}
function kb(a,b,c,d){Za||(Za=K(104));H({target:a,ec:!0,Xb:"wheel",Zb:d,$b:function(e){e=e||event;var k=Za;eb(k,e,a);C[k+72>>3]=e.deltaX;C[k+80>>3]=e.deltaY;C[k+88>>3]=e.deltaZ;A[k+96>>2]=e.deltaMode;J(d)(9,k,b)&&e.preventDefault()},Yb:c})}
function lb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,k){b.drawArraysInstancedANGLE(c,d,e,k)},a.drawElementsInstanced=function(c,d,e,k,h){b.drawElementsInstancedANGLE(c,d,e,k,h)})}
function nb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function ob(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function pb(a){a.Ic=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function qb(a){a.Kc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function rb(a){a.Mc=a.getExtension("WEBGL_multi_draw")}var sb=1,tb=[],M=[],ub=[],O=[],P=[],Q=[],vb=[],wb=[],xb={},yb={};function R(a){zb||(zb=a)}function Ab(a){for(var b=sb++,c=a.length;c<b;c++)a[c]=null;return b}
function Bb(a,b){a.bc||(a.bc=a.getContext,a.getContext=function(d,e){e=a.bc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.rc?a.getContext("webgl2",b):a.getContext("webgl",b);return c?Cb(c,b):0}function Cb(a,b){var c=Ab(wb),d={Jc:c,attributes:b,version:b.rc,jc:a};a.canvas&&(a.canvas.Fc=d);wb[c]=d;("undefined"==typeof b.pc||b.pc)&&Db(d);return c}
function Db(a){a||(a=S);if(!a.Ec){a.Ec=!0;var b=a.jc;lb(b);nb(b);ob(b);pb(b);qb(b);2<=a.version&&(b.oc=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.oc)b.oc=b.getExtension("EXT_disjoint_timer_query");rb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var zb,S,Eb=["default","low-power","high-performance"],Fb=[];
function T(a,b,c,d){for(var e=0;e<a;e++){var k=U[c](),h=k&&Ab(d);k?(k.name=h,d[h]=k):R(1282);A[b+4*e>>2]=h}}
function Gb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=U.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>S.version){R(1282);return}c=2*(U.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>S.version){R(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=U.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":R(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:R(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)A[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){R(1280);t("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:R(1280);t("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}A[b>>2]=c}else R(1281)}
function V(a){var b=oa(a)+1,c=K(b);z(a,y,c,b);return c}function Hb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function Ib(a){a-=5120;return 0==a?qa:1==a?y:2==a?ra:4==a?A:6==a?B:5==a||28922==a||28520==a||30779==a||30782==a?ta:sa}function W(a){var b=U.Bc;if(b){var c=b.dc[a];"number"==typeof c&&(b.dc[a]=c=U.getUniformLocation(b,b.zc[a]+(0<c?"["+c+"]":"")));return c}R(1282)}var X=[],Y=[];function Jb(a){if(!noExitRuntime){if(f.onExit)f.onExit(a);ma=!0}g(a,new ja(a))}
function Kb(a){var b=oa(a)+1,c=Lb(b);z(a,qa,c,b);return c}for(var U,Z=0;32>Z;++Z)Fb.push(Array(Z));var Mb=new Float32Array(288);for(Z=0;288>Z;++Z)X[Z]=Mb.subarray(0,Z+1);var Nb=new Int32Array(288);for(Z=0;288>Z;++Z)Y[Z]=Nb.subarray(0,Z+1);
var Ub={Y:function(){return"number"==typeof devicePixelRatio&&devicePixelRatio||1},ra:function(a,b,c){a=I(a);if(!a)return-4;a=ab(a);C[b>>3]=a.width;C[c>>3]=a.height;return 0},db:function(a,b,c){y.copyWithin(a,b,b+c)},Qa:function(a,b){function c(d){J(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},cb:function(a){var b=y.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);var e=Math;d=Math.max(a,d);e=e.min.call(e,2147483648,d+(65536-
d%65536)%65536);a:{try{la.grow(e-pa.byteLength+65535>>>16);ua();var k=1;break a}catch(h){}k=void 0}if(k)return!0}return!1},Z:function(a,b,c,d){cb(a,b,c,d,12,"blur");return 0},V:function(a,b,c){a=I(a);if(!a)return-4;a.width=b;a.height=c;return 0},_:function(a,b,c,d){cb(a,b,c,d,13,"focus");return 0},ha:function(a,b,c,d){db(a,b,c,d,2,"keydown");return 0},fa:function(a,b,c,d){db(a,b,c,d,1,"keypress");return 0},ga:function(a,b,c,d){db(a,b,c,d,3,"keyup");return 0},qa:function(a,b,c,d){L(a,b,c,d,5,"mousedown");
return 0},ka:function(a,b,c,d){L(a,b,c,d,33,"mouseenter");return 0},ja:function(a,b,c,d){L(a,b,c,d,34,"mouseleave");return 0},la:function(a,b,c,d){L(a,b,c,d,8,"mousemove");return 0},pa:function(a,b,c,d){L(a,b,c,d,6,"mouseup");return 0},aa:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.bc||document.body.mc||document.body.lc))return-1;a=I(a);if(!a)return-4;fb(a,b,c,d,"pointerlockchange");fb(a,b,c,d,"mozpointerlockchange");fb(a,b,c,d,"webkitpointerlockchange");
fb(a,b,c,d,"mspointerlockchange");return 0},$:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.bc||document.body.mc||document.body.lc))return-1;a=I(a);if(!a)return-4;gb(a,b,c,d,"pointerlockerror");gb(a,b,c,d,"mozpointerlockerror");gb(a,b,c,d,"webkitpointerlockerror");gb(a,b,c,d,"mspointerlockerror");return 0},bb:function(a,b,c,d){hb(a,b,c,d);return 0},ba:function(a,b,c,d){ib(a,b,c,d,25,"touchcancel");return 0},ca:function(a,b,c,d){ib(a,b,c,d,23,"touchend");return 0},
da:function(a,b,c,d){ib(a,b,c,d,24,"touchmove");return 0},ea:function(a,b,c,d){ib(a,b,c,d,22,"touchstart");return 0},X:function(a,b,c,d){jb(a,b,c,d,31,"webglcontextlost");return 0},W:function(a,b,c,d){jb(a,b,c,d,32,"webglcontextrestored");return 0},ia:function(a,b,c,d){a=I(a);return"undefined"!=typeof a.onwheel?(kb(a,b,c,d),0):-1},L:function(a,b){b>>=2;b={alpha:!!A[b],depth:!!A[b+1],stencil:!!A[b+2],antialias:!!A[b+3],premultipliedAlpha:!!A[b+4],preserveDrawingBuffer:!!A[b+5],powerPreference:Eb[A[b+
6]],failIfMajorPerformanceCaveat:!!A[b+7],rc:A[b+8],Lc:A[b+9],pc:A[b+10],Dc:A[b+11],Nc:A[b+12],Oc:A[b+13]};a=I(a);return!a||b.Dc?0:Bb(a,b)},ya:function(a,b){a=wb[a];b=w(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&lb(U);"OES_vertex_array_object"==b&&nb(U);"WEBGL_draw_buffers"==b&&ob(U);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&pb(U);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&qb(U);"WEBGL_multi_draw"==b&&rb(U);return!!a.jc.getExtension(b)},Na:function(a){a>>=
2;for(var b=0;14>b;++b)A[a+b]=0;A[a]=A[a+1]=A[a+3]=A[a+4]=A[a+8]=A[a+10]=1},Fa:function(a){S=wb[a];f.Hc=U=S&&S.jc;return!a||U?0:-5},b:function(a){U.activeTexture(a)},F:function(a,b){U.attachShader(M[a],Q[b])},g:function(a,b){35051==a?U.nc=b:35052==a&&(U.ac=b);U.bindBuffer(a,tb[b])},e:function(a,b){U.bindFramebuffer(a,ub[b])},I:function(a,b){U.bindRenderbuffer(a,O[b])},a:function(a,b){U.bindTexture(a,P[b])},S:function(a){U.bindVertexArray(vb[a])},O:function(a,b,c,d){U.blendColor(a,b,c,d)},P:function(a,
b){U.blendEquationSeparate(a,b)},Q:function(a,b,c,d){U.blendFuncSeparate(a,b,c,d)},v:function(a,b,c,d,e,k,h,m,n,q){U.blitFramebuffer(a,b,c,d,e,k,h,m,n,q)},Ja:function(a,b,c,d){2<=S.version?c&&b?U.bufferData(a,y,d,c,b):U.bufferData(a,b,d):U.bufferData(a,c?y.subarray(c,c+b):b,d)},Ia:function(a,b,c,d){2<=S.version?c&&U.bufferSubData(a,b,y,d,c):U.bufferSubData(a,b,y.subarray(d,d+c))},p:function(a){return U.checkFramebufferStatus(a)},wb:function(a){U.clear(a)},vb:function(a,b,c,d){U.clearBufferfi(a,b,
c,d)},oa:function(a,b,c){U.clearBufferfv(a,b,B,c>>2)},ub:function(a,b,c){U.clearBufferiv(a,b,A,c>>2)},zb:function(a,b,c,d){U.clearColor(a,b,c,d)},yb:function(a){U.clearDepth(a)},xb:function(a){U.clearStencil(a)},n:function(a,b,c,d){U.colorMask(!!a,!!b,!!c,!!d)},ua:function(a){U.compileShader(Q[a])},Ea:function(a,b,c,d,e,k,h,m){2<=S.version?U.ac||!h?U.compressedTexImage2D(a,b,c,d,e,k,h,m):U.compressedTexImage2D(a,b,c,d,e,k,y,m,h):U.compressedTexImage2D(a,b,c,d,e,k,m?y.subarray(m,m+h):null)},Ca:function(a,
b,c,d,e,k,h,m,n){U.ac?U.compressedTexImage3D(a,b,c,d,e,k,h,m,n):U.compressedTexImage3D(a,b,c,d,e,k,h,y,n,m)},Aa:function(){var a=Ab(M),b=U.createProgram();b.name=a;b.ic=b.fc=b.hc=0;b.kc=1;M[a]=b;return a},wa:function(a){var b=Ab(Q);Q[b]=U.createShader(a);return b},K:function(a){U.cullFace(a)},Sa:function(a,b){for(var c=0;c<a;c++){var d=A[b+4*c>>2],e=tb[d];e&&(U.deleteBuffer(e),e.name=0,tb[d]=null,d==U.nc&&(U.nc=0),d==U.ac&&(U.ac=0))}},k:function(a,b){for(var c=0;c<a;++c){var d=A[b+4*c>>2],e=ub[d];
e&&(U.deleteFramebuffer(e),e.name=0,ub[d]=null)}},T:function(a){if(a){var b=M[a];b?(U.deleteProgram(b),b.name=0,M[a]=null):R(1281)}},U:function(a,b){for(var c=0;c<a;c++){var d=A[b+4*c>>2],e=O[d];e&&(U.deleteRenderbuffer(e),e.name=0,O[d]=null)}},x:function(a){if(a){var b=Q[a];b?(U.deleteShader(b),Q[a]=null):R(1281)}},Ra:function(a,b){for(var c=0;c<a;c++){var d=A[b+4*c>>2],e=P[d];e&&(U.deleteTexture(e),e.name=0,P[d]=null)}},Pa:function(a,b){for(var c=0;c<a;c++){var d=A[b+4*c>>2];U.deleteVertexArray(vb[d]);
vb[d]=null}},A:function(a){U.depthFunc(a)},z:function(a){U.depthMask(!!a)},f:function(a){U.disable(a)},R:function(a){U.disableVertexAttribArray(a)},eb:function(a,b,c){U.drawArrays(a,b,c)},fb:function(a,b,c,d){U.drawArraysInstanced(a,b,c,d)},o:function(a,b){for(var c=Fb[a],d=0;d<a;d++)c[d]=A[b+4*d>>2];U.drawBuffers(c)},gb:function(a,b,c,d){U.drawElements(a,b,c,d)},hb:function(a,b,c,d,e){U.drawElementsInstanced(a,b,c,d,e)},i:function(a){U.enable(a)},rb:function(a){U.enableVertexAttribArray(a)},l:function(a,
b,c,d){U.framebufferRenderbuffer(a,b,c,O[d])},c:function(a,b,c,d,e){U.framebufferTexture2D(a,b,c,P[d],e)},j:function(a,b,c,d,e){U.framebufferTextureLayer(a,b,P[c],d,e)},M:function(a){U.frontFace(a)},Ka:function(a,b){T(a,b,"createBuffer",tb)},m:function(a,b){T(a,b,"createFramebuffer",ub)},J:function(a,b){T(a,b,"createRenderbuffer",O)},Ga:function(a,b){T(a,b,"createTexture",P)},Oa:function(a,b){T(a,b,"createVertexArray",vb)},sa:function(a,b){return U.getAttribLocation(M[a],w(b))},d:function(a,b){Gb(a,
b)},xa:function(a,b,c,d){a=U.getProgramInfoLog(M[a]);null===a&&(a="(unknown error)");b=0<b&&d?z(a,y,d,b):0;c&&(A[c>>2]=b)},E:function(a,b,c){if(c)if(a>=sb)R(1281);else if(a=M[a],35716==b)a=U.getProgramInfoLog(a),null===a&&(a="(unknown error)"),A[c>>2]=a.length+1;else if(35719==b){if(!a.ic)for(b=0;b<U.getProgramParameter(a,35718);++b)a.ic=Math.max(a.ic,U.getActiveUniform(a,b).name.length+1);A[c>>2]=a.ic}else if(35722==b){if(!a.fc)for(b=0;b<U.getProgramParameter(a,35721);++b)a.fc=Math.max(a.fc,U.getActiveAttrib(a,
b).name.length+1);A[c>>2]=a.fc}else if(35381==b){if(!a.hc)for(b=0;b<U.getProgramParameter(a,35382);++b)a.hc=Math.max(a.hc,U.getActiveUniformBlockName(a,b).length+1);A[c>>2]=a.hc}else A[c>>2]=U.getProgramParameter(a,b);else R(1281)},ta:function(a,b,c,d){a=U.getShaderInfoLog(Q[a]);null===a&&(a="(unknown error)");b=0<b&&d?z(a,y,d,b):0;c&&(A[c>>2]=b)},C:function(a,b,c){c?35716==b?(a=U.getShaderInfoLog(Q[a]),null===a&&(a="(unknown error)"),A[c>>2]=a?a.length+1:0):35720==b?(a=U.getShaderSource(Q[a]),A[c>>
2]=a?a.length+1:0):A[c>>2]=U.getShaderParameter(Q[a],b):R(1281)},Ua:function(a){var b=xb[a];if(!b){switch(a){case 7939:b=U.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=V(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=U.getParameter(a))||R(1280);b=b&&V(b);break;case 7938:b=U.getParameter(7938);b=2<=S.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=V(b);break;case 35724:b=U.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);
null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=V(b);break;default:R(1280)}xb[a]=b}return b},Ta:function(a,b){if(2>S.version)return R(1282),0;var c=yb[a];if(c)return 0>b||b>=c.length?(R(1281),0):c[b];switch(a){case 7939:return c=U.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return V(d)}),c=yb[a]=c,0>b||b>=c.length?(R(1281),0):c[b];default:return R(1280),0}},q:function(a,b){b=w(b);if(a=M[a]){var c=a,d=c.dc,e=c.Ac,k;
if(!d)for(c.dc=d={},c.zc={},k=0;k<U.getProgramParameter(c,35718);++k){var h=U.getActiveUniform(c,k);var m=h.name;h=h.size;var n=Hb(m);n=0<n?m.slice(0,n):m;var q=c.kc;c.kc+=h;e[n]=[h,q];for(m=0;m<h;++m)d[q]=m,c.zc[q++]=n}c=a.dc;d=0;e=b;k=Hb(b);0<k&&(d=parseInt(b.slice(k+1))>>>0,e=b.slice(0,k));if((e=a.Ac[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||U.getUniformLocation(a,b)))return d}else R(1281);return-1},za:function(a){a=M[a];U.linkProgram(a);a.dc=0;a.Ac={}},N:function(a,b){U.polygonOffset(a,b)},w:function(a){U.readBuffer(a)},
Ha:function(a,b,c,d){U.renderbufferStorage(a,b,c,d)},H:function(a,b,c,d,e){U.renderbufferStorageMultisample(a,b,c,d,e)},Ab:function(a,b,c,d){U.scissor(a,b,c,d)},va:function(a,b,c,d){for(var e="",k=0;k<b;++k){var h=d?A[d+4*k>>2]:-1;e+=w(A[c+4*k>>2],0>h?void 0:h)}U.shaderSource(Q[a],e)},Ma:function(a,b,c){U.stencilFunc(a,b,c)},na:function(a,b,c,d){U.stencilFuncSeparate(a,b,c,d)},y:function(a){U.stencilMask(a)},La:function(a,b,c){U.stencilOp(a,b,c)},ma:function(a,b,c,d){U.stencilOpSeparate(a,b,c,d)},
Da:function(a,b,c,d,e,k,h,m,n){if(2<=S.version)if(U.ac)U.texImage2D(a,b,c,d,e,k,h,m,n);else if(n){var q=Ib(m);U.texImage2D(a,b,c,d,e,k,h,m,q,n>>31-Math.clz32(q.BYTES_PER_ELEMENT))}else U.texImage2D(a,b,c,d,e,k,h,m,null);else{q=U;var x=q.texImage2D;if(n){var v=Ib(m),N=31-Math.clz32(v.BYTES_PER_ELEMENT);n=v.subarray(n>>N,n+e*(d*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[h-6402]||1)*(1<<N)+4-1&-4)>>N)}else n=null;x.call(q,a,b,c,d,e,k,h,m,n)}},Ba:function(a,b,c,d,e,k,h,m,n,q){if(U.ac)U.texImage3D(a,
b,c,d,e,k,h,m,n,q);else if(q){var x=Ib(n);U.texImage3D(a,b,c,d,e,k,h,m,n,x,q>>31-Math.clz32(x.BYTES_PER_ELEMENT))}else U.texImage3D(a,b,c,d,e,k,h,m,n,null)},G:function(a,b,c){U.texParameterf(a,b,c)},h:function(a,b,c){U.texParameteri(a,b,c)},qb:function(a,b,c){if(2<=S.version)b&&U.uniform1fv(W(a),B,c>>2,b);else{if(288>=b)for(var d=X[b-1],e=0;e<b;++e)d[e]=B[c+4*e>>2];else d=B.subarray(c>>2,c+4*b>>2);U.uniform1fv(W(a),d)}},D:function(a,b){U.uniform1i(W(a),b)},mb:function(a,b,c){if(2<=S.version)b&&U.uniform1iv(W(a),
A,c>>2,b);else{if(288>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=A[c+4*e>>2];else d=A.subarray(c>>2,c+4*b>>2);U.uniform1iv(W(a),d)}},pb:function(a,b,c){if(2<=S.version)b&&U.uniform2fv(W(a),B,c>>2,2*b);else{if(144>=b)for(var d=X[2*b-1],e=0;e<2*b;e+=2)d[e]=B[c+4*e>>2],d[e+1]=B[c+(4*e+4)>>2];else d=B.subarray(c>>2,c+8*b>>2);U.uniform2fv(W(a),d)}},lb:function(a,b,c){if(2<=S.version)b&&U.uniform2iv(W(a),A,c>>2,2*b);else{if(144>=b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=A[c+4*e>>2],d[e+1]=A[c+(4*e+4)>>2];else d=
A.subarray(c>>2,c+8*b>>2);U.uniform2iv(W(a),d)}},ob:function(a,b,c){if(2<=S.version)b&&U.uniform3fv(W(a),B,c>>2,3*b);else{if(96>=b)for(var d=X[3*b-1],e=0;e<3*b;e+=3)d[e]=B[c+4*e>>2],d[e+1]=B[c+(4*e+4)>>2],d[e+2]=B[c+(4*e+8)>>2];else d=B.subarray(c>>2,c+12*b>>2);U.uniform3fv(W(a),d)}},kb:function(a,b,c){if(2<=S.version)b&&U.uniform3iv(W(a),A,c>>2,3*b);else{if(96>=b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=A[c+4*e>>2],d[e+1]=A[c+(4*e+4)>>2],d[e+2]=A[c+(4*e+8)>>2];else d=A.subarray(c>>2,c+12*b>>2);U.uniform3iv(W(a),
d)}},nb:function(a,b,c){if(2<=S.version)b&&U.uniform4fv(W(a),B,c>>2,4*b);else{if(72>=b){var d=X[4*b-1],e=B;c>>=2;for(var k=0;k<4*b;k+=4){var h=c+k;d[k]=e[h];d[k+1]=e[h+1];d[k+2]=e[h+2];d[k+3]=e[h+3]}}else d=B.subarray(c>>2,c+16*b>>2);U.uniform4fv(W(a),d)}},jb:function(a,b,c){if(2<=S.version)b&&U.uniform4iv(W(a),A,c>>2,4*b);else{if(72>=b)for(var d=Y[4*b-1],e=0;e<4*b;e+=4)d[e]=A[c+4*e>>2],d[e+1]=A[c+(4*e+4)>>2],d[e+2]=A[c+(4*e+8)>>2],d[e+3]=A[c+(4*e+12)>>2];else d=A.subarray(c>>2,c+16*b>>2);U.uniform4iv(W(a),
d)}},ib:function(a,b,c,d){if(2<=S.version)b&&U.uniformMatrix4fv(W(a),!!c,B,d>>2,16*b);else{if(18>=b){var e=X[16*b-1],k=B;d>>=2;for(var h=0;h<16*b;h+=16){var m=d+h;e[h]=k[m];e[h+1]=k[m+1];e[h+2]=k[m+2];e[h+3]=k[m+3];e[h+4]=k[m+4];e[h+5]=k[m+5];e[h+6]=k[m+6];e[h+7]=k[m+7];e[h+8]=k[m+8];e[h+9]=k[m+9];e[h+10]=k[m+10];e[h+11]=k[m+11];e[h+12]=k[m+12];e[h+13]=k[m+13];e[h+14]=k[m+14];e[h+15]=k[m+15]}}else e=B.subarray(d>>2,d+64*b>>2);U.uniformMatrix4fv(W(a),!!c,e)}},r:function(a){a=M[a];U.useProgram(a);U.Bc=
a},sb:function(a,b){U.vertexAttribDivisor(a,b)},tb:function(a,b,c,d,e,k){U.vertexAttribPointer(a,b,c,!!d,e,k)},Bb:function(a,b,c,d){U.viewport(a,b,c,d)},ab:function(){f.tc=a=>{0!=Ob()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",f.tc)},$a:function(){f.yc=a=>{const b=a.clipboardData.getData("text");Ia(()=>{const c=Kb(b);Pb(c)})};window.addEventListener("paste",f.yc)},_a:function(a){f.Pc=[];a=w(a);a=document.getElementById(a);f.uc=b=>{b.stopPropagation();b.preventDefault()};
f.vc=b=>{b.stopPropagation();b.preventDefault()};f.wc=b=>{b.stopPropagation();b.preventDefault()};f.xc=b=>{b.stopPropagation();b.preventDefault();const c=b.dataTransfer.files;f.Qc=c;Qb(c.length);for(let d=0;d<c.length;d++)Ia(()=>{const e=Kb(c[d].name);Rb(d,e)});Sb(b.clientX,b.clientY)};a.addEventListener("dragenter",f.uc,!1);a.addEventListener("dragleave",f.vc,!1);a.addEventListener("dragover",f.wc,!1);a.addEventListener("drop",f.xc,!1)},Wa:function(){const a=document.getElementById("sokol-app-favicon");
a&&document.head.removeChild(a)},u:function(){const a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Tb()});document.body.append(a)},t:function(){document.getElementById("_sokol_app_input_element").focus()},Cb:function(a){a=w(a);f.cc=document.getElementById(a);f.cc||console.log("sokol_app.h: invalid target:"+a);f.cc.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+
a)},Za:function(){window.removeEventListener("beforeunload",f.tc)},Ya:function(){window.removeEventListener("paste",f.yc)},Xa:function(a){a=w(a);a=document.getElementById(a);a.removeEventListener("dragenter",f.uc);a.removeEventListener("dragleave",f.vc);a.removeEventListener("dragover",f.wc);a.removeEventListener("drop",f.xc)},B:function(){f.cc&&f.cc.requestPointerLock&&f.cc.requestPointerLock()},Va:function(a,b,c){const d=document.createElement("canvas");d.width=a;d.height=b;const e=d.getContext("2d"),
k=e.createImageData(a,b);k.data.set(y.subarray(c,c+a*b*4));e.putImageData(k,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},s:function(){document.getElementById("_sokol_app_input_element").blur()}};
(function(){function a(e){f.asm=e.exports;la=f.asm.Db;ua();va=f.asm.Tb;xa.unshift(f.asm.Eb);D--;f.monitorRunDependencies&&f.monitorRunDependencies(D);0==D&&(null!==Ca&&(clearInterval(Ca),Ca=null),E&&(e=E,E=null,e()))}function b(e){a(e.instance)}function c(e){return Ga().then(function(k){return WebAssembly.instantiate(k,d)}).then(function(k){return k}).then(e,function(k){t("failed to asynchronously prepare wasm: "+k);ka(k)})}var d={a:Ub};D++;f.monitorRunDependencies&&f.monitorRunDependencies(D);if(f.instantiateWasm)try{return f.instantiateWasm(d,
a)}catch(e){return t("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return u||"function"!=typeof WebAssembly.instantiateStreaming||Da()||F.startsWith("file://")||ea||"function"!=typeof fetch?c(b):fetch(F,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(k){t("wasm streaming compile failed: "+k);t("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
f.___wasm_call_ctors=function(){return(f.___wasm_call_ctors=f.asm.Eb).apply(null,arguments)};
var Tb=f.__sapp_emsc_notify_keyboard_hidden=function(){return(Tb=f.__sapp_emsc_notify_keyboard_hidden=f.asm.Fb).apply(null,arguments)},Pb=f.__sapp_emsc_onpaste=function(){return(Pb=f.__sapp_emsc_onpaste=f.asm.Gb).apply(null,arguments)},Ob=f.__sapp_html5_get_ask_leave_site=function(){return(Ob=f.__sapp_html5_get_ask_leave_site=f.asm.Hb).apply(null,arguments)},Qb=f.__sapp_emsc_begin_drop=function(){return(Qb=f.__sapp_emsc_begin_drop=f.asm.Ib).apply(null,arguments)},Rb=f.__sapp_emsc_drop=function(){return(Rb=
f.__sapp_emsc_drop=f.asm.Jb).apply(null,arguments)},Sb=f.__sapp_emsc_end_drop=function(){return(Sb=f.__sapp_emsc_end_drop=f.asm.Kb).apply(null,arguments)};f.__sapp_emsc_invoke_fetch_cb=function(){return(f.__sapp_emsc_invoke_fetch_cb=f.asm.Lb).apply(null,arguments)};f._main=function(){return(f._main=f.asm.Mb).apply(null,arguments)};f.__saudio_emsc_pull=function(){return(f.__saudio_emsc_pull=f.asm.Nb).apply(null,arguments)};
f.__sfetch_emsc_head_response=function(){return(f.__sfetch_emsc_head_response=f.asm.Ob).apply(null,arguments)};f.__sfetch_emsc_get_response=function(){return(f.__sfetch_emsc_get_response=f.asm.Pb).apply(null,arguments)};f.__sfetch_emsc_failed_http_status=function(){return(f.__sfetch_emsc_failed_http_status=f.asm.Qb).apply(null,arguments)};f.__sfetch_emsc_failed_buffer_too_small=function(){return(f.__sfetch_emsc_failed_buffer_too_small=f.asm.Rb).apply(null,arguments)};
var K=f._malloc=function(){return(K=f._malloc=f.asm.Sb).apply(null,arguments)},Ja=f.stackSave=function(){return(Ja=f.stackSave=f.asm.Ub).apply(null,arguments)},Ka=f.stackRestore=function(){return(Ka=f.stackRestore=f.asm.Vb).apply(null,arguments)},Lb=f.stackAlloc=function(){return(Lb=f.stackAlloc=f.asm.Wb).apply(null,arguments)};f.___start_em_js=10408;f.___stop_em_js=19695;var Vb;E=function Wb(){Vb||Xb();Vb||(E=Wb)};
function Yb(a){var b=f._main;a=a||[];a.unshift(ca);var c=a.length,d=Lb(4*(c+1)),e=d>>2;a.forEach(h=>{A[e++]=Kb(h)});A[e]=0;try{var k=b(c,d);Jb(k)}catch(h){h instanceof ja||"unwind"==h||g(1,h)}}
function Xb(){function a(){if(!Vb&&(Vb=!0,f.calledRun=!0,!ma)){Ha(xa);Ha(ya);if(f.onRuntimeInitialized)f.onRuntimeInitialized();Zb&&Yb(b);if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;){var c=f.postRun.shift();Aa.unshift(c)}Ha(Aa)}}var b=b||ba;if(!(0<D)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Ba();Ha(wa);0<D||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);
a()},1)):a())}}if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var Zb=!0;f.noInitialRun&&(Zb=!1);Xb();
