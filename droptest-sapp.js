
var g;g||(g=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign({},g),ba=[],ca="./this.program",k=(a,b)=>{throw b;},da="object"==typeof window,l="function"==typeof importScripts,q="",ea,t,u,fs,v,fa;
if("object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node)q=l?require("path").dirname(q)+"/":__dirname+"/",fa=()=>{v||(fs=require("fs"),v=require("path"))},ea=function(a,b){fa();a=v.normalize(a);return fs.readFileSync(a,b?void 0:"utf8")},u=a=>{a=ea(a,!0);a.buffer||(a=new Uint8Array(a));return a},t=(a,b,c)=>{fa();a=v.normalize(a);fs.readFile(a,function(d,e){d?c(d):b(e.buffer)})},1<process.argv.length&&(ca=process.argv[1].replace(/\\/g,"/")),ba=process.argv.slice(2),
"undefined"!=typeof module&&(module.exports=g),process.on("uncaughtException",function(a){if(!(a instanceof ha))throw a;}),process.on("unhandledRejection",function(a){throw a;}),k=(a,b)=>{if(noExitRuntime)throw process.exitCode=a,b;b instanceof ha||x("exiting due to exception: "+b);process.exit(a)},g.inspect=function(){return"[Emscripten Module object]"};else if(da||l)l?q=self.location.href:"undefined"!=typeof document&&document.currentScript&&(q=document.currentScript.src),q=0!==q.indexOf("blob:")?
q.substr(0,q.replace(/[?#].*/,"").lastIndexOf("/")+1):"",ea=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},l&&(u=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),t=(a,b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};
var ia=g.print||console.log.bind(console),x=g.printErr||console.warn.bind(console);Object.assign(g,aa);aa=null;g.arguments&&(ba=g.arguments);g.thisProgram&&(ca=g.thisProgram);g.quit&&(k=g.quit);var y;g.wasmBinary&&(y=g.wasmBinary);var noExitRuntime=g.noExitRuntime||!0;"object"!=typeof WebAssembly&&ja("no native wasm support detected");var ka,la=!1;
function ma(a,b,c){var d={string:function(n){var p=0;if(null!==n&&void 0!==n&&0!==n){var r=(n.length<<2)+1;p=z(r);A(n,B,p,r)}return p},array:function(n){var p=z(n.length);na.set(n,p);return p}};a=g["_"+a];var e=[],h=0;if(c)for(var f=0;f<c.length;f++){var m=d[b[f]];m?(0===h&&(h=oa()),e[f]=m(c[f])):e[f]=c[f]}b=a.apply(null,e);b=function(n){0!==h&&pa(h);return n}(b)}var qa="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;
function ra(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.buffer&&qa)return qa.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var h=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|h);else{var f=a[b++]&63;e=224==(e&240)?(e&15)<<12|h<<6|f:(e&7)<<18|h<<12|f<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function C(a,b){return a?ra(B,a,b):""}
function A(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var h=0;h<a.length;++h){var f=a.charCodeAt(h);if(55296<=f&&57343>=f){var m=a.charCodeAt(++h);f=65536+((f&1023)<<10)|m&1023}if(127>=f){if(c>=d)break;b[c++]=f}else{if(2047>=f){if(c+1>=d)break;b[c++]=192|f>>6}else{if(65535>=f){if(c+2>=d)break;b[c++]=224|f>>12}else{if(c+3>=d)break;b[c++]=240|f>>18;b[c++]=128|f>>12&63}b[c++]=128|f>>6&63}b[c++]=128|f&63}}b[c]=0;return c-e}
function sa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function ta(a){var b=sa(a)+1,c=z(b);A(a,na,c,b);return c}var ua,na,B,va,wa,D,xa,E,F;
function ya(){var a=ka.buffer;ua=a;g.HEAP8=na=new Int8Array(a);g.HEAP16=va=new Int16Array(a);g.HEAP32=D=new Int32Array(a);g.HEAPU8=B=new Uint8Array(a);g.HEAPU16=wa=new Uint16Array(a);g.HEAPU32=xa=new Uint32Array(a);g.HEAPF32=E=new Float32Array(a);g.HEAPF64=F=new Float64Array(a)}var za,Aa=[],Ba=[],Ca=[],Da=[],Ea=[];function Fa(){var a=g.preRun.shift();Aa.unshift(a)}var G=0,Ga=null,H=null;
function ja(a){if(g.onAbort)g.onAbort(a);a="Aborted("+a+")";x(a);la=!0;throw new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");}function Ha(){return I.startsWith("data:application/octet-stream;base64,")}var I;I="droptest-sapp.wasm";if(!Ha()){var Ia=I;I=g.locateFile?g.locateFile(Ia,q):q+Ia}function Ja(){var a=I;try{if(a==I&&y)return new Uint8Array(y);if(u)return u(a);throw"both async and sync fetching of the wasm failed";}catch(b){ja(b)}}
function Ka(){if(!y&&(da||l)){if("function"==typeof fetch&&!I.startsWith("file://"))return fetch(I,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+I+"'";return a.arrayBuffer()}).catch(function(){return Ja()});if(t)return new Promise(function(a,b){t(I,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ja()})}
function La(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(g);else{var c=b.Nc;"number"==typeof c?void 0===b.mc?J(c)():J(c)(b.mc):c(void 0===b.mc?null:b.mc)}}}var Ma=[];function J(a){var b=Ma[a];b||(a>=Ma.length&&(Ma.length=a+1),Ma[a]=b=za.get(a));return b}var Na=0;function Oa(){for(var a=K.length-1;0<=a;--a)Pa(a);K=[];Qa=[]}var Qa=[];function Ra(){if(Na&&Sa.hc)for(var a=0;a<Qa.length;++a){var b=Qa[a];Qa.splice(a,1);--a;b.Vc.apply(null,b.Kc)}}var K=[];
function Pa(a){var b=K[a];b.target.removeEventListener(b.Zb,b.Gc,b.$b);K.splice(a,1)}function L(a){function b(d){++Na;Sa=a;Ra();a.bc(d);Ra();--Na}if(a.ac)a.Gc=b,a.target.addEventListener(a.Zb,b,a.$b),K.push(a),Ta||(Da.push(Oa),Ta=!0);else for(var c=0;c<K.length;++c)K[c].target==a.target&&K[c].Zb==a.Zb&&Pa(c--)}function Ua(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}
var Ta,Sa,Va,Wa,Xa,Ya,Za,$a,ab,bb=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0];function M(a){a=2<a?C(a):a;return bb[a]||("undefined"!=typeof document?document.querySelector(a):void 0)}function cb(a){return 0>bb.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}
function db(a,b,c,d,e,h){Va||(Va=O(256));a={target:M(a),Zb:h,ac:d,bc:function(f){f=f||event;var m=f.target.id?f.target.id:"",n=Va;A(Ua(f.target),B,n+0,128);A(m,B,n+128,128);J(d)(e,n,b)&&f.preventDefault()},$b:c};L(a)}
function eb(a,b,c,d,e,h){Wa||(Wa=O(176));a={target:M(a),hc:!0,Zb:h,ac:d,bc:function(f){var m=Wa;F[m>>3]=f.timeStamp;var n=m>>2;D[n+2]=f.location;D[n+3]=f.ctrlKey;D[n+4]=f.shiftKey;D[n+5]=f.altKey;D[n+6]=f.metaKey;D[n+7]=f.repeat;D[n+8]=f.charCode;D[n+9]=f.keyCode;D[n+10]=f.which;A(f.key||"",B,m+44,32);A(f.code||"",B,m+76,32);A(f.char||"",B,m+108,32);A(f.locale||"",B,m+140,32);J(d)(e,m,b)&&f.preventDefault()},$b:c};L(a)}
function fb(a,b,c){F[a>>3]=b.timeStamp;a>>=2;D[a+2]=b.screenX;D[a+3]=b.screenY;D[a+4]=b.clientX;D[a+5]=b.clientY;D[a+6]=b.ctrlKey;D[a+7]=b.shiftKey;D[a+8]=b.altKey;D[a+9]=b.metaKey;va[2*a+20]=b.button;va[2*a+21]=b.buttons;D[a+11]=b.movementX;D[a+12]=b.movementY;c=cb(c);D[a+13]=b.clientX-c.left;D[a+14]=b.clientY-c.top}
function P(a,b,c,d,e,h){Xa||(Xa=O(72));a=M(a);L({target:a,hc:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,Zb:h,ac:d,bc:function(f){f=f||event;fb(Xa,f,a);J(d)(e,Xa,b)&&f.preventDefault()},$b:c})}function gb(a,b,c,d,e){Ya||(Ya=O(260));L({target:a,Zb:e,ac:d,bc:function(h){h=h||event;var f=Ya,m=document.pointerLockElement||document.dc||document.qc||document.pc;D[f>>2]=!!m;var n=m&&m.id?m.id:"";A(Ua(m),B,f+4,128);A(n,B,f+132,128);J(d)(20,f,b)&&h.preventDefault()},$b:c})}
function hb(a,b,c,d,e){L({target:a,Zb:e,ac:d,bc:function(h){h=h||event;J(d)(38,0,b)&&h.preventDefault()},$b:c})}
function ib(a,b,c,d){Za||(Za=O(36));a=M(a);L({target:a,Zb:"resize",ac:d,bc:function(e){e=e||event;if(e.target==a){var h=document.body;if(h){var f=Za;D[f>>2]=e.detail;D[f+4>>2]=h.clientWidth;D[f+8>>2]=h.clientHeight;D[f+12>>2]=innerWidth;D[f+16>>2]=innerHeight;D[f+20>>2]=outerWidth;D[f+24>>2]=outerHeight;D[f+28>>2]=pageXOffset;D[f+32>>2]=pageYOffset;J(d)(10,f,b)&&e.preventDefault()}}},$b:c})}
function jb(a,b,c,d,e,h){$a||($a=O(1696));a=M(a);L({target:a,hc:"touchstart"==h||"touchend"==h,Zb:h,ac:d,bc:function(f){for(var m,n={},p=f.touches,r=0;r<p.length;++r)m=p[r],m.uc=m.wc=0,n[m.identifier]=m;for(r=0;r<f.changedTouches.length;++r)m=f.changedTouches[r],m.uc=1,n[m.identifier]=m;for(r=0;r<f.targetTouches.length;++r)n[f.targetTouches[r].identifier].wc=1;p=$a;F[p>>3]=f.timeStamp;var w=p>>2;D[w+3]=f.ctrlKey;D[w+4]=f.shiftKey;D[w+5]=f.altKey;D[w+6]=f.metaKey;w+=7;var N=cb(a),pb=0;for(r in n)if(m=
n[r],D[w]=m.identifier,D[w+1]=m.screenX,D[w+2]=m.screenY,D[w+3]=m.clientX,D[w+4]=m.clientY,D[w+5]=m.pageX,D[w+6]=m.pageY,D[w+7]=m.uc,D[w+8]=m.wc,D[w+9]=m.clientX-N.left,D[w+10]=m.clientY-N.top,w+=13,31<++pb)break;D[p+8>>2]=pb;J(d)(e,p,b)&&f.preventDefault()},$b:c})}function kb(a,b,c,d,e,h){a={target:M(a),Zb:h,ac:d,bc:function(f){f=f||event;J(d)(e,0,b)&&f.preventDefault()},$b:c};L(a)}
function lb(a,b,c,d){ab||(ab=O(104));L({target:a,hc:!0,Zb:"wheel",ac:d,bc:function(e){e=e||event;var h=ab;fb(h,e,a);F[h+72>>3]=e.deltaX;F[h+80>>3]=e.deltaY;F[h+88>>3]=e.deltaZ;D[h+96>>2]=e.deltaMode;J(d)(9,h,b)&&e.preventDefault()},$b:c})}
function mb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,h){b.drawArraysInstancedANGLE(c,d,e,h)},a.drawElementsInstanced=function(c,d,e,h,f){b.drawElementsInstancedANGLE(c,d,e,h,f)})}
function nb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function ob(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function qb(a){a.Mc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function rb(a){a.Pc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function sb(a){a.Rc=a.getExtension("WEBGL_multi_draw")}var tb=1,ub=[],Q=[],vb=[],wb=[],xb=[],R=[],yb=[],zb=[],Ab={},Bb={};function S(a){Cb||(Cb=a)}function Db(a){for(var b=tb++,c=a.length;c<b;c++)a[c]=null;return b}
function Eb(a,b){a.dc||(a.dc=a.getContext,a.getContext=function(d,e){e=a.dc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.vc?a.getContext("webgl2",b):a.getContext("webgl",b);return c?Fb(c,b):0}function Fb(a,b){var c=Db(zb),d={Oc:c,attributes:b,version:b.vc,lc:a};a.canvas&&(a.canvas.Jc=d);zb[c]=d;("undefined"==typeof b.tc||b.tc)&&Gb(d);return c}
function Gb(a){a||(a=T);if(!a.Ic){a.Ic=!0;var b=a.lc;mb(b);nb(b);ob(b);qb(b);rb(b);2<=a.version&&(b.sc=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.sc)b.sc=b.getExtension("EXT_disjoint_timer_query");sb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var Cb,T,Hb=["default","low-power","high-performance"],Ib=[null,[],[]];
function Jb(a,b,c,d){for(var e=0;e<a;e++){var h=U[c](),f=h&&Db(d);h?(h.name=f,d[f]=h):S(1282);D[b+4*e>>2]=f}}
function Kb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=U.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>T.version){S(1282);return}c=2*(U.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>T.version){S(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=U.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":S(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:S(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)D[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){S(1280);x("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:S(1280);x("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}D[b>>2]=c}else S(1281)}
function V(a){var b=sa(a)+1,c=O(b);A(a,B,c,b);return c}function Lb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function Mb(a){a-=5120;return 0==a?na:1==a?B:2==a?va:4==a?D:6==a?E:5==a||28922==a||28520==a||30779==a||30782==a?xa:wa}function W(a){var b=U.Fc;if(b){var c=b.fc[a];"number"==typeof c&&(b.fc[a]=c=U.getUniformLocation(b,b.Dc[a]+(0<c?"["+c+"]":"")));return c}S(1282)}for(var X=[],Y=[],U,Nb=new Float32Array(288),Z=0;288>Z;++Z)X[Z]=Nb.subarray(0,Z+1);var Ob=new Int32Array(288);
for(Z=0;288>Z;++Z)Y[Z]=Ob.subarray(0,Z+1);
var Ub={ha:function(){return 0},eb:function(){return 0},fb:function(){},M:function(){return"number"==typeof devicePixelRatio&&devicePixelRatio||1},P:function(a,b,c){a=M(a);if(!a)return-4;a=cb(a);F[b>>3]=a.width;F[c>>3]=a.height;return 0},bb:function(a,b,c){B.copyWithin(a,b,b+c)},Ca:function(a,b){function c(d){J(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},ab:function(a){var b=B.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);
var e=Math;d=Math.max(a,d);e=e.min.call(e,2147483648,d+(65536-d%65536)%65536);a:{try{ka.grow(e-ua.byteLength+65535>>>16);ya();var h=1;break a}catch(f){}h=void 0}if(h)return!0}return!1},S:function(a,b,c,d){db(a,b,c,d,12,"blur");return 0},I:function(a,b,c){a=M(a);if(!a)return-4;a.width=b;a.height=c;return 0},T:function(a,b,c,d){db(a,b,c,d,13,"focus");return 0},aa:function(a,b,c,d){eb(a,b,c,d,2,"keydown");return 0},_:function(a,b,c,d){eb(a,b,c,d,1,"keypress");return 0},$:function(a,b,c,d){eb(a,b,c,d,
3,"keyup");return 0},ia:function(a,b,c,d){P(a,b,c,d,5,"mousedown");return 0},da:function(a,b,c,d){P(a,b,c,d,33,"mouseenter");return 0},ca:function(a,b,c,d){P(a,b,c,d,34,"mouseleave");return 0},ea:function(a,b,c,d){P(a,b,c,d,8,"mousemove");return 0},fa:function(a,b,c,d){P(a,b,c,d,6,"mouseup");return 0},V:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.dc||document.body.qc||document.body.pc))return-1;a=M(a);if(!a)return-4;gb(a,b,c,d,"pointerlockchange");
gb(a,b,c,d,"mozpointerlockchange");gb(a,b,c,d,"webkitpointerlockchange");gb(a,b,c,d,"mspointerlockchange");return 0},U:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.dc||document.body.qc||document.body.pc))return-1;a=M(a);if(!a)return-4;hb(a,b,c,d,"pointerlockerror");hb(a,b,c,d,"mozpointerlockerror");hb(a,b,c,d,"webkitpointerlockerror");hb(a,b,c,d,"mspointerlockerror");return 0},Ma:function(a,b,c,d){ib(a,b,c,d);return 0},W:function(a,b,c,d){jb(a,b,c,d,25,"touchcancel");
return 0},X:function(a,b,c,d){jb(a,b,c,d,23,"touchend");return 0},Y:function(a,b,c,d){jb(a,b,c,d,24,"touchmove");return 0},Z:function(a,b,c,d){jb(a,b,c,d,22,"touchstart");return 0},R:function(a,b,c,d){kb(a,b,c,d,31,"webglcontextlost");return 0},Q:function(a,b,c,d){kb(a,b,c,d,32,"webglcontextrestored");return 0},ba:function(a,b,c,d){a=M(a);return"undefined"!=typeof a.onwheel?(lb(a,b,c,d),0):-1},ma:function(a,b){b>>=2;b={alpha:!!D[b],depth:!!D[b+1],stencil:!!D[b+2],antialias:!!D[b+3],premultipliedAlpha:!!D[b+
4],preserveDrawingBuffer:!!D[b+5],powerPreference:Hb[D[b+6]],failIfMajorPerformanceCaveat:!!D[b+7],vc:D[b+8],Qc:D[b+9],tc:D[b+10],Hc:D[b+11],Sc:D[b+12],Tc:D[b+13]};a=M(a);return!a||b.Hc?0:Eb(a,b)},ob:function(a,b){a=zb[a];b=C(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&mb(U);"OES_vertex_array_object"==b&&nb(U);"WEBGL_draw_buffers"==b&&ob(U);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&qb(U);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&rb(U);"WEBGL_multi_draw"==
b&&sb(U);return!!a.lc.getExtension(b)},ta:function(a){a>>=2;for(var b=0;14>b;++b)D[a+b]=0;D[a]=D[a+1]=D[a+3]=D[a+4]=D[a+8]=D[a+10]=1},xb:function(a){T=zb[a];g.Lc=U=T&&T.lc;return!a||U?0:-5},ga:function(){return 52},db:function(){return 52},$a:function(){return 70},cb:function(a,b,c,d){for(var e=0,h=0;h<c;h++){var f=xa[b>>2],m=xa[b+4>>2];b+=8;for(var n=0;n<m;n++){var p=B[f+n],r=Ib[a];0===p||10===p?((1===a?ia:x)(ra(r,0)),r.length=0):r.push(p)}e+=m}D[d>>2]=e;return 0},b:function(a){U.activeTexture(a)},
C:function(a,b){U.attachShader(Q[a],R[b])},c:function(a,b){35051==a?U.rc=b:35052==a&&(U.cc=b);U.bindBuffer(a,ub[b])},h:function(a,b){U.bindFramebuffer(a,vb[b])},Da:function(a,b){U.bindRenderbuffer(a,wb[b])},a:function(a,b){U.bindTexture(a,xb[b])},N:function(a){U.bindVertexArray(yb[a])},H:function(a,b,c,d){U.blendColor(a,b,c,d)},J:function(a,b){U.blendEquationSeparate(a,b)},K:function(a,b,c,d){U.blendFuncSeparate(a,b,c,d)},p:function(a,b,c,d,e,h,f,m,n,p){U.blitFramebuffer(a,b,c,d,e,h,f,m,n,p)},Fa:function(a,
b,c,d){2<=T.version?c&&b?U.bufferData(a,B,d,c,b):U.bufferData(a,b,d):U.bufferData(a,c?B.subarray(c,c+b):b,d)},u:function(a,b,c,d){2<=T.version?c&&U.bufferSubData(a,b,B,d,c):U.bufferSubData(a,b,B.subarray(d,d+c))},yb:function(a){U.clear(a)},Bb:function(a,b,c,d){U.clearColor(a,b,c,d)},Ab:function(a){U.clearDepth(a)},zb:function(a){U.clearStencil(a)},l:function(a,b,c,d){U.colorMask(!!a,!!b,!!c,!!d)},oa:function(a){U.compileShader(R[a])},ya:function(a,b,c,d,e,h,f,m){2<=T.version?U.cc||!f?U.compressedTexImage2D(a,
b,c,d,e,h,f,m):U.compressedTexImage2D(a,b,c,d,e,h,B,m,f):U.compressedTexImage2D(a,b,c,d,e,h,m?B.subarray(m,m+f):null)},wa:function(a,b,c,d,e,h,f,m,n){U.cc?U.compressedTexImage3D(a,b,c,d,e,h,f,m,n):U.compressedTexImage3D(a,b,c,d,e,h,f,B,n,m)},ua:function(){var a=Db(Q),b=U.createProgram();b.name=a;b.kc=b.ic=b.jc=0;b.oc=1;Q[a]=b;return a},qa:function(a){var b=Db(R);R[b]=U.createShader(a);return b},E:function(a){U.cullFace(a)},Na:function(a,b){for(var c=0;c<a;c++){var d=D[b+4*c>>2],e=ub[d];e&&(U.deleteBuffer(e),
e.name=0,ub[d]=null,d==U.rc&&(U.rc=0),d==U.cc&&(U.cc=0))}},i:function(a,b){for(var c=0;c<a;++c){var d=D[b+4*c>>2],e=vb[d];e&&(U.deleteFramebuffer(e),e.name=0,vb[d]=null)}},y:function(a){if(a){var b=Q[a];b?(U.deleteProgram(b),b.name=0,Q[a]=null):S(1281)}},O:function(a,b){for(var c=0;c<a;c++){var d=D[b+4*c>>2],e=wb[d];e&&(U.deleteRenderbuffer(e),e.name=0,wb[d]=null)}},t:function(a){if(a){var b=R[a];b?(U.deleteShader(b),R[a]=null):S(1281)}},La:function(a,b){for(var c=0;c<a;c++){var d=D[b+4*c>>2],e=xb[d];
e&&(U.deleteTexture(e),e.name=0,xb[d]=null)}},Ka:function(a,b){for(var c=0;c<a;c++){var d=D[b+4*c>>2];U.deleteVertexArray(yb[d]);yb[d]=null}},x:function(a){U.depthFunc(a)},w:function(a){U.depthMask(!!a)},e:function(a){U.disable(a)},L:function(a){U.disableVertexAttribArray(a)},gb:function(a,b,c){U.drawArrays(a,b,c)},hb:function(a,b,c,d){U.drawArraysInstanced(a,b,c,d)},ib:function(a,b,c,d){U.drawElements(a,b,c,d)},jb:function(a,b,c,d,e){U.drawElementsInstanced(a,b,c,d,e)},g:function(a){U.enable(a)},
ub:function(a){U.enableVertexAttribArray(a)},F:function(a){U.frontFace(a)},Ga:function(a,b){Jb(a,b,"createBuffer",ub)},Ea:function(a,b){Jb(a,b,"createRenderbuffer",wb)},za:function(a,b){Jb(a,b,"createTexture",xb)},Ja:function(a,b){Jb(a,b,"createVertexArray",yb)},Cb:function(a,b){return U.getAttribLocation(Q[a],C(b))},d:function(a,b){Kb(a,b)},ra:function(a,b,c,d){a=U.getProgramInfoLog(Q[a]);null===a&&(a="(unknown error)");b=0<b&&d?A(a,B,d,b):0;c&&(D[c>>2]=b)},B:function(a,b,c){if(c)if(a>=tb)S(1281);
else if(a=Q[a],35716==b)a=U.getProgramInfoLog(a),null===a&&(a="(unknown error)"),D[c>>2]=a.length+1;else if(35719==b){if(!a.kc)for(b=0;b<U.getProgramParameter(a,35718);++b)a.kc=Math.max(a.kc,U.getActiveUniform(a,b).name.length+1);D[c>>2]=a.kc}else if(35722==b){if(!a.ic)for(b=0;b<U.getProgramParameter(a,35721);++b)a.ic=Math.max(a.ic,U.getActiveAttrib(a,b).name.length+1);D[c>>2]=a.ic}else if(35381==b){if(!a.jc)for(b=0;b<U.getProgramParameter(a,35382);++b)a.jc=Math.max(a.jc,U.getActiveUniformBlockName(a,
b).length+1);D[c>>2]=a.jc}else D[c>>2]=U.getProgramParameter(a,b);else S(1281)},Db:function(a,b,c,d){a=U.getShaderInfoLog(R[a]);null===a&&(a="(unknown error)");b=0<b&&d?A(a,B,d,b):0;c&&(D[c>>2]=b)},la:function(a,b,c){c?35716==b?(a=U.getShaderInfoLog(R[a]),null===a&&(a="(unknown error)"),D[c>>2]=a?a.length+1:0):35720==b?(a=U.getShaderSource(R[a]),D[c>>2]=a?a.length+1:0):D[c>>2]=U.getShaderParameter(R[a],b):S(1281)},Pa:function(a){var b=Ab[a];if(!b){switch(a){case 7939:b=U.getSupportedExtensions()||
[];b=b.concat(b.map(function(d){return"GL_"+d}));b=V(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=U.getParameter(a))||S(1280);b=b&&V(b);break;case 7938:b=U.getParameter(7938);b=2<=T.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=V(b);break;case 35724:b=U.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=V(b);break;default:S(1280)}Ab[a]=b}return b},Oa:function(a,
b){if(2>T.version)return S(1282),0;var c=Bb[a];if(c)return 0>b||b>=c.length?(S(1281),0):c[b];switch(a){case 7939:return c=U.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return V(d)}),c=Bb[a]=c,0>b||b>=c.length?(S(1281),0):c[b];default:return S(1280),0}},k:function(a,b){b=C(b);if(a=Q[a]){var c=a,d=c.fc,e=c.Ec,h;if(!d)for(c.fc=d={},c.Dc={},h=0;h<U.getProgramParameter(c,35718);++h){var f=U.getActiveUniform(c,h);var m=f.name;f=f.size;var n=Lb(m);n=0<n?
m.slice(0,n):m;var p=c.oc;c.oc+=f;e[n]=[f,p];for(m=0;m<f;++m)d[p]=m,c.Dc[p++]=n}c=a.fc;d=0;e=b;h=Lb(b);0<h&&(d=parseInt(b.slice(h+1))>>>0,e=b.slice(0,h));if((e=a.Ec[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||U.getUniformLocation(a,b)))return d}else S(1281);return-1},sa:function(a){a=Q[a];U.linkProgram(a);a.fc=0;a.Ec={}},G:function(a,b){U.polygonOffset(a,b)},q:function(a){U.readBuffer(a)},Aa:function(a,b,c,d){U.renderbufferStorage(a,b,c,d)},Ba:function(a,b,c,d,e){U.renderbufferStorageMultisample(a,b,c,d,e)},
r:function(a,b,c,d){U.scissor(a,b,c,d)},pa:function(a,b,c,d){for(var e="",h=0;h<b;++h){var f=d?D[d+4*h>>2]:-1;e+=C(D[c+4*h>>2],0>f?void 0:f)}U.shaderSource(R[a],e)},Ia:function(a,b,c){U.stencilFunc(a,b,c)},ka:function(a,b,c,d){U.stencilFuncSeparate(a,b,c,d)},v:function(a){U.stencilMask(a)},Ha:function(a,b,c){U.stencilOp(a,b,c)},ja:function(a,b,c,d){U.stencilOpSeparate(a,b,c,d)},xa:function(a,b,c,d,e,h,f,m,n){if(2<=T.version)if(U.cc)U.texImage2D(a,b,c,d,e,h,f,m,n);else if(n){var p=Mb(m);U.texImage2D(a,
b,c,d,e,h,f,m,p,n>>31-Math.clz32(p.BYTES_PER_ELEMENT))}else U.texImage2D(a,b,c,d,e,h,f,m,null);else{p=U;var r=p.texImage2D;if(n){var w=Mb(m),N=31-Math.clz32(w.BYTES_PER_ELEMENT);n=w.subarray(n>>N,n+e*(d*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[f-6402]||1)*(1<<N)+4-1&-4)>>N)}else n=null;r.call(p,a,b,c,d,e,h,f,m,n)}},va:function(a,b,c,d,e,h,f,m,n,p){if(U.cc)U.texImage3D(a,b,c,d,e,h,f,m,n,p);else if(p){var r=Mb(n);U.texImage3D(a,b,c,d,e,h,f,m,n,r,p>>31-Math.clz32(r.BYTES_PER_ELEMENT))}else U.texImage3D(a,
b,c,d,e,h,f,m,n,null)},D:function(a,b,c){U.texParameterf(a,b,c)},f:function(a,b,c){U.texParameteri(a,b,c)},tb:function(a,b,c){if(2<=T.version)b&&U.uniform1fv(W(a),E,c>>2,b);else{if(288>=b)for(var d=X[b-1],e=0;e<b;++e)d[e]=E[c+4*e>>2];else d=E.subarray(c>>2,c+4*b>>2);U.uniform1fv(W(a),d)}},A:function(a,b){U.uniform1i(W(a),b)},pb:function(a,b,c){if(2<=T.version)b&&U.uniform1iv(W(a),D,c>>2,b);else{if(288>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=D[c+4*e>>2];else d=D.subarray(c>>2,c+4*b>>2);U.uniform1iv(W(a),
d)}},sb:function(a,b,c){if(2<=T.version)b&&U.uniform2fv(W(a),E,c>>2,2*b);else{if(144>=b)for(var d=X[2*b-1],e=0;e<2*b;e+=2)d[e]=E[c+4*e>>2],d[e+1]=E[c+(4*e+4)>>2];else d=E.subarray(c>>2,c+8*b>>2);U.uniform2fv(W(a),d)}},nb:function(a,b,c){if(2<=T.version)b&&U.uniform2iv(W(a),D,c>>2,2*b);else{if(144>=b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=D[c+4*e>>2],d[e+1]=D[c+(4*e+4)>>2];else d=D.subarray(c>>2,c+8*b>>2);U.uniform2iv(W(a),d)}},rb:function(a,b,c){if(2<=T.version)b&&U.uniform3fv(W(a),E,c>>2,3*b);else{if(96>=
b)for(var d=X[3*b-1],e=0;e<3*b;e+=3)d[e]=E[c+4*e>>2],d[e+1]=E[c+(4*e+4)>>2],d[e+2]=E[c+(4*e+8)>>2];else d=E.subarray(c>>2,c+12*b>>2);U.uniform3fv(W(a),d)}},mb:function(a,b,c){if(2<=T.version)b&&U.uniform3iv(W(a),D,c>>2,3*b);else{if(96>=b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=D[c+4*e>>2],d[e+1]=D[c+(4*e+4)>>2],d[e+2]=D[c+(4*e+8)>>2];else d=D.subarray(c>>2,c+12*b>>2);U.uniform3iv(W(a),d)}},qb:function(a,b,c){if(2<=T.version)b&&U.uniform4fv(W(a),E,c>>2,4*b);else{if(72>=b){var d=X[4*b-1],e=E;c>>=2;for(var h=
0;h<4*b;h+=4){var f=c+h;d[h]=e[f];d[h+1]=e[f+1];d[h+2]=e[f+2];d[h+3]=e[f+3]}}else d=E.subarray(c>>2,c+16*b>>2);U.uniform4fv(W(a),d)}},lb:function(a,b,c){if(2<=T.version)b&&U.uniform4iv(W(a),D,c>>2,4*b);else{if(72>=b)for(var d=Y[4*b-1],e=0;e<4*b;e+=4)d[e]=D[c+4*e>>2],d[e+1]=D[c+(4*e+4)>>2],d[e+2]=D[c+(4*e+8)>>2],d[e+3]=D[c+(4*e+12)>>2];else d=D.subarray(c>>2,c+16*b>>2);U.uniform4iv(W(a),d)}},kb:function(a,b,c,d){if(2<=T.version)b&&U.uniformMatrix4fv(W(a),!!c,E,d>>2,16*b);else{if(18>=b){var e=X[16*
b-1],h=E;d>>=2;for(var f=0;f<16*b;f+=16){var m=d+f;e[f]=h[m];e[f+1]=h[m+1];e[f+2]=h[m+2];e[f+3]=h[m+3];e[f+4]=h[m+4];e[f+5]=h[m+5];e[f+6]=h[m+6];e[f+7]=h[m+7];e[f+8]=h[m+8];e[f+9]=h[m+9];e[f+10]=h[m+10];e[f+11]=h[m+11];e[f+12]=h[m+12];e[f+13]=h[m+13];e[f+14]=h[m+14];e[f+15]=h[m+15]}}else e=E.subarray(d>>2,d+64*b>>2);U.uniformMatrix4fv(W(a),!!c,e)}},j:function(a){a=Q[a];U.useProgram(a);U.Fc=a},vb:function(a,b){U.vertexAttribDivisor(a,b)},wb:function(a,b,c,d,e,h){U.vertexAttribPointer(a,b,c,!!d,e,h)},
s:function(a,b,c,d){U.viewport(a,b,c,d)},Ya:function(){g.xc=function(a){0!=Pb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",g.xc)},Xa:function(){g.Cc=function(a){a=a.clipboardData.getData("text");ma("_sapp_emsc_onpaste",["string"],[a])};window.addEventListener("paste",g.Cc)},Wa:function(a){g.Uc=[];a=C(a);a=document.getElementById(a);g.yc=function(b){b.stopPropagation();b.preventDefault()};g.zc=function(b){b.stopPropagation();b.preventDefault()};g.Ac=function(b){b.stopPropagation();
b.preventDefault()};g.Bc=function(b){b.stopPropagation();b.preventDefault();var c=b.dataTransfer.files;g.nc=c;Qb(c.length);var d;for(d=0;d<c.length;d++)ma("_sapp_emsc_drop",["number","string"],[d,c[d].name]);Rb(b.clientX,b.clientY)};a.addEventListener("dragenter",g.yc,!1);a.addEventListener("dragleave",g.zc,!1);a.addEventListener("dragover",g.Ac,!1);a.addEventListener("drop",g.Bc,!1)},Ra:function(){var a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},o:function(){var a=
document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Sb()});document.body.append(a)},Eb:function(a){return 0>a||a>=g.nc.length?0:g.nc[a].size},_a:function(a,b,c,d,e){var h=new FileReader;h.onload=function(f){f=f.target.result;f.byteLength>d?Tb(a,0,1,b,0,c,d,e):(B.set(new Uint8Array(f),c),Tb(a,1,0,b,f.byteLength,c,d,e))};h.onerror=function(){Tb(a,0,2,b,0,c,d,e)};h.readAsArrayBuffer(g.nc[a])},n:function(){document.getElementById("_sokol_app_input_element").focus()},
Za:function(a){a=C(a);g.ec=document.getElementById(a);g.ec||console.log("sokol_app.h: invalid target:"+a);g.ec.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Va:function(){window.removeEventListener("beforeunload",g.xc)},Ua:function(){window.removeEventListener("paste",g.Cc)},Ta:function(a){a=C(a);a=document.getElementById(a);a.removeEventListener("dragenter",g.yc);a.removeEventListener("dragleave",g.zc);a.removeEventListener("dragover",g.Ac);a.removeEventListener("drop",
g.Bc)},z:function(){g.ec&&g.ec.requestPointerLock&&g.ec.requestPointerLock()},Qa:function(a,b,c){var d=document.createElement("canvas");d.width=a;d.height=b;var e=d.getContext("2d"),h=e.createImageData(a,b);h.data.set(B.subarray(c,c+a*b*4));e.putImageData(h,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},m:function(){document.getElementById("_sokol_app_input_element").blur()},Sa:function(a){a=C(a);var b=document.createElement("textarea");
b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");b.setAttribute("spellcheck","false");b.style.left="-100px";b.style.top="-100px";b.style.height=1;b.style.width=1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");document.body.removeChild(b)},na:function(){return navigator.userAgent.includes("Macintosh")?1:0}};
(function(){function a(e){g.asm=e.exports;ka=g.asm.Fb;ya();za=g.asm.Vb;Ba.unshift(g.asm.Gb);G--;g.monitorRunDependencies&&g.monitorRunDependencies(G);0==G&&(null!==Ga&&(clearInterval(Ga),Ga=null),H&&(e=H,H=null,e()))}function b(e){a(e.instance)}function c(e){return Ka().then(function(h){return WebAssembly.instantiate(h,d)}).then(function(h){return h}).then(e,function(h){x("failed to asynchronously prepare wasm: "+h);ja(h)})}var d={a:Ub};G++;g.monitorRunDependencies&&g.monitorRunDependencies(G);if(g.instantiateWasm)try{return g.instantiateWasm(d,
a)}catch(e){return x("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return y||"function"!=typeof WebAssembly.instantiateStreaming||Ha()||I.startsWith("file://")||"function"!=typeof fetch?c(b):fetch(I,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(h){x("wasm streaming compile failed: "+h);x("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
g.___wasm_call_ctors=function(){return(g.___wasm_call_ctors=g.asm.Gb).apply(null,arguments)};var O=g._malloc=function(){return(O=g._malloc=g.asm.Hb).apply(null,arguments)},Sb=g.__sapp_emsc_notify_keyboard_hidden=function(){return(Sb=g.__sapp_emsc_notify_keyboard_hidden=g.asm.Ib).apply(null,arguments)};g.__sapp_emsc_onpaste=function(){return(g.__sapp_emsc_onpaste=g.asm.Jb).apply(null,arguments)};
var Pb=g.__sapp_html5_get_ask_leave_site=function(){return(Pb=g.__sapp_html5_get_ask_leave_site=g.asm.Kb).apply(null,arguments)},Qb=g.__sapp_emsc_begin_drop=function(){return(Qb=g.__sapp_emsc_begin_drop=g.asm.Lb).apply(null,arguments)};g.__sapp_emsc_drop=function(){return(g.__sapp_emsc_drop=g.asm.Mb).apply(null,arguments)};
var Rb=g.__sapp_emsc_end_drop=function(){return(Rb=g.__sapp_emsc_end_drop=g.asm.Nb).apply(null,arguments)},Tb=g.__sapp_emsc_invoke_fetch_cb=function(){return(Tb=g.__sapp_emsc_invoke_fetch_cb=g.asm.Ob).apply(null,arguments)};g._main=function(){return(g._main=g.asm.Pb).apply(null,arguments)};g.__saudio_emsc_pull=function(){return(g.__saudio_emsc_pull=g.asm.Qb).apply(null,arguments)};g.__sfetch_emsc_head_response=function(){return(g.__sfetch_emsc_head_response=g.asm.Rb).apply(null,arguments)};
g.__sfetch_emsc_get_response=function(){return(g.__sfetch_emsc_get_response=g.asm.Sb).apply(null,arguments)};g.__sfetch_emsc_failed_http_status=function(){return(g.__sfetch_emsc_failed_http_status=g.asm.Tb).apply(null,arguments)};g.__sfetch_emsc_failed_buffer_too_small=function(){return(g.__sfetch_emsc_failed_buffer_too_small=g.asm.Ub).apply(null,arguments)};
var oa=g.stackSave=function(){return(oa=g.stackSave=g.asm.Wb).apply(null,arguments)},pa=g.stackRestore=function(){return(pa=g.stackRestore=g.asm.Xb).apply(null,arguments)},z=g.stackAlloc=function(){return(z=g.stackAlloc=g.asm.Yb).apply(null,arguments)},Vb;function ha(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}H=function Wb(){Vb||Xb();Vb||(H=Wb)};
function Xb(a){function b(){if(!Vb&&(Vb=!0,g.calledRun=!0,!la)){La(Ba);La(Ca);if(g.onRuntimeInitialized)g.onRuntimeInitialized();if(Yb){var c=a,d=g._main;c=c||[];var e=c.length+1,h=z(4*(e+1));D[h>>2]=ta(ca);for(var f=1;f<e;f++)D[(h>>2)+f]=ta(c[f-1]);D[(h>>2)+e]=0;try{var m=d(e,h);if(!noExitRuntime){if(g.onExit)g.onExit(m);la=!0}k(m,new ha(m))}catch(n){n instanceof ha||"unwind"==n||k(1,n)}finally{}}if(g.postRun)for("function"==typeof g.postRun&&(g.postRun=[g.postRun]);g.postRun.length;)c=g.postRun.shift(),
Ea.unshift(c);La(Ea)}}a=a||ba;if(!(0<G)){if(g.preRun)for("function"==typeof g.preRun&&(g.preRun=[g.preRun]);g.preRun.length;)Fa();La(Aa);0<G||(g.setStatus?(g.setStatus("Running..."),setTimeout(function(){setTimeout(function(){g.setStatus("")},1);b()},1)):b())}}g.run=Xb;if(g.preInit)for("function"==typeof g.preInit&&(g.preInit=[g.preInit]);0<g.preInit.length;)g.preInit.pop()();var Yb=!0;g.noInitialRun&&(Yb=!1);Xb();
