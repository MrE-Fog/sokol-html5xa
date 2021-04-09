
var f;f||(f=typeof Module !== 'undefined' ? Module : {});var k={},l;for(l in f)f.hasOwnProperty(l)&&(k[l]=f[l]);var r=[],ba="./this.program";function t(a,b){throw b;}var ca=!1,u=!1,da=!1,ea=!1;ca="object"===typeof window;u="function"===typeof importScripts;da="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;ea=!ca&&!da&&!u;var v="",fa,ha,w,ia,ja;
if(da)v=u?require("path").dirname(v)+"/":__dirname+"/",fa=function(a,b){ia||(ia=require("fs"));ja||(ja=require("path"));a=ja.normalize(a);return ia.readFileSync(a,b?null:"utf8")},w=function(a){a=fa(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&(ba=process.argv[1].replace(/\\/g,"/")),r=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=f),process.on("uncaughtException",function(a){if(!(a instanceof ka))throw a;}),process.on("unhandledRejection",
x),t=function(a){process.exit(a)},f.inspect=function(){return"[Emscripten Module object]"};else if(ea)"undefined"!=typeof read&&(fa=function(a){return read(a)}),w=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?r=scriptArgs:"undefined"!=typeof arguments&&(r=arguments),"function"===typeof quit&&(t=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===typeof console&&
(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(ca||u)u?v=self.location.href:"undefined"!==typeof document&&document.currentScript&&(v=document.currentScript.src),v=0!==v.indexOf("blob:")?v.substr(0,v.lastIndexOf("/")+1):"",fa=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},u&&(w=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),
ha=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};var la=f.print||console.log.bind(console),y=f.printErr||console.warn.bind(console);for(l in k)k.hasOwnProperty(l)&&(f[l]=k[l]);k=null;f.arguments&&(r=f.arguments);f.thisProgram&&(ba=f.thisProgram);f.quit&&(t=f.quit);var z;f.wasmBinary&&(z=f.wasmBinary);var noExitRuntime=f.noExitRuntime||!0;
"object"!==typeof WebAssembly&&x("no native wasm support detected");var ma,na=!1;function assert(a,b){a||x("Assertion failed: "+b)}function oa(a){var b=f["_"+a];assert(b,"Cannot call unknown function "+a+", make sure it is exported");return b}
function pa(a,b,c){var d={string:function(n){var p=0;if(null!==n&&void 0!==n&&0!==n){var q=(n.length<<2)+1;p=A(q);C(n,D,p,q)}return p},array:function(n){var p=A(n.length);qa.set(n,p);return p}};a=oa(a);var e=[],h=0;if(c)for(var g=0;g<c.length;g++){var m=d[b[g]];m?(0===h&&(h=ra()),e[g]=m(c[g])):e[g]=c[g]}a.apply(null,e);0!==h&&sa(h)}var ta="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function ua(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&ta)return ta.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var h=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|h);else{var g=a[b++]&63;e=224==(e&240)?(e&15)<<12|h<<6|g:(e&7)<<18|h<<12|g<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function E(a,b){return a?ua(D,a,b):""}
function C(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var h=0;h<a.length;++h){var g=a.charCodeAt(h);if(55296<=g&&57343>=g){var m=a.charCodeAt(++h);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-e}
function va(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function wa(a){var b=va(a)+1,c=A(b);C(a,qa,c,b);return c}var xa,qa,D,ya,za,F,Aa,G,H;
function Ba(){var a=ma.buffer;xa=a;f.HEAP8=qa=new Int8Array(a);f.HEAP16=ya=new Int16Array(a);f.HEAP32=F=new Int32Array(a);f.HEAPU8=D=new Uint8Array(a);f.HEAPU16=za=new Uint16Array(a);f.HEAPU32=Aa=new Uint32Array(a);f.HEAPF32=G=new Float32Array(a);f.HEAPF64=H=new Float64Array(a)}var I,Ca=[],Da=[],Ea=[],Fa=[],Ga=[];function Ha(){var a=f.preRun.shift();Ca.unshift(a)}var J=0,Ia=null,K=null;f.preloadedImages={};f.preloadedAudios={};
function x(a){if(f.onAbort)f.onAbort(a);y(a);na=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}function Ja(a){var b=L;return String.prototype.startsWith?b.startsWith(a):0===b.indexOf(a)}function Ka(){return Ja("data:application/octet-stream;base64,")}var L="debugtext-printf-sapp-ui.wasm";if(!Ka()){var La=L;L=f.locateFile?f.locateFile(La,v):v+La}
function Ma(){var a=L;try{if(a==L&&z)return new Uint8Array(z);if(w)return w(a);throw"both async and sync fetching of the wasm failed";}catch(b){x(b)}}
function Na(){if(!z&&(ca||u)){if("function"===typeof fetch&&!Ja("file://"))return fetch(L,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+L+"'";return a.arrayBuffer()}).catch(function(){return Ma()});if(ha)return new Promise(function(a,b){ha(L,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ma()})}
function Oa(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(f);else{var c=b.Cc;"number"===typeof c?void 0===b.ac?I.get(c)():I.get(c)(b.ac):c(void 0===b.ac?null:b.ac)}}}var Pa=[null,[],[]],Qa={},Ra=0;function Sa(){for(var a=M.length-1;0<=a;--a)Ta(a);M=[];Ua=[]}var Ua=[];function Va(){if(Ra&&Wa.Zb)for(var a=0;a<Ua.length;++a){var b=Ua[a];Ua.splice(a,1);--a;b.Mc.apply(null,b.xc)}}var M=[];function Ta(a){var b=M[a];b.target.removeEventListener(b.Rb,b.rc,b.Sb);M.splice(a,1)}
function N(a){function b(d){++Ra;Wa=a;Va();a.Ub(d);Va();--Ra}if(a.Tb)a.rc=b,a.target.addEventListener(a.Rb,b,a.Sb),M.push(a),Xa||(Fa.push(Sa),Xa=!0);else for(var c=0;c<M.length;++c)M[c].target==a.target&&M[c].Rb==a.Rb&&Ta(c--)}var Xa,Wa,Ya,Za,$a,ab,bb,cb,db=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function O(a){a=2<a?E(a):a;return db[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}
function eb(a){return 0>db.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}function fb(a,b,c,d,e,h){Ya||(Ya=Q(164));a={target:O(a),Zb:!0,Rb:h,Tb:d,Ub:function(g){var m=Ya,n=m>>2;F[n]=g.location;F[n+1]=g.ctrlKey;F[n+2]=g.shiftKey;F[n+3]=g.altKey;F[n+4]=g.metaKey;F[n+5]=g.repeat;F[n+6]=g.charCode;F[n+7]=g.keyCode;F[n+8]=g.which;C(g.key||"",D,m+36,32);C(g.code||"",D,m+68,32);C(g.char||"",D,m+100,32);C(g.locale||"",D,m+132,32);I.get(d)(e,m,b)&&g.preventDefault()},Sb:c};N(a)}
function gb(a,b,c){a>>=2;F[a]=b.screenX;F[a+1]=b.screenY;F[a+2]=b.clientX;F[a+3]=b.clientY;F[a+4]=b.ctrlKey;F[a+5]=b.shiftKey;F[a+6]=b.altKey;F[a+7]=b.metaKey;ya[2*a+16]=b.button;ya[2*a+17]=b.buttons;F[a+9]=b.movementX;F[a+10]=b.movementY;c=eb(c);F[a+11]=b.clientX-c.left;F[a+12]=b.clientY-c.top}function R(a,b,c,d,e,h){Za||(Za=Q(64));a=O(a);N({target:a,Zb:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,Rb:h,Tb:d,Ub:function(g){g=g||event;gb(Za,g,a);I.get(d)(e,Za,b)&&g.preventDefault()},Sb:c})}
function hb(a,b,c,d,e){$a||($a=Q(260));N({target:a,Rb:e,Tb:d,Ub:function(h){h=h||event;var g=$a,m=document.pointerLockElement||document.cc||document.ec||document.dc;F[g>>2]=!!m;var n=m&&m.id?m.id:"";C(m?m==window?"#window":m==screen?"#screen":m&&m.nodeName?m.nodeName:"":"",D,g+4,128);C(n,D,g+132,128);I.get(d)(20,g,b)&&h.preventDefault()},Sb:c})}function ib(a,b,c,d,e){N({target:a,Rb:e,Tb:d,Ub:function(h){h=h||event;I.get(d)(38,0,b)&&h.preventDefault()},Sb:c})}
function jb(a,b,c,d){ab||(ab=Q(36));a=O(a);N({target:a,Rb:"resize",Tb:d,Ub:function(e){e=e||event;if(e.target==a){var h=document.body;if(h){var g=ab;F[g>>2]=e.detail;F[g+4>>2]=h.clientWidth;F[g+8>>2]=h.clientHeight;F[g+12>>2]=innerWidth;F[g+16>>2]=innerHeight;F[g+20>>2]=outerWidth;F[g+24>>2]=outerHeight;F[g+28>>2]=pageXOffset;F[g+32>>2]=pageYOffset;I.get(d)(10,g,b)&&e.preventDefault()}}},Sb:c})}
function kb(a,b,c,d,e,h){bb||(bb=Q(1684));a=O(a);N({target:a,Zb:"touchstart"==h||"touchend"==h,Rb:h,Tb:d,Ub:function(g){for(var m={},n=g.touches,p=0;p<n.length;++p){var q=n[p];m[q.identifier]=q}n=g.changedTouches;for(p=0;p<n.length;++p)q=n[p],q.uc=1,m[q.identifier]=q;n=g.targetTouches;for(p=0;p<n.length;++p)m[n[p].identifier].vc=1;n=bb;q=n>>2;F[q+1]=g.ctrlKey;F[q+2]=g.shiftKey;F[q+3]=g.altKey;F[q+4]=g.metaKey;q+=5;var aa=eb(a),P=0;for(p in m){var B=m[p];F[q]=B.identifier;F[q+1]=B.screenX;F[q+2]=B.screenY;
F[q+3]=B.clientX;F[q+4]=B.clientY;F[q+5]=B.pageX;F[q+6]=B.pageY;F[q+7]=B.uc;F[q+8]=B.vc;F[q+9]=B.clientX-aa.left;F[q+10]=B.clientY-aa.top;q+=13;if(31<++P)break}F[n>>2]=P;I.get(d)(e,n,b)&&g.preventDefault()},Sb:c})}function lb(a,b,c,d,e,h){a={target:O(a),Rb:h,Tb:d,Ub:function(g){g=g||event;I.get(d)(e,0,b)&&g.preventDefault()},Sb:c};N(a)}
function mb(a,b,c,d){cb||(cb=Q(96));N({target:a,Zb:!0,Rb:"wheel",Tb:d,Ub:function(e){e=e||event;var h=cb;gb(h,e,a);H[h+64>>3]=e.deltaX;H[h+72>>3]=e.deltaY;H[h+80>>3]=e.deltaZ;F[h+88>>2]=e.deltaMode;I.get(d)(9,h,b)&&e.preventDefault()},Sb:c})}
function nb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,h){b.drawArraysInstancedANGLE(c,d,e,h)},a.drawElementsInstanced=function(c,d,e,h,g){b.drawElementsInstancedANGLE(c,d,e,h,g)})}
function ob(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function pb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function qb(a){a.zc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function rb(a){a.Fc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function sb(a){a.Hc=a.getExtension("WEBGL_multi_draw")}var tb=1,ub=[],S=[],vb=[],wb=[],xb=[],T=[],U=[],yb=[],zb=[],Ab={},Bb={},Cb={};function V(a){Db||(Db=a)}function W(a){for(var b=tb++,c=a.length;c<b;c++)a[c]=null;return b}
function Eb(a,b){a.ic||(a.ic=a.getContext,a.getContext=function(d,e){e=a.ic(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.jc?a.getContext("webgl2",b):a.getContext("webgl",b);return c?Fb(c,b):0}function Fb(a,b){var c=W(zb),d={Ec:c,attributes:b,version:b.jc,$b:a};a.canvas&&(a.canvas.wc=d);zb[c]=d;("undefined"===typeof b.hc||b.hc)&&Gb(d);return c}
function Gb(a){a||(a=X);if(!a.tc){a.tc=!0;var b=a.$b;nb(b);ob(b);pb(b);qb(b);rb(b);b.Ac=b.getExtension("EXT_disjoint_timer_query");sb(b);(b.getSupportedExtensions()||[]).forEach(function(c){0>c.indexOf("lose_context")&&0>c.indexOf("debug")&&b.getExtension(c)})}}var Db,X,Hb=["default","low-power","high-performance"];function Ib(a,b,c,d){for(var e=0;e<a;e++){var h=Y[c](),g=h&&W(d);h?(h.name=g,d[g]=h):V(1282);F[b+4*e>>2]=g}}
function Jb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=Y.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>X.version){V(1282);return}c=2*(Y.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>X.version){V(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=Y.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":V(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:V(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)F[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){V(1280);y("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:V(1280);y("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}F[b>>2]=c}else V(1281)}
function Kb(a){var b=va(a)+1,c=Q(b);C(a,D,c,b);return c}function Lb(a){a-=5120;return 0==a?qa:1==a?D:2==a?ya:4==a?F:6==a?G:5==a||28922==a||28520==a||30779==a||30782==a?Aa:za}for(var Z=[],Y,Mb=new Float32Array(288),Nb=0;288>Nb;++Nb)Z[Nb]=Mb.subarray(0,Nb+1);
var Sb={la:function(){return 0},gb:function(){return 0},ib:function(){},W:function(){x()},V:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},da:function(a,b,c){a=O(a);if(!a)return-4;a=eb(a);H[b>>3]=a.width;H[c>>3]=a.height;return 0},db:function(a,b,c){D.copyWithin(a,b,b+c)},Na:function(a,b){function c(d){I.get(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},eb:function(a){var b=D.length;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=
Math.min(d,a+100663296);d=Math.max(a,d);0<d%65536&&(d+=65536-d%65536);a:{try{ma.grow(Math.min(2147483648,d)-xa.byteLength+65535>>>16);Ba();var e=1;break a}catch(h){}e=void 0}if(e)return!0}return!1},T:function(a,b,c){a=O(a);if(!a)return-4;a.width=b;a.height=c;return 0},ga:function(a,b,c,d){fb(a,b,c,d,2,"keydown");return 0},ea:function(a,b,c,d){fb(a,b,c,d,1,"keypress");return 0},fa:function(a,b,c,d){fb(a,b,c,d,3,"keyup");return 0},pa:function(a,b,c,d){R(a,b,c,d,5,"mousedown");return 0},ja:function(a,
b,c,d){R(a,b,c,d,33,"mouseenter");return 0},ia:function(a,b,c,d){R(a,b,c,d,34,"mouseleave");return 0},ka:function(a,b,c,d){R(a,b,c,d,8,"mousemove");return 0},oa:function(a,b,c,d){R(a,b,c,d,6,"mouseup");return 0},_:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.cc||document.body.ec||document.body.dc))return-1;a=O(a);if(!a)return-4;hb(a,b,c,d,"pointerlockchange");hb(a,b,c,d,"mozpointerlockchange");hb(a,b,c,d,"webkitpointerlockchange");hb(a,b,c,d,"mspointerlockchange");
return 0},Z:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.cc||document.body.ec||document.body.dc))return-1;a=O(a);if(!a)return-4;ib(a,b,c,d,"pointerlockerror");ib(a,b,c,d,"mozpointerlockerror");ib(a,b,c,d,"webkitpointerlockerror");ib(a,b,c,d,"mspointerlockerror");return 0},_a:function(a,b,c,d){jb(a,b,c,d);return 0},$:function(a,b,c,d){kb(a,b,c,d,25,"touchcancel");return 0},aa:function(a,b,c,d){kb(a,b,c,d,23,"touchend");return 0},ba:function(a,b,c,d){kb(a,b,c,d,
24,"touchmove");return 0},ca:function(a,b,c,d){kb(a,b,c,d,22,"touchstart");return 0},Y:function(a,b,c,d){lb(a,b,c,d,31,"webglcontextlost");return 0},X:function(a,b,c,d){lb(a,b,c,d,32,"webglcontextrestored");return 0},ha:function(a,b,c,d){a=O(a);return"undefined"!==typeof a.onwheel?(mb(a,b,c,d),0):-1},F:function(a,b){b>>=2;b={alpha:!!F[b],depth:!!F[b+1],stencil:!!F[b+2],antialias:!!F[b+3],premultipliedAlpha:!!F[b+4],preserveDrawingBuffer:!!F[b+5],powerPreference:Hb[F[b+6]],failIfMajorPerformanceCaveat:!!F[b+
7],jc:F[b+8],Gc:F[b+9],hc:F[b+10],sc:F[b+11],Ic:F[b+12],Jc:F[b+13]};a=O(a);return!a||b.sc?0:Eb(a,b)},vb:function(a,b){a=zb[a];b=E(b);0==b.indexOf("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&nb(Y);"OES_vertex_array_object"==b&&ob(Y);"WEBGL_draw_buffers"==b&&pb(Y);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&qb(Y);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&rb(Y);"WEBGL_multi_draw"==b&&sb(Y);return!!a.$b.getExtension(b)},Ka:function(a){a>>=2;for(var b=0;14>b;++b)F[a+
b]=0;F[a]=F[a+1]=F[a+3]=F[a+4]=F[a+8]=F[a+10]=1},Ba:function(a){X=zb[a];f.yc=Y=X&&X.$b;return!a||Y?0:-5},ma:function(){return 0},fb:function(a,b,c,d){a=Qa.Dc(a);b=Qa.Bc(a,b,c);F[d>>2]=b;return 0},cb:function(){},hb:function(a,b,c,d){for(var e=0,h=0;h<c;h++){for(var g=F[b+8*h>>2],m=F[b+(8*h+4)>>2],n=0;n<m;n++){var p=D[g+n],q=Pa[a];0===p||10===p?((1===a?la:y)(ua(q,0)),q.length=0):q.push(p)}e+=m}F[d>>2]=e;return 0},c:function(a){Y.activeTexture(a)},D:function(a,b){Y.attachShader(S[a],U[b])},b:function(a,
b){35051==a?Y.fc=b:35052==a&&(Y.Vb=b);Y.bindBuffer(a,ub[b])},h:function(a,b){Y.bindFramebuffer(a,vb[b])},H:function(a,b){Y.bindRenderbuffer(a,wb[b])},a:function(a,b){Y.bindTexture(a,xb[b])},S:function(a){Y.bindVertexArray(yb[a])},O:function(a,b,c,d){Y.blendColor(a,b,c,d)},P:function(a,b){Y.blendEquationSeparate(a,b)},Q:function(a,b,c,d){Y.blendFuncSeparate(a,b,c,d)},q:function(a,b,c,d,e,h,g,m,n,p){Y.blitFramebuffer(a,b,c,d,e,h,g,m,n,p)},J:function(a,b,c,d){2<=X.version?c?Y.bufferData(a,D,d,c,b):Y.bufferData(a,
b,d):Y.bufferData(a,c?D.subarray(c,c+b):b,d)},m:function(a,b,c,d){2<=X.version?Y.bufferSubData(a,b,D,d,c):Y.bufferSubData(a,b,D.subarray(d,d+c))},tb:function(a){Y.clear(a)},ta:function(a,b,c,d){Y.clearColor(a,b,c,d)},sa:function(a){Y.clearDepth(a)},ub:function(a){Y.clearStencil(a)},j:function(a,b,c,d){Y.colorMask(!!a,!!b,!!c,!!d)},xa:function(a){Y.compileShader(U[a])},Ha:function(a,b,c,d,e,h,g,m){2<=X.version?Y.Vb?Y.compressedTexImage2D(a,b,c,d,e,h,g,m):Y.compressedTexImage2D(a,b,c,d,e,h,D,m,g):Y.compressedTexImage2D(a,
b,c,d,e,h,m?D.subarray(m,m+g):null)},Fa:function(a,b,c,d,e,h,g,m,n){Y.Vb?Y.compressedTexImage3D(a,b,c,d,e,h,g,m,n):Y.compressedTexImage3D(a,b,c,d,e,h,g,D,n,m)},Da:function(){var a=W(S),b=Y.createProgram();b.name=a;S[a]=b;return a},za:function(a){var b=W(U);U[b]=Y.createShader(a);return b},L:function(a){Y.cullFace(a)},Ra:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],e=ub[d];e&&(Y.deleteBuffer(e),e.name=0,ub[d]=null,d==Y.fc&&(Y.fc=0),d==Y.Vb&&(Y.Vb=0))}},i:function(a,b){for(var c=0;c<a;++c){var d=
F[b+4*c>>2],e=vb[d];e&&(Y.deleteFramebuffer(e),e.name=0,vb[d]=null)}},y:function(a){if(a){var b=S[a];b?(Y.deleteProgram(b),b.name=0,S[a]=null,Ab[a]=null):V(1281)}},U:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],e=wb[d];e&&(Y.deleteRenderbuffer(e),e.name=0,wb[d]=null)}},u:function(a){if(a){var b=U[a];b?(Y.deleteShader(b),U[a]=null):V(1281)}},Qa:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],e=xb[d];e&&(Y.deleteTexture(e),e.name=0,xb[d]=null)}},Pa:function(a,b){for(var c=0;c<a;c++){var d=
F[b+4*c>>2];Y.deleteVertexArray(yb[d]);yb[d]=null}},x:function(a){Y.depthFunc(a)},w:function(a){Y.depthMask(!!a)},d:function(a){Y.disable(a)},R:function(a){Y.disableVertexAttribArray(a)},jb:function(a,b,c){Y.drawArrays(a,b,c)},kb:function(a,b,c,d){Y.drawElements(a,b,c,d)},g:function(a){Y.enable(a)},qb:function(a){Y.enableVertexAttribArray(a)},M:function(a){Y.frontFace(a)},K:function(a,b){Ib(a,b,"createBuffer",ub)},I:function(a,b){Ib(a,b,"createRenderbuffer",wb)},Ia:function(a,b){Ib(a,b,"createTexture",
xb)},Oa:function(a,b){Ib(a,b,"createVertexArray",yb)},va:function(a,b){return Y.getAttribLocation(S[a],E(b))},e:function(a,b){Jb(a,b)},Aa:function(a,b,c,d){a=Y.getProgramInfoLog(S[a]);null===a&&(a="(unknown error)");b=0<b&&d?C(a,D,d,b):0;c&&(F[c>>2]=b)},C:function(a,b,c){if(c)if(a>=tb)V(1281);else{var d=Ab[a];if(d)if(35716==b)a=Y.getProgramInfoLog(S[a]),null===a&&(a="(unknown error)"),F[c>>2]=a.length+1;else if(35719==b)F[c>>2]=d.bc;else if(35722==b){if(-1==d.Wb){a=S[a];var e=Y.getProgramParameter(a,
35721);for(b=d.Wb=0;b<e;++b)d.Wb=Math.max(d.Wb,Y.getActiveAttrib(a,b).name.length+1)}F[c>>2]=d.Wb}else if(35381==b){if(-1==d.Xb)for(a=S[a],e=Y.getProgramParameter(a,35382),b=d.Xb=0;b<e;++b)d.Xb=Math.max(d.Xb,Y.getActiveUniformBlockName(a,b).length+1);F[c>>2]=d.Xb}else F[c>>2]=Y.getProgramParameter(S[a],b);else V(1282)}else V(1281)},wa:function(a,b,c,d){a=Y.getShaderInfoLog(U[a]);null===a&&(a="(unknown error)");b=0<b&&d?C(a,D,d,b):0;c&&(F[c>>2]=b)},A:function(a,b,c){c?35716==b?(a=Y.getShaderInfoLog(U[a]),
null===a&&(a="(unknown error)"),F[c>>2]=a?a.length+1:0):35720==b?(a=Y.getShaderSource(U[a]),F[c>>2]=a?a.length+1:0):F[c>>2]=Y.getShaderParameter(U[a],b):V(1281)},Ta:function(a){if(Bb[a])return Bb[a];switch(a){case 7939:var b=Y.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Kb(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Y.getParameter(a))||V(1280);b=Kb(b);break;case 7938:b=Y.getParameter(7938);b=2<=X.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+
b+")";b=Kb(b);break;case 35724:b=Y.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Kb(b);break;default:return V(1280),0}return Bb[a]=b},Sa:function(a,b){if(2>X.version)return V(1282),0;var c=Cb[a];if(c)return 0>b||b>=c.length?(V(1281),0):c[b];switch(a){case 7939:return c=Y.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return Kb(d)}),c=
Cb[a]=c,0>b||b>=c.length?(V(1281),0):c[b];default:return V(1280),0}},l:function(a,b){b=E(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,d)}return(a=Ab[a]&&Ab[a].qc[b])&&0<=c&&c<a[0]?a[1]+c:-1},Ca:function(a){Y.linkProgram(S[a]);var b=S[a];a=Ab[a]={qc:{},bc:0,Wb:-1,Xb:-1};for(var c=a.qc,d=Y.getProgramParameter(b,35718),e=0;e<d;++e){var h=Y.getActiveUniform(b,e),g=h.name;a.bc=Math.max(a.bc,g.length+1);"]"==g.slice(-1)&&(g=g.slice(0,g.lastIndexOf("[")));
var m=Y.getUniformLocation(b,g);if(m){var n=W(T);c[g]=[h.size,n];T[n]=m;for(var p=1;p<h.size;++p)m=Y.getUniformLocation(b,g+"["+p+"]"),n=W(T),T[n]=m}}},N:function(a,b){Y.polygonOffset(a,b)},r:function(a){Y.readBuffer(a)},Ja:function(a,b,c,d){Y.renderbufferStorage(a,b,c,d)},G:function(a,b,c,d,e){Y.renderbufferStorageMultisample(a,b,c,d,e)},s:function(a,b,c,d){Y.scissor(a,b,c,d)},ya:function(a,b,c,d){for(var e="",h=0;h<b;++h){var g=d?F[d+4*h>>2]:-1;e+=E(F[c+4*h>>2],0>g?void 0:g)}Y.shaderSource(U[a],
e)},Ma:function(a,b,c){Y.stencilFunc(a,b,c)},ra:function(a,b,c,d){Y.stencilFuncSeparate(a,b,c,d)},v:function(a){Y.stencilMask(a)},La:function(a,b,c){Y.stencilOp(a,b,c)},qa:function(a,b,c,d){Y.stencilOpSeparate(a,b,c,d)},Ga:function(a,b,c,d,e,h,g,m,n){if(2<=X.version)if(Y.Vb)Y.texImage2D(a,b,c,d,e,h,g,m,n);else if(n){var p=Lb(m);Y.texImage2D(a,b,c,d,e,h,g,m,p,n>>31-Math.clz32(p.BYTES_PER_ELEMENT))}else Y.texImage2D(a,b,c,d,e,h,g,m,null);else{p=Y;var q=p.texImage2D;if(n){var aa=Lb(m),P=31-Math.clz32(aa.BYTES_PER_ELEMENT);
n=aa.subarray(n>>P,n+e*(d*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[g-6402]||1)*(1<<P)+4-1&-4)>>P)}else n=null;q.call(p,a,b,c,d,e,h,g,m,n)}},Ea:function(a,b,c,d,e,h,g,m,n,p){if(Y.Vb)Y.texImage3D(a,b,c,d,e,h,g,m,n,p);else if(p){var q=Lb(n);Y.texImage3D(a,b,c,d,e,h,g,m,n,q,p>>31-Math.clz32(q.BYTES_PER_ELEMENT))}else Y.texImage3D(a,b,c,d,e,h,g,m,n,null)},E:function(a,b,c){Y.texParameterf(a,b,c)},f:function(a,b,c){Y.texParameteri(a,b,c)},pb:function(a,b,c){if(2<=X.version)Y.uniform1fv(T[a],
G,c>>2,b);else{if(288>=b)for(var d=Z[b-1],e=0;e<b;++e)d[e]=G[c+4*e>>2];else d=G.subarray(c>>2,c+4*b>>2);Y.uniform1fv(T[a],d)}},B:function(a,b){Y.uniform1i(T[a],b)},ob:function(a,b,c){if(2<=X.version)Y.uniform2fv(T[a],G,c>>2,2*b);else{if(144>=b)for(var d=Z[2*b-1],e=0;e<2*b;e+=2)d[e]=G[c+4*e>>2],d[e+1]=G[c+(4*e+4)>>2];else d=G.subarray(c>>2,c+8*b>>2);Y.uniform2fv(T[a],d)}},nb:function(a,b,c){if(2<=X.version)Y.uniform3fv(T[a],G,c>>2,3*b);else{if(96>=b)for(var d=Z[3*b-1],e=0;e<3*b;e+=3)d[e]=G[c+4*e>>
2],d[e+1]=G[c+(4*e+4)>>2],d[e+2]=G[c+(4*e+8)>>2];else d=G.subarray(c>>2,c+12*b>>2);Y.uniform3fv(T[a],d)}},mb:function(a,b,c){if(2<=X.version)Y.uniform4fv(T[a],G,c>>2,4*b);else{if(72>=b){var d=Z[4*b-1],e=G;c>>=2;for(var h=0;h<4*b;h+=4){var g=c+h;d[h]=e[g];d[h+1]=e[g+1];d[h+2]=e[g+2];d[h+3]=e[g+3]}}else d=G.subarray(c>>2,c+16*b>>2);Y.uniform4fv(T[a],d)}},lb:function(a,b,c,d){if(2<=X.version)Y.uniformMatrix4fv(T[a],!!c,G,d>>2,16*b);else{if(18>=b){var e=Z[16*b-1],h=G;d>>=2;for(var g=0;g<16*b;g+=16){var m=
d+g;e[g]=h[m];e[g+1]=h[m+1];e[g+2]=h[m+2];e[g+3]=h[m+3];e[g+4]=h[m+4];e[g+5]=h[m+5];e[g+6]=h[m+6];e[g+7]=h[m+7];e[g+8]=h[m+8];e[g+9]=h[m+9];e[g+10]=h[m+10];e[g+11]=h[m+11];e[g+12]=h[m+12];e[g+13]=h[m+13];e[g+14]=h[m+14];e[g+15]=h[m+15]}}else e=G.subarray(d>>2,d+64*b>>2);Y.uniformMatrix4fv(T[a],!!c,e)}},k:function(a){Y.useProgram(S[a])},rb:function(a,b){Y.vertexAttribDivisor(a,b)},sb:function(a,b,c,d,e,h){Y.vertexAttribPointer(a,b,c,!!d,e,h)},t:function(a,b,c,d){Y.viewport(a,b,c,d)},bb:function(){f.kc=
function(a){0!=Ob()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",f.kc)},ab:function(){f.pc=function(a){a=a.clipboardData.getData("text");pa("_sapp_emsc_onpaste",["string"],[a])};window.addEventListener("paste",f.pc)},$a:function(a){f.Kc=[];a=E(a);a=document.getElementById(a);f.lc=function(b){b.stopPropagation();b.preventDefault()};f.mc=function(b){b.stopPropagation();b.preventDefault()};f.nc=function(b){b.stopPropagation();b.preventDefault()};f.oc=function(b){b.stopPropagation();
b.preventDefault();var c=b.dataTransfer.files;f.Lc=c;Pb(c.length);var d;for(d=0;d<c.length;d++)pa("_sapp_emsc_drop",["number","string"],[d,c[d].name]);Qb(b.clientX,b.clientY)};a.addEventListener("dragenter",f.lc,!1);a.addEventListener("dragleave",f.mc,!1);a.addEventListener("dragover",f.nc,!1);a.addEventListener("drop",f.oc,!1)},Va:function(){var a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},p:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";
a.autocapitalize="none";a.addEventListener("focusout",function(){Rb()});document.body.append(a)},o:function(){document.getElementById("_sokol_app_input_element").focus()},wb:function(a){a=E(a);f.Yb=document.getElementById(a);f.Yb||console.log("sokol_app.h: invalid target:"+a);f.Yb.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Za:function(){window.removeEventListener("beforeunload",f.kc)},Ya:function(){window.removeEventListener("paste",f.pc)},Xa:function(a){a=
E(a);a=document.getElementById(a);a.removeEventListener("dragenter",f.lc);a.removeEventListener("dragleave",f.mc);a.removeEventListener("dragover",f.nc);a.removeEventListener("drop",f.oc)},z:function(){f.Yb&&f.Yb.requestPointerLock&&f.Yb.requestPointerLock()},Ua:function(a,b,c){var d=document.createElement("canvas");d.width=a;d.height=b;var e=d.getContext("2d"),h=e.createImageData(a,b);h.data.set(D.subarray(c,c+a*b*4));e.putImageData(h,0,0);a=document.createElement("link");a.id="sokol-app-favicon";
a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},n:function(){document.getElementById("_sokol_app_input_element").blur()},Wa:function(a){a=E(a);var b=document.createElement("textarea");b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");b.setAttribute("spellcheck","false");b.style.left="-100px";b.style.top="-100px";b.style.height=1;b.style.width=1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");
document.body.removeChild(b)},na:function(){return navigator.userAgent.includes("Macintosh")?1:0},ua:function(){return performance.now()}};
(function(){function a(e){f.asm=e.exports;ma=f.asm.xb;Ba();I=f.asm.Qb;Da.unshift(f.asm.yb);J--;f.monitorRunDependencies&&f.monitorRunDependencies(J);0==J&&(null!==Ia&&(clearInterval(Ia),Ia=null),K&&(e=K,K=null,e()))}function b(e){a(e.instance)}function c(e){return Na().then(function(h){return WebAssembly.instantiate(h,d)}).then(e,function(h){y("failed to asynchronously prepare wasm: "+h);x(h)})}var d={a:Sb};J++;f.monitorRunDependencies&&f.monitorRunDependencies(J);if(f.instantiateWasm)try{return f.instantiateWasm(d,
a)}catch(e){return y("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return z||"function"!==typeof WebAssembly.instantiateStreaming||Ka()||Ja("file://")||"function"!==typeof fetch?c(b):fetch(L,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(h){y("wasm streaming compile failed: "+h);y("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
f.___wasm_call_ctors=function(){return(f.___wasm_call_ctors=f.asm.yb).apply(null,arguments)};var Q=f._malloc=function(){return(Q=f._malloc=f.asm.zb).apply(null,arguments)},Rb=f.__sapp_emsc_notify_keyboard_hidden=function(){return(Rb=f.__sapp_emsc_notify_keyboard_hidden=f.asm.Ab).apply(null,arguments)};f.__sapp_emsc_onpaste=function(){return(f.__sapp_emsc_onpaste=f.asm.Bb).apply(null,arguments)};
var Ob=f.__sapp_html5_get_ask_leave_site=function(){return(Ob=f.__sapp_html5_get_ask_leave_site=f.asm.Cb).apply(null,arguments)},Pb=f.__sapp_emsc_begin_drop=function(){return(Pb=f.__sapp_emsc_begin_drop=f.asm.Db).apply(null,arguments)};f.__sapp_emsc_drop=function(){return(f.__sapp_emsc_drop=f.asm.Eb).apply(null,arguments)};var Qb=f.__sapp_emsc_end_drop=function(){return(Qb=f.__sapp_emsc_end_drop=f.asm.Fb).apply(null,arguments)};
f.__sapp_emsc_invoke_fetch_cb=function(){return(f.__sapp_emsc_invoke_fetch_cb=f.asm.Gb).apply(null,arguments)};f._main=function(){return(f._main=f.asm.Hb).apply(null,arguments)};f.__saudio_emsc_pull=function(){return(f.__saudio_emsc_pull=f.asm.Ib).apply(null,arguments)};f.__sfetch_emsc_head_response=function(){return(f.__sfetch_emsc_head_response=f.asm.Jb).apply(null,arguments)};f.__sfetch_emsc_get_response=function(){return(f.__sfetch_emsc_get_response=f.asm.Kb).apply(null,arguments)};
f.__sfetch_emsc_failed_http_status=function(){return(f.__sfetch_emsc_failed_http_status=f.asm.Lb).apply(null,arguments)};f.__sfetch_emsc_failed_buffer_too_small=function(){return(f.__sfetch_emsc_failed_buffer_too_small=f.asm.Mb).apply(null,arguments)};
var ra=f.stackSave=function(){return(ra=f.stackSave=f.asm.Nb).apply(null,arguments)},sa=f.stackRestore=function(){return(sa=f.stackRestore=f.asm.Ob).apply(null,arguments)},A=f.stackAlloc=function(){return(A=f.stackAlloc=f.asm.Pb).apply(null,arguments)},Tb;function ka(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}K=function Ub(){Tb||Vb();Tb||(K=Ub)};
function Vb(a){function b(){if(!Tb&&(Tb=!0,f.calledRun=!0,!na)){Oa(Da);Oa(Ea);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if(Wb){var c=a,d=f._main;c=c||[];var e=c.length+1,h=A(4*(e+1));F[h>>2]=wa(ba);for(var g=1;g<e;g++)F[(h>>2)+g]=wa(c[g-1]);F[(h>>2)+e]=0;try{var m=d(e,h);if(!noExitRuntime||0!==m){if(!noExitRuntime){if(f.onExit)f.onExit(m);na=!0}t(m,new ka(m))}}catch(n){n instanceof ka||"unwind"==n||((c=n)&&"object"===typeof n&&n.stack&&(c=[n,n.stack]),y("exception thrown: "+c),t(1,n))}finally{}}if(f.postRun)for("function"==
typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;)c=f.postRun.shift(),Ga.unshift(c);Oa(Ga)}}a=a||r;if(!(0<J)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Ha();Oa(Ca);0<J||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},1)):b())}}f.run=Vb;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var Wb=!0;f.noInitialRun&&(Wb=!1);Vb();
