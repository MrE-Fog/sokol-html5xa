
var h;h||(h=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign,ba=aa({},h),ca=[],da="./this.program",ea=(a,b)=>{throw b;},fa="object"===typeof window,k="function"===typeof importScripts,l="",ha,ia,ja,fs,ka,la;
if("object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)l=k?require("path").dirname(l)+"/":__dirname+"/",la=function(){ka||(fs=require("fs"),ka=require("path"))},ha=function(a,b){la();a=ka.normalize(a);return fs.readFileSync(a,b?null:"utf8")},ja=function(a){a=ha(a,!0);a.buffer||(a=new Uint8Array(a));return a},ia=function(a,b,c){la();a=ka.normalize(a);fs.readFile(a,function(d,e){d?c(d):b(e.buffer)})},1<process.argv.length&&(da=process.argv[1].replace(/\\/g,
"/")),ca=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=h),process.on("uncaughtException",function(a){if(!(a instanceof ma))throw a;}),process.on("unhandledRejection",function(a){throw a;}),ea=(a,b)=>{if(noExitRuntime||0<na)throw process.exitCode=a,b;b instanceof ma||u("exiting due to exception: "+b);process.exit(a)},h.inspect=function(){return"[Emscripten Module object]"};else if(fa||k)k?l=self.location.href:"undefined"!==typeof document&&document.currentScript&&(l=document.currentScript.src),
l=0!==l.indexOf("blob:")?l.substr(0,l.replace(/[?#].*/,"").lastIndexOf("/")+1):"",ha=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},k&&(ja=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),ia=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};
var oa=h.print||console.log.bind(console),u=h.printErr||console.warn.bind(console);aa(h,ba);ba=null;h.arguments&&(ca=h.arguments);h.thisProgram&&(da=h.thisProgram);h.quit&&(ea=h.quit);var w;h.wasmBinary&&(w=h.wasmBinary);var noExitRuntime=h.noExitRuntime||!0;"object"!==typeof WebAssembly&&pa("no native wasm support detected");var qa,ra=!1;
function sa(a,b,c){var d={string:function(p){var q=0;if(null!==p&&void 0!==p&&0!==p){var r=(p.length<<2)+1;q=x(r);y(p,A,q,r)}return q},array:function(p){var q=x(p.length);B.set(p,q);return q}};a=h["_"+a];var e=[],g=0;if(c)for(var f=0;f<c.length;f++){var n=d[b[f]];n?(0===g&&(g=ta()),e[f]=n(c[f])):e[f]=c[f]}b=a.apply(null,e);b=function(p){0!==g&&ua(g);return p}(b)}var va="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function wa(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&va)return va.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var g=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|g);else{var f=a[b++]&63;e=224==(e&240)?(e&15)<<12|g<<6|f:(e&7)<<18|g<<12|f<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function C(a,b){return a?wa(A,a,b):""}
function y(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var g=0;g<a.length;++g){var f=a.charCodeAt(g);if(55296<=f&&57343>=f){var n=a.charCodeAt(++g);f=65536+((f&1023)<<10)|n&1023}if(127>=f){if(c>=d)break;b[c++]=f}else{if(2047>=f){if(c+1>=d)break;b[c++]=192|f>>6}else{if(65535>=f){if(c+2>=d)break;b[c++]=224|f>>12}else{if(c+3>=d)break;b[c++]=240|f>>18;b[c++]=128|f>>12&63}b[c++]=128|f>>6&63}b[c++]=128|f&63}}b[c]=0;return c-e}
function xa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function ya(a){var b=xa(a)+1,c=x(b);y(a,B,c,b);return c}var za,B,A,Aa,Ba,D,Ca,E,F;
function Da(){var a=qa.buffer;za=a;h.HEAP8=B=new Int8Array(a);h.HEAP16=Aa=new Int16Array(a);h.HEAP32=D=new Int32Array(a);h.HEAPU8=A=new Uint8Array(a);h.HEAPU16=Ba=new Uint16Array(a);h.HEAPU32=Ca=new Uint32Array(a);h.HEAPF32=E=new Float32Array(a);h.HEAPF64=F=new Float64Array(a)}var Ea,Fa=[],Ga=[],Ha=[],Ia=[],Ja=[],na=0;function Ka(){var a=h.preRun.shift();Fa.unshift(a)}var G=0,La=null,H=null;h.preloadedImages={};h.preloadedAudios={};
function pa(a){if(h.onAbort)h.onAbort(a);a="Aborted("+a+")";u(a);ra=!0;throw new WebAssembly.RuntimeError(a+". Build with -s ASSERTIONS=1 for more info.");}function Ma(){return I.startsWith("data:application/octet-stream;base64,")}var I;I="shdfeatures-sapp.wasm";if(!Ma()){var Na=I;I=h.locateFile?h.locateFile(Na,l):l+Na}function Oa(){var a=I;try{if(a==I&&w)return new Uint8Array(w);if(ja)return ja(a);throw"both async and sync fetching of the wasm failed";}catch(b){pa(b)}}
function Pa(){if(!w&&(fa||k)){if("function"===typeof fetch&&!I.startsWith("file://"))return fetch(I,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+I+"'";return a.arrayBuffer()}).catch(function(){return Oa()});if(ia)return new Promise(function(a,b){ia(I,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Oa()})}
function Qa(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(h);else{var c=b.dd;"number"===typeof c?void 0===b.xc?J(c)():J(c)(b.xc):c(void 0===b.xc?null:b.xc)}}}var Ra=[];function J(a){var b=Ra[a];b||(a>=Ra.length&&(Ra.length=a+1),Ra[a]=b=Ea.get(a));return b}var Sa=[null,[],[]],Ta={},Ua=0;function Va(){for(var a=K.length-1;0<=a;--a)Wa(a);K=[];Xa=[]}var Xa=[];function Ya(){if(Ua&&Za.pc)for(var a=0;a<Xa.length;++a){var b=Xa[a];Xa.splice(a,1);--a;b.pd.apply(null,b.$c)}}var K=[];
function Wa(a){var b=K[a];b.target.removeEventListener(b.fc,b.Sc,b.hc);K.splice(a,1)}function L(a){function b(d){++Ua;Za=a;Ya();a.jc(d);Ya();--Ua}if(a.ic)a.Sc=b,a.target.addEventListener(a.fc,b,a.hc),K.push(a),$a||(Ia.push(Va),$a=!0);else for(var c=0;c<K.length;++c)K[c].target==a.target&&K[c].fc==a.fc&&Wa(c--)}function ab(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}
var $a,Za,bb,cb,db,eb,fb,gb,hb,ib=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function M(a){a=2<a?C(a):a;return ib[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}function jb(a){return 0>ib.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}
function kb(a,b,c,d,e,g){bb||(bb=N(256));a={target:M(a),fc:g,ic:d,jc:function(f){f=f||event;var n=f.target.id?f.target.id:"",p=bb;y(ab(f.target),A,p+0,128);y(n,A,p+128,128);J(d)(e,p,b)&&f.preventDefault()},hc:c};L(a)}
function lb(a,b,c,d,e,g){cb||(cb=N(176));a={target:M(a),pc:!0,fc:g,ic:d,jc:function(f){var n=cb;F[n>>3]=f.timeStamp;var p=n>>2;D[p+2]=f.location;D[p+3]=f.ctrlKey;D[p+4]=f.shiftKey;D[p+5]=f.altKey;D[p+6]=f.metaKey;D[p+7]=f.repeat;D[p+8]=f.charCode;D[p+9]=f.keyCode;D[p+10]=f.which;y(f.key||"",A,n+44,32);y(f.code||"",A,n+76,32);y(f.char||"",A,n+108,32);y(f.locale||"",A,n+140,32);J(d)(e,n,b)&&f.preventDefault()},hc:c};L(a)}
function mb(a,b,c){F[a>>3]=b.timeStamp;a>>=2;D[a+2]=b.screenX;D[a+3]=b.screenY;D[a+4]=b.clientX;D[a+5]=b.clientY;D[a+6]=b.ctrlKey;D[a+7]=b.shiftKey;D[a+8]=b.altKey;D[a+9]=b.metaKey;Aa[2*a+20]=b.button;Aa[2*a+21]=b.buttons;D[a+11]=b.movementX;D[a+12]=b.movementY;c=jb(c);D[a+13]=b.clientX-c.left;D[a+14]=b.clientY-c.top}
function O(a,b,c,d,e,g){db||(db=N(72));a=M(a);L({target:a,pc:"mousemove"!=g&&"mouseenter"!=g&&"mouseleave"!=g,fc:g,ic:d,jc:function(f){f=f||event;mb(db,f,a);J(d)(e,db,b)&&f.preventDefault()},hc:c})}function nb(a,b,c,d,e){eb||(eb=N(260));L({target:a,fc:e,ic:d,jc:function(g){g=g||event;var f=eb,n=document.pointerLockElement||document.Bc||document.Fc||document.Dc;D[f>>2]=!!n;var p=n&&n.id?n.id:"";y(ab(n),A,f+4,128);y(p,A,f+132,128);J(d)(20,f,b)&&g.preventDefault()},hc:c})}
function ob(a,b,c,d,e){L({target:a,fc:e,ic:d,jc:function(g){g=g||event;J(d)(38,0,b)&&g.preventDefault()},hc:c})}
function pb(a,b,c,d){fb||(fb=N(36));a=M(a);L({target:a,fc:"resize",ic:d,jc:function(e){e=e||event;if(e.target==a){var g=document.body;if(g){var f=fb;D[f>>2]=e.detail;D[f+4>>2]=g.clientWidth;D[f+8>>2]=g.clientHeight;D[f+12>>2]=innerWidth;D[f+16>>2]=innerHeight;D[f+20>>2]=outerWidth;D[f+24>>2]=outerHeight;D[f+28>>2]=pageXOffset;D[f+32>>2]=pageYOffset;J(d)(10,f,b)&&e.preventDefault()}}},hc:c})}
function qb(a,b,c,d,e,g){gb||(gb=N(1696));a=M(a);L({target:a,pc:"touchstart"==g||"touchend"==g,fc:g,ic:d,jc:function(f){for(var n,p={},q=f.touches,r=0;r<q.length;++r)n=q[r],n.Gc=n.Ic=0,p[n.identifier]=n;for(r=0;r<f.changedTouches.length;++r)n=f.changedTouches[r],n.Gc=1,p[n.identifier]=n;for(r=0;r<f.targetTouches.length;++r)p[f.targetTouches[r].identifier].Ic=1;q=gb;F[q>>3]=f.timeStamp;var v=q>>2;D[v+3]=f.ctrlKey;D[v+4]=f.shiftKey;D[v+5]=f.altKey;D[v+6]=f.metaKey;v+=7;var Y=jb(a),m=0;for(r in p)if(n=
p[r],D[v]=n.identifier,D[v+1]=n.screenX,D[v+2]=n.screenY,D[v+3]=n.clientX,D[v+4]=n.clientY,D[v+5]=n.pageX,D[v+6]=n.pageY,D[v+7]=n.Gc,D[v+8]=n.Ic,D[v+9]=n.clientX-Y.left,D[v+10]=n.clientY-Y.top,v+=13,31<++m)break;D[q+8>>2]=m;J(d)(e,q,b)&&f.preventDefault()},hc:c})}function rb(a,b,c,d,e,g){a={target:M(a),fc:g,ic:d,jc:function(f){f=f||event;J(d)(e,0,b)&&f.preventDefault()},hc:c};L(a)}
function sb(a,b,c,d){hb||(hb=N(104));L({target:a,pc:!0,fc:"wheel",ic:d,jc:function(e){e=e||event;var g=hb;mb(g,e,a);F[g+72>>3]=e.deltaX;F[g+80>>3]=e.deltaY;F[g+88>>3]=e.deltaZ;D[g+96>>2]=e.deltaMode;J(d)(9,g,b)&&e.preventDefault()},hc:c})}
function tb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,g){b.drawArraysInstancedANGLE(c,d,e,g)},a.drawElementsInstanced=function(c,d,e,g,f){b.drawElementsInstancedANGLE(c,d,e,g,f)})}
function ub(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function vb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function wb(a){a.bd=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function xb(a){a.hd=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function yb(a){a.kd=a.getExtension("WEBGL_multi_draw")}var zb=1,Ab=[],P=[],Bb=[],Cb=[],Db=[],Q=[],Eb=[],Fb=[],Gb={},Hb={};function S(a){Ib||(Ib=a)}function Jb(a){for(var b=zb++,c=a.length;c<b;c++)a[c]=null;return b}
function Kb(a,b){a.Ec||(a.Ec=a.getContext,a.getContext=function(d,e){e=a.Ec(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.Hc?a.getContext("webgl2",b):a.getContext("webgl",b);return c?Lb(c,b):0}function Lb(a,b){var c=Jb(Fb),d={gd:c,attributes:b,version:b.Hc,wc:a};a.canvas&&(a.canvas.Zc=d);Fb[c]=d;("undefined"===typeof b.Cc||b.Cc)&&Mb(d);return c}
function Mb(a){a||(a=T);if(!a.Uc){a.Uc=!0;var b=a.wc;tb(b);ub(b);vb(b);wb(b);xb(b);2<=a.version&&(b.Ac=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.Ac)b.Ac=b.getExtension("EXT_disjoint_timer_query");yb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var Ib,T,Nb=["default","low-power","high-performance"],Ob={};
function Pb(){if(!Qb){var a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"===typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:da||"./this.program"},b;for(b in Ob)void 0===Ob[b]?delete a[b]:a[b]=Ob[b];var c=[];for(b in a)c.push(b+"="+a[b]);Qb=c}return Qb}var Qb;function Rb(a,b,c,d){for(var e=0;e<a;e++){var g=U[c](),f=g&&Jb(d);g?(g.name=f,d[f]=g):S(1282);D[b+4*e>>2]=f}}
function Tb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=U.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>T.version){S(1282);return}c=2*(U.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>T.version){S(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=U.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":S(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:S(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)D[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){S(1280);u("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:S(1280);u("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}D[b>>2]=c}else S(1281)}
function V(a){var b=xa(a)+1,c=N(b);y(a,A,c,b);return c}function Ub(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function Vb(a){a-=5120;return 0==a?B:1==a?A:2==a?Aa:4==a?D:6==a?E:5==a||28922==a||28520==a||30779==a||30782==a?Ca:Ba}function Wb(a){return 31-Math.clz32(a.BYTES_PER_ELEMENT)}function Xb(a,b,c,d,e){a=Vb(a);var g=Wb(a);return a.subarray(e>>g,e+d*(c*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[b-6402]||1)*(1<<g)+4-1&-4)>>g)}
function W(a){var b=U.Rc;if(b){var c=b.oc[a];"number"===typeof c&&(b.oc[a]=c=U.getUniformLocation(b,b.Pc[a]+(0<c?"["+c+"]":"")));return c}S(1282)}var X=[],Yb=[];function Zb(a){return 0===a%4&&(0!==a%100||0===a%400)}function $b(a,b){for(var c=0,d=0;d<=b;c+=a[d++]);return c}var ac=[31,29,31,30,31,30,31,31,30,31,30,31],bc=[31,28,31,30,31,30,31,31,30,31,30,31];
function cc(a,b){for(a=new Date(a.getTime());0<b;){var c=a.getMonth(),d=(Zb(a.getFullYear())?ac:bc)[c];if(b>d-a.getDate())b-=d-a.getDate()+1,a.setDate(1),11>c?a.setMonth(c+1):(a.setMonth(0),a.setFullYear(a.getFullYear()+1));else{a.setDate(a.getDate()+b);break}}return a}
function dc(a,b,c,d){function e(m,t,z){for(m="number"===typeof m?m.toString():m||"";m.length<t;)m=z[0]+m;return m}function g(m,t){return e(m,t,"0")}function f(m,t){function z(Sb){return 0>Sb?-1:0<Sb?1:0}var R;0===(R=z(m.getFullYear()-t.getFullYear()))&&0===(R=z(m.getMonth()-t.getMonth()))&&(R=z(m.getDate()-t.getDate()));return R}function n(m){switch(m.getDay()){case 0:return new Date(m.getFullYear()-1,11,29);case 1:return m;case 2:return new Date(m.getFullYear(),0,3);case 3:return new Date(m.getFullYear(),
0,2);case 4:return new Date(m.getFullYear(),0,1);case 5:return new Date(m.getFullYear()-1,11,31);case 6:return new Date(m.getFullYear()-1,11,30)}}function p(m){m=cc(new Date(m.ec+1900,0,1),m.vc);var t=new Date(m.getFullYear()+1,0,4),z=n(new Date(m.getFullYear(),0,4));t=n(t);return 0>=f(z,m)?0>=f(t,m)?m.getFullYear()+1:m.getFullYear():m.getFullYear()-1}var q=D[d+40>>2];d={Xc:D[d>>2],Wc:D[d+4>>2],tc:D[d+8>>2],nc:D[d+12>>2],lc:D[d+16>>2],ec:D[d+20>>2],uc:D[d+24>>2],vc:D[d+28>>2],qd:D[d+32>>2],Vc:D[d+
36>>2],Yc:q?C(q):""};c=C(c);q={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var r in q)c=c.replace(new RegExp(r,"g"),q[r]);var v="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
Y="January February March April May June July August September October November December".split(" ");q={"%a":function(m){return v[m.uc].substring(0,3)},"%A":function(m){return v[m.uc]},"%b":function(m){return Y[m.lc].substring(0,3)},"%B":function(m){return Y[m.lc]},"%C":function(m){return g((m.ec+1900)/100|0,2)},"%d":function(m){return g(m.nc,2)},"%e":function(m){return e(m.nc,2," ")},"%g":function(m){return p(m).toString().substring(2)},"%G":function(m){return p(m)},"%H":function(m){return g(m.tc,
2)},"%I":function(m){m=m.tc;0==m?m=12:12<m&&(m-=12);return g(m,2)},"%j":function(m){return g(m.nc+$b(Zb(m.ec+1900)?ac:bc,m.lc-1),3)},"%m":function(m){return g(m.lc+1,2)},"%M":function(m){return g(m.Wc,2)},"%n":function(){return"\n"},"%p":function(m){return 0<=m.tc&&12>m.tc?"AM":"PM"},"%S":function(m){return g(m.Xc,2)},"%t":function(){return"\t"},"%u":function(m){return m.uc||7},"%U":function(m){var t=new Date(m.ec+1900,0,1),z=0===t.getDay()?t:cc(t,7-t.getDay());m=new Date(m.ec+1900,m.lc,m.nc);return 0>
f(z,m)?g(Math.ceil((31-z.getDate()+($b(Zb(m.getFullYear())?ac:bc,m.getMonth()-1)-31)+m.getDate())/7),2):0===f(z,t)?"01":"00"},"%V":function(m){var t=new Date(m.ec+1901,0,4),z=n(new Date(m.ec+1900,0,4));t=n(t);var R=cc(new Date(m.ec+1900,0,1),m.vc);return 0>f(R,z)?"53":0>=f(t,R)?"01":g(Math.ceil((z.getFullYear()<m.ec+1900?m.vc+32-z.getDate():m.vc+1-z.getDate())/7),2)},"%w":function(m){return m.uc},"%W":function(m){var t=new Date(m.ec,0,1),z=1===t.getDay()?t:cc(t,0===t.getDay()?1:7-t.getDay()+1);m=
new Date(m.ec+1900,m.lc,m.nc);return 0>f(z,m)?g(Math.ceil((31-z.getDate()+($b(Zb(m.getFullYear())?ac:bc,m.getMonth()-1)-31)+m.getDate())/7),2):0===f(z,t)?"01":"00"},"%y":function(m){return(m.ec+1900).toString().substring(2)},"%Y":function(m){return m.ec+1900},"%z":function(m){m=m.Vc;var t=0<=m;m=Math.abs(m)/60;return(t?"+":"-")+String("0000"+(m/60*100+m%60)).slice(-4)},"%Z":function(m){return m.Yc},"%%":function(){return"%"}};for(r in q)c.includes(r)&&(c=c.replace(new RegExp(r,"g"),q[r](d)));r=ec(c);
if(r.length>b)return 0;B.set(r,a);return r.length-1}for(var U,fc=new Float32Array(288),Z=0;288>Z;++Z)X[Z]=fc.subarray(0,Z+1);var gc=new Int32Array(288);for(Z=0;288>Z;++Z)Yb[Z]=gc.subarray(0,Z+1);function ec(a){var b=Array(xa(a)+1);y(a,b,0,b.length);return b}
var pc={na:function(){return 0},mb:function(){return 0},nb:function(){},h:function(){pa("")},V:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},Y:function(a,b,c){a=M(a);if(!a)return-4;a=jb(a);F[b>>3]=a.width;F[c>>3]=a.height;return 0},fb:function(a,b,c){A.copyWithin(a,b,b+c)},La:function(a,b){function c(d){J(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},gb:function(a){var b=A.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/
c);d=Math.min(d,a+100663296);d=Math.max(a,d);0<d%65536&&(d+=65536-d%65536);a:{try{qa.grow(Math.min(2147483648,d)-za.byteLength+65535>>>16);Da();var e=1;break a}catch(g){}e=void 0}if(e)return!0}return!1},Z:function(a,b,c,d){kb(a,b,c,d,12,"blur");return 0},S:function(a,b,c){a=M(a);if(!a)return-4;a.width=b;a.height=c;return 0},_:function(a,b,c,d){kb(a,b,c,d,13,"focus");return 0},ha:function(a,b,c,d){lb(a,b,c,d,2,"keydown");return 0},fa:function(a,b,c,d){lb(a,b,c,d,1,"keypress");return 0},ga:function(a,
b,c,d){lb(a,b,c,d,3,"keyup");return 0},qa:function(a,b,c,d){O(a,b,c,d,5,"mousedown");return 0},ka:function(a,b,c,d){O(a,b,c,d,33,"mouseenter");return 0},ja:function(a,b,c,d){O(a,b,c,d,34,"mouseleave");return 0},la:function(a,b,c,d){O(a,b,c,d,8,"mousemove");return 0},pa:function(a,b,c,d){O(a,b,c,d,6,"mouseup");return 0},aa:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.Bc||document.body.Fc||document.body.Dc))return-1;a=M(a);if(!a)return-4;nb(a,b,c,
d,"pointerlockchange");nb(a,b,c,d,"mozpointerlockchange");nb(a,b,c,d,"webkitpointerlockchange");nb(a,b,c,d,"mspointerlockchange");return 0},$:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.Bc||document.body.Fc||document.body.Dc))return-1;a=M(a);if(!a)return-4;ob(a,b,c,d,"pointerlockerror");ob(a,b,c,d,"mozpointerlockerror");ob(a,b,c,d,"webkitpointerlockerror");ob(a,b,c,d,"mspointerlockerror");return 0},Za:function(a,b,c,d){pb(a,b,c,d);return 0},ba:function(a,b,c,
d){qb(a,b,c,d,25,"touchcancel");return 0},ca:function(a,b,c,d){qb(a,b,c,d,23,"touchend");return 0},da:function(a,b,c,d){qb(a,b,c,d,24,"touchmove");return 0},ea:function(a,b,c,d){qb(a,b,c,d,22,"touchstart");return 0},X:function(a,b,c,d){rb(a,b,c,d,31,"webglcontextlost");return 0},W:function(a,b,c,d){rb(a,b,c,d,32,"webglcontextrestored");return 0},ia:function(a,b,c,d){a=M(a);return"undefined"!==typeof a.onwheel?(sb(a,b,c,d),0):-1},G:function(a,b){b>>=2;b={alpha:!!D[b],depth:!!D[b+1],stencil:!!D[b+2],
antialias:!!D[b+3],premultipliedAlpha:!!D[b+4],preserveDrawingBuffer:!!D[b+5],powerPreference:Nb[D[b+6]],failIfMajorPerformanceCaveat:!!D[b+7],Hc:D[b+8],jd:D[b+9],Cc:D[b+10],Tc:D[b+11],ld:D[b+12],md:D[b+13]};a=M(a);return!a||b.Tc?0:Kb(a,b)},Gb:function(a,b){a=Fb[a];b=C(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&tb(U);"OES_vertex_array_object"==b&&ub(U);"WEBGL_draw_buffers"==b&&vb(U);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&wb(U);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==
b&&xb(U);"WEBGL_multi_draw"==b&&yb(U);return!!a.wc.getExtension(b)},Ia:function(a){a>>=2;for(var b=0;14>b;++b)D[a+b]=0;D[a]=D[a+1]=D[a+3]=D[a+4]=D[a+8]=D[a+10]=1},Lb:function(a){T=Fb[a];h.ad=U=T&&T.wc;return!a||U?0:-5},ib:function(a,b){var c=0;Pb().forEach(function(d,e){var g=b+c;e=D[a+4*e>>2]=g;for(g=0;g<d.length;++g)B[e++>>0]=d.charCodeAt(g);B[e>>0]=0;c+=d.length+1});return 0},jb:function(a,b){var c=Pb();D[a>>2]=c.length;var d=0;c.forEach(function(e){d+=e.length+1});D[b>>2]=d;return 0},ma:function(){return 0},
lb:function(a,b,c,d){a=Ta.ed(a);b=Ta.cd(a,b,c);D[d>>2]=b;return 0},eb:function(){},kb:function(a,b,c,d){for(var e=0,g=0;g<c;g++){var f=D[b>>2],n=D[b+4>>2];b+=8;for(var p=0;p<n;p++){var q=A[f+p],r=Sa[a];0===q||10===q?((1===a?oa:u)(wa(r,0)),r.length=0):r.push(q)}e+=n}D[d>>2]=e;return 0},b:function(a){U.activeTexture(a)},F:function(a,b){U.attachShader(P[a],Q[b])},c:function(a,b){35051==a?U.zc=b:35052==a&&(U.kc=b);U.bindBuffer(a,Ab[b])},i:function(a,b){U.bindFramebuffer(a,Bb[b])},J:function(a,b){U.bindRenderbuffer(a,
Cb[b])},a:function(a,b){U.bindTexture(a,Db[b])},T:function(a){U.bindVertexArray(Eb[a])},O:function(a,b,c,d){U.blendColor(a,b,c,d)},P:function(a,b){U.blendEquationSeparate(a,b)},Q:function(a,b,c,d){U.blendFuncSeparate(a,b,c,d)},t:function(a,b,c,d,e,g,f,n,p,q){U.blitFramebuffer(a,b,c,d,e,g,f,n,p,q)},Ja:function(a,b,c,d){2<=T.version?c?U.bufferData(a,A,d,c,b):U.bufferData(a,b,d):U.bufferData(a,c?A.subarray(c,c+b):b,d)},p:function(a,b,c,d){2<=T.version?U.bufferSubData(a,b,A,d,c):U.bufferSubData(a,b,A.subarray(d,
d+c))},Hb:function(a){U.clear(a)},ta:function(a,b,c,d){U.clearColor(a,b,c,d)},B:function(a){U.clearDepth(a)},Ib:function(a){U.clearStencil(a)},l:function(a,b,c,d){U.colorMask(!!a,!!b,!!c,!!d)},wa:function(a){U.compileShader(Q[a])},Fa:function(a,b,c,d,e,g,f,n){2<=T.version?U.kc?U.compressedTexImage2D(a,b,c,d,e,g,f,n):U.compressedTexImage2D(a,b,c,d,e,g,A,n,f):U.compressedTexImage2D(a,b,c,d,e,g,n?A.subarray(n,n+f):null)},Da:function(a,b,c,d,e,g,f,n,p){U.kc?U.compressedTexImage3D(a,b,c,d,e,g,f,n,p):U.compressedTexImage3D(a,
b,c,d,e,g,f,A,p,n)},Ba:function(){var a=Jb(P),b=U.createProgram();b.name=a;b.sc=b.qc=b.rc=0;b.yc=1;P[a]=b;return a},ya:function(a){var b=Jb(Q);Q[b]=U.createShader(a);return b},L:function(a){U.cullFace(a)},Ra:function(a,b){for(var c=0;c<a;c++){var d=D[b+4*c>>2],e=Ab[d];e&&(U.deleteBuffer(e),e.name=0,Ab[d]=null,d==U.zc&&(U.zc=0),d==U.kc&&(U.kc=0))}},j:function(a,b){for(var c=0;c<a;++c){var d=D[b+4*c>>2],e=Bb[d];e&&(U.deleteFramebuffer(e),e.name=0,Bb[d]=null)}},z:function(a){if(a){var b=P[a];b?(U.deleteProgram(b),
b.name=0,P[a]=null):S(1281)}},U:function(a,b){for(var c=0;c<a;c++){var d=D[b+4*c>>2],e=Cb[d];e&&(U.deleteRenderbuffer(e),e.name=0,Cb[d]=null)}},v:function(a){if(a){var b=Q[a];b?(U.deleteShader(b),Q[a]=null):S(1281)}},Qa:function(a,b){for(var c=0;c<a;c++){var d=D[b+4*c>>2],e=Db[d];e&&(U.deleteTexture(e),e.name=0,Db[d]=null)}},Pa:function(a,b){for(var c=0;c<a;c++){var d=D[b+4*c>>2];U.deleteVertexArray(Eb[d]);Eb[d]=null}},y:function(a){U.depthFunc(a)},x:function(a){U.depthMask(!!a)},e:function(a){U.disable(a)},
R:function(a){U.disableVertexAttribArray(a)},qb:function(a,b,c){U.drawArrays(a,b,c)},rb:function(a,b,c,d){U.drawArraysInstanced(a,b,c,d)},sb:function(a,b,c,d){U.drawElements(a,b,c,d)},tb:function(a,b,c,d,e){U.drawElementsInstanced(a,b,c,d,e)},g:function(a){U.enable(a)},Db:function(a){U.enableVertexAttribArray(a)},M:function(a){U.frontFace(a)},Ka:function(a,b){Rb(a,b,"createBuffer",Ab)},K:function(a,b){Rb(a,b,"createRenderbuffer",Cb)},Ga:function(a,b){Rb(a,b,"createTexture",Db)},Oa:function(a,b){Rb(a,
b,"createVertexArray",Eb)},Jb:function(a,b){return U.getAttribLocation(P[a],C(b))},d:function(a,b){Tb(a,b)},za:function(a,b,c,d){a=U.getProgramInfoLog(P[a]);null===a&&(a="(unknown error)");b=0<b&&d?y(a,A,d,b):0;c&&(D[c>>2]=b)},E:function(a,b,c){if(c)if(a>=zb)S(1281);else if(a=P[a],35716==b)a=U.getProgramInfoLog(a),null===a&&(a="(unknown error)"),D[c>>2]=a.length+1;else if(35719==b){if(!a.sc)for(b=0;b<U.getProgramParameter(a,35718);++b)a.sc=Math.max(a.sc,U.getActiveUniform(a,b).name.length+1);D[c>>
2]=a.sc}else if(35722==b){if(!a.qc)for(b=0;b<U.getProgramParameter(a,35721);++b)a.qc=Math.max(a.qc,U.getActiveAttrib(a,b).name.length+1);D[c>>2]=a.qc}else if(35381==b){if(!a.rc)for(b=0;b<U.getProgramParameter(a,35382);++b)a.rc=Math.max(a.rc,U.getActiveUniformBlockName(a,b).length+1);D[c>>2]=a.rc}else D[c>>2]=U.getProgramParameter(a,b);else S(1281)},Kb:function(a,b,c,d){a=U.getShaderInfoLog(Q[a]);null===a&&(a="(unknown error)");b=0<b&&d?y(a,A,d,b):0;c&&(D[c>>2]=b)},ua:function(a,b,c){c?35716==b?(a=
U.getShaderInfoLog(Q[a]),null===a&&(a="(unknown error)"),D[c>>2]=a?a.length+1:0):35720==b?(a=U.getShaderSource(Q[a]),D[c>>2]=a?a.length+1:0):D[c>>2]=U.getShaderParameter(Q[a],b):S(1281)},Ta:function(a){var b=Gb[a];if(!b){switch(a){case 7939:b=U.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=V(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=U.getParameter(a))||S(1280);b=b&&V(b);break;case 7938:b=U.getParameter(7938);b=2<=T.version?"OpenGL ES 3.0 ("+b+")":
"OpenGL ES 2.0 ("+b+")";b=V(b);break;case 35724:b=U.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=V(b);break;default:S(1280)}Gb[a]=b}return b},Sa:function(a,b){if(2>T.version)return S(1282),0;var c=Hb[a];if(c)return 0>b||b>=c.length?(S(1281),0):c[b];switch(a){case 7939:return c=U.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return V(d)}),
c=Hb[a]=c,0>b||b>=c.length?(S(1281),0):c[b];default:return S(1280),0}},o:function(a,b){b=C(b);if(a=P[a]){var c=a,d=c.oc,e=c.Qc,g;if(!d)for(c.oc=d={},c.Pc={},g=0;g<U.getProgramParameter(c,35718);++g){var f=U.getActiveUniform(c,g);var n=f.name;f=f.size;var p=Ub(n);p=0<p?n.slice(0,p):n;var q=c.yc;c.yc+=f;e[p]=[f,q];for(n=0;n<f;++n)d[q]=n,c.Pc[q++]=p}c=a.oc;d=0;e=b;g=Ub(b);0<g&&(d=parseInt(b.slice(g+1))>>>0,e=b.slice(0,g));if((e=a.Qc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||U.getUniformLocation(a,b)))return d}else S(1281);
return-1},Aa:function(a){a=P[a];U.linkProgram(a);a.oc=0;a.Qc={}},N:function(a,b){U.polygonOffset(a,b)},u:function(a){U.readBuffer(a)},Ha:function(a,b,c,d){U.renderbufferStorage(a,b,c,d)},I:function(a,b,c,d,e){U.renderbufferStorageMultisample(a,b,c,d,e)},n:function(a,b,c,d){U.scissor(a,b,c,d)},xa:function(a,b,c,d){for(var e="",g=0;g<b;++g){var f=d?D[d+4*g>>2]:-1;e+=C(D[c+4*g>>2],0>f?void 0:f)}U.shaderSource(Q[a],e)},Na:function(a,b,c){U.stencilFunc(a,b,c)},sa:function(a,b,c,d){U.stencilFuncSeparate(a,
b,c,d)},w:function(a){U.stencilMask(a)},Ma:function(a,b,c){U.stencilOp(a,b,c)},ra:function(a,b,c,d){U.stencilOpSeparate(a,b,c,d)},Ea:function(a,b,c,d,e,g,f,n,p){if(2<=T.version)if(U.kc)U.texImage2D(a,b,c,d,e,g,f,n,p);else if(p){var q=Vb(n);U.texImage2D(a,b,c,d,e,g,f,n,q,p>>Wb(q))}else U.texImage2D(a,b,c,d,e,g,f,n,null);else U.texImage2D(a,b,c,d,e,g,f,n,p?Xb(n,f,d,e,p):null)},Ca:function(a,b,c,d,e,g,f,n,p,q){if(U.kc)U.texImage3D(a,b,c,d,e,g,f,n,p,q);else if(q){var r=Vb(p);U.texImage3D(a,b,c,d,e,g,
f,n,p,r,q>>Wb(r))}else U.texImage3D(a,b,c,d,e,g,f,n,p,null)},H:function(a,b,c){U.texParameterf(a,b,c)},f:function(a,b,c){U.texParameteri(a,b,c)},pb:function(a,b,c,d,e,g,f,n,p){if(2<=T.version)if(U.kc)U.texSubImage2D(a,b,c,d,e,g,f,n,p);else if(p){var q=Vb(n);U.texSubImage2D(a,b,c,d,e,g,f,n,q,p>>Wb(q))}else U.texSubImage2D(a,b,c,d,e,g,f,n,null);else q=null,p&&(q=Xb(n,f,e,g,p)),U.texSubImage2D(a,b,c,d,e,g,f,n,q)},ob:function(a,b,c,d,e,g,f,n,p,q,r){if(U.kc)U.texSubImage3D(a,b,c,d,e,g,f,n,p,q,r);else if(r){var v=
Vb(q);U.texSubImage3D(a,b,c,d,e,g,f,n,p,q,v,r>>Wb(v))}else U.texSubImage3D(a,b,c,d,e,g,f,n,p,q,null)},Cb:function(a,b,c){if(2<=T.version)U.uniform1fv(W(a),E,c>>2,b);else{if(288>=b)for(var d=X[b-1],e=0;e<b;++e)d[e]=E[c+4*e>>2];else d=E.subarray(c>>2,c+4*b>>2);U.uniform1fv(W(a),d)}},D:function(a,b){U.uniform1i(W(a),b)},yb:function(a,b,c){if(2<=T.version)U.uniform1iv(W(a),D,c>>2,b);else{if(288>=b)for(var d=Yb[b-1],e=0;e<b;++e)d[e]=D[c+4*e>>2];else d=D.subarray(c>>2,c+4*b>>2);U.uniform1iv(W(a),d)}},Bb:function(a,
b,c){if(2<=T.version)U.uniform2fv(W(a),E,c>>2,2*b);else{if(144>=b)for(var d=X[2*b-1],e=0;e<2*b;e+=2)d[e]=E[c+4*e>>2],d[e+1]=E[c+(4*e+4)>>2];else d=E.subarray(c>>2,c+8*b>>2);U.uniform2fv(W(a),d)}},xb:function(a,b,c){if(2<=T.version)U.uniform2iv(W(a),D,c>>2,2*b);else{if(144>=b)for(var d=Yb[2*b-1],e=0;e<2*b;e+=2)d[e]=D[c+4*e>>2],d[e+1]=D[c+(4*e+4)>>2];else d=D.subarray(c>>2,c+8*b>>2);U.uniform2iv(W(a),d)}},Ab:function(a,b,c){if(2<=T.version)U.uniform3fv(W(a),E,c>>2,3*b);else{if(96>=b)for(var d=X[3*b-
1],e=0;e<3*b;e+=3)d[e]=E[c+4*e>>2],d[e+1]=E[c+(4*e+4)>>2],d[e+2]=E[c+(4*e+8)>>2];else d=E.subarray(c>>2,c+12*b>>2);U.uniform3fv(W(a),d)}},wb:function(a,b,c){if(2<=T.version)U.uniform3iv(W(a),D,c>>2,3*b);else{if(96>=b)for(var d=Yb[3*b-1],e=0;e<3*b;e+=3)d[e]=D[c+4*e>>2],d[e+1]=D[c+(4*e+4)>>2],d[e+2]=D[c+(4*e+8)>>2];else d=D.subarray(c>>2,c+12*b>>2);U.uniform3iv(W(a),d)}},zb:function(a,b,c){if(2<=T.version)U.uniform4fv(W(a),E,c>>2,4*b);else{if(72>=b){var d=X[4*b-1],e=E;c>>=2;for(var g=0;g<4*b;g+=4){var f=
c+g;d[g]=e[f];d[g+1]=e[f+1];d[g+2]=e[f+2];d[g+3]=e[f+3]}}else d=E.subarray(c>>2,c+16*b>>2);U.uniform4fv(W(a),d)}},vb:function(a,b,c){if(2<=T.version)U.uniform4iv(W(a),D,c>>2,4*b);else{if(72>=b)for(var d=Yb[4*b-1],e=0;e<4*b;e+=4)d[e]=D[c+4*e>>2],d[e+1]=D[c+(4*e+4)>>2],d[e+2]=D[c+(4*e+8)>>2],d[e+3]=D[c+(4*e+12)>>2];else d=D.subarray(c>>2,c+16*b>>2);U.uniform4iv(W(a),d)}},ub:function(a,b,c,d){if(2<=T.version)U.uniformMatrix4fv(W(a),!!c,E,d>>2,16*b);else{if(18>=b){var e=X[16*b-1],g=E;d>>=2;for(var f=
0;f<16*b;f+=16){var n=d+f;e[f]=g[n];e[f+1]=g[n+1];e[f+2]=g[n+2];e[f+3]=g[n+3];e[f+4]=g[n+4];e[f+5]=g[n+5];e[f+6]=g[n+6];e[f+7]=g[n+7];e[f+8]=g[n+8];e[f+9]=g[n+9];e[f+10]=g[n+10];e[f+11]=g[n+11];e[f+12]=g[n+12];e[f+13]=g[n+13];e[f+14]=g[n+14];e[f+15]=g[n+15]}}else e=E.subarray(d>>2,d+64*b>>2);U.uniformMatrix4fv(W(a),!!c,e)}},m:function(a){a=P[a];U.useProgram(a);U.Rc=a},Eb:function(a,b){U.vertexAttribDivisor(a,b)},Fb:function(a,b,c,d,e,g){U.vertexAttribPointer(a,b,c,!!d,e,g)},k:function(a,b,c,d){U.viewport(a,
b,c,d)},cb:function(){h.Jc=function(a){0!=hc()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",h.Jc)},bb:function(){h.Oc=function(a){a=a.clipboardData.getData("text");sa("_sapp_emsc_onpaste",["string"],[a])};window.addEventListener("paste",h.Oc)},ab:function(a){h.nd=[];a=C(a);a=document.getElementById(a);h.Kc=function(b){b.stopPropagation();b.preventDefault()};h.Lc=function(b){b.stopPropagation();b.preventDefault()};h.Mc=function(b){b.stopPropagation();b.preventDefault()};
h.Nc=function(b){b.stopPropagation();b.preventDefault();var c=b.dataTransfer.files;h.od=c;ic(c.length);var d;for(d=0;d<c.length;d++)sa("_sapp_emsc_drop",["number","string"],[d,c[d].name]);jc(b.clientX,b.clientY)};a.addEventListener("dragenter",h.Kc,!1);a.addEventListener("dragleave",h.Lc,!1);a.addEventListener("dragover",h.Mc,!1);a.addEventListener("drop",h.Nc,!1)},Va:function(){var a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},s:function(){var a=document.createElement("input");
a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){kc()});document.body.append(a)},Xa:function(){document.exitPointerLock&&document.exitPointerLock()},r:function(){document.getElementById("_sokol_app_input_element").focus()},db:function(a){a=C(a);h.mc=document.getElementById(a);h.mc||console.log("sokol_app.h: invalid target:"+a);h.mc.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},$a:function(){window.removeEventListener("beforeunload",
h.Jc)},_a:function(){window.removeEventListener("paste",h.Oc)},Ya:function(a){a=C(a);a=document.getElementById(a);a.removeEventListener("dragenter",h.Kc);a.removeEventListener("dragleave",h.Lc);a.removeEventListener("dragover",h.Mc);a.removeEventListener("drop",h.Nc)},A:function(){h.mc&&h.mc.requestPointerLock&&h.mc.requestPointerLock()},Ua:function(a,b,c){var d=document.createElement("canvas");d.width=a;d.height=b;var e=d.getContext("2d"),g=e.createImageData(a,b);g.data.set(A.subarray(c,c+a*b*4));
e.putImageData(g,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},q:function(){document.getElementById("_sokol_app_input_element").blur()},Wa:function(a){a=C(a);var b=document.createElement("textarea");b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");b.setAttribute("spellcheck","false");b.style.left="-100px";b.style.top="-100px";b.style.height=1;b.style.width=
1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");document.body.removeChild(b)},C:function(a,b,c,d,e,g){b=C(b);var f=new XMLHttpRequest;f.open("GET",b);f.responseType="arraybuffer";var n=0<d;n&&f.setRequestHeader("Range","bytes="+c+"-"+(c+d-1));f.onreadystatechange=function(){if(this.readyState==this.DONE)if(206==this.status||200==this.status&&!n){var p=new Uint8Array(f.response),q=p.length;q<=g?(A.set(p,e),lc(a,d,q)):mc(a)}else nc(a,this.status)};f.send()},oa:function(a,
b){b=C(b);var c=new XMLHttpRequest;c.open("HEAD",b);c.onreadystatechange=function(){if(this.readyState==this.DONE)if(200==this.status){var d=this.getResponseHeader("Content-Length");oc(a,d)}else nc(a,this.status)};c.send()},va:function(){return navigator.userAgent.includes("Macintosh")?1:0},hb:function(a,b,c,d){return dc(a,b,c,d)}};
(function(){function a(e){h.asm=e.exports;qa=h.asm.Mb;Da();Ea=h.asm.dc;Ga.unshift(h.asm.Nb);G--;h.monitorRunDependencies&&h.monitorRunDependencies(G);0==G&&(null!==La&&(clearInterval(La),La=null),H&&(e=H,H=null,e()))}function b(e){a(e.instance)}function c(e){return Pa().then(function(g){return WebAssembly.instantiate(g,d)}).then(function(g){return g}).then(e,function(g){u("failed to asynchronously prepare wasm: "+g);pa(g)})}var d={a:pc};G++;h.monitorRunDependencies&&h.monitorRunDependencies(G);if(h.instantiateWasm)try{return h.instantiateWasm(d,
a)}catch(e){return u("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return w||"function"!==typeof WebAssembly.instantiateStreaming||Ma()||I.startsWith("file://")||"function"!==typeof fetch?c(b):fetch(I,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(g){u("wasm streaming compile failed: "+g);u("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
h.___wasm_call_ctors=function(){return(h.___wasm_call_ctors=h.asm.Nb).apply(null,arguments)};var N=h._malloc=function(){return(N=h._malloc=h.asm.Ob).apply(null,arguments)},kc=h.__sapp_emsc_notify_keyboard_hidden=function(){return(kc=h.__sapp_emsc_notify_keyboard_hidden=h.asm.Pb).apply(null,arguments)};h.__sapp_emsc_onpaste=function(){return(h.__sapp_emsc_onpaste=h.asm.Qb).apply(null,arguments)};
var hc=h.__sapp_html5_get_ask_leave_site=function(){return(hc=h.__sapp_html5_get_ask_leave_site=h.asm.Rb).apply(null,arguments)},ic=h.__sapp_emsc_begin_drop=function(){return(ic=h.__sapp_emsc_begin_drop=h.asm.Sb).apply(null,arguments)};h.__sapp_emsc_drop=function(){return(h.__sapp_emsc_drop=h.asm.Tb).apply(null,arguments)};var jc=h.__sapp_emsc_end_drop=function(){return(jc=h.__sapp_emsc_end_drop=h.asm.Ub).apply(null,arguments)};
h.__sapp_emsc_invoke_fetch_cb=function(){return(h.__sapp_emsc_invoke_fetch_cb=h.asm.Vb).apply(null,arguments)};h._main=function(){return(h._main=h.asm.Wb).apply(null,arguments)};h.__saudio_emsc_pull=function(){return(h.__saudio_emsc_pull=h.asm.Xb).apply(null,arguments)};
var oc=h.__sfetch_emsc_head_response=function(){return(oc=h.__sfetch_emsc_head_response=h.asm.Yb).apply(null,arguments)},lc=h.__sfetch_emsc_get_response=function(){return(lc=h.__sfetch_emsc_get_response=h.asm.Zb).apply(null,arguments)},nc=h.__sfetch_emsc_failed_http_status=function(){return(nc=h.__sfetch_emsc_failed_http_status=h.asm._b).apply(null,arguments)},mc=h.__sfetch_emsc_failed_buffer_too_small=function(){return(mc=h.__sfetch_emsc_failed_buffer_too_small=h.asm.$b).apply(null,arguments)},ta=
h.stackSave=function(){return(ta=h.stackSave=h.asm.ac).apply(null,arguments)},ua=h.stackRestore=function(){return(ua=h.stackRestore=h.asm.bc).apply(null,arguments)},x=h.stackAlloc=function(){return(x=h.stackAlloc=h.asm.cc).apply(null,arguments)},qc;function ma(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}H=function rc(){qc||sc();qc||(H=rc)};
function sc(a){function b(){if(!qc&&(qc=!0,h.calledRun=!0,!ra)){Qa(Ga);Qa(Ha);if(h.onRuntimeInitialized)h.onRuntimeInitialized();if(tc){var c=a,d=h._main;c=c||[];var e=c.length+1,g=x(4*(e+1));D[g>>2]=ya(da);for(var f=1;f<e;f++)D[(g>>2)+f]=ya(c[f-1]);D[(g>>2)+e]=0;try{var n=d(e,g);if(!(noExitRuntime||0<na)){if(h.onExit)h.onExit(n);ra=!0}ea(n,new ma(n))}catch(p){p instanceof ma||"unwind"==p||ea(1,p)}finally{}}if(h.postRun)for("function"==typeof h.postRun&&(h.postRun=[h.postRun]);h.postRun.length;)c=
h.postRun.shift(),Ja.unshift(c);Qa(Ja)}}a=a||ca;if(!(0<G)){if(h.preRun)for("function"==typeof h.preRun&&(h.preRun=[h.preRun]);h.preRun.length;)Ka();Qa(Fa);0<G||(h.setStatus?(h.setStatus("Running..."),setTimeout(function(){setTimeout(function(){h.setStatus("")},1);b()},1)):b())}}h.run=sc;if(h.preInit)for("function"==typeof h.preInit&&(h.preInit=[h.preInit]);0<h.preInit.length;)h.preInit.pop()();var tc=!0;h.noInitialRun&&(tc=!1);sc();
