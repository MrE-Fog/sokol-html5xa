
var f;f||(f=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign,ba=aa({},f),ca=[],da="./this.program",h=(a,b)=>{throw b;},ea="object"===typeof window,l="function"===typeof importScripts,p="",fa,q,t,fs,u,ha;
if("object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)p=l?require("path").dirname(p)+"/":__dirname+"/",ha=function(){u||(fs=require("fs"),u=require("path"))},fa=function(a,b){ha();a=u.normalize(a);return fs.readFileSync(a,b?null:"utf8")},t=function(a){a=fa(a,!0);a.buffer||(a=new Uint8Array(a));return a},q=function(a,b,c){ha();a=u.normalize(a);fs.readFile(a,function(d,e){d?c(d):b(e.buffer)})},1<process.argv.length&&(da=process.argv[1].replace(/\\/g,
"/")),ca=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=f),process.on("uncaughtException",function(a){if(!(a instanceof v))throw a;}),process.on("unhandledRejection",function(a){throw a;}),h=(a,b)=>{if(noExitRuntime||0<ia)throw process.exitCode=a,b;b instanceof v||y("exiting due to exception: "+b);process.exit(a)},f.inspect=function(){return"[Emscripten Module object]"};else if(ea||l)l?p=self.location.href:"undefined"!==typeof document&&document.currentScript&&(p=document.currentScript.src),
p=0!==p.indexOf("blob:")?p.substr(0,p.replace(/[?#].*/,"").lastIndexOf("/")+1):"",fa=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},l&&(t=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),q=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};
f.print||console.log.bind(console);var y=f.printErr||console.warn.bind(console);aa(f,ba);ba=null;f.arguments&&(ca=f.arguments);f.thisProgram&&(da=f.thisProgram);f.quit&&(h=f.quit);var z;f.wasmBinary&&(z=f.wasmBinary);var noExitRuntime=f.noExitRuntime||!0;"object"!==typeof WebAssembly&&ja("no native wasm support detected");var ka,la=!1;
function ma(a,b,c){var d={string:function(n){var r=0;if(null!==n&&void 0!==n&&0!==n){var x=(n.length<<2)+1;r=A(x);B(n,C,r,x)}return r},array:function(n){var r=A(n.length);na.set(n,r);return r}};a=f["_"+a];var e=[],k=0;if(c)for(var g=0;g<c.length;g++){var m=d[b[g]];m?(0===k&&(k=oa()),e[g]=m(c[g])):e[g]=c[g]}b=a.apply(null,e);b=function(n){0!==k&&pa(k);return n}(b)}var qa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function D(a,b){if(a){var c=C,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&qa)a=qa.decode(c.subarray(a,b));else{for(d="";a<b;){var e=c[a++];if(e&128){var k=c[a++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|k);else{var g=c[a++]&63;e=224==(e&240)?(e&15)<<12|k<<6|g:(e&7)<<18|k<<12|g<<6|c[a++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}a=d}}else a="";return a}
function B(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var k=0;k<a.length;++k){var g=a.charCodeAt(k);if(55296<=g&&57343>=g){var m=a.charCodeAt(++k);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-e}
function ra(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function sa(a){var b=ra(a)+1,c=A(b);B(a,na,c,b);return c}var ta,na,C,ua,E,F,G;
function va(){var a=ka.buffer;ta=a;f.HEAP8=na=new Int8Array(a);f.HEAP16=ua=new Int16Array(a);f.HEAP32=E=new Int32Array(a);f.HEAPU8=C=new Uint8Array(a);f.HEAPU16=new Uint16Array(a);f.HEAPU32=new Uint32Array(a);f.HEAPF32=F=new Float32Array(a);f.HEAPF64=G=new Float64Array(a)}var wa,xa=[],ya=[],za=[],Aa=[],Ba=[],ia=0;function Ca(){var a=f.preRun.shift();xa.unshift(a)}var H=0,Da=null,I=null;f.preloadedImages={};f.preloadedAudios={};
function ja(a){if(f.onAbort)f.onAbort(a);a="Aborted("+a+")";y(a);la=!0;throw new WebAssembly.RuntimeError(a+". Build with -s ASSERTIONS=1 for more info.");}function Ea(){return J.startsWith("data:application/octet-stream;base64,")}var J;J="noentry-sapp.wasm";if(!Ea()){var Fa=J;J=f.locateFile?f.locateFile(Fa,p):p+Fa}function Ga(){var a=J;try{if(a==J&&z)return new Uint8Array(z);if(t)return t(a);throw"both async and sync fetching of the wasm failed";}catch(b){ja(b)}}
function Ha(){if(!z&&(ea||l)){if("function"===typeof fetch&&!J.startsWith("file://"))return fetch(J,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+J+"'";return a.arrayBuffer()}).catch(function(){return Ga()});if(q)return new Promise(function(a,b){q(J,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ga()})}
function Ia(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(f);else{var c=b.nc;"number"===typeof c?void 0===b.Kb?K(c)():K(c)(b.Kb):c(void 0===b.Kb?null:b.Kb)}}}var Ja=[];function K(a){var b=Ja[a];b||(a>=Ja.length&&(Ja.length=a+1),Ja[a]=b=wa.get(a));return b}var Ka=0;function La(){for(var a=L.length-1;0<=a;--a)Ma(a);L=[];Na=[]}var Na=[];function Oa(){if(Ka&&Pa.Fb)for(var a=0;a<Na.length;++a){var b=Na[a];Na.splice(a,1);--a;b.wc.apply(null,b.kc)}}var L=[];
function Ma(a){var b=L[a];b.target.removeEventListener(b.zb,b.fc,b.Ab);L.splice(a,1)}function M(a){function b(d){++Ka;Pa=a;Oa();a.Cb(d);Oa();--Ka}if(a.Bb)a.fc=b,a.target.addEventListener(a.zb,b,a.Ab),L.push(a),Qa||(Aa.push(La),Qa=!0);else for(var c=0;c<L.length;++c)L[c].target==a.target&&L[c].zb==a.zb&&Ma(c--)}function Ra(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}
var Qa,Pa,Sa,Ta,Ua,Va,Wa,Xa,Ya,Za=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function N(a){a=2<a?D(a):a;return Za[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}function $a(a){return 0>Za.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}
function ab(a,b,c,d,e,k){Sa||(Sa=O(256));a={target:N(a),zb:k,Bb:d,Cb:function(g){g=g||event;var m=g.target.id?g.target.id:"",n=Sa;B(Ra(g.target),C,n+0,128);B(m,C,n+128,128);K(d)(e,n,b)&&g.preventDefault()},Ab:c};M(a)}
function bb(a,b,c,d,e,k){Ta||(Ta=O(176));a={target:N(a),Fb:!0,zb:k,Bb:d,Cb:function(g){var m=Ta;G[m>>3]=g.timeStamp;var n=m>>2;E[n+2]=g.location;E[n+3]=g.ctrlKey;E[n+4]=g.shiftKey;E[n+5]=g.altKey;E[n+6]=g.metaKey;E[n+7]=g.repeat;E[n+8]=g.charCode;E[n+9]=g.keyCode;E[n+10]=g.which;B(g.key||"",C,m+44,32);B(g.code||"",C,m+76,32);B(g.char||"",C,m+108,32);B(g.locale||"",C,m+140,32);K(d)(e,m,b)&&g.preventDefault()},Ab:c};M(a)}
function cb(a,b,c){G[a>>3]=b.timeStamp;a>>=2;E[a+2]=b.screenX;E[a+3]=b.screenY;E[a+4]=b.clientX;E[a+5]=b.clientY;E[a+6]=b.ctrlKey;E[a+7]=b.shiftKey;E[a+8]=b.altKey;E[a+9]=b.metaKey;ua[2*a+20]=b.button;ua[2*a+21]=b.buttons;E[a+11]=b.movementX;E[a+12]=b.movementY;c=$a(c);E[a+13]=b.clientX-c.left;E[a+14]=b.clientY-c.top}
function P(a,b,c,d,e,k){Ua||(Ua=O(72));a=N(a);M({target:a,Fb:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,zb:k,Bb:d,Cb:function(g){g=g||event;cb(Ua,g,a);K(d)(e,Ua,b)&&g.preventDefault()},Ab:c})}function db(a,b,c,d,e){Va||(Va=O(260));M({target:a,zb:e,Bb:d,Cb:function(k){k=k||event;var g=Va,m=document.pointerLockElement||document.dc||document.Nb||document.Mb;E[g>>2]=!!m;var n=m&&m.id?m.id:"";B(Ra(m),C,g+4,128);B(n,C,g+132,128);K(d)(20,g,b)&&k.preventDefault()},Ab:c})}
function eb(a,b,c,d,e){M({target:a,zb:e,Bb:d,Cb:function(k){k=k||event;K(d)(38,0,b)&&k.preventDefault()},Ab:c})}
function fb(a,b,c,d){Wa||(Wa=O(36));a=N(a);M({target:a,zb:"resize",Bb:d,Cb:function(e){e=e||event;if(e.target==a){var k=document.body;if(k){var g=Wa;E[g>>2]=e.detail;E[g+4>>2]=k.clientWidth;E[g+8>>2]=k.clientHeight;E[g+12>>2]=innerWidth;E[g+16>>2]=innerHeight;E[g+20>>2]=outerWidth;E[g+24>>2]=outerHeight;E[g+28>>2]=pageXOffset;E[g+32>>2]=pageYOffset;K(d)(10,g,b)&&e.preventDefault()}}},Ab:c})}
function gb(a,b,c,d,e,k){Xa||(Xa=O(1696));a=N(a);M({target:a,Fb:"touchstart"==k||"touchend"==k,zb:k,Bb:d,Cb:function(g){for(var m,n={},r=g.touches,x=0;x<r.length;++x)m=r[x],m.Tb=m.Vb=0,n[m.identifier]=m;for(x=0;x<g.changedTouches.length;++x)m=g.changedTouches[x],m.Tb=1,n[m.identifier]=m;for(x=0;x<g.targetTouches.length;++x)n[g.targetTouches[x].identifier].Vb=1;r=Xa;G[r>>3]=g.timeStamp;var w=r>>2;E[w+3]=g.ctrlKey;E[w+4]=g.shiftKey;E[w+5]=g.altKey;E[w+6]=g.metaKey;w+=7;var jb=$a(a),kb=0;for(x in n)if(m=
n[x],E[w]=m.identifier,E[w+1]=m.screenX,E[w+2]=m.screenY,E[w+3]=m.clientX,E[w+4]=m.clientY,E[w+5]=m.pageX,E[w+6]=m.pageY,E[w+7]=m.Tb,E[w+8]=m.Vb,E[w+9]=m.clientX-jb.left,E[w+10]=m.clientY-jb.top,w+=13,31<++kb)break;E[r+8>>2]=kb;K(d)(e,r,b)&&g.preventDefault()},Ab:c})}function hb(a,b,c,d,e,k){a={target:N(a),zb:k,Bb:d,Cb:function(g){g=g||event;K(d)(e,0,b)&&g.preventDefault()},Ab:c};M(a)}
function ib(a,b,c,d){Ya||(Ya=O(104));M({target:a,Fb:!0,zb:"wheel",Bb:d,Cb:function(e){e=e||event;var k=Ya;cb(k,e,a);G[k+72>>3]=e.deltaX;G[k+80>>3]=e.deltaY;G[k+88>>3]=e.deltaZ;E[k+96>>2]=e.deltaMode;K(d)(9,k,b)&&e.preventDefault()},Ab:c})}
function lb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,k){b.drawArraysInstancedANGLE(c,d,e,k)},a.drawElementsInstanced=function(c,d,e,k,g){b.drawElementsInstancedANGLE(c,d,e,k,g)})}
function mb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function nb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function ob(a){a.mc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function pb(a){a.pc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function qb(a){a.rc=a.getExtension("WEBGL_multi_draw")}var rb=1,sb=[],Q=[],tb=[],ub=[],vb=[],R=[],wb=[],xb=[],yb={},zb={};function S(a){Ab||(Ab=a)}function Bb(a){for(var b=rb++,c=a.length;c<b;c++)a[c]=null;return b}
function Cb(a,b){a.Sb||(a.Sb=a.getContext,a.getContext=function(d,e){e=a.Sb(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.Ub?a.getContext("webgl2",b):a.getContext("webgl",b);return c?Db(c,b):0}function Db(a,b){var c=Bb(xb),d={oc:c,attributes:b,version:b.Ub,Jb:a};a.canvas&&(a.canvas.jc=d);xb[c]=d;("undefined"===typeof b.Rb||b.Rb)&&Eb(d);return c}
function Eb(a){a||(a=T);if(!a.ic){a.ic=!0;var b=a.Jb;lb(b);mb(b);nb(b);ob(b);pb(b);2<=a.version&&(b.Qb=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.Qb)b.Qb=b.getExtension("EXT_disjoint_timer_query");qb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var Ab,T,Fb=["default","low-power","high-performance"];
function Gb(a,b,c,d){for(var e=0;e<a;e++){var k=U[c](),g=k&&Bb(d);k?(k.name=g,d[g]=k):S(1282);E[b+4*e>>2]=g}}
function Hb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=U.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>T.version){S(1282);return}c=2*(U.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>T.version){S(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=U.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":S(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:S(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)E[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){S(1280);y("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:S(1280);y("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}E[b>>2]=c}else S(1281)}
function V(a){var b=ra(a)+1,c=O(b);B(a,C,c,b);return c}function Ib(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function W(a){var b=U.ec;if(b){var c=b.Eb[a];"number"===typeof c&&(b.Eb[a]=c=U.getUniformLocation(b,b.bc[a]+(0<c?"["+c+"]":"")));return c}S(1282)}for(var X=[],Y=[],U,Jb=new Float32Array(288),Z=0;288>Z;++Z)X[Z]=Jb.subarray(0,Z+1);var Kb=new Int32Array(288);for(Z=0;288>Z;++Z)Y[Z]=Kb.subarray(0,Z+1);
var Pb={P:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},fa:function(a,b,c){a=N(a);if(!a)return-4;a=$a(a);G[b>>3]=a.width;G[c>>3]=a.height;return 0},Va:function(a,b,c){C.copyWithin(a,b,b+c)},Ha:function(a,b){function c(d){K(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},Wa:function(a){var b=C.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(a,d);0<d%65536&&(d+=65536-d%65536);a:{try{ka.grow(Math.min(2147483648,
d)-ta.byteLength+65535>>>16);va();var e=1;break a}catch(k){}e=void 0}if(e)return!0}return!1},Q:function(a,b,c,d){ab(a,b,c,d,12,"blur");return 0},M:function(a,b,c){a=N(a);if(!a)return-4;a.width=b;a.height=c;return 0},R:function(a,b,c,d){ab(a,b,c,d,13,"focus");return 0},_:function(a,b,c,d){bb(a,b,c,d,2,"keydown");return 0},Y:function(a,b,c,d){bb(a,b,c,d,1,"keypress");return 0},Z:function(a,b,c,d){bb(a,b,c,d,3,"keyup");return 0},ea:function(a,b,c,d){P(a,b,c,d,5,"mousedown");return 0},ba:function(a,b,
c,d){P(a,b,c,d,33,"mouseenter");return 0},aa:function(a,b,c,d){P(a,b,c,d,34,"mouseleave");return 0},ca:function(a,b,c,d){P(a,b,c,d,8,"mousemove");return 0},da:function(a,b,c,d){P(a,b,c,d,6,"mouseup");return 0},T:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.dc||document.body.Nb||document.body.Mb))return-1;a=N(a);if(!a)return-4;db(a,b,c,d,"pointerlockchange");db(a,b,c,d,"mozpointerlockchange");db(a,b,c,d,"webkitpointerlockchange");db(a,b,c,d,"mspointerlockchange");
return 0},S:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.dc||document.body.Nb||document.body.Mb))return-1;a=N(a);if(!a)return-4;eb(a,b,c,d,"pointerlockerror");eb(a,b,c,d,"mozpointerlockerror");eb(a,b,c,d,"webkitpointerlockerror");eb(a,b,c,d,"mspointerlockerror");return 0},Ua:function(a,b,c,d){fb(a,b,c,d);return 0},U:function(a,b,c,d){gb(a,b,c,d,25,"touchcancel");return 0},V:function(a,b,c,d){gb(a,b,c,d,23,"touchend");return 0},W:function(a,b,c,d){gb(a,b,c,d,24,
"touchmove");return 0},X:function(a,b,c,d){gb(a,b,c,d,22,"touchstart");return 0},O:function(a,b,c,d){hb(a,b,c,d,31,"webglcontextlost");return 0},N:function(a,b,c,d){hb(a,b,c,d,32,"webglcontextrestored");return 0},$:function(a,b,c,d){a=N(a);return"undefined"!==typeof a.onwheel?(ib(a,b,c,d),0):-1},C:function(a,b){b>>=2;b={alpha:!!E[b],depth:!!E[b+1],stencil:!!E[b+2],antialias:!!E[b+3],premultipliedAlpha:!!E[b+4],preserveDrawingBuffer:!!E[b+5],powerPreference:Fb[E[b+6]],failIfMajorPerformanceCaveat:!!E[b+
7],Ub:E[b+8],qc:E[b+9],Rb:E[b+10],hc:E[b+11],sc:E[b+12],tc:E[b+13]};a=N(a);return!a||b.hc?0:Cb(a,b)},oa:function(a,b){a=xb[a];b=D(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&lb(U);"OES_vertex_array_object"==b&&mb(U);"WEBGL_draw_buffers"==b&&nb(U);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&ob(U);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&pb(U);"WEBGL_multi_draw"==b&&qb(U);return!!a.Jb.getExtension(b)},Ea:function(a){a>>=2;for(var b=0;14>b;++b)E[a+
b]=0;E[a]=E[a+1]=E[a+3]=E[a+4]=E[a+8]=E[a+10]=1},va:function(a){T=xb[a];f.lc=U=T&&T.Jb;return!a||U?0:-5},b:function(a){U.activeTexture(a)},A:function(a,b){U.attachShader(Q[a],R[b])},e:function(a,b){35051==a?U.Ob=b:35052==a&&(U.Pb=b);U.bindBuffer(a,sb[b])},g:function(a,b){U.bindFramebuffer(a,tb[b])},a:function(a,b){U.bindTexture(a,vb[b])},J:function(a){U.bindVertexArray(wb[a])},F:function(a,b,c,d){U.blendColor(a,b,c,d)},G:function(a,b){U.blendEquationSeparate(a,b)},H:function(a,b,c,d){U.blendFuncSeparate(a,
b,c,d)},o:function(a,b,c,d,e,k,g,m,n,r){U.blitFramebuffer(a,b,c,d,e,k,g,m,n,r)},Aa:function(a,b,c,d){2<=T.version?c?U.bufferData(a,C,d,c,b):U.bufferData(a,b,d):U.bufferData(a,c?C.subarray(c,c+b):b,d)},za:function(a,b,c,d){2<=T.version?U.bufferSubData(a,b,C,d,c):U.bufferSubData(a,b,C.subarray(d,d+c))},ja:function(a){U.clear(a)},ma:function(a,b,c,d){U.clearColor(a,b,c,d)},la:function(a){U.clearDepth(a)},ka:function(a){U.clearStencil(a)},j:function(a,b,c,d){U.colorMask(!!a,!!b,!!c,!!d)},sa:function(a){U.compileShader(R[a])},
ya:function(){var a=Bb(Q),b=U.createProgram();b.name=a;b.Ib=b.Gb=b.Hb=0;b.Lb=1;Q[a]=b;return a},ua:function(a){var b=Bb(R);R[b]=U.createShader(a);return b},B:function(a){U.cullFace(a)},Ja:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2],e=sb[d];e&&(U.deleteBuffer(e),e.name=0,sb[d]=null,d==U.Ob&&(U.Ob=0),d==U.Pb&&(U.Pb=0))}},h:function(a,b){for(var c=0;c<a;++c){var d=E[b+4*c>>2],e=tb[d];e&&(U.deleteFramebuffer(e),e.name=0,tb[d]=null)}},K:function(a){if(a){var b=Q[a];b?(U.deleteProgram(b),b.name=
0,Q[a]=null):S(1281)}},L:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2],e=ub[d];e&&(U.deleteRenderbuffer(e),e.name=0,ub[d]=null)}},q:function(a){if(a){var b=R[a];b?(U.deleteShader(b),R[a]=null):S(1281)}},Ia:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2],e=vb[d];e&&(U.deleteTexture(e),e.name=0,vb[d]=null)}},Ga:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2];U.deleteVertexArray(wb[d]);wb[d]=null}},t:function(a){U.depthFunc(a)},s:function(a){U.depthMask(!!a)},d:function(a){U.disable(a)},
I:function(a){U.disableVertexAttribArray(a)},Xa:function(a,b,c){U.drawArrays(a,b,c)},Ya:function(a,b,c,d){U.drawArraysInstanced(a,b,c,d)},Za:function(a,b,c,d){U.drawElements(a,b,c,d)},_a:function(a,b,c,d,e){U.drawElementsInstanced(a,b,c,d,e)},f:function(a){U.enable(a)},ga:function(a){U.enableVertexAttribArray(a)},D:function(a){U.frontFace(a)},Ba:function(a,b){Gb(a,b,"createBuffer",sb)},Fa:function(a,b){Gb(a,b,"createVertexArray",wb)},qa:function(a,b){return U.getAttribLocation(Q[a],D(b))},c:function(a,
b){Hb(a,b)},wa:function(a,b,c,d){a=U.getProgramInfoLog(Q[a]);null===a&&(a="(unknown error)");b=0<b&&d?B(a,C,d,b):0;c&&(E[c>>2]=b)},z:function(a,b,c){if(c)if(a>=rb)S(1281);else if(a=Q[a],35716==b)a=U.getProgramInfoLog(a),null===a&&(a="(unknown error)"),E[c>>2]=a.length+1;else if(35719==b){if(!a.Ib)for(b=0;b<U.getProgramParameter(a,35718);++b)a.Ib=Math.max(a.Ib,U.getActiveUniform(a,b).name.length+1);E[c>>2]=a.Ib}else if(35722==b){if(!a.Gb)for(b=0;b<U.getProgramParameter(a,35721);++b)a.Gb=Math.max(a.Gb,
U.getActiveAttrib(a,b).name.length+1);E[c>>2]=a.Gb}else if(35381==b){if(!a.Hb)for(b=0;b<U.getProgramParameter(a,35382);++b)a.Hb=Math.max(a.Hb,U.getActiveUniformBlockName(a,b).length+1);E[c>>2]=a.Hb}else E[c>>2]=U.getProgramParameter(a,b);else S(1281)},ra:function(a,b,c,d){a=U.getShaderInfoLog(R[a]);null===a&&(a="(unknown error)");b=0<b&&d?B(a,C,d,b):0;c&&(E[c>>2]=b)},x:function(a,b,c){c?35716==b?(a=U.getShaderInfoLog(R[a]),null===a&&(a="(unknown error)"),E[c>>2]=a?a.length+1:0):35720==b?(a=U.getShaderSource(R[a]),
E[c>>2]=a?a.length+1:0):E[c>>2]=U.getShaderParameter(R[a],b):S(1281)},La:function(a){var b=yb[a];if(!b){switch(a){case 7939:b=U.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=V(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=U.getParameter(a))||S(1280);b=b&&V(b);break;case 7938:b=U.getParameter(7938);b=2<=T.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=V(b);break;case 35724:b=U.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);
null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=V(b);break;default:S(1280)}yb[a]=b}return b},Ka:function(a,b){if(2>T.version)return S(1282),0;var c=zb[a];if(c)return 0>b||b>=c.length?(S(1281),0):c[b];switch(a){case 7939:return c=U.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return V(d)}),c=zb[a]=c,0>b||b>=c.length?(S(1281),0):c[b];default:return S(1280),0}},i:function(a,b){b=D(b);if(a=Q[a]){var c=a,d=c.Eb,e=c.cc,k;
if(!d)for(c.Eb=d={},c.bc={},k=0;k<U.getProgramParameter(c,35718);++k){var g=U.getActiveUniform(c,k);var m=g.name;g=g.size;var n=Ib(m);n=0<n?m.slice(0,n):m;var r=c.Lb;c.Lb+=g;e[n]=[g,r];for(m=0;m<g;++m)d[r]=m,c.bc[r++]=n}c=a.Eb;d=0;e=b;k=Ib(b);0<k&&(d=parseInt(b.slice(k+1))>>>0,e=b.slice(0,k));if((e=a.cc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||U.getUniformLocation(a,b)))return d}else S(1281);return-1},xa:function(a){a=Q[a];U.linkProgram(a);a.Eb=0;a.cc={}},E:function(a,b){U.polygonOffset(a,b)},p:function(a){U.readBuffer(a)},
na:function(a,b,c,d){U.scissor(a,b,c,d)},ta:function(a,b,c,d){for(var e="",k=0;k<b;++k){var g=d?E[d+4*k>>2]:-1;e+=D(E[c+4*k>>2],0>g?void 0:g)}U.shaderSource(R[a],e)},Da:function(a,b,c){U.stencilFunc(a,b,c)},w:function(a,b,c,d){U.stencilFuncSeparate(a,b,c,d)},r:function(a){U.stencilMask(a)},Ca:function(a,b,c){U.stencilOp(a,b,c)},v:function(a,b,c,d){U.stencilOpSeparate(a,b,c,d)},hb:function(a,b,c){if(2<=T.version)U.uniform1fv(W(a),F,c>>2,b);else{if(288>=b)for(var d=X[b-1],e=0;e<b;++e)d[e]=F[c+4*e>>
2];else d=F.subarray(c>>2,c+4*b>>2);U.uniform1fv(W(a),d)}},y:function(a,b){U.uniform1i(W(a),b)},db:function(a,b,c){if(2<=T.version)U.uniform1iv(W(a),E,c>>2,b);else{if(288>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=E[c+4*e>>2];else d=E.subarray(c>>2,c+4*b>>2);U.uniform1iv(W(a),d)}},gb:function(a,b,c){if(2<=T.version)U.uniform2fv(W(a),F,c>>2,2*b);else{if(144>=b)for(var d=X[2*b-1],e=0;e<2*b;e+=2)d[e]=F[c+4*e>>2],d[e+1]=F[c+(4*e+4)>>2];else d=F.subarray(c>>2,c+8*b>>2);U.uniform2fv(W(a),d)}},cb:function(a,b,
c){if(2<=T.version)U.uniform2iv(W(a),E,c>>2,2*b);else{if(144>=b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=E[c+4*e>>2],d[e+1]=E[c+(4*e+4)>>2];else d=E.subarray(c>>2,c+8*b>>2);U.uniform2iv(W(a),d)}},fb:function(a,b,c){if(2<=T.version)U.uniform3fv(W(a),F,c>>2,3*b);else{if(96>=b)for(var d=X[3*b-1],e=0;e<3*b;e+=3)d[e]=F[c+4*e>>2],d[e+1]=F[c+(4*e+4)>>2],d[e+2]=F[c+(4*e+8)>>2];else d=F.subarray(c>>2,c+12*b>>2);U.uniform3fv(W(a),d)}},bb:function(a,b,c){if(2<=T.version)U.uniform3iv(W(a),E,c>>2,3*b);else{if(96>=
b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=E[c+4*e>>2],d[e+1]=E[c+(4*e+4)>>2],d[e+2]=E[c+(4*e+8)>>2];else d=E.subarray(c>>2,c+12*b>>2);U.uniform3iv(W(a),d)}},eb:function(a,b,c){if(2<=T.version)U.uniform4fv(W(a),F,c>>2,4*b);else{if(72>=b){var d=X[4*b-1],e=F;c>>=2;for(var k=0;k<4*b;k+=4){var g=c+k;d[k]=e[g];d[k+1]=e[g+1];d[k+2]=e[g+2];d[k+3]=e[g+3]}}else d=F.subarray(c>>2,c+16*b>>2);U.uniform4fv(W(a),d)}},ab:function(a,b,c){if(2<=T.version)U.uniform4iv(W(a),E,c>>2,4*b);else{if(72>=b)for(var d=Y[4*b-1],
e=0;e<4*b;e+=4)d[e]=E[c+4*e>>2],d[e+1]=E[c+(4*e+4)>>2],d[e+2]=E[c+(4*e+8)>>2],d[e+3]=E[c+(4*e+12)>>2];else d=E.subarray(c>>2,c+16*b>>2);U.uniform4iv(W(a),d)}},$a:function(a,b,c,d){if(2<=T.version)U.uniformMatrix4fv(W(a),!!c,F,d>>2,16*b);else{if(18>=b){var e=X[16*b-1],k=F;d>>=2;for(var g=0;g<16*b;g+=16){var m=d+g;e[g]=k[m];e[g+1]=k[m+1];e[g+2]=k[m+2];e[g+3]=k[m+3];e[g+4]=k[m+4];e[g+5]=k[m+5];e[g+6]=k[m+6];e[g+7]=k[m+7];e[g+8]=k[m+8];e[g+9]=k[m+9];e[g+10]=k[m+10];e[g+11]=k[m+11];e[g+12]=k[m+12];e[g+
13]=k[m+13];e[g+14]=k[m+14];e[g+15]=k[m+15]}}else e=F.subarray(d>>2,d+64*b>>2);U.uniformMatrix4fv(W(a),!!c,e)}},k:function(a){a=Q[a];U.useProgram(a);U.ec=a},ha:function(a,b){U.vertexAttribDivisor(a,b)},ia:function(a,b,c,d,e,k){U.vertexAttribPointer(a,b,c,!!d,e,k)},pa:function(a,b,c,d){U.viewport(a,b,c,d)},Ta:function(){f.Wb=function(a){0!=Lb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",f.Wb)},Sa:function(){f.ac=function(a){a=a.clipboardData.getData("text");ma("_sapp_emsc_onpaste",
["string"],[a])};window.addEventListener("paste",f.ac)},Ra:function(a){f.uc=[];a=D(a);a=document.getElementById(a);f.Xb=function(b){b.stopPropagation();b.preventDefault()};f.Yb=function(b){b.stopPropagation();b.preventDefault()};f.Zb=function(b){b.stopPropagation();b.preventDefault()};f.$b=function(b){b.stopPropagation();b.preventDefault();var c=b.dataTransfer.files;f.vc=c;Mb(c.length);var d;for(d=0;d<c.length;d++)ma("_sapp_emsc_drop",["number","string"],[d,c[d].name]);Nb(b.clientX,b.clientY)};a.addEventListener("dragenter",
f.Xb,!1);a.addEventListener("dragleave",f.Yb,!1);a.addEventListener("dragover",f.Zb,!1);a.addEventListener("drop",f.$b,!1)},Na:function(){var a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},n:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Ob()});document.body.append(a)},m:function(){document.getElementById("_sokol_app_input_element").focus()},ib:function(a){a=
D(a);f.Db=document.getElementById(a);f.Db||console.log("sokol_app.h: invalid target:"+a);f.Db.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Qa:function(){window.removeEventListener("beforeunload",f.Wb)},Pa:function(){window.removeEventListener("paste",f.ac)},Oa:function(a){a=D(a);a=document.getElementById(a);a.removeEventListener("dragenter",f.Xb);a.removeEventListener("dragleave",f.Yb);a.removeEventListener("dragover",f.Zb);a.removeEventListener("drop",
f.$b)},u:function(){f.Db&&f.Db.requestPointerLock&&f.Db.requestPointerLock()},Ma:function(a,b,c){var d=document.createElement("canvas");d.width=a;d.height=b;var e=d.getContext("2d"),k=e.createImageData(a,b);k.data.set(C.subarray(c,c+a*b*4));e.putImageData(k,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},l:function(){document.getElementById("_sokol_app_input_element").blur()}};
(function(){function a(e){f.asm=e.exports;ka=f.asm.jb;va();wa=f.asm.yb;ya.unshift(f.asm.kb);H--;f.monitorRunDependencies&&f.monitorRunDependencies(H);0==H&&(null!==Da&&(clearInterval(Da),Da=null),I&&(e=I,I=null,e()))}function b(e){a(e.instance)}function c(e){return Ha().then(function(k){return WebAssembly.instantiate(k,d)}).then(function(k){return k}).then(e,function(k){y("failed to asynchronously prepare wasm: "+k);ja(k)})}var d={a:Pb};H++;f.monitorRunDependencies&&f.monitorRunDependencies(H);if(f.instantiateWasm)try{return f.instantiateWasm(d,
a)}catch(e){return y("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return z||"function"!==typeof WebAssembly.instantiateStreaming||Ea()||J.startsWith("file://")||"function"!==typeof fetch?c(b):fetch(J,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(k){y("wasm streaming compile failed: "+k);y("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
f.___wasm_call_ctors=function(){return(f.___wasm_call_ctors=f.asm.kb).apply(null,arguments)};f._main=function(){return(f._main=f.asm.lb).apply(null,arguments)};var Ob=f.__sapp_emsc_notify_keyboard_hidden=function(){return(Ob=f.__sapp_emsc_notify_keyboard_hidden=f.asm.mb).apply(null,arguments)};f.__sapp_emsc_onpaste=function(){return(f.__sapp_emsc_onpaste=f.asm.nb).apply(null,arguments)};
var Lb=f.__sapp_html5_get_ask_leave_site=function(){return(Lb=f.__sapp_html5_get_ask_leave_site=f.asm.ob).apply(null,arguments)},Mb=f.__sapp_emsc_begin_drop=function(){return(Mb=f.__sapp_emsc_begin_drop=f.asm.pb).apply(null,arguments)};f.__sapp_emsc_drop=function(){return(f.__sapp_emsc_drop=f.asm.qb).apply(null,arguments)};var Nb=f.__sapp_emsc_end_drop=function(){return(Nb=f.__sapp_emsc_end_drop=f.asm.rb).apply(null,arguments)};
f.__sapp_emsc_invoke_fetch_cb=function(){return(f.__sapp_emsc_invoke_fetch_cb=f.asm.sb).apply(null,arguments)};f.__saudio_emsc_pull=function(){return(f.__saudio_emsc_pull=f.asm.tb).apply(null,arguments)};
var O=f._malloc=function(){return(O=f._malloc=f.asm.ub).apply(null,arguments)},oa=f.stackSave=function(){return(oa=f.stackSave=f.asm.vb).apply(null,arguments)},pa=f.stackRestore=function(){return(pa=f.stackRestore=f.asm.wb).apply(null,arguments)},A=f.stackAlloc=function(){return(A=f.stackAlloc=f.asm.xb).apply(null,arguments)},Qb;function v(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}I=function Rb(){Qb||Sb();Qb||(I=Rb)};
function Sb(a){function b(){if(!Qb&&(Qb=!0,f.calledRun=!0,!la)){Ia(ya);Ia(za);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if(Tb){var c=a,d=f._main;c=c||[];var e=c.length+1,k=A(4*(e+1));E[k>>2]=sa(da);for(var g=1;g<e;g++)E[(k>>2)+g]=sa(c[g-1]);E[(k>>2)+e]=0;try{var m=d(e,k);if(!(noExitRuntime||0<ia)){if(f.onExit)f.onExit(m);la=!0}h(m,new v(m))}catch(n){n instanceof v||"unwind"==n||h(1,n)}finally{}}if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;)c=f.postRun.shift(),
Ba.unshift(c);Ia(Ba)}}a=a||ca;if(!(0<H)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Ca();Ia(xa);0<H||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},1)):b())}}f.run=Sb;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var Tb=!0;f.noInitialRun&&(Tb=!1);Sb();
