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
a[c]=function(){a[c]=function(){A.tY(b)}
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
return a?function(c){if(s===null)s=A.mX(b)
return new s(c,this)}:function(){if(s===null)s=A.mX(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.mX(a).prototype
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
a(hunkHelpers,v,w,$)}var A={mj:function mj(){},
np(a,b,c){if(b.h("N<0>").b(a))return new A.eG(a,b.h("@<0>").X(c).h("eG<1,2>"))
return new A.cn(a,b.h("@<0>").X(c).h("cn<1,2>"))},
qf(a){return new A.e9("Field '"+a+"' has been assigned during initialization.")},
ml(a){return new A.e9("Field '"+a+"' has not been initialized.")},
lO(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
c7(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
mv(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
nU(a,b,c){return A.mv(A.c7(A.c7(c,a),b))},
fd(a,b,c){return a},
bu(a,b,c,d){A.b5(b,"start")
if(c!=null){A.b5(c,"end")
if(b>c)A.L(A.Z(b,0,c,"start",null))}return new A.aI(a,b,c,d.h("aI<0>"))},
jK(a,b,c,d){if(t.gt.b(a))return new A.dO(a,b,c.h("@<0>").X(d).h("dO<1,2>"))
return new A.cy(a,b,c.h("@<0>").X(d).h("cy<1,2>"))},
nR(a,b,c){var s="count"
if(t.gt.b(a)){A.iB(b,s,t.S)
A.b5(b,s)
return new A.cT(a,b,c.h("cT<0>"))}A.iB(b,s,t.S)
A.b5(b,s)
return new A.bO(a,b,c.h("bO<0>"))},
am(){return new A.dc("No element")},
qa(){return new A.dc("Too few elements")},
nS(a,b,c){A.hw(a,0,J.W(a)-1,b,c)},
hw(a,b,c,d,e){if(c-b<=32)A.qM(a,b,c,d,e)
else A.qL(a,b,c,d,e)},
qM(a,b,c,d,e){var s,r,q,p,o,n
for(s=b+1,r=J.X(a);s<=c;++s){q=r.k(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.k(a,p-1),q)
if(typeof o!=="number")return o.bu()
o=o>0}else o=!1
if(!o)break
n=p-1
r.u(a,p,r.k(a,n))
p=n}r.u(a,p,q)}},
qL(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j=B.d.aT(a5-a4+1,6),i=a4+j,h=a5-j,g=B.d.aT(a4+a5,2),f=g-j,e=g+j,d=J.X(a3),c=d.k(a3,i),b=d.k(a3,f),a=d.k(a3,g),a0=d.k(a3,e),a1=d.k(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.bu()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.bu()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.bu()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.bu()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.bu()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.bu()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.bu()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.bu()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.bu()
if(a2>0){s=a1
a1=a0
a0=s}d.u(a3,i,c)
d.u(a3,g,a)
d.u(a3,h,a1)
d.u(a3,f,d.k(a3,a4))
d.u(a3,e,d.k(a3,a5))
r=a4+1
q=a5-1
if(J.T(a6.$2(b,a0),0)){for(p=r;p<=q;++p){o=d.k(a3,p)
n=a6.$2(o,b)
if(n===0)continue
if(n<0){if(p!==r){d.u(a3,p,d.k(a3,r))
d.u(a3,r,o)}++r}else for(;!0;){n=a6.$2(d.k(a3,q),b)
if(n>0){--q
continue}else{m=q-1
if(n<0){d.u(a3,p,d.k(a3,r))
l=r+1
d.u(a3,r,d.k(a3,q))
d.u(a3,q,o)
q=m
r=l
break}else{d.u(a3,p,d.k(a3,q))
d.u(a3,q,o)
q=m
break}}}}k=!0}else{for(p=r;p<=q;++p){o=d.k(a3,p)
if(a6.$2(o,b)<0){if(p!==r){d.u(a3,p,d.k(a3,r))
d.u(a3,r,o)}++r}else if(a6.$2(o,a0)>0)for(;!0;)if(a6.$2(d.k(a3,q),a0)>0){--q
if(q<p)break
continue}else{m=q-1
if(a6.$2(d.k(a3,q),b)<0){d.u(a3,p,d.k(a3,r))
l=r+1
d.u(a3,r,d.k(a3,q))
d.u(a3,q,o)
r=l}else{d.u(a3,p,d.k(a3,q))
d.u(a3,q,o)}q=m
break}}k=!1}a2=r-1
d.u(a3,a4,d.k(a3,a2))
d.u(a3,a2,b)
a2=q+1
d.u(a3,a5,d.k(a3,a2))
d.u(a3,a2,a0)
A.hw(a3,a4,r-2,a6,a7)
A.hw(a3,q+2,a5,a6,a7)
if(k)return
if(r<i&&q>h){for(;J.T(a6.$2(d.k(a3,r),b),0);)++r
for(;J.T(a6.$2(d.k(a3,q),a0),0);)--q
for(p=r;p<=q;++p){o=d.k(a3,p)
if(a6.$2(o,b)===0){if(p!==r){d.u(a3,p,d.k(a3,r))
d.u(a3,r,o)}++r}else if(a6.$2(o,a0)===0)for(;!0;)if(a6.$2(d.k(a3,q),a0)===0){--q
if(q<p)break
continue}else{m=q-1
if(a6.$2(d.k(a3,q),b)<0){d.u(a3,p,d.k(a3,r))
l=r+1
d.u(a3,r,d.k(a3,q))
d.u(a3,q,o)
r=l}else{d.u(a3,p,d.k(a3,q))
d.u(a3,q,o)}q=m
break}}A.hw(a3,r,q,a6,a7)}else A.hw(a3,r,q,a6,a7)},
cb:function cb(){},
dG:function dG(a,b){this.a=a
this.$ti=b},
cn:function cn(a,b){this.a=a
this.$ti=b},
eG:function eG(a,b){this.a=a
this.$ti=b},
eD:function eD(){},
kV:function kV(a,b){this.a=a
this.b=b},
aN:function aN(a,b){this.a=a
this.$ti=b},
e9:function e9(a){this.a=a},
a8:function a8(a){this.a=a},
lZ:function lZ(){},
kl:function kl(){},
N:function N(){},
B:function B(){},
aI:function aI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
K:function K(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cy:function cy(a,b,c){this.a=a
this.b=b
this.$ti=c},
dO:function dO(a,b,c){this.a=a
this.b=b
this.$ti=c},
cz:function cz(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
H:function H(a,b,c){this.a=a
this.b=b
this.$ti=c},
ai:function ai(a,b,c){this.a=a
this.b=b
this.$ti=c},
cF:function cF(a,b,c){this.a=a
this.b=b
this.$ti=c},
dT:function dT(a,b,c){this.a=a
this.b=b
this.$ti=c},
dU:function dU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bO:function bO(a,b,c){this.a=a
this.b=b
this.$ti=c},
cT:function cT(a,b,c){this.a=a
this.b=b
this.$ti=c},
eq:function eq(a,b,c){this.a=a
this.b=b
this.$ti=c},
dQ:function dQ(a){this.$ti=a},
dR:function dR(a){this.$ti=a},
an:function an(a,b){this.a=a
this.$ti=b},
cG:function cG(a,b){this.a=a
this.$ti=b},
bo:function bo(){},
bG:function bG(){},
dg:function dg(){},
V:function V(a,b){this.a=a
this.$ti=b},
f0:function f0(){},
q3(a){if(typeof a=="number")return B.h.ga0(a)
if(t.f5.b(a))return A.bM(a)
return A.n4(a)},
q4(a){return new A.j5(a)},
pe(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
tI(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.dX.b(a)},
k(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.bx(a)
return s},
bM(a){var s,r=$.nI
if(r==null)r=$.nI=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
nJ(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(m==null)return n
if(3>=m.length)return A.c(m,3)
s=m[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(m[2]!=null)return parseInt(a,16)
return n}if(b<2||b>36)throw A.d(A.Z(b,2,36,"radix",n))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=m[1]
for(p=q.length,o=0;o<p;++o)if((B.b.E(q,o)|32)>r)return n}return parseInt(a,b)},
qv(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.b.e6(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
k9(a){return A.qt(a)},
qt(a){var s,r,q,p
if(a instanceof A.E)return A.aX(A.aJ(a),null)
s=J.bi(a)
if(s===B.b1||s===B.b3||t.cx.b(a)){r=B.a2(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.aX(A.aJ(a),null)},
qu(){if(!!self.location)return self.location.href
return null},
nH(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
qw(a){var s,r,q,p=A.a([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.e)(a),++r){q=a[r]
if(!A.ly(q))throw A.d(A.fc(q))
if(q<=65535)B.a.n(p,q)
else if(q<=1114111){B.a.n(p,55296+(B.d.cQ(q-65536,10)&1023))
B.a.n(p,56320+(q&1023))}else throw A.d(A.fc(q))}return A.nH(p)},
nK(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!A.ly(q))throw A.d(A.fc(q))
if(q<0)throw A.d(A.fc(q))
if(q>65535)return A.qw(a)}return A.nH(a)},
qx(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
b4(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.d.cQ(s,10)|55296)>>>0,s&1023|56320)}}throw A.d(A.Z(a,0,1114111,null,null))},
bw(a){throw A.d(A.fc(a))},
c(a,b){if(a==null)J.W(a)
throw A.d(A.cf(a,b))},
cf(a,b){var s,r="index"
if(!A.ly(b))return new A.by(!0,b,r,null)
s=A.a4(J.W(a))
if(b<0||b>=s)return A.h_(b,a,r,null,s)
return A.ka(b,r)},
tu(a,b,c){if(a<0||a>c)return A.Z(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.Z(b,a,c,"end",null)
return new A.by(!0,b,"end",null)},
fc(a){return new A.by(!0,a,null,null)},
d(a){var s,r
if(a==null)a=new A.hc()
s=new Error()
s.dartException=a
r=A.tZ
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
tZ(){return J.bx(this.dartException)},
L(a){throw A.d(a)},
e(a){throw A.d(A.as(a))},
bR(a){var s,r,q,p,o,n
a=A.n5(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.a([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.kv(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
kw(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
o_(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
mk(a,b){var s=b==null,r=s?null:b.method
return new A.h2(a,r,s?null:b.receiver)},
bk(a){var s
if(a==null)return new A.hd(a)
if(a instanceof A.dS){s=a.a
return A.ci(a,s==null?t.K.a(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.ci(a,a.dartException)
return A.th(a)},
ci(a,b){if(t.fz.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
th(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.d.cQ(r,16)&8191)===10)switch(q){case 438:return A.ci(a,A.mk(A.k(s)+" (Error "+q+")",e))
case 445:case 5007:p=A.k(s)
return A.ci(a,new A.eh(p+" (Error "+q+")",e))}}if(a instanceof TypeError){o=$.pi()
n=$.pj()
m=$.pk()
l=$.pl()
k=$.po()
j=$.pp()
i=$.pn()
$.pm()
h=$.pr()
g=$.pq()
f=o.bm(s)
if(f!=null)return A.ci(a,A.mk(A.aq(s),f))
else{f=n.bm(s)
if(f!=null){f.method="call"
return A.ci(a,A.mk(A.aq(s),f))}else{f=m.bm(s)
if(f==null){f=l.bm(s)
if(f==null){f=k.bm(s)
if(f==null){f=j.bm(s)
if(f==null){f=i.bm(s)
if(f==null){f=l.bm(s)
if(f==null){f=h.bm(s)
if(f==null){f=g.bm(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p){A.aq(s)
return A.ci(a,new A.eh(s,f==null?e:f.method))}}}return A.ci(a,new A.hK(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.es()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return A.ci(a,new A.by(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.es()
return a},
cg(a){var s
if(a instanceof A.dS)return a.b
if(a==null)return new A.eQ(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new A.eQ(a)},
n4(a){if(a==null||typeof a!="object")return J.aE(a)
else return A.bM(a)},
oU(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.u(0,a[s],a[r])}return b},
tG(a,b,c,d,e,f){t.gY.a(a)
switch(A.a4(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(new A.i7("Unsupported number of arguments for wrapped closure"))},
dt(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.tG)
a.$identity=s
return s},
pV(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.hB().constructor.prototype):Object.create(new A.cO(null,null).constructor.prototype)
s.$initialize=s.constructor
if(h)r=function static_tear_off(){this.$initialize()}
else r=function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.nq(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.pR(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.nq(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
pR(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.pM)}throw A.d("Error in functionType of tearoff")},
pS(a,b,c,d){var s=A.no
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
nq(a,b,c,d){var s,r
if(c)return A.pU(a,b,d)
s=b.length
r=A.pS(s,d,a,b)
return r},
pT(a,b,c,d){var s=A.no,r=A.pN
switch(b?-1:a){case 0:throw A.d(new A.ht("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
pU(a,b,c){var s,r
if($.nm==null)$.nm=A.nl("interceptor")
if($.nn==null)$.nn=A.nl("receiver")
s=b.length
r=A.pT(s,c,a,b)
return r},
mX(a){return A.pV(a)},
pM(a,b){return A.ll(v.typeUniverse,A.aJ(a.a),b)},
no(a){return a.a},
pN(a){return a.b},
nl(a){var s,r,q,p=new A.cO("receiver","interceptor"),o=J.jB(Object.getOwnPropertyNames(p),t.X)
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw A.d(A.a7("Field name "+a+" not found.",null))},
au(a){if(a==null)A.ti("boolean expression must not be null")
return a},
ti(a){throw A.d(new A.hU(a))},
tY(a){throw A.d(new A.fJ(a))},
tz(a){return v.getIsolateTag(a)},
nB(a,b,c){var s=new A.cw(a,b,c.h("cw<0>"))
s.c=a.e
return s},
uM(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
tK(a){var s,r,q,p,o,n=A.aq($.oZ.$1(a)),m=$.lI[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.lS[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.ip($.oN.$2(a,n))
if(q!=null){m=$.lI[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.lS[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.lY(s)
$.lI[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.lS[n]=s
return s}if(p==="-"){o=A.lY(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.p9(a,s)
if(p==="*")throw A.d(A.hJ(n))
if(v.leafTags[n]===true){o=A.lY(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.p9(a,s)},
p9(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.n3(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
lY(a){return J.n3(a,!1,null,!!a.$icY)},
tM(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.lY(s)
else return J.n3(s,c,null,null)},
tD(){if(!0===$.n_)return
$.n_=!0
A.tE()},
tE(){var s,r,q,p,o,n,m,l
$.lI=Object.create(null)
$.lS=Object.create(null)
A.tC()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.pa.$1(o)
if(n!=null){m=A.tM(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
tC(){var s,r,q,p,o,n,m=B.aU()
m=A.ds(B.aV,A.ds(B.aW,A.ds(B.a3,A.ds(B.a3,A.ds(B.aX,A.ds(B.aY,A.ds(B.aZ(B.a2),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.oZ=new A.lP(p)
$.oN=new A.lQ(o)
$.pa=new A.lR(n)},
ds(a,b){return a(b)||b},
mi(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw A.d(A.aA("Illegal RegExp pattern ("+String(n)+")",a,null))},
cj(a,b,c){var s
if(typeof b=="string")return a.indexOf(b,c)>=0
else if(b instanceof A.cu){s=B.b.aq(a,c)
return b.b.test(s)}else{s=J.m9(b,B.b.aq(a,c))
return!s.gan(s)}},
oT(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
n5(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
bj(a,b,c){var s
if(typeof b=="string")return A.tV(a,b,c)
if(b instanceof A.cu){s=b.ghG()
s.lastIndex=0
return a.replace(s,A.oT(c))}return A.tU(a,b,c)},
tU(a,b,c){var s,r,q,p
for(s=J.m9(b,a),s=s.gI(s),r=0,q="";s.q();){p=s.gC()
q=q+a.substring(r,p.gS(p))+c
r=p.gU()}s=q+a.substring(r)
return s.charCodeAt(0)==0?s:s},
tV(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
r=""+c
for(q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.n5(b),"g"),A.oT(c))},
tW(a,b,c,d){var s=a.indexOf(b,d)
if(s<0)return a
return A.pd(a,s,s+b.length,c)},
pd(a,b,c,d){return a.substring(0,b)+d+a.substring(c)},
cS:function cS(){},
t:function t(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
eE:function eE(a,b){this.a=a
this.$ti=b},
bY:function bY(a,b){this.a=a
this.$ti=b},
j5:function j5(a){this.a=a},
e4:function e4(){},
bZ:function bZ(a,b){this.a=a
this.$ti=b},
kv:function kv(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eh:function eh(a,b){this.a=a
this.b=b},
h2:function h2(a,b,c){this.a=a
this.b=b
this.c=c},
hK:function hK(a){this.a=a},
hd:function hd(a){this.a=a},
dS:function dS(a,b){this.a=a
this.b=b},
eQ:function eQ(a){this.a=a
this.b=null},
aO:function aO(){},
fE:function fE(){},
fF:function fF(){},
hD:function hD(){},
hB:function hB(){},
cO:function cO(a,b){this.a=a
this.b=b},
ht:function ht(a){this.a=a},
hU:function hU(a){this.a=a},
bb:function bb(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jD:function jD(a){this.a=a},
jF:function jF(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
aQ:function aQ(a,b){this.a=a
this.$ti=b},
cw:function cw(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
lP:function lP(a){this.a=a},
lQ:function lQ(a){this.a=a},
lR:function lR(a){this.a=a},
cu:function cu(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dm:function dm(a){this.b=a},
hT:function hT(a,b,c){this.a=a
this.b=b
this.c=c},
di:function di(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
dd:function dd(a,b){this.a=a
this.c=b},
ig:function ig(a,b,c){this.a=a
this.b=b
this.c=c},
ih:function ih(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
b(a){return A.L(A.ml(a))},
C(a){return A.L(A.qf(a))},
r8(a){var s=new A.kW(a)
return s.b=s},
kW:function kW(a){this.a=a
this.b=null},
mP(a){return a},
qo(a){return new Int8Array(a)},
ls(a,b,c){if(a>>>0!==a||a>=c)throw A.d(A.cf(b,a))},
rL(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.d(A.tu(a,b,c))
return b},
h9:function h9(){},
d1:function d1(){},
ef:function ef(){},
h8:function h8(){},
eg:function eg(){},
cA:function cA(){},
eN:function eN(){},
eO:function eO(){},
nO(a,b){var s=b.c
return s==null?b.c=A.mJ(a,b.y,!0):s},
nN(a,b){var s=b.c
return s==null?b.c=A.eV(a,"ba",[b.y]):s},
nP(a){var s=a.x
if(s===6||s===7||s===8)return A.nP(a.y)
return s===11||s===12},
qD(a){return a.at},
aK(a){return A.il(v.typeUniverse,a,!1)},
tF(a,b){var s,r,q,p,o
if(a==null)return null
s=b.z
r=a.as
if(r==null)r=a.as=new Map()
q=b.at
p=r.get(q)
if(p!=null)return p
o=A.bU(v.typeUniverse,a.y,s,0)
r.set(q,o)
return o},
bU(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.x
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.y
r=A.bU(a,s,a0,a1)
if(r===s)return b
return A.of(a,r,!0)
case 7:s=b.y
r=A.bU(a,s,a0,a1)
if(r===s)return b
return A.mJ(a,r,!0)
case 8:s=b.y
r=A.bU(a,s,a0,a1)
if(r===s)return b
return A.oe(a,r,!0)
case 9:q=b.z
p=A.fa(a,q,a0,a1)
if(p===q)return b
return A.eV(a,b.y,p)
case 10:o=b.y
n=A.bU(a,o,a0,a1)
m=b.z
l=A.fa(a,m,a0,a1)
if(n===o&&l===m)return b
return A.mH(a,n,l)
case 11:k=b.y
j=A.bU(a,k,a0,a1)
i=b.z
h=A.te(a,i,a0,a1)
if(j===k&&h===i)return b
return A.od(a,j,h)
case 12:g=b.z
a1+=g.length
f=A.fa(a,g,a0,a1)
o=b.y
n=A.bU(a,o,a0,a1)
if(f===g&&n===o)return b
return A.mI(a,n,f,!0)
case 13:e=b.y
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw A.d(A.iM("Attempted to substitute unexpected RTI kind "+c))}},
fa(a,b,c,d){var s,r,q,p,o=b.length,n=A.lo(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.bU(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
tf(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.lo(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.bU(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
te(a,b,c,d){var s,r=b.a,q=A.fa(a,r,c,d),p=b.b,o=A.fa(a,p,c,d),n=b.c,m=A.tf(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.i9()
s.a=q
s.b=o
s.c=m
return s},
a(a,b){a[v.arrayRti]=b
return a},
mY(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.tA(s)
return a.$S()}return null},
p0(a,b){var s
if(A.nP(b))if(a instanceof A.aO){s=A.mY(a)
if(s!=null)return s}return A.aJ(a)},
aJ(a){var s
if(a instanceof A.E){s=a.$ti
return s!=null?s:A.mQ(a)}if(Array.isArray(a))return A.v(a)
return A.mQ(J.bi(a))},
v(a){var s=a[v.arrayRti],r=t.dG
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
z(a){var s=a.$ti
return s!=null?s:A.mQ(a)},
mQ(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.rW(a,s)},
rW(a,b){var s=a instanceof A.aO?a.__proto__.__proto__.constructor:b,r=A.ru(v.typeUniverse,s.name)
b.$ccache=r
return r},
tA(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.il(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
du(a){var s=a instanceof A.aO?A.mY(a):null
return A.mZ(s==null?A.aJ(a):s)},
mZ(a){var s,r,q,p=a.w
if(p!=null)return p
s=a.at
r=s.replace(/\*/g,"")
if(r===s)return a.w=new A.eT(a)
q=A.il(v.typeUniverse,r,!0)
p=q.w
return a.w=p==null?q.w=new A.eT(q):p},
u_(a){return A.mZ(A.il(v.typeUniverse,a,!1))},
rV(a){var s,r,q,p,o=this
if(o===t.K)return A.dq(o,a,A.t1)
if(!A.bV(o))if(!(o===t._))s=!1
else s=!0
else s=!0
if(s)return A.dq(o,a,A.t4)
s=o.x
r=s===6?o.y:o
if(r===t.S)q=A.ly
else if(r===t.W||r===t.p)q=A.t0
else if(r===t.N)q=A.t2
else q=r===t.k4?A.oC:null
if(q!=null)return A.dq(o,a,q)
if(r.x===9){p=r.y
if(r.z.every(A.tJ)){o.r="$i"+p
if(p==="n")return A.dq(o,a,A.t_)
return A.dq(o,a,A.t3)}}else if(s===7)return A.dq(o,a,A.rT)
return A.dq(o,a,A.rR)},
dq(a,b,c){a.b=c
return a.b(b)},
rU(a){var s,r=this,q=A.rQ
if(!A.bV(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=A.rI
else if(r===t.K)q=A.rH
else{s=A.fe(r)
if(s)q=A.rS}r.a=q
return r.a(a)},
lz(a){var s,r=a.x
if(!A.bV(a))if(!(a===t._))if(!(a===t.eK))if(r!==7)s=r===8&&A.lz(a.y)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
rR(a){var s=this
if(a==null)return A.lz(s)
return A.aj(v.typeUniverse,A.p0(a,s),null,s,null)},
rT(a){if(a==null)return!0
return this.y.b(a)},
t3(a){var s,r=this
if(a==null)return A.lz(r)
s=r.r
if(a instanceof A.E)return!!a[s]
return!!J.bi(a)[s]},
t_(a){var s,r=this
if(a==null)return A.lz(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.r
if(a instanceof A.E)return!!a[s]
return!!J.bi(a)[s]},
rQ(a){var s,r=this
if(a==null){s=A.fe(r)
if(s)return a}else if(r.b(a))return a
A.oA(a,r)},
rS(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.oA(a,s)},
oA(a,b){throw A.d(A.oc(A.o6(a,A.p0(a,b),A.aX(b,null))))},
ir(a,b,c,d){var s=null
if(A.aj(v.typeUniverse,a,s,b,s))return a
throw A.d(A.oc("The type argument '"+A.aX(a,s)+"' is not a subtype of the type variable bound '"+A.aX(b,s)+"' of type variable '"+c+"' in '"+d+"'."))},
o6(a,b,c){var s=A.fO(a)
return s+": type '"+A.aX(b==null?A.aJ(a):b,null)+"' is not a subtype of type '"+c+"'"},
oc(a){return new A.eU("TypeError: "+a)},
aW(a,b){return new A.eU("TypeError: "+A.o6(a,null,b))},
t1(a){return a!=null},
rH(a){if(a!=null)return a
throw A.d(A.aW(a,"Object"))},
t4(a){return!0},
rI(a){return a},
oC(a){return!0===a||!1===a},
io(a){if(!0===a)return!0
if(!1===a)return!1
throw A.d(A.aW(a,"bool"))},
uC(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.aW(a,"bool"))},
uB(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.aW(a,"bool?"))},
bH(a){if(typeof a=="number")return a
throw A.d(A.aW(a,"double"))},
uD(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.aW(a,"double"))},
ov(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.aW(a,"double?"))},
ly(a){return typeof a=="number"&&Math.floor(a)===a},
a4(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.d(A.aW(a,"int"))},
uF(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.aW(a,"int"))},
uE(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.aW(a,"int?"))},
t0(a){return typeof a=="number"},
lp(a){if(typeof a=="number")return a
throw A.d(A.aW(a,"num"))},
uH(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.aW(a,"num"))},
uG(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.aW(a,"num?"))},
t2(a){return typeof a=="string"},
aq(a){if(typeof a=="string")return a
throw A.d(A.aW(a,"String"))},
uI(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.aW(a,"String"))},
ip(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.aW(a,"String?"))},
tb(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.aX(a[q],b)
return s},
oB(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=A.a([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)B.a.n(a5,"T"+(q+p))
for(o=t.X,n=t._,m="<",l="",p=0;p<s;++p,l=a3){k=a5.length
j=k-1-p
if(!(j>=0))return A.c(a5,j)
m=B.b.K(m+l,a5[j])
i=a6[p]
h=i.x
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+A.aX(i,a5)}m+=">"}else{m=""
r=null}o=a4.y
g=a4.z
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=A.aX(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+A.aX(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+A.aX(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=A.aX(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
aX(a,b){var s,r,q,p,o,n,m,l=a.x
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=A.aX(a.y,b)
return s}if(l===7){r=a.y
s=A.aX(r,b)
q=r.x
return(q===11||q===12?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+A.aX(a.y,b)+">"
if(l===9){p=A.tg(a.y)
o=a.z
return o.length>0?p+("<"+A.tb(o,b)+">"):p}if(l===11)return A.oB(a,b,null)
if(l===12)return A.oB(a.y,b,a.z)
if(l===13){n=a.y
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.c(b,n)
return b[n]}return"?"},
tg(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
rv(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
ru(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.il(a,b,!1)
else if(typeof m=="number"){s=m
r=A.eW(a,5,"#")
q=A.lo(s)
for(p=0;p<s;++p)q[p]=r
o=A.eV(a,b,q)
n[b]=o
return o}else return m},
rs(a,b){return A.ot(a.tR,b)},
rr(a,b){return A.ot(a.eT,b)},
il(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.oa(A.o8(a,null,b,c))
r.set(b,s)
return s},
ll(a,b,c){var s,r,q=b.Q
if(q==null)q=b.Q=new Map()
s=q.get(c)
if(s!=null)return s
r=A.oa(A.o8(a,b,c,!0))
q.set(c,r)
return r},
rt(a,b,c){var s,r,q,p=b.as
if(p==null)p=b.as=new Map()
s=c.at
r=p.get(s)
if(r!=null)return r
q=A.mH(a,b,c.x===10?c.z:[c])
p.set(s,q)
return q},
ce(a,b){b.a=A.rU
b.b=A.rV
return b},
eW(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.br(null,null)
s.x=b
s.at=c
r=A.ce(a,s)
a.eC.set(c,r)
return r},
of(a,b,c){var s,r=b.at+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.rp(a,b,r,c)
a.eC.set(r,s)
return s},
rp(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.bV(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new A.br(null,null)
q.x=6
q.y=b
q.at=c
return A.ce(a,q)},
mJ(a,b,c){var s,r=b.at+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.ro(a,b,r,c)
a.eC.set(r,s)
return s},
ro(a,b,c,d){var s,r,q,p
if(d){s=b.x
if(!A.bV(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&A.fe(b.y)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.eK)return t.P
else if(s===6){q=b.y
if(q.x===8&&A.fe(q.y))return q
else return A.nO(a,b)}}p=new A.br(null,null)
p.x=7
p.y=b
p.at=c
return A.ce(a,p)},
oe(a,b,c){var s,r=b.at+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.rm(a,b,r,c)
a.eC.set(r,s)
return s},
rm(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.bV(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return A.eV(a,"ba",[b])
else if(b===t.P||b===t.T)return t.gK}q=new A.br(null,null)
q.x=8
q.y=b
q.at=c
return A.ce(a,q)},
rq(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.br(null,null)
s.x=13
s.y=b
s.at=q
r=A.ce(a,s)
a.eC.set(q,r)
return r},
ik(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].at
return s},
rl(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].at}return s},
eV(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.ik(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.br(null,null)
r.x=9
r.y=b
r.z=c
if(c.length>0)r.c=c[0]
r.at=p
q=A.ce(a,r)
a.eC.set(p,q)
return q},
mH(a,b,c){var s,r,q,p,o,n
if(b.x===10){s=b.y
r=b.z.concat(c)}else{r=c
s=b}q=s.at+(";<"+A.ik(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.br(null,null)
o.x=10
o.y=s
o.z=r
o.at=q
n=A.ce(a,o)
a.eC.set(q,n)
return n},
od(a,b,c){var s,r,q,p,o,n=b.at,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.ik(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.ik(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.rl(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.br(null,null)
p.x=11
p.y=b
p.z=c
p.at=r
o=A.ce(a,p)
a.eC.set(r,o)
return o},
mI(a,b,c,d){var s,r=b.at+("<"+A.ik(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.rn(a,b,c,r,d)
a.eC.set(r,s)
return s},
rn(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.lo(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.x===1){r[p]=o;++q}}if(q>0){n=A.bU(a,b,r,0)
m=A.fa(a,c,r,0)
return A.mI(a,n,m,c!==m)}}l=new A.br(null,null)
l.x=12
l.y=b
l.z=c
l.at=d
return A.ce(a,l)},
o8(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
oa(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=A.rg(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=A.o9(a,r,h,g,!1)
else if(q===46)r=A.o9(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(A.cc(a.u,a.e,g.pop()))
break
case 94:g.push(A.rq(a.u,g.pop()))
break
case 35:g.push(A.eW(a.u,5,"#"))
break
case 64:g.push(A.eW(a.u,2,"@"))
break
case 126:g.push(A.eW(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
A.mG(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(A.eV(p,n,o))
else{m=A.cc(p,a.e,n)
switch(m.x){case 11:g.push(A.mI(p,m,o,a.n))
break
default:g.push(A.mH(p,m,o))
break}}break
case 38:A.rh(a,g)
break
case 42:p=a.u
g.push(A.of(p,A.cc(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(A.mJ(p,A.cc(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(A.oe(p,A.cc(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new A.i9()
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
A.mG(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(A.od(p,A.cc(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
A.mG(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
A.rj(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return A.cc(a.u,a.e,i)},
rg(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
o9(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.x===10)o=o.y
n=A.rv(s,o.y)[p]
if(n==null)A.L('No "'+p+'" in "'+A.qD(o)+'"')
d.push(A.ll(s,o,n))}else d.push(p)
return m},
rh(a,b){var s=b.pop()
if(0===s){b.push(A.eW(a.u,1,"0&"))
return}if(1===s){b.push(A.eW(a.u,4,"1&"))
return}throw A.d(A.iM("Unexpected extended operation "+A.k(s)))},
cc(a,b,c){if(typeof c=="string")return A.eV(a,c,a.sEA)
else if(typeof c=="number")return A.ri(a,b,c)
else return c},
mG(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.cc(a,b,c[s])},
rj(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.cc(a,b,c[s])},
ri(a,b,c){var s,r,q=b.x
if(q===10){if(c===0)return b.y
s=b.z
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.y
q=b.x}else if(c===0)return b
if(q!==9)throw A.d(A.iM("Indexed base must be an interface type"))
s=b.z
if(c<=s.length)return s[c-1]
throw A.d(A.iM("Bad index "+c+" for "+b.l(0)))},
aj(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!A.bV(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.x
if(r===4)return!0
if(A.bV(b))return!1
if(b.x!==1)s=!1
else s=!0
if(s)return!0
q=r===13
if(q)if(A.aj(a,c[b.y],c,d,e))return!0
p=d.x
s=b===t.P||b===t.T
if(s){if(p===8)return A.aj(a,b,c,d.y,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return A.aj(a,b.y,c,d,e)
if(r===6)return A.aj(a,b.y,c,d,e)
return r!==7}if(r===6)return A.aj(a,b.y,c,d,e)
if(p===6){s=A.nO(a,d)
return A.aj(a,b,c,s,e)}if(r===8){if(!A.aj(a,b.y,c,d,e))return!1
return A.aj(a,A.nN(a,b),c,d,e)}if(r===7){s=A.aj(a,t.P,c,d,e)
return s&&A.aj(a,b.y,c,d,e)}if(p===8){if(A.aj(a,b,c,d.y,e))return!0
return A.aj(a,b,c,A.nN(a,d),e)}if(p===7){s=A.aj(a,b,c,t.P,e)
return s||A.aj(a,b,c,d.y,e)}if(q)return!1
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
if(!A.aj(a,k,c,j,e)||!A.aj(a,j,e,k,c))return!1}return A.oD(a,b.y,c,d.y,e)}if(p===11){if(b===t.dY)return!0
if(s)return!1
return A.oD(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return A.rZ(a,b,c,d,e)}return!1},
oD(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.aj(a3,a4.y,a5,a6.y,a7))return!1
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
if(!A.aj(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.aj(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.aj(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.aj(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
rZ(a,b,c,d,e){var s,r,q,p,o,n,m,l=b.y,k=d.y
for(;l!==k;){s=a.tR[l]
if(s==null)return!1
if(typeof s=="string"){l=s
continue}r=s[k]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.ll(a,b,r[o])
return A.ou(a,p,null,c,d.z,e)}n=b.z
m=d.z
return A.ou(a,n,null,c,m,e)},
ou(a,b,c,d,e,f){var s,r,q,p=b.length
for(s=0;s<p;++s){r=b[s]
q=e[s]
if(!A.aj(a,r,d,q,f))return!1}return!0},
fe(a){var s,r=a.x
if(!(a===t.P||a===t.T))if(!A.bV(a))if(r!==7)if(!(r===6&&A.fe(a.y)))s=r===8&&A.fe(a.y)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
tJ(a){var s
if(!A.bV(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
bV(a){var s=a.x
return s===2||s===3||s===4||s===5||a===t.X},
ot(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
lo(a){return a>0?new Array(a):v.typeUniverse.sEA},
br:function br(a,b){var _=this
_.a=a
_.b=b
_.w=_.r=_.c=null
_.x=0
_.at=_.as=_.Q=_.z=_.y=null},
i9:function i9(){this.c=this.b=this.a=null},
eT:function eT(a){this.a=a},
i6:function i6(){},
eU:function eU(a){this.a=a},
r4(){var s,r,q={}
if(self.scheduleImmediate!=null)return A.tj()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(A.dt(new A.kS(q),1)).observe(s,{childList:true})
return new A.kR(q,s,r)}else if(self.setImmediate!=null)return A.tk()
return A.tl()},
r5(a){self.scheduleImmediate(A.dt(new A.kT(t.M.a(a)),0))},
r6(a){self.setImmediate(A.dt(new A.kU(t.M.a(a)),0))},
r7(a){t.M.a(a)
A.rk(0,a)},
rk(a,b){var s=new A.lj()
s.lf(a,b)
return s},
f9(a){return new A.hV(new A.ap($.a9,a.h("ap<0>")),a.h("hV<0>"))},
f6(a,b){a.$2(0,null)
b.b=!0
return b.a},
cJ(a,b){A.rJ(a,b)},
f5(a,b){b.f_(0,a)},
f4(a,b){b.ip(A.bk(a),A.cg(a))},
rJ(a,b){var s,r,q=new A.lq(b),p=new A.lr(b)
if(a instanceof A.ap)a.hU(q,p,t.z)
else{s=t.z
if(t.g7.b(a))a.fC(q,p,s)
else{r=new A.ap($.a9,t.j_)
r.a=8
r.c=a
r.hU(q,p,s)}}},
fb(a){var s=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(r){e=r
d=c}}}(a,1)
return $.a9.j5(new A.lD(s),t.H,t.S,t.z)},
rd(a){return new A.dl(a,1)},
mD(){return B.dZ},
mE(a){return new A.dl(a,3)},
mT(a,b){return new A.eS(a,b.h("eS<0>"))},
iN(a,b){var s=A.fd(a,"error",t.K)
return new A.dC(s,b==null?A.pK(a):b)},
pK(a){var s
if(t.fz.b(a)){s=a.gdj()
if(s!=null)return s}return B.b0},
l2(a,b){var s,r,q
for(s=t.j_;r=a.a,(r&4)!==0;)a=s.a(a.c)
if((r&24)!==0){q=b.du()
b.eB(a)
A.dk(b,q)}else{q=t.F.a(b.c)
b.a=b.a&1|4
b.c=a
a.hL(q)}},
dk(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=c.a=a
for(s=t.u,r=t.F,q=t.g7;!0;){p={}
o=b.a
n=(o&16)===0
m=!n
if(a0==null){if(m&&(o&1)===0){l=s.a(b.c)
A.lA(l.a,l.b)}return}p.a=a0
k=a0.a
for(b=a0;k!=null;b=k,k=j){b.a=null
A.dk(c.a,b)
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
A.lA(i.a,i.b)
return}f=$.a9
if(f!==g)$.a9=g
else f=null
b=b.c
if((b&15)===8)new A.la(p,c,m).$0()
else if(n){if((b&1)!==0)new A.l9(p,i).$0()}else if((b&2)!==0)new A.l8(c,p).$0()
if(f!=null)$.a9=f
b=p.c
if(q.b(b)){o=p.a.$ti
o=o.h("ba<2>").b(b)||!o.z[1].b(b)}else o=!1
if(o){q.a(b)
e=p.a.b
if((b.a&24)!==0){d=r.a(e.c)
e.c=null
a0=e.dv(d)
e.a=b.a&30|e.a&1
e.c=b.c
c.a=b
continue}else A.l2(b,e)
return}}e=p.a.b
d=r.a(e.c)
e.c=null
a0=e.dv(d)
b=p.b
o=p.c
if(!b){e.$ti.c.a(o)
e.a=8
e.c=o}else{s.a(o)
e.a=e.a&1|16
e.c=o}c.a=e
b=e}},
t9(a,b){var s
if(t.ng.b(a))return b.j5(a,t.z,t.K,t.k)
s=t.mq
if(s.b(a))return s.a(a)
throw A.d(A.ma(a,"onError",u.w))},
t8(){var s,r
for(s=$.dr;s!=null;s=$.dr){$.f8=null
r=s.b
$.dr=r
if(r==null)$.f7=null
s.a.$0()}},
td(){$.mR=!0
try{A.t8()}finally{$.f8=null
$.mR=!1
if($.dr!=null)$.n9().$1(A.oO())}},
oI(a){var s=new A.hW(a),r=$.f7
if(r==null){$.dr=$.f7=s
if(!$.mR)$.n9().$1(A.oO())}else $.f7=r.b=s},
tc(a){var s,r,q,p=$.dr
if(p==null){A.oI(a)
$.f8=$.f7
return}s=new A.hW(a)
r=$.f8
if(r==null){s.b=p
$.dr=$.f8=s}else{q=r.b
s.b=q
$.f8=r.b=s
if(q==null)$.f7=s}},
tT(a){var s,r=null,q=$.a9
if(B.l===q){A.cK(r,r,B.l,a)
return}s=!1
if(s){A.cK(r,r,q,t.M.a(a))
return}A.cK(r,r,q,t.M.a(q.ig(a)))},
ug(a,b){A.fd(a,"stream",t.K)
return new A.ie(b.h("ie<0>"))},
lA(a,b){A.tc(new A.lB(a,b))},
oF(a,b,c,d,e){var s,r=$.a9
if(r===c)return d.$0()
$.a9=c
s=r
try{r=d.$0()
return r}finally{$.a9=s}},
oG(a,b,c,d,e,f,g){var s,r=$.a9
if(r===c)return d.$1(e)
$.a9=c
s=r
try{r=d.$1(e)
return r}finally{$.a9=s}},
ta(a,b,c,d,e,f,g,h,i){var s,r=$.a9
if(r===c)return d.$2(e,f)
$.a9=c
s=r
try{r=d.$2(e,f)
return r}finally{$.a9=s}},
cK(a,b,c,d){t.M.a(d)
if(B.l!==c)d=c.ig(d)
A.oI(d)},
kS:function kS(a){this.a=a},
kR:function kR(a,b,c){this.a=a
this.b=b
this.c=c},
kT:function kT(a){this.a=a},
kU:function kU(a){this.a=a},
lj:function lj(){},
lk:function lk(a,b){this.a=a
this.b=b},
hV:function hV(a,b){this.a=a
this.b=!1
this.$ti=b},
lq:function lq(a){this.a=a},
lr:function lr(a){this.a=a},
lD:function lD(a){this.a=a},
dl:function dl(a,b){this.a=a
this.b=b},
cd:function cd(a,b){var _=this
_.a=a
_.d=_.c=_.b=null
_.$ti=b},
eS:function eS(a,b){this.a=a
this.$ti=b},
dC:function dC(a,b){this.a=a
this.b=b},
hX:function hX(){},
eR:function eR(a,b){this.a=a
this.$ti=b},
cH:function cH(a,b,c,d,e){var _=this
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
l_:function l_(a,b){this.a=a
this.b=b},
l7:function l7(a,b){this.a=a
this.b=b},
l3:function l3(a){this.a=a},
l4:function l4(a){this.a=a},
l5:function l5(a,b,c){this.a=a
this.b=b
this.c=c},
l1:function l1(a,b){this.a=a
this.b=b},
l6:function l6(a,b){this.a=a
this.b=b},
l0:function l0(a,b,c){this.a=a
this.b=b
this.c=c},
la:function la(a,b,c){this.a=a
this.b=b
this.c=c},
lb:function lb(a){this.a=a},
l9:function l9(a,b){this.a=a
this.b=b},
l8:function l8(a,b){this.a=a
this.b=b},
hW:function hW(a){this.a=a
this.b=null},
et:function et(){},
kn:function kn(a,b){this.a=a
this.b=b},
ko:function ko(a,b){this.a=a
this.b=b},
eu:function eu(){},
hC:function hC(){},
ie:function ie(a){this.$ti=a},
f_:function f_(){},
lB:function lB(a,b){this.a=a
this.b=b},
id:function id(){},
lh:function lh(a,b){this.a=a
this.b=b},
li:function li(a,b,c){this.a=a
this.b=b
this.c=c},
aa(a,b,c,d){var s
if(b==null){if(a==null)return new A.bb(c.h("@<0>").X(d).h("bb<1,2>"))
s=A.oQ()}else{if(a==null)a=A.to()
s=A.oQ()}return A.re(s,a,b,c,d)},
x(a,b,c){return b.h("@<0>").X(c).h("jE<1,2>").a(A.oU(a,new A.bb(b.h("@<0>").X(c).h("bb<1,2>"))))},
bc(a,b){return new A.bb(a.h("@<0>").X(b).h("bb<1,2>"))},
re(a,b,c,d,e){var s=c!=null?c:new A.le(d)
return new A.eK(a,b,s,d.h("@<0>").X(e).h("eK<1,2>"))},
mm(a){return new A.bS(a.h("bS<0>"))},
nC(a){return new A.bS(a.h("bS<0>"))},
mF(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
rf(a,b,c){var s=new A.cI(a,b,c.h("cI<0>"))
s.c=a.e
return s},
rO(a,b){return J.T(a,b)},
rP(a){return J.aE(a)},
q9(a,b,c){var s,r
if(A.mS(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.a([],t.s)
B.a.n($.b8,a)
try{A.t5(a,s)}finally{if(0>=$.b8.length)return A.c($.b8,-1)
$.b8.pop()}r=A.kp(b,t.e7.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
jz(a,b,c){var s,r
if(A.mS(a))return b+"..."+c
s=new A.a3(b)
B.a.n($.b8,a)
try{r=s
r.a=A.kp(r.a,a,", ")}finally{if(0>=$.b8.length)return A.c($.b8,-1)
$.b8.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
mS(a){var s,r
for(s=$.b8.length,r=0;r<s;++r)if(a===$.b8[r])return!0
return!1},
t5(a,b){var s,r,q,p,o,n,m,l=a.gI(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.q())return
s=A.k(l.gC())
B.a.n(b,s)
k+=s.length+2;++j}if(!l.q()){if(j<=5)return
if(0>=b.length)return A.c(b,-1)
r=b.pop()
if(0>=b.length)return A.c(b,-1)
q=b.pop()}else{p=l.gC();++j
if(!l.q()){if(j<=4){B.a.n(b,A.k(p))
return}r=A.k(p)
if(0>=b.length)return A.c(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gC();++j
for(;l.q();p=o,o=n){n=l.gC();++j
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
h4(a,b,c){var s=A.aa(null,null,b,c)
a.ba(0,new A.jG(s,b,c))
return s},
mn(a,b){var s,r,q,p=A.mm(b)
for(s=J.ab(a),r=s.$ti.c;s.q();){q=s.d
p.n(0,b.a(q==null?r.a(q):q))}return p},
qi(a,b){var s=t.bP
return J.ne(s.a(a),s.a(b))},
mp(a){var s,r={}
if(A.mS(a))return"{...}"
s=new A.a3("")
try{B.a.n($.b8,a)
s.a+="{"
r.a=!0
a.ba(0,new A.jI(r,s))
s.a+="}"}finally{if(0>=$.b8.length)return A.c($.b8,-1)
$.b8.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
mo(a){return new A.eb(A.bC(A.qj(null),null,!1,a.h("0?")),a.h("eb<0>"))},
qj(a){return 8},
eK:function eK(a,b,c,d){var _=this
_.w=a
_.x=b
_.y=c
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=d},
le:function le(a){this.a=a},
bS:function bS(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ia:function ia(a){this.a=a
this.c=this.b=null},
cI:function cI(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
e6:function e6(){},
jG:function jG(a,b,c){this.a=a
this.b=b
this.c=c},
ea:function ea(){},
u:function u(){},
ec:function ec(){},
jI:function jI(a,b){this.a=a
this.b=b},
cx:function cx(){},
jJ:function jJ(a){this.a=a},
eb:function eb(a,b){var _=this
_.a=a
_.d=_.c=_.b=0
_.$ti=b},
eM:function eM(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.$ti=e},
aU:function aU(){},
eo:function eo(){},
dn:function dn(){},
im:function im(){},
eX:function eX(a,b){this.a=a
this.$ti=b},
eL:function eL(){},
eP:function eP(){},
f1:function f1(){},
f2:function f2(){},
r_(a,b,c,d){var s,r
if(b instanceof Uint8Array){s=b
d=s.length
if(d-c<15)return null
r=A.r0(a,s,c,d)
if(r!=null&&a)if(r.indexOf("\ufffd")>=0)return null
return r}return null},
r0(a,b,c,d){var s=a?$.pt():$.ps()
if(s==null)return null
if(0===c&&d===b.length)return A.o2(s,b)
return A.o2(s,b.subarray(c,A.aF(c,d,b.length)))},
o2(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
nk(a,b,c,d,e,f){if(B.d.a7(f,4)!==0)throw A.d(A.aA("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.d(A.aA("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.d(A.aA("Invalid base64 padding, more than two '=' characters",a,b))},
rG(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
rF(a,b,c){var s,r,q,p=c-b,o=new Uint8Array(p)
for(s=J.X(a),r=0;r<p;++r){q=s.k(a,b+r)
if((q&4294967040)>>>0!==0)q=255
if(!(r<p))return A.c(o,r)
o[r]=q}return o},
kC:function kC(){},
kB:function kB(){},
fu:function fu(){},
ij:function ij(){},
fv:function fv(a,b){this.a=a
this.b=b},
fx:function fx(){},
fy:function fy(){},
co:function co(){},
cp:function cp(){},
fN:function fN(){},
hO:function hO(){},
hP:function hP(a){this.a=a},
ln:function ln(a){this.a=a
this.b=16
this.c=0},
ch(a,b){var s=A.nJ(a,b)
if(s!=null)return s
throw A.d(A.aA(a,null,null))},
bJ(a){var s=A.qv(a)
if(s!=null)return s
throw A.d(A.aA("Invalid double",a,null))},
q_(a){if(a instanceof A.aO)return a.l(0)
return"Instance of '"+A.k9(a)+"'"},
q0(a,b){a=A.d(a)
if(a==null)a=t.K.a(a)
a.stack=b.l(0)
throw a
throw A.d("unreachable")},
bC(a,b,c,d){var s,r=c?J.mh(a,d):J.nx(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
h5(a,b,c){var s,r=A.a([],c.h("A<0>"))
for(s=J.ab(a);s.q();)B.a.n(r,c.a(s.gC()))
if(b)return r
return J.jB(r,c)},
h(a,b,c){var s
if(b)return A.nD(a,c)
s=J.jB(A.nD(a,c),c)
return s},
nD(a,b){var s,r
if(Array.isArray(a))return A.a(a.slice(0),b.h("A<0>"))
s=A.a([],b.h("A<0>"))
for(r=J.ab(a);r.q();)B.a.n(s,r.gC())
return s},
nE(a,b){var s=A.h5(a,!1,b)
s.fixed$length=Array
s.immutable$list=Array
return s},
ac(a,b,c){var s,r
if(Array.isArray(a)){s=a
r=s.length
c=A.aF(b,c,r)
return A.nK(b>0||c<r?s.slice(b,c):s)}if(t.hD.b(a))return A.qx(a,b,A.aF(b,c,a.length))
return A.qQ(a,b,c)},
qP(a){return A.b4(a)},
qQ(a,b,c){var s,r,q,p,o=null
if(b<0)throw A.d(A.Z(b,0,J.W(a),o,o))
s=c==null
if(!s&&c<b)throw A.d(A.Z(c,b,J.W(a),o,o))
r=J.ab(a)
for(q=0;q<b;++q)if(!r.q())throw A.d(A.Z(b,0,q,o,o))
p=[]
if(s)for(;r.q();)p.push(r.gC())
else for(q=b;q<c;++q){if(!r.q())throw A.d(A.Z(c,b,q,o,o))
p.push(r.gC())}return A.nK(p)},
aw(a){return new A.cu(a,A.mi(a,!1,!0,!1,!1,!1))},
kp(a,b,c){var s=J.ab(b)
if(!s.q())return a
if(c.length===0){do a+=A.k(s.gC())
while(s.q())}else{a+=A.k(s.gC())
for(;s.q();)a=a+c+A.k(s.gC())}return a},
my(){var s=A.qu()
if(s!=null)return A.mz(s)
throw A.d(A.R("'Uri.base' is not supported"))},
fO(a){if(typeof a=="number"||A.oC(a)||a==null)return J.bx(a)
if(typeof a=="string")return JSON.stringify(a)
return A.q_(a)},
iM(a){return new A.dB(a)},
a7(a,b){return new A.by(!1,null,b,a)},
ma(a,b,c){return new A.by(!0,a,b,c)},
iB(a,b,c){return a},
aC(a){var s=null
return new A.d7(s,s,!1,s,s,a)},
ka(a,b){return new A.d7(null,null,!0,a,b,"Value not in range")},
Z(a,b,c,d,e){return new A.d7(b,c,!0,a,d,"Invalid value")},
nM(a,b,c,d){if(a<b||a>c)throw A.d(A.Z(a,b,c,d,null))
return a},
aF(a,b,c){if(0>a||a>c)throw A.d(A.Z(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.d(A.Z(b,a,c,"end",null))
return b}return c},
b5(a,b){if(a<0)throw A.d(A.Z(a,0,null,b,null))
return a},
h_(a,b,c,d,e){var s=A.a4(e==null?J.W(b):e)
return new A.fZ(s,!0,a,c,"Index out of range")},
R(a){return new A.hL(a)},
hJ(a){return new A.eA(a)},
aH(a){return new A.dc(a)},
as(a){return new A.fH(a)},
aA(a,b,c){return new A.dV(a,b,c)},
d3(a,b,c,d){var s,r
if(B.o===c)return A.nU(J.aE(a),J.aE(b),$.m5())
if(B.o===d){s=J.aE(a)
b=J.aE(b)
c=J.aE(c)
return A.mv(A.c7(A.c7(A.c7($.m5(),s),b),c))}s=J.aE(a)
b=J.aE(b)
c=J.aE(c)
d=J.aE(d)
r=$.m5()
return A.mv(A.c7(A.c7(A.c7(A.c7(r,s),b),c),d))},
dv(a){A.tP(A.k(a))},
ox(a,b){return 65536+((a&1023)<<10)+(b&1023)},
mz(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((B.b.E(a5,4)^58)*3|B.b.E(a5,0)^100|B.b.E(a5,1)^97|B.b.E(a5,2)^116|B.b.E(a5,3)^97)>>>0
if(s===0)return A.o0(a4<a4?B.b.A(a5,0,a4):a5,5,a3).gjk()
else if(s===32)return A.o0(B.b.A(a5,5,a4),0,a3).gjk()}r=A.bC(8,0,!1,t.S)
B.a.u(r,0,0)
B.a.u(r,1,-1)
B.a.u(r,2,-1)
B.a.u(r,7,-1)
B.a.u(r,3,0)
B.a.u(r,4,0)
B.a.u(r,5,a4)
B.a.u(r,6,a4)
if(A.oH(a5,0,a4,0,r)>=14)B.a.u(r,7,a4)
q=r[1]
if(q>=0)if(A.oH(a5,0,q,20,r)===20)r[7]=q
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
k=!1}else{if(!B.b.ab(a5,"\\",n))if(p>0)h=B.b.ab(a5,"\\",p-1)||B.b.ab(a5,"\\",p-2)
else h=!1
else h=!0
if(h){j=a3
k=!1}else{if(!(m<a4&&m===n+2&&B.b.ab(a5,"..",n)))h=m>n+2&&B.b.ab(a5,"/..",m-3)
else h=!0
if(h){j=a3
k=!1}else{if(q===4)if(B.b.ab(a5,"file",0)){if(p<=0){if(!B.b.ab(a5,"/",n)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+B.b.A(a5,n,a4)
q-=0
i=s-0
m+=i
l+=i
a4=a5.length
p=7
o=7
n=7}else if(n===m){++l
f=m+1
a5=B.b.cc(a5,n,m,"/");++a4
m=f}j="file"}else if(B.b.ab(a5,"http",0)){if(i&&o+3===n&&B.b.ab(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.b.cc(a5,o,n,"")
a4-=3
n=e}j="http"}else j=a3
else if(q===5&&B.b.ab(a5,"https",0)){if(i&&o+4===n&&B.b.ab(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.b.cc(a5,o,n,"")
a4-=3
n=e}j="https"}else j=a3
k=!0}}}}else j=a3
if(k){if(a4<a5.length){a5=B.b.A(a5,0,a4)
q-=0
p-=0
o-=0
n-=0
m-=0
l-=0}return new A.bh(a5,q,p,o,n,m,l,j)}if(j==null)if(q>0)j=A.rB(a5,0,q)
else{if(q===0)A.dp(a5,0,"Invalid empty scheme")
j=""}if(p>0){d=q+3
c=d<p?A.oo(a5,d,p-1):""
b=A.ol(a5,p,o,!1)
i=o+1
if(i<n){a=A.nJ(B.b.A(a5,i,n),a3)
a0=A.mL(a==null?A.L(A.aA("Invalid port",a5,i)):a,j)}else a0=a3}else{a0=a3
b=a0
c=""}a1=A.om(a5,n,m,a3,j,b!=null)
a2=m<l?A.on(a5,m+1,l,a3):a3
return A.lm(j,c,b,a0,a1,a2,l<a4?A.ok(a5,l+1,a4):a3)},
qZ(a){A.aq(a)
return A.mO(a,0,a.length,B.w,!1)},
qY(a,b,c){var s,r,q,p,o,n,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new A.ky(a),j=new Uint8Array(4)
for(s=b,r=s,q=0;s<c;++s){p=B.b.J(a,s)
if(p!==46){if((p^48)>9)k.$2("invalid character",s)}else{if(q===3)k.$2(m,s)
o=A.ch(B.b.A(a,r,s),null)
if(o>255)k.$2(l,r)
n=q+1
if(!(q<4))return A.c(j,q)
j[q]=o
r=s+1
q=n}}if(q!==3)k.$2(m,c)
o=A.ch(B.b.A(a,r,c),null)
if(o>255)k.$2(l,r)
if(!(q<4))return A.c(j,q)
j[q]=o
return j},
o1(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c=new A.kz(a),b=new A.kA(c,a)
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
else{k=A.qY(a,q,a1)
B.a.n(s,(k[0]<<8|k[1])>>>0)
B.a.n(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)c.$2("an address with a wildcard must have less than 7 parts",d)}else if(s.length!==8)c.$2("an address without a wildcard must contain exactly 8 parts",d)
j=new Uint8Array(16)
for(l=s.length,i=9-l,r=0,h=0;r<l;++r){g=s[r]
if(g===-1)for(f=0;f<i;++f){if(!(h>=0&&h<16))return A.c(j,h)
j[h]=0
e=h+1
if(!(e<16))return A.c(j,e)
j[e]=0
h+=2}else{e=B.d.cQ(g,8)
if(!(h>=0&&h<16))return A.c(j,h)
j[h]=e
e=h+1
if(!(e<16))return A.c(j,e)
j[e]=g&255
h+=2}}return j},
lm(a,b,c,d,e,f,g){return new A.eY(a,b,c,d,e,f,g)},
oh(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
dp(a,b,c){throw A.d(A.aA(c,a,b))},
rx(a,b){var s,r,q,p,o
for(s=a.length,r=0;r<s;++r){q=a[r]
p=J.X(q)
o=p.gm(q)
if(0>o)A.L(A.Z(0,0,p.gm(q),null,null))
if(A.cj(q,"/",0)){s=A.R("Illegal path character "+A.k(q))
throw A.d(s)}}},
og(a,b,c){var s,r,q,p,o
for(s=A.bu(a,c,null,A.v(a).c),r=s.$ti,s=new A.K(s,s.gm(s),r.h("K<B.E>")),r=r.h("B.E");s.q();){q=s.d
if(q==null)q=r.a(q)
p=A.aw('["*/:<>?\\\\|]')
o=q.length
if(A.cj(q,p,0)){s=A.R("Illegal character in path: "+q)
throw A.d(s)}}},
ry(a,b){var s
if(!(65<=a&&a<=90))s=97<=a&&a<=122
else s=!0
if(s)return
s=A.R("Illegal drive letter "+A.qP(a))
throw A.d(s)},
mL(a,b){if(a!=null&&a===A.oh(b))return null
return a},
ol(a,b,c,d){var s,r,q,p,o,n
if(a==null)return null
if(b===c)return""
if(B.b.J(a,b)===91){s=c-1
if(B.b.J(a,s)!==93)A.dp(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=A.rz(a,r,s)
if(q<s){p=q+1
o=A.or(a,B.b.ab(a,"25",p)?q+3:p,s,"%25")}else o=""
A.o1(a,r,q)
return B.b.A(a,b,q).toLowerCase()+o+"]"}for(n=b;n<c;++n)if(B.b.J(a,n)===58){q=B.b.aM(a,"%",b)
q=q>=b&&q<c?q:c
if(q<c){p=q+1
o=A.or(a,B.b.ab(a,"25",p)?q+3:p,c,"%25")}else o=""
A.o1(a,b,q)
return"["+B.b.A(a,b,q)+o+"]"}return A.rD(a,b,c)},
rz(a,b,c){var s=B.b.aM(a,"%",b)
return s>=b&&s<c?s:c},
or(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new A.a3(d):null
for(s=b,r=s,q=!0;s<c;){p=B.b.J(a,s)
if(p===37){o=A.mM(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new A.a3("")
m=i.a+=B.b.A(a,r,s)
if(n)o=B.b.A(a,s,s+3)
else if(o==="%")A.dp(a,s,"ZoneID should not contain % anymore")
i.a=m+o
s+=3
r=s
q=!0}else{if(p<127){n=p>>>4
if(!(n<8))return A.c(B.H,n)
n=(B.H[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(i==null)i=new A.a3("")
if(r<s){i.a+=B.b.A(a,r,s)
r=s}q=!1}++s}else{if((p&64512)===55296&&s+1<c){l=B.b.J(a,s+1)
if((l&64512)===56320){p=(p&1023)<<10|l&1023|65536
k=2}else k=1}else k=1
j=B.b.A(a,r,s)
if(i==null){i=new A.a3("")
n=i}else n=i
n.a+=j
n.a+=A.mK(p)
s+=k
r=s}}}if(i==null)return B.b.A(a,b,c)
if(r<c)i.a+=B.b.A(a,r,c)
n=i.a
return n.charCodeAt(0)==0?n:n},
rD(a,b,c){var s,r,q,p,o,n,m,l,k,j,i
for(s=b,r=s,q=null,p=!0;s<c;){o=B.b.J(a,s)
if(o===37){n=A.mM(a,s,!0)
m=n==null
if(m&&p){s+=3
continue}if(q==null)q=new A.a3("")
l=B.b.A(a,r,s)
k=q.a+=!p?l.toLowerCase():l
if(m){n=B.b.A(a,s,s+3)
j=3}else if(n==="%"){n="%25"
j=1}else j=3
q.a=k+n
s+=j
r=s
p=!0}else{if(o<127){m=o>>>4
if(!(m<8))return A.c(B.ae,m)
m=(B.ae[m]&1<<(o&15))!==0}else m=!1
if(m){if(p&&65<=o&&90>=o){if(q==null)q=new A.a3("")
if(r<s){q.a+=B.b.A(a,r,s)
r=s}p=!1}++s}else{if(o<=93){m=o>>>4
if(!(m<8))return A.c(B.D,m)
m=(B.D[m]&1<<(o&15))!==0}else m=!1
if(m)A.dp(a,s,"Invalid character")
else{if((o&64512)===55296&&s+1<c){i=B.b.J(a,s+1)
if((i&64512)===56320){o=(o&1023)<<10|i&1023|65536
j=2}else j=1}else j=1
l=B.b.A(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new A.a3("")
m=q}else m=q
m.a+=l
m.a+=A.mK(o)
s+=j
r=s}}}}if(q==null)return B.b.A(a,b,c)
if(r<c){l=B.b.A(a,r,c)
q.a+=!p?l.toLowerCase():l}m=q.a
return m.charCodeAt(0)==0?m:m},
rB(a,b,c){var s,r,q,p
if(b===c)return""
if(!A.oj(B.b.E(a,b)))A.dp(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=B.b.E(a,s)
if(q<128){p=q>>>4
if(!(p<8))return A.c(B.G,p)
p=(B.G[p]&1<<(q&15))!==0}else p=!1
if(!p)A.dp(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=B.b.A(a,b,c)
return A.rw(r?a.toLowerCase():a)},
rw(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
oo(a,b,c){if(a==null)return""
return A.eZ(a,b,c,B.bj,!1,!1)},
om(a,b,c,d,e,f){var s=e==="file",r=s||f,q=A.eZ(a,b,c,B.af,!0,!0)
if(q.length===0){if(s)return"/"}else if(r&&!B.b.a_(q,"/"))q="/"+q
return A.rC(q,e,f)},
rC(a,b,c){var s=b.length===0
if(s&&!c&&!B.b.a_(a,"/")&&!B.b.a_(a,"\\"))return A.mN(a,!s||c)
return A.bT(a)},
on(a,b,c,d){if(a!=null)return A.eZ(a,b,c,B.F,!0,!1)
return null},
ok(a,b,c){if(a==null)return null
return A.eZ(a,b,c,B.F,!0,!1)},
mM(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=B.b.J(a,b+1)
r=B.b.J(a,n)
q=A.lO(s)
p=A.lO(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){n=B.d.cQ(o,4)
if(!(n<8))return A.c(B.H,n)
n=(B.H[n]&1<<(o&15))!==0}else n=!1
if(n)return A.b4(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return B.b.A(a,b,b+3).toUpperCase()
return null},
mK(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
if(a<128){s=new Uint8Array(3)
s[0]=37
s[1]=B.b.E(k,a>>>4)
s[2]=B.b.E(k,a&15)}else{if(a>2047)if(a>65535){r=240
q=4}else{r=224
q=3}else{r=192
q=2}p=3*q
s=new Uint8Array(p)
for(o=0;--q,q>=0;r=128){n=B.d.lN(a,6*q)&63|r
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
eZ(a,b,c,d,e,f){var s=A.oq(a,b,c,d,e,f)
return s==null?B.b.A(a,b,c):s},
oq(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i=null
for(s=!e,r=b,q=r,p=i;r<c;){o=B.b.J(a,r)
if(o<127){n=o>>>4
if(!(n<8))return A.c(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=A.mM(a,r,!1)
if(m==null){r+=3
continue}if("%"===m){m="%25"
l=1}else l=3}else if(o===92&&f){m="/"
l=1}else{if(s)if(o<=93){n=o>>>4
if(!(n<8))return A.c(B.D,n)
n=(B.D[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){A.dp(a,r,"Invalid character")
l=i
m=l}else{if((o&64512)===55296){n=r+1
if(n<c){k=B.b.J(a,n)
if((k&64512)===56320){o=(o&1023)<<10|k&1023|65536
l=2}else l=1}else l=1}else l=1
m=A.mK(o)}}if(p==null){p=new A.a3("")
n=p}else n=p
j=n.a+=B.b.A(a,q,r)
n.a=j+A.k(m)
if(typeof l!=="number")return A.bw(l)
r+=l
q=r}}if(p==null)return i
if(q<c)p.a+=B.b.A(a,q,c)
s=p.a
return s.charCodeAt(0)==0?s:s},
op(a){if(B.b.a_(a,"."))return!0
return B.b.ah(a,"/.")!==-1},
bT(a){var s,r,q,p,o,n,m
if(!A.op(a))return a
s=A.a([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(J.T(n,"..")){m=s.length
if(m!==0){if(0>=m)return A.c(s,-1)
s.pop()
if(s.length===0)B.a.n(s,"")}p=!0}else if("."===n)p=!0
else{B.a.n(s,n)
p=!1}}if(p)B.a.n(s,"")
return B.a.aB(s,"/")},
mN(a,b){var s,r,q,p,o,n
if(!A.op(a))return!b?A.oi(a):a
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
B.a.u(s,0,A.oi(s[0]))}return B.a.aB(s,"/")},
oi(a){var s,r,q,p=a.length
if(p>=2&&A.oj(B.b.E(a,0)))for(s=1;s<p;++s){r=B.b.E(a,s)
if(r===58)return B.b.A(a,0,s)+"%3A"+B.b.aq(a,s+1)
if(r<=127){q=r>>>4
if(!(q<8))return A.c(B.G,q)
q=(B.G[q]&1<<(r&15))===0}else q=!0
if(q)break}return a},
rE(a,b){if(a.nQ("package")&&a.c==null)return A.oJ(b,0,b.length)
return-1},
os(a){var s,r,q,p=a.gfs(),o=p.length
if(o>0&&J.W(p[0])===2&&J.nd(p[0],1)===58){if(0>=o)return A.c(p,0)
A.ry(J.nd(p[0],0),!1)
A.og(p,!1,1)
s=!0}else{A.og(p,!1,0)
s=!1}r=a.gdS()&&!s?""+"\\":""
if(a.gd0()){q=a.gbk(a)
if(q.length!==0)r=r+"\\"+q+"\\"}r=A.kp(r,p,"\\")
o=s&&o===1?r+"\\":r
return o.charCodeAt(0)==0?o:o},
rA(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=B.b.E(a,b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw A.d(A.a7("Invalid URL encoding",null))}}return s},
mO(a,b,c,d,e){var s,r,q,p,o=b
while(!0){if(!(o<c)){s=!0
break}r=B.b.E(a,o)
if(r<=127)if(r!==37)q=!1
else q=!0
else q=!0
if(q){s=!1
break}++o}if(s){if(B.w!==d)q=!1
else q=!0
if(q)return B.b.A(a,b,c)
else p=new A.a8(B.b.A(a,b,c))}else{p=A.a([],t.t)
for(q=a.length,o=b;o<c;++o){r=B.b.E(a,o)
if(r>127)throw A.d(A.a7("Illegal percent encoding in URI",null))
if(r===37){if(o+3>q)throw A.d(A.a7("Truncated URI",null))
B.a.n(p,A.rA(a,o+1))
o+=2}else B.a.n(p,r)}}return d.dJ(0,p)},
oj(a){var s=a|32
return 97<=s&&s<=122},
o0(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.a([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=B.b.E(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.d(A.aA(k,a,r))}}if(q<0&&r>b)throw A.d(A.aA(k,a,r))
for(;p!==44;){B.a.n(j,r);++r
for(o=-1;r<s;++r){p=B.b.E(a,r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)B.a.n(j,o)
else{n=B.a.gp(j)
if(p!==44||r!==n+7||!B.b.ab(a,"base64",n+1))throw A.d(A.aA("Expecting '='",a,r))
break}}B.a.n(j,r)
m=r+1
if((j.length&1)===1)a=B.aT.o0(a,m,s)
else{l=A.oq(a,m,s,B.F,!0,!1)
if(l!=null)a=B.b.cc(a,m,s,l)}return new A.kx(a,j,c)},
rM(){var s,r,q,p,o,n,m="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",l=".",k=":",j="/",i="\\",h="?",g="#",f="/\\",e=A.a(new Array(22),t.bs)
for(s=0;s<22;++s)e[s]=new Uint8Array(96)
r=new A.lu(e)
q=new A.lv()
p=new A.lw()
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
oH(a,b,c,d,e){var s,r,q,p,o=$.pv()
for(s=b;s<c;++s){if(!(d>=0&&d<o.length))return A.c(o,d)
r=o[d]
q=B.b.E(a,s)^96
p=r[q>95?31:q]
d=p&31
B.a.u(e,p>>>5,s)}return d},
ob(a){if(a.b===7&&B.b.a_(a.a,"package")&&a.c<=0)return A.oJ(a.a,a.e,a.f)
return-1},
oJ(a,b,c){var s,r,q
for(s=b,r=0;s<c;++s){q=B.b.J(a,s)
if(q===47)return r!==0?s:-1
if(q===37||q===58)return-1
r|=q^46}return-1},
rK(a,b,c){var s,r,q,p,o,n,m
for(s=a.length,r=0,q=0;q<s;++q){p=B.b.E(a,q)
o=B.b.E(b,c+q)
n=p^o
if(n!==0){if(n===32){m=o|n
if(97<=m&&m<=122){r=32
continue}}return-1}}return r},
kX:function kX(){},
a2:function a2(){},
dB:function dB(a){this.a=a},
c8:function c8(){},
hc:function hc(){},
by:function by(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d7:function d7(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fZ:function fZ(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
hL:function hL(a){this.a=a},
eA:function eA(a){this.a=a},
dc:function dc(a){this.a=a},
fH:function fH(a){this.a=a},
hh:function hh(){},
es:function es(){},
fJ:function fJ(a){this.a=a},
i7:function i7(a){this.a=a},
dV:function dV(a,b,c){this.a=a
this.b=b
this.c=c},
j:function j(){},
S:function S(){},
bd:function bd(a,b,c){this.a=a
this.b=b
this.$ti=c},
al:function al(){},
E:function E(){},
ii:function ii(){},
hs:function hs(a){this.a=a},
hr:function hr(a){var _=this
_.a=a
_.c=_.b=0
_.d=-1},
a3:function a3(a){this.a=a},
ky:function ky(a){this.a=a},
kz:function kz(a){this.a=a},
kA:function kA(a,b){this.a=a
this.b=b},
eY:function eY(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.y=_.x=_.w=$},
kx:function kx(a,b,c){this.a=a
this.b=b
this.c=c},
lu:function lu(a){this.a=a},
lv:function lv(){},
lw:function lw(){},
bh:function bh(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
hZ:function hZ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.y=_.x=_.w=$},
qq(a){var s=new Path2D(a)
s.toString
return s},
kY(a,b,c,d,e){var s=A.oL(new A.kZ(c),t.fq),r=s!=null
if(r&&!0){t.Y.a(s)
if(r)J.py(a,b,s,!1)}return new A.eI(a,b,s,!1,e.h("eI<0>"))},
oL(a,b){var s=$.a9
if(s===B.l)return a
return s.mC(a,b)},
w:function w(){},
fq:function fq(){},
fs:function fs(){},
cm:function cm(){},
dF:function dF(){},
bz:function bz(){},
iY:function iY(){},
dL:function dL(){},
q:function q(){},
r:function r(){},
aP:function aP(){},
fR:function fR(){},
b3:function b3(){},
aZ:function aZ(){},
hj:function hj(){},
hu:function hu(){},
bv:function bv(){},
dh:function dh(){},
kQ:function kQ(a){this.a=a},
eF:function eF(){},
me:function me(a,b){this.a=a
this.$ti=b},
eH:function eH(){},
i3:function i3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
eI:function eI(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
kZ:function kZ(a){this.a=a},
p7(a,b,c){A.ir(c,t.p,"T","min")
return Math.min(c.a(a),c.a(b))},
p6(a,b,c){A.ir(c,t.p,"T","max")
return Math.max(c.a(a),c.a(b))},
ic:function ic(){this.b=this.a=0},
cB:function cB(a,b,c){this.a=a
this.b=b
this.$ti=c},
aB:function aB(a,b){this.a=a
this.$ti=b},
jA:function jA(a){this.a=a},
eJ:function eJ(a,b){this.a=a
this.b=null
this.$ti=b},
oz(a,b){var s,r,q,p,o,n,m=null
for(s=a.length,r=!b,q=m,p=0;p<s;++p){switch(B.b.E(a,p)){case 34:o=r?'\\"':m
break
case 39:o=b?"\\'":m
break
default:o=m}n=o==null
if(!n&&q==null)q=new A.a3(B.b.A(a,0,p))
if(q!=null)q.a+=n?a[p]:o}if(q==null)s=a
else{s=q.a
s=s.charCodeAt(0)==0?s:s}return s},
mx(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=a.length,r=0;r<s;++r){q=a[r]
p=A.aq(q.k(0,"value"))
o=p.length
if(e===o){for(n=d,m=!0,l=0;l<o;++l,n=j){k=B.b.E(p,l)
j=n+1
i=B.b.J(c,n)
if(m)if(i!==k){h=i>=65&&i<=90&&i+32===k
m=h}else m=!0
else m=!1
if(!m)break}if(m)return A.a4(q.k(0,b))}}return-1},
qV(a){var s,r
if(a===24)return"%"
else for(s=0;s<26;++s){r=B.a9[s]
if(A.a4(r.k(0,"unit"))===a)return A.ip(r.k(0,"value"))}return"<BAD UNIT>"},
nX(a){switch(a){case 0:return"ERROR"
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
nW(a){switch(a){case 641:case 642:case 643:case 644:case 645:case 646:case 647:case 648:case 649:case 650:case 651:case 652:case 653:case 654:case 655:case 656:case 600:case 601:case 602:case 603:case 604:case 605:case 606:case 607:case 608:case 609:case 610:case 612:case 613:case 614:case 615:case 617:return!0
default:return!1}},
hI(a){var s
if(!(a>=97&&a<=122))s=a>=65&&a<=90||a===95||a>=160||a===92
else s=!0
return s},
lg:function lg(a){this.a=a
this.c=null
this.d=$},
bf:function bf(a,b){this.a=a
this.b=b},
fV:function fV(a,b,c){this.c=a
this.a=b
this.b=c},
ks:function ks(a,b,c,d,e,f,g,h,i){var _=this
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
kt:function kt(){},
d0:function d0(a){this.b=a},
d_:function d_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jS:function jS(a,b,c){this.a=a
this.b=b
this.c=c},
qs(a,b){return new A.k8(b)},
k8:function k8(a){this.w=a},
bL:function bL(a,b){this.b=a
this.a=b},
ca:function ca(a){this.a=a},
hF:function hF(a){this.a=a},
ha:function ha(a){this.a=a},
hv:function hv(a,b){this.b=a
this.a=b},
c4:function c4(a,b){this.b=a
this.a=b},
ep:function ep(a,b,c){this.b=a
this.c=b
this.a=c},
aV:function aV(){},
cr:function cr(a,b){this.b=a
this.a=b},
h7:function h7(a,b,c){this.d=a
this.b=b
this.a=c},
fw:function fw(a,b,c,d){var _=this
_.d=a
_.e=b
_.b=c
_.a=d},
fU:function fU(a,b){this.b=a
this.a=b},
fD:function fD(a,b){this.b=a
this.a=b},
d5:function d5(a,b){this.b=a
this.a=b},
d6:function d6(a,b,c){this.d=a
this.b=b
this.a=c},
ej:function ej(a,b,c){this.f=a
this.b=b
this.a=c},
ho:function ho(a,b,c){this.d=a
this.b=b
this.a=c},
da:function da(a,b){this.b=a
this.a=b},
hb:function hb(a,b,c){this.d=a
this.b=b
this.a=c},
hg:function hg(a){this.a=a},
hf:function hf(a){this.a=a},
af:function af(a,b,c){this.c=a
this.d=b
this.a=c},
he:function he(a,b,c){this.c=a
this.d=b
this.a=c},
bg:function bg(){},
h3:function h3(a,b,c,d){var _=this
_.f=a
_.c=b
_.d=c
_.a=d},
hl:function hl(a,b,c){this.c=a
this.d=b
this.a=c},
fM:function fM(a,b,c){this.c=a
this.d=b
this.a=c},
fP:function fP(a,b,c){this.c=a
this.d=b
this.a=c},
fr:function fr(a,b,c,d){var _=this
_.f=a
_.c=b
_.d=c
_.a=d},
hG:function hG(a,b,c,d){var _=this
_.f=a
_.c=b
_.d=c
_.a=d},
fT:function fT(a,b,c,d){var _=this
_.f=a
_.c=b
_.d=c
_.a=d},
fS:function fS(a,b,c){this.c=a
this.d=b
this.a=c},
hq:function hq(a,b,c,d){var _=this
_.f=a
_.c=b
_.d=c
_.a=d},
fC:function fC(a,b,c,d){var _=this
_.f=a
_.c=b
_.d=c
_.a=d},
hp:function hp(a,b,c,d){var _=this
_.f=a
_.c=b
_.d=c
_.a=d},
hQ:function hQ(a,b,c,d){var _=this
_.f=a
_.c=b
_.d=c
_.a=d},
Q:function Q(){},
ak:function ak(){},
hR:function hR(){},
nt(){return new A.dK(A.aa(null,null,t.K,t.N))},
nu(a,b,c){return new A.fK(a,b,c,A.aa(null,null,t.K,t.N))},
mw(a){return new A.bQ(a,A.aa(null,null,t.K,t.N))},
md(a,b){return new A.U(b,a,A.aa(null,null,t.K,t.N))},
nr(a){return new A.fG(a,A.aa(null,null,t.K,t.N))},
az:function az(a,b,c){this.a=a
this.b=b
this.c=c},
ib:function ib(){},
lf:function lf(){},
i2:function i2(){},
ag:function ag(){},
dK:function dK(a){var _=this
_.a=null
_.b=a
_.d=_.c=$
_.e=null},
fK:function fK(a,b,c,d){var _=this
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
fG:function fG(a,b){var _=this
_.w=a
_.a=null
_.b=b
_.d=_.c=$
_.e=null},
ah:function ah(a,b){this.b=a
this.a=b},
fQ:function fQ(a){this.a=a},
j3:function j3(){},
i_:function i_(){},
i0:function i0(){},
i1:function i1(){},
i4:function i4(){},
i5:function i5(){},
i8:function i8(){},
jt:function jt(a,b,c,d){var _=this
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
a6:function a6(){},
k7:function k7(a){this.a=a},
k6:function k6(a){this.a=a},
bp:function bp(a,b){this.a=a
this.b=b},
fz:function fz(a,b){this.a=a
this.b=b},
dE:function dE(a,b){this.a=a
this.b=b},
fX:function fX(a,b){this.a=a
this.b=b},
fp:function fp(a,b){this.a=a
this.b=b},
cU:function cU(a,b){this.c=!1
this.a=a
this.b=b},
jx:function jx(a){this.a=a},
jw:function jw(a){this.a=a},
hE:function hE(a,b){this.a=a
this.b=b},
e3:function e3(a,b){this.a=a
this.b=b},
cW:function cW(a,b,c){var _=this
_.c=null
_.d=a
_.a=b
_.b=c},
jy:function jy(){},
dZ:function dZ(a,b){this.a=a
this.b=b},
e_:function e_(a,b){this.a=a
this.b=b},
cs:function cs(a,b){this.a=a
this.b=b},
e1:function e1(a,b){this.a=a
this.b=b},
cV:function cV(a,b){this.a=a
this.b=b},
e2:function e2(a,b){this.a=a
this.b=b},
fY:function fY(a,b){this.a=a
this.b=b},
fW:function fW(a,b){this.a=a
this.b=b},
fn:function fn(a,b){this.a=a
this.b=b},
e0:function e0(a,b){this.a=a
this.b=b},
fo:function fo(a,b){this.a=a
this.b=b},
fl:function fl(a,b){this.a=a
this.b=b},
fm:function fm(a,b){this.a=a
this.b=b},
aT:function aT(a,b,c){this.a=a
this.b=b
this.c=c},
qn(a){switch(a){case"http://www.w3.org/1999/xhtml":return"html"
case"http://www.w3.org/1998/Math/MathML":return"math"
case"http://www.w3.org/2000/svg":return"svg"
case"http://www.w3.org/1999/xlink":return"xlink"
case"http://www.w3.org/XML/1998/namespace":return"xml"
case"http://www.w3.org/2000/xmlns/":return"xmlns"
default:return null}},
a5(a){A.ip(a)
if(a==null)return!1
return A.n2(B.b.E(a,0))},
n2(a){switch(a){case 9:case 10:case 12:case 13:case 32:return!0}return!1},
aL(a){var s,r
if(a==null)return!1
s=B.b.E(a,0)
if(!(s>=97&&s<=122))r=s>=65&&s<=90
else r=!0
return r},
lX(a){var s
if(a==null)return!1
s=B.b.E(a,0)
return s>=48&&s<58},
p4(a){if(a==null)return!1
switch(B.b.E(a,0)){case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:case 65:case 66:case 67:case 68:case 69:case 70:case 97:case 98:case 99:case 100:case 101:case 102:return!0}return!1},
pJ(a){A.a4(a)
return a>=65&&a<=90?a+97-65:a},
kb:function kb(){},
fL:function fL(a){this.a=a},
hY:function hY(){},
mB(a){return new A.dj()},
j1:function j1(a){this.a=a
this.b=-1},
iT:function iT(a){this.a=a},
dj:function dj(){},
rY(a){if(1<=a&&a<=8)return!0
if(14<=a&&a<=31)return!0
if(127<=a&&a<=159)return!0
if(55296<=a&&a<=57343)return!0
if(64976<=a&&a<=65007)return!0
switch(a){case 11:case 65534:case 65535:case 131070:case 131071:case 196606:case 196607:case 262142:case 262143:case 327678:case 327679:case 393214:case 393215:case 458750:case 458751:case 524286:case 524287:case 589822:case 589823:case 655358:case 655359:case 720894:case 720895:case 786430:case 786431:case 851966:case 851967:case 917502:case 917503:case 983038:case 983039:case 1048574:case 1048575:case 1114110:case 1114111:return!0}return!1},
tm(a){var s=A.aw("[\t-\r -/:-@[-`{-~]")
if(a==null)return null
return B.cH.k(0,A.bj(a,s,"").toLowerCase())},
rN(a,b){switch(a){case"ascii":return new A.a8(B.aS.dJ(0,b))
case"utf-8":return new A.a8(B.w.dJ(0,b))
default:throw A.d(A.a7("Encoding "+a+" not supported",null))}},
js:function js(a,b,c,d){var _=this
_.a=a
_.b=!0
_.d=b
_.f=_.e=null
_.r=c
_.w=null
_.x=d
_.y=0},
aR:function aR(){},
nQ(a){switch(a){case"before":case"after":case"first-line":case"first-letter":return!0
default:return!1}},
qH(a){var s,r
for(;a!=null;){s=a.b.k(0,"lang")
if(s!=null)return s
r=a.a
a=r instanceof A.U?r:null}return null},
en:function en(){this.a=null},
kj:function kj(){},
kk:function kk(){},
ki:function ki(){},
kh:function kh(a){this.a=a},
aG(a,b,c,d){return new A.c6(b==null?A.aa(null,null,t.K,t.N):b,c,a,d)},
b_:function b_(){},
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
b6:function b6(){},
l:function l(a,b,c){var _=this
_.e=a
_.b=b
_.c=c
_.a=null},
F:function F(a,b){this.b=a
this.c=b
this.a=null},
cD:function cD(a,b){this.b=a
this.c=b
this.a=null},
cQ:function cQ(a,b){this.b=a
this.c=b
this.a=null},
dJ:function dJ(a){var _=this
_.c=_.b=null
_.d=""
_.e=a
_.a=null},
ev:function ev(){this.a=null
this.b=$},
lK:function lK(){},
lJ:function lJ(){},
dY:function dY(a,b,c,d,e,f,g,h){var _=this
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
ju:function ju(a){this.a=a},
jv:function jv(a){this.a=a},
t7(a,b){var s,r,q=a.a
if(q!==b.a)return!1
if(q===0)return!0
for(q=A.nB(a,a.r,A.z(a).c);q.q();){s=q.d
r=b.k(0,s)
if(r==null&&!b.aj(s))return!1
if(!J.T(a.k(0,s),r))return!1}return!0},
nY(a,b,c,d){var s,r,q,p,o=a.gak(a)
if(d==null)if(!o.gan(o)&&o.gp(o) instanceof A.bQ){s=t.oI.a(o.gp(o))
s.i9(0,b)
if(c!=null){r=c.a
q=s.e
s.e=r.es(0,A.bX(q.a,q.b).b,A.bX(r,c.c).b)}}else{r=A.mw(b)
r.e=c
o.n(0,r)}else{p=o.ah(o,d)
if(p>0){r=p-1
q=o.a
if(!(r<q.length))return A.c(q,r)
r=q[r] instanceof A.bQ}else r=!1
if(r){r=p-1
q=o.a
if(!(r>=0&&r<q.length))return A.c(q,r)
t.oI.a(q[r]).i9(0,b)}else{r=A.mw(b)
r.e=c
o.bD(0,p,r)}}},
fk:function fk(a){this.a=a},
ku:function ku(a,b,c){var _=this
_.a=a
_.b=$
_.c=b
_.d=c
_.f=_.e=null
_.r=!1},
n6(a,b,c,d){var s
if(c==null)c=a.length
if(c<b)c=b
s=a.length
return B.a.b8(a,b,c>s?s:c)},
mU(a){var s,r
for(s=a.length,r=0;r<s;++r)if(!A.n2(B.b.E(a,r)))return!1
return!0},
p8(a,b){var s,r=a.length
if(r===b)return a
b-=r
for(s=0,r="";s<b;++s)r+="0"
r+=a
return r.charCodeAt(0)==0?r:r},
tw(a,b){var s={}
s.a=a
if(b==null)return a
b.ba(0,new A.lM(s))
return s.a},
o:function o(a,b,c){this.a=a
this.b=b
this.$ti=c},
lM:function lM(a){this.a=a},
iP:function iP(a){var _=this
_.c=14.222222222222221
_.d=8
_.f=a
_.r=$},
iQ:function iQ(){},
iR:function iR(){},
dx:function dx(){},
fj:function fj(){},
iy:function iy(a){this.a=a},
iz:function iz(a){this.a=a},
iA:function iA(a){this.a=a},
fA:function fA(a,b,c,d,e,f,g,h){var _=this
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
ms(a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a9.aZ,a5=a9.dO,a6=A.h(a9.iG,!0,t.W),a7=a9.nt,a8=a9.fc
if(a8!=null){s=A.v(a8)
s=A.h(new A.H(a8,s.h("at(1)").a(new A.k2()),s.h("H<1,at>")),!0,t.f)
a8=s}else a8=a3
s=a9.fd
if(s!=null){r=A.v(s)
r=A.h(new A.H(s,r.h("at(1)").a(new A.k3()),r.h("H<1,at>")),!0,t.f)
s=r}else s=a3
r=a9.a4
q=a9.a9
A.aD(a3,0,B.c,a3,0)
p=a9.fx
o=a9.fy
n=A.bE(a9.go)
m=a9.id
m=m==null?a3:A.ar(m)
l=a9.k1
l=l==null?a3:A.ar(l)
k=a9.ax
k=k==null?a3:J.p(k,new A.a_(),t.G)
if(k==null)k=A.a([],t.O)
j=t.G
k=A.h(k,!0,j)
i=a9.ay
i=i==null?a3:J.p(i,new A.a0(),j)
i=A.h(i==null?A.a([],t.O):i,!0,j)
h=a9.ch
h=h==null?a3:J.p(h,new A.a1(),j)
j=A.h(h==null?A.a([],t.O):h,!0,j)
h=a9.w
g=a9.x
f=a9.a
f===$&&A.b("color")
f=f.t()
e=a9.b
e===$&&A.b("name")
a9.c===$&&A.b("target")
d=A.a([],t.r)
c=a9.d
c===$&&A.b("submobjects")
b=c.length
a=0
for(;a<c.length;c.length===b||(0,A.e)(c),++a)d.push(c[a].t())
c=a9.f
c===$&&A.b("updatingSuspended")
b=A.a([],t.l)
a0=a9.r
a0===$&&A.b("points")
a1=a0.length
a=0
for(;a<a0.length;a0.length===a1||(0,A.e)(a0),++a){a2=a0[a]
b.push(new A.f(a2.a,a2.b,a2.c))}return new A.d2(a9.c5,a4,a9.cv,!0,a9.c6,a9.iF,a5,a6,!1,a9.nq,a9.iH,a9.nr,a9.ns,new A.f(a7.a,a7.b,a7.c),a9.nu,!0,a9.nv,a9.nw,a9.nx,a9.ny,a8,s,a9.y2,a9.Y,r,q,p,new A.f(o.a,o.b,o.c),n,m,l,h,g,a9.y,a9.z,!1,a9.as,a9.at,k,i,j,f,e,a3,d,c,b)},
mb(a,b,c,d,e,f){var s,r=null,q=new A.dD(B.e,a,B.J,d,c,b,f,e,4,0,!1,0.01,!1,0.000001,4,r,r,r,B.c,$,r,$,$,$)
q.af(B.c,r,r)
q.ha(r)
q.c4=q.it(c,b,B.J.fl(B.J))
s=q.it(f,e,d.fl(B.aQ))
q.cu=s
s.e5(0,-1.5707963267948966,B.e,B.k)
q.fb=A.mA(A.a([q.c4,q.cu],t.Z))
q.aX(t.a.a(A.a([q.c4,q.cu],t.r)))
q.aQ(B.e)
return q},
pL(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a0.nn,d=A.mc(a0.iE),c=A.mc(a0.no),b=A.mc(a0.np),a=a0.ax
a=a==null?f:J.p(a,new A.a_(),t.G)
if(a==null)a=A.a([],t.O)
s=t.G
a=A.h(a,!0,s)
r=a0.ay
r=r==null?f:J.p(r,new A.a0(),s)
r=A.h(r==null?A.a([],t.O):r,!0,s)
q=a0.ch
q=q==null?f:J.p(q,new A.a1(),s)
s=A.h(q==null?A.a([],t.O):q,!0,s)
q=a0.w
p=a0.x
o=a0.a
o===$&&A.b("color")
o=o.t()
n=a0.b
n===$&&A.b("name")
a0.c===$&&A.b("target")
m=A.a([],t.r)
l=a0.d
l===$&&A.b("submobjects")
k=l.length
j=0
for(;j<l.length;l.length===k||(0,A.e)(l),++j)m.push(l[j].t())
l=a0.f
l===$&&A.b("updatingSuspended")
k=A.a([],t.l)
i=a0.r
i===$&&A.b("points")
h=i.length
j=0
for(;j<i.length;i.length===h||(0,A.e)(i),++j){g=i[j]
k.push(new A.f(g.a,g.b,g.c))}e=new A.dD(new A.f(e.a,e.b,e.c),d,c,b,a0.to,a0.x1,a0.x2,a0.xr,q,p,a0.y,a0.z,!1,a0.as,a0.at,a,r,s,o,n,f,m,l,k)
d=a0.c4
d===$&&A.b("xAxis")
d=A.ms(d)
e.c4=d
c=a0.cu
c===$&&A.b("yAxis")
c=A.ms(c)
e.cu=c
e.fb=A.mA(A.a([d,c],t.Z))
return e},
cN(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0){return new A.aM(a,f,c,g,a0,e,q,p,h,n,d,m,j,k,l,i,s,r,b,o)},
mc(a){return new A.aM(a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.w,a.x,a.y,a.z,a.Q,a.as,a.at,a.ax,a.ay,a.ch,a.CW,a.cx,a.cy)},
d2:function d2(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7){var _=this
_.c5=a
_.aZ=b
_.cv=c
_.cw=d
_.c6=e
_.iF=f
_.dO=g
_.iG=h
_.p5=i
_.nq=j
_.iH=k
_.nr=l
_.ns=m
_.nt=n
_.nu=o
_.p6=p
_.nv=q
_.nw=r
_.nx=s
_.ny=a0
_.fc=a1
_.fd=a2
_.y2=a3
_.Y=a4
_.a4=a5
_.a9=a6
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
k2:function k2(){},
k3:function k3(){},
fI:function fI(){},
iX:function iX(a){this.a=a},
dD:function dD(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4){var _=this
_.nn=a
_.iE=b
_.no=c
_.np=d
_.fb=_.cu=_.c4=$
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
iO:function iO(){},
aM:function aM(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0){var _=this
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
qp(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=A.h(a.k1,!0,t.W),d=a.ax
d=d==null?f:J.p(d,new A.a_(),t.G)
if(d==null)d=A.a([],t.O)
s=t.G
d=A.h(d,!0,s)
r=a.ay
r=r==null?f:J.p(r,new A.a0(),s)
r=A.h(r==null?A.a([],t.O):r,!0,s)
q=a.ch
q=q==null?f:J.p(q,new A.a1(),s)
s=A.h(q==null?A.a([],t.O):q,!0,s)
q=a.w
p=a.x
o=a.a
o===$&&A.b("color")
o=o.t()
n=a.b
n===$&&A.b("name")
a.c===$&&A.b("target")
m=A.a([],t.r)
l=a.d
l===$&&A.b("submobjects")
k=l.length
j=0
for(;j<l.length;l.length===k||(0,A.e)(l),++j)m.push(l[j].t())
l=a.f
l===$&&A.b("updatingSuspended")
k=A.a([],t.l)
i=a.r
i===$&&A.b("points")
h=i.length
j=0
for(;j<i.length;i.length===h||(0,A.e)(i),++j){g=i[j]
k.push(new A.f(g.a,g.b,g.c))}return new A.ei(a.fx,a.fy,a.go,a.id,e,a.k2,q,p,a.y,a.z,!1,a.as,a.at,d,r,s,o,n,f,m,l,k)},
q1(a,b,c,d,e,f,g){var s=null,r=new A.dW(d,e,g,f,c,b,new A.j4(d),4,0,!1,0.01,!1,0.000001,4,s,s,s,a,$,s,$,$,$)
r.af(a,s,s)
r.fU(B.p)
return r},
q2(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=A.h(a.k1,!0,t.W),d=a.ax
d=d==null?f:J.p(d,new A.a_(),t.G)
if(d==null)d=A.a([],t.O)
s=t.G
d=A.h(d,!0,s)
r=a.ay
r=r==null?f:J.p(r,new A.a0(),s)
r=A.h(r==null?A.a([],t.O):r,!0,s)
q=a.ch
q=q==null?f:J.p(q,new A.a1(),s)
s=A.h(q==null?A.a([],t.O):q,!0,s)
q=a.w
p=a.x
o=a.a
o===$&&A.b("color")
o=o.t()
n=a.b
n===$&&A.b("name")
a.c===$&&A.b("target")
m=A.a([],t.r)
l=a.d
l===$&&A.b("submobjects")
k=l.length
j=0
for(;j<l.length;l.length===k||(0,A.e)(l),++j)m.push(l[j].t())
l=a.f
l===$&&A.b("updatingSuspended")
k=A.a([],t.l)
i=a.r
i===$&&A.b("points")
h=i.length
j=0
for(;j<i.length;i.length===h||(0,A.e)(i),++j){g=i[j]
k.push(new A.f(g.a,g.b,g.c))}return new A.dW(a.Y,a.fx,a.fy,a.go,a.id,e,a.k2,q,p,a.y,a.z,!1,a.as,a.at,d,r,s,o,n,f,m,l,k)},
ei:function ei(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2){var _=this
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
k4:function k4(a){this.a=a},
dW:function dW(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3){var _=this
_.Y=a
_.fx=b
_.fy=c
_.go=d
_.id=e
_.k1=f
_.k2=g
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
_.a=r
_.b=s
_.c=a0
_.d=a1
_.e=$
_.f=a2
_.r=a3},
j4:function j4(a){this.a=a},
aD(a,b,c,d,e){var s=t.O,r=A.a([c],s),q=d!=null?A.a([d],s):A.a([],s)
return new A.ey(r,q,e,a!=null?A.a([a],s):A.a([],s),b)},
bE(a){var s,r,q,p,o=a.a
if(o!=null){s=A.a([],t.O)
for(o=J.ab(o);o.q();){r=o.gC()
s.push(new A.O(r.a,r.b,r.c,r.d))}o=s}else o=null
s=a.b
if(s!=null){r=A.a([],t.O)
for(s=J.ab(s);s.q();){q=s.gC()
r.push(new A.O(q.a,q.b,q.c,q.d))}s=r}else s=null
r=a.d
if(r!=null){q=A.a([],t.O)
for(r=J.ab(r);r.q();){p=r.gC()
q.push(new A.O(p.a,p.b,p.c,p.d))}r=q}else r=null
return new A.ey(o,s,a.c,r,a.e)},
qU(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=null
A.aD(a1,0,B.c,a1,0)
s=a2.fx
r=a2.fy
q=A.bE(a2.go)
p=a2.id
p=p==null?a1:A.ar(p)
o=a2.k1
o=o==null?a1:A.ar(o)
n=a2.ax
n=n==null?a1:J.p(n,new A.a_(),t.G)
if(n==null)n=A.a([],t.O)
m=t.G
n=A.h(n,!0,m)
l=a2.ay
l=l==null?a1:J.p(l,new A.a0(),m)
l=A.h(l==null?A.a([],t.O):l,!0,m)
k=a2.ch
k=k==null?a1:J.p(k,new A.a1(),m)
m=A.h(k==null?A.a([],t.O):k,!0,m)
k=a2.w
j=a2.x
i=a2.gdG()
h=a2.a
h===$&&A.b("color")
h=h.t()
g=a2.b
g===$&&A.b("name")
a2.c===$&&A.b("target")
f=A.a([],t.r)
e=a2.d
e===$&&A.b("submobjects")
d=e.length
c=0
for(;c<e.length;e.length===d||(0,A.e)(e),++c)f.push(e[c].t())
e=a2.f
e===$&&A.b("updatingSuspended")
d=A.a([],t.l)
b=a2.r
b===$&&A.b("points")
a=b.length
c=0
for(;c<b.length;b.length===a||(0,A.e)(b),++c){a0=b[c]
d.push(new A.f(a0.a,a0.b,a0.c))}return new A.de(s,new A.f(r.a,r.b,r.c),q,p,o,k,j,i,a2.z,!1,a2.as,a2.at,n,l,m,h,g,a1,f,e,d)},
pG(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=null
A.aD(a1,0,B.c,a1,0)
s=a2.fx
r=a2.fy
q=A.bE(a2.go)
p=a2.id
p=p==null?a1:A.ar(p)
o=a2.k1
o=o==null?a1:A.ar(o)
n=a2.ax
n=n==null?a1:J.p(n,new A.a_(),t.G)
if(n==null)n=A.a([],t.O)
m=t.G
n=A.h(n,!0,m)
l=a2.ay
l=l==null?a1:J.p(l,new A.a0(),m)
l=A.h(l==null?A.a([],t.O):l,!0,m)
k=a2.ch
k=k==null?a1:J.p(k,new A.a1(),m)
m=A.h(k==null?A.a([],t.O):k,!0,m)
k=a2.w
j=a2.x
i=a2.gdG()
h=a2.a
h===$&&A.b("color")
h=h.t()
g=a2.b
g===$&&A.b("name")
a2.c===$&&A.b("target")
f=A.a([],t.r)
e=a2.d
e===$&&A.b("submobjects")
d=e.length
c=0
for(;c<e.length;e.length===d||(0,A.e)(e),++c)f.push(e[c].t())
e=a2.f
e===$&&A.b("updatingSuspended")
d=A.a([],t.l)
b=a2.r
b===$&&A.b("points")
a=b.length
c=0
for(;c<b.length;b.length===a||(0,A.e)(b),++c){a0=b[c]
d.push(new A.f(a0.a,a0.b,a0.c))}return new A.dz(a2.y2,a2.Y,a2.a4,a2.a9,a2.bi,s,new A.f(r.a,r.b,r.c),q,p,o,k,j,i,a2.z,!1,a2.as,a2.at,n,l,m,h,g,a1,f,e,d)},
pH(a,b,c){var s=null,r=new A.cl(0,a,1,B.e,9,0.35,B.k,A.aD(s,0,B.c,s,0),s,s,4,0,!1,0.01,!1,0.000001,4,s,s,s,B.c,$,s,$,$,$)
r.af(B.c,s,s)
r.aK(B.c)
if(a===0)r.eo(A.a([B.n,B.j],t.l))
r.cF(c,b)
return r},
pI(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=null
A.aD(a0,0,B.c,a0,0)
s=a1.fx
r=a1.fy
q=A.bE(a1.go)
p=a1.id
p=p==null?a0:A.ar(p)
o=a1.k1
o=o==null?a0:A.ar(o)
n=a1.ax
n=n==null?a0:J.p(n,new A.a_(),t.G)
if(n==null)n=A.a([],t.O)
m=t.G
n=A.h(n,!0,m)
l=a1.ay
l=l==null?a0:J.p(l,new A.a0(),m)
l=A.h(l==null?A.a([],t.O):l,!0,m)
k=a1.ch
k=k==null?a0:J.p(k,new A.a1(),m)
m=A.h(k==null?A.a([],t.O):k,!0,m)
k=a1.w
j=a1.x
i=a1.a
i===$&&A.b("color")
i=i.t()
h=a1.b
h===$&&A.b("name")
a1.c===$&&A.b("target")
g=A.a([],t.r)
f=a1.d
f===$&&A.b("submobjects")
e=f.length
d=0
for(;d<f.length;f.length===e||(0,A.e)(f),++d)g.push(f[d].t())
f=a1.f
f===$&&A.b("updatingSuspended")
e=A.a([],t.l)
c=a1.r
c===$&&A.b("points")
b=c.length
d=0
for(;d<c.length;c.length===b||(0,A.e)(c),++d){a=c[d]
e.push(new A.f(a.a,a.b,a.c))}return new A.cl(a1.y2,a1.Y,a1.a4,a1.a9,a1.bi,s,new A.f(r.a,r.b,r.c),q,p,o,k,j,a1.y,a1.z,!1,a1.as,a1.at,n,l,m,i,h,a0,g,f,e)},
pP(a,b,c){var s=null,r=new A.cP(0,6.283185307179586,c,a,9,0.35,B.k,A.aD(s,0,B.c,s,0),s,s,4,0,!1,0.01,!1,0.000001,4,s,s,s,B.c,$,s,$,$,$)
r.af(B.c,s,s)
r.aK(b)
return r},
pQ(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=null
A.aD(a0,0,B.c,a0,0)
s=a1.fx
r=a1.fy
q=A.bE(a1.go)
p=a1.id
p=p==null?a0:A.ar(p)
o=a1.k1
o=o==null?a0:A.ar(o)
n=a1.ax
n=n==null?a0:J.p(n,new A.a_(),t.G)
if(n==null)n=A.a([],t.O)
m=t.G
n=A.h(n,!0,m)
l=a1.ay
l=l==null?a0:J.p(l,new A.a0(),m)
l=A.h(l==null?A.a([],t.O):l,!0,m)
k=a1.ch
k=k==null?a0:J.p(k,new A.a1(),m)
m=A.h(k==null?A.a([],t.O):k,!0,m)
k=a1.w
j=a1.x
i=a1.a
i===$&&A.b("color")
i=i.t()
h=a1.b
h===$&&A.b("name")
a1.c===$&&A.b("target")
g=A.a([],t.r)
f=a1.d
f===$&&A.b("submobjects")
e=f.length
d=0
for(;d<f.length;f.length===e||(0,A.e)(f),++d)g.push(f[d].t())
f=a1.f
f===$&&A.b("updatingSuspended")
e=A.a([],t.l)
c=a1.r
c===$&&A.b("points")
b=c.length
d=0
for(;d<c.length;c.length===b||(0,A.e)(c),++d){a=c[d]
e.push(new A.f(a.a,a.b,a.c))}return new A.cP(a1.y2,a1.Y,a1.a4,a1.a9,a1.bi,s,new A.f(r.a,r.b,r.c),q,p,o,k,j,!0,a1.z,!1,a1.as,a1.at,n,l,m,i,h,a0,g,f,e)},
cq(a,b){var s=null,r=new A.dM(0,6.283185307179586,0.08,a,9,0.35,B.k,A.aD(s,0,B.c,s,0),s,s,4,0,!1,0.01,!1,0.000001,4,s,s,s,B.c,$,s,$,$,$)
r.af(B.c,s,s)
r.aK(b)
return r},
nv(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=null
A.aD(a0,0,B.c,a0,0)
s=a1.fx
r=a1.fy
q=A.bE(a1.go)
p=a1.id
p=p==null?a0:A.ar(p)
o=a1.k1
o=o==null?a0:A.ar(o)
n=a1.ax
n=n==null?a0:J.p(n,new A.a_(),t.G)
if(n==null)n=A.a([],t.O)
m=t.G
n=A.h(n,!0,m)
l=a1.ay
l=l==null?a0:J.p(l,new A.a0(),m)
l=A.h(l==null?A.a([],t.O):l,!0,m)
k=a1.ch
k=k==null?a0:J.p(k,new A.a1(),m)
m=A.h(k==null?A.a([],t.O):k,!0,m)
k=a1.w
j=a1.x
i=a1.a
i===$&&A.b("color")
i=i.t()
h=a1.b
h===$&&A.b("name")
a1.c===$&&A.b("target")
g=A.a([],t.r)
f=a1.d
f===$&&A.b("submobjects")
e=f.length
d=0
for(;d<f.length;f.length===e||(0,A.e)(f),++d)g.push(f[d].t())
f=a1.f
f===$&&A.b("updatingSuspended")
e=A.a([],t.l)
c=a1.r
c===$&&A.b("points")
b=c.length
d=0
for(;d<c.length;c.length===b||(0,A.e)(c),++d){a=c[d]
e.push(new A.f(a.a,a.b,a.c))}return new A.dM(a1.y2,a1.Y,a1.a4,a1.a9,a1.bi,s,new A.f(r.a,r.b,r.c),q,p,o,k,j,!0,a1.z,!1,a1.as,a1.at,n,l,m,i,h,a0,g,f,e)},
pZ(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=null
A.aD(a0,0,B.c,a0,0)
s=a1.fx
r=a1.fy
q=A.bE(a1.go)
p=a1.id
p=p==null?a0:A.ar(p)
o=a1.k1
o=o==null?a0:A.ar(o)
n=a1.ax
n=n==null?a0:J.p(n,new A.a_(),t.G)
if(n==null)n=A.a([],t.O)
m=t.G
n=A.h(n,!0,m)
l=a1.ay
l=l==null?a0:J.p(l,new A.a0(),m)
l=A.h(l==null?A.a([],t.O):l,!0,m)
k=a1.ch
k=k==null?a0:J.p(k,new A.a1(),m)
m=A.h(k==null?A.a([],t.O):k,!0,m)
k=a1.w
j=a1.x
i=a1.a
i===$&&A.b("color")
i=i.t()
h=a1.b
h===$&&A.b("name")
a1.c===$&&A.b("target")
g=A.a([],t.r)
f=a1.d
f===$&&A.b("submobjects")
e=f.length
d=0
for(;d<f.length;f.length===e||(0,A.e)(f),++d)g.push(f[d].t())
f=a1.f
f===$&&A.b("updatingSuspended")
e=A.a([],t.l)
c=a1.r
c===$&&A.b("points")
b=c.length
d=0
for(;d<c.length;c.length===b||(0,A.e)(c),++d){a=c[d]
e.push(new A.f(a.a,a.b,a.c))}return new A.dP(a1.y2,a1.Y,a1.a4,a1.a9,a1.bi,s,new A.f(r.a,r.b,r.c),q,p,o,k,j,!0,a1.z,!1,a1.as,a1.at,n,l,m,i,h,a0,g,f,e)},
nA(a,b,c,d,e){var s=null,r=new A.at(a,d,e,c,0.35,B.k,A.aD(s,0,B.c,s,0),s,s,4,0,!1,0.01,!1,0.000001,4,s,s,s,B.c,$,s,$,$,$)
r.af(B.c,s,s)
r.aK(b)
return r},
qg(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=null,a1=a3.a4,a2=a3.a9
A.aD(a0,0,B.c,a0,0)
s=a3.fx
r=a3.fy
q=A.bE(a3.go)
p=a3.id
p=p==null?a0:A.ar(p)
o=a3.k1
o=o==null?a0:A.ar(o)
n=a3.ax
n=n==null?a0:J.p(n,new A.a_(),t.G)
if(n==null)n=A.a([],t.O)
m=t.G
n=A.h(n,!0,m)
l=a3.ay
l=l==null?a0:J.p(l,new A.a0(),m)
l=A.h(l==null?A.a([],t.O):l,!0,m)
k=a3.ch
k=k==null?a0:J.p(k,new A.a1(),m)
m=A.h(k==null?A.a([],t.O):k,!0,m)
k=a3.w
j=a3.x
i=a3.a
i===$&&A.b("color")
i=i.t()
h=a3.b
h===$&&A.b("name")
a3.c===$&&A.b("target")
g=A.a([],t.r)
f=a3.d
f===$&&A.b("submobjects")
e=f.length
d=0
for(;d<f.length;f.length===e||(0,A.e)(f),++d)g.push(f[d].t())
f=a3.f
f===$&&A.b("updatingSuspended")
e=A.a([],t.l)
c=a3.r
c===$&&A.b("points")
b=c.length
d=0
for(;d<c.length;c.length===b||(0,A.e)(c),++d){a=c[d]
e.push(new A.f(a.a,a.b,a.c))}return new A.at(a3.y2,a3.Y,a1,a2,s,new A.f(r.a,r.b,r.c),q,p,o,k,j,a3.y,a3.z,!1,a3.as,a3.at,n,l,m,i,h,a0,g,f,e)},
ns(a,b,c){var s,r,q,p=null,o=new A.dH(0.05,p,0.5,0,p,c,b,0.35,B.k,A.aD(p,0,B.c,p,0),p,p,4,0,!1,0.01,!1,0.000001,4,p,p,p,B.c,$,p,$,$,$)
o.af(B.c,p,p)
o.aK(a)
s=o.jv()
r=new A.dI(4,0,!1,0.01,!1,0.000001,4,p,p,p,B.c,$,p,$,$,$)
r.af(B.c,p,p)
r.l9(o,B.c,s,0.5)
o.saR(t.y.a(A.a([],t.l)))
q=r.d
q===$&&A.b("submobjects")
o.aX(t.a.a(q))
return o},
pW(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=null,a1=a3.a4,a2=a3.a9
A.aD(a0,0,B.c,a0,0)
s=a3.fx
r=a3.fy
q=A.bE(a3.go)
p=a3.id
p=p==null?a0:A.ar(p)
o=a3.k1
o=o==null?a0:A.ar(o)
n=a3.ax
n=n==null?a0:J.p(n,new A.a_(),t.G)
if(n==null)n=A.a([],t.O)
m=t.G
n=A.h(n,!0,m)
l=a3.ay
l=l==null?a0:J.p(l,new A.a0(),m)
l=A.h(l==null?A.a([],t.O):l,!0,m)
k=a3.ch
k=k==null?a0:J.p(k,new A.a1(),m)
m=A.h(k==null?A.a([],t.O):k,!0,m)
k=a3.w
j=a3.x
i=a3.a
i===$&&A.b("color")
i=i.t()
h=a3.b
h===$&&A.b("name")
a3.c===$&&A.b("target")
g=A.a([],t.r)
f=a3.d
f===$&&A.b("submobjects")
e=f.length
d=0
for(;d<f.length;f.length===e||(0,A.e)(f),++d)g.push(f[d].t())
f=a3.f
f===$&&A.b("updatingSuspended")
e=A.a([],t.l)
c=a3.r
c===$&&A.b("points")
b=c.length
d=0
for(;d<c.length;c.length===b||(0,A.e)(c),++d){a=c[d]
e.push(new A.f(a.a,a.b,a.c))}return new A.dH(a3.c5,a3.aZ,a3.cv,a3.y2,a3.Y,a1,a2,s,new A.f(r.a,r.b,r.c),q,p,o,k,j,a3.y,a3.z,!1,a3.as,a3.at,n,l,m,i,h,a0,g,f,e)},
nV(a,b,c,d){var s=null,r=new A.ew(0,s,a.cC(Math.min(1,Math.max(b-0.000001,0))),a.cC(Math.min(1,Math.max(b+0.000001,0))),0.35,B.k,A.aD(s,0,B.c,s,0),s,s,4,0,!1,0.01,!1,0.000001,4,s,s,s,B.c,$,s,$,$,$)
r.af(B.c,s,s)
r.aK(c)
r.cL(d/Math.sqrt(r.aF().M(0,r.aw()).b4()))
return r},
qS(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=null,a1=a3.a4,a2=a3.a9
A.aD(a0,0,B.c,a0,0)
s=a3.fx
r=a3.fy
q=A.bE(a3.go)
p=a3.id
p=p==null?a0:A.ar(p)
o=a3.k1
o=o==null?a0:A.ar(o)
n=a3.ax
n=n==null?a0:J.p(n,new A.a_(),t.G)
if(n==null)n=A.a([],t.O)
m=t.G
n=A.h(n,!0,m)
l=a3.ay
l=l==null?a0:J.p(l,new A.a0(),m)
l=A.h(l==null?A.a([],t.O):l,!0,m)
k=a3.ch
k=k==null?a0:J.p(k,new A.a1(),m)
m=A.h(k==null?A.a([],t.O):k,!0,m)
k=a3.w
j=a3.x
i=a3.a
i===$&&A.b("color")
i=i.t()
h=a3.b
h===$&&A.b("name")
a3.c===$&&A.b("target")
g=A.a([],t.r)
f=a3.d
f===$&&A.b("submobjects")
e=f.length
d=0
for(;d<f.length;f.length===e||(0,A.e)(f),++d)g.push(f[d].t())
f=a3.f
f===$&&A.b("updatingSuspended")
e=A.a([],t.l)
c=a3.r
c===$&&A.b("points")
b=c.length
d=0
for(;d<c.length;c.length===b||(0,A.e)(c),++d){a=c[d]
e.push(new A.f(a.a,a.b,a.c))}return new A.ew(a3.y2,a3.Y,a1,a2,s,new A.f(r.a,r.b,r.c),q,p,o,k,j,a3.y,a3.z,!1,a3.as,a3.at,n,l,m,i,h,a0,g,f,e)},
nG(a,b){var s=null,r=new A.bq(4,0,!1,0.01,!1,0.000001,4,s,s,s,b,$,s,$,$,$)
r.af(b,s,s)
r.dk(a,b)
return r},
qr(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.ax
e=e==null?f:J.p(e,new A.a_(),t.G)
if(e==null)e=A.a([],t.O)
s=t.G
e=A.h(e,!0,s)
r=a.ay
r=r==null?f:J.p(r,new A.a0(),s)
r=A.h(r==null?A.a([],t.O):r,!0,s)
q=a.ch
q=q==null?f:J.p(q,new A.a1(),s)
s=A.h(q==null?A.a([],t.O):q,!0,s)
q=a.gaG()
p=a.x
o=a.a
o===$&&A.b("color")
o=o.t()
n=a.b
n===$&&A.b("name")
a.c===$&&A.b("target")
m=A.a([],t.r)
l=a.d
l===$&&A.b("submobjects")
k=l.length
j=0
for(;j<l.length;l.length===k||(0,A.e)(l),++j)m.push(l[j].t())
l=a.f
l===$&&A.b("updatingSuspended")
k=A.a([],t.l)
i=a.r
i===$&&A.b("points")
h=i.length
j=0
for(;j<i.length;i.length===h||(0,A.e)(i),++j){g=i[j]
k.push(new A.f(g.a,g.b,g.c))}return new A.bq(q,p,a.y,a.z,!1,a.as,a.at,e,r,s,o,n,f,m,l,k)},
qB(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.ax
e=e==null?f:J.p(e,new A.a_(),t.G)
if(e==null)e=A.a([],t.O)
s=t.G
e=A.h(e,!0,s)
r=a.ay
r=r==null?f:J.p(r,new A.a0(),s)
r=A.h(r==null?A.a([],t.O):r,!0,s)
q=a.ch
q=q==null?f:J.p(q,new A.a1(),s)
s=A.h(q==null?A.a([],t.O):q,!0,s)
q=a.gaG()
p=a.x
o=a.a
o===$&&A.b("color")
o=o.t()
n=a.b
n===$&&A.b("name")
a.c===$&&A.b("target")
m=A.a([],t.r)
l=a.d
l===$&&A.b("submobjects")
k=l.length
j=0
for(;j<l.length;l.length===k||(0,A.e)(l),++j)m.push(l[j].t())
l=a.f
l===$&&A.b("updatingSuspended")
k=A.a([],t.l)
i=a.r
i===$&&A.b("points")
h=i.length
j=0
for(;j<i.length;i.length===h||(0,A.e)(i),++j){g=i[j]
k.push(new A.f(g.a,g.b,g.c))}return new A.ek(q,p,a.y,a.z,!1,a.as,a.at,e,r,s,o,n,f,m,l,k)},
qW(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.ax
e=e==null?f:J.p(e,new A.a_(),t.G)
if(e==null)e=A.a([],t.O)
s=t.G
e=A.h(e,!0,s)
r=a.ay
r=r==null?f:J.p(r,new A.a0(),s)
r=A.h(r==null?A.a([],t.O):r,!0,s)
q=a.ch
q=q==null?f:J.p(q,new A.a1(),s)
s=A.h(q==null?A.a([],t.O):q,!0,s)
q=a.gaG()
p=a.x
o=a.a
o===$&&A.b("color")
o=o.t()
n=a.b
n===$&&A.b("name")
a.c===$&&A.b("target")
m=A.a([],t.r)
l=a.d
l===$&&A.b("submobjects")
k=l.length
j=0
for(;j<l.length;l.length===k||(0,A.e)(l),++j)m.push(l[j].t())
l=a.f
l===$&&A.b("updatingSuspended")
k=A.a([],t.l)
i=a.r
i===$&&A.b("points")
h=i.length
j=0
for(;j<i.length;i.length===h||(0,A.e)(i),++j){g=i[j]
k.push(new A.f(g.a,g.b,g.c))}return new A.ez(q,p,a.y,a.z,!1,a.as,a.at,e,r,s,o,n,f,m,l,k)},
ar(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.ax
e=e==null?f:J.p(e,new A.a_(),t.G)
if(e==null)e=A.a([],t.O)
s=t.G
e=A.h(e,!0,s)
r=a.ay
r=r==null?f:J.p(r,new A.a0(),s)
r=A.h(r==null?A.a([],t.O):r,!0,s)
q=a.ch
q=q==null?f:J.p(q,new A.a1(),s)
s=A.h(q==null?A.a([],t.O):q,!0,s)
q=a.cw
p=a.x
o=a.a
o===$&&A.b("color")
o=o.t()
n=a.b
n===$&&A.b("name")
a.c===$&&A.b("target")
m=A.a([],t.r)
l=a.d
l===$&&A.b("submobjects")
k=l.length
j=0
for(;j<l.length;l.length===k||(0,A.e)(l),++j)m.push(l[j].t())
l=a.f
l===$&&A.b("updatingSuspended")
k=A.a([],t.l)
i=a.r
i===$&&A.b("points")
h=i.length
j=0
for(;j<i.length;i.length===h||(0,A.e)(i),++j){g=i[j]
k.push(new A.f(g.a,g.b,g.c))}return new A.dA(q,p,a.y,a.z,!1,a.as,a.at,e,r,s,o,n,f,m,l,k)},
qz(a,b,c){var s=null,r=A.a([B.a_,B.aA,B.aB,B.aC],t.l),q=new A.d8(4,0,!1,0.01,!1,0.000001,4,s,s,s,a,$,s,$,$,$)
q.af(a,s,s)
q.dk(r,a)
q.h8(a,b,c)
return q},
qA(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.ax
e=e==null?f:J.p(e,new A.a_(),t.G)
if(e==null)e=A.a([],t.O)
s=t.G
e=A.h(e,!0,s)
r=a.ay
r=r==null?f:J.p(r,new A.a0(),s)
r=A.h(r==null?A.a([],t.O):r,!0,s)
q=a.ch
q=q==null?f:J.p(q,new A.a1(),s)
s=A.h(q==null?A.a([],t.O):q,!0,s)
q=a.w
p=a.x
o=a.a
o===$&&A.b("color")
o=o.t()
n=a.b
n===$&&A.b("name")
a.c===$&&A.b("target")
m=A.a([],t.r)
l=a.d
l===$&&A.b("submobjects")
k=l.length
j=0
for(;j<l.length;l.length===k||(0,A.e)(l),++j)m.push(l[j].t())
l=a.f
l===$&&A.b("updatingSuspended")
k=A.a([],t.l)
i=a.r
i===$&&A.b("points")
h=i.length
j=0
for(;j<i.length;i.length===h||(0,A.e)(i),++j){g=i[j]
k.push(new A.f(g.a,g.b,g.c))}return new A.d8(q,p,a.y,a.z,!1,a.as,a.at,e,r,s,o,n,f,m,l,k)},
qC(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.ax
e=e==null?f:J.p(e,new A.a_(),t.G)
if(e==null)e=A.a([],t.O)
s=t.G
e=A.h(e,!0,s)
r=a.ay
r=r==null?f:J.p(r,new A.a0(),s)
r=A.h(r==null?A.a([],t.O):r,!0,s)
q=a.ch
q=q==null?f:J.p(q,new A.a1(),s)
s=A.h(q==null?A.a([],t.O):q,!0,s)
q=a.w
p=a.x
o=a.a
o===$&&A.b("color")
o=o.t()
n=a.b
n===$&&A.b("name")
a.c===$&&A.b("target")
m=A.a([],t.r)
l=a.d
l===$&&A.b("submobjects")
k=l.length
j=0
for(;j<l.length;l.length===k||(0,A.e)(l),++j)m.push(l[j].t())
l=a.f
l===$&&A.b("updatingSuspended")
k=A.a([],t.l)
i=a.r
i===$&&A.b("points")
h=i.length
j=0
for(;j<i.length;i.length===h||(0,A.e)(i),++j){g=i[j]
k.push(new A.f(g.a,g.b,g.c))}return new A.el(q,p,a.y,a.z,!1,a.as,a.at,e,r,s,o,n,f,m,l,k)},
ey:function ey(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hH:function hH(a){this.b=a},
de:function de(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1){var _=this
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
dz:function dz(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6){var _=this
_.y2=a
_.Y=b
_.a4=c
_.a9=d
_.bi=e
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
_.Y=b
_.a4=c
_.a9=d
_.bi=e
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
cP:function cP(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6){var _=this
_.y2=a
_.Y=b
_.a4=c
_.a9=d
_.bi=e
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
dM:function dM(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6){var _=this
_.y2=a
_.Y=b
_.a4=c
_.a9=d
_.bi=e
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
dP:function dP(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6){var _=this
_.y2=a
_.Y=b
_.a4=c
_.a9=d
_.bi=e
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
at:function at(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5){var _=this
_.y2=a
_.Y=b
_.a4=c
_.a9=d
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
dH:function dH(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8){var _=this
_.c5=a
_.aZ=b
_.cv=c
_.y2=d
_.Y=e
_.a4=f
_.a9=g
_.fx=h
_.fy=i
_.go=j
_.id=k
_.k1=l
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
ew:function ew(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5){var _=this
_.y2=a
_.Y=b
_.a4=c
_.a9=d
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
bq:function bq(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ek:function ek(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ez:function ez(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
dA:function dA(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.cw=0
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
d8:function d8(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
el:function el(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
qE(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.id,d=a.gbj(a),c=a.go,b=a.ax
b=b==null?f:J.p(b,new A.a_(),t.G)
if(b==null)b=A.a([],t.O)
s=t.G
b=A.h(b,!0,s)
r=a.ay
r=r==null?f:J.p(r,new A.a0(),s)
r=A.h(r==null?A.a([],t.O):r,!0,s)
q=a.ch
q=q==null?f:J.p(q,new A.a1(),s)
s=A.h(q==null?A.a([],t.O):q,!0,s)
q=a.w
p=a.x
o=a.a
o===$&&A.b("color")
o=o.t()
n=a.b
n===$&&A.b("name")
a.c===$&&A.b("target")
m=A.a([],t.r)
l=a.d
l===$&&A.b("submobjects")
k=l.length
j=0
for(;j<l.length;l.length===k||(0,A.e)(l),++j)m.push(l[j].t())
l=a.f
l===$&&A.b("updatingSuspended")
k=A.a([],t.l)
i=a.r
i===$&&A.b("points")
h=i.length
j=0
for(;j<i.length;i.length===h||(0,A.e)(i),++j){g=i[j]
k.push(new A.f(g.a,g.b,g.c))}return new A.c3(!0,d,c,e,!0,A.bc(t.N,t.h),q,p,a.y,a.z,!1,a.as,a.at,b,r,s,o,n,f,m,l,k)},
tX(a){var s,r,q,p,o
a=A.bj(a,"\n",",")
a=A.bj(a,"-",",-")
a=A.bj(a,"e,-","e-")
s=A.a([],t.n)
for(r=B.b.cg(a,A.aw("[ ,]")),q=r.length,p=0;p<r.length;r.length===q||(0,A.e)(r),++p){o=r[p]
if(J.W(o)!==0)s.push(A.bJ(o))}return s},
p_(a,b,c){var s,r,q,p,o,n,m,l,k=A.a([],c.h("A<n<0>>"))
for(s=A.J(B.d.b_(a.length,b),0,1),r=s.length,q=A.v(a),p=q.c,q=q.h("aI<1>"),o=0;o<s.length;s.length===r||(0,A.e)(s),++o){n=s[o]
if(typeof n!=="number")return n.v()
m=A.a4(n*b)
l=new A.aI(a,m,null,q)
l.ci(a,m,null,p)
k.push(l.oE(0,b).av(0))}return k},
pf(a,b,c,d){var s=a*d-b*c<0?-1:1
return s*Math.acos(Math.min(1,Math.max((a*c+b*d)/(Math.sqrt(a*a+b*b)*Math.sqrt(c*c+d*d)),-1)))},
tv(d4,d5,d6,d7,d8,d9,e0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0=d4.a,d1=d4.b,d2=e0.a,d3=e0.b
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
a=A.pf(1,0,q,p)
a0=B.h.a7(A.pf(q,p,(-o-c)/m,(-n-b)/l)/1,360)
if(d9===0&&a0>0)a0-=360
else if(d9===1&&a0<0)a0+=360
a1=[c*s-b*r+(d0+d2)/2,c*r+b*s+(d1+d3)/2,a,a0*0.017453292519943295]
a2=a1[0]
a3=a1[1]
a=a1[2]
a0=a1[3]
k=a0/0.017453292519943295
a4=B.h.dF(Math.abs(k/(B.h.a7(k,90)===0?90:36)))
a5=a0/a4
s=Math.cos(d7)
r=Math.sin(d7)
a6=Math.sin(a5)*(Math.sqrt(4+3*Math.pow(Math.tan(a5/2),2))-1)/3
k=t.l
a7=A.a([],k)
for(j=A.J(a4,0,1),a8=j.length,a9=-d5,b0=a9*s,b1=d6*r,a9*=r,b2=d6*s,b3=a4-1,b4=d5*s,b5=d5*r,b6=d1,b7=d0,b8=a,b9=0;b9<j.length;j.length===a8||(0,A.e)(j),++b9,b6=c8,b7=c9,b8=c1){c0=j[b9]
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
qF(a){var s=null,r=new A.d9(a,s,4,0,!1,0.01,!1,0.000001,4,s,s,s,B.c,$,s,$,$,$)
r.af(B.c,s,s)
return r},
qG(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.ax
e=e==null?f:J.p(e,new A.a_(),t.G)
if(e==null)e=A.a([],t.O)
s=t.G
e=A.h(e,!0,s)
r=a.ay
r=r==null?f:J.p(r,new A.a0(),s)
r=A.h(r==null?A.a([],t.O):r,!0,s)
q=a.ch
q=q==null?f:J.p(q,new A.a1(),s)
s=A.h(q==null?A.a([],t.O):q,!0,s)
q=a.w
p=a.x
o=a.a
o===$&&A.b("color")
o=o.t()
n=a.b
n===$&&A.b("name")
a.c===$&&A.b("target")
m=A.a([],t.r)
l=a.d
l===$&&A.b("submobjects")
k=l.length
j=0
for(;j<l.length;l.length===k||(0,A.e)(l),++j)m.push(l[j].t())
l=a.f
l===$&&A.b("updatingSuspended")
k=A.a([],t.l)
i=a.r
i===$&&A.b("points")
h=i.length
j=0
for(;j<i.length;i.length===h||(0,A.e)(i),++j){g=i[j]
k.push(new A.f(g.a,g.b,g.c))}return new A.d9(a.fx,a.fy,q,p,a.y,a.z,!1,a.as,a.at,e,r,s,o,n,f,m,l,k)},
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
kc:function kc(){},
d9:function d9(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
ke:function ke(){},
kd:function kd(){},
em:function em(a,b,c){this.a=a
this.b=b
this.c=c},
qT(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.ax
e=e==null?f:J.p(e,new A.a_(),t.G)
if(e==null)e=A.a([],t.O)
s=t.G
e=A.h(e,!0,s)
r=a.ay
r=r==null?f:J.p(r,new A.a0(),s)
r=A.h(r==null?A.a([],t.O):r,!0,s)
q=a.ch
q=q==null?f:J.p(q,new A.a1(),s)
s=A.h(q==null?A.a([],t.O):q,!0,s)
q=a.w
p=a.x
o=a.a
o===$&&A.b("color")
o=o.t()
n=a.b
n===$&&A.b("name")
a.c===$&&A.b("target")
m=A.a([],t.r)
l=a.d
l===$&&A.b("submobjects")
k=l.length
j=0
for(;j<l.length;l.length===k||(0,A.e)(l),++j)m.push(l[j].t())
l=a.f
l===$&&A.b("updatingSuspended")
k=A.a([],t.l)
i=a.r
i===$&&A.b("points")
h=i.length
j=0
for(;j<i.length;i.length===h||(0,A.e)(i),++j){g=i[j]
k.push(new A.f(g.a,g.b,g.c))}return new A.ex(a.fx,a.fy,q,p,a.y,a.z,!1,a.as,a.at,e,r,s,o,n,f,m,l,k)},
qI(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a1.Y,d=a1.a4,c=a1.id,b=a1.a9,a=a1.go,a0=a1.ax
a0=a0==null?f:J.p(a0,new A.a_(),t.G)
if(a0==null)a0=A.a([],t.O)
s=t.G
a0=A.h(a0,!0,s)
r=a1.ay
r=r==null?f:J.p(r,new A.a0(),s)
r=A.h(r==null?A.a([],t.O):r,!0,s)
q=a1.ch
q=q==null?f:J.p(q,new A.a1(),s)
s=A.h(q==null?A.a([],t.O):q,!0,s)
q=a1.w
p=a1.x
o=a1.a
o===$&&A.b("color")
o=o.t()
n=a1.b
n===$&&A.b("name")
a1.c===$&&A.b("target")
m=A.a([],t.r)
l=a1.d
l===$&&A.b("submobjects")
k=l.length
j=0
for(;j<l.length;l.length===k||(0,A.e)(l),++j)m.push(l[j].t())
l=a1.f
l===$&&A.b("updatingSuspended")
k=A.a([],t.l)
i=a1.r
i===$&&A.b("points")
h=i.length
j=0
for(;j<i.length;i.length===h||(0,A.e)(i),++j){g=i[j]
k.push(new A.f(g.a,g.b,g.c))}return new A.bN(e,d,!0,b,a,c,!0,A.bc(t.N,t.h),q,p,a1.y,a1.z,!1,a1.as,a1.at,a0,r,s,o,n,f,m,l,k)},
qJ(a){var s,r,q,p,o,n,m,l,k,j="(){}[]|.\\"
if(a==="\\over"||a==="\\overline"||a==="\\sqrt"||a==="\\sqrt{"||B.b.bh(a,"_")||B.b.bh(a,"^")||B.b.bh(a,"dot"))a+="{\\quad}"
if(a==="\\substack")a="\\quad"
if(a.length===0)a="\\quad"
if(B.b.a_(a,"\\\\"))a=A.bj(a,"\\\\","\\quad\\\\")
s=t.s
r=A.a([],s)
for(q=t.N,p=A.ck(A.a(a.split("\\left"),s),q),o=p.length,n=0;n<p.length;p.length===o||(0,A.e)(p),++n){m=p[n]
l=J.X(m)
if(l.gm(m)!==0){l=l.k(m,0)
l=A.cj(j,l,0)}else l=!1
if(l)r.push(m)}k=r.length
r=A.a([],s)
for(s=A.ck(A.a(a.split("\\right"),s),q),q=s.length,n=0;n<s.length;s.length===q||(0,A.e)(s),++n){m=s[n]
p=J.X(m)
if(p.gm(m)!==0){p=p.k(m,0)
p=A.cj(j,p,0)}else p=!1
if(p)r.push(m)}if(k!==r.length){a=A.bj(a,"\\left","\\big")
a=A.bj(a,"\\right","\\big")}return A.qK(a)},
qK(a){var s=a.split("{").length-1-(a.split("\\{").length-1)+(a.split("\\\\{").length-1),r=a.split("}").length-1-(a.split("\\}").length-1)+(a.split("\\\\}").length-1)
for(;r>s;){a="{"+a;++s}for(;s>r;){a+="}";++r}return a},
mq(a){var s,r=null,q=new A.ed(" ",B.r,B.V,A.a([],t.s),"","align*",!0,2,r,"",!0,A.bc(t.N,t.h),4,0,!1,0.01,!1,0.000001,4,r,r,r,B.c,$,r,$,$,$)
q.af(B.c,r,r)
s=q.r
s===$&&A.b("points")
if(s.length!==0)q.fm()
q.a=B.c
q.a4="align*"
q.soF(A.ql(a,B.r,B.V))
q.Y=B.a.aB(q.c6," ")
q.iv()
q.mF()
q.kk(B.V)
return q},
qk(a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=t.N,d=A.h(a4.cv,!0,e),c=A.h(a4.c6,!0,e),b=a4.Y,a=a4.a4,a0=a4.id,a1=a4.a9,a2=a4.go,a3=a4.ax
a3=a3==null?f:J.p(a3,new A.a_(),t.G)
if(a3==null)a3=A.a([],t.O)
s=t.G
a3=A.h(a3,!0,s)
r=a4.ay
r=r==null?f:J.p(r,new A.a0(),s)
r=A.h(r==null?A.a([],t.O):r,!0,s)
q=a4.ch
q=q==null?f:J.p(q,new A.a1(),s)
s=A.h(q==null?A.a([],t.O):q,!0,s)
q=a4.w
p=a4.x
o=a4.a
o===$&&A.b("color")
o=o.t()
n=a4.b
n===$&&A.b("name")
a4.c===$&&A.b("target")
m=A.a([],t.r)
l=a4.d
l===$&&A.b("submobjects")
k=l.length
j=0
for(;j<l.length;l.length===k||(0,A.e)(l),++j)m.push(l[j].t())
l=a4.f
l===$&&A.b("updatingSuspended")
k=A.a([],t.l)
i=a4.r
i===$&&A.b("points")
h=i.length
j=0
for(;j<i.length;i.length===h||(0,A.e)(i),++j){g=i[j]
k.push(new A.f(g.a,g.b,g.c))}return new A.ed(a4.aZ,d,a4.cw,c,b,a,!0,a1,a2,a0,!0,A.bc(e,t.h),q,p,a4.y,a4.z,!1,a4.as,a4.at,a3,r,s,o,n,f,m,l,k)},
ql(a,b,c){var s,r,q,p,o,n,m,l=A.nT(a,A.aw("{{(.*?)}}")),k=t.s,j=A.a([],k)
for(s=A.h(c.gbl(),!0,t.N),B.a.H(s,b),r=s.length,q=0;q<s.length;s.length===r||(0,A.e)(s),++q)j.push("("+A.n5(s[q])+")")
p=B.a.aB(j,"|")
o=A.a([],k)
if(p.length!==0){n=A.aw(p)
for(j=l.length,q=0;q<l.length;l.length===j||(0,A.e)(l),++q)B.a.H(o,A.nT(l[q],n))}else o=l
k=A.a([],k)
for(j=o.length,q=0;q<o.length;o.length===j||(0,A.e)(o),++q){m=o[q]
if(J.W(m)!==0)k.push(m)}return k},
ex:function ex(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
bN:function bN(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4){var _=this
_.Y=a
_.a4=b
_.a9=null
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
ed:function ed(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8){var _=this
_.aZ=a
_.cv=b
_.cw=c
_.c6=d
_.Y=e
_.a4=f
_.a9=null
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
jL:function jL(a,b){this.a=a
this.b=b},
pY(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=a.ay
f===$&&A.b("draggedListener")
s=a.ch
s===$&&A.b("pressedListener")
r=a.CW
r===$&&A.b("releasedListener")
q=a.cx
p=A.nv(a.w)
o=a.a
o===$&&A.b("color")
o=o.t()
n=a.b
n===$&&A.b("name")
a.c===$&&A.b("target")
m=A.a([],t.r)
l=a.d
l===$&&A.b("submobjects")
k=l.length
j=0
for(;j<l.length;l.length===k||(0,A.e)(l),++j)m.push(l[j].t())
l=a.f
l===$&&A.b("updatingSuspended")
k=A.a([],t.l)
i=a.r
i===$&&A.b("points")
h=i.length
j=0
for(;j<i.length;i.length===h||(0,A.e)(i),++j){g=i[j]
k.push(new A.f(g.a,g.b,g.c))}return new A.dN(f,s,r,q,p,o,n,null,m,l,k)},
h0:function h0(){},
dN:function dN(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
iZ:function iZ(a){this.a=a},
j_:function j_(a){this.a=a},
j0:function j0(a){this.a=a},
qm(a){var s,r,q,p,o,n,m,l,k=a.a
k===$&&A.b("color")
k=k.t()
s=a.b
s===$&&A.b("name")
a.c===$&&A.b("target")
r=A.a([],t.r)
q=a.d
q===$&&A.b("submobjects")
p=q.length
o=0
for(;o<q.length;q.length===p||(0,A.e)(q),++o)r.push(q[o].t())
q=a.f
q===$&&A.b("updatingSuspended")
p=A.a([],t.l)
n=a.r
n===$&&A.b("points")
m=n.length
o=0
for(;o<n.length;n.length===m||(0,A.e)(n),++o){l=n[o]
p.push(new A.f(l.a,l.b,l.c))}return new A.G(k,s,null,r,q,p)},
mg(a){var s=new A.dX(B.c,$,null,$,$,$)
s.af(B.c,null,null)
s.aX(t.a.a(a))
return s},
q5(a){var s,r,q,p,o,n,m,l,k=a.a
k===$&&A.b("color")
k=k.t()
s=a.b
s===$&&A.b("name")
a.c===$&&A.b("target")
r=A.a([],t.r)
q=a.d
q===$&&A.b("submobjects")
p=q.length
o=0
for(;o<q.length;q.length===p||(0,A.e)(q),++o)r.push(q[o].t())
q=a.f
q===$&&A.b("updatingSuspended")
p=A.a([],t.l)
n=a.r
n===$&&A.b("points")
m=n.length
o=0
for(;o<n.length;n.length===m||(0,A.e)(n),++o){l=n[o]
p.push(new A.f(l.a,l.b,l.c))}return new A.dX(k,s,null,r,q,p)},
G:function G(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=$
_.f=e
_.r=f},
k_:function k_(a){this.a=a},
jZ:function jZ(a){this.a=a},
jY:function jY(a){this.a=a},
jX:function jX(a){this.a=a},
k0:function k0(a,b){this.a=a
this.b=b},
jT:function jT(a){this.a=a},
jU:function jU(a){this.a=a},
jV:function jV(){},
jW:function jW(a){this.a=a},
dX:function dX(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=$
_.f=e
_.r=f},
r2(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a.ax
d=d==null?e:J.p(d,new A.a_(),t.G)
if(d==null)d=A.a([],t.O)
s=t.G
d=A.h(d,!0,s)
r=a.ay
r=r==null?e:J.p(r,new A.a0(),s)
r=A.h(r==null?A.a([],t.O):r,!0,s)
q=a.ch
q=q==null?e:J.p(q,new A.a1(),s)
s=A.h(q==null?A.a([],t.O):q,!0,s)
q=a.gaG()
p=a.x
o=a.gdG()
n=a.a
n===$&&A.b("color")
n=n.t()
m=a.b
m===$&&A.b("name")
a.c===$&&A.b("target")
l=A.a([],t.r)
k=a.d
k===$&&A.b("submobjects")
j=k.length
i=0
for(;i<k.length;k.length===j||(0,A.e)(k),++i)l.push(k[i].t())
k=a.f
k===$&&A.b("updatingSuspended")
j=A.a([],t.l)
h=a.r
h===$&&A.b("points")
g=h.length
i=0
for(;i<h.length;h.length===g||(0,A.e)(h),++i){f=h[i]
j.push(new A.f(f.a,f.b,f.c))}return new A.P(q,p,o,a.z,!1,a.as,a.at,d,r,s,n,m,e,l,k,j)},
mA(a){var s=null,r=new A.c9(4,0,!1,0.01,!1,0.000001,4,s,s,s,B.c,$,s,$,$,$)
r.af(B.c,s,s)
r.ha(a)
return r},
r1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.ax
e=e==null?f:J.p(e,new A.a_(),t.G)
if(e==null)e=A.a([],t.O)
s=t.G
e=A.h(e,!0,s)
r=a.ay
r=r==null?f:J.p(r,new A.a0(),s)
r=A.h(r==null?A.a([],t.O):r,!0,s)
q=a.ch
q=q==null?f:J.p(q,new A.a1(),s)
s=A.h(q==null?A.a([],t.O):q,!0,s)
q=a.w
p=a.x
o=a.a
o===$&&A.b("color")
o=o.t()
n=a.b
n===$&&A.b("name")
a.c===$&&A.b("target")
m=A.a([],t.r)
l=a.d
l===$&&A.b("submobjects")
k=l.length
j=0
for(;j<l.length;l.length===k||(0,A.e)(l),++j)m.push(l[j].t())
l=a.f
l===$&&A.b("updatingSuspended")
k=A.a([],t.l)
i=a.r
i===$&&A.b("points")
h=i.length
j=0
for(;j<i.length;i.length===h||(0,A.e)(i),++j){g=i[j]
k.push(new A.f(g.a,g.b,g.c))}return new A.c9(q,p,a.y,a.z,!1,a.as,a.at,e,r,s,o,n,f,m,l,k)},
o3(a){var s=null,r=new A.eC(0.01,0.01,4,0,!1,0.01,!1,0.000001,4,s,s,s,B.c,$,s,$,$,$)
r.af(B.c,s,s)
r.saR(t.y.a(A.a([a],t.l)))
return r},
r3(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.ax
e=e==null?f:J.p(e,new A.a_(),t.G)
if(e==null)e=A.a([],t.O)
s=t.G
e=A.h(e,!0,s)
r=a.ay
r=r==null?f:J.p(r,new A.a0(),s)
r=A.h(r==null?A.a([],t.O):r,!0,s)
q=a.ch
q=q==null?f:J.p(q,new A.a1(),s)
s=A.h(q==null?A.a([],t.O):q,!0,s)
q=a.w
p=a.x
o=a.a
o===$&&A.b("color")
o=o.t()
n=a.b
n===$&&A.b("name")
a.c===$&&A.b("target")
m=A.a([],t.r)
l=a.d
l===$&&A.b("submobjects")
k=l.length
j=0
for(;j<l.length;l.length===k||(0,A.e)(l),++j)m.push(l[j].t())
l=a.f
l===$&&A.b("updatingSuspended")
k=A.a([],t.l)
i=a.r
i===$&&A.b("points")
h=i.length
j=0
for(;j<i.length;i.length===h||(0,A.e)(i),++j){g=i[j]
k.push(new A.f(g.a,g.b,g.c))}return new A.eC(a.fx,a.fy,q,p,a.y,a.z,!1,a.as,a.at,e,r,s,o,n,f,m,l,k)},
pX(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.ax
e=e==null?f:J.p(e,new A.a_(),t.G)
if(e==null)e=A.a([],t.O)
s=t.G
e=A.h(e,!0,s)
r=a.ay
r=r==null?f:J.p(r,new A.a0(),s)
r=A.h(r==null?A.a([],t.O):r,!0,s)
q=a.ch
q=q==null?f:J.p(q,new A.a1(),s)
s=A.h(q==null?A.a([],t.O):q,!0,s)
q=a.w
p=a.x
o=a.a
o===$&&A.b("color")
o=o.t()
n=a.b
n===$&&A.b("name")
a.c===$&&A.b("target")
m=A.a([],t.r)
l=a.d
l===$&&A.b("submobjects")
k=l.length
j=0
for(;j<l.length;l.length===k||(0,A.e)(l),++j)m.push(l[j].t())
l=a.f
l===$&&A.b("updatingSuspended")
k=A.a([],t.l)
i=a.r
i===$&&A.b("points")
h=i.length
j=0
for(;j<i.length;i.length===h||(0,A.e)(i),++j){g=i[j]
k.push(new A.f(g.a,g.b,g.c))}return new A.dI(q,p,a.y,a.z,!1,a.as,a.at,e,r,s,o,n,f,m,l,k)},
P:function P(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a_:function a_(){},
a0:function a0(){},
a1:function a1(){},
kN:function kN(){},
kO:function kO(){},
kH:function kH(a,b){this.a=a
this.b=b},
kK:function kK(a,b){this.a=a
this.b=b},
kJ:function kJ(a,b){this.a=a
this.b=b},
kD:function kD(a,b){this.a=a
this.b=b},
kI:function kI(){},
kG:function kG(a){this.a=a},
kE:function kE(){},
kF:function kF(){},
kM:function kM(){},
kL:function kL(){},
eB:function eB(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
c9:function c9(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
eC:function eC(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
dI:function dI(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
dy:function dy(){},
pO(){return new A.fB($.dw())},
fB:function fB(a){this.e=$
this.b=a
this.d=$},
iS:function iS(){},
kf:function kf(){},
kg:function kg(a){this.a=a},
J(a,b,c){var s,r=A.a([],t.t)
if(c>0)for(s=b;s<a;s+=c)B.a.n(r,s)
else for(s=b;s>a;s+=c)B.a.n(r,s)
return r},
is(a,b){var s,r,q,p=J.X(a)
if(p.gan(a))return A.a([],b.h("A<M<i,0>>"))
s=A.a([],b.h("A<M<i,0>>"))
for(r=t.pc.X(b).h("M<1,2>"),q=0;q<p.gm(a);++q)B.a.n(s,new A.M(q,p.k(a,q),r))
return s},
m2(a,b){if(a.length===0)return b.a(0)
return B.a.b5(a,new A.m3(b))},
ff(a,b,c){var s,r,q,p,o,n,m,l=A.a([],t.b)
for(s=A.J(a,0,1),r=s.length,q=a-1,p=t.n,o=0;o<s.length;s.length===r||(0,A.e)(s),++o){n=s[o]
if(typeof n!=="number")return n.b6()
m=n/q
l.push(A.a([c*(1-m)+b*m],p))}return A.ay(null,l)},
mV(a,b,c){var s,r,q,p,o=A.J(B.h.dF((a-b)/c),0,1),n=A.a([],t.b)
for(s=o.length,r=t.n,q=0;q<o.length;o.length===s||(0,A.e)(o),++q){p=o[q]
if(typeof p!=="number")return p.v()
n.push(A.a([p*c+b],r))}return A.ay(null,n)},
cL(a,b,c){var s,r,q,p,o,n,m=J.X(a)
if(m.gan(a))return a
s=m.gm(a)
if(s>b)throw A.d("Trying to stretch an array to a length shorter than its own")
r=A.J(b,0,1)
q=A.v(r)
p=q.h("H<1,D>")
o=new A.H(r,q.h("D(1)").a(new A.m1(b,s)),p)
q=A.a([],c.h("A<0>"))
for(r=new A.K(o,o.gm(o),p.h("K<B.E>")),p=p.h("B.E");r.q();){n=r.d
q.push(m.k(a,B.h.bp(n==null?p.a(n):n)))}return q},
tN(a,b,c,d){var s,r,q,p,o,n,m,l=Math.max(a.length,b.length),k=A.a([],c.h("A<0>"))
for(s=A.J(l,0,1),r=s.length,q=0;q<s.length;s.length===r||(0,A.e)(s),++q){p=s[q]
o=a.length
if(typeof p!=="number")return p.v()
n=B.h.b_(p*o,l)
if(!(n>=0&&n<o))return A.c(a,n)
k.push(a[n])}s=A.a([],d.h("A<0>"))
for(r=A.J(l,0,1),o=r.length,q=0;q<r.length;r.length===o||(0,A.e)(r),++q){p=r[q]
n=b.length
if(typeof p!=="number")return p.v()
m=B.h.b_(p*n,l)
if(!(m>=0&&m<n))return A.c(b,m)
s.push(b[m])}return new A.M(k,s,c.h("@<n<0>>").X(d.h("n<0>")).h("M<1,2>"))},
ck(a,b){var s=A.jH(a,new A.m4(b),b)
return A.h(s,!0,s.$ti.h("j.E"))},
n7(a,b){var s=A.h(a,!0,b)
if(0>=s.length)return A.c(s,-1)
s.pop()
return s},
u0(a,b){var s,r,q,p=A.a([],b.h("A<0>")),o=A.nC(b)
for(s=A.v(a).h("V<1>"),r=new A.V(a,s),r=new A.K(r,r.gm(r),s.h("K<B.E>")),s=s.h("B.E");r.q();){q=r.d
if(q==null)q=s.a(q)
if(!o.G(0,q)){B.a.n(p,q)
o.n(0,q)}}s=b.h("V<0>")
return A.h(new A.V(p,s),!0,s.h("B.E"))},
oM(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=A.a([],c.h("A<n<0>>"))
for(s=A.J(a.length,0,1),r=s.length,q=c.h("A<0>"),p=0;p<s.length;s.length===r||(0,A.e)(s),++p){o=s[p]
n=A.a([],q)
for(m=A.J(b,0,1),l=m.length,k=0;k<m.length;m.length===l||(0,A.e)(m),++k){j=m[k]
if(typeof o!=="number")return o.K()
if(typeof j!=="number")return A.bw(j)
n.push(B.a.k(a,B.h.a7(o+j,a.length)))}i.push(n)}return i},
m3:function m3(a){this.a=a},
m1:function m1(a,b){this.a=a
this.b=b},
m4:function m4(a){this.a=a},
n1(a,b,c){var s,r,q=t.bd
q=A.lT(A.ay(null,J.p(a,new A.lU(),q).av(0)),A.ay(null,J.p(b,new A.lV(),q).av(0)),c,t.A).a
q===$&&A.b("values")
s=A.v(q)
r=s.h("H<1,O>")
return A.h(new A.H(q,s.h("O(1)").a(new A.lW()),r),!0,r.h("B.E"))},
lT(a,b,c,d){return d.a(J.m6(J.cM(a,1-c),J.cM(b,c)))},
p1(a,b,c,d){return d.a(J.m6(J.cM(a,1-c),J.cM(b,c)))},
n0(a,b,c){if(c>=1)return new A.M(b-1,1,t.d7)
if(c<=0)return new A.M(a,0,t.d7)
return new A.M(J.pE(A.lT(a,b,c,t.W)),B.h.a7((b-a)*c,1),t.d7)},
mW(a){return new A.lF(a,a.length-1)},
m_(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(b===1){s=A.a([],t.l)
for(r=A.J(J.W(a.a),0,1),q=r.length,p=0;p<r.length;r.length===q||(0,A.e)(r),++p){if(a.gm(a)===0)A.L(A.am())
s.push(a.k(0,a.gm(a)-1))}return s}s=t.l
r=A.a([],s)
for(q=a.a,o=J.X(q),n=A.J(o.gm(q),0,1),m=n.length,l=a.$ti,k=l.h("u.E"),l=l.h("aI<u.E>"),p=0;p<n.length;n.length===m||(0,A.e)(n),++p){j=A.a4(n[p])
i=new A.aI(a,j,null,l)
i.ci(a,j,null,k)
r.push(A.mW(i.av(0)).$1(b))}h=(c-b)/(1-b)
s=A.a([],s)
for(q=A.J(o.gm(q),0,1),o=q.length,n=t.V,m=t.mN,p=0;p<q.length;q.length===o||(0,A.e)(q),++p){g=q[p]
if(typeof g!=="number")return g.K()
l=A.a4(g+1)
A.aF(0,l,r.length)
k=new A.aI(r,0,l,m)
k.ci(r,0,l,n)
s.push(A.mW(k.av(0)).$1(h))}return s},
lU:function lU(){},
lV:function lV(){},
lW:function lW(){},
lF:function lF(a,b){this.a=a
this.b=b},
lE:function lE(){},
ow(a){var s,r,q,p,o,n,m,l,k,j,i
if(B.b.a_(a,"#"))a=B.b.j9(a,"#","")
s=a.length
if(!B.a.G(A.a([3,4,6,8],t.t),s))throw A.d("Hex string #"+a+" not well formated")
if(s===3||s===4){s=t.s
r=A.a([],s)
for(q=a.split(""),p=q.length,o=0;o<p;++o){n=q[o]
B.a.H(r,A.a([n,n],s))}a=B.a.aB(r,"")}if(a.length===6)a+="ff"
m=new A.lt()
l=B.b.A(a,0,2)
k=B.b.A(a,2,4)
j=B.b.A(a,4,6)
i=B.b.A(a,6,8)
return new A.O(m.$1(l),m.$1(k),m.$1(j),m.$1(i))},
O:function O(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lt:function lt(){},
cR:function cR(a,b){this.a=a
this.b=b},
mr(a){switch(a){case 0:break
case 1:break
case 2:break
default:break}return new A.k1(a)},
bm:function bm(a){this.b=a},
b0:function b0(){},
j2:function j2(){this.a=$},
b1:function b1(a,b,c){this.a=a
this.b=b
this.$ti=c},
h6:function h6(){},
ee:function ee(a,b,c){this.c=a
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
k1:function k1(a){this.a=a},
nT(a,b){var s,r,q,p,o,n,m,l,k,j,i=B.b.cg(a,b),h=b.c0(0,a),g=A.h(h,!0,A.z(h).h("j.E"))
h=i.length
s=g.length
r=A.a([],t.s)
for(h=A.J(h+s,0,1),s=h.length,q=t.N,p=0;p<h.length;h.length===s||(0,A.e)(h),++p){o=h[p]
if(typeof o!=="number")return o.a7()
if(B.h.a7(o,2)===0){n=B.h.aT(o,2)
if(!(n>=0&&n<i.length))return A.c(i,n)
B.a.n(r,i[n])}else{n=B.h.aT(o-1,2)
if(!(n>=0&&n<g.length))return A.c(g,n)
m=g[n]
l=m.fO(A.J(m.gfN()+1,1,1))
k=A.v(l)
j=k.h("ai<1>")
j=A.np(new A.ai(l,k.h("y(1)").a(new A.kq()),j),j.h("j.E"),q)
B.a.H(r,A.h(j,!0,A.z(j).h("j.E")))}}return r},
kq:function kq(){},
oP(a,b,c){var s,r
if(c){if(!$.iq.aj(a)){s=t.S
$.iq.u(0,a,A.bc(s,s))}if(!$.iq.k(0,a).aj(b)){s=$.iq.k(0,a)
s.toString
s.u(0,b,A.oP(a,b,!1))}s=$.iq.k(0,a).k(0,b)
s.toString
return s}if(a<b)return 0
if(b===0)return 1
s=t.S
r=B.a.ff(A.J(b+1,1,1),1,new A.lG(),s)
return B.d.b_(B.a.ff(A.J(a-b,a,-1),1,new A.lH(),s),r)},
iu(a,b,c,d,e){return(a-b)/(c-b)*(e-d)+d},
lG:function lG(){},
lH:function lH(){},
ay(a,b){var s,r,q=new A.bl(b)
if(a==null){s=b.length
r=s!==0?J.W(B.a.gZ(b)):0
a=new A.M(s,r,t.o)
s=a}else s=a
q.slg(t.o.a(s))
return q},
bW(a,b){var s,r,q,p,o,n,m,l,k=b.b,j=A.a([],t.b)
for(s=A.J(b.a,0,1),r=s.length,q=t.n,p=0;p<s.length;s.length===r||(0,A.e)(s),++p){o=A.a([],q)
for(n=A.J(k,0,1),m=n.length,l=0;l<n.length;n.length===m||(0,A.e)(n),++l)o.push(a)
j.push(o)}return A.ay(b,j)},
nj(a){var s,r,q,p,o,n=A.a([],t.b)
for(s=a.length,r=t.n,q=0;p=a.length,q<p;a.length===s||(0,A.e)(a),++q){o=a[q]
n.push(A.a([o.a,o.b,o.c],r))}return A.ay(new A.M(p,3,t.o),n)},
ft(a){var s,r,q,p,o,n,m,l,k,j,i=A.a([],t.b)
for(s=A.J(a,0,1),r=s.length,q=t.n,p=0;p<s.length;s.length===r||(0,A.e)(s),++p){o=s[p]
n=A.a([],q)
for(m=A.J(a,0,1),l=m.length,k=J.bi(o),j=0;j<m.length;m.length===l||(0,A.e)(m),++j)if(k.W(o,m[j]))n.push(1)
else n.push(0)
i.push(n)}return A.ay(new A.M(a,a,t.o),i)},
tS(a,b){var s=A.pc(a),r=A.u1(b)
return B.a.b5(A.a([r,s,r.jy()],t.fp),new A.m0())},
pc(a){var s=t.n
return A.ay(null,A.a([A.a([Math.cos(a),-Math.sin(a),0],s),A.a([Math.sin(a),Math.cos(a),0],s),A.a([0,0,1],s)],t.b))},
u1(a){var s,r,q,p,o,n
if(a.b4()===0)return A.ft(3)
s=a.b6(0,Math.sqrt(a.b4()))
r=Math.acos(s.c)
if(s.a!==0||s.b!==0){q=s.jq(0)
p=q.b6(0,Math.sqrt(q.b4()))
o=Math.acos(p.a)
if(p.b<0)o*=-1}else o=0
q=t.n
n=A.ay(null,A.a([A.a([Math.cos(r),0,Math.sin(r)],q),A.a([0,1,0],q),A.a([-Math.sin(r),0,Math.cos(r)],q)],t.b))
return A.pc(o).c9(n)},
tQ(a,b){var s,r,q,p,o=a/2,n=b.b6(0,Math.sqrt(b.b4())).v(0,Math.sin(o)),m=A.a([],t.b)
for(s=[n.a,n.b,n.c],r=s.length,q=t.n,p=0;p<r;++p)m.push(A.a([s[p]],q))
m.push(A.a([Math.cos(o)],q))
return A.ay(null,m)},
tp(a,b){var s,r,q,p,o,n,m,l,k,j=6.283185307179586/a,i=t.hR,h=A.a([],i)
for(s=A.J(a,0,1),r=s.length,q=0;q<s.length;s.length===r||(0,A.e)(s),++q){p=s[q]
if(typeof p!=="number")return A.bw(p)
o=j*p
h.push(new A.cR(Math.cos(o),Math.sin(o)))}i=A.a([],i)
for(s=h.length,r=b.a,o=b.b,q=0;q<h.length;h.length===s||(0,A.e)(h),++q){n=h[q]
m=n.a
l=n.b
i.push(new A.cR(m*r-l*o,m*o+l*r))}h=A.a([],t.l)
for(s=i.length,q=0;q<i.length;i.length===s||(0,A.e)(i),++q){k=i[q]
h.push(new A.f(k.a,k.b,0))}return h},
bl:function bl(a){this.a=a
this.b=$},
iH:function iH(a){this.a=a},
iK:function iK(a){this.a=a},
iJ:function iJ(a){this.a=a},
iI:function iI(a){this.a=a},
iG:function iG(a){this.a=a},
iF:function iF(a,b){this.a=a
this.b=b},
iE:function iE(a){this.a=a},
iL:function iL(a){this.a=a},
iD:function iD(){},
iC:function iC(a){this.a=a},
m0:function m0(){},
f:function f(a,b,c){this.a=a
this.b=b
this.c=c},
kP:function kP(a){this.a=a},
oE(a){if(t.jJ.b(a))return a
throw A.d(A.ma(a,"uri","Value must be a String or a Uri"))},
oK(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=1;r<s;++r){if(b[r]==null||b[r-1]!=null)continue
for(;s>=1;s=q){q=s-1
if(b[q]!=null)break}p=new A.a3("")
o=""+(a+"(")
p.a=o
n=A.v(b)
m=n.h("aI<1>")
l=new A.aI(b,0,s,m)
l.ci(b,0,s,n.c)
m=o+new A.H(l,m.h("m(B.E)").a(new A.lC()),m.h("H<B.E,m>")).aB(0,", ")
p.a=m
p.a=m+("): part "+(r-1)+" was null, but part "+r+" was not.")
throw A.d(A.a7(p.l(0),null))}},
iU:function iU(a){this.a=a},
iV:function iV(){},
iW:function iW(){},
lC:function lC(){},
ct:function ct(){},
hi(a,b){var s,r,q,p,o,n=b.jE(a)
b.bS(a)
if(n!=null)a=B.b.aq(a,n.length)
s=t.s
r=A.a([],s)
q=A.a([],s)
s=a.length
if(s!==0&&b.bE(B.b.E(a,0))){if(0>=s)return A.c(a,0)
B.a.n(q,a[0])
p=1}else{B.a.n(q,"")
p=0}for(o=p;o<s;++o)if(b.bE(B.b.E(a,o))){B.a.n(r,B.b.A(a,p,o))
B.a.n(q,a[o])
p=o+1}if(p<s){B.a.n(r,B.b.aq(a,p))
B.a.n(q,"")}return new A.k5(b,n,r,q)},
k5:function k5(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
nF(a){return new A.hk(a)},
hk:function hk(a){this.a=a},
qR(){var s,r,q,p,o,n,m,l,k=null
if(A.my().gaP()!=="file")return $.fg()
s=A.my()
if(!B.b.bh(s.gaN(s),"/"))return $.fg()
r=A.oo(k,0,0)
q=A.ol(k,0,0,!1)
p=A.on(k,0,0,k)
o=A.ok(k,0,0)
n=A.mL(k,"")
if(q==null)s=r.length!==0||n!=null||!1
else s=!1
if(s)q=""
s=q==null
m=!s
l=A.om("a/b",0,3,k,"",m)
if(s&&!B.b.a_(l,"/"))l=A.mN(l,m)
else l=A.bT(l)
if(A.lm("",r,s&&B.b.a_(l,"//")?"":q,n,l,p,o).fD()==="a\\b")return $.iv()
return $.ph()},
kr:function kr(){},
hn:function hn(a,b,c){this.d=a
this.e=b
this.f=c},
hN:function hN(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d},
hS:function hS(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d},
qN(a,b){var s=A.a([0],t.t)
s=new A.hx(b,s,new Uint32Array(A.mP(J.fi(a))))
s.h9(a,b)
return s},
bX(a,b){if(b<0)A.L(A.aC("Offset may not be negative, was "+b+"."))
else if(b>a.c.length)A.L(A.aC("Offset "+b+u.D+a.gm(a)+"."))
return new A.aY(a,b)},
mC(a,b,c){if(c<b)A.L(A.a7("End "+c+" must come after start "+b+".",null))
else if(c>a.c.length)A.L(A.aC("End "+c+u.D+a.gm(a)+"."))
else if(b<0)A.L(A.aC("Start may not be negative, was "+b+"."))
return new A.ao(a,b,c)},
hx:function hx(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
aY:function aY(a,b){this.a=a
this.b=b},
ao:function ao(a,b,c){this.a=a
this.b=b
this.c=c},
q6(a,b){var s=A.q7(A.a([A.r9(a,!0)],t.pg)),r=new A.jq(b).$0(),q=B.d.l(B.a.gp(s).b+1),p=A.q8(s)?0:3,o=A.v(s)
return new A.j6(s,r,null,1+Math.max(q.length,p),new A.H(s,o.h("i(1)").a(new A.j8()),o.h("H<1,i>")).b5(0,B.a0),!A.tH(new A.H(s,o.h("E?(1)").a(new A.j9()),o.h("H<1,E?>"))),new A.a3(""))},
q8(a){var s,r,q
for(s=0;s<a.length-1;){r=a[s];++s
q=a[s]
if(r.b+1!==q.b&&J.T(r.c,q.c))return!1}return!0},
q7(a){var s,r,q,p=A.tB(a,new A.jb(),t.C,t.K)
for(s=p.gjl(p),r=A.z(s),r=r.h("@<1>").X(r.z[1]),s=new A.cz(J.ab(s.a),s.b,r.h("cz<1,2>")),r=r.z[1];s.q();){q=s.a
if(q==null)q=r.a(q)
J.nh(q,new A.jc())}s=p.gdN(p)
r=A.z(s)
q=r.h("dT<j.E,b7>")
return A.h(new A.dT(s,r.h("j<b7>(j.E)").a(new A.jd()),q),!0,q.h("j.E"))},
r9(a,b){var s=new A.lc(a).$0()
return new A.ax(s,!0,null)},
rb(a){var s,r,q,p,o,n,m=a.gV(a)
if(!B.b.G(m,"\r\n"))return a
s=a.gU()
r=s.gau(s)
for(s=m.length-1,q=0;q<s;++q)if(B.b.E(m,q)===13&&B.b.E(m,q+1)===10)--r
s=a.gS(a)
p=a.ga5()
o=a.gU().gae()
p=A.hy(r,a.gU().gam(),o,p)
o=A.bj(m,"\r\n","\n")
n=a.gaY()
return A.km(s,p,o,A.bj(n,"\r\n","\n"))},
rc(a){var s,r,q,p,o,n,m
if(!B.b.bh(a.gaY(),"\n"))return a
if(B.b.bh(a.gV(a),"\n\n"))return a
s=B.b.A(a.gaY(),0,a.gaY().length-1)
r=a.gV(a)
q=a.gS(a)
p=a.gU()
if(B.b.bh(a.gV(a),"\n")){o=A.lL(a.gaY(),a.gV(a),a.gS(a).gam())
o.toString
o=o+a.gS(a).gam()+a.gm(a)===a.gaY().length}else o=!1
if(o){r=B.b.A(a.gV(a),0,a.gV(a).length-1)
if(r.length===0)p=q
else{o=a.gU()
o=o.gau(o)
n=a.ga5()
m=a.gU().gae()
p=A.hy(o-1,A.o7(s),m-1,n)
o=a.gS(a)
o=o.gau(o)
n=a.gU()
q=o===n.gau(n)?p:a.gS(a)}}return A.km(q,p,r,s)},
ra(a){var s,r,q,p,o
if(a.gU().gam()!==0)return a
if(a.gU().gae()===a.gS(a).gae())return a
s=B.b.A(a.gV(a),0,a.gV(a).length-1)
r=a.gS(a)
q=a.gU()
q=q.gau(q)
p=a.ga5()
o=a.gU().gae()
p=A.hy(q-1,s.length-B.b.fj(s,"\n")-1,o-1,p)
return A.km(r,p,s,B.b.bh(a.gaY(),"\n")?B.b.A(a.gaY(),0,a.gaY().length-1):a.gaY())},
o7(a){var s=a.length
if(s===0)return 0
else if(B.b.J(a,s-1)===10)return s===1?0:s-B.b.dW(a,"\n",s-2)-1
else return s-B.b.fj(a,"\n")-1},
j6:function j6(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
jq:function jq(a){this.a=a},
j8:function j8(){},
j7:function j7(){},
j9:function j9(){},
jb:function jb(){},
jc:function jc(){},
jd:function jd(){},
ja:function ja(a){this.a=a},
jr:function jr(){},
je:function je(a){this.a=a},
jl:function jl(a,b,c){this.a=a
this.b=b
this.c=c},
jm:function jm(a,b){this.a=a
this.b=b},
jn:function jn(a){this.a=a},
jo:function jo(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
jj:function jj(a,b){this.a=a
this.b=b},
jk:function jk(a,b){this.a=a
this.b=b},
jf:function jf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jg:function jg(a,b,c){this.a=a
this.b=b
this.c=c},
jh:function jh(a,b,c){this.a=a
this.b=b
this.c=c},
ji:function ji(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jp:function jp(a,b,c){this.a=a
this.b=b
this.c=c},
ax:function ax(a,b,c){this.a=a
this.b=b
this.c=c},
lc:function lc(a){this.a=a},
b7:function b7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hy(a,b,c,d){if(a<0)A.L(A.aC("Offset may not be negative, was "+a+"."))
else if(c<0)A.L(A.aC("Line may not be negative, was "+c+"."))
else if(b<0)A.L(A.aC("Column may not be negative, was "+b+"."))
return new A.bt(d,a,c,b)},
bt:function bt(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hz:function hz(){},
hA:function hA(){},
er:function er(){},
km(a,b,c,d){var s=new A.bD(d,a,b,c)
s.ld(a,b,c)
if(!B.b.G(d,c))A.L(A.a7('The context line "'+d+'" must contain "'+c+'".',null))
if(A.lL(d,c,a.gam())==null)A.L(A.a7('The span text "'+c+'" must start at column '+(a.gam()+1)+' in a line within "'+d+'".',null))
return s},
bD:function bD(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
M:function M(a,b,c){this.a=a
this.b=b
this.$ti=c},
df:function df(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
tL(){var s,r,q,p,o,n="align*",m="renderer",l=t.N
$.db.u(0,n,A.bc(l,l))
$.db.k(0,n).u(0,"\\frac{d f(x)}{dx}","<?xml version='1.0' encoding='UTF-8'?>\n<!-- This file was generated by dvisvgm 3.0.3 -->\n<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='22.917823pt' height='21.045652pt' viewBox='160.396636 -14.211782 22.917823 21.045652'>\n<defs>\n<path id='g0-100' d='M4.961395-1.424658C4.961395-1.524284 4.871731-1.524284 4.841843-1.524284C4.742217-1.524284 4.732254-1.484433 4.702366-1.344956C4.533001-.697385 4.353674-.109589 3.945205-.109589C3.676214-.109589 3.646326-.368618 3.646326-.56787C3.646326-.806974 3.666252-.876712 3.706102-1.046077L5.140722-6.804483C5.140722-6.804483 5.140722-6.914072 5.011208-6.914072C4.861768-6.914072 3.915318-6.824408 3.745953-6.804483C3.666252-6.794521 3.606476-6.744707 3.606476-6.615193C3.606476-6.495641 3.696139-6.495641 3.845579-6.495641C4.323786-6.495641 4.343711-6.425903 4.343711-6.326276L4.313823-6.127024L3.716065-3.765878C3.536737-4.134496 3.247821-4.403487 2.799502-4.403487C1.633873-4.403487 .398506-2.938979 .398506-1.484433C.398506-.547945 .946451 .109589 1.723537 .109589C1.92279 .109589 2.420922 .069738 3.01868-.637609C3.098381-.219178 3.447073 .109589 3.92528 .109589C4.273973 .109589 4.503113-.119552 4.662516-.438356C4.83188-.797011 4.961395-1.424658 4.961395-1.424658ZM3.566625-3.138232L3.068493-1.185554C3.01868-1.006227 3.01868-.986301 2.86924-.816936C2.430884-.268991 2.022416-.109589 1.743462-.109589C1.24533-.109589 1.105853-.657534 1.105853-1.046077C1.105853-1.544209 1.424658-2.769614 1.653798-3.227895C1.96264-3.815691 2.410959-4.184309 2.809465-4.184309C3.457036-4.184309 3.596513-3.367372 3.596513-3.307597S3.576588-3.188045 3.566625-3.138232Z'/>\n<path id='g0-102' d='M5.499377-6.336239C5.499377-6.794521 5.041096-7.023661 4.632628-7.023661C4.293898-7.023661 3.666252-6.844334 3.367372-5.858032C3.307597-5.648817 3.277709-5.549191 3.038605-4.293898H2.351183C2.161893-4.293898 2.052304-4.293898 2.052304-4.104608C2.052304-3.985056 2.141968-3.985056 2.331258-3.985056H2.988792L2.241594-.049813C2.062267 .916563 1.892902 1.823163 1.374844 1.823163C1.334994 1.823163 1.085928 1.823163 .896638 1.643836C1.354919 1.613948 1.444583 1.255293 1.444583 1.105853C1.444583 .876712 1.265255 .757161 1.075965 .757161C.816936 .757161 .52802 .976339 .52802 1.354919C.52802 1.803238 .966376 2.042341 1.374844 2.042341C1.92279 2.042341 2.321295 1.454545 2.500623 1.075965C2.819427 .448319 3.048568-.757161 3.058531-.826899L3.656289-3.985056H4.513076C4.712329-3.985056 4.811955-3.985056 4.811955-4.184309C4.811955-4.293898 4.712329-4.293898 4.542964-4.293898H3.716065C3.825654-4.871731 3.815691-4.851806 3.92528-5.429639C3.965131-5.638854 4.104608-6.346202 4.164384-6.465753C4.254047-6.655044 4.423412-6.804483 4.632628-6.804483C4.672478-6.804483 4.931507-6.804483 5.120797-6.625156C4.682441-6.585305 4.582814-6.236613 4.582814-6.087173C4.582814-5.858032 4.762142-5.738481 4.951432-5.738481C5.210461-5.738481 5.499377-5.957659 5.499377-6.336239Z'/>\n<path id='g0-120' d='M4.941469-1.424658C4.941469-1.524284 4.851806-1.524284 4.821918-1.524284C4.732254-1.524284 4.712329-1.484433 4.692403-1.414695C4.363636-.348692 3.686177-.109589 3.367372-.109589C2.978829-.109589 2.819427-.428394 2.819427-.767123C2.819427-.986301 2.879203-1.205479 2.988792-1.643836L3.327522-3.008717C3.387298-3.267746 3.616438-4.184309 4.313823-4.184309C4.363636-4.184309 4.60274-4.184309 4.811955-4.054795C4.533001-4.004981 4.333748-3.755915 4.333748-3.516812C4.333748-3.35741 4.443337-3.16812 4.712329-3.16812C4.931507-3.16812 5.250311-3.347447 5.250311-3.745953C5.250311-4.26401 4.662516-4.403487 4.323786-4.403487C3.745953-4.403487 3.39726-3.875467 3.277709-3.646326C3.028643-4.303861 2.49066-4.403487 2.201743-4.403487C1.165629-4.403487 .597758-3.118306 .597758-2.86924C.597758-2.769614 .71731-2.769614 .71731-2.769614C.797011-2.769614 .826899-2.789539 .846824-2.879203C1.185554-3.935243 1.843088-4.184309 2.181818-4.184309C2.371108-4.184309 2.719801-4.094645 2.719801-3.516812C2.719801-3.20797 2.550436-2.540473 2.181818-1.145704C2.022416-.52802 1.673724-.109589 1.235367-.109589C1.175592-.109589 .946451-.109589 .737235-.239103C.986301-.288917 1.205479-.498132 1.205479-.777086C1.205479-1.046077 .986301-1.125778 .836862-1.125778C.537983-1.125778 .288917-.86675 .288917-.547945C.288917-.089664 .787049 .109589 1.225405 .109589C1.882939 .109589 2.241594-.587796 2.271482-.647572C2.391034-.278954 2.749689 .109589 3.347447 .109589C4.373599 .109589 4.941469-1.175592 4.941469-1.424658Z'/>\n<path id='g1-40' d='M3.297634 2.391034C3.297634 2.361146 3.297634 2.34122 3.128269 2.171856C1.882939 .916563 1.564134-.966376 1.564134-2.49066C1.564134-4.224159 1.942715-5.957659 3.16812-7.202989C3.297634-7.32254 3.297634-7.342466 3.297634-7.372354C3.297634-7.442092 3.257783-7.47198 3.198007-7.47198C3.098381-7.47198 2.201743-6.794521 1.613948-5.529265C1.105853-4.433375 .986301-3.327522 .986301-2.49066C.986301-1.713574 1.09589-.508095 1.643836 .617684C2.241594 1.843088 3.098381 2.49066 3.198007 2.49066C3.257783 2.49066 3.297634 2.460772 3.297634 2.391034Z'/>\n<path id='g1-41' d='M2.879203-2.49066C2.879203-3.267746 2.769614-4.473225 2.221669-5.599004C1.62391-6.824408 .767123-7.47198 .667497-7.47198C.607721-7.47198 .56787-7.43213 .56787-7.372354C.56787-7.342466 .56787-7.32254 .757161-7.143213C1.733499-6.156912 2.30137-4.572852 2.30137-2.49066C2.30137-.787049 1.932752 .966376 .697385 2.221669C.56787 2.34122 .56787 2.361146 .56787 2.391034C.56787 2.450809 .607721 2.49066 .667497 2.49066C.767123 2.49066 1.663761 1.8132 2.251557 .547945C2.759651-.547945 2.879203-1.653798 2.879203-2.49066Z'/>\n</defs>\n<g id='page1'>\n<use x='160.396636' y='-6.739801' xlink:href='#g0-100'/>\n<use x='163.921623' y='-6.739801' xlink:href='#g0-102'/>\n<use x='169.87157' y='-6.739801' xlink:href='#g1-40'/>\n<use x='173.746049' y='-6.739801' xlink:href='#g0-120'/>\n<use x='179.439981' y='-6.739801' xlink:href='#g1-41'/>\n<rect x='160.396636' y='-2.68991' height='.398484' width='22.917797'/>\n<use x='166.415873' y='6.83387' xlink:href='#g0-100'/>\n<use x='171.601305' y='6.83387' xlink:href='#g0-120'/>\n</g>\n</svg>")
$.db.k(0,n).u(0,"f(x)","<?xml version='1.0' encoding='UTF-8'?>\n<!-- This file was generated by dvisvgm 3.0.3 -->\n<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='19.392836pt' height='9.96264pt' viewBox='162.15913 -7.47198 19.392836 9.96264'>\n<defs>\n<path id='g0-102' d='M5.499377-6.336239C5.499377-6.794521 5.041096-7.023661 4.632628-7.023661C4.293898-7.023661 3.666252-6.844334 3.367372-5.858032C3.307597-5.648817 3.277709-5.549191 3.038605-4.293898H2.351183C2.161893-4.293898 2.052304-4.293898 2.052304-4.104608C2.052304-3.985056 2.141968-3.985056 2.331258-3.985056H2.988792L2.241594-.049813C2.062267 .916563 1.892902 1.823163 1.374844 1.823163C1.334994 1.823163 1.085928 1.823163 .896638 1.643836C1.354919 1.613948 1.444583 1.255293 1.444583 1.105853C1.444583 .876712 1.265255 .757161 1.075965 .757161C.816936 .757161 .52802 .976339 .52802 1.354919C.52802 1.803238 .966376 2.042341 1.374844 2.042341C1.92279 2.042341 2.321295 1.454545 2.500623 1.075965C2.819427 .448319 3.048568-.757161 3.058531-.826899L3.656289-3.985056H4.513076C4.712329-3.985056 4.811955-3.985056 4.811955-4.184309C4.811955-4.293898 4.712329-4.293898 4.542964-4.293898H3.716065C3.825654-4.871731 3.815691-4.851806 3.92528-5.429639C3.965131-5.638854 4.104608-6.346202 4.164384-6.465753C4.254047-6.655044 4.423412-6.804483 4.632628-6.804483C4.672478-6.804483 4.931507-6.804483 5.120797-6.625156C4.682441-6.585305 4.582814-6.236613 4.582814-6.087173C4.582814-5.858032 4.762142-5.738481 4.951432-5.738481C5.210461-5.738481 5.499377-5.957659 5.499377-6.336239Z'/>\n<path id='g0-120' d='M4.941469-1.424658C4.941469-1.524284 4.851806-1.524284 4.821918-1.524284C4.732254-1.524284 4.712329-1.484433 4.692403-1.414695C4.363636-.348692 3.686177-.109589 3.367372-.109589C2.978829-.109589 2.819427-.428394 2.819427-.767123C2.819427-.986301 2.879203-1.205479 2.988792-1.643836L3.327522-3.008717C3.387298-3.267746 3.616438-4.184309 4.313823-4.184309C4.363636-4.184309 4.60274-4.184309 4.811955-4.054795C4.533001-4.004981 4.333748-3.755915 4.333748-3.516812C4.333748-3.35741 4.443337-3.16812 4.712329-3.16812C4.931507-3.16812 5.250311-3.347447 5.250311-3.745953C5.250311-4.26401 4.662516-4.403487 4.323786-4.403487C3.745953-4.403487 3.39726-3.875467 3.277709-3.646326C3.028643-4.303861 2.49066-4.403487 2.201743-4.403487C1.165629-4.403487 .597758-3.118306 .597758-2.86924C.597758-2.769614 .71731-2.769614 .71731-2.769614C.797011-2.769614 .826899-2.789539 .846824-2.879203C1.185554-3.935243 1.843088-4.184309 2.181818-4.184309C2.371108-4.184309 2.719801-4.094645 2.719801-3.516812C2.719801-3.20797 2.550436-2.540473 2.181818-1.145704C2.022416-.52802 1.673724-.109589 1.235367-.109589C1.175592-.109589 .946451-.109589 .737235-.239103C.986301-.288917 1.205479-.498132 1.205479-.777086C1.205479-1.046077 .986301-1.125778 .836862-1.125778C.537983-1.125778 .288917-.86675 .288917-.547945C.288917-.089664 .787049 .109589 1.225405 .109589C1.882939 .109589 2.241594-.587796 2.271482-.647572C2.391034-.278954 2.749689 .109589 3.347447 .109589C4.373599 .109589 4.941469-1.175592 4.941469-1.424658Z'/>\n<path id='g1-40' d='M3.297634 2.391034C3.297634 2.361146 3.297634 2.34122 3.128269 2.171856C1.882939 .916563 1.564134-.966376 1.564134-2.49066C1.564134-4.224159 1.942715-5.957659 3.16812-7.202989C3.297634-7.32254 3.297634-7.342466 3.297634-7.372354C3.297634-7.442092 3.257783-7.47198 3.198007-7.47198C3.098381-7.47198 2.201743-6.794521 1.613948-5.529265C1.105853-4.433375 .986301-3.327522 .986301-2.49066C.986301-1.713574 1.09589-.508095 1.643836 .617684C2.241594 1.843088 3.098381 2.49066 3.198007 2.49066C3.257783 2.49066 3.297634 2.460772 3.297634 2.391034Z'/>\n<path id='g1-41' d='M2.879203-2.49066C2.879203-3.267746 2.769614-4.473225 2.221669-5.599004C1.62391-6.824408 .767123-7.47198 .667497-7.47198C.607721-7.47198 .56787-7.43213 .56787-7.372354C.56787-7.342466 .56787-7.32254 .757161-7.143213C1.733499-6.156912 2.30137-4.572852 2.30137-2.49066C2.30137-.787049 1.932752 .966376 .697385 2.221669C.56787 2.34122 .56787 2.361146 .56787 2.391034C.56787 2.450809 .607721 2.49066 .667497 2.49066C.767123 2.49066 1.663761 1.8132 2.251557 .547945C2.759651-.547945 2.879203-1.653798 2.879203-2.49066Z'/>\n</defs>\n<g id='page1'>\n<use x='162.15913' y='0' xlink:href='#g0-102'/>\n<use x='168.109078' y='0' xlink:href='#g1-40'/>\n<use x='171.983556' y='0' xlink:href='#g0-120'/>\n<use x='177.677488' y='0' xlink:href='#g1-41'/>\n</g>\n</svg>")
$.db.k(0,n).u(0,"\\int f(x)dx","<?xml version='1.0' encoding='UTF-8'?>\n<!-- This file was generated by dvisvgm 3.0.3 -->\n<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='41.895255pt' height='22.139439pt' viewBox='150.907926 -13.56037 41.895255 22.139439'>\n<defs>\n<path id='g2-40' d='M3.297634 2.391034C3.297634 2.361146 3.297634 2.34122 3.128269 2.171856C1.882939 .916563 1.564134-.966376 1.564134-2.49066C1.564134-4.224159 1.942715-5.957659 3.16812-7.202989C3.297634-7.32254 3.297634-7.342466 3.297634-7.372354C3.297634-7.442092 3.257783-7.47198 3.198007-7.47198C3.098381-7.47198 2.201743-6.794521 1.613948-5.529265C1.105853-4.433375 .986301-3.327522 .986301-2.49066C.986301-1.713574 1.09589-.508095 1.643836 .617684C2.241594 1.843088 3.098381 2.49066 3.198007 2.49066C3.257783 2.49066 3.297634 2.460772 3.297634 2.391034Z'/>\n<path id='g2-41' d='M2.879203-2.49066C2.879203-3.267746 2.769614-4.473225 2.221669-5.599004C1.62391-6.824408 .767123-7.47198 .667497-7.47198C.607721-7.47198 .56787-7.43213 .56787-7.372354C.56787-7.342466 .56787-7.32254 .757161-7.143213C1.733499-6.156912 2.30137-4.572852 2.30137-2.49066C2.30137-.787049 1.932752 .966376 .697385 2.221669C.56787 2.34122 .56787 2.361146 .56787 2.391034C.56787 2.450809 .607721 2.49066 .667497 2.49066C.767123 2.49066 1.663761 1.8132 2.251557 .547945C2.759651-.547945 2.879203-1.653798 2.879203-2.49066Z'/>\n<path id='g0-90' d='M9.39477 .926526C9.39477 .388543 8.856787 0 8.308842 0C7.551681 0 6.993773 1.085928 6.445828 3.118306C6.41594 3.227895 5.061021 8.229141 3.965131 14.744707C3.706102 16.268991 3.417186 17.932752 3.088418 19.317559C2.909091 20.044832 2.450809 21.917808 1.643836 21.917808C1.285181 21.917808 1.036115 21.688667 1.036115 21.688667C1.354919 21.668742 1.524284 21.449564 1.524284 21.200498C1.524284 20.871731 1.275218 20.712329 1.046077 20.712329C.806974 20.712329 .557908 20.861768 .557908 21.210461C.557908 21.718555 1.05604 22.136986 1.663761 22.136986C3.178082 22.136986 3.745953 19.805729 4.4533 16.916563C5.220423 13.768369 5.867995 10.590286 6.405978 7.392279C6.774595 5.270237 7.143213 3.277709 7.481943 1.992528C7.601494 1.504359 7.940224 .219178 8.328767 .219178C8.637609 .219178 8.886675 .408468 8.926526 .448319C8.597758 .468244 8.428394 .687422 8.428394 .936488C8.428394 1.265255 8.67746 1.424658 8.9066 1.424658C9.145704 1.424658 9.39477 1.275218 9.39477 .926526Z'/>\n<path id='g1-100' d='M4.961395-1.424658C4.961395-1.524284 4.871731-1.524284 4.841843-1.524284C4.742217-1.524284 4.732254-1.484433 4.702366-1.344956C4.533001-.697385 4.353674-.109589 3.945205-.109589C3.676214-.109589 3.646326-.368618 3.646326-.56787C3.646326-.806974 3.666252-.876712 3.706102-1.046077L5.140722-6.804483C5.140722-6.804483 5.140722-6.914072 5.011208-6.914072C4.861768-6.914072 3.915318-6.824408 3.745953-6.804483C3.666252-6.794521 3.606476-6.744707 3.606476-6.615193C3.606476-6.495641 3.696139-6.495641 3.845579-6.495641C4.323786-6.495641 4.343711-6.425903 4.343711-6.326276L4.313823-6.127024L3.716065-3.765878C3.536737-4.134496 3.247821-4.403487 2.799502-4.403487C1.633873-4.403487 .398506-2.938979 .398506-1.484433C.398506-.547945 .946451 .109589 1.723537 .109589C1.92279 .109589 2.420922 .069738 3.01868-.637609C3.098381-.219178 3.447073 .109589 3.92528 .109589C4.273973 .109589 4.503113-.119552 4.662516-.438356C4.83188-.797011 4.961395-1.424658 4.961395-1.424658ZM3.566625-3.138232L3.068493-1.185554C3.01868-1.006227 3.01868-.986301 2.86924-.816936C2.430884-.268991 2.022416-.109589 1.743462-.109589C1.24533-.109589 1.105853-.657534 1.105853-1.046077C1.105853-1.544209 1.424658-2.769614 1.653798-3.227895C1.96264-3.815691 2.410959-4.184309 2.809465-4.184309C3.457036-4.184309 3.596513-3.367372 3.596513-3.307597S3.576588-3.188045 3.566625-3.138232Z'/>\n<path id='g1-102' d='M5.499377-6.336239C5.499377-6.794521 5.041096-7.023661 4.632628-7.023661C4.293898-7.023661 3.666252-6.844334 3.367372-5.858032C3.307597-5.648817 3.277709-5.549191 3.038605-4.293898H2.351183C2.161893-4.293898 2.052304-4.293898 2.052304-4.104608C2.052304-3.985056 2.141968-3.985056 2.331258-3.985056H2.988792L2.241594-.049813C2.062267 .916563 1.892902 1.823163 1.374844 1.823163C1.334994 1.823163 1.085928 1.823163 .896638 1.643836C1.354919 1.613948 1.444583 1.255293 1.444583 1.105853C1.444583 .876712 1.265255 .757161 1.075965 .757161C.816936 .757161 .52802 .976339 .52802 1.354919C.52802 1.803238 .966376 2.042341 1.374844 2.042341C1.92279 2.042341 2.321295 1.454545 2.500623 1.075965C2.819427 .448319 3.048568-.757161 3.058531-.826899L3.656289-3.985056H4.513076C4.712329-3.985056 4.811955-3.985056 4.811955-4.184309C4.811955-4.293898 4.712329-4.293898 4.542964-4.293898H3.716065C3.825654-4.871731 3.815691-4.851806 3.92528-5.429639C3.965131-5.638854 4.104608-6.346202 4.164384-6.465753C4.254047-6.655044 4.423412-6.804483 4.632628-6.804483C4.672478-6.804483 4.931507-6.804483 5.120797-6.625156C4.682441-6.585305 4.582814-6.236613 4.582814-6.087173C4.582814-5.858032 4.762142-5.738481 4.951432-5.738481C5.210461-5.738481 5.499377-5.957659 5.499377-6.336239Z'/>\n<path id='g1-120' d='M4.941469-1.424658C4.941469-1.524284 4.851806-1.524284 4.821918-1.524284C4.732254-1.524284 4.712329-1.484433 4.692403-1.414695C4.363636-.348692 3.686177-.109589 3.367372-.109589C2.978829-.109589 2.819427-.428394 2.819427-.767123C2.819427-.986301 2.879203-1.205479 2.988792-1.643836L3.327522-3.008717C3.387298-3.267746 3.616438-4.184309 4.313823-4.184309C4.363636-4.184309 4.60274-4.184309 4.811955-4.054795C4.533001-4.004981 4.333748-3.755915 4.333748-3.516812C4.333748-3.35741 4.443337-3.16812 4.712329-3.16812C4.931507-3.16812 5.250311-3.347447 5.250311-3.745953C5.250311-4.26401 4.662516-4.403487 4.323786-4.403487C3.745953-4.403487 3.39726-3.875467 3.277709-3.646326C3.028643-4.303861 2.49066-4.403487 2.201743-4.403487C1.165629-4.403487 .597758-3.118306 .597758-2.86924C.597758-2.769614 .71731-2.769614 .71731-2.769614C.797011-2.769614 .826899-2.789539 .846824-2.879203C1.185554-3.935243 1.843088-4.184309 2.181818-4.184309C2.371108-4.184309 2.719801-4.094645 2.719801-3.516812C2.719801-3.20797 2.550436-2.540473 2.181818-1.145704C2.022416-.52802 1.673724-.109589 1.235367-.109589C1.175592-.109589 .946451-.109589 .737235-.239103C.986301-.288917 1.205479-.498132 1.205479-.777086C1.205479-1.046077 .986301-1.125778 .836862-1.125778C.537983-1.125778 .288917-.86675 .288917-.547945C.288917-.089664 .787049 .109589 1.225405 .109589C1.882939 .109589 2.241594-.587796 2.271482-.647572C2.391034-.278954 2.749689 .109589 3.347447 .109589C4.373599 .109589 4.941469-1.175592 4.941469-1.424658Z'/>\n</defs>\n<g id='page1'>\n<use x='150.907926' y='-13.56037' xlink:href='#g0-90'/>\n<use x='162.530981' y='0' xlink:href='#g1-102'/>\n<use x='168.480928' y='0' xlink:href='#g2-40'/>\n<use x='172.355407' y='0' xlink:href='#g1-120'/>\n<use x='178.049339' y='0' xlink:href='#g2-41'/>\n<use x='181.923817' y='0' xlink:href='#g1-100'/>\n<use x='187.10925' y='0' xlink:href='#g1-120'/>\n</g>\n</svg>")
l=document
s=l.getElementById("canvas-container")
s.toString
r=A.a([],t.dw)
q=A.mr(0)
l=l.createElement("canvas")
t.jQ.a(l)
p=new A.fA(l,s,r,B.e,B.e,q,B.e,B.e)
p.a=A.pO()
s.appendChild(l).toString
o=new A.jM()
o.lc()
o.w=p
l=o.f
l===$&&A.b("camera")
p.ih(l)
l=o.f
s=o.w
l.r=s
s.ih(l)
s=l.r
r=s.a
r===$&&A.b(m)
r.kQ(s)
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
r.fz(l.f)
o.cI()},
jM:function jM(){var _=this
_.dx=_.db=_.cy=_.cx=_.CW=_.ch=_.ay=_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=$
_.a=0
_.w=_.f=_.d=$},
jN:function jN(){},
jO:function jO(){},
jP:function jP(){},
jR:function jR(a){this.a=a},
jQ:function jQ(a){this.a=a},
tP(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
tB(a,b,c,d){var s,r,q,p,o,n=A.bc(d,c.h("n<0>"))
for(s=c.h("A<0>"),r=0;r<1;++r){q=a[r]
p=b.$1(q)
o=n.k(0,p)
if(o==null){o=A.a([],s)
n.u(0,p,o)
p=o}else p=o
J.m8(p,q)}return n},
nw(a,b){return A.qb(a,b,b)},
qb(a,b,c){return A.mT(function(){var s=a,r=b
var q=0,p=1,o,n,m
return function $async$nw(d,e){if(d===1){o=e
q=p}while(true)switch(q){case 0:n=s.length,m=0
case 2:if(!(m<s.length)){q=4
break}q=5
return A.rd(s[m])
case 5:case 3:s.length===n||(0,A.e)(s),++m
q=2
break
case 4:return A.mD()
case 1:return A.mE(o)}}},c)},
jH(a,b,c){return A.qh(a,b,c,c)},
qh(a,b,c,d){return A.mT(function(){var s=a,r=b,q=c
var p=0,o=1,n,m,l,k
return function $async$jH(e,f){if(e===1){n=f
p=o}while(true)switch(p){case 0:m=J.X(s),l=0
case 2:if(!(l<m.gm(s))){p=4
break}k=m.k(s,l)
p=A.au(r.$2(l,k))?5:6
break
case 5:p=7
return k
case 7:case 6:case 3:++l
p=2
break
case 4:return A.mD()
case 1:return A.mE(n)}}},d)},
oS(){var s,r,q,p,o=null
try{o=A.my()}catch(s){if(t.mA.b(A.bk(s))){r=$.lx
if(r!=null)return r
throw s}else throw s}if(J.T(o,$.oy)){r=$.lx
r.toString
return r}$.oy=o
if($.n8()==$.fg())r=$.lx=o.jc(".").l(0)
else{q=o.fD()
p=q.length-1
r=$.lx=p===0?q:B.b.A(q,0,p)}return r},
p2(a){var s
if(!(a>=65&&a<=90))s=a>=97&&a<=122
else s=!0
return s},
p3(a,b){var s=a.length,r=b+2
if(s<r)return!1
if(!A.p2(B.b.J(a,b)))return!1
if(B.b.J(a,b+1)!==58)return!1
if(s===r)return!0
return B.b.J(a,r)===47},
tH(a){var s,r,q,p
if(a.gm(a)===0)return!0
s=a.gZ(a)
for(r=A.bu(a,1,null,a.$ti.h("B.E")),q=r.$ti,r=new A.K(r,r.gm(r),q.h("K<B.E>")),q=q.h("B.E");r.q();){p=r.d
if(!J.T(p==null?q.a(p):p,s))return!1}return!0},
tR(a,b,c){var s=B.a.ah(a,null)
if(s<0)throw A.d(A.a7(A.k(a)+" contains no null elements.",null))
B.a.u(a,s,b)},
pb(a,b,c){var s=B.a.ah(a,b)
if(s<0)throw A.d(A.a7(A.k(a)+" contains no elements matching "+b.l(0)+".",null))
B.a.u(a,s,null)},
tt(a,b){var s,r,q,p
for(s=new A.a8(a),r=t.E,s=new A.K(s,s.gm(s),r.h("K<u.E>")),r=r.h("u.E"),q=0;s.q();){p=s.d
if((p==null?r.a(p):p)===b)++q}return q},
lL(a,b,c){var s,r,q
if(b.length===0)for(s=0;!0;){r=B.b.aM(a,"\n",s)
if(r===-1)return a.length-s>=c?s:null
if(r-s>=c)return s
s=r+1}r=B.b.ah(a,b)
for(;r!==-1;){q=r===0?0:B.b.dW(a,"\n",r-1)+1
if(c===r-q)return q
r=B.b.aM(a,b,r+1)}return null}},J={
n3(a,b,c,d){return{i:a,p:b,e:c,x:d}},
it(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.n_==null){A.tD()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.d(A.hJ("Return interceptor for "+A.k(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.ld
if(o==null)o=$.ld=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.tK(a)
if(p!=null)return p
if(typeof a=="function")return B.b2
s=Object.getPrototypeOf(a)
if(s==null)return B.az
if(s===Object.prototype)return B.az
if(typeof q=="function"){o=$.ld
if(o==null)o=$.ld=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.Z,enumerable:false,writable:true,configurable:true})
return B.Z}return B.Z},
nx(a,b){if(a<0||a>4294967295)throw A.d(A.Z(a,0,4294967295,"length",null))
return J.ny(new Array(a),b)},
mh(a,b){if(a<0)throw A.d(A.a7("Length must be a non-negative integer: "+a,null))
return A.a(new Array(a),b.h("A<0>"))},
ny(a,b){return J.jB(A.a(a,b.h("A<0>")),b)},
jB(a,b){a.fixed$length=Array
return a},
qc(a,b){var s=t.bP
return J.ne(s.a(a),s.a(b))},
nz(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
qd(a,b){var s,r
for(s=a.length;b<s;){r=B.b.E(a,b)
if(r!==32&&r!==13&&!J.nz(r))break;++b}return b},
qe(a,b){var s,r
for(;b>0;b=s){s=b-1
r=B.b.J(a,s)
if(r!==32&&r!==13&&!J.nz(r))break}return b},
bi(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cX.prototype
return J.e8.prototype}if(typeof a=="string")return J.bA.prototype
if(a==null)return J.e7.prototype
if(typeof a=="boolean")return J.h1.prototype
if(a.constructor==Array)return J.A.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bB.prototype
return a}if(a instanceof A.E)return a
return J.it(a)},
tx(a){if(typeof a=="number")return J.c_.prototype
if(typeof a=="string")return J.bA.prototype
if(a==null)return a
if(a.constructor==Array)return J.A.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bB.prototype
return a}if(a instanceof A.E)return a
return J.it(a)},
X(a){if(typeof a=="string")return J.bA.prototype
if(a==null)return a
if(a.constructor==Array)return J.A.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bB.prototype
return a}if(a instanceof A.E)return a
return J.it(a)},
b9(a){if(a==null)return a
if(a.constructor==Array)return J.A.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bB.prototype
return a}if(a instanceof A.E)return a
return J.it(a)},
oV(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cX.prototype
return J.e8.prototype}if(a==null)return a
if(!(a instanceof A.E))return J.bF.prototype
return a},
oW(a){if(typeof a=="number")return J.c_.prototype
if(a==null)return a
if(!(a instanceof A.E))return J.bF.prototype
return a},
oX(a){if(typeof a=="number")return J.c_.prototype
if(typeof a=="string")return J.bA.prototype
if(a==null)return a
if(!(a instanceof A.E))return J.bF.prototype
return a},
lN(a){if(typeof a=="string")return J.bA.prototype
if(a==null)return a
if(!(a instanceof A.E))return J.bF.prototype
return a},
oY(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bB.prototype
return a}if(a instanceof A.E)return a
return J.it(a)},
ty(a){if(a==null)return a
if(!(a instanceof A.E))return J.bF.prototype
return a},
m6(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.tx(a).K(a,b)},
T(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.bi(a).W(a,b)},
cM(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.oX(a).v(a,b)},
px(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.oW(a).M(a,b)},
Y(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||A.tI(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.X(a).k(a,b)},
m7(a,b,c){return J.b9(a).u(a,b,c)},
py(a,b,c,d){return J.oY(a).lp(a,b,c,d)},
pz(a,b,c,d){return J.oY(a).lK(a,b,c,d)},
m8(a,b){return J.b9(a).n(a,b)},
m9(a,b){return J.lN(a).c0(a,b)},
nd(a,b){return J.lN(a).J(a,b)},
ne(a,b){return J.oX(a).az(a,b)},
iw(a,b){return J.b9(a).ag(a,b)},
ix(a){return J.b9(a).gZ(a)},
aE(a){return J.bi(a).ga0(a)},
fh(a){return J.X(a).gan(a)},
ab(a){return J.b9(a).gI(a)},
nf(a){return J.b9(a).gp(a)},
W(a){return J.X(a).gm(a)},
pA(a){return J.ty(a).gak(a)},
pB(a){if(typeof a==="number")return a>0?1:a<0?-1:a
return J.oV(a).ger(a)},
p(a,b,c){return J.b9(a).dX(a,b,c)},
pC(a,b,c){return J.lN(a).iS(a,b,c)},
pD(a,b){return J.X(a).sm(a,b)},
ng(a,b){return J.b9(a).b7(a,b)},
nh(a,b){return J.b9(a).cf(a,b)},
pE(a){return J.oW(a).bp(a)},
fi(a){return J.b9(a).av(a)},
bx(a){return J.bi(a).l(a)},
ni(a){return J.lN(a).e6(a)},
pF(a,b){return J.b9(a).e8(a,b)},
e5:function e5(){},
h1:function h1(){},
e7:function e7(){},
b2:function b2(){},
cv:function cv(){},
hm:function hm(){},
bF:function bF(){},
bB:function bB(){},
A:function A(a){this.$ti=a},
jC:function jC(a){this.$ti=a},
av:function av(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
c_:function c_(){},
cX:function cX(){},
e8:function e8(){},
bA:function bA(){}},B={}
var w=[A,J,B]
var $={}
A.mj.prototype={}
J.e5.prototype={
W(a,b){return a===b},
ga0(a){return A.bM(a)},
l(a){return"Instance of '"+A.k9(a)+"'"}}
J.h1.prototype={
l(a){return String(a)},
ga0(a){return a?519018:218159},
$iy:1}
J.e7.prototype={
W(a,b){return null==b},
l(a){return"null"},
ga0(a){return 0},
$ial:1}
J.b2.prototype={}
J.cv.prototype={
ga0(a){return 0},
l(a){return String(a)}}
J.hm.prototype={}
J.bF.prototype={}
J.bB.prototype={
l(a){var s=a[$.pg()]
if(s==null)return this.kW(a)
return"JavaScript function for "+J.bx(s)},
$ibK:1}
J.A.prototype={
n(a,b){A.v(a).c.a(b)
if(!!a.fixed$length)A.L(A.R("add"))
a.push(b)},
e4(a,b){if(!!a.fixed$length)A.L(A.R("removeAt"))
if(b<0||b>=a.length)throw A.d(A.ka(b,null))
return a.splice(b,1)[0]},
bD(a,b,c){A.v(a).c.a(c)
if(!!a.fixed$length)A.L(A.R("insert"))
if(b<0||b>a.length)throw A.d(A.ka(b,null))
a.splice(b,0,c)},
dT(a,b,c){var s,r
A.v(a).h("j<1>").a(c)
if(!!a.fixed$length)A.L(A.R("insertAll"))
A.nM(b,0,a.length,"index")
if(!t.gt.b(c))c=J.fi(c)
s=J.W(c)
a.length=a.length+s
r=b+s
this.dh(a,r,a.length,a,b)
this.ko(a,b,r,c)},
d6(a){if(!!a.fixed$length)A.L(A.R("removeLast"))
if(a.length===0)throw A.d(A.cf(a,-1))
return a.pop()},
a6(a,b){var s
if(!!a.fixed$length)A.L(A.R("remove"))
for(s=0;s<a.length;++s)if(J.T(a[s],b)){a.splice(s,1)
return!0}return!1},
eM(a,b,c){var s,r,q,p,o
A.v(a).h("y(1)").a(b)
s=[]
r=a.length
for(q=0;q<r;++q){p=a[q]
if(!A.au(b.$1(p)))s.push(p)
if(a.length!==r)throw A.d(A.as(a))}o=s.length
if(o===r)return
this.sm(a,o)
for(q=0;q<s.length;++q)a[q]=s[q]},
e8(a,b){var s=A.v(a)
return new A.ai(a,s.h("y(1)").a(b),s.h("ai<1>"))},
H(a,b){var s
A.v(a).h("j<1>").a(b)
if(!!a.fixed$length)A.L(A.R("addAll"))
if(Array.isArray(b)){this.lo(a,b)
return}for(s=J.ab(b);s.q();)a.push(s.gC())},
lo(a,b){var s,r
t.dG.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.d(A.as(a))
for(r=0;r<s;++r)a.push(b[r])},
bO(a){if(!!a.fixed$length)A.L(A.R("clear"))
a.length=0},
ba(a,b){var s,r
A.v(a).h("~(1)").a(b)
s=a.length
for(r=0;r<s;++r){b.$1(a[r])
if(a.length!==s)throw A.d(A.as(a))}},
dX(a,b,c){var s=A.v(a)
return new A.H(a,s.X(c).h("1(2)").a(b),s.h("@<1>").X(c).h("H<1,2>"))},
aB(a,b){var s,r=A.bC(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.u(r,s,A.k(a[s]))
return r.join(b)},
aU(a){return this.aB(a,"")},
b7(a,b){return A.bu(a,b,null,A.v(a).c)},
b5(a,b){var s,r,q
A.v(a).h("1(1,1)").a(b)
s=a.length
if(s===0)throw A.d(A.am())
if(0>=s)return A.c(a,0)
r=a[0]
for(q=1;q<s;++q){r=b.$2(r,a[q])
if(s!==a.length)throw A.d(A.as(a))}return r},
ff(a,b,c,d){var s,r,q
d.a(b)
A.v(a).X(d).h("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.d(A.as(a))}return r},
ag(a,b){if(!(b>=0&&b<a.length))return A.c(a,b)
return a[b]},
b8(a,b,c){if(b<0||b>a.length)throw A.d(A.Z(b,0,a.length,"start",null))
if(c<b||c>a.length)throw A.d(A.Z(c,b,a.length,"end",null))
if(b===c)return A.a([],A.v(a))
return A.a(a.slice(b,c),A.v(a))},
gZ(a){if(a.length>0)return a[0]
throw A.d(A.am())},
gp(a){var s=a.length
if(s>0)return a[s-1]
throw A.d(A.am())},
fw(a,b,c){if(!!a.fixed$length)A.L(A.R("removeRange"))
A.aF(b,c,a.length)
a.splice(b,c-b)},
dh(a,b,c,d,e){var s,r,q,p,o
A.v(a).h("j<1>").a(d)
if(!!a.immutable$list)A.L(A.R("setRange"))
A.aF(b,c,a.length)
s=c-b
if(s===0)return
A.b5(e,"skipCount")
if(t.gs.b(d)){r=d
q=e}else{r=J.ng(d,e).bq(0,!1)
q=0}p=J.X(r)
if(q+s>p.gm(r))throw A.d(A.qa())
if(q<b)for(o=s-1;o>=0;--o)a[b+o]=p.k(r,q+o)
else for(o=0;o<s;++o)a[b+o]=p.k(r,q+o)},
ko(a,b,c,d){return this.dh(a,b,c,d,0)},
b1(a,b){var s,r
A.v(a).h("y(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(A.au(b.$1(a[r])))return!0
if(a.length!==s)throw A.d(A.as(a))}return!1},
ct(a,b){var s,r
A.v(a).h("y(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!A.au(b.$1(a[r])))return!1
if(a.length!==s)throw A.d(A.as(a))}return!0},
cf(a,b){var s,r=A.v(a)
r.h("i(1,1)?").a(b)
if(!!a.immutable$list)A.L(A.R("sort"))
s=b==null?J.rX():b
A.nS(a,s,r.c)},
kA(a){return this.cf(a,null)},
aM(a,b,c){var s,r=a.length
if(c>=r)return-1
for(s=c;s<r;++s){if(!(s<a.length))return A.c(a,s)
if(J.T(a[s],b))return s}return-1},
ah(a,b){return this.aM(a,b,0)},
G(a,b){var s
for(s=0;s<a.length;++s)if(J.T(a[s],b))return!0
return!1},
gan(a){return a.length===0},
l(a){return A.jz(a,"[","]")},
bq(a,b){var s=A.a(a.slice(0),A.v(a))
return s},
av(a){return this.bq(a,!0)},
gI(a){return new J.av(a,a.length,A.v(a).h("av<1>"))},
ga0(a){return A.bM(a)},
gm(a){return a.length},
sm(a,b){if(!!a.fixed$length)A.L(A.R("set length"))
if(b<0)throw A.d(A.Z(b,0,null,"newLength",null))
if(b>a.length)A.v(a).c.a(null)
a.length=b},
k(a,b){if(!(b>=0&&b<a.length))throw A.d(A.cf(a,b))
return a[b]},
u(a,b,c){A.v(a).c.a(c)
if(!!a.immutable$list)A.L(A.R("indexed set"))
if(!(b>=0&&b<a.length))throw A.d(A.cf(a,b))
a[b]=c},
fh(a,b){var s
A.v(a).h("y(1)").a(b)
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(A.au(b.$1(a[s])))return s
return-1},
$iN:1,
$ij:1,
$in:1}
J.jC.prototype={}
J.av.prototype={
gC(){var s=this.d
return s==null?this.$ti.c.a(s):s},
q(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.d(A.e(q))
s=r.c
if(s>=p){r.shp(null)
return!1}r.shp(q[s]);++r.c
return!0},
shp(a){this.d=this.$ti.h("1?").a(a)},
$iS:1}
J.c_.prototype={
az(a,b){var s
A.lp(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gdV(b)
if(this.gdV(a)===s)return 0
if(this.gdV(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gdV(a){return a===0?1/a<0:a<0},
ger(a){var s
if(a>0)s=1
else s=a<0?-1:a
return s},
bp(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.d(A.R(""+a+".toInt()"))},
dF(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.d(A.R(""+a+".ceil()"))},
nE(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.d(A.R(""+a+".floor()"))},
fE(a,b){var s
if(b>20)throw A.d(A.Z(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gdV(a))return"-"+s
return s},
oJ(a,b){var s,r,q,p
if(b<2||b>36)throw A.d(A.Z(b,2,36,"radix",null))
s=a.toString(b)
if(B.b.J(s,s.length-1)!==41)return s
r=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(r==null)A.L(A.R("Unexpected toString result: "+s))
q=r.length
if(1>=q)return A.c(r,1)
s=r[1]
if(3>=q)return A.c(r,3)
p=+r[3]
q=r[2]
if(q!=null){s+=q
p-=q.length}return s+B.b.v("0",p)},
l(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
ga0(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
K(a,b){A.lp(b)
return a+b},
v(a,b){return a*b},
a7(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
b_(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.hR(a,b)},
aT(a,b){return(a|0)===a?a/b|0:this.hR(a,b)},
hR(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.d(A.R("Result of truncating division is "+A.k(s)+": "+A.k(a)+" ~/ "+b))},
cQ(a,b){var s
if(a>0)s=this.hP(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
lN(a,b){if(0>b)throw A.d(A.fc(b))
return this.hP(a,b)},
hP(a,b){return b>31?0:a>>>b},
$iae:1,
$iD:1,
$iad:1}
J.cX.prototype={
ger(a){var s
if(a>0)s=1
else s=a<0?-1:a
return s},
$ii:1}
J.e8.prototype={}
J.bA.prototype={
J(a,b){if(b<0)throw A.d(A.cf(a,b))
if(b>=a.length)A.L(A.cf(a,b))
return a.charCodeAt(b)},
E(a,b){if(b>=a.length)throw A.d(A.cf(a,b))
return a.charCodeAt(b)},
eS(a,b,c){var s=b.length
if(c>s)throw A.d(A.Z(c,0,s,null,null))
return new A.ig(b,a,c)},
c0(a,b){return this.eS(a,b,0)},
iS(a,b,c){var s,r,q=null
if(c<0||c>b.length)throw A.d(A.Z(c,0,b.length,q,q))
s=a.length
if(c+s>b.length)return q
for(r=0;r<s;++r)if(this.J(b,c+r)!==this.E(a,r))return q
return new A.dd(c,a)},
K(a,b){return a+b},
bh(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.aq(a,r-s)},
j9(a,b,c){A.nM(0,0,a.length,"startIndex")
return A.tW(a,b,c,0)},
cg(a,b){if(typeof b=="string")return A.a(a.split(b),t.s)
else if(b instanceof A.cu&&b.ghF().exec("").length-2===0)return A.a(a.split(b.b),t.s)
else return this.ly(a,b)},
cc(a,b,c,d){var s=A.aF(b,c,a.length)
return A.pd(a,b,s,d)},
ly(a,b){var s,r,q,p,o,n,m=A.a([],t.s)
for(s=J.m9(b,a),s=s.gI(s),r=0,q=1;s.q();){p=s.gC()
o=p.gS(p)
n=p.gU()
q=n-o
if(q===0&&r===o)continue
B.a.n(m,this.A(a,r,o))
r=n}if(r<a.length||q>0)B.a.n(m,this.aq(a,r))
return m},
ab(a,b,c){var s
t.oc.a(b)
if(c<0||c>a.length)throw A.d(A.Z(c,0,a.length,null,null))
if(typeof b=="string"){s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)}return J.pC(b,a,c)!=null},
a_(a,b){return this.ab(a,b,0)},
A(a,b,c){return a.substring(b,A.aF(b,c,a.length))},
aq(a,b){return this.A(a,b,null)},
e6(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(this.E(p,0)===133){s=J.qd(p,1)
if(s===o)return""}else s=0
r=o-1
q=this.J(p,r)===133?J.qe(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
v(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.d(B.b_)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
o1(a,b){var s=b-a.length
if(s<=0)return a
return a+this.v(" ",s)},
aM(a,b,c){var s
if(c<0||c>a.length)throw A.d(A.Z(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
ah(a,b){return this.aM(a,b,0)},
dW(a,b,c){var s,r
if(c==null)c=a.length
else if(c<0||c>a.length)throw A.d(A.Z(c,0,a.length,null,null))
s=b.length
r=a.length
if(c+s>r)c=r-s
return a.lastIndexOf(b,c)},
fj(a,b){return this.dW(a,b,null)},
mZ(a,b,c){var s=a.length
if(c>s)throw A.d(A.Z(c,0,s,null,null))
return A.cj(a,b,c)},
G(a,b){return this.mZ(a,b,0)},
az(a,b){var s
A.aq(b)
if(a===b)s=0
else s=a<b?-1:1
return s},
l(a){return a},
ga0(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gm(a){return a.length},
k(a,b){if(!(b>=0&&b<a.length))throw A.d(A.cf(a,b))
return a[b]},
$iae:1,
$id4:1,
$im:1}
A.cb.prototype={
gI(a){var s=A.z(this)
return new A.dG(J.ab(this.gby()),s.h("@<1>").X(s.z[1]).h("dG<1,2>"))},
gm(a){return J.W(this.gby())},
gan(a){return J.fh(this.gby())},
b7(a,b){var s=A.z(this)
return A.np(J.ng(this.gby(),b),s.c,s.z[1])},
ag(a,b){return A.z(this).z[1].a(J.iw(this.gby(),b))},
gZ(a){return A.z(this).z[1].a(J.ix(this.gby()))},
gp(a){return A.z(this).z[1].a(J.nf(this.gby()))},
l(a){return J.bx(this.gby())}}
A.dG.prototype={
q(){return this.a.q()},
gC(){return this.$ti.z[1].a(this.a.gC())},
$iS:1}
A.cn.prototype={
gby(){return this.a}}
A.eG.prototype={$iN:1}
A.eD.prototype={
k(a,b){return this.$ti.z[1].a(J.Y(this.a,b))},
u(a,b,c){var s=this.$ti
J.m7(this.a,b,s.c.a(s.z[1].a(c)))},
sm(a,b){J.pD(this.a,b)},
n(a,b){var s=this.$ti
J.m8(this.a,s.c.a(s.z[1].a(b)))},
cf(a,b){var s
this.$ti.h("i(2,2)?").a(b)
s=b==null?null:new A.kV(this,b)
J.nh(this.a,s)},
$iN:1,
$in:1}
A.kV.prototype={
$2(a,b){var s=this.a.$ti,r=s.c
r.a(a)
r.a(b)
s=s.z[1]
return this.b.$2(s.a(a),s.a(b))},
$S(){return this.a.$ti.h("i(1,1)")}}
A.aN.prototype={
gby(){return this.a}}
A.e9.prototype={
l(a){return"LateInitializationError: "+this.a}}
A.a8.prototype={
gm(a){return this.a.length},
k(a,b){return B.b.J(this.a,b)}}
A.lZ.prototype={
$0(){var s=new A.ap($.a9,t.av)
s.hj(null)
return s},
$S:87}
A.kl.prototype={}
A.N.prototype={}
A.B.prototype={
gI(a){var s=this
return new A.K(s,s.gm(s),A.z(s).h("K<B.E>"))},
gan(a){return this.gm(this)===0},
gZ(a){if(this.gm(this)===0)throw A.d(A.am())
return this.ag(0,0)},
gp(a){var s=this
if(s.gm(s)===0)throw A.d(A.am())
return s.ag(0,s.gm(s)-1)},
aB(a,b){var s,r,q,p=this,o=p.gm(p)
if(b.length!==0){if(o===0)return""
s=A.k(p.ag(0,0))
if(o!==p.gm(p))throw A.d(A.as(p))
for(r=s,q=1;q<o;++q){r=r+b+A.k(p.ag(0,q))
if(o!==p.gm(p))throw A.d(A.as(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.k(p.ag(0,q))
if(o!==p.gm(p))throw A.d(A.as(p))}return r.charCodeAt(0)==0?r:r}},
aU(a){return this.aB(a,"")},
b5(a,b){var s,r,q,p=this
A.z(p).h("B.E(B.E,B.E)").a(b)
s=p.gm(p)
if(s===0)throw A.d(A.am())
r=p.ag(0,0)
for(q=1;q<s;++q){r=b.$2(r,p.ag(0,q))
if(s!==p.gm(p))throw A.d(A.as(p))}return r},
b7(a,b){return A.bu(this,b,null,A.z(this).h("B.E"))},
bq(a,b){return A.h(this,b,A.z(this).h("B.E"))},
av(a){return this.bq(a,!0)}}
A.aI.prototype={
ci(a,b,c,d){var s,r=this.b
A.b5(r,"start")
s=this.c
if(s!=null){A.b5(s,"end")
if(r>s)throw A.d(A.Z(r,0,s,"start",null))}},
glz(){var s=J.W(this.a),r=this.c
if(r==null||r>s)return s
return r},
glS(){var s=J.W(this.a),r=this.b
if(r>s)return s
return r},
gm(a){var s,r=J.W(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
if(typeof s!=="number")return s.M()
return s-q},
ag(a,b){var s=this,r=s.glS()+b
if(b<0||r>=s.glz())throw A.d(A.h_(b,s,"index",null,null))
return J.iw(s.a,r)},
b7(a,b){var s,r,q=this
A.b5(b,"count")
s=q.b+b
r=q.c
if(r!=null&&s>=r)return new A.dQ(q.$ti.h("dQ<1>"))
return A.bu(q.a,s,r,q.$ti.c)},
oE(a,b){var s,r,q,p=this
A.b5(b,"count")
s=p.c
r=p.b
q=r+b
if(s==null)return A.bu(p.a,r,q,p.$ti.c)
else{if(s<q)return p
return A.bu(p.a,r,q,p.$ti.c)}},
bq(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.X(n),l=m.gm(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.mh(0,n):J.nx(0,n)}r=A.bC(s,m.ag(n,o),b,p.$ti.c)
for(q=1;q<s;++q){B.a.u(r,q,m.ag(n,o+q))
if(m.gm(n)<l)throw A.d(A.as(p))}return r},
av(a){return this.bq(a,!0)}}
A.K.prototype={
gC(){var s=this.d
return s==null?this.$ti.c.a(s):s},
q(){var s,r=this,q=r.a,p=J.X(q),o=p.gm(q)
if(r.b!==o)throw A.d(A.as(q))
s=r.c
if(s>=o){r.sbK(null)
return!1}r.sbK(p.ag(q,s));++r.c
return!0},
sbK(a){this.d=this.$ti.h("1?").a(a)},
$iS:1}
A.cy.prototype={
gI(a){var s=A.z(this)
return new A.cz(J.ab(this.a),this.b,s.h("@<1>").X(s.z[1]).h("cz<1,2>"))},
gm(a){return J.W(this.a)},
gan(a){return J.fh(this.a)},
gZ(a){return this.b.$1(J.ix(this.a))},
gp(a){return this.b.$1(J.nf(this.a))},
ag(a,b){return this.b.$1(J.iw(this.a,b))}}
A.dO.prototype={$iN:1}
A.cz.prototype={
q(){var s=this,r=s.b
if(r.q()){s.sbK(s.c.$1(r.gC()))
return!0}s.sbK(null)
return!1},
gC(){var s=this.a
return s==null?this.$ti.z[1].a(s):s},
sbK(a){this.a=this.$ti.h("2?").a(a)}}
A.H.prototype={
gm(a){return J.W(this.a)},
ag(a,b){return this.b.$1(J.iw(this.a,b))}}
A.ai.prototype={
gI(a){return new A.cF(J.ab(this.a),this.b,this.$ti.h("cF<1>"))}}
A.cF.prototype={
q(){var s,r
for(s=this.a,r=this.b;s.q();)if(A.au(r.$1(s.gC())))return!0
return!1},
gC(){return this.a.gC()}}
A.dT.prototype={
gI(a){var s=this.$ti
return new A.dU(J.ab(this.a),this.b,B.a1,s.h("@<1>").X(s.z[1]).h("dU<1,2>"))}}
A.dU.prototype={
gC(){var s=this.d
return s==null?this.$ti.z[1].a(s):s},
q(){var s,r,q=this
if(q.c==null)return!1
for(s=q.a,r=q.b;!q.c.q();){q.sbK(null)
if(s.q()){q.shq(null)
q.shq(J.ab(r.$1(s.gC())))}else return!1}q.sbK(q.c.gC())
return!0},
shq(a){this.c=this.$ti.h("S<2>?").a(a)},
sbK(a){this.d=this.$ti.h("2?").a(a)},
$iS:1}
A.bO.prototype={
b7(a,b){A.iB(b,"count",t.S)
A.b5(b,"count")
return new A.bO(this.a,this.b+b,A.z(this).h("bO<1>"))},
gI(a){return new A.eq(J.ab(this.a),this.b,A.z(this).h("eq<1>"))}}
A.cT.prototype={
gm(a){var s=J.W(this.a)-this.b
if(s>=0)return s
return 0},
b7(a,b){A.iB(b,"count",t.S)
A.b5(b,"count")
return new A.cT(this.a,this.b+b,this.$ti)},
$iN:1}
A.eq.prototype={
q(){var s,r
for(s=this.a,r=0;r<this.b;++r)s.q()
this.b=0
return s.q()},
gC(){return this.a.gC()}}
A.dQ.prototype={
gI(a){return B.a1},
gan(a){return!0},
gm(a){return 0},
gZ(a){throw A.d(A.am())},
gp(a){throw A.d(A.am())},
ag(a,b){throw A.d(A.Z(b,0,0,"index",null))},
b7(a,b){A.b5(b,"count")
return this}}
A.dR.prototype={
q(){return!1},
gC(){throw A.d(A.am())},
$iS:1}
A.an.prototype={
gI(a){return new A.cG(J.ab(this.a),this.$ti.h("cG<1>"))}}
A.cG.prototype={
q(){var s,r
for(s=this.a,r=this.$ti.c;s.q();)if(r.b(s.gC()))return!0
return!1},
gC(){return this.$ti.c.a(this.a.gC())},
$iS:1}
A.bo.prototype={
sm(a,b){throw A.d(A.R("Cannot change the length of a fixed-length list"))},
n(a,b){A.aJ(a).h("bo.E").a(b)
throw A.d(A.R("Cannot add to a fixed-length list"))}}
A.bG.prototype={
u(a,b,c){A.z(this).h("bG.E").a(c)
throw A.d(A.R("Cannot modify an unmodifiable list"))},
sm(a,b){throw A.d(A.R("Cannot change the length of an unmodifiable list"))},
n(a,b){A.z(this).h("bG.E").a(b)
throw A.d(A.R("Cannot add to an unmodifiable list"))},
cf(a,b){A.z(this).h("i(bG.E,bG.E)?").a(b)
throw A.d(A.R("Cannot modify an unmodifiable list"))}}
A.dg.prototype={}
A.V.prototype={
gm(a){return J.W(this.a)},
ag(a,b){var s=this.a,r=J.X(s)
return r.ag(s,r.gm(s)-1-b)}}
A.f0.prototype={}
A.cS.prototype={
l(a){return A.mp(this)},
gdN(a){return this.nj(0,A.z(this).h("bd<1,2>"))},
nj(a,b){var s=this
return A.mT(function(){var r=a
var q=0,p=1,o,n,m,l,k,j
return function $async$gdN(c,d){if(c===1){o=d
q=p}while(true)switch(q){case 0:n=s.gbl(),n=n.gI(n),m=A.z(s),l=m.z[1],m=m.h("@<1>").X(l).h("bd<1,2>")
case 2:if(!n.q()){q=3
break}k=n.gC()
j=s.k(0,k)
q=4
return new A.bd(k,j==null?l.a(j):j,m)
case 4:q=2
break
case 3:return A.mD()
case 1:return A.mE(o)}}},b)},
$iaS:1}
A.t.prototype={
gm(a){return this.a},
aj(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
k(a,b){if(!this.aj(b))return null
return this.b[A.aq(b)]},
ba(a,b){var s,r,q,p,o,n=this.$ti
n.h("~(1,2)").a(b)
s=this.c
for(r=s.length,q=this.b,n=n.z[1],p=0;p<r;++p){o=A.aq(s[p])
b.$2(o,n.a(q[o]))}},
gbl(){return new A.eE(this,this.$ti.h("eE<1>"))}}
A.eE.prototype={
gI(a){var s=this.a.c
return new J.av(s,s.length,A.v(s).h("av<1>"))},
gm(a){return this.a.c.length}}
A.bY.prototype={
cP(){var s,r,q,p=this,o=p.$map
if(o==null){s=p.$ti
r=s.c
q=A.q4(r)
o=A.aa(A.t6(),q,r,s.z[1])
A.oU(p.a,o)
p.$map=o}return o},
aj(a){return this.cP().aj(a)},
k(a,b){return this.cP().k(0,b)},
ba(a,b){this.$ti.h("~(1,2)").a(b)
this.cP().ba(0,b)},
gbl(){var s=this.cP()
return new A.aQ(s,A.z(s).h("aQ<1>"))},
gm(a){return this.cP().a}}
A.j5.prototype={
$1(a){return this.a.b(a)},
$S:91}
A.e4.prototype={
W(a,b){if(b==null)return!1
return b instanceof A.e4&&this.a.W(0,b.a)&&A.du(this)===A.du(b)},
ga0(a){return A.d3(this.a,A.du(this),B.o,B.o)},
l(a){var s=B.a.aB([A.mZ(this.$ti.c)],", ")
return this.a.l(0)+" with "+("<"+s+">")}}
A.bZ.prototype={
$2(a,b){return this.a.$1$2(a,b,this.$ti.z[0])},
$S(){return A.tF(A.mY(this.a),this.$ti)}}
A.kv.prototype={
bm(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.eh.prototype={
l(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
A.h2.prototype={
l(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.hK.prototype={
l(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.hd.prototype={
l(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"},
$ibn:1}
A.dS.prototype={}
A.eQ.prototype={
l(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$ic5:1}
A.aO.prototype={
l(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.pe(r==null?"unknown":r)+"'"},
$ibK:1,
gp0(){return this},
$C:"$1",
$R:1,
$D:null}
A.fE.prototype={$C:"$0",$R:0}
A.fF.prototype={$C:"$2",$R:2}
A.hD.prototype={}
A.hB.prototype={
l(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.pe(s)+"'"}}
A.cO.prototype={
W(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.cO))return!1
return this.$_target===b.$_target&&this.a===b.a},
ga0(a){return(A.n4(this.a)^A.bM(this.$_target))>>>0},
l(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.k9(this.a)+"'")}}
A.ht.prototype={
l(a){return"RuntimeError: "+this.a}}
A.hU.prototype={
l(a){return"Assertion failed: "+A.fO(this.a)}}
A.bb.prototype={
gm(a){return this.a},
gbl(){return new A.aQ(this,A.z(this).h("aQ<1>"))},
gjl(a){var s=A.z(this)
return A.jK(new A.aQ(this,s.h("aQ<1>")),new A.jD(this),s.c,s.z[1])},
aj(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.iM(a)},
iM(a){var s=this.d
if(s==null)return!1
return this.d3(s[this.d2(a)],a)>=0},
k(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.iN(b)},
iN(a){var s,r,q=this.d
if(q==null)return null
s=q[this.d2(a)]
r=this.d3(s,a)
if(r<0)return null
return s[r].b},
u(a,b,c){var s,r,q=this,p=A.z(q)
p.c.a(b)
p.z[1].a(c)
if(typeof b=="string"){s=q.b
q.hd(s==null?q.b=q.eK():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.hd(r==null?q.c=q.eK():r,b,c)}else q.iP(b,c)},
iP(a,b){var s,r,q,p,o=this,n=A.z(o)
n.c.a(a)
n.z[1].a(b)
s=o.d
if(s==null)s=o.d=o.eK()
r=o.d2(a)
q=s[r]
if(q==null)s[r]=[o.ex(a,b)]
else{p=o.d3(q,a)
if(p>=0)q[p].b=b
else q.push(o.ex(a,b))}},
e0(a,b){var s,r,q=this,p=A.z(q)
p.c.a(a)
p.h("2()").a(b)
if(q.aj(a)){s=q.k(0,a)
return s==null?p.z[1].a(s):s}r=b.$0()
q.u(0,a,r)
return r},
a6(a,b){var s=this
if(typeof b=="string")return s.hO(s.b,b)
else if(typeof b=="number"&&(b&0x3fffffff)===b)return s.hO(s.c,b)
else return s.iO(b)},
iO(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.d2(a)
r=n[s]
q=o.d3(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.hW(p)
if(r.length===0)delete n[s]
return p.b},
ba(a,b){var s,r,q=this
A.z(q).h("~(1,2)").a(b)
s=q.e
r=q.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==q.r)throw A.d(A.as(q))
s=s.c}},
hd(a,b,c){var s,r=A.z(this)
r.c.a(b)
r.z[1].a(c)
s=a[b]
if(s==null)a[b]=this.ex(b,c)
else s.b=c},
hO(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.hW(s)
delete a[b]
return s.b},
hf(){this.r=this.r+1&1073741823},
ex(a,b){var s=this,r=A.z(s),q=new A.jF(r.c.a(a),r.z[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.hf()
return q},
hW(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.hf()},
d2(a){return J.aE(a)&0x3fffffff},
d3(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.T(a[r].a,b))return r
return-1},
l(a){return A.mp(this)},
eK(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$ijE:1}
A.jD.prototype={
$1(a){var s=this.a,r=A.z(s)
s=s.k(0,r.c.a(a))
return s==null?r.z[1].a(s):s},
$S(){return A.z(this.a).h("2(1)")}}
A.jF.prototype={}
A.aQ.prototype={
gm(a){return this.a.a},
gan(a){return this.a.a===0},
gI(a){var s=this.a,r=new A.cw(s,s.r,this.$ti.h("cw<1>"))
r.c=s.e
return r},
G(a,b){return this.a.aj(b)}}
A.cw.prototype={
gC(){return this.d},
q(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.as(q))
s=r.c
if(s==null){r.she(null)
return!1}else{r.she(s.a)
r.c=s.c
return!0}},
she(a){this.d=this.$ti.h("1?").a(a)},
$iS:1}
A.lP.prototype={
$1(a){return this.a(a)},
$S:41}
A.lQ.prototype={
$2(a,b){return this.a(a,b)},
$S:54}
A.lR.prototype={
$1(a){return this.a(A.aq(a))},
$S:57}
A.cu.prototype={
l(a){return"RegExp/"+this.a+"/"+this.b.flags},
ghG(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.mi(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,!0)},
ghF(){var s=this,r=s.d
if(r!=null)return r
r=s.b
return s.d=A.mi(s.a+"|()",r.multiline,!r.ignoreCase,r.unicode,r.dotAll,!0)},
nD(a){var s=this.b.exec(a)
if(s==null)return null
return new A.dm(s)},
eS(a,b,c){var s=b.length
if(c>s)throw A.d(A.Z(c,0,s,null,null))
return new A.hT(this,b,c)},
c0(a,b){return this.eS(a,b,0)},
lC(a,b){var s,r=this.ghG()
if(r==null)r=t.K.a(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.dm(s)},
lB(a,b){var s,r=this.ghF()
if(r==null)r=t.K.a(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
if(0>=s.length)return A.c(s,-1)
if(s.pop()!=null)return null
return new A.dm(s)},
iS(a,b,c){if(c<0||c>b.length)throw A.d(A.Z(c,0,b.length,null,null))
return this.lB(b,c)},
$id4:1}
A.dm.prototype={
gS(a){return this.b.index},
gU(){var s=this.b
return s.index+s[0].length},
gfN(){return this.b.length-1},
fO(a){var s,r,q,p,o
t.L.a(a)
s=A.a([],t.D)
for(r=a.length,q=this.b,p=0;p<a.length;a.length===r||(0,A.e)(a),++p){o=A.a4(a[p])
if(!(o>=0&&o<q.length))return A.c(q,o)
B.a.n(s,q[o])}return s},
$icZ:1,
$icC:1}
A.hT.prototype={
gI(a){return new A.di(this.a,this.b,this.c)}}
A.di.prototype={
gC(){var s=this.d
return s==null?t.lu.a(s):s},
q(){var s,r,q,p,o,n=this,m=n.b
if(m==null)return!1
s=n.c
r=m.length
if(s<=r){q=n.a
p=q.lC(m,s)
if(p!=null){n.d=p
o=p.gU()
if(p.b.index===o){if(q.b.unicode){s=n.c
q=s+1
if(q<r){s=B.b.J(m,s)
if(s>=55296&&s<=56319){s=B.b.J(m,q)
s=s>=56320&&s<=57343}else s=!1}else s=!1}else s=!1
o=(s?o+1:o)+1}n.c=o
return!0}}n.b=n.d=null
return!1},
$iS:1}
A.dd.prototype={
gU(){return this.a+this.c.length},
gfN(){return 0},
fO(a){var s,r,q,p,o
t.L.a(a)
s=A.a([],t.s)
for(r=a.length,q=this.c,p=0;p<a.length;a.length===r||(0,A.e)(a),++p){o=A.a4(a[p])
if(o!==0)A.L(A.ka(o,null))
B.a.n(s,q)}return s},
$icZ:1,
gS(a){return this.a}}
A.ig.prototype={
gI(a){return new A.ih(this.a,this.b,this.c)},
gZ(a){var s=this.b,r=this.a.indexOf(s,this.c)
if(r>=0)return new A.dd(r,s)
throw A.d(A.am())}}
A.ih.prototype={
q(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.dd(s,o)
q.c=r===q.c?r+1:r
return!0},
gC(){var s=this.d
s.toString
return s},
$iS:1}
A.kW.prototype={
hN(){var s=this.b
if(s===this)throw A.d(A.ml(this.a))
return s}}
A.h9.prototype={}
A.d1.prototype={
gm(a){return a.length},
$icY:1}
A.ef.prototype={
u(a,b,c){A.a4(c)
A.ls(b,a,a.length)
a[b]=c},
$iN:1,
$ij:1,
$in:1}
A.h8.prototype={
k(a,b){A.ls(b,a,a.length)
return a[b]}}
A.eg.prototype={
k(a,b){A.ls(b,a,a.length)
return a[b]},
b8(a,b,c){return new Uint32Array(a.subarray(b,A.rL(b,c,a.length)))},
$iqX:1}
A.cA.prototype={
gm(a){return a.length},
k(a,b){A.ls(b,a,a.length)
return a[b]},
$icA:1,
$icE:1}
A.eN.prototype={}
A.eO.prototype={}
A.br.prototype={
h(a){return A.ll(v.typeUniverse,this,a)},
X(a){return A.rt(v.typeUniverse,this,a)}}
A.i9.prototype={}
A.eT.prototype={
l(a){return A.aX(this.a,null)},
$inZ:1}
A.i6.prototype={
l(a){return this.a}}
A.eU.prototype={$ic8:1}
A.kS.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:17}
A.kR.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:84}
A.kT.prototype={
$0(){this.a.$0()},
$S:2}
A.kU.prototype={
$0(){this.a.$0()},
$S:2}
A.lj.prototype={
lf(a,b){if(self.setTimeout!=null)self.setTimeout(A.dt(new A.lk(this,b),0),a)
else throw A.d(A.R("`setTimeout()` not found."))}}
A.lk.prototype={
$0(){this.b.$0()},
$S:1}
A.hV.prototype={
f_(a,b){var s,r=this,q=r.$ti
q.h("1/?").a(b)
if(b==null)q.c.a(b)
if(!r.b)r.a.hj(b)
else{s=r.a
if(q.h("ba<1>").b(b))s.hm(b)
else s.eC(q.c.a(b))}},
ip(a,b){var s=this.a
if(this.b)s.cj(a,b)
else s.lq(a,b)}}
A.lq.prototype={
$1(a){return this.a.$2(0,a)},
$S:33}
A.lr.prototype={
$2(a,b){this.a.$2(1,new A.dS(a,t.k.a(b)))},
$S:34}
A.lD.prototype={
$2(a,b){this.a(A.a4(a),b)},
$S:37}
A.dl.prototype={
l(a){return"IterationMarker("+this.b+", "+A.k(this.a)+")"}}
A.cd.prototype={
gC(){var s,r=this.c
if(r==null){s=this.b
return s==null?this.$ti.c.a(s):s}return r.gC()},
q(){var s,r,q,p,o,n,m=this
for(s=m.$ti.h("S<1>");!0;){r=m.c
if(r!=null)if(r.q())return!0
else m.shH(null)
q=function(a,b,c){var l,k=b
while(true)try{return a(k,l)}catch(j){l=j
k=c}}(m.a,0,1)
if(q instanceof A.dl){p=q.b
if(p===2){o=m.d
if(o==null||o.length===0){m.shi(null)
return!1}if(0>=o.length)return A.c(o,-1)
m.a=o.pop()
continue}else{r=q.a
if(p===3)throw r
else{n=s.a(J.ab(r))
if(n instanceof A.cd){r=m.d
if(r==null)r=m.d=[]
B.a.n(r,m.a)
m.a=n.a
continue}else{m.shH(n)
continue}}}}else{m.shi(q)
return!0}}return!1},
shi(a){this.b=this.$ti.h("1?").a(a)},
shH(a){this.c=this.$ti.h("S<1>?").a(a)},
$iS:1}
A.eS.prototype={
gI(a){return new A.cd(this.a(),this.$ti.h("cd<1>"))}}
A.dC.prototype={
l(a){return A.k(this.a)},
$ia2:1,
gdj(){return this.b}}
A.hX.prototype={
ip(a,b){var s
A.fd(a,"error",t.K)
s=this.a
if((s.a&30)!==0)throw A.d(A.aH("Future already completed"))
s.cj(a,b)}}
A.eR.prototype={
f_(a,b){var s,r=this.$ti
r.h("1/?").a(b)
s=this.a
if((s.a&30)!==0)throw A.d(A.aH("Future already completed"))
s.hn(r.h("1/").a(b))}}
A.cH.prototype={
nZ(a){if((this.c&15)!==6)return!0
return this.b.b.fB(t.iW.a(this.d),a.a,t.k4,t.K)},
nG(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.ng.b(q))p=l.oy(q,m,a.b,o,n,t.k)
else p=l.fB(t.mq.a(q),m,o,n)
try{o=r.$ti.h("2/").a(p)
return o}catch(s){if(t.do.b(A.bk(s))){if((r.c&1)!==0)throw A.d(A.a7("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.d(A.a7("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.ap.prototype={
fC(a,b,c){var s,r,q,p=this.$ti
p.X(c).h("1/(2)").a(a)
s=$.a9
if(s===B.l){if(b!=null&&!t.ng.b(b)&&!t.mq.b(b))throw A.d(A.ma(b,"onError",u.w))}else{c.h("@<0/>").X(p.c).h("1(2)").a(a)
if(b!=null)b=A.t9(b,s)}r=new A.ap(s,c.h("ap<0>"))
q=b==null?1:3
this.ey(new A.cH(r,q,a,b,p.h("@<1>").X(c).h("cH<1,2>")))
return r},
oG(a,b){return this.fC(a,null,b)},
hU(a,b,c){var s,r=this.$ti
r.X(c).h("1/(2)").a(a)
s=new A.ap($.a9,c.h("ap<0>"))
this.ey(new A.cH(s,3,a,b,r.h("@<1>").X(c).h("cH<1,2>")))
return s},
lM(a){this.a=this.a&1|16
this.c=a},
eB(a){this.a=a.a&30|this.a&1
this.c=a.c},
ey(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.j_.a(r.c)
if((s.a&24)===0){s.ey(a)
return}r.eB(s)}A.cK(null,null,r.b,t.M.a(new A.l_(r,a)))}},
hL(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.j_.a(m.c)
if((n.a&24)===0){n.hL(a)
return}m.eB(n)}l.a=m.dv(a)
A.cK(null,null,m.b,t.M.a(new A.l7(l,m)))}},
du(){var s=t.F.a(this.c)
this.c=null
return this.dv(s)},
dv(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
hl(a){var s,r,q,p=this
p.a^=2
try{a.fC(new A.l3(p),new A.l4(p),t.P)}catch(q){s=A.bk(q)
r=A.cg(q)
A.tT(new A.l5(p,s,r))}},
hn(a){var s,r=this,q=r.$ti
q.h("1/").a(a)
if(q.h("ba<1>").b(a))if(q.b(a))A.l2(a,r)
else r.hl(a)
else{s=r.du()
q.c.a(a)
r.a=8
r.c=a
A.dk(r,s)}},
eC(a){var s,r=this
r.$ti.c.a(a)
s=r.du()
r.a=8
r.c=a
A.dk(r,s)},
cj(a,b){var s
t.k.a(b)
s=this.du()
this.lM(A.iN(a,b))
A.dk(this,s)},
hj(a){var s=this.$ti
s.h("1/").a(a)
if(s.h("ba<1>").b(a)){this.hm(a)
return}this.lr(s.c.a(a))},
lr(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.cK(null,null,s.b,t.M.a(new A.l1(s,a)))},
hm(a){var s=this,r=s.$ti
r.h("ba<1>").a(a)
if(r.b(a)){if((a.a&16)!==0){s.a^=2
A.cK(null,null,s.b,t.M.a(new A.l6(s,a)))}else A.l2(a,s)
return}s.hl(a)},
lq(a,b){this.a^=2
A.cK(null,null,this.b,t.M.a(new A.l0(this,a,b)))},
$iba:1}
A.l_.prototype={
$0(){A.dk(this.a,this.b)},
$S:1}
A.l7.prototype={
$0(){A.dk(this.b,this.a.a)},
$S:1}
A.l3.prototype={
$1(a){var s,r,q,p=this.a
p.a^=2
try{p.eC(p.$ti.c.a(a))}catch(q){s=A.bk(q)
r=A.cg(q)
p.cj(s,r)}},
$S:17}
A.l4.prototype={
$2(a,b){this.a.cj(t.K.a(a),t.k.a(b))},
$S:40}
A.l5.prototype={
$0(){this.a.cj(this.b,this.c)},
$S:1}
A.l1.prototype={
$0(){this.a.eC(this.b)},
$S:1}
A.l6.prototype={
$0(){A.l2(this.b,this.a)},
$S:1}
A.l0.prototype={
$0(){this.a.cj(this.b,this.c)},
$S:1}
A.la.prototype={
$0(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.jd(t.mY.a(q.d),t.z)}catch(p){s=A.bk(p)
r=A.cg(p)
q=m.c&&t.u.a(m.b.a.c).a===s
o=m.a
if(q)o.c=t.u.a(m.b.a.c)
else o.c=A.iN(s,r)
o.b=!0
return}if(l instanceof A.ap&&(l.a&24)!==0){if((l.a&16)!==0){q=m.a
q.c=t.u.a(l.c)
q.b=!0}return}if(t.g7.b(l)){n=m.b.a
q=m.a
q.c=l.oG(new A.lb(n),t.z)
q.b=!1}},
$S:1}
A.lb.prototype={
$1(a){return this.a},
$S:46}
A.l9.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.fB(o.h("2/(1)").a(p.d),m,o.h("2/"),n)}catch(l){s=A.bk(l)
r=A.cg(l)
q=this.a
q.c=A.iN(s,r)
q.b=!0}},
$S:1}
A.l8.prototype={
$0(){var s,r,q,p,o,n,m=this
try{s=t.u.a(m.a.a.c)
p=m.b
if(p.a.nZ(s)&&p.a.e!=null){p.c=p.a.nG(s)
p.b=!1}}catch(o){r=A.bk(o)
q=A.cg(o)
p=t.u.a(m.a.a.c)
n=m.b
if(p.a===r)n.c=p
else n.c=A.iN(r,q)
n.b=!0}},
$S:1}
A.hW.prototype={}
A.et.prototype={
gm(a){var s,r,q=this,p={},o=new A.ap($.a9,t.hy)
p.a=0
s=q.$ti
r=s.h("~(1)?").a(new A.kn(p,q))
t.jE.a(new A.ko(p,o))
A.kY(q.a,q.b,r,!1,s.c)
return o}}
A.kn.prototype={
$1(a){this.b.$ti.c.a(a);++this.a.a},
$S(){return this.b.$ti.h("~(1)")}}
A.ko.prototype={
$0(){this.b.hn(this.a.a)},
$S:1}
A.eu.prototype={}
A.hC.prototype={}
A.ie.prototype={}
A.f_.prototype={$io5:1}
A.lB.prototype={
$0(){var s=this.a,r=this.b
A.fd(s,"error",t.K)
A.fd(r,"stackTrace",t.k)
A.q0(s,r)},
$S:1}
A.id.prototype={
oz(a){var s,r,q
t.M.a(a)
try{if(B.l===$.a9){a.$0()
return}A.oF(null,null,this,a,t.H)}catch(q){s=A.bk(q)
r=A.cg(q)
A.lA(t.K.a(s),t.k.a(r))}},
oA(a,b,c){var s,r,q
c.h("~(0)").a(a)
c.a(b)
try{if(B.l===$.a9){a.$1(b)
return}A.oG(null,null,this,a,b,t.H,c)}catch(q){s=A.bk(q)
r=A.cg(q)
A.lA(t.K.a(s),t.k.a(r))}},
ig(a){return new A.lh(this,t.M.a(a))},
mC(a,b){return new A.li(this,b.h("~(0)").a(a),b)},
jd(a,b){b.h("0()").a(a)
if($.a9===B.l)return a.$0()
return A.oF(null,null,this,a,b)},
fB(a,b,c,d){c.h("@<0>").X(d).h("1(2)").a(a)
d.a(b)
if($.a9===B.l)return a.$1(b)
return A.oG(null,null,this,a,b,c,d)},
oy(a,b,c,d,e,f){d.h("@<0>").X(e).X(f).h("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.a9===B.l)return a.$2(b,c)
return A.ta(null,null,this,a,b,c,d,e,f)},
j5(a,b,c,d){return b.h("@<0>").X(c).X(d).h("1(2,3)").a(a)}}
A.lh.prototype={
$0(){return this.a.oz(this.b)},
$S:1}
A.li.prototype={
$1(a){var s=this.c
return this.a.oA(this.b,s.a(a),s)},
$S(){return this.c.h("~(0)")}}
A.eK.prototype={
k(a,b){if(!A.au(this.y.$1(b)))return null
return this.kT(b)},
u(a,b,c){var s=this.$ti
this.kV(s.c.a(b),s.z[1].a(c))},
aj(a){if(!A.au(this.y.$1(a)))return!1
return this.kS(a)},
a6(a,b){if(!A.au(this.y.$1(b)))return null
return this.kU(b)},
d2(a){return this.x.$1(this.$ti.c.a(a))&1073741823},
d3(a,b){var s,r,q,p
if(a==null)return-1
s=a.length
for(r=this.$ti.c,q=this.w,p=0;p<s;++p)if(A.au(q.$2(r.a(a[p].a),r.a(b))))return p
return-1}}
A.le.prototype={
$1(a){return this.a.b(a)},
$S:42}
A.bS.prototype={
hI(){return new A.bS(A.z(this).h("bS<1>"))},
gI(a){var s=this,r=new A.cI(s,s.r,A.z(s).h("cI<1>"))
r.c=s.e
return r},
gm(a){return this.a},
gan(a){return this.a===0},
G(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.nF.a(s[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return t.nF.a(r[b])!=null}else return this.lw(b)},
lw(a){var s=this.d
if(s==null)return!1
return this.hr(s[this.ho(a)],a)>=0},
gZ(a){var s=this.e
if(s==null)throw A.d(A.aH("No elements"))
return A.z(this).c.a(s.a)},
gp(a){var s=this.f
if(s==null)throw A.d(A.aH("No elements"))
return A.z(this).c.a(s.a)},
n(a,b){var s,r,q=this
A.z(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.hg(s==null?q.b=A.mF():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.hg(r==null?q.c=A.mF():r,b)}else return q.dl(b)},
dl(a){var s,r,q,p=this
A.z(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.mF()
r=p.ho(a)
q=s[r]
if(q==null)s[r]=[p.eL(a)]
else{if(p.hr(q,a)>=0)return!1
q.push(p.eL(a))}return!0},
hg(a,b){A.z(this).c.a(b)
if(t.nF.a(a[b])!=null)return!1
a[b]=this.eL(b)
return!0},
lG(){this.r=this.r+1&1073741823},
eL(a){var s,r=this,q=new A.ia(A.z(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.lG()
return q},
ho(a){return J.aE(a)&1073741823},
hr(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.T(a[r].a,b))return r
return-1}}
A.ia.prototype={}
A.cI.prototype={
gC(){var s=this.d
return s==null?this.$ti.c.a(s):s},
q(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.d(A.as(q))
else if(r==null){s.scO(null)
return!1}else{s.scO(s.$ti.h("1?").a(r.a))
s.c=r.b
return!0}},
scO(a){this.d=this.$ti.h("1?").a(a)},
$iS:1}
A.e6.prototype={}
A.jG.prototype={
$2(a,b){this.a.u(0,this.b.a(a),this.c.a(b))},
$S:43}
A.ea.prototype={$iN:1,$ij:1,$in:1}
A.u.prototype={
gI(a){return new A.K(a,this.gm(a),A.aJ(a).h("K<u.E>"))},
ag(a,b){return this.k(a,b)},
gan(a){return this.gm(a)===0},
gZ(a){if(this.gm(a)===0)throw A.d(A.am())
return this.k(a,0)},
gp(a){if(this.gm(a)===0)throw A.d(A.am())
return this.k(a,this.gm(a)-1)},
G(a,b){var s,r=this.gm(a)
for(s=0;s<r;++s){if(J.T(this.k(a,s),b))return!0
if(r!==this.gm(a))throw A.d(A.as(a))}return!1},
ct(a,b){var s,r
A.aJ(a).h("y(u.E)").a(b)
s=this.gm(a)
for(r=0;r<s;++r){if(!A.au(b.$1(this.k(a,r))))return!1
if(s!==this.gm(a))throw A.d(A.as(a))}return!0},
b1(a,b){var s,r
A.aJ(a).h("y(u.E)").a(b)
s=this.gm(a)
for(r=0;r<s;++r){if(A.au(b.$1(this.k(a,r))))return!0
if(s!==this.gm(a))throw A.d(A.as(a))}return!1},
e8(a,b){var s=A.aJ(a)
return new A.ai(a,s.h("y(u.E)").a(b),s.h("ai<u.E>"))},
dX(a,b,c){var s=A.aJ(a)
return new A.H(a,s.X(c).h("1(u.E)").a(b),s.h("@<u.E>").X(c).h("H<1,2>"))},
b7(a,b){return A.bu(a,b,null,A.aJ(a).h("u.E"))},
bq(a,b){var s,r,q,p,o=this
if(o.gan(a)){s=J.mh(0,A.aJ(a).h("u.E"))
return s}r=o.k(a,0)
q=A.bC(o.gm(a),r,!0,A.aJ(a).h("u.E"))
for(p=1;p<o.gm(a);++p)B.a.u(q,p,o.k(a,p))
return q},
av(a){return this.bq(a,!0)},
n(a,b){var s
A.aJ(a).h("u.E").a(b)
s=this.gm(a)
this.sm(a,s+1)
this.u(a,s,b)},
bO(a){this.sm(a,0)},
d6(a){var s,r=this
if(r.gm(a)===0)throw A.d(A.am())
s=r.k(a,r.gm(a)-1)
r.sm(a,r.gm(a)-1)
return s},
cf(a,b){var s,r=A.aJ(a)
r.h("i(u.E,u.E)?").a(b)
s=b==null?A.tn():b
A.nS(a,s,r.h("u.E"))},
nz(a,b,c,d){var s
A.aJ(a).h("u.E?").a(d)
A.aF(b,c,this.gm(a))
for(s=b;s<c;++s)this.u(a,s,d)},
aM(a,b,c){var s
for(s=c;s<this.gm(a);++s)if(J.T(this.k(a,s),b))return s
return-1},
ah(a,b){return this.aM(a,b,0)},
l(a){return A.jz(a,"[","]")}}
A.ec.prototype={}
A.jI.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=A.k(a)
r.a=s+": "
r.a+=A.k(b)},
$S:48}
A.cx.prototype={
ba(a,b){var s,r,q,p=A.z(this)
p.h("~(1,2)").a(b)
for(s=this.gbl(),s=s.gI(s),p=p.z[1];s.q();){r=s.gC()
q=this.k(0,r)
b.$2(r,q==null?p.a(q):q)}},
gdN(a){var s=this.gbl(),r=A.z(this).h("bd<1,2>"),q=A.z(s)
return A.jK(s,q.X(r).h("1(j.E)").a(new A.jJ(this)),q.h("j.E"),r)},
aj(a){return this.gbl().G(0,a)},
gm(a){var s=this.gbl()
return s.gm(s)},
l(a){return A.mp(this)},
$iaS:1}
A.jJ.prototype={
$1(a){var s=this.a,r=A.z(s)
r.c.a(a)
s=s.k(0,a)
if(s==null)s=r.z[1].a(s)
return new A.bd(a,s,r.h("@<1>").X(r.z[1]).h("bd<1,2>"))},
$S(){return A.z(this.a).h("bd<1,2>(1)")}}
A.eb.prototype={
gI(a){var s=this
return new A.eM(s,s.c,s.d,s.b,s.$ti.h("eM<1>"))},
gan(a){return this.b===this.c},
gm(a){return(this.c-this.b&this.a.length-1)>>>0},
gZ(a){var s,r=this,q=r.b
if(q===r.c)throw A.d(A.am())
s=r.a
if(!(q<s.length))return A.c(s,q)
q=s[q]
return q==null?r.$ti.c.a(q):q},
gp(a){var s,r=this,q=r.b,p=r.c
if(q===p)throw A.d(A.am())
q=r.a
s=q.length
p=(p-1&s-1)>>>0
if(!(p>=0&&p<s))return A.c(q,p)
p=q[p]
return p==null?r.$ti.c.a(p):p},
ag(a,b){var s,r,q,p=this,o=p.gm(p)
if(0>b||b>=o)A.L(A.h_(b,p,"index",null,o))
s=p.a
r=s.length
q=(p.b+b&r-1)>>>0
if(!(q>=0&&q<r))return A.c(s,q)
q=s[q]
return q==null?p.$ti.c.a(q):q},
bO(a){var s=this,r=s.b
if(r!==s.c){for(;r!==s.c;r=(r+1&s.a.length-1)>>>0)B.a.u(s.a,r,null)
s.b=s.c=0;++s.d}},
l(a){return A.jz(this,"{","}")},
j6(){var s,r,q=this,p=q.b
if(p===q.c)throw A.d(A.am());++q.d
s=q.a
if(!(p<s.length))return A.c(s,p)
r=s[p]
if(r==null)r=q.$ti.c.a(r)
B.a.u(s,p,null)
q.b=(q.b+1&q.a.length-1)>>>0
return r},
dl(a){var s,r,q,p,o=this,n=o.$ti
n.c.a(a)
B.a.u(o.a,o.c,a)
s=o.c
r=o.a.length
s=(s+1&r-1)>>>0
o.c=s
if(o.b===s){q=A.bC(r*2,null,!1,n.h("1?"))
n=o.a
s=o.b
p=n.length-s
B.a.dh(q,0,p,n,s)
B.a.dh(q,p,p+o.b,o.a,0)
o.b=0
o.c=o.a.length
o.slU(q)}++o.d},
slU(a){this.a=this.$ti.h("n<1?>").a(a)},
$inL:1}
A.eM.prototype={
gC(){var s=this.e
return s==null?this.$ti.c.a(s):s},
q(){var s,r,q=this,p=q.a
if(q.c!==p.d)A.L(A.as(p))
s=q.d
if(s===q.b){q.scO(null)
return!1}r=p.a
if(!(s<r.length))return A.c(r,s)
q.scO(r[s])
q.d=(q.d+1&p.a.length-1)>>>0
return!0},
scO(a){this.e=this.$ti.h("1?").a(a)},
$iS:1}
A.aU.prototype={
gan(a){return this.gm(this)===0},
l(a){return A.jz(this,"{","}")},
aB(a,b){var s,r=this.gI(this)
if(!r.q())return""
if(b===""){s=""
do s+=A.k(r.gC())
while(r.q())}else{s=""+A.k(r.gC())
for(;r.q();)s=s+b+A.k(r.gC())}return s.charCodeAt(0)==0?s:s},
b7(a,b){return A.nR(this,b,A.z(this).h("aU.E"))},
gZ(a){var s=this.gI(this)
if(!s.q())throw A.d(A.am())
return s.gC()},
gp(a){var s,r=this.gI(this)
if(!r.q())throw A.d(A.am())
do s=r.gC()
while(r.q())
return s},
ag(a,b){var s,r,q,p="index"
A.fd(b,p,t.S)
A.b5(b,p)
for(s=this.gI(this),r=0;s.q();){q=s.gC()
if(b===r)return q;++r}throw A.d(A.h_(b,this,p,null,r))}}
A.eo.prototype={$iN:1,$ij:1,$ibs:1}
A.dn.prototype={
nO(a,b){var s,r,q=this.hI()
for(s=this.gI(this);s.q();){r=s.gC()
if(b.G(0,r))q.n(0,r)}return q},
$iN:1,
$ij:1,
$ibs:1}
A.im.prototype={}
A.eX.prototype={
hI(){return A.mm(this.$ti.c)},
gI(a){var s=this.a.gbl()
return s.gI(s)},
gm(a){var s=this.a
return s.gm(s)}}
A.eL.prototype={}
A.eP.prototype={}
A.f1.prototype={}
A.f2.prototype={}
A.kC.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:19}
A.kB.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:19}
A.fu.prototype={
dJ(a,b){var s
t.L.a(b)
s=B.aD.f2(b)
return s}}
A.ij.prototype={
f2(a){var s,r,q,p
t.L.a(a)
s=A.aF(0,null,a.gm(a))
for(r=0<s,q=~this.b>>>0;r;){p=a.k(0,0)
p.jr(0,q)
if(!this.a)throw A.d(A.aA("Invalid value in input: "+A.k(p),null,null))
return this.lx(a,0,s)}return A.ac(a,0,s)},
lx(a,b,c){var s,r,q
t.L.a(a)
for(s=~this.b>>>0,r=b,q="";r<c;++r){a.k(0,r).jr(0,s)
q+=A.b4(65533)}return q.charCodeAt(0)==0?q:q}}
A.fv.prototype={}
A.fx.prototype={
o0(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="Invalid base64 encoding length "
a3=A.aF(a2,a3,a1.length)
s=$.pu()
for(r=s.length,q=a2,p=q,o=null,n=-1,m=-1,l=0;q<a3;q=k){k=q+1
j=B.b.E(a1,q)
if(j===37){i=k+2
if(i<=a3){h=A.lO(B.b.E(a1,k))
g=A.lO(B.b.E(a1,k+1))
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
if(j===61)continue}j=f}if(e!==-2){if(o==null){o=new A.a3("")
d=o}else d=o
c=d.a+=B.b.A(a1,p,q)
d.a=c+A.b4(j)
p=k
continue}}throw A.d(A.aA("Invalid base64 data",a1,q))}if(o!=null){r=o.a+=B.b.A(a1,p,a3)
d=r.length
if(n>=0)A.nk(a1,m,a3,n,l,d)
else{b=B.d.a7(d-1,4)+1
if(b===1)throw A.d(A.aA(a0,a1,a3))
for(;b<4;){r+="="
o.a=r;++b}}r=o.a
return B.b.cc(a1,a2,a3,r.charCodeAt(0)==0?r:r)}a=a3-a2
if(n>=0)A.nk(a1,m,a3,n,l,a)
else{b=B.d.a7(a,4)
if(b===1)throw A.d(A.aA(a0,a1,a3))
if(b>1)a1=B.b.cc(a1,a3,a3,b===2?"==":"=")}return a1}}
A.fy.prototype={}
A.co.prototype={}
A.cp.prototype={}
A.fN.prototype={}
A.hO.prototype={
dJ(a,b){t.L.a(b)
return B.dW.f2(b)}}
A.hP.prototype={
f2(a){var s,r
t.L.a(a)
s=this.a
r=A.r_(s,a,0,null)
if(r!=null)return r
return new A.ln(s).n0(a,0,null,!0)}}
A.ln.prototype={
n0(a,b,c,d){var s,r,q,p,o,n=this
t.L.a(a)
s=A.aF(b,c,J.W(a))
if(b===s)return""
r=A.rF(a,b,s)
q=n.eD(r,0,s-b,!0)
p=n.b
if((p&1)!==0){o=A.rG(p)
n.b=0
throw A.d(A.aA(o,a,b+n.c))}return q},
eD(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.d.aT(b+c,2)
r=q.eD(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.eD(a,s,c,d)}return q.n2(a,b,c,d)},
n2(a,b,c,d){var s,r,q,p,o,n,m,l,k=this,j=65533,i=k.b,h=k.c,g=new A.a3(""),f=b+1,e=a.length
if(!(b>=0&&b<e))return A.c(a,b)
s=a[b]
$label0$0:for(r=k.a;!0;){for(;!0;f=o){q=B.b.E("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",s)&31
h=i<=32?s&61694>>>q:(s&63|h<<6)>>>0
i=B.b.E(" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",i+q)
if(i===0){g.a+=A.b4(h)
if(f===c)break $label0$0
break}else if((i&1)!==0){if(r)switch(i){case 69:case 67:g.a+=A.b4(j)
break
case 65:g.a+=A.b4(j);--f
break
default:p=g.a+=A.b4(j)
g.a=p+A.b4(j)
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
g.a+=A.b4(a[l])}else g.a+=A.ac(a,f,n)
if(n===c)break $label0$0
f=o}else f=o}if(d&&i>32)if(r)g.a+=A.b4(j)
else{k.b=77
k.c=c
return""}k.b=i
k.c=h
e=g.a
return e.charCodeAt(0)==0?e:e}}
A.kX.prototype={}
A.a2.prototype={
gdj(){return A.cg(this.$thrownJsError)}}
A.dB.prototype={
l(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.fO(s)
return"Assertion failed"}}
A.c8.prototype={}
A.hc.prototype={
l(a){return"Throw of null."}}
A.by.prototype={
geH(){return"Invalid argument"+(!this.a?"(s)":"")},
geG(){return""},
l(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.k(p),n=s.geH()+q+o
if(!s.a)return n
return n+s.geG()+": "+A.fO(s.b)}}
A.d7.prototype={
geH(){return"RangeError"},
geG(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.k(q):""
else if(q==null)s=": Not greater than or equal to "+A.k(r)
else if(q>r)s=": Not in inclusive range "+A.k(r)+".."+A.k(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.k(r)
return s}}
A.fZ.prototype={
geH(){return"RangeError"},
geG(){if(A.a4(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gm(a){return this.f}}
A.hL.prototype={
l(a){return"Unsupported operation: "+this.a}}
A.eA.prototype={
l(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
A.dc.prototype={
l(a){return"Bad state: "+this.a}}
A.fH.prototype={
l(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.fO(s)+"."}}
A.hh.prototype={
l(a){return"Out of Memory"},
gdj(){return null},
$ia2:1}
A.es.prototype={
l(a){return"Stack Overflow"},
gdj(){return null},
$ia2:1}
A.fJ.prototype={
l(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.i7.prototype={
l(a){return"Exception: "+this.a},
$ibn:1}
A.dV.prototype={
l(a){var s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=""!==h?"FormatException: "+h:"FormatException",f=this.c,e=this.b
if(typeof e=="string"){if(f!=null)s=f<0||f>e.length
else s=!1
if(s)f=null
if(f==null){if(e.length>78)e=B.b.A(e,0,75)+"..."
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
i=""}return g+j+B.b.A(e,k,l)+i+"\n"+B.b.v(" ",f-k+j.length)+"^\n"}else return f!=null?g+(" (at offset "+A.k(f)+")"):g},
$ibn:1}
A.j.prototype={
dX(a,b,c){var s=A.z(this)
return A.jK(this,s.X(c).h("1(j.E)").a(b),s.h("j.E"),c)},
e8(a,b){var s=A.z(this)
return new A.ai(this,s.h("y(j.E)").a(b),s.h("ai<j.E>"))},
ct(a,b){var s
A.z(this).h("y(j.E)").a(b)
for(s=this.gI(this);s.q();)if(!A.au(b.$1(s.gC())))return!1
return!0},
b1(a,b){var s
A.z(this).h("y(j.E)").a(b)
for(s=this.gI(this);s.q();)if(A.au(b.$1(s.gC())))return!0
return!1},
bq(a,b){return A.h(this,b,A.z(this).h("j.E"))},
av(a){return this.bq(a,!0)},
gm(a){var s,r=this.gI(this)
for(s=0;r.q();)++s
return s},
gan(a){return!this.gI(this).q()},
b7(a,b){return A.nR(this,b,A.z(this).h("j.E"))},
gZ(a){var s=this.gI(this)
if(!s.q())throw A.d(A.am())
return s.gC()},
gp(a){var s,r=this.gI(this)
if(!r.q())throw A.d(A.am())
do s=r.gC()
while(r.q())
return s},
ag(a,b){var s,r,q
A.b5(b,"index")
for(s=this.gI(this),r=0;s.q();){q=s.gC()
if(b===r)return q;++r}throw A.d(A.h_(b,this,"index",null,r))},
l(a){return A.q9(this,"(",")")}}
A.S.prototype={}
A.bd.prototype={
l(a){return"MapEntry("+A.k(this.a)+": "+A.k(this.b)+")"}}
A.al.prototype={
ga0(a){return A.E.prototype.ga0.call(this,this)},
l(a){return"null"}}
A.E.prototype={$iE:1,
W(a,b){return this===b},
ga0(a){return A.bM(this)},
l(a){return"Instance of '"+A.k9(this)+"'"},
toString(){return this.l(this)}}
A.ii.prototype={
l(a){return""},
$ic5:1}
A.hs.prototype={
gI(a){return new A.hr(this.a)},
gp(a){var s,r,q=this.a,p=q.length
if(p===0)throw A.d(A.aH("No elements."))
s=B.b.J(q,p-1)
if((s&64512)===56320&&p>1){r=B.b.J(q,p-2)
if((r&64512)===55296)return A.ox(r,s)}return s}}
A.hr.prototype={
gC(){return this.d},
q(){var s,r,q,p=this,o=p.b=p.c,n=p.a,m=n.length
if(o===m){p.d=-1
return!1}s=B.b.E(n,o)
r=o+1
if((s&64512)===55296&&r<m){q=B.b.E(n,r)
if((q&64512)===56320){p.c=r+1
p.d=A.ox(s,q)
return!0}}p.c=r
p.d=s
return!0},
$iS:1}
A.a3.prototype={
gm(a){return this.a.length},
l(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$iqO:1}
A.ky.prototype={
$2(a,b){throw A.d(A.aA("Illegal IPv4 address, "+a,this.a,b))},
$S:55}
A.kz.prototype={
$2(a,b){throw A.d(A.aA("Illegal IPv6 address, "+a,this.a,b))},
$S:56}
A.kA.prototype={
$2(a,b){var s
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
s=A.ch(B.b.A(this.b,a,b),16)
if(s<0||s>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return s},
$S:10}
A.eY.prototype={
ghS(){var s,r,q,p,o=this,n=o.w
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
gfs(){var s,r,q=this,p=q.x
if(p===$){s=q.e
if(s.length!==0&&B.b.E(s,0)===47)s=B.b.aq(s,1)
r=s.length===0?B.r:A.nE(new A.H(A.a(s.split("/"),t.s),t.f6.a(A.ts()),t.iZ),t.N)
q.x!==$&&A.C("pathSegments")
q.sln(r)
p=r}return p},
ga0(a){var s,r=this,q=r.y
if(q===$){s=B.b.ga0(r.ghS())
r.y!==$&&A.C("hashCode")
r.y=s
q=s}return q},
gd9(){return this.b},
gbk(a){var s=this.c
if(s==null)return""
if(B.b.a_(s,"["))return B.b.A(s,1,s.length-1)
return s},
gcE(a){var s=this.d
return s==null?A.oh(this.a):s},
gcb(){var s=this.f
return s==null?"":s},
gdR(){var s=this.r
return s==null?"":s},
nQ(a){var s=this.a
if(a.length!==s.length)return!1
return A.rK(a,s,0)>=0},
hE(a,b){var s,r,q,p,o,n
for(s=0,r=0;B.b.ab(b,"../",r);){r+=3;++s}q=B.b.fj(a,"/")
while(!0){if(!(q>0&&s>0))break
p=B.b.dW(a,"/",q-1)
if(p<0)break
o=q-p
n=o!==2
if(!n||o===3)if(B.b.J(a,p+1)===46)n=!n||B.b.J(a,p+2)===46
else n=!1
else n=!1
if(n)break;--s
q=p}return B.b.cc(a,q+1,null,B.b.aq(b,r-3*s))},
jc(a){return this.d7(A.mz(a))},
d7(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=null
if(a.gaP().length!==0){s=a.gaP()
if(a.gd0()){r=a.gd9()
q=a.gbk(a)
p=a.gd1()?a.gcE(a):h}else{p=h
q=p
r=""}o=A.bT(a.gaN(a))
n=a.gcz()?a.gcb():h}else{s=i.a
if(a.gd0()){r=a.gd9()
q=a.gbk(a)
p=A.mL(a.gd1()?a.gcE(a):h,s)
o=A.bT(a.gaN(a))
n=a.gcz()?a.gcb():h}else{r=i.b
q=i.c
p=i.d
o=i.e
if(a.gaN(a)==="")n=a.gcz()?a.gcb():i.f
else{m=A.rE(i,o)
if(m>0){l=B.b.A(o,0,m)
o=a.gdS()?l+A.bT(a.gaN(a)):l+A.bT(i.hE(B.b.aq(o,l.length),a.gaN(a)))}else if(a.gdS())o=A.bT(a.gaN(a))
else if(o.length===0)if(q==null)o=s.length===0?a.gaN(a):A.bT(a.gaN(a))
else o=A.bT("/"+a.gaN(a))
else{k=i.hE(o,a.gaN(a))
j=s.length===0
if(!j||q!=null||B.b.a_(o,"/"))o=A.bT(k)
else o=A.mN(k,!j||q!=null)}n=a.gcz()?a.gcb():h}}}return A.lm(s,r,q,p,o,n,a.gfg()?a.gdR():h)},
gd0(){return this.c!=null},
gd1(){return this.d!=null},
gcz(){return this.f!=null},
gfg(){return this.r!=null},
gdS(){return B.b.a_(this.e,"/")},
fD(){var s,r=this,q=r.a
if(q!==""&&q!=="file")throw A.d(A.R("Cannot extract a file path from a "+q+" URI"))
q=r.f
if((q==null?"":q)!=="")throw A.d(A.R(u.z))
q=r.r
if((q==null?"":q)!=="")throw A.d(A.R(u.U))
q=$.na()
if(A.au(q))q=A.os(r)
else{if(r.c!=null&&r.gbk(r)!=="")A.L(A.R(u.Q))
s=r.gfs()
A.rx(s,!1)
q=A.kp(B.b.a_(r.e,"/")?""+"/":"",s,"/")
q=q.charCodeAt(0)==0?q:q}return q},
l(a){return this.ghS()},
W(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(t.jJ.b(b))if(q.a===b.gaP())if(q.c!=null===b.gd0())if(q.b===b.gd9())if(q.gbk(q)===b.gbk(b))if(q.gcE(q)===b.gcE(b))if(q.e===b.gaN(b)){s=q.f
r=s==null
if(!r===b.gcz()){if(r)s=""
if(s===b.gcb()){s=q.r
r=s==null
if(!r===b.gfg()){if(r)s=""
s=s===b.gdR()}else s=!1}else s=!1}else s=!1}else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s},
sln(a){this.x=t.I.a(a)},
$ihM:1,
gaP(){return this.a},
gaN(a){return this.e}}
A.kx.prototype={
gjk(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return A.c(m,0)
s=o.a
m=m[0]+1
r=B.b.aM(s,"?",m)
q=s.length
if(r>=0){p=A.eZ(s,r+1,q,B.F,!1,!1)
q=r}else p=n
m=o.c=new A.hZ("data","",n,n,A.eZ(s,m,q,B.af,!1,!1),p,n)}return m},
l(a){var s,r=this.b
if(0>=r.length)return A.c(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
A.lu.prototype={
$2(a,b){var s=this.a
if(!(a<s.length))return A.c(s,a)
s=s[a]
B.cJ.nz(s,0,96,b)
return s},
$S:58}
A.lv.prototype={
$3(a,b,c){var s,r,q
for(s=b.length,r=0;r<s;++r){q=B.b.E(b,r)^96
if(!(q<96))return A.c(a,q)
a[q]=c}},
$S:20}
A.lw.prototype={
$3(a,b,c){var s,r,q
for(s=B.b.E(b,0),r=B.b.E(b,1);s<=r;++s){q=(s^96)>>>0
if(!(q<96))return A.c(a,q)
a[q]=c}},
$S:20}
A.bh.prototype={
gd0(){return this.c>0},
gd1(){return this.c>0&&this.d+1<this.e},
gcz(){return this.f<this.r},
gfg(){return this.r<this.a.length},
gdS(){return B.b.ab(this.a,"/",this.e)},
gaP(){var s=this.w
return s==null?this.w=this.lv():s},
lv(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.b.a_(r.a,"http"))return"http"
if(q===5&&B.b.a_(r.a,"https"))return"https"
if(s&&B.b.a_(r.a,"file"))return"file"
if(q===7&&B.b.a_(r.a,"package"))return"package"
return B.b.A(r.a,0,q)},
gd9(){var s=this.c,r=this.b+3
return s>r?B.b.A(this.a,r,s-1):""},
gbk(a){var s=this.c
return s>0?B.b.A(this.a,s,this.d):""},
gcE(a){var s,r=this
if(r.gd1())return A.ch(B.b.A(r.a,r.d+1,r.e),null)
s=r.b
if(s===4&&B.b.a_(r.a,"http"))return 80
if(s===5&&B.b.a_(r.a,"https"))return 443
return 0},
gaN(a){return B.b.A(this.a,this.e,this.f)},
gcb(){var s=this.f,r=this.r
return s<r?B.b.A(this.a,s+1,r):""},
gdR(){var s=this.r,r=this.a
return s<r.length?B.b.aq(r,s+1):""},
gfs(){var s,r,q=this.e,p=this.f,o=this.a
if(B.b.ab(o,"/",q))++q
if(q===p)return B.r
s=A.a([],t.s)
for(r=q;r<p;++r)if(B.b.J(o,r)===47){B.a.n(s,B.b.A(o,q,r))
q=r+1}B.a.n(s,B.b.A(o,q,p))
return A.nE(s,t.N)},
hy(a){var s=this.d+1
return s+a.length===this.e&&B.b.ab(this.a,a,s)},
os(){var s=this,r=s.r,q=s.a
if(r>=q.length)return s
return new A.bh(B.b.A(q,0,r),s.b,s.c,s.d,s.e,s.f,r,s.w)},
jc(a){return this.d7(A.mz(a))},
d7(a){if(a instanceof A.bh)return this.lO(this,a)
return this.hV().d7(a)},
lO(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.b
if(c>0)return b
s=b.c
if(s>0){r=a.b
if(r<=0)return b
q=r===4
if(q&&B.b.a_(a.a,"file"))p=b.e!==b.f
else if(q&&B.b.a_(a.a,"http"))p=!b.hy("80")
else p=!(r===5&&B.b.a_(a.a,"https"))||!b.hy("443")
if(p){o=r+1
return new A.bh(B.b.A(a.a,0,o)+B.b.aq(b.a,c+1),r,s+o,b.d+o,b.e+o,b.f+o,b.r+o,a.w)}else return this.hV().d7(b)}n=b.e
c=b.f
if(n===c){s=b.r
if(c<s){r=a.f
o=r-c
return new A.bh(B.b.A(a.a,0,r)+B.b.aq(b.a,c),a.b,a.c,a.d,a.e,c+o,s+o,a.w)}c=b.a
if(s<c.length){r=a.r
return new A.bh(B.b.A(a.a,0,r)+B.b.aq(c,s),a.b,a.c,a.d,a.e,a.f,s+(r-s),a.w)}return a.os()}s=b.a
if(B.b.ab(s,"/",n)){m=a.e
l=A.ob(this)
k=l>0?l:m
o=k-n
return new A.bh(B.b.A(a.a,0,k)+B.b.aq(s,n),a.b,a.c,a.d,m,c+o,b.r+o,a.w)}j=a.e
i=a.f
if(j===i&&a.c>0){for(;B.b.ab(s,"../",n);)n+=3
o=j-n+1
return new A.bh(B.b.A(a.a,0,j)+"/"+B.b.aq(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.w)}h=a.a
l=A.ob(this)
if(l>=0)g=l
else for(g=j;B.b.ab(h,"../",g);)g+=3
f=0
while(!0){e=n+3
if(!(e<=c&&B.b.ab(s,"../",n)))break;++f
n=e}for(d="";i>g;){--i
if(B.b.J(h,i)===47){if(f===0){d="/"
break}--f
d="/"}}if(i===g&&a.b<=0&&!B.b.ab(h,"/",j)){n-=f*3
d=""}o=i-n+d.length
return new A.bh(B.b.A(h,0,i)+d+B.b.aq(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.w)},
fD(){var s,r,q=this,p=q.b
if(p>=0){s=!(p===4&&B.b.a_(q.a,"file"))
p=s}else p=!1
if(p)throw A.d(A.R("Cannot extract a file path from a "+q.gaP()+" URI"))
p=q.f
s=q.a
if(p<s.length){if(p<q.r)throw A.d(A.R(u.z))
throw A.d(A.R(u.U))}r=$.na()
if(A.au(r))p=A.os(q)
else{if(q.c<q.d)A.L(A.R(u.Q))
p=B.b.A(s,q.e,p)}return p},
ga0(a){var s=this.x
return s==null?this.x=B.b.ga0(this.a):s},
W(a,b){if(b==null)return!1
if(this===b)return!0
return t.jJ.b(b)&&this.a===b.l(0)},
hV(){var s=this,r=null,q=s.gaP(),p=s.gd9(),o=s.c>0?s.gbk(s):r,n=s.gd1()?s.gcE(s):r,m=s.a,l=s.f,k=B.b.A(m,s.e,l),j=s.r
l=l<j?s.gcb():r
return A.lm(q,p,o,n,k,l,j<m.length?s.gdR():r)},
l(a){return this.a},
$ihM:1}
A.hZ.prototype={}
A.w.prototype={}
A.fq.prototype={
l(a){var s=String(a)
s.toString
return s}}
A.fs.prototype={
l(a){var s=String(a)
s.toString
return s}}
A.cm.prototype={
sbj(a,b){a.height=b},
soV(a,b){a.width=b},
$icm:1}
A.dF.prototype={
sfe(a,b){a.fillStyle=b},
sh5(a,b){a.strokeStyle=b},
kP(a,b){return a.stroke(b)},
$idF:1}
A.bz.prototype={
gm(a){return a.length}}
A.iY.prototype={
l(a){var s=String(a)
s.toString
return s}}
A.dL.prototype={
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
ga0(a){var s,r,q,p=a.left
p.toString
s=a.top
s.toString
r=a.width
r.toString
q=a.height
q.toString
return A.d3(p,s,r,q)},
$imt:1}
A.q.prototype={
l(a){var s=a.localName
s.toString
return s},
$iq:1}
A.r.prototype={$ir:1}
A.aP.prototype={
lp(a,b,c,d){return a.addEventListener(b,A.dt(t.Y.a(c),1),!1)},
lK(a,b,c,d){return a.removeEventListener(b,A.dt(t.Y.a(c),1),!1)},
$iaP:1}
A.fR.prototype={
gm(a){return a.length}}
A.b3.prototype={$ib3:1}
A.aZ.prototype={
l(a){var s=a.nodeValue
return s==null?this.kR(a):s}}
A.hj.prototype={$ihj:1}
A.hu.prototype={
gm(a){return a.length}}
A.bv.prototype={}
A.dh.prototype={
gmk(a){var s=new A.ap($.a9,t.iS),r=t.hv.a(new A.kQ(new A.eR(s,t.km)))
this.lA(a)
r=A.oL(r,t.p)
r.toString
this.lL(a,r)
return s},
lL(a,b){var s=a.requestAnimationFrame(A.dt(t.hv.a(b),1))
s.toString
return s},
lA(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=["ms","moz","webkit","o"]
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+"RequestAnimationFrame"]
b.cancelAnimationFrame=b[r[q]+"CancelAnimationFrame"]||b[r[q]+"CancelRequestAnimationFrame"]}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
A.kQ.prototype={
$1(a){this.a.f_(0,A.lp(a))},
$S:70}
A.eF.prototype={
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
ga0(a){var s,r,q,p=a.left
p.toString
s=a.top
s.toString
r=a.width
r.toString
q=a.height
q.toString
return A.d3(p,s,r,q)}}
A.me.prototype={}
A.eH.prototype={}
A.i3.prototype={}
A.eI.prototype={
mG(){var s,r=this,q=r.b
if(q==null)return $.nc()
s=r.d
if(s!=null)J.pz(q,r.c,t.Y.a(s),!1)
r.b=null
r.slI(null)
return $.nc()},
slI(a){this.d=t.Y.a(a)}}
A.kZ.prototype={
$1(a){return this.a.$1(t.fq.a(a))},
$S:74}
A.ic.prototype={
le(a){var s,r,q,p,o,n,m,l=this,k=4294967296
do{s=a>>>0
a=B.d.aT(a-s,k)
r=a>>>0
a=B.d.aT(a-r,k)
q=(~s>>>0)+(s<<21>>>0)
p=q>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+B.d.aT(q-p,k)>>>0
q=((p^(p>>>24|r<<8))>>>0)*265
s=q>>>0
r=((r^r>>>24)>>>0)*265+B.d.aT(q-s,k)>>>0
q=((s^(s>>>14|r<<18))>>>0)*21
s=q>>>0
r=((r^r>>>14)>>>0)*21+B.d.aT(q-s,k)>>>0
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=q>>>0
o=B.d.aT(q-p,k)
q=l.a*1037
n=l.a=q>>>0
m=l.b*1037+B.d.aT(q-n,k)>>>0
l.b=m
n=(n^p)>>>0
l.a=n
o=(m^r+((r<<31|s>>>1)>>>0)+o>>>0)>>>0
l.b=o}while(a!==0)
if(o===0&&n===0)l.a=23063
l.dt()
l.dt()
l.dt()
l.dt()},
dt(){var s=this,r=s.a,q=4294901760*r,p=q>>>0,o=55905*r,n=o>>>0,m=n+p+s.b
r=m>>>0
s.a=r
s.b=B.d.aT(o-n+(q-p)+(m-r),4294967296)>>>0},
$iqy:1}
A.cB.prototype={
l(a){return"Point("+A.k(this.a)+", "+A.k(this.b)+")"},
W(a,b){if(b==null)return!1
return b instanceof A.cB&&this.a===b.a&&this.b===b.b},
ga0(a){return A.nU(B.h.ga0(this.a),B.h.ga0(this.b),0)}}
A.aB.prototype={
gI(a){var s=this.$ti,r=J.p(this.a,new A.jA(this),s.h("S<1>"))
return new A.eJ(A.h(r,!1,r.$ti.h("B.E")),s.h("eJ<1>"))}}
A.jA.prototype={
$1(a){return J.ab(this.a.$ti.h("j<1>").a(a))},
$S(){return this.a.$ti.h("S<1>(j<1>)")}}
A.eJ.prototype={
q(){var s,r,q,p=this,o=p.a
if(o.length===0)return!1
for(s=0;r=o.length,s<r;++s)if(!o[s].q()){p.shA(null)
return!1}if(r>4294967295)A.L(A.Z(r,0,4294967295,"length",null))
q=J.ny(new Array(r),p.$ti.c)
for(s=0;s<r;++s){if(!(s<o.length))return A.c(o,s)
q[s]=o[s].gC()}p.shA(q)
return!0},
gC(){var s=this.b
return s==null?A.L(A.aH("No element")):s},
shA(a){this.b=this.$ti.h("n<1>?").a(a)},
$iS:1}
A.lg.prototype={
bx(){var s=this,r=s.d
r===$&&A.b("_peekToken")
s.c=r
s.d=t.U.a(s.a.ao(!1))
return r},
hD(a,b){var s=this,r=s.d
r===$&&A.b("_peekToken")
if(r.a===a){s.c=r
s.d=t.U.a(s.a.ao(!1))
return!0}else return!1},
ds(a){return this.hD(a,!1)},
aS(a){if(!this.hD(a,!1))this.eF(A.nX(a))},
eF(a){var s,r=this.bx(),q=null
try{q="expected "+a+", but found "+A.k(r)}catch(s){q="parsing error expected "+a}this.cl(q,r.b)},
cl(a,b){$.f3.hN().nk(0,a,b)},
ac(a){var s=this.c
if(s==null||s.b.az(0,a)<0)return a
return a.nm(0,this.c.b)},
ob(){var s,r,q=this,p=A.a([],t.b7),o=q.d
o===$&&A.b("_peekToken")
s=q.a
s.e=!0
do{r=q.j2()
if(r!=null)B.a.n(p,r)}while(q.ds(19))
s.e=!1
if(p.length!==0)return new A.hv(p,q.ac(o.b))
return null},
j2(){var s,r=A.a([],t.iM),q=this.d
q===$&&A.b("_peekToken")
for(;!0;){s=this.ky(r.length===0)
if(s!=null)B.a.n(r,s)
else break}if(r.length===0)return null
return new A.c4(r,this.ac(q.b))},
o8(){var s,r,q,p,o,n,m=this.j2()
if(m!=null)for(s=m.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.e)(s),++q){p=s[q]
if(p.b!==513){o=$.f3.b
if(o==$.f3)A.L(A.ml($.f3.a))
n=new A.d_(B.I,"compound selector can not contain combinator",p.a,o.b.w)
B.a.n(o.c,n)
o.a.$1(n)}}return m},
ky(a){var s,r,q,p,o,n,m=this,l=m.d
l===$&&A.b("_peekToken")
switch(l.a){case 12:m.aS(12)
s=515
r=!1
break
case 13:m.aS(13)
s=516
r=!1
break
case 14:m.aS(14)
s=517
r=!1
break
case 36:m.aS(36)
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
if(q)s=514}o=m.ac(l.b)
n=r?new A.cr(new A.hF(o),o):m.fY()
if(n==null)l=s===515||s===516||s===517
else l=!1
if(l)n=new A.cr(new A.bL("",o),o)
if(n!=null)return new A.ep(s,n,o)
return null},
fY(){var s,r,q,p=this,o=p.d
o===$&&A.b("_peekToken")
s=o.b
o=o.a
switch(o){case 15:r=new A.ca(p.ac(p.bx().b))
break
case 511:r=p.bC()
break
default:if(A.nW(o))r=p.bC()
else{if(o===9)return null
r=null}break}if(p.ds(16)){o=p.d
switch(o.a){case 15:q=new A.ca(p.ac(p.bx().b))
break
case 511:q=p.bC()
break
default:p.cl("expected element name or universal(*), but found "+o.l(0),p.d.b)
q=null
break}return new A.h7(r,new A.cr(q,q.a),p.ac(s))}else if(r!=null)return new A.cr(r,p.ac(s))
else return p.kz()},
hh(a){var s,r=this.c
if(r!=null&&r.a===a){r=r.b
r=A.bX(r.a,r.c)
s=this.d
s===$&&A.b("_peekToken")
s=s.b
return r.b!==A.bX(s.a,s.b).b}return!1},
kz(){var s,r=this,q=r.d
q===$&&A.b("_peekToken")
s=q.b
switch(q.a){case 11:r.aS(11)
if(r.hh(11)){r.cl("Not a valid ID selector expected #id",r.ac(s))
return null}return new A.fU(r.bC(),r.ac(s))
case 8:r.aS(8)
if(r.hh(8)){r.cl("Not a valid class selector expected .className",r.ac(s))
return null}return new A.fD(r.bC(),r.ac(s))
case 17:return r.o9(s)
case 4:return r.o7()
case 62:r.cl("name must start with a alpha character, but found a number",s)
r.bx()
break}return null},
o9(a){var s,r,q,p,o,n,m,l,k=this
k.aS(17)
s=k.ds(17)
r=k.d
r===$&&A.b("_peekToken")
if(r.a===511)q=k.bC()
else return null
p=q.b.toLowerCase()
if(k.d.a===2){r=!s
if(r&&p==="not"){k.aS(2)
o=k.fY()
k.aS(3)
r=k.ac(a)
return new A.hb(o,new A.ha(r),r)}else{if(r)r=p==="host"||p==="host-context"||p==="global-context"||p==="-acx-global-context"
else r=!1
if(r){k.aS(2)
n=k.o8()
if(n==null){k.eF("a selector argument")
return null}k.aS(3)
return new A.ej(n,q,k.ac(a))}else{r=k.a
r.d=!0
k.aS(2)
m=k.ac(a)
l=k.oa()
r.d=!1
if(l instanceof A.da){k.aS(3)
return s?new A.ho(!1,q,m):new A.ej(l,q,m)}else{k.eF("CSS expression")
return null}}}}r=!s
return!r||B.dS.a.aj(p)?new A.d6(r,q,k.ac(a)):new A.d5(q,k.ac(a))},
oa(){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.d
g===$&&A.b("_peekToken")
s=g.b
r=A.a([],t.oQ)
for(g=i.a,q=t.U,p=h,o=p,n=!0;n;){m=i.d
switch(m.a){case 12:s=m.b
i.c=m
i.d=q.a(g.ao(!1))
B.a.n(r,new A.hg(i.ac(s)))
o=m
break
case 34:s=m.b
i.c=m
i.d=q.a(g.ao(!1))
B.a.n(r,new A.hf(i.ac(s)))
o=m
break
case 60:i.c=m
i.d=q.a(g.ao(!1))
p=A.ch(m.gV(m),h)
o=m
break
case 62:i.c=m
i.d=q.a(g.ao(!1))
p=A.bJ(m.gV(m))
o=m
break
case 25:p="'"+A.oz(i.fv(!1),!0)+"'"
return new A.af(p,p,i.ac(s))
case 26:p='"'+A.oz(i.fv(!1),!1)+'"'
return new A.af(p,p,i.ac(s))
case 511:p=i.bC()
break
default:n=!1}if(n&&p!=null){l=i.ac(s)
k=i.d.a
switch(k){case 600:j=new A.fM(p,o.gV(o),l)
i.c=i.d
i.d=q.a(g.ao(!1))
break
case 601:j=new A.fP(p,o.gV(o),l)
i.c=i.d
i.d=q.a(g.ao(!1))
break
case 602:case 603:case 604:case 605:case 606:case 607:j=new A.h3(k,p,o.gV(o),l)
i.c=i.d
i.d=q.a(g.ao(!1))
break
case 608:case 609:case 610:case 611:j=new A.fr(k,p,o.gV(o),l)
i.c=i.d
i.d=q.a(g.ao(!1))
break
case 612:case 613:j=new A.hG(k,p,o.gV(o),l)
i.c=i.d
i.d=q.a(g.ao(!1))
break
case 614:case 615:j=new A.fT(k,p,o.gV(o),l)
i.c=i.d
i.d=q.a(g.ao(!1))
break
case 24:j=new A.hl(p,o.gV(o),l)
i.c=i.d
i.d=q.a(g.ao(!1))
break
case 617:j=new A.fS(p,o.gV(o),l)
i.c=i.d
i.d=q.a(g.ao(!1))
break
case 618:case 619:case 620:j=new A.hq(k,p,o.gV(o),l)
i.c=i.d
i.d=q.a(g.ao(!1))
break
case 621:j=new A.fC(k,p,o.gV(o),l)
i.c=i.d
i.d=q.a(g.ao(!1))
break
case 622:j=new A.hp(k,p,o.gV(o),l)
i.c=i.d
i.d=q.a(g.ao(!1))
break
case 623:case 624:case 625:case 626:j=new A.hQ(k,p,o.gV(o),l)
i.c=i.d
i.d=q.a(g.ao(!1))
break
default:j=p instanceof A.bL?new A.af(p,p.b,l):new A.he(p,o.gV(o),l)}B.a.n(r,j)
p=h}}return new A.da(r,i.ac(s))},
o7(){var s,r,q,p=this,o=p.d
o===$&&A.b("_peekToken")
if(p.ds(4)){s=p.bC()
r=p.d.a
switch(r){case 28:case 530:case 531:case 532:case 533:case 534:p.bx()
break
default:r=535}if(r!==535)q=p.d.a===511?p.bC():p.fv(!1)
else q=null
p.aS(5)
return new A.fw(r,q,s,p.ac(o.b))}return null},
fv(a){var s,r,q,p,o,n,m=this,l=m.d
l===$&&A.b("_peekToken")
s=m.a
r=s.c
s.c=!1
switch(l.a){case 25:m.bx()
q=25
break
case 26:m.bx()
q=26
break
default:m.cl("unexpected string",m.ac(l.b))
q=-1
break}l=t.U
p=""
while(!0){o=m.d
n=o.a
if(!(n!==q&&n!==1))break
m.c=o
m.d=l.a(s.ao(!1))
p+=o.gV(o)}s.c=r
if(q!==3)m.bx()
return p.charCodeAt(0)==0?p:p},
bC(){var s=this.bx(),r=s.a
if(r!==511&&!A.nW(r)){$.f3.hN()
return new A.bL("",this.ac(s.b))}return new A.bL(s.gV(s),this.ac(s.b))}}
A.bf.prototype={
gV(a){var s=this.b
return A.ac(B.v.b8(s.a.c,s.b,s.c),0,null)},
l(a){var s=A.nX(this.a),r=B.b.e6(this.gV(this))
if(s!==r){if(r.length>10)r=B.b.A(r,0,8)+"..."
return s+"("+r+")"}else return s}}
A.fV.prototype={
gV(a){return this.c}}
A.ks.prototype={
ao(a){var s,r,q,p,o,n,m,l,k=this
k.r=k.f
s=k.cn()
switch(s){case 10:case 13:case 32:case 9:return k.nC()
case 0:return k.N(1)
case 64:r=k.co()
if(A.hI(r)||r===45){q=k.f
p=k.r
k.r=q
k.cn()
k.dP()
o=k.b
n=k.r
m=A.mx(B.bn,"type",o,n,k.f-n)
if(m===-1){n=k.r
m=A.mx(B.bg,"type",o,n,k.f-n)}if(m!==-1)return k.N(m)
else{k.r=p
k.f=q}}return k.N(10)
case 46:l=k.r
if(k.o_())if(k.dQ().a===60){k.r=l
return k.N(62)}else return k.N(65)
return k.N(8)
case 40:return k.N(2)
case 41:return k.N(3)
case 123:return k.N(6)
case 125:return k.N(7)
case 91:return k.N(4)
case 93:if(k.ad(93)&&k.ad(62))return k.cB()
return k.N(5)
case 35:return k.N(11)
case 43:if(k.hJ(s))return k.dQ()
return k.N(12)
case 45:if(k.d||!1)return k.N(34)
else if(k.hJ(s))return k.dQ()
else if(A.hI(s)||s===45)return k.dP()
return k.N(34)
case 62:return k.N(13)
case 126:if(k.ad(61))return k.N(530)
return k.N(14)
case 42:if(k.ad(61))return k.N(534)
return k.N(15)
case 38:return k.N(36)
case 124:if(k.ad(61))return k.N(531)
return k.N(16)
case 58:return k.N(17)
case 44:return k.N(19)
case 59:return k.N(9)
case 37:return k.N(24)
case 39:return k.N(25)
case 34:return k.N(26)
case 47:if(k.ad(42))return k.nB()
return k.N(27)
case 60:if(k.ad(33))if(k.ad(45)&&k.ad(45))return k.nA()
else{if(k.ad(91)){o=k.Q.a
o=k.ad(B.b.E(o,0))&&k.ad(B.b.E(o,1))&&k.ad(B.b.E(o,2))&&k.ad(B.b.E(o,3))&&k.ad(B.b.E(o,4))&&k.ad(91)}else o=!1
if(o)return k.cB()}return k.N(32)
case 61:return k.N(28)
case 94:if(k.ad(61))return k.N(532)
return k.N(30)
case 36:if(k.ad(61))return k.N(533)
return k.N(31)
case 33:return k.dP()
default:if(!k.e&&s===92)return k.N(35)
if(k.c)o=(s===k.w||s===k.x)&&k.co()===k.y
else o=!1
if(o){k.cn()
k.r=k.f
return k.N(508)}else{o=s===118
if(o&&k.ad(97)&&k.ad(114)&&k.ad(45))return k.N(400)
else if(o&&k.ad(97)&&k.ad(114)&&k.co()===45)return k.N(401)
else if(A.hI(s)||s===45)return k.dP()
else if(s>=48&&s<=57)return k.dQ()}return k.N(65)}},
cB(){return this.ao(!1)},
dP(){var s,r,q,p,o,n,m,l,k,j=this,i=A.a([],t.t),h=j.f
j.f=j.r
r=j.b
s=r.length
while(!0){q=j.f
if(!(q<s)){s=q
break}p=B.b.J(r,q)
if(p===92&&j.c){o=j.f=q+1
j.nc(o+6)
q=j.f
if(q!==o){B.a.n(i,A.ch("0x"+B.b.A(r,o,q),null))
q=j.f
if(q===s){s=q
break}p=B.b.J(r,q)
if(q-o!==6)n=p===32||p===9||p===13||p===10
else n=!1
if(n)j.f=q+1}else{if(q===s){s=q
break}j.f=q+1
B.a.n(i,B.b.J(r,q))}}else{if(q>=h)if(j.d)if(!A.hI(p))n=p>=48&&p<=57
else n=!0
else{if(!A.hI(p))n=p>=48&&p<=57
else n=!0
n=n||p===45}else n=!0
if(n){B.a.n(i,p);++j.f}else{s=q
break}}}m=j.a.es(0,j.r,s)
l=A.ac(i,0,null)
if(!j.d&&!j.e){s=j.r
k=A.mx(B.a9,"unit",r,s,j.f-s)}else k=-1
if(k===-1)k=B.b.A(r,j.r,j.f)==="!important"?505:-1
return new A.fV(l,k>=0?k:511,m)},
dQ(){var s,r=this
r.iy()
if(r.co()===46){r.cn()
s=r.co()
if(s>=48&&s<=57){r.iy()
return r.N(62)}else --r.f}return r.N(60)},
o_(){var s=this.f,r=this.b
if(s<r.length){r=B.b.J(r,s)
r=r>=48&&r<=57}else r=!1
if(r){this.f=s+1
return!0}return!1},
nc(a){var s,r,q=this.b
a=Math.min(a,q.length)
for(;s=this.f,s<a;){r=B.b.J(q,s)
if(!(r>=48&&r<=57))if(!(r>=97&&r<=102))r=r>=65&&r<=70
else r=!0
else r=!0
if(r)this.f=s+1
else return}},
nA(){var s,r,q,p,o,n=this
for(;!0;){s=n.cn()
if(s===0){r=n.a
q=n.r
p=n.f
o=new A.ao(r,q,p)
o.aH(r,q,p)
return new A.bf(67,o)}else if(s===45)if(n.ad(45))if(n.ad(62))if(n.c)return n.cB()
else{r=n.a
q=n.r
p=n.f
o=new A.ao(r,q,p)
o.aH(r,q,p)
return new A.bf(504,o)}}},
nB(){var s,r,q,p,o,n=this
for(;!0;){s=n.cn()
if(s===0){r=n.a
q=n.r
p=n.f
o=new A.ao(r,q,p)
o.aH(r,q,p)
return new A.bf(67,o)}else if(s===42)if(n.ad(47))if(n.c)return n.cB()
else{r=n.a
q=n.r
p=n.f
o=new A.ao(r,q,p)
o.aH(r,q,p)
return new A.bf(64,o)}}}}
A.kt.prototype={
cn(){var s=this.f,r=this.b
if(s<r.length){this.f=s+1
return B.b.J(r,s)}else return 0},
hK(a){var s=this.f+a,r=this.b
if(s<r.length)return B.b.J(r,s)
else return 0},
co(){return this.hK(0)},
ad(a){var s=this.f,r=this.b
if(s<r.length)if(B.b.J(r,s)===a){this.f=s+1
return!0}else return!1
else return!1},
hJ(a){var s,r
if(a>=48&&a<=57)return!0
s=this.co()
if(a===46)return s>=48&&s<=57
if(a===43||a===45){if(!(s>=48&&s<=57))if(s===46){r=this.hK(1)
r=r>=48&&r<=57}else r=!1
else r=!0
return r}return!1},
N(a){return new A.bf(a,this.a.es(0,this.r,this.f))},
nC(){var s,r,q,p,o=this,n=--o.f
for(s=o.b,r=s.length;n<r;n=q){q=o.f=n+1
p=B.b.J(s,n)
if(!(p===32||p===9||p===13))if(p===10){if(!o.c){n=o.a
s=o.r
r=new A.ao(n,s,q)
r.aH(n,s,q)
return new A.bf(63,r)}}else{n=o.f=q-1
if(o.c)return o.cB()
else{s=o.a
r=o.r
q=new A.ao(s,r,n)
q.aH(s,r,n)
return new A.bf(63,q)}}}return o.N(1)},
iy(){var s,r,q,p
for(s=this.b,r=s.length;q=this.f,q<r;){p=B.b.J(s,q)
if(p>=48&&p<=57)this.f=q+1
else return}}}
A.d0.prototype={
l(a){return"MessageLevel."+this.b}}
A.d_.prototype={
l(a){var s=this,r=s.d&&B.ag.aj(s.a),q=r?B.ag.k(0,s.a):null,p=r?""+A.k(q):""
p=p+A.k(B.c2.k(0,s.a))+" "
if(r)p+="\x1b[0m"
p=p+"on "+s.c.iU(0,s.b,q)
return p.charCodeAt(0)==0?p:p}}
A.jS.prototype={
nk(a,b,c){var s=new A.d_(B.I,b,c,this.b.w)
B.a.n(this.c,s)
this.a.$1(s)}}
A.k8.prototype={}
A.bL.prototype={
R(a){return null},
l(a){var s=this.a
s=A.ac(B.v.b8(s.a.c,s.b,s.c),0,null)
return s},
gai(a){return this.b}}
A.ca.prototype={
R(a){return null},
gai(a){return"*"}}
A.hF.prototype={
R(a){return null},
gai(a){return"&"}}
A.ha.prototype={
R(a){return null},
gai(a){return"not"}}
A.hv.prototype={
R(a){return B.a.b1(this.b,a.gjm())}}
A.c4.prototype={
gm(a){return this.b.length},
R(a){return a.jn(this)}}
A.ep.prototype={
R(a){this.c.R(a)
return null},
l(a){var s=this.c.b
return s.gai(s)}}
A.aV.prototype={
gai(a){var s=this.b
return s.gai(s)},
R(a){return t.bF.a(this.b).R(a)}}
A.cr.prototype={
R(a){var s=this.b
return s instanceof A.ca||a.a.x===s.gai(s).toLowerCase()},
l(a){var s=this.b
return s.gai(s)}}
A.h7.prototype={
giV(){var s=this.d
if(s instanceof A.ca)s="*"
else s=s==null?"":t.gx.a(s).b
return s},
R(a){return a.oQ(this)},
l(a){var s=this.giV(),r=t.g9.a(this.b).b
return s+"|"+r.gai(r)}}
A.fw.prototype={
nY(){switch(this.d){case 28:return"="
case 530:return"~="
case 531:return"|="
case 532:return"^="
case 533:return"$="
case 534:return"*="
case 535:return""}return null},
oO(){var s=this.e
if(s!=null)if(s instanceof A.bL)return s.l(0)
else return'"'+A.k(s)+'"'
else return""},
R(a){return a.oP(this)},
l(a){var s=this.b
return"["+s.gai(s)+A.k(this.nY())+this.oO()+"]"}}
A.fU.prototype={
R(a){var s=a.a.b.k(0,"id"),r=s==null?"":s,q=this.b
return r===q.gai(q)},
l(a){return"#"+A.k(this.b)}}
A.fD.prototype={
R(a){var s,r=a.a
r.toString
s=this.b
s=s.gai(s)
return new A.fL(r).e2().G(0,s)},
l(a){return"."+A.k(this.b)}}
A.d5.prototype={
R(a){return a.oS(this)},
l(a){var s=this.b
return":"+s.gai(s)}}
A.d6.prototype={
R(a){a.oU(this)
return!1},
l(a){var s=this.d?":":"::",r=this.b
return s+r.gai(r)}}
A.ej.prototype={
R(a){return a.oR(this)}}
A.ho.prototype={
R(a){return a.oT(this)}}
A.da.prototype={
R(a){a.lW(this.b)
return null}}
A.hb.prototype={
R(a){return!A.io(this.d.R(a))}}
A.hg.prototype={
R(a){return null}}
A.hf.prototype={
R(a){return null}}
A.af.prototype={
R(a){return null}}
A.he.prototype={
R(a){return null}}
A.bg.prototype={
R(a){return null},
l(a){return this.d+A.k(A.qV(this.f))}}
A.h3.prototype={
R(a){return null}}
A.hl.prototype={
R(a){return null}}
A.fM.prototype={
R(a){return null}}
A.fP.prototype={
R(a){return null}}
A.fr.prototype={
R(a){return null}}
A.hG.prototype={
R(a){return null}}
A.fT.prototype={
R(a){return null}}
A.fS.prototype={
R(a){return null}}
A.hq.prototype={
R(a){return null}}
A.fC.prototype={
R(a){return null}}
A.hp.prototype={
R(a){return null}}
A.hQ.prototype={
R(a){return null}}
A.Q.prototype={}
A.ak.prototype={}
A.hR.prototype={
lW(a){var s
t.fr.a(a)
for(s=0;s<a.length;++s)a[s].R(this)},
$io4:1}
A.az.prototype={
l(a){var s=this.a,r=this.b
return s!=null?s+":"+r:r},
ga0(a){return 37*(37*(J.aE(this.a)&2097151)+B.b.ga0(this.b)&2097151)+B.b.ga0(this.c)&1073741823},
az(a,b){var s,r,q
if(!(b instanceof A.az))return 1
s=this.a
if(s==null)s=""
r=b.a
q=B.b.az(s,r==null?"":r)
if(q!==0)return q
q=B.b.az(this.b,b.b)
if(q!==0)return q
return B.b.az(this.c,b.c)},
W(a,b){if(b==null)return!1
return b instanceof A.az&&this.a==b.a&&this.b===b.b&&this.c===b.c},
$iae:1}
A.ib.prototype={}
A.lf.prototype={}
A.i2.prototype={}
A.ag.prototype={
gak(a){var s,r=this,q=r.c
if(q===$){s=A.a([],t.d)
r.c!==$&&A.C("nodes")
q=r.c=new A.ah(r,s)}return q},
gij(a){var s,r=this,q=r.d
if(q===$){s=new A.fQ(r.gak(r))
r.d!==$&&A.C("children")
r.slm(s)
q=s}return q},
e3(a){var s=this.a
if(s!=null)B.a.a6(s.gak(s).a,this)
return this},
nM(a,b,c){var s,r,q=this
if(c==null)q.gak(q).n(0,b)
else{s=q.gak(q)
r=q.gak(q)
s.bD(0,r.ah(r,c),b)}},
dm(a,b,c){var s,r,q,p,o,n,m,l
A.ir(c,t.J,"T","_clone")
c.a(a)
if(b)for(s=this.gak(this).a,r=A.v(s),s=new J.av(s,s.length,r.h("av<1>")),r=r.c,q=t.d;s.q();){p=s.d
p=(p==null?r.a(p):p).cV(0,!0)
o=a.c
if(o===$){n=A.a([],q)
a.c!==$&&A.C("nodes")
o=a.c=new A.ah(a,n)}n=p.a
if(n!=null){m=n.c
if(m===$){l=A.a([],q)
n.c!==$&&A.C("nodes")
m=n.c=new A.ah(n,l)}B.a.a6(m.a,p)}p.a=o.b
o.bX(0,p)}return a},
scU(a,b){this.b=t.oP.a(b)},
slm(a){this.d=t.jB.a(a)}}
A.dK.prototype={
l(a){return"#document"},
cV(a,b){return this.dm(A.nt(),!0,t.dA)}}
A.fK.prototype={
l(a){var s,r=this,q=r.x,p=q==null
if(!p||r.y!=null){if(p)q=""
s=r.y
if(s==null)s=""
return"<!DOCTYPE "+A.k(r.w)+' "'+q+'" "'+s+'">'}else return"<!DOCTYPE "+A.k(r.w)+">"},
cV(a,b){return A.nu(this.w,this.x,this.y)}}
A.bQ.prototype={
l(a){var s=J.bx(this.w)
this.w=s
return'"'+s+'"'},
cV(a,b){var s=J.bx(this.w)
this.w=s
return A.mw(s)},
i9(a,b){var s=this.w;(!(s instanceof A.a3)?this.w=new A.a3(A.k(s)):s).a+=b}}
A.U.prototype={
ge_(a){var s,r,q,p,o=this.a
if(o==null)return null
s=o.gak(o)
for(r=s.ah(s,this)-1,o=s.a,q=o.length;r>=0;--r){if(!(r<q))return A.c(o,r)
p=o[r]
if(p instanceof A.U)return p}return null},
giW(a){var s,r,q,p,o,n=this.a
if(n==null)return null
s=n.gak(n)
for(r=s.ah(s,this)+1,q=s.a,p=q.length;r<p;++r){if(!(r>=0))return A.c(q,r)
o=q[r]
if(o instanceof A.U)return o}return null},
l(a){var s=A.qn(this.w)
return"<"+(s==null?"":s+" ")+A.k(this.x)+">"},
cV(a,b){var s=this,r=A.md(s.x,s.w)
r.scU(0,A.h4(s.b,t.K,t.N))
return s.dm(r,b,t.h)}}
A.fG.prototype={
l(a){return"<!-- "+this.w+" -->"},
cV(a,b){return A.nr(this.w)}}
A.ah.prototype={
n(a,b){t.J.a(b)
b.e3(0)
b.a=this.b
this.bX(0,b)},
H(a,b){var s,r,q,p,o,n,m,l,k=this.lD(t.hl.a(b))
for(s=A.v(k).h("V<1>"),r=new A.V(k,s),r=new A.K(r,r.gm(r),s.h("K<B.E>")),q=this.b,s=s.h("B.E"),p=t.d;r.q();){o=r.d
if(o==null)o=s.a(o)
n=o.a
if(n!=null){m=n.c
if(m===$){l=A.a([],p)
n.c!==$&&A.C("nodes")
m=n.c=new A.ah(n,l)}B.a.a6(m.a,o)}o.a=q}this.kZ(0,k)},
bD(a,b,c){c.e3(0)
c.a=this.b
this.h6(0,b,c)},
bO(a){var s,r,q
for(s=this.a,r=A.v(s),s=new J.av(s,s.length,r.h("av<1>")),r=r.c;s.q();){q=s.d;(q==null?r.a(q):q).a=null}this.kX(this)},
u(a,b,c){var s
t.J.a(c)
s=this.a
if(!(b>=0&&b<s.length))return A.c(s,b)
s[b].a=null
c.e3(0)
c.a=this.b
this.kY(0,b,c)},
lD(a){var s,r
t.hl.a(a)
s=A.a([],t.d)
for(r=a.gI(a);r.q();)B.a.n(s,r.gC())
return s}}
A.fQ.prototype={
u(a,b,c){var s,r,q
t.h.a(c)
s=t.x
s=A.h(new A.an(this.a,s),!1,s.h("j.E"))
if(!(b>=0&&b<s.length))return A.c(s,b)
s=s[b]
r=s.a
if(r==null)A.L(A.R("Node must have a parent to replace it."))
r=r.gak(r)
q=s.a
q=q.gak(q)
r.u(0,q.ah(q,s),c)},
sm(a,b){var s=t.x,r=A.h(new A.an(this.a,s),!1,s.h("j.E")).length
if(b>=r)return
else if(b<0)throw A.d(A.a7("Invalid list length",null))
this.fw(0,b,r)},
n(a,b){this.a.n(0,t.h.a(b))},
cf(a,b){t.dU.a(b)
throw A.d(A.R("TODO(jacobr): should we impl?"))},
fw(a,b,c){var s=t.x
B.a.ba(B.a.b8(A.h(new A.an(this.a,s),!1,s.h("j.E")),b,c),new A.j3())},
dX(a,b,c){var s,r
c.h("0(U)").a(b)
s=t.x
s=A.h(new A.an(this.a,s),!1,s.h("j.E"))
r=A.v(s)
return new A.H(s,r.X(c).h("1(2)").a(b),r.h("@<1>").X(c).h("H<1,2>"))},
e8(a,b){var s,r
t.cT.a(b)
s=t.x
s=A.h(new A.an(this.a,s),!1,s.h("j.E"))
r=A.v(s)
return new A.ai(s,r.h("y(1)").a(b),r.h("ai<1>"))},
ct(a,b){var s
t.cT.a(b)
s=t.x
return B.a.ct(A.h(new A.an(this.a,s),!1,s.h("j.E")),b)},
ag(a,b){var s=t.x
s=A.h(new A.an(this.a,s),!1,s.h("j.E"))
if(!(b>=0&&b<s.length))return A.c(s,b)
return s[b]},
gan(a){var s=t.x
return A.h(new A.an(this.a,s),!1,s.h("j.E")).length===0},
gm(a){var s=t.x
return A.h(new A.an(this.a,s),!1,s.h("j.E")).length},
k(a,b){var s=t.x
s=A.h(new A.an(this.a,s),!1,s.h("j.E"))
if(!(b>=0&&b<s.length))return A.c(s,b)
return s[b]},
gI(a){var s=t.x
s=A.h(new A.an(this.a,s),!1,s.h("j.E"))
return new J.av(s,s.length,A.v(s).h("av<1>"))},
gZ(a){var s=t.x
return B.a.gZ(A.h(new A.an(this.a,s),!1,s.h("j.E")))},
gp(a){var s=t.x
return B.a.gp(A.h(new A.an(this.a,s),!1,s.h("j.E")))},
$iN:1,
$in:1}
A.j3.prototype={
$1(a){return t.h.a(a).e3(0)},
$S:79}
A.i_.prototype={}
A.i0.prototype={}
A.i1.prototype={}
A.i4.prototype={}
A.i5.prototype={}
A.i8.prototype={}
A.jt.prototype={
gaC(){var s=this.x
return s===$?this.x=this.ghx():s},
ghx(){var s=this,r=s.Q
if(r===$){r!==$&&A.C("_initialPhase")
r=s.Q=new A.bp(s,s.d)}return r},
ghk(){var s=this,r=s.as
if(r===$){r!==$&&A.C("_beforeHtmlPhase")
r=s.as=new A.fz(s,s.d)}return r},
gls(){var s=this,r=s.at
if(r===$){r!==$&&A.C("_beforeHeadPhase")
r=s.at=new A.dE(s,s.d)}return r},
gbY(){var s=this,r=s.ax
if(r===$){r!==$&&A.C("_inHeadPhase")
r=s.ax=new A.fX(s,s.d)}return r},
ga8(){var s=this,r=s.ch
if(r===$){r!==$&&A.C("_inBodyPhase")
r=s.ch=new A.cU(s,s.d)}return r},
ghT(){var s=this,r=s.CW
if(r===$){r!==$&&A.C("_textPhase")
r=s.CW=new A.hE(s,s.d)}return r},
gaI(){var s=this,r=s.cx
if(r===$){r!==$&&A.C("_inTablePhase")
r=s.cx=new A.e3(s,s.d)}return r},
gdq(){var s,r=this,q=r.cy
if(q===$){s=A.a([],t.ks)
r.cy!==$&&A.C("_inTableTextPhase")
q=r.cy=new A.cW(s,r,r.d)}return q},
ght(){var s=this,r=s.db
if(r===$){r!==$&&A.C("_inCaptionPhase")
r=s.db=new A.dZ(s,s.d)}return r},
ghv(){var s=this,r=s.dx
if(r===$){r!==$&&A.C("_inColumnGroupPhase")
r=s.dx=new A.e_(s,s.d)}return r},
geJ(){var s=this,r=s.dy
if(r===$){r!==$&&A.C("_inTableBodyPhase")
r=s.dy=new A.cs(s,s.d)}return r},
geI(){var s=this,r=s.fr
if(r===$){r!==$&&A.C("_inRowPhase")
r=s.fr=new A.e1(s,s.d)}return r},
ghu(){var s=this,r=s.fx
if(r===$){r!==$&&A.C("_inCellPhase")
r=s.fx=new A.cV(s,s.d)}return r},
gbZ(){var s=this,r=s.fy
if(r===$){r!==$&&A.C("_inSelectPhase")
r=s.fy=new A.e2(s,s.d)}return r},
ghw(){var s=this,r=s.k2
if(r===$){r!==$&&A.C("_inFramesetPhase")
r=s.k2=new A.e0(s,s.d)}return r},
lJ(){var s
this.bo(0)
for(;!0;)try{this.nU()
break}catch(s){if(A.bk(s) instanceof A.kb)this.bo(0)
else throw s}},
bo(a){var s=this
s.c.bo(0)
s.d.bo(0)
s.f=!1
B.a.bO(s.e)
s.r="no quirks"
s.x=s.ghx()
s.z=!0},
iR(a){var s,r,q=a.x
if(q==="annotation-xml"&&a.w==="http://www.w3.org/1998/Math/MathML"){q=a.b.k(0,"encoding")
if(q==null)s=null
else{r=t.E
s=A.ac(new A.H(new A.a8(q),r.h("i(u.E)").a(A.bI()),r.h("H<u.E,i>")),0,null)}return s==="text/html"||s==="application/xhtml+xml"}else return B.a.G(B.br,new A.o(a.w,q,t.iA))},
nL(a,b){var s,r=this.d,q=r.c
if(q.length===0)return!1
s=B.a.gp(q)
q=s.w
if(q==r.a)return!1
r=s.x
if(B.a.G(B.ab,new A.o(q,r,t.iA))){if(b===2){q=t.ny.a(a).b
q=q!=="mglyph"&&q!=="malignmark"}else q=!1
if(q)return!1
if(b===1||b===0)return!1}if(r==="annotation-xml"&&b===2&&t.ny.a(a).b==="svg")return!1
if(this.iR(s))if(b===2||b===1||b===0)return!1
return!0},
nU(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9="_initialPhase"
for(s=a8.c,r=a8.d,q=t.i,p=t.cw,o=t.ia,n=t.ny,m=t.lH,l=t.g4,k=a8.e,j=t.m,i=t.jK,h=s.a,g=t.N,f=t.X;s.q();){e=s.at
e.toString
for(d=e;d!=null;){c=d.gc8(d)
if(c===6){i.a(d)
b=d.a
a=d.c
if(a==null){a=d.c=J.bx(d.b)
d.b=null}a0=j.a(d.e)
if(b==null){a1=h.w
if(a1==null)b=null
else{a2=h.y
new A.aY(a1,a2).bf(a1,a2)
b=new A.ao(a1,a2,a2)
b.aH(a1,a2,a2)}}B.a.n(k,new A.aT(a,b,a0))
d=null}else{a3=a8.x
if(a3===$){a3=a8.Q
if(a3===$){a4=new A.bp(a8,r)
a3!==$&&A.C(a9)
a8.Q=a4
a3=a4}a8.x=a3}if(a8.nL(e,c)){a3=a8.id
if(a3===$){a4=new A.fW(a8,r)
a3!==$&&A.C("_inForeignContentPhase")
a8.id=a4
a3=a4}a5=a3}else a5=a3
switch(c){case 1:d=a5.a3(l.a(d))
break
case 0:d=a5.aJ(m.a(d))
break
case 2:d=a5.L(n.a(d))
break
case 3:d=a5.P(o.a(d))
break
case 4:d=a5.ca(p.a(d))
break
case 5:d=a5.j1(q.a(d))
break}}}if(e instanceof A.c6)if(e.c&&!e.r){b=e.a
e=j.a(A.x(["name",e.b],g,f))
if(b==null){a=h.w
if(a==null)b=null
else{a0=h.y
new A.aY(a,a0).bf(a,a0)
b=new A.ao(a,a0,a0)
b.aH(a,a0,a0)}}B.a.n(k,new A.aT("non-void-element-with-trailing-solidus",b,e))}}a6=A.a([],t.gg)
for(a7=!0;a7;){a3=a8.x
if(a3===$){a3=a8.Q
if(a3===$){a4=new A.bp(a8,r)
a3!==$&&A.C(a9)
a8.Q=a4
a3=a4}a3=a8.x=a3}B.a.n(a6,a3)
a3=a8.x
if(a3===$){a3=a8.Q
if(a3===$){a4=new A.bp(a8,r)
a3!==$&&A.C(a9)
a8.Q=a4
a3=a4}a3=a8.x=a3}a7=a3.aa()}},
ghC(){var s=this.c.a,r=s.w
if(r==null)s=null
else{s=A.bX(r,s.y)
r=s.b
r=A.mC(s.a,r,r)
s=r}return s},
F(a,b,c){var s
t.m.a(c)
s=new A.aT(b,a==null?this.ghC():a,c)
B.a.n(this.e,s)},
a2(a,b){return this.F(a,b,B.U)},
i1(a){var s=a.e.a6(0,"definitionurl")
if(s!=null)a.e.u(0,"definitionURL",s)},
i2(a){var s,r,q,p,o,n
for(s=a.e,r=A.z(s).h("aQ<1>"),r=A.h(new A.aQ(s,r),!1,r.h("j.E")),s=r.length,q=0;q<s;++q){p=A.aq(r[q])
o=B.c4.k(0,p)
if(o!=null){n=a.e
p=n.a6(0,p)
p.toString
n.u(0,o,p)}}},
eR(a){var s,r,q,p,o,n
for(s=a.e,r=A.z(s).h("aQ<1>"),r=A.h(new A.aQ(s,r),!1,r.h("j.E")),s=r.length,q=0;q<s;++q){p=A.aq(r[q])
o=B.c3.k(0,p)
if(o!=null){n=a.e
p=n.a6(0,p)
p.toString
n.u(0,o,p)}}},
jb(){var s,r,q,p,o,n,m,l,k,j=this,i="_inCellPhase",h="_inTableBodyPhase",g="_inBodyPhase"
for(s=j.d,r=s.c,q=A.v(r).h("V<1>"),p=new A.V(r,q),p=new A.K(p,p.gm(p),q.h("K<B.E>")),q=q.h("B.E"),o=s.a;p.q();){n=p.d
if(n==null)n=q.a(n)
m=n.x
if(0>=r.length)return A.c(r,0)
l=n===r[0]
if(l)m=j.w
switch(m){case"select":case"colgroup":case"head":case"html":break}if(!l&&n.w!=o)continue
switch(m){case"select":k=j.fy
if(k===$){k!==$&&A.C("_inSelectPhase")
k=j.fy=new A.e2(j,s)}j.x=k
return
case"td":k=j.fx
if(k===$){k!==$&&A.C(i)
k=j.fx=new A.cV(j,s)}j.x=k
return
case"th":k=j.fx
if(k===$){k!==$&&A.C(i)
k=j.fx=new A.cV(j,s)}j.x=k
return
case"tr":k=j.fr
if(k===$){k!==$&&A.C("_inRowPhase")
k=j.fr=new A.e1(j,s)}j.x=k
return
case"tbody":k=j.dy
if(k===$){k!==$&&A.C(h)
k=j.dy=new A.cs(j,s)}j.x=k
return
case"thead":k=j.dy
if(k===$){k!==$&&A.C(h)
k=j.dy=new A.cs(j,s)}j.x=k
return
case"tfoot":k=j.dy
if(k===$){k!==$&&A.C(h)
k=j.dy=new A.cs(j,s)}j.x=k
return
case"caption":k=j.db
if(k===$){k!==$&&A.C("_inCaptionPhase")
k=j.db=new A.dZ(j,s)}j.x=k
return
case"colgroup":k=j.dx
if(k===$){k!==$&&A.C("_inColumnGroupPhase")
k=j.dx=new A.e_(j,s)}j.x=k
return
case"table":k=j.cx
if(k===$){k!==$&&A.C("_inTablePhase")
k=j.cx=new A.e3(j,s)}j.x=k
return
case"head":k=j.ch
if(k===$){k!==$&&A.C(g)
k=j.ch=new A.cU(j,s)}j.x=k
return
case"body":k=j.ch
if(k===$){k!==$&&A.C(g)
k=j.ch=new A.cU(j,s)}j.x=k
return
case"frameset":k=j.k2
if(k===$){k!==$&&A.C("_inFramesetPhase")
k=j.k2=new A.e0(j,s)}j.x=k
return
case"html":k=j.at
if(k===$){k!==$&&A.C("_beforeHeadPhase")
k=j.at=new A.dE(j,s)}j.x=k
return}}j.x=j.ga8()},
d5(a,b){var s,r,q=this
q.d.O(a)
s=t.c
r=q.c
if(b==="RAWTEXT")r.si(s.a(r.ge1()))
else r.si(s.a(r.gcG()))
q.y=q.gaC()
q.x=q.ghT()}}
A.a6.prototype={
aa(){throw A.d(A.hJ(null))},
ca(a){var s=this.b
s.cA(a,B.a.gp(s.c))
return null},
j1(a){this.a.a2(a.a,"unexpected-doctype")
return null},
a3(a){this.b.bR(a.gaA(a),a.a)
return null},
aJ(a){this.b.bR(a.gaA(a),a.a)
return null},
L(a){throw A.d(A.hJ(null))},
be(a){var s,r=this.a
if(!r.f&&a.b==="html")r.a2(a.a,"non-html-root")
s=this.b.c
if(0>=s.length)return A.c(s,0)
s[0].e=a.a
a.e.ba(0,new A.k7(this))
r.f=!1
return null},
P(a){throw A.d(A.hJ(null))},
cD(a){var s,r=a.b,q=this.b.c
if(0>=q.length)return A.c(q,-1)
s=q.pop()
for(;s.x!=r;){if(0>=q.length)return A.c(q,-1)
s=q.pop()}}}
A.k7.prototype={
$2(a,b){var s
t.K.a(a)
A.aq(b)
s=this.a.b.c
if(0>=s.length)return A.c(s,0)
s[0].b.e0(a,new A.k6(b))},
$S:21}
A.k6.prototype={
$0(){return this.a},
$S:5}
A.bp.prototype={
aJ(a){return null},
ca(a){var s=this.b,r=s.b
r===$&&A.b("document")
s.cA(a,r)
return null},
j1(a){var s,r,q,p,o,n=this,m=a.d,l=a.b
if(l==null)s=null
else{r=t.E
s=A.ac(new A.H(new A.a8(l),r.h("i(u.E)").a(A.bI()),r.h("H<u.E,i>")),0,null)}q=a.c
p=a.e
if(m==="html")if(s==null)l=q!=null&&q!=="about:legacy-compat"
else l=!0
else l=!0
if(l)n.a.a2(a.a,"unknown-doctype")
if(s==null)s=""
o=A.nu(a.d,a.b,a.c)
o.e=a.a
l=n.b.b
l===$&&A.b("document")
l.gak(l).n(0,o)
if(p)if(a.d==="html"){l=B.b.gh4(s)
if(!B.a.b1(B.ba,l))if(!B.a.G(B.bm,s))if(!(B.a.b1(B.aa,l)&&q==null))l=q!=null&&q.toLowerCase()==="http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd"
else l=!0
else l=!0
else l=!0}else l=!0
else l=!0
if(l)n.a.r="quirks"
else{l=B.b.gh4(s)
if(!B.a.b1(B.bs,l))l=B.a.b1(B.aa,l)&&q!=null
else l=!0
if(l)n.a.r="limited quirks"}l=n.a
l.x=l.ghk()
return null},
bz(){var s=this.a
s.r="quirks"
s.x=s.ghk()},
a3(a){this.a.a2(a.a,"expected-doctype-but-got-chars")
this.bz()
return a},
L(a){this.a.F(a.a,"expected-doctype-but-got-start-tag",A.x(["name",a.b],t.N,t.X))
this.bz()
return a},
P(a){this.a.F(a.a,"expected-doctype-but-got-end-tag",A.x(["name",a.b],t.N,t.X))
this.bz()
return a},
aa(){var s=this.a
s.a2(s.ghC(),"expected-doctype-but-got-eof")
this.bz()
return!0}}
A.fz.prototype={
dU(){var s=this.b,r=s.iu(0,A.aG("html",A.aa(null,null,t.K,t.N),null,!1))
B.a.n(s.c,r)
s=s.b
s===$&&A.b("document")
s.gak(s).n(0,r)
s=this.a
s.x=s.gls()},
aa(){this.dU()
return!0},
ca(a){var s=this.b,r=s.b
r===$&&A.b("document")
s.cA(a,r)
return null},
aJ(a){return null},
a3(a){this.dU()
return a},
L(a){if(a.b==="html")this.a.f=!0
this.dU()
return a},
P(a){var s=a.b
switch(s){case"head":case"body":case"html":case"br":this.dU()
return a
default:this.a.F(a.a,"unexpected-end-tag-before-html",A.x(["name",s],t.N,t.X))
return null}}}
A.dE.prototype={
L(a){var s=null
switch(a.b){case"html":return this.a.ga8().L(a)
case"head":this.cN(a)
return s
default:this.cN(A.aG("head",A.aa(s,s,t.K,t.N),s,!1))
return a}},
P(a){var s=null,r=a.b
switch(r){case"head":case"body":case"html":case"br":this.cN(A.aG("head",A.aa(s,s,t.K,t.N),s,!1))
return a
default:this.a.F(a.a,"end-tag-after-implied-root",A.x(["name",r],t.N,t.X))
return s}},
aa(){this.cN(A.aG("head",A.aa(null,null,t.K,t.N),null,!1))
return!0},
aJ(a){return null},
a3(a){this.cN(A.aG("head",A.aa(null,null,t.K,t.N),null,!1))
return a},
cN(a){var s=this.b
s.O(a)
s.snI(B.a.gp(s.c))
s=this.a
s.x=s.gbY()}}
A.fX.prototype={
L(a){var s,r,q,p,o,n=this,m=null
switch(a.b){case"html":return n.a.ga8().L(a)
case"title":n.a.d5(a,"RCDATA")
return m
case"noscript":case"noframes":case"style":n.a.d5(a,"RAWTEXT")
return m
case"script":n.b.O(a)
s=n.a
r=s.c
r.si(t.c.a(r.gbI()))
s.y=s.gaC()
s.x=s.ghT()
return m
case"base":case"basefont":case"bgsound":case"command":case"link":s=n.b
s.O(a)
s=s.c
if(0>=s.length)return A.c(s,-1)
s.pop()
a.r=!0
return m
case"meta":s=n.b
s.O(a)
s=s.c
if(0>=s.length)return A.c(s,-1)
s.pop()
a.r=!0
q=a.e
s=n.a.c.a
if(!s.b){p=q.k(0,"charset")
o=q.k(0,"content")
if(p!=null)s.ii(p)
else if(o!=null)s.ii(new A.iT(new A.j1(o)).o2())}return m
case"head":n.a.a2(a.a,"two-heads-are-not-better-than-one")
return m
default:n.cY(new A.I("head",!1))
return a}},
P(a){var s=a.b
switch(s){case"head":this.cY(a)
return null
case"br":case"html":case"body":this.cY(new A.I("head",!1))
return a
default:this.a.F(a.a,"unexpected-end-tag",A.x(["name",s],t.N,t.X))
return null}},
aa(){this.cY(new A.I("head",!1))
return!0},
a3(a){this.cY(new A.I("head",!1))
return a},
cY(a){var s,r=this.a,q=r.d,p=q.c
if(0>=p.length)return A.c(p,-1)
p.pop()
s=r.ay
if(s===$){s!==$&&A.C("_afterHeadPhase")
s=r.ay=new A.fp(r,q)}r.x=s}}
A.fp.prototype={
L(a){var s=this,r=null,q=a.b
switch(q){case"html":return s.a.ga8().L(a)
case"body":q=s.a
q.z=!1
s.b.O(a)
q.x=q.ga8()
return r
case"frameset":s.b.O(a)
q=s.a
q.x=q.ghw()
return r
case"base":case"basefont":case"bgsound":case"link":case"meta":case"noframes":case"script":case"style":case"title":s.kE(a)
return r
case"head":s.a.F(a.a,"unexpected-start-tag",A.x(["name",q],t.N,t.X))
return r
default:s.bz()
return a}},
P(a){var s=a.b
switch(s){case"body":case"html":case"br":this.bz()
return a
default:this.a.F(a.a,"unexpected-end-tag",A.x(["name",s],t.N,t.X))
return null}},
aa(){this.bz()
return!0},
a3(a){this.bz()
return a},
kE(a){var s,r,q,p=this.a
p.F(a.a,"unexpected-start-tag-out-of-my-head",A.x(["name",a.b],t.N,t.X))
s=this.b
r=s.c
B.a.n(r,t.h.a(s.e))
p.gbY().L(a)
for(p=A.v(r).h("V<1>"),s=new A.V(r,p),s=new A.K(s,s.gm(s),p.h("K<B.E>")),p=p.h("B.E");s.q();){q=s.d
if(q==null)q=p.a(q)
if(q.x==="head"){B.a.a6(r,q)
break}}},
bz(){this.b.O(A.aG("body",A.aa(null,null,t.K,t.N),null,!1))
var s=this.a
s.x=s.ga8()
s.z=!0}}
A.cU.prototype={
L(a){var s,r,q,p,o,n,m=this,l=null,k="p",j="button",i="unexpected-start-tag",h="unexpected-start-tag-implies-end-tag",g="RAWTEXT",f=a.b
switch(f){case"html":return m.be(a)
case"base":case"basefont":case"bgsound":case"command":case"link":case"meta":case"noframes":case"script":case"style":case"title":return m.a.gbY().L(a)
case"body":m.kB(a)
return l
case"frameset":m.kD(a)
return l
case"address":case"article":case"aside":case"blockquote":case"center":case"details":case"dir":case"div":case"dl":case"fieldset":case"figcaption":case"figure":case"footer":case"header":case"hgroup":case"menu":case"nav":case"ol":case"p":case"section":case"summary":case"ul":m.fZ(a)
return l
case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":f=m.b
if(f.a1(k,j))m.bB(new A.I(k,!1))
s=f.c
if(B.a.G(B.E,B.a.gp(s).x)){m.a.F(a.a,i,A.x(["name",a.b],t.N,t.X))
if(0>=s.length)return A.c(s,-1)
s.pop()}f.O(a)
return l
case"pre":case"listing":f=m.b
if(f.a1(k,j))m.bB(new A.I(k,!1))
f.O(a)
m.a.z=!1
m.c=!0
return l
case"form":f=m.b
if(f.f!=null)m.a.F(a.a,i,A.x(["name","form"],t.N,t.X))
else{if(f.a1(k,j))m.bB(new A.I(k,!1))
f.O(a)
f.siJ(B.a.gp(f.c))}return l
case"li":case"dd":case"dt":m.kH(a)
return l
case"plaintext":f=m.b
if(f.a1(k,j))m.bB(new A.I(k,!1))
f.O(a)
f=m.a.c
f.si(t.c.a(f.go4()))
return l
case"a":f=m.b
r=f.iz("a")
if(r!=null){m.a.F(a.a,h,A.x(["startName","a","endName","a"],t.N,t.X))
m.iB(new A.I("a",!1))
B.a.a6(f.c,r)
B.a.a6(f.d.a,r)}f.aD()
m.eQ(a)
return l
case"b":case"big":case"code":case"em":case"font":case"i":case"s":case"small":case"strike":case"strong":case"tt":case"u":m.b.aD()
m.eQ(a)
return l
case"nobr":f=m.b
f.aD()
if(f.b2("nobr")){m.a.F(a.a,h,A.x(["startName","nobr","endName","nobr"],t.N,t.X))
m.P(new A.I("nobr",!1))
f.aD()}m.eQ(a)
return l
case"button":return m.kC(a)
case"applet":case"marquee":case"object":f=m.b
f.aD()
f.O(a)
f.d.n(0,l)
m.a.z=!1
return l
case"xmp":f=m.b
if(f.a1(k,j))m.bB(new A.I(k,!1))
f.aD()
f=m.a
f.z=!1
f.d5(a,g)
return l
case"table":f=m.a
if(f.r!=="quirks")if(m.b.a1(k,j))m.P(new A.I(k,!1))
m.b.O(a)
f.z=!1
f.x=f.gaI()
return l
case"area":case"br":case"embed":case"img":case"keygen":case"wbr":m.h3(a)
return l
case"param":case"source":case"track":f=m.b
f.O(a)
f=f.c
if(0>=f.length)return A.c(f,-1)
f.pop()
a.r=!0
return l
case"input":f=m.a
q=f.z
m.h3(a)
s=a.e.k(0,"type")
if(s==null)s=l
else{p=t.E
p=A.ac(new A.H(new A.a8(s),p.h("i(u.E)").a(A.bI()),p.h("H<u.E,i>")),0,l)
s=p}if(s==="hidden")f.z=q
return l
case"hr":f=m.b
if(f.a1(k,j))m.bB(new A.I(k,!1))
f.O(a)
f=f.c
if(0>=f.length)return A.c(f,-1)
f.pop()
a.r=!0
m.a.z=!1
return l
case"image":m.a.F(a.a,"unexpected-start-tag-treated-as",A.x(["originalName","image","newName","img"],t.N,t.X))
m.L(A.aG("img",a.e,l,a.c))
return l
case"isindex":m.kG(a)
return l
case"textarea":m.b.O(a)
f=m.a
s=f.c
s.si(t.c.a(s.gcG()))
m.c=!0
f.z=!1
return l
case"iframe":f=m.a
f.z=!1
f.d5(a,g)
return l
case"noembed":case"noscript":m.a.d5(a,g)
return l
case"select":f=m.b
f.aD()
f.O(a)
f=m.a
f.z=!1
if(f.gaI()===f.gaC()||f.ght()===f.gaC()||f.ghv()===f.gaC()||f.geJ()===f.gaC()||f.geI()===f.gaC()||f.ghu()===f.gaC()){o=f.go
if(o===$){o!==$&&A.C("_inSelectInTablePhase")
o=f.go=new A.fY(f,f.d)}f.x=o}else f.x=f.gbZ()
return l
case"rp":case"rt":f=m.b
if(f.b2("ruby")){f.cd()
n=B.a.gp(f.c)
if(n.x!=="ruby")m.a.a2(n.e,"undefined-error")}f.O(a)
return l
case"option":case"optgroup":f=m.b
if(B.a.gp(f.c).x==="option")m.a.gaC().P(new A.I("option",!1))
f.aD()
m.a.d.O(a)
return l
case"math":f=m.b
f.aD()
s=m.a
s.i1(a)
s.eR(a)
a.w="http://www.w3.org/1998/Math/MathML"
f.O(a)
if(a.c){f=f.c
if(0>=f.length)return A.c(f,-1)
f.pop()
a.r=!0}return l
case"svg":f=m.b
f.aD()
s=m.a
s.i2(a)
s.eR(a)
a.w="http://www.w3.org/2000/svg"
f.O(a)
if(a.c){f=f.c
if(0>=f.length)return A.c(f,-1)
f.pop()
a.r=!0}return l
case"caption":case"col":case"colgroup":case"frame":case"head":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":m.a.F(a.a,"unexpected-start-tag-ignored",A.x(["name",f],t.N,t.X))
return l
default:f=m.b
f.aD()
f.O(a)
return l}},
P(a){var s,r,q,p,o,n=this,m=null,l="end-tag-too-early",k="unexpected-end-tag",j=a.b
switch(j){case"body":n.iA(a)
return m
case"html":return n.f8(a)
case"address":case"article":case"aside":case"blockquote":case"button":case"center":case"details":case"dir":case"div":case"dl":case"fieldset":case"figcaption":case"figure":case"footer":case"header":case"hgroup":case"listing":case"menu":case"nav":case"ol":case"pre":case"section":case"summary":case"ul":if(j==="pre")n.c=!1
s=n.b
r=s.b2(j)
if(r)s.cd()
j=B.a.gp(s.c).x
s=a.b
if(j!=s)n.a.F(a.a,l,A.x(["name",s],t.N,t.X))
if(r)n.cD(a)
return m
case"form":j=n.b
q=j.f
j.f=null
if(q==null||!j.b2(q))n.a.F(a.a,k,A.x(["name","form"],t.N,t.X))
else{j.cd()
j=j.c
if(!J.T(B.a.gp(j),q))n.a.F(a.a,"end-tag-too-early-ignored",A.x(["name","form"],t.N,t.X))
B.a.a6(j,q)}return m
case"p":n.bB(a)
return m
case"dd":case"dt":case"li":p=j==="li"?"list":m
s=n.b
j=s.a1(j,p)
o=a.b
if(!j)n.a.F(a.a,k,A.x(["name",o],t.N,t.X))
else{s.bU(o)
j=B.a.gp(s.c).x
s=a.b
if(j!=s)n.a.F(a.a,l,A.x(["name",s],t.N,t.X))
n.cD(a)}return m
case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":n.ne(a)
return m
case"a":case"b":case"big":case"code":case"em":case"font":case"i":case"nobr":case"s":case"small":case"strike":case"strong":case"tt":case"u":n.iB(a)
return m
case"applet":case"marquee":case"object":s=n.b
if(s.b2(j))s.cd()
j=B.a.gp(s.c).x
o=a.b
if(j!=o)n.a.F(a.a,l,A.x(["name",o],t.N,t.X))
if(s.b2(a.b)){n.cD(a)
s.eX()}return m
case"br":j=t.N
n.a.F(a.a,"unexpected-end-tag-treated-as",A.x(["originalName","br","newName","br element"],j,t.X))
s=n.b
s.aD()
s.O(A.aG("br",A.aa(m,m,t.K,j),m,!1))
s=s.c
if(0>=s.length)return A.c(s,-1)
s.pop()
return m
default:n.ng(a)
return m}},
nP(a,b){var s,r
if(a.x!=b.x||a.w!=b.w)return!1
else{s=a.b
if(s.a!==b.b.a)return!1
else for(s=A.nB(s,s.r,A.z(s).c);s.q();){r=s.d
if(!J.T(a.b.k(0,r),b.b.k(0,r)))return!1}}return!0},
eQ(a){var s,r,q,p,o,n,m=this.b
m.O(a)
s=B.a.gp(m.c)
r=A.a([],t.hg)
for(m=m.d,q=A.z(m).h("V<u.E>"),p=new A.V(m,q),p=new A.K(p,p.gm(p),q.h("K<B.E>")),o=t.h,q=q.h("B.E");p.q();){n=p.d
if(n==null)n=q.a(n)
if(n==null)break
else{o.a(n)
if(this.nP(n,s))B.a.n(r,n)}}if(r.length===3)B.a.a6(m.a,B.a.gp(r))
m.n(0,s)},
aa(){var s,r,q,p
for(s=this.b.c,r=A.v(s).h("V<1>"),s=new A.V(s,r),s=new A.K(s,s.gm(s),r.h("K<B.E>")),r=r.h("B.E");s.q();){q=s.d
if(q==null)q=r.a(q)
switch(q.x){case"dd":case"dt":case"li":case"p":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":case"body":case"html":continue}s=this.a
p=q.e
t.m.a(B.U)
if(p==null){r=s.c.a
q=r.w
if(q==null)p=null
else{r=r.y
new A.aY(q,r).bf(q,r)
p=new A.ao(q,r,r)
p.aH(q,r,r)}}B.a.n(s.e,new A.aT("expected-closing-tag-but-got-eof",p,B.U))
break}return!1},
a3(a){var s
if(a.gaA(a)==="\x00")return null
s=this.b
s.aD()
s.bR(a.gaA(a),a.a)
s=this.a
if(s.z&&!A.mU(a.gaA(a)))s.z=!1
return null},
aJ(a){var s,r,q,p=this
if(p.c){s=a.gaA(a)
r=p.c=!1
if(B.b.a_(s,"\n")){q=B.a.gp(p.b.c)
if(B.a.G(B.bt,q.x)){r=q.gak(q)
r=r.gan(r)}if(r)s=B.b.aq(s,1)}if(s.length!==0){r=p.b
r.aD()
r.bR(s,a.a)}}else{r=p.b
r.aD()
r.bR(a.gaA(a),a.a)}return null},
kB(a){var s,r,q=this.a
q.F(a.a,"unexpected-start-tag",A.x(["name","body"],t.N,t.X))
s=this.b.c
r=s.length
if(r!==1){if(1>=r)return A.c(s,1)
s=s[1].x!=="body"}else s=!0
if(!s){q.z=!1
a.e.ba(0,new A.jx(this))}},
kD(a){var s,r,q,p,o=this.a
o.F(a.a,"unexpected-start-tag",A.x(["name","frameset"],t.N,t.X))
s=this.b
r=s.c
q=r.length
if(q!==1){if(1>=q)return A.c(r,1)
p=r[1].x!=="body"}else p=!0
if(!p)if(o.z){if(1>=q)return A.c(r,1)
q=r[1].a
if(q!=null){q=q.gak(q)
if(1>=r.length)return A.c(r,1)
B.a.a6(q.a,r[1])}for(;B.a.gp(r).x!=="html";){if(0>=r.length)return A.c(r,-1)
r.pop()}s.O(a)
o.x=o.ghw()}},
fZ(a){var s=this.b
if(s.a1("p","button"))this.bB(new A.I("p",!1))
s.O(a)},
kH(a){var s,r,q,p,o,n,m,l,k,j,i=this.a
i.z=!1
s=a.b
s.toString
s=B.cG.k(0,s)
s.toString
for(r=this.b,q=r.c,p=A.v(q).h("V<1>"),q=new A.V(q,p),q=new A.K(q,q.gm(q),p.h("K<B.E>")),o=t.h2,p=p.h("B.E");q.q();){n=q.d
if(n==null)n=p.a(n)
m=n.x
if(B.a.G(s,m)){l=i.x
if(l===$){l=i.Q
if(l===$){k=new A.bp(i,i.d)
l!==$&&A.C("_initialPhase")
i.Q=k
l=k}l=i.x=l}l.P(new A.I(m,!1))
break}j=n.w
if(B.a.G(B.S,new A.o(j==null?"http://www.w3.org/1999/xhtml":j,m,o))&&!B.a.G(B.bf,m))break}if(r.a1("p","button"))i.gaC().P(new A.I("p",!1))
r.O(a)},
kC(a){var s=this.b,r=this.a
if(s.b2("button")){r.F(a.a,"unexpected-start-tag-implies-end-tag",A.x(["startName","button","endName","button"],t.N,t.X))
this.P(new A.I("button",!1))
return a}else{s.aD()
s.O(a)
r.z=!1}return null},
h3(a){var s=this.b
s.aD()
s.O(a)
s=s.c
if(0>=s.length)return A.c(s,-1)
s.pop()
a.r=!0
this.a.z=!1},
kG(a){var s,r,q,p,o,n=this,m=null,l="action",k=t.N
n.a.F(a.a,"deprecated-tag",A.x(["name","isindex"],k,t.X))
if(n.b.f!=null)return
s=t.K
r=A.aa(m,m,s,k)
q=a.e.k(0,l)
if(q!=null)r.u(0,l,q)
n.L(A.aG("form",r,m,!1))
n.L(A.aG("hr",A.aa(m,m,s,k),m,!1))
n.L(A.aG("label",A.aa(m,m,s,k),m,!1))
p=a.e.k(0,"prompt")
if(p==null)p="This is a searchable index. Enter search keywords: "
n.a3(new A.F(m,p))
o=A.h4(a.e,s,k)
o.a6(0,l)
o.a6(0,"prompt")
o.u(0,"name","isindex")
n.L(A.aG("input",o,m,a.c))
n.P(new A.I("label",!1))
n.L(A.aG("hr",A.aa(m,m,s,k),m,!1))
n.P(new A.I("form",!1))},
bB(a){var s=this,r="unexpected-end-tag",q=s.b
if(!q.a1("p","button")){q=t.N
s.fZ(A.aG("p",A.aa(null,null,t.K,q),null,!1))
s.a.F(a.a,r,A.x(["name","p"],q,t.X))
s.bB(new A.I("p",!1))}else{q.bU("p")
if(B.a.gp(q.c).x!=="p")s.a.F(a.a,r,A.x(["name","p"],t.N,t.X))
s.cD(a)}},
iA(a){var s,r,q,p,o,n,m=this,l=m.b
if(!l.b2("body")){m.a.a2(a.a,"undefined-error")
return}else{l=l.c
if(B.a.gp(l).x==="body")B.a.gp(l)
else for(l=A.n6(l,2,null,t.h),s=l.length,r=0;r<s;++r){q=l[r].x
switch(q){case"dd":case"dt":case"li":case"optgroup":case"option":case"p":case"rp":case"rt":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":case"body":case"html":continue}l=m.a
p=a.a
q=t.m.a(A.x(["gotName","body","expectedName",q],t.N,t.X))
if(p==null){s=l.c.a
o=s.w
if(o==null)p=null
else{s=s.y
new A.aY(o,s).bf(o,s)
p=new A.ao(o,s,s)
p.aH(o,s,s)}}B.a.n(l.e,new A.aT("expected-one-end-tag-but-got-another",p,q))
break}}l=m.a
n=l.k1
if(n===$){n!==$&&A.C("_afterBodyPhase")
n=l.k1=new A.fn(l,l.d)}l.x=n},
f8(a){if(this.b.b2("body")){this.iA(new A.I("body",!1))
return a}return null},
ne(a){var s,r,q,p,o,n,m
for(s=this.b,r=0;r<6;++r)if(s.b2(B.E[r])){q=s.c
p=B.a.gp(q).x
if(p!=null&&B.a.G(B.P,p)){if(0>=q.length)return A.c(q,-1)
q.pop()
s.bU(null)}break}q=s.c
o=B.a.gp(q).x
n=a.b
if(o!=n)this.a.F(a.a,"end-tag-too-early",A.x(["name",n],t.N,t.X))
for(r=0;r<6;++r)if(s.b2(B.E[r])){if(0>=q.length)return A.c(q,-1)
m=q.pop()
for(;!B.a.G(B.E,m.x);){if(0>=q.length)return A.c(q,-1)
m=q.pop()}break}},
iB(b9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7=null,b8="nodes"
for(s=this.b,r=s.d,q=r.a,p=A.z(r).h("aR.E"),o=s.c,n=t.K,m=t.N,l=t.h,k=t.d,j=t.h2,i=this.a,h=t.X,g=t.m,f=i.c.a,i=i.e,e=0;e<8;){++e
d=s.iz(b9.b)
if(d!=null)c=B.a.G(o,d)&&!s.b2(d.x)
else c=!0
if(c){b=b9.a
s=g.a(A.x(["name",b9.b],m,h))
if(b==null){r=f.w
if(r==null)b=b7
else{q=f.y
new A.aY(r,q).bf(r,q)
b=new A.ao(r,q,q)
b.aH(r,q,q)}}B.a.n(i,new A.aT("adoption-agency-1.1",b,s))
return}else if(!B.a.G(o,d)){b=b9.a
s=g.a(A.x(["name",b9.b],m,h))
if(b==null){r=f.w
if(r==null)b=b7
else{p=f.y
new A.aY(r,p).bf(r,p)
b=new A.ao(r,p,p)
b.aH(r,p,p)}}B.a.n(i,new A.aT("adoption-agency-1.2",b,s))
B.a.a6(q,d)
return}c=B.a.gp(o)
if(d==null?c!=null:d!==c){b=b9.a
c=g.a(A.x(["name",b9.b],m,h))
if(b==null){a=f.w
if(a==null)b=b7
else{a0=f.y
new A.aY(a,a0).bf(a,a0)
b=new A.ao(a,a0,a0)
b.aH(a,a0,a0)}}B.a.n(i,new A.aT("adoption-agency-1.3",b,c))}a1=B.a.ah(o,d)
c=A.n6(o,a1,b7,l)
a=c.length
a3=0
while(!0){if(!(a3<c.length)){a2=b7
break}a4=c[a3]
a5=a4.w
if(a5==null)a5="http://www.w3.org/1999/xhtml"
if(B.a.G(B.S,new A.o(a5,a4.x,j))){a2=a4
break}c.length===a||(0,A.e)(c);++a3}if(a2==null){if(0>=o.length)return A.c(o,-1)
a4=o.pop()
for(;a4!==d;){if(0>=o.length)return A.c(o,-1)
a4=o.pop()}B.a.a6(q,a4)
return}c=a1-1
if(!(c>=0&&c<o.length))return A.c(o,c)
a6=o[c]
a7=r.ah(r,d)
a8=B.a.ah(o,a2)
for(a9=a2,b0=0;b0<3;){++b0;--a8
if(!(a8>=0&&a8<o.length))return A.c(o,a8)
b1=o[a8]
if(!r.G(r,b1)){B.a.a6(o,b1)
continue}if(b1===d)break
if(a9===a2)a7=r.ah(r,b1)+1
c=b1.x
b2=new A.U(b1.w,c,A.aa(b7,b7,n,m))
b2.scU(0,A.h4(b1.b,n,m))
b3=b1.dm(b2,!1,l)
B.a.u(q,r.ah(r,b1),p.a(b3))
B.a.u(o,B.a.ah(o,b1),b3)
c=a9.a
if(c!=null){b4=c.c
if(b4===$){a=A.a([],k)
c.c!==$&&A.C(b8)
b4=c.c=new A.ah(c,a)}B.a.a6(b4.a,a9)}b4=b3.c
if(b4===$){c=A.a([],k)
b3.c!==$&&A.C(b8)
b4=b3.c=new A.ah(b3,c)}c=a9.a
if(c!=null){b5=c.c
if(b5===$){a=A.a([],k)
c.c!==$&&A.C(b8)
b5=c.c=new A.ah(c,a)}B.a.a6(b5.a,a9)}a9.a=b4.b
b4.bX(0,a9)
a9=b3}c=a9.a
if(c!=null){b4=c.c
if(b4===$){a=A.a([],k)
c.c!==$&&A.C(b8)
b4=c.c=new A.ah(c,a)}B.a.a6(b4.a,a9)}if(B.a.G(B.Q,a6.x)){b6=s.eh()
c=b6[0]
a=b6[1]
b4=c.c
if(a==null){if(b4===$){a=A.a([],k)
c.c!==$&&A.C(b8)
b4=c.c=new A.ah(c,a)}c=a9.a
if(c!=null){b5=c.c
if(b5===$){a=A.a([],k)
c.c!==$&&A.C(b8)
b5=c.c=new A.ah(c,a)}B.a.a6(b5.a,a9)}a9.a=b4.b
b4.bX(0,a9)}else{if(b4===$){a0=A.a([],k)
c.c!==$&&A.C(b8)
b2=c.c=new A.ah(c,a0)
b5=b2
b4=b5}else b5=b4
if(b5===$){a0=A.a([],k)
c.c!==$&&A.C(b8)
b5=c.c=new A.ah(c,a0)}c=b5.ah(b5,a)
a=a9.a
if(a!=null){b5=a.c
if(b5===$){a0=A.a([],k)
a.c!==$&&A.C(b8)
b5=a.c=new A.ah(a,a0)}B.a.a6(b5.a,a9)}a9.a=b4.b
b4.h6(0,c,a9)}}else{b4=a6.c
if(b4===$){c=A.a([],k)
a6.c!==$&&A.C(b8)
b4=a6.c=new A.ah(a6,c)}c=a9.a
if(c!=null){b5=c.c
if(b5===$){a=A.a([],k)
c.c!==$&&A.C(b8)
b5=c.c=new A.ah(c,a)}B.a.a6(b5.a,a9)}a9.a=b4.b
b4.bX(0,a9)}c=d.x
b2=new A.U(d.w,c,A.aa(b7,b7,n,m))
b2.scU(0,A.h4(d.b,n,m))
c=d.dm(b2,!1,l)
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
b5=a.c=new A.ah(a,a0)}B.a.a6(b5.a,c)}c.a=b4.b
b4.bX(0,c)
B.a.a6(q,d)
B.a.bD(q,A.a4(Math.min(a7,q.length)),p.a(c))
B.a.a6(o,d)
B.a.bD(o,B.a.ah(o,a2)+1,c)}},
ng(a){var s,r,q,p,o,n,m,l,k,j,i,h="unexpected-end-tag"
for(s=this.b,r=s.c,q=A.v(r).h("V<1>"),p=new A.V(r,q),p=new A.K(p,p.gm(p),q.h("K<B.E>")),o=t.h2,q=q.h("B.E");p.q();){n=p.d
if(n==null)n=q.a(n)
m=n.x
l=a.b
if(m==l){k=B.a.gp(r).x
if(k!=l&&B.a.G(B.P,k)){if(0>=r.length)return A.c(r,-1)
r.pop()
s.bU(l)}s=B.a.gp(r).x
q=a.b
if(s!=q){s=this.a
j=a.a
q=t.m.a(A.x(["name",q],t.N,t.X))
if(j==null){p=s.c.a
o=p.w
if(o==null)j=null
else{p=p.y
new A.aY(o,p).bf(o,p)
j=new A.ao(o,p,p)
j.aH(o,p,p)}}B.a.n(s.e,new A.aT(h,j,q))}while(!0){if(0>=r.length)return A.c(r,-1)
if(!!J.T(r.pop(),n))break}break}else{i=n.w
if(B.a.G(B.S,new A.o(i==null?"http://www.w3.org/1999/xhtml":i,m,o))){s=this.a
j=a.a
r=t.m.a(A.x(["name",a.b],t.N,t.X))
if(j==null){q=s.c.a
p=q.w
if(p==null)j=null
else{q=q.y
new A.aY(p,q).bf(p,q)
j=new A.ao(p,q,q)
j.aH(p,q,q)}}B.a.n(s.e,new A.aT(h,j,r))
break}}}}}
A.jx.prototype={
$2(a,b){var s
t.K.a(a)
A.aq(b)
s=this.a.b.c
if(1>=s.length)return A.c(s,1)
s[1].b.e0(a,new A.jw(b))},
$S:21}
A.jw.prototype={
$0(){return this.a},
$S:5}
A.hE.prototype={
L(a){throw A.d(A.aH("Cannot process start stag in text phase"))},
P(a){var s,r,q=this
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
a3(a){this.b.bR(a.gaA(a),a.a)
return null},
aa(){var s=this.b.c,r=B.a.gp(s),q=this.a
q.F(r.e,"expected-named-closing-tag-but-got-eof",A.x(["name",r.x],t.N,t.X))
if(0>=s.length)return A.c(s,-1)
s.pop()
s=q.y
s.toString
q.x=s
return!0}}
A.e3.prototype={
L(a){var s,r,q=this,p=null
switch(a.b){case"html":return q.be(a)
case"caption":q.eZ()
s=q.b
s.d.n(0,p)
s.O(a)
s=q.a
s.x=s.ght()
return p
case"colgroup":q.h_(a)
return p
case"col":q.h_(A.aG("colgroup",A.aa(p,p,t.K,t.N),p,!1))
return a
case"tbody":case"tfoot":case"thead":q.h1(a)
return p
case"td":case"th":case"tr":q.h1(A.aG("tbody",A.aa(p,p,t.K,t.N),p,!1))
return a
case"table":return q.kI(a)
case"style":case"script":return q.a.gbY().L(a)
case"input":s=a.e.k(0,"type")
if(s==null)s=p
else{r=t.E
r=A.ac(new A.H(new A.a8(s),r.h("i(u.E)").a(A.bI()),r.h("H<u.E,i>")),0,p)
s=r}if(s==="hidden"){q.a.a2(a.a,"unexpected-hidden-input-in-table")
s=q.b
s.O(a)
s=s.c
if(0>=s.length)return A.c(s,-1)
s.pop()}else q.h0(a)
return p
case"form":q.a.a2(a.a,"unexpected-form-in-table")
s=q.b
if(s.f==null){s.O(a)
r=s.c
s.siJ(B.a.gp(r))
if(0>=r.length)return A.c(r,-1)
r.pop()}return p
default:q.h0(a)
return p}},
P(a){var s,r=this,q=a.b
switch(q){case"table":r.bQ(a)
return null
case"body":case"caption":case"col":case"colgroup":case"html":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":r.a.F(a.a,"unexpected-end-tag",A.x(["name",q],t.N,t.X))
return null
default:s=r.a
s.F(a.a,"unexpected-end-tag-implies-table-voodoo",A.x(["name",q],t.N,t.X))
q=r.b
q.r=!0
s.ga8().P(a)
q.r=!1
return null}},
eZ(){var s=this.b.c
while(!0){if(!(B.a.gp(s).x!=="table"&&B.a.gp(s).x!=="html"))break
if(0>=s.length)return A.c(s,-1)
s.pop()}},
aa(){var s=B.a.gp(this.b.c)
if(s.x!=="html")this.a.a2(s.e,"eof-in-table")
return!1},
aJ(a){var s=this.a,r=s.gaC()
s.x=s.gdq()
s.gdq().c=r
s.gaC().aJ(a)
return null},
a3(a){var s=this.a,r=s.gaC()
s.x=s.gdq()
s.gdq().c=r
s.gaC().a3(a)
return null},
h_(a){var s
this.eZ()
this.b.O(a)
s=this.a
s.x=s.ghv()},
h1(a){var s
this.eZ()
this.b.O(a)
s=this.a
s.x=s.geJ()},
kI(a){var s=this.a
s.F(a.a,"unexpected-start-tag-implies-end-tag",A.x(["startName","table","endName","table"],t.N,t.X))
s.gaC().P(new A.I("table",!1))
return a},
h0(a){var s,r=this.a
r.F(a.a,u.M,A.x(["name",a.b],t.N,t.X))
s=this.b
s.r=!0
r.ga8().L(a)
s.r=!1},
bQ(a){var s,r=this,q=r.b
if(q.a1("table","table")){q.cd()
q=q.c
s=B.a.gp(q).x
if(s!=="table")r.a.F(a.a,"end-tag-too-early-named",A.x(["gotName","table","expectedName",s],t.N,t.X))
for(;B.a.gp(q).x!=="table";){if(0>=q.length)return A.c(q,-1)
q.pop()}if(0>=q.length)return A.c(q,-1)
q.pop()
r.a.jb()}else r.a.a2(a.a,"undefined-error")}}
A.cW.prototype={
d_(){var s,r,q=this,p=q.d
if(p.length===0)return
s=A.v(p)
r=new A.H(p,s.h("m(1)").a(new A.jy()),s.h("H<1,m>")).aB(0,"")
if(!A.mU(r)){p=q.a.gaI()
s=p.b
s.r=!0
p.a.ga8().a3(new A.F(null,r))
s.r=!1}else if(r.length!==0)q.b.bR(r,null)
q.smL(A.a([],t.ks))},
ca(a){var s
this.d_()
s=this.c
s.toString
this.a.x=s
return a},
aa(){this.d_()
var s=this.c
s.toString
this.a.x=s
return!0},
a3(a){if(a.gaA(a)==="\x00")return null
B.a.n(this.d,a)
return null},
aJ(a){B.a.n(this.d,a)
return null},
L(a){var s
this.d_()
s=this.c
s.toString
this.a.x=s
return a},
P(a){var s
this.d_()
s=this.c
s.toString
this.a.x=s
return a},
smL(a){this.d=t.oX.a(a)}}
A.jy.prototype={
$1(a){t.v.a(a)
return a.gaA(a)},
$S:88}
A.dZ.prototype={
L(a){switch(a.b){case"html":return this.be(a)
case"caption":case"col":case"colgroup":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":return this.kJ(a)
default:return this.a.ga8().L(a)}},
P(a){var s=this,r=a.b
switch(r){case"caption":s.nd(a)
return null
case"table":return s.bQ(a)
case"body":case"col":case"colgroup":case"html":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":s.a.F(a.a,"unexpected-end-tag",A.x(["name",r],t.N,t.X))
return null
default:return s.a.ga8().P(a)}},
aa(){this.a.ga8().aa()
return!1},
a3(a){return this.a.ga8().a3(a)},
kJ(a){var s,r=this.a
r.a2(a.a,"undefined-error")
s=this.b.a1("caption","table")
r.gaC().P(new A.I("caption",!1))
if(s)return a
return null},
nd(a){var s,r=this,q=r.b
if(q.a1("caption","table")){q.cd()
s=q.c
if(B.a.gp(s).x!=="caption")r.a.F(a.a,"expected-one-end-tag-but-got-another",A.x(["gotName","caption","expectedName",B.a.gp(s).x],t.N,t.X))
for(;B.a.gp(s).x!=="caption";){if(0>=s.length)return A.c(s,-1)
s.pop()}if(0>=s.length)return A.c(s,-1)
s.pop()
q.eX()
q=r.a
q.x=q.gaI()}else r.a.a2(a.a,"undefined-error")},
bQ(a){var s,r=this.a
r.a2(a.a,"undefined-error")
s=this.b.a1("caption","table")
r.gaC().P(new A.I("caption",!1))
if(s)return a
return null}}
A.e_.prototype={
L(a){var s,r=this
switch(a.b){case"html":return r.be(a)
case"col":s=r.b
s.O(a)
s=s.c
if(0>=s.length)return A.c(s,-1)
s.pop()
return null
default:s=B.a.gp(r.b.c).x
r.cX(new A.I("colgroup",!1))
return s==="html"?null:a}},
P(a){var s,r=this
switch(a.b){case"colgroup":r.cX(a)
return null
case"col":r.a.F(a.a,"no-end-tag",A.x(["name","col"],t.N,t.X))
return null
default:s=B.a.gp(r.b.c).x
r.cX(new A.I("colgroup",!1))
return s==="html"?null:a}},
aa(){if(B.a.gp(this.b.c).x==="html")return!1
else{this.cX(new A.I("colgroup",!1))
return!0}},
a3(a){var s=B.a.gp(this.b.c).x
this.cX(new A.I("colgroup",!1))
return s==="html"?null:a},
cX(a){var s=this.b.c,r=this.a
if(B.a.gp(s).x==="html")r.a2(a.a,"undefined-error")
else{if(0>=s.length)return A.c(s,-1)
s.pop()
r.x=r.gaI()}}}
A.cs.prototype={
L(a){var s,r=this,q=null,p=a.b
switch(p){case"html":return r.be(a)
case"tr":r.h2(a)
return q
case"td":case"th":s=t.N
r.a.F(a.a,"unexpected-cell-in-table-body",A.x(["name",p],s,t.X))
r.h2(A.aG("tr",A.aa(q,q,t.K,s),q,!1))
return a
case"caption":case"col":case"colgroup":case"tbody":case"tfoot":case"thead":return r.bQ(a)
default:return r.a.gaI().L(a)}},
P(a){var s=this,r=a.b
switch(r){case"tbody":case"tfoot":case"thead":s.dL(a)
return null
case"table":return s.bQ(a)
case"body":case"caption":case"col":case"colgroup":case"html":case"td":case"th":case"tr":s.a.F(a.a,"unexpected-end-tag-in-table-body",A.x(["name",r],t.N,t.X))
return null
default:return s.a.gaI().P(a)}},
eY(){for(var s=this.b.c;!B.a.G(B.bw,B.a.gp(s).x);){if(0>=s.length)return A.c(s,-1)
s.pop()}B.a.gp(s).toString},
aa(){this.a.gaI().aa()
return!1},
aJ(a){return this.a.gaI().aJ(a)},
a3(a){return this.a.gaI().a3(a)},
h2(a){var s
this.eY()
this.b.O(a)
s=this.a
s.x=s.geI()},
dL(a){var s=this.b,r=this.a
if(s.a1(a.b,"table")){this.eY()
s=s.c
if(0>=s.length)return A.c(s,-1)
s.pop()
r.x=r.gaI()}else r.F(a.a,"unexpected-end-tag-in-table-body",A.x(["name",a.b],t.N,t.X))},
bQ(a){var s=this,r="table",q=s.b
if(q.a1("tbody",r)||q.a1("thead",r)||q.a1("tfoot",r)){s.eY()
s.dL(new A.I(B.a.gp(q.c).x,!1))
return a}else s.a.a2(a.a,"undefined-error")
return null}}
A.e1.prototype={
L(a){var s,r,q=this
switch(a.b){case"html":return q.be(a)
case"td":case"th":q.ik()
s=q.b
s.O(a)
r=q.a
r.x=r.ghu()
s.d.n(0,null)
return null
case"caption":case"col":case"colgroup":case"tbody":case"tfoot":case"thead":case"tr":s=q.b.a1("tr","table")
q.dM(new A.I("tr",!1))
return!s?null:a
default:return q.a.gaI().L(a)}},
P(a){var s=this,r=a.b
switch(r){case"tr":s.dM(a)
return null
case"table":r=s.b.a1("tr","table")
s.dM(new A.I("tr",!1))
return!r?null:a
case"tbody":case"tfoot":case"thead":return s.dL(a)
case"body":case"caption":case"col":case"colgroup":case"html":case"td":case"th":s.a.F(a.a,"unexpected-end-tag-in-table-row",A.x(["name",r],t.N,t.X))
return null
default:return s.a.gaI().P(a)}},
ik(){var s,r,q,p,o,n,m,l,k,j,i
for(s=this.b.c,r=this.a,q=t.N,p=t.X,o=t.m,n=r.c.a;!0;){m=B.a.gp(s)
l=m.x
if(l==="tr"||l==="html")break
k=m.e
l=o.a(A.x(["name",B.a.gp(s).x],q,p))
if(k==null){j=n.w
if(j==null)k=null
else{i=n.y
new A.aY(j,i).bf(j,i)
k=new A.ao(j,i,i)
k.aH(j,i,i)}}B.a.n(r.e,new A.aT("unexpected-implied-end-tag-in-table-row",k,l))
if(0>=s.length)return A.c(s,-1)
s.pop()}},
aa(){this.a.gaI().aa()
return!1},
aJ(a){return this.a.gaI().aJ(a)},
a3(a){return this.a.gaI().a3(a)},
dM(a){var s=this.b,r=this.a
if(s.a1("tr","table")){this.ik()
s=s.c
if(0>=s.length)return A.c(s,-1)
s.pop()
r.x=r.geJ()}else r.a2(a.a,"undefined-error")},
dL(a){if(this.b.a1(a.b,"table")){this.dM(new A.I("tr",!1))
return a}else{this.a.a2(a.a,"undefined-error")
return null}}}
A.cV.prototype={
L(a){switch(a.b){case"html":return this.be(a)
case"caption":case"col":case"colgroup":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":return this.kK(a)
default:return this.a.ga8().L(a)}},
P(a){var s=this,r=a.b
switch(r){case"td":case"th":s.fa(a)
return null
case"body":case"caption":case"col":case"colgroup":case"html":s.a.F(a.a,"unexpected-end-tag",A.x(["name",r],t.N,t.X))
return null
case"table":case"tbody":case"tfoot":case"thead":case"tr":return s.nf(a)
default:return s.a.ga8().P(a)}},
il(){var s=this.b
if(s.a1("td","table"))this.fa(new A.I("td",!1))
else if(s.a1("th","table"))this.fa(new A.I("th",!1))},
aa(){this.a.ga8().aa()
return!1},
a3(a){return this.a.ga8().a3(a)},
kK(a){var s=this.b
if(s.a1("td","table")||s.a1("th","table")){this.il()
return a}else{this.a.a2(a.a,"undefined-error")
return null}},
fa(a){var s,r=this,q=r.b,p=q.a1(a.b,"table"),o=a.b
if(p){q.bU(o)
p=q.c
o=B.a.gp(p).x
s=a.b
if(o!=s){r.a.F(a.a,"unexpected-cell-end-tag",A.x(["name",s],t.N,t.X))
r.cD(a)}else{if(0>=p.length)return A.c(p,-1)
p.pop()}q.eX()
q=r.a
q.x=q.geI()}else r.a.F(a.a,"unexpected-end-tag",A.x(["name",o],t.N,t.X))},
nf(a){if(this.b.a1(a.b,"table")){this.il()
return a}else this.a.a2(a.a,"undefined-error")
return null}}
A.e2.prototype={
L(a){var s,r=this,q=null,p=a.b
switch(p){case"html":return r.be(a)
case"option":p=r.b
s=p.c
if(B.a.gp(s).x==="option"){if(0>=s.length)return A.c(s,-1)
s.pop()}p.O(a)
return q
case"optgroup":p=r.b
s=p.c
if(B.a.gp(s).x==="option"){if(0>=s.length)return A.c(s,-1)
s.pop()}if(B.a.gp(s).x==="optgroup"){if(0>=s.length)return A.c(s,-1)
s.pop()}p.O(a)
return q
case"select":r.a.a2(a.a,"unexpected-select-in-select")
r.f9(new A.I("select",!1))
return q
case"input":case"keygen":case"textarea":return r.kF(a)
case"script":return r.a.gbY().L(a)
default:r.a.F(a.a,"unexpected-start-tag-in-select",A.x(["name",p],t.N,t.X))
return q}},
P(a){var s,r,q=this,p=null,o="unexpected-end-tag-in-select",n=a.b
switch(n){case"option":n=q.b.c
if(B.a.gp(n).x==="option"){if(0>=n.length)return A.c(n,-1)
n.pop()}else q.a.F(a.a,o,A.x(["name","option"],t.N,t.X))
return p
case"optgroup":n=q.b.c
if(B.a.gp(n).x==="option"){s=n.length
r=s-2
if(!(r>=0))return A.c(n,r)
r=n[r].x==="optgroup"
s=r}else s=!1
if(s){if(0>=n.length)return A.c(n,-1)
n.pop()}if(B.a.gp(n).x==="optgroup"){if(0>=n.length)return A.c(n,-1)
n.pop()}else q.a.F(a.a,o,A.x(["name","optgroup"],t.N,t.X))
return p
case"select":q.f9(a)
return p
default:q.a.F(a.a,o,A.x(["name",n],t.N,t.X))
return p}},
aa(){var s=B.a.gp(this.b.c)
if(s.x!=="html")this.a.a2(s.e,"eof-in-select")
return!1},
a3(a){if(a.gaA(a)==="\x00")return null
this.b.bR(a.gaA(a),a.a)
return null},
kF(a){var s="select"
this.a.a2(a.a,"unexpected-input-in-select")
if(this.b.a1(s,s)){this.f9(new A.I(s,!1))
return a}return null},
f9(a){var s=this.a
if(this.b.a1("select","select")){this.cD(a)
s.jb()}else s.a2(a.a,"undefined-error")}}
A.fY.prototype={
L(a){var s,r=a.b
switch(r){case"caption":case"table":case"tbody":case"tfoot":case"thead":case"tr":case"td":case"th":s=this.a
s.F(a.a,u.a,A.x(["name",r],t.N,t.X))
s.gbZ().P(new A.I("select",!1))
return a
default:return this.a.gbZ().L(a)}},
P(a){switch(a.b){case"caption":case"table":case"tbody":case"tfoot":case"thead":case"tr":case"td":case"th":return this.bQ(a)
default:return this.a.gbZ().P(a)}},
aa(){this.a.gbZ().aa()
return!1},
a3(a){return this.a.gbZ().a3(a)},
bQ(a){var s=this.a
s.F(a.a,u.r,A.x(["name",a.b],t.N,t.X))
if(this.b.a1(a.b,"table")){s.gbZ().P(new A.I("select",!1))
return a}return null}}
A.fW.prototype={
a3(a){var s
if(a.gaA(a)==="\x00"){a.c="\ufffd"
a.b=null}else{s=this.a
if(s.z&&!A.mU(a.gaA(a)))s.z=!1}return this.l3(a)},
L(a){var s,r,q,p,o,n=this,m=n.b,l=m.c,k=B.a.gp(l)
if(!B.a.G(B.b7,a.b))if(a.b==="font")s=a.e.aj("color")||a.e.aj("face")||a.e.aj("size")
else s=!1
else s=!0
if(s){s=n.a
s.F(a.a,u.G,A.x(["name",a.b],t.N,t.X))
m=m.a
r=t.h
q=t.iA
while(!0){if(B.a.gp(l).w!=m)if(!s.iR(B.a.gp(l))){p=r.a(B.a.gp(l))
p=!B.a.G(B.ab,new A.o(p.w,p.x,q))}else p=!1
else p=!1
if(!p)break
if(0>=l.length)return A.c(l,-1)
l.pop()}return a}else{s=k.w
if(s==="http://www.w3.org/1998/Math/MathML")n.a.i1(a)
else if(s==="http://www.w3.org/2000/svg"){o=B.bB.k(0,a.b)
if(o!=null)a.b=o
n.a.i2(a)}n.a.eR(a)
a.w=s
m.O(a)
if(a.c){if(0>=l.length)return A.c(l,-1)
l.pop()
a.r=!0}return null}},
P(a){var s,r,q,p,o,n,m=this,l=null,k="_initialPhase",j=m.b,i=j.c,h=i.length-1,g=B.a.gp(i),f=g.x
if(f==null)f=l
else{s=t.E
s=A.ac(new A.H(new A.a8(f),s.h("i(u.E)").a(A.bI()),s.h("H<u.E,i>")),0,l)
f=s}s=a.b
if(f!=s)m.a.F(a.a,"unexpected-end-tag",A.x(["name",s],t.N,t.X))
j=j.a
f=t.E
s=f.h("i(u.E)")
f=f.h("H<u.E,i>")
while(!0){if(!!0){r=l
break}c$0:{q=g.x
q=q==null?l:A.ac(new A.H(new A.a8(q),s.a(A.bI()),f),0,l)
if(q==a.b){j=m.a
p=j.x
if(p===$){p=j.Q
if(p===$){o=new A.bp(j,j.d)
p!==$&&A.C(k)
j.Q=o
p=o}p=j.x=p}n=j.cy
if(n===$){f=A.a([],t.ks)
j.cy!==$&&A.C("_inTableTextPhase")
n=j.cy=new A.cW(f,j,j.d)}if(p===n){p=j.x
if(p===$){p=j.Q
if(p===$){o=new A.bp(j,j.d)
p!==$&&A.C(k)
j.Q=o
p=o}p=j.x=p}t.aB.a(p)
p.d_()
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
if(p===$){o=new A.bp(j,j.d)
p!==$&&A.C(k)
j.Q=o
p=o}p=j.x=p}r=p.P(a)
break}}}return r}}
A.fn.prototype={
L(a){var s,r=a.b
if(r==="html")return this.a.ga8().L(a)
s=this.a
s.F(a.a,"unexpected-start-tag-after-body",A.x(["name",r],t.N,t.X))
s.x=s.ga8()
return a},
P(a){var s,r=a.b
if(r==="html"){this.f8(a)
return null}s=this.a
s.F(a.a,"unexpected-end-tag-after-body",A.x(["name",r],t.N,t.X))
s.x=s.ga8()
return a},
aa(){return!1},
ca(a){var s=this.b,r=s.c
if(0>=r.length)return A.c(r,0)
s.cA(a,r[0])
return null},
a3(a){var s=this.a
s.a2(a.a,"unexpected-char-after-body")
s.x=s.ga8()
return a},
f8(a){var s,r,q,p
for(s=this.b.c,r=A.v(s).h("V<1>"),s=new A.V(s,r),s=new A.K(s,s.gm(s),r.h("K<B.E>")),r=r.h("B.E");s.q();){q=s.d
if((q==null?r.a(q):q).x==="html")break}s=this.a
p=s.k4
if(p===$){p!==$&&A.C("_afterAfterBodyPhase")
p=s.k4=new A.fl(s,s.d)}s.x=p}}
A.e0.prototype={
L(a){var s=this,r=a.b
switch(r){case"html":return s.be(a)
case"frameset":s.b.O(a)
return null
case"frame":r=s.b
r.O(a)
r=r.c
if(0>=r.length)return A.c(r,-1)
r.pop()
return null
case"noframes":return s.a.ga8().L(a)
default:s.a.F(a.a,"unexpected-start-tag-in-frameset",A.x(["name",r],t.N,t.X))
return null}},
P(a){var s,r=this,q=a.b
switch(q){case"frameset":q=r.b.c
if(B.a.gp(q).x==="html")r.a.a2(a.a,u.q)
else{if(0>=q.length)return A.c(q,-1)
q.pop()}q=B.a.gp(q).x
if(q!=="frameset"){q=r.a
s=q.k3
if(s===$){s!==$&&A.C("_afterFramesetPhase")
s=q.k3=new A.fo(q,q.d)}q.x=s}return null
default:r.a.F(a.a,"unexpected-end-tag-in-frameset",A.x(["name",q],t.N,t.X))
return null}},
aa(){var s=B.a.gp(this.b.c)
if(s.x!=="html")this.a.a2(s.e,"eof-in-frameset")
return!1},
a3(a){this.a.a2(a.a,"unexpected-char-in-frameset")
return null}}
A.fo.prototype={
L(a){var s=a.b
switch(s){case"html":return this.be(a)
case"noframes":return this.a.gbY().L(a)
default:this.a.F(a.a,"unexpected-start-tag-after-frameset",A.x(["name",s],t.N,t.X))
return null}},
P(a){var s,r=a.b,q=this.a
switch(r){case"html":s=q.ok
if(s===$){s!==$&&A.C("_afterAfterFramesetPhase")
s=q.ok=new A.fm(q,q.d)}q.x=s
return null
default:q.F(a.a,"unexpected-end-tag-after-frameset",A.x(["name",r],t.N,t.X))
return null}},
aa(){return!1},
a3(a){this.a.a2(a.a,"unexpected-char-after-frameset")
return null}}
A.fl.prototype={
L(a){var s,r=a.b
if(r==="html")return this.a.ga8().L(a)
s=this.a
s.F(a.a,"expected-eof-but-got-start-tag",A.x(["name",r],t.N,t.X))
s.x=s.ga8()
return a},
aa(){return!1},
ca(a){var s=this.b,r=s.b
r===$&&A.b("document")
s.cA(a,r)
return null},
aJ(a){return this.a.ga8().aJ(a)},
a3(a){var s=this.a
s.a2(a.a,"expected-eof-but-got-char")
s.x=s.ga8()
return a},
P(a){var s=this.a
s.F(a.a,"expected-eof-but-got-end-tag",A.x(["name",a.b],t.N,t.X))
s.x=s.ga8()
return a}}
A.fm.prototype={
L(a){var s=a.b,r=this.a
switch(s){case"html":return r.ga8().L(a)
case"noframes":return r.gbY().L(a)
default:r.F(a.a,"expected-eof-but-got-start-tag",A.x(["name",s],t.N,t.X))
return null}},
aa(){return!1},
ca(a){var s=this.b,r=s.b
r===$&&A.b("document")
s.cA(a,r)
return null},
aJ(a){return this.a.ga8().aJ(a)},
a3(a){this.a.a2(a.a,"expected-eof-but-got-char")
return null},
P(a){this.a.F(a.a,"expected-eof-but-got-end-tag",A.x(["name",a.b],t.N,t.X))
return null}}
A.aT.prototype={
l(a){var s,r,q=this.b
q.toString
s=B.bA.k(0,this.a)
s.toString
r=q.iU(0,A.tw(s,this.c),null)
return q.a.a==null?"ParserError on "+r:"On "+r},
$ibn:1}
A.kb.prototype={}
A.fL.prototype={
e2(){var s,r,q,p,o=A.mm(t.N),n=this.a.b.k(0,"class")
for(s=(n==null?"":n).split(" "),r=s.length,q=0;q<r;++q){p=J.ni(s[q])
if(p.length!==0)o.n(0,p)}return o}}
A.hY.prototype={
l(a){return this.e2().aB(0," ")},
gI(a){var s=this.e2()
return A.rf(s,s.r,A.z(s).c)},
gm(a){return this.e2().a}}
A.j1.prototype={
sar(a){if(this.b>=this.a.length)throw A.d(A.mB("No more elements"))
this.b=a},
gar(){var s=this.b
if(s>=this.a.length)throw A.d(A.mB("No more elements"))
if(s>=0)return s
else return 0},
lP(a){var s,r,q,p,o=this
t.pi.a(a)
if(a==null)a=A.oR()
s=o.gar()
for(r=o.a,q=r.length;s<q;){if(!(s>=0))return A.c(r,s)
p=r[s]
if(!A.au(a.$1(p))){o.b=s
return p}++s}o.b=s
return null},
hQ(){return this.lP(null)},
lQ(a){var s,r,q,p
t.gS.a(a)
s=this.gar()
for(r=this.a,q=r.length;s<q;){if(!(s>=0))return A.c(r,s)
p=r[s]
if(A.au(a.$1(p))){this.b=s
return p}++s}return null},
hB(a){var s=B.b.aM(this.a,a,this.gar())
if(s>=0){this.b=s+a.length-1
return!0}else throw A.d(A.mB("No more elements"))},
eN(a,b){if(b==null)b=this.a.length
if(b<0)b+=this.a.length
return B.b.A(this.a,a,b)},
lR(a){return this.eN(a,null)}}
A.iT.prototype={
o2(){var s,r,q,p,o,n,m,l
try{p=this.a
p.hB("charset")
p.sar(p.gar()+1)
p.hQ()
o=p.a
n=p.gar()
m=o.length
if(!(n>=0&&n<m))return A.c(o,n)
if(o[n]!=="=")return null
p.sar(p.gar()+1)
p.hQ()
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
p.hB(s)
p=p.eN(r,p.gar())
return p}else{q=p.gar()
try{p.lQ(A.oR())
o=p.eN(q,p.gar())
return o}catch(l){if(A.bk(l) instanceof A.dj){p=p.lR(q)
return p}else throw l}}}catch(l){if(A.bk(l) instanceof A.dj)return null
else throw l}}}
A.dj.prototype={$ibn:1}
A.js.prototype={
bo(a){var s,r,q,p,o,n,m,l,k,j,i=this
i.snl(A.mo(t.N))
s=i.y=0
i.slu(A.a([],t.t))
r=i.f
if(r==null){q=i.a
q.toString
p=i.e
p.toString
r=A.rN(q,p)
i.shM(r)}for(q=r.a,p=q.length,o=t.L,n=!1,m=!1;s<p;++s){l=B.b.E(q,s)
if(n){if(l===10){n=!1
continue}n=!1}o.a(r)
k=s+1
j=k<r.gm(r)&&(r.k(0,s)&64512)===55296&&(r.k(0,k)&64512)===56320
if(!j&&!m)if(A.rY(l)){k=i.r
k.dl(k.$ti.c.a("invalid-codepoint"))
if(55296<=l&&l<=57343)l=65533}if(l===13){n=!0
l=10}B.a.n(i.x,l)
m=j}i.w=A.qN(i.x,i.d)},
ii(a){var s=A.aH("cannot change encoding when parsing a String.")
throw A.d(s)},
B(){var s,r,q=this,p=q.y,o=q.x
if(p>=o.length)return null
p=q.hz(o,p)
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
p=A.b4(o[s])}return p},
o3(){var s,r,q=this,p=q.y,o=q.x
if(p>=o.length)return null
p=q.hz(o,p)
o=q.x
s=q.y
r=o.length
if(p){if(!(s>=0&&s<r))return A.c(o,s)
p=o[s];++s
if(!(s<r))return A.c(o,s)
s=A.ac(A.a([p,o[s]],t.t),0,null)
p=s}else{if(!(s>=0&&s<r))return A.c(o,s)
p=A.b4(o[s])}return p},
hz(a,b){var s,r
t.L.a(a)
s=b+1
r=J.X(a)
return s<r.gm(a)&&(A.a4(r.k(a,b))&64512)===55296&&(A.a4(r.k(a,s))&64512)===56320},
c2(a,b){var s,r,q=this,p=q.y,o=a.length
while(!0){s=q.o3()
if(s!=null)r=A.cj(a,s,0)===b
else r=!1
if(!r)break
q.y=q.y+s.length}return A.ac(B.a.b8(q.x,p,q.y),0,null)},
b9(a){return this.c2(a,!1)},
T(a){if(a!=null)this.y=this.y-a.length},
shM(a){this.f=t.f8.a(a)},
snl(a){this.r=t.f_.a(a)},
slu(a){this.x=t.L.a(a)}}
A.aR.prototype={
gm(a){return this.a.length},
gI(a){var s=this.a
return new J.av(s,s.length,A.v(s).h("av<1>"))},
k(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.c(s,b)
return s[b]},
u(a,b,c){B.a.u(this.a,b,A.z(this).h("aR.E").a(c))},
sm(a,b){B.a.sm(this.a,b)},
n(a,b){B.a.n(this.a,A.z(this).h("aR.E").a(b))},
bD(a,b,c){return B.a.bD(this.a,b,A.z(this).h("aR.E").a(c))},
H(a,b){B.a.H(this.a,A.z(this).h("j<aR.E>").a(b))}}
A.en.prototype={
j4(a,b,c,d){var s,r,q,p,o,n
t.jB.a(d)
for(s=b.gak(b),s=s.gI(s),r=new A.cG(s,t.pl),q=c.b,p=this.gjm(),o=t.h;r.q();){n=o.a(s.gC())
this.a=n
if(B.a.b1(q,p))B.a.n(d,n)
this.j4(0,n,c,d)}},
jn(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=null
t.dT.a(a)
s=i.a
for(r=a.b,q=A.v(r).h("V<1>"),r=new A.V(r,q),r=new A.K(r,r.gm(r),q.h("K<B.E>")),q=q.h("B.E"),p=h,o=!0;r.q();){n=r.d
if(n==null)n=q.a(n)
if(p==null)o=A.io(n.c.R(i))
else{if(p===514){m=n.c
do{l=i.a.a
k=l instanceof A.U?l:h
i.a=k}while(k!=null&&!A.io(m.R(i)))
if(i.a==null)o=!1}else if(p===517){m=n.c
do{k=i.a
k=k.ge_(k)
i.a=k}while(k!=null&&!A.io(m.R(i)))
if(i.a==null)o=!1}p=h}if(!o)break
j=n.b
switch(j){case 515:n=i.a
i.a=n.ge_(n)
break
case 516:l=i.a.a
i.a=l instanceof A.U?l:h
break
case 514:case 517:p=j
break
case 513:break
default:throw A.d(i.hX(a))}if(i.a==null){o=!1
break}}i.a=s
return o},
cR(a){return new A.eA("'"+a.l(0)+"' selector of type "+A.du(a).l(0)+" is not implemented")},
hX(a){return new A.dV("'"+a.l(0)+"' is not a valid selector",null,null)},
oS(a){var s=this,r=a.b
switch(r.gai(r)){case"root":r=s.a
return r.x==="html"&&r.a==null
case"empty":r=s.a
r=r.gak(r)
return r.b1(r,new A.kj())
case"blank":r=s.a
r=r.gak(r)
return r.b1(r,new A.kk())
case"first-child":r=s.a
return r.ge_(r)==null
case"last-child":r=s.a
return r.giW(r)==null
case"only-child":r=s.a
if(r.ge_(r)==null){r=s.a
r=r.giW(r)==null}else r=!1
return r
case"link":return s.a.b.k(0,"href")!=null
case"visited":return!1}if(A.nQ(r.gai(r)))return!1
throw A.d(s.cR(a))},
oU(a){var s=a.b
if(A.nQ(s.gai(s)))return!1
throw A.d(this.cR(a))},
oT(a){return A.L(this.cR(a))},
oR(a){var s,r,q,p,o,n,m=this,l=a.b
switch(l.gai(l)){case"nth-child":s=t.b9.a(a.f).b
l=s.length
if(l===1){if(0>=l)return A.c(s,0)
r=s[0] instanceof A.af}else r=!1
if(r){if(0>=l)return A.c(s,0)
q=t.mH.a(s[0])
p=m.a.a
if(p!=null){l=A.lp(q.c)
if(l>0){r=p.gak(p)
l=r.ah(r,m.a)===l}else l=!1}else l=!1
return l}break
case"lang":l=t.b9.a(a.f)
l=l.a
l.toString
o=A.ac(B.v.b8(l.a.c,l.b,l.c),0,null)
n=A.qH(m.a)
return n!=null&&B.b.a_(n,o)}throw A.d(m.cR(a))},
oQ(a){if(!A.io(t.g9.a(a.b).R(this)))return!1
if(a.d instanceof A.ca)return!0
if(a.giV()==="")return this.a.w==null
throw A.d(this.cR(a))},
oP(a){var s,r,q=a.b,p=this.a.b.k(0,q.gai(q).toLowerCase())
if(p==null)return!1
q=a.d
if(q===535)return!0
s=A.k(a.e)
switch(q){case 28:return p===s
case 530:return B.a.b1(A.a(p.split(" "),t.s),new A.kh(s))
case 531:if(B.b.a_(p,s)){q=p.length
r=s.length
if(q!==r){if(!(r<q))return A.c(p,r)
q=p[r]==="-"}else q=!0}else q=!1
return q
case 532:return B.b.a_(p,s)
case 533:return B.b.bh(p,s)
case 534:return B.b.G(p,s)
default:throw A.d(this.hX(a))}}}
A.kj.prototype={
$1(a){var s
t.J.a(a)
if(!(a instanceof A.U))if(a instanceof A.bQ){s=J.bx(a.w)
a.w=s
s=s.length!==0}else s=!1
else s=!0
return!s},
$S:22}
A.kk.prototype={
$1(a){var s
t.J.a(a)
if(!(a instanceof A.U))if(a instanceof A.bQ){s=J.bx(a.w)
a.w=s
s=new A.hs(s).b1(0,new A.ki())}else s=!1
else s=!0
return!s},
$S:22}
A.ki.prototype={
$1(a){return!A.n2(A.a4(a))},
$S:11}
A.kh.prototype={
$1(a){A.aq(a)
return a.length!==0&&a===this.a},
$S:6}
A.b_.prototype={}
A.bP.prototype={}
A.c6.prototype={
gc8(a){return 2},
saA(a,b){this.e=t.oP.a(b)}}
A.I.prototype={
gc8(a){return 3}}
A.b6.prototype={
gaA(a){var s=this,r=s.c
if(r==null){r=s.c=J.bx(s.b)
s.b=null}return r}}
A.l.prototype={
gc8(a){return 6}}
A.F.prototype={
gc8(a){return 1}}
A.cD.prototype={
gc8(a){return 0}}
A.cQ.prototype={
gc8(a){return 4}}
A.dJ.prototype={
gc8(a){return 5}}
A.ev.prototype={}
A.lK.prototype={
$0(){var s,r,q=A.bc(t.N,t.I)
for(s=B.T.gbl(),s=s.gI(s);s.q();){r=s.gC()
if(0>=r.length)return A.c(r,0)
J.m8(q.e0(r[0],new A.lJ()),r)}return q},
$S:35}
A.lJ.prototype={
$0(){return A.a([],t.s)},
$S:36}
A.dY.prototype={
gkL(a){var s=this.x
s===$&&A.b("state")
return s},
gC(){var s=this.at
s.toString
return s},
dr(a){var s=this.Q
s.toString
B.a.gp(s).b=this.ay.l(0)},
cm(a){},
c_(a){this.dr(a)},
bL(a){var s,r=this
A.aq(a)
if(r.Q==null)r.seA(0,A.a([],t.kG))
s=r.ax
s.a=""
s.a=a
r.ay.a=""
s=r.Q
s.toString
B.a.n(s,new A.ev())},
q(){var s,r=this,q=r.a,p=r.r
while(!0){s=q.r
if(!(s.b===s.c&&p.b===p.c))break
if(!A.au(r.kM(0))){r.at=null
return!1}}if(!s.gan(s)){q=q.r.j6()
r.at=new A.l(null,null,q)}else r.slV(p.j6())
return!0},
bo(a){var s=this
s.z=0
s.r.bO(0)
s.w=null
s.y.a=""
s.seA(0,null)
s.sez(null)
s.si(t.c.a(s.gD()))},
j(a){var s=this.r
s.dl(s.$ti.c.a(a))},
mY(a){var s,r,q,p,o,n,m,l,k=this,j=null,i="illegal-codepoint-for-numeric-entity"
if(a){s=A.tr()
r=16}else{s=A.tq()
r=10}q=A.a([],t.D)
p=k.a
o=p.B()
while(!0){if(!(A.au(s.$1(o))&&o!=null))break
B.a.n(q,o)
o=p.B()}n=A.ch(B.a.aU(q),r)
m=B.bC.k(0,n)
if(m!=null){l=A.x(["charAsInt",n],t.N,t.X)
k.j(new A.l(l,j,i))}else if(55296<=n&&n<=57343||n>1114111){l=A.x(["charAsInt",n],t.N,t.X)
k.j(new A.l(l,j,i))
m="\ufffd"}else{if(!(1<=n&&n<=8))if(!(14<=n&&n<=31))if(!(127<=n&&n<=159))l=64976<=n&&n<=65007||B.a.G(B.bc,n)
else l=!0
else l=!0
else l=!0
if(l){l=A.x(["charAsInt",n],t.N,t.X)
k.j(new A.l(l,j,i))}m=A.ac(A.a([n],t.t),0,j)}if(o!==";"){k.j(new A.l(j,j,"numeric-entity-without-semicolon"))
p.T(o)}return m},
dH(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.a,g=A.a([h.B()],t.D)
if(0>=g.length)return A.c(g,0)
if(!A.a5(g[0])){if(0>=g.length)return A.c(g,0)
s=g[0]
s=s==="<"||s==="&"||s==null||a===s}else s=!0
if(s){if(0>=g.length)return A.c(g,0)
h.T(g[0])
r="&"}else{if(0>=g.length)return A.c(g,0)
s=g[0]
if(s==="#"){B.a.n(g,h.B())
if(B.a.gp(g)==="x"||B.a.gp(g)==="X"){B.a.n(g,h.B())
q=!0}else q=!1
if(!(q&&A.p4(B.a.gp(g))))s=!q&&A.lX(B.a.gp(g))
else s=!0
if(s){h.T(B.a.gp(g))
r=j.mY(q)}else{j.j(new A.l(i,i,"expected-numeric-entity"))
if(0>=g.length)return A.c(g,-1)
h.T(g.pop())
r="&"+B.a.aU(g)}}else{p=$.pw()
s.toString
o=p.k(0,s)
if(o==null)o=B.r
for(;B.a.gp(g)!=null;){s=J.pF(o,new A.ju(B.a.aU(g)))
o=A.h(s,!1,s.$ti.h("j.E"))
if(o.length===0)break
B.a.n(g,h.B())}m=g.length-1
while(!0){if(!(m>1)){n=i
break}l=B.a.aU(B.a.b8(g,0,m))
if(B.T.aj(l)){n=l
break}--m}if(n!=null){s=n.length
p=s-1
if(!(p>=0))return A.c(n,p)
s=n[p]!==";"
if(s)j.j(new A.l(i,i,"named-entity-without-semicolon"))
if(s)if(b){if(!(m>=0&&m<g.length))return A.c(g,m)
s=g[m]
if(!(A.aL(s)||A.lX(s))){if(!(m<g.length))return A.c(g,m)
s=g[m]==="="}else s=!0}else s=!1
else s=!1
if(s){if(0>=g.length)return A.c(g,-1)
h.T(g.pop())
r="&"+B.a.aU(g)}else{r=B.T.k(0,n)
if(0>=g.length)return A.c(g,-1)
h.T(g.pop())
r=A.k(r)+B.a.aU(A.n6(g,m,i,t.jv))}}else{j.j(new A.l(i,i,"expected-named-entity"))
if(0>=g.length)return A.c(g,-1)
h.T(g.pop())
r="&"+B.a.aU(g)}}}if(b)j.ay.a+=r
else{if(A.a5(r))k=new A.cD(i,r)
else k=new A.F(i,r)
j.j(k)}},
ir(){return this.dH(null,!1)},
b3(){var s,r,q,p,o,n,m,l=this,k=null,j=l.w
j.toString
if(j instanceof A.bP){s=j.b
if(s==null)s=k
else{r=t.E
r=A.ac(new A.H(new A.a8(s),r.h("i(u.E)").a(A.bI()),r.h("H<u.E,i>")),0,k)
s=r}j.b=s
if(j instanceof A.I){if(l.Q!=null)l.j(new A.l(k,k,"attributes-in-end-tag"))
if(j.c)l.j(new A.l(k,k,"this-closing-flag-on-end-tag"))
q=j}else if(j instanceof A.c6){j.saA(0,A.aa(k,k,t.K,t.N))
s=l.Q
if(s!=null)for(r=s.length,p=0;p<s.length;s.length===r||(0,A.e)(s),++p){o=s[p]
n=j.e
m=o.a
m.toString
n.e0(m,new A.jv(o))}q=j}else q=j
l.seA(0,k)
l.sez(k)}else q=j
l.j(q)
l.si(t.c.a(l.gD()))},
n1(){var s,r=this,q=null,p=r.a,o=p.B()
if(o==="&")r.si(t.c.a(r.gnh()))
else if(o==="<")r.si(t.c.a(r.goC()))
else if(o==="\x00"){r.j(new A.l(q,q,"invalid-codepoint"))
r.j(new A.F(q,"\x00"))}else if(o==null)return!1
else if(A.a5(o)){p=p.c2(" \n\r\t\f",!0)
r.j(new A.cD(q,o+p))}else{s=p.b9("&<\x00")
r.j(new A.F(q,o+s))}return!0},
ni(){this.ir()
this.si(t.c.a(this.gD()))
return!0},
oq(){var s,r=this,q=null,p=r.a,o=p.B()
if(o==="&")r.si(t.c.a(r.gmJ()))
else if(o==="<")r.si(t.c.a(r.goo()))
else if(o==null)return!1
else if(o==="\x00"){r.j(new A.l(q,q,"invalid-codepoint"))
r.j(new A.F(q,"\ufffd"))}else if(A.a5(o)){p=p.c2(" \n\r\t\f",!0)
r.j(new A.cD(q,o+p))}else{s=p.b9("&<")
r.j(new A.F(q,o+s))}return!0},
mK(){this.ir()
this.si(t.c.a(this.gcG()))
return!0},
oi(){var s,r=this,q=null,p=r.a,o=p.B()
if(o==="<")r.si(t.c.a(r.gog()))
else if(o==="\x00"){r.j(new A.l(q,q,"invalid-codepoint"))
r.j(new A.F(q,"\ufffd"))}else if(o==null)return!1
else{s=p.b9("<\x00")
r.j(new A.F(q,o+s))}return!0},
ke(){var s,r=this,q=null,p=r.a,o=p.B()
if(o==="<")r.si(t.c.a(r.gkc()))
else if(o==="\x00"){r.j(new A.l(q,q,"invalid-codepoint"))
r.j(new A.F(q,"\ufffd"))}else if(o==null)return!1
else{s=p.b9("<\x00")
r.j(new A.F(q,o+s))}return!0},
o5(){var s=this,r=null,q=s.a,p=q.B()
if(p==null)return!1
else if(p==="\x00"){s.j(new A.l(r,r,"invalid-codepoint"))
s.j(new A.F(r,"\ufffd"))}else{q=q.b9("\x00")
s.j(new A.F(r,p+q))}return!0},
oD(){var s=this,r=null,q=s.a,p=q.B()
if(p==="!")s.si(t.c.a(s.gnW()))
else if(p==="/")s.si(t.c.a(s.gmM()))
else if(A.aL(p)){s.w=A.aG(p,r,r,!1)
s.si(t.c.a(s.gje()))}else if(p===">"){s.j(new A.l(r,r,"expected-tag-name-but-got-right-bracket"))
s.j(new A.F(r,"<>"))
s.si(t.c.a(s.gD()))}else if(p==="?"){s.j(new A.l(r,r,"expected-tag-name-but-got-question-mark"))
q.T(p)
s.si(t.c.a(s.geW()))}else{s.j(new A.l(r,r,"expected-tag-name"))
s.j(new A.F(r,"<"))
q.T(p)
s.si(t.c.a(s.gD()))}return!0},
mN(){var s,r=this,q=null,p=r.a,o=p.B()
if(A.aL(o)){r.w=new A.I(o,!1)
r.si(t.c.a(r.gje()))}else if(o===">"){r.j(new A.l(q,q,u.g))
r.si(t.c.a(r.gD()))}else if(o==null){r.j(new A.l(q,q,"expected-closing-tag-but-got-eof"))
r.j(new A.F(q,"</"))
r.si(t.c.a(r.gD()))}else{s=A.x(["data",o],t.N,t.X)
r.j(new A.l(s,q,"expected-closing-tag-but-got-char"))
p.T(o)
r.si(t.c.a(r.geW()))}return!0},
oB(){var s,r=this,q=null,p=r.a.B()
if(A.a5(p))r.si(t.c.a(r.gbA()))
else if(p===">")r.b3()
else if(p==null){r.j(new A.l(q,q,"eof-in-tag-name"))
r.si(t.c.a(r.gD()))}else if(p==="/")r.si(t.c.a(r.gbv()))
else if(p==="\x00"){r.j(new A.l(q,q,"invalid-codepoint"))
s=t.fn.a(r.w)
s.b=A.k(s.b)+"\ufffd"}else{s=t.fn.a(r.w)
s.b=A.k(s.b)+p}return!0},
op(){var s=this,r=s.a,q=r.B()
if(q==="/"){s.y.a=""
s.si(t.c.a(s.gom()))}else{s.j(new A.F(null,"<"))
r.T(q)
s.si(t.c.a(s.gcG()))}return!0},
on(){var s=this,r=s.a,q=r.B()
if(A.aL(q)){s.y.a+=A.k(q)
s.si(t.c.a(s.goj()))}else{s.j(new A.F(null,"</"))
r.T(q)
s.si(t.c.a(s.gcG()))}return!0},
dw(){var s=this.w
return s instanceof A.bP&&s.b.toLowerCase()===this.y.l(0).toLowerCase()},
ol(){var s,r=this,q=r.dw(),p=r.a,o=p.B()
if(A.a5(o)&&q){r.w=new A.I(r.y.l(0),!1)
r.si(t.c.a(r.gbA()))}else if(o==="/"&&q){r.w=new A.I(r.y.l(0),!1)
r.si(t.c.a(r.gbv()))}else if(o===">"&&q){r.w=new A.I(r.y.l(0),!1)
r.b3()
r.si(t.c.a(r.gD()))}else{s=r.y
if(A.aL(o))s.a+=A.k(o)
else{s=s.l(0)
r.j(new A.F(null,"</"+s))
p.T(o)
r.si(t.c.a(r.gcG()))}}return!0},
oh(){var s=this,r=s.a,q=r.B()
if(q==="/"){s.y.a=""
s.si(t.c.a(s.goe()))}else{s.j(new A.F(null,"<"))
r.T(q)
s.si(t.c.a(s.ge1()))}return!0},
of(){var s=this,r=s.a,q=r.B()
if(A.aL(q)){s.y.a+=A.k(q)
s.si(t.c.a(s.goc()))}else{s.j(new A.F(null,"</"))
r.T(q)
s.si(t.c.a(s.ge1()))}return!0},
od(){var s,r=this,q=r.dw(),p=r.a,o=p.B()
if(A.a5(o)&&q){r.w=new A.I(r.y.l(0),!1)
r.si(t.c.a(r.gbA()))}else if(o==="/"&&q){r.w=new A.I(r.y.l(0),!1)
r.si(t.c.a(r.gbv()))}else if(o===">"&&q){r.w=new A.I(r.y.l(0),!1)
r.b3()
r.si(t.c.a(r.gD()))}else{s=r.y
if(A.aL(o))s.a+=A.k(o)
else{s=s.l(0)
r.j(new A.F(null,"</"+s))
p.T(o)
r.si(t.c.a(r.ge1()))}}return!0},
kd(){var s=this,r=s.a,q=r.B()
if(q==="/"){s.y.a=""
s.si(t.c.a(s.gjU()))}else if(q==="!"){s.j(new A.F(null,"<!"))
s.si(t.c.a(s.gjY()))}else{s.j(new A.F(null,"<"))
r.T(q)
s.si(t.c.a(s.gbI()))}return!0},
jV(){var s=this,r=s.a,q=r.B()
if(A.aL(q)){s.y.a+=A.k(q)
s.si(t.c.a(s.gjS()))}else{s.j(new A.F(null,"</"))
r.T(q)
s.si(t.c.a(s.gbI()))}return!0},
jT(){var s,r=this,q=r.dw(),p=r.a,o=p.B()
if(A.a5(o)&&q){r.w=new A.I(r.y.l(0),!1)
r.si(t.c.a(r.gbA()))}else if(o==="/"&&q){r.w=new A.I(r.y.l(0),!1)
r.si(t.c.a(r.gbv()))}else if(o===">"&&q){r.w=new A.I(r.y.l(0),!1)
r.b3()
r.si(t.c.a(r.gD()))}else{s=r.y
if(A.aL(o))s.a+=A.k(o)
else{s=s.l(0)
r.j(new A.F(null,"</"+s))
p.T(o)
r.si(t.c.a(r.gbI()))}}return!0},
jZ(){var s=this,r=s.a,q=r.B()
if(q==="-"){s.j(new A.F(null,"-"))
s.si(t.c.a(s.gjW()))}else{r.T(q)
s.si(t.c.a(s.gbI()))}return!0},
jX(){var s=this,r=s.a,q=r.B()
if(q==="-"){s.j(new A.F(null,"-"))
s.si(t.c.a(s.gfS()))}else{r.T(q)
s.si(t.c.a(s.gbI()))}return!0},
kb(){var s,r=this,q=null,p=r.a,o=p.B()
if(o==="-"){r.j(new A.F(q,"-"))
r.si(t.c.a(r.gk0()))}else if(o==="<")r.si(t.c.a(r.gek()))
else if(o==="\x00"){r.j(new A.l(q,q,"invalid-codepoint"))
r.j(new A.F(q,"\ufffd"))}else if(o==null)r.si(t.c.a(r.gD()))
else{s=p.b9("<-\x00")
r.j(new A.F(q,o+s))}return!0},
k5(){var s=this,r=null,q=s.a.B()
if(q==="-"){s.j(new A.F(r,"-"))
s.si(t.c.a(s.gfS()))}else if(q==="<")s.si(t.c.a(s.gek()))
else if(q==="\x00"){s.j(new A.l(r,r,"invalid-codepoint"))
s.j(new A.F(r,"\ufffd"))
s.si(t.c.a(s.gbc()))}else if(q==null)s.si(t.c.a(s.gD()))
else{s.j(new A.F(r,q))
s.si(t.c.a(s.gbc()))}return!0},
k_(){var s=this,r=null,q=s.a.B()
if(q==="-")s.j(new A.F(r,"-"))
else if(q==="<")s.si(t.c.a(s.gek()))
else if(q===">"){s.j(new A.F(r,">"))
s.si(t.c.a(s.gbI()))}else if(q==="\x00"){s.j(new A.l(r,r,"invalid-codepoint"))
s.j(new A.F(r,"\ufffd"))
s.si(t.c.a(s.gbc()))}else if(q==null)s.si(t.c.a(s.gD()))
else{s.j(new A.F(r,q))
s.si(t.c.a(s.gbc()))}return!0},
ka(){var s,r=this,q=r.a,p=q.B()
if(p==="/"){r.y.a=""
r.si(t.c.a(r.gk8()))}else if(A.aL(p)){q=A.k(p)
r.j(new A.F(null,"<"+q))
s=r.y
s.a=""
s.a=q
r.si(t.c.a(r.gjK()))}else{r.j(new A.F(null,"<"))
q.T(p)
r.si(t.c.a(r.gbc()))}return!0},
k9(){var s=this,r=s.a,q=r.B()
if(A.aL(q)){r=s.y
r.a=""
r.a=A.k(q)
s.si(t.c.a(s.gk6()))}else{s.j(new A.F(null,"</"))
r.T(q)
s.si(t.c.a(s.gbc()))}return!0},
k7(){var s,r=this,q=r.dw(),p=r.a,o=p.B()
if(A.a5(o)&&q){r.w=new A.I(r.y.l(0),!1)
r.si(t.c.a(r.gbA()))}else if(o==="/"&&q){r.w=new A.I(r.y.l(0),!1)
r.si(t.c.a(r.gbv()))}else if(o===">"&&q){r.w=new A.I(r.y.l(0),!1)
r.b3()
r.si(t.c.a(r.gD()))}else{s=r.y
if(A.aL(o))s.a+=A.k(o)
else{s=s.l(0)
r.j(new A.F(null,"</"+s))
p.T(o)
r.si(t.c.a(r.gbc()))}}return!0},
jL(){var s=this,r=s.a,q=r.B()
if(A.a5(q)||q==="/"||q===">"){s.j(new A.F(q==null?new A.a3(""):null,q))
r=t.c
if(s.y.l(0).toLowerCase()==="script")s.si(r.a(s.gbH()))
else s.si(r.a(s.gbc()))}else if(A.aL(q)){s.j(new A.F(q==null?new A.a3(""):null,q))
s.y.a+=A.k(q)}else{r.T(q)
s.si(t.c.a(s.gbc()))}return!0},
jR(){var s=this,r=null,q=s.a.B()
if(q==="-"){s.j(new A.F(r,"-"))
s.si(t.c.a(s.gjO()))}else if(q==="<"){s.j(new A.F(r,"<"))
s.si(t.c.a(s.gej()))}else if(q==="\x00"){s.j(new A.l(r,r,"invalid-codepoint"))
s.j(new A.F(r,"\ufffd"))}else if(q==null){s.j(new A.l(r,r,"eof-in-script-in-script"))
s.si(t.c.a(s.gD()))}else s.j(new A.F(r,q))
return!0},
jP(){var s=this,r=null,q=s.a.B()
if(q==="-"){s.j(new A.F(r,"-"))
s.si(t.c.a(s.gjM()))}else if(q==="<"){s.j(new A.F(r,"<"))
s.si(t.c.a(s.gej()))}else if(q==="\x00"){s.j(new A.l(r,r,"invalid-codepoint"))
s.j(new A.F(r,"\ufffd"))
s.si(t.c.a(s.gbH()))}else if(q==null){s.j(new A.l(r,r,"eof-in-script-in-script"))
s.si(t.c.a(s.gD()))}else{s.j(new A.F(r,q))
s.si(t.c.a(s.gbH()))}return!0},
jN(){var s=this,r=null,q=s.a.B()
if(q==="-")s.j(new A.F(r,"-"))
else if(q==="<"){s.j(new A.F(r,"<"))
s.si(t.c.a(s.gej()))}else if(q===">"){s.j(new A.F(r,">"))
s.si(t.c.a(s.gbI()))}else if(q==="\x00"){s.j(new A.l(r,r,"invalid-codepoint"))
s.j(new A.F(r,"\ufffd"))
s.si(t.c.a(s.gbH()))}else if(q==null){s.j(new A.l(r,r,"eof-in-script-in-script"))
s.si(t.c.a(s.gD()))}else{s.j(new A.F(r,q))
s.si(t.c.a(s.gbH()))}return!0},
jQ(){var s=this,r=s.a,q=r.B()
if(q==="/"){s.j(new A.F(null,"/"))
s.y.a=""
s.si(t.c.a(s.gjI()))}else{r.T(q)
s.si(t.c.a(s.gbH()))}return!0},
jJ(){var s=this,r=s.a,q=r.B()
if(A.a5(q)||q==="/"||q===">"){s.j(new A.F(q==null?new A.a3(""):null,q))
r=t.c
if(s.y.l(0).toLowerCase()==="script")s.si(r.a(s.gbc()))
else s.si(r.a(s.gbH()))}else if(A.aL(q)){s.j(new A.F(q==null?new A.a3(""):null,q))
s.y.a+=A.k(q)}else{r.T(q)
s.si(t.c.a(s.gbH()))}return!0},
mu(){var s=this,r=null,q=s.a,p=q.B()
if(A.a5(p))q.c2(" \n\r\t\f",!0)
else{q=p==null
if(!q&&A.aL(p)){s.bL(p)
s.si(t.c.a(s.gbN()))}else if(p===">")s.b3()
else if(p==="/")s.si(t.c.a(s.gbv()))
else if(q){s.j(new A.l(r,r,"expected-attribute-name-but-got-eof"))
s.si(t.c.a(s.gD()))}else if(B.b.G("'\"=<",p)){s.j(new A.l(r,r,"invalid-character-in-attribute-name"))
s.bL(p)
s.si(t.c.a(s.gbN()))}else if(p==="\x00"){s.j(new A.l(r,r,"invalid-codepoint"))
s.bL("\ufffd")
s.si(t.c.a(s.gbN()))}else{s.bL(p)
s.si(t.c.a(s.gbN()))}}return!0},
mn(){var s,r,q,p,o=this,n=null,m=o.a,l=m.B()
if(l==="="){o.si(t.c.a(o.gic()))
s=!0
r=!1}else if(A.aL(l)){q=o.ax
q.a+=A.k(l)
q.a+=m.c2("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",!0)
s=!1
r=!1}else if(l===">"){s=!0
r=!0}else{if(A.a5(l)){o.si(t.c.a(o.gm8()))
s=!0}else if(l==="/"){o.si(t.c.a(o.gbv()))
s=!0}else if(l==="\x00"){o.j(new A.l(n,n,"invalid-codepoint"))
o.ax.a+="\ufffd"
s=!1}else if(l==null){o.j(new A.l(n,n,"eof-in-attribute-name"))
o.si(t.c.a(o.gD()))
s=!0}else{if(B.b.G("'\"<",l)){o.j(new A.l(n,n,"invalid-character-in-attribute-name"))
o.ax.a+=l}else o.ax.a+=l
s=!1}r=!1}if(s){o.dr(-1)
m=o.ax.a
q=t.E
p=A.ac(new A.H(new A.a8(m.charCodeAt(0)==0?m:m),q.h("i(u.E)").a(A.bI()),q.h("H<u.E,i>")),0,n)
m=o.Q
m.toString
B.a.gp(m).a=p
if(o.as==null)o.sez(A.nC(t.N))
if(o.as.G(0,p))o.j(new A.l(n,n,"duplicate-attribute"))
o.as.n(0,p)
if(r)o.b3()}return!0},
m9(){var s=this,r=null,q=s.a,p=q.B()
if(A.a5(p))q.c2(" \n\r\t\f",!0)
else if(p==="=")s.si(t.c.a(s.gic()))
else if(p===">")s.b3()
else{q=p==null
if(!q&&A.aL(p)){s.bL(p)
s.si(t.c.a(s.gbN()))}else if(p==="/")s.si(t.c.a(s.gbv()))
else if(p==="\x00"){s.j(new A.l(r,r,"invalid-codepoint"))
s.bL("\ufffd")
s.si(t.c.a(s.gbN()))}else if(q){s.j(new A.l(r,r,"expected-end-of-tag-but-got-eof"))
s.si(t.c.a(s.gD()))}else if(B.b.G("'\"<",p)){s.j(new A.l(r,r,"invalid-character-after-attribute-name"))
s.bL(p)
s.si(t.c.a(s.gbN()))}else{s.bL(p)
s.si(t.c.a(s.gbN()))}}return!0},
mv(){var s=this,r=null,q=s.a,p=q.B()
if(A.a5(p))q.c2(" \n\r\t\f",!0)
else if(p==='"'){s.cm(0)
s.si(t.c.a(s.gmo()))}else if(p==="&"){s.si(t.c.a(s.gdE()))
q.T(p)
s.cm(0)}else if(p==="'"){s.cm(0)
s.si(t.c.a(s.gmq()))}else if(p===">"){s.j(new A.l(r,r,u.A))
s.b3()}else if(p==="\x00"){s.j(new A.l(r,r,"invalid-codepoint"))
s.cm(-1)
s.ay.a+="\ufffd"
s.si(t.c.a(s.gdE()))}else if(p==null){s.j(new A.l(r,r,"expected-attribute-value-but-got-eof"))
s.si(t.c.a(s.gD()))}else if(B.b.G("=<`",p)){s.j(new A.l(r,r,"equals-in-unquoted-attribute-value"))
s.cm(-1)
s.ay.a+=p
s.si(t.c.a(s.gdE()))}else{s.cm(-1)
s.ay.a+=p
s.si(t.c.a(s.gdE()))}return!0},
mp(){var s,r=this,q=null,p=r.a,o=p.B()
if(o==='"'){r.c_(-1)
r.dr(0)
r.si(t.c.a(r.gi3()))}else if(o==="&")r.dH('"',!0)
else if(o==="\x00"){r.j(new A.l(q,q,"invalid-codepoint"))
r.ay.a+="\ufffd"}else if(o==null){r.j(new A.l(q,q,"eof-in-attribute-value-double-quote"))
r.c_(-1)
r.si(t.c.a(r.gD()))}else{s=r.ay
s.a+=o
s.a+=p.b9('"&')}return!0},
mr(){var s,r=this,q=null,p=r.a,o=p.B()
if(o==="'"){r.c_(-1)
r.dr(0)
r.si(t.c.a(r.gi3()))}else if(o==="&")r.dH("'",!0)
else if(o==="\x00"){r.j(new A.l(q,q,"invalid-codepoint"))
r.ay.a+="\ufffd"}else if(o==null){r.j(new A.l(q,q,"eof-in-attribute-value-single-quote"))
r.c_(-1)
r.si(t.c.a(r.gD()))}else{s=r.ay
s.a+=o
s.a+=p.b9("'&")}return!0},
ms(){var s,r=this,q=null,p=r.a,o=p.B()
if(A.a5(o)){r.c_(-1)
r.si(t.c.a(r.gbA()))}else if(o==="&")r.dH(">",!0)
else if(o===">"){r.c_(-1)
r.b3()}else if(o==null){r.j(new A.l(q,q,"eof-in-attribute-value-no-quotes"))
r.c_(-1)
r.si(t.c.a(r.gD()))}else if(B.b.G("\"'=<`",o)){r.j(new A.l(q,q,u.V))
r.ay.a+=o}else if(o==="\x00"){r.j(new A.l(q,q,"invalid-codepoint"))
r.ay.a+="\ufffd"}else{s=r.ay
s.a+=o
s.a+=p.b9("&>\"'=<` \n\r\t\f")}return!0},
ma(){var s=this,r=null,q=s.a,p=q.B()
if(A.a5(p))s.si(t.c.a(s.gbA()))
else if(p===">")s.b3()
else if(p==="/")s.si(t.c.a(s.gbv()))
else if(p==null){s.j(new A.l(r,r,"unexpected-EOF-after-attribute-value"))
q.T(p)
s.si(t.c.a(s.gD()))}else{s.j(new A.l(r,r,u.H))
q.T(p)
s.si(t.c.a(s.gbA()))}return!0},
kf(){var s=this,r=null,q=s.a,p=q.B()
if(p===">"){t.fn.a(s.w).c=!0
s.b3()}else if(p==null){s.j(new A.l(r,r,"unexpected-EOF-after-solidus-in-tag"))
q.T(p)
s.si(t.c.a(s.gD()))}else{s.j(new A.l(r,r,u.B))
q.T(p)
s.si(t.c.a(s.gbA()))}return!0},
mD(){var s=this,r=s.a,q=r.b9(">")
q=A.bj(q,"\x00","\ufffd")
s.j(new A.cQ(null,q))
r.B()
s.si(t.c.a(s.gD()))
return!0},
nX(){var s,r,q,p,o,n=this,m=null,l=n.a,k=A.a([l.B()],t.D)
if(B.a.gp(k)==="-"){B.a.n(k,l.B())
if(B.a.gp(k)==="-"){n.w=new A.cQ(new A.a3(""),m)
n.si(t.c.a(n.gmV()))
return!0}}else if(B.a.gp(k)==="d"||B.a.gp(k)==="D"){r=0
while(!0){if(!(r<6)){s=!0
break}q=B.bk[r]
p=l.B()
B.a.n(k,p)
if(p!=null)o=!A.cj(q,p,0)
else o=!0
if(o){s=!1
break}++r}if(s){n.w=new A.dJ(!0)
n.si(t.c.a(n.gn8()))
return!0}}else{if(B.a.gp(k)==="["){o=n.f
if(o!=null){o=o.d.c
o=o.length!==0&&B.a.gp(o).w!=n.f.d.a}else o=!1}else o=!1
if(o){r=0
while(!0){if(!(r<6)){s=!0
break}q=B.bu[r]
B.a.n(k,l.B())
if(B.a.gp(k)!==q){s=!1
break}++r}if(s){n.si(t.c.a(n.gmH()))
return!0}}}n.j(new A.l(m,m,"expected-dashes-or-doctype"))
for(;o=k.length,o!==0;){if(0>=o)return A.c(k,-1)
o=k.pop()
if(o!=null)l.y=l.y-o.length}n.si(t.c.a(n.geW()))
return!0},
mW(){var s,r=this,q=null,p=r.a.B()
if(p==="-")r.si(t.c.a(r.gmT()))
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
mU(){var s,r,q=this,p=null,o=q.a.B()
if(o==="-")q.si(t.c.a(q.gio()))
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
mX(){var s,r=this,q=null,p=r.a,o=p.B()
if(o==="-")r.si(t.c.a(r.gim()))
else if(o==="\x00"){r.j(new A.l(q,q,"invalid-codepoint"))
t.v.a(r.w).b.a+="\ufffd"}else if(o==null){r.j(new A.l(q,q,"eof-in-comment"))
p=r.w
p.toString
r.j(p)
r.si(t.c.a(r.gD()))}else{s=t.v.a(r.w)
s.b.a+=o
p=p.b9("-\x00")
s.b.a+=p}return!0},
mR(){var s,r,q=this,p=null,o=q.a.B()
if(o==="-")q.si(t.c.a(q.gio()))
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
mS(){var s,r,q=this,p=null,o=q.a.B()
if(o===">"){s=q.w
s.toString
q.j(s)
q.si(t.c.a(q.gD()))}else if(o==="\x00"){q.j(new A.l(p,p,"invalid-codepoint"))
t.v.a(q.w).b.a+="--\ufffd"
q.si(t.c.a(q.gbP()))}else if(o==="!"){q.j(new A.l(p,p,u.d))
q.si(t.c.a(q.gmP()))}else if(o==="-"){q.j(new A.l(p,p,u.K))
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
mQ(){var s,r,q=this,p=null,o=q.a.B()
if(o===">"){s=q.w
s.toString
q.j(s)
q.si(t.c.a(q.gD()))}else if(o==="-"){t.v.a(q.w).b.a+="--!"
q.si(t.c.a(q.gim()))}else if(o==="\x00"){q.j(new A.l(p,p,"invalid-codepoint"))
t.v.a(q.w).b.a+="--!\ufffd"
q.si(t.c.a(q.gbP()))}else if(o==null){q.j(new A.l(p,p,"eof-in-comment-end-bang-state"))
s=q.w
s.toString
q.j(s)
q.si(t.c.a(q.gD()))}else{s=t.v.a(q.w).b
r=s.a+="--!"
s.a=r+o
q.si(t.c.a(q.gbP()))}return!0},
n9(){var s=this,r=null,q=s.a,p=q.B()
if(A.a5(p))s.si(t.c.a(s.gie()))
else if(p==null){s.j(new A.l(r,r,"expected-doctype-name-but-got-eof"))
q=t.i.a(s.w)
q.e=!1
s.j(q)
s.si(t.c.a(s.gD()))}else{s.j(new A.l(r,r,"need-space-after-doctype"))
q.T(p)
s.si(t.c.a(s.gie()))}return!0},
mw(){var s,r=this,q=null,p=r.a.B()
if(A.a5(p))return!0
else if(p===">"){r.j(new A.l(q,q,u.f))
s=t.i.a(r.w)
s.e=!1
r.j(s)
r.si(t.c.a(r.gD()))}else if(p==="\x00"){r.j(new A.l(q,q,"invalid-codepoint"))
t.i.a(r.w).d="\ufffd"
r.si(t.c.a(r.gf5()))}else if(p==null){r.j(new A.l(q,q,"expected-doctype-name-but-got-eof"))
s=t.i.a(r.w)
s.e=!1
r.j(s)
r.si(t.c.a(r.gD()))}else{t.i.a(r.w).d=p
r.si(t.c.a(r.gf5()))}return!0},
n3(){var s,r,q,p=this,o=null,n=p.a.B()
if(A.a5(n)){s=t.i.a(p.w)
r=s.d
if(r==null)r=o
else{q=t.E
q=A.ac(new A.H(new A.a8(r),q.h("i(u.E)").a(A.bI()),q.h("H<u.E,i>")),0,o)
r=q}s.d=r
p.si(t.c.a(p.gmb()))}else if(n===">"){s=t.i.a(p.w)
r=s.d
if(r==null)r=o
else{q=t.E
q=A.ac(new A.H(new A.a8(r),q.h("i(u.E)").a(A.bI()),q.h("H<u.E,i>")),0,o)
r=q}s.d=r
r=p.w
r.toString
p.j(r)
p.si(t.c.a(p.gD()))}else if(n==="\x00"){p.j(new A.l(o,o,"invalid-codepoint"))
s=t.i.a(p.w)
s.d=A.k(s.d)+"\ufffd"
p.si(t.c.a(p.gf5()))}else if(n==null){p.j(new A.l(o,o,"eof-in-doctype-name"))
s=t.i.a(p.w)
s.e=!1
r=s.d
if(r==null)r=o
else{q=t.E
q=A.ac(new A.H(new A.a8(r),q.h("i(u.E)").a(A.bI()),q.h("H<u.E,i>")),0,o)
r=q}s.d=r
r=p.w
r.toString
p.j(r)
p.si(t.c.a(p.gD()))}else{s=t.i.a(p.w)
s.d=A.k(s.d)+n}return!0},
mc(){var s,r,q,p,o=this,n=null,m=o.a,l=m.B()
if(A.a5(l))return!0
else if(l===">"){m=o.w
m.toString
o.j(m)
o.si(t.c.a(o.gD()))}else if(l==null){t.i.a(o.w).e=!1
m.T(l)
o.j(new A.l(n,n,"eof-in-doctype"))
m=o.w
m.toString
o.j(m)
o.si(t.c.a(o.gD()))}else{if(l==="p"||l==="P"){r=0
while(!0){if(!(r<5)){s=!0
break}q=B.bb[r]
l=m.B()
if(l!=null)p=!A.cj(q,l,0)
else p=!0
if(p){s=!1
break}++r}if(s){o.si(t.c.a(o.gme()))
return!0}}else if(l==="s"||l==="S"){r=0
while(!0){if(!(r<5)){s=!0
break}q=B.bo[r]
l=m.B()
if(l!=null)p=!A.cj(q,l,0)
else p=!0
if(p){s=!1
break}++r}if(s){o.si(t.c.a(o.gmh()))
return!0}}m.T(l)
m=A.x(["data",l],t.N,t.X)
o.j(new A.l(m,n,u.S))
t.i.a(o.w).e=!1
o.si(t.c.a(o.gcr()))}return!0},
mf(){var s=this,r=null,q=s.a,p=q.B()
if(A.a5(p))s.si(t.c.a(s.geT()))
else if(p==="'"||p==='"'){s.j(new A.l(r,r,"unexpected-char-in-doctype"))
q.T(p)
s.si(t.c.a(s.geT()))}else if(p==null){s.j(new A.l(r,r,"eof-in-doctype"))
q=t.i.a(s.w)
q.e=!1
s.j(q)
s.si(t.c.a(s.gD()))}else{q.T(p)
s.si(t.c.a(s.geT()))}return!0},
mx(){var s,r=this,q=null,p=r.a.B()
if(A.a5(p))return!0
else if(p==='"'){t.i.a(r.w).b=""
r.si(t.c.a(r.gn4()))}else if(p==="'"){t.i.a(r.w).b=""
r.si(t.c.a(r.gn6()))}else if(p===">"){r.j(new A.l(q,q,"unexpected-end-of-doctype"))
s=t.i.a(r.w)
s.e=!1
r.j(s)
r.si(t.c.a(r.gD()))}else if(p==null){r.j(new A.l(q,q,"eof-in-doctype"))
s=t.i.a(r.w)
s.e=!1
r.j(s)
r.si(t.c.a(r.gD()))}else{r.j(new A.l(q,q,"unexpected-char-in-doctype"))
t.i.a(r.w).e=!1
r.si(t.c.a(r.gcr()))}return!0},
n5(){var s,r=this,q=null,p=r.a.B()
if(p==='"')r.si(t.c.a(r.gi4()))
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
n7(){var s,r=this,q=null,p=r.a.B()
if(p==="'")r.si(t.c.a(r.gi4()))
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
md(){var s,r=this,q=null,p="unexpected-char-in-doctype",o=r.a.B()
if(A.a5(o))r.si(t.c.a(r.gmz()))
else if(o===">"){s=r.w
s.toString
r.j(s)
r.si(t.c.a(r.gD()))}else if(o==='"'){r.j(new A.l(q,q,p))
t.i.a(r.w).c=""
r.si(t.c.a(r.gf6()))}else if(o==="'"){r.j(new A.l(q,q,p))
t.i.a(r.w).c=""
r.si(t.c.a(r.gf7()))}else if(o==null){r.j(new A.l(q,q,"eof-in-doctype"))
s=t.i.a(r.w)
s.e=!1
r.j(s)
r.si(t.c.a(r.gD()))}else{r.j(new A.l(q,q,p))
t.i.a(r.w).e=!1
r.si(t.c.a(r.gcr()))}return!0},
mA(){var s,r=this,q=null,p=r.a.B()
if(A.a5(p))return!0
else if(p===">"){s=r.w
s.toString
r.j(s)
r.si(t.c.a(r.gD()))}else if(p==='"'){t.i.a(r.w).c=""
r.si(t.c.a(r.gf6()))}else if(p==="'"){t.i.a(r.w).c=""
r.si(t.c.a(r.gf7()))}else if(p==null){r.j(new A.l(q,q,"eof-in-doctype"))
s=t.i.a(r.w)
s.e=!1
r.j(s)
r.si(t.c.a(r.gD()))}else{r.j(new A.l(q,q,"unexpected-char-in-doctype"))
t.i.a(r.w).e=!1
r.si(t.c.a(r.gcr()))}return!0},
mi(){var s=this,r=null,q=s.a,p=q.B()
if(A.a5(p))s.si(t.c.a(s.geU()))
else if(p==="'"||p==='"'){s.j(new A.l(r,r,"unexpected-char-in-doctype"))
q.T(p)
s.si(t.c.a(s.geU()))}else if(p==null){s.j(new A.l(r,r,"eof-in-doctype"))
q=t.i.a(s.w)
q.e=!1
s.j(q)
s.si(t.c.a(s.gD()))}else{q.T(p)
s.si(t.c.a(s.geU()))}return!0},
my(){var s,r=this,q=null,p="unexpected-char-in-doctype",o=r.a.B()
if(A.a5(o))return!0
else if(o==='"'){t.i.a(r.w).c=""
r.si(t.c.a(r.gf6()))}else if(o==="'"){t.i.a(r.w).c=""
r.si(t.c.a(r.gf7()))}else if(o===">"){r.j(new A.l(q,q,p))
s=t.i.a(r.w)
s.e=!1
r.j(s)
r.si(t.c.a(r.gD()))}else if(o==null){r.j(new A.l(q,q,"eof-in-doctype"))
s=t.i.a(r.w)
s.e=!1
r.j(s)
r.si(t.c.a(r.gD()))}else{r.j(new A.l(q,q,p))
t.i.a(r.w).e=!1
r.si(t.c.a(r.gcr()))}return!0},
na(){var s,r=this,q=null,p=r.a.B()
if(p==='"')r.si(t.c.a(r.gi5()))
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
nb(){var s,r=this,q=null,p=r.a.B()
if(p==="'")r.si(t.c.a(r.gi5()))
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
mg(){var s,r=this,q=null,p=r.a.B()
if(A.a5(p))return!0
else if(p===">"){s=r.w
s.toString
r.j(s)
r.si(t.c.a(r.gD()))}else if(p==null){r.j(new A.l(q,q,"eof-in-doctype"))
s=t.i.a(r.w)
s.e=!1
r.j(s)
r.si(t.c.a(r.gD()))}else{r.j(new A.l(q,q,"unexpected-char-in-doctype"))
r.si(t.c.a(r.gcr()))}return!0},
mE(){var s=this,r=s.a,q=r.B()
if(q===">"){r=s.w
r.toString
s.j(r)
s.si(t.c.a(s.gD()))}else if(q==null){r.T(q)
r=s.w
r.toString
s.j(r)
s.si(t.c.a(s.gD()))}return!0},
mI(){var s,r,q,p=this,o=A.a([],t.s)
for(s=p.a,r=0;!0;){q=s.B()
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
break}r=0}}if(o.length!==0){s=B.a.aU(o)
p.j(new A.F(null,s))}p.si(t.c.a(p.gD()))
return!0},
si(a){this.x=t.c.a(a)},
seA(a,b){this.Q=t.jq.a(b)},
sez(a){this.as=t.oA.a(a)},
slV(a){this.at=t.nU.a(a)},
$iS:1,
kM(a){return this.gkL(this).$0()}}
A.ju.prototype={
$1(a){return B.b.a_(A.aq(a),this.a)},
$S:6}
A.jv.prototype={
$0(){var s=this.a.b
s===$&&A.b("value")
return s},
$S:5}
A.fk.prototype={
n(a,b){var s,r,q,p,o,n,m,l,k,j=this,i="http://www.w3.org/1999/xhtml"
t.mV.a(b)
if(b!=null)for(s=A.z(j).h("V<u.E>"),r=new A.V(j,s),r=new A.K(r,r.gm(r),s.h("K<B.E>")),q=b.x,p=b.w,s=s.h("B.E"),o=0;r.q();){n=r.d
if(n==null)n=s.a(n)
if(n==null)break
m=n.w
if(m==null)m=i
l=n.x
k=p==null?i:p
if(k===m&&q==l&&A.t7(n.b,b.b))++o
if(o===3){B.a.a6(j.a,n)
break}}j.bX(0,b)}}
A.ku.prototype={
bo(a){var s=this
B.a.bO(s.c)
s.d.sm(0,0)
s.f=s.e=null
s.r=!1
s.b=A.nt()},
a1(a,b){var s,r,q,p,o,n,m,l,k,j,i,h="We should never reach this point",g="http://www.w3.org/1999/xhtml",f=a instanceof A.ag
if(b!=null)switch(b){case"button":s=B.O
r=B.b6
q=!1
break
case"list":s=B.O
r=B.bd
q=!1
break
case"table":s=B.bz
r=B.R
q=!1
break
case"select":s=B.bv
r=B.R
q=!0
break
default:throw A.d(A.aH(h))}else{s=B.O
r=B.R
q=!1}for(p=this.c,o=A.v(p).h("V<1>"),p=new A.V(p,o),p=new A.K(p,p.gm(p),o.h("K<B.E>")),n=t.h2,m=!f,o=o.h("B.E");p.q();){l=p.d
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
b2(a){return this.a1(a,null)},
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
p=s[q]}for(r=A.z(g).h("aR.E"),o=t.K,n=t.N;!0;){++q
if(!(q>=0&&q<s.length))return A.c(s,q)
p=s[q]
m=p.x
l=p.w
k=A.h4(p.b,o,n)
j=new A.c6(k,l,m,!1)
j.a=p.e
i=h.O(j)
B.a.u(s,q,r.a(i))
if(g.gm(g)===0)A.L(A.am())
if(i===g.k(0,g.gm(g)-1))break}},
eX(){var s=this.d,r=s.d6(s)
while(!0){if(!(!s.gan(s)&&r!=null))break
r=s.d6(s)}},
iz(a){var s,r,q
for(s=this.d,r=A.z(s).h("V<u.E>"),s=new A.V(s,r),s=new A.K(s,s.gm(s),r.h("K<B.E>")),r=r.h("B.E");s.q();){q=s.d
if(q==null)q=r.a(q)
if(q==null)break
else if(q.x==a)return q}return null},
cA(a,b){var s=b.gak(b),r=A.nr(a.gaA(a))
r.e=a.a
s.n(0,r)},
iu(a,b){var s,r=b.b,q=b.w
if(q==null)q=this.a
this.b===$&&A.b("document")
s=A.md(r,q===""?null:q)
s.scU(0,b.e)
s.e=b.a
return s},
O(a){if(this.r)return this.nN(a)
return this.iL(a)},
iL(a){var s,r,q=a.b,p=a.w
if(p==null)p=this.a
this.b===$&&A.b("document")
s=A.md(q,p===""?null:p)
s.scU(0,a.e)
s.e=a.a
r=this.c
J.pA(B.a.gp(r)).n(0,s)
B.a.n(r,s)
return s},
nN(a){var s,r,q=this,p=q.iu(0,a),o=q.c
if(!B.a.G(B.Q,B.a.gp(o).x))return q.iL(a)
else{s=q.eh()
r=s[1]
if(r==null){r=s[0]
r.gak(r).n(0,p)}else s[0].nM(0,p,r)
B.a.n(o,p)}return p},
bR(a,b){var s,r=this.c,q=B.a.gp(r)
if(this.r)r=!B.a.G(B.Q,B.a.gp(r).x)
else r=!0
if(r)A.nY(q,a,b,null)
else{s=this.eh()
r=s[0]
r.toString
A.nY(r,a,b,t.mV.a(s[1]))}},
eh(){var s,r,q,p,o=this.c,n=A.v(o).h("V<1>"),m=new A.V(o,n)
m=new A.K(m,m.gm(m),n.h("K<B.E>"))
n=n.h("B.E")
while(!0){if(!m.q()){s=null
break}r=m.d
s=r==null?n.a(r):r
if(s.x==="table")break}if(s!=null){q=s.a
if(q!=null)p=s
else{n=B.a.ah(o,s)-1
if(!(n>=0&&n<o.length))return A.c(o,n)
q=o[n]
p=null}}else{if(0>=o.length)return A.c(o,0)
q=o[0]
p=null}return A.a([q,p],t.hg)},
bU(a){var s=this.c,r=B.a.gp(s).x
if(r!=a&&B.a.G(B.P,r)){if(0>=s.length)return A.c(s,-1)
s.pop()
this.bU(a)}},
cd(){return this.bU(null)},
snI(a){this.e=t.e1.a(a)},
siJ(a){this.f=t.mV.a(a)}}
A.o.prototype={
ga0(a){return 37*J.aE(this.a)+J.aE(this.b)},
W(a,b){if(b==null)return!1
return b instanceof A.o&&b.a==this.a&&b.b==this.b}}
A.lM.prototype={
$2(a,b){var s,r,q,p,o,n,m,l,k,j=new A.a3(""),i="%("+A.aq(a)+")"
for(s=this.a,r=i.length,q=J.bi(b),p=0,o="";n=s.a,m=B.b.aM(n,i,p),m>=0;){j.a=o+B.b.A(n,p,m)
m+=r
l=m
while(!0){o=s.a
if(!(l<o.length))return A.c(o,l)
if(!A.lX(o[l]))break;++l}if(l>m){k=A.ch(B.b.A(s.a,m,l),null)
m=l}else k=0
o=s.a
if(!(m<o.length))return A.c(o,m)
o=o[m]
switch(o){case"s":o=j.a+=A.k(b)
break
case"d":o=j.a+=A.p8(q.l(b),k)
break
case"x":o=j.a+=A.p8(B.d.oJ(A.a4(b),16),k)
break
default:throw A.d(A.R("formatStr does not support format character "+o))}p=m+1}r=j.a=o+B.b.A(n,p,n.length)
s.a=r.charCodeAt(0)==0?r:r},
$S:38}
A.iP.prototype={
iC(a){var s,r,q,p
t.a.a(a)
s=new A.iQ()
r=A.a([],t.r)
for(q=a.length,p=0;p<a.length;a.length===q||(0,A.e)(a),++p)B.a.H(r,s.$1(a[p]))
return A.u0(r,t.j)},
j8(a){var s,r,q,p,o="renderer"
for(s=this.iC(t.a.a(a)),r=A.v(s).h("V<1>"),s=new A.V(s,r),s=new A.K(s,s.gm(s),r.h("K<B.E>")),r=r.h("B.E");s.q();){q=s.d
if(q==null)q=r.a(q)
p=this.r
if(q instanceof A.P){p===$&&A.b("display")
p=p.a
p===$&&A.b(o)
p.ot(q)}else{p===$&&A.b("display")
p.a===$&&A.b(o)}}},
jf(a,b){t.y.a(b)
return!B.a.ct(b,new A.iR())?A.a([B.e],t.l):b}}
A.iQ.prototype={
$1(a){return a.bV()},
$S:39}
A.iR.prototype={
$1(a){t.V.a(a)
return isFinite(a.a)&&isFinite(a.b)&&isFinite(a.c)},
$S:23}
A.dx.prototype={
ih(a){var s
this.b=a
s=this.d
B.a4.soV(s,1280)
B.a4.sbj(s,720)},
dD(a){return a},
eb(a,b){var s,r,q=this.b
q===$&&A.b("camera")
s=q.c
r=A.iu(a,0,1280,-s/2,s/2)
q=q.d
return new A.f(r,A.iu(b,720,0,-q/2,q/2),0).K(0,B.e)}}
A.fj.prototype={
dY(){var s=0,r=A.f9(t.W),q,p=this,o,n,m
var $async$dY=A.fb(function(a,b){if(a===1)return A.f4(b,r)
while(true)switch(s){case 0:m=window
m.toString
s=3
return A.cJ(B.dY.gmk(m),$async$dY)
case 3:o=b
m=p.f
if(m===0){p.f=o
m=o}n=o-m
p.f=m+n
q=n/1000
s=1
break
case 1:return A.f5(q,r)}})
return A.f6($async$dY,r)},
ee(a){var s,r,q,p
t.n8.a(a)
s=this.d.getBoundingClientRect()
r=s.left
r.toString
q=s.right
q.toString
this.b===$&&A.b("camera")
p=A.iu(a.a,r,q,0,1280)
q=s.top
q.toString
r=s.bottom
r.toString
return new A.f(p,A.iu(a.b,q,r,0,720),0)},
eV(){var s=this,r=s.d,q=t.eX,p=q.h("~(1)?"),o=p.a(new A.iy(s))
t.jE.a(null)
q=q.c
B.a.H(s.r,A.a([A.kY(r,"mousemove",o,!1,q),A.kY(r,"mousedown",p.a(new A.iz(s)),!1,q),A.kY(r,"mouseup",p.a(new A.iA(s)),!1,q)],t.dw))},
oK(){var s,r,q
for(s=this.r,r=s.length,q=0;q<s.length;s.length===r||(0,A.e)(s),++q)s[q].mG()}}
A.iy.prototype={
$1(a){var s,r,q,p
t.gD.a(a)
s=this.a
r=s.Q
s.as=new A.f(r.a,r.b,r.c)
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.ee(new A.cB(r,q,t.n8))
q=s.eb(p.a,p.b)
s.Q=q
q.M(0,s.as)
q=s.Q
$.dw().dK(new A.ee(q,B.C,"MouseMovedEvent"))
if(s.w){r=s.y=s.Q
s.x.M(0,r)
$.dw().dK(new A.c0(r,B.z,"MouseDraggedEvent"))}},
$S:12}
A.iz.prototype={
$1(a){var s,r,q,p,o
t.gD.a(a)
s=this.a
r=s.Q
s.as=new A.f(r.a,r.b,r.c)
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.ee(new A.cB(r,q,t.n8))
s.Q=s.eb(p.a,p.b)
q=a.button
q.toString
s.z=A.mr(q)
q=s.Q
$.dw().dK(new A.c1(q,B.x,"MousePressedEvent"))
s.w=!0
q=s.Q
r=q.a
o=q.b
q=q.c
s.x=new A.f(r,o,q)
s.y=new A.f(r,o,q)},
$S:12}
A.iA.prototype={
$1(a){var s,r,q,p
t.gD.a(a)
s=this.a
r=s.Q
s.as=new A.f(r.a,r.b,r.c)
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.ee(new A.cB(r,q,t.n8))
s.Q=s.eb(p.a,p.b)
q=a.button
q.toString
s.z=A.mr(q)
q=s.Q
$.dw().dK(new A.c2(q,B.y,"MouseReleasedEvent"))
s.w=!1},
$S:12}
A.fA.prototype={}
A.d2.prototype={
t(){return A.ms(this)},
m7(){var s,r,q,p=this,o=t.b1,n=A.a([],o),m=p.dO
m.toString
s=p.iF
s=A.mV(p.aZ+-1*s/2,m,s).aW(0)
m=s.length
r=p.c6
q=0
for(;q<s.length;s.length===m||(0,A.e)(s),++q)n.push(p.fM(s[q],r))
p.soH(n)
o=A.a([],o)
for(n=p.iG,m=n.length,r*=p.iH,q=0;q<n.length;n.length===m||(0,A.e)(n),++q)o.push(p.fM(n[q],r))
p.smB(o)
o=p.fc
o.toString
o=A.h(o,!0,t.j)
n=p.fd
n.toString
B.a.H(o,n)
p.aX(t.a.a(o))},
fM(a,b){var s,r=this,q=B.m.v(0,b),p=A.nA(0,B.c,B.t.v(0,b),null,q)
p.fA(0,r.aw().M(0,r.aF()).cT())
p.bn(r.fp(a))
p.aK(r.fI())
p.fU(J.Y(r.bs(),0))
q=J.ix(r.bt(!1))
s=r.w
p.kq(q,s)
return p},
fp(a){var s=this,r=A.iu(a,s.c5,s.aZ,0,1)
return A.lT(s.aF(),s.aw(),r,t.V)},
iZ(a){var s,r=this,q=r.aF(),p=r.aw(),o=p.M(0,q),n=o.b6(0,Math.sqrt(o.b4()))
o=n.ix(a.M(0,q))
s=n.ix(p.M(0,q))
return A.lT(r.c5,r.aZ,o/s,t.W)},
soH(a){this.fc=t.gv.a(a)},
smB(a){this.fd=t.gv.a(a)}}
A.k2.prototype={
$1(a){return t.f.a(a).t()},
$S:24}
A.k3.prototype={
$1(a){return t.f.a(a).t()},
$S:24}
A.fI.prototype={
ec(a,b,c){var s,r,q
t.f3.a(a)
s=A.q1(B.c,B.bh,1e-8,a,0.01,b,c)
r=t.ew.a(new A.iX(this))
q=s.z
s.fQ(q)
s.l_(B.e,B.e,r)
s.fQ(1/q)
return s}}
A.iX.prototype={
$1(a){return this.a.cs(a)},
$S:4}
A.dD.prototype={
it(b8,b9,c0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=B.a.b5(A.a([c0,this.iE,B.aR],t.iX),new A.iO()),b7=b6.a
if(b7==null)b7=B.a8
s=b6.e
if(s==null)s=1
r=b6.f
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
a=A.aD(b5,0,B.c,b5,0)
b=new A.d2(b8,b9,s,r!==!1,q,p,o,n,m===!0,l,k,j,i,h,g,f!==!1,c,b!==!1,e,d,b5,b5,0,b5,B.j,B.n,0.35,B.k,a,b5,b5,4,0,!1,0.01,!1,0.000001,4,b5,b5,b5,B.c,$,b5,$,$,$)
b.af(B.c,b5,b5)
b.aK(b7)
d=Math.max(e,d)
b.fx=d
b.aZ=b.aZ+d/2
b.a4=B.j.v(0,s).v(0,b8)
b7=B.j.v(0,s).v(0,b.aZ)
b.a9=b7
b.cF(b.a4,b7)
b.aQ(b.fp(j).v(0,-1))
if(b.dO==null)b.dO=p*B.h.dF(b8/p)
a0=b.fx
a1=b.fI()
a2=A.bE(a)
b7=a2.a
b7=b7==null?b5:J.fh(b7)
if(b7!==!1)a2=a2.oW(a1.t())
b7=a2.b
b7=b7==null?b5:J.fh(b7)
if(b7!==!1)a2=a2.oX(a1.t())
a3=A.tQ(3.141592653589793,B.k).aW(0)
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
r=a7*0
q=a4*0
a9=r+a6-q
b0=r+q-a5
q=-a4
b1=q-b7-s
s=-a6
b7=-a5
q=A.tp(3,new A.f(a8*a7+b1*q+a9*s-b0*b7,a9*a7+b1*b7+b0*q-a8*s,b0*a7+b1*s+a8*b7-a9*q))
b2=new A.dA(4,0,!1,0.01,!1,0.000001,4,b5,b5,b5,B.c,$,b5,$,$,$)
b2.af(B.c,b5,b5)
b2.dk(q,B.c)
b2.fA(0,3.141592653589793)
b2.eq(a0,!0)
b2.dg(a0,!0)
b2.iT(b)
b2.kw(a2)
b3=b.aw()
b4=b.jz()
b7=b4.M(0,b3).cT()
s=b2.r
s===$&&A.b("points")
b2.fA(0,-b7-B.a.gZ(s).M(0,b2.cC(0.5)).cT()-3.141592653589793)
b2.aQ(b3.M(0,B.a.gZ(b2.r)))
b.ou(b2,B.dU)
b.k1=b2
b.aX(t.a.a(A.a([b2],t.r)))
b.m7()
b7=b6.cy
b.kp(b7==null?4:b7)
return b},
cs(a){var s,r,q,p,o,n,m,l,k="getStart",j=this.c4
j===$&&A.b("xAxis")
s=j.fp(0)
r=new A.f(s.a,s.b,s.c)
j=A.a([a.a,a.b,a.c],t.n)
q=this.fb
q===$&&A.b("axes")
q=q.d
q===$&&A.b("submobjects")
q=new A.aB(A.a([j,q],t.bo),t.c2)
q=q.gI(q)
j=t.f7
for(;q.q();){p=q.b
if(p==null)p=A.L(A.aH("No element"))
if(1>=p.length)return A.c(p,1)
o=j.a(p[1])
n=o.c5
m=(A.bH(p[0])-n)/(o.aZ-n)+0
n=o.id
if(n!=null){n.ap(k)
n=n.r
n===$&&A.b("points")
n=B.a.gZ(n)}else n=o.ew()
l=o.k1
if(l!=null){l.ap(k)
l=l.r
l===$&&A.b("points")
l=B.a.gZ(l)}else l=o.ev()
r=r.K(0,n.v(0,1-m).K(0,l.v(0,m)).M(0,s))}return r},
fu(a){var s,r=this.c4
r===$&&A.b("xAxis")
s=r.iZ(a)
r=this.cu
r===$&&A.b("yAxis")
return new A.f(s,r.iZ(a),0)},
t(){return A.pL(this)}}
A.iO.prototype={
$2(a,b){var s=t.fy
return s.a(a).fl(s.a(b))},
$S:44}
A.aM.prototype={
fl(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.a
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
return A.cN(b,a.cx,e,n,r,h,j,a.x,i,m,l,k,a.Q,o,d,p,q,f,g,s)}}
A.ei.prototype={
jF(a){var s=this.fx
if(s>0)return s
return Math.pow(10,(a===0?0:B.h.nE(Math.min(0,Math.log(Math.abs(a))/2.302585092994046)))-2)},
bG(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=d.k1,b=A.v(c)
b=A.h(new A.ai(c,b.h("y(1)").a(new A.k4(d)),b.h("ai<1>")),!0,t.W)
c=t.n
s=A.a([d.fy,d.go],c)
for(r=b.length,q=d.id,p=0;p<r;++p){o=b[p]
if(typeof o!=="number")return o.M()
B.a.H(s,A.a([o-q,o+q],c))}B.a.kA(s)
for(c=A.J(s.length/2|0,0,1),b=c.length,r=t.l,q=t.y,n=t.V,p=0;p<c.length;c.length===b||(0,A.e)(c),++p){m=c[p]
if(typeof m!=="number")return m.K()
l=B.a.k(s,m+0)
k=B.a.k(s,m+1)
j=A.mV(k,l,d.jF(l)).aW(0)
if(!J.T(B.a.gp(j),k))B.a.n(j,k)
i=A.a([],r)
for(h=j.length,g=0;g<j.length;j.length===h||(0,A.e)(j),++g){f=A.bH(j[g])
i.push(d.k2.$1(f))}h=A.a([],r)
for(f=i.length,g=0;g<i.length;i.length===f||(0,A.e)(i),++g){e=i[g]
l=e.a
if(!(isNaN(l)||isNaN(e.b)||isNaN(e.c))&&isFinite(l)&&isFinite(e.b)&&isFinite(e.c))h.push(e)}if(h.length!==0){i=q.a(A.a([B.a.gZ(h)],r))
f=d.r
f===$&&A.b("points")
B.a.H(f,i)
d.m6(A.ck(h,n))}}},
t(){return A.qp(this)}}
A.k4.prototype={
$1(a){var s
A.bH(a)
s=this.a
return a>=s.fy&&a<=s.go},
$S:45}
A.dW.prototype={
t(){return A.q2(this)}}
A.j4.prototype={
$1(a){A.bH(a)
return new A.f(a,this.a.$1(a),0)},
$S:18}
A.ey.prototype={
jo(a,b){var s,r
if(a==null)s=null
else s=a
if(s==null)s=B.p
if(b==null)r=null
else r=b
if(r==null)r=B.p
return A.aD(B.p,this.e,s,r,this.c)},
oW(a){return this.jo(a,null)},
oX(a){return this.jo(null,a)}}
A.hH.prototype={
l(a){return"TipSide."+this.b}}
A.de.prototype={
t(){return A.qU(this)},
ou(a,b){var s=this
if(Math.sqrt(s.aF().M(0,s.aw()).b4())===0)return
if(b===B.dT)s.cF(a.cC(0.5),s.aw())
else s.cF(s.aF(),a.cC(0.5))},
bW(a,b){this.ep(a,!1)
this.en(B.p,!1)
this.l8(a,!0)},
aK(a){return this.bW(a,!0)},
jz(){var s,r,q=this.r
q===$&&A.b("points")
s=q.length
r=s-2
if(!(r>=0))return A.c(q,r)
return q[r]},
aw(){var s=this.k1
if(s!=null){s.ap("getStart")
s=s.r
s===$&&A.b("points")
s=B.a.gZ(s)}else s=this.ev()
return s},
aF(){var s=this.id
if(s!=null){s.ap("getStart")
s=s.r
s===$&&A.b("points")
s=B.a.gZ(s)}else s=this.ew()
return s}}
A.dz.prototype={
t(){return A.pG(this)},
bG(){var s=this
s.kn()
s.fR(s.a4,B.e)
s.aQ(s.a9)},
kn(){var s,r,q,p,o,n,m,l,k,j=this,i=t.l,h=A.a([],i)
for(s=j.y2,r=j.Y,q=j.bi,s=A.ff(q,r+s,s).aW(0),p=s.length,o=0;o<s.length;s.length===p||(0,A.e)(s),++o){n=s[o]
h.push(B.j.v(0,Math.cos(n)).K(0,B.t.v(0,Math.sin(n))))}s=A.a([],i)
for(p=h.length,o=0;o<h.length;h.length===p||(0,A.e)(h),++o){n=h[o]
s.push(new A.f(-n.b,n.a,n.c))}p=A.a([],i)
for(m=A.J(h.length-1,0,1),l=m.length,q=r/(q-1)/3,o=0;o<m.length;m.length===l||(0,A.e)(m),++o){k=m[o]
p.push(B.a.k(h,k).K(0,B.a.k(s,k).v(0,q)))}i=A.a([],i)
for(r=A.J(h.length,1,1),m=r.length,o=0;o<r.length;r.length===m||(0,A.e)(r),++o){k=r[o]
i.push(B.a.k(h,k).M(0,B.a.k(s,k).v(0,q)))}s=t.V
j.el(A.n7(h,s),p,i,A.ck(h,s))}}
A.cl.prototype={
t(){return A.pI(this)}}
A.cP.prototype={
t(){return A.pQ(this)},
gdG(){return!0}}
A.dM.prototype={
t(){return A.nv(this)}}
A.dP.prototype={
t(){return A.pZ(this)}}
A.at.prototype={
t(){return A.qg(this)},
bG(){var s=this
s.eo(A.a([s.a4,s.a9],t.l))
s.m3()},
m3(){var s,r,q=this,p=q.y2
if(p===0)return
s=Math.sqrt(q.aF().M(0,q.aw()).b4())
if(s<2*p)return
r=p/s
q.j_(q,r,1-r)},
cF(a,b){var s=this
if(s.aF().W(0,s.aw())){s.a4=a
s.a9=b
s.bG()}return s.l1(a,b)}}
A.dH.prototype={
jv(){var s=this,r=s.c5/s.cv,q=Math.sqrt(s.aF().M(0,s.aw()).b4())/r
if(r==1/0||r==-1/0||q==1/0||q==-1/0)return 1
return B.h.dF(q)},
aF(){var s=this.d
s===$&&A.b("submobjects")
if(s.length!==0)return B.a.gZ(s).aF()
else return this.l7()},
aw(){var s=this.d
s===$&&A.b("submobjects")
if(s.length!==0)return B.a.gp(s).aw()
else return this.l6()},
t(){return A.pW(this)}}
A.ew.prototype={
t(){return A.qS(this)}}
A.bq.prototype={
dk(a,b){var s=A.h(a,!0,t.V)
s.push(B.a.gZ(a))
this.eo(s)},
t(){return A.qr(this)},
ox(b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1="points",b2="getStart",b3=b0.dn(0),b4=t.nC,b5=A.a([],b4)
for(s=t.V,r=A.oM(b3,3,s),q=r.length,p=J.oV(b6),o=0;o<r.length;r.length===q||(0,A.e)(r),++o){n=r[o]
m=n.length
if(0>=m)return A.c(n,0)
l=n[0]
if(1>=m)return A.c(n,1)
k=n[1]
if(2>=m)return A.c(n,2)
j=n[2]
i=k.M(0,l)
h=j.M(0,k)
m=i.a
g=i.b
f=i.c
e=m*m+g*g+f*f
d=i.b6(0,Math.sqrt(e))
c=h.a
b=h.b
a=h.c
a0=c*c+b*b+a*a
a1=h.b6(0,Math.sqrt(a0))
a2=Math.acos((m*c+g*b+f*a)/(Math.sqrt(a0)*Math.sqrt(e)))*p.ger(b6)
a3=b6*Math.tan(a2/2)/2
a4=J.pB(m*b-g*c)
c=k.M(0,d.v(0,a3))
B.a.n(b5,A.pH(a4*a2,k.K(0,a1.v(0,a3)),c))}r=t.l
q=t.y
b0.saR(q.a(A.a([],r)))
b4=A.a([B.a.gp(b5)],b4)
p=t.aY
B.a.H(b4,A.n7(b5,p))
for(b4=A.oM(b4,2,p),p=b4.length,o=0;o<b4.length;b4.length===p||(0,A.e)(b4),++o){a5=b4[o]
m=a5.length
if(0>=m)return A.c(a5,0)
a6=a5[0]
if(1>=m)return A.c(a5,1)
a7=a5[1]
m=a6.r
m===$&&A.b(b1)
m=q.a(A.h(m,!0,s))
g=b0.r
g===$&&A.b(b1)
B.a.H(g,m)
m=a6.k1
if(m!=null){m.ap(b2)
m=m.r
m===$&&A.b(b1)
m=B.a.gZ(m)}else m=a6.ev()
g=a7.id
if(g!=null){g.ap(b2)
g=g.r
g===$&&A.b(b1)
g=B.a.gZ(g)}else g=a7.ew()
a8=A.nA(0,B.c,g,null,m)
m=a8.aF().M(0,a8.aw())
g=m.a
f=m.b
m=m.c
m=B.h.bp(Math.sqrt(g*g+f*f+m*m)/a6.ju()*B.d.b_(a6.r.length,a6.at))
g=a8.r
g===$&&A.b(b1)
a9=B.d.a7(g.length,a8.at)===1?B.a.gp(g):null
a8.saR(q.a(a8.fi(m,A.h(a8.r,!0,s))))
if(a9!=null){m=q.a(A.a([a9],r))
B.a.H(a8.r,m)}m=q.a(A.h(a8.r,!0,s))
B.a.H(b0.r,m)}}}
A.ek.prototype={
t(){return A.qB(this)}}
A.ez.prototype={
t(){return A.qW(this)}}
A.dA.prototype={
t(){return A.ar(this)},
saG(a){this.cw=A.bH(a)},
gaG(){return this.cw}}
A.d8.prototype={
h8(a,b,c){this.eq(c,!0)
this.dg(b,!0)},
t(){return A.qA(this)}}
A.el.prototype={
t(){return A.qC(this)}}
A.c3.prototype={
t(){return A.qE(this)},
bG(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null
if($.mu.aj(e.id)){s=$.mu.k(0,e.id).t()
r=s.d
r===$&&A.b("submobjects")
e.sbg(t.a.a(r))
e.sbj(0,s.gbj(s))
e.go=s.go
e.fx=e.k1=!0
return}r=e.id
q=A.a([],t.bD)
p=t.il
o=A.a([],p)
n=A.a([],t.lB)
o=new A.ku("http://www.w3.org/1999/xhtml",o,new A.fk(n))
o.bo(0)
n=A.mo(t.N)
m=A.a([],t.t)
m=new A.js(A.tm(d),d,n,m)
m.shM(new A.a8(r))
m.a="utf-8"
m.b=!0
m.bo(0)
r=new A.dY(m,!0,!0,!1,A.mo(t.nU),new A.a3(""),new A.a3(""),new A.a3(""))
r.bo(0)
l=new A.jt(!1,r,o,q)
r.f=l
l.lJ()
o=o.b
o===$&&A.b("document")
k=A.a([],p)
r=t.kU
j=A.a([],r)
i=A.qs("memory",!1)
q=t.m3.a(B.a.gm4(j))
r=A.a([],r)
$.f3.b=new A.jS(q,i,r)
r=new A.a8("svg")
q=A.a([0],t.t)
h=new A.hx(d,q,new Uint32Array(A.mP(r.av(r))))
h.h9(r,d)
r=new A.ks(85,117,43,63,new A.a8("CDATA"),h,"svg",!0,0)
q=new A.lg(r)
q.d=t.U.a(r.cB())
r.e=!0
g=q.ob()
if(g==null||j.length!==0)A.L(A.aA("'svg' is not a valid selector: "+A.k(j),d,d))
new A.en().j4(0,o,g,k)
r=k.length
q=t.a
f=0
for(;f<k.length;k.length===r||(0,A.e)(k),++f)e.aX(q.a(e.ed(k[f],new A.em(B.a5,d,d))))
$.mu.u(0,e.id,e.t())},
ed(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=null,h=t.Z,g=A.a([],h),f=a.x,e=f==null?i:f.toLowerCase(),d=b.bF(j.br(a))
if(e==="defs")j.oM(a)
else if(e!=="style")if(B.a.G(A.a(["g","svg","symbol"],t.s),e)){h=A.a([],h)
for(f=t.x,f=A.h(new A.an(a.gij(a).a,f),!1,f.h("j.E")),s=A.v(f),f=new J.av(f,f.length,s.h("av<1>")),s=s.c;f.q();){r=f.d
B.a.H(h,j.ed(r==null?s.a(r):r,d))}B.a.H(g,h)}else if(e==="path"){q=a.b.k(0,"d")
if(q!=null&&q.length!==0)B.a.n(g,j.dZ(q,d,a))}else if(e==="use")B.a.H(g,j.oN(a,d))
else if(e==="rect"){p=j.aL(a.b.k(0,"rx"))
h=a.b
if(p===0){h=j.aL(h.k(0,"width"))
o=A.qz(B.c,j.aL(a.b.k(0,"height")),h)}else{h=j.aL(h.k(0,"width"))
f=j.aL(a.b.k(0,"height"))
s=A.a([B.a_,B.aA,B.aB,B.aC],t.l)
o=new A.el(4,0,!1,0.01,!1,0.000001,4,i,i,i,B.c,$,i,$,$,$)
o.af(B.c,i,i)
o.dk(s,B.c)
o.h8(B.c,f,h)
o.ox(p)}o.aQ(o.aO(B.e).M(0,o.aO(B.a_)))
B.a.n(g,j.bM(d.bF(j.br(a)),o))}else if(e==="ellipse"){n=j.aL(a.b.k(0,"cx"))
m=j.aL(a.b.k(0,"cy"))
l=j.aL(a.b.k(0,"rx"))
k=j.aL(a.b.k(0,"ry"))
o=new A.dP(0,6.283185307179586,1,B.e,9,0.35,B.k,A.aD(i,0,B.c,i,0),i,i,4,0,!1,0.01,!1,0.000001,4,i,i,i,B.c,$,i,$,$,$)
o.af(B.c,i,i)
o.aK(B.c)
o.eq(l*2,!0)
o.dg(k*2,!0)
o.aQ(B.j.v(0,n).K(0,B.m.v(0,m)))
B.a.n(g,j.bM(d.bF(j.br(a)),o))}else if(e==="circle"){n=j.aL(a.b.k(0,"cx"))
m=j.aL(a.b.k(0,"cy"))
o=A.pP(B.e,B.c,j.aL(a.b.k(0,"r")))
o.aQ(B.j.v(0,n).K(0,B.m.v(0,m)))
B.a.n(g,j.bM(d.bF(j.br(a)),o))}else if(e==="polygon"||e==="polyline")B.a.n(g,j.o6(a,d))
else A.dv("Unknown SVG element "+A.k(e))
j.nH(a,A.mA(g))
return g},
dZ(a,b,c){var s=A.qF(a)
if(c!=null)return this.bM(b.bF(this.br(c)),s)
else return this.bM(b,s)},
iY(a,b){return this.dZ(a,b,null)},
oN(a,b){var s,r,q,p=a.b,o=A.z(p).h("aQ<1>"),n=A.h(new A.aQ(p,o),!0,o.h("j.E"))
o=p.gjl(p)
s=A.h(o,!0,A.z(o).h("j.E"))
r=B.a.fh(n,new A.kc())
if(r>=0){if(!(r<s.length))return A.c(s,r)
q=s[r]}else q=null
o=q==null?null:A.a(q.split("#"),t.s)
if(o==null)o=[]
q=B.a.aB(A.ck(o,t.z),"")
o=this.k2
if(!o.aj(q))A.dv("SVG ref "+q+" not recognized")
o=o.k(0,q)
o.toString
return this.ed(o,b.bF(this.br(a)))},
aL(a){var s,r,q,p,o,n
if(a===""||a==null||a==="none")a="0.0"
s=A.h(B.ad,!0,t.N)
s.push("+")
s.push("-")
s.push(".")
s.push("e")
s.push("E")
r=A.a([],t.s)
for(q=a.split(""),p=q.length,o=0;o<p;++o){n=q[o]
if(B.a.G(s,n))r.push(n)}return A.bJ(B.a.aU(r))},
o6(a,b){var s,r,q,p,o=this,n=a.b.k(0,"points")
n.toString
for(s=n,r=0;r<10;++r){q=B.ad[r]
s=A.bj(s," "+q," L"+q)}b=b.bF(o.br(a))
p=o.iY("M"+s,b)
return o.bM(b.bF(o.br(a)),p)},
is(a){var s,r,q,p,o,n
if(a===""||a==="none")return B.p
if(a==null)return null
s=A.a([3,4,6,8],t.t)
if(a==="currentcolor"){r=this.a
r===$&&A.b("color")
return r}else if(B.b.a_(a,"rgba")){r=A.a(a.split(""),t.s)
q=a.length-1
A.aF(5,q,r.length)
p=A.bu(r,5,q,t.N).aU(0).split(",")
q=p.length
if(0>=q)return A.c(p,0)
r=A.bJ(p[0])
if(1>=q)return A.c(p,1)
o=A.bJ(p[1])
if(2>=q)return A.c(p,2)
n=A.bJ(p[2])
if(3>=q)return A.c(p,3)
return new A.O(r,o,n,A.bJ(p[3]))}else if(B.b.a_(a,"rgb")){r=A.a(a.split(""),t.s)
q=a.length-1
A.aF(4,q,r.length)
p=A.bu(r,4,q,t.N).aU(0).split(",")
q=p.length
if(0>=q)return A.c(p,0)
r=A.bJ(p[0])
if(1>=q)return A.c(p,1)
o=A.bJ(p[1])
if(2>=q)return A.c(p,2)
return new A.O(r,o,A.bJ(p[2]),1)}else if(B.b.a_(a,"#")||B.a.G(s,a.length))return A.ow(a)
else{A.dv("unimplented type of color: "+a)
return null}},
bM(a,b){b.ku(a.a,a.b,a.c)
return b},
br(a){var s,r,q=a.b.k(0,"fill"),p=q==null?null:q.toLowerCase()
q=a.b.k(0,"stroke")
s=q==null?null:q.toLowerCase()
r=a.b.k(0,"stroke-width")
return new A.em(this.is(p),this.is(s),this.aL(r))},
nH(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
if(a2.b.k(0,"x")!=null&&a2.b.k(0,"y")!=null){s=this.aL(a2.b.k(0,"x"))
r=this.aL(a2.b.k(0,"y"))
a3.aQ(B.j.v(0,s).K(0,B.m.v(0,r)))}q=a2.b.k(0,"transform")
if(q==null)q=""
p=["matrix","translate","scale","rotate","skewX","skewY"]
o=A.a([],t.s)
for(n=0;n<6;++n)o.push(p[n]+"[^)]*\\)")
m=A.aw(B.a.aB(o,"|")).c0(0,q)
l=A.aw("[-+]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:[eE][-+]?\\d+)?")
for(o=new A.di(m.a,m.b,m.c),k=t.lu,j=t.n,i=t.b,h=t.o;o.q();){g=o.d
f=(g==null?k.a(g):g).b
if(0>=f.length)return A.c(f,0)
e=f[0].split("(")
f=e.length
if(0>=f)return A.c(e,0)
d=J.ni(e[0])
c=A.a([],j)
if(1>=f)return A.c(e,1)
f=l.c0(0,e[1])
f=new A.di(f.a,f.b,f.c)
for(;f.q();){s=f.d
b=(s==null?k.a(s):s).b
if(0>=b.length)return A.c(b,0)
b=b[0]
b.toString
c.push(A.bJ(b))}switch(d){case"matrix":a=A.ay(null,A.a([c],i)).ov(3,2)
h.a(new A.M(2,0,h))
f=a.a
f===$&&A.b("values")
if(2>=f.length)return A.c(f,2)
f=J.Y(f[2],0)
h.a(new A.M(2,1,h))
c=a.a
if(2>=c.length)return A.c(c,2)
c=J.Y(c[2],1)
a0=A.ft(3)
h.a(new A.M(0,0,h))
b=a.a
if(!(0<b.length))return A.c(b,0)
b=J.Y(b[0],0)
a0.bd(h.a(new A.M(0,0,h)),b)
h.a(new A.M(0,1,h))
b=a.a
if(!(0<b.length))return A.c(b,0)
b=J.Y(b[0],1)
a0.bd(h.a(new A.M(0,1,h)),b)
h.a(new A.M(1,0,h))
b=a.a
if(!(1<b.length))return A.c(b,1)
b=J.Y(b[1],0)
a0.bd(h.a(new A.M(1,0,h)),b)
h.a(new A.M(1,1,h))
b=a.a
if(!(1<b.length))return A.c(b,1)
b=J.Y(b[1],1)
a0.bd(h.a(new A.M(1,1,h)),b)
b=h.a(new A.M(1,0,h))
a1=a0.a
a1===$&&A.b("values")
if(!(1<a1.length))return A.c(a1,1)
a0.bd(b,J.Y(a1[1],0)*-1)
a1=h.a(new A.M(1,1,h))
b=a0.a
if(!(1<b.length))return A.c(b,1)
a0.bd(a1,J.Y(b[1],1)*-1)
b=h.a(new A.M(1,2,h))
a1=a0.a
if(!(1<a1.length))return A.c(a1,1)
a0.bd(b,J.Y(a1[1],2)*-1)
a1=h.a(new A.M(0,1,h))
b=a0.a
if(!(0<b.length))return A.c(b,0)
a0.bd(a1,J.Y(b[0],1)*-1)
b=h.a(new A.M(1,1,h))
a1=a0.a
if(!(1<a1.length))return A.c(a1,1)
a0.bd(b,J.Y(a1[1],1)*-1)
a1=h.a(new A.M(2,1,h))
b=a0.a
if(2>=b.length)return A.c(b,2)
a0.bd(a1,J.Y(b[2],1)*-1)
a3.mm(a0)
a3.aQ(B.j.v(0,f).K(0,B.m.v(0,c)))
break
case"scale":f=c.length
if(f===1){if(0>=f)return A.c(c,0)
f=c[0]
a3.fP(0,new A.f(f,f,1),B.e)}else if(f===2){if(0>=f)return A.c(c,0)
b=c[0]
if(1>=f)return A.c(c,1)
a3.fP(0,new A.f(b,c[1],1),B.e)}break
case"translate":f=c.length
if(0>=f)return A.c(c,0)
s=c[0]
if(f===2){if(1>=f)return A.c(c,1)
r=c[1]}else r=0
a3.aQ(B.j.v(0,s).K(0,B.m.v(0,r)))
break}}},
fG(a){var s,r,q=t.il,p=A.a([],q)
if(a.b.aj("id"))return A.a([a],q)
for(q=t.x,q=A.h(new A.an(a.gij(a).a,q),!1,q.h("j.E")),s=A.v(q),q=new J.av(q,q.length,s.h("av<1>")),s=s.c;q.q();){r=q.d
B.a.H(p,this.fG(r==null?s.a(r):r))}return p},
oM(a){var s,r,q,p,o,n
for(s=this.fG(a),r=s.length,q=this.k2,p=0;p<s.length;s.length===r||(0,A.e)(s),++p){o=s[p]
n=o.b.k(0,"id")
n.toString
q.u(0,n,o)}},
fm(){var s,r=this
r.aQ(r.aO(B.e).v(0,B.dX).v(0,-1))
if(r.gbj(r)!=null){s=r.gbj(r)
s.toString
r.km(s)}},
sbj(a,b){this.fy=A.ov(b)},
sn_(a,b){this.id=A.aq(b)},
gbj(a){return this.fy}}
A.kc.prototype={
$1(a){var s
t.K.a(a)
s=J.bi(a)
return B.b.G(s.l(a),"href")&&B.b.G(s.l(a),"xlink")},
$S:47}
A.d9.prototype={
t(){return A.qG(this)},
jC(){var s=A.a(["M","L","H","V","C","S","Q","T","A","Z"],t.s),r=A.h(s,!0,t.N)
B.a.H(r,new A.H(s,t.gL.a(new A.ke()),t.gQ))
return r},
bG(){var s,r,q,p,o,n,m,l=this,k=A.aw("["+B.a.aU(l.jC())+"]"),j=l.fx,i=k.c0(0,j),h=t.N,g=A.z(i)
g=A.jK(i,g.h("m(j.E)").a(new A.kd()),g.h("j.E"),h)
s=A.h(g,!0,A.z(g).h("j.E"))
r=A.ck(B.b.cg(j,k),h)
for(j=A.J(s.length,0,1),i=j.length,q=null,p=0;p<j.length;j.length===i||(0,A.e)(j),++p,q=n){o=j[p]
n=B.a.k(s,o)
m=B.a.k(r,o)
l.nF(n,m,q==null?"":q)}l.e5(0,3.141592653589793,B.e,B.j)},
nF(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0="addCubicBezierCurveTo",a1=a3.toUpperCase(),a2=a.r
a2===$&&A.b("points")
s=a2.length!==0?B.a.gp(a2):new A.f(0,0,0)
r=a.kO(a1,a4,a3!==a3.toUpperCase(),s)
switch(a1){case"M":if(0>=r.length)return A.c(r,0)
a2=t.V
q=t.y.a(A.a([a2.a(r[0])],t.l))
B.a.H(a.r,q)
for(a2=A.ck(r,a2),q=a2.length,p=0;p<a2.length;a2.length===q||(0,A.e)(a2),++p)a.cS(a2[p])
return
case"H":case"V":case"L":for(a2=r.length,p=0;p<r.length;r.length===a2||(0,A.e)(r),++p)a.cS(r[p])
return
case"C":for(a2=A.J(r.length,0,3),q=a2.length,o=t.l,n=t.y,m=a.at,l=t.V,p=0;p<a2.length;a2.length===q||(0,A.e)(a2),++p){k=a2[p]
if(typeof k!=="number")return k.K()
j=B.a.k(r,k+0)
i=B.a.k(r,k+1)
h=B.a.k(r,k+2)
l.a(j)
l.a(i)
l.a(h)
a.ap(a0)
g=a.r
if(B.d.a7(g.length,m)===1){j=n.a(A.a([j,i,h],o))
B.a.H(a.r,j)}else{j=n.a(A.a([B.a.gp(g),j,i,h],o))
B.a.H(a.r,j)}}return
case"S":if(B.a.G(A.a(["C","S"],t.s),a5.toUpperCase())){a2=a.r
q=a2.length
o=q-2
if(!(o>=0))return A.c(a2,o)
f=a2[o]}else f=s
for(a2=A.J(r.length,0,2),q=a2.length,o=t.l,n=t.y,m=a.at,l=t.V,p=0;p<a2.length;a2.length===q||(0,A.e)(a2),++p){k=a2[p]
e=s.v(0,2).M(0,f)
j=B.a.k(r,k)
if(typeof k!=="number")return k.K()
i=k+1
h=B.a.k(r,i)
l.a(j)
l.a(h)
a.ap(a0)
g=a.r
if(B.d.a7(g.length,m)===1){j=n.a(A.a([e,j,h],o))
B.a.H(a.r,j)}else{j=n.a(A.a([B.a.gp(g),e,j,h],o))
B.a.H(a.r,j)}s=B.a.k(r,i)
f=B.a.k(r,k)}return
case"Q":for(a2=A.J(r.length,0,2),q=a2.length,o=t.l,n=t.y,m=a.at,l=t.V,p=0;p<a2.length;a2.length===q||(0,A.e)(a2),++p){k=a2[p]
j=B.a.k(r,k)
if(typeof k!=="number")return k.K()
i=B.a.k(r,k+1)
l.a(j)
l.a(i)
h=j.v(0,0.6666666666666666).K(0,B.a.gp(a.r).v(0,0.3333333333333333))
j=j.v(0,0.6666666666666666).K(0,i.v(0,0.3333333333333333))
a.ap(a0)
g=a.r
if(B.d.a7(g.length,m)===1){j=n.a(A.a([h,j,i],o))
B.a.H(a.r,j)}else{j=n.a(A.a([B.a.gp(g),h,j,i],o))
B.a.H(a.r,j)}}return
case"T":if(B.a.G(A.a(["Q","T"],t.s),a5.toUpperCase())){a2=a.r
q=a2.length
o=q-2
if(!(o>=0))return A.c(a2,o)
d=J.cM(a2[o],1.5).M(0,J.cM(B.a.gp(a.r),0.5))}else d=s
for(a2=r.length,q=t.l,o=t.y,n=a.at,m=t.V,p=0;p<r.length;r.length===a2||(0,A.e)(r),++p,d=b,s=c){c=r[p]
b=s.v(0,2).M(0,d)
m.a(c)
l=b.v(0,0.6666666666666666).K(0,B.a.gp(a.r).v(0,0.3333333333333333))
j=b.v(0,0.6666666666666666).K(0,c.v(0,0.3333333333333333))
a.ap(a0)
i=a.r
if(B.d.a7(i.length,n)===1){l=o.a(A.a([l,j,c],q))
B.a.H(a.r,l)}else{l=o.a(A.a([B.a.gp(i),l,j,c],q))
B.a.H(a.r,l)}}return
case"A":for(a2=A.J(r.length,0,3),q=a2.length,o=t.l,n=t.y,m=a.at,l=t.V,p=0;p<a2.length;a2.length===q||(0,A.e)(a2),++p){k=a2[p]
j=B.a.k(r,k)
if(typeof k!=="number")return k.K()
i=B.a.k(r,k+1)
h=B.a.k(r,k+2)
l.a(j)
l.a(i)
l.a(h)
a.ap(a0)
g=a.r
if(B.d.a7(g.length,m)===1){j=n.a(A.a([j,i,h],o))
B.a.H(a.r,j)}else{j=n.a(A.a([B.a.gp(g),j,i,h],o))
B.a.H(a.r,j)}}return
case"Z":if(!a.iq(B.a.gZ(a.r),B.a.gp(a.r))){a2=B.a.gp(a.eg(A.h(a.r,!0,t.V)))
if(0>=a2.length)return A.c(a2,0)
a.cS(a2[0])}return}},
kO(a,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=A.tX(a0),c=t.l,b=A.a([],c)
if(a==="A"){for(c=A.p_(d,2,t.W),s=c.length,r=null,q=0;q<c.length;c.length===s||(0,A.e)(c),++q){p=c[q]
if(r!=null)a2=r
if(a1){if(5>=p.length)return A.c(p,5)
o=p[5]
if(typeof o!=="number")return o.K()
B.a.u(p,5,o+a2.a)
if(6>=p.length)return A.c(p,6)
o=p[6]
if(typeof o!=="number")return o.K()
B.a.u(p,6,o+a2.b)}o=p.length
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
B.a.H(b,A.tv(a2,m,l,k,j,i,new A.f(n,p[6],0)))
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
for(s=A.p_(d,2,t.W),o=s.length,q=0;q<s.length;s.length===o||(0,A.e)(s),++q){h=s[q]
n=h.length
if(0>=n)return A.c(h,0)
m=h[0]
if(1>=n)return A.c(h,1)
c.push(new A.f(m,h[1],0))}b=c}if(!a1)return b
if(a==="Q"||a==="S")g=2
else g=a==="C"?3:1
for(c=A.J(b.length,0,1),s=c.length,f=a2,q=0;q<c.length;c.length===s||(0,A.e)(c),++q){e=c[q]
B.a.u(b,e,B.a.k(b,e).K(0,f))
if(typeof e!=="number")return e.K()
if(B.h.a7(e+1,g)===0)f=B.a.k(b,e)}return b}}
A.ke.prototype={
$1(a){return A.aq(a).toLowerCase()},
$S:25}
A.kd.prototype={
$1(a){var s=t.lu.a(a).b
if(0>=s.length)return A.c(s,0)
s=s[0]
s.toString
return s},
$S:49}
A.em.prototype={
bF(a){var s,r,q=a.a
if(q==null)q=this.a
s=a.b
if(s==null)s=this.b
r=a.c
return new A.em(q,s,r==null?this.c:r)},
l(a){return"fill: "+A.k(this.a)+", stroke: "+A.k(this.b)+" "+A.k(this.c)+"pt"}}
A.ex.prototype={
t(){return A.qT(this)}}
A.bN.prototype={
t(){return A.qI(this)},
iv(){var s=this,r=s.Y
B.b.e6(r)
s.Y=A.qJ(r)
if(!$.db.aj(s.a4)||!$.db.k(0,s.a4).aj(s.Y))throw A.d(s.Y+" need to be preloaded")
r=$.db.k(0,s.a4).k(0,s.Y)
r.toString
s.sn_(0,r)
s.saR(t.y.a(A.a([],t.l)))
s.sbg(t.a.a(A.a([],t.r)))
s.bG()
s.fm()
r=s.a
r===$&&A.b("color")
s.aK(r)
s.cL(0.035)},
l(a){return this.dd()+"("+this.Y+")"},
dZ(a,b,c){var s=null,r=new A.ex(a,s,4,0,!1,0.01,!1,0.000001,4,s,s,s,B.c,$,s,$,$,$)
r.af(B.c,s,s)
if(c!=null)return this.bM(b.bF(this.br(c)),r)
else return this.bM(b,r)},
iY(a,b){return this.dZ(a,b,null)},
sbj(a,b){this.a9=A.ov(b)},
gbj(a){return this.a9}}
A.ed.prototype={
t(){return A.qk(this)},
mF(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1="submobjects",a2=A.a([],t.nn)
for(s=a.c6,r=s.length,q=t.a,p=a.aZ,o=t.s,n=t.N,m=t.h,l=t.r,k=t.j,j=0,i=0;i<s.length;s.length===r||(0,A.e)(s),++i,j=e){h=new A.bN(s[i],a.a4,!0,2,a0,"",!0,A.bc(n,m),4,0,!1,0.01,!1,0.000001,4,a0,a0,a0,B.c,$,a0,$,$,$)
h.af(B.c,a0,a0)
g=h.r
g===$&&A.b("points")
if(g.length!==0)h.fm()
h.a=B.c
h.iv()
g=h.d
g===$&&A.b(a1)
f=g.length
e=j+f+B.a.aB(A.a(p.split(" "),o),"").length
if(f===0){h.sbg(q.a(A.a([A.o3(B.e)],l)))
g=a.d
g===$&&A.b(a1)
d=g.length
c=Math.min(j,d-1)
if(c>>>0!==c||c>=d)return A.c(g,c)
g=k.a(g[c])
h.bn(g.aO(B.j))}else{g=a.d
g===$&&A.b(a1)
A.aF(j,e,g.length)
d=A.v(g)
b=new A.aI(g,j,e,d.h("aI<1>"))
b.ci(g,j,e,d.c)
h.sbg(q.a(b.av(0)))}B.a.n(a2,h)}a.sbg(q.a(a2))},
jB(a,b,c){var s,r,q,p=new A.jL(!0,!0),o=A.a([],t.nn),n=this.d
n===$&&A.b("submobjects")
s=n.length
r=0
for(;r<n.length;n.length===s||(0,A.e)(n),++r){q=n[r]
if(q instanceof A.bN&&A.au(p.$2(a,q.Y)))o.push(q)}return o},
kj(a,b,c,d){var s,r,q,p=this.jB(a,!0,!0)
for(s=p.length,r=0;r<p.length;p.length===s||(0,A.e)(p),++r){q=p[r]
q.en(b,!0)
q.ep(b,!0)
q.h7(b,!0)}},
kk(a){var s,r
t.fg.a(a)
for(s=a.gdN(a),s=new A.cd(s.a(),s.$ti.h("cd<1>"));s.q();){r=s.gC()
this.kj(r.a,r.b,!0,!0)}},
soF(a){this.c6=t.I.a(a)}}
A.jL.prototype={
$2(a,b){var s
if(!this.a){a=a.toLowerCase()
b=b.toLowerCase()}s=B.b.G(b,a)
return s},
$S:50}
A.h0.prototype={
lb(a){this.aX(t.a.a(A.a([this.w],t.r)))
this.eV()},
eP(a,b,c,d){var s,r
A.ir(d,t.e,"IEvent","addEventListener")
s=new A.b1(d.h("y(0)").a(c),b,d.h("b1<0>"))
r=$.dw()
t.d3.a(s)
r=r.gc3().k(0,b)
r.toString
B.a.n(r,s)
return s}}
A.dN.prototype={
eV(){var s=this
s.slh(t.gG.a(s.eP(0,B.z,new A.iZ(s),t.gn)))
s.sli(t.m4.a(s.eP(0,B.x,new A.j_(s),t.oJ)))
s.slj(t.mc.a(s.eP(0,B.y,new A.j0(s),t.nB)))},
t(){return A.pY(this)},
slh(a){this.ay=t.gG.a(a)},
sli(a){this.ch=t.m4.a(a)},
slj(a){this.CW=t.mc.a(a)}}
A.iZ.prototype={
$1(a){var s
t.gn.a(a)
s=this.a
if(s.cx){s.w.bn(a.c)
return!0}return!1},
$S:51}
A.j_.prototype={
$1(a){var s,r=this.a,q=r.w,p=t.oJ.a(a).c,o=p.a
if(o>=q.aO(B.n).a-0.1)if(o<=q.aO(B.j).a+0.1){o=p.b
o=o>=q.aO(B.m).b-0.1&&o<=q.aO(B.t).b+0.1
s=o}else s=!1
else s=!1
if(s){r.cx=!0
q.bn(p)
return!0}return!1},
$S:52}
A.j0.prototype={
$1(a){t.nB.a(a)
return this.a.cx=!1},
$S:53}
A.G.prototype={
gjj(){var s=this.e
if(s===$){s=A.a([],t.po)
this.sll(s)}return s},
af(a,b,c){var s=this,r=s.dd()
s.b=r
s.sbg(t.a.a(A.a([],t.r)))
s.f=!1
s.saR(t.y.a(A.a([],t.l)))
s.iK()
s.bG()},
l(a){return this.dd()},
dd(){var s=this.l2(0),r=A.aw("^Instance of '(.*?)'$").nD(s).b
if(1>=r.length)return A.c(r,1)
r=r[1]
r.toString
return r},
iK(){},
bG(){},
aX(a){var s,r,q,p,o,n=t.a
n.a(a)
if(B.a.G(a,this))throw A.d("Mobject can't contain itself")
s=A.h(a,!0,t.j)
r=this.d
r===$&&A.b("submobjects")
q=r.length
p=0
for(;p<r.length;r.length===q||(0,A.e)(r),++p){o=r[p]
if(!B.a.G(a,o))s.push(o)}this.sbg(n.a(s))},
cp(a,b,c){var s,r,q,p,o,n,m,l,k,j
t.ew.a(c)
if(b==null)b=this.aO(a)
for(s=this.fK(),r=s.length,q=t.y,p=t.l,o=0;o<s.length;s.length===r||(0,A.e)(s),++o){n=s[o]
m=A.a([],p)
l=n.r
l===$&&A.b("points")
k=l.length
j=0
for(;j<l.length;l.length===k||(0,A.e)(l),++j)m.push(J.m6(c.$1(J.px(l[j],b)),b))
n.saR(q.a(m))}},
ia(a){return this.cp(B.e,null,a)},
t(){return A.qm(this)},
ji(a,b){var s,r,q,p=this
p.f===$&&A.b("updatingSuspended")
for(s=p.gjj(),r=s.length,q=0;q<s.length;s.length===r||(0,A.e)(s),++q)s[q].$2(p,a)
s=p.d
s===$&&A.b("submobjects")
r=s.length
q=0
for(;q<s.length;s.length===r||(0,A.e)(s),++q)s[q].ji(a,!0)},
jh(a){return this.ji(a,!0)},
aQ(a){return this.ia(new A.k_(a))},
fP(a,b,c){return this.cp(B.e,c,new A.jZ(b))},
ei(a,b,c){return this.cp(b,c,new A.jY(a))},
cL(a){return this.ei(a,B.e,null)},
fR(a,b){return this.ei(a,B.e,b)},
e5(a,b,c,d){this.cp(B.e,c,new A.jX(A.tS(b,d).gjg()))},
ow(a,b,c){return this.e5(a,b,c,B.k)},
fA(a,b){return this.e5(a,b,null,B.k)},
kN(a,b,c,d){return this.cp(c,d,new A.k0(b,a))},
mm(a){var s={},r=A.ft(3)
s.a=r
s.a=r.bT(0,new A.jT(a))
this.ia(new A.jU(s))},
ja(a,b,c,d,e){var s,r=this.nS(b)
if(r===0)return
s=a/r
if(e)this.kN(s,b,c,d)
else this.ei(s,c,d)},
eq(a,b){this.ja(a,0,B.e,null,b)},
dg(a,b){this.ja(a,1,B.e,null,b)},
km(a){return this.dg(a,!1)},
fT(a,b,c){this.aQ(B.e.jp(b,a-this.da(b,B.e)))},
bn(a){this.aQ(a.M(0,this.aO(B.e)).v(0,new A.f(1,1,1)))},
cF(a,b){var s,r=this,q=r.aF(),p=r.aw(),o=p.M(0,q)
if(q.W(0,p))throw A.d("Cannot position endpoints of a closed loop")
s=b.M(0,a)
r.fR(Math.sqrt(s.b4())/Math.sqrt(o.b4()),q)
r.ow(0,s.cT()-o.cT(),q)
r.aQ(a.M(0,q))},
bW(a,b){var s,r,q=this.d
q===$&&A.b("submobjects")
s=q.length
r=0
for(;r<q.length;q.length===s||(0,A.e)(q),++r)q[r].bW(a,!0)
this.a=a},
cZ(a,b){var s,r,q=this.d
q===$&&A.b("submobjects")
s=q.length
r=0
for(;r<q.length;q.length===s||(0,A.e)(q),++r)q[r].cZ(a,!0)},
iD(a){return this.cZ(a,!0)},
bV(){var s,r,q,p=A.a([this],t.r),o=this.d
o===$&&A.b("submobjects")
s=o.length
r=0
for(;r<o.length;o.length===s||(0,A.e)(o),++r)B.a.H(p,o[r].bV())
q=A.mn(p,t.j)
return A.h(q,!0,A.z(q).h("aU.E"))},
fK(){var s=this.bV(),r=A.v(s),q=r.h("ai<1>")
return A.h(new A.ai(s,r.h("y(1)").a(new A.jV()),q),!0,q.h("j.E"))},
fH(){var s,r,q,p,o=A.a([],t.l)
for(s=this.fK(),r=s.length,q=0;q<s.length;s.length===r||(0,A.e)(s),++q){p=s[q].r
p===$&&A.b("points")
B.a.H(o,p)}return o},
ef(){return this.fH()},
dc(a,b,c){var s,r,q
t.fA.a(c)
if(c==null)c=this.ef()
s=A.a([],t.n)
for(r=c.length,q=0;q<c.length;c.length===r||(0,A.e)(c),++q)s.push(c[q].al(a))
if(b<0)return B.a.b5(s,B.K)
else if(b===0)return(B.a.b5(s,B.K)+B.a.b5(s,B.L))/2
else return B.a.b5(s,B.L)},
jw(a,b){return this.dc(a,b,null)},
aO(a){var s=this,r=s.ef()
if(r.length===0)return B.e
return new A.f(s.dc(0,B.h.bp(a.a),r),s.dc(1,B.h.bp(a.b),r),s.dc(2,B.h.bp(a.c),r))},
nS(a){var s,r,q,p=this.fH()
if(p.length===0)return 1
s=A.v(p)
r=new A.H(p,s.h("D(1)").a(new A.jW(a)),s.h("H<1,D>"))
q=r.b5(0,B.K)
return r.b5(0,B.L)-q},
da(a,b){return this.jw(a,B.h.bp((b==null?B.e:b).al(a)))},
aE(){return new A.f(this.da(0,null),this.da(1,null),this.da(2,null))},
aF(){this.ap("getStart")
var s=this.r
s===$&&A.b("points")
return B.a.gZ(s)},
aw(){this.ap("getEnd")
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
eu(a){var s=A.a([],t.r),r=this.r
r===$&&A.b("points")
if(r.length!==0)s.push(this)
r=this.d
r===$&&A.b("submobjects")
B.a.H(s,r)
return s},
i6(a){var s,r,q,p,o,n=this,m="points",l="submobjects",k=n.r
k===$&&A.b(m)
if(k.length===0){k=a.r
k===$&&A.b(m)
k=k.length!==0}else k=!1
if(k)a.j3()
k=a.r
k===$&&A.b(m)
if(k.length===0&&n.r.length!==0)n.j3()
s=n.eu(0).length
r=a.eu(0).length
n.i0(Math.max(0,r-s))
a.i0(Math.max(0,s-r))
n.i7(a)
k=n.d
k===$&&A.b(l)
q=a.d
q===$&&A.b(l)
q=new A.aB(A.a([k,q],t.i7),t.oS)
q=q.gI(q)
for(;q.q();){p=q.b
if(p==null)p=A.L(A.aH("No element"))
k=p.length
if(0>=k)return A.c(p,0)
o=p[0]
if(1>=k)return A.c(p,1)
o.i6(p[1])}},
fL(){throw A.d("getPointMobject not implemented for "+A.k(this.gjA())+"()")},
i7(a){var s,r,q=this.r
q===$&&A.b("points")
s=q.length
q=a.r
q===$&&A.b("points")
r=q.length
if(s<r)this.i8(a)
else if(s>r)a.i8(this)},
i8(a){throw A.d("Not implemented")},
j3(){var s=this.t(),r=t.r,q=t.a
s.sbg(q.a(A.a([],r)))
this.saR(t.y.a(A.a([],t.l)))
this.aX(q.a(A.a([s],r)))},
i0(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
if(a2===0)return
s=a1.eu(0).length
if(s===0){r=A.a([],t.r)
for(q=A.J(a2,0,1),p=q.length,o=0;o<q.length;q.length===p||(0,A.e)(q),++o)r.push(a1.fL())
a1.sbg(t.a.a(r))}n=s+a2
r=t.t
q=A.a([],r)
for(p=A.J(n,0,1),m=p.length,o=0;o<p.length;p.length===m||(0,A.e)(p),++o){l=p[o]
if(typeof l!=="number")return l.v()
q.push(B.h.b_(l*s,n))}p=A.a([],r)
for(m=A.J(s,0,1),k=m.length,j=t.S,o=0;o<m.length;m.length===k||(0,A.e)(m),++o){i=m[o]
h=A.a([],r)
for(g=q.length,f=J.bi(i),e=0;e<q.length;q.length===g||(0,A.e)(q),++e)if(f.W(i,q[e]))h.push(1)
else h.push(0)
p.push(A.m2(h,j))}d=A.a([],t.r)
r=a1.d
r===$&&A.b("submobjects")
p=new A.aB(A.a([r,p],t.bo),t.c2)
p=p.gI(p)
r=t.j
for(;p.q();){c=p.b
if(c==null)c=A.L(A.aH("No element"))
q=c.length
if(0>=q)return A.c(c,0)
b=r.a(c[0])
if(1>=q)return A.c(c,1)
a=A.a4(c[1])
B.a.n(d,b)
for(q=A.J(a,1,1),m=q.length,o=0;o<q.length;q.length===m||(0,A.e)(q),++o){a0=b.t()
a0.iD(1)
B.a.n(d,a0)}}a1.sbg(t.a.a(d))},
iQ(a,b,c){},
c1(a){var s,r,q,p,o,n,m
this.i6(a)
for(s=new A.aB(A.a([this.bV(),a.bV()],t.i7),t.oS),s=s.gI(s),r=t.V,q=t.y;s.q();){p=s.b
if(p==null)p=A.L(A.aH("No element"))
o=p.length
if(0>=o)return A.c(p,0)
n=p[0]
if(1>=o)return A.c(p,1)
m=p[1]
o=m.r
o===$&&A.b("points")
n.saR(q.a(A.h(o,!0,r)))
n.iQ(n,m,1)}},
ap(a){var s=this.r
s===$&&A.b("points")
if(s.length!==0)return
throw A.d("Cannot call Mobject."+a+" , the mobject doesn't have any points")},
sbg(a){this.d=t.a.a(a)},
sll(a){this.e=t.le.a(a)},
saR(a){this.r=t.y.a(a)}}
A.k_.prototype={
$1(a){return a.K(0,this.a)},
$S:4}
A.jZ.prototype={
$1(a){return a.v(0,this.a)},
$S:4}
A.jY.prototype={
$1(a){return a.v(0,this.a)},
$S:4}
A.jX.prototype={
$1(a){return a.c9(this.a)},
$S:4}
A.k0.prototype={
$1(a){var s=this.a
return a.jp(s,a.al(s)*this.b)},
$S:4}
A.jT.prototype={
$2(a,b){var s,r,q,p
t.o.a(b)
s=b.a
r=this.a
q=r.b
q===$&&A.b("shape")
p=q.a
if(typeof s!=="number")return s.e9()
if(typeof p!=="number")return A.bw(p)
if(s<p){s=b.b
q=q.b
if(typeof s!=="number")return s.e9()
if(typeof q!=="number")return A.bw(q)
q=s>=q
s=q}else s=!0
return s?a:r.bb(b)},
$S:3}
A.jU.prototype={
$1(a){return a.c9(this.a.a)},
$S:4}
A.jV.prototype={
$1(a){var s=t.j.a(a).r
s===$&&A.b("points")
return s.length>0},
$S:13}
A.jW.prototype={
$1(a){return t.V.a(a).al(this.a)},
$S:26}
A.dX.prototype={
t(){return A.q5(this)}}
A.P.prototype={
t(){return A.r2(this)},
iK(){var s=this,r=s.ax
if(r==null){r=s.a
r===$&&A.b("color")
r=A.a([r],t.O)}s.kl(r)
r=s.ay
if(r==null){r=s.a
r===$&&A.b("color")
r=A.a([r],t.O)}s.ks(r,s.gaG())
s.ki(s.ch,s.x)},
cM(a,b,c){var s,r,q,p,o,n=this
t.q.a(b)
s=t.O
r=A.a([],s)
if(b!=null)B.a.H(r,b)
if(a!=null)r.push(a)
if(c)for(q=n.df(),p=q.length,o=0;o<q.length;q.length===p||(0,A.e)(q),++o)q[o].fV(r,!1)
if(r.length!==0){if(n.ax==null)n.sc7(r)
q=n.ax
q.toString
q=J.W(q)
p=r.length
if(q<p){q=n.ax
q.toString
n.sc7(A.cL(q,p,t.G))}else{q=n.ax
q.toString
if(p<J.W(q)){q=n.ax
q.toString
n.sc7(A.cL(r,J.W(q),t.G))}}s=A.a([],s)
q=n.ax
q.toString
q=A.J(J.W(q),0,1)
p=q.length
o=0
for(;o<q.length;q.length===p||(0,A.e)(q),++o)s.push(B.a.k(r,q[o]))
n.sc7(s)}},
en(a,b){return this.cM(a,null,b)},
fV(a,b){return this.cM(null,a,b)},
kl(a){return this.cM(null,a,!0)},
fU(a){return this.cM(a,null,!0)},
bw(a,b,c,d,e){var s,r,q,p,o,n=this
t.q.a(c)
s=t.O
r=A.a([],s)
if(c!=null)B.a.H(r,c)
if(b!=null)r.push(b)
if(d)for(q=n.df(),p=q.length,o=0;o<q.length;q.length===p||(0,A.e)(q),++o)q[o].kt(a,r,!1,e)
if(r.length!==0)if(a){if(n.ch==null)n.scq(r)
q=n.ch
q.toString
q=J.W(q)
p=r.length
if(q<p){q=n.ch
q.toString
n.scq(A.cL(q,p,t.G))}else{q=n.ch
q.toString
if(p<J.W(q)){q=n.ch
q.toString
n.scq(A.cL(r,J.W(q),t.G))}}s=A.a([],s)
q=n.ay
q.toString
q=A.J(J.W(q),0,1)
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
n.sbJ(A.cL(q,p,t.G))}else{q=n.ay
q.toString
if(p<J.W(q)){q=n.ay
q.toString
n.sbJ(A.cL(r,J.W(q),t.G))}}s=A.a([],s)
q=n.ay
q.toString
q=A.J(J.W(q),0,1)
p=q.length
o=0
for(;o<q.length;q.length===p||(0,A.e)(q),++o)s.push(B.a.k(r,q[o]))
n.sbJ(s)}if(e!=null)if(a)n.x=e
else n.saG(e)},
di(a){return this.bw(!1,a,null,!0,null)},
kt(a,b,c,d){return this.bw(a,null,b,c,d)},
ep(a,b){return this.bw(!1,a,null,b,null)},
kr(a,b){return this.bw(!1,null,a,b,null)},
ks(a,b){return this.bw(!1,null,a,!0,b)},
kp(a){return this.bw(!1,null,null,!0,a)},
kq(a,b){return this.bw(!1,a,null,!0,b)},
em(a,b,c,d){return this.bw(!0,a,t.q.a(b),c,d)},
kh(a,b){return this.em(null,a,b,null)},
ki(a,b){return this.em(null,a,!0,b)},
fX(a,b){return this.kv(a.d,a.e,b,a.a,a.b,a.c)},
kw(a){return this.fX(a,!0)},
fW(a,b,c,d,e,f,g,h){var s=t.q
s.a(e)
s.a(g)
s.a(a)
this.cM(d,e,c)
this.bw(!1,f,g,c,h)
this.em(null,a,c,b)},
kv(a,b,c,d,e,f){return this.fW(a,b,c,null,d,null,e,f)},
ku(a,b,c){return this.fW(null,null,!0,a,null,b,null,c)},
fI(){var s=J.Y(this.bs(),0)
return s},
bW(a,b){this.en(a,!0)
this.ep(a,!0)
this.h7(a,!0)},
aK(a){return this.bW(a,!0)},
fk(a,b){var s,r,q="submobjects",p="removeWhere",o=a.bs(),n=a.cK(),m=a.gaG(),l=a.bt(!0),k=a.x
this.fX(new A.eB(o,n,m,l,k),!1)
if(b){o=this.d
o===$&&A.b(q)
n=a.d
n===$&&A.b(q)
if(o.length===0)return
else if(n.length===0)s=A.a([a],t.r)
else s=n
n=A.v(o).h("y(1)").a(new A.kN())
if(!!o.fixed$length)A.L(A.R(p))
B.a.eM(o,n,!0)
n=A.v(s).h("y(1)").a(new A.kO())
if(!!s.fixed$length)A.L(A.R(p))
B.a.eM(s,n,!0)
for(n=t.j,n=A.tN(o,s,n,n),n=A.h5([n.a,n.b],!1,t.z),n=new A.aB(new A.aN(n,A.v(n).h("aN<1,n<P>>")),t.pn),n=n.gI(n);n.q();){r=n.b
if(r==null)r=A.L(A.aH("No element"))
o=r.length
if(0>=o)return A.c(r,0)
m=r[0]
if(1>=o)return A.c(r,1)
m.fk(r[1],!0)}}},
iT(a){return this.fk(a,!0)},
cZ(a,b){var s,r,q,p=this,o=1-a,n=t.O,m=A.a([],n)
for(s=J.ab(p.bs());s.q();){r=s.gC()
q=r.d
m.push(new A.O(r.a,r.b,r.c,q*o))}p.fV(m,!0)
m=A.a([],n)
for(s=J.ab(p.cK());s.q();){r=s.gC()
q=r.d
m.push(new A.O(r.a,r.b,r.c,q*o))}p.kr(m,!0)
n=A.a([],n)
for(m=J.ab(p.bt(!0));m.q();){s=m.gC()
r=s.d
n.push(new A.O(s.a,s.b,s.c,r*o))}p.kh(n,!0)
p.l0(a,!0)},
iD(a){return this.cZ(a,!0)},
bs(){var s=this.ax
return s==null?A.a([B.p],t.O):s},
bt(a){var s=a?this.ch:this.ay
return s==null||J.fh(s)?A.a([B.p],t.O):s},
cK(){return this.bt(!1)},
jx(){var s,r,q,p,o,n=this.aO(B.e),m=A.a([],t.b)
for(s=[B.j,B.t,B.k],r=t.n,q=0;q<3;++q){p=this.aO(s[q]).M(0,n)
m.push(A.a([p.a,p.b,p.c],r))}o=B.j.c9(A.ay(null,m).gjg())
return new A.M(n.M(0,o),n.K(0,o),t.iu)},
el(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=t.y
g.a(a)
g.a(b)
g.a(c)
g.a(d)
s=h.at
r=a.length
q=A.a([],t.l)
for(r=A.J(s*r,0,1),p=r.length,o=0;o<r.length;r.length===p||(0,A.e)(r),++o)q.push(B.e)
h.saR(g.a(q))
n=A.a([a,b,c,d],t.Q)
for(g=A.J(s,0,1),r=g.length,q=t.S,o=0;o<g.length;g.length===r||(0,A.e)(g),++o){m=g[o]
l=B.a.k(n,m)
p=h.r
p===$&&A.b("points")
for(p=A.is(A.J(p.length,m,s),q),k=p.length,j=0;j<p.length;p.length===k||(0,A.e)(p),++j){i=p[j]
B.a.u(h.r,i.b,l[B.d.a7(i.a,l.length)])}}},
m5(a,b,c){var s,r,q,p=this
p.ap("addCubicBezierCurveTo")
s=p.r
s===$&&A.b("points")
r=t.l
q=t.y
if(B.d.a7(s.length,p.at)===1){s=q.a(A.a([a,b,c],r))
B.a.H(p.r,s)}else{s=q.a(A.a([B.a.gp(s),a,b,c],r))
B.a.H(p.r,s)}},
cS(a){var s,r,q,p,o,n,m=[]
for(s=A.ff(this.at,1,0).iI(),r=s.length,q=0;q<s.length;s.length===r||(0,A.e)(s),++q){p=s[q]
o=this.r
o===$&&A.b("points")
m.push(B.a.gp(o).v(0,1-p).K(0,a.v(0,p)))}s=m.length
if(1>=s)return A.c(m,1)
r=t.V
o=r.a(m[1])
if(2>=s)return A.c(m,2)
n=r.a(m[2])
if(3>=s)return A.c(m,3)
return this.m5(o,n,r.a(m[3]))},
m6(a){var s,r
t.y.a(a)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.e)(a),++r)this.cS(a[r])},
eo(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
t.y.a(a)
s=A.ff(this.at,1,0).aW(0)
r=t.V
q=A.nj(A.ck(a,r))
p=A.nj(A.n7(a,r))
r=A.a([],t.fp)
for(o=s.length,n=0;n<s.length;s.length===o||(0,A.e)(s),++n){m=s[n]
r.push(p.v(0,1-m).K(0,q.v(0,m)))}o=A.a([],t.Q)
for(l=r.length,k=t.l,n=0;n<r.length;r.length===l||(0,A.e)(r),++n){j=r[n]
i=A.a([],k)
h=j.a
h===$&&A.b("values")
g=h.length
f=0
for(;f<h.length;h.length===g||(0,A.e)(h),++f){e=h[f]
d=J.X(e)
i.push(new A.f(d.k(e,0),d.k(e,1),d.k(e,2)))}o.push(i)}r=o.length
if(0>=r)return A.c(o,0)
l=o[0]
if(1>=r)return A.c(o,1)
k=o[1]
if(2>=r)return A.c(o,2)
i=o[2]
if(3>=r)return A.c(o,3)
this.el(l,k,i,o[3])},
fQ(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=null
for(s=this.df(),r=s.length,q=t.l,p=t.n,o=t.b,n=this.at,m=0;m<s.length;s.length===r||(0,A.e)(s),++m){l=s[m]
k=l.r
k===$&&A.b("points")
if(k.length<n)continue
j=l.jt()
k=A.a([],o)
if(0>=j.length)return A.c(j,0)
i=j[0]
h=i.length
g=0
for(;g<i.length;i.length===h||(0,A.e)(i),++g){f=i[g]
k.push(A.a([f.a,f.b,f.c],p))}e=A.ay(a4,k)
k=A.a([],o)
if(1>=j.length)return A.c(j,1)
i=j[1]
h=i.length
g=0
for(;g<i.length;i.length===h||(0,A.e)(i),++g){f=i[g]
k.push(A.a([f.a,f.b,f.c],p))}d=A.ay(a4,k)
k=A.a([],o)
if(2>=j.length)return A.c(j,2)
i=j[2]
h=i.length
g=0
for(;g<i.length;i.length===h||(0,A.e)(i),++g){f=i[g]
k.push(A.a([f.a,f.b,f.c],p))}c=A.ay(a4,k)
k=A.a([],o)
if(3>=j.length)return A.c(j,3)
i=j[3]
h=i.length
g=0
for(;g<i.length;i.length===h||(0,A.e)(i),++g){f=i[g]
k.push(A.a([f.a,f.b,f.c],p))}b=A.ay(a4,k)
a=d.M(0,e)
a0=c.M(0,b)
k=A.a([],q)
i=a.b
i===$&&A.b("shape")
i=e.K(0,A.bW(a5,i).v(0,a)).a
i===$&&A.b("values")
h=i.length
g=0
for(;g<i.length;i.length===h||(0,A.e)(i),++g){a1=i[g]
a2=J.X(a1)
k.push(new A.f(a2.k(a1,0),a2.k(a1,1),a2.k(a1,2)))}i=A.a([],q)
h=a0.b
h===$&&A.b("shape")
h=b.K(0,A.bW(a5,h).v(0,a0)).a
h===$&&A.b("values")
a2=h.length
g=0
for(;g<h.length;h.length===a2||(0,A.e)(h),++g){a1=h[g]
a3=J.X(a1)
i.push(new A.f(a3.k(a1,0),a3.k(a1,1),a3.k(a1,2)))}h=j.length
if(0>=h)return A.c(j,0)
a2=j[0]
if(3>=h)return A.c(j,3)
l.el(a2,k,i,j[3])}},
f0(a,b){var s=this.as,r=b.a
if(Math.abs(a.a-r)>s+0.00001*Math.abs(r))return!1
r=b.b
if(Math.abs(a.b-r)>s+0.00001*Math.abs(r))return!1
return!0},
iq(a,b){var s
if(!this.f0(a,b))return!1
s=b.c
if(Math.abs(a.c-s)>this.as+0.00001*Math.abs(s))return!1
return!0},
ea(a){var s,r,q,p,o,n,m,l={}
l.a=a
t.y.a(a)
l.a=a
s=A.jH(a,new A.kH(l,B.d.a7(J.W(a),this.at)),t.V)
l.a=A.h(s,!0,s.$ti.h("j.E"))
s=A.a([],t.ez)
for(r=A.J(J.W(l.a),0,4),q=r.length,p=t.cn,o=0;o<r.length;r.length===q||(0,A.e)(r),++o){n=r[o]
m=l.a
if(typeof n!=="number")return n.K()
s.push(new A.df(J.Y(m,n+0),J.Y(l.a,n+1),J.Y(l.a,n+2),J.Y(l.a,n+3),p))}return s},
hs(a,b){var s,r,q,p,o,n,m,l,k
t.y.a(a)
t.gw.a(b)
s=this.at
r=A.J(a.length,s,s)
q=A.v(r)
q=A.h(new A.ai(r,q.h("y(1)").a(b),q.h("ai<1>")),!0,t.S)
q.push(a.length)
r=A.a([0],t.t)
B.a.H(r,q)
p=A.a([],t.Q)
for(r=new A.aB(A.a([r,q],t.fC),t.lb),r=r.gI(r),q=A.v(a),o=q.c,q=q.h("aI<1>");r.q();){n=r.b
if(n==null)n=A.L(A.aH("No element"))
if(1>=n.length)return A.c(n,1)
m=n[1]
l=n[0]
if(typeof m!=="number")return m.M()
if(typeof l!=="number")return A.bw(l)
if(m-l>=s){A.a4(l)
A.a4(m)
A.aF(l,m,a.length)
k=new A.aI(a,l,m,q)
k.ci(a,l,m,o)
p.push(k.av(0))}}return p},
eg(a){t.y.a(a)
return this.hs(a,new A.kK(this,a))},
jG(a){t.y.a(a)
return this.hs(a,new A.kJ(this,a))},
cC(a){var s,r,q,p,o=this.r
o===$&&A.b("points")
s=this.at
r=A.n0(0,B.d.b_(o.length,s),a)
q=r.a
o=this.r
p=s*q
s*=q+1
A.aF(p,s,o.length)
return A.mW(A.bu(o,p,s,A.v(o).c).av(0)).$1(r.b)},
jt(){var s,r,q,p=A.a([],t.Q)
for(s=A.J(this.at,0,1),r=s.length,q=0;q<s.length;s.length===r||(0,A.e)(s),++q)p.push(this.dn(s[q]))
return p},
dn(a){var s=this.r
s===$&&A.b("points")
s=A.jH(s,new A.kD(this,a),t.V)
return A.h(s,!0,s.$ti.h("j.E"))},
js(){var s=this,r=s.r
r===$&&A.b("points")
if(r.length===1)return r
r=t.b5
r=A.nw(A.h(new A.aB(A.a([s.dn(0),s.dn(s.at-1)],t.Q),r),!0,r.h("j.E")),t.V)
return A.h(r,!0,r.$ti.h("j.E"))},
ef(){var s,r,q,p=A.a([],t.l)
for(s=this.df(),r=s.length,q=0;q<s.length;s.length===r||(0,A.e)(s),++q)B.a.H(p,s[q].js())
return p},
ju(){var s,r,q,p,o,n,m=this.r
m===$&&A.b("points")
s=4*B.d.b_(m.length,this.at)+1
m=t.l
r=A.a([],m)
for(q=A.ff(s,1,0).aW(0),p=q.length,o=0;o<q.length;q.length===p||(0,A.e)(q),++o)r.push(this.cC(q[o]))
m=A.a([],m)
for(q=A.J(s-1,0,1),p=q.length,o=0;o<q.length;q.length===p||(0,A.e)(q),++o){n=q[o]
if(typeof n!=="number")return n.K()
m.push(B.a.k(r,n+1).M(0,B.a.k(r,n)))}r=t.aQ
return A.m2(A.h(new A.H(m,t.eL.a(new A.kI()),r),!0,r.h("B.E")),t.W)},
i7(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1="points"
t.bX.a(a2)
a0.mj(a2)
s=a0.r
s===$&&A.b(a1)
s=s.length
r=a2.r
r===$&&A.b(a1)
if(s===r.length)return
for(s=[a0,a2],r=t.l,q=t.y,p=0;p<2;++p){o=s[p]
n=o.r
n===$&&A.b(a1)
if(n.length===0){n=q.a(A.a([o.aO(B.e)],r))
B.a.H(o.r,n)}n=o.r
if(B.d.a7(n.length,o.at)===1)o.cS(B.a.gp(n))}s=t.V
m=a0.eg(A.h(a0.r,!0,s))
l=a2.eg(A.h(a2.r,!0,s))
k=Math.max(m.length,l.length)
j=A.a([],r)
i=A.a([],r)
h=a0.at
g=new A.kG(h)
for(s=A.J(k,0,1),r=s.length,p=0;p<s.length;s.length===r||(0,A.e)(s),++p){f=s[p]
e=g.$2(m,f)
d=g.$2(l,f)
n=J.X(d)
c=J.X(e)
b=Math.max(0,B.d.b_(n.gm(d)-c.gm(e),h))
a=Math.max(0,B.d.b_(c.gm(e)-n.gm(d),h))
e=a0.fi(b,e)
d=a0.fi(a,d)
B.a.H(j,e)
B.a.H(i,d)}a0.saR(q.a(j))
a2.saR(q.a(i))},
fi(a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6="No element"
t.y.a(a8)
if(a8.length===1){s=A.a([],t.l)
for(r=A.J(this.at*a7,0,1),q=r.length,p=0;p<r.length;r.length===q||(0,A.e)(r),++p)B.a.H(s,a8)
return s}o=this.ea(a8)
n=o.length
m=n+a7
s=t.t
r=A.a([],s)
for(q=A.J(m,0,1),l=q.length,p=0;p<q.length;q.length===l||(0,A.e)(q),++p){k=q[p]
if(typeof k!=="number")return k.v()
r.push(B.h.b_(k*n,m))}q=A.a([],s)
for(l=A.J(n,0,1),j=l.length,i=t.S,p=0;p<l.length;l.length===j||(0,A.e)(l),++p){k=l[p]
h=A.a([],s)
for(g=r.length,f=J.bi(k),e=0;e<r.length;r.length===g||(0,A.e)(r),++e)h.push(f.W(k,r[e])?1:0)
q.push(A.m2(h,i))}d=A.a([],t.l)
for(s=new A.aB(A.a([o,q],t.bo),t.c2),s=s.gI(s),r=t.W,q=t.b,l=t.lx,j=t.z,i=t.cn;s.q();){c=s.b
if(c==null)c=A.L(A.aH(a6))
h=c.length
if(0>=h)return A.c(c,0)
b=i.a(c[0])
if(1>=h)return A.c(c,1)
a=A.ff(A.a4(c[1])+1,1,0).aW(0)
for(h=new A.aB(A.a([a,A.ck(a,r)],q),l),h=h.gI(h),g=b.a,f=b.b,a0=b.c,a1=b.d;h.q();){a2=h.b
if(a2==null)a2=A.L(A.aH(a6))
a3=A.h5([g,f,a0,a1],!1,j)
a4=a2.length
if(0>=a4)return A.c(a2,0)
a5=a2[0]
if(1>=a4)return A.c(a2,1)
B.a.H(d,A.m_(new A.aN(a3,A.v(a3).h("aN<1,f>")),a5,a2[1]))}}return d},
mj(a){var s,r,q,p,o,n,m,l,k=new A.kE(),j=new A.kF()
for(s=["fillColors","strokeColors","backgroundStrokeColors"],r=t.G,q=0;q<3;++q){p=s[q]
o=k.$2(p,this)
n=k.$2(p,a)
m=J.X(o)
l=J.X(n)
if(m.gm(o)>l.gm(n))j.$3(p,a,A.cL(n,m.gm(o),r))
else if(l.gm(n)>m.gm(o))j.$3(p,this,A.cL(o,l.gm(n),r))}},
fL(){var s=this.aO(B.e),r=A.o3(s)
r.iT(this)
return r},
iQ(a,b,c){var s,r=this,q=t.bX
q.a(a)
q.a(b)
r.sc7(A.n1(a.bs(),b.bs(),c))
r.sbJ(A.n1(a.cK(),b.cK(),c))
r.scq(A.n1(a.bt(!0),b.bt(!0),c))
q=t.W
r.saG(A.p1(a.gaG(),b.gaG(),c,q))
r.smt(A.p1(a.x,b.x,c,q))
s=new A.kM()
if(c===1){q=b.ax
r.sc7(q!=null?s.$1(q):null)
q=b.ay
r.sbJ(q!=null?s.$1(q):null)
q=b.ch
r.scq(q!=null?s.$1(q):null)
r.saG(b.gaG())
r.x=b.x}},
j_(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e="points"
if(b<=0&&c>=1){s=a.r
s===$&&A.b(e)
f.saR(t.y.a(A.h(s,!0,t.V)))
return}s=a.r
s===$&&A.b(e)
r=t.y
q=a.ea(r.a(A.h(s,!0,t.V)))
p=q.length
o=A.n0(0,p,b)
n=A.n0(0,p,c)
m=o.a
l=o.b
k=n.a
j=n.b
f.saR(r.a(A.a([],t.l)))
if(p===0)return
s=q.length
if(m===k){if(m>>>0!==m||m>=s)return A.c(q,m)
s=J.fi(q[m])
s=r.a(A.m_(new A.aN(s,A.v(s).h("aN<1,f>")),l,j))
r=f.r
r===$&&A.b(e)
B.a.H(r,s)}else{if(m>>>0!==m||m>=s)return A.c(q,m)
s=J.fi(q[m])
s=r.a(A.m_(new A.aN(s,A.v(s).h("aN<1,f>")),l,1))
i=f.r
i===$&&A.b(e)
B.a.H(i,s)
for(s=m+1,A.aF(s,k,q.length),s=A.bu(q,s,k,A.v(q).c),i=s.$ti,s=new A.K(s,s.gm(s),i.h("K<B.E>")),h=t.z,i=i.h("B.E");s.q();){g=s.d
if(g==null)g=i.a(g)
g=A.h5([g.a,g.b,g.c,g.d],!1,h)
g=r.a(new A.aN(g,A.v(g).h("aN<1,f>")))
B.a.H(f.r,g)}if(k>>>0!==k||k>=q.length)return A.c(q,k)
s=J.fi(q[k])
s=r.a(A.m_(new A.aN(s,A.v(s).h("aN<1,f>")),0,j))
B.a.H(f.r,s)}},
df(){var s,r,q,p,o=A.a([],t.Z)
for(s=this.bV(),r=s.length,q=0;q<s.length;s.length===r||(0,A.e)(s),++q){p=s[q]
if(p instanceof A.P)o.push(p)}return o},
saG(a){this.w=A.bH(a)},
smt(a){this.x=A.bH(a)},
sc7(a){this.ax=t.q.a(a)},
sbJ(a){this.ay=t.q.a(a)},
scq(a){this.ch=t.q.a(a)},
gaG(){return this.w},
gdG(){return this.y}}
A.a_.prototype={
$1(a){return t.G.a(a).t()},
$S:7}
A.a0.prototype={
$1(a){return t.G.a(a).t()},
$S:7}
A.a1.prototype={
$1(a){return t.G.a(a).t()},
$S:7}
A.kN.prototype={
$1(a){return!(t.j.a(a) instanceof A.P)},
$S:13}
A.kO.prototype={
$1(a){return!(t.j.a(a) instanceof A.P)},
$S:13}
A.kH.prototype={
$2(a,b){t.V.a(b)
return a<J.W(this.a.a)-this.b},
$S:27}
A.kK.prototype={
$1(a){var s,r,q
A.a4(a)
s=this.b
r=a-1
q=s.length
if(!(r>=0&&r<q))return A.c(s,r)
r=s[r]
if(!(a>=0&&a<q))return A.c(s,a)
return!this.a.iq(r,s[a])},
$S:11}
A.kJ.prototype={
$1(a){var s,r,q
A.a4(a)
s=this.b
r=a-1
q=s.length
if(!(r>=0&&r<q))return A.c(s,r)
r=s[r]
if(!(a>=0&&a<q))return A.c(s,a)
return!this.a.f0(r,s[a])},
$S:11}
A.kD.prototype={
$2(a,b){t.V.a(b)
return B.d.a7(a,this.a.at)===this.b},
$S:27}
A.kI.prototype={
$1(a){return Math.sqrt(t.V.a(a).b4())},
$S:26}
A.kG.prototype={
$2(a,b){var s,r,q,p
t.ls.a(a)
s=a.length
if(b>=s){s=A.a([],t.l)
for(r=A.J(this.a,0,1),q=r.length,p=0;p<r.length;r.length===q||(0,A.e)(r),++p)s.push(B.a.gp(B.a.gp(a)))
return s}if(!(b>=0))return A.c(a,b)
return a[b]},
$S:59}
A.kE.prototype={
$2(a,b){switch(a){case"fillColors":return b.bs()
case"strokeColors":return b.cK()
case"backgroundStrokeColors":return b.bt(!1)
default:throw A.d(u.v+a)}},
$S:60}
A.kF.prototype={
$3(a,b,c){t.ev.a(c)
switch(a){case"fillColors":b.sc7(c)
break
case"strokeColors":b.sbJ(c)
break
case"backgroundStrokeColors":b.scq(c)
break
default:throw A.d(u.v+a)}},
$S:92}
A.kM.prototype={
$1(a){var s=t.G
return A.h(J.p(t.ev.a(a),new A.kL(),s),!0,s)},
$S:62}
A.kL.prototype={
$1(a){return t.G.a(a).t()},
$S:7}
A.eB.prototype={}
A.c9.prototype={
ha(a){var s=a==null?A.a([],t.r):a
this.aX(t.a.a(s))},
t(){return A.r1(this)}}
A.eC.prototype={
t(){return A.r3(this)}}
A.dI.prototype={
l9(a,b,c,d){var s,r,q,p,o,n,m,l
if(c>0){s=1/c
r=s*d
q=A.ff(c+1,1,0).b6(0,1).M(0,s).K(0,r).aW(0)
p=A.a([],t.r)
for(o=q.length,n=0;n<q.length;q.length===o||(0,A.e)(q),++n){m=q[n]
if(typeof m!=="number")return m.K()
l=a.t()
l.j_(a,m,m+r)
p.push(l)}this.aX(t.a.a(p))}this.fk(a,!1)},
t(){return A.pX(this)}}
A.dy.prototype={
kx(a){this.d=a}}
A.fB.prototype={
fz(a){var s,r,q=this.d
q===$&&A.b("display")
s=q.b
s===$&&A.b("camera")
r=q.dD(a)
q=this.e
q===$&&A.b("ctx")
B.u.sfe(q,r.d8())
q=s.c
s=s.d
this.e.fillRect(0-q/2,0-s/2,q,s)},
ot(a){var s,r,q,p,o,n,m,l,k=this,j=a.r
j===$&&A.b("points")
j=t.y.a(A.h(j,!0,t.V))
s=k.d
s===$&&A.b("display")
s=s.b
s===$&&A.b("camera")
r=s.jf(a,j)
if(r.length===0)return
q=a.jG(r)
for(j=q.length,p="",o=0;o<q.length;q.length===j||(0,A.e)(q),++o)p+=k.jH(a,q[o])
n=A.qq(p)
k.ib(n,a,!0)
m=a.bs()
if(J.W(m)>1){j=k.e
j===$&&A.b("ctx")
B.u.sfe(j,k.iw(a,m))}else{l=k.d.dD(J.Y(a.bs(),0))
j=k.e
j===$&&A.b("ctx")
B.u.sfe(j,l.d8())}j=k.e
j===$&&A.b("ctx")
j.fill(n)
k.ib(n,a,!1)},
jH(a,b){var s,r,q,p,o,n,m,l,k,j
t.y.a(b)
s=a.ea(b)
r=J.b9(b)
q=r.gZ(b)
p="M "+A.k(q.a)+" "+A.k(q.b)
o=a.f0(r.gZ(b),r.gp(b))
for(r=s.length,n=0;n<r;++n){m=s[n]
l=m.b
k=m.c
j=m.d
p+=" C "+A.k(l.a)+" "+A.k(l.b)+" "+A.k(k.a)+" "+A.k(k.b)+" "+A.k(j.a)+" "+A.k(j.b)}return o?p+" Z":p},
iw(a,b){var s,r,q,p,o,n,m,l,k,j,i
t.ev.a(b)
s=a.jx()
r=t.y.a(A.a([s.a,s.b],t.l))
q=this.d
q===$&&A.b("display")
q=q.b
q===$&&A.b("camera")
p=q.jf(a,r)
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
o=J.X(b)
m=1/(o.gm(b)-1)
l=A.mV(m+1,0,m).aW(0)
for(r=A.J(o.gm(b),0,1),n=r.length,k=0;k<r.length;r.length===n||(0,A.e)(r),++k){j=r[k]
i=this.d.dD(o.k(b,j))
q.addColorStop(B.a.k(l,j),i.d8())}return q},
ib(a,b,c){var s,r,q,p,o,n=this,m=c?b.x:b.gaG()
if(m===0)return
s=b.bt(c)
r=n.d
r===$&&A.b("display")
r=r.b
r===$&&A.b("camera")
r=r.c
q=n.e
q===$&&A.b("ctx")
q.lineWidth=m*0.01*(r/14.222222222222221)
r=J.b9(s)
p=r.ct(s,new A.iS())
if(r.gan(s)||p)return
if(r.gm(s)>1)B.u.sh5(n.e,n.iw(b,s))
else{o=n.d.dD(J.ix(b.bt(c)))
B.u.sh5(n.e,o.d8())}B.u.kP(n.e,a)}}
A.iS.prototype={
$1(a){return t.G.a(a).d===0},
$S:63}
A.kf.prototype={
lc(){this.f=new A.iP(B.a5)
new A.ic().le(0)
this.shc(t.a.a(A.a([],t.r)))},
cI(){var s=0,r=A.f9(t.z),q=1,p,o=this,n,m,l,k
var $async$cI=A.fb(function(a,b){if(a===1){p=b
s=q}while(true)switch(s){case 0:l=o.w
l===$&&A.b("display")
l.eV()
s=2
return A.cJ(null,$async$cI)
case 2:q=4
s=7
return A.cJ(o.cW(),$async$cI)
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
m.fz(l.f)
l=o.f
m=o.d
m===$&&A.b("mobjects")
l.j8(m)
s=8
return A.cJ(null,$async$cI)
case 8:o.w.oK()
return A.f5(null,r)
case 1:return A.f4(p,r)}})
return A.f6($async$cI,r)},
oL(a){var s,r,q=this.d
q===$&&A.b("mobjects")
s=q.length
r=0
for(;r<q.length;q.length===s||(0,A.e)(q),++r)q[r].jh(a)},
aX(a){var s,r,q=this,p=t.a
p.a(a)
s=A.h(a,!0,t.j)
r=q.f
r===$&&A.b("camera")
B.a.H(s,r.iC(a))
r=q.d
r===$&&A.b("mobjects")
q.shc(p.a(q.jD(r,s)))
B.a.dT(q.d,0,a)},
jD(a,b){var s,r=t.a
r.a(a)
r.a(b)
s=A.a([],t.r)
new A.kg(s).$2(a,A.mn(b,A.v(b).c))
return s},
e7(){var s=0,r=A.f9(t.z),q=this,p,o,n,m
var $async$e7=A.fb(function(a,b){if(a===1)return A.f4(b,r)
while(true)switch(s){case 0:p=0
case 2:if(!(p<1)){s=3
break}o=q.w
o===$&&A.b("display")
s=4
return A.cJ(o.dY(),$async$e7)
case 4:n=b
p+=n
q.oL(n)
o=q.f
o===$&&A.b("camera")
m=o.r
m===$&&A.b("display")
m=m.a
m===$&&A.b("renderer")
m.fz(o.f)
o=q.f
m=q.d
m===$&&A.b("mobjects")
o.j8(m)
q.a+=n
s=2
break
case 3:return A.f5(null,r)}})
return A.f6($async$e7,r)},
dI(){var s=0,r=A.f9(t.z),q=this
var $async$dI=A.fb(function(a,b){if(a===1)return A.f4(b,r)
while(true)switch(s){case 0:case 2:if(!!0){s=3
break}s=4
return A.cJ(q.e7(),$async$dI)
case 4:s=2
break
case 3:return A.f5(null,r)}})
return A.f6($async$dI,r)},
shc(a){this.d=t.a.a(a)}}
A.kg.prototype={
$2(a,b){var s,r,q,p,o,n
t.a.a(a)
t.ns.a(b)
for(s=a.length,r=this.a,q=0;q<a.length;a.length===s||(0,A.e)(a),++q){p=a[q]
if(b.G(0,p))continue
o=p.bV()
n=b.nO(0,A.mn(o,A.v(o).c))
if(n.a!==0){o=p.d
o===$&&A.b("submobjects")
this.$2(o,n)}else B.a.n(r,p)}},
$S:64}
A.m3.prototype={
$2(a,b){var s=this.a
return s.a(s.a(a)+s.a(b))},
$S(){return this.a.h("0(0,0)")}}
A.m1.prototype={
$1(a){return A.a4(a)/this.a*this.b},
$S:65}
A.m4.prototype={
$2(a,b){this.a.a(b)
return a!==0},
$S(){return this.a.h("y(i,0)")}}
A.lU.prototype={
$1(a){return t.G.a(a).av(0)},
$S:28}
A.lV.prototype={
$1(a){return t.G.a(a).av(0)},
$S:28}
A.lW.prototype={
$1(a){var s
t.bd.a(a)
s=J.X(a)
return new A.O(s.k(a,0),s.k(a,1),s.k(a,2),s.k(a,3))},
$S:67}
A.lF.prototype={
$1(a){var s,r,q,p,o,n,m,l=A.a([],t.l)
for(s=A.is(this.a,t.V),r=s.length,q=1-a,p=this.b,o=0;o<s.length;s.length===r||(0,A.e)(s),++o){n=s[o]
m=n.a
if(typeof m!=="number")return A.bw(m)
l.push(J.cM(n.b,Math.pow(q,p-m)*Math.pow(a,m)*A.oP(p,m,!0)))}return B.a.b5(l,new A.lE())},
$S:18}
A.lE.prototype={
$2(a,b){var s=t.V
return s.a(a).K(0,s.a(b))},
$S:68}
A.O.prototype={
p_(a){return new A.O(this.a,this.b,this.c,a)},
t(){var s=this
return new A.O(s.a,s.b,s.c,s.d)},
av(a){var s=this,r=A.a([s.a,s.b,s.c],t.n)
r.push(s.d)
return r},
d8(){var s=this
return"rgba("+B.h.bp(s.a*255)+", "+B.h.bp(s.b*255)+", "+B.h.bp(s.c*255)+", "+A.k(s.d)+")"},
l(a){return this.d8()}}
A.lt.prototype={
$1(a){return A.ch(a,16)/255},
$S:69}
A.cR.prototype={
W(a,b){var s,r=this
if(b==null)return!1
if(!(b instanceof A.cR&&r.a===b.a&&r.b===b.b))s=typeof b=="number"&&r.a===b&&r.b===0
else s=!0
return s}}
A.bm.prototype={
l(a){return"EventType."+this.b}}
A.b0.prototype={}
A.j2.prototype={
gc3(){var s=this.a
s===$&&A.b("eventListeners")
return s},
la(){var s,r,q=A.bc(t.cY,t.oR)
for(s=t.fO,r=0;r<6;++r)q.u(0,B.bl[r],A.a([],s))
this.slk(t.fY.a(q))},
ck(a,b,c){var s,r,q
A.ir(c,t.e,"IEvent","_dispatchOnListnersList")
c.a(a)
s=A.h(c.h("n<b1<0>>").a(b),!0,c.h("b1<0>"))
r=!1
while(!0){if(!(!r&&s.length!==0))break
q=B.a.gp(s)
B.a.a6(s,q)
q.$ti.c.a(a)
r=q.a.$1(a)}},
dK(a){var s,r=this
switch(a.a){case B.C:t.m6.a(a)
s=r.gc3().k(0,B.C)
s.toString
r.ck(a,s,t.e)
break
case B.x:t.oJ.a(a)
s=r.gc3().k(0,B.x)
s.toString
r.ck(a,s,t.e)
break
case B.y:t.nB.a(a)
s=r.gc3().k(0,B.y)
s.toString
r.ck(a,s,t.e)
break
case B.z:t.gn.a(a)
s=r.gc3().k(0,B.z)
s.toString
r.ck(a,s,t.e)
break
case B.M:t.lX.a(a)
s=r.gc3().k(0,B.M)
s.toString
r.ck(a,s,t.e)
break
case B.N:t.am.a(a)
s=r.gc3().k(0,B.N)
s.toString
r.ck(a,s,t.e)
break}},
slk(a){this.a=t.fY.a(a)}}
A.b1.prototype={}
A.h6.prototype={}
A.ee.prototype={}
A.c1.prototype={}
A.c2.prototype={}
A.c0.prototype={}
A.k1.prototype={}
A.kq.prototype={
$1(a){return A.ip(a)!=null},
$S:8}
A.lG.prototype={
$2(a,b){return A.a4(a)*A.a4(b)},
$S:10}
A.lH.prototype={
$2(a,b){return A.a4(a)*A.a4(b)},
$S:10}
A.bl.prototype={
K(a,b){var s,r
if(typeof b=="number"){s=this.b
s===$&&A.b("shape")
r=A.bW(b,s)}else{t.A.a(b)
r=b}return this.bT(0,new A.iH(r))},
M(a,b){var s,r
if(typeof b=="number"){s=this.b
s===$&&A.b("shape")
r=A.bW(b,s)}else{t.A.a(b)
r=b}return this.bT(0,new A.iK(r))},
v(a,b){var s,r
if(typeof b=="number"){s=this.b
s===$&&A.b("shape")
r=A.bW(b,s)}else{t.A.a(b)
r=b}return this.bT(0,new A.iJ(r))},
b6(a,b){var s,r=this.b
r===$&&A.b("shape")
s=A.bW(b,r)
return this.bT(0,new A.iI(s))},
bT(a,b){var s,r,q
t.iJ.a(b)
s=this.a
s===$&&A.b("values")
s=A.is(s,t.bd)
r=A.v(s)
q=r.h("H<1,n<D>>")
q=A.h(new A.H(s,r.h("n<D>(1)").a(new A.iG(b)),q),!0,q.h("B.E"))
r=this.b
r===$&&A.b("shape")
return A.ay(r,q)},
bb(a){var s,r
t.o.a(a)
s=a.a
r=this.a
r===$&&A.b("values")
if(s>>>0!==s||s>=r.length)return A.c(r,s)
return J.Y(r[s],a.b)},
bd(a,b){var s,r,q,p,o
t.o.a(a)
s=a.a
r=this.b
r===$&&A.b("shape")
q=r.a
if(typeof s!=="number")return s.a7()
if(typeof q!=="number")return A.bw(q)
p=B.d.a7(s,q)
q=a.b
r=r.b
if(typeof q!=="number")return q.a7()
if(typeof r!=="number")return A.bw(r)
o=B.h.a7(q,r)
r=this.a
r===$&&A.b("values")
if(!(p>=0&&p<r.length))return A.c(r,p)
J.m7(r[p],o,b)},
lT(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.b
e===$&&A.b("shape")
s=e.a
if(typeof s!=="number")return s.M()
e=e.b
if(typeof e!=="number")return e.M()
r=A.a([],t.b)
for(q=A.J(f.b.a,0,1),p=q.length,o=t.n,n=0;n<q.length;q.length===p||(0,A.e)(q),++n){m=q[n]
if(!J.T(m,a)){l=A.a([],o)
for(k=A.J(f.b.a,0,1),j=k.length,i=0;i<k.length;k.length===j||(0,A.e)(k),++i){h=k[i]
if(!J.T(h,b)){g=f.a
g===$&&A.b("values")
l.push(J.Y(B.a.k(g,m),h))}}r.push(l)}}return A.ay(new A.M(s-1,e-1,t.o),r)},
fJ(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.b
h===$&&A.b("shape")
if(J.T(h.a,2)){h=i.a
h===$&&A.b("values")
if(0>=h.length)return A.c(h,0)
s=J.Y(h[0],0)
h=i.a
if(0>=h.length)return A.c(h,0)
r=J.Y(h[0],1)
h=i.a
if(1>=h.length)return A.c(h,1)
q=J.Y(h[1],0)
h=i.a
if(1>=h.length)return A.c(h,1)
return s*J.Y(h[1],1)-r*q}h=i.b
p=h.a
if(typeof p!=="number")return p.M()
h=h.b
if(typeof h!=="number")return h.M()
o=new A.M(p-1,h-1,t.o)
h=A.a([],t.n)
for(p=A.J(i.b.a,0,1),n=p.length,m=0;m<p.length;p.length===n||(0,A.e)(p),++m){l=p[m]
if(typeof l!=="number")return l.a7()
k=B.h.a7(l,2)===0?1:-1
j=i.a
j===$&&A.b("values")
if(0>=j.length)return A.c(j,0)
h.push(k*A.bW(J.Y(j[0],l),o).v(0,i.lT(0,l)).fJ())}return A.m2(h,t.W)},
jy(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8="values"
if(this.fJ()===0)throw A.d("This matrix is not inversible")
s=this.b
s===$&&A.b("shape")
r=s.a
q=s.b
p=this.t()
o=A.ft(r)
for(s=A.J(q,0,1),n=s.length,m=r-1,l=q-1,k=t.o,j=0;j<s.length;s.length===n||(0,A.e)(s),++j){i=s[j]
for(h=i,g=-1,f=-1;h!==r;++h){k.a(new A.M(h,i,k))
e=p.a
e===$&&A.b(a8)
if(!(h>=0&&h<e.length))return A.c(e,h)
d=J.Y(e[h],i)
if(d>f){f=d
g=h}}e=p.a
e===$&&A.b(a8)
c=e.length
if(!(g>=0&&g<c))return A.c(e,g)
b=e[g]
if(i>>>0!==i||i>=c)return A.c(e,i)
e[g]=e[i]
B.a.u(e,i,b)
e=o.a
e===$&&A.b(a8)
c=e.length
if(!(g<c))return A.c(e,g)
a=e[g]
if(i>>>0!==i||i>=c)return A.c(e,i)
e[g]=e[i]
B.a.u(e,i,a)
e=J.X(b)
a0=e.k(b,i)
for(a1=i;a1<q;++a1){c=e.k(b,a1)
if(typeof c!=="number")return c.b6()
e.u(b,a1,c/a0)}for(c=J.X(a),a1=l;a1>=0;--a1){a2=c.k(a,a1)
if(typeof a2!=="number")return a2.b6()
c.u(a,a1,a2/a0)}for(a1=i+1,g=m;g>=0;--g)if(g!==i){a2=p.a
if(!(g<a2.length))return A.c(a2,g)
a3=a2[g]
a2=o.a
if(!(g<a2.length))return A.c(a2,g)
a4=a2[g]
a2=J.X(a3)
a0=a2.k(a3,i)
for(a5=a1;a5!==q;++a5){a6=a2.k(a3,a5)
a7=e.k(b,a5)
if(typeof a7!=="number")return a7.v()
if(typeof a6!=="number")return a6.M()
a2.u(a3,a5,a6-a7*a0)}for(a2=J.X(a4),a5=l;a5>0;--a5){a6=a2.k(a4,a5)
a7=c.k(a,a5)
if(typeof a7!=="number")return a7.v()
if(typeof a6!=="number")return a6.M()
a2.u(a4,a5,a6-a7*a0);--a5
a7=a2.k(a4,a5)
a6=c.k(a,a5)
if(typeof a6!=="number")return a6.v()
if(typeof a7!=="number")return a7.M()
a2.u(a4,a5,a7-a6*a0)}if(a5===0){a6=a2.k(a4,0)
a7=c.k(a,0)
if(typeof a7!=="number")return a7.v()
if(typeof a6!=="number")return a6.M()
a2.u(a4,0,a6-a7*a0)}}}return o},
aW(a){var s,r,q=this.a
q===$&&A.b("values")
s=A.v(q)
r=s.h("H<1,D>")
return A.h(new A.H(q,s.h("D(1)").a(new A.iE(a)),r),!0,r.h("B.E"))},
gjg(){return this.bT(0,new A.iL(this))},
c9(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1="values",a2=this.b
a2===$&&A.b("shape")
s=a2.a
r=a2.b
a2=a3.b
a2===$&&A.b("shape")
q=a2.b
p=A.bW(0,new A.M(s,q,t.o))
for(a2=A.J(s,0,1),o=a2.length,n=0;n<a2.length;a2.length===o||(0,A.e)(a2),++n){m=a2[n]
for(l=A.J(q,0,1),k=l.length,j=0;j<l.length;l.length===k||(0,A.e)(l),++j){i=l[j]
for(h=A.J(r,0,1),g=h.length,f=0;f<h.length;h.length===g||(0,A.e)(h),++f){e=h[f]
d=p.a
d===$&&A.b(a1)
d=B.a.k(d,m)
c=J.X(d)
b=c.k(d,i)
a=this.a
a===$&&A.b(a1)
a=J.Y(B.a.k(a,m),e)
a0=a3.a
a0===$&&A.b(a1)
a0=J.Y(B.a.k(a0,e),i)
if(typeof a!=="number")return a.v()
if(typeof a0!=="number")return A.bw(a0)
if(typeof b!=="number")return b.K()
c.u(d,i,b+a*a0)}}}return p},
t(){return this.ml(new A.iD())},
ml(a){return this.bT(0,new A.iC(t.f3.a(a)))},
iI(){var s,r,q,p=A.a([],t.n),o=this.a
o===$&&A.b("values")
s=o.length
r=0
for(;r<o.length;o.length===s||(0,A.e)(o),++r)for(q=J.ab(o[r]);q.q();)p.push(q.gC())
return p},
l(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.b
b===$&&A.b("shape")
b=A.k(b.a)
s=A.k(c.b.b)
r=A.a([],t.t)
q=c.a
q===$&&A.b("values")
p=q.length
o=0
for(;o<q.length;q.length===p||(0,A.e)(q),++o)for(n=J.ab(q[o]);n.q();)r.push(B.h.fE(n.gC(),6).length)
m=B.a.ff(r,6,B.a0,t.S)
for(r=c.a,q=r.length,p=m+4,n=t.s,l="",o=0;o<r.length;r.length===q||(0,A.e)(r),++o){l+="      "
for(k=J.ab(r[o]);k.q();){j=k.gC()
i=j<0?"-":" "
j=Math.abs(j)
h=B.h.fE(j,6)
g=A.a([],n)
for(h=A.J(p-h.length,0,1),f=h.length,e=0;e<h.length;h.length===f||(0,A.e)(h),++e)g.push(" ")
d=B.a.aU(g)
l=l+i+B.h.fE(j,6)+d}l+="\n"}return b+"x"+s+" matrix\n"+l},
ov(a,b){var s,r,q,p,o,n,m,l,k=this.iI(),j=A.bW(0,new A.M(a,b,t.o))
for(s=A.is(k,t.W),r=s.length,q=0;q<s.length;s.length===r||(0,A.e)(s),++q){p=s[q]
o=p.a
n=B.d.a7(o,a)
m=B.d.b_(o,a)
l=j.a
l===$&&A.b("values")
if(!(n<l.length))return A.c(l,n)
J.m7(l[n],m,p.b)}return j},
slg(a){this.b=t.o.a(a)}}
A.iH.prototype={
$2(a,b){return a+this.a.bb(t.o.a(b))},
$S:3}
A.iK.prototype={
$2(a,b){return a-this.a.bb(t.o.a(b))},
$S:3}
A.iJ.prototype={
$2(a,b){return a*this.a.bb(t.o.a(b))},
$S:3}
A.iI.prototype={
$2(a,b){return a/this.a.bb(t.o.a(b))},
$S:3}
A.iG.prototype={
$1(a){var s,r,q
t.kk.a(a)
s=A.is(a.b,t.W)
r=A.v(s)
q=r.h("H<1,D>")
return A.h(new A.H(s,r.h("D(1)").a(new A.iF(this.a,a)),q),!0,q.h("B.E"))},
$S:71}
A.iF.prototype={
$1(a){t.d7.a(a)
return this.a.$2(a.b,new A.M(this.b.a,a.a,t.o))},
$S:72}
A.iE.prototype={
$1(a){return J.Y(t.bd.a(a),this.a)},
$S:73}
A.iL.prototype={
$2(a,b){var s=t.o
s.a(b)
return this.a.bb(new A.M(b.b,b.a,s))},
$S:3}
A.iD.prototype={
$1(a){return a},
$S:9}
A.iC.prototype={
$2(a,b){t.o.a(b)
return this.a.$1(a)},
$S:3}
A.m0.prototype={
$2(a,b){var s=t.A
return s.a(a).c9(s.a(b))},
$S:75}
A.f.prototype={
W(a,b){if(b==null)return!1
return b instanceof A.f&&this.a===b.a&&this.b===b.b&&this.c===b.c},
K(a,b){var s=this
if(typeof b=="number")return new A.f(s.a+b,s.b+b,s.c+b)
else if(b instanceof A.f)return new A.f(s.a+b.a,s.b+b.b,s.c+b.c)
else throw A.d("Vector3 only support addition by num or Vector3")},
M(a,b){return new A.f(this.a-b.a,this.b-b.b,this.c-b.c)},
v(a,b){var s=this
if(typeof b=="number")return new A.f(s.a*b,s.b*b,s.c*b)
else if(b instanceof A.f)return new A.f(s.a*b.a,s.b*b.b,s.c*b.c)
else throw A.d("Vector3 only support multiplication by num or Vector3")},
b6(a,b){return new A.f(this.a/b,this.b/b,this.c/b)},
b4(){var s=this.a,r=this.b,q=this.c
return s*s+r*r+q*q},
al(a){switch(a){case 0:return this.a
case 1:return this.b
case 2:return this.c
default:throw A.d("No component at index "+a+" on a vector3")}},
oI(){var s=t.n
s=A.ay(null,A.a([A.a([this.a],s),A.a([this.b],s),A.a([this.c],s)],t.b))
return s},
fF(a,b,c){var s=a==null?this.a:a,r=b==null?this.b:b
return new A.f(s,r,c==null?this.c:c)},
oY(a){return this.fF(a,null,null)},
oZ(a){return this.fF(null,a,null)},
jq(a){return this.fF(null,null,a)},
jp(a,b){if(a===0)return this.oY(b)
else if(a===1)return this.oZ(b)
else if(a===2)return this.jq(b)
else throw A.d("Cannot index a vector3 with index="+a)},
c9(a){var s=A.ft(3).bT(0,new A.kP(a)).c9(this.oI()),r=t.o
return new A.f(s.bb(new A.M(0,0,r)),s.bb(new A.M(1,0,r)),s.bb(new A.M(2,0,r)))},
ix(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cT(){var s=this.a
if(s===0&&this.b===0)return 0
return Math.atan2(this.b,s)},
l(a){return"vec3("+A.k(this.a)+", "+A.k(this.b)+", "+A.k(this.c)+")"}}
A.kP.prototype={
$2(a,b){var s,r,q,p
t.o.a(b)
s=b.a
r=this.a
q=r.b
q===$&&A.b("shape")
p=q.a
if(typeof s!=="number")return s.e9()
if(typeof p!=="number")return A.bw(p)
if(s<p){s=b.b
q=q.b
if(typeof s!=="number")return s.e9()
if(typeof q!=="number")return A.bw(q)
q=s>=q
s=q}else s=!0
return s?a:r.bb(b)},
$S:3}
A.iU.prototype={
m2(a,b){var s,r,q=t.D
A.oK("absolute",A.a([b,null,null,null,null,null,null,null,null,null,null,null,null,null,null],q))
s=this.a
s=s.aV(b)>0&&!s.bS(b)
if(s)return b
s=A.oS()
r=A.a([s,b,null,null,null,null,null,null,null,null,null,null,null,null,null,null],q)
A.oK("join",r)
return this.nR(new A.an(r,t.na))},
nR(a){var s,r,q,p,o,n,m,l,k,j
t.bq.a(a)
for(s=a.$ti,r=s.h("y(j.E)").a(new A.iV()),q=a.gI(a),s=new A.cF(q,r,s.h("cF<j.E>")),r=this.a,p=!1,o=!1,n="";s.q();){m=q.gC()
if(r.bS(m)&&o){l=A.hi(m,r)
k=n.charCodeAt(0)==0?n:n
n=B.b.A(k,0,r.cH(k,!0))
l.b=n
if(r.d4(n))B.a.u(l.e,0,r.gce())
n=""+l.l(0)}else if(r.aV(m)>0){o=!r.bS(m)
n=""+m}else{j=m.length
if(j!==0){if(0>=j)return A.c(m,0)
j=r.f1(m[0])}else j=!1
if(!j)if(p)n+=r.gce()
n+=m}p=r.d4(m)}return n.charCodeAt(0)==0?n:n},
cg(a,b){var s=A.hi(b,this.a),r=s.d,q=A.v(r),p=q.h("ai<1>")
s.siX(A.h(new A.ai(r,q.h("y(1)").a(new A.iW()),p),!0,p.h("j.E")))
r=s.b
if(r!=null)B.a.bD(s.d,0,r)
return s.d},
fo(a){var s
if(!this.lH(a))return a
s=A.hi(a,this.a)
s.fn()
return s.l(0)},
lH(a){var s,r,q,p,o,n,m,l,k=this.a,j=k.aV(a)
if(j!==0){if(k===$.iv())for(s=0;s<j;++s)if(B.b.E(a,s)===47)return!0
r=j
q=47}else{r=0
q=null}for(p=new A.a8(a).a,o=p.length,s=r,n=null;s<o;++s,n=q,q=m){m=B.b.J(p,s)
if(k.bE(m)){if(k===$.iv()&&m===47)return!0
if(q!=null&&k.bE(q))return!0
if(q===46)l=n==null||n===46||k.bE(n)
else l=!1
if(l)return!0}}if(q==null)return!0
if(k.bE(q))return!0
if(q===46)k=n==null||k.bE(n)||n===46
else k=!1
if(k)return!0
return!1},
or(a){var s,r,q,p,o,n,m=this,l='Unable to find a path to "',k=m.a,j=k.aV(a)
if(j<=0)return m.fo(a)
s=A.oS()
if(k.aV(s)<=0&&k.aV(a)>0)return m.fo(a)
if(k.aV(a)<=0||k.bS(a))a=m.m2(0,a)
if(k.aV(a)<=0&&k.aV(s)>0)throw A.d(A.nF(l+a+'" from "'+s+'".'))
r=A.hi(s,k)
r.fn()
q=A.hi(a,k)
q.fn()
j=r.d
p=j.length
if(p!==0){if(0>=p)return A.c(j,0)
j=J.T(j[0],".")}else j=!1
if(j)return q.l(0)
j=r.b
p=q.b
if(j!=p)j=j==null||p==null||!k.ft(j,p)
else j=!1
if(j)return q.l(0)
while(!0){j=r.d
p=j.length
if(p!==0){o=q.d
n=o.length
if(n!==0){if(0>=p)return A.c(j,0)
j=j[0]
if(0>=n)return A.c(o,0)
o=k.ft(j,o[0])
j=o}else j=!1}else j=!1
if(!j)break
B.a.e4(r.d,0)
B.a.e4(r.e,1)
B.a.e4(q.d,0)
B.a.e4(q.e,1)}j=r.d
p=j.length
if(p!==0){if(0>=p)return A.c(j,0)
j=J.T(j[0],"..")}else j=!1
if(j)throw A.d(A.nF(l+a+'" from "'+s+'".'))
j=t.N
B.a.dT(q.d,0,A.bC(r.d.length,"..",!1,j))
B.a.u(q.e,0,"")
B.a.dT(q.e,1,A.bC(r.d.length,k.gce(),!1,j))
k=q.d
j=k.length
if(j===0)return"."
if(j>1&&J.T(B.a.gp(k),".")){B.a.d6(q.d)
k=q.e
if(0>=k.length)return A.c(k,-1)
k.pop()
if(0>=k.length)return A.c(k,-1)
k.pop()
B.a.n(k,"")}q.b=""
q.j7()
return q.l(0)},
j0(a){var s,r,q=this,p=A.oE(a)
if(p.gaP()==="file"&&q.a===$.fg())return p.l(0)
else if(p.gaP()!=="file"&&p.gaP()!==""&&q.a!==$.fg())return p.l(0)
s=q.fo(q.a.fq(A.oE(p)))
r=q.or(s)
return q.cg(0,r).length>q.cg(0,s).length?s:r}}
A.iV.prototype={
$1(a){return A.aq(a)!==""},
$S:6}
A.iW.prototype={
$1(a){return A.aq(a).length!==0},
$S:6}
A.lC.prototype={
$1(a){A.ip(a)
return a==null?"null":'"'+a+'"'},
$S:76}
A.ct.prototype={
jE(a){var s,r=this.aV(a)
if(r>0)return B.b.A(a,0,r)
if(this.bS(a)){if(0>=a.length)return A.c(a,0)
s=a[0]}else s=null
return s},
ft(a,b){return a===b}}
A.k5.prototype={
j7(){var s,r,q=this
while(!0){s=q.d
if(!(s.length!==0&&J.T(B.a.gp(s),"")))break
B.a.d6(q.d)
s=q.e
if(0>=s.length)return A.c(s,-1)
s.pop()}s=q.e
r=s.length
if(r!==0)B.a.u(s,r-1,"")},
fn(){var s,r,q,p,o,n,m=this,l=A.a([],t.s)
for(s=m.d,r=s.length,q=0,p=0;p<s.length;s.length===r||(0,A.e)(s),++p){o=s[p]
n=J.bi(o)
if(!(n.W(o,".")||n.W(o,"")))if(n.W(o,"..")){n=l.length
if(n!==0){if(0>=n)return A.c(l,-1)
l.pop()}else ++q}else B.a.n(l,o)}if(m.b==null)B.a.dT(l,0,A.bC(q,"..",!1,t.N))
if(l.length===0&&m.b==null)B.a.n(l,".")
m.siX(l)
s=m.a
m.skg(A.bC(l.length+1,s.gce(),!0,t.N))
r=m.b
if(r==null||l.length===0||!s.d4(r))B.a.u(m.e,0,"")
r=m.b
if(r!=null&&s===$.iv()){r.toString
m.b=A.bj(r,"/","\\")}m.j7()},
l(a){var s,r,q,p=this,o=p.b
o=o!=null?""+o:""
for(s=0;s<p.d.length;++s,o=q){r=p.e
if(!(s<r.length))return A.c(r,s)
r=A.k(r[s])
q=p.d
if(!(s<q.length))return A.c(q,s)
q=o+r+A.k(q[s])}o+=A.k(B.a.gp(p.e))
return o.charCodeAt(0)==0?o:o},
siX(a){this.d=t.I.a(a)},
skg(a){this.e=t.I.a(a)}}
A.hk.prototype={
l(a){return"PathException: "+this.a},
$ibn:1}
A.kr.prototype={
l(a){return this.gai(this)}}
A.hn.prototype={
f1(a){return B.b.G(a,"/")},
bE(a){return a===47},
d4(a){var s=a.length
return s!==0&&B.b.J(a,s-1)!==47},
cH(a,b){if(a.length!==0&&B.b.E(a,0)===47)return 1
return 0},
aV(a){return this.cH(a,!1)},
bS(a){return!1},
fq(a){var s
if(a.gaP()===""||a.gaP()==="file"){s=a.gaN(a)
return A.mO(s,0,s.length,B.w,!1)}throw A.d(A.a7("Uri "+a.l(0)+" must have scheme 'file:'.",null))},
gai(){return"posix"},
gce(){return"/"}}
A.hN.prototype={
f1(a){return B.b.G(a,"/")},
bE(a){return a===47},
d4(a){var s=a.length
if(s===0)return!1
if(B.b.J(a,s-1)!==47)return!0
return B.b.bh(a,"://")&&this.aV(a)===s},
cH(a,b){var s,r,q,p,o=a.length
if(o===0)return 0
if(B.b.E(a,0)===47)return 1
for(s=0;s<o;++s){r=B.b.E(a,s)
if(r===47)return 0
if(r===58){if(s===0)return 0
q=B.b.aM(a,"/",B.b.ab(a,"//",s+1)?s+3:s)
if(q<=0)return o
if(!b||o<q+3)return q
if(!B.b.a_(a,"file://"))return q
if(!A.p3(a,q+1))return q
p=q+3
return o===p?p:q+4}}return 0},
aV(a){return this.cH(a,!1)},
bS(a){return a.length!==0&&B.b.E(a,0)===47},
fq(a){return a.l(0)},
gai(){return"url"},
gce(){return"/"}}
A.hS.prototype={
f1(a){return B.b.G(a,"/")},
bE(a){return a===47||a===92},
d4(a){var s=a.length
if(s===0)return!1
s=B.b.J(a,s-1)
return!(s===47||s===92)},
cH(a,b){var s,r,q=a.length
if(q===0)return 0
s=B.b.E(a,0)
if(s===47)return 1
if(s===92){if(q<2||B.b.E(a,1)!==92)return 1
r=B.b.aM(a,"\\",2)
if(r>0){r=B.b.aM(a,"\\",r+1)
if(r>0)return r}return q}if(q<3)return 0
if(!A.p2(s))return 0
if(B.b.E(a,1)!==58)return 0
q=B.b.E(a,2)
if(!(q===47||q===92))return 0
return 3},
aV(a){return this.cH(a,!1)},
bS(a){return this.aV(a)===1},
fq(a){var s,r
if(a.gaP()!==""&&a.gaP()!=="file")throw A.d(A.a7("Uri "+a.l(0)+" must have scheme 'file:'.",null))
s=a.gaN(a)
if(a.gbk(a)===""){if(s.length>=3&&B.b.a_(s,"/")&&A.p3(s,1))s=B.b.j9(s,"/","")}else s="\\\\"+a.gbk(a)+s
r=A.bj(s,"/","\\")
return A.mO(r,0,r.length,B.w,!1)},
mO(a,b){var s
if(a===b)return!0
if(a===47)return b===92
if(a===92)return b===47
if((a^b)!==32)return!1
s=a|32
return s>=97&&s<=122},
ft(a,b){var s,r
if(a===b)return!0
s=a.length
if(s!==b.length)return!1
for(r=0;r<s;++r)if(!this.mO(B.b.E(a,r),B.b.E(b,r)))return!1
return!0},
gai(){return"windows"},
gce(){return"\\"}}
A.hx.prototype={
gm(a){return this.c.length},
gnT(){return this.b.length},
h9(a,b){var s,r,q,p,o,n,m
for(s=this.c,r=s.length,q=this.b,p=0;p<r;++p){o=s[p]
if(o===13){n=p+1
if(n<r){if(!(n<r))return A.c(s,n)
m=s[n]!==10}else m=!0
if(m)o=10}if(o===10)B.a.n(q,p+1)}},
es(a,b,c){return A.mC(this,b,c)},
cJ(a){var s,r=this
if(a<0)throw A.d(A.aC("Offset may not be negative, was "+a+"."))
else if(a>r.c.length)throw A.d(A.aC("Offset "+a+u.D+r.gm(r)+"."))
s=r.b
if(a<B.a.gZ(s))return-1
if(a>=B.a.gp(s))return s.length-1
if(r.lE(a)){s=r.d
s.toString
return s}return r.d=r.lt(a)-1},
lE(a){var s,r,q,p=this.d
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
lt(a){var s,r,q=this.b,p=q.length,o=p-1
for(s=0;s<o;){r=s+B.d.aT(o-s,2)
if(!(r>=0&&r<p))return A.c(q,r)
if(q[r]>a)o=r
else s=r+1}return o},
aW(a){var s,r,q,p=this
if(a<0)throw A.d(A.aC("Offset may not be negative, was "+a+"."))
else if(a>p.c.length)throw A.d(A.aC("Offset "+a+" must be not be greater than the number of characters in the file, "+p.gm(p)+"."))
s=p.cJ(a)
r=p.b
if(!(s>=0&&s<r.length))return A.c(r,s)
q=r[s]
if(q>a)throw A.d(A.aC("Line "+s+" comes after offset "+a+"."))
return a-q},
de(a){var s,r,q,p
if(a<0)throw A.d(A.aC("Line may not be negative, was "+a+"."))
else{s=this.b
r=s.length
if(a>=r)throw A.d(A.aC("Line "+a+" must be less than the number of lines in the file, "+this.gnT()+"."))}q=s[a]
if(q<=this.c.length){p=a+1
s=p<r&&q>=s[p]}else s=!0
if(s)throw A.d(A.aC("Line "+a+" doesn't have 0 columns."))
return q}}
A.aY.prototype={
ga5(){return this.a.a},
gae(){return this.a.cJ(this.b)},
gam(){return this.a.aW(this.b)},
bf(a,b){var s,r=this.b
if(r<0)throw A.d(A.aC("Offset may not be negative, was "+r+"."))
else{s=this.a
if(r>s.c.length)throw A.d(A.aC("Offset "+r+u.D+s.gm(s)+"."))}},
gau(a){return this.b}}
A.ao.prototype={
ga5(){return this.a.a},
gm(a){return this.c-this.b},
gS(a){return A.bX(this.a,this.b)},
gU(){return A.bX(this.a,this.c)},
gV(a){return A.ac(B.v.b8(this.a.c,this.b,this.c),0,null)},
gaY(){var s=this,r=s.a,q=s.c,p=r.cJ(q)
if(r.aW(q)===0&&p!==0){if(q-s.b===0)return p===r.b.length-1?"":A.ac(B.v.b8(r.c,r.de(p),r.de(p+1)),0,null)}else q=p===r.b.length-1?r.c.length:r.de(p+1)
return A.ac(B.v.b8(r.c,r.de(r.cJ(s.b)),q),0,null)},
aH(a,b,c){var s,r=this.c,q=this.b
if(r<q)throw A.d(A.a7("End "+r+" must come after start "+q+".",null))
else{s=this.a
if(r>s.c.length)throw A.d(A.aC("End "+r+u.D+s.gm(s)+"."))
else if(q<0)throw A.d(A.aC("Start may not be negative, was "+q+"."))}},
az(a,b){var s
t.hs.a(b)
if(!(b instanceof A.ao))return this.l5(0,b)
s=B.d.az(this.b,b.b)
return s===0?B.d.az(this.c,b.c):s},
W(a,b){var s=this
if(b==null)return!1
if(!t.lS.b(b))return s.l4(0,b)
return s.b===b.b&&s.c===b.c&&J.T(s.a.a,b.a.a)},
ga0(a){return A.d3(this.b,this.c,this.a.a,B.o)},
nm(a,b){var s,r=this,q=r.a
if(!J.T(q.a,b.a.a))throw A.d(A.a7('Source URLs "'+A.k(r.ga5())+'" and  "'+A.k(b.ga5())+"\" don't match.",null))
s=Math.min(r.b,b.b)
return A.mC(q,s,Math.max(r.c,b.c))},
$imf:1,
$ibD:1}
A.j6.prototype={
nJ(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=a.a
a.hZ(B.a.gZ(a1).c)
s=a.e
r=A.bC(s,a0,!1,t.dd)
for(q=a.r,s=s!==0,p=a.b,o=0;o<a1.length;++o){n=a1[o]
if(o>0){m=a1[o-1]
l=m.c
k=n.c
if(!J.T(l,k)){a.dA("\u2575")
q.a+="\n"
a.hZ(k)}else if(m.b+1!==n.b){a.m1("...")
q.a+="\n"}}for(l=n.d,k=A.v(l).h("V<1>"),j=new A.V(l,k),j=new A.K(j,j.gm(j),k.h("K<B.E>")),k=k.h("B.E"),i=n.b,h=n.a;j.q();){g=j.d
if(g==null)g=k.a(g)
f=g.a
if(f.gS(f).gae()!==f.gU().gae()&&f.gS(f).gae()===i&&a.lF(B.b.A(h,0,f.gS(f).gam()))){e=B.a.ah(r,a0)
if(e<0)A.L(A.a7(A.k(r)+" contains no null elements.",a0))
B.a.u(r,e,g)}}a.m0(i)
q.a+=" "
a.m_(n,r)
if(s)q.a+=" "
d=B.a.fh(l,new A.jr())
if(d===-1)c=a0
else{if(!(d>=0&&d<l.length))return A.c(l,d)
c=l[d]}k=c!=null
if(k){j=c.a
g=j.gS(j).gae()===i?j.gS(j).gam():0
a.lY(h,g,j.gU().gae()===i?j.gU().gam():h.length,p)}else a.dC(h)
q.a+="\n"
if(k)a.lZ(n,c,r)
for(k=l.length,b=0;b<k;++b){l[b].toString
continue}}a.dA("\u2575")
a1=q.a
return a1.charCodeAt(0)==0?a1:a1},
hZ(a){var s=this
if(!s.f||!t.jJ.b(a))s.dA("\u2577")
else{s.dA("\u250c")
s.b0(new A.je(s),"\x1b[34m",t.H)
s.r.a+=" "+$.nb().j0(a)}s.r.a+="\n"},
dz(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d={}
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
h=g.gS(g).gae()}f=i?null:j.a.gU().gae()
if(s&&j===c){e.b0(new A.jl(e,h,a),r,p)
l=!0}else if(l)e.b0(new A.jm(e,j),r,p)
else if(i)if(d.a)e.b0(new A.jn(e),d.b,m)
else n.a+=" "
else e.b0(new A.jo(d,e,c,h,a,j,f),o,p)}},
m_(a,b){return this.dz(a,b,null)},
lY(a,b,c,d){var s=this
s.dC(B.b.A(a,0,b))
s.b0(new A.jf(s,a,b,c),d,t.H)
s.dC(B.b.A(a,c,a.length))},
lZ(a,b,c){var s,r,q,p,o=this
t.eU.a(c)
s=o.b
r=b.a
if(r.gS(r).gae()===r.gU().gae()){o.eO()
r=o.r
r.a+=" "
o.dz(a,c,b)
if(c.length!==0)r.a+=" "
o.i_(b,c,o.b0(new A.jg(o,a,b),s,t.S))}else{q=a.b
if(r.gS(r).gae()===q){if(B.a.G(c,b))return
A.tR(c,b,t.C)
o.eO()
r=o.r
r.a+=" "
o.dz(a,c,b)
o.b0(new A.jh(o,a,b),s,t.H)
r.a+="\n"}else if(r.gU().gae()===q){p=r.gU().gam()===a.a.length
if(p&&!0){A.pb(c,b,t.C)
return}o.eO()
o.r.a+=" "
o.dz(a,c,b)
o.i_(b,c,o.b0(new A.ji(o,p,a,b),s,t.S))
A.pb(c,b,t.C)}}},
hY(a,b,c){var s=c?0:1,r=this.r
s=r.a+=B.b.v("\u2500",1+b+this.eE(B.b.A(a.a,0,b+s))*3)
r.a=s+"^"},
lX(a,b){return this.hY(a,b,!0)},
i_(a,b,c){t.eU.a(b)
this.r.a+="\n"
return},
dC(a){var s,r,q,p
for(s=new A.a8(a),r=t.E,s=new A.K(s,s.gm(s),r.h("K<u.E>")),q=this.r,r=r.h("u.E");s.q();){p=s.d
if(p==null)p=r.a(p)
if(p===9)q.a+=B.b.v(" ",4)
else q.a+=A.b4(p)}},
dB(a,b,c){var s={}
s.a=c
if(b!=null)s.a=B.d.l(b+1)
this.b0(new A.jp(s,this,a),"\x1b[34m",t.P)},
dA(a){return this.dB(a,null,null)},
m1(a){return this.dB(null,null,a)},
m0(a){return this.dB(null,a,null)},
eO(){return this.dB(null,null,null)},
eE(a){var s,r,q,p
for(s=new A.a8(a),r=t.E,s=new A.K(s,s.gm(s),r.h("K<u.E>")),r=r.h("u.E"),q=0;s.q();){p=s.d
if((p==null?r.a(p):p)===9)++q}return q},
lF(a){var s,r,q
for(s=new A.a8(a),r=t.E,s=new A.K(s,s.gm(s),r.h("K<u.E>")),r=r.h("u.E");s.q();){q=s.d
if(q==null)q=r.a(q)
if(q!==32&&q!==9)return!1}return!0},
b0(a,b,c){var s,r
c.h("0()").a(a)
s=this.b!=null
if(s&&b!=null)this.r.a+=b
r=a.$0()
if(s&&b!=null)this.r.a+="\x1b[0m"
return r}}
A.jq.prototype={
$0(){return this.a},
$S:77}
A.j8.prototype={
$1(a){var s=t.nR.a(a).d,r=A.v(s)
r=new A.ai(s,r.h("y(1)").a(new A.j7()),r.h("ai<1>"))
return r.gm(r)},
$S:78}
A.j7.prototype={
$1(a){var s=t.C.a(a).a
return s.gS(s).gae()!==s.gU().gae()},
$S:14}
A.j9.prototype={
$1(a){return t.nR.a(a).c},
$S:80}
A.jb.prototype={
$1(a){var s=t.C.a(a).a.ga5()
return s==null?new A.E():s},
$S:81}
A.jc.prototype={
$2(a,b){var s=t.C
return s.a(a).a.az(0,s.a(b).a)},
$S:82}
A.jd.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
t.lO.a(a)
s=a.a
r=a.b
q=A.a([],t.dg)
for(p=J.b9(r),o=p.gI(r),n=t.pg;o.q();){m=o.gC().a
l=m.gaY()
k=A.lL(l,m.gV(m),m.gS(m).gam())
k.toString
k=B.b.c0("\n",B.b.A(l,0,k))
j=k.gm(k)
i=m.gS(m).gae()-j
for(m=l.split("\n"),k=m.length,h=0;h<k;++h){g=m[h]
if(q.length===0||i>B.a.gp(q).b)B.a.n(q,new A.b7(g,i,s,A.a([],n)));++i}}f=A.a([],n)
for(o=q.length,n=t.aP,e=0,h=0;h<q.length;q.length===o||(0,A.e)(q),++h){g=q[h]
m=n.a(new A.ja(g))
if(!!f.fixed$length)A.L(A.R("removeWhere"))
B.a.eM(f,m,!0)
d=f.length
for(m=p.b7(r,e),m=m.gI(m);m.q();){k=m.gC()
c=k.a
if(c.gS(c).gae()>g.b)break
B.a.n(f,k)}e+=f.length-d
B.a.H(g.d,f)}return q},
$S:83}
A.ja.prototype={
$1(a){return t.C.a(a).a.gU().gae()<this.a.b},
$S:14}
A.jr.prototype={
$1(a){t.C.a(a)
return!0},
$S:14}
A.je.prototype={
$0(){this.a.r.a+=B.b.v("\u2500",2)+">"
return null},
$S:1}
A.jl.prototype={
$0(){var s=this.b===this.c.b?"\u250c":"\u2514"
this.a.r.a+=s},
$S:2}
A.jm.prototype={
$0(){var s=this.b==null?"\u2500":"\u253c"
this.a.r.a+=s},
$S:2}
A.jn.prototype={
$0(){this.a.r.a+="\u2500"
return null},
$S:1}
A.jo.prototype={
$0(){var s,r,q=this,p=q.a,o=p.a?"\u253c":"\u2502"
if(q.c!=null)q.b.r.a+=o
else{s=q.e
r=s.b
if(q.d===r){s=q.b
s.b0(new A.jj(p,s),p.b,t.P)
p.a=!0
if(p.b==null)p.b=s.b}else{s=q.r===r&&q.f.a.gU().gam()===s.a.length
r=q.b
if(s)r.r.a+="\u2514"
else r.b0(new A.jk(r,o),p.b,t.P)}}},
$S:2}
A.jj.prototype={
$0(){var s=this.a.a?"\u252c":"\u250c"
this.b.r.a+=s},
$S:2}
A.jk.prototype={
$0(){this.a.r.a+=this.b},
$S:2}
A.jf.prototype={
$0(){var s=this
return s.a.dC(B.b.A(s.b,s.c,s.d))},
$S:1}
A.jg.prototype={
$0(){var s,r,q=this.a,p=q.r,o=p.a,n=this.c.a,m=n.gS(n).gam(),l=n.gU().gam()
n=this.b.a
s=q.eE(B.b.A(n,0,m))
r=q.eE(B.b.A(n,m,l))
m+=s*3
p.a+=B.b.v(" ",m)
p=p.a+=B.b.v("^",Math.max(l+(s+r)*3-m,1))
return p.length-o.length},
$S:29}
A.jh.prototype={
$0(){var s=this.c.a
return this.a.lX(this.b,s.gS(s).gam())},
$S:1}
A.ji.prototype={
$0(){var s=this,r=s.a,q=r.r,p=q.a
if(s.b)q.a+=B.b.v("\u2500",3)
else r.hY(s.c,Math.max(s.d.a.gU().gam()-1,0),!1)
return q.a.length-p.length},
$S:29}
A.jp.prototype={
$0(){var s=this.b,r=s.r,q=this.a.a
if(q==null)q=""
s=r.a+=B.b.o1(q,s.d)
q=this.c
r.a=s+(q==null?"\u2502":q)},
$S:2}
A.ax.prototype={
l(a){var s=this.a
s=""+"primary "+(""+s.gS(s).gae()+":"+s.gS(s).gam()+"-"+s.gU().gae()+":"+s.gU().gam())
return s.charCodeAt(0)==0?s:s}}
A.lc.prototype={
$0(){var s,r,q,p,o=this.a
if(!(t.ol.b(o)&&A.lL(o.gaY(),o.gV(o),o.gS(o).gam())!=null)){s=o.gS(o)
s=A.hy(s.gau(s),0,0,o.ga5())
r=o.gU()
r=r.gau(r)
q=o.ga5()
p=A.tt(o.gV(o),10)
o=A.km(s,A.hy(r,A.o7(o.gV(o)),p,q),o.gV(o),o.gV(o))}return A.ra(A.rc(A.rb(o)))},
$S:85}
A.b7.prototype={
l(a){return""+this.b+': "'+this.a+'" ('+B.a.aB(this.d,", ")+")"}}
A.bt.prototype={
f4(a){var s=this.a
if(!J.T(s,a.ga5()))throw A.d(A.a7('Source URLs "'+A.k(s)+'" and "'+A.k(a.ga5())+"\" don't match.",null))
return Math.abs(this.b-a.gau(a))},
az(a,b){var s
t.hq.a(b)
s=this.a
if(!J.T(s,b.ga5()))throw A.d(A.a7('Source URLs "'+A.k(s)+'" and "'+A.k(b.ga5())+"\" don't match.",null))
return this.b-b.gau(b)},
W(a,b){if(b==null)return!1
return t.hq.b(b)&&J.T(this.a,b.ga5())&&this.b===b.gau(b)},
ga0(a){var s=this.a
s=s==null?null:s.ga0(s)
if(s==null)s=0
return s+this.b},
l(a){var s=this,r=A.du(s).l(0),q=s.a
return"<"+r+": "+s.b+" "+(A.k(q==null?"unknown source":q)+":"+(s.c+1)+":"+(s.d+1))+">"},
$iae:1,
ga5(){return this.a},
gau(a){return this.b},
gae(){return this.c},
gam(){return this.d}}
A.hz.prototype={
f4(a){if(!J.T(this.a.a,a.ga5()))throw A.d(A.a7('Source URLs "'+A.k(this.ga5())+'" and "'+A.k(a.ga5())+"\" don't match.",null))
return Math.abs(this.b-a.gau(a))},
az(a,b){t.hq.a(b)
if(!J.T(this.a.a,b.ga5()))throw A.d(A.a7('Source URLs "'+A.k(this.ga5())+'" and "'+A.k(b.ga5())+"\" don't match.",null))
return this.b-b.gau(b)},
W(a,b){if(b==null)return!1
return t.hq.b(b)&&J.T(this.a.a,b.ga5())&&this.b===b.gau(b)},
ga0(a){var s=this.a.a
s=s==null?null:s.ga0(s)
if(s==null)s=0
return s+this.b},
l(a){var s=A.du(this).l(0),r=this.b,q=this.a,p=q.a
return"<"+s+": "+r+" "+(A.k(p==null?"unknown source":p)+":"+(q.cJ(r)+1)+":"+(q.aW(r)+1))+">"},
$iae:1,
$ibt:1}
A.hA.prototype={
ld(a,b,c){var s,r=this.b,q=this.a
if(!J.T(r.ga5(),q.ga5()))throw A.d(A.a7('Source URLs "'+A.k(q.ga5())+'" and  "'+A.k(r.ga5())+"\" don't match.",null))
else if(r.gau(r)<q.gau(q))throw A.d(A.a7("End "+r.l(0)+" must come after start "+q.l(0)+".",null))
else{s=this.c
if(s.length!==q.f4(r))throw A.d(A.a7('Text "'+s+'" must be '+q.f4(r)+" characters long.",null))}},
gS(a){return this.a},
gU(){return this.b},
gV(a){return this.c}}
A.er.prototype={
ga5(){return this.gS(this).ga5()},
gm(a){var s,r=this.gU()
r=r.gau(r)
s=this.gS(this)
return r-s.gau(s)},
az(a,b){var s
t.hs.a(b)
s=this.gS(this).az(0,b.gS(b))
return s===0?this.gU().az(0,b.gU()):s},
iU(a,b,c){var s,r,q=this,p=""+("line "+(q.gS(q).gae()+1)+", column "+(q.gS(q).gam()+1))
if(q.ga5()!=null){s=q.ga5()
s=p+(" of "+$.nb().j0(s))
p=s}p+=": "+b
r=q.nK(c)
if(r.length!==0)p=p+"\n"+r
return p.charCodeAt(0)==0?p:p},
nK(a){var s=this
if(!t.ol.b(s)&&s.gm(s)===0)return""
return A.q6(s,a).nJ()},
W(a,b){if(b==null)return!1
return t.hs.b(b)&&this.gS(this).W(0,b.gS(b))&&this.gU().W(0,b.gU())},
ga0(a){return A.d3(this.gS(this),this.gU(),B.o,B.o)},
l(a){var s=this
return"<"+A.du(s).l(0)+": from "+s.gS(s).l(0)+" to "+s.gU().l(0)+' "'+s.gV(s)+'">'},
$iae:1,
$ibe:1}
A.bD.prototype={
gaY(){return this.d}}
A.M.prototype={
l(a){return"["+A.k(this.a)+", "+A.k(this.b)+"]"},
W(a,b){if(b==null)return!1
return b instanceof A.M&&J.T(b.a,this.a)&&J.T(b.b,this.b)},
ga0(a){return A.d3(J.aE(this.a),J.aE(this.b),B.o,B.o)}}
A.df.prototype={
av(a){var s=this
return A.h5([s.a,s.b,s.c,s.d],!1,t.z)},
l(a){var s=this
return"["+s.a.l(0)+", "+s.b.l(0)+", "+s.c.l(0)+", "+s.d.l(0)+"]"},
W(a,b){var s=this
if(b==null)return!1
return b instanceof A.df&&b.a.W(0,s.a)&&b.b.W(0,s.b)&&b.c.W(0,s.c)&&b.d.W(0,s.d)},
ga0(a){var s=this
return A.d3(A.bM(s.a),A.bM(s.b),A.bM(s.c),A.bM(s.d))}}
A.jM.prototype={
cW(){var s=0,r=A.f9(t.z),q=this,p
var $async$cW=A.fb(function(a,b){if(a===1)return A.f4(b,r)
while(true)switch(s){case 0:p=q.f
p===$&&A.b("camera")
p.f=A.ow("#191919")
s=2
return A.cJ(q.f3(),$async$cW)
case 2:q.nV()
s=3
return A.cJ(q.dI(),$async$cW)
case 3:return A.f5(null,r)}})
return A.f6($async$cW,r)},
f3(){var s=0,r=A.f9(t.z),q=this,p,o,n,m,l,k,j,i,h,g,f,e
var $async$f3=A.fb(function(a,b){if(a===1)return A.f4(b,r)
while(true)switch(s){case 0:q.at=A.mb(A.cN(null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null),10,-1,A.cN(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,0.7),7,-4)
q.ax=A.mb(A.cN(null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null),10,-1,A.cN(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,0.7),8,-3)
q.ay=A.mb(A.cN(null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null),10,-1,A.cN(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,0.7),9,-1)
p=q.at.ec(new A.jN(),9,0)
p.di(B.q)
q.ch=p
p=q.ax.ec(new A.jO(),9,0)
p.di(B.A)
q.CW=p
p=q.ay.ec(new A.jP(),9,0)
p.di(B.B)
q.cx=p
p=A.cq(new A.f(-6,0,0),B.c)
p.aK(B.a6)
q.x=p
q.y=A.cq(new A.f(0,0,0),B.q)
q.Q=A.cq(new A.f(0,0,0),B.A)
p=q.x.aE()
q.as=A.ns(B.a7,q.Q.aE(),p)
p=A.nV(q.ch,0.5,B.c,1)
q.cy=p
o=t.r
n=A.mg(A.a([q.ch,q.at,p],o))
n.cL(0.25)
n.bn(B.m.v(0,0).K(0,B.n.v(0,0)))
m=A.mg(A.a([q.ax,q.CW],o))
m.cL(0.25)
m.bn(B.t.v(0,2.5).K(0,B.n.v(0,0)))
l=A.mg(A.a([q.ay,q.cx],o))
l.cL(0.25)
l.bn(B.m.v(0,2.5).K(0,B.n.v(0,0)))
q.z=A.cq(new A.f(0,0,0),B.B)
k=A.mq("\\frac{d f(x)}{dx}")
k.aK(B.A)
k.bn(B.t.v(0,2.5).K(0,B.n.v(0,2)))
j=A.mq("f(x)")
j.aK(B.q)
j.bn(B.t.v(0,0).K(0,B.n.v(0,2)))
i=A.mq("\\int f(x)dx")
i.aK(B.B)
i.bn(B.m.v(0,2.5).K(0,B.n.v(0,2)))
p=q.ch
p.ap("getStart")
p=p.r
p===$&&A.b("points")
q.shb(t.y.a(A.a([new A.f(B.a.gZ(p).al(0),q.at.cs(q.x.aE()).al(1),0)],t.l)))
p=q.dx
p===$&&A.b("vertices")
q.db=A.nG(p,B.c)
p=q.ch.r
p===$&&A.b("points")
h=p.length
g=0
for(;g<p.length;p.length===h||(0,A.e)(p),++g){f=p[g]
e=q.ch.r
e===$&&A.b("points")
if(B.d.a7(B.a.ah(e,f),10)===0)B.a.n(q.dx,f)}A.dv("end")
A.dv(q.dx.length)
q.aX(A.a([q.x,n,q.as,q.y,m,q.Q,l,q.z,q.db,j,k,i],o))
return A.f5(null,r)}})
return A.f6($async$f3,r)},
nV(){var s,r=this,q=r.x
q===$&&A.b("slider")
s=new A.dN($,$,$,!1,q,B.c,$,null,$,$,$)
s.af(B.c,null,null)
s.lb(q)
r.aX(t.a.a(A.a([s],t.r)))
s=r.x
q=t.k5.a(new A.jR(r))
B.a.n(s.gjj(),q)
s.jh(0)},
shb(a){this.dx=t.y.a(a)}}
A.jN.prototype={
$1(a){var s=A.bH(a)-4
return Math.pow(s,3)/8-2*s},
$S:9}
A.jO.prototype={
$1(a){return-2+3*Math.pow(A.bH(a)-4,2)/8},
$S:9}
A.jP.prototype={
$1(a){A.bH(a)
return(16*Math.pow(a,2)-4*Math.pow(a,3)+Math.pow(a,4)/4)/8},
$S:9}
A.jR.prototype={
$2(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="points",e="getStart"
t.j.a(a)
A.bH(b)
s=this.a
r=s.x
r===$&&A.b("slider")
r=r.aE().al(0)
q=s.ch
q===$&&A.b("graph")
q.ap("getEnd")
q=q.r
q===$&&A.b(f)
if(r>B.a.gp(q).al(0)){r=s.x
q=s.ch
q.ap("getEnd")
q=q.r
q===$&&A.b(f)
r.fT(B.a.gp(q).al(0),0,null)}r=s.x.aE().al(0)
q=s.ch
q.ap(e)
q=q.r
q===$&&A.b(f)
if(r<B.a.gZ(q).al(0)){r=s.x
q=s.ch
q.ap(e)
q=q.r
q===$&&A.b(f)
r.fT(B.a.gZ(q).al(0),0,null)}r=s.x.aE().al(0)
q=s.at
q===$&&A.b("axes")
a.c1(A.cq(new A.f(r,q.cs(B.e).al(1),0),B.a6))
p=s.at.fu(s.x.aE()).al(0)
q=s.ch.Y.$1(p)
o=s.at.cs(new A.f(p,q,0))
q=s.y
q===$&&A.b("Corresponding")
q.c1(A.cq(o,B.q))
q=s.ax
q===$&&A.b("axesDerivative")
n=q.fu(s.x.aE()).al(0)
q=s.CW
q===$&&A.b("graph2")
q=q.Y.$1(n)
m=s.ax.cs(new A.f(n,q,0))
q=s.Q
q===$&&A.b("derivativePoint")
q.c1(A.cq(m,B.A))
q=s.ay
q===$&&A.b("axesIntegral")
l=q.fu(s.x.aE()).al(0)
q=s.cx
q===$&&A.b("graph3")
q=q.Y.$1(l)
k=s.ay.cs(new A.f(l,q,0))
q=s.z
q===$&&A.b("IntegralPoint")
q.c1(A.cq(k,B.B))
q=s.z.aE()
j=A.ns(B.a7,s.Q.aE(),q)
q=s.as
q===$&&A.b("line")
q.c1(j)
A.dv("ha")
i=A.a([],t.l)
q=s.dx
q===$&&A.b("vertices")
B.a.H(i,q)
r=B.a.gp(s.dx).al(0)
q=s.x.aE().al(0)
h=s.dx
if(r>q){B.a.fw(h,B.a.fh(h,new A.jQ(s)),s.dx.length)
B.a.n(s.dx,s.y.aE())
B.a.n(s.dx,s.x.aE())}else B.a.n(h,s.x.aE())
r=s.db
r===$&&A.b("area")
q=A.nG(s.dx,B.q.p_(0.5))
q.di(B.p)
r.c1(q)
q=s.dx.length
r=i.length
g=A.nV(s.ch,(q-3)/r,B.q,1.7)
r=s.cy
r===$&&A.b("tangent")
r.c1(g)
A.dv(B.q)
s.shb(t.y.a(i))
return a},
$S:86}
A.jQ.prototype={
$1(a){var s=t.V.a(a).al(0),r=this.a.x
r===$&&A.b("slider")
return s>r.aE().al(0)},
$S:23};(function aliases(){var s=J.e5.prototype
s.kR=s.l
s=J.cv.prototype
s.kW=s.l
s=A.bb.prototype
s.kS=s.iM
s.kT=s.iN
s.kV=s.iP
s.kU=s.iO
s=A.u.prototype
s.kX=s.bO
s=A.E.prototype
s.l2=s.l
s=A.a6.prototype
s.l3=s.a3
s=A.aR.prototype
s.kY=s.u
s.bX=s.n
s.h6=s.bD
s.kZ=s.H
s=A.de.prototype
s.l6=s.aw
s.l7=s.aF
s=A.G.prototype
s.l_=s.cp
s.l1=s.cF
s.h7=s.bW
s.l0=s.cZ
s.ew=s.aF
s.ev=s.aw
s=A.P.prototype
s.l8=s.bW
s=A.dy.prototype
s.kQ=s.kx
s=A.er.prototype
s.l5=s.az
s.l4=s.W})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._instance_1i,q=hunkHelpers.installInstanceTearOff,p=hunkHelpers._static_1,o=hunkHelpers._static_0,n=hunkHelpers.installStaticTearOff,m=hunkHelpers._instance_1u,l=hunkHelpers._instance_0u
s(J,"rX","qc",30)
r(J.A.prototype,"gm4","n",89)
q(J.bA.prototype,"gh4",1,1,null,["$2","$1"],["ab","a_"],66,0,0)
p(A,"t6","q3",31)
p(A,"tj","r5",15)
p(A,"tk","r6",15)
p(A,"tl","r7",15)
o(A,"oO","td",1)
s(A,"oQ","rO",90)
p(A,"to","rP",31)
s(A,"tn","qi",30)
p(A,"ts","qZ",25)
n(A,"tO",2,null,["$1$2","$2"],["p7",function(a,b){return A.p7(a,b,t.p)}],16,0)
n(A,"p5",2,null,["$1$2","$2"],["p6",function(a,b){return A.p6(a,b,t.p)}],16,0)
p(A,"oR","a5",8)
p(A,"tq","lX",8)
p(A,"tr","p4",8)
p(A,"bI","pJ",61)
m(A.en.prototype,"gjm","jn",32)
var k
l(k=A.dY.prototype,"gD","n1",0)
l(k,"gnh","ni",0)
l(k,"gcG","oq",0)
l(k,"gmJ","mK",0)
l(k,"ge1","oi",0)
l(k,"gbI","ke",0)
l(k,"go4","o5",0)
l(k,"goC","oD",0)
l(k,"gmM","mN",0)
l(k,"gje","oB",0)
l(k,"goo","op",0)
l(k,"gom","on",0)
l(k,"goj","ol",0)
l(k,"gog","oh",0)
l(k,"goe","of",0)
l(k,"goc","od",0)
l(k,"gkc","kd",0)
l(k,"gjU","jV",0)
l(k,"gjS","jT",0)
l(k,"gjY","jZ",0)
l(k,"gjW","jX",0)
l(k,"gbc","kb",0)
l(k,"gk0","k5",0)
l(k,"gfS","k_",0)
l(k,"gek","ka",0)
l(k,"gk8","k9",0)
l(k,"gk6","k7",0)
l(k,"gjK","jL",0)
l(k,"gbH","jR",0)
l(k,"gjO","jP",0)
l(k,"gjM","jN",0)
l(k,"gej","jQ",0)
l(k,"gjI","jJ",0)
l(k,"gbA","mu",0)
l(k,"gbN","mn",0)
l(k,"gm8","m9",0)
l(k,"gic","mv",0)
l(k,"gmo","mp",0)
l(k,"gmq","mr",0)
l(k,"gdE","ms",0)
l(k,"gi3","ma",0)
l(k,"gbv","kf",0)
l(k,"geW","mD",0)
l(k,"gnW","nX",0)
l(k,"gmV","mW",0)
l(k,"gmT","mU",0)
l(k,"gbP","mX",0)
l(k,"gim","mR",0)
l(k,"gio","mS",0)
l(k,"gmP","mQ",0)
l(k,"gn8","n9",0)
l(k,"gie","mw",0)
l(k,"gf5","n3",0)
l(k,"gmb","mc",0)
l(k,"gme","mf",0)
l(k,"geT","mx",0)
l(k,"gn4","n5",0)
l(k,"gn6","n7",0)
l(k,"gi4","md",0)
l(k,"gmz","mA",0)
l(k,"gmh","mi",0)
l(k,"geU","my",0)
l(k,"gf6","na",0)
l(k,"gf7","nb",0)
l(k,"gi5","mg",0)
l(k,"gcr","mE",0)
l(k,"gmH","mI",0)
l(A.G.prototype,"gjA","dd",5)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.E,null)
q(A.E,[A.mj,J.e5,J.av,A.j,A.dG,A.aO,A.a2,A.eL,A.kl,A.K,A.S,A.dU,A.dR,A.cG,A.bo,A.bG,A.cS,A.kv,A.hd,A.dS,A.eQ,A.cx,A.jF,A.cw,A.cu,A.dm,A.di,A.dd,A.ih,A.kW,A.br,A.i9,A.eT,A.lj,A.hV,A.dl,A.cd,A.dC,A.hX,A.cH,A.ap,A.hW,A.et,A.eu,A.hC,A.ie,A.f_,A.f1,A.ia,A.cI,A.u,A.eM,A.aU,A.eP,A.im,A.co,A.ln,A.kX,A.hh,A.es,A.i7,A.dV,A.bd,A.al,A.ii,A.hr,A.a3,A.eY,A.kx,A.bh,A.me,A.ic,A.cB,A.eJ,A.lg,A.bf,A.kt,A.d_,A.jS,A.k8,A.Q,A.hR,A.az,A.ib,A.lf,A.i2,A.ag,A.jt,A.a6,A.aT,A.kb,A.j1,A.iT,A.dj,A.js,A.b_,A.ev,A.dY,A.ku,A.o,A.iP,A.dx,A.G,A.aM,A.eB,A.em,A.dy,A.kf,A.O,A.cR,A.b0,A.j2,A.b1,A.k1,A.bl,A.f,A.iU,A.kr,A.k5,A.hk,A.hx,A.hz,A.er,A.j6,A.ax,A.b7,A.bt,A.M,A.df])
q(J.e5,[J.h1,J.e7,J.b2,J.A,J.c_,J.bA,A.h9])
q(J.b2,[J.cv,A.aP,A.dF,A.iY,A.dL,A.r,A.hj])
q(J.cv,[J.hm,J.bF,J.bB])
r(J.jC,J.A)
q(J.c_,[J.cX,J.e8])
q(A.j,[A.cb,A.N,A.cy,A.ai,A.dT,A.bO,A.an,A.eE,A.e6,A.ig,A.hs])
q(A.cb,[A.cn,A.f0])
r(A.eG,A.cn)
r(A.eD,A.f0)
q(A.aO,[A.fF,A.fE,A.j5,A.e4,A.hD,A.jD,A.lP,A.lR,A.kS,A.kR,A.lq,A.l3,A.lb,A.kn,A.li,A.le,A.jJ,A.lv,A.lw,A.kQ,A.kZ,A.jA,A.j3,A.jy,A.kj,A.kk,A.ki,A.kh,A.ju,A.iQ,A.iR,A.iy,A.iz,A.iA,A.k2,A.k3,A.iX,A.k4,A.j4,A.kc,A.ke,A.kd,A.iZ,A.j_,A.j0,A.k_,A.jZ,A.jY,A.jX,A.k0,A.jU,A.jV,A.jW,A.a_,A.a0,A.a1,A.kN,A.kO,A.kK,A.kJ,A.kI,A.kF,A.kM,A.kL,A.iS,A.m1,A.lU,A.lV,A.lW,A.lF,A.lt,A.kq,A.iG,A.iF,A.iE,A.iD,A.iV,A.iW,A.lC,A.j8,A.j7,A.j9,A.jb,A.jd,A.ja,A.jr,A.jN,A.jO,A.jP,A.jQ])
q(A.fF,[A.kV,A.lQ,A.lr,A.lD,A.l4,A.jG,A.jI,A.ky,A.kz,A.kA,A.lu,A.k7,A.jx,A.lM,A.iO,A.jL,A.jT,A.kH,A.kD,A.kG,A.kE,A.kg,A.m3,A.m4,A.lE,A.lG,A.lH,A.iH,A.iK,A.iJ,A.iI,A.iL,A.iC,A.m0,A.kP,A.jc,A.jR])
r(A.aN,A.eD)
q(A.a2,[A.e9,A.c8,A.h2,A.hK,A.ht,A.dB,A.i6,A.hc,A.by,A.hL,A.eA,A.dc,A.fH,A.fJ])
r(A.ea,A.eL)
q(A.ea,[A.dg,A.aR])
r(A.a8,A.dg)
q(A.fE,[A.lZ,A.kT,A.kU,A.lk,A.l_,A.l7,A.l5,A.l1,A.l6,A.l0,A.la,A.l9,A.l8,A.ko,A.lB,A.lh,A.kC,A.kB,A.k6,A.jw,A.lK,A.lJ,A.jv,A.jq,A.je,A.jl,A.jm,A.jn,A.jo,A.jj,A.jk,A.jf,A.jg,A.jh,A.ji,A.jp,A.lc])
q(A.N,[A.B,A.dQ,A.aQ])
q(A.B,[A.aI,A.H,A.V,A.eb])
r(A.dO,A.cy)
q(A.S,[A.cz,A.cF,A.eq])
r(A.cT,A.bO)
q(A.cS,[A.t,A.bY])
r(A.bZ,A.e4)
r(A.eh,A.c8)
q(A.hD,[A.hB,A.cO])
r(A.hU,A.dB)
r(A.ec,A.cx)
r(A.bb,A.ec)
q(A.e6,[A.hT,A.eS,A.aB,A.i8])
r(A.d1,A.h9)
r(A.eN,A.d1)
r(A.eO,A.eN)
r(A.ef,A.eO)
q(A.ef,[A.h8,A.eg,A.cA])
r(A.eU,A.i6)
r(A.eR,A.hX)
r(A.id,A.f_)
r(A.eK,A.bb)
r(A.dn,A.f1)
q(A.dn,[A.bS,A.f2])
r(A.eo,A.eP)
r(A.eX,A.f2)
q(A.co,[A.fN,A.fx])
q(A.fN,[A.fu,A.hO])
r(A.cp,A.hC)
q(A.cp,[A.ij,A.fy,A.hP])
r(A.fv,A.ij)
q(A.by,[A.d7,A.fZ])
r(A.hZ,A.eY)
q(A.aP,[A.aZ,A.dh])
q(A.aZ,[A.q,A.bz])
r(A.w,A.q)
q(A.w,[A.fq,A.fs,A.cm,A.fR,A.hu])
r(A.bv,A.r)
r(A.b3,A.bv)
r(A.eF,A.dL)
r(A.eH,A.et)
r(A.i3,A.eH)
r(A.eI,A.eu)
r(A.fV,A.bf)
r(A.ks,A.kt)
q(A.kX,[A.d0,A.hH,A.bm])
q(A.Q,[A.bL,A.ca,A.hF,A.ha,A.hv,A.c4,A.ep,A.aV,A.da,A.ak])
q(A.aV,[A.cr,A.h7,A.fw,A.fU,A.fD,A.d5,A.d6,A.hb])
r(A.ej,A.d5)
r(A.ho,A.d6)
q(A.ak,[A.hg,A.hf,A.af])
q(A.af,[A.he,A.bg,A.hl,A.fM,A.fP,A.fS])
q(A.bg,[A.h3,A.fr,A.hG,A.fT,A.hq,A.fC,A.hp,A.hQ])
q(A.ag,[A.i_,A.fK,A.bQ,A.i4,A.fG])
r(A.i0,A.i_)
r(A.i1,A.i0)
r(A.dK,A.i1)
r(A.i5,A.i4)
r(A.U,A.i5)
q(A.aR,[A.ah,A.fk])
r(A.fQ,A.i8)
q(A.a6,[A.bp,A.fz,A.dE,A.fX,A.fp,A.cU,A.hE,A.e3,A.cW,A.dZ,A.e_,A.cs,A.e1,A.cV,A.e2,A.fY,A.fW,A.fn,A.e0,A.fo,A.fl,A.fm])
r(A.hY,A.eo)
r(A.fL,A.hY)
r(A.en,A.hR)
q(A.b_,[A.bP,A.b6,A.dJ])
q(A.bP,[A.c6,A.I])
q(A.b6,[A.l,A.F,A.cD,A.cQ])
r(A.fj,A.dx)
r(A.fA,A.fj)
q(A.G,[A.P,A.h0,A.dX])
q(A.P,[A.de,A.c9,A.ei,A.bq,A.c3,A.d9,A.eC,A.dI])
q(A.de,[A.at,A.dz])
q(A.at,[A.d2,A.dH,A.ew])
r(A.fI,A.c9)
r(A.dD,A.fI)
r(A.dW,A.ei)
r(A.ey,A.eB)
q(A.dz,[A.cl,A.cP])
q(A.cP,[A.dM,A.dP])
q(A.bq,[A.ek,A.d8])
r(A.ez,A.ek)
r(A.dA,A.ez)
r(A.el,A.d8)
r(A.ex,A.d9)
r(A.bN,A.c3)
r(A.ed,A.bN)
r(A.dN,A.h0)
r(A.fB,A.dy)
r(A.h6,A.b0)
q(A.h6,[A.ee,A.c1,A.c2,A.c0])
r(A.ct,A.kr)
q(A.ct,[A.hn,A.hN,A.hS])
r(A.aY,A.hz)
q(A.er,[A.ao,A.hA])
r(A.bD,A.hA)
r(A.jM,A.kf)
s(A.dg,A.bG)
s(A.f0,A.u)
s(A.eN,A.u)
s(A.eO,A.bo)
s(A.eL,A.u)
s(A.eP,A.aU)
s(A.f1,A.aU)
s(A.f2,A.im)
s(A.i_,A.ib)
s(A.i0,A.lf)
s(A.i1,A.i2)
s(A.i4,A.ib)
s(A.i5,A.i2)
s(A.i8,A.u)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{i:"int",D:"double",ad:"num",m:"String",y:"bool",al:"Null",n:"List"},mangledNames:{},types:["y()","~()","al()","D(D,M<i,i>)","f(f)","m()","y(m)","O(O)","y(m?)","D(D)","i(i,i)","y(i)","~(b3)","y(G)","y(ax)","~(~())","0^(0^,0^)<ad>","al(@)","f(D)","@()","~(cE,m,i)","~(E,m)","y(ag)","y(f)","at(at)","m(m)","D(f)","y(i,f)","n<D>(O)","i()","i(@,@)","i(E?)","y(c4)","~(@)","al(@,c5)","aS<m,n<m>>()","n<m>()","~(i,@)","~(m,E?)","n<G>(G)","al(E,c5)","@(@)","y(@)","~(@,@)","aM(aM,aM)","y(D)","ap<@>(@)","y(E)","~(E?,E?)","m(cC)","y(m,m)","y(c0)","y(c1)","y(c2)","@(@,m)","~(m,i)","~(m,i?)","@(m)","cE(@,@)","n<f>(n<n<f>>,@)","n<O>(m,P)","i(i)","n<O>(n<O>)","y(O)","~(n<G>,bs<G>)","D(i)","y(d4[i])","O(n<D>)","f(f,f)","D(m)","~(ad)","n<D>(M<i,n<D>>)","D(M<i,D>)","D(n<D>)","~(r)","bl(bl,bl)","m(m?)","m?()","i(b7)","~(U)","E(b7)","E(ax)","i(ax,ax)","n<b7>(bd<E,n<ax>>)","al(~())","bD()","G(G,D)","ba<al>()","m(b6)","~(E?)","y(E?,E?)","y(E?)","~(m,P,n<O>)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.rs(v.typeUniverse,JSON.parse('{"hm":"cv","bF":"cv","bB":"cv","u2":"r","u9":"r","ud":"q","u3":"w","ue":"w","ua":"aZ","u7":"aZ","uf":"b3","u5":"bv","u4":"bz","ul":"bz","h1":{"y":[]},"e7":{"al":[]},"A":{"n":["1"],"N":["1"],"j":["1"]},"jC":{"A":["1"],"n":["1"],"N":["1"],"j":["1"]},"av":{"S":["1"]},"c_":{"D":[],"ad":[],"ae":["ad"]},"cX":{"D":[],"i":[],"ad":[],"ae":["ad"]},"e8":{"D":[],"ad":[],"ae":["ad"]},"bA":{"m":[],"ae":["m"],"d4":[]},"cb":{"j":["2"]},"dG":{"S":["2"]},"cn":{"cb":["1","2"],"j":["2"],"j.E":"2"},"eG":{"cn":["1","2"],"cb":["1","2"],"N":["2"],"j":["2"],"j.E":"2"},"eD":{"u":["2"],"n":["2"],"cb":["1","2"],"N":["2"],"j":["2"]},"aN":{"eD":["1","2"],"u":["2"],"n":["2"],"cb":["1","2"],"N":["2"],"j":["2"],"u.E":"2","j.E":"2"},"e9":{"a2":[]},"a8":{"u":["i"],"bG":["i"],"n":["i"],"N":["i"],"j":["i"],"u.E":"i","bG.E":"i"},"N":{"j":["1"]},"B":{"N":["1"],"j":["1"]},"aI":{"B":["1"],"N":["1"],"j":["1"],"B.E":"1","j.E":"1"},"K":{"S":["1"]},"cy":{"j":["2"],"j.E":"2"},"dO":{"cy":["1","2"],"N":["2"],"j":["2"],"j.E":"2"},"cz":{"S":["2"]},"H":{"B":["2"],"N":["2"],"j":["2"],"B.E":"2","j.E":"2"},"ai":{"j":["1"],"j.E":"1"},"cF":{"S":["1"]},"dT":{"j":["2"],"j.E":"2"},"dU":{"S":["2"]},"bO":{"j":["1"],"j.E":"1"},"cT":{"bO":["1"],"N":["1"],"j":["1"],"j.E":"1"},"eq":{"S":["1"]},"dQ":{"N":["1"],"j":["1"],"j.E":"1"},"dR":{"S":["1"]},"an":{"j":["1"],"j.E":"1"},"cG":{"S":["1"]},"dg":{"u":["1"],"bG":["1"],"n":["1"],"N":["1"],"j":["1"]},"V":{"B":["1"],"N":["1"],"j":["1"],"B.E":"1","j.E":"1"},"cS":{"aS":["1","2"]},"t":{"cS":["1","2"],"aS":["1","2"]},"eE":{"j":["1"],"j.E":"1"},"bY":{"cS":["1","2"],"aS":["1","2"]},"e4":{"aO":[],"bK":[]},"bZ":{"aO":[],"bK":[]},"eh":{"c8":[],"a2":[]},"h2":{"a2":[]},"hK":{"a2":[]},"hd":{"bn":[]},"eQ":{"c5":[]},"aO":{"bK":[]},"fE":{"aO":[],"bK":[]},"fF":{"aO":[],"bK":[]},"hD":{"aO":[],"bK":[]},"hB":{"aO":[],"bK":[]},"cO":{"aO":[],"bK":[]},"ht":{"a2":[]},"hU":{"a2":[]},"bb":{"cx":["1","2"],"jE":["1","2"],"aS":["1","2"]},"aQ":{"N":["1"],"j":["1"],"j.E":"1"},"cw":{"S":["1"]},"cu":{"d4":[]},"dm":{"cC":[],"cZ":[]},"hT":{"j":["cC"],"j.E":"cC"},"di":{"S":["cC"]},"dd":{"cZ":[]},"ig":{"j":["cZ"],"j.E":"cZ"},"ih":{"S":["cZ"]},"d1":{"cY":["1"]},"ef":{"u":["i"],"cY":["i"],"n":["i"],"N":["i"],"j":["i"],"bo":["i"]},"h8":{"u":["i"],"cY":["i"],"n":["i"],"N":["i"],"j":["i"],"bo":["i"],"u.E":"i","bo.E":"i"},"eg":{"u":["i"],"qX":[],"cY":["i"],"n":["i"],"N":["i"],"j":["i"],"bo":["i"],"u.E":"i","bo.E":"i"},"cA":{"u":["i"],"cE":[],"cY":["i"],"n":["i"],"N":["i"],"j":["i"],"bo":["i"],"u.E":"i","bo.E":"i"},"eT":{"nZ":[]},"i6":{"a2":[]},"eU":{"c8":[],"a2":[]},"ap":{"ba":["1"]},"cd":{"S":["1"]},"eS":{"j":["1"],"j.E":"1"},"dC":{"a2":[]},"eR":{"hX":["1"]},"f_":{"o5":[]},"id":{"f_":[],"o5":[]},"eK":{"bb":["1","2"],"cx":["1","2"],"jE":["1","2"],"aS":["1","2"]},"bS":{"dn":["1"],"aU":["1"],"bs":["1"],"N":["1"],"j":["1"],"aU.E":"1"},"cI":{"S":["1"]},"e6":{"j":["1"]},"ea":{"u":["1"],"n":["1"],"N":["1"],"j":["1"]},"ec":{"cx":["1","2"],"aS":["1","2"]},"cx":{"aS":["1","2"]},"eb":{"B":["1"],"nL":["1"],"N":["1"],"j":["1"],"B.E":"1","j.E":"1"},"eM":{"S":["1"]},"eo":{"aU":["1"],"bs":["1"],"N":["1"],"j":["1"]},"dn":{"aU":["1"],"bs":["1"],"N":["1"],"j":["1"]},"eX":{"dn":["1"],"aU":["1"],"im":["1"],"bs":["1"],"N":["1"],"j":["1"],"aU.E":"1"},"fu":{"co":["m","n<i>"]},"ij":{"cp":["n<i>","m"]},"fv":{"cp":["n<i>","m"]},"fx":{"co":["n<i>","m"]},"fy":{"cp":["n<i>","m"]},"fN":{"co":["m","n<i>"]},"hO":{"co":["m","n<i>"]},"hP":{"cp":["n<i>","m"]},"D":{"ad":[],"ae":["ad"]},"i":{"ad":[],"ae":["ad"]},"n":{"N":["1"],"j":["1"]},"ad":{"ae":["ad"]},"cC":{"cZ":[]},"bs":{"N":["1"],"j":["1"]},"m":{"ae":["m"],"d4":[]},"dB":{"a2":[]},"c8":{"a2":[]},"hc":{"a2":[]},"by":{"a2":[]},"d7":{"a2":[]},"fZ":{"a2":[]},"hL":{"a2":[]},"eA":{"a2":[]},"dc":{"a2":[]},"fH":{"a2":[]},"hh":{"a2":[]},"es":{"a2":[]},"fJ":{"a2":[]},"i7":{"bn":[]},"dV":{"bn":[]},"ii":{"c5":[]},"hs":{"j":["i"],"j.E":"i"},"hr":{"S":["i"]},"a3":{"qO":[]},"eY":{"hM":[]},"bh":{"hM":[]},"hZ":{"hM":[]},"b3":{"r":[]},"w":{"q":[],"aP":[]},"fq":{"q":[],"aP":[]},"fs":{"q":[],"aP":[]},"cm":{"q":[],"aP":[]},"bz":{"aP":[]},"dL":{"mt":["ad"]},"q":{"aP":[]},"fR":{"q":[],"aP":[]},"aZ":{"aP":[]},"hu":{"q":[],"aP":[]},"bv":{"r":[]},"dh":{"aP":[]},"eF":{"mt":["ad"]},"eH":{"et":["1"]},"i3":{"eH":["1"],"et":["1"]},"eI":{"eu":["1"]},"ic":{"qy":[]},"aB":{"j":["n<1>"],"j.E":"n<1>"},"eJ":{"S":["n<1>"]},"fV":{"bf":[]},"c4":{"Q":[]},"ep":{"Q":[]},"ak":{"Q":[]},"bL":{"Q":[]},"ca":{"Q":[]},"hF":{"Q":[]},"ha":{"Q":[]},"hv":{"Q":[]},"aV":{"Q":[]},"cr":{"aV":[],"Q":[]},"h7":{"aV":[],"Q":[]},"fw":{"aV":[],"Q":[]},"fU":{"aV":[],"Q":[]},"fD":{"aV":[],"Q":[]},"d5":{"aV":[],"Q":[]},"d6":{"aV":[],"Q":[]},"ej":{"d5":[],"aV":[],"Q":[]},"ho":{"d6":[],"aV":[],"Q":[]},"da":{"Q":[]},"hb":{"aV":[],"Q":[]},"hg":{"ak":[],"Q":[]},"hf":{"ak":[],"Q":[]},"af":{"ak":[],"Q":[]},"he":{"af":[],"ak":[],"Q":[]},"bg":{"af":[],"ak":[],"Q":[]},"h3":{"bg":[],"af":[],"ak":[],"Q":[]},"hl":{"af":[],"ak":[],"Q":[]},"fM":{"af":[],"ak":[],"Q":[]},"fP":{"af":[],"ak":[],"Q":[]},"fr":{"bg":[],"af":[],"ak":[],"Q":[]},"hG":{"bg":[],"af":[],"ak":[],"Q":[]},"fT":{"bg":[],"af":[],"ak":[],"Q":[]},"fS":{"af":[],"ak":[],"Q":[]},"hq":{"bg":[],"af":[],"ak":[],"Q":[]},"fC":{"bg":[],"af":[],"ak":[],"Q":[]},"hp":{"bg":[],"af":[],"ak":[],"Q":[]},"hQ":{"bg":[],"af":[],"ak":[],"Q":[]},"hR":{"o4":[]},"az":{"ae":["E"]},"dK":{"ag":[]},"U":{"ag":[]},"fK":{"ag":[]},"bQ":{"ag":[]},"fG":{"ag":[]},"ah":{"aR":["ag"],"u":["ag"],"n":["ag"],"N":["ag"],"j":["ag"],"u.E":"ag","aR.E":"ag"},"fQ":{"u":["U"],"n":["U"],"N":["U"],"j":["U"],"u.E":"U","j.E":"U"},"aT":{"bn":[]},"bp":{"a6":[]},"fz":{"a6":[]},"dE":{"a6":[]},"fX":{"a6":[]},"fp":{"a6":[]},"cU":{"a6":[]},"hE":{"a6":[]},"e3":{"a6":[]},"cW":{"a6":[]},"dZ":{"a6":[]},"e_":{"a6":[]},"cs":{"a6":[]},"e1":{"a6":[]},"cV":{"a6":[]},"e2":{"a6":[]},"fY":{"a6":[]},"fW":{"a6":[]},"fn":{"a6":[]},"e0":{"a6":[]},"fo":{"a6":[]},"fl":{"a6":[]},"fm":{"a6":[]},"fL":{"aU":["m"],"bs":["m"],"N":["m"],"j":["m"],"aU.E":"m"},"hY":{"aU":["m"],"bs":["m"],"N":["m"],"j":["m"]},"dj":{"bn":[]},"aR":{"u":["1"],"n":["1"],"N":["1"],"j":["1"]},"en":{"o4":[]},"b6":{"b_":[]},"bP":{"b_":[]},"c6":{"bP":[],"b_":[]},"I":{"bP":[],"b_":[]},"l":{"b6":[],"b_":[]},"F":{"b6":[],"b_":[]},"cD":{"b6":[],"b_":[]},"cQ":{"b6":[],"b_":[]},"dJ":{"b_":[]},"dY":{"S":["b_"]},"fk":{"aR":["U?"],"u":["U?"],"n":["U?"],"N":["U?"],"j":["U?"],"u.E":"U?","aR.E":"U?"},"fj":{"dx":[]},"fA":{"dx":[]},"d2":{"at":[],"P":[],"G":[]},"fI":{"c9":[],"P":[],"G":[]},"dD":{"c9":[],"P":[],"G":[]},"ei":{"P":[],"G":[]},"dW":{"P":[],"G":[]},"cl":{"P":[],"G":[]},"at":{"P":[],"G":[]},"ey":{"eB":[]},"de":{"P":[],"G":[]},"dz":{"P":[],"G":[]},"cP":{"P":[],"G":[]},"dM":{"P":[],"G":[]},"dP":{"P":[],"G":[]},"dH":{"at":[],"P":[],"G":[]},"ew":{"at":[],"P":[],"G":[]},"bq":{"P":[],"G":[]},"ek":{"bq":[],"P":[],"G":[]},"ez":{"bq":[],"P":[],"G":[]},"dA":{"bq":[],"P":[],"G":[]},"d8":{"bq":[],"P":[],"G":[]},"el":{"bq":[],"P":[],"G":[]},"c3":{"P":[],"G":[]},"d9":{"P":[],"G":[]},"bN":{"c3":[],"P":[],"G":[]},"ex":{"P":[],"G":[]},"ed":{"bN":[],"c3":[],"P":[],"G":[]},"h0":{"G":[]},"dN":{"G":[]},"dX":{"G":[]},"P":{"G":[]},"c9":{"P":[],"G":[]},"eC":{"P":[],"G":[]},"dI":{"P":[],"G":[]},"fB":{"dy":[]},"c1":{"b0":[]},"c2":{"b0":[]},"c0":{"b0":[]},"h6":{"b0":[]},"ee":{"b0":[]},"hk":{"bn":[]},"hn":{"ct":[]},"hN":{"ct":[]},"hS":{"ct":[]},"mf":{"bD":[],"be":[],"ae":["be"]},"aY":{"bt":[],"ae":["bt"]},"ao":{"mf":[],"bD":[],"be":[],"ae":["be"]},"bt":{"ae":["bt"]},"hz":{"bt":[],"ae":["bt"]},"be":{"ae":["be"]},"hA":{"be":[],"ae":["be"]},"er":{"be":[],"ae":["be"]},"bD":{"be":[],"ae":["be"]},"cE":{"n":["i"],"N":["i"],"j":["i"]}}'))
A.rr(v.typeUniverse,JSON.parse('{"dg":1,"f0":2,"d1":1,"hC":2,"e6":1,"ea":1,"ec":2,"eo":1,"eL":1,"eP":1,"f1":1,"f2":1}'))
var u={D:" must not be greater than the number of characters in the file, ",U:"Cannot extract a file path from a URI with a fragment component",z:"Cannot extract a file path from a URI with a query component",Q:"Cannot extract a non-Windows file path from a file URI with an authority",w:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",v:"No color list in VMobject with attribute name ",A:"expected-attribute-value-but-got-right-bracket",g:"expected-closing-tag-but-got-right-bracket",f:"expected-doctype-name-but-got-right-bracket",S:"expected-space-or-right-bracket-in-doctype",d:"unexpected-bang-after-double-dash-in-comment",H:"unexpected-character-after-attribute-value",B:"unexpected-character-after-soldius-in-tag",V:"unexpected-character-in-unquoted-attribute-value",K:"unexpected-dash-after-double-dash-in-comment",q:"unexpected-frameset-in-frameset-innerhtml",G:"unexpected-html-element-in-foreign-content",M:"unexpected-start-tag-implies-table-voodoo",r:"unexpected-table-element-end-tag-in-select-in-table",a:"unexpected-table-element-start-tag-in-select-in-table"}
var t=(function rtii(){var s=A.aK
return{pc:s("@<i>"),aY:s("cl"),A:s("bl"),u:s("dC"),fy:s("aM"),jQ:s("cm"),g4:s("F"),E:s("a8"),G:s("O"),cw:s("cQ"),bP:s("ae<@>"),B:s("t<m,m>"),R:s("t<m,@>"),i:s("dJ"),dA:s("dK"),gt:s("N<@>"),h:s("U"),ia:s("I"),fz:s("a2"),fq:s("r"),d3:s("b1<b0>"),gG:s("b1<c0>"),m4:s("b1<c1>"),mc:s("b1<c2>"),cY:s("bm"),e:s("b0"),mA:s("bn"),lS:s("mf"),gY:s("bK"),g7:s("ba<@>"),ha:s("bY<d0,m>"),gx:s("bL"),aB:s("cW"),id:s("bZ<D>"),oS:s("aB<G>"),c2:s("aB<E>"),pn:s("aB<P>"),b5:s("aB<f>"),lx:s("aB<D>"),lb:s("aB<i>"),hl:s("j<ag>"),bq:s("j<m>"),e7:s("j<@>"),nC:s("A<cl>"),fp:s("A<bl>"),iX:s("A<aM>"),O:s("A<O>"),hR:s("A<cR>"),il:s("A<U>"),fO:s("A<b1<b0>>"),oQ:s("A<ak>"),b1:s("A<at>"),i7:s("A<n<G>>"),bo:s("A<n<E>>"),Q:s("A<n<f>>"),b:s("A<n<D>>"),fC:s("A<n<i>>"),bV:s("A<aS<m,@>>"),kU:s("A<d_>"),r:s("A<G>"),d:s("A<ag>"),g:s("A<o<m,m>>"),bD:s("A<aT>"),gg:s("A<a6>"),b7:s("A<c4>"),iM:s("A<ep>"),nn:s("A<bN>"),dw:s("A<eu<@>>"),s:s("A<m>"),ks:s("A<b6>"),kG:s("A<ev>"),ez:s("A<df<f,f,f,f>>"),bs:s("A<cE>"),Z:s("A<P>"),l:s("A<f>"),pg:s("A<ax>"),dg:s("A<b7>"),n:s("A<D>"),dG:s("A<@>"),t:s("A<i>"),lB:s("A<U?>"),hg:s("A<ag?>"),D:s("A<m?>"),po:s("A<G(G,D)>"),T:s("e7"),dY:s("bB"),dX:s("cY<@>"),lX:s("ub"),am:s("uc"),f:s("at"),oP:s("jE<E,m>"),ev:s("n<O>"),jB:s("n<U>"),oR:s("n<b1<b0>>"),ls:s("n<n<f>>"),a:s("n<G>"),I:s("n<m>"),oX:s("n<b6>"),fr:s("n<Q>"),y:s("n<f>"),bd:s("n<D>"),gs:s("n<@>"),L:s("n<i>"),eU:s("n<ax?>"),le:s("n<G(G,D)>"),mH:s("af"),lO:s("bd<E,n<ax>>"),fg:s("aS<m,O>"),fY:s("aS<bm,n<b1<b0>>>"),gQ:s("H<m,m>"),iZ:s("H<m,@>"),aQ:s("H<f,D>"),j:s("G"),k5:s("G(G,D)"),gn:s("c0"),gD:s("b3"),m6:s("ee"),oJ:s("c1"),nB:s("c2"),hD:s("cA"),J:s("ag"),P:s("al"),f7:s("d2"),K:s("E"),w:s("o<m,m>"),h2:s("o<m,m?>"),iA:s("o<m?,m?>"),jK:s("l"),oc:s("d4"),n8:s("cB<ad>"),f_:s("nL<m>"),mx:s("mt<ad>"),lu:s("cC"),dT:s("c4"),b9:s("da"),ns:s("bs<G>"),hq:s("bt"),hs:s("be"),ol:s("bD"),lH:s("cD"),k:s("c5"),ny:s("c6"),N:s("m"),v:s("b6"),gL:s("m(m)"),mN:s("aI<f>"),fn:s("bP"),oI:s("bQ"),U:s("bf"),bF:s("Q"),iu:s("M<f,f>"),d7:s("M<i,D>"),o:s("M<i,i>"),kk:s("M<i,n<D>>"),cn:s("df<f,f,f,f>"),f5:s("nZ"),do:s("c8"),hb:s("cE"),cx:s("bF"),jJ:s("hM"),bX:s("P"),V:s("f"),ew:s("f(f)"),x:s("an<U>"),na:s("an<m>"),pl:s("cG<U>"),eX:s("i3<b3>"),av:s("ap<al>"),j_:s("ap<@>"),hy:s("ap<i>"),iS:s("ap<ad>"),C:s("ax"),nR:s("b7"),km:s("eR<ad>"),k4:s("y"),c:s("y()"),cT:s("y(U)"),iW:s("y(E)"),gS:s("y(m)"),aP:s("y(ax)"),gw:s("y(i)"),W:s("D"),iJ:s("D(D,M<i,i>)"),eL:s("D(f)"),f3:s("D(D)"),z:s("@"),mY:s("@()"),mq:s("@(E)"),ng:s("@(E,c5)"),f6:s("@(m)"),S:s("i"),eK:s("0&*"),_:s("E*"),mV:s("U?"),gK:s("ba<al>?"),q:s("n<O>?"),gv:s("n<at>?"),jq:s("n<ev>?"),fA:s("n<f>?"),f8:s("n<i>?"),m:s("aS<m,E?>?"),e1:s("ag?"),X:s("E?"),oA:s("bs<m>?"),g9:s("aV?"),jv:s("m?"),nU:s("b_?"),F:s("cH<@,@>?"),dd:s("ax?"),nF:s("ia?"),pi:s("y(m)?"),Y:s("@(r)?"),dU:s("i(U,U)?"),jE:s("~()?"),p:s("ad"),H:s("~"),M:s("~()"),m3:s("~(d_)"),hv:s("~(ad)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.a4=A.cm.prototype
B.u=A.dF.prototype
B.b1=J.e5.prototype
B.a=J.A.prototype
B.d=J.cX.prototype
B.h=J.c_.prototype
B.b=J.bA.prototype
B.b2=J.bB.prototype
B.b3=J.b2.prototype
B.v=A.eg.prototype
B.cJ=A.cA.prototype
B.az=J.hm.prototype
B.Z=J.bF.prototype
B.dY=A.dh.prototype
B.aD=new A.fv(!1,127)
B.n=new A.f(-1,0,0)
B.aQ=new A.aM(null,null,null,B.n,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.a8=new A.O(0.73333,0.73333,0.73333,1)
B.m=new A.f(0,-1,0)
B.b4=A.a(s([0]),t.n)
B.aR=new A.aM(B.a8,!0,!1,B.m,1,!0,0.1,1,null,B.b4,!1,null,2,0,0.75,0.25,0.25,0.25,null,4)
B.J=new A.aM(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.L=new A.bZ(A.p5(),t.id)
B.a0=new A.bZ(A.p5(),A.aK("bZ<i>"))
B.K=new A.bZ(A.tO(),t.id)
B.aS=new A.fu()
B.e_=new A.fy()
B.aT=new A.fx()
B.a1=new A.dR(A.aK("dR<0&>"))
B.a2=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.aU=function() {
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
B.aZ=function(getTagFallback) {
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
B.aV=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.aW=function(hooks) {
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
B.aY=function(hooks) {
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
B.aX=function(hooks) {
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
B.a3=function(hooks) { return hooks; }

B.b_=new A.hh()
B.o=new A.kl()
B.w=new A.hO()
B.l=new A.id()
B.b0=new A.ii()
B.p=new A.O(0,0,0,0)
B.a5=new A.O(0,0,0,1)
B.A=new A.O(1,1,0,1)
B.c=new A.O(1,1,1,1)
B.B=new A.O(0.98824,0.38431,0.33333,1)
B.a6=new A.O(0.51373,0.75686,0.40392,1)
B.a7=new A.O(0.3451,0.76863,0.86667,1)
B.q=new A.O(1,0.52549,0.18431,1)
B.C=new A.bm("mouseMovedEvent")
B.x=new A.bm("mousePressedEvent")
B.y=new A.bm("mouseReleasedEvent")
B.z=new A.bm("mouseDraggedEvent")
B.M=new A.bm("keyPressedEvent")
B.N=new A.bm("keyReleasedEvent")
B.D=A.a(s([0,0,32776,33792,1,10240,0,0]),t.t)
B.an=new A.o("http://www.w3.org/1999/xhtml","applet",t.w)
B.ap=new A.o("http://www.w3.org/1999/xhtml","caption",t.w)
B.Y=new A.o("http://www.w3.org/1999/xhtml","html",t.w)
B.as=new A.o("http://www.w3.org/1999/xhtml","marquee",t.w)
B.ay=new A.o("http://www.w3.org/1999/xhtml","object",t.w)
B.W=new A.o("http://www.w3.org/1999/xhtml","table",t.w)
B.ar=new A.o("http://www.w3.org/1999/xhtml","td",t.w)
B.al=new A.o("http://www.w3.org/1999/xhtml","th",t.w)
B.au=new A.o("http://www.w3.org/1998/Math/MathML","mi",t.w)
B.ao=new A.o("http://www.w3.org/1998/Math/MathML","mo",t.w)
B.aw=new A.o("http://www.w3.org/1998/Math/MathML","mn",t.w)
B.aq=new A.o("http://www.w3.org/1998/Math/MathML","ms",t.w)
B.am=new A.o("http://www.w3.org/1998/Math/MathML","mtext",t.w)
B.dl=new A.o("http://www.w3.org/1998/Math/MathML","annotation-xml",t.w)
B.X=new A.o("http://www.w3.org/2000/svg","foreignObject",t.w)
B.av=new A.o("http://www.w3.org/2000/svg","desc",t.w)
B.ak=new A.o("http://www.w3.org/2000/svg","title",t.w)
B.O=A.a(s([B.an,B.ap,B.Y,B.as,B.ay,B.W,B.ar,B.al,B.au,B.ao,B.aw,B.aq,B.am,B.dl,B.X,B.av,B.ak]),t.g)
B.ax=new A.o("http://www.w3.org/1999/xhtml","button",t.w)
B.b6=A.a(s([B.ax]),t.g)
B.b7=A.a(s(["b","big","blockquote","body","br","center","code","dd","div","dl","dt","em","embed","h1","h2","h3","h4","h5","h6","head","hr","i","img","li","listing","menu","meta","nobr","ol","p","pre","ruby","s","small","span","strike","strong","sub","sup","table","tt","u","ul","var"]),t.s)
B.E=A.a(s(["h1","h2","h3","h4","h5","h6"]),t.s)
B.P=A.a(s(["dd","dt","li","option","optgroup","p","rp","rt"]),t.s)
B.F=A.a(s([0,0,65490,45055,65535,34815,65534,18431]),t.t)
B.ba=A.a(s(["+//silmaril//dtd html pro v0r11 19970101//","-//advasoft ltd//dtd html 3.0 aswedit + extensions//","-//as//dtd html 3.0 aswedit + extensions//","-//ietf//dtd html 2.0 level 1//","-//ietf//dtd html 2.0 level 2//","-//ietf//dtd html 2.0 strict level 1//","-//ietf//dtd html 2.0 strict level 2//","-//ietf//dtd html 2.0 strict//","-//ietf//dtd html 2.0//","-//ietf//dtd html 2.1e//","-//ietf//dtd html 3.0//","-//ietf//dtd html 3.2 final//","-//ietf//dtd html 3.2//","-//ietf//dtd html 3//","-//ietf//dtd html level 0//","-//ietf//dtd html level 1//","-//ietf//dtd html level 2//","-//ietf//dtd html level 3//","-//ietf//dtd html strict level 0//","-//ietf//dtd html strict level 1//","-//ietf//dtd html strict level 2//","-//ietf//dtd html strict level 3//","-//ietf//dtd html strict//","-//ietf//dtd html//","-//metrius//dtd metrius presentational//","-//microsoft//dtd internet explorer 2.0 html strict//","-//microsoft//dtd internet explorer 2.0 html//","-//microsoft//dtd internet explorer 2.0 tables//","-//microsoft//dtd internet explorer 3.0 html strict//","-//microsoft//dtd internet explorer 3.0 html//","-//microsoft//dtd internet explorer 3.0 tables//","-//netscape comm. corp.//dtd html//","-//netscape comm. corp.//dtd strict html//","-//o'reilly and associates//dtd html 2.0//","-//o'reilly and associates//dtd html extended 1.0//","-//o'reilly and associates//dtd html extended relaxed 1.0//","-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//","-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//","-//spyglass//dtd html 2.0 extended//","-//sq//dtd html 2.0 hotmetal + extensions//","-//sun microsystems corp.//dtd hotjava html//","-//sun microsystems corp.//dtd hotjava strict html//","-//w3c//dtd html 3 1995-03-24//","-//w3c//dtd html 3.2 draft//","-//w3c//dtd html 3.2 final//","-//w3c//dtd html 3.2//","-//w3c//dtd html 3.2s draft//","-//w3c//dtd html 4.0 frameset//","-//w3c//dtd html 4.0 transitional//","-//w3c//dtd html experimental 19960712//","-//w3c//dtd html experimental 970421//","-//w3c//dtd w3 html//","-//w3o//dtd w3 html 3.0//","-//webtechs//dtd mozilla html 2.0//","-//webtechs//dtd mozilla html//"]),t.s)
B.G=A.a(s([0,0,26624,1023,65534,2047,65534,2047]),t.t)
B.bb=A.a(s(["uU","bB","lL","iI","cC"]),t.s)
B.bc=A.a(s([11,65534,65535,131070,131071,196606,196607,262142,262143,327678,327679,393214,393215,458750,458751,524286,524287,589822,589823,655358,655359,720894,720895,786430,786431,851966,851967,917502,917503,983038,983039,1048574,1048575,1114110,1114111]),t.t)
B.Q=A.a(s(["table","tbody","tfoot","thead","tr"]),t.s)
B.aj=new A.o("http://www.w3.org/1999/xhtml","ol",t.w)
B.at=new A.o("http://www.w3.org/1999/xhtml","ul",t.w)
B.bd=A.a(s([B.aj,B.at]),t.g)
B.i=A.a(s(["unit","value"]),t.s)
B.bE=new A.t(2,{unit:600,value:"em"},B.i,t.R)
B.bV=new A.t(2,{unit:601,value:"ex"},B.i,t.R)
B.bZ=new A.t(2,{unit:602,value:"px"},B.i,t.R)
B.bQ=new A.t(2,{unit:603,value:"cm"},B.i,t.R)
B.bT=new A.t(2,{unit:604,value:"mm"},B.i,t.R)
B.bO=new A.t(2,{unit:605,value:"in"},B.i,t.R)
B.bD=new A.t(2,{unit:606,value:"pt"},B.i,t.R)
B.c1=new A.t(2,{unit:607,value:"pc"},B.i,t.R)
B.bN=new A.t(2,{unit:608,value:"deg"},B.i,t.R)
B.bY=new A.t(2,{unit:609,value:"rad"},B.i,t.R)
B.bH=new A.t(2,{unit:610,value:"grad"},B.i,t.R)
B.bW=new A.t(2,{unit:611,value:"turn"},B.i,t.R)
B.bI=new A.t(2,{unit:612,value:"ms"},B.i,t.R)
B.bU=new A.t(2,{unit:613,value:"s"},B.i,t.R)
B.bK=new A.t(2,{unit:614,value:"hz"},B.i,t.R)
B.c_=new A.t(2,{unit:615,value:"khz"},B.i,t.R)
B.bM=new A.t(2,{unit:617,value:"fr"},B.i,t.R)
B.bG=new A.t(2,{unit:618,value:"dpi"},B.i,t.R)
B.bJ=new A.t(2,{unit:619,value:"dpcm"},B.i,t.R)
B.bP=new A.t(2,{unit:620,value:"dppx"},B.i,t.R)
B.bF=new A.t(2,{unit:621,value:"ch"},B.i,t.R)
B.bS=new A.t(2,{unit:622,value:"rem"},B.i,t.R)
B.bX=new A.t(2,{unit:623,value:"vw"},B.i,t.R)
B.bR=new A.t(2,{unit:624,value:"vh"},B.i,t.R)
B.c0=new A.t(2,{unit:625,value:"vmin"},B.i,t.R)
B.bL=new A.t(2,{unit:626,value:"vmax"},B.i,t.R)
B.a9=A.a(s([B.bE,B.bV,B.bZ,B.bQ,B.bT,B.bO,B.bD,B.c1,B.bN,B.bY,B.bH,B.bW,B.bI,B.bU,B.bK,B.c_,B.bM,B.bG,B.bJ,B.bP,B.bF,B.bS,B.bX,B.bR,B.c0,B.bL]),t.bV)
B.aa=A.a(s(["-//w3c//dtd html 4.01 frameset//","-//w3c//dtd html 4.01 transitional//"]),t.s)
B.bf=A.a(s(["address","div","p"]),t.s)
B.ab=A.a(s([B.au,B.ao,B.aw,B.aq,B.am]),t.g)
B.f=A.a(s(["type","value"]),t.s)
B.cp=new A.t(2,{type:670,value:"top-left-corner"},B.f,t.R)
B.cj=new A.t(2,{type:671,value:"top-left"},B.f,t.R)
B.cx=new A.t(2,{type:672,value:"top-center"},B.f,t.R)
B.cy=new A.t(2,{type:673,value:"top-right"},B.f,t.R)
B.c5=new A.t(2,{type:674,value:"top-right-corner"},B.f,t.R)
B.cc=new A.t(2,{type:675,value:"bottom-left-corner"},B.f,t.R)
B.cn=new A.t(2,{type:676,value:"bottom-left"},B.f,t.R)
B.cw=new A.t(2,{type:677,value:"bottom-center"},B.f,t.R)
B.c7=new A.t(2,{type:678,value:"bottom-right"},B.f,t.R)
B.ce=new A.t(2,{type:679,value:"bottom-right-corner"},B.f,t.R)
B.cv=new A.t(2,{type:680,value:"left-top"},B.f,t.R)
B.cg=new A.t(2,{type:681,value:"left-middle"},B.f,t.R)
B.cd=new A.t(2,{type:682,value:"right-bottom"},B.f,t.R)
B.c9=new A.t(2,{type:683,value:"right-top"},B.f,t.R)
B.cr=new A.t(2,{type:684,value:"right-middle"},B.f,t.R)
B.cs=new A.t(2,{type:685,value:"right-bottom"},B.f,t.R)
B.bg=A.a(s([B.cp,B.cj,B.cx,B.cy,B.c5,B.cc,B.cn,B.cw,B.c7,B.ce,B.cv,B.cg,B.cd,B.c9,B.cr,B.cs]),t.bV)
B.ad=A.a(s(["0","1","2","3","4","5","6","7","8","9"]),t.s)
B.e0=A.a(s([]),t.r)
B.R=A.a(s([]),t.g)
B.r=A.a(s([]),t.s)
B.bh=A.a(s([]),t.n)
B.bj=A.a(s([0,0,32722,12287,65534,34815,65534,18431]),t.t)
B.bk=A.a(s(["oO","cC","tT","yY","pP","eE"]),t.s)
B.bl=A.a(s([B.C,B.x,B.y,B.z,B.M,B.N]),A.aK("A<bm>"))
B.bm=A.a(s(["-//w3o//dtd w3 html strict 3.0//en//","-/w3c/dtd html 4.0 transitional/en","html"]),t.s)
B.cD=new A.t(2,{type:641,value:"import"},B.f,t.R)
B.cm=new A.t(2,{type:642,value:"media"},B.f,t.R)
B.ck=new A.t(2,{type:643,value:"page"},B.f,t.R)
B.cB=new A.t(2,{type:644,value:"charset"},B.f,t.R)
B.cq=new A.t(2,{type:645,value:"stylet"},B.f,t.R)
B.c8=new A.t(2,{type:646,value:"keyframes"},B.f,t.R)
B.ct=new A.t(2,{type:647,value:"-webkit-keyframes"},B.f,t.R)
B.cC=new A.t(2,{type:648,value:"-moz-keyframes"},B.f,t.R)
B.co=new A.t(2,{type:649,value:"-ms-keyframes"},B.f,t.R)
B.cf=new A.t(2,{type:650,value:"-o-keyframes"},B.f,t.R)
B.cF=new A.t(2,{type:651,value:"font-face"},B.f,t.R)
B.ci=new A.t(2,{type:652,value:"namespace"},B.f,t.R)
B.cl=new A.t(2,{type:653,value:"host"},B.f,t.R)
B.c6=new A.t(2,{type:654,value:"mixin"},B.f,t.R)
B.cu=new A.t(2,{type:655,value:"include"},B.f,t.R)
B.cA=new A.t(2,{type:656,value:"content"},B.f,t.R)
B.cb=new A.t(2,{type:657,value:"extend"},B.f,t.R)
B.cz=new A.t(2,{type:658,value:"-moz-document"},B.f,t.R)
B.ca=new A.t(2,{type:659,value:"supports"},B.f,t.R)
B.ch=new A.t(2,{type:660,value:"viewport"},B.f,t.R)
B.cE=new A.t(2,{type:661,value:"-ms-viewport"},B.f,t.R)
B.bn=A.a(s([B.cD,B.cm,B.ck,B.cB,B.cq,B.c8,B.ct,B.cC,B.co,B.cf,B.cF,B.ci,B.cl,B.c6,B.cu,B.cA,B.cb,B.cz,B.ca,B.ch,B.cE]),t.bV)
B.bo=A.a(s(["yY","sS","tT","eE","mM"]),t.s)
B.cZ=new A.o("http://www.w3.org/1998/Math/MathML","annotaion-xml",t.w)
B.br=A.a(s([B.cZ,B.X,B.av,B.ak]),t.g)
B.H=A.a(s([0,0,24576,1023,65534,34815,65534,18431]),t.t)
B.bs=A.a(s(["-//w3c//dtd xhtml 1.0 frameset//","-//w3c//dtd xhtml 1.0 transitional//"]),t.s)
B.bt=A.a(s(["pre","listing","textarea"]),t.s)
B.ae=A.a(s([0,0,32754,11263,65534,34815,65534,18431]),t.t)
B.af=A.a(s([0,0,65490,12287,65535,34815,65534,18431]),t.t)
B.bu=A.a(s(["C","D","A","T","A","["]),t.s)
B.cM=new A.o("http://www.w3.org/1999/xhtml","optgroup",t.w)
B.dO=new A.o("http://www.w3.org/1999/xhtml","option",t.w)
B.bv=A.a(s([B.cM,B.dO]),t.g)
B.bw=A.a(s(["tbody","tfoot","thead","html"]),t.s)
B.bz=A.a(s([B.Y,B.W]),t.g)
B.dC=new A.o("http://www.w3.org/1999/xhtml","address",t.w)
B.cO=new A.o("http://www.w3.org/1999/xhtml","area",t.w)
B.dR=new A.o("http://www.w3.org/1999/xhtml","article",t.w)
B.dc=new A.o("http://www.w3.org/1999/xhtml","aside",t.w)
B.dj=new A.o("http://www.w3.org/1999/xhtml","base",t.w)
B.d4=new A.o("http://www.w3.org/1999/xhtml","basefont",t.w)
B.d6=new A.o("http://www.w3.org/1999/xhtml","bgsound",t.w)
B.dw=new A.o("http://www.w3.org/1999/xhtml","blockquote",t.w)
B.d3=new A.o("http://www.w3.org/1999/xhtml","body",t.w)
B.db=new A.o("http://www.w3.org/1999/xhtml","br",t.w)
B.dA=new A.o("http://www.w3.org/1999/xhtml","center",t.w)
B.cR=new A.o("http://www.w3.org/1999/xhtml","col",t.w)
B.dF=new A.o("http://www.w3.org/1999/xhtml","colgroup",t.w)
B.de=new A.o("http://www.w3.org/1999/xhtml","command",t.w)
B.dK=new A.o("http://www.w3.org/1999/xhtml","dd",t.w)
B.dm=new A.o("http://www.w3.org/1999/xhtml","details",t.w)
B.d_=new A.o("http://www.w3.org/1999/xhtml","dir",t.w)
B.cY=new A.o("http://www.w3.org/1999/xhtml","div",t.w)
B.dI=new A.o("http://www.w3.org/1999/xhtml","dl",t.w)
B.df=new A.o("http://www.w3.org/1999/xhtml","dt",t.w)
B.cQ=new A.o("http://www.w3.org/1999/xhtml","embed",t.w)
B.cL=new A.o("http://www.w3.org/1999/xhtml","fieldset",t.w)
B.du=new A.o("http://www.w3.org/1999/xhtml","figure",t.w)
B.dJ=new A.o("http://www.w3.org/1999/xhtml","footer",t.w)
B.d1=new A.o("http://www.w3.org/1999/xhtml","form",t.w)
B.dg=new A.o("http://www.w3.org/1999/xhtml","frame",t.w)
B.cN=new A.o("http://www.w3.org/1999/xhtml","frameset",t.w)
B.cU=new A.o("http://www.w3.org/1999/xhtml","h1",t.w)
B.dQ=new A.o("http://www.w3.org/1999/xhtml","h2",t.w)
B.cP=new A.o("http://www.w3.org/1999/xhtml","h3",t.w)
B.dn=new A.o("http://www.w3.org/1999/xhtml","h4",t.w)
B.dN=new A.o("http://www.w3.org/1999/xhtml","h5",t.w)
B.dt=new A.o("http://www.w3.org/1999/xhtml","h6",t.w)
B.d7=new A.o("http://www.w3.org/1999/xhtml","head",t.w)
B.dP=new A.o("http://www.w3.org/1999/xhtml","header",t.w)
B.dd=new A.o("http://www.w3.org/1999/xhtml","hr",t.w)
B.dD=new A.o("http://www.w3.org/1999/xhtml","iframe",t.w)
B.dv=new A.o("http://www.w3.org/1999/xhtml","image",t.w)
B.dh=new A.o("http://www.w3.org/1999/xhtml","img",t.w)
B.dq=new A.o("http://www.w3.org/1999/xhtml","input",t.w)
B.dB=new A.o("http://www.w3.org/1999/xhtml","isindex",t.w)
B.da=new A.o("http://www.w3.org/1999/xhtml","li",t.w)
B.d9=new A.o("http://www.w3.org/1999/xhtml","link",t.w)
B.dz=new A.o("http://www.w3.org/1999/xhtml","listing",t.w)
B.cV=new A.o("http://www.w3.org/1999/xhtml","men",t.w)
B.dx=new A.o("http://www.w3.org/1999/xhtml","meta",t.w)
B.d8=new A.o("http://www.w3.org/1999/xhtml","nav",t.w)
B.dL=new A.o("http://www.w3.org/1999/xhtml","noembed",t.w)
B.dk=new A.o("http://www.w3.org/1999/xhtml","noframes",t.w)
B.di=new A.o("http://www.w3.org/1999/xhtml","noscript",t.w)
B.dE=new A.o("http://www.w3.org/1999/xhtml","p",t.w)
B.cS=new A.o("http://www.w3.org/1999/xhtml","param",t.w)
B.dr=new A.o("http://www.w3.org/1999/xhtml","plaintext",t.w)
B.cK=new A.o("http://www.w3.org/1999/xhtml","pre",t.w)
B.dp=new A.o("http://www.w3.org/1999/xhtml","script",t.w)
B.d5=new A.o("http://www.w3.org/1999/xhtml","section",t.w)
B.d0=new A.o("http://www.w3.org/1999/xhtml","select",t.w)
B.cW=new A.o("http://www.w3.org/1999/xhtml","style",t.w)
B.dG=new A.o("http://www.w3.org/1999/xhtml","tbody",t.w)
B.cX=new A.o("http://www.w3.org/1999/xhtml","textarea",t.w)
B.dy=new A.o("http://www.w3.org/1999/xhtml","tfoot",t.w)
B.d2=new A.o("http://www.w3.org/1999/xhtml","thead",t.w)
B.ds=new A.o("http://www.w3.org/1999/xhtml","title",t.w)
B.cT=new A.o("http://www.w3.org/1999/xhtml","tr",t.w)
B.dM=new A.o("http://www.w3.org/1999/xhtml","wbr",t.w)
B.dH=new A.o("http://www.w3.org/1999/xhtml","xmp",t.w)
B.S=A.a(s([B.dC,B.an,B.cO,B.dR,B.dc,B.dj,B.d4,B.d6,B.dw,B.d3,B.db,B.ax,B.ap,B.dA,B.cR,B.dF,B.de,B.dK,B.dm,B.d_,B.cY,B.dI,B.df,B.cQ,B.cL,B.du,B.dJ,B.d1,B.dg,B.cN,B.cU,B.dQ,B.cP,B.dn,B.dN,B.dt,B.d7,B.dP,B.dd,B.Y,B.dD,B.dv,B.dh,B.dq,B.dB,B.da,B.d9,B.dz,B.as,B.cV,B.dx,B.d8,B.dL,B.dk,B.di,B.ay,B.aj,B.dE,B.cS,B.dr,B.cK,B.dp,B.d5,B.d0,B.cW,B.W,B.dG,B.ar,B.cX,B.dy,B.al,B.d2,B.ds,B.cT,B.at,B.dM,B.dH,B.X]),t.g)
B.b5=A.a(s(["AElig","AElig;","AMP","AMP;","Aacute","Aacute;","Abreve;","Acirc","Acirc;","Acy;","Afr;","Agrave","Agrave;","Alpha;","Amacr;","And;","Aogon;","Aopf;","ApplyFunction;","Aring","Aring;","Ascr;","Assign;","Atilde","Atilde;","Auml","Auml;","Backslash;","Barv;","Barwed;","Bcy;","Because;","Bernoullis;","Beta;","Bfr;","Bopf;","Breve;","Bscr;","Bumpeq;","CHcy;","COPY","COPY;","Cacute;","Cap;","CapitalDifferentialD;","Cayleys;","Ccaron;","Ccedil","Ccedil;","Ccirc;","Cconint;","Cdot;","Cedilla;","CenterDot;","Cfr;","Chi;","CircleDot;","CircleMinus;","CirclePlus;","CircleTimes;","ClockwiseContourIntegral;","CloseCurlyDoubleQuote;","CloseCurlyQuote;","Colon;","Colone;","Congruent;","Conint;","ContourIntegral;","Copf;","Coproduct;","CounterClockwiseContourIntegral;","Cross;","Cscr;","Cup;","CupCap;","DD;","DDotrahd;","DJcy;","DScy;","DZcy;","Dagger;","Darr;","Dashv;","Dcaron;","Dcy;","Del;","Delta;","Dfr;","DiacriticalAcute;","DiacriticalDot;","DiacriticalDoubleAcute;","DiacriticalGrave;","DiacriticalTilde;","Diamond;","DifferentialD;","Dopf;","Dot;","DotDot;","DotEqual;","DoubleContourIntegral;","DoubleDot;","DoubleDownArrow;","DoubleLeftArrow;","DoubleLeftRightArrow;","DoubleLeftTee;","DoubleLongLeftArrow;","DoubleLongLeftRightArrow;","DoubleLongRightArrow;","DoubleRightArrow;","DoubleRightTee;","DoubleUpArrow;","DoubleUpDownArrow;","DoubleVerticalBar;","DownArrow;","DownArrowBar;","DownArrowUpArrow;","DownBreve;","DownLeftRightVector;","DownLeftTeeVector;","DownLeftVector;","DownLeftVectorBar;","DownRightTeeVector;","DownRightVector;","DownRightVectorBar;","DownTee;","DownTeeArrow;","Downarrow;","Dscr;","Dstrok;","ENG;","ETH","ETH;","Eacute","Eacute;","Ecaron;","Ecirc","Ecirc;","Ecy;","Edot;","Efr;","Egrave","Egrave;","Element;","Emacr;","EmptySmallSquare;","EmptyVerySmallSquare;","Eogon;","Eopf;","Epsilon;","Equal;","EqualTilde;","Equilibrium;","Escr;","Esim;","Eta;","Euml","Euml;","Exists;","ExponentialE;","Fcy;","Ffr;","FilledSmallSquare;","FilledVerySmallSquare;","Fopf;","ForAll;","Fouriertrf;","Fscr;","GJcy;","GT","GT;","Gamma;","Gammad;","Gbreve;","Gcedil;","Gcirc;","Gcy;","Gdot;","Gfr;","Gg;","Gopf;","GreaterEqual;","GreaterEqualLess;","GreaterFullEqual;","GreaterGreater;","GreaterLess;","GreaterSlantEqual;","GreaterTilde;","Gscr;","Gt;","HARDcy;","Hacek;","Hat;","Hcirc;","Hfr;","HilbertSpace;","Hopf;","HorizontalLine;","Hscr;","Hstrok;","HumpDownHump;","HumpEqual;","IEcy;","IJlig;","IOcy;","Iacute","Iacute;","Icirc","Icirc;","Icy;","Idot;","Ifr;","Igrave","Igrave;","Im;","Imacr;","ImaginaryI;","Implies;","Int;","Integral;","Intersection;","InvisibleComma;","InvisibleTimes;","Iogon;","Iopf;","Iota;","Iscr;","Itilde;","Iukcy;","Iuml","Iuml;","Jcirc;","Jcy;","Jfr;","Jopf;","Jscr;","Jsercy;","Jukcy;","KHcy;","KJcy;","Kappa;","Kcedil;","Kcy;","Kfr;","Kopf;","Kscr;","LJcy;","LT","LT;","Lacute;","Lambda;","Lang;","Laplacetrf;","Larr;","Lcaron;","Lcedil;","Lcy;","LeftAngleBracket;","LeftArrow;","LeftArrowBar;","LeftArrowRightArrow;","LeftCeiling;","LeftDoubleBracket;","LeftDownTeeVector;","LeftDownVector;","LeftDownVectorBar;","LeftFloor;","LeftRightArrow;","LeftRightVector;","LeftTee;","LeftTeeArrow;","LeftTeeVector;","LeftTriangle;","LeftTriangleBar;","LeftTriangleEqual;","LeftUpDownVector;","LeftUpTeeVector;","LeftUpVector;","LeftUpVectorBar;","LeftVector;","LeftVectorBar;","Leftarrow;","Leftrightarrow;","LessEqualGreater;","LessFullEqual;","LessGreater;","LessLess;","LessSlantEqual;","LessTilde;","Lfr;","Ll;","Lleftarrow;","Lmidot;","LongLeftArrow;","LongLeftRightArrow;","LongRightArrow;","Longleftarrow;","Longleftrightarrow;","Longrightarrow;","Lopf;","LowerLeftArrow;","LowerRightArrow;","Lscr;","Lsh;","Lstrok;","Lt;","Map;","Mcy;","MediumSpace;","Mellintrf;","Mfr;","MinusPlus;","Mopf;","Mscr;","Mu;","NJcy;","Nacute;","Ncaron;","Ncedil;","Ncy;","NegativeMediumSpace;","NegativeThickSpace;","NegativeThinSpace;","NegativeVeryThinSpace;","NestedGreaterGreater;","NestedLessLess;","NewLine;","Nfr;","NoBreak;","NonBreakingSpace;","Nopf;","Not;","NotCongruent;","NotCupCap;","NotDoubleVerticalBar;","NotElement;","NotEqual;","NotEqualTilde;","NotExists;","NotGreater;","NotGreaterEqual;","NotGreaterFullEqual;","NotGreaterGreater;","NotGreaterLess;","NotGreaterSlantEqual;","NotGreaterTilde;","NotHumpDownHump;","NotHumpEqual;","NotLeftTriangle;","NotLeftTriangleBar;","NotLeftTriangleEqual;","NotLess;","NotLessEqual;","NotLessGreater;","NotLessLess;","NotLessSlantEqual;","NotLessTilde;","NotNestedGreaterGreater;","NotNestedLessLess;","NotPrecedes;","NotPrecedesEqual;","NotPrecedesSlantEqual;","NotReverseElement;","NotRightTriangle;","NotRightTriangleBar;","NotRightTriangleEqual;","NotSquareSubset;","NotSquareSubsetEqual;","NotSquareSuperset;","NotSquareSupersetEqual;","NotSubset;","NotSubsetEqual;","NotSucceeds;","NotSucceedsEqual;","NotSucceedsSlantEqual;","NotSucceedsTilde;","NotSuperset;","NotSupersetEqual;","NotTilde;","NotTildeEqual;","NotTildeFullEqual;","NotTildeTilde;","NotVerticalBar;","Nscr;","Ntilde","Ntilde;","Nu;","OElig;","Oacute","Oacute;","Ocirc","Ocirc;","Ocy;","Odblac;","Ofr;","Ograve","Ograve;","Omacr;","Omega;","Omicron;","Oopf;","OpenCurlyDoubleQuote;","OpenCurlyQuote;","Or;","Oscr;","Oslash","Oslash;","Otilde","Otilde;","Otimes;","Ouml","Ouml;","OverBar;","OverBrace;","OverBracket;","OverParenthesis;","PartialD;","Pcy;","Pfr;","Phi;","Pi;","PlusMinus;","Poincareplane;","Popf;","Pr;","Precedes;","PrecedesEqual;","PrecedesSlantEqual;","PrecedesTilde;","Prime;","Product;","Proportion;","Proportional;","Pscr;","Psi;","QUOT","QUOT;","Qfr;","Qopf;","Qscr;","RBarr;","REG","REG;","Racute;","Rang;","Rarr;","Rarrtl;","Rcaron;","Rcedil;","Rcy;","Re;","ReverseElement;","ReverseEquilibrium;","ReverseUpEquilibrium;","Rfr;","Rho;","RightAngleBracket;","RightArrow;","RightArrowBar;","RightArrowLeftArrow;","RightCeiling;","RightDoubleBracket;","RightDownTeeVector;","RightDownVector;","RightDownVectorBar;","RightFloor;","RightTee;","RightTeeArrow;","RightTeeVector;","RightTriangle;","RightTriangleBar;","RightTriangleEqual;","RightUpDownVector;","RightUpTeeVector;","RightUpVector;","RightUpVectorBar;","RightVector;","RightVectorBar;","Rightarrow;","Ropf;","RoundImplies;","Rrightarrow;","Rscr;","Rsh;","RuleDelayed;","SHCHcy;","SHcy;","SOFTcy;","Sacute;","Sc;","Scaron;","Scedil;","Scirc;","Scy;","Sfr;","ShortDownArrow;","ShortLeftArrow;","ShortRightArrow;","ShortUpArrow;","Sigma;","SmallCircle;","Sopf;","Sqrt;","Square;","SquareIntersection;","SquareSubset;","SquareSubsetEqual;","SquareSuperset;","SquareSupersetEqual;","SquareUnion;","Sscr;","Star;","Sub;","Subset;","SubsetEqual;","Succeeds;","SucceedsEqual;","SucceedsSlantEqual;","SucceedsTilde;","SuchThat;","Sum;","Sup;","Superset;","SupersetEqual;","Supset;","THORN","THORN;","TRADE;","TSHcy;","TScy;","Tab;","Tau;","Tcaron;","Tcedil;","Tcy;","Tfr;","Therefore;","Theta;","ThickSpace;","ThinSpace;","Tilde;","TildeEqual;","TildeFullEqual;","TildeTilde;","Topf;","TripleDot;","Tscr;","Tstrok;","Uacute","Uacute;","Uarr;","Uarrocir;","Ubrcy;","Ubreve;","Ucirc","Ucirc;","Ucy;","Udblac;","Ufr;","Ugrave","Ugrave;","Umacr;","UnderBar;","UnderBrace;","UnderBracket;","UnderParenthesis;","Union;","UnionPlus;","Uogon;","Uopf;","UpArrow;","UpArrowBar;","UpArrowDownArrow;","UpDownArrow;","UpEquilibrium;","UpTee;","UpTeeArrow;","Uparrow;","Updownarrow;","UpperLeftArrow;","UpperRightArrow;","Upsi;","Upsilon;","Uring;","Uscr;","Utilde;","Uuml","Uuml;","VDash;","Vbar;","Vcy;","Vdash;","Vdashl;","Vee;","Verbar;","Vert;","VerticalBar;","VerticalLine;","VerticalSeparator;","VerticalTilde;","VeryThinSpace;","Vfr;","Vopf;","Vscr;","Vvdash;","Wcirc;","Wedge;","Wfr;","Wopf;","Wscr;","Xfr;","Xi;","Xopf;","Xscr;","YAcy;","YIcy;","YUcy;","Yacute","Yacute;","Ycirc;","Ycy;","Yfr;","Yopf;","Yscr;","Yuml;","ZHcy;","Zacute;","Zcaron;","Zcy;","Zdot;","ZeroWidthSpace;","Zeta;","Zfr;","Zopf;","Zscr;","aacute","aacute;","abreve;","ac;","acE;","acd;","acirc","acirc;","acute","acute;","acy;","aelig","aelig;","af;","afr;","agrave","agrave;","alefsym;","aleph;","alpha;","amacr;","amalg;","amp","amp;","and;","andand;","andd;","andslope;","andv;","ang;","ange;","angle;","angmsd;","angmsdaa;","angmsdab;","angmsdac;","angmsdad;","angmsdae;","angmsdaf;","angmsdag;","angmsdah;","angrt;","angrtvb;","angrtvbd;","angsph;","angst;","angzarr;","aogon;","aopf;","ap;","apE;","apacir;","ape;","apid;","apos;","approx;","approxeq;","aring","aring;","ascr;","ast;","asymp;","asympeq;","atilde","atilde;","auml","auml;","awconint;","awint;","bNot;","backcong;","backepsilon;","backprime;","backsim;","backsimeq;","barvee;","barwed;","barwedge;","bbrk;","bbrktbrk;","bcong;","bcy;","bdquo;","becaus;","because;","bemptyv;","bepsi;","bernou;","beta;","beth;","between;","bfr;","bigcap;","bigcirc;","bigcup;","bigodot;","bigoplus;","bigotimes;","bigsqcup;","bigstar;","bigtriangledown;","bigtriangleup;","biguplus;","bigvee;","bigwedge;","bkarow;","blacklozenge;","blacksquare;","blacktriangle;","blacktriangledown;","blacktriangleleft;","blacktriangleright;","blank;","blk12;","blk14;","blk34;","block;","bne;","bnequiv;","bnot;","bopf;","bot;","bottom;","bowtie;","boxDL;","boxDR;","boxDl;","boxDr;","boxH;","boxHD;","boxHU;","boxHd;","boxHu;","boxUL;","boxUR;","boxUl;","boxUr;","boxV;","boxVH;","boxVL;","boxVR;","boxVh;","boxVl;","boxVr;","boxbox;","boxdL;","boxdR;","boxdl;","boxdr;","boxh;","boxhD;","boxhU;","boxhd;","boxhu;","boxminus;","boxplus;","boxtimes;","boxuL;","boxuR;","boxul;","boxur;","boxv;","boxvH;","boxvL;","boxvR;","boxvh;","boxvl;","boxvr;","bprime;","breve;","brvbar","brvbar;","bscr;","bsemi;","bsim;","bsime;","bsol;","bsolb;","bsolhsub;","bull;","bullet;","bump;","bumpE;","bumpe;","bumpeq;","cacute;","cap;","capand;","capbrcup;","capcap;","capcup;","capdot;","caps;","caret;","caron;","ccaps;","ccaron;","ccedil","ccedil;","ccirc;","ccups;","ccupssm;","cdot;","cedil","cedil;","cemptyv;","cent","cent;","centerdot;","cfr;","chcy;","check;","checkmark;","chi;","cir;","cirE;","circ;","circeq;","circlearrowleft;","circlearrowright;","circledR;","circledS;","circledast;","circledcirc;","circleddash;","cire;","cirfnint;","cirmid;","cirscir;","clubs;","clubsuit;","colon;","colone;","coloneq;","comma;","commat;","comp;","compfn;","complement;","complexes;","cong;","congdot;","conint;","copf;","coprod;","copy","copy;","copysr;","crarr;","cross;","cscr;","csub;","csube;","csup;","csupe;","ctdot;","cudarrl;","cudarrr;","cuepr;","cuesc;","cularr;","cularrp;","cup;","cupbrcap;","cupcap;","cupcup;","cupdot;","cupor;","cups;","curarr;","curarrm;","curlyeqprec;","curlyeqsucc;","curlyvee;","curlywedge;","curren","curren;","curvearrowleft;","curvearrowright;","cuvee;","cuwed;","cwconint;","cwint;","cylcty;","dArr;","dHar;","dagger;","daleth;","darr;","dash;","dashv;","dbkarow;","dblac;","dcaron;","dcy;","dd;","ddagger;","ddarr;","ddotseq;","deg","deg;","delta;","demptyv;","dfisht;","dfr;","dharl;","dharr;","diam;","diamond;","diamondsuit;","diams;","die;","digamma;","disin;","div;","divide","divide;","divideontimes;","divonx;","djcy;","dlcorn;","dlcrop;","dollar;","dopf;","dot;","doteq;","doteqdot;","dotminus;","dotplus;","dotsquare;","doublebarwedge;","downarrow;","downdownarrows;","downharpoonleft;","downharpoonright;","drbkarow;","drcorn;","drcrop;","dscr;","dscy;","dsol;","dstrok;","dtdot;","dtri;","dtrif;","duarr;","duhar;","dwangle;","dzcy;","dzigrarr;","eDDot;","eDot;","eacute","eacute;","easter;","ecaron;","ecir;","ecirc","ecirc;","ecolon;","ecy;","edot;","ee;","efDot;","efr;","eg;","egrave","egrave;","egs;","egsdot;","el;","elinters;","ell;","els;","elsdot;","emacr;","empty;","emptyset;","emptyv;","emsp13;","emsp14;","emsp;","eng;","ensp;","eogon;","eopf;","epar;","eparsl;","eplus;","epsi;","epsilon;","epsiv;","eqcirc;","eqcolon;","eqsim;","eqslantgtr;","eqslantless;","equals;","equest;","equiv;","equivDD;","eqvparsl;","erDot;","erarr;","escr;","esdot;","esim;","eta;","eth","eth;","euml","euml;","euro;","excl;","exist;","expectation;","exponentiale;","fallingdotseq;","fcy;","female;","ffilig;","fflig;","ffllig;","ffr;","filig;","fjlig;","flat;","fllig;","fltns;","fnof;","fopf;","forall;","fork;","forkv;","fpartint;","frac12","frac12;","frac13;","frac14","frac14;","frac15;","frac16;","frac18;","frac23;","frac25;","frac34","frac34;","frac35;","frac38;","frac45;","frac56;","frac58;","frac78;","frasl;","frown;","fscr;","gE;","gEl;","gacute;","gamma;","gammad;","gap;","gbreve;","gcirc;","gcy;","gdot;","ge;","gel;","geq;","geqq;","geqslant;","ges;","gescc;","gesdot;","gesdoto;","gesdotol;","gesl;","gesles;","gfr;","gg;","ggg;","gimel;","gjcy;","gl;","glE;","gla;","glj;","gnE;","gnap;","gnapprox;","gne;","gneq;","gneqq;","gnsim;","gopf;","grave;","gscr;","gsim;","gsime;","gsiml;","gt","gt;","gtcc;","gtcir;","gtdot;","gtlPar;","gtquest;","gtrapprox;","gtrarr;","gtrdot;","gtreqless;","gtreqqless;","gtrless;","gtrsim;","gvertneqq;","gvnE;","hArr;","hairsp;","half;","hamilt;","hardcy;","harr;","harrcir;","harrw;","hbar;","hcirc;","hearts;","heartsuit;","hellip;","hercon;","hfr;","hksearow;","hkswarow;","hoarr;","homtht;","hookleftarrow;","hookrightarrow;","hopf;","horbar;","hscr;","hslash;","hstrok;","hybull;","hyphen;","iacute","iacute;","ic;","icirc","icirc;","icy;","iecy;","iexcl","iexcl;","iff;","ifr;","igrave","igrave;","ii;","iiiint;","iiint;","iinfin;","iiota;","ijlig;","imacr;","image;","imagline;","imagpart;","imath;","imof;","imped;","in;","incare;","infin;","infintie;","inodot;","int;","intcal;","integers;","intercal;","intlarhk;","intprod;","iocy;","iogon;","iopf;","iota;","iprod;","iquest","iquest;","iscr;","isin;","isinE;","isindot;","isins;","isinsv;","isinv;","it;","itilde;","iukcy;","iuml","iuml;","jcirc;","jcy;","jfr;","jmath;","jopf;","jscr;","jsercy;","jukcy;","kappa;","kappav;","kcedil;","kcy;","kfr;","kgreen;","khcy;","kjcy;","kopf;","kscr;","lAarr;","lArr;","lAtail;","lBarr;","lE;","lEg;","lHar;","lacute;","laemptyv;","lagran;","lambda;","lang;","langd;","langle;","lap;","laquo","laquo;","larr;","larrb;","larrbfs;","larrfs;","larrhk;","larrlp;","larrpl;","larrsim;","larrtl;","lat;","latail;","late;","lates;","lbarr;","lbbrk;","lbrace;","lbrack;","lbrke;","lbrksld;","lbrkslu;","lcaron;","lcedil;","lceil;","lcub;","lcy;","ldca;","ldquo;","ldquor;","ldrdhar;","ldrushar;","ldsh;","le;","leftarrow;","leftarrowtail;","leftharpoondown;","leftharpoonup;","leftleftarrows;","leftrightarrow;","leftrightarrows;","leftrightharpoons;","leftrightsquigarrow;","leftthreetimes;","leg;","leq;","leqq;","leqslant;","les;","lescc;","lesdot;","lesdoto;","lesdotor;","lesg;","lesges;","lessapprox;","lessdot;","lesseqgtr;","lesseqqgtr;","lessgtr;","lesssim;","lfisht;","lfloor;","lfr;","lg;","lgE;","lhard;","lharu;","lharul;","lhblk;","ljcy;","ll;","llarr;","llcorner;","llhard;","lltri;","lmidot;","lmoust;","lmoustache;","lnE;","lnap;","lnapprox;","lne;","lneq;","lneqq;","lnsim;","loang;","loarr;","lobrk;","longleftarrow;","longleftrightarrow;","longmapsto;","longrightarrow;","looparrowleft;","looparrowright;","lopar;","lopf;","loplus;","lotimes;","lowast;","lowbar;","loz;","lozenge;","lozf;","lpar;","lparlt;","lrarr;","lrcorner;","lrhar;","lrhard;","lrm;","lrtri;","lsaquo;","lscr;","lsh;","lsim;","lsime;","lsimg;","lsqb;","lsquo;","lsquor;","lstrok;","lt","lt;","ltcc;","ltcir;","ltdot;","lthree;","ltimes;","ltlarr;","ltquest;","ltrPar;","ltri;","ltrie;","ltrif;","lurdshar;","luruhar;","lvertneqq;","lvnE;","mDDot;","macr","macr;","male;","malt;","maltese;","map;","mapsto;","mapstodown;","mapstoleft;","mapstoup;","marker;","mcomma;","mcy;","mdash;","measuredangle;","mfr;","mho;","micro","micro;","mid;","midast;","midcir;","middot","middot;","minus;","minusb;","minusd;","minusdu;","mlcp;","mldr;","mnplus;","models;","mopf;","mp;","mscr;","mstpos;","mu;","multimap;","mumap;","nGg;","nGt;","nGtv;","nLeftarrow;","nLeftrightarrow;","nLl;","nLt;","nLtv;","nRightarrow;","nVDash;","nVdash;","nabla;","nacute;","nang;","nap;","napE;","napid;","napos;","napprox;","natur;","natural;","naturals;","nbsp","nbsp;","nbump;","nbumpe;","ncap;","ncaron;","ncedil;","ncong;","ncongdot;","ncup;","ncy;","ndash;","ne;","neArr;","nearhk;","nearr;","nearrow;","nedot;","nequiv;","nesear;","nesim;","nexist;","nexists;","nfr;","ngE;","nge;","ngeq;","ngeqq;","ngeqslant;","nges;","ngsim;","ngt;","ngtr;","nhArr;","nharr;","nhpar;","ni;","nis;","nisd;","niv;","njcy;","nlArr;","nlE;","nlarr;","nldr;","nle;","nleftarrow;","nleftrightarrow;","nleq;","nleqq;","nleqslant;","nles;","nless;","nlsim;","nlt;","nltri;","nltrie;","nmid;","nopf;","not","not;","notin;","notinE;","notindot;","notinva;","notinvb;","notinvc;","notni;","notniva;","notnivb;","notnivc;","npar;","nparallel;","nparsl;","npart;","npolint;","npr;","nprcue;","npre;","nprec;","npreceq;","nrArr;","nrarr;","nrarrc;","nrarrw;","nrightarrow;","nrtri;","nrtrie;","nsc;","nsccue;","nsce;","nscr;","nshortmid;","nshortparallel;","nsim;","nsime;","nsimeq;","nsmid;","nspar;","nsqsube;","nsqsupe;","nsub;","nsubE;","nsube;","nsubset;","nsubseteq;","nsubseteqq;","nsucc;","nsucceq;","nsup;","nsupE;","nsupe;","nsupset;","nsupseteq;","nsupseteqq;","ntgl;","ntilde","ntilde;","ntlg;","ntriangleleft;","ntrianglelefteq;","ntriangleright;","ntrianglerighteq;","nu;","num;","numero;","numsp;","nvDash;","nvHarr;","nvap;","nvdash;","nvge;","nvgt;","nvinfin;","nvlArr;","nvle;","nvlt;","nvltrie;","nvrArr;","nvrtrie;","nvsim;","nwArr;","nwarhk;","nwarr;","nwarrow;","nwnear;","oS;","oacute","oacute;","oast;","ocir;","ocirc","ocirc;","ocy;","odash;","odblac;","odiv;","odot;","odsold;","oelig;","ofcir;","ofr;","ogon;","ograve","ograve;","ogt;","ohbar;","ohm;","oint;","olarr;","olcir;","olcross;","oline;","olt;","omacr;","omega;","omicron;","omid;","ominus;","oopf;","opar;","operp;","oplus;","or;","orarr;","ord;","order;","orderof;","ordf","ordf;","ordm","ordm;","origof;","oror;","orslope;","orv;","oscr;","oslash","oslash;","osol;","otilde","otilde;","otimes;","otimesas;","ouml","ouml;","ovbar;","par;","para","para;","parallel;","parsim;","parsl;","part;","pcy;","percnt;","period;","permil;","perp;","pertenk;","pfr;","phi;","phiv;","phmmat;","phone;","pi;","pitchfork;","piv;","planck;","planckh;","plankv;","plus;","plusacir;","plusb;","pluscir;","plusdo;","plusdu;","pluse;","plusmn","plusmn;","plussim;","plustwo;","pm;","pointint;","popf;","pound","pound;","pr;","prE;","prap;","prcue;","pre;","prec;","precapprox;","preccurlyeq;","preceq;","precnapprox;","precneqq;","precnsim;","precsim;","prime;","primes;","prnE;","prnap;","prnsim;","prod;","profalar;","profline;","profsurf;","prop;","propto;","prsim;","prurel;","pscr;","psi;","puncsp;","qfr;","qint;","qopf;","qprime;","qscr;","quaternions;","quatint;","quest;","questeq;","quot","quot;","rAarr;","rArr;","rAtail;","rBarr;","rHar;","race;","racute;","radic;","raemptyv;","rang;","rangd;","range;","rangle;","raquo","raquo;","rarr;","rarrap;","rarrb;","rarrbfs;","rarrc;","rarrfs;","rarrhk;","rarrlp;","rarrpl;","rarrsim;","rarrtl;","rarrw;","ratail;","ratio;","rationals;","rbarr;","rbbrk;","rbrace;","rbrack;","rbrke;","rbrksld;","rbrkslu;","rcaron;","rcedil;","rceil;","rcub;","rcy;","rdca;","rdldhar;","rdquo;","rdquor;","rdsh;","real;","realine;","realpart;","reals;","rect;","reg","reg;","rfisht;","rfloor;","rfr;","rhard;","rharu;","rharul;","rho;","rhov;","rightarrow;","rightarrowtail;","rightharpoondown;","rightharpoonup;","rightleftarrows;","rightleftharpoons;","rightrightarrows;","rightsquigarrow;","rightthreetimes;","ring;","risingdotseq;","rlarr;","rlhar;","rlm;","rmoust;","rmoustache;","rnmid;","roang;","roarr;","robrk;","ropar;","ropf;","roplus;","rotimes;","rpar;","rpargt;","rppolint;","rrarr;","rsaquo;","rscr;","rsh;","rsqb;","rsquo;","rsquor;","rthree;","rtimes;","rtri;","rtrie;","rtrif;","rtriltri;","ruluhar;","rx;","sacute;","sbquo;","sc;","scE;","scap;","scaron;","sccue;","sce;","scedil;","scirc;","scnE;","scnap;","scnsim;","scpolint;","scsim;","scy;","sdot;","sdotb;","sdote;","seArr;","searhk;","searr;","searrow;","sect","sect;","semi;","seswar;","setminus;","setmn;","sext;","sfr;","sfrown;","sharp;","shchcy;","shcy;","shortmid;","shortparallel;","shy","shy;","sigma;","sigmaf;","sigmav;","sim;","simdot;","sime;","simeq;","simg;","simgE;","siml;","simlE;","simne;","simplus;","simrarr;","slarr;","smallsetminus;","smashp;","smeparsl;","smid;","smile;","smt;","smte;","smtes;","softcy;","sol;","solb;","solbar;","sopf;","spades;","spadesuit;","spar;","sqcap;","sqcaps;","sqcup;","sqcups;","sqsub;","sqsube;","sqsubset;","sqsubseteq;","sqsup;","sqsupe;","sqsupset;","sqsupseteq;","squ;","square;","squarf;","squf;","srarr;","sscr;","ssetmn;","ssmile;","sstarf;","star;","starf;","straightepsilon;","straightphi;","strns;","sub;","subE;","subdot;","sube;","subedot;","submult;","subnE;","subne;","subplus;","subrarr;","subset;","subseteq;","subseteqq;","subsetneq;","subsetneqq;","subsim;","subsub;","subsup;","succ;","succapprox;","succcurlyeq;","succeq;","succnapprox;","succneqq;","succnsim;","succsim;","sum;","sung;","sup1","sup1;","sup2","sup2;","sup3","sup3;","sup;","supE;","supdot;","supdsub;","supe;","supedot;","suphsol;","suphsub;","suplarr;","supmult;","supnE;","supne;","supplus;","supset;","supseteq;","supseteqq;","supsetneq;","supsetneqq;","supsim;","supsub;","supsup;","swArr;","swarhk;","swarr;","swarrow;","swnwar;","szlig","szlig;","target;","tau;","tbrk;","tcaron;","tcedil;","tcy;","tdot;","telrec;","tfr;","there4;","therefore;","theta;","thetasym;","thetav;","thickapprox;","thicksim;","thinsp;","thkap;","thksim;","thorn","thorn;","tilde;","times","times;","timesb;","timesbar;","timesd;","tint;","toea;","top;","topbot;","topcir;","topf;","topfork;","tosa;","tprime;","trade;","triangle;","triangledown;","triangleleft;","trianglelefteq;","triangleq;","triangleright;","trianglerighteq;","tridot;","trie;","triminus;","triplus;","trisb;","tritime;","trpezium;","tscr;","tscy;","tshcy;","tstrok;","twixt;","twoheadleftarrow;","twoheadrightarrow;","uArr;","uHar;","uacute","uacute;","uarr;","ubrcy;","ubreve;","ucirc","ucirc;","ucy;","udarr;","udblac;","udhar;","ufisht;","ufr;","ugrave","ugrave;","uharl;","uharr;","uhblk;","ulcorn;","ulcorner;","ulcrop;","ultri;","umacr;","uml","uml;","uogon;","uopf;","uparrow;","updownarrow;","upharpoonleft;","upharpoonright;","uplus;","upsi;","upsih;","upsilon;","upuparrows;","urcorn;","urcorner;","urcrop;","uring;","urtri;","uscr;","utdot;","utilde;","utri;","utrif;","uuarr;","uuml","uuml;","uwangle;","vArr;","vBar;","vBarv;","vDash;","vangrt;","varepsilon;","varkappa;","varnothing;","varphi;","varpi;","varpropto;","varr;","varrho;","varsigma;","varsubsetneq;","varsubsetneqq;","varsupsetneq;","varsupsetneqq;","vartheta;","vartriangleleft;","vartriangleright;","vcy;","vdash;","vee;","veebar;","veeeq;","vellip;","verbar;","vert;","vfr;","vltri;","vnsub;","vnsup;","vopf;","vprop;","vrtri;","vscr;","vsubnE;","vsubne;","vsupnE;","vsupne;","vzigzag;","wcirc;","wedbar;","wedge;","wedgeq;","weierp;","wfr;","wopf;","wp;","wr;","wreath;","wscr;","xcap;","xcirc;","xcup;","xdtri;","xfr;","xhArr;","xharr;","xi;","xlArr;","xlarr;","xmap;","xnis;","xodot;","xopf;","xoplus;","xotime;","xrArr;","xrarr;","xscr;","xsqcup;","xuplus;","xutri;","xvee;","xwedge;","yacute","yacute;","yacy;","ycirc;","ycy;","yen","yen;","yfr;","yicy;","yopf;","yscr;","yucy;","yuml","yuml;","zacute;","zcaron;","zcy;","zdot;","zeetrf;","zeta;","zfr;","zhcy;","zigrarr;","zopf;","zscr;","zwj;","zwnj;"]),t.s)
B.T=new A.t(2231,{AElig:"\xc6","AElig;":"\xc6",AMP:"&","AMP;":"&",Aacute:"\xc1","Aacute;":"\xc1","Abreve;":"\u0102",Acirc:"\xc2","Acirc;":"\xc2","Acy;":"\u0410","Afr;":"\ud835\udd04",Agrave:"\xc0","Agrave;":"\xc0","Alpha;":"\u0391","Amacr;":"\u0100","And;":"\u2a53","Aogon;":"\u0104","Aopf;":"\ud835\udd38","ApplyFunction;":"\u2061",Aring:"\xc5","Aring;":"\xc5","Ascr;":"\ud835\udc9c","Assign;":"\u2254",Atilde:"\xc3","Atilde;":"\xc3",Auml:"\xc4","Auml;":"\xc4","Backslash;":"\u2216","Barv;":"\u2ae7","Barwed;":"\u2306","Bcy;":"\u0411","Because;":"\u2235","Bernoullis;":"\u212c","Beta;":"\u0392","Bfr;":"\ud835\udd05","Bopf;":"\ud835\udd39","Breve;":"\u02d8","Bscr;":"\u212c","Bumpeq;":"\u224e","CHcy;":"\u0427",COPY:"\xa9","COPY;":"\xa9","Cacute;":"\u0106","Cap;":"\u22d2","CapitalDifferentialD;":"\u2145","Cayleys;":"\u212d","Ccaron;":"\u010c",Ccedil:"\xc7","Ccedil;":"\xc7","Ccirc;":"\u0108","Cconint;":"\u2230","Cdot;":"\u010a","Cedilla;":"\xb8","CenterDot;":"\xb7","Cfr;":"\u212d","Chi;":"\u03a7","CircleDot;":"\u2299","CircleMinus;":"\u2296","CirclePlus;":"\u2295","CircleTimes;":"\u2297","ClockwiseContourIntegral;":"\u2232","CloseCurlyDoubleQuote;":"\u201d","CloseCurlyQuote;":"\u2019","Colon;":"\u2237","Colone;":"\u2a74","Congruent;":"\u2261","Conint;":"\u222f","ContourIntegral;":"\u222e","Copf;":"\u2102","Coproduct;":"\u2210","CounterClockwiseContourIntegral;":"\u2233","Cross;":"\u2a2f","Cscr;":"\ud835\udc9e","Cup;":"\u22d3","CupCap;":"\u224d","DD;":"\u2145","DDotrahd;":"\u2911","DJcy;":"\u0402","DScy;":"\u0405","DZcy;":"\u040f","Dagger;":"\u2021","Darr;":"\u21a1","Dashv;":"\u2ae4","Dcaron;":"\u010e","Dcy;":"\u0414","Del;":"\u2207","Delta;":"\u0394","Dfr;":"\ud835\udd07","DiacriticalAcute;":"\xb4","DiacriticalDot;":"\u02d9","DiacriticalDoubleAcute;":"\u02dd","DiacriticalGrave;":"`","DiacriticalTilde;":"\u02dc","Diamond;":"\u22c4","DifferentialD;":"\u2146","Dopf;":"\ud835\udd3b","Dot;":"\xa8","DotDot;":"\u20dc","DotEqual;":"\u2250","DoubleContourIntegral;":"\u222f","DoubleDot;":"\xa8","DoubleDownArrow;":"\u21d3","DoubleLeftArrow;":"\u21d0","DoubleLeftRightArrow;":"\u21d4","DoubleLeftTee;":"\u2ae4","DoubleLongLeftArrow;":"\u27f8","DoubleLongLeftRightArrow;":"\u27fa","DoubleLongRightArrow;":"\u27f9","DoubleRightArrow;":"\u21d2","DoubleRightTee;":"\u22a8","DoubleUpArrow;":"\u21d1","DoubleUpDownArrow;":"\u21d5","DoubleVerticalBar;":"\u2225","DownArrow;":"\u2193","DownArrowBar;":"\u2913","DownArrowUpArrow;":"\u21f5","DownBreve;":"\u0311","DownLeftRightVector;":"\u2950","DownLeftTeeVector;":"\u295e","DownLeftVector;":"\u21bd","DownLeftVectorBar;":"\u2956","DownRightTeeVector;":"\u295f","DownRightVector;":"\u21c1","DownRightVectorBar;":"\u2957","DownTee;":"\u22a4","DownTeeArrow;":"\u21a7","Downarrow;":"\u21d3","Dscr;":"\ud835\udc9f","Dstrok;":"\u0110","ENG;":"\u014a",ETH:"\xd0","ETH;":"\xd0",Eacute:"\xc9","Eacute;":"\xc9","Ecaron;":"\u011a",Ecirc:"\xca","Ecirc;":"\xca","Ecy;":"\u042d","Edot;":"\u0116","Efr;":"\ud835\udd08",Egrave:"\xc8","Egrave;":"\xc8","Element;":"\u2208","Emacr;":"\u0112","EmptySmallSquare;":"\u25fb","EmptyVerySmallSquare;":"\u25ab","Eogon;":"\u0118","Eopf;":"\ud835\udd3c","Epsilon;":"\u0395","Equal;":"\u2a75","EqualTilde;":"\u2242","Equilibrium;":"\u21cc","Escr;":"\u2130","Esim;":"\u2a73","Eta;":"\u0397",Euml:"\xcb","Euml;":"\xcb","Exists;":"\u2203","ExponentialE;":"\u2147","Fcy;":"\u0424","Ffr;":"\ud835\udd09","FilledSmallSquare;":"\u25fc","FilledVerySmallSquare;":"\u25aa","Fopf;":"\ud835\udd3d","ForAll;":"\u2200","Fouriertrf;":"\u2131","Fscr;":"\u2131","GJcy;":"\u0403",GT:">","GT;":">","Gamma;":"\u0393","Gammad;":"\u03dc","Gbreve;":"\u011e","Gcedil;":"\u0122","Gcirc;":"\u011c","Gcy;":"\u0413","Gdot;":"\u0120","Gfr;":"\ud835\udd0a","Gg;":"\u22d9","Gopf;":"\ud835\udd3e","GreaterEqual;":"\u2265","GreaterEqualLess;":"\u22db","GreaterFullEqual;":"\u2267","GreaterGreater;":"\u2aa2","GreaterLess;":"\u2277","GreaterSlantEqual;":"\u2a7e","GreaterTilde;":"\u2273","Gscr;":"\ud835\udca2","Gt;":"\u226b","HARDcy;":"\u042a","Hacek;":"\u02c7","Hat;":"^","Hcirc;":"\u0124","Hfr;":"\u210c","HilbertSpace;":"\u210b","Hopf;":"\u210d","HorizontalLine;":"\u2500","Hscr;":"\u210b","Hstrok;":"\u0126","HumpDownHump;":"\u224e","HumpEqual;":"\u224f","IEcy;":"\u0415","IJlig;":"\u0132","IOcy;":"\u0401",Iacute:"\xcd","Iacute;":"\xcd",Icirc:"\xce","Icirc;":"\xce","Icy;":"\u0418","Idot;":"\u0130","Ifr;":"\u2111",Igrave:"\xcc","Igrave;":"\xcc","Im;":"\u2111","Imacr;":"\u012a","ImaginaryI;":"\u2148","Implies;":"\u21d2","Int;":"\u222c","Integral;":"\u222b","Intersection;":"\u22c2","InvisibleComma;":"\u2063","InvisibleTimes;":"\u2062","Iogon;":"\u012e","Iopf;":"\ud835\udd40","Iota;":"\u0399","Iscr;":"\u2110","Itilde;":"\u0128","Iukcy;":"\u0406",Iuml:"\xcf","Iuml;":"\xcf","Jcirc;":"\u0134","Jcy;":"\u0419","Jfr;":"\ud835\udd0d","Jopf;":"\ud835\udd41","Jscr;":"\ud835\udca5","Jsercy;":"\u0408","Jukcy;":"\u0404","KHcy;":"\u0425","KJcy;":"\u040c","Kappa;":"\u039a","Kcedil;":"\u0136","Kcy;":"\u041a","Kfr;":"\ud835\udd0e","Kopf;":"\ud835\udd42","Kscr;":"\ud835\udca6","LJcy;":"\u0409",LT:"<","LT;":"<","Lacute;":"\u0139","Lambda;":"\u039b","Lang;":"\u27ea","Laplacetrf;":"\u2112","Larr;":"\u219e","Lcaron;":"\u013d","Lcedil;":"\u013b","Lcy;":"\u041b","LeftAngleBracket;":"\u27e8","LeftArrow;":"\u2190","LeftArrowBar;":"\u21e4","LeftArrowRightArrow;":"\u21c6","LeftCeiling;":"\u2308","LeftDoubleBracket;":"\u27e6","LeftDownTeeVector;":"\u2961","LeftDownVector;":"\u21c3","LeftDownVectorBar;":"\u2959","LeftFloor;":"\u230a","LeftRightArrow;":"\u2194","LeftRightVector;":"\u294e","LeftTee;":"\u22a3","LeftTeeArrow;":"\u21a4","LeftTeeVector;":"\u295a","LeftTriangle;":"\u22b2","LeftTriangleBar;":"\u29cf","LeftTriangleEqual;":"\u22b4","LeftUpDownVector;":"\u2951","LeftUpTeeVector;":"\u2960","LeftUpVector;":"\u21bf","LeftUpVectorBar;":"\u2958","LeftVector;":"\u21bc","LeftVectorBar;":"\u2952","Leftarrow;":"\u21d0","Leftrightarrow;":"\u21d4","LessEqualGreater;":"\u22da","LessFullEqual;":"\u2266","LessGreater;":"\u2276","LessLess;":"\u2aa1","LessSlantEqual;":"\u2a7d","LessTilde;":"\u2272","Lfr;":"\ud835\udd0f","Ll;":"\u22d8","Lleftarrow;":"\u21da","Lmidot;":"\u013f","LongLeftArrow;":"\u27f5","LongLeftRightArrow;":"\u27f7","LongRightArrow;":"\u27f6","Longleftarrow;":"\u27f8","Longleftrightarrow;":"\u27fa","Longrightarrow;":"\u27f9","Lopf;":"\ud835\udd43","LowerLeftArrow;":"\u2199","LowerRightArrow;":"\u2198","Lscr;":"\u2112","Lsh;":"\u21b0","Lstrok;":"\u0141","Lt;":"\u226a","Map;":"\u2905","Mcy;":"\u041c","MediumSpace;":"\u205f","Mellintrf;":"\u2133","Mfr;":"\ud835\udd10","MinusPlus;":"\u2213","Mopf;":"\ud835\udd44","Mscr;":"\u2133","Mu;":"\u039c","NJcy;":"\u040a","Nacute;":"\u0143","Ncaron;":"\u0147","Ncedil;":"\u0145","Ncy;":"\u041d","NegativeMediumSpace;":"\u200b","NegativeThickSpace;":"\u200b","NegativeThinSpace;":"\u200b","NegativeVeryThinSpace;":"\u200b","NestedGreaterGreater;":"\u226b","NestedLessLess;":"\u226a","NewLine;":"\n","Nfr;":"\ud835\udd11","NoBreak;":"\u2060","NonBreakingSpace;":"\xa0","Nopf;":"\u2115","Not;":"\u2aec","NotCongruent;":"\u2262","NotCupCap;":"\u226d","NotDoubleVerticalBar;":"\u2226","NotElement;":"\u2209","NotEqual;":"\u2260","NotEqualTilde;":"\u2242\u0338","NotExists;":"\u2204","NotGreater;":"\u226f","NotGreaterEqual;":"\u2271","NotGreaterFullEqual;":"\u2267\u0338","NotGreaterGreater;":"\u226b\u0338","NotGreaterLess;":"\u2279","NotGreaterSlantEqual;":"\u2a7e\u0338","NotGreaterTilde;":"\u2275","NotHumpDownHump;":"\u224e\u0338","NotHumpEqual;":"\u224f\u0338","NotLeftTriangle;":"\u22ea","NotLeftTriangleBar;":"\u29cf\u0338","NotLeftTriangleEqual;":"\u22ec","NotLess;":"\u226e","NotLessEqual;":"\u2270","NotLessGreater;":"\u2278","NotLessLess;":"\u226a\u0338","NotLessSlantEqual;":"\u2a7d\u0338","NotLessTilde;":"\u2274","NotNestedGreaterGreater;":"\u2aa2\u0338","NotNestedLessLess;":"\u2aa1\u0338","NotPrecedes;":"\u2280","NotPrecedesEqual;":"\u2aaf\u0338","NotPrecedesSlantEqual;":"\u22e0","NotReverseElement;":"\u220c","NotRightTriangle;":"\u22eb","NotRightTriangleBar;":"\u29d0\u0338","NotRightTriangleEqual;":"\u22ed","NotSquareSubset;":"\u228f\u0338","NotSquareSubsetEqual;":"\u22e2","NotSquareSuperset;":"\u2290\u0338","NotSquareSupersetEqual;":"\u22e3","NotSubset;":"\u2282\u20d2","NotSubsetEqual;":"\u2288","NotSucceeds;":"\u2281","NotSucceedsEqual;":"\u2ab0\u0338","NotSucceedsSlantEqual;":"\u22e1","NotSucceedsTilde;":"\u227f\u0338","NotSuperset;":"\u2283\u20d2","NotSupersetEqual;":"\u2289","NotTilde;":"\u2241","NotTildeEqual;":"\u2244","NotTildeFullEqual;":"\u2247","NotTildeTilde;":"\u2249","NotVerticalBar;":"\u2224","Nscr;":"\ud835\udca9",Ntilde:"\xd1","Ntilde;":"\xd1","Nu;":"\u039d","OElig;":"\u0152",Oacute:"\xd3","Oacute;":"\xd3",Ocirc:"\xd4","Ocirc;":"\xd4","Ocy;":"\u041e","Odblac;":"\u0150","Ofr;":"\ud835\udd12",Ograve:"\xd2","Ograve;":"\xd2","Omacr;":"\u014c","Omega;":"\u03a9","Omicron;":"\u039f","Oopf;":"\ud835\udd46","OpenCurlyDoubleQuote;":"\u201c","OpenCurlyQuote;":"\u2018","Or;":"\u2a54","Oscr;":"\ud835\udcaa",Oslash:"\xd8","Oslash;":"\xd8",Otilde:"\xd5","Otilde;":"\xd5","Otimes;":"\u2a37",Ouml:"\xd6","Ouml;":"\xd6","OverBar;":"\u203e","OverBrace;":"\u23de","OverBracket;":"\u23b4","OverParenthesis;":"\u23dc","PartialD;":"\u2202","Pcy;":"\u041f","Pfr;":"\ud835\udd13","Phi;":"\u03a6","Pi;":"\u03a0","PlusMinus;":"\xb1","Poincareplane;":"\u210c","Popf;":"\u2119","Pr;":"\u2abb","Precedes;":"\u227a","PrecedesEqual;":"\u2aaf","PrecedesSlantEqual;":"\u227c","PrecedesTilde;":"\u227e","Prime;":"\u2033","Product;":"\u220f","Proportion;":"\u2237","Proportional;":"\u221d","Pscr;":"\ud835\udcab","Psi;":"\u03a8",QUOT:'"',"QUOT;":'"',"Qfr;":"\ud835\udd14","Qopf;":"\u211a","Qscr;":"\ud835\udcac","RBarr;":"\u2910",REG:"\xae","REG;":"\xae","Racute;":"\u0154","Rang;":"\u27eb","Rarr;":"\u21a0","Rarrtl;":"\u2916","Rcaron;":"\u0158","Rcedil;":"\u0156","Rcy;":"\u0420","Re;":"\u211c","ReverseElement;":"\u220b","ReverseEquilibrium;":"\u21cb","ReverseUpEquilibrium;":"\u296f","Rfr;":"\u211c","Rho;":"\u03a1","RightAngleBracket;":"\u27e9","RightArrow;":"\u2192","RightArrowBar;":"\u21e5","RightArrowLeftArrow;":"\u21c4","RightCeiling;":"\u2309","RightDoubleBracket;":"\u27e7","RightDownTeeVector;":"\u295d","RightDownVector;":"\u21c2","RightDownVectorBar;":"\u2955","RightFloor;":"\u230b","RightTee;":"\u22a2","RightTeeArrow;":"\u21a6","RightTeeVector;":"\u295b","RightTriangle;":"\u22b3","RightTriangleBar;":"\u29d0","RightTriangleEqual;":"\u22b5","RightUpDownVector;":"\u294f","RightUpTeeVector;":"\u295c","RightUpVector;":"\u21be","RightUpVectorBar;":"\u2954","RightVector;":"\u21c0","RightVectorBar;":"\u2953","Rightarrow;":"\u21d2","Ropf;":"\u211d","RoundImplies;":"\u2970","Rrightarrow;":"\u21db","Rscr;":"\u211b","Rsh;":"\u21b1","RuleDelayed;":"\u29f4","SHCHcy;":"\u0429","SHcy;":"\u0428","SOFTcy;":"\u042c","Sacute;":"\u015a","Sc;":"\u2abc","Scaron;":"\u0160","Scedil;":"\u015e","Scirc;":"\u015c","Scy;":"\u0421","Sfr;":"\ud835\udd16","ShortDownArrow;":"\u2193","ShortLeftArrow;":"\u2190","ShortRightArrow;":"\u2192","ShortUpArrow;":"\u2191","Sigma;":"\u03a3","SmallCircle;":"\u2218","Sopf;":"\ud835\udd4a","Sqrt;":"\u221a","Square;":"\u25a1","SquareIntersection;":"\u2293","SquareSubset;":"\u228f","SquareSubsetEqual;":"\u2291","SquareSuperset;":"\u2290","SquareSupersetEqual;":"\u2292","SquareUnion;":"\u2294","Sscr;":"\ud835\udcae","Star;":"\u22c6","Sub;":"\u22d0","Subset;":"\u22d0","SubsetEqual;":"\u2286","Succeeds;":"\u227b","SucceedsEqual;":"\u2ab0","SucceedsSlantEqual;":"\u227d","SucceedsTilde;":"\u227f","SuchThat;":"\u220b","Sum;":"\u2211","Sup;":"\u22d1","Superset;":"\u2283","SupersetEqual;":"\u2287","Supset;":"\u22d1",THORN:"\xde","THORN;":"\xde","TRADE;":"\u2122","TSHcy;":"\u040b","TScy;":"\u0426","Tab;":"\t","Tau;":"\u03a4","Tcaron;":"\u0164","Tcedil;":"\u0162","Tcy;":"\u0422","Tfr;":"\ud835\udd17","Therefore;":"\u2234","Theta;":"\u0398","ThickSpace;":"\u205f\u200a","ThinSpace;":"\u2009","Tilde;":"\u223c","TildeEqual;":"\u2243","TildeFullEqual;":"\u2245","TildeTilde;":"\u2248","Topf;":"\ud835\udd4b","TripleDot;":"\u20db","Tscr;":"\ud835\udcaf","Tstrok;":"\u0166",Uacute:"\xda","Uacute;":"\xda","Uarr;":"\u219f","Uarrocir;":"\u2949","Ubrcy;":"\u040e","Ubreve;":"\u016c",Ucirc:"\xdb","Ucirc;":"\xdb","Ucy;":"\u0423","Udblac;":"\u0170","Ufr;":"\ud835\udd18",Ugrave:"\xd9","Ugrave;":"\xd9","Umacr;":"\u016a","UnderBar;":"_","UnderBrace;":"\u23df","UnderBracket;":"\u23b5","UnderParenthesis;":"\u23dd","Union;":"\u22c3","UnionPlus;":"\u228e","Uogon;":"\u0172","Uopf;":"\ud835\udd4c","UpArrow;":"\u2191","UpArrowBar;":"\u2912","UpArrowDownArrow;":"\u21c5","UpDownArrow;":"\u2195","UpEquilibrium;":"\u296e","UpTee;":"\u22a5","UpTeeArrow;":"\u21a5","Uparrow;":"\u21d1","Updownarrow;":"\u21d5","UpperLeftArrow;":"\u2196","UpperRightArrow;":"\u2197","Upsi;":"\u03d2","Upsilon;":"\u03a5","Uring;":"\u016e","Uscr;":"\ud835\udcb0","Utilde;":"\u0168",Uuml:"\xdc","Uuml;":"\xdc","VDash;":"\u22ab","Vbar;":"\u2aeb","Vcy;":"\u0412","Vdash;":"\u22a9","Vdashl;":"\u2ae6","Vee;":"\u22c1","Verbar;":"\u2016","Vert;":"\u2016","VerticalBar;":"\u2223","VerticalLine;":"|","VerticalSeparator;":"\u2758","VerticalTilde;":"\u2240","VeryThinSpace;":"\u200a","Vfr;":"\ud835\udd19","Vopf;":"\ud835\udd4d","Vscr;":"\ud835\udcb1","Vvdash;":"\u22aa","Wcirc;":"\u0174","Wedge;":"\u22c0","Wfr;":"\ud835\udd1a","Wopf;":"\ud835\udd4e","Wscr;":"\ud835\udcb2","Xfr;":"\ud835\udd1b","Xi;":"\u039e","Xopf;":"\ud835\udd4f","Xscr;":"\ud835\udcb3","YAcy;":"\u042f","YIcy;":"\u0407","YUcy;":"\u042e",Yacute:"\xdd","Yacute;":"\xdd","Ycirc;":"\u0176","Ycy;":"\u042b","Yfr;":"\ud835\udd1c","Yopf;":"\ud835\udd50","Yscr;":"\ud835\udcb4","Yuml;":"\u0178","ZHcy;":"\u0416","Zacute;":"\u0179","Zcaron;":"\u017d","Zcy;":"\u0417","Zdot;":"\u017b","ZeroWidthSpace;":"\u200b","Zeta;":"\u0396","Zfr;":"\u2128","Zopf;":"\u2124","Zscr;":"\ud835\udcb5",aacute:"\xe1","aacute;":"\xe1","abreve;":"\u0103","ac;":"\u223e","acE;":"\u223e\u0333","acd;":"\u223f",acirc:"\xe2","acirc;":"\xe2",acute:"\xb4","acute;":"\xb4","acy;":"\u0430",aelig:"\xe6","aelig;":"\xe6","af;":"\u2061","afr;":"\ud835\udd1e",agrave:"\xe0","agrave;":"\xe0","alefsym;":"\u2135","aleph;":"\u2135","alpha;":"\u03b1","amacr;":"\u0101","amalg;":"\u2a3f",amp:"&","amp;":"&","and;":"\u2227","andand;":"\u2a55","andd;":"\u2a5c","andslope;":"\u2a58","andv;":"\u2a5a","ang;":"\u2220","ange;":"\u29a4","angle;":"\u2220","angmsd;":"\u2221","angmsdaa;":"\u29a8","angmsdab;":"\u29a9","angmsdac;":"\u29aa","angmsdad;":"\u29ab","angmsdae;":"\u29ac","angmsdaf;":"\u29ad","angmsdag;":"\u29ae","angmsdah;":"\u29af","angrt;":"\u221f","angrtvb;":"\u22be","angrtvbd;":"\u299d","angsph;":"\u2222","angst;":"\xc5","angzarr;":"\u237c","aogon;":"\u0105","aopf;":"\ud835\udd52","ap;":"\u2248","apE;":"\u2a70","apacir;":"\u2a6f","ape;":"\u224a","apid;":"\u224b","apos;":"'","approx;":"\u2248","approxeq;":"\u224a",aring:"\xe5","aring;":"\xe5","ascr;":"\ud835\udcb6","ast;":"*","asymp;":"\u2248","asympeq;":"\u224d",atilde:"\xe3","atilde;":"\xe3",auml:"\xe4","auml;":"\xe4","awconint;":"\u2233","awint;":"\u2a11","bNot;":"\u2aed","backcong;":"\u224c","backepsilon;":"\u03f6","backprime;":"\u2035","backsim;":"\u223d","backsimeq;":"\u22cd","barvee;":"\u22bd","barwed;":"\u2305","barwedge;":"\u2305","bbrk;":"\u23b5","bbrktbrk;":"\u23b6","bcong;":"\u224c","bcy;":"\u0431","bdquo;":"\u201e","becaus;":"\u2235","because;":"\u2235","bemptyv;":"\u29b0","bepsi;":"\u03f6","bernou;":"\u212c","beta;":"\u03b2","beth;":"\u2136","between;":"\u226c","bfr;":"\ud835\udd1f","bigcap;":"\u22c2","bigcirc;":"\u25ef","bigcup;":"\u22c3","bigodot;":"\u2a00","bigoplus;":"\u2a01","bigotimes;":"\u2a02","bigsqcup;":"\u2a06","bigstar;":"\u2605","bigtriangledown;":"\u25bd","bigtriangleup;":"\u25b3","biguplus;":"\u2a04","bigvee;":"\u22c1","bigwedge;":"\u22c0","bkarow;":"\u290d","blacklozenge;":"\u29eb","blacksquare;":"\u25aa","blacktriangle;":"\u25b4","blacktriangledown;":"\u25be","blacktriangleleft;":"\u25c2","blacktriangleright;":"\u25b8","blank;":"\u2423","blk12;":"\u2592","blk14;":"\u2591","blk34;":"\u2593","block;":"\u2588","bne;":"=\u20e5","bnequiv;":"\u2261\u20e5","bnot;":"\u2310","bopf;":"\ud835\udd53","bot;":"\u22a5","bottom;":"\u22a5","bowtie;":"\u22c8","boxDL;":"\u2557","boxDR;":"\u2554","boxDl;":"\u2556","boxDr;":"\u2553","boxH;":"\u2550","boxHD;":"\u2566","boxHU;":"\u2569","boxHd;":"\u2564","boxHu;":"\u2567","boxUL;":"\u255d","boxUR;":"\u255a","boxUl;":"\u255c","boxUr;":"\u2559","boxV;":"\u2551","boxVH;":"\u256c","boxVL;":"\u2563","boxVR;":"\u2560","boxVh;":"\u256b","boxVl;":"\u2562","boxVr;":"\u255f","boxbox;":"\u29c9","boxdL;":"\u2555","boxdR;":"\u2552","boxdl;":"\u2510","boxdr;":"\u250c","boxh;":"\u2500","boxhD;":"\u2565","boxhU;":"\u2568","boxhd;":"\u252c","boxhu;":"\u2534","boxminus;":"\u229f","boxplus;":"\u229e","boxtimes;":"\u22a0","boxuL;":"\u255b","boxuR;":"\u2558","boxul;":"\u2518","boxur;":"\u2514","boxv;":"\u2502","boxvH;":"\u256a","boxvL;":"\u2561","boxvR;":"\u255e","boxvh;":"\u253c","boxvl;":"\u2524","boxvr;":"\u251c","bprime;":"\u2035","breve;":"\u02d8",brvbar:"\xa6","brvbar;":"\xa6","bscr;":"\ud835\udcb7","bsemi;":"\u204f","bsim;":"\u223d","bsime;":"\u22cd","bsol;":"\\","bsolb;":"\u29c5","bsolhsub;":"\u27c8","bull;":"\u2022","bullet;":"\u2022","bump;":"\u224e","bumpE;":"\u2aae","bumpe;":"\u224f","bumpeq;":"\u224f","cacute;":"\u0107","cap;":"\u2229","capand;":"\u2a44","capbrcup;":"\u2a49","capcap;":"\u2a4b","capcup;":"\u2a47","capdot;":"\u2a40","caps;":"\u2229\ufe00","caret;":"\u2041","caron;":"\u02c7","ccaps;":"\u2a4d","ccaron;":"\u010d",ccedil:"\xe7","ccedil;":"\xe7","ccirc;":"\u0109","ccups;":"\u2a4c","ccupssm;":"\u2a50","cdot;":"\u010b",cedil:"\xb8","cedil;":"\xb8","cemptyv;":"\u29b2",cent:"\xa2","cent;":"\xa2","centerdot;":"\xb7","cfr;":"\ud835\udd20","chcy;":"\u0447","check;":"\u2713","checkmark;":"\u2713","chi;":"\u03c7","cir;":"\u25cb","cirE;":"\u29c3","circ;":"\u02c6","circeq;":"\u2257","circlearrowleft;":"\u21ba","circlearrowright;":"\u21bb","circledR;":"\xae","circledS;":"\u24c8","circledast;":"\u229b","circledcirc;":"\u229a","circleddash;":"\u229d","cire;":"\u2257","cirfnint;":"\u2a10","cirmid;":"\u2aef","cirscir;":"\u29c2","clubs;":"\u2663","clubsuit;":"\u2663","colon;":":","colone;":"\u2254","coloneq;":"\u2254","comma;":",","commat;":"@","comp;":"\u2201","compfn;":"\u2218","complement;":"\u2201","complexes;":"\u2102","cong;":"\u2245","congdot;":"\u2a6d","conint;":"\u222e","copf;":"\ud835\udd54","coprod;":"\u2210",copy:"\xa9","copy;":"\xa9","copysr;":"\u2117","crarr;":"\u21b5","cross;":"\u2717","cscr;":"\ud835\udcb8","csub;":"\u2acf","csube;":"\u2ad1","csup;":"\u2ad0","csupe;":"\u2ad2","ctdot;":"\u22ef","cudarrl;":"\u2938","cudarrr;":"\u2935","cuepr;":"\u22de","cuesc;":"\u22df","cularr;":"\u21b6","cularrp;":"\u293d","cup;":"\u222a","cupbrcap;":"\u2a48","cupcap;":"\u2a46","cupcup;":"\u2a4a","cupdot;":"\u228d","cupor;":"\u2a45","cups;":"\u222a\ufe00","curarr;":"\u21b7","curarrm;":"\u293c","curlyeqprec;":"\u22de","curlyeqsucc;":"\u22df","curlyvee;":"\u22ce","curlywedge;":"\u22cf",curren:"\xa4","curren;":"\xa4","curvearrowleft;":"\u21b6","curvearrowright;":"\u21b7","cuvee;":"\u22ce","cuwed;":"\u22cf","cwconint;":"\u2232","cwint;":"\u2231","cylcty;":"\u232d","dArr;":"\u21d3","dHar;":"\u2965","dagger;":"\u2020","daleth;":"\u2138","darr;":"\u2193","dash;":"\u2010","dashv;":"\u22a3","dbkarow;":"\u290f","dblac;":"\u02dd","dcaron;":"\u010f","dcy;":"\u0434","dd;":"\u2146","ddagger;":"\u2021","ddarr;":"\u21ca","ddotseq;":"\u2a77",deg:"\xb0","deg;":"\xb0","delta;":"\u03b4","demptyv;":"\u29b1","dfisht;":"\u297f","dfr;":"\ud835\udd21","dharl;":"\u21c3","dharr;":"\u21c2","diam;":"\u22c4","diamond;":"\u22c4","diamondsuit;":"\u2666","diams;":"\u2666","die;":"\xa8","digamma;":"\u03dd","disin;":"\u22f2","div;":"\xf7",divide:"\xf7","divide;":"\xf7","divideontimes;":"\u22c7","divonx;":"\u22c7","djcy;":"\u0452","dlcorn;":"\u231e","dlcrop;":"\u230d","dollar;":"$","dopf;":"\ud835\udd55","dot;":"\u02d9","doteq;":"\u2250","doteqdot;":"\u2251","dotminus;":"\u2238","dotplus;":"\u2214","dotsquare;":"\u22a1","doublebarwedge;":"\u2306","downarrow;":"\u2193","downdownarrows;":"\u21ca","downharpoonleft;":"\u21c3","downharpoonright;":"\u21c2","drbkarow;":"\u2910","drcorn;":"\u231f","drcrop;":"\u230c","dscr;":"\ud835\udcb9","dscy;":"\u0455","dsol;":"\u29f6","dstrok;":"\u0111","dtdot;":"\u22f1","dtri;":"\u25bf","dtrif;":"\u25be","duarr;":"\u21f5","duhar;":"\u296f","dwangle;":"\u29a6","dzcy;":"\u045f","dzigrarr;":"\u27ff","eDDot;":"\u2a77","eDot;":"\u2251",eacute:"\xe9","eacute;":"\xe9","easter;":"\u2a6e","ecaron;":"\u011b","ecir;":"\u2256",ecirc:"\xea","ecirc;":"\xea","ecolon;":"\u2255","ecy;":"\u044d","edot;":"\u0117","ee;":"\u2147","efDot;":"\u2252","efr;":"\ud835\udd22","eg;":"\u2a9a",egrave:"\xe8","egrave;":"\xe8","egs;":"\u2a96","egsdot;":"\u2a98","el;":"\u2a99","elinters;":"\u23e7","ell;":"\u2113","els;":"\u2a95","elsdot;":"\u2a97","emacr;":"\u0113","empty;":"\u2205","emptyset;":"\u2205","emptyv;":"\u2205","emsp13;":"\u2004","emsp14;":"\u2005","emsp;":"\u2003","eng;":"\u014b","ensp;":"\u2002","eogon;":"\u0119","eopf;":"\ud835\udd56","epar;":"\u22d5","eparsl;":"\u29e3","eplus;":"\u2a71","epsi;":"\u03b5","epsilon;":"\u03b5","epsiv;":"\u03f5","eqcirc;":"\u2256","eqcolon;":"\u2255","eqsim;":"\u2242","eqslantgtr;":"\u2a96","eqslantless;":"\u2a95","equals;":"=","equest;":"\u225f","equiv;":"\u2261","equivDD;":"\u2a78","eqvparsl;":"\u29e5","erDot;":"\u2253","erarr;":"\u2971","escr;":"\u212f","esdot;":"\u2250","esim;":"\u2242","eta;":"\u03b7",eth:"\xf0","eth;":"\xf0",euml:"\xeb","euml;":"\xeb","euro;":"\u20ac","excl;":"!","exist;":"\u2203","expectation;":"\u2130","exponentiale;":"\u2147","fallingdotseq;":"\u2252","fcy;":"\u0444","female;":"\u2640","ffilig;":"\ufb03","fflig;":"\ufb00","ffllig;":"\ufb04","ffr;":"\ud835\udd23","filig;":"\ufb01","fjlig;":"fj","flat;":"\u266d","fllig;":"\ufb02","fltns;":"\u25b1","fnof;":"\u0192","fopf;":"\ud835\udd57","forall;":"\u2200","fork;":"\u22d4","forkv;":"\u2ad9","fpartint;":"\u2a0d",frac12:"\xbd","frac12;":"\xbd","frac13;":"\u2153",frac14:"\xbc","frac14;":"\xbc","frac15;":"\u2155","frac16;":"\u2159","frac18;":"\u215b","frac23;":"\u2154","frac25;":"\u2156",frac34:"\xbe","frac34;":"\xbe","frac35;":"\u2157","frac38;":"\u215c","frac45;":"\u2158","frac56;":"\u215a","frac58;":"\u215d","frac78;":"\u215e","frasl;":"\u2044","frown;":"\u2322","fscr;":"\ud835\udcbb","gE;":"\u2267","gEl;":"\u2a8c","gacute;":"\u01f5","gamma;":"\u03b3","gammad;":"\u03dd","gap;":"\u2a86","gbreve;":"\u011f","gcirc;":"\u011d","gcy;":"\u0433","gdot;":"\u0121","ge;":"\u2265","gel;":"\u22db","geq;":"\u2265","geqq;":"\u2267","geqslant;":"\u2a7e","ges;":"\u2a7e","gescc;":"\u2aa9","gesdot;":"\u2a80","gesdoto;":"\u2a82","gesdotol;":"\u2a84","gesl;":"\u22db\ufe00","gesles;":"\u2a94","gfr;":"\ud835\udd24","gg;":"\u226b","ggg;":"\u22d9","gimel;":"\u2137","gjcy;":"\u0453","gl;":"\u2277","glE;":"\u2a92","gla;":"\u2aa5","glj;":"\u2aa4","gnE;":"\u2269","gnap;":"\u2a8a","gnapprox;":"\u2a8a","gne;":"\u2a88","gneq;":"\u2a88","gneqq;":"\u2269","gnsim;":"\u22e7","gopf;":"\ud835\udd58","grave;":"`","gscr;":"\u210a","gsim;":"\u2273","gsime;":"\u2a8e","gsiml;":"\u2a90",gt:">","gt;":">","gtcc;":"\u2aa7","gtcir;":"\u2a7a","gtdot;":"\u22d7","gtlPar;":"\u2995","gtquest;":"\u2a7c","gtrapprox;":"\u2a86","gtrarr;":"\u2978","gtrdot;":"\u22d7","gtreqless;":"\u22db","gtreqqless;":"\u2a8c","gtrless;":"\u2277","gtrsim;":"\u2273","gvertneqq;":"\u2269\ufe00","gvnE;":"\u2269\ufe00","hArr;":"\u21d4","hairsp;":"\u200a","half;":"\xbd","hamilt;":"\u210b","hardcy;":"\u044a","harr;":"\u2194","harrcir;":"\u2948","harrw;":"\u21ad","hbar;":"\u210f","hcirc;":"\u0125","hearts;":"\u2665","heartsuit;":"\u2665","hellip;":"\u2026","hercon;":"\u22b9","hfr;":"\ud835\udd25","hksearow;":"\u2925","hkswarow;":"\u2926","hoarr;":"\u21ff","homtht;":"\u223b","hookleftarrow;":"\u21a9","hookrightarrow;":"\u21aa","hopf;":"\ud835\udd59","horbar;":"\u2015","hscr;":"\ud835\udcbd","hslash;":"\u210f","hstrok;":"\u0127","hybull;":"\u2043","hyphen;":"\u2010",iacute:"\xed","iacute;":"\xed","ic;":"\u2063",icirc:"\xee","icirc;":"\xee","icy;":"\u0438","iecy;":"\u0435",iexcl:"\xa1","iexcl;":"\xa1","iff;":"\u21d4","ifr;":"\ud835\udd26",igrave:"\xec","igrave;":"\xec","ii;":"\u2148","iiiint;":"\u2a0c","iiint;":"\u222d","iinfin;":"\u29dc","iiota;":"\u2129","ijlig;":"\u0133","imacr;":"\u012b","image;":"\u2111","imagline;":"\u2110","imagpart;":"\u2111","imath;":"\u0131","imof;":"\u22b7","imped;":"\u01b5","in;":"\u2208","incare;":"\u2105","infin;":"\u221e","infintie;":"\u29dd","inodot;":"\u0131","int;":"\u222b","intcal;":"\u22ba","integers;":"\u2124","intercal;":"\u22ba","intlarhk;":"\u2a17","intprod;":"\u2a3c","iocy;":"\u0451","iogon;":"\u012f","iopf;":"\ud835\udd5a","iota;":"\u03b9","iprod;":"\u2a3c",iquest:"\xbf","iquest;":"\xbf","iscr;":"\ud835\udcbe","isin;":"\u2208","isinE;":"\u22f9","isindot;":"\u22f5","isins;":"\u22f4","isinsv;":"\u22f3","isinv;":"\u2208","it;":"\u2062","itilde;":"\u0129","iukcy;":"\u0456",iuml:"\xef","iuml;":"\xef","jcirc;":"\u0135","jcy;":"\u0439","jfr;":"\ud835\udd27","jmath;":"\u0237","jopf;":"\ud835\udd5b","jscr;":"\ud835\udcbf","jsercy;":"\u0458","jukcy;":"\u0454","kappa;":"\u03ba","kappav;":"\u03f0","kcedil;":"\u0137","kcy;":"\u043a","kfr;":"\ud835\udd28","kgreen;":"\u0138","khcy;":"\u0445","kjcy;":"\u045c","kopf;":"\ud835\udd5c","kscr;":"\ud835\udcc0","lAarr;":"\u21da","lArr;":"\u21d0","lAtail;":"\u291b","lBarr;":"\u290e","lE;":"\u2266","lEg;":"\u2a8b","lHar;":"\u2962","lacute;":"\u013a","laemptyv;":"\u29b4","lagran;":"\u2112","lambda;":"\u03bb","lang;":"\u27e8","langd;":"\u2991","langle;":"\u27e8","lap;":"\u2a85",laquo:"\xab","laquo;":"\xab","larr;":"\u2190","larrb;":"\u21e4","larrbfs;":"\u291f","larrfs;":"\u291d","larrhk;":"\u21a9","larrlp;":"\u21ab","larrpl;":"\u2939","larrsim;":"\u2973","larrtl;":"\u21a2","lat;":"\u2aab","latail;":"\u2919","late;":"\u2aad","lates;":"\u2aad\ufe00","lbarr;":"\u290c","lbbrk;":"\u2772","lbrace;":"{","lbrack;":"[","lbrke;":"\u298b","lbrksld;":"\u298f","lbrkslu;":"\u298d","lcaron;":"\u013e","lcedil;":"\u013c","lceil;":"\u2308","lcub;":"{","lcy;":"\u043b","ldca;":"\u2936","ldquo;":"\u201c","ldquor;":"\u201e","ldrdhar;":"\u2967","ldrushar;":"\u294b","ldsh;":"\u21b2","le;":"\u2264","leftarrow;":"\u2190","leftarrowtail;":"\u21a2","leftharpoondown;":"\u21bd","leftharpoonup;":"\u21bc","leftleftarrows;":"\u21c7","leftrightarrow;":"\u2194","leftrightarrows;":"\u21c6","leftrightharpoons;":"\u21cb","leftrightsquigarrow;":"\u21ad","leftthreetimes;":"\u22cb","leg;":"\u22da","leq;":"\u2264","leqq;":"\u2266","leqslant;":"\u2a7d","les;":"\u2a7d","lescc;":"\u2aa8","lesdot;":"\u2a7f","lesdoto;":"\u2a81","lesdotor;":"\u2a83","lesg;":"\u22da\ufe00","lesges;":"\u2a93","lessapprox;":"\u2a85","lessdot;":"\u22d6","lesseqgtr;":"\u22da","lesseqqgtr;":"\u2a8b","lessgtr;":"\u2276","lesssim;":"\u2272","lfisht;":"\u297c","lfloor;":"\u230a","lfr;":"\ud835\udd29","lg;":"\u2276","lgE;":"\u2a91","lhard;":"\u21bd","lharu;":"\u21bc","lharul;":"\u296a","lhblk;":"\u2584","ljcy;":"\u0459","ll;":"\u226a","llarr;":"\u21c7","llcorner;":"\u231e","llhard;":"\u296b","lltri;":"\u25fa","lmidot;":"\u0140","lmoust;":"\u23b0","lmoustache;":"\u23b0","lnE;":"\u2268","lnap;":"\u2a89","lnapprox;":"\u2a89","lne;":"\u2a87","lneq;":"\u2a87","lneqq;":"\u2268","lnsim;":"\u22e6","loang;":"\u27ec","loarr;":"\u21fd","lobrk;":"\u27e6","longleftarrow;":"\u27f5","longleftrightarrow;":"\u27f7","longmapsto;":"\u27fc","longrightarrow;":"\u27f6","looparrowleft;":"\u21ab","looparrowright;":"\u21ac","lopar;":"\u2985","lopf;":"\ud835\udd5d","loplus;":"\u2a2d","lotimes;":"\u2a34","lowast;":"\u2217","lowbar;":"_","loz;":"\u25ca","lozenge;":"\u25ca","lozf;":"\u29eb","lpar;":"(","lparlt;":"\u2993","lrarr;":"\u21c6","lrcorner;":"\u231f","lrhar;":"\u21cb","lrhard;":"\u296d","lrm;":"\u200e","lrtri;":"\u22bf","lsaquo;":"\u2039","lscr;":"\ud835\udcc1","lsh;":"\u21b0","lsim;":"\u2272","lsime;":"\u2a8d","lsimg;":"\u2a8f","lsqb;":"[","lsquo;":"\u2018","lsquor;":"\u201a","lstrok;":"\u0142",lt:"<","lt;":"<","ltcc;":"\u2aa6","ltcir;":"\u2a79","ltdot;":"\u22d6","lthree;":"\u22cb","ltimes;":"\u22c9","ltlarr;":"\u2976","ltquest;":"\u2a7b","ltrPar;":"\u2996","ltri;":"\u25c3","ltrie;":"\u22b4","ltrif;":"\u25c2","lurdshar;":"\u294a","luruhar;":"\u2966","lvertneqq;":"\u2268\ufe00","lvnE;":"\u2268\ufe00","mDDot;":"\u223a",macr:"\xaf","macr;":"\xaf","male;":"\u2642","malt;":"\u2720","maltese;":"\u2720","map;":"\u21a6","mapsto;":"\u21a6","mapstodown;":"\u21a7","mapstoleft;":"\u21a4","mapstoup;":"\u21a5","marker;":"\u25ae","mcomma;":"\u2a29","mcy;":"\u043c","mdash;":"\u2014","measuredangle;":"\u2221","mfr;":"\ud835\udd2a","mho;":"\u2127",micro:"\xb5","micro;":"\xb5","mid;":"\u2223","midast;":"*","midcir;":"\u2af0",middot:"\xb7","middot;":"\xb7","minus;":"\u2212","minusb;":"\u229f","minusd;":"\u2238","minusdu;":"\u2a2a","mlcp;":"\u2adb","mldr;":"\u2026","mnplus;":"\u2213","models;":"\u22a7","mopf;":"\ud835\udd5e","mp;":"\u2213","mscr;":"\ud835\udcc2","mstpos;":"\u223e","mu;":"\u03bc","multimap;":"\u22b8","mumap;":"\u22b8","nGg;":"\u22d9\u0338","nGt;":"\u226b\u20d2","nGtv;":"\u226b\u0338","nLeftarrow;":"\u21cd","nLeftrightarrow;":"\u21ce","nLl;":"\u22d8\u0338","nLt;":"\u226a\u20d2","nLtv;":"\u226a\u0338","nRightarrow;":"\u21cf","nVDash;":"\u22af","nVdash;":"\u22ae","nabla;":"\u2207","nacute;":"\u0144","nang;":"\u2220\u20d2","nap;":"\u2249","napE;":"\u2a70\u0338","napid;":"\u224b\u0338","napos;":"\u0149","napprox;":"\u2249","natur;":"\u266e","natural;":"\u266e","naturals;":"\u2115",nbsp:"\xa0","nbsp;":"\xa0","nbump;":"\u224e\u0338","nbumpe;":"\u224f\u0338","ncap;":"\u2a43","ncaron;":"\u0148","ncedil;":"\u0146","ncong;":"\u2247","ncongdot;":"\u2a6d\u0338","ncup;":"\u2a42","ncy;":"\u043d","ndash;":"\u2013","ne;":"\u2260","neArr;":"\u21d7","nearhk;":"\u2924","nearr;":"\u2197","nearrow;":"\u2197","nedot;":"\u2250\u0338","nequiv;":"\u2262","nesear;":"\u2928","nesim;":"\u2242\u0338","nexist;":"\u2204","nexists;":"\u2204","nfr;":"\ud835\udd2b","ngE;":"\u2267\u0338","nge;":"\u2271","ngeq;":"\u2271","ngeqq;":"\u2267\u0338","ngeqslant;":"\u2a7e\u0338","nges;":"\u2a7e\u0338","ngsim;":"\u2275","ngt;":"\u226f","ngtr;":"\u226f","nhArr;":"\u21ce","nharr;":"\u21ae","nhpar;":"\u2af2","ni;":"\u220b","nis;":"\u22fc","nisd;":"\u22fa","niv;":"\u220b","njcy;":"\u045a","nlArr;":"\u21cd","nlE;":"\u2266\u0338","nlarr;":"\u219a","nldr;":"\u2025","nle;":"\u2270","nleftarrow;":"\u219a","nleftrightarrow;":"\u21ae","nleq;":"\u2270","nleqq;":"\u2266\u0338","nleqslant;":"\u2a7d\u0338","nles;":"\u2a7d\u0338","nless;":"\u226e","nlsim;":"\u2274","nlt;":"\u226e","nltri;":"\u22ea","nltrie;":"\u22ec","nmid;":"\u2224","nopf;":"\ud835\udd5f",not:"\xac","not;":"\xac","notin;":"\u2209","notinE;":"\u22f9\u0338","notindot;":"\u22f5\u0338","notinva;":"\u2209","notinvb;":"\u22f7","notinvc;":"\u22f6","notni;":"\u220c","notniva;":"\u220c","notnivb;":"\u22fe","notnivc;":"\u22fd","npar;":"\u2226","nparallel;":"\u2226","nparsl;":"\u2afd\u20e5","npart;":"\u2202\u0338","npolint;":"\u2a14","npr;":"\u2280","nprcue;":"\u22e0","npre;":"\u2aaf\u0338","nprec;":"\u2280","npreceq;":"\u2aaf\u0338","nrArr;":"\u21cf","nrarr;":"\u219b","nrarrc;":"\u2933\u0338","nrarrw;":"\u219d\u0338","nrightarrow;":"\u219b","nrtri;":"\u22eb","nrtrie;":"\u22ed","nsc;":"\u2281","nsccue;":"\u22e1","nsce;":"\u2ab0\u0338","nscr;":"\ud835\udcc3","nshortmid;":"\u2224","nshortparallel;":"\u2226","nsim;":"\u2241","nsime;":"\u2244","nsimeq;":"\u2244","nsmid;":"\u2224","nspar;":"\u2226","nsqsube;":"\u22e2","nsqsupe;":"\u22e3","nsub;":"\u2284","nsubE;":"\u2ac5\u0338","nsube;":"\u2288","nsubset;":"\u2282\u20d2","nsubseteq;":"\u2288","nsubseteqq;":"\u2ac5\u0338","nsucc;":"\u2281","nsucceq;":"\u2ab0\u0338","nsup;":"\u2285","nsupE;":"\u2ac6\u0338","nsupe;":"\u2289","nsupset;":"\u2283\u20d2","nsupseteq;":"\u2289","nsupseteqq;":"\u2ac6\u0338","ntgl;":"\u2279",ntilde:"\xf1","ntilde;":"\xf1","ntlg;":"\u2278","ntriangleleft;":"\u22ea","ntrianglelefteq;":"\u22ec","ntriangleright;":"\u22eb","ntrianglerighteq;":"\u22ed","nu;":"\u03bd","num;":"#","numero;":"\u2116","numsp;":"\u2007","nvDash;":"\u22ad","nvHarr;":"\u2904","nvap;":"\u224d\u20d2","nvdash;":"\u22ac","nvge;":"\u2265\u20d2","nvgt;":">\u20d2","nvinfin;":"\u29de","nvlArr;":"\u2902","nvle;":"\u2264\u20d2","nvlt;":"<\u20d2","nvltrie;":"\u22b4\u20d2","nvrArr;":"\u2903","nvrtrie;":"\u22b5\u20d2","nvsim;":"\u223c\u20d2","nwArr;":"\u21d6","nwarhk;":"\u2923","nwarr;":"\u2196","nwarrow;":"\u2196","nwnear;":"\u2927","oS;":"\u24c8",oacute:"\xf3","oacute;":"\xf3","oast;":"\u229b","ocir;":"\u229a",ocirc:"\xf4","ocirc;":"\xf4","ocy;":"\u043e","odash;":"\u229d","odblac;":"\u0151","odiv;":"\u2a38","odot;":"\u2299","odsold;":"\u29bc","oelig;":"\u0153","ofcir;":"\u29bf","ofr;":"\ud835\udd2c","ogon;":"\u02db",ograve:"\xf2","ograve;":"\xf2","ogt;":"\u29c1","ohbar;":"\u29b5","ohm;":"\u03a9","oint;":"\u222e","olarr;":"\u21ba","olcir;":"\u29be","olcross;":"\u29bb","oline;":"\u203e","olt;":"\u29c0","omacr;":"\u014d","omega;":"\u03c9","omicron;":"\u03bf","omid;":"\u29b6","ominus;":"\u2296","oopf;":"\ud835\udd60","opar;":"\u29b7","operp;":"\u29b9","oplus;":"\u2295","or;":"\u2228","orarr;":"\u21bb","ord;":"\u2a5d","order;":"\u2134","orderof;":"\u2134",ordf:"\xaa","ordf;":"\xaa",ordm:"\xba","ordm;":"\xba","origof;":"\u22b6","oror;":"\u2a56","orslope;":"\u2a57","orv;":"\u2a5b","oscr;":"\u2134",oslash:"\xf8","oslash;":"\xf8","osol;":"\u2298",otilde:"\xf5","otilde;":"\xf5","otimes;":"\u2297","otimesas;":"\u2a36",ouml:"\xf6","ouml;":"\xf6","ovbar;":"\u233d","par;":"\u2225",para:"\xb6","para;":"\xb6","parallel;":"\u2225","parsim;":"\u2af3","parsl;":"\u2afd","part;":"\u2202","pcy;":"\u043f","percnt;":"%","period;":".","permil;":"\u2030","perp;":"\u22a5","pertenk;":"\u2031","pfr;":"\ud835\udd2d","phi;":"\u03c6","phiv;":"\u03d5","phmmat;":"\u2133","phone;":"\u260e","pi;":"\u03c0","pitchfork;":"\u22d4","piv;":"\u03d6","planck;":"\u210f","planckh;":"\u210e","plankv;":"\u210f","plus;":"+","plusacir;":"\u2a23","plusb;":"\u229e","pluscir;":"\u2a22","plusdo;":"\u2214","plusdu;":"\u2a25","pluse;":"\u2a72",plusmn:"\xb1","plusmn;":"\xb1","plussim;":"\u2a26","plustwo;":"\u2a27","pm;":"\xb1","pointint;":"\u2a15","popf;":"\ud835\udd61",pound:"\xa3","pound;":"\xa3","pr;":"\u227a","prE;":"\u2ab3","prap;":"\u2ab7","prcue;":"\u227c","pre;":"\u2aaf","prec;":"\u227a","precapprox;":"\u2ab7","preccurlyeq;":"\u227c","preceq;":"\u2aaf","precnapprox;":"\u2ab9","precneqq;":"\u2ab5","precnsim;":"\u22e8","precsim;":"\u227e","prime;":"\u2032","primes;":"\u2119","prnE;":"\u2ab5","prnap;":"\u2ab9","prnsim;":"\u22e8","prod;":"\u220f","profalar;":"\u232e","profline;":"\u2312","profsurf;":"\u2313","prop;":"\u221d","propto;":"\u221d","prsim;":"\u227e","prurel;":"\u22b0","pscr;":"\ud835\udcc5","psi;":"\u03c8","puncsp;":"\u2008","qfr;":"\ud835\udd2e","qint;":"\u2a0c","qopf;":"\ud835\udd62","qprime;":"\u2057","qscr;":"\ud835\udcc6","quaternions;":"\u210d","quatint;":"\u2a16","quest;":"?","questeq;":"\u225f",quot:'"',"quot;":'"',"rAarr;":"\u21db","rArr;":"\u21d2","rAtail;":"\u291c","rBarr;":"\u290f","rHar;":"\u2964","race;":"\u223d\u0331","racute;":"\u0155","radic;":"\u221a","raemptyv;":"\u29b3","rang;":"\u27e9","rangd;":"\u2992","range;":"\u29a5","rangle;":"\u27e9",raquo:"\xbb","raquo;":"\xbb","rarr;":"\u2192","rarrap;":"\u2975","rarrb;":"\u21e5","rarrbfs;":"\u2920","rarrc;":"\u2933","rarrfs;":"\u291e","rarrhk;":"\u21aa","rarrlp;":"\u21ac","rarrpl;":"\u2945","rarrsim;":"\u2974","rarrtl;":"\u21a3","rarrw;":"\u219d","ratail;":"\u291a","ratio;":"\u2236","rationals;":"\u211a","rbarr;":"\u290d","rbbrk;":"\u2773","rbrace;":"}","rbrack;":"]","rbrke;":"\u298c","rbrksld;":"\u298e","rbrkslu;":"\u2990","rcaron;":"\u0159","rcedil;":"\u0157","rceil;":"\u2309","rcub;":"}","rcy;":"\u0440","rdca;":"\u2937","rdldhar;":"\u2969","rdquo;":"\u201d","rdquor;":"\u201d","rdsh;":"\u21b3","real;":"\u211c","realine;":"\u211b","realpart;":"\u211c","reals;":"\u211d","rect;":"\u25ad",reg:"\xae","reg;":"\xae","rfisht;":"\u297d","rfloor;":"\u230b","rfr;":"\ud835\udd2f","rhard;":"\u21c1","rharu;":"\u21c0","rharul;":"\u296c","rho;":"\u03c1","rhov;":"\u03f1","rightarrow;":"\u2192","rightarrowtail;":"\u21a3","rightharpoondown;":"\u21c1","rightharpoonup;":"\u21c0","rightleftarrows;":"\u21c4","rightleftharpoons;":"\u21cc","rightrightarrows;":"\u21c9","rightsquigarrow;":"\u219d","rightthreetimes;":"\u22cc","ring;":"\u02da","risingdotseq;":"\u2253","rlarr;":"\u21c4","rlhar;":"\u21cc","rlm;":"\u200f","rmoust;":"\u23b1","rmoustache;":"\u23b1","rnmid;":"\u2aee","roang;":"\u27ed","roarr;":"\u21fe","robrk;":"\u27e7","ropar;":"\u2986","ropf;":"\ud835\udd63","roplus;":"\u2a2e","rotimes;":"\u2a35","rpar;":")","rpargt;":"\u2994","rppolint;":"\u2a12","rrarr;":"\u21c9","rsaquo;":"\u203a","rscr;":"\ud835\udcc7","rsh;":"\u21b1","rsqb;":"]","rsquo;":"\u2019","rsquor;":"\u2019","rthree;":"\u22cc","rtimes;":"\u22ca","rtri;":"\u25b9","rtrie;":"\u22b5","rtrif;":"\u25b8","rtriltri;":"\u29ce","ruluhar;":"\u2968","rx;":"\u211e","sacute;":"\u015b","sbquo;":"\u201a","sc;":"\u227b","scE;":"\u2ab4","scap;":"\u2ab8","scaron;":"\u0161","sccue;":"\u227d","sce;":"\u2ab0","scedil;":"\u015f","scirc;":"\u015d","scnE;":"\u2ab6","scnap;":"\u2aba","scnsim;":"\u22e9","scpolint;":"\u2a13","scsim;":"\u227f","scy;":"\u0441","sdot;":"\u22c5","sdotb;":"\u22a1","sdote;":"\u2a66","seArr;":"\u21d8","searhk;":"\u2925","searr;":"\u2198","searrow;":"\u2198",sect:"\xa7","sect;":"\xa7","semi;":";","seswar;":"\u2929","setminus;":"\u2216","setmn;":"\u2216","sext;":"\u2736","sfr;":"\ud835\udd30","sfrown;":"\u2322","sharp;":"\u266f","shchcy;":"\u0449","shcy;":"\u0448","shortmid;":"\u2223","shortparallel;":"\u2225",shy:"\xad","shy;":"\xad","sigma;":"\u03c3","sigmaf;":"\u03c2","sigmav;":"\u03c2","sim;":"\u223c","simdot;":"\u2a6a","sime;":"\u2243","simeq;":"\u2243","simg;":"\u2a9e","simgE;":"\u2aa0","siml;":"\u2a9d","simlE;":"\u2a9f","simne;":"\u2246","simplus;":"\u2a24","simrarr;":"\u2972","slarr;":"\u2190","smallsetminus;":"\u2216","smashp;":"\u2a33","smeparsl;":"\u29e4","smid;":"\u2223","smile;":"\u2323","smt;":"\u2aaa","smte;":"\u2aac","smtes;":"\u2aac\ufe00","softcy;":"\u044c","sol;":"/","solb;":"\u29c4","solbar;":"\u233f","sopf;":"\ud835\udd64","spades;":"\u2660","spadesuit;":"\u2660","spar;":"\u2225","sqcap;":"\u2293","sqcaps;":"\u2293\ufe00","sqcup;":"\u2294","sqcups;":"\u2294\ufe00","sqsub;":"\u228f","sqsube;":"\u2291","sqsubset;":"\u228f","sqsubseteq;":"\u2291","sqsup;":"\u2290","sqsupe;":"\u2292","sqsupset;":"\u2290","sqsupseteq;":"\u2292","squ;":"\u25a1","square;":"\u25a1","squarf;":"\u25aa","squf;":"\u25aa","srarr;":"\u2192","sscr;":"\ud835\udcc8","ssetmn;":"\u2216","ssmile;":"\u2323","sstarf;":"\u22c6","star;":"\u2606","starf;":"\u2605","straightepsilon;":"\u03f5","straightphi;":"\u03d5","strns;":"\xaf","sub;":"\u2282","subE;":"\u2ac5","subdot;":"\u2abd","sube;":"\u2286","subedot;":"\u2ac3","submult;":"\u2ac1","subnE;":"\u2acb","subne;":"\u228a","subplus;":"\u2abf","subrarr;":"\u2979","subset;":"\u2282","subseteq;":"\u2286","subseteqq;":"\u2ac5","subsetneq;":"\u228a","subsetneqq;":"\u2acb","subsim;":"\u2ac7","subsub;":"\u2ad5","subsup;":"\u2ad3","succ;":"\u227b","succapprox;":"\u2ab8","succcurlyeq;":"\u227d","succeq;":"\u2ab0","succnapprox;":"\u2aba","succneqq;":"\u2ab6","succnsim;":"\u22e9","succsim;":"\u227f","sum;":"\u2211","sung;":"\u266a",sup1:"\xb9","sup1;":"\xb9",sup2:"\xb2","sup2;":"\xb2",sup3:"\xb3","sup3;":"\xb3","sup;":"\u2283","supE;":"\u2ac6","supdot;":"\u2abe","supdsub;":"\u2ad8","supe;":"\u2287","supedot;":"\u2ac4","suphsol;":"\u27c9","suphsub;":"\u2ad7","suplarr;":"\u297b","supmult;":"\u2ac2","supnE;":"\u2acc","supne;":"\u228b","supplus;":"\u2ac0","supset;":"\u2283","supseteq;":"\u2287","supseteqq;":"\u2ac6","supsetneq;":"\u228b","supsetneqq;":"\u2acc","supsim;":"\u2ac8","supsub;":"\u2ad4","supsup;":"\u2ad6","swArr;":"\u21d9","swarhk;":"\u2926","swarr;":"\u2199","swarrow;":"\u2199","swnwar;":"\u292a",szlig:"\xdf","szlig;":"\xdf","target;":"\u2316","tau;":"\u03c4","tbrk;":"\u23b4","tcaron;":"\u0165","tcedil;":"\u0163","tcy;":"\u0442","tdot;":"\u20db","telrec;":"\u2315","tfr;":"\ud835\udd31","there4;":"\u2234","therefore;":"\u2234","theta;":"\u03b8","thetasym;":"\u03d1","thetav;":"\u03d1","thickapprox;":"\u2248","thicksim;":"\u223c","thinsp;":"\u2009","thkap;":"\u2248","thksim;":"\u223c",thorn:"\xfe","thorn;":"\xfe","tilde;":"\u02dc",times:"\xd7","times;":"\xd7","timesb;":"\u22a0","timesbar;":"\u2a31","timesd;":"\u2a30","tint;":"\u222d","toea;":"\u2928","top;":"\u22a4","topbot;":"\u2336","topcir;":"\u2af1","topf;":"\ud835\udd65","topfork;":"\u2ada","tosa;":"\u2929","tprime;":"\u2034","trade;":"\u2122","triangle;":"\u25b5","triangledown;":"\u25bf","triangleleft;":"\u25c3","trianglelefteq;":"\u22b4","triangleq;":"\u225c","triangleright;":"\u25b9","trianglerighteq;":"\u22b5","tridot;":"\u25ec","trie;":"\u225c","triminus;":"\u2a3a","triplus;":"\u2a39","trisb;":"\u29cd","tritime;":"\u2a3b","trpezium;":"\u23e2","tscr;":"\ud835\udcc9","tscy;":"\u0446","tshcy;":"\u045b","tstrok;":"\u0167","twixt;":"\u226c","twoheadleftarrow;":"\u219e","twoheadrightarrow;":"\u21a0","uArr;":"\u21d1","uHar;":"\u2963",uacute:"\xfa","uacute;":"\xfa","uarr;":"\u2191","ubrcy;":"\u045e","ubreve;":"\u016d",ucirc:"\xfb","ucirc;":"\xfb","ucy;":"\u0443","udarr;":"\u21c5","udblac;":"\u0171","udhar;":"\u296e","ufisht;":"\u297e","ufr;":"\ud835\udd32",ugrave:"\xf9","ugrave;":"\xf9","uharl;":"\u21bf","uharr;":"\u21be","uhblk;":"\u2580","ulcorn;":"\u231c","ulcorner;":"\u231c","ulcrop;":"\u230f","ultri;":"\u25f8","umacr;":"\u016b",uml:"\xa8","uml;":"\xa8","uogon;":"\u0173","uopf;":"\ud835\udd66","uparrow;":"\u2191","updownarrow;":"\u2195","upharpoonleft;":"\u21bf","upharpoonright;":"\u21be","uplus;":"\u228e","upsi;":"\u03c5","upsih;":"\u03d2","upsilon;":"\u03c5","upuparrows;":"\u21c8","urcorn;":"\u231d","urcorner;":"\u231d","urcrop;":"\u230e","uring;":"\u016f","urtri;":"\u25f9","uscr;":"\ud835\udcca","utdot;":"\u22f0","utilde;":"\u0169","utri;":"\u25b5","utrif;":"\u25b4","uuarr;":"\u21c8",uuml:"\xfc","uuml;":"\xfc","uwangle;":"\u29a7","vArr;":"\u21d5","vBar;":"\u2ae8","vBarv;":"\u2ae9","vDash;":"\u22a8","vangrt;":"\u299c","varepsilon;":"\u03f5","varkappa;":"\u03f0","varnothing;":"\u2205","varphi;":"\u03d5","varpi;":"\u03d6","varpropto;":"\u221d","varr;":"\u2195","varrho;":"\u03f1","varsigma;":"\u03c2","varsubsetneq;":"\u228a\ufe00","varsubsetneqq;":"\u2acb\ufe00","varsupsetneq;":"\u228b\ufe00","varsupsetneqq;":"\u2acc\ufe00","vartheta;":"\u03d1","vartriangleleft;":"\u22b2","vartriangleright;":"\u22b3","vcy;":"\u0432","vdash;":"\u22a2","vee;":"\u2228","veebar;":"\u22bb","veeeq;":"\u225a","vellip;":"\u22ee","verbar;":"|","vert;":"|","vfr;":"\ud835\udd33","vltri;":"\u22b2","vnsub;":"\u2282\u20d2","vnsup;":"\u2283\u20d2","vopf;":"\ud835\udd67","vprop;":"\u221d","vrtri;":"\u22b3","vscr;":"\ud835\udccb","vsubnE;":"\u2acb\ufe00","vsubne;":"\u228a\ufe00","vsupnE;":"\u2acc\ufe00","vsupne;":"\u228b\ufe00","vzigzag;":"\u299a","wcirc;":"\u0175","wedbar;":"\u2a5f","wedge;":"\u2227","wedgeq;":"\u2259","weierp;":"\u2118","wfr;":"\ud835\udd34","wopf;":"\ud835\udd68","wp;":"\u2118","wr;":"\u2240","wreath;":"\u2240","wscr;":"\ud835\udccc","xcap;":"\u22c2","xcirc;":"\u25ef","xcup;":"\u22c3","xdtri;":"\u25bd","xfr;":"\ud835\udd35","xhArr;":"\u27fa","xharr;":"\u27f7","xi;":"\u03be","xlArr;":"\u27f8","xlarr;":"\u27f5","xmap;":"\u27fc","xnis;":"\u22fb","xodot;":"\u2a00","xopf;":"\ud835\udd69","xoplus;":"\u2a01","xotime;":"\u2a02","xrArr;":"\u27f9","xrarr;":"\u27f6","xscr;":"\ud835\udccd","xsqcup;":"\u2a06","xuplus;":"\u2a04","xutri;":"\u25b3","xvee;":"\u22c1","xwedge;":"\u22c0",yacute:"\xfd","yacute;":"\xfd","yacy;":"\u044f","ycirc;":"\u0177","ycy;":"\u044b",yen:"\xa5","yen;":"\xa5","yfr;":"\ud835\udd36","yicy;":"\u0457","yopf;":"\ud835\udd6a","yscr;":"\ud835\udcce","yucy;":"\u044e",yuml:"\xff","yuml;":"\xff","zacute;":"\u017a","zcaron;":"\u017e","zcy;":"\u0437","zdot;":"\u017c","zeetrf;":"\u2128","zeta;":"\u03b6","zfr;":"\ud835\udd37","zhcy;":"\u0436","zigrarr;":"\u21dd","zopf;":"\ud835\udd6b","zscr;":"\ud835\udccf","zwj;":"\u200d","zwnj;":"\u200c"},B.b5,t.B)
B.b8=A.a(s(["null-character","invalid-codepoint","incorrectly-placed-solidus","incorrect-cr-newline-entity","illegal-windows-1252-entity","cant-convert-numeric-entity","illegal-codepoint-for-numeric-entity","numeric-entity-without-semicolon","expected-numeric-entity-but-got-eof","expected-numeric-entity","named-entity-without-semicolon","expected-named-entity","attributes-in-end-tag","self-closing-flag-on-end-tag","expected-tag-name-but-got-right-bracket","expected-tag-name-but-got-question-mark","expected-tag-name",u.g,"expected-closing-tag-but-got-eof","expected-closing-tag-but-got-char","eof-in-tag-name","expected-attribute-name-but-got-eof","eof-in-attribute-name","invalid-character-in-attribute-name","duplicate-attribute","expected-end-of-tag-name-but-got-eof","expected-attribute-value-but-got-eof",u.A,"equals-in-unquoted-attribute-value",u.V,"invalid-character-after-attribute-name",u.H,"eof-in-attribute-value-double-quote","eof-in-attribute-value-single-quote","eof-in-attribute-value-no-quotes","unexpected-EOF-after-solidus-in-tag",u.B,"expected-dashes-or-doctype",u.d,"unexpected-space-after-double-dash-in-comment","incorrect-comment","eof-in-comment","eof-in-comment-end-dash",u.K,"eof-in-comment-double-dash","eof-in-comment-end-space-state","eof-in-comment-end-bang-state","unexpected-char-in-comment","need-space-after-doctype",u.f,"expected-doctype-name-but-got-eof","eof-in-doctype-name","eof-in-doctype",u.S,"unexpected-end-of-doctype","unexpected-char-in-doctype","eof-in-innerhtml","unexpected-doctype","non-html-root","expected-doctype-but-got-eof","unknown-doctype","expected-doctype-but-got-chars","expected-doctype-but-got-start-tag","expected-doctype-but-got-end-tag","end-tag-after-implied-root","expected-named-closing-tag-but-got-eof","two-heads-are-not-better-than-one","unexpected-end-tag","unexpected-start-tag-out-of-my-head","unexpected-start-tag","missing-end-tag","missing-end-tags","unexpected-start-tag-implies-end-tag","unexpected-start-tag-treated-as","deprecated-tag","unexpected-start-tag-ignored","expected-one-end-tag-but-got-another","end-tag-too-early","end-tag-too-early-named","end-tag-too-early-ignored","adoption-agency-1.1","adoption-agency-1.2","adoption-agency-1.3","unexpected-end-tag-treated-as","no-end-tag","unexpected-implied-end-tag-in-table","unexpected-implied-end-tag-in-table-body","unexpected-char-implies-table-voodoo","unexpected-hidden-input-in-table","unexpected-form-in-table",u.M,"unexpected-end-tag-implies-table-voodoo","unexpected-cell-in-table-body","unexpected-cell-end-tag","unexpected-end-tag-in-table-body","unexpected-implied-end-tag-in-table-row","unexpected-end-tag-in-table-row","unexpected-select-in-select","unexpected-input-in-select","unexpected-start-tag-in-select","unexpected-end-tag-in-select",u.a,u.r,"unexpected-char-after-body","unexpected-start-tag-after-body","unexpected-end-tag-after-body","unexpected-char-in-frameset","unexpected-start-tag-in-frameset",u.q,"unexpected-end-tag-in-frameset","unexpected-char-after-frameset","unexpected-start-tag-after-frameset","unexpected-end-tag-after-frameset","unexpected-end-tag-after-body-innerhtml","expected-eof-but-got-char","expected-eof-but-got-start-tag","expected-eof-but-got-end-tag","eof-in-table","eof-in-select","eof-in-frameset","eof-in-script-in-script","eof-in-foreign-lands","non-void-element-with-trailing-solidus",u.G,"unexpected-end-tag-before-html","undefined-error"]),t.s)
B.bA=new A.t(126,{"null-character":"Null character in input stream, replaced with U+FFFD.","invalid-codepoint":"Invalid codepoint in stream.","incorrectly-placed-solidus":"Solidus (/) incorrectly placed in tag.","incorrect-cr-newline-entity":"Incorrect CR newline entity, replaced with LF.","illegal-windows-1252-entity":"Entity used with illegal number (windows-1252 reference).","cant-convert-numeric-entity":"Numeric entity couldn't be converted to character (codepoint U+%(charAsInt)08x).","illegal-codepoint-for-numeric-entity":"Numeric entity represents an illegal codepoint: U+%(charAsInt)08x.","numeric-entity-without-semicolon":"Numeric entity didn't end with ';'.","expected-numeric-entity-but-got-eof":"Numeric entity expected. Got end of file instead.","expected-numeric-entity":"Numeric entity expected but none found.","named-entity-without-semicolon":"Named entity didn't end with ';'.","expected-named-entity":"Named entity expected. Got none.","attributes-in-end-tag":"End tag contains unexpected attributes.","self-closing-flag-on-end-tag":"End tag contains unexpected self-closing flag.","expected-tag-name-but-got-right-bracket":"Expected tag name. Got '>' instead.","expected-tag-name-but-got-question-mark":"Expected tag name. Got '?' instead. (HTML doesn't support processing instructions.)","expected-tag-name":"Expected tag name. Got something else instead","expected-closing-tag-but-got-right-bracket":"Expected closing tag. Got '>' instead. Ignoring '</>'.","expected-closing-tag-but-got-eof":"Expected closing tag. Unexpected end of file.","expected-closing-tag-but-got-char":"Expected closing tag. Unexpected character '%(data)s' found.","eof-in-tag-name":"Unexpected end of file in the tag name.","expected-attribute-name-but-got-eof":"Unexpected end of file. Expected attribute name instead.","eof-in-attribute-name":"Unexpected end of file in attribute name.","invalid-character-in-attribute-name":"Invalid character in attribute name","duplicate-attribute":"Dropped duplicate attribute on tag.","expected-end-of-tag-name-but-got-eof":"Unexpected end of file. Expected = or end of tag.","expected-attribute-value-but-got-eof":"Unexpected end of file. Expected attribute value.","expected-attribute-value-but-got-right-bracket":"Expected attribute value. Got '>' instead.","equals-in-unquoted-attribute-value":"Unexpected = in unquoted attribute","unexpected-character-in-unquoted-attribute-value":"Unexpected character in unquoted attribute","invalid-character-after-attribute-name":"Unexpected character after attribute name.","unexpected-character-after-attribute-value":"Unexpected character after attribute value.","eof-in-attribute-value-double-quote":'Unexpected end of file in attribute value (".',"eof-in-attribute-value-single-quote":"Unexpected end of file in attribute value (').","eof-in-attribute-value-no-quotes":"Unexpected end of file in attribute value.","unexpected-EOF-after-solidus-in-tag":"Unexpected end of file in tag. Expected >","unexpected-character-after-soldius-in-tag":"Unexpected character after / in tag. Expected >","expected-dashes-or-doctype":"Expected '--' or 'DOCTYPE'. Not found.","unexpected-bang-after-double-dash-in-comment":"Unexpected ! after -- in comment","unexpected-space-after-double-dash-in-comment":"Unexpected space after -- in comment","incorrect-comment":"Incorrect comment.","eof-in-comment":"Unexpected end of file in comment.","eof-in-comment-end-dash":"Unexpected end of file in comment (-)","unexpected-dash-after-double-dash-in-comment":"Unexpected '-' after '--' found in comment.","eof-in-comment-double-dash":"Unexpected end of file in comment (--).","eof-in-comment-end-space-state":"Unexpected end of file in comment.","eof-in-comment-end-bang-state":"Unexpected end of file in comment.","unexpected-char-in-comment":"Unexpected character in comment found.","need-space-after-doctype":"No space after literal string 'DOCTYPE'.","expected-doctype-name-but-got-right-bracket":"Unexpected > character. Expected DOCTYPE name.","expected-doctype-name-but-got-eof":"Unexpected end of file. Expected DOCTYPE name.","eof-in-doctype-name":"Unexpected end of file in DOCTYPE name.","eof-in-doctype":"Unexpected end of file in DOCTYPE.","expected-space-or-right-bracket-in-doctype":"Expected space or '>'. Got '%(data)s'","unexpected-end-of-doctype":"Unexpected end of DOCTYPE.","unexpected-char-in-doctype":"Unexpected character in DOCTYPE.","eof-in-innerhtml":"XXX innerHTML EOF","unexpected-doctype":"Unexpected DOCTYPE. Ignored.","non-html-root":"html needs to be the first start tag.","expected-doctype-but-got-eof":"Unexpected End of file. Expected DOCTYPE.","unknown-doctype":"Erroneous DOCTYPE.","expected-doctype-but-got-chars":"Unexpected non-space characters. Expected DOCTYPE.","expected-doctype-but-got-start-tag":"Unexpected start tag (%(name)s). Expected DOCTYPE.","expected-doctype-but-got-end-tag":"Unexpected end tag (%(name)s). Expected DOCTYPE.","end-tag-after-implied-root":"Unexpected end tag (%(name)s) after the (implied) root element.","expected-named-closing-tag-but-got-eof":"Unexpected end of file. Expected end tag (%(name)s).","two-heads-are-not-better-than-one":"Unexpected start tag head in existing head. Ignored.","unexpected-end-tag":"Unexpected end tag (%(name)s). Ignored.","unexpected-start-tag-out-of-my-head":"Unexpected start tag (%(name)s) that can be in head. Moved.","unexpected-start-tag":"Unexpected start tag (%(name)s).","missing-end-tag":"Missing end tag (%(name)s).","missing-end-tags":"Missing end tags (%(name)s).","unexpected-start-tag-implies-end-tag":"Unexpected start tag (%(startName)s) implies end tag (%(endName)s).","unexpected-start-tag-treated-as":"Unexpected start tag (%(originalName)s). Treated as %(newName)s.","deprecated-tag":"Unexpected start tag %(name)s. Don't use it!","unexpected-start-tag-ignored":"Unexpected start tag %(name)s. Ignored.","expected-one-end-tag-but-got-another":"Unexpected end tag (%(gotName)s). Missing end tag (%(expectedName)s).","end-tag-too-early":"End tag (%(name)s) seen too early. Expected other end tag.","end-tag-too-early-named":"Unexpected end tag (%(gotName)s). Expected end tag (%(expectedName)s).","end-tag-too-early-ignored":"End tag (%(name)s) seen too early. Ignored.","adoption-agency-1.1":"End tag (%(name)s) violates step 1, paragraph 1 of the adoption agency algorithm.","adoption-agency-1.2":"End tag (%(name)s) violates step 1, paragraph 2 of the adoption agency algorithm.","adoption-agency-1.3":"End tag (%(name)s) violates step 1, paragraph 3 of the adoption agency algorithm.","unexpected-end-tag-treated-as":"Unexpected end tag (%(originalName)s). Treated as %(newName)s.","no-end-tag":"This element (%(name)s) has no end tag.","unexpected-implied-end-tag-in-table":"Unexpected implied end tag (%(name)s) in the table phase.","unexpected-implied-end-tag-in-table-body":"Unexpected implied end tag (%(name)s) in the table body phase.","unexpected-char-implies-table-voodoo":"Unexpected non-space characters in table context caused voodoo mode.","unexpected-hidden-input-in-table":"Unexpected input with type hidden in table context.","unexpected-form-in-table":"Unexpected form in table context.","unexpected-start-tag-implies-table-voodoo":"Unexpected start tag (%(name)s) in table context caused voodoo mode.","unexpected-end-tag-implies-table-voodoo":"Unexpected end tag (%(name)s) in table context caused voodoo mode.","unexpected-cell-in-table-body":"Unexpected table cell start tag (%(name)s) in the table body phase.","unexpected-cell-end-tag":"Got table cell end tag (%(name)s) while required end tags are missing.","unexpected-end-tag-in-table-body":"Unexpected end tag (%(name)s) in the table body phase. Ignored.","unexpected-implied-end-tag-in-table-row":"Unexpected implied end tag (%(name)s) in the table row phase.","unexpected-end-tag-in-table-row":"Unexpected end tag (%(name)s) in the table row phase. Ignored.","unexpected-select-in-select":"Unexpected select start tag in the select phase treated as select end tag.","unexpected-input-in-select":"Unexpected input start tag in the select phase.","unexpected-start-tag-in-select":"Unexpected start tag token (%(name)s in the select phase. Ignored.","unexpected-end-tag-in-select":"Unexpected end tag (%(name)s) in the select phase. Ignored.","unexpected-table-element-start-tag-in-select-in-table":"Unexpected table element start tag (%(name)s) in the select in table phase.","unexpected-table-element-end-tag-in-select-in-table":"Unexpected table element end tag (%(name)s) in the select in table phase.","unexpected-char-after-body":"Unexpected non-space characters in the after body phase.","unexpected-start-tag-after-body":"Unexpected start tag token (%(name)s) in the after body phase.","unexpected-end-tag-after-body":"Unexpected end tag token (%(name)s) in the after body phase.","unexpected-char-in-frameset":"Unexpected characters in the frameset phase. Characters ignored.","unexpected-start-tag-in-frameset":"Unexpected start tag token (%(name)s) in the frameset phase. Ignored.","unexpected-frameset-in-frameset-innerhtml":"Unexpected end tag token (frameset) in the frameset phase (innerHTML).","unexpected-end-tag-in-frameset":"Unexpected end tag token (%(name)s) in the frameset phase. Ignored.","unexpected-char-after-frameset":"Unexpected non-space characters in the after frameset phase. Ignored.","unexpected-start-tag-after-frameset":"Unexpected start tag (%(name)s) in the after frameset phase. Ignored.","unexpected-end-tag-after-frameset":"Unexpected end tag (%(name)s) in the after frameset phase. Ignored.","unexpected-end-tag-after-body-innerhtml":"Unexpected end tag after body(innerHtml)","expected-eof-but-got-char":"Unexpected non-space characters. Expected end of file.","expected-eof-but-got-start-tag":"Unexpected start tag (%(name)s). Expected end of file.","expected-eof-but-got-end-tag":"Unexpected end tag (%(name)s). Expected end of file.","eof-in-table":"Unexpected end of file. Expected table content.","eof-in-select":"Unexpected end of file. Expected select content.","eof-in-frameset":"Unexpected end of file. Expected frameset content.","eof-in-script-in-script":"Unexpected end of file. Expected script content.","eof-in-foreign-lands":"Unexpected end of file. Expected foreign content","non-void-element-with-trailing-solidus":"Trailing solidus not allowed on element %(name)s","unexpected-html-element-in-foreign-content":"Element %(name)s not allowed in a non-html context","unexpected-end-tag-before-html":"Unexpected end tag (%(name)s) before html.","undefined-error":"Undefined error (this sucks and should be fixed)"},B.b8,t.B)
B.b9=A.a(s(["altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","clippath","feblend","fecolormatrix","fecomponenttransfer","fecomposite","feconvolvematrix","fediffuselighting","fedisplacementmap","fedistantlight","feflood","fefunca","fefuncb","fefuncg","fefuncr","fegaussianblur","feimage","femerge","femergenode","femorphology","feoffset","fepointlight","fespecularlighting","fespotlight","fetile","feturbulence","foreignobject","glyphref","lineargradient","radialgradient","textpath"]),t.s)
B.bB=new A.t(36,{altglyph:"altGlyph",altglyphdef:"altGlyphDef",altglyphitem:"altGlyphItem",animatecolor:"animateColor",animatemotion:"animateMotion",animatetransform:"animateTransform",clippath:"clipPath",feblend:"feBlend",fecolormatrix:"feColorMatrix",fecomponenttransfer:"feComponentTransfer",fecomposite:"feComposite",feconvolvematrix:"feConvolveMatrix",fediffuselighting:"feDiffuseLighting",fedisplacementmap:"feDisplacementMap",fedistantlight:"feDistantLight",feflood:"feFlood",fefunca:"feFuncA",fefuncb:"feFuncB",fefuncg:"feFuncG",fefuncr:"feFuncR",fegaussianblur:"feGaussianBlur",feimage:"feImage",femerge:"feMerge",femergenode:"feMergeNode",femorphology:"feMorphology",feoffset:"feOffset",fepointlight:"fePointLight",fespecularlighting:"feSpecularLighting",fespotlight:"feSpotLight",fetile:"feTile",feturbulence:"feTurbulence",foreignobject:"foreignObject",glyphref:"glyphRef",lineargradient:"linearGradient",radialgradient:"radialGradient",textpath:"textPath"},B.b9,t.B)
B.bC=new A.bY([0,"\ufffd",13,"\r",128,"\u20ac",129,"\x81",130,"\u201a",131,"\u0192",132,"\u201e",133,"\u2026",134,"\u2020",135,"\u2021",136,"\u02c6",137,"\u2030",138,"\u0160",139,"\u2039",140,"\u0152",141,"\x8d",142,"\u017d",143,"\x8f",144,"\x90",145,"\u2018",146,"\u2019",147,"\u201c",148,"\u201d",149,"\u2022",150,"\u2013",151,"\u2014",152,"\u02dc",153,"\u2122",154,"\u0161",155,"\u203a",156,"\u0153",157,"\x9d",158,"\u017e",159,"\u0178"],A.aK("bY<i,m>"))
B.I=new A.d0("severe")
B.ai=new A.d0("warning")
B.ah=new A.d0("info")
B.ag=new A.bY([B.I,"\x1b[31m",B.ai,"\x1b[35m",B.ah,"\x1b[32m"],t.ha)
B.c2=new A.bY([B.I,"error",B.ai,"warning",B.ah,"info"],t.ha)
B.be=A.a(s(["xlink:actuate","xlink:arcrole","xlink:href","xlink:role","xlink:show","xlink:title","xlink:type","xml:base","xml:lang","xml:space","xmlns","xmlns:xlink"]),t.s)
B.aG=new A.az("xlink","actuate","http://www.w3.org/1999/xlink")
B.aJ=new A.az("xlink","arcrole","http://www.w3.org/1999/xlink")
B.aK=new A.az("xlink","href","http://www.w3.org/1999/xlink")
B.aI=new A.az("xlink","role","http://www.w3.org/1999/xlink")
B.aH=new A.az("xlink","show","http://www.w3.org/1999/xlink")
B.aP=new A.az("xlink","title","http://www.w3.org/1999/xlink")
B.aO=new A.az("xlink","type","http://www.w3.org/1999/xlink")
B.aN=new A.az("xml","base","http://www.w3.org/XML/1998/namespace")
B.aL=new A.az("xml","lang","http://www.w3.org/XML/1998/namespace")
B.aE=new A.az("xml","space","http://www.w3.org/XML/1998/namespace")
B.aM=new A.az(null,"xmlns","http://www.w3.org/2000/xmlns/")
B.aF=new A.az("xmlns","xlink","http://www.w3.org/2000/xmlns/")
B.c3=new A.t(12,{"xlink:actuate":B.aG,"xlink:arcrole":B.aJ,"xlink:href":B.aK,"xlink:role":B.aI,"xlink:show":B.aH,"xlink:title":B.aP,"xlink:type":B.aO,"xml:base":B.aN,"xml:lang":B.aL,"xml:space":B.aE,xmlns:B.aM,"xmlns:xlink":B.aF},B.be,A.aK("t<m,az>"))
B.V=new A.t(0,{},B.r,A.aK("t<m,O>"))
B.U=new A.t(0,{},B.r,A.aK("t<m,E?>"))
B.bi=A.a(s(["attributename","attributetype","basefrequency","baseprofile","calcmode","clippathunits","contentscripttype","contentstyletype","diffuseconstant","edgemode","externalresourcesrequired","filterres","filterunits","glyphref","gradienttransform","gradientunits","kernelmatrix","kernelunitlength","keypoints","keysplines","keytimes","lengthadjust","limitingconeangle","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","numoctaves","pathlength","patterncontentunits","patterntransform","patternunits","pointsatx","pointsaty","pointsatz","preservealpha","preserveaspectratio","primitiveunits","refx","refy","repeatcount","repeatdur","requiredextensions","requiredfeatures","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","surfacescale","systemlanguage","tablevalues","targetx","targety","textlength","viewbox","viewtarget","xchannelselector","ychannelselector","zoomandpan"]),t.s)
B.c4=new A.t(62,{attributename:"attributeName",attributetype:"attributeType",basefrequency:"baseFrequency",baseprofile:"baseProfile",calcmode:"calcMode",clippathunits:"clipPathUnits",contentscripttype:"contentScriptType",contentstyletype:"contentStyleType",diffuseconstant:"diffuseConstant",edgemode:"edgeMode",externalresourcesrequired:"externalResourcesRequired",filterres:"filterRes",filterunits:"filterUnits",glyphref:"glyphRef",gradienttransform:"gradientTransform",gradientunits:"gradientUnits",kernelmatrix:"kernelMatrix",kernelunitlength:"kernelUnitLength",keypoints:"keyPoints",keysplines:"keySplines",keytimes:"keyTimes",lengthadjust:"lengthAdjust",limitingconeangle:"limitingConeAngle",markerheight:"markerHeight",markerunits:"markerUnits",markerwidth:"markerWidth",maskcontentunits:"maskContentUnits",maskunits:"maskUnits",numoctaves:"numOctaves",pathlength:"pathLength",patterncontentunits:"patternContentUnits",patterntransform:"patternTransform",patternunits:"patternUnits",pointsatx:"pointsAtX",pointsaty:"pointsAtY",pointsatz:"pointsAtZ",preservealpha:"preserveAlpha",preserveaspectratio:"preserveAspectRatio",primitiveunits:"primitiveUnits",refx:"refX",refy:"refY",repeatcount:"repeatCount",repeatdur:"repeatDur",requiredextensions:"requiredExtensions",requiredfeatures:"requiredFeatures",specularconstant:"specularConstant",specularexponent:"specularExponent",spreadmethod:"spreadMethod",startoffset:"startOffset",stddeviation:"stdDeviation",stitchtiles:"stitchTiles",surfacescale:"surfaceScale",systemlanguage:"systemLanguage",tablevalues:"tableValues",targetx:"targetX",targety:"targetY",textlength:"textLength",viewbox:"viewBox",viewtarget:"viewTarget",xchannelselector:"xChannelSelector",ychannelselector:"yChannelSelector",zoomandpan:"zoomAndPan"},B.bi,t.B)
B.bq=A.a(s(["li","dt","dd"]),t.s)
B.bp=A.a(s(["li"]),t.s)
B.ac=A.a(s(["dt","dd"]),t.s)
B.cG=new A.t(3,{li:B.bp,dt:B.ac,dd:B.ac},B.bq,A.aK("t<m,n<m>>"))
B.bx=A.a(s(["437","850","852","855","857","860","861","862","863","865","866","869","ansix341968","ansix341986","arabic","ascii","asmo708","big5","big5hkscs","chinese","cp037","cp1026","cp154","cp367","cp424","cp437","cp500","cp775","cp819","cp850","cp852","cp855","cp857","cp860","cp861","cp862","cp863","cp864","cp865","cp866","cp869","cp936","cpgr","cpis","csascii","csbig5","cseuckr","cseucpkdfmtjapanese","csgb2312","cshproman8","csibm037","csibm1026","csibm424","csibm500","csibm855","csibm857","csibm860","csibm861","csibm863","csibm864","csibm865","csibm866","csibm869","csiso2022jp","csiso2022jp2","csiso2022kr","csiso58gb231280","csisolatin1","csisolatin2","csisolatin3","csisolatin4","csisolatin5","csisolatin6","csisolatinarabic","csisolatincyrillic","csisolatingreek","csisolatinhebrew","cskoi8r","csksc56011987","cspc775baltic","cspc850multilingual","cspc862latinhebrew","cspc8codepage437","cspcp852","csptcp154","csshiftjis","csunicode11utf7","cyrillic","cyrillicasian","ebcdiccpbe","ebcdiccpca","ebcdiccpch","ebcdiccphe","ebcdiccpnl","ebcdiccpus","ebcdiccpwt","ecma114","ecma118","elot928","eucjp","euckr","extendedunixcodepackedformatforjapanese","gb18030","gb2312","gb231280","gbk","greek","greek8","hebrew","hproman8","hzgb2312","ibm037","ibm1026","ibm367","ibm424","ibm437","ibm500","ibm775","ibm819","ibm850","ibm852","ibm855","ibm857","ibm860","ibm861","ibm862","ibm863","ibm864","ibm865","ibm866","ibm869","iso2022jp","iso2022jp2","iso2022kr","iso646irv1991","iso646us","iso88591","iso885910","iso8859101992","iso885911987","iso885913","iso885914","iso8859141998","iso885915","iso885916","iso8859162001","iso88592","iso885921987","iso88593","iso885931988","iso88594","iso885941988","iso88595","iso885951988","iso88596","iso885961987","iso88597","iso885971987","iso88598","iso885981988","iso88599","iso885991989","isoceltic","isoir100","isoir101","isoir109","isoir110","isoir126","isoir127","isoir138","isoir144","isoir148","isoir149","isoir157","isoir199","isoir226","isoir58","isoir6","koi8r","koi8u","korean","ksc5601","ksc56011987","ksc56011989","l1","l10","l2","l3","l4","l5","l6","l8","latin1","latin10","latin2","latin3","latin4","latin5","latin6","latin8","latin9","ms936","mskanji","pt154","ptcp154","r8","roman8","shiftjis","tis620","unicode11utf7","us","usascii","utf16","utf16be","utf16le","utf8","windows1250","windows1251","windows1252","windows1253","windows1254","windows1255","windows1256","windows1257","windows1258","windows936","x-x-big5"]),t.s)
B.cH=new A.t(227,{"437":"cp437","850":"cp850","852":"cp852","855":"cp855","857":"cp857","860":"cp860","861":"cp861","862":"cp862","863":"cp863","865":"cp865","866":"cp866","869":"cp869",ansix341968:"ascii",ansix341986:"ascii",arabic:"iso8859-6",ascii:"ascii",asmo708:"iso8859-6",big5:"big5",big5hkscs:"big5hkscs",chinese:"gbk",cp037:"cp037",cp1026:"cp1026",cp154:"ptcp154",cp367:"ascii",cp424:"cp424",cp437:"cp437",cp500:"cp500",cp775:"cp775",cp819:"windows-1252",cp850:"cp850",cp852:"cp852",cp855:"cp855",cp857:"cp857",cp860:"cp860",cp861:"cp861",cp862:"cp862",cp863:"cp863",cp864:"cp864",cp865:"cp865",cp866:"cp866",cp869:"cp869",cp936:"gbk",cpgr:"cp869",cpis:"cp861",csascii:"ascii",csbig5:"big5",cseuckr:"cp949",cseucpkdfmtjapanese:"euc_jp",csgb2312:"gbk",cshproman8:"hp-roman8",csibm037:"cp037",csibm1026:"cp1026",csibm424:"cp424",csibm500:"cp500",csibm855:"cp855",csibm857:"cp857",csibm860:"cp860",csibm861:"cp861",csibm863:"cp863",csibm864:"cp864",csibm865:"cp865",csibm866:"cp866",csibm869:"cp869",csiso2022jp:"iso2022_jp",csiso2022jp2:"iso2022_jp_2",csiso2022kr:"iso2022_kr",csiso58gb231280:"gbk",csisolatin1:"windows-1252",csisolatin2:"iso8859-2",csisolatin3:"iso8859-3",csisolatin4:"iso8859-4",csisolatin5:"windows-1254",csisolatin6:"iso8859-10",csisolatinarabic:"iso8859-6",csisolatincyrillic:"iso8859-5",csisolatingreek:"iso8859-7",csisolatinhebrew:"iso8859-8",cskoi8r:"koi8-r",csksc56011987:"cp949",cspc775baltic:"cp775",cspc850multilingual:"cp850",cspc862latinhebrew:"cp862",cspc8codepage437:"cp437",cspcp852:"cp852",csptcp154:"ptcp154",csshiftjis:"shift_jis",csunicode11utf7:"utf-7",cyrillic:"iso8859-5",cyrillicasian:"ptcp154",ebcdiccpbe:"cp500",ebcdiccpca:"cp037",ebcdiccpch:"cp500",ebcdiccphe:"cp424",ebcdiccpnl:"cp037",ebcdiccpus:"cp037",ebcdiccpwt:"cp037",ecma114:"iso8859-6",ecma118:"iso8859-7",elot928:"iso8859-7",eucjp:"euc_jp",euckr:"cp949",extendedunixcodepackedformatforjapanese:"euc_jp",gb18030:"gb18030",gb2312:"gbk",gb231280:"gbk",gbk:"gbk",greek:"iso8859-7",greek8:"iso8859-7",hebrew:"iso8859-8",hproman8:"hp-roman8",hzgb2312:"hz",ibm037:"cp037",ibm1026:"cp1026",ibm367:"ascii",ibm424:"cp424",ibm437:"cp437",ibm500:"cp500",ibm775:"cp775",ibm819:"windows-1252",ibm850:"cp850",ibm852:"cp852",ibm855:"cp855",ibm857:"cp857",ibm860:"cp860",ibm861:"cp861",ibm862:"cp862",ibm863:"cp863",ibm864:"cp864",ibm865:"cp865",ibm866:"cp866",ibm869:"cp869",iso2022jp:"iso2022_jp",iso2022jp2:"iso2022_jp_2",iso2022kr:"iso2022_kr",iso646irv1991:"ascii",iso646us:"ascii",iso88591:"windows-1252",iso885910:"iso8859-10",iso8859101992:"iso8859-10",iso885911987:"windows-1252",iso885913:"iso8859-13",iso885914:"iso8859-14",iso8859141998:"iso8859-14",iso885915:"iso8859-15",iso885916:"iso8859-16",iso8859162001:"iso8859-16",iso88592:"iso8859-2",iso885921987:"iso8859-2",iso88593:"iso8859-3",iso885931988:"iso8859-3",iso88594:"iso8859-4",iso885941988:"iso8859-4",iso88595:"iso8859-5",iso885951988:"iso8859-5",iso88596:"iso8859-6",iso885961987:"iso8859-6",iso88597:"iso8859-7",iso885971987:"iso8859-7",iso88598:"iso8859-8",iso885981988:"iso8859-8",iso88599:"windows-1254",iso885991989:"windows-1254",isoceltic:"iso8859-14",isoir100:"windows-1252",isoir101:"iso8859-2",isoir109:"iso8859-3",isoir110:"iso8859-4",isoir126:"iso8859-7",isoir127:"iso8859-6",isoir138:"iso8859-8",isoir144:"iso8859-5",isoir148:"windows-1254",isoir149:"cp949",isoir157:"iso8859-10",isoir199:"iso8859-14",isoir226:"iso8859-16",isoir58:"gbk",isoir6:"ascii",koi8r:"koi8-r",koi8u:"koi8-u",korean:"cp949",ksc5601:"cp949",ksc56011987:"cp949",ksc56011989:"cp949",l1:"windows-1252",l10:"iso8859-16",l2:"iso8859-2",l3:"iso8859-3",l4:"iso8859-4",l5:"windows-1254",l6:"iso8859-10",l8:"iso8859-14",latin1:"windows-1252",latin10:"iso8859-16",latin2:"iso8859-2",latin3:"iso8859-3",latin4:"iso8859-4",latin5:"windows-1254",latin6:"iso8859-10",latin8:"iso8859-14",latin9:"iso8859-15",ms936:"gbk",mskanji:"shift_jis",pt154:"ptcp154",ptcp154:"ptcp154",r8:"hp-roman8",roman8:"hp-roman8",shiftjis:"shift_jis",tis620:"cp874",unicode11utf7:"utf-7",us:"ascii",usascii:"ascii",utf16:"utf-16",utf16be:"utf-16-be",utf16le:"utf-16-le",utf8:"utf-8",windows1250:"cp1250",windows1251:"cp1251",windows1252:"cp1252",windows1253:"cp1253",windows1254:"cp1254",windows1255:"cp1255",windows1256:"cp1256",windows1257:"cp1257",windows1258:"cp1258",windows936:"gbk","x-x-big5":"big5"},B.bx,t.B)
B.by=A.a(s(["after","before","first-letter","first-line"]),t.s)
B.cI=new A.t(4,{after:null,before:null,"first-letter":null,"first-line":null},B.by,A.aK("t<m,al>"))
B.dS=new A.eX(B.cI,A.aK("eX<m>"))
B.dT=new A.hH("Start")
B.dU=new A.hH("End")
B.dV=A.u_("E")
B.dW=new A.hP(!1)
B.e=new A.f(0,0,0)
B.k=new A.f(0,0,1)
B.t=new A.f(0,1,0)
B.j=new A.f(1,0,0)
B.aA=new A.f(1,1,0)
B.dX=new A.f(1,1,1)
B.aB=new A.f(1,-1,0)
B.a_=new A.f(-1,1,0)
B.aC=new A.f(-1,-1,0)
B.dZ=new A.dl(null,2)})();(function staticFields(){$.ld=null
$.nI=null
$.nn=null
$.nm=null
$.oZ=null
$.oN=null
$.pa=null
$.lI=null
$.lS=null
$.n_=null
$.dr=null
$.f7=null
$.f8=null
$.mR=!1
$.a9=B.l
$.b8=A.a([],A.aK("A<E>"))
$.f3=A.r8("messages")
$.mu=A.bc(t.N,A.aK("c3"))
$.db=A.bc(t.N,A.aK("aS<m,m>"))
$.iq=A.bc(t.S,A.aK("aS<i,i>"))
$.oy=null
$.lx=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"u6","pg",()=>A.tz("_$dart_dartClosure"))
s($,"uO","nc",()=>B.l.jd(new A.lZ(),A.aK("ba<al>")))
s($,"um","pi",()=>A.bR(A.kw({
toString:function(){return"$receiver$"}})))
s($,"un","pj",()=>A.bR(A.kw({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"uo","pk",()=>A.bR(A.kw(null)))
s($,"up","pl",()=>A.bR(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"us","po",()=>A.bR(A.kw(void 0)))
s($,"ut","pp",()=>A.bR(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"ur","pn",()=>A.bR(A.o_(null)))
s($,"uq","pm",()=>A.bR(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"uv","pr",()=>A.bR(A.o_(void 0)))
s($,"uu","pq",()=>A.bR(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"uy","n9",()=>A.r4())
s($,"uw","ps",()=>new A.kC().$0())
s($,"ux","pt",()=>new A.kB().$0())
s($,"uz","pu",()=>A.qo(A.mP(A.a([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"uA","na",()=>typeof process!="undefined"&&Object.prototype.toString.call(process)=="[object process]"&&process.platform=="win32")
s($,"uJ","m5",()=>A.n4(B.dV))
s($,"uK","pv",()=>A.rM())
r($,"uN","pw",()=>new A.lK().$0())
r($,"u8","dw",()=>{var q=new A.j2()
q.la()
return q})
s($,"uL","nb",()=>new A.iU(A.aK("ct").a($.n8())))
s($,"ui","ph",()=>new A.hn(A.aw("/"),A.aw("[^/]$"),A.aw("^/")))
s($,"uk","iv",()=>new A.hS(A.aw("[/\\\\]"),A.aw("[^/\\\\]$"),A.aw("^(\\\\\\\\[^\\\\]+\\\\[^\\\\/]+|[a-zA-Z]:[/\\\\])"),A.aw("^[/\\\\](?![/\\\\])")))
s($,"uj","fg",()=>new A.hN(A.aw("/"),A.aw("(^[a-zA-Z][-+.a-zA-Z\\d]*://|[^/])$"),A.aw("[a-zA-Z][-+.a-zA-Z\\d]*://[^/]*"),A.aw("^/")))
s($,"uh","n8",()=>A.qR())})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({CanvasGradient:J.b2,DOMError:J.b2,MediaError:J.b2,Navigator:J.b2,NavigatorConcurrentHardware:J.b2,NavigatorUserMediaError:J.b2,OverconstrainedError:J.b2,PositionError:J.b2,GeolocationPositionError:J.b2,ArrayBufferView:A.h9,Int8Array:A.h8,Uint32Array:A.eg,Uint8Array:A.cA,HTMLAudioElement:A.w,HTMLBRElement:A.w,HTMLBaseElement:A.w,HTMLBodyElement:A.w,HTMLButtonElement:A.w,HTMLContentElement:A.w,HTMLDListElement:A.w,HTMLDataElement:A.w,HTMLDataListElement:A.w,HTMLDetailsElement:A.w,HTMLDialogElement:A.w,HTMLDivElement:A.w,HTMLEmbedElement:A.w,HTMLFieldSetElement:A.w,HTMLHRElement:A.w,HTMLHeadElement:A.w,HTMLHeadingElement:A.w,HTMLHtmlElement:A.w,HTMLIFrameElement:A.w,HTMLImageElement:A.w,HTMLInputElement:A.w,HTMLLIElement:A.w,HTMLLabelElement:A.w,HTMLLegendElement:A.w,HTMLLinkElement:A.w,HTMLMapElement:A.w,HTMLMediaElement:A.w,HTMLMenuElement:A.w,HTMLMetaElement:A.w,HTMLMeterElement:A.w,HTMLModElement:A.w,HTMLOListElement:A.w,HTMLObjectElement:A.w,HTMLOptGroupElement:A.w,HTMLOptionElement:A.w,HTMLOutputElement:A.w,HTMLParagraphElement:A.w,HTMLParamElement:A.w,HTMLPictureElement:A.w,HTMLPreElement:A.w,HTMLProgressElement:A.w,HTMLQuoteElement:A.w,HTMLScriptElement:A.w,HTMLShadowElement:A.w,HTMLSlotElement:A.w,HTMLSourceElement:A.w,HTMLSpanElement:A.w,HTMLStyleElement:A.w,HTMLTableCaptionElement:A.w,HTMLTableCellElement:A.w,HTMLTableDataCellElement:A.w,HTMLTableHeaderCellElement:A.w,HTMLTableColElement:A.w,HTMLTableElement:A.w,HTMLTableRowElement:A.w,HTMLTableSectionElement:A.w,HTMLTemplateElement:A.w,HTMLTextAreaElement:A.w,HTMLTimeElement:A.w,HTMLTitleElement:A.w,HTMLTrackElement:A.w,HTMLUListElement:A.w,HTMLUnknownElement:A.w,HTMLVideoElement:A.w,HTMLDirectoryElement:A.w,HTMLFontElement:A.w,HTMLFrameElement:A.w,HTMLFrameSetElement:A.w,HTMLMarqueeElement:A.w,HTMLElement:A.w,HTMLAnchorElement:A.fq,HTMLAreaElement:A.fs,HTMLCanvasElement:A.cm,CanvasRenderingContext2D:A.dF,CDATASection:A.bz,CharacterData:A.bz,Comment:A.bz,ProcessingInstruction:A.bz,Text:A.bz,DOMException:A.iY,DOMRectReadOnly:A.dL,MathMLElement:A.q,SVGAElement:A.q,SVGAnimateElement:A.q,SVGAnimateMotionElement:A.q,SVGAnimateTransformElement:A.q,SVGAnimationElement:A.q,SVGCircleElement:A.q,SVGClipPathElement:A.q,SVGDefsElement:A.q,SVGDescElement:A.q,SVGDiscardElement:A.q,SVGEllipseElement:A.q,SVGFEBlendElement:A.q,SVGFEColorMatrixElement:A.q,SVGFEComponentTransferElement:A.q,SVGFECompositeElement:A.q,SVGFEConvolveMatrixElement:A.q,SVGFEDiffuseLightingElement:A.q,SVGFEDisplacementMapElement:A.q,SVGFEDistantLightElement:A.q,SVGFEFloodElement:A.q,SVGFEFuncAElement:A.q,SVGFEFuncBElement:A.q,SVGFEFuncGElement:A.q,SVGFEFuncRElement:A.q,SVGFEGaussianBlurElement:A.q,SVGFEImageElement:A.q,SVGFEMergeElement:A.q,SVGFEMergeNodeElement:A.q,SVGFEMorphologyElement:A.q,SVGFEOffsetElement:A.q,SVGFEPointLightElement:A.q,SVGFESpecularLightingElement:A.q,SVGFESpotLightElement:A.q,SVGFETileElement:A.q,SVGFETurbulenceElement:A.q,SVGFilterElement:A.q,SVGForeignObjectElement:A.q,SVGGElement:A.q,SVGGeometryElement:A.q,SVGGraphicsElement:A.q,SVGImageElement:A.q,SVGLineElement:A.q,SVGLinearGradientElement:A.q,SVGMarkerElement:A.q,SVGMaskElement:A.q,SVGMetadataElement:A.q,SVGPathElement:A.q,SVGPatternElement:A.q,SVGPolygonElement:A.q,SVGPolylineElement:A.q,SVGRadialGradientElement:A.q,SVGRectElement:A.q,SVGScriptElement:A.q,SVGSetElement:A.q,SVGStopElement:A.q,SVGStyleElement:A.q,SVGElement:A.q,SVGSVGElement:A.q,SVGSwitchElement:A.q,SVGSymbolElement:A.q,SVGTSpanElement:A.q,SVGTextContentElement:A.q,SVGTextElement:A.q,SVGTextPathElement:A.q,SVGTextPositioningElement:A.q,SVGTitleElement:A.q,SVGUseElement:A.q,SVGViewElement:A.q,SVGGradientElement:A.q,SVGComponentTransferFunctionElement:A.q,SVGFEDropShadowElement:A.q,SVGMPathElement:A.q,Element:A.q,AbortPaymentEvent:A.r,AnimationEvent:A.r,AnimationPlaybackEvent:A.r,ApplicationCacheErrorEvent:A.r,BackgroundFetchClickEvent:A.r,BackgroundFetchEvent:A.r,BackgroundFetchFailEvent:A.r,BackgroundFetchedEvent:A.r,BeforeInstallPromptEvent:A.r,BeforeUnloadEvent:A.r,BlobEvent:A.r,CanMakePaymentEvent:A.r,ClipboardEvent:A.r,CloseEvent:A.r,CustomEvent:A.r,DeviceMotionEvent:A.r,DeviceOrientationEvent:A.r,ErrorEvent:A.r,ExtendableEvent:A.r,ExtendableMessageEvent:A.r,FetchEvent:A.r,FontFaceSetLoadEvent:A.r,ForeignFetchEvent:A.r,GamepadEvent:A.r,HashChangeEvent:A.r,InstallEvent:A.r,MediaEncryptedEvent:A.r,MediaKeyMessageEvent:A.r,MediaQueryListEvent:A.r,MediaStreamEvent:A.r,MediaStreamTrackEvent:A.r,MessageEvent:A.r,MIDIConnectionEvent:A.r,MIDIMessageEvent:A.r,MutationEvent:A.r,NotificationEvent:A.r,PageTransitionEvent:A.r,PaymentRequestEvent:A.r,PaymentRequestUpdateEvent:A.r,PopStateEvent:A.r,PresentationConnectionAvailableEvent:A.r,PresentationConnectionCloseEvent:A.r,ProgressEvent:A.r,PromiseRejectionEvent:A.r,PushEvent:A.r,RTCDataChannelEvent:A.r,RTCDTMFToneChangeEvent:A.r,RTCPeerConnectionIceEvent:A.r,RTCTrackEvent:A.r,SecurityPolicyViolationEvent:A.r,SensorErrorEvent:A.r,SpeechRecognitionError:A.r,SpeechRecognitionEvent:A.r,SpeechSynthesisEvent:A.r,StorageEvent:A.r,SyncEvent:A.r,TrackEvent:A.r,TransitionEvent:A.r,WebKitTransitionEvent:A.r,VRDeviceEvent:A.r,VRDisplayEvent:A.r,VRSessionEvent:A.r,MojoInterfaceRequestEvent:A.r,ResourceProgressEvent:A.r,USBConnectionEvent:A.r,IDBVersionChangeEvent:A.r,AudioProcessingEvent:A.r,OfflineAudioCompletionEvent:A.r,WebGLContextEvent:A.r,Event:A.r,InputEvent:A.r,SubmitEvent:A.r,EventTarget:A.aP,HTMLFormElement:A.fR,MouseEvent:A.b3,DragEvent:A.b3,PointerEvent:A.b3,WheelEvent:A.b3,Document:A.aZ,DocumentFragment:A.aZ,HTMLDocument:A.aZ,ShadowRoot:A.aZ,XMLDocument:A.aZ,Attr:A.aZ,DocumentType:A.aZ,Node:A.aZ,Path2D:A.hj,HTMLSelectElement:A.hu,CompositionEvent:A.bv,FocusEvent:A.bv,KeyboardEvent:A.bv,TextEvent:A.bv,TouchEvent:A.bv,UIEvent:A.bv,Window:A.dh,DOMWindow:A.dh,ClientRect:A.eF,DOMRect:A.eF})
hunkHelpers.setOrUpdateLeafTags({CanvasGradient:true,DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,GeolocationPositionError:true,ArrayBufferView:false,Int8Array:true,Uint32Array:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,DOMException:true,DOMRectReadOnly:false,MathMLElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,EventTarget:false,HTMLFormElement:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,Path2D:true,HTMLSelectElement:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,Window:true,DOMWindow:true,ClientRect:true,DOMRect:true})
A.d1.$nativeSuperclassTag="ArrayBufferView"
A.eN.$nativeSuperclassTag="ArrayBufferView"
A.eO.$nativeSuperclassTag="ArrayBufferView"
A.ef.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=A.tL
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=trio.dart.js.map
