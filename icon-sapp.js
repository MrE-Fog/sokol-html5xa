
var e;e||(e=typeof Module !== 'undefined' ? Module : {});var h={},l;for(l in e)e.hasOwnProperty(l)&&(h[l]=e[l]);var aa=[],ba="./this.program";function r(a,b){throw b;}var ca="object"===typeof window,t="function"===typeof importScripts,u="",da,v,w,x,y;
if("object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)u=t?require("path").dirname(u)+"/":__dirname+"/",da=function(a,b){x||(x=require("fs"));y||(y=require("path"));a=y.normalize(a);return x.readFileSync(a,b?null:"utf8")},w=function(a){a=da(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||A("Assertion failed: undefined");return a},v=function(a,b,c){x||(x=require("fs"));y||(y=require("path"));a=y.normalize(a);x.readFile(a,function(d,f){d?c(d):b(f.buffer)})},
1<process.argv.length&&(ba=process.argv[1].replace(/\\/g,"/")),aa=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=e),process.on("uncaughtException",function(a){if(!(a instanceof ea))throw a;}),process.on("unhandledRejection",A),r=function(a,b){if(noExitRuntime||0<fa)throw process.exitCode=a,b;process.exit(a)},e.inspect=function(){return"[Emscripten Module object]"};else if(ca||t)t?u=self.location.href:"undefined"!==typeof document&&document.currentScript&&(u=document.currentScript.src),
u=0!==u.indexOf("blob:")?u.substr(0,u.lastIndexOf("/")+1):"",da=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},t&&(w=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),v=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};e.print||console.log.bind(console);
var B=e.printErr||console.warn.bind(console);for(l in h)h.hasOwnProperty(l)&&(e[l]=h[l]);h=null;e.arguments&&(aa=e.arguments);e.thisProgram&&(ba=e.thisProgram);e.quit&&(r=e.quit);var C;e.wasmBinary&&(C=e.wasmBinary);var noExitRuntime=e.noExitRuntime||!0;"object"!==typeof WebAssembly&&A("no native wasm support detected");var ha,ia=!1;function ja(a){var b=e["_"+a];b||A("Assertion failed: Cannot call unknown function "+(a+", make sure it is exported"));return b}
function ka(a,b,c){var d={string:function(m){var p=0;if(null!==m&&void 0!==m&&0!==m){var q=(m.length<<2)+1;p=D(q);E(m,F,p,q)}return p},array:function(m){var p=D(m.length);la.set(m,p);return p}};a=ja(a);var f=[],k=0;if(c)for(var g=0;g<c.length;g++){var n=d[b[g]];n?(0===k&&(k=ma()),f[g]=n(c[g])):f[g]=c[g]}b=a.apply(null,f);b=function(m){0!==k&&na(k);return m}(b)}var oa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function G(a,b){if(a){var c=F,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&oa)a=oa.decode(c.subarray(a,b));else{for(d="";a<b;){var f=c[a++];if(f&128){var k=c[a++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|k);else{var g=c[a++]&63;f=224==(f&240)?(f&15)<<12|k<<6|g:(f&7)<<18|k<<12|g<<6|c[a++]&63;65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else d+=String.fromCharCode(f)}a=d}}else a="";return a}
function E(a,b,c,d){if(!(0<d))return 0;var f=c;d=c+d-1;for(var k=0;k<a.length;++k){var g=a.charCodeAt(k);if(55296<=g&&57343>=g){var n=a.charCodeAt(++k);g=65536+((g&1023)<<10)|n&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-f}
function pa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function qa(a){var b=pa(a)+1,c=D(b);E(a,la,c,b);return c}var ra,la,F,sa,ta,H,ua,va,I;
function wa(){var a=ha.buffer;ra=a;e.HEAP8=la=new Int8Array(a);e.HEAP16=sa=new Int16Array(a);e.HEAP32=H=new Int32Array(a);e.HEAPU8=F=new Uint8Array(a);e.HEAPU16=ta=new Uint16Array(a);e.HEAPU32=ua=new Uint32Array(a);e.HEAPF32=va=new Float32Array(a);e.HEAPF64=I=new Float64Array(a)}var J,xa=[],ya=[],za=[],Aa=[],Ba=[],fa=0;function Ca(){var a=e.preRun.shift();xa.unshift(a)}var K=0,Da=null,L=null;e.preloadedImages={};e.preloadedAudios={};
function A(a){if(e.onAbort)e.onAbort(a);B(a);ia=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}function Ea(){return M.startsWith("data:application/octet-stream;base64,")}var M;M="icon-sapp.wasm";if(!Ea()){var Fa=M;M=e.locateFile?e.locateFile(Fa,u):u+Fa}function Ga(){var a=M;try{if(a==M&&C)return new Uint8Array(C);if(w)return w(a);throw"both async and sync fetching of the wasm failed";}catch(b){A(b)}}
function Ha(){if(!C&&(ca||t)){if("function"===typeof fetch&&!M.startsWith("file://"))return fetch(M,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+M+"'";return a.arrayBuffer()}).catch(function(){return Ga()});if(v)return new Promise(function(a,b){v(M,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ga()})}
function Ia(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(e);else{var c=b.rc;"number"===typeof c?void 0===b.Pb?J.get(c)():J.get(c)(b.Pb):c(void 0===b.Pb?null:b.Pb)}}}var Ja=0;function Ka(){for(var a=N.length-1;0<=a;--a)La(a);N=[];Ma=[]}var Ma=[];function Na(){if(Ja&&Oa.Kb)for(var a=0;a<Ma.length;++a){var b=Ma[a];Ma.splice(a,1);--a;b.Ac.apply(null,b.oc)}}var N=[];function La(a){var b=N[a];b.target.removeEventListener(b.Db,b.ic,b.Eb);N.splice(a,1)}
function P(a){function b(d){++Ja;Oa=a;Na();a.Gb(d);Na();--Ja}if(a.Fb)a.ic=b,a.target.addEventListener(a.Db,b,a.Eb),N.push(a),Pa||(Aa.push(Ka),Pa=!0);else for(var c=0;c<N.length;++c)N[c].target==a.target&&N[c].Db==a.Db&&La(c--)}function Qa(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}var Pa,Oa,Ra,Sa,Ta,Ua,Va,Wa,Xa,Ya=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];
function Q(a){a=2<a?G(a):a;return Ya[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}function Za(a){return 0>Ya.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}function $a(a,b,c,d,f,k){Ra||(Ra=R(256));a={target:Q(a),Db:k,Fb:d,Gb:function(g){g=g||event;var n=g.target.id?g.target.id:"",m=Ra;E(Qa(g.target),F,m+0,128);E(n,F,m+128,128);J.get(d)(f,m,b)&&g.preventDefault()},Eb:c};P(a)}
function ab(a,b,c,d,f,k){Sa||(Sa=R(176));a={target:Q(a),Kb:!0,Db:k,Fb:d,Gb:function(g){var n=Sa;I[n>>3]=g.timeStamp;var m=n>>2;H[m+2]=g.location;H[m+3]=g.ctrlKey;H[m+4]=g.shiftKey;H[m+5]=g.altKey;H[m+6]=g.metaKey;H[m+7]=g.repeat;H[m+8]=g.charCode;H[m+9]=g.keyCode;H[m+10]=g.which;E(g.key||"",F,n+44,32);E(g.code||"",F,n+76,32);E(g.char||"",F,n+108,32);E(g.locale||"",F,n+140,32);J.get(d)(f,n,b)&&g.preventDefault()},Eb:c};P(a)}
function bb(a,b,c){I[a>>3]=b.timeStamp;a>>=2;H[a+2]=b.screenX;H[a+3]=b.screenY;H[a+4]=b.clientX;H[a+5]=b.clientY;H[a+6]=b.ctrlKey;H[a+7]=b.shiftKey;H[a+8]=b.altKey;H[a+9]=b.metaKey;sa[2*a+20]=b.button;sa[2*a+21]=b.buttons;H[a+11]=b.movementX;H[a+12]=b.movementY;c=Za(c);H[a+13]=b.clientX-c.left;H[a+14]=b.clientY-c.top}
function S(a,b,c,d,f,k){Ta||(Ta=R(72));a=Q(a);P({target:a,Kb:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,Db:k,Fb:d,Gb:function(g){g=g||event;bb(Ta,g,a);J.get(d)(f,Ta,b)&&g.preventDefault()},Eb:c})}function cb(a,b,c,d,f){Ua||(Ua=R(260));P({target:a,Db:f,Fb:d,Gb:function(k){k=k||event;var g=Ua,n=document.pointerLockElement||document.Rb||document.Tb||document.Sb;H[g>>2]=!!n;var m=n&&n.id?n.id:"";E(Qa(n),F,g+4,128);E(m,F,g+132,128);J.get(d)(20,g,b)&&k.preventDefault()},Eb:c})}
function db(a,b,c,d,f){P({target:a,Db:f,Fb:d,Gb:function(k){k=k||event;J.get(d)(38,0,b)&&k.preventDefault()},Eb:c})}
function eb(a,b,c,d){Va||(Va=R(36));a=Q(a);P({target:a,Db:"resize",Fb:d,Gb:function(f){f=f||event;if(f.target==a){var k=document.body;if(k){var g=Va;H[g>>2]=f.detail;H[g+4>>2]=k.clientWidth;H[g+8>>2]=k.clientHeight;H[g+12>>2]=innerWidth;H[g+16>>2]=innerHeight;H[g+20>>2]=outerWidth;H[g+24>>2]=outerHeight;H[g+28>>2]=pageXOffset;H[g+32>>2]=pageYOffset;J.get(d)(10,g,b)&&f.preventDefault()}}},Eb:c})}
function fb(a,b,c,d,f,k){Wa||(Wa=R(1696));a=Q(a);P({target:a,Kb:"touchstart"==k||"touchend"==k,Db:k,Fb:d,Gb:function(g){for(var n={},m=g.touches,p=0;p<m.length;++p){var q=m[p];n[q.identifier]=q}m=g.changedTouches;for(p=0;p<m.length;++p)q=m[p],q.lc=1,n[q.identifier]=q;m=g.targetTouches;for(p=0;p<m.length;++p)n[m[p].identifier].mc=1;m=Wa;I[m>>3]=g.timeStamp;q=m>>2;H[q+3]=g.ctrlKey;H[q+4]=g.shiftKey;H[q+5]=g.altKey;H[q+6]=g.metaKey;q+=7;var V=Za(a),O=0;for(p in n){var z=n[p];H[q]=z.identifier;H[q+1]=
z.screenX;H[q+2]=z.screenY;H[q+3]=z.clientX;H[q+4]=z.clientY;H[q+5]=z.pageX;H[q+6]=z.pageY;H[q+7]=z.lc;H[q+8]=z.mc;H[q+9]=z.clientX-V.left;H[q+10]=z.clientY-V.top;q+=13;if(31<++O)break}H[m+8>>2]=O;J.get(d)(f,m,b)&&g.preventDefault()},Eb:c})}function gb(a,b,c,d,f,k){a={target:Q(a),Db:k,Fb:d,Gb:function(g){g=g||event;J.get(d)(f,0,b)&&g.preventDefault()},Eb:c};P(a)}
function hb(a,b,c,d){Xa||(Xa=R(104));P({target:a,Kb:!0,Db:"wheel",Fb:d,Gb:function(f){f=f||event;var k=Xa;bb(k,f,a);I[k+72>>3]=f.deltaX;I[k+80>>3]=f.deltaY;I[k+88>>3]=f.deltaZ;H[k+96>>2]=f.deltaMode;J.get(d)(9,k,b)&&f.preventDefault()},Eb:c})}
function ib(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,f,k){b.drawArraysInstancedANGLE(c,d,f,k)},a.drawElementsInstanced=function(c,d,f,k,g){b.drawElementsInstancedANGLE(c,d,f,k,g)})}
function jb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function kb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function lb(a){a.qc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function mb(a){a.tc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function nb(a){a.vc=a.getExtension("WEBGL_multi_draw")}var ob=1,pb=[],T=[],qb=[],rb=[],sb=[],U=[],tb=[],ub=[],vb={},wb={};function W(a){xb||(xb=a)}function yb(a){for(var b=ob++,c=a.length;c<b;c++)a[c]=null;return b}
function zb(a,b){a.Xb||(a.Xb=a.getContext,a.getContext=function(d,f){f=a.Xb(d,f);return"webgl"==d==f instanceof WebGLRenderingContext?f:null});var c=1<b.Yb?a.getContext("webgl2",b):a.getContext("webgl",b);return c?Ab(c,b):0}function Ab(a,b){var c=yb(ub),d={sc:c,attributes:b,version:b.Yb,Ob:a};a.canvas&&(a.canvas.nc=d);ub[c]=d;("undefined"===typeof b.Wb||b.Wb)&&Bb(d);return c}
function Bb(a){a||(a=X);if(!a.kc){a.kc=!0;var b=a.Ob;ib(b);jb(b);kb(b);lb(b);mb(b);2<=a.version&&(b.Vb=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.Vb)b.Vb=b.getExtension("EXT_disjoint_timer_query");nb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var xb,X,Cb=["default","low-power","high-performance"];
function Db(a,b,c,d){for(var f=0;f<a;f++){var k=Y[c](),g=k&&yb(d);k?(k.name=g,d[g]=k):W(1282);H[b+4*f>>2]=g}}
function Eb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=Y.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>X.version){W(1282);return}c=2*(Y.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>X.version){W(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=Y.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":W(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:W(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)H[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(f){W(1280);B("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+f+")");return}}break;default:W(1280);B("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}H[b>>2]=c}else W(1281)}
function Z(a){var b=pa(a)+1,c=R(b);E(a,F,c,b);return c}function Fb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function Gb(a){a-=5120;return 0==a?la:1==a?F:2==a?sa:4==a?H:6==a?va:5==a||28922==a||28520==a||30779==a||30782==a?ua:ta}
var Y,Lb={Q:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},ja:function(a,b,c){a=Q(a);if(!a)return-4;a=Za(a);I[b>>3]=a.width;I[c>>3]=a.height;return 0},Ya:function(a,b,c){F.copyWithin(a,b,b+c)},Ka:function(a,b){function c(d){J.get(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},Za:function(a){var b=F.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(a,d);0<d%65536&&(d+=65536-d%65536);a:{try{ha.grow(Math.min(2147483648,
d)-ra.byteLength+65535>>>16);wa();var f=1;break a}catch(k){}f=void 0}if(f)return!0}return!1},R:function(a,b,c,d){$a(a,b,c,d,12,"blur");return 0},N:function(a,b,c){a=Q(a);if(!a)return-4;a.width=b;a.height=c;return 0},S:function(a,b,c,d){$a(a,b,c,d,13,"focus");return 0},$:function(a,b,c,d){ab(a,b,c,d,2,"keydown");return 0},Z:function(a,b,c,d){ab(a,b,c,d,1,"keypress");return 0},_:function(a,b,c,d){ab(a,b,c,d,3,"keyup");return 0},ia:function(a,b,c,d){S(a,b,c,d,5,"mousedown");return 0},ca:function(a,b,
c,d){S(a,b,c,d,33,"mouseenter");return 0},ba:function(a,b,c,d){S(a,b,c,d,34,"mouseleave");return 0},da:function(a,b,c,d){S(a,b,c,d,8,"mousemove");return 0},ea:function(a,b,c,d){S(a,b,c,d,6,"mouseup");return 0},U:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.Rb||document.body.Tb||document.body.Sb))return-1;a=Q(a);if(!a)return-4;cb(a,b,c,d,"pointerlockchange");cb(a,b,c,d,"mozpointerlockchange");cb(a,b,c,d,"webkitpointerlockchange");cb(a,b,c,d,"mspointerlockchange");
return 0},T:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.Rb||document.body.Tb||document.body.Sb))return-1;a=Q(a);if(!a)return-4;db(a,b,c,d,"pointerlockerror");db(a,b,c,d,"mozpointerlockerror");db(a,b,c,d,"webkitpointerlockerror");db(a,b,c,d,"mspointerlockerror");return 0},Xa:function(a,b,c,d){eb(a,b,c,d);return 0},V:function(a,b,c,d){fb(a,b,c,d,25,"touchcancel");return 0},W:function(a,b,c,d){fb(a,b,c,d,23,"touchend");return 0},X:function(a,b,c,d){fb(a,b,c,d,24,
"touchmove");return 0},Y:function(a,b,c,d){fb(a,b,c,d,22,"touchstart");return 0},P:function(a,b,c,d){gb(a,b,c,d,31,"webglcontextlost");return 0},O:function(a,b,c,d){gb(a,b,c,d,32,"webglcontextrestored");return 0},aa:function(a,b,c,d){a=Q(a);return"undefined"!==typeof a.onwheel?(hb(a,b,c,d),0):-1},E:function(a,b){b>>=2;b={alpha:!!H[b],depth:!!H[b+1],stencil:!!H[b+2],antialias:!!H[b+3],premultipliedAlpha:!!H[b+4],preserveDrawingBuffer:!!H[b+5],powerPreference:Cb[H[b+6]],failIfMajorPerformanceCaveat:!!H[b+
7],Yb:H[b+8],uc:H[b+9],Wb:H[b+10],jc:H[b+11],wc:H[b+12],xc:H[b+13]};a=Q(a);return!a||b.jc?0:zb(a,b)},qa:function(a,b){a=ub[a];b=G(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&ib(Y);"OES_vertex_array_object"==b&&jb(Y);"WEBGL_draw_buffers"==b&&kb(Y);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&lb(Y);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&mb(Y);"WEBGL_multi_draw"==b&&nb(Y);return!!a.Ob.getExtension(b)},Ha:function(a){a>>=2;for(var b=0;14>b;++b)H[a+
b]=0;H[a]=H[a+1]=H[a+3]=H[a+4]=H[a+8]=H[a+10]=1},xa:function(a){X=ub[a];e.pc=Y=X&&X.Ob;return!a||Y?0:-5},b:function(a){Y.activeTexture(a)},A:function(a,b){Y.attachShader(T[a],U[b])},c:function(a,b){35051==a?Y.Ub=b:35052==a&&(Y.Hb=b);Y.bindBuffer(a,pb[b])},h:function(a,b){Y.bindFramebuffer(a,qb[b])},Ba:function(a,b){Y.bindRenderbuffer(a,rb[b])},a:function(a,b){Y.bindTexture(a,sb[b])},L:function(a){Y.bindVertexArray(tb[a])},H:function(a,b,c,d){Y.blendColor(a,b,c,d)},I:function(a,b){Y.blendEquationSeparate(a,
b)},J:function(a,b,c,d){Y.blendFuncSeparate(a,b,c,d)},p:function(a,b,c,d,f,k,g,n,m,p){Y.blitFramebuffer(a,b,c,d,f,k,g,n,m,p)},Da:function(a,b,c,d){2<=X.version?c?Y.bufferData(a,F,d,c,b):Y.bufferData(a,b,d):Y.bufferData(a,c?F.subarray(c,c+b):b,d)},C:function(a,b,c,d){2<=X.version?Y.bufferSubData(a,b,F,d,c):Y.bufferSubData(a,b,F.subarray(d,d+c))},db:function(a){Y.clear(a)},ha:function(a,b,c,d){Y.clearColor(a,b,c,d)},fb:function(a){Y.clearDepth(a)},eb:function(a){Y.clearStencil(a)},j:function(a,b,c,
d){Y.colorMask(!!a,!!b,!!c,!!d)},ma:function(a){Y.compileShader(U[a])},wa:function(a,b,c,d,f,k,g,n){2<=X.version?Y.Hb?Y.compressedTexImage2D(a,b,c,d,f,k,g,n):Y.compressedTexImage2D(a,b,c,d,f,k,F,n,g):Y.compressedTexImage2D(a,b,c,d,f,k,n?F.subarray(n,n+g):null)},ua:function(a,b,c,d,f,k,g,n,m){Y.Hb?Y.compressedTexImage3D(a,b,c,d,f,k,g,n,m):Y.compressedTexImage3D(a,b,c,d,f,k,g,F,m,n)},sa:function(){var a=yb(T),b=Y.createProgram();b.name=a;b.Nb=b.Lb=b.Mb=0;b.Qb=1;T[a]=b;return a},oa:function(a){var b=
yb(U);U[b]=Y.createShader(a);return b},D:function(a){Y.cullFace(a)},Ma:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],f=pb[d];f&&(Y.deleteBuffer(f),f.name=0,pb[d]=null,d==Y.Ub&&(Y.Ub=0),d==Y.Hb&&(Y.Hb=0))}},i:function(a,b){for(var c=0;c<a;++c){var d=H[b+4*c>>2],f=qb[d];f&&(Y.deleteFramebuffer(f),f.name=0,qb[d]=null)}},v:function(a){if(a){var b=T[a];b?(Y.deleteProgram(b),b.name=0,T[a]=null):W(1281)}},M:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],f=rb[d];f&&(Y.deleteRenderbuffer(f),f.name=
0,rb[d]=null)}},r:function(a){if(a){var b=U[a];b?(Y.deleteShader(b),U[a]=null):W(1281)}},La:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],f=sb[d];f&&(Y.deleteTexture(f),f.name=0,sb[d]=null)}},Ja:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2];Y.deleteVertexArray(tb[d]);tb[d]=null}},u:function(a){Y.depthFunc(a)},t:function(a){Y.depthMask(!!a)},e:function(a){Y.disable(a)},K:function(a){Y.disableVertexAttribArray(a)},_a:function(a,b,c){Y.drawArrays(a,b,c)},$a:function(a,b,c,d){Y.drawElements(a,
b,c,d)},g:function(a){Y.enable(a)},ab:function(a){Y.enableVertexAttribArray(a)},F:function(a){Y.frontFace(a)},Ea:function(a,b){Db(a,b,"createBuffer",pb)},Ca:function(a,b){Db(a,b,"createRenderbuffer",rb)},ya:function(a,b){Db(a,b,"createTexture",sb)},Ia:function(a,b){Db(a,b,"createVertexArray",tb)},ka:function(a,b){return Y.getAttribLocation(T[a],G(b))},d:function(a,b){Eb(a,b)},pa:function(a,b,c,d){a=Y.getProgramInfoLog(T[a]);null===a&&(a="(unknown error)");b=0<b&&d?E(a,F,d,b):0;c&&(H[c>>2]=b)},z:function(a,
b,c){if(c)if(a>=ob)W(1281);else if(a=T[a],35716==b)a=Y.getProgramInfoLog(a),null===a&&(a="(unknown error)"),H[c>>2]=a.length+1;else if(35719==b){if(!a.Nb)for(b=0;b<Y.getProgramParameter(a,35718);++b)a.Nb=Math.max(a.Nb,Y.getActiveUniform(a,b).name.length+1);H[c>>2]=a.Nb}else if(35722==b){if(!a.Lb)for(b=0;b<Y.getProgramParameter(a,35721);++b)a.Lb=Math.max(a.Lb,Y.getActiveAttrib(a,b).name.length+1);H[c>>2]=a.Lb}else if(35381==b){if(!a.Mb)for(b=0;b<Y.getProgramParameter(a,35382);++b)a.Mb=Math.max(a.Mb,
Y.getActiveUniformBlockName(a,b).length+1);H[c>>2]=a.Mb}else H[c>>2]=Y.getProgramParameter(a,b);else W(1281)},la:function(a,b,c,d){a=Y.getShaderInfoLog(U[a]);null===a&&(a="(unknown error)");b=0<b&&d?E(a,F,d,b):0;c&&(H[c>>2]=b)},x:function(a,b,c){c?35716==b?(a=Y.getShaderInfoLog(U[a]),null===a&&(a="(unknown error)"),H[c>>2]=a?a.length+1:0):35720==b?(a=Y.getShaderSource(U[a]),H[c>>2]=a?a.length+1:0):H[c>>2]=Y.getShaderParameter(U[a],b):W(1281)},Oa:function(a){var b=vb[a];if(!b){switch(a){case 7939:b=
Y.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Z(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Y.getParameter(a))||W(1280);b=b&&Z(b);break;case 7938:b=Y.getParameter(7938);b=2<=X.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Z(b);break;case 35724:b=Y.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Z(b);break;default:W(1280)}vb[a]=
b}return b},Na:function(a,b){if(2>X.version)return W(1282),0;var c=wb[a];if(c)return 0>b||b>=c.length?(W(1281),0):c[b];switch(a){case 7939:return c=Y.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return Z(d)}),c=wb[a]=c,0>b||b>=c.length?(W(1281),0):c[b];default:return W(1280),0}},l:function(a,b){b=G(b);if(a=T[a]){var c=a,d=c.Jb,f=c.fc,k;if(!d)for(c.Jb=d={},c.ec={},k=0;k<Y.getProgramParameter(c,35718);++k){var g=Y.getActiveUniform(c,k);var n=g.name;
g=g.size;var m=Fb(n);m=0<m?n.slice(0,m):n;var p=c.Qb;c.Qb+=g;f[m]=[g,p];for(n=0;n<g;++n)d[p]=n,c.ec[p++]=m}c=a.Jb;d=0;f=b;k=Fb(b);0<k&&(d=parseInt(b.slice(k+1))>>>0,f=b.slice(0,k));if((f=a.fc[f])&&d<f[0]&&(d+=f[1],c[d]=c[d]||Y.getUniformLocation(a,b)))return d}else W(1281);return-1},ra:function(a){a=T[a];Y.linkProgram(a);a.Jb=0;a.fc={}},G:function(a,b){Y.polygonOffset(a,b)},q:function(a){Y.readBuffer(a)},za:function(a,b,c,d){Y.renderbufferStorage(a,b,c,d)},Aa:function(a,b,c,d,f){Y.renderbufferStorageMultisample(a,
b,c,d,f)},gb:function(a,b,c,d){Y.scissor(a,b,c,d)},na:function(a,b,c,d){for(var f="",k=0;k<b;++k){var g=d?H[d+4*k>>2]:-1;f+=G(H[c+4*k>>2],0>g?void 0:g)}Y.shaderSource(U[a],f)},Ga:function(a,b,c){Y.stencilFunc(a,b,c)},ga:function(a,b,c,d){Y.stencilFuncSeparate(a,b,c,d)},s:function(a){Y.stencilMask(a)},Fa:function(a,b,c){Y.stencilOp(a,b,c)},fa:function(a,b,c,d){Y.stencilOpSeparate(a,b,c,d)},va:function(a,b,c,d,f,k,g,n,m){if(2<=X.version)if(Y.Hb)Y.texImage2D(a,b,c,d,f,k,g,n,m);else if(m){var p=Gb(n);
Y.texImage2D(a,b,c,d,f,k,g,n,p,m>>31-Math.clz32(p.BYTES_PER_ELEMENT))}else Y.texImage2D(a,b,c,d,f,k,g,n,null);else{p=Y;var q=p.texImage2D;if(m){var V=Gb(n),O=31-Math.clz32(V.BYTES_PER_ELEMENT);m=V.subarray(m>>O,m+f*(d*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[g-6402]||1)*(1<<O)+4-1&-4)>>O)}else m=null;q.call(p,a,b,c,d,f,k,g,n,m)}},ta:function(a,b,c,d,f,k,g,n,m,p){if(Y.Hb)Y.texImage3D(a,b,c,d,f,k,g,n,m,p);else if(p){var q=Gb(m);Y.texImage3D(a,b,c,d,f,k,g,n,m,q,p>>31-Math.clz32(q.BYTES_PER_ELEMENT))}else Y.texImage3D(a,
b,c,d,f,k,g,n,m,null)},B:function(a,b,c){Y.texParameterf(a,b,c)},f:function(a,b,c){Y.texParameteri(a,b,c)},y:function(a,b){var c=Y,d=c.uniform1i;var f=Y.hc;if(f){var k=f.Jb[a];"number"===typeof k&&(f.Jb[a]=k=Y.getUniformLocation(f,f.ec[a]+(0<k?"["+k+"]":"")));a=k}else W(1282),a=void 0;d.call(c,a,b)},k:function(a){a=T[a];Y.useProgram(a);Y.hc=a},bb:function(a,b){Y.vertexAttribDivisor(a,b)},cb:function(a,b,c,d,f,k){Y.vertexAttribPointer(a,b,c,!!d,f,k)},hb:function(a,b,c,d){Y.viewport(a,b,c,d)},Wa:function(){e.Zb=
function(a){0!=Hb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",e.Zb)},Va:function(){e.dc=function(a){a=a.clipboardData.getData("text");ka("_sapp_emsc_onpaste",["string"],[a])};window.addEventListener("paste",e.dc)},Ua:function(a){e.yc=[];a=G(a);a=document.getElementById(a);e.$b=function(b){b.stopPropagation();b.preventDefault()};e.ac=function(b){b.stopPropagation();b.preventDefault()};e.bc=function(b){b.stopPropagation();b.preventDefault()};e.cc=function(b){b.stopPropagation();
b.preventDefault();var c=b.dataTransfer.files;e.zc=c;Ib(c.length);var d;for(d=0;d<c.length;d++)ka("_sapp_emsc_drop",["number","string"],[d,c[d].name]);Jb(b.clientX,b.clientY)};a.addEventListener("dragenter",e.$b,!1);a.addEventListener("dragleave",e.ac,!1);a.addEventListener("dragover",e.bc,!1);a.addEventListener("drop",e.cc,!1)},Qa:function(){var a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},o:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";
a.autocapitalize="none";a.addEventListener("focusout",function(){Kb()});document.body.append(a)},n:function(){document.getElementById("_sokol_app_input_element").focus()},ib:function(a){a=G(a);e.Ib=document.getElementById(a);e.Ib||console.log("sokol_app.h: invalid target:"+a);e.Ib.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Ta:function(){window.removeEventListener("beforeunload",e.Zb)},Sa:function(){window.removeEventListener("paste",e.dc)},Ra:function(a){a=
G(a);a=document.getElementById(a);a.removeEventListener("dragenter",e.$b);a.removeEventListener("dragleave",e.ac);a.removeEventListener("dragover",e.bc);a.removeEventListener("drop",e.cc)},w:function(){e.Ib&&e.Ib.requestPointerLock&&e.Ib.requestPointerLock()},Pa:function(a,b,c){var d=document.createElement("canvas");d.width=a;d.height=b;var f=d.getContext("2d"),k=f.createImageData(a,b);k.data.set(F.subarray(c,c+a*b*4));f.putImageData(k,0,0);a=document.createElement("link");a.id="sokol-app-favicon";
a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},m:function(){document.getElementById("_sokol_app_input_element").blur()}};
(function(){function a(f){e.asm=f.exports;ha=e.asm.jb;wa();J=e.asm.Cb;ya.unshift(e.asm.kb);K--;e.monitorRunDependencies&&e.monitorRunDependencies(K);0==K&&(null!==Da&&(clearInterval(Da),Da=null),L&&(f=L,L=null,f()))}function b(f){a(f.instance)}function c(f){return Ha().then(function(k){return WebAssembly.instantiate(k,d)}).then(function(k){return k}).then(f,function(k){B("failed to asynchronously prepare wasm: "+k);A(k)})}var d={a:Lb};K++;e.monitorRunDependencies&&e.monitorRunDependencies(K);if(e.instantiateWasm)try{return e.instantiateWasm(d,
a)}catch(f){return B("Module.instantiateWasm callback failed with error: "+f),!1}(function(){return C||"function"!==typeof WebAssembly.instantiateStreaming||Ea()||M.startsWith("file://")||"function"!==typeof fetch?c(b):fetch(M,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,d).then(b,function(k){B("wasm streaming compile failed: "+k);B("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
e.___wasm_call_ctors=function(){return(e.___wasm_call_ctors=e.asm.kb).apply(null,arguments)};var R=e._malloc=function(){return(R=e._malloc=e.asm.lb).apply(null,arguments)},Kb=e.__sapp_emsc_notify_keyboard_hidden=function(){return(Kb=e.__sapp_emsc_notify_keyboard_hidden=e.asm.mb).apply(null,arguments)};e.__sapp_emsc_onpaste=function(){return(e.__sapp_emsc_onpaste=e.asm.nb).apply(null,arguments)};
var Hb=e.__sapp_html5_get_ask_leave_site=function(){return(Hb=e.__sapp_html5_get_ask_leave_site=e.asm.ob).apply(null,arguments)},Ib=e.__sapp_emsc_begin_drop=function(){return(Ib=e.__sapp_emsc_begin_drop=e.asm.pb).apply(null,arguments)};e.__sapp_emsc_drop=function(){return(e.__sapp_emsc_drop=e.asm.qb).apply(null,arguments)};var Jb=e.__sapp_emsc_end_drop=function(){return(Jb=e.__sapp_emsc_end_drop=e.asm.rb).apply(null,arguments)};
e.__sapp_emsc_invoke_fetch_cb=function(){return(e.__sapp_emsc_invoke_fetch_cb=e.asm.sb).apply(null,arguments)};e._main=function(){return(e._main=e.asm.tb).apply(null,arguments)};e.__saudio_emsc_pull=function(){return(e.__saudio_emsc_pull=e.asm.ub).apply(null,arguments)};e.__sfetch_emsc_head_response=function(){return(e.__sfetch_emsc_head_response=e.asm.vb).apply(null,arguments)};e.__sfetch_emsc_get_response=function(){return(e.__sfetch_emsc_get_response=e.asm.wb).apply(null,arguments)};
e.__sfetch_emsc_failed_http_status=function(){return(e.__sfetch_emsc_failed_http_status=e.asm.xb).apply(null,arguments)};e.__sfetch_emsc_failed_buffer_too_small=function(){return(e.__sfetch_emsc_failed_buffer_too_small=e.asm.yb).apply(null,arguments)};
var ma=e.stackSave=function(){return(ma=e.stackSave=e.asm.zb).apply(null,arguments)},na=e.stackRestore=function(){return(na=e.stackRestore=e.asm.Ab).apply(null,arguments)},D=e.stackAlloc=function(){return(D=e.stackAlloc=e.asm.Bb).apply(null,arguments)},Mb;function ea(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}L=function Nb(){Mb||Ob();Mb||(L=Nb)};
function Ob(a){function b(){if(!Mb&&(Mb=!0,e.calledRun=!0,!ia)){Ia(ya);Ia(za);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(Pb){var c=a,d=e._main;c=c||[];var f=c.length+1,k=D(4*(f+1));H[k>>2]=qa(ba);for(var g=1;g<f;g++)H[(k>>2)+g]=qa(c[g-1]);H[(k>>2)+f]=0;try{var n=d(f,k);if(!(noExitRuntime||0<fa)){if(e.onExit)e.onExit(n);ia=!0}r(n,new ea(n))}catch(m){c=m,c instanceof ea||"unwind"==c||(B("exception thrown: "+c),r(1,c))}finally{}}if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;)c=
e.postRun.shift(),Ba.unshift(c);Ia(Ba)}}a=a||aa;if(!(0<K)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Ca();Ia(xa);0<K||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);b()},1)):b())}}e.run=Ob;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();var Pb=!0;e.noInitialRun&&(Pb=!1);Ob();
