
var f;f||(f=typeof Module !== 'undefined' ? Module : {});var k={},l;for(l in f)f.hasOwnProperty(l)&&(k[l]=f[l]);var r=[],aa="./this.program";function t(a,b){throw b;}var ba=!1,u=!1,ca=!1,da=!1;ba="object"===typeof window;u="function"===typeof importScripts;ca="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;da=!ba&&!ca&&!u;var v="",ea,fa,x,ha,ia;
if(ca)v=u?require("path").dirname(v)+"/":__dirname+"/",ea=function(a,b){ha||(ha=require("fs"));ia||(ia=require("path"));a=ia.normalize(a);return ha.readFileSync(a,b?null:"utf8")},x=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/")),r=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=f),process.on("uncaughtException",function(a){if(!(a instanceof ja))throw a;}),process.on("unhandledRejection",
y),t=function(a){process.exit(a)},f.inspect=function(){return"[Emscripten Module object]"};else if(da)"undefined"!=typeof read&&(ea=function(a){return read(a)}),x=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?r=scriptArgs:"undefined"!=typeof arguments&&(r=arguments),"function"===typeof quit&&(t=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===typeof console&&
(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(ba||u)u?v=self.location.href:"undefined"!==typeof document&&document.currentScript&&(v=document.currentScript.src),v=0!==v.indexOf("blob:")?v.substr(0,v.lastIndexOf("/")+1):"",ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},u&&(x=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),
fa=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};var ka=f.print||console.log.bind(console),z=f.printErr||console.warn.bind(console);for(l in k)k.hasOwnProperty(l)&&(f[l]=k[l]);k=null;f.arguments&&(r=f.arguments);f.thisProgram&&(aa=f.thisProgram);f.quit&&(t=f.quit);var B;f.wasmBinary&&(B=f.wasmBinary);var noExitRuntime=f.noExitRuntime||!0;
"object"!==typeof WebAssembly&&y("no native wasm support detected");var la,ma=!1;function assert(a,b){a||y("Assertion failed: "+b)}function na(a){var b=f["_"+a];assert(b,"Cannot call unknown function "+a+", make sure it is exported");return b}
function oa(a,b,c){var d={string:function(n){var q=0;if(null!==n&&void 0!==n&&0!==n){var p=(n.length<<2)+1;q=C(p);D(n,E,q,p)}return q},array:function(n){var q=C(n.length);G.set(n,q);return q}};a=na(a);var e=[],h=0;if(c)for(var g=0;g<c.length;g++){var m=d[b[g]];m?(0===h&&(h=pa()),e[g]=m(c[g])):e[g]=c[g]}a.apply(null,e);0!==h&&qa(h)}var ra="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function sa(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&ra)return ra.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var h=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|h);else{var g=a[b++]&63;e=224==(e&240)?(e&15)<<12|h<<6|g:(e&7)<<18|h<<12|g<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function H(a,b){return a?sa(E,a,b):""}
function D(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var h=0;h<a.length;++h){var g=a.charCodeAt(h);if(55296<=g&&57343>=g){var m=a.charCodeAt(++h);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-e}
function ta(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function ua(a){var b=ta(a)+1,c=I(b);c&&D(a,G,c,b);return c}function va(a){var b=ta(a)+1,c=C(b);D(a,G,c,b);return c}var wa,G,E,xa,ya,J,za,K,L;
function Aa(){var a=la.buffer;wa=a;f.HEAP8=G=new Int8Array(a);f.HEAP16=xa=new Int16Array(a);f.HEAP32=J=new Int32Array(a);f.HEAPU8=E=new Uint8Array(a);f.HEAPU16=ya=new Uint16Array(a);f.HEAPU32=za=new Uint32Array(a);f.HEAPF32=K=new Float32Array(a);f.HEAPF64=L=new Float64Array(a)}var M,Ba=[],Ca=[],Da=[],Ea=[],Fa=[];function Ga(){var a=f.preRun.shift();Ba.unshift(a)}var N=0,Ha=null,Ia=null;f.preloadedImages={};f.preloadedAudios={};
function y(a){if(f.onAbort)f.onAbort(a);z(a);ma=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}function Ja(a){var b=O;return String.prototype.startsWith?b.startsWith(a):0===b.indexOf(a)}function Ka(){return Ja("data:application/octet-stream;base64,")}var O="nuklear-sapp-ui.wasm";if(!Ka()){var La=O;O=f.locateFile?f.locateFile(La,v):v+La}
function Ma(){var a=O;try{if(a==O&&B)return new Uint8Array(B);if(x)return x(a);throw"both async and sync fetching of the wasm failed";}catch(b){y(b)}}
function Na(){if(!B&&(ba||u)){if("function"===typeof fetch&&!Ja("file://"))return fetch(O,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+O+"'";return a.arrayBuffer()}).catch(function(){return Ma()});if(fa)return new Promise(function(a,b){fa(O,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ma()})}
function Oa(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(f);else{var c=b.Kc;"number"===typeof c?void 0===b.hc?M.get(c)():M.get(c)(b.hc):c(void 0===b.hc?null:b.hc)}}}
function Pa(){function a(g){return(g=g.toTimeString().match(/\(([A-Za-z ]+)\)$/))?g[1]:"GMT"}if(!Qa){Qa=!0;var b=(new Date).getFullYear(),c=new Date(b,0,1),d=new Date(b,6,1);b=c.getTimezoneOffset();var e=d.getTimezoneOffset(),h=Math.max(b,e);J[Ra()>>2]=60*h;J[Sa()>>2]=Number(b!=e);c=a(c);d=a(d);c=ua(c);d=ua(d);e<b?(J[P()>>2]=c,J[P()+4>>2]=d):(J[P()>>2]=d,J[P()+4>>2]=c)}}var Qa,Ta=[null,[],[]],Ua={},Va=0;function Wa(){for(var a=Q.length-1;0<=a;--a)Xa(a);Q=[];Ya=[]}var Ya=[];
function Za(){if(Va&&$a.ac)for(var a=0;a<Ya.length;++a){var b=Ya[a];Ya.splice(a,1);--a;b.Uc.apply(null,b.Gc)}}var Q=[];function Xa(a){var b=Q[a];b.target.removeEventListener(b.Vb,b.zc,b.Wb);Q.splice(a,1)}function R(a){function b(d){++Va;$a=a;Za();a.Yb(d);Za();--Va}if(a.Xb)a.zc=b,a.target.addEventListener(a.Vb,b,a.Wb),Q.push(a),ab||(Ea.push(Wa),ab=!0);else for(var c=0;c<Q.length;++c)Q[c].target==a.target&&Q[c].Vb==a.Vb&&Xa(c--)}
var ab,$a,bb,cb,db,eb,fb,gb,hb=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function S(a){a=2<a?H(a):a;return hb[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}function ib(a){return 0>hb.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}
function jb(a,b,c,d,e,h){bb||(bb=I(164));a={target:S(a),ac:!0,Vb:h,Xb:d,Yb:function(g){var m=bb,n=m>>2;J[n]=g.location;J[n+1]=g.ctrlKey;J[n+2]=g.shiftKey;J[n+3]=g.altKey;J[n+4]=g.metaKey;J[n+5]=g.repeat;J[n+6]=g.charCode;J[n+7]=g.keyCode;J[n+8]=g.which;D(g.key||"",E,m+36,32);D(g.code||"",E,m+68,32);D(g.char||"",E,m+100,32);D(g.locale||"",E,m+132,32);M.get(d)(e,m,b)&&g.preventDefault()},Wb:c};R(a)}
function kb(a,b,c){a>>=2;J[a]=b.screenX;J[a+1]=b.screenY;J[a+2]=b.clientX;J[a+3]=b.clientY;J[a+4]=b.ctrlKey;J[a+5]=b.shiftKey;J[a+6]=b.altKey;J[a+7]=b.metaKey;xa[2*a+16]=b.button;xa[2*a+17]=b.buttons;J[a+9]=b.movementX;J[a+10]=b.movementY;c=ib(c);J[a+11]=b.clientX-c.left;J[a+12]=b.clientY-c.top}function lb(a,b,c,d,e,h){cb||(cb=I(64));a=S(a);R({target:a,ac:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,Vb:h,Xb:d,Yb:function(g){g=g||event;kb(cb,g,a);M.get(d)(e,cb,b)&&g.preventDefault()},Wb:c})}
function mb(a,b,c,d,e){db||(db=I(260));R({target:a,Vb:e,Xb:d,Yb:function(h){h=h||event;var g=db,m=document.pointerLockElement||document.jc||document.lc||document.kc;J[g>>2]=!!m;var n=m&&m.id?m.id:"";D(m?m==window?"#window":m==screen?"#screen":m&&m.nodeName?m.nodeName:"":"",E,g+4,128);D(n,E,g+132,128);M.get(d)(20,g,b)&&h.preventDefault()},Wb:c})}function nb(a,b,c,d,e){R({target:a,Vb:e,Xb:d,Yb:function(h){h=h||event;M.get(d)(38,0,b)&&h.preventDefault()},Wb:c})}
function ob(a,b,c,d){eb||(eb=I(36));a=S(a);R({target:a,Vb:"resize",Xb:d,Yb:function(e){e=e||event;if(e.target==a){var h=document.body;if(h){var g=eb;J[g>>2]=e.detail;J[g+4>>2]=h.clientWidth;J[g+8>>2]=h.clientHeight;J[g+12>>2]=innerWidth;J[g+16>>2]=innerHeight;J[g+20>>2]=outerWidth;J[g+24>>2]=outerHeight;J[g+28>>2]=pageXOffset;J[g+32>>2]=pageYOffset;M.get(d)(10,g,b)&&e.preventDefault()}}},Wb:c})}
function pb(a,b,c,d,e,h){fb||(fb=I(1684));a=S(a);R({target:a,ac:"touchstart"==h||"touchend"==h,Vb:h,Xb:d,Yb:function(g){for(var m={},n=g.touches,q=0;q<n.length;++q){var p=n[q];m[p.identifier]=p}n=g.changedTouches;for(q=0;q<n.length;++q)p=n[q],p.Cc=1,m[p.identifier]=p;n=g.targetTouches;for(q=0;q<n.length;++q)m[n[q].identifier].Dc=1;n=fb;p=n>>2;J[p+1]=g.ctrlKey;J[p+2]=g.shiftKey;J[p+3]=g.altKey;J[p+4]=g.metaKey;p+=5;var A=ib(a),F=0;for(q in m){var w=m[q];J[p]=w.identifier;J[p+1]=w.screenX;J[p+2]=w.screenY;
J[p+3]=w.clientX;J[p+4]=w.clientY;J[p+5]=w.pageX;J[p+6]=w.pageY;J[p+7]=w.Cc;J[p+8]=w.Dc;J[p+9]=w.clientX-A.left;J[p+10]=w.clientY-A.top;p+=13;if(31<++F)break}J[n>>2]=F;M.get(d)(e,n,b)&&g.preventDefault()},Wb:c})}function qb(a,b,c,d,e,h){a={target:S(a),Vb:h,Xb:d,Yb:function(g){g=g||event;M.get(d)(e,0,b)&&g.preventDefault()},Wb:c};R(a)}
function rb(a,b,c,d){gb||(gb=I(96));R({target:a,ac:!0,Vb:"wheel",Xb:d,Yb:function(e){e=e||event;var h=gb;kb(h,e,a);L[h+64>>3]=e.deltaX;L[h+72>>3]=e.deltaY;L[h+80>>3]=e.deltaZ;J[h+88>>2]=e.deltaMode;M.get(d)(9,h,b)&&e.preventDefault()},Wb:c})}
function sb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,h){b.drawArraysInstancedANGLE(c,d,e,h)},a.drawElementsInstanced=function(c,d,e,h,g){b.drawElementsInstancedANGLE(c,d,e,h,g)})}
function tb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function ub(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function vb(a){a.Ic=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function wb(a){a.Nc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function xb(a){a.Pc=a.getExtension("WEBGL_multi_draw")}var yb=1,zb=[],T=[],Ab=[],Bb=[],Cb=[],U=[],Db=[],Eb=[],Fb={},Gb={};function V(a){Hb||(Hb=a)}function Ib(a){for(var b=yb++,c=a.length;c<b;c++)a[c]=null;return b}
function Jb(a,b){a.pc||(a.pc=a.getContext,a.getContext=function(d,e){e=a.pc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.qc?a.getContext("webgl2",b):a.getContext("webgl",b);return c?Kb(c,b):0}function Kb(a,b){var c=Ib(Eb),d={Mc:c,attributes:b,version:b.qc,fc:a};a.canvas&&(a.canvas.Fc=d);Eb[c]=d;("undefined"===typeof b.oc||b.oc)&&Lb(d);return c}
function Lb(a){a||(a=W);if(!a.Bc){a.Bc=!0;var b=a.fc;sb(b);tb(b);ub(b);vb(b);wb(b);2<=a.version&&(b.nc=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.nc)b.nc=b.getExtension("EXT_disjoint_timer_query");xb(b);(b.getSupportedExtensions()||[]).forEach(function(c){0>c.indexOf("lose_context")&&0>c.indexOf("debug")&&b.getExtension(c)})}}var Hb,W,Mb=["default","low-power","high-performance"];
function Nb(a,b,c,d){for(var e=0;e<a;e++){var h=X[c](),g=h&&Ib(d);h?(h.name=g,d[g]=h):V(1282);J[b+4*e>>2]=g}}
function Ob(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=X.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>W.version){V(1282);return}c=2*(X.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>W.version){V(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=X.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":V(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:V(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)J[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){V(1280);z("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:V(1280);z("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}J[b>>2]=c}else V(1281)}
function Pb(a){var b=ta(a)+1,c=I(b);D(a,E,c,b);return c}function Qb(a){a-=5120;return 0==a?G:1==a?E:2==a?xa:4==a?J:6==a?K:5==a||28922==a||28520==a||30779==a||30782==a?za:ya}function Y(a){var b=X.yc,c=b.ec[a];0<=c&&(b.ec[a]=c=X.getUniformLocation(b,b.xc[a]+(0<c?"["+c+"]":"")));return c}for(var Z=[],X,Rb=new Float32Array(288),Sb=0;288>Sb;++Sb)Z[Sb]=Rb.subarray(0,Sb+1);
var Xb={bb:function(a,b){Pa();a=new Date(1E3*J[a>>2]);J[b>>2]=a.getSeconds();J[b+4>>2]=a.getMinutes();J[b+8>>2]=a.getHours();J[b+12>>2]=a.getDate();J[b+16>>2]=a.getMonth();J[b+20>>2]=a.getFullYear()-1900;J[b+24>>2]=a.getDay();var c=new Date(a.getFullYear(),0,1);J[b+28>>2]=(a.getTime()-c.getTime())/864E5|0;J[b+36>>2]=-(60*a.getTimezoneOffset());var d=(new Date(a.getFullYear(),6,1)).getTimezoneOffset();c=c.getTimezoneOffset();a=(d!=c&&a.getTimezoneOffset()==Math.min(c,d))|0;J[b+32>>2]=a;a=J[P()+(a?
4:0)>>2];J[b+40>>2]=a;return b},ka:function(){return 0},db:function(){return 0},fb:function(){},S:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},X:function(a,b,c){a=S(a);if(!a)return-4;a=ib(a);L[b>>3]=a.width;L[c>>3]=a.height;return 0},$a:function(a,b,c){E.copyWithin(a,b,b+c)},Ha:function(a,b){function c(d){M.get(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},ab:function(a){var b=E.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*
(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(a,d);0<d%65536&&(d+=65536-d%65536);a:{try{la.grow(Math.min(2147483648,d)-wa.byteLength+65535>>>16);Aa();var e=1;break a}catch(h){}e=void 0}if(e)return!0}return!1},P:function(a,b,c){a=S(a);if(!a)return-4;a.width=b;a.height=c;return 0},ea:function(a,b,c,d){jb(a,b,c,d,2,"keydown");return 0},ca:function(a,b,c,d){jb(a,b,c,d,1,"keypress");return 0},da:function(a,b,c,d){jb(a,b,c,d,3,"keyup");return 0},na:function(a,b,c,d){lb(a,b,c,d,5,"mousedown");return 0},
ha:function(a,b,c,d){lb(a,b,c,d,33,"mouseenter");return 0},ga:function(a,b,c,d){lb(a,b,c,d,34,"mouseleave");return 0},ia:function(a,b,c,d){lb(a,b,c,d,8,"mousemove");return 0},ja:function(a,b,c,d){lb(a,b,c,d,6,"mouseup");return 0},Z:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.jc||document.body.lc||document.body.kc))return-1;a=S(a);if(!a)return-4;mb(a,b,c,d,"pointerlockchange");mb(a,b,c,d,"mozpointerlockchange");mb(a,b,c,d,"webkitpointerlockchange");
mb(a,b,c,d,"mspointerlockchange");return 0},Y:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.jc||document.body.lc||document.body.kc))return-1;a=S(a);if(!a)return-4;nb(a,b,c,d,"pointerlockerror");nb(a,b,c,d,"mozpointerlockerror");nb(a,b,c,d,"webkitpointerlockerror");nb(a,b,c,d,"mspointerlockerror");return 0},Sa:function(a,b,c,d){ob(a,b,c,d);return 0},_:function(a,b,c,d){pb(a,b,c,d,25,"touchcancel");return 0},$:function(a,b,c,d){pb(a,b,c,d,23,"touchend");return 0},
aa:function(a,b,c,d){pb(a,b,c,d,24,"touchmove");return 0},ba:function(a,b,c,d){pb(a,b,c,d,22,"touchstart");return 0},W:function(a,b,c,d){qb(a,b,c,d,31,"webglcontextlost");return 0},V:function(a,b,c,d){qb(a,b,c,d,32,"webglcontextrestored");return 0},fa:function(a,b,c,d){a=S(a);return"undefined"!==typeof a.onwheel?(rb(a,b,c,d),0):-1},C:function(a,b){b>>=2;b={alpha:!!J[b],depth:!!J[b+1],stencil:!!J[b+2],antialias:!!J[b+3],premultipliedAlpha:!!J[b+4],preserveDrawingBuffer:!!J[b+5],powerPreference:Mb[J[b+
6]],failIfMajorPerformanceCaveat:!!J[b+7],qc:J[b+8],Oc:J[b+9],oc:J[b+10],Ac:J[b+11],Qc:J[b+12],Rc:J[b+13]};a=S(a);return!a||b.Ac?0:Jb(a,b)},pb:function(a,b){a=Eb[a];b=H(b);0==b.indexOf("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&sb(X);"OES_vertex_array_object"==b&&tb(X);"WEBGL_draw_buffers"==b&&ub(X);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&vb(X);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&wb(X);"WEBGL_multi_draw"==b&&xb(X);return!!a.fc.getExtension(b)},Ca:function(a){a>>=
2;for(var b=0;14>b;++b)J[a+b]=0;J[a]=J[a+1]=J[a+3]=J[a+4]=J[a+8]=J[a+10]=1},vb:function(a){W=Eb[a];f.Hc=X=W&&W.fc;return!a||X?0:-5},la:function(){return 0},cb:function(a,b,c,d){a=Ua.Lc(a);b=Ua.Jc(a,b,c);J[d>>2]=b;return 0},_a:function(){},eb:function(a,b,c,d){for(var e=0,h=0;h<c;h++){for(var g=J[b+8*h>>2],m=J[b+(8*h+4)>>2],n=0;n<m;n++){var q=E[g+n],p=Ta[a];0===q||10===q?((1===a?ka:z)(sa(p,0)),p.length=0):p.push(q)}e+=m}J[d>>2]=e;return 0},b:function(a){X.activeTexture(a)},D:function(a,b){X.attachShader(T[a],
U[b])},c:function(a,b){35051==a?X.mc=b:35052==a&&(X.Zb=b);X.bindBuffer(a,zb[b])},i:function(a,b){X.bindFramebuffer(a,Ab[b])},G:function(a,b){X.bindRenderbuffer(a,Bb[b])},a:function(a,b){X.bindTexture(a,Cb[b])},R:function(a){X.bindVertexArray(Db[a])},M:function(a,b,c,d){X.blendColor(a,b,c,d)},N:function(a,b){X.blendEquationSeparate(a,b)},O:function(a,b,c,d){X.blendFuncSeparate(a,b,c,d)},r:function(a,b,c,d,e,h,g,m,n,q){X.blitFramebuffer(a,b,c,d,e,h,g,m,n,q)},Fa:function(a,b,c,d){2<=W.version?c?X.bufferData(a,
E,d,c,b):X.bufferData(a,b,d):X.bufferData(a,c?E.subarray(c,c+b):b,d)},I:function(a,b,c,d){2<=W.version?X.bufferSubData(a,b,E,d,c):X.bufferSubData(a,b,E.subarray(d,d+c))},rb:function(a){X.clear(a)},ub:function(a,b,c,d){X.clearColor(a,b,c,d)},tb:function(a){X.clearDepth(a)},sb:function(a){X.clearStencil(a)},n:function(a,b,c,d){X.colorMask(!!a,!!b,!!c,!!d)},sa:function(a){X.compileShader(U[a])},Ba:function(a,b,c,d,e,h,g,m){2<=W.version?X.Zb?X.compressedTexImage2D(a,b,c,d,e,h,g,m):X.compressedTexImage2D(a,
b,c,d,e,h,E,m,g):X.compressedTexImage2D(a,b,c,d,e,h,m?E.subarray(m,m+g):null)},za:function(a,b,c,d,e,h,g,m,n){X.Zb?X.compressedTexImage3D(a,b,c,d,e,h,g,m,n):X.compressedTexImage3D(a,b,c,d,e,h,g,E,n,m)},xa:function(){var a=Ib(T),b=X.createProgram();b.name=a;b.dc=b.bc=b.cc=0;b.ic=1;T[a]=b;return a},ua:function(a){var b=Ib(U);U[b]=X.createShader(a);return b},J:function(a){X.cullFace(a)},Na:function(a,b){for(var c=0;c<a;c++){var d=J[b+4*c>>2],e=zb[d];e&&(X.deleteBuffer(e),e.name=0,zb[d]=null,d==X.mc&&
(X.mc=0),d==X.Zb&&(X.Zb=0))}},j:function(a,b){for(var c=0;c<a;++c){var d=J[b+4*c>>2],e=Ab[d];e&&(X.deleteFramebuffer(e),e.name=0,Ab[d]=null)}},x:function(a){if(a){var b=T[a];b?(X.deleteProgram(b),b.name=0,T[a]=null):V(1281)}},T:function(a,b){for(var c=0;c<a;c++){var d=J[b+4*c>>2],e=Bb[d];e&&(X.deleteRenderbuffer(e),e.name=0,Bb[d]=null)}},t:function(a){if(a){var b=U[a];b?(X.deleteShader(b),U[a]=null):V(1281)}},Ma:function(a,b){for(var c=0;c<a;c++){var d=J[b+4*c>>2],e=Cb[d];e&&(X.deleteTexture(e),e.name=
0,Cb[d]=null)}},La:function(a,b){for(var c=0;c<a;c++){var d=J[b+4*c>>2];X.deleteVertexArray(Db[d]);Db[d]=null}},w:function(a){X.depthFunc(a)},v:function(a){X.depthMask(!!a)},d:function(a){X.disable(a)},Q:function(a){X.disableVertexAttribArray(a)},gb:function(a,b,c){X.drawArrays(a,b,c)},hb:function(a,b,c,d){X.drawElements(a,b,c,d)},g:function(a){X.enable(a)},nb:function(a){X.enableVertexAttribArray(a)},K:function(a){X.frontFace(a)},Ga:function(a,b){Nb(a,b,"createBuffer",zb)},H:function(a,b){Nb(a,b,
"createRenderbuffer",Bb)},Da:function(a,b){Nb(a,b,"createTexture",Cb)},Ka:function(a,b){Nb(a,b,"createVertexArray",Db)},qa:function(a,b){return X.getAttribLocation(T[a],H(b))},e:function(a,b){Ob(a,b)},va:function(a,b,c,d){a=X.getProgramInfoLog(T[a]);null===a&&(a="(unknown error)");b=0<b&&d?D(a,E,d,b):0;c&&(J[c>>2]=b)},B:function(a,b,c){if(c)if(a>=yb)V(1281);else if(a=T[a],35716==b)a=X.getProgramInfoLog(a),null===a&&(a="(unknown error)"),J[c>>2]=a.length+1;else if(35719==b){if(!a.dc)for(b=0;b<X.getProgramParameter(a,
35718);++b)a.dc=Math.max(a.dc,X.getActiveUniform(a,b).name.length+1);J[c>>2]=a.dc}else if(35722==b){if(!a.bc)for(b=0;b<X.getProgramParameter(a,35721);++b)a.bc=Math.max(a.bc,X.getActiveAttrib(a,b).name.length+1);J[c>>2]=a.bc}else if(35381==b){if(!a.cc)for(b=0;b<X.getProgramParameter(a,35382);++b)a.cc=Math.max(a.cc,X.getActiveUniformBlockName(a,b).length+1);J[c>>2]=a.cc}else J[c>>2]=X.getProgramParameter(a,b);else V(1281)},ra:function(a,b,c,d){a=X.getShaderInfoLog(U[a]);null===a&&(a="(unknown error)");
b=0<b&&d?D(a,E,d,b):0;c&&(J[c>>2]=b)},z:function(a,b,c){c?35716==b?(a=X.getShaderInfoLog(U[a]),null===a&&(a="(unknown error)"),J[c>>2]=a?a.length+1:0):35720==b?(a=X.getShaderSource(U[a]),J[c>>2]=a?a.length+1:0):J[c>>2]=X.getShaderParameter(U[a],b):V(1281)},Pa:function(a){var b=Fb[a];if(!b){switch(a){case 7939:b=X.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Pb(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=X.getParameter(a))||V(1280);b=b&&Pb(b);break;
case 7938:b=X.getParameter(7938);b=2<=W.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Pb(b);break;case 35724:b=X.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Pb(b);break;default:V(1280)}Fb[a]=b}return b},Oa:function(a,b){if(2>W.version)return V(1282),0;var c=Gb[a];if(c)return 0>b||b>=c.length?(V(1281),0):c[b];switch(a){case 7939:return c=X.getSupportedExtensions()||[],
c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return Pb(d)}),c=Gb[a]=c,0>b||b>=c.length?(V(1281),0):c[b];default:return V(1280),0}},m:function(a,b){function c(w){return"]"==w.slice(-1)&&w.lastIndexOf("[")}b=H(b);a=T[a];var d=a.ec,e=a.Ec,h,g=0,m=b,n=c(b);if(!d)for(a.ec=d={},a.xc={},h=0;h<X.getProgramParameter(a,35718);++h){var q=X.getActiveUniform(a,h);var p=q.name;q=q.size;var A=c(p);A=0<A?p.slice(0,A):p;var F=a.ic;a.ic+=q;e[A]=[q,F];for(p=0;p<q;++p)d[F]=p,a.xc[F++]=A}0<n&&(g=
parseInt(b.slice(n+1))>>>0,m=b.slice(0,n));return(e=e[m])&&g<e[0]&&(g+=e[1],d[g]=d[g]||X.getUniformLocation(a,b))?g:-1},wa:function(a){a=T[a];X.linkProgram(a);a.ec=0;a.Ec={}},L:function(a,b){X.polygonOffset(a,b)},s:function(a){X.readBuffer(a)},Ea:function(a,b,c,d){X.renderbufferStorage(a,b,c,d)},F:function(a,b,c,d,e){X.renderbufferStorageMultisample(a,b,c,d,e)},h:function(a,b,c,d){X.scissor(a,b,c,d)},ta:function(a,b,c,d){for(var e="",h=0;h<b;++h){var g=d?J[d+4*h>>2]:-1;e+=H(J[c+4*h>>2],0>g?void 0:
g)}X.shaderSource(U[a],e)},Ja:function(a,b,c){X.stencilFunc(a,b,c)},pa:function(a,b,c,d){X.stencilFuncSeparate(a,b,c,d)},u:function(a){X.stencilMask(a)},Ia:function(a,b,c){X.stencilOp(a,b,c)},oa:function(a,b,c,d){X.stencilOpSeparate(a,b,c,d)},Aa:function(a,b,c,d,e,h,g,m,n){if(2<=W.version)if(X.Zb)X.texImage2D(a,b,c,d,e,h,g,m,n);else if(n){var q=Qb(m);X.texImage2D(a,b,c,d,e,h,g,m,q,n>>31-Math.clz32(q.BYTES_PER_ELEMENT))}else X.texImage2D(a,b,c,d,e,h,g,m,null);else{q=X;var p=q.texImage2D;if(n){var A=
Qb(m),F=31-Math.clz32(A.BYTES_PER_ELEMENT);n=A.subarray(n>>F,n+e*(d*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[g-6402]||1)*(1<<F)+4-1&-4)>>F)}else n=null;p.call(q,a,b,c,d,e,h,g,m,n)}},ya:function(a,b,c,d,e,h,g,m,n,q){if(X.Zb)X.texImage3D(a,b,c,d,e,h,g,m,n,q);else if(q){var p=Qb(n);X.texImage3D(a,b,c,d,e,h,g,m,n,p,q>>31-Math.clz32(p.BYTES_PER_ELEMENT))}else X.texImage3D(a,b,c,d,e,h,g,m,n,null)},E:function(a,b,c){X.texParameterf(a,b,c)},f:function(a,b,c){X.texParameteri(a,b,c)},
mb:function(a,b,c){if(2<=W.version)X.uniform1fv(Y(a),K,c>>2,b);else{if(288>=b)for(var d=Z[b-1],e=0;e<b;++e)d[e]=K[c+4*e>>2];else d=K.subarray(c>>2,c+4*b>>2);X.uniform1fv(Y(a),d)}},A:function(a,b){X.uniform1i(Y(a),b)},lb:function(a,b,c){if(2<=W.version)X.uniform2fv(Y(a),K,c>>2,2*b);else{if(144>=b)for(var d=Z[2*b-1],e=0;e<2*b;e+=2)d[e]=K[c+4*e>>2],d[e+1]=K[c+(4*e+4)>>2];else d=K.subarray(c>>2,c+8*b>>2);X.uniform2fv(Y(a),d)}},kb:function(a,b,c){if(2<=W.version)X.uniform3fv(Y(a),K,c>>2,3*b);else{if(96>=
b)for(var d=Z[3*b-1],e=0;e<3*b;e+=3)d[e]=K[c+4*e>>2],d[e+1]=K[c+(4*e+4)>>2],d[e+2]=K[c+(4*e+8)>>2];else d=K.subarray(c>>2,c+12*b>>2);X.uniform3fv(Y(a),d)}},jb:function(a,b,c){if(2<=W.version)X.uniform4fv(Y(a),K,c>>2,4*b);else{if(72>=b){var d=Z[4*b-1],e=K;c>>=2;for(var h=0;h<4*b;h+=4){var g=c+h;d[h]=e[g];d[h+1]=e[g+1];d[h+2]=e[g+2];d[h+3]=e[g+3]}}else d=K.subarray(c>>2,c+16*b>>2);X.uniform4fv(Y(a),d)}},ib:function(a,b,c,d){if(2<=W.version)X.uniformMatrix4fv(Y(a),!!c,K,d>>2,16*b);else{if(18>=b){var e=
Z[16*b-1],h=K;d>>=2;for(var g=0;g<16*b;g+=16){var m=d+g;e[g]=h[m];e[g+1]=h[m+1];e[g+2]=h[m+2];e[g+3]=h[m+3];e[g+4]=h[m+4];e[g+5]=h[m+5];e[g+6]=h[m+6];e[g+7]=h[m+7];e[g+8]=h[m+8];e[g+9]=h[m+9];e[g+10]=h[m+10];e[g+11]=h[m+11];e[g+12]=h[m+12];e[g+13]=h[m+13];e[g+14]=h[m+14];e[g+15]=h[m+15]}}else e=K.subarray(d>>2,d+64*b>>2);X.uniformMatrix4fv(Y(a),!!c,e)}},k:function(a){a=T[a];X.useProgram(a);X.yc=a},ob:function(a,b){X.vertexAttribDivisor(a,b)},qb:function(a,b,c,d,e,h){X.vertexAttribPointer(a,b,c,!!d,
e,h)},l:function(a,b,c,d){X.viewport(a,b,c,d)},Ya:function(){f.rc=function(a){0!=Tb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",f.rc)},Xa:function(){f.wc=function(a){a=a.clipboardData.getData("text");oa("_sapp_emsc_onpaste",["string"],[a])};window.addEventListener("paste",f.wc)},Wa:function(a){f.Sc=[];a=H(a);a=document.getElementById(a);f.sc=function(b){b.stopPropagation();b.preventDefault()};f.tc=function(b){b.stopPropagation();b.preventDefault()};f.uc=function(b){b.stopPropagation();
b.preventDefault()};f.vc=function(b){b.stopPropagation();b.preventDefault();var c=b.dataTransfer.files;f.Tc=c;Ub(c.length);var d;for(d=0;d<c.length;d++)oa("_sapp_emsc_drop",["number","string"],[d,c[d].name]);Vb(b.clientX,b.clientY)};a.addEventListener("dragenter",f.sc,!1);a.addEventListener("dragleave",f.tc,!1);a.addEventListener("dragover",f.uc,!1);a.addEventListener("drop",f.vc,!1)},Ra:function(){var a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},q:function(){var a=
document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Wb()});document.body.append(a)},p:function(){document.getElementById("_sokol_app_input_element").focus()},Za:function(a){a=H(a);f.$b=document.getElementById(a);f.$b||console.log("sokol_app.h: invalid target:"+a);f.$b.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Va:function(){window.removeEventListener("beforeunload",
f.rc)},Ua:function(){window.removeEventListener("paste",f.wc)},Ta:function(a){a=H(a);a=document.getElementById(a);a.removeEventListener("dragenter",f.sc);a.removeEventListener("dragleave",f.tc);a.removeEventListener("dragover",f.uc);a.removeEventListener("drop",f.vc)},y:function(){f.$b&&f.$b.requestPointerLock&&f.$b.requestPointerLock()},Qa:function(a,b,c){var d=document.createElement("canvas");d.width=a;d.height=b;var e=d.getContext("2d"),h=e.createImageData(a,b);h.data.set(E.subarray(c,c+a*b*4));
e.putImageData(h,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},o:function(){document.getElementById("_sokol_app_input_element").blur()},U:function(a){a=H(a);var b=document.createElement("textarea");b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");b.setAttribute("spellcheck","false");b.style.left="-100px";b.style.top="-100px";b.style.height=1;b.style.width=
1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");document.body.removeChild(b)},ma:function(){return navigator.userAgent.includes("Macintosh")?1:0},xb:function(){return navigator.userAgent.includes("Macintosh")?1:0},wb:function(a){var b=Date.now()/1E3|0;a&&(J[a>>2]=b);return b}};
(function(){function a(e){f.asm=e.exports;la=f.asm.yb;Aa();M=f.asm.Ub;Ca.unshift(f.asm.zb);N--;f.monitorRunDependencies&&f.monitorRunDependencies(N);0==N&&(null!==Ha&&(clearInterval(Ha),Ha=null),Ia&&(e=Ia,Ia=null,e()))}function b(e){a(e.instance)}function c(e){return Na().then(function(h){return WebAssembly.instantiate(h,d)}).then(e,function(h){z("failed to asynchronously prepare wasm: "+h);y(h)})}var d={a:Xb};N++;f.monitorRunDependencies&&f.monitorRunDependencies(N);if(f.instantiateWasm)try{return f.instantiateWasm(d,
a)}catch(e){return z("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return B||"function"!==typeof WebAssembly.instantiateStreaming||Ka()||Ja("file://")||"function"!==typeof fetch?c(b):fetch(O,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(h){z("wasm streaming compile failed: "+h);z("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
f.___wasm_call_ctors=function(){return(f.___wasm_call_ctors=f.asm.zb).apply(null,arguments)};var Wb=f.__sapp_emsc_notify_keyboard_hidden=function(){return(Wb=f.__sapp_emsc_notify_keyboard_hidden=f.asm.Ab).apply(null,arguments)};f.__sapp_emsc_onpaste=function(){return(f.__sapp_emsc_onpaste=f.asm.Bb).apply(null,arguments)};
var Tb=f.__sapp_html5_get_ask_leave_site=function(){return(Tb=f.__sapp_html5_get_ask_leave_site=f.asm.Cb).apply(null,arguments)},Ub=f.__sapp_emsc_begin_drop=function(){return(Ub=f.__sapp_emsc_begin_drop=f.asm.Db).apply(null,arguments)};f.__sapp_emsc_drop=function(){return(f.__sapp_emsc_drop=f.asm.Eb).apply(null,arguments)};var Vb=f.__sapp_emsc_end_drop=function(){return(Vb=f.__sapp_emsc_end_drop=f.asm.Fb).apply(null,arguments)};
f.__sapp_emsc_invoke_fetch_cb=function(){return(f.__sapp_emsc_invoke_fetch_cb=f.asm.Gb).apply(null,arguments)};f._main=function(){return(f._main=f.asm.Hb).apply(null,arguments)};f.__saudio_emsc_pull=function(){return(f.__saudio_emsc_pull=f.asm.Ib).apply(null,arguments)};f.__sfetch_emsc_head_response=function(){return(f.__sfetch_emsc_head_response=f.asm.Jb).apply(null,arguments)};f.__sfetch_emsc_get_response=function(){return(f.__sfetch_emsc_get_response=f.asm.Kb).apply(null,arguments)};
f.__sfetch_emsc_failed_http_status=function(){return(f.__sfetch_emsc_failed_http_status=f.asm.Lb).apply(null,arguments)};f.__sfetch_emsc_failed_buffer_too_small=function(){return(f.__sfetch_emsc_failed_buffer_too_small=f.asm.Mb).apply(null,arguments)};
var I=f._malloc=function(){return(I=f._malloc=f.asm.Nb).apply(null,arguments)},P=f.__get_tzname=function(){return(P=f.__get_tzname=f.asm.Ob).apply(null,arguments)},Sa=f.__get_daylight=function(){return(Sa=f.__get_daylight=f.asm.Pb).apply(null,arguments)},Ra=f.__get_timezone=function(){return(Ra=f.__get_timezone=f.asm.Qb).apply(null,arguments)},pa=f.stackSave=function(){return(pa=f.stackSave=f.asm.Rb).apply(null,arguments)},qa=f.stackRestore=function(){return(qa=f.stackRestore=f.asm.Sb).apply(null,
arguments)},C=f.stackAlloc=function(){return(C=f.stackAlloc=f.asm.Tb).apply(null,arguments)},Yb;function ja(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}Ia=function Zb(){Yb||$b();Yb||(Ia=Zb)};
function $b(a){function b(){if(!Yb&&(Yb=!0,f.calledRun=!0,!ma)){Oa(Ca);Oa(Da);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if(ac){var c=a,d=f._main;c=c||[];var e=c.length+1,h=C(4*(e+1));J[h>>2]=va(aa);for(var g=1;g<e;g++)J[(h>>2)+g]=va(c[g-1]);J[(h>>2)+e]=0;try{var m=d(e,h);if(!noExitRuntime||0!==m){if(!noExitRuntime){if(f.onExit)f.onExit(m);ma=!0}t(m,new ja(m))}}catch(n){n instanceof ja||"unwind"==n||((c=n)&&"object"===typeof n&&n.stack&&(c=[n,n.stack]),z("exception thrown: "+c),t(1,n))}finally{}}if(f.postRun)for("function"==
typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;)c=f.postRun.shift(),Fa.unshift(c);Oa(Fa)}}a=a||r;if(!(0<N)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Ga();Oa(Ba);0<N||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},1)):b())}}f.run=$b;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var ac=!0;f.noInitialRun&&(ac=!1);$b();
