
var f;f||(f=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign,ba=aa({},f),ca=[],da="./this.program",k=(a,b)=>{throw b;},ea="object"===typeof window,l="function"===typeof importScripts,r="",fa,t,u,fs,ha,ia;
if("object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)r=l?require("path").dirname(r)+"/":__dirname+"/",ia=function(){ha||(fs=require("fs"),ha=require("path"))},fa=function(a,b){ia();a=ha.normalize(a);return fs.readFileSync(a,b?null:"utf8")},u=function(a){a=fa(a,!0);a.buffer||(a=new Uint8Array(a));return a},t=function(a,b,c){ia();a=ha.normalize(a);fs.readFile(a,function(d,e){d?c(d):b(e.buffer)})},1<process.argv.length&&(da=process.argv[1].replace(/\\/g,
"/")),ca=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=f),process.on("uncaughtException",function(a){if(!(a instanceof ja))throw a;}),process.on("unhandledRejection",function(a){throw a;}),k=(a,b)=>{if(noExitRuntime||0<ka)throw process.exitCode=a,b;b instanceof ja||v("exiting due to exception: "+b);process.exit(a)},f.inspect=function(){return"[Emscripten Module object]"};else if(ea||l)l?r=self.location.href:"undefined"!==typeof document&&document.currentScript&&(r=document.currentScript.src),
r=0!==r.indexOf("blob:")?r.substr(0,r.replace(/[?#].*/,"").lastIndexOf("/")+1):"",fa=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},l&&(u=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),t=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};
var la=f.print||console.log.bind(console),v=f.printErr||console.warn.bind(console);aa(f,ba);ba=null;f.arguments&&(ca=f.arguments);f.thisProgram&&(da=f.thisProgram);f.quit&&(k=f.quit);var x;f.wasmBinary&&(x=f.wasmBinary);var noExitRuntime=f.noExitRuntime||!0;"object"!==typeof WebAssembly&&ma("no native wasm support detected");var na,oa=!1;
function pa(a,b,c){var d={string:function(n){var p=0;if(null!==n&&void 0!==n&&0!==n){var q=(n.length<<2)+1;p=y(q);z(n,A,p,q)}return p},array:function(n){var p=y(n.length);qa.set(n,p);return p}};a=f["_"+a];var e=[],h=0;if(c)for(var g=0;g<c.length;g++){var m=d[b[g]];m?(0===h&&(h=ra()),e[g]=m(c[g])):e[g]=c[g]}b=a.apply(null,e);b=function(n){0!==h&&sa(h);return n}(b)}var ta="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function ua(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&ta)return ta.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var h=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|h);else{var g=a[b++]&63;e=224==(e&240)?(e&15)<<12|h<<6|g:(e&7)<<18|h<<12|g<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function B(a,b){return a?ua(A,a,b):""}
function z(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var h=0;h<a.length;++h){var g=a.charCodeAt(h);if(55296<=g&&57343>=g){var m=a.charCodeAt(++h);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-e}
function va(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function wa(a){var b=va(a)+1,c=y(b);z(a,qa,c,b);return c}var xa,qa,A,ya,za,C,Aa,D,E;
function Ba(){var a=na.buffer;xa=a;f.HEAP8=qa=new Int8Array(a);f.HEAP16=ya=new Int16Array(a);f.HEAP32=C=new Int32Array(a);f.HEAPU8=A=new Uint8Array(a);f.HEAPU16=za=new Uint16Array(a);f.HEAPU32=Aa=new Uint32Array(a);f.HEAPF32=D=new Float32Array(a);f.HEAPF64=E=new Float64Array(a)}var Ca,Da=[],Ea=[],Fa=[],Ga=[],Ha=[],ka=0;function Ia(){var a=f.preRun.shift();Da.unshift(a)}var F=0,Ja=null,G=null;f.preloadedImages={};f.preloadedAudios={};
function ma(a){if(f.onAbort)f.onAbort(a);a="Aborted("+a+")";v(a);oa=!0;throw new WebAssembly.RuntimeError(a+". Build with -s ASSERTIONS=1 for more info.");}function Ka(){return H.startsWith("data:application/octet-stream;base64,")}var H;H="plmpeg-sapp-ui.wasm";if(!Ka()){var La=H;H=f.locateFile?f.locateFile(La,r):r+La}function Ma(){var a=H;try{if(a==H&&x)return new Uint8Array(x);if(u)return u(a);throw"both async and sync fetching of the wasm failed";}catch(b){ma(b)}}
function Na(){if(!x&&(ea||l)){if("function"===typeof fetch&&!H.startsWith("file://"))return fetch(H,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+H+"'";return a.arrayBuffer()}).catch(function(){return Ma()});if(t)return new Promise(function(a,b){t(H,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ma()})}
function Oa(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(f);else{var c=b.Vc;"number"===typeof c?void 0===b.sc?I(c)():I(c)(b.sc):c(void 0===b.sc?null:b.sc)}}}var Pa=[];function I(a){var b=Pa[a];b||(a>=Pa.length&&(Pa.length=a+1),Pa[a]=b=Ca.get(a));return b}var Qa=[null,[],[]],Ra={},Sa=0;function Ta(){for(var a=J.length-1;0<=a;--a)Ua(a);J=[];Va=[]}var Va=[];function Wa(){if(Sa&&Xa.nc)for(var a=0;a<Va.length;++a){var b=Va[a];Va.splice(a,1);--a;b.ed.apply(null,b.Rc)}}var J=[];
function Ua(a){var b=J[a];b.target.removeEventListener(b.ec,b.Nc,b.fc);J.splice(a,1)}function K(a){function b(d){++Sa;Xa=a;Wa();a.ic(d);Wa();--Sa}if(a.hc)a.Nc=b,a.target.addEventListener(a.ec,b,a.fc),J.push(a),Ya||(Ga.push(Ta),Ya=!0);else for(var c=0;c<J.length;++c)J[c].target==a.target&&J[c].ec==a.ec&&Ua(c--)}function Za(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}
var Ya,Xa,$a,ab,bb,cb,db,eb,fb,gb=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function L(a){a=2<a?B(a):a;return gb[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}function hb(a){return 0>gb.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}
function ib(a,b,c,d,e,h){$a||($a=M(256));a={target:L(a),ec:h,hc:d,ic:function(g){g=g||event;var m=g.target.id?g.target.id:"",n=$a;z(Za(g.target),A,n+0,128);z(m,A,n+128,128);I(d)(e,n,b)&&g.preventDefault()},fc:c};K(a)}
function jb(a,b,c,d,e,h){ab||(ab=M(176));a={target:L(a),nc:!0,ec:h,hc:d,ic:function(g){var m=ab;E[m>>3]=g.timeStamp;var n=m>>2;C[n+2]=g.location;C[n+3]=g.ctrlKey;C[n+4]=g.shiftKey;C[n+5]=g.altKey;C[n+6]=g.metaKey;C[n+7]=g.repeat;C[n+8]=g.charCode;C[n+9]=g.keyCode;C[n+10]=g.which;z(g.key||"",A,m+44,32);z(g.code||"",A,m+76,32);z(g.char||"",A,m+108,32);z(g.locale||"",A,m+140,32);I(d)(e,m,b)&&g.preventDefault()},fc:c};K(a)}
function kb(a,b,c){E[a>>3]=b.timeStamp;a>>=2;C[a+2]=b.screenX;C[a+3]=b.screenY;C[a+4]=b.clientX;C[a+5]=b.clientY;C[a+6]=b.ctrlKey;C[a+7]=b.shiftKey;C[a+8]=b.altKey;C[a+9]=b.metaKey;ya[2*a+20]=b.button;ya[2*a+21]=b.buttons;C[a+11]=b.movementX;C[a+12]=b.movementY;c=hb(c);C[a+13]=b.clientX-c.left;C[a+14]=b.clientY-c.top}
function N(a,b,c,d,e,h){bb||(bb=M(72));a=L(a);K({target:a,nc:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,ec:h,hc:d,ic:function(g){g=g||event;kb(bb,g,a);I(d)(e,bb,b)&&g.preventDefault()},fc:c})}function lb(a,b,c,d,e){cb||(cb=M(260));K({target:a,ec:e,hc:d,ic:function(h){h=h||event;var g=cb,m=document.pointerLockElement||document.vc||document.zc||document.xc;C[g>>2]=!!m;var n=m&&m.id?m.id:"";z(Za(m),A,g+4,128);z(n,A,g+132,128);I(d)(20,g,b)&&h.preventDefault()},fc:c})}
function mb(a,b,c,d,e){K({target:a,ec:e,hc:d,ic:function(h){h=h||event;I(d)(38,0,b)&&h.preventDefault()},fc:c})}
function nb(a,b,c,d){db||(db=M(36));a=L(a);K({target:a,ec:"resize",hc:d,ic:function(e){e=e||event;if(e.target==a){var h=document.body;if(h){var g=db;C[g>>2]=e.detail;C[g+4>>2]=h.clientWidth;C[g+8>>2]=h.clientHeight;C[g+12>>2]=innerWidth;C[g+16>>2]=innerHeight;C[g+20>>2]=outerWidth;C[g+24>>2]=outerHeight;C[g+28>>2]=pageXOffset;C[g+32>>2]=pageYOffset;I(d)(10,g,b)&&e.preventDefault()}}},fc:c})}
function ob(a,b,c,d,e,h){eb||(eb=M(1696));a=L(a);K({target:a,nc:"touchstart"==h||"touchend"==h,ec:h,hc:d,ic:function(g){for(var m,n={},p=g.touches,q=0;q<p.length;++q)m=p[q],m.Bc=m.Dc=0,n[m.identifier]=m;for(q=0;q<g.changedTouches.length;++q)m=g.changedTouches[q],m.Bc=1,n[m.identifier]=m;for(q=0;q<g.targetTouches.length;++q)n[g.targetTouches[q].identifier].Dc=1;p=eb;E[p>>3]=g.timeStamp;var w=p>>2;C[w+3]=g.ctrlKey;C[w+4]=g.shiftKey;C[w+5]=g.altKey;C[w+6]=g.metaKey;w+=7;var sb=hb(a),tb=0;for(q in n)if(m=
n[q],C[w]=m.identifier,C[w+1]=m.screenX,C[w+2]=m.screenY,C[w+3]=m.clientX,C[w+4]=m.clientY,C[w+5]=m.pageX,C[w+6]=m.pageY,C[w+7]=m.Bc,C[w+8]=m.Dc,C[w+9]=m.clientX-sb.left,C[w+10]=m.clientY-sb.top,w+=13,31<++tb)break;C[p+8>>2]=tb;I(d)(e,p,b)&&g.preventDefault()},fc:c})}function pb(a,b,c,d,e,h){a={target:L(a),ec:h,hc:d,ic:function(g){g=g||event;I(d)(e,0,b)&&g.preventDefault()},fc:c};K(a)}
function qb(a,b,c,d){fb||(fb=M(104));K({target:a,nc:!0,ec:"wheel",hc:d,ic:function(e){e=e||event;var h=fb;kb(h,e,a);E[h+72>>3]=e.deltaX;E[h+80>>3]=e.deltaY;E[h+88>>3]=e.deltaZ;C[h+96>>2]=e.deltaMode;I(d)(9,h,b)&&e.preventDefault()},fc:c})}
function rb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,h){b.drawArraysInstancedANGLE(c,d,e,h)},a.drawElementsInstanced=function(c,d,e,h,g){b.drawElementsInstancedANGLE(c,d,e,h,g)})}
function ub(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function vb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function wb(a){a.Tc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function xb(a){a.Yc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function yb(a){a.$c=a.getExtension("WEBGL_multi_draw")}var zb=1,Ab=[],O=[],Bb=[],Cb=[],Db=[],P=[],Eb=[],Fb=[],Gb={},Hb={};function Q(a){Ib||(Ib=a)}function Jb(a){for(var b=zb++,c=a.length;c<b;c++)a[c]=null;return b}
function Kb(a,b){a.Ac||(a.Ac=a.getContext,a.getContext=function(d,e){e=a.Ac(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.Cc?a.getContext("webgl2",b):a.getContext("webgl",b);return c?Lb(c,b):0}function Lb(a,b){var c=Jb(Fb),d={Xc:c,attributes:b,version:b.Cc,rc:a};a.canvas&&(a.canvas.Qc=d);Fb[c]=d;("undefined"===typeof b.yc||b.yc)&&Mb(d);return c}
function Mb(a){a||(a=R);if(!a.Pc){a.Pc=!0;var b=a.rc;rb(b);ub(b);vb(b);wb(b);xb(b);2<=a.version&&(b.wc=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.wc)b.wc=b.getExtension("EXT_disjoint_timer_query");yb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var Ib,R,Nb=["default","low-power","high-performance"];
function Ob(a,b,c,d){for(var e=0;e<a;e++){var h=S[c](),g=h&&Jb(d);h?(h.name=g,d[g]=h):Q(1282);C[b+4*e>>2]=g}}
function Pb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=S.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>R.version){Q(1282);return}c=2*(S.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>R.version){Q(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=S.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":Q(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:Q(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)C[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){Q(1280);v("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:Q(1280);v("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}C[b>>2]=c}else Q(1281)}
function T(a){var b=va(a)+1,c=M(b);z(a,A,c,b);return c}function Qb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function U(a){a-=5120;return 0==a?qa:1==a?A:2==a?ya:4==a?C:6==a?D:5==a||28922==a||28520==a||30779==a||30782==a?Aa:za}function V(a){return 31-Math.clz32(a.BYTES_PER_ELEMENT)}function Rb(a,b,c,d,e){a=U(a);var h=V(a);return a.subarray(e>>h,e+d*(c*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[b-6402]||1)*(1<<h)+4-1&-4)>>h)}
function W(a){var b=S.Mc;if(b){var c=b.mc[a];"number"===typeof c&&(b.mc[a]=c=S.getUniformLocation(b,b.Kc[a]+(0<c?"["+c+"]":"")));return c}Q(1282)}for(var X=[],Y=[],S,Sb=new Float32Array(288),Z=0;288>Z;++Z)X[Z]=Sb.subarray(0,Z+1);var Tb=new Int32Array(288);for(Z=0;288>Z;++Z)Y[Z]=Tb.subarray(0,Z+1);
var cc={ma:function(){return 0},ib:function(){return 0},jb:function(){},V:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},ea:function(a,b,c){a=L(a);if(!a)return-4;a=hb(a);E[b>>3]=a.width;E[c>>3]=a.height;return 0},eb:function(a,b,c){A.copyWithin(a,b,b+c)},Oa:function(a,b){function c(d){I(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},fb:function(a){var b=A.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);
d=Math.max(a,d);0<d%65536&&(d+=65536-d%65536);a:{try{na.grow(Math.min(2147483648,d)-xa.byteLength+65535>>>16);Ba();var e=1;break a}catch(h){}e=void 0}if(e)return!0}return!1},Y:function(a,b,c,d){ib(a,b,c,d,12,"blur");return 0},T:function(a,b,c){a=L(a);if(!a)return-4;a.width=b;a.height=c;return 0},Z:function(a,b,c,d){ib(a,b,c,d,13,"focus");return 0},ha:function(a,b,c,d){jb(a,b,c,d,2,"keydown");return 0},fa:function(a,b,c,d){jb(a,b,c,d,1,"keypress");return 0},ga:function(a,b,c,d){jb(a,b,c,d,3,"keyup");
return 0},ra:function(a,b,c,d){N(a,b,c,d,5,"mousedown");return 0},la:function(a,b,c,d){N(a,b,c,d,33,"mouseenter");return 0},ja:function(a,b,c,d){N(a,b,c,d,34,"mouseleave");return 0},pa:function(a,b,c,d){N(a,b,c,d,8,"mousemove");return 0},qa:function(a,b,c,d){N(a,b,c,d,6,"mouseup");return 0},$:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.vc||document.body.zc||document.body.xc))return-1;a=L(a);if(!a)return-4;lb(a,b,c,d,"pointerlockchange");lb(a,b,
c,d,"mozpointerlockchange");lb(a,b,c,d,"webkitpointerlockchange");lb(a,b,c,d,"mspointerlockchange");return 0},_:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.vc||document.body.zc||document.body.xc))return-1;a=L(a);if(!a)return-4;mb(a,b,c,d,"pointerlockerror");mb(a,b,c,d,"mozpointerlockerror");mb(a,b,c,d,"webkitpointerlockerror");mb(a,b,c,d,"mspointerlockerror");return 0},ab:function(a,b,c,d){nb(a,b,c,d);return 0},aa:function(a,b,c,d){ob(a,b,c,d,25,"touchcancel");
return 0},ba:function(a,b,c,d){ob(a,b,c,d,23,"touchend");return 0},ca:function(a,b,c,d){ob(a,b,c,d,24,"touchmove");return 0},da:function(a,b,c,d){ob(a,b,c,d,22,"touchstart");return 0},X:function(a,b,c,d){pb(a,b,c,d,31,"webglcontextlost");return 0},W:function(a,b,c,d){pb(a,b,c,d,32,"webglcontextrestored");return 0},ia:function(a,b,c,d){a=L(a);return"undefined"!==typeof a.onwheel?(qb(a,b,c,d),0):-1},H:function(a,b){b>>=2;b={alpha:!!C[b],depth:!!C[b+1],stencil:!!C[b+2],antialias:!!C[b+3],premultipliedAlpha:!!C[b+
4],preserveDrawingBuffer:!!C[b+5],powerPreference:Nb[C[b+6]],failIfMajorPerformanceCaveat:!!C[b+7],Cc:C[b+8],Zc:C[b+9],yc:C[b+10],Oc:C[b+11],ad:C[b+12],bd:C[b+13]};a=L(a);return!a||b.Oc?0:Kb(a,b)},Jb:function(a,b){a=Fb[a];b=B(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&rb(S);"OES_vertex_array_object"==b&&ub(S);"WEBGL_draw_buffers"==b&&vb(S);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&wb(S);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&xb(S);"WEBGL_multi_draw"==
b&&yb(S);return!!a.rc.getExtension(b)},La:function(a){a>>=2;for(var b=0;14>b;++b)C[a+b]=0;C[a]=C[a+1]=C[a+3]=C[a+4]=C[a+8]=C[a+10]=1},Aa:function(a){R=Fb[a];f.Sc=S=R&&R.rc;return!a||S?0:-5},ka:function(){return 0},hb:function(a,b,c,d){a=Ra.Wc(a);b=Ra.Uc(a,b,c);C[d>>2]=b;return 0},db:function(){},gb:function(a,b,c,d){for(var e=0,h=0;h<c;h++){var g=C[b>>2],m=C[b+4>>2];b+=8;for(var n=0;n<m;n++){var p=A[g+n],q=Qa[a];0===p||10===p?((1===a?la:v)(ua(q,0)),q.length=0):q.push(p)}e+=m}C[d>>2]=e;return 0},b:function(a){S.activeTexture(a)},
F:function(a,b){S.attachShader(O[a],P[b])},c:function(a,b){35051==a?S.uc=b:35052==a&&(S.kc=b);S.bindBuffer(a,Ab[b])},h:function(a,b){S.bindFramebuffer(a,Bb[b])},J:function(a,b){S.bindRenderbuffer(a,Cb[b])},a:function(a,b){S.bindTexture(a,Db[b])},S:function(a){S.bindVertexArray(Eb[a])},O:function(a,b,c,d){S.blendColor(a,b,c,d)},P:function(a,b){S.blendEquationSeparate(a,b)},Q:function(a,b,c,d){S.blendFuncSeparate(a,b,c,d)},q:function(a,b,c,d,e,h,g,m,n,p){S.blitFramebuffer(a,b,c,d,e,h,g,m,n,p)},Ja:function(a,
b,c,d){2<=R.version?c?S.bufferData(a,A,d,c,b):S.bufferData(a,b,d):S.bufferData(a,c?A.subarray(c,c+b):b,d)},m:function(a,b,c,d){2<=R.version?S.bufferSubData(a,b,A,d,c):S.bufferSubData(a,b,A.subarray(d,d+c))},Gb:function(a){S.clear(a)},ua:function(a,b,c,d){S.clearColor(a,b,c,d)},A:function(a){S.clearDepth(a)},Hb:function(a){S.clearStencil(a)},j:function(a,b,c,d){S.colorMask(!!a,!!b,!!c,!!d)},wa:function(a){S.compileShader(P[a])},Ga:function(a,b,c,d,e,h,g,m){2<=R.version?S.kc?S.compressedTexImage2D(a,
b,c,d,e,h,g,m):S.compressedTexImage2D(a,b,c,d,e,h,A,m,g):S.compressedTexImage2D(a,b,c,d,e,h,m?A.subarray(m,m+g):null)},Ea:function(a,b,c,d,e,h,g,m,n){S.kc?S.compressedTexImage3D(a,b,c,d,e,h,g,m,n):S.compressedTexImage3D(a,b,c,d,e,h,g,A,n,m)},Ca:function(){var a=Jb(O),b=S.createProgram();b.name=a;b.qc=b.oc=b.pc=0;b.tc=1;O[a]=b;return a},ya:function(a){var b=Jb(P);P[b]=S.createShader(a);return b},L:function(a){S.cullFace(a)},Sa:function(a,b){for(var c=0;c<a;c++){var d=C[b+4*c>>2],e=Ab[d];e&&(S.deleteBuffer(e),
e.name=0,Ab[d]=null,d==S.uc&&(S.uc=0),d==S.kc&&(S.kc=0))}},i:function(a,b){for(var c=0;c<a;++c){var d=C[b+4*c>>2],e=Bb[d];e&&(S.deleteFramebuffer(e),e.name=0,Bb[d]=null)}},y:function(a){if(a){var b=O[a];b?(S.deleteProgram(b),b.name=0,O[a]=null):Q(1281)}},U:function(a,b){for(var c=0;c<a;c++){var d=C[b+4*c>>2],e=Cb[d];e&&(S.deleteRenderbuffer(e),e.name=0,Cb[d]=null)}},u:function(a){if(a){var b=P[a];b?(S.deleteShader(b),P[a]=null):Q(1281)}},Ra:function(a,b){for(var c=0;c<a;c++){var d=C[b+4*c>>2],e=Db[d];
e&&(S.deleteTexture(e),e.name=0,Db[d]=null)}},Qa:function(a,b){for(var c=0;c<a;c++){var d=C[b+4*c>>2];S.deleteVertexArray(Eb[d]);Eb[d]=null}},x:function(a){S.depthFunc(a)},w:function(a){S.depthMask(!!a)},e:function(a){S.disable(a)},R:function(a){S.disableVertexAttribArray(a)},qb:function(a,b,c){S.drawArrays(a,b,c)},rb:function(a,b,c,d){S.drawArraysInstanced(a,b,c,d)},sb:function(a,b,c,d){S.drawElements(a,b,c,d)},tb:function(a,b,c,d,e){S.drawElementsInstanced(a,b,c,d,e)},g:function(a){S.enable(a)},
Db:function(a){S.enableVertexAttribArray(a)},M:function(a){S.frontFace(a)},Ka:function(a,b){Ob(a,b,"createBuffer",Ab)},K:function(a,b){Ob(a,b,"createRenderbuffer",Cb)},Ha:function(a,b){Ob(a,b,"createTexture",Db)},Pa:function(a,b){Ob(a,b,"createVertexArray",Eb)},Ib:function(a,b){return S.getAttribLocation(O[a],B(b))},d:function(a,b){Pb(a,b)},za:function(a,b,c,d){a=S.getProgramInfoLog(O[a]);null===a&&(a="(unknown error)");b=0<b&&d?z(a,A,d,b):0;c&&(C[c>>2]=b)},E:function(a,b,c){if(c)if(a>=zb)Q(1281);
else if(a=O[a],35716==b)a=S.getProgramInfoLog(a),null===a&&(a="(unknown error)"),C[c>>2]=a.length+1;else if(35719==b){if(!a.qc)for(b=0;b<S.getProgramParameter(a,35718);++b)a.qc=Math.max(a.qc,S.getActiveUniform(a,b).name.length+1);C[c>>2]=a.qc}else if(35722==b){if(!a.oc)for(b=0;b<S.getProgramParameter(a,35721);++b)a.oc=Math.max(a.oc,S.getActiveAttrib(a,b).name.length+1);C[c>>2]=a.oc}else if(35381==b){if(!a.pc)for(b=0;b<S.getProgramParameter(a,35382);++b)a.pc=Math.max(a.pc,S.getActiveUniformBlockName(a,
b).length+1);C[c>>2]=a.pc}else C[c>>2]=S.getProgramParameter(a,b);else Q(1281)},va:function(a,b,c,d){a=S.getShaderInfoLog(P[a]);null===a&&(a="(unknown error)");b=0<b&&d?z(a,A,d,b):0;c&&(C[c>>2]=b)},C:function(a,b,c){c?35716==b?(a=S.getShaderInfoLog(P[a]),null===a&&(a="(unknown error)"),C[c>>2]=a?a.length+1:0):35720==b?(a=S.getShaderSource(P[a]),C[c>>2]=a?a.length+1:0):C[c>>2]=S.getShaderParameter(P[a],b):Q(1281)},Ua:function(a){var b=Gb[a];if(!b){switch(a){case 7939:b=S.getSupportedExtensions()||
[];b=b.concat(b.map(function(d){return"GL_"+d}));b=T(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=S.getParameter(a))||Q(1280);b=b&&T(b);break;case 7938:b=S.getParameter(7938);b=2<=R.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=T(b);break;case 35724:b=S.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=T(b);break;default:Q(1280)}Gb[a]=b}return b},Ta:function(a,
b){if(2>R.version)return Q(1282),0;var c=Hb[a];if(c)return 0>b||b>=c.length?(Q(1281),0):c[b];switch(a){case 7939:return c=S.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return T(d)}),c=Hb[a]=c,0>b||b>=c.length?(Q(1281),0):c[b];default:return Q(1280),0}},l:function(a,b){b=B(b);if(a=O[a]){var c=a,d=c.mc,e=c.Lc,h;if(!d)for(c.mc=d={},c.Kc={},h=0;h<S.getProgramParameter(c,35718);++h){var g=S.getActiveUniform(c,h);var m=g.name;g=g.size;var n=Qb(m);n=0<n?
m.slice(0,n):m;var p=c.tc;c.tc+=g;e[n]=[g,p];for(m=0;m<g;++m)d[p]=m,c.Kc[p++]=n}c=a.mc;d=0;e=b;h=Qb(b);0<h&&(d=parseInt(b.slice(h+1))>>>0,e=b.slice(0,h));if((e=a.Lc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||S.getUniformLocation(a,b)))return d}else Q(1281);return-1},Ba:function(a){a=O[a];S.linkProgram(a);a.mc=0;a.Lc={}},N:function(a,b){S.polygonOffset(a,b)},r:function(a){S.readBuffer(a)},Ia:function(a,b,c,d){S.renderbufferStorage(a,b,c,d)},I:function(a,b,c,d,e){S.renderbufferStorageMultisample(a,b,c,d,e)},
s:function(a,b,c,d){S.scissor(a,b,c,d)},xa:function(a,b,c,d){for(var e="",h=0;h<b;++h){var g=d?C[d+4*h>>2]:-1;e+=B(C[c+4*h>>2],0>g?void 0:g)}S.shaderSource(P[a],e)},Na:function(a,b,c){S.stencilFunc(a,b,c)},ta:function(a,b,c,d){S.stencilFuncSeparate(a,b,c,d)},v:function(a){S.stencilMask(a)},Ma:function(a,b,c){S.stencilOp(a,b,c)},sa:function(a,b,c,d){S.stencilOpSeparate(a,b,c,d)},Fa:function(a,b,c,d,e,h,g,m,n){if(2<=R.version)if(S.kc)S.texImage2D(a,b,c,d,e,h,g,m,n);else if(n){var p=U(m);S.texImage2D(a,
b,c,d,e,h,g,m,p,n>>V(p))}else S.texImage2D(a,b,c,d,e,h,g,m,null);else S.texImage2D(a,b,c,d,e,h,g,m,n?Rb(m,g,d,e,n):null)},Da:function(a,b,c,d,e,h,g,m,n,p){if(S.kc)S.texImage3D(a,b,c,d,e,h,g,m,n,p);else if(p){var q=U(n);S.texImage3D(a,b,c,d,e,h,g,m,n,q,p>>V(q))}else S.texImage3D(a,b,c,d,e,h,g,m,n,null)},G:function(a,b,c){S.texParameterf(a,b,c)},f:function(a,b,c){S.texParameteri(a,b,c)},pb:function(a,b,c,d,e,h,g,m,n){if(2<=R.version)if(S.kc)S.texSubImage2D(a,b,c,d,e,h,g,m,n);else if(n){var p=U(m);S.texSubImage2D(a,
b,c,d,e,h,g,m,p,n>>V(p))}else S.texSubImage2D(a,b,c,d,e,h,g,m,null);else p=null,n&&(p=Rb(m,g,e,h,n)),S.texSubImage2D(a,b,c,d,e,h,g,m,p)},ob:function(a,b,c,d,e,h,g,m,n,p,q){if(S.kc)S.texSubImage3D(a,b,c,d,e,h,g,m,n,p,q);else if(q){var w=U(p);S.texSubImage3D(a,b,c,d,e,h,g,m,n,p,w,q>>V(w))}else S.texSubImage3D(a,b,c,d,e,h,g,m,n,p,null)},Cb:function(a,b,c){if(2<=R.version)S.uniform1fv(W(a),D,c>>2,b);else{if(288>=b)for(var d=X[b-1],e=0;e<b;++e)d[e]=D[c+4*e>>2];else d=D.subarray(c>>2,c+4*b>>2);S.uniform1fv(W(a),
d)}},D:function(a,b){S.uniform1i(W(a),b)},yb:function(a,b,c){if(2<=R.version)S.uniform1iv(W(a),C,c>>2,b);else{if(288>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=C[c+4*e>>2];else d=C.subarray(c>>2,c+4*b>>2);S.uniform1iv(W(a),d)}},Bb:function(a,b,c){if(2<=R.version)S.uniform2fv(W(a),D,c>>2,2*b);else{if(144>=b)for(var d=X[2*b-1],e=0;e<2*b;e+=2)d[e]=D[c+4*e>>2],d[e+1]=D[c+(4*e+4)>>2];else d=D.subarray(c>>2,c+8*b>>2);S.uniform2fv(W(a),d)}},xb:function(a,b,c){if(2<=R.version)S.uniform2iv(W(a),C,c>>2,2*b);else{if(144>=
b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=C[c+4*e>>2],d[e+1]=C[c+(4*e+4)>>2];else d=C.subarray(c>>2,c+8*b>>2);S.uniform2iv(W(a),d)}},Ab:function(a,b,c){if(2<=R.version)S.uniform3fv(W(a),D,c>>2,3*b);else{if(96>=b)for(var d=X[3*b-1],e=0;e<3*b;e+=3)d[e]=D[c+4*e>>2],d[e+1]=D[c+(4*e+4)>>2],d[e+2]=D[c+(4*e+8)>>2];else d=D.subarray(c>>2,c+12*b>>2);S.uniform3fv(W(a),d)}},wb:function(a,b,c){if(2<=R.version)S.uniform3iv(W(a),C,c>>2,3*b);else{if(96>=b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=C[c+4*e>>2],d[e+1]=
C[c+(4*e+4)>>2],d[e+2]=C[c+(4*e+8)>>2];else d=C.subarray(c>>2,c+12*b>>2);S.uniform3iv(W(a),d)}},zb:function(a,b,c){if(2<=R.version)S.uniform4fv(W(a),D,c>>2,4*b);else{if(72>=b){var d=X[4*b-1],e=D;c>>=2;for(var h=0;h<4*b;h+=4){var g=c+h;d[h]=e[g];d[h+1]=e[g+1];d[h+2]=e[g+2];d[h+3]=e[g+3]}}else d=D.subarray(c>>2,c+16*b>>2);S.uniform4fv(W(a),d)}},vb:function(a,b,c){if(2<=R.version)S.uniform4iv(W(a),C,c>>2,4*b);else{if(72>=b)for(var d=Y[4*b-1],e=0;e<4*b;e+=4)d[e]=C[c+4*e>>2],d[e+1]=C[c+(4*e+4)>>2],d[e+
2]=C[c+(4*e+8)>>2],d[e+3]=C[c+(4*e+12)>>2];else d=C.subarray(c>>2,c+16*b>>2);S.uniform4iv(W(a),d)}},ub:function(a,b,c,d){if(2<=R.version)S.uniformMatrix4fv(W(a),!!c,D,d>>2,16*b);else{if(18>=b){var e=X[16*b-1],h=D;d>>=2;for(var g=0;g<16*b;g+=16){var m=d+g;e[g]=h[m];e[g+1]=h[m+1];e[g+2]=h[m+2];e[g+3]=h[m+3];e[g+4]=h[m+4];e[g+5]=h[m+5];e[g+6]=h[m+6];e[g+7]=h[m+7];e[g+8]=h[m+8];e[g+9]=h[m+9];e[g+10]=h[m+10];e[g+11]=h[m+11];e[g+12]=h[m+12];e[g+13]=h[m+13];e[g+14]=h[m+14];e[g+15]=h[m+15]}}else e=D.subarray(d>>
2,d+64*b>>2);S.uniformMatrix4fv(W(a),!!c,e)}},k:function(a){a=O[a];S.useProgram(a);S.Mc=a},Eb:function(a,b){S.vertexAttribDivisor(a,b)},Fb:function(a,b,c,d,e,h){S.vertexAttribPointer(a,b,c,!!d,e,h)},t:function(a,b,c,d){S.viewport(a,b,c,d)},cb:function(){f.Ec=function(a){0!=Ub()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",f.Ec)},bb:function(){f.Jc=function(a){a=a.clipboardData.getData("text");pa("_sapp_emsc_onpaste",["string"],[a])};window.addEventListener("paste",
f.Jc)},$a:function(a){f.cd=[];a=B(a);a=document.getElementById(a);f.Fc=function(b){b.stopPropagation();b.preventDefault()};f.Gc=function(b){b.stopPropagation();b.preventDefault()};f.Hc=function(b){b.stopPropagation();b.preventDefault()};f.Ic=function(b){b.stopPropagation();b.preventDefault();var c=b.dataTransfer.files;f.dd=c;Vb(c.length);var d;for(d=0;d<c.length;d++)pa("_sapp_emsc_drop",["number","string"],[d,c[d].name]);Wb(b.clientX,b.clientY)};a.addEventListener("dragenter",f.Fc,!1);a.addEventListener("dragleave",
f.Gc,!1);a.addEventListener("dragover",f.Hc,!1);a.addEventListener("drop",f.Ic,!1)},Wa:function(){var a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},p:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Xb()});document.body.append(a)},o:function(){document.getElementById("_sokol_app_input_element").focus()},Kb:function(a){a=B(a);f.lc=document.getElementById(a);
f.lc||console.log("sokol_app.h: invalid target:"+a);f.lc.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},_a:function(){window.removeEventListener("beforeunload",f.Ec)},Za:function(){window.removeEventListener("paste",f.Jc)},Ya:function(a){a=B(a);a=document.getElementById(a);a.removeEventListener("dragenter",f.Fc);a.removeEventListener("dragleave",f.Gc);a.removeEventListener("dragover",f.Hc);a.removeEventListener("drop",f.Ic)},z:function(){f.lc&&f.lc.requestPointerLock&&
f.lc.requestPointerLock()},Va:function(a,b,c){var d=document.createElement("canvas");d.width=a;d.height=b;var e=d.getContext("2d"),h=e.createImageData(a,b);h.data.set(A.subarray(c,c+a*b*4));e.putImageData(h,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},n:function(){document.getElementById("_sokol_app_input_element").blur()},Xa:function(a){a=B(a);var b=document.createElement("textarea");b.setAttribute("autocomplete",
"off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");b.setAttribute("spellcheck","false");b.style.left="-100px";b.style.top="-100px";b.style.height=1;b.style.width=1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");document.body.removeChild(b)},lb:function(){return f.jc?f.jc.bufferSize:0},nb:function(a,b,c){f.dc=null;f.jc=null;"undefined"!==typeof AudioContext?f.dc=new AudioContext({sampleRate:a,latencyHint:"interactive"}):"undefined"!==typeof webkitAudioContext?
f.dc=new webkitAudioContext({sampleRate:a,latencyHint:"interactive"}):(f.dc=null,console.log("sokol_audio.h: no WebAudio support"));return f.dc?(console.log("sokol_audio.h: sample rate ",f.dc.sampleRate),f.jc=f.dc.createScriptProcessor(c,0,b),f.jc.onaudioprocess=function(d){var e=d.outputBuffer.length,h=Yb(e);if(h)for(var g=d.outputBuffer.numberOfChannels,m=0;m<g;m++)for(var n=d.outputBuffer.getChannelData(m),p=0;p<e;p++)n[p]=D[(h>>2)+(g*p+m)]},f.jc.connect(f.dc.destination),a=function(){f.dc&&"suspended"===
f.dc.state&&f.dc.resume()},document.addEventListener("click",a,{once:!0}),document.addEventListener("touchstart",a,{once:!0}),document.addEventListener("keydown",a,{once:!0}),1):0},mb:function(){return f.dc?f.dc.sampleRate:0},kb:function(){null!==f.dc&&(f.jc&&f.jc.disconnect(),f.dc.close(),f.dc=null,f.jc=null)},B:function(a,b,c,d,e,h){b=B(b);var g=new XMLHttpRequest;g.open("GET",b);g.responseType="arraybuffer";var m=0<d;m&&g.setRequestHeader("Range","bytes="+c+"-"+(c+d-1));g.onreadystatechange=function(){if(this.readyState==
this.DONE)if(206==this.status||200==this.status&&!m){var n=new Uint8Array(g.response),p=n.length;p<=h?(A.set(n,e),Zb(a,d,p)):$b(a)}else ac(a,this.status)};g.send()},oa:function(a,b){b=B(b);var c=new XMLHttpRequest;c.open("HEAD",b);c.onreadystatechange=function(){if(this.readyState==this.DONE)if(200==this.status){var d=this.getResponseHeader("Content-Length");bc(a,d)}else ac(a,this.status)};c.send()},na:function(){return navigator.userAgent.includes("Macintosh")?1:0}};
(function(){function a(e){f.asm=e.exports;na=f.asm.Lb;Ba();Ca=f.asm.cc;Ea.unshift(f.asm.Mb);F--;f.monitorRunDependencies&&f.monitorRunDependencies(F);0==F&&(null!==Ja&&(clearInterval(Ja),Ja=null),G&&(e=G,G=null,e()))}function b(e){a(e.instance)}function c(e){return Na().then(function(h){return WebAssembly.instantiate(h,d)}).then(function(h){return h}).then(e,function(h){v("failed to asynchronously prepare wasm: "+h);ma(h)})}var d={a:cc};F++;f.monitorRunDependencies&&f.monitorRunDependencies(F);if(f.instantiateWasm)try{return f.instantiateWasm(d,
a)}catch(e){return v("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return x||"function"!==typeof WebAssembly.instantiateStreaming||Ka()||H.startsWith("file://")||"function"!==typeof fetch?c(b):fetch(H,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(h){v("wasm streaming compile failed: "+h);v("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
f.___wasm_call_ctors=function(){return(f.___wasm_call_ctors=f.asm.Mb).apply(null,arguments)};var M=f._malloc=function(){return(M=f._malloc=f.asm.Nb).apply(null,arguments)},Xb=f.__sapp_emsc_notify_keyboard_hidden=function(){return(Xb=f.__sapp_emsc_notify_keyboard_hidden=f.asm.Ob).apply(null,arguments)};f.__sapp_emsc_onpaste=function(){return(f.__sapp_emsc_onpaste=f.asm.Pb).apply(null,arguments)};
var Ub=f.__sapp_html5_get_ask_leave_site=function(){return(Ub=f.__sapp_html5_get_ask_leave_site=f.asm.Qb).apply(null,arguments)},Vb=f.__sapp_emsc_begin_drop=function(){return(Vb=f.__sapp_emsc_begin_drop=f.asm.Rb).apply(null,arguments)};f.__sapp_emsc_drop=function(){return(f.__sapp_emsc_drop=f.asm.Sb).apply(null,arguments)};var Wb=f.__sapp_emsc_end_drop=function(){return(Wb=f.__sapp_emsc_end_drop=f.asm.Tb).apply(null,arguments)};
f.__sapp_emsc_invoke_fetch_cb=function(){return(f.__sapp_emsc_invoke_fetch_cb=f.asm.Ub).apply(null,arguments)};f._main=function(){return(f._main=f.asm.Vb).apply(null,arguments)};
var Yb=f.__saudio_emsc_pull=function(){return(Yb=f.__saudio_emsc_pull=f.asm.Wb).apply(null,arguments)},bc=f.__sfetch_emsc_head_response=function(){return(bc=f.__sfetch_emsc_head_response=f.asm.Xb).apply(null,arguments)},Zb=f.__sfetch_emsc_get_response=function(){return(Zb=f.__sfetch_emsc_get_response=f.asm.Yb).apply(null,arguments)},ac=f.__sfetch_emsc_failed_http_status=function(){return(ac=f.__sfetch_emsc_failed_http_status=f.asm.Zb).apply(null,arguments)},$b=f.__sfetch_emsc_failed_buffer_too_small=
function(){return($b=f.__sfetch_emsc_failed_buffer_too_small=f.asm._b).apply(null,arguments)},ra=f.stackSave=function(){return(ra=f.stackSave=f.asm.$b).apply(null,arguments)},sa=f.stackRestore=function(){return(sa=f.stackRestore=f.asm.ac).apply(null,arguments)},y=f.stackAlloc=function(){return(y=f.stackAlloc=f.asm.bc).apply(null,arguments)},dc;function ja(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}G=function ec(){dc||fc();dc||(G=ec)};
function fc(a){function b(){if(!dc&&(dc=!0,f.calledRun=!0,!oa)){Oa(Ea);Oa(Fa);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if(gc){var c=a,d=f._main;c=c||[];var e=c.length+1,h=y(4*(e+1));C[h>>2]=wa(da);for(var g=1;g<e;g++)C[(h>>2)+g]=wa(c[g-1]);C[(h>>2)+e]=0;try{var m=d(e,h);if(!(noExitRuntime||0<ka)){if(f.onExit)f.onExit(m);oa=!0}k(m,new ja(m))}catch(n){n instanceof ja||"unwind"==n||k(1,n)}finally{}}if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;)c=f.postRun.shift(),
Ha.unshift(c);Oa(Ha)}}a=a||ca;if(!(0<F)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Ia();Oa(Da);0<F||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},1)):b())}}f.run=fc;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var gc=!0;f.noInitialRun&&(gc=!1);fc();
