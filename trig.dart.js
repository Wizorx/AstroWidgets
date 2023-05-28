(function dartProgram(){function copyProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
b[q]=a[q]}}function mixinPropertiesHard(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
if(!b.hasOwnProperty(q))b[q]=a[q]}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var s=function(){}
s.prototype={p:{}}
var r=new s()
if(!(r.__proto__&&r.__proto__.p===s.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var q=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(q))return true}}catch(p){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var s=Object.create(b.prototype)
copyProperties(a.prototype,s)
a.prototype=s}}function inheritMany(a,b){for(var s=0;s<b.length;s++)inherit(b[s],a)}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazyOld(a,b,c,d){var s=a
a[b]=s
a[c]=function(){a[c]=function(){A.tD(b)}
var r
var q=d
try{if(a[b]===s){r=a[b]=q
r=a[b]=d()}else r=a[b]}finally{if(r===q)a[b]=null
a[c]=function(){return this[b]}}return r}}function lazy(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s)a[b]=d()
a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){var r=d()
if(a[b]!==s)A.C(b)
a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.mI(b)
return new s(c,this)}:function(){if(s===null)s=A.mI(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.mI(a).prototype
return s}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number")h+=x
return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var s=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var r=staticTearOffGetter(s)
a[b]=r}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var s=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var r=instanceTearOffGetter(c,s)
a[b]=r}function setOrUpdateInterceptorsByTag(a){var s=v.interceptorsByTag
if(!s){v.interceptorsByTag=a
return}copyProperties(a,s)}function setOrUpdateLeafTags(a){var s=v.leafTags
if(!s){v.leafTags=a
return}copyProperties(a,s)}function updateTypes(a){var s=v.types
var r=s.length
s.push.apply(s,a)
return r}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var s=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},r=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:s(0,0,null,["$0"],0),_instance_1u:s(0,1,null,["$1"],0),_instance_2u:s(0,2,null,["$2"],0),_instance_0i:s(1,0,null,["$0"],0),_instance_1i:s(1,1,null,["$1"],0),_instance_2i:s(1,2,null,["$2"],0),_static_0:r(0,null,["$0"],0),_static_1:r(1,null,["$1"],0),_static_2:r(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,lazyOld:lazyOld,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var A={m6:function m6(){},
nd(a,b,c){if(b.h("O<0>").b(a))return new A.ey(a,b.h("@<0>").X(c).h("ey<1,2>"))
return new A.cn(a,b.h("@<0>").X(c).h("cn<1,2>"))},
pX(a){return new A.e0("Field '"+a+"' has been assigned during initialization.")},
m8(a){return new A.e0("Field '"+a+"' has not been initialized.")},
lE(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
c7(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
mh(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
nH(a,b,c){return A.mh(A.c7(A.c7(c,a),b))},
f5(a,b,c){return a},
bu(a,b,c,d){A.b6(b,"start")
if(c!=null){A.b6(c,"end")
if(b>c)A.M(A.Y(b,0,c,"start",null))}return new A.aD(a,b,c,d.h("aD<0>"))},
jz(a,b,c,d){if(t.gt.b(a))return new A.dH(a,b,c.h("@<0>").X(d).h("dH<1,2>"))
return new A.cx(a,b,c.h("@<0>").X(d).h("cx<1,2>"))},
nE(a,b,c){var s="count"
if(t.gt.b(a)){A.iu(b,s,t.S)
A.b6(b,s)
return new A.cS(a,b,c.h("cS<0>"))}A.iu(b,s,t.S)
A.b6(b,s)
return new A.bO(a,b,c.h("bO<0>"))},
al(){return new A.d9("No element")},
pS(){return new A.d9("Too few elements")},
nF(a,b,c){A.ho(a,0,J.W(a)-1,b,c)},
ho(a,b,c,d,e){if(c-b<=32)A.qs(a,b,c,d,e)
else A.qr(a,b,c,d,e)},
qs(a,b,c,d,e){var s,r,q,p,o,n
for(s=b+1,r=J.Z(a);s<=c;++s){q=r.k(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.k(a,p-1),q)
if(typeof o!=="number")return o.br()
o=o>0}else o=!1
if(!o)break
n=p-1
r.t(a,p,r.k(a,n))
p=n}r.t(a,p,q)}},
qr(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j=B.e.aO(a5-a4+1,6),i=a4+j,h=a5-j,g=B.e.aO(a4+a5,2),f=g-j,e=g+j,d=J.Z(a3),c=d.k(a3,i),b=d.k(a3,f),a=d.k(a3,g),a0=d.k(a3,e),a1=d.k(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.br()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.br()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.br()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.br()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.br()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.br()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.br()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.br()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.br()
if(a2>0){s=a1
a1=a0
a0=s}d.t(a3,i,c)
d.t(a3,g,a)
d.t(a3,h,a1)
d.t(a3,f,d.k(a3,a4))
d.t(a3,e,d.k(a3,a5))
r=a4+1
q=a5-1
if(J.T(a6.$2(b,a0),0)){for(p=r;p<=q;++p){o=d.k(a3,p)
n=a6.$2(o,b)
if(n===0)continue
if(n<0){if(p!==r){d.t(a3,p,d.k(a3,r))
d.t(a3,r,o)}++r}else for(;!0;){n=a6.$2(d.k(a3,q),b)
if(n>0){--q
continue}else{m=q-1
if(n<0){d.t(a3,p,d.k(a3,r))
l=r+1
d.t(a3,r,d.k(a3,q))
d.t(a3,q,o)
q=m
r=l
break}else{d.t(a3,p,d.k(a3,q))
d.t(a3,q,o)
q=m
break}}}}k=!0}else{for(p=r;p<=q;++p){o=d.k(a3,p)
if(a6.$2(o,b)<0){if(p!==r){d.t(a3,p,d.k(a3,r))
d.t(a3,r,o)}++r}else if(a6.$2(o,a0)>0)for(;!0;)if(a6.$2(d.k(a3,q),a0)>0){--q
if(q<p)break
continue}else{m=q-1
if(a6.$2(d.k(a3,q),b)<0){d.t(a3,p,d.k(a3,r))
l=r+1
d.t(a3,r,d.k(a3,q))
d.t(a3,q,o)
r=l}else{d.t(a3,p,d.k(a3,q))
d.t(a3,q,o)}q=m
break}}k=!1}a2=r-1
d.t(a3,a4,d.k(a3,a2))
d.t(a3,a2,b)
a2=q+1
d.t(a3,a5,d.k(a3,a2))
d.t(a3,a2,a0)
A.ho(a3,a4,r-2,a6,a7)
A.ho(a3,q+2,a5,a6,a7)
if(k)return
if(r<i&&q>h){for(;J.T(a6.$2(d.k(a3,r),b),0);)++r
for(;J.T(a6.$2(d.k(a3,q),a0),0);)--q
for(p=r;p<=q;++p){o=d.k(a3,p)
if(a6.$2(o,b)===0){if(p!==r){d.t(a3,p,d.k(a3,r))
d.t(a3,r,o)}++r}else if(a6.$2(o,a0)===0)for(;!0;)if(a6.$2(d.k(a3,q),a0)===0){--q
if(q<p)break
continue}else{m=q-1
if(a6.$2(d.k(a3,q),b)<0){d.t(a3,p,d.k(a3,r))
l=r+1
d.t(a3,r,d.k(a3,q))
d.t(a3,q,o)
r=l}else{d.t(a3,p,d.k(a3,q))
d.t(a3,q,o)}q=m
break}}A.ho(a3,r,q,a6,a7)}else A.ho(a3,r,q,a6,a7)},
cc:function cc(){},
dB:function dB(a,b){this.a=a
this.$ti=b},
cn:function cn(a,b){this.a=a
this.$ti=b},
ey:function ey(a,b){this.a=a
this.$ti=b},
ev:function ev(){},
kL:function kL(a,b){this.a=a
this.b=b},
aL:function aL(a,b){this.a=a
this.$ti=b},
e0:function e0(a){this.a=a},
a5:function a5(a){this.a=a},
lO:function lO(){},
kb:function kb(){},
O:function O(){},
B:function B(){},
aD:function aD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
J:function J(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cx:function cx(a,b,c){this.a=a
this.b=b
this.$ti=c},
dH:function dH(a,b,c){this.a=a
this.b=b
this.$ti=c},
cy:function cy(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
G:function G(a,b,c){this.a=a
this.b=b
this.$ti=c},
am:function am(a,b,c){this.a=a
this.b=b
this.$ti=c},
cE:function cE(a,b,c){this.a=a
this.b=b
this.$ti=c},
dM:function dM(a,b,c){this.a=a
this.b=b
this.$ti=c},
dN:function dN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bO:function bO(a,b,c){this.a=a
this.b=b
this.$ti=c},
cS:function cS(a,b,c){this.a=a
this.b=b
this.$ti=c},
ei:function ei(a,b,c){this.a=a
this.b=b
this.$ti=c},
dJ:function dJ(a){this.$ti=a},
dK:function dK(a){this.$ti=a},
an:function an(a,b){this.a=a
this.$ti=b},
cF:function cF(a,b){this.a=a
this.$ti=b},
bp:function bp(){},
bF:function bF(){},
dc:function dc(){},
V:function V(a,b){this.a=a
this.$ti=b},
eT:function eT(){},
pM(a){if(typeof a=="number")return B.h.gZ(a)
if(t.f5.b(a))return A.bL(a)
return A.mR(a)},
pN(a){return new A.iV(a)},
p1(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
tn(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.dX.b(a)},
k(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.bx(a)
return s},
bL(a){var s,r=$.nv
if(r==null)r=$.nv=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
nw(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(m==null)return n
if(3>=m.length)return A.c(m,3)
s=m[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(m[2]!=null)return parseInt(a,16)
return n}if(b<2||b>36)throw A.d(A.Y(b,2,36,"radix",n))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=m[1]
for(p=q.length,o=0;o<p;++o)if((B.b.E(q,o)|32)>r)return n}return parseInt(a,b)},
qb(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.b.e0(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
k_(a){return A.q9(a)},
q9(a){var s,r,q,p
if(a instanceof A.D)return A.aW(A.aE(a),null)
s=J.bj(a)
if(s===B.b5||s===B.b7||t.cx.b(a)){r=B.a5(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.aW(A.aE(a),null)},
qa(){if(!!self.location)return self.location.href
return null},
nu(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
qc(a){var s,r,q,p=A.a([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.e)(a),++r){q=a[r]
if(!A.lo(q))throw A.d(A.f4(q))
if(q<=65535)B.a.n(p,q)
else if(q<=1114111){B.a.n(p,55296+(B.e.cJ(q-65536,10)&1023))
B.a.n(p,56320+(q&1023))}else throw A.d(A.f4(q))}return A.nu(p)},
nx(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!A.lo(q))throw A.d(A.f4(q))
if(q<0)throw A.d(A.f4(q))
if(q>65535)return A.qc(a)}return A.nu(a)},
qd(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
b5(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.e.cJ(s,10)|55296)>>>0,s&1023|56320)}}throw A.d(A.Y(a,0,1114111,null,null))},
bw(a){throw A.d(A.f4(a))},
c(a,b){if(a==null)J.W(a)
throw A.d(A.cg(a,b))},
cg(a,b){var s,r="index"
if(!A.lo(b))return new A.by(!0,b,r,null)
s=A.a1(J.W(a))
if(b<0||b>=s)return A.fS(b,a,r,null,s)
return A.k0(b,r)},
t9(a,b,c){if(a<0||a>c)return A.Y(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.Y(b,a,c,"end",null)
return new A.by(!0,b,"end",null)},
f4(a){return new A.by(!0,a,null,null)},
d(a){var s,r
if(a==null)a=new A.h4()
s=new Error()
s.dartException=a
r=A.tE
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
tE(){return J.bx(this.dartException)},
M(a){throw A.d(a)},
e(a){throw A.d(A.ar(a))},
bR(a){var s,r,q,p,o,n
a=A.mT(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.a([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.kl(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
km(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
nM(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
m7(a,b){var s=b==null,r=s?null:b.method
return new A.fV(a,r,s?null:b.receiver)},
bl(a){var s
if(a==null)return new A.h5(a)
if(a instanceof A.dL){s=a.a
return A.cj(a,s==null?t.K.a(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.cj(a,a.dartException)
return A.rX(a)},
cj(a,b){if(t.fz.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
rX(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.e.cJ(r,16)&8191)===10)switch(q){case 438:return A.cj(a,A.m7(A.k(s)+" (Error "+q+")",e))
case 445:case 5007:p=A.k(s)
return A.cj(a,new A.e8(p+" (Error "+q+")",e))}}if(a instanceof TypeError){o=$.p5()
n=$.p6()
m=$.p7()
l=$.p8()
k=$.pb()
j=$.pc()
i=$.pa()
$.p9()
h=$.pe()
g=$.pd()
f=o.bj(s)
if(f!=null)return A.cj(a,A.m7(A.aq(s),f))
else{f=n.bj(s)
if(f!=null){f.method="call"
return A.cj(a,A.m7(A.aq(s),f))}else{f=m.bj(s)
if(f==null){f=l.bj(s)
if(f==null){f=k.bj(s)
if(f==null){f=j.bj(s)
if(f==null){f=i.bj(s)
if(f==null){f=l.bj(s)
if(f==null){f=h.bj(s)
if(f==null){f=g.bj(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p){A.aq(s)
return A.cj(a,new A.e8(s,f==null?e:f.method))}}}return A.cj(a,new A.hC(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.ek()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return A.cj(a,new A.by(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.ek()
return a},
ch(a){var s
if(a instanceof A.dL)return a.b
if(a==null)return new A.eI(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new A.eI(a)},
mR(a){if(a==null||typeof a!="object")return J.aA(a)
else return A.bL(a)},
oH(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.t(0,a[s],a[r])}return b},
tl(a,b,c,d,e,f){t.gY.a(a)
switch(A.a1(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(new A.i_("Unsupported number of arguments for wrapped closure"))},
dp(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.tl)
a.$identity=s
return s},
pH(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.ht().constructor.prototype):Object.create(new A.cN(null,null).constructor.prototype)
s.$initialize=s.constructor
if(h)r=function static_tear_off(){this.$initialize()}
else r=function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.nf(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.pD(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.nf(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
pD(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.pz)}throw A.d("Error in functionType of tearoff")},
pE(a,b,c,d){var s=A.nc
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
nf(a,b,c,d){var s,r
if(c)return A.pG(a,b,d)
s=b.length
r=A.pE(s,d,a,b)
return r},
pF(a,b,c,d){var s=A.nc,r=A.pA
switch(b?-1:a){case 0:throw A.d(new A.hl("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
pG(a,b,c){var s,r
if($.na==null)$.na=A.n9("interceptor")
if($.nb==null)$.nb=A.n9("receiver")
s=b.length
r=A.pF(s,c,a,b)
return r},
mI(a){return A.pH(a)},
pz(a,b){return A.lb(v.typeUniverse,A.aE(a.a),b)},
nc(a){return a.a},
pA(a){return a.b},
n9(a){var s,r,q,p=new A.cN("receiver","interceptor"),o=J.jq(Object.getOwnPropertyNames(p),t.X)
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw A.d(A.a4("Field name "+a+" not found.",null))},
as(a){if(a==null)A.rY("boolean expression must not be null")
return a},
rY(a){throw A.d(new A.hM(a))},
tD(a){throw A.d(new A.fB(a))},
te(a){return v.getIsolateTag(a)},
np(a,b,c){var s=new A.cv(a,b,c.h("cv<0>"))
s.c=a.e
return s},
ur(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
tp(a){var s,r,q,p,o,n=A.aq($.oM.$1(a)),m=$.ly[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.lI[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.ig($.oz.$2(a,n))
if(q!=null){m=$.ly[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.lI[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.lN(s)
$.ly[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.lI[n]=s
return s}if(p==="-"){o=A.lN(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.oX(a,s)
if(p==="*")throw A.d(A.hB(n))
if(v.leafTags[n]===true){o=A.lN(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.oX(a,s)},
oX(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.mQ(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
lN(a){return J.mQ(a,!1,null,!!a.$icX)},
tr(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.lN(s)
else return J.mQ(s,c,null,null)},
ti(){if(!0===$.mL)return
$.mL=!0
A.tj()},
tj(){var s,r,q,p,o,n,m,l
$.ly=Object.create(null)
$.lI=Object.create(null)
A.th()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.oY.$1(o)
if(n!=null){m=A.tr(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
th(){var s,r,q,p,o,n,m=B.aX()
m=A.dn(B.aY,A.dn(B.aZ,A.dn(B.a6,A.dn(B.a6,A.dn(B.b_,A.dn(B.b0,A.dn(B.b1(B.a5),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.oM=new A.lF(p)
$.oz=new A.lG(o)
$.oY=new A.lH(n)},
dn(a,b){return a(b)||b},
m5(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw A.d(A.ax("Illegal RegExp pattern ("+String(n)+")",a,null))},
ck(a,b,c){var s
if(typeof b=="string")return a.indexOf(b,c)>=0
else if(b instanceof A.ct){s=B.b.aq(a,c)
return b.b.test(s)}else{s=J.lZ(b,B.b.aq(a,c))
return!s.gan(s)}},
oG(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
mT(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
bk(a,b,c){var s
if(typeof b=="string")return A.tA(a,b,c)
if(b instanceof A.ct){s=b.ghx()
s.lastIndex=0
return a.replace(s,A.oG(c))}return A.tz(a,b,c)},
tz(a,b,c){var s,r,q,p
for(s=J.lZ(b,a),s=s.gI(s),r=0,q="";s.q();){p=s.gB()
q=q+a.substring(r,p.gP(p))+c
r=p.gS()}s=q+a.substring(r)
return s.charCodeAt(0)==0?s:s},
tA(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
r=""+c
for(q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.mT(b),"g"),A.oG(c))},
tB(a,b,c,d){var s=a.indexOf(b,d)
if(s<0)return a
return A.p0(a,s,s+b.length,c)},
p0(a,b,c,d){return a.substring(0,b)+d+a.substring(c)},
cR:function cR(){},
r:function r(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ew:function ew(a,b){this.a=a
this.$ti=b},
bY:function bY(a,b){this.a=a
this.$ti=b},
iV:function iV(a){this.a=a},
dW:function dW(){},
bZ:function bZ(a,b){this.a=a
this.$ti=b},
kl:function kl(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
e8:function e8(a,b){this.a=a
this.b=b},
fV:function fV(a,b,c){this.a=a
this.b=b
this.c=c},
hC:function hC(a){this.a=a},
h5:function h5(a){this.a=a},
dL:function dL(a,b){this.a=a
this.b=b},
eI:function eI(a){this.a=a
this.b=null},
aM:function aM(){},
fw:function fw(){},
fx:function fx(){},
hv:function hv(){},
ht:function ht(){},
cN:function cN(a,b){this.a=a
this.b=b},
hl:function hl(a){this.a=a},
hM:function hM(a){this.a=a},
bc:function bc(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
js:function js(a){this.a=a},
ju:function ju(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
aP:function aP(a,b){this.a=a
this.$ti=b},
cv:function cv(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
lF:function lF(a){this.a=a},
lG:function lG(a){this.a=a},
lH:function lH(a){this.a=a},
ct:function ct(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
di:function di(a){this.b=a},
hL:function hL(a,b,c){this.a=a
this.b=b
this.c=c},
de:function de(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
da:function da(a,b){this.a=a
this.c=b},
i7:function i7(a,b,c){this.a=a
this.b=b
this.c=c},
i8:function i8(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
b(a){return A.M(A.m8(a))},
C(a){return A.M(A.pX(a))},
qO(a){var s=new A.kM(a)
return s.b=s},
kM:function kM(a){this.a=a
this.b=null},
mB(a){return a},
q5(a){return new Int8Array(a)},
li(a,b,c){if(a>>>0!==a||a>=c)throw A.d(A.cg(b,a))},
rq(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.d(A.t9(a,b,c))
return b},
h1:function h1(){},
d0:function d0(){},
e6:function e6(){},
h0:function h0(){},
e7:function e7(){},
cz:function cz(){},
eF:function eF(){},
eG:function eG(){},
nB(a,b){var s=b.c
return s==null?b.c=A.mv(a,b.y,!0):s},
nA(a,b){var s=b.c
return s==null?b.c=A.eN(a,"bb",[b.y]):s},
nC(a){var s=a.x
if(s===6||s===7||s===8)return A.nC(a.y)
return s===11||s===12},
qj(a){return a.at},
aI(a){return A.ic(v.typeUniverse,a,!1)},
tk(a,b){var s,r,q,p,o
if(a==null)return null
s=b.z
r=a.as
if(r==null)r=a.as=new Map()
q=b.at
p=r.get(q)
if(p!=null)return p
o=A.bV(v.typeUniverse,a.y,s,0)
r.set(q,o)
return o},
bV(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.x
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.y
r=A.bV(a,s,a0,a1)
if(r===s)return b
return A.o1(a,r,!0)
case 7:s=b.y
r=A.bV(a,s,a0,a1)
if(r===s)return b
return A.mv(a,r,!0)
case 8:s=b.y
r=A.bV(a,s,a0,a1)
if(r===s)return b
return A.o0(a,r,!0)
case 9:q=b.z
p=A.f2(a,q,a0,a1)
if(p===q)return b
return A.eN(a,b.y,p)
case 10:o=b.y
n=A.bV(a,o,a0,a1)
m=b.z
l=A.f2(a,m,a0,a1)
if(n===o&&l===m)return b
return A.mt(a,n,l)
case 11:k=b.y
j=A.bV(a,k,a0,a1)
i=b.z
h=A.rU(a,i,a0,a1)
if(j===k&&h===i)return b
return A.o_(a,j,h)
case 12:g=b.z
a1+=g.length
f=A.f2(a,g,a0,a1)
o=b.y
n=A.bV(a,o,a0,a1)
if(f===g&&n===o)return b
return A.mu(a,n,f,!0)
case 13:e=b.y
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw A.d(A.iD("Attempted to substitute unexpected RTI kind "+c))}},
f2(a,b,c,d){var s,r,q,p,o=b.length,n=A.le(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.bV(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
rV(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.le(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.bV(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
rU(a,b,c,d){var s,r=b.a,q=A.f2(a,r,c,d),p=b.b,o=A.f2(a,p,c,d),n=b.c,m=A.rV(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.i1()
s.a=q
s.b=o
s.c=m
return s},
a(a,b){a[v.arrayRti]=b
return a},
mJ(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.tf(s)
return a.$S()}return null},
oO(a,b){var s
if(A.nC(b))if(a instanceof A.aM){s=A.mJ(a)
if(s!=null)return s}return A.aE(a)},
aE(a){var s
if(a instanceof A.D){s=a.$ti
return s!=null?s:A.mC(a)}if(Array.isArray(a))return A.v(a)
return A.mC(J.bj(a))},
v(a){var s=a[v.arrayRti],r=t.dG
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
z(a){var s=a.$ti
return s!=null?s:A.mC(a)},
mC(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.rB(a,s)},
rB(a,b){var s=a instanceof A.aM?a.__proto__.__proto__.constructor:b,r=A.r9(v.typeUniverse,s.name)
b.$ccache=r
return r},
tf(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.ic(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
dq(a){var s=a instanceof A.aM?A.mJ(a):null
return A.mK(s==null?A.aE(a):s)},
mK(a){var s,r,q,p=a.w
if(p!=null)return p
s=a.at
r=s.replace(/\*/g,"")
if(r===s)return a.w=new A.eL(a)
q=A.ic(v.typeUniverse,r,!0)
p=q.w
return a.w=p==null?q.w=new A.eL(q):p},
tF(a){return A.mK(A.ic(v.typeUniverse,a,!1))},
rA(a){var s,r,q,p,o=this
if(o===t.K)return A.dl(o,a,A.rH)
if(!A.bW(o))if(!(o===t._))s=!1
else s=!0
else s=!0
if(s)return A.dl(o,a,A.rK)
s=o.x
r=s===6?o.y:o
if(r===t.S)q=A.lo
else if(r===t.W||r===t.p)q=A.rG
else if(r===t.N)q=A.rI
else q=r===t.k4?A.oo:null
if(q!=null)return A.dl(o,a,q)
if(r.x===9){p=r.y
if(r.z.every(A.to)){o.r="$i"+p
if(p==="n")return A.dl(o,a,A.rF)
return A.dl(o,a,A.rJ)}}else if(s===7)return A.dl(o,a,A.ry)
return A.dl(o,a,A.rw)},
dl(a,b,c){a.b=c
return a.b(b)},
rz(a){var s,r=this,q=A.rv
if(!A.bW(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=A.rn
else if(r===t.K)q=A.rm
else{s=A.f6(r)
if(s)q=A.rx}r.a=q
return r.a(a)},
lp(a){var s,r=a.x
if(!A.bW(a))if(!(a===t._))if(!(a===t.eK))if(r!==7)s=r===8&&A.lp(a.y)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
rw(a){var s=this
if(a==null)return A.lp(s)
return A.ai(v.typeUniverse,A.oO(a,s),null,s,null)},
ry(a){if(a==null)return!0
return this.y.b(a)},
rJ(a){var s,r=this
if(a==null)return A.lp(r)
s=r.r
if(a instanceof A.D)return!!a[s]
return!!J.bj(a)[s]},
rF(a){var s,r=this
if(a==null)return A.lp(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.r
if(a instanceof A.D)return!!a[s]
return!!J.bj(a)[s]},
rv(a){var s,r=this
if(a==null){s=A.f6(r)
if(s)return a}else if(r.b(a))return a
A.om(a,r)},
rx(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.om(a,s)},
om(a,b){throw A.d(A.nZ(A.nT(a,A.oO(a,b),A.aW(b,null))))},
ii(a,b,c,d){var s=null
if(A.ai(v.typeUniverse,a,s,b,s))return a
throw A.d(A.nZ("The type argument '"+A.aW(a,s)+"' is not a subtype of the type variable bound '"+A.aW(b,s)+"' of type variable '"+c+"' in '"+d+"'."))},
nT(a,b,c){var s=A.fG(a)
return s+": type '"+A.aW(b==null?A.aE(a):b,null)+"' is not a subtype of type '"+c+"'"},
nZ(a){return new A.eM("TypeError: "+a)},
aV(a,b){return new A.eM("TypeError: "+A.nT(a,null,b))},
rH(a){return a!=null},
rm(a){if(a!=null)return a
throw A.d(A.aV(a,"Object"))},
rK(a){return!0},
rn(a){return a},
oo(a){return!0===a||!1===a},
ie(a){if(!0===a)return!0
if(!1===a)return!1
throw A.d(A.aV(a,"bool"))},
uh(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.aV(a,"bool"))},
ug(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.aV(a,"bool?"))},
bU(a){if(typeof a=="number")return a
throw A.d(A.aV(a,"double"))},
ui(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.aV(a,"double"))},
oh(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.aV(a,"double?"))},
lo(a){return typeof a=="number"&&Math.floor(a)===a},
a1(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.d(A.aV(a,"int"))},
uk(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.aV(a,"int"))},
uj(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.aV(a,"int?"))},
rG(a){return typeof a=="number"},
lf(a){if(typeof a=="number")return a
throw A.d(A.aV(a,"num"))},
um(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.aV(a,"num"))},
ul(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.aV(a,"num?"))},
rI(a){return typeof a=="string"},
aq(a){if(typeof a=="string")return a
throw A.d(A.aV(a,"String"))},
un(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.aV(a,"String"))},
ig(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.aV(a,"String?"))},
rR(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.aW(a[q],b)
return s},
on(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=A.a([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)B.a.n(a5,"T"+(q+p))
for(o=t.X,n=t._,m="<",l="",p=0;p<s;++p,l=a3){k=a5.length
j=k-1-p
if(!(j>=0))return A.c(a5,j)
m=B.b.T(m+l,a5[j])
i=a6[p]
h=i.x
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+A.aW(i,a5)}m+=">"}else{m=""
r=null}o=a4.y
g=a4.z
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=A.aW(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+A.aW(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+A.aW(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=A.aW(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
aW(a,b){var s,r,q,p,o,n,m,l=a.x
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=A.aW(a.y,b)
return s}if(l===7){r=a.y
s=A.aW(r,b)
q=r.x
return(q===11||q===12?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+A.aW(a.y,b)+">"
if(l===9){p=A.rW(a.y)
o=a.z
return o.length>0?p+("<"+A.rR(o,b)+">"):p}if(l===11)return A.on(a,b,null)
if(l===12)return A.on(a.y,b,a.z)
if(l===13){n=a.y
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.c(b,n)
return b[n]}return"?"},
rW(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
ra(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
r9(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.ic(a,b,!1)
else if(typeof m=="number"){s=m
r=A.eO(a,5,"#")
q=A.le(s)
for(p=0;p<s;++p)q[p]=r
o=A.eN(a,b,q)
n[b]=o
return o}else return m},
r7(a,b){return A.of(a.tR,b)},
r6(a,b){return A.of(a.eT,b)},
ic(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.nX(A.nV(a,null,b,c))
r.set(b,s)
return s},
lb(a,b,c){var s,r,q=b.Q
if(q==null)q=b.Q=new Map()
s=q.get(c)
if(s!=null)return s
r=A.nX(A.nV(a,b,c,!0))
q.set(c,r)
return r},
r8(a,b,c){var s,r,q,p=b.as
if(p==null)p=b.as=new Map()
s=c.at
r=p.get(s)
if(r!=null)return r
q=A.mt(a,b,c.x===10?c.z:[c])
p.set(s,q)
return q},
cf(a,b){b.a=A.rz
b.b=A.rA
return b},
eO(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.br(null,null)
s.x=b
s.at=c
r=A.cf(a,s)
a.eC.set(c,r)
return r},
o1(a,b,c){var s,r=b.at+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.r4(a,b,r,c)
a.eC.set(r,s)
return s},
r4(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.bW(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new A.br(null,null)
q.x=6
q.y=b
q.at=c
return A.cf(a,q)},
mv(a,b,c){var s,r=b.at+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.r3(a,b,r,c)
a.eC.set(r,s)
return s},
r3(a,b,c,d){var s,r,q,p
if(d){s=b.x
if(!A.bW(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&A.f6(b.y)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.eK)return t.P
else if(s===6){q=b.y
if(q.x===8&&A.f6(q.y))return q
else return A.nB(a,b)}}p=new A.br(null,null)
p.x=7
p.y=b
p.at=c
return A.cf(a,p)},
o0(a,b,c){var s,r=b.at+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.r1(a,b,r,c)
a.eC.set(r,s)
return s},
r1(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.bW(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return A.eN(a,"bb",[b])
else if(b===t.P||b===t.T)return t.gK}q=new A.br(null,null)
q.x=8
q.y=b
q.at=c
return A.cf(a,q)},
r5(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.br(null,null)
s.x=13
s.y=b
s.at=q
r=A.cf(a,s)
a.eC.set(q,r)
return r},
ib(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].at
return s},
r0(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].at}return s},
eN(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.ib(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.br(null,null)
r.x=9
r.y=b
r.z=c
if(c.length>0)r.c=c[0]
r.at=p
q=A.cf(a,r)
a.eC.set(p,q)
return q},
mt(a,b,c){var s,r,q,p,o,n
if(b.x===10){s=b.y
r=b.z.concat(c)}else{r=c
s=b}q=s.at+(";<"+A.ib(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.br(null,null)
o.x=10
o.y=s
o.z=r
o.at=q
n=A.cf(a,o)
a.eC.set(q,n)
return n},
o_(a,b,c){var s,r,q,p,o,n=b.at,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.ib(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.ib(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.r0(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.br(null,null)
p.x=11
p.y=b
p.z=c
p.at=r
o=A.cf(a,p)
a.eC.set(r,o)
return o},
mu(a,b,c,d){var s,r=b.at+("<"+A.ib(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.r2(a,b,c,r,d)
a.eC.set(r,s)
return s},
r2(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.le(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.x===1){r[p]=o;++q}}if(q>0){n=A.bV(a,b,r,0)
m=A.f2(a,c,r,0)
return A.mu(a,n,m,c!==m)}}l=new A.br(null,null)
l.x=12
l.y=b
l.z=c
l.at=d
return A.cf(a,l)},
nV(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
nX(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=A.qW(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=A.nW(a,r,h,g,!1)
else if(q===46)r=A.nW(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(A.cd(a.u,a.e,g.pop()))
break
case 94:g.push(A.r5(a.u,g.pop()))
break
case 35:g.push(A.eO(a.u,5,"#"))
break
case 64:g.push(A.eO(a.u,2,"@"))
break
case 126:g.push(A.eO(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
A.ms(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(A.eN(p,n,o))
else{m=A.cd(p,a.e,n)
switch(m.x){case 11:g.push(A.mu(p,m,o,a.n))
break
default:g.push(A.mt(p,m,o))
break}}break
case 38:A.qX(a,g)
break
case 42:p=a.u
g.push(A.o1(p,A.cd(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(A.mv(p,A.cd(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(A.o0(p,A.cd(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new A.i1()
k=p.sEA
j=p.sEA
n=g.pop()
if(typeof n=="number")switch(n){case-1:k=g.pop()
break
case-2:j=g.pop()
break
default:g.push(n)
break}else g.push(n)
o=g.splice(a.p)
A.ms(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(A.o_(p,A.cd(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
A.ms(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
A.qZ(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return A.cd(a.u,a.e,i)},
qW(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
nW(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.x===10)o=o.y
n=A.ra(s,o.y)[p]
if(n==null)A.M('No "'+p+'" in "'+A.qj(o)+'"')
d.push(A.lb(s,o,n))}else d.push(p)
return m},
qX(a,b){var s=b.pop()
if(0===s){b.push(A.eO(a.u,1,"0&"))
return}if(1===s){b.push(A.eO(a.u,4,"1&"))
return}throw A.d(A.iD("Unexpected extended operation "+A.k(s)))},
cd(a,b,c){if(typeof c=="string")return A.eN(a,c,a.sEA)
else if(typeof c=="number")return A.qY(a,b,c)
else return c},
ms(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.cd(a,b,c[s])},
qZ(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.cd(a,b,c[s])},
qY(a,b,c){var s,r,q=b.x
if(q===10){if(c===0)return b.y
s=b.z
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.y
q=b.x}else if(c===0)return b
if(q!==9)throw A.d(A.iD("Indexed base must be an interface type"))
s=b.z
if(c<=s.length)return s[c-1]
throw A.d(A.iD("Bad index "+c+" for "+b.l(0)))},
ai(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!A.bW(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.x
if(r===4)return!0
if(A.bW(b))return!1
if(b.x!==1)s=!1
else s=!0
if(s)return!0
q=r===13
if(q)if(A.ai(a,c[b.y],c,d,e))return!0
p=d.x
s=b===t.P||b===t.T
if(s){if(p===8)return A.ai(a,b,c,d.y,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return A.ai(a,b.y,c,d,e)
if(r===6)return A.ai(a,b.y,c,d,e)
return r!==7}if(r===6)return A.ai(a,b.y,c,d,e)
if(p===6){s=A.nB(a,d)
return A.ai(a,b,c,s,e)}if(r===8){if(!A.ai(a,b.y,c,d,e))return!1
return A.ai(a,A.nA(a,b),c,d,e)}if(r===7){s=A.ai(a,t.P,c,d,e)
return s&&A.ai(a,b.y,c,d,e)}if(p===8){if(A.ai(a,b,c,d.y,e))return!0
return A.ai(a,b,c,A.nA(a,d),e)}if(p===7){s=A.ai(a,b,c,t.P,e)
return s||A.ai(a,b,c,d.y,e)}if(q)return!1
s=r!==11
if((!s||r===12)&&d===t.gY)return!0
if(p===12){if(b===t.dY)return!0
if(r!==12)return!1
o=b.z
n=d.z
m=o.length
if(m!==n.length)return!1
c=c==null?o:o.concat(c)
e=e==null?n:n.concat(e)
for(l=0;l<m;++l){k=o[l]
j=n[l]
if(!A.ai(a,k,c,j,e)||!A.ai(a,j,e,k,c))return!1}return A.op(a,b.y,c,d.y,e)}if(p===11){if(b===t.dY)return!0
if(s)return!1
return A.op(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return A.rE(a,b,c,d,e)}return!1},
op(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.ai(a3,a4.y,a5,a6.y,a7))return!1
s=a4.z
r=a6.z
q=s.a
p=r.a
o=q.length
n=p.length
if(o>n)return!1
m=n-o
l=s.b
k=r.b
j=l.length
i=k.length
if(o+j<n+i)return!1
for(h=0;h<o;++h){g=q[h]
if(!A.ai(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.ai(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.ai(a3,k[h],a7,g,a5))return!1}f=s.c
e=r.c
d=f.length
c=e.length
for(b=0,a=0;a<c;a+=3){a0=e[a]
for(;!0;){if(b>=d)return!1
a1=f[b]
b+=3
if(a0<a1)return!1
a2=f[b-2]
if(a1<a0){if(a2)return!1
continue}g=e[a+1]
if(a2&&!g)return!1
g=f[b-1]
if(!A.ai(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
rE(a,b,c,d,e){var s,r,q,p,o,n,m,l=b.y,k=d.y
for(;l!==k;){s=a.tR[l]
if(s==null)return!1
if(typeof s=="string"){l=s
continue}r=s[k]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.lb(a,b,r[o])
return A.og(a,p,null,c,d.z,e)}n=b.z
m=d.z
return A.og(a,n,null,c,m,e)},
og(a,b,c,d,e,f){var s,r,q,p=b.length
for(s=0;s<p;++s){r=b[s]
q=e[s]
if(!A.ai(a,r,d,q,f))return!1}return!0},
f6(a){var s,r=a.x
if(!(a===t.P||a===t.T))if(!A.bW(a))if(r!==7)if(!(r===6&&A.f6(a.y)))s=r===8&&A.f6(a.y)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
to(a){var s
if(!A.bW(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
bW(a){var s=a.x
return s===2||s===3||s===4||s===5||a===t.X},
of(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
le(a){return a>0?new Array(a):v.typeUniverse.sEA},
br:function br(a,b){var _=this
_.a=a
_.b=b
_.w=_.r=_.c=null
_.x=0
_.at=_.as=_.Q=_.z=_.y=null},
i1:function i1(){this.c=this.b=this.a=null},
eL:function eL(a){this.a=a},
hZ:function hZ(){},
eM:function eM(a){this.a=a},
qK(){var s,r,q={}
if(self.scheduleImmediate!=null)return A.rZ()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(A.dp(new A.kI(q),1)).observe(s,{childList:true})
return new A.kH(q,s,r)}else if(self.setImmediate!=null)return A.t_()
return A.t0()},
qL(a){self.scheduleImmediate(A.dp(new A.kJ(t.M.a(a)),0))},
qM(a){self.setImmediate(A.dp(new A.kK(t.M.a(a)),0))},
qN(a){t.M.a(a)
A.r_(0,a)},
r_(a,b){var s=new A.l9()
s.l0(a,b)
return s},
f1(a){return new A.hN(new A.ap($.a6,a.h("ap<0>")),a.h("hN<0>"))},
eZ(a,b){a.$2(0,null)
b.b=!0
return b.a},
cI(a,b){A.ro(a,b)},
eY(a,b){b.eX(0,a)},
eX(a,b){b.ie(A.bl(a),A.ch(a))},
ro(a,b){var s,r,q=new A.lg(b),p=new A.lh(b)
if(a instanceof A.ap)a.hL(q,p,t.z)
else{s=t.z
if(t.g7.b(a))a.fs(q,p,s)
else{r=new A.ap($.a6,t.j_)
r.a=8
r.c=a
r.hL(q,p,s)}}},
f3(a){var s=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(r){e=r
d=c}}}(a,1)
return $.a6.j_(new A.lt(s),t.H,t.S,t.z)},
qT(a){return new A.dh(a,1)},
mp(){return B.e0},
mq(a){return new A.dh(a,3)},
mF(a,b){return new A.eK(a,b.h("eK<0>"))},
iE(a,b){var s=A.f5(a,"error",t.K)
return new A.dx(s,b==null?A.px(a):b)},
px(a){var s
if(t.fz.b(a)){s=a.gdc()
if(s!=null)return s}return B.b3},
kT(a,b){var s,r,q
for(s=t.j_;r=a.a,(r&4)!==0;)a=s.a(a.c)
if((r&24)!==0){q=b.dj()
b.ew(a)
A.dg(b,q)}else{q=t.F.a(b.c)
b.a=b.a&1|4
b.c=a
a.hC(q)}},
dg(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=c.a=a
for(s=t.u,r=t.F,q=t.g7;!0;){p={}
o=b.a
n=(o&16)===0
m=!n
if(a0==null){if(m&&(o&1)===0){l=s.a(b.c)
A.lq(l.a,l.b)}return}p.a=a0
k=a0.a
for(b=a0;k!=null;b=k,k=j){b.a=null
A.dg(c.a,b)
p.a=k
j=k.a}o=c.a
i=o.c
p.b=m
p.c=i
if(n){h=b.c
h=(h&1)!==0||(h&15)===8}else h=!0
if(h){g=b.b.b
if(m){o=o.b===g
o=!(o||o)}else o=!1
if(o){s.a(i)
A.lq(i.a,i.b)
return}f=$.a6
if(f!==g)$.a6=g
else f=null
b=b.c
if((b&15)===8)new A.l0(p,c,m).$0()
else if(n){if((b&1)!==0)new A.l_(p,i).$0()}else if((b&2)!==0)new A.kZ(c,p).$0()
if(f!=null)$.a6=f
b=p.c
if(q.b(b)){o=p.a.$ti
o=o.h("bb<2>").b(b)||!o.z[1].b(b)}else o=!1
if(o){q.a(b)
e=p.a.b
if((b.a&24)!==0){d=r.a(e.c)
e.c=null
a0=e.dk(d)
e.a=b.a&30|e.a&1
e.c=b.c
c.a=b
continue}else A.kT(b,e)
return}}e=p.a.b
d=r.a(e.c)
e.c=null
a0=e.dk(d)
b=p.b
o=p.c
if(!b){e.$ti.c.a(o)
e.a=8
e.c=o}else{s.a(o)
e.a=e.a&1|16
e.c=o}c.a=e
b=e}},
rP(a,b){var s
if(t.ng.b(a))return b.j_(a,t.z,t.K,t.k)
s=t.mq
if(s.b(a))return s.a(a)
throw A.d(A.m_(a,"onError",u.w))},
rO(){var s,r
for(s=$.dm;s!=null;s=$.dm){$.f0=null
r=s.b
$.dm=r
if(r==null)$.f_=null
s.a.$0()}},
rT(){$.mD=!0
try{A.rO()}finally{$.f0=null
$.mD=!1
if($.dm!=null)$.mX().$1(A.oB())}},
ou(a){var s=new A.hO(a),r=$.f_
if(r==null){$.dm=$.f_=s
if(!$.mD)$.mX().$1(A.oB())}else $.f_=r.b=s},
rS(a){var s,r,q,p=$.dm
if(p==null){A.ou(a)
$.f0=$.f_
return}s=new A.hO(a)
r=$.f0
if(r==null){s.b=p
$.dm=$.f0=s}else{q=r.b
s.b=q
$.f0=r.b=s
if(q==null)$.f_=s}},
ty(a){var s,r=null,q=$.a6
if(B.k===q){A.cJ(r,r,B.k,a)
return}s=!1
if(s){A.cJ(r,r,q,t.M.a(a))
return}A.cJ(r,r,q,t.M.a(q.i5(a)))},
tW(a,b){A.f5(a,"stream",t.K)
return new A.i6(b.h("i6<0>"))},
lq(a,b){A.rS(new A.lr(a,b))},
or(a,b,c,d,e){var s,r=$.a6
if(r===c)return d.$0()
$.a6=c
s=r
try{r=d.$0()
return r}finally{$.a6=s}},
os(a,b,c,d,e,f,g){var s,r=$.a6
if(r===c)return d.$1(e)
$.a6=c
s=r
try{r=d.$1(e)
return r}finally{$.a6=s}},
rQ(a,b,c,d,e,f,g,h,i){var s,r=$.a6
if(r===c)return d.$2(e,f)
$.a6=c
s=r
try{r=d.$2(e,f)
return r}finally{$.a6=s}},
cJ(a,b,c,d){t.M.a(d)
if(B.k!==c)d=c.i5(d)
A.ou(d)},
kI:function kI(a){this.a=a},
kH:function kH(a,b,c){this.a=a
this.b=b
this.c=c},
kJ:function kJ(a){this.a=a},
kK:function kK(a){this.a=a},
l9:function l9(){},
la:function la(a,b){this.a=a
this.b=b},
hN:function hN(a,b){this.a=a
this.b=!1
this.$ti=b},
lg:function lg(a){this.a=a},
lh:function lh(a){this.a=a},
lt:function lt(a){this.a=a},
dh:function dh(a,b){this.a=a
this.b=b},
ce:function ce(a,b){var _=this
_.a=a
_.d=_.c=_.b=null
_.$ti=b},
eK:function eK(a,b){this.a=a
this.$ti=b},
dx:function dx(a,b){this.a=a
this.b=b},
hP:function hP(){},
eJ:function eJ(a,b){this.a=a
this.$ti=b},
cG:function cG(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
ap:function ap(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
kQ:function kQ(a,b){this.a=a
this.b=b},
kY:function kY(a,b){this.a=a
this.b=b},
kU:function kU(a){this.a=a},
kV:function kV(a){this.a=a},
kW:function kW(a,b,c){this.a=a
this.b=b
this.c=c},
kS:function kS(a,b){this.a=a
this.b=b},
kX:function kX(a,b){this.a=a
this.b=b},
kR:function kR(a,b,c){this.a=a
this.b=b
this.c=c},
l0:function l0(a,b,c){this.a=a
this.b=b
this.c=c},
l1:function l1(a){this.a=a},
l_:function l_(a,b){this.a=a
this.b=b},
kZ:function kZ(a,b){this.a=a
this.b=b},
hO:function hO(a){this.a=a
this.b=null},
el:function el(){},
kd:function kd(a,b){this.a=a
this.b=b},
ke:function ke(a,b){this.a=a
this.b=b},
em:function em(){},
hu:function hu(){},
i6:function i6(a){this.$ti=a},
eS:function eS(){},
lr:function lr(a,b){this.a=a
this.b=b},
i5:function i5(){},
l7:function l7(a,b){this.a=a
this.b=b},
l8:function l8(a,b,c){this.a=a
this.b=b
this.c=c},
a7(a,b,c,d){var s
if(b==null){if(a==null)return new A.bc(c.h("@<0>").X(d).h("bc<1,2>"))
s=A.oD()}else{if(a==null)a=A.t3()
s=A.oD()}return A.qU(s,a,b,c,d)},
w(a,b,c){return b.h("@<0>").X(c).h("jt<1,2>").a(A.oH(a,new A.bc(b.h("@<0>").X(c).h("bc<1,2>"))))},
bd(a,b){return new A.bc(a.h("@<0>").X(b).h("bc<1,2>"))},
qU(a,b,c,d,e){var s=c!=null?c:new A.l4(d)
return new A.eC(a,b,s,d.h("@<0>").X(e).h("eC<1,2>"))},
m9(a){return new A.bS(a.h("bS<0>"))},
nq(a){return new A.bS(a.h("bS<0>"))},
mr(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
qV(a,b,c){var s=new A.cH(a,b,c.h("cH<0>"))
s.c=a.e
return s},
rt(a,b){return J.T(a,b)},
ru(a){return J.aA(a)},
pR(a,b,c){var s,r
if(A.mE(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.a([],t.s)
B.a.n($.b9,a)
try{A.rL(a,s)}finally{if(0>=$.b9.length)return A.c($.b9,-1)
$.b9.pop()}r=A.kf(b,t.e7.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
jo(a,b,c){var s,r
if(A.mE(a))return b+"..."+c
s=new A.a0(b)
B.a.n($.b9,a)
try{r=s
r.a=A.kf(r.a,a,", ")}finally{if(0>=$.b9.length)return A.c($.b9,-1)
$.b9.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
mE(a){var s,r
for(s=$.b9.length,r=0;r<s;++r)if(a===$.b9[r])return!0
return!1},
rL(a,b){var s,r,q,p,o,n,m,l=a.gI(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.q())return
s=A.k(l.gB())
B.a.n(b,s)
k+=s.length+2;++j}if(!l.q()){if(j<=5)return
if(0>=b.length)return A.c(b,-1)
r=b.pop()
if(0>=b.length)return A.c(b,-1)
q=b.pop()}else{p=l.gB();++j
if(!l.q()){if(j<=4){B.a.n(b,A.k(p))
return}r=A.k(p)
if(0>=b.length)return A.c(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gB();++j
for(;l.q();p=o,o=n){n=l.gB();++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return A.c(b,-1)
k-=b.pop().length+2;--j}B.a.n(b,"...")
return}}q=A.k(p)
r=A.k(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.c(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.n(b,m)
B.a.n(b,q)
B.a.n(b,r)},
fX(a,b,c){var s=A.a7(null,null,b,c)
a.b6(0,new A.jv(s,b,c))
return s},
ma(a,b){var s,r,q,p=A.m9(b)
for(s=J.ab(a),r=s.$ti.c;s.q();){q=s.d
p.n(0,b.a(q==null?r.a(q):q))}return p},
q_(a,b){var s=t.bP
return J.n1(s.a(a),s.a(b))},
mc(a){var s,r={}
if(A.mE(a))return"{...}"
s=new A.a0("")
try{B.a.n($.b9,a)
s.a+="{"
r.a=!0
a.b6(0,new A.jx(r,s))
s.a+="}"}finally{if(0>=$.b9.length)return A.c($.b9,-1)
$.b9.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
mb(a){return new A.e2(A.bC(A.q0(null),null,!1,a.h("0?")),a.h("e2<0>"))},
q0(a){return 8},
eC:function eC(a,b,c,d){var _=this
_.w=a
_.x=b
_.y=c
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=d},
l4:function l4(a){this.a=a},
bS:function bS(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
i2:function i2(a){this.a=a
this.c=this.b=null},
cH:function cH(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
dY:function dY(){},
jv:function jv(a,b,c){this.a=a
this.b=b
this.c=c},
e1:function e1(){},
t:function t(){},
e3:function e3(){},
jx:function jx(a,b){this.a=a
this.b=b},
cw:function cw(){},
jy:function jy(a){this.a=a},
e2:function e2(a,b){var _=this
_.a=a
_.d=_.c=_.b=0
_.$ti=b},
eE:function eE(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.$ti=e},
aT:function aT(){},
eg:function eg(){},
dj:function dj(){},
id:function id(){},
eP:function eP(a,b){this.a=a
this.$ti=b},
eD:function eD(){},
eH:function eH(){},
eU:function eU(){},
eV:function eV(){},
qF(a,b,c,d){var s,r
if(b instanceof Uint8Array){s=b
d=s.length
if(d-c<15)return null
r=A.qG(a,s,c,d)
if(r!=null&&a)if(r.indexOf("\ufffd")>=0)return null
return r}return null},
qG(a,b,c,d){var s=a?$.pg():$.pf()
if(s==null)return null
if(0===c&&d===b.length)return A.nP(s,b)
return A.nP(s,b.subarray(c,A.aG(c,d,b.length)))},
nP(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
n8(a,b,c,d,e,f){if(B.e.a6(f,4)!==0)throw A.d(A.ax("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.d(A.ax("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.d(A.ax("Invalid base64 padding, more than two '=' characters",a,b))},
rl(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
rk(a,b,c){var s,r,q,p=c-b,o=new Uint8Array(p)
for(s=J.Z(a),r=0;r<p;++r){q=s.k(a,b+r)
if((q&4294967040)>>>0!==0)q=255
if(!(r<p))return A.c(o,r)
o[r]=q}return o},
ks:function ks(){},
kr:function kr(){},
fm:function fm(){},
ia:function ia(){},
fn:function fn(a,b){this.a=a
this.b=b},
fp:function fp(){},
fq:function fq(){},
co:function co(){},
cp:function cp(){},
fF:function fF(){},
hG:function hG(){},
hH:function hH(a){this.a=a},
ld:function ld(a){this.a=a
this.b=16
this.c=0},
ci(a,b){var s=A.nw(a,b)
if(s!=null)return s
throw A.d(A.ax(a,null,null))},
bH(a){var s=A.qb(a)
if(s!=null)return s
throw A.d(A.ax("Invalid double",a,null))},
pK(a){if(a instanceof A.aM)return a.l(0)
return"Instance of '"+A.k_(a)+"'"},
pL(a,b){a=A.d(a)
if(a==null)a=t.K.a(a)
a.stack=b.l(0)
throw a
throw A.d("unreachable")},
bC(a,b,c,d){var s,r=c?J.m4(a,d):J.nm(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
fY(a,b,c){var s,r=A.a([],c.h("A<0>"))
for(s=J.ab(a);s.q();)B.a.n(r,c.a(s.gB()))
if(b)return r
return J.jq(r,c)},
j(a,b,c){var s
if(b)return A.nr(a,c)
s=J.jq(A.nr(a,c),c)
return s},
nr(a,b){var s,r
if(Array.isArray(a))return A.a(a.slice(0),b.h("A<0>"))
s=A.a([],b.h("A<0>"))
for(r=J.ab(a);r.q();)B.a.n(s,r.gB())
return s},
ns(a,b){var s=A.fY(a,!1,b)
s.fixed$length=Array
s.immutable$list=Array
return s},
ac(a,b,c){var s,r
if(Array.isArray(a)){s=a
r=s.length
c=A.aG(b,c,r)
return A.nx(b>0||c<r?s.slice(b,c):s)}if(t.hD.b(a))return A.qd(a,b,A.aG(b,c,a.length))
return A.qw(a,b,c)},
qv(a){return A.b5(a)},
qw(a,b,c){var s,r,q,p,o=null
if(b<0)throw A.d(A.Y(b,0,J.W(a),o,o))
s=c==null
if(!s&&c<b)throw A.d(A.Y(c,b,J.W(a),o,o))
r=J.ab(a)
for(q=0;q<b;++q)if(!r.q())throw A.d(A.Y(b,0,q,o,o))
p=[]
if(s)for(;r.q();)p.push(r.gB())
else for(q=b;q<c;++q){if(!r.q())throw A.d(A.Y(c,b,q,o,o))
p.push(r.gB())}return A.nx(p)},
au(a){return new A.ct(a,A.m5(a,!1,!0,!1,!1,!1))},
kf(a,b,c){var s=J.ab(b)
if(!s.q())return a
if(c.length===0){do a+=A.k(s.gB())
while(s.q())}else{a+=A.k(s.gB())
for(;s.q();)a=a+c+A.k(s.gB())}return a},
mk(){var s=A.qa()
if(s!=null)return A.ml(s)
throw A.d(A.S("'Uri.base' is not supported"))},
fG(a){if(typeof a=="number"||A.oo(a)||a==null)return J.bx(a)
if(typeof a=="string")return JSON.stringify(a)
return A.pK(a)},
iD(a){return new A.dw(a)},
a4(a,b){return new A.by(!1,null,b,a)},
m_(a,b,c){return new A.by(!0,a,b,c)},
iu(a,b,c){return a},
az(a){var s=null
return new A.d5(s,s,!1,s,s,a)},
k0(a,b){return new A.d5(null,null,!0,a,b,"Value not in range")},
Y(a,b,c,d,e){return new A.d5(b,c,!0,a,d,"Invalid value")},
nz(a,b,c,d){if(a<b||a>c)throw A.d(A.Y(a,b,c,d,null))
return a},
aG(a,b,c){if(0>a||a>c)throw A.d(A.Y(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.d(A.Y(b,a,c,"end",null))
return b}return c},
b6(a,b){if(a<0)throw A.d(A.Y(a,0,null,b,null))
return a},
fS(a,b,c,d,e){var s=A.a1(e==null?J.W(b):e)
return new A.fR(s,!0,a,c,"Index out of range")},
S(a){return new A.hD(a)},
hB(a){return new A.es(a)},
aH(a){return new A.d9(a)},
ar(a){return new A.fz(a)},
ax(a,b,c){return new A.dO(a,b,c)},
d1(a,b,c,d){var s,r
if(B.n===c)return A.nH(J.aA(a),J.aA(b),$.lV())
if(B.n===d){s=J.aA(a)
b=J.aA(b)
c=J.aA(c)
return A.mh(A.c7(A.c7(A.c7($.lV(),s),b),c))}s=J.aA(a)
b=J.aA(b)
c=J.aA(c)
d=J.aA(d)
r=$.lV()
return A.mh(A.c7(A.c7(A.c7(A.c7(r,s),b),c),d))},
mS(a){A.tu(a)},
oj(a,b){return 65536+((a&1023)<<10)+(b&1023)},
ml(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((B.b.E(a5,4)^58)*3|B.b.E(a5,0)^100|B.b.E(a5,1)^97|B.b.E(a5,2)^116|B.b.E(a5,3)^97)>>>0
if(s===0)return A.nN(a4<a4?B.b.v(a5,0,a4):a5,5,a3).gje()
else if(s===32)return A.nN(B.b.v(a5,5,a4),0,a3).gje()}r=A.bC(8,0,!1,t.S)
B.a.t(r,0,0)
B.a.t(r,1,-1)
B.a.t(r,2,-1)
B.a.t(r,7,-1)
B.a.t(r,3,0)
B.a.t(r,4,0)
B.a.t(r,5,a4)
B.a.t(r,6,a4)
if(A.ot(a5,0,a4,0,r)>=14)B.a.t(r,7,a4)
q=r[1]
if(q>=0)if(A.ot(a5,0,q,20,r)===20)r[7]=q
p=r[2]+1
o=r[3]
n=r[4]
m=r[5]
l=r[6]
if(l<m)m=l
if(n<p)n=m
else if(n<=q)n=q+1
if(o<p)o=n
k=r[7]<0
if(k)if(p>q+3){j=a3
k=!1}else{i=o>0
if(i&&o+1===n){j=a3
k=!1}else{if(!B.b.a9(a5,"\\",n))if(p>0)h=B.b.a9(a5,"\\",p-1)||B.b.a9(a5,"\\",p-2)
else h=!1
else h=!0
if(h){j=a3
k=!1}else{if(!(m<a4&&m===n+2&&B.b.a9(a5,"..",n)))h=m>n+2&&B.b.a9(a5,"/..",m-3)
else h=!0
if(h){j=a3
k=!1}else{if(q===4)if(B.b.a9(a5,"file",0)){if(p<=0){if(!B.b.a9(a5,"/",n)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+B.b.v(a5,n,a4)
q-=0
i=s-0
m+=i
l+=i
a4=a5.length
p=7
o=7
n=7}else if(n===m){++l
f=m+1
a5=B.b.cb(a5,n,m,"/");++a4
m=f}j="file"}else if(B.b.a9(a5,"http",0)){if(i&&o+3===n&&B.b.a9(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.b.cb(a5,o,n,"")
a4-=3
n=e}j="http"}else j=a3
else if(q===5&&B.b.a9(a5,"https",0)){if(i&&o+4===n&&B.b.a9(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.b.cb(a5,o,n,"")
a4-=3
n=e}j="https"}else j=a3
k=!0}}}}else j=a3
if(k){if(a4<a5.length){a5=B.b.v(a5,0,a4)
q-=0
p-=0
o-=0
n-=0
m-=0
l-=0}return new A.bi(a5,q,p,o,n,m,l,j)}if(j==null)if(q>0)j=A.rg(a5,0,q)
else{if(q===0)A.dk(a5,0,"Invalid empty scheme")
j=""}if(p>0){d=q+3
c=d<p?A.oa(a5,d,p-1):""
b=A.o7(a5,p,o,!1)
i=o+1
if(i<n){a=A.nw(B.b.v(a5,i,n),a3)
a0=A.mx(a==null?A.M(A.ax("Invalid port",a5,i)):a,j)}else a0=a3}else{a0=a3
b=a0
c=""}a1=A.o8(a5,n,m,a3,j,b!=null)
a2=m<l?A.o9(a5,m+1,l,a3):a3
return A.lc(j,c,b,a0,a1,a2,l<a4?A.o6(a5,l+1,a4):a3)},
qE(a){A.aq(a)
return A.mA(a,0,a.length,B.v,!1)},
qD(a,b,c){var s,r,q,p,o,n,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new A.ko(a),j=new Uint8Array(4)
for(s=b,r=s,q=0;s<c;++s){p=B.b.J(a,s)
if(p!==46){if((p^48)>9)k.$2("invalid character",s)}else{if(q===3)k.$2(m,s)
o=A.ci(B.b.v(a,r,s),null)
if(o>255)k.$2(l,r)
n=q+1
if(!(q<4))return A.c(j,q)
j[q]=o
r=s+1
q=n}}if(q!==3)k.$2(m,c)
o=A.ci(B.b.v(a,r,c),null)
if(o>255)k.$2(l,r)
if(!(q<4))return A.c(j,q)
j[q]=o
return j},
nO(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c=new A.kp(a),b=new A.kq(c,a)
if(a.length<2)c.$2("address is too short",d)
s=A.a([],t.t)
for(r=a0,q=r,p=!1,o=!1;r<a1;++r){n=B.b.J(a,r)
if(n===58){if(r===a0){++r
if(B.b.J(a,r)!==58)c.$2("invalid start colon.",r)
q=r}if(r===q){if(p)c.$2("only one wildcard `::` is allowed",r)
B.a.n(s,-1)
p=!0}else B.a.n(s,b.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)c.$2("too few parts",d)
m=q===a1
l=B.a.gp(s)
if(m&&l!==-1)c.$2("expected a part after last `:`",a1)
if(!m)if(!o)B.a.n(s,b.$2(q,a1))
else{k=A.qD(a,q,a1)
B.a.n(s,(k[0]<<8|k[1])>>>0)
B.a.n(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)c.$2("an address with a wildcard must have less than 7 parts",d)}else if(s.length!==8)c.$2("an address without a wildcard must contain exactly 8 parts",d)
j=new Uint8Array(16)
for(l=s.length,i=9-l,r=0,h=0;r<l;++r){g=s[r]
if(g===-1)for(f=0;f<i;++f){if(!(h>=0&&h<16))return A.c(j,h)
j[h]=0
e=h+1
if(!(e<16))return A.c(j,e)
j[e]=0
h+=2}else{e=B.e.cJ(g,8)
if(!(h>=0&&h<16))return A.c(j,h)
j[h]=e
e=h+1
if(!(e<16))return A.c(j,e)
j[e]=g&255
h+=2}}return j},
lc(a,b,c,d,e,f,g){return new A.eQ(a,b,c,d,e,f,g)},
o3(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
dk(a,b,c){throw A.d(A.ax(c,a,b))},
rc(a,b){var s,r,q,p,o
for(s=a.length,r=0;r<s;++r){q=a[r]
p=J.Z(q)
o=p.gm(q)
if(0>o)A.M(A.Y(0,0,p.gm(q),null,null))
if(A.ck(q,"/",0)){s=A.S("Illegal path character "+A.k(q))
throw A.d(s)}}},
o2(a,b,c){var s,r,q,p,o
for(s=A.bu(a,c,null,A.v(a).c),r=s.$ti,s=new A.J(s,s.gm(s),r.h("J<B.E>")),r=r.h("B.E");s.q();){q=s.d
if(q==null)q=r.a(q)
p=A.au('["*/:<>?\\\\|]')
o=q.length
if(A.ck(q,p,0)){s=A.S("Illegal character in path: "+q)
throw A.d(s)}}},
rd(a,b){var s
if(!(65<=a&&a<=90))s=97<=a&&a<=122
else s=!0
if(s)return
s=A.S("Illegal drive letter "+A.qv(a))
throw A.d(s)},
mx(a,b){if(a!=null&&a===A.o3(b))return null
return a},
o7(a,b,c,d){var s,r,q,p,o,n
if(a==null)return null
if(b===c)return""
if(B.b.J(a,b)===91){s=c-1
if(B.b.J(a,s)!==93)A.dk(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=A.re(a,r,s)
if(q<s){p=q+1
o=A.od(a,B.b.a9(a,"25",p)?q+3:p,s,"%25")}else o=""
A.nO(a,r,q)
return B.b.v(a,b,q).toLowerCase()+o+"]"}for(n=b;n<c;++n)if(B.b.J(a,n)===58){q=B.b.aJ(a,"%",b)
q=q>=b&&q<c?q:c
if(q<c){p=q+1
o=A.od(a,B.b.a9(a,"25",p)?q+3:p,c,"%25")}else o=""
A.nO(a,b,q)
return"["+B.b.v(a,b,q)+o+"]"}return A.ri(a,b,c)},
re(a,b,c){var s=B.b.aJ(a,"%",b)
return s>=b&&s<c?s:c},
od(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new A.a0(d):null
for(s=b,r=s,q=!0;s<c;){p=B.b.J(a,s)
if(p===37){o=A.my(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new A.a0("")
m=i.a+=B.b.v(a,r,s)
if(n)o=B.b.v(a,s,s+3)
else if(o==="%")A.dk(a,s,"ZoneID should not contain % anymore")
i.a=m+o
s+=3
r=s
q=!0}else{if(p<127){n=p>>>4
if(!(n<8))return A.c(B.J,n)
n=(B.J[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(i==null)i=new A.a0("")
if(r<s){i.a+=B.b.v(a,r,s)
r=s}q=!1}++s}else{if((p&64512)===55296&&s+1<c){l=B.b.J(a,s+1)
if((l&64512)===56320){p=(p&1023)<<10|l&1023|65536
k=2}else k=1}else k=1
j=B.b.v(a,r,s)
if(i==null){i=new A.a0("")
n=i}else n=i
n.a+=j
n.a+=A.mw(p)
s+=k
r=s}}}if(i==null)return B.b.v(a,b,c)
if(r<c)i.a+=B.b.v(a,r,c)
n=i.a
return n.charCodeAt(0)==0?n:n},
ri(a,b,c){var s,r,q,p,o,n,m,l,k,j,i
for(s=b,r=s,q=null,p=!0;s<c;){o=B.b.J(a,s)
if(o===37){n=A.my(a,s,!0)
m=n==null
if(m&&p){s+=3
continue}if(q==null)q=new A.a0("")
l=B.b.v(a,r,s)
k=q.a+=!p?l.toLowerCase():l
if(m){n=B.b.v(a,s,s+3)
j=3}else if(n==="%"){n="%25"
j=1}else j=3
q.a=k+n
s+=j
r=s
p=!0}else{if(o<127){m=o>>>4
if(!(m<8))return A.c(B.ah,m)
m=(B.ah[m]&1<<(o&15))!==0}else m=!1
if(m){if(p&&65<=o&&90>=o){if(q==null)q=new A.a0("")
if(r<s){q.a+=B.b.v(a,r,s)
r=s}p=!1}++s}else{if(o<=93){m=o>>>4
if(!(m<8))return A.c(B.F,m)
m=(B.F[m]&1<<(o&15))!==0}else m=!1
if(m)A.dk(a,s,"Invalid character")
else{if((o&64512)===55296&&s+1<c){i=B.b.J(a,s+1)
if((i&64512)===56320){o=(o&1023)<<10|i&1023|65536
j=2}else j=1}else j=1
l=B.b.v(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new A.a0("")
m=q}else m=q
m.a+=l
m.a+=A.mw(o)
s+=j
r=s}}}}if(q==null)return B.b.v(a,b,c)
if(r<c){l=B.b.v(a,r,c)
q.a+=!p?l.toLowerCase():l}m=q.a
return m.charCodeAt(0)==0?m:m},
rg(a,b,c){var s,r,q,p
if(b===c)return""
if(!A.o5(B.b.E(a,b)))A.dk(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=B.b.E(a,s)
if(q<128){p=q>>>4
if(!(p<8))return A.c(B.I,p)
p=(B.I[p]&1<<(q&15))!==0}else p=!1
if(!p)A.dk(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=B.b.v(a,b,c)
return A.rb(r?a.toLowerCase():a)},
rb(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
oa(a,b,c){if(a==null)return""
return A.eR(a,b,c,B.bm,!1,!1)},
o8(a,b,c,d,e,f){var s=e==="file",r=s||f,q=A.eR(a,b,c,B.ai,!0,!0)
if(q.length===0){if(s)return"/"}else if(r&&!B.b.Y(q,"/"))q="/"+q
return A.rh(q,e,f)},
rh(a,b,c){var s=b.length===0
if(s&&!c&&!B.b.Y(a,"/")&&!B.b.Y(a,"\\"))return A.mz(a,!s||c)
return A.bT(a)},
o9(a,b,c,d){if(a!=null)return A.eR(a,b,c,B.H,!0,!1)
return null},
o6(a,b,c){if(a==null)return null
return A.eR(a,b,c,B.H,!0,!1)},
my(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=B.b.J(a,b+1)
r=B.b.J(a,n)
q=A.lE(s)
p=A.lE(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){n=B.e.cJ(o,4)
if(!(n<8))return A.c(B.J,n)
n=(B.J[n]&1<<(o&15))!==0}else n=!1
if(n)return A.b5(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return B.b.v(a,b,b+3).toUpperCase()
return null},
mw(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
if(a<128){s=new Uint8Array(3)
s[0]=37
s[1]=B.b.E(k,a>>>4)
s[2]=B.b.E(k,a&15)}else{if(a>2047)if(a>65535){r=240
q=4}else{r=224
q=3}else{r=192
q=2}p=3*q
s=new Uint8Array(p)
for(o=0;--q,q>=0;r=128){n=B.e.ly(a,6*q)&63|r
if(!(o<p))return A.c(s,o)
s[o]=37
m=o+1
l=B.b.E(k,n>>>4)
if(!(m<p))return A.c(s,m)
s[m]=l
l=o+2
m=B.b.E(k,n&15)
if(!(l<p))return A.c(s,l)
s[l]=m
o+=3}}return A.ac(s,0,null)},
eR(a,b,c,d,e,f){var s=A.oc(a,b,c,d,e,f)
return s==null?B.b.v(a,b,c):s},
oc(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i=null
for(s=!e,r=b,q=r,p=i;r<c;){o=B.b.J(a,r)
if(o<127){n=o>>>4
if(!(n<8))return A.c(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=A.my(a,r,!1)
if(m==null){r+=3
continue}if("%"===m){m="%25"
l=1}else l=3}else if(o===92&&f){m="/"
l=1}else{if(s)if(o<=93){n=o>>>4
if(!(n<8))return A.c(B.F,n)
n=(B.F[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){A.dk(a,r,"Invalid character")
l=i
m=l}else{if((o&64512)===55296){n=r+1
if(n<c){k=B.b.J(a,n)
if((k&64512)===56320){o=(o&1023)<<10|k&1023|65536
l=2}else l=1}else l=1}else l=1
m=A.mw(o)}}if(p==null){p=new A.a0("")
n=p}else n=p
j=n.a+=B.b.v(a,q,r)
n.a=j+A.k(m)
if(typeof l!=="number")return A.bw(l)
r+=l
q=r}}if(p==null)return i
if(q<c)p.a+=B.b.v(a,q,c)
s=p.a
return s.charCodeAt(0)==0?s:s},
ob(a){if(B.b.Y(a,"."))return!0
return B.b.aj(a,"/.")!==-1},
bT(a){var s,r,q,p,o,n,m
if(!A.ob(a))return a
s=A.a([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(J.T(n,"..")){m=s.length
if(m!==0){if(0>=m)return A.c(s,-1)
s.pop()
if(s.length===0)B.a.n(s,"")}p=!0}else if("."===n)p=!0
else{B.a.n(s,n)
p=!1}}if(p)B.a.n(s,"")
return B.a.aB(s,"/")},
mz(a,b){var s,r,q,p,o,n
if(!A.ob(a))return!b?A.o4(a):a
s=A.a([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n)if(s.length!==0&&B.a.gp(s)!==".."){if(0>=s.length)return A.c(s,-1)
s.pop()
p=!0}else{B.a.n(s,"..")
p=!1}else if("."===n)p=!0
else{B.a.n(s,n)
p=!1}}r=s.length
if(r!==0)if(r===1){if(0>=r)return A.c(s,0)
r=s[0].length===0}else r=!1
else r=!0
if(r)return"./"
if(p||B.a.gp(s)==="..")B.a.n(s,"")
if(!b){if(0>=s.length)return A.c(s,0)
B.a.t(s,0,A.o4(s[0]))}return B.a.aB(s,"/")},
o4(a){var s,r,q,p=a.length
if(p>=2&&A.o5(B.b.E(a,0)))for(s=1;s<p;++s){r=B.b.E(a,s)
if(r===58)return B.b.v(a,0,s)+"%3A"+B.b.aq(a,s+1)
if(r<=127){q=r>>>4
if(!(q<8))return A.c(B.I,q)
q=(B.I[q]&1<<(r&15))===0}else q=!0
if(q)break}return a},
rj(a,b){if(a.nA("package")&&a.c==null)return A.ov(b,0,b.length)
return-1},
oe(a){var s,r,q,p=a.gfl(),o=p.length
if(o>0&&J.W(p[0])===2&&J.n0(p[0],1)===58){if(0>=o)return A.c(p,0)
A.rd(J.n0(p[0],0),!1)
A.o2(p,!1,1)
s=!0}else{A.o2(p,!1,0)
s=!1}r=a.gdJ()&&!s?""+"\\":""
if(a.gcX()){q=a.gbh(a)
if(q.length!==0)r=r+"\\"+q+"\\"}r=A.kf(r,p,"\\")
o=s&&o===1?r+"\\":r
return o.charCodeAt(0)==0?o:o},
rf(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=B.b.E(a,b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw A.d(A.a4("Invalid URL encoding",null))}}return s},
mA(a,b,c,d,e){var s,r,q,p,o=b
while(!0){if(!(o<c)){s=!0
break}r=B.b.E(a,o)
if(r<=127)if(r!==37)q=!1
else q=!0
else q=!0
if(q){s=!1
break}++o}if(s){if(B.v!==d)q=!1
else q=!0
if(q)return B.b.v(a,b,c)
else p=new A.a5(B.b.v(a,b,c))}else{p=A.a([],t.t)
for(q=a.length,o=b;o<c;++o){r=B.b.E(a,o)
if(r>127)throw A.d(A.a4("Illegal percent encoding in URI",null))
if(r===37){if(o+3>q)throw A.d(A.a4("Truncated URI",null))
B.a.n(p,A.rf(a,o+1))
o+=2}else B.a.n(p,r)}}return d.dA(0,p)},
o5(a){var s=a|32
return 97<=s&&s<=122},
nN(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.a([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=B.b.E(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.d(A.ax(k,a,r))}}if(q<0&&r>b)throw A.d(A.ax(k,a,r))
for(;p!==44;){B.a.n(j,r);++r
for(o=-1;r<s;++r){p=B.b.E(a,r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)B.a.n(j,o)
else{n=B.a.gp(j)
if(p!==44||r!==n+7||!B.b.a9(a,"base64",n+1))throw A.d(A.ax("Expecting '='",a,r))
break}}B.a.n(j,r)
m=r+1
if((j.length&1)===1)a=B.aW.nL(a,m,s)
else{l=A.oc(a,m,s,B.H,!0,!1)
if(l!=null)a=B.b.cb(a,m,s,l)}return new A.kn(a,j,c)},
rr(){var s,r,q,p,o,n,m="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",l=".",k=":",j="/",i="\\",h="?",g="#",f="/\\",e=A.a(new Array(22),t.bs)
for(s=0;s<22;++s)e[s]=new Uint8Array(96)
r=new A.lk(e)
q=new A.ll()
p=new A.lm()
o=t.hb.a(r.$2(0,225))
q.$3(o,m,1)
q.$3(o,l,14)
q.$3(o,k,34)
q.$3(o,j,3)
q.$3(o,i,227)
q.$3(o,h,172)
q.$3(o,g,205)
n=r.$2(14,225)
q.$3(n,m,1)
q.$3(n,l,15)
q.$3(n,k,34)
q.$3(n,f,234)
q.$3(n,h,172)
q.$3(n,g,205)
n=r.$2(15,225)
q.$3(n,m,1)
q.$3(n,"%",225)
q.$3(n,k,34)
q.$3(n,j,9)
q.$3(n,i,233)
q.$3(n,h,172)
q.$3(n,g,205)
n=r.$2(1,225)
q.$3(n,m,1)
q.$3(n,k,34)
q.$3(n,j,10)
q.$3(n,i,234)
q.$3(n,h,172)
q.$3(n,g,205)
n=r.$2(2,235)
q.$3(n,m,139)
q.$3(n,j,131)
q.$3(n,i,131)
q.$3(n,l,146)
q.$3(n,h,172)
q.$3(n,g,205)
n=r.$2(3,235)
q.$3(n,m,11)
q.$3(n,j,68)
q.$3(n,i,68)
q.$3(n,l,18)
q.$3(n,h,172)
q.$3(n,g,205)
n=r.$2(4,229)
q.$3(n,m,5)
p.$3(n,"AZ",229)
q.$3(n,k,102)
q.$3(n,"@",68)
q.$3(n,"[",232)
q.$3(n,j,138)
q.$3(n,i,138)
q.$3(n,h,172)
q.$3(n,g,205)
n=r.$2(5,229)
q.$3(n,m,5)
p.$3(n,"AZ",229)
q.$3(n,k,102)
q.$3(n,"@",68)
q.$3(n,j,138)
q.$3(n,i,138)
q.$3(n,h,172)
q.$3(n,g,205)
n=r.$2(6,231)
p.$3(n,"19",7)
q.$3(n,"@",68)
q.$3(n,j,138)
q.$3(n,i,138)
q.$3(n,h,172)
q.$3(n,g,205)
n=r.$2(7,231)
p.$3(n,"09",7)
q.$3(n,"@",68)
q.$3(n,j,138)
q.$3(n,i,138)
q.$3(n,h,172)
q.$3(n,g,205)
q.$3(r.$2(8,8),"]",5)
n=r.$2(9,235)
q.$3(n,m,11)
q.$3(n,l,16)
q.$3(n,f,234)
q.$3(n,h,172)
q.$3(n,g,205)
n=r.$2(16,235)
q.$3(n,m,11)
q.$3(n,l,17)
q.$3(n,f,234)
q.$3(n,h,172)
q.$3(n,g,205)
n=r.$2(17,235)
q.$3(n,m,11)
q.$3(n,j,9)
q.$3(n,i,233)
q.$3(n,h,172)
q.$3(n,g,205)
n=r.$2(10,235)
q.$3(n,m,11)
q.$3(n,l,18)
q.$3(n,f,234)
q.$3(n,h,172)
q.$3(n,g,205)
n=r.$2(18,235)
q.$3(n,m,11)
q.$3(n,l,19)
q.$3(n,f,234)
q.$3(n,h,172)
q.$3(n,g,205)
n=r.$2(19,235)
q.$3(n,m,11)
q.$3(n,f,234)
q.$3(n,h,172)
q.$3(n,g,205)
n=r.$2(11,235)
q.$3(n,m,11)
q.$3(n,j,10)
q.$3(n,f,234)
q.$3(n,h,172)
q.$3(n,g,205)
n=r.$2(12,236)
q.$3(n,m,12)
q.$3(n,h,12)
q.$3(n,g,205)
n=r.$2(13,237)
q.$3(n,m,13)
q.$3(n,h,13)
p.$3(r.$2(20,245),"az",21)
n=r.$2(21,245)
p.$3(n,"az",21)
p.$3(n,"09",21)
q.$3(n,"+-.",21)
return e},
ot(a,b,c,d,e){var s,r,q,p,o=$.pi()
for(s=b;s<c;++s){if(!(d>=0&&d<o.length))return A.c(o,d)
r=o[d]
q=B.b.E(a,s)^96
p=r[q>95?31:q]
d=p&31
B.a.t(e,p>>>5,s)}return d},
nY(a){if(a.b===7&&B.b.Y(a.a,"package")&&a.c<=0)return A.ov(a.a,a.e,a.f)
return-1},
ov(a,b,c){var s,r,q
for(s=b,r=0;s<c;++s){q=B.b.J(a,s)
if(q===47)return r!==0?s:-1
if(q===37||q===58)return-1
r|=q^46}return-1},
rp(a,b,c){var s,r,q,p,o,n,m
for(s=a.length,r=0,q=0;q<s;++q){p=B.b.E(a,q)
o=B.b.E(b,c+q)
n=p^o
if(n!==0){if(n===32){m=o|n
if(97<=m&&m<=122){r=32
continue}}return-1}}return r},
kN:function kN(){},
a_:function a_(){},
dw:function dw(a){this.a=a},
c9:function c9(){},
h4:function h4(){},
by:function by(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d5:function d5(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fR:function fR(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
hD:function hD(a){this.a=a},
es:function es(a){this.a=a},
d9:function d9(a){this.a=a},
fz:function fz(a){this.a=a},
h9:function h9(){},
ek:function ek(){},
fB:function fB(a){this.a=a},
i_:function i_(a){this.a=a},
dO:function dO(a,b,c){this.a=a
this.b=b
this.c=c},
i:function i(){},
Q:function Q(){},
be:function be(a,b,c){this.a=a
this.b=b
this.$ti=c},
ak:function ak(){},
D:function D(){},
i9:function i9(){},
hk:function hk(a){this.a=a},
hj:function hj(a){var _=this
_.a=a
_.c=_.b=0
_.d=-1},
a0:function a0(a){this.a=a},
ko:function ko(a){this.a=a},
kp:function kp(a){this.a=a},
kq:function kq(a,b){this.a=a
this.b=b},
eQ:function eQ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.y=_.x=_.w=$},
kn:function kn(a,b,c){this.a=a
this.b=b
this.c=c},
lk:function lk(a){this.a=a},
ll:function ll(){},
lm:function lm(){},
bi:function bi(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
hR:function hR(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.y=_.x=_.w=$},
q6(a){var s=new Path2D(a)
s.toString
return s},
kO(a,b,c,d,e){var s=A.ox(new A.kP(c),t.fq),r=s!=null
if(r&&!0){t.Q.a(s)
if(r)J.pl(a,b,s,!1)}return new A.eA(a,b,s,!1,e.h("eA<0>"))},
ox(a,b){var s=$.a6
if(s===B.k)return a
return s.mn(a,b)},
u:function u(){},
fh:function fh(){},
fj:function fj(){},
cm:function cm(){},
dA:function dA(){},
bz:function bz(){},
iO:function iO(){},
dE:function dE(){},
p:function p(){},
q:function q(){},
aN:function aN(){},
fJ:function fJ(){},
b4:function b4(){},
aZ:function aZ(){},
hb:function hb(){},
hm:function hm(){},
bv:function bv(){},
dd:function dd(){},
kG:function kG(a){this.a=a},
ex:function ex(){},
m2:function m2(a,b){this.a=a
this.$ti=b},
ez:function ez(){},
hW:function hW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
eA:function eA(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
kP:function kP(a){this.a=a},
oV(a,b,c){A.ii(c,t.p,"T","min")
return Math.min(c.a(a),c.a(b))},
oU(a,b,c){A.ii(c,t.p,"T","max")
return Math.max(c.a(a),c.a(b))},
i4:function i4(){this.b=this.a=0},
cA:function cA(a,b,c){this.a=a
this.b=b
this.$ti=c},
aB:function aB(a,b){this.a=a
this.$ti=b},
jp:function jp(a){this.a=a},
eB:function eB(a,b){this.a=a
this.b=null
this.$ti=b},
ol(a,b){var s,r,q,p,o,n,m=null
for(s=a.length,r=!b,q=m,p=0;p<s;++p){switch(B.b.E(a,p)){case 34:o=r?'\\"':m
break
case 39:o=b?"\\'":m
break
default:o=m}n=o==null
if(!n&&q==null)q=new A.a0(B.b.v(a,0,p))
if(q!=null)q.a+=n?a[p]:o}if(q==null)s=a
else{s=q.a
s=s.charCodeAt(0)==0?s:s}return s},
mj(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=a.length,r=0;r<s;++r){q=a[r]
p=A.aq(q.k(0,"value"))
o=p.length
if(e===o){for(n=d,m=!0,l=0;l<o;++l,n=j){k=B.b.E(p,l)
j=n+1
i=B.b.J(c,n)
if(m)if(i!==k){h=i>=65&&i<=90&&i+32===k
m=h}else m=!0
else m=!1
if(!m)break}if(m)return A.a1(q.k(0,b))}}return-1},
qA(a){var s,r
if(a===24)return"%"
else for(s=0;s<26;++s){r=B.ac[s]
if(A.a1(r.k(0,"unit"))===a)return A.ig(r.k(0,"value"))}return"<BAD UNIT>"},
nJ(a){switch(a){case 0:return"ERROR"
case 1:return"end of file"
case 2:return"("
case 3:return")"
case 4:return"["
case 5:return"]"
case 6:return"{"
case 7:return"}"
case 8:return"."
case 9:return";"
case 10:return"@"
case 11:return"#"
case 12:return"+"
case 13:return">"
case 14:return"~"
case 15:return"*"
case 16:return"|"
case 17:return":"
case 18:return"_"
case 19:return","
case 20:return" "
case 21:return"\t"
case 22:return"\n"
case 23:return"\r"
case 24:return"%"
case 25:return"'"
case 26:return'"'
case 27:return"/"
case 28:return"="
case 30:return"^"
case 31:return"$"
case 32:return"<"
case 33:return"!"
case 34:return"-"
case 35:return"\\"
default:throw A.d("Unknown TOKEN")}},
nI(a){switch(a){case 641:case 642:case 643:case 644:case 645:case 646:case 647:case 648:case 649:case 650:case 651:case 652:case 653:case 654:case 655:case 656:case 600:case 601:case 602:case 603:case 604:case 605:case 606:case 607:case 608:case 609:case 610:case 612:case 613:case 614:case 615:case 617:return!0
default:return!1}},
hA(a){var s
if(!(a>=97&&a<=122))s=a>=65&&a<=90||a===95||a>=160||a===92
else s=!0
return s},
l6:function l6(a){this.a=a
this.c=null
this.d=$},
bg:function bg(a,b){this.a=a
this.b=b},
fN:function fN(a,b,c){this.c=a
this.a=b
this.b=c},
ki:function ki(a,b,c,d,e,f,g,h,i){var _=this
_.w=a
_.x=b
_.y=c
_.z=d
_.Q=e
_.a=f
_.b=g
_.c=h
_.e=_.d=!1
_.f=i
_.r=0},
kj:function kj(){},
d_:function d_(a){this.b=a},
cZ:function cZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jJ:function jJ(a,b,c){this.a=a
this.b=b
this.c=c},
q8(a,b){return new A.jZ(b)},
jZ:function jZ(a){this.w=a},
bJ:function bJ(a,b){this.b=a
this.a=b},
cb:function cb(a){this.a=a},
hx:function hx(a){this.a=a},
h2:function h2(a){this.a=a},
hn:function hn(a,b){this.b=a
this.a=b},
c4:function c4(a,b){this.b=a
this.a=b},
eh:function eh(a,b,c){this.b=a
this.c=b
this.a=c},
aU:function aU(){},
cq:function cq(a,b){this.b=a
this.a=b},
h_:function h_(a,b,c){this.d=a
this.b=b
this.a=c},
fo:function fo(a,b,c,d){var _=this
_.d=a
_.e=b
_.b=c
_.a=d},
fM:function fM(a,b){this.b=a
this.a=b},
fv:function fv(a,b){this.b=a
this.a=b},
d3:function d3(a,b){this.b=a
this.a=b},
d4:function d4(a,b,c){this.d=a
this.b=b
this.a=c},
eb:function eb(a,b,c){this.f=a
this.b=b
this.a=c},
hg:function hg(a,b,c){this.d=a
this.b=b
this.a=c},
d8:function d8(a,b){this.b=a
this.a=b},
h3:function h3(a,b,c){this.d=a
this.b=b
this.a=c},
h8:function h8(a){this.a=a},
h7:function h7(a){this.a=a},
af:function af(a,b,c){this.c=a
this.d=b
this.a=c},
h6:function h6(a,b,c){this.c=a
this.d=b
this.a=c},
bh:function bh(){},
fW:function fW(a,b,c,d){var _=this
_.f=a
_.c=b
_.d=c
_.a=d},
hd:function hd(a,b,c){this.c=a
this.d=b
this.a=c},
fE:function fE(a,b,c){this.c=a
this.d=b
this.a=c},
fH:function fH(a,b,c){this.c=a
this.d=b
this.a=c},
fi:function fi(a,b,c,d){var _=this
_.f=a
_.c=b
_.d=c
_.a=d},
hy:function hy(a,b,c,d){var _=this
_.f=a
_.c=b
_.d=c
_.a=d},
fL:function fL(a,b,c,d){var _=this
_.f=a
_.c=b
_.d=c
_.a=d},
fK:function fK(a,b,c){this.c=a
this.d=b
this.a=c},
hi:function hi(a,b,c,d){var _=this
_.f=a
_.c=b
_.d=c
_.a=d},
fu:function fu(a,b,c,d){var _=this
_.f=a
_.c=b
_.d=c
_.a=d},
hh:function hh(a,b,c,d){var _=this
_.f=a
_.c=b
_.d=c
_.a=d},
hI:function hI(a,b,c,d){var _=this
_.f=a
_.c=b
_.d=c
_.a=d},
P:function P(){},
aj:function aj(){},
hJ:function hJ(){},
nh(){return new A.dD(A.a7(null,null,t.K,t.N))},
ni(a,b,c){return new A.fC(a,b,c,A.a7(null,null,t.K,t.N))},
mi(a){return new A.bQ(a,A.a7(null,null,t.K,t.N))},
m1(a,b){return new A.U(b,a,A.a7(null,null,t.K,t.N))},
ng(a){return new A.fy(a,A.a7(null,null,t.K,t.N))},
aw:function aw(a,b,c){this.a=a
this.b=b
this.c=c},
i3:function i3(){},
l5:function l5(){},
hV:function hV(){},
ag:function ag(){},
dD:function dD(a){var _=this
_.a=null
_.b=a
_.d=_.c=$
_.e=null},
fC:function fC(a,b,c,d){var _=this
_.w=a
_.x=b
_.y=c
_.a=null
_.b=d
_.d=_.c=$
_.e=null},
bQ:function bQ(a,b){var _=this
_.w=a
_.a=null
_.b=b
_.d=_.c=$
_.e=null},
U:function U(a,b,c){var _=this
_.w=a
_.x=b
_.a=null
_.b=c
_.d=_.c=$
_.e=null},
fy:function fy(a,b){var _=this
_.w=a
_.a=null
_.b=b
_.d=_.c=$
_.e=null},
ah:function ah(a,b){this.b=a
this.a=b},
fI:function fI(a){this.a=a},
iU:function iU(){},
hS:function hS(){},
hT:function hT(){},
hU:function hU(){},
hX:function hX(){},
hY:function hY(){},
i0:function i0(){},
ji:function ji(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=!1
_.r="no quirks"
_.w=null
_.x=$
_.y=null
_.z=!0
_.ok=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=_.ch=_.ay=_.ax=_.at=_.as=_.Q=$},
a3:function a3(){},
jY:function jY(a){this.a=a},
jX:function jX(a){this.a=a},
bq:function bq(a,b){this.a=a
this.b=b},
fr:function fr(a,b){this.a=a
this.b=b},
dz:function dz(a,b){this.a=a
this.b=b},
fP:function fP(a,b){this.a=a
this.b=b},
fg:function fg(a,b){this.a=a
this.b=b},
cT:function cT(a,b){this.c=!1
this.a=a
this.b=b},
jm:function jm(a){this.a=a},
jl:function jl(a){this.a=a},
hw:function hw(a,b){this.a=a
this.b=b},
dV:function dV(a,b){this.a=a
this.b=b},
cV:function cV(a,b,c){var _=this
_.c=null
_.d=a
_.a=b
_.b=c},
jn:function jn(){},
dQ:function dQ(a,b){this.a=a
this.b=b},
dR:function dR(a,b){this.a=a
this.b=b},
cr:function cr(a,b){this.a=a
this.b=b},
dT:function dT(a,b){this.a=a
this.b=b},
cU:function cU(a,b){this.a=a
this.b=b},
dU:function dU(a,b){this.a=a
this.b=b},
fQ:function fQ(a,b){this.a=a
this.b=b},
fO:function fO(a,b){this.a=a
this.b=b},
fe:function fe(a,b){this.a=a
this.b=b},
dS:function dS(a,b){this.a=a
this.b=b},
ff:function ff(a,b){this.a=a
this.b=b},
fc:function fc(a,b){this.a=a
this.b=b},
fd:function fd(a,b){this.a=a
this.b=b},
aS:function aS(a,b,c){this.a=a
this.b=b
this.c=c},
q4(a){switch(a){case"http://www.w3.org/1999/xhtml":return"html"
case"http://www.w3.org/1998/Math/MathML":return"math"
case"http://www.w3.org/2000/svg":return"svg"
case"http://www.w3.org/1999/xlink":return"xlink"
case"http://www.w3.org/XML/1998/namespace":return"xml"
case"http://www.w3.org/2000/xmlns/":return"xmlns"
default:return null}},
a2(a){A.ig(a)
if(a==null)return!1
return A.mP(B.b.E(a,0))},
mP(a){switch(a){case 9:case 10:case 12:case 13:case 32:return!0}return!1},
aJ(a){var s,r
if(a==null)return!1
s=B.b.E(a,0)
if(!(s>=97&&s<=122))r=s>=65&&s<=90
else r=!0
return r},
lM(a){var s
if(a==null)return!1
s=B.b.E(a,0)
return s>=48&&s<58},
oS(a){if(a==null)return!1
switch(B.b.E(a,0)){case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:case 65:case 66:case 67:case 68:case 69:case 70:case 97:case 98:case 99:case 100:case 101:case 102:return!0}return!1},
pw(a){A.a1(a)
return a>=65&&a<=90?a+97-65:a},
k1:function k1(){},
fD:function fD(a){this.a=a},
hQ:function hQ(){},
mn(a){return new A.df()},
iS:function iS(a){this.a=a
this.b=-1},
iK:function iK(a){this.a=a},
df:function df(){},
rD(a){if(1<=a&&a<=8)return!0
if(14<=a&&a<=31)return!0
if(127<=a&&a<=159)return!0
if(55296<=a&&a<=57343)return!0
if(64976<=a&&a<=65007)return!0
switch(a){case 11:case 65534:case 65535:case 131070:case 131071:case 196606:case 196607:case 262142:case 262143:case 327678:case 327679:case 393214:case 393215:case 458750:case 458751:case 524286:case 524287:case 589822:case 589823:case 655358:case 655359:case 720894:case 720895:case 786430:case 786431:case 851966:case 851967:case 917502:case 917503:case 983038:case 983039:case 1048574:case 1048575:case 1114110:case 1114111:return!0}return!1},
t1(a){var s=A.au("[\t-\r -/:-@[-`{-~]")
if(a==null)return null
return B.cK.k(0,A.bk(a,s,"").toLowerCase())},
rs(a,b){switch(a){case"ascii":return new A.a5(B.aV.dA(0,b))
case"utf-8":return new A.a5(B.v.dA(0,b))
default:throw A.d(A.a4("Encoding "+a+" not supported",null))}},
jh:function jh(a,b,c,d){var _=this
_.a=a
_.b=!0
_.d=b
_.f=_.e=null
_.r=c
_.w=null
_.x=d
_.y=0},
aQ:function aQ(){},
nD(a){switch(a){case"before":case"after":case"first-line":case"first-letter":return!0
default:return!1}},
qn(a){var s,r
for(;a!=null;){s=a.b.k(0,"lang")
if(s!=null)return s
r=a.a
a=r instanceof A.U?r:null}return null},
ef:function ef(){this.a=null},
k9:function k9(){},
ka:function ka(){},
k8:function k8(){},
k7:function k7(a){this.a=a},
aC(a,b,c,d){return new A.c6(b==null?A.a7(null,null,t.K,t.N):b,c,a,d)},
b0:function b0(){},
bP:function bP(){},
c6:function c6(a,b,c,d){var _=this
_.e=a
_.r=!1
_.w=b
_.b=c
_.c=d
_.a=null},
I:function I(a,b){this.b=a
this.c=b
this.a=null},
b7:function b7(){},
l:function l(a,b,c){var _=this
_.e=a
_.b=b
_.c=c
_.a=null},
E:function E(a,b){this.b=a
this.c=b
this.a=null},
cC:function cC(a,b){this.b=a
this.c=b
this.a=null},
cP:function cP(a,b){this.b=a
this.c=b
this.a=null},
dC:function dC(a){var _=this
_.c=_.b=null
_.d=""
_.e=a
_.a=null},
en:function en(){this.a=null
this.b=$},
lA:function lA(){},
lz:function lz(){},
dP:function dP(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=null
_.r=e
_.w=null
_.x=$
_.y=f
_.z=$
_.at=_.as=_.Q=null
_.ax=g
_.ay=h},
jj:function jj(a){this.a=a},
jk:function jk(a){this.a=a},
rN(a,b){var s,r,q=a.a
if(q!==b.a)return!1
if(q===0)return!0
for(q=A.np(a,a.r,A.z(a).c);q.q();){s=q.d
r=b.k(0,s)
if(r==null&&!b.ai(s))return!1
if(!J.T(a.k(0,s),r))return!1}return!0},
nK(a,b,c,d){var s,r,q,p,o=a.gak(a)
if(d==null)if(!o.gan(o)&&o.gp(o) instanceof A.bQ){s=t.oI.a(o.gp(o))
s.i0(0,b)
if(c!=null){r=c.a
q=s.e
s.e=r.em(0,A.bX(q.a,q.b).b,A.bX(r,c.c).b)}}else{r=A.mi(b)
r.e=c
o.n(0,r)}else{p=o.aj(o,d)
if(p>0){r=p-1
q=o.a
if(!(r<q.length))return A.c(q,r)
r=q[r] instanceof A.bQ}else r=!1
if(r){r=p-1
q=o.a
if(!(r>=0&&r<q.length))return A.c(q,r)
t.oI.a(q[r]).i0(0,b)}else{r=A.mi(b)
r.e=c
o.bB(0,p,r)}}},
fb:function fb(a){this.a=a},
kk:function kk(a,b,c){var _=this
_.a=a
_.b=$
_.c=b
_.d=c
_.f=_.e=null
_.r=!1},
mU(a,b,c,d){var s
if(c==null)c=a.length
if(c<b)c=b
s=a.length
return B.a.b4(a,b,c>s?s:c)},
mG(a){var s,r
for(s=a.length,r=0;r<s;++r)if(!A.mP(B.b.E(a,r)))return!1
return!0},
oW(a,b){var s,r=a.length
if(r===b)return a
b-=r
for(s=0,r="";s<b;++s)r+="0"
r+=a
return r.charCodeAt(0)==0?r:r},
tb(a,b){var s={}
s.a=a
if(b==null)return a
b.b6(0,new A.lC(s))
return s.a},
o:function o(a,b,c){this.a=a
this.b=b
this.$ti=c},
lC:function lC(a){this.a=a},
iG:function iG(a){var _=this
_.c=14.222222222222221
_.d=8
_.f=a
_.r=$},
iH:function iH(){},
iI:function iI(){},
ds:function ds(){},
fa:function fa(){},
ir:function ir(a){this.a=a},
is:function is(a){this.a=a},
it:function it(a){this.a=a},
fs:function fs(a,b,c,d,e,f,g,h){var _=this
_.d=a
_.e=b
_.f=0
_.r=c
_.w=!1
_.x=d
_.y=e
_.z=f
_.Q=g
_.as=h
_.b=_.a=$},
me(a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a9.bz,a5=a9.dF,a6=A.j(a9.ix,!0,t.W),a7=a9.ne,a8=a9.f9
if(a8!=null){s=A.v(a8)
s=A.j(new A.G(a8,s.h("ay(1)").a(new A.jU()),s.h("G<1,ay>")),!0,t.f)
a8=s}else a8=a3
s=a9.fa
if(s!=null){r=A.v(s)
r=A.j(new A.G(s,r.h("ay(1)").a(new A.jV()),r.h("G<1,ay>")),!0,t.f)
s=r}else s=a3
r=a9.a7
q=a9.af
A.b_(a3,0,B.c,a3,0)
p=a9.fx
o=a9.fy
n=A.c8(a9.go)
m=a9.id
m=m==null?a3:A.aF(m)
l=a9.k1
l=l==null?a3:A.aF(l)
k=a9.ax
k=k==null?a3:J.x(k,new A.a8(),t.G)
if(k==null)k=A.a([],t.O)
j=t.G
k=A.j(k,!0,j)
i=a9.ay
i=i==null?a3:J.x(i,new A.a9(),j)
i=A.j(i==null?A.a([],t.O):i,!0,j)
h=a9.ch
h=h==null?a3:J.x(h,new A.aa(),j)
j=A.j(h==null?A.a([],t.O):h,!0,j)
h=a9.w
g=a9.x
f=a9.a
f===$&&A.b("color")
f=f.u()
e=a9.b
e===$&&A.b("name")
a9.c===$&&A.b("target")
d=A.a([],t.r)
c=a9.d
c===$&&A.b("submobjects")
b=c.length
a=0
for(;a<c.length;c.length===b||(0,A.e)(c),++a)d.push(c[a].u())
c=a9.f
c===$&&A.b("updatingSuspended")
b=A.a([],t.l)
a0=a9.r
a0===$&&A.b("points")
a1=a0.length
a=0
for(;a<a0.length;a0.length===a1||(0,A.e)(a0),++a){a2=a0[a]
b.push(new A.f(a2.a,a2.b,a2.c))}return new A.e9(a9.iv,a4,a9.f8,a9.c4,a9.c5,a9.iw,a5,a6,!1,a9.nb,a9.iy,a9.nc,a9.nd,new A.f(a7.a,a7.b,a7.c),a9.nf,!0,a9.ng,a9.nh,a9.ni,a9.nj,a8,s,a9.y2,a9.ac,r,q,p,new A.f(o.a,o.b,o.c),n,m,l,h,g,a9.y,a9.z,!1,a9.as,a9.at,k,i,j,f,e,a3,d,c,b)},
py(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a0.n8,d=A.m0(a0.iu),c=A.m0(a0.n9),b=A.m0(a0.na),a=a0.ax
a=a==null?f:J.x(a,new A.a8(),t.G)
if(a==null)a=A.a([],t.O)
s=t.G
a=A.j(a,!0,s)
r=a0.ay
r=r==null?f:J.x(r,new A.a9(),s)
r=A.j(r==null?A.a([],t.O):r,!0,s)
q=a0.ch
q=q==null?f:J.x(q,new A.aa(),s)
s=A.j(q==null?A.a([],t.O):q,!0,s)
q=a0.w
p=a0.x
o=a0.a
o===$&&A.b("color")
o=o.u()
n=a0.b
n===$&&A.b("name")
a0.c===$&&A.b("target")
m=A.a([],t.r)
l=a0.d
l===$&&A.b("submobjects")
k=l.length
j=0
for(;j<l.length;l.length===k||(0,A.e)(l),++j)m.push(l[j].u())
l=a0.f
l===$&&A.b("updatingSuspended")
k=A.a([],t.l)
i=a0.r
i===$&&A.b("points")
h=i.length
j=0
for(;j<i.length;i.length===h||(0,A.e)(i),++j){g=i[j]
k.push(new A.f(g.a,g.b,g.c))}e=new A.dy(new A.f(e.a,e.b,e.c),d,c,b,a0.to,a0.x1,a0.x2,a0.xr,q,p,a0.y,a0.z,!1,a0.as,a0.at,a,r,s,o,n,f,m,l,k)
d=a0.cU
d===$&&A.b("xAxis")
d=A.me(d)
e.cU=d
c=a0.cV
c===$&&A.b("yAxis")
c=A.me(c)
e.cV=c
A.mm(A.a([d,c],t.U))
return e},
n7(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0){return new A.aK(a,f,c,g,a0,e,q,p,h,n,d,m,j,k,l,i,s,r,b,o)},
m0(a){return new A.aK(a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.w,a.x,a.y,a.z,a.Q,a.as,a.at,a.ax,a.ay,a.ch,a.CW,a.cx,a.cy)},
e9:function e9(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7){var _=this
_.iv=a
_.bz=b
_.f8=c
_.c4=d
_.c5=e
_.iw=f
_.dF=g
_.ix=h
_.oO=i
_.nb=j
_.iy=k
_.nc=l
_.nd=m
_.ne=n
_.nf=o
_.oP=p
_.ng=q
_.nh=r
_.ni=s
_.nj=a0
_.f9=a1
_.fa=a2
_.y2=a3
_.ac=a4
_.a7=a5
_.af=a6
_.fx=a7
_.fy=a8
_.go=a9
_.id=b0
_.k1=b1
_.w=b2
_.x=b3
_.y=b4
_.z=b5
_.Q=b6
_.as=b7
_.at=b8
_.ax=b9
_.ay=c0
_.ch=c1
_.a=c2
_.b=c3
_.c=c4
_.d=c5
_.e=$
_.f=c6
_.r=c7},
jU:function jU(){},
jV:function jV(){},
fA:function fA(){},
dy:function dy(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4){var _=this
_.n8=a
_.iu=b
_.n9=c
_.na=d
_.cV=_.cU=$
_.to=e
_.x1=f
_.x2=g
_.xr=h
_.w=i
_.x=j
_.y=k
_.z=l
_.Q=m
_.as=n
_.at=o
_.ax=p
_.ay=q
_.ch=r
_.a=s
_.b=a0
_.c=a1
_.d=a2
_.e=$
_.f=a3
_.r=a4},
iF:function iF(){},
aK:function aK(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m
_.at=n
_.ax=o
_.ay=p
_.ch=q
_.CW=r
_.cx=s
_.cy=a0},
b_(a,b,c,d,e){var s=t.O,r=A.a([c],s),q=d!=null?A.a([d],s):A.a([],s)
return new A.ep(r,q,e,a!=null?A.a([a],s):A.a([],s),b)},
c8(a){var s,r,q,p,o=a.a
if(o!=null){s=A.a([],t.O)
for(o=J.ab(o);o.q();){r=o.gB()
s.push(new A.N(r.a,r.b,r.c,r.d))}o=s}else o=null
s=a.b
if(s!=null){r=A.a([],t.O)
for(s=J.ab(s);s.q();){q=s.gB()
r.push(new A.N(q.a,q.b,q.c,q.d))}s=r}else s=null
r=a.d
if(r!=null){q=A.a([],t.O)
for(r=J.ab(r);r.q();){p=r.gB()
q.push(new A.N(p.a,p.b,p.c,p.d))}r=q}else r=null
return new A.ep(o,s,a.c,r,a.e)},
qz(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=null
A.b_(a1,0,B.c,a1,0)
s=a2.fx
r=a2.fy
q=A.c8(a2.go)
p=a2.id
p=p==null?a1:A.aF(p)
o=a2.k1
o=o==null?a1:A.aF(o)
n=a2.ax
n=n==null?a1:J.x(n,new A.a8(),t.G)
if(n==null)n=A.a([],t.O)
m=t.G
n=A.j(n,!0,m)
l=a2.ay
l=l==null?a1:J.x(l,new A.a9(),m)
l=A.j(l==null?A.a([],t.O):l,!0,m)
k=a2.ch
k=k==null?a1:J.x(k,new A.aa(),m)
m=A.j(k==null?A.a([],t.O):k,!0,m)
k=a2.w
j=a2.x
i=a2.gdv()
h=a2.a
h===$&&A.b("color")
h=h.u()
g=a2.b
g===$&&A.b("name")
a2.c===$&&A.b("target")
f=A.a([],t.r)
e=a2.d
e===$&&A.b("submobjects")
d=e.length
c=0
for(;c<e.length;e.length===d||(0,A.e)(e),++c)f.push(e[c].u())
e=a2.f
e===$&&A.b("updatingSuspended")
d=A.a([],t.l)
b=a2.r
b===$&&A.b("points")
a=b.length
c=0
for(;c<b.length;b.length===a||(0,A.e)(b),++c){a0=b[c]
d.push(new A.f(a0.a,a0.b,a0.c))}return new A.eq(s,new A.f(r.a,r.b,r.c),q,p,o,k,j,i,a2.z,!1,a2.as,a2.at,n,l,m,h,g,a1,f,e,d)},
pt(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=null
A.b_(a1,0,B.c,a1,0)
s=a2.fx
r=a2.fy
q=A.c8(a2.go)
p=a2.id
p=p==null?a1:A.aF(p)
o=a2.k1
o=o==null?a1:A.aF(o)
n=a2.ax
n=n==null?a1:J.x(n,new A.a8(),t.G)
if(n==null)n=A.a([],t.O)
m=t.G
n=A.j(n,!0,m)
l=a2.ay
l=l==null?a1:J.x(l,new A.a9(),m)
l=A.j(l==null?A.a([],t.O):l,!0,m)
k=a2.ch
k=k==null?a1:J.x(k,new A.aa(),m)
m=A.j(k==null?A.a([],t.O):k,!0,m)
k=a2.w
j=a2.x
i=a2.gdv()
h=a2.a
h===$&&A.b("color")
h=h.u()
g=a2.b
g===$&&A.b("name")
a2.c===$&&A.b("target")
f=A.a([],t.r)
e=a2.d
e===$&&A.b("submobjects")
d=e.length
c=0
for(;c<e.length;e.length===d||(0,A.e)(e),++c)f.push(e[c].u())
e=a2.f
e===$&&A.b("updatingSuspended")
d=A.a([],t.l)
b=a2.r
b===$&&A.b("points")
a=b.length
c=0
for(;c<b.length;b.length===a||(0,A.e)(b),++c){a0=b[c]
d.push(new A.f(a0.a,a0.b,a0.c))}return new A.du(a2.y2,a2.ac,a2.a7,a2.af,a2.bf,s,new A.f(r.a,r.b,r.c),q,p,o,k,j,i,a2.z,!1,a2.as,a2.at,n,l,m,h,g,a1,f,e,d)},
pu(a,b,c){var s=null,r=new A.cl(0,a,1,B.d,9,0.35,B.l,A.b_(s,0,B.c,s,0),s,s,4,0,!1,0.01,!1,0.000001,4,s,s,s,B.c,$,s,$,$,$)
r.aw(B.c,s,s)
r.al(B.c)
if(a===0)r.ei(A.a([B.u,B.j],t.l))
r.cw(c,b)
return r},
pv(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=null
A.b_(a0,0,B.c,a0,0)
s=a1.fx
r=a1.fy
q=A.c8(a1.go)
p=a1.id
p=p==null?a0:A.aF(p)
o=a1.k1
o=o==null?a0:A.aF(o)
n=a1.ax
n=n==null?a0:J.x(n,new A.a8(),t.G)
if(n==null)n=A.a([],t.O)
m=t.G
n=A.j(n,!0,m)
l=a1.ay
l=l==null?a0:J.x(l,new A.a9(),m)
l=A.j(l==null?A.a([],t.O):l,!0,m)
k=a1.ch
k=k==null?a0:J.x(k,new A.aa(),m)
m=A.j(k==null?A.a([],t.O):k,!0,m)
k=a1.w
j=a1.x
i=a1.a
i===$&&A.b("color")
i=i.u()
h=a1.b
h===$&&A.b("name")
a1.c===$&&A.b("target")
g=A.a([],t.r)
f=a1.d
f===$&&A.b("submobjects")
e=f.length
d=0
for(;d<f.length;f.length===e||(0,A.e)(f),++d)g.push(f[d].u())
f=a1.f
f===$&&A.b("updatingSuspended")
e=A.a([],t.l)
c=a1.r
c===$&&A.b("points")
b=c.length
d=0
for(;d<c.length;c.length===b||(0,A.e)(c),++d){a=c[d]
e.push(new A.f(a.a,a.b,a.c))}return new A.cl(a1.y2,a1.ac,a1.a7,a1.af,a1.bf,s,new A.f(r.a,r.b,r.c),q,p,o,k,j,a1.y,a1.z,!1,a1.as,a1.at,n,l,m,i,h,a0,g,f,e)},
ne(a,b,c){var s=null,r=new A.cO(0,6.283185307179586,c,a,9,0.35,B.l,A.b_(s,0,B.c,s,0),s,s,4,0,!1,0.01,!1,0.000001,4,s,s,s,B.c,$,s,$,$,$)
r.aw(B.c,s,s)
r.al(b)
return r},
pC(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=null
A.b_(a0,0,B.c,a0,0)
s=a1.fx
r=a1.fy
q=A.c8(a1.go)
p=a1.id
p=p==null?a0:A.aF(p)
o=a1.k1
o=o==null?a0:A.aF(o)
n=a1.ax
n=n==null?a0:J.x(n,new A.a8(),t.G)
if(n==null)n=A.a([],t.O)
m=t.G
n=A.j(n,!0,m)
l=a1.ay
l=l==null?a0:J.x(l,new A.a9(),m)
l=A.j(l==null?A.a([],t.O):l,!0,m)
k=a1.ch
k=k==null?a0:J.x(k,new A.aa(),m)
m=A.j(k==null?A.a([],t.O):k,!0,m)
k=a1.w
j=a1.x
i=a1.a
i===$&&A.b("color")
i=i.u()
h=a1.b
h===$&&A.b("name")
a1.c===$&&A.b("target")
g=A.a([],t.r)
f=a1.d
f===$&&A.b("submobjects")
e=f.length
d=0
for(;d<f.length;f.length===e||(0,A.e)(f),++d)g.push(f[d].u())
f=a1.f
f===$&&A.b("updatingSuspended")
e=A.a([],t.l)
c=a1.r
c===$&&A.b("points")
b=c.length
d=0
for(;d<c.length;c.length===b||(0,A.e)(c),++d){a=c[d]
e.push(new A.f(a.a,a.b,a.c))}return new A.cO(a1.y2,a1.ac,a1.a7,a1.af,a1.bf,s,new A.f(r.a,r.b,r.c),q,p,o,k,j,!0,a1.z,!1,a1.as,a1.at,n,l,m,i,h,a0,g,f,e)},
nj(a,b){var s=null,r=new A.dF(0,6.283185307179586,0.08,a,9,0.35,B.l,A.b_(s,0,B.c,s,0),s,s,4,0,!1,0.01,!1,0.000001,4,s,s,s,B.c,$,s,$,$,$)
r.aw(B.c,s,s)
r.al(b)
return r},
nk(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=null
A.b_(a0,0,B.c,a0,0)
s=a1.fx
r=a1.fy
q=A.c8(a1.go)
p=a1.id
p=p==null?a0:A.aF(p)
o=a1.k1
o=o==null?a0:A.aF(o)
n=a1.ax
n=n==null?a0:J.x(n,new A.a8(),t.G)
if(n==null)n=A.a([],t.O)
m=t.G
n=A.j(n,!0,m)
l=a1.ay
l=l==null?a0:J.x(l,new A.a9(),m)
l=A.j(l==null?A.a([],t.O):l,!0,m)
k=a1.ch
k=k==null?a0:J.x(k,new A.aa(),m)
m=A.j(k==null?A.a([],t.O):k,!0,m)
k=a1.w
j=a1.x
i=a1.a
i===$&&A.b("color")
i=i.u()
h=a1.b
h===$&&A.b("name")
a1.c===$&&A.b("target")
g=A.a([],t.r)
f=a1.d
f===$&&A.b("submobjects")
e=f.length
d=0
for(;d<f.length;f.length===e||(0,A.e)(f),++d)g.push(f[d].u())
f=a1.f
f===$&&A.b("updatingSuspended")
e=A.a([],t.l)
c=a1.r
c===$&&A.b("points")
b=c.length
d=0
for(;d<c.length;c.length===b||(0,A.e)(c),++d){a=c[d]
e.push(new A.f(a.a,a.b,a.c))}return new A.dF(a1.y2,a1.ac,a1.a7,a1.af,a1.bf,s,new A.f(r.a,r.b,r.c),q,p,o,k,j,!0,a1.z,!1,a1.as,a1.at,n,l,m,i,h,a0,g,f,e)},
pJ(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=null
A.b_(a0,0,B.c,a0,0)
s=a1.fx
r=a1.fy
q=A.c8(a1.go)
p=a1.id
p=p==null?a0:A.aF(p)
o=a1.k1
o=o==null?a0:A.aF(o)
n=a1.ax
n=n==null?a0:J.x(n,new A.a8(),t.G)
if(n==null)n=A.a([],t.O)
m=t.G
n=A.j(n,!0,m)
l=a1.ay
l=l==null?a0:J.x(l,new A.a9(),m)
l=A.j(l==null?A.a([],t.O):l,!0,m)
k=a1.ch
k=k==null?a0:J.x(k,new A.aa(),m)
m=A.j(k==null?A.a([],t.O):k,!0,m)
k=a1.w
j=a1.x
i=a1.a
i===$&&A.b("color")
i=i.u()
h=a1.b
h===$&&A.b("name")
a1.c===$&&A.b("target")
g=A.a([],t.r)
f=a1.d
f===$&&A.b("submobjects")
e=f.length
d=0
for(;d<f.length;f.length===e||(0,A.e)(f),++d)g.push(f[d].u())
f=a1.f
f===$&&A.b("updatingSuspended")
e=A.a([],t.l)
c=a1.r
c===$&&A.b("points")
b=c.length
d=0
for(;d<c.length;c.length===b||(0,A.e)(c),++d){a=c[d]
e.push(new A.f(a.a,a.b,a.c))}return new A.dI(a1.y2,a1.ac,a1.a7,a1.af,a1.bf,s,new A.f(r.a,r.b,r.c),q,p,o,k,j,!0,a1.z,!1,a1.as,a1.at,n,l,m,i,h,a0,g,f,e)},
aO(a,b,c){var s=null,r=new A.ay(0,s,c,b,0.35,B.l,A.b_(s,0,B.c,s,0),s,s,4,0,!1,0.01,!1,0.000001,4,s,s,s,B.c,$,s,$,$,$)
r.aw(B.c,s,s)
r.al(a)
return r},
pY(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=null,a1=a3.a7,a2=a3.af
A.b_(a0,0,B.c,a0,0)
s=a3.fx
r=a3.fy
q=A.c8(a3.go)
p=a3.id
p=p==null?a0:A.aF(p)
o=a3.k1
o=o==null?a0:A.aF(o)
n=a3.ax
n=n==null?a0:J.x(n,new A.a8(),t.G)
if(n==null)n=A.a([],t.O)
m=t.G
n=A.j(n,!0,m)
l=a3.ay
l=l==null?a0:J.x(l,new A.a9(),m)
l=A.j(l==null?A.a([],t.O):l,!0,m)
k=a3.ch
k=k==null?a0:J.x(k,new A.aa(),m)
m=A.j(k==null?A.a([],t.O):k,!0,m)
k=a3.w
j=a3.x
i=a3.a
i===$&&A.b("color")
i=i.u()
h=a3.b
h===$&&A.b("name")
a3.c===$&&A.b("target")
g=A.a([],t.r)
f=a3.d
f===$&&A.b("submobjects")
e=f.length
d=0
for(;d<f.length;f.length===e||(0,A.e)(f),++d)g.push(f[d].u())
f=a3.f
f===$&&A.b("updatingSuspended")
e=A.a([],t.l)
c=a3.r
c===$&&A.b("points")
b=c.length
d=0
for(;d<c.length;c.length===b||(0,A.e)(c),++d){a=c[d]
e.push(new A.f(a.a,a.b,a.c))}return new A.ay(a3.y2,a3.ac,a1,a2,s,new A.f(r.a,r.b,r.c),q,p,o,k,j,a3.y,a3.z,!1,a3.as,a3.at,n,l,m,i,h,a0,g,f,e)},
q7(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.ax
e=e==null?f:J.x(e,new A.a8(),t.G)
if(e==null)e=A.a([],t.O)
s=t.G
e=A.j(e,!0,s)
r=a.ay
r=r==null?f:J.x(r,new A.a9(),s)
r=A.j(r==null?A.a([],t.O):r,!0,s)
q=a.ch
q=q==null?f:J.x(q,new A.aa(),s)
s=A.j(q==null?A.a([],t.O):q,!0,s)
q=a.gaE()
p=a.x
o=a.a
o===$&&A.b("color")
o=o.u()
n=a.b
n===$&&A.b("name")
a.c===$&&A.b("target")
m=A.a([],t.r)
l=a.d
l===$&&A.b("submobjects")
k=l.length
j=0
for(;j<l.length;l.length===k||(0,A.e)(l),++j)m.push(l[j].u())
l=a.f
l===$&&A.b("updatingSuspended")
k=A.a([],t.l)
i=a.r
i===$&&A.b("points")
h=i.length
j=0
for(;j<i.length;i.length===h||(0,A.e)(i),++j){g=i[j]
k.push(new A.f(g.a,g.b,g.c))}return new A.ea(q,p,a.y,a.z,!1,a.as,a.at,e,r,s,o,n,f,m,l,k)},
qh(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.ax
e=e==null?f:J.x(e,new A.a8(),t.G)
if(e==null)e=A.a([],t.O)
s=t.G
e=A.j(e,!0,s)
r=a.ay
r=r==null?f:J.x(r,new A.a9(),s)
r=A.j(r==null?A.a([],t.O):r,!0,s)
q=a.ch
q=q==null?f:J.x(q,new A.aa(),s)
s=A.j(q==null?A.a([],t.O):q,!0,s)
q=a.gaE()
p=a.x
o=a.a
o===$&&A.b("color")
o=o.u()
n=a.b
n===$&&A.b("name")
a.c===$&&A.b("target")
m=A.a([],t.r)
l=a.d
l===$&&A.b("submobjects")
k=l.length
j=0
for(;j<l.length;l.length===k||(0,A.e)(l),++j)m.push(l[j].u())
l=a.f
l===$&&A.b("updatingSuspended")
k=A.a([],t.l)
i=a.r
i===$&&A.b("points")
h=i.length
j=0
for(;j<i.length;i.length===h||(0,A.e)(i),++j){g=i[j]
k.push(new A.f(g.a,g.b,g.c))}return new A.ec(q,p,a.y,a.z,!1,a.as,a.at,e,r,s,o,n,f,m,l,k)},
qB(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.ax
e=e==null?f:J.x(e,new A.a8(),t.G)
if(e==null)e=A.a([],t.O)
s=t.G
e=A.j(e,!0,s)
r=a.ay
r=r==null?f:J.x(r,new A.a9(),s)
r=A.j(r==null?A.a([],t.O):r,!0,s)
q=a.ch
q=q==null?f:J.x(q,new A.aa(),s)
s=A.j(q==null?A.a([],t.O):q,!0,s)
q=a.gaE()
p=a.x
o=a.a
o===$&&A.b("color")
o=o.u()
n=a.b
n===$&&A.b("name")
a.c===$&&A.b("target")
m=A.a([],t.r)
l=a.d
l===$&&A.b("submobjects")
k=l.length
j=0
for(;j<l.length;l.length===k||(0,A.e)(l),++j)m.push(l[j].u())
l=a.f
l===$&&A.b("updatingSuspended")
k=A.a([],t.l)
i=a.r
i===$&&A.b("points")
h=i.length
j=0
for(;j<i.length;i.length===h||(0,A.e)(i),++j){g=i[j]
k.push(new A.f(g.a,g.b,g.c))}return new A.er(q,p,a.y,a.z,!1,a.as,a.at,e,r,s,o,n,f,m,l,k)},
aF(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.ax
e=e==null?f:J.x(e,new A.a8(),t.G)
if(e==null)e=A.a([],t.O)
s=t.G
e=A.j(e,!0,s)
r=a.ay
r=r==null?f:J.x(r,new A.a9(),s)
r=A.j(r==null?A.a([],t.O):r,!0,s)
q=a.ch
q=q==null?f:J.x(q,new A.aa(),s)
s=A.j(q==null?A.a([],t.O):q,!0,s)
q=a.c4
p=a.x
o=a.a
o===$&&A.b("color")
o=o.u()
n=a.b
n===$&&A.b("name")
a.c===$&&A.b("target")
m=A.a([],t.r)
l=a.d
l===$&&A.b("submobjects")
k=l.length
j=0
for(;j<l.length;l.length===k||(0,A.e)(l),++j)m.push(l[j].u())
l=a.f
l===$&&A.b("updatingSuspended")
k=A.a([],t.l)
i=a.r
i===$&&A.b("points")
h=i.length
j=0
for(;j<i.length;i.length===h||(0,A.e)(i),++j){g=i[j]
k.push(new A.f(g.a,g.b,g.c))}return new A.dv(q,p,a.y,a.z,!1,a.as,a.at,e,r,s,o,n,f,m,l,k)},
qf(a,b,c){var s=null,r=A.a([B.a2,B.aD,B.aF,B.aG],t.l),q=new A.d6(4,0,!1,0.01,!1,0.000001,4,s,s,s,a,$,s,$,$,$)
q.aw(a,s,s)
q.eq(r,a)
q.h0(a,b,c)
return q},
qg(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.ax
e=e==null?f:J.x(e,new A.a8(),t.G)
if(e==null)e=A.a([],t.O)
s=t.G
e=A.j(e,!0,s)
r=a.ay
r=r==null?f:J.x(r,new A.a9(),s)
r=A.j(r==null?A.a([],t.O):r,!0,s)
q=a.ch
q=q==null?f:J.x(q,new A.aa(),s)
s=A.j(q==null?A.a([],t.O):q,!0,s)
q=a.w
p=a.x
o=a.a
o===$&&A.b("color")
o=o.u()
n=a.b
n===$&&A.b("name")
a.c===$&&A.b("target")
m=A.a([],t.r)
l=a.d
l===$&&A.b("submobjects")
k=l.length
j=0
for(;j<l.length;l.length===k||(0,A.e)(l),++j)m.push(l[j].u())
l=a.f
l===$&&A.b("updatingSuspended")
k=A.a([],t.l)
i=a.r
i===$&&A.b("points")
h=i.length
j=0
for(;j<i.length;i.length===h||(0,A.e)(i),++j){g=i[j]
k.push(new A.f(g.a,g.b,g.c))}return new A.d6(q,p,a.y,a.z,!1,a.as,a.at,e,r,s,o,n,f,m,l,k)},
qi(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.ax
e=e==null?f:J.x(e,new A.a8(),t.G)
if(e==null)e=A.a([],t.O)
s=t.G
e=A.j(e,!0,s)
r=a.ay
r=r==null?f:J.x(r,new A.a9(),s)
r=A.j(r==null?A.a([],t.O):r,!0,s)
q=a.ch
q=q==null?f:J.x(q,new A.aa(),s)
s=A.j(q==null?A.a([],t.O):q,!0,s)
q=a.w
p=a.x
o=a.a
o===$&&A.b("color")
o=o.u()
n=a.b
n===$&&A.b("name")
a.c===$&&A.b("target")
m=A.a([],t.r)
l=a.d
l===$&&A.b("submobjects")
k=l.length
j=0
for(;j<l.length;l.length===k||(0,A.e)(l),++j)m.push(l[j].u())
l=a.f
l===$&&A.b("updatingSuspended")
k=A.a([],t.l)
i=a.r
i===$&&A.b("points")
h=i.length
j=0
for(;j<i.length;i.length===h||(0,A.e)(i),++j){g=i[j]
k.push(new A.f(g.a,g.b,g.c))}return new A.ed(q,p,a.y,a.z,!1,a.as,a.at,e,r,s,o,n,f,m,l,k)},
ep:function ep(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hz:function hz(a){this.b=a},
eq:function eq(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1){var _=this
_.fx=a
_.fy=b
_.go=c
_.id=d
_.k1=e
_.w=f
_.x=g
_.y=h
_.z=i
_.Q=j
_.as=k
_.at=l
_.ax=m
_.ay=n
_.ch=o
_.a=p
_.b=q
_.c=r
_.d=s
_.e=$
_.f=a0
_.r=a1},
du:function du(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6){var _=this
_.y2=a
_.ac=b
_.a7=c
_.af=d
_.bf=e
_.fx=f
_.fy=g
_.go=h
_.id=i
_.k1=j
_.w=k
_.x=l
_.y=m
_.z=n
_.Q=o
_.as=p
_.at=q
_.ax=r
_.ay=s
_.ch=a0
_.a=a1
_.b=a2
_.c=a3
_.d=a4
_.e=$
_.f=a5
_.r=a6},
cl:function cl(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6){var _=this
_.y2=a
_.ac=b
_.a7=c
_.af=d
_.bf=e
_.fx=f
_.fy=g
_.go=h
_.id=i
_.k1=j
_.w=k
_.x=l
_.y=m
_.z=n
_.Q=o
_.as=p
_.at=q
_.ax=r
_.ay=s
_.ch=a0
_.a=a1
_.b=a2
_.c=a3
_.d=a4
_.e=$
_.f=a5
_.r=a6},
cO:function cO(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6){var _=this
_.y2=a
_.ac=b
_.a7=c
_.af=d
_.bf=e
_.fx=f
_.fy=g
_.go=h
_.id=i
_.k1=j
_.w=k
_.x=l
_.y=m
_.z=n
_.Q=o
_.as=p
_.at=q
_.ax=r
_.ay=s
_.ch=a0
_.a=a1
_.b=a2
_.c=a3
_.d=a4
_.e=$
_.f=a5
_.r=a6},
dF:function dF(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6){var _=this
_.y2=a
_.ac=b
_.a7=c
_.af=d
_.bf=e
_.fx=f
_.fy=g
_.go=h
_.id=i
_.k1=j
_.w=k
_.x=l
_.y=m
_.z=n
_.Q=o
_.as=p
_.at=q
_.ax=r
_.ay=s
_.ch=a0
_.a=a1
_.b=a2
_.c=a3
_.d=a4
_.e=$
_.f=a5
_.r=a6},
dI:function dI(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6){var _=this
_.y2=a
_.ac=b
_.a7=c
_.af=d
_.bf=e
_.fx=f
_.fy=g
_.go=h
_.id=i
_.k1=j
_.w=k
_.x=l
_.y=m
_.z=n
_.Q=o
_.as=p
_.at=q
_.ax=r
_.ay=s
_.ch=a0
_.a=a1
_.b=a2
_.c=a3
_.d=a4
_.e=$
_.f=a5
_.r=a6},
ay:function ay(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5){var _=this
_.y2=a
_.ac=b
_.a7=c
_.af=d
_.fx=e
_.fy=f
_.go=g
_.id=h
_.k1=i
_.w=j
_.x=k
_.y=l
_.z=m
_.Q=n
_.as=o
_.at=p
_.ax=q
_.ay=r
_.ch=s
_.a=a0
_.b=a1
_.c=a2
_.d=a3
_.e=$
_.f=a4
_.r=a5},
ea:function ea(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.w=a
_.x=b
_.y=c
_.z=d
_.Q=e
_.as=f
_.at=g
_.ax=h
_.ay=i
_.ch=j
_.a=k
_.b=l
_.c=m
_.d=n
_.e=$
_.f=o
_.r=p},
ec:function ec(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.w=a
_.x=b
_.y=c
_.z=d
_.Q=e
_.as=f
_.at=g
_.ax=h
_.ay=i
_.ch=j
_.a=k
_.b=l
_.c=m
_.d=n
_.e=$
_.f=o
_.r=p},
er:function er(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.w=a
_.x=b
_.y=c
_.z=d
_.Q=e
_.as=f
_.at=g
_.ax=h
_.ay=i
_.ch=j
_.a=k
_.b=l
_.c=m
_.d=n
_.e=$
_.f=o
_.r=p},
dv:function dv(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.c4=0
_.w=a
_.x=b
_.y=c
_.z=d
_.Q=e
_.as=f
_.at=g
_.ax=h
_.ay=i
_.ch=j
_.a=k
_.b=l
_.c=m
_.d=n
_.e=$
_.f=o
_.r=p},
d6:function d6(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.w=a
_.x=b
_.y=c
_.z=d
_.Q=e
_.as=f
_.at=g
_.ax=h
_.ay=i
_.ch=j
_.a=k
_.b=l
_.c=m
_.d=n
_.e=$
_.f=o
_.r=p},
ed:function ed(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.w=a
_.x=b
_.y=c
_.z=d
_.Q=e
_.as=f
_.at=g
_.ax=h
_.ay=i
_.ch=j
_.a=k
_.b=l
_.c=m
_.d=n
_.e=$
_.f=o
_.r=p},
qk(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.id,d=a.gbg(a),c=a.go,b=a.ax
b=b==null?f:J.x(b,new A.a8(),t.G)
if(b==null)b=A.a([],t.O)
s=t.G
b=A.j(b,!0,s)
r=a.ay
r=r==null?f:J.x(r,new A.a9(),s)
r=A.j(r==null?A.a([],t.O):r,!0,s)
q=a.ch
q=q==null?f:J.x(q,new A.aa(),s)
s=A.j(q==null?A.a([],t.O):q,!0,s)
q=a.w
p=a.x
o=a.a
o===$&&A.b("color")
o=o.u()
n=a.b
n===$&&A.b("name")
a.c===$&&A.b("target")
m=A.a([],t.r)
l=a.d
l===$&&A.b("submobjects")
k=l.length
j=0
for(;j<l.length;l.length===k||(0,A.e)(l),++j)m.push(l[j].u())
l=a.f
l===$&&A.b("updatingSuspended")
k=A.a([],t.l)
i=a.r
i===$&&A.b("points")
h=i.length
j=0
for(;j<i.length;i.length===h||(0,A.e)(i),++j){g=i[j]
k.push(new A.f(g.a,g.b,g.c))}return new A.c3(!0,d,c,e,!0,A.bd(t.N,t.h),q,p,a.y,a.z,!1,a.as,a.at,b,r,s,o,n,f,m,l,k)},
tC(a){var s,r,q,p,o
a=A.bk(a,"\n",",")
a=A.bk(a,"-",",-")
a=A.bk(a,"e,-","e-")
s=A.a([],t.n)
for(r=B.b.ce(a,A.au("[ ,]")),q=r.length,p=0;p<r.length;r.length===q||(0,A.e)(r),++p){o=r[p]
if(J.W(o)!==0)s.push(A.bH(o))}return s},
oN(a,b,c){var s,r,q,p,o,n,m,l,k=A.a([],c.h("A<n<0>>"))
for(s=A.K(B.e.aV(a.length,b),0,1),r=s.length,q=A.v(a),p=q.c,q=q.h("aD<1>"),o=0;o<s.length;s.length===r||(0,A.e)(s),++o){n=s[o]
if(typeof n!=="number")return n.C()
m=A.a1(n*b)
l=new A.aD(a,m,null,q)
l.cf(a,m,null,p)
k.push(l.oq(0,b).av(0))}return k},
p2(a,b,c,d){var s=a*d-b*c<0?-1:1
return s*Math.acos(Math.min(1,Math.max((a*c+b*d)/(Math.sqrt(a*a+b*b)*Math.sqrt(c*c+d*d)),-1)))},
ta(d4,d5,d6,d7,d8,d9,e0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0=d4.a,d1=d4.b,d2=e0.a,d3=e0.b
if(d5===0||d6===0)return A.a([d4,e0,e0],t.l)
d7*=0.017453292519943295
d8=d8!==0?1:0
d9=d9!==0?1:0
s=Math.cos(d7)
r=Math.sin(d7)
q=(d0-d2)/2
p=(d1-d3)/2
o=q*s+p*r
n=-q*r+p*s
m=Math.abs(d5)
l=Math.abs(d6)
k=o*o
j=n*n
i=k/(m*m)+j/(l*l)
if(i>1){h=Math.sqrt(i)
m*=h
l*=h}g=[m,l]
m=g[0]
l=g[1]
f=m*m
e=l*l
j=f*j
k=e*k
d=Math.sqrt(Math.max((f*e-j-k)/(j+k),0))
k=(d8===d9?-1:1)*d
c=k*(m*n)/l
b=k*(-l*o)/m
q=(o-c)/m
p=(n-b)/l
a=A.p2(1,0,q,p)
a0=B.h.a6(A.p2(q,p,(-o-c)/m,(-n-b)/l)/1,360)
if(d9===0&&a0>0)a0-=360
else if(d9===1&&a0<0)a0+=360
a1=[c*s-b*r+(d0+d2)/2,c*r+b*s+(d1+d3)/2,a,a0*0.017453292519943295]
a2=a1[0]
a3=a1[1]
a=a1[2]
a0=a1[3]
k=a0/0.017453292519943295
a4=B.h.eT(Math.abs(k/(B.h.a6(k,90)===0?90:36)))
a5=a0/a4
s=Math.cos(d7)
r=Math.sin(d7)
a6=Math.sin(a5)*(Math.sqrt(4+3*Math.pow(Math.tan(a5/2),2))-1)/3
k=t.l
a7=A.a([],k)
for(j=A.K(a4,0,1),a8=j.length,a9=-d5,b0=a9*s,b1=d6*r,a9*=r,b2=d6*s,b3=a4-1,b4=d5*s,b5=d5*r,b6=d1,b7=d0,b8=a,b9=0;b9<j.length;j.length===a8||(0,A.e)(j),++b9,b6=c8,b7=c9,b8=c1){c0=j[b9]
c1=b8+a5
c2=Math.cos(b8)
c3=Math.sin(b8)
c4=Math.cos(c1)
c5=Math.sin(c1)
c6=a2+b4*c4-b1*c5
c7=a3+b5*c4+b2*c5
if(J.T(c0,b3)){c8=d3
c9=d2}else{c8=c7
c9=c6}B.a.H(a7,A.a([new A.f(b7+a6*(b0*c3-b1*c2),b6+a6*(a9*c3+b2*c2),0),new A.f(c9-a6*(b0*c5-b1*c4),c8-a6*(a9*c5+b2*c4),0),new A.f(c9,c8,0)],k))}return a7},
ql(a){var s=null,r=new A.d7(a,s,4,0,!1,0.01,!1,0.000001,4,s,s,s,B.c,$,s,$,$,$)
r.aw(B.c,s,s)
return r},
qm(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.ax
e=e==null?f:J.x(e,new A.a8(),t.G)
if(e==null)e=A.a([],t.O)
s=t.G
e=A.j(e,!0,s)
r=a.ay
r=r==null?f:J.x(r,new A.a9(),s)
r=A.j(r==null?A.a([],t.O):r,!0,s)
q=a.ch
q=q==null?f:J.x(q,new A.aa(),s)
s=A.j(q==null?A.a([],t.O):q,!0,s)
q=a.w
p=a.x
o=a.a
o===$&&A.b("color")
o=o.u()
n=a.b
n===$&&A.b("name")
a.c===$&&A.b("target")
m=A.a([],t.r)
l=a.d
l===$&&A.b("submobjects")
k=l.length
j=0
for(;j<l.length;l.length===k||(0,A.e)(l),++j)m.push(l[j].u())
l=a.f
l===$&&A.b("updatingSuspended")
k=A.a([],t.l)
i=a.r
i===$&&A.b("points")
h=i.length
j=0
for(;j<i.length;i.length===h||(0,A.e)(i),++j){g=i[j]
k.push(new A.f(g.a,g.b,g.c))}return new A.d7(a.fx,a.fy,q,p,a.y,a.z,!1,a.as,a.at,e,r,s,o,n,f,m,l,k)},
c3:function c3(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2){var _=this
_.fx=a
_.fy=b
_.go=c
_.id=d
_.k1=e
_.k2=f
_.w=g
_.x=h
_.y=i
_.z=j
_.Q=k
_.as=l
_.at=m
_.ax=n
_.ay=o
_.ch=p
_.a=q
_.b=r
_.c=s
_.d=a0
_.e=$
_.f=a1
_.r=a2},
k2:function k2(){},
d7:function d7(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
_.fx=a
_.fy=b
_.w=c
_.x=d
_.y=e
_.z=f
_.Q=g
_.as=h
_.at=i
_.ax=j
_.ay=k
_.ch=l
_.a=m
_.b=n
_.c=o
_.d=p
_.e=$
_.f=q
_.r=r},
k4:function k4(){},
k3:function k3(){},
ee:function ee(a,b,c){this.a=a
this.b=b
this.c=c},
qy(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.ax
e=e==null?f:J.x(e,new A.a8(),t.G)
if(e==null)e=A.a([],t.O)
s=t.G
e=A.j(e,!0,s)
r=a.ay
r=r==null?f:J.x(r,new A.a9(),s)
r=A.j(r==null?A.a([],t.O):r,!0,s)
q=a.ch
q=q==null?f:J.x(q,new A.aa(),s)
s=A.j(q==null?A.a([],t.O):q,!0,s)
q=a.w
p=a.x
o=a.a
o===$&&A.b("color")
o=o.u()
n=a.b
n===$&&A.b("name")
a.c===$&&A.b("target")
m=A.a([],t.r)
l=a.d
l===$&&A.b("submobjects")
k=l.length
j=0
for(;j<l.length;l.length===k||(0,A.e)(l),++j)m.push(l[j].u())
l=a.f
l===$&&A.b("updatingSuspended")
k=A.a([],t.l)
i=a.r
i===$&&A.b("points")
h=i.length
j=0
for(;j<i.length;i.length===h||(0,A.e)(i),++j){g=i[j]
k.push(new A.f(g.a,g.b,g.c))}return new A.eo(a.fx,a.fy,q,p,a.y,a.z,!1,a.as,a.at,e,r,s,o,n,f,m,l,k)},
qo(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a1.ac,d=a1.a7,c=a1.id,b=a1.af,a=a1.go,a0=a1.ax
a0=a0==null?f:J.x(a0,new A.a8(),t.G)
if(a0==null)a0=A.a([],t.O)
s=t.G
a0=A.j(a0,!0,s)
r=a1.ay
r=r==null?f:J.x(r,new A.a9(),s)
r=A.j(r==null?A.a([],t.O):r,!0,s)
q=a1.ch
q=q==null?f:J.x(q,new A.aa(),s)
s=A.j(q==null?A.a([],t.O):q,!0,s)
q=a1.w
p=a1.x
o=a1.a
o===$&&A.b("color")
o=o.u()
n=a1.b
n===$&&A.b("name")
a1.c===$&&A.b("target")
m=A.a([],t.r)
l=a1.d
l===$&&A.b("submobjects")
k=l.length
j=0
for(;j<l.length;l.length===k||(0,A.e)(l),++j)m.push(l[j].u())
l=a1.f
l===$&&A.b("updatingSuspended")
k=A.a([],t.l)
i=a1.r
i===$&&A.b("points")
h=i.length
j=0
for(;j<i.length;i.length===h||(0,A.e)(i),++j){g=i[j]
k.push(new A.f(g.a,g.b,g.c))}return new A.bM(e,d,!0,b,a,c,!0,A.bd(t.N,t.h),q,p,a1.y,a1.z,!1,a1.as,a1.at,a0,r,s,o,n,f,m,l,k)},
qp(a){var s,r,q,p,o,n,m,l,k,j="(){}[]|.\\"
if(a==="\\over"||a==="\\overline"||a==="\\sqrt"||a==="\\sqrt{"||B.b.be(a,"_")||B.b.be(a,"^")||B.b.be(a,"dot"))a+="{\\quad}"
if(a==="\\substack")a="\\quad"
if(a.length===0)a="\\quad"
if(B.b.Y(a,"\\\\"))a=A.bk(a,"\\\\","\\quad\\\\")
s=t.s
r=A.a([],s)
for(q=t.N,p=A.cL(A.a(a.split("\\left"),s),q),o=p.length,n=0;n<p.length;p.length===o||(0,A.e)(p),++n){m=p[n]
l=J.Z(m)
if(l.gm(m)!==0){l=l.k(m,0)
l=A.ck(j,l,0)}else l=!1
if(l)r.push(m)}k=r.length
r=A.a([],s)
for(s=A.cL(A.a(a.split("\\right"),s),q),q=s.length,n=0;n<s.length;s.length===q||(0,A.e)(s),++n){m=s[n]
p=J.Z(m)
if(p.gm(m)!==0){p=p.k(m,0)
p=A.ck(j,p,0)}else p=!1
if(p)r.push(m)}if(k!==r.length){a=A.bk(a,"\\left","\\big")
a=A.bk(a,"\\right","\\big")}return A.qq(a)},
qq(a){var s=a.split("{").length-1-(a.split("\\{").length-1)+(a.split("\\\\{").length-1),r=a.split("}").length-1-(a.split("\\}").length-1)+(a.split("\\\\}").length-1)
for(;r>s;){a="{"+a;++s}for(;s>r;){a+="}";++r}return a},
bK(a){var s,r=null,q=new A.e4(" ",B.p,B.Y,A.a([],t.s),"","align*",!0,2,r,"",!0,A.bd(t.N,t.h),4,0,!1,0.01,!1,0.000001,4,r,r,r,B.c,$,r,$,$,$)
q.aw(B.c,r,r)
s=q.r
s===$&&A.b("points")
if(s.length!==0)q.fh()
q.a=B.c
q.a7="align*"
q.sor(A.q2(a,B.p,B.Y))
q.ac=B.a.aB(q.c5," ")
q.il()
q.mq()
q.k9(B.Y)
return q},
q1(a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=t.N,d=A.j(a4.f8,!0,e),c=A.j(a4.c5,!0,e),b=a4.ac,a=a4.a7,a0=a4.id,a1=a4.af,a2=a4.go,a3=a4.ax
a3=a3==null?f:J.x(a3,new A.a8(),t.G)
if(a3==null)a3=A.a([],t.O)
s=t.G
a3=A.j(a3,!0,s)
r=a4.ay
r=r==null?f:J.x(r,new A.a9(),s)
r=A.j(r==null?A.a([],t.O):r,!0,s)
q=a4.ch
q=q==null?f:J.x(q,new A.aa(),s)
s=A.j(q==null?A.a([],t.O):q,!0,s)
q=a4.w
p=a4.x
o=a4.a
o===$&&A.b("color")
o=o.u()
n=a4.b
n===$&&A.b("name")
a4.c===$&&A.b("target")
m=A.a([],t.r)
l=a4.d
l===$&&A.b("submobjects")
k=l.length
j=0
for(;j<l.length;l.length===k||(0,A.e)(l),++j)m.push(l[j].u())
l=a4.f
l===$&&A.b("updatingSuspended")
k=A.a([],t.l)
i=a4.r
i===$&&A.b("points")
h=i.length
j=0
for(;j<i.length;i.length===h||(0,A.e)(i),++j){g=i[j]
k.push(new A.f(g.a,g.b,g.c))}return new A.e4(a4.bz,d,a4.c4,c,b,a,!0,a1,a2,a0,!0,A.bd(e,t.h),q,p,a4.y,a4.z,!1,a4.as,a4.at,a3,r,s,o,n,f,m,l,k)},
q2(a,b,c){var s,r,q,p,o,n,m,l=A.nG(a,A.au("{{(.*?)}}")),k=t.s,j=A.a([],k)
for(s=A.j(c.gbi(),!0,t.N),B.a.H(s,b),r=s.length,q=0;q<s.length;s.length===r||(0,A.e)(s),++q)j.push("("+A.mT(s[q])+")")
p=B.a.aB(j,"|")
o=A.a([],k)
if(p.length!==0){n=A.au(p)
for(j=l.length,q=0;q<l.length;l.length===j||(0,A.e)(l),++q)B.a.H(o,A.nG(l[q],n))}else o=l
k=A.a([],k)
for(j=o.length,q=0;q<o.length;o.length===j||(0,A.e)(o),++q){m=o[q]
if(J.W(m)!==0)k.push(m)}return k},
eo:function eo(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
_.fx=a
_.fy=b
_.w=c
_.x=d
_.y=e
_.z=f
_.Q=g
_.as=h
_.at=i
_.ax=j
_.ay=k
_.ch=l
_.a=m
_.b=n
_.c=o
_.d=p
_.e=$
_.f=q
_.r=r},
bM:function bM(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4){var _=this
_.ac=a
_.a7=b
_.af=null
_.fx=c
_.fy=d
_.go=e
_.id=f
_.k1=g
_.k2=h
_.w=i
_.x=j
_.y=k
_.z=l
_.Q=m
_.as=n
_.at=o
_.ax=p
_.ay=q
_.ch=r
_.a=s
_.b=a0
_.c=a1
_.d=a2
_.e=$
_.f=a3
_.r=a4},
e4:function e4(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8){var _=this
_.bz=a
_.f8=b
_.c4=c
_.c5=d
_.ac=e
_.a7=f
_.af=null
_.fx=g
_.fy=h
_.go=i
_.id=j
_.k1=k
_.k2=l
_.w=m
_.x=n
_.y=o
_.z=p
_.Q=q
_.as=r
_.at=s
_.ax=a0
_.ay=a1
_.ch=a2
_.a=a3
_.b=a4
_.c=a5
_.d=a6
_.e=$
_.f=a7
_.r=a8},
jA:function jA(a,b){this.a=a
this.b=b},
pI(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=a.ay
f===$&&A.b("draggedListener")
s=a.ch
s===$&&A.b("pressedListener")
r=a.CW
r===$&&A.b("releasedListener")
q=a.cx
p=A.nk(a.w)
o=a.a
o===$&&A.b("color")
o=o.u()
n=a.b
n===$&&A.b("name")
a.c===$&&A.b("target")
m=A.a([],t.r)
l=a.d
l===$&&A.b("submobjects")
k=l.length
j=0
for(;j<l.length;l.length===k||(0,A.e)(l),++j)m.push(l[j].u())
l=a.f
l===$&&A.b("updatingSuspended")
k=A.a([],t.l)
i=a.r
i===$&&A.b("points")
h=i.length
j=0
for(;j<i.length;i.length===h||(0,A.e)(i),++j){g=i[j]
k.push(new A.f(g.a,g.b,g.c))}return new A.dG(f,s,r,q,p,o,n,null,m,l,k)},
fT:function fT(){},
dG:function dG(a,b,c,d,e,f,g,h,i,j,k){var _=this
_.ay=a
_.ch=b
_.CW=c
_.cx=d
_.w=e
_.a=f
_.b=g
_.c=h
_.d=i
_.e=$
_.f=j
_.r=k},
iP:function iP(a){this.a=a},
iQ:function iQ(a){this.a=a},
iR:function iR(a){this.a=a},
q3(a){var s,r,q,p,o,n,m,l,k=a.a
k===$&&A.b("color")
k=k.u()
s=a.b
s===$&&A.b("name")
a.c===$&&A.b("target")
r=A.a([],t.r)
q=a.d
q===$&&A.b("submobjects")
p=q.length
o=0
for(;o<q.length;q.length===p||(0,A.e)(q),++o)r.push(q[o].u())
q=a.f
q===$&&A.b("updatingSuspended")
p=A.a([],t.l)
n=a.r
n===$&&A.b("points")
m=n.length
o=0
for(;o<n.length;n.length===m||(0,A.e)(n),++o){l=n[o]
p.push(new A.f(l.a,l.b,l.c))}return new A.H(k,s,null,r,q,p)},
H:function H(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=$
_.f=e
_.r=f},
jR:function jR(a){this.a=a},
jQ:function jQ(a){this.a=a},
jP:function jP(a){this.a=a},
jO:function jO(a){this.a=a},
jS:function jS(a,b){this.a=a
this.b=b},
jK:function jK(a){this.a=a},
jL:function jL(a){this.a=a},
jM:function jM(){},
jN:function jN(a){this.a=a},
qI(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a.ax
d=d==null?e:J.x(d,new A.a8(),t.G)
if(d==null)d=A.a([],t.O)
s=t.G
d=A.j(d,!0,s)
r=a.ay
r=r==null?e:J.x(r,new A.a9(),s)
r=A.j(r==null?A.a([],t.O):r,!0,s)
q=a.ch
q=q==null?e:J.x(q,new A.aa(),s)
s=A.j(q==null?A.a([],t.O):q,!0,s)
q=a.gaE()
p=a.x
o=a.gdv()
n=a.a
n===$&&A.b("color")
n=n.u()
m=a.b
m===$&&A.b("name")
a.c===$&&A.b("target")
l=A.a([],t.r)
k=a.d
k===$&&A.b("submobjects")
j=k.length
i=0
for(;i<k.length;k.length===j||(0,A.e)(k),++i)l.push(k[i].u())
k=a.f
k===$&&A.b("updatingSuspended")
j=A.a([],t.l)
h=a.r
h===$&&A.b("points")
g=h.length
i=0
for(;i<h.length;h.length===g||(0,A.e)(h),++i){f=h[i]
j.push(new A.f(f.a,f.b,f.c))}return new A.R(q,p,o,a.z,!1,a.as,a.at,d,r,s,n,m,e,l,k,j)},
mm(a){var s=null,r=new A.ca(4,0,!1,0.01,!1,0.000001,4,s,s,s,B.c,$,s,$,$,$)
r.aw(B.c,s,s)
r.h2(a)
return r},
qH(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.ax
e=e==null?f:J.x(e,new A.a8(),t.G)
if(e==null)e=A.a([],t.O)
s=t.G
e=A.j(e,!0,s)
r=a.ay
r=r==null?f:J.x(r,new A.a9(),s)
r=A.j(r==null?A.a([],t.O):r,!0,s)
q=a.ch
q=q==null?f:J.x(q,new A.aa(),s)
s=A.j(q==null?A.a([],t.O):q,!0,s)
q=a.w
p=a.x
o=a.a
o===$&&A.b("color")
o=o.u()
n=a.b
n===$&&A.b("name")
a.c===$&&A.b("target")
m=A.a([],t.r)
l=a.d
l===$&&A.b("submobjects")
k=l.length
j=0
for(;j<l.length;l.length===k||(0,A.e)(l),++j)m.push(l[j].u())
l=a.f
l===$&&A.b("updatingSuspended")
k=A.a([],t.l)
i=a.r
i===$&&A.b("points")
h=i.length
j=0
for(;j<i.length;i.length===h||(0,A.e)(i),++j){g=i[j]
k.push(new A.f(g.a,g.b,g.c))}return new A.ca(q,p,a.y,a.z,!1,a.as,a.at,e,r,s,o,n,f,m,l,k)},
nQ(a){var s=null,r=new A.eu(0.01,0.01,4,0,!1,0.01,!1,0.000001,4,s,s,s,B.c,$,s,$,$,$)
r.aw(B.c,s,s)
r.saT(t.y.a(A.a([a],t.l)))
return r},
qJ(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.ax
e=e==null?f:J.x(e,new A.a8(),t.G)
if(e==null)e=A.a([],t.O)
s=t.G
e=A.j(e,!0,s)
r=a.ay
r=r==null?f:J.x(r,new A.a9(),s)
r=A.j(r==null?A.a([],t.O):r,!0,s)
q=a.ch
q=q==null?f:J.x(q,new A.aa(),s)
s=A.j(q==null?A.a([],t.O):q,!0,s)
q=a.w
p=a.x
o=a.a
o===$&&A.b("color")
o=o.u()
n=a.b
n===$&&A.b("name")
a.c===$&&A.b("target")
m=A.a([],t.r)
l=a.d
l===$&&A.b("submobjects")
k=l.length
j=0
for(;j<l.length;l.length===k||(0,A.e)(l),++j)m.push(l[j].u())
l=a.f
l===$&&A.b("updatingSuspended")
k=A.a([],t.l)
i=a.r
i===$&&A.b("points")
h=i.length
j=0
for(;j<i.length;i.length===h||(0,A.e)(i),++j){g=i[j]
k.push(new A.f(g.a,g.b,g.c))}return new A.eu(a.fx,a.fy,q,p,a.y,a.z,!1,a.as,a.at,e,r,s,o,n,f,m,l,k)},
R:function R(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.w=a
_.x=b
_.y=c
_.z=d
_.Q=e
_.as=f
_.at=g
_.ax=h
_.ay=i
_.ch=j
_.a=k
_.b=l
_.c=m
_.d=n
_.e=$
_.f=o
_.r=p},
a8:function a8(){},
a9:function a9(){},
aa:function aa(){},
kD:function kD(){},
kE:function kE(){},
kx:function kx(a,b){this.a=a
this.b=b},
kA:function kA(a,b){this.a=a
this.b=b},
kz:function kz(a,b){this.a=a
this.b=b},
kt:function kt(a,b){this.a=a
this.b=b},
ky:function ky(){},
kw:function kw(a){this.a=a},
ku:function ku(){},
kv:function kv(){},
kC:function kC(){},
kB:function kB(){},
et:function et(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ca:function ca(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.w=a
_.x=b
_.y=c
_.z=d
_.Q=e
_.as=f
_.at=g
_.ax=h
_.ay=i
_.ch=j
_.a=k
_.b=l
_.c=m
_.d=n
_.e=$
_.f=o
_.r=p},
eu:function eu(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
_.fx=a
_.fy=b
_.w=c
_.x=d
_.y=e
_.z=f
_.Q=g
_.as=h
_.at=i
_.ax=j
_.ay=k
_.ch=l
_.a=m
_.b=n
_.c=o
_.d=p
_.e=$
_.f=q
_.r=r},
dt:function dt(){},
pB(){return new A.ft($.dr())},
ft:function ft(a){this.e=$
this.b=a
this.d=$},
iJ:function iJ(){},
k5:function k5(){},
k6:function k6(a){this.a=a},
K(a,b,c){var s,r=A.a([],t.t)
if(c>0)for(s=b;s<a;s+=c)B.a.n(r,s)
else for(s=b;s>a;s+=c)B.a.n(r,s)
return r},
ij(a,b){var s,r,q,p=J.Z(a)
if(p.gan(a))return A.a([],b.h("A<L<h,0>>"))
s=A.a([],b.h("A<L<h,0>>"))
for(r=t.pc.X(b).h("L<1,2>"),q=0;q<p.gm(a);++q)B.a.n(s,new A.L(q,p.k(a,q),r))
return s},
lS(a,b){if(a.length===0)return b.a(0)
return B.a.b0(a,new A.lT(b))},
il(a,b,c){var s,r,q,p,o,n,m,l=A.a([],t.b)
for(s=A.K(a,0,1),r=s.length,q=a-1,p=t.n,o=0;o<s.length;s.length===r||(0,A.e)(s),++o){n=s[o]
if(typeof n!=="number")return n.bF()
m=n/q
l.push(A.a([c*(1-m)+b*m],p))}return A.aX(null,l)},
oA(a,b,c){var s,r,q,p,o=A.K(B.h.eT((a-b)/c),0,1),n=A.a([],t.b)
for(s=o.length,r=t.n,q=0;q<o.length;o.length===s||(0,A.e)(o),++q){p=o[q]
if(typeof p!=="number")return p.C()
n.push(A.a([p*c+b],r))}return A.aX(null,n)},
cK(a,b,c){var s,r,q,p,o,n,m=J.Z(a)
if(m.gan(a))return a
s=m.gm(a)
if(s>b)throw A.d("Trying to stretch an array to a length shorter than its own")
r=A.K(b,0,1)
q=A.v(r)
p=q.h("G<1,F>")
o=new A.G(r,q.h("F(1)").a(new A.lR(b,s)),p)
q=A.a([],c.h("A<0>"))
for(r=new A.J(o,o.gm(o),p.h("J<B.E>")),p=p.h("B.E");r.q();){n=r.d
q.push(m.k(a,B.h.bl(n==null?p.a(n):n)))}return q},
ts(a,b,c,d){var s,r,q,p,o,n,m,l=Math.max(a.length,b.length),k=A.a([],c.h("A<0>"))
for(s=A.K(l,0,1),r=s.length,q=0;q<s.length;s.length===r||(0,A.e)(s),++q){p=s[q]
o=a.length
if(typeof p!=="number")return p.C()
n=B.h.aV(p*o,l)
if(!(n>=0&&n<o))return A.c(a,n)
k.push(a[n])}s=A.a([],d.h("A<0>"))
for(r=A.K(l,0,1),o=r.length,q=0;q<r.length;r.length===o||(0,A.e)(r),++q){p=r[q]
n=b.length
if(typeof p!=="number")return p.C()
m=B.h.aV(p*n,l)
if(!(m>=0&&m<n))return A.c(b,m)
s.push(b[m])}return new A.L(k,s,c.h("@<n<0>>").X(d.h("n<0>")).h("L<1,2>"))},
cL(a,b){var s=A.jw(a,new A.lU(b),b)
return A.j(s,!0,s.$ti.h("i.E"))},
mV(a,b){var s=A.j(a,!0,b)
if(0>=s.length)return A.c(s,-1)
s.pop()
return s},
tG(a,b){var s,r,q,p=A.a([],b.h("A<0>")),o=A.nq(b)
for(s=A.v(a).h("V<1>"),r=new A.V(a,s),r=new A.J(r,r.gm(r),s.h("J<B.E>")),s=s.h("B.E");r.q();){q=r.d
if(q==null)q=s.a(q)
if(!o.G(0,q)){B.a.n(p,q)
o.n(0,q)}}s=b.h("V<0>")
return A.j(new A.V(p,s),!0,s.h("B.E"))},
oy(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=A.a([],c.h("A<n<0>>"))
for(s=A.K(a.length,0,1),r=s.length,q=c.h("A<0>"),p=0;p<s.length;s.length===r||(0,A.e)(s),++p){o=s[p]
n=A.a([],q)
for(m=A.K(b,0,1),l=m.length,k=0;k<m.length;m.length===l||(0,A.e)(m),++k){j=m[k]
if(typeof o!=="number")return o.T()
if(typeof j!=="number")return A.bw(j)
n.push(B.a.k(a,B.h.a6(o+j,a.length)))}i.push(n)}return i},
lT:function lT(a){this.a=a},
lR:function lR(a,b){this.a=a
this.b=b},
lU:function lU(a){this.a=a},
mO(a,b,c){var s,r,q=t.bd
q=A.mN(A.aX(null,J.x(a,new A.lJ(),q).av(0)),A.aX(null,J.x(b,new A.lK(),q).av(0)),c,t.Y).a
q===$&&A.b("values")
s=A.v(q)
r=s.h("G<1,N>")
return A.j(new A.G(q,s.h("N(1)").a(new A.lL()),r),!0,r.h("B.E"))},
mN(a,b,c,d){return d.a(J.lW(J.cM(a,1-c),J.cM(b,c)))},
oP(a,b,c,d){return d.a(J.lW(J.cM(a,1-c),J.cM(b,c)))},
mM(a,b,c){if(c>=1)return new A.L(b-1,1,t.d7)
if(c<=0)return new A.L(a,0,t.d7)
return new A.L(J.pr(A.mN(a,b,c,t.W)),B.h.a6((b-a)*c,1),t.d7)},
mH(a){return new A.lv(a,a.length-1)},
lP(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(b===1){s=A.a([],t.l)
for(r=A.K(J.W(a.a),0,1),q=r.length,p=0;p<r.length;r.length===q||(0,A.e)(r),++p){if(a.gm(a)===0)A.M(A.al())
s.push(a.k(0,a.gm(a)-1))}return s}s=t.l
r=A.a([],s)
for(q=a.a,o=J.Z(q),n=A.K(o.gm(q),0,1),m=n.length,l=a.$ti,k=l.h("t.E"),l=l.h("aD<t.E>"),p=0;p<n.length;n.length===m||(0,A.e)(n),++p){j=A.a1(n[p])
i=new A.aD(a,j,null,l)
i.cf(a,j,null,k)
r.push(A.mH(i.av(0)).$1(b))}h=(c-b)/(1-b)
s=A.a([],s)
for(q=A.K(o.gm(q),0,1),o=q.length,n=t.V,m=t.mN,p=0;p<q.length;q.length===o||(0,A.e)(q),++p){g=q[p]
if(typeof g!=="number")return g.T()
l=A.a1(g+1)
A.aG(0,l,r.length)
k=new A.aD(r,0,l,m)
k.cf(r,0,l,n)
s.push(A.mH(k.av(0)).$1(h))}return s},
lJ:function lJ(){},
lK:function lK(){},
lL:function lL(){},
lv:function lv(a,b){this.a=a
this.b=b},
lu:function lu(){},
oi(a){var s,r,q,p,o,n,m,l,k,j,i
if(B.b.Y(a,"#"))a=B.b.j3(a,"#","")
s=a.length
if(!B.a.G(A.a([3,4,6,8],t.t),s))throw A.d("Hex string #"+a+" not well formated")
if(s===3||s===4){s=t.s
r=A.a([],s)
for(q=a.split(""),p=q.length,o=0;o<p;++o){n=q[o]
B.a.H(r,A.a([n,n],s))}a=B.a.aB(r,"")}if(a.length===6)a+="ff"
m=new A.lj()
l=B.b.v(a,0,2)
k=B.b.v(a,2,4)
j=B.b.v(a,4,6)
i=B.b.v(a,6,8)
return new A.N(m.$1(l),m.$1(k),m.$1(j),m.$1(i))},
N:function N(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lj:function lj(){},
cQ:function cQ(a,b){this.a=a
this.b=b},
md(a){switch(a){case 0:break
case 1:break
case 2:break
default:break}return new A.jT(a)},
bn:function bn(a){this.b=a},
b1:function b1(){},
iT:function iT(){this.a=$},
b2:function b2(a,b,c){this.a=a
this.b=b
this.$ti=c},
fZ:function fZ(){},
e5:function e5(a,b,c){this.c=a
this.a=b
this.b=c},
c1:function c1(a,b,c){this.c=a
this.a=b
this.b=c},
c2:function c2(a,b,c){this.c=a
this.a=b
this.b=c},
c0:function c0(a,b,c){this.c=a
this.a=b
this.b=c},
jT:function jT(a){this.a=a},
nG(a,b){var s,r,q,p,o,n,m,l,k,j,i=B.b.ce(a,b),h=b.c1(0,a),g=A.j(h,!0,A.z(h).h("i.E"))
h=i.length
s=g.length
r=A.a([],t.s)
for(h=A.K(h+s,0,1),s=h.length,q=t.N,p=0;p<h.length;h.length===s||(0,A.e)(h),++p){o=h[p]
if(typeof o!=="number")return o.a6()
if(B.h.a6(o,2)===0){n=B.h.aO(o,2)
if(!(n>=0&&n<i.length))return A.c(i,n)
B.a.n(r,i[n])}else{n=B.h.aO(o-1,2)
if(!(n>=0&&n<g.length))return A.c(g,n)
m=g[n]
l=m.fH(A.K(m.gfG()+1,1,1))
k=A.v(l)
j=k.h("am<1>")
j=A.nd(new A.am(l,k.h("y(1)").a(new A.kg()),j),j.h("i.E"),q)
B.a.H(r,A.j(j,!0,A.z(j).h("i.E")))}}return r},
kg:function kg(){},
oC(a,b,c){var s,r
if(c){if(!$.ih.ai(a)){s=t.S
$.ih.t(0,a,A.bd(s,s))}if(!$.ih.k(0,a).ai(b)){s=$.ih.k(0,a)
s.toString
s.t(0,b,A.oC(a,b,!1))}s=$.ih.k(0,a).k(0,b)
s.toString
return s}if(a<b)return 0
if(b===0)return 1
s=t.S
r=B.a.fc(A.K(b+1,1,1),1,new A.lw(),s)
return B.e.aV(B.a.fc(A.K(a-b,a,-1),1,new A.lx(),s),r)},
im(a,b,c,d,e){return(a-b)/(c-b)*(e-d)+d},
lw:function lw(){},
lx:function lx(){},
aX(a,b){var s,r,q=new A.bm(b)
if(a==null){s=b.length
r=s!==0?J.W(B.a.ga3(b)):0
a=new A.L(s,r,t.o)
s=a}else s=a
q.sl1(t.o.a(s))
return q},
fk(a,b){var s,r,q,p,o,n,m,l,k=b.b,j=A.a([],t.b)
for(s=A.K(b.a,0,1),r=s.length,q=t.n,p=0;p<s.length;s.length===r||(0,A.e)(s),++p){o=A.a([],q)
for(n=A.K(k,0,1),m=n.length,l=0;l<n.length;n.length===m||(0,A.e)(n),++l)o.push(a)
j.push(o)}return A.aX(b,j)},
n6(a){var s,r,q,p,o,n=A.a([],t.b)
for(s=a.length,r=t.n,q=0;p=a.length,q<p;a.length===s||(0,A.e)(a),++q){o=a[q]
n.push(A.a([o.a,o.b,o.c],r))}return A.aX(new A.L(p,3,t.o),n)},
fl(a){var s,r,q,p,o,n,m,l,k,j,i=A.a([],t.b)
for(s=A.K(a,0,1),r=s.length,q=t.n,p=0;p<s.length;s.length===r||(0,A.e)(s),++p){o=s[p]
n=A.a([],q)
for(m=A.K(a,0,1),l=m.length,k=J.bj(o),j=0;j<m.length;m.length===l||(0,A.e)(m),++j)if(k.W(o,m[j]))n.push(1)
else n.push(0)
i.push(n)}return A.aX(new A.L(a,a,t.o),i)},
tx(a,b){var s=A.p_(a),r=A.tH(b)
return B.a.b0(A.a([r,s,r.jp()],t.fp),new A.lQ())},
p_(a){var s=t.n
return A.aX(null,A.a([A.a([Math.cos(a),-Math.sin(a),0],s),A.a([Math.sin(a),Math.cos(a),0],s),A.a([0,0,1],s)],t.b))},
tH(a){var s,r,q,p,o,n
if(a.bD()===0)return A.fl(3)
s=a.bF(0,Math.sqrt(a.bD()))
r=Math.acos(s.c)
if(s.a!==0||s.b!==0){q=s.jj(0)
p=q.bF(0,Math.sqrt(q.bD()))
o=Math.acos(p.a)
if(p.b<0)o*=-1}else o=0
q=t.n
n=A.aX(null,A.a([A.a([Math.cos(r),0,Math.sin(r)],q),A.a([0,1,0],q),A.a([-Math.sin(r),0,Math.cos(r)],q)],t.b))
return A.p_(o).c8(n)},
tv(a,b){var s,r,q,p,o=a/2,n=b.bF(0,Math.sqrt(b.bD())).C(0,Math.sin(o)),m=A.a([],t.b)
for(s=[n.a,n.b,n.c],r=s.length,q=t.n,p=0;p<r;++p)m.push(A.a([s[p]],q))
m.push(A.a([Math.cos(o)],q))
return A.aX(null,m)},
t4(a,b){var s,r,q,p,o,n,m,l,k,j=6.283185307179586/a,i=t.hR,h=A.a([],i)
for(s=A.K(a,0,1),r=s.length,q=0;q<s.length;s.length===r||(0,A.e)(s),++q){p=s[q]
if(typeof p!=="number")return A.bw(p)
o=j*p
h.push(new A.cQ(Math.cos(o),Math.sin(o)))}i=A.a([],i)
for(s=h.length,r=b.a,o=b.b,q=0;q<h.length;h.length===s||(0,A.e)(h),++q){n=h[q]
m=n.a
l=n.b
i.push(new A.cQ(m*r-l*o,m*o+l*r))}h=A.a([],t.l)
for(s=i.length,q=0;q<i.length;i.length===s||(0,A.e)(i),++q){k=i[q]
h.push(new A.f(k.a,k.b,0))}return h},
bm:function bm(a){this.a=a
this.b=$},
iA:function iA(a){this.a=a},
iB:function iB(a){this.a=a},
iz:function iz(a){this.a=a},
iy:function iy(a,b){this.a=a
this.b=b},
ix:function ix(a){this.a=a},
iC:function iC(a){this.a=a},
iw:function iw(){},
iv:function iv(a){this.a=a},
lQ:function lQ(){},
f:function f(a,b,c){this.a=a
this.b=b
this.c=c},
kF:function kF(a){this.a=a},
oq(a){if(t.jJ.b(a))return a
throw A.d(A.m_(a,"uri","Value must be a String or a Uri"))},
ow(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=1;r<s;++r){if(b[r]==null||b[r-1]!=null)continue
for(;s>=1;s=q){q=s-1
if(b[q]!=null)break}p=new A.a0("")
o=""+(a+"(")
p.a=o
n=A.v(b)
m=n.h("aD<1>")
l=new A.aD(b,0,s,m)
l.cf(b,0,s,n.c)
m=o+new A.G(l,m.h("m(B.E)").a(new A.ls()),m.h("G<B.E,m>")).aB(0,", ")
p.a=m
p.a=m+("): part "+(r-1)+" was null, but part "+r+" was not.")
throw A.d(A.a4(p.l(0),null))}},
iL:function iL(a){this.a=a},
iM:function iM(){},
iN:function iN(){},
ls:function ls(){},
cs:function cs(){},
ha(a,b){var s,r,q,p,o,n=b.ju(a)
b.bS(a)
if(n!=null)a=B.b.aq(a,n.length)
s=t.s
r=A.a([],s)
q=A.a([],s)
s=a.length
if(s!==0&&b.bC(B.b.E(a,0))){if(0>=s)return A.c(a,0)
B.a.n(q,a[0])
p=1}else{B.a.n(q,"")
p=0}for(o=p;o<s;++o)if(b.bC(B.b.E(a,o))){B.a.n(r,B.b.v(a,p,o))
B.a.n(q,a[o])
p=o+1}if(p<s){B.a.n(r,B.b.aq(a,p))
B.a.n(q,"")}return new A.jW(b,n,r,q)},
jW:function jW(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
nt(a){return new A.hc(a)},
hc:function hc(a){this.a=a},
qx(){var s,r,q,p,o,n,m,l,k=null
if(A.mk().gaL()!=="file")return $.f7()
s=A.mk()
if(!B.b.be(s.gaK(s),"/"))return $.f7()
r=A.oa(k,0,0)
q=A.o7(k,0,0,!1)
p=A.o9(k,0,0,k)
o=A.o6(k,0,0)
n=A.mx(k,"")
if(q==null)s=r.length!==0||n!=null||!1
else s=!1
if(s)q=""
s=q==null
m=!s
l=A.o8("a/b",0,3,k,"",m)
if(s&&!B.b.Y(l,"/"))l=A.mz(l,m)
else l=A.bT(l)
if(A.lc("",r,s&&B.b.Y(l,"//")?"":q,n,l,p,o).ft()==="a\\b")return $.io()
return $.p4()},
kh:function kh(){},
hf:function hf(a,b,c){this.d=a
this.e=b
this.f=c},
hF:function hF(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d},
hK:function hK(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d},
qt(a,b){var s=A.a([0],t.t)
s=new A.hp(b,s,new Uint32Array(A.mB(J.f9(a))))
s.h1(a,b)
return s},
bX(a,b){if(b<0)A.M(A.az("Offset may not be negative, was "+b+"."))
else if(b>a.c.length)A.M(A.az("Offset "+b+u.D+a.gm(a)+"."))
return new A.aY(a,b)},
mo(a,b,c){if(c<b)A.M(A.a4("End "+c+" must come after start "+b+".",null))
else if(c>a.c.length)A.M(A.az("End "+c+u.D+a.gm(a)+"."))
else if(b<0)A.M(A.az("Start may not be negative, was "+b+"."))
return new A.ao(a,b,c)},
hp:function hp(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
aY:function aY(a,b){this.a=a
this.b=b},
ao:function ao(a,b,c){this.a=a
this.b=b
this.c=c},
pO(a,b){var s=A.pP(A.a([A.qP(a,!0)],t.pg)),r=new A.jf(b).$0(),q=B.e.l(B.a.gp(s).b+1),p=A.pQ(s)?0:3,o=A.v(s)
return new A.iW(s,r,null,1+Math.max(q.length,p),new A.G(s,o.h("h(1)").a(new A.iY()),o.h("G<1,h>")).b0(0,B.a3),!A.tm(new A.G(s,o.h("D?(1)").a(new A.iZ()),o.h("G<1,D?>"))),new A.a0(""))},
pQ(a){var s,r,q
for(s=0;s<a.length-1;){r=a[s];++s
q=a[s]
if(r.b+1!==q.b&&J.T(r.c,q.c))return!1}return!0},
pP(a){var s,r,q,p=A.tg(a,new A.j0(),t.C,t.K)
for(s=p.gjf(p),r=A.z(s),r=r.h("@<1>").X(r.z[1]),s=new A.cy(J.ab(s.a),s.b,r.h("cy<1,2>")),r=r.z[1];s.q();){q=s.a
if(q==null)q=r.a(q)
J.n4(q,new A.j1())}s=p.gdE(p)
r=A.z(s)
q=r.h("dM<i.E,b8>")
return A.j(new A.dM(s,r.h("i<b8>(i.E)").a(new A.j2()),q),!0,q.h("i.E"))},
qP(a,b){var s=new A.l2(a).$0()
return new A.av(s,!0,null)},
qR(a){var s,r,q,p,o,n,m=a.gV(a)
if(!B.b.G(m,"\r\n"))return a
s=a.gS()
r=s.gau(s)
for(s=m.length-1,q=0;q<s;++q)if(B.b.E(m,q)===13&&B.b.E(m,q+1)===10)--r
s=a.gP(a)
p=a.ga2()
o=a.gS().gad()
p=A.hq(r,a.gS().gam(),o,p)
o=A.bk(m,"\r\n","\n")
n=a.gaU()
return A.kc(s,p,o,A.bk(n,"\r\n","\n"))},
qS(a){var s,r,q,p,o,n,m
if(!B.b.be(a.gaU(),"\n"))return a
if(B.b.be(a.gV(a),"\n\n"))return a
s=B.b.v(a.gaU(),0,a.gaU().length-1)
r=a.gV(a)
q=a.gP(a)
p=a.gS()
if(B.b.be(a.gV(a),"\n")){o=A.lB(a.gaU(),a.gV(a),a.gP(a).gam())
o.toString
o=o+a.gP(a).gam()+a.gm(a)===a.gaU().length}else o=!1
if(o){r=B.b.v(a.gV(a),0,a.gV(a).length-1)
if(r.length===0)p=q
else{o=a.gS()
o=o.gau(o)
n=a.ga2()
m=a.gS().gad()
p=A.hq(o-1,A.nU(s),m-1,n)
o=a.gP(a)
o=o.gau(o)
n=a.gS()
q=o===n.gau(n)?p:a.gP(a)}}return A.kc(q,p,r,s)},
qQ(a){var s,r,q,p,o
if(a.gS().gam()!==0)return a
if(a.gS().gad()===a.gP(a).gad())return a
s=B.b.v(a.gV(a),0,a.gV(a).length-1)
r=a.gP(a)
q=a.gS()
q=q.gau(q)
p=a.ga2()
o=a.gS().gad()
p=A.hq(q-1,s.length-B.b.ff(s,"\n")-1,o-1,p)
return A.kc(r,p,s,B.b.be(a.gaU(),"\n")?B.b.v(a.gaU(),0,a.gaU().length-1):a.gaU())},
nU(a){var s=a.length
if(s===0)return 0
else if(B.b.J(a,s-1)===10)return s===1?0:s-B.b.dN(a,"\n",s-2)-1
else return s-B.b.ff(a,"\n")-1},
iW:function iW(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
jf:function jf(a){this.a=a},
iY:function iY(){},
iX:function iX(){},
iZ:function iZ(){},
j0:function j0(){},
j1:function j1(){},
j2:function j2(){},
j_:function j_(a){this.a=a},
jg:function jg(){},
j3:function j3(a){this.a=a},
ja:function ja(a,b,c){this.a=a
this.b=b
this.c=c},
jb:function jb(a,b){this.a=a
this.b=b},
jc:function jc(a){this.a=a},
jd:function jd(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
j8:function j8(a,b){this.a=a
this.b=b},
j9:function j9(a,b){this.a=a
this.b=b},
j4:function j4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j5:function j5(a,b,c){this.a=a
this.b=b
this.c=c},
j6:function j6(a,b,c){this.a=a
this.b=b
this.c=c},
j7:function j7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
je:function je(a,b,c){this.a=a
this.b=b
this.c=c},
av:function av(a,b,c){this.a=a
this.b=b
this.c=c},
l2:function l2(a){this.a=a},
b8:function b8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hq(a,b,c,d){if(a<0)A.M(A.az("Offset may not be negative, was "+a+"."))
else if(c<0)A.M(A.az("Line may not be negative, was "+c+"."))
else if(b<0)A.M(A.az("Column may not be negative, was "+b+"."))
return new A.bt(d,a,c,b)},
bt:function bt(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hr:function hr(){},
hs:function hs(){},
ej:function ej(){},
kc(a,b,c,d){var s=new A.bD(d,a,b,c)
s.kZ(a,b,c)
if(!B.b.G(d,c))A.M(A.a4('The context line "'+d+'" must contain "'+c+'".',null))
if(A.lB(d,c,a.gam())==null)A.M(A.a4('The span text "'+c+'" must start at column '+(a.gam()+1)+' in a line within "'+d+'".',null))
return s},
bD:function bD(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
L:function L(a,b,c){this.a=a
this.b=b
this.$ti=c},
db:function db(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
tq(){var s,r,q,p,o,n="align*",m="renderer",l=t.N
$.bN.t(0,n,A.bd(l,l))
$.bN.k(0,n).t(0,"sin(\\theta)","<?xml version='1.0' encoding='UTF-8'?>\n<!-- This file was generated by dvisvgm 3.0.3 -->\n<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='26.78478pt' height='9.96264pt' viewBox='158.463151 -7.47198 26.78478 9.96264'>\n<defs>\n<path id='g0-18' d='M4.533001-4.98132C4.533001-5.638854 4.353674-7.023661 3.337484-7.023661C1.952677-7.023661 .418431-4.214197 .418431-1.932752C.418431-.996264 .707347 .109589 1.613948 .109589C3.01868 .109589 4.533001-2.749689 4.533001-4.98132ZM3.556663-3.616438H1.474471C1.643836-4.254047 1.843088-5.051059 2.241594-5.758406C2.510585-6.246575 2.879203-6.804483 3.327522-6.804483C3.815691-6.804483 3.875467-6.166874 3.875467-5.599004C3.875467-5.110834 3.795766-4.60274 3.556663-3.616438ZM3.466999-3.297634C3.35741-2.839352 3.148194-1.992528 2.769614-1.275218C2.420922-.597758 2.042341-.109589 1.613948-.109589C1.285181-.109589 1.075965-.398506 1.075965-1.325031C1.075965-1.743462 1.135741-2.321295 1.39477-3.297634H3.466999Z'/>\n<path id='g0-105' d='M2.82939-6.22665C2.82939-6.425903 2.689913-6.585305 2.460772-6.585305C2.191781-6.585305 1.92279-6.326276 1.92279-6.057285C1.92279-5.867995 2.062267-5.69863 2.30137-5.69863C2.530511-5.69863 2.82939-5.927771 2.82939-6.22665ZM2.919054-1.424658C2.919054-1.524284 2.82939-1.524284 2.799502-1.524284C2.699875-1.524284 2.699875-1.494396 2.650062-1.344956C2.470735-.71731 2.141968-.109589 1.633873-.109589C1.464508-.109589 1.39477-.209215 1.39477-.438356C1.39477-.687422 1.454545-.826899 1.683686-1.43462L2.072229-2.480697C2.191781-2.769614 2.191781-2.789539 2.291407-3.058531C2.371108-3.257783 2.420922-3.39726 2.420922-3.58655C2.420922-4.034869 2.102117-4.403487 1.603985-4.403487C.667497-4.403487 .288917-2.958904 .288917-2.86924C.288917-2.769614 .408468-2.769614 .408468-2.769614C.508095-2.769614 .518057-2.789539 .56787-2.948941C.836862-3.88543 1.235367-4.184309 1.574097-4.184309C1.653798-4.184309 1.823163-4.184309 1.823163-3.865504C1.823163-3.656289 1.753425-3.447073 1.713574-3.347447C1.633873-3.088418 1.185554-1.932752 1.026152-1.504359C.926526-1.24533 .797011-.916563 .797011-.707347C.797011-.239103 1.135741 .109589 1.613948 .109589C2.550436 .109589 2.919054-1.334994 2.919054-1.424658Z'/>\n<path id='g0-110' d='M5.688667-1.424658C5.688667-1.524284 5.599004-1.524284 5.569116-1.524284C5.469489-1.524284 5.469489-1.494396 5.419676-1.344956C5.220423-.667497 4.891656-.109589 4.403487-.109589C4.234122-.109589 4.164384-.209215 4.164384-.438356C4.164384-.687422 4.254047-.926526 4.343711-1.145704C4.533001-1.673724 4.951432-2.769614 4.951432-3.337484C4.951432-4.004981 4.523039-4.403487 3.805729-4.403487C2.909091-4.403487 2.420922-3.765878 2.251557-3.536737C2.201743-4.094645 1.793275-4.403487 1.334994-4.403487S.687422-4.014944 .587796-3.835616C.428394-3.496887 .288917-2.909091 .288917-2.86924C.288917-2.769614 .408468-2.769614 .408468-2.769614C.508095-2.769614 .518057-2.779577 .577833-2.998755C.747198-3.706102 .946451-4.184309 1.305106-4.184309C1.504359-4.184309 1.613948-4.054795 1.613948-3.726027C1.613948-3.516812 1.58406-3.407223 1.454545-2.889166L.876712-.587796C.846824-.438356 .787049-.209215 .787049-.159402C.787049 .019925 .926526 .109589 1.075965 .109589C1.195517 .109589 1.374844 .029888 1.444583-.169365C1.454545-.18929 1.574097-.657534 1.633873-.9066L1.853051-1.803238C1.912827-2.022416 1.972603-2.241594 2.022416-2.470735L2.15193-2.968867C2.30137-3.277709 2.82939-4.184309 3.775841-4.184309C4.224159-4.184309 4.313823-3.815691 4.313823-3.486924C4.313823-2.86924 3.825654-1.594022 3.666252-1.165629C3.576588-.936488 3.566625-.816936 3.566625-.707347C3.566625-.239103 3.915318 .109589 4.383562 .109589C5.32005 .109589 5.688667-1.344956 5.688667-1.424658Z'/>\n<path id='g0-115' d='M3.945205-1.544209C3.945205-1.902864 3.755915-2.15193 3.636364-2.271482C3.367372-2.550436 3.078456-2.600249 2.6401-2.689913C2.281445-2.769614 1.882939-2.839352 1.882939-3.287671C1.882939-3.576588 2.122042-4.184309 2.998755-4.184309C3.247821-4.184309 3.745953-4.11457 3.895392-3.726027C3.616438-3.716065 3.417186-3.496887 3.417186-3.277709C3.417186-3.138232 3.506849-2.988792 3.726027-2.988792S4.184309-3.158157 4.184309-3.5467C4.184309-3.995019 3.755915-4.403487 2.998755-4.403487C1.683686-4.403487 1.315068-3.387298 1.315068-2.948941C1.315068-2.171856 2.052304-2.022416 2.34122-1.96264C2.859278-1.863014 3.377335-1.753425 3.377335-1.205479C3.377335-.946451 3.148194-.109589 1.952677-.109589C1.8132-.109589 1.046077-.109589 .816936-.637609C1.195517-.587796 1.444583-.886675 1.444583-1.165629C1.444583-1.39477 1.285181-1.514321 1.075965-1.514321C.816936-1.514321 .518057-1.305106 .518057-.856787C.518057-.288917 1.085928 .109589 1.942715 .109589C3.556663 .109589 3.945205-1.09589 3.945205-1.544209Z'/>\n<path id='g1-40' d='M3.297634 2.391034C3.297634 2.361146 3.297634 2.34122 3.128269 2.171856C1.882939 .916563 1.564134-.966376 1.564134-2.49066C1.564134-4.224159 1.942715-5.957659 3.16812-7.202989C3.297634-7.32254 3.297634-7.342466 3.297634-7.372354C3.297634-7.442092 3.257783-7.47198 3.198007-7.47198C3.098381-7.47198 2.201743-6.794521 1.613948-5.529265C1.105853-4.433375 .986301-3.327522 .986301-2.49066C.986301-1.713574 1.09589-.508095 1.643836 .617684C2.241594 1.843088 3.098381 2.49066 3.198007 2.49066C3.257783 2.49066 3.297634 2.460772 3.297634 2.391034Z'/>\n<path id='g1-41' d='M2.879203-2.49066C2.879203-3.267746 2.769614-4.473225 2.221669-5.599004C1.62391-6.824408 .767123-7.47198 .667497-7.47198C.607721-7.47198 .56787-7.43213 .56787-7.372354C.56787-7.342466 .56787-7.32254 .757161-7.143213C1.733499-6.156912 2.30137-4.572852 2.30137-2.49066C2.30137-.787049 1.932752 .966376 .697385 2.221669C.56787 2.34122 .56787 2.361146 .56787 2.391034C.56787 2.450809 .607721 2.49066 .667497 2.49066C.767123 2.49066 1.663761 1.8132 2.251557 .547945C2.759651-.547945 2.879203-1.653798 2.879203-2.49066Z'/>\n</defs>\n<g id='page1'>\n<use x='158.463151' y='0' xlink:href='#g0-115'/>\n<use x='163.133139' y='0' xlink:href='#g0-105'/>\n<use x='166.565397' y='0' xlink:href='#g0-110'/>\n<use x='172.545323' y='0' xlink:href='#g1-40'/>\n<use x='176.419801' y='0' xlink:href='#g0-18'/>\n<use x='181.373454' y='0' xlink:href='#g1-41'/>\n</g>\n</svg>")
$.bN.k(0,n).t(0,"cos(\\theta)","<?xml version='1.0' encoding='UTF-8'?>\n<!-- This file was generated by dvisvgm 3.0.3 -->\n<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='26.513115pt' height='9.96264pt' viewBox='158.598979 -7.47198 26.513115 9.96264'>\n<defs>\n<path id='g0-18' d='M4.533001-4.98132C4.533001-5.638854 4.353674-7.023661 3.337484-7.023661C1.952677-7.023661 .418431-4.214197 .418431-1.932752C.418431-.996264 .707347 .109589 1.613948 .109589C3.01868 .109589 4.533001-2.749689 4.533001-4.98132ZM3.556663-3.616438H1.474471C1.643836-4.254047 1.843088-5.051059 2.241594-5.758406C2.510585-6.246575 2.879203-6.804483 3.327522-6.804483C3.815691-6.804483 3.875467-6.166874 3.875467-5.599004C3.875467-5.110834 3.795766-4.60274 3.556663-3.616438ZM3.466999-3.297634C3.35741-2.839352 3.148194-1.992528 2.769614-1.275218C2.420922-.597758 2.042341-.109589 1.613948-.109589C1.285181-.109589 1.075965-.398506 1.075965-1.325031C1.075965-1.743462 1.135741-2.321295 1.39477-3.297634H3.466999Z'/>\n<path id='g0-99' d='M4.283935-1.066002C4.283935-1.125778 4.224159-1.195517 4.164384-1.195517C4.11457-1.195517 4.094645-1.175592 4.034869-1.09589C3.247821-.109589 2.161893-.109589 2.042341-.109589C1.414695-.109589 1.145704-.597758 1.145704-1.195517C1.145704-1.603985 1.344956-2.570361 1.683686-3.188045C1.992528-3.755915 2.540473-4.184309 3.088418-4.184309C3.427148-4.184309 3.805729-4.054795 3.945205-3.785803C3.785803-3.785803 3.646326-3.785803 3.506849-3.646326C3.347447-3.496887 3.327522-3.327522 3.327522-3.257783C3.327522-3.01868 3.506849-2.909091 3.696139-2.909091C3.985056-2.909091 4.254047-3.148194 4.254047-3.5467C4.254047-4.034869 3.785803-4.403487 3.078456-4.403487C1.733499-4.403487 .408468-2.978829 .408468-1.574097C.408468-.67746 .986301 .109589 2.022416 .109589C3.447073 .109589 4.283935-.946451 4.283935-1.066002Z'/>\n<path id='g0-111' d='M4.672478-2.719801C4.672478-3.755915 3.975093-4.403487 3.078456-4.403487C1.743462-4.403487 .408468-2.988792 .408468-1.574097C.408468-.587796 1.075965 .109589 2.002491 .109589C3.327522 .109589 4.672478-1.265255 4.672478-2.719801ZM3.945205-3.108344C3.945205-2.719801 3.745953-1.673724 3.367372-1.026152C3.01868-.448319 2.470735-.109589 2.012453-.109589C1.58406-.109589 1.145704-.418431 1.145704-1.195517C1.145704-1.683686 1.404732-2.759651 1.723537-3.267746C2.221669-4.034869 2.789539-4.184309 3.068493-4.184309C3.646326-4.184309 3.945205-3.706102 3.945205-3.108344Z'/>\n<path id='g0-115' d='M3.945205-1.544209C3.945205-1.902864 3.755915-2.15193 3.636364-2.271482C3.367372-2.550436 3.078456-2.600249 2.6401-2.689913C2.281445-2.769614 1.882939-2.839352 1.882939-3.287671C1.882939-3.576588 2.122042-4.184309 2.998755-4.184309C3.247821-4.184309 3.745953-4.11457 3.895392-3.726027C3.616438-3.716065 3.417186-3.496887 3.417186-3.277709C3.417186-3.138232 3.506849-2.988792 3.726027-2.988792S4.184309-3.158157 4.184309-3.5467C4.184309-3.995019 3.755915-4.403487 2.998755-4.403487C1.683686-4.403487 1.315068-3.387298 1.315068-2.948941C1.315068-2.171856 2.052304-2.022416 2.34122-1.96264C2.859278-1.863014 3.377335-1.753425 3.377335-1.205479C3.377335-.946451 3.148194-.109589 1.952677-.109589C1.8132-.109589 1.046077-.109589 .816936-.637609C1.195517-.587796 1.444583-.886675 1.444583-1.165629C1.444583-1.39477 1.285181-1.514321 1.075965-1.514321C.816936-1.514321 .518057-1.305106 .518057-.856787C.518057-.288917 1.085928 .109589 1.942715 .109589C3.556663 .109589 3.945205-1.09589 3.945205-1.544209Z'/>\n<path id='g1-40' d='M3.297634 2.391034C3.297634 2.361146 3.297634 2.34122 3.128269 2.171856C1.882939 .916563 1.564134-.966376 1.564134-2.49066C1.564134-4.224159 1.942715-5.957659 3.16812-7.202989C3.297634-7.32254 3.297634-7.342466 3.297634-7.372354C3.297634-7.442092 3.257783-7.47198 3.198007-7.47198C3.098381-7.47198 2.201743-6.794521 1.613948-5.529265C1.105853-4.433375 .986301-3.327522 .986301-2.49066C.986301-1.713574 1.09589-.508095 1.643836 .617684C2.241594 1.843088 3.098381 2.49066 3.198007 2.49066C3.257783 2.49066 3.297634 2.460772 3.297634 2.391034Z'/>\n<path id='g1-41' d='M2.879203-2.49066C2.879203-3.267746 2.769614-4.473225 2.221669-5.599004C1.62391-6.824408 .767123-7.47198 .667497-7.47198C.607721-7.47198 .56787-7.43213 .56787-7.372354C.56787-7.342466 .56787-7.32254 .757161-7.143213C1.733499-6.156912 2.30137-4.572852 2.30137-2.49066C2.30137-.787049 1.932752 .966376 .697385 2.221669C.56787 2.34122 .56787 2.361146 .56787 2.391034C.56787 2.450809 .607721 2.49066 .667497 2.49066C.767123 2.49066 1.663761 1.8132 2.251557 .547945C2.759651-.547945 2.879203-1.653798 2.879203-2.49066Z'/>\n</defs>\n<g id='page1'>\n<use x='158.598979' y='0' xlink:href='#g0-99'/>\n<use x='162.910376' y='0' xlink:href='#g0-111'/>\n<use x='167.739498' y='0' xlink:href='#g0-115'/>\n<use x='172.409485' y='0' xlink:href='#g1-40'/>\n<use x='176.283963' y='0' xlink:href='#g0-18'/>\n<use x='181.237616' y='0' xlink:href='#g1-41'/>\n</g>\n</svg>")
$.bN.k(0,n).t(0,"tan(\\theta)","<?xml version='1.0' encoding='UTF-8'?>\n<!-- This file was generated by dvisvgm 3.0.3 -->\n<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='27.546323pt' height='9.96264pt' viewBox='158.082392 -7.47198 27.546323 9.96264'>\n<defs>\n<path id='g0-18' d='M4.533001-4.98132C4.533001-5.638854 4.353674-7.023661 3.337484-7.023661C1.952677-7.023661 .418431-4.214197 .418431-1.932752C.418431-.996264 .707347 .109589 1.613948 .109589C3.01868 .109589 4.533001-2.749689 4.533001-4.98132ZM3.556663-3.616438H1.474471C1.643836-4.254047 1.843088-5.051059 2.241594-5.758406C2.510585-6.246575 2.879203-6.804483 3.327522-6.804483C3.815691-6.804483 3.875467-6.166874 3.875467-5.599004C3.875467-5.110834 3.795766-4.60274 3.556663-3.616438ZM3.466999-3.297634C3.35741-2.839352 3.148194-1.992528 2.769614-1.275218C2.420922-.597758 2.042341-.109589 1.613948-.109589C1.285181-.109589 1.075965-.398506 1.075965-1.325031C1.075965-1.743462 1.135741-2.321295 1.39477-3.297634H3.466999Z'/>\n<path id='g0-97' d='M4.961395-1.424658C4.961395-1.524284 4.871731-1.524284 4.841843-1.524284C4.742217-1.524284 4.732254-1.484433 4.702366-1.344956C4.533001-.697385 4.353674-.109589 3.945205-.109589C3.676214-.109589 3.646326-.368618 3.646326-.56787C3.646326-.787049 3.666252-.86675 3.775841-1.305106L3.995019-2.201743L4.353674-3.596513C4.423412-3.875467 4.423412-3.895392 4.423412-3.935243C4.423412-4.104608 4.303861-4.204234 4.134496-4.204234C3.895392-4.204234 3.745953-3.985056 3.716065-3.765878C3.536737-4.134496 3.247821-4.403487 2.799502-4.403487C1.633873-4.403487 .398506-2.938979 .398506-1.484433C.398506-.547945 .946451 .109589 1.723537 .109589C1.92279 .109589 2.420922 .069738 3.01868-.637609C3.098381-.219178 3.447073 .109589 3.92528 .109589C4.273973 .109589 4.503113-.119552 4.662516-.438356C4.83188-.797011 4.961395-1.424658 4.961395-1.424658ZM3.566625-3.138232L3.068493-1.185554C3.01868-1.006227 3.01868-.986301 2.86924-.816936C2.430884-.268991 2.022416-.109589 1.743462-.109589C1.24533-.109589 1.105853-.657534 1.105853-1.046077C1.105853-1.544209 1.424658-2.769614 1.653798-3.227895C1.96264-3.815691 2.410959-4.184309 2.809465-4.184309C3.457036-4.184309 3.596513-3.367372 3.596513-3.307597S3.576588-3.188045 3.566625-3.138232Z'/>\n<path id='g0-110' d='M5.688667-1.424658C5.688667-1.524284 5.599004-1.524284 5.569116-1.524284C5.469489-1.524284 5.469489-1.494396 5.419676-1.344956C5.220423-.667497 4.891656-.109589 4.403487-.109589C4.234122-.109589 4.164384-.209215 4.164384-.438356C4.164384-.687422 4.254047-.926526 4.343711-1.145704C4.533001-1.673724 4.951432-2.769614 4.951432-3.337484C4.951432-4.004981 4.523039-4.403487 3.805729-4.403487C2.909091-4.403487 2.420922-3.765878 2.251557-3.536737C2.201743-4.094645 1.793275-4.403487 1.334994-4.403487S.687422-4.014944 .587796-3.835616C.428394-3.496887 .288917-2.909091 .288917-2.86924C.288917-2.769614 .408468-2.769614 .408468-2.769614C.508095-2.769614 .518057-2.779577 .577833-2.998755C.747198-3.706102 .946451-4.184309 1.305106-4.184309C1.504359-4.184309 1.613948-4.054795 1.613948-3.726027C1.613948-3.516812 1.58406-3.407223 1.454545-2.889166L.876712-.587796C.846824-.438356 .787049-.209215 .787049-.159402C.787049 .019925 .926526 .109589 1.075965 .109589C1.195517 .109589 1.374844 .029888 1.444583-.169365C1.454545-.18929 1.574097-.657534 1.633873-.9066L1.853051-1.803238C1.912827-2.022416 1.972603-2.241594 2.022416-2.470735L2.15193-2.968867C2.30137-3.277709 2.82939-4.184309 3.775841-4.184309C4.224159-4.184309 4.313823-3.815691 4.313823-3.486924C4.313823-2.86924 3.825654-1.594022 3.666252-1.165629C3.576588-.936488 3.566625-.816936 3.566625-.707347C3.566625-.239103 3.915318 .109589 4.383562 .109589C5.32005 .109589 5.688667-1.344956 5.688667-1.424658Z'/>\n<path id='g0-116' d='M3.128269-1.424658C3.128269-1.524284 3.048568-1.524284 3.008717-1.524284C2.919054-1.524284 2.909091-1.494396 2.859278-1.384807C2.430884-.348692 1.902864-.109589 1.564134-.109589C1.354919-.109589 1.255293-.239103 1.255293-.56787C1.255293-.806974 1.275218-.876712 1.315068-1.046077L2.052304-3.985056H2.988792C3.188045-3.985056 3.287671-3.985056 3.287671-4.184309C3.287671-4.293898 3.188045-4.293898 3.008717-4.293898H2.132005C2.49066-5.708593 2.540473-5.907846 2.540473-5.967621C2.540473-6.136986 2.420922-6.236613 2.251557-6.236613C2.221669-6.236613 1.942715-6.22665 1.853051-5.877958L1.464508-4.293898H.52802C.328767-4.293898 .229141-4.293898 .229141-4.104608C.229141-3.985056 .308842-3.985056 .508095-3.985056H1.384807C.667497-1.155666 .627646-.986301 .627646-.806974C.627646-.268991 1.006227 .109589 1.544209 .109589C2.560399 .109589 3.128269-1.344956 3.128269-1.424658Z'/>\n<path id='g1-40' d='M3.297634 2.391034C3.297634 2.361146 3.297634 2.34122 3.128269 2.171856C1.882939 .916563 1.564134-.966376 1.564134-2.49066C1.564134-4.224159 1.942715-5.957659 3.16812-7.202989C3.297634-7.32254 3.297634-7.342466 3.297634-7.372354C3.297634-7.442092 3.257783-7.47198 3.198007-7.47198C3.098381-7.47198 2.201743-6.794521 1.613948-5.529265C1.105853-4.433375 .986301-3.327522 .986301-2.49066C.986301-1.713574 1.09589-.508095 1.643836 .617684C2.241594 1.843088 3.098381 2.49066 3.198007 2.49066C3.257783 2.49066 3.297634 2.460772 3.297634 2.391034Z'/>\n<path id='g1-41' d='M2.879203-2.49066C2.879203-3.267746 2.769614-4.473225 2.221669-5.599004C1.62391-6.824408 .767123-7.47198 .667497-7.47198C.607721-7.47198 .56787-7.43213 .56787-7.372354C.56787-7.342466 .56787-7.32254 .757161-7.143213C1.733499-6.156912 2.30137-4.572852 2.30137-2.49066C2.30137-.787049 1.932752 .966376 .697385 2.221669C.56787 2.34122 .56787 2.361146 .56787 2.391034C.56787 2.450809 .607721 2.49066 .667497 2.49066C.767123 2.49066 1.663761 1.8132 2.251557 .547945C2.759651-.547945 2.879203-1.653798 2.879203-2.49066Z'/>\n</defs>\n<g id='page1'>\n<use x='158.082392' y='0' xlink:href='#g0-116'/>\n<use x='161.680027' y='0' xlink:href='#g0-97'/>\n<use x='166.946181' y='0' xlink:href='#g0-110'/>\n<use x='172.926106' y='0' xlink:href='#g1-40'/>\n<use x='176.800585' y='0' xlink:href='#g0-18'/>\n<use x='181.754237' y='0' xlink:href='#g1-41'/>\n</g>\n</svg>")
$.bN.k(0,n).t(0,"cot(\\theta)","<?xml version='1.0' encoding='UTF-8'?>\n<!-- This file was generated by dvisvgm 3.0.3 -->\n<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='25.440762pt' height='9.96264pt' viewBox='159.135161 -7.47198 25.440762 9.96264'>\n<defs>\n<path id='g0-18' d='M4.533001-4.98132C4.533001-5.638854 4.353674-7.023661 3.337484-7.023661C1.952677-7.023661 .418431-4.214197 .418431-1.932752C.418431-.996264 .707347 .109589 1.613948 .109589C3.01868 .109589 4.533001-2.749689 4.533001-4.98132ZM3.556663-3.616438H1.474471C1.643836-4.254047 1.843088-5.051059 2.241594-5.758406C2.510585-6.246575 2.879203-6.804483 3.327522-6.804483C3.815691-6.804483 3.875467-6.166874 3.875467-5.599004C3.875467-5.110834 3.795766-4.60274 3.556663-3.616438ZM3.466999-3.297634C3.35741-2.839352 3.148194-1.992528 2.769614-1.275218C2.420922-.597758 2.042341-.109589 1.613948-.109589C1.285181-.109589 1.075965-.398506 1.075965-1.325031C1.075965-1.743462 1.135741-2.321295 1.39477-3.297634H3.466999Z'/>\n<path id='g0-99' d='M4.283935-1.066002C4.283935-1.125778 4.224159-1.195517 4.164384-1.195517C4.11457-1.195517 4.094645-1.175592 4.034869-1.09589C3.247821-.109589 2.161893-.109589 2.042341-.109589C1.414695-.109589 1.145704-.597758 1.145704-1.195517C1.145704-1.603985 1.344956-2.570361 1.683686-3.188045C1.992528-3.755915 2.540473-4.184309 3.088418-4.184309C3.427148-4.184309 3.805729-4.054795 3.945205-3.785803C3.785803-3.785803 3.646326-3.785803 3.506849-3.646326C3.347447-3.496887 3.327522-3.327522 3.327522-3.257783C3.327522-3.01868 3.506849-2.909091 3.696139-2.909091C3.985056-2.909091 4.254047-3.148194 4.254047-3.5467C4.254047-4.034869 3.785803-4.403487 3.078456-4.403487C1.733499-4.403487 .408468-2.978829 .408468-1.574097C.408468-.67746 .986301 .109589 2.022416 .109589C3.447073 .109589 4.283935-.946451 4.283935-1.066002Z'/>\n<path id='g0-111' d='M4.672478-2.719801C4.672478-3.755915 3.975093-4.403487 3.078456-4.403487C1.743462-4.403487 .408468-2.988792 .408468-1.574097C.408468-.587796 1.075965 .109589 2.002491 .109589C3.327522 .109589 4.672478-1.265255 4.672478-2.719801ZM3.945205-3.108344C3.945205-2.719801 3.745953-1.673724 3.367372-1.026152C3.01868-.448319 2.470735-.109589 2.012453-.109589C1.58406-.109589 1.145704-.418431 1.145704-1.195517C1.145704-1.683686 1.404732-2.759651 1.723537-3.267746C2.221669-4.034869 2.789539-4.184309 3.068493-4.184309C3.646326-4.184309 3.945205-3.706102 3.945205-3.108344Z'/>\n<path id='g0-116' d='M3.128269-1.424658C3.128269-1.524284 3.048568-1.524284 3.008717-1.524284C2.919054-1.524284 2.909091-1.494396 2.859278-1.384807C2.430884-.348692 1.902864-.109589 1.564134-.109589C1.354919-.109589 1.255293-.239103 1.255293-.56787C1.255293-.806974 1.275218-.876712 1.315068-1.046077L2.052304-3.985056H2.988792C3.188045-3.985056 3.287671-3.985056 3.287671-4.184309C3.287671-4.293898 3.188045-4.293898 3.008717-4.293898H2.132005C2.49066-5.708593 2.540473-5.907846 2.540473-5.967621C2.540473-6.136986 2.420922-6.236613 2.251557-6.236613C2.221669-6.236613 1.942715-6.22665 1.853051-5.877958L1.464508-4.293898H.52802C.328767-4.293898 .229141-4.293898 .229141-4.104608C.229141-3.985056 .308842-3.985056 .508095-3.985056H1.384807C.667497-1.155666 .627646-.986301 .627646-.806974C.627646-.268991 1.006227 .109589 1.544209 .109589C2.560399 .109589 3.128269-1.344956 3.128269-1.424658Z'/>\n<path id='g1-40' d='M3.297634 2.391034C3.297634 2.361146 3.297634 2.34122 3.128269 2.171856C1.882939 .916563 1.564134-.966376 1.564134-2.49066C1.564134-4.224159 1.942715-5.957659 3.16812-7.202989C3.297634-7.32254 3.297634-7.342466 3.297634-7.372354C3.297634-7.442092 3.257783-7.47198 3.198007-7.47198C3.098381-7.47198 2.201743-6.794521 1.613948-5.529265C1.105853-4.433375 .986301-3.327522 .986301-2.49066C.986301-1.713574 1.09589-.508095 1.643836 .617684C2.241594 1.843088 3.098381 2.49066 3.198007 2.49066C3.257783 2.49066 3.297634 2.460772 3.297634 2.391034Z'/>\n<path id='g1-41' d='M2.879203-2.49066C2.879203-3.267746 2.769614-4.473225 2.221669-5.599004C1.62391-6.824408 .767123-7.47198 .667497-7.47198C.607721-7.47198 .56787-7.43213 .56787-7.372354C.56787-7.342466 .56787-7.32254 .757161-7.143213C1.733499-6.156912 2.30137-4.572852 2.30137-2.49066C2.30137-.787049 1.932752 .966376 .697385 2.221669C.56787 2.34122 .56787 2.361146 .56787 2.391034C.56787 2.450809 .607721 2.49066 .667497 2.49066C.767123 2.49066 1.663761 1.8132 2.251557 .547945C2.759651-.547945 2.879203-1.653798 2.879203-2.49066Z'/>\n</defs>\n<g id='page1'>\n<use x='159.135161' y='0' xlink:href='#g0-99'/>\n<use x='163.446558' y='0' xlink:href='#g0-111'/>\n<use x='168.27568' y='0' xlink:href='#g0-116'/>\n<use x='171.873315' y='0' xlink:href='#g1-40'/>\n<use x='175.747793' y='0' xlink:href='#g0-18'/>\n<use x='180.701446' y='0' xlink:href='#g1-41'/>\n</g>\n</svg>")
$.bN.k(0,n).t(0,"sec(\\theta)","<?xml version='1.0' encoding='UTF-8'?>\n<!-- This file was generated by dvisvgm 3.0.3 -->\n<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='26.322865pt' height='9.96264pt' viewBox='158.694112 -7.47198 26.322865 9.96264'>\n<defs>\n<path id='g0-18' d='M4.533001-4.98132C4.533001-5.638854 4.353674-7.023661 3.337484-7.023661C1.952677-7.023661 .418431-4.214197 .418431-1.932752C.418431-.996264 .707347 .109589 1.613948 .109589C3.01868 .109589 4.533001-2.749689 4.533001-4.98132ZM3.556663-3.616438H1.474471C1.643836-4.254047 1.843088-5.051059 2.241594-5.758406C2.510585-6.246575 2.879203-6.804483 3.327522-6.804483C3.815691-6.804483 3.875467-6.166874 3.875467-5.599004C3.875467-5.110834 3.795766-4.60274 3.556663-3.616438ZM3.466999-3.297634C3.35741-2.839352 3.148194-1.992528 2.769614-1.275218C2.420922-.597758 2.042341-.109589 1.613948-.109589C1.285181-.109589 1.075965-.398506 1.075965-1.325031C1.075965-1.743462 1.135741-2.321295 1.39477-3.297634H3.466999Z'/>\n<path id='g0-99' d='M4.283935-1.066002C4.283935-1.125778 4.224159-1.195517 4.164384-1.195517C4.11457-1.195517 4.094645-1.175592 4.034869-1.09589C3.247821-.109589 2.161893-.109589 2.042341-.109589C1.414695-.109589 1.145704-.597758 1.145704-1.195517C1.145704-1.603985 1.344956-2.570361 1.683686-3.188045C1.992528-3.755915 2.540473-4.184309 3.088418-4.184309C3.427148-4.184309 3.805729-4.054795 3.945205-3.785803C3.785803-3.785803 3.646326-3.785803 3.506849-3.646326C3.347447-3.496887 3.327522-3.327522 3.327522-3.257783C3.327522-3.01868 3.506849-2.909091 3.696139-2.909091C3.985056-2.909091 4.254047-3.148194 4.254047-3.5467C4.254047-4.034869 3.785803-4.403487 3.078456-4.403487C1.733499-4.403487 .408468-2.978829 .408468-1.574097C.408468-.67746 .986301 .109589 2.022416 .109589C3.447073 .109589 4.283935-.946451 4.283935-1.066002Z'/>\n<path id='g0-101' d='M4.283935-1.066002C4.283935-1.125778 4.224159-1.195517 4.164384-1.195517C4.11457-1.195517 4.094645-1.175592 4.034869-1.09589C3.247821-.109589 2.161893-.109589 2.042341-.109589C1.265255-.109589 1.175592-.946451 1.175592-1.265255C1.175592-1.384807 1.185554-1.693649 1.334994-2.30137H1.863014C2.15193-2.30137 2.889166-2.321295 3.387298-2.530511C4.084682-2.82939 4.134496-3.417186 4.134496-3.556663C4.134496-3.995019 3.755915-4.403487 3.068493-4.403487C1.96264-4.403487 .458281-3.437111 .458281-1.693649C.458281-.67746 1.046077 .109589 2.022416 .109589C3.447073 .109589 4.283935-.946451 4.283935-1.066002ZM3.805729-3.556663C3.805729-2.520548 2.211706-2.520548 1.803238-2.520548H1.39477C1.783313-4.034869 2.809465-4.184309 3.068493-4.184309C3.536737-4.184309 3.805729-3.895392 3.805729-3.556663Z'/>\n<path id='g0-115' d='M3.945205-1.544209C3.945205-1.902864 3.755915-2.15193 3.636364-2.271482C3.367372-2.550436 3.078456-2.600249 2.6401-2.689913C2.281445-2.769614 1.882939-2.839352 1.882939-3.287671C1.882939-3.576588 2.122042-4.184309 2.998755-4.184309C3.247821-4.184309 3.745953-4.11457 3.895392-3.726027C3.616438-3.716065 3.417186-3.496887 3.417186-3.277709C3.417186-3.138232 3.506849-2.988792 3.726027-2.988792S4.184309-3.158157 4.184309-3.5467C4.184309-3.995019 3.755915-4.403487 2.998755-4.403487C1.683686-4.403487 1.315068-3.387298 1.315068-2.948941C1.315068-2.171856 2.052304-2.022416 2.34122-1.96264C2.859278-1.863014 3.377335-1.753425 3.377335-1.205479C3.377335-.946451 3.148194-.109589 1.952677-.109589C1.8132-.109589 1.046077-.109589 .816936-.637609C1.195517-.587796 1.444583-.886675 1.444583-1.165629C1.444583-1.39477 1.285181-1.514321 1.075965-1.514321C.816936-1.514321 .518057-1.305106 .518057-.856787C.518057-.288917 1.085928 .109589 1.942715 .109589C3.556663 .109589 3.945205-1.09589 3.945205-1.544209Z'/>\n<path id='g1-40' d='M3.297634 2.391034C3.297634 2.361146 3.297634 2.34122 3.128269 2.171856C1.882939 .916563 1.564134-.966376 1.564134-2.49066C1.564134-4.224159 1.942715-5.957659 3.16812-7.202989C3.297634-7.32254 3.297634-7.342466 3.297634-7.372354C3.297634-7.442092 3.257783-7.47198 3.198007-7.47198C3.098381-7.47198 2.201743-6.794521 1.613948-5.529265C1.105853-4.433375 .986301-3.327522 .986301-2.49066C.986301-1.713574 1.09589-.508095 1.643836 .617684C2.241594 1.843088 3.098381 2.49066 3.198007 2.49066C3.257783 2.49066 3.297634 2.460772 3.297634 2.391034Z'/>\n<path id='g1-41' d='M2.879203-2.49066C2.879203-3.267746 2.769614-4.473225 2.221669-5.599004C1.62391-6.824408 .767123-7.47198 .667497-7.47198C.607721-7.47198 .56787-7.43213 .56787-7.372354C.56787-7.342466 .56787-7.32254 .757161-7.143213C1.733499-6.156912 2.30137-4.572852 2.30137-2.49066C2.30137-.787049 1.932752 .966376 .697385 2.221669C.56787 2.34122 .56787 2.361146 .56787 2.391034C.56787 2.450809 .607721 2.49066 .667497 2.49066C.767123 2.49066 1.663761 1.8132 2.251557 .547945C2.759651-.547945 2.879203-1.653798 2.879203-2.49066Z'/>\n</defs>\n<g id='page1'>\n<use x='158.694112' y='0' xlink:href='#g0-115'/>\n<use x='163.3641' y='0' xlink:href='#g0-101'/>\n<use x='168.002971' y='0' xlink:href='#g0-99'/>\n<use x='172.314368' y='0' xlink:href='#g1-40'/>\n<use x='176.188846' y='0' xlink:href='#g0-18'/>\n<use x='181.142499' y='0' xlink:href='#g1-41'/>\n</g>\n</svg>")
$.bN.k(0,n).t(0,"csc(\\theta)","<?xml version='1.0' encoding='UTF-8'?>\n<!-- This file was generated by dvisvgm 3.0.3 -->\n<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='25.99539pt' height='9.96264pt' viewBox='158.857851 -7.47198 25.99539 9.96264'>\n<defs>\n<path id='g1-40' d='M3.297634 2.391034C3.297634 2.361146 3.297634 2.34122 3.128269 2.171856C1.882939 .916563 1.564134-.966376 1.564134-2.49066C1.564134-4.224159 1.942715-5.957659 3.16812-7.202989C3.297634-7.32254 3.297634-7.342466 3.297634-7.372354C3.297634-7.442092 3.257783-7.47198 3.198007-7.47198C3.098381-7.47198 2.201743-6.794521 1.613948-5.529265C1.105853-4.433375 .986301-3.327522 .986301-2.49066C.986301-1.713574 1.09589-.508095 1.643836 .617684C2.241594 1.843088 3.098381 2.49066 3.198007 2.49066C3.257783 2.49066 3.297634 2.460772 3.297634 2.391034Z'/>\n<path id='g1-41' d='M2.879203-2.49066C2.879203-3.267746 2.769614-4.473225 2.221669-5.599004C1.62391-6.824408 .767123-7.47198 .667497-7.47198C.607721-7.47198 .56787-7.43213 .56787-7.372354C.56787-7.342466 .56787-7.32254 .757161-7.143213C1.733499-6.156912 2.30137-4.572852 2.30137-2.49066C2.30137-.787049 1.932752 .966376 .697385 2.221669C.56787 2.34122 .56787 2.361146 .56787 2.391034C.56787 2.450809 .607721 2.49066 .667497 2.49066C.767123 2.49066 1.663761 1.8132 2.251557 .547945C2.759651-.547945 2.879203-1.653798 2.879203-2.49066Z'/>\n<path id='g0-18' d='M4.533001-4.98132C4.533001-5.638854 4.353674-7.023661 3.337484-7.023661C1.952677-7.023661 .418431-4.214197 .418431-1.932752C.418431-.996264 .707347 .109589 1.613948 .109589C3.01868 .109589 4.533001-2.749689 4.533001-4.98132ZM3.556663-3.616438H1.474471C1.643836-4.254047 1.843088-5.051059 2.241594-5.758406C2.510585-6.246575 2.879203-6.804483 3.327522-6.804483C3.815691-6.804483 3.875467-6.166874 3.875467-5.599004C3.875467-5.110834 3.795766-4.60274 3.556663-3.616438ZM3.466999-3.297634C3.35741-2.839352 3.148194-1.992528 2.769614-1.275218C2.420922-.597758 2.042341-.109589 1.613948-.109589C1.285181-.109589 1.075965-.398506 1.075965-1.325031C1.075965-1.743462 1.135741-2.321295 1.39477-3.297634H3.466999Z'/>\n<path id='g0-99' d='M4.283935-1.066002C4.283935-1.125778 4.224159-1.195517 4.164384-1.195517C4.11457-1.195517 4.094645-1.175592 4.034869-1.09589C3.247821-.109589 2.161893-.109589 2.042341-.109589C1.414695-.109589 1.145704-.597758 1.145704-1.195517C1.145704-1.603985 1.344956-2.570361 1.683686-3.188045C1.992528-3.755915 2.540473-4.184309 3.088418-4.184309C3.427148-4.184309 3.805729-4.054795 3.945205-3.785803C3.785803-3.785803 3.646326-3.785803 3.506849-3.646326C3.347447-3.496887 3.327522-3.327522 3.327522-3.257783C3.327522-3.01868 3.506849-2.909091 3.696139-2.909091C3.985056-2.909091 4.254047-3.148194 4.254047-3.5467C4.254047-4.034869 3.785803-4.403487 3.078456-4.403487C1.733499-4.403487 .408468-2.978829 .408468-1.574097C.408468-.67746 .986301 .109589 2.022416 .109589C3.447073 .109589 4.283935-.946451 4.283935-1.066002Z'/>\n<path id='g0-115' d='M3.945205-1.544209C3.945205-1.902864 3.755915-2.15193 3.636364-2.271482C3.367372-2.550436 3.078456-2.600249 2.6401-2.689913C2.281445-2.769614 1.882939-2.839352 1.882939-3.287671C1.882939-3.576588 2.122042-4.184309 2.998755-4.184309C3.247821-4.184309 3.745953-4.11457 3.895392-3.726027C3.616438-3.716065 3.417186-3.496887 3.417186-3.277709C3.417186-3.138232 3.506849-2.988792 3.726027-2.988792S4.184309-3.158157 4.184309-3.5467C4.184309-3.995019 3.755915-4.403487 2.998755-4.403487C1.683686-4.403487 1.315068-3.387298 1.315068-2.948941C1.315068-2.171856 2.052304-2.022416 2.34122-1.96264C2.859278-1.863014 3.377335-1.753425 3.377335-1.205479C3.377335-.946451 3.148194-.109589 1.952677-.109589C1.8132-.109589 1.046077-.109589 .816936-.637609C1.195517-.587796 1.444583-.886675 1.444583-1.165629C1.444583-1.39477 1.285181-1.514321 1.075965-1.514321C.816936-1.514321 .518057-1.305106 .518057-.856787C.518057-.288917 1.085928 .109589 1.942715 .109589C3.556663 .109589 3.945205-1.09589 3.945205-1.544209Z'/>\n</defs>\n<g id='page1'>\n<use x='158.857851' y='0' xlink:href='#g0-99'/>\n<use x='163.169247' y='0' xlink:href='#g0-115'/>\n<use x='167.839235' y='0' xlink:href='#g0-99'/>\n<use x='172.150631' y='0' xlink:href='#g1-40'/>\n<use x='176.025109' y='0' xlink:href='#g0-18'/>\n<use x='180.978762' y='0' xlink:href='#g1-41'/>\n</g>\n</svg>")
l=document
s=l.getElementById("canvas-container")
s.toString
r=A.a([],t.dw)
q=A.md(0)
l=l.createElement("canvas")
t.jQ.a(l)
p=new A.fs(l,s,r,B.d,B.d,q,B.d,B.d)
p.a=A.pB()
s.appendChild(l).toString
o=new A.jB()
o.kY()
o.w=p
l=o.f
l===$&&A.b("camera")
p.i6(l)
l=o.f
s=o.w
l.r=s
s.i6(l)
s=l.r
r=s.a
r===$&&A.b(m)
r.kF(s)
s=s.d.getContext("2d")
s.toString
r.e=s
s=l.c
r=l.d=s/1.7777777777777777
q=l.r.a
q===$&&A.b(m)
q=q.e
q===$&&A.b("ctx")
q.setTransform(1280/s,0,0,-720/r,640-0/s,360-0/r)
r=l.r.a
r===$&&A.b(m)
r.fo(l.f)
o.cB()},
jB:function jB(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.CW=_.ch=_.ay=_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=$
_.a=0
_.w=_.f=_.d=$},
jC:function jC(a){this.a=a},
jD:function jD(a){this.a=a},
jE:function jE(a){this.a=a},
jF:function jF(a){this.a=a},
jG:function jG(a){this.a=a},
jH:function jH(a){this.a=a},
jI:function jI(a){this.a=a},
tu(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
tg(a,b,c,d){var s,r,q,p,o,n=A.bd(d,c.h("n<0>"))
for(s=c.h("A<0>"),r=0;r<1;++r){q=a[r]
p=b.$1(q)
o=n.k(0,p)
if(o==null){o=A.a([],s)
n.t(0,p,o)
p=o}else p=o
J.lY(p,q)}return n},
nl(a,b){return A.pT(a,b,b)},
pT(a,b,c){return A.mF(function(){var s=a,r=b
var q=0,p=1,o,n,m
return function $async$nl(d,e){if(d===1){o=e
q=p}while(true)switch(q){case 0:n=s.length,m=0
case 2:if(!(m<s.length)){q=4
break}q=5
return A.qT(s[m])
case 5:case 3:s.length===n||(0,A.e)(s),++m
q=2
break
case 4:return A.mp()
case 1:return A.mq(o)}}},c)},
jw(a,b,c){return A.pZ(a,b,c,c)},
pZ(a,b,c,d){return A.mF(function(){var s=a,r=b,q=c
var p=0,o=1,n,m,l,k
return function $async$jw(e,f){if(e===1){n=f
p=o}while(true)switch(p){case 0:m=J.Z(s),l=0
case 2:if(!(l<m.gm(s))){p=4
break}k=m.k(s,l)
p=A.as(r.$2(l,k))?5:6
break
case 5:p=7
return k
case 7:case 6:case 3:++l
p=2
break
case 4:return A.mp()
case 1:return A.mq(n)}}},d)},
oF(){var s,r,q,p,o=null
try{o=A.mk()}catch(s){if(t.mA.b(A.bl(s))){r=$.ln
if(r!=null)return r
throw s}else throw s}if(J.T(o,$.ok)){r=$.ln
r.toString
return r}$.ok=o
if($.mW()==$.f7())r=$.ln=o.j6(".").l(0)
else{q=o.ft()
p=q.length-1
r=$.ln=p===0?q:B.b.v(q,0,p)}return r},
oQ(a){var s
if(!(a>=65&&a<=90))s=a>=97&&a<=122
else s=!0
return s},
oR(a,b){var s=a.length,r=b+2
if(s<r)return!1
if(!A.oQ(B.b.J(a,b)))return!1
if(B.b.J(a,b+1)!==58)return!1
if(s===r)return!0
return B.b.J(a,r)===47},
tm(a){var s,r,q,p
if(a.gm(a)===0)return!0
s=a.ga3(a)
for(r=A.bu(a,1,null,a.$ti.h("B.E")),q=r.$ti,r=new A.J(r,r.gm(r),q.h("J<B.E>")),q=q.h("B.E");r.q();){p=r.d
if(!J.T(p==null?q.a(p):p,s))return!1}return!0},
tw(a,b,c){var s=B.a.aj(a,null)
if(s<0)throw A.d(A.a4(A.k(a)+" contains no null elements.",null))
B.a.t(a,s,b)},
oZ(a,b,c){var s=B.a.aj(a,b)
if(s<0)throw A.d(A.a4(A.k(a)+" contains no elements matching "+b.l(0)+".",null))
B.a.t(a,s,null)},
t8(a,b){var s,r,q,p
for(s=new A.a5(a),r=t.E,s=new A.J(s,s.gm(s),r.h("J<t.E>")),r=r.h("t.E"),q=0;s.q();){p=s.d
if((p==null?r.a(p):p)===b)++q}return q},
lB(a,b,c){var s,r,q
if(b.length===0)for(s=0;!0;){r=B.b.aJ(a,"\n",s)
if(r===-1)return a.length-s>=c?s:null
if(r-s>=c)return s
s=r+1}r=B.b.aj(a,b)
for(;r!==-1;){q=r===0?0:B.b.dN(a,"\n",r-1)+1
if(c===r-q)return q
r=B.b.aJ(a,b,r+1)}return null}},J={
mQ(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ik(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.mL==null){A.ti()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.d(A.hB("Return interceptor for "+A.k(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.l3
if(o==null)o=$.l3=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.tp(a)
if(p!=null)return p
if(typeof a=="function")return B.b6
s=Object.getPrototypeOf(a)
if(s==null)return B.aC
if(s===Object.prototype)return B.aC
if(typeof q=="function"){o=$.l3
if(o==null)o=$.l3=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.a1,enumerable:false,writable:true,configurable:true})
return B.a1}return B.a1},
nm(a,b){if(a<0||a>4294967295)throw A.d(A.Y(a,0,4294967295,"length",null))
return J.nn(new Array(a),b)},
m4(a,b){if(a<0)throw A.d(A.a4("Length must be a non-negative integer: "+a,null))
return A.a(new Array(a),b.h("A<0>"))},
nn(a,b){return J.jq(A.a(a,b.h("A<0>")),b)},
jq(a,b){a.fixed$length=Array
return a},
pU(a,b){var s=t.bP
return J.n1(s.a(a),s.a(b))},
no(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
pV(a,b){var s,r
for(s=a.length;b<s;){r=B.b.E(a,b)
if(r!==32&&r!==13&&!J.no(r))break;++b}return b},
pW(a,b){var s,r
for(;b>0;b=s){s=b-1
r=B.b.J(a,s)
if(r!==32&&r!==13&&!J.no(r))break}return b},
bj(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cW.prototype
return J.e_.prototype}if(typeof a=="string")return J.bA.prototype
if(a==null)return J.dZ.prototype
if(typeof a=="boolean")return J.fU.prototype
if(a.constructor==Array)return J.A.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bB.prototype
return a}if(a instanceof A.D)return a
return J.ik(a)},
tc(a){if(typeof a=="number")return J.c_.prototype
if(typeof a=="string")return J.bA.prototype
if(a==null)return a
if(a.constructor==Array)return J.A.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bB.prototype
return a}if(a instanceof A.D)return a
return J.ik(a)},
Z(a){if(typeof a=="string")return J.bA.prototype
if(a==null)return a
if(a.constructor==Array)return J.A.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bB.prototype
return a}if(a instanceof A.D)return a
return J.ik(a)},
ba(a){if(a==null)return a
if(a.constructor==Array)return J.A.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bB.prototype
return a}if(a instanceof A.D)return a
return J.ik(a)},
oI(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cW.prototype
return J.e_.prototype}if(a==null)return a
if(!(a instanceof A.D))return J.bE.prototype
return a},
oJ(a){if(typeof a=="number")return J.c_.prototype
if(a==null)return a
if(!(a instanceof A.D))return J.bE.prototype
return a},
oK(a){if(typeof a=="number")return J.c_.prototype
if(typeof a=="string")return J.bA.prototype
if(a==null)return a
if(!(a instanceof A.D))return J.bE.prototype
return a},
lD(a){if(typeof a=="string")return J.bA.prototype
if(a==null)return a
if(!(a instanceof A.D))return J.bE.prototype
return a},
oL(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bB.prototype
return a}if(a instanceof A.D)return a
return J.ik(a)},
td(a){if(a==null)return a
if(!(a instanceof A.D))return J.bE.prototype
return a},
lW(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.tc(a).T(a,b)},
T(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.bj(a).W(a,b)},
cM(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.oK(a).C(a,b)},
pk(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.oJ(a).U(a,b)},
X(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||A.tn(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.Z(a).k(a,b)},
lX(a,b,c){return J.ba(a).t(a,b,c)},
pl(a,b,c,d){return J.oL(a).la(a,b,c,d)},
pm(a,b,c,d){return J.oL(a).lv(a,b,c,d)},
lY(a,b){return J.ba(a).n(a,b)},
lZ(a,b){return J.lD(a).c1(a,b)},
n0(a,b){return J.lD(a).J(a,b)},
n1(a,b){return J.oK(a).az(a,b)},
ip(a,b){return J.ba(a).ae(a,b)},
iq(a){return J.ba(a).ga3(a)},
aA(a){return J.bj(a).gZ(a)},
f8(a){return J.Z(a).gan(a)},
ab(a){return J.ba(a).gI(a)},
n2(a){return J.ba(a).gp(a)},
W(a){return J.Z(a).gm(a)},
pn(a){return J.td(a).gak(a)},
po(a){if(typeof a==="number")return a>0?1:a<0?-1:a
return J.oI(a).gel(a)},
x(a,b,c){return J.ba(a).dO(a,b,c)},
pp(a,b,c){return J.lD(a).iK(a,b,c)},
pq(a,b){return J.Z(a).sm(a,b)},
n3(a,b){return J.ba(a).b3(a,b)},
n4(a,b){return J.ba(a).cF(a,b)},
pr(a){return J.oJ(a).bl(a)},
f9(a){return J.ba(a).av(a)},
bx(a){return J.bj(a).l(a)},
n5(a){return J.lD(a).e0(a)},
ps(a,b){return J.ba(a).e2(a,b)},
dX:function dX(){},
fU:function fU(){},
dZ:function dZ(){},
b3:function b3(){},
cu:function cu(){},
he:function he(){},
bE:function bE(){},
bB:function bB(){},
A:function A(a){this.$ti=a},
jr:function jr(a){this.$ti=a},
at:function at(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
c_:function c_(){},
cW:function cW(){},
e_:function e_(){},
bA:function bA(){}},B={}
var w=[A,J,B]
var $={}
A.m6.prototype={}
J.dX.prototype={
W(a,b){return a===b},
gZ(a){return A.bL(a)},
l(a){return"Instance of '"+A.k_(a)+"'"}}
J.fU.prototype={
l(a){return String(a)},
gZ(a){return a?519018:218159},
$iy:1}
J.dZ.prototype={
W(a,b){return null==b},
l(a){return"null"},
gZ(a){return 0},
$iak:1}
J.b3.prototype={}
J.cu.prototype={
gZ(a){return 0},
l(a){return String(a)}}
J.he.prototype={}
J.bE.prototype={}
J.bB.prototype={
l(a){var s=a[$.p3()]
if(s==null)return this.kL(a)
return"JavaScript function for "+J.bx(s)},
$ibI:1}
J.A.prototype={
n(a,b){A.v(a).c.a(b)
if(!!a.fixed$length)A.M(A.S("add"))
a.push(b)},
dZ(a,b){if(!!a.fixed$length)A.M(A.S("removeAt"))
if(b<0||b>=a.length)throw A.d(A.k0(b,null))
return a.splice(b,1)[0]},
bB(a,b,c){A.v(a).c.a(c)
if(!!a.fixed$length)A.M(A.S("insert"))
if(b<0||b>a.length)throw A.d(A.k0(b,null))
a.splice(b,0,c)},
dK(a,b,c){var s,r
A.v(a).h("i<1>").a(c)
if(!!a.fixed$length)A.M(A.S("insertAll"))
A.nz(b,0,a.length,"index")
if(!t.gt.b(c))c=J.f9(c)
s=J.W(c)
a.length=a.length+s
r=b+s
this.da(a,r,a.length,a,b)
this.kd(a,b,r,c)},
d2(a){if(!!a.fixed$length)A.M(A.S("removeLast"))
if(a.length===0)throw A.d(A.cg(a,-1))
return a.pop()},
a4(a,b){var s
if(!!a.fixed$length)A.M(A.S("remove"))
for(s=0;s<a.length;++s)if(J.T(a[s],b)){a.splice(s,1)
return!0}return!1},
eI(a,b,c){var s,r,q,p,o
A.v(a).h("y(1)").a(b)
s=[]
r=a.length
for(q=0;q<r;++q){p=a[q]
if(!A.as(b.$1(p)))s.push(p)
if(a.length!==r)throw A.d(A.ar(a))}o=s.length
if(o===r)return
this.sm(a,o)
for(q=0;q<s.length;++q)a[q]=s[q]},
e2(a,b){var s=A.v(a)
return new A.am(a,s.h("y(1)").a(b),s.h("am<1>"))},
H(a,b){var s
A.v(a).h("i<1>").a(b)
if(!!a.fixed$length)A.M(A.S("addAll"))
if(Array.isArray(b)){this.l9(a,b)
return}for(s=J.ab(b);s.q();)a.push(s.gB())},
l9(a,b){var s,r
t.dG.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.d(A.ar(a))
for(r=0;r<s;++r)a.push(b[r])},
bO(a){if(!!a.fixed$length)A.M(A.S("clear"))
a.length=0},
b6(a,b){var s,r
A.v(a).h("~(1)").a(b)
s=a.length
for(r=0;r<s;++r){b.$1(a[r])
if(a.length!==s)throw A.d(A.ar(a))}},
dO(a,b,c){var s=A.v(a)
return new A.G(a,s.X(c).h("1(2)").a(b),s.h("@<1>").X(c).h("G<1,2>"))},
aB(a,b){var s,r=A.bC(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.t(r,s,A.k(a[s]))
return r.join(b)},
aP(a){return this.aB(a,"")},
b3(a,b){return A.bu(a,b,null,A.v(a).c)},
b0(a,b){var s,r,q
A.v(a).h("1(1,1)").a(b)
s=a.length
if(s===0)throw A.d(A.al())
if(0>=s)return A.c(a,0)
r=a[0]
for(q=1;q<s;++q){r=b.$2(r,a[q])
if(s!==a.length)throw A.d(A.ar(a))}return r},
fc(a,b,c,d){var s,r,q
d.a(b)
A.v(a).X(d).h("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.d(A.ar(a))}return r},
ae(a,b){if(!(b>=0&&b<a.length))return A.c(a,b)
return a[b]},
b4(a,b,c){if(b<0||b>a.length)throw A.d(A.Y(b,0,a.length,"start",null))
if(c<b||c>a.length)throw A.d(A.Y(c,b,a.length,"end",null))
if(b===c)return A.a([],A.v(a))
return A.a(a.slice(b,c),A.v(a))},
ga3(a){if(a.length>0)return a[0]
throw A.d(A.al())},
gp(a){var s=a.length
if(s>0)return a[s-1]
throw A.d(A.al())},
da(a,b,c,d,e){var s,r,q,p,o
A.v(a).h("i<1>").a(d)
if(!!a.immutable$list)A.M(A.S("setRange"))
A.aG(b,c,a.length)
s=c-b
if(s===0)return
A.b6(e,"skipCount")
if(t.gs.b(d)){r=d
q=e}else{r=J.n3(d,e).bm(0,!1)
q=0}p=J.Z(r)
if(q+s>p.gm(r))throw A.d(A.pS())
if(q<b)for(o=s-1;o>=0;--o)a[b+o]=p.k(r,q+o)
else for(o=0;o<s;++o)a[b+o]=p.k(r,q+o)},
kd(a,b,c,d){return this.da(a,b,c,d,0)},
aX(a,b){var s,r
A.v(a).h("y(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(A.as(b.$1(a[r])))return!0
if(a.length!==s)throw A.d(A.ar(a))}return!1},
cp(a,b){var s,r
A.v(a).h("y(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!A.as(b.$1(a[r])))return!1
if(a.length!==s)throw A.d(A.ar(a))}return!0},
cF(a,b){var s,r=A.v(a)
r.h("h(1,1)?").a(b)
if(!!a.immutable$list)A.M(A.S("sort"))
s=b==null?J.rC():b
A.nF(a,s,r.c)},
aJ(a,b,c){var s,r=a.length
if(c>=r)return-1
for(s=c;s<r;++s){if(!(s<a.length))return A.c(a,s)
if(J.T(a[s],b))return s}return-1},
aj(a,b){return this.aJ(a,b,0)},
G(a,b){var s
for(s=0;s<a.length;++s)if(J.T(a[s],b))return!0
return!1},
gan(a){return a.length===0},
l(a){return A.jo(a,"[","]")},
bm(a,b){var s=A.a(a.slice(0),A.v(a))
return s},
av(a){return this.bm(a,!0)},
gI(a){return new J.at(a,a.length,A.v(a).h("at<1>"))},
gZ(a){return A.bL(a)},
gm(a){return a.length},
sm(a,b){if(!!a.fixed$length)A.M(A.S("set length"))
if(b<0)throw A.d(A.Y(b,0,null,"newLength",null))
if(b>a.length)A.v(a).c.a(null)
a.length=b},
k(a,b){if(!(b>=0&&b<a.length))throw A.d(A.cg(a,b))
return a[b]},
t(a,b,c){A.v(a).c.a(c)
if(!!a.immutable$list)A.M(A.S("indexed set"))
if(!(b>=0&&b<a.length))throw A.d(A.cg(a,b))
a[b]=c},
iB(a,b){var s
A.v(a).h("y(1)").a(b)
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(A.as(b.$1(a[s])))return s
return-1},
$iO:1,
$ii:1,
$in:1}
J.jr.prototype={}
J.at.prototype={
gB(){var s=this.d
return s==null?this.$ti.c.a(s):s},
q(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.d(A.e(q))
s=r.c
if(s>=p){r.shg(null)
return!1}r.shg(q[s]);++r.c
return!0},
shg(a){this.d=this.$ti.h("1?").a(a)},
$iQ:1}
J.c_.prototype={
az(a,b){var s
A.lf(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gdM(b)
if(this.gdM(a)===s)return 0
if(this.gdM(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gdM(a){return a===0?1/a<0:a<0},
gel(a){var s
if(a>0)s=1
else s=a<0?-1:a
return s},
bl(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.d(A.S(""+a+".toInt()"))},
eT(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.d(A.S(""+a+".ceil()"))},
fu(a,b){var s
if(b>20)throw A.d(A.Y(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gdM(a))return"-"+s
return s},
ov(a,b){var s,r,q,p
if(b<2||b>36)throw A.d(A.Y(b,2,36,"radix",null))
s=a.toString(b)
if(B.b.J(s,s.length-1)!==41)return s
r=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(r==null)A.M(A.S("Unexpected toString result: "+s))
q=r.length
if(1>=q)return A.c(r,1)
s=r[1]
if(3>=q)return A.c(r,3)
p=+r[3]
q=r[2]
if(q!=null){s+=q
p-=q.length}return s+B.b.C("0",p)},
l(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gZ(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
T(a,b){A.lf(b)
return a+b},
C(a,b){return a*b},
a6(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
aV(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.hI(a,b)},
aO(a,b){return(a|0)===a?a/b|0:this.hI(a,b)},
hI(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.d(A.S("Result of truncating division is "+A.k(s)+": "+A.k(a)+" ~/ "+b))},
cJ(a,b){var s
if(a>0)s=this.hG(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
ly(a,b){if(0>b)throw A.d(A.f4(b))
return this.hG(a,b)},
hG(a,b){return b>31?0:a>>>b},
$iae:1,
$iF:1,
$iad:1}
J.cW.prototype={
gel(a){var s
if(a>0)s=1
else s=a<0?-1:a
return s},
$ih:1}
J.e_.prototype={}
J.bA.prototype={
J(a,b){if(b<0)throw A.d(A.cg(a,b))
if(b>=a.length)A.M(A.cg(a,b))
return a.charCodeAt(b)},
E(a,b){if(b>=a.length)throw A.d(A.cg(a,b))
return a.charCodeAt(b)},
eO(a,b,c){var s=b.length
if(c>s)throw A.d(A.Y(c,0,s,null,null))
return new A.i7(b,a,c)},
c1(a,b){return this.eO(a,b,0)},
iK(a,b,c){var s,r,q=null
if(c<0||c>b.length)throw A.d(A.Y(c,0,b.length,q,q))
s=a.length
if(c+s>b.length)return q
for(r=0;r<s;++r)if(this.J(b,c+r)!==this.E(a,r))return q
return new A.da(c,a)},
T(a,b){return a+b},
be(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.aq(a,r-s)},
j3(a,b,c){A.nz(0,0,a.length,"startIndex")
return A.tB(a,b,c,0)},
ce(a,b){if(typeof b=="string")return A.a(a.split(b),t.s)
else if(b instanceof A.ct&&b.ghw().exec("").length-2===0)return A.a(a.split(b.b),t.s)
else return this.lj(a,b)},
cb(a,b,c,d){var s=A.aG(b,c,a.length)
return A.p0(a,b,s,d)},
lj(a,b){var s,r,q,p,o,n,m=A.a([],t.s)
for(s=J.lZ(b,a),s=s.gI(s),r=0,q=1;s.q();){p=s.gB()
o=p.gP(p)
n=p.gS()
q=n-o
if(q===0&&r===o)continue
B.a.n(m,this.v(a,r,o))
r=n}if(r<a.length||q>0)B.a.n(m,this.aq(a,r))
return m},
a9(a,b,c){var s
t.oc.a(b)
if(c<0||c>a.length)throw A.d(A.Y(c,0,a.length,null,null))
if(typeof b=="string"){s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)}return J.pp(b,a,c)!=null},
Y(a,b){return this.a9(a,b,0)},
v(a,b,c){return a.substring(b,A.aG(b,c,a.length))},
aq(a,b){return this.v(a,b,null)},
e0(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(this.E(p,0)===133){s=J.pV(p,1)
if(s===o)return""}else s=0
r=o-1
q=this.J(p,r)===133?J.pW(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
C(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.d(B.b2)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
nM(a,b){var s=b-a.length
if(s<=0)return a
return a+this.C(" ",s)},
aJ(a,b,c){var s
if(c<0||c>a.length)throw A.d(A.Y(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
aj(a,b){return this.aJ(a,b,0)},
dN(a,b,c){var s,r
if(c==null)c=a.length
else if(c<0||c>a.length)throw A.d(A.Y(c,0,a.length,null,null))
s=b.length
r=a.length
if(c+s>r)c=r-s
return a.lastIndexOf(b,c)},
ff(a,b){return this.dN(a,b,null)},
mK(a,b,c){var s=a.length
if(c>s)throw A.d(A.Y(c,0,s,null,null))
return A.ck(a,b,c)},
G(a,b){return this.mK(a,b,0)},
az(a,b){var s
A.aq(b)
if(a===b)s=0
else s=a<b?-1:1
return s},
l(a){return a},
gZ(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gm(a){return a.length},
k(a,b){if(!(b>=0&&b<a.length))throw A.d(A.cg(a,b))
return a[b]},
$iae:1,
$id2:1,
$im:1}
A.cc.prototype={
gI(a){var s=A.z(this)
return new A.dB(J.ab(this.gbv()),s.h("@<1>").X(s.z[1]).h("dB<1,2>"))},
gm(a){return J.W(this.gbv())},
gan(a){return J.f8(this.gbv())},
b3(a,b){var s=A.z(this)
return A.nd(J.n3(this.gbv(),b),s.c,s.z[1])},
ae(a,b){return A.z(this).z[1].a(J.ip(this.gbv(),b))},
ga3(a){return A.z(this).z[1].a(J.iq(this.gbv()))},
gp(a){return A.z(this).z[1].a(J.n2(this.gbv()))},
l(a){return J.bx(this.gbv())}}
A.dB.prototype={
q(){return this.a.q()},
gB(){return this.$ti.z[1].a(this.a.gB())},
$iQ:1}
A.cn.prototype={
gbv(){return this.a}}
A.ey.prototype={$iO:1}
A.ev.prototype={
k(a,b){return this.$ti.z[1].a(J.X(this.a,b))},
t(a,b,c){var s=this.$ti
J.lX(this.a,b,s.c.a(s.z[1].a(c)))},
sm(a,b){J.pq(this.a,b)},
n(a,b){var s=this.$ti
J.lY(this.a,s.c.a(s.z[1].a(b)))},
cF(a,b){var s
this.$ti.h("h(2,2)?").a(b)
s=b==null?null:new A.kL(this,b)
J.n4(this.a,s)},
$iO:1,
$in:1}
A.kL.prototype={
$2(a,b){var s=this.a.$ti,r=s.c
r.a(a)
r.a(b)
s=s.z[1]
return this.b.$2(s.a(a),s.a(b))},
$S(){return this.a.$ti.h("h(1,1)")}}
A.aL.prototype={
gbv(){return this.a}}
A.e0.prototype={
l(a){return"LateInitializationError: "+this.a}}
A.a5.prototype={
gm(a){return this.a.length},
k(a,b){return B.b.J(this.a,b)}}
A.lO.prototype={
$0(){var s=new A.ap($.a6,t.av)
s.ha(null)
return s},
$S:88}
A.kb.prototype={}
A.O.prototype={}
A.B.prototype={
gI(a){var s=this
return new A.J(s,s.gm(s),A.z(s).h("J<B.E>"))},
gan(a){return this.gm(this)===0},
ga3(a){if(this.gm(this)===0)throw A.d(A.al())
return this.ae(0,0)},
gp(a){var s=this
if(s.gm(s)===0)throw A.d(A.al())
return s.ae(0,s.gm(s)-1)},
aB(a,b){var s,r,q,p=this,o=p.gm(p)
if(b.length!==0){if(o===0)return""
s=A.k(p.ae(0,0))
if(o!==p.gm(p))throw A.d(A.ar(p))
for(r=s,q=1;q<o;++q){r=r+b+A.k(p.ae(0,q))
if(o!==p.gm(p))throw A.d(A.ar(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.k(p.ae(0,q))
if(o!==p.gm(p))throw A.d(A.ar(p))}return r.charCodeAt(0)==0?r:r}},
aP(a){return this.aB(a,"")},
b0(a,b){var s,r,q,p=this
A.z(p).h("B.E(B.E,B.E)").a(b)
s=p.gm(p)
if(s===0)throw A.d(A.al())
r=p.ae(0,0)
for(q=1;q<s;++q){r=b.$2(r,p.ae(0,q))
if(s!==p.gm(p))throw A.d(A.ar(p))}return r},
b3(a,b){return A.bu(this,b,null,A.z(this).h("B.E"))},
bm(a,b){return A.j(this,b,A.z(this).h("B.E"))},
av(a){return this.bm(a,!0)}}
A.aD.prototype={
cf(a,b,c,d){var s,r=this.b
A.b6(r,"start")
s=this.c
if(s!=null){A.b6(s,"end")
if(r>s)throw A.d(A.Y(r,0,s,"start",null))}},
glk(){var s=J.W(this.a),r=this.c
if(r==null||r>s)return s
return r},
glD(){var s=J.W(this.a),r=this.b
if(r>s)return s
return r},
gm(a){var s,r=J.W(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
if(typeof s!=="number")return s.U()
return s-q},
ae(a,b){var s=this,r=s.glD()+b
if(b<0||r>=s.glk())throw A.d(A.fS(b,s,"index",null,null))
return J.ip(s.a,r)},
b3(a,b){var s,r,q=this
A.b6(b,"count")
s=q.b+b
r=q.c
if(r!=null&&s>=r)return new A.dJ(q.$ti.h("dJ<1>"))
return A.bu(q.a,s,r,q.$ti.c)},
oq(a,b){var s,r,q,p=this
A.b6(b,"count")
s=p.c
r=p.b
q=r+b
if(s==null)return A.bu(p.a,r,q,p.$ti.c)
else{if(s<q)return p
return A.bu(p.a,r,q,p.$ti.c)}},
bm(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.Z(n),l=m.gm(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.m4(0,n):J.nm(0,n)}r=A.bC(s,m.ae(n,o),b,p.$ti.c)
for(q=1;q<s;++q){B.a.t(r,q,m.ae(n,o+q))
if(m.gm(n)<l)throw A.d(A.ar(p))}return r},
av(a){return this.bm(a,!0)}}
A.J.prototype={
gB(){var s=this.d
return s==null?this.$ti.c.a(s):s},
q(){var s,r=this,q=r.a,p=J.Z(q),o=p.gm(q)
if(r.b!==o)throw A.d(A.ar(q))
s=r.c
if(s>=o){r.sbK(null)
return!1}r.sbK(p.ae(q,s));++r.c
return!0},
sbK(a){this.d=this.$ti.h("1?").a(a)},
$iQ:1}
A.cx.prototype={
gI(a){var s=A.z(this)
return new A.cy(J.ab(this.a),this.b,s.h("@<1>").X(s.z[1]).h("cy<1,2>"))},
gm(a){return J.W(this.a)},
gan(a){return J.f8(this.a)},
ga3(a){return this.b.$1(J.iq(this.a))},
gp(a){return this.b.$1(J.n2(this.a))},
ae(a,b){return this.b.$1(J.ip(this.a,b))}}
A.dH.prototype={$iO:1}
A.cy.prototype={
q(){var s=this,r=s.b
if(r.q()){s.sbK(s.c.$1(r.gB()))
return!0}s.sbK(null)
return!1},
gB(){var s=this.a
return s==null?this.$ti.z[1].a(s):s},
sbK(a){this.a=this.$ti.h("2?").a(a)}}
A.G.prototype={
gm(a){return J.W(this.a)},
ae(a,b){return this.b.$1(J.ip(this.a,b))}}
A.am.prototype={
gI(a){return new A.cE(J.ab(this.a),this.b,this.$ti.h("cE<1>"))}}
A.cE.prototype={
q(){var s,r
for(s=this.a,r=this.b;s.q();)if(A.as(r.$1(s.gB())))return!0
return!1},
gB(){return this.a.gB()}}
A.dM.prototype={
gI(a){var s=this.$ti
return new A.dN(J.ab(this.a),this.b,B.a4,s.h("@<1>").X(s.z[1]).h("dN<1,2>"))}}
A.dN.prototype={
gB(){var s=this.d
return s==null?this.$ti.z[1].a(s):s},
q(){var s,r,q=this
if(q.c==null)return!1
for(s=q.a,r=q.b;!q.c.q();){q.sbK(null)
if(s.q()){q.shh(null)
q.shh(J.ab(r.$1(s.gB())))}else return!1}q.sbK(q.c.gB())
return!0},
shh(a){this.c=this.$ti.h("Q<2>?").a(a)},
sbK(a){this.d=this.$ti.h("2?").a(a)},
$iQ:1}
A.bO.prototype={
b3(a,b){A.iu(b,"count",t.S)
A.b6(b,"count")
return new A.bO(this.a,this.b+b,A.z(this).h("bO<1>"))},
gI(a){return new A.ei(J.ab(this.a),this.b,A.z(this).h("ei<1>"))}}
A.cS.prototype={
gm(a){var s=J.W(this.a)-this.b
if(s>=0)return s
return 0},
b3(a,b){A.iu(b,"count",t.S)
A.b6(b,"count")
return new A.cS(this.a,this.b+b,this.$ti)},
$iO:1}
A.ei.prototype={
q(){var s,r
for(s=this.a,r=0;r<this.b;++r)s.q()
this.b=0
return s.q()},
gB(){return this.a.gB()}}
A.dJ.prototype={
gI(a){return B.a4},
gan(a){return!0},
gm(a){return 0},
ga3(a){throw A.d(A.al())},
gp(a){throw A.d(A.al())},
ae(a,b){throw A.d(A.Y(b,0,0,"index",null))},
b3(a,b){A.b6(b,"count")
return this}}
A.dK.prototype={
q(){return!1},
gB(){throw A.d(A.al())},
$iQ:1}
A.an.prototype={
gI(a){return new A.cF(J.ab(this.a),this.$ti.h("cF<1>"))}}
A.cF.prototype={
q(){var s,r
for(s=this.a,r=this.$ti.c;s.q();)if(r.b(s.gB()))return!0
return!1},
gB(){return this.$ti.c.a(this.a.gB())},
$iQ:1}
A.bp.prototype={
sm(a,b){throw A.d(A.S("Cannot change the length of a fixed-length list"))},
n(a,b){A.aE(a).h("bp.E").a(b)
throw A.d(A.S("Cannot add to a fixed-length list"))}}
A.bF.prototype={
t(a,b,c){A.z(this).h("bF.E").a(c)
throw A.d(A.S("Cannot modify an unmodifiable list"))},
sm(a,b){throw A.d(A.S("Cannot change the length of an unmodifiable list"))},
n(a,b){A.z(this).h("bF.E").a(b)
throw A.d(A.S("Cannot add to an unmodifiable list"))},
cF(a,b){A.z(this).h("h(bF.E,bF.E)?").a(b)
throw A.d(A.S("Cannot modify an unmodifiable list"))}}
A.dc.prototype={}
A.V.prototype={
gm(a){return J.W(this.a)},
ae(a,b){var s=this.a,r=J.Z(s)
return r.ae(s,r.gm(s)-1-b)}}
A.eT.prototype={}
A.cR.prototype={
l(a){return A.mc(this)},
gdE(a){return this.n4(0,A.z(this).h("be<1,2>"))},
n4(a,b){var s=this
return A.mF(function(){var r=a
var q=0,p=1,o,n,m,l,k,j
return function $async$gdE(c,d){if(c===1){o=d
q=p}while(true)switch(q){case 0:n=s.gbi(),n=n.gI(n),m=A.z(s),l=m.z[1],m=m.h("@<1>").X(l).h("be<1,2>")
case 2:if(!n.q()){q=3
break}k=n.gB()
j=s.k(0,k)
q=4
return new A.be(k,j==null?l.a(j):j,m)
case 4:q=2
break
case 3:return A.mp()
case 1:return A.mq(o)}}},b)},
$iaR:1}
A.r.prototype={
gm(a){return this.a},
ai(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
k(a,b){if(!this.ai(b))return null
return this.b[A.aq(b)]},
b6(a,b){var s,r,q,p,o,n=this.$ti
n.h("~(1,2)").a(b)
s=this.c
for(r=s.length,q=this.b,n=n.z[1],p=0;p<r;++p){o=A.aq(s[p])
b.$2(o,n.a(q[o]))}},
gbi(){return new A.ew(this,this.$ti.h("ew<1>"))}}
A.ew.prototype={
gI(a){var s=this.a.c
return new J.at(s,s.length,A.v(s).h("at<1>"))},
gm(a){return this.a.c.length}}
A.bY.prototype={
cI(){var s,r,q,p=this,o=p.$map
if(o==null){s=p.$ti
r=s.c
q=A.pN(r)
o=A.a7(A.rM(),q,r,s.z[1])
A.oH(p.a,o)
p.$map=o}return o},
ai(a){return this.cI().ai(a)},
k(a,b){return this.cI().k(0,b)},
b6(a,b){this.$ti.h("~(1,2)").a(b)
this.cI().b6(0,b)},
gbi(){var s=this.cI()
return new A.aP(s,A.z(s).h("aP<1>"))},
gm(a){return this.cI().a}}
A.iV.prototype={
$1(a){return this.a.b(a)},
$S:32}
A.dW.prototype={
W(a,b){if(b==null)return!1
return b instanceof A.dW&&this.a.W(0,b.a)&&A.dq(this)===A.dq(b)},
gZ(a){return A.d1(this.a,A.dq(this),B.n,B.n)},
l(a){var s=B.a.aB([A.mK(this.$ti.c)],", ")
return this.a.l(0)+" with "+("<"+s+">")}}
A.bZ.prototype={
$2(a,b){return this.a.$1$2(a,b,this.$ti.z[0])},
$S(){return A.tk(A.mJ(this.a),this.$ti)}}
A.kl.prototype={
bj(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
if(p==null)return null
s=Object.create(null)
r=q.b
if(r!==-1)s.arguments=p[r+1]
r=q.c
if(r!==-1)s.argumentsExpr=p[r+1]
r=q.d
if(r!==-1)s.expr=p[r+1]
r=q.e
if(r!==-1)s.method=p[r+1]
r=q.f
if(r!==-1)s.receiver=p[r+1]
return s}}
A.e8.prototype={
l(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
A.fV.prototype={
l(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.hC.prototype={
l(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.h5.prototype={
l(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"},
$ibo:1}
A.dL.prototype={}
A.eI.prototype={
l(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$ic5:1}
A.aM.prototype={
l(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.p1(r==null?"unknown":r)+"'"},
$ibI:1,
goN(){return this},
$C:"$1",
$R:1,
$D:null}
A.fw.prototype={$C:"$0",$R:0}
A.fx.prototype={$C:"$2",$R:2}
A.hv.prototype={}
A.ht.prototype={
l(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.p1(s)+"'"}}
A.cN.prototype={
W(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.cN))return!1
return this.$_target===b.$_target&&this.a===b.a},
gZ(a){return(A.mR(this.a)^A.bL(this.$_target))>>>0},
l(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.k_(this.a)+"'")}}
A.hl.prototype={
l(a){return"RuntimeError: "+this.a}}
A.hM.prototype={
l(a){return"Assertion failed: "+A.fG(this.a)}}
A.bc.prototype={
gm(a){return this.a},
gbi(){return new A.aP(this,A.z(this).h("aP<1>"))},
gjf(a){var s=A.z(this)
return A.jz(new A.aP(this,s.h("aP<1>")),new A.js(this),s.c,s.z[1])},
ai(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.iE(a)},
iE(a){var s=this.d
if(s==null)return!1
return this.d_(s[this.cZ(a)],a)>=0},
k(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.iF(b)},
iF(a){var s,r,q=this.d
if(q==null)return null
s=q[this.cZ(a)]
r=this.d_(s,a)
if(r<0)return null
return s[r].b},
t(a,b,c){var s,r,q=this,p=A.z(q)
p.c.a(b)
p.z[1].a(c)
if(typeof b=="string"){s=q.b
q.h4(s==null?q.b=q.eG():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.h4(r==null?q.c=q.eG():r,b,c)}else q.iH(b,c)},
iH(a,b){var s,r,q,p,o=this,n=A.z(o)
n.c.a(a)
n.z[1].a(b)
s=o.d
if(s==null)s=o.d=o.eG()
r=o.cZ(a)
q=s[r]
if(q==null)s[r]=[o.er(a,b)]
else{p=o.d_(q,a)
if(p>=0)q[p].b=b
else q.push(o.er(a,b))}},
dV(a,b){var s,r,q=this,p=A.z(q)
p.c.a(a)
p.h("2()").a(b)
if(q.ai(a)){s=q.k(0,a)
return s==null?p.z[1].a(s):s}r=b.$0()
q.t(0,a,r)
return r},
a4(a,b){var s=this
if(typeof b=="string")return s.hF(s.b,b)
else if(typeof b=="number"&&(b&0x3fffffff)===b)return s.hF(s.c,b)
else return s.iG(b)},
iG(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.cZ(a)
r=n[s]
q=o.d_(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.hN(p)
if(r.length===0)delete n[s]
return p.b},
b6(a,b){var s,r,q=this
A.z(q).h("~(1,2)").a(b)
s=q.e
r=q.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==q.r)throw A.d(A.ar(q))
s=s.c}},
h4(a,b,c){var s,r=A.z(this)
r.c.a(b)
r.z[1].a(c)
s=a[b]
if(s==null)a[b]=this.er(b,c)
else s.b=c},
hF(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.hN(s)
delete a[b]
return s.b},
h6(){this.r=this.r+1&1073741823},
er(a,b){var s=this,r=A.z(s),q=new A.ju(r.c.a(a),r.z[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.h6()
return q},
hN(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.h6()},
cZ(a){return J.aA(a)&0x3fffffff},
d_(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.T(a[r].a,b))return r
return-1},
l(a){return A.mc(this)},
eG(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$ijt:1}
A.js.prototype={
$1(a){var s=this.a,r=A.z(s)
s=s.k(0,r.c.a(a))
return s==null?r.z[1].a(s):s},
$S(){return A.z(this.a).h("2(1)")}}
A.ju.prototype={}
A.aP.prototype={
gm(a){return this.a.a},
gan(a){return this.a.a===0},
gI(a){var s=this.a,r=new A.cv(s,s.r,this.$ti.h("cv<1>"))
r.c=s.e
return r},
G(a,b){return this.a.ai(b)}}
A.cv.prototype={
gB(){return this.d},
q(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.ar(q))
s=r.c
if(s==null){r.sh5(null)
return!1}else{r.sh5(s.a)
r.c=s.c
return!0}},
sh5(a){this.d=this.$ti.h("1?").a(a)},
$iQ:1}
A.lF.prototype={
$1(a){return this.a(a)},
$S:42}
A.lG.prototype={
$2(a,b){return this.a(a,b)},
$S:54}
A.lH.prototype={
$1(a){return this.a(A.aq(a))},
$S:64}
A.ct.prototype={
l(a){return"RegExp/"+this.a+"/"+this.b.flags},
ghx(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.m5(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,!0)},
ghw(){var s=this,r=s.d
if(r!=null)return r
r=s.b
return s.d=A.m5(s.a+"|()",r.multiline,!r.ignoreCase,r.unicode,r.dotAll,!0)},
no(a){var s=this.b.exec(a)
if(s==null)return null
return new A.di(s)},
eO(a,b,c){var s=b.length
if(c>s)throw A.d(A.Y(c,0,s,null,null))
return new A.hL(this,b,c)},
c1(a,b){return this.eO(a,b,0)},
ln(a,b){var s,r=this.ghx()
if(r==null)r=t.K.a(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.di(s)},
lm(a,b){var s,r=this.ghw()
if(r==null)r=t.K.a(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
if(0>=s.length)return A.c(s,-1)
if(s.pop()!=null)return null
return new A.di(s)},
iK(a,b,c){if(c<0||c>b.length)throw A.d(A.Y(c,0,b.length,null,null))
return this.lm(b,c)},
$id2:1}
A.di.prototype={
gP(a){return this.b.index},
gS(){var s=this.b
return s.index+s[0].length},
gfG(){return this.b.length-1},
fH(a){var s,r,q,p,o
t.L.a(a)
s=A.a([],t.D)
for(r=a.length,q=this.b,p=0;p<a.length;a.length===r||(0,A.e)(a),++p){o=A.a1(a[p])
if(!(o>=0&&o<q.length))return A.c(q,o)
B.a.n(s,q[o])}return s},
$icY:1,
$icB:1}
A.hL.prototype={
gI(a){return new A.de(this.a,this.b,this.c)}}
A.de.prototype={
gB(){var s=this.d
return s==null?t.lu.a(s):s},
q(){var s,r,q,p,o,n=this,m=n.b
if(m==null)return!1
s=n.c
r=m.length
if(s<=r){q=n.a
p=q.ln(m,s)
if(p!=null){n.d=p
o=p.gS()
if(p.b.index===o){if(q.b.unicode){s=n.c
q=s+1
if(q<r){s=B.b.J(m,s)
if(s>=55296&&s<=56319){s=B.b.J(m,q)
s=s>=56320&&s<=57343}else s=!1}else s=!1}else s=!1
o=(s?o+1:o)+1}n.c=o
return!0}}n.b=n.d=null
return!1},
$iQ:1}
A.da.prototype={
gS(){return this.a+this.c.length},
gfG(){return 0},
fH(a){var s,r,q,p,o
t.L.a(a)
s=A.a([],t.s)
for(r=a.length,q=this.c,p=0;p<a.length;a.length===r||(0,A.e)(a),++p){o=A.a1(a[p])
if(o!==0)A.M(A.k0(o,null))
B.a.n(s,q)}return s},
$icY:1,
gP(a){return this.a}}
A.i7.prototype={
gI(a){return new A.i8(this.a,this.b,this.c)},
ga3(a){var s=this.b,r=this.a.indexOf(s,this.c)
if(r>=0)return new A.da(r,s)
throw A.d(A.al())}}
A.i8.prototype={
q(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.da(s,o)
q.c=r===q.c?r+1:r
return!0},
gB(){var s=this.d
s.toString
return s},
$iQ:1}
A.kM.prototype={
hE(){var s=this.b
if(s===this)throw A.d(A.m8(this.a))
return s}}
A.h1.prototype={}
A.d0.prototype={
gm(a){return a.length},
$icX:1}
A.e6.prototype={
t(a,b,c){A.a1(c)
A.li(b,a,a.length)
a[b]=c},
$iO:1,
$ii:1,
$in:1}
A.h0.prototype={
k(a,b){A.li(b,a,a.length)
return a[b]}}
A.e7.prototype={
k(a,b){A.li(b,a,a.length)
return a[b]},
b4(a,b,c){return new Uint32Array(a.subarray(b,A.rq(b,c,a.length)))},
$iqC:1}
A.cz.prototype={
gm(a){return a.length},
k(a,b){A.li(b,a,a.length)
return a[b]},
$icz:1,
$icD:1}
A.eF.prototype={}
A.eG.prototype={}
A.br.prototype={
h(a){return A.lb(v.typeUniverse,this,a)},
X(a){return A.r8(v.typeUniverse,this,a)}}
A.i1.prototype={}
A.eL.prototype={
l(a){return A.aW(this.a,null)},
$inL:1}
A.hZ.prototype={
l(a){return this.a}}
A.eM.prototype={$ic9:1}
A.kI.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:17}
A.kH.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:87}
A.kJ.prototype={
$0(){this.a.$0()},
$S:2}
A.kK.prototype={
$0(){this.a.$0()},
$S:2}
A.l9.prototype={
l0(a,b){if(self.setTimeout!=null)self.setTimeout(A.dp(new A.la(this,b),0),a)
else throw A.d(A.S("`setTimeout()` not found."))}}
A.la.prototype={
$0(){this.b.$0()},
$S:1}
A.hN.prototype={
eX(a,b){var s,r=this,q=r.$ti
q.h("1/?").a(b)
if(b==null)q.c.a(b)
if(!r.b)r.a.ha(b)
else{s=r.a
if(q.h("bb<1>").b(b))s.hd(b)
else s.ex(q.c.a(b))}},
ie(a,b){var s=this.a
if(this.b)s.cg(a,b)
else s.lb(a,b)}}
A.lg.prototype={
$1(a){return this.a.$2(0,a)},
$S:33}
A.lh.prototype={
$2(a,b){this.a.$2(1,new A.dL(a,t.k.a(b)))},
$S:34}
A.lt.prototype={
$2(a,b){this.a(A.a1(a),b)},
$S:37}
A.dh.prototype={
l(a){return"IterationMarker("+this.b+", "+A.k(this.a)+")"}}
A.ce.prototype={
gB(){var s,r=this.c
if(r==null){s=this.b
return s==null?this.$ti.c.a(s):s}return r.gB()},
q(){var s,r,q,p,o,n,m=this
for(s=m.$ti.h("Q<1>");!0;){r=m.c
if(r!=null)if(r.q())return!0
else m.shy(null)
q=function(a,b,c){var l,k=b
while(true)try{return a(k,l)}catch(j){l=j
k=c}}(m.a,0,1)
if(q instanceof A.dh){p=q.b
if(p===2){o=m.d
if(o==null||o.length===0){m.sh9(null)
return!1}if(0>=o.length)return A.c(o,-1)
m.a=o.pop()
continue}else{r=q.a
if(p===3)throw r
else{n=s.a(J.ab(r))
if(n instanceof A.ce){r=m.d
if(r==null)r=m.d=[]
B.a.n(r,m.a)
m.a=n.a
continue}else{m.shy(n)
continue}}}}else{m.sh9(q)
return!0}}return!1},
sh9(a){this.b=this.$ti.h("1?").a(a)},
shy(a){this.c=this.$ti.h("Q<1>?").a(a)},
$iQ:1}
A.eK.prototype={
gI(a){return new A.ce(this.a(),this.$ti.h("ce<1>"))}}
A.dx.prototype={
l(a){return A.k(this.a)},
$ia_:1,
gdc(){return this.b}}
A.hP.prototype={
ie(a,b){var s
A.f5(a,"error",t.K)
s=this.a
if((s.a&30)!==0)throw A.d(A.aH("Future already completed"))
s.cg(a,b)}}
A.eJ.prototype={
eX(a,b){var s,r=this.$ti
r.h("1/?").a(b)
s=this.a
if((s.a&30)!==0)throw A.d(A.aH("Future already completed"))
s.he(r.h("1/").a(b))}}
A.cG.prototype={
nJ(a){if((this.c&15)!==6)return!0
return this.b.b.fq(t.iW.a(this.d),a.a,t.k4,t.K)},
nq(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.ng.b(q))p=l.oj(q,m,a.b,o,n,t.k)
else p=l.fq(t.mq.a(q),m,o,n)
try{o=r.$ti.h("2/").a(p)
return o}catch(s){if(t.do.b(A.bl(s))){if((r.c&1)!==0)throw A.d(A.a4("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.d(A.a4("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.ap.prototype={
fs(a,b,c){var s,r,q,p=this.$ti
p.X(c).h("1/(2)").a(a)
s=$.a6
if(s===B.k){if(b!=null&&!t.ng.b(b)&&!t.mq.b(b))throw A.d(A.m_(b,"onError",u.w))}else{c.h("@<0/>").X(p.c).h("1(2)").a(a)
if(b!=null)b=A.rP(b,s)}r=new A.ap(s,c.h("ap<0>"))
q=b==null?1:3
this.es(new A.cG(r,q,a,b,p.h("@<1>").X(c).h("cG<1,2>")))
return r},
os(a,b){return this.fs(a,null,b)},
hL(a,b,c){var s,r=this.$ti
r.X(c).h("1/(2)").a(a)
s=new A.ap($.a6,c.h("ap<0>"))
this.es(new A.cG(s,3,a,b,r.h("@<1>").X(c).h("cG<1,2>")))
return s},
lx(a){this.a=this.a&1|16
this.c=a},
ew(a){this.a=a.a&30|this.a&1
this.c=a.c},
es(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.j_.a(r.c)
if((s.a&24)===0){s.es(a)
return}r.ew(s)}A.cJ(null,null,r.b,t.M.a(new A.kQ(r,a)))}},
hC(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.j_.a(m.c)
if((n.a&24)===0){n.hC(a)
return}m.ew(n)}l.a=m.dk(a)
A.cJ(null,null,m.b,t.M.a(new A.kY(l,m)))}},
dj(){var s=t.F.a(this.c)
this.c=null
return this.dk(s)},
dk(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
hc(a){var s,r,q,p=this
p.a^=2
try{a.fs(new A.kU(p),new A.kV(p),t.P)}catch(q){s=A.bl(q)
r=A.ch(q)
A.ty(new A.kW(p,s,r))}},
he(a){var s,r=this,q=r.$ti
q.h("1/").a(a)
if(q.h("bb<1>").b(a))if(q.b(a))A.kT(a,r)
else r.hc(a)
else{s=r.dj()
q.c.a(a)
r.a=8
r.c=a
A.dg(r,s)}},
ex(a){var s,r=this
r.$ti.c.a(a)
s=r.dj()
r.a=8
r.c=a
A.dg(r,s)},
cg(a,b){var s
t.k.a(b)
s=this.dj()
this.lx(A.iE(a,b))
A.dg(this,s)},
ha(a){var s=this.$ti
s.h("1/").a(a)
if(s.h("bb<1>").b(a)){this.hd(a)
return}this.lc(s.c.a(a))},
lc(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.cJ(null,null,s.b,t.M.a(new A.kS(s,a)))},
hd(a){var s=this,r=s.$ti
r.h("bb<1>").a(a)
if(r.b(a)){if((a.a&16)!==0){s.a^=2
A.cJ(null,null,s.b,t.M.a(new A.kX(s,a)))}else A.kT(a,s)
return}s.hc(a)},
lb(a,b){this.a^=2
A.cJ(null,null,this.b,t.M.a(new A.kR(this,a,b)))},
$ibb:1}
A.kQ.prototype={
$0(){A.dg(this.a,this.b)},
$S:1}
A.kY.prototype={
$0(){A.dg(this.b,this.a.a)},
$S:1}
A.kU.prototype={
$1(a){var s,r,q,p=this.a
p.a^=2
try{p.ex(p.$ti.c.a(a))}catch(q){s=A.bl(q)
r=A.ch(q)
p.cg(s,r)}},
$S:17}
A.kV.prototype={
$2(a,b){this.a.cg(t.K.a(a),t.k.a(b))},
$S:41}
A.kW.prototype={
$0(){this.a.cg(this.b,this.c)},
$S:1}
A.kS.prototype={
$0(){this.a.ex(this.b)},
$S:1}
A.kX.prototype={
$0(){A.kT(this.b,this.a)},
$S:1}
A.kR.prototype={
$0(){this.a.cg(this.b,this.c)},
$S:1}
A.l0.prototype={
$0(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.j7(t.mY.a(q.d),t.z)}catch(p){s=A.bl(p)
r=A.ch(p)
q=m.c&&t.u.a(m.b.a.c).a===s
o=m.a
if(q)o.c=t.u.a(m.b.a.c)
else o.c=A.iE(s,r)
o.b=!0
return}if(l instanceof A.ap&&(l.a&24)!==0){if((l.a&16)!==0){q=m.a
q.c=t.u.a(l.c)
q.b=!0}return}if(t.g7.b(l)){n=m.b.a
q=m.a
q.c=l.os(new A.l1(n),t.z)
q.b=!1}},
$S:1}
A.l1.prototype={
$1(a){return this.a},
$S:45}
A.l_.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.fq(o.h("2/(1)").a(p.d),m,o.h("2/"),n)}catch(l){s=A.bl(l)
r=A.ch(l)
q=this.a
q.c=A.iE(s,r)
q.b=!0}},
$S:1}
A.kZ.prototype={
$0(){var s,r,q,p,o,n,m=this
try{s=t.u.a(m.a.a.c)
p=m.b
if(p.a.nJ(s)&&p.a.e!=null){p.c=p.a.nq(s)
p.b=!1}}catch(o){r=A.bl(o)
q=A.ch(o)
p=t.u.a(m.a.a.c)
n=m.b
if(p.a===r)n.c=p
else n.c=A.iE(r,q)
n.b=!0}},
$S:1}
A.hO.prototype={}
A.el.prototype={
gm(a){var s,r,q=this,p={},o=new A.ap($.a6,t.hy)
p.a=0
s=q.$ti
r=s.h("~(1)?").a(new A.kd(p,q))
t.jE.a(new A.ke(p,o))
A.kO(q.a,q.b,r,!1,s.c)
return o}}
A.kd.prototype={
$1(a){this.b.$ti.c.a(a);++this.a.a},
$S(){return this.b.$ti.h("~(1)")}}
A.ke.prototype={
$0(){this.b.he(this.a.a)},
$S:1}
A.em.prototype={}
A.hu.prototype={}
A.i6.prototype={}
A.eS.prototype={$inS:1}
A.lr.prototype={
$0(){var s=this.a,r=this.b
A.f5(s,"error",t.K)
A.f5(r,"stackTrace",t.k)
A.pL(s,r)},
$S:1}
A.i5.prototype={
ol(a){var s,r,q
t.M.a(a)
try{if(B.k===$.a6){a.$0()
return}A.or(null,null,this,a,t.H)}catch(q){s=A.bl(q)
r=A.ch(q)
A.lq(t.K.a(s),t.k.a(r))}},
om(a,b,c){var s,r,q
c.h("~(0)").a(a)
c.a(b)
try{if(B.k===$.a6){a.$1(b)
return}A.os(null,null,this,a,b,t.H,c)}catch(q){s=A.bl(q)
r=A.ch(q)
A.lq(t.K.a(s),t.k.a(r))}},
i5(a){return new A.l7(this,t.M.a(a))},
mn(a,b){return new A.l8(this,b.h("~(0)").a(a),b)},
j7(a,b){b.h("0()").a(a)
if($.a6===B.k)return a.$0()
return A.or(null,null,this,a,b)},
fq(a,b,c,d){c.h("@<0>").X(d).h("1(2)").a(a)
d.a(b)
if($.a6===B.k)return a.$1(b)
return A.os(null,null,this,a,b,c,d)},
oj(a,b,c,d,e,f){d.h("@<0>").X(e).X(f).h("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.a6===B.k)return a.$2(b,c)
return A.rQ(null,null,this,a,b,c,d,e,f)},
j_(a,b,c,d){return b.h("@<0>").X(c).X(d).h("1(2,3)").a(a)}}
A.l7.prototype={
$0(){return this.a.ol(this.b)},
$S:1}
A.l8.prototype={
$1(a){var s=this.c
return this.a.om(this.b,s.a(a),s)},
$S(){return this.c.h("~(0)")}}
A.eC.prototype={
k(a,b){if(!A.as(this.y.$1(b)))return null
return this.kI(b)},
t(a,b,c){var s=this.$ti
this.kK(s.c.a(b),s.z[1].a(c))},
ai(a){if(!A.as(this.y.$1(a)))return!1
return this.kH(a)},
a4(a,b){if(!A.as(this.y.$1(b)))return null
return this.kJ(b)},
cZ(a){return this.x.$1(this.$ti.c.a(a))&1073741823},
d_(a,b){var s,r,q,p
if(a==null)return-1
s=a.length
for(r=this.$ti.c,q=this.w,p=0;p<s;++p)if(A.as(q.$2(r.a(a[p].a),r.a(b))))return p
return-1}}
A.l4.prototype={
$1(a){return this.a.b(a)},
$S:51}
A.bS.prototype={
hz(){return new A.bS(A.z(this).h("bS<1>"))},
gI(a){var s=this,r=new A.cH(s,s.r,A.z(s).h("cH<1>"))
r.c=s.e
return r},
gm(a){return this.a},
gan(a){return this.a===0},
G(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.nF.a(s[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return t.nF.a(r[b])!=null}else return this.lh(b)},
lh(a){var s=this.d
if(s==null)return!1
return this.hi(s[this.hf(a)],a)>=0},
ga3(a){var s=this.e
if(s==null)throw A.d(A.aH("No elements"))
return A.z(this).c.a(s.a)},
gp(a){var s=this.f
if(s==null)throw A.d(A.aH("No elements"))
return A.z(this).c.a(s.a)},
n(a,b){var s,r,q=this
A.z(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.h7(s==null?q.b=A.mr():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.h7(r==null?q.c=A.mr():r,b)}else return q.dd(b)},
dd(a){var s,r,q,p=this
A.z(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.mr()
r=p.hf(a)
q=s[r]
if(q==null)s[r]=[p.eH(a)]
else{if(p.hi(q,a)>=0)return!1
q.push(p.eH(a))}return!0},
h7(a,b){A.z(this).c.a(b)
if(t.nF.a(a[b])!=null)return!1
a[b]=this.eH(b)
return!0},
lr(){this.r=this.r+1&1073741823},
eH(a){var s,r=this,q=new A.i2(A.z(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.lr()
return q},
hf(a){return J.aA(a)&1073741823},
hi(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.T(a[r].a,b))return r
return-1}}
A.i2.prototype={}
A.cH.prototype={
gB(){var s=this.d
return s==null?this.$ti.c.a(s):s},
q(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.d(A.ar(q))
else if(r==null){s.scH(null)
return!1}else{s.scH(s.$ti.h("1?").a(r.a))
s.c=r.b
return!0}},
scH(a){this.d=this.$ti.h("1?").a(a)},
$iQ:1}
A.dY.prototype={}
A.jv.prototype={
$2(a,b){this.a.t(0,this.b.a(a),this.c.a(b))},
$S:52}
A.e1.prototype={$iO:1,$ii:1,$in:1}
A.t.prototype={
gI(a){return new A.J(a,this.gm(a),A.aE(a).h("J<t.E>"))},
ae(a,b){return this.k(a,b)},
gan(a){return this.gm(a)===0},
ga3(a){if(this.gm(a)===0)throw A.d(A.al())
return this.k(a,0)},
gp(a){if(this.gm(a)===0)throw A.d(A.al())
return this.k(a,this.gm(a)-1)},
G(a,b){var s,r=this.gm(a)
for(s=0;s<r;++s){if(J.T(this.k(a,s),b))return!0
if(r!==this.gm(a))throw A.d(A.ar(a))}return!1},
cp(a,b){var s,r
A.aE(a).h("y(t.E)").a(b)
s=this.gm(a)
for(r=0;r<s;++r){if(!A.as(b.$1(this.k(a,r))))return!1
if(s!==this.gm(a))throw A.d(A.ar(a))}return!0},
aX(a,b){var s,r
A.aE(a).h("y(t.E)").a(b)
s=this.gm(a)
for(r=0;r<s;++r){if(A.as(b.$1(this.k(a,r))))return!0
if(s!==this.gm(a))throw A.d(A.ar(a))}return!1},
e2(a,b){var s=A.aE(a)
return new A.am(a,s.h("y(t.E)").a(b),s.h("am<t.E>"))},
dO(a,b,c){var s=A.aE(a)
return new A.G(a,s.X(c).h("1(t.E)").a(b),s.h("@<t.E>").X(c).h("G<1,2>"))},
b3(a,b){return A.bu(a,b,null,A.aE(a).h("t.E"))},
bm(a,b){var s,r,q,p,o=this
if(o.gan(a)){s=J.m4(0,A.aE(a).h("t.E"))
return s}r=o.k(a,0)
q=A.bC(o.gm(a),r,!0,A.aE(a).h("t.E"))
for(p=1;p<o.gm(a);++p)B.a.t(q,p,o.k(a,p))
return q},
av(a){return this.bm(a,!0)},
n(a,b){var s
A.aE(a).h("t.E").a(b)
s=this.gm(a)
this.sm(a,s+1)
this.t(a,s,b)},
bO(a){this.sm(a,0)},
d2(a){var s,r=this
if(r.gm(a)===0)throw A.d(A.al())
s=r.k(a,r.gm(a)-1)
r.sm(a,r.gm(a)-1)
return s},
cF(a,b){var s,r=A.aE(a)
r.h("h(t.E,t.E)?").a(b)
s=b==null?A.t2():b
A.nF(a,s,r.h("t.E"))},
nk(a,b,c,d){var s
A.aE(a).h("t.E?").a(d)
A.aG(b,c,this.gm(a))
for(s=b;s<c;++s)this.t(a,s,d)},
aJ(a,b,c){var s
for(s=c;s<this.gm(a);++s)if(J.T(this.k(a,s),b))return s
return-1},
aj(a,b){return this.aJ(a,b,0)},
l(a){return A.jo(a,"[","]")}}
A.e3.prototype={}
A.jx.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=A.k(a)
r.a=s+": "
r.a+=A.k(b)},
$S:53}
A.cw.prototype={
b6(a,b){var s,r,q,p=A.z(this)
p.h("~(1,2)").a(b)
for(s=this.gbi(),s=s.gI(s),p=p.z[1];s.q();){r=s.gB()
q=this.k(0,r)
b.$2(r,q==null?p.a(q):q)}},
gdE(a){var s=this.gbi(),r=A.z(this).h("be<1,2>"),q=A.z(s)
return A.jz(s,q.X(r).h("1(i.E)").a(new A.jy(this)),q.h("i.E"),r)},
ai(a){return this.gbi().G(0,a)},
gm(a){var s=this.gbi()
return s.gm(s)},
l(a){return A.mc(this)},
$iaR:1}
A.jy.prototype={
$1(a){var s=this.a,r=A.z(s)
r.c.a(a)
s=s.k(0,a)
if(s==null)s=r.z[1].a(s)
return new A.be(a,s,r.h("@<1>").X(r.z[1]).h("be<1,2>"))},
$S(){return A.z(this.a).h("be<1,2>(1)")}}
A.e2.prototype={
gI(a){var s=this
return new A.eE(s,s.c,s.d,s.b,s.$ti.h("eE<1>"))},
gan(a){return this.b===this.c},
gm(a){return(this.c-this.b&this.a.length-1)>>>0},
ga3(a){var s,r=this,q=r.b
if(q===r.c)throw A.d(A.al())
s=r.a
if(!(q<s.length))return A.c(s,q)
q=s[q]
return q==null?r.$ti.c.a(q):q},
gp(a){var s,r=this,q=r.b,p=r.c
if(q===p)throw A.d(A.al())
q=r.a
s=q.length
p=(p-1&s-1)>>>0
if(!(p>=0&&p<s))return A.c(q,p)
p=q[p]
return p==null?r.$ti.c.a(p):p},
ae(a,b){var s,r,q,p=this,o=p.gm(p)
if(0>b||b>=o)A.M(A.fS(b,p,"index",null,o))
s=p.a
r=s.length
q=(p.b+b&r-1)>>>0
if(!(q>=0&&q<r))return A.c(s,q)
q=s[q]
return q==null?p.$ti.c.a(q):q},
bO(a){var s=this,r=s.b
if(r!==s.c){for(;r!==s.c;r=(r+1&s.a.length-1)>>>0)B.a.t(s.a,r,null)
s.b=s.c=0;++s.d}},
l(a){return A.jo(this,"{","}")},
j0(){var s,r,q=this,p=q.b
if(p===q.c)throw A.d(A.al());++q.d
s=q.a
if(!(p<s.length))return A.c(s,p)
r=s[p]
if(r==null)r=q.$ti.c.a(r)
B.a.t(s,p,null)
q.b=(q.b+1&q.a.length-1)>>>0
return r},
dd(a){var s,r,q,p,o=this,n=o.$ti
n.c.a(a)
B.a.t(o.a,o.c,a)
s=o.c
r=o.a.length
s=(s+1&r-1)>>>0
o.c=s
if(o.b===s){q=A.bC(r*2,null,!1,n.h("1?"))
n=o.a
s=o.b
p=n.length-s
B.a.da(q,0,p,n,s)
B.a.da(q,p,p+o.b,o.a,0)
o.b=0
o.c=o.a.length
o.slF(q)}++o.d},
slF(a){this.a=this.$ti.h("n<1?>").a(a)},
$iny:1}
A.eE.prototype={
gB(){var s=this.e
return s==null?this.$ti.c.a(s):s},
q(){var s,r,q=this,p=q.a
if(q.c!==p.d)A.M(A.ar(p))
s=q.d
if(s===q.b){q.scH(null)
return!1}r=p.a
if(!(s<r.length))return A.c(r,s)
q.scH(r[s])
q.d=(q.d+1&p.a.length-1)>>>0
return!0},
scH(a){this.e=this.$ti.h("1?").a(a)},
$iQ:1}
A.aT.prototype={
gan(a){return this.gm(this)===0},
l(a){return A.jo(this,"{","}")},
aB(a,b){var s,r=this.gI(this)
if(!r.q())return""
if(b===""){s=""
do s+=A.k(r.gB())
while(r.q())}else{s=""+A.k(r.gB())
for(;r.q();)s=s+b+A.k(r.gB())}return s.charCodeAt(0)==0?s:s},
b3(a,b){return A.nE(this,b,A.z(this).h("aT.E"))},
ga3(a){var s=this.gI(this)
if(!s.q())throw A.d(A.al())
return s.gB()},
gp(a){var s,r=this.gI(this)
if(!r.q())throw A.d(A.al())
do s=r.gB()
while(r.q())
return s},
ae(a,b){var s,r,q,p="index"
A.f5(b,p,t.S)
A.b6(b,p)
for(s=this.gI(this),r=0;s.q();){q=s.gB()
if(b===r)return q;++r}throw A.d(A.fS(b,this,p,null,r))}}
A.eg.prototype={$iO:1,$ii:1,$ibs:1}
A.dj.prototype={
ny(a,b){var s,r,q=this.hz()
for(s=this.gI(this);s.q();){r=s.gB()
if(b.G(0,r))q.n(0,r)}return q},
$iO:1,
$ii:1,
$ibs:1}
A.id.prototype={}
A.eP.prototype={
hz(){return A.m9(this.$ti.c)},
gI(a){var s=this.a.gbi()
return s.gI(s)},
gm(a){var s=this.a
return s.gm(s)}}
A.eD.prototype={}
A.eH.prototype={}
A.eU.prototype={}
A.eV.prototype={}
A.ks.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:19}
A.kr.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:19}
A.fm.prototype={
dA(a,b){var s
t.L.a(b)
s=B.aH.f_(b)
return s}}
A.ia.prototype={
f_(a){var s,r,q,p
t.L.a(a)
s=A.aG(0,null,a.gm(a))
for(r=0<s,q=~this.b>>>0;r;){p=a.k(0,0)
p.jk(0,q)
if(!this.a)throw A.d(A.ax("Invalid value in input: "+A.k(p),null,null))
return this.li(a,0,s)}return A.ac(a,0,s)},
li(a,b,c){var s,r,q
t.L.a(a)
for(s=~this.b>>>0,r=b,q="";r<c;++r){a.k(0,r).jk(0,s)
q+=A.b5(65533)}return q.charCodeAt(0)==0?q:q}}
A.fn.prototype={}
A.fp.prototype={
nL(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="Invalid base64 encoding length "
a3=A.aG(a2,a3,a1.length)
s=$.ph()
for(r=s.length,q=a2,p=q,o=null,n=-1,m=-1,l=0;q<a3;q=k){k=q+1
j=B.b.E(a1,q)
if(j===37){i=k+2
if(i<=a3){h=A.lE(B.b.E(a1,k))
g=A.lE(B.b.E(a1,k+1))
f=h*16+g-(g&256)
if(f===37)f=-1
k=i}else f=-1}else f=j
if(0<=f&&f<=127){if(!(f>=0&&f<r))return A.c(s,f)
e=s[f]
if(e>=0){f=B.b.J("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",e)
if(f===j)continue
j=f}else{if(e===-1){if(n<0){d=o==null?null:o.a.length
if(d==null)d=0
n=d+(q-p)
m=q}++l
if(j===61)continue}j=f}if(e!==-2){if(o==null){o=new A.a0("")
d=o}else d=o
c=d.a+=B.b.v(a1,p,q)
d.a=c+A.b5(j)
p=k
continue}}throw A.d(A.ax("Invalid base64 data",a1,q))}if(o!=null){r=o.a+=B.b.v(a1,p,a3)
d=r.length
if(n>=0)A.n8(a1,m,a3,n,l,d)
else{b=B.e.a6(d-1,4)+1
if(b===1)throw A.d(A.ax(a0,a1,a3))
for(;b<4;){r+="="
o.a=r;++b}}r=o.a
return B.b.cb(a1,a2,a3,r.charCodeAt(0)==0?r:r)}a=a3-a2
if(n>=0)A.n8(a1,m,a3,n,l,a)
else{b=B.e.a6(a,4)
if(b===1)throw A.d(A.ax(a0,a1,a3))
if(b>1)a1=B.b.cb(a1,a3,a3,b===2?"==":"=")}return a1}}
A.fq.prototype={}
A.co.prototype={}
A.cp.prototype={}
A.fF.prototype={}
A.hG.prototype={
dA(a,b){t.L.a(b)
return B.dZ.f_(b)}}
A.hH.prototype={
f_(a){var s,r
t.L.a(a)
s=this.a
r=A.qF(s,a,0,null)
if(r!=null)return r
return new A.ld(s).mM(a,0,null,!0)}}
A.ld.prototype={
mM(a,b,c,d){var s,r,q,p,o,n=this
t.L.a(a)
s=A.aG(b,c,J.W(a))
if(b===s)return""
r=A.rk(a,b,s)
q=n.ey(r,0,s-b,!0)
p=n.b
if((p&1)!==0){o=A.rl(p)
n.b=0
throw A.d(A.ax(o,a,b+n.c))}return q},
ey(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.e.aO(b+c,2)
r=q.ey(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.ey(a,s,c,d)}return q.mO(a,b,c,d)},
mO(a,b,c,d){var s,r,q,p,o,n,m,l,k=this,j=65533,i=k.b,h=k.c,g=new A.a0(""),f=b+1,e=a.length
if(!(b>=0&&b<e))return A.c(a,b)
s=a[b]
$label0$0:for(r=k.a;!0;){for(;!0;f=o){q=B.b.E("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",s)&31
h=i<=32?s&61694>>>q:(s&63|h<<6)>>>0
i=B.b.E(" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",i+q)
if(i===0){g.a+=A.b5(h)
if(f===c)break $label0$0
break}else if((i&1)!==0){if(r)switch(i){case 69:case 67:g.a+=A.b5(j)
break
case 65:g.a+=A.b5(j);--f
break
default:p=g.a+=A.b5(j)
g.a=p+A.b5(j)
break}else{k.b=i
k.c=f-1
return""}i=0}if(f===c)break $label0$0
o=f+1
if(!(f>=0&&f<e))return A.c(a,f)
s=a[f]}o=f+1
if(!(f>=0&&f<e))return A.c(a,f)
s=a[f]
if(s<128){while(!0){if(!(o<c)){n=c
break}m=o+1
if(!(o>=0&&o<e))return A.c(a,o)
s=a[o]
if(s>=128){n=m-1
o=m
break}o=m}if(n-f<20)for(l=f;l<n;++l){if(!(l<e))return A.c(a,l)
g.a+=A.b5(a[l])}else g.a+=A.ac(a,f,n)
if(n===c)break $label0$0
f=o}else f=o}if(d&&i>32)if(r)g.a+=A.b5(j)
else{k.b=77
k.c=c
return""}k.b=i
k.c=h
e=g.a
return e.charCodeAt(0)==0?e:e}}
A.kN.prototype={}
A.a_.prototype={
gdc(){return A.ch(this.$thrownJsError)}}
A.dw.prototype={
l(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.fG(s)
return"Assertion failed"}}
A.c9.prototype={}
A.h4.prototype={
l(a){return"Throw of null."}}
A.by.prototype={
geC(){return"Invalid argument"+(!this.a?"(s)":"")},
geB(){return""},
l(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.k(p),n=s.geC()+q+o
if(!s.a)return n
return n+s.geB()+": "+A.fG(s.b)}}
A.d5.prototype={
geC(){return"RangeError"},
geB(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.k(q):""
else if(q==null)s=": Not greater than or equal to "+A.k(r)
else if(q>r)s=": Not in inclusive range "+A.k(r)+".."+A.k(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.k(r)
return s}}
A.fR.prototype={
geC(){return"RangeError"},
geB(){if(A.a1(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gm(a){return this.f}}
A.hD.prototype={
l(a){return"Unsupported operation: "+this.a}}
A.es.prototype={
l(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
A.d9.prototype={
l(a){return"Bad state: "+this.a}}
A.fz.prototype={
l(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.fG(s)+"."}}
A.h9.prototype={
l(a){return"Out of Memory"},
gdc(){return null},
$ia_:1}
A.ek.prototype={
l(a){return"Stack Overflow"},
gdc(){return null},
$ia_:1}
A.fB.prototype={
l(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.i_.prototype={
l(a){return"Exception: "+this.a},
$ibo:1}
A.dO.prototype={
l(a){var s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=""!==h?"FormatException: "+h:"FormatException",f=this.c,e=this.b
if(typeof e=="string"){if(f!=null)s=f<0||f>e.length
else s=!1
if(s)f=null
if(f==null){if(e.length>78)e=B.b.v(e,0,75)+"..."
return g+"\n"+e}for(r=1,q=0,p=!1,o=0;o<f;++o){n=B.b.E(e,o)
if(n===10){if(q!==o||!p)++r
q=o+1
p=!1}else if(n===13){++r
q=o+1
p=!0}}g=r>1?g+(" (at line "+r+", character "+(f-q+1)+")\n"):g+(" (at character "+(f+1)+")\n")
m=e.length
for(o=f;o<m;++o){n=B.b.J(e,o)
if(n===10||n===13){m=o
break}}if(m-q>78)if(f-q<75){l=q+75
k=q
j=""
i="..."}else{if(m-f<75){k=m-75
l=m
i=""}else{k=f-36
l=f+36
i="..."}j="..."}else{l=m
k=q
j=""
i=""}return g+j+B.b.v(e,k,l)+i+"\n"+B.b.C(" ",f-k+j.length)+"^\n"}else return f!=null?g+(" (at offset "+A.k(f)+")"):g},
$ibo:1}
A.i.prototype={
dO(a,b,c){var s=A.z(this)
return A.jz(this,s.X(c).h("1(i.E)").a(b),s.h("i.E"),c)},
e2(a,b){var s=A.z(this)
return new A.am(this,s.h("y(i.E)").a(b),s.h("am<i.E>"))},
cp(a,b){var s
A.z(this).h("y(i.E)").a(b)
for(s=this.gI(this);s.q();)if(!A.as(b.$1(s.gB())))return!1
return!0},
aX(a,b){var s
A.z(this).h("y(i.E)").a(b)
for(s=this.gI(this);s.q();)if(A.as(b.$1(s.gB())))return!0
return!1},
bm(a,b){return A.j(this,b,A.z(this).h("i.E"))},
av(a){return this.bm(a,!0)},
gm(a){var s,r=this.gI(this)
for(s=0;r.q();)++s
return s},
gan(a){return!this.gI(this).q()},
b3(a,b){return A.nE(this,b,A.z(this).h("i.E"))},
ga3(a){var s=this.gI(this)
if(!s.q())throw A.d(A.al())
return s.gB()},
gp(a){var s,r=this.gI(this)
if(!r.q())throw A.d(A.al())
do s=r.gB()
while(r.q())
return s},
ae(a,b){var s,r,q
A.b6(b,"index")
for(s=this.gI(this),r=0;s.q();){q=s.gB()
if(b===r)return q;++r}throw A.d(A.fS(b,this,"index",null,r))},
l(a){return A.pR(this,"(",")")}}
A.Q.prototype={}
A.be.prototype={
l(a){return"MapEntry("+A.k(this.a)+": "+A.k(this.b)+")"}}
A.ak.prototype={
gZ(a){return A.D.prototype.gZ.call(this,this)},
l(a){return"null"}}
A.D.prototype={$iD:1,
W(a,b){return this===b},
gZ(a){return A.bL(this)},
l(a){return"Instance of '"+A.k_(this)+"'"},
toString(){return this.l(this)}}
A.i9.prototype={
l(a){return""},
$ic5:1}
A.hk.prototype={
gI(a){return new A.hj(this.a)},
gp(a){var s,r,q=this.a,p=q.length
if(p===0)throw A.d(A.aH("No elements."))
s=B.b.J(q,p-1)
if((s&64512)===56320&&p>1){r=B.b.J(q,p-2)
if((r&64512)===55296)return A.oj(r,s)}return s}}
A.hj.prototype={
gB(){return this.d},
q(){var s,r,q,p=this,o=p.b=p.c,n=p.a,m=n.length
if(o===m){p.d=-1
return!1}s=B.b.E(n,o)
r=o+1
if((s&64512)===55296&&r<m){q=B.b.E(n,r)
if((q&64512)===56320){p.c=r+1
p.d=A.oj(s,q)
return!0}}p.c=r
p.d=s
return!0},
$iQ:1}
A.a0.prototype={
gm(a){return this.a.length},
l(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$iqu:1}
A.ko.prototype={
$2(a,b){throw A.d(A.ax("Illegal IPv4 address, "+a,this.a,b))},
$S:55}
A.kp.prototype={
$2(a,b){throw A.d(A.ax("Illegal IPv6 address, "+a,this.a,b))},
$S:56}
A.kq.prototype={
$2(a,b){var s
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
s=A.ci(B.b.v(this.b,a,b),16)
if(s<0||s>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return s},
$S:10}
A.eQ.prototype={
ghJ(){var s,r,q,p,o=this,n=o.w
if(n===$){s=o.a
r=s.length!==0?""+s+":":""
q=o.c
p=q==null
if(!p||s==="file"){s=r+"//"
r=o.b
if(r.length!==0)s=s+r+"@"
if(!p)s+=q
r=o.d
if(r!=null)s=s+":"+A.k(r)}else s=r
s+=o.e
r=o.f
if(r!=null)s=s+"?"+r
r=o.r
if(r!=null)s=s+"#"+r
n!==$&&A.C("_text")
n=o.w=s.charCodeAt(0)==0?s:s}return n},
gfl(){var s,r,q=this,p=q.x
if(p===$){s=q.e
if(s.length!==0&&B.b.E(s,0)===47)s=B.b.aq(s,1)
r=s.length===0?B.p:A.ns(new A.G(A.a(s.split("/"),t.s),t.f6.a(A.t7()),t.iZ),t.N)
q.x!==$&&A.C("pathSegments")
q.sl8(r)
p=r}return p},
gZ(a){var s,r=this,q=r.y
if(q===$){s=B.b.gZ(r.ghJ())
r.y!==$&&A.C("hashCode")
r.y=s
q=s}return q},
gd5(){return this.b},
gbh(a){var s=this.c
if(s==null)return""
if(B.b.Y(s,"["))return B.b.v(s,1,s.length-1)
return s},
gcv(a){var s=this.d
return s==null?A.o3(this.a):s},
gca(){var s=this.f
return s==null?"":s},
gdI(){var s=this.r
return s==null?"":s},
nA(a){var s=this.a
if(a.length!==s.length)return!1
return A.rp(a,s,0)>=0},
hv(a,b){var s,r,q,p,o,n
for(s=0,r=0;B.b.a9(b,"../",r);){r+=3;++s}q=B.b.ff(a,"/")
while(!0){if(!(q>0&&s>0))break
p=B.b.dN(a,"/",q-1)
if(p<0)break
o=q-p
n=o!==2
if(!n||o===3)if(B.b.J(a,p+1)===46)n=!n||B.b.J(a,p+2)===46
else n=!1
else n=!1
if(n)break;--s
q=p}return B.b.cb(a,q+1,null,B.b.aq(b,r-3*s))},
j6(a){return this.d3(A.ml(a))},
d3(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=null
if(a.gaL().length!==0){s=a.gaL()
if(a.gcX()){r=a.gd5()
q=a.gbh(a)
p=a.gcY()?a.gcv(a):h}else{p=h
q=p
r=""}o=A.bT(a.gaK(a))
n=a.gcq()?a.gca():h}else{s=i.a
if(a.gcX()){r=a.gd5()
q=a.gbh(a)
p=A.mx(a.gcY()?a.gcv(a):h,s)
o=A.bT(a.gaK(a))
n=a.gcq()?a.gca():h}else{r=i.b
q=i.c
p=i.d
o=i.e
if(a.gaK(a)==="")n=a.gcq()?a.gca():i.f
else{m=A.rj(i,o)
if(m>0){l=B.b.v(o,0,m)
o=a.gdJ()?l+A.bT(a.gaK(a)):l+A.bT(i.hv(B.b.aq(o,l.length),a.gaK(a)))}else if(a.gdJ())o=A.bT(a.gaK(a))
else if(o.length===0)if(q==null)o=s.length===0?a.gaK(a):A.bT(a.gaK(a))
else o=A.bT("/"+a.gaK(a))
else{k=i.hv(o,a.gaK(a))
j=s.length===0
if(!j||q!=null||B.b.Y(o,"/"))o=A.bT(k)
else o=A.mz(k,!j||q!=null)}n=a.gcq()?a.gca():h}}}return A.lc(s,r,q,p,o,n,a.gfd()?a.gdI():h)},
gcX(){return this.c!=null},
gcY(){return this.d!=null},
gcq(){return this.f!=null},
gfd(){return this.r!=null},
gdJ(){return B.b.Y(this.e,"/")},
ft(){var s,r=this,q=r.a
if(q!==""&&q!=="file")throw A.d(A.S("Cannot extract a file path from a "+q+" URI"))
q=r.f
if((q==null?"":q)!=="")throw A.d(A.S(u.z))
q=r.r
if((q==null?"":q)!=="")throw A.d(A.S(u.U))
q=$.mY()
if(A.as(q))q=A.oe(r)
else{if(r.c!=null&&r.gbh(r)!=="")A.M(A.S(u.Q))
s=r.gfl()
A.rc(s,!1)
q=A.kf(B.b.Y(r.e,"/")?""+"/":"",s,"/")
q=q.charCodeAt(0)==0?q:q}return q},
l(a){return this.ghJ()},
W(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(t.jJ.b(b))if(q.a===b.gaL())if(q.c!=null===b.gcX())if(q.b===b.gd5())if(q.gbh(q)===b.gbh(b))if(q.gcv(q)===b.gcv(b))if(q.e===b.gaK(b)){s=q.f
r=s==null
if(!r===b.gcq()){if(r)s=""
if(s===b.gca()){s=q.r
r=s==null
if(!r===b.gfd()){if(r)s=""
s=s===b.gdI()}else s=!1}else s=!1}else s=!1}else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s},
sl8(a){this.x=t.I.a(a)},
$ihE:1,
gaL(){return this.a},
gaK(a){return this.e}}
A.kn.prototype={
gje(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return A.c(m,0)
s=o.a
m=m[0]+1
r=B.b.aJ(s,"?",m)
q=s.length
if(r>=0){p=A.eR(s,r+1,q,B.H,!1,!1)
q=r}else p=n
m=o.c=new A.hR("data","",n,n,A.eR(s,m,q,B.ai,!1,!1),p,n)}return m},
l(a){var s,r=this.b
if(0>=r.length)return A.c(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
A.lk.prototype={
$2(a,b){var s=this.a
if(!(a<s.length))return A.c(s,a)
s=s[a]
B.cM.nk(s,0,96,b)
return s},
$S:69}
A.ll.prototype={
$3(a,b,c){var s,r,q
for(s=b.length,r=0;r<s;++r){q=B.b.E(b,r)^96
if(!(q<96))return A.c(a,q)
a[q]=c}},
$S:20}
A.lm.prototype={
$3(a,b,c){var s,r,q
for(s=B.b.E(b,0),r=B.b.E(b,1);s<=r;++s){q=(s^96)>>>0
if(!(q<96))return A.c(a,q)
a[q]=c}},
$S:20}
A.bi.prototype={
gcX(){return this.c>0},
gcY(){return this.c>0&&this.d+1<this.e},
gcq(){return this.f<this.r},
gfd(){return this.r<this.a.length},
gdJ(){return B.b.a9(this.a,"/",this.e)},
gaL(){var s=this.w
return s==null?this.w=this.lg():s},
lg(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.b.Y(r.a,"http"))return"http"
if(q===5&&B.b.Y(r.a,"https"))return"https"
if(s&&B.b.Y(r.a,"file"))return"file"
if(q===7&&B.b.Y(r.a,"package"))return"package"
return B.b.v(r.a,0,q)},
gd5(){var s=this.c,r=this.b+3
return s>r?B.b.v(this.a,r,s-1):""},
gbh(a){var s=this.c
return s>0?B.b.v(this.a,s,this.d):""},
gcv(a){var s,r=this
if(r.gcY())return A.ci(B.b.v(r.a,r.d+1,r.e),null)
s=r.b
if(s===4&&B.b.Y(r.a,"http"))return 80
if(s===5&&B.b.Y(r.a,"https"))return 443
return 0},
gaK(a){return B.b.v(this.a,this.e,this.f)},
gca(){var s=this.f,r=this.r
return s<r?B.b.v(this.a,s+1,r):""},
gdI(){var s=this.r,r=this.a
return s<r.length?B.b.aq(r,s+1):""},
gfl(){var s,r,q=this.e,p=this.f,o=this.a
if(B.b.a9(o,"/",q))++q
if(q===p)return B.p
s=A.a([],t.s)
for(r=q;r<p;++r)if(B.b.J(o,r)===47){B.a.n(s,B.b.v(o,q,r))
q=r+1}B.a.n(s,B.b.v(o,q,p))
return A.ns(s,t.N)},
hp(a){var s=this.d+1
return s+a.length===this.e&&B.b.a9(this.a,a,s)},
oc(){var s=this,r=s.r,q=s.a
if(r>=q.length)return s
return new A.bi(B.b.v(q,0,r),s.b,s.c,s.d,s.e,s.f,r,s.w)},
j6(a){return this.d3(A.ml(a))},
d3(a){if(a instanceof A.bi)return this.lz(this,a)
return this.hM().d3(a)},
lz(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.b
if(c>0)return b
s=b.c
if(s>0){r=a.b
if(r<=0)return b
q=r===4
if(q&&B.b.Y(a.a,"file"))p=b.e!==b.f
else if(q&&B.b.Y(a.a,"http"))p=!b.hp("80")
else p=!(r===5&&B.b.Y(a.a,"https"))||!b.hp("443")
if(p){o=r+1
return new A.bi(B.b.v(a.a,0,o)+B.b.aq(b.a,c+1),r,s+o,b.d+o,b.e+o,b.f+o,b.r+o,a.w)}else return this.hM().d3(b)}n=b.e
c=b.f
if(n===c){s=b.r
if(c<s){r=a.f
o=r-c
return new A.bi(B.b.v(a.a,0,r)+B.b.aq(b.a,c),a.b,a.c,a.d,a.e,c+o,s+o,a.w)}c=b.a
if(s<c.length){r=a.r
return new A.bi(B.b.v(a.a,0,r)+B.b.aq(c,s),a.b,a.c,a.d,a.e,a.f,s+(r-s),a.w)}return a.oc()}s=b.a
if(B.b.a9(s,"/",n)){m=a.e
l=A.nY(this)
k=l>0?l:m
o=k-n
return new A.bi(B.b.v(a.a,0,k)+B.b.aq(s,n),a.b,a.c,a.d,m,c+o,b.r+o,a.w)}j=a.e
i=a.f
if(j===i&&a.c>0){for(;B.b.a9(s,"../",n);)n+=3
o=j-n+1
return new A.bi(B.b.v(a.a,0,j)+"/"+B.b.aq(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.w)}h=a.a
l=A.nY(this)
if(l>=0)g=l
else for(g=j;B.b.a9(h,"../",g);)g+=3
f=0
while(!0){e=n+3
if(!(e<=c&&B.b.a9(s,"../",n)))break;++f
n=e}for(d="";i>g;){--i
if(B.b.J(h,i)===47){if(f===0){d="/"
break}--f
d="/"}}if(i===g&&a.b<=0&&!B.b.a9(h,"/",j)){n-=f*3
d=""}o=i-n+d.length
return new A.bi(B.b.v(h,0,i)+d+B.b.aq(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.w)},
ft(){var s,r,q=this,p=q.b
if(p>=0){s=!(p===4&&B.b.Y(q.a,"file"))
p=s}else p=!1
if(p)throw A.d(A.S("Cannot extract a file path from a "+q.gaL()+" URI"))
p=q.f
s=q.a
if(p<s.length){if(p<q.r)throw A.d(A.S(u.z))
throw A.d(A.S(u.U))}r=$.mY()
if(A.as(r))p=A.oe(q)
else{if(q.c<q.d)A.M(A.S(u.Q))
p=B.b.v(s,q.e,p)}return p},
gZ(a){var s=this.x
return s==null?this.x=B.b.gZ(this.a):s},
W(a,b){if(b==null)return!1
if(this===b)return!0
return t.jJ.b(b)&&this.a===b.l(0)},
hM(){var s=this,r=null,q=s.gaL(),p=s.gd5(),o=s.c>0?s.gbh(s):r,n=s.gcY()?s.gcv(s):r,m=s.a,l=s.f,k=B.b.v(m,s.e,l),j=s.r
l=l<j?s.gca():r
return A.lc(q,p,o,n,k,l,j<m.length?s.gdI():r)},
l(a){return this.a},
$ihE:1}
A.hR.prototype={}
A.u.prototype={}
A.fh.prototype={
l(a){var s=String(a)
s.toString
return s}}
A.fj.prototype={
l(a){var s=String(a)
s.toString
return s}}
A.cm.prototype={
sbg(a,b){a.height=b},
soH(a,b){a.width=b},
$icm:1}
A.dA.prototype={
sfb(a,b){a.fillStyle=b},
sfY(a,b){a.strokeStyle=b},
kE(a,b){return a.stroke(b)},
$idA:1}
A.bz.prototype={
gm(a){return a.length}}
A.iO.prototype={
l(a){var s=String(a)
s.toString
return s}}
A.dE.prototype={
l(a){var s,r,q,p=a.left
p.toString
s=a.top
s.toString
r=a.width
r.toString
q=a.height
q.toString
return"Rectangle ("+A.k(p)+", "+A.k(s)+") "+A.k(r)+" x "+A.k(q)},
W(a,b){var s,r
if(b==null)return!1
if(t.mx.b(b)){s=a.left
s.toString
r=b.left
r.toString
if(s===r){s=a.top
s.toString
r=b.top
r.toString
if(s===r){s=a.width
s.toString
r=b.width
r.toString
if(s===r){s=a.height
s.toString
r=b.height
r.toString
r=s===r
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gZ(a){var s,r,q,p=a.left
p.toString
s=a.top
s.toString
r=a.width
r.toString
q=a.height
q.toString
return A.d1(p,s,r,q)},
$imf:1}
A.p.prototype={
l(a){var s=a.localName
s.toString
return s},
$ip:1}
A.q.prototype={$iq:1}
A.aN.prototype={
la(a,b,c,d){return a.addEventListener(b,A.dp(t.Q.a(c),1),!1)},
lv(a,b,c,d){return a.removeEventListener(b,A.dp(t.Q.a(c),1),!1)},
$iaN:1}
A.fJ.prototype={
gm(a){return a.length}}
A.b4.prototype={$ib4:1}
A.aZ.prototype={
l(a){var s=a.nodeValue
return s==null?this.kG(a):s}}
A.hb.prototype={$ihb:1}
A.hm.prototype={
gm(a){return a.length}}
A.bv.prototype={}
A.dd.prototype={
gm5(a){var s=new A.ap($.a6,t.iS),r=t.hv.a(new A.kG(new A.eJ(s,t.km)))
this.ll(a)
r=A.ox(r,t.p)
r.toString
this.lw(a,r)
return s},
lw(a,b){var s=a.requestAnimationFrame(A.dp(t.hv.a(b),1))
s.toString
return s},
ll(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=["ms","moz","webkit","o"]
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+"RequestAnimationFrame"]
b.cancelAnimationFrame=b[r[q]+"CancelAnimationFrame"]||b[r[q]+"CancelRequestAnimationFrame"]}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
A.kG.prototype={
$1(a){this.a.eX(0,A.lf(a))},
$S:83}
A.ex.prototype={
l(a){var s,r,q,p=a.left
p.toString
s=a.top
s.toString
r=a.width
r.toString
q=a.height
q.toString
return"Rectangle ("+A.k(p)+", "+A.k(s)+") "+A.k(r)+" x "+A.k(q)},
W(a,b){var s,r
if(b==null)return!1
if(t.mx.b(b)){s=a.left
s.toString
r=b.left
r.toString
if(s===r){s=a.top
s.toString
r=b.top
r.toString
if(s===r){s=a.width
s.toString
r=b.width
r.toString
if(s===r){s=a.height
s.toString
r=b.height
r.toString
r=s===r
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gZ(a){var s,r,q,p=a.left
p.toString
s=a.top
s.toString
r=a.width
r.toString
q=a.height
q.toString
return A.d1(p,s,r,q)}}
A.m2.prototype={}
A.ez.prototype={}
A.hW.prototype={}
A.eA.prototype={
mr(){var s,r=this,q=r.b
if(q==null)return $.n_()
s=r.d
if(s!=null)J.pm(q,r.c,t.Q.a(s),!1)
r.b=null
r.slt(null)
return $.n_()},
slt(a){this.d=t.Q.a(a)}}
A.kP.prototype={
$1(a){return this.a.$1(t.fq.a(a))},
$S:85}
A.i4.prototype={
l_(a){var s,r,q,p,o,n,m,l=this,k=4294967296
do{s=a>>>0
a=B.e.aO(a-s,k)
r=a>>>0
a=B.e.aO(a-r,k)
q=(~s>>>0)+(s<<21>>>0)
p=q>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+B.e.aO(q-p,k)>>>0
q=((p^(p>>>24|r<<8))>>>0)*265
s=q>>>0
r=((r^r>>>24)>>>0)*265+B.e.aO(q-s,k)>>>0
q=((s^(s>>>14|r<<18))>>>0)*21
s=q>>>0
r=((r^r>>>14)>>>0)*21+B.e.aO(q-s,k)>>>0
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=q>>>0
o=B.e.aO(q-p,k)
q=l.a*1037
n=l.a=q>>>0
m=l.b*1037+B.e.aO(q-n,k)>>>0
l.b=m
n=(n^p)>>>0
l.a=n
o=(m^r+((r<<31|s>>>1)>>>0)+o>>>0)>>>0
l.b=o}while(a!==0)
if(o===0&&n===0)l.a=23063
l.di()
l.di()
l.di()
l.di()},
di(){var s=this,r=s.a,q=4294901760*r,p=q>>>0,o=55905*r,n=o>>>0,m=n+p+s.b
r=m>>>0
s.a=r
s.b=B.e.aO(o-n+(q-p)+(m-r),4294967296)>>>0},
$iqe:1}
A.cA.prototype={
l(a){return"Point("+A.k(this.a)+", "+A.k(this.b)+")"},
W(a,b){if(b==null)return!1
return b instanceof A.cA&&this.a===b.a&&this.b===b.b},
gZ(a){return A.nH(B.h.gZ(this.a),B.h.gZ(this.b),0)}}
A.aB.prototype={
gI(a){var s=this.$ti,r=J.x(this.a,new A.jp(this),s.h("Q<1>"))
return new A.eB(A.j(r,!1,r.$ti.h("B.E")),s.h("eB<1>"))}}
A.jp.prototype={
$1(a){return J.ab(this.a.$ti.h("i<1>").a(a))},
$S(){return this.a.$ti.h("Q<1>(i<1>)")}}
A.eB.prototype={
q(){var s,r,q,p=this,o=p.a
if(o.length===0)return!1
for(s=0;r=o.length,s<r;++s)if(!o[s].q()){p.shr(null)
return!1}if(r>4294967295)A.M(A.Y(r,0,4294967295,"length",null))
q=J.nn(new Array(r),p.$ti.c)
for(s=0;s<r;++s){if(!(s<o.length))return A.c(o,s)
q[s]=o[s].gB()}p.shr(q)
return!0},
gB(){var s=this.b
return s==null?A.M(A.aH("No element")):s},
shr(a){this.b=this.$ti.h("n<1>?").a(a)},
$iQ:1}
A.l6.prototype={
bu(){var s=this,r=s.d
r===$&&A.b("_peekToken")
s.c=r
s.d=t.J.a(s.a.ap(!1))
return r},
hu(a,b){var s=this,r=s.d
r===$&&A.b("_peekToken")
if(r.a===a){s.c=r
s.d=t.J.a(s.a.ap(!1))
return!0}else return!1},
dh(a){return this.hu(a,!1)},
aN(a){if(!this.hu(a,!1))this.eA(A.nJ(a))},
eA(a){var s,r=this.bu(),q=null
try{q="expected "+a+", but found "+A.k(r)}catch(s){q="parsing error expected "+a}this.cj(q,r.b)},
cj(a,b){$.eW.hE().n5(0,a,b)},
aa(a){var s=this.c
if(s==null||s.b.az(0,a)<0)return a
return a.n7(0,this.c.b)},
nX(){var s,r,q=this,p=A.a([],t.b7),o=q.d
o===$&&A.b("_peekToken")
s=q.a
s.e=!0
do{r=q.iX()
if(r!=null)B.a.n(p,r)}while(q.dh(19))
s.e=!1
if(p.length!==0)return new A.hn(p,q.aa(o.b))
return null},
iX(){var s,r=A.a([],t.iM),q=this.d
q===$&&A.b("_peekToken")
for(;!0;){s=this.ko(r.length===0)
if(s!=null)B.a.n(r,s)
else break}if(r.length===0)return null
return new A.c4(r,this.aa(q.b))},
nU(){var s,r,q,p,o,n,m=this.iX()
if(m!=null)for(s=m.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.e)(s),++q){p=s[q]
if(p.b!==513){o=$.eW.b
if(o==$.eW)A.M(A.m8($.eW.a))
n=new A.cZ(B.K,"compound selector can not contain combinator",p.a,o.b.w)
B.a.n(o.c,n)
o.a.$1(n)}}return m},
ko(a){var s,r,q,p,o,n,m=this,l=m.d
l===$&&A.b("_peekToken")
switch(l.a){case 12:m.aN(12)
s=515
r=!1
break
case 13:m.aN(13)
s=516
r=!1
break
case 14:m.aN(14)
s=517
r=!1
break
case 36:m.aN(36)
s=513
r=!0
break
default:s=513
r=!1}if(s===513&&!a){q=m.c
if(q!=null){q=q.b
q=A.bX(q.a,q.c)
p=m.d.b
p=q.b!==A.bX(p.a,p.b).b
q=p}else q=!1
if(q)s=514}o=m.aa(l.b)
n=r?new A.cq(new A.hx(o),o):m.fQ()
if(n==null)l=s===515||s===516||s===517
else l=!1
if(l)n=new A.cq(new A.bJ("",o),o)
if(n!=null)return new A.eh(s,n,o)
return null},
fQ(){var s,r,q,p=this,o=p.d
o===$&&A.b("_peekToken")
s=o.b
o=o.a
switch(o){case 15:r=new A.cb(p.aa(p.bu().b))
break
case 511:r=p.bA()
break
default:if(A.nI(o))r=p.bA()
else{if(o===9)return null
r=null}break}if(p.dh(16)){o=p.d
switch(o.a){case 15:q=new A.cb(p.aa(p.bu().b))
break
case 511:q=p.bA()
break
default:p.cj("expected element name or universal(*), but found "+o.l(0),p.d.b)
q=null
break}return new A.h_(r,new A.cq(q,q.a),p.aa(s))}else if(r!=null)return new A.cq(r,p.aa(s))
else return p.kp()},
h8(a){var s,r=this.c
if(r!=null&&r.a===a){r=r.b
r=A.bX(r.a,r.c)
s=this.d
s===$&&A.b("_peekToken")
s=s.b
return r.b!==A.bX(s.a,s.b).b}return!1},
kp(){var s,r=this,q=r.d
q===$&&A.b("_peekToken")
s=q.b
switch(q.a){case 11:r.aN(11)
if(r.h8(11)){r.cj("Not a valid ID selector expected #id",r.aa(s))
return null}return new A.fM(r.bA(),r.aa(s))
case 8:r.aN(8)
if(r.h8(8)){r.cj("Not a valid class selector expected .className",r.aa(s))
return null}return new A.fv(r.bA(),r.aa(s))
case 17:return r.nV(s)
case 4:return r.nT()
case 62:r.cj("name must start with a alpha character, but found a number",s)
r.bu()
break}return null},
nV(a){var s,r,q,p,o,n,m,l,k=this
k.aN(17)
s=k.dh(17)
r=k.d
r===$&&A.b("_peekToken")
if(r.a===511)q=k.bA()
else return null
p=q.b.toLowerCase()
if(k.d.a===2){r=!s
if(r&&p==="not"){k.aN(2)
o=k.fQ()
k.aN(3)
r=k.aa(a)
return new A.h3(o,new A.h2(r),r)}else{if(r)r=p==="host"||p==="host-context"||p==="global-context"||p==="-acx-global-context"
else r=!1
if(r){k.aN(2)
n=k.nU()
if(n==null){k.eA("a selector argument")
return null}k.aN(3)
return new A.eb(n,q,k.aa(a))}else{r=k.a
r.d=!0
k.aN(2)
m=k.aa(a)
l=k.nW()
r.d=!1
if(l instanceof A.d8){k.aN(3)
return s?new A.hg(!1,q,m):new A.eb(l,q,m)}else{k.eA("CSS expression")
return null}}}}r=!s
return!r||B.dV.a.ai(p)?new A.d4(r,q,k.aa(a)):new A.d3(q,k.aa(a))},
nW(){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.d
g===$&&A.b("_peekToken")
s=g.b
r=A.a([],t.oQ)
for(g=i.a,q=t.J,p=h,o=p,n=!0;n;){m=i.d
switch(m.a){case 12:s=m.b
i.c=m
i.d=q.a(g.ap(!1))
B.a.n(r,new A.h8(i.aa(s)))
o=m
break
case 34:s=m.b
i.c=m
i.d=q.a(g.ap(!1))
B.a.n(r,new A.h7(i.aa(s)))
o=m
break
case 60:i.c=m
i.d=q.a(g.ap(!1))
p=A.ci(m.gV(m),h)
o=m
break
case 62:i.c=m
i.d=q.a(g.ap(!1))
p=A.bH(m.gV(m))
o=m
break
case 25:p="'"+A.ol(i.fn(!1),!0)+"'"
return new A.af(p,p,i.aa(s))
case 26:p='"'+A.ol(i.fn(!1),!1)+'"'
return new A.af(p,p,i.aa(s))
case 511:p=i.bA()
break
default:n=!1}if(n&&p!=null){l=i.aa(s)
k=i.d.a
switch(k){case 600:j=new A.fE(p,o.gV(o),l)
i.c=i.d
i.d=q.a(g.ap(!1))
break
case 601:j=new A.fH(p,o.gV(o),l)
i.c=i.d
i.d=q.a(g.ap(!1))
break
case 602:case 603:case 604:case 605:case 606:case 607:j=new A.fW(k,p,o.gV(o),l)
i.c=i.d
i.d=q.a(g.ap(!1))
break
case 608:case 609:case 610:case 611:j=new A.fi(k,p,o.gV(o),l)
i.c=i.d
i.d=q.a(g.ap(!1))
break
case 612:case 613:j=new A.hy(k,p,o.gV(o),l)
i.c=i.d
i.d=q.a(g.ap(!1))
break
case 614:case 615:j=new A.fL(k,p,o.gV(o),l)
i.c=i.d
i.d=q.a(g.ap(!1))
break
case 24:j=new A.hd(p,o.gV(o),l)
i.c=i.d
i.d=q.a(g.ap(!1))
break
case 617:j=new A.fK(p,o.gV(o),l)
i.c=i.d
i.d=q.a(g.ap(!1))
break
case 618:case 619:case 620:j=new A.hi(k,p,o.gV(o),l)
i.c=i.d
i.d=q.a(g.ap(!1))
break
case 621:j=new A.fu(k,p,o.gV(o),l)
i.c=i.d
i.d=q.a(g.ap(!1))
break
case 622:j=new A.hh(k,p,o.gV(o),l)
i.c=i.d
i.d=q.a(g.ap(!1))
break
case 623:case 624:case 625:case 626:j=new A.hI(k,p,o.gV(o),l)
i.c=i.d
i.d=q.a(g.ap(!1))
break
default:j=p instanceof A.bJ?new A.af(p,p.b,l):new A.h6(p,o.gV(o),l)}B.a.n(r,j)
p=h}}return new A.d8(r,i.aa(s))},
nT(){var s,r,q,p=this,o=p.d
o===$&&A.b("_peekToken")
if(p.dh(4)){s=p.bA()
r=p.d.a
switch(r){case 28:case 530:case 531:case 532:case 533:case 534:p.bu()
break
default:r=535}if(r!==535)q=p.d.a===511?p.bA():p.fn(!1)
else q=null
p.aN(5)
return new A.fo(r,q,s,p.aa(o.b))}return null},
fn(a){var s,r,q,p,o,n,m=this,l=m.d
l===$&&A.b("_peekToken")
s=m.a
r=s.c
s.c=!1
switch(l.a){case 25:m.bu()
q=25
break
case 26:m.bu()
q=26
break
default:m.cj("unexpected string",m.aa(l.b))
q=-1
break}l=t.J
p=""
while(!0){o=m.d
n=o.a
if(!(n!==q&&n!==1))break
m.c=o
m.d=l.a(s.ap(!1))
p+=o.gV(o)}s.c=r
if(q!==3)m.bu()
return p.charCodeAt(0)==0?p:p},
bA(){var s=this.bu(),r=s.a
if(r!==511&&!A.nI(r)){$.eW.hE()
return new A.bJ("",this.aa(s.b))}return new A.bJ(s.gV(s),this.aa(s.b))}}
A.bg.prototype={
gV(a){var s=this.b
return A.ac(B.r.b4(s.a.c,s.b,s.c),0,null)},
l(a){var s=A.nJ(this.a),r=B.b.e0(this.gV(this))
if(s!==r){if(r.length>10)r=B.b.v(r,0,8)+"..."
return s+"("+r+")"}else return s}}
A.fN.prototype={
gV(a){return this.c}}
A.ki.prototype={
ap(a){var s,r,q,p,o,n,m,l,k=this
k.r=k.f
s=k.cl()
switch(s){case 10:case 13:case 32:case 9:return k.nn()
case 0:return k.L(1)
case 64:r=k.cm()
if(A.hA(r)||r===45){q=k.f
p=k.r
k.r=q
k.cl()
k.dG()
o=k.b
n=k.r
m=A.mj(B.bq,"type",o,n,k.f-n)
if(m===-1){n=k.r
m=A.mj(B.bk,"type",o,n,k.f-n)}if(m!==-1)return k.L(m)
else{k.r=p
k.f=q}}return k.L(10)
case 46:l=k.r
if(k.nK())if(k.dH().a===60){k.r=l
return k.L(62)}else return k.L(65)
return k.L(8)
case 40:return k.L(2)
case 41:return k.L(3)
case 123:return k.L(6)
case 125:return k.L(7)
case 91:return k.L(4)
case 93:if(k.ab(93)&&k.ab(62))return k.ct()
return k.L(5)
case 35:return k.L(11)
case 43:if(k.hA(s))return k.dH()
return k.L(12)
case 45:if(k.d||!1)return k.L(34)
else if(k.hA(s))return k.dH()
else if(A.hA(s)||s===45)return k.dG()
return k.L(34)
case 62:return k.L(13)
case 126:if(k.ab(61))return k.L(530)
return k.L(14)
case 42:if(k.ab(61))return k.L(534)
return k.L(15)
case 38:return k.L(36)
case 124:if(k.ab(61))return k.L(531)
return k.L(16)
case 58:return k.L(17)
case 44:return k.L(19)
case 59:return k.L(9)
case 37:return k.L(24)
case 39:return k.L(25)
case 34:return k.L(26)
case 47:if(k.ab(42))return k.nm()
return k.L(27)
case 60:if(k.ab(33))if(k.ab(45)&&k.ab(45))return k.nl()
else{if(k.ab(91)){o=k.Q.a
o=k.ab(B.b.E(o,0))&&k.ab(B.b.E(o,1))&&k.ab(B.b.E(o,2))&&k.ab(B.b.E(o,3))&&k.ab(B.b.E(o,4))&&k.ab(91)}else o=!1
if(o)return k.ct()}return k.L(32)
case 61:return k.L(28)
case 94:if(k.ab(61))return k.L(532)
return k.L(30)
case 36:if(k.ab(61))return k.L(533)
return k.L(31)
case 33:return k.dG()
default:if(!k.e&&s===92)return k.L(35)
if(k.c)o=(s===k.w||s===k.x)&&k.cm()===k.y
else o=!1
if(o){k.cl()
k.r=k.f
return k.L(508)}else{o=s===118
if(o&&k.ab(97)&&k.ab(114)&&k.ab(45))return k.L(400)
else if(o&&k.ab(97)&&k.ab(114)&&k.cm()===45)return k.L(401)
else if(A.hA(s)||s===45)return k.dG()
else if(s>=48&&s<=57)return k.dH()}return k.L(65)}},
ct(){return this.ap(!1)},
dG(){var s,r,q,p,o,n,m,l,k,j=this,i=A.a([],t.t),h=j.f
j.f=j.r
r=j.b
s=r.length
while(!0){q=j.f
if(!(q<s)){s=q
break}p=B.b.J(r,q)
if(p===92&&j.c){o=j.f=q+1
j.mY(o+6)
q=j.f
if(q!==o){B.a.n(i,A.ci("0x"+B.b.v(r,o,q),null))
q=j.f
if(q===s){s=q
break}p=B.b.J(r,q)
if(q-o!==6)n=p===32||p===9||p===13||p===10
else n=!1
if(n)j.f=q+1}else{if(q===s){s=q
break}j.f=q+1
B.a.n(i,B.b.J(r,q))}}else{if(q>=h)if(j.d)if(!A.hA(p))n=p>=48&&p<=57
else n=!0
else{if(!A.hA(p))n=p>=48&&p<=57
else n=!0
n=n||p===45}else n=!0
if(n){B.a.n(i,p);++j.f}else{s=q
break}}}m=j.a.em(0,j.r,s)
l=A.ac(i,0,null)
if(!j.d&&!j.e){s=j.r
k=A.mj(B.ac,"unit",r,s,j.f-s)}else k=-1
if(k===-1)k=B.b.v(r,j.r,j.f)==="!important"?505:-1
return new A.fN(l,k>=0?k:511,m)},
dH(){var s,r=this
r.io()
if(r.cm()===46){r.cl()
s=r.cm()
if(s>=48&&s<=57){r.io()
return r.L(62)}else --r.f}return r.L(60)},
nK(){var s=this.f,r=this.b
if(s<r.length){r=B.b.J(r,s)
r=r>=48&&r<=57}else r=!1
if(r){this.f=s+1
return!0}return!1},
mY(a){var s,r,q=this.b
a=Math.min(a,q.length)
for(;s=this.f,s<a;){r=B.b.J(q,s)
if(!(r>=48&&r<=57))if(!(r>=97&&r<=102))r=r>=65&&r<=70
else r=!0
else r=!0
if(r)this.f=s+1
else return}},
nl(){var s,r,q,p,o,n=this
for(;!0;){s=n.cl()
if(s===0){r=n.a
q=n.r
p=n.f
o=new A.ao(r,q,p)
o.aF(r,q,p)
return new A.bg(67,o)}else if(s===45)if(n.ab(45))if(n.ab(62))if(n.c)return n.ct()
else{r=n.a
q=n.r
p=n.f
o=new A.ao(r,q,p)
o.aF(r,q,p)
return new A.bg(504,o)}}},
nm(){var s,r,q,p,o,n=this
for(;!0;){s=n.cl()
if(s===0){r=n.a
q=n.r
p=n.f
o=new A.ao(r,q,p)
o.aF(r,q,p)
return new A.bg(67,o)}else if(s===42)if(n.ab(47))if(n.c)return n.ct()
else{r=n.a
q=n.r
p=n.f
o=new A.ao(r,q,p)
o.aF(r,q,p)
return new A.bg(64,o)}}}}
A.kj.prototype={
cl(){var s=this.f,r=this.b
if(s<r.length){this.f=s+1
return B.b.J(r,s)}else return 0},
hB(a){var s=this.f+a,r=this.b
if(s<r.length)return B.b.J(r,s)
else return 0},
cm(){return this.hB(0)},
ab(a){var s=this.f,r=this.b
if(s<r.length)if(B.b.J(r,s)===a){this.f=s+1
return!0}else return!1
else return!1},
hA(a){var s,r
if(a>=48&&a<=57)return!0
s=this.cm()
if(a===46)return s>=48&&s<=57
if(a===43||a===45){if(!(s>=48&&s<=57))if(s===46){r=this.hB(1)
r=r>=48&&r<=57}else r=!1
else r=!0
return r}return!1},
L(a){return new A.bg(a,this.a.em(0,this.r,this.f))},
nn(){var s,r,q,p,o=this,n=--o.f
for(s=o.b,r=s.length;n<r;n=q){q=o.f=n+1
p=B.b.J(s,n)
if(!(p===32||p===9||p===13))if(p===10){if(!o.c){n=o.a
s=o.r
r=new A.ao(n,s,q)
r.aF(n,s,q)
return new A.bg(63,r)}}else{n=o.f=q-1
if(o.c)return o.ct()
else{s=o.a
r=o.r
q=new A.ao(s,r,n)
q.aF(s,r,n)
return new A.bg(63,q)}}}return o.L(1)},
io(){var s,r,q,p
for(s=this.b,r=s.length;q=this.f,q<r;){p=B.b.J(s,q)
if(p>=48&&p<=57)this.f=q+1
else return}}}
A.d_.prototype={
l(a){return"MessageLevel."+this.b}}
A.cZ.prototype={
l(a){var s=this,r=s.d&&B.aj.ai(s.a),q=r?B.aj.k(0,s.a):null,p=r?""+A.k(q):""
p=p+A.k(B.c5.k(0,s.a))+" "
if(r)p+="\x1b[0m"
p=p+"on "+s.c.iN(0,s.b,q)
return p.charCodeAt(0)==0?p:p}}
A.jJ.prototype={
n5(a,b,c){var s=new A.cZ(B.K,b,c,this.b.w)
B.a.n(this.c,s)
this.a.$1(s)}}
A.jZ.prototype={}
A.bJ.prototype={
O(a){return null},
l(a){var s=this.a
s=A.ac(B.r.b4(s.a.c,s.b,s.c),0,null)
return s},
gag(a){return this.b}}
A.cb.prototype={
O(a){return null},
gag(a){return"*"}}
A.hx.prototype={
O(a){return null},
gag(a){return"&"}}
A.h2.prototype={
O(a){return null},
gag(a){return"not"}}
A.hn.prototype={
O(a){return B.a.aX(this.b,a.gjg())}}
A.c4.prototype={
gm(a){return this.b.length},
O(a){return a.jh(this)}}
A.eh.prototype={
O(a){this.c.O(a)
return null},
l(a){var s=this.c.b
return s.gag(s)}}
A.aU.prototype={
gag(a){var s=this.b
return s.gag(s)},
O(a){return t.bF.a(this.b).O(a)}}
A.cq.prototype={
O(a){var s=this.b
return s instanceof A.cb||a.a.x===s.gag(s).toLowerCase()},
l(a){var s=this.b
return s.gag(s)}}
A.h_.prototype={
giO(){var s=this.d
if(s instanceof A.cb)s="*"
else s=s==null?"":t.gx.a(s).b
return s},
O(a){return a.oC(this)},
l(a){var s=this.giO(),r=t.g9.a(this.b).b
return s+"|"+r.gag(r)}}
A.fo.prototype={
nI(){switch(this.d){case 28:return"="
case 530:return"~="
case 531:return"|="
case 532:return"^="
case 533:return"$="
case 534:return"*="
case 535:return""}return null},
oA(){var s=this.e
if(s!=null)if(s instanceof A.bJ)return s.l(0)
else return'"'+A.k(s)+'"'
else return""},
O(a){return a.oB(this)},
l(a){var s=this.b
return"["+s.gag(s)+A.k(this.nI())+this.oA()+"]"}}
A.fM.prototype={
O(a){var s=a.a.b.k(0,"id"),r=s==null?"":s,q=this.b
return r===q.gag(q)},
l(a){return"#"+A.k(this.b)}}
A.fv.prototype={
O(a){var s,r=a.a
r.toString
s=this.b
s=s.gag(s)
return new A.fD(r).dX().G(0,s)},
l(a){return"."+A.k(this.b)}}
A.d3.prototype={
O(a){return a.oE(this)},
l(a){var s=this.b
return":"+s.gag(s)}}
A.d4.prototype={
O(a){a.oG(this)
return!1},
l(a){var s=this.d?":":"::",r=this.b
return s+r.gag(r)}}
A.eb.prototype={
O(a){return a.oD(this)}}
A.hg.prototype={
O(a){return a.oF(this)}}
A.d8.prototype={
O(a){a.lH(this.b)
return null}}
A.h3.prototype={
O(a){return!A.ie(this.d.O(a))}}
A.h8.prototype={
O(a){return null}}
A.h7.prototype={
O(a){return null}}
A.af.prototype={
O(a){return null}}
A.h6.prototype={
O(a){return null}}
A.bh.prototype={
O(a){return null},
l(a){return this.d+A.k(A.qA(this.f))}}
A.fW.prototype={
O(a){return null}}
A.hd.prototype={
O(a){return null}}
A.fE.prototype={
O(a){return null}}
A.fH.prototype={
O(a){return null}}
A.fi.prototype={
O(a){return null}}
A.hy.prototype={
O(a){return null}}
A.fL.prototype={
O(a){return null}}
A.fK.prototype={
O(a){return null}}
A.hi.prototype={
O(a){return null}}
A.fu.prototype={
O(a){return null}}
A.hh.prototype={
O(a){return null}}
A.hI.prototype={
O(a){return null}}
A.P.prototype={}
A.aj.prototype={}
A.hJ.prototype={
lH(a){var s
t.fr.a(a)
for(s=0;s<a.length;++s)a[s].O(this)},
$inR:1}
A.aw.prototype={
l(a){var s=this.a,r=this.b
return s!=null?s+":"+r:r},
gZ(a){return 37*(37*(J.aA(this.a)&2097151)+B.b.gZ(this.b)&2097151)+B.b.gZ(this.c)&1073741823},
az(a,b){var s,r,q
if(!(b instanceof A.aw))return 1
s=this.a
if(s==null)s=""
r=b.a
q=B.b.az(s,r==null?"":r)
if(q!==0)return q
q=B.b.az(this.b,b.b)
if(q!==0)return q
return B.b.az(this.c,b.c)},
W(a,b){if(b==null)return!1
return b instanceof A.aw&&this.a==b.a&&this.b===b.b&&this.c===b.c},
$iae:1}
A.i3.prototype={}
A.l5.prototype={}
A.hV.prototype={}
A.ag.prototype={
gak(a){var s,r=this,q=r.c
if(q===$){s=A.a([],t.d)
r.c!==$&&A.C("nodes")
q=r.c=new A.ah(r,s)}return q},
gi8(a){var s,r=this,q=r.d
if(q===$){s=new A.fI(r.gak(r))
r.d!==$&&A.C("children")
r.sl7(s)
q=s}return q},
dY(a){var s=this.a
if(s!=null)B.a.a4(s.gak(s).a,this)
return this},
nw(a,b,c){var s,r,q=this
if(c==null)q.gak(q).n(0,b)
else{s=q.gak(q)
r=q.gak(q)
s.bB(0,r.aj(r,c),b)}},
de(a,b,c){var s,r,q,p,o,n,m,l
A.ii(c,t.A,"T","_clone")
c.a(a)
if(b)for(s=this.gak(this).a,r=A.v(s),s=new J.at(s,s.length,r.h("at<1>")),r=r.c,q=t.d;s.q();){p=s.d
p=(p==null?r.a(p):p).cO(0,!0)
o=a.c
if(o===$){n=A.a([],q)
a.c!==$&&A.C("nodes")
o=a.c=new A.ah(a,n)}n=p.a
if(n!=null){m=n.c
if(m===$){l=A.a([],q)
n.c!==$&&A.C("nodes")
m=n.c=new A.ah(n,l)}B.a.a4(m.a,p)}p.a=o.b
o.bX(0,p)}return a},
scN(a,b){this.b=t.oP.a(b)},
sl7(a){this.d=t.jB.a(a)}}
A.dD.prototype={
l(a){return"#document"},
cO(a,b){return this.de(A.nh(),!0,t.dA)}}
A.fC.prototype={
l(a){var s,r=this,q=r.x,p=q==null
if(!p||r.y!=null){if(p)q=""
s=r.y
if(s==null)s=""
return"<!DOCTYPE "+A.k(r.w)+' "'+q+'" "'+s+'">'}else return"<!DOCTYPE "+A.k(r.w)+">"},
cO(a,b){return A.ni(this.w,this.x,this.y)}}
A.bQ.prototype={
l(a){var s=J.bx(this.w)
this.w=s
return'"'+s+'"'},
cO(a,b){var s=J.bx(this.w)
this.w=s
return A.mi(s)},
i0(a,b){var s=this.w;(!(s instanceof A.a0)?this.w=new A.a0(A.k(s)):s).a+=b}}
A.U.prototype={
gdU(a){var s,r,q,p,o=this.a
if(o==null)return null
s=o.gak(o)
for(r=s.aj(s,this)-1,o=s.a,q=o.length;r>=0;--r){if(!(r<q))return A.c(o,r)
p=o[r]
if(p instanceof A.U)return p}return null},
giP(a){var s,r,q,p,o,n=this.a
if(n==null)return null
s=n.gak(n)
for(r=s.aj(s,this)+1,q=s.a,p=q.length;r<p;++r){if(!(r>=0))return A.c(q,r)
o=q[r]
if(o instanceof A.U)return o}return null},
l(a){var s=A.q4(this.w)
return"<"+(s==null?"":s+" ")+A.k(this.x)+">"},
cO(a,b){var s=this,r=A.m1(s.x,s.w)
r.scN(0,A.fX(s.b,t.K,t.N))
return s.de(r,b,t.h)}}
A.fy.prototype={
l(a){return"<!-- "+this.w+" -->"},
cO(a,b){return A.ng(this.w)}}
A.ah.prototype={
n(a,b){t.A.a(b)
b.dY(0)
b.a=this.b
this.bX(0,b)},
H(a,b){var s,r,q,p,o,n,m,l,k=this.lo(t.hl.a(b))
for(s=A.v(k).h("V<1>"),r=new A.V(k,s),r=new A.J(r,r.gm(r),s.h("J<B.E>")),q=this.b,s=s.h("B.E"),p=t.d;r.q();){o=r.d
if(o==null)o=s.a(o)
n=o.a
if(n!=null){m=n.c
if(m===$){l=A.a([],p)
n.c!==$&&A.C("nodes")
m=n.c=new A.ah(n,l)}B.a.a4(m.a,o)}o.a=q}this.kO(0,k)},
bB(a,b,c){c.dY(0)
c.a=this.b
this.fZ(0,b,c)},
bO(a){var s,r,q
for(s=this.a,r=A.v(s),s=new J.at(s,s.length,r.h("at<1>")),r=r.c;s.q();){q=s.d;(q==null?r.a(q):q).a=null}this.kM(this)},
t(a,b,c){var s
t.A.a(c)
s=this.a
if(!(b>=0&&b<s.length))return A.c(s,b)
s[b].a=null
c.dY(0)
c.a=this.b
this.kN(0,b,c)},
lo(a){var s,r
t.hl.a(a)
s=A.a([],t.d)
for(r=a.gI(a);r.q();)B.a.n(s,r.gB())
return s}}
A.fI.prototype={
t(a,b,c){var s,r,q
t.h.a(c)
s=t.x
s=A.j(new A.an(this.a,s),!1,s.h("i.E"))
if(!(b>=0&&b<s.length))return A.c(s,b)
s=s[b]
r=s.a
if(r==null)A.M(A.S("Node must have a parent to replace it."))
r=r.gak(r)
q=s.a
q=q.gak(q)
r.t(0,q.aj(q,s),c)},
sm(a,b){var s=t.x,r=A.j(new A.an(this.a,s),!1,s.h("i.E")).length
if(b>=r)return
else if(b<0)throw A.d(A.a4("Invalid list length",null))
this.od(0,b,r)},
n(a,b){this.a.n(0,t.h.a(b))},
cF(a,b){t.dU.a(b)
throw A.d(A.S("TODO(jacobr): should we impl?"))},
od(a,b,c){var s=t.x
B.a.b6(B.a.b4(A.j(new A.an(this.a,s),!1,s.h("i.E")),b,c),new A.iU())},
dO(a,b,c){var s,r
c.h("0(U)").a(b)
s=t.x
s=A.j(new A.an(this.a,s),!1,s.h("i.E"))
r=A.v(s)
return new A.G(s,r.X(c).h("1(2)").a(b),r.h("@<1>").X(c).h("G<1,2>"))},
e2(a,b){var s,r
t.cT.a(b)
s=t.x
s=A.j(new A.an(this.a,s),!1,s.h("i.E"))
r=A.v(s)
return new A.am(s,r.h("y(1)").a(b),r.h("am<1>"))},
cp(a,b){var s
t.cT.a(b)
s=t.x
return B.a.cp(A.j(new A.an(this.a,s),!1,s.h("i.E")),b)},
ae(a,b){var s=t.x
s=A.j(new A.an(this.a,s),!1,s.h("i.E"))
if(!(b>=0&&b<s.length))return A.c(s,b)
return s[b]},
gan(a){var s=t.x
return A.j(new A.an(this.a,s),!1,s.h("i.E")).length===0},
gm(a){var s=t.x
return A.j(new A.an(this.a,s),!1,s.h("i.E")).length},
k(a,b){var s=t.x
s=A.j(new A.an(this.a,s),!1,s.h("i.E"))
if(!(b>=0&&b<s.length))return A.c(s,b)
return s[b]},
gI(a){var s=t.x
s=A.j(new A.an(this.a,s),!1,s.h("i.E"))
return new J.at(s,s.length,A.v(s).h("at<1>"))},
ga3(a){var s=t.x
return B.a.ga3(A.j(new A.an(this.a,s),!1,s.h("i.E")))},
gp(a){var s=t.x
return B.a.gp(A.j(new A.an(this.a,s),!1,s.h("i.E")))},
$iO:1,
$in:1}
A.iU.prototype={
$1(a){return t.h.a(a).dY(0)},
$S:86}
A.hS.prototype={}
A.hT.prototype={}
A.hU.prototype={}
A.hX.prototype={}
A.hY.prototype={}
A.i0.prototype={}
A.ji.prototype={
gaC(){var s=this.x
return s===$?this.x=this.gho():s},
gho(){var s=this,r=s.Q
if(r===$){r!==$&&A.C("_initialPhase")
r=s.Q=new A.bq(s,s.d)}return r},
ghb(){var s=this,r=s.as
if(r===$){r!==$&&A.C("_beforeHtmlPhase")
r=s.as=new A.fr(s,s.d)}return r},
gld(){var s=this,r=s.at
if(r===$){r!==$&&A.C("_beforeHeadPhase")
r=s.at=new A.dz(s,s.d)}return r},
gbY(){var s=this,r=s.ax
if(r===$){r!==$&&A.C("_inHeadPhase")
r=s.ax=new A.fP(s,s.d)}return r},
ga5(){var s=this,r=s.ch
if(r===$){r!==$&&A.C("_inBodyPhase")
r=s.ch=new A.cT(s,s.d)}return r},
ghK(){var s=this,r=s.CW
if(r===$){r!==$&&A.C("_textPhase")
r=s.CW=new A.hw(s,s.d)}return r},
gaG(){var s=this,r=s.cx
if(r===$){r!==$&&A.C("_inTablePhase")
r=s.cx=new A.dV(s,s.d)}return r},
gdf(){var s,r=this,q=r.cy
if(q===$){s=A.a([],t.ks)
r.cy!==$&&A.C("_inTableTextPhase")
q=r.cy=new A.cV(s,r,r.d)}return q},
ghk(){var s=this,r=s.db
if(r===$){r!==$&&A.C("_inCaptionPhase")
r=s.db=new A.dQ(s,s.d)}return r},
ghm(){var s=this,r=s.dx
if(r===$){r!==$&&A.C("_inColumnGroupPhase")
r=s.dx=new A.dR(s,s.d)}return r},
geF(){var s=this,r=s.dy
if(r===$){r!==$&&A.C("_inTableBodyPhase")
r=s.dy=new A.cr(s,s.d)}return r},
geE(){var s=this,r=s.fr
if(r===$){r!==$&&A.C("_inRowPhase")
r=s.fr=new A.dT(s,s.d)}return r},
ghl(){var s=this,r=s.fx
if(r===$){r!==$&&A.C("_inCellPhase")
r=s.fx=new A.cU(s,s.d)}return r},
gbZ(){var s=this,r=s.fy
if(r===$){r!==$&&A.C("_inSelectPhase")
r=s.fy=new A.dU(s,s.d)}return r},
ghn(){var s=this,r=s.k2
if(r===$){r!==$&&A.C("_inFramesetPhase")
r=s.k2=new A.dS(s,s.d)}return r},
lu(){var s
this.bk(0)
for(;!0;)try{this.nE()
break}catch(s){if(A.bl(s) instanceof A.k1)this.bk(0)
else throw s}},
bk(a){var s=this
s.c.bk(0)
s.d.bk(0)
s.f=!1
B.a.bO(s.e)
s.r="no quirks"
s.x=s.gho()
s.z=!0},
iJ(a){var s,r,q=a.x
if(q==="annotation-xml"&&a.w==="http://www.w3.org/1998/Math/MathML"){q=a.b.k(0,"encoding")
if(q==null)s=null
else{r=t.E
s=A.ac(new A.G(new A.a5(q),r.h("h(t.E)").a(A.bG()),r.h("G<t.E,h>")),0,null)}return s==="text/html"||s==="application/xhtml+xml"}else return B.a.G(B.bu,new A.o(a.w,q,t.iA))},
nv(a,b){var s,r=this.d,q=r.c
if(q.length===0)return!1
s=B.a.gp(q)
q=s.w
if(q==r.a)return!1
r=s.x
if(B.a.G(B.ae,new A.o(q,r,t.iA))){if(b===2){q=t.ny.a(a).b
q=q!=="mglyph"&&q!=="malignmark"}else q=!1
if(q)return!1
if(b===1||b===0)return!1}if(r==="annotation-xml"&&b===2&&t.ny.a(a).b==="svg")return!1
if(this.iJ(s))if(b===2||b===1||b===0)return!1
return!0},
nE(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9="_initialPhase"
for(s=a8.c,r=a8.d,q=t.i,p=t.cw,o=t.ia,n=t.ny,m=t.lH,l=t.g4,k=a8.e,j=t.m,i=t.jK,h=s.a,g=t.N,f=t.X;s.q();){e=s.at
e.toString
for(d=e;d!=null;){c=d.gc7(d)
if(c===6){i.a(d)
b=d.a
a=d.c
if(a==null){a=d.c=J.bx(d.b)
d.b=null}a0=j.a(d.e)
if(b==null){a1=h.w
if(a1==null)b=null
else{a2=h.y
new A.aY(a1,a2).bb(a1,a2)
b=new A.ao(a1,a2,a2)
b.aF(a1,a2,a2)}}B.a.n(k,new A.aS(a,b,a0))
d=null}else{a3=a8.x
if(a3===$){a3=a8.Q
if(a3===$){a4=new A.bq(a8,r)
a3!==$&&A.C(a9)
a8.Q=a4
a3=a4}a8.x=a3}if(a8.nv(e,c)){a3=a8.id
if(a3===$){a4=new A.fO(a8,r)
a3!==$&&A.C("_inForeignContentPhase")
a8.id=a4
a3=a4}a5=a3}else a5=a3
switch(c){case 1:d=a5.a1(l.a(d))
break
case 0:d=a5.aH(m.a(d))
break
case 2:d=a5.K(n.a(d))
break
case 3:d=a5.N(o.a(d))
break
case 4:d=a5.c9(p.a(d))
break
case 5:d=a5.iW(q.a(d))
break}}}if(e instanceof A.c6)if(e.c&&!e.r){b=e.a
e=j.a(A.w(["name",e.b],g,f))
if(b==null){a=h.w
if(a==null)b=null
else{a0=h.y
new A.aY(a,a0).bb(a,a0)
b=new A.ao(a,a0,a0)
b.aF(a,a0,a0)}}B.a.n(k,new A.aS("non-void-element-with-trailing-solidus",b,e))}}a6=A.a([],t.gg)
for(a7=!0;a7;){a3=a8.x
if(a3===$){a3=a8.Q
if(a3===$){a4=new A.bq(a8,r)
a3!==$&&A.C(a9)
a8.Q=a4
a3=a4}a3=a8.x=a3}B.a.n(a6,a3)
a3=a8.x
if(a3===$){a3=a8.Q
if(a3===$){a4=new A.bq(a8,r)
a3!==$&&A.C(a9)
a8.Q=a4
a3=a4}a3=a8.x=a3}a7=a3.a8()}},
ght(){var s=this.c.a,r=s.w
if(r==null)s=null
else{s=A.bX(r,s.y)
r=s.b
r=A.mo(s.a,r,r)
s=r}return s},
F(a,b,c){var s
t.m.a(c)
s=new A.aS(b,a==null?this.ght():a,c)
B.a.n(this.e,s)},
a0(a,b){return this.F(a,b,B.X)},
hT(a){var s=a.e.a4(0,"definitionurl")
if(s!=null)a.e.t(0,"definitionURL",s)},
hU(a){var s,r,q,p,o,n
for(s=a.e,r=A.z(s).h("aP<1>"),r=A.j(new A.aP(s,r),!1,r.h("i.E")),s=r.length,q=0;q<s;++q){p=A.aq(r[q])
o=B.c7.k(0,p)
if(o!=null){n=a.e
p=n.a4(0,p)
p.toString
n.t(0,o,p)}}},
eN(a){var s,r,q,p,o,n
for(s=a.e,r=A.z(s).h("aP<1>"),r=A.j(new A.aP(s,r),!1,r.h("i.E")),s=r.length,q=0;q<s;++q){p=A.aq(r[q])
o=B.c6.k(0,p)
if(o!=null){n=a.e
p=n.a4(0,p)
p.toString
n.t(0,o,p)}}},
j5(){var s,r,q,p,o,n,m,l,k,j=this,i="_inCellPhase",h="_inTableBodyPhase",g="_inBodyPhase"
for(s=j.d,r=s.c,q=A.v(r).h("V<1>"),p=new A.V(r,q),p=new A.J(p,p.gm(p),q.h("J<B.E>")),q=q.h("B.E"),o=s.a;p.q();){n=p.d
if(n==null)n=q.a(n)
m=n.x
if(0>=r.length)return A.c(r,0)
l=n===r[0]
if(l)m=j.w
switch(m){case"select":case"colgroup":case"head":case"html":break}if(!l&&n.w!=o)continue
switch(m){case"select":k=j.fy
if(k===$){k!==$&&A.C("_inSelectPhase")
k=j.fy=new A.dU(j,s)}j.x=k
return
case"td":k=j.fx
if(k===$){k!==$&&A.C(i)
k=j.fx=new A.cU(j,s)}j.x=k
return
case"th":k=j.fx
if(k===$){k!==$&&A.C(i)
k=j.fx=new A.cU(j,s)}j.x=k
return
case"tr":k=j.fr
if(k===$){k!==$&&A.C("_inRowPhase")
k=j.fr=new A.dT(j,s)}j.x=k
return
case"tbody":k=j.dy
if(k===$){k!==$&&A.C(h)
k=j.dy=new A.cr(j,s)}j.x=k
return
case"thead":k=j.dy
if(k===$){k!==$&&A.C(h)
k=j.dy=new A.cr(j,s)}j.x=k
return
case"tfoot":k=j.dy
if(k===$){k!==$&&A.C(h)
k=j.dy=new A.cr(j,s)}j.x=k
return
case"caption":k=j.db
if(k===$){k!==$&&A.C("_inCaptionPhase")
k=j.db=new A.dQ(j,s)}j.x=k
return
case"colgroup":k=j.dx
if(k===$){k!==$&&A.C("_inColumnGroupPhase")
k=j.dx=new A.dR(j,s)}j.x=k
return
case"table":k=j.cx
if(k===$){k!==$&&A.C("_inTablePhase")
k=j.cx=new A.dV(j,s)}j.x=k
return
case"head":k=j.ch
if(k===$){k!==$&&A.C(g)
k=j.ch=new A.cT(j,s)}j.x=k
return
case"body":k=j.ch
if(k===$){k!==$&&A.C(g)
k=j.ch=new A.cT(j,s)}j.x=k
return
case"frameset":k=j.k2
if(k===$){k!==$&&A.C("_inFramesetPhase")
k=j.k2=new A.dS(j,s)}j.x=k
return
case"html":k=j.at
if(k===$){k!==$&&A.C("_beforeHeadPhase")
k=j.at=new A.dz(j,s)}j.x=k
return}}j.x=j.ga5()},
d1(a,b){var s,r,q=this
q.d.M(a)
s=t.c
r=q.c
if(b==="RAWTEXT")r.si(s.a(r.gdW()))
else r.si(s.a(r.gcz()))
q.y=q.gaC()
q.x=q.ghK()}}
A.a3.prototype={
a8(){throw A.d(A.hB(null))},
c9(a){var s=this.b
s.cr(a,B.a.gp(s.c))
return null},
iW(a){this.a.a0(a.a,"unexpected-doctype")
return null},
a1(a){this.b.bR(a.gaA(a),a.a)
return null},
aH(a){this.b.bR(a.gaA(a),a.a)
return null},
K(a){throw A.d(A.hB(null))},
ba(a){var s,r=this.a
if(!r.f&&a.b==="html")r.a0(a.a,"non-html-root")
s=this.b.c
if(0>=s.length)return A.c(s,0)
s[0].e=a.a
a.e.b6(0,new A.jY(this))
r.f=!1
return null},
N(a){throw A.d(A.hB(null))},
cu(a){var s,r=a.b,q=this.b.c
if(0>=q.length)return A.c(q,-1)
s=q.pop()
for(;s.x!=r;){if(0>=q.length)return A.c(q,-1)
s=q.pop()}}}
A.jY.prototype={
$2(a,b){var s
t.K.a(a)
A.aq(b)
s=this.a.b.c
if(0>=s.length)return A.c(s,0)
s[0].b.dV(a,new A.jX(b))},
$S:21}
A.jX.prototype={
$0(){return this.a},
$S:6}
A.bq.prototype={
aH(a){return null},
c9(a){var s=this.b,r=s.b
r===$&&A.b("document")
s.cr(a,r)
return null},
iW(a){var s,r,q,p,o,n=this,m=a.d,l=a.b
if(l==null)s=null
else{r=t.E
s=A.ac(new A.G(new A.a5(l),r.h("h(t.E)").a(A.bG()),r.h("G<t.E,h>")),0,null)}q=a.c
p=a.e
if(m==="html")if(s==null)l=q!=null&&q!=="about:legacy-compat"
else l=!0
else l=!0
if(l)n.a.a0(a.a,"unknown-doctype")
if(s==null)s=""
o=A.ni(a.d,a.b,a.c)
o.e=a.a
l=n.b.b
l===$&&A.b("document")
l.gak(l).n(0,o)
if(p)if(a.d==="html"){l=B.b.gfX(s)
if(!B.a.aX(B.be,l))if(!B.a.G(B.bp,s))if(!(B.a.aX(B.ad,l)&&q==null))l=q!=null&&q.toLowerCase()==="http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd"
else l=!0
else l=!0
else l=!0}else l=!0
else l=!0
if(l)n.a.r="quirks"
else{l=B.b.gfX(s)
if(!B.a.aX(B.bv,l))l=B.a.aX(B.ad,l)&&q!=null
else l=!0
if(l)n.a.r="limited quirks"}l=n.a
l.x=l.ghb()
return null},
bw(){var s=this.a
s.r="quirks"
s.x=s.ghb()},
a1(a){this.a.a0(a.a,"expected-doctype-but-got-chars")
this.bw()
return a},
K(a){this.a.F(a.a,"expected-doctype-but-got-start-tag",A.w(["name",a.b],t.N,t.X))
this.bw()
return a},
N(a){this.a.F(a.a,"expected-doctype-but-got-end-tag",A.w(["name",a.b],t.N,t.X))
this.bw()
return a},
a8(){var s=this.a
s.a0(s.ght(),"expected-doctype-but-got-eof")
this.bw()
return!0}}
A.fr.prototype={
dL(){var s=this.b,r=s.ik(0,A.aC("html",A.a7(null,null,t.K,t.N),null,!1))
B.a.n(s.c,r)
s=s.b
s===$&&A.b("document")
s.gak(s).n(0,r)
s=this.a
s.x=s.gld()},
a8(){this.dL()
return!0},
c9(a){var s=this.b,r=s.b
r===$&&A.b("document")
s.cr(a,r)
return null},
aH(a){return null},
a1(a){this.dL()
return a},
K(a){if(a.b==="html")this.a.f=!0
this.dL()
return a},
N(a){var s=a.b
switch(s){case"head":case"body":case"html":case"br":this.dL()
return a
default:this.a.F(a.a,"unexpected-end-tag-before-html",A.w(["name",s],t.N,t.X))
return null}}}
A.dz.prototype={
K(a){var s=null
switch(a.b){case"html":return this.a.ga5().K(a)
case"head":this.cG(a)
return s
default:this.cG(A.aC("head",A.a7(s,s,t.K,t.N),s,!1))
return a}},
N(a){var s=null,r=a.b
switch(r){case"head":case"body":case"html":case"br":this.cG(A.aC("head",A.a7(s,s,t.K,t.N),s,!1))
return a
default:this.a.F(a.a,"end-tag-after-implied-root",A.w(["name",r],t.N,t.X))
return s}},
a8(){this.cG(A.aC("head",A.a7(null,null,t.K,t.N),null,!1))
return!0},
aH(a){return null},
a1(a){this.cG(A.aC("head",A.a7(null,null,t.K,t.N),null,!1))
return a},
cG(a){var s=this.b
s.M(a)
s.sns(B.a.gp(s.c))
s=this.a
s.x=s.gbY()}}
A.fP.prototype={
K(a){var s,r,q,p,o,n=this,m=null
switch(a.b){case"html":return n.a.ga5().K(a)
case"title":n.a.d1(a,"RCDATA")
return m
case"noscript":case"noframes":case"style":n.a.d1(a,"RAWTEXT")
return m
case"script":n.b.M(a)
s=n.a
r=s.c
r.si(t.c.a(r.gbI()))
s.y=s.gaC()
s.x=s.ghK()
return m
case"base":case"basefont":case"bgsound":case"command":case"link":s=n.b
s.M(a)
s=s.c
if(0>=s.length)return A.c(s,-1)
s.pop()
a.r=!0
return m
case"meta":s=n.b
s.M(a)
s=s.c
if(0>=s.length)return A.c(s,-1)
s.pop()
a.r=!0
q=a.e
s=n.a.c.a
if(!s.b){p=q.k(0,"charset")
o=q.k(0,"content")
if(p!=null)s.i7(p)
else if(o!=null)s.i7(new A.iK(new A.iS(o)).nN())}return m
case"head":n.a.a0(a.a,"two-heads-are-not-better-than-one")
return m
default:n.cS(new A.I("head",!1))
return a}},
N(a){var s=a.b
switch(s){case"head":this.cS(a)
return null
case"br":case"html":case"body":this.cS(new A.I("head",!1))
return a
default:this.a.F(a.a,"unexpected-end-tag",A.w(["name",s],t.N,t.X))
return null}},
a8(){this.cS(new A.I("head",!1))
return!0},
a1(a){this.cS(new A.I("head",!1))
return a},
cS(a){var s,r=this.a,q=r.d,p=q.c
if(0>=p.length)return A.c(p,-1)
p.pop()
s=r.ay
if(s===$){s!==$&&A.C("_afterHeadPhase")
s=r.ay=new A.fg(r,q)}r.x=s}}
A.fg.prototype={
K(a){var s=this,r=null,q=a.b
switch(q){case"html":return s.a.ga5().K(a)
case"body":q=s.a
q.z=!1
s.b.M(a)
q.x=q.ga5()
return r
case"frameset":s.b.M(a)
q=s.a
q.x=q.ghn()
return r
case"base":case"basefont":case"bgsound":case"link":case"meta":case"noframes":case"script":case"style":case"title":s.kt(a)
return r
case"head":s.a.F(a.a,"unexpected-start-tag",A.w(["name",q],t.N,t.X))
return r
default:s.bw()
return a}},
N(a){var s=a.b
switch(s){case"body":case"html":case"br":this.bw()
return a
default:this.a.F(a.a,"unexpected-end-tag",A.w(["name",s],t.N,t.X))
return null}},
a8(){this.bw()
return!0},
a1(a){this.bw()
return a},
kt(a){var s,r,q,p=this.a
p.F(a.a,"unexpected-start-tag-out-of-my-head",A.w(["name",a.b],t.N,t.X))
s=this.b
r=s.c
B.a.n(r,t.h.a(s.e))
p.gbY().K(a)
for(p=A.v(r).h("V<1>"),s=new A.V(r,p),s=new A.J(s,s.gm(s),p.h("J<B.E>")),p=p.h("B.E");s.q();){q=s.d
if(q==null)q=p.a(q)
if(q.x==="head"){B.a.a4(r,q)
break}}},
bw(){this.b.M(A.aC("body",A.a7(null,null,t.K,t.N),null,!1))
var s=this.a
s.x=s.ga5()
s.z=!0}}
A.cT.prototype={
K(a){var s,r,q,p,o,n,m=this,l=null,k="p",j="button",i="unexpected-start-tag",h="unexpected-start-tag-implies-end-tag",g="RAWTEXT",f=a.b
switch(f){case"html":return m.ba(a)
case"base":case"basefont":case"bgsound":case"command":case"link":case"meta":case"noframes":case"script":case"style":case"title":return m.a.gbY().K(a)
case"body":m.kq(a)
return l
case"frameset":m.ks(a)
return l
case"address":case"article":case"aside":case"blockquote":case"center":case"details":case"dir":case"div":case"dl":case"fieldset":case"figcaption":case"figure":case"footer":case"header":case"hgroup":case"menu":case"nav":case"ol":case"p":case"section":case"summary":case"ul":m.fR(a)
return l
case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":f=m.b
if(f.a_(k,j))m.by(new A.I(k,!1))
s=f.c
if(B.a.G(B.G,B.a.gp(s).x)){m.a.F(a.a,i,A.w(["name",a.b],t.N,t.X))
if(0>=s.length)return A.c(s,-1)
s.pop()}f.M(a)
return l
case"pre":case"listing":f=m.b
if(f.a_(k,j))m.by(new A.I(k,!1))
f.M(a)
m.a.z=!1
m.c=!0
return l
case"form":f=m.b
if(f.f!=null)m.a.F(a.a,i,A.w(["name","form"],t.N,t.X))
else{if(f.a_(k,j))m.by(new A.I(k,!1))
f.M(a)
f.siA(B.a.gp(f.c))}return l
case"li":case"dd":case"dt":m.kw(a)
return l
case"plaintext":f=m.b
if(f.a_(k,j))m.by(new A.I(k,!1))
f.M(a)
f=m.a.c
f.si(t.c.a(f.gnP()))
return l
case"a":f=m.b
r=f.ip("a")
if(r!=null){m.a.F(a.a,h,A.w(["startName","a","endName","a"],t.N,t.X))
m.ir(new A.I("a",!1))
B.a.a4(f.c,r)
B.a.a4(f.d.a,r)}f.aD()
m.eM(a)
return l
case"b":case"big":case"code":case"em":case"font":case"i":case"s":case"small":case"strike":case"strong":case"tt":case"u":m.b.aD()
m.eM(a)
return l
case"nobr":f=m.b
f.aD()
if(f.aZ("nobr")){m.a.F(a.a,h,A.w(["startName","nobr","endName","nobr"],t.N,t.X))
m.N(new A.I("nobr",!1))
f.aD()}m.eM(a)
return l
case"button":return m.kr(a)
case"applet":case"marquee":case"object":f=m.b
f.aD()
f.M(a)
f.d.n(0,l)
m.a.z=!1
return l
case"xmp":f=m.b
if(f.a_(k,j))m.by(new A.I(k,!1))
f.aD()
f=m.a
f.z=!1
f.d1(a,g)
return l
case"table":f=m.a
if(f.r!=="quirks")if(m.b.a_(k,j))m.N(new A.I(k,!1))
m.b.M(a)
f.z=!1
f.x=f.gaG()
return l
case"area":case"br":case"embed":case"img":case"keygen":case"wbr":m.fW(a)
return l
case"param":case"source":case"track":f=m.b
f.M(a)
f=f.c
if(0>=f.length)return A.c(f,-1)
f.pop()
a.r=!0
return l
case"input":f=m.a
q=f.z
m.fW(a)
s=a.e.k(0,"type")
if(s==null)s=l
else{p=t.E
p=A.ac(new A.G(new A.a5(s),p.h("h(t.E)").a(A.bG()),p.h("G<t.E,h>")),0,l)
s=p}if(s==="hidden")f.z=q
return l
case"hr":f=m.b
if(f.a_(k,j))m.by(new A.I(k,!1))
f.M(a)
f=f.c
if(0>=f.length)return A.c(f,-1)
f.pop()
a.r=!0
m.a.z=!1
return l
case"image":m.a.F(a.a,"unexpected-start-tag-treated-as",A.w(["originalName","image","newName","img"],t.N,t.X))
m.K(A.aC("img",a.e,l,a.c))
return l
case"isindex":m.kv(a)
return l
case"textarea":m.b.M(a)
f=m.a
s=f.c
s.si(t.c.a(s.gcz()))
m.c=!0
f.z=!1
return l
case"iframe":f=m.a
f.z=!1
f.d1(a,g)
return l
case"noembed":case"noscript":m.a.d1(a,g)
return l
case"select":f=m.b
f.aD()
f.M(a)
f=m.a
f.z=!1
if(f.gaG()===f.gaC()||f.ghk()===f.gaC()||f.ghm()===f.gaC()||f.geF()===f.gaC()||f.geE()===f.gaC()||f.ghl()===f.gaC()){o=f.go
if(o===$){o!==$&&A.C("_inSelectInTablePhase")
o=f.go=new A.fQ(f,f.d)}f.x=o}else f.x=f.gbZ()
return l
case"rp":case"rt":f=m.b
if(f.aZ("ruby")){f.cc()
n=B.a.gp(f.c)
if(n.x!=="ruby")m.a.a0(n.e,"undefined-error")}f.M(a)
return l
case"option":case"optgroup":f=m.b
if(B.a.gp(f.c).x==="option")m.a.gaC().N(new A.I("option",!1))
f.aD()
m.a.d.M(a)
return l
case"math":f=m.b
f.aD()
s=m.a
s.hT(a)
s.eN(a)
a.w="http://www.w3.org/1998/Math/MathML"
f.M(a)
if(a.c){f=f.c
if(0>=f.length)return A.c(f,-1)
f.pop()
a.r=!0}return l
case"svg":f=m.b
f.aD()
s=m.a
s.hU(a)
s.eN(a)
a.w="http://www.w3.org/2000/svg"
f.M(a)
if(a.c){f=f.c
if(0>=f.length)return A.c(f,-1)
f.pop()
a.r=!0}return l
case"caption":case"col":case"colgroup":case"frame":case"head":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":m.a.F(a.a,"unexpected-start-tag-ignored",A.w(["name",f],t.N,t.X))
return l
default:f=m.b
f.aD()
f.M(a)
return l}},
N(a){var s,r,q,p,o,n=this,m=null,l="end-tag-too-early",k="unexpected-end-tag",j=a.b
switch(j){case"body":n.iq(a)
return m
case"html":return n.f5(a)
case"address":case"article":case"aside":case"blockquote":case"button":case"center":case"details":case"dir":case"div":case"dl":case"fieldset":case"figcaption":case"figure":case"footer":case"header":case"hgroup":case"listing":case"menu":case"nav":case"ol":case"pre":case"section":case"summary":case"ul":if(j==="pre")n.c=!1
s=n.b
r=s.aZ(j)
if(r)s.cc()
j=B.a.gp(s.c).x
s=a.b
if(j!=s)n.a.F(a.a,l,A.w(["name",s],t.N,t.X))
if(r)n.cu(a)
return m
case"form":j=n.b
q=j.f
j.f=null
if(q==null||!j.aZ(q))n.a.F(a.a,k,A.w(["name","form"],t.N,t.X))
else{j.cc()
j=j.c
if(!J.T(B.a.gp(j),q))n.a.F(a.a,"end-tag-too-early-ignored",A.w(["name","form"],t.N,t.X))
B.a.a4(j,q)}return m
case"p":n.by(a)
return m
case"dd":case"dt":case"li":p=j==="li"?"list":m
s=n.b
j=s.a_(j,p)
o=a.b
if(!j)n.a.F(a.a,k,A.w(["name",o],t.N,t.X))
else{s.bT(o)
j=B.a.gp(s.c).x
s=a.b
if(j!=s)n.a.F(a.a,l,A.w(["name",s],t.N,t.X))
n.cu(a)}return m
case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":n.n_(a)
return m
case"a":case"b":case"big":case"code":case"em":case"font":case"i":case"nobr":case"s":case"small":case"strike":case"strong":case"tt":case"u":n.ir(a)
return m
case"applet":case"marquee":case"object":s=n.b
if(s.aZ(j))s.cc()
j=B.a.gp(s.c).x
o=a.b
if(j!=o)n.a.F(a.a,l,A.w(["name",o],t.N,t.X))
if(s.aZ(a.b)){n.cu(a)
s.eU()}return m
case"br":j=t.N
n.a.F(a.a,"unexpected-end-tag-treated-as",A.w(["originalName","br","newName","br element"],j,t.X))
s=n.b
s.aD()
s.M(A.aC("br",A.a7(m,m,t.K,j),m,!1))
s=s.c
if(0>=s.length)return A.c(s,-1)
s.pop()
return m
default:n.n1(a)
return m}},
nz(a,b){var s,r
if(a.x!=b.x||a.w!=b.w)return!1
else{s=a.b
if(s.a!==b.b.a)return!1
else for(s=A.np(s,s.r,A.z(s).c);s.q();){r=s.d
if(!J.T(a.b.k(0,r),b.b.k(0,r)))return!1}}return!0},
eM(a){var s,r,q,p,o,n,m=this.b
m.M(a)
s=B.a.gp(m.c)
r=A.a([],t.hg)
for(m=m.d,q=A.z(m).h("V<t.E>"),p=new A.V(m,q),p=new A.J(p,p.gm(p),q.h("J<B.E>")),o=t.h,q=q.h("B.E");p.q();){n=p.d
if(n==null)n=q.a(n)
if(n==null)break
else{o.a(n)
if(this.nz(n,s))B.a.n(r,n)}}if(r.length===3)B.a.a4(m.a,B.a.gp(r))
m.n(0,s)},
a8(){var s,r,q,p
for(s=this.b.c,r=A.v(s).h("V<1>"),s=new A.V(s,r),s=new A.J(s,s.gm(s),r.h("J<B.E>")),r=r.h("B.E");s.q();){q=s.d
if(q==null)q=r.a(q)
switch(q.x){case"dd":case"dt":case"li":case"p":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":case"body":case"html":continue}s=this.a
p=q.e
t.m.a(B.X)
if(p==null){r=s.c.a
q=r.w
if(q==null)p=null
else{r=r.y
new A.aY(q,r).bb(q,r)
p=new A.ao(q,r,r)
p.aF(q,r,r)}}B.a.n(s.e,new A.aS("expected-closing-tag-but-got-eof",p,B.X))
break}return!1},
a1(a){var s
if(a.gaA(a)==="\x00")return null
s=this.b
s.aD()
s.bR(a.gaA(a),a.a)
s=this.a
if(s.z&&!A.mG(a.gaA(a)))s.z=!1
return null},
aH(a){var s,r,q,p=this
if(p.c){s=a.gaA(a)
r=p.c=!1
if(B.b.Y(s,"\n")){q=B.a.gp(p.b.c)
if(B.a.G(B.bw,q.x)){r=q.gak(q)
r=r.gan(r)}if(r)s=B.b.aq(s,1)}if(s.length!==0){r=p.b
r.aD()
r.bR(s,a.a)}}else{r=p.b
r.aD()
r.bR(a.gaA(a),a.a)}return null},
kq(a){var s,r,q=this.a
q.F(a.a,"unexpected-start-tag",A.w(["name","body"],t.N,t.X))
s=this.b.c
r=s.length
if(r!==1){if(1>=r)return A.c(s,1)
s=s[1].x!=="body"}else s=!0
if(!s){q.z=!1
a.e.b6(0,new A.jm(this))}},
ks(a){var s,r,q,p,o=this.a
o.F(a.a,"unexpected-start-tag",A.w(["name","frameset"],t.N,t.X))
s=this.b
r=s.c
q=r.length
if(q!==1){if(1>=q)return A.c(r,1)
p=r[1].x!=="body"}else p=!0
if(!p)if(o.z){if(1>=q)return A.c(r,1)
q=r[1].a
if(q!=null){q=q.gak(q)
if(1>=r.length)return A.c(r,1)
B.a.a4(q.a,r[1])}for(;B.a.gp(r).x!=="html";){if(0>=r.length)return A.c(r,-1)
r.pop()}s.M(a)
o.x=o.ghn()}},
fR(a){var s=this.b
if(s.a_("p","button"))this.by(new A.I("p",!1))
s.M(a)},
kw(a){var s,r,q,p,o,n,m,l,k,j,i=this.a
i.z=!1
s=a.b
s.toString
s=B.cJ.k(0,s)
s.toString
for(r=this.b,q=r.c,p=A.v(q).h("V<1>"),q=new A.V(q,p),q=new A.J(q,q.gm(q),p.h("J<B.E>")),o=t.h2,p=p.h("B.E");q.q();){n=q.d
if(n==null)n=p.a(n)
m=n.x
if(B.a.G(s,m)){l=i.x
if(l===$){l=i.Q
if(l===$){k=new A.bq(i,i.d)
l!==$&&A.C("_initialPhase")
i.Q=k
l=k}l=i.x=l}l.N(new A.I(m,!1))
break}j=n.w
if(B.a.G(B.V,new A.o(j==null?"http://www.w3.org/1999/xhtml":j,m,o))&&!B.a.G(B.bj,m))break}if(r.a_("p","button"))i.gaC().N(new A.I("p",!1))
r.M(a)},
kr(a){var s=this.b,r=this.a
if(s.aZ("button")){r.F(a.a,"unexpected-start-tag-implies-end-tag",A.w(["startName","button","endName","button"],t.N,t.X))
this.N(new A.I("button",!1))
return a}else{s.aD()
s.M(a)
r.z=!1}return null},
fW(a){var s=this.b
s.aD()
s.M(a)
s=s.c
if(0>=s.length)return A.c(s,-1)
s.pop()
a.r=!0
this.a.z=!1},
kv(a){var s,r,q,p,o,n=this,m=null,l="action",k=t.N
n.a.F(a.a,"deprecated-tag",A.w(["name","isindex"],k,t.X))
if(n.b.f!=null)return
s=t.K
r=A.a7(m,m,s,k)
q=a.e.k(0,l)
if(q!=null)r.t(0,l,q)
n.K(A.aC("form",r,m,!1))
n.K(A.aC("hr",A.a7(m,m,s,k),m,!1))
n.K(A.aC("label",A.a7(m,m,s,k),m,!1))
p=a.e.k(0,"prompt")
if(p==null)p="This is a searchable index. Enter search keywords: "
n.a1(new A.E(m,p))
o=A.fX(a.e,s,k)
o.a4(0,l)
o.a4(0,"prompt")
o.t(0,"name","isindex")
n.K(A.aC("input",o,m,a.c))
n.N(new A.I("label",!1))
n.K(A.aC("hr",A.a7(m,m,s,k),m,!1))
n.N(new A.I("form",!1))},
by(a){var s=this,r="unexpected-end-tag",q=s.b
if(!q.a_("p","button")){q=t.N
s.fR(A.aC("p",A.a7(null,null,t.K,q),null,!1))
s.a.F(a.a,r,A.w(["name","p"],q,t.X))
s.by(new A.I("p",!1))}else{q.bT("p")
if(B.a.gp(q.c).x!=="p")s.a.F(a.a,r,A.w(["name","p"],t.N,t.X))
s.cu(a)}},
iq(a){var s,r,q,p,o,n,m=this,l=m.b
if(!l.aZ("body")){m.a.a0(a.a,"undefined-error")
return}else{l=l.c
if(B.a.gp(l).x==="body")B.a.gp(l)
else for(l=A.mU(l,2,null,t.h),s=l.length,r=0;r<s;++r){q=l[r].x
switch(q){case"dd":case"dt":case"li":case"optgroup":case"option":case"p":case"rp":case"rt":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":case"body":case"html":continue}l=m.a
p=a.a
q=t.m.a(A.w(["gotName","body","expectedName",q],t.N,t.X))
if(p==null){s=l.c.a
o=s.w
if(o==null)p=null
else{s=s.y
new A.aY(o,s).bb(o,s)
p=new A.ao(o,s,s)
p.aF(o,s,s)}}B.a.n(l.e,new A.aS("expected-one-end-tag-but-got-another",p,q))
break}}l=m.a
n=l.k1
if(n===$){n!==$&&A.C("_afterBodyPhase")
n=l.k1=new A.fe(l,l.d)}l.x=n},
f5(a){if(this.b.aZ("body")){this.iq(new A.I("body",!1))
return a}return null},
n_(a){var s,r,q,p,o,n,m
for(s=this.b,r=0;r<6;++r)if(s.aZ(B.G[r])){q=s.c
p=B.a.gp(q).x
if(p!=null&&B.a.G(B.S,p)){if(0>=q.length)return A.c(q,-1)
q.pop()
s.bT(null)}break}q=s.c
o=B.a.gp(q).x
n=a.b
if(o!=n)this.a.F(a.a,"end-tag-too-early",A.w(["name",n],t.N,t.X))
for(r=0;r<6;++r)if(s.aZ(B.G[r])){if(0>=q.length)return A.c(q,-1)
m=q.pop()
for(;!B.a.G(B.G,m.x);){if(0>=q.length)return A.c(q,-1)
m=q.pop()}break}},
ir(b9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7=null,b8="nodes"
for(s=this.b,r=s.d,q=r.a,p=A.z(r).h("aQ.E"),o=s.c,n=t.K,m=t.N,l=t.h,k=t.d,j=t.h2,i=this.a,h=t.X,g=t.m,f=i.c.a,i=i.e,e=0;e<8;){++e
d=s.ip(b9.b)
if(d!=null)c=B.a.G(o,d)&&!s.aZ(d.x)
else c=!0
if(c){b=b9.a
s=g.a(A.w(["name",b9.b],m,h))
if(b==null){r=f.w
if(r==null)b=b7
else{q=f.y
new A.aY(r,q).bb(r,q)
b=new A.ao(r,q,q)
b.aF(r,q,q)}}B.a.n(i,new A.aS("adoption-agency-1.1",b,s))
return}else if(!B.a.G(o,d)){b=b9.a
s=g.a(A.w(["name",b9.b],m,h))
if(b==null){r=f.w
if(r==null)b=b7
else{p=f.y
new A.aY(r,p).bb(r,p)
b=new A.ao(r,p,p)
b.aF(r,p,p)}}B.a.n(i,new A.aS("adoption-agency-1.2",b,s))
B.a.a4(q,d)
return}c=B.a.gp(o)
if(d==null?c!=null:d!==c){b=b9.a
c=g.a(A.w(["name",b9.b],m,h))
if(b==null){a=f.w
if(a==null)b=b7
else{a0=f.y
new A.aY(a,a0).bb(a,a0)
b=new A.ao(a,a0,a0)
b.aF(a,a0,a0)}}B.a.n(i,new A.aS("adoption-agency-1.3",b,c))}a1=B.a.aj(o,d)
c=A.mU(o,a1,b7,l)
a=c.length
a3=0
while(!0){if(!(a3<c.length)){a2=b7
break}a4=c[a3]
a5=a4.w
if(a5==null)a5="http://www.w3.org/1999/xhtml"
if(B.a.G(B.V,new A.o(a5,a4.x,j))){a2=a4
break}c.length===a||(0,A.e)(c);++a3}if(a2==null){if(0>=o.length)return A.c(o,-1)
a4=o.pop()
for(;a4!==d;){if(0>=o.length)return A.c(o,-1)
a4=o.pop()}B.a.a4(q,a4)
return}c=a1-1
if(!(c>=0&&c<o.length))return A.c(o,c)
a6=o[c]
a7=r.aj(r,d)
a8=B.a.aj(o,a2)
for(a9=a2,b0=0;b0<3;){++b0;--a8
if(!(a8>=0&&a8<o.length))return A.c(o,a8)
b1=o[a8]
if(!r.G(r,b1)){B.a.a4(o,b1)
continue}if(b1===d)break
if(a9===a2)a7=r.aj(r,b1)+1
c=b1.x
b2=new A.U(b1.w,c,A.a7(b7,b7,n,m))
b2.scN(0,A.fX(b1.b,n,m))
b3=b1.de(b2,!1,l)
B.a.t(q,r.aj(r,b1),p.a(b3))
B.a.t(o,B.a.aj(o,b1),b3)
c=a9.a
if(c!=null){b4=c.c
if(b4===$){a=A.a([],k)
c.c!==$&&A.C(b8)
b4=c.c=new A.ah(c,a)}B.a.a4(b4.a,a9)}b4=b3.c
if(b4===$){c=A.a([],k)
b3.c!==$&&A.C(b8)
b4=b3.c=new A.ah(b3,c)}c=a9.a
if(c!=null){b5=c.c
if(b5===$){a=A.a([],k)
c.c!==$&&A.C(b8)
b5=c.c=new A.ah(c,a)}B.a.a4(b5.a,a9)}a9.a=b4.b
b4.bX(0,a9)
a9=b3}c=a9.a
if(c!=null){b4=c.c
if(b4===$){a=A.a([],k)
c.c!==$&&A.C(b8)
b4=c.c=new A.ah(c,a)}B.a.a4(b4.a,a9)}if(B.a.G(B.T,a6.x)){b6=s.eb()
c=b6[0]
a=b6[1]
b4=c.c
if(a==null){if(b4===$){a=A.a([],k)
c.c!==$&&A.C(b8)
b4=c.c=new A.ah(c,a)}c=a9.a
if(c!=null){b5=c.c
if(b5===$){a=A.a([],k)
c.c!==$&&A.C(b8)
b5=c.c=new A.ah(c,a)}B.a.a4(b5.a,a9)}a9.a=b4.b
b4.bX(0,a9)}else{if(b4===$){a0=A.a([],k)
c.c!==$&&A.C(b8)
b2=c.c=new A.ah(c,a0)
b5=b2
b4=b5}else b5=b4
if(b5===$){a0=A.a([],k)
c.c!==$&&A.C(b8)
b5=c.c=new A.ah(c,a0)}c=b5.aj(b5,a)
a=a9.a
if(a!=null){b5=a.c
if(b5===$){a0=A.a([],k)
a.c!==$&&A.C(b8)
b5=a.c=new A.ah(a,a0)}B.a.a4(b5.a,a9)}a9.a=b4.b
b4.fZ(0,c,a9)}}else{b4=a6.c
if(b4===$){c=A.a([],k)
a6.c!==$&&A.C(b8)
b4=a6.c=new A.ah(a6,c)}c=a9.a
if(c!=null){b5=c.c
if(b5===$){a=A.a([],k)
c.c!==$&&A.C(b8)
b5=c.c=new A.ah(c,a)}B.a.a4(b5.a,a9)}a9.a=b4.b
b4.bX(0,a9)}c=d.x
b2=new A.U(d.w,c,A.a7(b7,b7,n,m))
b2.scN(0,A.fX(d.b,n,m))
c=d.de(b2,!1,l)
b4=c.c
if(b4===$){a=A.a([],k)
c.c!==$&&A.C(b8)
b4=c.c=new A.ah(c,a)}b5=a2.c
if(b5===$){a=A.a([],k)
a2.c!==$&&A.C(b8)
b5=a2.c=new A.ah(a2,a)}b4.H(0,b5)
b4=a2.c
if(b4===$){a=A.a([],k)
a2.c!==$&&A.C(b8)
b4=a2.c=new A.ah(a2,a)}b4.bO(0)
b4=a2.c
if(b4===$){a=A.a([],k)
a2.c!==$&&A.C(b8)
b4=a2.c=new A.ah(a2,a)}a=c.a
if(a!=null){b5=a.c
if(b5===$){a0=A.a([],k)
a.c!==$&&A.C(b8)
b5=a.c=new A.ah(a,a0)}B.a.a4(b5.a,c)}c.a=b4.b
b4.bX(0,c)
B.a.a4(q,d)
B.a.bB(q,A.a1(Math.min(a7,q.length)),p.a(c))
B.a.a4(o,d)
B.a.bB(o,B.a.aj(o,a2)+1,c)}},
n1(a){var s,r,q,p,o,n,m,l,k,j,i,h="unexpected-end-tag"
for(s=this.b,r=s.c,q=A.v(r).h("V<1>"),p=new A.V(r,q),p=new A.J(p,p.gm(p),q.h("J<B.E>")),o=t.h2,q=q.h("B.E");p.q();){n=p.d
if(n==null)n=q.a(n)
m=n.x
l=a.b
if(m==l){k=B.a.gp(r).x
if(k!=l&&B.a.G(B.S,k)){if(0>=r.length)return A.c(r,-1)
r.pop()
s.bT(l)}s=B.a.gp(r).x
q=a.b
if(s!=q){s=this.a
j=a.a
q=t.m.a(A.w(["name",q],t.N,t.X))
if(j==null){p=s.c.a
o=p.w
if(o==null)j=null
else{p=p.y
new A.aY(o,p).bb(o,p)
j=new A.ao(o,p,p)
j.aF(o,p,p)}}B.a.n(s.e,new A.aS(h,j,q))}while(!0){if(0>=r.length)return A.c(r,-1)
if(!!J.T(r.pop(),n))break}break}else{i=n.w
if(B.a.G(B.V,new A.o(i==null?"http://www.w3.org/1999/xhtml":i,m,o))){s=this.a
j=a.a
r=t.m.a(A.w(["name",a.b],t.N,t.X))
if(j==null){q=s.c.a
p=q.w
if(p==null)j=null
else{q=q.y
new A.aY(p,q).bb(p,q)
j=new A.ao(p,q,q)
j.aF(p,q,q)}}B.a.n(s.e,new A.aS(h,j,r))
break}}}}}
A.jm.prototype={
$2(a,b){var s
t.K.a(a)
A.aq(b)
s=this.a.b.c
if(1>=s.length)return A.c(s,1)
s[1].b.dV(a,new A.jl(b))},
$S:21}
A.jl.prototype={
$0(){return this.a},
$S:6}
A.hw.prototype={
K(a){throw A.d(A.aH("Cannot process start stag in text phase"))},
N(a){var s,r,q=this
if(a.b==="script"){s=q.b.c
if(0>=s.length)return A.c(s,-1)
s.pop()
s=q.a
r=s.y
r.toString
s.x=r
return null}s=q.b.c
if(0>=s.length)return A.c(s,-1)
s.pop()
s=q.a
r=s.y
r.toString
s.x=r
return null},
a1(a){this.b.bR(a.gaA(a),a.a)
return null},
a8(){var s=this.b.c,r=B.a.gp(s),q=this.a
q.F(r.e,"expected-named-closing-tag-but-got-eof",A.w(["name",r.x],t.N,t.X))
if(0>=s.length)return A.c(s,-1)
s.pop()
s=q.y
s.toString
q.x=s
return!0}}
A.dV.prototype={
K(a){var s,r,q=this,p=null
switch(a.b){case"html":return q.ba(a)
case"caption":q.eW()
s=q.b
s.d.n(0,p)
s.M(a)
s=q.a
s.x=s.ghk()
return p
case"colgroup":q.fS(a)
return p
case"col":q.fS(A.aC("colgroup",A.a7(p,p,t.K,t.N),p,!1))
return a
case"tbody":case"tfoot":case"thead":q.fU(a)
return p
case"td":case"th":case"tr":q.fU(A.aC("tbody",A.a7(p,p,t.K,t.N),p,!1))
return a
case"table":return q.kx(a)
case"style":case"script":return q.a.gbY().K(a)
case"input":s=a.e.k(0,"type")
if(s==null)s=p
else{r=t.E
r=A.ac(new A.G(new A.a5(s),r.h("h(t.E)").a(A.bG()),r.h("G<t.E,h>")),0,p)
s=r}if(s==="hidden"){q.a.a0(a.a,"unexpected-hidden-input-in-table")
s=q.b
s.M(a)
s=s.c
if(0>=s.length)return A.c(s,-1)
s.pop()}else q.fT(a)
return p
case"form":q.a.a0(a.a,"unexpected-form-in-table")
s=q.b
if(s.f==null){s.M(a)
r=s.c
s.siA(B.a.gp(r))
if(0>=r.length)return A.c(r,-1)
r.pop()}return p
default:q.fT(a)
return p}},
N(a){var s,r=this,q=a.b
switch(q){case"table":r.bQ(a)
return null
case"body":case"caption":case"col":case"colgroup":case"html":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":r.a.F(a.a,"unexpected-end-tag",A.w(["name",q],t.N,t.X))
return null
default:s=r.a
s.F(a.a,"unexpected-end-tag-implies-table-voodoo",A.w(["name",q],t.N,t.X))
q=r.b
q.r=!0
s.ga5().N(a)
q.r=!1
return null}},
eW(){var s=this.b.c
while(!0){if(!(B.a.gp(s).x!=="table"&&B.a.gp(s).x!=="html"))break
if(0>=s.length)return A.c(s,-1)
s.pop()}},
a8(){var s=B.a.gp(this.b.c)
if(s.x!=="html")this.a.a0(s.e,"eof-in-table")
return!1},
aH(a){var s=this.a,r=s.gaC()
s.x=s.gdf()
s.gdf().c=r
s.gaC().aH(a)
return null},
a1(a){var s=this.a,r=s.gaC()
s.x=s.gdf()
s.gdf().c=r
s.gaC().a1(a)
return null},
fS(a){var s
this.eW()
this.b.M(a)
s=this.a
s.x=s.ghm()},
fU(a){var s
this.eW()
this.b.M(a)
s=this.a
s.x=s.geF()},
kx(a){var s=this.a
s.F(a.a,"unexpected-start-tag-implies-end-tag",A.w(["startName","table","endName","table"],t.N,t.X))
s.gaC().N(new A.I("table",!1))
return a},
fT(a){var s,r=this.a
r.F(a.a,u.M,A.w(["name",a.b],t.N,t.X))
s=this.b
s.r=!0
r.ga5().K(a)
s.r=!1},
bQ(a){var s,r=this,q=r.b
if(q.a_("table","table")){q.cc()
q=q.c
s=B.a.gp(q).x
if(s!=="table")r.a.F(a.a,"end-tag-too-early-named",A.w(["gotName","table","expectedName",s],t.N,t.X))
for(;B.a.gp(q).x!=="table";){if(0>=q.length)return A.c(q,-1)
q.pop()}if(0>=q.length)return A.c(q,-1)
q.pop()
r.a.j5()}else r.a.a0(a.a,"undefined-error")}}
A.cV.prototype={
cW(){var s,r,q=this,p=q.d
if(p.length===0)return
s=A.v(p)
r=new A.G(p,s.h("m(1)").a(new A.jn()),s.h("G<1,m>")).aB(0,"")
if(!A.mG(r)){p=q.a.gaG()
s=p.b
s.r=!0
p.a.ga5().a1(new A.E(null,r))
s.r=!1}else if(r.length!==0)q.b.bR(r,null)
q.smw(A.a([],t.ks))},
c9(a){var s
this.cW()
s=this.c
s.toString
this.a.x=s
return a},
a8(){this.cW()
var s=this.c
s.toString
this.a.x=s
return!0},
a1(a){if(a.gaA(a)==="\x00")return null
B.a.n(this.d,a)
return null},
aH(a){B.a.n(this.d,a)
return null},
K(a){var s
this.cW()
s=this.c
s.toString
this.a.x=s
return a},
N(a){var s
this.cW()
s=this.c
s.toString
this.a.x=s
return a},
smw(a){this.d=t.oX.a(a)}}
A.jn.prototype={
$1(a){t.v.a(a)
return a.gaA(a)},
$S:30}
A.dQ.prototype={
K(a){switch(a.b){case"html":return this.ba(a)
case"caption":case"col":case"colgroup":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":return this.ky(a)
default:return this.a.ga5().K(a)}},
N(a){var s=this,r=a.b
switch(r){case"caption":s.mZ(a)
return null
case"table":return s.bQ(a)
case"body":case"col":case"colgroup":case"html":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":s.a.F(a.a,"unexpected-end-tag",A.w(["name",r],t.N,t.X))
return null
default:return s.a.ga5().N(a)}},
a8(){this.a.ga5().a8()
return!1},
a1(a){return this.a.ga5().a1(a)},
ky(a){var s,r=this.a
r.a0(a.a,"undefined-error")
s=this.b.a_("caption","table")
r.gaC().N(new A.I("caption",!1))
if(s)return a
return null},
mZ(a){var s,r=this,q=r.b
if(q.a_("caption","table")){q.cc()
s=q.c
if(B.a.gp(s).x!=="caption")r.a.F(a.a,"expected-one-end-tag-but-got-another",A.w(["gotName","caption","expectedName",B.a.gp(s).x],t.N,t.X))
for(;B.a.gp(s).x!=="caption";){if(0>=s.length)return A.c(s,-1)
s.pop()}if(0>=s.length)return A.c(s,-1)
s.pop()
q.eU()
q=r.a
q.x=q.gaG()}else r.a.a0(a.a,"undefined-error")},
bQ(a){var s,r=this.a
r.a0(a.a,"undefined-error")
s=this.b.a_("caption","table")
r.gaC().N(new A.I("caption",!1))
if(s)return a
return null}}
A.dR.prototype={
K(a){var s,r=this
switch(a.b){case"html":return r.ba(a)
case"col":s=r.b
s.M(a)
s=s.c
if(0>=s.length)return A.c(s,-1)
s.pop()
return null
default:s=B.a.gp(r.b.c).x
r.cR(new A.I("colgroup",!1))
return s==="html"?null:a}},
N(a){var s,r=this
switch(a.b){case"colgroup":r.cR(a)
return null
case"col":r.a.F(a.a,"no-end-tag",A.w(["name","col"],t.N,t.X))
return null
default:s=B.a.gp(r.b.c).x
r.cR(new A.I("colgroup",!1))
return s==="html"?null:a}},
a8(){if(B.a.gp(this.b.c).x==="html")return!1
else{this.cR(new A.I("colgroup",!1))
return!0}},
a1(a){var s=B.a.gp(this.b.c).x
this.cR(new A.I("colgroup",!1))
return s==="html"?null:a},
cR(a){var s=this.b.c,r=this.a
if(B.a.gp(s).x==="html")r.a0(a.a,"undefined-error")
else{if(0>=s.length)return A.c(s,-1)
s.pop()
r.x=r.gaG()}}}
A.cr.prototype={
K(a){var s,r=this,q=null,p=a.b
switch(p){case"html":return r.ba(a)
case"tr":r.fV(a)
return q
case"td":case"th":s=t.N
r.a.F(a.a,"unexpected-cell-in-table-body",A.w(["name",p],s,t.X))
r.fV(A.aC("tr",A.a7(q,q,t.K,s),q,!1))
return a
case"caption":case"col":case"colgroup":case"tbody":case"tfoot":case"thead":return r.bQ(a)
default:return r.a.gaG().K(a)}},
N(a){var s=this,r=a.b
switch(r){case"tbody":case"tfoot":case"thead":s.dC(a)
return null
case"table":return s.bQ(a)
case"body":case"caption":case"col":case"colgroup":case"html":case"td":case"th":case"tr":s.a.F(a.a,"unexpected-end-tag-in-table-body",A.w(["name",r],t.N,t.X))
return null
default:return s.a.gaG().N(a)}},
eV(){for(var s=this.b.c;!B.a.G(B.bz,B.a.gp(s).x);){if(0>=s.length)return A.c(s,-1)
s.pop()}B.a.gp(s).toString},
a8(){this.a.gaG().a8()
return!1},
aH(a){return this.a.gaG().aH(a)},
a1(a){return this.a.gaG().a1(a)},
fV(a){var s
this.eV()
this.b.M(a)
s=this.a
s.x=s.geE()},
dC(a){var s=this.b,r=this.a
if(s.a_(a.b,"table")){this.eV()
s=s.c
if(0>=s.length)return A.c(s,-1)
s.pop()
r.x=r.gaG()}else r.F(a.a,"unexpected-end-tag-in-table-body",A.w(["name",a.b],t.N,t.X))},
bQ(a){var s=this,r="table",q=s.b
if(q.a_("tbody",r)||q.a_("thead",r)||q.a_("tfoot",r)){s.eV()
s.dC(new A.I(B.a.gp(q.c).x,!1))
return a}else s.a.a0(a.a,"undefined-error")
return null}}
A.dT.prototype={
K(a){var s,r,q=this
switch(a.b){case"html":return q.ba(a)
case"td":case"th":q.i9()
s=q.b
s.M(a)
r=q.a
r.x=r.ghl()
s.d.n(0,null)
return null
case"caption":case"col":case"colgroup":case"tbody":case"tfoot":case"thead":case"tr":s=q.b.a_("tr","table")
q.dD(new A.I("tr",!1))
return!s?null:a
default:return q.a.gaG().K(a)}},
N(a){var s=this,r=a.b
switch(r){case"tr":s.dD(a)
return null
case"table":r=s.b.a_("tr","table")
s.dD(new A.I("tr",!1))
return!r?null:a
case"tbody":case"tfoot":case"thead":return s.dC(a)
case"body":case"caption":case"col":case"colgroup":case"html":case"td":case"th":s.a.F(a.a,"unexpected-end-tag-in-table-row",A.w(["name",r],t.N,t.X))
return null
default:return s.a.gaG().N(a)}},
i9(){var s,r,q,p,o,n,m,l,k,j,i
for(s=this.b.c,r=this.a,q=t.N,p=t.X,o=t.m,n=r.c.a;!0;){m=B.a.gp(s)
l=m.x
if(l==="tr"||l==="html")break
k=m.e
l=o.a(A.w(["name",B.a.gp(s).x],q,p))
if(k==null){j=n.w
if(j==null)k=null
else{i=n.y
new A.aY(j,i).bb(j,i)
k=new A.ao(j,i,i)
k.aF(j,i,i)}}B.a.n(r.e,new A.aS("unexpected-implied-end-tag-in-table-row",k,l))
if(0>=s.length)return A.c(s,-1)
s.pop()}},
a8(){this.a.gaG().a8()
return!1},
aH(a){return this.a.gaG().aH(a)},
a1(a){return this.a.gaG().a1(a)},
dD(a){var s=this.b,r=this.a
if(s.a_("tr","table")){this.i9()
s=s.c
if(0>=s.length)return A.c(s,-1)
s.pop()
r.x=r.geF()}else r.a0(a.a,"undefined-error")},
dC(a){if(this.b.a_(a.b,"table")){this.dD(new A.I("tr",!1))
return a}else{this.a.a0(a.a,"undefined-error")
return null}}}
A.cU.prototype={
K(a){switch(a.b){case"html":return this.ba(a)
case"caption":case"col":case"colgroup":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":return this.kz(a)
default:return this.a.ga5().K(a)}},
N(a){var s=this,r=a.b
switch(r){case"td":case"th":s.f7(a)
return null
case"body":case"caption":case"col":case"colgroup":case"html":s.a.F(a.a,"unexpected-end-tag",A.w(["name",r],t.N,t.X))
return null
case"table":case"tbody":case"tfoot":case"thead":case"tr":return s.n0(a)
default:return s.a.ga5().N(a)}},
ia(){var s=this.b
if(s.a_("td","table"))this.f7(new A.I("td",!1))
else if(s.a_("th","table"))this.f7(new A.I("th",!1))},
a8(){this.a.ga5().a8()
return!1},
a1(a){return this.a.ga5().a1(a)},
kz(a){var s=this.b
if(s.a_("td","table")||s.a_("th","table")){this.ia()
return a}else{this.a.a0(a.a,"undefined-error")
return null}},
f7(a){var s,r=this,q=r.b,p=q.a_(a.b,"table"),o=a.b
if(p){q.bT(o)
p=q.c
o=B.a.gp(p).x
s=a.b
if(o!=s){r.a.F(a.a,"unexpected-cell-end-tag",A.w(["name",s],t.N,t.X))
r.cu(a)}else{if(0>=p.length)return A.c(p,-1)
p.pop()}q.eU()
q=r.a
q.x=q.geE()}else r.a.F(a.a,"unexpected-end-tag",A.w(["name",o],t.N,t.X))},
n0(a){if(this.b.a_(a.b,"table")){this.ia()
return a}else this.a.a0(a.a,"undefined-error")
return null}}
A.dU.prototype={
K(a){var s,r=this,q=null,p=a.b
switch(p){case"html":return r.ba(a)
case"option":p=r.b
s=p.c
if(B.a.gp(s).x==="option"){if(0>=s.length)return A.c(s,-1)
s.pop()}p.M(a)
return q
case"optgroup":p=r.b
s=p.c
if(B.a.gp(s).x==="option"){if(0>=s.length)return A.c(s,-1)
s.pop()}if(B.a.gp(s).x==="optgroup"){if(0>=s.length)return A.c(s,-1)
s.pop()}p.M(a)
return q
case"select":r.a.a0(a.a,"unexpected-select-in-select")
r.f6(new A.I("select",!1))
return q
case"input":case"keygen":case"textarea":return r.ku(a)
case"script":return r.a.gbY().K(a)
default:r.a.F(a.a,"unexpected-start-tag-in-select",A.w(["name",p],t.N,t.X))
return q}},
N(a){var s,r,q=this,p=null,o="unexpected-end-tag-in-select",n=a.b
switch(n){case"option":n=q.b.c
if(B.a.gp(n).x==="option"){if(0>=n.length)return A.c(n,-1)
n.pop()}else q.a.F(a.a,o,A.w(["name","option"],t.N,t.X))
return p
case"optgroup":n=q.b.c
if(B.a.gp(n).x==="option"){s=n.length
r=s-2
if(!(r>=0))return A.c(n,r)
r=n[r].x==="optgroup"
s=r}else s=!1
if(s){if(0>=n.length)return A.c(n,-1)
n.pop()}if(B.a.gp(n).x==="optgroup"){if(0>=n.length)return A.c(n,-1)
n.pop()}else q.a.F(a.a,o,A.w(["name","optgroup"],t.N,t.X))
return p
case"select":q.f6(a)
return p
default:q.a.F(a.a,o,A.w(["name",n],t.N,t.X))
return p}},
a8(){var s=B.a.gp(this.b.c)
if(s.x!=="html")this.a.a0(s.e,"eof-in-select")
return!1},
a1(a){if(a.gaA(a)==="\x00")return null
this.b.bR(a.gaA(a),a.a)
return null},
ku(a){var s="select"
this.a.a0(a.a,"unexpected-input-in-select")
if(this.b.a_(s,s)){this.f6(new A.I(s,!1))
return a}return null},
f6(a){var s=this.a
if(this.b.a_("select","select")){this.cu(a)
s.j5()}else s.a0(a.a,"undefined-error")}}
A.fQ.prototype={
K(a){var s,r=a.b
switch(r){case"caption":case"table":case"tbody":case"tfoot":case"thead":case"tr":case"td":case"th":s=this.a
s.F(a.a,u.a,A.w(["name",r],t.N,t.X))
s.gbZ().N(new A.I("select",!1))
return a
default:return this.a.gbZ().K(a)}},
N(a){switch(a.b){case"caption":case"table":case"tbody":case"tfoot":case"thead":case"tr":case"td":case"th":return this.bQ(a)
default:return this.a.gbZ().N(a)}},
a8(){this.a.gbZ().a8()
return!1},
a1(a){return this.a.gbZ().a1(a)},
bQ(a){var s=this.a
s.F(a.a,u.r,A.w(["name",a.b],t.N,t.X))
if(this.b.a_(a.b,"table")){s.gbZ().N(new A.I("select",!1))
return a}return null}}
A.fO.prototype={
a1(a){var s
if(a.gaA(a)==="\x00"){a.c="\ufffd"
a.b=null}else{s=this.a
if(s.z&&!A.mG(a.gaA(a)))s.z=!1}return this.kS(a)},
K(a){var s,r,q,p,o,n=this,m=n.b,l=m.c,k=B.a.gp(l)
if(!B.a.G(B.bb,a.b))if(a.b==="font")s=a.e.ai("color")||a.e.ai("face")||a.e.ai("size")
else s=!1
else s=!0
if(s){s=n.a
s.F(a.a,u.G,A.w(["name",a.b],t.N,t.X))
m=m.a
r=t.h
q=t.iA
while(!0){if(B.a.gp(l).w!=m)if(!s.iJ(B.a.gp(l))){p=r.a(B.a.gp(l))
p=!B.a.G(B.ae,new A.o(p.w,p.x,q))}else p=!1
else p=!1
if(!p)break
if(0>=l.length)return A.c(l,-1)
l.pop()}return a}else{s=k.w
if(s==="http://www.w3.org/1998/Math/MathML")n.a.hT(a)
else if(s==="http://www.w3.org/2000/svg"){o=B.bE.k(0,a.b)
if(o!=null)a.b=o
n.a.hU(a)}n.a.eN(a)
a.w=s
m.M(a)
if(a.c){if(0>=l.length)return A.c(l,-1)
l.pop()
a.r=!0}return null}},
N(a){var s,r,q,p,o,n,m=this,l=null,k="_initialPhase",j=m.b,i=j.c,h=i.length-1,g=B.a.gp(i),f=g.x
if(f==null)f=l
else{s=t.E
s=A.ac(new A.G(new A.a5(f),s.h("h(t.E)").a(A.bG()),s.h("G<t.E,h>")),0,l)
f=s}s=a.b
if(f!=s)m.a.F(a.a,"unexpected-end-tag",A.w(["name",s],t.N,t.X))
j=j.a
f=t.E
s=f.h("h(t.E)")
f=f.h("G<t.E,h>")
while(!0){if(!!0){r=l
break}c$0:{q=g.x
q=q==null?l:A.ac(new A.G(new A.a5(q),s.a(A.bG()),f),0,l)
if(q==a.b){j=m.a
p=j.x
if(p===$){p=j.Q
if(p===$){o=new A.bq(j,j.d)
p!==$&&A.C(k)
j.Q=o
p=o}p=j.x=p}n=j.cy
if(n===$){f=A.a([],t.ks)
j.cy!==$&&A.C("_inTableTextPhase")
n=j.cy=new A.cV(f,j,j.d)}if(p===n){p=j.x
if(p===$){p=j.Q
if(p===$){o=new A.bq(j,j.d)
p!==$&&A.C(k)
j.Q=o
p=o}p=j.x=p}t.aB.a(p)
p.cW()
f=p.c
f.toString
j.x=f}while(!0){if(0>=i.length)return A.c(i,-1)
if(!!J.T(i.pop(),g))break}r=l
break}--h
if(!(h>=0&&h<i.length))return A.c(i,h)
g=i[h]
if(g.w!=j)break c$0
else{j=m.a
p=j.x
if(p===$){p=j.Q
if(p===$){o=new A.bq(j,j.d)
p!==$&&A.C(k)
j.Q=o
p=o}p=j.x=p}r=p.N(a)
break}}}return r}}
A.fe.prototype={
K(a){var s,r=a.b
if(r==="html")return this.a.ga5().K(a)
s=this.a
s.F(a.a,"unexpected-start-tag-after-body",A.w(["name",r],t.N,t.X))
s.x=s.ga5()
return a},
N(a){var s,r=a.b
if(r==="html"){this.f5(a)
return null}s=this.a
s.F(a.a,"unexpected-end-tag-after-body",A.w(["name",r],t.N,t.X))
s.x=s.ga5()
return a},
a8(){return!1},
c9(a){var s=this.b,r=s.c
if(0>=r.length)return A.c(r,0)
s.cr(a,r[0])
return null},
a1(a){var s=this.a
s.a0(a.a,"unexpected-char-after-body")
s.x=s.ga5()
return a},
f5(a){var s,r,q,p
for(s=this.b.c,r=A.v(s).h("V<1>"),s=new A.V(s,r),s=new A.J(s,s.gm(s),r.h("J<B.E>")),r=r.h("B.E");s.q();){q=s.d
if((q==null?r.a(q):q).x==="html")break}s=this.a
p=s.k4
if(p===$){p!==$&&A.C("_afterAfterBodyPhase")
p=s.k4=new A.fc(s,s.d)}s.x=p}}
A.dS.prototype={
K(a){var s=this,r=a.b
switch(r){case"html":return s.ba(a)
case"frameset":s.b.M(a)
return null
case"frame":r=s.b
r.M(a)
r=r.c
if(0>=r.length)return A.c(r,-1)
r.pop()
return null
case"noframes":return s.a.ga5().K(a)
default:s.a.F(a.a,"unexpected-start-tag-in-frameset",A.w(["name",r],t.N,t.X))
return null}},
N(a){var s,r=this,q=a.b
switch(q){case"frameset":q=r.b.c
if(B.a.gp(q).x==="html")r.a.a0(a.a,u.q)
else{if(0>=q.length)return A.c(q,-1)
q.pop()}q=B.a.gp(q).x
if(q!=="frameset"){q=r.a
s=q.k3
if(s===$){s!==$&&A.C("_afterFramesetPhase")
s=q.k3=new A.ff(q,q.d)}q.x=s}return null
default:r.a.F(a.a,"unexpected-end-tag-in-frameset",A.w(["name",q],t.N,t.X))
return null}},
a8(){var s=B.a.gp(this.b.c)
if(s.x!=="html")this.a.a0(s.e,"eof-in-frameset")
return!1},
a1(a){this.a.a0(a.a,"unexpected-char-in-frameset")
return null}}
A.ff.prototype={
K(a){var s=a.b
switch(s){case"html":return this.ba(a)
case"noframes":return this.a.gbY().K(a)
default:this.a.F(a.a,"unexpected-start-tag-after-frameset",A.w(["name",s],t.N,t.X))
return null}},
N(a){var s,r=a.b,q=this.a
switch(r){case"html":s=q.ok
if(s===$){s!==$&&A.C("_afterAfterFramesetPhase")
s=q.ok=new A.fd(q,q.d)}q.x=s
return null
default:q.F(a.a,"unexpected-end-tag-after-frameset",A.w(["name",r],t.N,t.X))
return null}},
a8(){return!1},
a1(a){this.a.a0(a.a,"unexpected-char-after-frameset")
return null}}
A.fc.prototype={
K(a){var s,r=a.b
if(r==="html")return this.a.ga5().K(a)
s=this.a
s.F(a.a,"expected-eof-but-got-start-tag",A.w(["name",r],t.N,t.X))
s.x=s.ga5()
return a},
a8(){return!1},
c9(a){var s=this.b,r=s.b
r===$&&A.b("document")
s.cr(a,r)
return null},
aH(a){return this.a.ga5().aH(a)},
a1(a){var s=this.a
s.a0(a.a,"expected-eof-but-got-char")
s.x=s.ga5()
return a},
N(a){var s=this.a
s.F(a.a,"expected-eof-but-got-end-tag",A.w(["name",a.b],t.N,t.X))
s.x=s.ga5()
return a}}
A.fd.prototype={
K(a){var s=a.b,r=this.a
switch(s){case"html":return r.ga5().K(a)
case"noframes":return r.gbY().K(a)
default:r.F(a.a,"expected-eof-but-got-start-tag",A.w(["name",s],t.N,t.X))
return null}},
a8(){return!1},
c9(a){var s=this.b,r=s.b
r===$&&A.b("document")
s.cr(a,r)
return null},
aH(a){return this.a.ga5().aH(a)},
a1(a){this.a.a0(a.a,"expected-eof-but-got-char")
return null},
N(a){this.a.F(a.a,"expected-eof-but-got-end-tag",A.w(["name",a.b],t.N,t.X))
return null}}
A.aS.prototype={
l(a){var s,r,q=this.b
q.toString
s=B.bD.k(0,this.a)
s.toString
r=q.iN(0,A.tb(s,this.c),null)
return q.a.a==null?"ParserError on "+r:"On "+r},
$ibo:1}
A.k1.prototype={}
A.fD.prototype={
dX(){var s,r,q,p,o=A.m9(t.N),n=this.a.b.k(0,"class")
for(s=(n==null?"":n).split(" "),r=s.length,q=0;q<r;++q){p=J.n5(s[q])
if(p.length!==0)o.n(0,p)}return o}}
A.hQ.prototype={
l(a){return this.dX().aB(0," ")},
gI(a){var s=this.dX()
return A.qV(s,s.r,A.z(s).c)},
gm(a){return this.dX().a}}
A.iS.prototype={
sar(a){if(this.b>=this.a.length)throw A.d(A.mn("No more elements"))
this.b=a},
gar(){var s=this.b
if(s>=this.a.length)throw A.d(A.mn("No more elements"))
if(s>=0)return s
else return 0},
lA(a){var s,r,q,p,o=this
t.pi.a(a)
if(a==null)a=A.oE()
s=o.gar()
for(r=o.a,q=r.length;s<q;){if(!(s>=0))return A.c(r,s)
p=r[s]
if(!A.as(a.$1(p))){o.b=s
return p}++s}o.b=s
return null},
hH(){return this.lA(null)},
lB(a){var s,r,q,p
t.gS.a(a)
s=this.gar()
for(r=this.a,q=r.length;s<q;){if(!(s>=0))return A.c(r,s)
p=r[s]
if(A.as(a.$1(p))){this.b=s
return p}++s}return null},
hs(a){var s=B.b.aJ(this.a,a,this.gar())
if(s>=0){this.b=s+a.length-1
return!0}else throw A.d(A.mn("No more elements"))},
eJ(a,b){if(b==null)b=this.a.length
if(b<0)b+=this.a.length
return B.b.v(this.a,a,b)},
lC(a){return this.eJ(a,null)}}
A.iK.prototype={
nN(){var s,r,q,p,o,n,m,l
try{p=this.a
p.hs("charset")
p.sar(p.gar()+1)
p.hH()
o=p.a
n=p.gar()
m=o.length
if(!(n>=0&&n<m))return A.c(o,n)
if(o[n]!=="=")return null
p.sar(p.gar()+1)
p.hH()
n=p.gar()
if(!(n>=0&&n<m))return A.c(o,n)
if(o[n]!=='"'){n=p.gar()
if(!(n>=0&&n<m))return A.c(o,n)
n=o[n]==="'"}else n=!0
if(n){n=p.gar()
if(!(n>=0&&n<m))return A.c(o,n)
s=o[n]
p.sar(p.gar()+1)
r=p.gar()
p.hs(s)
p=p.eJ(r,p.gar())
return p}else{q=p.gar()
try{p.lB(A.oE())
o=p.eJ(q,p.gar())
return o}catch(l){if(A.bl(l) instanceof A.df){p=p.lC(q)
return p}else throw l}}}catch(l){if(A.bl(l) instanceof A.df)return null
else throw l}}}
A.df.prototype={$ibo:1}
A.jh.prototype={
bk(a){var s,r,q,p,o,n,m,l,k,j,i=this
i.sn6(A.mb(t.N))
s=i.y=0
i.slf(A.a([],t.t))
r=i.f
if(r==null){q=i.a
q.toString
p=i.e
p.toString
r=A.rs(q,p)
i.shD(r)}for(q=r.a,p=q.length,o=t.L,n=!1,m=!1;s<p;++s){l=B.b.E(q,s)
if(n){if(l===10){n=!1
continue}n=!1}o.a(r)
k=s+1
j=k<r.gm(r)&&(r.k(0,s)&64512)===55296&&(r.k(0,k)&64512)===56320
if(!j&&!m)if(A.rD(l)){k=i.r
k.dd(k.$ti.c.a("invalid-codepoint"))
if(55296<=l&&l<=57343)l=65533}if(l===13){n=!0
l=10}B.a.n(i.x,l)
m=j}i.w=A.qt(i.x,i.d)},
i7(a){var s=A.aH("cannot change encoding when parsing a String.")
throw A.d(s)},
A(){var s,r,q=this,p=q.y,o=q.x
if(p>=o.length)return null
p=q.hq(o,p)
o=q.x
s=q.y
r=s+1
if(p){q.y=r
p=o.length
if(!(s>=0&&s<p))return A.c(o,s)
s=o[s]
q.y=r+1
if(!(r>=0&&r<p))return A.c(o,r)
r=A.ac(A.a([s,o[r]],t.t),0,null)
p=r}else{q.y=r
if(!(s>=0&&s<o.length))return A.c(o,s)
p=A.b5(o[s])}return p},
nO(){var s,r,q=this,p=q.y,o=q.x
if(p>=o.length)return null
p=q.hq(o,p)
o=q.x
s=q.y
r=o.length
if(p){if(!(s>=0&&s<r))return A.c(o,s)
p=o[s];++s
if(!(s<r))return A.c(o,s)
s=A.ac(A.a([p,o[s]],t.t),0,null)
p=s}else{if(!(s>=0&&s<r))return A.c(o,s)
p=A.b5(o[s])}return p},
hq(a,b){var s,r
t.L.a(a)
s=b+1
r=J.Z(a)
return s<r.gm(a)&&(A.a1(r.k(a,b))&64512)===55296&&(A.a1(r.k(a,s))&64512)===56320},
c2(a,b){var s,r,q=this,p=q.y,o=a.length
while(!0){s=q.nO()
if(s!=null)r=A.ck(a,s,0)===b
else r=!1
if(!r)break
q.y=q.y+s.length}return A.ac(B.a.b4(q.x,p,q.y),0,null)},
b5(a){return this.c2(a,!1)},
R(a){if(a!=null)this.y=this.y-a.length},
shD(a){this.f=t.f8.a(a)},
sn6(a){this.r=t.f_.a(a)},
slf(a){this.x=t.L.a(a)}}
A.aQ.prototype={
gm(a){return this.a.length},
gI(a){var s=this.a
return new J.at(s,s.length,A.v(s).h("at<1>"))},
k(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.c(s,b)
return s[b]},
t(a,b,c){B.a.t(this.a,b,A.z(this).h("aQ.E").a(c))},
sm(a,b){B.a.sm(this.a,b)},
n(a,b){B.a.n(this.a,A.z(this).h("aQ.E").a(b))},
bB(a,b,c){return B.a.bB(this.a,b,A.z(this).h("aQ.E").a(c))},
H(a,b){B.a.H(this.a,A.z(this).h("i<aQ.E>").a(b))}}
A.ef.prototype={
iZ(a,b,c,d){var s,r,q,p,o,n
t.jB.a(d)
for(s=b.gak(b),s=s.gI(s),r=new A.cF(s,t.pl),q=c.b,p=this.gjg(),o=t.h;r.q();){n=o.a(s.gB())
this.a=n
if(B.a.aX(q,p))B.a.n(d,n)
this.iZ(0,n,c,d)}},
jh(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=null
t.dT.a(a)
s=i.a
for(r=a.b,q=A.v(r).h("V<1>"),r=new A.V(r,q),r=new A.J(r,r.gm(r),q.h("J<B.E>")),q=q.h("B.E"),p=h,o=!0;r.q();){n=r.d
if(n==null)n=q.a(n)
if(p==null)o=A.ie(n.c.O(i))
else{if(p===514){m=n.c
do{l=i.a.a
k=l instanceof A.U?l:h
i.a=k}while(k!=null&&!A.ie(m.O(i)))
if(i.a==null)o=!1}else if(p===517){m=n.c
do{k=i.a
k=k.gdU(k)
i.a=k}while(k!=null&&!A.ie(m.O(i)))
if(i.a==null)o=!1}p=h}if(!o)break
j=n.b
switch(j){case 515:n=i.a
i.a=n.gdU(n)
break
case 516:l=i.a.a
i.a=l instanceof A.U?l:h
break
case 514:case 517:p=j
break
case 513:break
default:throw A.d(i.hO(a))}if(i.a==null){o=!1
break}}i.a=s
return o},
cK(a){return new A.es("'"+a.l(0)+"' selector of type "+A.dq(a).l(0)+" is not implemented")},
hO(a){return new A.dO("'"+a.l(0)+"' is not a valid selector",null,null)},
oE(a){var s=this,r=a.b
switch(r.gag(r)){case"root":r=s.a
return r.x==="html"&&r.a==null
case"empty":r=s.a
r=r.gak(r)
return r.aX(r,new A.k9())
case"blank":r=s.a
r=r.gak(r)
return r.aX(r,new A.ka())
case"first-child":r=s.a
return r.gdU(r)==null
case"last-child":r=s.a
return r.giP(r)==null
case"only-child":r=s.a
if(r.gdU(r)==null){r=s.a
r=r.giP(r)==null}else r=!1
return r
case"link":return s.a.b.k(0,"href")!=null
case"visited":return!1}if(A.nD(r.gag(r)))return!1
throw A.d(s.cK(a))},
oG(a){var s=a.b
if(A.nD(s.gag(s)))return!1
throw A.d(this.cK(a))},
oF(a){return A.M(this.cK(a))},
oD(a){var s,r,q,p,o,n,m=this,l=a.b
switch(l.gag(l)){case"nth-child":s=t.b9.a(a.f).b
l=s.length
if(l===1){if(0>=l)return A.c(s,0)
r=s[0] instanceof A.af}else r=!1
if(r){if(0>=l)return A.c(s,0)
q=t.mH.a(s[0])
p=m.a.a
if(p!=null){l=A.lf(q.c)
if(l>0){r=p.gak(p)
l=r.aj(r,m.a)===l}else l=!1}else l=!1
return l}break
case"lang":l=t.b9.a(a.f)
l=l.a
l.toString
o=A.ac(B.r.b4(l.a.c,l.b,l.c),0,null)
n=A.qn(m.a)
return n!=null&&B.b.Y(n,o)}throw A.d(m.cK(a))},
oC(a){if(!A.ie(t.g9.a(a.b).O(this)))return!1
if(a.d instanceof A.cb)return!0
if(a.giO()==="")return this.a.w==null
throw A.d(this.cK(a))},
oB(a){var s,r,q=a.b,p=this.a.b.k(0,q.gag(q).toLowerCase())
if(p==null)return!1
q=a.d
if(q===535)return!0
s=A.k(a.e)
switch(q){case 28:return p===s
case 530:return B.a.aX(A.a(p.split(" "),t.s),new A.k7(s))
case 531:if(B.b.Y(p,s)){q=p.length
r=s.length
if(q!==r){if(!(r<q))return A.c(p,r)
q=p[r]==="-"}else q=!0}else q=!1
return q
case 532:return B.b.Y(p,s)
case 533:return B.b.be(p,s)
case 534:return B.b.G(p,s)
default:throw A.d(this.hO(a))}}}
A.k9.prototype={
$1(a){var s
t.A.a(a)
if(!(a instanceof A.U))if(a instanceof A.bQ){s=J.bx(a.w)
a.w=s
s=s.length!==0}else s=!1
else s=!0
return!s},
$S:22}
A.ka.prototype={
$1(a){var s
t.A.a(a)
if(!(a instanceof A.U))if(a instanceof A.bQ){s=J.bx(a.w)
a.w=s
s=new A.hk(s).aX(0,new A.k8())}else s=!1
else s=!0
return!s},
$S:22}
A.k8.prototype={
$1(a){return!A.mP(A.a1(a))},
$S:11}
A.k7.prototype={
$1(a){A.aq(a)
return a.length!==0&&a===this.a},
$S:7}
A.b0.prototype={}
A.bP.prototype={}
A.c6.prototype={
gc7(a){return 2},
saA(a,b){this.e=t.oP.a(b)}}
A.I.prototype={
gc7(a){return 3}}
A.b7.prototype={
gaA(a){var s=this,r=s.c
if(r==null){r=s.c=J.bx(s.b)
s.b=null}return r}}
A.l.prototype={
gc7(a){return 6}}
A.E.prototype={
gc7(a){return 1}}
A.cC.prototype={
gc7(a){return 0}}
A.cP.prototype={
gc7(a){return 4}}
A.dC.prototype={
gc7(a){return 5}}
A.en.prototype={}
A.lA.prototype={
$0(){var s,r,q=A.bd(t.N,t.I)
for(s=B.W.gbi(),s=s.gI(s);s.q();){r=s.gB()
if(0>=r.length)return A.c(r,0)
J.lY(q.dV(r[0],new A.lz()),r)}return q},
$S:35}
A.lz.prototype={
$0(){return A.a([],t.s)},
$S:36}
A.dP.prototype={
gkA(a){var s=this.x
s===$&&A.b("state")
return s},
gB(){var s=this.at
s.toString
return s},
dg(a){var s=this.Q
s.toString
B.a.gp(s).b=this.ay.l(0)},
ck(a){},
c_(a){this.dg(a)},
bL(a){var s,r=this
A.aq(a)
if(r.Q==null)r.sev(0,A.a([],t.kG))
s=r.ax
s.a=""
s.a=a
r.ay.a=""
s=r.Q
s.toString
B.a.n(s,new A.en())},
q(){var s,r=this,q=r.a,p=r.r
while(!0){s=q.r
if(!(s.b===s.c&&p.b===p.c))break
if(!A.as(r.kB(0))){r.at=null
return!1}}if(!s.gan(s)){q=q.r.j0()
r.at=new A.l(null,null,q)}else r.slG(p.j0())
return!0},
bk(a){var s=this
s.z=0
s.r.bO(0)
s.w=null
s.y.a=""
s.sev(0,null)
s.seu(null)
s.si(t.c.a(s.gD()))},
j(a){var s=this.r
s.dd(s.$ti.c.a(a))},
mJ(a){var s,r,q,p,o,n,m,l,k=this,j=null,i="illegal-codepoint-for-numeric-entity"
if(a){s=A.t6()
r=16}else{s=A.t5()
r=10}q=A.a([],t.D)
p=k.a
o=p.A()
while(!0){if(!(A.as(s.$1(o))&&o!=null))break
B.a.n(q,o)
o=p.A()}n=A.ci(B.a.aP(q),r)
m=B.bF.k(0,n)
if(m!=null){l=A.w(["charAsInt",n],t.N,t.X)
k.j(new A.l(l,j,i))}else if(55296<=n&&n<=57343||n>1114111){l=A.w(["charAsInt",n],t.N,t.X)
k.j(new A.l(l,j,i))
m="\ufffd"}else{if(!(1<=n&&n<=8))if(!(14<=n&&n<=31))if(!(127<=n&&n<=159))l=64976<=n&&n<=65007||B.a.G(B.bg,n)
else l=!0
else l=!0
else l=!0
if(l){l=A.w(["charAsInt",n],t.N,t.X)
k.j(new A.l(l,j,i))}m=A.ac(A.a([n],t.t),0,j)}if(o!==";"){k.j(new A.l(j,j,"numeric-entity-without-semicolon"))
p.R(o)}return m},
dw(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.a,g=A.a([h.A()],t.D)
if(0>=g.length)return A.c(g,0)
if(!A.a2(g[0])){if(0>=g.length)return A.c(g,0)
s=g[0]
s=s==="<"||s==="&"||s==null||a===s}else s=!0
if(s){if(0>=g.length)return A.c(g,0)
h.R(g[0])
r="&"}else{if(0>=g.length)return A.c(g,0)
s=g[0]
if(s==="#"){B.a.n(g,h.A())
if(B.a.gp(g)==="x"||B.a.gp(g)==="X"){B.a.n(g,h.A())
q=!0}else q=!1
if(!(q&&A.oS(B.a.gp(g))))s=!q&&A.lM(B.a.gp(g))
else s=!0
if(s){h.R(B.a.gp(g))
r=j.mJ(q)}else{j.j(new A.l(i,i,"expected-numeric-entity"))
if(0>=g.length)return A.c(g,-1)
h.R(g.pop())
r="&"+B.a.aP(g)}}else{p=$.pj()
s.toString
o=p.k(0,s)
if(o==null)o=B.p
for(;B.a.gp(g)!=null;){s=J.ps(o,new A.jj(B.a.aP(g)))
o=A.j(s,!1,s.$ti.h("i.E"))
if(o.length===0)break
B.a.n(g,h.A())}m=g.length-1
while(!0){if(!(m>1)){n=i
break}l=B.a.aP(B.a.b4(g,0,m))
if(B.W.ai(l)){n=l
break}--m}if(n!=null){s=n.length
p=s-1
if(!(p>=0))return A.c(n,p)
s=n[p]!==";"
if(s)j.j(new A.l(i,i,"named-entity-without-semicolon"))
if(s)if(b){if(!(m>=0&&m<g.length))return A.c(g,m)
s=g[m]
if(!(A.aJ(s)||A.lM(s))){if(!(m<g.length))return A.c(g,m)
s=g[m]==="="}else s=!0}else s=!1
else s=!1
if(s){if(0>=g.length)return A.c(g,-1)
h.R(g.pop())
r="&"+B.a.aP(g)}else{r=B.W.k(0,n)
if(0>=g.length)return A.c(g,-1)
h.R(g.pop())
r=A.k(r)+B.a.aP(A.mU(g,m,i,t.jv))}}else{j.j(new A.l(i,i,"expected-named-entity"))
if(0>=g.length)return A.c(g,-1)
h.R(g.pop())
r="&"+B.a.aP(g)}}}if(b)j.ay.a+=r
else{if(A.a2(r))k=new A.cC(i,r)
else k=new A.E(i,r)
j.j(k)}},
ih(){return this.dw(null,!1)},
b_(){var s,r,q,p,o,n,m,l=this,k=null,j=l.w
j.toString
if(j instanceof A.bP){s=j.b
if(s==null)s=k
else{r=t.E
r=A.ac(new A.G(new A.a5(s),r.h("h(t.E)").a(A.bG()),r.h("G<t.E,h>")),0,k)
s=r}j.b=s
if(j instanceof A.I){if(l.Q!=null)l.j(new A.l(k,k,"attributes-in-end-tag"))
if(j.c)l.j(new A.l(k,k,"this-closing-flag-on-end-tag"))
q=j}else if(j instanceof A.c6){j.saA(0,A.a7(k,k,t.K,t.N))
s=l.Q
if(s!=null)for(r=s.length,p=0;p<s.length;s.length===r||(0,A.e)(s),++p){o=s[p]
n=j.e
m=o.a
m.toString
n.dV(m,new A.jk(o))}q=j}else q=j
l.sev(0,k)
l.seu(k)}else q=j
l.j(q)
l.si(t.c.a(l.gD()))},
mN(){var s,r=this,q=null,p=r.a,o=p.A()
if(o==="&")r.si(t.c.a(r.gn2()))
else if(o==="<")r.si(t.c.a(r.goo()))
else if(o==="\x00"){r.j(new A.l(q,q,"invalid-codepoint"))
r.j(new A.E(q,"\x00"))}else if(o==null)return!1
else if(A.a2(o)){p=p.c2(" \n\r\t\f",!0)
r.j(new A.cC(q,o+p))}else{s=p.b5("&<\x00")
r.j(new A.E(q,o+s))}return!0},
n3(){this.ih()
this.si(t.c.a(this.gD()))
return!0},
oa(){var s,r=this,q=null,p=r.a,o=p.A()
if(o==="&")r.si(t.c.a(r.gmu()))
else if(o==="<")r.si(t.c.a(r.go8()))
else if(o==null)return!1
else if(o==="\x00"){r.j(new A.l(q,q,"invalid-codepoint"))
r.j(new A.E(q,"\ufffd"))}else if(A.a2(o)){p=p.c2(" \n\r\t\f",!0)
r.j(new A.cC(q,o+p))}else{s=p.b5("&<")
r.j(new A.E(q,o+s))}return!0},
mv(){this.ih()
this.si(t.c.a(this.gcz()))
return!0},
o3(){var s,r=this,q=null,p=r.a,o=p.A()
if(o==="<")r.si(t.c.a(r.go1()))
else if(o==="\x00"){r.j(new A.l(q,q,"invalid-codepoint"))
r.j(new A.E(q,"\ufffd"))}else if(o==null)return!1
else{s=p.b5("<\x00")
r.j(new A.E(q,o+s))}return!0},
k_(){var s,r=this,q=null,p=r.a,o=p.A()
if(o==="<")r.si(t.c.a(r.gjY()))
else if(o==="\x00"){r.j(new A.l(q,q,"invalid-codepoint"))
r.j(new A.E(q,"\ufffd"))}else if(o==null)return!1
else{s=p.b5("<\x00")
r.j(new A.E(q,o+s))}return!0},
nQ(){var s=this,r=null,q=s.a,p=q.A()
if(p==null)return!1
else if(p==="\x00"){s.j(new A.l(r,r,"invalid-codepoint"))
s.j(new A.E(r,"\ufffd"))}else{q=q.b5("\x00")
s.j(new A.E(r,p+q))}return!0},
op(){var s=this,r=null,q=s.a,p=q.A()
if(p==="!")s.si(t.c.a(s.gnG()))
else if(p==="/")s.si(t.c.a(s.gmx()))
else if(A.aJ(p)){s.w=A.aC(p,r,r,!1)
s.si(t.c.a(s.gj8()))}else if(p===">"){s.j(new A.l(r,r,"expected-tag-name-but-got-right-bracket"))
s.j(new A.E(r,"<>"))
s.si(t.c.a(s.gD()))}else if(p==="?"){s.j(new A.l(r,r,"expected-tag-name-but-got-question-mark"))
q.R(p)
s.si(t.c.a(s.geS()))}else{s.j(new A.l(r,r,"expected-tag-name"))
s.j(new A.E(r,"<"))
q.R(p)
s.si(t.c.a(s.gD()))}return!0},
my(){var s,r=this,q=null,p=r.a,o=p.A()
if(A.aJ(o)){r.w=new A.I(o,!1)
r.si(t.c.a(r.gj8()))}else if(o===">"){r.j(new A.l(q,q,u.g))
r.si(t.c.a(r.gD()))}else if(o==null){r.j(new A.l(q,q,"expected-closing-tag-but-got-eof"))
r.j(new A.E(q,"</"))
r.si(t.c.a(r.gD()))}else{s=A.w(["data",o],t.N,t.X)
r.j(new A.l(s,q,"expected-closing-tag-but-got-char"))
p.R(o)
r.si(t.c.a(r.geS()))}return!0},
on(){var s,r=this,q=null,p=r.a.A()
if(A.a2(p))r.si(t.c.a(r.gbx()))
else if(p===">")r.b_()
else if(p==null){r.j(new A.l(q,q,"eof-in-tag-name"))
r.si(t.c.a(r.gD()))}else if(p==="/")r.si(t.c.a(r.gbs()))
else if(p==="\x00"){r.j(new A.l(q,q,"invalid-codepoint"))
s=t.fn.a(r.w)
s.b=A.k(s.b)+"\ufffd"}else{s=t.fn.a(r.w)
s.b=A.k(s.b)+p}return!0},
o9(){var s=this,r=s.a,q=r.A()
if(q==="/"){s.y.a=""
s.si(t.c.a(s.go6()))}else{s.j(new A.E(null,"<"))
r.R(q)
s.si(t.c.a(s.gcz()))}return!0},
o7(){var s=this,r=s.a,q=r.A()
if(A.aJ(q)){s.y.a+=A.k(q)
s.si(t.c.a(s.go4()))}else{s.j(new A.E(null,"</"))
r.R(q)
s.si(t.c.a(s.gcz()))}return!0},
dl(){var s=this.w
return s instanceof A.bP&&s.b.toLowerCase()===this.y.l(0).toLowerCase()},
o5(){var s,r=this,q=r.dl(),p=r.a,o=p.A()
if(A.a2(o)&&q){r.w=new A.I(r.y.l(0),!1)
r.si(t.c.a(r.gbx()))}else if(o==="/"&&q){r.w=new A.I(r.y.l(0),!1)
r.si(t.c.a(r.gbs()))}else if(o===">"&&q){r.w=new A.I(r.y.l(0),!1)
r.b_()
r.si(t.c.a(r.gD()))}else{s=r.y
if(A.aJ(o))s.a+=A.k(o)
else{s=s.l(0)
r.j(new A.E(null,"</"+s))
p.R(o)
r.si(t.c.a(r.gcz()))}}return!0},
o2(){var s=this,r=s.a,q=r.A()
if(q==="/"){s.y.a=""
s.si(t.c.a(s.go_()))}else{s.j(new A.E(null,"<"))
r.R(q)
s.si(t.c.a(s.gdW()))}return!0},
o0(){var s=this,r=s.a,q=r.A()
if(A.aJ(q)){s.y.a+=A.k(q)
s.si(t.c.a(s.gnY()))}else{s.j(new A.E(null,"</"))
r.R(q)
s.si(t.c.a(s.gdW()))}return!0},
nZ(){var s,r=this,q=r.dl(),p=r.a,o=p.A()
if(A.a2(o)&&q){r.w=new A.I(r.y.l(0),!1)
r.si(t.c.a(r.gbx()))}else if(o==="/"&&q){r.w=new A.I(r.y.l(0),!1)
r.si(t.c.a(r.gbs()))}else if(o===">"&&q){r.w=new A.I(r.y.l(0),!1)
r.b_()
r.si(t.c.a(r.gD()))}else{s=r.y
if(A.aJ(o))s.a+=A.k(o)
else{s=s.l(0)
r.j(new A.E(null,"</"+s))
p.R(o)
r.si(t.c.a(r.gdW()))}}return!0},
jZ(){var s=this,r=s.a,q=r.A()
if(q==="/"){s.y.a=""
s.si(t.c.a(s.gjJ()))}else if(q==="!"){s.j(new A.E(null,"<!"))
s.si(t.c.a(s.gjN()))}else{s.j(new A.E(null,"<"))
r.R(q)
s.si(t.c.a(s.gbI()))}return!0},
jK(){var s=this,r=s.a,q=r.A()
if(A.aJ(q)){s.y.a+=A.k(q)
s.si(t.c.a(s.gjH()))}else{s.j(new A.E(null,"</"))
r.R(q)
s.si(t.c.a(s.gbI()))}return!0},
jI(){var s,r=this,q=r.dl(),p=r.a,o=p.A()
if(A.a2(o)&&q){r.w=new A.I(r.y.l(0),!1)
r.si(t.c.a(r.gbx()))}else if(o==="/"&&q){r.w=new A.I(r.y.l(0),!1)
r.si(t.c.a(r.gbs()))}else if(o===">"&&q){r.w=new A.I(r.y.l(0),!1)
r.b_()
r.si(t.c.a(r.gD()))}else{s=r.y
if(A.aJ(o))s.a+=A.k(o)
else{s=s.l(0)
r.j(new A.E(null,"</"+s))
p.R(o)
r.si(t.c.a(r.gbI()))}}return!0},
jO(){var s=this,r=s.a,q=r.A()
if(q==="-"){s.j(new A.E(null,"-"))
s.si(t.c.a(s.gjL()))}else{r.R(q)
s.si(t.c.a(s.gbI()))}return!0},
jM(){var s=this,r=s.a,q=r.A()
if(q==="-"){s.j(new A.E(null,"-"))
s.si(t.c.a(s.gfK()))}else{r.R(q)
s.si(t.c.a(s.gbI()))}return!0},
jX(){var s,r=this,q=null,p=r.a,o=p.A()
if(o==="-"){r.j(new A.E(q,"-"))
r.si(t.c.a(r.gjQ()))}else if(o==="<")r.si(t.c.a(r.gef()))
else if(o==="\x00"){r.j(new A.l(q,q,"invalid-codepoint"))
r.j(new A.E(q,"\ufffd"))}else if(o==null)r.si(t.c.a(r.gD()))
else{s=p.b5("<-\x00")
r.j(new A.E(q,o+s))}return!0},
jR(){var s=this,r=null,q=s.a.A()
if(q==="-"){s.j(new A.E(r,"-"))
s.si(t.c.a(s.gfK()))}else if(q==="<")s.si(t.c.a(s.gef()))
else if(q==="\x00"){s.j(new A.l(r,r,"invalid-codepoint"))
s.j(new A.E(r,"\ufffd"))
s.si(t.c.a(s.gb8()))}else if(q==null)s.si(t.c.a(s.gD()))
else{s.j(new A.E(r,q))
s.si(t.c.a(s.gb8()))}return!0},
jP(){var s=this,r=null,q=s.a.A()
if(q==="-")s.j(new A.E(r,"-"))
else if(q==="<")s.si(t.c.a(s.gef()))
else if(q===">"){s.j(new A.E(r,">"))
s.si(t.c.a(s.gbI()))}else if(q==="\x00"){s.j(new A.l(r,r,"invalid-codepoint"))
s.j(new A.E(r,"\ufffd"))
s.si(t.c.a(s.gb8()))}else if(q==null)s.si(t.c.a(s.gD()))
else{s.j(new A.E(r,q))
s.si(t.c.a(s.gb8()))}return!0},
jW(){var s,r=this,q=r.a,p=q.A()
if(p==="/"){r.y.a=""
r.si(t.c.a(r.gjU()))}else if(A.aJ(p)){q=A.k(p)
r.j(new A.E(null,"<"+q))
s=r.y
s.a=""
s.a=q
r.si(t.c.a(r.gjz()))}else{r.j(new A.E(null,"<"))
q.R(p)
r.si(t.c.a(r.gb8()))}return!0},
jV(){var s=this,r=s.a,q=r.A()
if(A.aJ(q)){r=s.y
r.a=""
r.a=A.k(q)
s.si(t.c.a(s.gjS()))}else{s.j(new A.E(null,"</"))
r.R(q)
s.si(t.c.a(s.gb8()))}return!0},
jT(){var s,r=this,q=r.dl(),p=r.a,o=p.A()
if(A.a2(o)&&q){r.w=new A.I(r.y.l(0),!1)
r.si(t.c.a(r.gbx()))}else if(o==="/"&&q){r.w=new A.I(r.y.l(0),!1)
r.si(t.c.a(r.gbs()))}else if(o===">"&&q){r.w=new A.I(r.y.l(0),!1)
r.b_()
r.si(t.c.a(r.gD()))}else{s=r.y
if(A.aJ(o))s.a+=A.k(o)
else{s=s.l(0)
r.j(new A.E(null,"</"+s))
p.R(o)
r.si(t.c.a(r.gb8()))}}return!0},
jA(){var s=this,r=s.a,q=r.A()
if(A.a2(q)||q==="/"||q===">"){s.j(new A.E(q==null?new A.a0(""):null,q))
r=t.c
if(s.y.l(0).toLowerCase()==="script")s.si(r.a(s.gbH()))
else s.si(r.a(s.gb8()))}else if(A.aJ(q)){s.j(new A.E(q==null?new A.a0(""):null,q))
s.y.a+=A.k(q)}else{r.R(q)
s.si(t.c.a(s.gb8()))}return!0},
jG(){var s=this,r=null,q=s.a.A()
if(q==="-"){s.j(new A.E(r,"-"))
s.si(t.c.a(s.gjD()))}else if(q==="<"){s.j(new A.E(r,"<"))
s.si(t.c.a(s.gee()))}else if(q==="\x00"){s.j(new A.l(r,r,"invalid-codepoint"))
s.j(new A.E(r,"\ufffd"))}else if(q==null){s.j(new A.l(r,r,"eof-in-script-in-script"))
s.si(t.c.a(s.gD()))}else s.j(new A.E(r,q))
return!0},
jE(){var s=this,r=null,q=s.a.A()
if(q==="-"){s.j(new A.E(r,"-"))
s.si(t.c.a(s.gjB()))}else if(q==="<"){s.j(new A.E(r,"<"))
s.si(t.c.a(s.gee()))}else if(q==="\x00"){s.j(new A.l(r,r,"invalid-codepoint"))
s.j(new A.E(r,"\ufffd"))
s.si(t.c.a(s.gbH()))}else if(q==null){s.j(new A.l(r,r,"eof-in-script-in-script"))
s.si(t.c.a(s.gD()))}else{s.j(new A.E(r,q))
s.si(t.c.a(s.gbH()))}return!0},
jC(){var s=this,r=null,q=s.a.A()
if(q==="-")s.j(new A.E(r,"-"))
else if(q==="<"){s.j(new A.E(r,"<"))
s.si(t.c.a(s.gee()))}else if(q===">"){s.j(new A.E(r,">"))
s.si(t.c.a(s.gbI()))}else if(q==="\x00"){s.j(new A.l(r,r,"invalid-codepoint"))
s.j(new A.E(r,"\ufffd"))
s.si(t.c.a(s.gbH()))}else if(q==null){s.j(new A.l(r,r,"eof-in-script-in-script"))
s.si(t.c.a(s.gD()))}else{s.j(new A.E(r,q))
s.si(t.c.a(s.gbH()))}return!0},
jF(){var s=this,r=s.a,q=r.A()
if(q==="/"){s.j(new A.E(null,"/"))
s.y.a=""
s.si(t.c.a(s.gjx()))}else{r.R(q)
s.si(t.c.a(s.gbH()))}return!0},
jy(){var s=this,r=s.a,q=r.A()
if(A.a2(q)||q==="/"||q===">"){s.j(new A.E(q==null?new A.a0(""):null,q))
r=t.c
if(s.y.l(0).toLowerCase()==="script")s.si(r.a(s.gb8()))
else s.si(r.a(s.gbH()))}else if(A.aJ(q)){s.j(new A.E(q==null?new A.a0(""):null,q))
s.y.a+=A.k(q)}else{r.R(q)
s.si(t.c.a(s.gbH()))}return!0},
mf(){var s=this,r=null,q=s.a,p=q.A()
if(A.a2(p))q.c2(" \n\r\t\f",!0)
else{q=p==null
if(!q&&A.aJ(p)){s.bL(p)
s.si(t.c.a(s.gbN()))}else if(p===">")s.b_()
else if(p==="/")s.si(t.c.a(s.gbs()))
else if(q){s.j(new A.l(r,r,"expected-attribute-name-but-got-eof"))
s.si(t.c.a(s.gD()))}else if(B.b.G("'\"=<",p)){s.j(new A.l(r,r,"invalid-character-in-attribute-name"))
s.bL(p)
s.si(t.c.a(s.gbN()))}else if(p==="\x00"){s.j(new A.l(r,r,"invalid-codepoint"))
s.bL("\ufffd")
s.si(t.c.a(s.gbN()))}else{s.bL(p)
s.si(t.c.a(s.gbN()))}}return!0},
m8(){var s,r,q,p,o=this,n=null,m=o.a,l=m.A()
if(l==="="){o.si(t.c.a(o.gi3()))
s=!0
r=!1}else if(A.aJ(l)){q=o.ax
q.a+=A.k(l)
q.a+=m.c2("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",!0)
s=!1
r=!1}else if(l===">"){s=!0
r=!0}else{if(A.a2(l)){o.si(t.c.a(o.glU()))
s=!0}else if(l==="/"){o.si(t.c.a(o.gbs()))
s=!0}else if(l==="\x00"){o.j(new A.l(n,n,"invalid-codepoint"))
o.ax.a+="\ufffd"
s=!1}else if(l==null){o.j(new A.l(n,n,"eof-in-attribute-name"))
o.si(t.c.a(o.gD()))
s=!0}else{if(B.b.G("'\"<",l)){o.j(new A.l(n,n,"invalid-character-in-attribute-name"))
o.ax.a+=l}else o.ax.a+=l
s=!1}r=!1}if(s){o.dg(-1)
m=o.ax.a
q=t.E
p=A.ac(new A.G(new A.a5(m.charCodeAt(0)==0?m:m),q.h("h(t.E)").a(A.bG()),q.h("G<t.E,h>")),0,n)
m=o.Q
m.toString
B.a.gp(m).a=p
if(o.as==null)o.seu(A.nq(t.N))
if(o.as.G(0,p))o.j(new A.l(n,n,"duplicate-attribute"))
o.as.n(0,p)
if(r)o.b_()}return!0},
lV(){var s=this,r=null,q=s.a,p=q.A()
if(A.a2(p))q.c2(" \n\r\t\f",!0)
else if(p==="=")s.si(t.c.a(s.gi3()))
else if(p===">")s.b_()
else{q=p==null
if(!q&&A.aJ(p)){s.bL(p)
s.si(t.c.a(s.gbN()))}else if(p==="/")s.si(t.c.a(s.gbs()))
else if(p==="\x00"){s.j(new A.l(r,r,"invalid-codepoint"))
s.bL("\ufffd")
s.si(t.c.a(s.gbN()))}else if(q){s.j(new A.l(r,r,"expected-end-of-tag-but-got-eof"))
s.si(t.c.a(s.gD()))}else if(B.b.G("'\"<",p)){s.j(new A.l(r,r,"invalid-character-after-attribute-name"))
s.bL(p)
s.si(t.c.a(s.gbN()))}else{s.bL(p)
s.si(t.c.a(s.gbN()))}}return!0},
mg(){var s=this,r=null,q=s.a,p=q.A()
if(A.a2(p))q.c2(" \n\r\t\f",!0)
else if(p==='"'){s.ck(0)
s.si(t.c.a(s.gm9()))}else if(p==="&"){s.si(t.c.a(s.gdu()))
q.R(p)
s.ck(0)}else if(p==="'"){s.ck(0)
s.si(t.c.a(s.gmb()))}else if(p===">"){s.j(new A.l(r,r,u.A))
s.b_()}else if(p==="\x00"){s.j(new A.l(r,r,"invalid-codepoint"))
s.ck(-1)
s.ay.a+="\ufffd"
s.si(t.c.a(s.gdu()))}else if(p==null){s.j(new A.l(r,r,"expected-attribute-value-but-got-eof"))
s.si(t.c.a(s.gD()))}else if(B.b.G("=<`",p)){s.j(new A.l(r,r,"equals-in-unquoted-attribute-value"))
s.ck(-1)
s.ay.a+=p
s.si(t.c.a(s.gdu()))}else{s.ck(-1)
s.ay.a+=p
s.si(t.c.a(s.gdu()))}return!0},
ma(){var s,r=this,q=null,p=r.a,o=p.A()
if(o==='"'){r.c_(-1)
r.dg(0)
r.si(t.c.a(r.ghV()))}else if(o==="&")r.dw('"',!0)
else if(o==="\x00"){r.j(new A.l(q,q,"invalid-codepoint"))
r.ay.a+="\ufffd"}else if(o==null){r.j(new A.l(q,q,"eof-in-attribute-value-double-quote"))
r.c_(-1)
r.si(t.c.a(r.gD()))}else{s=r.ay
s.a+=o
s.a+=p.b5('"&')}return!0},
mc(){var s,r=this,q=null,p=r.a,o=p.A()
if(o==="'"){r.c_(-1)
r.dg(0)
r.si(t.c.a(r.ghV()))}else if(o==="&")r.dw("'",!0)
else if(o==="\x00"){r.j(new A.l(q,q,"invalid-codepoint"))
r.ay.a+="\ufffd"}else if(o==null){r.j(new A.l(q,q,"eof-in-attribute-value-single-quote"))
r.c_(-1)
r.si(t.c.a(r.gD()))}else{s=r.ay
s.a+=o
s.a+=p.b5("'&")}return!0},
md(){var s,r=this,q=null,p=r.a,o=p.A()
if(A.a2(o)){r.c_(-1)
r.si(t.c.a(r.gbx()))}else if(o==="&")r.dw(">",!0)
else if(o===">"){r.c_(-1)
r.b_()}else if(o==null){r.j(new A.l(q,q,"eof-in-attribute-value-no-quotes"))
r.c_(-1)
r.si(t.c.a(r.gD()))}else if(B.b.G("\"'=<`",o)){r.j(new A.l(q,q,u.V))
r.ay.a+=o}else if(o==="\x00"){r.j(new A.l(q,q,"invalid-codepoint"))
r.ay.a+="\ufffd"}else{s=r.ay
s.a+=o
s.a+=p.b5("&>\"'=<` \n\r\t\f")}return!0},
lW(){var s=this,r=null,q=s.a,p=q.A()
if(A.a2(p))s.si(t.c.a(s.gbx()))
else if(p===">")s.b_()
else if(p==="/")s.si(t.c.a(s.gbs()))
else if(p==null){s.j(new A.l(r,r,"unexpected-EOF-after-attribute-value"))
q.R(p)
s.si(t.c.a(s.gD()))}else{s.j(new A.l(r,r,u.H))
q.R(p)
s.si(t.c.a(s.gbx()))}return!0},
k0(){var s=this,r=null,q=s.a,p=q.A()
if(p===">"){t.fn.a(s.w).c=!0
s.b_()}else if(p==null){s.j(new A.l(r,r,"unexpected-EOF-after-solidus-in-tag"))
q.R(p)
s.si(t.c.a(s.gD()))}else{s.j(new A.l(r,r,u.B))
q.R(p)
s.si(t.c.a(s.gbx()))}return!0},
mo(){var s=this,r=s.a,q=r.b5(">")
q=A.bk(q,"\x00","\ufffd")
s.j(new A.cP(null,q))
r.A()
s.si(t.c.a(s.gD()))
return!0},
nH(){var s,r,q,p,o,n=this,m=null,l=n.a,k=A.a([l.A()],t.D)
if(B.a.gp(k)==="-"){B.a.n(k,l.A())
if(B.a.gp(k)==="-"){n.w=new A.cP(new A.a0(""),m)
n.si(t.c.a(n.gmG()))
return!0}}else if(B.a.gp(k)==="d"||B.a.gp(k)==="D"){r=0
while(!0){if(!(r<6)){s=!0
break}q=B.bn[r]
p=l.A()
B.a.n(k,p)
if(p!=null)o=!A.ck(q,p,0)
else o=!0
if(o){s=!1
break}++r}if(s){n.w=new A.dC(!0)
n.si(t.c.a(n.gmU()))
return!0}}else{if(B.a.gp(k)==="["){o=n.f
if(o!=null){o=o.d.c
o=o.length!==0&&B.a.gp(o).w!=n.f.d.a}else o=!1}else o=!1
if(o){r=0
while(!0){if(!(r<6)){s=!0
break}q=B.bx[r]
B.a.n(k,l.A())
if(B.a.gp(k)!==q){s=!1
break}++r}if(s){n.si(t.c.a(n.gms()))
return!0}}}n.j(new A.l(m,m,"expected-dashes-or-doctype"))
for(;o=k.length,o!==0;){if(0>=o)return A.c(k,-1)
o=k.pop()
if(o!=null)l.y=l.y-o.length}n.si(t.c.a(n.geS()))
return!0},
mH(){var s,r=this,q=null,p=r.a.A()
if(p==="-")r.si(t.c.a(r.gmE()))
else if(p==="\x00"){r.j(new A.l(q,q,"invalid-codepoint"))
t.v.a(r.w).b.a+="\ufffd"}else if(p===">"){r.j(new A.l(q,q,"incorrect-comment"))
s=r.w
s.toString
r.j(s)
r.si(t.c.a(r.gD()))}else if(p==null){r.j(new A.l(q,q,"eof-in-comment"))
s=r.w
s.toString
r.j(s)
r.si(t.c.a(r.gD()))}else{t.v.a(r.w).b.a+=p
r.si(t.c.a(r.gbP()))}return!0},
mF(){var s,r,q=this,p=null,o=q.a.A()
if(o==="-")q.si(t.c.a(q.gic()))
else if(o==="\x00"){q.j(new A.l(p,p,"invalid-codepoint"))
t.v.a(q.w).b.a+="-\ufffd"}else if(o===">"){q.j(new A.l(p,p,"incorrect-comment"))
s=q.w
s.toString
q.j(s)
q.si(t.c.a(q.gD()))}else if(o==null){q.j(new A.l(p,p,"eof-in-comment"))
s=q.w
s.toString
q.j(s)
q.si(t.c.a(q.gD()))}else{s=t.v.a(q.w).b
r=s.a+="-"
s.a=r+o
q.si(t.c.a(q.gbP()))}return!0},
mI(){var s,r=this,q=null,p=r.a,o=p.A()
if(o==="-")r.si(t.c.a(r.gib()))
else if(o==="\x00"){r.j(new A.l(q,q,"invalid-codepoint"))
t.v.a(r.w).b.a+="\ufffd"}else if(o==null){r.j(new A.l(q,q,"eof-in-comment"))
p=r.w
p.toString
r.j(p)
r.si(t.c.a(r.gD()))}else{s=t.v.a(r.w)
s.b.a+=o
p=p.b5("-\x00")
s.b.a+=p}return!0},
mC(){var s,r,q=this,p=null,o=q.a.A()
if(o==="-")q.si(t.c.a(q.gic()))
else if(o==="\x00"){q.j(new A.l(p,p,"invalid-codepoint"))
t.v.a(q.w).b.a+="-\ufffd"
q.si(t.c.a(q.gbP()))}else if(o==null){q.j(new A.l(p,p,"eof-in-comment-end-dash"))
s=q.w
s.toString
q.j(s)
q.si(t.c.a(q.gD()))}else{s=t.v.a(q.w).b
r=s.a+="-"
s.a=r+o
q.si(t.c.a(q.gbP()))}return!0},
mD(){var s,r,q=this,p=null,o=q.a.A()
if(o===">"){s=q.w
s.toString
q.j(s)
q.si(t.c.a(q.gD()))}else if(o==="\x00"){q.j(new A.l(p,p,"invalid-codepoint"))
t.v.a(q.w).b.a+="--\ufffd"
q.si(t.c.a(q.gbP()))}else if(o==="!"){q.j(new A.l(p,p,u.d))
q.si(t.c.a(q.gmA()))}else if(o==="-"){q.j(new A.l(p,p,u.K))
s=t.v.a(q.w)
o.toString
s.b.a+=o}else if(o==null){q.j(new A.l(p,p,"eof-in-comment-double-dash"))
s=q.w
s.toString
q.j(s)
q.si(t.c.a(q.gD()))}else{q.j(new A.l(p,p,"unexpected-char-in-comment"))
s=t.v.a(q.w).b
r=s.a+="--"
s.a=r+o
q.si(t.c.a(q.gbP()))}return!0},
mB(){var s,r,q=this,p=null,o=q.a.A()
if(o===">"){s=q.w
s.toString
q.j(s)
q.si(t.c.a(q.gD()))}else if(o==="-"){t.v.a(q.w).b.a+="--!"
q.si(t.c.a(q.gib()))}else if(o==="\x00"){q.j(new A.l(p,p,"invalid-codepoint"))
t.v.a(q.w).b.a+="--!\ufffd"
q.si(t.c.a(q.gbP()))}else if(o==null){q.j(new A.l(p,p,"eof-in-comment-end-bang-state"))
s=q.w
s.toString
q.j(s)
q.si(t.c.a(q.gD()))}else{s=t.v.a(q.w).b
r=s.a+="--!"
s.a=r+o
q.si(t.c.a(q.gbP()))}return!0},
mV(){var s=this,r=null,q=s.a,p=q.A()
if(A.a2(p))s.si(t.c.a(s.gi4()))
else if(p==null){s.j(new A.l(r,r,"expected-doctype-name-but-got-eof"))
q=t.i.a(s.w)
q.e=!1
s.j(q)
s.si(t.c.a(s.gD()))}else{s.j(new A.l(r,r,"need-space-after-doctype"))
q.R(p)
s.si(t.c.a(s.gi4()))}return!0},
mh(){var s,r=this,q=null,p=r.a.A()
if(A.a2(p))return!0
else if(p===">"){r.j(new A.l(q,q,u.f))
s=t.i.a(r.w)
s.e=!1
r.j(s)
r.si(t.c.a(r.gD()))}else if(p==="\x00"){r.j(new A.l(q,q,"invalid-codepoint"))
t.i.a(r.w).d="\ufffd"
r.si(t.c.a(r.gf2()))}else if(p==null){r.j(new A.l(q,q,"expected-doctype-name-but-got-eof"))
s=t.i.a(r.w)
s.e=!1
r.j(s)
r.si(t.c.a(r.gD()))}else{t.i.a(r.w).d=p
r.si(t.c.a(r.gf2()))}return!0},
mP(){var s,r,q,p=this,o=null,n=p.a.A()
if(A.a2(n)){s=t.i.a(p.w)
r=s.d
if(r==null)r=o
else{q=t.E
q=A.ac(new A.G(new A.a5(r),q.h("h(t.E)").a(A.bG()),q.h("G<t.E,h>")),0,o)
r=q}s.d=r
p.si(t.c.a(p.glX()))}else if(n===">"){s=t.i.a(p.w)
r=s.d
if(r==null)r=o
else{q=t.E
q=A.ac(new A.G(new A.a5(r),q.h("h(t.E)").a(A.bG()),q.h("G<t.E,h>")),0,o)
r=q}s.d=r
r=p.w
r.toString
p.j(r)
p.si(t.c.a(p.gD()))}else if(n==="\x00"){p.j(new A.l(o,o,"invalid-codepoint"))
s=t.i.a(p.w)
s.d=A.k(s.d)+"\ufffd"
p.si(t.c.a(p.gf2()))}else if(n==null){p.j(new A.l(o,o,"eof-in-doctype-name"))
s=t.i.a(p.w)
s.e=!1
r=s.d
if(r==null)r=o
else{q=t.E
q=A.ac(new A.G(new A.a5(r),q.h("h(t.E)").a(A.bG()),q.h("G<t.E,h>")),0,o)
r=q}s.d=r
r=p.w
r.toString
p.j(r)
p.si(t.c.a(p.gD()))}else{s=t.i.a(p.w)
s.d=A.k(s.d)+n}return!0},
lY(){var s,r,q,p,o=this,n=null,m=o.a,l=m.A()
if(A.a2(l))return!0
else if(l===">"){m=o.w
m.toString
o.j(m)
o.si(t.c.a(o.gD()))}else if(l==null){t.i.a(o.w).e=!1
m.R(l)
o.j(new A.l(n,n,"eof-in-doctype"))
m=o.w
m.toString
o.j(m)
o.si(t.c.a(o.gD()))}else{if(l==="p"||l==="P"){r=0
while(!0){if(!(r<5)){s=!0
break}q=B.bf[r]
l=m.A()
if(l!=null)p=!A.ck(q,l,0)
else p=!0
if(p){s=!1
break}++r}if(s){o.si(t.c.a(o.gm_()))
return!0}}else if(l==="s"||l==="S"){r=0
while(!0){if(!(r<5)){s=!0
break}q=B.br[r]
l=m.A()
if(l!=null)p=!A.ck(q,l,0)
else p=!0
if(p){s=!1
break}++r}if(s){o.si(t.c.a(o.gm2()))
return!0}}m.R(l)
m=A.w(["data",l],t.N,t.X)
o.j(new A.l(m,n,u.S))
t.i.a(o.w).e=!1
o.si(t.c.a(o.gco()))}return!0},
m0(){var s=this,r=null,q=s.a,p=q.A()
if(A.a2(p))s.si(t.c.a(s.geP()))
else if(p==="'"||p==='"'){s.j(new A.l(r,r,"unexpected-char-in-doctype"))
q.R(p)
s.si(t.c.a(s.geP()))}else if(p==null){s.j(new A.l(r,r,"eof-in-doctype"))
q=t.i.a(s.w)
q.e=!1
s.j(q)
s.si(t.c.a(s.gD()))}else{q.R(p)
s.si(t.c.a(s.geP()))}return!0},
mi(){var s,r=this,q=null,p=r.a.A()
if(A.a2(p))return!0
else if(p==='"'){t.i.a(r.w).b=""
r.si(t.c.a(r.gmQ()))}else if(p==="'"){t.i.a(r.w).b=""
r.si(t.c.a(r.gmS()))}else if(p===">"){r.j(new A.l(q,q,"unexpected-end-of-doctype"))
s=t.i.a(r.w)
s.e=!1
r.j(s)
r.si(t.c.a(r.gD()))}else if(p==null){r.j(new A.l(q,q,"eof-in-doctype"))
s=t.i.a(r.w)
s.e=!1
r.j(s)
r.si(t.c.a(r.gD()))}else{r.j(new A.l(q,q,"unexpected-char-in-doctype"))
t.i.a(r.w).e=!1
r.si(t.c.a(r.gco()))}return!0},
mR(){var s,r=this,q=null,p=r.a.A()
if(p==='"')r.si(t.c.a(r.ghW()))
else if(p==="\x00"){r.j(new A.l(q,q,"invalid-codepoint"))
s=t.i.a(r.w)
s.b=A.k(s.b)+"\ufffd"}else if(p===">"){r.j(new A.l(q,q,"unexpected-end-of-doctype"))
s=t.i.a(r.w)
s.e=!1
r.j(s)
r.si(t.c.a(r.gD()))}else if(p==null){r.j(new A.l(q,q,"eof-in-doctype"))
s=t.i.a(r.w)
s.e=!1
r.j(s)
r.si(t.c.a(r.gD()))}else{s=t.i.a(r.w)
s.b=A.k(s.b)+p}return!0},
mT(){var s,r=this,q=null,p=r.a.A()
if(p==="'")r.si(t.c.a(r.ghW()))
else if(p==="\x00"){r.j(new A.l(q,q,"invalid-codepoint"))
s=t.i.a(r.w)
s.b=A.k(s.b)+"\ufffd"}else if(p===">"){r.j(new A.l(q,q,"unexpected-end-of-doctype"))
s=t.i.a(r.w)
s.e=!1
r.j(s)
r.si(t.c.a(r.gD()))}else if(p==null){r.j(new A.l(q,q,"eof-in-doctype"))
s=t.i.a(r.w)
s.e=!1
r.j(s)
r.si(t.c.a(r.gD()))}else{s=t.i.a(r.w)
s.b=A.k(s.b)+p}return!0},
lZ(){var s,r=this,q=null,p="unexpected-char-in-doctype",o=r.a.A()
if(A.a2(o))r.si(t.c.a(r.gmk()))
else if(o===">"){s=r.w
s.toString
r.j(s)
r.si(t.c.a(r.gD()))}else if(o==='"'){r.j(new A.l(q,q,p))
t.i.a(r.w).c=""
r.si(t.c.a(r.gf3()))}else if(o==="'"){r.j(new A.l(q,q,p))
t.i.a(r.w).c=""
r.si(t.c.a(r.gf4()))}else if(o==null){r.j(new A.l(q,q,"eof-in-doctype"))
s=t.i.a(r.w)
s.e=!1
r.j(s)
r.si(t.c.a(r.gD()))}else{r.j(new A.l(q,q,p))
t.i.a(r.w).e=!1
r.si(t.c.a(r.gco()))}return!0},
ml(){var s,r=this,q=null,p=r.a.A()
if(A.a2(p))return!0
else if(p===">"){s=r.w
s.toString
r.j(s)
r.si(t.c.a(r.gD()))}else if(p==='"'){t.i.a(r.w).c=""
r.si(t.c.a(r.gf3()))}else if(p==="'"){t.i.a(r.w).c=""
r.si(t.c.a(r.gf4()))}else if(p==null){r.j(new A.l(q,q,"eof-in-doctype"))
s=t.i.a(r.w)
s.e=!1
r.j(s)
r.si(t.c.a(r.gD()))}else{r.j(new A.l(q,q,"unexpected-char-in-doctype"))
t.i.a(r.w).e=!1
r.si(t.c.a(r.gco()))}return!0},
m3(){var s=this,r=null,q=s.a,p=q.A()
if(A.a2(p))s.si(t.c.a(s.geQ()))
else if(p==="'"||p==='"'){s.j(new A.l(r,r,"unexpected-char-in-doctype"))
q.R(p)
s.si(t.c.a(s.geQ()))}else if(p==null){s.j(new A.l(r,r,"eof-in-doctype"))
q=t.i.a(s.w)
q.e=!1
s.j(q)
s.si(t.c.a(s.gD()))}else{q.R(p)
s.si(t.c.a(s.geQ()))}return!0},
mj(){var s,r=this,q=null,p="unexpected-char-in-doctype",o=r.a.A()
if(A.a2(o))return!0
else if(o==='"'){t.i.a(r.w).c=""
r.si(t.c.a(r.gf3()))}else if(o==="'"){t.i.a(r.w).c=""
r.si(t.c.a(r.gf4()))}else if(o===">"){r.j(new A.l(q,q,p))
s=t.i.a(r.w)
s.e=!1
r.j(s)
r.si(t.c.a(r.gD()))}else if(o==null){r.j(new A.l(q,q,"eof-in-doctype"))
s=t.i.a(r.w)
s.e=!1
r.j(s)
r.si(t.c.a(r.gD()))}else{r.j(new A.l(q,q,p))
t.i.a(r.w).e=!1
r.si(t.c.a(r.gco()))}return!0},
mW(){var s,r=this,q=null,p=r.a.A()
if(p==='"')r.si(t.c.a(r.ghX()))
else if(p==="\x00"){r.j(new A.l(q,q,"invalid-codepoint"))
s=t.i.a(r.w)
s.c=A.k(s.c)+"\ufffd"}else if(p===">"){r.j(new A.l(q,q,"unexpected-end-of-doctype"))
s=t.i.a(r.w)
s.e=!1
r.j(s)
r.si(t.c.a(r.gD()))}else if(p==null){r.j(new A.l(q,q,"eof-in-doctype"))
s=t.i.a(r.w)
s.e=!1
r.j(s)
r.si(t.c.a(r.gD()))}else{s=t.i.a(r.w)
s.c=A.k(s.c)+p}return!0},
mX(){var s,r=this,q=null,p=r.a.A()
if(p==="'")r.si(t.c.a(r.ghX()))
else if(p==="\x00"){r.j(new A.l(q,q,"invalid-codepoint"))
s=t.i.a(r.w)
s.c=A.k(s.c)+"\ufffd"}else if(p===">"){r.j(new A.l(q,q,"unexpected-end-of-doctype"))
s=t.i.a(r.w)
s.e=!1
r.j(s)
r.si(t.c.a(r.gD()))}else if(p==null){r.j(new A.l(q,q,"eof-in-doctype"))
s=t.i.a(r.w)
s.e=!1
r.j(s)
r.si(t.c.a(r.gD()))}else{s=t.i.a(r.w)
s.c=A.k(s.c)+p}return!0},
m1(){var s,r=this,q=null,p=r.a.A()
if(A.a2(p))return!0
else if(p===">"){s=r.w
s.toString
r.j(s)
r.si(t.c.a(r.gD()))}else if(p==null){r.j(new A.l(q,q,"eof-in-doctype"))
s=t.i.a(r.w)
s.e=!1
r.j(s)
r.si(t.c.a(r.gD()))}else{r.j(new A.l(q,q,"unexpected-char-in-doctype"))
r.si(t.c.a(r.gco()))}return!0},
mp(){var s=this,r=s.a,q=r.A()
if(q===">"){r=s.w
r.toString
s.j(r)
s.si(t.c.a(s.gD()))}else if(q==null){r.R(q)
r=s.w
r.toString
s.j(r)
s.si(t.c.a(s.gD()))}return!0},
mt(){var s,r,q,p=this,o=A.a([],t.s)
for(s=p.a,r=0;!0;){q=s.A()
if(q==null)break
if(q==="\x00"){p.j(new A.l(null,null,"invalid-codepoint"))
q="\ufffd"}B.a.n(o,q)
if(q==="]"&&r<2)++r
else{if(q===">"&&r===2){if(0>=o.length)return A.c(o,-1)
o.pop()
if(0>=o.length)return A.c(o,-1)
o.pop()
if(0>=o.length)return A.c(o,-1)
o.pop()
break}r=0}}if(o.length!==0){s=B.a.aP(o)
p.j(new A.E(null,s))}p.si(t.c.a(p.gD()))
return!0},
si(a){this.x=t.c.a(a)},
sev(a,b){this.Q=t.jq.a(b)},
seu(a){this.as=t.oA.a(a)},
slG(a){this.at=t.nU.a(a)},
$iQ:1,
kB(a){return this.gkA(this).$0()}}
A.jj.prototype={
$1(a){return B.b.Y(A.aq(a),this.a)},
$S:7}
A.jk.prototype={
$0(){var s=this.a.b
s===$&&A.b("value")
return s},
$S:6}
A.fb.prototype={
n(a,b){var s,r,q,p,o,n,m,l,k,j=this,i="http://www.w3.org/1999/xhtml"
t.mV.a(b)
if(b!=null)for(s=A.z(j).h("V<t.E>"),r=new A.V(j,s),r=new A.J(r,r.gm(r),s.h("J<B.E>")),q=b.x,p=b.w,s=s.h("B.E"),o=0;r.q();){n=r.d
if(n==null)n=s.a(n)
if(n==null)break
m=n.w
if(m==null)m=i
l=n.x
k=p==null?i:p
if(k===m&&q==l&&A.rN(n.b,b.b))++o
if(o===3){B.a.a4(j.a,n)
break}}j.bX(0,b)}}
A.kk.prototype={
bk(a){var s=this
B.a.bO(s.c)
s.d.sm(0,0)
s.f=s.e=null
s.r=!1
s.b=A.nh()},
a_(a,b){var s,r,q,p,o,n,m,l,k,j,i,h="We should never reach this point",g="http://www.w3.org/1999/xhtml",f=a instanceof A.ag
if(b!=null)switch(b){case"button":s=B.R
r=B.ba
q=!1
break
case"list":s=B.R
r=B.bh
q=!1
break
case"table":s=B.bC
r=B.U
q=!1
break
case"select":s=B.by
r=B.U
q=!0
break
default:throw A.d(A.aH(h))}else{s=B.R
r=B.U
q=!1}for(p=this.c,o=A.v(p).h("V<1>"),p=new A.V(p,o),p=new A.J(p,p.gm(p),o.h("J<B.E>")),n=t.h2,m=!f,o=o.h("B.E");p.q();){l=p.d
if(l==null)l=o.a(l)
if(m){k=l.x
k=k==null?a==null:k===a}else k=!1
if(!k)k=f&&l===a
else k=!0
if(k)return!0
else{j=l.w
k=j==null
i=k?g:j
l=l.x
if(!B.a.G(s,new A.o(i,l,n)))l=B.a.G(r,new A.o(k?g:j,l,n))
else l=!0
if(q!==l)return!1}}throw A.d(A.aH(h))},
aZ(a){return this.a_(a,null)},
aD(){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.d
if(g.gm(g)===0)return
s=g.a
r=s.length
q=r-1
if(!(q>=0))return A.c(s,q)
p=s[q]
if(p==null||B.a.G(h.c,p))return
r=h.c
while(!0){if(!(p!=null&&!B.a.G(r,p)))break
if(q===0){q=-1
break}--q
if(!(q>=0&&q<s.length))return A.c(s,q)
p=s[q]}for(r=A.z(g).h("aQ.E"),o=t.K,n=t.N;!0;){++q
if(!(q>=0&&q<s.length))return A.c(s,q)
p=s[q]
m=p.x
l=p.w
k=A.fX(p.b,o,n)
j=new A.c6(k,l,m,!1)
j.a=p.e
i=h.M(j)
B.a.t(s,q,r.a(i))
if(g.gm(g)===0)A.M(A.al())
if(i===g.k(0,g.gm(g)-1))break}},
eU(){var s=this.d,r=s.d2(s)
while(!0){if(!(!s.gan(s)&&r!=null))break
r=s.d2(s)}},
ip(a){var s,r,q
for(s=this.d,r=A.z(s).h("V<t.E>"),s=new A.V(s,r),s=new A.J(s,s.gm(s),r.h("J<B.E>")),r=r.h("B.E");s.q();){q=s.d
if(q==null)q=r.a(q)
if(q==null)break
else if(q.x==a)return q}return null},
cr(a,b){var s=b.gak(b),r=A.ng(a.gaA(a))
r.e=a.a
s.n(0,r)},
ik(a,b){var s,r=b.b,q=b.w
if(q==null)q=this.a
this.b===$&&A.b("document")
s=A.m1(r,q===""?null:q)
s.scN(0,b.e)
s.e=b.a
return s},
M(a){if(this.r)return this.nx(a)
return this.iD(a)},
iD(a){var s,r,q=a.b,p=a.w
if(p==null)p=this.a
this.b===$&&A.b("document")
s=A.m1(q,p===""?null:p)
s.scN(0,a.e)
s.e=a.a
r=this.c
J.pn(B.a.gp(r)).n(0,s)
B.a.n(r,s)
return s},
nx(a){var s,r,q=this,p=q.ik(0,a),o=q.c
if(!B.a.G(B.T,B.a.gp(o).x))return q.iD(a)
else{s=q.eb()
r=s[1]
if(r==null){r=s[0]
r.gak(r).n(0,p)}else s[0].nw(0,p,r)
B.a.n(o,p)}return p},
bR(a,b){var s,r=this.c,q=B.a.gp(r)
if(this.r)r=!B.a.G(B.T,B.a.gp(r).x)
else r=!0
if(r)A.nK(q,a,b,null)
else{s=this.eb()
r=s[0]
r.toString
A.nK(r,a,b,t.mV.a(s[1]))}},
eb(){var s,r,q,p,o=this.c,n=A.v(o).h("V<1>"),m=new A.V(o,n)
m=new A.J(m,m.gm(m),n.h("J<B.E>"))
n=n.h("B.E")
while(!0){if(!m.q()){s=null
break}r=m.d
s=r==null?n.a(r):r
if(s.x==="table")break}if(s!=null){q=s.a
if(q!=null)p=s
else{n=B.a.aj(o,s)-1
if(!(n>=0&&n<o.length))return A.c(o,n)
q=o[n]
p=null}}else{if(0>=o.length)return A.c(o,0)
q=o[0]
p=null}return A.a([q,p],t.hg)},
bT(a){var s=this.c,r=B.a.gp(s).x
if(r!=a&&B.a.G(B.S,r)){if(0>=s.length)return A.c(s,-1)
s.pop()
this.bT(a)}},
cc(){return this.bT(null)},
sns(a){this.e=t.e1.a(a)},
siA(a){this.f=t.mV.a(a)}}
A.o.prototype={
gZ(a){return 37*J.aA(this.a)+J.aA(this.b)},
W(a,b){if(b==null)return!1
return b instanceof A.o&&b.a==this.a&&b.b==this.b}}
A.lC.prototype={
$2(a,b){var s,r,q,p,o,n,m,l,k,j=new A.a0(""),i="%("+A.aq(a)+")"
for(s=this.a,r=i.length,q=J.bj(b),p=0,o="";n=s.a,m=B.b.aJ(n,i,p),m>=0;){j.a=o+B.b.v(n,p,m)
m+=r
l=m
while(!0){o=s.a
if(!(l<o.length))return A.c(o,l)
if(!A.lM(o[l]))break;++l}if(l>m){k=A.ci(B.b.v(s.a,m,l),null)
m=l}else k=0
o=s.a
if(!(m<o.length))return A.c(o,m)
o=o[m]
switch(o){case"s":o=j.a+=A.k(b)
break
case"d":o=j.a+=A.oW(q.l(b),k)
break
case"x":o=j.a+=A.oW(B.e.ov(A.a1(b),16),k)
break
default:throw A.d(A.S("formatStr does not support format character "+o))}p=m+1}r=j.a=o+B.b.v(n,p,n.length)
s.a=r.charCodeAt(0)==0?r:r},
$S:38}
A.iG.prototype={
is(a){var s,r,q,p
t.a.a(a)
s=new A.iH()
r=A.a([],t.r)
for(q=a.length,p=0;p<a.length;a.length===q||(0,A.e)(a),++p)B.a.H(r,s.$1(a[p]))
return A.tG(r,t.j)},
j2(a){var s,r,q,p,o="renderer"
for(s=this.is(t.a.a(a)),r=A.v(s).h("V<1>"),s=new A.V(s,r),s=new A.J(s,s.gm(s),r.h("J<B.E>")),r=r.h("B.E");s.q();){q=s.d
if(q==null)q=r.a(q)
p=this.r
if(q instanceof A.R){p===$&&A.b("display")
p=p.a
p===$&&A.b(o)
p.oe(q)}else{p===$&&A.b("display")
p.a===$&&A.b(o)}}},
j9(a,b){t.y.a(b)
return!B.a.cp(b,new A.iI())?A.a([B.d],t.l):b}}
A.iH.prototype={
$1(a){return a.bV()},
$S:39}
A.iI.prototype={
$1(a){t.V.a(a)
return isFinite(a.a)&&isFinite(a.b)&&isFinite(a.c)},
$S:40}
A.ds.prototype={
i6(a){var s
this.b=a
s=this.d
B.a7.soH(s,1280)
B.a7.sbg(s,720)},
dt(a){return a},
e6(a,b){var s,r,q=this.b
q===$&&A.b("camera")
s=q.c
r=A.im(a,0,1280,-s/2,s/2)
q=q.d
return new A.f(r,A.im(b,720,0,-q/2,q/2),0).T(0,B.d)}}
A.fa.prototype={
dQ(){var s=0,r=A.f1(t.W),q,p=this,o,n,m
var $async$dQ=A.f3(function(a,b){if(a===1)return A.eX(b,r)
while(true)switch(s){case 0:m=window
m.toString
s=3
return A.cI(B.e_.gm5(m),$async$dQ)
case 3:o=b
m=p.f
if(m===0){p.f=o
m=o}n=o-m
p.f=m+n
q=n/1000
s=1
break
case 1:return A.eY(q,r)}})
return A.eZ($async$dQ,r)},
e8(a){var s,r,q,p
t.n8.a(a)
s=this.d.getBoundingClientRect()
r=s.left
r.toString
q=s.right
q.toString
this.b===$&&A.b("camera")
p=A.im(a.a,r,q,0,1280)
q=s.top
q.toString
r=s.bottom
r.toString
return new A.f(p,A.im(a.b,q,r,0,720),0)},
eR(){var s=this,r=s.d,q=t.eX,p=q.h("~(1)?"),o=p.a(new A.ir(s))
t.jE.a(null)
q=q.c
B.a.H(s.r,A.a([A.kO(r,"mousemove",o,!1,q),A.kO(r,"mousedown",p.a(new A.is(s)),!1,q),A.kO(r,"mouseup",p.a(new A.it(s)),!1,q)],t.dw))},
ow(){var s,r,q
for(s=this.r,r=s.length,q=0;q<s.length;s.length===r||(0,A.e)(s),++q)s[q].mr()}}
A.ir.prototype={
$1(a){var s,r,q,p
t.gD.a(a)
s=this.a
r=s.Q
s.as=new A.f(r.a,r.b,r.c)
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.e8(new A.cA(r,q,t.n8))
q=s.e6(p.a,p.b)
s.Q=q
q.U(0,s.as)
q=s.Q
$.dr().dB(new A.e5(q,B.E,"MouseMovedEvent"))
if(s.w){r=s.y=s.Q
s.x.U(0,r)
$.dr().dB(new A.c0(r,B.B,"MouseDraggedEvent"))}},
$S:12}
A.is.prototype={
$1(a){var s,r,q,p,o
t.gD.a(a)
s=this.a
r=s.Q
s.as=new A.f(r.a,r.b,r.c)
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.e8(new A.cA(r,q,t.n8))
s.Q=s.e6(p.a,p.b)
q=a.button
q.toString
s.z=A.md(q)
q=s.Q
$.dr().dB(new A.c1(q,B.z,"MousePressedEvent"))
s.w=!0
q=s.Q
r=q.a
o=q.b
q=q.c
s.x=new A.f(r,o,q)
s.y=new A.f(r,o,q)},
$S:12}
A.it.prototype={
$1(a){var s,r,q,p
t.gD.a(a)
s=this.a
r=s.Q
s.as=new A.f(r.a,r.b,r.c)
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.e8(new A.cA(r,q,t.n8))
s.Q=s.e6(p.a,p.b)
q=a.button
q.toString
s.z=A.md(q)
q=s.Q
$.dr().dB(new A.c2(q,B.A,"MouseReleasedEvent"))
s.w=!1},
$S:12}
A.fs.prototype={}
A.e9.prototype={
u(){return A.me(this)},
lT(){var s,r,q,p=this,o=t.b1,n=A.a([],o),m=p.dF
m.toString
s=p.iw
s=A.oA(p.bz+-1*s/2,m,s).b1(0)
m=s.length
r=p.c5
q=0
for(;q<s.length;s.length===m||(0,A.e)(s),++q)n.push(p.fF(s[q],r))
p.sot(n)
o=A.a([],o)
for(n=p.ix,m=n.length,r*=p.iy,q=0;q<n.length;n.length===m||(0,A.e)(n),++q)o.push(p.fF(n[q],r))
p.smm(o)
o=p.f9
o.toString
o=A.j(o,!0,t.j)
n=p.fa
n.toString
B.a.H(o,n)
p.bd(t.a.a(o))},
fF(a,b){var s,r=this,q=B.m.C(0,b),p=A.aO(B.c,B.t.C(0,b),q)
p.fp(0,r.b7().U(0,r.bp()).cL())
p.dP(r.iS(a))
p.al(r.fB())
p.fM(J.X(r.bo(),0))
q=J.iq(r.bq(!1))
s=r.w
p.kg(q,s)
return p},
iS(a){var s=this,r=A.im(a,s.iv,s.bz,0,1)
return A.mN(s.bp(),s.b7(),r,t.V)},
sot(a){this.f9=t.gv.a(a)},
smm(a){this.fa=t.gv.a(a)}}
A.jU.prototype={
$1(a){return t.f.a(a).u()},
$S:23}
A.jV.prototype={
$1(a){return t.f.a(a).u()},
$S:23}
A.fA.prototype={}
A.dy.prototype={
ij(b8,b9,c0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=B.a.b0(A.a([c0,this.iu,B.aU],t.iX),new A.iF()),b7=b6.a
if(b7==null)b7=B.ab
s=b6.e
if(s==null)s=1
r=b6.f
r=r!==!1
q=b6.r
if(q==null)q=0.1
p=b6.w
if(p==null)p=1
o=b6.x
n=b6.y
if(n==null)n=A.a([0],t.n)
m=b6.z
l=b6.Q
k=b6.as
if(k==null)k=2
j=b6.at
if(j==null)j=0
i=b6.ax
if(i==null)i=0.75
h=b6.d
if(h==null)h=B.m
g=b6.ay
if(g==null)g=0.25
f=b6.b
e=b6.ch
if(e==null)e=0.25
d=b6.CW
if(d==null)d=0.25
c=b6.cx
b=b6.c
a=A.b_(b5,0,B.c,b5,0)
b=new A.e9(b8,b9,s,r,q,p,o,n,m===!0,l,k,j,i,h,g,f!==!1,c,b!==!1,e,d,b5,b5,0,b5,B.j,B.u,0.35,B.l,a,b5,b5,4,0,!1,0.01,!1,0.000001,4,b5,b5,b5,B.c,$,b5,$,$,$)
b.aw(B.c,b5,b5)
b.al(b7)
d=Math.max(e,d)
b.fx=d
b.bz=b.bz+d/2
b.a7=B.j.C(0,s).C(0,b8)
b7=B.j.C(0,s).C(0,b.bz)
b.af=b7
b.cw(b.a7,b7)
b.aM(b.iS(j).C(0,-1))
if(b.dF==null)b.dF=p*B.h.eT(b8/p)
a0=b.fx
a1=b.fB()
a2=A.c8(a)
b7=a2.a
b7=b7==null?b5:J.f8(b7)
if(b7!==!1)a2=a2.oI(a1.u())
b7=a2.b
b7=b7==null?b5:J.f8(b7)
if(b7!==!1)a2=a2.oJ(a1.u())
a3=A.tv(3.141592653589793,B.l).b1(0)
b7=a3.length
if(0>=b7)return A.c(a3,0)
a4=a3[0]
if(1>=b7)return A.c(a3,1)
a5=a3[1]
if(2>=b7)return A.c(a3,2)
a6=a3[2]
if(3>=b7)return A.c(a3,3)
a7=a3[3]
b7=a5*0
s=a6*0
a8=a7+b7-s
q=a7*0
p=a4*0
a9=q+a6-p
b0=q+p-a5
p=-a4
b1=p-b7-s
s=-a6
b7=-a5
p=A.t4(3,new A.f(a8*a7+b1*p+a9*s-b0*b7,a9*a7+b1*b7+b0*p-a8*s,b0*a7+b1*s+a8*b7-a9*p))
b2=new A.dv(4,0,!1,0.01,!1,0.000001,4,b5,b5,b5,B.c,$,b5,$,$,$)
b2.aw(B.c,b5,b5)
b2.eq(p,B.c)
b2.fp(0,3.141592653589793)
b2.ek(a0,!0)
b2.d9(a0,!0)
b2.iL(b)
b2.km(a2)
b3=b.b7()
b7=b.r
b7===$&&A.b("points")
s=b7.length
q=s-2
if(!(q>=0))return A.c(b7,q)
b4=b7[q]
b7=b4.U(0,b3).cL()
s=b2.r
s===$&&A.b("points")
b2.fp(0,-b7-B.a.ga3(s).U(0,b2.dT(0.5)).cL()-3.141592653589793)
b2.aM(b3.U(0,B.a.ga3(b2.r)))
b.of(b2,B.dX)
b.k1=b2
b.bd(t.a.a(A.a([b2],t.r)))
if(r)b.lT()
b7=b6.cy
b.kf(b7==null?4:b7)
return b},
u(){return A.py(this)}}
A.iF.prototype={
$2(a,b){var s=t.fy
return s.a(a).fg(s.a(b))},
$S:43}
A.aK.prototype={
fg(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.a
if(b==null)b=a.a
s=c.e
if(s==null)s=a.e
r=c.f
if(r==null)r=a.f
q=c.r
if(q==null)q=a.r
p=c.w
if(p==null)p=a.w
o=c.y
if(o==null)o=a.y
n=c.z
if(n==null)n=a.z
m=c.as
if(m==null)m=a.as
l=c.at
if(l==null)l=a.at
k=c.ax
if(k==null)k=a.ax
j=c.d
if(j==null)j=a.d
i=c.ay
if(i==null)i=a.ay
h=c.b
if(h==null)h=a.b
g=c.ch
if(g==null)g=a.ch
f=c.CW
if(f==null)f=a.CW
e=c.c
if(e==null)e=a.c
d=c.cy
if(d==null)d=a.cy
return A.n7(b,a.cx,e,n,r,h,j,a.x,i,m,l,k,a.Q,o,d,p,q,f,g,s)}}
A.ep.prototype={
ji(a,b){var s,r
if(a==null)s=null
else s=a
if(s==null)s=B.o
if(b==null)r=null
else r=b
if(r==null)r=B.o
return A.b_(B.o,this.e,s,r,this.c)},
oI(a){return this.ji(a,null)},
oJ(a){return this.ji(null,a)}}
A.hz.prototype={
l(a){return"TipSide."+this.b}}
A.eq.prototype={
u(){return A.qz(this)},
of(a,b){var s=this
if(Math.sqrt(s.bp().U(0,s.b7()).bD())===0)return
if(b===B.dW)s.cw(a.dT(0.5),s.b7())
else s.cw(s.bp(),a.dT(0.5))},
bW(a,b){this.ej(a,!1)
this.eh(B.o,!1)
this.kV(a,!0)},
al(a){return this.bW(a,!0)},
b7(){var s=this.k1
if(s!=null){s.aR("getStart")
s=s.r
s===$&&A.b("points")
s=B.a.ga3(s)}else s=this.eo()
return s},
bp(){var s=this.id
if(s!=null){s.aR("getStart")
s=s.r
s===$&&A.b("points")
s=B.a.ga3(s)}else s=this.ep()
return s}}
A.du.prototype={
u(){return A.pt(this)},
bU(){var s=this
s.kc()
s.fJ(s.a7,B.d)
s.aM(s.af)},
kc(){var s,r,q,p,o,n,m,l,k,j=this,i=t.l,h=A.a([],i)
for(s=j.y2,r=j.ac,q=j.bf,s=A.il(q,r+s,s).b1(0),p=s.length,o=0;o<s.length;s.length===p||(0,A.e)(s),++o){n=s[o]
h.push(B.j.C(0,Math.cos(n)).T(0,B.t.C(0,Math.sin(n))))}s=A.a([],i)
for(p=h.length,o=0;o<h.length;h.length===p||(0,A.e)(h),++o){n=h[o]
s.push(new A.f(-n.b,n.a,n.c))}p=A.a([],i)
for(m=A.K(h.length-1,0,1),l=m.length,q=r/(q-1)/3,o=0;o<m.length;m.length===l||(0,A.e)(m),++o){k=m[o]
p.push(B.a.k(h,k).T(0,B.a.k(s,k).C(0,q)))}i=A.a([],i)
for(r=A.K(h.length,1,1),m=r.length,o=0;o<r.length;r.length===m||(0,A.e)(r),++o){k=r[o]
i.push(B.a.k(h,k).U(0,B.a.k(s,k).C(0,q)))}s=t.V
j.fL(A.mV(h,s),p,i,A.cL(h,s))}}
A.cl.prototype={
u(){return A.pv(this)}}
A.cO.prototype={
u(){return A.pC(this)},
gdv(){return!0}}
A.dF.prototype={
u(){return A.nk(this)}}
A.dI.prototype={
u(){return A.pJ(this)}}
A.ay.prototype={
u(){return A.pY(this)},
bU(){var s=this
s.ei(A.a([s.a7,s.af],t.l))
s.lP()},
lP(){var s,r,q=this,p=q.y2
if(p===0)return
s=Math.sqrt(q.bp().U(0,q.b7()).bD())
if(s<2*p)return
r=p/s
q.nR(q,r,1-r)},
cw(a,b){var s=this
if(s.bp().W(0,s.b7())){s.a7=a
s.af=b
s.bU()}return s.kQ(a,b)}}
A.ea.prototype={
eq(a,b){var s=A.j(a,!0,t.V)
s.push(B.a.ga3(a))
this.ei(s)},
u(){return A.q7(this)},
oi(b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1="points",b2="getStart",b3=b0.eD(0),b4=t.nC,b5=A.a([],b4)
for(s=t.V,r=A.oy(b3,3,s),q=r.length,p=J.oI(b6),o=0;o<r.length;r.length===q||(0,A.e)(r),++o){n=r[o]
m=n.length
if(0>=m)return A.c(n,0)
l=n[0]
if(1>=m)return A.c(n,1)
k=n[1]
if(2>=m)return A.c(n,2)
j=n[2]
i=k.U(0,l)
h=j.U(0,k)
m=i.a
g=i.b
f=i.c
e=m*m+g*g+f*f
d=i.bF(0,Math.sqrt(e))
c=h.a
b=h.b
a=h.c
a0=c*c+b*b+a*a
a1=h.bF(0,Math.sqrt(a0))
a2=Math.acos((m*c+g*b+f*a)/(Math.sqrt(a0)*Math.sqrt(e)))*p.gel(b6)
a3=b6*Math.tan(a2/2)/2
a4=J.po(m*b-g*c)
c=k.U(0,d.C(0,a3))
B.a.n(b5,A.pu(a4*a2,k.T(0,a1.C(0,a3)),c))}r=t.l
q=t.y
b0.saT(q.a(A.a([],r)))
b4=A.a([B.a.gp(b5)],b4)
p=t.aY
B.a.H(b4,A.mV(b5,p))
for(b4=A.oy(b4,2,p),p=b4.length,o=0;o<b4.length;b4.length===p||(0,A.e)(b4),++o){a5=b4[o]
m=a5.length
if(0>=m)return A.c(a5,0)
a6=a5[0]
if(1>=m)return A.c(a5,1)
a7=a5[1]
m=a6.r
m===$&&A.b(b1)
m=q.a(A.j(m,!0,s))
g=b0.r
g===$&&A.b(b1)
B.a.H(g,m)
m=a6.k1
if(m!=null){m.aR(b2)
m=m.r
m===$&&A.b(b1)
m=B.a.ga3(m)}else m=a6.eo()
g=a7.id
if(g!=null){g.aR(b2)
g=g.r
g===$&&A.b(b1)
g=B.a.ga3(g)}else g=a7.ep()
a8=A.aO(B.c,g,m)
m=a8.id
if(m!=null){m.aR(b2)
m=m.r
m===$&&A.b(b1)
m=B.a.ga3(m)}else m=a8.ep()
g=a8.k1
if(g!=null){g.aR(b2)
g=g.r
g===$&&A.b(b1)
g=B.a.ga3(g)}else g=a8.eo()
g=m.U(0,g)
m=g.a
f=g.b
g=g.c
g=B.h.bl(Math.sqrt(m*m+f*f+g*g)/a6.jm()*B.e.aV(a6.r.length,a6.at))
m=a8.r
m===$&&A.b(b1)
a9=B.e.a6(m.length,a8.at)===1?B.a.gp(m):null
a8.saT(q.a(a8.fe(g,A.j(a8.r,!0,s))))
if(a9!=null){m=q.a(A.a([a9],r))
B.a.H(a8.r,m)}m=q.a(A.j(a8.r,!0,s))
B.a.H(b0.r,m)}}}
A.ec.prototype={
u(){return A.qh(this)}}
A.er.prototype={
u(){return A.qB(this)}}
A.dv.prototype={
u(){return A.aF(this)},
saE(a){this.c4=A.bU(a)},
gaE(){return this.c4}}
A.d6.prototype={
h0(a,b,c){this.ek(c,!0)
this.d9(b,!0)},
u(){return A.qg(this)}}
A.ed.prototype={
u(){return A.qi(this)}}
A.c3.prototype={
u(){return A.qk(this)},
bU(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null
if($.mg.ai(e.id)){s=$.mg.k(0,e.id).u()
r=s.d
r===$&&A.b("submobjects")
e.sbc(t.a.a(r))
e.sbg(0,s.gbg(s))
e.go=s.go
e.fx=e.k1=!0
return}r=e.id
q=A.a([],t.bD)
p=t.il
o=A.a([],p)
n=A.a([],t.lB)
o=new A.kk("http://www.w3.org/1999/xhtml",o,new A.fb(n))
o.bk(0)
n=A.mb(t.N)
m=A.a([],t.t)
m=new A.jh(A.t1(d),d,n,m)
m.shD(new A.a5(r))
m.a="utf-8"
m.b=!0
m.bk(0)
r=new A.dP(m,!0,!0,!1,A.mb(t.nU),new A.a0(""),new A.a0(""),new A.a0(""))
r.bk(0)
l=new A.ji(!1,r,o,q)
r.f=l
l.lu()
o=o.b
o===$&&A.b("document")
k=A.a([],p)
r=t.kU
j=A.a([],r)
i=A.q8("memory",!1)
q=t.m3.a(B.a.glQ(j))
r=A.a([],r)
$.eW.b=new A.jJ(q,i,r)
r=new A.a5("svg")
q=A.a([0],t.t)
h=new A.hp(d,q,new Uint32Array(A.mB(r.av(r))))
h.h1(r,d)
r=new A.ki(85,117,43,63,new A.a5("CDATA"),h,"svg",!0,0)
q=new A.l6(r)
q.d=t.J.a(r.ct())
r.e=!0
g=q.nX()
if(g==null||j.length!==0)A.M(A.ax("'svg' is not a valid selector: "+A.k(j),d,d))
new A.ef().iZ(0,o,g,k)
r=k.length
q=t.a
f=0
for(;f<k.length;k.length===r||(0,A.e)(k),++f)e.bd(q.a(e.e7(k[f],new A.ee(B.a8,d,d))))
$.mg.t(0,e.id,e.u())},
e7(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=null,h=t.U,g=A.a([],h),f=a.x,e=f==null?i:f.toLowerCase(),d=b.bE(j.bn(a))
if(e==="defs")j.oy(a)
else if(e!=="style")if(B.a.G(A.a(["g","svg","symbol"],t.s),e)){h=A.a([],h)
for(f=t.x,f=A.j(new A.an(a.gi8(a).a,f),!1,f.h("i.E")),s=A.v(f),f=new J.at(f,f.length,s.h("at<1>")),s=s.c;f.q();){r=f.d
B.a.H(h,j.e7(r==null?s.a(r):r,d))}B.a.H(g,h)}else if(e==="path"){q=a.b.k(0,"d")
if(q!=null&&q.length!==0)B.a.n(g,j.dS(q,d,a))}else if(e==="use")B.a.H(g,j.oz(a,d))
else if(e==="rect"){p=j.aI(a.b.k(0,"rx"))
h=a.b
if(p===0){h=j.aI(h.k(0,"width"))
o=A.qf(B.c,j.aI(a.b.k(0,"height")),h)}else{h=j.aI(h.k(0,"width"))
f=j.aI(a.b.k(0,"height"))
s=A.a([B.a2,B.aD,B.aF,B.aG],t.l)
o=new A.ed(4,0,!1,0.01,!1,0.000001,4,i,i,i,B.c,$,i,$,$,$)
o.aw(B.c,i,i)
o.eq(s,B.c)
o.h0(B.c,f,h)
o.oi(p)}o.aM(o.ao(B.d).U(0,o.ao(B.a2)))
B.a.n(g,j.bM(d.bE(j.bn(a)),o))}else if(e==="ellipse"){n=j.aI(a.b.k(0,"cx"))
m=j.aI(a.b.k(0,"cy"))
l=j.aI(a.b.k(0,"rx"))
k=j.aI(a.b.k(0,"ry"))
o=new A.dI(0,6.283185307179586,1,B.d,9,0.35,B.l,A.b_(i,0,B.c,i,0),i,i,4,0,!1,0.01,!1,0.000001,4,i,i,i,B.c,$,i,$,$,$)
o.aw(B.c,i,i)
o.al(B.c)
o.ek(l*2,!0)
o.d9(k*2,!0)
o.aM(B.j.C(0,n).T(0,B.m.C(0,m)))
B.a.n(g,j.bM(d.bE(j.bn(a)),o))}else if(e==="circle"){n=j.aI(a.b.k(0,"cx"))
m=j.aI(a.b.k(0,"cy"))
o=A.ne(B.d,B.c,j.aI(a.b.k(0,"r")))
o.aM(B.j.C(0,n).T(0,B.m.C(0,m)))
B.a.n(g,j.bM(d.bE(j.bn(a)),o))}else if(e==="polygon"||e==="polyline")B.a.n(g,j.nS(a,d))
else A.mS("Unknown SVG element "+A.k(e))
j.nr(a,A.mm(g))
return g},
dS(a,b,c){var s=A.ql(a)
if(c!=null)return this.bM(b.bE(this.bn(c)),s)
else return this.bM(b,s)},
iU(a,b){return this.dS(a,b,null)},
oz(a,b){var s,r,q,p=a.b,o=A.z(p).h("aP<1>"),n=A.j(new A.aP(p,o),!0,o.h("i.E"))
o=p.gjf(p)
s=A.j(o,!0,A.z(o).h("i.E"))
r=B.a.iB(n,new A.k2())
if(r>=0){if(!(r<s.length))return A.c(s,r)
q=s[r]}else q=null
o=q==null?null:A.a(q.split("#"),t.s)
if(o==null)o=[]
q=B.a.aB(A.cL(o,t.z),"")
o=this.k2
if(!o.ai(q))A.mS("SVG ref "+q+" not recognized")
o=o.k(0,q)
o.toString
return this.e7(o,b.bE(this.bn(a)))},
aI(a){var s,r,q,p,o,n
if(a===""||a==null||a==="none")a="0.0"
s=A.j(B.ag,!0,t.N)
s.push("+")
s.push("-")
s.push(".")
s.push("e")
s.push("E")
r=A.a([],t.s)
for(q=a.split(""),p=q.length,o=0;o<p;++o){n=q[o]
if(B.a.G(s,n))r.push(n)}return A.bH(B.a.aP(r))},
nS(a,b){var s,r,q,p,o=this,n=a.b.k(0,"points")
n.toString
for(s=n,r=0;r<10;++r){q=B.ag[r]
s=A.bk(s," "+q," L"+q)}b=b.bE(o.bn(a))
p=o.iU("M"+s,b)
return o.bM(b.bE(o.bn(a)),p)},
ii(a){var s,r,q,p,o,n
if(a===""||a==="none")return B.o
if(a==null)return null
s=A.a([3,4,6,8],t.t)
if(a==="currentcolor"){r=this.a
r===$&&A.b("color")
return r}else if(B.b.Y(a,"rgba")){r=A.a(a.split(""),t.s)
q=a.length-1
A.aG(5,q,r.length)
p=A.bu(r,5,q,t.N).aP(0).split(",")
q=p.length
if(0>=q)return A.c(p,0)
r=A.bH(p[0])
if(1>=q)return A.c(p,1)
o=A.bH(p[1])
if(2>=q)return A.c(p,2)
n=A.bH(p[2])
if(3>=q)return A.c(p,3)
return new A.N(r,o,n,A.bH(p[3]))}else if(B.b.Y(a,"rgb")){r=A.a(a.split(""),t.s)
q=a.length-1
A.aG(4,q,r.length)
p=A.bu(r,4,q,t.N).aP(0).split(",")
q=p.length
if(0>=q)return A.c(p,0)
r=A.bH(p[0])
if(1>=q)return A.c(p,1)
o=A.bH(p[1])
if(2>=q)return A.c(p,2)
return new A.N(r,o,A.bH(p[2]),1)}else if(B.b.Y(a,"#")||B.a.G(s,a.length))return A.oi(a)
else{A.mS("unimplented type of color: "+a)
return null}},
bM(a,b){b.kk(a.a,a.b,a.c)
return b},
bn(a){var s,r,q=a.b.k(0,"fill"),p=q==null?null:q.toLowerCase()
q=a.b.k(0,"stroke")
s=q==null?null:q.toLowerCase()
r=a.b.k(0,"stroke-width")
return new A.ee(this.ii(p),this.ii(s),this.aI(r))},
nr(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
if(a2.b.k(0,"x")!=null&&a2.b.k(0,"y")!=null){s=this.aI(a2.b.k(0,"x"))
r=this.aI(a2.b.k(0,"y"))
a3.aM(B.j.C(0,s).T(0,B.m.C(0,r)))}q=a2.b.k(0,"transform")
if(q==null)q=""
p=["matrix","translate","scale","rotate","skewX","skewY"]
o=A.a([],t.s)
for(n=0;n<6;++n)o.push(p[n]+"[^)]*\\)")
m=A.au(B.a.aB(o,"|")).c1(0,q)
l=A.au("[-+]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:[eE][-+]?\\d+)?")
for(o=new A.de(m.a,m.b,m.c),k=t.lu,j=t.n,i=t.b,h=t.o;o.q();){g=o.d
f=(g==null?k.a(g):g).b
if(0>=f.length)return A.c(f,0)
e=f[0].split("(")
f=e.length
if(0>=f)return A.c(e,0)
d=J.n5(e[0])
c=A.a([],j)
if(1>=f)return A.c(e,1)
f=l.c1(0,e[1])
f=new A.de(f.a,f.b,f.c)
for(;f.q();){s=f.d
b=(s==null?k.a(s):s).b
if(0>=b.length)return A.c(b,0)
b=b[0]
b.toString
c.push(A.bH(b))}switch(d){case"matrix":a=A.aX(null,A.a([c],i)).og(3,2)
h.a(new A.L(2,0,h))
f=a.a
f===$&&A.b("values")
if(2>=f.length)return A.c(f,2)
c=J.X(f[2],0)
h.a(new A.L(2,1,h))
if(2>=f.length)return A.c(f,2)
b=J.X(f[2],1)
a0=A.fl(3)
h.a(new A.L(0,0,h))
if(!(0<f.length))return A.c(f,0)
a1=J.X(f[0],0)
a0.b9(h.a(new A.L(0,0,h)),a1)
h.a(new A.L(0,1,h))
if(!(0<f.length))return A.c(f,0)
a1=J.X(f[0],1)
a0.b9(h.a(new A.L(0,1,h)),a1)
h.a(new A.L(1,0,h))
if(!(1<f.length))return A.c(f,1)
a1=J.X(f[1],0)
a0.b9(h.a(new A.L(1,0,h)),a1)
h.a(new A.L(1,1,h))
if(!(1<f.length))return A.c(f,1)
f=J.X(f[1],1)
a0.b9(h.a(new A.L(1,1,h)),f)
f=h.a(new A.L(1,0,h))
a1=a0.a
a1===$&&A.b("values")
if(!(1<a1.length))return A.c(a1,1)
a0.b9(f,J.X(a1[1],0)*-1)
f=h.a(new A.L(1,1,h))
if(!(1<a1.length))return A.c(a1,1)
a0.b9(f,J.X(a1[1],1)*-1)
f=h.a(new A.L(1,2,h))
if(!(1<a1.length))return A.c(a1,1)
a0.b9(f,J.X(a1[1],2)*-1)
f=h.a(new A.L(0,1,h))
if(!(0<a1.length))return A.c(a1,0)
a0.b9(f,J.X(a1[0],1)*-1)
f=h.a(new A.L(1,1,h))
if(!(1<a1.length))return A.c(a1,1)
a0.b9(f,J.X(a1[1],1)*-1)
f=h.a(new A.L(2,1,h))
if(2>=a1.length)return A.c(a1,2)
a0.b9(f,J.X(a1[2],1)*-1)
a3.m7(a0)
a3.aM(B.j.C(0,c).T(0,B.m.C(0,b)))
break
case"scale":f=c.length
if(f===1){if(0>=f)return A.c(c,0)
f=c[0]
a3.fI(0,new A.f(f,f,1),B.d)}else if(f===2){if(0>=f)return A.c(c,0)
b=c[0]
if(1>=f)return A.c(c,1)
a3.fI(0,new A.f(b,c[1],1),B.d)}break
case"translate":f=c.length
if(0>=f)return A.c(c,0)
s=c[0]
if(f===2){if(1>=f)return A.c(c,1)
r=c[1]}else r=0
a3.aM(B.j.C(0,s).T(0,B.m.C(0,r)))
break}}},
fz(a){var s,r,q=t.il,p=A.a([],q)
if(a.b.ai("id"))return A.a([a],q)
for(q=t.x,q=A.j(new A.an(a.gi8(a).a,q),!1,q.h("i.E")),s=A.v(q),q=new J.at(q,q.length,s.h("at<1>")),s=s.c;q.q();){r=q.d
B.a.H(p,this.fz(r==null?s.a(r):r))}return p},
oy(a){var s,r,q,p,o,n
for(s=this.fz(a),r=s.length,q=this.k2,p=0;p<s.length;s.length===r||(0,A.e)(s),++p){o=s[p]
n=o.b.k(0,"id")
n.toString
q.t(0,n,o)}},
fh(){var s,r=this
r.aM(r.ao(B.d).C(0,B.aE).C(0,-1))
if(r.gbg(r)!=null){s=r.gbg(r)
s.toString
r.kb(s)}},
sbg(a,b){this.fy=A.oh(b)},
smL(a,b){this.id=A.aq(b)},
gbg(a){return this.fy}}
A.k2.prototype={
$1(a){var s
t.K.a(a)
s=J.bj(a)
return B.b.G(s.l(a),"href")&&B.b.G(s.l(a),"xlink")},
$S:44}
A.d7.prototype={
u(){return A.qm(this)},
js(){var s=A.a(["M","L","H","V","C","S","Q","T","A","Z"],t.s),r=A.j(s,!0,t.N)
B.a.H(r,new A.G(s,t.gL.a(new A.k4()),t.gQ))
return r},
bU(){var s,r,q,p,o,n,m,l=this,k=A.au("["+B.a.aP(l.js())+"]"),j=l.fx,i=k.c1(0,j),h=t.N,g=A.z(i)
g=A.jz(i,g.h("m(i.E)").a(new A.k3()),g.h("i.E"),h)
s=A.j(g,!0,A.z(g).h("i.E"))
r=A.cL(B.b.ce(j,k),h)
for(j=A.K(s.length,0,1),i=j.length,q=null,p=0;p<j.length;j.length===i||(0,A.e)(j),++p,q=n){o=j[p]
n=B.a.k(s,o)
m=B.a.k(r,o)
l.np(n,m,q==null?"":q)}l.e_(0,3.141592653589793,B.d,B.j)},
np(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0="addCubicBezierCurveTo",a1=a3.toUpperCase(),a2=a.r
a2===$&&A.b("points")
s=a2.length!==0?B.a.gp(a2):new A.f(0,0,0)
r=a.kD(a1,a4,a3!==a3.toUpperCase(),s)
switch(a1){case"M":if(0>=r.length)return A.c(r,0)
a2=t.V
q=t.y.a(A.a([a2.a(r[0])],t.l))
B.a.H(a.r,q)
for(a2=A.cL(r,a2),q=a2.length,p=0;p<a2.length;a2.length===q||(0,A.e)(a2),++p)a.ds(a2[p])
return
case"H":case"V":case"L":for(a2=r.length,p=0;p<r.length;r.length===a2||(0,A.e)(r),++p)a.ds(r[p])
return
case"C":for(a2=A.K(r.length,0,3),q=a2.length,o=t.l,n=t.y,m=a.at,l=t.V,p=0;p<a2.length;a2.length===q||(0,A.e)(a2),++p){k=a2[p]
if(typeof k!=="number")return k.T()
j=B.a.k(r,k+0)
i=B.a.k(r,k+1)
h=B.a.k(r,k+2)
l.a(j)
l.a(i)
l.a(h)
a.aR(a0)
g=a.r
if(B.e.a6(g.length,m)===1){j=n.a(A.a([j,i,h],o))
B.a.H(a.r,j)}else{j=n.a(A.a([B.a.gp(g),j,i,h],o))
B.a.H(a.r,j)}}return
case"S":if(B.a.G(A.a(["C","S"],t.s),a5.toUpperCase())){a2=a.r
q=a2.length
o=q-2
if(!(o>=0))return A.c(a2,o)
f=a2[o]}else f=s
for(a2=A.K(r.length,0,2),q=a2.length,o=t.l,n=t.y,m=a.at,l=t.V,p=0;p<a2.length;a2.length===q||(0,A.e)(a2),++p){k=a2[p]
e=s.C(0,2).U(0,f)
j=B.a.k(r,k)
if(typeof k!=="number")return k.T()
i=k+1
h=B.a.k(r,i)
l.a(j)
l.a(h)
a.aR(a0)
g=a.r
if(B.e.a6(g.length,m)===1){j=n.a(A.a([e,j,h],o))
B.a.H(a.r,j)}else{j=n.a(A.a([B.a.gp(g),e,j,h],o))
B.a.H(a.r,j)}s=B.a.k(r,i)
f=B.a.k(r,k)}return
case"Q":for(a2=A.K(r.length,0,2),q=a2.length,o=t.l,n=t.y,m=a.at,l=t.V,p=0;p<a2.length;a2.length===q||(0,A.e)(a2),++p){k=a2[p]
j=B.a.k(r,k)
if(typeof k!=="number")return k.T()
i=B.a.k(r,k+1)
l.a(j)
l.a(i)
h=j.C(0,0.6666666666666666).T(0,B.a.gp(a.r).C(0,0.3333333333333333))
j=j.C(0,0.6666666666666666).T(0,i.C(0,0.3333333333333333))
a.aR(a0)
g=a.r
if(B.e.a6(g.length,m)===1){j=n.a(A.a([h,j,i],o))
B.a.H(a.r,j)}else{j=n.a(A.a([B.a.gp(g),h,j,i],o))
B.a.H(a.r,j)}}return
case"T":if(B.a.G(A.a(["Q","T"],t.s),a5.toUpperCase())){a2=a.r
q=a2.length
o=q-2
if(!(o>=0))return A.c(a2,o)
d=J.cM(a2[o],1.5).U(0,J.cM(B.a.gp(a.r),0.5))}else d=s
for(a2=r.length,q=t.l,o=t.y,n=a.at,m=t.V,p=0;p<r.length;r.length===a2||(0,A.e)(r),++p,d=b,s=c){c=r[p]
b=s.C(0,2).U(0,d)
m.a(c)
l=b.C(0,0.6666666666666666).T(0,B.a.gp(a.r).C(0,0.3333333333333333))
j=b.C(0,0.6666666666666666).T(0,c.C(0,0.3333333333333333))
a.aR(a0)
i=a.r
if(B.e.a6(i.length,n)===1){l=o.a(A.a([l,j,c],q))
B.a.H(a.r,l)}else{l=o.a(A.a([B.a.gp(i),l,j,c],q))
B.a.H(a.r,l)}}return
case"A":for(a2=A.K(r.length,0,3),q=a2.length,o=t.l,n=t.y,m=a.at,l=t.V,p=0;p<a2.length;a2.length===q||(0,A.e)(a2),++p){k=a2[p]
j=B.a.k(r,k)
if(typeof k!=="number")return k.T()
i=B.a.k(r,k+1)
h=B.a.k(r,k+2)
l.a(j)
l.a(i)
l.a(h)
a.aR(a0)
g=a.r
if(B.e.a6(g.length,m)===1){j=n.a(A.a([j,i,h],o))
B.a.H(a.r,j)}else{j=n.a(A.a([B.a.gp(g),j,i,h],o))
B.a.H(a.r,j)}}return
case"Z":if(!a.ig(B.a.ga3(a.r),B.a.gp(a.r))){a2=B.a.gp(a.ea(A.j(a.r,!0,t.V)))
if(0>=a2.length)return A.c(a2,0)
a.ds(a2[0])}return}},
kD(a,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=A.tC(a0),c=t.l,b=A.a([],c)
if(a==="A"){for(c=A.oN(d,2,t.W),s=c.length,r=null,q=0;q<c.length;c.length===s||(0,A.e)(c),++q){p=c[q]
if(r!=null)a2=r
if(a1){if(5>=p.length)return A.c(p,5)
o=p[5]
if(typeof o!=="number")return o.T()
B.a.t(p,5,o+a2.a)
if(6>=p.length)return A.c(p,6)
o=p[6]
if(typeof o!=="number")return o.T()
B.a.t(p,6,o+a2.b)}o=p.length
if(5>=o)return A.c(p,5)
n=p[5]
if(a2.a===n){if(6>=o)return A.c(p,6)
m=a2.b===p[6]}else m=!1
if(m)continue
m=p[0]
l=p[1]
k=p[2]
j=p[3]
i=p[4]
if(6>=o)return A.c(p,6)
B.a.H(b,A.ta(a2,m,l,k,j,i,new A.f(n,p[6],0)))
n=p.length
if(5>=n)return A.c(p,5)
i=p[5]
if(6>=n)return A.c(p,6)
r=new A.f(i,p[6],0)}return b}else if(a==="H")if(a1){c=A.a([],c)
for(s=d.length,q=0;q<d.length;d.length===s||(0,A.e)(d),++q)c.push(new A.f(d[q],0,0))
b=c
a1=!0}else{c=A.a([],c)
for(s=d.length,o=a2.b,q=0;q<d.length;d.length===s||(0,A.e)(d),++q)c.push(new A.f(d[q],o,0))
b=c
a1=!1}else if(a==="V")if(a1){c=A.a([],c)
for(s=d.length,q=0;q<d.length;d.length===s||(0,A.e)(d),++q)c.push(new A.f(0,d[q],0))
b=c
a1=!0}else{c=A.a([],c)
for(s=d.length,o=a2.a,q=0;q<d.length;d.length===s||(0,A.e)(d),++q)c.push(new A.f(o,d[q],0))
b=c
a1=!1}else{c=A.a([],c)
for(s=A.oN(d,2,t.W),o=s.length,q=0;q<s.length;s.length===o||(0,A.e)(s),++q){h=s[q]
n=h.length
if(0>=n)return A.c(h,0)
m=h[0]
if(1>=n)return A.c(h,1)
c.push(new A.f(m,h[1],0))}b=c}if(!a1)return b
if(a==="Q"||a==="S")g=2
else g=a==="C"?3:1
for(c=A.K(b.length,0,1),s=c.length,f=a2,q=0;q<c.length;c.length===s||(0,A.e)(c),++q){e=c[q]
B.a.t(b,e,B.a.k(b,e).T(0,f))
if(typeof e!=="number")return e.T()
if(B.h.a6(e+1,g)===0)f=B.a.k(b,e)}return b}}
A.k4.prototype={
$1(a){return A.aq(a).toLowerCase()},
$S:18}
A.k3.prototype={
$1(a){var s=t.lu.a(a).b
if(0>=s.length)return A.c(s,0)
s=s[0]
s.toString
return s},
$S:46}
A.ee.prototype={
bE(a){var s,r,q=a.a
if(q==null)q=this.a
s=a.b
if(s==null)s=this.b
r=a.c
return new A.ee(q,s,r==null?this.c:r)},
l(a){return"fill: "+A.k(this.a)+", stroke: "+A.k(this.b)+" "+A.k(this.c)+"pt"}}
A.eo.prototype={
u(){return A.qy(this)}}
A.bM.prototype={
u(){return A.qo(this)},
il(){var s=this,r=s.ac
B.b.e0(r)
s.ac=A.qp(r)
if(!$.bN.ai(s.a7)||!$.bN.k(0,s.a7).ai(s.ac))throw A.d(s.ac+" need to be preloaded")
r=$.bN.k(0,s.a7).k(0,s.ac)
r.toString
s.smL(0,r)
s.saT(t.y.a(A.a([],t.l)))
s.sbc(t.a.a(A.a([],t.r)))
s.bU()
s.fh()
r=s.a
r===$&&A.b("color")
s.al(r)
s.b2(0.035)},
l(a){return this.d7()+"("+this.ac+")"},
dS(a,b,c){var s=null,r=new A.eo(a,s,4,0,!1,0.01,!1,0.000001,4,s,s,s,B.c,$,s,$,$,$)
r.aw(B.c,s,s)
if(c!=null)return this.bM(b.bE(this.bn(c)),r)
else return this.bM(b,r)},
iU(a,b){return this.dS(a,b,null)},
sbg(a,b){this.af=A.oh(b)},
gbg(a){return this.af}}
A.e4.prototype={
u(){return A.q1(this)},
mq(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1="submobjects",a2=A.a([],t.nn)
for(s=a.c5,r=s.length,q=t.a,p=a.bz,o=t.s,n=t.N,m=t.h,l=t.r,k=t.j,j=0,i=0;i<s.length;s.length===r||(0,A.e)(s),++i,j=e){h=new A.bM(s[i],a.a7,!0,2,a0,"",!0,A.bd(n,m),4,0,!1,0.01,!1,0.000001,4,a0,a0,a0,B.c,$,a0,$,$,$)
h.aw(B.c,a0,a0)
g=h.r
g===$&&A.b("points")
if(g.length!==0)h.fh()
h.a=B.c
h.il()
g=h.d
g===$&&A.b(a1)
f=g.length
e=j+f+B.a.aB(A.a(p.split(" "),o),"").length
if(f===0){h.sbc(q.a(A.a([A.nQ(B.d)],l)))
g=a.d
g===$&&A.b(a1)
d=g.length
c=Math.min(j,d-1)
if(c>>>0!==c||c>=d)return A.c(g,c)
g=k.a(g[c])
h.dP(g.ao(B.j))}else{g=a.d
g===$&&A.b(a1)
A.aG(j,e,g.length)
d=A.v(g)
b=new A.aD(g,j,e,d.h("aD<1>"))
b.cf(g,j,e,d.c)
h.sbc(q.a(b.av(0)))}B.a.n(a2,h)}a.sbc(q.a(a2))},
jr(a,b,c){var s,r,q,p=new A.jA(!0,!0),o=A.a([],t.nn),n=this.d
n===$&&A.b("submobjects")
s=n.length
r=0
for(;r<n.length;n.length===s||(0,A.e)(n),++r){q=n[r]
if(q instanceof A.bM&&A.as(p.$2(a,q.ac)))o.push(q)}return o},
k8(a,b,c,d){var s,r,q,p=this.jr(a,!0,!0)
for(s=p.length,r=0;r<p.length;p.length===s||(0,A.e)(p),++r){q=p[r]
q.eh(b,!0)
q.ej(b,!0)
q.h_(b,!0)}},
k9(a){var s,r
t.fg.a(a)
for(s=a.gdE(a),s=new A.ce(s.a(),s.$ti.h("ce<1>"));s.q();){r=s.gB()
this.k8(r.a,r.b,!0,!0)}},
sor(a){this.c5=t.I.a(a)}}
A.jA.prototype={
$2(a,b){var s
if(!this.a){a=a.toLowerCase()
b=b.toLowerCase()}s=B.b.G(b,a)
return s},
$S:47}
A.fT.prototype={
kX(a){this.bd(t.a.a(A.a([this.w],t.r)))
this.eR()},
eL(a,b,c,d){var s,r
A.ii(d,t.e,"IEvent","addEventListener")
s=new A.b2(d.h("y(0)").a(c),b,d.h("b2<0>"))
r=$.dr()
t.d3.a(s)
r=r.gc3().k(0,b)
r.toString
B.a.n(r,s)
return s}}
A.dG.prototype={
eR(){var s=this
s.sl2(t.gG.a(s.eL(0,B.B,new A.iP(s),t.gn)))
s.sl3(t.m4.a(s.eL(0,B.z,new A.iQ(s),t.oJ)))
s.sl4(t.mc.a(s.eL(0,B.A,new A.iR(s),t.nB)))},
u(){return A.pI(this)},
sl2(a){this.ay=t.gG.a(a)},
sl3(a){this.ch=t.m4.a(a)},
sl4(a){this.CW=t.mc.a(a)}}
A.iP.prototype={
$1(a){var s
t.gn.a(a)
s=this.a
if(s.cx){s.w.dP(a.c)
return!0}return!1},
$S:48}
A.iQ.prototype={
$1(a){var s,r=this.a,q=r.w,p=t.oJ.a(a).c,o=p.a
if(o>=q.ao(B.u).a-0.1)if(o<=q.ao(B.j).a+0.1){o=p.b
o=o>=q.ao(B.m).b-0.1&&o<=q.ao(B.t).b+0.1
s=o}else s=!1
else s=!1
if(s){r.cx=!0
q.dP(p)
return!0}return!1},
$S:49}
A.iR.prototype={
$1(a){t.nB.a(a)
return this.a.cx=!1},
$S:50}
A.H.prototype={
gjd(){var s=this.e
if(s===$){s=A.a([],t.po)
this.sl6(s)}return s},
aw(a,b,c){var s=this,r=s.d7()
s.b=r
s.sbc(t.a.a(A.a([],t.r)))
s.f=!1
s.saT(t.y.a(A.a([],t.l)))
s.iC()
s.bU()},
l(a){return this.d7()},
d7(){var s=this.kR(0),r=A.au("^Instance of '(.*?)'$").no(s).b
if(1>=r.length)return A.c(r,1)
r=r[1]
r.toString
return r},
iC(){},
bU(){},
bd(a){var s,r,q,p,o,n=t.a
n.a(a)
if(B.a.G(a,this))throw A.d("Mobject can't contain itself")
s=A.j(a,!0,t.j)
r=this.d
r===$&&A.b("submobjects")
q=r.length
p=0
for(;p<r.length;r.length===q||(0,A.e)(r),++p){o=r[p]
if(!B.a.G(a,o))s.push(o)}this.sbc(n.a(s))},
cM(a,b,c){var s,r,q,p,o,n,m,l,k,j
t.ew.a(c)
if(b==null)b=this.ao(a)
for(s=this.fD(),r=s.length,q=t.y,p=t.l,o=0;o<s.length;s.length===r||(0,A.e)(s),++o){n=s[o]
m=A.a([],p)
l=n.r
l===$&&A.b("points")
k=l.length
j=0
for(;j<l.length;l.length===k||(0,A.e)(l),++j)m.push(J.lW(c.$1(J.pk(l[j],b)),b))
n.saT(q.a(m))}},
i1(a){return this.cM(B.d,null,a)},
u(){return A.q3(this)},
jc(a,b){var s,r,q,p=this
p.f===$&&A.b("updatingSuspended")
for(s=p.gjd(),r=s.length,q=0;q<s.length;s.length===r||(0,A.e)(s),++q)s[q].$2(p,a)
s=p.d
s===$&&A.b("submobjects")
r=s.length
q=0
for(;q<s.length;s.length===r||(0,A.e)(s),++q)s[q].jc(a,!0)},
jb(a){return this.jc(a,!0)},
c0(a){t.k5.a(a)
B.a.n(this.gjd(),a)
this.jb(0)},
aM(a){return this.i1(new A.jR(a))},
fI(a,b,c){return this.cM(B.d,c,new A.jQ(b))},
ed(a,b,c){return this.cM(b,c,new A.jP(a))},
fJ(a,b){return this.ed(a,B.d,b)},
b2(a){return this.ed(a,B.d,null)},
e_(a,b,c,d){this.cM(B.d,c,new A.jO(A.tx(b,d).gja()))},
oh(a,b,c){return this.e_(a,b,c,B.l)},
fp(a,b){return this.e_(a,b,null,B.l)},
kC(a,b,c,d){return this.cM(c,d,new A.jS(b,a))},
m7(a){var s={},r=A.fl(3)
s.a=r
s.a=r.cs(0,new A.jK(a))
this.i1(new A.jL(s))},
iQ(a,b,c){return this.iR(a.ao(B.d.T(0,c)),B.d,b,c)},
iR(a,b,c,d){this.aM(a.U(0,this.ao(b.U(0,d))).T(0,d.C(0,c)).C(0,B.aE))},
dR(a,b,c){return this.iR(a,B.d,b,c)},
j4(a,b,c,d,e){var s,r=this.nC(b)
if(r===0)return
s=a/r
if(e)this.kC(s,b,c,d)
else this.ed(s,c,d)},
ek(a,b){this.j4(a,0,B.d,null,b)},
d9(a,b){this.j4(a,1,B.d,null,b)},
kb(a){return this.d9(a,!1)},
dP(a){this.aM(a.U(0,this.ao(B.d)).C(0,new A.f(1,1,1)))},
cw(a,b){var s,r=this,q=r.bp(),p=r.b7(),o=p.U(0,q)
if(q.W(0,p))throw A.d("Cannot position endpoints of a closed loop")
s=b.U(0,a)
r.fJ(Math.sqrt(s.bD())/Math.sqrt(o.bD()),q)
r.oh(0,s.cL()-o.cL(),q)
r.aM(a.U(0,q))},
bW(a,b){var s,r,q=this.d
q===$&&A.b("submobjects")
s=q.length
r=0
for(;r<q.length;q.length===s||(0,A.e)(q),++r)q[r].bW(a,!0)
this.a=a},
cT(a,b){var s,r,q=this.d
q===$&&A.b("submobjects")
s=q.length
r=0
for(;r<q.length;q.length===s||(0,A.e)(q),++r)q[r].cT(a,!0)},
it(a){return this.cT(a,!0)},
bV(){var s,r,q,p=A.a([this],t.r),o=this.d
o===$&&A.b("submobjects")
s=o.length
r=0
for(;r<o.length;o.length===s||(0,A.e)(o),++r)B.a.H(p,o[r].bV())
q=A.ma(p,t.j)
return A.j(q,!0,A.z(q).h("aT.E"))},
fD(){var s=this.bV(),r=A.v(s),q=r.h("am<1>")
return A.j(new A.am(s,r.h("y(1)").a(new A.jM()),q),!0,q.h("i.E"))},
fA(){var s,r,q,p,o=A.a([],t.l)
for(s=this.fD(),r=s.length,q=0;q<s.length;s.length===r||(0,A.e)(s),++q){p=s[q].r
p===$&&A.b("points")
B.a.H(o,p)}return o},
e9(){return this.fA()},
d6(a,b,c){var s,r,q
t.fA.a(c)
if(c==null)c=this.e9()
s=A.a([],t.n)
for(r=c.length,q=0;q<c.length;c.length===r||(0,A.e)(c),++q)s.push(c[q].aS(a))
if(b<0)return B.a.b0(s,B.N)
else if(b===0)return(B.a.b0(s,B.N)+B.a.b0(s,B.O))/2
else return B.a.b0(s,B.O)},
jn(a,b){return this.d6(a,b,null)},
ao(a){var s=this,r=s.e9()
if(r.length===0)return B.d
return new A.f(s.d6(0,B.h.bl(a.a),r),s.d6(1,B.h.bl(a.b),r),s.d6(2,B.h.bl(a.c),r))},
nC(a){var s,r,q,p=this.fA()
if(p.length===0)return 1
s=A.v(p)
r=new A.G(p,s.h("F(1)").a(new A.jN(a)),s.h("G<1,F>"))
q=r.b0(0,B.N)
return r.b0(0,B.O)-q},
e5(a,b){return this.jn(a,B.h.bl(B.d.aS(a)))},
ah(){return new A.f(this.e5(0,null),this.e5(1,null),this.e5(2,null))},
bp(){this.aR("getStart")
var s=this.r
s===$&&A.b("points")
return B.a.ga3(s)},
b7(){this.aR("getEnd")
var s=this.r
s===$&&A.b("points")
return B.a.gp(s)},
gm(a){var s=A.a([],t.r),r=this.r
r===$&&A.b("points")
if(r.length!==0)s.push(this)
r=this.d
r===$&&A.b("submobjects")
B.a.H(s,r)
return s.length},
en(a){var s=A.a([],t.r),r=this.r
r===$&&A.b("points")
if(r.length!==0)s.push(this)
r=this.d
r===$&&A.b("submobjects")
B.a.H(s,r)
return s},
hY(a){var s,r,q,p,o,n=this,m="points",l="submobjects",k=n.r
k===$&&A.b(m)
if(k.length===0){k=a.r
k===$&&A.b(m)
k=k.length!==0}else k=!1
if(k)a.iY()
k=a.r
k===$&&A.b(m)
if(k.length===0&&n.r.length!==0)n.iY()
s=n.en(0).length
r=a.en(0).length
n.hS(Math.max(0,r-s))
a.hS(Math.max(0,s-r))
n.hZ(a)
k=n.d
k===$&&A.b(l)
q=a.d
q===$&&A.b(l)
q=new A.aB(A.a([k,q],t.i7),t.oS)
q=q.gI(q)
for(;q.q();){p=q.b
if(p==null)p=A.M(A.aH("No element"))
k=p.length
if(0>=k)return A.c(p,0)
o=p[0]
if(1>=k)return A.c(p,1)
o.hY(p[1])}},
fE(){throw A.d("getPointMobject not implemented for "+A.k(this.gjq())+"()")},
hZ(a){var s,r,q=this.r
q===$&&A.b("points")
s=q.length
q=a.r
q===$&&A.b("points")
r=q.length
if(s<r)this.i_(a)
else if(s>r)a.i_(this)},
i_(a){throw A.d("Not implemented")},
iY(){var s=this.u(),r=t.r,q=t.a
s.sbc(q.a(A.a([],r)))
this.saT(t.y.a(A.a([],t.l)))
this.bd(q.a(A.a([s],r)))},
hS(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
if(a2===0)return
s=a1.en(0).length
if(s===0){r=A.a([],t.r)
for(q=A.K(a2,0,1),p=q.length,o=0;o<q.length;q.length===p||(0,A.e)(q),++o)r.push(a1.fE())
a1.sbc(t.a.a(r))}n=s+a2
r=t.t
q=A.a([],r)
for(p=A.K(n,0,1),m=p.length,o=0;o<p.length;p.length===m||(0,A.e)(p),++o){l=p[o]
if(typeof l!=="number")return l.C()
q.push(B.h.aV(l*s,n))}p=A.a([],r)
for(m=A.K(s,0,1),k=m.length,j=t.S,o=0;o<m.length;m.length===k||(0,A.e)(m),++o){i=m[o]
h=A.a([],r)
for(g=q.length,f=J.bj(i),e=0;e<q.length;q.length===g||(0,A.e)(q),++e)if(f.W(i,q[e]))h.push(1)
else h.push(0)
p.push(A.lS(h,j))}d=A.a([],t.r)
r=a1.d
r===$&&A.b("submobjects")
p=new A.aB(A.a([r,p],t.bo),t.c2)
p=p.gI(p)
r=t.j
for(;p.q();){c=p.b
if(c==null)c=A.M(A.aH("No element"))
q=c.length
if(0>=q)return A.c(c,0)
b=r.a(c[0])
if(1>=q)return A.c(c,1)
a=A.a1(c[1])
B.a.n(d,b)
for(q=A.K(a,1,1),m=q.length,o=0;o<q.length;q.length===m||(0,A.e)(q),++o){a0=b.u()
a0.it(1)
B.a.n(d,a0)}}a1.sbc(t.a.a(d))},
iI(a,b,c){},
aY(a){var s,r,q,p,o,n,m
this.hY(a)
for(s=new A.aB(A.a([this.bV(),a.bV()],t.i7),t.oS),s=s.gI(s),r=t.V,q=t.y;s.q();){p=s.b
if(p==null)p=A.M(A.aH("No element"))
o=p.length
if(0>=o)return A.c(p,0)
n=p[0]
if(1>=o)return A.c(p,1)
m=p[1]
o=m.r
o===$&&A.b("points")
n.saT(q.a(A.j(o,!0,r)))
n.iI(n,m,1)}},
aR(a){var s=this.r
s===$&&A.b("points")
if(s.length!==0)return
throw A.d("Cannot call Mobject."+a+" , the mobject doesn't have any points")},
sbc(a){this.d=t.a.a(a)},
sl6(a){this.e=t.le.a(a)},
saT(a){this.r=t.y.a(a)}}
A.jR.prototype={
$1(a){return a.T(0,this.a)},
$S:4}
A.jQ.prototype={
$1(a){return a.C(0,this.a)},
$S:4}
A.jP.prototype={
$1(a){return a.C(0,this.a)},
$S:4}
A.jO.prototype={
$1(a){return a.c8(this.a)},
$S:4}
A.jS.prototype={
$1(a){var s=this.a
return a.oK(s,a.aS(s)*this.b)},
$S:4}
A.jK.prototype={
$2(a,b){var s,r,q,p
t.o.a(b)
s=b.a
r=this.a
q=r.b
q===$&&A.b("shape")
p=q.a
if(typeof s!=="number")return s.e3()
if(typeof p!=="number")return A.bw(p)
if(s<p){s=b.b
q=q.b
if(typeof s!=="number")return s.e3()
if(typeof q!=="number")return A.bw(q)
q=s>=q
s=q}else s=!0
return s?a:r.bG(b)},
$S:5}
A.jL.prototype={
$1(a){return a.c8(this.a.a)},
$S:4}
A.jM.prototype={
$1(a){var s=t.j.a(a).r
s===$&&A.b("points")
return s.length>0},
$S:13}
A.jN.prototype={
$1(a){return t.V.a(a).aS(this.a)},
$S:24}
A.R.prototype={
u(){return A.qI(this)},
iC(){var s=this,r=s.ax
if(r==null){r=s.a
r===$&&A.b("color")
r=A.a([r],t.O)}s.ka(r)
r=s.ay
if(r==null){r=s.a
r===$&&A.b("color")
r=A.a([r],t.O)}s.ki(r,s.gaE())
s.k7(s.ch,s.x)},
cE(a,b,c){var s,r,q,p,o,n=this
t.q.a(b)
s=t.O
r=A.a([],s)
if(b!=null)B.a.H(r,b)
if(a!=null)r.push(a)
if(c)for(q=n.ec(),p=q.length,o=0;o<q.length;q.length===p||(0,A.e)(q),++o)q[o].fN(r,!1)
if(r.length!==0){if(n.ax==null)n.sc6(r)
q=n.ax
q.toString
q=J.W(q)
p=r.length
if(q<p){q=n.ax
q.toString
n.sc6(A.cK(q,p,t.G))}else{q=n.ax
q.toString
if(p<J.W(q)){q=n.ax
q.toString
n.sc6(A.cK(r,J.W(q),t.G))}}s=A.a([],s)
q=n.ax
q.toString
q=A.K(J.W(q),0,1)
p=q.length
o=0
for(;o<q.length;q.length===p||(0,A.e)(q),++o)s.push(B.a.k(r,q[o]))
n.sc6(s)}},
eh(a,b){return this.cE(a,null,b)},
fN(a,b){return this.cE(null,a,b)},
ka(a){return this.cE(null,a,!0)},
fM(a){return this.cE(a,null,!0)},
bt(a,b,c,d,e){var s,r,q,p,o,n=this
t.q.a(c)
s=t.O
r=A.a([],s)
if(c!=null)B.a.H(r,c)
if(b!=null)r.push(b)
if(d)for(q=n.ec(),p=q.length,o=0;o<q.length;q.length===p||(0,A.e)(q),++o)q[o].kj(a,r,!1,e)
if(r.length!==0)if(a){if(n.ch==null)n.scn(r)
q=n.ch
q.toString
q=J.W(q)
p=r.length
if(q<p){q=n.ch
q.toString
n.scn(A.cK(q,p,t.G))}else{q=n.ch
q.toString
if(p<J.W(q)){q=n.ch
q.toString
n.scn(A.cK(r,J.W(q),t.G))}}s=A.a([],s)
q=n.ay
q.toString
q=A.K(J.W(q),0,1)
p=q.length
o=0
for(;o<q.length;q.length===p||(0,A.e)(q),++o)s.push(B.a.k(r,q[o]))
n.sbJ(s)}else{if(n.ay==null)n.sbJ(r)
q=n.ay
q.toString
q=J.W(q)
p=r.length
if(q<p){q=n.ay
q.toString
n.sbJ(A.cK(q,p,t.G))}else{q=n.ay
q.toString
if(p<J.W(q)){q=n.ay
q.toString
n.sbJ(A.cK(r,J.W(q),t.G))}}s=A.a([],s)
q=n.ay
q.toString
q=A.K(J.W(q),0,1)
p=q.length
o=0
for(;o<q.length;q.length===p||(0,A.e)(q),++o)s.push(B.a.k(r,q[o]))
n.sbJ(s)}if(e!=null)if(a)n.x=e
else n.saE(e)},
ej(a,b){return this.bt(!1,a,null,b,null)},
kj(a,b,c,d){return this.bt(a,null,b,c,d)},
kh(a,b){return this.bt(!1,null,a,b,null)},
ki(a,b){return this.bt(!1,null,a,!0,b)},
ke(a){return this.bt(!1,a,null,!0,null)},
kf(a){return this.bt(!1,null,null,!0,a)},
kg(a,b){return this.bt(!1,a,null,!0,b)},
eg(a,b,c,d){return this.bt(!0,a,t.q.a(b),c,d)},
k6(a,b){return this.eg(null,a,b,null)},
k7(a,b){return this.eg(null,a,!0,b)},
fP(a,b){return this.kl(a.d,a.e,b,a.a,a.b,a.c)},
km(a){return this.fP(a,!0)},
fO(a,b,c,d,e,f,g,h){var s=t.q
s.a(e)
s.a(g)
s.a(a)
this.cE(d,e,c)
this.bt(!1,f,g,c,h)
this.eg(null,a,c,b)},
kl(a,b,c,d,e,f){return this.fO(a,b,c,null,d,null,e,f)},
kk(a,b,c){return this.fO(null,null,!0,a,null,b,null,c)},
fB(){var s=J.X(this.bo(),0)
return s},
bW(a,b){this.eh(a,!0)
this.ej(a,!0)
this.h_(a,!0)},
al(a){return this.bW(a,!0)},
iM(a,b){var s,r,q="submobjects",p="removeWhere",o=a.bo(),n=a.cD(),m=a.gaE(),l=a.bq(!0),k=a.x
this.fP(new A.et(o,n,m,l,k),!1)
o=this.d
o===$&&A.b(q)
n=a.d
n===$&&A.b(q)
if(o.length===0)return
else if(n.length===0)s=A.a([a],t.r)
else s=n
n=A.v(o).h("y(1)").a(new A.kD())
if(!!o.fixed$length)A.M(A.S(p))
B.a.eI(o,n,!0)
n=A.v(s).h("y(1)").a(new A.kE())
if(!!s.fixed$length)A.M(A.S(p))
B.a.eI(s,n,!0)
for(n=t.j,n=A.ts(o,s,n,n),n=A.fY([n.a,n.b],!1,t.z),n=new A.aB(new A.aL(n,A.v(n).h("aL<1,n<R>>")),t.pn),n=n.gI(n);n.q();){r=n.b
if(r==null)r=A.M(A.aH("No element"))
o=r.length
if(0>=o)return A.c(r,0)
m=r[0]
if(1>=o)return A.c(r,1)
m.iM(r[1],!0)}},
iL(a){return this.iM(a,!0)},
cT(a,b){var s,r,q,p=this,o=1-a,n=t.O,m=A.a([],n)
for(s=J.ab(p.bo());s.q();){r=s.gB()
q=r.d
m.push(new A.N(r.a,r.b,r.c,q*o))}p.fN(m,!0)
m=A.a([],n)
for(s=J.ab(p.cD());s.q();){r=s.gB()
q=r.d
m.push(new A.N(r.a,r.b,r.c,q*o))}p.kh(m,!0)
n=A.a([],n)
for(m=J.ab(p.bq(!0));m.q();){s=m.gB()
r=s.d
n.push(new A.N(s.a,s.b,s.c,r*o))}p.k6(n,!0)
p.kP(a,!0)},
it(a){return this.cT(a,!0)},
bo(){var s=this.ax
return s==null?A.a([B.o],t.O):s},
bq(a){var s=a?this.ch:this.ay
return s==null||J.f8(s)?A.a([B.o],t.O):s},
cD(){return this.bq(!1)},
jo(){var s,r,q,p,o,n=this.ao(B.d),m=A.a([],t.b)
for(s=[B.j,B.t,B.l],r=t.n,q=0;q<3;++q){p=this.ao(s[q]).U(0,n)
m.push(A.a([p.a,p.b,p.c],r))}o=B.j.c8(A.aX(null,m).gja())
return new A.L(n.U(0,o),n.T(0,o),t.iu)},
fL(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=t.y
g.a(a)
g.a(b)
g.a(c)
g.a(d)
s=h.at
r=a.length
q=A.a([],t.l)
for(r=A.K(s*r,0,1),p=r.length,o=0;o<r.length;r.length===p||(0,A.e)(r),++o)q.push(B.d)
h.saT(g.a(q))
n=A.a([a,b,c,d],t.Z)
for(g=A.K(s,0,1),r=g.length,q=t.S,o=0;o<g.length;g.length===r||(0,A.e)(g),++o){m=g[o]
l=B.a.k(n,m)
p=h.r
p===$&&A.b("points")
for(p=A.ij(A.K(p.length,m,s),q),k=p.length,j=0;j<p.length;p.length===k||(0,A.e)(p),++j){i=p[j]
B.a.t(h.r,i.b,l[B.e.a6(i.a,l.length)])}}},
lR(a,b,c){var s,r,q,p=this
p.aR("addCubicBezierCurveTo")
s=p.r
s===$&&A.b("points")
r=t.l
q=t.y
if(B.e.a6(s.length,p.at)===1){s=q.a(A.a([a,b,c],r))
B.a.H(p.r,s)}else{s=q.a(A.a([B.a.gp(s),a,b,c],r))
B.a.H(p.r,s)}},
ds(a){var s,r,q,p,o,n,m=[]
for(s=A.il(this.at,1,0).iz(),r=s.length,q=0;q<s.length;s.length===r||(0,A.e)(s),++q){p=s[q]
o=this.r
o===$&&A.b("points")
m.push(B.a.gp(o).C(0,1-p).T(0,a.C(0,p)))}s=m.length
if(1>=s)return A.c(m,1)
r=t.V
o=r.a(m[1])
if(2>=s)return A.c(m,2)
n=r.a(m[2])
if(3>=s)return A.c(m,3)
return this.lR(o,n,r.a(m[3]))},
ei(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
t.y.a(a)
s=A.il(this.at,1,0).b1(0)
r=t.V
q=A.n6(A.cL(a,r))
p=A.n6(A.mV(a,r))
r=A.a([],t.fp)
for(o=s.length,n=0;n<s.length;s.length===o||(0,A.e)(s),++n){m=s[n]
r.push(p.C(0,1-m).T(0,q.C(0,m)))}o=A.a([],t.Z)
for(l=r.length,k=t.l,n=0;n<r.length;r.length===l||(0,A.e)(r),++n){j=r[n]
i=A.a([],k)
h=j.a
h===$&&A.b("values")
g=h.length
f=0
for(;f<h.length;h.length===g||(0,A.e)(h),++f){e=h[f]
d=J.Z(e)
i.push(new A.f(d.k(e,0),d.k(e,1),d.k(e,2)))}o.push(i)}r=o.length
if(0>=r)return A.c(o,0)
l=o[0]
if(1>=r)return A.c(o,1)
k=o[1]
if(2>=r)return A.c(o,2)
i=o[2]
if(3>=r)return A.c(o,3)
this.fL(l,k,i,o[3])},
eY(a,b){var s=this.as,r=b.a
if(Math.abs(a.a-r)>s+0.00001*Math.abs(r))return!1
r=b.b
if(Math.abs(a.b-r)>s+0.00001*Math.abs(r))return!1
return!0},
ig(a,b){var s
if(!this.eY(a,b))return!1
s=b.c
if(Math.abs(a.c-s)>this.as+0.00001*Math.abs(s))return!1
return!0},
e4(a){var s,r,q,p,o,n,m,l={}
l.a=a
t.y.a(a)
l.a=a
s=A.jw(a,new A.kx(l,B.e.a6(J.W(a),this.at)),t.V)
l.a=A.j(s,!0,s.$ti.h("i.E"))
s=A.a([],t.ez)
for(r=A.K(J.W(l.a),0,4),q=r.length,p=t.cn,o=0;o<r.length;r.length===q||(0,A.e)(r),++o){n=r[o]
m=l.a
if(typeof n!=="number")return n.T()
s.push(new A.db(J.X(m,n+0),J.X(l.a,n+1),J.X(l.a,n+2),J.X(l.a,n+3),p))}return s},
hj(a,b){var s,r,q,p,o,n,m,l,k
t.y.a(a)
t.gw.a(b)
s=this.at
r=A.K(a.length,s,s)
q=A.v(r)
q=A.j(new A.am(r,q.h("y(1)").a(b),q.h("am<1>")),!0,t.S)
q.push(a.length)
r=A.a([0],t.t)
B.a.H(r,q)
p=A.a([],t.Z)
for(r=new A.aB(A.a([r,q],t.fC),t.lb),r=r.gI(r),q=A.v(a),o=q.c,q=q.h("aD<1>");r.q();){n=r.b
if(n==null)n=A.M(A.aH("No element"))
if(1>=n.length)return A.c(n,1)
m=n[1]
l=n[0]
if(typeof m!=="number")return m.U()
if(typeof l!=="number")return A.bw(l)
if(m-l>=s){A.a1(l)
A.a1(m)
A.aG(l,m,a.length)
k=new A.aD(a,l,m,q)
k.cf(a,l,m,o)
p.push(k.av(0))}}return p},
ea(a){t.y.a(a)
return this.hj(a,new A.kA(this,a))},
jv(a){t.y.a(a)
return this.hj(a,new A.kz(this,a))},
dT(a){var s,r,q,p,o=this.r
o===$&&A.b("points")
s=this.at
r=A.mM(0,B.e.aV(o.length,s),a)
q=r.a
o=this.r
p=s*q
s*=q+1
A.aG(p,s,o.length)
return A.mH(A.bu(o,p,s,A.v(o).c).av(0)).$1(r.b)},
eD(a){var s=this.r
s===$&&A.b("points")
s=A.jw(s,new A.kt(this,a),t.V)
return A.j(s,!0,s.$ti.h("i.E"))},
jl(){var s=this,r=s.r
r===$&&A.b("points")
if(r.length===1)return r
r=t.b5
r=A.nl(A.j(new A.aB(A.a([s.eD(0),s.eD(s.at-1)],t.Z),r),!0,r.h("i.E")),t.V)
return A.j(r,!0,r.$ti.h("i.E"))},
e9(){var s,r,q,p=A.a([],t.l)
for(s=this.ec(),r=s.length,q=0;q<s.length;s.length===r||(0,A.e)(s),++q)B.a.H(p,s[q].jl())
return p},
jm(){var s,r,q,p,o,n,m=this.r
m===$&&A.b("points")
s=4*B.e.aV(m.length,this.at)+1
m=t.l
r=A.a([],m)
for(q=A.il(s,1,0).b1(0),p=q.length,o=0;o<q.length;q.length===p||(0,A.e)(q),++o)r.push(this.dT(q[o]))
m=A.a([],m)
for(q=A.K(s-1,0,1),p=q.length,o=0;o<q.length;q.length===p||(0,A.e)(q),++o){n=q[o]
if(typeof n!=="number")return n.T()
m.push(B.a.k(r,n+1).U(0,B.a.k(r,n)))}r=t.aQ
return A.lS(A.j(new A.G(m,t.eL.a(new A.ky()),r),!0,r.h("B.E")),t.W)},
hZ(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1="points"
t.bX.a(a2)
a0.m4(a2)
s=a0.r
s===$&&A.b(a1)
s=s.length
r=a2.r
r===$&&A.b(a1)
if(s===r.length)return
for(s=[a0,a2],r=t.l,q=t.y,p=0;p<2;++p){o=s[p]
n=o.r
n===$&&A.b(a1)
if(n.length===0){n=q.a(A.a([o.ao(B.d)],r))
B.a.H(o.r,n)}n=o.r
if(B.e.a6(n.length,o.at)===1)o.ds(B.a.gp(n))}s=t.V
m=a0.ea(A.j(a0.r,!0,s))
l=a2.ea(A.j(a2.r,!0,s))
k=Math.max(m.length,l.length)
j=A.a([],r)
i=A.a([],r)
h=a0.at
g=new A.kw(h)
for(s=A.K(k,0,1),r=s.length,p=0;p<s.length;s.length===r||(0,A.e)(s),++p){f=s[p]
e=g.$2(m,f)
d=g.$2(l,f)
n=J.Z(d)
c=J.Z(e)
b=Math.max(0,B.e.aV(n.gm(d)-c.gm(e),h))
a=Math.max(0,B.e.aV(c.gm(e)-n.gm(d),h))
e=a0.fe(b,e)
d=a0.fe(a,d)
B.a.H(j,e)
B.a.H(i,d)}a0.saT(q.a(j))
a2.saT(q.a(i))},
fe(a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6="No element"
t.y.a(a8)
if(a8.length===1){s=A.a([],t.l)
for(r=A.K(this.at*a7,0,1),q=r.length,p=0;p<r.length;r.length===q||(0,A.e)(r),++p)B.a.H(s,a8)
return s}o=this.e4(a8)
n=o.length
m=n+a7
s=t.t
r=A.a([],s)
for(q=A.K(m,0,1),l=q.length,p=0;p<q.length;q.length===l||(0,A.e)(q),++p){k=q[p]
if(typeof k!=="number")return k.C()
r.push(B.h.aV(k*n,m))}q=A.a([],s)
for(l=A.K(n,0,1),j=l.length,i=t.S,p=0;p<l.length;l.length===j||(0,A.e)(l),++p){k=l[p]
h=A.a([],s)
for(g=r.length,f=J.bj(k),e=0;e<r.length;r.length===g||(0,A.e)(r),++e)h.push(f.W(k,r[e])?1:0)
q.push(A.lS(h,i))}d=A.a([],t.l)
for(s=new A.aB(A.a([o,q],t.bo),t.c2),s=s.gI(s),r=t.W,q=t.b,l=t.lx,j=t.z,i=t.cn;s.q();){c=s.b
if(c==null)c=A.M(A.aH(a6))
h=c.length
if(0>=h)return A.c(c,0)
b=i.a(c[0])
if(1>=h)return A.c(c,1)
a=A.il(A.a1(c[1])+1,1,0).b1(0)
for(h=new A.aB(A.a([a,A.cL(a,r)],q),l),h=h.gI(h),g=b.a,f=b.b,a0=b.c,a1=b.d;h.q();){a2=h.b
if(a2==null)a2=A.M(A.aH(a6))
a3=A.fY([g,f,a0,a1],!1,j)
a4=a2.length
if(0>=a4)return A.c(a2,0)
a5=a2[0]
if(1>=a4)return A.c(a2,1)
B.a.H(d,A.lP(new A.aL(a3,A.v(a3).h("aL<1,f>")),a5,a2[1]))}}return d},
m4(a){var s,r,q,p,o,n,m,l,k=new A.ku(),j=new A.kv()
for(s=["fillColors","strokeColors","backgroundStrokeColors"],r=t.G,q=0;q<3;++q){p=s[q]
o=k.$2(p,this)
n=k.$2(p,a)
m=J.Z(o)
l=J.Z(n)
if(m.gm(o)>l.gm(n))j.$3(p,a,A.cK(n,m.gm(o),r))
else if(l.gm(n)>m.gm(o))j.$3(p,this,A.cK(o,l.gm(n),r))}},
fE(){var s=this.ao(B.d),r=A.nQ(s)
r.iL(this)
return r},
iI(a,b,c){var s,r=this,q=t.bX
q.a(a)
q.a(b)
r.sc6(A.mO(a.bo(),b.bo(),c))
r.sbJ(A.mO(a.cD(),b.cD(),c))
r.scn(A.mO(a.bq(!0),b.bq(!0),c))
q=t.W
r.saE(A.oP(a.gaE(),b.gaE(),c,q))
r.sme(A.oP(a.x,b.x,c,q))
s=new A.kC()
if(c===1){q=b.ax
r.sc6(q!=null?s.$1(q):null)
q=b.ay
r.sbJ(q!=null?s.$1(q):null)
q=b.ch
r.scn(q!=null?s.$1(q):null)
r.saE(b.gaE())
r.x=b.x}},
nR(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e="points"
if(b<=0&&c>=1){s=a.r
s===$&&A.b(e)
f.saT(t.y.a(A.j(s,!0,t.V)))
return}s=a.r
s===$&&A.b(e)
r=t.y
q=a.e4(r.a(A.j(s,!0,t.V)))
p=q.length
o=A.mM(0,p,b)
n=A.mM(0,p,c)
m=o.a
l=o.b
k=n.a
j=n.b
f.saT(r.a(A.a([],t.l)))
if(p===0)return
s=q.length
if(m===k){if(m>>>0!==m||m>=s)return A.c(q,m)
s=J.f9(q[m])
s=r.a(A.lP(new A.aL(s,A.v(s).h("aL<1,f>")),l,j))
r=f.r
r===$&&A.b(e)
B.a.H(r,s)}else{if(m>>>0!==m||m>=s)return A.c(q,m)
s=J.f9(q[m])
s=r.a(A.lP(new A.aL(s,A.v(s).h("aL<1,f>")),l,1))
i=f.r
i===$&&A.b(e)
B.a.H(i,s)
for(s=m+1,A.aG(s,k,q.length),s=A.bu(q,s,k,A.v(q).c),i=s.$ti,s=new A.J(s,s.gm(s),i.h("J<B.E>")),h=t.z,i=i.h("B.E");s.q();){g=s.d
if(g==null)g=i.a(g)
g=A.fY([g.a,g.b,g.c,g.d],!1,h)
g=r.a(new A.aL(g,A.v(g).h("aL<1,f>")))
B.a.H(f.r,g)}if(k>>>0!==k||k>=q.length)return A.c(q,k)
s=J.f9(q[k])
s=r.a(A.lP(new A.aL(s,A.v(s).h("aL<1,f>")),0,j))
B.a.H(f.r,s)}},
ec(){var s,r,q,p,o=A.a([],t.U)
for(s=this.bV(),r=s.length,q=0;q<s.length;s.length===r||(0,A.e)(s),++q){p=s[q]
if(p instanceof A.R)o.push(p)}return o},
saE(a){this.w=A.bU(a)},
sme(a){this.x=A.bU(a)},
sc6(a){this.ax=t.q.a(a)},
sbJ(a){this.ay=t.q.a(a)},
scn(a){this.ch=t.q.a(a)},
gaE(){return this.w},
gdv(){return this.y}}
A.a8.prototype={
$1(a){return t.G.a(a).u()},
$S:8}
A.a9.prototype={
$1(a){return t.G.a(a).u()},
$S:8}
A.aa.prototype={
$1(a){return t.G.a(a).u()},
$S:8}
A.kD.prototype={
$1(a){return!(t.j.a(a) instanceof A.R)},
$S:13}
A.kE.prototype={
$1(a){return!(t.j.a(a) instanceof A.R)},
$S:13}
A.kx.prototype={
$2(a,b){t.V.a(b)
return a<J.W(this.a.a)-this.b},
$S:25}
A.kA.prototype={
$1(a){var s,r,q
A.a1(a)
s=this.b
r=a-1
q=s.length
if(!(r>=0&&r<q))return A.c(s,r)
r=s[r]
if(!(a>=0&&a<q))return A.c(s,a)
return!this.a.ig(r,s[a])},
$S:11}
A.kz.prototype={
$1(a){var s,r,q
A.a1(a)
s=this.b
r=a-1
q=s.length
if(!(r>=0&&r<q))return A.c(s,r)
r=s[r]
if(!(a>=0&&a<q))return A.c(s,a)
return!this.a.eY(r,s[a])},
$S:11}
A.kt.prototype={
$2(a,b){t.V.a(b)
return B.e.a6(a,this.a.at)===this.b},
$S:25}
A.ky.prototype={
$1(a){return Math.sqrt(t.V.a(a).bD())},
$S:24}
A.kw.prototype={
$2(a,b){var s,r,q,p
t.ls.a(a)
s=a.length
if(b>=s){s=A.a([],t.l)
for(r=A.K(this.a,0,1),q=r.length,p=0;p<r.length;r.length===q||(0,A.e)(r),++p)s.push(B.a.gp(B.a.gp(a)))
return s}if(!(b>=0))return A.c(a,b)
return a[b]},
$S:57}
A.ku.prototype={
$2(a,b){switch(a){case"fillColors":return b.bo()
case"strokeColors":return b.cD()
case"backgroundStrokeColors":return b.bq(!1)
default:throw A.d(u.v+a)}},
$S:58}
A.kv.prototype={
$3(a,b,c){t.ev.a(c)
switch(a){case"fillColors":b.sc6(c)
break
case"strokeColors":b.sbJ(c)
break
case"backgroundStrokeColors":b.scn(c)
break
default:throw A.d(u.v+a)}},
$S:59}
A.kC.prototype={
$1(a){var s=t.G
return A.j(J.x(t.ev.a(a),new A.kB(),s),!0,s)},
$S:91}
A.kB.prototype={
$1(a){return t.G.a(a).u()},
$S:8}
A.et.prototype={}
A.ca.prototype={
h2(a){var s=a==null?A.a([],t.r):a
this.bd(t.a.a(s))},
u(){return A.qH(this)}}
A.eu.prototype={
u(){return A.qJ(this)}}
A.dt.prototype={
kn(a){this.d=a}}
A.ft.prototype={
fo(a){var s,r,q=this.d
q===$&&A.b("display")
s=q.b
s===$&&A.b("camera")
r=q.dt(a)
q=this.e
q===$&&A.b("ctx")
B.q.sfb(q,r.d4())
q=s.c
s=s.d
this.e.fillRect(0-q/2,0-s/2,q,s)},
oe(a){var s,r,q,p,o,n,m,l,k=this,j=a.r
j===$&&A.b("points")
j=t.y.a(A.j(j,!0,t.V))
s=k.d
s===$&&A.b("display")
s=s.b
s===$&&A.b("camera")
r=s.j9(a,j)
if(r.length===0)return
q=a.jv(r)
for(j=q.length,p="",o=0;o<q.length;q.length===j||(0,A.e)(q),++o)p+=k.jw(a,q[o])
n=A.q6(p)
k.i2(n,a,!0)
m=a.bo()
if(J.W(m)>1){j=k.e
j===$&&A.b("ctx")
B.q.sfb(j,k.im(a,m))}else{l=k.d.dt(J.X(a.bo(),0))
j=k.e
j===$&&A.b("ctx")
B.q.sfb(j,l.d4())}j=k.e
j===$&&A.b("ctx")
j.fill(n)
k.i2(n,a,!1)},
jw(a,b){var s,r,q,p,o,n,m,l,k,j
t.y.a(b)
s=a.e4(b)
r=J.ba(b)
q=r.ga3(b)
p="M "+A.k(q.a)+" "+A.k(q.b)
o=a.eY(r.ga3(b),r.gp(b))
for(r=s.length,n=0;n<r;++n){m=s[n]
l=m.b
k=m.c
j=m.d
p+=" C "+A.k(l.a)+" "+A.k(l.b)+" "+A.k(k.a)+" "+A.k(k.b)+" "+A.k(j.a)+" "+A.k(j.b)}return o?p+" Z":p},
im(a,b){var s,r,q,p,o,n,m,l,k,j,i
t.ev.a(b)
s=a.jo()
r=t.y.a(A.a([s.a,s.b],t.l))
q=this.d
q===$&&A.b("display")
q=q.b
q===$&&A.b("camera")
p=q.j9(a,r)
r=this.e
r===$&&A.b("ctx")
q=p.length
if(0>=q)return A.c(p,0)
o=p[0]
n=o.a
o=o.b
if(1>=q)return A.c(p,1)
q=p[1]
q=r.createLinearGradient(n,o,q.a,q.b)
q.toString
o=J.Z(b)
m=1/(o.gm(b)-1)
l=A.oA(m+1,0,m).b1(0)
for(r=A.K(o.gm(b),0,1),n=r.length,k=0;k<r.length;r.length===n||(0,A.e)(r),++k){j=r[k]
i=this.d.dt(o.k(b,j))
q.addColorStop(B.a.k(l,j),i.d4())}return q},
i2(a,b,c){var s,r,q,p,o,n=this,m=c?b.x:b.gaE()
if(m===0)return
s=b.bq(c)
r=n.d
r===$&&A.b("display")
r=r.b
r===$&&A.b("camera")
r=r.c
q=n.e
q===$&&A.b("ctx")
q.lineWidth=m*0.01*(r/14.222222222222221)
r=J.ba(s)
p=r.cp(s,new A.iJ())
if(r.gan(s)||p)return
if(r.gm(s)>1)B.q.sfY(n.e,n.im(b,s))
else{o=n.d.dt(J.iq(b.bq(c)))
B.q.sfY(n.e,o.d4())}B.q.kE(n.e,a)}}
A.iJ.prototype={
$1(a){return t.G.a(a).d===0},
$S:61}
A.k5.prototype={
kY(){this.f=new A.iG(B.a8)
new A.i4().l_(0)
this.sh3(t.a.a(A.a([],t.r)))},
cB(){var s=0,r=A.f1(t.z),q=1,p,o=this,n,m,l,k
var $async$cB=A.f3(function(a,b){if(a===1){p=b
s=q}while(true)switch(s){case 0:l=o.w
l===$&&A.b("display")
l.eR()
s=2
return A.cI(null,$async$cB)
case 2:q=4
s=7
return A.cI(o.cP(),$async$cB)
case 7:q=1
s=6
break
case 4:q=3
k=p
throw k
s=6
break
case 3:s=1
break
case 6:l=o.f
l===$&&A.b("camera")
m=l.r
m===$&&A.b("display")
m=m.a
m===$&&A.b("renderer")
m.fo(l.f)
l=o.f
m=o.d
m===$&&A.b("mobjects")
l.j2(m)
s=8
return A.cI(null,$async$cB)
case 8:o.w.ow()
return A.eY(null,r)
case 1:return A.eX(p,r)}})
return A.eZ($async$cB,r)},
ox(a){var s,r,q=this.d
q===$&&A.b("mobjects")
s=q.length
r=0
for(;r<q.length;q.length===s||(0,A.e)(q),++r)q[r].jb(a)},
bd(a){var s,r,q=this,p=t.a
p.a(a)
s=A.j(a,!0,t.j)
r=q.f
r===$&&A.b("camera")
B.a.H(s,r.is(a))
r=q.d
r===$&&A.b("mobjects")
q.sh3(p.a(q.jt(r,s)))
B.a.dK(q.d,0,a)},
jt(a,b){var s,r=t.a
r.a(a)
r.a(b)
s=A.a([],t.r)
new A.k6(s).$2(a,A.ma(b,A.v(b).c))
return s},
e1(){var s=0,r=A.f1(t.z),q=this,p,o,n,m
var $async$e1=A.f3(function(a,b){if(a===1)return A.eX(b,r)
while(true)switch(s){case 0:p=0
case 2:if(!(p<1)){s=3
break}o=q.w
o===$&&A.b("display")
s=4
return A.cI(o.dQ(),$async$e1)
case 4:n=b
p+=n
q.ox(n)
o=q.f
o===$&&A.b("camera")
m=o.r
m===$&&A.b("display")
m=m.a
m===$&&A.b("renderer")
m.fo(o.f)
o=q.f
m=q.d
m===$&&A.b("mobjects")
o.j2(m)
q.a+=n
s=2
break
case 3:return A.eY(null,r)}})
return A.eZ($async$e1,r)},
dz(){var s=0,r=A.f1(t.z),q=this
var $async$dz=A.f3(function(a,b){if(a===1)return A.eX(b,r)
while(true)switch(s){case 0:case 2:if(!!0){s=3
break}s=4
return A.cI(q.e1(),$async$dz)
case 4:s=2
break
case 3:return A.eY(null,r)}})
return A.eZ($async$dz,r)},
sh3(a){this.d=t.a.a(a)}}
A.k6.prototype={
$2(a,b){var s,r,q,p,o,n
t.a.a(a)
t.ns.a(b)
for(s=a.length,r=this.a,q=0;q<a.length;a.length===s||(0,A.e)(a),++q){p=a[q]
if(b.G(0,p))continue
o=p.bV()
n=b.ny(0,A.ma(o,A.v(o).c))
if(n.a!==0){o=p.d
o===$&&A.b("submobjects")
this.$2(o,n)}else B.a.n(r,p)}},
$S:62}
A.lT.prototype={
$2(a,b){var s=this.a
return s.a(s.a(a)+s.a(b))},
$S(){return this.a.h("0(0,0)")}}
A.lR.prototype={
$1(a){return A.a1(a)/this.a*this.b},
$S:63}
A.lU.prototype={
$2(a,b){this.a.a(b)
return a!==0},
$S(){return this.a.h("y(h,0)")}}
A.lJ.prototype={
$1(a){return t.G.a(a).av(0)},
$S:26}
A.lK.prototype={
$1(a){return t.G.a(a).av(0)},
$S:26}
A.lL.prototype={
$1(a){var s
t.bd.a(a)
s=J.Z(a)
return new A.N(s.k(a,0),s.k(a,1),s.k(a,2),s.k(a,3))},
$S:65}
A.lv.prototype={
$1(a){var s,r,q,p,o,n,m,l=A.a([],t.l)
for(s=A.ij(this.a,t.V),r=s.length,q=1-a,p=this.b,o=0;o<s.length;s.length===r||(0,A.e)(s),++o){n=s[o]
m=n.a
if(typeof m!=="number")return A.bw(m)
l.push(J.cM(n.b,Math.pow(q,p-m)*Math.pow(a,m)*A.oC(p,m,!0)))}return B.a.b0(l,new A.lu())},
$S:66}
A.lu.prototype={
$2(a,b){var s=t.V
return s.a(a).T(0,s.a(b))},
$S:67}
A.N.prototype={
fw(a){return new A.N(this.a,this.b,this.c,a)},
u(){var s=this
return new A.N(s.a,s.b,s.c,s.d)},
av(a){var s=this,r=A.a([s.a,s.b,s.c],t.n)
r.push(s.d)
return r},
d4(){var s=this
return"rgba("+B.h.bl(s.a*255)+", "+B.h.bl(s.b*255)+", "+B.h.bl(s.c*255)+", "+A.k(s.d)+")"},
l(a){return this.d4()}}
A.lj.prototype={
$1(a){return A.ci(a,16)/255},
$S:68}
A.cQ.prototype={
W(a,b){var s,r=this
if(b==null)return!1
if(!(b instanceof A.cQ&&r.a===b.a&&r.b===b.b))s=typeof b=="number"&&r.a===b&&r.b===0
else s=!0
return s}}
A.bn.prototype={
l(a){return"EventType."+this.b}}
A.b1.prototype={}
A.iT.prototype={
gc3(){var s=this.a
s===$&&A.b("eventListeners")
return s},
kW(){var s,r,q=A.bd(t.cY,t.oR)
for(s=t.fO,r=0;r<6;++r)q.t(0,B.bo[r],A.a([],s))
this.sl5(t.fY.a(q))},
ci(a,b,c){var s,r,q
A.ii(c,t.e,"IEvent","_dispatchOnListnersList")
c.a(a)
s=A.j(c.h("n<b2<0>>").a(b),!0,c.h("b2<0>"))
r=!1
while(!0){if(!(!r&&s.length!==0))break
q=B.a.gp(s)
B.a.a4(s,q)
q.$ti.c.a(a)
r=q.a.$1(a)}},
dB(a){var s,r=this
switch(a.a){case B.E:t.m6.a(a)
s=r.gc3().k(0,B.E)
s.toString
r.ci(a,s,t.e)
break
case B.z:t.oJ.a(a)
s=r.gc3().k(0,B.z)
s.toString
r.ci(a,s,t.e)
break
case B.A:t.nB.a(a)
s=r.gc3().k(0,B.A)
s.toString
r.ci(a,s,t.e)
break
case B.B:t.gn.a(a)
s=r.gc3().k(0,B.B)
s.toString
r.ci(a,s,t.e)
break
case B.P:t.lX.a(a)
s=r.gc3().k(0,B.P)
s.toString
r.ci(a,s,t.e)
break
case B.Q:t.am.a(a)
s=r.gc3().k(0,B.Q)
s.toString
r.ci(a,s,t.e)
break}},
sl5(a){this.a=t.fY.a(a)}}
A.b2.prototype={}
A.fZ.prototype={}
A.e5.prototype={}
A.c1.prototype={}
A.c2.prototype={}
A.c0.prototype={}
A.jT.prototype={}
A.kg.prototype={
$1(a){return A.ig(a)!=null},
$S:9}
A.lw.prototype={
$2(a,b){return A.a1(a)*A.a1(b)},
$S:10}
A.lx.prototype={
$2(a,b){return A.a1(a)*A.a1(b)},
$S:10}
A.bm.prototype={
T(a,b){var s,r
if(typeof b=="number"){s=this.b
s===$&&A.b("shape")
r=A.fk(b,s)}else{t.Y.a(b)
r=b}return this.cs(0,new A.iA(r))},
C(a,b){var s,r
if(typeof b=="number"){s=this.b
s===$&&A.b("shape")
r=A.fk(b,s)}else{t.Y.a(b)
r=b}return this.cs(0,new A.iB(r))},
cs(a,b){var s,r,q
t.iJ.a(b)
s=this.a
s===$&&A.b("values")
s=A.ij(s,t.bd)
r=A.v(s)
q=r.h("G<1,n<F>>")
q=A.j(new A.G(s,r.h("n<F>(1)").a(new A.iz(b)),q),!0,q.h("B.E"))
r=this.b
r===$&&A.b("shape")
return A.aX(r,q)},
bG(a){var s,r
t.o.a(a)
s=a.a
r=this.a
r===$&&A.b("values")
if(s>>>0!==s||s>=r.length)return A.c(r,s)
return J.X(r[s],a.b)},
b9(a,b){var s,r,q,p,o
t.o.a(a)
s=a.a
r=this.b
r===$&&A.b("shape")
q=r.a
if(typeof s!=="number")return s.a6()
if(typeof q!=="number")return A.bw(q)
p=B.e.a6(s,q)
q=a.b
r=r.b
if(typeof q!=="number")return q.a6()
if(typeof r!=="number")return A.bw(r)
o=B.h.a6(q,r)
r=this.a
r===$&&A.b("values")
if(!(p>=0&&p<r.length))return A.c(r,p)
J.lX(r[p],o,b)},
lE(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.b
e===$&&A.b("shape")
s=e.a
if(typeof s!=="number")return s.U()
e=e.b
if(typeof e!=="number")return e.U()
r=A.a([],t.b)
for(q=A.K(f.b.a,0,1),p=q.length,o=f.a,n=t.n,m=0;m<q.length;q.length===p||(0,A.e)(q),++m){l=q[m]
if(!J.T(l,a)){k=A.a([],n)
for(j=A.K(f.b.a,0,1),i=j.length,h=0;h<j.length;j.length===i||(0,A.e)(j),++h){g=j[h]
if(!J.T(g,b)){o===$&&A.b("values")
k.push(J.X(B.a.k(o,l),g))}}r.push(k)}}return A.aX(new A.L(s-1,e-1,t.o),r)},
fC(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.b
h===$&&A.b("shape")
if(J.T(h.a,2)){h=i.a
h===$&&A.b("values")
if(0>=h.length)return A.c(h,0)
s=J.X(h[0],0)
if(0>=h.length)return A.c(h,0)
r=J.X(h[0],1)
if(1>=h.length)return A.c(h,1)
q=J.X(h[1],0)
if(1>=h.length)return A.c(h,1)
return s*J.X(h[1],1)-r*q}h=i.b
p=h.a
if(typeof p!=="number")return p.U()
h=h.b
if(typeof h!=="number")return h.U()
o=new A.L(p-1,h-1,t.o)
h=A.a([],t.n)
for(p=A.K(i.b.a,0,1),n=p.length,m=i.a,l=0;l<p.length;p.length===n||(0,A.e)(p),++l){k=p[l]
if(typeof k!=="number")return k.a6()
j=B.h.a6(k,2)===0?1:-1
m===$&&A.b("values")
if(0>=m.length)return A.c(m,0)
h.push(j*A.fk(J.X(m[0],k),o).C(0,i.lE(0,k)).fC())}return A.lS(h,t.W)},
jp(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="values"
if(this.fC()===0)throw A.d("This matrix is not inversible")
s=this.b
s===$&&A.b("shape")
r=s.a
q=s.b
p=this.u()
o=A.fl(r)
for(s=A.K(q,0,1),n=s.length,m=r-1,l=q-1,k=p.a,j=o.a,i=t.o,h=0;h<s.length;s.length===n||(0,A.e)(s),++h){g=s[h]
for(f=g,e=-1,d=-1;f!==r;++f){i.a(new A.L(f,g,i))
k===$&&A.b(b0)
if(!(f>=0&&f<k.length))return A.c(k,f)
c=J.X(k[f],g)
if(c>d){d=c
e=f}}k===$&&A.b(b0)
b=k.length
if(!(e>=0&&e<b))return A.c(k,e)
a=k[e]
if(g>>>0!==g||g>=b)return A.c(k,g)
k[e]=k[g]
B.a.t(k,g,a)
j===$&&A.b(b0)
b=j.length
if(!(e<b))return A.c(j,e)
a0=j[e]
if(g>>>0!==g||g>=b)return A.c(j,g)
j[e]=j[g]
B.a.t(j,g,a0)
b=J.Z(a)
a1=b.k(a,g)
for(a2=g;a2<q;++a2){a3=b.k(a,a2)
if(typeof a3!=="number")return a3.bF()
b.t(a,a2,a3/a1)}for(a3=J.Z(a0),a2=l;a2>=0;--a2){a4=a3.k(a0,a2)
if(typeof a4!=="number")return a4.bF()
a3.t(a0,a2,a4/a1)}for(a2=g+1,e=m;e>=0;--e)if(e!==g){if(!(e<k.length))return A.c(k,e)
a5=k[e]
if(!(e<j.length))return A.c(j,e)
a6=j[e]
a4=J.Z(a5)
a1=a4.k(a5,g)
for(a7=a2;a7!==q;++a7){a8=a4.k(a5,a7)
a9=b.k(a,a7)
if(typeof a9!=="number")return a9.C()
if(typeof a8!=="number")return a8.U()
a4.t(a5,a7,a8-a9*a1)}for(a4=J.Z(a6),a7=l;a7>0;--a7){a8=a4.k(a6,a7)
a9=a3.k(a0,a7)
if(typeof a9!=="number")return a9.C()
if(typeof a8!=="number")return a8.U()
a4.t(a6,a7,a8-a9*a1);--a7
a9=a4.k(a6,a7)
a8=a3.k(a0,a7)
if(typeof a8!=="number")return a8.C()
if(typeof a9!=="number")return a9.U()
a4.t(a6,a7,a9-a8*a1)}if(a7===0){a8=a4.k(a6,0)
a9=a3.k(a0,0)
if(typeof a9!=="number")return a9.C()
if(typeof a8!=="number")return a8.U()
a4.t(a6,0,a8-a9*a1)}}}return o},
b1(a){var s,r,q=this.a
q===$&&A.b("values")
s=A.v(q)
r=s.h("G<1,F>")
return A.j(new A.G(q,s.h("F(1)").a(new A.ix(a)),r),!0,r.h("B.E"))},
gja(){return this.cs(0,new A.iC(this))},
c8(a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="values",a5=this.b
a5===$&&A.b("shape")
s=a5.a
r=a5.b
a5=a6.b
a5===$&&A.b("shape")
q=a5.b
p=A.fk(0,new A.L(s,q,t.o))
for(a5=A.K(s,0,1),o=a5.length,n=p.a,m=this.a,l=a6.a,k=0;k<a5.length;a5.length===o||(0,A.e)(a5),++k){j=a5[k]
for(i=A.K(q,0,1),h=i.length,g=0;g<i.length;i.length===h||(0,A.e)(i),++g){f=i[g]
for(e=A.K(r,0,1),d=e.length,c=0;c<e.length;e.length===d||(0,A.e)(e),++c){b=e[c]
n===$&&A.b(a4)
a=B.a.k(n,j)
a0=J.Z(a)
a1=a0.k(a,f)
m===$&&A.b(a4)
a2=J.X(B.a.k(m,j),b)
l===$&&A.b(a4)
a3=J.X(B.a.k(l,b),f)
if(typeof a2!=="number")return a2.C()
if(typeof a3!=="number")return A.bw(a3)
if(typeof a1!=="number")return a1.T()
a0.t(a,f,a1+a2*a3)}}}return p},
u(){return this.m6(new A.iw())},
m6(a){return this.cs(0,new A.iv(t.f3.a(a)))},
iz(){var s,r,q,p=A.a([],t.n),o=this.a
o===$&&A.b("values")
s=o.length
r=0
for(;r<o.length;o.length===s||(0,A.e)(o),++r)for(q=J.ab(o[r]);q.q();)p.push(q.gB())
return p},
l(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this.b
c===$&&A.b("shape")
c=A.k(c.a)
s=A.k(this.b.b)
r=A.a([],t.t)
q=this.a
q===$&&A.b("values")
p=q.length
o=0
for(;o<q.length;q.length===p||(0,A.e)(q),++o)for(n=J.ab(q[o]);n.q();)r.push(B.h.fu(n.gB(),6).length)
m=B.a.fc(r,6,B.a3,t.S)
for(r=q.length,p=m+4,n=t.s,l="",o=0;o<q.length;q.length===r||(0,A.e)(q),++o){l+="      "
for(k=J.ab(q[o]);k.q();){j=k.gB()
i=j<0?"-":" "
j=Math.abs(j)
h=B.h.fu(j,6)
g=A.a([],n)
for(h=A.K(p-h.length,0,1),f=h.length,e=0;e<h.length;h.length===f||(0,A.e)(h),++e)g.push(" ")
d=B.a.aP(g)
l=l+i+B.h.fu(j,6)+d}l+="\n"}return c+"x"+s+" matrix\n"+l},
og(a,b){var s,r,q,p,o,n,m,l,k=this.iz(),j=A.fk(0,new A.L(a,b,t.o))
for(s=A.ij(k,t.W),r=s.length,q=j.a,p=0;p<s.length;s.length===r||(0,A.e)(s),++p){o=s[p]
n=o.a
m=B.e.a6(n,a)
l=B.e.aV(n,a)
q===$&&A.b("values")
if(!(m<q.length))return A.c(q,m)
J.lX(q[m],l,o.b)}return j},
sl1(a){this.b=t.o.a(a)}}
A.iA.prototype={
$2(a,b){return a+this.a.bG(t.o.a(b))},
$S:5}
A.iB.prototype={
$2(a,b){return a*this.a.bG(t.o.a(b))},
$S:5}
A.iz.prototype={
$1(a){var s,r,q
t.kk.a(a)
s=A.ij(a.b,t.W)
r=A.v(s)
q=r.h("G<1,F>")
return A.j(new A.G(s,r.h("F(1)").a(new A.iy(this.a,a)),q),!0,q.h("B.E"))},
$S:70}
A.iy.prototype={
$1(a){t.d7.a(a)
return this.a.$2(a.b,new A.L(this.b.a,a.a,t.o))},
$S:71}
A.ix.prototype={
$1(a){return J.X(t.bd.a(a),this.a)},
$S:72}
A.iC.prototype={
$2(a,b){var s=t.o
s.a(b)
return this.a.bG(new A.L(b.b,b.a,s))},
$S:5}
A.iw.prototype={
$1(a){return a},
$S:73}
A.iv.prototype={
$2(a,b){t.o.a(b)
return this.a.$1(a)},
$S:5}
A.lQ.prototype={
$2(a,b){var s=t.Y
return s.a(a).c8(s.a(b))},
$S:74}
A.f.prototype={
W(a,b){if(b==null)return!1
return b instanceof A.f&&this.a===b.a&&this.b===b.b&&this.c===b.c},
T(a,b){var s=this
if(typeof b=="number")return new A.f(s.a+b,s.b+b,s.c+b)
else if(b instanceof A.f)return new A.f(s.a+b.a,s.b+b.b,s.c+b.c)
else throw A.d("Vector3 only support addition by num or Vector3")},
U(a,b){return new A.f(this.a-b.a,this.b-b.b,this.c-b.c)},
C(a,b){var s=this
if(typeof b=="number")return new A.f(s.a*b,s.b*b,s.c*b)
else if(b instanceof A.f)return new A.f(s.a*b.a,s.b*b.b,s.c*b.c)
else throw A.d("Vector3 only support multiplication by num or Vector3")},
bF(a,b){return new A.f(this.a/b,this.b/b,this.c/b)},
bD(){var s=this.a,r=this.b,q=this.c
return s*s+r*r+q*q},
aS(a){switch(a){case 0:return this.a
case 1:return this.b
case 2:return this.c
default:throw A.d("No component at index "+a+" on a vector3")}},
ou(){var s=t.n
s=A.aX(null,A.a([A.a([this.a],s),A.a([this.b],s),A.a([this.c],s)],t.b))
return s},
fv(a,b,c){var s=a==null?this.a:a,r=b==null?this.b:b
return new A.f(s,r,c==null?this.c:c)},
oL(a){return this.fv(a,null,null)},
oM(a){return this.fv(null,a,null)},
jj(a){return this.fv(null,null,a)},
oK(a,b){if(a===0)return this.oL(b)
else if(a===1)return this.oM(b)
else if(a===2)return this.jj(b)
else throw A.d("Cannot index a vector3 with index="+a)},
c8(a){var s=A.fl(3).cs(0,new A.kF(a)).c8(this.ou()),r=t.o
return new A.f(s.bG(new A.L(0,0,r)),s.bG(new A.L(1,0,r)),s.bG(new A.L(2,0,r)))},
cQ(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cL(){var s=this.a
if(s===0&&this.b===0)return 0
return Math.atan2(this.b,s)},
l(a){return"vec3("+A.k(this.a)+", "+A.k(this.b)+", "+A.k(this.c)+")"}}
A.kF.prototype={
$2(a,b){var s,r,q,p
t.o.a(b)
s=b.a
r=this.a
q=r.b
q===$&&A.b("shape")
p=q.a
if(typeof s!=="number")return s.e3()
if(typeof p!=="number")return A.bw(p)
if(s<p){s=b.b
q=q.b
if(typeof s!=="number")return s.e3()
if(typeof q!=="number")return A.bw(q)
q=s>=q
s=q}else s=!0
return s?a:r.bG(b)},
$S:5}
A.iL.prototype={
lO(a,b){var s,r,q=t.D
A.ow("absolute",A.a([b,null,null,null,null,null,null,null,null,null,null,null,null,null,null],q))
s=this.a
s=s.aQ(b)>0&&!s.bS(b)
if(s)return b
s=A.oF()
r=A.a([s,b,null,null,null,null,null,null,null,null,null,null,null,null,null,null],q)
A.ow("join",r)
return this.nB(new A.an(r,t.na))},
nB(a){var s,r,q,p,o,n,m,l,k,j
t.bq.a(a)
for(s=a.$ti,r=s.h("y(i.E)").a(new A.iM()),q=a.gI(a),s=new A.cE(q,r,s.h("cE<i.E>")),r=this.a,p=!1,o=!1,n="";s.q();){m=q.gB()
if(r.bS(m)&&o){l=A.ha(m,r)
k=n.charCodeAt(0)==0?n:n
n=B.b.v(k,0,r.cA(k,!0))
l.b=n
if(r.d0(n))B.a.t(l.e,0,r.gcd())
n=""+l.l(0)}else if(r.aQ(m)>0){o=!r.bS(m)
n=""+m}else{j=m.length
if(j!==0){if(0>=j)return A.c(m,0)
j=r.eZ(m[0])}else j=!1
if(!j)if(p)n+=r.gcd()
n+=m}p=r.d0(m)}return n.charCodeAt(0)==0?n:n},
ce(a,b){var s=A.ha(b,this.a),r=s.d,q=A.v(r),p=q.h("am<1>")
s.siT(A.j(new A.am(r,q.h("y(1)").a(new A.iN()),p),!0,p.h("i.E")))
r=s.b
if(r!=null)B.a.bB(s.d,0,r)
return s.d},
fj(a){var s
if(!this.ls(a))return a
s=A.ha(a,this.a)
s.fi()
return s.l(0)},
ls(a){var s,r,q,p,o,n,m,l,k=this.a,j=k.aQ(a)
if(j!==0){if(k===$.io())for(s=0;s<j;++s)if(B.b.E(a,s)===47)return!0
r=j
q=47}else{r=0
q=null}for(p=new A.a5(a).a,o=p.length,s=r,n=null;s<o;++s,n=q,q=m){m=B.b.J(p,s)
if(k.bC(m)){if(k===$.io()&&m===47)return!0
if(q!=null&&k.bC(q))return!0
if(q===46)l=n==null||n===46||k.bC(n)
else l=!1
if(l)return!0}}if(q==null)return!0
if(k.bC(q))return!0
if(q===46)k=n==null||k.bC(n)||n===46
else k=!1
if(k)return!0
return!1},
ob(a){var s,r,q,p,o,n,m=this,l='Unable to find a path to "',k=m.a,j=k.aQ(a)
if(j<=0)return m.fj(a)
s=A.oF()
if(k.aQ(s)<=0&&k.aQ(a)>0)return m.fj(a)
if(k.aQ(a)<=0||k.bS(a))a=m.lO(0,a)
if(k.aQ(a)<=0&&k.aQ(s)>0)throw A.d(A.nt(l+a+'" from "'+s+'".'))
r=A.ha(s,k)
r.fi()
q=A.ha(a,k)
q.fi()
j=r.d
p=j.length
if(p!==0){if(0>=p)return A.c(j,0)
j=J.T(j[0],".")}else j=!1
if(j)return q.l(0)
j=r.b
p=q.b
if(j!=p)j=j==null||p==null||!k.fm(j,p)
else j=!1
if(j)return q.l(0)
while(!0){j=r.d
p=j.length
if(p!==0){o=q.d
n=o.length
if(n!==0){if(0>=p)return A.c(j,0)
j=j[0]
if(0>=n)return A.c(o,0)
o=k.fm(j,o[0])
j=o}else j=!1}else j=!1
if(!j)break
B.a.dZ(r.d,0)
B.a.dZ(r.e,1)
B.a.dZ(q.d,0)
B.a.dZ(q.e,1)}j=r.d
p=j.length
if(p!==0){if(0>=p)return A.c(j,0)
j=J.T(j[0],"..")}else j=!1
if(j)throw A.d(A.nt(l+a+'" from "'+s+'".'))
j=t.N
B.a.dK(q.d,0,A.bC(r.d.length,"..",!1,j))
B.a.t(q.e,0,"")
B.a.dK(q.e,1,A.bC(r.d.length,k.gcd(),!1,j))
k=q.d
j=k.length
if(j===0)return"."
if(j>1&&J.T(B.a.gp(k),".")){B.a.d2(q.d)
k=q.e
if(0>=k.length)return A.c(k,-1)
k.pop()
if(0>=k.length)return A.c(k,-1)
k.pop()
B.a.n(k,"")}q.b=""
q.j1()
return q.l(0)},
iV(a){var s,r,q=this,p=A.oq(a)
if(p.gaL()==="file"&&q.a===$.f7())return p.l(0)
else if(p.gaL()!=="file"&&p.gaL()!==""&&q.a!==$.f7())return p.l(0)
s=q.fj(q.a.fk(A.oq(p)))
r=q.ob(s)
return q.ce(0,r).length>q.ce(0,s).length?s:r}}
A.iM.prototype={
$1(a){return A.aq(a)!==""},
$S:7}
A.iN.prototype={
$1(a){return A.aq(a).length!==0},
$S:7}
A.ls.prototype={
$1(a){A.ig(a)
return a==null?"null":'"'+a+'"'},
$S:75}
A.cs.prototype={
ju(a){var s,r=this.aQ(a)
if(r>0)return B.b.v(a,0,r)
if(this.bS(a)){if(0>=a.length)return A.c(a,0)
s=a[0]}else s=null
return s},
fm(a,b){return a===b}}
A.jW.prototype={
j1(){var s,r,q=this
while(!0){s=q.d
if(!(s.length!==0&&J.T(B.a.gp(s),"")))break
B.a.d2(q.d)
s=q.e
if(0>=s.length)return A.c(s,-1)
s.pop()}s=q.e
r=s.length
if(r!==0)B.a.t(s,r-1,"")},
fi(){var s,r,q,p,o,n,m=this,l=A.a([],t.s)
for(s=m.d,r=s.length,q=0,p=0;p<s.length;s.length===r||(0,A.e)(s),++p){o=s[p]
n=J.bj(o)
if(!(n.W(o,".")||n.W(o,"")))if(n.W(o,"..")){n=l.length
if(n!==0){if(0>=n)return A.c(l,-1)
l.pop()}else ++q}else B.a.n(l,o)}if(m.b==null)B.a.dK(l,0,A.bC(q,"..",!1,t.N))
if(l.length===0&&m.b==null)B.a.n(l,".")
m.siT(l)
s=m.a
m.sk5(A.bC(l.length+1,s.gcd(),!0,t.N))
r=m.b
if(r==null||l.length===0||!s.d0(r))B.a.t(m.e,0,"")
r=m.b
if(r!=null&&s===$.io()){r.toString
m.b=A.bk(r,"/","\\")}m.j1()},
l(a){var s,r,q,p=this,o=p.b
o=o!=null?""+o:""
for(s=0;s<p.d.length;++s,o=q){r=p.e
if(!(s<r.length))return A.c(r,s)
r=A.k(r[s])
q=p.d
if(!(s<q.length))return A.c(q,s)
q=o+r+A.k(q[s])}o+=A.k(B.a.gp(p.e))
return o.charCodeAt(0)==0?o:o},
siT(a){this.d=t.I.a(a)},
sk5(a){this.e=t.I.a(a)}}
A.hc.prototype={
l(a){return"PathException: "+this.a},
$ibo:1}
A.kh.prototype={
l(a){return this.gag(this)}}
A.hf.prototype={
eZ(a){return B.b.G(a,"/")},
bC(a){return a===47},
d0(a){var s=a.length
return s!==0&&B.b.J(a,s-1)!==47},
cA(a,b){if(a.length!==0&&B.b.E(a,0)===47)return 1
return 0},
aQ(a){return this.cA(a,!1)},
bS(a){return!1},
fk(a){var s
if(a.gaL()===""||a.gaL()==="file"){s=a.gaK(a)
return A.mA(s,0,s.length,B.v,!1)}throw A.d(A.a4("Uri "+a.l(0)+" must have scheme 'file:'.",null))},
gag(){return"posix"},
gcd(){return"/"}}
A.hF.prototype={
eZ(a){return B.b.G(a,"/")},
bC(a){return a===47},
d0(a){var s=a.length
if(s===0)return!1
if(B.b.J(a,s-1)!==47)return!0
return B.b.be(a,"://")&&this.aQ(a)===s},
cA(a,b){var s,r,q,p,o=a.length
if(o===0)return 0
if(B.b.E(a,0)===47)return 1
for(s=0;s<o;++s){r=B.b.E(a,s)
if(r===47)return 0
if(r===58){if(s===0)return 0
q=B.b.aJ(a,"/",B.b.a9(a,"//",s+1)?s+3:s)
if(q<=0)return o
if(!b||o<q+3)return q
if(!B.b.Y(a,"file://"))return q
if(!A.oR(a,q+1))return q
p=q+3
return o===p?p:q+4}}return 0},
aQ(a){return this.cA(a,!1)},
bS(a){return a.length!==0&&B.b.E(a,0)===47},
fk(a){return a.l(0)},
gag(){return"url"},
gcd(){return"/"}}
A.hK.prototype={
eZ(a){return B.b.G(a,"/")},
bC(a){return a===47||a===92},
d0(a){var s=a.length
if(s===0)return!1
s=B.b.J(a,s-1)
return!(s===47||s===92)},
cA(a,b){var s,r,q=a.length
if(q===0)return 0
s=B.b.E(a,0)
if(s===47)return 1
if(s===92){if(q<2||B.b.E(a,1)!==92)return 1
r=B.b.aJ(a,"\\",2)
if(r>0){r=B.b.aJ(a,"\\",r+1)
if(r>0)return r}return q}if(q<3)return 0
if(!A.oQ(s))return 0
if(B.b.E(a,1)!==58)return 0
q=B.b.E(a,2)
if(!(q===47||q===92))return 0
return 3},
aQ(a){return this.cA(a,!1)},
bS(a){return this.aQ(a)===1},
fk(a){var s,r
if(a.gaL()!==""&&a.gaL()!=="file")throw A.d(A.a4("Uri "+a.l(0)+" must have scheme 'file:'.",null))
s=a.gaK(a)
if(a.gbh(a)===""){if(s.length>=3&&B.b.Y(s,"/")&&A.oR(s,1))s=B.b.j3(s,"/","")}else s="\\\\"+a.gbh(a)+s
r=A.bk(s,"/","\\")
return A.mA(r,0,r.length,B.v,!1)},
mz(a,b){var s
if(a===b)return!0
if(a===47)return b===92
if(a===92)return b===47
if((a^b)!==32)return!1
s=a|32
return s>=97&&s<=122},
fm(a,b){var s,r
if(a===b)return!0
s=a.length
if(s!==b.length)return!1
for(r=0;r<s;++r)if(!this.mz(B.b.E(a,r),B.b.E(b,r)))return!1
return!0},
gag(){return"windows"},
gcd(){return"\\"}}
A.hp.prototype={
gm(a){return this.c.length},
gnD(){return this.b.length},
h1(a,b){var s,r,q,p,o,n,m
for(s=this.c,r=s.length,q=this.b,p=0;p<r;++p){o=s[p]
if(o===13){n=p+1
if(n<r){if(!(n<r))return A.c(s,n)
m=s[n]!==10}else m=!0
if(m)o=10}if(o===10)B.a.n(q,p+1)}},
em(a,b,c){return A.mo(this,b,c)},
cC(a){var s,r=this
if(a<0)throw A.d(A.az("Offset may not be negative, was "+a+"."))
else if(a>r.c.length)throw A.d(A.az("Offset "+a+u.D+r.gm(r)+"."))
s=r.b
if(a<B.a.ga3(s))return-1
if(a>=B.a.gp(s))return s.length-1
if(r.lp(a)){s=r.d
s.toString
return s}return r.d=r.le(a)-1},
lp(a){var s,r,q,p=this.d
if(p==null)return!1
s=this.b
r=s.length
if(p>>>0!==p||p>=r)return A.c(s,p)
if(a<s[p])return!1
if(!(p>=r-1)){q=p+1
if(!(q<r))return A.c(s,q)
q=a<s[q]}else q=!0
if(q)return!0
if(!(p>=r-2)){q=p+2
if(!(q<r))return A.c(s,q)
q=a<s[q]
s=q}else s=!0
if(s){this.d=p+1
return!0}return!1},
le(a){var s,r,q=this.b,p=q.length,o=p-1
for(s=0;s<o;){r=s+B.e.aO(o-s,2)
if(!(r>=0&&r<p))return A.c(q,r)
if(q[r]>a)o=r
else s=r+1}return o},
b1(a){var s,r,q,p=this
if(a<0)throw A.d(A.az("Offset may not be negative, was "+a+"."))
else if(a>p.c.length)throw A.d(A.az("Offset "+a+" must be not be greater than the number of characters in the file, "+p.gm(p)+"."))
s=p.cC(a)
r=p.b
if(!(s>=0&&s<r.length))return A.c(r,s)
q=r[s]
if(q>a)throw A.d(A.az("Line "+s+" comes after offset "+a+"."))
return a-q},
d8(a){var s,r,q,p
if(a<0)throw A.d(A.az("Line may not be negative, was "+a+"."))
else{s=this.b
r=s.length
if(a>=r)throw A.d(A.az("Line "+a+" must be less than the number of lines in the file, "+this.gnD()+"."))}q=s[a]
if(q<=this.c.length){p=a+1
s=p<r&&q>=s[p]}else s=!0
if(s)throw A.d(A.az("Line "+a+" doesn't have 0 columns."))
return q}}
A.aY.prototype={
ga2(){return this.a.a},
gad(){return this.a.cC(this.b)},
gam(){return this.a.b1(this.b)},
bb(a,b){var s,r=this.b
if(r<0)throw A.d(A.az("Offset may not be negative, was "+r+"."))
else{s=this.a
if(r>s.c.length)throw A.d(A.az("Offset "+r+u.D+s.gm(s)+"."))}},
gau(a){return this.b}}
A.ao.prototype={
ga2(){return this.a.a},
gm(a){return this.c-this.b},
gP(a){return A.bX(this.a,this.b)},
gS(){return A.bX(this.a,this.c)},
gV(a){return A.ac(B.r.b4(this.a.c,this.b,this.c),0,null)},
gaU(){var s=this,r=s.a,q=s.c,p=r.cC(q)
if(r.b1(q)===0&&p!==0){if(q-s.b===0)return p===r.b.length-1?"":A.ac(B.r.b4(r.c,r.d8(p),r.d8(p+1)),0,null)}else q=p===r.b.length-1?r.c.length:r.d8(p+1)
return A.ac(B.r.b4(r.c,r.d8(r.cC(s.b)),q),0,null)},
aF(a,b,c){var s,r=this.c,q=this.b
if(r<q)throw A.d(A.a4("End "+r+" must come after start "+q+".",null))
else{s=this.a
if(r>s.c.length)throw A.d(A.az("End "+r+u.D+s.gm(s)+"."))
else if(q<0)throw A.d(A.az("Start may not be negative, was "+q+"."))}},
az(a,b){var s
t.hs.a(b)
if(!(b instanceof A.ao))return this.kU(0,b)
s=B.e.az(this.b,b.b)
return s===0?B.e.az(this.c,b.c):s},
W(a,b){var s=this
if(b==null)return!1
if(!t.lS.b(b))return s.kT(0,b)
return s.b===b.b&&s.c===b.c&&J.T(s.a.a,b.a.a)},
gZ(a){return A.d1(this.b,this.c,this.a.a,B.n)},
n7(a,b){var s,r=this,q=r.a
if(!J.T(q.a,b.a.a))throw A.d(A.a4('Source URLs "'+A.k(r.ga2())+'" and  "'+A.k(b.ga2())+"\" don't match.",null))
s=Math.min(r.b,b.b)
return A.mo(q,s,Math.max(r.c,b.c))},
$im3:1,
$ibD:1}
A.iW.prototype={
nt(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=a.a
a.hQ(B.a.ga3(a1).c)
s=a.e
r=A.bC(s,a0,!1,t.dd)
for(q=a.r,s=s!==0,p=a.b,o=0;o<a1.length;++o){n=a1[o]
if(o>0){m=a1[o-1]
l=m.c
k=n.c
if(!J.T(l,k)){a.dn("\u2575")
q.a+="\n"
a.hQ(k)}else if(m.b+1!==n.b){a.lN("...")
q.a+="\n"}}for(l=n.d,k=A.v(l).h("V<1>"),j=new A.V(l,k),j=new A.J(j,j.gm(j),k.h("J<B.E>")),k=k.h("B.E"),i=n.b,h=n.a;j.q();){g=j.d
if(g==null)g=k.a(g)
f=g.a
if(f.gP(f).gad()!==f.gS().gad()&&f.gP(f).gad()===i&&a.lq(B.b.v(h,0,f.gP(f).gam()))){e=B.a.aj(r,a0)
if(e<0)A.M(A.a4(A.k(r)+" contains no null elements.",a0))
B.a.t(r,e,g)}}a.lM(i)
q.a+=" "
a.lL(n,r)
if(s)q.a+=" "
d=B.a.iB(l,new A.jg())
if(d===-1)c=a0
else{if(!(d>=0&&d<l.length))return A.c(l,d)
c=l[d]}k=c!=null
if(k){j=c.a
g=j.gP(j).gad()===i?j.gP(j).gam():0
a.lJ(h,g,j.gS().gad()===i?j.gS().gam():h.length,p)}else a.dr(h)
q.a+="\n"
if(k)a.lK(n,c,r)
for(k=l.length,b=0;b<k;++b){l[b].toString
continue}}a.dn("\u2575")
a1=q.a
return a1.charCodeAt(0)==0?a1:a1},
hQ(a){var s=this
if(!s.f||!t.jJ.b(a))s.dn("\u2577")
else{s.dn("\u250c")
s.aW(new A.j3(s),"\x1b[34m",t.H)
s.r.a+=" "+$.mZ().iV(a)}s.r.a+="\n"},
dm(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d={}
t.eU.a(b)
d.a=!1
d.b=null
s=c==null
if(s)r=null
else r=e.b
for(q=b.length,p=t.P,o=e.b,s=!s,n=e.r,m=t.H,l=!1,k=0;k<q;++k){j=b[k]
i=j==null
if(i)h=null
else{g=j.a
h=g.gP(g).gad()}f=i?null:j.a.gS().gad()
if(s&&j===c){e.aW(new A.ja(e,h,a),r,p)
l=!0}else if(l)e.aW(new A.jb(e,j),r,p)
else if(i)if(d.a)e.aW(new A.jc(e),d.b,m)
else n.a+=" "
else e.aW(new A.jd(d,e,c,h,a,j,f),o,p)}},
lL(a,b){return this.dm(a,b,null)},
lJ(a,b,c,d){var s=this
s.dr(B.b.v(a,0,b))
s.aW(new A.j4(s,a,b,c),d,t.H)
s.dr(B.b.v(a,c,a.length))},
lK(a,b,c){var s,r,q,p,o=this
t.eU.a(c)
s=o.b
r=b.a
if(r.gP(r).gad()===r.gS().gad()){o.eK()
r=o.r
r.a+=" "
o.dm(a,c,b)
if(c.length!==0)r.a+=" "
o.hR(b,c,o.aW(new A.j5(o,a,b),s,t.S))}else{q=a.b
if(r.gP(r).gad()===q){if(B.a.G(c,b))return
A.tw(c,b,t.C)
o.eK()
r=o.r
r.a+=" "
o.dm(a,c,b)
o.aW(new A.j6(o,a,b),s,t.H)
r.a+="\n"}else if(r.gS().gad()===q){p=r.gS().gam()===a.a.length
if(p&&!0){A.oZ(c,b,t.C)
return}o.eK()
o.r.a+=" "
o.dm(a,c,b)
o.hR(b,c,o.aW(new A.j7(o,p,a,b),s,t.S))
A.oZ(c,b,t.C)}}},
hP(a,b,c){var s=c?0:1,r=this.r
s=r.a+=B.b.C("\u2500",1+b+this.ez(B.b.v(a.a,0,b+s))*3)
r.a=s+"^"},
lI(a,b){return this.hP(a,b,!0)},
hR(a,b,c){t.eU.a(b)
this.r.a+="\n"
return},
dr(a){var s,r,q,p
for(s=new A.a5(a),r=t.E,s=new A.J(s,s.gm(s),r.h("J<t.E>")),q=this.r,r=r.h("t.E");s.q();){p=s.d
if(p==null)p=r.a(p)
if(p===9)q.a+=B.b.C(" ",4)
else q.a+=A.b5(p)}},
dq(a,b,c){var s={}
s.a=c
if(b!=null)s.a=B.e.l(b+1)
this.aW(new A.je(s,this,a),"\x1b[34m",t.P)},
dn(a){return this.dq(a,null,null)},
lN(a){return this.dq(null,null,a)},
lM(a){return this.dq(null,a,null)},
eK(){return this.dq(null,null,null)},
ez(a){var s,r,q,p
for(s=new A.a5(a),r=t.E,s=new A.J(s,s.gm(s),r.h("J<t.E>")),r=r.h("t.E"),q=0;s.q();){p=s.d
if((p==null?r.a(p):p)===9)++q}return q},
lq(a){var s,r,q
for(s=new A.a5(a),r=t.E,s=new A.J(s,s.gm(s),r.h("J<t.E>")),r=r.h("t.E");s.q();){q=s.d
if(q==null)q=r.a(q)
if(q!==32&&q!==9)return!1}return!0},
aW(a,b,c){var s,r
c.h("0()").a(a)
s=this.b!=null
if(s&&b!=null)this.r.a+=b
r=a.$0()
if(s&&b!=null)this.r.a+="\x1b[0m"
return r}}
A.jf.prototype={
$0(){return this.a},
$S:76}
A.iY.prototype={
$1(a){var s=t.nR.a(a).d,r=A.v(s)
r=new A.am(s,r.h("y(1)").a(new A.iX()),r.h("am<1>"))
return r.gm(r)},
$S:77}
A.iX.prototype={
$1(a){var s=t.C.a(a).a
return s.gP(s).gad()!==s.gS().gad()},
$S:14}
A.iZ.prototype={
$1(a){return t.nR.a(a).c},
$S:79}
A.j0.prototype={
$1(a){var s=t.C.a(a).a.ga2()
return s==null?new A.D():s},
$S:80}
A.j1.prototype={
$2(a,b){var s=t.C
return s.a(a).a.az(0,s.a(b).a)},
$S:81}
A.j2.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
t.lO.a(a)
s=a.a
r=a.b
q=A.a([],t.dg)
for(p=J.ba(r),o=p.gI(r),n=t.pg;o.q();){m=o.gB().a
l=m.gaU()
k=A.lB(l,m.gV(m),m.gP(m).gam())
k.toString
k=B.b.c1("\n",B.b.v(l,0,k))
j=k.gm(k)
i=m.gP(m).gad()-j
for(m=l.split("\n"),k=m.length,h=0;h<k;++h){g=m[h]
if(q.length===0||i>B.a.gp(q).b)B.a.n(q,new A.b8(g,i,s,A.a([],n)));++i}}f=A.a([],n)
for(o=q.length,n=t.aP,e=0,h=0;h<q.length;q.length===o||(0,A.e)(q),++h){g=q[h]
m=n.a(new A.j_(g))
if(!!f.fixed$length)A.M(A.S("removeWhere"))
B.a.eI(f,m,!0)
d=f.length
for(m=p.b3(r,e),m=m.gI(m);m.q();){k=m.gB()
c=k.a
if(c.gP(c).gad()>g.b)break
B.a.n(f,k)}e+=f.length-d
B.a.H(g.d,f)}return q},
$S:82}
A.j_.prototype={
$1(a){return t.C.a(a).a.gS().gad()<this.a.b},
$S:14}
A.jg.prototype={
$1(a){t.C.a(a)
return!0},
$S:14}
A.j3.prototype={
$0(){this.a.r.a+=B.b.C("\u2500",2)+">"
return null},
$S:1}
A.ja.prototype={
$0(){var s=this.b===this.c.b?"\u250c":"\u2514"
this.a.r.a+=s},
$S:2}
A.jb.prototype={
$0(){var s=this.b==null?"\u2500":"\u253c"
this.a.r.a+=s},
$S:2}
A.jc.prototype={
$0(){this.a.r.a+="\u2500"
return null},
$S:1}
A.jd.prototype={
$0(){var s,r,q=this,p=q.a,o=p.a?"\u253c":"\u2502"
if(q.c!=null)q.b.r.a+=o
else{s=q.e
r=s.b
if(q.d===r){s=q.b
s.aW(new A.j8(p,s),p.b,t.P)
p.a=!0
if(p.b==null)p.b=s.b}else{s=q.r===r&&q.f.a.gS().gam()===s.a.length
r=q.b
if(s)r.r.a+="\u2514"
else r.aW(new A.j9(r,o),p.b,t.P)}}},
$S:2}
A.j8.prototype={
$0(){var s=this.a.a?"\u252c":"\u250c"
this.b.r.a+=s},
$S:2}
A.j9.prototype={
$0(){this.a.r.a+=this.b},
$S:2}
A.j4.prototype={
$0(){var s=this
return s.a.dr(B.b.v(s.b,s.c,s.d))},
$S:1}
A.j5.prototype={
$0(){var s,r,q=this.a,p=q.r,o=p.a,n=this.c.a,m=n.gP(n).gam(),l=n.gS().gam()
n=this.b.a
s=q.ez(B.b.v(n,0,m))
r=q.ez(B.b.v(n,m,l))
m+=s*3
p.a+=B.b.C(" ",m)
p=p.a+=B.b.C("^",Math.max(l+(s+r)*3-m,1))
return p.length-o.length},
$S:27}
A.j6.prototype={
$0(){var s=this.c.a
return this.a.lI(this.b,s.gP(s).gam())},
$S:1}
A.j7.prototype={
$0(){var s=this,r=s.a,q=r.r,p=q.a
if(s.b)q.a+=B.b.C("\u2500",3)
else r.hP(s.c,Math.max(s.d.a.gS().gam()-1,0),!1)
return q.a.length-p.length},
$S:27}
A.je.prototype={
$0(){var s=this.b,r=s.r,q=this.a.a
if(q==null)q=""
s=r.a+=B.b.nM(q,s.d)
q=this.c
r.a=s+(q==null?"\u2502":q)},
$S:2}
A.av.prototype={
l(a){var s=this.a
s=""+"primary "+(""+s.gP(s).gad()+":"+s.gP(s).gam()+"-"+s.gS().gad()+":"+s.gS().gam())
return s.charCodeAt(0)==0?s:s}}
A.l2.prototype={
$0(){var s,r,q,p,o=this.a
if(!(t.ol.b(o)&&A.lB(o.gaU(),o.gV(o),o.gP(o).gam())!=null)){s=o.gP(o)
s=A.hq(s.gau(s),0,0,o.ga2())
r=o.gS()
r=r.gau(r)
q=o.ga2()
p=A.t8(o.gV(o),10)
o=A.kc(s,A.hq(r,A.nU(o.gV(o)),p,q),o.gV(o),o.gV(o))}return A.qQ(A.qS(A.qR(o)))},
$S:84}
A.b8.prototype={
l(a){return""+this.b+': "'+this.a+'" ('+B.a.aB(this.d,", ")+")"}}
A.bt.prototype={
f1(a){var s=this.a
if(!J.T(s,a.ga2()))throw A.d(A.a4('Source URLs "'+A.k(s)+'" and "'+A.k(a.ga2())+"\" don't match.",null))
return Math.abs(this.b-a.gau(a))},
az(a,b){var s
t.hq.a(b)
s=this.a
if(!J.T(s,b.ga2()))throw A.d(A.a4('Source URLs "'+A.k(s)+'" and "'+A.k(b.ga2())+"\" don't match.",null))
return this.b-b.gau(b)},
W(a,b){if(b==null)return!1
return t.hq.b(b)&&J.T(this.a,b.ga2())&&this.b===b.gau(b)},
gZ(a){var s=this.a
s=s==null?null:s.gZ(s)
if(s==null)s=0
return s+this.b},
l(a){var s=this,r=A.dq(s).l(0),q=s.a
return"<"+r+": "+s.b+" "+(A.k(q==null?"unknown source":q)+":"+(s.c+1)+":"+(s.d+1))+">"},
$iae:1,
ga2(){return this.a},
gau(a){return this.b},
gad(){return this.c},
gam(){return this.d}}
A.hr.prototype={
f1(a){if(!J.T(this.a.a,a.ga2()))throw A.d(A.a4('Source URLs "'+A.k(this.ga2())+'" and "'+A.k(a.ga2())+"\" don't match.",null))
return Math.abs(this.b-a.gau(a))},
az(a,b){t.hq.a(b)
if(!J.T(this.a.a,b.ga2()))throw A.d(A.a4('Source URLs "'+A.k(this.ga2())+'" and "'+A.k(b.ga2())+"\" don't match.",null))
return this.b-b.gau(b)},
W(a,b){if(b==null)return!1
return t.hq.b(b)&&J.T(this.a.a,b.ga2())&&this.b===b.gau(b)},
gZ(a){var s=this.a.a
s=s==null?null:s.gZ(s)
if(s==null)s=0
return s+this.b},
l(a){var s=A.dq(this).l(0),r=this.b,q=this.a,p=q.a
return"<"+s+": "+r+" "+(A.k(p==null?"unknown source":p)+":"+(q.cC(r)+1)+":"+(q.b1(r)+1))+">"},
$iae:1,
$ibt:1}
A.hs.prototype={
kZ(a,b,c){var s,r=this.b,q=this.a
if(!J.T(r.ga2(),q.ga2()))throw A.d(A.a4('Source URLs "'+A.k(q.ga2())+'" and  "'+A.k(r.ga2())+"\" don't match.",null))
else if(r.gau(r)<q.gau(q))throw A.d(A.a4("End "+r.l(0)+" must come after start "+q.l(0)+".",null))
else{s=this.c
if(s.length!==q.f1(r))throw A.d(A.a4('Text "'+s+'" must be '+q.f1(r)+" characters long.",null))}},
gP(a){return this.a},
gS(){return this.b},
gV(a){return this.c}}
A.ej.prototype={
ga2(){return this.gP(this).ga2()},
gm(a){var s,r=this.gS()
r=r.gau(r)
s=this.gP(this)
return r-s.gau(s)},
az(a,b){var s
t.hs.a(b)
s=this.gP(this).az(0,b.gP(b))
return s===0?this.gS().az(0,b.gS()):s},
iN(a,b,c){var s,r,q=this,p=""+("line "+(q.gP(q).gad()+1)+", column "+(q.gP(q).gam()+1))
if(q.ga2()!=null){s=q.ga2()
s=p+(" of "+$.mZ().iV(s))
p=s}p+=": "+b
r=q.nu(c)
if(r.length!==0)p=p+"\n"+r
return p.charCodeAt(0)==0?p:p},
nu(a){var s=this
if(!t.ol.b(s)&&s.gm(s)===0)return""
return A.pO(s,a).nt()},
W(a,b){if(b==null)return!1
return t.hs.b(b)&&this.gP(this).W(0,b.gP(b))&&this.gS().W(0,b.gS())},
gZ(a){return A.d1(this.gP(this),this.gS(),B.n,B.n)},
l(a){var s=this
return"<"+A.dq(s).l(0)+": from "+s.gP(s).l(0)+" to "+s.gS().l(0)+' "'+s.gV(s)+'">'},
$iae:1,
$ibf:1}
A.bD.prototype={
gaU(){return this.d}}
A.L.prototype={
l(a){return"["+A.k(this.a)+", "+A.k(this.b)+"]"},
W(a,b){if(b==null)return!1
return b instanceof A.L&&J.T(b.a,this.a)&&J.T(b.b,this.b)},
gZ(a){return A.d1(J.aA(this.a),J.aA(this.b),B.n,B.n)}}
A.db.prototype={
av(a){var s=this
return A.fY([s.a,s.b,s.c,s.d],!1,t.z)},
l(a){var s=this
return"["+s.a.l(0)+", "+s.b.l(0)+", "+s.c.l(0)+", "+s.d.l(0)+"]"},
W(a,b){var s=this
if(b==null)return!1
return b instanceof A.db&&b.a.W(0,s.a)&&b.b.W(0,s.b)&&b.c.W(0,s.c)&&b.d.W(0,s.d)},
gZ(a){var s=this
return A.d1(A.bL(s.a),A.bL(s.b),A.bL(s.c),A.bL(s.d))}}
A.jB.prototype={
cP(){var s=0,r=A.f1(t.z),q=this,p
var $async$cP=A.f3(function(a,b){if(a===1)return A.eX(b,r)
while(true)switch(s){case 0:p=q.f
p===$&&A.b("camera")
p.f=A.oi("#191919")
s=2
return A.cI(q.f0(),$async$cP)
case 2:q.nF()
s=3
return A.cI(q.dz(),$async$cP)
case 3:return A.eY(null,r)}})
return A.eZ($async$cP,r)},
f0(){var s=0,r=A.f1(t.z),q=this,p,o,n,m,l,k,j,i,h
var $async$f0=A.f3(function(a,b){if(a===1)return A.eX(b,r)
while(true)switch(s){case 0:h=new A.dy(B.d,A.n7(null,null,null,null,!1,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null),B.M,B.L,-7.111111111111111,7.111111111111111,-4,4,4,0,!1,0.01,!1,0.000001,4,null,null,null,B.c,$,null,$,$,$)
h.aw(B.c,null,null)
h.h2(null)
h.cU=h.ij(-7.111111111111111,7.111111111111111,B.M.fg(B.M))
p=h.ij(-4,4,B.L.fg(B.L))
h.cV=p
p.e_(0,-1.5707963267948966,B.d,B.l)
A.mm(A.a([h.cU,h.cV],t.U))
p=t.r
h.bd(t.a.a(A.a([h.cU,h.cV],p)))
h.aM(B.d)
h.al(B.b4.fw(0.7))
q.ch=h
h=A.nj(new A.f(2*Math.cos(0.0031415926535897933),2*Math.sin(0.0031415926535897933),0),B.c)
h.al(B.y)
q.x=h
h=h.ah()
q.y=A.aO(B.c,new A.f(0,q.x.ah().aS(1),0),h)
h=q.x.ah()
q.z=A.aO(B.w,new A.f(q.x.ah().aS(0),0,0),h)
q.ay=A.aO(B.y,q.x.ah(),B.d)
q.Q=A.aO(B.w,B.d,B.d)
q.as=A.aO(B.C,B.d,B.d)
q.at=A.aO(B.x,B.d,B.d)
q.ax=A.aO(B.D,B.d,B.d)
o=A.ne(B.d,B.c,2)
o.fM(B.x.fw(0))
o.ke(B.y.fw(0.8))
q.lS()
h=q.x
n=q.CW
n===$&&A.b("texSin")
m=q.cx
m===$&&A.b("texCos")
l=q.cy
l===$&&A.b("texTan")
k=q.db
k===$&&A.b("texCot")
j=q.dx
j===$&&A.b("texSec")
i=q.dy
i===$&&A.b("texCsc")
q.bd(A.a([h,n,m,l,k,j,i,o,q.z,q.y,q.Q,q.as,q.at,q.ax,q.ay,q.ch],p))
return A.eY(null,r)}})
return A.eZ($async$f0,r)},
lS(){var s=this,r=A.bK("sin(\\theta)")
r.al(B.a9)
r.c0(new A.jC(s))
r.b2(0.5)
s.CW=r
r=A.bK("cos(\\theta)")
r.al(B.aa)
r.c0(new A.jD(s))
r.b2(0.5)
s.cx=r
r=A.bK("tan(\\theta)")
r.al(B.w)
r.b2(0.5)
s.cy=r
r=A.bK("cot(\\theta)")
r.al(B.C)
r.b2(0.5)
s.db=r
r=A.bK("sec(\\theta)")
r.al(B.x)
r.b2(0.5)
s.dx=r
r=A.bK("csc(\\theta)")
r.al(B.D)
r.b2(0.5)
s.dy=r
s.cy.c0(new A.jE(s))
s.db.c0(new A.jF(s))
s.dx.c0(new A.jG(s))
s.dy.c0(new A.jH(s))},
nF(){var s,r=this,q=r.x
q===$&&A.b("slider")
s=new A.dG($,$,$,!1,q,B.c,$,null,$,$,$)
s.aw(B.c,null,null)
s.kX(q)
r.bd(t.a.a(A.a([s],t.r)))
r.x.c0(new A.jI(r))}}
A.jC.prototype={
$2(a,b){var s
t.j.a(a)
A.bU(b)
s=this.a.z
s===$&&A.b("sinLine")
a.iQ(s,0.1,B.j)
return a},
$S:3}
A.jD.prototype={
$2(a,b){var s
t.j.a(a)
A.bU(b)
s=this.a.y
s===$&&A.b("cosLine")
a.iQ(s,0.1,B.t)
return a},
$S:3}
A.jE.prototype={
$2(a,b){var s,r
t.j.a(a)
A.bU(b)
s=this.a
r=s.x
r===$&&A.b("slider")
if(2/Math.sin(Math.atan2(r.ah().cQ(new A.f(1,0,0)),s.x.ah().aS(1)))<1000){r=A.bK("tan(\\theta)")
r.al(B.w)
r.b2(0.5)
s=s.Q
s===$&&A.b("tanLine")
r.dR(s.ao(B.d),0.1,B.t)
a.aY(r)}return a},
$S:3}
A.jF.prototype={
$2(a,b){var s,r
t.j.a(a)
A.bU(b)
s=this.a
r=s.x
r===$&&A.b("slider")
if(2/Math.cos(Math.atan2(r.ah().cQ(new A.f(1,0,0)),s.x.ah().aS(1)))<1000){r=A.bK("cot(\\theta)")
r.al(B.C)
r.b2(0.5)
s=s.as
s===$&&A.b("cotanLine")
r.dR(s.ao(B.d),0.1,B.u)
a.aY(r)}return a},
$S:3}
A.jG.prototype={
$2(a,b){var s,r
t.j.a(a)
A.bU(b)
s=this.a
r=s.x
r===$&&A.b("slider")
if(2/Math.cos(Math.atan2(r.ah().cQ(new A.f(1,0,0)),s.x.ah().aS(1)))<1000){r=A.bK("sec(\\theta)")
r.al(B.x)
r.b2(0.5)
s=s.at
s===$&&A.b("secLine")
r.dR(s.ao(B.d),0.1,B.m)
a.aY(r)}return a},
$S:3}
A.jH.prototype={
$2(a,b){var s,r
t.j.a(a)
A.bU(b)
s=this.a
r=s.x
r===$&&A.b("slider")
if(2/Math.cos(Math.atan2(r.ah().cQ(new A.f(1,0,0)),s.x.ah().aS(1)))<1000){r=A.bK("csc(\\theta)")
r.al(B.D)
r.b2(0.5)
s=s.ax
s===$&&A.b("cscLine")
r.dR(s.ao(B.d),0.1,B.u)
a.aY(r)}return a},
$S:3}
A.jI.prototype={
$2(a,b){var s,r,q,p,o
t.j.a(a)
A.bU(b)
s=this.a
r=s.x
r===$&&A.b("slider")
q=r.ah().cQ(new A.f(1,0,0))
p=Math.atan2(s.x.ah().aS(1),q)
a.aY(A.nj(new A.f(2*Math.cos(p),2*Math.sin(p),0),B.y))
r=s.z
r===$&&A.b("sinLine")
o=s.x.ah()
r.aY(A.aO(B.a9,new A.f(s.x.ah().aS(0),0,0),o))
o=s.y
o===$&&A.b("cosLine")
r=s.x.ah()
o.aY(A.aO(B.aa,new A.f(0,s.x.ah().aS(1),0),r))
r=s.Q
r===$&&A.b("tanLine")
o=s.x.ah()
r.aY(A.aO(B.w,new A.f(2/Math.cos(p),0,0),o))
o=s.as
o===$&&A.b("cotanLine")
r=s.x.ah()
o.aY(A.aO(B.C,new A.f(0,2/Math.sin(p),0),r))
r=s.at
r===$&&A.b("secLine")
r.aY(A.aO(B.x,new A.f(2/Math.cos(p),0,0),B.d))
r=s.ax
r===$&&A.b("cscLine")
r.aY(A.aO(B.D,new A.f(0,2/Math.sin(p),0),B.d))
r=s.ay
r===$&&A.b("radius")
r.aY(A.aO(B.y,s.x.ah(),B.d))
return a},
$S:3};(function aliases(){var s=J.dX.prototype
s.kG=s.l
s=J.cu.prototype
s.kL=s.l
s=A.bc.prototype
s.kH=s.iE
s.kI=s.iF
s.kK=s.iH
s.kJ=s.iG
s=A.t.prototype
s.kM=s.bO
s=A.D.prototype
s.kR=s.l
s=A.a3.prototype
s.kS=s.a1
s=A.aQ.prototype
s.kN=s.t
s.bX=s.n
s.fZ=s.bB
s.kO=s.H
s=A.H.prototype
s.kQ=s.cw
s.h_=s.bW
s.kP=s.cT
s.ep=s.bp
s.eo=s.b7
s=A.R.prototype
s.kV=s.bW
s=A.dt.prototype
s.kF=s.kn
s=A.ej.prototype
s.kU=s.az
s.kT=s.W})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._instance_1i,q=hunkHelpers.installInstanceTearOff,p=hunkHelpers._static_1,o=hunkHelpers._static_0,n=hunkHelpers.installStaticTearOff,m=hunkHelpers._instance_1u,l=hunkHelpers._instance_0u
s(J,"rC","pU",28)
r(J.A.prototype,"glQ","n",90)
q(J.bA.prototype,"gfX",1,1,null,["$2","$1"],["a9","Y"],78,0,0)
p(A,"rM","pM",29)
p(A,"rZ","qL",15)
p(A,"t_","qM",15)
p(A,"t0","qN",15)
o(A,"oB","rT",1)
s(A,"oD","rt",89)
p(A,"t3","ru",29)
s(A,"t2","q_",28)
p(A,"t7","qE",18)
n(A,"tt",2,null,["$1$2","$2"],["oV",function(a,b){return A.oV(a,b,t.p)}],16,0)
n(A,"oT",2,null,["$1$2","$2"],["oU",function(a,b){return A.oU(a,b,t.p)}],16,0)
p(A,"oE","a2",9)
p(A,"t5","lM",9)
p(A,"t6","oS",9)
p(A,"bG","pw",60)
m(A.ef.prototype,"gjg","jh",31)
var k
l(k=A.dP.prototype,"gD","mN",0)
l(k,"gn2","n3",0)
l(k,"gcz","oa",0)
l(k,"gmu","mv",0)
l(k,"gdW","o3",0)
l(k,"gbI","k_",0)
l(k,"gnP","nQ",0)
l(k,"goo","op",0)
l(k,"gmx","my",0)
l(k,"gj8","on",0)
l(k,"go8","o9",0)
l(k,"go6","o7",0)
l(k,"go4","o5",0)
l(k,"go1","o2",0)
l(k,"go_","o0",0)
l(k,"gnY","nZ",0)
l(k,"gjY","jZ",0)
l(k,"gjJ","jK",0)
l(k,"gjH","jI",0)
l(k,"gjN","jO",0)
l(k,"gjL","jM",0)
l(k,"gb8","jX",0)
l(k,"gjQ","jR",0)
l(k,"gfK","jP",0)
l(k,"gef","jW",0)
l(k,"gjU","jV",0)
l(k,"gjS","jT",0)
l(k,"gjz","jA",0)
l(k,"gbH","jG",0)
l(k,"gjD","jE",0)
l(k,"gjB","jC",0)
l(k,"gee","jF",0)
l(k,"gjx","jy",0)
l(k,"gbx","mf",0)
l(k,"gbN","m8",0)
l(k,"glU","lV",0)
l(k,"gi3","mg",0)
l(k,"gm9","ma",0)
l(k,"gmb","mc",0)
l(k,"gdu","md",0)
l(k,"ghV","lW",0)
l(k,"gbs","k0",0)
l(k,"geS","mo",0)
l(k,"gnG","nH",0)
l(k,"gmG","mH",0)
l(k,"gmE","mF",0)
l(k,"gbP","mI",0)
l(k,"gib","mC",0)
l(k,"gic","mD",0)
l(k,"gmA","mB",0)
l(k,"gmU","mV",0)
l(k,"gi4","mh",0)
l(k,"gf2","mP",0)
l(k,"glX","lY",0)
l(k,"gm_","m0",0)
l(k,"geP","mi",0)
l(k,"gmQ","mR",0)
l(k,"gmS","mT",0)
l(k,"ghW","lZ",0)
l(k,"gmk","ml",0)
l(k,"gm2","m3",0)
l(k,"geQ","mj",0)
l(k,"gf3","mW",0)
l(k,"gf4","mX",0)
l(k,"ghX","m1",0)
l(k,"gco","mp",0)
l(k,"gms","mt",0)
l(A.H.prototype,"gjq","d7",6)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.D,null)
q(A.D,[A.m6,J.dX,J.at,A.i,A.dB,A.aM,A.a_,A.eD,A.kb,A.J,A.Q,A.dN,A.dK,A.cF,A.bp,A.bF,A.cR,A.kl,A.h5,A.dL,A.eI,A.cw,A.ju,A.cv,A.ct,A.di,A.de,A.da,A.i8,A.kM,A.br,A.i1,A.eL,A.l9,A.hN,A.dh,A.ce,A.dx,A.hP,A.cG,A.ap,A.hO,A.el,A.em,A.hu,A.i6,A.eS,A.eU,A.i2,A.cH,A.t,A.eE,A.aT,A.eH,A.id,A.co,A.ld,A.kN,A.h9,A.ek,A.i_,A.dO,A.be,A.ak,A.i9,A.hj,A.a0,A.eQ,A.kn,A.bi,A.m2,A.i4,A.cA,A.eB,A.l6,A.bg,A.kj,A.cZ,A.jJ,A.jZ,A.P,A.hJ,A.aw,A.i3,A.l5,A.hV,A.ag,A.ji,A.a3,A.aS,A.k1,A.iS,A.iK,A.df,A.jh,A.b0,A.en,A.dP,A.kk,A.o,A.iG,A.ds,A.H,A.aK,A.et,A.ee,A.dt,A.k5,A.N,A.cQ,A.b1,A.iT,A.b2,A.jT,A.bm,A.f,A.iL,A.kh,A.jW,A.hc,A.hp,A.hr,A.ej,A.iW,A.av,A.b8,A.bt,A.L,A.db])
q(J.dX,[J.fU,J.dZ,J.b3,J.A,J.c_,J.bA,A.h1])
q(J.b3,[J.cu,A.aN,A.dA,A.iO,A.dE,A.q,A.hb])
q(J.cu,[J.he,J.bE,J.bB])
r(J.jr,J.A)
q(J.c_,[J.cW,J.e_])
q(A.i,[A.cc,A.O,A.cx,A.am,A.dM,A.bO,A.an,A.ew,A.dY,A.i7,A.hk])
q(A.cc,[A.cn,A.eT])
r(A.ey,A.cn)
r(A.ev,A.eT)
q(A.aM,[A.fx,A.fw,A.iV,A.dW,A.hv,A.js,A.lF,A.lH,A.kI,A.kH,A.lg,A.kU,A.l1,A.kd,A.l8,A.l4,A.jy,A.ll,A.lm,A.kG,A.kP,A.jp,A.iU,A.jn,A.k9,A.ka,A.k8,A.k7,A.jj,A.iH,A.iI,A.ir,A.is,A.it,A.jU,A.jV,A.k2,A.k4,A.k3,A.iP,A.iQ,A.iR,A.jR,A.jQ,A.jP,A.jO,A.jS,A.jL,A.jM,A.jN,A.a8,A.a9,A.aa,A.kD,A.kE,A.kA,A.kz,A.ky,A.kv,A.kC,A.kB,A.iJ,A.lR,A.lJ,A.lK,A.lL,A.lv,A.lj,A.kg,A.iz,A.iy,A.ix,A.iw,A.iM,A.iN,A.ls,A.iY,A.iX,A.iZ,A.j0,A.j2,A.j_,A.jg])
q(A.fx,[A.kL,A.lG,A.lh,A.lt,A.kV,A.jv,A.jx,A.ko,A.kp,A.kq,A.lk,A.jY,A.jm,A.lC,A.iF,A.jA,A.jK,A.kx,A.kt,A.kw,A.ku,A.k6,A.lT,A.lU,A.lu,A.lw,A.lx,A.iA,A.iB,A.iC,A.iv,A.lQ,A.kF,A.j1,A.jC,A.jD,A.jE,A.jF,A.jG,A.jH,A.jI])
r(A.aL,A.ev)
q(A.a_,[A.e0,A.c9,A.fV,A.hC,A.hl,A.dw,A.hZ,A.h4,A.by,A.hD,A.es,A.d9,A.fz,A.fB])
r(A.e1,A.eD)
q(A.e1,[A.dc,A.aQ])
r(A.a5,A.dc)
q(A.fw,[A.lO,A.kJ,A.kK,A.la,A.kQ,A.kY,A.kW,A.kS,A.kX,A.kR,A.l0,A.l_,A.kZ,A.ke,A.lr,A.l7,A.ks,A.kr,A.jX,A.jl,A.lA,A.lz,A.jk,A.jf,A.j3,A.ja,A.jb,A.jc,A.jd,A.j8,A.j9,A.j4,A.j5,A.j6,A.j7,A.je,A.l2])
q(A.O,[A.B,A.dJ,A.aP])
q(A.B,[A.aD,A.G,A.V,A.e2])
r(A.dH,A.cx)
q(A.Q,[A.cy,A.cE,A.ei])
r(A.cS,A.bO)
q(A.cR,[A.r,A.bY])
r(A.bZ,A.dW)
r(A.e8,A.c9)
q(A.hv,[A.ht,A.cN])
r(A.hM,A.dw)
r(A.e3,A.cw)
r(A.bc,A.e3)
q(A.dY,[A.hL,A.eK,A.aB,A.i0])
r(A.d0,A.h1)
r(A.eF,A.d0)
r(A.eG,A.eF)
r(A.e6,A.eG)
q(A.e6,[A.h0,A.e7,A.cz])
r(A.eM,A.hZ)
r(A.eJ,A.hP)
r(A.i5,A.eS)
r(A.eC,A.bc)
r(A.dj,A.eU)
q(A.dj,[A.bS,A.eV])
r(A.eg,A.eH)
r(A.eP,A.eV)
q(A.co,[A.fF,A.fp])
q(A.fF,[A.fm,A.hG])
r(A.cp,A.hu)
q(A.cp,[A.ia,A.fq,A.hH])
r(A.fn,A.ia)
q(A.by,[A.d5,A.fR])
r(A.hR,A.eQ)
q(A.aN,[A.aZ,A.dd])
q(A.aZ,[A.p,A.bz])
r(A.u,A.p)
q(A.u,[A.fh,A.fj,A.cm,A.fJ,A.hm])
r(A.bv,A.q)
r(A.b4,A.bv)
r(A.ex,A.dE)
r(A.ez,A.el)
r(A.hW,A.ez)
r(A.eA,A.em)
r(A.fN,A.bg)
r(A.ki,A.kj)
q(A.kN,[A.d_,A.hz,A.bn])
q(A.P,[A.bJ,A.cb,A.hx,A.h2,A.hn,A.c4,A.eh,A.aU,A.d8,A.aj])
q(A.aU,[A.cq,A.h_,A.fo,A.fM,A.fv,A.d3,A.d4,A.h3])
r(A.eb,A.d3)
r(A.hg,A.d4)
q(A.aj,[A.h8,A.h7,A.af])
q(A.af,[A.h6,A.bh,A.hd,A.fE,A.fH,A.fK])
q(A.bh,[A.fW,A.fi,A.hy,A.fL,A.hi,A.fu,A.hh,A.hI])
q(A.ag,[A.hS,A.fC,A.bQ,A.hX,A.fy])
r(A.hT,A.hS)
r(A.hU,A.hT)
r(A.dD,A.hU)
r(A.hY,A.hX)
r(A.U,A.hY)
q(A.aQ,[A.ah,A.fb])
r(A.fI,A.i0)
q(A.a3,[A.bq,A.fr,A.dz,A.fP,A.fg,A.cT,A.hw,A.dV,A.cV,A.dQ,A.dR,A.cr,A.dT,A.cU,A.dU,A.fQ,A.fO,A.fe,A.dS,A.ff,A.fc,A.fd])
r(A.hQ,A.eg)
r(A.fD,A.hQ)
r(A.ef,A.hJ)
q(A.b0,[A.bP,A.b7,A.dC])
q(A.bP,[A.c6,A.I])
q(A.b7,[A.l,A.E,A.cC,A.cP])
r(A.fa,A.ds)
r(A.fs,A.fa)
q(A.H,[A.R,A.fT])
q(A.R,[A.eq,A.ca,A.ea,A.c3,A.d7,A.eu])
q(A.eq,[A.ay,A.du])
r(A.e9,A.ay)
r(A.fA,A.ca)
r(A.dy,A.fA)
r(A.ep,A.et)
q(A.du,[A.cl,A.cO])
q(A.cO,[A.dF,A.dI])
q(A.ea,[A.ec,A.d6])
r(A.er,A.ec)
r(A.dv,A.er)
r(A.ed,A.d6)
r(A.eo,A.d7)
r(A.bM,A.c3)
r(A.e4,A.bM)
r(A.dG,A.fT)
r(A.ft,A.dt)
r(A.fZ,A.b1)
q(A.fZ,[A.e5,A.c1,A.c2,A.c0])
r(A.cs,A.kh)
q(A.cs,[A.hf,A.hF,A.hK])
r(A.aY,A.hr)
q(A.ej,[A.ao,A.hs])
r(A.bD,A.hs)
r(A.jB,A.k5)
s(A.dc,A.bF)
s(A.eT,A.t)
s(A.eF,A.t)
s(A.eG,A.bp)
s(A.eD,A.t)
s(A.eH,A.aT)
s(A.eU,A.aT)
s(A.eV,A.id)
s(A.hS,A.i3)
s(A.hT,A.l5)
s(A.hU,A.hV)
s(A.hX,A.i3)
s(A.hY,A.hV)
s(A.i0,A.t)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{h:"int",F:"double",ad:"num",m:"String",y:"bool",ak:"Null",n:"List"},mangledNames:{},types:["y()","~()","ak()","H(H,F)","f(f)","F(F,L<h,h>)","m()","y(m)","N(N)","y(m?)","h(h,h)","y(h)","~(b4)","y(H)","y(av)","~(~())","0^(0^,0^)<ad>","ak(@)","m(m)","@()","~(cD,m,h)","~(D,m)","y(ag)","ay(ay)","F(f)","y(h,f)","n<F>(N)","h()","h(@,@)","h(D?)","m(b7)","y(c4)","y(D?)","~(@)","ak(@,c5)","aR<m,n<m>>()","n<m>()","~(h,@)","~(m,D?)","n<H>(H)","y(f)","ak(D,c5)","@(@)","aK(aK,aK)","y(D)","ap<@>(@)","m(cB)","y(m,m)","y(c0)","y(c1)","y(c2)","y(@)","~(@,@)","~(D?,D?)","@(@,m)","~(m,h)","~(m,h?)","n<f>(n<n<f>>,@)","n<N>(m,R)","~(m,R,n<N>)","h(h)","y(N)","~(n<H>,bs<H>)","F(h)","@(m)","N(n<F>)","f(F)","f(f,f)","F(m)","cD(@,@)","n<F>(L<h,n<F>>)","F(L<h,F>)","F(n<F>)","F(F)","bm(bm,bm)","m(m?)","m?()","h(b8)","y(d2[h])","D(b8)","D(av)","h(av,av)","n<b8>(be<D,n<av>>)","~(ad)","bD()","~(q)","~(U)","ak(~())","bb<ak>()","y(D?,D?)","~(D?)","n<N>(n<N>)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.r7(v.typeUniverse,JSON.parse('{"he":"cu","bE":"cu","bB":"cu","tI":"q","tP":"q","tT":"p","tJ":"u","tU":"u","tQ":"aZ","tN":"aZ","tV":"b4","tL":"bv","tK":"bz","u0":"bz","fU":{"y":[]},"dZ":{"ak":[]},"A":{"n":["1"],"O":["1"],"i":["1"]},"jr":{"A":["1"],"n":["1"],"O":["1"],"i":["1"]},"at":{"Q":["1"]},"c_":{"F":[],"ad":[],"ae":["ad"]},"cW":{"F":[],"h":[],"ad":[],"ae":["ad"]},"e_":{"F":[],"ad":[],"ae":["ad"]},"bA":{"m":[],"ae":["m"],"d2":[]},"cc":{"i":["2"]},"dB":{"Q":["2"]},"cn":{"cc":["1","2"],"i":["2"],"i.E":"2"},"ey":{"cn":["1","2"],"cc":["1","2"],"O":["2"],"i":["2"],"i.E":"2"},"ev":{"t":["2"],"n":["2"],"cc":["1","2"],"O":["2"],"i":["2"]},"aL":{"ev":["1","2"],"t":["2"],"n":["2"],"cc":["1","2"],"O":["2"],"i":["2"],"t.E":"2","i.E":"2"},"e0":{"a_":[]},"a5":{"t":["h"],"bF":["h"],"n":["h"],"O":["h"],"i":["h"],"t.E":"h","bF.E":"h"},"O":{"i":["1"]},"B":{"O":["1"],"i":["1"]},"aD":{"B":["1"],"O":["1"],"i":["1"],"B.E":"1","i.E":"1"},"J":{"Q":["1"]},"cx":{"i":["2"],"i.E":"2"},"dH":{"cx":["1","2"],"O":["2"],"i":["2"],"i.E":"2"},"cy":{"Q":["2"]},"G":{"B":["2"],"O":["2"],"i":["2"],"B.E":"2","i.E":"2"},"am":{"i":["1"],"i.E":"1"},"cE":{"Q":["1"]},"dM":{"i":["2"],"i.E":"2"},"dN":{"Q":["2"]},"bO":{"i":["1"],"i.E":"1"},"cS":{"bO":["1"],"O":["1"],"i":["1"],"i.E":"1"},"ei":{"Q":["1"]},"dJ":{"O":["1"],"i":["1"],"i.E":"1"},"dK":{"Q":["1"]},"an":{"i":["1"],"i.E":"1"},"cF":{"Q":["1"]},"dc":{"t":["1"],"bF":["1"],"n":["1"],"O":["1"],"i":["1"]},"V":{"B":["1"],"O":["1"],"i":["1"],"B.E":"1","i.E":"1"},"cR":{"aR":["1","2"]},"r":{"cR":["1","2"],"aR":["1","2"]},"ew":{"i":["1"],"i.E":"1"},"bY":{"cR":["1","2"],"aR":["1","2"]},"dW":{"aM":[],"bI":[]},"bZ":{"aM":[],"bI":[]},"e8":{"c9":[],"a_":[]},"fV":{"a_":[]},"hC":{"a_":[]},"h5":{"bo":[]},"eI":{"c5":[]},"aM":{"bI":[]},"fw":{"aM":[],"bI":[]},"fx":{"aM":[],"bI":[]},"hv":{"aM":[],"bI":[]},"ht":{"aM":[],"bI":[]},"cN":{"aM":[],"bI":[]},"hl":{"a_":[]},"hM":{"a_":[]},"bc":{"cw":["1","2"],"jt":["1","2"],"aR":["1","2"]},"aP":{"O":["1"],"i":["1"],"i.E":"1"},"cv":{"Q":["1"]},"ct":{"d2":[]},"di":{"cB":[],"cY":[]},"hL":{"i":["cB"],"i.E":"cB"},"de":{"Q":["cB"]},"da":{"cY":[]},"i7":{"i":["cY"],"i.E":"cY"},"i8":{"Q":["cY"]},"d0":{"cX":["1"]},"e6":{"t":["h"],"cX":["h"],"n":["h"],"O":["h"],"i":["h"],"bp":["h"]},"h0":{"t":["h"],"cX":["h"],"n":["h"],"O":["h"],"i":["h"],"bp":["h"],"t.E":"h","bp.E":"h"},"e7":{"t":["h"],"qC":[],"cX":["h"],"n":["h"],"O":["h"],"i":["h"],"bp":["h"],"t.E":"h","bp.E":"h"},"cz":{"t":["h"],"cD":[],"cX":["h"],"n":["h"],"O":["h"],"i":["h"],"bp":["h"],"t.E":"h","bp.E":"h"},"eL":{"nL":[]},"hZ":{"a_":[]},"eM":{"c9":[],"a_":[]},"ap":{"bb":["1"]},"ce":{"Q":["1"]},"eK":{"i":["1"],"i.E":"1"},"dx":{"a_":[]},"eJ":{"hP":["1"]},"eS":{"nS":[]},"i5":{"eS":[],"nS":[]},"eC":{"bc":["1","2"],"cw":["1","2"],"jt":["1","2"],"aR":["1","2"]},"bS":{"dj":["1"],"aT":["1"],"bs":["1"],"O":["1"],"i":["1"],"aT.E":"1"},"cH":{"Q":["1"]},"dY":{"i":["1"]},"e1":{"t":["1"],"n":["1"],"O":["1"],"i":["1"]},"e3":{"cw":["1","2"],"aR":["1","2"]},"cw":{"aR":["1","2"]},"e2":{"B":["1"],"ny":["1"],"O":["1"],"i":["1"],"B.E":"1","i.E":"1"},"eE":{"Q":["1"]},"eg":{"aT":["1"],"bs":["1"],"O":["1"],"i":["1"]},"dj":{"aT":["1"],"bs":["1"],"O":["1"],"i":["1"]},"eP":{"dj":["1"],"aT":["1"],"id":["1"],"bs":["1"],"O":["1"],"i":["1"],"aT.E":"1"},"fm":{"co":["m","n<h>"]},"ia":{"cp":["n<h>","m"]},"fn":{"cp":["n<h>","m"]},"fp":{"co":["n<h>","m"]},"fq":{"cp":["n<h>","m"]},"fF":{"co":["m","n<h>"]},"hG":{"co":["m","n<h>"]},"hH":{"cp":["n<h>","m"]},"F":{"ad":[],"ae":["ad"]},"h":{"ad":[],"ae":["ad"]},"n":{"O":["1"],"i":["1"]},"ad":{"ae":["ad"]},"cB":{"cY":[]},"bs":{"O":["1"],"i":["1"]},"m":{"ae":["m"],"d2":[]},"dw":{"a_":[]},"c9":{"a_":[]},"h4":{"a_":[]},"by":{"a_":[]},"d5":{"a_":[]},"fR":{"a_":[]},"hD":{"a_":[]},"es":{"a_":[]},"d9":{"a_":[]},"fz":{"a_":[]},"h9":{"a_":[]},"ek":{"a_":[]},"fB":{"a_":[]},"i_":{"bo":[]},"dO":{"bo":[]},"i9":{"c5":[]},"hk":{"i":["h"],"i.E":"h"},"hj":{"Q":["h"]},"a0":{"qu":[]},"eQ":{"hE":[]},"bi":{"hE":[]},"hR":{"hE":[]},"b4":{"q":[]},"u":{"p":[],"aN":[]},"fh":{"p":[],"aN":[]},"fj":{"p":[],"aN":[]},"cm":{"p":[],"aN":[]},"bz":{"aN":[]},"dE":{"mf":["ad"]},"p":{"aN":[]},"fJ":{"p":[],"aN":[]},"aZ":{"aN":[]},"hm":{"p":[],"aN":[]},"bv":{"q":[]},"dd":{"aN":[]},"ex":{"mf":["ad"]},"ez":{"el":["1"]},"hW":{"ez":["1"],"el":["1"]},"eA":{"em":["1"]},"i4":{"qe":[]},"aB":{"i":["n<1>"],"i.E":"n<1>"},"eB":{"Q":["n<1>"]},"fN":{"bg":[]},"c4":{"P":[]},"eh":{"P":[]},"aj":{"P":[]},"bJ":{"P":[]},"cb":{"P":[]},"hx":{"P":[]},"h2":{"P":[]},"hn":{"P":[]},"aU":{"P":[]},"cq":{"aU":[],"P":[]},"h_":{"aU":[],"P":[]},"fo":{"aU":[],"P":[]},"fM":{"aU":[],"P":[]},"fv":{"aU":[],"P":[]},"d3":{"aU":[],"P":[]},"d4":{"aU":[],"P":[]},"eb":{"d3":[],"aU":[],"P":[]},"hg":{"d4":[],"aU":[],"P":[]},"d8":{"P":[]},"h3":{"aU":[],"P":[]},"h8":{"aj":[],"P":[]},"h7":{"aj":[],"P":[]},"af":{"aj":[],"P":[]},"h6":{"af":[],"aj":[],"P":[]},"bh":{"af":[],"aj":[],"P":[]},"fW":{"bh":[],"af":[],"aj":[],"P":[]},"hd":{"af":[],"aj":[],"P":[]},"fE":{"af":[],"aj":[],"P":[]},"fH":{"af":[],"aj":[],"P":[]},"fi":{"bh":[],"af":[],"aj":[],"P":[]},"hy":{"bh":[],"af":[],"aj":[],"P":[]},"fL":{"bh":[],"af":[],"aj":[],"P":[]},"fK":{"af":[],"aj":[],"P":[]},"hi":{"bh":[],"af":[],"aj":[],"P":[]},"fu":{"bh":[],"af":[],"aj":[],"P":[]},"hh":{"bh":[],"af":[],"aj":[],"P":[]},"hI":{"bh":[],"af":[],"aj":[],"P":[]},"hJ":{"nR":[]},"aw":{"ae":["D"]},"dD":{"ag":[]},"U":{"ag":[]},"fC":{"ag":[]},"bQ":{"ag":[]},"fy":{"ag":[]},"ah":{"aQ":["ag"],"t":["ag"],"n":["ag"],"O":["ag"],"i":["ag"],"t.E":"ag","aQ.E":"ag"},"fI":{"t":["U"],"n":["U"],"O":["U"],"i":["U"],"t.E":"U","i.E":"U"},"aS":{"bo":[]},"bq":{"a3":[]},"fr":{"a3":[]},"dz":{"a3":[]},"fP":{"a3":[]},"fg":{"a3":[]},"cT":{"a3":[]},"hw":{"a3":[]},"dV":{"a3":[]},"cV":{"a3":[]},"dQ":{"a3":[]},"dR":{"a3":[]},"cr":{"a3":[]},"dT":{"a3":[]},"cU":{"a3":[]},"dU":{"a3":[]},"fQ":{"a3":[]},"fO":{"a3":[]},"fe":{"a3":[]},"dS":{"a3":[]},"ff":{"a3":[]},"fc":{"a3":[]},"fd":{"a3":[]},"fD":{"aT":["m"],"bs":["m"],"O":["m"],"i":["m"],"aT.E":"m"},"hQ":{"aT":["m"],"bs":["m"],"O":["m"],"i":["m"]},"df":{"bo":[]},"aQ":{"t":["1"],"n":["1"],"O":["1"],"i":["1"]},"ef":{"nR":[]},"b7":{"b0":[]},"bP":{"b0":[]},"c6":{"bP":[],"b0":[]},"I":{"bP":[],"b0":[]},"l":{"b7":[],"b0":[]},"E":{"b7":[],"b0":[]},"cC":{"b7":[],"b0":[]},"cP":{"b7":[],"b0":[]},"dC":{"b0":[]},"dP":{"Q":["b0"]},"fb":{"aQ":["U?"],"t":["U?"],"n":["U?"],"O":["U?"],"i":["U?"],"t.E":"U?","aQ.E":"U?"},"fa":{"ds":[]},"fs":{"ds":[]},"e9":{"ay":[],"R":[],"H":[]},"fA":{"ca":[],"R":[],"H":[]},"dy":{"ca":[],"R":[],"H":[]},"cl":{"R":[],"H":[]},"ay":{"R":[],"H":[]},"ep":{"et":[]},"eq":{"R":[],"H":[]},"du":{"R":[],"H":[]},"cO":{"R":[],"H":[]},"dF":{"R":[],"H":[]},"dI":{"R":[],"H":[]},"ea":{"R":[],"H":[]},"ec":{"R":[],"H":[]},"er":{"R":[],"H":[]},"dv":{"R":[],"H":[]},"d6":{"R":[],"H":[]},"ed":{"R":[],"H":[]},"c3":{"R":[],"H":[]},"d7":{"R":[],"H":[]},"bM":{"c3":[],"R":[],"H":[]},"eo":{"R":[],"H":[]},"e4":{"bM":[],"c3":[],"R":[],"H":[]},"fT":{"H":[]},"dG":{"H":[]},"R":{"H":[]},"ca":{"R":[],"H":[]},"eu":{"R":[],"H":[]},"ft":{"dt":[]},"c1":{"b1":[]},"c2":{"b1":[]},"c0":{"b1":[]},"fZ":{"b1":[]},"e5":{"b1":[]},"hc":{"bo":[]},"hf":{"cs":[]},"hF":{"cs":[]},"hK":{"cs":[]},"m3":{"bD":[],"bf":[],"ae":["bf"]},"aY":{"bt":[],"ae":["bt"]},"ao":{"m3":[],"bD":[],"bf":[],"ae":["bf"]},"bt":{"ae":["bt"]},"hr":{"bt":[],"ae":["bt"]},"bf":{"ae":["bf"]},"hs":{"bf":[],"ae":["bf"]},"ej":{"bf":[],"ae":["bf"]},"bD":{"bf":[],"ae":["bf"]},"cD":{"n":["h"],"O":["h"],"i":["h"]}}'))
A.r6(v.typeUniverse,JSON.parse('{"dc":1,"eT":2,"d0":1,"hu":2,"dY":1,"e1":1,"e3":2,"eg":1,"eD":1,"eH":1,"eU":1,"eV":1}'))
var u={D:" must not be greater than the number of characters in the file, ",U:"Cannot extract a file path from a URI with a fragment component",z:"Cannot extract a file path from a URI with a query component",Q:"Cannot extract a non-Windows file path from a file URI with an authority",w:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",v:"No color list in VMobject with attribute name ",A:"expected-attribute-value-but-got-right-bracket",g:"expected-closing-tag-but-got-right-bracket",f:"expected-doctype-name-but-got-right-bracket",S:"expected-space-or-right-bracket-in-doctype",d:"unexpected-bang-after-double-dash-in-comment",H:"unexpected-character-after-attribute-value",B:"unexpected-character-after-soldius-in-tag",V:"unexpected-character-in-unquoted-attribute-value",K:"unexpected-dash-after-double-dash-in-comment",q:"unexpected-frameset-in-frameset-innerhtml",G:"unexpected-html-element-in-foreign-content",M:"unexpected-start-tag-implies-table-voodoo",r:"unexpected-table-element-end-tag-in-select-in-table",a:"unexpected-table-element-start-tag-in-select-in-table"}
var t=(function rtii(){var s=A.aI
return{pc:s("@<h>"),aY:s("cl"),Y:s("bm"),u:s("dx"),fy:s("aK"),jQ:s("cm"),g4:s("E"),E:s("a5"),G:s("N"),cw:s("cP"),bP:s("ae<@>"),B:s("r<m,m>"),R:s("r<m,@>"),i:s("dC"),dA:s("dD"),gt:s("O<@>"),h:s("U"),ia:s("I"),fz:s("a_"),fq:s("q"),d3:s("b2<b1>"),gG:s("b2<c0>"),m4:s("b2<c1>"),mc:s("b2<c2>"),cY:s("bn"),e:s("b1"),mA:s("bo"),lS:s("m3"),gY:s("bI"),g7:s("bb<@>"),ha:s("bY<d_,m>"),gx:s("bJ"),aB:s("cV"),id:s("bZ<F>"),oS:s("aB<H>"),c2:s("aB<D>"),pn:s("aB<R>"),b5:s("aB<f>"),lx:s("aB<F>"),lb:s("aB<h>"),hl:s("i<ag>"),bq:s("i<m>"),e7:s("i<@>"),nC:s("A<cl>"),fp:s("A<bm>"),iX:s("A<aK>"),O:s("A<N>"),hR:s("A<cQ>"),il:s("A<U>"),fO:s("A<b2<b1>>"),oQ:s("A<aj>"),b1:s("A<ay>"),i7:s("A<n<H>>"),bo:s("A<n<D>>"),Z:s("A<n<f>>"),b:s("A<n<F>>"),fC:s("A<n<h>>"),bV:s("A<aR<m,@>>"),kU:s("A<cZ>"),r:s("A<H>"),d:s("A<ag>"),g:s("A<o<m,m>>"),bD:s("A<aS>"),gg:s("A<a3>"),b7:s("A<c4>"),iM:s("A<eh>"),nn:s("A<bM>"),dw:s("A<em<@>>"),s:s("A<m>"),ks:s("A<b7>"),kG:s("A<en>"),ez:s("A<db<f,f,f,f>>"),bs:s("A<cD>"),U:s("A<R>"),l:s("A<f>"),pg:s("A<av>"),dg:s("A<b8>"),n:s("A<F>"),dG:s("A<@>"),t:s("A<h>"),lB:s("A<U?>"),hg:s("A<ag?>"),D:s("A<m?>"),po:s("A<H(H,F)>"),T:s("dZ"),dY:s("bB"),dX:s("cX<@>"),lX:s("tR"),am:s("tS"),f:s("ay"),oP:s("jt<D,m>"),ev:s("n<N>"),jB:s("n<U>"),oR:s("n<b2<b1>>"),ls:s("n<n<f>>"),a:s("n<H>"),I:s("n<m>"),oX:s("n<b7>"),fr:s("n<P>"),y:s("n<f>"),bd:s("n<F>"),gs:s("n<@>"),L:s("n<h>"),eU:s("n<av?>"),le:s("n<H(H,F)>"),mH:s("af"),lO:s("be<D,n<av>>"),fg:s("aR<m,N>"),fY:s("aR<bn,n<b2<b1>>>"),gQ:s("G<m,m>"),iZ:s("G<m,@>"),aQ:s("G<f,F>"),j:s("H"),k5:s("H(H,F)"),gn:s("c0"),gD:s("b4"),m6:s("e5"),oJ:s("c1"),nB:s("c2"),hD:s("cz"),A:s("ag"),P:s("ak"),K:s("D"),w:s("o<m,m>"),h2:s("o<m,m?>"),iA:s("o<m?,m?>"),jK:s("l"),oc:s("d2"),n8:s("cA<ad>"),f_:s("ny<m>"),mx:s("mf<ad>"),lu:s("cB"),dT:s("c4"),b9:s("d8"),ns:s("bs<H>"),hq:s("bt"),hs:s("bf"),ol:s("bD"),lH:s("cC"),k:s("c5"),ny:s("c6"),N:s("m"),v:s("b7"),gL:s("m(m)"),mN:s("aD<f>"),fn:s("bP"),oI:s("bQ"),J:s("bg"),bF:s("P"),iu:s("L<f,f>"),d7:s("L<h,F>"),o:s("L<h,h>"),kk:s("L<h,n<F>>"),cn:s("db<f,f,f,f>"),f5:s("nL"),do:s("c9"),hb:s("cD"),cx:s("bE"),jJ:s("hE"),bX:s("R"),V:s("f"),ew:s("f(f)"),x:s("an<U>"),na:s("an<m>"),pl:s("cF<U>"),eX:s("hW<b4>"),av:s("ap<ak>"),j_:s("ap<@>"),hy:s("ap<h>"),iS:s("ap<ad>"),C:s("av"),nR:s("b8"),km:s("eJ<ad>"),k4:s("y"),c:s("y()"),cT:s("y(U)"),iW:s("y(D)"),gS:s("y(m)"),aP:s("y(av)"),gw:s("y(h)"),W:s("F"),iJ:s("F(F,L<h,h>)"),eL:s("F(f)"),f3:s("F(F)"),z:s("@"),mY:s("@()"),mq:s("@(D)"),ng:s("@(D,c5)"),f6:s("@(m)"),S:s("h"),eK:s("0&*"),_:s("D*"),mV:s("U?"),gK:s("bb<ak>?"),q:s("n<N>?"),gv:s("n<ay>?"),jq:s("n<en>?"),fA:s("n<f>?"),f8:s("n<h>?"),m:s("aR<m,D?>?"),e1:s("ag?"),X:s("D?"),oA:s("bs<m>?"),g9:s("aU?"),jv:s("m?"),nU:s("b0?"),F:s("cG<@,@>?"),dd:s("av?"),nF:s("i2?"),pi:s("y(m)?"),Q:s("@(q)?"),dU:s("h(U,U)?"),jE:s("~()?"),p:s("ad"),H:s("~"),M:s("~()"),m3:s("~(cZ)"),hv:s("~(ad)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.a7=A.cm.prototype
B.q=A.dA.prototype
B.b5=J.dX.prototype
B.a=J.A.prototype
B.e=J.cW.prototype
B.h=J.c_.prototype
B.b=J.bA.prototype
B.b6=J.bB.prototype
B.b7=J.b3.prototype
B.r=A.e7.prototype
B.cM=A.cz.prototype
B.aC=J.he.prototype
B.a1=J.bE.prototype
B.e_=A.dd.prototype
B.aH=new A.fn(!1,127)
B.u=new A.f(-1,0,0)
B.L=new A.aK(null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.ab=new A.N(0.73333,0.73333,0.73333,1)
B.m=new A.f(0,-1,0)
B.b8=A.a(s([0]),t.n)
B.aU=new A.aK(B.ab,!0,!1,B.m,1,!0,0.1,1,null,B.b8,!1,null,2,0,0.75,0.25,0.25,0.25,null,4)
B.M=new A.aK(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.O=new A.bZ(A.oT(),t.id)
B.a3=new A.bZ(A.oT(),A.aI("bZ<h>"))
B.N=new A.bZ(A.tt(),t.id)
B.aV=new A.fm()
B.e1=new A.fq()
B.aW=new A.fp()
B.a4=new A.dK(A.aI("dK<0&>"))
B.a5=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.aX=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.b1=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.aY=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.aZ=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.b0=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.b_=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.a6=function(hooks) { return hooks; }

B.b2=new A.h9()
B.n=new A.kb()
B.v=new A.hG()
B.k=new A.i5()
B.b3=new A.i9()
B.o=new A.N(0,0,0,0)
B.a8=new A.N(0,0,0,1)
B.C=new A.N(1,1,0,1)
B.c=new A.N(1,1,1,1)
B.a9=new A.N(0.98824,0.38431,0.33333,1)
B.b4=new A.N(0.53333,0.53333,0.53333,1)
B.aa=new A.N(0.51373,0.75686,0.40392,1)
B.w=new A.N(0.3451,0.76863,0.86667,1)
B.D=new A.N(0.60392,0.44706,0.67451,1)
B.x=new A.N(0.81961,0.27843,0.74118,1)
B.y=new A.N(1,0.52549,0.18431,1)
B.E=new A.bn("mouseMovedEvent")
B.z=new A.bn("mousePressedEvent")
B.A=new A.bn("mouseReleasedEvent")
B.B=new A.bn("mouseDraggedEvent")
B.P=new A.bn("keyPressedEvent")
B.Q=new A.bn("keyReleasedEvent")
B.F=A.a(s([0,0,32776,33792,1,10240,0,0]),t.t)
B.aq=new A.o("http://www.w3.org/1999/xhtml","applet",t.w)
B.as=new A.o("http://www.w3.org/1999/xhtml","caption",t.w)
B.a0=new A.o("http://www.w3.org/1999/xhtml","html",t.w)
B.av=new A.o("http://www.w3.org/1999/xhtml","marquee",t.w)
B.aB=new A.o("http://www.w3.org/1999/xhtml","object",t.w)
B.Z=new A.o("http://www.w3.org/1999/xhtml","table",t.w)
B.au=new A.o("http://www.w3.org/1999/xhtml","td",t.w)
B.ao=new A.o("http://www.w3.org/1999/xhtml","th",t.w)
B.ax=new A.o("http://www.w3.org/1998/Math/MathML","mi",t.w)
B.ar=new A.o("http://www.w3.org/1998/Math/MathML","mo",t.w)
B.az=new A.o("http://www.w3.org/1998/Math/MathML","mn",t.w)
B.at=new A.o("http://www.w3.org/1998/Math/MathML","ms",t.w)
B.ap=new A.o("http://www.w3.org/1998/Math/MathML","mtext",t.w)
B.dp=new A.o("http://www.w3.org/1998/Math/MathML","annotation-xml",t.w)
B.a_=new A.o("http://www.w3.org/2000/svg","foreignObject",t.w)
B.ay=new A.o("http://www.w3.org/2000/svg","desc",t.w)
B.an=new A.o("http://www.w3.org/2000/svg","title",t.w)
B.R=A.a(s([B.aq,B.as,B.a0,B.av,B.aB,B.Z,B.au,B.ao,B.ax,B.ar,B.az,B.at,B.ap,B.dp,B.a_,B.ay,B.an]),t.g)
B.aA=new A.o("http://www.w3.org/1999/xhtml","button",t.w)
B.ba=A.a(s([B.aA]),t.g)
B.bb=A.a(s(["b","big","blockquote","body","br","center","code","dd","div","dl","dt","em","embed","h1","h2","h3","h4","h5","h6","head","hr","i","img","li","listing","menu","meta","nobr","ol","p","pre","ruby","s","small","span","strike","strong","sub","sup","table","tt","u","ul","var"]),t.s)
B.G=A.a(s(["h1","h2","h3","h4","h5","h6"]),t.s)
B.S=A.a(s(["dd","dt","li","option","optgroup","p","rp","rt"]),t.s)
B.H=A.a(s([0,0,65490,45055,65535,34815,65534,18431]),t.t)
B.be=A.a(s(["+//silmaril//dtd html pro v0r11 19970101//","-//advasoft ltd//dtd html 3.0 aswedit + extensions//","-//as//dtd html 3.0 aswedit + extensions//","-//ietf//dtd html 2.0 level 1//","-//ietf//dtd html 2.0 level 2//","-//ietf//dtd html 2.0 strict level 1//","-//ietf//dtd html 2.0 strict level 2//","-//ietf//dtd html 2.0 strict//","-//ietf//dtd html 2.0//","-//ietf//dtd html 2.1e//","-//ietf//dtd html 3.0//","-//ietf//dtd html 3.2 final//","-//ietf//dtd html 3.2//","-//ietf//dtd html 3//","-//ietf//dtd html level 0//","-//ietf//dtd html level 1//","-//ietf//dtd html level 2//","-//ietf//dtd html level 3//","-//ietf//dtd html strict level 0//","-//ietf//dtd html strict level 1//","-//ietf//dtd html strict level 2//","-//ietf//dtd html strict level 3//","-//ietf//dtd html strict//","-//ietf//dtd html//","-//metrius//dtd metrius presentational//","-//microsoft//dtd internet explorer 2.0 html strict//","-//microsoft//dtd internet explorer 2.0 html//","-//microsoft//dtd internet explorer 2.0 tables//","-//microsoft//dtd internet explorer 3.0 html strict//","-//microsoft//dtd internet explorer 3.0 html//","-//microsoft//dtd internet explorer 3.0 tables//","-//netscape comm. corp.//dtd html//","-//netscape comm. corp.//dtd strict html//","-//o'reilly and associates//dtd html 2.0//","-//o'reilly and associates//dtd html extended 1.0//","-//o'reilly and associates//dtd html extended relaxed 1.0//","-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//","-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//","-//spyglass//dtd html 2.0 extended//","-//sq//dtd html 2.0 hotmetal + extensions//","-//sun microsystems corp.//dtd hotjava html//","-//sun microsystems corp.//dtd hotjava strict html//","-//w3c//dtd html 3 1995-03-24//","-//w3c//dtd html 3.2 draft//","-//w3c//dtd html 3.2 final//","-//w3c//dtd html 3.2//","-//w3c//dtd html 3.2s draft//","-//w3c//dtd html 4.0 frameset//","-//w3c//dtd html 4.0 transitional//","-//w3c//dtd html experimental 19960712//","-//w3c//dtd html experimental 970421//","-//w3c//dtd w3 html//","-//w3o//dtd w3 html 3.0//","-//webtechs//dtd mozilla html 2.0//","-//webtechs//dtd mozilla html//"]),t.s)
B.I=A.a(s([0,0,26624,1023,65534,2047,65534,2047]),t.t)
B.bf=A.a(s(["uU","bB","lL","iI","cC"]),t.s)
B.bg=A.a(s([11,65534,65535,131070,131071,196606,196607,262142,262143,327678,327679,393214,393215,458750,458751,524286,524287,589822,589823,655358,655359,720894,720895,786430,786431,851966,851967,917502,917503,983038,983039,1048574,1048575,1114110,1114111]),t.t)
B.T=A.a(s(["table","tbody","tfoot","thead","tr"]),t.s)
B.am=new A.o("http://www.w3.org/1999/xhtml","ol",t.w)
B.aw=new A.o("http://www.w3.org/1999/xhtml","ul",t.w)
B.bh=A.a(s([B.am,B.aw]),t.g)
B.i=A.a(s(["unit","value"]),t.s)
B.bH=new A.r(2,{unit:600,value:"em"},B.i,t.R)
B.bY=new A.r(2,{unit:601,value:"ex"},B.i,t.R)
B.c1=new A.r(2,{unit:602,value:"px"},B.i,t.R)
B.bT=new A.r(2,{unit:603,value:"cm"},B.i,t.R)
B.bW=new A.r(2,{unit:604,value:"mm"},B.i,t.R)
B.bR=new A.r(2,{unit:605,value:"in"},B.i,t.R)
B.bG=new A.r(2,{unit:606,value:"pt"},B.i,t.R)
B.c4=new A.r(2,{unit:607,value:"pc"},B.i,t.R)
B.bQ=new A.r(2,{unit:608,value:"deg"},B.i,t.R)
B.c0=new A.r(2,{unit:609,value:"rad"},B.i,t.R)
B.bK=new A.r(2,{unit:610,value:"grad"},B.i,t.R)
B.bZ=new A.r(2,{unit:611,value:"turn"},B.i,t.R)
B.bL=new A.r(2,{unit:612,value:"ms"},B.i,t.R)
B.bX=new A.r(2,{unit:613,value:"s"},B.i,t.R)
B.bN=new A.r(2,{unit:614,value:"hz"},B.i,t.R)
B.c2=new A.r(2,{unit:615,value:"khz"},B.i,t.R)
B.bP=new A.r(2,{unit:617,value:"fr"},B.i,t.R)
B.bJ=new A.r(2,{unit:618,value:"dpi"},B.i,t.R)
B.bM=new A.r(2,{unit:619,value:"dpcm"},B.i,t.R)
B.bS=new A.r(2,{unit:620,value:"dppx"},B.i,t.R)
B.bI=new A.r(2,{unit:621,value:"ch"},B.i,t.R)
B.bV=new A.r(2,{unit:622,value:"rem"},B.i,t.R)
B.c_=new A.r(2,{unit:623,value:"vw"},B.i,t.R)
B.bU=new A.r(2,{unit:624,value:"vh"},B.i,t.R)
B.c3=new A.r(2,{unit:625,value:"vmin"},B.i,t.R)
B.bO=new A.r(2,{unit:626,value:"vmax"},B.i,t.R)
B.ac=A.a(s([B.bH,B.bY,B.c1,B.bT,B.bW,B.bR,B.bG,B.c4,B.bQ,B.c0,B.bK,B.bZ,B.bL,B.bX,B.bN,B.c2,B.bP,B.bJ,B.bM,B.bS,B.bI,B.bV,B.c_,B.bU,B.c3,B.bO]),t.bV)
B.ad=A.a(s(["-//w3c//dtd html 4.01 frameset//","-//w3c//dtd html 4.01 transitional//"]),t.s)
B.bj=A.a(s(["address","div","p"]),t.s)
B.ae=A.a(s([B.ax,B.ar,B.az,B.at,B.ap]),t.g)
B.f=A.a(s(["type","value"]),t.s)
B.cs=new A.r(2,{type:670,value:"top-left-corner"},B.f,t.R)
B.cm=new A.r(2,{type:671,value:"top-left"},B.f,t.R)
B.cA=new A.r(2,{type:672,value:"top-center"},B.f,t.R)
B.cB=new A.r(2,{type:673,value:"top-right"},B.f,t.R)
B.c8=new A.r(2,{type:674,value:"top-right-corner"},B.f,t.R)
B.cf=new A.r(2,{type:675,value:"bottom-left-corner"},B.f,t.R)
B.cq=new A.r(2,{type:676,value:"bottom-left"},B.f,t.R)
B.cz=new A.r(2,{type:677,value:"bottom-center"},B.f,t.R)
B.ca=new A.r(2,{type:678,value:"bottom-right"},B.f,t.R)
B.ch=new A.r(2,{type:679,value:"bottom-right-corner"},B.f,t.R)
B.cy=new A.r(2,{type:680,value:"left-top"},B.f,t.R)
B.cj=new A.r(2,{type:681,value:"left-middle"},B.f,t.R)
B.cg=new A.r(2,{type:682,value:"right-bottom"},B.f,t.R)
B.cc=new A.r(2,{type:683,value:"right-top"},B.f,t.R)
B.cu=new A.r(2,{type:684,value:"right-middle"},B.f,t.R)
B.cv=new A.r(2,{type:685,value:"right-bottom"},B.f,t.R)
B.bk=A.a(s([B.cs,B.cm,B.cA,B.cB,B.c8,B.cf,B.cq,B.cz,B.ca,B.ch,B.cy,B.cj,B.cg,B.cc,B.cu,B.cv]),t.bV)
B.ag=A.a(s(["0","1","2","3","4","5","6","7","8","9"]),t.s)
B.U=A.a(s([]),t.g)
B.p=A.a(s([]),t.s)
B.bm=A.a(s([0,0,32722,12287,65534,34815,65534,18431]),t.t)
B.bn=A.a(s(["oO","cC","tT","yY","pP","eE"]),t.s)
B.bo=A.a(s([B.E,B.z,B.A,B.B,B.P,B.Q]),A.aI("A<bn>"))
B.bp=A.a(s(["-//w3o//dtd w3 html strict 3.0//en//","-/w3c/dtd html 4.0 transitional/en","html"]),t.s)
B.cG=new A.r(2,{type:641,value:"import"},B.f,t.R)
B.cp=new A.r(2,{type:642,value:"media"},B.f,t.R)
B.cn=new A.r(2,{type:643,value:"page"},B.f,t.R)
B.cE=new A.r(2,{type:644,value:"charset"},B.f,t.R)
B.ct=new A.r(2,{type:645,value:"stylet"},B.f,t.R)
B.cb=new A.r(2,{type:646,value:"keyframes"},B.f,t.R)
B.cw=new A.r(2,{type:647,value:"-webkit-keyframes"},B.f,t.R)
B.cF=new A.r(2,{type:648,value:"-moz-keyframes"},B.f,t.R)
B.cr=new A.r(2,{type:649,value:"-ms-keyframes"},B.f,t.R)
B.ci=new A.r(2,{type:650,value:"-o-keyframes"},B.f,t.R)
B.cI=new A.r(2,{type:651,value:"font-face"},B.f,t.R)
B.cl=new A.r(2,{type:652,value:"namespace"},B.f,t.R)
B.co=new A.r(2,{type:653,value:"host"},B.f,t.R)
B.c9=new A.r(2,{type:654,value:"mixin"},B.f,t.R)
B.cx=new A.r(2,{type:655,value:"include"},B.f,t.R)
B.cD=new A.r(2,{type:656,value:"content"},B.f,t.R)
B.ce=new A.r(2,{type:657,value:"extend"},B.f,t.R)
B.cC=new A.r(2,{type:658,value:"-moz-document"},B.f,t.R)
B.cd=new A.r(2,{type:659,value:"supports"},B.f,t.R)
B.ck=new A.r(2,{type:660,value:"viewport"},B.f,t.R)
B.cH=new A.r(2,{type:661,value:"-ms-viewport"},B.f,t.R)
B.bq=A.a(s([B.cG,B.cp,B.cn,B.cE,B.ct,B.cb,B.cw,B.cF,B.cr,B.ci,B.cI,B.cl,B.co,B.c9,B.cx,B.cD,B.ce,B.cC,B.cd,B.ck,B.cH]),t.bV)
B.br=A.a(s(["yY","sS","tT","eE","mM"]),t.s)
B.d1=new A.o("http://www.w3.org/1998/Math/MathML","annotaion-xml",t.w)
B.bu=A.a(s([B.d1,B.a_,B.ay,B.an]),t.g)
B.J=A.a(s([0,0,24576,1023,65534,34815,65534,18431]),t.t)
B.bv=A.a(s(["-//w3c//dtd xhtml 1.0 frameset//","-//w3c//dtd xhtml 1.0 transitional//"]),t.s)
B.bw=A.a(s(["pre","listing","textarea"]),t.s)
B.ah=A.a(s([0,0,32754,11263,65534,34815,65534,18431]),t.t)
B.ai=A.a(s([0,0,65490,12287,65535,34815,65534,18431]),t.t)
B.bx=A.a(s(["C","D","A","T","A","["]),t.s)
B.cP=new A.o("http://www.w3.org/1999/xhtml","optgroup",t.w)
B.dR=new A.o("http://www.w3.org/1999/xhtml","option",t.w)
B.by=A.a(s([B.cP,B.dR]),t.g)
B.bz=A.a(s(["tbody","tfoot","thead","html"]),t.s)
B.bC=A.a(s([B.a0,B.Z]),t.g)
B.dF=new A.o("http://www.w3.org/1999/xhtml","address",t.w)
B.cR=new A.o("http://www.w3.org/1999/xhtml","area",t.w)
B.dU=new A.o("http://www.w3.org/1999/xhtml","article",t.w)
B.df=new A.o("http://www.w3.org/1999/xhtml","aside",t.w)
B.dm=new A.o("http://www.w3.org/1999/xhtml","base",t.w)
B.d7=new A.o("http://www.w3.org/1999/xhtml","basefont",t.w)
B.d9=new A.o("http://www.w3.org/1999/xhtml","bgsound",t.w)
B.dz=new A.o("http://www.w3.org/1999/xhtml","blockquote",t.w)
B.d6=new A.o("http://www.w3.org/1999/xhtml","body",t.w)
B.de=new A.o("http://www.w3.org/1999/xhtml","br",t.w)
B.dD=new A.o("http://www.w3.org/1999/xhtml","center",t.w)
B.cU=new A.o("http://www.w3.org/1999/xhtml","col",t.w)
B.dI=new A.o("http://www.w3.org/1999/xhtml","colgroup",t.w)
B.dh=new A.o("http://www.w3.org/1999/xhtml","command",t.w)
B.dN=new A.o("http://www.w3.org/1999/xhtml","dd",t.w)
B.dq=new A.o("http://www.w3.org/1999/xhtml","details",t.w)
B.d2=new A.o("http://www.w3.org/1999/xhtml","dir",t.w)
B.d0=new A.o("http://www.w3.org/1999/xhtml","div",t.w)
B.dL=new A.o("http://www.w3.org/1999/xhtml","dl",t.w)
B.di=new A.o("http://www.w3.org/1999/xhtml","dt",t.w)
B.cT=new A.o("http://www.w3.org/1999/xhtml","embed",t.w)
B.cO=new A.o("http://www.w3.org/1999/xhtml","fieldset",t.w)
B.dx=new A.o("http://www.w3.org/1999/xhtml","figure",t.w)
B.dM=new A.o("http://www.w3.org/1999/xhtml","footer",t.w)
B.d4=new A.o("http://www.w3.org/1999/xhtml","form",t.w)
B.dj=new A.o("http://www.w3.org/1999/xhtml","frame",t.w)
B.cQ=new A.o("http://www.w3.org/1999/xhtml","frameset",t.w)
B.cX=new A.o("http://www.w3.org/1999/xhtml","h1",t.w)
B.dT=new A.o("http://www.w3.org/1999/xhtml","h2",t.w)
B.cS=new A.o("http://www.w3.org/1999/xhtml","h3",t.w)
B.dr=new A.o("http://www.w3.org/1999/xhtml","h4",t.w)
B.dQ=new A.o("http://www.w3.org/1999/xhtml","h5",t.w)
B.dw=new A.o("http://www.w3.org/1999/xhtml","h6",t.w)
B.da=new A.o("http://www.w3.org/1999/xhtml","head",t.w)
B.dS=new A.o("http://www.w3.org/1999/xhtml","header",t.w)
B.dg=new A.o("http://www.w3.org/1999/xhtml","hr",t.w)
B.dG=new A.o("http://www.w3.org/1999/xhtml","iframe",t.w)
B.dy=new A.o("http://www.w3.org/1999/xhtml","image",t.w)
B.dk=new A.o("http://www.w3.org/1999/xhtml","img",t.w)
B.dt=new A.o("http://www.w3.org/1999/xhtml","input",t.w)
B.dE=new A.o("http://www.w3.org/1999/xhtml","isindex",t.w)
B.dd=new A.o("http://www.w3.org/1999/xhtml","li",t.w)
B.dc=new A.o("http://www.w3.org/1999/xhtml","link",t.w)
B.dC=new A.o("http://www.w3.org/1999/xhtml","listing",t.w)
B.cY=new A.o("http://www.w3.org/1999/xhtml","men",t.w)
B.dA=new A.o("http://www.w3.org/1999/xhtml","meta",t.w)
B.db=new A.o("http://www.w3.org/1999/xhtml","nav",t.w)
B.dO=new A.o("http://www.w3.org/1999/xhtml","noembed",t.w)
B.dn=new A.o("http://www.w3.org/1999/xhtml","noframes",t.w)
B.dl=new A.o("http://www.w3.org/1999/xhtml","noscript",t.w)
B.dH=new A.o("http://www.w3.org/1999/xhtml","p",t.w)
B.cV=new A.o("http://www.w3.org/1999/xhtml","param",t.w)
B.du=new A.o("http://www.w3.org/1999/xhtml","plaintext",t.w)
B.cN=new A.o("http://www.w3.org/1999/xhtml","pre",t.w)
B.ds=new A.o("http://www.w3.org/1999/xhtml","script",t.w)
B.d8=new A.o("http://www.w3.org/1999/xhtml","section",t.w)
B.d3=new A.o("http://www.w3.org/1999/xhtml","select",t.w)
B.cZ=new A.o("http://www.w3.org/1999/xhtml","style",t.w)
B.dJ=new A.o("http://www.w3.org/1999/xhtml","tbody",t.w)
B.d_=new A.o("http://www.w3.org/1999/xhtml","textarea",t.w)
B.dB=new A.o("http://www.w3.org/1999/xhtml","tfoot",t.w)
B.d5=new A.o("http://www.w3.org/1999/xhtml","thead",t.w)
B.dv=new A.o("http://www.w3.org/1999/xhtml","title",t.w)
B.cW=new A.o("http://www.w3.org/1999/xhtml","tr",t.w)
B.dP=new A.o("http://www.w3.org/1999/xhtml","wbr",t.w)
B.dK=new A.o("http://www.w3.org/1999/xhtml","xmp",t.w)
B.V=A.a(s([B.dF,B.aq,B.cR,B.dU,B.df,B.dm,B.d7,B.d9,B.dz,B.d6,B.de,B.aA,B.as,B.dD,B.cU,B.dI,B.dh,B.dN,B.dq,B.d2,B.d0,B.dL,B.di,B.cT,B.cO,B.dx,B.dM,B.d4,B.dj,B.cQ,B.cX,B.dT,B.cS,B.dr,B.dQ,B.dw,B.da,B.dS,B.dg,B.a0,B.dG,B.dy,B.dk,B.dt,B.dE,B.dd,B.dc,B.dC,B.av,B.cY,B.dA,B.db,B.dO,B.dn,B.dl,B.aB,B.am,B.dH,B.cV,B.du,B.cN,B.ds,B.d8,B.d3,B.cZ,B.Z,B.dJ,B.au,B.d_,B.dB,B.ao,B.d5,B.dv,B.cW,B.aw,B.dP,B.dK,B.a_]),t.g)
B.b9=A.a(s(["AElig","AElig;","AMP","AMP;","Aacute","Aacute;","Abreve;","Acirc","Acirc;","Acy;","Afr;","Agrave","Agrave;","Alpha;","Amacr;","And;","Aogon;","Aopf;","ApplyFunction;","Aring","Aring;","Ascr;","Assign;","Atilde","Atilde;","Auml","Auml;","Backslash;","Barv;","Barwed;","Bcy;","Because;","Bernoullis;","Beta;","Bfr;","Bopf;","Breve;","Bscr;","Bumpeq;","CHcy;","COPY","COPY;","Cacute;","Cap;","CapitalDifferentialD;","Cayleys;","Ccaron;","Ccedil","Ccedil;","Ccirc;","Cconint;","Cdot;","Cedilla;","CenterDot;","Cfr;","Chi;","CircleDot;","CircleMinus;","CirclePlus;","CircleTimes;","ClockwiseContourIntegral;","CloseCurlyDoubleQuote;","CloseCurlyQuote;","Colon;","Colone;","Congruent;","Conint;","ContourIntegral;","Copf;","Coproduct;","CounterClockwiseContourIntegral;","Cross;","Cscr;","Cup;","CupCap;","DD;","DDotrahd;","DJcy;","DScy;","DZcy;","Dagger;","Darr;","Dashv;","Dcaron;","Dcy;","Del;","Delta;","Dfr;","DiacriticalAcute;","DiacriticalDot;","DiacriticalDoubleAcute;","DiacriticalGrave;","DiacriticalTilde;","Diamond;","DifferentialD;","Dopf;","Dot;","DotDot;","DotEqual;","DoubleContourIntegral;","DoubleDot;","DoubleDownArrow;","DoubleLeftArrow;","DoubleLeftRightArrow;","DoubleLeftTee;","DoubleLongLeftArrow;","DoubleLongLeftRightArrow;","DoubleLongRightArrow;","DoubleRightArrow;","DoubleRightTee;","DoubleUpArrow;","DoubleUpDownArrow;","DoubleVerticalBar;","DownArrow;","DownArrowBar;","DownArrowUpArrow;","DownBreve;","DownLeftRightVector;","DownLeftTeeVector;","DownLeftVector;","DownLeftVectorBar;","DownRightTeeVector;","DownRightVector;","DownRightVectorBar;","DownTee;","DownTeeArrow;","Downarrow;","Dscr;","Dstrok;","ENG;","ETH","ETH;","Eacute","Eacute;","Ecaron;","Ecirc","Ecirc;","Ecy;","Edot;","Efr;","Egrave","Egrave;","Element;","Emacr;","EmptySmallSquare;","EmptyVerySmallSquare;","Eogon;","Eopf;","Epsilon;","Equal;","EqualTilde;","Equilibrium;","Escr;","Esim;","Eta;","Euml","Euml;","Exists;","ExponentialE;","Fcy;","Ffr;","FilledSmallSquare;","FilledVerySmallSquare;","Fopf;","ForAll;","Fouriertrf;","Fscr;","GJcy;","GT","GT;","Gamma;","Gammad;","Gbreve;","Gcedil;","Gcirc;","Gcy;","Gdot;","Gfr;","Gg;","Gopf;","GreaterEqual;","GreaterEqualLess;","GreaterFullEqual;","GreaterGreater;","GreaterLess;","GreaterSlantEqual;","GreaterTilde;","Gscr;","Gt;","HARDcy;","Hacek;","Hat;","Hcirc;","Hfr;","HilbertSpace;","Hopf;","HorizontalLine;","Hscr;","Hstrok;","HumpDownHump;","HumpEqual;","IEcy;","IJlig;","IOcy;","Iacute","Iacute;","Icirc","Icirc;","Icy;","Idot;","Ifr;","Igrave","Igrave;","Im;","Imacr;","ImaginaryI;","Implies;","Int;","Integral;","Intersection;","InvisibleComma;","InvisibleTimes;","Iogon;","Iopf;","Iota;","Iscr;","Itilde;","Iukcy;","Iuml","Iuml;","Jcirc;","Jcy;","Jfr;","Jopf;","Jscr;","Jsercy;","Jukcy;","KHcy;","KJcy;","Kappa;","Kcedil;","Kcy;","Kfr;","Kopf;","Kscr;","LJcy;","LT","LT;","Lacute;","Lambda;","Lang;","Laplacetrf;","Larr;","Lcaron;","Lcedil;","Lcy;","LeftAngleBracket;","LeftArrow;","LeftArrowBar;","LeftArrowRightArrow;","LeftCeiling;","LeftDoubleBracket;","LeftDownTeeVector;","LeftDownVector;","LeftDownVectorBar;","LeftFloor;","LeftRightArrow;","LeftRightVector;","LeftTee;","LeftTeeArrow;","LeftTeeVector;","LeftTriangle;","LeftTriangleBar;","LeftTriangleEqual;","LeftUpDownVector;","LeftUpTeeVector;","LeftUpVector;","LeftUpVectorBar;","LeftVector;","LeftVectorBar;","Leftarrow;","Leftrightarrow;","LessEqualGreater;","LessFullEqual;","LessGreater;","LessLess;","LessSlantEqual;","LessTilde;","Lfr;","Ll;","Lleftarrow;","Lmidot;","LongLeftArrow;","LongLeftRightArrow;","LongRightArrow;","Longleftarrow;","Longleftrightarrow;","Longrightarrow;","Lopf;","LowerLeftArrow;","LowerRightArrow;","Lscr;","Lsh;","Lstrok;","Lt;","Map;","Mcy;","MediumSpace;","Mellintrf;","Mfr;","MinusPlus;","Mopf;","Mscr;","Mu;","NJcy;","Nacute;","Ncaron;","Ncedil;","Ncy;","NegativeMediumSpace;","NegativeThickSpace;","NegativeThinSpace;","NegativeVeryThinSpace;","NestedGreaterGreater;","NestedLessLess;","NewLine;","Nfr;","NoBreak;","NonBreakingSpace;","Nopf;","Not;","NotCongruent;","NotCupCap;","NotDoubleVerticalBar;","NotElement;","NotEqual;","NotEqualTilde;","NotExists;","NotGreater;","NotGreaterEqual;","NotGreaterFullEqual;","NotGreaterGreater;","NotGreaterLess;","NotGreaterSlantEqual;","NotGreaterTilde;","NotHumpDownHump;","NotHumpEqual;","NotLeftTriangle;","NotLeftTriangleBar;","NotLeftTriangleEqual;","NotLess;","NotLessEqual;","NotLessGreater;","NotLessLess;","NotLessSlantEqual;","NotLessTilde;","NotNestedGreaterGreater;","NotNestedLessLess;","NotPrecedes;","NotPrecedesEqual;","NotPrecedesSlantEqual;","NotReverseElement;","NotRightTriangle;","NotRightTriangleBar;","NotRightTriangleEqual;","NotSquareSubset;","NotSquareSubsetEqual;","NotSquareSuperset;","NotSquareSupersetEqual;","NotSubset;","NotSubsetEqual;","NotSucceeds;","NotSucceedsEqual;","NotSucceedsSlantEqual;","NotSucceedsTilde;","NotSuperset;","NotSupersetEqual;","NotTilde;","NotTildeEqual;","NotTildeFullEqual;","NotTildeTilde;","NotVerticalBar;","Nscr;","Ntilde","Ntilde;","Nu;","OElig;","Oacute","Oacute;","Ocirc","Ocirc;","Ocy;","Odblac;","Ofr;","Ograve","Ograve;","Omacr;","Omega;","Omicron;","Oopf;","OpenCurlyDoubleQuote;","OpenCurlyQuote;","Or;","Oscr;","Oslash","Oslash;","Otilde","Otilde;","Otimes;","Ouml","Ouml;","OverBar;","OverBrace;","OverBracket;","OverParenthesis;","PartialD;","Pcy;","Pfr;","Phi;","Pi;","PlusMinus;","Poincareplane;","Popf;","Pr;","Precedes;","PrecedesEqual;","PrecedesSlantEqual;","PrecedesTilde;","Prime;","Product;","Proportion;","Proportional;","Pscr;","Psi;","QUOT","QUOT;","Qfr;","Qopf;","Qscr;","RBarr;","REG","REG;","Racute;","Rang;","Rarr;","Rarrtl;","Rcaron;","Rcedil;","Rcy;","Re;","ReverseElement;","ReverseEquilibrium;","ReverseUpEquilibrium;","Rfr;","Rho;","RightAngleBracket;","RightArrow;","RightArrowBar;","RightArrowLeftArrow;","RightCeiling;","RightDoubleBracket;","RightDownTeeVector;","RightDownVector;","RightDownVectorBar;","RightFloor;","RightTee;","RightTeeArrow;","RightTeeVector;","RightTriangle;","RightTriangleBar;","RightTriangleEqual;","RightUpDownVector;","RightUpTeeVector;","RightUpVector;","RightUpVectorBar;","RightVector;","RightVectorBar;","Rightarrow;","Ropf;","RoundImplies;","Rrightarrow;","Rscr;","Rsh;","RuleDelayed;","SHCHcy;","SHcy;","SOFTcy;","Sacute;","Sc;","Scaron;","Scedil;","Scirc;","Scy;","Sfr;","ShortDownArrow;","ShortLeftArrow;","ShortRightArrow;","ShortUpArrow;","Sigma;","SmallCircle;","Sopf;","Sqrt;","Square;","SquareIntersection;","SquareSubset;","SquareSubsetEqual;","SquareSuperset;","SquareSupersetEqual;","SquareUnion;","Sscr;","Star;","Sub;","Subset;","SubsetEqual;","Succeeds;","SucceedsEqual;","SucceedsSlantEqual;","SucceedsTilde;","SuchThat;","Sum;","Sup;","Superset;","SupersetEqual;","Supset;","THORN","THORN;","TRADE;","TSHcy;","TScy;","Tab;","Tau;","Tcaron;","Tcedil;","Tcy;","Tfr;","Therefore;","Theta;","ThickSpace;","ThinSpace;","Tilde;","TildeEqual;","TildeFullEqual;","TildeTilde;","Topf;","TripleDot;","Tscr;","Tstrok;","Uacute","Uacute;","Uarr;","Uarrocir;","Ubrcy;","Ubreve;","Ucirc","Ucirc;","Ucy;","Udblac;","Ufr;","Ugrave","Ugrave;","Umacr;","UnderBar;","UnderBrace;","UnderBracket;","UnderParenthesis;","Union;","UnionPlus;","Uogon;","Uopf;","UpArrow;","UpArrowBar;","UpArrowDownArrow;","UpDownArrow;","UpEquilibrium;","UpTee;","UpTeeArrow;","Uparrow;","Updownarrow;","UpperLeftArrow;","UpperRightArrow;","Upsi;","Upsilon;","Uring;","Uscr;","Utilde;","Uuml","Uuml;","VDash;","Vbar;","Vcy;","Vdash;","Vdashl;","Vee;","Verbar;","Vert;","VerticalBar;","VerticalLine;","VerticalSeparator;","VerticalTilde;","VeryThinSpace;","Vfr;","Vopf;","Vscr;","Vvdash;","Wcirc;","Wedge;","Wfr;","Wopf;","Wscr;","Xfr;","Xi;","Xopf;","Xscr;","YAcy;","YIcy;","YUcy;","Yacute","Yacute;","Ycirc;","Ycy;","Yfr;","Yopf;","Yscr;","Yuml;","ZHcy;","Zacute;","Zcaron;","Zcy;","Zdot;","ZeroWidthSpace;","Zeta;","Zfr;","Zopf;","Zscr;","aacute","aacute;","abreve;","ac;","acE;","acd;","acirc","acirc;","acute","acute;","acy;","aelig","aelig;","af;","afr;","agrave","agrave;","alefsym;","aleph;","alpha;","amacr;","amalg;","amp","amp;","and;","andand;","andd;","andslope;","andv;","ang;","ange;","angle;","angmsd;","angmsdaa;","angmsdab;","angmsdac;","angmsdad;","angmsdae;","angmsdaf;","angmsdag;","angmsdah;","angrt;","angrtvb;","angrtvbd;","angsph;","angst;","angzarr;","aogon;","aopf;","ap;","apE;","apacir;","ape;","apid;","apos;","approx;","approxeq;","aring","aring;","ascr;","ast;","asymp;","asympeq;","atilde","atilde;","auml","auml;","awconint;","awint;","bNot;","backcong;","backepsilon;","backprime;","backsim;","backsimeq;","barvee;","barwed;","barwedge;","bbrk;","bbrktbrk;","bcong;","bcy;","bdquo;","becaus;","because;","bemptyv;","bepsi;","bernou;","beta;","beth;","between;","bfr;","bigcap;","bigcirc;","bigcup;","bigodot;","bigoplus;","bigotimes;","bigsqcup;","bigstar;","bigtriangledown;","bigtriangleup;","biguplus;","bigvee;","bigwedge;","bkarow;","blacklozenge;","blacksquare;","blacktriangle;","blacktriangledown;","blacktriangleleft;","blacktriangleright;","blank;","blk12;","blk14;","blk34;","block;","bne;","bnequiv;","bnot;","bopf;","bot;","bottom;","bowtie;","boxDL;","boxDR;","boxDl;","boxDr;","boxH;","boxHD;","boxHU;","boxHd;","boxHu;","boxUL;","boxUR;","boxUl;","boxUr;","boxV;","boxVH;","boxVL;","boxVR;","boxVh;","boxVl;","boxVr;","boxbox;","boxdL;","boxdR;","boxdl;","boxdr;","boxh;","boxhD;","boxhU;","boxhd;","boxhu;","boxminus;","boxplus;","boxtimes;","boxuL;","boxuR;","boxul;","boxur;","boxv;","boxvH;","boxvL;","boxvR;","boxvh;","boxvl;","boxvr;","bprime;","breve;","brvbar","brvbar;","bscr;","bsemi;","bsim;","bsime;","bsol;","bsolb;","bsolhsub;","bull;","bullet;","bump;","bumpE;","bumpe;","bumpeq;","cacute;","cap;","capand;","capbrcup;","capcap;","capcup;","capdot;","caps;","caret;","caron;","ccaps;","ccaron;","ccedil","ccedil;","ccirc;","ccups;","ccupssm;","cdot;","cedil","cedil;","cemptyv;","cent","cent;","centerdot;","cfr;","chcy;","check;","checkmark;","chi;","cir;","cirE;","circ;","circeq;","circlearrowleft;","circlearrowright;","circledR;","circledS;","circledast;","circledcirc;","circleddash;","cire;","cirfnint;","cirmid;","cirscir;","clubs;","clubsuit;","colon;","colone;","coloneq;","comma;","commat;","comp;","compfn;","complement;","complexes;","cong;","congdot;","conint;","copf;","coprod;","copy","copy;","copysr;","crarr;","cross;","cscr;","csub;","csube;","csup;","csupe;","ctdot;","cudarrl;","cudarrr;","cuepr;","cuesc;","cularr;","cularrp;","cup;","cupbrcap;","cupcap;","cupcup;","cupdot;","cupor;","cups;","curarr;","curarrm;","curlyeqprec;","curlyeqsucc;","curlyvee;","curlywedge;","curren","curren;","curvearrowleft;","curvearrowright;","cuvee;","cuwed;","cwconint;","cwint;","cylcty;","dArr;","dHar;","dagger;","daleth;","darr;","dash;","dashv;","dbkarow;","dblac;","dcaron;","dcy;","dd;","ddagger;","ddarr;","ddotseq;","deg","deg;","delta;","demptyv;","dfisht;","dfr;","dharl;","dharr;","diam;","diamond;","diamondsuit;","diams;","die;","digamma;","disin;","div;","divide","divide;","divideontimes;","divonx;","djcy;","dlcorn;","dlcrop;","dollar;","dopf;","dot;","doteq;","doteqdot;","dotminus;","dotplus;","dotsquare;","doublebarwedge;","downarrow;","downdownarrows;","downharpoonleft;","downharpoonright;","drbkarow;","drcorn;","drcrop;","dscr;","dscy;","dsol;","dstrok;","dtdot;","dtri;","dtrif;","duarr;","duhar;","dwangle;","dzcy;","dzigrarr;","eDDot;","eDot;","eacute","eacute;","easter;","ecaron;","ecir;","ecirc","ecirc;","ecolon;","ecy;","edot;","ee;","efDot;","efr;","eg;","egrave","egrave;","egs;","egsdot;","el;","elinters;","ell;","els;","elsdot;","emacr;","empty;","emptyset;","emptyv;","emsp13;","emsp14;","emsp;","eng;","ensp;","eogon;","eopf;","epar;","eparsl;","eplus;","epsi;","epsilon;","epsiv;","eqcirc;","eqcolon;","eqsim;","eqslantgtr;","eqslantless;","equals;","equest;","equiv;","equivDD;","eqvparsl;","erDot;","erarr;","escr;","esdot;","esim;","eta;","eth","eth;","euml","euml;","euro;","excl;","exist;","expectation;","exponentiale;","fallingdotseq;","fcy;","female;","ffilig;","fflig;","ffllig;","ffr;","filig;","fjlig;","flat;","fllig;","fltns;","fnof;","fopf;","forall;","fork;","forkv;","fpartint;","frac12","frac12;","frac13;","frac14","frac14;","frac15;","frac16;","frac18;","frac23;","frac25;","frac34","frac34;","frac35;","frac38;","frac45;","frac56;","frac58;","frac78;","frasl;","frown;","fscr;","gE;","gEl;","gacute;","gamma;","gammad;","gap;","gbreve;","gcirc;","gcy;","gdot;","ge;","gel;","geq;","geqq;","geqslant;","ges;","gescc;","gesdot;","gesdoto;","gesdotol;","gesl;","gesles;","gfr;","gg;","ggg;","gimel;","gjcy;","gl;","glE;","gla;","glj;","gnE;","gnap;","gnapprox;","gne;","gneq;","gneqq;","gnsim;","gopf;","grave;","gscr;","gsim;","gsime;","gsiml;","gt","gt;","gtcc;","gtcir;","gtdot;","gtlPar;","gtquest;","gtrapprox;","gtrarr;","gtrdot;","gtreqless;","gtreqqless;","gtrless;","gtrsim;","gvertneqq;","gvnE;","hArr;","hairsp;","half;","hamilt;","hardcy;","harr;","harrcir;","harrw;","hbar;","hcirc;","hearts;","heartsuit;","hellip;","hercon;","hfr;","hksearow;","hkswarow;","hoarr;","homtht;","hookleftarrow;","hookrightarrow;","hopf;","horbar;","hscr;","hslash;","hstrok;","hybull;","hyphen;","iacute","iacute;","ic;","icirc","icirc;","icy;","iecy;","iexcl","iexcl;","iff;","ifr;","igrave","igrave;","ii;","iiiint;","iiint;","iinfin;","iiota;","ijlig;","imacr;","image;","imagline;","imagpart;","imath;","imof;","imped;","in;","incare;","infin;","infintie;","inodot;","int;","intcal;","integers;","intercal;","intlarhk;","intprod;","iocy;","iogon;","iopf;","iota;","iprod;","iquest","iquest;","iscr;","isin;","isinE;","isindot;","isins;","isinsv;","isinv;","it;","itilde;","iukcy;","iuml","iuml;","jcirc;","jcy;","jfr;","jmath;","jopf;","jscr;","jsercy;","jukcy;","kappa;","kappav;","kcedil;","kcy;","kfr;","kgreen;","khcy;","kjcy;","kopf;","kscr;","lAarr;","lArr;","lAtail;","lBarr;","lE;","lEg;","lHar;","lacute;","laemptyv;","lagran;","lambda;","lang;","langd;","langle;","lap;","laquo","laquo;","larr;","larrb;","larrbfs;","larrfs;","larrhk;","larrlp;","larrpl;","larrsim;","larrtl;","lat;","latail;","late;","lates;","lbarr;","lbbrk;","lbrace;","lbrack;","lbrke;","lbrksld;","lbrkslu;","lcaron;","lcedil;","lceil;","lcub;","lcy;","ldca;","ldquo;","ldquor;","ldrdhar;","ldrushar;","ldsh;","le;","leftarrow;","leftarrowtail;","leftharpoondown;","leftharpoonup;","leftleftarrows;","leftrightarrow;","leftrightarrows;","leftrightharpoons;","leftrightsquigarrow;","leftthreetimes;","leg;","leq;","leqq;","leqslant;","les;","lescc;","lesdot;","lesdoto;","lesdotor;","lesg;","lesges;","lessapprox;","lessdot;","lesseqgtr;","lesseqqgtr;","lessgtr;","lesssim;","lfisht;","lfloor;","lfr;","lg;","lgE;","lhard;","lharu;","lharul;","lhblk;","ljcy;","ll;","llarr;","llcorner;","llhard;","lltri;","lmidot;","lmoust;","lmoustache;","lnE;","lnap;","lnapprox;","lne;","lneq;","lneqq;","lnsim;","loang;","loarr;","lobrk;","longleftarrow;","longleftrightarrow;","longmapsto;","longrightarrow;","looparrowleft;","looparrowright;","lopar;","lopf;","loplus;","lotimes;","lowast;","lowbar;","loz;","lozenge;","lozf;","lpar;","lparlt;","lrarr;","lrcorner;","lrhar;","lrhard;","lrm;","lrtri;","lsaquo;","lscr;","lsh;","lsim;","lsime;","lsimg;","lsqb;","lsquo;","lsquor;","lstrok;","lt","lt;","ltcc;","ltcir;","ltdot;","lthree;","ltimes;","ltlarr;","ltquest;","ltrPar;","ltri;","ltrie;","ltrif;","lurdshar;","luruhar;","lvertneqq;","lvnE;","mDDot;","macr","macr;","male;","malt;","maltese;","map;","mapsto;","mapstodown;","mapstoleft;","mapstoup;","marker;","mcomma;","mcy;","mdash;","measuredangle;","mfr;","mho;","micro","micro;","mid;","midast;","midcir;","middot","middot;","minus;","minusb;","minusd;","minusdu;","mlcp;","mldr;","mnplus;","models;","mopf;","mp;","mscr;","mstpos;","mu;","multimap;","mumap;","nGg;","nGt;","nGtv;","nLeftarrow;","nLeftrightarrow;","nLl;","nLt;","nLtv;","nRightarrow;","nVDash;","nVdash;","nabla;","nacute;","nang;","nap;","napE;","napid;","napos;","napprox;","natur;","natural;","naturals;","nbsp","nbsp;","nbump;","nbumpe;","ncap;","ncaron;","ncedil;","ncong;","ncongdot;","ncup;","ncy;","ndash;","ne;","neArr;","nearhk;","nearr;","nearrow;","nedot;","nequiv;","nesear;","nesim;","nexist;","nexists;","nfr;","ngE;","nge;","ngeq;","ngeqq;","ngeqslant;","nges;","ngsim;","ngt;","ngtr;","nhArr;","nharr;","nhpar;","ni;","nis;","nisd;","niv;","njcy;","nlArr;","nlE;","nlarr;","nldr;","nle;","nleftarrow;","nleftrightarrow;","nleq;","nleqq;","nleqslant;","nles;","nless;","nlsim;","nlt;","nltri;","nltrie;","nmid;","nopf;","not","not;","notin;","notinE;","notindot;","notinva;","notinvb;","notinvc;","notni;","notniva;","notnivb;","notnivc;","npar;","nparallel;","nparsl;","npart;","npolint;","npr;","nprcue;","npre;","nprec;","npreceq;","nrArr;","nrarr;","nrarrc;","nrarrw;","nrightarrow;","nrtri;","nrtrie;","nsc;","nsccue;","nsce;","nscr;","nshortmid;","nshortparallel;","nsim;","nsime;","nsimeq;","nsmid;","nspar;","nsqsube;","nsqsupe;","nsub;","nsubE;","nsube;","nsubset;","nsubseteq;","nsubseteqq;","nsucc;","nsucceq;","nsup;","nsupE;","nsupe;","nsupset;","nsupseteq;","nsupseteqq;","ntgl;","ntilde","ntilde;","ntlg;","ntriangleleft;","ntrianglelefteq;","ntriangleright;","ntrianglerighteq;","nu;","num;","numero;","numsp;","nvDash;","nvHarr;","nvap;","nvdash;","nvge;","nvgt;","nvinfin;","nvlArr;","nvle;","nvlt;","nvltrie;","nvrArr;","nvrtrie;","nvsim;","nwArr;","nwarhk;","nwarr;","nwarrow;","nwnear;","oS;","oacute","oacute;","oast;","ocir;","ocirc","ocirc;","ocy;","odash;","odblac;","odiv;","odot;","odsold;","oelig;","ofcir;","ofr;","ogon;","ograve","ograve;","ogt;","ohbar;","ohm;","oint;","olarr;","olcir;","olcross;","oline;","olt;","omacr;","omega;","omicron;","omid;","ominus;","oopf;","opar;","operp;","oplus;","or;","orarr;","ord;","order;","orderof;","ordf","ordf;","ordm","ordm;","origof;","oror;","orslope;","orv;","oscr;","oslash","oslash;","osol;","otilde","otilde;","otimes;","otimesas;","ouml","ouml;","ovbar;","par;","para","para;","parallel;","parsim;","parsl;","part;","pcy;","percnt;","period;","permil;","perp;","pertenk;","pfr;","phi;","phiv;","phmmat;","phone;","pi;","pitchfork;","piv;","planck;","planckh;","plankv;","plus;","plusacir;","plusb;","pluscir;","plusdo;","plusdu;","pluse;","plusmn","plusmn;","plussim;","plustwo;","pm;","pointint;","popf;","pound","pound;","pr;","prE;","prap;","prcue;","pre;","prec;","precapprox;","preccurlyeq;","preceq;","precnapprox;","precneqq;","precnsim;","precsim;","prime;","primes;","prnE;","prnap;","prnsim;","prod;","profalar;","profline;","profsurf;","prop;","propto;","prsim;","prurel;","pscr;","psi;","puncsp;","qfr;","qint;","qopf;","qprime;","qscr;","quaternions;","quatint;","quest;","questeq;","quot","quot;","rAarr;","rArr;","rAtail;","rBarr;","rHar;","race;","racute;","radic;","raemptyv;","rang;","rangd;","range;","rangle;","raquo","raquo;","rarr;","rarrap;","rarrb;","rarrbfs;","rarrc;","rarrfs;","rarrhk;","rarrlp;","rarrpl;","rarrsim;","rarrtl;","rarrw;","ratail;","ratio;","rationals;","rbarr;","rbbrk;","rbrace;","rbrack;","rbrke;","rbrksld;","rbrkslu;","rcaron;","rcedil;","rceil;","rcub;","rcy;","rdca;","rdldhar;","rdquo;","rdquor;","rdsh;","real;","realine;","realpart;","reals;","rect;","reg","reg;","rfisht;","rfloor;","rfr;","rhard;","rharu;","rharul;","rho;","rhov;","rightarrow;","rightarrowtail;","rightharpoondown;","rightharpoonup;","rightleftarrows;","rightleftharpoons;","rightrightarrows;","rightsquigarrow;","rightthreetimes;","ring;","risingdotseq;","rlarr;","rlhar;","rlm;","rmoust;","rmoustache;","rnmid;","roang;","roarr;","robrk;","ropar;","ropf;","roplus;","rotimes;","rpar;","rpargt;","rppolint;","rrarr;","rsaquo;","rscr;","rsh;","rsqb;","rsquo;","rsquor;","rthree;","rtimes;","rtri;","rtrie;","rtrif;","rtriltri;","ruluhar;","rx;","sacute;","sbquo;","sc;","scE;","scap;","scaron;","sccue;","sce;","scedil;","scirc;","scnE;","scnap;","scnsim;","scpolint;","scsim;","scy;","sdot;","sdotb;","sdote;","seArr;","searhk;","searr;","searrow;","sect","sect;","semi;","seswar;","setminus;","setmn;","sext;","sfr;","sfrown;","sharp;","shchcy;","shcy;","shortmid;","shortparallel;","shy","shy;","sigma;","sigmaf;","sigmav;","sim;","simdot;","sime;","simeq;","simg;","simgE;","siml;","simlE;","simne;","simplus;","simrarr;","slarr;","smallsetminus;","smashp;","smeparsl;","smid;","smile;","smt;","smte;","smtes;","softcy;","sol;","solb;","solbar;","sopf;","spades;","spadesuit;","spar;","sqcap;","sqcaps;","sqcup;","sqcups;","sqsub;","sqsube;","sqsubset;","sqsubseteq;","sqsup;","sqsupe;","sqsupset;","sqsupseteq;","squ;","square;","squarf;","squf;","srarr;","sscr;","ssetmn;","ssmile;","sstarf;","star;","starf;","straightepsilon;","straightphi;","strns;","sub;","subE;","subdot;","sube;","subedot;","submult;","subnE;","subne;","subplus;","subrarr;","subset;","subseteq;","subseteqq;","subsetneq;","subsetneqq;","subsim;","subsub;","subsup;","succ;","succapprox;","succcurlyeq;","succeq;","succnapprox;","succneqq;","succnsim;","succsim;","sum;","sung;","sup1","sup1;","sup2","sup2;","sup3","sup3;","sup;","supE;","supdot;","supdsub;","supe;","supedot;","suphsol;","suphsub;","suplarr;","supmult;","supnE;","supne;","supplus;","supset;","supseteq;","supseteqq;","supsetneq;","supsetneqq;","supsim;","supsub;","supsup;","swArr;","swarhk;","swarr;","swarrow;","swnwar;","szlig","szlig;","target;","tau;","tbrk;","tcaron;","tcedil;","tcy;","tdot;","telrec;","tfr;","there4;","therefore;","theta;","thetasym;","thetav;","thickapprox;","thicksim;","thinsp;","thkap;","thksim;","thorn","thorn;","tilde;","times","times;","timesb;","timesbar;","timesd;","tint;","toea;","top;","topbot;","topcir;","topf;","topfork;","tosa;","tprime;","trade;","triangle;","triangledown;","triangleleft;","trianglelefteq;","triangleq;","triangleright;","trianglerighteq;","tridot;","trie;","triminus;","triplus;","trisb;","tritime;","trpezium;","tscr;","tscy;","tshcy;","tstrok;","twixt;","twoheadleftarrow;","twoheadrightarrow;","uArr;","uHar;","uacute","uacute;","uarr;","ubrcy;","ubreve;","ucirc","ucirc;","ucy;","udarr;","udblac;","udhar;","ufisht;","ufr;","ugrave","ugrave;","uharl;","uharr;","uhblk;","ulcorn;","ulcorner;","ulcrop;","ultri;","umacr;","uml","uml;","uogon;","uopf;","uparrow;","updownarrow;","upharpoonleft;","upharpoonright;","uplus;","upsi;","upsih;","upsilon;","upuparrows;","urcorn;","urcorner;","urcrop;","uring;","urtri;","uscr;","utdot;","utilde;","utri;","utrif;","uuarr;","uuml","uuml;","uwangle;","vArr;","vBar;","vBarv;","vDash;","vangrt;","varepsilon;","varkappa;","varnothing;","varphi;","varpi;","varpropto;","varr;","varrho;","varsigma;","varsubsetneq;","varsubsetneqq;","varsupsetneq;","varsupsetneqq;","vartheta;","vartriangleleft;","vartriangleright;","vcy;","vdash;","vee;","veebar;","veeeq;","vellip;","verbar;","vert;","vfr;","vltri;","vnsub;","vnsup;","vopf;","vprop;","vrtri;","vscr;","vsubnE;","vsubne;","vsupnE;","vsupne;","vzigzag;","wcirc;","wedbar;","wedge;","wedgeq;","weierp;","wfr;","wopf;","wp;","wr;","wreath;","wscr;","xcap;","xcirc;","xcup;","xdtri;","xfr;","xhArr;","xharr;","xi;","xlArr;","xlarr;","xmap;","xnis;","xodot;","xopf;","xoplus;","xotime;","xrArr;","xrarr;","xscr;","xsqcup;","xuplus;","xutri;","xvee;","xwedge;","yacute","yacute;","yacy;","ycirc;","ycy;","yen","yen;","yfr;","yicy;","yopf;","yscr;","yucy;","yuml","yuml;","zacute;","zcaron;","zcy;","zdot;","zeetrf;","zeta;","zfr;","zhcy;","zigrarr;","zopf;","zscr;","zwj;","zwnj;"]),t.s)
B.W=new A.r(2231,{AElig:"\xc6","AElig;":"\xc6",AMP:"&","AMP;":"&",Aacute:"\xc1","Aacute;":"\xc1","Abreve;":"\u0102",Acirc:"\xc2","Acirc;":"\xc2","Acy;":"\u0410","Afr;":"\ud835\udd04",Agrave:"\xc0","Agrave;":"\xc0","Alpha;":"\u0391","Amacr;":"\u0100","And;":"\u2a53","Aogon;":"\u0104","Aopf;":"\ud835\udd38","ApplyFunction;":"\u2061",Aring:"\xc5","Aring;":"\xc5","Ascr;":"\ud835\udc9c","Assign;":"\u2254",Atilde:"\xc3","Atilde;":"\xc3",Auml:"\xc4","Auml;":"\xc4","Backslash;":"\u2216","Barv;":"\u2ae7","Barwed;":"\u2306","Bcy;":"\u0411","Because;":"\u2235","Bernoullis;":"\u212c","Beta;":"\u0392","Bfr;":"\ud835\udd05","Bopf;":"\ud835\udd39","Breve;":"\u02d8","Bscr;":"\u212c","Bumpeq;":"\u224e","CHcy;":"\u0427",COPY:"\xa9","COPY;":"\xa9","Cacute;":"\u0106","Cap;":"\u22d2","CapitalDifferentialD;":"\u2145","Cayleys;":"\u212d","Ccaron;":"\u010c",Ccedil:"\xc7","Ccedil;":"\xc7","Ccirc;":"\u0108","Cconint;":"\u2230","Cdot;":"\u010a","Cedilla;":"\xb8","CenterDot;":"\xb7","Cfr;":"\u212d","Chi;":"\u03a7","CircleDot;":"\u2299","CircleMinus;":"\u2296","CirclePlus;":"\u2295","CircleTimes;":"\u2297","ClockwiseContourIntegral;":"\u2232","CloseCurlyDoubleQuote;":"\u201d","CloseCurlyQuote;":"\u2019","Colon;":"\u2237","Colone;":"\u2a74","Congruent;":"\u2261","Conint;":"\u222f","ContourIntegral;":"\u222e","Copf;":"\u2102","Coproduct;":"\u2210","CounterClockwiseContourIntegral;":"\u2233","Cross;":"\u2a2f","Cscr;":"\ud835\udc9e","Cup;":"\u22d3","CupCap;":"\u224d","DD;":"\u2145","DDotrahd;":"\u2911","DJcy;":"\u0402","DScy;":"\u0405","DZcy;":"\u040f","Dagger;":"\u2021","Darr;":"\u21a1","Dashv;":"\u2ae4","Dcaron;":"\u010e","Dcy;":"\u0414","Del;":"\u2207","Delta;":"\u0394","Dfr;":"\ud835\udd07","DiacriticalAcute;":"\xb4","DiacriticalDot;":"\u02d9","DiacriticalDoubleAcute;":"\u02dd","DiacriticalGrave;":"`","DiacriticalTilde;":"\u02dc","Diamond;":"\u22c4","DifferentialD;":"\u2146","Dopf;":"\ud835\udd3b","Dot;":"\xa8","DotDot;":"\u20dc","DotEqual;":"\u2250","DoubleContourIntegral;":"\u222f","DoubleDot;":"\xa8","DoubleDownArrow;":"\u21d3","DoubleLeftArrow;":"\u21d0","DoubleLeftRightArrow;":"\u21d4","DoubleLeftTee;":"\u2ae4","DoubleLongLeftArrow;":"\u27f8","DoubleLongLeftRightArrow;":"\u27fa","DoubleLongRightArrow;":"\u27f9","DoubleRightArrow;":"\u21d2","DoubleRightTee;":"\u22a8","DoubleUpArrow;":"\u21d1","DoubleUpDownArrow;":"\u21d5","DoubleVerticalBar;":"\u2225","DownArrow;":"\u2193","DownArrowBar;":"\u2913","DownArrowUpArrow;":"\u21f5","DownBreve;":"\u0311","DownLeftRightVector;":"\u2950","DownLeftTeeVector;":"\u295e","DownLeftVector;":"\u21bd","DownLeftVectorBar;":"\u2956","DownRightTeeVector;":"\u295f","DownRightVector;":"\u21c1","DownRightVectorBar;":"\u2957","DownTee;":"\u22a4","DownTeeArrow;":"\u21a7","Downarrow;":"\u21d3","Dscr;":"\ud835\udc9f","Dstrok;":"\u0110","ENG;":"\u014a",ETH:"\xd0","ETH;":"\xd0",Eacute:"\xc9","Eacute;":"\xc9","Ecaron;":"\u011a",Ecirc:"\xca","Ecirc;":"\xca","Ecy;":"\u042d","Edot;":"\u0116","Efr;":"\ud835\udd08",Egrave:"\xc8","Egrave;":"\xc8","Element;":"\u2208","Emacr;":"\u0112","EmptySmallSquare;":"\u25fb","EmptyVerySmallSquare;":"\u25ab","Eogon;":"\u0118","Eopf;":"\ud835\udd3c","Epsilon;":"\u0395","Equal;":"\u2a75","EqualTilde;":"\u2242","Equilibrium;":"\u21cc","Escr;":"\u2130","Esim;":"\u2a73","Eta;":"\u0397",Euml:"\xcb","Euml;":"\xcb","Exists;":"\u2203","ExponentialE;":"\u2147","Fcy;":"\u0424","Ffr;":"\ud835\udd09","FilledSmallSquare;":"\u25fc","FilledVerySmallSquare;":"\u25aa","Fopf;":"\ud835\udd3d","ForAll;":"\u2200","Fouriertrf;":"\u2131","Fscr;":"\u2131","GJcy;":"\u0403",GT:">","GT;":">","Gamma;":"\u0393","Gammad;":"\u03dc","Gbreve;":"\u011e","Gcedil;":"\u0122","Gcirc;":"\u011c","Gcy;":"\u0413","Gdot;":"\u0120","Gfr;":"\ud835\udd0a","Gg;":"\u22d9","Gopf;":"\ud835\udd3e","GreaterEqual;":"\u2265","GreaterEqualLess;":"\u22db","GreaterFullEqual;":"\u2267","GreaterGreater;":"\u2aa2","GreaterLess;":"\u2277","GreaterSlantEqual;":"\u2a7e","GreaterTilde;":"\u2273","Gscr;":"\ud835\udca2","Gt;":"\u226b","HARDcy;":"\u042a","Hacek;":"\u02c7","Hat;":"^","Hcirc;":"\u0124","Hfr;":"\u210c","HilbertSpace;":"\u210b","Hopf;":"\u210d","HorizontalLine;":"\u2500","Hscr;":"\u210b","Hstrok;":"\u0126","HumpDownHump;":"\u224e","HumpEqual;":"\u224f","IEcy;":"\u0415","IJlig;":"\u0132","IOcy;":"\u0401",Iacute:"\xcd","Iacute;":"\xcd",Icirc:"\xce","Icirc;":"\xce","Icy;":"\u0418","Idot;":"\u0130","Ifr;":"\u2111",Igrave:"\xcc","Igrave;":"\xcc","Im;":"\u2111","Imacr;":"\u012a","ImaginaryI;":"\u2148","Implies;":"\u21d2","Int;":"\u222c","Integral;":"\u222b","Intersection;":"\u22c2","InvisibleComma;":"\u2063","InvisibleTimes;":"\u2062","Iogon;":"\u012e","Iopf;":"\ud835\udd40","Iota;":"\u0399","Iscr;":"\u2110","Itilde;":"\u0128","Iukcy;":"\u0406",Iuml:"\xcf","Iuml;":"\xcf","Jcirc;":"\u0134","Jcy;":"\u0419","Jfr;":"\ud835\udd0d","Jopf;":"\ud835\udd41","Jscr;":"\ud835\udca5","Jsercy;":"\u0408","Jukcy;":"\u0404","KHcy;":"\u0425","KJcy;":"\u040c","Kappa;":"\u039a","Kcedil;":"\u0136","Kcy;":"\u041a","Kfr;":"\ud835\udd0e","Kopf;":"\ud835\udd42","Kscr;":"\ud835\udca6","LJcy;":"\u0409",LT:"<","LT;":"<","Lacute;":"\u0139","Lambda;":"\u039b","Lang;":"\u27ea","Laplacetrf;":"\u2112","Larr;":"\u219e","Lcaron;":"\u013d","Lcedil;":"\u013b","Lcy;":"\u041b","LeftAngleBracket;":"\u27e8","LeftArrow;":"\u2190","LeftArrowBar;":"\u21e4","LeftArrowRightArrow;":"\u21c6","LeftCeiling;":"\u2308","LeftDoubleBracket;":"\u27e6","LeftDownTeeVector;":"\u2961","LeftDownVector;":"\u21c3","LeftDownVectorBar;":"\u2959","LeftFloor;":"\u230a","LeftRightArrow;":"\u2194","LeftRightVector;":"\u294e","LeftTee;":"\u22a3","LeftTeeArrow;":"\u21a4","LeftTeeVector;":"\u295a","LeftTriangle;":"\u22b2","LeftTriangleBar;":"\u29cf","LeftTriangleEqual;":"\u22b4","LeftUpDownVector;":"\u2951","LeftUpTeeVector;":"\u2960","LeftUpVector;":"\u21bf","LeftUpVectorBar;":"\u2958","LeftVector;":"\u21bc","LeftVectorBar;":"\u2952","Leftarrow;":"\u21d0","Leftrightarrow;":"\u21d4","LessEqualGreater;":"\u22da","LessFullEqual;":"\u2266","LessGreater;":"\u2276","LessLess;":"\u2aa1","LessSlantEqual;":"\u2a7d","LessTilde;":"\u2272","Lfr;":"\ud835\udd0f","Ll;":"\u22d8","Lleftarrow;":"\u21da","Lmidot;":"\u013f","LongLeftArrow;":"\u27f5","LongLeftRightArrow;":"\u27f7","LongRightArrow;":"\u27f6","Longleftarrow;":"\u27f8","Longleftrightarrow;":"\u27fa","Longrightarrow;":"\u27f9","Lopf;":"\ud835\udd43","LowerLeftArrow;":"\u2199","LowerRightArrow;":"\u2198","Lscr;":"\u2112","Lsh;":"\u21b0","Lstrok;":"\u0141","Lt;":"\u226a","Map;":"\u2905","Mcy;":"\u041c","MediumSpace;":"\u205f","Mellintrf;":"\u2133","Mfr;":"\ud835\udd10","MinusPlus;":"\u2213","Mopf;":"\ud835\udd44","Mscr;":"\u2133","Mu;":"\u039c","NJcy;":"\u040a","Nacute;":"\u0143","Ncaron;":"\u0147","Ncedil;":"\u0145","Ncy;":"\u041d","NegativeMediumSpace;":"\u200b","NegativeThickSpace;":"\u200b","NegativeThinSpace;":"\u200b","NegativeVeryThinSpace;":"\u200b","NestedGreaterGreater;":"\u226b","NestedLessLess;":"\u226a","NewLine;":"\n","Nfr;":"\ud835\udd11","NoBreak;":"\u2060","NonBreakingSpace;":"\xa0","Nopf;":"\u2115","Not;":"\u2aec","NotCongruent;":"\u2262","NotCupCap;":"\u226d","NotDoubleVerticalBar;":"\u2226","NotElement;":"\u2209","NotEqual;":"\u2260","NotEqualTilde;":"\u2242\u0338","NotExists;":"\u2204","NotGreater;":"\u226f","NotGreaterEqual;":"\u2271","NotGreaterFullEqual;":"\u2267\u0338","NotGreaterGreater;":"\u226b\u0338","NotGreaterLess;":"\u2279","NotGreaterSlantEqual;":"\u2a7e\u0338","NotGreaterTilde;":"\u2275","NotHumpDownHump;":"\u224e\u0338","NotHumpEqual;":"\u224f\u0338","NotLeftTriangle;":"\u22ea","NotLeftTriangleBar;":"\u29cf\u0338","NotLeftTriangleEqual;":"\u22ec","NotLess;":"\u226e","NotLessEqual;":"\u2270","NotLessGreater;":"\u2278","NotLessLess;":"\u226a\u0338","NotLessSlantEqual;":"\u2a7d\u0338","NotLessTilde;":"\u2274","NotNestedGreaterGreater;":"\u2aa2\u0338","NotNestedLessLess;":"\u2aa1\u0338","NotPrecedes;":"\u2280","NotPrecedesEqual;":"\u2aaf\u0338","NotPrecedesSlantEqual;":"\u22e0","NotReverseElement;":"\u220c","NotRightTriangle;":"\u22eb","NotRightTriangleBar;":"\u29d0\u0338","NotRightTriangleEqual;":"\u22ed","NotSquareSubset;":"\u228f\u0338","NotSquareSubsetEqual;":"\u22e2","NotSquareSuperset;":"\u2290\u0338","NotSquareSupersetEqual;":"\u22e3","NotSubset;":"\u2282\u20d2","NotSubsetEqual;":"\u2288","NotSucceeds;":"\u2281","NotSucceedsEqual;":"\u2ab0\u0338","NotSucceedsSlantEqual;":"\u22e1","NotSucceedsTilde;":"\u227f\u0338","NotSuperset;":"\u2283\u20d2","NotSupersetEqual;":"\u2289","NotTilde;":"\u2241","NotTildeEqual;":"\u2244","NotTildeFullEqual;":"\u2247","NotTildeTilde;":"\u2249","NotVerticalBar;":"\u2224","Nscr;":"\ud835\udca9",Ntilde:"\xd1","Ntilde;":"\xd1","Nu;":"\u039d","OElig;":"\u0152",Oacute:"\xd3","Oacute;":"\xd3",Ocirc:"\xd4","Ocirc;":"\xd4","Ocy;":"\u041e","Odblac;":"\u0150","Ofr;":"\ud835\udd12",Ograve:"\xd2","Ograve;":"\xd2","Omacr;":"\u014c","Omega;":"\u03a9","Omicron;":"\u039f","Oopf;":"\ud835\udd46","OpenCurlyDoubleQuote;":"\u201c","OpenCurlyQuote;":"\u2018","Or;":"\u2a54","Oscr;":"\ud835\udcaa",Oslash:"\xd8","Oslash;":"\xd8",Otilde:"\xd5","Otilde;":"\xd5","Otimes;":"\u2a37",Ouml:"\xd6","Ouml;":"\xd6","OverBar;":"\u203e","OverBrace;":"\u23de","OverBracket;":"\u23b4","OverParenthesis;":"\u23dc","PartialD;":"\u2202","Pcy;":"\u041f","Pfr;":"\ud835\udd13","Phi;":"\u03a6","Pi;":"\u03a0","PlusMinus;":"\xb1","Poincareplane;":"\u210c","Popf;":"\u2119","Pr;":"\u2abb","Precedes;":"\u227a","PrecedesEqual;":"\u2aaf","PrecedesSlantEqual;":"\u227c","PrecedesTilde;":"\u227e","Prime;":"\u2033","Product;":"\u220f","Proportion;":"\u2237","Proportional;":"\u221d","Pscr;":"\ud835\udcab","Psi;":"\u03a8",QUOT:'"',"QUOT;":'"',"Qfr;":"\ud835\udd14","Qopf;":"\u211a","Qscr;":"\ud835\udcac","RBarr;":"\u2910",REG:"\xae","REG;":"\xae","Racute;":"\u0154","Rang;":"\u27eb","Rarr;":"\u21a0","Rarrtl;":"\u2916","Rcaron;":"\u0158","Rcedil;":"\u0156","Rcy;":"\u0420","Re;":"\u211c","ReverseElement;":"\u220b","ReverseEquilibrium;":"\u21cb","ReverseUpEquilibrium;":"\u296f","Rfr;":"\u211c","Rho;":"\u03a1","RightAngleBracket;":"\u27e9","RightArrow;":"\u2192","RightArrowBar;":"\u21e5","RightArrowLeftArrow;":"\u21c4","RightCeiling;":"\u2309","RightDoubleBracket;":"\u27e7","RightDownTeeVector;":"\u295d","RightDownVector;":"\u21c2","RightDownVectorBar;":"\u2955","RightFloor;":"\u230b","RightTee;":"\u22a2","RightTeeArrow;":"\u21a6","RightTeeVector;":"\u295b","RightTriangle;":"\u22b3","RightTriangleBar;":"\u29d0","RightTriangleEqual;":"\u22b5","RightUpDownVector;":"\u294f","RightUpTeeVector;":"\u295c","RightUpVector;":"\u21be","RightUpVectorBar;":"\u2954","RightVector;":"\u21c0","RightVectorBar;":"\u2953","Rightarrow;":"\u21d2","Ropf;":"\u211d","RoundImplies;":"\u2970","Rrightarrow;":"\u21db","Rscr;":"\u211b","Rsh;":"\u21b1","RuleDelayed;":"\u29f4","SHCHcy;":"\u0429","SHcy;":"\u0428","SOFTcy;":"\u042c","Sacute;":"\u015a","Sc;":"\u2abc","Scaron;":"\u0160","Scedil;":"\u015e","Scirc;":"\u015c","Scy;":"\u0421","Sfr;":"\ud835\udd16","ShortDownArrow;":"\u2193","ShortLeftArrow;":"\u2190","ShortRightArrow;":"\u2192","ShortUpArrow;":"\u2191","Sigma;":"\u03a3","SmallCircle;":"\u2218","Sopf;":"\ud835\udd4a","Sqrt;":"\u221a","Square;":"\u25a1","SquareIntersection;":"\u2293","SquareSubset;":"\u228f","SquareSubsetEqual;":"\u2291","SquareSuperset;":"\u2290","SquareSupersetEqual;":"\u2292","SquareUnion;":"\u2294","Sscr;":"\ud835\udcae","Star;":"\u22c6","Sub;":"\u22d0","Subset;":"\u22d0","SubsetEqual;":"\u2286","Succeeds;":"\u227b","SucceedsEqual;":"\u2ab0","SucceedsSlantEqual;":"\u227d","SucceedsTilde;":"\u227f","SuchThat;":"\u220b","Sum;":"\u2211","Sup;":"\u22d1","Superset;":"\u2283","SupersetEqual;":"\u2287","Supset;":"\u22d1",THORN:"\xde","THORN;":"\xde","TRADE;":"\u2122","TSHcy;":"\u040b","TScy;":"\u0426","Tab;":"\t","Tau;":"\u03a4","Tcaron;":"\u0164","Tcedil;":"\u0162","Tcy;":"\u0422","Tfr;":"\ud835\udd17","Therefore;":"\u2234","Theta;":"\u0398","ThickSpace;":"\u205f\u200a","ThinSpace;":"\u2009","Tilde;":"\u223c","TildeEqual;":"\u2243","TildeFullEqual;":"\u2245","TildeTilde;":"\u2248","Topf;":"\ud835\udd4b","TripleDot;":"\u20db","Tscr;":"\ud835\udcaf","Tstrok;":"\u0166",Uacute:"\xda","Uacute;":"\xda","Uarr;":"\u219f","Uarrocir;":"\u2949","Ubrcy;":"\u040e","Ubreve;":"\u016c",Ucirc:"\xdb","Ucirc;":"\xdb","Ucy;":"\u0423","Udblac;":"\u0170","Ufr;":"\ud835\udd18",Ugrave:"\xd9","Ugrave;":"\xd9","Umacr;":"\u016a","UnderBar;":"_","UnderBrace;":"\u23df","UnderBracket;":"\u23b5","UnderParenthesis;":"\u23dd","Union;":"\u22c3","UnionPlus;":"\u228e","Uogon;":"\u0172","Uopf;":"\ud835\udd4c","UpArrow;":"\u2191","UpArrowBar;":"\u2912","UpArrowDownArrow;":"\u21c5","UpDownArrow;":"\u2195","UpEquilibrium;":"\u296e","UpTee;":"\u22a5","UpTeeArrow;":"\u21a5","Uparrow;":"\u21d1","Updownarrow;":"\u21d5","UpperLeftArrow;":"\u2196","UpperRightArrow;":"\u2197","Upsi;":"\u03d2","Upsilon;":"\u03a5","Uring;":"\u016e","Uscr;":"\ud835\udcb0","Utilde;":"\u0168",Uuml:"\xdc","Uuml;":"\xdc","VDash;":"\u22ab","Vbar;":"\u2aeb","Vcy;":"\u0412","Vdash;":"\u22a9","Vdashl;":"\u2ae6","Vee;":"\u22c1","Verbar;":"\u2016","Vert;":"\u2016","VerticalBar;":"\u2223","VerticalLine;":"|","VerticalSeparator;":"\u2758","VerticalTilde;":"\u2240","VeryThinSpace;":"\u200a","Vfr;":"\ud835\udd19","Vopf;":"\ud835\udd4d","Vscr;":"\ud835\udcb1","Vvdash;":"\u22aa","Wcirc;":"\u0174","Wedge;":"\u22c0","Wfr;":"\ud835\udd1a","Wopf;":"\ud835\udd4e","Wscr;":"\ud835\udcb2","Xfr;":"\ud835\udd1b","Xi;":"\u039e","Xopf;":"\ud835\udd4f","Xscr;":"\ud835\udcb3","YAcy;":"\u042f","YIcy;":"\u0407","YUcy;":"\u042e",Yacute:"\xdd","Yacute;":"\xdd","Ycirc;":"\u0176","Ycy;":"\u042b","Yfr;":"\ud835\udd1c","Yopf;":"\ud835\udd50","Yscr;":"\ud835\udcb4","Yuml;":"\u0178","ZHcy;":"\u0416","Zacute;":"\u0179","Zcaron;":"\u017d","Zcy;":"\u0417","Zdot;":"\u017b","ZeroWidthSpace;":"\u200b","Zeta;":"\u0396","Zfr;":"\u2128","Zopf;":"\u2124","Zscr;":"\ud835\udcb5",aacute:"\xe1","aacute;":"\xe1","abreve;":"\u0103","ac;":"\u223e","acE;":"\u223e\u0333","acd;":"\u223f",acirc:"\xe2","acirc;":"\xe2",acute:"\xb4","acute;":"\xb4","acy;":"\u0430",aelig:"\xe6","aelig;":"\xe6","af;":"\u2061","afr;":"\ud835\udd1e",agrave:"\xe0","agrave;":"\xe0","alefsym;":"\u2135","aleph;":"\u2135","alpha;":"\u03b1","amacr;":"\u0101","amalg;":"\u2a3f",amp:"&","amp;":"&","and;":"\u2227","andand;":"\u2a55","andd;":"\u2a5c","andslope;":"\u2a58","andv;":"\u2a5a","ang;":"\u2220","ange;":"\u29a4","angle;":"\u2220","angmsd;":"\u2221","angmsdaa;":"\u29a8","angmsdab;":"\u29a9","angmsdac;":"\u29aa","angmsdad;":"\u29ab","angmsdae;":"\u29ac","angmsdaf;":"\u29ad","angmsdag;":"\u29ae","angmsdah;":"\u29af","angrt;":"\u221f","angrtvb;":"\u22be","angrtvbd;":"\u299d","angsph;":"\u2222","angst;":"\xc5","angzarr;":"\u237c","aogon;":"\u0105","aopf;":"\ud835\udd52","ap;":"\u2248","apE;":"\u2a70","apacir;":"\u2a6f","ape;":"\u224a","apid;":"\u224b","apos;":"'","approx;":"\u2248","approxeq;":"\u224a",aring:"\xe5","aring;":"\xe5","ascr;":"\ud835\udcb6","ast;":"*","asymp;":"\u2248","asympeq;":"\u224d",atilde:"\xe3","atilde;":"\xe3",auml:"\xe4","auml;":"\xe4","awconint;":"\u2233","awint;":"\u2a11","bNot;":"\u2aed","backcong;":"\u224c","backepsilon;":"\u03f6","backprime;":"\u2035","backsim;":"\u223d","backsimeq;":"\u22cd","barvee;":"\u22bd","barwed;":"\u2305","barwedge;":"\u2305","bbrk;":"\u23b5","bbrktbrk;":"\u23b6","bcong;":"\u224c","bcy;":"\u0431","bdquo;":"\u201e","becaus;":"\u2235","because;":"\u2235","bemptyv;":"\u29b0","bepsi;":"\u03f6","bernou;":"\u212c","beta;":"\u03b2","beth;":"\u2136","between;":"\u226c","bfr;":"\ud835\udd1f","bigcap;":"\u22c2","bigcirc;":"\u25ef","bigcup;":"\u22c3","bigodot;":"\u2a00","bigoplus;":"\u2a01","bigotimes;":"\u2a02","bigsqcup;":"\u2a06","bigstar;":"\u2605","bigtriangledown;":"\u25bd","bigtriangleup;":"\u25b3","biguplus;":"\u2a04","bigvee;":"\u22c1","bigwedge;":"\u22c0","bkarow;":"\u290d","blacklozenge;":"\u29eb","blacksquare;":"\u25aa","blacktriangle;":"\u25b4","blacktriangledown;":"\u25be","blacktriangleleft;":"\u25c2","blacktriangleright;":"\u25b8","blank;":"\u2423","blk12;":"\u2592","blk14;":"\u2591","blk34;":"\u2593","block;":"\u2588","bne;":"=\u20e5","bnequiv;":"\u2261\u20e5","bnot;":"\u2310","bopf;":"\ud835\udd53","bot;":"\u22a5","bottom;":"\u22a5","bowtie;":"\u22c8","boxDL;":"\u2557","boxDR;":"\u2554","boxDl;":"\u2556","boxDr;":"\u2553","boxH;":"\u2550","boxHD;":"\u2566","boxHU;":"\u2569","boxHd;":"\u2564","boxHu;":"\u2567","boxUL;":"\u255d","boxUR;":"\u255a","boxUl;":"\u255c","boxUr;":"\u2559","boxV;":"\u2551","boxVH;":"\u256c","boxVL;":"\u2563","boxVR;":"\u2560","boxVh;":"\u256b","boxVl;":"\u2562","boxVr;":"\u255f","boxbox;":"\u29c9","boxdL;":"\u2555","boxdR;":"\u2552","boxdl;":"\u2510","boxdr;":"\u250c","boxh;":"\u2500","boxhD;":"\u2565","boxhU;":"\u2568","boxhd;":"\u252c","boxhu;":"\u2534","boxminus;":"\u229f","boxplus;":"\u229e","boxtimes;":"\u22a0","boxuL;":"\u255b","boxuR;":"\u2558","boxul;":"\u2518","boxur;":"\u2514","boxv;":"\u2502","boxvH;":"\u256a","boxvL;":"\u2561","boxvR;":"\u255e","boxvh;":"\u253c","boxvl;":"\u2524","boxvr;":"\u251c","bprime;":"\u2035","breve;":"\u02d8",brvbar:"\xa6","brvbar;":"\xa6","bscr;":"\ud835\udcb7","bsemi;":"\u204f","bsim;":"\u223d","bsime;":"\u22cd","bsol;":"\\","bsolb;":"\u29c5","bsolhsub;":"\u27c8","bull;":"\u2022","bullet;":"\u2022","bump;":"\u224e","bumpE;":"\u2aae","bumpe;":"\u224f","bumpeq;":"\u224f","cacute;":"\u0107","cap;":"\u2229","capand;":"\u2a44","capbrcup;":"\u2a49","capcap;":"\u2a4b","capcup;":"\u2a47","capdot;":"\u2a40","caps;":"\u2229\ufe00","caret;":"\u2041","caron;":"\u02c7","ccaps;":"\u2a4d","ccaron;":"\u010d",ccedil:"\xe7","ccedil;":"\xe7","ccirc;":"\u0109","ccups;":"\u2a4c","ccupssm;":"\u2a50","cdot;":"\u010b",cedil:"\xb8","cedil;":"\xb8","cemptyv;":"\u29b2",cent:"\xa2","cent;":"\xa2","centerdot;":"\xb7","cfr;":"\ud835\udd20","chcy;":"\u0447","check;":"\u2713","checkmark;":"\u2713","chi;":"\u03c7","cir;":"\u25cb","cirE;":"\u29c3","circ;":"\u02c6","circeq;":"\u2257","circlearrowleft;":"\u21ba","circlearrowright;":"\u21bb","circledR;":"\xae","circledS;":"\u24c8","circledast;":"\u229b","circledcirc;":"\u229a","circleddash;":"\u229d","cire;":"\u2257","cirfnint;":"\u2a10","cirmid;":"\u2aef","cirscir;":"\u29c2","clubs;":"\u2663","clubsuit;":"\u2663","colon;":":","colone;":"\u2254","coloneq;":"\u2254","comma;":",","commat;":"@","comp;":"\u2201","compfn;":"\u2218","complement;":"\u2201","complexes;":"\u2102","cong;":"\u2245","congdot;":"\u2a6d","conint;":"\u222e","copf;":"\ud835\udd54","coprod;":"\u2210",copy:"\xa9","copy;":"\xa9","copysr;":"\u2117","crarr;":"\u21b5","cross;":"\u2717","cscr;":"\ud835\udcb8","csub;":"\u2acf","csube;":"\u2ad1","csup;":"\u2ad0","csupe;":"\u2ad2","ctdot;":"\u22ef","cudarrl;":"\u2938","cudarrr;":"\u2935","cuepr;":"\u22de","cuesc;":"\u22df","cularr;":"\u21b6","cularrp;":"\u293d","cup;":"\u222a","cupbrcap;":"\u2a48","cupcap;":"\u2a46","cupcup;":"\u2a4a","cupdot;":"\u228d","cupor;":"\u2a45","cups;":"\u222a\ufe00","curarr;":"\u21b7","curarrm;":"\u293c","curlyeqprec;":"\u22de","curlyeqsucc;":"\u22df","curlyvee;":"\u22ce","curlywedge;":"\u22cf",curren:"\xa4","curren;":"\xa4","curvearrowleft;":"\u21b6","curvearrowright;":"\u21b7","cuvee;":"\u22ce","cuwed;":"\u22cf","cwconint;":"\u2232","cwint;":"\u2231","cylcty;":"\u232d","dArr;":"\u21d3","dHar;":"\u2965","dagger;":"\u2020","daleth;":"\u2138","darr;":"\u2193","dash;":"\u2010","dashv;":"\u22a3","dbkarow;":"\u290f","dblac;":"\u02dd","dcaron;":"\u010f","dcy;":"\u0434","dd;":"\u2146","ddagger;":"\u2021","ddarr;":"\u21ca","ddotseq;":"\u2a77",deg:"\xb0","deg;":"\xb0","delta;":"\u03b4","demptyv;":"\u29b1","dfisht;":"\u297f","dfr;":"\ud835\udd21","dharl;":"\u21c3","dharr;":"\u21c2","diam;":"\u22c4","diamond;":"\u22c4","diamondsuit;":"\u2666","diams;":"\u2666","die;":"\xa8","digamma;":"\u03dd","disin;":"\u22f2","div;":"\xf7",divide:"\xf7","divide;":"\xf7","divideontimes;":"\u22c7","divonx;":"\u22c7","djcy;":"\u0452","dlcorn;":"\u231e","dlcrop;":"\u230d","dollar;":"$","dopf;":"\ud835\udd55","dot;":"\u02d9","doteq;":"\u2250","doteqdot;":"\u2251","dotminus;":"\u2238","dotplus;":"\u2214","dotsquare;":"\u22a1","doublebarwedge;":"\u2306","downarrow;":"\u2193","downdownarrows;":"\u21ca","downharpoonleft;":"\u21c3","downharpoonright;":"\u21c2","drbkarow;":"\u2910","drcorn;":"\u231f","drcrop;":"\u230c","dscr;":"\ud835\udcb9","dscy;":"\u0455","dsol;":"\u29f6","dstrok;":"\u0111","dtdot;":"\u22f1","dtri;":"\u25bf","dtrif;":"\u25be","duarr;":"\u21f5","duhar;":"\u296f","dwangle;":"\u29a6","dzcy;":"\u045f","dzigrarr;":"\u27ff","eDDot;":"\u2a77","eDot;":"\u2251",eacute:"\xe9","eacute;":"\xe9","easter;":"\u2a6e","ecaron;":"\u011b","ecir;":"\u2256",ecirc:"\xea","ecirc;":"\xea","ecolon;":"\u2255","ecy;":"\u044d","edot;":"\u0117","ee;":"\u2147","efDot;":"\u2252","efr;":"\ud835\udd22","eg;":"\u2a9a",egrave:"\xe8","egrave;":"\xe8","egs;":"\u2a96","egsdot;":"\u2a98","el;":"\u2a99","elinters;":"\u23e7","ell;":"\u2113","els;":"\u2a95","elsdot;":"\u2a97","emacr;":"\u0113","empty;":"\u2205","emptyset;":"\u2205","emptyv;":"\u2205","emsp13;":"\u2004","emsp14;":"\u2005","emsp;":"\u2003","eng;":"\u014b","ensp;":"\u2002","eogon;":"\u0119","eopf;":"\ud835\udd56","epar;":"\u22d5","eparsl;":"\u29e3","eplus;":"\u2a71","epsi;":"\u03b5","epsilon;":"\u03b5","epsiv;":"\u03f5","eqcirc;":"\u2256","eqcolon;":"\u2255","eqsim;":"\u2242","eqslantgtr;":"\u2a96","eqslantless;":"\u2a95","equals;":"=","equest;":"\u225f","equiv;":"\u2261","equivDD;":"\u2a78","eqvparsl;":"\u29e5","erDot;":"\u2253","erarr;":"\u2971","escr;":"\u212f","esdot;":"\u2250","esim;":"\u2242","eta;":"\u03b7",eth:"\xf0","eth;":"\xf0",euml:"\xeb","euml;":"\xeb","euro;":"\u20ac","excl;":"!","exist;":"\u2203","expectation;":"\u2130","exponentiale;":"\u2147","fallingdotseq;":"\u2252","fcy;":"\u0444","female;":"\u2640","ffilig;":"\ufb03","fflig;":"\ufb00","ffllig;":"\ufb04","ffr;":"\ud835\udd23","filig;":"\ufb01","fjlig;":"fj","flat;":"\u266d","fllig;":"\ufb02","fltns;":"\u25b1","fnof;":"\u0192","fopf;":"\ud835\udd57","forall;":"\u2200","fork;":"\u22d4","forkv;":"\u2ad9","fpartint;":"\u2a0d",frac12:"\xbd","frac12;":"\xbd","frac13;":"\u2153",frac14:"\xbc","frac14;":"\xbc","frac15;":"\u2155","frac16;":"\u2159","frac18;":"\u215b","frac23;":"\u2154","frac25;":"\u2156",frac34:"\xbe","frac34;":"\xbe","frac35;":"\u2157","frac38;":"\u215c","frac45;":"\u2158","frac56;":"\u215a","frac58;":"\u215d","frac78;":"\u215e","frasl;":"\u2044","frown;":"\u2322","fscr;":"\ud835\udcbb","gE;":"\u2267","gEl;":"\u2a8c","gacute;":"\u01f5","gamma;":"\u03b3","gammad;":"\u03dd","gap;":"\u2a86","gbreve;":"\u011f","gcirc;":"\u011d","gcy;":"\u0433","gdot;":"\u0121","ge;":"\u2265","gel;":"\u22db","geq;":"\u2265","geqq;":"\u2267","geqslant;":"\u2a7e","ges;":"\u2a7e","gescc;":"\u2aa9","gesdot;":"\u2a80","gesdoto;":"\u2a82","gesdotol;":"\u2a84","gesl;":"\u22db\ufe00","gesles;":"\u2a94","gfr;":"\ud835\udd24","gg;":"\u226b","ggg;":"\u22d9","gimel;":"\u2137","gjcy;":"\u0453","gl;":"\u2277","glE;":"\u2a92","gla;":"\u2aa5","glj;":"\u2aa4","gnE;":"\u2269","gnap;":"\u2a8a","gnapprox;":"\u2a8a","gne;":"\u2a88","gneq;":"\u2a88","gneqq;":"\u2269","gnsim;":"\u22e7","gopf;":"\ud835\udd58","grave;":"`","gscr;":"\u210a","gsim;":"\u2273","gsime;":"\u2a8e","gsiml;":"\u2a90",gt:">","gt;":">","gtcc;":"\u2aa7","gtcir;":"\u2a7a","gtdot;":"\u22d7","gtlPar;":"\u2995","gtquest;":"\u2a7c","gtrapprox;":"\u2a86","gtrarr;":"\u2978","gtrdot;":"\u22d7","gtreqless;":"\u22db","gtreqqless;":"\u2a8c","gtrless;":"\u2277","gtrsim;":"\u2273","gvertneqq;":"\u2269\ufe00","gvnE;":"\u2269\ufe00","hArr;":"\u21d4","hairsp;":"\u200a","half;":"\xbd","hamilt;":"\u210b","hardcy;":"\u044a","harr;":"\u2194","harrcir;":"\u2948","harrw;":"\u21ad","hbar;":"\u210f","hcirc;":"\u0125","hearts;":"\u2665","heartsuit;":"\u2665","hellip;":"\u2026","hercon;":"\u22b9","hfr;":"\ud835\udd25","hksearow;":"\u2925","hkswarow;":"\u2926","hoarr;":"\u21ff","homtht;":"\u223b","hookleftarrow;":"\u21a9","hookrightarrow;":"\u21aa","hopf;":"\ud835\udd59","horbar;":"\u2015","hscr;":"\ud835\udcbd","hslash;":"\u210f","hstrok;":"\u0127","hybull;":"\u2043","hyphen;":"\u2010",iacute:"\xed","iacute;":"\xed","ic;":"\u2063",icirc:"\xee","icirc;":"\xee","icy;":"\u0438","iecy;":"\u0435",iexcl:"\xa1","iexcl;":"\xa1","iff;":"\u21d4","ifr;":"\ud835\udd26",igrave:"\xec","igrave;":"\xec","ii;":"\u2148","iiiint;":"\u2a0c","iiint;":"\u222d","iinfin;":"\u29dc","iiota;":"\u2129","ijlig;":"\u0133","imacr;":"\u012b","image;":"\u2111","imagline;":"\u2110","imagpart;":"\u2111","imath;":"\u0131","imof;":"\u22b7","imped;":"\u01b5","in;":"\u2208","incare;":"\u2105","infin;":"\u221e","infintie;":"\u29dd","inodot;":"\u0131","int;":"\u222b","intcal;":"\u22ba","integers;":"\u2124","intercal;":"\u22ba","intlarhk;":"\u2a17","intprod;":"\u2a3c","iocy;":"\u0451","iogon;":"\u012f","iopf;":"\ud835\udd5a","iota;":"\u03b9","iprod;":"\u2a3c",iquest:"\xbf","iquest;":"\xbf","iscr;":"\ud835\udcbe","isin;":"\u2208","isinE;":"\u22f9","isindot;":"\u22f5","isins;":"\u22f4","isinsv;":"\u22f3","isinv;":"\u2208","it;":"\u2062","itilde;":"\u0129","iukcy;":"\u0456",iuml:"\xef","iuml;":"\xef","jcirc;":"\u0135","jcy;":"\u0439","jfr;":"\ud835\udd27","jmath;":"\u0237","jopf;":"\ud835\udd5b","jscr;":"\ud835\udcbf","jsercy;":"\u0458","jukcy;":"\u0454","kappa;":"\u03ba","kappav;":"\u03f0","kcedil;":"\u0137","kcy;":"\u043a","kfr;":"\ud835\udd28","kgreen;":"\u0138","khcy;":"\u0445","kjcy;":"\u045c","kopf;":"\ud835\udd5c","kscr;":"\ud835\udcc0","lAarr;":"\u21da","lArr;":"\u21d0","lAtail;":"\u291b","lBarr;":"\u290e","lE;":"\u2266","lEg;":"\u2a8b","lHar;":"\u2962","lacute;":"\u013a","laemptyv;":"\u29b4","lagran;":"\u2112","lambda;":"\u03bb","lang;":"\u27e8","langd;":"\u2991","langle;":"\u27e8","lap;":"\u2a85",laquo:"\xab","laquo;":"\xab","larr;":"\u2190","larrb;":"\u21e4","larrbfs;":"\u291f","larrfs;":"\u291d","larrhk;":"\u21a9","larrlp;":"\u21ab","larrpl;":"\u2939","larrsim;":"\u2973","larrtl;":"\u21a2","lat;":"\u2aab","latail;":"\u2919","late;":"\u2aad","lates;":"\u2aad\ufe00","lbarr;":"\u290c","lbbrk;":"\u2772","lbrace;":"{","lbrack;":"[","lbrke;":"\u298b","lbrksld;":"\u298f","lbrkslu;":"\u298d","lcaron;":"\u013e","lcedil;":"\u013c","lceil;":"\u2308","lcub;":"{","lcy;":"\u043b","ldca;":"\u2936","ldquo;":"\u201c","ldquor;":"\u201e","ldrdhar;":"\u2967","ldrushar;":"\u294b","ldsh;":"\u21b2","le;":"\u2264","leftarrow;":"\u2190","leftarrowtail;":"\u21a2","leftharpoondown;":"\u21bd","leftharpoonup;":"\u21bc","leftleftarrows;":"\u21c7","leftrightarrow;":"\u2194","leftrightarrows;":"\u21c6","leftrightharpoons;":"\u21cb","leftrightsquigarrow;":"\u21ad","leftthreetimes;":"\u22cb","leg;":"\u22da","leq;":"\u2264","leqq;":"\u2266","leqslant;":"\u2a7d","les;":"\u2a7d","lescc;":"\u2aa8","lesdot;":"\u2a7f","lesdoto;":"\u2a81","lesdotor;":"\u2a83","lesg;":"\u22da\ufe00","lesges;":"\u2a93","lessapprox;":"\u2a85","lessdot;":"\u22d6","lesseqgtr;":"\u22da","lesseqqgtr;":"\u2a8b","lessgtr;":"\u2276","lesssim;":"\u2272","lfisht;":"\u297c","lfloor;":"\u230a","lfr;":"\ud835\udd29","lg;":"\u2276","lgE;":"\u2a91","lhard;":"\u21bd","lharu;":"\u21bc","lharul;":"\u296a","lhblk;":"\u2584","ljcy;":"\u0459","ll;":"\u226a","llarr;":"\u21c7","llcorner;":"\u231e","llhard;":"\u296b","lltri;":"\u25fa","lmidot;":"\u0140","lmoust;":"\u23b0","lmoustache;":"\u23b0","lnE;":"\u2268","lnap;":"\u2a89","lnapprox;":"\u2a89","lne;":"\u2a87","lneq;":"\u2a87","lneqq;":"\u2268","lnsim;":"\u22e6","loang;":"\u27ec","loarr;":"\u21fd","lobrk;":"\u27e6","longleftarrow;":"\u27f5","longleftrightarrow;":"\u27f7","longmapsto;":"\u27fc","longrightarrow;":"\u27f6","looparrowleft;":"\u21ab","looparrowright;":"\u21ac","lopar;":"\u2985","lopf;":"\ud835\udd5d","loplus;":"\u2a2d","lotimes;":"\u2a34","lowast;":"\u2217","lowbar;":"_","loz;":"\u25ca","lozenge;":"\u25ca","lozf;":"\u29eb","lpar;":"(","lparlt;":"\u2993","lrarr;":"\u21c6","lrcorner;":"\u231f","lrhar;":"\u21cb","lrhard;":"\u296d","lrm;":"\u200e","lrtri;":"\u22bf","lsaquo;":"\u2039","lscr;":"\ud835\udcc1","lsh;":"\u21b0","lsim;":"\u2272","lsime;":"\u2a8d","lsimg;":"\u2a8f","lsqb;":"[","lsquo;":"\u2018","lsquor;":"\u201a","lstrok;":"\u0142",lt:"<","lt;":"<","ltcc;":"\u2aa6","ltcir;":"\u2a79","ltdot;":"\u22d6","lthree;":"\u22cb","ltimes;":"\u22c9","ltlarr;":"\u2976","ltquest;":"\u2a7b","ltrPar;":"\u2996","ltri;":"\u25c3","ltrie;":"\u22b4","ltrif;":"\u25c2","lurdshar;":"\u294a","luruhar;":"\u2966","lvertneqq;":"\u2268\ufe00","lvnE;":"\u2268\ufe00","mDDot;":"\u223a",macr:"\xaf","macr;":"\xaf","male;":"\u2642","malt;":"\u2720","maltese;":"\u2720","map;":"\u21a6","mapsto;":"\u21a6","mapstodown;":"\u21a7","mapstoleft;":"\u21a4","mapstoup;":"\u21a5","marker;":"\u25ae","mcomma;":"\u2a29","mcy;":"\u043c","mdash;":"\u2014","measuredangle;":"\u2221","mfr;":"\ud835\udd2a","mho;":"\u2127",micro:"\xb5","micro;":"\xb5","mid;":"\u2223","midast;":"*","midcir;":"\u2af0",middot:"\xb7","middot;":"\xb7","minus;":"\u2212","minusb;":"\u229f","minusd;":"\u2238","minusdu;":"\u2a2a","mlcp;":"\u2adb","mldr;":"\u2026","mnplus;":"\u2213","models;":"\u22a7","mopf;":"\ud835\udd5e","mp;":"\u2213","mscr;":"\ud835\udcc2","mstpos;":"\u223e","mu;":"\u03bc","multimap;":"\u22b8","mumap;":"\u22b8","nGg;":"\u22d9\u0338","nGt;":"\u226b\u20d2","nGtv;":"\u226b\u0338","nLeftarrow;":"\u21cd","nLeftrightarrow;":"\u21ce","nLl;":"\u22d8\u0338","nLt;":"\u226a\u20d2","nLtv;":"\u226a\u0338","nRightarrow;":"\u21cf","nVDash;":"\u22af","nVdash;":"\u22ae","nabla;":"\u2207","nacute;":"\u0144","nang;":"\u2220\u20d2","nap;":"\u2249","napE;":"\u2a70\u0338","napid;":"\u224b\u0338","napos;":"\u0149","napprox;":"\u2249","natur;":"\u266e","natural;":"\u266e","naturals;":"\u2115",nbsp:"\xa0","nbsp;":"\xa0","nbump;":"\u224e\u0338","nbumpe;":"\u224f\u0338","ncap;":"\u2a43","ncaron;":"\u0148","ncedil;":"\u0146","ncong;":"\u2247","ncongdot;":"\u2a6d\u0338","ncup;":"\u2a42","ncy;":"\u043d","ndash;":"\u2013","ne;":"\u2260","neArr;":"\u21d7","nearhk;":"\u2924","nearr;":"\u2197","nearrow;":"\u2197","nedot;":"\u2250\u0338","nequiv;":"\u2262","nesear;":"\u2928","nesim;":"\u2242\u0338","nexist;":"\u2204","nexists;":"\u2204","nfr;":"\ud835\udd2b","ngE;":"\u2267\u0338","nge;":"\u2271","ngeq;":"\u2271","ngeqq;":"\u2267\u0338","ngeqslant;":"\u2a7e\u0338","nges;":"\u2a7e\u0338","ngsim;":"\u2275","ngt;":"\u226f","ngtr;":"\u226f","nhArr;":"\u21ce","nharr;":"\u21ae","nhpar;":"\u2af2","ni;":"\u220b","nis;":"\u22fc","nisd;":"\u22fa","niv;":"\u220b","njcy;":"\u045a","nlArr;":"\u21cd","nlE;":"\u2266\u0338","nlarr;":"\u219a","nldr;":"\u2025","nle;":"\u2270","nleftarrow;":"\u219a","nleftrightarrow;":"\u21ae","nleq;":"\u2270","nleqq;":"\u2266\u0338","nleqslant;":"\u2a7d\u0338","nles;":"\u2a7d\u0338","nless;":"\u226e","nlsim;":"\u2274","nlt;":"\u226e","nltri;":"\u22ea","nltrie;":"\u22ec","nmid;":"\u2224","nopf;":"\ud835\udd5f",not:"\xac","not;":"\xac","notin;":"\u2209","notinE;":"\u22f9\u0338","notindot;":"\u22f5\u0338","notinva;":"\u2209","notinvb;":"\u22f7","notinvc;":"\u22f6","notni;":"\u220c","notniva;":"\u220c","notnivb;":"\u22fe","notnivc;":"\u22fd","npar;":"\u2226","nparallel;":"\u2226","nparsl;":"\u2afd\u20e5","npart;":"\u2202\u0338","npolint;":"\u2a14","npr;":"\u2280","nprcue;":"\u22e0","npre;":"\u2aaf\u0338","nprec;":"\u2280","npreceq;":"\u2aaf\u0338","nrArr;":"\u21cf","nrarr;":"\u219b","nrarrc;":"\u2933\u0338","nrarrw;":"\u219d\u0338","nrightarrow;":"\u219b","nrtri;":"\u22eb","nrtrie;":"\u22ed","nsc;":"\u2281","nsccue;":"\u22e1","nsce;":"\u2ab0\u0338","nscr;":"\ud835\udcc3","nshortmid;":"\u2224","nshortparallel;":"\u2226","nsim;":"\u2241","nsime;":"\u2244","nsimeq;":"\u2244","nsmid;":"\u2224","nspar;":"\u2226","nsqsube;":"\u22e2","nsqsupe;":"\u22e3","nsub;":"\u2284","nsubE;":"\u2ac5\u0338","nsube;":"\u2288","nsubset;":"\u2282\u20d2","nsubseteq;":"\u2288","nsubseteqq;":"\u2ac5\u0338","nsucc;":"\u2281","nsucceq;":"\u2ab0\u0338","nsup;":"\u2285","nsupE;":"\u2ac6\u0338","nsupe;":"\u2289","nsupset;":"\u2283\u20d2","nsupseteq;":"\u2289","nsupseteqq;":"\u2ac6\u0338","ntgl;":"\u2279",ntilde:"\xf1","ntilde;":"\xf1","ntlg;":"\u2278","ntriangleleft;":"\u22ea","ntrianglelefteq;":"\u22ec","ntriangleright;":"\u22eb","ntrianglerighteq;":"\u22ed","nu;":"\u03bd","num;":"#","numero;":"\u2116","numsp;":"\u2007","nvDash;":"\u22ad","nvHarr;":"\u2904","nvap;":"\u224d\u20d2","nvdash;":"\u22ac","nvge;":"\u2265\u20d2","nvgt;":">\u20d2","nvinfin;":"\u29de","nvlArr;":"\u2902","nvle;":"\u2264\u20d2","nvlt;":"<\u20d2","nvltrie;":"\u22b4\u20d2","nvrArr;":"\u2903","nvrtrie;":"\u22b5\u20d2","nvsim;":"\u223c\u20d2","nwArr;":"\u21d6","nwarhk;":"\u2923","nwarr;":"\u2196","nwarrow;":"\u2196","nwnear;":"\u2927","oS;":"\u24c8",oacute:"\xf3","oacute;":"\xf3","oast;":"\u229b","ocir;":"\u229a",ocirc:"\xf4","ocirc;":"\xf4","ocy;":"\u043e","odash;":"\u229d","odblac;":"\u0151","odiv;":"\u2a38","odot;":"\u2299","odsold;":"\u29bc","oelig;":"\u0153","ofcir;":"\u29bf","ofr;":"\ud835\udd2c","ogon;":"\u02db",ograve:"\xf2","ograve;":"\xf2","ogt;":"\u29c1","ohbar;":"\u29b5","ohm;":"\u03a9","oint;":"\u222e","olarr;":"\u21ba","olcir;":"\u29be","olcross;":"\u29bb","oline;":"\u203e","olt;":"\u29c0","omacr;":"\u014d","omega;":"\u03c9","omicron;":"\u03bf","omid;":"\u29b6","ominus;":"\u2296","oopf;":"\ud835\udd60","opar;":"\u29b7","operp;":"\u29b9","oplus;":"\u2295","or;":"\u2228","orarr;":"\u21bb","ord;":"\u2a5d","order;":"\u2134","orderof;":"\u2134",ordf:"\xaa","ordf;":"\xaa",ordm:"\xba","ordm;":"\xba","origof;":"\u22b6","oror;":"\u2a56","orslope;":"\u2a57","orv;":"\u2a5b","oscr;":"\u2134",oslash:"\xf8","oslash;":"\xf8","osol;":"\u2298",otilde:"\xf5","otilde;":"\xf5","otimes;":"\u2297","otimesas;":"\u2a36",ouml:"\xf6","ouml;":"\xf6","ovbar;":"\u233d","par;":"\u2225",para:"\xb6","para;":"\xb6","parallel;":"\u2225","parsim;":"\u2af3","parsl;":"\u2afd","part;":"\u2202","pcy;":"\u043f","percnt;":"%","period;":".","permil;":"\u2030","perp;":"\u22a5","pertenk;":"\u2031","pfr;":"\ud835\udd2d","phi;":"\u03c6","phiv;":"\u03d5","phmmat;":"\u2133","phone;":"\u260e","pi;":"\u03c0","pitchfork;":"\u22d4","piv;":"\u03d6","planck;":"\u210f","planckh;":"\u210e","plankv;":"\u210f","plus;":"+","plusacir;":"\u2a23","plusb;":"\u229e","pluscir;":"\u2a22","plusdo;":"\u2214","plusdu;":"\u2a25","pluse;":"\u2a72",plusmn:"\xb1","plusmn;":"\xb1","plussim;":"\u2a26","plustwo;":"\u2a27","pm;":"\xb1","pointint;":"\u2a15","popf;":"\ud835\udd61",pound:"\xa3","pound;":"\xa3","pr;":"\u227a","prE;":"\u2ab3","prap;":"\u2ab7","prcue;":"\u227c","pre;":"\u2aaf","prec;":"\u227a","precapprox;":"\u2ab7","preccurlyeq;":"\u227c","preceq;":"\u2aaf","precnapprox;":"\u2ab9","precneqq;":"\u2ab5","precnsim;":"\u22e8","precsim;":"\u227e","prime;":"\u2032","primes;":"\u2119","prnE;":"\u2ab5","prnap;":"\u2ab9","prnsim;":"\u22e8","prod;":"\u220f","profalar;":"\u232e","profline;":"\u2312","profsurf;":"\u2313","prop;":"\u221d","propto;":"\u221d","prsim;":"\u227e","prurel;":"\u22b0","pscr;":"\ud835\udcc5","psi;":"\u03c8","puncsp;":"\u2008","qfr;":"\ud835\udd2e","qint;":"\u2a0c","qopf;":"\ud835\udd62","qprime;":"\u2057","qscr;":"\ud835\udcc6","quaternions;":"\u210d","quatint;":"\u2a16","quest;":"?","questeq;":"\u225f",quot:'"',"quot;":'"',"rAarr;":"\u21db","rArr;":"\u21d2","rAtail;":"\u291c","rBarr;":"\u290f","rHar;":"\u2964","race;":"\u223d\u0331","racute;":"\u0155","radic;":"\u221a","raemptyv;":"\u29b3","rang;":"\u27e9","rangd;":"\u2992","range;":"\u29a5","rangle;":"\u27e9",raquo:"\xbb","raquo;":"\xbb","rarr;":"\u2192","rarrap;":"\u2975","rarrb;":"\u21e5","rarrbfs;":"\u2920","rarrc;":"\u2933","rarrfs;":"\u291e","rarrhk;":"\u21aa","rarrlp;":"\u21ac","rarrpl;":"\u2945","rarrsim;":"\u2974","rarrtl;":"\u21a3","rarrw;":"\u219d","ratail;":"\u291a","ratio;":"\u2236","rationals;":"\u211a","rbarr;":"\u290d","rbbrk;":"\u2773","rbrace;":"}","rbrack;":"]","rbrke;":"\u298c","rbrksld;":"\u298e","rbrkslu;":"\u2990","rcaron;":"\u0159","rcedil;":"\u0157","rceil;":"\u2309","rcub;":"}","rcy;":"\u0440","rdca;":"\u2937","rdldhar;":"\u2969","rdquo;":"\u201d","rdquor;":"\u201d","rdsh;":"\u21b3","real;":"\u211c","realine;":"\u211b","realpart;":"\u211c","reals;":"\u211d","rect;":"\u25ad",reg:"\xae","reg;":"\xae","rfisht;":"\u297d","rfloor;":"\u230b","rfr;":"\ud835\udd2f","rhard;":"\u21c1","rharu;":"\u21c0","rharul;":"\u296c","rho;":"\u03c1","rhov;":"\u03f1","rightarrow;":"\u2192","rightarrowtail;":"\u21a3","rightharpoondown;":"\u21c1","rightharpoonup;":"\u21c0","rightleftarrows;":"\u21c4","rightleftharpoons;":"\u21cc","rightrightarrows;":"\u21c9","rightsquigarrow;":"\u219d","rightthreetimes;":"\u22cc","ring;":"\u02da","risingdotseq;":"\u2253","rlarr;":"\u21c4","rlhar;":"\u21cc","rlm;":"\u200f","rmoust;":"\u23b1","rmoustache;":"\u23b1","rnmid;":"\u2aee","roang;":"\u27ed","roarr;":"\u21fe","robrk;":"\u27e7","ropar;":"\u2986","ropf;":"\ud835\udd63","roplus;":"\u2a2e","rotimes;":"\u2a35","rpar;":")","rpargt;":"\u2994","rppolint;":"\u2a12","rrarr;":"\u21c9","rsaquo;":"\u203a","rscr;":"\ud835\udcc7","rsh;":"\u21b1","rsqb;":"]","rsquo;":"\u2019","rsquor;":"\u2019","rthree;":"\u22cc","rtimes;":"\u22ca","rtri;":"\u25b9","rtrie;":"\u22b5","rtrif;":"\u25b8","rtriltri;":"\u29ce","ruluhar;":"\u2968","rx;":"\u211e","sacute;":"\u015b","sbquo;":"\u201a","sc;":"\u227b","scE;":"\u2ab4","scap;":"\u2ab8","scaron;":"\u0161","sccue;":"\u227d","sce;":"\u2ab0","scedil;":"\u015f","scirc;":"\u015d","scnE;":"\u2ab6","scnap;":"\u2aba","scnsim;":"\u22e9","scpolint;":"\u2a13","scsim;":"\u227f","scy;":"\u0441","sdot;":"\u22c5","sdotb;":"\u22a1","sdote;":"\u2a66","seArr;":"\u21d8","searhk;":"\u2925","searr;":"\u2198","searrow;":"\u2198",sect:"\xa7","sect;":"\xa7","semi;":";","seswar;":"\u2929","setminus;":"\u2216","setmn;":"\u2216","sext;":"\u2736","sfr;":"\ud835\udd30","sfrown;":"\u2322","sharp;":"\u266f","shchcy;":"\u0449","shcy;":"\u0448","shortmid;":"\u2223","shortparallel;":"\u2225",shy:"\xad","shy;":"\xad","sigma;":"\u03c3","sigmaf;":"\u03c2","sigmav;":"\u03c2","sim;":"\u223c","simdot;":"\u2a6a","sime;":"\u2243","simeq;":"\u2243","simg;":"\u2a9e","simgE;":"\u2aa0","siml;":"\u2a9d","simlE;":"\u2a9f","simne;":"\u2246","simplus;":"\u2a24","simrarr;":"\u2972","slarr;":"\u2190","smallsetminus;":"\u2216","smashp;":"\u2a33","smeparsl;":"\u29e4","smid;":"\u2223","smile;":"\u2323","smt;":"\u2aaa","smte;":"\u2aac","smtes;":"\u2aac\ufe00","softcy;":"\u044c","sol;":"/","solb;":"\u29c4","solbar;":"\u233f","sopf;":"\ud835\udd64","spades;":"\u2660","spadesuit;":"\u2660","spar;":"\u2225","sqcap;":"\u2293","sqcaps;":"\u2293\ufe00","sqcup;":"\u2294","sqcups;":"\u2294\ufe00","sqsub;":"\u228f","sqsube;":"\u2291","sqsubset;":"\u228f","sqsubseteq;":"\u2291","sqsup;":"\u2290","sqsupe;":"\u2292","sqsupset;":"\u2290","sqsupseteq;":"\u2292","squ;":"\u25a1","square;":"\u25a1","squarf;":"\u25aa","squf;":"\u25aa","srarr;":"\u2192","sscr;":"\ud835\udcc8","ssetmn;":"\u2216","ssmile;":"\u2323","sstarf;":"\u22c6","star;":"\u2606","starf;":"\u2605","straightepsilon;":"\u03f5","straightphi;":"\u03d5","strns;":"\xaf","sub;":"\u2282","subE;":"\u2ac5","subdot;":"\u2abd","sube;":"\u2286","subedot;":"\u2ac3","submult;":"\u2ac1","subnE;":"\u2acb","subne;":"\u228a","subplus;":"\u2abf","subrarr;":"\u2979","subset;":"\u2282","subseteq;":"\u2286","subseteqq;":"\u2ac5","subsetneq;":"\u228a","subsetneqq;":"\u2acb","subsim;":"\u2ac7","subsub;":"\u2ad5","subsup;":"\u2ad3","succ;":"\u227b","succapprox;":"\u2ab8","succcurlyeq;":"\u227d","succeq;":"\u2ab0","succnapprox;":"\u2aba","succneqq;":"\u2ab6","succnsim;":"\u22e9","succsim;":"\u227f","sum;":"\u2211","sung;":"\u266a",sup1:"\xb9","sup1;":"\xb9",sup2:"\xb2","sup2;":"\xb2",sup3:"\xb3","sup3;":"\xb3","sup;":"\u2283","supE;":"\u2ac6","supdot;":"\u2abe","supdsub;":"\u2ad8","supe;":"\u2287","supedot;":"\u2ac4","suphsol;":"\u27c9","suphsub;":"\u2ad7","suplarr;":"\u297b","supmult;":"\u2ac2","supnE;":"\u2acc","supne;":"\u228b","supplus;":"\u2ac0","supset;":"\u2283","supseteq;":"\u2287","supseteqq;":"\u2ac6","supsetneq;":"\u228b","supsetneqq;":"\u2acc","supsim;":"\u2ac8","supsub;":"\u2ad4","supsup;":"\u2ad6","swArr;":"\u21d9","swarhk;":"\u2926","swarr;":"\u2199","swarrow;":"\u2199","swnwar;":"\u292a",szlig:"\xdf","szlig;":"\xdf","target;":"\u2316","tau;":"\u03c4","tbrk;":"\u23b4","tcaron;":"\u0165","tcedil;":"\u0163","tcy;":"\u0442","tdot;":"\u20db","telrec;":"\u2315","tfr;":"\ud835\udd31","there4;":"\u2234","therefore;":"\u2234","theta;":"\u03b8","thetasym;":"\u03d1","thetav;":"\u03d1","thickapprox;":"\u2248","thicksim;":"\u223c","thinsp;":"\u2009","thkap;":"\u2248","thksim;":"\u223c",thorn:"\xfe","thorn;":"\xfe","tilde;":"\u02dc",times:"\xd7","times;":"\xd7","timesb;":"\u22a0","timesbar;":"\u2a31","timesd;":"\u2a30","tint;":"\u222d","toea;":"\u2928","top;":"\u22a4","topbot;":"\u2336","topcir;":"\u2af1","topf;":"\ud835\udd65","topfork;":"\u2ada","tosa;":"\u2929","tprime;":"\u2034","trade;":"\u2122","triangle;":"\u25b5","triangledown;":"\u25bf","triangleleft;":"\u25c3","trianglelefteq;":"\u22b4","triangleq;":"\u225c","triangleright;":"\u25b9","trianglerighteq;":"\u22b5","tridot;":"\u25ec","trie;":"\u225c","triminus;":"\u2a3a","triplus;":"\u2a39","trisb;":"\u29cd","tritime;":"\u2a3b","trpezium;":"\u23e2","tscr;":"\ud835\udcc9","tscy;":"\u0446","tshcy;":"\u045b","tstrok;":"\u0167","twixt;":"\u226c","twoheadleftarrow;":"\u219e","twoheadrightarrow;":"\u21a0","uArr;":"\u21d1","uHar;":"\u2963",uacute:"\xfa","uacute;":"\xfa","uarr;":"\u2191","ubrcy;":"\u045e","ubreve;":"\u016d",ucirc:"\xfb","ucirc;":"\xfb","ucy;":"\u0443","udarr;":"\u21c5","udblac;":"\u0171","udhar;":"\u296e","ufisht;":"\u297e","ufr;":"\ud835\udd32",ugrave:"\xf9","ugrave;":"\xf9","uharl;":"\u21bf","uharr;":"\u21be","uhblk;":"\u2580","ulcorn;":"\u231c","ulcorner;":"\u231c","ulcrop;":"\u230f","ultri;":"\u25f8","umacr;":"\u016b",uml:"\xa8","uml;":"\xa8","uogon;":"\u0173","uopf;":"\ud835\udd66","uparrow;":"\u2191","updownarrow;":"\u2195","upharpoonleft;":"\u21bf","upharpoonright;":"\u21be","uplus;":"\u228e","upsi;":"\u03c5","upsih;":"\u03d2","upsilon;":"\u03c5","upuparrows;":"\u21c8","urcorn;":"\u231d","urcorner;":"\u231d","urcrop;":"\u230e","uring;":"\u016f","urtri;":"\u25f9","uscr;":"\ud835\udcca","utdot;":"\u22f0","utilde;":"\u0169","utri;":"\u25b5","utrif;":"\u25b4","uuarr;":"\u21c8",uuml:"\xfc","uuml;":"\xfc","uwangle;":"\u29a7","vArr;":"\u21d5","vBar;":"\u2ae8","vBarv;":"\u2ae9","vDash;":"\u22a8","vangrt;":"\u299c","varepsilon;":"\u03f5","varkappa;":"\u03f0","varnothing;":"\u2205","varphi;":"\u03d5","varpi;":"\u03d6","varpropto;":"\u221d","varr;":"\u2195","varrho;":"\u03f1","varsigma;":"\u03c2","varsubsetneq;":"\u228a\ufe00","varsubsetneqq;":"\u2acb\ufe00","varsupsetneq;":"\u228b\ufe00","varsupsetneqq;":"\u2acc\ufe00","vartheta;":"\u03d1","vartriangleleft;":"\u22b2","vartriangleright;":"\u22b3","vcy;":"\u0432","vdash;":"\u22a2","vee;":"\u2228","veebar;":"\u22bb","veeeq;":"\u225a","vellip;":"\u22ee","verbar;":"|","vert;":"|","vfr;":"\ud835\udd33","vltri;":"\u22b2","vnsub;":"\u2282\u20d2","vnsup;":"\u2283\u20d2","vopf;":"\ud835\udd67","vprop;":"\u221d","vrtri;":"\u22b3","vscr;":"\ud835\udccb","vsubnE;":"\u2acb\ufe00","vsubne;":"\u228a\ufe00","vsupnE;":"\u2acc\ufe00","vsupne;":"\u228b\ufe00","vzigzag;":"\u299a","wcirc;":"\u0175","wedbar;":"\u2a5f","wedge;":"\u2227","wedgeq;":"\u2259","weierp;":"\u2118","wfr;":"\ud835\udd34","wopf;":"\ud835\udd68","wp;":"\u2118","wr;":"\u2240","wreath;":"\u2240","wscr;":"\ud835\udccc","xcap;":"\u22c2","xcirc;":"\u25ef","xcup;":"\u22c3","xdtri;":"\u25bd","xfr;":"\ud835\udd35","xhArr;":"\u27fa","xharr;":"\u27f7","xi;":"\u03be","xlArr;":"\u27f8","xlarr;":"\u27f5","xmap;":"\u27fc","xnis;":"\u22fb","xodot;":"\u2a00","xopf;":"\ud835\udd69","xoplus;":"\u2a01","xotime;":"\u2a02","xrArr;":"\u27f9","xrarr;":"\u27f6","xscr;":"\ud835\udccd","xsqcup;":"\u2a06","xuplus;":"\u2a04","xutri;":"\u25b3","xvee;":"\u22c1","xwedge;":"\u22c0",yacute:"\xfd","yacute;":"\xfd","yacy;":"\u044f","ycirc;":"\u0177","ycy;":"\u044b",yen:"\xa5","yen;":"\xa5","yfr;":"\ud835\udd36","yicy;":"\u0457","yopf;":"\ud835\udd6a","yscr;":"\ud835\udcce","yucy;":"\u044e",yuml:"\xff","yuml;":"\xff","zacute;":"\u017a","zcaron;":"\u017e","zcy;":"\u0437","zdot;":"\u017c","zeetrf;":"\u2128","zeta;":"\u03b6","zfr;":"\ud835\udd37","zhcy;":"\u0436","zigrarr;":"\u21dd","zopf;":"\ud835\udd6b","zscr;":"\ud835\udccf","zwj;":"\u200d","zwnj;":"\u200c"},B.b9,t.B)
B.bc=A.a(s(["null-character","invalid-codepoint","incorrectly-placed-solidus","incorrect-cr-newline-entity","illegal-windows-1252-entity","cant-convert-numeric-entity","illegal-codepoint-for-numeric-entity","numeric-entity-without-semicolon","expected-numeric-entity-but-got-eof","expected-numeric-entity","named-entity-without-semicolon","expected-named-entity","attributes-in-end-tag","self-closing-flag-on-end-tag","expected-tag-name-but-got-right-bracket","expected-tag-name-but-got-question-mark","expected-tag-name",u.g,"expected-closing-tag-but-got-eof","expected-closing-tag-but-got-char","eof-in-tag-name","expected-attribute-name-but-got-eof","eof-in-attribute-name","invalid-character-in-attribute-name","duplicate-attribute","expected-end-of-tag-name-but-got-eof","expected-attribute-value-but-got-eof",u.A,"equals-in-unquoted-attribute-value",u.V,"invalid-character-after-attribute-name",u.H,"eof-in-attribute-value-double-quote","eof-in-attribute-value-single-quote","eof-in-attribute-value-no-quotes","unexpected-EOF-after-solidus-in-tag",u.B,"expected-dashes-or-doctype",u.d,"unexpected-space-after-double-dash-in-comment","incorrect-comment","eof-in-comment","eof-in-comment-end-dash",u.K,"eof-in-comment-double-dash","eof-in-comment-end-space-state","eof-in-comment-end-bang-state","unexpected-char-in-comment","need-space-after-doctype",u.f,"expected-doctype-name-but-got-eof","eof-in-doctype-name","eof-in-doctype",u.S,"unexpected-end-of-doctype","unexpected-char-in-doctype","eof-in-innerhtml","unexpected-doctype","non-html-root","expected-doctype-but-got-eof","unknown-doctype","expected-doctype-but-got-chars","expected-doctype-but-got-start-tag","expected-doctype-but-got-end-tag","end-tag-after-implied-root","expected-named-closing-tag-but-got-eof","two-heads-are-not-better-than-one","unexpected-end-tag","unexpected-start-tag-out-of-my-head","unexpected-start-tag","missing-end-tag","missing-end-tags","unexpected-start-tag-implies-end-tag","unexpected-start-tag-treated-as","deprecated-tag","unexpected-start-tag-ignored","expected-one-end-tag-but-got-another","end-tag-too-early","end-tag-too-early-named","end-tag-too-early-ignored","adoption-agency-1.1","adoption-agency-1.2","adoption-agency-1.3","unexpected-end-tag-treated-as","no-end-tag","unexpected-implied-end-tag-in-table","unexpected-implied-end-tag-in-table-body","unexpected-char-implies-table-voodoo","unexpected-hidden-input-in-table","unexpected-form-in-table",u.M,"unexpected-end-tag-implies-table-voodoo","unexpected-cell-in-table-body","unexpected-cell-end-tag","unexpected-end-tag-in-table-body","unexpected-implied-end-tag-in-table-row","unexpected-end-tag-in-table-row","unexpected-select-in-select","unexpected-input-in-select","unexpected-start-tag-in-select","unexpected-end-tag-in-select",u.a,u.r,"unexpected-char-after-body","unexpected-start-tag-after-body","unexpected-end-tag-after-body","unexpected-char-in-frameset","unexpected-start-tag-in-frameset",u.q,"unexpected-end-tag-in-frameset","unexpected-char-after-frameset","unexpected-start-tag-after-frameset","unexpected-end-tag-after-frameset","unexpected-end-tag-after-body-innerhtml","expected-eof-but-got-char","expected-eof-but-got-start-tag","expected-eof-but-got-end-tag","eof-in-table","eof-in-select","eof-in-frameset","eof-in-script-in-script","eof-in-foreign-lands","non-void-element-with-trailing-solidus",u.G,"unexpected-end-tag-before-html","undefined-error"]),t.s)
B.bD=new A.r(126,{"null-character":"Null character in input stream, replaced with U+FFFD.","invalid-codepoint":"Invalid codepoint in stream.","incorrectly-placed-solidus":"Solidus (/) incorrectly placed in tag.","incorrect-cr-newline-entity":"Incorrect CR newline entity, replaced with LF.","illegal-windows-1252-entity":"Entity used with illegal number (windows-1252 reference).","cant-convert-numeric-entity":"Numeric entity couldn't be converted to character (codepoint U+%(charAsInt)08x).","illegal-codepoint-for-numeric-entity":"Numeric entity represents an illegal codepoint: U+%(charAsInt)08x.","numeric-entity-without-semicolon":"Numeric entity didn't end with ';'.","expected-numeric-entity-but-got-eof":"Numeric entity expected. Got end of file instead.","expected-numeric-entity":"Numeric entity expected but none found.","named-entity-without-semicolon":"Named entity didn't end with ';'.","expected-named-entity":"Named entity expected. Got none.","attributes-in-end-tag":"End tag contains unexpected attributes.","self-closing-flag-on-end-tag":"End tag contains unexpected self-closing flag.","expected-tag-name-but-got-right-bracket":"Expected tag name. Got '>' instead.","expected-tag-name-but-got-question-mark":"Expected tag name. Got '?' instead. (HTML doesn't support processing instructions.)","expected-tag-name":"Expected tag name. Got something else instead","expected-closing-tag-but-got-right-bracket":"Expected closing tag. Got '>' instead. Ignoring '</>'.","expected-closing-tag-but-got-eof":"Expected closing tag. Unexpected end of file.","expected-closing-tag-but-got-char":"Expected closing tag. Unexpected character '%(data)s' found.","eof-in-tag-name":"Unexpected end of file in the tag name.","expected-attribute-name-but-got-eof":"Unexpected end of file. Expected attribute name instead.","eof-in-attribute-name":"Unexpected end of file in attribute name.","invalid-character-in-attribute-name":"Invalid character in attribute name","duplicate-attribute":"Dropped duplicate attribute on tag.","expected-end-of-tag-name-but-got-eof":"Unexpected end of file. Expected = or end of tag.","expected-attribute-value-but-got-eof":"Unexpected end of file. Expected attribute value.","expected-attribute-value-but-got-right-bracket":"Expected attribute value. Got '>' instead.","equals-in-unquoted-attribute-value":"Unexpected = in unquoted attribute","unexpected-character-in-unquoted-attribute-value":"Unexpected character in unquoted attribute","invalid-character-after-attribute-name":"Unexpected character after attribute name.","unexpected-character-after-attribute-value":"Unexpected character after attribute value.","eof-in-attribute-value-double-quote":'Unexpected end of file in attribute value (".',"eof-in-attribute-value-single-quote":"Unexpected end of file in attribute value (').","eof-in-attribute-value-no-quotes":"Unexpected end of file in attribute value.","unexpected-EOF-after-solidus-in-tag":"Unexpected end of file in tag. Expected >","unexpected-character-after-soldius-in-tag":"Unexpected character after / in tag. Expected >","expected-dashes-or-doctype":"Expected '--' or 'DOCTYPE'. Not found.","unexpected-bang-after-double-dash-in-comment":"Unexpected ! after -- in comment","unexpected-space-after-double-dash-in-comment":"Unexpected space after -- in comment","incorrect-comment":"Incorrect comment.","eof-in-comment":"Unexpected end of file in comment.","eof-in-comment-end-dash":"Unexpected end of file in comment (-)","unexpected-dash-after-double-dash-in-comment":"Unexpected '-' after '--' found in comment.","eof-in-comment-double-dash":"Unexpected end of file in comment (--).","eof-in-comment-end-space-state":"Unexpected end of file in comment.","eof-in-comment-end-bang-state":"Unexpected end of file in comment.","unexpected-char-in-comment":"Unexpected character in comment found.","need-space-after-doctype":"No space after literal string 'DOCTYPE'.","expected-doctype-name-but-got-right-bracket":"Unexpected > character. Expected DOCTYPE name.","expected-doctype-name-but-got-eof":"Unexpected end of file. Expected DOCTYPE name.","eof-in-doctype-name":"Unexpected end of file in DOCTYPE name.","eof-in-doctype":"Unexpected end of file in DOCTYPE.","expected-space-or-right-bracket-in-doctype":"Expected space or '>'. Got '%(data)s'","unexpected-end-of-doctype":"Unexpected end of DOCTYPE.","unexpected-char-in-doctype":"Unexpected character in DOCTYPE.","eof-in-innerhtml":"XXX innerHTML EOF","unexpected-doctype":"Unexpected DOCTYPE. Ignored.","non-html-root":"html needs to be the first start tag.","expected-doctype-but-got-eof":"Unexpected End of file. Expected DOCTYPE.","unknown-doctype":"Erroneous DOCTYPE.","expected-doctype-but-got-chars":"Unexpected non-space characters. Expected DOCTYPE.","expected-doctype-but-got-start-tag":"Unexpected start tag (%(name)s). Expected DOCTYPE.","expected-doctype-but-got-end-tag":"Unexpected end tag (%(name)s). Expected DOCTYPE.","end-tag-after-implied-root":"Unexpected end tag (%(name)s) after the (implied) root element.","expected-named-closing-tag-but-got-eof":"Unexpected end of file. Expected end tag (%(name)s).","two-heads-are-not-better-than-one":"Unexpected start tag head in existing head. Ignored.","unexpected-end-tag":"Unexpected end tag (%(name)s). Ignored.","unexpected-start-tag-out-of-my-head":"Unexpected start tag (%(name)s) that can be in head. Moved.","unexpected-start-tag":"Unexpected start tag (%(name)s).","missing-end-tag":"Missing end tag (%(name)s).","missing-end-tags":"Missing end tags (%(name)s).","unexpected-start-tag-implies-end-tag":"Unexpected start tag (%(startName)s) implies end tag (%(endName)s).","unexpected-start-tag-treated-as":"Unexpected start tag (%(originalName)s). Treated as %(newName)s.","deprecated-tag":"Unexpected start tag %(name)s. Don't use it!","unexpected-start-tag-ignored":"Unexpected start tag %(name)s. Ignored.","expected-one-end-tag-but-got-another":"Unexpected end tag (%(gotName)s). Missing end tag (%(expectedName)s).","end-tag-too-early":"End tag (%(name)s) seen too early. Expected other end tag.","end-tag-too-early-named":"Unexpected end tag (%(gotName)s). Expected end tag (%(expectedName)s).","end-tag-too-early-ignored":"End tag (%(name)s) seen too early. Ignored.","adoption-agency-1.1":"End tag (%(name)s) violates step 1, paragraph 1 of the adoption agency algorithm.","adoption-agency-1.2":"End tag (%(name)s) violates step 1, paragraph 2 of the adoption agency algorithm.","adoption-agency-1.3":"End tag (%(name)s) violates step 1, paragraph 3 of the adoption agency algorithm.","unexpected-end-tag-treated-as":"Unexpected end tag (%(originalName)s). Treated as %(newName)s.","no-end-tag":"This element (%(name)s) has no end tag.","unexpected-implied-end-tag-in-table":"Unexpected implied end tag (%(name)s) in the table phase.","unexpected-implied-end-tag-in-table-body":"Unexpected implied end tag (%(name)s) in the table body phase.","unexpected-char-implies-table-voodoo":"Unexpected non-space characters in table context caused voodoo mode.","unexpected-hidden-input-in-table":"Unexpected input with type hidden in table context.","unexpected-form-in-table":"Unexpected form in table context.","unexpected-start-tag-implies-table-voodoo":"Unexpected start tag (%(name)s) in table context caused voodoo mode.","unexpected-end-tag-implies-table-voodoo":"Unexpected end tag (%(name)s) in table context caused voodoo mode.","unexpected-cell-in-table-body":"Unexpected table cell start tag (%(name)s) in the table body phase.","unexpected-cell-end-tag":"Got table cell end tag (%(name)s) while required end tags are missing.","unexpected-end-tag-in-table-body":"Unexpected end tag (%(name)s) in the table body phase. Ignored.","unexpected-implied-end-tag-in-table-row":"Unexpected implied end tag (%(name)s) in the table row phase.","unexpected-end-tag-in-table-row":"Unexpected end tag (%(name)s) in the table row phase. Ignored.","unexpected-select-in-select":"Unexpected select start tag in the select phase treated as select end tag.","unexpected-input-in-select":"Unexpected input start tag in the select phase.","unexpected-start-tag-in-select":"Unexpected start tag token (%(name)s in the select phase. Ignored.","unexpected-end-tag-in-select":"Unexpected end tag (%(name)s) in the select phase. Ignored.","unexpected-table-element-start-tag-in-select-in-table":"Unexpected table element start tag (%(name)s) in the select in table phase.","unexpected-table-element-end-tag-in-select-in-table":"Unexpected table element end tag (%(name)s) in the select in table phase.","unexpected-char-after-body":"Unexpected non-space characters in the after body phase.","unexpected-start-tag-after-body":"Unexpected start tag token (%(name)s) in the after body phase.","unexpected-end-tag-after-body":"Unexpected end tag token (%(name)s) in the after body phase.","unexpected-char-in-frameset":"Unexpected characters in the frameset phase. Characters ignored.","unexpected-start-tag-in-frameset":"Unexpected start tag token (%(name)s) in the frameset phase. Ignored.","unexpected-frameset-in-frameset-innerhtml":"Unexpected end tag token (frameset) in the frameset phase (innerHTML).","unexpected-end-tag-in-frameset":"Unexpected end tag token (%(name)s) in the frameset phase. Ignored.","unexpected-char-after-frameset":"Unexpected non-space characters in the after frameset phase. Ignored.","unexpected-start-tag-after-frameset":"Unexpected start tag (%(name)s) in the after frameset phase. Ignored.","unexpected-end-tag-after-frameset":"Unexpected end tag (%(name)s) in the after frameset phase. Ignored.","unexpected-end-tag-after-body-innerhtml":"Unexpected end tag after body(innerHtml)","expected-eof-but-got-char":"Unexpected non-space characters. Expected end of file.","expected-eof-but-got-start-tag":"Unexpected start tag (%(name)s). Expected end of file.","expected-eof-but-got-end-tag":"Unexpected end tag (%(name)s). Expected end of file.","eof-in-table":"Unexpected end of file. Expected table content.","eof-in-select":"Unexpected end of file. Expected select content.","eof-in-frameset":"Unexpected end of file. Expected frameset content.","eof-in-script-in-script":"Unexpected end of file. Expected script content.","eof-in-foreign-lands":"Unexpected end of file. Expected foreign content","non-void-element-with-trailing-solidus":"Trailing solidus not allowed on element %(name)s","unexpected-html-element-in-foreign-content":"Element %(name)s not allowed in a non-html context","unexpected-end-tag-before-html":"Unexpected end tag (%(name)s) before html.","undefined-error":"Undefined error (this sucks and should be fixed)"},B.bc,t.B)
B.bd=A.a(s(["altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","clippath","feblend","fecolormatrix","fecomponenttransfer","fecomposite","feconvolvematrix","fediffuselighting","fedisplacementmap","fedistantlight","feflood","fefunca","fefuncb","fefuncg","fefuncr","fegaussianblur","feimage","femerge","femergenode","femorphology","feoffset","fepointlight","fespecularlighting","fespotlight","fetile","feturbulence","foreignobject","glyphref","lineargradient","radialgradient","textpath"]),t.s)
B.bE=new A.r(36,{altglyph:"altGlyph",altglyphdef:"altGlyphDef",altglyphitem:"altGlyphItem",animatecolor:"animateColor",animatemotion:"animateMotion",animatetransform:"animateTransform",clippath:"clipPath",feblend:"feBlend",fecolormatrix:"feColorMatrix",fecomponenttransfer:"feComponentTransfer",fecomposite:"feComposite",feconvolvematrix:"feConvolveMatrix",fediffuselighting:"feDiffuseLighting",fedisplacementmap:"feDisplacementMap",fedistantlight:"feDistantLight",feflood:"feFlood",fefunca:"feFuncA",fefuncb:"feFuncB",fefuncg:"feFuncG",fefuncr:"feFuncR",fegaussianblur:"feGaussianBlur",feimage:"feImage",femerge:"feMerge",femergenode:"feMergeNode",femorphology:"feMorphology",feoffset:"feOffset",fepointlight:"fePointLight",fespecularlighting:"feSpecularLighting",fespotlight:"feSpotLight",fetile:"feTile",feturbulence:"feTurbulence",foreignobject:"foreignObject",glyphref:"glyphRef",lineargradient:"linearGradient",radialgradient:"radialGradient",textpath:"textPath"},B.bd,t.B)
B.bF=new A.bY([0,"\ufffd",13,"\r",128,"\u20ac",129,"\x81",130,"\u201a",131,"\u0192",132,"\u201e",133,"\u2026",134,"\u2020",135,"\u2021",136,"\u02c6",137,"\u2030",138,"\u0160",139,"\u2039",140,"\u0152",141,"\x8d",142,"\u017d",143,"\x8f",144,"\x90",145,"\u2018",146,"\u2019",147,"\u201c",148,"\u201d",149,"\u2022",150,"\u2013",151,"\u2014",152,"\u02dc",153,"\u2122",154,"\u0161",155,"\u203a",156,"\u0153",157,"\x9d",158,"\u017e",159,"\u0178"],A.aI("bY<h,m>"))
B.K=new A.d_("severe")
B.al=new A.d_("warning")
B.ak=new A.d_("info")
B.aj=new A.bY([B.K,"\x1b[31m",B.al,"\x1b[35m",B.ak,"\x1b[32m"],t.ha)
B.c5=new A.bY([B.K,"error",B.al,"warning",B.ak,"info"],t.ha)
B.bi=A.a(s(["xlink:actuate","xlink:arcrole","xlink:href","xlink:role","xlink:show","xlink:title","xlink:type","xml:base","xml:lang","xml:space","xmlns","xmlns:xlink"]),t.s)
B.aK=new A.aw("xlink","actuate","http://www.w3.org/1999/xlink")
B.aN=new A.aw("xlink","arcrole","http://www.w3.org/1999/xlink")
B.aO=new A.aw("xlink","href","http://www.w3.org/1999/xlink")
B.aM=new A.aw("xlink","role","http://www.w3.org/1999/xlink")
B.aL=new A.aw("xlink","show","http://www.w3.org/1999/xlink")
B.aT=new A.aw("xlink","title","http://www.w3.org/1999/xlink")
B.aS=new A.aw("xlink","type","http://www.w3.org/1999/xlink")
B.aR=new A.aw("xml","base","http://www.w3.org/XML/1998/namespace")
B.aP=new A.aw("xml","lang","http://www.w3.org/XML/1998/namespace")
B.aI=new A.aw("xml","space","http://www.w3.org/XML/1998/namespace")
B.aQ=new A.aw(null,"xmlns","http://www.w3.org/2000/xmlns/")
B.aJ=new A.aw("xmlns","xlink","http://www.w3.org/2000/xmlns/")
B.c6=new A.r(12,{"xlink:actuate":B.aK,"xlink:arcrole":B.aN,"xlink:href":B.aO,"xlink:role":B.aM,"xlink:show":B.aL,"xlink:title":B.aT,"xlink:type":B.aS,"xml:base":B.aR,"xml:lang":B.aP,"xml:space":B.aI,xmlns:B.aQ,"xmlns:xlink":B.aJ},B.bi,A.aI("r<m,aw>"))
B.Y=new A.r(0,{},B.p,A.aI("r<m,N>"))
B.X=new A.r(0,{},B.p,A.aI("r<m,D?>"))
B.bl=A.a(s(["attributename","attributetype","basefrequency","baseprofile","calcmode","clippathunits","contentscripttype","contentstyletype","diffuseconstant","edgemode","externalresourcesrequired","filterres","filterunits","glyphref","gradienttransform","gradientunits","kernelmatrix","kernelunitlength","keypoints","keysplines","keytimes","lengthadjust","limitingconeangle","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","numoctaves","pathlength","patterncontentunits","patterntransform","patternunits","pointsatx","pointsaty","pointsatz","preservealpha","preserveaspectratio","primitiveunits","refx","refy","repeatcount","repeatdur","requiredextensions","requiredfeatures","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","surfacescale","systemlanguage","tablevalues","targetx","targety","textlength","viewbox","viewtarget","xchannelselector","ychannelselector","zoomandpan"]),t.s)
B.c7=new A.r(62,{attributename:"attributeName",attributetype:"attributeType",basefrequency:"baseFrequency",baseprofile:"baseProfile",calcmode:"calcMode",clippathunits:"clipPathUnits",contentscripttype:"contentScriptType",contentstyletype:"contentStyleType",diffuseconstant:"diffuseConstant",edgemode:"edgeMode",externalresourcesrequired:"externalResourcesRequired",filterres:"filterRes",filterunits:"filterUnits",glyphref:"glyphRef",gradienttransform:"gradientTransform",gradientunits:"gradientUnits",kernelmatrix:"kernelMatrix",kernelunitlength:"kernelUnitLength",keypoints:"keyPoints",keysplines:"keySplines",keytimes:"keyTimes",lengthadjust:"lengthAdjust",limitingconeangle:"limitingConeAngle",markerheight:"markerHeight",markerunits:"markerUnits",markerwidth:"markerWidth",maskcontentunits:"maskContentUnits",maskunits:"maskUnits",numoctaves:"numOctaves",pathlength:"pathLength",patterncontentunits:"patternContentUnits",patterntransform:"patternTransform",patternunits:"patternUnits",pointsatx:"pointsAtX",pointsaty:"pointsAtY",pointsatz:"pointsAtZ",preservealpha:"preserveAlpha",preserveaspectratio:"preserveAspectRatio",primitiveunits:"primitiveUnits",refx:"refX",refy:"refY",repeatcount:"repeatCount",repeatdur:"repeatDur",requiredextensions:"requiredExtensions",requiredfeatures:"requiredFeatures",specularconstant:"specularConstant",specularexponent:"specularExponent",spreadmethod:"spreadMethod",startoffset:"startOffset",stddeviation:"stdDeviation",stitchtiles:"stitchTiles",surfacescale:"surfaceScale",systemlanguage:"systemLanguage",tablevalues:"tableValues",targetx:"targetX",targety:"targetY",textlength:"textLength",viewbox:"viewBox",viewtarget:"viewTarget",xchannelselector:"xChannelSelector",ychannelselector:"yChannelSelector",zoomandpan:"zoomAndPan"},B.bl,t.B)
B.bt=A.a(s(["li","dt","dd"]),t.s)
B.bs=A.a(s(["li"]),t.s)
B.af=A.a(s(["dt","dd"]),t.s)
B.cJ=new A.r(3,{li:B.bs,dt:B.af,dd:B.af},B.bt,A.aI("r<m,n<m>>"))
B.bA=A.a(s(["437","850","852","855","857","860","861","862","863","865","866","869","ansix341968","ansix341986","arabic","ascii","asmo708","big5","big5hkscs","chinese","cp037","cp1026","cp154","cp367","cp424","cp437","cp500","cp775","cp819","cp850","cp852","cp855","cp857","cp860","cp861","cp862","cp863","cp864","cp865","cp866","cp869","cp936","cpgr","cpis","csascii","csbig5","cseuckr","cseucpkdfmtjapanese","csgb2312","cshproman8","csibm037","csibm1026","csibm424","csibm500","csibm855","csibm857","csibm860","csibm861","csibm863","csibm864","csibm865","csibm866","csibm869","csiso2022jp","csiso2022jp2","csiso2022kr","csiso58gb231280","csisolatin1","csisolatin2","csisolatin3","csisolatin4","csisolatin5","csisolatin6","csisolatinarabic","csisolatincyrillic","csisolatingreek","csisolatinhebrew","cskoi8r","csksc56011987","cspc775baltic","cspc850multilingual","cspc862latinhebrew","cspc8codepage437","cspcp852","csptcp154","csshiftjis","csunicode11utf7","cyrillic","cyrillicasian","ebcdiccpbe","ebcdiccpca","ebcdiccpch","ebcdiccphe","ebcdiccpnl","ebcdiccpus","ebcdiccpwt","ecma114","ecma118","elot928","eucjp","euckr","extendedunixcodepackedformatforjapanese","gb18030","gb2312","gb231280","gbk","greek","greek8","hebrew","hproman8","hzgb2312","ibm037","ibm1026","ibm367","ibm424","ibm437","ibm500","ibm775","ibm819","ibm850","ibm852","ibm855","ibm857","ibm860","ibm861","ibm862","ibm863","ibm864","ibm865","ibm866","ibm869","iso2022jp","iso2022jp2","iso2022kr","iso646irv1991","iso646us","iso88591","iso885910","iso8859101992","iso885911987","iso885913","iso885914","iso8859141998","iso885915","iso885916","iso8859162001","iso88592","iso885921987","iso88593","iso885931988","iso88594","iso885941988","iso88595","iso885951988","iso88596","iso885961987","iso88597","iso885971987","iso88598","iso885981988","iso88599","iso885991989","isoceltic","isoir100","isoir101","isoir109","isoir110","isoir126","isoir127","isoir138","isoir144","isoir148","isoir149","isoir157","isoir199","isoir226","isoir58","isoir6","koi8r","koi8u","korean","ksc5601","ksc56011987","ksc56011989","l1","l10","l2","l3","l4","l5","l6","l8","latin1","latin10","latin2","latin3","latin4","latin5","latin6","latin8","latin9","ms936","mskanji","pt154","ptcp154","r8","roman8","shiftjis","tis620","unicode11utf7","us","usascii","utf16","utf16be","utf16le","utf8","windows1250","windows1251","windows1252","windows1253","windows1254","windows1255","windows1256","windows1257","windows1258","windows936","x-x-big5"]),t.s)
B.cK=new A.r(227,{"437":"cp437","850":"cp850","852":"cp852","855":"cp855","857":"cp857","860":"cp860","861":"cp861","862":"cp862","863":"cp863","865":"cp865","866":"cp866","869":"cp869",ansix341968:"ascii",ansix341986:"ascii",arabic:"iso8859-6",ascii:"ascii",asmo708:"iso8859-6",big5:"big5",big5hkscs:"big5hkscs",chinese:"gbk",cp037:"cp037",cp1026:"cp1026",cp154:"ptcp154",cp367:"ascii",cp424:"cp424",cp437:"cp437",cp500:"cp500",cp775:"cp775",cp819:"windows-1252",cp850:"cp850",cp852:"cp852",cp855:"cp855",cp857:"cp857",cp860:"cp860",cp861:"cp861",cp862:"cp862",cp863:"cp863",cp864:"cp864",cp865:"cp865",cp866:"cp866",cp869:"cp869",cp936:"gbk",cpgr:"cp869",cpis:"cp861",csascii:"ascii",csbig5:"big5",cseuckr:"cp949",cseucpkdfmtjapanese:"euc_jp",csgb2312:"gbk",cshproman8:"hp-roman8",csibm037:"cp037",csibm1026:"cp1026",csibm424:"cp424",csibm500:"cp500",csibm855:"cp855",csibm857:"cp857",csibm860:"cp860",csibm861:"cp861",csibm863:"cp863",csibm864:"cp864",csibm865:"cp865",csibm866:"cp866",csibm869:"cp869",csiso2022jp:"iso2022_jp",csiso2022jp2:"iso2022_jp_2",csiso2022kr:"iso2022_kr",csiso58gb231280:"gbk",csisolatin1:"windows-1252",csisolatin2:"iso8859-2",csisolatin3:"iso8859-3",csisolatin4:"iso8859-4",csisolatin5:"windows-1254",csisolatin6:"iso8859-10",csisolatinarabic:"iso8859-6",csisolatincyrillic:"iso8859-5",csisolatingreek:"iso8859-7",csisolatinhebrew:"iso8859-8",cskoi8r:"koi8-r",csksc56011987:"cp949",cspc775baltic:"cp775",cspc850multilingual:"cp850",cspc862latinhebrew:"cp862",cspc8codepage437:"cp437",cspcp852:"cp852",csptcp154:"ptcp154",csshiftjis:"shift_jis",csunicode11utf7:"utf-7",cyrillic:"iso8859-5",cyrillicasian:"ptcp154",ebcdiccpbe:"cp500",ebcdiccpca:"cp037",ebcdiccpch:"cp500",ebcdiccphe:"cp424",ebcdiccpnl:"cp037",ebcdiccpus:"cp037",ebcdiccpwt:"cp037",ecma114:"iso8859-6",ecma118:"iso8859-7",elot928:"iso8859-7",eucjp:"euc_jp",euckr:"cp949",extendedunixcodepackedformatforjapanese:"euc_jp",gb18030:"gb18030",gb2312:"gbk",gb231280:"gbk",gbk:"gbk",greek:"iso8859-7",greek8:"iso8859-7",hebrew:"iso8859-8",hproman8:"hp-roman8",hzgb2312:"hz",ibm037:"cp037",ibm1026:"cp1026",ibm367:"ascii",ibm424:"cp424",ibm437:"cp437",ibm500:"cp500",ibm775:"cp775",ibm819:"windows-1252",ibm850:"cp850",ibm852:"cp852",ibm855:"cp855",ibm857:"cp857",ibm860:"cp860",ibm861:"cp861",ibm862:"cp862",ibm863:"cp863",ibm864:"cp864",ibm865:"cp865",ibm866:"cp866",ibm869:"cp869",iso2022jp:"iso2022_jp",iso2022jp2:"iso2022_jp_2",iso2022kr:"iso2022_kr",iso646irv1991:"ascii",iso646us:"ascii",iso88591:"windows-1252",iso885910:"iso8859-10",iso8859101992:"iso8859-10",iso885911987:"windows-1252",iso885913:"iso8859-13",iso885914:"iso8859-14",iso8859141998:"iso8859-14",iso885915:"iso8859-15",iso885916:"iso8859-16",iso8859162001:"iso8859-16",iso88592:"iso8859-2",iso885921987:"iso8859-2",iso88593:"iso8859-3",iso885931988:"iso8859-3",iso88594:"iso8859-4",iso885941988:"iso8859-4",iso88595:"iso8859-5",iso885951988:"iso8859-5",iso88596:"iso8859-6",iso885961987:"iso8859-6",iso88597:"iso8859-7",iso885971987:"iso8859-7",iso88598:"iso8859-8",iso885981988:"iso8859-8",iso88599:"windows-1254",iso885991989:"windows-1254",isoceltic:"iso8859-14",isoir100:"windows-1252",isoir101:"iso8859-2",isoir109:"iso8859-3",isoir110:"iso8859-4",isoir126:"iso8859-7",isoir127:"iso8859-6",isoir138:"iso8859-8",isoir144:"iso8859-5",isoir148:"windows-1254",isoir149:"cp949",isoir157:"iso8859-10",isoir199:"iso8859-14",isoir226:"iso8859-16",isoir58:"gbk",isoir6:"ascii",koi8r:"koi8-r",koi8u:"koi8-u",korean:"cp949",ksc5601:"cp949",ksc56011987:"cp949",ksc56011989:"cp949",l1:"windows-1252",l10:"iso8859-16",l2:"iso8859-2",l3:"iso8859-3",l4:"iso8859-4",l5:"windows-1254",l6:"iso8859-10",l8:"iso8859-14",latin1:"windows-1252",latin10:"iso8859-16",latin2:"iso8859-2",latin3:"iso8859-3",latin4:"iso8859-4",latin5:"windows-1254",latin6:"iso8859-10",latin8:"iso8859-14",latin9:"iso8859-15",ms936:"gbk",mskanji:"shift_jis",pt154:"ptcp154",ptcp154:"ptcp154",r8:"hp-roman8",roman8:"hp-roman8",shiftjis:"shift_jis",tis620:"cp874",unicode11utf7:"utf-7",us:"ascii",usascii:"ascii",utf16:"utf-16",utf16be:"utf-16-be",utf16le:"utf-16-le",utf8:"utf-8",windows1250:"cp1250",windows1251:"cp1251",windows1252:"cp1252",windows1253:"cp1253",windows1254:"cp1254",windows1255:"cp1255",windows1256:"cp1256",windows1257:"cp1257",windows1258:"cp1258",windows936:"gbk","x-x-big5":"big5"},B.bA,t.B)
B.bB=A.a(s(["after","before","first-letter","first-line"]),t.s)
B.cL=new A.r(4,{after:null,before:null,"first-letter":null,"first-line":null},B.bB,A.aI("r<m,ak>"))
B.dV=new A.eP(B.cL,A.aI("eP<m>"))
B.dW=new A.hz("Start")
B.dX=new A.hz("End")
B.dY=A.tF("D")
B.dZ=new A.hH(!1)
B.d=new A.f(0,0,0)
B.l=new A.f(0,0,1)
B.t=new A.f(0,1,0)
B.j=new A.f(1,0,0)
B.aD=new A.f(1,1,0)
B.aE=new A.f(1,1,1)
B.aF=new A.f(1,-1,0)
B.a2=new A.f(-1,1,0)
B.aG=new A.f(-1,-1,0)
B.e0=new A.dh(null,2)})();(function staticFields(){$.l3=null
$.nv=null
$.nb=null
$.na=null
$.oM=null
$.oz=null
$.oY=null
$.ly=null
$.lI=null
$.mL=null
$.dm=null
$.f_=null
$.f0=null
$.mD=!1
$.a6=B.k
$.b9=A.a([],A.aI("A<D>"))
$.eW=A.qO("messages")
$.mg=A.bd(t.N,A.aI("c3"))
$.bN=A.bd(t.N,A.aI("aR<m,m>"))
$.ih=A.bd(t.S,A.aI("aR<h,h>"))
$.ok=null
$.ln=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"tM","p3",()=>A.te("_$dart_dartClosure"))
s($,"ut","n_",()=>B.k.j7(new A.lO(),A.aI("bb<ak>")))
s($,"u1","p5",()=>A.bR(A.km({
toString:function(){return"$receiver$"}})))
s($,"u2","p6",()=>A.bR(A.km({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"u3","p7",()=>A.bR(A.km(null)))
s($,"u4","p8",()=>A.bR(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"u7","pb",()=>A.bR(A.km(void 0)))
s($,"u8","pc",()=>A.bR(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"u6","pa",()=>A.bR(A.nM(null)))
s($,"u5","p9",()=>A.bR(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"ua","pe",()=>A.bR(A.nM(void 0)))
s($,"u9","pd",()=>A.bR(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"ud","mX",()=>A.qK())
s($,"ub","pf",()=>new A.ks().$0())
s($,"uc","pg",()=>new A.kr().$0())
s($,"ue","ph",()=>A.q5(A.mB(A.a([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"uf","mY",()=>typeof process!="undefined"&&Object.prototype.toString.call(process)=="[object process]"&&process.platform=="win32")
s($,"uo","lV",()=>A.mR(B.dY))
s($,"up","pi",()=>A.rr())
r($,"us","pj",()=>new A.lA().$0())
r($,"tO","dr",()=>{var q=new A.iT()
q.kW()
return q})
s($,"uq","mZ",()=>new A.iL(A.aI("cs").a($.mW())))
s($,"tY","p4",()=>new A.hf(A.au("/"),A.au("[^/]$"),A.au("^/")))
s($,"u_","io",()=>new A.hK(A.au("[/\\\\]"),A.au("[^/\\\\]$"),A.au("^(\\\\\\\\[^\\\\]+\\\\[^\\\\/]+|[a-zA-Z]:[/\\\\])"),A.au("^[/\\\\](?![/\\\\])")))
s($,"tZ","f7",()=>new A.hF(A.au("/"),A.au("(^[a-zA-Z][-+.a-zA-Z\\d]*://|[^/])$"),A.au("[a-zA-Z][-+.a-zA-Z\\d]*://[^/]*"),A.au("^/")))
s($,"tX","mW",()=>A.qx())})();(function nativeSupport(){!function(){var s=function(a){var m={}
m[a]=1
return Object.keys(hunkHelpers.convertToFastObject(m))[0]}
v.getIsolateTag=function(a){return s("___dart_"+a+v.isolateTag)}
var r="___dart_isolate_tags_"
var q=Object[r]||(Object[r]=Object.create(null))
var p="_ZxYxX"
for(var o=0;;o++){var n=s(p+"_"+o+"_")
if(!(n in q)){q[n]=1
v.isolateTag=n
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({CanvasGradient:J.b3,DOMError:J.b3,MediaError:J.b3,Navigator:J.b3,NavigatorConcurrentHardware:J.b3,NavigatorUserMediaError:J.b3,OverconstrainedError:J.b3,PositionError:J.b3,GeolocationPositionError:J.b3,ArrayBufferView:A.h1,Int8Array:A.h0,Uint32Array:A.e7,Uint8Array:A.cz,HTMLAudioElement:A.u,HTMLBRElement:A.u,HTMLBaseElement:A.u,HTMLBodyElement:A.u,HTMLButtonElement:A.u,HTMLContentElement:A.u,HTMLDListElement:A.u,HTMLDataElement:A.u,HTMLDataListElement:A.u,HTMLDetailsElement:A.u,HTMLDialogElement:A.u,HTMLDivElement:A.u,HTMLEmbedElement:A.u,HTMLFieldSetElement:A.u,HTMLHRElement:A.u,HTMLHeadElement:A.u,HTMLHeadingElement:A.u,HTMLHtmlElement:A.u,HTMLIFrameElement:A.u,HTMLImageElement:A.u,HTMLInputElement:A.u,HTMLLIElement:A.u,HTMLLabelElement:A.u,HTMLLegendElement:A.u,HTMLLinkElement:A.u,HTMLMapElement:A.u,HTMLMediaElement:A.u,HTMLMenuElement:A.u,HTMLMetaElement:A.u,HTMLMeterElement:A.u,HTMLModElement:A.u,HTMLOListElement:A.u,HTMLObjectElement:A.u,HTMLOptGroupElement:A.u,HTMLOptionElement:A.u,HTMLOutputElement:A.u,HTMLParagraphElement:A.u,HTMLParamElement:A.u,HTMLPictureElement:A.u,HTMLPreElement:A.u,HTMLProgressElement:A.u,HTMLQuoteElement:A.u,HTMLScriptElement:A.u,HTMLShadowElement:A.u,HTMLSlotElement:A.u,HTMLSourceElement:A.u,HTMLSpanElement:A.u,HTMLStyleElement:A.u,HTMLTableCaptionElement:A.u,HTMLTableCellElement:A.u,HTMLTableDataCellElement:A.u,HTMLTableHeaderCellElement:A.u,HTMLTableColElement:A.u,HTMLTableElement:A.u,HTMLTableRowElement:A.u,HTMLTableSectionElement:A.u,HTMLTemplateElement:A.u,HTMLTextAreaElement:A.u,HTMLTimeElement:A.u,HTMLTitleElement:A.u,HTMLTrackElement:A.u,HTMLUListElement:A.u,HTMLUnknownElement:A.u,HTMLVideoElement:A.u,HTMLDirectoryElement:A.u,HTMLFontElement:A.u,HTMLFrameElement:A.u,HTMLFrameSetElement:A.u,HTMLMarqueeElement:A.u,HTMLElement:A.u,HTMLAnchorElement:A.fh,HTMLAreaElement:A.fj,HTMLCanvasElement:A.cm,CanvasRenderingContext2D:A.dA,CDATASection:A.bz,CharacterData:A.bz,Comment:A.bz,ProcessingInstruction:A.bz,Text:A.bz,DOMException:A.iO,DOMRectReadOnly:A.dE,MathMLElement:A.p,SVGAElement:A.p,SVGAnimateElement:A.p,SVGAnimateMotionElement:A.p,SVGAnimateTransformElement:A.p,SVGAnimationElement:A.p,SVGCircleElement:A.p,SVGClipPathElement:A.p,SVGDefsElement:A.p,SVGDescElement:A.p,SVGDiscardElement:A.p,SVGEllipseElement:A.p,SVGFEBlendElement:A.p,SVGFEColorMatrixElement:A.p,SVGFEComponentTransferElement:A.p,SVGFECompositeElement:A.p,SVGFEConvolveMatrixElement:A.p,SVGFEDiffuseLightingElement:A.p,SVGFEDisplacementMapElement:A.p,SVGFEDistantLightElement:A.p,SVGFEFloodElement:A.p,SVGFEFuncAElement:A.p,SVGFEFuncBElement:A.p,SVGFEFuncGElement:A.p,SVGFEFuncRElement:A.p,SVGFEGaussianBlurElement:A.p,SVGFEImageElement:A.p,SVGFEMergeElement:A.p,SVGFEMergeNodeElement:A.p,SVGFEMorphologyElement:A.p,SVGFEOffsetElement:A.p,SVGFEPointLightElement:A.p,SVGFESpecularLightingElement:A.p,SVGFESpotLightElement:A.p,SVGFETileElement:A.p,SVGFETurbulenceElement:A.p,SVGFilterElement:A.p,SVGForeignObjectElement:A.p,SVGGElement:A.p,SVGGeometryElement:A.p,SVGGraphicsElement:A.p,SVGImageElement:A.p,SVGLineElement:A.p,SVGLinearGradientElement:A.p,SVGMarkerElement:A.p,SVGMaskElement:A.p,SVGMetadataElement:A.p,SVGPathElement:A.p,SVGPatternElement:A.p,SVGPolygonElement:A.p,SVGPolylineElement:A.p,SVGRadialGradientElement:A.p,SVGRectElement:A.p,SVGScriptElement:A.p,SVGSetElement:A.p,SVGStopElement:A.p,SVGStyleElement:A.p,SVGElement:A.p,SVGSVGElement:A.p,SVGSwitchElement:A.p,SVGSymbolElement:A.p,SVGTSpanElement:A.p,SVGTextContentElement:A.p,SVGTextElement:A.p,SVGTextPathElement:A.p,SVGTextPositioningElement:A.p,SVGTitleElement:A.p,SVGUseElement:A.p,SVGViewElement:A.p,SVGGradientElement:A.p,SVGComponentTransferFunctionElement:A.p,SVGFEDropShadowElement:A.p,SVGMPathElement:A.p,Element:A.p,AbortPaymentEvent:A.q,AnimationEvent:A.q,AnimationPlaybackEvent:A.q,ApplicationCacheErrorEvent:A.q,BackgroundFetchClickEvent:A.q,BackgroundFetchEvent:A.q,BackgroundFetchFailEvent:A.q,BackgroundFetchedEvent:A.q,BeforeInstallPromptEvent:A.q,BeforeUnloadEvent:A.q,BlobEvent:A.q,CanMakePaymentEvent:A.q,ClipboardEvent:A.q,CloseEvent:A.q,CustomEvent:A.q,DeviceMotionEvent:A.q,DeviceOrientationEvent:A.q,ErrorEvent:A.q,ExtendableEvent:A.q,ExtendableMessageEvent:A.q,FetchEvent:A.q,FontFaceSetLoadEvent:A.q,ForeignFetchEvent:A.q,GamepadEvent:A.q,HashChangeEvent:A.q,InstallEvent:A.q,MediaEncryptedEvent:A.q,MediaKeyMessageEvent:A.q,MediaQueryListEvent:A.q,MediaStreamEvent:A.q,MediaStreamTrackEvent:A.q,MessageEvent:A.q,MIDIConnectionEvent:A.q,MIDIMessageEvent:A.q,MutationEvent:A.q,NotificationEvent:A.q,PageTransitionEvent:A.q,PaymentRequestEvent:A.q,PaymentRequestUpdateEvent:A.q,PopStateEvent:A.q,PresentationConnectionAvailableEvent:A.q,PresentationConnectionCloseEvent:A.q,ProgressEvent:A.q,PromiseRejectionEvent:A.q,PushEvent:A.q,RTCDataChannelEvent:A.q,RTCDTMFToneChangeEvent:A.q,RTCPeerConnectionIceEvent:A.q,RTCTrackEvent:A.q,SecurityPolicyViolationEvent:A.q,SensorErrorEvent:A.q,SpeechRecognitionError:A.q,SpeechRecognitionEvent:A.q,SpeechSynthesisEvent:A.q,StorageEvent:A.q,SyncEvent:A.q,TrackEvent:A.q,TransitionEvent:A.q,WebKitTransitionEvent:A.q,VRDeviceEvent:A.q,VRDisplayEvent:A.q,VRSessionEvent:A.q,MojoInterfaceRequestEvent:A.q,ResourceProgressEvent:A.q,USBConnectionEvent:A.q,IDBVersionChangeEvent:A.q,AudioProcessingEvent:A.q,OfflineAudioCompletionEvent:A.q,WebGLContextEvent:A.q,Event:A.q,InputEvent:A.q,SubmitEvent:A.q,EventTarget:A.aN,HTMLFormElement:A.fJ,MouseEvent:A.b4,DragEvent:A.b4,PointerEvent:A.b4,WheelEvent:A.b4,Document:A.aZ,DocumentFragment:A.aZ,HTMLDocument:A.aZ,ShadowRoot:A.aZ,XMLDocument:A.aZ,Attr:A.aZ,DocumentType:A.aZ,Node:A.aZ,Path2D:A.hb,HTMLSelectElement:A.hm,CompositionEvent:A.bv,FocusEvent:A.bv,KeyboardEvent:A.bv,TextEvent:A.bv,TouchEvent:A.bv,UIEvent:A.bv,Window:A.dd,DOMWindow:A.dd,ClientRect:A.ex,DOMRect:A.ex})
hunkHelpers.setOrUpdateLeafTags({CanvasGradient:true,DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,GeolocationPositionError:true,ArrayBufferView:false,Int8Array:true,Uint32Array:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,DOMException:true,DOMRectReadOnly:false,MathMLElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,EventTarget:false,HTMLFormElement:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,Path2D:true,HTMLSelectElement:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,Window:true,DOMWindow:true,ClientRect:true,DOMRect:true})
A.d0.$nativeSuperclassTag="ArrayBufferView"
A.eF.$nativeSuperclassTag="ArrayBufferView"
A.eG.$nativeSuperclassTag="ArrayBufferView"
A.e6.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=A.tq
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=trig.dart.js.map
