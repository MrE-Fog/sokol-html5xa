
var f;f||(f=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign({},f),ba=[],ca="./this.program",k=(a,b)=>{throw b;},da="object"==typeof window,m="function"==typeof importScripts,r="",ea,t,u,fs,fa,ha;
if("object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node)r=m?require("path").dirname(r)+"/":__dirname+"/",ha=()=>{fa||(fs=require("fs"),fa=require("path"))},ea=function(a,b){ha();a=fa.normalize(a);return fs.readFileSync(a,b?void 0:"utf8")},u=a=>{a=ea(a,!0);a.buffer||(a=new Uint8Array(a));return a},t=(a,b,c)=>{ha();a=fa.normalize(a);fs.readFile(a,function(d,e){d?c(d):b(e.buffer)})},1<process.argv.length&&(ca=process.argv[1].replace(/\\/g,"/")),ba=process.argv.slice(2),
"undefined"!=typeof module&&(module.exports=f),process.on("uncaughtException",function(a){if(!(a instanceof ia))throw a;}),process.on("unhandledRejection",function(a){throw a;}),k=(a,b)=>{if(noExitRuntime)throw process.exitCode=a,b;b instanceof ia||v("exiting due to exception: "+b);process.exit(a)},f.inspect=function(){return"[Emscripten Module object]"};else if(da||m)m?r=self.location.href:"undefined"!=typeof document&&document.currentScript&&(r=document.currentScript.src),r=0!==r.indexOf("blob:")?
r.substr(0,r.replace(/[?#].*/,"").lastIndexOf("/")+1):"",ea=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},m&&(u=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),t=(a,b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};
var ja=f.print||console.log.bind(console),v=f.printErr||console.warn.bind(console);Object.assign(f,aa);aa=null;f.arguments&&(ba=f.arguments);f.thisProgram&&(ca=f.thisProgram);f.quit&&(k=f.quit);var x;f.wasmBinary&&(x=f.wasmBinary);var noExitRuntime=f.noExitRuntime||!0;"object"!=typeof WebAssembly&&ka("no native wasm support detected");var la,ma=!1;
function na(a,b,c){var d={string:function(n){var p=0;if(null!==n&&void 0!==n&&0!==n){var q=(n.length<<2)+1;p=y(q);z(n,A,p,q)}return p},array:function(n){var p=y(n.length);oa.set(n,p);return p}};a=f["_"+a];var e=[],h=0;if(c)for(var g=0;g<c.length;g++){var l=d[b[g]];l?(0===h&&(h=pa()),e[g]=l(c[g])):e[g]=c[g]}b=a.apply(null,e);b=function(n){0!==h&&qa(h);return n}(b)}var ra="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;
function sa(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.buffer&&ra)return ra.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var h=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|h);else{var g=a[b++]&63;e=224==(e&240)?(e&15)<<12|h<<6|g:(e&7)<<18|h<<12|g<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function B(a,b){return a?sa(A,a,b):""}
function z(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var h=0;h<a.length;++h){var g=a.charCodeAt(h);if(55296<=g&&57343>=g){var l=a.charCodeAt(++h);g=65536+((g&1023)<<10)|l&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-e}
function ta(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function ua(a){var b=ta(a)+1,c=y(b);z(a,oa,c,b);return c}var va,oa,A,wa,xa,C,ya,D,E;
function za(){var a=la.buffer;va=a;f.HEAP8=oa=new Int8Array(a);f.HEAP16=wa=new Int16Array(a);f.HEAP32=C=new Int32Array(a);f.HEAPU8=A=new Uint8Array(a);f.HEAPU16=xa=new Uint16Array(a);f.HEAPU32=ya=new Uint32Array(a);f.HEAPF32=D=new Float32Array(a);f.HEAPF64=E=new Float64Array(a)}var Aa,Ba=[],Ca=[],Da=[],Ea=[],Fa=[];function Ga(){var a=f.preRun.shift();Ba.unshift(a)}var F=0,Ha=null,G=null;
function ka(a){if(f.onAbort)f.onAbort(a);a="Aborted("+a+")";v(a);ma=!0;throw new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");}function Ia(){return H.startsWith("data:application/octet-stream;base64,")}var H;H="plmpeg-sapp-ui.wasm";if(!Ia()){var Ja=H;H=f.locateFile?f.locateFile(Ja,r):r+Ja}function Ka(){var a=H;try{if(a==H&&x)return new Uint8Array(x);if(u)return u(a);throw"both async and sync fetching of the wasm failed";}catch(b){ka(b)}}
function La(){if(!x&&(da||m)){if("function"==typeof fetch&&!H.startsWith("file://"))return fetch(H,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+H+"'";return a.arrayBuffer()}).catch(function(){return Ka()});if(t)return new Promise(function(a,b){t(H,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ka()})}
function Ma(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(f);else{var c=b.Tc;"number"==typeof c?void 0===b.tc?I(c)():I(c)(b.tc):c(void 0===b.tc?null:b.tc)}}}var Na=[];function I(a){var b=Na[a];b||(a>=Na.length&&(Na.length=a+1),Na[a]=b=Aa.get(a));return b}var Oa=0;function Pa(){for(var a=J.length-1;0<=a;--a)Qa(a);J=[];Ra=[]}var Ra=[];function Sa(){if(Oa&&Ta.oc)for(var a=0;a<Ra.length;++a){var b=Ra[a];Ra.splice(a,1);--a;b.bd.apply(null,b.Qc)}}var J=[];
function Qa(a){var b=J[a];b.target.removeEventListener(b.ec,b.Mc,b.fc);J.splice(a,1)}function K(a){function b(d){++Oa;Ta=a;Sa();a.ic(d);Sa();--Oa}if(a.hc)a.Mc=b,a.target.addEventListener(a.ec,b,a.fc),J.push(a),Ua||(Ea.push(Pa),Ua=!0);else for(var c=0;c<J.length;++c)J[c].target==a.target&&J[c].ec==a.ec&&Qa(c--)}function Va(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}
var Ua,Ta,Wa,Xa,Ya,Za,$a,ab,bb,cb=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0];function L(a){a=2<a?B(a):a;return cb[a]||("undefined"!=typeof document?document.querySelector(a):void 0)}function db(a){return 0>cb.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}
function eb(a,b,c,d,e,h){Wa||(Wa=M(256));a={target:L(a),ec:h,hc:d,ic:function(g){g=g||event;var l=g.target.id?g.target.id:"",n=Wa;z(Va(g.target),A,n+0,128);z(l,A,n+128,128);I(d)(e,n,b)&&g.preventDefault()},fc:c};K(a)}
function fb(a,b,c,d,e,h){Xa||(Xa=M(176));a={target:L(a),oc:!0,ec:h,hc:d,ic:function(g){var l=Xa;E[l>>3]=g.timeStamp;var n=l>>2;C[n+2]=g.location;C[n+3]=g.ctrlKey;C[n+4]=g.shiftKey;C[n+5]=g.altKey;C[n+6]=g.metaKey;C[n+7]=g.repeat;C[n+8]=g.charCode;C[n+9]=g.keyCode;C[n+10]=g.which;z(g.key||"",A,l+44,32);z(g.code||"",A,l+76,32);z(g.char||"",A,l+108,32);z(g.locale||"",A,l+140,32);I(d)(e,l,b)&&g.preventDefault()},fc:c};K(a)}
function gb(a,b,c){E[a>>3]=b.timeStamp;a>>=2;C[a+2]=b.screenX;C[a+3]=b.screenY;C[a+4]=b.clientX;C[a+5]=b.clientY;C[a+6]=b.ctrlKey;C[a+7]=b.shiftKey;C[a+8]=b.altKey;C[a+9]=b.metaKey;wa[2*a+20]=b.button;wa[2*a+21]=b.buttons;C[a+11]=b.movementX;C[a+12]=b.movementY;c=db(c);C[a+13]=b.clientX-c.left;C[a+14]=b.clientY-c.top}
function N(a,b,c,d,e,h){Ya||(Ya=M(72));a=L(a);K({target:a,oc:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,ec:h,hc:d,ic:function(g){g=g||event;gb(Ya,g,a);I(d)(e,Ya,b)&&g.preventDefault()},fc:c})}function hb(a,b,c,d,e){Za||(Za=M(260));K({target:a,ec:e,hc:d,ic:function(h){h=h||event;var g=Za,l=document.pointerLockElement||document.lc||document.zc||document.xc;C[g>>2]=!!l;var n=l&&l.id?l.id:"";z(Va(l),A,g+4,128);z(n,A,g+132,128);I(d)(20,g,b)&&h.preventDefault()},fc:c})}
function ib(a,b,c,d,e){K({target:a,ec:e,hc:d,ic:function(h){h=h||event;I(d)(38,0,b)&&h.preventDefault()},fc:c})}
function jb(a,b,c,d){$a||($a=M(36));a=L(a);K({target:a,ec:"resize",hc:d,ic:function(e){e=e||event;if(e.target==a){var h=document.body;if(h){var g=$a;C[g>>2]=e.detail;C[g+4>>2]=h.clientWidth;C[g+8>>2]=h.clientHeight;C[g+12>>2]=innerWidth;C[g+16>>2]=innerHeight;C[g+20>>2]=outerWidth;C[g+24>>2]=outerHeight;C[g+28>>2]=pageXOffset;C[g+32>>2]=pageYOffset;I(d)(10,g,b)&&e.preventDefault()}}},fc:c})}
function kb(a,b,c,d,e,h){ab||(ab=M(1696));a=L(a);K({target:a,oc:"touchstart"==h||"touchend"==h,ec:h,hc:d,ic:function(g){for(var l,n={},p=g.touches,q=0;q<p.length;++q)l=p[q],l.Ac=l.Cc=0,n[l.identifier]=l;for(q=0;q<g.changedTouches.length;++q)l=g.changedTouches[q],l.Ac=1,n[l.identifier]=l;for(q=0;q<g.targetTouches.length;++q)n[g.targetTouches[q].identifier].Cc=1;p=ab;E[p>>3]=g.timeStamp;var w=p>>2;C[w+3]=g.ctrlKey;C[w+4]=g.shiftKey;C[w+5]=g.altKey;C[w+6]=g.metaKey;w+=7;var pb=db(a),qb=0;for(q in n)if(l=
n[q],C[w]=l.identifier,C[w+1]=l.screenX,C[w+2]=l.screenY,C[w+3]=l.clientX,C[w+4]=l.clientY,C[w+5]=l.pageX,C[w+6]=l.pageY,C[w+7]=l.Ac,C[w+8]=l.Cc,C[w+9]=l.clientX-pb.left,C[w+10]=l.clientY-pb.top,w+=13,31<++qb)break;C[p+8>>2]=qb;I(d)(e,p,b)&&g.preventDefault()},fc:c})}function lb(a,b,c,d,e,h){a={target:L(a),ec:h,hc:d,ic:function(g){g=g||event;I(d)(e,0,b)&&g.preventDefault()},fc:c};K(a)}
function mb(a,b,c,d){bb||(bb=M(104));K({target:a,oc:!0,ec:"wheel",hc:d,ic:function(e){e=e||event;var h=bb;gb(h,e,a);E[h+72>>3]=e.deltaX;E[h+80>>3]=e.deltaY;E[h+88>>3]=e.deltaZ;C[h+96>>2]=e.deltaMode;I(d)(9,h,b)&&e.preventDefault()},fc:c})}
function nb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,h){b.drawArraysInstancedANGLE(c,d,e,h)},a.drawElementsInstanced=function(c,d,e,h,g){b.drawElementsInstancedANGLE(c,d,e,h,g)})}
function ob(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function rb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function sb(a){a.Sc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function tb(a){a.Vc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function ub(a){a.Xc=a.getExtension("WEBGL_multi_draw")}var vb=1,wb=[],O=[],xb=[],yb=[],zb=[],P=[],Ab=[],Bb=[],Cb={},Db={};function Q(a){Eb||(Eb=a)}function Fb(a){for(var b=vb++,c=a.length;c<b;c++)a[c]=null;return b}
function Gb(a,b){a.lc||(a.lc=a.getContext,a.getContext=function(d,e){e=a.lc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.Bc?a.getContext("webgl2",b):a.getContext("webgl",b);return c?Hb(c,b):0}function Hb(a,b){var c=Fb(Bb),d={Uc:c,attributes:b,version:b.Bc,sc:a};a.canvas&&(a.canvas.Pc=d);Bb[c]=d;("undefined"==typeof b.yc||b.yc)&&Ib(d);return c}
function Ib(a){a||(a=R);if(!a.Oc){a.Oc=!0;var b=a.sc;nb(b);ob(b);rb(b);sb(b);tb(b);2<=a.version&&(b.wc=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.wc)b.wc=b.getExtension("EXT_disjoint_timer_query");ub(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var Eb,R,Jb=["default","low-power","high-performance"],Kb=[null,[],[]];
function Lb(a,b,c,d){for(var e=0;e<a;e++){var h=S[c](),g=h&&Fb(d);h?(h.name=g,d[g]=h):Q(1282);C[b+4*e>>2]=g}}
function Mb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=S.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>R.version){Q(1282);return}c=2*(S.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>R.version){Q(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=S.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":Q(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:Q(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)C[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){Q(1280);v("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:Q(1280);v("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}C[b>>2]=c}else Q(1281)}
function T(a){var b=ta(a)+1,c=M(b);z(a,A,c,b);return c}function Nb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function U(a){a-=5120;return 0==a?oa:1==a?A:2==a?wa:4==a?C:6==a?D:5==a||28922==a||28520==a||30779==a||30782==a?ya:xa}function V(a){return 31-Math.clz32(a.BYTES_PER_ELEMENT)}function Ob(a,b,c,d,e){a=U(a);var h=V(a);return a.subarray(e>>h,e+d*(c*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[b-6402]||1)*(1<<h)+4-1&-4)>>h)}
function W(a){var b=S.Lc;if(b){var c=b.nc[a];"number"==typeof c&&(b.nc[a]=c=S.getUniformLocation(b,b.Jc[a]+(0<c?"["+c+"]":"")));return c}Q(1282)}for(var X=[],Y=[],S,Pb=new Float32Array(288),Z=0;288>Z;++Z)X[Z]=Pb.subarray(0,Z+1);var Qb=new Int32Array(288);for(Z=0;288>Z;++Z)Y[Z]=Qb.subarray(0,Z+1);
var $b={ma:function(){return 0},ib:function(){return 0},jb:function(){},V:function(){return"number"==typeof devicePixelRatio&&devicePixelRatio||1},ea:function(a,b,c){a=L(a);if(!a)return-4;a=db(a);E[b>>3]=a.width;E[c>>3]=a.height;return 0},fb:function(a,b,c){A.copyWithin(a,b,b+c)},Oa:function(a,b){function c(d){I(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},eb:function(a){var b=A.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);
var e=Math;d=Math.max(a,d);e=e.min.call(e,2147483648,d+(65536-d%65536)%65536);a:{try{la.grow(e-va.byteLength+65535>>>16);za();var h=1;break a}catch(g){}h=void 0}if(h)return!0}return!1},Y:function(a,b,c,d){eb(a,b,c,d,12,"blur");return 0},T:function(a,b,c){a=L(a);if(!a)return-4;a.width=b;a.height=c;return 0},Z:function(a,b,c,d){eb(a,b,c,d,13,"focus");return 0},ha:function(a,b,c,d){fb(a,b,c,d,2,"keydown");return 0},fa:function(a,b,c,d){fb(a,b,c,d,1,"keypress");return 0},ga:function(a,b,c,d){fb(a,b,c,
d,3,"keyup");return 0},ra:function(a,b,c,d){N(a,b,c,d,5,"mousedown");return 0},la:function(a,b,c,d){N(a,b,c,d,33,"mouseenter");return 0},ja:function(a,b,c,d){N(a,b,c,d,34,"mouseleave");return 0},pa:function(a,b,c,d){N(a,b,c,d,8,"mousemove");return 0},qa:function(a,b,c,d){N(a,b,c,d,6,"mouseup");return 0},$:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.lc||document.body.zc||document.body.xc))return-1;a=L(a);if(!a)return-4;hb(a,b,c,d,"pointerlockchange");
hb(a,b,c,d,"mozpointerlockchange");hb(a,b,c,d,"webkitpointerlockchange");hb(a,b,c,d,"mspointerlockchange");return 0},_:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.lc||document.body.zc||document.body.xc))return-1;a=L(a);if(!a)return-4;ib(a,b,c,d,"pointerlockerror");ib(a,b,c,d,"mozpointerlockerror");ib(a,b,c,d,"webkitpointerlockerror");ib(a,b,c,d,"mspointerlockerror");return 0},ab:function(a,b,c,d){jb(a,b,c,d);return 0},aa:function(a,b,c,d){kb(a,b,c,d,25,"touchcancel");
return 0},ba:function(a,b,c,d){kb(a,b,c,d,23,"touchend");return 0},ca:function(a,b,c,d){kb(a,b,c,d,24,"touchmove");return 0},da:function(a,b,c,d){kb(a,b,c,d,22,"touchstart");return 0},X:function(a,b,c,d){lb(a,b,c,d,31,"webglcontextlost");return 0},W:function(a,b,c,d){lb(a,b,c,d,32,"webglcontextrestored");return 0},ia:function(a,b,c,d){a=L(a);return"undefined"!=typeof a.onwheel?(mb(a,b,c,d),0):-1},H:function(a,b){b>>=2;b={alpha:!!C[b],depth:!!C[b+1],stencil:!!C[b+2],antialias:!!C[b+3],premultipliedAlpha:!!C[b+
4],preserveDrawingBuffer:!!C[b+5],powerPreference:Jb[C[b+6]],failIfMajorPerformanceCaveat:!!C[b+7],Bc:C[b+8],Wc:C[b+9],yc:C[b+10],Nc:C[b+11],Yc:C[b+12],Zc:C[b+13]};a=L(a);return!a||b.Nc?0:Gb(a,b)},Jb:function(a,b){a=Bb[a];b=B(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&nb(S);"OES_vertex_array_object"==b&&ob(S);"WEBGL_draw_buffers"==b&&rb(S);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&sb(S);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&tb(S);"WEBGL_multi_draw"==
b&&ub(S);return!!a.sc.getExtension(b)},La:function(a){a>>=2;for(var b=0;14>b;++b)C[a+b]=0;C[a]=C[a+1]=C[a+3]=C[a+4]=C[a+8]=C[a+10]=1},Aa:function(a){R=Bb[a];f.Rc=S=R&&R.sc;return!a||S?0:-5},ka:function(){return 52},hb:function(){return 52},db:function(){return 70},gb:function(a,b,c,d){for(var e=0,h=0;h<c;h++){var g=ya[b>>2],l=ya[b+4>>2];b+=8;for(var n=0;n<l;n++){var p=A[g+n],q=Kb[a];0===p||10===p?((1===a?ja:v)(sa(q,0)),q.length=0):q.push(p)}e+=l}C[d>>2]=e;return 0},b:function(a){S.activeTexture(a)},
F:function(a,b){S.attachShader(O[a],P[b])},c:function(a,b){35051==a?S.vc=b:35052==a&&(S.kc=b);S.bindBuffer(a,wb[b])},h:function(a,b){S.bindFramebuffer(a,xb[b])},J:function(a,b){S.bindRenderbuffer(a,yb[b])},a:function(a,b){S.bindTexture(a,zb[b])},S:function(a){S.bindVertexArray(Ab[a])},O:function(a,b,c,d){S.blendColor(a,b,c,d)},P:function(a,b){S.blendEquationSeparate(a,b)},Q:function(a,b,c,d){S.blendFuncSeparate(a,b,c,d)},p:function(a,b,c,d,e,h,g,l,n,p){S.blitFramebuffer(a,b,c,d,e,h,g,l,n,p)},Ja:function(a,
b,c,d){2<=R.version?c&&b?S.bufferData(a,A,d,c,b):S.bufferData(a,b,d):S.bufferData(a,c?A.subarray(c,c+b):b,d)},u:function(a,b,c,d){2<=R.version?c&&S.bufferSubData(a,b,A,d,c):S.bufferSubData(a,b,A.subarray(d,d+c))},Gb:function(a){S.clear(a)},ua:function(a,b,c,d){S.clearColor(a,b,c,d)},A:function(a){S.clearDepth(a)},Hb:function(a){S.clearStencil(a)},j:function(a,b,c,d){S.colorMask(!!a,!!b,!!c,!!d)},wa:function(a){S.compileShader(P[a])},Ga:function(a,b,c,d,e,h,g,l){2<=R.version?S.kc||!g?S.compressedTexImage2D(a,
b,c,d,e,h,g,l):S.compressedTexImage2D(a,b,c,d,e,h,A,l,g):S.compressedTexImage2D(a,b,c,d,e,h,l?A.subarray(l,l+g):null)},Ea:function(a,b,c,d,e,h,g,l,n){S.kc?S.compressedTexImage3D(a,b,c,d,e,h,g,l,n):S.compressedTexImage3D(a,b,c,d,e,h,g,A,n,l)},Ca:function(){var a=Fb(O),b=S.createProgram();b.name=a;b.rc=b.pc=b.qc=0;b.uc=1;O[a]=b;return a},ya:function(a){var b=Fb(P);P[b]=S.createShader(a);return b},L:function(a){S.cullFace(a)},Sa:function(a,b){for(var c=0;c<a;c++){var d=C[b+4*c>>2],e=wb[d];e&&(S.deleteBuffer(e),
e.name=0,wb[d]=null,d==S.vc&&(S.vc=0),d==S.kc&&(S.kc=0))}},i:function(a,b){for(var c=0;c<a;++c){var d=C[b+4*c>>2],e=xb[d];e&&(S.deleteFramebuffer(e),e.name=0,xb[d]=null)}},y:function(a){if(a){var b=O[a];b?(S.deleteProgram(b),b.name=0,O[a]=null):Q(1281)}},U:function(a,b){for(var c=0;c<a;c++){var d=C[b+4*c>>2],e=yb[d];e&&(S.deleteRenderbuffer(e),e.name=0,yb[d]=null)}},t:function(a){if(a){var b=P[a];b?(S.deleteShader(b),P[a]=null):Q(1281)}},Ra:function(a,b){for(var c=0;c<a;c++){var d=C[b+4*c>>2],e=zb[d];
e&&(S.deleteTexture(e),e.name=0,zb[d]=null)}},Qa:function(a,b){for(var c=0;c<a;c++){var d=C[b+4*c>>2];S.deleteVertexArray(Ab[d]);Ab[d]=null}},x:function(a){S.depthFunc(a)},w:function(a){S.depthMask(!!a)},e:function(a){S.disable(a)},R:function(a){S.disableVertexAttribArray(a)},qb:function(a,b,c){S.drawArrays(a,b,c)},rb:function(a,b,c,d){S.drawArraysInstanced(a,b,c,d)},sb:function(a,b,c,d){S.drawElements(a,b,c,d)},tb:function(a,b,c,d,e){S.drawElementsInstanced(a,b,c,d,e)},g:function(a){S.enable(a)},
Db:function(a){S.enableVertexAttribArray(a)},M:function(a){S.frontFace(a)},Ka:function(a,b){Lb(a,b,"createBuffer",wb)},K:function(a,b){Lb(a,b,"createRenderbuffer",yb)},Ha:function(a,b){Lb(a,b,"createTexture",zb)},Pa:function(a,b){Lb(a,b,"createVertexArray",Ab)},Ib:function(a,b){return S.getAttribLocation(O[a],B(b))},d:function(a,b){Mb(a,b)},za:function(a,b,c,d){a=S.getProgramInfoLog(O[a]);null===a&&(a="(unknown error)");b=0<b&&d?z(a,A,d,b):0;c&&(C[c>>2]=b)},E:function(a,b,c){if(c)if(a>=vb)Q(1281);
else if(a=O[a],35716==b)a=S.getProgramInfoLog(a),null===a&&(a="(unknown error)"),C[c>>2]=a.length+1;else if(35719==b){if(!a.rc)for(b=0;b<S.getProgramParameter(a,35718);++b)a.rc=Math.max(a.rc,S.getActiveUniform(a,b).name.length+1);C[c>>2]=a.rc}else if(35722==b){if(!a.pc)for(b=0;b<S.getProgramParameter(a,35721);++b)a.pc=Math.max(a.pc,S.getActiveAttrib(a,b).name.length+1);C[c>>2]=a.pc}else if(35381==b){if(!a.qc)for(b=0;b<S.getProgramParameter(a,35382);++b)a.qc=Math.max(a.qc,S.getActiveUniformBlockName(a,
b).length+1);C[c>>2]=a.qc}else C[c>>2]=S.getProgramParameter(a,b);else Q(1281)},va:function(a,b,c,d){a=S.getShaderInfoLog(P[a]);null===a&&(a="(unknown error)");b=0<b&&d?z(a,A,d,b):0;c&&(C[c>>2]=b)},C:function(a,b,c){c?35716==b?(a=S.getShaderInfoLog(P[a]),null===a&&(a="(unknown error)"),C[c>>2]=a?a.length+1:0):35720==b?(a=S.getShaderSource(P[a]),C[c>>2]=a?a.length+1:0):C[c>>2]=S.getShaderParameter(P[a],b):Q(1281)},Ua:function(a){var b=Cb[a];if(!b){switch(a){case 7939:b=S.getSupportedExtensions()||
[];b=b.concat(b.map(function(d){return"GL_"+d}));b=T(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=S.getParameter(a))||Q(1280);b=b&&T(b);break;case 7938:b=S.getParameter(7938);b=2<=R.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=T(b);break;case 35724:b=S.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=T(b);break;default:Q(1280)}Cb[a]=b}return b},Ta:function(a,
b){if(2>R.version)return Q(1282),0;var c=Db[a];if(c)return 0>b||b>=c.length?(Q(1281),0):c[b];switch(a){case 7939:return c=S.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return T(d)}),c=Db[a]=c,0>b||b>=c.length?(Q(1281),0):c[b];default:return Q(1280),0}},l:function(a,b){b=B(b);if(a=O[a]){var c=a,d=c.nc,e=c.Kc,h;if(!d)for(c.nc=d={},c.Jc={},h=0;h<S.getProgramParameter(c,35718);++h){var g=S.getActiveUniform(c,h);var l=g.name;g=g.size;var n=Nb(l);n=0<n?
l.slice(0,n):l;var p=c.uc;c.uc+=g;e[n]=[g,p];for(l=0;l<g;++l)d[p]=l,c.Jc[p++]=n}c=a.nc;d=0;e=b;h=Nb(b);0<h&&(d=parseInt(b.slice(h+1))>>>0,e=b.slice(0,h));if((e=a.Kc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||S.getUniformLocation(a,b)))return d}else Q(1281);return-1},Ba:function(a){a=O[a];S.linkProgram(a);a.nc=0;a.Kc={}},N:function(a,b){S.polygonOffset(a,b)},q:function(a){S.readBuffer(a)},Ia:function(a,b,c,d){S.renderbufferStorage(a,b,c,d)},I:function(a,b,c,d,e){S.renderbufferStorageMultisample(a,b,c,d,e)},
r:function(a,b,c,d){S.scissor(a,b,c,d)},xa:function(a,b,c,d){for(var e="",h=0;h<b;++h){var g=d?C[d+4*h>>2]:-1;e+=B(C[c+4*h>>2],0>g?void 0:g)}S.shaderSource(P[a],e)},Na:function(a,b,c){S.stencilFunc(a,b,c)},ta:function(a,b,c,d){S.stencilFuncSeparate(a,b,c,d)},v:function(a){S.stencilMask(a)},Ma:function(a,b,c){S.stencilOp(a,b,c)},sa:function(a,b,c,d){S.stencilOpSeparate(a,b,c,d)},Fa:function(a,b,c,d,e,h,g,l,n){if(2<=R.version)if(S.kc)S.texImage2D(a,b,c,d,e,h,g,l,n);else if(n){var p=U(l);S.texImage2D(a,
b,c,d,e,h,g,l,p,n>>V(p))}else S.texImage2D(a,b,c,d,e,h,g,l,null);else S.texImage2D(a,b,c,d,e,h,g,l,n?Ob(l,g,d,e,n):null)},Da:function(a,b,c,d,e,h,g,l,n,p){if(S.kc)S.texImage3D(a,b,c,d,e,h,g,l,n,p);else if(p){var q=U(n);S.texImage3D(a,b,c,d,e,h,g,l,n,q,p>>V(q))}else S.texImage3D(a,b,c,d,e,h,g,l,n,null)},G:function(a,b,c){S.texParameterf(a,b,c)},f:function(a,b,c){S.texParameteri(a,b,c)},pb:function(a,b,c,d,e,h,g,l,n){if(2<=R.version)if(S.kc)S.texSubImage2D(a,b,c,d,e,h,g,l,n);else if(n){var p=U(l);S.texSubImage2D(a,
b,c,d,e,h,g,l,p,n>>V(p))}else S.texSubImage2D(a,b,c,d,e,h,g,l,null);else p=null,n&&(p=Ob(l,g,e,h,n)),S.texSubImage2D(a,b,c,d,e,h,g,l,p)},ob:function(a,b,c,d,e,h,g,l,n,p,q){if(S.kc)S.texSubImage3D(a,b,c,d,e,h,g,l,n,p,q);else if(q){var w=U(p);S.texSubImage3D(a,b,c,d,e,h,g,l,n,p,w,q>>V(w))}else S.texSubImage3D(a,b,c,d,e,h,g,l,n,p,null)},Cb:function(a,b,c){if(2<=R.version)b&&S.uniform1fv(W(a),D,c>>2,b);else{if(288>=b)for(var d=X[b-1],e=0;e<b;++e)d[e]=D[c+4*e>>2];else d=D.subarray(c>>2,c+4*b>>2);S.uniform1fv(W(a),
d)}},D:function(a,b){S.uniform1i(W(a),b)},yb:function(a,b,c){if(2<=R.version)b&&S.uniform1iv(W(a),C,c>>2,b);else{if(288>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=C[c+4*e>>2];else d=C.subarray(c>>2,c+4*b>>2);S.uniform1iv(W(a),d)}},Bb:function(a,b,c){if(2<=R.version)b&&S.uniform2fv(W(a),D,c>>2,2*b);else{if(144>=b)for(var d=X[2*b-1],e=0;e<2*b;e+=2)d[e]=D[c+4*e>>2],d[e+1]=D[c+(4*e+4)>>2];else d=D.subarray(c>>2,c+8*b>>2);S.uniform2fv(W(a),d)}},xb:function(a,b,c){if(2<=R.version)b&&S.uniform2iv(W(a),C,c>>2,
2*b);else{if(144>=b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=C[c+4*e>>2],d[e+1]=C[c+(4*e+4)>>2];else d=C.subarray(c>>2,c+8*b>>2);S.uniform2iv(W(a),d)}},Ab:function(a,b,c){if(2<=R.version)b&&S.uniform3fv(W(a),D,c>>2,3*b);else{if(96>=b)for(var d=X[3*b-1],e=0;e<3*b;e+=3)d[e]=D[c+4*e>>2],d[e+1]=D[c+(4*e+4)>>2],d[e+2]=D[c+(4*e+8)>>2];else d=D.subarray(c>>2,c+12*b>>2);S.uniform3fv(W(a),d)}},wb:function(a,b,c){if(2<=R.version)b&&S.uniform3iv(W(a),C,c>>2,3*b);else{if(96>=b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=
C[c+4*e>>2],d[e+1]=C[c+(4*e+4)>>2],d[e+2]=C[c+(4*e+8)>>2];else d=C.subarray(c>>2,c+12*b>>2);S.uniform3iv(W(a),d)}},zb:function(a,b,c){if(2<=R.version)b&&S.uniform4fv(W(a),D,c>>2,4*b);else{if(72>=b){var d=X[4*b-1],e=D;c>>=2;for(var h=0;h<4*b;h+=4){var g=c+h;d[h]=e[g];d[h+1]=e[g+1];d[h+2]=e[g+2];d[h+3]=e[g+3]}}else d=D.subarray(c>>2,c+16*b>>2);S.uniform4fv(W(a),d)}},vb:function(a,b,c){if(2<=R.version)b&&S.uniform4iv(W(a),C,c>>2,4*b);else{if(72>=b)for(var d=Y[4*b-1],e=0;e<4*b;e+=4)d[e]=C[c+4*e>>2],d[e+
1]=C[c+(4*e+4)>>2],d[e+2]=C[c+(4*e+8)>>2],d[e+3]=C[c+(4*e+12)>>2];else d=C.subarray(c>>2,c+16*b>>2);S.uniform4iv(W(a),d)}},ub:function(a,b,c,d){if(2<=R.version)b&&S.uniformMatrix4fv(W(a),!!c,D,d>>2,16*b);else{if(18>=b){var e=X[16*b-1],h=D;d>>=2;for(var g=0;g<16*b;g+=16){var l=d+g;e[g]=h[l];e[g+1]=h[l+1];e[g+2]=h[l+2];e[g+3]=h[l+3];e[g+4]=h[l+4];e[g+5]=h[l+5];e[g+6]=h[l+6];e[g+7]=h[l+7];e[g+8]=h[l+8];e[g+9]=h[l+9];e[g+10]=h[l+10];e[g+11]=h[l+11];e[g+12]=h[l+12];e[g+13]=h[l+13];e[g+14]=h[l+14];e[g+
15]=h[l+15]}}else e=D.subarray(d>>2,d+64*b>>2);S.uniformMatrix4fv(W(a),!!c,e)}},k:function(a){a=O[a];S.useProgram(a);S.Lc=a},Eb:function(a,b){S.vertexAttribDivisor(a,b)},Fb:function(a,b,c,d,e,h){S.vertexAttribPointer(a,b,c,!!d,e,h)},s:function(a,b,c,d){S.viewport(a,b,c,d)},cb:function(){f.Dc=function(a){0!=Rb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",f.Dc)},bb:function(){f.Ic=function(a){a=a.clipboardData.getData("text");na("_sapp_emsc_onpaste",["string"],[a])};
window.addEventListener("paste",f.Ic)},$a:function(a){f.$c=[];a=B(a);a=document.getElementById(a);f.Ec=function(b){b.stopPropagation();b.preventDefault()};f.Fc=function(b){b.stopPropagation();b.preventDefault()};f.Gc=function(b){b.stopPropagation();b.preventDefault()};f.Hc=function(b){b.stopPropagation();b.preventDefault();var c=b.dataTransfer.files;f.ad=c;Sb(c.length);var d;for(d=0;d<c.length;d++)na("_sapp_emsc_drop",["number","string"],[d,c[d].name]);Tb(b.clientX,b.clientY)};a.addEventListener("dragenter",
f.Ec,!1);a.addEventListener("dragleave",f.Fc,!1);a.addEventListener("dragover",f.Gc,!1);a.addEventListener("drop",f.Hc,!1)},Wa:function(){var a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},o:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Ub()});document.body.append(a)},n:function(){document.getElementById("_sokol_app_input_element").focus()},Kb:function(a){a=
B(a);f.mc=document.getElementById(a);f.mc||console.log("sokol_app.h: invalid target:"+a);f.mc.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},_a:function(){window.removeEventListener("beforeunload",f.Dc)},Za:function(){window.removeEventListener("paste",f.Ic)},Ya:function(a){a=B(a);a=document.getElementById(a);a.removeEventListener("dragenter",f.Ec);a.removeEventListener("dragleave",f.Fc);a.removeEventListener("dragover",f.Gc);a.removeEventListener("drop",
f.Hc)},z:function(){f.mc&&f.mc.requestPointerLock&&f.mc.requestPointerLock()},Va:function(a,b,c){var d=document.createElement("canvas");d.width=a;d.height=b;var e=d.getContext("2d"),h=e.createImageData(a,b);h.data.set(A.subarray(c,c+a*b*4));e.putImageData(h,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},m:function(){document.getElementById("_sokol_app_input_element").blur()},Xa:function(a){a=B(a);var b=document.createElement("textarea");
b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");b.setAttribute("spellcheck","false");b.style.left="-100px";b.style.top="-100px";b.style.height=1;b.style.width=1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");document.body.removeChild(b)},lb:function(){return f.jc?f.jc.bufferSize:0},nb:function(a,b,c){f.dc=null;f.jc=null;"undefined"!==typeof AudioContext?f.dc=new AudioContext({sampleRate:a,latencyHint:"interactive"}):
"undefined"!==typeof webkitAudioContext?f.dc=new webkitAudioContext({sampleRate:a,latencyHint:"interactive"}):(f.dc=null,console.log("sokol_audio.h: no WebAudio support"));return f.dc?(console.log("sokol_audio.h: sample rate ",f.dc.sampleRate),f.jc=f.dc.createScriptProcessor(c,0,b),f.jc.onaudioprocess=function(d){var e=d.outputBuffer.length,h=Vb(e);if(h)for(var g=d.outputBuffer.numberOfChannels,l=0;l<g;l++)for(var n=d.outputBuffer.getChannelData(l),p=0;p<e;p++)n[p]=D[(h>>2)+(g*p+l)]},f.jc.connect(f.dc.destination),
a=function(){f.dc&&"suspended"===f.dc.state&&f.dc.resume()},document.addEventListener("click",a,{once:!0}),document.addEventListener("touchstart",a,{once:!0}),document.addEventListener("keydown",a,{once:!0}),1):0},mb:function(){return f.dc?f.dc.sampleRate:0},kb:function(){null!==f.dc&&(f.jc&&f.jc.disconnect(),f.dc.close(),f.dc=null,f.jc=null)},B:function(a,b,c,d,e,h){b=B(b);var g=new XMLHttpRequest;g.open("GET",b);g.responseType="arraybuffer";var l=0<d;l&&g.setRequestHeader("Range","bytes="+c+"-"+
(c+d-1));g.onreadystatechange=function(){if(this.readyState==this.DONE)if(206==this.status||200==this.status&&!l){var n=new Uint8Array(g.response),p=n.length;p<=h?(A.set(n,e),Wb(a,d,p)):Xb(a)}else Yb(a,this.status)};g.send()},oa:function(a,b){b=B(b);var c=new XMLHttpRequest;c.open("HEAD",b);c.onreadystatechange=function(){if(this.readyState==this.DONE)if(200==this.status){var d=this.getResponseHeader("Content-Length");Zb(a,d)}else Yb(a,this.status)};c.send()},na:function(){return navigator.userAgent.includes("Macintosh")?
1:0}};
(function(){function a(e){f.asm=e.exports;la=f.asm.Lb;za();Aa=f.asm.$b;Ca.unshift(f.asm.Mb);F--;f.monitorRunDependencies&&f.monitorRunDependencies(F);0==F&&(null!==Ha&&(clearInterval(Ha),Ha=null),G&&(e=G,G=null,e()))}function b(e){a(e.instance)}function c(e){return La().then(function(h){return WebAssembly.instantiate(h,d)}).then(function(h){return h}).then(e,function(h){v("failed to asynchronously prepare wasm: "+h);ka(h)})}var d={a:$b};F++;f.monitorRunDependencies&&f.monitorRunDependencies(F);if(f.instantiateWasm)try{return f.instantiateWasm(d,
a)}catch(e){return v("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return x||"function"!=typeof WebAssembly.instantiateStreaming||Ia()||H.startsWith("file://")||"function"!=typeof fetch?c(b):fetch(H,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(h){v("wasm streaming compile failed: "+h);v("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
f.___wasm_call_ctors=function(){return(f.___wasm_call_ctors=f.asm.Mb).apply(null,arguments)};var M=f._malloc=function(){return(M=f._malloc=f.asm.Nb).apply(null,arguments)},Ub=f.__sapp_emsc_notify_keyboard_hidden=function(){return(Ub=f.__sapp_emsc_notify_keyboard_hidden=f.asm.Ob).apply(null,arguments)};f.__sapp_emsc_onpaste=function(){return(f.__sapp_emsc_onpaste=f.asm.Pb).apply(null,arguments)};
var Rb=f.__sapp_html5_get_ask_leave_site=function(){return(Rb=f.__sapp_html5_get_ask_leave_site=f.asm.Qb).apply(null,arguments)},Sb=f.__sapp_emsc_begin_drop=function(){return(Sb=f.__sapp_emsc_begin_drop=f.asm.Rb).apply(null,arguments)};f.__sapp_emsc_drop=function(){return(f.__sapp_emsc_drop=f.asm.Sb).apply(null,arguments)};var Tb=f.__sapp_emsc_end_drop=function(){return(Tb=f.__sapp_emsc_end_drop=f.asm.Tb).apply(null,arguments)};
f.__sapp_emsc_invoke_fetch_cb=function(){return(f.__sapp_emsc_invoke_fetch_cb=f.asm.Ub).apply(null,arguments)};f._main=function(){return(f._main=f.asm.Vb).apply(null,arguments)};
var Vb=f.__saudio_emsc_pull=function(){return(Vb=f.__saudio_emsc_pull=f.asm.Wb).apply(null,arguments)},Zb=f.__sfetch_emsc_head_response=function(){return(Zb=f.__sfetch_emsc_head_response=f.asm.Xb).apply(null,arguments)},Wb=f.__sfetch_emsc_get_response=function(){return(Wb=f.__sfetch_emsc_get_response=f.asm.Yb).apply(null,arguments)},Yb=f.__sfetch_emsc_failed_http_status=function(){return(Yb=f.__sfetch_emsc_failed_http_status=f.asm.Zb).apply(null,arguments)},Xb=f.__sfetch_emsc_failed_buffer_too_small=
function(){return(Xb=f.__sfetch_emsc_failed_buffer_too_small=f.asm._b).apply(null,arguments)},pa=f.stackSave=function(){return(pa=f.stackSave=f.asm.ac).apply(null,arguments)},qa=f.stackRestore=function(){return(qa=f.stackRestore=f.asm.bc).apply(null,arguments)},y=f.stackAlloc=function(){return(y=f.stackAlloc=f.asm.cc).apply(null,arguments)},ac;function ia(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}G=function bc(){ac||cc();ac||(G=bc)};
function cc(a){function b(){if(!ac&&(ac=!0,f.calledRun=!0,!ma)){Ma(Ca);Ma(Da);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if(dc){var c=a,d=f._main;c=c||[];var e=c.length+1,h=y(4*(e+1));C[h>>2]=ua(ca);for(var g=1;g<e;g++)C[(h>>2)+g]=ua(c[g-1]);C[(h>>2)+e]=0;try{var l=d(e,h);if(!noExitRuntime){if(f.onExit)f.onExit(l);ma=!0}k(l,new ia(l))}catch(n){n instanceof ia||"unwind"==n||k(1,n)}finally{}}if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;)c=f.postRun.shift(),
Fa.unshift(c);Ma(Fa)}}a=a||ba;if(!(0<F)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Ga();Ma(Ba);0<F||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},1)):b())}}f.run=cc;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var dc=!0;f.noInitialRun&&(dc=!1);cc();
