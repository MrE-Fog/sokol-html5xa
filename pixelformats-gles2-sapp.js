
var f;f||(f=typeof Module !== 'undefined' ? Module : {});var h={},l;for(l in f)f.hasOwnProperty(l)&&(h[l]=f[l]);var r=[],aa="./this.program";function t(a,b){throw b;}var ba=!1,u=!1,ca=!1,da=!1;ba="object"===typeof window;u="function"===typeof importScripts;ca="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;da=!ba&&!ca&&!u;var v="",ea,fa,x,ha,ia;
if(ca)v=u?require("path").dirname(v)+"/":__dirname+"/",ea=function(a,b){ha||(ha=require("fs"));ia||(ia=require("path"));a=ia.normalize(a);return ha.readFileSync(a,b?null:"utf8")},x=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/")),r=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=f),process.on("uncaughtException",function(a){if(!(a instanceof ja))throw a;}),process.on("unhandledRejection",
y),t=function(a){process.exit(a)},f.inspect=function(){return"[Emscripten Module object]"};else if(da)"undefined"!=typeof read&&(ea=function(a){return read(a)}),x=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?r=scriptArgs:"undefined"!=typeof arguments&&(r=arguments),"function"===typeof quit&&(t=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===typeof console&&
(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(ba||u)u?v=self.location.href:"undefined"!==typeof document&&document.currentScript&&(v=document.currentScript.src),v=0!==v.indexOf("blob:")?v.substr(0,v.lastIndexOf("/")+1):"",ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},u&&(x=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),
fa=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};var ka=f.print||console.log.bind(console),z=f.printErr||console.warn.bind(console);for(l in h)h.hasOwnProperty(l)&&(f[l]=h[l]);h=null;f.arguments&&(r=f.arguments);f.thisProgram&&(aa=f.thisProgram);f.quit&&(t=f.quit);var B;f.wasmBinary&&(B=f.wasmBinary);var noExitRuntime=f.noExitRuntime||!0;
"object"!==typeof WebAssembly&&y("no native wasm support detected");var la,ma=!1;function assert(a,b){a||y("Assertion failed: "+b)}function na(a){var b=f["_"+a];assert(b,"Cannot call unknown function "+a+", make sure it is exported");return b}
function oa(a,b,c){var d={string:function(n){var q=0;if(null!==n&&void 0!==n&&0!==n){var p=(n.length<<2)+1;q=C(p);D(n,E,q,p)}return q},array:function(n){var q=C(n.length);pa.set(n,q);return q}};a=na(a);var e=[],k=0;if(c)for(var g=0;g<c.length;g++){var m=d[b[g]];m?(0===k&&(k=qa()),e[g]=m(c[g])):e[g]=c[g]}a.apply(null,e);0!==k&&ra(k)}var sa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function ta(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&sa)return sa.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var k=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|k);else{var g=a[b++]&63;e=224==(e&240)?(e&15)<<12|k<<6|g:(e&7)<<18|k<<12|g<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function G(a,b){return a?ta(E,a,b):""}
function D(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var k=0;k<a.length;++k){var g=a.charCodeAt(k);if(55296<=g&&57343>=g){var m=a.charCodeAt(++k);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-e}
function ua(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function va(a){var b=ua(a)+1,c=C(b);D(a,pa,c,b);return c}var wa,pa,E,xa,ya,H,za,I,J;
function Aa(){var a=la.buffer;wa=a;f.HEAP8=pa=new Int8Array(a);f.HEAP16=xa=new Int16Array(a);f.HEAP32=H=new Int32Array(a);f.HEAPU8=E=new Uint8Array(a);f.HEAPU16=ya=new Uint16Array(a);f.HEAPU32=za=new Uint32Array(a);f.HEAPF32=I=new Float32Array(a);f.HEAPF64=J=new Float64Array(a)}var K,Ba=[],Ca=[],Da=[],Ea=[],Fa=[];function Ga(){var a=f.preRun.shift();Ba.unshift(a)}var L=0,Ha=null,Ia=null;f.preloadedImages={};f.preloadedAudios={};
function y(a){if(f.onAbort)f.onAbort(a);z(a);ma=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}function Ja(a){var b=M;return String.prototype.startsWith?b.startsWith(a):0===b.indexOf(a)}function Ka(){return Ja("data:application/octet-stream;base64,")}var M="pixelformats-gles2-sapp.wasm";if(!Ka()){var La=M;M=f.locateFile?f.locateFile(La,v):v+La}
function Ma(){var a=M;try{if(a==M&&B)return new Uint8Array(B);if(x)return x(a);throw"both async and sync fetching of the wasm failed";}catch(b){y(b)}}
function Na(){if(!B&&(ba||u)){if("function"===typeof fetch&&!Ja("file://"))return fetch(M,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+M+"'";return a.arrayBuffer()}).catch(function(){return Ma()});if(fa)return new Promise(function(a,b){fa(M,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ma()})}
function Oa(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(f);else{var c=b.Nc;"number"===typeof c?void 0===b.kc?K.get(c)():K.get(c)(b.kc):c(void 0===b.kc?null:b.kc)}}}var Pa=[null,[],[]],Qa={},Ra=0;function Sa(){for(var a=N.length-1;0<=a;--a)Ta(a);N=[];Ua=[]}var Ua=[];function Va(){if(Ra&&Wa.dc)for(var a=0;a<Ua.length;++a){var b=Ua[a];Ua.splice(a,1);--a;b.Xc.apply(null,b.Jc)}}var N=[];function Ta(a){var b=N[a];b.target.removeEventListener(b.Yb,b.Cc,b.Zb);N.splice(a,1)}
function O(a){function b(d){++Ra;Wa=a;Va();a.ac(d);Va();--Ra}if(a.$b)a.Cc=b,a.target.addEventListener(a.Yb,b,a.Zb),N.push(a),Xa||(Ea.push(Sa),Xa=!0);else for(var c=0;c<N.length;++c)N[c].target==a.target&&N[c].Yb==a.Yb&&Ta(c--)}var Xa,Wa,Ya,Za,$a,ab,bb,cb,db=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function P(a){a=2<a?G(a):a;return db[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}
function eb(a){return 0>db.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}function fb(a,b,c,d,e,k){Ya||(Ya=Q(164));a={target:P(a),dc:!0,Yb:k,$b:d,ac:function(g){var m=Ya,n=m>>2;H[n]=g.location;H[n+1]=g.ctrlKey;H[n+2]=g.shiftKey;H[n+3]=g.altKey;H[n+4]=g.metaKey;H[n+5]=g.repeat;H[n+6]=g.charCode;H[n+7]=g.keyCode;H[n+8]=g.which;D(g.key||"",E,m+36,32);D(g.code||"",E,m+68,32);D(g.char||"",E,m+100,32);D(g.locale||"",E,m+132,32);K.get(d)(e,m,b)&&g.preventDefault()},Zb:c};O(a)}
function gb(a,b,c){a>>=2;H[a]=b.screenX;H[a+1]=b.screenY;H[a+2]=b.clientX;H[a+3]=b.clientY;H[a+4]=b.ctrlKey;H[a+5]=b.shiftKey;H[a+6]=b.altKey;H[a+7]=b.metaKey;xa[2*a+16]=b.button;xa[2*a+17]=b.buttons;H[a+9]=b.movementX;H[a+10]=b.movementY;c=eb(c);H[a+11]=b.clientX-c.left;H[a+12]=b.clientY-c.top}function hb(a,b,c,d,e,k){Za||(Za=Q(64));a=P(a);O({target:a,dc:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,Yb:k,$b:d,ac:function(g){g=g||event;gb(Za,g,a);K.get(d)(e,Za,b)&&g.preventDefault()},Zb:c})}
function ib(a,b,c,d,e){$a||($a=Q(260));O({target:a,Yb:e,$b:d,ac:function(k){k=k||event;var g=$a,m=document.pointerLockElement||document.nc||document.mc||document.oc;H[g>>2]=!!m;var n=m&&m.id?m.id:"";D(m?m==window?"#window":m==screen?"#screen":m&&m.nodeName?m.nodeName:"":"",E,g+4,128);D(n,E,g+132,128);K.get(d)(20,g,b)&&k.preventDefault()},Zb:c})}function jb(a,b,c,d,e){O({target:a,Yb:e,$b:d,ac:function(k){k=k||event;K.get(d)(38,0,b)&&k.preventDefault()},Zb:c})}
function kb(a,b,c,d){ab||(ab=Q(36));a=P(a);O({target:a,Yb:"resize",$b:d,ac:function(e){e=e||event;if(e.target==a){var k=document.body;if(k){var g=ab;H[g>>2]=e.detail;H[g+4>>2]=k.clientWidth;H[g+8>>2]=k.clientHeight;H[g+12>>2]=innerWidth;H[g+16>>2]=innerHeight;H[g+20>>2]=outerWidth;H[g+24>>2]=outerHeight;H[g+28>>2]=pageXOffset;H[g+32>>2]=pageYOffset;K.get(d)(10,g,b)&&e.preventDefault()}}},Zb:c})}
function lb(a,b,c,d,e,k){bb||(bb=Q(1684));a=P(a);O({target:a,dc:"touchstart"==k||"touchend"==k,Yb:k,$b:d,ac:function(g){for(var m={},n=g.touches,q=0;q<n.length;++q){var p=n[q];m[p.identifier]=p}n=g.changedTouches;for(q=0;q<n.length;++q)p=n[q],p.Fc=1,m[p.identifier]=p;n=g.targetTouches;for(q=0;q<n.length;++q)m[n[q].identifier].Gc=1;n=bb;p=n>>2;H[p+1]=g.ctrlKey;H[p+2]=g.shiftKey;H[p+3]=g.altKey;H[p+4]=g.metaKey;p+=5;var A=eb(a),F=0;for(q in m){var w=m[q];H[p]=w.identifier;H[p+1]=w.screenX;H[p+2]=w.screenY;
H[p+3]=w.clientX;H[p+4]=w.clientY;H[p+5]=w.pageX;H[p+6]=w.pageY;H[p+7]=w.Fc;H[p+8]=w.Gc;H[p+9]=w.clientX-A.left;H[p+10]=w.clientY-A.top;p+=13;if(31<++F)break}H[n>>2]=F;K.get(d)(e,n,b)&&g.preventDefault()},Zb:c})}function mb(a,b,c,d,e,k){a={target:P(a),Yb:k,$b:d,ac:function(g){g=g||event;K.get(d)(e,0,b)&&g.preventDefault()},Zb:c};O(a)}
function nb(a,b,c,d){cb||(cb=Q(96));O({target:a,dc:!0,Yb:"wheel",$b:d,ac:function(e){e=e||event;var k=cb;gb(k,e,a);J[k+64>>3]=e.deltaX;J[k+72>>3]=e.deltaY;J[k+80>>3]=e.deltaZ;H[k+88>>2]=e.deltaMode;K.get(d)(9,k,b)&&e.preventDefault()},Zb:c})}
function ob(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,k){b.drawArraysInstancedANGLE(c,d,e,k)},a.drawElementsInstanced=function(c,d,e,k,g){b.drawElementsInstancedANGLE(c,d,e,k,g)})}
function pb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function qb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function rb(a){a.Lc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function sb(a){a.Qc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function tb(a){a.Sc=a.getExtension("WEBGL_multi_draw")}var ub=1,vb=[],R=[],wb=[],xb=[],S=[],T=[],yb=[],zb=[],Ab={},Bb={};function U(a){Cb||(Cb=a)}function Db(a){for(var b=ub++,c=a.length;c<b;c++)a[c]=null;return b}
function Eb(a,b){a.sc||(a.sc=a.getContext,a.getContext=function(d,e){e=a.sc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.tc?a.getContext("webgl2",b):a.getContext("webgl",b);return c?Fb(c,b):0}function Fb(a,b){var c=Db(zb),d={Pc:c,attributes:b,version:b.tc,jc:a};a.canvas&&(a.canvas.Ic=d);zb[c]=d;("undefined"===typeof b.rc||b.rc)&&Gb(d);return c}
function Gb(a){a||(a=V);if(!a.Ec){a.Ec=!0;var b=a.jc;ob(b);pb(b);qb(b);rb(b);sb(b);2<=a.version&&(b.qc=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.qc)b.qc=b.getExtension("EXT_disjoint_timer_query");tb(b);(b.getSupportedExtensions()||[]).forEach(function(c){0>c.indexOf("lose_context")&&0>c.indexOf("debug")&&b.getExtension(c)})}}var Cb,V,Hb=["default","low-power","high-performance"],Ib=[];
function Jb(a,b,c,d){for(var e=0;e<a;e++){var k=W[c](),g=k&&Db(d);k?(k.name=g,d[g]=k):U(1282);H[b+4*e>>2]=g}}
function Kb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=W.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>V.version){U(1282);return}c=2*(W.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>V.version){U(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=W.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":U(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:U(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)H[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){U(1280);z("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:U(1280);z("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}H[b>>2]=c}else U(1281)}
function Lb(a){var b=ua(a)+1,c=Q(b);D(a,E,c,b);return c}function Mb(a){a-=5120;return 0==a?pa:1==a?E:2==a?xa:4==a?H:6==a?I:5==a||28922==a||28520==a||30779==a||30782==a?za:ya}function X(a){var b=W.Bc,c=b.ic[a];0<=c&&(b.ic[a]=c=W.getUniformLocation(b,b.Ac[a]+(0<c?"["+c+"]":"")));return c}for(var Y=[],W,Z=0;32>Z;++Z)Ib.push(Array(Z));var Nb=new Float32Array(288);for(Z=0;288>Z;++Z)Y[Z]=Nb.subarray(0,Z+1);
var Sb={na:function(){return 0},jb:function(){return 0},lb:function(){},Z:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},ga:function(a,b,c){a=P(a);if(!a)return-4;a=eb(a);J[b>>3]=a.width;J[c>>3]=a.height;return 0},gb:function(a,b,c){E.copyWithin(a,b,b+c)},Qa:function(a,b){function c(d){K.get(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},hb:function(a){var b=E.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,
a+100663296);d=Math.max(a,d);0<d%65536&&(d+=65536-d%65536);a:{try{la.grow(Math.min(2147483648,d)-wa.byteLength+65535>>>16);Aa();var e=1;break a}catch(k){}e=void 0}if(e)return!0}return!1},X:function(a,b,c){a=P(a);if(!a)return-4;a.width=b;a.height=c;return 0},ja:function(a,b,c,d){fb(a,b,c,d,2,"keydown");return 0},ha:function(a,b,c,d){fb(a,b,c,d,1,"keypress");return 0},ia:function(a,b,c,d){fb(a,b,c,d,3,"keyup");return 0},ua:function(a,b,c,d){hb(a,b,c,d,5,"mousedown");return 0},ma:function(a,b,c,d){hb(a,
b,c,d,33,"mouseenter");return 0},la:function(a,b,c,d){hb(a,b,c,d,34,"mouseleave");return 0},pa:function(a,b,c,d){hb(a,b,c,d,8,"mousemove");return 0},qa:function(a,b,c,d){hb(a,b,c,d,6,"mouseup");return 0},ba:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.nc||document.body.mc||document.body.oc))return-1;a=P(a);if(!a)return-4;ib(a,b,c,d,"pointerlockchange");ib(a,b,c,d,"mozpointerlockchange");ib(a,b,c,d,"webkitpointerlockchange");ib(a,b,c,d,"mspointerlockchange");
return 0},aa:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.nc||document.body.mc||document.body.oc))return-1;a=P(a);if(!a)return-4;jb(a,b,c,d,"pointerlockerror");jb(a,b,c,d,"mozpointerlockerror");jb(a,b,c,d,"webkitpointerlockerror");jb(a,b,c,d,"mspointerlockerror");return 0},bb:function(a,b,c,d){kb(a,b,c,d);return 0},ca:function(a,b,c,d){lb(a,b,c,d,25,"touchcancel");return 0},da:function(a,b,c,d){lb(a,b,c,d,23,"touchend");return 0},ea:function(a,b,c,d){lb(a,b,c,
d,24,"touchmove");return 0},fa:function(a,b,c,d){lb(a,b,c,d,22,"touchstart");return 0},$:function(a,b,c,d){mb(a,b,c,d,31,"webglcontextlost");return 0},_:function(a,b,c,d){mb(a,b,c,d,32,"webglcontextrestored");return 0},ka:function(a,b,c,d){a=P(a);return"undefined"!==typeof a.onwheel?(nb(a,b,c,d),0):-1},K:function(a,b){b>>=2;b={alpha:!!H[b],depth:!!H[b+1],stencil:!!H[b+2],antialias:!!H[b+3],premultipliedAlpha:!!H[b+4],preserveDrawingBuffer:!!H[b+5],powerPreference:Hb[H[b+6]],failIfMajorPerformanceCaveat:!!H[b+
7],tc:H[b+8],Rc:H[b+9],rc:H[b+10],Dc:H[b+11],Tc:H[b+12],Uc:H[b+13]};a=P(a);return!a||b.Dc?0:Eb(a,b)},Cb:function(a,b){a=zb[a];b=G(b);0==b.indexOf("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&ob(W);"OES_vertex_array_object"==b&&pb(W);"WEBGL_draw_buffers"==b&&qb(W);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&rb(W);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&sb(W);"WEBGL_multi_draw"==b&&tb(W);return!!a.jc.getExtension(b)},Na:function(a){a>>=2;for(var b=0;14>b;++b)H[a+
b]=0;H[a]=H[a+1]=H[a+3]=H[a+4]=H[a+8]=H[a+10]=1},Ca:function(a){V=zb[a];f.Kc=W=V&&V.jc;return!a||W?0:-5},oa:function(){return 0},ib:function(a,b,c,d){a=Qa.Oc(a);b=Qa.Mc(a,b,c);H[d>>2]=b;return 0},fb:function(){},kb:function(a,b,c,d){for(var e=0,k=0;k<c;k++){for(var g=H[b+8*k>>2],m=H[b+(8*k+4)>>2],n=0;n<m;n++){var q=E[g+n],p=Pa[a];0===q||10===q?((1===a?ka:z)(ta(p,0)),p.length=0):p.push(q)}e+=m}H[d>>2]=e;return 0},b:function(a){W.activeTexture(a)},I:function(a,b){W.attachShader(R[a],T[b])},c:function(a,
b){35051==a?W.pc=b:35052==a&&(W.bc=b);W.bindBuffer(a,vb[b])},e:function(a,b){W.bindFramebuffer(a,wb[b])},M:function(a,b){W.bindRenderbuffer(a,xb[b])},a:function(a,b){W.bindTexture(a,S[b])},W:function(a){W.bindVertexArray(yb[a])},S:function(a,b,c,d){W.blendColor(a,b,c,d)},T:function(a,b){W.blendEquationSeparate(a,b)},U:function(a,b,c,d){W.blendFuncSeparate(a,b,c,d)},v:function(a,b,c,d,e,k,g,m,n,q){W.blitFramebuffer(a,b,c,d,e,k,g,m,n,q)},La:function(a,b,c,d){2<=V.version?c?W.bufferData(a,E,d,c,b):W.bufferData(a,
b,d):W.bufferData(a,c?E.subarray(c,c+b):b,d)},O:function(a,b,c,d){2<=V.version?W.bufferSubData(a,b,E,d,c):W.bufferSubData(a,b,E.subarray(d,d+c))},q:function(a){return W.checkFramebufferStatus(a)},yb:function(a){W.clear(a)},xb:function(a,b,c,d){W.clearBufferfi(a,b,c,d)},ta:function(a,b,c){W.clearBufferfv(a,b,I,c>>2)},wb:function(a,b,c){W.clearBufferiv(a,b,H,c>>2)},Bb:function(a,b,c,d){W.clearColor(a,b,c,d)},Ab:function(a){W.clearDepth(a)},zb:function(a){W.clearStencil(a)},n:function(a,b,c,d){W.colorMask(!!a,
!!b,!!c,!!d)},ya:function(a){W.compileShader(T[a])},Ia:function(a,b,c,d,e,k,g,m){2<=V.version?W.bc?W.compressedTexImage2D(a,b,c,d,e,k,g,m):W.compressedTexImage2D(a,b,c,d,e,k,E,m,g):W.compressedTexImage2D(a,b,c,d,e,k,m?E.subarray(m,m+g):null)},Ga:function(a,b,c,d,e,k,g,m,n){W.bc?W.compressedTexImage3D(a,b,c,d,e,k,g,m,n):W.compressedTexImage3D(a,b,c,d,e,k,g,E,n,m)},Ea:function(){var a=Db(R),b=W.createProgram();b.name=a;b.hc=b.ec=b.fc=0;b.lc=1;R[a]=b;return a},Aa:function(a){var b=Db(T);T[b]=W.createShader(a);
return b},P:function(a){W.cullFace(a)},Ua:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],e=vb[d];e&&(W.deleteBuffer(e),e.name=0,vb[d]=null,d==W.pc&&(W.pc=0),d==W.bc&&(W.bc=0))}},k:function(a,b){for(var c=0;c<a;++c){var d=H[b+4*c>>2],e=wb[d];e&&(W.deleteFramebuffer(e),e.name=0,wb[d]=null)}},D:function(a){if(a){var b=R[a];b?(W.deleteProgram(b),b.name=0,R[a]=null):U(1281)}},Y:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],e=xb[d];e&&(W.deleteRenderbuffer(e),e.name=0,xb[d]=null)}},z:function(a){if(a){var b=
T[a];b?(W.deleteShader(b),T[a]=null):U(1281)}},Ta:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],e=S[d];e&&(W.deleteTexture(e),e.name=0,S[d]=null)}},Sa:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2];W.deleteVertexArray(yb[d]);yb[d]=null}},C:function(a){W.depthFunc(a)},B:function(a){W.depthMask(!!a)},g:function(a){W.disable(a)},V:function(a){W.disableVertexAttribArray(a)},mb:function(a,b,c){W.drawArrays(a,b,c)},p:function(a,b){for(var c=Ib[a],d=0;d<a;d++)c[d]=H[b+4*d>>2];W.drawBuffers(c)},
nb:function(a,b,c,d){W.drawElements(a,b,c,d)},i:function(a){W.enable(a)},tb:function(a){W.enableVertexAttribArray(a)},l:function(a,b,c,d){W.framebufferRenderbuffer(a,b,c,xb[d])},d:function(a,b,c,d,e){W.framebufferTexture2D(a,b,c,S[d],e)},j:function(a,b,c,d,e){W.framebufferTextureLayer(a,b,S[c],d,e)},Q:function(a){W.frontFace(a)},Ma:function(a,b){Jb(a,b,"createBuffer",vb)},m:function(a,b){Jb(a,b,"createFramebuffer",wb)},N:function(a,b){Jb(a,b,"createRenderbuffer",xb)},Ja:function(a,b){Jb(a,b,"createTexture",
S)},Ra:function(a,b){Jb(a,b,"createVertexArray",yb)},wa:function(a,b){return W.getAttribLocation(R[a],G(b))},f:function(a,b){Kb(a,b)},Ba:function(a,b,c,d){a=W.getProgramInfoLog(R[a]);null===a&&(a="(unknown error)");b=0<b&&d?D(a,E,d,b):0;c&&(H[c>>2]=b)},H:function(a,b,c){if(c)if(a>=ub)U(1281);else if(a=R[a],35716==b)a=W.getProgramInfoLog(a),null===a&&(a="(unknown error)"),H[c>>2]=a.length+1;else if(35719==b){if(!a.hc)for(b=0;b<W.getProgramParameter(a,35718);++b)a.hc=Math.max(a.hc,W.getActiveUniform(a,
b).name.length+1);H[c>>2]=a.hc}else if(35722==b){if(!a.ec)for(b=0;b<W.getProgramParameter(a,35721);++b)a.ec=Math.max(a.ec,W.getActiveAttrib(a,b).name.length+1);H[c>>2]=a.ec}else if(35381==b){if(!a.fc)for(b=0;b<W.getProgramParameter(a,35382);++b)a.fc=Math.max(a.fc,W.getActiveUniformBlockName(a,b).length+1);H[c>>2]=a.fc}else H[c>>2]=W.getProgramParameter(a,b);else U(1281)},xa:function(a,b,c,d){a=W.getShaderInfoLog(T[a]);null===a&&(a="(unknown error)");b=0<b&&d?D(a,E,d,b):0;c&&(H[c>>2]=b)},F:function(a,
b,c){c?35716==b?(a=W.getShaderInfoLog(T[a]),null===a&&(a="(unknown error)"),H[c>>2]=a?a.length+1:0):35720==b?(a=W.getShaderSource(T[a]),H[c>>2]=a?a.length+1:0):H[c>>2]=W.getShaderParameter(T[a],b):U(1281)},Wa:function(a){var b=Ab[a];if(!b){switch(a){case 7939:b=W.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Lb(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=W.getParameter(a))||U(1280);b=b&&Lb(b);break;case 7938:b=W.getParameter(7938);b=2<=V.version?
"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Lb(b);break;case 35724:b=W.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Lb(b);break;default:U(1280)}Ab[a]=b}return b},Va:function(a,b){if(2>V.version)return U(1282),0;var c=Bb[a];if(c)return 0>b||b>=c.length?(U(1281),0):c[b];switch(a){case 7939:return c=W.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=
c.map(function(d){return Lb(d)}),c=Bb[a]=c,0>b||b>=c.length?(U(1281),0):c[b];default:return U(1280),0}},r:function(a,b){function c(w){return"]"==w.slice(-1)&&w.lastIndexOf("[")}b=G(b);a=R[a];var d=a.ic,e=a.Hc,k,g=0,m=b,n=c(b);if(!d)for(a.ic=d={},a.Ac={},k=0;k<W.getProgramParameter(a,35718);++k){var q=W.getActiveUniform(a,k);var p=q.name;q=q.size;var A=c(p);A=0<A?p.slice(0,A):p;var F=a.lc;a.lc+=q;e[A]=[q,F];for(p=0;p<q;++p)d[F]=p,a.Ac[F++]=A}0<n&&(g=parseInt(b.slice(n+1))>>>0,m=b.slice(0,n));return(e=
e[m])&&g<e[0]&&(g+=e[1],d[g]=d[g]||W.getUniformLocation(a,b))?g:-1},Da:function(a){a=R[a];W.linkProgram(a);a.ic=0;a.Hc={}},R:function(a,b){W.polygonOffset(a,b)},w:function(a){W.readBuffer(a)},Ka:function(a,b,c,d){W.renderbufferStorage(a,b,c,d)},L:function(a,b,c,d,e){W.renderbufferStorageMultisample(a,b,c,d,e)},x:function(a,b,c,d){W.scissor(a,b,c,d)},za:function(a,b,c,d){for(var e="",k=0;k<b;++k){var g=d?H[d+4*k>>2]:-1;e+=G(H[c+4*k>>2],0>g?void 0:g)}W.shaderSource(T[a],e)},Pa:function(a,b,c){W.stencilFunc(a,
b,c)},sa:function(a,b,c,d){W.stencilFuncSeparate(a,b,c,d)},A:function(a){W.stencilMask(a)},Oa:function(a,b,c){W.stencilOp(a,b,c)},ra:function(a,b,c,d){W.stencilOpSeparate(a,b,c,d)},Ha:function(a,b,c,d,e,k,g,m,n){if(2<=V.version)if(W.bc)W.texImage2D(a,b,c,d,e,k,g,m,n);else if(n){var q=Mb(m);W.texImage2D(a,b,c,d,e,k,g,m,q,n>>31-Math.clz32(q.BYTES_PER_ELEMENT))}else W.texImage2D(a,b,c,d,e,k,g,m,null);else{q=W;var p=q.texImage2D;if(n){var A=Mb(m),F=31-Math.clz32(A.BYTES_PER_ELEMENT);n=A.subarray(n>>F,
n+e*(d*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[g-6402]||1)*(1<<F)+4-1&-4)>>F)}else n=null;p.call(q,a,b,c,d,e,k,g,m,n)}},Fa:function(a,b,c,d,e,k,g,m,n,q){if(W.bc)W.texImage3D(a,b,c,d,e,k,g,m,n,q);else if(q){var p=Mb(n);W.texImage3D(a,b,c,d,e,k,g,m,n,p,q>>31-Math.clz32(p.BYTES_PER_ELEMENT))}else W.texImage3D(a,b,c,d,e,k,g,m,n,null)},J:function(a,b,c){W.texParameterf(a,b,c)},h:function(a,b,c){W.texParameteri(a,b,c)},sb:function(a,b,c){if(2<=V.version)W.uniform1fv(X(a),I,c>>2,b);
else{if(288>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=I[c+4*e>>2];else d=I.subarray(c>>2,c+4*b>>2);W.uniform1fv(X(a),d)}},G:function(a,b){W.uniform1i(X(a),b)},rb:function(a,b,c){if(2<=V.version)W.uniform2fv(X(a),I,c>>2,2*b);else{if(144>=b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=I[c+4*e>>2],d[e+1]=I[c+(4*e+4)>>2];else d=I.subarray(c>>2,c+8*b>>2);W.uniform2fv(X(a),d)}},qb:function(a,b,c){if(2<=V.version)W.uniform3fv(X(a),I,c>>2,3*b);else{if(96>=b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=I[c+4*e>>2],d[e+1]=
I[c+(4*e+4)>>2],d[e+2]=I[c+(4*e+8)>>2];else d=I.subarray(c>>2,c+12*b>>2);W.uniform3fv(X(a),d)}},pb:function(a,b,c){if(2<=V.version)W.uniform4fv(X(a),I,c>>2,4*b);else{if(72>=b){var d=Y[4*b-1],e=I;c>>=2;for(var k=0;k<4*b;k+=4){var g=c+k;d[k]=e[g];d[k+1]=e[g+1];d[k+2]=e[g+2];d[k+3]=e[g+3]}}else d=I.subarray(c>>2,c+16*b>>2);W.uniform4fv(X(a),d)}},ob:function(a,b,c,d){if(2<=V.version)W.uniformMatrix4fv(X(a),!!c,I,d>>2,16*b);else{if(18>=b){var e=Y[16*b-1],k=I;d>>=2;for(var g=0;g<16*b;g+=16){var m=d+g;e[g]=
k[m];e[g+1]=k[m+1];e[g+2]=k[m+2];e[g+3]=k[m+3];e[g+4]=k[m+4];e[g+5]=k[m+5];e[g+6]=k[m+6];e[g+7]=k[m+7];e[g+8]=k[m+8];e[g+9]=k[m+9];e[g+10]=k[m+10];e[g+11]=k[m+11];e[g+12]=k[m+12];e[g+13]=k[m+13];e[g+14]=k[m+14];e[g+15]=k[m+15]}}else e=I.subarray(d>>2,d+64*b>>2);W.uniformMatrix4fv(X(a),!!c,e)}},o:function(a){a=R[a];W.useProgram(a);W.Bc=a},ub:function(a,b){W.vertexAttribDivisor(a,b)},vb:function(a,b,c,d,e,k){W.vertexAttribPointer(a,b,c,!!d,e,k)},y:function(a,b,c,d){W.viewport(a,b,c,d)},eb:function(){f.uc=
function(a){0!=Ob()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",f.uc)},db:function(){f.zc=function(a){a=a.clipboardData.getData("text");oa("_sapp_emsc_onpaste",["string"],[a])};window.addEventListener("paste",f.zc)},cb:function(a){f.Vc=[];a=G(a);a=document.getElementById(a);f.vc=function(b){b.stopPropagation();b.preventDefault()};f.wc=function(b){b.stopPropagation();b.preventDefault()};f.xc=function(b){b.stopPropagation();b.preventDefault()};f.yc=function(b){b.stopPropagation();
b.preventDefault();var c=b.dataTransfer.files;f.Wc=c;Pb(c.length);var d;for(d=0;d<c.length;d++)oa("_sapp_emsc_drop",["number","string"],[d,c[d].name]);Qb(b.clientX,b.clientY)};a.addEventListener("dragenter",f.vc,!1);a.addEventListener("dragleave",f.wc,!1);a.addEventListener("dragover",f.xc,!1);a.addEventListener("drop",f.yc,!1)},Ya:function(){var a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},u:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";
a.autocapitalize="none";a.addEventListener("focusout",function(){Rb()});document.body.append(a)},t:function(){document.getElementById("_sokol_app_input_element").focus()},Db:function(a){a=G(a);f.cc=document.getElementById(a);f.cc||console.log("sokol_app.h: invalid target:"+a);f.cc.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},ab:function(){window.removeEventListener("beforeunload",f.uc)},$a:function(){window.removeEventListener("paste",f.zc)},_a:function(a){a=
G(a);a=document.getElementById(a);a.removeEventListener("dragenter",f.vc);a.removeEventListener("dragleave",f.wc);a.removeEventListener("dragover",f.xc);a.removeEventListener("drop",f.yc)},E:function(){f.cc&&f.cc.requestPointerLock&&f.cc.requestPointerLock()},Xa:function(a,b,c){var d=document.createElement("canvas");d.width=a;d.height=b;var e=d.getContext("2d"),k=e.createImageData(a,b);k.data.set(E.subarray(c,c+a*b*4));e.putImageData(k,0,0);a=document.createElement("link");a.id="sokol-app-favicon";
a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},s:function(){document.getElementById("_sokol_app_input_element").blur()},Za:function(a){a=G(a);var b=document.createElement("textarea");b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");b.setAttribute("spellcheck","false");b.style.left="-100px";b.style.top="-100px";b.style.height=1;b.style.width=1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");
document.body.removeChild(b)},va:function(){return navigator.userAgent.includes("Macintosh")?1:0}};
(function(){function a(e){f.asm=e.exports;la=f.asm.Eb;Aa();K=f.asm.Xb;Ca.unshift(f.asm.Fb);L--;f.monitorRunDependencies&&f.monitorRunDependencies(L);0==L&&(null!==Ha&&(clearInterval(Ha),Ha=null),Ia&&(e=Ia,Ia=null,e()))}function b(e){a(e.instance)}function c(e){return Na().then(function(k){return WebAssembly.instantiate(k,d)}).then(e,function(k){z("failed to asynchronously prepare wasm: "+k);y(k)})}var d={a:Sb};L++;f.monitorRunDependencies&&f.monitorRunDependencies(L);if(f.instantiateWasm)try{return f.instantiateWasm(d,
a)}catch(e){return z("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return B||"function"!==typeof WebAssembly.instantiateStreaming||Ka()||Ja("file://")||"function"!==typeof fetch?c(b):fetch(M,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(k){z("wasm streaming compile failed: "+k);z("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
f.___wasm_call_ctors=function(){return(f.___wasm_call_ctors=f.asm.Fb).apply(null,arguments)};var Q=f._malloc=function(){return(Q=f._malloc=f.asm.Gb).apply(null,arguments)},Rb=f.__sapp_emsc_notify_keyboard_hidden=function(){return(Rb=f.__sapp_emsc_notify_keyboard_hidden=f.asm.Hb).apply(null,arguments)};f.__sapp_emsc_onpaste=function(){return(f.__sapp_emsc_onpaste=f.asm.Ib).apply(null,arguments)};
var Ob=f.__sapp_html5_get_ask_leave_site=function(){return(Ob=f.__sapp_html5_get_ask_leave_site=f.asm.Jb).apply(null,arguments)},Pb=f.__sapp_emsc_begin_drop=function(){return(Pb=f.__sapp_emsc_begin_drop=f.asm.Kb).apply(null,arguments)};f.__sapp_emsc_drop=function(){return(f.__sapp_emsc_drop=f.asm.Lb).apply(null,arguments)};var Qb=f.__sapp_emsc_end_drop=function(){return(Qb=f.__sapp_emsc_end_drop=f.asm.Mb).apply(null,arguments)};
f.__sapp_emsc_invoke_fetch_cb=function(){return(f.__sapp_emsc_invoke_fetch_cb=f.asm.Nb).apply(null,arguments)};f._main=function(){return(f._main=f.asm.Ob).apply(null,arguments)};f.__saudio_emsc_pull=function(){return(f.__saudio_emsc_pull=f.asm.Pb).apply(null,arguments)};f.__sfetch_emsc_head_response=function(){return(f.__sfetch_emsc_head_response=f.asm.Qb).apply(null,arguments)};f.__sfetch_emsc_get_response=function(){return(f.__sfetch_emsc_get_response=f.asm.Rb).apply(null,arguments)};
f.__sfetch_emsc_failed_http_status=function(){return(f.__sfetch_emsc_failed_http_status=f.asm.Sb).apply(null,arguments)};f.__sfetch_emsc_failed_buffer_too_small=function(){return(f.__sfetch_emsc_failed_buffer_too_small=f.asm.Tb).apply(null,arguments)};
var qa=f.stackSave=function(){return(qa=f.stackSave=f.asm.Ub).apply(null,arguments)},ra=f.stackRestore=function(){return(ra=f.stackRestore=f.asm.Vb).apply(null,arguments)},C=f.stackAlloc=function(){return(C=f.stackAlloc=f.asm.Wb).apply(null,arguments)},Tb;function ja(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}Ia=function Ub(){Tb||Vb();Tb||(Ia=Ub)};
function Vb(a){function b(){if(!Tb&&(Tb=!0,f.calledRun=!0,!ma)){Oa(Ca);Oa(Da);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if(Wb){var c=a,d=f._main;c=c||[];var e=c.length+1,k=C(4*(e+1));H[k>>2]=va(aa);for(var g=1;g<e;g++)H[(k>>2)+g]=va(c[g-1]);H[(k>>2)+e]=0;try{var m=d(e,k);if(!noExitRuntime||0!==m){if(!noExitRuntime){if(f.onExit)f.onExit(m);ma=!0}t(m,new ja(m))}}catch(n){n instanceof ja||"unwind"==n||((c=n)&&"object"===typeof n&&n.stack&&(c=[n,n.stack]),z("exception thrown: "+c),t(1,n))}finally{}}if(f.postRun)for("function"==
typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;)c=f.postRun.shift(),Fa.unshift(c);Oa(Fa)}}a=a||r;if(!(0<L)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Ga();Oa(Ba);0<L||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},1)):b())}}f.run=Vb;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var Wb=!0;f.noInitialRun&&(Wb=!1);Vb();
