
var g;g||(g=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign({},g),ba=[],ca="./this.program",h=(a,b)=>{throw b;},da="object"==typeof window,l="function"==typeof importScripts,ea="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,q="",fa,t,u;
if(ea){q=l?require("path").dirname(q)+"/":__dirname+"/";var fs,ha;"function"===typeof require&&(fs=require("fs"),ha=require("path"));fa=(a,b)=>{a=ha.normalize(a);return fs.readFileSync(a,b?void 0:"utf8")};u=a=>{a=fa(a,!0);a.buffer||(a=new Uint8Array(a));return a};t=(a,b,c)=>{a=ha.normalize(a);fs.readFile(a,function(d,e){d?c(d):b(e.buffer)})};1<process.argv.length&&(ca=process.argv[1].replace(/\\/g,"/"));ba=process.argv.slice(2);"undefined"!=typeof module&&(module.exports=g);process.on("uncaughtException",
function(a){if(!(a instanceof v))throw a;});process.on("unhandledRejection",function(a){throw a;});h=(a,b)=>{if(noExitRuntime)throw process.exitCode=a,b;b instanceof v||x("exiting due to exception: "+b);process.exit(a)};g.inspect=function(){return"[Emscripten Module object]"}}else if(da||l)l?q=self.location.href:"undefined"!=typeof document&&document.currentScript&&(q=document.currentScript.src),q=0!==q.indexOf("blob:")?q.substr(0,q.replace(/[?#].*/,"").lastIndexOf("/")+1):"",fa=a=>{var b=new XMLHttpRequest;
b.open("GET",a,!1);b.send(null);return b.responseText},l&&(u=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),t=(a,b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};var ia=g.print||console.log.bind(console),x=g.printErr||console.warn.bind(console);Object.assign(g,aa);aa=null;g.arguments&&(ba=g.arguments);
g.thisProgram&&(ca=g.thisProgram);g.quit&&(h=g.quit);var y;g.wasmBinary&&(y=g.wasmBinary);var noExitRuntime=g.noExitRuntime||!0;"object"!=typeof WebAssembly&&ja("no native wasm support detected");var ka,la=!1,ma="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;
function na(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.buffer&&ma)return ma.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var k=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|k);else{var f=a[b++]&63;e=224==(e&240)?(e&15)<<12|k<<6|f:(e&7)<<18|k<<12|f<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function z(a,b){return a?na(A,a,b):""}
function B(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var k=0;k<a.length;++k){var f=a.charCodeAt(k);if(55296<=f&&57343>=f){var m=a.charCodeAt(++k);f=65536+((f&1023)<<10)|m&1023}if(127>=f){if(c>=d)break;b[c++]=f}else{if(2047>=f){if(c+1>=d)break;b[c++]=192|f>>6}else{if(65535>=f){if(c+2>=d)break;b[c++]=224|f>>12}else{if(c+3>=d)break;b[c++]=240|f>>18;b[c++]=128|f>>12&63}b[c++]=128|f>>6&63}b[c++]=128|f&63}}b[c]=0;return c-e}
function oa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);127>=d?b++:2047>=d?b+=2:55296<=d&&57343>=d?(b+=4,++c):b+=3}return b}var pa,qa,A,ra,sa,C,D,E,F;function ta(){var a=ka.buffer;pa=a;g.HEAP8=qa=new Int8Array(a);g.HEAP16=ra=new Int16Array(a);g.HEAP32=C=new Int32Array(a);g.HEAPU8=A=new Uint8Array(a);g.HEAPU16=sa=new Uint16Array(a);g.HEAPU32=D=new Uint32Array(a);g.HEAPF32=E=new Float32Array(a);g.HEAPF64=F=new Float64Array(a)}var ua,va=[],wa=[],xa=[],ya=[],za=[];
function Aa(){var a=g.preRun.shift();va.unshift(a)}var G=0,Ba=null,H=null;function ja(a){if(g.onAbort)g.onAbort(a);a="Aborted("+a+")";x(a);la=!0;throw new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");}function Ca(){return I.startsWith("data:application/octet-stream;base64,")}var I;I="spine-skinsets-sapp-ui.wasm";if(!Ca()){var Da=I;I=g.locateFile?g.locateFile(Da,q):q+Da}
function Ea(){var a=I;try{if(a==I&&y)return new Uint8Array(y);if(u)return u(a);throw"both async and sync fetching of the wasm failed";}catch(b){ja(b)}}
function Fa(){if(!y&&(da||l)){if("function"==typeof fetch&&!I.startsWith("file://"))return fetch(I,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+I+"'";return a.arrayBuffer()}).catch(function(){return Ea()});if(t)return new Promise(function(a,b){t(I,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ea()})}function v(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}
function Ga(a){for(;0<a.length;)a.shift()(g)}function Ha(a){var b=Ia();a();Ja(b)}var Ka=0;function La(){for(var a=J.length-1;0<=a;--a)Ma(a);J=[];Na=[]}var Na=[];function Oa(){if(Ka&&Pa.ic)for(var a=0;a<Na.length;++a){var b=Na[a];Na.splice(a,1);--a;b.Uc.apply(null,b.Jc)}}var J=[];function Ma(a){var b=J[a];b.target.removeEventListener(b.$b,b.Fc,b.ac);J.splice(a,1)}
function K(a){function b(d){++Ka;Pa=a;Oa();a.cc(d);Oa();--Ka}if(a.bc)a.Fc=b,a.target.addEventListener(a.$b,b,a.ac),J.push(a),Qa||(ya.push(La),Qa=!0);else for(var c=0;c<J.length;++c)J[c].target==a.target&&J[c].$b==a.$b&&Ma(c--)}function Ra(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}var Qa,Pa,Sa,Ta,Ua,Va,Wa,Xa,Ya,Za=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0];
function L(a){a=2<a?z(a):a;return Za[a]||("undefined"!=typeof document?document.querySelector(a):void 0)}function $a(a){return 0>Za.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}var ab;ab=ea?()=>{var a=process.hrtime();return 1E3*a[0]+a[1]/1E6}:()=>performance.now();var bb=[];function M(a){var b=bb[a];b||(a>=bb.length&&(bb.length=a+1),bb[a]=b=ua.get(a));return b}
function cb(a,b,c,d,e,k){Sa||(Sa=O(256));a={target:L(a),$b:k,bc:d,cc:function(f){f=f||event;var m=f.target.id?f.target.id:"",n=Sa;B(Ra(f.target),A,n+0,128);B(m,A,n+128,128);M(d)(e,n,b)&&f.preventDefault()},ac:c};K(a)}
function db(a,b,c,d,e,k){Ta||(Ta=O(176));a={target:L(a),ic:!0,$b:k,bc:d,cc:function(f){var m=Ta;F[m>>3]=f.timeStamp;var n=m>>2;C[n+2]=f.location;C[n+3]=f.ctrlKey;C[n+4]=f.shiftKey;C[n+5]=f.altKey;C[n+6]=f.metaKey;C[n+7]=f.repeat;C[n+8]=f.charCode;C[n+9]=f.keyCode;C[n+10]=f.which;B(f.key||"",A,m+44,32);B(f.code||"",A,m+76,32);B(f.char||"",A,m+108,32);B(f.locale||"",A,m+140,32);M(d)(e,m,b)&&f.preventDefault()},ac:c};K(a)}
function eb(a,b,c){F[a>>3]=b.timeStamp;a>>=2;C[a+2]=b.screenX;C[a+3]=b.screenY;C[a+4]=b.clientX;C[a+5]=b.clientY;C[a+6]=b.ctrlKey;C[a+7]=b.shiftKey;C[a+8]=b.altKey;C[a+9]=b.metaKey;ra[2*a+20]=b.button;ra[2*a+21]=b.buttons;C[a+11]=b.movementX;C[a+12]=b.movementY;c=$a(c);C[a+13]=b.clientX-c.left;C[a+14]=b.clientY-c.top}
function P(a,b,c,d,e,k){Ua||(Ua=O(72));a=L(a);K({target:a,ic:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,$b:k,bc:d,cc:function(f){f=f||event;eb(Ua,f,a);M(d)(e,Ua,b)&&f.preventDefault()},ac:c})}function fb(a,b,c,d,e){Va||(Va=O(260));K({target:a,$b:e,bc:d,cc:function(k){k=k||event;var f=Va,m=document.pointerLockElement||document.fc||document.pc||document.oc;C[f>>2]=!!m;var n=m&&m.id?m.id:"";B(Ra(m),A,f+4,128);B(n,A,f+132,128);M(d)(20,f,b)&&k.preventDefault()},ac:c})}
function gb(a,b,c,d,e){K({target:a,$b:e,bc:d,cc:function(k){k=k||event;M(d)(38,0,b)&&k.preventDefault()},ac:c})}
function hb(a,b,c,d){Wa||(Wa=O(36));a=L(a);K({target:a,$b:"resize",bc:d,cc:function(e){e=e||event;if(e.target==a){var k=document.body;if(k){var f=Wa;C[f>>2]=e.detail;C[f+4>>2]=k.clientWidth;C[f+8>>2]=k.clientHeight;C[f+12>>2]=innerWidth;C[f+16>>2]=innerHeight;C[f+20>>2]=outerWidth;C[f+24>>2]=outerHeight;C[f+28>>2]=pageXOffset;C[f+32>>2]=pageYOffset;M(d)(10,f,b)&&e.preventDefault()}}},ac:c})}
function ib(a,b,c,d,e,k){Xa||(Xa=O(1696));a=L(a);K({target:a,ic:"touchstart"==k||"touchend"==k,$b:k,bc:d,cc:function(f){for(var m,n={},p=f.touches,r=0;r<p.length;++r)m=p[r],m.tc=m.vc=0,n[m.identifier]=m;for(r=0;r<f.changedTouches.length;++r)m=f.changedTouches[r],m.tc=1,n[m.identifier]=m;for(r=0;r<f.targetTouches.length;++r)n[f.targetTouches[r].identifier].vc=1;p=Xa;F[p>>3]=f.timeStamp;var w=p>>2;C[w+3]=f.ctrlKey;C[w+4]=f.shiftKey;C[w+5]=f.altKey;C[w+6]=f.metaKey;w+=7;var N=$a(a),pb=0;for(r in n)if(m=
n[r],C[w]=m.identifier,C[w+1]=m.screenX,C[w+2]=m.screenY,C[w+3]=m.clientX,C[w+4]=m.clientY,C[w+5]=m.pageX,C[w+6]=m.pageY,C[w+7]=m.tc,C[w+8]=m.vc,C[w+9]=m.clientX-N.left,C[w+10]=m.clientY-N.top,w+=13,31<++pb)break;C[p+8>>2]=pb;M(d)(e,p,b)&&f.preventDefault()},ac:c})}function jb(a,b,c,d,e,k){a={target:L(a),$b:k,bc:d,cc:function(f){f=f||event;M(d)(e,0,b)&&f.preventDefault()},ac:c};K(a)}
function kb(a,b,c,d){Ya||(Ya=O(104));K({target:a,ic:!0,$b:"wheel",bc:d,cc:function(e){e=e||event;var k=Ya;eb(k,e,a);F[k+72>>3]=e.deltaX;F[k+80>>3]=e.deltaY;F[k+88>>3]=e.deltaZ;C[k+96>>2]=e.deltaMode;M(d)(9,k,b)&&e.preventDefault()},ac:c})}
function lb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,k){b.drawArraysInstancedANGLE(c,d,e,k)},a.drawElementsInstanced=function(c,d,e,k,f){b.drawElementsInstancedANGLE(c,d,e,k,f)})}
function mb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function nb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function ob(a){a.Lc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function qb(a){a.Nc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function rb(a){a.Pc=a.getExtension("WEBGL_multi_draw")}var sb=1,tb=[],Q=[],ub=[],vb=[],wb=[],R=[],xb=[],yb=[],zb={},Ab={};function S(a){Bb||(Bb=a)}function Cb(a){for(var b=sb++,c=a.length;c<b;c++)a[c]=null;return b}
function Db(a,b){a.fc||(a.fc=a.getContext,a.getContext=function(d,e){e=a.fc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.uc?a.getContext("webgl2",b):a.getContext("webgl",b);return c?Eb(c,b):0}function Eb(a,b){var c=Cb(yb),d={Mc:c,attributes:b,version:b.uc,mc:a};a.canvas&&(a.canvas.Ic=d);yb[c]=d;("undefined"==typeof b.sc||b.sc)&&Fb(d);return c}
function Fb(a){a||(a=T);if(!a.Hc){a.Hc=!0;var b=a.mc;lb(b);mb(b);nb(b);ob(b);qb(b);2<=a.version&&(b.rc=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.rc)b.rc=b.getExtension("EXT_disjoint_timer_query");rb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var Bb,T,Gb=["default","low-power","high-performance"],Hb=[null,[],[]];
function Ib(a,b,c,d){for(var e=0;e<a;e++){var k=U[c](),f=k&&Cb(d);k?(k.name=f,d[f]=k):S(1282);C[b+4*e>>2]=f}}
function Jb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=U.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>T.version){S(1282);return}c=2*(U.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>T.version){S(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=U.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":S(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:S(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)C[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){S(1280);x("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:S(1280);x("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}C[b>>2]=c}else S(1281)}
function V(a){var b=oa(a)+1,c=O(b);B(a,A,c,b);return c}function Kb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function Lb(a){a-=5120;return 0==a?qa:1==a?A:2==a?ra:4==a?C:6==a?E:5==a||28922==a||28520==a||30779==a||30782==a?D:sa}function W(a){var b=U.Ec;if(b){var c=b.hc[a];"number"==typeof c&&(b.hc[a]=c=U.getUniformLocation(b,b.Cc[a]+(0<c?"["+c+"]":"")));return c}S(1282)}var X=[],Y=[];function Mb(a){if(!noExitRuntime){if(g.onExit)g.onExit(a);la=!0}h(a,new v(a))}
function Nb(a){var b=oa(a)+1,c=Ob(b);B(a,qa,c,b);return c}for(var U,Pb=new Float32Array(288),Z=0;288>Z;++Z)X[Z]=Pb.subarray(0,Z+1);var Qb=new Int32Array(288);for(Z=0;288>Z;++Z)Y[Z]=Qb.subarray(0,Z+1);
var ac={na:function(){return 0},jb:function(){return 0},kb:function(){},V:function(){return"number"==typeof devicePixelRatio&&devicePixelRatio||1},Y:function(a,b,c){a=L(a);if(!a)return-4;a=$a(a);F[b>>3]=a.width;F[c>>3]=a.height;return 0},C:ab,gb:function(a,b,c){A.copyWithin(a,b,b+c)},La:function(a,b){function c(d){M(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},fb:function(a){var b=A.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+
100663296);var e=Math;d=Math.max(a,d);e=e.min.call(e,2147483648,d+(65536-d%65536)%65536);a:{try{ka.grow(e-pa.byteLength+65535>>>16);ta();var k=1;break a}catch(f){}k=void 0}if(k)return!0}return!1},Z:function(a,b,c,d){cb(a,b,c,d,12,"blur");return 0},S:function(a,b,c){a=L(a);if(!a)return-4;a.width=b;a.height=c;return 0},_:function(a,b,c,d){cb(a,b,c,d,13,"focus");return 0},ha:function(a,b,c,d){db(a,b,c,d,2,"keydown");return 0},fa:function(a,b,c,d){db(a,b,c,d,1,"keypress");return 0},ga:function(a,b,c,
d){db(a,b,c,d,3,"keyup");return 0},ra:function(a,b,c,d){P(a,b,c,d,5,"mousedown");return 0},ka:function(a,b,c,d){P(a,b,c,d,33,"mouseenter");return 0},ja:function(a,b,c,d){P(a,b,c,d,34,"mouseleave");return 0},la:function(a,b,c,d){P(a,b,c,d,8,"mousemove");return 0},qa:function(a,b,c,d){P(a,b,c,d,6,"mouseup");return 0},aa:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.fc||document.body.pc||document.body.oc))return-1;a=L(a);if(!a)return-4;fb(a,b,c,d,"pointerlockchange");
fb(a,b,c,d,"mozpointerlockchange");fb(a,b,c,d,"webkitpointerlockchange");fb(a,b,c,d,"mspointerlockchange");return 0},$:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.fc||document.body.pc||document.body.oc))return-1;a=L(a);if(!a)return-4;gb(a,b,c,d,"pointerlockerror");gb(a,b,c,d,"mozpointerlockerror");gb(a,b,c,d,"webkitpointerlockerror");gb(a,b,c,d,"mspointerlockerror");return 0},Za:function(a,b,c,d){hb(a,b,c,d);return 0},ba:function(a,b,c,d){ib(a,b,c,d,25,"touchcancel");
return 0},ca:function(a,b,c,d){ib(a,b,c,d,23,"touchend");return 0},da:function(a,b,c,d){ib(a,b,c,d,24,"touchmove");return 0},ea:function(a,b,c,d){ib(a,b,c,d,22,"touchstart");return 0},X:function(a,b,c,d){jb(a,b,c,d,31,"webglcontextlost");return 0},W:function(a,b,c,d){jb(a,b,c,d,32,"webglcontextrestored");return 0},ia:function(a,b,c,d){a=L(a);return"undefined"!=typeof a.onwheel?(kb(a,b,c,d),0):-1},G:function(a,b){b>>=2;b={alpha:!!C[b],depth:!!C[b+1],stencil:!!C[b+2],antialias:!!C[b+3],premultipliedAlpha:!!C[b+
4],preserveDrawingBuffer:!!C[b+5],powerPreference:Gb[C[b+6]],failIfMajorPerformanceCaveat:!!C[b+7],uc:C[b+8],Oc:C[b+9],sc:C[b+10],Gc:C[b+11],Qc:C[b+12],Rc:C[b+13]};a=L(a);return!a||b.Gc?0:Db(a,b)},Bb:function(a,b){a=yb[a];b=z(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&lb(U);"OES_vertex_array_object"==b&&mb(U);"WEBGL_draw_buffers"==b&&nb(U);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&ob(U);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&qb(U);"WEBGL_multi_draw"==
b&&rb(U);return!!a.mc.getExtension(b)},Ia:function(a){a>>=2;for(var b=0;14>b;++b)C[a+b]=0;C[a]=C[a+1]=C[a+3]=C[a+4]=C[a+8]=C[a+10]=1},Gb:function(a){T=yb[a];g.Kc=U=T&&T.mc;return!a||U?0:-5},ma:function(){return 52},ib:function(){return 52},eb:function(){return 70},hb:function(a,b,c,d){for(var e=0,k=0;k<c;k++){var f=D[b>>2],m=D[b+4>>2];b+=8;for(var n=0;n<m;n++){var p=A[f+n],r=Hb[a];0===p||10===p?((1===a?ia:x)(na(r,0)),r.length=0):r.push(p)}e+=m}D[d>>2]=e;return 0},b:function(a){U.activeTexture(a)},
F:function(a,b){U.attachShader(Q[a],R[b])},c:function(a,b){35051==a?U.qc=b:35052==a&&(U.ec=b);U.bindBuffer(a,tb[b])},h:function(a,b){U.bindFramebuffer(a,ub[b])},J:function(a,b){U.bindRenderbuffer(a,vb[b])},a:function(a,b){U.bindTexture(a,wb[b])},T:function(a){U.bindVertexArray(xb[a])},O:function(a,b,c,d){U.blendColor(a,b,c,d)},P:function(a,b){U.blendEquationSeparate(a,b)},Q:function(a,b,c,d){U.blendFuncSeparate(a,b,c,d)},q:function(a,b,c,d,e,k,f,m,n,p){U.blitFramebuffer(a,b,c,d,e,k,f,m,n,p)},Ja:function(a,
b,c,d){2<=T.version?c&&b?U.bufferData(a,A,d,c,b):U.bufferData(a,b,d):U.bufferData(a,c?A.subarray(c,c+b):b,d)},j:function(a,b,c,d){2<=T.version?c&&U.bufferSubData(a,b,A,d,c):U.bufferSubData(a,b,A.subarray(d,d+c))},Cb:function(a){U.clear(a)},ua:function(a,b,c,d){U.clearColor(a,b,c,d)},A:function(a){U.clearDepth(a)},Db:function(a){U.clearStencil(a)},k:function(a,b,c,d){U.colorMask(!!a,!!b,!!c,!!d)},wa:function(a){U.compileShader(R[a])},Fa:function(a,b,c,d,e,k,f,m){2<=T.version?U.ec||!f?U.compressedTexImage2D(a,
b,c,d,e,k,f,m):U.compressedTexImage2D(a,b,c,d,e,k,A,m,f):U.compressedTexImage2D(a,b,c,d,e,k,m?A.subarray(m,m+f):null)},Da:function(a,b,c,d,e,k,f,m,n){U.ec?U.compressedTexImage3D(a,b,c,d,e,k,f,m,n):U.compressedTexImage3D(a,b,c,d,e,k,f,A,n,m)},Ba:function(){var a=Cb(Q),b=U.createProgram();b.name=a;b.lc=b.jc=b.kc=0;b.nc=1;Q[a]=b;return a},ya:function(a){var b=Cb(R);R[b]=U.createShader(a);return b},L:function(a){U.cullFace(a)},Ra:function(a,b){for(var c=0;c<a;c++){var d=C[b+4*c>>2],e=tb[d];e&&(U.deleteBuffer(e),
e.name=0,tb[d]=null,d==U.qc&&(U.qc=0),d==U.ec&&(U.ec=0))}},i:function(a,b){for(var c=0;c<a;++c){var d=C[b+4*c>>2],e=ub[d];e&&(U.deleteFramebuffer(e),e.name=0,ub[d]=null)}},y:function(a){if(a){var b=Q[a];b?(U.deleteProgram(b),b.name=0,Q[a]=null):S(1281)}},U:function(a,b){for(var c=0;c<a;c++){var d=C[b+4*c>>2],e=vb[d];e&&(U.deleteRenderbuffer(e),e.name=0,vb[d]=null)}},u:function(a){if(a){var b=R[a];b?(U.deleteShader(b),R[a]=null):S(1281)}},Qa:function(a,b){for(var c=0;c<a;c++){var d=C[b+4*c>>2],e=wb[d];
e&&(U.deleteTexture(e),e.name=0,wb[d]=null)}},Pa:function(a,b){for(var c=0;c<a;c++){var d=C[b+4*c>>2];U.deleteVertexArray(xb[d]);xb[d]=null}},x:function(a){U.depthFunc(a)},w:function(a){U.depthMask(!!a)},e:function(a){U.disable(a)},R:function(a){U.disableVertexAttribArray(a)},lb:function(a,b,c){U.drawArrays(a,b,c)},mb:function(a,b,c,d){U.drawArraysInstanced(a,b,c,d)},nb:function(a,b,c,d){U.drawElements(a,b,c,d)},ob:function(a,b,c,d,e){U.drawElementsInstanced(a,b,c,d,e)},g:function(a){U.enable(a)},
yb:function(a){U.enableVertexAttribArray(a)},M:function(a){U.frontFace(a)},Ka:function(a,b){Ib(a,b,"createBuffer",tb)},K:function(a,b){Ib(a,b,"createRenderbuffer",vb)},Ga:function(a,b){Ib(a,b,"createTexture",wb)},Oa:function(a,b){Ib(a,b,"createVertexArray",xb)},Eb:function(a,b){return U.getAttribLocation(Q[a],z(b))},d:function(a,b){Jb(a,b)},za:function(a,b,c,d){a=U.getProgramInfoLog(Q[a]);null===a&&(a="(unknown error)");b=0<b&&d?B(a,A,d,b):0;c&&(C[c>>2]=b)},E:function(a,b,c){if(c)if(a>=sb)S(1281);
else if(a=Q[a],35716==b)a=U.getProgramInfoLog(a),null===a&&(a="(unknown error)"),C[c>>2]=a.length+1;else if(35719==b){if(!a.lc)for(b=0;b<U.getProgramParameter(a,35718);++b)a.lc=Math.max(a.lc,U.getActiveUniform(a,b).name.length+1);C[c>>2]=a.lc}else if(35722==b){if(!a.jc)for(b=0;b<U.getProgramParameter(a,35721);++b)a.jc=Math.max(a.jc,U.getActiveAttrib(a,b).name.length+1);C[c>>2]=a.jc}else if(35381==b){if(!a.kc)for(b=0;b<U.getProgramParameter(a,35382);++b)a.kc=Math.max(a.kc,U.getActiveUniformBlockName(a,
b).length+1);C[c>>2]=a.kc}else C[c>>2]=U.getProgramParameter(a,b);else S(1281)},Fb:function(a,b,c,d){a=U.getShaderInfoLog(R[a]);null===a&&(a="(unknown error)");b=0<b&&d?B(a,A,d,b):0;c&&(C[c>>2]=b)},va:function(a,b,c){c?35716==b?(a=U.getShaderInfoLog(R[a]),null===a&&(a="(unknown error)"),C[c>>2]=a?a.length+1:0):35720==b?(a=U.getShaderSource(R[a]),C[c>>2]=a?a.length+1:0):C[c>>2]=U.getShaderParameter(R[a],b):S(1281)},Ta:function(a){var b=zb[a];if(!b){switch(a){case 7939:b=U.getSupportedExtensions()||
[];b=b.concat(b.map(function(d){return"GL_"+d}));b=V(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=U.getParameter(a))||S(1280);b=b&&V(b);break;case 7938:b=U.getParameter(7938);b=2<=T.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=V(b);break;case 35724:b=U.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=V(b);break;default:S(1280)}zb[a]=b}return b},Sa:function(a,
b){if(2>T.version)return S(1282),0;var c=Ab[a];if(c)return 0>b||b>=c.length?(S(1281),0):c[b];switch(a){case 7939:return c=U.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return V(d)}),c=Ab[a]=c,0>b||b>=c.length?(S(1281),0):c[b];default:return S(1280),0}},m:function(a,b){b=z(b);if(a=Q[a]){var c=a,d=c.hc,e=c.Dc,k;if(!d)for(c.hc=d={},c.Cc={},k=0;k<U.getProgramParameter(c,35718);++k){var f=U.getActiveUniform(c,k);var m=f.name;f=f.size;var n=Kb(m);n=0<n?
m.slice(0,n):m;var p=c.nc;c.nc+=f;e[n]=[f,p];for(m=0;m<f;++m)d[p]=m,c.Cc[p++]=n}c=a.hc;d=0;e=b;k=Kb(b);0<k&&(d=parseInt(b.slice(k+1))>>>0,e=b.slice(0,k));if((e=a.Dc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||U.getUniformLocation(a,b)))return d}else S(1281);return-1},Aa:function(a){a=Q[a];U.linkProgram(a);a.hc=0;a.Dc={}},N:function(a,b){U.polygonOffset(a,b)},r:function(a){U.readBuffer(a)},Ha:function(a,b,c,d){U.renderbufferStorage(a,b,c,d)},I:function(a,b,c,d,e){U.renderbufferStorageMultisample(a,b,c,d,e)},
s:function(a,b,c,d){U.scissor(a,b,c,d)},xa:function(a,b,c,d){for(var e="",k=0;k<b;++k){var f=d?C[d+4*k>>2]:-1;e+=z(C[c+4*k>>2],0>f?void 0:f)}U.shaderSource(R[a],e)},Na:function(a,b,c){U.stencilFunc(a,b,c)},ta:function(a,b,c,d){U.stencilFuncSeparate(a,b,c,d)},v:function(a){U.stencilMask(a)},Ma:function(a,b,c){U.stencilOp(a,b,c)},sa:function(a,b,c,d){U.stencilOpSeparate(a,b,c,d)},Ea:function(a,b,c,d,e,k,f,m,n){if(2<=T.version)if(U.ec)U.texImage2D(a,b,c,d,e,k,f,m,n);else if(n){var p=Lb(m);U.texImage2D(a,
b,c,d,e,k,f,m,p,n>>31-Math.clz32(p.BYTES_PER_ELEMENT))}else U.texImage2D(a,b,c,d,e,k,f,m,null);else{p=U;var r=p.texImage2D;if(n){var w=Lb(m),N=31-Math.clz32(w.BYTES_PER_ELEMENT);n=w.subarray(n>>N,n+e*(d*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[f-6402]||1)*(1<<N)+4-1&-4)>>N)}else n=null;r.call(p,a,b,c,d,e,k,f,m,n)}},Ca:function(a,b,c,d,e,k,f,m,n,p){if(U.ec)U.texImage3D(a,b,c,d,e,k,f,m,n,p);else if(p){var r=Lb(n);U.texImage3D(a,b,c,d,e,k,f,m,n,r,p>>31-Math.clz32(r.BYTES_PER_ELEMENT))}else U.texImage3D(a,
b,c,d,e,k,f,m,n,null)},H:function(a,b,c){U.texParameterf(a,b,c)},f:function(a,b,c){U.texParameteri(a,b,c)},xb:function(a,b,c){if(2<=T.version)b&&U.uniform1fv(W(a),E,c>>2,b);else{if(288>=b)for(var d=X[b-1],e=0;e<b;++e)d[e]=E[c+4*e>>2];else d=E.subarray(c>>2,c+4*b>>2);U.uniform1fv(W(a),d)}},D:function(a,b){U.uniform1i(W(a),b)},tb:function(a,b,c){if(2<=T.version)b&&U.uniform1iv(W(a),C,c>>2,b);else{if(288>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=C[c+4*e>>2];else d=C.subarray(c>>2,c+4*b>>2);U.uniform1iv(W(a),
d)}},wb:function(a,b,c){if(2<=T.version)b&&U.uniform2fv(W(a),E,c>>2,2*b);else{if(144>=b)for(var d=X[2*b-1],e=0;e<2*b;e+=2)d[e]=E[c+4*e>>2],d[e+1]=E[c+(4*e+4)>>2];else d=E.subarray(c>>2,c+8*b>>2);U.uniform2fv(W(a),d)}},sb:function(a,b,c){if(2<=T.version)b&&U.uniform2iv(W(a),C,c>>2,2*b);else{if(144>=b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=C[c+4*e>>2],d[e+1]=C[c+(4*e+4)>>2];else d=C.subarray(c>>2,c+8*b>>2);U.uniform2iv(W(a),d)}},vb:function(a,b,c){if(2<=T.version)b&&U.uniform3fv(W(a),E,c>>2,3*b);else{if(96>=
b)for(var d=X[3*b-1],e=0;e<3*b;e+=3)d[e]=E[c+4*e>>2],d[e+1]=E[c+(4*e+4)>>2],d[e+2]=E[c+(4*e+8)>>2];else d=E.subarray(c>>2,c+12*b>>2);U.uniform3fv(W(a),d)}},rb:function(a,b,c){if(2<=T.version)b&&U.uniform3iv(W(a),C,c>>2,3*b);else{if(96>=b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=C[c+4*e>>2],d[e+1]=C[c+(4*e+4)>>2],d[e+2]=C[c+(4*e+8)>>2];else d=C.subarray(c>>2,c+12*b>>2);U.uniform3iv(W(a),d)}},ub:function(a,b,c){if(2<=T.version)b&&U.uniform4fv(W(a),E,c>>2,4*b);else{if(72>=b){var d=X[4*b-1],e=E;c>>=2;for(var k=
0;k<4*b;k+=4){var f=c+k;d[k]=e[f];d[k+1]=e[f+1];d[k+2]=e[f+2];d[k+3]=e[f+3]}}else d=E.subarray(c>>2,c+16*b>>2);U.uniform4fv(W(a),d)}},qb:function(a,b,c){if(2<=T.version)b&&U.uniform4iv(W(a),C,c>>2,4*b);else{if(72>=b)for(var d=Y[4*b-1],e=0;e<4*b;e+=4)d[e]=C[c+4*e>>2],d[e+1]=C[c+(4*e+4)>>2],d[e+2]=C[c+(4*e+8)>>2],d[e+3]=C[c+(4*e+12)>>2];else d=C.subarray(c>>2,c+16*b>>2);U.uniform4iv(W(a),d)}},pb:function(a,b,c,d){if(2<=T.version)b&&U.uniformMatrix4fv(W(a),!!c,E,d>>2,16*b);else{if(18>=b){var e=X[16*
b-1],k=E;d>>=2;for(var f=0;f<16*b;f+=16){var m=d+f;e[f]=k[m];e[f+1]=k[m+1];e[f+2]=k[m+2];e[f+3]=k[m+3];e[f+4]=k[m+4];e[f+5]=k[m+5];e[f+6]=k[m+6];e[f+7]=k[m+7];e[f+8]=k[m+8];e[f+9]=k[m+9];e[f+10]=k[m+10];e[f+11]=k[m+11];e[f+12]=k[m+12];e[f+13]=k[m+13];e[f+14]=k[m+14];e[f+15]=k[m+15]}}else e=E.subarray(d>>2,d+64*b>>2);U.uniformMatrix4fv(W(a),!!c,e)}},l:function(a){a=Q[a];U.useProgram(a);U.Ec=a},zb:function(a,b){U.vertexAttribDivisor(a,b)},Ab:function(a,b,c,d,e,k){U.vertexAttribPointer(a,b,c,!!d,e,k)},
t:function(a,b,c,d){U.viewport(a,b,c,d)},cb:function(){g.wc=a=>{0!=Rb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",g.wc)},bb:function(){g.Bc=a=>{const b=a.clipboardData.getData("text");Ha(()=>{const c=Nb(b);Sb(c)})};window.addEventListener("paste",g.Bc)},ab:function(a){g.Sc=[];a=z(a);a=document.getElementById(a);g.xc=b=>{b.stopPropagation();b.preventDefault()};g.yc=b=>{b.stopPropagation();b.preventDefault()};g.zc=b=>{b.stopPropagation();b.preventDefault()};g.Ac=
b=>{b.stopPropagation();b.preventDefault();const c=b.dataTransfer.files;g.Tc=c;Tb(c.length);for(let d=0;d<c.length;d++)Ha(()=>{const e=Nb(c[d].name);Ub(d,e)});Vb(b.clientX,b.clientY)};a.addEventListener("dragenter",g.xc,!1);a.addEventListener("dragleave",g.yc,!1);a.addEventListener("dragover",g.zc,!1);a.addEventListener("drop",g.Ac,!1)},Va:function(){const a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},p:function(){const a=document.createElement("input");a.type="text";
a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Wb()});document.body.append(a)},o:function(){document.getElementById("_sokol_app_input_element").focus()},db:function(a){a=z(a);g.dc=document.getElementById(a);g.dc||console.log("sokol_app.h: invalid target:"+a);g.dc.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},$a:function(){window.removeEventListener("beforeunload",g.wc)},_a:function(){window.removeEventListener("paste",
g.Bc)},Ya:function(a){a=z(a);a=document.getElementById(a);a.removeEventListener("dragenter",g.xc);a.removeEventListener("dragleave",g.yc);a.removeEventListener("dragover",g.zc);a.removeEventListener("drop",g.Ac)},z:function(){g.dc&&g.dc.requestPointerLock&&g.dc.requestPointerLock()},Xa:function(a,b){if(g.dc){if(0===b)a="none";else switch(a){case 0:a="auto";break;case 1:a="default";break;case 2:a="text";break;case 3:a="crosshair";break;case 4:a="pointer";break;case 5:a="ew-resize";break;case 6:a="ns-resize";
break;case 7:a="nwse-resize";break;case 8:a="nesw-resize";break;case 9:a="all-scroll";break;case 10:a="not-allowed";break;default:a="auto"}g.dc.style.cursor=a}},Ua:function(a,b,c){const d=document.createElement("canvas");d.width=a;d.height=b;const e=d.getContext("2d"),k=e.createImageData(a,b);k.data.set(A.subarray(c,c+a*b*4));e.putImageData(k,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},n:function(){document.getElementById("_sokol_app_input_element").blur()},
Wa:function(a){a=z(a);const b=document.createElement("textarea");b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");b.setAttribute("spellcheck","false");b.style.left="-100px";b.style.top="-100px";b.style.height=1;b.style.width=1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");document.body.removeChild(b)},B:function(a,b,c,d,e,k){b=z(b);const f=new XMLHttpRequest;f.open("GET",b);f.responseType="arraybuffer";
const m=0<d;m&&f.setRequestHeader("Range","bytes="+c+"-"+(c+d-1));f.onreadystatechange=function(){if(f.readyState==XMLHttpRequest.DONE)if(206==f.status||200==f.status&&!m){const n=new Uint8Array(f.response),p=n.length;p<=k?(A.set(n,e),Xb(a,d,p)):Yb(a)}else Zb(a,f.status)};f.send()},pa:function(a,b){b=z(b);const c=new XMLHttpRequest;c.open("HEAD",b);c.onreadystatechange=function(){if(c.readyState==XMLHttpRequest.DONE)if(200==c.status){const d=c.getResponseHeader("Content-Length");$b(a,d)}else Zb(a,
c.status)};c.send()},oa:function(){return navigator.userAgent.includes("Macintosh")?1:0}};
(function(){function a(e){g.asm=e.exports;ka=g.asm.Hb;ta();ua=g.asm.Xb;wa.unshift(g.asm.Ib);G--;g.monitorRunDependencies&&g.monitorRunDependencies(G);0==G&&(null!==Ba&&(clearInterval(Ba),Ba=null),H&&(e=H,H=null,e()))}function b(e){a(e.instance)}function c(e){return Fa().then(function(k){return WebAssembly.instantiate(k,d)}).then(function(k){return k}).then(e,function(k){x("failed to asynchronously prepare wasm: "+k);ja(k)})}var d={a:ac};G++;g.monitorRunDependencies&&g.monitorRunDependencies(G);if(g.instantiateWasm)try{return g.instantiateWasm(d,
a)}catch(e){return x("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return y||"function"!=typeof WebAssembly.instantiateStreaming||Ca()||I.startsWith("file://")||ea||"function"!=typeof fetch?c(b):fetch(I,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(k){x("wasm streaming compile failed: "+k);x("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
g.___wasm_call_ctors=function(){return(g.___wasm_call_ctors=g.asm.Ib).apply(null,arguments)};
var O=g._malloc=function(){return(O=g._malloc=g.asm.Jb).apply(null,arguments)},Wb=g.__sapp_emsc_notify_keyboard_hidden=function(){return(Wb=g.__sapp_emsc_notify_keyboard_hidden=g.asm.Kb).apply(null,arguments)},Sb=g.__sapp_emsc_onpaste=function(){return(Sb=g.__sapp_emsc_onpaste=g.asm.Lb).apply(null,arguments)},Rb=g.__sapp_html5_get_ask_leave_site=function(){return(Rb=g.__sapp_html5_get_ask_leave_site=g.asm.Mb).apply(null,arguments)},Tb=g.__sapp_emsc_begin_drop=function(){return(Tb=g.__sapp_emsc_begin_drop=
g.asm.Nb).apply(null,arguments)},Ub=g.__sapp_emsc_drop=function(){return(Ub=g.__sapp_emsc_drop=g.asm.Ob).apply(null,arguments)},Vb=g.__sapp_emsc_end_drop=function(){return(Vb=g.__sapp_emsc_end_drop=g.asm.Pb).apply(null,arguments)};g.__sapp_emsc_invoke_fetch_cb=function(){return(g.__sapp_emsc_invoke_fetch_cb=g.asm.Qb).apply(null,arguments)};g._main=function(){return(g._main=g.asm.Rb).apply(null,arguments)};g.__saudio_emsc_pull=function(){return(g.__saudio_emsc_pull=g.asm.Sb).apply(null,arguments)};
var $b=g.__sfetch_emsc_head_response=function(){return($b=g.__sfetch_emsc_head_response=g.asm.Tb).apply(null,arguments)},Xb=g.__sfetch_emsc_get_response=function(){return(Xb=g.__sfetch_emsc_get_response=g.asm.Ub).apply(null,arguments)},Zb=g.__sfetch_emsc_failed_http_status=function(){return(Zb=g.__sfetch_emsc_failed_http_status=g.asm.Vb).apply(null,arguments)},Yb=g.__sfetch_emsc_failed_buffer_too_small=function(){return(Yb=g.__sfetch_emsc_failed_buffer_too_small=g.asm.Wb).apply(null,arguments)},Ia=
g.stackSave=function(){return(Ia=g.stackSave=g.asm.Yb).apply(null,arguments)},Ja=g.stackRestore=function(){return(Ja=g.stackRestore=g.asm.Zb).apply(null,arguments)},Ob=g.stackAlloc=function(){return(Ob=g.stackAlloc=g.asm._b).apply(null,arguments)};g.___start_em_js=51776;g.___stop_em_js=61157;var bc;H=function cc(){bc||dc();bc||(H=cc)};
function ec(a){var b=g._main;a=a||[];a.unshift(ca);var c=a.length,d=Ob(4*(c+1)),e=d>>2;a.forEach(f=>{C[e++]=Nb(f)});C[e]=0;try{var k=b(c,d);Mb(k)}catch(f){f instanceof v||"unwind"==f||h(1,f)}}
function dc(){function a(){if(!bc&&(bc=!0,g.calledRun=!0,!la)){Ga(wa);Ga(xa);if(g.onRuntimeInitialized)g.onRuntimeInitialized();fc&&ec(b);if(g.postRun)for("function"==typeof g.postRun&&(g.postRun=[g.postRun]);g.postRun.length;){var c=g.postRun.shift();za.unshift(c)}Ga(za)}}var b=b||ba;if(!(0<G)){if(g.preRun)for("function"==typeof g.preRun&&(g.preRun=[g.preRun]);g.preRun.length;)Aa();Ga(va);0<G||(g.setStatus?(g.setStatus("Running..."),setTimeout(function(){setTimeout(function(){g.setStatus("")},1);
a()},1)):a())}}if(g.preInit)for("function"==typeof g.preInit&&(g.preInit=[g.preInit]);0<g.preInit.length;)g.preInit.pop()();var fc=!0;g.noInitialRun&&(fc=!1);dc();
