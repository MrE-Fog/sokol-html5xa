var d;d||(d=typeof Module !== 'undefined' ? Module : {});var h={},l;for(l in d)d.hasOwnProperty(l)&&(h[l]=d[l]);d.arguments=[];d.thisProgram="./this.program";d.quit=function(a,b){throw b;};d.preRun=[];d.postRun=[];var n=!1,p=!1,q=!1,aa=!1;
if(d.ENVIRONMENT)if("WEB"===d.ENVIRONMENT)n=!0;else if("WORKER"===d.ENVIRONMENT)p=!0;else if("NODE"===d.ENVIRONMENT)q=!0;else if("SHELL"===d.ENVIRONMENT)aa=!0;else throw Error("Module['ENVIRONMENT'] value is not valid. must be one of: WEB|WORKER|NODE|SHELL.");else n="object"===typeof window,p="function"===typeof importScripts,q="object"===typeof process&&"function"===typeof require&&!n&&!p,aa=!n&&!q&&!p;
if(q){var ba,ca;d.read=function(a,b){ba||(ba=require("fs"));ca||(ca=require("path"));a=ca.normalize(a);a=ba.readFileSync(a);return b?a:a.toString()};d.readBinary=function(a){a=d.read(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a};1<process.argv.length&&(d.thisProgram=process.argv[1].replace(/\\/g,"/"));d.arguments=process.argv.slice(2);"undefined"!==typeof module&&(module.exports=d);process.on("uncaughtException",function(a){if(!(a instanceof t))throw a;});process.on("unhandledRejection",
function(){process.exit(1)});d.inspect=function(){return"[Emscripten Module object]"}}else if(aa)"undefined"!=typeof read&&(d.read=function(a){return read(a)}),d.readBinary=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?d.arguments=scriptArgs:"undefined"!=typeof arguments&&(d.arguments=arguments),"function"===typeof quit&&(d.quit=function(a){quit(a)});else if(n||p)d.read=function(a){var b=
new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},p&&(d.readBinary=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),d.readAsync=function(a,b,c){var e=new XMLHttpRequest;e.open("GET",a,!0);e.responseType="arraybuffer";e.onload=function(){200==e.status||0==e.status&&e.response?b(e.response):c()};e.onerror=c;e.send(null)},d.setWindowTitle=function(a){document.title=a};
d.print="undefined"!==typeof console?console.log.bind(console):"undefined"!==typeof print?print:null;d.printErr="undefined"!==typeof printErr?printErr:"undefined"!==typeof console&&console.warn.bind(console)||d.print;d.print=d.print;d.printErr=d.printErr;for(l in h)h.hasOwnProperty(l)&&(d[l]=h[l]);h=void 0;function da(a){assert(!ea);var b=u;u=u+a+15&-16;return b}function fa(a){var b;b||(b=16);return Math.ceil(a/b)*b}function ha(a){ia||(ia={});ia[a]||(ia[a]=1,d.printErr(a))}var ia,w=0;
function assert(a,b){a||y("Assertion failed: "+b)}function ja(a){if("number"===typeof a){var b=!0;var c=a}else b=!1,c=a.length;var e=("function"===typeof ka?ka:da)(Math.max(c,1));if(b){a=e;assert(0==(e&3));for(b=e+(c&-4);a<b;a+=4)z[a>>2]=0;for(b=e+c;a<b;)la[a++>>0]=0;return e}a.subarray||a.slice?A.set(a,e):A.set(new Uint8Array(a),e);return e}
function C(a,b){if(0===b||!a)return"";for(var c=0,e,f=0;;){e=A[a+f>>0];c|=e;if(0==e&&!b)break;f++;if(b&&f==b)break}b||(b=f);e="";if(128>c){for(;0<b;)c=String.fromCharCode.apply(String,A.subarray(a,a+Math.min(b,1024))),e=e?e+c:c,a+=1024,b-=1024;return e}a:{b=A;for(c=a;b[c];)++c;if(16<c-a&&b.subarray&&ma)a=ma.decode(b.subarray(a,c));else for(c="";;){e=b[a++];if(!e){a=c;break a}if(e&128)if(f=b[a++]&63,192==(e&224))c+=String.fromCharCode((e&31)<<6|f);else{var g=b[a++]&63;if(224==(e&240))e=(e&15)<<12|
f<<6|g;else{var k=b[a++]&63;if(240==(e&248))e=(e&7)<<18|f<<12|g<<6|k;else{var r=b[a++]&63;if(248==(e&252))e=(e&3)<<24|f<<18|g<<12|k<<6|r;else{var m=b[a++]&63;e=(e&1)<<30|f<<24|g<<18|k<<12|r<<6|m}}}65536>e?c+=String.fromCharCode(e):(e-=65536,c+=String.fromCharCode(55296|e>>10,56320|e&1023))}else c+=String.fromCharCode(e)}}return a}var ma="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function na(a,b,c,e){if(!(0<e))return 0;var f=c;e=c+e-1;for(var g=0;g<a.length;++g){var k=a.charCodeAt(g);55296<=k&&57343>=k&&(k=65536+((k&1023)<<10)|a.charCodeAt(++g)&1023);if(127>=k){if(c>=e)break;b[c++]=k}else{if(2047>=k){if(c+1>=e)break;b[c++]=192|k>>6}else{if(65535>=k){if(c+2>=e)break;b[c++]=224|k>>12}else{if(2097151>=k){if(c+3>=e)break;b[c++]=240|k>>18}else{if(67108863>=k){if(c+4>=e)break;b[c++]=248|k>>24}else{if(c+5>=e)break;b[c++]=252|k>>30;b[c++]=128|k>>24&63}b[c++]=128|k>>18&63}b[c++]=128|
k>>12&63}b[c++]=128|k>>6&63}b[c++]=128|k&63}}b[c]=0;return c-f}function oa(a){for(var b=0,c=0;c<a.length;++c){var e=a.charCodeAt(c);55296<=e&&57343>=e&&(e=65536+((e&1023)<<10)|a.charCodeAt(++c)&1023);127>=e?++b:b=2047>=e?b+2:65535>=e?b+3:2097151>=e?b+4:67108863>=e?b+5:b+6}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function pa(a){var b=oa(a)+1,c=qa(b);na(a,la,c,b);return c}var buffer,la,A,ra,z,sa,D,E;
function ta(){d.HEAP8=la=new Int8Array(buffer);d.HEAP16=ra=new Int16Array(buffer);d.HEAP32=z=new Int32Array(buffer);d.HEAPU8=A=new Uint8Array(buffer);d.HEAPU16=new Uint16Array(buffer);d.HEAPU32=sa=new Uint32Array(buffer);d.HEAPF32=D=new Float32Array(buffer);d.HEAPF64=E=new Float64Array(buffer)}var ua,u,ea,va,wa,xa,ya,za;ua=u=va=wa=xa=ya=za=0;ea=!1;
function Aa(){y("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value "+F+", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ")}var Ba=d.TOTAL_STACK||5242880,F=d.TOTAL_MEMORY||134217728;F<Ba&&d.printErr("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+F+"! (TOTAL_STACK="+Ba+")");
d.buffer?buffer=d.buffer:("object"===typeof WebAssembly&&"function"===typeof WebAssembly.Memory?(d.wasmMemory=new WebAssembly.Memory({initial:F/65536,maximum:F/65536}),buffer=d.wasmMemory.buffer):buffer=new ArrayBuffer(F),d.buffer=buffer);ta();z[0]=1668509029;ra[1]=25459;if(115!==A[2]||99!==A[3])throw"Runtime error: expected the system to be little-endian!";
function G(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.B;"number"===typeof c?void 0===b.f?d.dynCall_v(c):d.dynCall_vi(c,b.f):c(void 0===b.f?null:b.f)}}}var Ca=[],Da=[],Ea=[],Fa=[],Ga=[],Ha=!1;function Ia(){var a=d.preRun.shift();Ca.unshift(a)}var H=0,Ja=null,I=null;d.preloadedImages={};d.preloadedAudios={};
function Ka(a){return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}
(function(){function a(){try{if(d.wasmBinary)return new Uint8Array(d.wasmBinary);if(d.readBinary)return d.readBinary(f);throw"on the web, we need the wasm binary to be preloaded and set on Module['wasmBinary']. emcc.py will do that for you when generating HTML (but not JS)";}catch(x){y(x)}}function b(){return d.wasmBinary||!n&&!p||"function"!==typeof fetch?new Promise(function(b){b(a())}):fetch(f,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+f+
"'";return a.arrayBuffer()}).catch(function(){return a()})}function c(a){function c(a){r=a.exports;if(r.memory){a=r.memory;var b=d.buffer;a.byteLength<b.byteLength&&d.printErr("the new buffer in mergeMemory is smaller than the previous one. in native wasm, we should grow memory here");b=new Int8Array(b);(new Int8Array(a)).set(b);d.buffer=buffer=a;ta()}d.asm=r;d.usingWasm=!0;H--;d.monitorRunDependencies&&d.monitorRunDependencies(H);0==H&&(null!==Ja&&(clearInterval(Ja),Ja=null),I&&(a=I,I=null,a()))}
function e(a){c(a.instance)}function g(a){b().then(function(a){return WebAssembly.instantiate(a,k)}).then(a).catch(function(a){d.printErr("failed to asynchronously prepare wasm: "+a);y(a)})}if("object"!==typeof WebAssembly)return d.printErr("no native wasm support detected"),!1;if(!(d.wasmMemory instanceof WebAssembly.Memory))return d.printErr("no native wasm Memory in use"),!1;a.memory=d.wasmMemory;k.global={NaN:NaN,Infinity:Infinity};k["global.Math"]=Math;k.env=a;H++;d.monitorRunDependencies&&d.monitorRunDependencies(H);
if(d.instantiateWasm)try{return d.instantiateWasm(k,c)}catch(Hb){return d.printErr("Module.instantiateWasm callback failed with error: "+Hb),!1}d.wasmBinary||"function"!==typeof WebAssembly.instantiateStreaming||Ka(f)||"function"!==typeof fetch?g(e):WebAssembly.instantiateStreaming(fetch(f,{credentials:"same-origin"}),k).then(e).catch(function(a){d.printErr("wasm streaming compile failed: "+a);d.printErr("falling back to ArrayBuffer instantiation");g(e)});return{}}var e="noninterleaved-emsc.wast",
f="noninterleaved-emsc.wasm",g="noninterleaved-emsc.temp.asm.js";"function"===typeof d.locateFile&&(Ka(e)||(e=d.locateFile(e)),Ka(f)||(f=d.locateFile(f)),Ka(g)||(g=d.locateFile(g)));var k={global:null,env:null,asm2wasm:{"f64-rem":function(a,b){return a%b},"debugger":function(){debugger}},parent:d},r=null;d.asmPreload=d.asm;var m=d.reallocBuffer;d.reallocBuffer=function(a){if("asmjs"===v)var b=m(a);else a:{var c=d.usingWasm?65536:16777216;0<a%c&&(a+=c-a%c);c=d.buffer.byteLength;if(d.usingWasm)try{b=
-1!==d.wasmMemory.grow((a-c)/65536)?d.buffer=d.wasmMemory.buffer:null;break a}catch(Yb){b=null;break a}b=void 0}return b};var v="";d.asm=function(a,b){if(!b.table){a=d.wasmTableSize;void 0===a&&(a=1024);var e=d.wasmMaxTableSize;b.table="object"===typeof WebAssembly&&"function"===typeof WebAssembly.Table?void 0!==e?new WebAssembly.Table({initial:a,maximum:e,element:"anyfunc"}):new WebAssembly.Table({initial:a,element:"anyfunc"}):Array(a);d.wasmTable=b.table}b.memoryBase||(b.memoryBase=d.STATIC_BASE);
b.tableBase||(b.tableBase=0);b=c(b);assert(b,"no binaryen method succeeded.");return b}})();ua=1024;u=ua+3584;Da.push();d.STATIC_BASE=ua;d.STATIC_BUMP=3584;u+=16;var J=0,La=0,Ma=!1;function Na(){Ma||(Fa.push(function(){for(var a=K.length-1;0<=a;--a)Oa(a)}),Ma=!0)}function L(a){return a?("number"==typeof a&&(a=C(a)),"#window"==a?window:"#document"==a?document:"#screen"==a?window.screen:"#canvas"==a?d.canvas:"string"==typeof a?document.getElementById(a):a):window}var Pa=[];
function Qa(){if(Ra&&Sa.s)for(var a=0;a<Pa.length;++a){var b=Pa[a];Pa.splice(a,1);--a;b.T.apply(this,b.J)}}var Ra=0,Sa=null,K=[];function Oa(a){var b=K[a];b.target.removeEventListener(b.h,b.A,b.o);K.splice(a,1)}function Ta(a){function b(b){++Ra;Sa=a;Qa();a.C(b);Qa();--Ra}if(a.w)a.A=b,a.target.addEventListener(a.h,b,a.o),K.push(a),Na();else for(var c=0;c<K.length;++c)K[c].target==a.target&&K[c].h==a.h&&Oa(c--)}
function Ua(a,b,c,e){J||(J=ka(36));a=L(a);Ta({target:a,s:!1,h:"resize",w:e,C:function(c){c=c||window.event;if(c.target==a){var f=0<window.pageXOffset||0<window.pageYOffset?[window.pageXOffset,window.pageYOffset]:"undefined"!==typeof document.documentElement.scrollLeft||"undefined"!==typeof document.documentElement.scrollTop?[document.documentElement.scrollLeft,document.documentElement.scrollTop]:[document.body.scrollLeft|0,document.body.scrollTop|0];z[J>>2]=c.detail;z[J+4>>2]=document.body.clientWidth;
z[J+8>>2]=document.body.clientHeight;z[J+12>>2]=window.innerWidth;z[J+16>>2]=window.innerHeight;z[J+20>>2]=window.outerWidth;z[J+24>>2]=window.outerHeight;z[J+28>>2]=f[0];z[J+32>>2]=f[1];d.dynCall_iiii(e,10,J,b)&&c.preventDefault()}},o:c})}var M=null,N="",O=0,Va=null,Wa=0,Xa=0,Ya=0,Za=0,$a=[],ab={},bb,cb,db,eb=!1,fb=!1,gb=[];
function hb(){function a(){fb=document.pointerLockElement===d.canvas||document.mozPointerLockElement===d.canvas||document.webkitPointerLockElement===d.canvas||document.msPointerLockElement===d.canvas}d.preloadPlugins||(d.preloadPlugins=[]);if(!ib){ib=!0;try{jb=!0}catch(c){jb=!1,console.log("warning: no blob constructor, cannot create blobs with mimetypes")}kb="undefined"!=typeof MozBlobBuilder?MozBlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:jb?null:console.log("warning: no BlobBuilder");
lb="undefined"!=typeof window?window.URL?window.URL:window.webkitURL:void 0;d.l||"undefined"!==typeof lb||(console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available."),d.l=!0);d.preloadPlugins.push({canHandle:function(a){return!d.l&&/\.(jpg|jpeg|png|bmp)$/i.test(a)},handle:function(a,b,f,g){var c=null;if(jb)try{c=new Blob([a],{type:mb(b)}),c.size!==a.length&&(c=new Blob([(new Uint8Array(a)).buffer],{type:mb(b)}))}catch(v){ha("Blob constructor present but fails: "+
v+"; falling back to blob builder")}c||(c=new kb,c.append((new Uint8Array(a)).buffer),c=c.getBlob());var e=lb.createObjectURL(c),m=new Image;m.onload=function(){assert(m.complete,"Image "+b+" could not be decoded");var c=document.createElement("canvas");c.width=m.width;c.height=m.height;c.getContext("2d").drawImage(m,0,0);d.preloadedImages[b]=c;lb.revokeObjectURL(e);f&&f(a)};m.onerror=function(){console.log("Image "+e+" could not be decoded");g&&g()};m.src=e}});d.preloadPlugins.push({canHandle:function(a){return!d.S&&
a.substr(-4)in{".ogg":1,".wav":1,".mp3":1}},handle:function(a,b,f,g){function c(c){m||(m=!0,d.preloadedAudios[b]=c,f&&f(a))}function e(){m||(m=!0,d.preloadedAudios[b]=new Audio,g&&g())}var m=!1;if(jb){try{var v=new Blob([a],{type:mb(b)})}catch(B){return e()}v=lb.createObjectURL(v);var x=new Audio;x.addEventListener("canplaythrough",function(){c(x)},!1);x.onerror=function(){if(!m){console.log("warning: browser could not fully decode audio "+b+", trying slower base64 approach");for(var e="",f=0,g=0,
k=0;k<a.length;k++)for(f=f<<8|a[k],g+=8;6<=g;){var r=f>>g-6&63;g-=6;e+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[r]}2==g?(e+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(f&3)<<4],e+="=="):4==g&&(e+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(f&15)<<2],e+="=");x.src="data:audio/x-"+b.substr(-3)+";base64,"+e;c(x)}};x.src=v;nb(function(){c(x)})}else return e()}});var b=d.canvas;b&&(b.requestPointerLock=b.requestPointerLock||b.mozRequestPointerLock||
b.webkitRequestPointerLock||b.msRequestPointerLock||function(){},b.exitPointerLock=document.exitPointerLock||document.mozExitPointerLock||document.webkitExitPointerLock||document.msExitPointerLock||function(){},b.exitPointerLock=b.exitPointerLock.bind(document),document.addEventListener("pointerlockchange",a,!1),document.addEventListener("mozpointerlockchange",a,!1),document.addEventListener("webkitpointerlockchange",a,!1),document.addEventListener("mspointerlockchange",a,!1),d.elementPointerLock&&
b.addEventListener("click",function(a){!fb&&d.canvas.requestPointerLock&&(d.canvas.requestPointerLock(),a.preventDefault())},!1))}}
function ob(a,b,c,e){if(b&&d.g&&a==d.canvas)return d.g;if(b){var f={antialias:!1,alpha:!1};if(e)for(var g in e)f[g]=e[g];if(f=pb(a,f))var k=qb[f].GLctx}else k=a.getContext("2d");if(!k)return null;c&&(b||assert("undefined"===typeof GLctx,"cannot set in module if GLctx is used, but we are a non-GL context that would replace it"),d.g=k,b&&rb(f),d.U=b,gb.forEach(function(a){a()}),hb());return k}var sb=!1,tb=void 0,P=void 0;
function ub(a,b,c){function e(){eb=!1;var a=f.parentNode;(document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||document.webkitFullscreenElement||document.webkitCurrentFullScreenElement)===a?(f.exitFullscreen=document.exitFullscreen||document.cancelFullScreen||document.mozCancelFullScreen||document.msExitFullscreen||document.webkitCancelFullScreen||function(){},f.exitFullscreen=f.exitFullscreen.bind(document),tb&&f.requestPointerLock(),eb=!0,P?("undefined"!=typeof SDL&&
(z[SDL.screen>>2]=sa[SDL.screen>>2]|8388608),vb(d.canvas),wb()):vb(f)):(a.parentNode.insertBefore(f,a),a.parentNode.removeChild(a),P?("undefined"!=typeof SDL&&(z[SDL.screen>>2]=sa[SDL.screen>>2]&-8388609),vb(d.canvas),wb()):vb(f));if(d.onFullScreen)d.onFullScreen(eb);if(d.onFullscreen)d.onFullscreen(eb)}tb=a;P=b;xb=c;"undefined"===typeof tb&&(tb=!0);"undefined"===typeof P&&(P=!1);"undefined"===typeof xb&&(xb=null);var f=d.canvas;sb||(sb=!0,document.addEventListener("fullscreenchange",e,!1),document.addEventListener("mozfullscreenchange",
e,!1),document.addEventListener("webkitfullscreenchange",e,!1),document.addEventListener("MSFullscreenChange",e,!1));var g=document.createElement("div");f.parentNode.insertBefore(g,f);g.appendChild(f);g.requestFullscreen=g.requestFullscreen||g.mozRequestFullScreen||g.msRequestFullscreen||(g.webkitRequestFullscreen?function(){g.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)}:null)||(g.webkitRequestFullScreen?function(){g.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)}:null);c?g.requestFullscreen({V:c}):
g.requestFullscreen()}function yb(a,b,c){d.printErr("Browser.requestFullScreen() is deprecated. Please call Browser.requestFullscreen instead.");yb=function(a,b,c){return ub(a,b,c)};return ub(a,b,c)}var zb=0;function Ab(a){var b=Date.now();if(0===zb)zb=b+1E3/60;else for(;b+2>=zb;)zb+=1E3/60;setTimeout(a,Math.max(zb-b,0))}
function Bb(a){"undefined"===typeof window?Ab(a):(window.requestAnimationFrame||(window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||Ab),window.requestAnimationFrame(a))}function nb(a){d.noExitRuntime=!0;setTimeout(function(){w||a()},1E4)}
function mb(a){return{jpg:"image/jpeg",jpeg:"image/jpeg",png:"image/png",bmp:"image/bmp",ogg:"audio/ogg",wav:"audio/wav",mp3:"audio/mpeg"}[a.substr(a.lastIndexOf(".")+1)]}var Cb=[];function wb(){var a=d.canvas;Cb.forEach(function(b){b(a.width,a.height)})}
function vb(a,b,c){b&&c?(a.H=b,a.D=c):(b=a.H,c=a.D);var e=b,f=c;d.forcedAspectRatio&&0<d.forcedAspectRatio&&(e/f<d.forcedAspectRatio?e=Math.round(f*d.forcedAspectRatio):f=Math.round(e/d.forcedAspectRatio));if((document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||document.webkitFullscreenElement||document.webkitCurrentFullScreenElement)===a.parentNode&&"undefined"!=typeof screen){var g=Math.min(screen.width/e,screen.height/f);e=Math.round(e*g);f=Math.round(f*g)}P?
(a.width!=e&&(a.width=e),a.height!=f&&(a.height=f),"undefined"!=typeof a.style&&(a.style.removeProperty("width"),a.style.removeProperty("height"))):(a.width!=b&&(a.width=b),a.height!=c&&(a.height=c),"undefined"!=typeof a.style&&(e!=b||f!=c?(a.style.setProperty("width",e+"px","important"),a.style.setProperty("height",f+"px","important")):(a.style.removeProperty("width"),a.style.removeProperty("height"))))}var ib,jb,kb,lb,xb;
function Db(a,b){Xa=a;Ya=b;if(Va)if(0==a)M=function(){var a=Math.max(0,cb+b-Q())|0;setTimeout(db,a)},N="timeout";else if(1==a)M=function(){Bb(db)},N="rAF";else if(2==a){if("undefined"===typeof setImmediate){var c=[];addEventListener("message",function(a){if("setimmediate"===a.data||"setimmediate"===a.data.target)a.stopPropagation(),c.shift()()},!0);setImmediate=function(a){c.push(a);p?(void 0===d.setImmediates&&(d.setImmediates=[]),d.setImmediates.push(a),postMessage({target:"setimmediate"})):postMessage("setimmediate",
"*")}}M=function(){setImmediate(db)};N="immediate"}}function Q(){y()}
function Eb(a,b,c,e,f){d.noExitRuntime=!0;assert(!Va,"emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");Va=a;Wa=e;var g="undefined"!==typeof e?function(){d.dynCall_vi(a,e)}:function(){d.dynCall_v(a)};var k=O;db=function(){if(!w)if(0<$a.length){var a=Date.now(),b=$a.shift();b.B(b.f);if(bb){var c=bb,e=0==c%1?c-1:Math.floor(c);bb=b.K?e:(8*c+(e+.5))/9}console.log('main loop blocker "'+
b.name+'" took '+(Date.now()-a)+" ms");d.setStatus&&(a=d.statusMessage||"Please wait...",b=bb,c=ab.O,b?b<c?d.setStatus(a+" ("+(c-b)+"/"+c+")"):d.setStatus(a):d.setStatus(""));k<O||setTimeout(db,0)}else if(!(k<O))if(Za=Za+1|0,1==Xa&&1<Ya&&0!=Za%Ya)M();else{0==Xa&&(cb=Q());"timeout"===N&&d.g&&(d.printErr("Looks like you are rendering without using requestAnimationFrame for the main loop. You should use 0 for the frame rate in emscripten_set_main_loop in order to use requestAnimationFrame, as that can greatly improve your frame rates!"),
N="");a:if(!(w||d.preMainLoop&&!1===d.preMainLoop())){try{g()}catch(B){if(B instanceof t)break a;B&&"object"===typeof B&&B.stack&&d.printErr("exception thrown: "+[B,B.stack]);throw B;}d.postMainLoop&&d.postMainLoop()}k<O||("object"===typeof SDL&&SDL.audio&&SDL.audio.G&&SDL.audio.G(),M())}};f||(b&&0<b?Db(0,1E3/b):Db(1,1),M());if(c)throw"SimulateInfiniteLoop";}var Fb=1,Gb=0,Ib=[],R=[],Jb=[],Kb=[],S=[],T=[],qb=[],U=null,Lb={},V={},Mb={},Nb=[];function W(a){Gb||(Gb=a)}
function X(a){for(var b=Fb++,c=a.length;c<b;c++)a[c]=null;return b}var Ob=null,Y=[0];
function pb(a,b){function c(a){e=a.statusMessage||e}"undefined"===typeof b.majorVersion&&"undefined"===typeof b.minorVersion&&(b.majorVersion="undefined"!==typeof WebGL2RenderingContext?2:1,b.minorVersion=0);var e="?";try{a.addEventListener("webglcontextcreationerror",c,!1);try{if(1==b.majorVersion&&0==b.minorVersion)var f=a.getContext("webgl",b)||a.getContext("experimental-webgl",b);else if(2==b.majorVersion&&0==b.minorVersion)f=a.getContext("webgl2",b);else throw"Unsupported WebGL context version "+
majorVersion+"."+minorVersion+"!";}finally{a.removeEventListener("webglcontextcreationerror",c,!1)}if(!f)throw":(";}catch(g){return d.print("Could not create canvas: "+[e,g,JSON.stringify(b)]),0}return f?Pb(f,b):0}
function Pb(a,b){function c(){var a=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);return a?parseInt(a[2],10):!1}var e=X(qb),f={handle:e,attributes:b,version:b.majorVersion,GLctx:a};f.a=2<=f.version&&(!1===c()||58<=c());a.canvas&&(a.canvas.i=f);qb[e]=f;("undefined"===typeof b.enableExtensionsByDefault||b.enableExtensionsByDefault)&&Qb(f);return e}function rb(a){a=qb[a];if(!a)return!1;GLctx=d.g=a.GLctx;U=a;return!0}
function Qb(a){a||(a=U);if(!a.F){a.F=!0;var b=a.GLctx;a.R=b.getParameter(b.MAX_VERTEX_ATTRIBS);if(2>a.version){var c=b.getExtension("ANGLE_instanced_arrays");c&&(b.vertexAttribDivisor=function(a,b){c.vertexAttribDivisorANGLE(a,b)},b.drawArraysInstanced=function(a,b,e,f){c.drawArraysInstancedANGLE(a,b,e,f)},b.drawElementsInstanced=function(a,b,e,f,g){c.drawElementsInstancedANGLE(a,b,e,f,g)});var e=b.getExtension("OES_vertex_array_object");e&&(b.createVertexArray=function(){return e.createVertexArrayOES()},
b.deleteVertexArray=function(a){e.deleteVertexArrayOES(a)},b.bindVertexArray=function(a){e.bindVertexArrayOES(a)},b.isVertexArray=function(a){return e.isVertexArrayOES(a)});var f=b.getExtension("WEBGL_draw_buffers");f&&(b.drawBuffers=function(a,b){f.drawBuffersWEBGL(a,b)})}b.N=b.getExtension("EXT_disjoint_timer_query");var g="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear WEBGL_compressed_texture_atc WEBKIT_WEBGL_compressed_texture_pvrtc WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_frag_depth EXT_sRGB WEBGL_draw_buffers WEBGL_shared_resources EXT_shader_texture_lod EXT_color_buffer_float".split(" ");
(a=b.getSupportedExtensions())&&0<a.length&&b.getSupportedExtensions().forEach(function(a){-1!=g.indexOf(a)&&b.getExtension(a)})}}function _glDrawArrays(a,b,c){GLctx.drawArrays(a,b,c)}function _glDrawElements(a,b,c,e){GLctx.drawElements(a,b,c,e)}
function Rb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:c=GLctx.getParameter(34467).length;break;case 33309:if(2>GLctx.canvas.i.version){W(1282);return}c=2*GLctx.getSupportedExtensions().length;break;case 33307:case 33308:if(2>GLctx.canvas.i.version){W(1280);return}c=33307==a?3:0}if(void 0===c)switch(c=GLctx.getParameter(a),typeof c){case "number":break;case "boolean":c=c?1:0;break;case "string":W(1280);return;case "object":if(null===
c)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 35097:case 36389:case 34068:c=0;break;default:W(1280);return}else{if(c instanceof Float32Array||c instanceof Uint32Array||c instanceof Int32Array||c instanceof Array){for(a=0;a<c.length;++a)z[b+4*a>>2]=c[a];return}if(c instanceof WebGLBuffer||c instanceof WebGLProgram||c instanceof WebGLFramebuffer||c instanceof WebGLRenderbuffer||c instanceof WebGLQuery||c instanceof WebGLSampler||c instanceof WebGLSync||
c instanceof WebGLTransformFeedback||c instanceof WebGLVertexArrayObject||c instanceof WebGLTexture)c=c.name|0;else{W(1280);return}}break;default:W(1280);return}z[b>>2]=c}else W(1281)}(function(){if("undefined"!==typeof window){window.addEventListener("gamepadconnected",function(){++La});window.addEventListener("gamepaddisconnected",function(){--La});var a=navigator.getGamepads?navigator.getGamepads():navigator.webkitGetGamepads?navigator.webkitGetGamepads():null;a&&(La=a.length)}})();
d.requestFullScreen=function(a,b,c){d.printErr("Module.requestFullScreen is deprecated. Please call Module.requestFullscreen instead.");d.requestFullScreen=d.requestFullscreen;yb(a,b,c)};d.requestFullscreen=function(a,b,c){ub(a,b,c)};d.requestAnimationFrame=function(a){Bb(a)};d.setCanvasSize=function(a,b,c){vb(d.canvas,a,b);c||wb()};d.pauseMainLoop=function(){M=null;O++};d.resumeMainLoop=function(){O++;var a=Xa,b=Ya,c=Va;Va=null;Eb(c,0,!1,Wa,!0);Db(a,b);M()};
d.getUserMedia=function(){window.getUserMedia||(window.getUserMedia=navigator.getUserMedia||navigator.mozGetUserMedia);window.getUserMedia(void 0)};d.createContext=function(a,b,c,e){return ob(a,b,c,e)};
q?Q=function(){var a=process.hrtime();return 1E3*a[0]+a[1]/1E6}:"undefined"!==typeof dateNow?Q=dateNow:"object"===typeof self&&self.performance&&"function"===typeof self.performance.now?Q=function(){return self.performance.now()}:"object"===typeof performance&&"function"===typeof performance.now?Q=function(){return performance.now()}:Q=Date.now;var GLctx;Ob=new Float32Array(256);for(var Z=0;256>Z;Z++)Y[Z]=Ob.subarray(0,Z+1);for(Z=0;32>Z;Z++)Nb.push(Array(Z));za=da(4);va=wa=fa(u);xa=va+Ba;ya=fa(xa);
z[za>>2]=ya;ea=!0;function Sb(a){var b=Array(oa(a)+1);na(a,b,0,b.length);return b}d.wasmTableSize=4;d.wasmMaxTableSize=4;d.u={};
d.v={abort:y,enlargeMemory:function(){Aa()},getTotalMemory:function(){return F},abortOnCannotGrowMemory:Aa,___setErrNo:function(a){d.___errno_location&&(z[d.___errno_location()>>2]=a);return a},_emscripten_get_element_css_size:function(a,b,c){a=a?L(a):d.canvas;if(!a)return-4;a.getBoundingClientRect?(a=a.getBoundingClientRect(),E[b>>3]=a.right-a.left,E[c>>3]=a.bottom-a.top):(E[b>>3]=a.clientWidth,E[c>>3]=a.clientHeight);return 0},_emscripten_memcpy_big:function(a,b,c){A.set(A.subarray(b,b+c),a);return a},
_emscripten_set_canvas_element_size:function(a,b,c){a=a?L(a):d.canvas;if(!a)return-4;a.width=b;a.height=c;return 0},_emscripten_set_main_loop:Eb,_emscripten_set_resize_callback:function(a,b,c,e){Ua(a,b,c,e);return 0},_emscripten_webgl_create_context:function(a,b){var c={};c.alpha=!!z[b>>2];c.depth=!!z[b+4>>2];c.stencil=!!z[b+8>>2];c.antialias=!!z[b+12>>2];c.premultipliedAlpha=!!z[b+16>>2];c.preserveDrawingBuffer=!!z[b+20>>2];c.preferLowPowerToHighPerformance=!!z[b+24>>2];c.failIfMajorPerformanceCaveat=
!!z[b+28>>2];c.majorVersion=z[b+32>>2];c.minorVersion=z[b+36>>2];c.explicitSwapControl=z[b+44>>2];a=(a=C(a))&&"#canvas"!==a||!d.canvas?Lb[a]||L(a):d.canvas.id?Lb[d.canvas.id]||L(d.canvas.id):d.canvas;return a?c.explicitSwapControl?(console.error("emscripten_webgl_create_context failed: explicitSwapControl is not supported, please rebuild with -s OFFSCREENCANVAS_SUPPORT=1 to enable targeting the experimental OffscreenCanvas specification!"),0):pb(a,c):0},_emscripten_webgl_init_context_attributes:function(a){z[a>>
2]=1;z[a+4>>2]=1;z[a+8>>2]=0;z[a+12>>2]=1;z[a+16>>2]=1;z[a+20>>2]=0;z[a+24>>2]=0;z[a+28>>2]=0;z[a+32>>2]=1;z[a+36>>2]=0;z[a+40>>2]=1;z[a+44>>2]=0},_emscripten_webgl_make_context_current:function(a){return rb(a)?0:-5},_glActiveTexture:function(a){GLctx.activeTexture(a)},_glAttachShader:function(a,b){GLctx.attachShader(R[a],T[b])},_glBindBuffer:function(a,b){var c=b?Ib[b]:null;35051==a?GLctx.L=b:35052==a&&(GLctx.M=b);GLctx.bindBuffer(a,c)},_glBindFramebuffer:function(a,b){GLctx.bindFramebuffer(a,b?
Jb[b]:null)},_glBindTexture:function(a,b){GLctx.bindTexture(a,b?Kb[b]:null)},_glBlendColor:function(a,b,c,e){GLctx.blendColor(a,b,c,e)},_glBlendEquationSeparate:function(a,b){GLctx.blendEquationSeparate(a,b)},_glBlendFuncSeparate:function(a,b,c,e){GLctx.blendFuncSeparate(a,b,c,e)},_glBufferData:function(a,b,c,e){c?U.a?GLctx.bufferData(a,A,e,c,b):GLctx.bufferData(a,A.subarray(c,c+b),e):GLctx.bufferData(a,b,e)},_glBufferSubData:function(a,b,c,e){U.a?GLctx.bufferSubData(a,b,A,e,c):GLctx.bufferSubData(a,
b,A.subarray(e,e+c))},_glClear:function(a){GLctx.clear(a)},_glClearColor:function(a,b,c,e){GLctx.clearColor(a,b,c,e)},_glClearDepthf:function(a){GLctx.clearDepth(a)},_glClearStencil:function(a){GLctx.clearStencil(a)},_glColorMask:function(a,b,c,e){GLctx.colorMask(!!a,!!b,!!c,!!e)},_glCompileShader:function(a){GLctx.compileShader(T[a])},_glCreateProgram:function(){var a=X(R),b=GLctx.createProgram();b.name=a;R[a]=b;return a},_glCreateShader:function(a){var b=X(T);T[b]=GLctx.createShader(a);return b},
_glCullFace:function(a){GLctx.cullFace(a)},_glDeleteProgram:function(a){if(a){var b=R[a];b?(GLctx.deleteProgram(b),b.name=0,R[a]=null,V[a]=null):W(1281)}},_glDeleteShader:function(a){if(a){var b=T[a];b?(GLctx.deleteShader(b),T[a]=null):W(1281)}},_glDepthFunc:function(a){GLctx.depthFunc(a)},_glDepthMask:function(a){GLctx.depthMask(!!a)},_glDisable:function(a){GLctx.disable(a)},_glDisableVertexAttribArray:function(a){GLctx.disableVertexAttribArray(a)},_glDrawArrays:_glDrawArrays,_glDrawElements:_glDrawElements,
_glEnable:function(a){GLctx.enable(a)},_glEnableVertexAttribArray:function(a){GLctx.enableVertexAttribArray(a)},_glFrontFace:function(a){GLctx.frontFace(a)},_glGenBuffers:function(a,b){for(var c=0;c<a;c++){var e=GLctx.createBuffer();if(!e){for(W(1282);c<a;)z[b+4*c++>>2]=0;break}var f=X(Ib);e.name=f;Ib[f]=e;z[b+4*c>>2]=f}},_glGetAttribLocation:function(a,b){a=R[a];b=C(b);return GLctx.getAttribLocation(a,b)},_glGetIntegerv:function(a,b){Rb(a,b)},_glGetProgramInfoLog:function(a,b,c,e){a=GLctx.getProgramInfoLog(R[a]);
null===a&&(a="(unknown error)");0<b&&e?(b=na(a,A,e,b),c&&(z[c>>2]=b)):c&&(z[c>>2]=0)},_glGetProgramiv:function(a,b,c){if(c)if(a>=Fb)W(1281);else{var e=V[a];if(e)if(35716==b)a=GLctx.getProgramInfoLog(R[a]),null===a&&(a="(unknown error)"),z[c>>2]=a.length+1;else if(35719==b)z[c>>2]=e.j;else if(35722==b){if(-1==e.b){a=R[a];var f=GLctx.getProgramParameter(a,GLctx.ACTIVE_ATTRIBUTES);for(b=e.b=0;b<f;++b)e.b=Math.max(e.b,GLctx.getActiveAttrib(a,b).name.length+1)}z[c>>2]=e.b}else if(35381==b){if(-1==e.c)for(a=
R[a],f=GLctx.getProgramParameter(a,GLctx.I),b=e.c=0;b<f;++b){var g=GLctx.P(a,b);e.c=Math.max(e.c,g.length+1)}z[c>>2]=e.c}else z[c>>2]=GLctx.getProgramParameter(R[a],b);else W(1282)}else W(1281)},_glGetShaderInfoLog:function(a,b,c,e){a=GLctx.getShaderInfoLog(T[a]);null===a&&(a="(unknown error)");0<b&&e?(b=na(a,A,e,b),c&&(z[c>>2]=b)):c&&(z[c>>2]=0)},_glGetShaderiv:function(a,b,c){c?35716==b?(a=GLctx.getShaderInfoLog(T[a]),null===a&&(a="(unknown error)"),z[c>>2]=a.length+1):35720==b?(a=GLctx.getShaderSource(T[a]),
z[c>>2]=null===a||0==a.length?0:a.length+1):z[c>>2]=GLctx.getShaderParameter(T[a],b):W(1281)},_glGetString:function(a){if(Mb[a])return Mb[a];switch(a){case 7936:case 7937:case 37445:case 37446:var b=ja(Sb(GLctx.getParameter(a)));break;case 7938:b=GLctx.getParameter(GLctx.VERSION);b=2<=GLctx.canvas.i.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=ja(Sb(b));break;case 7939:b=GLctx.getSupportedExtensions();for(var c=[],e=0;e<b.length;++e)c.push(b[e]),c.push("GL_"+b[e]);b=ja(Sb(c.join(" ")));
break;case 35724:b=GLctx.getParameter(GLctx.SHADING_LANGUAGE_VERSION);c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=ja(Sb(b));break;default:return W(1280),0}return Mb[a]=b},_glGetUniformLocation:function(a,b){b=C(b);var c=0;if(-1!==b.indexOf("]",b.length-1)){var e=b.lastIndexOf("["),f=b.slice(e+1,-1);if(0<f.length&&(c=parseInt(f),0>c))return-1;b=b.slice(0,e)}a=V[a];return a?(b=a.m[b])&&c<b[0]?b[1]+c:-1:-1},
_glLinkProgram:function(a){GLctx.linkProgram(R[a]);V[a]=null;var b=R[a];V[a]={m:{},j:0,b:-1,c:-1};a=V[a];for(var c=a.m,e=GLctx.getProgramParameter(b,GLctx.ACTIVE_UNIFORMS),f=0;f<e;++f){var g=GLctx.getActiveUniform(b,f),k=g.name;a.j=Math.max(a.j,k.length+1);-1!==k.indexOf("]",k.length-1)&&(k=k.slice(0,k.lastIndexOf("[")));var r=GLctx.getUniformLocation(b,k);if(null!=r){var m=X(S);c[k]=[g.size,m];S[m]=r;for(var v=1;v<g.size;++v)r=GLctx.getUniformLocation(b,k+"["+v+"]"),m=X(S),S[m]=r}}},_glPolygonOffset:function(a,
b){GLctx.polygonOffset(a,b)},_glScissor:function(a,b,c,e){GLctx.scissor(a,b,c,e)},_glShaderSource:function(a,b,c,e){for(var f="",g=0;g<b;++g){if(e){var k=z[e+4*g>>2];k=0>k?C(z[c+4*g>>2]):C(z[c+4*g>>2],k)}else k=C(z[c+4*g>>2]);f+=k}GLctx.shaderSource(T[a],f)},_glStencilFunc:function(a,b,c){GLctx.stencilFunc(a,b,c)},_glStencilFuncSeparate:function(a,b,c,e){GLctx.stencilFuncSeparate(a,b,c,e)},_glStencilMask:function(a){GLctx.stencilMask(a)},_glStencilOp:function(a,b,c){GLctx.stencilOp(a,b,c)},_glStencilOpSeparate:function(a,
b,c,e){GLctx.stencilOpSeparate(a,b,c,e)},_glUniform1fv:function(a,b,c){if(U.a)GLctx.uniform1fv(S[a],D,c>>2,b);else{if(256>=b){var e=Y[b-1];for(var f=0;f<b;++f)e[f]=D[c+4*f>>2]}else e=D.subarray(c>>2,c+4*b>>2);GLctx.uniform1fv(S[a],e)}},_glUniform1i:function(a,b){GLctx.uniform1i(S[a],b)},_glUniform2fv:function(a,b,c){if(U.a)GLctx.uniform2fv(S[a],D,c>>2,2*b);else{if(256>=2*b){var e=Y[2*b-1];for(var f=0;f<2*b;f+=2)e[f]=D[c+4*f>>2],e[f+1]=D[c+(4*f+4)>>2]}else e=D.subarray(c>>2,c+8*b>>2);GLctx.uniform2fv(S[a],
e)}},_glUniform3fv:function(a,b,c){if(U.a)GLctx.uniform3fv(S[a],D,c>>2,3*b);else{if(256>=3*b){var e=Y[3*b-1];for(var f=0;f<3*b;f+=3)e[f]=D[c+4*f>>2],e[f+1]=D[c+(4*f+4)>>2],e[f+2]=D[c+(4*f+8)>>2]}else e=D.subarray(c>>2,c+12*b>>2);GLctx.uniform3fv(S[a],e)}},_glUniform4fv:function(a,b,c){if(U.a)GLctx.uniform4fv(S[a],D,c>>2,4*b);else{if(256>=4*b){var e=Y[4*b-1];for(var f=0;f<4*b;f+=4)e[f]=D[c+4*f>>2],e[f+1]=D[c+(4*f+4)>>2],e[f+2]=D[c+(4*f+8)>>2],e[f+3]=D[c+(4*f+12)>>2]}else e=D.subarray(c>>2,c+16*b>>
2);GLctx.uniform4fv(S[a],e)}},_glUniformMatrix4fv:function(a,b,c,e){if(U.a)GLctx.uniformMatrix4fv(S[a],!!c,D,e>>2,16*b);else{if(256>=16*b){var f=Y[16*b-1];for(var g=0;g<16*b;g+=16)f[g]=D[e+4*g>>2],f[g+1]=D[e+(4*g+4)>>2],f[g+2]=D[e+(4*g+8)>>2],f[g+3]=D[e+(4*g+12)>>2],f[g+4]=D[e+(4*g+16)>>2],f[g+5]=D[e+(4*g+20)>>2],f[g+6]=D[e+(4*g+24)>>2],f[g+7]=D[e+(4*g+28)>>2],f[g+8]=D[e+(4*g+32)>>2],f[g+9]=D[e+(4*g+36)>>2],f[g+10]=D[e+(4*g+40)>>2],f[g+11]=D[e+(4*g+44)>>2],f[g+12]=D[e+(4*g+48)>>2],f[g+13]=D[e+(4*
g+52)>>2],f[g+14]=D[e+(4*g+56)>>2],f[g+15]=D[e+(4*g+60)>>2]}else f=D.subarray(e>>2,e+64*b>>2);GLctx.uniformMatrix4fv(S[a],!!c,f)}},_glUseProgram:function(a){GLctx.useProgram(a?R[a]:null)},_glVertexAttribDivisorEXT:function(a,b){GLctx.vertexAttribDivisor(a,b)},_glVertexAttribPointer:function(a,b,c,e,f,g){GLctx.vertexAttribPointer(a,b,c,!!e,f,g)},_glViewport:function(a,b,c,e){GLctx.viewport(a,b,c,e)},DYNAMICTOP_PTR:za,STACKTOP:wa};var Tb=d.asm(d.u,d.v,buffer);d.asm=Tb;
d._main=function(){return d.asm._main.apply(null,arguments)};var ka=d._malloc=function(){return d.asm._malloc.apply(null,arguments)},qa=d.stackAlloc=function(){return d.asm.stackAlloc.apply(null,arguments)};d.dynCall_iiii=function(){return d.asm.dynCall_iiii.apply(null,arguments)};d.dynCall_v=function(){return d.asm.dynCall_v.apply(null,arguments)};d.asm=Tb;function t(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}t.prototype=Error();
t.prototype.constructor=t;I=function Ub(){d.calledRun||Vb();d.calledRun||(I=Ub)};d.callMain=function(a){a=a||[];Ha||(Ha=!0,G(Da));var b=a.length+1,c=qa(4*(b+1));z[c>>2]=pa(d.thisProgram);for(var e=1;e<b;e++)z[(c>>2)+e]=pa(a[e-1]);z[(c>>2)+b]=0;try{var f=d._main(b,c,0);Wb(f,!0)}catch(g){g instanceof t||("SimulateInfiniteLoop"==g?d.noExitRuntime=!0:((a=g)&&"object"===typeof g&&g.stack&&(a=[g,g.stack]),d.printErr("exception thrown: "+a),d.quit(1,g)))}finally{}};
function Vb(a){function b(){if(!d.calledRun&&(d.calledRun=!0,!w)){Ha||(Ha=!0,G(Da));G(Ea);if(d.onRuntimeInitialized)d.onRuntimeInitialized();d._main&&Xb&&d.callMain(a);if(d.postRun)for("function"==typeof d.postRun&&(d.postRun=[d.postRun]);d.postRun.length;){var b=d.postRun.shift();Ga.unshift(b)}G(Ga)}}a=a||d.arguments;if(!(0<H)){if(d.preRun)for("function"==typeof d.preRun&&(d.preRun=[d.preRun]);d.preRun.length;)Ia();G(Ca);0<H||d.calledRun||(d.setStatus?(d.setStatus("Running..."),setTimeout(function(){setTimeout(function(){d.setStatus("")},
1);b()},1)):b())}}d.run=Vb;function Wb(a,b){if(!b||!d.noExitRuntime||0!==a){if(!d.noExitRuntime&&(w=!0,wa=void 0,G(Fa),d.onExit))d.onExit(a);q&&process.exit(a);d.quit(a,new t(a))}}d.exit=Wb;function y(a){if(d.onAbort)d.onAbort(a);void 0!==a?(d.print(a),d.printErr(a),a=JSON.stringify(a)):a="";w=!0;throw"abort("+a+"). Build with -s ASSERTIONS=1 for more info.";}d.abort=y;if(d.preInit)for("function"==typeof d.preInit&&(d.preInit=[d.preInit]);0<d.preInit.length;)d.preInit.pop()();var Xb=!0;
d.noInitialRun&&(Xb=!1);d.noExitRuntime=!0;Vb();
