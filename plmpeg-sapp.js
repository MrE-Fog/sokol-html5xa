var g;g||(g=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign({},g),ba=[],ca="./this.program",h=(a,b)=>{throw b;},da="object"==typeof window,l="function"==typeof importScripts,ea="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,q="",fa,r,t;
if(ea){var fs=require("fs"),ha=require("path");q=l?ha.dirname(q)+"/":__dirname+"/";fa=(a,b)=>{a=a.startsWith("file://")?new URL(a):ha.normalize(a);return fs.readFileSync(a,b?void 0:"utf8")};t=a=>{a=fa(a,!0);a.buffer||(a=new Uint8Array(a));return a};r=(a,b,c)=>{a=a.startsWith("file://")?new URL(a):ha.normalize(a);fs.readFile(a,function(d,e){d?c(d):b(e.buffer)})};1<process.argv.length&&(ca=process.argv[1].replace(/\\/g,"/"));ba=process.argv.slice(2);"undefined"!=typeof module&&(module.exports=g);process.on("uncaughtException",
function(a){if(!(a instanceof u))throw a;});if(15>process.version.match(/^v(\d+)\./)[1])process.on("unhandledRejection",function(a){throw a;});h=(a,b)=>{if(noExitRuntime)throw process.exitCode=a,b;b instanceof u||x("exiting due to exception: "+b);process.exit(a)};g.inspect=function(){return"[Emscripten Module object]"}}else if(da||l)l?q=self.location.href:"undefined"!=typeof document&&document.currentScript&&(q=document.currentScript.src),q=0!==q.indexOf("blob:")?q.substr(0,q.replace(/[?#].*/,"").lastIndexOf("/")+
1):"",fa=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},l&&(t=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),r=(a,b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};g.print||console.log.bind(console);var x=g.printErr||console.warn.bind(console);
Object.assign(g,aa);aa=null;g.arguments&&(ba=g.arguments);g.thisProgram&&(ca=g.thisProgram);g.quit&&(h=g.quit);var y;g.wasmBinary&&(y=g.wasmBinary);var noExitRuntime=g.noExitRuntime||!0;"object"!=typeof WebAssembly&&ia("no native wasm support detected");var ja,ka=!1,la="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;
function z(a,b){if(a){var c=A,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.buffer&&la)a=la.decode(c.subarray(a,b));else{for(d="";a<b;){var e=c[a++];if(e&128){var k=c[a++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|k);else{var f=c[a++]&63;e=224==(e&240)?(e&15)<<12|k<<6|f:(e&7)<<18|k<<12|f<<6|c[a++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}a=d}}else a="";return a}
function B(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var k=0;k<a.length;++k){var f=a.charCodeAt(k);if(55296<=f&&57343>=f){var m=a.charCodeAt(++k);f=65536+((f&1023)<<10)|m&1023}if(127>=f){if(c>=d)break;b[c++]=f}else{if(2047>=f){if(c+1>=d)break;b[c++]=192|f>>6}else{if(65535>=f){if(c+2>=d)break;b[c++]=224|f>>12}else{if(c+3>=d)break;b[c++]=240|f>>18;b[c++]=128|f>>12&63}b[c++]=128|f>>6&63}b[c++]=128|f&63}}b[c]=0;return c-e}
function ma(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);127>=d?b++:2047>=d?b+=2:55296<=d&&57343>=d?(b+=4,++c):b+=3}return b}var na,A,oa,pa,C,qa,D,E;function ra(){var a=ja.buffer;g.HEAP8=na=new Int8Array(a);g.HEAP16=oa=new Int16Array(a);g.HEAP32=C=new Int32Array(a);g.HEAPU8=A=new Uint8Array(a);g.HEAPU16=pa=new Uint16Array(a);g.HEAPU32=qa=new Uint32Array(a);g.HEAPF32=D=new Float32Array(a);g.HEAPF64=E=new Float64Array(a)}var sa,ta=[],ua=[],va=[],wa=[],xa=[];
function ya(){var a=g.preRun.shift();ta.unshift(a)}var F=0,za=null,G=null;function ia(a){if(g.onAbort)g.onAbort(a);a="Aborted("+a+")";x(a);ka=!0;throw new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");}function Aa(){return H.startsWith("data:application/octet-stream;base64,")}var H;H="plmpeg-sapp.wasm";if(!Aa()){var Ba=H;H=g.locateFile?g.locateFile(Ba,q):q+Ba}
function Ca(){var a=H;try{if(a==H&&y)return new Uint8Array(y);if(t)return t(a);throw"both async and sync fetching of the wasm failed";}catch(b){ia(b)}}
function Da(){if(!y&&(da||l)){if("function"==typeof fetch&&!H.startsWith("file://"))return fetch(H,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+H+"'";return a.arrayBuffer()}).catch(function(){return Ca()});if(r)return new Promise(function(a,b){r(H,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ca()})}function u(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}
function Ea(a){for(;0<a.length;)a.shift()(g)}function Fa(a){var b=Ga();a();Ha(b)}var Ia=0;function Ja(){for(var a=I.length-1;0<=a;--a)Ka(a);I=[];La=[]}var La=[];function Ma(){if(Ia&&Na.jc)for(var a=0;a<La.length;++a){var b=La[a];La.splice(a,1);--a;b.Vc.apply(null,b.Kc)}}var I=[];function Ka(a){var b=I[a];b.target.removeEventListener(b.$b,b.Gc,b.ac);I.splice(a,1)}
function J(a){function b(d){++Ia;Na=a;Ma();a.cc(d);Ma();--Ia}if(a.bc)a.Gc=b,a.target.addEventListener(a.$b,b,a.ac),I.push(a),Oa||(wa.push(Ja),Oa=!0);else for(var c=0;c<I.length;++c)I[c].target==a.target&&I[c].$b==a.$b&&Ka(c--)}function Pa(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}var Oa,Na,Qa,Ra,Sa,Ta,Ua,Va,Wa,Xa=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0];
function K(a){a=2<a?z(a):a;return Xa[a]||("undefined"!=typeof document?document.querySelector(a):void 0)}function Ya(a){return 0>Xa.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}var Za=[];function L(a){var b=Za[a];b||(a>=Za.length&&(Za.length=a+1),Za[a]=b=sa.get(a));return b}function $a(a,b,c,d,e,k){Qa||(Qa=M(256));a={target:K(a),$b:k,bc:d,cc:function(f=event){var m=f.target.id?f.target.id:"",n=Qa;B(Pa(f.target),A,n+0,128);B(m,A,n+128,128);L(d)(e,n,b)&&f.preventDefault()},ac:c};J(a)}
function ab(a,b,c,d,e,k){Ra||(Ra=M(176));a={target:K(a),jc:!0,$b:k,bc:d,cc:function(f){var m=Ra;E[m>>3]=f.timeStamp;var n=m>>2;C[n+2]=f.location;C[n+3]=f.ctrlKey;C[n+4]=f.shiftKey;C[n+5]=f.altKey;C[n+6]=f.metaKey;C[n+7]=f.repeat;C[n+8]=f.charCode;C[n+9]=f.keyCode;C[n+10]=f.which;B(f.key||"",A,m+44,32);B(f.code||"",A,m+76,32);B(f.char||"",A,m+108,32);B(f.locale||"",A,m+140,32);L(d)(e,m,b)&&f.preventDefault()},ac:c};J(a)}
function bb(a,b,c){E[a>>3]=b.timeStamp;a>>=2;C[a+2]=b.screenX;C[a+3]=b.screenY;C[a+4]=b.clientX;C[a+5]=b.clientY;C[a+6]=b.ctrlKey;C[a+7]=b.shiftKey;C[a+8]=b.altKey;C[a+9]=b.metaKey;oa[2*a+20]=b.button;oa[2*a+21]=b.buttons;C[a+11]=b.movementX;C[a+12]=b.movementY;c=Ya(c);C[a+13]=b.clientX-c.left;C[a+14]=b.clientY-c.top}
function N(a,b,c,d,e,k){Sa||(Sa=M(72));a=K(a);J({target:a,jc:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,$b:k,bc:d,cc:function(f=event){bb(Sa,f,a);L(d)(e,Sa,b)&&f.preventDefault()},ac:c})}function cb(a,b,c,d,e){Ta||(Ta=M(260));J({target:a,$b:e,bc:d,cc:function(k=event){var f=Ta,m=document.pointerLockElement||document.fc||document.qc||document.pc;C[f>>2]=!!m;var n=m&&m.id?m.id:"";B(Pa(m),A,f+4,128);B(n,A,f+132,128);L(d)(20,f,b)&&k.preventDefault()},ac:c})}
function db(a,b,c,d,e){J({target:a,$b:e,bc:d,cc:function(k=event){L(d)(38,0,b)&&k.preventDefault()},ac:c})}function eb(a,b,c,d){Ua||(Ua=M(36));a=K(a);J({target:a,$b:"resize",bc:d,cc:function(e=event){if(e.target==a){var k=document.body;if(k){var f=Ua;C[f>>2]=e.detail;C[f+4>>2]=k.clientWidth;C[f+8>>2]=k.clientHeight;C[f+12>>2]=innerWidth;C[f+16>>2]=innerHeight;C[f+20>>2]=outerWidth;C[f+24>>2]=outerHeight;C[f+28>>2]=pageXOffset;C[f+32>>2]=pageYOffset;L(d)(10,f,b)&&e.preventDefault()}}},ac:c})}
function fb(a,b,c,d,e,k){Va||(Va=M(1696));a=K(a);J({target:a,jc:"touchstart"==k||"touchend"==k,$b:k,bc:d,cc:function(f){for(var m,n={},p=f.touches,v=0;v<p.length;++v)m=p[v],m.uc=m.wc=0,n[m.identifier]=m;for(v=0;v<f.changedTouches.length;++v)m=f.changedTouches[v],m.uc=1,n[m.identifier]=m;for(v=0;v<f.targetTouches.length;++v)n[f.targetTouches[v].identifier].wc=1;p=Va;E[p>>3]=f.timeStamp;var w=p>>2;C[w+3]=f.ctrlKey;C[w+4]=f.shiftKey;C[w+5]=f.altKey;C[w+6]=f.metaKey;w+=7;var mb=Ya(a),nb=0;for(v in n)if(m=
n[v],C[w]=m.identifier,C[w+1]=m.screenX,C[w+2]=m.screenY,C[w+3]=m.clientX,C[w+4]=m.clientY,C[w+5]=m.pageX,C[w+6]=m.pageY,C[w+7]=m.uc,C[w+8]=m.wc,C[w+9]=m.clientX-mb.left,C[w+10]=m.clientY-mb.top,w+=13,31<++nb)break;C[p+8>>2]=nb;L(d)(e,p,b)&&f.preventDefault()},ac:c})}function gb(a,b,c,d,e,k){a={target:K(a),$b:k,bc:d,cc:function(f=event){L(d)(e,0,b)&&f.preventDefault()},ac:c};J(a)}
function hb(a,b,c,d){Wa||(Wa=M(104));J({target:a,jc:!0,$b:"wheel",bc:d,cc:function(e=event){var k=Wa;bb(k,e,a);E[k+72>>3]=e.deltaX;E[k+80>>3]=e.deltaY;E[k+88>>3]=e.deltaZ;C[k+96>>2]=e.deltaMode;L(d)(9,k,b)&&e.preventDefault()},ac:c})}
function ib(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,k){b.drawArraysInstancedANGLE(c,d,e,k)},a.drawElementsInstanced=function(c,d,e,k,f){b.drawElementsInstancedANGLE(c,d,e,k,f)})}
function jb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function kb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function lb(a){a.Mc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function ob(a){a.Oc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function pb(a){a.Qc=a.getExtension("WEBGL_multi_draw")}var qb=1,rb=[],O=[],sb=[],tb=[],ub=[],P=[],vb=[],wb=[],xb={},yb={},zb=4;function Q(a){Ab||(Ab=a)}function Bb(a){for(var b=qb++,c=a.length;c<b;c++)a[c]=null;return b}
function Cb(a,b){a.fc||(a.fc=a.getContext,a.getContext=function(d,e){e=a.fc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.vc?a.getContext("webgl2",b):a.getContext("webgl",b);return c?Db(c,b):0}function Db(a,b){var c=Bb(wb),d={Nc:c,attributes:b,version:b.vc,nc:a};a.canvas&&(a.canvas.Jc=d);wb[c]=d;("undefined"==typeof b.tc||b.tc)&&Eb(d);return c}
function Eb(a){a||(a=R);if(!a.Ic){a.Ic=!0;var b=a.nc;ib(b);jb(b);kb(b);lb(b);ob(b);2<=a.version&&(b.sc=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.sc)b.sc=b.getExtension("EXT_disjoint_timer_query");pb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var Ab,R,Fb=["default","low-power","high-performance"];
function Gb(a,b,c,d){for(var e=0;e<a;e++){var k=S[c](),f=k&&Bb(d);k?(k.name=f,d[f]=k):Q(1282);C[b+4*e>>2]=f}}
function Hb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=S.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>R.version){Q(1282);return}c=2*(S.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>R.version){Q(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=S.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":Q(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:Q(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)C[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){Q(1280);x("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:Q(1280);x("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}C[b>>2]=c}else Q(1281)}
function T(a){var b=ma(a)+1,c=M(b);B(a,A,c,b);return c}function Ib(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function U(a){a-=5120;return 0==a?na:1==a?A:2==a?oa:4==a?C:6==a?D:5==a||28922==a||28520==a||30779==a||30782==a?qa:pa}function V(a){return 31-Math.clz32(a.BYTES_PER_ELEMENT)}function Jb(a,b,c,d,e){a=U(a);var k=V(a),f=zb;return a.subarray(e>>k,e+d*(c*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[b-6402]||1)*(1<<k)+f-1&-f)>>k)}
function W(a){var b=S.Fc;if(b){var c=b.ic[a];"number"==typeof c&&(b.ic[a]=c=S.getUniformLocation(b,b.Dc[a]+(0<c?"["+c+"]":"")));return c}Q(1282)}var X=[],Y=[];function Kb(a){if(!noExitRuntime){if(g.onExit)g.onExit(a);ka=!0}h(a,new u(a))}function Lb(a){var b=ma(a)+1,c=Mb(b);B(a,na,c,b);return c}for(var S,Nb=new Float32Array(288),Z=0;288>Z;++Z)X[Z]=Nb.subarray(0,Z+1);var Ob=new Int32Array(288);for(Z=0;288>Z;++Z)Y[Z]=Ob.subarray(0,Z+1);
var $b={j:function(){ia("")},L:function(){return"number"==typeof devicePixelRatio&&devicePixelRatio||1},P:function(a,b,c){a=K(a);if(!a)return-4;a=Ya(a);E[b>>3]=a.width;E[c>>3]=a.height;return 0},ab:function(a,b,c){A.copyWithin(a,b,b+c)},Ca:function(a,b){function c(d){L(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},$a:function(a){var b=A.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);var e=Math,k=e.min;d=Math.max(a,d);d+=
(65536-d%65536)%65536;a:{var f=ja.buffer;try{ja.grow(k.call(e,2147483648,d)-f.byteLength+65535>>>16);ra();var m=1;break a}catch(n){}m=void 0}if(m)return!0}return!1},S:function(a,b,c,d){$a(a,b,c,d,12,"blur");return 0},H:function(a,b,c){a=K(a);if(!a)return-4;a.width=b;a.height=c;return 0},T:function(a,b,c,d){$a(a,b,c,d,13,"focus");return 0},aa:function(a,b,c,d){ab(a,b,c,d,2,"keydown");return 0},_:function(a,b,c,d){ab(a,b,c,d,1,"keypress");return 0},$:function(a,b,c,d){ab(a,b,c,d,3,"keyup");return 0},
ha:function(a,b,c,d){N(a,b,c,d,5,"mousedown");return 0},da:function(a,b,c,d){N(a,b,c,d,33,"mouseenter");return 0},ca:function(a,b,c,d){N(a,b,c,d,34,"mouseleave");return 0},ea:function(a,b,c,d){N(a,b,c,d,8,"mousemove");return 0},fa:function(a,b,c,d){N(a,b,c,d,6,"mouseup");return 0},V:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.fc||document.body.qc||document.body.pc))return-1;a=K(a);if(!a)return-4;cb(a,b,c,d,"pointerlockchange");cb(a,b,c,d,"mozpointerlockchange");
cb(a,b,c,d,"webkitpointerlockchange");cb(a,b,c,d,"mspointerlockchange");return 0},U:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.fc||document.body.qc||document.body.pc))return-1;a=K(a);if(!a)return-4;db(a,b,c,d,"pointerlockerror");db(a,b,c,d,"mozpointerlockerror");db(a,b,c,d,"webkitpointerlockerror");db(a,b,c,d,"mspointerlockerror");return 0},Na:function(a,b,c,d){eb(a,b,c,d);return 0},W:function(a,b,c,d){fb(a,b,c,d,25,"touchcancel");return 0},X:function(a,b,c,
d){fb(a,b,c,d,23,"touchend");return 0},Y:function(a,b,c,d){fb(a,b,c,d,24,"touchmove");return 0},Z:function(a,b,c,d){fb(a,b,c,d,22,"touchstart");return 0},R:function(a,b,c,d){gb(a,b,c,d,31,"webglcontextlost");return 0},Q:function(a,b,c,d){gb(a,b,c,d,32,"webglcontextrestored");return 0},ba:function(a,b,c,d){a=K(a);return"undefined"!=typeof a.onwheel?(hb(a,b,c,d),0):-1},ma:function(a,b){b>>=2;b={alpha:!!C[b],depth:!!C[b+1],stencil:!!C[b+2],antialias:!!C[b+3],premultipliedAlpha:!!C[b+4],preserveDrawingBuffer:!!C[b+
5],powerPreference:Fb[C[b+6]],failIfMajorPerformanceCaveat:!!C[b+7],vc:C[b+8],Pc:C[b+9],tc:C[b+10],Hc:C[b+11],Rc:C[b+12],Sc:C[b+13]};a=K(a);return!a||b.Hc?0:Cb(a,b)},pb:function(a,b){a=wb[a];b=z(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&ib(S);"OES_vertex_array_object"==b&&jb(S);"WEBGL_draw_buffers"==b&&kb(S);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&lb(S);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&ob(S);"WEBGL_multi_draw"==b&&pb(S);return!!a.nc.getExtension(b)},
ta:function(a){a>>=2;for(var b=0;14>b;++b)C[a+b]=0;C[a]=C[a+1]=C[a+3]=C[a+4]=C[a+8]=C[a+10]=1},yb:function(a){R=wb[a];g.Lc=S=R&&R.nc;return!a||S?0:-5},e:function(a){S.activeTexture(a)},B:function(a,b){S.attachShader(O[a],P[b])},d:function(a,b){35051==a?S.rc=b:35052==a&&(S.ec=b);S.bindBuffer(a,rb[b])},h:function(a,b){S.bindFramebuffer(a,sb[b])},Da:function(a,b){S.bindRenderbuffer(a,tb[b])},a:function(a,b){S.bindTexture(a,ub[b])},M:function(a){S.bindVertexArray(vb[a])},G:function(a,b,c,d){S.blendColor(a,
b,c,d)},I:function(a,b){S.blendEquationSeparate(a,b)},J:function(a,b,c,d){S.blendFuncSeparate(a,b,c,d)},q:function(a,b,c,d,e,k,f,m,n,p){S.blitFramebuffer(a,b,c,d,e,k,f,m,n,p)},Ga:function(a,b,c,d){2<=R.version?c&&b?S.bufferData(a,A,d,c,b):S.bufferData(a,b,d):S.bufferData(a,c?A.subarray(c,c+b):b,d)},Fa:function(a,b,c,d){2<=R.version?c&&S.bufferSubData(a,b,A,d,c):S.bufferSubData(a,b,A.subarray(d,d+c))},zb:function(a){S.clear(a)},ka:function(a,b,c,d){S.clearColor(a,b,c,d)},x:function(a){S.clearDepth(a)},
Ab:function(a){S.clearStencil(a)},k:function(a,b,c,d){S.colorMask(!!a,!!b,!!c,!!d)},oa:function(a){S.compileShader(P[a])},ya:function(a,b,c,d,e,k,f,m){2<=R.version?S.ec||!f?S.compressedTexImage2D(a,b,c,d,e,k,f,m):S.compressedTexImage2D(a,b,c,d,e,k,A,m,f):S.compressedTexImage2D(a,b,c,d,e,k,m?A.subarray(m,m+f):null)},wa:function(a,b,c,d,e,k,f,m,n){S.ec?S.compressedTexImage3D(a,b,c,d,e,k,f,m,n):S.compressedTexImage3D(a,b,c,d,e,k,f,A,n,m)},ua:function(){var a=Bb(O),b=S.createProgram();b.name=a;b.mc=b.kc=
b.lc=0;b.oc=1;O[a]=b;return a},qa:function(a){var b=Bb(P);P[b]=S.createShader(a);return b},D:function(a){S.cullFace(a)},Pa:function(a,b){for(var c=0;c<a;c++){var d=C[b+4*c>>2],e=rb[d];e&&(S.deleteBuffer(e),e.name=0,rb[d]=null,d==S.rc&&(S.rc=0),d==S.ec&&(S.ec=0))}},i:function(a,b){for(var c=0;c<a;++c){var d=C[b+4*c>>2],e=sb[d];e&&(S.deleteFramebuffer(e),e.name=0,sb[d]=null)}},N:function(a){if(a){var b=O[a];b?(S.deleteProgram(b),b.name=0,O[a]=null):Q(1281)}},O:function(a,b){for(var c=0;c<a;c++){var d=
C[b+4*c>>2],e=tb[d];e&&(S.deleteRenderbuffer(e),e.name=0,tb[d]=null)}},s:function(a){if(a){var b=P[a];b?(S.deleteShader(b),P[a]=null):Q(1281)}},Oa:function(a,b){for(var c=0;c<a;c++){var d=C[b+4*c>>2],e=ub[d];e&&(S.deleteTexture(e),e.name=0,ub[d]=null)}},Ma:function(a,b){for(var c=0;c<a;c++){var d=C[b+4*c>>2];S.deleteVertexArray(vb[d]);vb[d]=null}},v:function(a){S.depthFunc(a)},u:function(a){S.depthMask(!!a)},c:function(a){S.disable(a)},K:function(a){S.disableVertexAttribArray(a)},hb:function(a,b,
c){S.drawArrays(a,b,c)},ib:function(a,b,c,d){S.drawArraysInstanced(a,b,c,d)},jb:function(a,b,c,d){S.drawElements(a,b,c,d)},kb:function(a,b,c,d,e){S.drawElementsInstanced(a,b,c,d,e)},g:function(a){S.enable(a)},vb:function(a){S.enableVertexAttribArray(a)},E:function(a){S.frontFace(a)},Ha:function(a,b){Gb(a,b,"createBuffer",rb)},Ea:function(a,b){Gb(a,b,"createRenderbuffer",tb)},za:function(a,b){Gb(a,b,"createTexture",ub)},La:function(a,b){Gb(a,b,"createVertexArray",vb)},Db:function(a,b){return S.getAttribLocation(O[a],
z(b))},b:function(a,b){Hb(a,b)},ra:function(a,b,c,d){a=S.getProgramInfoLog(O[a]);null===a&&(a="(unknown error)");b=0<b&&d?B(a,A,d,b):0;c&&(C[c>>2]=b)},A:function(a,b,c){if(c)if(a>=qb)Q(1281);else if(a=O[a],35716==b)a=S.getProgramInfoLog(a),null===a&&(a="(unknown error)"),C[c>>2]=a.length+1;else if(35719==b){if(!a.mc)for(b=0;b<S.getProgramParameter(a,35718);++b)a.mc=Math.max(a.mc,S.getActiveUniform(a,b).name.length+1);C[c>>2]=a.mc}else if(35722==b){if(!a.kc)for(b=0;b<S.getProgramParameter(a,35721);++b)a.kc=
Math.max(a.kc,S.getActiveAttrib(a,b).name.length+1);C[c>>2]=a.kc}else if(35381==b){if(!a.lc)for(b=0;b<S.getProgramParameter(a,35382);++b)a.lc=Math.max(a.lc,S.getActiveUniformBlockName(a,b).length+1);C[c>>2]=a.lc}else C[c>>2]=S.getProgramParameter(a,b);else Q(1281)},Eb:function(a,b,c,d){a=S.getShaderInfoLog(P[a]);null===a&&(a="(unknown error)");b=0<b&&d?B(a,A,d,b):0;c&&(C[c>>2]=b)},la:function(a,b,c){c?35716==b?(a=S.getShaderInfoLog(P[a]),null===a&&(a="(unknown error)"),C[c>>2]=a?a.length+1:0):35720==
b?(a=S.getShaderSource(P[a]),C[c>>2]=a?a.length+1:0):C[c>>2]=S.getShaderParameter(P[a],b):Q(1281)},Ra:function(a){var b=xb[a];if(!b){switch(a){case 7939:b=S.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=T(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=S.getParameter(a))||Q(1280);b=b&&T(b);break;case 7938:b=S.getParameter(7938);b=2<=R.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=T(b);break;case 35724:b=S.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);
null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=T(b);break;default:Q(1280)}xb[a]=b}return b},Qa:function(a,b){if(2>R.version)return Q(1282),0;var c=yb[a];if(c)return 0>b||b>=c.length?(Q(1281),0):c[b];switch(a){case 7939:return c=S.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return T(d)}),c=yb[a]=c,0>b||b>=c.length?(Q(1281),0):c[b];default:return Q(1280),0}},l:function(a,b){b=z(b);if(a=O[a]){var c=a,d=c.ic,e=c.Ec,k;
if(!d)for(c.ic=d={},c.Dc={},k=0;k<S.getProgramParameter(c,35718);++k){var f=S.getActiveUniform(c,k);var m=f.name;f=f.size;var n=Ib(m);n=0<n?m.slice(0,n):m;var p=c.oc;c.oc+=f;e[n]=[f,p];for(m=0;m<f;++m)d[p]=m,c.Dc[p++]=n}c=a.ic;d=0;e=b;k=Ib(b);0<k&&(d=parseInt(b.slice(k+1))>>>0,e=b.slice(0,k));if((e=a.Ec[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||S.getUniformLocation(a,b)))return d}else Q(1281);return-1},sa:function(a){a=O[a];S.linkProgram(a);a.ic=0;a.Ec={}},Ka:function(a,b){3317==a&&(zb=b);S.pixelStorei(a,
b)},F:function(a,b){S.polygonOffset(a,b)},r:function(a){S.readBuffer(a)},Aa:function(a,b,c,d){S.renderbufferStorage(a,b,c,d)},Ba:function(a,b,c,d,e){S.renderbufferStorageMultisample(a,b,c,d,e)},Bb:function(a,b,c,d){S.scissor(a,b,c,d)},pa:function(a,b,c,d){for(var e="",k=0;k<b;++k){var f=d?C[d+4*k>>2]:-1;e+=z(C[c+4*k>>2],0>f?void 0:f)}S.shaderSource(P[a],e)},Ja:function(a,b,c){S.stencilFunc(a,b,c)},ja:function(a,b,c,d){S.stencilFuncSeparate(a,b,c,d)},t:function(a){S.stencilMask(a)},Ia:function(a,b,
c){S.stencilOp(a,b,c)},ia:function(a,b,c,d){S.stencilOpSeparate(a,b,c,d)},xa:function(a,b,c,d,e,k,f,m,n){if(2<=R.version)if(S.ec)S.texImage2D(a,b,c,d,e,k,f,m,n);else if(n){var p=U(m);S.texImage2D(a,b,c,d,e,k,f,m,p,n>>V(p))}else S.texImage2D(a,b,c,d,e,k,f,m,null);else S.texImage2D(a,b,c,d,e,k,f,m,n?Jb(m,f,d,e,n):null)},va:function(a,b,c,d,e,k,f,m,n,p){if(S.ec)S.texImage3D(a,b,c,d,e,k,f,m,n,p);else if(p){var v=U(n);S.texImage3D(a,b,c,d,e,k,f,m,n,v,p>>V(v))}else S.texImage3D(a,b,c,d,e,k,f,m,n,null)},
C:function(a,b,c){S.texParameterf(a,b,c)},f:function(a,b,c){S.texParameteri(a,b,c)},gb:function(a,b,c,d,e,k,f,m,n){if(2<=R.version)if(S.ec)S.texSubImage2D(a,b,c,d,e,k,f,m,n);else if(n){var p=U(m);S.texSubImage2D(a,b,c,d,e,k,f,m,p,n>>V(p))}else S.texSubImage2D(a,b,c,d,e,k,f,m,null);else p=null,n&&(p=Jb(m,f,e,k,n)),S.texSubImage2D(a,b,c,d,e,k,f,m,p)},fb:function(a,b,c,d,e,k,f,m,n,p,v){if(S.ec)S.texSubImage3D(a,b,c,d,e,k,f,m,n,p,v);else if(v){var w=U(p);S.texSubImage3D(a,b,c,d,e,k,f,m,n,p,w,v>>V(w))}else S.texSubImage3D(a,
b,c,d,e,k,f,m,n,p,null)},ub:function(a,b,c){if(2<=R.version)b&&S.uniform1fv(W(a),D,c>>2,b);else{if(288>=b)for(var d=X[b-1],e=0;e<b;++e)d[e]=D[c+4*e>>2];else d=D.subarray(c>>2,c+4*b>>2);S.uniform1fv(W(a),d)}},z:function(a,b){S.uniform1i(W(a),b)},qb:function(a,b,c){if(2<=R.version)b&&S.uniform1iv(W(a),C,c>>2,b);else{if(288>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=C[c+4*e>>2];else d=C.subarray(c>>2,c+4*b>>2);S.uniform1iv(W(a),d)}},tb:function(a,b,c){if(2<=R.version)b&&S.uniform2fv(W(a),D,c>>2,2*b);else{if(144>=
b)for(var d=X[2*b-1],e=0;e<2*b;e+=2)d[e]=D[c+4*e>>2],d[e+1]=D[c+(4*e+4)>>2];else d=D.subarray(c>>2,c+8*b>>2);S.uniform2fv(W(a),d)}},ob:function(a,b,c){if(2<=R.version)b&&S.uniform2iv(W(a),C,c>>2,2*b);else{if(144>=b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=C[c+4*e>>2],d[e+1]=C[c+(4*e+4)>>2];else d=C.subarray(c>>2,c+8*b>>2);S.uniform2iv(W(a),d)}},sb:function(a,b,c){if(2<=R.version)b&&S.uniform3fv(W(a),D,c>>2,3*b);else{if(96>=b)for(var d=X[3*b-1],e=0;e<3*b;e+=3)d[e]=D[c+4*e>>2],d[e+1]=D[c+(4*e+4)>>2],
d[e+2]=D[c+(4*e+8)>>2];else d=D.subarray(c>>2,c+12*b>>2);S.uniform3fv(W(a),d)}},nb:function(a,b,c){if(2<=R.version)b&&S.uniform3iv(W(a),C,c>>2,3*b);else{if(96>=b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=C[c+4*e>>2],d[e+1]=C[c+(4*e+4)>>2],d[e+2]=C[c+(4*e+8)>>2];else d=C.subarray(c>>2,c+12*b>>2);S.uniform3iv(W(a),d)}},rb:function(a,b,c){if(2<=R.version)b&&S.uniform4fv(W(a),D,c>>2,4*b);else{if(72>=b){var d=X[4*b-1],e=D;c>>=2;for(var k=0;k<4*b;k+=4){var f=c+k;d[k]=e[f];d[k+1]=e[f+1];d[k+2]=e[f+2];d[k+3]=
e[f+3]}}else d=D.subarray(c>>2,c+16*b>>2);S.uniform4fv(W(a),d)}},mb:function(a,b,c){if(2<=R.version)b&&S.uniform4iv(W(a),C,c>>2,4*b);else{if(72>=b)for(var d=Y[4*b-1],e=0;e<4*b;e+=4)d[e]=C[c+4*e>>2],d[e+1]=C[c+(4*e+4)>>2],d[e+2]=C[c+(4*e+8)>>2],d[e+3]=C[c+(4*e+12)>>2];else d=C.subarray(c>>2,c+16*b>>2);S.uniform4iv(W(a),d)}},lb:function(a,b,c,d){if(2<=R.version)b&&S.uniformMatrix4fv(W(a),!!c,D,d>>2,16*b);else{if(18>=b){var e=X[16*b-1],k=D;d>>=2;for(var f=0;f<16*b;f+=16){var m=d+f;e[f]=k[m];e[f+1]=k[m+
1];e[f+2]=k[m+2];e[f+3]=k[m+3];e[f+4]=k[m+4];e[f+5]=k[m+5];e[f+6]=k[m+6];e[f+7]=k[m+7];e[f+8]=k[m+8];e[f+9]=k[m+9];e[f+10]=k[m+10];e[f+11]=k[m+11];e[f+12]=k[m+12];e[f+13]=k[m+13];e[f+14]=k[m+14];e[f+15]=k[m+15]}}else e=D.subarray(d>>2,d+64*b>>2);S.uniformMatrix4fv(W(a),!!c,e)}},m:function(a){a=O[a];S.useProgram(a);S.Fc=a},wb:function(a,b){S.vertexAttribDivisor(a,b)},xb:function(a,b,c,d,e,k){S.vertexAttribPointer(a,b,c,!!d,e,k)},Cb:function(a,b,c,d){S.viewport(a,b,c,d)},Za:function(){g.xc=a=>{0!=Pb()&&
(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",g.xc)},Ya:function(){g.Cc=a=>{const b=a.clipboardData.getData("text");Fa(()=>{const c=Lb(b);Qb(c)})};window.addEventListener("paste",g.Cc)},Xa:function(a){g.Tc=[];a=z(a);a=document.getElementById(a);g.yc=b=>{b.stopPropagation();b.preventDefault()};g.zc=b=>{b.stopPropagation();b.preventDefault()};g.Ac=b=>{b.stopPropagation();b.preventDefault()};g.Bc=b=>{b.stopPropagation();b.preventDefault();const c=b.dataTransfer.files;
g.Uc=c;Rb(c.length);for(let d=0;d<c.length;d++)Fa(()=>{const e=Lb(c[d].name);Sb(d,e)});Tb(b.clientX,b.clientY)};a.addEventListener("dragenter",g.yc,!1);a.addEventListener("dragleave",g.zc,!1);a.addEventListener("dragover",g.Ac,!1);a.addEventListener("drop",g.Bc,!1)},Ta:function(){const a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},p:function(){const a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",
function(){Ub()});document.body.append(a)},o:function(){document.getElementById("_sokol_app_input_element").focus()},_a:function(a){a=z(a);g.hc=document.getElementById(a);g.hc||console.log("sokol_app.h: invalid target:"+a);g.hc.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Wa:function(){window.removeEventListener("beforeunload",g.xc)},Va:function(){window.removeEventListener("paste",g.Cc)},Ua:function(a){a=z(a);a=document.getElementById(a);a.removeEventListener("dragenter",
g.yc);a.removeEventListener("dragleave",g.zc);a.removeEventListener("dragover",g.Ac);a.removeEventListener("drop",g.Bc)},w:function(){g.hc&&g.hc.requestPointerLock&&g.hc.requestPointerLock()},Sa:function(a,b,c){const d=document.createElement("canvas");d.width=a;d.height=b;const e=d.getContext("2d"),k=e.createImageData(a,b);k.data.set(A.subarray(c,c+a*b*4));e.putImageData(k,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},
n:function(){document.getElementById("_sokol_app_input_element").blur()},cb:function(){return g.dc?g.dc.bufferSize:0},eb:function(a,b,c){g.Zb=null;g.dc=null;"undefined"!==typeof AudioContext?g.Zb=new AudioContext({sampleRate:a,latencyHint:"interactive"}):(g.Zb=null,console.log("sokol_audio.h: no WebAudio support"));return g.Zb?(console.log("sokol_audio.h: sample rate ",g.Zb.sampleRate),g.dc=g.Zb.createScriptProcessor(c,0,b),g.dc.onaudioprocess=d=>{const e=d.outputBuffer.length,k=Vb(e);if(k){const f=
d.outputBuffer.numberOfChannels;for(let m=0;m<f;m++){const n=d.outputBuffer.getChannelData(m);for(let p=0;p<e;p++)n[p]=D[(k>>2)+(f*p+m)]}}},g.dc.connect(g.Zb.destination),a=()=>{g.Zb&&"suspended"===g.Zb.state&&g.Zb.resume()},document.addEventListener("click",a,{once:!0}),document.addEventListener("touchend",a,{once:!0}),document.addEventListener("keydown",a,{once:!0}),1):0},db:function(){return g.Zb?g.Zb.sampleRate:0},bb:function(){const a=g.Zb;null!==a&&(g.dc&&g.dc.disconnect(),a.close(),g.Zb=null,
g.dc=null)},y:function(a,b,c,d,e,k){b=z(b);const f=new XMLHttpRequest;f.open("GET",b);f.responseType="arraybuffer";const m=0<d;m&&f.setRequestHeader("Range","bytes="+c+"-"+(c+d-1));f.onreadystatechange=function(){if(f.readyState==XMLHttpRequest.DONE)if(206==f.status||200==f.status&&!m){const n=new Uint8Array(f.response),p=n.length;p<=k?(A.set(n,e),Wb(a,d,p)):Xb(a)}else Yb(a,f.status)};f.send()},ga:function(a,b){b=z(b);const c=new XMLHttpRequest;c.open("HEAD",b);c.onreadystatechange=function(){if(c.readyState==
XMLHttpRequest.DONE)if(200==c.status){const d=c.getResponseHeader("Content-Length");Zb(a,d)}else Yb(a,c.status)};c.send()},na:function(a,b){b=z(b);switch(a){case 0:console.error(b);break;case 1:console.error(b);break;case 2:console.warn(b);break;default:console.info(b)}}};
(function(){function a(e){g.asm=e.exports;ja=g.asm.Fb;ra();sa=g.asm.Vb;ua.unshift(g.asm.Gb);F--;g.monitorRunDependencies&&g.monitorRunDependencies(F);0==F&&(null!==za&&(clearInterval(za),za=null),G&&(e=G,G=null,e()))}function b(e){a(e.instance)}function c(e){return Da().then(function(k){return WebAssembly.instantiate(k,d)}).then(function(k){return k}).then(e,function(k){x("failed to asynchronously prepare wasm: "+k);ia(k)})}var d={a:$b};F++;g.monitorRunDependencies&&g.monitorRunDependencies(F);if(g.instantiateWasm)try{return g.instantiateWasm(d,
a)}catch(e){return x("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return y||"function"!=typeof WebAssembly.instantiateStreaming||Aa()||H.startsWith("file://")||ea||"function"!=typeof fetch?c(b):fetch(H,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(k){x("wasm streaming compile failed: "+k);x("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
function M(){return(M=g.asm.Hb).apply(null,arguments)}
var Ub=g.__sapp_emsc_notify_keyboard_hidden=function(){return(Ub=g.__sapp_emsc_notify_keyboard_hidden=g.asm.Ib).apply(null,arguments)},Qb=g.__sapp_emsc_onpaste=function(){return(Qb=g.__sapp_emsc_onpaste=g.asm.Jb).apply(null,arguments)},Pb=g.__sapp_html5_get_ask_leave_site=function(){return(Pb=g.__sapp_html5_get_ask_leave_site=g.asm.Kb).apply(null,arguments)},Rb=g.__sapp_emsc_begin_drop=function(){return(Rb=g.__sapp_emsc_begin_drop=g.asm.Lb).apply(null,arguments)},Sb=g.__sapp_emsc_drop=function(){return(Sb=
g.__sapp_emsc_drop=g.asm.Mb).apply(null,arguments)},Tb=g.__sapp_emsc_end_drop=function(){return(Tb=g.__sapp_emsc_end_drop=g.asm.Nb).apply(null,arguments)};g.__sapp_emsc_invoke_fetch_cb=function(){return(g.__sapp_emsc_invoke_fetch_cb=g.asm.Ob).apply(null,arguments)};
var ac=g._main=function(){return(ac=g._main=g.asm.Pb).apply(null,arguments)},Vb=g.__saudio_emsc_pull=function(){return(Vb=g.__saudio_emsc_pull=g.asm.Qb).apply(null,arguments)},Zb=g.__sfetch_emsc_head_response=function(){return(Zb=g.__sfetch_emsc_head_response=g.asm.Rb).apply(null,arguments)},Wb=g.__sfetch_emsc_get_response=function(){return(Wb=g.__sfetch_emsc_get_response=g.asm.Sb).apply(null,arguments)},Yb=g.__sfetch_emsc_failed_http_status=function(){return(Yb=g.__sfetch_emsc_failed_http_status=
g.asm.Tb).apply(null,arguments)},Xb=g.__sfetch_emsc_failed_buffer_too_small=function(){return(Xb=g.__sfetch_emsc_failed_buffer_too_small=g.asm.Ub).apply(null,arguments)};function Ga(){return(Ga=g.asm.Wb).apply(null,arguments)}function Ha(){return(Ha=g.asm.Xb).apply(null,arguments)}function Mb(){return(Mb=g.asm.Yb).apply(null,arguments)}g.___start_em_js=15E3;g.___stop_em_js=24519;var bc;G=function cc(){bc||dc();bc||(G=cc)};
function ec(a=[]){var b=ac;a.unshift(ca);var c=a.length,d=Mb(4*(c+1)),e=d>>2;a.forEach(f=>{C[e++]=Lb(f)});C[e]=0;try{var k=b(c,d);Kb(k)}catch(f){f instanceof u||"unwind"==f||h(1,f)}}
function dc(){var a=ba;function b(){if(!bc&&(bc=!0,g.calledRun=!0,!ka)){Ea(ua);Ea(va);if(g.onRuntimeInitialized)g.onRuntimeInitialized();fc&&ec(a);if(g.postRun)for("function"==typeof g.postRun&&(g.postRun=[g.postRun]);g.postRun.length;){var c=g.postRun.shift();xa.unshift(c)}Ea(xa)}}if(!(0<F)){if(g.preRun)for("function"==typeof g.preRun&&(g.preRun=[g.preRun]);g.preRun.length;)ya();Ea(ta);0<F||(g.setStatus?(g.setStatus("Running..."),setTimeout(function(){setTimeout(function(){g.setStatus("")},1);b()},
1)):b())}}if(g.preInit)for("function"==typeof g.preInit&&(g.preInit=[g.preInit]);0<g.preInit.length;)g.preInit.pop()();var fc=!0;g.noInitialRun&&(fc=!1);dc();
