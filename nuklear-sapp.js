
var g;g||(g=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign({},g),ba=[],ca="./this.program",k=(a,b)=>{throw b;},da="object"==typeof window,l="function"==typeof importScripts,q="",ea,t,u,fs,fa,ha;
if("object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node)q=l?require("path").dirname(q)+"/":__dirname+"/",ha=()=>{fa||(fs=require("fs"),fa=require("path"))},ea=function(a,b){ha();a=fa.normalize(a);return fs.readFileSync(a,b?void 0:"utf8")},u=a=>{a=ea(a,!0);a.buffer||(a=new Uint8Array(a));return a},t=(a,b,c)=>{ha();a=fa.normalize(a);fs.readFile(a,function(d,e){d?c(d):b(e.buffer)})},1<process.argv.length&&(ca=process.argv[1].replace(/\\/g,"/")),ba=process.argv.slice(2),
"undefined"!=typeof module&&(module.exports=g),process.on("uncaughtException",function(a){if(!(a instanceof ia))throw a;}),process.on("unhandledRejection",function(a){throw a;}),k=(a,b)=>{if(noExitRuntime)throw process.exitCode=a,b;b instanceof ia||v("exiting due to exception: "+b);process.exit(a)},g.inspect=function(){return"[Emscripten Module object]"};else if(da||l)l?q=self.location.href:"undefined"!=typeof document&&document.currentScript&&(q=document.currentScript.src),q=0!==q.indexOf("blob:")?
q.substr(0,q.replace(/[?#].*/,"").lastIndexOf("/")+1):"",ea=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},l&&(u=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),t=(a,b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};
var ja=g.print||console.log.bind(console),v=g.printErr||console.warn.bind(console);Object.assign(g,aa);aa=null;g.arguments&&(ba=g.arguments);g.thisProgram&&(ca=g.thisProgram);g.quit&&(k=g.quit);var x;g.wasmBinary&&(x=g.wasmBinary);var noExitRuntime=g.noExitRuntime||!0;"object"!=typeof WebAssembly&&ka("no native wasm support detected");var la,ma=!1;
function na(a,b,c){var d={string:function(n){var p=0;if(null!==n&&void 0!==n&&0!==n){var r=(n.length<<2)+1;p=y(r);z(n,A,p,r)}return p},array:function(n){var p=y(n.length);B.set(n,p);return p}};a=g["_"+a];var e=[],h=0;if(c)for(var f=0;f<c.length;f++){var m=d[b[f]];m?(0===h&&(h=oa()),e[f]=m(c[f])):e[f]=c[f]}b=a.apply(null,e);b=function(n){0!==h&&pa(h);return n}(b)}var qa="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;
function ra(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.buffer&&qa)return qa.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var h=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|h);else{var f=a[b++]&63;e=224==(e&240)?(e&15)<<12|h<<6|f:(e&7)<<18|h<<12|f<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function C(a,b){return a?ra(A,a,b):""}
function z(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var h=0;h<a.length;++h){var f=a.charCodeAt(h);if(55296<=f&&57343>=f){var m=a.charCodeAt(++h);f=65536+((f&1023)<<10)|m&1023}if(127>=f){if(c>=d)break;b[c++]=f}else{if(2047>=f){if(c+1>=d)break;b[c++]=192|f>>6}else{if(65535>=f){if(c+2>=d)break;b[c++]=224|f>>12}else{if(c+3>=d)break;b[c++]=240|f>>18;b[c++]=128|f>>12&63}b[c++]=128|f>>6&63}b[c++]=128|f&63}}b[c]=0;return c-e}
function sa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function ta(a){var b=sa(a)+1,c=D(b);c&&z(a,B,c,b);return c}function ua(a){var b=sa(a)+1,c=y(b);z(a,B,c,b);return c}var va,B,A,wa,xa,E,ya,F,G;
function za(){var a=la.buffer;va=a;g.HEAP8=B=new Int8Array(a);g.HEAP16=wa=new Int16Array(a);g.HEAP32=E=new Int32Array(a);g.HEAPU8=A=new Uint8Array(a);g.HEAPU16=xa=new Uint16Array(a);g.HEAPU32=ya=new Uint32Array(a);g.HEAPF32=F=new Float32Array(a);g.HEAPF64=G=new Float64Array(a)}var Aa,Ba=[],Ca=[],Da=[],Ea=[],Fa=[];function Ga(){var a=g.preRun.shift();Ba.unshift(a)}var H=0,Ha=null,I=null;
function ka(a){if(g.onAbort)g.onAbort(a);a="Aborted("+a+")";v(a);ma=!0;throw new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");}function Ia(){return J.startsWith("data:application/octet-stream;base64,")}var J;J="nuklear-sapp.wasm";if(!Ia()){var Ja=J;J=g.locateFile?g.locateFile(Ja,q):q+Ja}function Ka(){var a=J;try{if(a==J&&x)return new Uint8Array(x);if(u)return u(a);throw"both async and sync fetching of the wasm failed";}catch(b){ka(b)}}
function La(){if(!x&&(da||l)){if("function"==typeof fetch&&!J.startsWith("file://"))return fetch(J,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+J+"'";return a.arrayBuffer()}).catch(function(){return Ka()});if(t)return new Promise(function(a,b){t(J,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ka()})}
function Ma(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(g);else{var c=b.Ic;"number"==typeof c?void 0===b.hc?K(c)():K(c)(b.hc):c(void 0===b.hc?null:b.hc)}}}var Na=[];function K(a){var b=Na[a];b||(a>=Na.length&&(Na.length=a+1),Na[a]=b=Aa.get(a));return b}
function Oa(a,b,c){function d(n){return(n=n.toTimeString().match(/\(([A-Za-z ]+)\)$/))?n[1]:"GMT"}var e=(new Date).getFullYear(),h=new Date(e,0,1),f=new Date(e,6,1);e=h.getTimezoneOffset();var m=f.getTimezoneOffset();E[a>>2]=60*Math.max(e,m);E[b>>2]=Number(e!=m);a=d(h);b=d(f);a=ta(a);b=ta(b);m<e?(E[c>>2]=a,E[c+4>>2]=b):(E[c>>2]=b,E[c+4>>2]=a)}function Pa(a,b,c){Pa.zc||(Pa.zc=!0,Oa(a,b,c))}var Qa=0;function Ra(){for(var a=L.length-1;0<=a;--a)Sa(a);L=[];Ta=[]}var Ta=[];
function Ua(){if(Qa&&Va.bc)for(var a=0;a<Ta.length;++a){var b=Ta[a];Ta.splice(a,1);--a;b.Rc.apply(null,b.Fc)}}var L=[];function Sa(a){var b=L[a];b.target.removeEventListener(b.Ub,b.Bc,b.Vb);L.splice(a,1)}function M(a){function b(d){++Qa;Va=a;Ua();a.Xb(d);Ua();--Qa}if(a.Wb)a.Bc=b,a.target.addEventListener(a.Ub,b,a.Vb),L.push(a),Wa||(Ea.push(Ra),Wa=!0);else for(var c=0;c<L.length;++c)L[c].target==a.target&&L[c].Ub==a.Ub&&Sa(c--)}
function Xa(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}var Wa,Va,Ya,Za,$a,ab,bb,cb,db,eb=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0];function O(a){a=2<a?C(a):a;return eb[a]||("undefined"!=typeof document?document.querySelector(a):void 0)}function fb(a){return 0>eb.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}
function gb(a,b,c,d,e,h){Ya||(Ya=D(256));a={target:O(a),Ub:h,Wb:d,Xb:function(f){f=f||event;var m=f.target.id?f.target.id:"",n=Ya;z(Xa(f.target),A,n+0,128);z(m,A,n+128,128);K(d)(e,n,b)&&f.preventDefault()},Vb:c};M(a)}
function hb(a,b,c,d,e,h){Za||(Za=D(176));a={target:O(a),bc:!0,Ub:h,Wb:d,Xb:function(f){var m=Za;G[m>>3]=f.timeStamp;var n=m>>2;E[n+2]=f.location;E[n+3]=f.ctrlKey;E[n+4]=f.shiftKey;E[n+5]=f.altKey;E[n+6]=f.metaKey;E[n+7]=f.repeat;E[n+8]=f.charCode;E[n+9]=f.keyCode;E[n+10]=f.which;z(f.key||"",A,m+44,32);z(f.code||"",A,m+76,32);z(f.char||"",A,m+108,32);z(f.locale||"",A,m+140,32);K(d)(e,m,b)&&f.preventDefault()},Vb:c};M(a)}
function ib(a,b,c){G[a>>3]=b.timeStamp;a>>=2;E[a+2]=b.screenX;E[a+3]=b.screenY;E[a+4]=b.clientX;E[a+5]=b.clientY;E[a+6]=b.ctrlKey;E[a+7]=b.shiftKey;E[a+8]=b.altKey;E[a+9]=b.metaKey;wa[2*a+20]=b.button;wa[2*a+21]=b.buttons;E[a+11]=b.movementX;E[a+12]=b.movementY;c=fb(c);E[a+13]=b.clientX-c.left;E[a+14]=b.clientY-c.top}
function P(a,b,c,d,e,h){$a||($a=D(72));a=O(a);M({target:a,bc:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,Ub:h,Wb:d,Xb:function(f){f=f||event;ib($a,f,a);K(d)(e,$a,b)&&f.preventDefault()},Vb:c})}function jb(a,b,c,d,e){ab||(ab=D(260));M({target:a,Ub:e,Wb:d,Xb:function(h){h=h||event;var f=ab,m=document.pointerLockElement||document.Zb||document.kc||document.jc;E[f>>2]=!!m;var n=m&&m.id?m.id:"";z(Xa(m),A,f+4,128);z(n,A,f+132,128);K(d)(20,f,b)&&h.preventDefault()},Vb:c})}
function kb(a,b,c,d,e){M({target:a,Ub:e,Wb:d,Xb:function(h){h=h||event;K(d)(38,0,b)&&h.preventDefault()},Vb:c})}
function lb(a,b,c,d){bb||(bb=D(36));a=O(a);M({target:a,Ub:"resize",Wb:d,Xb:function(e){e=e||event;if(e.target==a){var h=document.body;if(h){var f=bb;E[f>>2]=e.detail;E[f+4>>2]=h.clientWidth;E[f+8>>2]=h.clientHeight;E[f+12>>2]=innerWidth;E[f+16>>2]=innerHeight;E[f+20>>2]=outerWidth;E[f+24>>2]=outerHeight;E[f+28>>2]=pageXOffset;E[f+32>>2]=pageYOffset;K(d)(10,f,b)&&e.preventDefault()}}},Vb:c})}
function mb(a,b,c,d,e,h){cb||(cb=D(1696));a=O(a);M({target:a,bc:"touchstart"==h||"touchend"==h,Ub:h,Wb:d,Xb:function(f){for(var m,n={},p=f.touches,r=0;r<p.length;++r)m=p[r],m.oc=m.qc=0,n[m.identifier]=m;for(r=0;r<f.changedTouches.length;++r)m=f.changedTouches[r],m.oc=1,n[m.identifier]=m;for(r=0;r<f.targetTouches.length;++r)n[f.targetTouches[r].identifier].qc=1;p=cb;G[p>>3]=f.timeStamp;var w=p>>2;E[w+3]=f.ctrlKey;E[w+4]=f.shiftKey;E[w+5]=f.altKey;E[w+6]=f.metaKey;w+=7;var N=fb(a),qb=0;for(r in n)if(m=
n[r],E[w]=m.identifier,E[w+1]=m.screenX,E[w+2]=m.screenY,E[w+3]=m.clientX,E[w+4]=m.clientY,E[w+5]=m.pageX,E[w+6]=m.pageY,E[w+7]=m.oc,E[w+8]=m.qc,E[w+9]=m.clientX-N.left,E[w+10]=m.clientY-N.top,w+=13,31<++qb)break;E[p+8>>2]=qb;K(d)(e,p,b)&&f.preventDefault()},Vb:c})}function nb(a,b,c,d,e,h){a={target:O(a),Ub:h,Wb:d,Xb:function(f){f=f||event;K(d)(e,0,b)&&f.preventDefault()},Vb:c};M(a)}
function ob(a,b,c,d){db||(db=D(104));M({target:a,bc:!0,Ub:"wheel",Wb:d,Xb:function(e){e=e||event;var h=db;ib(h,e,a);G[h+72>>3]=e.deltaX;G[h+80>>3]=e.deltaY;G[h+88>>3]=e.deltaZ;E[h+96>>2]=e.deltaMode;K(d)(9,h,b)&&e.preventDefault()},Vb:c})}
function pb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,h){b.drawArraysInstancedANGLE(c,d,e,h)},a.drawElementsInstanced=function(c,d,e,h,f){b.drawElementsInstancedANGLE(c,d,e,h,f)})}
function rb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function sb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function tb(a){a.Hc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function ub(a){a.Kc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function vb(a){a.Mc=a.getExtension("WEBGL_multi_draw")}var wb=1,xb=[],Q=[],yb=[],zb=[],Ab=[],R=[],Bb=[],Cb=[],Db={},Eb={};function S(a){Fb||(Fb=a)}function Gb(a){for(var b=wb++,c=a.length;c<b;c++)a[c]=null;return b}
function Hb(a,b){a.Zb||(a.Zb=a.getContext,a.getContext=function(d,e){e=a.Zb(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.pc?a.getContext("webgl2",b):a.getContext("webgl",b);return c?Ib(c,b):0}function Ib(a,b){var c=Gb(Cb),d={Jc:c,attributes:b,version:b.pc,fc:a};a.canvas&&(a.canvas.Ec=d);Cb[c]=d;("undefined"==typeof b.nc||b.nc)&&Jb(d);return c}
function Jb(a){a||(a=T);if(!a.Dc){a.Dc=!0;var b=a.fc;pb(b);rb(b);sb(b);tb(b);ub(b);2<=a.version&&(b.mc=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.mc)b.mc=b.getExtension("EXT_disjoint_timer_query");vb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var Fb,T,Kb=["default","low-power","high-performance"],Lb=[null,[],[]];
function Mb(a,b,c,d){for(var e=0;e<a;e++){var h=U[c](),f=h&&Gb(d);h?(h.name=f,d[f]=h):S(1282);E[b+4*e>>2]=f}}
function Nb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=U.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>T.version){S(1282);return}c=2*(U.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>T.version){S(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=U.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":S(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:S(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)E[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){S(1280);v("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:S(1280);v("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}E[b>>2]=c}else S(1281)}
function V(a){var b=sa(a)+1,c=D(b);z(a,A,c,b);return c}function Ob(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function Pb(a){a-=5120;return 0==a?B:1==a?A:2==a?wa:4==a?E:6==a?F:5==a||28922==a||28520==a||30779==a||30782==a?ya:xa}function W(a){var b=U.Ac;if(b){var c=b.ac[a];"number"==typeof c&&(b.ac[a]=c=U.getUniformLocation(b,b.xc[a]+(0<c?"["+c+"]":"")));return c}S(1282)}for(var X=[],Y=[],U,Qb=new Float32Array(288),Z=0;288>Z;++Z)X[Z]=Qb.subarray(0,Z+1);var Rb=new Int32Array(288);
for(Z=0;288>Z;++Z)Y[Z]=Rb.subarray(0,Z+1);
var Wb={$a:function(){return Date.now()},ab:function(a,b){a=new Date(1E3*E[a>>2]);E[b>>2]=a.getSeconds();E[b+4>>2]=a.getMinutes();E[b+8>>2]=a.getHours();E[b+12>>2]=a.getDate();E[b+16>>2]=a.getMonth();E[b+20>>2]=a.getFullYear()-1900;E[b+24>>2]=a.getDay();var c=new Date(a.getFullYear(),0,1);E[b+28>>2]=(a.getTime()-c.getTime())/864E5|0;E[b+36>>2]=-(60*a.getTimezoneOffset());var d=(new Date(a.getFullYear(),6,1)).getTimezoneOffset();c=c.getTimezoneOffset();E[b+32>>2]=(d!=c&&a.getTimezoneOffset()==Math.min(c,
d))|0},bb:Pa,P:function(){return"number"==typeof devicePixelRatio&&devicePixelRatio||1},_:function(a,b,c){a=O(a);if(!a)return-4;a=fb(a);G[b>>3]=a.width;G[c>>3]=a.height;return 0},Za:function(a,b,c){A.copyWithin(a,b,b+c)},Ha:function(a,b){function c(d){K(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},Ya:function(a){var b=A.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);var e=Math;d=Math.max(a,d);e=e.min.call(e,2147483648,
d+(65536-d%65536)%65536);a:{try{la.grow(e-va.byteLength+65535>>>16);za();var h=1;break a}catch(f){}h=void 0}if(h)return!0}return!1},S:function(a,b,c,d){gb(a,b,c,d,12,"blur");return 0},N:function(a,b,c){a=O(a);if(!a)return-4;a.width=b;a.height=c;return 0},T:function(a,b,c,d){gb(a,b,c,d,13,"focus");return 0},ba:function(a,b,c,d){hb(a,b,c,d,2,"keydown");return 0},$:function(a,b,c,d){hb(a,b,c,d,1,"keypress");return 0},aa:function(a,b,c,d){hb(a,b,c,d,3,"keyup");return 0},ha:function(a,b,c,d){P(a,b,c,d,
5,"mousedown");return 0},ea:function(a,b,c,d){P(a,b,c,d,33,"mouseenter");return 0},da:function(a,b,c,d){P(a,b,c,d,34,"mouseleave");return 0},fa:function(a,b,c,d){P(a,b,c,d,8,"mousemove");return 0},ga:function(a,b,c,d){P(a,b,c,d,6,"mouseup");return 0},V:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.Zb||document.body.kc||document.body.jc))return-1;a=O(a);if(!a)return-4;jb(a,b,c,d,"pointerlockchange");jb(a,b,c,d,"mozpointerlockchange");jb(a,b,c,d,"webkitpointerlockchange");
jb(a,b,c,d,"mspointerlockchange");return 0},U:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.Zb||document.body.kc||document.body.jc))return-1;a=O(a);if(!a)return-4;kb(a,b,c,d,"pointerlockerror");kb(a,b,c,d,"mozpointerlockerror");kb(a,b,c,d,"webkitpointerlockerror");kb(a,b,c,d,"mspointerlockerror");return 0},Va:function(a,b,c,d){lb(a,b,c,d);return 0},W:function(a,b,c,d){mb(a,b,c,d,25,"touchcancel");return 0},X:function(a,b,c,d){mb(a,b,c,d,23,"touchend");return 0},
Y:function(a,b,c,d){mb(a,b,c,d,24,"touchmove");return 0},Z:function(a,b,c,d){mb(a,b,c,d,22,"touchstart");return 0},R:function(a,b,c,d){nb(a,b,c,d,31,"webglcontextlost");return 0},Q:function(a,b,c,d){nb(a,b,c,d,32,"webglcontextrestored");return 0},ca:function(a,b,c,d){a=O(a);return"undefined"!=typeof a.onwheel?(ob(a,b,c,d),0):-1},E:function(a,b){b>>=2;b={alpha:!!E[b],depth:!!E[b+1],stencil:!!E[b+2],antialias:!!E[b+3],premultipliedAlpha:!!E[b+4],preserveDrawingBuffer:!!E[b+5],powerPreference:Kb[E[b+
6]],failIfMajorPerformanceCaveat:!!E[b+7],pc:E[b+8],Lc:E[b+9],nc:E[b+10],Cc:E[b+11],Nc:E[b+12],Oc:E[b+13]};a=O(a);return!a||b.Cc?0:Hb(a,b)},xb:function(a,b){a=Cb[a];b=C(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&pb(U);"OES_vertex_array_object"==b&&rb(U);"WEBGL_draw_buffers"==b&&sb(U);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&tb(U);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&ub(U);"WEBGL_multi_draw"==b&&vb(U);return!!a.fc.getExtension(b)},Ea:function(a){a>>=
2;for(var b=0;14>b;++b)E[a+b]=0;E[a]=E[a+1]=E[a+3]=E[a+4]=E[a+8]=E[a+10]=1},qa:function(a){T=Cb[a];g.Gc=U=T&&T.fc;return!a||U?0:-5},_a:function(a,b,c,d){for(var e=0,h=0;h<c;h++){var f=ya[b>>2],m=ya[b+4>>2];b+=8;for(var n=0;n<m;n++){var p=A[f+n],r=Lb[a];0===p||10===p?((1===a?ja:v)(ra(r,0)),r.length=0):r.push(p)}e+=m}E[d>>2]=e;return 0},b:function(a){U.activeTexture(a)},C:function(a,b){U.attachShader(Q[a],R[b])},c:function(a,b){35051==a?U.lc=b:35052==a&&(U.Yb=b);U.bindBuffer(a,xb[b])},h:function(a,
b){U.bindFramebuffer(a,yb[b])},Aa:function(a,b){U.bindRenderbuffer(a,zb[b])},a:function(a,b){U.bindTexture(a,Ab[b])},M:function(a){U.bindVertexArray(Bb[a])},I:function(a,b,c,d){U.blendColor(a,b,c,d)},J:function(a,b){U.blendEquationSeparate(a,b)},K:function(a,b,c,d){U.blendFuncSeparate(a,b,c,d)},p:function(a,b,c,d,e,h,f,m,n,p){U.blitFramebuffer(a,b,c,d,e,h,f,m,n,p)},Ca:function(a,b,c,d){2<=T.version?c&&b?U.bufferData(a,A,d,c,b):U.bufferData(a,b,d):U.bufferData(a,c?A.subarray(c,c+b):b,d)},t:function(a,
b,c,d){2<=T.version?c&&U.bufferSubData(a,b,A,d,c):U.bufferSubData(a,b,A.subarray(d,d+c))},sb:function(a){U.clear(a)},vb:function(a,b,c,d){U.clearColor(a,b,c,d)},ub:function(a){U.clearDepth(a)},tb:function(a){U.clearStencil(a)},l:function(a,b,c,d){U.colorMask(!!a,!!b,!!c,!!d)},ma:function(a){U.compileShader(R[a])},wa:function(a,b,c,d,e,h,f,m){2<=T.version?U.Yb||!f?U.compressedTexImage2D(a,b,c,d,e,h,f,m):U.compressedTexImage2D(a,b,c,d,e,h,A,m,f):U.compressedTexImage2D(a,b,c,d,e,h,m?A.subarray(m,m+f):
null)},ua:function(a,b,c,d,e,h,f,m,n){U.Yb?U.compressedTexImage3D(a,b,c,d,e,h,f,m,n):U.compressedTexImage3D(a,b,c,d,e,h,f,A,n,m)},sa:function(){var a=Gb(Q),b=U.createProgram();b.name=a;b.ec=b.cc=b.dc=0;b.ic=1;Q[a]=b;return a},oa:function(a){var b=Gb(R);R[b]=U.createShader(a);return b},F:function(a){U.cullFace(a)},La:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2],e=xb[d];e&&(U.deleteBuffer(e),e.name=0,xb[d]=null,d==U.lc&&(U.lc=0),d==U.Yb&&(U.Yb=0))}},i:function(a,b){for(var c=0;c<a;++c){var d=
E[b+4*c>>2],e=yb[d];e&&(U.deleteFramebuffer(e),e.name=0,yb[d]=null)}},x:function(a){if(a){var b=Q[a];b?(U.deleteProgram(b),b.name=0,Q[a]=null):S(1281)}},O:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2],e=zb[d];e&&(U.deleteRenderbuffer(e),e.name=0,zb[d]=null)}},s:function(a){if(a){var b=R[a];b?(U.deleteShader(b),R[a]=null):S(1281)}},Ka:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2],e=Ab[d];e&&(U.deleteTexture(e),e.name=0,Ab[d]=null)}},Ja:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>
2];U.deleteVertexArray(Bb[d]);Bb[d]=null}},w:function(a){U.depthFunc(a)},v:function(a){U.depthMask(!!a)},e:function(a){U.disable(a)},L:function(a){U.disableVertexAttribArray(a)},cb:function(a,b,c){U.drawArrays(a,b,c)},db:function(a,b,c,d){U.drawArraysInstanced(a,b,c,d)},eb:function(a,b,c,d){U.drawElements(a,b,c,d)},fb:function(a,b,c,d,e){U.drawElementsInstanced(a,b,c,d,e)},g:function(a){U.enable(a)},pb:function(a){U.enableVertexAttribArray(a)},G:function(a){U.frontFace(a)},Da:function(a,b){Mb(a,b,
"createBuffer",xb)},Ba:function(a,b){Mb(a,b,"createRenderbuffer",zb)},xa:function(a,b){Mb(a,b,"createTexture",Ab)},Ia:function(a,b){Mb(a,b,"createVertexArray",Bb)},wb:function(a,b){return U.getAttribLocation(Q[a],C(b))},d:function(a,b){Nb(a,b)},pa:function(a,b,c,d){a=U.getProgramInfoLog(Q[a]);null===a&&(a="(unknown error)");b=0<b&&d?z(a,A,d,b):0;c&&(E[c>>2]=b)},B:function(a,b,c){if(c)if(a>=wb)S(1281);else if(a=Q[a],35716==b)a=U.getProgramInfoLog(a),null===a&&(a="(unknown error)"),E[c>>2]=a.length+
1;else if(35719==b){if(!a.ec)for(b=0;b<U.getProgramParameter(a,35718);++b)a.ec=Math.max(a.ec,U.getActiveUniform(a,b).name.length+1);E[c>>2]=a.ec}else if(35722==b){if(!a.cc)for(b=0;b<U.getProgramParameter(a,35721);++b)a.cc=Math.max(a.cc,U.getActiveAttrib(a,b).name.length+1);E[c>>2]=a.cc}else if(35381==b){if(!a.dc)for(b=0;b<U.getProgramParameter(a,35382);++b)a.dc=Math.max(a.dc,U.getActiveUniformBlockName(a,b).length+1);E[c>>2]=a.dc}else E[c>>2]=U.getProgramParameter(a,b);else S(1281)},la:function(a,
b,c,d){a=U.getShaderInfoLog(R[a]);null===a&&(a="(unknown error)");b=0<b&&d?z(a,A,d,b):0;c&&(E[c>>2]=b)},z:function(a,b,c){c?35716==b?(a=U.getShaderInfoLog(R[a]),null===a&&(a="(unknown error)"),E[c>>2]=a?a.length+1:0):35720==b?(a=U.getShaderSource(R[a]),E[c>>2]=a?a.length+1:0):E[c>>2]=U.getShaderParameter(R[a],b):S(1281)},Na:function(a){var b=Db[a];if(!b){switch(a){case 7939:b=U.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=V(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=
U.getParameter(a))||S(1280);b=b&&V(b);break;case 7938:b=U.getParameter(7938);b=2<=T.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=V(b);break;case 35724:b=U.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=V(b);break;default:S(1280)}Db[a]=b}return b},Ma:function(a,b){if(2>T.version)return S(1282),0;var c=Eb[a];if(c)return 0>b||b>=c.length?(S(1281),0):c[b];switch(a){case 7939:return c=
U.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return V(d)}),c=Eb[a]=c,0>b||b>=c.length?(S(1281),0):c[b];default:return S(1280),0}},k:function(a,b){b=C(b);if(a=Q[a]){var c=a,d=c.ac,e=c.yc,h;if(!d)for(c.ac=d={},c.xc={},h=0;h<U.getProgramParameter(c,35718);++h){var f=U.getActiveUniform(c,h);var m=f.name;f=f.size;var n=Ob(m);n=0<n?m.slice(0,n):m;var p=c.ic;c.ic+=f;e[n]=[f,p];for(m=0;m<f;++m)d[p]=m,c.xc[p++]=n}c=a.ac;d=0;e=b;h=Ob(b);0<h&&(d=parseInt(b.slice(h+
1))>>>0,e=b.slice(0,h));if((e=a.yc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||U.getUniformLocation(a,b)))return d}else S(1281);return-1},ra:function(a){a=Q[a];U.linkProgram(a);a.ac=0;a.yc={}},H:function(a,b){U.polygonOffset(a,b)},q:function(a){U.readBuffer(a)},ya:function(a,b,c,d){U.renderbufferStorage(a,b,c,d)},za:function(a,b,c,d,e){U.renderbufferStorageMultisample(a,b,c,d,e)},r:function(a,b,c,d){U.scissor(a,b,c,d)},na:function(a,b,c,d){for(var e="",h=0;h<b;++h){var f=d?E[d+4*h>>2]:-1;e+=C(E[c+4*h>>2],0>
f?void 0:f)}U.shaderSource(R[a],e)},Ga:function(a,b,c){U.stencilFunc(a,b,c)},ja:function(a,b,c,d){U.stencilFuncSeparate(a,b,c,d)},u:function(a){U.stencilMask(a)},Fa:function(a,b,c){U.stencilOp(a,b,c)},ia:function(a,b,c,d){U.stencilOpSeparate(a,b,c,d)},va:function(a,b,c,d,e,h,f,m,n){if(2<=T.version)if(U.Yb)U.texImage2D(a,b,c,d,e,h,f,m,n);else if(n){var p=Pb(m);U.texImage2D(a,b,c,d,e,h,f,m,p,n>>31-Math.clz32(p.BYTES_PER_ELEMENT))}else U.texImage2D(a,b,c,d,e,h,f,m,null);else{p=U;var r=p.texImage2D;if(n){var w=
Pb(m),N=31-Math.clz32(w.BYTES_PER_ELEMENT);n=w.subarray(n>>N,n+e*(d*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[f-6402]||1)*(1<<N)+4-1&-4)>>N)}else n=null;r.call(p,a,b,c,d,e,h,f,m,n)}},ta:function(a,b,c,d,e,h,f,m,n,p){if(U.Yb)U.texImage3D(a,b,c,d,e,h,f,m,n,p);else if(p){var r=Pb(n);U.texImage3D(a,b,c,d,e,h,f,m,n,r,p>>31-Math.clz32(r.BYTES_PER_ELEMENT))}else U.texImage3D(a,b,c,d,e,h,f,m,n,null)},D:function(a,b,c){U.texParameterf(a,b,c)},f:function(a,b,c){U.texParameteri(a,b,c)},
ob:function(a,b,c){if(2<=T.version)b&&U.uniform1fv(W(a),F,c>>2,b);else{if(288>=b)for(var d=X[b-1],e=0;e<b;++e)d[e]=F[c+4*e>>2];else d=F.subarray(c>>2,c+4*b>>2);U.uniform1fv(W(a),d)}},A:function(a,b){U.uniform1i(W(a),b)},kb:function(a,b,c){if(2<=T.version)b&&U.uniform1iv(W(a),E,c>>2,b);else{if(288>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=E[c+4*e>>2];else d=E.subarray(c>>2,c+4*b>>2);U.uniform1iv(W(a),d)}},nb:function(a,b,c){if(2<=T.version)b&&U.uniform2fv(W(a),F,c>>2,2*b);else{if(144>=b)for(var d=X[2*b-
1],e=0;e<2*b;e+=2)d[e]=F[c+4*e>>2],d[e+1]=F[c+(4*e+4)>>2];else d=F.subarray(c>>2,c+8*b>>2);U.uniform2fv(W(a),d)}},jb:function(a,b,c){if(2<=T.version)b&&U.uniform2iv(W(a),E,c>>2,2*b);else{if(144>=b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=E[c+4*e>>2],d[e+1]=E[c+(4*e+4)>>2];else d=E.subarray(c>>2,c+8*b>>2);U.uniform2iv(W(a),d)}},mb:function(a,b,c){if(2<=T.version)b&&U.uniform3fv(W(a),F,c>>2,3*b);else{if(96>=b)for(var d=X[3*b-1],e=0;e<3*b;e+=3)d[e]=F[c+4*e>>2],d[e+1]=F[c+(4*e+4)>>2],d[e+2]=F[c+(4*e+8)>>
2];else d=F.subarray(c>>2,c+12*b>>2);U.uniform3fv(W(a),d)}},ib:function(a,b,c){if(2<=T.version)b&&U.uniform3iv(W(a),E,c>>2,3*b);else{if(96>=b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=E[c+4*e>>2],d[e+1]=E[c+(4*e+4)>>2],d[e+2]=E[c+(4*e+8)>>2];else d=E.subarray(c>>2,c+12*b>>2);U.uniform3iv(W(a),d)}},lb:function(a,b,c){if(2<=T.version)b&&U.uniform4fv(W(a),F,c>>2,4*b);else{if(72>=b){var d=X[4*b-1],e=F;c>>=2;for(var h=0;h<4*b;h+=4){var f=c+h;d[h]=e[f];d[h+1]=e[f+1];d[h+2]=e[f+2];d[h+3]=e[f+3]}}else d=F.subarray(c>>
2,c+16*b>>2);U.uniform4fv(W(a),d)}},hb:function(a,b,c){if(2<=T.version)b&&U.uniform4iv(W(a),E,c>>2,4*b);else{if(72>=b)for(var d=Y[4*b-1],e=0;e<4*b;e+=4)d[e]=E[c+4*e>>2],d[e+1]=E[c+(4*e+4)>>2],d[e+2]=E[c+(4*e+8)>>2],d[e+3]=E[c+(4*e+12)>>2];else d=E.subarray(c>>2,c+16*b>>2);U.uniform4iv(W(a),d)}},gb:function(a,b,c,d){if(2<=T.version)b&&U.uniformMatrix4fv(W(a),!!c,F,d>>2,16*b);else{if(18>=b){var e=X[16*b-1],h=F;d>>=2;for(var f=0;f<16*b;f+=16){var m=d+f;e[f]=h[m];e[f+1]=h[m+1];e[f+2]=h[m+2];e[f+3]=h[m+
3];e[f+4]=h[m+4];e[f+5]=h[m+5];e[f+6]=h[m+6];e[f+7]=h[m+7];e[f+8]=h[m+8];e[f+9]=h[m+9];e[f+10]=h[m+10];e[f+11]=h[m+11];e[f+12]=h[m+12];e[f+13]=h[m+13];e[f+14]=h[m+14];e[f+15]=h[m+15]}}else e=F.subarray(d>>2,d+64*b>>2);U.uniformMatrix4fv(W(a),!!c,e)}},j:function(a){a=Q[a];U.useProgram(a);U.Ac=a},qb:function(a,b){U.vertexAttribDivisor(a,b)},rb:function(a,b,c,d,e,h){U.vertexAttribPointer(a,b,c,!!d,e,h)},ka:function(a,b,c,d){U.viewport(a,b,c,d)},Xa:function(){g.rc=function(a){0!=Sb()&&(a.preventDefault(),
a.returnValue=" ")};window.addEventListener("beforeunload",g.rc)},Wa:function(){g.wc=function(a){a=a.clipboardData.getData("text");na("_sapp_emsc_onpaste",["string"],[a])};window.addEventListener("paste",g.wc)},Ua:function(a){g.Pc=[];a=C(a);a=document.getElementById(a);g.sc=function(b){b.stopPropagation();b.preventDefault()};g.tc=function(b){b.stopPropagation();b.preventDefault()};g.uc=function(b){b.stopPropagation();b.preventDefault()};g.vc=function(b){b.stopPropagation();b.preventDefault();var c=
b.dataTransfer.files;g.Qc=c;Tb(c.length);var d;for(d=0;d<c.length;d++)na("_sapp_emsc_drop",["number","string"],[d,c[d].name]);Ub(b.clientX,b.clientY)};a.addEventListener("dragenter",g.sc,!1);a.addEventListener("dragleave",g.tc,!1);a.addEventListener("dragover",g.uc,!1);a.addEventListener("drop",g.vc,!1)},Pa:function(){var a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},o:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";
a.autocapitalize="none";a.addEventListener("focusout",function(){Vb()});document.body.append(a)},n:function(){document.getElementById("_sokol_app_input_element").focus()},yb:function(a){a=C(a);g.$b=document.getElementById(a);g.$b||console.log("sokol_app.h: invalid target:"+a);g.$b.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Ta:function(){window.removeEventListener("beforeunload",g.rc)},Sa:function(){window.removeEventListener("paste",g.wc)},Ra:function(a){a=
C(a);a=document.getElementById(a);a.removeEventListener("dragenter",g.sc);a.removeEventListener("dragleave",g.tc);a.removeEventListener("dragover",g.uc);a.removeEventListener("drop",g.vc)},y:function(){g.$b&&g.$b.requestPointerLock&&g.$b.requestPointerLock()},Oa:function(a,b,c){var d=document.createElement("canvas");d.width=a;d.height=b;var e=d.getContext("2d"),h=e.createImageData(a,b);h.data.set(A.subarray(c,c+a*b*4));e.putImageData(h,0,0);a=document.createElement("link");a.id="sokol-app-favicon";
a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},m:function(){document.getElementById("_sokol_app_input_element").blur()},Qa:function(a){a=C(a);var b=document.createElement("textarea");b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");b.setAttribute("spellcheck","false");b.style.left="-100px";b.style.top="-100px";b.style.height=1;b.style.width=1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");
document.body.removeChild(b)},zb:function(){return navigator.userAgent.includes("Macintosh")?1:0}};
(function(){function a(e){g.asm=e.exports;la=g.asm.Ab;za();Aa=g.asm.Qb;Ca.unshift(g.asm.Bb);H--;g.monitorRunDependencies&&g.monitorRunDependencies(H);0==H&&(null!==Ha&&(clearInterval(Ha),Ha=null),I&&(e=I,I=null,e()))}function b(e){a(e.instance)}function c(e){return La().then(function(h){return WebAssembly.instantiate(h,d)}).then(function(h){return h}).then(e,function(h){v("failed to asynchronously prepare wasm: "+h);ka(h)})}var d={a:Wb};H++;g.monitorRunDependencies&&g.monitorRunDependencies(H);if(g.instantiateWasm)try{return g.instantiateWasm(d,
a)}catch(e){return v("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return x||"function"!=typeof WebAssembly.instantiateStreaming||Ia()||J.startsWith("file://")||"function"!=typeof fetch?c(b):fetch(J,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(h){v("wasm streaming compile failed: "+h);v("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
g.___wasm_call_ctors=function(){return(g.___wasm_call_ctors=g.asm.Bb).apply(null,arguments)};var Vb=g.__sapp_emsc_notify_keyboard_hidden=function(){return(Vb=g.__sapp_emsc_notify_keyboard_hidden=g.asm.Cb).apply(null,arguments)};g.__sapp_emsc_onpaste=function(){return(g.__sapp_emsc_onpaste=g.asm.Db).apply(null,arguments)};
var Sb=g.__sapp_html5_get_ask_leave_site=function(){return(Sb=g.__sapp_html5_get_ask_leave_site=g.asm.Eb).apply(null,arguments)},Tb=g.__sapp_emsc_begin_drop=function(){return(Tb=g.__sapp_emsc_begin_drop=g.asm.Fb).apply(null,arguments)};g.__sapp_emsc_drop=function(){return(g.__sapp_emsc_drop=g.asm.Gb).apply(null,arguments)};var Ub=g.__sapp_emsc_end_drop=function(){return(Ub=g.__sapp_emsc_end_drop=g.asm.Hb).apply(null,arguments)};
g.__sapp_emsc_invoke_fetch_cb=function(){return(g.__sapp_emsc_invoke_fetch_cb=g.asm.Ib).apply(null,arguments)};g._main=function(){return(g._main=g.asm.Jb).apply(null,arguments)};g.__saudio_emsc_pull=function(){return(g.__saudio_emsc_pull=g.asm.Kb).apply(null,arguments)};g.__sfetch_emsc_head_response=function(){return(g.__sfetch_emsc_head_response=g.asm.Lb).apply(null,arguments)};g.__sfetch_emsc_get_response=function(){return(g.__sfetch_emsc_get_response=g.asm.Mb).apply(null,arguments)};
g.__sfetch_emsc_failed_http_status=function(){return(g.__sfetch_emsc_failed_http_status=g.asm.Nb).apply(null,arguments)};g.__sfetch_emsc_failed_buffer_too_small=function(){return(g.__sfetch_emsc_failed_buffer_too_small=g.asm.Ob).apply(null,arguments)};
var D=g._malloc=function(){return(D=g._malloc=g.asm.Pb).apply(null,arguments)},oa=g.stackSave=function(){return(oa=g.stackSave=g.asm.Rb).apply(null,arguments)},pa=g.stackRestore=function(){return(pa=g.stackRestore=g.asm.Sb).apply(null,arguments)},y=g.stackAlloc=function(){return(y=g.stackAlloc=g.asm.Tb).apply(null,arguments)},Xb;function ia(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}I=function Yb(){Xb||Zb();Xb||(I=Yb)};
function Zb(a){function b(){if(!Xb&&(Xb=!0,g.calledRun=!0,!ma)){Ma(Ca);Ma(Da);if(g.onRuntimeInitialized)g.onRuntimeInitialized();if($b){var c=a,d=g._main;c=c||[];var e=c.length+1,h=y(4*(e+1));E[h>>2]=ua(ca);for(var f=1;f<e;f++)E[(h>>2)+f]=ua(c[f-1]);E[(h>>2)+e]=0;try{var m=d(e,h);if(!noExitRuntime){if(g.onExit)g.onExit(m);ma=!0}k(m,new ia(m))}catch(n){n instanceof ia||"unwind"==n||k(1,n)}finally{}}if(g.postRun)for("function"==typeof g.postRun&&(g.postRun=[g.postRun]);g.postRun.length;)c=g.postRun.shift(),
Fa.unshift(c);Ma(Fa)}}a=a||ba;if(!(0<H)){if(g.preRun)for("function"==typeof g.preRun&&(g.preRun=[g.preRun]);g.preRun.length;)Ga();Ma(Ba);0<H||(g.setStatus?(g.setStatus("Running..."),setTimeout(function(){setTimeout(function(){g.setStatus("")},1);b()},1)):b())}}g.run=Zb;if(g.preInit)for("function"==typeof g.preInit&&(g.preInit=[g.preInit]);0<g.preInit.length;)g.preInit.pop()();var $b=!0;g.noInitialRun&&($b=!1);Zb();
