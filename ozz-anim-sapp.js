
var g;g||(g=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign({},g),ba=[],ca="./this.program",da=(a,b)=>{throw b;},ea="object"==typeof window,k="function"==typeof importScripts,fa="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,m="",ha,ia,ja;
if(fa){m=k?require("path").dirname(m)+"/":__dirname+"/";var fs,ka;"function"===typeof require&&(fs=require("fs"),ka=require("path"));ha=(a,b)=>{a=ka.normalize(a);return fs.readFileSync(a,b?void 0:"utf8")};ja=a=>{a=ha(a,!0);a.buffer||(a=new Uint8Array(a));return a};ia=(a,b,c)=>{a=ka.normalize(a);fs.readFile(a,function(d,e){d?c(d):b(e.buffer)})};1<process.argv.length&&(ca=process.argv[1].replace(/\\/g,"/"));ba=process.argv.slice(2);"undefined"!=typeof module&&(module.exports=g);process.on("uncaughtException",
function(a){if(!(a instanceof la))throw a;});process.on("unhandledRejection",function(a){throw a;});da=(a,b)=>{if(noExitRuntime)throw process.exitCode=a,b;b instanceof la||u("exiting due to exception: "+b);process.exit(a)};g.inspect=function(){return"[Emscripten Module object]"}}else if(ea||k)k?m=self.location.href:"undefined"!=typeof document&&document.currentScript&&(m=document.currentScript.src),m=0!==m.indexOf("blob:")?m.substr(0,m.replace(/[?#].*/,"").lastIndexOf("/")+1):"",ha=a=>{var b=new XMLHttpRequest;
b.open("GET",a,!1);b.send(null);return b.responseText},k&&(ja=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),ia=(a,b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};var ma=g.print||console.log.bind(console),u=g.printErr||console.warn.bind(console);Object.assign(g,aa);aa=null;g.arguments&&(ba=g.arguments);
g.thisProgram&&(ca=g.thisProgram);g.quit&&(da=g.quit);var x;g.wasmBinary&&(x=g.wasmBinary);var noExitRuntime=g.noExitRuntime||!0;"object"!=typeof WebAssembly&&na("no native wasm support detected");var oa,pa=!1,qa="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;
function ra(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.buffer&&qa)return qa.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var h=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|h);else{var f=a[b++]&63;e=224==(e&240)?(e&15)<<12|h<<6|f:(e&7)<<18|h<<12|f<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function y(a,b){return a?ra(z,a,b):""}
function A(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var h=0;h<a.length;++h){var f=a.charCodeAt(h);if(55296<=f&&57343>=f){var n=a.charCodeAt(++h);f=65536+((f&1023)<<10)|n&1023}if(127>=f){if(c>=d)break;b[c++]=f}else{if(2047>=f){if(c+1>=d)break;b[c++]=192|f>>6}else{if(65535>=f){if(c+2>=d)break;b[c++]=224|f>>12}else{if(c+3>=d)break;b[c++]=240|f>>18;b[c++]=128|f>>12&63}b[c++]=128|f>>6&63}b[c++]=128|f&63}}b[c]=0;return c-e}
function sa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);127>=d?b++:2047>=d?b+=2:55296<=d&&57343>=d?(b+=4,++c):b+=3}return b}var ta,B,z,ua,va,C,D,E,F;function wa(){var a=oa.buffer;ta=a;g.HEAP8=B=new Int8Array(a);g.HEAP16=ua=new Int16Array(a);g.HEAP32=C=new Int32Array(a);g.HEAPU8=z=new Uint8Array(a);g.HEAPU16=va=new Uint16Array(a);g.HEAPU32=D=new Uint32Array(a);g.HEAPF32=E=new Float32Array(a);g.HEAPF64=F=new Float64Array(a)}var xa,ya=[],za=[],Aa=[],Ba=[],Ca=[];
function Da(){var a=g.preRun.shift();ya.unshift(a)}var G=0,Ea=null,H=null;function na(a){if(g.onAbort)g.onAbort(a);a="Aborted("+a+")";u(a);pa=!0;throw new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");}function Fa(){return I.startsWith("data:application/octet-stream;base64,")}var I;I="ozz-anim-sapp.wasm";if(!Fa()){var Ga=I;I=g.locateFile?g.locateFile(Ga,m):m+Ga}
function Ha(){var a=I;try{if(a==I&&x)return new Uint8Array(x);if(ja)return ja(a);throw"both async and sync fetching of the wasm failed";}catch(b){na(b)}}
function Ia(){if(!x&&(ea||k)){if("function"==typeof fetch&&!I.startsWith("file://"))return fetch(I,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+I+"'";return a.arrayBuffer()}).catch(function(){return Ha()});if(ia)return new Promise(function(a,b){ia(I,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ha()})}
function la(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}function Ja(a){for(;0<a.length;)a.shift()(g)}function Ka(a){var b=La();a();Ma(b)}var Na=0;function Oa(){for(var a=J.length-1;0<=a;--a)Pa(a);J=[];Qa=[]}var Qa=[];function Ra(){if(Na&&Sa.pc)for(var a=0;a<Qa.length;++a){var b=Qa[a];Qa.splice(a,1);--a;b.jd.apply(null,b.Xc)}}var J=[];function Pa(a){var b=J[a];b.target.removeEventListener(b.dc,b.Pc,b.fc);J.splice(a,1)}
function K(a){function b(d){++Na;Sa=a;Ra();a.ic(d);Ra();--Na}if(a.hc)a.Pc=b,a.target.addEventListener(a.dc,b,a.fc),J.push(a),Ta||(Ba.push(Oa),Ta=!0);else for(var c=0;c<J.length;++c)J[c].target==a.target&&J[c].dc==a.dc&&Pa(c--)}function Ua(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}var Ta,Sa,Va,Wa,Xa,Ya,Za,$a,ab,bb=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0];
function L(a){a=2<a?y(a):a;return bb[a]||("undefined"!=typeof document?document.querySelector(a):void 0)}function cb(a){return 0>bb.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}var db=[];function M(a){var b=db[a];b||(a>=db.length&&(db.length=a+1),db[a]=b=xa.get(a));return b}function eb(a,b,c,d,e,h){Va||(Va=O(256));a={target:L(a),dc:h,hc:d,ic:function(f){f=f||event;var n=f.target.id?f.target.id:"",p=Va;A(Ua(f.target),z,p+0,128);A(n,z,p+128,128);M(d)(e,p,b)&&f.preventDefault()},fc:c};K(a)}
function fb(a,b,c,d,e,h){Wa||(Wa=O(176));a={target:L(a),pc:!0,dc:h,hc:d,ic:function(f){var n=Wa;F[n>>3]=f.timeStamp;var p=n>>2;C[p+2]=f.location;C[p+3]=f.ctrlKey;C[p+4]=f.shiftKey;C[p+5]=f.altKey;C[p+6]=f.metaKey;C[p+7]=f.repeat;C[p+8]=f.charCode;C[p+9]=f.keyCode;C[p+10]=f.which;A(f.key||"",z,n+44,32);A(f.code||"",z,n+76,32);A(f.char||"",z,n+108,32);A(f.locale||"",z,n+140,32);M(d)(e,n,b)&&f.preventDefault()},fc:c};K(a)}
function gb(a,b,c){F[a>>3]=b.timeStamp;a>>=2;C[a+2]=b.screenX;C[a+3]=b.screenY;C[a+4]=b.clientX;C[a+5]=b.clientY;C[a+6]=b.ctrlKey;C[a+7]=b.shiftKey;C[a+8]=b.altKey;C[a+9]=b.metaKey;ua[2*a+20]=b.button;ua[2*a+21]=b.buttons;C[a+11]=b.movementX;C[a+12]=b.movementY;c=cb(c);C[a+13]=b.clientX-c.left;C[a+14]=b.clientY-c.top}
function P(a,b,c,d,e,h){Xa||(Xa=O(72));a=L(a);K({target:a,pc:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,dc:h,hc:d,ic:function(f){f=f||event;gb(Xa,f,a);M(d)(e,Xa,b)&&f.preventDefault()},fc:c})}function hb(a,b,c,d,e){Ya||(Ya=O(260));K({target:a,dc:e,hc:d,ic:function(h){h=h||event;var f=Ya,n=document.pointerLockElement||document.nc||document.Cc||document.Ac;C[f>>2]=!!n;var p=n&&n.id?n.id:"";A(Ua(n),z,f+4,128);A(p,z,f+132,128);M(d)(20,f,b)&&h.preventDefault()},fc:c})}
function ib(a,b,c,d,e){K({target:a,dc:e,hc:d,ic:function(h){h=h||event;M(d)(38,0,b)&&h.preventDefault()},fc:c})}
function jb(a,b,c,d){Za||(Za=O(36));a=L(a);K({target:a,dc:"resize",hc:d,ic:function(e){e=e||event;if(e.target==a){var h=document.body;if(h){var f=Za;C[f>>2]=e.detail;C[f+4>>2]=h.clientWidth;C[f+8>>2]=h.clientHeight;C[f+12>>2]=innerWidth;C[f+16>>2]=innerHeight;C[f+20>>2]=outerWidth;C[f+24>>2]=outerHeight;C[f+28>>2]=pageXOffset;C[f+32>>2]=pageYOffset;M(d)(10,f,b)&&e.preventDefault()}}},fc:c})}
function kb(a,b,c,d,e,h){$a||($a=O(1696));a=L(a);K({target:a,pc:"touchstart"==h||"touchend"==h,dc:h,hc:d,ic:function(f){for(var n,p={},q=f.touches,r=0;r<q.length;++r)n=q[r],n.Dc=n.Fc=0,p[n.identifier]=n;for(r=0;r<f.changedTouches.length;++r)n=f.changedTouches[r],n.Dc=1,p[n.identifier]=n;for(r=0;r<f.targetTouches.length;++r)p[f.targetTouches[r].identifier].Fc=1;q=$a;F[q>>3]=f.timeStamp;var v=q>>2;C[v+3]=f.ctrlKey;C[v+4]=f.shiftKey;C[v+5]=f.altKey;C[v+6]=f.metaKey;v+=7;var N=cb(a),l=0;for(r in p)if(n=
p[r],C[v]=n.identifier,C[v+1]=n.screenX,C[v+2]=n.screenY,C[v+3]=n.clientX,C[v+4]=n.clientY,C[v+5]=n.pageX,C[v+6]=n.pageY,C[v+7]=n.Dc,C[v+8]=n.Fc,C[v+9]=n.clientX-N.left,C[v+10]=n.clientY-N.top,v+=13,31<++l)break;C[q+8>>2]=l;M(d)(e,q,b)&&f.preventDefault()},fc:c})}function lb(a,b,c,d,e,h){a={target:L(a),dc:h,hc:d,ic:function(f){f=f||event;M(d)(e,0,b)&&f.preventDefault()},fc:c};K(a)}
function mb(a,b,c,d){ab||(ab=O(104));K({target:a,pc:!0,dc:"wheel",hc:d,ic:function(e){e=e||event;var h=ab;gb(h,e,a);F[h+72>>3]=e.deltaX;F[h+80>>3]=e.deltaY;F[h+88>>3]=e.deltaZ;C[h+96>>2]=e.deltaMode;M(d)(9,h,b)&&e.preventDefault()},fc:c})}
function nb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,h){b.drawArraysInstancedANGLE(c,d,e,h)},a.drawElementsInstanced=function(c,d,e,h,f){b.drawElementsInstancedANGLE(c,d,e,h,f)})}
function ob(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function pb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function qb(a){a.Zc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function rb(a){a.ad=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function sb(a){a.cd=a.getExtension("WEBGL_multi_draw")}var tb=1,ub=[],Q=[],vb=[],wb=[],xb=[],R=[],yb=[],zb=[],Ab={},Bb={};function T(a){Cb||(Cb=a)}function Db(a){for(var b=tb++,c=a.length;c<b;c++)a[c]=null;return b}
function Eb(a,b){a.nc||(a.nc=a.getContext,a.getContext=function(d,e){e=a.nc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.Ec?a.getContext("webgl2",b):a.getContext("webgl",b);return c?Fb(c,b):0}function Fb(a,b){var c=Db(zb),d={$c:c,attributes:b,version:b.Ec,vc:a};a.canvas&&(a.canvas.Wc=d);zb[c]=d;("undefined"==typeof b.Bc||b.Bc)&&Gb(d);return c}
function Gb(a){a||(a=U);if(!a.Rc){a.Rc=!0;var b=a.vc;nb(b);ob(b);pb(b);qb(b);rb(b);2<=a.version&&(b.zc=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.zc)b.zc=b.getExtension("EXT_disjoint_timer_query");sb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var Cb,U,Hb=["default","low-power","high-performance"],Ib={};
function Jb(){if(!Lb){var a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:ca||"./this.program"},b;for(b in Ib)void 0===Ib[b]?delete a[b]:a[b]=Ib[b];var c=[];for(b in a)c.push(b+"="+a[b]);Lb=c}return Lb}var Lb,Mb=[null,[],[]];function Nb(a,b,c,d){for(var e=0;e<a;e++){var h=V[c](),f=h&&Db(d);h?(h.name=f,d[f]=h):T(1282);C[b+4*e>>2]=f}}
function Ob(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=V.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>U.version){T(1282);return}c=2*(V.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>U.version){T(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=V.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":T(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:T(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)C[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){T(1280);u("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:T(1280);u("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}C[b>>2]=c}else T(1281)}
function W(a){var b=sa(a)+1,c=O(b);A(a,z,c,b);return c}function Pb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function Qb(a){a-=5120;return 0==a?B:1==a?z:2==a?ua:4==a?C:6==a?E:5==a||28922==a||28520==a||30779==a||30782==a?D:va}function X(a){var b=V.Oc;if(b){var c=b.oc[a];"number"==typeof c&&(b.oc[a]=c=V.getUniformLocation(b,b.Mc[a]+(0<c?"["+c+"]":"")));return c}T(1282)}var Y=[],Rb=[];function Sb(a){return 0===a%4&&(0!==a%100||0===a%400)}
var Tb=[31,29,31,30,31,30,31,31,30,31,30,31],Ub=[31,28,31,30,31,30,31,31,30,31,30,31];function Vb(a){var b=Array(sa(a)+1);A(a,b,0,b.length);return b}
function Wb(a,b,c,d){function e(l,t,w){for(l="number"==typeof l?l.toString():l||"";l.length<t;)l=w[0]+l;return l}function h(l,t){return e(l,t,"0")}function f(l,t){function w(Kb){return 0>Kb?-1:0<Kb?1:0}var S;0===(S=w(l.getFullYear()-t.getFullYear()))&&0===(S=w(l.getMonth()-t.getMonth()))&&(S=w(l.getDate()-t.getDate()));return S}function n(l){switch(l.getDay()){case 0:return new Date(l.getFullYear()-1,11,29);case 1:return l;case 2:return new Date(l.getFullYear(),0,3);case 3:return new Date(l.getFullYear(),
0,2);case 4:return new Date(l.getFullYear(),0,1);case 5:return new Date(l.getFullYear()-1,11,31);case 6:return new Date(l.getFullYear()-1,11,30)}}function p(l){var t=l.kc;for(l=new Date((new Date(l.lc+1900,0,1)).getTime());0<t;){var w=l.getMonth(),S=(Sb(l.getFullYear())?Tb:Ub)[w];if(t>S-l.getDate())t-=S-l.getDate()+1,l.setDate(1),11>w?l.setMonth(w+1):(l.setMonth(0),l.setFullYear(l.getFullYear()+1));else{l.setDate(l.getDate()+t);break}}w=new Date(l.getFullYear()+1,0,4);t=n(new Date(l.getFullYear(),
0,4));w=n(w);return 0>=f(t,l)?0>=f(w,l)?l.getFullYear()+1:l.getFullYear():l.getFullYear()-1}var q=C[d+40>>2];d={Uc:C[d>>2],Tc:C[d+4>>2],tc:C[d+8>>2],wc:C[d+12>>2],uc:C[d+16>>2],lc:C[d+20>>2],ec:C[d+24>>2],kc:C[d+28>>2],kd:C[d+32>>2],Sc:C[d+36>>2],Vc:q?y(q):""};c=y(c);q={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d",
"%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var r in q)c=c.replace(new RegExp(r,"g"),q[r]);var v="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),N="January February March April May June July August September October November December".split(" ");q={"%a":function(l){return v[l.ec].substring(0,3)},"%A":function(l){return v[l.ec]},"%b":function(l){return N[l.uc].substring(0,3)},"%B":function(l){return N[l.uc]},
"%C":function(l){return h((l.lc+1900)/100|0,2)},"%d":function(l){return h(l.wc,2)},"%e":function(l){return e(l.wc,2," ")},"%g":function(l){return p(l).toString().substring(2)},"%G":function(l){return p(l)},"%H":function(l){return h(l.tc,2)},"%I":function(l){l=l.tc;0==l?l=12:12<l&&(l-=12);return h(l,2)},"%j":function(l){for(var t=0,w=0;w<=l.uc-1;t+=(Sb(l.lc+1900)?Tb:Ub)[w++]);return h(l.wc+t,3)},"%m":function(l){return h(l.uc+1,2)},"%M":function(l){return h(l.Tc,2)},"%n":function(){return"\n"},"%p":function(l){return 0<=
l.tc&&12>l.tc?"AM":"PM"},"%S":function(l){return h(l.Uc,2)},"%t":function(){return"\t"},"%u":function(l){return l.ec||7},"%U":function(l){return h(Math.floor((l.kc+7-l.ec)/7),2)},"%V":function(l){var t=Math.floor((l.kc+7-(l.ec+6)%7)/7);2>=(l.ec+371-l.kc-2)%7&&t++;if(t)53==t&&(w=(l.ec+371-l.kc)%7,4==w||3==w&&Sb(l.lc)||(t=1));else{t=52;var w=(l.ec+7-l.kc-1)%7;(4==w||5==w&&Sb(l.lc%400-1))&&t++}return h(t,2)},"%w":function(l){return l.ec},"%W":function(l){return h(Math.floor((l.kc+7-(l.ec+6)%7)/7),2)},
"%y":function(l){return(l.lc+1900).toString().substring(2)},"%Y":function(l){return l.lc+1900},"%z":function(l){l=l.Sc;var t=0<=l;l=Math.abs(l)/60;return(t?"+":"-")+String("0000"+(l/60*100+l%60)).slice(-4)},"%Z":function(l){return l.Vc},"%%":function(){return"%"}};c=c.replace(/%%/g,"\x00\x00");for(r in q)c.includes(r)&&(c=c.replace(new RegExp(r,"g"),q[r](d)));c=c.replace(/\0\0/g,"%");r=Vb(c);if(r.length>b)return 0;B.set(r,a);return r.length-1}
function Xb(a){if(!noExitRuntime){if(g.onExit)g.onExit(a);pa=!0}da(a,new la(a))}function Yb(a){var b=sa(a)+1,c=Zb(b);A(a,B,c,b);return c}for(var V,$b=new Float32Array(288),Z=0;288>Z;++Z)Y[Z]=$b.subarray(0,Z+1);var ac=new Int32Array(288);for(Z=0;288>Z;++Z)Rb[Z]=ac.subarray(0,Z+1);
var lc={na:function(){return 0},lb:function(){return 0},mb:function(){},C:function(){na("")},T:function(){return"number"==typeof devicePixelRatio&&devicePixelRatio||1},V:function(a,b,c){a=L(a);if(!a)return-4;a=cb(a);F[b>>3]=a.width;F[c>>3]=a.height;return 0},ib:function(a,b,c){z.copyWithin(a,b,b+c)},Ha:function(a,b){function c(d){M(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},hb:function(a){var b=z.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);
d=Math.min(d,a+100663296);var e=Math;d=Math.max(a,d);e=e.min.call(e,2147483648,d+(65536-d%65536)%65536);a:{try{oa.grow(e-ta.byteLength+65535>>>16);wa();var h=1;break a}catch(f){}h=void 0}if(h)return!0}return!1},Y:function(a,b,c,d){eb(a,b,c,d,12,"blur");return 0},Q:function(a,b,c){a=L(a);if(!a)return-4;a.width=b;a.height=c;return 0},Z:function(a,b,c,d){eb(a,b,c,d,13,"focus");return 0},ga:function(a,b,c,d){fb(a,b,c,d,2,"keydown");return 0},ea:function(a,b,c,d){fb(a,b,c,d,1,"keypress");return 0},fa:function(a,
b,c,d){fb(a,b,c,d,3,"keyup");return 0},pa:function(a,b,c,d){P(a,b,c,d,5,"mousedown");return 0},ja:function(a,b,c,d){P(a,b,c,d,33,"mouseenter");return 0},ia:function(a,b,c,d){P(a,b,c,d,34,"mouseleave");return 0},ka:function(a,b,c,d){P(a,b,c,d,8,"mousemove");return 0},la:function(a,b,c,d){P(a,b,c,d,6,"mouseup");return 0},$:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.nc||document.body.Cc||document.body.Ac))return-1;a=L(a);if(!a)return-4;hb(a,b,c,
d,"pointerlockchange");hb(a,b,c,d,"mozpointerlockchange");hb(a,b,c,d,"webkitpointerlockchange");hb(a,b,c,d,"mspointerlockchange");return 0},_:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.nc||document.body.Cc||document.body.Ac))return-1;a=L(a);if(!a)return-4;ib(a,b,c,d,"pointerlockerror");ib(a,b,c,d,"mozpointerlockerror");ib(a,b,c,d,"webkitpointerlockerror");ib(a,b,c,d,"mspointerlockerror");return 0},Qa:function(a,b,c,d){jb(a,b,c,d);return 0},aa:function(a,b,c,
d){kb(a,b,c,d,25,"touchcancel");return 0},ba:function(a,b,c,d){kb(a,b,c,d,23,"touchend");return 0},ca:function(a,b,c,d){kb(a,b,c,d,24,"touchmove");return 0},da:function(a,b,c,d){kb(a,b,c,d,22,"touchstart");return 0},X:function(a,b,c,d){lb(a,b,c,d,31,"webglcontextlost");return 0},W:function(a,b,c,d){lb(a,b,c,d,32,"webglcontextrestored");return 0},ha:function(a,b,c,d){a=L(a);return"undefined"!=typeof a.onwheel?(mb(a,b,c,d),0):-1},ua:function(a,b){b>>=2;b={alpha:!!C[b],depth:!!C[b+1],stencil:!!C[b+2],
antialias:!!C[b+3],premultipliedAlpha:!!C[b+4],preserveDrawingBuffer:!!C[b+5],powerPreference:Hb[C[b+6]],failIfMajorPerformanceCaveat:!!C[b+7],Ec:C[b+8],bd:C[b+9],Bc:C[b+10],Qc:C[b+11],dd:C[b+12],ed:C[b+13]};a=L(a);return!a||b.Qc?0:Eb(a,b)},xb:function(a,b){a=zb[a];b=y(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&nb(V);"OES_vertex_array_object"==b&&ob(V);"WEBGL_draw_buffers"==b&&pb(V);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&qb(V);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==
b&&rb(V);"WEBGL_multi_draw"==b&&sb(V);return!!a.vc.getExtension(b)},Ba:function(a){a>>=2;for(var b=0;14>b;++b)C[a+b]=0;C[a]=C[a+1]=C[a+3]=C[a+4]=C[a+8]=C[a+10]=1},Gb:function(a){U=zb[a];g.Yc=V=U&&U.vc;return!a||V?0:-5},fb:function(a,b){var c=0;Jb().forEach(function(d,e){var h=b+c;e=D[a+4*e>>2]=h;for(h=0;h<d.length;++h)B[e++>>0]=d.charCodeAt(h);B[e>>0]=0;c+=d.length+1});return 0},gb:function(a,b){var c=Jb();D[a>>2]=c.length;var d=0;c.forEach(function(e){d+=e.length+1});D[b>>2]=d;return 0},ma:function(){return 52},
kb:function(){return 52},db:function(){return 70},jb:function(a,b,c,d){for(var e=0,h=0;h<c;h++){var f=D[b>>2],n=D[b+4>>2];b+=8;for(var p=0;p<n;p++){var q=z[f+p],r=Mb[a];0===q||10===q?((1===a?ma:u)(ra(r,0)),r.length=0):r.push(q)}e+=n}D[d>>2]=e;return 0},b:function(a){V.activeTexture(a)},F:function(a,b){V.attachShader(Q[a],R[b])},c:function(a,b){35051==a?V.yc=b:35052==a&&(V.mc=b);V.bindBuffer(a,ub[b])},h:function(a,b){V.bindFramebuffer(a,vb[b])},I:function(a,b){V.bindRenderbuffer(a,wb[b])},a:function(a,
b){V.bindTexture(a,xb[b])},S:function(a){V.bindVertexArray(yb[a])},N:function(a,b,c,d){V.blendColor(a,b,c,d)},O:function(a,b){V.blendEquationSeparate(a,b)},P:function(a,b,c,d){V.blendFuncSeparate(a,b,c,d)},s:function(a,b,c,d,e,h,f,n,p,q){V.blitFramebuffer(a,b,c,d,e,h,f,n,p,q)},Ia:function(a,b,c,d){2<=U.version?c&&b?V.bufferData(a,z,d,c,b):V.bufferData(a,b,d):V.bufferData(a,c?z.subarray(c,c+b):b,d)},o:function(a,b,c,d){2<=U.version?c&&V.bufferSubData(a,b,z,d,c):V.bufferSubData(a,b,z.subarray(d,d+c))},
Eb:function(a){V.clear(a)},sa:function(a,b,c,d){V.clearColor(a,b,c,d)},B:function(a){V.clearDepth(a)},Fb:function(a){V.clearStencil(a)},j:function(a,b,c,d){V.colorMask(!!a,!!b,!!c,!!d)},Jb:function(a){V.compileShader(R[a])},Ea:function(a,b,c,d,e,h,f,n){2<=U.version?V.mc||!f?V.compressedTexImage2D(a,b,c,d,e,h,f,n):V.compressedTexImage2D(a,b,c,d,e,h,z,n,f):V.compressedTexImage2D(a,b,c,d,e,h,n?z.subarray(n,n+f):null)},Ca:function(a,b,c,d,e,h,f,n,p){V.mc?V.compressedTexImage3D(a,b,c,d,e,h,f,n,p):V.compressedTexImage3D(a,
b,c,d,e,h,f,z,p,n)},za:function(){var a=Db(Q),b=V.createProgram();b.name=a;b.sc=b.qc=b.rc=0;b.xc=1;Q[a]=b;return a},wa:function(a){var b=Db(R);R[b]=V.createShader(a);return b},K:function(a){V.cullFace(a)},Pa:function(a,b){for(var c=0;c<a;c++){var d=C[b+4*c>>2],e=ub[d];e&&(V.deleteBuffer(e),e.name=0,ub[d]=null,d==V.yc&&(V.yc=0),d==V.mc&&(V.mc=0))}},i:function(a,b){for(var c=0;c<a;++c){var d=C[b+4*c>>2],e=vb[d];e&&(V.deleteFramebuffer(e),e.name=0,vb[d]=null)}},y:function(a){if(a){var b=Q[a];b?(V.deleteProgram(b),
b.name=0,Q[a]=null):T(1281)}},U:function(a,b){for(var c=0;c<a;c++){var d=C[b+4*c>>2],e=wb[d];e&&(V.deleteRenderbuffer(e),e.name=0,wb[d]=null)}},u:function(a){if(a){var b=R[a];b?(V.deleteShader(b),R[a]=null):T(1281)}},Oa:function(a,b){for(var c=0;c<a;c++){var d=C[b+4*c>>2],e=xb[d];e&&(V.deleteTexture(e),e.name=0,xb[d]=null)}},Na:function(a,b){for(var c=0;c<a;c++){var d=C[b+4*c>>2];V.deleteVertexArray(yb[d]);yb[d]=null}},x:function(a){V.depthFunc(a)},w:function(a){V.depthMask(!!a)},e:function(a){V.disable(a)},
R:function(a){V.disableVertexAttribArray(a)},nb:function(a,b,c){V.drawArrays(a,b,c)},ob:function(a,b,c,d){V.drawArraysInstanced(a,b,c,d)},pb:function(a,b,c,d){V.drawElements(a,b,c,d)},qb:function(a,b,c,d,e){V.drawElementsInstanced(a,b,c,d,e)},g:function(a){V.enable(a)},Bb:function(a){V.enableVertexAttribArray(a)},L:function(a){V.frontFace(a)},Ja:function(a,b){Nb(a,b,"createBuffer",ub)},J:function(a,b){Nb(a,b,"createRenderbuffer",wb)},Fa:function(a,b){Nb(a,b,"createTexture",xb)},Ma:function(a,b){Nb(a,
b,"createVertexArray",yb)},Hb:function(a,b){return V.getAttribLocation(Q[a],y(b))},d:function(a,b){Ob(a,b)},xa:function(a,b,c,d){a=V.getProgramInfoLog(Q[a]);null===a&&(a="(unknown error)");b=0<b&&d?A(a,z,d,b):0;c&&(C[c>>2]=b)},E:function(a,b,c){if(c)if(a>=tb)T(1281);else if(a=Q[a],35716==b)a=V.getProgramInfoLog(a),null===a&&(a="(unknown error)"),C[c>>2]=a.length+1;else if(35719==b){if(!a.sc)for(b=0;b<V.getProgramParameter(a,35718);++b)a.sc=Math.max(a.sc,V.getActiveUniform(a,b).name.length+1);C[c>>
2]=a.sc}else if(35722==b){if(!a.qc)for(b=0;b<V.getProgramParameter(a,35721);++b)a.qc=Math.max(a.qc,V.getActiveAttrib(a,b).name.length+1);C[c>>2]=a.qc}else if(35381==b){if(!a.rc)for(b=0;b<V.getProgramParameter(a,35382);++b)a.rc=Math.max(a.rc,V.getActiveUniformBlockName(a,b).length+1);C[c>>2]=a.rc}else C[c>>2]=V.getProgramParameter(a,b);else T(1281)},Ib:function(a,b,c,d){a=V.getShaderInfoLog(R[a]);null===a&&(a="(unknown error)");b=0<b&&d?A(a,z,d,b):0;c&&(C[c>>2]=b)},ta:function(a,b,c){c?35716==b?(a=
V.getShaderInfoLog(R[a]),null===a&&(a="(unknown error)"),C[c>>2]=a?a.length+1:0):35720==b?(a=V.getShaderSource(R[a]),C[c>>2]=a?a.length+1:0):C[c>>2]=V.getShaderParameter(R[a],b):T(1281)},Sa:function(a){var b=Ab[a];if(!b){switch(a){case 7939:b=V.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=W(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=V.getParameter(a))||T(1280);b=b&&W(b);break;case 7938:b=V.getParameter(7938);b=2<=U.version?"OpenGL ES 3.0 ("+b+")":
"OpenGL ES 2.0 ("+b+")";b=W(b);break;case 35724:b=V.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=W(b);break;default:T(1280)}Ab[a]=b}return b},Ra:function(a,b){if(2>U.version)return T(1282),0;var c=Bb[a];if(c)return 0>b||b>=c.length?(T(1281),0):c[b];switch(a){case 7939:return c=V.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return W(d)}),
c=Bb[a]=c,0>b||b>=c.length?(T(1281),0):c[b];default:return T(1280),0}},n:function(a,b){b=y(b);if(a=Q[a]){var c=a,d=c.oc,e=c.Nc,h;if(!d)for(c.oc=d={},c.Mc={},h=0;h<V.getProgramParameter(c,35718);++h){var f=V.getActiveUniform(c,h);var n=f.name;f=f.size;var p=Pb(n);p=0<p?n.slice(0,p):n;var q=c.xc;c.xc+=f;e[p]=[f,q];for(n=0;n<f;++n)d[q]=n,c.Mc[q++]=p}c=a.oc;d=0;e=b;h=Pb(b);0<h&&(d=parseInt(b.slice(h+1))>>>0,e=b.slice(0,h));if((e=a.Nc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||V.getUniformLocation(a,b)))return d}else T(1281);
return-1},ya:function(a){a=Q[a];V.linkProgram(a);a.oc=0;a.Nc={}},M:function(a,b){V.polygonOffset(a,b)},t:function(a){V.readBuffer(a)},Ga:function(a,b,c,d){V.renderbufferStorage(a,b,c,d)},H:function(a,b,c,d,e){V.renderbufferStorageMultisample(a,b,c,d,e)},l:function(a,b,c,d){V.scissor(a,b,c,d)},Kb:function(a,b,c,d){for(var e="",h=0;h<b;++h){var f=d?C[d+4*h>>2]:-1;e+=y(C[c+4*h>>2],0>f?void 0:f)}V.shaderSource(R[a],e)},La:function(a,b,c){V.stencilFunc(a,b,c)},ra:function(a,b,c,d){V.stencilFuncSeparate(a,
b,c,d)},v:function(a){V.stencilMask(a)},Ka:function(a,b,c){V.stencilOp(a,b,c)},qa:function(a,b,c,d){V.stencilOpSeparate(a,b,c,d)},Da:function(a,b,c,d,e,h,f,n,p){if(2<=U.version)if(V.mc)V.texImage2D(a,b,c,d,e,h,f,n,p);else if(p){var q=Qb(n);V.texImage2D(a,b,c,d,e,h,f,n,q,p>>31-Math.clz32(q.BYTES_PER_ELEMENT))}else V.texImage2D(a,b,c,d,e,h,f,n,null);else{q=V;var r=q.texImage2D;if(p){var v=Qb(n),N=31-Math.clz32(v.BYTES_PER_ELEMENT);p=v.subarray(p>>N,p+e*(d*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,
29846:3,29847:4}[f-6402]||1)*(1<<N)+4-1&-4)>>N)}else p=null;r.call(q,a,b,c,d,e,h,f,n,p)}},Aa:function(a,b,c,d,e,h,f,n,p,q){if(V.mc)V.texImage3D(a,b,c,d,e,h,f,n,p,q);else if(q){var r=Qb(p);V.texImage3D(a,b,c,d,e,h,f,n,p,r,q>>31-Math.clz32(r.BYTES_PER_ELEMENT))}else V.texImage3D(a,b,c,d,e,h,f,n,p,null)},G:function(a,b,c){V.texParameterf(a,b,c)},f:function(a,b,c){V.texParameteri(a,b,c)},Ab:function(a,b,c){if(2<=U.version)b&&V.uniform1fv(X(a),E,c>>2,b);else{if(288>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=
E[c+4*e>>2];else d=E.subarray(c>>2,c+4*b>>2);V.uniform1fv(X(a),d)}},D:function(a,b){V.uniform1i(X(a),b)},vb:function(a,b,c){if(2<=U.version)b&&V.uniform1iv(X(a),C,c>>2,b);else{if(288>=b)for(var d=Rb[b-1],e=0;e<b;++e)d[e]=C[c+4*e>>2];else d=C.subarray(c>>2,c+4*b>>2);V.uniform1iv(X(a),d)}},zb:function(a,b,c){if(2<=U.version)b&&V.uniform2fv(X(a),E,c>>2,2*b);else{if(144>=b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=E[c+4*e>>2],d[e+1]=E[c+(4*e+4)>>2];else d=E.subarray(c>>2,c+8*b>>2);V.uniform2fv(X(a),d)}},
ub:function(a,b,c){if(2<=U.version)b&&V.uniform2iv(X(a),C,c>>2,2*b);else{if(144>=b)for(var d=Rb[2*b-1],e=0;e<2*b;e+=2)d[e]=C[c+4*e>>2],d[e+1]=C[c+(4*e+4)>>2];else d=C.subarray(c>>2,c+8*b>>2);V.uniform2iv(X(a),d)}},yb:function(a,b,c){if(2<=U.version)b&&V.uniform3fv(X(a),E,c>>2,3*b);else{if(96>=b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=E[c+4*e>>2],d[e+1]=E[c+(4*e+4)>>2],d[e+2]=E[c+(4*e+8)>>2];else d=E.subarray(c>>2,c+12*b>>2);V.uniform3fv(X(a),d)}},tb:function(a,b,c){if(2<=U.version)b&&V.uniform3iv(X(a),
C,c>>2,3*b);else{if(96>=b)for(var d=Rb[3*b-1],e=0;e<3*b;e+=3)d[e]=C[c+4*e>>2],d[e+1]=C[c+(4*e+4)>>2],d[e+2]=C[c+(4*e+8)>>2];else d=C.subarray(c>>2,c+12*b>>2);V.uniform3iv(X(a),d)}},wb:function(a,b,c){if(2<=U.version)b&&V.uniform4fv(X(a),E,c>>2,4*b);else{if(72>=b){var d=Y[4*b-1],e=E;c>>=2;for(var h=0;h<4*b;h+=4){var f=c+h;d[h]=e[f];d[h+1]=e[f+1];d[h+2]=e[f+2];d[h+3]=e[f+3]}}else d=E.subarray(c>>2,c+16*b>>2);V.uniform4fv(X(a),d)}},sb:function(a,b,c){if(2<=U.version)b&&V.uniform4iv(X(a),C,c>>2,4*b);
else{if(72>=b)for(var d=Rb[4*b-1],e=0;e<4*b;e+=4)d[e]=C[c+4*e>>2],d[e+1]=C[c+(4*e+4)>>2],d[e+2]=C[c+(4*e+8)>>2],d[e+3]=C[c+(4*e+12)>>2];else d=C.subarray(c>>2,c+16*b>>2);V.uniform4iv(X(a),d)}},rb:function(a,b,c,d){if(2<=U.version)b&&V.uniformMatrix4fv(X(a),!!c,E,d>>2,16*b);else{if(18>=b){var e=Y[16*b-1],h=E;d>>=2;for(var f=0;f<16*b;f+=16){var n=d+f;e[f]=h[n];e[f+1]=h[n+1];e[f+2]=h[n+2];e[f+3]=h[n+3];e[f+4]=h[n+4];e[f+5]=h[n+5];e[f+6]=h[n+6];e[f+7]=h[n+7];e[f+8]=h[n+8];e[f+9]=h[n+9];e[f+10]=h[n+10];
e[f+11]=h[n+11];e[f+12]=h[n+12];e[f+13]=h[n+13];e[f+14]=h[n+14];e[f+15]=h[n+15]}}else e=E.subarray(d>>2,d+64*b>>2);V.uniformMatrix4fv(X(a),!!c,e)}},k:function(a){a=Q[a];V.useProgram(a);V.Oc=a},Cb:function(a,b){V.vertexAttribDivisor(a,b)},Db:function(a,b,c,d,e,h){V.vertexAttribPointer(a,b,c,!!d,e,h)},m:function(a,b,c,d){V.viewport(a,b,c,d)},bb:function(){g.Gc=a=>{0!=bc()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",g.Gc)},ab:function(){g.Lc=a=>{const b=a.clipboardData.getData("text");
Ka(()=>{const c=Yb(b);cc(c)})};window.addEventListener("paste",g.Lc)},$a:function(a){g.gd=[];a=y(a);a=document.getElementById(a);g.Hc=b=>{b.stopPropagation();b.preventDefault()};g.Ic=b=>{b.stopPropagation();b.preventDefault()};g.Jc=b=>{b.stopPropagation();b.preventDefault()};g.Kc=b=>{b.stopPropagation();b.preventDefault();const c=b.dataTransfer.files;g.hd=c;dc(c.length);for(let d=0;d<c.length;d++)Ka(()=>{const e=Yb(c[d].name);ec(d,e)});fc(b.clientX,b.clientY)};a.addEventListener("dragenter",g.Hc,
!1);a.addEventListener("dragleave",g.Ic,!1);a.addEventListener("dragover",g.Jc,!1);a.addEventListener("drop",g.Kc,!1)},Ua:function(){const a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},r:function(){const a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){gc()});document.body.append(a)},Wa:function(){document.exitPointerLock&&document.exitPointerLock()},q:function(){document.getElementById("_sokol_app_input_element").focus()},
cb:function(a){a=y(a);g.jc=document.getElementById(a);g.jc||console.log("sokol_app.h: invalid target:"+a);g.jc.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},_a:function(){window.removeEventListener("beforeunload",g.Gc)},Za:function(){window.removeEventListener("paste",g.Lc)},Ya:function(a){a=y(a);a=document.getElementById(a);a.removeEventListener("dragenter",g.Hc);a.removeEventListener("dragleave",g.Ic);a.removeEventListener("dragover",g.Jc);a.removeEventListener("drop",
g.Kc)},z:function(){g.jc&&g.jc.requestPointerLock&&g.jc.requestPointerLock()},Xa:function(a,b){if(g.jc){if(0===b)a="none";else switch(a){case 0:a="auto";break;case 1:a="default";break;case 2:a="text";break;case 3:a="crosshair";break;case 4:a="pointer";break;case 5:a="ew-resize";break;case 6:a="ns-resize";break;case 7:a="nwse-resize";break;case 8:a="nesw-resize";break;case 9:a="all-scroll";break;case 10:a="not-allowed";break;default:a="auto"}g.jc.style.cursor=a}},Ta:function(a,b,c){const d=document.createElement("canvas");
d.width=a;d.height=b;const e=d.getContext("2d"),h=e.createImageData(a,b);h.data.set(z.subarray(c,c+a*b*4));e.putImageData(h,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},p:function(){document.getElementById("_sokol_app_input_element").blur()},Va:function(a){a=y(a);const b=document.createElement("textarea");b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize",
"off");b.setAttribute("spellcheck","false");b.style.left="-100px";b.style.top="-100px";b.style.height=1;b.style.width=1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");document.body.removeChild(b)},A:function(a,b,c,d,e,h){b=y(b);const f=new XMLHttpRequest;f.open("GET",b);f.responseType="arraybuffer";const n=0<d;n&&f.setRequestHeader("Range","bytes="+c+"-"+(c+d-1));f.onreadystatechange=function(){if(f.readyState==XMLHttpRequest.DONE)if(206==f.status||200==f.status&&!n){const p=
new Uint8Array(f.response),q=p.length;q<=h?(z.set(p,e),hc(a,d,q)):ic(a)}else jc(a,f.status)};f.send()},oa:function(a,b){b=y(b);const c=new XMLHttpRequest;c.open("HEAD",b);c.onreadystatechange=function(){if(c.readyState==XMLHttpRequest.DONE)if(200==c.status){const d=c.getResponseHeader("Content-Length");kc(a,d)}else jc(a,c.status)};c.send()},va:function(){return navigator.userAgent.includes("Macintosh")?1:0},eb:function(a,b,c,d){return Wb(a,b,c,d)}};
(function(){function a(e){g.asm=e.exports;oa=g.asm.Lb;wa();xa=g.asm.$b;za.unshift(g.asm.Mb);G--;g.monitorRunDependencies&&g.monitorRunDependencies(G);0==G&&(null!==Ea&&(clearInterval(Ea),Ea=null),H&&(e=H,H=null,e()))}function b(e){a(e.instance)}function c(e){return Ia().then(function(h){return WebAssembly.instantiate(h,d)}).then(function(h){return h}).then(e,function(h){u("failed to asynchronously prepare wasm: "+h);na(h)})}var d={a:lc};G++;g.monitorRunDependencies&&g.monitorRunDependencies(G);if(g.instantiateWasm)try{return g.instantiateWasm(d,
a)}catch(e){return u("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return x||"function"!=typeof WebAssembly.instantiateStreaming||Fa()||I.startsWith("file://")||fa||"function"!=typeof fetch?c(b):fetch(I,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(h){u("wasm streaming compile failed: "+h);u("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
g.___wasm_call_ctors=function(){return(g.___wasm_call_ctors=g.asm.Mb).apply(null,arguments)};
var O=g._malloc=function(){return(O=g._malloc=g.asm.Nb).apply(null,arguments)},gc=g.__sapp_emsc_notify_keyboard_hidden=function(){return(gc=g.__sapp_emsc_notify_keyboard_hidden=g.asm.Ob).apply(null,arguments)},cc=g.__sapp_emsc_onpaste=function(){return(cc=g.__sapp_emsc_onpaste=g.asm.Pb).apply(null,arguments)},bc=g.__sapp_html5_get_ask_leave_site=function(){return(bc=g.__sapp_html5_get_ask_leave_site=g.asm.Qb).apply(null,arguments)},dc=g.__sapp_emsc_begin_drop=function(){return(dc=g.__sapp_emsc_begin_drop=
g.asm.Rb).apply(null,arguments)},ec=g.__sapp_emsc_drop=function(){return(ec=g.__sapp_emsc_drop=g.asm.Sb).apply(null,arguments)},fc=g.__sapp_emsc_end_drop=function(){return(fc=g.__sapp_emsc_end_drop=g.asm.Tb).apply(null,arguments)};g.__sapp_emsc_invoke_fetch_cb=function(){return(g.__sapp_emsc_invoke_fetch_cb=g.asm.Ub).apply(null,arguments)};g._main=function(){return(g._main=g.asm.Vb).apply(null,arguments)};g.__saudio_emsc_pull=function(){return(g.__saudio_emsc_pull=g.asm.Wb).apply(null,arguments)};
var kc=g.__sfetch_emsc_head_response=function(){return(kc=g.__sfetch_emsc_head_response=g.asm.Xb).apply(null,arguments)},hc=g.__sfetch_emsc_get_response=function(){return(hc=g.__sfetch_emsc_get_response=g.asm.Yb).apply(null,arguments)},jc=g.__sfetch_emsc_failed_http_status=function(){return(jc=g.__sfetch_emsc_failed_http_status=g.asm.Zb).apply(null,arguments)},ic=g.__sfetch_emsc_failed_buffer_too_small=function(){return(ic=g.__sfetch_emsc_failed_buffer_too_small=g.asm._b).apply(null,arguments)},La=
g.stackSave=function(){return(La=g.stackSave=g.asm.ac).apply(null,arguments)},Ma=g.stackRestore=function(){return(Ma=g.stackRestore=g.asm.bc).apply(null,arguments)},Zb=g.stackAlloc=function(){return(Zb=g.stackAlloc=g.asm.cc).apply(null,arguments)};g.___start_em_js=40932;g.___stop_em_js=50313;var mc;H=function nc(){mc||oc();mc||(H=nc)};
function pc(a){var b=g._main;a=a||[];a.unshift(ca);var c=a.length,d=Zb(4*(c+1)),e=d>>2;a.forEach(f=>{C[e++]=Yb(f)});C[e]=0;try{var h=b(c,d);Xb(h)}catch(f){f instanceof la||"unwind"==f||da(1,f)}}
function oc(){function a(){if(!mc&&(mc=!0,g.calledRun=!0,!pa)){Ja(za);Ja(Aa);if(g.onRuntimeInitialized)g.onRuntimeInitialized();qc&&pc(b);if(g.postRun)for("function"==typeof g.postRun&&(g.postRun=[g.postRun]);g.postRun.length;){var c=g.postRun.shift();Ca.unshift(c)}Ja(Ca)}}var b=b||ba;if(!(0<G)){if(g.preRun)for("function"==typeof g.preRun&&(g.preRun=[g.preRun]);g.preRun.length;)Da();Ja(ya);0<G||(g.setStatus?(g.setStatus("Running..."),setTimeout(function(){setTimeout(function(){g.setStatus("")},1);
a()},1)):a())}}if(g.preInit)for("function"==typeof g.preInit&&(g.preInit=[g.preInit]);0<g.preInit.length;)g.preInit.pop()();var qc=!0;g.noInitialRun&&(qc=!1);oc();
