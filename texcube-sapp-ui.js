
var f;f||(f=typeof Module !== 'undefined' ? Module : {});var k={},l;for(l in f)f.hasOwnProperty(l)&&(k[l]=f[l]);var r=[],aa="./this.program";function t(a,b){throw b;}var ba=!1,u=!1,ca=!1,da=!1;ba="object"===typeof window;u="function"===typeof importScripts;ca="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;da=!ba&&!ca&&!u;var v="",ea,fa,x,ha,ia;
if(ca)v=u?require("path").dirname(v)+"/":__dirname+"/",ea=function(a,b){ha||(ha=require("fs"));ia||(ia=require("path"));a=ia.normalize(a);return ha.readFileSync(a,b?null:"utf8")},x=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/")),r=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=f),process.on("uncaughtException",function(a){if(!(a instanceof ja))throw a;}),process.on("unhandledRejection",
y),t=function(a){process.exit(a)},f.inspect=function(){return"[Emscripten Module object]"};else if(da)"undefined"!=typeof read&&(ea=function(a){return read(a)}),x=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?r=scriptArgs:"undefined"!=typeof arguments&&(r=arguments),"function"===typeof quit&&(t=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===typeof console&&
(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(ba||u)u?v=self.location.href:"undefined"!==typeof document&&document.currentScript&&(v=document.currentScript.src),v=0!==v.indexOf("blob:")?v.substr(0,v.lastIndexOf("/")+1):"",ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},u&&(x=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),
fa=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};var ka=f.print||console.log.bind(console),z=f.printErr||console.warn.bind(console);for(l in k)k.hasOwnProperty(l)&&(f[l]=k[l]);k=null;f.arguments&&(r=f.arguments);f.thisProgram&&(aa=f.thisProgram);f.quit&&(t=f.quit);var A;f.wasmBinary&&(A=f.wasmBinary);var noExitRuntime=f.noExitRuntime||!0;
"object"!==typeof WebAssembly&&y("no native wasm support detected");var la,ma=!1;function assert(a,b){a||y("Assertion failed: "+b)}function na(a){var b=f["_"+a];assert(b,"Cannot call unknown function "+a+", make sure it is exported");return b}
function oa(a,b,c){var d={string:function(n){var q=0;if(null!==n&&void 0!==n&&0!==n){var p=(n.length<<2)+1;q=C(p);D(n,E,q,p)}return q},array:function(n){var q=C(n.length);pa.set(n,q);return q}};a=na(a);var e=[],h=0;if(c)for(var g=0;g<c.length;g++){var m=d[b[g]];m?(0===h&&(h=qa()),e[g]=m(c[g])):e[g]=c[g]}a.apply(null,e);0!==h&&ra(h)}var sa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function ta(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&sa)return sa.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var h=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|h);else{var g=a[b++]&63;e=224==(e&240)?(e&15)<<12|h<<6|g:(e&7)<<18|h<<12|g<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function F(a,b){return a?ta(E,a,b):""}
function D(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var h=0;h<a.length;++h){var g=a.charCodeAt(h);if(55296<=g&&57343>=g){var m=a.charCodeAt(++h);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-e}
function ua(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function va(a){var b=ua(a)+1,c=C(b);D(a,pa,c,b);return c}var wa,pa,E,xa,ya,H,za,I,J;
function Aa(){var a=la.buffer;wa=a;f.HEAP8=pa=new Int8Array(a);f.HEAP16=xa=new Int16Array(a);f.HEAP32=H=new Int32Array(a);f.HEAPU8=E=new Uint8Array(a);f.HEAPU16=ya=new Uint16Array(a);f.HEAPU32=za=new Uint32Array(a);f.HEAPF32=I=new Float32Array(a);f.HEAPF64=J=new Float64Array(a)}var K,Ba=[],Ca=[],Da=[],Ea=[],Fa=[];function Ga(){var a=f.preRun.shift();Ba.unshift(a)}var L=0,Ha=null,M=null;f.preloadedImages={};f.preloadedAudios={};
function y(a){if(f.onAbort)f.onAbort(a);z(a);ma=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}function Ia(){return N.startsWith("data:application/octet-stream;base64,")}var N="texcube-sapp-ui.wasm";if(!Ia()){var Ja=N;N=f.locateFile?f.locateFile(Ja,v):v+Ja}function Ka(){var a=N;try{if(a==N&&A)return new Uint8Array(A);if(x)return x(a);throw"both async and sync fetching of the wasm failed";}catch(b){y(b)}}
function La(){if(!A&&(ba||u)){if("function"===typeof fetch&&!N.startsWith("file://"))return fetch(N,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+N+"'";return a.arrayBuffer()}).catch(function(){return Ka()});if(fa)return new Promise(function(a,b){fa(N,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ka()})}
function Ma(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(f);else{var c=b.Ec;"number"===typeof c?void 0===b.ac?K.get(c)():K.get(c)(b.ac):c(void 0===b.ac?null:b.ac)}}}var Na=[null,[],[]],Oa={},Pa=0;function Qa(){for(var a=O.length-1;0<=a;--a)Ra(a);O=[];Sa=[]}var Sa=[];function Ta(){if(Pa&&Ua.Vb)for(var a=0;a<Sa.length;++a){var b=Sa[a];Sa.splice(a,1);--a;b.Oc.apply(null,b.Ac)}}var O=[];function Ra(a){var b=O[a];b.target.removeEventListener(b.Pb,b.tc,b.Qb);O.splice(a,1)}
function P(a){function b(d){++Pa;Ua=a;Ta();a.Sb(d);Ta();--Pa}if(a.Rb)a.tc=b,a.target.addEventListener(a.Pb,b,a.Qb),O.push(a),Va||(Ea.push(Qa),Va=!0);else for(var c=0;c<O.length;++c)O[c].target==a.target&&O[c].Pb==a.Pb&&Ra(c--)}var Va,Ua,Wa,Xa,Ya,Za,$a,ab,bb=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function Q(a){a=2<a?F(a):a;return bb[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}
function cb(a){return 0>bb.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}function db(a,b,c,d,e,h){Wa||(Wa=R(164));a={target:Q(a),Vb:!0,Pb:h,Rb:d,Sb:function(g){var m=Wa,n=m>>2;H[n]=g.location;H[n+1]=g.ctrlKey;H[n+2]=g.shiftKey;H[n+3]=g.altKey;H[n+4]=g.metaKey;H[n+5]=g.repeat;H[n+6]=g.charCode;H[n+7]=g.keyCode;H[n+8]=g.which;D(g.key||"",E,m+36,32);D(g.code||"",E,m+68,32);D(g.char||"",E,m+100,32);D(g.locale||"",E,m+132,32);K.get(d)(e,m,b)&&g.preventDefault()},Qb:c};P(a)}
function eb(a,b,c){a>>=2;H[a]=b.screenX;H[a+1]=b.screenY;H[a+2]=b.clientX;H[a+3]=b.clientY;H[a+4]=b.ctrlKey;H[a+5]=b.shiftKey;H[a+6]=b.altKey;H[a+7]=b.metaKey;xa[2*a+16]=b.button;xa[2*a+17]=b.buttons;H[a+9]=b.movementX;H[a+10]=b.movementY;c=cb(c);H[a+11]=b.clientX-c.left;H[a+12]=b.clientY-c.top}function S(a,b,c,d,e,h){Xa||(Xa=R(64));a=Q(a);P({target:a,Vb:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,Pb:h,Rb:d,Sb:function(g){g=g||event;eb(Xa,g,a);K.get(d)(e,Xa,b)&&g.preventDefault()},Qb:c})}
function fb(a,b,c,d,e){Ya||(Ya=R(260));P({target:a,Pb:e,Rb:d,Sb:function(h){h=h||event;var g=Ya,m=document.pointerLockElement||document.cc||document.ec||document.dc;H[g>>2]=!!m;var n=m&&m.id?m.id:"";D(m?m==window?"#window":m==screen?"#screen":m&&m.nodeName?m.nodeName:"":"",E,g+4,128);D(n,E,g+132,128);K.get(d)(20,g,b)&&h.preventDefault()},Qb:c})}function gb(a,b,c,d,e){P({target:a,Pb:e,Rb:d,Sb:function(h){h=h||event;K.get(d)(38,0,b)&&h.preventDefault()},Qb:c})}
function hb(a,b,c,d){Za||(Za=R(36));a=Q(a);P({target:a,Pb:"resize",Rb:d,Sb:function(e){e=e||event;if(e.target==a){var h=document.body;if(h){var g=Za;H[g>>2]=e.detail;H[g+4>>2]=h.clientWidth;H[g+8>>2]=h.clientHeight;H[g+12>>2]=innerWidth;H[g+16>>2]=innerHeight;H[g+20>>2]=outerWidth;H[g+24>>2]=outerHeight;H[g+28>>2]=pageXOffset;H[g+32>>2]=pageYOffset;K.get(d)(10,g,b)&&e.preventDefault()}}},Qb:c})}
function ib(a,b,c,d,e,h){$a||($a=R(1684));a=Q(a);P({target:a,Vb:"touchstart"==h||"touchend"==h,Pb:h,Rb:d,Sb:function(g){for(var m={},n=g.touches,q=0;q<n.length;++q){var p=n[q];m[p.identifier]=p}n=g.changedTouches;for(q=0;q<n.length;++q)p=n[q],p.wc=1,m[p.identifier]=p;n=g.targetTouches;for(q=0;q<n.length;++q)m[n[q].identifier].xc=1;n=$a;p=n>>2;H[p+1]=g.ctrlKey;H[p+2]=g.shiftKey;H[p+3]=g.altKey;H[p+4]=g.metaKey;p+=5;var B=cb(a),G=0;for(q in m){var w=m[q];H[p]=w.identifier;H[p+1]=w.screenX;H[p+2]=w.screenY;
H[p+3]=w.clientX;H[p+4]=w.clientY;H[p+5]=w.pageX;H[p+6]=w.pageY;H[p+7]=w.wc;H[p+8]=w.xc;H[p+9]=w.clientX-B.left;H[p+10]=w.clientY-B.top;p+=13;if(31<++G)break}H[n>>2]=G;K.get(d)(e,n,b)&&g.preventDefault()},Qb:c})}function jb(a,b,c,d,e,h){a={target:Q(a),Pb:h,Rb:d,Sb:function(g){g=g||event;K.get(d)(e,0,b)&&g.preventDefault()},Qb:c};P(a)}
function kb(a,b,c,d){ab||(ab=R(96));P({target:a,Vb:!0,Pb:"wheel",Rb:d,Sb:function(e){e=e||event;var h=ab;eb(h,e,a);J[h+64>>3]=e.deltaX;J[h+72>>3]=e.deltaY;J[h+80>>3]=e.deltaZ;H[h+88>>2]=e.deltaMode;K.get(d)(9,h,b)&&e.preventDefault()},Qb:c})}
function lb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,h){b.drawArraysInstancedANGLE(c,d,e,h)},a.drawElementsInstanced=function(c,d,e,h,g){b.drawElementsInstancedANGLE(c,d,e,h,g)})}
function mb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function nb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function ob(a){a.Cc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function pb(a){a.Hc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function qb(a){a.Jc=a.getExtension("WEBGL_multi_draw")}var rb=1,sb=[],T=[],tb=[],ub=[],vb=[],U=[],wb=[],xb=[],yb={},zb={};function V(a){Ab||(Ab=a)}function Bb(a){for(var b=rb++,c=a.length;c<b;c++)a[c]=null;return b}
function Cb(a,b){a.jc||(a.jc=a.getContext,a.getContext=function(d,e){e=a.jc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.kc?a.getContext("webgl2",b):a.getContext("webgl",b);return c?Db(c,b):0}function Db(a,b){var c=Bb(xb),d={Gc:c,attributes:b,version:b.kc,$b:a};a.canvas&&(a.canvas.zc=d);xb[c]=d;("undefined"===typeof b.ic||b.ic)&&Eb(d);return c}
function Eb(a){a||(a=W);if(!a.vc){a.vc=!0;var b=a.$b;lb(b);mb(b);nb(b);ob(b);pb(b);2<=a.version&&(b.hc=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.hc)b.hc=b.getExtension("EXT_disjoint_timer_query");qb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var Ab,W,Fb=["default","low-power","high-performance"];
function Gb(a,b,c,d){for(var e=0;e<a;e++){var h=X[c](),g=h&&Bb(d);h?(h.name=g,d[g]=h):V(1282);H[b+4*e>>2]=g}}
function Hb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=X.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>W.version){V(1282);return}c=2*(X.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>W.version){V(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=X.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":V(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:V(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)H[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){V(1280);z("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:V(1280);z("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}H[b>>2]=c}else V(1281)}
function Ib(a){var b=ua(a)+1,c=R(b);D(a,E,c,b);return c}function Jb(a){a-=5120;return 0==a?pa:1==a?E:2==a?xa:4==a?H:6==a?I:5==a||28922==a||28520==a||30779==a||30782==a?za:ya}function Y(a){var b=X.sc,c=b.Zb[a];0<=c&&(b.Zb[a]=c=X.getUniformLocation(b,b.rc[a]+(0<c?"["+c+"]":"")));return c}for(var Z=[],X,Kb=new Float32Array(288),Lb=0;288>Lb;++Lb)Z[Lb]=Kb.subarray(0,Lb+1);
var Qb={ga:function(){return 0},eb:function(){return 0},gb:function(){},T:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},pa:function(a,b,c){a=Q(a);if(!a)return-4;a=cb(a);J[b>>3]=a.width;J[c>>3]=a.height;return 0},bb:function(a,b,c){E.copyWithin(a,b,b+c)},Na:function(a,b){function c(d){K.get(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},cb:function(a){var b=E.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,
a+100663296);d=Math.max(a,d);0<d%65536&&(d+=65536-d%65536);a:{try{la.grow(Math.min(2147483648,d)-wa.byteLength+65535>>>16);Aa();var e=1;break a}catch(h){}e=void 0}if(e)return!0}return!1},S:function(a,b,c){a=Q(a);if(!a)return-4;a.width=b;a.height=c;return 0},ca:function(a,b,c,d){db(a,b,c,d,2,"keydown");return 0},aa:function(a,b,c,d){db(a,b,c,d,1,"keypress");return 0},ba:function(a,b,c,d){db(a,b,c,d,3,"keyup");return 0},oa:function(a,b,c,d){S(a,b,c,d,5,"mousedown");return 0},fa:function(a,b,c,d){S(a,
b,c,d,33,"mouseenter");return 0},ea:function(a,b,c,d){S(a,b,c,d,34,"mouseleave");return 0},ia:function(a,b,c,d){S(a,b,c,d,8,"mousemove");return 0},ka:function(a,b,c,d){S(a,b,c,d,6,"mouseup");return 0},X:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.cc||document.body.ec||document.body.dc))return-1;a=Q(a);if(!a)return-4;fb(a,b,c,d,"pointerlockchange");fb(a,b,c,d,"mozpointerlockchange");fb(a,b,c,d,"webkitpointerlockchange");fb(a,b,c,d,"mspointerlockchange");
return 0},W:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.cc||document.body.ec||document.body.dc))return-1;a=Q(a);if(!a)return-4;gb(a,b,c,d,"pointerlockerror");gb(a,b,c,d,"mozpointerlockerror");gb(a,b,c,d,"webkitpointerlockerror");gb(a,b,c,d,"mspointerlockerror");return 0},$a:function(a,b,c,d){hb(a,b,c,d);return 0},Y:function(a,b,c,d){ib(a,b,c,d,25,"touchcancel");return 0},Z:function(a,b,c,d){ib(a,b,c,d,23,"touchend");return 0},_:function(a,b,c,d){ib(a,b,c,d,24,
"touchmove");return 0},$:function(a,b,c,d){ib(a,b,c,d,22,"touchstart");return 0},V:function(a,b,c,d){jb(a,b,c,d,31,"webglcontextlost");return 0},U:function(a,b,c,d){jb(a,b,c,d,32,"webglcontextrestored");return 0},da:function(a,b,c,d){a=Q(a);return"undefined"!==typeof a.onwheel?(kb(a,b,c,d),0):-1},I:function(a,b){b>>=2;b={alpha:!!H[b],depth:!!H[b+1],stencil:!!H[b+2],antialias:!!H[b+3],premultipliedAlpha:!!H[b+4],preserveDrawingBuffer:!!H[b+5],powerPreference:Fb[H[b+6]],failIfMajorPerformanceCaveat:!!H[b+
7],kc:H[b+8],Ic:H[b+9],ic:H[b+10],uc:H[b+11],Kc:H[b+12],Lc:H[b+13]};a=Q(a);return!a||b.uc?0:Cb(a,b)},va:function(a,b){a=xb[a];b=F(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&lb(X);"OES_vertex_array_object"==b&&mb(X);"WEBGL_draw_buffers"==b&&nb(X);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&ob(X);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&pb(X);"WEBGL_multi_draw"==b&&qb(X);return!!a.$b.getExtension(b)},Ka:function(a){a>>=2;for(var b=0;14>b;++b)H[a+
b]=0;H[a]=H[a+1]=H[a+3]=H[a+4]=H[a+8]=H[a+10]=1},Da:function(a){W=xb[a];f.Bc=X=W&&W.$b;return!a||X?0:-5},ha:function(){return 0},db:function(a,b,c,d){a=Oa.Fc(a);b=Oa.Dc(a,b,c);H[d>>2]=b;return 0},ab:function(){},fb:function(a,b,c,d){for(var e=0,h=0;h<c;h++){for(var g=H[b+8*h>>2],m=H[b+(8*h+4)>>2],n=0;n<m;n++){var q=E[g+n],p=Na[a];0===q||10===q?((1===a?ka:z)(ta(p,0)),p.length=0):p.push(q)}e+=m}H[d>>2]=e;return 0},b:function(a){X.activeTexture(a)},C:function(a,b){X.attachShader(T[a],U[b])},c:function(a,
b){35051==a?X.fc=b:35052==a&&(X.Tb=b);X.bindBuffer(a,sb[b])},h:function(a,b){X.bindFramebuffer(a,tb[b])},F:function(a,b){X.bindRenderbuffer(a,ub[b])},a:function(a,b){X.bindTexture(a,vb[b])},Q:function(a){X.bindVertexArray(wb[a])},M:function(a,b,c,d){X.blendColor(a,b,c,d)},N:function(a,b){X.blendEquationSeparate(a,b)},O:function(a,b,c,d){X.blendFuncSeparate(a,b,c,d)},q:function(a,b,c,d,e,h,g,m,n,q){X.blitFramebuffer(a,b,c,d,e,h,g,m,n,q)},Ga:function(a,b,c,d){2<=W.version?c?X.bufferData(a,E,d,c,b):
X.bufferData(a,b,d):X.bufferData(a,c?E.subarray(c,c+b):b,d)},H:function(a,b,c,d){2<=W.version?X.bufferSubData(a,b,E,d,c):X.bufferSubData(a,b,E.subarray(d,d+c))},rb:function(a){X.clear(a)},na:function(a,b,c,d){X.clearColor(a,b,c,d)},tb:function(a){X.clearDepth(a)},sb:function(a){X.clearStencil(a)},j:function(a,b,c,d){X.colorMask(!!a,!!b,!!c,!!d)},sa:function(a){X.compileShader(U[a])},Ca:function(a,b,c,d,e,h,g,m){2<=W.version?X.Tb?X.compressedTexImage2D(a,b,c,d,e,h,g,m):X.compressedTexImage2D(a,b,c,
d,e,h,E,m,g):X.compressedTexImage2D(a,b,c,d,e,h,m?E.subarray(m,m+g):null)},Aa:function(a,b,c,d,e,h,g,m,n){X.Tb?X.compressedTexImage3D(a,b,c,d,e,h,g,m,n):X.compressedTexImage3D(a,b,c,d,e,h,g,E,n,m)},ya:function(){var a=Bb(T),b=X.createProgram();b.name=a;b.Yb=b.Wb=b.Xb=0;b.bc=1;T[a]=b;return a},ua:function(a){var b=Bb(U);U[b]=X.createShader(a);return b},J:function(a){X.cullFace(a)},Pa:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],e=sb[d];e&&(X.deleteBuffer(e),e.name=0,sb[d]=null,d==X.fc&&(X.fc=
0),d==X.Tb&&(X.Tb=0))}},i:function(a,b){for(var c=0;c<a;++c){var d=H[b+4*c>>2],e=tb[d];e&&(X.deleteFramebuffer(e),e.name=0,tb[d]=null)}},x:function(a){if(a){var b=T[a];b?(X.deleteProgram(b),b.name=0,T[a]=null):V(1281)}},R:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],e=ub[d];e&&(X.deleteRenderbuffer(e),e.name=0,ub[d]=null)}},t:function(a){if(a){var b=U[a];b?(X.deleteShader(b),U[a]=null):V(1281)}},Oa:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],e=vb[d];e&&(X.deleteTexture(e),e.name=
0,vb[d]=null)}},Ma:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2];X.deleteVertexArray(wb[d]);wb[d]=null}},w:function(a){X.depthFunc(a)},v:function(a){X.depthMask(!!a)},e:function(a){X.disable(a)},P:function(a){X.disableVertexAttribArray(a)},hb:function(a,b,c){X.drawArrays(a,b,c)},ib:function(a,b,c,d){X.drawElements(a,b,c,d)},g:function(a){X.enable(a)},ob:function(a){X.enableVertexAttribArray(a)},K:function(a){X.frontFace(a)},Ha:function(a,b){Gb(a,b,"createBuffer",sb)},G:function(a,b){Gb(a,b,
"createRenderbuffer",ub)},Ea:function(a,b){Gb(a,b,"createTexture",vb)},La:function(a,b){Gb(a,b,"createVertexArray",wb)},qa:function(a,b){return X.getAttribLocation(T[a],F(b))},d:function(a,b){Hb(a,b)},wa:function(a,b,c,d){a=X.getProgramInfoLog(T[a]);null===a&&(a="(unknown error)");b=0<b&&d?D(a,E,d,b):0;c&&(H[c>>2]=b)},B:function(a,b,c){if(c)if(a>=rb)V(1281);else if(a=T[a],35716==b)a=X.getProgramInfoLog(a),null===a&&(a="(unknown error)"),H[c>>2]=a.length+1;else if(35719==b){if(!a.Yb)for(b=0;b<X.getProgramParameter(a,
35718);++b)a.Yb=Math.max(a.Yb,X.getActiveUniform(a,b).name.length+1);H[c>>2]=a.Yb}else if(35722==b){if(!a.Wb)for(b=0;b<X.getProgramParameter(a,35721);++b)a.Wb=Math.max(a.Wb,X.getActiveAttrib(a,b).name.length+1);H[c>>2]=a.Wb}else if(35381==b){if(!a.Xb)for(b=0;b<X.getProgramParameter(a,35382);++b)a.Xb=Math.max(a.Xb,X.getActiveUniformBlockName(a,b).length+1);H[c>>2]=a.Xb}else H[c>>2]=X.getProgramParameter(a,b);else V(1281)},ra:function(a,b,c,d){a=X.getShaderInfoLog(U[a]);null===a&&(a="(unknown error)");
b=0<b&&d?D(a,E,d,b):0;c&&(H[c>>2]=b)},z:function(a,b,c){c?35716==b?(a=X.getShaderInfoLog(U[a]),null===a&&(a="(unknown error)"),H[c>>2]=a?a.length+1:0):35720==b?(a=X.getShaderSource(U[a]),H[c>>2]=a?a.length+1:0):H[c>>2]=X.getShaderParameter(U[a],b):V(1281)},Ra:function(a){var b=yb[a];if(!b){switch(a){case 7939:b=X.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Ib(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=X.getParameter(a))||V(1280);b=b&&Ib(b);break;
case 7938:b=X.getParameter(7938);b=2<=W.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Ib(b);break;case 35724:b=X.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Ib(b);break;default:V(1280)}yb[a]=b}return b},Qa:function(a,b){if(2>W.version)return V(1282),0;var c=zb[a];if(c)return 0>b||b>=c.length?(V(1281),0):c[b];switch(a){case 7939:return c=X.getSupportedExtensions()||[],
c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return Ib(d)}),c=zb[a]=c,0>b||b>=c.length?(V(1281),0):c[b];default:return V(1280),0}},m:function(a,b){function c(w){return"]"==w.slice(-1)&&w.lastIndexOf("[")}b=F(b);a=T[a];var d=a.Zb,e=a.yc,h,g=0,m=b,n=c(b);if(!d)for(a.Zb=d={},a.rc={},h=0;h<X.getProgramParameter(a,35718);++h){var q=X.getActiveUniform(a,h);var p=q.name;q=q.size;var B=c(p);B=0<B?p.slice(0,B):p;var G=a.bc;a.bc+=q;e[B]=[q,G];for(p=0;p<q;++p)d[G]=p,a.rc[G++]=B}0<n&&(g=
parseInt(b.slice(n+1))>>>0,m=b.slice(0,n));return(e=e[m])&&g<e[0]&&(g+=e[1],d[g]=d[g]||X.getUniformLocation(a,b))?g:-1},xa:function(a){a=T[a];X.linkProgram(a);a.Zb=0;a.yc={}},L:function(a,b){X.polygonOffset(a,b)},r:function(a){X.readBuffer(a)},Fa:function(a,b,c,d){X.renderbufferStorage(a,b,c,d)},E:function(a,b,c,d,e){X.renderbufferStorageMultisample(a,b,c,d,e)},s:function(a,b,c,d){X.scissor(a,b,c,d)},ta:function(a,b,c,d){for(var e="",h=0;h<b;++h){var g=d?H[d+4*h>>2]:-1;e+=F(H[c+4*h>>2],0>g?void 0:
g)}X.shaderSource(U[a],e)},Ja:function(a,b,c){X.stencilFunc(a,b,c)},ma:function(a,b,c,d){X.stencilFuncSeparate(a,b,c,d)},u:function(a){X.stencilMask(a)},Ia:function(a,b,c){X.stencilOp(a,b,c)},la:function(a,b,c,d){X.stencilOpSeparate(a,b,c,d)},Ba:function(a,b,c,d,e,h,g,m,n){if(2<=W.version)if(X.Tb)X.texImage2D(a,b,c,d,e,h,g,m,n);else if(n){var q=Jb(m);X.texImage2D(a,b,c,d,e,h,g,m,q,n>>31-Math.clz32(q.BYTES_PER_ELEMENT))}else X.texImage2D(a,b,c,d,e,h,g,m,null);else{q=X;var p=q.texImage2D;if(n){var B=
Jb(m),G=31-Math.clz32(B.BYTES_PER_ELEMENT);n=B.subarray(n>>G,n+e*(d*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[g-6402]||1)*(1<<G)+4-1&-4)>>G)}else n=null;p.call(q,a,b,c,d,e,h,g,m,n)}},za:function(a,b,c,d,e,h,g,m,n,q){if(X.Tb)X.texImage3D(a,b,c,d,e,h,g,m,n,q);else if(q){var p=Jb(n);X.texImage3D(a,b,c,d,e,h,g,m,n,p,q>>31-Math.clz32(p.BYTES_PER_ELEMENT))}else X.texImage3D(a,b,c,d,e,h,g,m,n,null)},D:function(a,b,c){X.texParameterf(a,b,c)},f:function(a,b,c){X.texParameteri(a,b,c)},
nb:function(a,b,c){if(2<=W.version)X.uniform1fv(Y(a),I,c>>2,b);else{if(288>=b)for(var d=Z[b-1],e=0;e<b;++e)d[e]=I[c+4*e>>2];else d=I.subarray(c>>2,c+4*b>>2);X.uniform1fv(Y(a),d)}},A:function(a,b){X.uniform1i(Y(a),b)},mb:function(a,b,c){if(2<=W.version)X.uniform2fv(Y(a),I,c>>2,2*b);else{if(144>=b)for(var d=Z[2*b-1],e=0;e<2*b;e+=2)d[e]=I[c+4*e>>2],d[e+1]=I[c+(4*e+4)>>2];else d=I.subarray(c>>2,c+8*b>>2);X.uniform2fv(Y(a),d)}},lb:function(a,b,c){if(2<=W.version)X.uniform3fv(Y(a),I,c>>2,3*b);else{if(96>=
b)for(var d=Z[3*b-1],e=0;e<3*b;e+=3)d[e]=I[c+4*e>>2],d[e+1]=I[c+(4*e+4)>>2],d[e+2]=I[c+(4*e+8)>>2];else d=I.subarray(c>>2,c+12*b>>2);X.uniform3fv(Y(a),d)}},kb:function(a,b,c){if(2<=W.version)X.uniform4fv(Y(a),I,c>>2,4*b);else{if(72>=b){var d=Z[4*b-1],e=I;c>>=2;for(var h=0;h<4*b;h+=4){var g=c+h;d[h]=e[g];d[h+1]=e[g+1];d[h+2]=e[g+2];d[h+3]=e[g+3]}}else d=I.subarray(c>>2,c+16*b>>2);X.uniform4fv(Y(a),d)}},jb:function(a,b,c,d){if(2<=W.version)X.uniformMatrix4fv(Y(a),!!c,I,d>>2,16*b);else{if(18>=b){var e=
Z[16*b-1],h=I;d>>=2;for(var g=0;g<16*b;g+=16){var m=d+g;e[g]=h[m];e[g+1]=h[m+1];e[g+2]=h[m+2];e[g+3]=h[m+3];e[g+4]=h[m+4];e[g+5]=h[m+5];e[g+6]=h[m+6];e[g+7]=h[m+7];e[g+8]=h[m+8];e[g+9]=h[m+9];e[g+10]=h[m+10];e[g+11]=h[m+11];e[g+12]=h[m+12];e[g+13]=h[m+13];e[g+14]=h[m+14];e[g+15]=h[m+15]}}else e=I.subarray(d>>2,d+64*b>>2);X.uniformMatrix4fv(Y(a),!!c,e)}},k:function(a){a=T[a];X.useProgram(a);X.sc=a},pb:function(a,b){X.vertexAttribDivisor(a,b)},qb:function(a,b,c,d,e,h){X.vertexAttribPointer(a,b,c,!!d,
e,h)},l:function(a,b,c,d){X.viewport(a,b,c,d)},_a:function(){f.lc=function(a){0!=Mb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",f.lc)},Za:function(){f.qc=function(a){a=a.clipboardData.getData("text");oa("_sapp_emsc_onpaste",["string"],[a])};window.addEventListener("paste",f.qc)},Ya:function(a){f.Mc=[];a=F(a);a=document.getElementById(a);f.mc=function(b){b.stopPropagation();b.preventDefault()};f.nc=function(b){b.stopPropagation();b.preventDefault()};f.oc=function(b){b.stopPropagation();
b.preventDefault()};f.pc=function(b){b.stopPropagation();b.preventDefault();var c=b.dataTransfer.files;f.Nc=c;Nb(c.length);var d;for(d=0;d<c.length;d++)oa("_sapp_emsc_drop",["number","string"],[d,c[d].name]);Ob(b.clientX,b.clientY)};a.addEventListener("dragenter",f.mc,!1);a.addEventListener("dragleave",f.nc,!1);a.addEventListener("dragover",f.oc,!1);a.addEventListener("drop",f.pc,!1)},Ta:function(){var a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},p:function(){var a=
document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Pb()});document.body.append(a)},o:function(){document.getElementById("_sokol_app_input_element").focus()},ub:function(a){a=F(a);f.Ub=document.getElementById(a);f.Ub||console.log("sokol_app.h: invalid target:"+a);f.Ub.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Xa:function(){window.removeEventListener("beforeunload",
f.lc)},Wa:function(){window.removeEventListener("paste",f.qc)},Va:function(a){a=F(a);a=document.getElementById(a);a.removeEventListener("dragenter",f.mc);a.removeEventListener("dragleave",f.nc);a.removeEventListener("dragover",f.oc);a.removeEventListener("drop",f.pc)},y:function(){f.Ub&&f.Ub.requestPointerLock&&f.Ub.requestPointerLock()},Sa:function(a,b,c){var d=document.createElement("canvas");d.width=a;d.height=b;var e=d.getContext("2d"),h=e.createImageData(a,b);h.data.set(E.subarray(c,c+a*b*4));
e.putImageData(h,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},n:function(){document.getElementById("_sokol_app_input_element").blur()},Ua:function(a){a=F(a);var b=document.createElement("textarea");b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");b.setAttribute("spellcheck","false");b.style.left="-100px";b.style.top="-100px";b.style.height=1;b.style.width=
1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");document.body.removeChild(b)},ja:function(){return navigator.userAgent.includes("Macintosh")?1:0}};
(function(){function a(e){f.asm=e.exports;la=f.asm.vb;Aa();K=f.asm.Ob;Ca.unshift(f.asm.wb);L--;f.monitorRunDependencies&&f.monitorRunDependencies(L);0==L&&(null!==Ha&&(clearInterval(Ha),Ha=null),M&&(e=M,M=null,e()))}function b(e){a(e.instance)}function c(e){return La().then(function(h){return WebAssembly.instantiate(h,d)}).then(e,function(h){z("failed to asynchronously prepare wasm: "+h);y(h)})}var d={a:Qb};L++;f.monitorRunDependencies&&f.monitorRunDependencies(L);if(f.instantiateWasm)try{return f.instantiateWasm(d,
a)}catch(e){return z("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return A||"function"!==typeof WebAssembly.instantiateStreaming||Ia()||N.startsWith("file://")||"function"!==typeof fetch?c(b):fetch(N,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(h){z("wasm streaming compile failed: "+h);z("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
f.___wasm_call_ctors=function(){return(f.___wasm_call_ctors=f.asm.wb).apply(null,arguments)};var Pb=f.__sapp_emsc_notify_keyboard_hidden=function(){return(Pb=f.__sapp_emsc_notify_keyboard_hidden=f.asm.xb).apply(null,arguments)};f.__sapp_emsc_onpaste=function(){return(f.__sapp_emsc_onpaste=f.asm.yb).apply(null,arguments)};
var Mb=f.__sapp_html5_get_ask_leave_site=function(){return(Mb=f.__sapp_html5_get_ask_leave_site=f.asm.zb).apply(null,arguments)},Nb=f.__sapp_emsc_begin_drop=function(){return(Nb=f.__sapp_emsc_begin_drop=f.asm.Ab).apply(null,arguments)};f.__sapp_emsc_drop=function(){return(f.__sapp_emsc_drop=f.asm.Bb).apply(null,arguments)};var Ob=f.__sapp_emsc_end_drop=function(){return(Ob=f.__sapp_emsc_end_drop=f.asm.Cb).apply(null,arguments)};
f.__sapp_emsc_invoke_fetch_cb=function(){return(f.__sapp_emsc_invoke_fetch_cb=f.asm.Db).apply(null,arguments)};f._main=function(){return(f._main=f.asm.Eb).apply(null,arguments)};f.__saudio_emsc_pull=function(){return(f.__saudio_emsc_pull=f.asm.Fb).apply(null,arguments)};f.__sfetch_emsc_head_response=function(){return(f.__sfetch_emsc_head_response=f.asm.Gb).apply(null,arguments)};f.__sfetch_emsc_get_response=function(){return(f.__sfetch_emsc_get_response=f.asm.Hb).apply(null,arguments)};
f.__sfetch_emsc_failed_http_status=function(){return(f.__sfetch_emsc_failed_http_status=f.asm.Ib).apply(null,arguments)};f.__sfetch_emsc_failed_buffer_too_small=function(){return(f.__sfetch_emsc_failed_buffer_too_small=f.asm.Jb).apply(null,arguments)};
var R=f._malloc=function(){return(R=f._malloc=f.asm.Kb).apply(null,arguments)},qa=f.stackSave=function(){return(qa=f.stackSave=f.asm.Lb).apply(null,arguments)},ra=f.stackRestore=function(){return(ra=f.stackRestore=f.asm.Mb).apply(null,arguments)},C=f.stackAlloc=function(){return(C=f.stackAlloc=f.asm.Nb).apply(null,arguments)},Rb;function ja(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}M=function Sb(){Rb||Tb();Rb||(M=Sb)};
function Tb(a){function b(){if(!Rb&&(Rb=!0,f.calledRun=!0,!ma)){Ma(Ca);Ma(Da);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if(Ub){var c=a,d=f._main;c=c||[];var e=c.length+1,h=C(4*(e+1));H[h>>2]=va(aa);for(var g=1;g<e;g++)H[(h>>2)+g]=va(c[g-1]);H[(h>>2)+e]=0;try{var m=d(e,h);if(!noExitRuntime||0!==m){if(!noExitRuntime){if(f.onExit)f.onExit(m);ma=!0}t(m,new ja(m))}}catch(n){n instanceof ja||"unwind"==n||((c=n)&&"object"===typeof n&&n.stack&&(c=[n,n.stack]),z("exception thrown: "+c),t(1,n))}finally{}}if(f.postRun)for("function"==
typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;)c=f.postRun.shift(),Fa.unshift(c);Ma(Fa)}}a=a||r;if(!(0<L)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Ga();Ma(Ba);0<L||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},1)):b())}}f.run=Tb;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var Ub=!0;f.noInitialRun&&(Ub=!1);Tb();
