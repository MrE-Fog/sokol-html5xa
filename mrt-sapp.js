var f;f||(f=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign({},f),ba=[],ca="./this.program",g=(a,b)=>{throw b;},da="object"==typeof window,l="function"==typeof importScripts,ea="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,q="",fa,t,ha;
if(ea){var fs=require("fs"),ia=require("path");q=l?ia.dirname(q)+"/":__dirname+"/";fa=(a,b)=>{a=a.startsWith("file://")?new URL(a):ia.normalize(a);return fs.readFileSync(a,b?void 0:"utf8")};ha=a=>{a=fa(a,!0);a.buffer||(a=new Uint8Array(a));return a};t=(a,b,c,d=!0)=>{a=a.startsWith("file://")?new URL(a):ia.normalize(a);fs.readFile(a,d?void 0:"utf8",(e,k)=>{e?c(e):b(d?k.buffer:k)})};!f.thisProgram&&1<process.argv.length&&(ca=process.argv[1].replace(/\\/g,"/"));ba=process.argv.slice(2);"undefined"!=
typeof module&&(module.exports=f);process.on("uncaughtException",a=>{if(!("unwind"===a||a instanceof ja||a.context instanceof ja))throw a;});if(15>process.versions.node.split(".")[0])process.on("unhandledRejection",a=>{throw a;});g=(a,b)=>{process.exitCode=a;throw b;};f.inspect=()=>"[Emscripten Module object]"}else if(da||l)l?q=self.location.href:"undefined"!=typeof document&&document.currentScript&&(q=document.currentScript.src),q=0!==q.indexOf("blob:")?q.substr(0,q.replace(/[?#].*/,"").lastIndexOf("/")+
1):"",fa=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},l&&(ha=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),t=(a,b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};f.print||console.log.bind(console);var u=f.printErr||console.error.bind(console);
Object.assign(f,aa);aa=null;f.arguments&&(ba=f.arguments);f.thisProgram&&(ca=f.thisProgram);f.quit&&(g=f.quit);var v;f.wasmBinary&&(v=f.wasmBinary);var noExitRuntime=f.noExitRuntime||!0;"object"!=typeof WebAssembly&&ka("no native wasm support detected");var la,ma=!1,na,x,oa,pa,y,qa,z,A;
function ra(){var a=la.buffer;f.HEAP8=na=new Int8Array(a);f.HEAP16=oa=new Int16Array(a);f.HEAP32=y=new Int32Array(a);f.HEAPU8=x=new Uint8Array(a);f.HEAPU16=pa=new Uint16Array(a);f.HEAPU32=qa=new Uint32Array(a);f.HEAPF32=z=new Float32Array(a);f.HEAPF64=A=new Float64Array(a)}var sa,ta=[],ua=[],va=[],wa=[],xa=[];function ya(){var a=f.preRun.shift();ta.unshift(a)}var B=0,za=null,C=null;
function ka(a){if(f.onAbort)f.onAbort(a);a="Aborted("+a+")";u(a);ma=!0;throw new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");}function Aa(a){return a.startsWith("data:application/octet-stream;base64,")}var D;D="mrt-sapp.wasm";if(!Aa(D)){var Ba=D;D=f.locateFile?f.locateFile(Ba,q):q+Ba}function Ca(a){try{if(a==D&&v)return new Uint8Array(v);if(ha)return ha(a);throw"both async and sync fetching of the wasm failed";}catch(b){ka(b)}}
function Da(a){if(!v&&(da||l)){if("function"==typeof fetch&&!a.startsWith("file://"))return fetch(a,{credentials:"same-origin"}).then(b=>{if(!b.ok)throw"failed to load wasm binary file at '"+a+"'";return b.arrayBuffer()}).catch(()=>Ca(a));if(t)return new Promise((b,c)=>{t(a,d=>b(new Uint8Array(d)),c)})}return Promise.resolve().then(()=>Ca(a))}function Ea(a,b,c){return Da(a).then(d=>WebAssembly.instantiate(d,b)).then(d=>d).then(c,d=>{u("failed to asynchronously prepare wasm: "+d);ka(d)})}
function Fa(a,b){var c=D;v||"function"!=typeof WebAssembly.instantiateStreaming||Aa(c)||c.startsWith("file://")||ea||"function"!=typeof fetch?Ea(c,a,b):fetch(c,{credentials:"same-origin"}).then(d=>WebAssembly.instantiateStreaming(d,a).then(b,function(e){u("wasm streaming compile failed: "+e);u("falling back to ArrayBuffer instantiation");return Ea(c,a,b)}))}function ja(a){this.name="ExitStatus";this.message=`Program terminated with exit(${a})`;this.status=a}
function Ga(a){for(;0<a.length;)a.shift()(f)}function Ha(a){var b=Ia();a();Ja(b)}var Ka=0;function La(){for(var a=E.length-1;0<=a;--a)Ma(a);E=[];Na=[]}var Na=[];function Oa(){if(Ka&&Pa.cc)for(var a=0;a<Na.length;++a){var b=Na[a];Na.splice(a,1);--a;b.Pc.apply(null,b.Ec)}}var E=[];function Ma(a){var b=E[a];b.target.removeEventListener(b.Vb,b.Ac,b.Wb);E.splice(a,1)}
function F(a){function b(d){++Ka;Pa=a;Oa();a.Yb(d);Oa();--Ka}if(!a.target)return-4;if(a.Xb)a.Ac=b,a.target.addEventListener(a.Vb,b,a.Wb),E.push(a),Qa||(wa.push(La),Qa=!0);else for(var c=0;c<E.length;++c)E[c].target==a.target&&E[c].Vb==a.Vb&&Ma(c--);return 0}function Ra(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}var Qa,Pa,Sa,Ta,Ua,Va,Wa,Xa,Ya,Za="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;
function G(a,b){if(a){var c=x,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.buffer&&Za)a=Za.decode(c.subarray(a,b));else{for(d="";a<b;){var e=c[a++];if(e&128){var k=c[a++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|k);else{var h=c[a++]&63;e=224==(e&240)?(e&15)<<12|k<<6|h:(e&7)<<18|k<<12|h<<6|c[a++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}a=d}}else a="";return a}
var $a=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0];function H(a){a=2<a?G(a):a;return $a[a]||("undefined"!=typeof document?document.querySelector(a):void 0)}function ab(a){return 0>$a.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}var bb=[];function I(a){var b=bb[a];b||(a>=bb.length&&(bb.length=a+1),bb[a]=b=sa.get(a));return b}
function J(a,b,c){var d=x;if(!(0<c))return 0;var e=b;c=b+c-1;for(var k=0;k<a.length;++k){var h=a.charCodeAt(k);if(55296<=h&&57343>=h){var m=a.charCodeAt(++k);h=65536+((h&1023)<<10)|m&1023}if(127>=h){if(b>=c)break;d[b++]=h}else{if(2047>=h){if(b+1>=c)break;d[b++]=192|h>>6}else{if(65535>=h){if(b+2>=c)break;d[b++]=224|h>>12}else{if(b+3>=c)break;d[b++]=240|h>>18;d[b++]=128|h>>12&63}d[b++]=128|h>>6&63}d[b++]=128|h&63}}d[b]=0;return b-e}
function cb(a,b,c,d,e,k){Sa||(Sa=K(256));a={target:H(a),Vb:k,Xb:d,Yb:function(h=event){var m=h.target.id?h.target.id:"",n=Sa;J(Ra(h.target),n+0,128);J(m,n+128,128);I(d)(e,n,b)&&h.preventDefault()},Wb:c};return F(a)}
function db(a,b,c,d,e,k){Ta||(Ta=K(176));a={target:H(a),cc:!0,Vb:k,Xb:d,Yb:function(h){var m=Ta;A[m>>3]=h.timeStamp;var n=m>>2;y[n+2]=h.location;y[n+3]=h.ctrlKey;y[n+4]=h.shiftKey;y[n+5]=h.altKey;y[n+6]=h.metaKey;y[n+7]=h.repeat;y[n+8]=h.charCode;y[n+9]=h.keyCode;y[n+10]=h.which;J(h.key||"",m+44,32);J(h.code||"",m+76,32);J(h.char||"",m+108,32);J(h.locale||"",m+140,32);I(d)(e,m,b)&&h.preventDefault()},Wb:c};return F(a)}
function eb(a,b,c){A[a>>3]=b.timeStamp;a>>=2;y[a+2]=b.screenX;y[a+3]=b.screenY;y[a+4]=b.clientX;y[a+5]=b.clientY;y[a+6]=b.ctrlKey;y[a+7]=b.shiftKey;y[a+8]=b.altKey;y[a+9]=b.metaKey;oa[2*a+20]=b.button;oa[2*a+21]=b.buttons;y[a+11]=b.movementX;y[a+12]=b.movementY;c=ab(c);y[a+13]=b.clientX-c.left;y[a+14]=b.clientY-c.top}
function L(a,b,c,d,e,k){Ua||(Ua=K(72));a=H(a);return F({target:a,cc:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,Vb:k,Xb:d,Yb:function(h=event){eb(Ua,h,a);I(d)(e,Ua,b)&&h.preventDefault()},Wb:c})}function fb(a,b,c,d,e){Va||(Va=K(260));return F({target:a,Vb:e,Xb:d,Yb:function(k=event){var h=Va,m=document.pointerLockElement||document.$b||document.kc||document.jc;y[h>>2]=!!m;var n=m&&m.id?m.id:"";J(Ra(m),h+4,128);J(n,h+132,128);I(d)(20,h,b)&&k.preventDefault()},Wb:c})}
function gb(a,b,c,d,e){return F({target:a,Vb:e,Xb:d,Yb:function(k=event){I(d)(38,0,b)&&k.preventDefault()},Wb:c})}
function hb(a,b,c,d){Wa||(Wa=K(36));a=H(a);return F({target:a,Vb:"resize",Xb:d,Yb:function(e=event){if(e.target==a){var k=document.body;if(k){var h=Wa;y[h>>2]=e.detail;y[h+4>>2]=k.clientWidth;y[h+8>>2]=k.clientHeight;y[h+12>>2]=innerWidth;y[h+16>>2]=innerHeight;y[h+20>>2]=outerWidth;y[h+24>>2]=outerHeight;y[h+28>>2]=pageXOffset;y[h+32>>2]=pageYOffset;I(d)(10,h,b)&&e.preventDefault()}}},Wb:c})}
function ib(a,b,c,d,e,k){Xa||(Xa=K(1696));a=H(a);return F({target:a,cc:"touchstart"==k||"touchend"==k,Vb:k,Xb:d,Yb:function(h){for(var m,n={},p=h.touches,w=0;w<p.length;++w)m=p[w],m.oc=m.qc=0,n[m.identifier]=m;for(w=0;w<h.changedTouches.length;++w)m=h.changedTouches[w],m.oc=1,n[m.identifier]=m;for(w=0;w<h.targetTouches.length;++w)n[h.targetTouches[w].identifier].qc=1;p=Xa;A[p>>3]=h.timeStamp;var r=p>>2;y[r+3]=h.ctrlKey;y[r+4]=h.shiftKey;y[r+5]=h.altKey;y[r+6]=h.metaKey;r+=7;var N=ab(a),U=0;for(w in n)if(m=
n[w],y[r]=m.identifier,y[r+1]=m.screenX,y[r+2]=m.screenY,y[r+3]=m.clientX,y[r+4]=m.clientY,y[r+5]=m.pageX,y[r+6]=m.pageY,y[r+7]=m.oc,y[r+8]=m.qc,y[r+9]=m.clientX-N.left,y[r+10]=m.clientY-N.top,r+=13,31<++U)break;y[p+8>>2]=U;I(d)(e,p,b)&&h.preventDefault()},Wb:c})}
function jb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,k){b.drawArraysInstancedANGLE(c,d,e,k)},a.drawElementsInstanced=function(c,d,e,k,h){b.drawElementsInstancedANGLE(c,d,e,k,h)})}
function kb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function lb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function mb(a){a.Gc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function nb(a){a.Ic=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function ob(a){a.Kc=a.getExtension("WEBGL_multi_draw")}var pb=1,qb=[],M=[],rb=[],O=[],P=[],Q=[],sb=[],tb=[],ub={},vb=4;function R(a){wb||(wb=a)}function xb(a){for(var b=pb++,c=a.length;c<b;c++)a[c]=null;return b}
function yb(a,b){a.$b||(a.$b=a.getContext,a.getContext=function(d,e){e=a.$b(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.pc?a.getContext("webgl2",b):a.getContext("webgl",b);return c?zb(c,b):0}function zb(a,b){var c=xb(tb),d={Hc:c,attributes:b,version:b.pc,hc:a};a.canvas&&(a.canvas.Dc=d);tb[c]=d;("undefined"==typeof b.nc||b.nc)&&Ab(d);return c}
function Ab(a){a||(a=S);if(!a.Cc){a.Cc=!0;var b=a.hc;jb(b);kb(b);lb(b);mb(b);nb(b);2<=a.version&&(b.mc=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.mc)b.mc=b.getExtension("EXT_disjoint_timer_query");ob(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var wb,S;function Bb(a,b,c,d,e,k){a={target:H(a),Vb:k,Xb:d,Yb:(h=event)=>{I(d)(e,0,b)&&h.preventDefault()},Wb:c};F(a)}
function Cb(a,b,c,d){Ya||(Ya=K(104));return F({target:a,cc:!0,Vb:"wheel",Xb:d,Yb:function(e=event){var k=Ya;eb(k,e,a);A[k+72>>3]=e.deltaX;A[k+80>>3]=e.deltaY;A[k+88>>3]=e.deltaZ;y[k+96>>2]=e.deltaMode;I(d)(9,k,b)&&e.preventDefault()},Wb:c})}var Db=["default","low-power","high-performance"],Eb=[];function T(a,b,c,d){for(var e=0;e<a;e++){var k=V[c](),h=k&&xb(d);k?(k.name=h,d[h]=k):R(1282);y[b+4*e>>2]=h}}
function Fb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=V.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>S.version){R(1282);return}c=2*(V.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>S.version){R(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=V.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":R(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:R(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)y[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){R(1280);u("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:R(1280);u("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}y[b>>2]=c}else R(1281)}
function Gb(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);127>=d?b++:2047>=d?b+=2:55296<=d&&57343>=d?(b+=4,++c):b+=3}return b}function Hb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function Ib(a){a-=5120;return 0==a?na:1==a?x:2==a?oa:4==a?y:6==a?z:5==a||28922==a||28520==a||30779==a||30782==a?qa:pa}function W(a){var b=V.zc;if(b){var c=b.bc[a];"number"==typeof c&&(b.bc[a]=c=V.getUniformLocation(b,b.xc[a]+(0<c?"["+c+"]":"")));return c}R(1282)}var X=[],Y=[];
function Jb(a){if(!noExitRuntime){if(f.onExit)f.onExit(a);ma=!0}g(a,new ja(a))}function Kb(a){var b=Gb(a)+1,c=Lb(b);J(a,c,b);return c}for(var V,Z=0;32>Z;++Z)Eb.push(Array(Z));var Mb=new Float32Array(288);for(Z=0;288>Z;++Z)X[Z]=Mb.subarray(0,Z+1);var Nb=new Int32Array(288);for(Z=0;288>Z;++Z)Y[Z]=Nb.subarray(0,Z+1);
var Ub={j:function(){ka("")},ga:function(){return"number"==typeof devicePixelRatio&&devicePixelRatio||1},ha:function(a,b,c){a=H(a);if(!a)return-4;a=ab(a);A[b>>3]=a.width;A[c>>3]=a.height;return 0},bb:function(a,b,c){x.copyWithin(a,b,b+c)},$a:function(a,b){function c(d){I(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},cb:function(a){var b=x.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);var e=Math;d=Math.max(a,d);a:{e=e.min.call(e,
2147483648,d+(65536-d%65536)%65536)-la.buffer.byteLength+65535>>>16;try{la.grow(e);ra();var k=1;break a}catch(h){}k=void 0}if(k)return!0}return!1},Q:function(a,b,c,d){return cb(a,b,c,d,12,"blur")},fa:function(a,b,c){a=H(a);if(!a)return-4;a.width=b;a.height=c;return 0},R:function(a,b,c,d){return cb(a,b,c,d,13,"focus")},_:function(a,b,c,d){return db(a,b,c,d,2,"keydown")},Y:function(a,b,c,d){return db(a,b,c,d,1,"keypress")},Z:function(a,b,c,d){return db(a,b,c,d,3,"keyup")},ea:function(a,b,c,d){return L(a,
b,c,d,5,"mousedown")},ba:function(a,b,c,d){return L(a,b,c,d,33,"mouseenter")},aa:function(a,b,c,d){return L(a,b,c,d,34,"mouseleave")},ca:function(a,b,c,d){return L(a,b,c,d,8,"mousemove")},da:function(a,b,c,d){return L(a,b,c,d,6,"mouseup")},T:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.$b||document.body.kc||document.body.jc))return-1;a=H(a);if(!a)return-4;fb(a,b,c,d,"mozpointerlockchange");fb(a,b,c,d,"webkitpointerlockchange");fb(a,b,c,d,"mspointerlockchange");
return fb(a,b,c,d,"pointerlockchange")},S:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.$b||document.body.kc||document.body.jc))return-1;a=H(a);if(!a)return-4;gb(a,b,c,d,"mozpointerlockerror");gb(a,b,c,d,"webkitpointerlockerror");gb(a,b,c,d,"mspointerlockerror");return gb(a,b,c,d,"pointerlockerror")},ab:function(a,b,c,d){return hb(a,b,c,d)},U:function(a,b,c,d){return ib(a,b,c,d,25,"touchcancel")},V:function(a,b,c,d){return ib(a,b,c,d,23,"touchend")},W:function(a,
b,c,d){return ib(a,b,c,d,24,"touchmove")},X:function(a,b,c,d){return ib(a,b,c,d,22,"touchstart")},P:function(a,b,c,d){Bb(a,b,c,d,31,"webglcontextlost");return 0},O:function(a,b,c,d){Bb(a,b,c,d,32,"webglcontextrestored");return 0},$:function(a,b,c,d){return(a=H(a))?"undefined"!=typeof a.onwheel?Cb(a,b,c,d):-1:-4},Za:function(a,b){b>>=2;b={alpha:!!y[b],depth:!!y[b+1],stencil:!!y[b+2],antialias:!!y[b+3],premultipliedAlpha:!!y[b+4],preserveDrawingBuffer:!!y[b+5],powerPreference:Db[y[b+6]],failIfMajorPerformanceCaveat:!!y[b+
7],pc:y[b+8],Jc:y[b+9],nc:y[b+10],Bc:y[b+11],Lc:y[b+12],Mc:y[b+13]};a=H(a);return!a||b.Bc?0:yb(a,b)},Xa:function(a,b){a=tb[a];b=G(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&jb(V);"OES_vertex_array_object"==b&&kb(V);"WEBGL_draw_buffers"==b&&lb(V);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&mb(V);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&nb(V);"WEBGL_multi_draw"==b&&ob(V);return!!a.hc.getExtension(b)},_a:function(a){a>>=2;for(var b=0;14>b;++b)y[a+
b]=0;y[a]=y[a+1]=y[a+3]=y[a+4]=y[a+8]=y[a+10]=1},Ya:function(a){S=tb[a];f.Fc=V=S&&S.hc;return!a||V?0:-5},i:function(a){V.activeTexture(a)},B:function(a,b){V.attachShader(M[a],Q[b])},d:function(a,b){35051==a?V.lc=b:35052==a&&(V.Zb=b);V.bindBuffer(a,qb[b])},f:function(a,b){V.bindFramebuffer(a,rb[b])},Ga:function(a,b){V.bindRenderbuffer(a,O[b])},a:function(a,b){V.bindTexture(a,P[b])},K:function(a){V.bindVertexArray(sb[a])},G:function(a,b,c,d){V.blendColor(a,b,c,d)},H:function(a,b){V.blendEquationSeparate(a,
b)},I:function(a,b,c,d){V.blendFuncSeparate(a,b,c,d)},eb:function(a,b,c,d,e,k,h,m,n,p){V.blitFramebuffer(a,b,c,d,e,k,h,m,n,p)},Ja:function(a,b,c,d){2<=S.version?c&&b?V.bufferData(a,x,d,c,b):V.bufferData(a,b,d):V.bufferData(a,c?x.subarray(c,c+b):b,d)},Ia:function(a,b,c,d){2<=S.version?c&&V.bufferSubData(a,b,x,d,c):V.bufferSubData(a,b,x.subarray(d,d+c))},na:function(a){return V.checkFramebufferStatus(a)},yb:function(a,b,c,d){V.clearBufferfi(a,b,c,d)},la:function(a,b,c){V.clearBufferfv(a,b,z,c>>2)},
xb:function(a,b,c){V.clearBufferiv(a,b,y,c>>2)},l:function(a,b,c,d){V.colorMask(!!a,!!b,!!c,!!d)},sa:function(a){V.compileShader(Q[a])},Ca:function(a,b,c,d,e,k,h,m){2<=S.version?V.Zb||!h?V.compressedTexImage2D(a,b,c,d,e,k,h,m):V.compressedTexImage2D(a,b,c,d,e,k,x,m,h):V.compressedTexImage2D(a,b,c,d,e,k,m?x.subarray(m,m+h):null)},Aa:function(a,b,c,d,e,k,h,m,n){V.Zb?V.compressedTexImage3D(a,b,c,d,e,k,h,m,n):V.compressedTexImage3D(a,b,c,d,e,k,h,x,n,m)},ya:function(){var a=xb(M),b=V.createProgram();b.name=
a;b.fc=b.dc=b.ec=0;b.ic=1;M[a]=b;return a},ua:function(a){var b=xb(Q);Q[b]=V.createShader(a);return b},D:function(a){V.cullFace(a)},Ta:function(a,b){for(var c=0;c<a;c++){var d=y[b+4*c>>2],e=qb[d];e&&(V.deleteBuffer(e),e.name=0,qb[d]=null,d==V.lc&&(V.lc=0),d==V.Zb&&(V.Zb=0))}},e:function(a,b){for(var c=0;c<a;++c){var d=y[b+4*c>>2],e=rb[d];e&&(V.deleteFramebuffer(e),e.name=0,rb[d]=null)}},L:function(a){if(a){var b=M[a];b?(V.deleteProgram(b),b.name=0,M[a]=null):R(1281)}},M:function(a,b){for(var c=0;c<
a;c++){var d=y[b+4*c>>2],e=O[d];e&&(V.deleteRenderbuffer(e),e.name=0,O[d]=null)}},s:function(a){if(a){var b=Q[a];b?(V.deleteShader(b),Q[a]=null):R(1281)}},N:function(a,b){for(var c=0;c<a;c++){var d=y[b+4*c>>2],e=P[d];e&&(V.deleteTexture(e),e.name=0,P[d]=null)}},Ra:function(a,b){for(var c=0;c<a;c++){var d=y[b+4*c>>2];V.deleteVertexArray(sb[d]);sb[d]=null}},v:function(a){V.depthFunc(a)},u:function(a){V.depthMask(!!a)},c:function(a){V.disable(a)},J:function(a){V.disableVertexAttribArray(a)},gb:function(a,
b,c){V.drawArrays(a,b,c)},hb:function(a,b,c,d){V.drawArraysInstanced(a,b,c,d)},ma:function(a,b){for(var c=Eb[a],d=0;d<a;d++)c[d]=y[b+4*d>>2];V.drawBuffers(c)},ib:function(a,b,c,d){V.drawElements(a,b,c,d)},jb:function(a,b,c,d,e){V.drawElementsInstanced(a,b,c,d,e)},h:function(a){V.enable(a)},ub:function(a){V.enableVertexAttribArray(a)},oa:function(a,b,c,d){V.framebufferRenderbuffer(a,b,c,O[d])},k:function(a,b,c,d,e){V.framebufferTexture2D(a,b,c,P[d],e)},w:function(a,b,c,d,e){V.framebufferTextureLayer(a,
b,P[c],d,e)},E:function(a){V.frontFace(a)},Ka:function(a,b){T(a,b,"createBuffer",qb)},pa:function(a,b){T(a,b,"createFramebuffer",rb)},Ha:function(a,b){T(a,b,"createRenderbuffer",O)},Ea:function(a,b){T(a,b,"createTexture",P)},Qa:function(a,b){T(a,b,"createVertexArray",sb)},qa:function(a,b){return V.getAttribLocation(M[a],G(b))},b:function(a,b){Fb(a,b)},va:function(a,b,c,d){a=V.getProgramInfoLog(M[a]);null===a&&(a="(unknown error)");b=0<b&&d?J(a,d,b):0;c&&(y[c>>2]=b)},A:function(a,b,c){if(c)if(a>=pb)R(1281);
else if(a=M[a],35716==b)a=V.getProgramInfoLog(a),null===a&&(a="(unknown error)"),y[c>>2]=a.length+1;else if(35719==b){if(!a.fc)for(b=0;b<V.getProgramParameter(a,35718);++b)a.fc=Math.max(a.fc,V.getActiveUniform(a,b).name.length+1);y[c>>2]=a.fc}else if(35722==b){if(!a.dc)for(b=0;b<V.getProgramParameter(a,35721);++b)a.dc=Math.max(a.dc,V.getActiveAttrib(a,b).name.length+1);y[c>>2]=a.dc}else if(35381==b){if(!a.ec)for(b=0;b<V.getProgramParameter(a,35382);++b)a.ec=Math.max(a.ec,V.getActiveUniformBlockName(a,
b).length+1);y[c>>2]=a.ec}else y[c>>2]=V.getProgramParameter(a,b);else R(1281)},ra:function(a,b,c,d){a=V.getShaderInfoLog(Q[a]);null===a&&(a="(unknown error)");b=0<b&&d?J(a,d,b):0;c&&(y[c>>2]=b)},y:function(a,b,c){c?35716==b?(a=V.getShaderInfoLog(Q[a]),null===a&&(a="(unknown error)"),y[c>>2]=a?a.length+1:0):35720==b?(a=V.getShaderSource(Q[a]),y[c>>2]=a?a.length+1:0):y[c>>2]=V.getShaderParameter(Q[a],b):R(1281)},Ua:function(a,b){if(2>S.version)return R(1282),0;var c=ub[a];if(c)return 0>b||b>=c.length?
(R(1281),0):c[b];switch(a){case 7939:return c=V.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){var e=Gb(d)+1,k=K(e);k&&J(d,k,e);return k}),c=ub[a]=c,0>b||b>=c.length?(R(1281),0):c[b];default:return R(1280),0}},n:function(a,b){b=G(b);if(a=M[a]){var c=a,d=c.bc,e=c.yc,k;if(!d)for(c.bc=d={},c.xc={},k=0;k<V.getProgramParameter(c,35718);++k){var h=V.getActiveUniform(c,k);var m=h.name;h=h.size;var n=Hb(m);n=0<n?m.slice(0,n):m;var p=c.ic;c.ic+=h;e[n]=[h,p];
for(m=0;m<h;++m)d[p]=m,c.xc[p++]=n}c=a.bc;d=0;e=b;k=Hb(b);0<k&&(d=parseInt(b.slice(k+1))>>>0,e=b.slice(0,k));if((e=a.yc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||V.getUniformLocation(a,b)))return d}else R(1281);return-1},db:function(a,b,c){for(var d=Eb[b],e=0;e<b;e++)d[e]=y[c+4*e>>2];V.invalidateFramebuffer(a,d)},xa:function(a){a=M[a];V.linkProgram(a);a.bc=0;a.yc={}},Pa:function(a,b){3317==a&&(vb=b);V.pixelStorei(a,b)},F:function(a,b){V.polygonOffset(a,b)},fb:function(a){V.readBuffer(a)},Fa:function(a,b,c,
d,e){V.renderbufferStorageMultisample(a,b,c,d,e)},Ab:function(a,b,c,d){V.scissor(a,b,c,d)},ta:function(a,b,c,d){for(var e="",k=0;k<b;++k){var h=d?y[d+4*k>>2]:-1;e+=G(y[c+4*k>>2],0>h?void 0:h)}V.shaderSource(Q[a],e)},Na:function(a,b,c){V.stencilFunc(a,b,c)},ka:function(a,b,c,d){V.stencilFuncSeparate(a,b,c,d)},t:function(a){V.stencilMask(a)},Ma:function(a,b,c){V.stencilOp(a,b,c)},ja:function(a,b,c,d){V.stencilOpSeparate(a,b,c,d)},Ba:function(a,b,c,d,e,k,h,m,n){if(2<=S.version)if(V.Zb)V.texImage2D(a,
b,c,d,e,k,h,m,n);else if(n){var p=Ib(m);V.texImage2D(a,b,c,d,e,k,h,m,p,n>>31-Math.clz32(p.BYTES_PER_ELEMENT))}else V.texImage2D(a,b,c,d,e,k,h,m,null);else{p=V;var w=p.texImage2D;if(n){var r=Ib(m),N=31-Math.clz32(r.BYTES_PER_ELEMENT),U=vb;n=r.subarray(n>>N,n+e*(d*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[h-6402]||1)*(1<<N)+U-1&-U)>>N)}else n=null;w.call(p,a,b,c,d,e,k,h,m,n)}},za:function(a,b,c,d,e,k,h,m,n,p){if(V.Zb)V.texImage3D(a,b,c,d,e,k,h,m,n,p);else if(p){var w=Ib(n);V.texImage3D(a,
b,c,d,e,k,h,m,n,w,p>>31-Math.clz32(w.BYTES_PER_ELEMENT))}else V.texImage3D(a,b,c,d,e,k,h,m,n,null)},C:function(a,b,c){V.texParameterf(a,b,c)},g:function(a,b,c){V.texParameteri(a,b,c)},tb:function(a,b,c){if(2<=S.version)b&&V.uniform1fv(W(a),z,c>>2,b);else{if(288>=b)for(var d=X[b-1],e=0;e<b;++e)d[e]=z[c+4*e>>2];else d=z.subarray(c>>2,c+4*b>>2);V.uniform1fv(W(a),d)}},z:function(a,b){V.uniform1i(W(a),b)},ob:function(a,b,c){if(2<=S.version)b&&V.uniform1iv(W(a),y,c>>2,b);else{if(288>=b)for(var d=Y[b-1],
e=0;e<b;++e)d[e]=y[c+4*e>>2];else d=y.subarray(c>>2,c+4*b>>2);V.uniform1iv(W(a),d)}},sb:function(a,b,c){if(2<=S.version)b&&V.uniform2fv(W(a),z,c>>2,2*b);else{if(144>=b)for(var d=X[2*b-1],e=0;e<2*b;e+=2)d[e]=z[c+4*e>>2],d[e+1]=z[c+(4*e+4)>>2];else d=z.subarray(c>>2,c+8*b>>2);V.uniform2fv(W(a),d)}},nb:function(a,b,c){if(2<=S.version)b&&V.uniform2iv(W(a),y,c>>2,2*b);else{if(144>=b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=y[c+4*e>>2],d[e+1]=y[c+(4*e+4)>>2];else d=y.subarray(c>>2,c+8*b>>2);V.uniform2iv(W(a),
d)}},rb:function(a,b,c){if(2<=S.version)b&&V.uniform3fv(W(a),z,c>>2,3*b);else{if(96>=b)for(var d=X[3*b-1],e=0;e<3*b;e+=3)d[e]=z[c+4*e>>2],d[e+1]=z[c+(4*e+4)>>2],d[e+2]=z[c+(4*e+8)>>2];else d=z.subarray(c>>2,c+12*b>>2);V.uniform3fv(W(a),d)}},mb:function(a,b,c){if(2<=S.version)b&&V.uniform3iv(W(a),y,c>>2,3*b);else{if(96>=b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=y[c+4*e>>2],d[e+1]=y[c+(4*e+4)>>2],d[e+2]=y[c+(4*e+8)>>2];else d=y.subarray(c>>2,c+12*b>>2);V.uniform3iv(W(a),d)}},pb:function(a,b,c){if(2<=
S.version)b&&V.uniform4fv(W(a),z,c>>2,4*b);else{if(72>=b){var d=X[4*b-1],e=z;c>>=2;for(var k=0;k<4*b;k+=4){var h=c+k;d[k]=e[h];d[k+1]=e[h+1];d[k+2]=e[h+2];d[k+3]=e[h+3]}}else d=z.subarray(c>>2,c+16*b>>2);V.uniform4fv(W(a),d)}},lb:function(a,b,c){if(2<=S.version)b&&V.uniform4iv(W(a),y,c>>2,4*b);else{if(72>=b)for(var d=Y[4*b-1],e=0;e<4*b;e+=4)d[e]=y[c+4*e>>2],d[e+1]=y[c+(4*e+4)>>2],d[e+2]=y[c+(4*e+8)>>2],d[e+3]=y[c+(4*e+12)>>2];else d=y.subarray(c>>2,c+16*b>>2);V.uniform4iv(W(a),d)}},kb:function(a,
b,c,d){if(2<=S.version)b&&V.uniformMatrix4fv(W(a),!!c,z,d>>2,16*b);else{if(18>=b){var e=X[16*b-1],k=z;d>>=2;for(var h=0;h<16*b;h+=16){var m=d+h;e[h]=k[m];e[h+1]=k[m+1];e[h+2]=k[m+2];e[h+3]=k[m+3];e[h+4]=k[m+4];e[h+5]=k[m+5];e[h+6]=k[m+6];e[h+7]=k[m+7];e[h+8]=k[m+8];e[h+9]=k[m+9];e[h+10]=k[m+10];e[h+11]=k[m+11];e[h+12]=k[m+12];e[h+13]=k[m+13];e[h+14]=k[m+14];e[h+15]=k[m+15]}}else e=z.subarray(d>>2,d+64*b>>2);V.uniformMatrix4fv(W(a),!!c,e)}},o:function(a){a=M[a];V.useProgram(a);V.zc=a},vb:function(a,
b){V.vertexAttribDivisor(a,b)},wb:function(a,b,c,d,e,k){V.vertexAttribPointer(a,b,c,!!d,e,k)},m:function(a,b,c,d){V.viewport(a,b,c,d)},Wa:function(){f.rc=a=>{0!=Ob()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",f.rc)},Sa:function(){f.wc=a=>{const b=a.clipboardData.getData("text");Ha(()=>{const c=Kb(b);Pb(c)})};window.addEventListener("paste",f.wc)},La:function(a){f.Nc=[];a=G(a);a=document.getElementById(a);f.sc=b=>{b.stopPropagation();b.preventDefault()};f.tc=b=>
{b.stopPropagation();b.preventDefault()};f.uc=b=>{b.stopPropagation();b.preventDefault()};f.vc=b=>{b.stopPropagation();b.preventDefault();const c=b.dataTransfer.files;f.Oc=c;Qb(c.length);for(let e=0;e<c.length;e++)Ha(()=>{const k=Kb(c[e].name);Rb(e,k)});let d=0;b.shiftKey&&(d|=1);b.ctrlKey&&(d|=2);b.altKey&&(d|=4);b.metaKey&&(d|=8);Sb(b.clientX,b.clientY,d)};a.addEventListener("dragenter",f.sc,!1);a.addEventListener("dragleave",f.tc,!1);a.addEventListener("dragover",f.uc,!1);a.addEventListener("drop",
f.vc,!1)},zb:function(){const a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},r:function(){const a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Tb()});document.body.append(a)},q:function(){document.getElementById("_sokol_app_input_element").focus()},wa:function(a){a=G(a);f.ac=document.getElementById(a);f.ac||console.log("sokol_app.h: invalid target:"+a);f.ac.requestPointerLock||
console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Va:function(){window.removeEventListener("beforeunload",f.rc)},Oa:function(){window.removeEventListener("paste",f.wc)},Da:function(a){a=G(a);a=document.getElementById(a);a.removeEventListener("dragenter",f.sc);a.removeEventListener("dragleave",f.tc);a.removeEventListener("dragover",f.uc);a.removeEventListener("drop",f.vc)},x:function(){f.ac&&f.ac.requestPointerLock&&f.ac.requestPointerLock()},qb:function(a,b,c){const d=document.createElement("canvas");
d.width=a;d.height=b;const e=d.getContext("2d"),k=e.createImageData(a,b);k.data.set(x.subarray(c,c+a*b*4));e.putImageData(k,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},p:function(){document.getElementById("_sokol_app_input_element").blur()},ia:function(a,b){b=G(b);switch(a){case 0:console.error(b);break;case 1:console.error(b);break;case 2:console.warn(b);break;default:console.info(b)}}};
(function(){function a(c){c=c.exports;f.asm=c;la=f.asm.Bb;ra();sa=f.asm.Rb;ua.unshift(f.asm.Cb);B--;f.monitorRunDependencies&&f.monitorRunDependencies(B);if(0==B&&(null!==za&&(clearInterval(za),za=null),C)){var d=C;C=null;d()}return c}var b={a:Ub};B++;f.monitorRunDependencies&&f.monitorRunDependencies(B);if(f.instantiateWasm)try{return f.instantiateWasm(b,a)}catch(c){return u("Module.instantiateWasm callback failed with error: "+c),!1}Fa(b,function(c){a(c.instance)});return{}})();
var Tb=f.__sapp_emsc_notify_keyboard_hidden=function(){return(Tb=f.__sapp_emsc_notify_keyboard_hidden=f.asm.Db).apply(null,arguments)},Pb=f.__sapp_emsc_onpaste=function(){return(Pb=f.__sapp_emsc_onpaste=f.asm.Eb).apply(null,arguments)},Ob=f.__sapp_html5_get_ask_leave_site=function(){return(Ob=f.__sapp_html5_get_ask_leave_site=f.asm.Fb).apply(null,arguments)},Qb=f.__sapp_emsc_begin_drop=function(){return(Qb=f.__sapp_emsc_begin_drop=f.asm.Gb).apply(null,arguments)},Rb=f.__sapp_emsc_drop=function(){return(Rb=
f.__sapp_emsc_drop=f.asm.Hb).apply(null,arguments)},Sb=f.__sapp_emsc_end_drop=function(){return(Sb=f.__sapp_emsc_end_drop=f.asm.Ib).apply(null,arguments)};f.__sapp_emsc_invoke_fetch_cb=function(){return(f.__sapp_emsc_invoke_fetch_cb=f.asm.Jb).apply(null,arguments)};var Vb=f._main=function(){return(Vb=f._main=f.asm.Kb).apply(null,arguments)};f.__saudio_emsc_pull=function(){return(f.__saudio_emsc_pull=f.asm.Lb).apply(null,arguments)};
f.__sfetch_emsc_head_response=function(){return(f.__sfetch_emsc_head_response=f.asm.Mb).apply(null,arguments)};f.__sfetch_emsc_get_response=function(){return(f.__sfetch_emsc_get_response=f.asm.Nb).apply(null,arguments)};f.__sfetch_emsc_failed_http_status=function(){return(f.__sfetch_emsc_failed_http_status=f.asm.Ob).apply(null,arguments)};f.__sfetch_emsc_failed_buffer_too_small=function(){return(f.__sfetch_emsc_failed_buffer_too_small=f.asm.Pb).apply(null,arguments)};
function K(){return(K=f.asm.Qb).apply(null,arguments)}function Ia(){return(Ia=f.asm.Sb).apply(null,arguments)}function Ja(){return(Ja=f.asm.Tb).apply(null,arguments)}function Lb(){return(Lb=f.asm.Ub).apply(null,arguments)}f.___start_em_js=10008;f.___stop_em_js=19683;var Wb;C=function Xb(){Wb||Yb();Wb||(C=Xb)};function Zb(a=[]){var b=Vb;a.unshift(ca);var c=a.length,d=Lb(4*(c+1)),e=d>>2;a.forEach(h=>{y[e++]=Kb(h)});y[e]=0;try{var k=b(c,d);Jb(k)}catch(h){h instanceof ja||"unwind"==h||g(1,h)}}
function Yb(){var a=ba;function b(){if(!Wb&&(Wb=!0,f.calledRun=!0,!ma)){Ga(ua);Ga(va);if(f.onRuntimeInitialized)f.onRuntimeInitialized();$b&&Zb(a);if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;){var c=f.postRun.shift();xa.unshift(c)}Ga(xa)}}if(!(0<B)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)ya();Ga(ta);0<B||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},
1)):b())}}if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var $b=!0;f.noInitialRun&&($b=!1);Yb();
