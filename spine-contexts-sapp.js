var g;g||(g=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign({},g),ba=[],ca="./this.program",h=(a,b)=>{throw b;},da="object"==typeof window,l="function"==typeof importScripts,ea="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,q="",fa,ha,ia;
if(ea){var fs=require("fs"),ja=require("path");q=l?ja.dirname(q)+"/":__dirname+"/";fa=(a,b)=>{a=a.startsWith("file://")?new URL(a):ja.normalize(a);return fs.readFileSync(a,b?void 0:"utf8")};ia=a=>{a=fa(a,!0);a.buffer||(a=new Uint8Array(a));return a};ha=(a,b,c)=>{a=a.startsWith("file://")?new URL(a):ja.normalize(a);fs.readFile(a,function(d,e){d?c(d):b(e.buffer)})};1<process.argv.length&&(ca=process.argv[1].replace(/\\/g,"/"));ba=process.argv.slice(2);"undefined"!=typeof module&&(module.exports=g);
process.on("uncaughtException",function(a){if(!(a instanceof ka))throw a;});if(15>process.version.match(/^v(\d+)\./)[1])process.on("unhandledRejection",function(a){throw a;});h=(a,b)=>{if(noExitRuntime)throw process.exitCode=a,b;b instanceof ka||r("exiting due to exception: "+b);process.exit(a)};g.inspect=function(){return"[Emscripten Module object]"}}else if(da||l)l?q=self.location.href:"undefined"!=typeof document&&document.currentScript&&(q=document.currentScript.src),q=0!==q.indexOf("blob:")?
q.substr(0,q.replace(/[?#].*/,"").lastIndexOf("/")+1):"",fa=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},l&&(ia=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),ha=(a,b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};g.print||console.log.bind(console);
var r=g.printErr||console.warn.bind(console);Object.assign(g,aa);aa=null;g.arguments&&(ba=g.arguments);g.thisProgram&&(ca=g.thisProgram);g.quit&&(h=g.quit);var t;g.wasmBinary&&(t=g.wasmBinary);var noExitRuntime=g.noExitRuntime||!0;"object"!=typeof WebAssembly&&la("no native wasm support detected");var ma,na=!1,oa="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;
function u(a,b){if(a){var c=w,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.buffer&&oa)a=oa.decode(c.subarray(a,b));else{for(d="";a<b;){var e=c[a++];if(e&128){var k=c[a++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|k);else{var f=c[a++]&63;e=224==(e&240)?(e&15)<<12|k<<6|f:(e&7)<<18|k<<12|f<<6|c[a++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}a=d}}else a="";return a}
function y(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var k=0;k<a.length;++k){var f=a.charCodeAt(k);if(55296<=f&&57343>=f){var m=a.charCodeAt(++k);f=65536+((f&1023)<<10)|m&1023}if(127>=f){if(c>=d)break;b[c++]=f}else{if(2047>=f){if(c+1>=d)break;b[c++]=192|f>>6}else{if(65535>=f){if(c+2>=d)break;b[c++]=224|f>>12}else{if(c+3>=d)break;b[c++]=240|f>>18;b[c++]=128|f>>12&63}b[c++]=128|f>>6&63}b[c++]=128|f&63}}b[c]=0;return c-e}
function pa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);127>=d?b++:2047>=d?b+=2:55296<=d&&57343>=d?(b+=4,++c):b+=3}return b}var qa,w,ra,sa,z,ta,A,B;function ua(){var a=ma.buffer;g.HEAP8=qa=new Int8Array(a);g.HEAP16=ra=new Int16Array(a);g.HEAP32=z=new Int32Array(a);g.HEAPU8=w=new Uint8Array(a);g.HEAPU16=sa=new Uint16Array(a);g.HEAPU32=ta=new Uint32Array(a);g.HEAPF32=A=new Float32Array(a);g.HEAPF64=B=new Float64Array(a)}var va,wa=[],xa=[],ya=[],za=[],Aa=[];
function Ba(){var a=g.preRun.shift();wa.unshift(a)}var C=0,Ca=null,D=null;function la(a){if(g.onAbort)g.onAbort(a);a="Aborted("+a+")";r(a);na=!0;throw new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");}function Da(){return E.startsWith("data:application/octet-stream;base64,")}var E;E="spine-contexts-sapp.wasm";if(!Da()){var Ea=E;E=g.locateFile?g.locateFile(Ea,q):q+Ea}
function Fa(){var a=E;try{if(a==E&&t)return new Uint8Array(t);if(ia)return ia(a);throw"both async and sync fetching of the wasm failed";}catch(b){la(b)}}
function Ga(){if(!t&&(da||l)){if("function"==typeof fetch&&!E.startsWith("file://"))return fetch(E,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+E+"'";return a.arrayBuffer()}).catch(function(){return Fa()});if(ha)return new Promise(function(a,b){ha(E,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Fa()})}
function ka(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}function Ha(a){for(;0<a.length;)a.shift()(g)}function Ia(a){var b=Ja();a();Ka(b)}var La=0;function Ma(){for(var a=F.length-1;0<=a;--a)Na(a);F=[];Oa=[]}var Oa=[];function Pa(){if(La&&Qa.jc)for(var a=0;a<Oa.length;++a){var b=Oa[a];Oa.splice(a,1);--a;b.Vc.apply(null,b.Kc)}}var F=[];function Na(a){var b=F[a];b.target.removeEventListener(b.ac,b.Gc,b.bc);F.splice(a,1)}
function G(a){function b(d){++La;Qa=a;Pa();a.dc(d);Pa();--La}if(a.cc)a.Gc=b,a.target.addEventListener(a.ac,b,a.bc),F.push(a),Ra||(za.push(Ma),Ra=!0);else for(var c=0;c<F.length;++c)F[c].target==a.target&&F[c].ac==a.ac&&Na(c--)}function Sa(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}var Ra,Qa,Ta,Ua,Va,Wa,Xa,Ya,Za,$a=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0];
function H(a){a=2<a?u(a):a;return $a[a]||("undefined"!=typeof document?document.querySelector(a):void 0)}function ab(a){return 0>$a.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}var bb=[];function I(a){var b=bb[a];b||(a>=bb.length&&(bb.length=a+1),bb[a]=b=va.get(a));return b}function cb(a,b,c,d,e,k){Ta||(Ta=J(256));a={target:H(a),ac:k,cc:d,dc:function(f=event){var m=f.target.id?f.target.id:"",n=Ta;y(Sa(f.target),w,n+0,128);y(m,w,n+128,128);I(d)(e,n,b)&&f.preventDefault()},bc:c};G(a)}
function db(a,b,c,d,e,k){Ua||(Ua=J(176));a={target:H(a),jc:!0,ac:k,cc:d,dc:function(f){var m=Ua;B[m>>3]=f.timeStamp;var n=m>>2;z[n+2]=f.location;z[n+3]=f.ctrlKey;z[n+4]=f.shiftKey;z[n+5]=f.altKey;z[n+6]=f.metaKey;z[n+7]=f.repeat;z[n+8]=f.charCode;z[n+9]=f.keyCode;z[n+10]=f.which;y(f.key||"",w,m+44,32);y(f.code||"",w,m+76,32);y(f.char||"",w,m+108,32);y(f.locale||"",w,m+140,32);I(d)(e,m,b)&&f.preventDefault()},bc:c};G(a)}
function eb(a,b,c){B[a>>3]=b.timeStamp;a>>=2;z[a+2]=b.screenX;z[a+3]=b.screenY;z[a+4]=b.clientX;z[a+5]=b.clientY;z[a+6]=b.ctrlKey;z[a+7]=b.shiftKey;z[a+8]=b.altKey;z[a+9]=b.metaKey;ra[2*a+20]=b.button;ra[2*a+21]=b.buttons;z[a+11]=b.movementX;z[a+12]=b.movementY;c=ab(c);z[a+13]=b.clientX-c.left;z[a+14]=b.clientY-c.top}
function K(a,b,c,d,e,k){Va||(Va=J(72));a=H(a);G({target:a,jc:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,ac:k,cc:d,dc:function(f=event){eb(Va,f,a);I(d)(e,Va,b)&&f.preventDefault()},bc:c})}function fb(a,b,c,d,e){Wa||(Wa=J(260));G({target:a,ac:e,cc:d,dc:function(k=event){var f=Wa,m=document.pointerLockElement||document.fc||document.qc||document.pc;z[f>>2]=!!m;var n=m&&m.id?m.id:"";y(Sa(m),w,f+4,128);y(n,w,f+132,128);I(d)(20,f,b)&&k.preventDefault()},bc:c})}
function gb(a,b,c,d,e){G({target:a,ac:e,cc:d,dc:function(k=event){I(d)(38,0,b)&&k.preventDefault()},bc:c})}function hb(a,b,c,d){Xa||(Xa=J(36));a=H(a);G({target:a,ac:"resize",cc:d,dc:function(e=event){if(e.target==a){var k=document.body;if(k){var f=Xa;z[f>>2]=e.detail;z[f+4>>2]=k.clientWidth;z[f+8>>2]=k.clientHeight;z[f+12>>2]=innerWidth;z[f+16>>2]=innerHeight;z[f+20>>2]=outerWidth;z[f+24>>2]=outerHeight;z[f+28>>2]=pageXOffset;z[f+32>>2]=pageYOffset;I(d)(10,f,b)&&e.preventDefault()}}},bc:c})}
function ib(a,b,c,d,e,k){Ya||(Ya=J(1696));a=H(a);G({target:a,jc:"touchstart"==k||"touchend"==k,ac:k,cc:d,dc:function(f){for(var m,n={},p=f.touches,x=0;x<p.length;++x)m=p[x],m.uc=m.wc=0,n[m.identifier]=m;for(x=0;x<f.changedTouches.length;++x)m=f.changedTouches[x],m.uc=1,n[m.identifier]=m;for(x=0;x<f.targetTouches.length;++x)n[f.targetTouches[x].identifier].wc=1;p=Ya;B[p>>3]=f.timeStamp;var v=p>>2;z[v+3]=f.ctrlKey;z[v+4]=f.shiftKey;z[v+5]=f.altKey;z[v+6]=f.metaKey;v+=7;var N=ab(a),U=0;for(x in n)if(m=
n[x],z[v]=m.identifier,z[v+1]=m.screenX,z[v+2]=m.screenY,z[v+3]=m.clientX,z[v+4]=m.clientY,z[v+5]=m.pageX,z[v+6]=m.pageY,z[v+7]=m.uc,z[v+8]=m.wc,z[v+9]=m.clientX-N.left,z[v+10]=m.clientY-N.top,v+=13,31<++U)break;z[p+8>>2]=U;I(d)(e,p,b)&&f.preventDefault()},bc:c})}function jb(a,b,c,d,e,k){a={target:H(a),ac:k,cc:d,dc:function(f=event){I(d)(e,0,b)&&f.preventDefault()},bc:c};G(a)}
function kb(a,b,c,d){Za||(Za=J(104));G({target:a,jc:!0,ac:"wheel",cc:d,dc:function(e=event){var k=Za;eb(k,e,a);B[k+72>>3]=e.deltaX;B[k+80>>3]=e.deltaY;B[k+88>>3]=e.deltaZ;z[k+96>>2]=e.deltaMode;I(d)(9,k,b)&&e.preventDefault()},bc:c})}
function lb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,k){b.drawArraysInstancedANGLE(c,d,e,k)},a.drawElementsInstanced=function(c,d,e,k,f){b.drawElementsInstancedANGLE(c,d,e,k,f)})}
function mb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function nb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function ob(a){a.Mc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function pb(a){a.Oc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function qb(a){a.Qc=a.getExtension("WEBGL_multi_draw")}var rb=1,sb=[],L=[],tb=[],M=[],O=[],P=[],ub=[],vb=[],wb={},xb={},yb=4;function Q(a){zb||(zb=a)}function Ab(a){for(var b=rb++,c=a.length;c<b;c++)a[c]=null;return b}
function Bb(a,b){a.fc||(a.fc=a.getContext,a.getContext=function(d,e){e=a.fc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.vc?a.getContext("webgl2",b):a.getContext("webgl",b);return c?Cb(c,b):0}function Cb(a,b){var c=Ab(vb),d={Nc:c,attributes:b,version:b.vc,nc:a};a.canvas&&(a.canvas.Jc=d);vb[c]=d;("undefined"==typeof b.tc||b.tc)&&Db(d);return c}
function Db(a){a||(a=R);if(!a.Ic){a.Ic=!0;var b=a.nc;lb(b);mb(b);nb(b);ob(b);pb(b);2<=a.version&&(b.sc=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.sc)b.sc=b.getExtension("EXT_disjoint_timer_query");qb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var zb,R,Eb=["default","low-power","high-performance"],Fb=[];
function S(a,b,c,d){for(var e=0;e<a;e++){var k=T[c](),f=k&&Ab(d);k?(k.name=f,d[f]=k):Q(1282);z[b+4*e>>2]=f}}
function Gb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=T.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>R.version){Q(1282);return}c=2*(T.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>R.version){Q(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=T.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":Q(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:Q(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)z[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){Q(1280);r("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:Q(1280);r("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}z[b>>2]=c}else Q(1281)}
function V(a){var b=pa(a)+1,c=J(b);y(a,w,c,b);return c}function Hb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function Ib(a){a-=5120;return 0==a?qa:1==a?w:2==a?ra:4==a?z:6==a?A:5==a||28922==a||28520==a||30779==a||30782==a?ta:sa}function W(a){var b=T.Fc;if(b){var c=b.ic[a];"number"==typeof c&&(b.ic[a]=c=T.getUniformLocation(b,b.Dc[a]+(0<c?"["+c+"]":"")));return c}Q(1282)}var X=[],Y=[];function Jb(a){if(!noExitRuntime){if(g.onExit)g.onExit(a);na=!0}h(a,new ka(a))}
function Kb(a){var b=pa(a)+1,c=Lb(b);y(a,qa,c,b);return c}for(var T,Z=0;32>Z;++Z)Fb.push(Array(Z));var Mb=new Float32Array(288);for(Z=0;288>Z;++Z)X[Z]=Mb.subarray(0,Z+1);var Nb=new Int32Array(288);for(Z=0;288>Z;++Z)Y[Z]=Nb.subarray(0,Z+1);
var Yb={g:function(){la("")},V:function(){return"number"==typeof devicePixelRatio&&devicePixelRatio||1},Y:function(a,b,c){a=H(a);if(!a)return-4;a=ab(a);B[b>>3]=a.width;B[c>>3]=a.height;return 0},hb:function(a,b,c){w.copyWithin(a,b,b+c)},Ma:function(a,b){function c(d){I(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},gb:function(a){var b=w.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);var e=Math,k=e.min;d=Math.max(a,d);d+=
(65536-d%65536)%65536;a:{var f=ma.buffer;try{ma.grow(k.call(e,2147483648,d)-f.byteLength+65535>>>16);ua();var m=1;break a}catch(n){}m=void 0}if(m)return!0}return!1},$:function(a,b,c,d){cb(a,b,c,d,12,"blur");return 0},R:function(a,b,c){a=H(a);if(!a)return-4;a.width=b;a.height=c;return 0},aa:function(a,b,c,d){cb(a,b,c,d,13,"focus");return 0},ka:function(a,b,c,d){db(a,b,c,d,2,"keydown");return 0},ha:function(a,b,c,d){db(a,b,c,d,1,"keypress");return 0},ia:function(a,b,c,d){db(a,b,c,d,3,"keyup");return 0},
ra:function(a,b,c,d){K(a,b,c,d,5,"mousedown");return 0},na:function(a,b,c,d){K(a,b,c,d,33,"mouseenter");return 0},ma:function(a,b,c,d){K(a,b,c,d,34,"mouseleave");return 0},oa:function(a,b,c,d){K(a,b,c,d,8,"mousemove");return 0},pa:function(a,b,c,d){K(a,b,c,d,6,"mouseup");return 0},ca:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.fc||document.body.qc||document.body.pc))return-1;a=H(a);if(!a)return-4;fb(a,b,c,d,"pointerlockchange");fb(a,b,c,d,"mozpointerlockchange");
fb(a,b,c,d,"webkitpointerlockchange");fb(a,b,c,d,"mspointerlockchange");return 0},ba:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.fc||document.body.qc||document.body.pc))return-1;a=H(a);if(!a)return-4;gb(a,b,c,d,"pointerlockerror");gb(a,b,c,d,"mozpointerlockerror");gb(a,b,c,d,"webkitpointerlockerror");gb(a,b,c,d,"mspointerlockerror");return 0},Ua:function(a,b,c,d){hb(a,b,c,d);return 0},da:function(a,b,c,d){ib(a,b,c,d,25,"touchcancel");return 0},ea:function(a,b,
c,d){ib(a,b,c,d,23,"touchend");return 0},fa:function(a,b,c,d){ib(a,b,c,d,24,"touchmove");return 0},ga:function(a,b,c,d){ib(a,b,c,d,22,"touchstart");return 0},_:function(a,b,c,d){jb(a,b,c,d,31,"webglcontextlost");return 0},Z:function(a,b,c,d){jb(a,b,c,d,32,"webglcontextrestored");return 0},la:function(a,b,c,d){a=H(a);return"undefined"!=typeof a.onwheel?(kb(a,b,c,d),0):-1},ya:function(a,b){b>>=2;b={alpha:!!z[b],depth:!!z[b+1],stencil:!!z[b+2],antialias:!!z[b+3],premultipliedAlpha:!!z[b+4],preserveDrawingBuffer:!!z[b+
5],powerPreference:Eb[z[b+6]],failIfMajorPerformanceCaveat:!!z[b+7],vc:z[b+8],Pc:z[b+9],tc:z[b+10],Hc:z[b+11],Rc:z[b+12],Sc:z[b+13]};a=H(a);return!a||b.Hc?0:Bb(a,b)},yb:function(a,b){a=vb[a];b=u(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&lb(T);"OES_vertex_array_object"==b&&mb(T);"WEBGL_draw_buffers"==b&&nb(T);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&ob(T);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&pb(T);"WEBGL_multi_draw"==b&&qb(T);return!!a.nc.getExtension(b)},
Ea:function(a){a>>=2;for(var b=0;14>b;++b)z[a+b]=0;z[a]=z[a+1]=z[a+3]=z[a+4]=z[a+8]=z[a+10]=1},Fb:function(a){R=vb[a];g.Lc=T=R&&R.nc;return!a||T?0:-5},k:function(a){T.activeTexture(a)},I:function(a,b){T.attachShader(L[a],P[b])},c:function(a,b){35051==a?T.rc=b:35052==a&&(T.ec=b);T.bindBuffer(a,sb[b])},e:function(a,b){T.bindFramebuffer(a,tb[b])},L:function(a,b){T.bindRenderbuffer(a,M[b])},a:function(a,b){T.bindTexture(a,O[b])},W:function(a){T.bindVertexArray(ub[a])},Q:function(a,b,c,d){T.blendColor(a,
b,c,d)},S:function(a,b){T.blendEquationSeparate(a,b)},T:function(a,b,c,d){T.blendFuncSeparate(a,b,c,d)},x:function(a,b,c,d,e,k,f,m,n,p){T.blitFramebuffer(a,b,c,d,e,k,f,m,n,p)},Na:function(a,b,c,d){2<=R.version?c&&b?T.bufferData(a,w,d,c,b):T.bufferData(a,b,d):T.bufferData(a,c?w.subarray(c,c+b):b,d)},t:function(a,b,c,d){2<=R.version?c&&T.bufferSubData(a,b,w,d,c):T.bufferSubData(a,b,w.subarray(d,d+c))},q:function(a){return T.checkFramebufferStatus(a)},Bb:function(a){T.clear(a)},Ab:function(a,b,c,d){T.clearBufferfi(a,
b,c,d)},ua:function(a,b,c){T.clearBufferfv(a,b,A,c>>2)},zb:function(a,b,c){T.clearBufferiv(a,b,z,c>>2)},Eb:function(a,b,c,d){T.clearColor(a,b,c,d)},Db:function(a){T.clearDepth(a)},Cb:function(a){T.clearStencil(a)},n:function(a,b,c,d){T.colorMask(!!a,!!b,!!c,!!d)},za:function(a){T.compileShader(P[a])},Ja:function(a,b,c,d,e,k,f,m){2<=R.version?T.ec||!f?T.compressedTexImage2D(a,b,c,d,e,k,f,m):T.compressedTexImage2D(a,b,c,d,e,k,w,m,f):T.compressedTexImage2D(a,b,c,d,e,k,m?w.subarray(m,m+f):null)},Ha:function(a,
b,c,d,e,k,f,m,n){T.ec?T.compressedTexImage3D(a,b,c,d,e,k,f,m,n):T.compressedTexImage3D(a,b,c,d,e,k,f,w,n,m)},Fa:function(){var a=Ab(L),b=T.createProgram();b.name=a;b.mc=b.kc=b.lc=0;b.oc=1;L[a]=b;return a},Ba:function(a){var b=Ab(P);P[b]=T.createShader(a);return b},N:function(a){T.cullFace(a)},Wa:function(a,b){for(var c=0;c<a;c++){var d=z[b+4*c>>2],e=sb[d];e&&(T.deleteBuffer(e),e.name=0,sb[d]=null,d==T.rc&&(T.rc=0),d==T.ec&&(T.ec=0))}},l:function(a,b){for(var c=0;c<a;++c){var d=z[b+4*c>>2],e=tb[d];
e&&(T.deleteFramebuffer(e),e.name=0,tb[d]=null)}},D:function(a){if(a){var b=L[a];b?(T.deleteProgram(b),b.name=0,L[a]=null):Q(1281)}},X:function(a,b){for(var c=0;c<a;c++){var d=z[b+4*c>>2],e=M[d];e&&(T.deleteRenderbuffer(e),e.name=0,M[d]=null)}},z:function(a){if(a){var b=P[a];b?(T.deleteShader(b),P[a]=null):Q(1281)}},Va:function(a,b){for(var c=0;c<a;c++){var d=z[b+4*c>>2],e=O[d];e&&(T.deleteTexture(e),e.name=0,O[d]=null)}},Ta:function(a,b){for(var c=0;c<a;c++){var d=z[b+4*c>>2];T.deleteVertexArray(ub[d]);
ub[d]=null}},C:function(a){T.depthFunc(a)},B:function(a){T.depthMask(!!a)},f:function(a){T.disable(a)},U:function(a){T.disableVertexAttribArray(a)},ib:function(a,b,c){T.drawArrays(a,b,c)},jb:function(a,b,c,d){T.drawArraysInstanced(a,b,c,d)},p:function(a,b){for(var c=Fb[a],d=0;d<a;d++)c[d]=z[b+4*d>>2];T.drawBuffers(c)},kb:function(a,b,c,d){T.drawElements(a,b,c,d)},lb:function(a,b,c,d,e){T.drawElementsInstanced(a,b,c,d,e)},i:function(a){T.enable(a)},vb:function(a){T.enableVertexAttribArray(a)},m:function(a,
b,c,d){T.framebufferRenderbuffer(a,b,c,M[d])},b:function(a,b,c,d,e){T.framebufferTexture2D(a,b,c,O[d],e)},j:function(a,b,c,d,e){T.framebufferTextureLayer(a,b,O[c],d,e)},O:function(a){T.frontFace(a)},Oa:function(a,b){S(a,b,"createBuffer",sb)},r:function(a,b){S(a,b,"createFramebuffer",tb)},M:function(a,b){S(a,b,"createRenderbuffer",M)},Ka:function(a,b){S(a,b,"createTexture",O)},Sa:function(a,b){S(a,b,"createVertexArray",ub)},Gb:function(a,b){return T.getAttribLocation(L[a],u(b))},d:function(a,b){Gb(a,
b)},Ca:function(a,b,c,d){a=T.getProgramInfoLog(L[a]);null===a&&(a="(unknown error)");b=0<b&&d?y(a,w,d,b):0;c&&(z[c>>2]=b)},H:function(a,b,c){if(c)if(a>=rb)Q(1281);else if(a=L[a],35716==b)a=T.getProgramInfoLog(a),null===a&&(a="(unknown error)"),z[c>>2]=a.length+1;else if(35719==b){if(!a.mc)for(b=0;b<T.getProgramParameter(a,35718);++b)a.mc=Math.max(a.mc,T.getActiveUniform(a,b).name.length+1);z[c>>2]=a.mc}else if(35722==b){if(!a.kc)for(b=0;b<T.getProgramParameter(a,35721);++b)a.kc=Math.max(a.kc,T.getActiveAttrib(a,
b).name.length+1);z[c>>2]=a.kc}else if(35381==b){if(!a.lc)for(b=0;b<T.getProgramParameter(a,35382);++b)a.lc=Math.max(a.lc,T.getActiveUniformBlockName(a,b).length+1);z[c>>2]=a.lc}else z[c>>2]=T.getProgramParameter(a,b);else Q(1281)},Hb:function(a,b,c,d){a=T.getShaderInfoLog(P[a]);null===a&&(a="(unknown error)");b=0<b&&d?y(a,w,d,b):0;c&&(z[c>>2]=b)},xa:function(a,b,c){c?35716==b?(a=T.getShaderInfoLog(P[a]),null===a&&(a="(unknown error)"),z[c>>2]=a?a.length+1:0):35720==b?(a=T.getShaderSource(P[a]),z[c>>
2]=a?a.length+1:0):z[c>>2]=T.getShaderParameter(P[a],b):Q(1281)},Ya:function(a){var b=wb[a];if(!b){switch(a){case 7939:b=T.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=V(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=T.getParameter(a))||Q(1280);b=b&&V(b);break;case 7938:b=T.getParameter(7938);b=2<=R.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=V(b);break;case 35724:b=T.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);
null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=V(b);break;default:Q(1280)}wb[a]=b}return b},Xa:function(a,b){if(2>R.version)return Q(1282),0;var c=xb[a];if(c)return 0>b||b>=c.length?(Q(1281),0):c[b];switch(a){case 7939:return c=T.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return V(d)}),c=xb[a]=c,0>b||b>=c.length?(Q(1281),0):c[b];default:return Q(1280),0}},s:function(a,b){b=u(b);if(a=L[a]){var c=a,d=c.ic,e=c.Ec,k;
if(!d)for(c.ic=d={},c.Dc={},k=0;k<T.getProgramParameter(c,35718);++k){var f=T.getActiveUniform(c,k);var m=f.name;f=f.size;var n=Hb(m);n=0<n?m.slice(0,n):m;var p=c.oc;c.oc+=f;e[n]=[f,p];for(m=0;m<f;++m)d[p]=m,c.Dc[p++]=n}c=a.ic;d=0;e=b;k=Hb(b);0<k&&(d=parseInt(b.slice(k+1))>>>0,e=b.slice(0,k));if((e=a.Ec[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||T.getUniformLocation(a,b)))return d}else Q(1281);return-1},Da:function(a){a=L[a];T.linkProgram(a);a.ic=0;a.Ec={}},Ra:function(a,b){3317==a&&(yb=b);T.pixelStorei(a,
b)},P:function(a,b){T.polygonOffset(a,b)},y:function(a){T.readBuffer(a)},La:function(a,b,c,d){T.renderbufferStorage(a,b,c,d)},K:function(a,b,c,d,e){T.renderbufferStorageMultisample(a,b,c,d,e)},va:function(a,b,c,d){T.scissor(a,b,c,d)},Aa:function(a,b,c,d){for(var e="",k=0;k<b;++k){var f=d?z[d+4*k>>2]:-1;e+=u(z[c+4*k>>2],0>f?void 0:f)}T.shaderSource(P[a],e)},Qa:function(a,b,c){T.stencilFunc(a,b,c)},ta:function(a,b,c,d){T.stencilFuncSeparate(a,b,c,d)},A:function(a){T.stencilMask(a)},Pa:function(a,b,
c){T.stencilOp(a,b,c)},sa:function(a,b,c,d){T.stencilOpSeparate(a,b,c,d)},Ia:function(a,b,c,d,e,k,f,m,n){if(2<=R.version)if(T.ec)T.texImage2D(a,b,c,d,e,k,f,m,n);else if(n){var p=Ib(m);T.texImage2D(a,b,c,d,e,k,f,m,p,n>>31-Math.clz32(p.BYTES_PER_ELEMENT))}else T.texImage2D(a,b,c,d,e,k,f,m,null);else{p=T;var x=p.texImage2D;if(n){var v=Ib(m),N=31-Math.clz32(v.BYTES_PER_ELEMENT),U=yb;n=v.subarray(n>>N,n+e*(d*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[f-6402]||1)*(1<<N)+U-1&-U)>>N)}else n=
null;x.call(p,a,b,c,d,e,k,f,m,n)}},Ga:function(a,b,c,d,e,k,f,m,n,p){if(T.ec)T.texImage3D(a,b,c,d,e,k,f,m,n,p);else if(p){var x=Ib(n);T.texImage3D(a,b,c,d,e,k,f,m,n,x,p>>31-Math.clz32(x.BYTES_PER_ELEMENT))}else T.texImage3D(a,b,c,d,e,k,f,m,n,null)},J:function(a,b,c){T.texParameterf(a,b,c)},h:function(a,b,c){T.texParameteri(a,b,c)},ub:function(a,b,c){if(2<=R.version)b&&T.uniform1fv(W(a),A,c>>2,b);else{if(288>=b)for(var d=X[b-1],e=0;e<b;++e)d[e]=A[c+4*e>>2];else d=A.subarray(c>>2,c+4*b>>2);T.uniform1fv(W(a),
d)}},G:function(a,b){T.uniform1i(W(a),b)},qb:function(a,b,c){if(2<=R.version)b&&T.uniform1iv(W(a),z,c>>2,b);else{if(288>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=z[c+4*e>>2];else d=z.subarray(c>>2,c+4*b>>2);T.uniform1iv(W(a),d)}},tb:function(a,b,c){if(2<=R.version)b&&T.uniform2fv(W(a),A,c>>2,2*b);else{if(144>=b)for(var d=X[2*b-1],e=0;e<2*b;e+=2)d[e]=A[c+4*e>>2],d[e+1]=A[c+(4*e+4)>>2];else d=A.subarray(c>>2,c+8*b>>2);T.uniform2fv(W(a),d)}},pb:function(a,b,c){if(2<=R.version)b&&T.uniform2iv(W(a),z,c>>2,
2*b);else{if(144>=b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=z[c+4*e>>2],d[e+1]=z[c+(4*e+4)>>2];else d=z.subarray(c>>2,c+8*b>>2);T.uniform2iv(W(a),d)}},sb:function(a,b,c){if(2<=R.version)b&&T.uniform3fv(W(a),A,c>>2,3*b);else{if(96>=b)for(var d=X[3*b-1],e=0;e<3*b;e+=3)d[e]=A[c+4*e>>2],d[e+1]=A[c+(4*e+4)>>2],d[e+2]=A[c+(4*e+8)>>2];else d=A.subarray(c>>2,c+12*b>>2);T.uniform3fv(W(a),d)}},ob:function(a,b,c){if(2<=R.version)b&&T.uniform3iv(W(a),z,c>>2,3*b);else{if(96>=b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=
z[c+4*e>>2],d[e+1]=z[c+(4*e+4)>>2],d[e+2]=z[c+(4*e+8)>>2];else d=z.subarray(c>>2,c+12*b>>2);T.uniform3iv(W(a),d)}},rb:function(a,b,c){if(2<=R.version)b&&T.uniform4fv(W(a),A,c>>2,4*b);else{if(72>=b){var d=X[4*b-1],e=A;c>>=2;for(var k=0;k<4*b;k+=4){var f=c+k;d[k]=e[f];d[k+1]=e[f+1];d[k+2]=e[f+2];d[k+3]=e[f+3]}}else d=A.subarray(c>>2,c+16*b>>2);T.uniform4fv(W(a),d)}},nb:function(a,b,c){if(2<=R.version)b&&T.uniform4iv(W(a),z,c>>2,4*b);else{if(72>=b)for(var d=Y[4*b-1],e=0;e<4*b;e+=4)d[e]=z[c+4*e>>2],d[e+
1]=z[c+(4*e+4)>>2],d[e+2]=z[c+(4*e+8)>>2],d[e+3]=z[c+(4*e+12)>>2];else d=z.subarray(c>>2,c+16*b>>2);T.uniform4iv(W(a),d)}},mb:function(a,b,c,d){if(2<=R.version)b&&T.uniformMatrix4fv(W(a),!!c,A,d>>2,16*b);else{if(18>=b){var e=X[16*b-1],k=A;d>>=2;for(var f=0;f<16*b;f+=16){var m=d+f;e[f]=k[m];e[f+1]=k[m+1];e[f+2]=k[m+2];e[f+3]=k[m+3];e[f+4]=k[m+4];e[f+5]=k[m+5];e[f+6]=k[m+6];e[f+7]=k[m+7];e[f+8]=k[m+8];e[f+9]=k[m+9];e[f+10]=k[m+10];e[f+11]=k[m+11];e[f+12]=k[m+12];e[f+13]=k[m+13];e[f+14]=k[m+14];e[f+
15]=k[m+15]}}else e=A.subarray(d>>2,d+64*b>>2);T.uniformMatrix4fv(W(a),!!c,e)}},o:function(a){a=L[a];T.useProgram(a);T.Fc=a},wb:function(a,b){T.vertexAttribDivisor(a,b)},xb:function(a,b,c,d,e,k){T.vertexAttribPointer(a,b,c,!!d,e,k)},wa:function(a,b,c,d){T.viewport(a,b,c,d)},eb:function(){g.xc=a=>{0!=Ob()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",g.xc)},db:function(){g.Cc=a=>{const b=a.clipboardData.getData("text");Ia(()=>{const c=Kb(b);Pb(c)})};window.addEventListener("paste",
g.Cc)},cb:function(a){g.Tc=[];a=u(a);a=document.getElementById(a);g.yc=b=>{b.stopPropagation();b.preventDefault()};g.zc=b=>{b.stopPropagation();b.preventDefault()};g.Ac=b=>{b.stopPropagation();b.preventDefault()};g.Bc=b=>{b.stopPropagation();b.preventDefault();const c=b.dataTransfer.files;g.Uc=c;Qb(c.length);for(let d=0;d<c.length;d++)Ia(()=>{const e=Kb(c[d].name);Rb(d,e)});Sb(b.clientX,b.clientY)};a.addEventListener("dragenter",g.yc,!1);a.addEventListener("dragleave",g.zc,!1);a.addEventListener("dragover",
g.Ac,!1);a.addEventListener("drop",g.Bc,!1)},_a:function(){const a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},w:function(){const a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Tb()});document.body.append(a)},v:function(){document.getElementById("_sokol_app_input_element").focus()},fb:function(a){a=u(a);g.hc=document.getElementById(a);g.hc||console.log("sokol_app.h: invalid target:"+
a);g.hc.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},bb:function(){window.removeEventListener("beforeunload",g.xc)},ab:function(){window.removeEventListener("paste",g.Cc)},$a:function(a){a=u(a);a=document.getElementById(a);a.removeEventListener("dragenter",g.yc);a.removeEventListener("dragleave",g.zc);a.removeEventListener("dragover",g.Ac);a.removeEventListener("drop",g.Bc)},E:function(){g.hc&&g.hc.requestPointerLock&&g.hc.requestPointerLock()},Za:function(a,
b,c){const d=document.createElement("canvas");d.width=a;d.height=b;const e=d.getContext("2d"),k=e.createImageData(a,b);k.data.set(w.subarray(c,c+a*b*4));e.putImageData(k,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},u:function(){document.getElementById("_sokol_app_input_element").blur()},F:function(a,b,c,d,e,k){b=u(b);const f=new XMLHttpRequest;f.open("GET",b);f.responseType="arraybuffer";const m=0<d;m&&f.setRequestHeader("Range",
"bytes="+c+"-"+(c+d-1));f.onreadystatechange=function(){if(f.readyState==XMLHttpRequest.DONE)if(206==f.status||200==f.status&&!m){const n=new Uint8Array(f.response),p=n.length;p<=k?(w.set(n,e),Ub(a,d,p)):Vb(a)}else Wb(a,f.status)};f.send()},qa:function(a,b){b=u(b);const c=new XMLHttpRequest;c.open("HEAD",b);c.onreadystatechange=function(){if(c.readyState==XMLHttpRequest.DONE)if(200==c.status){const d=c.getResponseHeader("Content-Length");Xb(a,d)}else Wb(a,c.status)};c.send()},ja:function(a,b){b=u(b);
switch(a){case 0:console.error(b);break;case 1:console.error(b);break;case 2:console.warn(b);break;default:console.info(b)}}};
(function(){function a(e){g.asm=e.exports;ma=g.asm.Ib;ua();va=g.asm.Yb;xa.unshift(g.asm.Jb);C--;g.monitorRunDependencies&&g.monitorRunDependencies(C);0==C&&(null!==Ca&&(clearInterval(Ca),Ca=null),D&&(e=D,D=null,e()))}function b(e){a(e.instance)}function c(e){return Ga().then(function(k){return WebAssembly.instantiate(k,d)}).then(function(k){return k}).then(e,function(k){r("failed to asynchronously prepare wasm: "+k);la(k)})}var d={a:Yb};C++;g.monitorRunDependencies&&g.monitorRunDependencies(C);if(g.instantiateWasm)try{return g.instantiateWasm(d,
a)}catch(e){return r("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return t||"function"!=typeof WebAssembly.instantiateStreaming||Da()||E.startsWith("file://")||ea||"function"!=typeof fetch?c(b):fetch(E,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(k){r("wasm streaming compile failed: "+k);r("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
function J(){return(J=g.asm.Kb).apply(null,arguments)}
var Tb=g.__sapp_emsc_notify_keyboard_hidden=function(){return(Tb=g.__sapp_emsc_notify_keyboard_hidden=g.asm.Lb).apply(null,arguments)},Pb=g.__sapp_emsc_onpaste=function(){return(Pb=g.__sapp_emsc_onpaste=g.asm.Mb).apply(null,arguments)},Ob=g.__sapp_html5_get_ask_leave_site=function(){return(Ob=g.__sapp_html5_get_ask_leave_site=g.asm.Nb).apply(null,arguments)},Qb=g.__sapp_emsc_begin_drop=function(){return(Qb=g.__sapp_emsc_begin_drop=g.asm.Ob).apply(null,arguments)},Rb=g.__sapp_emsc_drop=function(){return(Rb=
g.__sapp_emsc_drop=g.asm.Pb).apply(null,arguments)},Sb=g.__sapp_emsc_end_drop=function(){return(Sb=g.__sapp_emsc_end_drop=g.asm.Qb).apply(null,arguments)};g.__sapp_emsc_invoke_fetch_cb=function(){return(g.__sapp_emsc_invoke_fetch_cb=g.asm.Rb).apply(null,arguments)};var Zb=g._main=function(){return(Zb=g._main=g.asm.Sb).apply(null,arguments)};g.__saudio_emsc_pull=function(){return(g.__saudio_emsc_pull=g.asm.Tb).apply(null,arguments)};
var Xb=g.__sfetch_emsc_head_response=function(){return(Xb=g.__sfetch_emsc_head_response=g.asm.Ub).apply(null,arguments)},Ub=g.__sfetch_emsc_get_response=function(){return(Ub=g.__sfetch_emsc_get_response=g.asm.Vb).apply(null,arguments)},Wb=g.__sfetch_emsc_failed_http_status=function(){return(Wb=g.__sfetch_emsc_failed_http_status=g.asm.Wb).apply(null,arguments)},Vb=g.__sfetch_emsc_failed_buffer_too_small=function(){return(Vb=g.__sfetch_emsc_failed_buffer_too_small=g.asm.Xb).apply(null,arguments)};
function Ja(){return(Ja=g.asm.Zb).apply(null,arguments)}function Ka(){return(Ka=g.asm._b).apply(null,arguments)}function Lb(){return(Lb=g.asm.$b).apply(null,arguments)}g.___start_em_js=17752;g.___stop_em_js=27271;var $b;D=function ac(){$b||bc();$b||(D=ac)};function cc(a=[]){var b=Zb;a.unshift(ca);var c=a.length,d=Lb(4*(c+1)),e=d>>2;a.forEach(f=>{z[e++]=Kb(f)});z[e]=0;try{var k=b(c,d);Jb(k)}catch(f){f instanceof ka||"unwind"==f||h(1,f)}}
function bc(){var a=ba;function b(){if(!$b&&($b=!0,g.calledRun=!0,!na)){Ha(xa);Ha(ya);if(g.onRuntimeInitialized)g.onRuntimeInitialized();dc&&cc(a);if(g.postRun)for("function"==typeof g.postRun&&(g.postRun=[g.postRun]);g.postRun.length;){var c=g.postRun.shift();Aa.unshift(c)}Ha(Aa)}}if(!(0<C)){if(g.preRun)for("function"==typeof g.preRun&&(g.preRun=[g.preRun]);g.preRun.length;)Ba();Ha(wa);0<C||(g.setStatus?(g.setStatus("Running..."),setTimeout(function(){setTimeout(function(){g.setStatus("")},1);b()},
1)):b())}}if(g.preInit)for("function"==typeof g.preInit&&(g.preInit=[g.preInit]);0<g.preInit.length;)g.preInit.pop()();var dc=!0;g.noInitialRun&&(dc=!1);bc();
