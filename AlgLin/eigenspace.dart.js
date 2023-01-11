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
a[c]=function(){a[c]=function(){A.u_(b)}
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
a(hunkHelpers,v,w,$)}var A={mn:function mn(){},
j2(a,b,c){if(b.h("Q<0>").b(a))return new A.eQ(a,b.h("@<0>").Y(c).h("eQ<1,2>"))
return new A.cB(a,b.h("@<0>").Y(c).h("cB<1,2>"))},
qh(a){return new A.eh("Field '"+a+"' has been assigned during initialization.")},
mp(a){return new A.eh("Field '"+a+"' has not been initialized.")},
lX(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
ck(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
my(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
nW(a,b,c){return A.my(A.ck(A.ck(c,a),b))},
fi(a,b,c){return a},
bb(a,b,c,d){A.b9(b,"start")
if(c!=null){A.b9(c,"end")
if(b>c)A.N(A.a_(b,0,c,"start",null))}return new A.aK(a,b,c,d.h("aK<0>"))},
jU(a,b,c,d){if(t.gt.b(a))return new A.dY(a,b,c.h("@<0>").Y(d).h("dY<1,2>"))
return new A.cL(a,b,c.h("@<0>").Y(d).h("cL<1,2>"))},
nT(a,b,c){var s="count"
if(t.gt.b(a)){A.iL(b,s,t.S)
A.b9(b,s)
return new A.d5(a,b,c.h("d5<0>"))}A.iL(b,s,t.S)
A.b9(b,s)
return new A.bR(a,b,c.h("bR<0>"))},
an(){return new A.cj("No element")},
qc(){return new A.cj("Too few elements")},
nU(a,b,c){A.hD(a,0,J.M(a)-1,b,c)},
hD(a,b,c,d,e){if(c-b<=32)A.qM(a,b,c,d,e)
else A.qL(a,b,c,d,e)},
qM(a,b,c,d,e){var s,r,q,p,o,n
for(s=b+1,r=J.Y(a);s<=c;++s){q=r.k(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.k(a,p-1),q)
if(typeof o!=="number")return o.bv()
o=o>0}else o=!1
if(!o)break
n=p-1
r.v(a,p,r.k(a,n))
p=n}r.v(a,p,q)}},
qL(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j=B.d.aT(a5-a4+1,6),i=a4+j,h=a5-j,g=B.d.aT(a4+a5,2),f=g-j,e=g+j,d=J.Y(a3),c=d.k(a3,i),b=d.k(a3,f),a=d.k(a3,g),a0=d.k(a3,e),a1=d.k(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.bv()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.bv()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.bv()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.bv()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.bv()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.bv()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.bv()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.bv()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.bv()
if(a2>0){s=a1
a1=a0
a0=s}d.v(a3,i,c)
d.v(a3,g,a)
d.v(a3,h,a1)
d.v(a3,f,d.k(a3,a4))
d.v(a3,e,d.k(a3,a5))
r=a4+1
q=a5-1
if(J.W(a6.$2(b,a0),0)){for(p=r;p<=q;++p){o=d.k(a3,p)
n=a6.$2(o,b)
if(n===0)continue
if(n<0){if(p!==r){d.v(a3,p,d.k(a3,r))
d.v(a3,r,o)}++r}else for(;!0;){n=a6.$2(d.k(a3,q),b)
if(n>0){--q
continue}else{m=q-1
if(n<0){d.v(a3,p,d.k(a3,r))
l=r+1
d.v(a3,r,d.k(a3,q))
d.v(a3,q,o)
q=m
r=l
break}else{d.v(a3,p,d.k(a3,q))
d.v(a3,q,o)
q=m
break}}}}k=!0}else{for(p=r;p<=q;++p){o=d.k(a3,p)
if(a6.$2(o,b)<0){if(p!==r){d.v(a3,p,d.k(a3,r))
d.v(a3,r,o)}++r}else if(a6.$2(o,a0)>0)for(;!0;)if(a6.$2(d.k(a3,q),a0)>0){--q
if(q<p)break
continue}else{m=q-1
if(a6.$2(d.k(a3,q),b)<0){d.v(a3,p,d.k(a3,r))
l=r+1
d.v(a3,r,d.k(a3,q))
d.v(a3,q,o)
r=l}else{d.v(a3,p,d.k(a3,q))
d.v(a3,q,o)}q=m
break}}k=!1}a2=r-1
d.v(a3,a4,d.k(a3,a2))
d.v(a3,a2,b)
a2=q+1
d.v(a3,a5,d.k(a3,a2))
d.v(a3,a2,a0)
A.hD(a3,a4,r-2,a6,a7)
A.hD(a3,q+2,a5,a6,a7)
if(k)return
if(r<i&&q>h){for(;J.W(a6.$2(d.k(a3,r),b),0);)++r
for(;J.W(a6.$2(d.k(a3,q),a0),0);)--q
for(p=r;p<=q;++p){o=d.k(a3,p)
if(a6.$2(o,b)===0){if(p!==r){d.v(a3,p,d.k(a3,r))
d.v(a3,r,o)}++r}else if(a6.$2(o,a0)===0)for(;!0;)if(a6.$2(d.k(a3,q),a0)===0){--q
if(q<p)break
continue}else{m=q-1
if(a6.$2(d.k(a3,q),b)<0){d.v(a3,p,d.k(a3,r))
l=r+1
d.v(a3,r,d.k(a3,q))
d.v(a3,q,o)
r=l}else{d.v(a3,p,d.k(a3,q))
d.v(a3,q,o)}q=m
break}}A.hD(a3,r,q,a6,a7)}else A.hD(a3,r,q,a6,a7)},
co:function co(){},
dS:function dS(a,b){this.a=a
this.$ti=b},
cB:function cB(a,b){this.a=a
this.$ti=b},
eQ:function eQ(a,b){this.a=a
this.$ti=b},
eN:function eN(){},
l2:function l2(a,b){this.a=a
this.b=b},
aR:function aR(a,b){this.a=a
this.$ti=b},
eh:function eh(a){this.a=a},
a9:function a9(a){this.a=a},
m6:function m6(){},
kr:function kr(){},
Q:function Q(){},
D:function D(){},
aK:function aK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
L:function L(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cL:function cL(a,b,c){this.a=a
this.b=b
this.$ti=c},
dY:function dY(a,b,c){this.a=a
this.b=b
this.$ti=c},
cM:function cM(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
I:function I(a,b,c){this.a=a
this.b=b
this.$ti=c},
ap:function ap(a,b,c){this.a=a
this.b=b
this.$ti=c},
cU:function cU(a,b,c){this.a=a
this.b=b
this.$ti=c},
e2:function e2(a,b,c){this.a=a
this.b=b
this.$ti=c},
e3:function e3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bR:function bR(a,b,c){this.a=a
this.b=b
this.$ti=c},
d5:function d5(a,b,c){this.a=a
this.b=b
this.$ti=c},
eB:function eB(a,b,c){this.a=a
this.b=b
this.$ti=c},
e_:function e_(a){this.$ti=a},
e0:function e0(a){this.$ti=a},
al:function al(a,b){this.a=a
this.$ti=b},
cV:function cV(a,b){this.a=a
this.$ti=b},
be:function be(){},
bz:function bz(){},
dr:function dr(){},
X:function X(a,b){this.a=a
this.$ti=b},
fa:function fa(){},
q5(a){if(typeof a=="number")return B.h.gW(a)
if(t.f5.b(a))return A.bI(a)
return A.n4(a)},
q6(a){return new A.je(a)},
pj(a){var s=v.mangledGlobalNames[a]
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
s=J.bB(a)
return s},
bI(a){var s,r=$.nK
if(r==null)r=$.nK=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
nL(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(m==null)return n
if(3>=m.length)return A.c(m,3)
s=m[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(m[2]!=null)return parseInt(a,16)
return n}if(b<2||b>36)throw A.d(A.a_(b,2,36,"radix",n))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=m[1]
for(p=q.length,o=0;o<p;++o)if((B.b.E(q,o)|32)>r)return n}return parseInt(a,b)},
qv(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.b.eq(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
kg(a){return A.qt(a)},
qt(a){var s,r,q,p
if(a instanceof A.H)return A.b_(A.ay(a),null)
s=J.bo(a)
if(s===B.b4||s===B.b6||t.cx.b(a)){r=B.a8(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.b_(A.ay(a),null)},
qu(){if(!!self.location)return self.location.href
return null},
nJ(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
qw(a){var s,r,q,p=A.a([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.f)(a),++r){q=a[r]
if(!A.lG(q))throw A.d(A.fh(q))
if(q<=65535)B.a.p(p,q)
else if(q<=1114111){B.a.p(p,55296+(B.d.cS(q-65536,10)&1023))
B.a.p(p,56320+(q&1023))}else throw A.d(A.fh(q))}return A.nJ(p)},
nM(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!A.lG(q))throw A.d(A.fh(q))
if(q<0)throw A.d(A.fh(q))
if(q>65535)return A.qw(a)}return A.nJ(a)},
qx(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
b8(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.d.cS(s,10)|55296)>>>0,s&1023|56320)}}throw A.d(A.a_(a,0,1114111,null,null))},
bA(a){throw A.d(A.fh(a))},
c(a,b){if(a==null)J.M(a)
throw A.d(A.ct(a,b))},
ct(a,b){var s,r="index"
if(!A.lG(b))return new A.bC(!0,b,r,null)
s=A.a0(J.M(a))
if(b<0||b>=s)return A.h5(b,a,r,null,s)
return A.kh(b,r)},
tt(a,b,c){if(a<0||a>c)return A.a_(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.a_(b,a,c,"end",null)
return new A.bC(!0,b,"end",null)},
fh(a){return new A.bC(!0,a,null,null)},
d(a){var s,r
if(a==null)a=new A.hi()
s=new Error()
s.dartException=a
r=A.u0
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
u0(){return J.bB(this.dartException)},
N(a){throw A.d(a)},
f(a){throw A.d(A.as(a))},
bW(a){var s,r,q,p,o,n
a=A.n6(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.a([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.kB(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
kC(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
o0(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
mo(a,b){var s=b==null,r=s?null:b.method
return new A.h8(a,r,s?null:b.receiver)},
bq(a){var s
if(a==null)return new A.hj(a)
if(a instanceof A.e1){s=a.a
return A.cw(a,s==null?t.K.a(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.cw(a,a.dartException)
return A.tg(a)},
cw(a,b){if(t.fz.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
tg(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.d.cS(r,16)&8191)===10)switch(q){case 438:return A.cw(a,A.mo(A.k(s)+" (Error "+q+")",e))
case 445:case 5007:p=A.k(s)
return A.cw(a,new A.eq(p+" (Error "+q+")",e))}}if(a instanceof TypeError){o=$.po()
n=$.pp()
m=$.pq()
l=$.pr()
k=$.pu()
j=$.pv()
i=$.pt()
$.ps()
h=$.px()
g=$.pw()
f=o.bn(s)
if(f!=null)return A.cw(a,A.mo(A.aw(s),f))
else{f=n.bn(s)
if(f!=null){f.method="call"
return A.cw(a,A.mo(A.aw(s),f))}else{f=m.bn(s)
if(f==null){f=l.bn(s)
if(f==null){f=k.bn(s)
if(f==null){f=j.bn(s)
if(f==null){f=i.bn(s)
if(f==null){f=l.bn(s)
if(f==null){f=h.bn(s)
if(f==null){f=g.bn(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p){A.aw(s)
return A.cw(a,new A.eq(s,f==null?e:f.method))}}}return A.cw(a,new A.hS(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.eD()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return A.cw(a,new A.bC(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.eD()
return a},
cu(a){var s
if(a instanceof A.e1)return a.b
if(a==null)return new A.f_(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new A.f_(a)},
n4(a){if(a==null||typeof a!="object")return J.aH(a)
else return A.bI(a)},
oW(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.v(0,a[s],a[r])}return b},
tG(a,b,c,d,e,f){t.gY.a(a)
switch(A.a0(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(new A.ih("Unsupported number of arguments for wrapped closure"))},
dC(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.tG)
a.$identity=s
return s},
q0(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.hI().constructor.prototype):Object.create(new A.d1(null,null).constructor.prototype)
s.$initialize=s.constructor
if(h)r=function static_tear_off(){this.$initialize()}
else r=function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.nr(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.pX(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.nr(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
pX(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.pR)}throw A.d("Error in functionType of tearoff")},
pY(a,b,c,d){var s=A.np
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
nr(a,b,c,d){var s,r
if(c)return A.q_(a,b,d)
s=b.length
r=A.pY(s,d,a,b)
return r},
pZ(a,b,c,d){var s=A.np,r=A.pS
switch(b?-1:a){case 0:throw A.d(new A.hz("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
q_(a,b,c){var s,r
if($.nn==null)$.nn=A.nm("interceptor")
if($.no==null)$.no=A.nm("receiver")
s=b.length
r=A.pZ(s,c,a,b)
return r},
mX(a){return A.q0(a)},
pR(a,b){return A.lt(v.typeUniverse,A.ay(a.a),b)},
np(a){return a.a},
pS(a){return a.b},
nm(a){var s,r,q,p=new A.d1("receiver","interceptor"),o=J.jK(Object.getOwnPropertyNames(p),t.iD)
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw A.d(A.a8("Field name "+a+" not found.",null))},
ax(a){if(a==null)A.th("boolean expression must not be null")
return a},
th(a){throw A.d(new A.i2(a))},
u_(a){throw A.d(new A.fO(a))},
tz(a){return v.getIsolateTag(a)},
nD(a,b,c){var s=new A.cJ(a,b,c.h("cJ<0>"))
s.c=a.e
return s},
uN(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
tK(a){var s,r,q,p,o,n=A.aw($.p_.$1(a)),m=$.lR[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.m0[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.iy($.oP.$2(a,n))
if(q!=null){m=$.lR[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.m0[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.m5(s)
$.lR[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.m0[n]=s
return s}if(p==="-"){o=A.m5(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.pb(a,s)
if(p==="*")throw A.d(A.hR(n))
if(v.leafTags[n]===true){o=A.m5(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.pb(a,s)},
pb(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.n3(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
m5(a){return J.n3(a,!1,null,!!a.$idb)},
tM(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.m5(s)
else return J.n3(s,c,null,null)},
tD(){if(!0===$.n_)return
$.n_=!0
A.tE()},
tE(){var s,r,q,p,o,n,m,l
$.lR=Object.create(null)
$.m0=Object.create(null)
A.tC()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.pd.$1(o)
if(n!=null){m=A.tM(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
tC(){var s,r,q,p,o,n,m=B.aV()
m=A.dB(B.aW,A.dB(B.aX,A.dB(B.a9,A.dB(B.a9,A.dB(B.aY,A.dB(B.aZ,A.dB(B.b_(B.a8),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.p_=new A.lY(p)
$.oP=new A.lZ(o)
$.pd=new A.m_(n)},
dB(a,b){return a(b)||b},
mm(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw A.d(A.aD("Illegal RegExp pattern ("+String(n)+")",a,null))},
cx(a,b,c){var s
if(typeof b=="string")return a.indexOf(b,c)>=0
else if(b instanceof A.cH){s=B.b.au(a,c)
return b.b.test(s)}else{s=J.mg(b,B.b.au(a,c))
return!s.gag(s)}},
oV(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
n6(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
bp(a,b,c){var s
if(typeof b=="string")return A.tX(a,b,c)
if(b instanceof A.cH){s=b.gi8()
s.lastIndex=0
return a.replace(s,A.oV(c))}return A.tW(a,b,c)},
tW(a,b,c){var s,r,q,p
for(s=J.mg(b,a),s=s.gH(s),r=0,q="";s.n();){p=s.gq()
q=q+a.substring(r,p.gS(p))+c
r=p.gU()}s=q+a.substring(r)
return s.charCodeAt(0)==0?s:s},
tX(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
r=""+c
for(q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.n6(b),"g"),A.oV(c))},
tY(a,b,c,d){var s=a.indexOf(b,d)
if(s<0)return a
return A.pi(a,s,s+b.length,c)},
pi(a,b,c,d){return a.substring(0,b)+d+a.substring(c)},
d4:function d4(){},
r:function r(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
eO:function eO(a,b){this.a=a
this.$ti=b},
c9:function c9(a,b){this.a=a
this.$ti=b},
je:function je(a){this.a=a},
ec:function ec(){},
ca:function ca(a,b){this.a=a
this.$ti=b},
kB:function kB(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eq:function eq(a,b){this.a=a
this.b=b},
h8:function h8(a,b,c){this.a=a
this.b=b
this.c=c},
hS:function hS(a){this.a=a},
hj:function hj(a){this.a=a},
e1:function e1(a,b){this.a=a
this.b=b},
f_:function f_(a){this.a=a
this.b=null},
aS:function aS(){},
fJ:function fJ(){},
fK:function fK(){},
hK:function hK(){},
hI:function hI(){},
d1:function d1(a,b){this.a=a
this.b=b},
hz:function hz(a){this.a=a},
i2:function i2(a){this.a=a},
bg:function bg(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jM:function jM(a){this.a=a},
jP:function jP(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
aU:function aU(a,b){this.a=a
this.$ti=b},
cJ:function cJ(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
lY:function lY(a){this.a=a},
lZ:function lZ(a){this.a=a},
m_:function m_(a){this.a=a},
cH:function cH(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dw:function dw(a){this.b=a},
i1:function i1(a,b,c){this.a=a
this.b=b
this.c=c},
dt:function dt(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
dp:function dp(a,b){this.a=a
this.c=b},
iq:function iq(a,b,c){this.a=a
this.b=b
this.c=c},
ir:function ir(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
b(a){return A.N(A.mp(a))},
C(a){return A.N(A.qh(a))},
r7(a){var s=new A.l3(a)
return s.b=s},
l3:function l3(a){this.a=a
this.b=null},
mQ(a){return a},
qp(a){return new Int8Array(a)},
lA(a,b,c){if(a>>>0!==a||a>=c)throw A.d(A.ct(b,a))},
rK(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.d(A.tt(a,b,c))
return b},
hf:function hf(){},
df:function df(){},
eo:function eo(){},
he:function he(){},
ep:function ep(){},
cN:function cN(){},
eX:function eX(){},
eY:function eY(){},
nQ(a,b){var s=b.c
return s==null?b.c=A.mK(a,b.y,!0):s},
nP(a,b){var s=b.c
return s==null?b.c=A.f4(a,"bf",[b.y]):s},
nR(a){var s=a.x
if(s===6||s===7||s===8)return A.nR(a.y)
return s===11||s===12},
qD(a){return a.at},
aO(a){return A.iv(v.typeUniverse,a,!1)},
tF(a,b){var s,r,q,p,o
if(a==null)return null
s=b.z
r=a.as
if(r==null)r=a.as=new Map()
q=b.at
p=r.get(q)
if(p!=null)return p
o=A.c3(v.typeUniverse,a.y,s,0)
r.set(q,o)
return o},
c3(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.x
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.y
r=A.c3(a,s,a0,a1)
if(r===s)return b
return A.oh(a,r,!0)
case 7:s=b.y
r=A.c3(a,s,a0,a1)
if(r===s)return b
return A.mK(a,r,!0)
case 8:s=b.y
r=A.c3(a,s,a0,a1)
if(r===s)return b
return A.og(a,r,!0)
case 9:q=b.z
p=A.fg(a,q,a0,a1)
if(p===q)return b
return A.f4(a,b.y,p)
case 10:o=b.y
n=A.c3(a,o,a0,a1)
m=b.z
l=A.fg(a,m,a0,a1)
if(n===o&&l===m)return b
return A.mI(a,n,l)
case 11:k=b.y
j=A.c3(a,k,a0,a1)
i=b.z
h=A.td(a,i,a0,a1)
if(j===k&&h===i)return b
return A.of(a,j,h)
case 12:g=b.z
a1+=g.length
f=A.fg(a,g,a0,a1)
o=b.y
n=A.c3(a,o,a0,a1)
if(f===g&&n===o)return b
return A.mJ(a,n,f,!0)
case 13:e=b.y
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw A.d(A.iV("Attempted to substitute unexpected RTI kind "+c))}},
fg(a,b,c,d){var s,r,q,p,o=b.length,n=A.lw(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.c3(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
te(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.lw(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.c3(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
td(a,b,c,d){var s,r=b.a,q=A.fg(a,r,c,d),p=b.b,o=A.fg(a,p,c,d),n=b.c,m=A.te(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.ij()
s.a=q
s.b=o
s.c=m
return s},
a(a,b){a[v.arrayRti]=b
return a},
mY(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.tA(s)
return a.$S()}return null},
p1(a,b){var s
if(A.nR(b))if(a instanceof A.aS){s=A.mY(a)
if(s!=null)return s}return A.ay(a)},
ay(a){var s
if(a instanceof A.H){s=a.$ti
return s!=null?s:A.mR(a)}if(Array.isArray(a))return A.w(a)
return A.mR(J.bo(a))},
w(a){var s=a[v.arrayRti],r=t.m
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
A(a){var s=a.$ti
return s!=null?s:A.mR(a)},
mR(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.rV(a,s)},
rV(a,b){var s=a instanceof A.aS?a.__proto__.__proto__.constructor:b,r=A.rt(v.typeUniverse,s.name)
b.$ccache=r
return r},
tA(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.iv(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
dD(a){var s=a instanceof A.aS?A.mY(a):null
return A.mZ(s==null?A.ay(a):s)},
mZ(a){var s,r,q,p=a.w
if(p!=null)return p
s=a.at
r=s.replace(/\*/g,"")
if(r===s)return a.w=new A.f2(a)
q=A.iv(v.typeUniverse,r,!0)
p=q.w
return a.w=p==null?q.w=new A.f2(q):p},
u1(a){return A.mZ(A.iv(v.typeUniverse,a,!1))},
rU(a){var s,r,q,p,o=this
if(o===t.K)return A.dz(o,a,A.t0)
if(!A.c5(o))if(!(o===t._))s=!1
else s=!0
else s=!0
if(s)return A.dz(o,a,A.t3)
s=o.x
r=s===6?o.y:o
if(r===t.S)q=A.lG
else if(r===t.W||r===t.p)q=A.t_
else if(r===t.N)q=A.t1
else q=r===t.k4?A.oE:null
if(q!=null)return A.dz(o,a,q)
if(r.x===9){p=r.y
if(r.z.every(A.tJ)){o.r="$i"+p
if(p==="l")return A.dz(o,a,A.rZ)
return A.dz(o,a,A.t2)}}else if(s===7)return A.dz(o,a,A.rS)
return A.dz(o,a,A.rQ)},
dz(a,b,c){a.b=c
return a.b(b)},
rT(a){var s,r=this,q=A.rP
if(!A.c5(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=A.rH
else if(r===t.K)q=A.rG
else{s=A.fk(r)
if(s)q=A.rR}r.a=q
return r.a(a)},
lH(a){var s,r=a.x
if(!A.c5(a))if(!(a===t._))if(!(a===t.im))if(r!==7)s=r===8&&A.lH(a.y)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
rQ(a){var s=this
if(a==null)return A.lH(s)
return A.ai(v.typeUniverse,A.p1(a,s),null,s,null)},
rS(a){if(a==null)return!0
return this.y.b(a)},
t2(a){var s,r=this
if(a==null)return A.lH(r)
s=r.r
if(a instanceof A.H)return!!a[s]
return!!J.bo(a)[s]},
rZ(a){var s,r=this
if(a==null)return A.lH(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.r
if(a instanceof A.H)return!!a[s]
return!!J.bo(a)[s]},
rP(a){var s,r=this
if(a==null){s=A.fk(r)
if(s)return a}else if(r.b(a))return a
A.oC(a,r)},
rR(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.oC(a,s)},
oC(a,b){throw A.d(A.oe(A.o8(a,A.p1(a,b),A.b_(b,null))))},
iA(a,b,c,d){var s=null
if(A.ai(v.typeUniverse,a,s,b,s))return a
throw A.d(A.oe("The type argument '"+A.b_(a,s)+"' is not a subtype of the type variable bound '"+A.b_(b,s)+"' of type variable '"+c+"' in '"+d+"'."))},
o8(a,b,c){var s=A.fU(a)
return s+": type '"+A.b_(b==null?A.ay(a):b,null)+"' is not a subtype of type '"+c+"'"},
oe(a){return new A.f3("TypeError: "+a)},
aZ(a,b){return new A.f3("TypeError: "+A.o8(a,null,b))},
t0(a){return a!=null},
rG(a){if(a!=null)return a
throw A.d(A.aZ(a,"Object"))},
t3(a){return!0},
rH(a){return a},
oE(a){return!0===a||!1===a},
ix(a){if(!0===a)return!0
if(!1===a)return!1
throw A.d(A.aZ(a,"bool"))},
uD(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.aZ(a,"bool"))},
uC(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.aZ(a,"bool?"))},
cs(a){if(typeof a=="number")return a
throw A.d(A.aZ(a,"double"))},
uE(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.aZ(a,"double"))},
ox(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.aZ(a,"double?"))},
lG(a){return typeof a=="number"&&Math.floor(a)===a},
a0(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.d(A.aZ(a,"int"))},
uG(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.aZ(a,"int"))},
uF(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.aZ(a,"int?"))},
t_(a){return typeof a=="number"},
lx(a){if(typeof a=="number")return a
throw A.d(A.aZ(a,"num"))},
uI(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.aZ(a,"num"))},
uH(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.aZ(a,"num?"))},
t1(a){return typeof a=="string"},
aw(a){if(typeof a=="string")return a
throw A.d(A.aZ(a,"String"))},
uJ(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.aZ(a,"String"))},
iy(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.aZ(a,"String?"))},
ta(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.b_(a[q],b)
return s},
oD(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=A.a([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)B.a.p(a5,"T"+(q+p))
for(o=t.iD,n=t._,m="<",l="",p=0;p<s;++p,l=a3){k=a5.length
j=k-1-p
if(!(j>=0))return A.c(a5,j)
m=B.b.R(m+l,a5[j])
i=a6[p]
h=i.x
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+A.b_(i,a5)}m+=">"}else{m=""
r=null}o=a4.y
g=a4.z
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=A.b_(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+A.b_(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+A.b_(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=A.b_(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
b_(a,b){var s,r,q,p,o,n,m,l=a.x
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=A.b_(a.y,b)
return s}if(l===7){r=a.y
s=A.b_(r,b)
q=r.x
return(q===11||q===12?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+A.b_(a.y,b)+">"
if(l===9){p=A.tf(a.y)
o=a.z
return o.length>0?p+("<"+A.ta(o,b)+">"):p}if(l===11)return A.oD(a,b,null)
if(l===12)return A.oD(a.y,b,a.z)
if(l===13){n=a.y
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.c(b,n)
return b[n]}return"?"},
tf(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
ru(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
rt(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.iv(a,b,!1)
else if(typeof m=="number"){s=m
r=A.f5(a,5,"#")
q=A.lw(s)
for(p=0;p<s;++p)q[p]=r
o=A.f4(a,b,q)
n[b]=o
return o}else return m},
rr(a,b){return A.ov(a.tR,b)},
rq(a,b){return A.ov(a.eT,b)},
iv(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.oc(A.oa(a,null,b,c))
r.set(b,s)
return s},
lt(a,b,c){var s,r,q=b.Q
if(q==null)q=b.Q=new Map()
s=q.get(c)
if(s!=null)return s
r=A.oc(A.oa(a,b,c,!0))
q.set(c,r)
return r},
rs(a,b,c){var s,r,q,p=b.as
if(p==null)p=b.as=new Map()
s=c.at
r=p.get(s)
if(r!=null)return r
q=A.mI(a,b,c.x===10?c.z:[c])
p.set(s,q)
return q},
cr(a,b){b.a=A.rT
b.b=A.rU
return b},
f5(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.bv(null,null)
s.x=b
s.at=c
r=A.cr(a,s)
a.eC.set(c,r)
return r},
oh(a,b,c){var s,r=b.at+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.ro(a,b,r,c)
a.eC.set(r,s)
return s},
ro(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.c5(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new A.bv(null,null)
q.x=6
q.y=b
q.at=c
return A.cr(a,q)},
mK(a,b,c){var s,r=b.at+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.rn(a,b,r,c)
a.eC.set(r,s)
return s},
rn(a,b,c,d){var s,r,q,p
if(d){s=b.x
if(!A.c5(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&A.fk(b.y)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.im)return t.P
else if(s===6){q=b.y
if(q.x===8&&A.fk(q.y))return q
else return A.nQ(a,b)}}p=new A.bv(null,null)
p.x=7
p.y=b
p.at=c
return A.cr(a,p)},
og(a,b,c){var s,r=b.at+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.rl(a,b,r,c)
a.eC.set(r,s)
return s},
rl(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.c5(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return A.f4(a,"bf",[b])
else if(b===t.P||b===t.T)return t.gK}q=new A.bv(null,null)
q.x=8
q.y=b
q.at=c
return A.cr(a,q)},
rp(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.bv(null,null)
s.x=13
s.y=b
s.at=q
r=A.cr(a,s)
a.eC.set(q,r)
return r},
iu(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].at
return s},
rk(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].at}return s},
f4(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.iu(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.bv(null,null)
r.x=9
r.y=b
r.z=c
if(c.length>0)r.c=c[0]
r.at=p
q=A.cr(a,r)
a.eC.set(p,q)
return q},
mI(a,b,c){var s,r,q,p,o,n
if(b.x===10){s=b.y
r=b.z.concat(c)}else{r=c
s=b}q=s.at+(";<"+A.iu(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.bv(null,null)
o.x=10
o.y=s
o.z=r
o.at=q
n=A.cr(a,o)
a.eC.set(q,n)
return n},
of(a,b,c){var s,r,q,p,o,n=b.at,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.iu(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.iu(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.rk(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.bv(null,null)
p.x=11
p.y=b
p.z=c
p.at=r
o=A.cr(a,p)
a.eC.set(r,o)
return o},
mJ(a,b,c,d){var s,r=b.at+("<"+A.iu(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.rm(a,b,c,r,d)
a.eC.set(r,s)
return s},
rm(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.lw(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.x===1){r[p]=o;++q}}if(q>0){n=A.c3(a,b,r,0)
m=A.fg(a,c,r,0)
return A.mJ(a,n,m,c!==m)}}l=new A.bv(null,null)
l.x=12
l.y=b
l.z=c
l.at=d
return A.cr(a,l)},
oa(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
oc(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=A.rf(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=A.ob(a,r,h,g,!1)
else if(q===46)r=A.ob(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(A.cp(a.u,a.e,g.pop()))
break
case 94:g.push(A.rp(a.u,g.pop()))
break
case 35:g.push(A.f5(a.u,5,"#"))
break
case 64:g.push(A.f5(a.u,2,"@"))
break
case 126:g.push(A.f5(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
A.mH(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(A.f4(p,n,o))
else{m=A.cp(p,a.e,n)
switch(m.x){case 11:g.push(A.mJ(p,m,o,a.n))
break
default:g.push(A.mI(p,m,o))
break}}break
case 38:A.rg(a,g)
break
case 42:p=a.u
g.push(A.oh(p,A.cp(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(A.mK(p,A.cp(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(A.og(p,A.cp(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new A.ij()
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
A.mH(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(A.of(p,A.cp(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
A.mH(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
A.ri(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return A.cp(a.u,a.e,i)},
rf(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
ob(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.x===10)o=o.y
n=A.ru(s,o.y)[p]
if(n==null)A.N('No "'+p+'" in "'+A.qD(o)+'"')
d.push(A.lt(s,o,n))}else d.push(p)
return m},
rg(a,b){var s=b.pop()
if(0===s){b.push(A.f5(a.u,1,"0&"))
return}if(1===s){b.push(A.f5(a.u,4,"1&"))
return}throw A.d(A.iV("Unexpected extended operation "+A.k(s)))},
cp(a,b,c){if(typeof c=="string")return A.f4(a,c,a.sEA)
else if(typeof c=="number")return A.rh(a,b,c)
else return c},
mH(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.cp(a,b,c[s])},
ri(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.cp(a,b,c[s])},
rh(a,b,c){var s,r,q=b.x
if(q===10){if(c===0)return b.y
s=b.z
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.y
q=b.x}else if(c===0)return b
if(q!==9)throw A.d(A.iV("Indexed base must be an interface type"))
s=b.z
if(c<=s.length)return s[c-1]
throw A.d(A.iV("Bad index "+c+" for "+b.l(0)))},
ai(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!A.c5(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.x
if(r===4)return!0
if(A.c5(b))return!1
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
if(p===6){s=A.nQ(a,d)
return A.ai(a,b,c,s,e)}if(r===8){if(!A.ai(a,b.y,c,d,e))return!1
return A.ai(a,A.nP(a,b),c,d,e)}if(r===7){s=A.ai(a,t.P,c,d,e)
return s&&A.ai(a,b.y,c,d,e)}if(p===8){if(A.ai(a,b,c,d.y,e))return!0
return A.ai(a,b,c,A.nP(a,d),e)}if(p===7){s=A.ai(a,b,c,t.P,e)
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
if(!A.ai(a,k,c,j,e)||!A.ai(a,j,e,k,c))return!1}return A.oF(a,b.y,c,d.y,e)}if(p===11){if(b===t.dY)return!0
if(s)return!1
return A.oF(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return A.rY(a,b,c,d,e)}return!1},
oF(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
rY(a,b,c,d,e){var s,r,q,p,o,n,m,l=b.y,k=d.y
for(;l!==k;){s=a.tR[l]
if(s==null)return!1
if(typeof s=="string"){l=s
continue}r=s[k]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.lt(a,b,r[o])
return A.ow(a,p,null,c,d.z,e)}n=b.z
m=d.z
return A.ow(a,n,null,c,m,e)},
ow(a,b,c,d,e,f){var s,r,q,p=b.length
for(s=0;s<p;++s){r=b[s]
q=e[s]
if(!A.ai(a,r,d,q,f))return!1}return!0},
fk(a){var s,r=a.x
if(!(a===t.P||a===t.T))if(!A.c5(a))if(r!==7)if(!(r===6&&A.fk(a.y)))s=r===8&&A.fk(a.y)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
tJ(a){var s
if(!A.c5(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
c5(a){var s=a.x
return s===2||s===3||s===4||s===5||a===t.iD},
ov(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
lw(a){return a>0?new Array(a):v.typeUniverse.sEA},
bv:function bv(a,b){var _=this
_.a=a
_.b=b
_.w=_.r=_.c=null
_.x=0
_.at=_.as=_.Q=_.z=_.y=null},
ij:function ij(){this.c=this.b=this.a=null},
f2:function f2(a){this.a=a},
ig:function ig(){},
f3:function f3(a){this.a=a},
r3(){var s,r,q={}
if(self.scheduleImmediate!=null)return A.ti()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(A.dC(new A.l_(q),1)).observe(s,{childList:true})
return new A.kZ(q,s,r)}else if(self.setImmediate!=null)return A.tj()
return A.tk()},
r4(a){self.scheduleImmediate(A.dC(new A.l0(t.M.a(a)),0))},
r5(a){self.setImmediate(A.dC(new A.l1(t.M.a(a)),0))},
r6(a){t.M.a(a)
A.rj(0,a)},
rj(a,b){var s=new A.lr()
s.lN(a,b)
return s},
c2(a){return new A.i3(new A.ar($.aa,a.h("ar<0>")),a.h("i3<0>"))},
c1(a,b){a.$2(0,null)
b.b=!0
return b.a},
bn(a,b){A.rI(a,b)},
c0(a,b){b.fm(0,a)},
c_(a,b){b.iT(A.bq(a),A.cu(a))},
rI(a,b){var s,r,q=new A.ly(b),p=new A.lz(b)
if(a instanceof A.ar)a.ip(q,p,t.z)
else{s=t.z
if(t.g7.b(a))a.fY(q,p,s)
else{r=new A.ar($.aa,t.j_)
r.a=8
r.c=a
r.ip(q,p,s)}}},
c4(a){var s=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(r){e=r
d=c}}}(a,1)
return $.aa.jJ(new A.lL(s),t.H,t.S,t.z)},
rc(a){return new A.dv(a,1)},
mE(){return B.e7},
mF(a){return new A.dv(a,3)},
mU(a,b){return new A.f1(a,b.h("f1<0>"))},
iW(a,b){var s=A.fi(a,"error",t.K)
return new A.dM(s,b==null?A.pP(a):b)},
pP(a){var s
if(t.fz.b(a)){s=a.gdr()
if(s!=null)return s}return B.b1},
la(a,b){var s,r,q
for(s=t.j_;r=a.a,(r&4)!==0;)a=s.a(a.c)
if((r&24)!==0){q=b.dA()
b.eU(a)
A.du(b,q)}else{q=t.Q.a(b.c)
b.a=b.a&1|4
b.c=a
a.ie(q)}},
du(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=c.a=a
for(s=t.u,r=t.Q,q=t.g7;!0;){p={}
o=b.a
n=(o&16)===0
m=!n
if(a0==null){if(m&&(o&1)===0){l=s.a(b.c)
A.lI(l.a,l.b)}return}p.a=a0
k=a0.a
for(b=a0;k!=null;b=k,k=j){b.a=null
A.du(c.a,b)
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
A.lI(i.a,i.b)
return}f=$.aa
if(f!==g)$.aa=g
else f=null
b=b.c
if((b&15)===8)new A.li(p,c,m).$0()
else if(n){if((b&1)!==0)new A.lh(p,i).$0()}else if((b&2)!==0)new A.lg(c,p).$0()
if(f!=null)$.aa=f
b=p.c
if(q.b(b)){o=p.a.$ti
o=o.h("bf<2>").b(b)||!o.z[1].b(b)}else o=!1
if(o){q.a(b)
e=p.a.b
if((b.a&24)!==0){d=r.a(e.c)
e.c=null
a0=e.dB(d)
e.a=b.a&30|e.a&1
e.c=b.c
c.a=b
continue}else A.la(b,e)
return}}e=p.a.b
d=r.a(e.c)
e.c=null
a0=e.dB(d)
b=p.b
o=p.c
if(!b){e.$ti.c.a(o)
e.a=8
e.c=o}else{s.a(o)
e.a=e.a&1|16
e.c=o}c.a=e
b=e}},
t8(a,b){var s
if(t.eK.b(a))return b.jJ(a,t.z,t.K,t.k)
s=t.mq
if(s.b(a))return s.a(a)
throw A.d(A.mh(a,"onError",u.w))},
t7(){var s,r
for(s=$.dA;s!=null;s=$.dA){$.ff=null
r=s.b
$.dA=r
if(r==null)$.fe=null
s.a.$0()}},
tc(){$.mS=!0
try{A.t7()}finally{$.ff=null
$.mS=!1
if($.dA!=null)$.na().$1(A.oQ())}},
oK(a){var s=new A.i4(a),r=$.fe
if(r==null){$.dA=$.fe=s
if(!$.mS)$.na().$1(A.oQ())}else $.fe=r.b=s},
tb(a){var s,r,q,p=$.dA
if(p==null){A.oK(a)
$.ff=$.fe
return}s=new A.i4(a)
r=$.ff
if(r==null){s.b=p
$.dA=$.ff=s}else{q=r.b
s.b=q
$.ff=r.b=s
if(q==null)$.fe=s}},
tU(a){var s,r=null,q=$.aa
if(B.k===q){A.cY(r,r,B.k,a)
return}s=!1
if(s){A.cY(r,r,q,t.M.a(a))
return}A.cY(r,r,q,t.M.a(q.iL(a)))},
uh(a,b){A.fi(a,"stream",t.K)
return new A.ip(b.h("ip<0>"))},
lI(a,b){A.tb(new A.lJ(a,b))},
oH(a,b,c,d,e){var s,r=$.aa
if(r===c)return d.$0()
$.aa=c
s=r
try{r=d.$0()
return r}finally{$.aa=s}},
oI(a,b,c,d,e,f,g){var s,r=$.aa
if(r===c)return d.$1(e)
$.aa=c
s=r
try{r=d.$1(e)
return r}finally{$.aa=s}},
t9(a,b,c,d,e,f,g,h,i){var s,r=$.aa
if(r===c)return d.$2(e,f)
$.aa=c
s=r
try{r=d.$2(e,f)
return r}finally{$.aa=s}},
cY(a,b,c,d){t.M.a(d)
if(B.k!==c)d=c.iL(d)
A.oK(d)},
l_:function l_(a){this.a=a},
kZ:function kZ(a,b,c){this.a=a
this.b=b
this.c=c},
l0:function l0(a){this.a=a},
l1:function l1(a){this.a=a},
lr:function lr(){},
ls:function ls(a,b){this.a=a
this.b=b},
i3:function i3(a,b){this.a=a
this.b=!1
this.$ti=b},
ly:function ly(a){this.a=a},
lz:function lz(a){this.a=a},
lL:function lL(a){this.a=a},
dv:function dv(a,b){this.a=a
this.b=b},
cq:function cq(a,b){var _=this
_.a=a
_.d=_.c=_.b=null
_.$ti=b},
f1:function f1(a,b){this.a=a
this.$ti=b},
dM:function dM(a,b){this.a=a
this.b=b},
i5:function i5(){},
f0:function f0(a,b){this.a=a
this.$ti=b},
cW:function cW(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
ar:function ar(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
l7:function l7(a,b){this.a=a
this.b=b},
lf:function lf(a,b){this.a=a
this.b=b},
lb:function lb(a){this.a=a},
lc:function lc(a){this.a=a},
ld:function ld(a,b,c){this.a=a
this.b=b
this.c=c},
l9:function l9(a,b){this.a=a
this.b=b},
le:function le(a,b){this.a=a
this.b=b},
l8:function l8(a,b,c){this.a=a
this.b=b
this.c=c},
li:function li(a,b,c){this.a=a
this.b=b
this.c=c},
lj:function lj(a){this.a=a},
lh:function lh(a,b){this.a=a
this.b=b},
lg:function lg(a,b){this.a=a
this.b=b},
i4:function i4(a){this.a=a
this.b=null},
eE:function eE(){},
kt:function kt(a,b){this.a=a
this.b=b},
ku:function ku(a,b){this.a=a
this.b=b},
eF:function eF(){},
hJ:function hJ(){},
ip:function ip(a){this.$ti=a},
f9:function f9(){},
lJ:function lJ(a,b){this.a=a
this.b=b},
io:function io(){},
lp:function lp(a,b){this.a=a
this.b=b},
lq:function lq(a,b,c){this.a=a
this.b=b
this.c=c},
ab(a,b,c,d){var s
if(b==null){if(a==null)return new A.bg(c.h("@<0>").Y(d).h("bg<1,2>"))
s=A.oS()}else{if(a==null)a=A.tn()
s=A.oS()}return A.rd(s,a,b,c,d)},
y(a,b,c){return b.h("@<0>").Y(c).h("jO<1,2>").a(A.oW(a,new A.bg(b.h("@<0>").Y(c).h("bg<1,2>"))))},
bh(a,b){return new A.bg(a.h("@<0>").Y(b).h("bg<1,2>"))},
rd(a,b,c,d,e){var s=c!=null?c:new A.lm(d)
return new A.eU(a,b,s,d.h("@<0>").Y(e).h("eU<1,2>"))},
mq(a){return new A.bY(a.h("bY<0>"))},
nE(a){return new A.bY(a.h("bY<0>"))},
mG(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
re(a,b,c){var s=new A.cX(a,b,c.h("cX<0>"))
s.c=a.e
return s},
rN(a,b){return J.W(a,b)},
rO(a){return J.aH(a)},
qb(a,b,c){var s,r
if(A.mT(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.a([],t.s)
B.a.p($.bd,a)
try{A.t4(a,s)}finally{if(0>=$.bd.length)return A.c($.bd,-1)
$.bd.pop()}r=A.kv(b,t.e7.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
jI(a,b,c){var s,r
if(A.mT(a))return b+"..."+c
s=new A.a2(b)
B.a.p($.bd,a)
try{r=s
r.a=A.kv(r.a,a,", ")}finally{if(0>=$.bd.length)return A.c($.bd,-1)
$.bd.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
mT(a){var s,r
for(s=$.bd.length,r=0;r<s;++r)if(a===$.bd[r])return!0
return!1},
t4(a,b){var s,r,q,p,o,n,m,l=a.gH(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.n())return
s=A.k(l.gq())
B.a.p(b,s)
k+=s.length+2;++j}if(!l.n()){if(j<=5)return
if(0>=b.length)return A.c(b,-1)
r=b.pop()
if(0>=b.length)return A.c(b,-1)
q=b.pop()}else{p=l.gq();++j
if(!l.n()){if(j<=4){B.a.p(b,A.k(p))
return}r=A.k(p)
if(0>=b.length)return A.c(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gq();++j
for(;l.n();p=o,o=n){n=l.gq();++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return A.c(b,-1)
k-=b.pop().length+2;--j}B.a.p(b,"...")
return}}q=A.k(p)
r=A.k(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.c(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.p(b,m)
B.a.p(b,q)
B.a.p(b,r)},
ha(a,b,c){var s=A.ab(null,null,b,c)
a.bb(0,new A.jQ(s,b,c))
return s},
mr(a,b){var s,r,q,p=A.mq(b)
for(s=J.F(a),r=s.$ti.c;s.n();){q=s.d
p.p(0,b.a(q==null?r.a(q):q))}return p},
qj(a,b){var s=t.bP
return J.nf(s.a(a),s.a(b))},
mt(a){var s,r={}
if(A.mT(a))return"{...}"
s=new A.a2("")
try{B.a.p($.bd,a)
s.a+="{"
r.a=!0
a.bb(0,new A.jS(r,s))
s.a+="}"}finally{if(0>=$.bd.length)return A.c($.bd,-1)
$.bd.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
ms(a){return new A.ej(A.bH(A.qk(null),null,!1,a.h("0?")),a.h("ej<0>"))},
qk(a){return 8},
eU:function eU(a,b,c,d){var _=this
_.w=a
_.x=b
_.y=c
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=d},
lm:function lm(a){this.a=a},
bY:function bY(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ik:function ik(a){this.a=a
this.c=this.b=null},
cX:function cX(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
ee:function ee(){},
jQ:function jQ(a,b,c){this.a=a
this.b=b
this.c=c},
ei:function ei(){},
u:function u(){},
ek:function ek(){},
jS:function jS(a,b){this.a=a
this.b=b},
cK:function cK(){},
jT:function jT(a){this.a=a},
ej:function ej(a,b){var _=this
_.a=a
_.d=_.c=_.b=0
_.$ti=b},
eW:function eW(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.$ti=e},
aX:function aX(){},
ey:function ey(){},
dx:function dx(){},
iw:function iw(){},
f6:function f6(a,b){this.a=a
this.$ti=b},
eV:function eV(){},
eZ:function eZ(){},
fb:function fb(){},
fc:function fc(){},
qZ(a,b,c,d){var s,r
if(b instanceof Uint8Array){s=b
d=s.length
if(d-c<15)return null
r=A.r_(a,s,c,d)
if(r!=null&&a)if(r.indexOf("\ufffd")>=0)return null
return r}return null},
r_(a,b,c,d){var s=a?$.pz():$.py()
if(s==null)return null
if(0===c&&d===b.length)return A.o3(s,b)
return A.o3(s,b.subarray(c,A.aF(c,d,b.length)))},
o3(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
nl(a,b,c,d,e,f){if(B.d.a4(f,4)!==0)throw A.d(A.aD("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.d(A.aD("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.d(A.aD("Invalid base64 padding, more than two '=' characters",a,b))},
rF(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
rE(a,b,c){var s,r,q,p=c-b,o=new Uint8Array(p)
for(s=J.Y(a),r=0;r<p;++r){q=s.k(a,b+r)
if((q&4294967040)>>>0!==0)q=255
if(!(r<p))return A.c(o,r)
o[r]=q}return o},
kI:function kI(){},
kH:function kH(){},
fz:function fz(){},
it:function it(){},
fA:function fA(a,b){this.a=a
this.b=b},
fC:function fC(){},
fD:function fD(){},
cC:function cC(){},
cD:function cD(){},
fT:function fT(){},
hW:function hW(){},
hX:function hX(a){this.a=a},
lv:function lv(a){this.a=a
this.b=16
this.c=0},
cv(a,b){var s=A.nL(a,b)
if(s!=null)return s
throw A.d(A.aD(a,null,null))},
bM(a){var s=A.qv(a)
if(s!=null)return s
throw A.d(A.aD("Invalid double",a,null))},
q3(a){if(a instanceof A.aS)return a.l(0)
return"Instance of '"+A.kg(a)+"'"},
q4(a,b){a=A.d(a)
if(a==null)a=t.K.a(a)
a.stack=b.l(0)
throw a
throw A.d("unreachable")},
bH(a,b,c,d){var s,r=c?J.ml(a,d):J.nz(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
hb(a,b,c){var s,r=A.a([],c.h("z<0>"))
for(s=J.F(a);s.n();)B.a.p(r,c.a(s.gq()))
if(b)return r
return J.jK(r,c)},
j(a,b,c){var s
if(b)return A.nF(a,c)
s=J.jK(A.nF(a,c),c)
return s},
nF(a,b){var s,r
if(Array.isArray(a))return A.a(a.slice(0),b.h("z<0>"))
s=A.a([],b.h("z<0>"))
for(r=J.F(a);r.n();)B.a.p(s,r.gq())
return s},
nG(a,b){var s=A.hb(a,!1,b)
s.fixed$length=Array
s.immutable$list=Array
return s},
ad(a,b,c){var s,r
if(Array.isArray(a)){s=a
r=s.length
c=A.aF(b,c,r)
return A.nM(b>0||c<r?s.slice(b,c):s)}if(t.hD.b(a))return A.qx(a,b,A.aF(b,c,a.length))
return A.qQ(a,b,c)},
qP(a){return A.b8(a)},
qQ(a,b,c){var s,r,q,p,o=null
if(b<0)throw A.d(A.a_(b,0,J.M(a),o,o))
s=c==null
if(!s&&c<b)throw A.d(A.a_(c,b,J.M(a),o,o))
r=J.F(a)
for(q=0;q<b;++q)if(!r.n())throw A.d(A.a_(b,0,q,o,o))
p=[]
if(s)for(;r.n();)p.push(r.gq())
else for(q=b;q<c;++q){if(!r.n())throw A.d(A.a_(c,b,q,o,o))
p.push(r.gq())}return A.nM(p)},
au(a){return new A.cH(a,A.mm(a,!1,!0,!1,!1,!1))},
kv(a,b,c){var s=J.F(b)
if(!s.n())return a
if(c.length===0){do a+=A.k(s.gq())
while(s.n())}else{a+=A.k(s.gq())
for(;s.n();)a=a+c+A.k(s.gq())}return a},
mB(){var s=A.qu()
if(s!=null)return A.mC(s)
throw A.d(A.T("'Uri.base' is not supported"))},
fU(a){if(typeof a=="number"||A.oE(a)||a==null)return J.bB(a)
if(typeof a=="string")return JSON.stringify(a)
return A.q3(a)},
iV(a){return new A.dL(a)},
a8(a,b){return new A.bC(!1,null,b,a)},
mh(a,b,c){return new A.bC(!0,a,b,c)},
iL(a,b,c){return a},
aE(a){var s=null
return new A.dk(s,s,!1,s,s,a)},
kh(a,b){return new A.dk(null,null,!0,a,b,"Value not in range")},
a_(a,b,c,d,e){return new A.dk(b,c,!0,a,d,"Invalid value")},
nO(a,b,c,d){if(a<b||a>c)throw A.d(A.a_(a,b,c,d,null))
return a},
aF(a,b,c){if(0>a||a>c)throw A.d(A.a_(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.d(A.a_(b,a,c,"end",null))
return b}return c},
b9(a,b){if(a<0)throw A.d(A.a_(a,0,null,b,null))
return a},
h5(a,b,c,d,e){var s=A.a0(e==null?J.M(b):e)
return new A.h4(s,!0,a,c,"Index out of range")},
T(a){return new A.hT(a)},
hR(a){return new A.eL(a)},
av(a){return new A.cj(a)},
as(a){return new A.fM(a)},
aD(a,b,c){return new A.e4(a,b,c)},
cO(a,b,c,d){var s,r
if(B.m===c)return A.nW(J.aH(a),J.aH(b),$.md())
if(B.m===d){s=J.aH(a)
b=J.aH(b)
c=J.aH(c)
return A.my(A.ck(A.ck(A.ck($.md(),s),b),c))}s=J.aH(a)
b=J.aH(b)
c=J.aH(c)
d=J.aH(d)
r=$.md()
return A.my(A.ck(A.ck(A.ck(A.ck(r,s),b),c),d))},
n5(a){A.tP(a)},
oz(a,b){return 65536+((a&1023)<<10)+(b&1023)},
mC(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((B.b.E(a5,4)^58)*3|B.b.E(a5,0)^100|B.b.E(a5,1)^97|B.b.E(a5,2)^116|B.b.E(a5,3)^97)>>>0
if(s===0)return A.o1(a4<a4?B.b.A(a5,0,a4):a5,5,a3).gjW()
else if(s===32)return A.o1(B.b.A(a5,5,a4),0,a3).gjW()}r=A.bH(8,0,!1,t.S)
B.a.v(r,0,0)
B.a.v(r,1,-1)
B.a.v(r,2,-1)
B.a.v(r,7,-1)
B.a.v(r,3,0)
B.a.v(r,4,0)
B.a.v(r,5,a4)
B.a.v(r,6,a4)
if(A.oJ(a5,0,a4,0,r)>=14)B.a.v(r,7,a4)
q=r[1]
if(q>=0)if(A.oJ(a5,0,q,20,r)===20)r[7]=q
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
k=!1}else{if(!B.b.aa(a5,"\\",n))if(p>0)h=B.b.aa(a5,"\\",p-1)||B.b.aa(a5,"\\",p-2)
else h=!1
else h=!0
if(h){j=a3
k=!1}else{if(!(m<a4&&m===n+2&&B.b.aa(a5,"..",n)))h=m>n+2&&B.b.aa(a5,"/..",m-3)
else h=!0
if(h){j=a3
k=!1}else{if(q===4)if(B.b.aa(a5,"file",0)){if(p<=0){if(!B.b.aa(a5,"/",n)){g="file:///"
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
a5=B.b.cd(a5,n,m,"/");++a4
m=f}j="file"}else if(B.b.aa(a5,"http",0)){if(i&&o+3===n&&B.b.aa(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.b.cd(a5,o,n,"")
a4-=3
n=e}j="http"}else j=a3
else if(q===5&&B.b.aa(a5,"https",0)){if(i&&o+4===n&&B.b.aa(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.b.cd(a5,o,n,"")
a4-=3
n=e}j="https"}else j=a3
k=!0}}}}else j=a3
if(k){if(a4<a5.length){a5=B.b.A(a5,0,a4)
q-=0
p-=0
o-=0
n-=0
m-=0
l-=0}return new A.bm(a5,q,p,o,n,m,l,j)}if(j==null)if(q>0)j=A.rA(a5,0,q)
else{if(q===0)A.dy(a5,0,"Invalid empty scheme")
j=""}if(p>0){d=q+3
c=d<p?A.oq(a5,d,p-1):""
b=A.on(a5,p,o,!1)
i=o+1
if(i<n){a=A.nL(B.b.A(a5,i,n),a3)
a0=A.mM(a==null?A.N(A.aD("Invalid port",a5,i)):a,j)}else a0=a3}else{a0=a3
b=a0
c=""}a1=A.oo(a5,n,m,a3,j,b!=null)
a2=m<l?A.op(a5,m+1,l,a3):a3
return A.lu(j,c,b,a0,a1,a2,l<a4?A.om(a5,l+1,a4):a3)},
qY(a){A.aw(a)
return A.mP(a,0,a.length,B.y,!1)},
qX(a,b,c){var s,r,q,p,o,n,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new A.kE(a),j=new Uint8Array(4)
for(s=b,r=s,q=0;s<c;++s){p=B.b.I(a,s)
if(p!==46){if((p^48)>9)k.$2("invalid character",s)}else{if(q===3)k.$2(m,s)
o=A.cv(B.b.A(a,r,s),null)
if(o>255)k.$2(l,r)
n=q+1
if(!(q<4))return A.c(j,q)
j[q]=o
r=s+1
q=n}}if(q!==3)k.$2(m,c)
o=A.cv(B.b.A(a,r,c),null)
if(o>255)k.$2(l,r)
if(!(q<4))return A.c(j,q)
j[q]=o
return j},
o2(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c=new A.kF(a),b=new A.kG(c,a)
if(a.length<2)c.$2("address is too short",d)
s=A.a([],t.t)
for(r=a0,q=r,p=!1,o=!1;r<a1;++r){n=B.b.I(a,r)
if(n===58){if(r===a0){++r
if(B.b.I(a,r)!==58)c.$2("invalid start colon.",r)
q=r}if(r===q){if(p)c.$2("only one wildcard `::` is allowed",r)
B.a.p(s,-1)
p=!0}else B.a.p(s,b.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)c.$2("too few parts",d)
m=q===a1
l=B.a.gt(s)
if(m&&l!==-1)c.$2("expected a part after last `:`",a1)
if(!m)if(!o)B.a.p(s,b.$2(q,a1))
else{k=A.qX(a,q,a1)
B.a.p(s,(k[0]<<8|k[1])>>>0)
B.a.p(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)c.$2("an address with a wildcard must have less than 7 parts",d)}else if(s.length!==8)c.$2("an address without a wildcard must contain exactly 8 parts",d)
j=new Uint8Array(16)
for(l=s.length,i=9-l,r=0,h=0;r<l;++r){g=s[r]
if(g===-1)for(f=0;f<i;++f){if(!(h>=0&&h<16))return A.c(j,h)
j[h]=0
e=h+1
if(!(e<16))return A.c(j,e)
j[e]=0
h+=2}else{e=B.d.cS(g,8)
if(!(h>=0&&h<16))return A.c(j,h)
j[h]=e
e=h+1
if(!(e<16))return A.c(j,e)
j[e]=g&255
h+=2}}return j},
lu(a,b,c,d,e,f,g){return new A.f7(a,b,c,d,e,f,g)},
oj(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
dy(a,b,c){throw A.d(A.aD(c,a,b))},
rw(a,b){var s,r,q,p,o
for(s=a.length,r=0;r<s;++r){q=a[r]
p=J.Y(q)
o=p.gm(q)
if(0>o)A.N(A.a_(0,0,p.gm(q),null,null))
if(A.cx(q,"/",0)){s=A.T("Illegal path character "+A.k(q))
throw A.d(s)}}},
oi(a,b,c){var s,r,q,p,o
for(s=A.bb(a,c,null,A.w(a).c),r=s.$ti,s=new A.L(s,s.gm(s),r.h("L<D.E>")),r=r.h("D.E");s.n();){q=s.d
if(q==null)q=r.a(q)
p=A.au('["*/:<>?\\\\|]')
o=q.length
if(A.cx(q,p,0)){s=A.T("Illegal character in path: "+q)
throw A.d(s)}}},
rx(a,b){var s
if(!(65<=a&&a<=90))s=97<=a&&a<=122
else s=!0
if(s)return
s=A.T("Illegal drive letter "+A.qP(a))
throw A.d(s)},
mM(a,b){if(a!=null&&a===A.oj(b))return null
return a},
on(a,b,c,d){var s,r,q,p,o,n
if(a==null)return null
if(b===c)return""
if(B.b.I(a,b)===91){s=c-1
if(B.b.I(a,s)!==93)A.dy(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=A.ry(a,r,s)
if(q<s){p=q+1
o=A.ot(a,B.b.aa(a,"25",p)?q+3:p,s,"%25")}else o=""
A.o2(a,r,q)
return B.b.A(a,b,q).toLowerCase()+o+"]"}for(n=b;n<c;++n)if(B.b.I(a,n)===58){q=B.b.aP(a,"%",b)
q=q>=b&&q<c?q:c
if(q<c){p=q+1
o=A.ot(a,B.b.aa(a,"25",p)?q+3:p,c,"%25")}else o=""
A.o2(a,b,q)
return"["+B.b.A(a,b,q)+o+"]"}return A.rC(a,b,c)},
ry(a,b,c){var s=B.b.aP(a,"%",b)
return s>=b&&s<c?s:c},
ot(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new A.a2(d):null
for(s=b,r=s,q=!0;s<c;){p=B.b.I(a,s)
if(p===37){o=A.mN(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new A.a2("")
m=i.a+=B.b.A(a,r,s)
if(n)o=B.b.A(a,s,s+3)
else if(o==="%")A.dy(a,s,"ZoneID should not contain % anymore")
i.a=m+o
s+=3
r=s
q=!0}else{if(p<127){n=p>>>4
if(!(n<8))return A.c(B.K,n)
n=(B.K[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(i==null)i=new A.a2("")
if(r<s){i.a+=B.b.A(a,r,s)
r=s}q=!1}++s}else{if((p&64512)===55296&&s+1<c){l=B.b.I(a,s+1)
if((l&64512)===56320){p=(p&1023)<<10|l&1023|65536
k=2}else k=1}else k=1
j=B.b.A(a,r,s)
if(i==null){i=new A.a2("")
n=i}else n=i
n.a+=j
n.a+=A.mL(p)
s+=k
r=s}}}if(i==null)return B.b.A(a,b,c)
if(r<c)i.a+=B.b.A(a,r,c)
n=i.a
return n.charCodeAt(0)==0?n:n},
rC(a,b,c){var s,r,q,p,o,n,m,l,k,j,i
for(s=b,r=s,q=null,p=!0;s<c;){o=B.b.I(a,s)
if(o===37){n=A.mN(a,s,!0)
m=n==null
if(m&&p){s+=3
continue}if(q==null)q=new A.a2("")
l=B.b.A(a,r,s)
k=q.a+=!p?l.toLowerCase():l
if(m){n=B.b.A(a,s,s+3)
j=3}else if(n==="%"){n="%25"
j=1}else j=3
q.a=k+n
s+=j
r=s
p=!0}else{if(o<127){m=o>>>4
if(!(m<8))return A.c(B.aj,m)
m=(B.aj[m]&1<<(o&15))!==0}else m=!1
if(m){if(p&&65<=o&&90>=o){if(q==null)q=new A.a2("")
if(r<s){q.a+=B.b.A(a,r,s)
r=s}p=!1}++s}else{if(o<=93){m=o>>>4
if(!(m<8))return A.c(B.G,m)
m=(B.G[m]&1<<(o&15))!==0}else m=!1
if(m)A.dy(a,s,"Invalid character")
else{if((o&64512)===55296&&s+1<c){i=B.b.I(a,s+1)
if((i&64512)===56320){o=(o&1023)<<10|i&1023|65536
j=2}else j=1}else j=1
l=B.b.A(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new A.a2("")
m=q}else m=q
m.a+=l
m.a+=A.mL(o)
s+=j
r=s}}}}if(q==null)return B.b.A(a,b,c)
if(r<c){l=B.b.A(a,r,c)
q.a+=!p?l.toLowerCase():l}m=q.a
return m.charCodeAt(0)==0?m:m},
rA(a,b,c){var s,r,q,p
if(b===c)return""
if(!A.ol(B.b.E(a,b)))A.dy(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=B.b.E(a,s)
if(q<128){p=q>>>4
if(!(p<8))return A.c(B.J,p)
p=(B.J[p]&1<<(q&15))!==0}else p=!1
if(!p)A.dy(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=B.b.A(a,b,c)
return A.rv(r?a.toLowerCase():a)},
rv(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
oq(a,b,c){if(a==null)return""
return A.f8(a,b,c,B.bo,!1,!1)},
oo(a,b,c,d,e,f){var s=e==="file",r=s||f,q=A.f8(a,b,c,B.ak,!0,!0)
if(q.length===0){if(s)return"/"}else if(r&&!B.b.Z(q,"/"))q="/"+q
return A.rB(q,e,f)},
rB(a,b,c){var s=b.length===0
if(s&&!c&&!B.b.Z(a,"/")&&!B.b.Z(a,"\\"))return A.mO(a,!s||c)
return A.bZ(a)},
op(a,b,c,d){if(a!=null)return A.f8(a,b,c,B.I,!0,!1)
return null},
om(a,b,c){if(a==null)return null
return A.f8(a,b,c,B.I,!0,!1)},
mN(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=B.b.I(a,b+1)
r=B.b.I(a,n)
q=A.lX(s)
p=A.lX(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){n=B.d.cS(o,4)
if(!(n<8))return A.c(B.K,n)
n=(B.K[n]&1<<(o&15))!==0}else n=!1
if(n)return A.b8(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return B.b.A(a,b,b+3).toUpperCase()
return null},
mL(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
if(a<128){s=new Uint8Array(3)
s[0]=37
s[1]=B.b.E(k,a>>>4)
s[2]=B.b.E(k,a&15)}else{if(a>2047)if(a>65535){r=240
q=4}else{r=224
q=3}else{r=192
q=2}p=3*q
s=new Uint8Array(p)
for(o=0;--q,q>=0;r=128){n=B.d.mp(a,6*q)&63|r
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
o+=3}}return A.ad(s,0,null)},
f8(a,b,c,d,e,f){var s=A.os(a,b,c,d,e,f)
return s==null?B.b.A(a,b,c):s},
os(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i=null
for(s=!e,r=b,q=r,p=i;r<c;){o=B.b.I(a,r)
if(o<127){n=o>>>4
if(!(n<8))return A.c(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=A.mN(a,r,!1)
if(m==null){r+=3
continue}if("%"===m){m="%25"
l=1}else l=3}else if(o===92&&f){m="/"
l=1}else{if(s)if(o<=93){n=o>>>4
if(!(n<8))return A.c(B.G,n)
n=(B.G[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){A.dy(a,r,"Invalid character")
l=i
m=l}else{if((o&64512)===55296){n=r+1
if(n<c){k=B.b.I(a,n)
if((k&64512)===56320){o=(o&1023)<<10|k&1023|65536
l=2}else l=1}else l=1}else l=1
m=A.mL(o)}}if(p==null){p=new A.a2("")
n=p}else n=p
j=n.a+=B.b.A(a,q,r)
n.a=j+A.k(m)
if(typeof l!=="number")return A.bA(l)
r+=l
q=r}}if(p==null)return i
if(q<c)p.a+=B.b.A(a,q,c)
s=p.a
return s.charCodeAt(0)==0?s:s},
or(a){if(B.b.Z(a,"."))return!0
return B.b.aj(a,"/.")!==-1},
bZ(a){var s,r,q,p,o,n,m
if(!A.or(a))return a
s=A.a([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(J.W(n,"..")){m=s.length
if(m!==0){if(0>=m)return A.c(s,-1)
s.pop()
if(s.length===0)B.a.p(s,"")}p=!0}else if("."===n)p=!0
else{B.a.p(s,n)
p=!1}}if(p)B.a.p(s,"")
return B.a.aD(s,"/")},
mO(a,b){var s,r,q,p,o,n
if(!A.or(a))return!b?A.ok(a):a
s=A.a([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n)if(s.length!==0&&B.a.gt(s)!==".."){if(0>=s.length)return A.c(s,-1)
s.pop()
p=!0}else{B.a.p(s,"..")
p=!1}else if("."===n)p=!0
else{B.a.p(s,n)
p=!1}}r=s.length
if(r!==0)if(r===1){if(0>=r)return A.c(s,0)
r=s[0].length===0}else r=!1
else r=!0
if(r)return"./"
if(p||B.a.gt(s)==="..")B.a.p(s,"")
if(!b){if(0>=s.length)return A.c(s,0)
B.a.v(s,0,A.ok(s[0]))}return B.a.aD(s,"/")},
ok(a){var s,r,q,p=a.length
if(p>=2&&A.ol(B.b.E(a,0)))for(s=1;s<p;++s){r=B.b.E(a,s)
if(r===58)return B.b.A(a,0,s)+"%3A"+B.b.au(a,s+1)
if(r<=127){q=r>>>4
if(!(q<8))return A.c(B.J,q)
q=(B.J[q]&1<<(r&15))===0}else q=!0
if(q)break}return a},
rD(a,b){if(a.ow("package")&&a.c==null)return A.oL(b,0,b.length)
return-1},
ou(a){var s,r,q,p=a.gfS(),o=p.length
if(o>0&&J.M(p[0])===2&&J.ne(p[0],1)===58){if(0>=o)return A.c(p,0)
A.rx(J.ne(p[0],0),!1)
A.oi(p,!1,1)
s=!0}else{A.oi(p,!1,0)
s=!1}r=a.ge7()&&!s?""+"\\":""
if(a.gd4()){q=a.gbk(a)
if(q.length!==0)r=r+"\\"+q+"\\"}r=A.kv(r,p,"\\")
o=s&&o===1?r+"\\":r
return o.charCodeAt(0)==0?o:o},
rz(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=B.b.E(a,b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw A.d(A.a8("Invalid URL encoding",null))}}return s},
mP(a,b,c,d,e){var s,r,q,p,o=b
while(!0){if(!(o<c)){s=!0
break}r=B.b.E(a,o)
if(r<=127)if(r!==37)q=!1
else q=!0
else q=!0
if(q){s=!1
break}++o}if(s){if(B.y!==d)q=!1
else q=!0
if(q)return B.b.A(a,b,c)
else p=new A.a9(B.b.A(a,b,c))}else{p=A.a([],t.t)
for(q=a.length,o=b;o<c;++o){r=B.b.E(a,o)
if(r>127)throw A.d(A.a8("Illegal percent encoding in URI",null))
if(r===37){if(o+3>q)throw A.d(A.a8("Truncated URI",null))
B.a.p(p,A.rz(a,o+1))
o+=2}else B.a.p(p,r)}}return d.dR(0,p)},
ol(a){var s=a|32
return 97<=s&&s<=122},
o1(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.a([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=B.b.E(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.d(A.aD(k,a,r))}}if(q<0&&r>b)throw A.d(A.aD(k,a,r))
for(;p!==44;){B.a.p(j,r);++r
for(o=-1;r<s;++r){p=B.b.E(a,r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)B.a.p(j,o)
else{n=B.a.gt(j)
if(p!==44||r!==n+7||!B.b.aa(a,"base64",n+1))throw A.d(A.aD("Expecting '='",a,r))
break}}B.a.p(j,r)
m=r+1
if((j.length&1)===1)a=B.aU.oH(a,m,s)
else{l=A.os(a,m,s,B.I,!0,!1)
if(l!=null)a=B.b.cd(a,m,s,l)}return new A.kD(a,j,c)},
rL(){var s,r,q,p,o,n,m="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",l=".",k=":",j="/",i="\\",h="?",g="#",f="/\\",e=A.a(new Array(22),t.bs)
for(s=0;s<22;++s)e[s]=new Uint8Array(96)
r=new A.lC(e)
q=new A.lD()
p=new A.lE()
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
oJ(a,b,c,d,e){var s,r,q,p,o=$.pB()
for(s=b;s<c;++s){if(!(d>=0&&d<o.length))return A.c(o,d)
r=o[d]
q=B.b.E(a,s)^96
p=r[q>95?31:q]
d=p&31
B.a.v(e,p>>>5,s)}return d},
od(a){if(a.b===7&&B.b.Z(a.a,"package")&&a.c<=0)return A.oL(a.a,a.e,a.f)
return-1},
oL(a,b,c){var s,r,q
for(s=b,r=0;s<c;++s){q=B.b.I(a,s)
if(q===47)return r!==0?s:-1
if(q===37||q===58)return-1
r|=q^46}return-1},
rJ(a,b,c){var s,r,q,p,o,n,m
for(s=a.length,r=0,q=0;q<s;++q){p=B.b.E(a,q)
o=B.b.E(b,c+q)
n=p^o
if(n!==0){if(n===32){m=o|n
if(97<=m&&m<=122){r=32
continue}}return-1}}return r},
l4:function l4(){},
a1:function a1(){},
dL:function dL(a){this.a=a},
cl:function cl(){},
hi:function hi(){},
bC:function bC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dk:function dk(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
h4:function h4(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
hT:function hT(a){this.a=a},
eL:function eL(a){this.a=a},
cj:function cj(a){this.a=a},
fM:function fM(a){this.a=a},
hn:function hn(){},
eD:function eD(){},
fO:function fO(a){this.a=a},
ih:function ih(a){this.a=a},
e4:function e4(a,b,c){this.a=a
this.b=b
this.c=c},
i:function i(){},
U:function U(){},
bi:function bi(a,b,c){this.a=a
this.b=b
this.$ti=c},
ak:function ak(){},
H:function H(){},
is:function is(){},
hy:function hy(a){this.a=a},
hx:function hx(a){var _=this
_.a=a
_.c=_.b=0
_.d=-1},
a2:function a2(a){this.a=a},
kE:function kE(a){this.a=a},
kF:function kF(a){this.a=a},
kG:function kG(a,b){this.a=a
this.b=b},
f7:function f7(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.y=_.x=_.w=$},
kD:function kD(a,b,c){this.a=a
this.b=b
this.c=c},
lC:function lC(a){this.a=a},
lD:function lD(){},
lE:function lE(){},
bm:function bm(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
i7:function i7(a,b,c,d,e,f,g){var _=this
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
l5(a,b,c,d,e){var s=A.oN(new A.l6(c),t.fq),r=s!=null
if(r&&!0){t.U.a(s)
if(r)J.pD(a,b,s,!1)}return new A.eS(a,b,s,!1,e.h("eS<0>"))},
oN(a,b){var s=$.aa
if(s===B.k)return a
return s.nf(a,b)},
x:function x(){},
fu:function fu(){},
fx:function fx(){},
cA:function cA(){},
dR:function dR(){},
bE:function bE(){},
j7:function j7(){},
dV:function dV(){},
p:function p(){},
q:function q(){},
aT:function aT(){},
fX:function fX(){},
b7:function b7(){},
b2:function b2(){},
hp:function hp(){},
hB:function hB(){},
by:function by(){},
ds:function ds(){},
kY:function kY(a){this.a=a},
eP:function eP(){},
mj:function mj(a,b){this.a=a
this.$ti=b},
eR:function eR(){},
ic:function ic(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
eS:function eS(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
l6:function l6(a){this.a=a},
p9(a,b,c){A.iA(c,t.p,"T","min")
return Math.min(c.a(a),c.a(b))},
p8(a,b,c){A.iA(c,t.p,"T","max")
return Math.max(c.a(a),c.a(b))},
im:function im(){this.b=this.a=0},
cP:function cP(a,b,c){this.a=a
this.b=b
this.$ti=c},
at:function at(a,b){this.a=a
this.$ti=b},
jJ:function jJ(a){this.a=a},
eT:function eT(a,b){this.a=a
this.b=null
this.$ti=b},
oB(a,b){var s,r,q,p,o,n,m=null
for(s=a.length,r=!b,q=m,p=0;p<s;++p){switch(B.b.E(a,p)){case 34:o=r?'\\"':m
break
case 39:o=b?"\\'":m
break
default:o=m}n=o==null
if(!n&&q==null)q=new A.a2(B.b.A(a,0,p))
if(q!=null)q.a+=n?a[p]:o}if(q==null)s=a
else{s=q.a
s=s.charCodeAt(0)==0?s:s}return s},
mA(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=a.length,r=0;r<s;++r){q=a[r]
p=A.aw(q.k(0,"value"))
o=p.length
if(e===o){for(n=d,m=!0,l=0;l<o;++l,n=j){k=B.b.E(p,l)
j=n+1
i=B.b.I(c,n)
if(m)if(i!==k){h=i>=65&&i<=90&&i+32===k
m=h}else m=!0
else m=!1
if(!m)break}if(m)return A.a0(q.k(0,b))}}return-1},
qU(a){var s,r
if(a===24)return"%"
else for(s=0;s<26;++s){r=B.ad[s]
if(A.a0(r.k(0,"unit"))===a)return A.iy(r.k(0,"value"))}return"<BAD UNIT>"},
nY(a){switch(a){case 0:return"ERROR"
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
nX(a){switch(a){case 641:case 642:case 643:case 644:case 645:case 646:case 647:case 648:case 649:case 650:case 651:case 652:case 653:case 654:case 655:case 656:case 600:case 601:case 602:case 603:case 604:case 605:case 606:case 607:case 608:case 609:case 610:case 612:case 613:case 614:case 615:case 617:return!0
default:return!1}},
hP(a){var s
if(!(a>=97&&a<=122))s=a>=65&&a<=90||a===95||a>=160||a===92
else s=!0
return s},
lo:function lo(a){this.a=a
this.c=null
this.d=$},
bk:function bk(a,b){this.a=a
this.b=b},
h0:function h0(a,b,c){this.c=a
this.a=b
this.b=c},
ky:function ky(a,b,c,d,e,f,g,h,i){var _=this
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
kz:function kz(){},
de:function de(a){this.b=a},
dd:function dd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jZ:function jZ(a,b,c){this.a=a
this.b=b
this.c=c},
qs(a,b){return new A.kf(b)},
kf:function kf(a){this.w=a},
bP:function bP(a,b){this.b=a
this.a=b},
cn:function cn(a){this.a=a},
hM:function hM(a){this.a=a},
hg:function hg(a){this.a=a},
hC:function hC(a,b){this.b=a
this.a=b},
cg:function cg(a,b){this.b=a
this.a=b},
ez:function ez(a,b,c){this.b=a
this.c=b
this.a=c},
aY:function aY(){},
cE:function cE(a,b){this.b=a
this.a=b},
hd:function hd(a,b,c){this.d=a
this.b=b
this.a=c},
fB:function fB(a,b,c,d){var _=this
_.d=a
_.e=b
_.b=c
_.a=d},
h_:function h_(a,b){this.b=a
this.a=b},
fI:function fI(a,b){this.b=a
this.a=b},
di:function di(a,b){this.b=a
this.a=b},
dj:function dj(a,b,c){this.d=a
this.b=b
this.a=c},
et:function et(a,b,c){this.f=a
this.b=b
this.a=c},
hu:function hu(a,b,c){this.d=a
this.b=b
this.a=c},
dn:function dn(a,b){this.b=a
this.a=b},
hh:function hh(a,b,c){this.d=a
this.b=b
this.a=c},
hm:function hm(a){this.a=a},
hl:function hl(a){this.a=a},
ag:function ag(a,b,c){this.c=a
this.d=b
this.a=c},
hk:function hk(a,b,c){this.c=a
this.d=b
this.a=c},
bl:function bl(){},
h9:function h9(a,b,c,d){var _=this
_.f=a
_.c=b
_.d=c
_.a=d},
hr:function hr(a,b,c){this.c=a
this.d=b
this.a=c},
fS:function fS(a,b,c){this.c=a
this.d=b
this.a=c},
fV:function fV(a,b,c){this.c=a
this.d=b
this.a=c},
fv:function fv(a,b,c,d){var _=this
_.f=a
_.c=b
_.d=c
_.a=d},
hN:function hN(a,b,c,d){var _=this
_.f=a
_.c=b
_.d=c
_.a=d},
fZ:function fZ(a,b,c,d){var _=this
_.f=a
_.c=b
_.d=c
_.a=d},
fY:function fY(a,b,c){this.c=a
this.d=b
this.a=c},
hw:function hw(a,b,c,d){var _=this
_.f=a
_.c=b
_.d=c
_.a=d},
fH:function fH(a,b,c,d){var _=this
_.f=a
_.c=b
_.d=c
_.a=d},
hv:function hv(a,b,c,d){var _=this
_.f=a
_.c=b
_.d=c
_.a=d},
hZ:function hZ(a,b,c,d){var _=this
_.f=a
_.c=b
_.d=c
_.a=d},
S:function S(){},
aj:function aj(){},
i_:function i_(){},
nt(){return new A.dU(A.ab(null,null,t.K,t.N))},
nu(a,b,c){return new A.fP(a,b,c,A.ab(null,null,t.K,t.N))},
mz(a){return new A.bT(a,A.ab(null,null,t.K,t.N))},
mi(a,b){return new A.V(b,a,A.ab(null,null,t.K,t.N))},
ns(a){return new A.fL(a,A.ab(null,null,t.K,t.N))},
aC:function aC(a,b,c){this.a=a
this.b=b
this.c=c},
il:function il(){},
ln:function ln(){},
ib:function ib(){},
ah:function ah(){},
dU:function dU(a){var _=this
_.a=null
_.b=a
_.d=_.c=$
_.e=null},
fP:function fP(a,b,c,d){var _=this
_.w=a
_.x=b
_.y=c
_.a=null
_.b=d
_.d=_.c=$
_.e=null},
bT:function bT(a,b){var _=this
_.w=a
_.a=null
_.b=b
_.d=_.c=$
_.e=null},
V:function V(a,b,c){var _=this
_.w=a
_.x=b
_.a=null
_.b=c
_.d=_.c=$
_.e=null},
fL:function fL(a,b){var _=this
_.w=a
_.a=null
_.b=b
_.d=_.c=$
_.e=null},
ac:function ac(a,b){this.b=a
this.a=b},
fW:function fW(a){this.a=a},
jd:function jd(){},
i8:function i8(){},
i9:function i9(){},
ia:function ia(){},
id:function id(){},
ie:function ie(){},
ii:function ii(){},
jC:function jC(a,b,c,d){var _=this
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
a4:function a4(){},
ke:function ke(a){this.a=a},
kd:function kd(a){this.a=a},
bu:function bu(a,b){this.a=a
this.b=b},
fE:function fE(a,b){this.a=a
this.b=b},
dP:function dP(a,b){this.a=a
this.b=b},
h2:function h2(a,b){this.a=a
this.b=b},
ft:function ft(a,b){this.a=a
this.b=b},
d7:function d7(a,b){this.c=!1
this.a=a
this.b=b},
jG:function jG(a){this.a=a},
jF:function jF(a){this.a=a},
hL:function hL(a,b){this.a=a
this.b=b},
eb:function eb(a,b){this.a=a
this.b=b},
d9:function d9(a,b,c){var _=this
_.c=null
_.d=a
_.a=b
_.b=c},
jH:function jH(){},
e6:function e6(a,b){this.a=a
this.b=b},
e7:function e7(a,b){this.a=a
this.b=b},
cF:function cF(a,b){this.a=a
this.b=b},
e9:function e9(a,b){this.a=a
this.b=b},
d8:function d8(a,b){this.a=a
this.b=b},
ea:function ea(a,b){this.a=a
this.b=b},
h3:function h3(a,b){this.a=a
this.b=b},
h1:function h1(a,b){this.a=a
this.b=b},
fr:function fr(a,b){this.a=a
this.b=b},
e8:function e8(a,b){this.a=a
this.b=b},
fs:function fs(a,b){this.a=a
this.b=b},
fp:function fp(a,b){this.a=a
this.b=b},
fq:function fq(a,b){this.a=a
this.b=b},
aW:function aW(a,b,c){this.a=a
this.b=b
this.c=c},
qo(a){switch(a){case"http://www.w3.org/1999/xhtml":return"html"
case"http://www.w3.org/1998/Math/MathML":return"math"
case"http://www.w3.org/2000/svg":return"svg"
case"http://www.w3.org/1999/xlink":return"xlink"
case"http://www.w3.org/XML/1998/namespace":return"xml"
case"http://www.w3.org/2000/xmlns/":return"xmlns"
default:return null}},
a3(a){A.iy(a)
if(a==null)return!1
return A.n2(B.b.E(a,0))},
n2(a){switch(a){case 9:case 10:case 12:case 13:case 32:return!0}return!1},
aQ(a){var s,r
if(a==null)return!1
s=B.b.E(a,0)
if(!(s>=97&&s<=122))r=s>=65&&s<=90
else r=!0
return r},
m4(a){var s
if(a==null)return!1
s=B.b.E(a,0)
return s>=48&&s<58},
p5(a){if(a==null)return!1
switch(B.b.E(a,0)){case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:case 65:case 66:case 67:case 68:case 69:case 70:case 97:case 98:case 99:case 100:case 101:case 102:return!0}return!1},
pO(a){A.a0(a)
return a>=65&&a<=90?a+97-65:a},
ki:function ki(){},
fR:function fR(a){this.a=a},
i6:function i6(){},
jb:function jb(a){this.a=a
this.b=-1},
j3:function j3(a){this.a=a},
rX(a){if(1<=a&&a<=8)return!0
if(14<=a&&a<=31)return!0
if(127<=a&&a<=159)return!0
if(55296<=a&&a<=57343)return!0
if(64976<=a&&a<=65007)return!0
switch(a){case 11:case 65534:case 65535:case 131070:case 131071:case 196606:case 196607:case 262142:case 262143:case 327678:case 327679:case 393214:case 393215:case 458750:case 458751:case 524286:case 524287:case 589822:case 589823:case 655358:case 655359:case 720894:case 720895:case 786430:case 786431:case 851966:case 851967:case 917502:case 917503:case 983038:case 983039:case 1048574:case 1048575:case 1114110:case 1114111:return!0}return!1},
tl(a){var s=A.au("[\t-\r -/:-@[-`{-~]")
if(a==null)return null
return B.cM.k(0,A.bp(a,s,"").toLowerCase())},
rM(a,b){switch(a){case"ascii":return new A.a9(B.aT.dR(0,b))
case"utf-8":return new A.a9(B.y.dR(0,b))
default:throw A.d(A.a8("Encoding "+a+" not supported",null))}},
jB:function jB(a,b,c,d){var _=this
_.a=a
_.b=!0
_.d=b
_.f=_.e=null
_.r=c
_.w=null
_.x=d
_.y=0},
aV:function aV(){},
nS(a){switch(a){case"before":case"after":case"first-line":case"first-letter":return!0
default:return!1}},
qH(a){var s,r
for(;a!=null;){s=a.b.k(0,"lang")
if(s!=null)return s
r=a.a
a=r instanceof A.V?r:null}return null},
ex:function ex(){this.a=null},
kp:function kp(){},
kq:function kq(){},
ko:function ko(){},
kn:function kn(a){this.a=a},
aJ(a,b,c,d){return new A.ci(b==null?A.ab(null,null,t.K,t.N):b,c,a,d)},
b3:function b3(){},
bS:function bS(){},
ci:function ci(a,b,c,d){var _=this
_.e=a
_.r=!1
_.w=b
_.b=c
_.c=d
_.a=null},
J:function J(a,b){this.b=a
this.c=b
this.a=null},
ba:function ba(){},
m:function m(a,b,c){var _=this
_.e=a
_.b=b
_.c=c
_.a=null},
E:function E(a,b){this.b=a
this.c=b
this.a=null},
cR:function cR(a,b){this.b=a
this.c=b
this.a=null},
d2:function d2(a,b){this.b=a
this.c=b
this.a=null},
dT:function dT(a){var _=this
_.c=_.b=null
_.d=""
_.e=a
_.a=null},
eG:function eG(){this.a=null
this.b=$},
lT:function lT(){},
lS:function lS(){},
e5:function e5(a,b,c,d,e,f,g,h){var _=this
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
jD:function jD(a){this.a=a},
jE:function jE(a){this.a=a},
t6(a,b){var s,r,q=a.a
if(q!==b.a)return!1
if(q===0)return!0
for(q=A.nD(a,a.r,A.A(a).c);q.n();){s=q.d
r=b.k(0,s)
if(r==null&&!b.ai(s))return!1
if(!J.W(a.k(0,s),r))return!1}return!0},
nZ(a,b,c,d){var s,r,q,p,o=a.gak(a)
if(d==null)if(!o.gag(o)&&o.gt(o) instanceof A.bT){s=t.oI.a(o.gt(o))
s.iG(0,b)
if(c!=null){r=c.a
q=s.e
s.e=r.eN(0,A.c8(q.a,q.b).b,A.c8(r,c.c).b)}}else{r=A.mz(b)
r.e=c
o.p(0,r)}else{p=o.aj(o,d)
if(p>0){r=p-1
q=o.a
if(!(r<q.length))return A.c(q,r)
r=q[r] instanceof A.bT}else r=!1
if(r){r=p-1
q=o.a
if(!(r>=0&&r<q.length))return A.c(q,r)
t.oI.a(q[r]).iG(0,b)}else{r=A.mz(b)
r.e=c
o.bF(0,p,r)}}},
fo:function fo(a){this.a=a},
kA:function kA(a,b,c){var _=this
_.a=a
_.b=$
_.c=b
_.d=c
_.f=_.e=null
_.r=!1},
n7(a,b,c,d){var s
if(c==null)c=a.length
if(c<b)c=b
s=a.length
return B.a.b7(a,b,c>s?s:c)},
mV(a){var s,r
for(s=a.length,r=0;r<s;++r)if(!A.n2(B.b.E(a,r)))return!1
return!0},
pa(a,b){var s,r=a.length
if(r===b)return a
b-=r
for(s=0,r="";s<b;++s)r+="0"
r+=a
return r.charCodeAt(0)==0?r:r},
tv(a,b){var s={}
s.a=a
if(b==null)return a
b.bb(0,new A.lV(s))
return s.a},
o:function o(a,b,c){this.a=a
this.b=b
this.$ti=c},
lV:function lV(a){this.a=a},
bV(a,b){var s=new A.hQ(1,A.tR(),0,a)
s.f=s.bK()
s.x=b
s.op()
return s},
br:function br(){},
fw:function fw(a,b,c,d,e){var _=this
_.x=a
_.z=_.y=$
_.a=b
_.b=c
_.c=d
_.f=$
_.r=e
_.w=$},
hQ:function hQ(a,b,c,d){var _=this
_.y=_.x=$
_.as=null
_.a=a
_.b=b
_.c=c
_.f=$
_.r=d
_.w=$},
iZ:function iZ(a){var _=this
_.c=14.222222222222221
_.d=8
_.f=a
_.r=$},
j_:function j_(){},
j0:function j0(){},
dF:function dF(){},
fn:function fn(){},
iI:function iI(a){this.a=a},
iJ:function iJ(a){this.a=a},
iK:function iK(a){this.a=a},
fF:function fF(a,b,c,d,e,f,g,h){var _=this
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
mv(a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=null,a3=a8.aK,a4=a8.e1,a5=A.j(a8.jb,!0,t.W),a6=a8.o4,a7=a8.fF
if(a7!=null){s=A.w(a7)
s=A.j(new A.I(a7,s.h("ao(1)").a(new A.k9()),s.h("I<1,ao>")),!0,t.F)
a7=s}else a7=a2
s=a8.d2
if(s!=null){r=A.w(s)
r=A.j(new A.I(s,r.h("ao(1)").a(new A.ka()),r.h("I<1,ao>")),!0,t.F)
s=r}else s=a2
r=a8.a6
q=a8.ad
A.aN(a2,0,B.c,a2,0)
p=a8.fx
o=a8.fy
n=A.bU(a8.go)
m=a8.id
m=m==null?a2:A.aB(m)
l=a8.k1
l=l==null?a2:A.aB(l)
k=a8.ax
k=k==null?a2:J.v(k,new A.a5(),t.G)
if(k==null)k=A.a([],t.O)
j=t.G
k=A.j(k,!0,j)
i=a8.ay
i=i==null?a2:J.v(i,new A.a6(),j)
i=A.j(i==null?A.a([],t.O):i,!0,j)
h=a8.ch
h=h==null?a2:J.v(h,new A.a7(),j)
j=A.j(h==null?A.a([],t.O):h,!0,j)
h=a8.w
g=a8.x
f=a8.a
f===$&&A.b("color")
f=f.u()
e=a8.b
e===$&&A.b("name")
a8.c===$&&A.b("target")
d=A.a([],t.r)
c=a8.d
c===$&&A.b("submobjects")
b=c.length
a=0
for(;a<c.length;c.length===b||(0,A.f)(c),++a)d.push(c[a].u())
c=a8.f
c===$&&A.b("updatingSuspended")
b=A.a([],t.l)
a0=a8.r
a0===$&&A.b("points")
a0=J.F(a0)
for(;a0.n();){a1=a0.gq()
b.push(new A.e(a1.a,a1.b,a1.c))}return new A.dg(a8.bX,a3,a8.e0,a8.b4,a8.ba,a8.ja,a4,a5,!1,a8.o1,a8.jc,a8.o2,a8.o3,new A.e(a6.a,a6.b,a6.c),a8.o5,a8.jd,a8.o6,a8.o7,a8.o8,a8.o9,a7,s,a8.y2,a8.a7,r,q,p,new A.e(o.a,o.b,o.c),n,m,l,h,g,a8.y,a8.z,!1,a8.as,a8.at,k,i,j,f,e,a2,d,c,b)},
pQ(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a.dW,e=A.dO(a.dX),d=A.dO(a.dY),c=A.dO(a.dZ),b=a.ax
b=b==null?g:J.v(b,new A.a5(),t.G)
if(b==null)b=A.a([],t.O)
s=t.G
b=A.j(b,!0,s)
r=a.ay
r=r==null?g:J.v(r,new A.a6(),s)
r=A.j(r==null?A.a([],t.O):r,!0,s)
q=a.ch
q=q==null?g:J.v(q,new A.a7(),s)
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
for(;j<l.length;l.length===k||(0,A.f)(l),++j)m.push(l[j].u())
l=a.f
l===$&&A.b("updatingSuspended")
k=A.a([],t.l)
i=a.r
i===$&&A.b("points")
i=J.F(i)
for(;i.n();){h=i.gq()
k.push(new A.e(h.a,h.b,h.c))}f=new A.dN(new A.e(f.a,f.b,f.c),e,d,c,a.to,a.x1,a.x2,a.xr,q,p,a.y,a.z,!1,a.as,a.at,b,r,s,o,n,g,m,l,k)
f.hA(a)
return f},
kb(a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=B.D.bH(B.P),a1=B.n.bH(B.n),a2=B.a5.bH(B.O),a3=t.b1,a4=A.a([],a3),a5=a6.fD
a5===$&&A.b("backgroundLines")
s=a5.length
r=0
for(;r<a5.length;a5.length===s||(0,A.f)(a5),++r)a4.push(a5[r].u())
a3=A.a([],a3)
a5=a6.fE
a5===$&&A.b("fadedLines")
s=a5.length
r=0
for(;r<a5.length;a5.length===s||(0,A.f)(a5),++r)a3.push(a5[r].u())
a5=a6.e2
a5=a5==null?a:A.o4(a5)
s=A.o4(a6.fG)
q=a6.dW
p=A.dO(a6.dX)
o=A.dO(a6.dY)
n=A.dO(a6.dZ)
m=a6.ax
m=m==null?a:J.v(m,new A.a5(),t.G)
if(m==null)m=A.a([],t.O)
l=t.G
m=A.j(m,!0,l)
k=a6.ay
k=k==null?a:J.v(k,new A.a6(),l)
k=A.j(k==null?A.a([],t.O):k,!0,l)
j=a6.ch
j=j==null?a:J.v(j,new A.a7(),l)
l=A.j(j==null?A.a([],t.O):j,!0,l)
j=a6.w
i=a6.x
h=a6.a
h===$&&A.b("color")
h=h.u()
g=a6.b
g===$&&A.b("name")
a6.c===$&&A.b("target")
f=A.a([],t.r)
e=a6.d
e===$&&A.b("submobjects")
d=e.length
r=0
for(;r<e.length;e.length===d||(0,A.f)(e),++r)f.push(e[r].u())
e=a6.f
e===$&&A.b("updatingSuspended")
d=A.a([],t.l)
c=a6.r
c===$&&A.b("points")
c=J.F(c)
for(;c.n();){b=c.gq()
d.push(new A.e(b.a,b.b,b.c))}a0=new A.er(a0,a1,a2,s,a5,a6.je,a6.jf,a6.j9,a4,a3,new A.e(q.a,q.b,q.c),p,o,n,a6.to,a6.x1,a6.x2,a6.xr,j,i,a6.y,a6.z,!1,a6.as,a6.at,m,k,l,h,g,a,f,e,d)
a0.hA(a6)
return a0},
dO(a){return new A.aI(a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.w,a.x,a.y,a.z,a.Q,a.as,a.at,a.ax,a.ay,a.ch,a.CW,a.cx,a.cy)},
dg:function dg(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7){var _=this
_.bX=a
_.aK=b
_.e0=c
_.b4=d
_.ba=e
_.ja=f
_.e1=g
_.jb=h
_.pW=i
_.o1=j
_.jc=k
_.o2=l
_.o3=m
_.o4=n
_.o5=o
_.jd=p
_.o6=q
_.o7=r
_.o8=s
_.o9=a0
_.fF=a1
_.d2=a2
_.y2=a3
_.a7=a4
_.a6=a5
_.ad=a6
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
k9:function k9(){},
ka:function ka(){},
fN:function fN(){},
dN:function dN(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4){var _=this
_.dW=a
_.dX=b
_.dY=c
_.dZ=d
_.e_=_.bD=_.b9=$
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
iX:function iX(){},
er:function er(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
_.d2=a
_.oa=b
_.ob=c
_.fG=d
_.e2=e
_.je=f
_.jf=g
_.j9=h
_.fD=i
_.fE=j
_.dW=k
_.dX=l
_.dY=m
_.dZ=n
_.e_=_.bD=_.b9=$
_.to=o
_.x1=p
_.x2=q
_.xr=r
_.w=s
_.x=a0
_.y=a1
_.z=a2
_.Q=a3
_.as=a4
_.at=a5
_.ax=a6
_.ay=a7
_.ch=a8
_.a=a9
_.b=b0
_.c=b1
_.d=b2
_.e=$
_.f=b3
_.r=b4},
aI:function aI(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0){var _=this
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
aN(a,b,c,d,e){var s=t.O,r=A.a([c],s),q=d!=null?A.a([d],s):A.a([],s)
return new A.eI(r,q,e,a!=null?A.a([a],s):A.a([],s),b)},
bU(a){var s,r,q,p,o=a.a
if(o!=null){s=A.a([],t.O)
for(o=J.F(o);o.n();){r=o.gq()
s.push(new A.P(r.a,r.b,r.c,r.d))}o=s}else o=null
s=a.b
if(s!=null){r=A.a([],t.O)
for(s=J.F(s);s.n();){q=s.gq()
r.push(new A.P(q.a,q.b,q.c,q.d))}s=r}else s=null
r=a.d
if(r!=null){q=A.a([],t.O)
for(r=J.F(r);r.n();){p=r.gq()
q.push(new A.P(p.a,p.b,p.c,p.d))}r=q}else r=null
return new A.eI(o,s,a.c,r,a.e)},
qT(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=null
A.aN(a0,0,B.c,a0,0)
s=a1.fx
r=a1.fy
q=A.bU(a1.go)
p=a1.id
p=p==null?a0:A.aB(p)
o=a1.k1
o=o==null?a0:A.aB(o)
n=a1.ax
n=n==null?a0:J.v(n,new A.a5(),t.G)
if(n==null)n=A.a([],t.O)
m=t.G
n=A.j(n,!0,m)
l=a1.ay
l=l==null?a0:J.v(l,new A.a6(),m)
l=A.j(l==null?A.a([],t.O):l,!0,m)
k=a1.ch
k=k==null?a0:J.v(k,new A.a7(),m)
m=A.j(k==null?A.a([],t.O):k,!0,m)
k=a1.gan()
j=a1.x
i=a1.gdO()
h=a1.a
h===$&&A.b("color")
h=h.u()
g=a1.b
g===$&&A.b("name")
a1.c===$&&A.b("target")
f=A.a([],t.r)
e=a1.d
e===$&&A.b("submobjects")
d=e.length
c=0
for(;c<e.length;e.length===d||(0,A.f)(e),++c)f.push(e[c].u())
e=a1.f
e===$&&A.b("updatingSuspended")
d=A.a([],t.l)
b=a1.r
b===$&&A.b("points")
b=J.F(b)
for(;b.n();){a=b.gq()
d.push(new A.e(a.a,a.b,a.c))}return new A.eJ(s,new A.e(r.a,r.b,r.c),q,p,o,k,j,i,a1.z,!1,a1.as,a1.at,n,l,m,h,g,a0,f,e,d)},
pK(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=null
A.aN(a0,0,B.c,a0,0)
s=a1.fx
r=a1.fy
q=A.bU(a1.go)
p=a1.id
p=p==null?a0:A.aB(p)
o=a1.k1
o=o==null?a0:A.aB(o)
n=a1.ax
n=n==null?a0:J.v(n,new A.a5(),t.G)
if(n==null)n=A.a([],t.O)
m=t.G
n=A.j(n,!0,m)
l=a1.ay
l=l==null?a0:J.v(l,new A.a6(),m)
l=A.j(l==null?A.a([],t.O):l,!0,m)
k=a1.ch
k=k==null?a0:J.v(k,new A.a7(),m)
m=A.j(k==null?A.a([],t.O):k,!0,m)
k=a1.w
j=a1.x
i=a1.gdO()
h=a1.a
h===$&&A.b("color")
h=h.u()
g=a1.b
g===$&&A.b("name")
a1.c===$&&A.b("target")
f=A.a([],t.r)
e=a1.d
e===$&&A.b("submobjects")
d=e.length
c=0
for(;c<e.length;e.length===d||(0,A.f)(e),++c)f.push(e[c].u())
e=a1.f
e===$&&A.b("updatingSuspended")
d=A.a([],t.l)
b=a1.r
b===$&&A.b("points")
b=J.F(b)
for(;b.n();){a=b.gq()
d.push(new A.e(a.a,a.b,a.c))}return new A.dH(a1.y2,a1.a7,a1.a6,a1.ad,a1.bi,s,new A.e(r.a,r.b,r.c),q,p,o,k,j,i,a1.z,!1,a1.as,a1.at,n,l,m,h,g,a0,f,e,d)},
pL(a,b,c){var s=null,r=new A.cz(0,a,1,B.e,9,0.35,B.l,A.aN(s,0,B.c,s,0),s,s,4,0,!1,0.01,!1,0.000001,4,s,s,s,B.c,$,s,$,$,$)
r.ao(B.c,s,s)
r.a9(B.c)
if(a===0)r.eI(A.a([B.N,B.j],t.l))
r.cE(c,b)
return r},
pM(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null
A.aN(a,0,B.c,a,0)
s=a0.fx
r=a0.fy
q=A.bU(a0.go)
p=a0.id
p=p==null?a:A.aB(p)
o=a0.k1
o=o==null?a:A.aB(o)
n=a0.ax
n=n==null?a:J.v(n,new A.a5(),t.G)
if(n==null)n=A.a([],t.O)
m=t.G
n=A.j(n,!0,m)
l=a0.ay
l=l==null?a:J.v(l,new A.a6(),m)
l=A.j(l==null?A.a([],t.O):l,!0,m)
k=a0.ch
k=k==null?a:J.v(k,new A.a7(),m)
m=A.j(k==null?A.a([],t.O):k,!0,m)
k=a0.w
j=a0.x
i=a0.a
i===$&&A.b("color")
i=i.u()
h=a0.b
h===$&&A.b("name")
a0.c===$&&A.b("target")
g=A.a([],t.r)
f=a0.d
f===$&&A.b("submobjects")
e=f.length
d=0
for(;d<f.length;f.length===e||(0,A.f)(f),++d)g.push(f[d].u())
f=a0.f
f===$&&A.b("updatingSuspended")
e=A.a([],t.l)
c=a0.r
c===$&&A.b("points")
c=J.F(c)
for(;c.n();){b=c.gq()
e.push(new A.e(b.a,b.b,b.c))}return new A.cz(a0.y2,a0.a7,a0.a6,a0.ad,a0.bi,s,new A.e(r.a,r.b,r.c),q,p,o,k,j,a0.y,a0.z,!1,a0.as,a0.at,n,l,m,i,h,a,g,f,e)},
nq(a,b,c){var s=null,r=new A.c7(0,6.283185307179586,c,a,9,0.35,B.l,A.aN(s,0,B.c,s,0),s,s,4,0,!1,0.01,!1,0.000001,4,s,s,s,B.c,$,s,$,$,$)
r.ao(B.c,s,s)
r.a9(b)
return r},
pW(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null
A.aN(a,0,B.c,a,0)
s=a0.fx
r=a0.fy
q=A.bU(a0.go)
p=a0.id
p=p==null?a:A.aB(p)
o=a0.k1
o=o==null?a:A.aB(o)
n=a0.ax
n=n==null?a:J.v(n,new A.a5(),t.G)
if(n==null)n=A.a([],t.O)
m=t.G
n=A.j(n,!0,m)
l=a0.ay
l=l==null?a:J.v(l,new A.a6(),m)
l=A.j(l==null?A.a([],t.O):l,!0,m)
k=a0.ch
k=k==null?a:J.v(k,new A.a7(),m)
m=A.j(k==null?A.a([],t.O):k,!0,m)
k=a0.w
j=a0.x
i=a0.a
i===$&&A.b("color")
i=i.u()
h=a0.b
h===$&&A.b("name")
a0.c===$&&A.b("target")
g=A.a([],t.r)
f=a0.d
f===$&&A.b("submobjects")
e=f.length
d=0
for(;d<f.length;f.length===e||(0,A.f)(f),++d)g.push(f[d].u())
f=a0.f
f===$&&A.b("updatingSuspended")
e=A.a([],t.l)
c=a0.r
c===$&&A.b("points")
c=J.F(c)
for(;c.n();){b=c.gq()
e.push(new A.e(b.a,b.b,b.c))}return new A.c7(a0.y2,a0.a7,a0.a6,a0.ad,a0.bi,s,new A.e(r.a,r.b,r.c),q,p,o,k,j,!0,a0.z,!1,a0.as,a0.at,n,l,m,i,h,a,g,f,e)},
nv(a){var s=null,r=new A.dW(0,6.283185307179586,0.08,a,9,0.35,B.l,A.aN(s,0,B.c,s,0),s,s,4,0,!1,0.01,!1,0.000001,4,s,s,s,B.c,$,s,$,$,$)
r.ao(B.c,s,s)
r.a9(B.c)
return r},
fQ(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null
A.aN(a,0,B.c,a,0)
s=a0.fx
r=a0.fy
q=A.bU(a0.go)
p=a0.id
p=p==null?a:A.aB(p)
o=a0.k1
o=o==null?a:A.aB(o)
n=a0.ax
n=n==null?a:J.v(n,new A.a5(),t.G)
if(n==null)n=A.a([],t.O)
m=t.G
n=A.j(n,!0,m)
l=a0.ay
l=l==null?a:J.v(l,new A.a6(),m)
l=A.j(l==null?A.a([],t.O):l,!0,m)
k=a0.ch
k=k==null?a:J.v(k,new A.a7(),m)
m=A.j(k==null?A.a([],t.O):k,!0,m)
k=a0.w
j=a0.x
i=a0.a
i===$&&A.b("color")
i=i.u()
h=a0.b
h===$&&A.b("name")
a0.c===$&&A.b("target")
g=A.a([],t.r)
f=a0.d
f===$&&A.b("submobjects")
e=f.length
d=0
for(;d<f.length;f.length===e||(0,A.f)(f),++d)g.push(f[d].u())
f=a0.f
f===$&&A.b("updatingSuspended")
e=A.a([],t.l)
c=a0.r
c===$&&A.b("points")
c=J.F(c)
for(;c.n();){b=c.gq()
e.push(new A.e(b.a,b.b,b.c))}return new A.dW(a0.y2,a0.a7,a0.a6,a0.ad,a0.bi,s,new A.e(r.a,r.b,r.c),q,p,o,k,j,!0,a0.z,!1,a0.as,a0.at,n,l,m,i,h,a,g,f,e)},
q2(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null
A.aN(a,0,B.c,a,0)
s=a0.fx
r=a0.fy
q=A.bU(a0.go)
p=a0.id
p=p==null?a:A.aB(p)
o=a0.k1
o=o==null?a:A.aB(o)
n=a0.ax
n=n==null?a:J.v(n,new A.a5(),t.G)
if(n==null)n=A.a([],t.O)
m=t.G
n=A.j(n,!0,m)
l=a0.ay
l=l==null?a:J.v(l,new A.a6(),m)
l=A.j(l==null?A.a([],t.O):l,!0,m)
k=a0.ch
k=k==null?a:J.v(k,new A.a7(),m)
m=A.j(k==null?A.a([],t.O):k,!0,m)
k=a0.w
j=a0.x
i=a0.a
i===$&&A.b("color")
i=i.u()
h=a0.b
h===$&&A.b("name")
a0.c===$&&A.b("target")
g=A.a([],t.r)
f=a0.d
f===$&&A.b("submobjects")
e=f.length
d=0
for(;d<f.length;f.length===e||(0,A.f)(f),++d)g.push(f[d].u())
f=a0.f
f===$&&A.b("updatingSuspended")
e=A.a([],t.l)
c=a0.r
c===$&&A.b("points")
c=J.F(c)
for(;c.n();){b=c.gq()
e.push(new A.e(b.a,b.b,b.c))}return new A.dZ(a0.y2,a0.a7,a0.a6,a0.ad,a0.bi,s,new A.e(r.a,r.b,r.c),q,p,o,k,j,!0,a0.z,!1,a0.as,a0.at,n,l,m,i,h,a,g,f,e)},
jN(a,b,c,d,e){var s=null,r=new A.ao(a,d,e,c,0.35,B.l,A.aN(s,0,B.c,s,0),s,s,4,0,!1,0.01,!1,0.000001,4,s,s,s,B.c,$,s,$,$,$)
r.ao(B.c,s,s)
r.a9(b)
return r},
nC(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=a2.a6,a1=a2.ad
A.aN(a,0,B.c,a,0)
s=a2.fx
r=a2.fy
q=A.bU(a2.go)
p=a2.id
p=p==null?a:A.aB(p)
o=a2.k1
o=o==null?a:A.aB(o)
n=a2.ax
n=n==null?a:J.v(n,new A.a5(),t.G)
if(n==null)n=A.a([],t.O)
m=t.G
n=A.j(n,!0,m)
l=a2.ay
l=l==null?a:J.v(l,new A.a6(),m)
l=A.j(l==null?A.a([],t.O):l,!0,m)
k=a2.ch
k=k==null?a:J.v(k,new A.a7(),m)
m=A.j(k==null?A.a([],t.O):k,!0,m)
k=a2.gan()
j=a2.x
i=a2.a
i===$&&A.b("color")
i=i.u()
h=a2.b
h===$&&A.b("name")
a2.c===$&&A.b("target")
g=A.a([],t.r)
f=a2.d
f===$&&A.b("submobjects")
e=f.length
d=0
for(;d<f.length;f.length===e||(0,A.f)(f),++d)g.push(f[d].u())
f=a2.f
f===$&&A.b("updatingSuspended")
e=A.a([],t.l)
c=a2.r
c===$&&A.b("points")
c=J.F(c)
for(;c.n();){b=c.gq()
e.push(new A.e(b.a,b.b,b.c))}return new A.ao(a2.y2,a2.a7,a0,a1,s,new A.e(r.a,r.b,r.c),q,p,o,k,j,a2.y,a2.z,!1,a2.as,a2.at,n,l,m,i,h,a,g,f,e)},
bD(a,b,c){var s=null,r=new A.dJ(0.25,5,!0,$,a,s,c,b,0.35,B.l,A.aN(s,0,B.c,s,0),s,s,4,0,!1,0.01,!1,0.000001,4,s,s,s,B.c,$,s,$,$,$)
r.ao(B.c,s,s)
r.a9(B.c)
r.ba=r.b4
r.f9(B.a3)
r.hk()
return r},
pN(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=null,a2=a3.ba
a2===$&&A.b("initialStrokeWidth")
s=a3.a6
r=a3.ad
A.aN(a1,0,B.c,a1,0)
q=a3.fx
p=a3.fy
o=A.bU(a3.go)
n=a3.id
n=n==null?a1:A.aB(n)
m=a3.k1
m=m==null?a1:A.aB(m)
l=a3.ax
l=l==null?a1:J.v(l,new A.a5(),t.G)
if(l==null)l=A.a([],t.O)
k=t.G
l=A.j(l,!0,k)
j=a3.ay
j=j==null?a1:J.v(j,new A.a6(),k)
j=A.j(j==null?A.a([],t.O):j,!0,k)
i=a3.ch
i=i==null?a1:J.v(i,new A.a7(),k)
k=A.j(i==null?A.a([],t.O):i,!0,k)
i=a3.b4
h=a3.x
g=a3.a
g===$&&A.b("color")
g=g.u()
f=a3.b
f===$&&A.b("name")
a3.c===$&&A.b("target")
e=A.a([],t.r)
d=a3.d
d===$&&A.b("submobjects")
c=d.length
b=0
for(;b<d.length;d.length===c||(0,A.f)(d),++b)e.push(d[b].u())
d=a3.f
d===$&&A.b("updatingSuspended")
c=A.a([],t.l)
a=a3.r
a===$&&A.b("points")
a=J.F(a)
for(;a.n();){a0=a.gq()
c.push(new A.e(a0.a,a0.b,a0.c))}return new A.dJ(a3.bX,a3.aK,!0,a2,a3.y2,a3.a7,s,r,q,new A.e(p.a,p.b,p.c),o,n,m,i,h,a3.y,a3.z,!1,a3.as,a3.at,l,j,k,g,f,a1,e,d,c)},
qr(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a.ax
f=f==null?g:J.v(f,new A.a5(),t.G)
if(f==null)f=A.a([],t.O)
s=t.G
f=A.j(f,!0,s)
r=a.ay
r=r==null?g:J.v(r,new A.a6(),s)
r=A.j(r==null?A.a([],t.O):r,!0,s)
q=a.ch
q=q==null?g:J.v(q,new A.a7(),s)
s=A.j(q==null?A.a([],t.O):q,!0,s)
q=a.gan()
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
for(;j<l.length;l.length===k||(0,A.f)(l),++j)m.push(l[j].u())
l=a.f
l===$&&A.b("updatingSuspended")
k=A.a([],t.l)
i=a.r
i===$&&A.b("points")
i=J.F(i)
for(;i.n();){h=i.gq()
k.push(new A.e(h.a,h.b,h.c))}return new A.es(q,p,a.y,a.z,!1,a.as,a.at,f,r,s,o,n,g,m,l,k)},
qB(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a.ax
f=f==null?g:J.v(f,new A.a5(),t.G)
if(f==null)f=A.a([],t.O)
s=t.G
f=A.j(f,!0,s)
r=a.ay
r=r==null?g:J.v(r,new A.a6(),s)
r=A.j(r==null?A.a([],t.O):r,!0,s)
q=a.ch
q=q==null?g:J.v(q,new A.a7(),s)
s=A.j(q==null?A.a([],t.O):q,!0,s)
q=a.gan()
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
for(;j<l.length;l.length===k||(0,A.f)(l),++j)m.push(l[j].u())
l=a.f
l===$&&A.b("updatingSuspended")
k=A.a([],t.l)
i=a.r
i===$&&A.b("points")
i=J.F(i)
for(;i.n();){h=i.gq()
k.push(new A.e(h.a,h.b,h.c))}return new A.eu(q,p,a.y,a.z,!1,a.as,a.at,f,r,s,o,n,g,m,l,k)},
qV(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a.ax
f=f==null?g:J.v(f,new A.a5(),t.G)
if(f==null)f=A.a([],t.O)
s=t.G
f=A.j(f,!0,s)
r=a.ay
r=r==null?g:J.v(r,new A.a6(),s)
r=A.j(r==null?A.a([],t.O):r,!0,s)
q=a.ch
q=q==null?g:J.v(q,new A.a7(),s)
s=A.j(q==null?A.a([],t.O):q,!0,s)
q=a.gan()
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
for(;j<l.length;l.length===k||(0,A.f)(l),++j)m.push(l[j].u())
l=a.f
l===$&&A.b("updatingSuspended")
k=A.a([],t.l)
i=a.r
i===$&&A.b("points")
i=J.F(i)
for(;i.n();){h=i.gq()
k.push(new A.e(h.a,h.b,h.c))}return new A.eK(q,p,a.y,a.z,!1,a.as,a.at,f,r,s,o,n,g,m,l,k)},
aB(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a.ax
f=f==null?g:J.v(f,new A.a5(),t.G)
if(f==null)f=A.a([],t.O)
s=t.G
f=A.j(f,!0,s)
r=a.ay
r=r==null?g:J.v(r,new A.a6(),s)
r=A.j(r==null?A.a([],t.O):r,!0,s)
q=a.ch
q=q==null?g:J.v(q,new A.a7(),s)
s=A.j(q==null?A.a([],t.O):q,!0,s)
q=a.b4
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
for(;j<l.length;l.length===k||(0,A.f)(l),++j)m.push(l[j].u())
l=a.f
l===$&&A.b("updatingSuspended")
k=A.a([],t.l)
i=a.r
i===$&&A.b("points")
i=J.F(i)
for(;i.n();){h=i.gq()
k.push(new A.e(h.a,h.b,h.c))}return new A.dK(q,p,a.y,a.z,!1,a.as,a.at,f,r,s,o,n,g,m,l,k)},
qz(a,b,c){var s=null,r=A.a([B.p,B.aD,B.M,B.aF],t.l),q=new A.dl(4,0,!1,0.01,!1,0.000001,4,s,s,s,a,$,s,$,$,$)
q.ao(a,s,s)
q.eP(r,a)
q.hC(a,b,c)
return q},
qA(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a.ax
f=f==null?g:J.v(f,new A.a5(),t.G)
if(f==null)f=A.a([],t.O)
s=t.G
f=A.j(f,!0,s)
r=a.ay
r=r==null?g:J.v(r,new A.a6(),s)
r=A.j(r==null?A.a([],t.O):r,!0,s)
q=a.ch
q=q==null?g:J.v(q,new A.a7(),s)
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
for(;j<l.length;l.length===k||(0,A.f)(l),++j)m.push(l[j].u())
l=a.f
l===$&&A.b("updatingSuspended")
k=A.a([],t.l)
i=a.r
i===$&&A.b("points")
i=J.F(i)
for(;i.n();){h=i.gq()
k.push(new A.e(h.a,h.b,h.c))}return new A.dl(q,p,a.y,a.z,!1,a.as,a.at,f,r,s,o,n,g,m,l,k)},
qC(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a.ax
f=f==null?g:J.v(f,new A.a5(),t.G)
if(f==null)f=A.a([],t.O)
s=t.G
f=A.j(f,!0,s)
r=a.ay
r=r==null?g:J.v(r,new A.a6(),s)
r=A.j(r==null?A.a([],t.O):r,!0,s)
q=a.ch
q=q==null?g:J.v(q,new A.a7(),s)
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
for(;j<l.length;l.length===k||(0,A.f)(l),++j)m.push(l[j].u())
l=a.f
l===$&&A.b("updatingSuspended")
k=A.a([],t.l)
i=a.r
i===$&&A.b("points")
i=J.F(i)
for(;i.n();){h=i.gq()
k.push(new A.e(h.a,h.b,h.c))}return new A.ev(q,p,a.y,a.z,!1,a.as,a.at,f,r,s,o,n,g,m,l,k)},
eI:function eI(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hO:function hO(a){this.b=a},
eJ:function eJ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1){var _=this
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
dH:function dH(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6){var _=this
_.y2=a
_.a7=b
_.a6=c
_.ad=d
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
cz:function cz(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6){var _=this
_.y2=a
_.a7=b
_.a6=c
_.ad=d
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
c7:function c7(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6){var _=this
_.y2=a
_.a7=b
_.a6=c
_.ad=d
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
dW:function dW(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6){var _=this
_.y2=a
_.a7=b
_.a6=c
_.ad=d
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
dZ:function dZ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6){var _=this
_.y2=a
_.a7=b
_.a6=c
_.ad=d
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
ao:function ao(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5){var _=this
_.y2=a
_.a7=b
_.a6=c
_.ad=d
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
dJ:function dJ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9){var _=this
_.bX=a
_.aK=b
_.e0=c
_.b4=6
_.ba=d
_.y2=e
_.a7=f
_.a6=g
_.ad=h
_.fx=i
_.fy=j
_.go=k
_.id=l
_.k1=m
_.w=n
_.x=o
_.y=p
_.z=q
_.Q=r
_.as=s
_.at=a0
_.ax=a1
_.ay=a2
_.ch=a3
_.a=a4
_.b=a5
_.c=a6
_.d=a7
_.e=$
_.f=a8
_.r=a9},
es:function es(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
eu:function eu(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
eK:function eK(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
dK:function dK(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.b4=0
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
dl:function dl(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ev:function ev(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
qE(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a.id,e=a.gbj(a),d=a.go,c=a.ax
c=c==null?g:J.v(c,new A.a5(),t.G)
if(c==null)c=A.a([],t.O)
s=t.G
c=A.j(c,!0,s)
r=a.ay
r=r==null?g:J.v(r,new A.a6(),s)
r=A.j(r==null?A.a([],t.O):r,!0,s)
q=a.ch
q=q==null?g:J.v(q,new A.a7(),s)
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
for(;j<l.length;l.length===k||(0,A.f)(l),++j)m.push(l[j].u())
l=a.f
l===$&&A.b("updatingSuspended")
k=A.a([],t.l)
i=a.r
i===$&&A.b("points")
i=J.F(i)
for(;i.n();){h=i.gq()
k.push(new A.e(h.a,h.b,h.c))}return new A.cf(!0,e,d,f,!0,A.bh(t.N,t.h),q,p,a.y,a.z,!1,a.as,a.at,c,r,s,o,n,g,m,l,k)},
tZ(a){var s,r,q,p,o
a=A.bp(a,"\n",",")
a=A.bp(a,"-",",-")
a=A.bp(a,"e,-","e-")
s=A.a([],t.n)
for(r=B.b.cj(a,A.au("[ ,]")),q=r.length,p=0;p<r.length;r.length===q||(0,A.f)(r),++p){o=r[p]
if(J.M(o)!==0)s.push(A.bM(o))}return s},
p0(a,b,c){var s,r,q,p,o,n,m,l,k=A.a([],c.h("z<l<0>>"))
for(s=A.K(B.d.aZ(a.length,b),0,1),r=s.length,q=A.w(a),p=q.c,q=q.h("aK<1>"),o=0;o<s.length;s.length===r||(0,A.f)(s),++o){n=s[o]
if(typeof n!=="number")return n.B()
m=A.a0(n*b)
l=new A.aK(a,m,null,q)
l.ck(a,m,null,p)
k.push(l.px(0,b).aA(0))}return k},
pk(a,b,c,d){var s=a*d-b*c<0?-1:1
return s*Math.acos(Math.min(1,Math.max((a*c+b*d)/(Math.sqrt(a*a+b*b)*Math.sqrt(c*c+d*d)),-1)))},
tu(d4,d5,d6,d7,d8,d9,e0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0=d4.a,d1=d4.b,d2=e0.a,d3=e0.b
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
a=A.pk(1,0,q,p)
a0=B.h.a4(A.pk(q,p,(-o-c)/m,(-n-b)/l)/1,360)
if(d9===0&&a0>0)a0-=360
else if(d9===1&&a0<0)a0+=360
a1=[c*s-b*r+(d0+d2)/2,c*r+b*s+(d1+d3)/2,a,a0*0.017453292519943295]
a2=a1[0]
a3=a1[1]
a=a1[2]
a0=a1[3]
k=a0/0.017453292519943295
a4=B.h.fi(Math.abs(k/(B.h.a4(k,90)===0?90:36)))
a5=a0/a4
s=Math.cos(d7)
r=Math.sin(d7)
a6=Math.sin(a5)*(Math.sqrt(4+3*Math.pow(Math.tan(a5/2),2))-1)/3
k=t.l
a7=A.a([],k)
for(j=A.K(a4,0,1),a8=j.length,a9=-d5,b0=a9*s,b1=d6*r,a9*=r,b2=d6*s,b3=a4-1,b4=d5*s,b5=d5*r,b6=d1,b7=d0,b8=a,b9=0;b9<j.length;j.length===a8||(0,A.f)(j),++b9,b6=c8,b7=c9,b8=c1){c0=j[b9]
c1=b8+a5
c2=Math.cos(b8)
c3=Math.sin(b8)
c4=Math.cos(c1)
c5=Math.sin(c1)
c6=a2+b4*c4-b1*c5
c7=a3+b5*c4+b2*c5
if(J.W(c0,b3)){c8=d3
c9=d2}else{c8=c7
c9=c6}B.a.M(a7,A.a([new A.e(b7+a6*(b0*c3-b1*c2),b6+a6*(a9*c3+b2*c2),0),new A.e(c9-a6*(b0*c5-b1*c4),c8-a6*(a9*c5+b2*c4),0),new A.e(c9,c8,0)],k))}return a7},
qF(a){var s=null,r=new A.dm(a,s,4,0,!1,0.01,!1,0.000001,4,s,s,s,B.c,$,s,$,$,$)
r.ao(B.c,s,s)
return r},
qG(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a.ax
f=f==null?g:J.v(f,new A.a5(),t.G)
if(f==null)f=A.a([],t.O)
s=t.G
f=A.j(f,!0,s)
r=a.ay
r=r==null?g:J.v(r,new A.a6(),s)
r=A.j(r==null?A.a([],t.O):r,!0,s)
q=a.ch
q=q==null?g:J.v(q,new A.a7(),s)
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
for(;j<l.length;l.length===k||(0,A.f)(l),++j)m.push(l[j].u())
l=a.f
l===$&&A.b("updatingSuspended")
k=A.a([],t.l)
i=a.r
i===$&&A.b("points")
i=J.F(i)
for(;i.n();){h=i.gq()
k.push(new A.e(h.a,h.b,h.c))}return new A.dm(a.fx,a.fy,q,p,a.y,a.z,!1,a.as,a.at,f,r,s,o,n,g,m,l,k)},
cf:function cf(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2){var _=this
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
kj:function kj(){},
dm:function dm(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
kl:function kl(){},
kk:function kk(){},
ew:function ew(a,b,c){this.a=a
this.b=b
this.c=c},
qS(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a.ax
f=f==null?g:J.v(f,new A.a5(),t.G)
if(f==null)f=A.a([],t.O)
s=t.G
f=A.j(f,!0,s)
r=a.ay
r=r==null?g:J.v(r,new A.a6(),s)
r=A.j(r==null?A.a([],t.O):r,!0,s)
q=a.ch
q=q==null?g:J.v(q,new A.a7(),s)
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
for(;j<l.length;l.length===k||(0,A.f)(l),++j)m.push(l[j].u())
l=a.f
l===$&&A.b("updatingSuspended")
k=A.a([],t.l)
i=a.r
i===$&&A.b("points")
i=J.F(i)
for(;i.n();){h=i.gq()
k.push(new A.e(h.a,h.b,h.c))}return new A.eH(a.fx,a.fy,q,p,a.y,a.z,!1,a.as,a.at,f,r,s,o,n,g,m,l,k)},
qI(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.a7,e=a0.a6,d=a0.id,c=a0.ad,b=a0.go,a=a0.ax
a=a==null?g:J.v(a,new A.a5(),t.G)
if(a==null)a=A.a([],t.O)
s=t.G
a=A.j(a,!0,s)
r=a0.ay
r=r==null?g:J.v(r,new A.a6(),s)
r=A.j(r==null?A.a([],t.O):r,!0,s)
q=a0.ch
q=q==null?g:J.v(q,new A.a7(),s)
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
for(;j<l.length;l.length===k||(0,A.f)(l),++j)m.push(l[j].u())
l=a0.f
l===$&&A.b("updatingSuspended")
k=A.a([],t.l)
i=a0.r
i===$&&A.b("points")
i=J.F(i)
for(;i.n();){h=i.gq()
k.push(new A.e(h.a,h.b,h.c))}return new A.bQ(f,e,!0,c,b,d,!0,A.bh(t.N,t.h),q,p,a0.y,a0.z,!1,a0.as,a0.at,a,r,s,o,n,g,m,l,k)},
qJ(a){var s,r,q,p,o,n,m,l,k,j="(){}[]|.\\"
if(a==="\\over"||a==="\\overline"||a==="\\sqrt"||a==="\\sqrt{"||B.b.bh(a,"_")||B.b.bh(a,"^")||B.b.bh(a,"dot"))a+="{\\quad}"
if(a==="\\substack")a="\\quad"
if(a.length===0)a="\\quad"
if(B.b.Z(a,"\\\\"))a=A.bp(a,"\\\\","\\quad\\\\")
s=t.s
r=A.a([],s)
for(q=t.N,p=A.d_(A.a(a.split("\\left"),s),q),o=p.length,n=0;n<p.length;p.length===o||(0,A.f)(p),++n){m=p[n]
l=J.Y(m)
if(l.gm(m)!==0){l=l.k(m,0)
l=A.cx(j,l,0)}else l=!1
if(l)r.push(m)}k=r.length
r=A.a([],s)
for(s=A.d_(A.a(a.split("\\right"),s),q),q=s.length,n=0;n<s.length;s.length===q||(0,A.f)(s),++n){m=s[n]
p=J.Y(m)
if(p.gm(m)!==0){p=p.k(m,0)
p=A.cx(j,p,0)}else p=!1
if(p)r.push(m)}if(k!==r.length){a=A.bp(a,"\\left","\\big")
a=A.bp(a,"\\right","\\big")}return A.qK(a)},
qK(a){var s=a.split("{").length-1-(a.split("\\{").length-1)+(a.split("\\\\{").length-1),r=a.split("}").length-1-(a.split("\\}").length-1)+(a.split("\\\\}").length-1)
for(;r>s;){a="{"+a;++s}for(;s>r;){a+="}";++r}return a},
nH(a){var s,r=null,q=new A.el(" ",B.v,B.Z,A.a([],t.s),"","align*",!0,2,r,"",!0,A.bh(t.N,t.h),4,0,!1,0.01,!1,0.000001,4,r,r,r,B.c,$,r,$,$,$)
q.ao(B.c,r,r)
s=q.r
s===$&&A.b("points")
if(J.c6(s))q.fN()
q.a=B.c
q.a6="align*"
q.spy(A.qm(a,B.v,B.Z))
q.a7=B.a.aD(q.ba," ")
q.iZ()
q.ni()
q.kU(B.Z)
return q},
ql(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=t.N,e=A.j(a3.e0,!0,f),d=A.j(a3.ba,!0,f),c=a3.a7,b=a3.a6,a=a3.id,a0=a3.ad,a1=a3.go,a2=a3.ax
a2=a2==null?g:J.v(a2,new A.a5(),t.G)
if(a2==null)a2=A.a([],t.O)
s=t.G
a2=A.j(a2,!0,s)
r=a3.ay
r=r==null?g:J.v(r,new A.a6(),s)
r=A.j(r==null?A.a([],t.O):r,!0,s)
q=a3.ch
q=q==null?g:J.v(q,new A.a7(),s)
s=A.j(q==null?A.a([],t.O):q,!0,s)
q=a3.w
p=a3.x
o=a3.a
o===$&&A.b("color")
o=o.u()
n=a3.b
n===$&&A.b("name")
a3.c===$&&A.b("target")
m=A.a([],t.r)
l=a3.d
l===$&&A.b("submobjects")
k=l.length
j=0
for(;j<l.length;l.length===k||(0,A.f)(l),++j)m.push(l[j].u())
l=a3.f
l===$&&A.b("updatingSuspended")
k=A.a([],t.l)
i=a3.r
i===$&&A.b("points")
i=J.F(i)
for(;i.n();){h=i.gq()
k.push(new A.e(h.a,h.b,h.c))}return new A.el(a3.aK,e,a3.b4,d,c,b,!0,a0,a1,a,!0,A.bh(f,t.h),q,p,a3.y,a3.z,!1,a3.as,a3.at,a2,r,s,o,n,g,m,l,k)},
qm(a,b,c){var s,r,q,p,o,n,m,l=A.nV(a,A.au("{{(.*?)}}")),k=t.s,j=A.a([],k)
for(s=A.j(c.gbl(),!0,t.N),B.a.M(s,b),r=s.length,q=0;q<s.length;s.length===r||(0,A.f)(s),++q)j.push("("+A.n6(s[q])+")")
p=B.a.aD(j,"|")
o=A.a([],k)
if(p.length!==0){n=A.au(p)
for(j=l.length,q=0;q<l.length;l.length===j||(0,A.f)(l),++q)B.a.M(o,A.nV(l[q],n))}else o=l
k=A.a([],k)
for(j=o.length,q=0;q<o.length;o.length===j||(0,A.f)(o),++q){m=o[q]
if(J.M(m)!==0)k.push(m)}return k},
eH:function eH(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
bQ:function bQ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4){var _=this
_.a7=a
_.a6=b
_.ad=null
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
el:function el(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8){var _=this
_.aK=a
_.e0=b
_.b4=c
_.ba=d
_.a7=e
_.a6=f
_.ad=null
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
jV:function jV(a,b){this.a=a
this.b=b},
nw(a){var s=new A.dX($,$,$,!1,a,B.c,$,null,$,$,$)
s.ao(B.c,null,null)
s.hB(a)
return s},
q1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=a.ay
g===$&&A.b("draggedListener")
s=a.ch
s===$&&A.b("pressedListener")
r=a.CW
r===$&&A.b("releasedListener")
q=a.cx
p=a.w.u()
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
for(;j<l.length;l.length===k||(0,A.f)(l),++j)m.push(l[j].u())
l=a.f
l===$&&A.b("updatingSuspended")
k=A.a([],t.l)
i=a.r
i===$&&A.b("points")
i=J.F(i)
for(;i.n();){h=i.gq()
k.push(new A.e(h.a,h.b,h.c))}return new A.dX(g,s,r,q,p,o,n,null,m,l,k)},
pT(a,b){var s=new A.dQ($,$,a,B.c,$,null,$,$,$)
s.ao(B.c,null,null)
s.hB(a)
s.lI(a,b)
return s},
pU(a){var s,r,q,p,o,n,m,l,k,j,i=a.ch
i===$&&A.b("onClick")
s=a.ay
s===$&&A.b("releasedListener")
r=a.w.u()
q=a.a
q===$&&A.b("color")
q=q.u()
p=a.b
p===$&&A.b("name")
a.c===$&&A.b("target")
o=A.a([],t.r)
n=a.d
n===$&&A.b("submobjects")
m=n.length
l=0
for(;l<n.length;n.length===m||(0,A.f)(n),++l)o.push(n[l].u())
n=a.f
n===$&&A.b("updatingSuspended")
m=A.a([],t.l)
k=a.r
k===$&&A.b("points")
k=J.F(k)
for(;k.n();){j=k.gq()
m.push(new A.e(j.a,j.b,j.c))}return new A.dQ(s,i,r,q,p,null,o,n,m)},
h6:function h6(){},
dX:function dX(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
j8:function j8(a){this.a=a},
j9:function j9(a){this.a=a},
ja:function ja(a){this.a=a},
dQ:function dQ(a,b,c,d,e,f,g,h,i){var _=this
_.ay=a
_.ch=b
_.w=c
_.a=d
_.b=e
_.c=f
_.d=g
_.e=$
_.f=h
_.r=i},
iY:function iY(a){this.a=a},
qn(a){var s,r,q,p,o,n,m,l=a.a
l===$&&A.b("color")
l=l.u()
s=a.b
s===$&&A.b("name")
a.c===$&&A.b("target")
r=A.a([],t.r)
q=a.d
q===$&&A.b("submobjects")
p=q.length
o=0
for(;o<q.length;q.length===p||(0,A.f)(q),++o)r.push(q[o].u())
q=a.f
q===$&&A.b("updatingSuspended")
p=A.a([],t.l)
n=a.r
n===$&&A.b("points")
n=J.F(n)
for(;n.n();){m=n.gq()
p.push(new A.e(m.a,m.b,m.c))}return new A.G(l,s,null,r,q,p)},
nx(a){var s=new A.d6(B.c,$,null,$,$,$)
s.ao(B.c,null,null)
s.aN(t.a.a(a))
return s},
q7(a){var s,r,q,p,o,n,m,l=a.a
l===$&&A.b("color")
l=l.u()
s=a.b
s===$&&A.b("name")
a.c===$&&A.b("target")
r=A.a([],t.r)
q=a.d
q===$&&A.b("submobjects")
p=q.length
o=0
for(;o<q.length;q.length===p||(0,A.f)(q),++o)r.push(q[o].u())
q=a.f
q===$&&A.b("updatingSuspended")
p=A.a([],t.l)
n=a.r
n===$&&A.b("points")
n=J.F(n)
for(;n.n();){m=n.gq()
p.push(new A.e(m.a,m.b,m.c))}return new A.d6(l,s,null,r,q,p)},
G:function G(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=$
_.f=e
_.r=f},
k6:function k6(a){this.a=a},
k5:function k5(a){this.a=a},
k4:function k4(a){this.a=a},
k3:function k3(a){this.a=a},
k7:function k7(a,b){this.a=a
this.b=b},
k_:function k_(a){this.a=a},
k0:function k0(a){this.a=a},
k1:function k1(){},
k2:function k2(a){this.a=a},
d6:function d6(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=$
_.f=e
_.r=f},
r1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.ax
e=e==null?f:J.v(e,new A.a5(),t.G)
if(e==null)e=A.a([],t.O)
s=t.G
e=A.j(e,!0,s)
r=a.ay
r=r==null?f:J.v(r,new A.a6(),s)
r=A.j(r==null?A.a([],t.O):r,!0,s)
q=a.ch
q=q==null?f:J.v(q,new A.a7(),s)
s=A.j(q==null?A.a([],t.O):q,!0,s)
q=a.gan()
p=a.x
o=a.gdO()
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
for(;i<k.length;k.length===j||(0,A.f)(k),++i)l.push(k[i].u())
k=a.f
k===$&&A.b("updatingSuspended")
j=A.a([],t.l)
h=a.r
h===$&&A.b("points")
h=J.F(h)
for(;h.n();){g=h.gq()
j.push(new A.e(g.a,g.b,g.c))}return new A.R(q,p,o,a.z,!1,a.as,a.at,e,r,s,n,m,f,l,k,j)},
o4(a){var s,r,q,p,o=a.a
if(o!=null){s=A.a([],t.O)
for(o=J.F(o);o.n();){r=o.gq()
s.push(new A.P(r.a,r.b,r.c,r.d))}o=s}else o=null
s=a.b
if(s!=null){r=A.a([],t.O)
for(s=J.F(s);s.n();){q=s.gq()
r.push(new A.P(q.a,q.b,q.c,q.d))}s=r}else s=null
r=a.d
if(r!=null){q=A.a([],t.O)
for(r=J.F(r);r.n();){p=r.gq()
q.push(new A.P(p.a,p.b,p.c,p.d))}r=q}else r=null
return new A.cm(o,s,a.c,r,a.e)},
hY(a){var s=null,r=new A.bX(4,0,!1,0.01,!1,0.000001,4,s,s,s,B.c,$,s,$,$,$)
r.ao(B.c,s,s)
r.hE(a)
return r},
r0(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a.ax
f=f==null?g:J.v(f,new A.a5(),t.G)
if(f==null)f=A.a([],t.O)
s=t.G
f=A.j(f,!0,s)
r=a.ay
r=r==null?g:J.v(r,new A.a6(),s)
r=A.j(r==null?A.a([],t.O):r,!0,s)
q=a.ch
q=q==null?g:J.v(q,new A.a7(),s)
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
for(;j<l.length;l.length===k||(0,A.f)(l),++j)m.push(l[j].u())
l=a.f
l===$&&A.b("updatingSuspended")
k=A.a([],t.l)
i=a.r
i===$&&A.b("points")
i=J.F(i)
for(;i.n();){h=i.gq()
k.push(new A.e(h.a,h.b,h.c))}return new A.bX(q,p,a.y,a.z,!1,a.as,a.at,f,r,s,o,n,g,m,l,k)},
o5(a){var s=null,r=new A.eM(0.01,0.01,4,0,!1,0.01,!1,0.000001,4,s,s,s,B.c,$,s,$,$,$)
r.ao(B.c,s,s)
r.saI(t.y.a(A.a([a],t.l)))
return r},
r2(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a.ax
f=f==null?g:J.v(f,new A.a5(),t.G)
if(f==null)f=A.a([],t.O)
s=t.G
f=A.j(f,!0,s)
r=a.ay
r=r==null?g:J.v(r,new A.a6(),s)
r=A.j(r==null?A.a([],t.O):r,!0,s)
q=a.ch
q=q==null?g:J.v(q,new A.a7(),s)
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
for(;j<l.length;l.length===k||(0,A.f)(l),++j)m.push(l[j].u())
l=a.f
l===$&&A.b("updatingSuspended")
k=A.a([],t.l)
i=a.r
i===$&&A.b("points")
i=J.F(i)
for(;i.n();){h=i.gq()
k.push(new A.e(h.a,h.b,h.c))}return new A.eM(a.fx,a.fy,q,p,a.y,a.z,!1,a.as,a.at,f,r,s,o,n,g,m,l,k)},
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
a5:function a5(){},
a6:function a6(){},
a7:function a7(){},
kT:function kT(){},
kU:function kU(){},
kN:function kN(a,b){this.a=a
this.b=b},
kQ:function kQ(a,b){this.a=a
this.b=b},
kP:function kP(a,b){this.a=a
this.b=b},
kJ:function kJ(a,b){this.a=a
this.b=b},
kO:function kO(){},
kM:function kM(a){this.a=a},
kK:function kK(){},
kL:function kL(){},
kS:function kS(){},
kR:function kR(){},
cm:function cm(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
bX:function bX(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
eM:function eM(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
dG:function dG(){},
pV(){return new A.fG($.dE())},
fG:function fG(a){this.e=$
this.b=a
this.d=$},
j1:function j1(){},
hA:function hA(){},
km:function km(a){this.a=a},
K(a,b,c){var s,r=A.a([],t.t)
if(c>0)for(s=b;s<a;s+=c)B.a.p(r,s)
else for(s=b;s>a;s+=c)B.a.p(r,s)
return r},
fj(a,b){var s,r,q,p=J.Y(a)
if(p.gag(a))return A.a([],b.h("z<O<h,0>>"))
s=A.a([],b.h("z<O<h,0>>"))
for(r=t.pc.Y(b).h("O<1,2>"),q=0;q<p.gm(a);++q)B.a.p(s,new A.O(q,p.k(a,q),r))
return s},
ma(a,b){if(a.length===0)return b.a(0)
return B.a.b5(a,new A.mb(b))},
iD(a,b,c){var s,r,q,p,o,n,m,l=A.a([],t.b)
for(s=A.K(a,0,1),r=s.length,q=a-1,p=t.n,o=0;o<s.length;s.length===r||(0,A.f)(s),++o){n=s[o]
if(typeof n!=="number")return n.br()
m=n/q
l.push(A.a([c*(1-m)+b*m],p))}return A.aM(null,l)},
lM(a,b,c){var s,r,q,p,o=A.K(B.h.fi((a-b)/c),0,1),n=A.a([],t.b)
for(s=o.length,r=t.n,q=0;q<o.length;o.length===s||(0,A.f)(o),++q){p=o[q]
if(typeof p!=="number")return p.B()
n.push(A.a([p*c+b],r))}return A.aM(null,n)},
cZ(a,b,c){var s,r,q,p,o,n,m=J.Y(a)
if(m.gag(a))return a
s=m.gm(a)
if(s>b)throw A.d("Trying to stretch an array to a length shorter than its own")
r=A.K(b,0,1)
q=A.w(r)
p=q.h("I<1,t>")
o=new A.I(r,q.h("t(1)").a(new A.m9(b,s)),p)
q=A.a([],c.h("z<0>"))
for(r=new A.L(o,o.gm(o),p.h("L<D.E>")),p=p.h("D.E");r.n();){n=r.d
q.push(m.k(a,B.h.bp(n==null?p.a(n):n)))}return q},
tN(a,b,c,d){var s,r,q,p,o,n,m,l=Math.max(a.length,b.length),k=A.a([],c.h("z<0>"))
for(s=A.K(l,0,1),r=s.length,q=0;q<s.length;s.length===r||(0,A.f)(s),++q){p=s[q]
o=a.length
if(typeof p!=="number")return p.B()
n=B.h.aZ(p*o,l)
if(!(n>=0&&n<o))return A.c(a,n)
k.push(a[n])}s=A.a([],d.h("z<0>"))
for(r=A.K(l,0,1),o=r.length,q=0;q<r.length;r.length===o||(0,A.f)(r),++q){p=r[q]
n=b.length
if(typeof p!=="number")return p.B()
m=B.h.aZ(p*n,l)
if(!(m>=0&&m<n))return A.c(b,m)
s.push(b[m])}return new A.O(k,s,c.h("@<l<0>>").Y(d.h("l<0>")).h("O<1,2>"))},
d_(a,b){var s=A.jR(a,new A.mc(b),b)
return A.j(s,!0,s.$ti.h("i.E"))},
n8(a,b){var s=A.j(a,!0,b)
if(0>=s.length)return A.c(s,-1)
s.pop()
return s},
pl(a,b){var s,r,q,p=A.a([],b.h("z<0>")),o=A.nE(b)
for(s=A.w(a).h("X<1>"),r=new A.X(a,s),r=new A.L(r,r.gm(r),s.h("L<D.E>")),s=s.h("D.E");r.n();){q=r.d
if(q==null)q=s.a(q)
if(!o.F(0,q)){B.a.p(p,q)
o.p(0,q)}}s=b.h("X<0>")
return A.j(new A.X(p,s),!0,s.h("D.E"))},
oO(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=A.a([],c.h("z<l<0>>"))
for(s=A.K(a.length,0,1),r=s.length,q=c.h("z<0>"),p=0;p<s.length;s.length===r||(0,A.f)(s),++p){o=s[p]
n=A.a([],q)
for(m=A.K(b,0,1),l=m.length,k=0;k<m.length;m.length===l||(0,A.f)(m),++k){j=m[k]
if(typeof o!=="number")return o.R()
if(typeof j!=="number")return A.bA(j)
n.push(B.a.k(a,B.h.a4(o+j,a.length)))}i.push(n)}return i},
mb:function mb(a){this.a=a},
m9:function m9(a,b){this.a=a
this.b=b},
mc:function mc(a){this.a=a},
n1(a,b,c){var s,r,q=t.bd
q=A.iC(A.aM(null,J.v(a,new A.m1(),q).aA(0)),A.aM(null,J.v(b,new A.m2(),q).aA(0)),c,t.A).a
q===$&&A.b("values")
s=A.w(q)
r=s.h("I<1,P>")
return A.j(new A.I(q,s.h("P(1)").a(new A.m3()),r),!0,r.h("D.E"))},
iC(a,b,c,d){return d.a(J.me(J.d0(a,1-c),J.d0(b,c)))},
p2(a,b,c,d){return d.a(J.me(J.d0(a,1-c),J.d0(b,c)))},
n0(a,b,c){if(c>=1)return new A.O(b-1,1,t.d7)
if(c<=0)return new A.O(a,0,t.d7)
return new A.O(J.pI(A.iC(a,b,c,t.W)),B.h.a4((b-a)*c,1),t.d7)},
mW(a){return new A.lO(a,a.length-1)},
m7(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(b===1){s=A.a([],t.l)
for(r=A.K(J.M(a.a),0,1),q=r.length,p=0;p<r.length;r.length===q||(0,A.f)(r),++p){if(a.gm(a)===0)A.N(A.an())
s.push(a.k(0,a.gm(a)-1))}return s}s=t.l
r=A.a([],s)
for(q=a.a,o=J.Y(q),n=A.K(o.gm(q),0,1),m=n.length,l=a.$ti,k=l.h("u.E"),l=l.h("aK<u.E>"),p=0;p<n.length;n.length===m||(0,A.f)(n),++p){j=A.a0(n[p])
i=new A.aK(a,j,null,l)
i.ck(a,j,null,k)
r.push(A.mW(i.aA(0)).$1(b))}h=(c-b)/(1-b)
s=A.a([],s)
for(q=A.K(o.gm(q),0,1),o=q.length,n=t.V,m=t.mN,p=0;p<q.length;q.length===o||(0,A.f)(q),++p){g=q[p]
if(typeof g!=="number")return g.R()
l=A.a0(g+1)
A.aF(0,l,r.length)
k=new A.aK(r,0,l,m)
k.ck(r,0,l,n)
s.push(A.mW(k.aA(0)).$1(h))}return s},
m1:function m1(){},
m2:function m2(){},
m3:function m3(){},
lO:function lO(a,b){this.a=a
this.b=b},
lN:function lN(){},
oy(a){var s,r,q,p,o,n,m,l,k,j,i
if(B.b.Z(a,"#"))a=B.b.jM(a,"#","")
s=a.length
if(!B.a.F(A.a([3,4,6,8],t.t),s))throw A.d("Hex string #"+a+" not well formated")
if(s===3||s===4){s=t.s
r=A.a([],s)
for(q=a.split(""),p=q.length,o=0;o<p;++o){n=q[o]
B.a.M(r,A.a([n,n],s))}a=B.a.aD(r,"")}if(a.length===6)a+="ff"
m=new A.lB()
l=B.b.A(a,0,2)
k=B.b.A(a,2,4)
j=B.b.A(a,4,6)
i=B.b.A(a,6,8)
return new A.P(m.$1(l),m.$1(k),m.$1(j),m.$1(i))},
P:function P(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lB:function lB(){},
d3:function d3(a,b){this.a=a
this.b=b},
mu(a){switch(a){case 0:break
case 1:break
case 2:break
default:break}return new A.k8(a)},
bt:function bt(a){this.b=a},
b4:function b4(){},
jc:function jc(){this.a=$},
b5:function b5(a,b,c){this.a=a
this.b=b
this.$ti=c},
hc:function hc(){},
en:function en(a,b,c){this.c=a
this.a=b
this.b=c},
cd:function cd(a,b,c){this.c=a
this.a=b
this.b=c},
ce:function ce(a,b,c){this.c=a
this.a=b
this.b=c},
cc:function cc(a,b,c){this.c=a
this.a=b
this.b=c},
k8:function k8(a){this.a=a},
nV(a,b){var s,r,q,p,o,n,m,l,k,j,i=B.b.cj(a,b),h=b.c5(0,a),g=A.j(h,!0,A.A(h).h("i.E"))
h=i.length
s=g.length
r=A.a([],t.s)
for(h=A.K(h+s,0,1),s=h.length,q=t.N,p=0;p<h.length;h.length===s||(0,A.f)(h),++p){o=h[p]
if(typeof o!=="number")return o.a4()
if(B.h.a4(o,2)===0){n=B.h.aT(o,2)
if(!(n>=0&&n<i.length))return A.c(i,n)
B.a.p(r,i[n])}else{n=B.h.aT(o-1,2)
if(!(n>=0&&n<g.length))return A.c(g,n)
m=g[n]
l=m.hd(A.K(m.ghc()+1,1,1))
k=A.w(l)
j=k.h("ap<1>")
j=A.j2(new A.ap(l,k.h("B(1)").a(new A.kw()),j),j.h("i.E"),q)
B.a.M(r,A.j(j,!0,A.A(j).h("i.E")))}}return r},
kw:function kw(){},
oR(a,b,c){var s,r
if(c){if(!$.iz.ai(a)){s=t.S
$.iz.v(0,a,A.bh(s,s))}if(!$.iz.k(0,a).ai(b)){s=$.iz.k(0,a)
s.toString
s.v(0,b,A.oR(a,b,!1))}s=$.iz.k(0,a).k(0,b)
s.toString
return s}if(a<b)return 0
if(b===0)return 1
s=t.S
r=B.a.e5(A.K(b+1,1,1),1,new A.lP(),s)
return B.d.aZ(B.a.e5(A.K(a-b,a,-1),1,new A.lQ(),s),r)},
iE(a,b,c,d,e){return(a-b)/(c-b)*(e-d)+d},
lP:function lP(){},
lQ:function lQ(){},
aM(a,b){var s,r,q=new A.bs(b)
if(a==null){s=b.length
r=s!==0?J.M(B.a.gap(b)):0
a=new A.O(s,r,t.o)
s=a}else s=a
q.slP(t.o.a(s))
return q},
fy(a,b){var s,r,q,p,o,n,m,l,k=b.b,j=A.a([],t.b)
for(s=A.K(b.a,0,1),r=s.length,q=t.n,p=0;p<s.length;s.length===r||(0,A.f)(s),++p){o=A.a([],q)
for(n=A.K(k,0,1),m=n.length,l=0;l<n.length;n.length===m||(0,A.f)(n),++l)o.push(a)
j.push(o)}return A.aM(b,j)},
iM(a){var s,r,q,p,o=A.a([],t.b)
for(s=J.aP(a),r=s.gH(a),q=t.n;r.n();){p=r.gq()
o.push(A.a([p.a,p.b,p.c],q))}return A.aM(new A.O(s.gm(a),3,t.o),o)},
dI(a){var s,r,q,p,o,n,m,l,k,j,i=A.a([],t.b)
for(s=A.K(a,0,1),r=s.length,q=t.n,p=0;p<s.length;s.length===r||(0,A.f)(s),++p){o=s[p]
n=A.a([],q)
for(m=A.K(a,0,1),l=m.length,k=J.bo(o),j=0;j<m.length;m.length===l||(0,A.f)(m),++j)if(k.V(o,m[j]))n.push(1)
else n.push(0)
i.push(n)}return A.aM(new A.O(a,a,t.o),i)},
tT(a,b){var s=A.pg(a),r=A.u2(b)
return B.a.b5(A.a([r,s,r.kc()],t.fp),new A.m8())},
pg(a){var s=t.n
return A.aM(null,A.a([A.a([Math.cos(a),-Math.sin(a),0],s),A.a([Math.sin(a),Math.cos(a),0],s),A.a([0,0,1],s)],t.b))},
u2(a){var s,r,q,p,o,n
if(a.aY()===0)return A.dI(3)
s=a.br(0,Math.sqrt(a.aY()))
r=Math.acos(s.c)
if(s.a!==0||s.b!==0){q=s.k0(0)
p=q.br(0,Math.sqrt(q.aY()))
o=Math.acos(p.a)
if(p.b<0)o*=-1}else o=0
q=t.n
n=A.aM(null,A.a([A.a([Math.cos(r),0,Math.sin(r)],q),A.a([0,1,0],q),A.a([-Math.sin(r),0,Math.cos(r)],q)],t.b))
return A.pg(o).bm(n)},
tQ(a,b){var s,r,q,p,o=a/2,n=b.br(0,Math.sqrt(b.aY())).B(0,Math.sin(o)),m=A.a([],t.b)
for(s=[n.a,n.b,n.c],r=s.length,q=t.n,p=0;p<r;++p)m.push(A.a([s[p]],q))
m.push(A.a([Math.cos(o)],q))
return A.aM(null,m)},
to(a,b){var s,r,q,p,o,n,m,l,k,j=6.283185307179586/a,i=t.hR,h=A.a([],i)
for(s=A.K(a,0,1),r=s.length,q=0;q<s.length;s.length===r||(0,A.f)(s),++q){p=s[q]
if(typeof p!=="number")return A.bA(p)
o=j*p
h.push(new A.d3(Math.cos(o),Math.sin(o)))}i=A.a([],i)
for(s=h.length,r=b.a,o=b.b,q=0;q<h.length;h.length===s||(0,A.f)(h),++q){n=h[q]
m=n.a
l=n.b
i.push(new A.d3(m*r-l*o,m*o+l*r))}h=A.a([],t.l)
for(s=i.length,q=0;q<i.length;i.length===s||(0,A.f)(i),++q){k=i[q]
h.push(new A.e(k.a,k.b,0))}return h},
bs:function bs(a){this.a=a
this.b=$},
iS:function iS(a){this.a=a},
iT:function iT(a){this.a=a},
iR:function iR(a){this.a=a},
iQ:function iQ(a,b){this.a=a
this.b=b},
iP:function iP(a){this.a=a},
iU:function iU(a){this.a=a},
iO:function iO(){},
iN:function iN(a){this.a=a},
m8:function m8(){},
e:function e(a,b,c){this.a=a
this.b=b
this.c=c},
kW:function kW(a){this.a=a},
kX:function kX(){},
kV:function kV(){},
oG(a){if(t.jJ.b(a))return a
throw A.d(A.mh(a,"uri","Value must be a String or a Uri"))},
oM(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=1;r<s;++r){if(b[r]==null||b[r-1]!=null)continue
for(;s>=1;s=q){q=s-1
if(b[q]!=null)break}p=new A.a2("")
o=""+(a+"(")
p.a=o
n=A.w(b)
m=n.h("aK<1>")
l=new A.aK(b,0,s,m)
l.ck(b,0,s,n.c)
m=o+new A.I(l,m.h("n(D.E)").a(new A.lK()),m.h("I<D.E,n>")).aD(0,", ")
p.a=m
p.a=m+("): part "+(r-1)+" was null, but part "+r+" was not.")
throw A.d(A.a8(p.l(0),null))}},
j4:function j4(a){this.a=a},
j5:function j5(){},
j6:function j6(){},
lK:function lK(){},
cG:function cG(){},
ho(a,b){var s,r,q,p,o,n=b.kh(a)
b.bZ(a)
if(n!=null)a=B.b.au(a,n.length)
s=t.s
r=A.a([],s)
q=A.a([],s)
s=a.length
if(s!==0&&b.bG(B.b.E(a,0))){if(0>=s)return A.c(a,0)
B.a.p(q,a[0])
p=1}else{B.a.p(q,"")
p=0}for(o=p;o<s;++o)if(b.bG(B.b.E(a,o))){B.a.p(r,B.b.A(a,p,o))
B.a.p(q,a[o])
p=o+1}if(p<s){B.a.p(r,B.b.au(a,p))
B.a.p(q,"")}return new A.kc(b,n,r,q)},
kc:function kc(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
nI(a){return new A.hq(a)},
hq:function hq(a){this.a=a},
qR(){var s,r,q,p,o,n,m,l,k=null
if(A.mB().gaR()!=="file")return $.fl()
s=A.mB()
if(!B.b.bh(s.gaQ(s),"/"))return $.fl()
r=A.oq(k,0,0)
q=A.on(k,0,0,!1)
p=A.op(k,0,0,k)
o=A.om(k,0,0)
n=A.mM(k,"")
if(q==null)s=r.length!==0||n!=null||!1
else s=!1
if(s)q=""
s=q==null
m=!s
l=A.oo("a/b",0,3,k,"",m)
if(s&&!B.b.Z(l,"/"))l=A.mO(l,m)
else l=A.bZ(l)
if(A.lu("",r,s&&B.b.Z(l,"//")?"":q,n,l,p,o).fZ()==="a\\b")return $.iF()
return $.pn()},
kx:function kx(){},
ht:function ht(a,b,c){this.d=a
this.e=b
this.f=c},
hV:function hV(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d},
i0:function i0(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d},
qN(a,b){var s=A.a([0],t.t)
s=new A.hE(b,s,new Uint32Array(A.mQ(J.fm(a))))
s.hD(a,b)
return s},
c8(a,b){if(b<0)A.N(A.aE("Offset may not be negative, was "+b+"."))
else if(b>a.c.length)A.N(A.aE("Offset "+b+u.D+a.gm(a)+"."))
return new A.b0(a,b)},
mD(a,b,c){if(c<b)A.N(A.a8("End "+c+" must come after start "+b+".",null))
else if(c>a.c.length)A.N(A.aE("End "+c+u.D+a.gm(a)+"."))
else if(b<0)A.N(A.aE("Start may not be negative, was "+b+"."))
return new A.aq(a,b,c)},
hE:function hE(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
b0:function b0(a,b){this.a=a
this.b=b},
aq:function aq(a,b,c){this.a=a
this.b=b
this.c=c},
q8(a,b){var s=A.q9(A.a([A.r8(a,!0)],t.pg)),r=new A.jz(b).$0(),q=B.d.l(B.a.gt(s).b+1),p=A.qa(s)?0:3,o=A.w(s)
return new A.jf(s,r,null,1+Math.max(q.length,p),new A.I(s,o.h("h(1)").a(new A.jh()),o.h("I<1,h>")).b5(0,B.a6),!A.tH(new A.I(s,o.h("H?(1)").a(new A.ji()),o.h("I<1,H?>"))),new A.a2(""))},
qa(a){var s,r,q
for(s=0;s<a.length-1;){r=a[s];++s
q=a[s]
if(r.b+1!==q.b&&J.W(r.c,q.c))return!1}return!0},
q9(a){var s,r,q,p=A.tB(a,new A.jk(),t.C,t.K)
for(s=p.gjX(p),r=A.A(s),r=r.h("@<1>").Y(r.z[1]),s=new A.cM(J.F(s.a),s.b,r.h("cM<1,2>")),r=r.z[1];s.n();){q=s.a
if(q==null)q=r.a(q)
J.nj(q,new A.jl())}s=p.gdV(p)
r=A.A(s)
q=r.h("e2<i.E,bc>")
return A.j(new A.e2(s,r.h("i<bc>(i.E)").a(new A.jm()),q),!0,q.h("i.E"))},
r8(a,b){var s=new A.lk(a).$0()
return new A.aA(s,!0,null)},
ra(a){var s,r,q,p,o,n,m=a.gX(a)
if(!B.b.F(m,"\r\n"))return a
s=a.gU()
r=s.gaw(s)
for(s=m.length-1,q=0;q<s;++q)if(B.b.E(m,q)===13&&B.b.E(m,q+1)===10)--r
s=a.gS(a)
p=a.ga3()
o=a.gU().gae()
p=A.hF(r,a.gU().gal(),o,p)
o=A.bp(m,"\r\n","\n")
n=a.gaX()
return A.ks(s,p,o,A.bp(n,"\r\n","\n"))},
rb(a){var s,r,q,p,o,n,m
if(!B.b.bh(a.gaX(),"\n"))return a
if(B.b.bh(a.gX(a),"\n\n"))return a
s=B.b.A(a.gaX(),0,a.gaX().length-1)
r=a.gX(a)
q=a.gS(a)
p=a.gU()
if(B.b.bh(a.gX(a),"\n")){o=A.lU(a.gaX(),a.gX(a),a.gS(a).gal())
o.toString
o=o+a.gS(a).gal()+a.gm(a)===a.gaX().length}else o=!1
if(o){r=B.b.A(a.gX(a),0,a.gX(a).length-1)
if(r.length===0)p=q
else{o=a.gU()
o=o.gaw(o)
n=a.ga3()
m=a.gU().gae()
p=A.hF(o-1,A.o9(s),m-1,n)
o=a.gS(a)
o=o.gaw(o)
n=a.gU()
q=o===n.gaw(n)?p:a.gS(a)}}return A.ks(q,p,r,s)},
r9(a){var s,r,q,p,o
if(a.gU().gal()!==0)return a
if(a.gU().gae()===a.gS(a).gae())return a
s=B.b.A(a.gX(a),0,a.gX(a).length-1)
r=a.gS(a)
q=a.gU()
q=q.gaw(q)
p=a.ga3()
o=a.gU().gae()
p=A.hF(q-1,s.length-B.b.fM(s,"\n")-1,o-1,p)
return A.ks(r,p,s,B.b.bh(a.gaX(),"\n")?B.b.A(a.gaX(),0,a.gaX().length-1):a.gaX())},
o9(a){var s=a.length
if(s===0)return 0
else if(B.b.I(a,s-1)===10)return s===1?0:s-B.b.eb(a,"\n",s-2)-1
else return s-B.b.fM(a,"\n")-1},
jf:function jf(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
jz:function jz(a){this.a=a},
jh:function jh(){},
jg:function jg(){},
ji:function ji(){},
jk:function jk(){},
jl:function jl(){},
jm:function jm(){},
jj:function jj(a){this.a=a},
jA:function jA(){},
jn:function jn(a){this.a=a},
ju:function ju(a,b,c){this.a=a
this.b=b
this.c=c},
jv:function jv(a,b){this.a=a
this.b=b},
jw:function jw(a){this.a=a},
jx:function jx(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
js:function js(a,b){this.a=a
this.b=b},
jt:function jt(a,b){this.a=a
this.b=b},
jo:function jo(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jp:function jp(a,b,c){this.a=a
this.b=b
this.c=c},
jq:function jq(a,b,c){this.a=a
this.b=b
this.c=c},
jr:function jr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jy:function jy(a,b,c){this.a=a
this.b=b
this.c=c},
aA:function aA(a,b,c){this.a=a
this.b=b
this.c=c},
lk:function lk(a){this.a=a},
bc:function bc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hF(a,b,c,d){if(a<0)A.N(A.aE("Offset may not be negative, was "+a+"."))
else if(c<0)A.N(A.aE("Line may not be negative, was "+c+"."))
else if(b<0)A.N(A.aE("Column may not be negative, was "+b+"."))
return new A.bx(d,a,c,b)},
bx:function bx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hG:function hG(){},
hH:function hH(){},
eC:function eC(){},
ks(a,b,c,d){var s=new A.bJ(d,a,b,c)
s.lL(a,b,c)
if(!B.b.F(d,c))A.N(A.a8('The context line "'+d+'" must contain "'+c+'".',null))
if(A.lU(d,c,a.gal())==null)A.N(A.a8('The span text "'+c+'" must start at column '+(a.gal()+1)+' in a line within "'+d+'".',null))
return s},
bJ:function bJ(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
O:function O(a,b,c){this.a=a
this.b=b
this.$ti=c},
cS:function cS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
dq:function dq(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
tL(){var s,r,q,p,o,n="align*",m="renderer",l=t.N
$.eA.v(0,n,A.bh(l,l))
$.eA.k(0,n).v(0,"\\hat{\\imath}","<?xml version='1.0' encoding='UTF-8'?>\n<!-- This file was generated by dvisvgm 2.13.4 -->\n<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='4.98132pt' height='6.863061pt' viewBox='169.64163 -6.863061 4.98132 6.863061'>\n<defs>\n<path id='g0-123' d='M2.919054-1.424658C2.919054-1.524284 2.82939-1.524284 2.799502-1.524284C2.699875-1.524284 2.699875-1.494396 2.650062-1.344956C2.470735-.71731 2.141968-.109589 1.633873-.109589C1.464508-.109589 1.39477-.209215 1.39477-.438356C1.39477-.687422 1.454545-.826899 1.683686-1.43462L2.072229-2.480697C2.191781-2.769614 2.191781-2.789539 2.291407-3.058531C2.371108-3.257783 2.420922-3.39726 2.420922-3.58655C2.420922-4.034869 2.102117-4.403487 1.603985-4.403487C.667497-4.403487 .288917-2.958904 .288917-2.86924C.288917-2.769614 .408468-2.769614 .408468-2.769614C.508095-2.769614 .518057-2.789539 .56787-2.948941C.836862-3.88543 1.235367-4.184309 1.574097-4.184309C1.653798-4.184309 1.823163-4.184309 1.823163-3.865504C1.823163-3.656289 1.753425-3.447073 1.713574-3.347447C1.633873-3.088418 1.185554-1.932752 1.026152-1.504359C.926526-1.24533 .797011-.916563 .797011-.707347C.797011-.239103 1.135741 .109589 1.613948 .109589C2.550436 .109589 2.919054-1.334994 2.919054-1.424658Z'/>\n<path id='g1-94' d='M4.004981-5.280199L2.49066-6.894147L.976339-5.280199L1.105853-5.140722L2.49066-6.216687L3.875467-5.140722L4.004981-5.280199Z'/>\n</defs>\n<g id='page1'>\n<use x='169.64163' y='-.000046' xlink:href='#g1-94'/>\n<use x='170.249276' y='0' xlink:href='#g0-123'/>\n</g>\n</svg>")
$.eA.k(0,n).v(0,"\\hat{\\jmath}","<?xml version='1.0' encoding='UTF-8'?>\n<!-- This file was generated by dvisvgm 2.13.4 -->\n<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='5.233882pt' height='8.800243pt' viewBox='169.942565 -6.863061 5.233882 8.800243'>\n<defs>\n<path id='g1-94' d='M4.004981-5.280199L2.49066-6.894147L.976339-5.280199L1.105853-5.140722L2.49066-6.216687L3.875467-5.140722L4.004981-5.280199Z'/>\n<path id='g0-124' d='M3.5467-3.118306C3.596513-3.317559 3.596513-3.457036 3.596513-3.486924C3.596513-4.054795 3.178082-4.403487 2.67995-4.403487C1.653798-4.403487 1.085928-2.948941 1.085928-2.86924C1.085928-2.769614 1.205479-2.769614 1.205479-2.769614C1.285181-2.769614 1.295143-2.779577 1.384807-2.968867C1.723537-3.765878 2.211706-4.184309 2.650062-4.184309C2.789539-4.184309 2.968867-4.154421 2.968867-3.726027C2.968867-3.496887 2.938979-3.387298 2.899128-3.217933L1.96264 .498132C1.783313 1.205479 1.384807 1.823163 .816936 1.823163C.737235 1.823163 .52802 1.8132 .358655 1.733499C.587796 1.673724 .787049 1.454545 .787049 1.205479C.787049 1.046077 .67746 .856787 .408468 .856787C.169365 .856787-.129514 1.066002-.129514 1.424658C-.129514 1.902864 .428394 2.042341 .816936 2.042341C1.574097 2.042341 2.400996 1.444583 2.630137 .52802L3.5467-3.118306Z'/>\n</defs>\n<g id='page1'>\n<use x='170.195127' y='-.000046' xlink:href='#g1-94'/>\n<use x='169.942565' y='0' xlink:href='#g0-124'/>\n</g>\n</svg>")
l=document
s=l.getElementById("canvas-container")
s.toString
r=A.a([],t.dw)
q=A.mu(0)
l=l.createElement("canvas")
t.jQ.a(l)
p=new A.fF(l,s,r,B.e,B.e,q,B.e,B.e)
p.a=A.pV()
s.appendChild(l).toString
o=new A.em()
o.lK()
o.w=p
l=o.id
l===$&&A.b("camera")
p.iM(l)
l=o.id
s=o.w
l.r=s
s.iM(l)
s=l.r
r=s.a
r===$&&A.b(m)
r.ln(s)
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
r.en(l.f)
o.cH()},
em:function em(){var _=this
_.id=_.go=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=_.ch=_.ay=_.ax=_.at=_.as=_.Q=_.y=_.x=$
_.a=0
_.w=_.f=_.d=$},
jW:function jW(a){this.a=a},
jX:function jX(a){this.a=a},
jY:function jY(a){this.a=a},
tP(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
tB(a,b,c,d){var s,r,q,p,o,n=A.bh(d,c.h("l<0>"))
for(s=c.h("z<0>"),r=0;r<1;++r){q=a[r]
p=b.$1(q)
o=n.k(0,p)
if(o==null){o=A.a([],s)
n.v(0,p,o)
p=o}else p=o
J.mf(p,q)}return n},
ny(a,b){return A.qd(a,b,b)},
qd(a,b,c){return A.mU(function(){var s=a,r=b
var q=0,p=1,o,n,m
return function $async$ny(d,e){if(d===1){o=e
q=p}while(true)switch(q){case 0:n=s.length,m=0
case 2:if(!(m<s.length)){q=4
break}q=5
return A.rc(s[m])
case 5:case 3:s.length===n||(0,A.f)(s),++m
q=2
break
case 4:return A.mE()
case 1:return A.mF(o)}}},c)},
jR(a,b,c){return A.qi(a,b,c,c)},
qi(a,b,c,d){return A.mU(function(){var s=a,r=b,q=c
var p=0,o=1,n,m,l,k
return function $async$jR(e,f){if(e===1){n=f
p=o}while(true)switch(p){case 0:m=J.Y(s),l=0
case 2:if(!(l<m.gm(s))){p=4
break}k=m.k(s,l)
p=A.ax(r.$2(l,k))?5:6
break
case 5:p=7
return k
case 7:case 6:case 3:++l
p=2
break
case 4:return A.mE()
case 1:return A.mF(n)}}},d)},
tV(a,b,c){var s,r,q,p,o,n,m=t.y
m.a(a)
m.a(b)
s=A.iC(A.iM(a),A.iM(b),c,t.A)
m=A.a([],t.l)
r=s.a
r===$&&A.b("values")
q=r.length
p=0
for(;p<r.length;r.length===q||(0,A.f)(r),++p){o=r[p]
n=J.Y(o)
m.push(new A.e(n.k(o,0),n.k(o,1),n.k(o,2)))}return m},
p6(a,b,c){return a},
ph(a,b,c){var s=1/(1+Math.exp(5))
return Math.min(1,Math.max((1/(1+Math.exp(-(10*(a-0.5))))-s)/(1-2*s),0))},
oU(){var s,r,q,p,o=null
try{o=A.mB()}catch(s){if(t.mA.b(A.bq(s))){r=$.lF
if(r!=null)return r
throw s}else throw s}if(J.W(o,$.oA)){r=$.lF
r.toString
return r}$.oA=o
if($.n9()==$.fl())r=$.lF=o.jP(".").l(0)
else{q=o.fZ()
p=q.length-1
r=$.lF=p===0?q:B.b.A(q,0,p)}return r},
p3(a){var s
if(!(a>=65&&a<=90))s=a>=97&&a<=122
else s=!0
return s},
p4(a,b){var s=a.length,r=b+2
if(s<r)return!1
if(!A.p3(B.b.I(a,b)))return!1
if(B.b.I(a,b+1)!==58)return!1
if(s===r)return!0
return B.b.I(a,r)===47},
tH(a){var s,r,q,p
if(a.gm(a)===0)return!0
s=a.gap(a)
for(r=A.bb(a,1,null,a.$ti.h("D.E")),q=r.$ti,r=new A.L(r,r.gm(r),q.h("L<D.E>")),q=q.h("D.E");r.n();){p=r.d
if(!J.W(p==null?q.a(p):p,s))return!1}return!0},
tS(a,b,c){var s=B.a.aj(a,null)
if(s<0)throw A.d(A.a8(A.k(a)+" contains no null elements.",null))
B.a.v(a,s,b)},
pf(a,b,c){var s=B.a.aj(a,b)
if(s<0)throw A.d(A.a8(A.k(a)+" contains no elements matching "+b.l(0)+".",null))
B.a.v(a,s,null)},
ts(a,b){var s,r,q,p
for(s=new A.a9(a),r=t.E,s=new A.L(s,s.gm(s),r.h("L<u.E>")),r=r.h("u.E"),q=0;s.n();){p=s.d
if((p==null?r.a(p):p)===b)++q}return q},
lU(a,b,c){var s,r,q
if(b.length===0)for(s=0;!0;){r=B.b.aP(a,"\n",s)
if(r===-1)return a.length-s>=c?s:null
if(r-s>=c)return s
s=r+1}r=B.b.aj(a,b)
for(;r!==-1;){q=r===0?0:B.b.eb(a,"\n",r-1)+1
if(c===r-q)return q
r=B.b.aP(a,b,r+1)}return null}},J={
n3(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iB(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.n_==null){A.tD()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.d(A.hR("Return interceptor for "+A.k(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.ll
if(o==null)o=$.ll=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.tK(a)
if(p!=null)return p
if(typeof a=="function")return B.b5
s=Object.getPrototypeOf(a)
if(s==null)return B.aC
if(s===Object.prototype)return B.aC
if(typeof q=="function"){o=$.ll
if(o==null)o=$.ll=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.a4,enumerable:false,writable:true,configurable:true})
return B.a4}return B.a4},
nz(a,b){if(a<0||a>4294967295)throw A.d(A.a_(a,0,4294967295,"length",null))
return J.nA(new Array(a),b)},
ml(a,b){if(a<0)throw A.d(A.a8("Length must be a non-negative integer: "+a,null))
return A.a(new Array(a),b.h("z<0>"))},
nA(a,b){return J.jK(A.a(a,b.h("z<0>")),b)},
jK(a,b){a.fixed$length=Array
return a},
qe(a,b){var s=t.bP
return J.nf(s.a(a),s.a(b))},
nB(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
qf(a,b){var s,r
for(s=a.length;b<s;){r=B.b.E(a,b)
if(r!==32&&r!==13&&!J.nB(r))break;++b}return b},
qg(a,b){var s,r
for(;b>0;b=s){s=b-1
r=B.b.I(a,s)
if(r!==32&&r!==13&&!J.nB(r))break}return b},
bo(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.da.prototype
return J.eg.prototype}if(typeof a=="string")return J.bF.prototype
if(a==null)return J.ef.prototype
if(typeof a=="boolean")return J.h7.prototype
if(a.constructor==Array)return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bG.prototype
return a}if(a instanceof A.H)return a
return J.iB(a)},
tw(a){if(typeof a=="number")return J.cb.prototype
if(typeof a=="string")return J.bF.prototype
if(a==null)return a
if(a.constructor==Array)return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bG.prototype
return a}if(a instanceof A.H)return a
return J.iB(a)},
Y(a){if(typeof a=="string")return J.bF.prototype
if(a==null)return a
if(a.constructor==Array)return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bG.prototype
return a}if(a instanceof A.H)return a
return J.iB(a)},
aP(a){if(a==null)return a
if(a.constructor==Array)return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bG.prototype
return a}if(a instanceof A.H)return a
return J.iB(a)},
oX(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.da.prototype
return J.eg.prototype}if(a==null)return a
if(!(a instanceof A.H))return J.bK.prototype
return a},
tx(a){if(typeof a=="number")return J.cb.prototype
if(a==null)return a
if(!(a instanceof A.H))return J.bK.prototype
return a},
oY(a){if(typeof a=="number")return J.cb.prototype
if(typeof a=="string")return J.bF.prototype
if(a==null)return a
if(!(a instanceof A.H))return J.bK.prototype
return a},
lW(a){if(typeof a=="string")return J.bF.prototype
if(a==null)return a
if(!(a instanceof A.H))return J.bK.prototype
return a},
oZ(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bG.prototype
return a}if(a instanceof A.H)return a
return J.iB(a)},
ty(a){if(a==null)return a
if(!(a instanceof A.H))return J.bK.prototype
return a},
me(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.tw(a).R(a,b)},
W(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.bo(a).V(a,b)},
d0(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.oY(a).B(a,b)},
Z(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||A.tI(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.Y(a).k(a,b)},
iG(a,b,c){return J.aP(a).v(a,b,c)},
pD(a,b,c,d){return J.oZ(a).m1(a,b,c,d)},
pE(a,b,c,d){return J.oZ(a).mm(a,b,c,d)},
mf(a,b){return J.aP(a).p(a,b)},
am(a,b){return J.aP(a).M(a,b)},
mg(a,b){return J.lW(a).c5(a,b)},
ne(a,b){return J.lW(a).I(a,b)},
nf(a,b){return J.oY(a).aB(a,b)},
iH(a,b){return J.aP(a).af(a,b)},
aG(a){return J.aP(a).gap(a)},
aH(a){return J.bo(a).gW(a)},
cy(a){return J.Y(a).gag(a)},
c6(a){return J.Y(a).gcw(a)},
F(a){return J.aP(a).gH(a)},
aL(a){return J.aP(a).gt(a)},
M(a){return J.Y(a).gm(a)},
pF(a){return J.ty(a).gak(a)},
ng(a){if(typeof a==="number")return a>0?1:a<0?-1:a
return J.oX(a).geM(a)},
nh(a,b,c){return J.aP(a).dm(a,b,c)},
v(a,b,c){return J.aP(a).ec(a,b,c)},
pG(a,b,c){return J.lW(a).jt(a,b,c)},
pH(a,b){return J.Y(a).sm(a,b)},
ni(a,b){return J.aP(a).b6(a,b)},
nj(a,b){return J.aP(a).cM(a,b)},
pI(a){return J.tx(a).bp(a)},
fm(a){return J.aP(a).aA(a)},
bB(a){return J.bo(a).l(a)},
nk(a){return J.lW(a).eq(a)},
pJ(a,b){return J.aP(a).er(a,b)},
ed:function ed(){},
h7:function h7(){},
ef:function ef(){},
b6:function b6(){},
cI:function cI(){},
hs:function hs(){},
bK:function bK(){},
bG:function bG(){},
z:function z(a){this.$ti=a},
jL:function jL(a){this.$ti=a},
az:function az(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cb:function cb(){},
da:function da(){},
eg:function eg(){},
bF:function bF(){}},B={}
var w=[A,J,B]
var $={}
A.mn.prototype={}
J.ed.prototype={
V(a,b){return a===b},
gW(a){return A.bI(a)},
l(a){return"Instance of '"+A.kg(a)+"'"}}
J.h7.prototype={
l(a){return String(a)},
gW(a){return a?519018:218159},
$iB:1}
J.ef.prototype={
V(a,b){return null==b},
l(a){return"null"},
gW(a){return 0},
$iak:1}
J.b6.prototype={}
J.cI.prototype={
gW(a){return 0},
l(a){return String(a)}}
J.hs.prototype={}
J.bK.prototype={}
J.bG.prototype={
l(a){var s=a[$.pm()]
if(s==null)return this.lv(a)
return"JavaScript function for "+J.bB(s)},
$ibO:1}
J.z.prototype={
p(a,b){A.w(a).c.a(b)
if(!!a.fixed$length)A.N(A.T("add"))
a.push(b)},
em(a,b){if(!!a.fixed$length)A.N(A.T("removeAt"))
if(b<0||b>=a.length)throw A.d(A.kh(b,null))
return a.splice(b,1)[0]},
bF(a,b,c){A.w(a).c.a(c)
if(!!a.fixed$length)A.N(A.T("insert"))
if(b<0||b>a.length)throw A.d(A.kh(b,null))
a.splice(b,0,c)},
e8(a,b,c){var s,r
A.w(a).h("i<1>").a(c)
if(!!a.fixed$length)A.N(A.T("insertAll"))
A.nO(b,0,a.length,"index")
if(!t.gt.b(c))c=J.fm(c)
s=J.M(c)
a.length=a.length+s
r=b+s
this.dq(a,r,a.length,a,b)
this.kY(a,b,r,c)},
dd(a){if(!!a.fixed$length)A.N(A.T("removeLast"))
if(a.length===0)throw A.d(A.ct(a,-1))
return a.pop()},
a_(a,b){var s
if(!!a.fixed$length)A.N(A.T("remove"))
for(s=0;s<a.length;++s)if(J.W(a[s],b)){a.splice(s,1)
return!0}return!1},
f5(a,b,c){var s,r,q,p,o
A.w(a).h("B(1)").a(b)
s=[]
r=a.length
for(q=0;q<r;++q){p=a[q]
if(!A.ax(b.$1(p)))s.push(p)
if(a.length!==r)throw A.d(A.as(a))}o=s.length
if(o===r)return
this.sm(a,o)
for(q=0;q<s.length;++q)a[q]=s[q]},
er(a,b){var s=A.w(a)
return new A.ap(a,s.h("B(1)").a(b),s.h("ap<1>"))},
M(a,b){var s
A.w(a).h("i<1>").a(b)
if(!!a.fixed$length)A.N(A.T("addAll"))
if(Array.isArray(b)){this.m0(a,b)
return}for(s=J.F(b);s.n();)a.push(s.gq())},
m0(a,b){var s,r
t.m.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.d(A.as(a))
for(r=0;r<s;++r)a.push(b[r])},
bB(a){if(!!a.fixed$length)A.N(A.T("clear"))
a.length=0},
bb(a,b){var s,r
A.w(a).h("~(1)").a(b)
s=a.length
for(r=0;r<s;++r){b.$1(a[r])
if(a.length!==s)throw A.d(A.as(a))}},
ec(a,b,c){var s=A.w(a)
return new A.I(a,s.Y(c).h("1(2)").a(b),s.h("@<1>").Y(c).h("I<1,2>"))},
aD(a,b){var s,r=A.bH(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.v(r,s,A.k(a[s]))
return r.join(b)},
aU(a){return this.aD(a,"")},
b6(a,b){return A.bb(a,b,null,A.w(a).c)},
b5(a,b){var s,r,q
A.w(a).h("1(1,1)").a(b)
s=a.length
if(s===0)throw A.d(A.an())
if(0>=s)return A.c(a,0)
r=a[0]
for(q=1;q<s;++q){r=b.$2(r,a[q])
if(s!==a.length)throw A.d(A.as(a))}return r},
e5(a,b,c,d){var s,r,q
d.a(b)
A.w(a).Y(d).h("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.d(A.as(a))}return r},
af(a,b){if(!(b>=0&&b<a.length))return A.c(a,b)
return a[b]},
b7(a,b,c){if(b<0||b>a.length)throw A.d(A.a_(b,0,a.length,"start",null))
if(c<b||c>a.length)throw A.d(A.a_(c,b,a.length,"end",null))
if(b===c)return A.a([],A.w(a))
return A.a(a.slice(b,c),A.w(a))},
dm(a,b,c){A.aF(b,c,a.length)
return A.bb(a,b,c,A.w(a).c)},
gap(a){if(a.length>0)return a[0]
throw A.d(A.an())},
gt(a){var s=a.length
if(s>0)return a[s-1]
throw A.d(A.an())},
dq(a,b,c,d,e){var s,r,q,p,o
A.w(a).h("i<1>").a(d)
if(!!a.immutable$list)A.N(A.T("setRange"))
A.aF(b,c,a.length)
s=c-b
if(s===0)return
A.b9(e,"skipCount")
if(t.gs.b(d)){r=d
q=e}else{r=J.ni(d,e).bq(0,!1)
q=0}p=J.Y(r)
if(q+s>p.gm(r))throw A.d(A.qc())
if(q<b)for(o=s-1;o>=0;--o)a[b+o]=p.k(r,q+o)
else for(o=0;o<s;++o)a[b+o]=p.k(r,q+o)},
kY(a,b,c,d){return this.dq(a,b,c,d,0)},
b1(a,b){var s,r
A.w(a).h("B(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(A.ax(b.$1(a[r])))return!0
if(a.length!==s)throw A.d(A.as(a))}return!1},
ct(a,b){var s,r
A.w(a).h("B(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!A.ax(b.$1(a[r])))return!1
if(a.length!==s)throw A.d(A.as(a))}return!0},
cM(a,b){var s,r=A.w(a)
r.h("h(1,1)?").a(b)
if(!!a.immutable$list)A.N(A.T("sort"))
s=b==null?J.rW():b
A.nU(a,s,r.c)},
aP(a,b,c){var s,r=a.length
if(c>=r)return-1
for(s=c;s<r;++s){if(!(s<a.length))return A.c(a,s)
if(J.W(a[s],b))return s}return-1},
aj(a,b){return this.aP(a,b,0)},
F(a,b){var s
for(s=0;s<a.length;++s)if(J.W(a[s],b))return!0
return!1},
gag(a){return a.length===0},
gcw(a){return a.length!==0},
l(a){return A.jI(a,"[","]")},
bq(a,b){var s=A.a(a.slice(0),A.w(a))
return s},
aA(a){return this.bq(a,!0)},
gH(a){return new J.az(a,a.length,A.w(a).h("az<1>"))},
gW(a){return A.bI(a)},
gm(a){return a.length},
sm(a,b){if(!!a.fixed$length)A.N(A.T("set length"))
if(b<0)throw A.d(A.a_(b,0,null,"newLength",null))
if(b>a.length)A.w(a).c.a(null)
a.length=b},
k(a,b){if(!(b>=0&&b<a.length))throw A.d(A.ct(a,b))
return a[b]},
v(a,b,c){A.w(a).c.a(c)
if(!!a.immutable$list)A.N(A.T("indexed set"))
if(!(b>=0&&b<a.length))throw A.d(A.ct(a,b))
a[b]=c},
jj(a,b){var s
A.w(a).h("B(1)").a(b)
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(A.ax(b.$1(a[s])))return s
return-1},
$iQ:1,
$ii:1,
$il:1}
J.jL.prototype={}
J.az.prototype={
gq(){var s=this.d
return s==null?this.$ti.c.a(s):s},
n(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.d(A.f(q))
s=r.c
if(s>=p){r.shS(null)
return!1}r.shS(q[s]);++r.c
return!0},
shS(a){this.d=this.$ti.h("1?").a(a)},
$iU:1}
J.cb.prototype={
aB(a,b){var s
A.lx(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gea(b)
if(this.gea(a)===s)return 0
if(this.gea(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gea(a){return a===0?1/a<0:a<0},
geM(a){var s
if(a>0)s=1
else s=a<0?-1:a
return s},
bp(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.d(A.T(""+a+".toInt()"))},
fi(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.d(A.T(""+a+".ceil()"))},
h_(a,b){var s
if(b>20)throw A.d(A.a_(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gea(a))return"-"+s
return s},
pC(a,b){var s,r,q,p
if(b<2||b>36)throw A.d(A.a_(b,2,36,"radix",null))
s=a.toString(b)
if(B.b.I(s,s.length-1)!==41)return s
r=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(r==null)A.N(A.T("Unexpected toString result: "+s))
q=r.length
if(1>=q)return A.c(r,1)
s=r[1]
if(3>=q)return A.c(r,3)
p=+r[3]
q=r[2]
if(q!=null){s+=q
p-=q.length}return s+B.b.B("0",p)},
l(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gW(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
R(a,b){A.lx(b)
return a+b},
B(a,b){return a*b},
a4(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
aZ(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.il(a,b)},
aT(a,b){return(a|0)===a?a/b|0:this.il(a,b)},
il(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.d(A.T("Result of truncating division is "+A.k(s)+": "+A.k(a)+" ~/ "+b))},
cS(a,b){var s
if(a>0)s=this.ij(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
mp(a,b){if(0>b)throw A.d(A.fh(b))
return this.ij(a,b)},
ij(a,b){return b>31?0:a>>>b},
$iaf:1,
$it:1,
$iae:1}
J.da.prototype={
geM(a){var s
if(a>0)s=1
else s=a<0?-1:a
return s},
$ih:1}
J.eg.prototype={}
J.bF.prototype={
I(a,b){if(b<0)throw A.d(A.ct(a,b))
if(b>=a.length)A.N(A.ct(a,b))
return a.charCodeAt(b)},
E(a,b){if(b>=a.length)throw A.d(A.ct(a,b))
return a.charCodeAt(b)},
fc(a,b,c){var s=b.length
if(c>s)throw A.d(A.a_(c,0,s,null,null))
return new A.iq(b,a,c)},
c5(a,b){return this.fc(a,b,0)},
jt(a,b,c){var s,r,q=null
if(c<0||c>b.length)throw A.d(A.a_(c,0,b.length,q,q))
s=a.length
if(c+s>b.length)return q
for(r=0;r<s;++r)if(this.I(b,c+r)!==this.E(a,r))return q
return new A.dp(c,a)},
R(a,b){return a+b},
bh(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.au(a,r-s)},
jM(a,b,c){A.nO(0,0,a.length,"startIndex")
return A.tY(a,b,c,0)},
cj(a,b){if(typeof b=="string")return A.a(a.split(b),t.s)
else if(b instanceof A.cH&&b.gi7().exec("").length-2===0)return A.a(a.split(b.b),t.s)
else return this.ma(a,b)},
cd(a,b,c,d){var s=A.aF(b,c,a.length)
return A.pi(a,b,s,d)},
ma(a,b){var s,r,q,p,o,n,m=A.a([],t.s)
for(s=J.mg(b,a),s=s.gH(s),r=0,q=1;s.n();){p=s.gq()
o=p.gS(p)
n=p.gU()
q=n-o
if(q===0&&r===o)continue
B.a.p(m,this.A(a,r,o))
r=n}if(r<a.length||q>0)B.a.p(m,this.au(a,r))
return m},
aa(a,b,c){var s
t.oc.a(b)
if(c<0||c>a.length)throw A.d(A.a_(c,0,a.length,null,null))
if(typeof b=="string"){s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)}return J.pG(b,a,c)!=null},
Z(a,b){return this.aa(a,b,0)},
A(a,b,c){return a.substring(b,A.aF(b,c,a.length))},
au(a,b){return this.A(a,b,null)},
eq(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(this.E(p,0)===133){s=J.qf(p,1)
if(s===o)return""}else s=0
r=o-1
q=this.I(p,r)===133?J.qg(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
B(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.d(B.b0)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
oK(a,b){var s=b-a.length
if(s<=0)return a
return a+this.B(" ",s)},
aP(a,b,c){var s
if(c<0||c>a.length)throw A.d(A.a_(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
aj(a,b){return this.aP(a,b,0)},
eb(a,b,c){var s,r
if(c==null)c=a.length
else if(c<0||c>a.length)throw A.d(A.a_(c,0,a.length,null,null))
s=b.length
r=a.length
if(c+s>r)c=r-s
return a.lastIndexOf(b,c)},
fM(a,b){return this.eb(a,b,null)},
nC(a,b,c){var s=a.length
if(c>s)throw A.d(A.a_(c,0,s,null,null))
return A.cx(a,b,c)},
F(a,b){return this.nC(a,b,0)},
aB(a,b){var s
A.aw(b)
if(a===b)s=0
else s=a<b?-1:1
return s},
l(a){return a},
gW(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gm(a){return a.length},
k(a,b){if(!(b>=0&&b<a.length))throw A.d(A.ct(a,b))
return a[b]},
$iaf:1,
$idh:1,
$in:1}
A.co.prototype={
gH(a){var s=A.A(this)
return new A.dS(J.F(this.gbg()),s.h("@<1>").Y(s.z[1]).h("dS<1,2>"))},
gm(a){return J.M(this.gbg())},
gag(a){return J.cy(this.gbg())},
gcw(a){return J.c6(this.gbg())},
b6(a,b){var s=A.A(this)
return A.j2(J.ni(this.gbg(),b),s.c,s.z[1])},
af(a,b){return A.A(this).z[1].a(J.iH(this.gbg(),b))},
gap(a){return A.A(this).z[1].a(J.aG(this.gbg()))},
gt(a){return A.A(this).z[1].a(J.aL(this.gbg()))},
l(a){return J.bB(this.gbg())}}
A.dS.prototype={
n(){return this.a.n()},
gq(){return this.$ti.z[1].a(this.a.gq())},
$iU:1}
A.cB.prototype={
gbg(){return this.a}}
A.eQ.prototype={$iQ:1}
A.eN.prototype={
k(a,b){return this.$ti.z[1].a(J.Z(this.a,b))},
v(a,b,c){var s=this.$ti
J.iG(this.a,b,s.c.a(s.z[1].a(c)))},
sm(a,b){J.pH(this.a,b)},
p(a,b){var s=this.$ti
J.mf(this.a,s.c.a(s.z[1].a(b)))},
M(a,b){var s=this.$ti
J.am(this.a,A.j2(s.h("i<2>").a(b),s.z[1],s.c))},
cM(a,b){var s
this.$ti.h("h(2,2)?").a(b)
s=b==null?null:new A.l2(this,b)
J.nj(this.a,s)},
dm(a,b,c){var s=this.$ti
return A.j2(J.nh(this.a,b,c),s.c,s.z[1])},
$iQ:1,
$il:1}
A.l2.prototype={
$2(a,b){var s=this.a.$ti,r=s.c
r.a(a)
r.a(b)
s=s.z[1]
return this.b.$2(s.a(a),s.a(b))},
$S(){return this.a.$ti.h("h(1,1)")}}
A.aR.prototype={
gbg(){return this.a}}
A.eh.prototype={
l(a){return"LateInitializationError: "+this.a}}
A.a9.prototype={
gm(a){return this.a.length},
k(a,b){return B.b.I(this.a,b)}}
A.m6.prototype={
$0(){var s=new A.ar($.aa,t.av)
s.hM(null)
return s},
$S:72}
A.kr.prototype={}
A.Q.prototype={}
A.D.prototype={
gH(a){var s=this
return new A.L(s,s.gm(s),A.A(s).h("L<D.E>"))},
gag(a){return this.gm(this)===0},
gap(a){if(this.gm(this)===0)throw A.d(A.an())
return this.af(0,0)},
gt(a){var s=this
if(s.gm(s)===0)throw A.d(A.an())
return s.af(0,s.gm(s)-1)},
aD(a,b){var s,r,q,p=this,o=p.gm(p)
if(b.length!==0){if(o===0)return""
s=A.k(p.af(0,0))
if(o!==p.gm(p))throw A.d(A.as(p))
for(r=s,q=1;q<o;++q){r=r+b+A.k(p.af(0,q))
if(o!==p.gm(p))throw A.d(A.as(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.k(p.af(0,q))
if(o!==p.gm(p))throw A.d(A.as(p))}return r.charCodeAt(0)==0?r:r}},
aU(a){return this.aD(a,"")},
b5(a,b){var s,r,q,p=this
A.A(p).h("D.E(D.E,D.E)").a(b)
s=p.gm(p)
if(s===0)throw A.d(A.an())
r=p.af(0,0)
for(q=1;q<s;++q){r=b.$2(r,p.af(0,q))
if(s!==p.gm(p))throw A.d(A.as(p))}return r},
b6(a,b){return A.bb(this,b,null,A.A(this).h("D.E"))},
bq(a,b){return A.j(this,b,A.A(this).h("D.E"))},
aA(a){return this.bq(a,!0)}}
A.aK.prototype={
ck(a,b,c,d){var s,r=this.b
A.b9(r,"start")
s=this.c
if(s!=null){A.b9(s,"end")
if(r>s)throw A.d(A.a_(r,0,s,"start",null))}},
gmb(){var s=J.M(this.a),r=this.c
if(r==null||r>s)return s
return r},
gmu(){var s=J.M(this.a),r=this.b
if(r>s)return s
return r},
gm(a){var s,r=J.M(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
if(typeof s!=="number")return s.K()
return s-q},
af(a,b){var s=this,r=s.gmu()+b
if(b<0||r>=s.gmb())throw A.d(A.h5(b,s,"index",null,null))
return J.iH(s.a,r)},
b6(a,b){var s,r,q=this
A.b9(b,"count")
s=q.b+b
r=q.c
if(r!=null&&s>=r)return new A.e_(q.$ti.h("e_<1>"))
return A.bb(q.a,s,r,q.$ti.c)},
px(a,b){var s,r,q,p=this
A.b9(b,"count")
s=p.c
r=p.b
q=r+b
if(s==null)return A.bb(p.a,r,q,p.$ti.c)
else{if(s<q)return p
return A.bb(p.a,r,q,p.$ti.c)}},
bq(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.Y(n),l=m.gm(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.ml(0,n):J.nz(0,n)}r=A.bH(s,m.af(n,o),b,p.$ti.c)
for(q=1;q<s;++q){B.a.v(r,q,m.af(n,o+q))
if(m.gm(n)<l)throw A.d(A.as(p))}return r},
aA(a){return this.bq(a,!0)}}
A.L.prototype={
gq(){var s=this.d
return s==null?this.$ti.c.a(s):s},
n(){var s,r=this,q=r.a,p=J.Y(q),o=p.gm(q)
if(r.b!==o)throw A.d(A.as(q))
s=r.c
if(s>=o){r.sbQ(null)
return!1}r.sbQ(p.af(q,s));++r.c
return!0},
sbQ(a){this.d=this.$ti.h("1?").a(a)},
$iU:1}
A.cL.prototype={
gH(a){var s=A.A(this)
return new A.cM(J.F(this.a),this.b,s.h("@<1>").Y(s.z[1]).h("cM<1,2>"))},
gm(a){return J.M(this.a)},
gag(a){return J.cy(this.a)},
gap(a){return this.b.$1(J.aG(this.a))},
gt(a){return this.b.$1(J.aL(this.a))},
af(a,b){return this.b.$1(J.iH(this.a,b))}}
A.dY.prototype={$iQ:1}
A.cM.prototype={
n(){var s=this,r=s.b
if(r.n()){s.sbQ(s.c.$1(r.gq()))
return!0}s.sbQ(null)
return!1},
gq(){var s=this.a
return s==null?this.$ti.z[1].a(s):s},
sbQ(a){this.a=this.$ti.h("2?").a(a)}}
A.I.prototype={
gm(a){return J.M(this.a)},
af(a,b){return this.b.$1(J.iH(this.a,b))}}
A.ap.prototype={
gH(a){return new A.cU(J.F(this.a),this.b,this.$ti.h("cU<1>"))}}
A.cU.prototype={
n(){var s,r
for(s=this.a,r=this.b;s.n();)if(A.ax(r.$1(s.gq())))return!0
return!1},
gq(){return this.a.gq()}}
A.e2.prototype={
gH(a){var s=this.$ti
return new A.e3(J.F(this.a),this.b,B.a7,s.h("@<1>").Y(s.z[1]).h("e3<1,2>"))}}
A.e3.prototype={
gq(){var s=this.d
return s==null?this.$ti.z[1].a(s):s},
n(){var s,r,q=this
if(q.c==null)return!1
for(s=q.a,r=q.b;!q.c.n();){q.sbQ(null)
if(s.n()){q.shT(null)
q.shT(J.F(r.$1(s.gq())))}else return!1}q.sbQ(q.c.gq())
return!0},
shT(a){this.c=this.$ti.h("U<2>?").a(a)},
sbQ(a){this.d=this.$ti.h("2?").a(a)},
$iU:1}
A.bR.prototype={
b6(a,b){A.iL(b,"count",t.S)
A.b9(b,"count")
return new A.bR(this.a,this.b+b,A.A(this).h("bR<1>"))},
gH(a){return new A.eB(J.F(this.a),this.b,A.A(this).h("eB<1>"))}}
A.d5.prototype={
gm(a){var s=J.M(this.a)-this.b
if(s>=0)return s
return 0},
b6(a,b){A.iL(b,"count",t.S)
A.b9(b,"count")
return new A.d5(this.a,this.b+b,this.$ti)},
$iQ:1}
A.eB.prototype={
n(){var s,r
for(s=this.a,r=0;r<this.b;++r)s.n()
this.b=0
return s.n()},
gq(){return this.a.gq()}}
A.e_.prototype={
gH(a){return B.a7},
gag(a){return!0},
gm(a){return 0},
gap(a){throw A.d(A.an())},
gt(a){throw A.d(A.an())},
af(a,b){throw A.d(A.a_(b,0,0,"index",null))},
b6(a,b){A.b9(b,"count")
return this}}
A.e0.prototype={
n(){return!1},
gq(){throw A.d(A.an())},
$iU:1}
A.al.prototype={
gH(a){return new A.cV(J.F(this.a),this.$ti.h("cV<1>"))}}
A.cV.prototype={
n(){var s,r
for(s=this.a,r=this.$ti.c;s.n();)if(r.b(s.gq()))return!0
return!1},
gq(){return this.$ti.c.a(this.a.gq())},
$iU:1}
A.be.prototype={
sm(a,b){throw A.d(A.T("Cannot change the length of a fixed-length list"))},
p(a,b){A.ay(a).h("be.E").a(b)
throw A.d(A.T("Cannot add to a fixed-length list"))},
M(a,b){A.ay(a).h("i<be.E>").a(b)
throw A.d(A.T("Cannot add to a fixed-length list"))}}
A.bz.prototype={
v(a,b,c){A.A(this).h("bz.E").a(c)
throw A.d(A.T("Cannot modify an unmodifiable list"))},
sm(a,b){throw A.d(A.T("Cannot change the length of an unmodifiable list"))},
p(a,b){A.A(this).h("bz.E").a(b)
throw A.d(A.T("Cannot add to an unmodifiable list"))},
M(a,b){A.A(this).h("i<bz.E>").a(b)
throw A.d(A.T("Cannot add to an unmodifiable list"))},
cM(a,b){A.A(this).h("h(bz.E,bz.E)?").a(b)
throw A.d(A.T("Cannot modify an unmodifiable list"))}}
A.dr.prototype={}
A.X.prototype={
gm(a){return J.M(this.a)},
af(a,b){var s=this.a,r=J.Y(s)
return r.af(s,r.gm(s)-1-b)}}
A.fa.prototype={}
A.d4.prototype={
l(a){return A.mt(this)},
gdV(a){return this.nY(0,A.A(this).h("bi<1,2>"))},
nY(a,b){var s=this
return A.mU(function(){var r=a
var q=0,p=1,o,n,m,l,k,j
return function $async$gdV(c,d){if(c===1){o=d
q=p}while(true)switch(q){case 0:n=s.gbl(),n=n.gH(n),m=A.A(s),l=m.z[1],m=m.h("@<1>").Y(l).h("bi<1,2>")
case 2:if(!n.n()){q=3
break}k=n.gq()
j=s.k(0,k)
q=4
return new A.bi(k,j==null?l.a(j):j,m)
case 4:q=2
break
case 3:return A.mE()
case 1:return A.mF(o)}}},b)},
$ib1:1}
A.r.prototype={
gm(a){return this.a},
ai(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
k(a,b){if(!this.ai(b))return null
return this.b[A.aw(b)]},
bb(a,b){var s,r,q,p,o,n=this.$ti
n.h("~(1,2)").a(b)
s=this.c
for(r=s.length,q=this.b,n=n.z[1],p=0;p<r;++p){o=A.aw(s[p])
b.$2(o,n.a(q[o]))}},
gbl(){return new A.eO(this,this.$ti.h("eO<1>"))}}
A.eO.prototype={
gH(a){var s=this.a.c
return new J.az(s,s.length,A.w(s).h("az<1>"))},
gm(a){return this.a.c.length}}
A.c9.prototype={
cR(){var s,r,q,p=this,o=p.$map
if(o==null){s=p.$ti
r=s.c
q=A.q6(r)
o=A.ab(A.t5(),q,r,s.z[1])
A.oW(p.a,o)
p.$map=o}return o},
ai(a){return this.cR().ai(a)},
k(a,b){return this.cR().k(0,b)},
bb(a,b){this.$ti.h("~(1,2)").a(b)
this.cR().bb(0,b)},
gbl(){var s=this.cR()
return new A.aU(s,A.A(s).h("aU<1>"))},
gm(a){return this.cR().a}}
A.je.prototype={
$1(a){return this.a.b(a)},
$S:82}
A.ec.prototype={
V(a,b){if(b==null)return!1
return b instanceof A.ec&&this.a.V(0,b.a)&&A.dD(this)===A.dD(b)},
gW(a){return A.cO(this.a,A.dD(this),B.m,B.m)},
l(a){var s=B.a.aD([A.mZ(this.$ti.c)],", ")
return this.a.l(0)+" with "+("<"+s+">")}}
A.ca.prototype={
$2(a,b){return this.a.$1$2(a,b,this.$ti.z[0])},
$S(){return A.tF(A.mY(this.a),this.$ti)}}
A.kB.prototype={
bn(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.eq.prototype={
l(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
A.h8.prototype={
l(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.hS.prototype={
l(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.hj.prototype={
l(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"},
$ibN:1}
A.e1.prototype={}
A.f_.prototype={
l(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$ich:1}
A.aS.prototype={
l(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.pj(r==null?"unknown":r)+"'"},
$ibO:1,
gpV(){return this},
$C:"$1",
$R:1,
$D:null}
A.fJ.prototype={$C:"$0",$R:0}
A.fK.prototype={$C:"$2",$R:2}
A.hK.prototype={}
A.hI.prototype={
l(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.pj(s)+"'"}}
A.d1.prototype={
V(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.d1))return!1
return this.$_target===b.$_target&&this.a===b.a},
gW(a){return(A.n4(this.a)^A.bI(this.$_target))>>>0},
l(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.kg(this.a)+"'")}}
A.hz.prototype={
l(a){return"RuntimeError: "+this.a}}
A.i2.prototype={
l(a){return"Assertion failed: "+A.fU(this.a)}}
A.bg.prototype={
gm(a){return this.a},
gbl(){return new A.aU(this,A.A(this).h("aU<1>"))},
gjX(a){var s=A.A(this)
return A.jU(new A.aU(this,s.h("aU<1>")),new A.jM(this),s.c,s.z[1])},
ai(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.jm(a)},
jm(a){var s=this.d
if(s==null)return!1
return this.d7(s[this.d6(a)],a)>=0},
k(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.jn(b)},
jn(a){var s,r,q=this.d
if(q==null)return null
s=q[this.d6(a)]
r=this.d7(s,a)
if(r<0)return null
return s[r].b},
v(a,b,c){var s,r,q=this,p=A.A(q)
p.c.a(b)
p.z[1].a(c)
if(typeof b=="string"){s=q.b
q.hG(s==null?q.b=q.f3():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.hG(r==null?q.c=q.f3():r,b,c)}else q.jp(b,c)},
jp(a,b){var s,r,q,p,o=this,n=A.A(o)
n.c.a(a)
n.z[1].a(b)
s=o.d
if(s==null)s=o.d=o.f3()
r=o.d6(a)
q=s[r]
if(q==null)s[r]=[o.eQ(a,b)]
else{p=o.d7(q,a)
if(p>=0)q[p].b=b
else q.push(o.eQ(a,b))}},
ei(a,b){var s,r,q=this,p=A.A(q)
p.c.a(a)
p.h("2()").a(b)
if(q.ai(a)){s=q.k(0,a)
return s==null?p.z[1].a(s):s}r=b.$0()
q.v(0,a,r)
return r},
a_(a,b){var s=this
if(typeof b=="string")return s.ii(s.b,b)
else if(typeof b=="number"&&(b&0x3fffffff)===b)return s.ii(s.c,b)
else return s.jo(b)},
jo(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.d6(a)
r=n[s]
q=o.d7(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.ir(p)
if(r.length===0)delete n[s]
return p.b},
bb(a,b){var s,r,q=this
A.A(q).h("~(1,2)").a(b)
s=q.e
r=q.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==q.r)throw A.d(A.as(q))
s=s.c}},
hG(a,b,c){var s,r=A.A(this)
r.c.a(b)
r.z[1].a(c)
s=a[b]
if(s==null)a[b]=this.eQ(b,c)
else s.b=c},
ii(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.ir(s)
delete a[b]
return s.b},
hI(){this.r=this.r+1&1073741823},
eQ(a,b){var s=this,r=A.A(s),q=new A.jP(r.c.a(a),r.z[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.hI()
return q},
ir(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.hI()},
d6(a){return J.aH(a)&0x3fffffff},
d7(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.W(a[r].a,b))return r
return-1},
l(a){return A.mt(this)},
f3(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$ijO:1}
A.jM.prototype={
$1(a){var s=this.a,r=A.A(s)
s=s.k(0,r.c.a(a))
return s==null?r.z[1].a(s):s},
$S(){return A.A(this.a).h("2(1)")}}
A.jP.prototype={}
A.aU.prototype={
gm(a){return this.a.a},
gag(a){return this.a.a===0},
gH(a){var s=this.a,r=new A.cJ(s,s.r,this.$ti.h("cJ<1>"))
r.c=s.e
return r},
F(a,b){return this.a.ai(b)}}
A.cJ.prototype={
gq(){return this.d},
n(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.as(q))
s=r.c
if(s==null){r.shH(null)
return!1}else{r.shH(s.a)
r.c=s.c
return!0}},
shH(a){this.d=this.$ti.h("1?").a(a)},
$iU:1}
A.lY.prototype={
$1(a){return this.a(a)},
$S:40}
A.lZ.prototype={
$2(a,b){return this.a(a,b)},
$S:44}
A.m_.prototype={
$1(a){return this.a(A.aw(a))},
$S:50}
A.cH.prototype={
l(a){return"RegExp/"+this.a+"/"+this.b.flags},
gi8(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.mm(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,!0)},
gi7(){var s=this,r=s.d
if(r!=null)return r
r=s.b
return s.d=A.mm(s.a+"|()",r.multiline,!r.ignoreCase,r.unicode,r.dotAll,!0)},
jg(a){var s=this.b.exec(a)
if(s==null)return null
return new A.dw(s)},
fc(a,b,c){var s=b.length
if(c>s)throw A.d(A.a_(c,0,s,null,null))
return new A.i1(this,b,c)},
c5(a,b){return this.fc(a,b,0)},
me(a,b){var s,r=this.gi8()
if(r==null)r=t.K.a(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.dw(s)},
md(a,b){var s,r=this.gi7()
if(r==null)r=t.K.a(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
if(0>=s.length)return A.c(s,-1)
if(s.pop()!=null)return null
return new A.dw(s)},
jt(a,b,c){if(c<0||c>b.length)throw A.d(A.a_(c,0,b.length,null,null))
return this.md(b,c)},
$idh:1}
A.dw.prototype={
gS(a){return this.b.index},
gU(){var s=this.b
return s.index+s[0].length},
ghc(){return this.b.length-1},
hd(a){var s,r,q,p,o
t.L.a(a)
s=A.a([],t.D)
for(r=a.length,q=this.b,p=0;p<a.length;a.length===r||(0,A.f)(a),++p){o=A.a0(a[p])
if(!(o>=0&&o<q.length))return A.c(q,o)
B.a.p(s,q[o])}return s},
$idc:1,
$icQ:1}
A.i1.prototype={
gH(a){return new A.dt(this.a,this.b,this.c)}}
A.dt.prototype={
gq(){var s=this.d
return s==null?t.lu.a(s):s},
n(){var s,r,q,p,o,n=this,m=n.b
if(m==null)return!1
s=n.c
r=m.length
if(s<=r){q=n.a
p=q.me(m,s)
if(p!=null){n.d=p
o=p.gU()
if(p.b.index===o){if(q.b.unicode){s=n.c
q=s+1
if(q<r){s=B.b.I(m,s)
if(s>=55296&&s<=56319){s=B.b.I(m,q)
s=s>=56320&&s<=57343}else s=!1}else s=!1}else s=!1
o=(s?o+1:o)+1}n.c=o
return!0}}n.b=n.d=null
return!1},
$iU:1}
A.dp.prototype={
gU(){return this.a+this.c.length},
ghc(){return 0},
hd(a){var s,r,q,p,o
t.L.a(a)
s=A.a([],t.s)
for(r=a.length,q=this.c,p=0;p<a.length;a.length===r||(0,A.f)(a),++p){o=A.a0(a[p])
if(o!==0)A.N(A.kh(o,null))
B.a.p(s,q)}return s},
$idc:1,
gS(a){return this.a}}
A.iq.prototype={
gH(a){return new A.ir(this.a,this.b,this.c)},
gap(a){var s=this.b,r=this.a.indexOf(s,this.c)
if(r>=0)return new A.dp(r,s)
throw A.d(A.an())}}
A.ir.prototype={
n(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.dp(s,o)
q.c=r===q.c?r+1:r
return!0},
gq(){var s=this.d
s.toString
return s},
$iU:1}
A.l3.prototype={
ih(){var s=this.b
if(s===this)throw A.d(A.mp(this.a))
return s}}
A.hf.prototype={}
A.df.prototype={
gm(a){return a.length},
$idb:1}
A.eo.prototype={
v(a,b,c){A.a0(c)
A.lA(b,a,a.length)
a[b]=c},
$iQ:1,
$ii:1,
$il:1}
A.he.prototype={
k(a,b){A.lA(b,a,a.length)
return a[b]}}
A.ep.prototype={
k(a,b){A.lA(b,a,a.length)
return a[b]},
b7(a,b,c){return new Uint32Array(a.subarray(b,A.rK(b,c,a.length)))},
$iqW:1}
A.cN.prototype={
gm(a){return a.length},
k(a,b){A.lA(b,a,a.length)
return a[b]},
$icN:1,
$icT:1}
A.eX.prototype={}
A.eY.prototype={}
A.bv.prototype={
h(a){return A.lt(v.typeUniverse,this,a)},
Y(a){return A.rs(v.typeUniverse,this,a)}}
A.ij.prototype={}
A.f2.prototype={
l(a){return A.b_(this.a,null)},
$io_:1}
A.ig.prototype={
l(a){return this.a}}
A.f3.prototype={$icl:1}
A.l_.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:17}
A.kZ.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:55}
A.l0.prototype={
$0(){this.a.$0()},
$S:2}
A.l1.prototype={
$0(){this.a.$0()},
$S:2}
A.lr.prototype={
lN(a,b){if(self.setTimeout!=null)self.setTimeout(A.dC(new A.ls(this,b),0),a)
else throw A.d(A.T("`setTimeout()` not found."))}}
A.ls.prototype={
$0(){this.b.$0()},
$S:1}
A.i3.prototype={
fm(a,b){var s,r=this,q=r.$ti
q.h("1/?").a(b)
if(b==null)q.c.a(b)
if(!r.b)r.a.hM(b)
else{s=r.a
if(q.h("bf<1>").b(b))s.hP(b)
else s.eV(q.c.a(b))}},
iT(a,b){var s=this.a
if(this.b)s.cl(a,b)
else s.m2(a,b)}}
A.ly.prototype={
$1(a){return this.a.$2(0,a)},
$S:86}
A.lz.prototype={
$2(a,b){this.a.$2(1,new A.e1(a,t.k.a(b)))},
$S:87}
A.lL.prototype={
$2(a,b){this.a(A.a0(a),b)},
$S:89}
A.dv.prototype={
l(a){return"IterationMarker("+this.b+", "+A.k(this.a)+")"}}
A.cq.prototype={
gq(){var s,r=this.c
if(r==null){s=this.b
return s==null?this.$ti.c.a(s):s}return r.gq()},
n(){var s,r,q,p,o,n,m=this
for(s=m.$ti.h("U<1>");!0;){r=m.c
if(r!=null)if(r.n())return!0
else m.si9(null)
q=function(a,b,c){var l,k=b
while(true)try{return a(k,l)}catch(j){l=j
k=c}}(m.a,0,1)
if(q instanceof A.dv){p=q.b
if(p===2){o=m.d
if(o==null||o.length===0){m.shL(null)
return!1}if(0>=o.length)return A.c(o,-1)
m.a=o.pop()
continue}else{r=q.a
if(p===3)throw r
else{n=s.a(J.F(r))
if(n instanceof A.cq){r=m.d
if(r==null)r=m.d=[]
B.a.p(r,m.a)
m.a=n.a
continue}else{m.si9(n)
continue}}}}else{m.shL(q)
return!0}}return!1},
shL(a){this.b=this.$ti.h("1?").a(a)},
si9(a){this.c=this.$ti.h("U<1>?").a(a)},
$iU:1}
A.f1.prototype={
gH(a){return new A.cq(this.a(),this.$ti.h("cq<1>"))}}
A.dM.prototype={
l(a){return A.k(this.a)},
$ia1:1,
gdr(){return this.b}}
A.i5.prototype={
iT(a,b){var s
A.fi(a,"error",t.K)
s=this.a
if((s.a&30)!==0)throw A.d(A.av("Future already completed"))
s.cl(a,b)}}
A.f0.prototype={
fm(a,b){var s,r=this.$ti
r.h("1/?").a(b)
s=this.a
if((s.a&30)!==0)throw A.d(A.av("Future already completed"))
s.hQ(r.h("1/").a(b))}}
A.cW.prototype={
oF(a){if((this.c&15)!==6)return!0
return this.b.b.fX(t.iW.a(this.d),a.a,t.k4,t.K)},
oh(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.eK.b(q))p=l.pr(q,m,a.b,o,n,t.k)
else p=l.fX(t.mq.a(q),m,o,n)
try{o=r.$ti.h("2/").a(p)
return o}catch(s){if(t.do.b(A.bq(s))){if((r.c&1)!==0)throw A.d(A.a8("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.d(A.a8("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.ar.prototype={
fY(a,b,c){var s,r,q,p=this.$ti
p.Y(c).h("1/(2)").a(a)
s=$.aa
if(s===B.k){if(b!=null&&!t.eK.b(b)&&!t.mq.b(b))throw A.d(A.mh(b,"onError",u.w))}else{c.h("@<0/>").Y(p.c).h("1(2)").a(a)
if(b!=null)b=A.t8(b,s)}r=new A.ar(s,c.h("ar<0>"))
q=b==null?1:3
this.eR(new A.cW(r,q,a,b,p.h("@<1>").Y(c).h("cW<1,2>")))
return r},
pz(a,b){return this.fY(a,null,b)},
ip(a,b,c){var s,r=this.$ti
r.Y(c).h("1/(2)").a(a)
s=new A.ar($.aa,c.h("ar<0>"))
this.eR(new A.cW(s,3,a,b,r.h("@<1>").Y(c).h("cW<1,2>")))
return s},
mo(a){this.a=this.a&1|16
this.c=a},
eU(a){this.a=a.a&30|this.a&1
this.c=a.c},
eR(a){var s,r=this,q=r.a
if(q<=3){a.a=t.Q.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.j_.a(r.c)
if((s.a&24)===0){s.eR(a)
return}r.eU(s)}A.cY(null,null,r.b,t.M.a(new A.l7(r,a)))}},
ie(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.Q.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.j_.a(m.c)
if((n.a&24)===0){n.ie(a)
return}m.eU(n)}l.a=m.dB(a)
A.cY(null,null,m.b,t.M.a(new A.lf(l,m)))}},
dA(){var s=t.Q.a(this.c)
this.c=null
return this.dB(s)},
dB(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
hO(a){var s,r,q,p=this
p.a^=2
try{a.fY(new A.lb(p),new A.lc(p),t.P)}catch(q){s=A.bq(q)
r=A.cu(q)
A.tU(new A.ld(p,s,r))}},
hQ(a){var s,r=this,q=r.$ti
q.h("1/").a(a)
if(q.h("bf<1>").b(a))if(q.b(a))A.la(a,r)
else r.hO(a)
else{s=r.dA()
q.c.a(a)
r.a=8
r.c=a
A.du(r,s)}},
eV(a){var s,r=this
r.$ti.c.a(a)
s=r.dA()
r.a=8
r.c=a
A.du(r,s)},
cl(a,b){var s
t.k.a(b)
s=this.dA()
this.mo(A.iW(a,b))
A.du(this,s)},
hM(a){var s=this.$ti
s.h("1/").a(a)
if(s.h("bf<1>").b(a)){this.hP(a)
return}this.m3(s.c.a(a))},
m3(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.cY(null,null,s.b,t.M.a(new A.l9(s,a)))},
hP(a){var s=this,r=s.$ti
r.h("bf<1>").a(a)
if(r.b(a)){if((a.a&16)!==0){s.a^=2
A.cY(null,null,s.b,t.M.a(new A.le(s,a)))}else A.la(a,s)
return}s.hO(a)},
m2(a,b){this.a^=2
A.cY(null,null,this.b,t.M.a(new A.l8(this,a,b)))},
$ibf:1}
A.l7.prototype={
$0(){A.du(this.a,this.b)},
$S:1}
A.lf.prototype={
$0(){A.du(this.b,this.a.a)},
$S:1}
A.lb.prototype={
$1(a){var s,r,q,p=this.a
p.a^=2
try{p.eV(p.$ti.c.a(a))}catch(q){s=A.bq(q)
r=A.cu(q)
p.cl(s,r)}},
$S:17}
A.lc.prototype={
$2(a,b){this.a.cl(t.K.a(a),t.k.a(b))},
$S:37}
A.ld.prototype={
$0(){this.a.cl(this.b,this.c)},
$S:1}
A.l9.prototype={
$0(){this.a.eV(this.b)},
$S:1}
A.le.prototype={
$0(){A.la(this.b,this.a)},
$S:1}
A.l8.prototype={
$0(){this.a.cl(this.b,this.c)},
$S:1}
A.li.prototype={
$0(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.jQ(t.mY.a(q.d),t.z)}catch(p){s=A.bq(p)
r=A.cu(p)
q=m.c&&t.u.a(m.b.a.c).a===s
o=m.a
if(q)o.c=t.u.a(m.b.a.c)
else o.c=A.iW(s,r)
o.b=!0
return}if(l instanceof A.ar&&(l.a&24)!==0){if((l.a&16)!==0){q=m.a
q.c=t.u.a(l.c)
q.b=!0}return}if(t.g7.b(l)){n=m.b.a
q=m.a
q.c=l.pz(new A.lj(n),t.z)
q.b=!1}},
$S:1}
A.lj.prototype={
$1(a){return this.a},
$S:92}
A.lh.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.fX(o.h("2/(1)").a(p.d),m,o.h("2/"),n)}catch(l){s=A.bq(l)
r=A.cu(l)
q=this.a
q.c=A.iW(s,r)
q.b=!0}},
$S:1}
A.lg.prototype={
$0(){var s,r,q,p,o,n,m=this
try{s=t.u.a(m.a.a.c)
p=m.b
if(p.a.oF(s)&&p.a.e!=null){p.c=p.a.oh(s)
p.b=!1}}catch(o){r=A.bq(o)
q=A.cu(o)
p=t.u.a(m.a.a.c)
n=m.b
if(p.a===r)n.c=p
else n.c=A.iW(r,q)
n.b=!0}},
$S:1}
A.i4.prototype={}
A.eE.prototype={
gm(a){var s,r,q=this,p={},o=new A.ar($.aa,t.hy)
p.a=0
s=q.$ti
r=s.h("~(1)?").a(new A.kt(p,q))
t.jE.a(new A.ku(p,o))
A.l5(q.a,q.b,r,!1,s.c)
return o}}
A.kt.prototype={
$1(a){this.b.$ti.c.a(a);++this.a.a},
$S(){return this.b.$ti.h("~(1)")}}
A.ku.prototype={
$0(){this.b.hQ(this.a.a)},
$S:1}
A.eF.prototype={}
A.hJ.prototype={}
A.ip.prototype={}
A.f9.prototype={$io7:1}
A.lJ.prototype={
$0(){var s=this.a,r=this.b
A.fi(s,"error",t.K)
A.fi(r,"stackTrace",t.k)
A.q4(s,r)},
$S:1}
A.io.prototype={
ps(a){var s,r,q
t.M.a(a)
try{if(B.k===$.aa){a.$0()
return}A.oH(null,null,this,a,t.H)}catch(q){s=A.bq(q)
r=A.cu(q)
A.lI(t.K.a(s),t.k.a(r))}},
pt(a,b,c){var s,r,q
c.h("~(0)").a(a)
c.a(b)
try{if(B.k===$.aa){a.$1(b)
return}A.oI(null,null,this,a,b,t.H,c)}catch(q){s=A.bq(q)
r=A.cu(q)
A.lI(t.K.a(s),t.k.a(r))}},
iL(a){return new A.lp(this,t.M.a(a))},
nf(a,b){return new A.lq(this,b.h("~(0)").a(a),b)},
jQ(a,b){b.h("0()").a(a)
if($.aa===B.k)return a.$0()
return A.oH(null,null,this,a,b)},
fX(a,b,c,d){c.h("@<0>").Y(d).h("1(2)").a(a)
d.a(b)
if($.aa===B.k)return a.$1(b)
return A.oI(null,null,this,a,b,c,d)},
pr(a,b,c,d,e,f){d.h("@<0>").Y(e).Y(f).h("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.aa===B.k)return a.$2(b,c)
return A.t9(null,null,this,a,b,c,d,e,f)},
jJ(a,b,c,d){return b.h("@<0>").Y(c).Y(d).h("1(2,3)").a(a)}}
A.lp.prototype={
$0(){return this.a.ps(this.b)},
$S:1}
A.lq.prototype={
$1(a){var s=this.c
return this.a.pt(this.b,s.a(a),s)},
$S(){return this.c.h("~(0)")}}
A.eU.prototype={
k(a,b){if(!A.ax(this.y.$1(b)))return null
return this.ls(b)},
v(a,b,c){var s=this.$ti
this.lu(s.c.a(b),s.z[1].a(c))},
ai(a){if(!A.ax(this.y.$1(a)))return!1
return this.lr(a)},
a_(a,b){if(!A.ax(this.y.$1(b)))return null
return this.lt(b)},
d6(a){return this.x.$1(this.$ti.c.a(a))&1073741823},
d7(a,b){var s,r,q,p
if(a==null)return-1
s=a.length
for(r=this.$ti.c,q=this.w,p=0;p<s;++p)if(A.ax(q.$2(r.a(a[p].a),r.a(b))))return p
return-1}}
A.lm.prototype={
$1(a){return this.a.b(a)},
$S:41}
A.bY.prototype={
ia(){return new A.bY(A.A(this).h("bY<1>"))},
gH(a){var s=this,r=new A.cX(s,s.r,A.A(s).h("cX<1>"))
r.c=s.e
return r},
gm(a){return this.a},
gag(a){return this.a===0},
gcw(a){return this.a!==0},
F(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.nF.a(s[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return t.nF.a(r[b])!=null}else return this.m8(b)},
m8(a){var s=this.d
if(s==null)return!1
return this.hU(s[this.hR(a)],a)>=0},
gap(a){var s=this.e
if(s==null)throw A.d(A.av("No elements"))
return A.A(this).c.a(s.a)},
gt(a){var s=this.f
if(s==null)throw A.d(A.av("No elements"))
return A.A(this).c.a(s.a)},
p(a,b){var s,r,q=this
A.A(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.hJ(s==null?q.b=A.mG():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.hJ(r==null?q.c=A.mG():r,b)}else return q.ds(b)},
ds(a){var s,r,q,p=this
A.A(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.mG()
r=p.hR(a)
q=s[r]
if(q==null)s[r]=[p.f4(a)]
else{if(p.hU(q,a)>=0)return!1
q.push(p.f4(a))}return!0},
hJ(a,b){A.A(this).c.a(b)
if(t.nF.a(a[b])!=null)return!1
a[b]=this.f4(b)
return!0},
mi(){this.r=this.r+1&1073741823},
f4(a){var s,r=this,q=new A.ik(A.A(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.mi()
return q},
hR(a){return J.aH(a)&1073741823},
hU(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.W(a[r].a,b))return r
return-1}}
A.ik.prototype={}
A.cX.prototype={
gq(){var s=this.d
return s==null?this.$ti.c.a(s):s},
n(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.d(A.as(q))
else if(r==null){s.scQ(null)
return!1}else{s.scQ(s.$ti.h("1?").a(r.a))
s.c=r.b
return!0}},
scQ(a){this.d=this.$ti.h("1?").a(a)},
$iU:1}
A.ee.prototype={}
A.jQ.prototype={
$2(a,b){this.a.v(0,this.b.a(a),this.c.a(b))},
$S:33}
A.ei.prototype={$iQ:1,$ii:1,$il:1}
A.u.prototype={
gH(a){return new A.L(a,this.gm(a),A.ay(a).h("L<u.E>"))},
af(a,b){return this.k(a,b)},
gag(a){return this.gm(a)===0},
gcw(a){return!this.gag(a)},
gap(a){if(this.gm(a)===0)throw A.d(A.an())
return this.k(a,0)},
gt(a){if(this.gm(a)===0)throw A.d(A.an())
return this.k(a,this.gm(a)-1)},
F(a,b){var s,r=this.gm(a)
for(s=0;s<r;++s){if(J.W(this.k(a,s),b))return!0
if(r!==this.gm(a))throw A.d(A.as(a))}return!1},
ct(a,b){var s,r
A.ay(a).h("B(u.E)").a(b)
s=this.gm(a)
for(r=0;r<s;++r){if(!A.ax(b.$1(this.k(a,r))))return!1
if(s!==this.gm(a))throw A.d(A.as(a))}return!0},
b1(a,b){var s,r
A.ay(a).h("B(u.E)").a(b)
s=this.gm(a)
for(r=0;r<s;++r){if(A.ax(b.$1(this.k(a,r))))return!0
if(s!==this.gm(a))throw A.d(A.as(a))}return!1},
er(a,b){var s=A.ay(a)
return new A.ap(a,s.h("B(u.E)").a(b),s.h("ap<u.E>"))},
ec(a,b,c){var s=A.ay(a)
return new A.I(a,s.Y(c).h("1(u.E)").a(b),s.h("@<u.E>").Y(c).h("I<1,2>"))},
b6(a,b){return A.bb(a,b,null,A.ay(a).h("u.E"))},
bq(a,b){var s,r,q,p,o=this
if(o.gag(a)){s=J.ml(0,A.ay(a).h("u.E"))
return s}r=o.k(a,0)
q=A.bH(o.gm(a),r,!0,A.ay(a).h("u.E"))
for(p=1;p<o.gm(a);++p)B.a.v(q,p,o.k(a,p))
return q},
aA(a){return this.bq(a,!0)},
p(a,b){var s
A.ay(a).h("u.E").a(b)
s=this.gm(a)
this.sm(a,s+1)
this.v(a,s,b)},
M(a,b){var s,r
A.ay(a).h("i<u.E>").a(b)
s=this.gm(a)
for(r=J.F(b);r.n();){this.p(a,r.gq());++s}},
bB(a){this.sm(a,0)},
dd(a){var s,r=this
if(r.gm(a)===0)throw A.d(A.an())
s=r.k(a,r.gm(a)-1)
r.sm(a,r.gm(a)-1)
return s},
cM(a,b){var s,r=A.ay(a)
r.h("h(u.E,u.E)?").a(b)
s=b==null?A.tm():b
A.nU(a,s,r.h("u.E"))},
dm(a,b,c){A.aF(b,c,this.gm(a))
return A.bb(a,b,c,A.ay(a).h("u.E"))},
oc(a,b,c,d){var s
A.ay(a).h("u.E?").a(d)
A.aF(b,c,this.gm(a))
for(s=b;s<c;++s)this.v(a,s,d)},
aP(a,b,c){var s
for(s=c;s<this.gm(a);++s)if(J.W(this.k(a,s),b))return s
return-1},
aj(a,b){return this.aP(a,b,0)},
l(a){return A.jI(a,"[","]")}}
A.ek.prototype={}
A.jS.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=A.k(a)
r.a=s+": "
r.a+=A.k(b)},
$S:49}
A.cK.prototype={
bb(a,b){var s,r,q,p=A.A(this)
p.h("~(1,2)").a(b)
for(s=this.gbl(),s=s.gH(s),p=p.z[1];s.n();){r=s.gq()
q=this.k(0,r)
b.$2(r,q==null?p.a(q):q)}},
gdV(a){var s=this.gbl(),r=A.A(this).h("bi<1,2>"),q=A.A(s)
return A.jU(s,q.Y(r).h("1(i.E)").a(new A.jT(this)),q.h("i.E"),r)},
ai(a){return this.gbl().F(0,a)},
gm(a){var s=this.gbl()
return s.gm(s)},
l(a){return A.mt(this)},
$ib1:1}
A.jT.prototype={
$1(a){var s=this.a,r=A.A(s)
r.c.a(a)
s=s.k(0,a)
if(s==null)s=r.z[1].a(s)
return new A.bi(a,s,r.h("@<1>").Y(r.z[1]).h("bi<1,2>"))},
$S(){return A.A(this.a).h("bi<1,2>(1)")}}
A.ej.prototype={
gH(a){var s=this
return new A.eW(s,s.c,s.d,s.b,s.$ti.h("eW<1>"))},
gag(a){return this.b===this.c},
gm(a){return(this.c-this.b&this.a.length-1)>>>0},
gap(a){var s,r=this,q=r.b
if(q===r.c)throw A.d(A.an())
s=r.a
if(!(q<s.length))return A.c(s,q)
q=s[q]
return q==null?r.$ti.c.a(q):q},
gt(a){var s,r=this,q=r.b,p=r.c
if(q===p)throw A.d(A.an())
q=r.a
s=q.length
p=(p-1&s-1)>>>0
if(!(p>=0&&p<s))return A.c(q,p)
p=q[p]
return p==null?r.$ti.c.a(p):p},
af(a,b){var s,r,q,p=this,o=p.gm(p)
if(0>b||b>=o)A.N(A.h5(b,p,"index",null,o))
s=p.a
r=s.length
q=(p.b+b&r-1)>>>0
if(!(q>=0&&q<r))return A.c(s,q)
q=s[q]
return q==null?p.$ti.c.a(q):q},
bB(a){var s=this,r=s.b
if(r!==s.c){for(;r!==s.c;r=(r+1&s.a.length-1)>>>0)B.a.v(s.a,r,null)
s.b=s.c=0;++s.d}},
l(a){return A.jI(this,"{","}")},
jK(){var s,r,q=this,p=q.b
if(p===q.c)throw A.d(A.an());++q.d
s=q.a
if(!(p<s.length))return A.c(s,p)
r=s[p]
if(r==null)r=q.$ti.c.a(r)
B.a.v(s,p,null)
q.b=(q.b+1&q.a.length-1)>>>0
return r},
ds(a){var s,r,q,p,o=this,n=o.$ti
n.c.a(a)
B.a.v(o.a,o.c,a)
s=o.c
r=o.a.length
s=(s+1&r-1)>>>0
o.c=s
if(o.b===s){q=A.bH(r*2,null,!1,n.h("1?"))
n=o.a
s=o.b
p=n.length-s
B.a.dq(q,0,p,n,s)
B.a.dq(q,p,p+o.b,o.a,0)
o.b=0
o.c=o.a.length
o.smw(q)}++o.d},
smw(a){this.a=this.$ti.h("l<1?>").a(a)},
$inN:1}
A.eW.prototype={
gq(){var s=this.e
return s==null?this.$ti.c.a(s):s},
n(){var s,r,q=this,p=q.a
if(q.c!==p.d)A.N(A.as(p))
s=q.d
if(s===q.b){q.scQ(null)
return!1}r=p.a
if(!(s<r.length))return A.c(r,s)
q.scQ(r[s])
q.d=(q.d+1&p.a.length-1)>>>0
return!0},
scQ(a){this.e=this.$ti.h("1?").a(a)},
$iU:1}
A.aX.prototype={
gag(a){return this.gm(this)===0},
gcw(a){return this.gm(this)!==0},
l(a){return A.jI(this,"{","}")},
aD(a,b){var s,r=this.gH(this)
if(!r.n())return""
if(b===""){s=""
do s+=A.k(r.gq())
while(r.n())}else{s=""+A.k(r.gq())
for(;r.n();)s=s+b+A.k(r.gq())}return s.charCodeAt(0)==0?s:s},
b6(a,b){return A.nT(this,b,A.A(this).h("aX.E"))},
gap(a){var s=this.gH(this)
if(!s.n())throw A.d(A.an())
return s.gq()},
gt(a){var s,r=this.gH(this)
if(!r.n())throw A.d(A.an())
do s=r.gq()
while(r.n())
return s},
af(a,b){var s,r,q,p="index"
A.fi(b,p,t.S)
A.b9(b,p)
for(s=this.gH(this),r=0;s.n();){q=s.gq()
if(b===r)return q;++r}throw A.d(A.h5(b,this,p,null,r))}}
A.ey.prototype={$iQ:1,$ii:1,$ibw:1}
A.dx.prototype={
ou(a,b){var s,r,q=this.ia()
for(s=this.gH(this);s.n();){r=s.gq()
if(b.F(0,r))q.p(0,r)}return q},
$iQ:1,
$ii:1,
$ibw:1}
A.iw.prototype={}
A.f6.prototype={
ia(){return A.mq(this.$ti.c)},
gH(a){var s=this.a.gbl()
return s.gH(s)},
gm(a){var s=this.a
return s.gm(s)}}
A.eV.prototype={}
A.eZ.prototype={}
A.fb.prototype={}
A.fc.prototype={}
A.kI.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:22}
A.kH.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:22}
A.fz.prototype={
dR(a,b){var s
t.L.a(b)
s=B.aG.fp(b)
return s}}
A.it.prototype={
fp(a){var s,r,q,p
t.L.a(a)
s=A.aF(0,null,a.gm(a))
for(r=0<s,q=~this.b>>>0;r;){p=a.k(0,0)
p.k5(0,q)
if(!this.a)throw A.d(A.aD("Invalid value in input: "+A.k(p),null,null))
return this.m9(a,0,s)}return A.ad(a,0,s)},
m9(a,b,c){var s,r,q
t.L.a(a)
for(s=~this.b>>>0,r=b,q="";r<c;++r){a.k(0,r).k5(0,s)
q+=A.b8(65533)}return q.charCodeAt(0)==0?q:q}}
A.fA.prototype={}
A.fC.prototype={
oH(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="Invalid base64 encoding length "
a3=A.aF(a2,a3,a1.length)
s=$.pA()
for(r=s.length,q=a2,p=q,o=null,n=-1,m=-1,l=0;q<a3;q=k){k=q+1
j=B.b.E(a1,q)
if(j===37){i=k+2
if(i<=a3){h=A.lX(B.b.E(a1,k))
g=A.lX(B.b.E(a1,k+1))
f=h*16+g-(g&256)
if(f===37)f=-1
k=i}else f=-1}else f=j
if(0<=f&&f<=127){if(!(f>=0&&f<r))return A.c(s,f)
e=s[f]
if(e>=0){f=B.b.I("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",e)
if(f===j)continue
j=f}else{if(e===-1){if(n<0){d=o==null?null:o.a.length
if(d==null)d=0
n=d+(q-p)
m=q}++l
if(j===61)continue}j=f}if(e!==-2){if(o==null){o=new A.a2("")
d=o}else d=o
c=d.a+=B.b.A(a1,p,q)
d.a=c+A.b8(j)
p=k
continue}}throw A.d(A.aD("Invalid base64 data",a1,q))}if(o!=null){r=o.a+=B.b.A(a1,p,a3)
d=r.length
if(n>=0)A.nl(a1,m,a3,n,l,d)
else{b=B.d.a4(d-1,4)+1
if(b===1)throw A.d(A.aD(a0,a1,a3))
for(;b<4;){r+="="
o.a=r;++b}}r=o.a
return B.b.cd(a1,a2,a3,r.charCodeAt(0)==0?r:r)}a=a3-a2
if(n>=0)A.nl(a1,m,a3,n,l,a)
else{b=B.d.a4(a,4)
if(b===1)throw A.d(A.aD(a0,a1,a3))
if(b>1)a1=B.b.cd(a1,a3,a3,b===2?"==":"=")}return a1}}
A.fD.prototype={}
A.cC.prototype={}
A.cD.prototype={}
A.fT.prototype={}
A.hW.prototype={
dR(a,b){t.L.a(b)
return B.e4.fp(b)}}
A.hX.prototype={
fp(a){var s,r
t.L.a(a)
s=this.a
r=A.qZ(s,a,0,null)
if(r!=null)return r
return new A.lv(s).nE(a,0,null,!0)}}
A.lv.prototype={
nE(a,b,c,d){var s,r,q,p,o,n=this
t.L.a(a)
s=A.aF(b,c,J.M(a))
if(b===s)return""
r=A.rE(a,b,s)
q=n.eW(r,0,s-b,!0)
p=n.b
if((p&1)!==0){o=A.rF(p)
n.b=0
throw A.d(A.aD(o,a,b+n.c))}return q},
eW(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.d.aT(b+c,2)
r=q.eW(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.eW(a,s,c,d)}return q.nH(a,b,c,d)},
nH(a,b,c,d){var s,r,q,p,o,n,m,l,k=this,j=65533,i=k.b,h=k.c,g=new A.a2(""),f=b+1,e=a.length
if(!(b>=0&&b<e))return A.c(a,b)
s=a[b]
$label0$0:for(r=k.a;!0;){for(;!0;f=o){q=B.b.E("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",s)&31
h=i<=32?s&61694>>>q:(s&63|h<<6)>>>0
i=B.b.E(" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",i+q)
if(i===0){g.a+=A.b8(h)
if(f===c)break $label0$0
break}else if((i&1)!==0){if(r)switch(i){case 69:case 67:g.a+=A.b8(j)
break
case 65:g.a+=A.b8(j);--f
break
default:p=g.a+=A.b8(j)
g.a=p+A.b8(j)
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
g.a+=A.b8(a[l])}else g.a+=A.ad(a,f,n)
if(n===c)break $label0$0
f=o}else f=o}if(d&&i>32)if(r)g.a+=A.b8(j)
else{k.b=77
k.c=c
return""}k.b=i
k.c=h
e=g.a
return e.charCodeAt(0)==0?e:e}}
A.l4.prototype={}
A.a1.prototype={
gdr(){return A.cu(this.$thrownJsError)}}
A.dL.prototype={
l(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.fU(s)
return"Assertion failed"}}
A.cl.prototype={}
A.hi.prototype={
l(a){return"Throw of null."}}
A.bC.prototype={
gf_(){return"Invalid argument"+(!this.a?"(s)":"")},
geZ(){return""},
l(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.k(p),n=s.gf_()+q+o
if(!s.a)return n
return n+s.geZ()+": "+A.fU(s.b)}}
A.dk.prototype={
gf_(){return"RangeError"},
geZ(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.k(q):""
else if(q==null)s=": Not greater than or equal to "+A.k(r)
else if(q>r)s=": Not in inclusive range "+A.k(r)+".."+A.k(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.k(r)
return s}}
A.h4.prototype={
gf_(){return"RangeError"},
geZ(){if(A.a0(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gm(a){return this.f}}
A.hT.prototype={
l(a){return"Unsupported operation: "+this.a}}
A.eL.prototype={
l(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
A.cj.prototype={
l(a){return"Bad state: "+this.a}}
A.fM.prototype={
l(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.fU(s)+"."}}
A.hn.prototype={
l(a){return"Out of Memory"},
gdr(){return null},
$ia1:1}
A.eD.prototype={
l(a){return"Stack Overflow"},
gdr(){return null},
$ia1:1}
A.fO.prototype={
l(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.ih.prototype={
l(a){return"Exception: "+this.a},
$ibN:1}
A.e4.prototype={
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
for(o=f;o<m;++o){n=B.b.I(e,o)
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
i=""}return g+j+B.b.A(e,k,l)+i+"\n"+B.b.B(" ",f-k+j.length)+"^\n"}else return f!=null?g+(" (at offset "+A.k(f)+")"):g},
$ibN:1}
A.i.prototype={
ec(a,b,c){var s=A.A(this)
return A.jU(this,s.Y(c).h("1(i.E)").a(b),s.h("i.E"),c)},
er(a,b){var s=A.A(this)
return new A.ap(this,s.h("B(i.E)").a(b),s.h("ap<i.E>"))},
ct(a,b){var s
A.A(this).h("B(i.E)").a(b)
for(s=this.gH(this);s.n();)if(!A.ax(b.$1(s.gq())))return!1
return!0},
b1(a,b){var s
A.A(this).h("B(i.E)").a(b)
for(s=this.gH(this);s.n();)if(A.ax(b.$1(s.gq())))return!0
return!1},
bq(a,b){return A.j(this,b,A.A(this).h("i.E"))},
aA(a){return this.bq(a,!0)},
gm(a){var s,r=this.gH(this)
for(s=0;r.n();)++s
return s},
gag(a){return!this.gH(this).n()},
gcw(a){return!this.gag(this)},
b6(a,b){return A.nT(this,b,A.A(this).h("i.E"))},
gap(a){var s=this.gH(this)
if(!s.n())throw A.d(A.an())
return s.gq()},
gt(a){var s,r=this.gH(this)
if(!r.n())throw A.d(A.an())
do s=r.gq()
while(r.n())
return s},
af(a,b){var s,r,q
A.b9(b,"index")
for(s=this.gH(this),r=0;s.n();){q=s.gq()
if(b===r)return q;++r}throw A.d(A.h5(b,this,"index",null,r))},
l(a){return A.qb(this,"(",")")}}
A.U.prototype={}
A.bi.prototype={
l(a){return"MapEntry("+A.k(this.a)+": "+A.k(this.b)+")"}}
A.ak.prototype={
gW(a){return A.H.prototype.gW.call(this,this)},
l(a){return"null"}}
A.H.prototype={$iH:1,
V(a,b){return this===b},
gW(a){return A.bI(this)},
l(a){return"Instance of '"+A.kg(this)+"'"},
toString(){return this.l(this)}}
A.is.prototype={
l(a){return""},
$ich:1}
A.hy.prototype={
gH(a){return new A.hx(this.a)},
gt(a){var s,r,q=this.a,p=q.length
if(p===0)throw A.d(A.av("No elements."))
s=B.b.I(q,p-1)
if((s&64512)===56320&&p>1){r=B.b.I(q,p-2)
if((r&64512)===55296)return A.oz(r,s)}return s}}
A.hx.prototype={
gq(){return this.d},
n(){var s,r,q,p=this,o=p.b=p.c,n=p.a,m=n.length
if(o===m){p.d=-1
return!1}s=B.b.E(n,o)
r=o+1
if((s&64512)===55296&&r<m){q=B.b.E(n,r)
if((q&64512)===56320){p.c=r+1
p.d=A.oz(s,q)
return!0}}p.c=r
p.d=s
return!0},
$iU:1}
A.a2.prototype={
gm(a){return this.a.length},
l(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$iqO:1}
A.kE.prototype={
$2(a,b){throw A.d(A.aD("Illegal IPv4 address, "+a,this.a,b))},
$S:51}
A.kF.prototype={
$2(a,b){throw A.d(A.aD("Illegal IPv6 address, "+a,this.a,b))},
$S:52}
A.kG.prototype={
$2(a,b){var s
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
s=A.cv(B.b.A(this.b,a,b),16)
if(s<0||s>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return s},
$S:14}
A.f7.prototype={
gim(){var s,r,q,p,o=this,n=o.w
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
gfS(){var s,r,q=this,p=q.x
if(p===$){s=q.e
if(s.length!==0&&B.b.E(s,0)===47)s=B.b.au(s,1)
r=s.length===0?B.v:A.nG(new A.I(A.a(s.split("/"),t.s),t.f6.a(A.tr()),t.iZ),t.N)
q.x!==$&&A.C("pathSegments")
q.sm_(r)
p=r}return p},
gW(a){var s,r=this,q=r.y
if(q===$){s=B.b.gW(r.gim())
r.y!==$&&A.C("hashCode")
r.y=s
q=s}return q},
gdg(){return this.b},
gbk(a){var s=this.c
if(s==null)return""
if(B.b.Z(s,"["))return B.b.A(s,1,s.length-1)
return s},
gcD(a){var s=this.d
return s==null?A.oj(this.a):s},
gcc(){var s=this.f
return s==null?"":s},
ge6(){var s=this.r
return s==null?"":s},
ow(a){var s=this.a
if(a.length!==s.length)return!1
return A.rJ(a,s,0)>=0},
i6(a,b){var s,r,q,p,o,n
for(s=0,r=0;B.b.aa(b,"../",r);){r+=3;++s}q=B.b.fM(a,"/")
while(!0){if(!(q>0&&s>0))break
p=B.b.eb(a,"/",q-1)
if(p<0)break
o=q-p
n=o!==2
if(!n||o===3)if(B.b.I(a,p+1)===46)n=!n||B.b.I(a,p+2)===46
else n=!1
else n=!1
if(n)break;--s
q=p}return B.b.cd(a,q+1,null,B.b.au(b,r-3*s))},
jP(a){return this.de(A.mC(a))},
de(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=null
if(a.gaR().length!==0){s=a.gaR()
if(a.gd4()){r=a.gdg()
q=a.gbk(a)
p=a.gd5()?a.gcD(a):h}else{p=h
q=p
r=""}o=A.bZ(a.gaQ(a))
n=a.gcu()?a.gcc():h}else{s=i.a
if(a.gd4()){r=a.gdg()
q=a.gbk(a)
p=A.mM(a.gd5()?a.gcD(a):h,s)
o=A.bZ(a.gaQ(a))
n=a.gcu()?a.gcc():h}else{r=i.b
q=i.c
p=i.d
o=i.e
if(a.gaQ(a)==="")n=a.gcu()?a.gcc():i.f
else{m=A.rD(i,o)
if(m>0){l=B.b.A(o,0,m)
o=a.ge7()?l+A.bZ(a.gaQ(a)):l+A.bZ(i.i6(B.b.au(o,l.length),a.gaQ(a)))}else if(a.ge7())o=A.bZ(a.gaQ(a))
else if(o.length===0)if(q==null)o=s.length===0?a.gaQ(a):A.bZ(a.gaQ(a))
else o=A.bZ("/"+a.gaQ(a))
else{k=i.i6(o,a.gaQ(a))
j=s.length===0
if(!j||q!=null||B.b.Z(o,"/"))o=A.bZ(k)
else o=A.mO(k,!j||q!=null)}n=a.gcu()?a.gcc():h}}}return A.lu(s,r,q,p,o,n,a.gfJ()?a.ge6():h)},
gd4(){return this.c!=null},
gd5(){return this.d!=null},
gcu(){return this.f!=null},
gfJ(){return this.r!=null},
ge7(){return B.b.Z(this.e,"/")},
fZ(){var s,r=this,q=r.a
if(q!==""&&q!=="file")throw A.d(A.T("Cannot extract a file path from a "+q+" URI"))
q=r.f
if((q==null?"":q)!=="")throw A.d(A.T(u.z))
q=r.r
if((q==null?"":q)!=="")throw A.d(A.T(u.U))
q=$.nb()
if(A.ax(q))q=A.ou(r)
else{if(r.c!=null&&r.gbk(r)!=="")A.N(A.T(u.Q))
s=r.gfS()
A.rw(s,!1)
q=A.kv(B.b.Z(r.e,"/")?""+"/":"",s,"/")
q=q.charCodeAt(0)==0?q:q}return q},
l(a){return this.gim()},
V(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(t.jJ.b(b))if(q.a===b.gaR())if(q.c!=null===b.gd4())if(q.b===b.gdg())if(q.gbk(q)===b.gbk(b))if(q.gcD(q)===b.gcD(b))if(q.e===b.gaQ(b)){s=q.f
r=s==null
if(!r===b.gcu()){if(r)s=""
if(s===b.gcc()){s=q.r
r=s==null
if(!r===b.gfJ()){if(r)s=""
s=s===b.ge6()}else s=!1}else s=!1}else s=!1}else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s},
sm_(a){this.x=t.I.a(a)},
$ihU:1,
gaR(){return this.a},
gaQ(a){return this.e}}
A.kD.prototype={
gjW(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return A.c(m,0)
s=o.a
m=m[0]+1
r=B.b.aP(s,"?",m)
q=s.length
if(r>=0){p=A.f8(s,r+1,q,B.I,!1,!1)
q=r}else p=n
m=o.c=new A.i7("data","",n,n,A.f8(s,m,q,B.ak,!1,!1),p,n)}return m},
l(a){var s,r=this.b
if(0>=r.length)return A.c(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
A.lC.prototype={
$2(a,b){var s=this.a
if(!(a<s.length))return A.c(s,a)
s=s[a]
B.cO.oc(s,0,96,b)
return s},
$S:54}
A.lD.prototype={
$3(a,b,c){var s,r,q
for(s=b.length,r=0;r<s;++r){q=B.b.E(b,r)^96
if(!(q<96))return A.c(a,q)
a[q]=c}},
$S:24}
A.lE.prototype={
$3(a,b,c){var s,r,q
for(s=B.b.E(b,0),r=B.b.E(b,1);s<=r;++s){q=(s^96)>>>0
if(!(q<96))return A.c(a,q)
a[q]=c}},
$S:24}
A.bm.prototype={
gd4(){return this.c>0},
gd5(){return this.c>0&&this.d+1<this.e},
gcu(){return this.f<this.r},
gfJ(){return this.r<this.a.length},
ge7(){return B.b.aa(this.a,"/",this.e)},
gaR(){var s=this.w
return s==null?this.w=this.m7():s},
m7(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.b.Z(r.a,"http"))return"http"
if(q===5&&B.b.Z(r.a,"https"))return"https"
if(s&&B.b.Z(r.a,"file"))return"file"
if(q===7&&B.b.Z(r.a,"package"))return"package"
return B.b.A(r.a,0,q)},
gdg(){var s=this.c,r=this.b+3
return s>r?B.b.A(this.a,r,s-1):""},
gbk(a){var s=this.c
return s>0?B.b.A(this.a,s,this.d):""},
gcD(a){var s,r=this
if(r.gd5())return A.cv(B.b.A(r.a,r.d+1,r.e),null)
s=r.b
if(s===4&&B.b.Z(r.a,"http"))return 80
if(s===5&&B.b.Z(r.a,"https"))return 443
return 0},
gaQ(a){return B.b.A(this.a,this.e,this.f)},
gcc(){var s=this.f,r=this.r
return s<r?B.b.A(this.a,s+1,r):""},
ge6(){var s=this.r,r=this.a
return s<r.length?B.b.au(r,s+1):""},
gfS(){var s,r,q=this.e,p=this.f,o=this.a
if(B.b.aa(o,"/",q))++q
if(q===p)return B.v
s=A.a([],t.s)
for(r=q;r<p;++r)if(B.b.I(o,r)===47){B.a.p(s,B.b.A(o,q,r))
q=r+1}B.a.p(s,B.b.A(o,q,p))
return A.nG(s,t.N)},
i0(a){var s=this.d+1
return s+a.length===this.e&&B.b.aa(this.a,a,s)},
pg(){var s=this,r=s.r,q=s.a
if(r>=q.length)return s
return new A.bm(B.b.A(q,0,r),s.b,s.c,s.d,s.e,s.f,r,s.w)},
jP(a){return this.de(A.mC(a))},
de(a){if(a instanceof A.bm)return this.mq(this,a)
return this.iq().de(a)},
mq(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.b
if(c>0)return b
s=b.c
if(s>0){r=a.b
if(r<=0)return b
q=r===4
if(q&&B.b.Z(a.a,"file"))p=b.e!==b.f
else if(q&&B.b.Z(a.a,"http"))p=!b.i0("80")
else p=!(r===5&&B.b.Z(a.a,"https"))||!b.i0("443")
if(p){o=r+1
return new A.bm(B.b.A(a.a,0,o)+B.b.au(b.a,c+1),r,s+o,b.d+o,b.e+o,b.f+o,b.r+o,a.w)}else return this.iq().de(b)}n=b.e
c=b.f
if(n===c){s=b.r
if(c<s){r=a.f
o=r-c
return new A.bm(B.b.A(a.a,0,r)+B.b.au(b.a,c),a.b,a.c,a.d,a.e,c+o,s+o,a.w)}c=b.a
if(s<c.length){r=a.r
return new A.bm(B.b.A(a.a,0,r)+B.b.au(c,s),a.b,a.c,a.d,a.e,a.f,s+(r-s),a.w)}return a.pg()}s=b.a
if(B.b.aa(s,"/",n)){m=a.e
l=A.od(this)
k=l>0?l:m
o=k-n
return new A.bm(B.b.A(a.a,0,k)+B.b.au(s,n),a.b,a.c,a.d,m,c+o,b.r+o,a.w)}j=a.e
i=a.f
if(j===i&&a.c>0){for(;B.b.aa(s,"../",n);)n+=3
o=j-n+1
return new A.bm(B.b.A(a.a,0,j)+"/"+B.b.au(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.w)}h=a.a
l=A.od(this)
if(l>=0)g=l
else for(g=j;B.b.aa(h,"../",g);)g+=3
f=0
while(!0){e=n+3
if(!(e<=c&&B.b.aa(s,"../",n)))break;++f
n=e}for(d="";i>g;){--i
if(B.b.I(h,i)===47){if(f===0){d="/"
break}--f
d="/"}}if(i===g&&a.b<=0&&!B.b.aa(h,"/",j)){n-=f*3
d=""}o=i-n+d.length
return new A.bm(B.b.A(h,0,i)+d+B.b.au(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.w)},
fZ(){var s,r,q=this,p=q.b
if(p>=0){s=!(p===4&&B.b.Z(q.a,"file"))
p=s}else p=!1
if(p)throw A.d(A.T("Cannot extract a file path from a "+q.gaR()+" URI"))
p=q.f
s=q.a
if(p<s.length){if(p<q.r)throw A.d(A.T(u.z))
throw A.d(A.T(u.U))}r=$.nb()
if(A.ax(r))p=A.ou(q)
else{if(q.c<q.d)A.N(A.T(u.Q))
p=B.b.A(s,q.e,p)}return p},
gW(a){var s=this.x
return s==null?this.x=B.b.gW(this.a):s},
V(a,b){if(b==null)return!1
if(this===b)return!0
return t.jJ.b(b)&&this.a===b.l(0)},
iq(){var s=this,r=null,q=s.gaR(),p=s.gdg(),o=s.c>0?s.gbk(s):r,n=s.gd5()?s.gcD(s):r,m=s.a,l=s.f,k=B.b.A(m,s.e,l),j=s.r
l=l<j?s.gcc():r
return A.lu(q,p,o,n,k,l,j<m.length?s.ge6():r)},
l(a){return this.a},
$ihU:1}
A.i7.prototype={}
A.x.prototype={}
A.fu.prototype={
l(a){var s=String(a)
s.toString
return s}}
A.fx.prototype={
l(a){var s=String(a)
s.toString
return s}}
A.cA.prototype={
sbj(a,b){a.height=b},
spP(a,b){a.width=b},
$icA:1}
A.dR.prototype={
sfH(a,b){a.fillStyle=b},
shw(a,b){a.strokeStyle=b},
lm(a,b){return a.stroke(b)},
$idR:1}
A.bE.prototype={
gm(a){return a.length}}
A.j7.prototype={
l(a){var s=String(a)
s.toString
return s}}
A.dV.prototype={
l(a){var s,r,q,p=a.left
p.toString
s=a.top
s.toString
r=a.width
r.toString
q=a.height
q.toString
return"Rectangle ("+A.k(p)+", "+A.k(s)+") "+A.k(r)+" x "+A.k(q)},
V(a,b){var s,r
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
gW(a){var s,r,q,p=a.left
p.toString
s=a.top
s.toString
r=a.width
r.toString
q=a.height
q.toString
return A.cO(p,s,r,q)},
$imw:1}
A.p.prototype={
l(a){var s=a.localName
s.toString
return s},
$ip:1}
A.q.prototype={$iq:1}
A.aT.prototype={
m1(a,b,c,d){return a.addEventListener(b,A.dC(t.U.a(c),1),!1)},
mm(a,b,c,d){return a.removeEventListener(b,A.dC(t.U.a(c),1),!1)},
$iaT:1}
A.fX.prototype={
gm(a){return a.length}}
A.b7.prototype={$ib7:1}
A.b2.prototype={
l(a){var s=a.nodeValue
return s==null?this.lq(a):s}}
A.hp.prototype={$ihp:1}
A.hB.prototype={
gm(a){return a.length}}
A.by.prototype={}
A.ds.prototype={
gn_(a){var s=new A.ar($.aa,t.iS),r=t.hv.a(new A.kY(new A.f0(s,t.fD)))
this.mc(a)
r=A.oN(r,t.p)
r.toString
this.mn(a,r)
return s},
mn(a,b){var s=a.requestAnimationFrame(A.dC(t.hv.a(b),1))
s.toString
return s},
mc(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=["ms","moz","webkit","o"]
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+"RequestAnimationFrame"]
b.cancelAnimationFrame=b[r[q]+"CancelAnimationFrame"]||b[r[q]+"CancelRequestAnimationFrame"]}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
A.kY.prototype={
$1(a){this.a.fm(0,A.lx(a))},
$S:61}
A.eP.prototype={
l(a){var s,r,q,p=a.left
p.toString
s=a.top
s.toString
r=a.width
r.toString
q=a.height
q.toString
return"Rectangle ("+A.k(p)+", "+A.k(s)+") "+A.k(r)+" x "+A.k(q)},
V(a,b){var s,r
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
gW(a){var s,r,q,p=a.left
p.toString
s=a.top
s.toString
r=a.width
r.toString
q=a.height
q.toString
return A.cO(p,s,r,q)}}
A.mj.prototype={}
A.eR.prototype={}
A.ic.prototype={}
A.eS.prototype={
nj(){var s,r=this,q=r.b
if(q==null)return $.nd()
s=r.d
if(s!=null)J.pE(q,r.c,t.U.a(s),!1)
r.b=null
r.smk(null)
return $.nd()},
smk(a){this.d=t.U.a(a)}}
A.l6.prototype={
$1(a){return this.a.$1(t.fq.a(a))},
$S:63}
A.im.prototype={
lM(a){var s,r,q,p,o,n,m,l=this,k=4294967296
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
l.dz()
l.dz()
l.dz()
l.dz()},
dz(){var s=this,r=s.a,q=4294901760*r,p=q>>>0,o=55905*r,n=o>>>0,m=n+p+s.b
r=m>>>0
s.a=r
s.b=B.d.aT(o-n+(q-p)+(m-r),4294967296)>>>0},
$iqy:1}
A.cP.prototype={
l(a){return"Point("+A.k(this.a)+", "+A.k(this.b)+")"},
V(a,b){if(b==null)return!1
return b instanceof A.cP&&this.a===b.a&&this.b===b.b},
gW(a){return A.nW(B.h.gW(this.a),B.h.gW(this.b),0)}}
A.at.prototype={
gH(a){var s=this.$ti,r=J.v(this.a,new A.jJ(this),s.h("U<1>"))
return new A.eT(A.j(r,!1,r.$ti.h("D.E")),s.h("eT<1>"))}}
A.jJ.prototype={
$1(a){return J.F(this.a.$ti.h("i<1>").a(a))},
$S(){return this.a.$ti.h("U<1>(i<1>)")}}
A.eT.prototype={
n(){var s,r,q,p=this,o=p.a
if(o.length===0)return!1
for(s=0;r=o.length,s<r;++s)if(!o[s].n()){p.si2(null)
return!1}if(r>4294967295)A.N(A.a_(r,0,4294967295,"length",null))
q=J.nA(new Array(r),p.$ti.c)
for(s=0;s<r;++s){if(!(s<o.length))return A.c(o,s)
q[s]=o[s].gq()}p.si2(q)
return!0},
gq(){var s=this.b
return s==null?A.N(A.av("No element")):s},
si2(a){this.b=this.$ti.h("l<1>?").a(a)},
$iU:1}
A.lo.prototype={
by(){var s=this,r=s.d
r===$&&A.b("_peekToken")
s.c=r
s.d=t.q.a(s.a.aq(!1))
return r},
i5(a,b){var s=this,r=s.d
r===$&&A.b("_peekToken")
if(r.a===a){s.c=r
s.d=t.q.a(s.a.aq(!1))
return!0}else return!1},
dw(a){return this.i5(a,!1)},
aS(a){if(!this.i5(a,!1))this.eY(A.nY(a))},
eY(a){var s,r=this.by(),q=null
try{q="expected "+a+", but found "+A.k(r)}catch(s){q="parsing error expected "+a}this.cn(q,r.b)},
cn(a,b){$.fd.ih().nZ(0,a,b)},
ab(a){var s=this.c
if(s==null||s.b.aB(0,a)<0)return a
return a.o0(0,this.c.b)},
oW(){var s,r,q=this,p=A.a([],t.b7),o=q.d
o===$&&A.b("_peekToken")
s=q.a
s.e=!0
do{r=q.jG()
if(r!=null)B.a.p(p,r)}while(q.dw(19))
s.e=!1
if(p.length!==0)return new A.hC(p,q.ab(o.b))
return null},
jG(){var s,r=A.a([],t.iM),q=this.d
q===$&&A.b("_peekToken")
for(;!0;){s=this.l6(r.length===0)
if(s!=null)B.a.p(r,s)
else break}if(r.length===0)return null
return new A.cg(r,this.ab(q.b))},
oT(){var s,r,q,p,o,n,m=this.jG()
if(m!=null)for(s=m.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.f)(s),++q){p=s[q]
if(p.b!==513){o=$.fd.b
if(o==$.fd)A.N(A.mp($.fd.a))
n=new A.dd(B.L,"compound selector can not contain combinator",p.a,o.b.w)
B.a.p(o.c,n)
o.a.$1(n)}}return m},
l6(a){var s,r,q,p,o,n,m=this,l=m.d
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
q=A.c8(q.a,q.c)
p=m.d.b
p=q.b!==A.c8(p.a,p.b).b
q=p}else q=!1
if(q)s=514}o=m.ab(l.b)
n=r?new A.cE(new A.hM(o),o):m.ho()
if(n==null)l=s===515||s===516||s===517
else l=!1
if(l)n=new A.cE(new A.bP("",o),o)
if(n!=null)return new A.ez(s,n,o)
return null},
ho(){var s,r,q,p=this,o=p.d
o===$&&A.b("_peekToken")
s=o.b
o=o.a
switch(o){case 15:r=new A.cn(p.ab(p.by().b))
break
case 511:r=p.bE()
break
default:if(A.nX(o))r=p.bE()
else{if(o===9)return null
r=null}break}if(p.dw(16)){o=p.d
switch(o.a){case 15:q=new A.cn(p.ab(p.by().b))
break
case 511:q=p.bE()
break
default:p.cn("expected element name or universal(*), but found "+o.l(0),p.d.b)
q=null
break}return new A.hd(r,new A.cE(q,q.a),p.ab(s))}else if(r!=null)return new A.cE(r,p.ab(s))
else return p.l7()},
hK(a){var s,r=this.c
if(r!=null&&r.a===a){r=r.b
r=A.c8(r.a,r.c)
s=this.d
s===$&&A.b("_peekToken")
s=s.b
return r.b!==A.c8(s.a,s.b).b}return!1},
l7(){var s,r=this,q=r.d
q===$&&A.b("_peekToken")
s=q.b
switch(q.a){case 11:r.aS(11)
if(r.hK(11)){r.cn("Not a valid ID selector expected #id",r.ab(s))
return null}return new A.h_(r.bE(),r.ab(s))
case 8:r.aS(8)
if(r.hK(8)){r.cn("Not a valid class selector expected .className",r.ab(s))
return null}return new A.fI(r.bE(),r.ab(s))
case 17:return r.oU(s)
case 4:return r.oS()
case 62:r.cn("name must start with a alpha character, but found a number",s)
r.by()
break}return null},
oU(a){var s,r,q,p,o,n,m,l,k=this
k.aS(17)
s=k.dw(17)
r=k.d
r===$&&A.b("_peekToken")
if(r.a===511)q=k.bE()
else return null
p=q.b.toLowerCase()
if(k.d.a===2){r=!s
if(r&&p==="not"){k.aS(2)
o=k.ho()
k.aS(3)
r=k.ab(a)
return new A.hh(o,new A.hg(r),r)}else{if(r)r=p==="host"||p==="host-context"||p==="global-context"||p==="-acx-global-context"
else r=!1
if(r){k.aS(2)
n=k.oT()
if(n==null){k.eY("a selector argument")
return null}k.aS(3)
return new A.et(n,q,k.ab(a))}else{r=k.a
r.d=!0
k.aS(2)
m=k.ab(a)
l=k.oV()
r.d=!1
if(l instanceof A.dn){k.aS(3)
return s?new A.hu(!1,q,m):new A.et(l,q,m)}else{k.eY("CSS expression")
return null}}}}r=!s
return!r||B.e2.a.ai(p)?new A.dj(r,q,k.ab(a)):new A.di(q,k.ab(a))},
oV(){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.d
g===$&&A.b("_peekToken")
s=g.b
r=A.a([],t.oQ)
for(g=i.a,q=t.q,p=h,o=p,n=!0;n;){m=i.d
switch(m.a){case 12:s=m.b
i.c=m
i.d=q.a(g.aq(!1))
B.a.p(r,new A.hm(i.ab(s)))
o=m
break
case 34:s=m.b
i.c=m
i.d=q.a(g.aq(!1))
B.a.p(r,new A.hl(i.ab(s)))
o=m
break
case 60:i.c=m
i.d=q.a(g.aq(!1))
p=A.cv(m.gX(m),h)
o=m
break
case 62:i.c=m
i.d=q.a(g.aq(!1))
p=A.bM(m.gX(m))
o=m
break
case 25:p="'"+A.oB(i.fU(!1),!0)+"'"
return new A.ag(p,p,i.ab(s))
case 26:p='"'+A.oB(i.fU(!1),!1)+'"'
return new A.ag(p,p,i.ab(s))
case 511:p=i.bE()
break
default:n=!1}if(n&&p!=null){l=i.ab(s)
k=i.d.a
switch(k){case 600:j=new A.fS(p,o.gX(o),l)
i.c=i.d
i.d=q.a(g.aq(!1))
break
case 601:j=new A.fV(p,o.gX(o),l)
i.c=i.d
i.d=q.a(g.aq(!1))
break
case 602:case 603:case 604:case 605:case 606:case 607:j=new A.h9(k,p,o.gX(o),l)
i.c=i.d
i.d=q.a(g.aq(!1))
break
case 608:case 609:case 610:case 611:j=new A.fv(k,p,o.gX(o),l)
i.c=i.d
i.d=q.a(g.aq(!1))
break
case 612:case 613:j=new A.hN(k,p,o.gX(o),l)
i.c=i.d
i.d=q.a(g.aq(!1))
break
case 614:case 615:j=new A.fZ(k,p,o.gX(o),l)
i.c=i.d
i.d=q.a(g.aq(!1))
break
case 24:j=new A.hr(p,o.gX(o),l)
i.c=i.d
i.d=q.a(g.aq(!1))
break
case 617:j=new A.fY(p,o.gX(o),l)
i.c=i.d
i.d=q.a(g.aq(!1))
break
case 618:case 619:case 620:j=new A.hw(k,p,o.gX(o),l)
i.c=i.d
i.d=q.a(g.aq(!1))
break
case 621:j=new A.fH(k,p,o.gX(o),l)
i.c=i.d
i.d=q.a(g.aq(!1))
break
case 622:j=new A.hv(k,p,o.gX(o),l)
i.c=i.d
i.d=q.a(g.aq(!1))
break
case 623:case 624:case 625:case 626:j=new A.hZ(k,p,o.gX(o),l)
i.c=i.d
i.d=q.a(g.aq(!1))
break
default:j=p instanceof A.bP?new A.ag(p,p.b,l):new A.hk(p,o.gX(o),l)}B.a.p(r,j)
p=h}}return new A.dn(r,i.ab(s))},
oS(){var s,r,q,p=this,o=p.d
o===$&&A.b("_peekToken")
if(p.dw(4)){s=p.bE()
r=p.d.a
switch(r){case 28:case 530:case 531:case 532:case 533:case 534:p.by()
break
default:r=535}if(r!==535)q=p.d.a===511?p.bE():p.fU(!1)
else q=null
p.aS(5)
return new A.fB(r,q,s,p.ab(o.b))}return null},
fU(a){var s,r,q,p,o,n,m=this,l=m.d
l===$&&A.b("_peekToken")
s=m.a
r=s.c
s.c=!1
switch(l.a){case 25:m.by()
q=25
break
case 26:m.by()
q=26
break
default:m.cn("unexpected string",m.ab(l.b))
q=-1
break}l=t.q
p=""
while(!0){o=m.d
n=o.a
if(!(n!==q&&n!==1))break
m.c=o
m.d=l.a(s.aq(!1))
p+=o.gX(o)}s.c=r
if(q!==3)m.by()
return p.charCodeAt(0)==0?p:p},
bE(){var s=this.by(),r=s.a
if(r!==511&&!A.nX(r)){$.fd.ih()
return new A.bP("",this.ab(s.b))}return new A.bP(s.gX(s),this.ab(s.b))}}
A.bk.prototype={
gX(a){var s=this.b
return A.ad(B.w.b7(s.a.c,s.b,s.c),0,null)},
l(a){var s=A.nY(this.a),r=B.b.eq(this.gX(this))
if(s!==r){if(r.length>10)r=B.b.A(r,0,8)+"..."
return s+"("+r+")"}else return s}}
A.h0.prototype={
gX(a){return this.c}}
A.ky.prototype={
aq(a){var s,r,q,p,o,n,m,l,k=this
k.r=k.f
s=k.cp()
switch(s){case 10:case 13:case 32:case 9:return k.of()
case 0:return k.L(1)
case 64:r=k.cq()
if(A.hP(r)||r===45){q=k.f
p=k.r
k.r=q
k.cp()
k.e3()
o=k.b
n=k.r
m=A.mA(B.bs,"type",o,n,k.f-n)
if(m===-1){n=k.r
m=A.mA(B.bk,"type",o,n,k.f-n)}if(m!==-1)return k.L(m)
else{k.r=p
k.f=q}}return k.L(10)
case 46:l=k.r
if(k.oG())if(k.e4().a===60){k.r=l
return k.L(62)}else return k.L(65)
return k.L(8)
case 40:return k.L(2)
case 41:return k.L(3)
case 123:return k.L(6)
case 125:return k.L(7)
case 91:return k.L(4)
case 93:if(k.ac(93)&&k.ac(62))return k.cB()
return k.L(5)
case 35:return k.L(11)
case 43:if(k.ib(s))return k.e4()
return k.L(12)
case 45:if(k.d||!1)return k.L(34)
else if(k.ib(s))return k.e4()
else if(A.hP(s)||s===45)return k.e3()
return k.L(34)
case 62:return k.L(13)
case 126:if(k.ac(61))return k.L(530)
return k.L(14)
case 42:if(k.ac(61))return k.L(534)
return k.L(15)
case 38:return k.L(36)
case 124:if(k.ac(61))return k.L(531)
return k.L(16)
case 58:return k.L(17)
case 44:return k.L(19)
case 59:return k.L(9)
case 37:return k.L(24)
case 39:return k.L(25)
case 34:return k.L(26)
case 47:if(k.ac(42))return k.oe()
return k.L(27)
case 60:if(k.ac(33))if(k.ac(45)&&k.ac(45))return k.od()
else{if(k.ac(91)){o=k.Q.a
o=k.ac(B.b.E(o,0))&&k.ac(B.b.E(o,1))&&k.ac(B.b.E(o,2))&&k.ac(B.b.E(o,3))&&k.ac(B.b.E(o,4))&&k.ac(91)}else o=!1
if(o)return k.cB()}return k.L(32)
case 61:return k.L(28)
case 94:if(k.ac(61))return k.L(532)
return k.L(30)
case 36:if(k.ac(61))return k.L(533)
return k.L(31)
case 33:return k.e3()
default:if(!k.e&&s===92)return k.L(35)
if(k.c)o=(s===k.w||s===k.x)&&k.cq()===k.y
else o=!1
if(o){k.cp()
k.r=k.f
return k.L(508)}else{o=s===118
if(o&&k.ac(97)&&k.ac(114)&&k.ac(45))return k.L(400)
else if(o&&k.ac(97)&&k.ac(114)&&k.cq()===45)return k.L(401)
else if(A.hP(s)||s===45)return k.e3()
else if(s>=48&&s<=57)return k.e4()}return k.L(65)}},
cB(){return this.aq(!1)},
e3(){var s,r,q,p,o,n,m,l,k,j=this,i=A.a([],t.t),h=j.f
j.f=j.r
r=j.b
s=r.length
while(!0){q=j.f
if(!(q<s)){s=q
break}p=B.b.I(r,q)
if(p===92&&j.c){o=j.f=q+1
j.nR(o+6)
q=j.f
if(q!==o){B.a.p(i,A.cv("0x"+B.b.A(r,o,q),null))
q=j.f
if(q===s){s=q
break}p=B.b.I(r,q)
if(q-o!==6)n=p===32||p===9||p===13||p===10
else n=!1
if(n)j.f=q+1}else{if(q===s){s=q
break}j.f=q+1
B.a.p(i,B.b.I(r,q))}}else{if(q>=h)if(j.d)if(!A.hP(p))n=p>=48&&p<=57
else n=!0
else{if(!A.hP(p))n=p>=48&&p<=57
else n=!0
n=n||p===45}else n=!0
if(n){B.a.p(i,p);++j.f}else{s=q
break}}}m=j.a.eN(0,j.r,s)
l=A.ad(i,0,null)
if(!j.d&&!j.e){s=j.r
k=A.mA(B.ad,"unit",r,s,j.f-s)}else k=-1
if(k===-1)k=B.b.A(r,j.r,j.f)==="!important"?505:-1
return new A.h0(l,k>=0?k:511,m)},
e4(){var s,r=this
r.j4()
if(r.cq()===46){r.cp()
s=r.cq()
if(s>=48&&s<=57){r.j4()
return r.L(62)}else --r.f}return r.L(60)},
oG(){var s=this.f,r=this.b
if(s<r.length){r=B.b.I(r,s)
r=r>=48&&r<=57}else r=!1
if(r){this.f=s+1
return!0}return!1},
nR(a){var s,r,q=this.b
a=Math.min(a,q.length)
for(;s=this.f,s<a;){r=B.b.I(q,s)
if(!(r>=48&&r<=57))if(!(r>=97&&r<=102))r=r>=65&&r<=70
else r=!0
else r=!0
if(r)this.f=s+1
else return}},
od(){var s,r,q,p,o,n=this
for(;!0;){s=n.cp()
if(s===0){r=n.a
q=n.r
p=n.f
o=new A.aq(r,q,p)
o.aH(r,q,p)
return new A.bk(67,o)}else if(s===45)if(n.ac(45))if(n.ac(62))if(n.c)return n.cB()
else{r=n.a
q=n.r
p=n.f
o=new A.aq(r,q,p)
o.aH(r,q,p)
return new A.bk(504,o)}}},
oe(){var s,r,q,p,o,n=this
for(;!0;){s=n.cp()
if(s===0){r=n.a
q=n.r
p=n.f
o=new A.aq(r,q,p)
o.aH(r,q,p)
return new A.bk(67,o)}else if(s===42)if(n.ac(47))if(n.c)return n.cB()
else{r=n.a
q=n.r
p=n.f
o=new A.aq(r,q,p)
o.aH(r,q,p)
return new A.bk(64,o)}}}}
A.kz.prototype={
cp(){var s=this.f,r=this.b
if(s<r.length){this.f=s+1
return B.b.I(r,s)}else return 0},
ic(a){var s=this.f+a,r=this.b
if(s<r.length)return B.b.I(r,s)
else return 0},
cq(){return this.ic(0)},
ac(a){var s=this.f,r=this.b
if(s<r.length)if(B.b.I(r,s)===a){this.f=s+1
return!0}else return!1
else return!1},
ib(a){var s,r
if(a>=48&&a<=57)return!0
s=this.cq()
if(a===46)return s>=48&&s<=57
if(a===43||a===45){if(!(s>=48&&s<=57))if(s===46){r=this.ic(1)
r=r>=48&&r<=57}else r=!1
else r=!0
return r}return!1},
L(a){return new A.bk(a,this.a.eN(0,this.r,this.f))},
of(){var s,r,q,p,o=this,n=--o.f
for(s=o.b,r=s.length;n<r;n=q){q=o.f=n+1
p=B.b.I(s,n)
if(!(p===32||p===9||p===13))if(p===10){if(!o.c){n=o.a
s=o.r
r=new A.aq(n,s,q)
r.aH(n,s,q)
return new A.bk(63,r)}}else{n=o.f=q-1
if(o.c)return o.cB()
else{s=o.a
r=o.r
q=new A.aq(s,r,n)
q.aH(s,r,n)
return new A.bk(63,q)}}}return o.L(1)},
j4(){var s,r,q,p
for(s=this.b,r=s.length;q=this.f,q<r;){p=B.b.I(s,q)
if(p>=48&&p<=57)this.f=q+1
else return}}}
A.de.prototype={
l(a){return"MessageLevel."+this.b}}
A.dd.prototype={
l(a){var s=this,r=s.d&&B.al.ai(s.a),q=r?B.al.k(0,s.a):null,p=r?""+A.k(q):""
p=p+A.k(B.c7.k(0,s.a))+" "
if(r)p+="\x1b[0m"
p=p+"on "+s.c.jw(0,s.b,q)
return p.charCodeAt(0)==0?p:p}}
A.jZ.prototype={
nZ(a,b,c){var s=new A.dd(B.L,b,c,this.b.w)
B.a.p(this.c,s)
this.a.$1(s)}}
A.kf.prototype={}
A.bP.prototype={
P(a){return null},
l(a){var s=this.a
s=A.ad(B.w.b7(s.a.c,s.b,s.c),0,null)
return s},
gah(a){return this.b}}
A.cn.prototype={
P(a){return null},
gah(a){return"*"}}
A.hM.prototype={
P(a){return null},
gah(a){return"&"}}
A.hg.prototype={
P(a){return null},
gah(a){return"not"}}
A.hC.prototype={
P(a){return B.a.b1(this.b,a.gjY())}}
A.cg.prototype={
gm(a){return this.b.length},
P(a){return a.jZ(this)}}
A.ez.prototype={
P(a){this.c.P(a)
return null},
l(a){var s=this.c.b
return s.gah(s)}}
A.aY.prototype={
gah(a){var s=this.b
return s.gah(s)},
P(a){return t.bF.a(this.b).P(a)}}
A.cE.prototype={
P(a){var s=this.b
return s instanceof A.cn||a.a.x===s.gah(s).toLowerCase()},
l(a){var s=this.b
return s.gah(s)}}
A.hd.prototype={
gjx(){var s=this.d
if(s instanceof A.cn)s="*"
else s=s==null?"":t.gx.a(s).b
return s},
P(a){return a.pJ(this)},
l(a){var s=this.gjx(),r=t.g9.a(this.b).b
return s+"|"+r.gah(r)}}
A.fB.prototype={
oE(){switch(this.d){case 28:return"="
case 530:return"~="
case 531:return"|="
case 532:return"^="
case 533:return"$="
case 534:return"*="
case 535:return""}return null},
pH(){var s=this.e
if(s!=null)if(s instanceof A.bP)return s.l(0)
else return'"'+A.k(s)+'"'
else return""},
P(a){return a.pI(this)},
l(a){var s=this.b
return"["+s.gah(s)+A.k(this.oE())+this.pH()+"]"}}
A.h_.prototype={
P(a){var s=a.a.b.k(0,"id"),r=s==null?"":s,q=this.b
return r===q.gah(q)},
l(a){return"#"+A.k(this.b)}}
A.fI.prototype={
P(a){var s,r=a.a
r.toString
s=this.b
s=s.gah(s)
return new A.fR(r).ek().F(0,s)},
l(a){return"."+A.k(this.b)}}
A.di.prototype={
P(a){return a.pL(this)},
l(a){var s=this.b
return":"+s.gah(s)}}
A.dj.prototype={
P(a){a.pN(this)
return!1},
l(a){var s=this.d?":":"::",r=this.b
return s+r.gah(r)}}
A.et.prototype={
P(a){return a.pK(this)}}
A.hu.prototype={
P(a){return a.pM(this)}}
A.dn.prototype={
P(a){a.my(this.b)
return null}}
A.hh.prototype={
P(a){return!A.ix(this.d.P(a))}}
A.hm.prototype={
P(a){return null}}
A.hl.prototype={
P(a){return null}}
A.ag.prototype={
P(a){return null}}
A.hk.prototype={
P(a){return null}}
A.bl.prototype={
P(a){return null},
l(a){return this.d+A.k(A.qU(this.f))}}
A.h9.prototype={
P(a){return null}}
A.hr.prototype={
P(a){return null}}
A.fS.prototype={
P(a){return null}}
A.fV.prototype={
P(a){return null}}
A.fv.prototype={
P(a){return null}}
A.hN.prototype={
P(a){return null}}
A.fZ.prototype={
P(a){return null}}
A.fY.prototype={
P(a){return null}}
A.hw.prototype={
P(a){return null}}
A.fH.prototype={
P(a){return null}}
A.hv.prototype={
P(a){return null}}
A.hZ.prototype={
P(a){return null}}
A.S.prototype={}
A.aj.prototype={}
A.i_.prototype={
my(a){var s
t.fr.a(a)
for(s=0;s<a.length;++s)a[s].P(this)},
$io6:1}
A.aC.prototype={
l(a){var s=this.a,r=this.b
return s!=null?s+":"+r:r},
gW(a){return 37*(37*(J.aH(this.a)&2097151)+B.b.gW(this.b)&2097151)+B.b.gW(this.c)&1073741823},
aB(a,b){var s,r,q
if(!(b instanceof A.aC))return 1
s=this.a
if(s==null)s=""
r=b.a
q=B.b.aB(s,r==null?"":r)
if(q!==0)return q
q=B.b.aB(this.b,b.b)
if(q!==0)return q
return B.b.aB(this.c,b.c)},
V(a,b){if(b==null)return!1
return b instanceof A.aC&&this.a==b.a&&this.b===b.b&&this.c===b.c},
$iaf:1}
A.il.prototype={}
A.ln.prototype={}
A.ib.prototype={}
A.ah.prototype={
gak(a){var s,r=this,q=r.c
if(q===$){s=A.a([],t.d)
r.c!==$&&A.C("nodes")
q=r.c=new A.ac(r,s)}return q},
giO(a){var s,r=this,q=r.d
if(q===$){s=new A.fW(r.gak(r))
r.d!==$&&A.C("children")
r.slX(s)
q=s}return q},
el(a){var s=this.a
if(s!=null)B.a.a_(s.gak(s).a,this)
return this},
or(a,b,c){var s,r,q=this
if(c==null)q.gak(q).p(0,b)
else{s=q.gak(q)
r=q.gak(q)
s.bF(0,r.aj(r,c),b)}},
dt(a,b,c){var s,r,q,p,o,n,m,l
A.iA(c,t.J,"T","_clone")
c.a(a)
if(b)for(s=this.gak(this).a,r=A.w(s),s=new J.az(s,s.length,r.h("az<1>")),r=r.c,q=t.d;s.n();){p=s.d
p=(p==null?r.a(p):p).cZ(0,!0)
o=a.c
if(o===$){n=A.a([],q)
a.c!==$&&A.C("nodes")
o=a.c=new A.ac(a,n)}n=p.a
if(n!=null){m=n.c
if(m===$){l=A.a([],q)
n.c!==$&&A.C("nodes")
m=n.c=new A.ac(n,l)}B.a.a_(m.a,p)}p.a=o.b
o.bP(0,p)}return a},
scW(a,b){this.b=t.oP.a(b)},
slX(a){this.d=t.jB.a(a)}}
A.dU.prototype={
l(a){return"#document"},
cZ(a,b){return this.dt(A.nt(),!0,t.dA)}}
A.fP.prototype={
l(a){var s,r=this,q=r.x,p=q==null
if(!p||r.y!=null){if(p)q=""
s=r.y
if(s==null)s=""
return"<!DOCTYPE "+A.k(r.w)+' "'+q+'" "'+s+'">'}else return"<!DOCTYPE "+A.k(r.w)+">"},
cZ(a,b){return A.nu(this.w,this.x,this.y)}}
A.bT.prototype={
l(a){var s=J.bB(this.w)
this.w=s
return'"'+s+'"'},
cZ(a,b){var s=J.bB(this.w)
this.w=s
return A.mz(s)},
iG(a,b){var s=this.w;(!(s instanceof A.a2)?this.w=new A.a2(A.k(s)):s).a+=b}}
A.V.prototype={
geg(a){var s,r,q,p,o=this.a
if(o==null)return null
s=o.gak(o)
for(r=s.aj(s,this)-1,o=s.a,q=o.length;r>=0;--r){if(!(r<q))return A.c(o,r)
p=o[r]
if(p instanceof A.V)return p}return null},
gjy(a){var s,r,q,p,o,n=this.a
if(n==null)return null
s=n.gak(n)
for(r=s.aj(s,this)+1,q=s.a,p=q.length;r<p;++r){if(!(r>=0))return A.c(q,r)
o=q[r]
if(o instanceof A.V)return o}return null},
l(a){var s=A.qo(this.w)
return"<"+(s==null?"":s+" ")+A.k(this.x)+">"},
cZ(a,b){var s=this,r=A.mi(s.x,s.w)
r.scW(0,A.ha(s.b,t.K,t.N))
return s.dt(r,b,t.h)}}
A.fL.prototype={
l(a){return"<!-- "+this.w+" -->"},
cZ(a,b){return A.ns(this.w)}}
A.ac.prototype={
p(a,b){t.J.a(b)
b.el(0)
b.a=this.b
this.bP(0,b)},
M(a,b){var s,r,q,p,o,n,m,l,k=this.mf(t.hl.a(b))
for(s=A.w(k).h("X<1>"),r=new A.X(k,s),r=new A.L(r,r.gm(r),s.h("L<D.E>")),q=this.b,s=s.h("D.E"),p=t.d;r.n();){o=r.d
if(o==null)o=s.a(o)
n=o.a
if(n!=null){m=n.c
if(m===$){l=A.a([],p)
n.c!==$&&A.C("nodes")
m=n.c=new A.ac(n,l)}B.a.a_(m.a,o)}o.a=q}this.ly(0,k)},
bF(a,b,c){c.el(0)
c.a=this.b
this.hx(0,b,c)},
bB(a){var s,r,q
for(s=this.a,r=A.w(s),s=new J.az(s,s.length,r.h("az<1>")),r=r.c;s.n();){q=s.d;(q==null?r.a(q):q).a=null}this.lw(this)},
v(a,b,c){var s
t.J.a(c)
s=this.a
if(!(b>=0&&b<s.length))return A.c(s,b)
s[b].a=null
c.el(0)
c.a=this.b
this.lx(0,b,c)},
mf(a){var s,r
t.hl.a(a)
s=A.a([],t.d)
for(r=J.F(a);r.n();)B.a.p(s,r.gq())
return s}}
A.fW.prototype={
v(a,b,c){var s,r,q
t.h.a(c)
s=t.v
s=A.j(new A.al(this.a,s),!1,s.h("i.E"))
if(!(b>=0&&b<s.length))return A.c(s,b)
s=s[b]
r=s.a
if(r==null)A.N(A.T("Node must have a parent to replace it."))
r=r.gak(r)
q=s.a
q=q.gak(q)
r.v(0,q.aj(q,s),c)},
sm(a,b){var s=t.v,r=A.j(new A.al(this.a,s),!1,s.h("i.E")).length
if(b>=r)return
else if(b<0)throw A.d(A.a8("Invalid list length",null))
this.ph(0,b,r)},
p(a,b){this.a.p(0,t.h.a(b))},
M(a,b){var s,r,q,p,o,n,m
for(s=J.F(t.cj.a(b)),r=this.a,q=t.d;s.n();){p=s.gq()
o=p.a
if(o!=null){n=o.c
if(n===$){m=A.a([],q)
o.c!==$&&A.C("nodes")
n=o.c=new A.ac(o,m)}B.a.a_(n.a,p)}p.a=r.b
r.bP(0,p)}},
cM(a,b){t.dU.a(b)
throw A.d(A.T("TODO(jacobr): should we impl?"))},
ph(a,b,c){var s=t.v
B.a.bb(B.a.b7(A.j(new A.al(this.a,s),!1,s.h("i.E")),b,c),new A.jd())},
ec(a,b,c){var s,r
c.h("0(V)").a(b)
s=t.v
s=A.j(new A.al(this.a,s),!1,s.h("i.E"))
r=A.w(s)
return new A.I(s,r.Y(c).h("1(2)").a(b),r.h("@<1>").Y(c).h("I<1,2>"))},
er(a,b){var s,r
t.cT.a(b)
s=t.v
s=A.j(new A.al(this.a,s),!1,s.h("i.E"))
r=A.w(s)
return new A.ap(s,r.h("B(1)").a(b),r.h("ap<1>"))},
ct(a,b){var s
t.cT.a(b)
s=t.v
return B.a.ct(A.j(new A.al(this.a,s),!1,s.h("i.E")),b)},
af(a,b){var s=t.v
s=A.j(new A.al(this.a,s),!1,s.h("i.E"))
if(!(b>=0&&b<s.length))return A.c(s,b)
return s[b]},
gag(a){var s=t.v
return A.j(new A.al(this.a,s),!1,s.h("i.E")).length===0},
gm(a){var s=t.v
return A.j(new A.al(this.a,s),!1,s.h("i.E")).length},
k(a,b){var s=t.v
s=A.j(new A.al(this.a,s),!1,s.h("i.E"))
if(!(b>=0&&b<s.length))return A.c(s,b)
return s[b]},
gH(a){var s=t.v
s=A.j(new A.al(this.a,s),!1,s.h("i.E"))
return new J.az(s,s.length,A.w(s).h("az<1>"))},
dm(a,b,c){var s=t.v
s=A.j(new A.al(this.a,s),!1,s.h("i.E"))
A.aF(b,c,s.length)
return A.bb(s,b,c,A.w(s).c)},
gap(a){var s=t.v
return B.a.gap(A.j(new A.al(this.a,s),!1,s.h("i.E")))},
gt(a){var s=t.v
return B.a.gt(A.j(new A.al(this.a,s),!1,s.h("i.E")))},
$iQ:1,
$il:1}
A.jd.prototype={
$1(a){return t.h.a(a).el(0)},
$S:68}
A.i8.prototype={}
A.i9.prototype={}
A.ia.prototype={}
A.id.prototype={}
A.ie.prototype={}
A.ii.prototype={}
A.jC.prototype={
gaE(){var s=this.x
return s===$?this.x=this.gi_():s},
gi_(){var s=this,r=s.Q
if(r===$){r!==$&&A.C("_initialPhase")
r=s.Q=new A.bu(s,s.d)}return r},
ghN(){var s=this,r=s.as
if(r===$){r!==$&&A.C("_beforeHtmlPhase")
r=s.as=new A.fE(s,s.d)}return r},
gm4(){var s=this,r=s.at
if(r===$){r!==$&&A.C("_beforeHeadPhase")
r=s.at=new A.dP(s,s.d)}return r},
gc2(){var s=this,r=s.ax
if(r===$){r!==$&&A.C("_inHeadPhase")
r=s.ax=new A.h2(s,s.d)}return r},
ga5(){var s=this,r=s.ch
if(r===$){r!==$&&A.C("_inBodyPhase")
r=s.ch=new A.d7(s,s.d)}return r},
gio(){var s=this,r=s.CW
if(r===$){r!==$&&A.C("_textPhase")
r=s.CW=new A.hL(s,s.d)}return r},
gaJ(){var s=this,r=s.cx
if(r===$){r!==$&&A.C("_inTablePhase")
r=s.cx=new A.eb(s,s.d)}return r},
gdu(){var s,r=this,q=r.cy
if(q===$){s=A.a([],t.ks)
r.cy!==$&&A.C("_inTableTextPhase")
q=r.cy=new A.d9(s,r,r.d)}return q},
ghW(){var s=this,r=s.db
if(r===$){r!==$&&A.C("_inCaptionPhase")
r=s.db=new A.e6(s,s.d)}return r},
ghY(){var s=this,r=s.dx
if(r===$){r!==$&&A.C("_inColumnGroupPhase")
r=s.dx=new A.e7(s,s.d)}return r},
gf2(){var s=this,r=s.dy
if(r===$){r!==$&&A.C("_inTableBodyPhase")
r=s.dy=new A.cF(s,s.d)}return r},
gf1(){var s=this,r=s.fr
if(r===$){r!==$&&A.C("_inRowPhase")
r=s.fr=new A.e9(s,s.d)}return r},
ghX(){var s=this,r=s.fx
if(r===$){r!==$&&A.C("_inCellPhase")
r=s.fx=new A.d8(s,s.d)}return r},
gc3(){var s=this,r=s.fy
if(r===$){r!==$&&A.C("_inSelectPhase")
r=s.fy=new A.ea(s,s.d)}return r},
ghZ(){var s=this,r=s.k2
if(r===$){r!==$&&A.C("_inFramesetPhase")
r=s.k2=new A.e8(s,s.d)}return r},
ml(){var s
this.bo(0)
for(;!0;)try{this.oA()
break}catch(s){if(A.bq(s) instanceof A.ki)this.bo(0)
else throw s}},
bo(a){var s=this
s.c.bo(0)
s.d.bo(0)
s.f=!1
B.a.bB(s.e)
s.r="no quirks"
s.x=s.gi_()
s.z=!0},
jr(a){var s,r,q=a.x
if(q==="annotation-xml"&&a.w==="http://www.w3.org/1998/Math/MathML"){q=a.b.k(0,"encoding")
if(q==null)s=null
else{r=t.E
s=A.ad(new A.I(new A.a9(q),r.h("h(u.E)").a(A.bL()),r.h("I<u.E,h>")),0,null)}return s==="text/html"||s==="application/xhtml+xml"}else return B.a.F(B.bw,new A.o(a.w,q,t.iA))},
on(a,b){var s,r=this.d,q=r.c
if(q.length===0)return!1
s=B.a.gt(q)
q=s.w
if(q==r.a)return!1
r=s.x
if(B.a.F(B.af,new A.o(q,r,t.iA))){if(b===2){q=t.ny.a(a).b
q=q!=="mglyph"&&q!=="malignmark"}else q=!1
if(q)return!1
if(b===1||b===0)return!1}if(r==="annotation-xml"&&b===2&&t.ny.a(a).b==="svg")return!1
if(this.jr(s))if(b===2||b===1||b===0)return!1
return!0},
oA(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6="_initialPhase"
for(s=a5.c,r=a5.d,q=t.i,p=t.cw,o=t.ia,n=t.ny,m=t.lH,l=t.p1,k=a5.e,j=t.jK,i=s.a,h=t.z;s.n();){g=s.at
g.toString
for(f=g;f!=null;){e=f.gca(f)
if(e===6){j.a(f)
d=f.a
c=f.c
if(c==null){c=f.c=J.bB(f.b)
f.b=null}if(d==null){b=i.w
if(b==null)d=null
else{a=i.y
new A.b0(b,a).bf(b,a)
d=new A.aq(b,a,a)
d.aH(b,a,a)}}B.a.p(k,new A.aW(c,d,f.e))
f=null}else{a0=a5.x
if(a0===$){a0=a5.Q
if(a0===$){a1=new A.bu(a5,r)
a0!==$&&A.C(a6)
a5.Q=a1
a0=a1}a5.x=a0}if(a5.on(g,e)){a0=a5.id
if(a0===$){a1=new A.h1(a5,r)
a0!==$&&A.C("_inForeignContentPhase")
a5.id=a1
a0=a1}a2=a0}else a2=a0
switch(e){case 1:f=a2.a2(l.a(f))
break
case 0:f=a2.aL(m.a(f))
break
case 2:f=a2.J(n.a(f))
break
case 3:f=a2.O(o.a(f))
break
case 4:f=a2.cb(p.a(f))
break
case 5:f=a2.jF(q.a(f))
break}}}if(g instanceof A.ci)if(g.c&&!g.r){d=g.a
g=A.y(["name",g.b],h,h)
if(d==null){c=i.w
if(c==null)d=null
else{b=i.y
new A.b0(c,b).bf(c,b)
d=new A.aq(c,b,b)
d.aH(c,b,b)}}B.a.p(k,new A.aW("non-void-element-with-trailing-solidus",d,g))}}a3=A.a([],t.gg)
for(a4=!0;a4;){a0=a5.x
if(a0===$){a0=a5.Q
if(a0===$){a1=new A.bu(a5,r)
a0!==$&&A.C(a6)
a5.Q=a1
a0=a1}a0=a5.x=a0}B.a.p(a3,a0)
a0=a5.x
if(a0===$){a0=a5.Q
if(a0===$){a1=new A.bu(a5,r)
a0!==$&&A.C(a6)
a5.Q=a1
a0=a1}a0=a5.x=a0}a4=a0.a8()}},
gi4(){var s=this.c.a,r=s.w
if(r==null)s=null
else{s=A.c8(r,s.y)
r=s.b
r=A.mD(s.a,r,r)
s=r}return s},
G(a,b,c){var s=new A.aW(b,a==null?this.gi4():a,c)
B.a.p(this.e,s)},
a1(a,b){return this.G(a,b,B.am)},
iy(a){var s=a.e.a_(0,"definitionurl")
if(s!=null)a.e.v(0,"definitionURL",s)},
iz(a){var s,r,q,p,o,n
for(s=a.e,r=A.A(s).h("aU<1>"),r=A.j(new A.aU(s,r),!1,r.h("i.E")),s=r.length,q=0;q<s;++q){p=A.aw(r[q])
o=B.c9.k(0,p)
if(o!=null){n=a.e
p=n.a_(0,p)
p.toString
n.v(0,o,p)}}},
fa(a){var s,r,q,p,o,n
for(s=a.e,r=A.A(s).h("aU<1>"),r=A.j(new A.aU(s,r),!1,r.h("i.E")),s=r.length,q=0;q<s;++q){p=A.aw(r[q])
o=B.c8.k(0,p)
if(o!=null){n=a.e
p=n.a_(0,p)
p.toString
n.v(0,o,p)}}},
jO(){var s,r,q,p,o,n,m,l,k,j=this,i="_inCellPhase",h="_inTableBodyPhase",g="_inBodyPhase"
for(s=j.d,r=s.c,q=A.w(r).h("X<1>"),p=new A.X(r,q),p=new A.L(p,p.gm(p),q.h("L<D.E>")),q=q.h("D.E"),o=s.a;p.n();){n=p.d
if(n==null)n=q.a(n)
m=n.x
if(0>=r.length)return A.c(r,0)
l=n===r[0]
if(l)m=j.w
switch(m){case"select":case"colgroup":case"head":case"html":break}if(!l&&n.w!=o)continue
switch(m){case"select":k=j.fy
if(k===$){k!==$&&A.C("_inSelectPhase")
k=j.fy=new A.ea(j,s)}j.x=k
return
case"td":k=j.fx
if(k===$){k!==$&&A.C(i)
k=j.fx=new A.d8(j,s)}j.x=k
return
case"th":k=j.fx
if(k===$){k!==$&&A.C(i)
k=j.fx=new A.d8(j,s)}j.x=k
return
case"tr":k=j.fr
if(k===$){k!==$&&A.C("_inRowPhase")
k=j.fr=new A.e9(j,s)}j.x=k
return
case"tbody":k=j.dy
if(k===$){k!==$&&A.C(h)
k=j.dy=new A.cF(j,s)}j.x=k
return
case"thead":k=j.dy
if(k===$){k!==$&&A.C(h)
k=j.dy=new A.cF(j,s)}j.x=k
return
case"tfoot":k=j.dy
if(k===$){k!==$&&A.C(h)
k=j.dy=new A.cF(j,s)}j.x=k
return
case"caption":k=j.db
if(k===$){k!==$&&A.C("_inCaptionPhase")
k=j.db=new A.e6(j,s)}j.x=k
return
case"colgroup":k=j.dx
if(k===$){k!==$&&A.C("_inColumnGroupPhase")
k=j.dx=new A.e7(j,s)}j.x=k
return
case"table":k=j.cx
if(k===$){k!==$&&A.C("_inTablePhase")
k=j.cx=new A.eb(j,s)}j.x=k
return
case"head":k=j.ch
if(k===$){k!==$&&A.C(g)
k=j.ch=new A.d7(j,s)}j.x=k
return
case"body":k=j.ch
if(k===$){k!==$&&A.C(g)
k=j.ch=new A.d7(j,s)}j.x=k
return
case"frameset":k=j.k2
if(k===$){k!==$&&A.C("_inFramesetPhase")
k=j.k2=new A.e8(j,s)}j.x=k
return
case"html":k=j.at
if(k===$){k!==$&&A.C("_beforeHeadPhase")
k=j.at=new A.dP(j,s)}j.x=k
return}}j.x=j.ga5()},
dc(a,b){var s,r,q=this
q.d.N(a)
s=t.c
r=q.c
if(b==="RAWTEXT")r.si(s.a(r.gej()))
else r.si(s.a(r.gcF()))
q.y=q.gaE()
q.x=q.gio()}}
A.a4.prototype={
a8(){throw A.d(A.hR(null))},
cb(a){var s=this.b
s.cv(a,B.a.gt(s.c))
return null},
jF(a){this.a.a1(a.a,"unexpected-doctype")
return null},
a2(a){this.b.bY(a.gaC(a),a.a)
return null},
aL(a){this.b.bY(a.gaC(a),a.a)
return null},
J(a){throw A.d(A.hR(null))},
be(a){var s,r=this.a
if(!r.f&&a.b==="html")r.a1(a.a,"non-html-root")
s=this.b.c
if(0>=s.length)return A.c(s,0)
s[0].e=a.a
a.e.bb(0,new A.ke(this))
r.f=!1
return null},
O(a){throw A.d(A.hR(null))},
cC(a){var s,r=a.b,q=this.b.c
if(0>=q.length)return A.c(q,-1)
s=q.pop()
for(;s.x!=r;){if(0>=q.length)return A.c(q,-1)
s=q.pop()}}}
A.ke.prototype={
$2(a,b){var s
t.K.a(a)
A.aw(b)
s=this.a.b.c
if(0>=s.length)return A.c(s,0)
s[0].b.ei(a,new A.kd(b))},
$S:28}
A.kd.prototype={
$0(){return this.a},
$S:6}
A.bu.prototype={
aL(a){return null},
cb(a){var s=this.b,r=s.b
r===$&&A.b("document")
s.cv(a,r)
return null},
jF(a){var s,r,q,p,o,n=this,m=a.d,l=a.b
if(l==null)s=null
else{r=t.E
s=A.ad(new A.I(new A.a9(l),r.h("h(u.E)").a(A.bL()),r.h("I<u.E,h>")),0,null)}q=a.c
p=a.e
if(m==="html")if(s==null)l=q!=null&&q!=="about:legacy-compat"
else l=!0
else l=!0
if(l)n.a.a1(a.a,"unknown-doctype")
if(s==null)s=""
o=A.nu(a.d,a.b,a.c)
o.e=a.a
l=n.b.b
l===$&&A.b("document")
l.gak(l).p(0,o)
if(p)if(a.d==="html"){l=B.b.ghv(s)
if(!B.a.b1(B.bd,l))if(!B.a.F(B.br,s))if(!(B.a.b1(B.ae,l)&&q==null))l=q!=null&&q.toLowerCase()==="http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd"
else l=!0
else l=!0
else l=!0}else l=!0
else l=!0
if(l)n.a.r="quirks"
else{l=B.b.ghv(s)
if(!B.a.b1(B.bx,l))l=B.a.b1(B.ae,l)&&q!=null
else l=!0
if(l)n.a.r="limited quirks"}l=n.a
l.x=l.ghN()
return null},
bz(){var s=this.a
s.r="quirks"
s.x=s.ghN()},
a2(a){this.a.a1(a.a,"expected-doctype-but-got-chars")
this.bz()
return a},
J(a){var s=t.z
this.a.G(a.a,"expected-doctype-but-got-start-tag",A.y(["name",a.b],s,s))
this.bz()
return a},
O(a){var s=t.z
this.a.G(a.a,"expected-doctype-but-got-end-tag",A.y(["name",a.b],s,s))
this.bz()
return a},
a8(){var s=this.a
s.a1(s.gi4(),"expected-doctype-but-got-eof")
this.bz()
return!0}}
A.fE.prototype={
e9(){var s=this.b,r=s.iY(0,A.aJ("html",A.ab(null,null,t.K,t.N),null,!1))
B.a.p(s.c,r)
s=s.b
s===$&&A.b("document")
s.gak(s).p(0,r)
s=this.a
s.x=s.gm4()},
a8(){this.e9()
return!0},
cb(a){var s=this.b,r=s.b
r===$&&A.b("document")
s.cv(a,r)
return null},
aL(a){return null},
a2(a){this.e9()
return a},
J(a){if(a.b==="html")this.a.f=!0
this.e9()
return a},
O(a){var s,r=a.b
switch(r){case"head":case"body":case"html":case"br":this.e9()
return a
default:s=t.z
this.a.G(a.a,"unexpected-end-tag-before-html",A.y(["name",r],s,s))
return null}}}
A.dP.prototype={
J(a){var s=null
switch(a.b){case"html":return this.a.ga5().J(a)
case"head":this.cN(a)
return s
default:this.cN(A.aJ("head",A.ab(s,s,t.K,t.N),s,!1))
return a}},
O(a){var s,r=null,q=a.b
switch(q){case"head":case"body":case"html":case"br":this.cN(A.aJ("head",A.ab(r,r,t.K,t.N),r,!1))
return a
default:s=t.z
this.a.G(a.a,"end-tag-after-implied-root",A.y(["name",q],s,s))
return r}},
a8(){this.cN(A.aJ("head",A.ab(null,null,t.K,t.N),null,!1))
return!0},
aL(a){return null},
a2(a){this.cN(A.aJ("head",A.ab(null,null,t.K,t.N),null,!1))
return a},
cN(a){var s=this.b
s.N(a)
s.soj(B.a.gt(s.c))
s=this.a
s.x=s.gc2()}}
A.h2.prototype={
J(a){var s,r,q,p,o,n=this,m=null
switch(a.b){case"html":return n.a.ga5().J(a)
case"title":n.a.dc(a,"RCDATA")
return m
case"noscript":case"noframes":case"style":n.a.dc(a,"RAWTEXT")
return m
case"script":n.b.N(a)
s=n.a
r=s.c
r.si(t.c.a(r.gbN()))
s.y=s.gaE()
s.x=s.gio()
return m
case"base":case"basefont":case"bgsound":case"command":case"link":s=n.b
s.N(a)
s=s.c
if(0>=s.length)return A.c(s,-1)
s.pop()
a.r=!0
return m
case"meta":s=n.b
s.N(a)
s=s.c
if(0>=s.length)return A.c(s,-1)
s.pop()
a.r=!0
q=a.e
s=n.a.c.a
if(!s.b){p=q.k(0,"charset")
o=q.k(0,"content")
if(p!=null)s.iN(p)
else if(o!=null)s.iN(new A.j3(new A.jb(o)).oL())}return m
case"head":n.a.a1(a.a,"two-heads-are-not-better-than-one")
return m
default:n.d0(new A.J("head",!1))
return a}},
O(a){var s,r=a.b
switch(r){case"head":this.d0(a)
return null
case"br":case"html":case"body":this.d0(new A.J("head",!1))
return a
default:s=t.z
this.a.G(a.a,"unexpected-end-tag",A.y(["name",r],s,s))
return null}},
a8(){this.d0(new A.J("head",!1))
return!0},
a2(a){this.d0(new A.J("head",!1))
return a},
d0(a){var s,r=this.a,q=r.d,p=q.c
if(0>=p.length)return A.c(p,-1)
p.pop()
s=r.ay
if(s===$){s!==$&&A.C("_afterHeadPhase")
s=r.ay=new A.ft(r,q)}r.x=s}}
A.ft.prototype={
J(a){var s,r=this,q=null,p=a.b
switch(p){case"html":return r.a.ga5().J(a)
case"body":p=r.a
p.z=!1
r.b.N(a)
p.x=p.ga5()
return q
case"frameset":r.b.N(a)
p=r.a
p.x=p.ghZ()
return q
case"base":case"basefont":case"bgsound":case"link":case"meta":case"noframes":case"script":case"style":case"title":r.lb(a)
return q
case"head":s=t.z
r.a.G(a.a,"unexpected-start-tag",A.y(["name",p],s,s))
return q
default:r.bz()
return a}},
O(a){var s,r=a.b
switch(r){case"body":case"html":case"br":this.bz()
return a
default:s=t.z
this.a.G(a.a,"unexpected-end-tag",A.y(["name",r],s,s))
return null}},
a8(){this.bz()
return!0},
a2(a){this.bz()
return a},
lb(a){var s,r,q=this.a,p=t.z
q.G(a.a,"unexpected-start-tag-out-of-my-head",A.y(["name",a.b],p,p))
p=this.b
s=p.c
B.a.p(s,t.h.a(p.e))
q.gc2().J(a)
for(q=A.w(s).h("X<1>"),p=new A.X(s,q),p=new A.L(p,p.gm(p),q.h("L<D.E>")),q=q.h("D.E");p.n();){r=p.d
if(r==null)r=q.a(r)
if(r.x==="head"){B.a.a_(s,r)
break}}},
bz(){this.b.N(A.aJ("body",A.ab(null,null,t.K,t.N),null,!1))
var s=this.a
s.x=s.ga5()
s.z=!0}}
A.d7.prototype={
J(a){var s,r,q,p,o,n,m=this,l=null,k="p",j="button",i="unexpected-start-tag",h="unexpected-start-tag-implies-end-tag",g="RAWTEXT",f=a.b
switch(f){case"html":return m.be(a)
case"base":case"basefont":case"bgsound":case"command":case"link":case"meta":case"noframes":case"script":case"style":case"title":return m.a.gc2().J(a)
case"body":m.l8(a)
return l
case"frameset":m.la(a)
return l
case"address":case"article":case"aside":case"blockquote":case"center":case"details":case"dir":case"div":case"dl":case"fieldset":case"figcaption":case"figure":case"footer":case"header":case"hgroup":case"menu":case"nav":case"ol":case"p":case"section":case"summary":case"ul":m.hp(a)
return l
case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":f=m.b
if(f.a0(k,j))m.bC(new A.J(k,!1))
s=f.c
if(B.a.F(B.H,B.a.gt(s).x)){r=t.z
m.a.G(a.a,i,A.y(["name",a.b],r,r))
if(0>=s.length)return A.c(s,-1)
s.pop()}f.N(a)
return l
case"pre":case"listing":f=m.b
if(f.a0(k,j))m.bC(new A.J(k,!1))
f.N(a)
m.a.z=!1
m.c=!0
return l
case"form":f=m.b
if(f.f!=null){f=t.z
m.a.G(a.a,i,A.y(["name","form"],f,f))}else{if(f.a0(k,j))m.bC(new A.J(k,!1))
f.N(a)
f.sji(B.a.gt(f.c))}return l
case"li":case"dd":case"dt":m.le(a)
return l
case"plaintext":f=m.b
if(f.a0(k,j))m.bC(new A.J(k,!1))
f.N(a)
f=m.a.c
f.si(t.c.a(f.goO()))
return l
case"a":f=m.b
q=f.j5("a")
if(q!=null){s=t.z
m.a.G(a.a,h,A.y(["startName","a","endName","a"],s,s))
m.j7(new A.J("a",!1))
B.a.a_(f.c,q)
B.a.a_(f.d.a,q)}f.aF()
m.f8(a)
return l
case"b":case"big":case"code":case"em":case"font":case"i":case"s":case"small":case"strike":case"strong":case"tt":case"u":m.b.aF()
m.f8(a)
return l
case"nobr":f=m.b
f.aF()
if(f.b2("nobr")){s=t.z
m.a.G(a.a,h,A.y(["startName","nobr","endName","nobr"],s,s))
m.O(new A.J("nobr",!1))
f.aF()}m.f8(a)
return l
case"button":return m.l9(a)
case"applet":case"marquee":case"object":f=m.b
f.aF()
f.N(a)
f.d.p(0,l)
m.a.z=!1
return l
case"xmp":f=m.b
if(f.a0(k,j))m.bC(new A.J(k,!1))
f.aF()
f=m.a
f.z=!1
f.dc(a,g)
return l
case"table":f=m.a
if(f.r!=="quirks")if(m.b.a0(k,j))m.O(new A.J(k,!1))
m.b.N(a)
f.z=!1
f.x=f.gaJ()
return l
case"area":case"br":case"embed":case"img":case"keygen":case"wbr":m.hu(a)
return l
case"param":case"source":case"track":f=m.b
f.N(a)
f=f.c
if(0>=f.length)return A.c(f,-1)
f.pop()
a.r=!0
return l
case"input":f=m.a
p=f.z
m.hu(a)
s=a.e.k(0,"type")
if(s==null)s=l
else{r=t.E
r=A.ad(new A.I(new A.a9(s),r.h("h(u.E)").a(A.bL()),r.h("I<u.E,h>")),0,l)
s=r}if(s==="hidden")f.z=p
return l
case"hr":f=m.b
if(f.a0(k,j))m.bC(new A.J(k,!1))
f.N(a)
f=f.c
if(0>=f.length)return A.c(f,-1)
f.pop()
a.r=!0
m.a.z=!1
return l
case"image":f=t.z
m.a.G(a.a,"unexpected-start-tag-treated-as",A.y(["originalName","image","newName","img"],f,f))
m.J(A.aJ("img",a.e,l,a.c))
return l
case"isindex":m.ld(a)
return l
case"textarea":m.b.N(a)
f=m.a
s=f.c
s.si(t.c.a(s.gcF()))
m.c=!0
f.z=!1
return l
case"iframe":f=m.a
f.z=!1
f.dc(a,g)
return l
case"noembed":case"noscript":m.a.dc(a,g)
return l
case"select":f=m.b
f.aF()
f.N(a)
f=m.a
f.z=!1
if(f.gaJ()===f.gaE()||f.ghW()===f.gaE()||f.ghY()===f.gaE()||f.gf2()===f.gaE()||f.gf1()===f.gaE()||f.ghX()===f.gaE()){o=f.go
if(o===$){o!==$&&A.C("_inSelectInTablePhase")
o=f.go=new A.h3(f,f.d)}f.x=o}else f.x=f.gc3()
return l
case"rp":case"rt":f=m.b
if(f.b2("ruby")){f.cf()
n=B.a.gt(f.c)
if(n.x!=="ruby")m.a.a1(n.e,"undefined-error")}f.N(a)
return l
case"option":case"optgroup":f=m.b
if(B.a.gt(f.c).x==="option")m.a.gaE().O(new A.J("option",!1))
f.aF()
m.a.d.N(a)
return l
case"math":f=m.b
f.aF()
s=m.a
s.iy(a)
s.fa(a)
a.w="http://www.w3.org/1998/Math/MathML"
f.N(a)
if(a.c){f=f.c
if(0>=f.length)return A.c(f,-1)
f.pop()
a.r=!0}return l
case"svg":f=m.b
f.aF()
s=m.a
s.iz(a)
s.fa(a)
a.w="http://www.w3.org/2000/svg"
f.N(a)
if(a.c){f=f.c
if(0>=f.length)return A.c(f,-1)
f.pop()
a.r=!0}return l
case"caption":case"col":case"colgroup":case"frame":case"head":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":s=t.z
m.a.G(a.a,"unexpected-start-tag-ignored",A.y(["name",f],s,s))
return l
default:f=m.b
f.aF()
f.N(a)
return l}},
O(a){var s,r,q,p,o,n=this,m=null,l="end-tag-too-early",k="unexpected-end-tag",j=a.b
switch(j){case"body":n.j6(a)
return m
case"html":return n.fz(a)
case"address":case"article":case"aside":case"blockquote":case"button":case"center":case"details":case"dir":case"div":case"dl":case"fieldset":case"figcaption":case"figure":case"footer":case"header":case"hgroup":case"listing":case"menu":case"nav":case"ol":case"pre":case"section":case"summary":case"ul":if(j==="pre")n.c=!1
s=n.b
r=s.b2(j)
if(r)s.cf()
j=B.a.gt(s.c).x
s=a.b
if(j!=s){j=t.z
n.a.G(a.a,l,A.y(["name",s],j,j))}if(r)n.cC(a)
return m
case"form":j=n.b
q=j.f
j.f=null
if(q==null||!j.b2(q)){j=t.z
n.a.G(a.a,k,A.y(["name","form"],j,j))}else{j.cf()
j=j.c
if(!J.W(B.a.gt(j),q)){s=t.z
n.a.G(a.a,"end-tag-too-early-ignored",A.y(["name","form"],s,s))}B.a.a_(j,q)}return m
case"p":n.bC(a)
return m
case"dd":case"dt":case"li":p=j==="li"?"list":m
s=n.b
j=s.a0(j,p)
o=a.b
if(!j){j=t.z
n.a.G(a.a,k,A.y(["name",o],j,j))}else{s.c_(o)
j=B.a.gt(s.c).x
s=a.b
if(j!=s){j=t.z
n.a.G(a.a,l,A.y(["name",s],j,j))}n.cC(a)}return m
case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":n.nT(a)
return m
case"a":case"b":case"big":case"code":case"em":case"font":case"i":case"nobr":case"s":case"small":case"strike":case"strong":case"tt":case"u":n.j7(a)
return m
case"applet":case"marquee":case"object":s=n.b
if(s.b2(j))s.cf()
j=B.a.gt(s.c).x
o=a.b
if(j!=o){j=t.z
n.a.G(a.a,l,A.y(["name",o],j,j))}if(s.b2(a.b)){n.cC(a)
s.fj()}return m
case"br":j=t.z
n.a.G(a.a,"unexpected-end-tag-treated-as",A.y(["originalName","br","newName","br element"],j,j))
j=n.b
j.aF()
j.N(A.aJ("br",A.ab(m,m,t.K,t.N),m,!1))
j=j.c
if(0>=j.length)return A.c(j,-1)
j.pop()
return m
default:n.nV(a)
return m}},
ov(a,b){var s,r
if(a.x!=b.x||a.w!=b.w)return!1
else{s=a.b
if(s.a!==b.b.a)return!1
else for(s=A.nD(s,s.r,A.A(s).c);s.n();){r=s.d
if(!J.W(a.b.k(0,r),b.b.k(0,r)))return!1}}return!0},
f8(a){var s,r,q,p,o,n,m=this.b
m.N(a)
s=B.a.gt(m.c)
r=A.a([],t.hg)
for(m=m.d,q=A.A(m).h("X<u.E>"),p=new A.X(m,q),p=new A.L(p,p.gm(p),q.h("L<D.E>")),o=t.h,q=q.h("D.E");p.n();){n=p.d
if(n==null)n=q.a(n)
if(n==null)break
else{o.a(n)
if(this.ov(n,s))B.a.p(r,n)}}if(r.length===3)B.a.a_(m.a,B.a.gt(r))
m.p(0,s)},
a8(){var s,r,q,p
for(s=this.b.c,r=A.w(s).h("X<1>"),s=new A.X(s,r),s=new A.L(s,s.gm(s),r.h("L<D.E>")),r=r.h("D.E");s.n();){q=s.d
if(q==null)q=r.a(q)
switch(q.x){case"dd":case"dt":case"li":case"p":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":case"body":case"html":continue}s=this.a
p=q.e
if(p==null){r=s.c.a
q=r.w
if(q==null)p=null
else{r=r.y
new A.b0(q,r).bf(q,r)
p=new A.aq(q,r,r)
p.aH(q,r,r)}}B.a.p(s.e,new A.aW("expected-closing-tag-but-got-eof",p,B.am))
break}return!1},
a2(a){var s
if(a.gaC(a)==="\x00")return null
s=this.b
s.aF()
s.bY(a.gaC(a),a.a)
s=this.a
if(s.z&&!A.mV(a.gaC(a)))s.z=!1
return null},
aL(a){var s,r,q,p=this
if(p.c){s=a.gaC(a)
r=p.c=!1
if(B.b.Z(s,"\n")){q=B.a.gt(p.b.c)
if(B.a.F(B.by,q.x)){r=q.gak(q)
r=r.gag(r)}if(r)s=B.b.au(s,1)}if(s.length!==0){r=p.b
r.aF()
r.bY(s,a.a)}}else{r=p.b
r.aF()
r.bY(a.gaC(a),a.a)}return null},
l8(a){var s,r=this.a,q=t.z
r.G(a.a,"unexpected-start-tag",A.y(["name","body"],q,q))
q=this.b.c
s=q.length
if(s!==1){if(1>=s)return A.c(q,1)
q=q[1].x!=="body"}else q=!0
if(!q){r.z=!1
a.e.bb(0,new A.jG(this))}},
la(a){var s,r,q,p=this.a,o=t.z
p.G(a.a,"unexpected-start-tag",A.y(["name","frameset"],o,o))
o=this.b
s=o.c
r=s.length
if(r!==1){if(1>=r)return A.c(s,1)
q=s[1].x!=="body"}else q=!0
if(!q)if(p.z){if(1>=r)return A.c(s,1)
r=s[1].a
if(r!=null){r=r.gak(r)
if(1>=s.length)return A.c(s,1)
B.a.a_(r.a,s[1])}for(;B.a.gt(s).x!=="html";){if(0>=s.length)return A.c(s,-1)
s.pop()}o.N(a)
p.x=p.ghZ()}},
hp(a){var s=this.b
if(s.a0("p","button"))this.bC(new A.J("p",!1))
s.N(a)},
le(a){var s,r,q,p,o,n,m,l,k,j,i=this.a
i.z=!1
s=a.b
s.toString
s=B.cL.k(0,s)
s.toString
for(r=this.b,q=r.c,p=A.w(q).h("X<1>"),q=new A.X(q,p),q=new A.L(q,q.gm(q),p.h("L<D.E>")),o=t.X,p=p.h("D.E");q.n();){n=q.d
if(n==null)n=p.a(n)
m=n.x
if(B.a.F(s,m)){l=i.x
if(l===$){l=i.Q
if(l===$){k=new A.bu(i,i.d)
l!==$&&A.C("_initialPhase")
i.Q=k
l=k}l=i.x=l}l.O(new A.J(m,!1))
break}j=n.w
if(B.a.F(B.X,new A.o(j==null?"http://www.w3.org/1999/xhtml":j,m,o))&&!B.a.F(B.bj,m))break}if(r.a0("p","button"))i.gaE().O(new A.J("p",!1))
r.N(a)},
l9(a){var s=this.b,r=this.a
if(s.b2("button")){s=t.z
r.G(a.a,"unexpected-start-tag-implies-end-tag",A.y(["startName","button","endName","button"],s,s))
this.O(new A.J("button",!1))
return a}else{s.aF()
s.N(a)
r.z=!1}return null},
hu(a){var s=this.b
s.aF()
s.N(a)
s=s.c
if(0>=s.length)return A.c(s,-1)
s.pop()
a.r=!0
this.a.z=!1},
ld(a){var s,r,q,p,o,n=this,m=null,l="action",k=t.z
n.a.G(a.a,"deprecated-tag",A.y(["name","isindex"],k,k))
if(n.b.f!=null)return
k=t.K
s=t.N
r=A.ab(m,m,k,s)
q=a.e.k(0,l)
if(q!=null)r.v(0,l,q)
n.J(A.aJ("form",r,m,!1))
n.J(A.aJ("hr",A.ab(m,m,k,s),m,!1))
n.J(A.aJ("label",A.ab(m,m,k,s),m,!1))
p=a.e.k(0,"prompt")
if(p==null)p="This is a searchable index. Enter search keywords: "
n.a2(new A.E(m,p))
o=A.ha(a.e,k,s)
o.a_(0,l)
o.a_(0,"prompt")
o.v(0,"name","isindex")
n.J(A.aJ("input",o,m,a.c))
n.O(new A.J("label",!1))
n.J(A.aJ("hr",A.ab(m,m,k,s),m,!1))
n.O(new A.J("form",!1))},
bC(a){var s=this,r="unexpected-end-tag",q=s.b
if(!q.a0("p","button")){s.hp(A.aJ("p",A.ab(null,null,t.K,t.N),null,!1))
q=t.z
s.a.G(a.a,r,A.y(["name","p"],q,q))
s.bC(new A.J("p",!1))}else{q.c_("p")
if(B.a.gt(q.c).x!=="p"){q=t.z
s.a.G(a.a,r,A.y(["name","p"],q,q))}s.cC(a)}},
j6(a){var s,r,q,p,o,n,m=this,l=m.b
if(!l.b2("body")){m.a.a1(a.a,"undefined-error")
return}else{l=l.c
if(B.a.gt(l).x==="body")B.a.gt(l)
else for(l=A.n7(l,2,null,t.h),s=l.length,r=0;r<s;++r){q=l[r].x
switch(q){case"dd":case"dt":case"li":case"optgroup":case"option":case"p":case"rp":case"rt":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":case"body":case"html":continue}l=m.a
p=a.a
s=t.z
s=A.y(["gotName","body","expectedName",q],s,s)
if(p==null){q=l.c.a
o=q.w
if(o==null)p=null
else{q=q.y
new A.b0(o,q).bf(o,q)
p=new A.aq(o,q,q)
p.aH(o,q,q)}}B.a.p(l.e,new A.aW("expected-one-end-tag-but-got-another",p,s))
break}}l=m.a
n=l.k1
if(n===$){n!==$&&A.C("_afterBodyPhase")
n=l.k1=new A.fr(l,l.d)}l.x=n},
fz(a){if(this.b.b2("body")){this.j6(new A.J("body",!1))
return a}return null},
nT(a){var s,r,q,p,o,n,m
for(s=this.b,r=0;r<6;++r)if(s.b2(B.H[r])){q=s.c
p=B.a.gt(q).x
if(p!=null&&B.a.F(B.U,p)){if(0>=q.length)return A.c(q,-1)
q.pop()
s.c_(null)}break}q=s.c
o=B.a.gt(q).x
n=a.b
if(o!=n){o=t.z
this.a.G(a.a,"end-tag-too-early",A.y(["name",n],o,o))}for(r=0;r<6;++r)if(s.b2(B.H[r])){if(0>=q.length)return A.c(q,-1)
m=q.pop()
for(;!B.a.F(B.H,m.x);){if(0>=q.length)return A.c(q,-1)
m=q.pop()}break}},
j7(b8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7="nodes"
for(s=this.b,r=s.d,q=r.a,p=A.A(r).h("aV.E"),o=s.c,n=t.K,m=t.N,l=t.h,k=t.d,j=t.X,i=this.a,h=t.z,g=i.c.a,i=i.e,f=0;f<8;){++f
e=s.j5(b8.b)
if(e!=null)d=B.a.F(o,e)&&!s.b2(e.x)
else d=!0
if(d){c=b8.a
s=A.y(["name",b8.b],h,h)
if(c==null){r=g.w
if(r==null)c=b6
else{q=g.y
new A.b0(r,q).bf(r,q)
c=new A.aq(r,q,q)
c.aH(r,q,q)}}B.a.p(i,new A.aW("adoption-agency-1.1",c,s))
return}else if(!B.a.F(o,e)){c=b8.a
s=A.y(["name",b8.b],h,h)
if(c==null){r=g.w
if(r==null)c=b6
else{p=g.y
new A.b0(r,p).bf(r,p)
c=new A.aq(r,p,p)
c.aH(r,p,p)}}B.a.p(i,new A.aW("adoption-agency-1.2",c,s))
B.a.a_(q,e)
return}d=B.a.gt(o)
if(e==null?d!=null:e!==d){c=b8.a
d=A.y(["name",b8.b],h,h)
if(c==null){b=g.w
if(b==null)c=b6
else{a=g.y
new A.b0(b,a).bf(b,a)
c=new A.aq(b,a,a)
c.aH(b,a,a)}}B.a.p(i,new A.aW("adoption-agency-1.3",c,d))}a0=B.a.aj(o,e)
d=A.n7(o,a0,b6,l)
b=d.length
a2=0
while(!0){if(!(a2<d.length)){a1=b6
break}a3=d[a2]
a4=a3.w
if(a4==null)a4="http://www.w3.org/1999/xhtml"
if(B.a.F(B.X,new A.o(a4,a3.x,j))){a1=a3
break}d.length===b||(0,A.f)(d);++a2}if(a1==null){if(0>=o.length)return A.c(o,-1)
a3=o.pop()
for(;a3!==e;){if(0>=o.length)return A.c(o,-1)
a3=o.pop()}B.a.a_(q,a3)
return}d=a0-1
if(!(d>=0&&d<o.length))return A.c(o,d)
a5=o[d]
a6=r.aj(r,e)
a7=B.a.aj(o,a1)
for(a8=a1,a9=0;a9<3;){++a9;--a7
if(!(a7>=0&&a7<o.length))return A.c(o,a7)
b0=o[a7]
if(!r.F(r,b0)){B.a.a_(o,b0)
continue}if(b0===e)break
if(a8===a1)a6=r.aj(r,b0)+1
d=b0.x
b1=new A.V(b0.w,d,A.ab(b6,b6,n,m))
b1.scW(0,A.ha(b0.b,n,m))
b2=b0.dt(b1,!1,l)
B.a.v(q,r.aj(r,b0),p.a(b2))
B.a.v(o,B.a.aj(o,b0),b2)
d=a8.a
if(d!=null){b3=d.c
if(b3===$){b=A.a([],k)
d.c!==$&&A.C(b7)
b3=d.c=new A.ac(d,b)}B.a.a_(b3.a,a8)}b3=b2.c
if(b3===$){d=A.a([],k)
b2.c!==$&&A.C(b7)
b3=b2.c=new A.ac(b2,d)}d=a8.a
if(d!=null){b4=d.c
if(b4===$){b=A.a([],k)
d.c!==$&&A.C(b7)
b4=d.c=new A.ac(d,b)}B.a.a_(b4.a,a8)}a8.a=b3.b
b3.bP(0,a8)
a8=b2}d=a8.a
if(d!=null){b3=d.c
if(b3===$){b=A.a([],k)
d.c!==$&&A.C(b7)
b3=d.c=new A.ac(d,b)}B.a.a_(b3.a,a8)}if(B.a.F(B.V,a5.x)){b5=s.eB()
d=b5[0]
b=b5[1]
b3=d.c
if(b==null){if(b3===$){b=A.a([],k)
d.c!==$&&A.C(b7)
b3=d.c=new A.ac(d,b)}d=a8.a
if(d!=null){b4=d.c
if(b4===$){b=A.a([],k)
d.c!==$&&A.C(b7)
b4=d.c=new A.ac(d,b)}B.a.a_(b4.a,a8)}a8.a=b3.b
b3.bP(0,a8)}else{if(b3===$){a=A.a([],k)
d.c!==$&&A.C(b7)
b1=d.c=new A.ac(d,a)
b4=b1
b3=b4}else b4=b3
if(b4===$){a=A.a([],k)
d.c!==$&&A.C(b7)
b4=d.c=new A.ac(d,a)}d=b4.aj(b4,b)
b=a8.a
if(b!=null){b4=b.c
if(b4===$){a=A.a([],k)
b.c!==$&&A.C(b7)
b4=b.c=new A.ac(b,a)}B.a.a_(b4.a,a8)}a8.a=b3.b
b3.hx(0,d,a8)}}else{b3=a5.c
if(b3===$){d=A.a([],k)
a5.c!==$&&A.C(b7)
b3=a5.c=new A.ac(a5,d)}d=a8.a
if(d!=null){b4=d.c
if(b4===$){b=A.a([],k)
d.c!==$&&A.C(b7)
b4=d.c=new A.ac(d,b)}B.a.a_(b4.a,a8)}a8.a=b3.b
b3.bP(0,a8)}d=e.x
b1=new A.V(e.w,d,A.ab(b6,b6,n,m))
b1.scW(0,A.ha(e.b,n,m))
d=e.dt(b1,!1,l)
b3=d.c
if(b3===$){b=A.a([],k)
d.c!==$&&A.C(b7)
b3=d.c=new A.ac(d,b)}b4=a1.c
if(b4===$){b=A.a([],k)
a1.c!==$&&A.C(b7)
b4=a1.c=new A.ac(a1,b)}b3.M(0,b4)
b3=a1.c
if(b3===$){b=A.a([],k)
a1.c!==$&&A.C(b7)
b3=a1.c=new A.ac(a1,b)}b3.bB(0)
b3=a1.c
if(b3===$){b=A.a([],k)
a1.c!==$&&A.C(b7)
b3=a1.c=new A.ac(a1,b)}b=d.a
if(b!=null){b4=b.c
if(b4===$){a=A.a([],k)
b.c!==$&&A.C(b7)
b4=b.c=new A.ac(b,a)}B.a.a_(b4.a,d)}d.a=b3.b
b3.bP(0,d)
B.a.a_(q,e)
B.a.bF(q,A.a0(Math.min(a6,q.length)),p.a(d))
B.a.a_(o,e)
B.a.bF(o,B.a.aj(o,a1)+1,d)}},
nV(a){var s,r,q,p,o,n,m,l,k,j,i,h="unexpected-end-tag"
for(s=this.b,r=s.c,q=A.w(r).h("X<1>"),p=new A.X(r,q),p=new A.L(p,p.gm(p),q.h("L<D.E>")),o=t.X,q=q.h("D.E");p.n();){n=p.d
if(n==null)n=q.a(n)
m=n.x
l=a.b
if(m==l){k=B.a.gt(r).x
if(k!=l&&B.a.F(B.U,k)){if(0>=r.length)return A.c(r,-1)
r.pop()
s.c_(l)}s=B.a.gt(r).x
q=a.b
if(s!=q){s=this.a
j=a.a
p=t.z
p=A.y(["name",q],p,p)
if(j==null){q=s.c.a
o=q.w
if(o==null)j=null
else{q=q.y
new A.b0(o,q).bf(o,q)
j=new A.aq(o,q,q)
j.aH(o,q,q)}}B.a.p(s.e,new A.aW(h,j,p))}while(!0){if(0>=r.length)return A.c(r,-1)
if(!!J.W(r.pop(),n))break}break}else{i=n.w
if(B.a.F(B.X,new A.o(i==null?"http://www.w3.org/1999/xhtml":i,m,o))){s=this.a
j=a.a
r=t.z
r=A.y(["name",a.b],r,r)
if(j==null){q=s.c.a
p=q.w
if(p==null)j=null
else{q=q.y
new A.b0(p,q).bf(p,q)
j=new A.aq(p,q,q)
j.aH(p,q,q)}}B.a.p(s.e,new A.aW(h,j,r))
break}}}}}
A.jG.prototype={
$2(a,b){var s
t.K.a(a)
A.aw(b)
s=this.a.b.c
if(1>=s.length)return A.c(s,1)
s[1].b.ei(a,new A.jF(b))},
$S:28}
A.jF.prototype={
$0(){return this.a},
$S:6}
A.hL.prototype={
J(a){throw A.d(A.av("Cannot process start stag in text phase"))},
O(a){var s,r,q=this
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
a2(a){this.b.bY(a.gaC(a),a.a)
return null},
a8(){var s=this.b.c,r=B.a.gt(s),q=this.a,p=t.z
q.G(r.e,"expected-named-closing-tag-but-got-eof",A.y(["name",r.x],p,p))
if(0>=s.length)return A.c(s,-1)
s.pop()
s=q.y
s.toString
q.x=s
return!0}}
A.eb.prototype={
J(a){var s,r,q=this,p=null
switch(a.b){case"html":return q.be(a)
case"caption":q.fl()
s=q.b
s.d.p(0,p)
s.N(a)
s=q.a
s.x=s.ghW()
return p
case"colgroup":q.hq(a)
return p
case"col":q.hq(A.aJ("colgroup",A.ab(p,p,t.K,t.N),p,!1))
return a
case"tbody":case"tfoot":case"thead":q.hs(a)
return p
case"td":case"th":case"tr":q.hs(A.aJ("tbody",A.ab(p,p,t.K,t.N),p,!1))
return a
case"table":return q.lf(a)
case"style":case"script":return q.a.gc2().J(a)
case"input":s=a.e.k(0,"type")
if(s==null)s=p
else{r=t.E
r=A.ad(new A.I(new A.a9(s),r.h("h(u.E)").a(A.bL()),r.h("I<u.E,h>")),0,p)
s=r}if(s==="hidden"){q.a.a1(a.a,"unexpected-hidden-input-in-table")
s=q.b
s.N(a)
s=s.c
if(0>=s.length)return A.c(s,-1)
s.pop()}else q.hr(a)
return p
case"form":q.a.a1(a.a,"unexpected-form-in-table")
s=q.b
if(s.f==null){s.N(a)
r=s.c
s.sji(B.a.gt(r))
if(0>=r.length)return A.c(r,-1)
r.pop()}return p
default:q.hr(a)
return p}},
O(a){var s,r,q=this,p=a.b
switch(p){case"table":q.bW(a)
return null
case"body":case"caption":case"col":case"colgroup":case"html":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":s=t.z
q.a.G(a.a,"unexpected-end-tag",A.y(["name",p],s,s))
return null
default:s=q.a
r=t.z
s.G(a.a,"unexpected-end-tag-implies-table-voodoo",A.y(["name",p],r,r))
r=q.b
r.r=!0
s.ga5().O(a)
r.r=!1
return null}},
fl(){var s=this.b.c
while(!0){if(!(B.a.gt(s).x!=="table"&&B.a.gt(s).x!=="html"))break
if(0>=s.length)return A.c(s,-1)
s.pop()}},
a8(){var s=B.a.gt(this.b.c)
if(s.x!=="html")this.a.a1(s.e,"eof-in-table")
return!1},
aL(a){var s=this.a,r=s.gaE()
s.x=s.gdu()
s.gdu().c=r
s.gaE().aL(a)
return null},
a2(a){var s=this.a,r=s.gaE()
s.x=s.gdu()
s.gdu().c=r
s.gaE().a2(a)
return null},
hq(a){var s
this.fl()
this.b.N(a)
s=this.a
s.x=s.ghY()},
hs(a){var s
this.fl()
this.b.N(a)
s=this.a
s.x=s.gf2()},
lf(a){var s=this.a,r=t.z
s.G(a.a,"unexpected-start-tag-implies-end-tag",A.y(["startName","table","endName","table"],r,r))
s.gaE().O(new A.J("table",!1))
return a},
hr(a){var s=this.a,r=t.z
s.G(a.a,u.M,A.y(["name",a.b],r,r))
r=this.b
r.r=!0
s.ga5().J(a)
r.r=!1},
bW(a){var s,r,q=this,p=q.b
if(p.a0("table","table")){p.cf()
p=p.c
s=B.a.gt(p).x
if(s!=="table"){r=t.z
q.a.G(a.a,"end-tag-too-early-named",A.y(["gotName","table","expectedName",s],r,r))}for(;B.a.gt(p).x!=="table";){if(0>=p.length)return A.c(p,-1)
p.pop()}if(0>=p.length)return A.c(p,-1)
p.pop()
q.a.jO()}else q.a.a1(a.a,"undefined-error")}}
A.d9.prototype={
d3(){var s,r,q=this,p=q.d
if(p.length===0)return
s=A.w(p)
r=new A.I(p,s.h("n(1)").a(new A.jH()),s.h("I<1,n>")).aD(0,"")
if(!A.mV(r)){p=q.a.gaJ()
s=p.b
s.r=!0
p.a.ga5().a2(new A.E(null,r))
s.r=!1}else if(r.length!==0)q.b.bY(r,null)
q.sno(A.a([],t.ks))},
cb(a){var s
this.d3()
s=this.c
s.toString
this.a.x=s
return a},
a8(){this.d3()
var s=this.c
s.toString
this.a.x=s
return!0},
a2(a){if(a.gaC(a)==="\x00")return null
B.a.p(this.d,a)
return null},
aL(a){B.a.p(this.d,a)
return null},
J(a){var s
this.d3()
s=this.c
s.toString
this.a.x=s
return a},
O(a){var s
this.d3()
s=this.c
s.toString
this.a.x=s
return a},
sno(a){this.d=t.oX.a(a)}}
A.jH.prototype={
$1(a){t.g.a(a)
return a.gaC(a)},
$S:84}
A.e6.prototype={
J(a){switch(a.b){case"html":return this.be(a)
case"caption":case"col":case"colgroup":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":return this.lg(a)
default:return this.a.ga5().J(a)}},
O(a){var s,r=this,q=a.b
switch(q){case"caption":r.nS(a)
return null
case"table":return r.bW(a)
case"body":case"col":case"colgroup":case"html":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":s=t.z
r.a.G(a.a,"unexpected-end-tag",A.y(["name",q],s,s))
return null
default:return r.a.ga5().O(a)}},
a8(){this.a.ga5().a8()
return!1},
a2(a){return this.a.ga5().a2(a)},
lg(a){var s,r=this.a
r.a1(a.a,"undefined-error")
s=this.b.a0("caption","table")
r.gaE().O(new A.J("caption",!1))
if(s)return a
return null},
nS(a){var s,r,q=this,p=q.b
if(p.a0("caption","table")){p.cf()
s=p.c
if(B.a.gt(s).x!=="caption"){r=t.z
q.a.G(a.a,"expected-one-end-tag-but-got-another",A.y(["gotName","caption","expectedName",B.a.gt(s).x],r,r))}for(;B.a.gt(s).x!=="caption";){if(0>=s.length)return A.c(s,-1)
s.pop()}if(0>=s.length)return A.c(s,-1)
s.pop()
p.fj()
p=q.a
p.x=p.gaJ()}else q.a.a1(a.a,"undefined-error")},
bW(a){var s,r=this.a
r.a1(a.a,"undefined-error")
s=this.b.a0("caption","table")
r.gaE().O(new A.J("caption",!1))
if(s)return a
return null}}
A.e7.prototype={
J(a){var s,r=this
switch(a.b){case"html":return r.be(a)
case"col":s=r.b
s.N(a)
s=s.c
if(0>=s.length)return A.c(s,-1)
s.pop()
return null
default:s=B.a.gt(r.b.c).x
r.d_(new A.J("colgroup",!1))
return s==="html"?null:a}},
O(a){var s,r=this
switch(a.b){case"colgroup":r.d_(a)
return null
case"col":s=t.z
r.a.G(a.a,"no-end-tag",A.y(["name","col"],s,s))
return null
default:s=B.a.gt(r.b.c).x
r.d_(new A.J("colgroup",!1))
return s==="html"?null:a}},
a8(){if(B.a.gt(this.b.c).x==="html")return!1
else{this.d_(new A.J("colgroup",!1))
return!0}},
a2(a){var s=B.a.gt(this.b.c).x
this.d_(new A.J("colgroup",!1))
return s==="html"?null:a},
d_(a){var s=this.b.c,r=this.a
if(B.a.gt(s).x==="html")r.a1(a.a,"undefined-error")
else{if(0>=s.length)return A.c(s,-1)
s.pop()
r.x=r.gaJ()}}}
A.cF.prototype={
J(a){var s,r=this,q=null,p=a.b
switch(p){case"html":return r.be(a)
case"tr":r.ht(a)
return q
case"td":case"th":s=t.z
r.a.G(a.a,"unexpected-cell-in-table-body",A.y(["name",p],s,s))
r.ht(A.aJ("tr",A.ab(q,q,t.K,t.N),q,!1))
return a
case"caption":case"col":case"colgroup":case"tbody":case"tfoot":case"thead":return r.bW(a)
default:return r.a.gaJ().J(a)}},
O(a){var s,r=this,q=a.b
switch(q){case"tbody":case"tfoot":case"thead":r.dT(a)
return null
case"table":return r.bW(a)
case"body":case"caption":case"col":case"colgroup":case"html":case"td":case"th":case"tr":s=t.z
r.a.G(a.a,"unexpected-end-tag-in-table-body",A.y(["name",q],s,s))
return null
default:return r.a.gaJ().O(a)}},
fk(){for(var s=this.b.c;!B.a.F(B.bB,B.a.gt(s).x);){if(0>=s.length)return A.c(s,-1)
s.pop()}B.a.gt(s).toString},
a8(){this.a.gaJ().a8()
return!1},
aL(a){return this.a.gaJ().aL(a)},
a2(a){return this.a.gaJ().a2(a)},
ht(a){var s
this.fk()
this.b.N(a)
s=this.a
s.x=s.gf1()},
dT(a){var s=this.b,r=this.a
if(s.a0(a.b,"table")){this.fk()
s=s.c
if(0>=s.length)return A.c(s,-1)
s.pop()
r.x=r.gaJ()}else{s=t.z
r.G(a.a,"unexpected-end-tag-in-table-body",A.y(["name",a.b],s,s))}},
bW(a){var s=this,r="table",q=s.b
if(q.a0("tbody",r)||q.a0("thead",r)||q.a0("tfoot",r)){s.fk()
s.dT(new A.J(B.a.gt(q.c).x,!1))
return a}else s.a.a1(a.a,"undefined-error")
return null}}
A.e9.prototype={
J(a){var s,r,q=this
switch(a.b){case"html":return q.be(a)
case"td":case"th":q.iP()
s=q.b
s.N(a)
r=q.a
r.x=r.ghX()
s.d.p(0,null)
return null
case"caption":case"col":case"colgroup":case"tbody":case"tfoot":case"thead":case"tr":s=q.b.a0("tr","table")
q.dU(new A.J("tr",!1))
return!s?null:a
default:return q.a.gaJ().J(a)}},
O(a){var s,r=this,q=a.b
switch(q){case"tr":r.dU(a)
return null
case"table":q=r.b.a0("tr","table")
r.dU(new A.J("tr",!1))
return!q?null:a
case"tbody":case"tfoot":case"thead":return r.dT(a)
case"body":case"caption":case"col":case"colgroup":case"html":case"td":case"th":s=t.z
r.a.G(a.a,"unexpected-end-tag-in-table-row",A.y(["name",q],s,s))
return null
default:return r.a.gaJ().O(a)}},
iP(){var s,r,q,p,o,n,m,l,k
for(s=this.b.c,r=this.a,q=t.z,p=r.c.a;!0;){o=B.a.gt(s)
n=o.x
if(n==="tr"||n==="html")break
m=o.e
n=A.y(["name",B.a.gt(s).x],q,q)
if(m==null){l=p.w
if(l==null)m=null
else{k=p.y
new A.b0(l,k).bf(l,k)
m=new A.aq(l,k,k)
m.aH(l,k,k)}}B.a.p(r.e,new A.aW("unexpected-implied-end-tag-in-table-row",m,n))
if(0>=s.length)return A.c(s,-1)
s.pop()}},
a8(){this.a.gaJ().a8()
return!1},
aL(a){return this.a.gaJ().aL(a)},
a2(a){return this.a.gaJ().a2(a)},
dU(a){var s=this.b,r=this.a
if(s.a0("tr","table")){this.iP()
s=s.c
if(0>=s.length)return A.c(s,-1)
s.pop()
r.x=r.gf2()}else r.a1(a.a,"undefined-error")},
dT(a){if(this.b.a0(a.b,"table")){this.dU(new A.J("tr",!1))
return a}else{this.a.a1(a.a,"undefined-error")
return null}}}
A.d8.prototype={
J(a){switch(a.b){case"html":return this.be(a)
case"caption":case"col":case"colgroup":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":return this.lh(a)
default:return this.a.ga5().J(a)}},
O(a){var s,r=this,q=a.b
switch(q){case"td":case"th":r.fB(a)
return null
case"body":case"caption":case"col":case"colgroup":case"html":s=t.z
r.a.G(a.a,"unexpected-end-tag",A.y(["name",q],s,s))
return null
case"table":case"tbody":case"tfoot":case"thead":case"tr":return r.nU(a)
default:return r.a.ga5().O(a)}},
iQ(){var s=this.b
if(s.a0("td","table"))this.fB(new A.J("td",!1))
else if(s.a0("th","table"))this.fB(new A.J("th",!1))},
a8(){this.a.ga5().a8()
return!1},
a2(a){return this.a.ga5().a2(a)},
lh(a){var s=this.b
if(s.a0("td","table")||s.a0("th","table")){this.iQ()
return a}else{this.a.a1(a.a,"undefined-error")
return null}},
fB(a){var s,r=this,q=r.b,p=q.a0(a.b,"table"),o=a.b
if(p){q.c_(o)
p=q.c
o=B.a.gt(p).x
s=a.b
if(o!=s){p=t.z
r.a.G(a.a,"unexpected-cell-end-tag",A.y(["name",s],p,p))
r.cC(a)}else{if(0>=p.length)return A.c(p,-1)
p.pop()}q.fj()
q=r.a
q.x=q.gf1()}else{q=t.z
r.a.G(a.a,"unexpected-end-tag",A.y(["name",o],q,q))}},
nU(a){if(this.b.a0(a.b,"table")){this.iQ()
return a}else this.a.a1(a.a,"undefined-error")
return null}}
A.ea.prototype={
J(a){var s,r=this,q=null,p=a.b
switch(p){case"html":return r.be(a)
case"option":p=r.b
s=p.c
if(B.a.gt(s).x==="option"){if(0>=s.length)return A.c(s,-1)
s.pop()}p.N(a)
return q
case"optgroup":p=r.b
s=p.c
if(B.a.gt(s).x==="option"){if(0>=s.length)return A.c(s,-1)
s.pop()}if(B.a.gt(s).x==="optgroup"){if(0>=s.length)return A.c(s,-1)
s.pop()}p.N(a)
return q
case"select":r.a.a1(a.a,"unexpected-select-in-select")
r.fA(new A.J("select",!1))
return q
case"input":case"keygen":case"textarea":return r.lc(a)
case"script":return r.a.gc2().J(a)
default:s=t.z
r.a.G(a.a,"unexpected-start-tag-in-select",A.y(["name",p],s,s))
return q}},
O(a){var s,r,q=this,p=null,o="unexpected-end-tag-in-select",n=a.b
switch(n){case"option":n=q.b.c
if(B.a.gt(n).x==="option"){if(0>=n.length)return A.c(n,-1)
n.pop()}else{n=t.z
q.a.G(a.a,o,A.y(["name","option"],n,n))}return p
case"optgroup":n=q.b.c
if(B.a.gt(n).x==="option"){s=n.length
r=s-2
if(!(r>=0))return A.c(n,r)
r=n[r].x==="optgroup"
s=r}else s=!1
if(s){if(0>=n.length)return A.c(n,-1)
n.pop()}if(B.a.gt(n).x==="optgroup"){if(0>=n.length)return A.c(n,-1)
n.pop()}else{n=t.z
q.a.G(a.a,o,A.y(["name","optgroup"],n,n))}return p
case"select":q.fA(a)
return p
default:s=t.z
q.a.G(a.a,o,A.y(["name",n],s,s))
return p}},
a8(){var s=B.a.gt(this.b.c)
if(s.x!=="html")this.a.a1(s.e,"eof-in-select")
return!1},
a2(a){if(a.gaC(a)==="\x00")return null
this.b.bY(a.gaC(a),a.a)
return null},
lc(a){var s="select"
this.a.a1(a.a,"unexpected-input-in-select")
if(this.b.a0(s,s)){this.fA(new A.J(s,!1))
return a}return null},
fA(a){var s=this.a
if(this.b.a0("select","select")){this.cC(a)
s.jO()}else s.a1(a.a,"undefined-error")}}
A.h3.prototype={
J(a){var s,r,q=a.b
switch(q){case"caption":case"table":case"tbody":case"tfoot":case"thead":case"tr":case"td":case"th":s=this.a
r=t.z
s.G(a.a,u.a,A.y(["name",q],r,r))
s.gc3().O(new A.J("select",!1))
return a
default:return this.a.gc3().J(a)}},
O(a){switch(a.b){case"caption":case"table":case"tbody":case"tfoot":case"thead":case"tr":case"td":case"th":return this.bW(a)
default:return this.a.gc3().O(a)}},
a8(){this.a.gc3().a8()
return!1},
a2(a){return this.a.gc3().a2(a)},
bW(a){var s=this.a,r=t.z
s.G(a.a,u.r,A.y(["name",a.b],r,r))
if(this.b.a0(a.b,"table")){s.gc3().O(new A.J("select",!1))
return a}return null}}
A.h1.prototype={
a2(a){var s
if(a.gaC(a)==="\x00"){a.c="\ufffd"
a.b=null}else{s=this.a
if(s.z&&!A.mV(a.gaC(a)))s.z=!1}return this.lC(a)},
J(a){var s,r,q,p,o,n=this,m=n.b,l=m.c,k=B.a.gt(l)
if(!B.a.F(B.ba,a.b))if(a.b==="font")s=a.e.ai("color")||a.e.ai("face")||a.e.ai("size")
else s=!1
else s=!0
if(s){s=n.a
r=t.z
s.G(a.a,u.G,A.y(["name",a.b],r,r))
m=m.a
r=t.h
q=t.iA
while(!0){if(B.a.gt(l).w!=m)if(!s.jr(B.a.gt(l))){p=r.a(B.a.gt(l))
p=!B.a.F(B.af,new A.o(p.w,p.x,q))}else p=!1
else p=!1
if(!p)break
if(0>=l.length)return A.c(l,-1)
l.pop()}return a}else{s=k.w
if(s==="http://www.w3.org/1998/Math/MathML")n.a.iy(a)
else if(s==="http://www.w3.org/2000/svg"){o=B.bG.k(0,a.b)
if(o!=null)a.b=o
n.a.iz(a)}n.a.fa(a)
a.w=s
m.N(a)
if(a.c){if(0>=l.length)return A.c(l,-1)
l.pop()
a.r=!0}return null}},
O(a){var s,r,q,p,o,n,m=this,l=null,k="_initialPhase",j=m.b,i=j.c,h=i.length-1,g=B.a.gt(i),f=g.x
if(f==null)f=l
else{s=t.E
s=A.ad(new A.I(new A.a9(f),s.h("h(u.E)").a(A.bL()),s.h("I<u.E,h>")),0,l)
f=s}s=a.b
if(f!=s){f=t.z
m.a.G(a.a,"unexpected-end-tag",A.y(["name",s],f,f))}j=j.a
f=t.E
s=f.h("h(u.E)")
f=f.h("I<u.E,h>")
while(!0){if(!!0){r=l
break}c$0:{q=g.x
q=q==null?l:A.ad(new A.I(new A.a9(q),s.a(A.bL()),f),0,l)
if(q==a.b){j=m.a
p=j.x
if(p===$){p=j.Q
if(p===$){o=new A.bu(j,j.d)
p!==$&&A.C(k)
j.Q=o
p=o}p=j.x=p}n=j.cy
if(n===$){f=A.a([],t.ks)
j.cy!==$&&A.C("_inTableTextPhase")
n=j.cy=new A.d9(f,j,j.d)}if(p===n){p=j.x
if(p===$){p=j.Q
if(p===$){o=new A.bu(j,j.d)
p!==$&&A.C(k)
j.Q=o
p=o}p=j.x=p}t.aB.a(p)
p.d3()
f=p.c
f.toString
j.x=f}while(!0){if(0>=i.length)return A.c(i,-1)
if(!!J.W(i.pop(),g))break}r=l
break}--h
if(!(h>=0&&h<i.length))return A.c(i,h)
g=i[h]
if(g.w!=j)break c$0
else{j=m.a
p=j.x
if(p===$){p=j.Q
if(p===$){o=new A.bu(j,j.d)
p!==$&&A.C(k)
j.Q=o
p=o}p=j.x=p}r=p.O(a)
break}}}return r}}
A.fr.prototype={
J(a){var s,r,q=a.b
if(q==="html")return this.a.ga5().J(a)
s=this.a
r=t.z
s.G(a.a,"unexpected-start-tag-after-body",A.y(["name",q],r,r))
s.x=s.ga5()
return a},
O(a){var s,r,q=a.b
if(q==="html"){this.fz(a)
return null}s=this.a
r=t.z
s.G(a.a,"unexpected-end-tag-after-body",A.y(["name",q],r,r))
s.x=s.ga5()
return a},
a8(){return!1},
cb(a){var s=this.b,r=s.c
if(0>=r.length)return A.c(r,0)
s.cv(a,r[0])
return null},
a2(a){var s=this.a
s.a1(a.a,"unexpected-char-after-body")
s.x=s.ga5()
return a},
fz(a){var s,r,q,p
for(s=this.b.c,r=A.w(s).h("X<1>"),s=new A.X(s,r),s=new A.L(s,s.gm(s),r.h("L<D.E>")),r=r.h("D.E");s.n();){q=s.d
if((q==null?r.a(q):q).x==="html")break}s=this.a
p=s.k4
if(p===$){p!==$&&A.C("_afterAfterBodyPhase")
p=s.k4=new A.fp(s,s.d)}s.x=p}}
A.e8.prototype={
J(a){var s,r=this,q=a.b
switch(q){case"html":return r.be(a)
case"frameset":r.b.N(a)
return null
case"frame":q=r.b
q.N(a)
q=q.c
if(0>=q.length)return A.c(q,-1)
q.pop()
return null
case"noframes":return r.a.ga5().J(a)
default:s=t.z
r.a.G(a.a,"unexpected-start-tag-in-frameset",A.y(["name",q],s,s))
return null}},
O(a){var s,r,q=this,p=a.b
switch(p){case"frameset":p=q.b.c
if(B.a.gt(p).x==="html")q.a.a1(a.a,u.q)
else{if(0>=p.length)return A.c(p,-1)
p.pop()}p=B.a.gt(p).x
if(p!=="frameset"){p=q.a
s=p.k3
if(s===$){s!==$&&A.C("_afterFramesetPhase")
s=p.k3=new A.fs(p,p.d)}p.x=s}return null
default:r=t.z
q.a.G(a.a,"unexpected-end-tag-in-frameset",A.y(["name",p],r,r))
return null}},
a8(){var s=B.a.gt(this.b.c)
if(s.x!=="html")this.a.a1(s.e,"eof-in-frameset")
return!1},
a2(a){this.a.a1(a.a,"unexpected-char-in-frameset")
return null}}
A.fs.prototype={
J(a){var s,r=a.b
switch(r){case"html":return this.be(a)
case"noframes":return this.a.gc2().J(a)
default:s=t.z
this.a.G(a.a,"unexpected-start-tag-after-frameset",A.y(["name",r],s,s))
return null}},
O(a){var s,r,q=a.b,p=this.a
switch(q){case"html":s=p.ok
if(s===$){s!==$&&A.C("_afterAfterFramesetPhase")
s=p.ok=new A.fq(p,p.d)}p.x=s
return null
default:r=t.z
p.G(a.a,"unexpected-end-tag-after-frameset",A.y(["name",q],r,r))
return null}},
a8(){return!1},
a2(a){this.a.a1(a.a,"unexpected-char-after-frameset")
return null}}
A.fp.prototype={
J(a){var s,r,q=a.b
if(q==="html")return this.a.ga5().J(a)
s=this.a
r=t.z
s.G(a.a,"expected-eof-but-got-start-tag",A.y(["name",q],r,r))
s.x=s.ga5()
return a},
a8(){return!1},
cb(a){var s=this.b,r=s.b
r===$&&A.b("document")
s.cv(a,r)
return null},
aL(a){return this.a.ga5().aL(a)},
a2(a){var s=this.a
s.a1(a.a,"expected-eof-but-got-char")
s.x=s.ga5()
return a},
O(a){var s=this.a,r=t.z
s.G(a.a,"expected-eof-but-got-end-tag",A.y(["name",a.b],r,r))
s.x=s.ga5()
return a}}
A.fq.prototype={
J(a){var s,r=a.b,q=this.a
switch(r){case"html":return q.ga5().J(a)
case"noframes":return q.gc2().J(a)
default:s=t.z
q.G(a.a,"expected-eof-but-got-start-tag",A.y(["name",r],s,s))
return null}},
a8(){return!1},
cb(a){var s=this.b,r=s.b
r===$&&A.b("document")
s.cv(a,r)
return null},
aL(a){return this.a.ga5().aL(a)},
a2(a){this.a.a1(a.a,"expected-eof-but-got-char")
return null},
O(a){var s=t.z
this.a.G(a.a,"expected-eof-but-got-end-tag",A.y(["name",a.b],s,s))
return null}}
A.aW.prototype={
l(a){var s,r,q=this.b
q.toString
s=B.bF.k(0,this.a)
s.toString
r=q.jw(0,A.tv(s,this.c),null)
return q.a.a==null?"ParserError on "+r:"On "+r},
$ibN:1}
A.ki.prototype={}
A.fR.prototype={
ek(){var s,r,q,p,o=A.mq(t.N),n=this.a.b.k(0,"class")
for(s=(n==null?"":n).split(" "),r=s.length,q=0;q<r;++q){p=J.nk(s[q])
if(p.length!==0)o.p(0,p)}return o}}
A.i6.prototype={
l(a){return this.ek().aD(0," ")},
gH(a){var s=this.ek()
return A.re(s,s.r,A.A(s).c)},
gm(a){return this.ek().a}}
A.jb.prototype={
sav(a){if(this.b>=this.a.length)throw A.d(A.av("No more elements"))
this.b=a},
gav(){var s=this.b
if(s>=this.a.length)throw A.d(A.av("No more elements"))
if(s>=0)return s
else return 0},
mr(a){var s,r,q,p,o=this
t.pi.a(a)
if(a==null)a=A.oT()
s=o.gav()
for(r=o.a,q=r.length;s<q;){if(!(s>=0))return A.c(r,s)
p=r[s]
if(!A.ax(a.$1(p))){o.b=s
return p}++s}o.b=s
return null},
ik(){return this.mr(null)},
ms(a){var s,r,q,p
t.gS.a(a)
s=this.gav()
for(r=this.a,q=r.length;s<q;){if(!(s>=0))return A.c(r,s)
p=r[s]
if(A.ax(a.$1(p))){this.b=s
return p}++s}return null},
i3(a){var s=B.b.aP(this.a,a,this.gav())
if(s>=0){this.b=s+a.length-1
return!0}else throw A.d(A.av("No more elements"))},
f6(a,b){if(b==null)b=this.a.length
if(b<0)b+=this.a.length
return B.b.A(this.a,a,b)},
mt(a){return this.f6(a,null)}}
A.j3.prototype={
oL(){var s,r,q,p,o,n,m,l
try{p=this.a
p.i3("charset")
p.sav(p.gav()+1)
p.ik()
o=p.a
n=p.gav()
m=o.length
if(!(n>=0&&n<m))return A.c(o,n)
if(o[n]!=="=")return null
p.sav(p.gav()+1)
p.ik()
n=p.gav()
if(!(n>=0&&n<m))return A.c(o,n)
if(o[n]!=='"'){n=p.gav()
if(!(n>=0&&n<m))return A.c(o,n)
n=o[n]==="'"}else n=!0
if(n){n=p.gav()
if(!(n>=0&&n<m))return A.c(o,n)
s=o[n]
p.sav(p.gav()+1)
r=p.gav()
p.i3(s)
p=p.f6(r,p.gav())
return p}else{q=p.gav()
try{p.ms(A.oT())
o=p.f6(q,p.gav())
return o}catch(l){if(A.bq(l) instanceof A.cj){p=p.mt(q)
return p}else throw l}}}catch(l){if(A.bq(l) instanceof A.cj)return null
else throw l}}}
A.jB.prototype={
bo(a){var s,r,q,p,o,n,m,l,k,j,i=this
i.so_(A.ms(t.N))
s=i.y=0
i.sm6(A.a([],t.t))
r=i.f
if(r==null){q=i.a
q.toString
p=i.e
p.toString
r=A.rM(q,p)
i.sig(r)}for(q=r.a,p=q.length,o=t.L,n=!1,m=!1;s<p;++s){l=B.b.E(q,s)
if(n){if(l===10){n=!1
continue}n=!1}o.a(r)
k=s+1
j=k<r.gm(r)&&(r.k(0,s)&64512)===55296&&(r.k(0,k)&64512)===56320
if(!j&&!m)if(A.rX(l)){k=i.r
k.ds(k.$ti.c.a("invalid-codepoint"))
if(55296<=l&&l<=57343)l=65533}if(l===13){n=!0
l=10}B.a.p(i.x,l)
m=j}i.w=A.qN(i.x,i.d)},
iN(a){var s=A.av("cannot change encoding when parsing a String.")
throw A.d(s)},
C(){var s,r,q=this,p=q.y,o=q.x
if(p>=o.length)return null
p=q.i1(o,p)
o=q.x
s=q.y
r=s+1
if(p){q.y=r
p=o.length
if(!(s>=0&&s<p))return A.c(o,s)
s=o[s]
q.y=r+1
if(!(r>=0&&r<p))return A.c(o,r)
r=A.ad(A.a([s,o[r]],t.t),0,null)
p=r}else{q.y=r
if(!(s>=0&&s<o.length))return A.c(o,s)
p=A.b8(o[s])}return p},
oN(){var s,r,q=this,p=q.y,o=q.x
if(p>=o.length)return null
p=q.i1(o,p)
o=q.x
s=q.y
r=o.length
if(p){if(!(s>=0&&s<r))return A.c(o,s)
p=o[s];++s
if(!(s<r))return A.c(o,s)
s=A.ad(A.a([p,o[s]],t.t),0,null)
p=s}else{if(!(s>=0&&s<r))return A.c(o,s)
p=A.b8(o[s])}return p},
i1(a,b){var s,r
t.L.a(a)
s=b+1
r=J.Y(a)
return s<r.gm(a)&&(A.a0(r.k(a,b))&64512)===55296&&(A.a0(r.k(a,s))&64512)===56320},
c6(a,b){var s,r,q=this,p=q.y,o=a.length
while(!0){s=q.oN()
if(s!=null)r=A.cx(a,s,0)===b
else r=!1
if(!r)break
q.y=q.y+s.length}return A.ad(B.a.b7(q.x,p,q.y),0,null)},
b8(a){return this.c6(a,!1)},
T(a){if(a!=null)this.y=this.y-a.length},
sig(a){this.f=t.f8.a(a)},
so_(a){this.r=t.f_.a(a)},
sm6(a){this.x=t.L.a(a)}}
A.aV.prototype={
gm(a){return this.a.length},
gH(a){var s=this.a
return new J.az(s,s.length,A.w(s).h("az<1>"))},
k(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.c(s,b)
return s[b]},
v(a,b,c){B.a.v(this.a,b,A.A(this).h("aV.E").a(c))},
sm(a,b){B.a.sm(this.a,b)},
p(a,b){B.a.p(this.a,A.A(this).h("aV.E").a(b))},
bF(a,b,c){return B.a.bF(this.a,b,A.A(this).h("aV.E").a(c))},
M(a,b){B.a.M(this.a,A.A(this).h("i<aV.E>").a(b))}}
A.ex.prototype={
jI(a,b,c,d){var s,r,q,p,o,n
t.jB.a(d)
for(s=b.gak(b),s=s.gH(s),r=new A.cV(s,t.pl),q=c.b,p=this.gjY(),o=t.h;r.n();){n=o.a(s.gq())
this.a=n
if(B.a.b1(q,p))B.a.p(d,n)
this.jI(0,n,c,d)}},
jZ(a){var s,r,q,p,o,n,m,l,k,j,i=this
t.dT.a(a)
s=i.a
for(r=a.b,q=A.w(r).h("X<1>"),r=new A.X(r,q),r=new A.L(r,r.gm(r),q.h("L<D.E>")),q=q.h("D.E"),p=!0,o=null;r.n();){n=r.d
if(n==null)n=q.a(n)
if(o==null)p=A.ix(n.c.P(i))
else if(o===514){m=n.c
do{l=i.a.a
k=l instanceof A.V?l:null
i.a=k}while(k!=null&&!A.ix(m.P(i)))
if(i.a==null)p=!1}else if(o===517){m=n.c
do{k=i.a
k=k.geg(k)
i.a=k}while(k!=null&&!A.ix(m.P(i)))
if(i.a==null)p=!1}if(!p)break
j=n.b
switch(j){case 515:n=i.a
i.a=n.geg(n)
break
case 516:l=i.a.a
i.a=l instanceof A.V?l:null
break
case 514:case 517:o=j
break
case 513:break
default:throw A.d(i.is(a))}if(i.a==null){p=!1
break}}i.a=s
return p},
cT(a){return new A.eL("'"+a.l(0)+"' selector of type "+A.dD(a).l(0)+" is not implemented")},
is(a){return new A.e4("'"+a.l(0)+"' is not a valid selector",null,null)},
pL(a){var s=this,r=a.b
switch(r.gah(r)){case"root":r=s.a
return r.x==="html"&&r.a==null
case"empty":r=s.a
r=r.gak(r)
return r.b1(r,new A.kp())
case"blank":r=s.a
r=r.gak(r)
return r.b1(r,new A.kq())
case"first-child":r=s.a
return r.geg(r)==null
case"last-child":r=s.a
return r.gjy(r)==null
case"only-child":r=s.a
if(r.geg(r)==null){r=s.a
r=r.gjy(r)==null}else r=!1
return r
case"link":return s.a.b.k(0,"href")!=null
case"visited":return!1}if(A.nS(r.gah(r)))return!1
throw A.d(s.cT(a))},
pN(a){var s=a.b
if(A.nS(s.gah(s)))return!1
throw A.d(this.cT(a))},
pM(a){return A.N(this.cT(a))},
pK(a){var s,r,q,p,o,n,m=this,l=a.b
switch(l.gah(l)){case"nth-child":s=t.b9.a(a.f).b
l=s.length
if(l===1){if(0>=l)return A.c(s,0)
r=s[0] instanceof A.ag}else r=!1
if(r){if(0>=l)return A.c(s,0)
q=t.mH.a(s[0])
p=m.a.a
if(p!=null){l=A.lx(q.c)
if(l>0){r=p.gak(p)
l=r.aj(r,m.a)===l}else l=!1}else l=!1
return l}break
case"lang":l=t.b9.a(a.f)
l=l.a
l.toString
o=A.ad(B.w.b7(l.a.c,l.b,l.c),0,null)
n=A.qH(m.a)
return n!=null&&B.b.Z(n,o)}throw A.d(m.cT(a))},
pJ(a){if(!A.ix(t.g9.a(a.b).P(this)))return!1
if(a.d instanceof A.cn)return!0
if(a.gjx()==="")return this.a.w==null
throw A.d(this.cT(a))},
pI(a){var s,r,q=a.b,p=this.a.b.k(0,q.gah(q).toLowerCase())
if(p==null)return!1
q=a.d
if(q===535)return!0
s=A.k(a.e)
switch(q){case 28:return p===s
case 530:return B.a.b1(A.a(p.split(" "),t.s),new A.kn(s))
case 531:if(B.b.Z(p,s)){q=p.length
r=s.length
if(q!==r){if(!(r<q))return A.c(p,r)
q=p[r]==="-"}else q=!0}else q=!1
return q
case 532:return B.b.Z(p,s)
case 533:return B.b.bh(p,s)
case 534:return B.b.F(p,s)
default:throw A.d(this.is(a))}}}
A.kp.prototype={
$1(a){var s
t.J.a(a)
if(!(a instanceof A.V))if(a instanceof A.bT){s=J.bB(a.w)
a.w=s
s=s.length!==0}else s=!1
else s=!0
return!s},
$S:29}
A.kq.prototype={
$1(a){var s
t.J.a(a)
if(!(a instanceof A.V))if(a instanceof A.bT){s=J.bB(a.w)
a.w=s
s=new A.hy(s).b1(0,new A.ko())}else s=!1
else s=!0
return!s},
$S:29}
A.ko.prototype={
$1(a){return!A.n2(A.a0(a))},
$S:10}
A.kn.prototype={
$1(a){A.aw(a)
return a.length!==0&&a===this.a},
$S:7}
A.b3.prototype={}
A.bS.prototype={}
A.ci.prototype={
gca(a){return 2},
saC(a,b){this.e=t.oP.a(b)}}
A.J.prototype={
gca(a){return 3}}
A.ba.prototype={
gaC(a){var s=this,r=s.c
if(r==null){r=s.c=J.bB(s.b)
s.b=null}return r}}
A.m.prototype={
gca(a){return 6}}
A.E.prototype={
gca(a){return 1}}
A.cR.prototype={
gca(a){return 0}}
A.d2.prototype={
gca(a){return 4}}
A.dT.prototype={
gca(a){return 5}}
A.eG.prototype={}
A.lT.prototype={
$0(){var s,r,q=A.bh(t.N,t.I)
for(s=B.Y.gbl(),s=s.gH(s);s.n();){r=s.gq()
if(0>=r.length)return A.c(r,0)
J.mf(q.ei(r[0],new A.lS()),r)}return q},
$S:35}
A.lS.prototype={
$0(){return A.a([],t.s)},
$S:36}
A.e5.prototype={
gli(a){var s=this.x
s===$&&A.b("state")
return s},
gq(){var s=this.at
s.toString
return s},
dv(a){var s=this.Q
s.toString
B.a.gt(s).b=this.ay.l(0)},
co(a){},
c4(a){this.dv(a)},
bR(a){var s,r=this
A.aw(a)
if(r.Q==null)r.seT(0,A.a([],t.kG))
s=r.ax
s.a=""
s.a=a
r.ay.a=""
s=r.Q
s.toString
B.a.p(s,new A.eG())},
n(){var s,r=this,q=r.a,p=r.r
while(!0){s=q.r
if(!(s.b===s.c&&p.b===p.c))break
if(!A.ax(r.lj(0))){r.at=null
return!1}}if(!s.gag(s)){q=q.r.jK()
r.at=new A.m(null,null,q)}else r.smx(p.jK())
return!0},
bo(a){var s=this
s.z=0
s.r.bB(0)
s.w=null
s.y.a=""
s.seT(0,null)
s.seS(null)
s.si(t.c.a(s.gD()))},
j(a){var s=this.r
s.ds(s.$ti.c.a(a))},
nB(a){var s,r,q,p,o,n,m,l,k=this,j=null,i="illegal-codepoint-for-numeric-entity"
if(a){s=A.tq()
r=16}else{s=A.tp()
r=10}q=A.a([],t.D)
p=k.a
o=p.C()
while(!0){if(!(A.ax(s.$1(o))&&o!=null))break
B.a.p(q,o)
o=p.C()}n=A.cv(B.a.aU(q),r)
m=B.bH.k(0,n)
if(m!=null){l=t.z
l=A.y(["charAsInt",n],l,l)
k.j(new A.m(l,j,i))}else if(55296<=n&&n<=57343||n>1114111){l=t.z
l=A.y(["charAsInt",n],l,l)
k.j(new A.m(l,j,i))
m="\ufffd"}else{if(!(1<=n&&n<=8))if(!(14<=n&&n<=31))if(!(127<=n&&n<=159))l=64976<=n&&n<=65007||B.a.F(B.bf,n)
else l=!0
else l=!0
else l=!0
if(l){l=t.z
l=A.y(["charAsInt",n],l,l)
k.j(new A.m(l,j,i))}m=A.ad(A.a([n],t.t),0,j)}if(o!==";"){k.j(new A.m(j,j,"numeric-entity-without-semicolon"))
p.T(o)}return m},
dP(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.a,g=A.a([h.C()],t.D)
if(0>=g.length)return A.c(g,0)
if(!A.a3(g[0])){if(0>=g.length)return A.c(g,0)
s=g[0]
s=s==="<"||s==="&"||s==null||a===s}else s=!0
if(s){if(0>=g.length)return A.c(g,0)
h.T(g[0])
r="&"}else{if(0>=g.length)return A.c(g,0)
s=g[0]
if(s==="#"){B.a.p(g,h.C())
if(B.a.gt(g)==="x"||B.a.gt(g)==="X"){B.a.p(g,h.C())
q=!0}else q=!1
if(!(q&&A.p5(B.a.gt(g))))s=!q&&A.m4(B.a.gt(g))
else s=!0
if(s){h.T(B.a.gt(g))
r=j.nB(q)}else{j.j(new A.m(i,i,"expected-numeric-entity"))
if(0>=g.length)return A.c(g,-1)
h.T(g.pop())
r="&"+B.a.aU(g)}}else{p=$.pC()
s.toString
o=p.k(0,s)
if(o==null)o=B.v
for(;B.a.gt(g)!=null;){s=J.pJ(o,new A.jD(B.a.aU(g)))
o=A.j(s,!1,s.$ti.h("i.E"))
if(o.length===0)break
B.a.p(g,h.C())}m=g.length-1
while(!0){if(!(m>1)){n=i
break}l=B.a.aU(B.a.b7(g,0,m))
if(B.Y.ai(l)){n=l
break}--m}if(n!=null){s=n.length
p=s-1
if(!(p>=0))return A.c(n,p)
s=n[p]!==";"
if(s)j.j(new A.m(i,i,"named-entity-without-semicolon"))
if(s)if(b){if(!(m>=0&&m<g.length))return A.c(g,m)
s=g[m]
if(!(A.aQ(s)||A.m4(s))){if(!(m<g.length))return A.c(g,m)
s=g[m]==="="}else s=!0}else s=!1
else s=!1
if(s){if(0>=g.length)return A.c(g,-1)
h.T(g.pop())
r="&"+B.a.aU(g)}else{r=B.Y.k(0,n)
if(0>=g.length)return A.c(g,-1)
h.T(g.pop())
r=A.k(r)+B.a.aU(A.n7(g,m,i,t.jv))}}else{j.j(new A.m(i,i,"expected-named-entity"))
if(0>=g.length)return A.c(g,-1)
h.T(g.pop())
r="&"+B.a.aU(g)}}}if(b)j.ay.a+=r
else{if(A.a3(r))k=new A.cR(i,r)
else k=new A.E(i,r)
j.j(k)}},
iV(){return this.dP(null,!1)},
b3(){var s,r,q,p,o,n,m,l=this,k=null,j=l.w
j.toString
if(j instanceof A.bS){s=j.b
if(s==null)s=k
else{r=t.E
r=A.ad(new A.I(new A.a9(s),r.h("h(u.E)").a(A.bL()),r.h("I<u.E,h>")),0,k)
s=r}j.b=s
if(j instanceof A.J){if(l.Q!=null)l.j(new A.m(k,k,"attributes-in-end-tag"))
if(j.c)l.j(new A.m(k,k,"this-closing-flag-on-end-tag"))
q=j}else if(j instanceof A.ci){j.saC(0,A.ab(k,k,t.K,t.N))
s=l.Q
if(s!=null)for(r=s.length,p=0;p<s.length;s.length===r||(0,A.f)(s),++p){o=s[p]
n=j.e
m=o.a
m.toString
n.ei(m,new A.jE(o))}q=j}else q=j
l.seT(0,k)
l.seS(k)}else q=j
l.j(q)
l.si(t.c.a(l.gD()))},
nG(){var s,r=this,q=null,p=r.a,o=p.C()
if(o==="&")r.si(t.c.a(r.gnW()))
else if(o==="<")r.si(t.c.a(r.gpv()))
else if(o==="\x00"){r.j(new A.m(q,q,"invalid-codepoint"))
r.j(new A.E(q,"\x00"))}else if(o==null)return!1
else if(A.a3(o)){p=p.c6(" \n\r\t\f",!0)
r.j(new A.cR(q,o+p))}else{s=p.b8("&<\x00")
r.j(new A.E(q,o+s))}return!0},
nX(){this.iV()
this.si(t.c.a(this.gD()))
return!0},
pd(){var s,r=this,q=null,p=r.a,o=p.C()
if(o==="&")r.si(t.c.a(r.gnm()))
else if(o==="<")r.si(t.c.a(r.gpb()))
else if(o==null)return!1
else if(o==="\x00"){r.j(new A.m(q,q,"invalid-codepoint"))
r.j(new A.E(q,"\ufffd"))}else if(A.a3(o)){p=p.c6(" \n\r\t\f",!0)
r.j(new A.cR(q,o+p))}else{s=p.b8("&<")
r.j(new A.E(q,o+s))}return!0},
nn(){this.iV()
this.si(t.c.a(this.gcF()))
return!0},
p6(){var s,r=this,q=null,p=r.a,o=p.C()
if(o==="<")r.si(t.c.a(r.gp0()))
else if(o==="\x00"){r.j(new A.m(q,q,"invalid-codepoint"))
r.j(new A.E(q,"\ufffd"))}else if(o==null)return!1
else{s=p.b8("<\x00")
r.j(new A.E(q,o+s))}return!0},
kO(){var s,r=this,q=null,p=r.a,o=p.C()
if(o==="<")r.si(t.c.a(r.gkM()))
else if(o==="\x00"){r.j(new A.m(q,q,"invalid-codepoint"))
r.j(new A.E(q,"\ufffd"))}else if(o==null)return!1
else{s=p.b8("<\x00")
r.j(new A.E(q,o+s))}return!0},
oP(){var s=this,r=null,q=s.a,p=q.C()
if(p==null)return!1
else if(p==="\x00"){s.j(new A.m(r,r,"invalid-codepoint"))
s.j(new A.E(r,"\ufffd"))}else{q=q.b8("\x00")
s.j(new A.E(r,p+q))}return!0},
pw(){var s=this,r=null,q=s.a,p=q.C()
if(p==="!")s.si(t.c.a(s.goC()))
else if(p==="/")s.si(t.c.a(s.gnp()))
else if(A.aQ(p)){s.w=A.aJ(p,r,r,!1)
s.si(t.c.a(s.gjR()))}else if(p===">"){s.j(new A.m(r,r,"expected-tag-name-but-got-right-bracket"))
s.j(new A.E(r,"<>"))
s.si(t.c.a(s.gD()))}else if(p==="?"){s.j(new A.m(r,r,"expected-tag-name-but-got-question-mark"))
q.T(p)
s.si(t.c.a(s.gfh()))}else{s.j(new A.m(r,r,"expected-tag-name"))
s.j(new A.E(r,"<"))
q.T(p)
s.si(t.c.a(s.gD()))}return!0},
nq(){var s,r=this,q=null,p=r.a,o=p.C()
if(A.aQ(o)){r.w=new A.J(o,!1)
r.si(t.c.a(r.gjR()))}else if(o===">"){r.j(new A.m(q,q,u.g))
r.si(t.c.a(r.gD()))}else if(o==null){r.j(new A.m(q,q,"expected-closing-tag-but-got-eof"))
r.j(new A.E(q,"</"))
r.si(t.c.a(r.gD()))}else{s=t.z
s=A.y(["data",o],s,s)
r.j(new A.m(s,q,"expected-closing-tag-but-got-char"))
p.T(o)
r.si(t.c.a(r.gfh()))}return!0},
pu(){var s,r=this,q=null,p=r.a.C()
if(A.a3(p))r.si(t.c.a(r.gbA()))
else if(p===">")r.b3()
else if(p==null){r.j(new A.m(q,q,"eof-in-tag-name"))
r.si(t.c.a(r.gD()))}else if(p==="/")r.si(t.c.a(r.gbw()))
else if(p==="\x00"){r.j(new A.m(q,q,"invalid-codepoint"))
s=t.fn.a(r.w)
s.b=A.k(s.b)+"\ufffd"}else{s=t.fn.a(r.w)
s.b=A.k(s.b)+p}return!0},
pc(){var s=this,r=s.a,q=r.C()
if(q==="/"){s.y.a=""
s.si(t.c.a(s.gp9()))}else{s.j(new A.E(null,"<"))
r.T(q)
s.si(t.c.a(s.gcF()))}return!0},
pa(){var s=this,r=s.a,q=r.C()
if(A.aQ(q)){s.y.a+=A.k(q)
s.si(t.c.a(s.gp7()))}else{s.j(new A.E(null,"</"))
r.T(q)
s.si(t.c.a(s.gcF()))}return!0},
dC(){var s=this.w
return s instanceof A.bS&&s.b.toLowerCase()===this.y.l(0).toLowerCase()},
p8(){var s,r=this,q=r.dC(),p=r.a,o=p.C()
if(A.a3(o)&&q){r.w=new A.J(r.y.l(0),!1)
r.si(t.c.a(r.gbA()))}else if(o==="/"&&q){r.w=new A.J(r.y.l(0),!1)
r.si(t.c.a(r.gbw()))}else if(o===">"&&q){r.w=new A.J(r.y.l(0),!1)
r.b3()
r.si(t.c.a(r.gD()))}else{s=r.y
if(A.aQ(o))s.a+=A.k(o)
else{s=s.l(0)
r.j(new A.E(null,"</"+s))
p.T(o)
r.si(t.c.a(r.gcF()))}}return!0},
p5(){var s=this,r=s.a,q=r.C()
if(q==="/"){s.y.a=""
s.si(t.c.a(s.goZ()))}else{s.j(new A.E(null,"<"))
r.T(q)
s.si(t.c.a(s.gej()))}return!0},
p_(){var s=this,r=s.a,q=r.C()
if(A.aQ(q)){s.y.a+=A.k(q)
s.si(t.c.a(s.goX()))}else{s.j(new A.E(null,"</"))
r.T(q)
s.si(t.c.a(s.gej()))}return!0},
oY(){var s,r=this,q=r.dC(),p=r.a,o=p.C()
if(A.a3(o)&&q){r.w=new A.J(r.y.l(0),!1)
r.si(t.c.a(r.gbA()))}else if(o==="/"&&q){r.w=new A.J(r.y.l(0),!1)
r.si(t.c.a(r.gbw()))}else if(o===">"&&q){r.w=new A.J(r.y.l(0),!1)
r.b3()
r.si(t.c.a(r.gD()))}else{s=r.y
if(A.aQ(o))s.a+=A.k(o)
else{s=s.l(0)
r.j(new A.E(null,"</"+s))
p.T(o)
r.si(t.c.a(r.gej()))}}return!0},
kN(){var s=this,r=s.a,q=r.C()
if(q==="/"){s.y.a=""
s.si(t.c.a(s.gkx()))}else if(q==="!"){s.j(new A.E(null,"<!"))
s.si(t.c.a(s.gkB()))}else{s.j(new A.E(null,"<"))
r.T(q)
s.si(t.c.a(s.gbN()))}return!0},
ky(){var s=this,r=s.a,q=r.C()
if(A.aQ(q)){s.y.a+=A.k(q)
s.si(t.c.a(s.gkv()))}else{s.j(new A.E(null,"</"))
r.T(q)
s.si(t.c.a(s.gbN()))}return!0},
kw(){var s,r=this,q=r.dC(),p=r.a,o=p.C()
if(A.a3(o)&&q){r.w=new A.J(r.y.l(0),!1)
r.si(t.c.a(r.gbA()))}else if(o==="/"&&q){r.w=new A.J(r.y.l(0),!1)
r.si(t.c.a(r.gbw()))}else if(o===">"&&q){r.w=new A.J(r.y.l(0),!1)
r.b3()
r.si(t.c.a(r.gD()))}else{s=r.y
if(A.aQ(o))s.a+=A.k(o)
else{s=s.l(0)
r.j(new A.E(null,"</"+s))
p.T(o)
r.si(t.c.a(r.gbN()))}}return!0},
kC(){var s=this,r=s.a,q=r.C()
if(q==="-"){s.j(new A.E(null,"-"))
s.si(t.c.a(s.gkz()))}else{r.T(q)
s.si(t.c.a(s.gbN()))}return!0},
kA(){var s=this,r=s.a,q=r.C()
if(q==="-"){s.j(new A.E(null,"-"))
s.si(t.c.a(s.ghf()))}else{r.T(q)
s.si(t.c.a(s.gbN()))}return!0},
kL(){var s,r=this,q=null,p=r.a,o=p.C()
if(o==="-"){r.j(new A.E(q,"-"))
r.si(t.c.a(r.gkE()))}else if(o==="<")r.si(t.c.a(r.geF()))
else if(o==="\x00"){r.j(new A.m(q,q,"invalid-codepoint"))
r.j(new A.E(q,"\ufffd"))}else if(o==null)r.si(t.c.a(r.gD()))
else{s=p.b8("<-\x00")
r.j(new A.E(q,o+s))}return!0},
kF(){var s=this,r=null,q=s.a.C()
if(q==="-"){s.j(new A.E(r,"-"))
s.si(t.c.a(s.ghf()))}else if(q==="<")s.si(t.c.a(s.geF()))
else if(q==="\x00"){s.j(new A.m(r,r,"invalid-codepoint"))
s.j(new A.E(r,"\ufffd"))
s.si(t.c.a(s.gbc()))}else if(q==null)s.si(t.c.a(s.gD()))
else{s.j(new A.E(r,q))
s.si(t.c.a(s.gbc()))}return!0},
kD(){var s=this,r=null,q=s.a.C()
if(q==="-")s.j(new A.E(r,"-"))
else if(q==="<")s.si(t.c.a(s.geF()))
else if(q===">"){s.j(new A.E(r,">"))
s.si(t.c.a(s.gbN()))}else if(q==="\x00"){s.j(new A.m(r,r,"invalid-codepoint"))
s.j(new A.E(r,"\ufffd"))
s.si(t.c.a(s.gbc()))}else if(q==null)s.si(t.c.a(s.gD()))
else{s.j(new A.E(r,q))
s.si(t.c.a(s.gbc()))}return!0},
kK(){var s,r=this,q=r.a,p=q.C()
if(p==="/"){r.y.a=""
r.si(t.c.a(r.gkI()))}else if(A.aQ(p)){q=A.k(p)
r.j(new A.E(null,"<"+q))
s=r.y
s.a=""
s.a=q
r.si(t.c.a(r.gkn()))}else{r.j(new A.E(null,"<"))
q.T(p)
r.si(t.c.a(r.gbc()))}return!0},
kJ(){var s=this,r=s.a,q=r.C()
if(A.aQ(q)){r=s.y
r.a=""
r.a=A.k(q)
s.si(t.c.a(s.gkG()))}else{s.j(new A.E(null,"</"))
r.T(q)
s.si(t.c.a(s.gbc()))}return!0},
kH(){var s,r=this,q=r.dC(),p=r.a,o=p.C()
if(A.a3(o)&&q){r.w=new A.J(r.y.l(0),!1)
r.si(t.c.a(r.gbA()))}else if(o==="/"&&q){r.w=new A.J(r.y.l(0),!1)
r.si(t.c.a(r.gbw()))}else if(o===">"&&q){r.w=new A.J(r.y.l(0),!1)
r.b3()
r.si(t.c.a(r.gD()))}else{s=r.y
if(A.aQ(o))s.a+=A.k(o)
else{s=s.l(0)
r.j(new A.E(null,"</"+s))
p.T(o)
r.si(t.c.a(r.gbc()))}}return!0},
ko(){var s=this,r=s.a,q=r.C()
if(A.a3(q)||q==="/"||q===">"){s.j(new A.E(q==null?new A.a2(""):null,q))
r=t.c
if(s.y.l(0).toLowerCase()==="script")s.si(r.a(s.gbM()))
else s.si(r.a(s.gbc()))}else if(A.aQ(q)){s.j(new A.E(q==null?new A.a2(""):null,q))
s.y.a+=A.k(q)}else{r.T(q)
s.si(t.c.a(s.gbc()))}return!0},
ku(){var s=this,r=null,q=s.a.C()
if(q==="-"){s.j(new A.E(r,"-"))
s.si(t.c.a(s.gkr()))}else if(q==="<"){s.j(new A.E(r,"<"))
s.si(t.c.a(s.geE()))}else if(q==="\x00"){s.j(new A.m(r,r,"invalid-codepoint"))
s.j(new A.E(r,"\ufffd"))}else if(q==null){s.j(new A.m(r,r,"eof-in-script-in-script"))
s.si(t.c.a(s.gD()))}else s.j(new A.E(r,q))
return!0},
ks(){var s=this,r=null,q=s.a.C()
if(q==="-"){s.j(new A.E(r,"-"))
s.si(t.c.a(s.gkp()))}else if(q==="<"){s.j(new A.E(r,"<"))
s.si(t.c.a(s.geE()))}else if(q==="\x00"){s.j(new A.m(r,r,"invalid-codepoint"))
s.j(new A.E(r,"\ufffd"))
s.si(t.c.a(s.gbM()))}else if(q==null){s.j(new A.m(r,r,"eof-in-script-in-script"))
s.si(t.c.a(s.gD()))}else{s.j(new A.E(r,q))
s.si(t.c.a(s.gbM()))}return!0},
kq(){var s=this,r=null,q=s.a.C()
if(q==="-")s.j(new A.E(r,"-"))
else if(q==="<"){s.j(new A.E(r,"<"))
s.si(t.c.a(s.geE()))}else if(q===">"){s.j(new A.E(r,">"))
s.si(t.c.a(s.gbN()))}else if(q==="\x00"){s.j(new A.m(r,r,"invalid-codepoint"))
s.j(new A.E(r,"\ufffd"))
s.si(t.c.a(s.gbM()))}else if(q==null){s.j(new A.m(r,r,"eof-in-script-in-script"))
s.si(t.c.a(s.gD()))}else{s.j(new A.E(r,q))
s.si(t.c.a(s.gbM()))}return!0},
kt(){var s=this,r=s.a,q=r.C()
if(q==="/"){s.j(new A.E(null,"/"))
s.y.a=""
s.si(t.c.a(s.gkl()))}else{r.T(q)
s.si(t.c.a(s.gbM()))}return!0},
km(){var s=this,r=s.a,q=r.C()
if(A.a3(q)||q==="/"||q===">"){s.j(new A.E(q==null?new A.a2(""):null,q))
r=t.c
if(s.y.l(0).toLowerCase()==="script")s.si(r.a(s.gbc()))
else s.si(r.a(s.gbM()))}else if(A.aQ(q)){s.j(new A.E(q==null?new A.a2(""):null,q))
s.y.a+=A.k(q)}else{r.T(q)
s.si(t.c.a(s.gbM()))}return!0},
n7(){var s=this,r=null,q=s.a,p=q.C()
if(A.a3(p))q.c6(" \n\r\t\f",!0)
else{q=p==null
if(!q&&A.aQ(p)){s.bR(p)
s.si(t.c.a(s.gbT()))}else if(p===">")s.b3()
else if(p==="/")s.si(t.c.a(s.gbw()))
else if(q){s.j(new A.m(r,r,"expected-attribute-name-but-got-eof"))
s.si(t.c.a(s.gD()))}else if(B.b.F("'\"=<",p)){s.j(new A.m(r,r,"invalid-character-in-attribute-name"))
s.bR(p)
s.si(t.c.a(s.gbT()))}else if(p==="\x00"){s.j(new A.m(r,r,"invalid-codepoint"))
s.bR("\ufffd")
s.si(t.c.a(s.gbT()))}else{s.bR(p)
s.si(t.c.a(s.gbT()))}}return!0},
n0(){var s,r,q,p,o=this,n=null,m=o.a,l=m.C()
if(l==="="){o.si(t.c.a(o.giJ()))
s=!0
r=!1}else if(A.aQ(l)){q=o.ax
q.a+=A.k(l)
q.a+=m.c6("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",!0)
s=!1
r=!1}else if(l===">"){s=!0
r=!0}else{if(A.a3(l)){o.si(t.c.a(o.gmO()))
s=!0}else if(l==="/"){o.si(t.c.a(o.gbw()))
s=!0}else if(l==="\x00"){o.j(new A.m(n,n,"invalid-codepoint"))
o.ax.a+="\ufffd"
s=!1}else if(l==null){o.j(new A.m(n,n,"eof-in-attribute-name"))
o.si(t.c.a(o.gD()))
s=!0}else{if(B.b.F("'\"<",l)){o.j(new A.m(n,n,"invalid-character-in-attribute-name"))
o.ax.a+=l}else o.ax.a+=l
s=!1}r=!1}if(s){o.dv(-1)
m=o.ax.a
q=t.E
p=A.ad(new A.I(new A.a9(m.charCodeAt(0)==0?m:m),q.h("h(u.E)").a(A.bL()),q.h("I<u.E,h>")),0,n)
m=o.Q
m.toString
B.a.gt(m).a=p
if(o.as==null)o.seS(A.nE(t.N))
if(o.as.F(0,p))o.j(new A.m(n,n,"duplicate-attribute"))
o.as.p(0,p)
if(r)o.b3()}return!0},
mP(){var s=this,r=null,q=s.a,p=q.C()
if(A.a3(p))q.c6(" \n\r\t\f",!0)
else if(p==="=")s.si(t.c.a(s.giJ()))
else if(p===">")s.b3()
else{q=p==null
if(!q&&A.aQ(p)){s.bR(p)
s.si(t.c.a(s.gbT()))}else if(p==="/")s.si(t.c.a(s.gbw()))
else if(p==="\x00"){s.j(new A.m(r,r,"invalid-codepoint"))
s.bR("\ufffd")
s.si(t.c.a(s.gbT()))}else if(q){s.j(new A.m(r,r,"expected-end-of-tag-but-got-eof"))
s.si(t.c.a(s.gD()))}else if(B.b.F("'\"<",p)){s.j(new A.m(r,r,"invalid-character-after-attribute-name"))
s.bR(p)
s.si(t.c.a(s.gbT()))}else{s.bR(p)
s.si(t.c.a(s.gbT()))}}return!0},
n8(){var s=this,r=null,q=s.a,p=q.C()
if(A.a3(p))q.c6(" \n\r\t\f",!0)
else if(p==='"'){s.co(0)
s.si(t.c.a(s.gn1()))}else if(p==="&"){s.si(t.c.a(s.gdM()))
q.T(p)
s.co(0)}else if(p==="'"){s.co(0)
s.si(t.c.a(s.gn3()))}else if(p===">"){s.j(new A.m(r,r,u.A))
s.b3()}else if(p==="\x00"){s.j(new A.m(r,r,"invalid-codepoint"))
s.co(-1)
s.ay.a+="\ufffd"
s.si(t.c.a(s.gdM()))}else if(p==null){s.j(new A.m(r,r,"expected-attribute-value-but-got-eof"))
s.si(t.c.a(s.gD()))}else if(B.b.F("=<`",p)){s.j(new A.m(r,r,"equals-in-unquoted-attribute-value"))
s.co(-1)
s.ay.a+=p
s.si(t.c.a(s.gdM()))}else{s.co(-1)
s.ay.a+=p
s.si(t.c.a(s.gdM()))}return!0},
n2(){var s,r=this,q=null,p=r.a,o=p.C()
if(o==='"'){r.c4(-1)
r.dv(0)
r.si(t.c.a(r.giA()))}else if(o==="&")r.dP('"',!0)
else if(o==="\x00"){r.j(new A.m(q,q,"invalid-codepoint"))
r.ay.a+="\ufffd"}else if(o==null){r.j(new A.m(q,q,"eof-in-attribute-value-double-quote"))
r.c4(-1)
r.si(t.c.a(r.gD()))}else{s=r.ay
s.a+=o
s.a+=p.b8('"&')}return!0},
n4(){var s,r=this,q=null,p=r.a,o=p.C()
if(o==="'"){r.c4(-1)
r.dv(0)
r.si(t.c.a(r.giA()))}else if(o==="&")r.dP("'",!0)
else if(o==="\x00"){r.j(new A.m(q,q,"invalid-codepoint"))
r.ay.a+="\ufffd"}else if(o==null){r.j(new A.m(q,q,"eof-in-attribute-value-single-quote"))
r.c4(-1)
r.si(t.c.a(r.gD()))}else{s=r.ay
s.a+=o
s.a+=p.b8("'&")}return!0},
n5(){var s,r=this,q=null,p=r.a,o=p.C()
if(A.a3(o)){r.c4(-1)
r.si(t.c.a(r.gbA()))}else if(o==="&")r.dP(">",!0)
else if(o===">"){r.c4(-1)
r.b3()}else if(o==null){r.j(new A.m(q,q,"eof-in-attribute-value-no-quotes"))
r.c4(-1)
r.si(t.c.a(r.gD()))}else if(B.b.F("\"'=<`",o)){r.j(new A.m(q,q,u.V))
r.ay.a+=o}else if(o==="\x00"){r.j(new A.m(q,q,"invalid-codepoint"))
r.ay.a+="\ufffd"}else{s=r.ay
s.a+=o
s.a+=p.b8("&>\"'=<` \n\r\t\f")}return!0},
mQ(){var s=this,r=null,q=s.a,p=q.C()
if(A.a3(p))s.si(t.c.a(s.gbA()))
else if(p===">")s.b3()
else if(p==="/")s.si(t.c.a(s.gbw()))
else if(p==null){s.j(new A.m(r,r,"unexpected-EOF-after-attribute-value"))
q.T(p)
s.si(t.c.a(s.gD()))}else{s.j(new A.m(r,r,u.H))
q.T(p)
s.si(t.c.a(s.gbA()))}return!0},
kP(){var s=this,r=null,q=s.a,p=q.C()
if(p===">"){t.fn.a(s.w).c=!0
s.b3()}else if(p==null){s.j(new A.m(r,r,"unexpected-EOF-after-solidus-in-tag"))
q.T(p)
s.si(t.c.a(s.gD()))}else{s.j(new A.m(r,r,u.B))
q.T(p)
s.si(t.c.a(s.gbA()))}return!0},
ng(){var s=this,r=s.a,q=r.b8(">")
q=A.bp(q,"\x00","\ufffd")
s.j(new A.d2(null,q))
r.C()
s.si(t.c.a(s.gD()))
return!0},
oD(){var s,r,q,p,o,n=this,m=null,l=n.a,k=A.a([l.C()],t.D)
if(B.a.gt(k)==="-"){B.a.p(k,l.C())
if(B.a.gt(k)==="-"){n.w=new A.d2(new A.a2(""),m)
n.si(t.c.a(n.gny()))
return!0}}else if(B.a.gt(k)==="d"||B.a.gt(k)==="D"){r=0
while(!0){if(!(r<6)){s=!0
break}q=B.bp[r]
p=l.C()
B.a.p(k,p)
if(p!=null)o=!A.cx(q,p,0)
else o=!0
if(o){s=!1
break}++r}if(s){n.w=new A.dT(!0)
n.si(t.c.a(n.gnN()))
return!0}}else{if(B.a.gt(k)==="["){o=n.f
if(o!=null){o=o.d.c
o=o.length!==0&&B.a.gt(o).w!=n.f.d.a}else o=!1}else o=!1
if(o){r=0
while(!0){if(!(r<6)){s=!0
break}q=B.bz[r]
B.a.p(k,l.C())
if(B.a.gt(k)!==q){s=!1
break}++r}if(s){n.si(t.c.a(n.gnk()))
return!0}}}n.j(new A.m(m,m,"expected-dashes-or-doctype"))
for(;o=k.length,o!==0;){if(0>=o)return A.c(k,-1)
o=k.pop()
if(o!=null)l.y=l.y-o.length}n.si(t.c.a(n.gfh()))
return!0},
nz(){var s,r=this,q=null,p=r.a.C()
if(p==="-")r.si(t.c.a(r.gnw()))
else if(p==="\x00"){r.j(new A.m(q,q,"invalid-codepoint"))
t.g.a(r.w).b.a+="\ufffd"}else if(p===">"){r.j(new A.m(q,q,"incorrect-comment"))
s=r.w
s.toString
r.j(s)
r.si(t.c.a(r.gD()))}else if(p==null){r.j(new A.m(q,q,"eof-in-comment"))
s=r.w
s.toString
r.j(s)
r.si(t.c.a(r.gD()))}else{t.g.a(r.w).b.a+=p
r.si(t.c.a(r.gbU()))}return!0},
nx(){var s,r,q=this,p=null,o=q.a.C()
if(o==="-")q.si(t.c.a(q.giS()))
else if(o==="\x00"){q.j(new A.m(p,p,"invalid-codepoint"))
t.g.a(q.w).b.a+="-\ufffd"}else if(o===">"){q.j(new A.m(p,p,"incorrect-comment"))
s=q.w
s.toString
q.j(s)
q.si(t.c.a(q.gD()))}else if(o==null){q.j(new A.m(p,p,"eof-in-comment"))
s=q.w
s.toString
q.j(s)
q.si(t.c.a(q.gD()))}else{s=t.g.a(q.w).b
r=s.a+="-"
s.a=r+o
q.si(t.c.a(q.gbU()))}return!0},
nA(){var s,r=this,q=null,p=r.a,o=p.C()
if(o==="-")r.si(t.c.a(r.giR()))
else if(o==="\x00"){r.j(new A.m(q,q,"invalid-codepoint"))
t.g.a(r.w).b.a+="\ufffd"}else if(o==null){r.j(new A.m(q,q,"eof-in-comment"))
p=r.w
p.toString
r.j(p)
r.si(t.c.a(r.gD()))}else{s=t.g.a(r.w)
s.b.a+=o
p=p.b8("-\x00")
s.b.a+=p}return!0},
nu(){var s,r,q=this,p=null,o=q.a.C()
if(o==="-")q.si(t.c.a(q.giS()))
else if(o==="\x00"){q.j(new A.m(p,p,"invalid-codepoint"))
t.g.a(q.w).b.a+="-\ufffd"
q.si(t.c.a(q.gbU()))}else if(o==null){q.j(new A.m(p,p,"eof-in-comment-end-dash"))
s=q.w
s.toString
q.j(s)
q.si(t.c.a(q.gD()))}else{s=t.g.a(q.w).b
r=s.a+="-"
s.a=r+o
q.si(t.c.a(q.gbU()))}return!0},
nv(){var s,r,q=this,p=null,o=q.a.C()
if(o===">"){s=q.w
s.toString
q.j(s)
q.si(t.c.a(q.gD()))}else if(o==="\x00"){q.j(new A.m(p,p,"invalid-codepoint"))
t.g.a(q.w).b.a+="--\ufffd"
q.si(t.c.a(q.gbU()))}else if(o==="!"){q.j(new A.m(p,p,u.d))
q.si(t.c.a(q.gns()))}else if(o==="-"){q.j(new A.m(p,p,u.K))
s=t.g.a(q.w)
o.toString
s.b.a+=o}else if(o==null){q.j(new A.m(p,p,"eof-in-comment-double-dash"))
s=q.w
s.toString
q.j(s)
q.si(t.c.a(q.gD()))}else{q.j(new A.m(p,p,"unexpected-char-in-comment"))
s=t.g.a(q.w).b
r=s.a+="--"
s.a=r+o
q.si(t.c.a(q.gbU()))}return!0},
nt(){var s,r,q=this,p=null,o=q.a.C()
if(o===">"){s=q.w
s.toString
q.j(s)
q.si(t.c.a(q.gD()))}else if(o==="-"){t.g.a(q.w).b.a+="--!"
q.si(t.c.a(q.giR()))}else if(o==="\x00"){q.j(new A.m(p,p,"invalid-codepoint"))
t.g.a(q.w).b.a+="--!\ufffd"
q.si(t.c.a(q.gbU()))}else if(o==null){q.j(new A.m(p,p,"eof-in-comment-end-bang-state"))
s=q.w
s.toString
q.j(s)
q.si(t.c.a(q.gD()))}else{s=t.g.a(q.w).b
r=s.a+="--!"
s.a=r+o
q.si(t.c.a(q.gbU()))}return!0},
nO(){var s=this,r=null,q=s.a,p=q.C()
if(A.a3(p))s.si(t.c.a(s.giK()))
else if(p==null){s.j(new A.m(r,r,"expected-doctype-name-but-got-eof"))
q=t.i.a(s.w)
q.e=!1
s.j(q)
s.si(t.c.a(s.gD()))}else{s.j(new A.m(r,r,"need-space-after-doctype"))
q.T(p)
s.si(t.c.a(s.giK()))}return!0},
n9(){var s,r=this,q=null,p=r.a.C()
if(A.a3(p))return!0
else if(p===">"){r.j(new A.m(q,q,u.f))
s=t.i.a(r.w)
s.e=!1
r.j(s)
r.si(t.c.a(r.gD()))}else if(p==="\x00"){r.j(new A.m(q,q,"invalid-codepoint"))
t.i.a(r.w).d="\ufffd"
r.si(t.c.a(r.gfu()))}else if(p==null){r.j(new A.m(q,q,"expected-doctype-name-but-got-eof"))
s=t.i.a(r.w)
s.e=!1
r.j(s)
r.si(t.c.a(r.gD()))}else{t.i.a(r.w).d=p
r.si(t.c.a(r.gfu()))}return!0},
nI(){var s,r,q,p=this,o=null,n=p.a.C()
if(A.a3(n)){s=t.i.a(p.w)
r=s.d
if(r==null)r=o
else{q=t.E
q=A.ad(new A.I(new A.a9(r),q.h("h(u.E)").a(A.bL()),q.h("I<u.E,h>")),0,o)
r=q}s.d=r
p.si(t.c.a(p.gmR()))}else if(n===">"){s=t.i.a(p.w)
r=s.d
if(r==null)r=o
else{q=t.E
q=A.ad(new A.I(new A.a9(r),q.h("h(u.E)").a(A.bL()),q.h("I<u.E,h>")),0,o)
r=q}s.d=r
r=p.w
r.toString
p.j(r)
p.si(t.c.a(p.gD()))}else if(n==="\x00"){p.j(new A.m(o,o,"invalid-codepoint"))
s=t.i.a(p.w)
s.d=A.k(s.d)+"\ufffd"
p.si(t.c.a(p.gfu()))}else if(n==null){p.j(new A.m(o,o,"eof-in-doctype-name"))
s=t.i.a(p.w)
s.e=!1
r=s.d
if(r==null)r=o
else{q=t.E
q=A.ad(new A.I(new A.a9(r),q.h("h(u.E)").a(A.bL()),q.h("I<u.E,h>")),0,o)
r=q}s.d=r
r=p.w
r.toString
p.j(r)
p.si(t.c.a(p.gD()))}else{s=t.i.a(p.w)
s.d=A.k(s.d)+n}return!0},
mS(){var s,r,q,p,o=this,n=null,m=o.a,l=m.C()
if(A.a3(l))return!0
else if(l===">"){m=o.w
m.toString
o.j(m)
o.si(t.c.a(o.gD()))}else if(l==null){t.i.a(o.w).e=!1
m.T(l)
o.j(new A.m(n,n,"eof-in-doctype"))
m=o.w
m.toString
o.j(m)
o.si(t.c.a(o.gD()))}else{if(l==="p"||l==="P"){r=0
while(!0){if(!(r<5)){s=!0
break}q=B.be[r]
l=m.C()
if(l!=null)p=!A.cx(q,l,0)
else p=!0
if(p){s=!1
break}++r}if(s){o.si(t.c.a(o.gmU()))
return!0}}else if(l==="s"||l==="S"){r=0
while(!0){if(!(r<5)){s=!0
break}q=B.bt[r]
l=m.C()
if(l!=null)p=!A.cx(q,l,0)
else p=!0
if(p){s=!1
break}++r}if(s){o.si(t.c.a(o.gmX()))
return!0}}m.T(l)
m=t.z
m=A.y(["data",l],m,m)
o.j(new A.m(m,n,u.S))
t.i.a(o.w).e=!1
o.si(t.c.a(o.gcs()))}return!0},
mV(){var s=this,r=null,q=s.a,p=q.C()
if(A.a3(p))s.si(t.c.a(s.gff()))
else if(p==="'"||p==='"'){s.j(new A.m(r,r,"unexpected-char-in-doctype"))
q.T(p)
s.si(t.c.a(s.gff()))}else if(p==null){s.j(new A.m(r,r,"eof-in-doctype"))
q=t.i.a(s.w)
q.e=!1
s.j(q)
s.si(t.c.a(s.gD()))}else{q.T(p)
s.si(t.c.a(s.gff()))}return!0},
na(){var s,r=this,q=null,p=r.a.C()
if(A.a3(p))return!0
else if(p==='"'){t.i.a(r.w).b=""
r.si(t.c.a(r.gnJ()))}else if(p==="'"){t.i.a(r.w).b=""
r.si(t.c.a(r.gnL()))}else if(p===">"){r.j(new A.m(q,q,"unexpected-end-of-doctype"))
s=t.i.a(r.w)
s.e=!1
r.j(s)
r.si(t.c.a(r.gD()))}else if(p==null){r.j(new A.m(q,q,"eof-in-doctype"))
s=t.i.a(r.w)
s.e=!1
r.j(s)
r.si(t.c.a(r.gD()))}else{r.j(new A.m(q,q,"unexpected-char-in-doctype"))
t.i.a(r.w).e=!1
r.si(t.c.a(r.gcs()))}return!0},
nK(){var s,r=this,q=null,p=r.a.C()
if(p==='"')r.si(t.c.a(r.giB()))
else if(p==="\x00"){r.j(new A.m(q,q,"invalid-codepoint"))
s=t.i.a(r.w)
s.b=A.k(s.b)+"\ufffd"}else if(p===">"){r.j(new A.m(q,q,"unexpected-end-of-doctype"))
s=t.i.a(r.w)
s.e=!1
r.j(s)
r.si(t.c.a(r.gD()))}else if(p==null){r.j(new A.m(q,q,"eof-in-doctype"))
s=t.i.a(r.w)
s.e=!1
r.j(s)
r.si(t.c.a(r.gD()))}else{s=t.i.a(r.w)
s.b=A.k(s.b)+p}return!0},
nM(){var s,r=this,q=null,p=r.a.C()
if(p==="'")r.si(t.c.a(r.giB()))
else if(p==="\x00"){r.j(new A.m(q,q,"invalid-codepoint"))
s=t.i.a(r.w)
s.b=A.k(s.b)+"\ufffd"}else if(p===">"){r.j(new A.m(q,q,"unexpected-end-of-doctype"))
s=t.i.a(r.w)
s.e=!1
r.j(s)
r.si(t.c.a(r.gD()))}else if(p==null){r.j(new A.m(q,q,"eof-in-doctype"))
s=t.i.a(r.w)
s.e=!1
r.j(s)
r.si(t.c.a(r.gD()))}else{s=t.i.a(r.w)
s.b=A.k(s.b)+p}return!0},
mT(){var s,r=this,q=null,p="unexpected-char-in-doctype",o=r.a.C()
if(A.a3(o))r.si(t.c.a(r.gnc()))
else if(o===">"){s=r.w
s.toString
r.j(s)
r.si(t.c.a(r.gD()))}else if(o==='"'){r.j(new A.m(q,q,p))
t.i.a(r.w).c=""
r.si(t.c.a(r.gfv()))}else if(o==="'"){r.j(new A.m(q,q,p))
t.i.a(r.w).c=""
r.si(t.c.a(r.gfw()))}else if(o==null){r.j(new A.m(q,q,"eof-in-doctype"))
s=t.i.a(r.w)
s.e=!1
r.j(s)
r.si(t.c.a(r.gD()))}else{r.j(new A.m(q,q,p))
t.i.a(r.w).e=!1
r.si(t.c.a(r.gcs()))}return!0},
nd(){var s,r=this,q=null,p=r.a.C()
if(A.a3(p))return!0
else if(p===">"){s=r.w
s.toString
r.j(s)
r.si(t.c.a(r.gD()))}else if(p==='"'){t.i.a(r.w).c=""
r.si(t.c.a(r.gfv()))}else if(p==="'"){t.i.a(r.w).c=""
r.si(t.c.a(r.gfw()))}else if(p==null){r.j(new A.m(q,q,"eof-in-doctype"))
s=t.i.a(r.w)
s.e=!1
r.j(s)
r.si(t.c.a(r.gD()))}else{r.j(new A.m(q,q,"unexpected-char-in-doctype"))
t.i.a(r.w).e=!1
r.si(t.c.a(r.gcs()))}return!0},
mY(){var s=this,r=null,q=s.a,p=q.C()
if(A.a3(p))s.si(t.c.a(s.gfg()))
else if(p==="'"||p==='"'){s.j(new A.m(r,r,"unexpected-char-in-doctype"))
q.T(p)
s.si(t.c.a(s.gfg()))}else if(p==null){s.j(new A.m(r,r,"eof-in-doctype"))
q=t.i.a(s.w)
q.e=!1
s.j(q)
s.si(t.c.a(s.gD()))}else{q.T(p)
s.si(t.c.a(s.gfg()))}return!0},
nb(){var s,r=this,q=null,p="unexpected-char-in-doctype",o=r.a.C()
if(A.a3(o))return!0
else if(o==='"'){t.i.a(r.w).c=""
r.si(t.c.a(r.gfv()))}else if(o==="'"){t.i.a(r.w).c=""
r.si(t.c.a(r.gfw()))}else if(o===">"){r.j(new A.m(q,q,p))
s=t.i.a(r.w)
s.e=!1
r.j(s)
r.si(t.c.a(r.gD()))}else if(o==null){r.j(new A.m(q,q,"eof-in-doctype"))
s=t.i.a(r.w)
s.e=!1
r.j(s)
r.si(t.c.a(r.gD()))}else{r.j(new A.m(q,q,p))
t.i.a(r.w).e=!1
r.si(t.c.a(r.gcs()))}return!0},
nP(){var s,r=this,q=null,p=r.a.C()
if(p==='"')r.si(t.c.a(r.giC()))
else if(p==="\x00"){r.j(new A.m(q,q,"invalid-codepoint"))
s=t.i.a(r.w)
s.c=A.k(s.c)+"\ufffd"}else if(p===">"){r.j(new A.m(q,q,"unexpected-end-of-doctype"))
s=t.i.a(r.w)
s.e=!1
r.j(s)
r.si(t.c.a(r.gD()))}else if(p==null){r.j(new A.m(q,q,"eof-in-doctype"))
s=t.i.a(r.w)
s.e=!1
r.j(s)
r.si(t.c.a(r.gD()))}else{s=t.i.a(r.w)
s.c=A.k(s.c)+p}return!0},
nQ(){var s,r=this,q=null,p=r.a.C()
if(p==="'")r.si(t.c.a(r.giC()))
else if(p==="\x00"){r.j(new A.m(q,q,"invalid-codepoint"))
s=t.i.a(r.w)
s.c=A.k(s.c)+"\ufffd"}else if(p===">"){r.j(new A.m(q,q,"unexpected-end-of-doctype"))
s=t.i.a(r.w)
s.e=!1
r.j(s)
r.si(t.c.a(r.gD()))}else if(p==null){r.j(new A.m(q,q,"eof-in-doctype"))
s=t.i.a(r.w)
s.e=!1
r.j(s)
r.si(t.c.a(r.gD()))}else{s=t.i.a(r.w)
s.c=A.k(s.c)+p}return!0},
mW(){var s,r=this,q=null,p=r.a.C()
if(A.a3(p))return!0
else if(p===">"){s=r.w
s.toString
r.j(s)
r.si(t.c.a(r.gD()))}else if(p==null){r.j(new A.m(q,q,"eof-in-doctype"))
s=t.i.a(r.w)
s.e=!1
r.j(s)
r.si(t.c.a(r.gD()))}else{r.j(new A.m(q,q,"unexpected-char-in-doctype"))
r.si(t.c.a(r.gcs()))}return!0},
nh(){var s=this,r=s.a,q=r.C()
if(q===">"){r=s.w
r.toString
s.j(r)
s.si(t.c.a(s.gD()))}else if(q==null){r.T(q)
r=s.w
r.toString
s.j(r)
s.si(t.c.a(s.gD()))}return!0},
nl(){var s,r,q,p=this,o=A.a([],t.s)
for(s=p.a,r=0;!0;){q=s.C()
if(q==null)break
if(q==="\x00"){p.j(new A.m(null,null,"invalid-codepoint"))
q="\ufffd"}B.a.p(o,q)
if(q==="]"&&r<2)++r
else{if(q===">"&&r===2){if(0>=o.length)return A.c(o,-1)
o.pop()
if(0>=o.length)return A.c(o,-1)
o.pop()
if(0>=o.length)return A.c(o,-1)
o.pop()
break}r=0}}if(o.length!==0){s=B.a.aU(o)
p.j(new A.E(null,s))}p.si(t.c.a(p.gD()))
return!0},
si(a){this.x=t.c.a(a)},
seT(a,b){this.Q=t.jq.a(b)},
seS(a){this.as=t.oA.a(a)},
smx(a){this.at=t.nU.a(a)},
$iU:1,
lj(a){return this.gli(this).$0()}}
A.jD.prototype={
$1(a){return B.b.Z(A.aw(a),this.a)},
$S:7}
A.jE.prototype={
$0(){var s=this.a.b
s===$&&A.b("value")
return s},
$S:6}
A.fo.prototype={
p(a,b){var s,r,q,p,o,n,m,l,k,j=this,i="http://www.w3.org/1999/xhtml"
t.mV.a(b)
if(b!=null)for(s=A.A(j).h("X<u.E>"),r=new A.X(j,s),r=new A.L(r,r.gm(r),s.h("L<D.E>")),q=b.x,p=b.w,s=s.h("D.E"),o=0;r.n();){n=r.d
if(n==null)n=s.a(n)
if(n==null)break
m=n.w
if(m==null)m=i
l=n.x
k=p==null?i:p
if(k===m&&q==l&&A.t6(n.b,b.b))++o
if(o===3){B.a.a_(j.a,n)
break}}j.bP(0,b)}}
A.kA.prototype={
bo(a){var s=this
B.a.bB(s.c)
s.d.sm(0,0)
s.f=s.e=null
s.r=!1
s.b=A.nt()},
a0(a,b){var s,r,q,p,o,n,m,l,k,j,i,h="We should never reach this point",g="http://www.w3.org/1999/xhtml",f=a instanceof A.ah
if(b!=null)switch(b){case"button":s=B.T
r=B.b9
q=!1
break
case"list":s=B.T
r=B.bg
q=!1
break
case"table":s=B.bE
r=B.W
q=!1
break
case"select":s=B.bA
r=B.W
q=!0
break
default:throw A.d(A.av(h))}else{s=B.T
r=B.W
q=!1}for(p=this.c,o=A.w(p).h("X<1>"),p=new A.X(p,o),p=new A.L(p,p.gm(p),o.h("L<D.E>")),n=t.X,m=!f,o=o.h("D.E");p.n();){l=p.d
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
if(!B.a.F(s,new A.o(i,l,n)))l=B.a.F(r,new A.o(k?g:j,l,n))
else l=!0
if(q!==l)return!1}}throw A.d(A.av(h))},
b2(a){return this.a0(a,null)},
aF(){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.d
if(g.gm(g)===0)return
s=g.a
r=s.length
q=r-1
if(!(q>=0))return A.c(s,q)
p=s[q]
if(p==null||B.a.F(h.c,p))return
r=h.c
while(!0){if(!(p!=null&&!B.a.F(r,p)))break
if(q===0){q=-1
break}--q
if(!(q>=0&&q<s.length))return A.c(s,q)
p=s[q]}for(r=A.A(g).h("aV.E"),o=t.K,n=t.N;!0;){++q
if(!(q>=0&&q<s.length))return A.c(s,q)
p=s[q]
m=p.x
l=p.w
k=A.ha(p.b,o,n)
j=new A.ci(k,l,m,!1)
j.a=p.e
i=h.N(j)
B.a.v(s,q,r.a(i))
if(g.gm(g)===0)A.N(A.an())
if(i===g.k(0,g.gm(g)-1))break}},
fj(){var s=this.d,r=s.dd(s)
while(!0){if(!(!s.gag(s)&&r!=null))break
r=s.dd(s)}},
j5(a){var s,r,q
for(s=this.d,r=A.A(s).h("X<u.E>"),s=new A.X(s,r),s=new A.L(s,s.gm(s),r.h("L<D.E>")),r=r.h("D.E");s.n();){q=s.d
if(q==null)q=r.a(q)
if(q==null)break
else if(q.x==a)return q}return null},
cv(a,b){var s=b.gak(b),r=A.ns(a.gaC(a))
r.e=a.a
s.p(0,r)},
iY(a,b){var s,r=b.b,q=b.w
if(q==null)q=this.a
this.b===$&&A.b("document")
s=A.mi(r,q===""?null:q)
s.scW(0,b.e)
s.e=b.a
return s},
N(a){if(this.r)return this.os(a)
return this.jl(a)},
jl(a){var s,r,q=a.b,p=a.w
if(p==null)p=this.a
this.b===$&&A.b("document")
s=A.mi(q,p===""?null:p)
s.scW(0,a.e)
s.e=a.a
r=this.c
J.pF(B.a.gt(r)).p(0,s)
B.a.p(r,s)
return s},
os(a){var s,r,q=this,p=q.iY(0,a),o=q.c
if(!B.a.F(B.V,B.a.gt(o).x))return q.jl(a)
else{s=q.eB()
r=s[1]
if(r==null){r=s[0]
r.gak(r).p(0,p)}else s[0].or(0,p,r)
B.a.p(o,p)}return p},
bY(a,b){var s,r=this.c,q=B.a.gt(r)
if(this.r)r=!B.a.F(B.V,B.a.gt(r).x)
else r=!0
if(r)A.nZ(q,a,b,null)
else{s=this.eB()
r=s[0]
r.toString
A.nZ(r,a,b,t.mV.a(s[1]))}},
eB(){var s,r,q,p,o=this.c,n=A.w(o).h("X<1>"),m=new A.X(o,n)
m=new A.L(m,m.gm(m),n.h("L<D.E>"))
n=n.h("D.E")
while(!0){if(!m.n()){s=null
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
c_(a){var s=this.c,r=B.a.gt(s).x
if(r!=a&&B.a.F(B.U,r)){if(0>=s.length)return A.c(s,-1)
s.pop()
this.c_(a)}},
cf(){return this.c_(null)},
soj(a){this.e=t.e1.a(a)},
sji(a){this.f=t.mV.a(a)}}
A.o.prototype={
gW(a){return 37*J.aH(this.a)+J.aH(this.b)},
V(a,b){if(b==null)return!1
return b instanceof A.o&&b.a==this.a&&b.b==this.b}}
A.lV.prototype={
$2(a,b){var s,r,q,p,o,n,m,l,k,j=new A.a2(""),i="%("+A.k(a)+")"
for(s=this.a,r=i.length,q=J.bo(b),p=0,o="";n=s.a,m=B.b.aP(n,i,p),m>=0;){j.a=o+B.b.A(n,p,m)
m+=r
l=m
while(!0){o=s.a
if(!(l<o.length))return A.c(o,l)
if(!A.m4(o[l]))break;++l}if(l>m){k=A.cv(B.b.A(s.a,m,l),null)
m=l}else k=0
o=s.a
if(!(m<o.length))return A.c(o,m)
o=o[m]
switch(o){case"s":o=j.a+=A.k(b)
break
case"d":o=j.a+=A.pa(q.l(b),k)
break
case"x":o=j.a+=A.pa(B.d.pC(A.a0(b),16),k)
break
default:throw A.d(A.T("formatStr does not support format character "+o))}p=m+1}r=j.a=o+B.b.A(n,p,n.length)
s.a=r.charCodeAt(0)==0?r:r},
$S:33}
A.br.prototype={
l(a){var s=this.bK(),r=this.r.b
r===$&&A.b("name")
return s+"("+r+", runTime: "+A.k(this.a)+"s)"},
bK(){var s=this.hz(0),r=A.au("^Instance of '(.*?)'$").jg(s).b
if(1>=r.length)return A.c(r,1)
r=r[1]
r.toString
return r},
cX(){this.w=this.r.u()
this.d8(0)},
fI(){this.d8(1)},
cY(a){},
dh(){var s=this.w
s===$&&A.b("startingMobject")
return A.a([this.r,s],t.r)},
h3(){var s,r,q,p=A.a([],t.Z)
for(s=this.dh(),r=s.length,q=0;q<s.length;s.length===r||(0,A.f)(s),++q)p.push(s[q].dk())
s=t.oS
return A.j(new A.at(p,s),!0,s.h("i.E"))},
ce(a){var s,r,q
for(s=this.k6(),r=s.length,q=0;q<s.length;s.length===r||(0,A.f)(s),++q)s[q].h0(a)},
k6(){var s,r,q,p,o=A.a([],t.r)
for(s=this.dh(),r=s.length,q=0;q<s.length;s.length===r||(0,A.f)(s),++q){p=s[q]
o.push(p)}return o},
d8(a){a=Math.min(1,Math.max(a,0))
this.ot(this.b.$1(a))},
ot(a){var s,r,q,p,o,n=this.h3()
for(s=A.K(n.length,0,1),r=s.length,q=this.c,p=0;p<s.length;s.length===r||(0,A.f)(s),++p){o=s[p]
this.jq(B.a.k(n,o),Math.min(1,Math.max(a*((n.length-1)*q+1)-A.a0(o)*q,0)))}},
jq(a,b){t.a.a(a)}}
A.fw.prototype={
giF(){var s=this.y
s===$&&A.b("animationsTiming")
return s},
lG(a,b,c,d,e){var s,r,q=A.a([],t.r)
for(s=this.x,r=0;r<10;++r)q.push(s[r].r)
this.r.aN(t.a.a(A.pl(q,t.j)))
this.oq()},
dh(){var s=t.ek.a(this.r).d
s===$&&A.b("submobjects")
return s},
cX(){var s,r
for(s=this.x,r=0;r<10;++r)s[r].cX()},
fI(){var s,r
for(s=this.x,r=0;r<10;++r)s[r].fI()},
cY(a){var s,r
for(s=this.x,r=0;r<10;++r)s[r].cY(a)},
ce(a){var s,r
for(s=this.x,r=0;r<10;++r)s[r].ce(a)},
oq(){var s,r,q,p,o=this
o.slO(t.dq.a(o.k8()))
s=A.a([],t.n)
for(r=o.giF(),q=r.length,p=0;p<r.length;r.length===q||(0,A.f)(r),++p)s.push(r[p].c)
s=A.cs(B.a.e5(s,0,B.E,t.W))
o.z=s
if(o.a===0)o.a=s},
k8(){var s,r,q,p,o,n,m,l,k=A.a([],t.bB)
for(s=this.x,r=t.oM,q=this.c,p=1-q,o=0,n=0;n<10;++n){m=s[n]
l=o+m.a
B.a.p(k,new A.cS(m,o,l,r))
o=o*p+l*q}return k},
d8(a){var s,r,q,p,o,n,m,l=this.z
l===$&&A.b("maxEndTime")
s=a*l
for(l=this.giF(),r=l.length,q=0;q<l.length;l.length===r||(0,A.f)(l),++q){p=l[q]
o=p.b
n=p.c-o
m=n!==0?Math.min(1,Math.max((s-o)/n,0)):0
p.a.d8(m)}},
slO(a){this.y=t.dq.a(a)}}
A.hQ.prototype={
op(){if(this.as!=null)return
this.soM(A.pc())},
cX(){var s=this,r=s.x
r===$&&A.b("targetMobject")
s.x=r
r=r.u()
s.y=r
s.r.fb(r)
s.lo()},
cY(a){this.lp(a)},
dh(){var s,r,q=this,p=q.w
p===$&&A.b("startingMobject")
s=q.x
s===$&&A.b("targetMobject")
r=q.y
r===$&&A.b("targetCopy")
return A.a([q.r,p,s,r],t.r)},
h3(){var s,r,q=A.a([],t.Z),p=this.w
p===$&&A.b("startingMobject")
s=this.y
s===$&&A.b("targetCopy")
s=[this.r,p,s]
r=0
for(;r<3;++r)q.push(s[r].dk())
p=t.oS
return A.j(new A.at(q,p),!0,p.h("i.E"))},
jq(a,b){var s,r,q,p,o,n
t.a.a(a)
s=J.Y(a)
r=s.k(a,0)
q=s.k(a,1)
s=s.k(a,2)
p=this.as
o=t.j
o.a(q)
o.a(s)
t.lX.a(p)
n=p==null?A.pc():p
p=q.r
p===$&&A.b("points")
o=s.r
o===$&&A.b("points")
r.saI(t.y.a(n.$3(p,o,b)))
r.fL(q,s,b)},
soM(a){this.as=t.lX.a(a)}}
A.iZ.prototype={
fC(a){var s,r,q,p
t.a.a(a)
s=new A.j_()
r=A.a([],t.r)
for(q=a.length,p=0;p<a.length;a.length===q||(0,A.f)(a),++p)B.a.M(r,s.$1(a[p]))
return A.pl(r,t.j)},
fV(a){var s,r,q,p,o="renderer"
for(s=this.fC(t.a.a(a)),r=A.w(s).h("X<1>"),s=new A.X(s,r),s=new A.L(s,s.gm(s),r.h("L<D.E>")),r=r.h("D.E");s.n();){q=s.d
if(q==null)q=r.a(q)
p=this.r
if(q instanceof A.R){p===$&&A.b("display")
p=p.a
p===$&&A.b(o)
p.pi(q)}else{p===$&&A.b("display")
p.a===$&&A.b(o)}}},
jS(a,b){t.y.a(b)
return!B.a.ct(b,new A.j0())?A.a([B.e],t.l):b}}
A.j_.prototype={
$1(a){return a.bJ()},
$S:38}
A.j0.prototype={
$1(a){t.V.a(a)
return isFinite(a.a)&&isFinite(a.b)&&isFinite(a.c)},
$S:39}
A.dF.prototype={
iM(a){var s
this.b=a
s=this.d
B.aa.spP(s,1280)
B.aa.sbj(s,720)},
dK(a){return a},
ew(a,b){var s,r,q=this.b
q===$&&A.b("camera")
s=q.c
r=A.iE(a,0,1280,-s/2,s/2)
q=q.d
return new A.e(r,A.iE(b,720,0,-q/2,q/2),0).R(0,B.e)}}
A.fn.prototype={
da(){var s=0,r=A.c2(t.W),q,p=this,o,n,m
var $async$da=A.c4(function(a,b){if(a===1)return A.c_(b,r)
while(true)switch(s){case 0:m=window
m.toString
s=3
return A.bn(B.e6.gn_(m),$async$da)
case 3:o=b
m=p.f
if(m===0){p.f=o
m=o}n=o-m
p.f=m+n
q=n/1000
s=1
break
case 1:return A.c0(q,r)}})
return A.c1($async$da,r)},
ey(a){var s,r,q,p
t.n8.a(a)
s=this.d.getBoundingClientRect()
r=s.left
r.toString
q=s.right
q.toString
this.b===$&&A.b("camera")
p=A.iE(a.a,r,q,0,1280)
q=s.top
q.toString
r=s.bottom
r.toString
return new A.e(p,A.iE(a.b,q,r,0,720),0)},
dN(){var s=this,r=s.d,q=t.eX,p=q.h("~(1)?"),o=p.a(new A.iI(s))
t.jE.a(null)
q=q.c
B.a.M(s.r,A.a([A.l5(r,"mousemove",o,!1,q),A.l5(r,"mousedown",p.a(new A.iJ(s)),!1,q),A.l5(r,"mouseup",p.a(new A.iK(s)),!1,q)],t.dw))},
pE(){var s,r,q
for(s=this.r,r=s.length,q=0;q<s.length;s.length===r||(0,A.f)(s),++q)s[q].nj()}}
A.iI.prototype={
$1(a){var s,r,q,p
t.gD.a(a)
s=this.a
r=s.Q
s.as=new A.e(r.a,r.b,r.c)
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.ey(new A.cP(r,q,t.n8))
q=s.ew(p.a,p.b)
s.Q=q
q.K(0,s.as)
q=s.Q
$.dE().dS(new A.en(q,B.F,"MouseMovedEvent"))
if(s.w){r=s.y=s.Q
s.x.K(0,r)
$.dE().dS(new A.cc(r,B.C,"MouseDraggedEvent"))}},
$S:13}
A.iJ.prototype={
$1(a){var s,r,q,p,o
t.gD.a(a)
s=this.a
r=s.Q
s.as=new A.e(r.a,r.b,r.c)
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.ey(new A.cP(r,q,t.n8))
s.Q=s.ew(p.a,p.b)
q=a.button
q.toString
s.z=A.mu(q)
q=s.Q
$.dE().dS(new A.cd(q,B.B,"MousePressedEvent"))
s.w=!0
q=s.Q
r=q.a
o=q.b
q=q.c
s.x=new A.e(r,o,q)
s.y=new A.e(r,o,q)},
$S:13}
A.iK.prototype={
$1(a){var s,r,q,p
t.gD.a(a)
s=this.a
r=s.Q
s.as=new A.e(r.a,r.b,r.c)
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.ey(new A.cP(r,q,t.n8))
s.Q=s.ew(p.a,p.b)
q=a.button
q.toString
s.z=A.mu(q)
q=s.Q
$.dE().dS(new A.ce(q,B.u,"MouseReleasedEvent"))
s.w=!1},
$S:13}
A.fF.prototype={}
A.dg.prototype={
u(){return A.mv(this)},
mL(){var s,r,q,p=this,o=t.b1,n=A.a([],o),m=p.jd?-1:1,l=p.e1
l.toString
s=p.ja
s=A.lM(p.aK+m*s/2,l,s).aW(0)
l=s.length
r=p.ba
q=0
for(;q<s.length;s.length===l||(0,A.f)(s),++q)n.push(p.hb(s[q],r))
p.spA(n)
o=A.a([],o)
for(n=p.jb,l=n.length,r*=p.jc,q=0;q<n.length;n.length===l||(0,A.f)(n),++q)o.push(p.hb(n[q],r))
p.sne(o)
o=p.fF
o.toString
o=A.j(o,!0,t.j)
n=p.d2
n.toString
B.a.M(o,n)
p.aN(t.a.a(o))},
hb(a,b){var s,r=this,q=B.o.B(0,b),p=A.jN(0,B.c,B.x.B(0,b),null,q)
p.fW(0,r.am().K(0,r.aM()).cU())
p.cA(r.fQ(a))
p.a9(r.h5())
p.hh(J.Z(r.bt(),0))
q=J.aG(r.bu(!1))
s=r.w
p.kZ(q,s)
return p},
fQ(a){var s=this,r=A.iE(a,s.bX,s.aK,0,1)
return A.iC(s.aM(),s.am(),r,t.V)},
jD(a){var s,r=this,q=r.aM(),p=r.am(),o=p.K(0,q),n=o.br(0,Math.sqrt(o.aY()))
o=n.j3(a.K(0,q))
s=n.j3(p.K(0,q))
return A.iC(r.bX,r.aK,o/s,t.W)},
spA(a){this.fF=t.gv.a(a)},
sne(a){this.d2=t.gv.a(a)}}
A.k9.prototype={
$1(a){return t.F.a(a).u()},
$S:19}
A.ka.prototype={
$1(a){return t.F.a(a).u()},
$S:19}
A.fN.prototype={}
A.dN.prototype={
lH(a,b,c,d,e,f,g,h){var s,r=this
r.b9=r.iX(e,d,r.dY.bH(r.gj1()))
s=r.iX(h,g,r.dZ.bH(r.gj2()))
r.bD=s
s.eo(0,-1.5707963267948966,B.e,B.l)
r.e_=A.hY(A.a([r.b9,r.bD],t.hJ))
r.aN(t.a.a(A.a([r.b9,r.bD],t.r)))
r.aG(r.dW)},
iX(a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=B.a.b5(A.a([a4,this.dX,this.gj0()],t.iX),new A.iX()),a1=a0.a
if(a1==null)a1=B.ac
s=a0.e
if(s==null)s=1
r=a0.f
r=r!==!1
q=a0.r
if(q==null)q=0.1
p=a0.w
if(p==null)p=1
o=a0.x
n=a0.y
if(n==null)n=A.a([0],t.n)
m=a0.z
l=a0.Q
k=a0.as
if(k==null)k=2
j=a0.at
if(j==null)j=0
i=a0.ax
if(i==null)i=0.75
h=a0.d
if(h==null)h=B.o
g=a0.ay
if(g==null)g=0.25
f=a0.b
f=f!==!1
e=a0.ch
if(e==null)e=0.25
d=a0.CW
if(d==null)d=0.25
c=a0.cx
b=a0.c
q=new A.dg(a2,a3,s,r,q,p,o,n,m===!0,l,k,j,i,h,g,f,c,b!==!1,e,d,a,a,0,a,B.j,B.N,0.35,B.l,A.aN(a,0,B.c,a,0),a,a,4,0,!1,0.01,!1,0.000001,4,a,a,a,B.c,$,a,$,$,$)
q.ao(B.c,a,a)
q.a9(a1)
d=Math.max(e,d)
q.fx=d
if(f)q.aK=q.aK+d/2
q.a6=B.j.B(0,s).B(0,a2)
a1=B.j.B(0,s).B(0,q.aK)
q.ad=a1
q.cE(q.a6,a1)
q.aG(q.fQ(j).B(0,-1))
if(q.e1==null)q.e1=p*B.h.fi(a2/p)
if(f)q.mM(q.fx)
if(r)q.mL()
a1=a0.cy
q.hj(a1==null?4:a1)
return q},
c7(a){var s,r,q,p,o,n,m,l,k="getStart",j=this.b9
j===$&&A.b("xAxis")
s=j.fQ(0)
r=new A.e(s.a,s.b,s.c)
j=A.a([a.a,a.b,a.c],t.n)
q=this.e_
q===$&&A.b("axes")
q=q.d
q===$&&A.b("submobjects")
q=new A.at(A.a([j,q],t.bo),t.c2)
q=q.gH(q)
j=t.f7
for(;q.n();){p=q.b
if(p==null)p=A.N(A.av("No element"))
if(1>=p.length)return A.c(p,1)
o=j.a(p[1])
n=o.bX
m=(A.cs(p[0])-n)/(o.aK-n)+0
n=o.id
if(n!=null){n.az(k)
n=n.r
n===$&&A.b("points")
n=J.aG(n)}else n=o.cP()
l=o.k1
if(l!=null){l.az(k)
l=l.r
l===$&&A.b("points")
l=J.aG(l)}else l=o.cO()
r=r.R(0,n.B(0,1-m).R(0,l.B(0,m)).K(0,s))}return r},
jC(a){var s,r=this.b9
r===$&&A.b("xAxis")
s=r.jD(a)
r=this.bD
r===$&&A.b("yAxis")
return new A.e(s,r.jD(a),0)},
hA(a){var s=this,r=a.b9
r===$&&A.b("xAxis")
s.b9=A.mv(r)
r=a.bD
r===$&&A.b("yAxis")
r=A.mv(r)
s.bD=r
s.e_=A.hY(A.a([s.b9,r],t.hJ))},
u(){return A.pQ(this)},
gj0(){return B.P},
gj1(){return B.n},
gj2(){return B.O}}
A.iX.prototype={
$2(a,b){var s=t.fy
return s.a(a).bH(s.a(b))},
$S:42}
A.er.prototype={
u(){return A.kb(this)},
oo(){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(h.e2==null){s=h.fG
r=t.O
q=A.a([],r)
p=A.a([],r)
o=s.b
r=J.F(o==null?A.a([],r):o)
for(;r.n();){o=r.gq()
n=o.d
p.push(new A.P(o.a,o.b,o.c,n*0.5))}h.e2=new A.cm(q,p,s.c*0.5,s.d,s.e*0.5)}s=h.b9
s===$&&A.b("xAxis")
r=h.bD
r===$&&A.b("yAxis")
q=h.j9
m=h.h8(s,r,h.je,q)
l=h.h8(h.bD,h.b9,h.jf,q)
q=t.F
r=A.j(m[0],!0,q)
B.a.M(r,l[0])
q=A.j(m[1],!0,q)
B.a.M(q,l[1])
k=[r,q]
q=t.g4
h.slY(q.a(k[0]))
h.slZ(q.a(k[1]))
q=h.fD
q===$&&A.b("backgroundLines")
j=A.hY(q)
j.eK(h.fG)
q=h.fE
q===$&&A.b("fadedLines")
i=A.hY(q)
q=h.e2
q.toString
i.eK(q)
h.mN(A.a([j,i],t.r))},
h8(a,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="getStart",e=a.aM(),d=A.jN(0,B.c,a.am(),null,e),c=1+a2,b=1/c*a1
e=t.b1
s=A.a([],e)
r=A.a([],e)
e=a0.bX
q=[A.lM(a0.aK,0,b).aW(0),A.lM(e,0,-b).aW(0)]
for(p=t.W,o=0;o<2;++o)for(n=A.fj(q[o],p),m=n.length,l=0;l<n.length;n.length===m||(0,A.f)(n),++l){k=n[l]
j=A.nC(d)
i=(k.b-e)/(a0.aK-e)+0
h=a0.id
if(h!=null){h.az(f)
h=h.r
h===$&&A.b("points")
h=J.aG(h)}else h=a0.cP()
g=a0.k1
if(g!=null){g.az(f)
g=g.r
g===$&&A.b("points")
g=J.aG(g)}else g=a0.cO()
j.aG(h.B(0,1-i).R(0,g.B(0,i)))
if(B.d.a4(k.a,c)===0)B.a.p(s,j)
else B.a.p(r,j)}return A.a([s,r],t.km)},
slY(a){this.fD=t.g4.a(a)},
slZ(a){this.fE=t.g4.a(a)},
gj0(){return this.d2},
gj1(){return this.oa},
gj2(){return this.ob}}
A.aI.prototype={
bH(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.a
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
return new A.aI(b,h,e,j,s,r,q,p,a.x,o,n,a.Q,m,l,k,i,g,f,a.cx,d)}}
A.eI.prototype={
k_(a,b){var s,r
if(a==null)s=null
else s=a
if(s==null)s=B.q
if(b==null)r=null
else r=b
if(r==null)r=B.q
return A.aN(B.q,this.e,s,r,this.c)},
pQ(a){return this.k_(a,null)},
pR(a){return this.k_(null,a)}}
A.hO.prototype={
l(a){return"TipSide."+this.b}}
A.eJ.prototype={
u(){return A.qT(this)},
ix(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1="points"
if(a3==null)a3=a.h6()
s=a.h5()
r=A.bU(a.go)
q=r.a
q=q==null?a0:J.cy(q)
if(q!==!1)r=r.pQ(s.u())
q=r.b
q=q==null?a0:J.cy(q)
if(q!==!1)r=r.pR(s.u())
p=A.tQ(3.141592653589793,B.l).aW(0)
q=p.length
if(0>=q)return A.c(p,0)
o=p[0]
if(1>=q)return A.c(p,1)
n=p[1]
if(2>=q)return A.c(p,2)
m=p[2]
if(3>=q)return A.c(p,3)
l=p[3]
q=n*0
k=m*0
j=l+q-k
i=l*0
h=o*0
g=i+m-h
f=i+h-n
h=-o
e=h-q-k
k=-m
q=-n
h=A.to(3,new A.e(j*l+e*h+g*k-f*q,g*l+e*q+f*h-j*k,f*l+e*k+j*q-g*h))
d=new A.dK(4,0,!1,0.01,!1,0.000001,4,a0,a0,a0,B.c,$,a0,$,$,$)
d.ao(B.c,a0,a0)
d.eP(h,B.c)
d.fW(0,3.141592653589793)
d.eL(a3,!0)
d.dn(a3,!0)
d.ju(a)
d.eK(r)
q=a2===B.a2
c=q?a.aM():a.am()
k=a.r
if(q){k===$&&A.b(a1)
b=J.Z(k,1)}else{k===$&&A.b(a1)
i=J.Y(k)
b=i.k(k,i.gm(k)-2)}k=b.K(0,c).cU()
i=d.r
i===$&&A.b(a1)
d.fW(0,-k-J.aG(i).K(0,d.ef(0.5)).cU()-3.141592653589793)
d.aG(c.K(0,J.aG(d.r)))
a.pl(d,a2)
if(q)a.id=d
else a.k1=d
a.aN(t.a.a(A.a([d],t.r)))
return d},
f9(a){return this.ix(a,null)},
mM(a){return this.ix(B.a3,a)},
pl(a,b){var s=this
if(Math.sqrt(s.aM().K(0,s.am()).aY())===0)return
if(b===B.a2)s.cE(a.ef(0.5),s.am())
else s.cE(s.aM(),a.ef(0.5))},
c1(a,b){this.eJ(a,!1)
this.eH(B.q,!1)
this.lF(a,!0)},
a9(a){return this.c1(a,!0)},
h6(){return this.fx},
am(){var s=this.k1
if(s!=null){s.az("getStart")
s=s.r
s===$&&A.b("points")
s=J.aG(s)}else s=this.cO()
return s},
aM(){var s=this.id
if(s!=null){s.az("getStart")
s=s.r
s===$&&A.b("points")
s=J.aG(s)}else s=this.cP()
return s},
pe(){var s,r,q,p=this,o=p.id
if(o!=null){p.f9(B.a2)
s=p.id
s.toString
r=A.a([],t.l)
s=s.r
s===$&&A.b("points")
s=J.F(s)
for(;s.n();){q=s.gq()
r.push(new A.e(q.a,q.b,q.c))}o.saI(t.y.a(r))
p.a_(0,A.a([o],t.r))
p.id=o}o=p.k1
if(o!=null){p.f9(B.a3)
s=p.k1
s.toString
r=A.a([],t.l)
s=s.r
s===$&&A.b("points")
s=J.F(s)
for(;s.n();){q=s.gq()
r.push(new A.e(q.a,q.b,q.c))}o.saI(t.y.a(r))
p.a_(0,A.a([o],t.r))
p.k1=o}}}
A.dH.prototype={
u(){return A.pK(this)},
c0(){var s=this
s.kX()
s.eD(s.a6,B.e)
s.aG(s.ad)},
kX(){var s,r,q,p,o,n,m,l,k,j=this,i=t.l,h=A.a([],i)
for(s=j.y2,r=j.a7,q=j.bi,s=A.iD(q,r+s,s).aW(0),p=s.length,o=0;o<s.length;s.length===p||(0,A.f)(s),++o){n=s[o]
h.push(B.j.B(0,Math.cos(n)).R(0,B.x.B(0,Math.sin(n))))}s=A.a([],i)
for(p=h.length,o=0;o<h.length;h.length===p||(0,A.f)(h),++o){n=h[o]
s.push(new A.e(-n.b,n.a,n.c))}p=A.a([],i)
for(m=A.K(h.length-1,0,1),l=m.length,q=r/(q-1)/3,o=0;o<m.length;m.length===l||(0,A.f)(m),++o){k=m[o]
p.push(B.a.k(h,k).R(0,B.a.k(s,k).B(0,q)))}i=A.a([],i)
for(r=A.K(h.length,1,1),m=r.length,o=0;o<r.length;r.length===m||(0,A.f)(r),++o){k=r[o]
i.push(B.a.k(h,k).K(0,B.a.k(s,k).B(0,q)))}s=t.V
j.hg(A.n8(h,s),p,i,A.d_(h,s))}}
A.cz.prototype={
u(){return A.pM(this)}}
A.c7.prototype={
u(){return A.pW(this)},
gdO(){return!0}}
A.dW.prototype={
u(){return A.fQ(this)}}
A.dZ.prototype={
u(){return A.q2(this)}}
A.ao.prototype={
u(){return A.nC(this)},
c0(){var s=this
s.eI(A.a([s.a6,s.ad],t.l))
s.mH()},
mH(){var s,r,q=this,p=q.y2
if(p===0)return
s=Math.sqrt(q.aM().K(0,q.am()).aY())
if(s<2*p)return
r=p/s
q.oQ(q,r,1-r)},
cE(a,b){var s=this
if(s.aM().V(0,s.am())){s.a6=a
s.ad=b
s.c0()}return s.lA(a,b)}}
A.dJ.prototype={
cg(a,b,c){var s=this
if(Math.sqrt(s.aM().K(0,s.am()).aY())===0)return
s.lB(a,b,c)
s.hk()
s.pe()},
eD(a,b){return this.cg(a,B.e,b)},
h6(){var s=this
return Math.min(s.fx,s.bX*Math.sqrt(s.aM().K(0,s.am()).aY()))},
hk(){var s=this,r=s.ba
r===$&&A.b("initialStrokeWidth")
return s.l1(!1,Math.min(r,s.aK*Math.sqrt(s.aM().K(0,s.am()).aY())))},
u(){return A.pN(this)},
san(a){this.b4=A.cs(a)},
gan(){return this.b4}}
A.es.prototype={
eP(a,b){var s=A.j(a,!0,t.V)
s.push(B.a.gap(a))
this.eI(s)},
u(){return A.qr(this)},
pq(b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1="points",b2="getStart",b3=b0.f0(0),b4=t.nC,b5=A.a([],b4)
for(s=t.V,r=A.oO(b3,3,s),q=r.length,p=J.oX(b6),o=0;o<r.length;r.length===q||(0,A.f)(r),++o){n=r[o]
m=n.length
if(0>=m)return A.c(n,0)
l=n[0]
if(1>=m)return A.c(n,1)
k=n[1]
if(2>=m)return A.c(n,2)
j=n[2]
i=k.K(0,l)
h=j.K(0,k)
m=i.a
g=i.b
f=i.c
e=m*m+g*g+f*f
d=i.br(0,Math.sqrt(e))
c=h.a
b=h.b
a=h.c
a0=c*c+b*b+a*a
a1=h.br(0,Math.sqrt(a0))
a2=Math.acos((m*c+g*b+f*a)/(Math.sqrt(a0)*Math.sqrt(e)))*p.geM(b6)
a3=b6*Math.tan(a2/2)/2
a4=J.ng(i.nF(h).c)
e=k.K(0,d.B(0,a3))
B.a.p(b5,A.pL(a4*a2,k.R(0,a1.B(0,a3)),e))}r=t.l
q=t.y
b0.saI(q.a(A.a([],r)))
b4=A.a([B.a.gt(b5)],b4)
p=t.aY
B.a.M(b4,A.n8(b5,p))
for(b4=A.oO(b4,2,p),p=b4.length,o=0;o<b4.length;b4.length===p||(0,A.f)(b4),++o){a5=b4[o]
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
J.am(g,m)
m=a6.k1
if(m!=null){m.az(b2)
m=m.r
m===$&&A.b(b1)
m=J.aG(m)}else m=a6.cO()
g=a7.id
if(g!=null){g.az(b2)
g=g.r
g===$&&A.b(b1)
g=J.aG(g)}else g=a7.cP()
a8=A.jN(0,B.c,g,null,m)
m=a8.id
if(m!=null){m.az(b2)
m=m.r
m===$&&A.b(b1)
m=J.aG(m)}else m=a8.cP()
g=a8.k1
if(g!=null){g.az(b2)
g=g.r
g===$&&A.b(b1)
g=J.aG(g)}else g=a8.cO()
g=m.K(0,g)
m=g.a
f=g.b
g=g.c
g=B.h.bp(Math.sqrt(m*m+f*f+g*g)/a6.k9()*B.d.aZ(J.M(a6.r),a6.at))
m=a8.r
m===$&&A.b(b1)
a9=B.d.a4(J.M(m),a8.at)===1?J.aL(a8.r):null
a8.saI(q.a(a8.fK(g,A.j(a8.r,!0,s))))
if(a9!=null){m=q.a(A.a([a9],r))
J.am(a8.r,m)}m=q.a(A.j(a8.r,!0,s))
J.am(b0.r,m)}}}
A.eu.prototype={
u(){return A.qB(this)}}
A.eK.prototype={
u(){return A.qV(this)}}
A.dK.prototype={
u(){return A.aB(this)},
san(a){this.b4=A.cs(a)},
gan(){return this.b4}}
A.dl.prototype={
hC(a,b,c){this.eL(c,!0)
this.dn(b,!0)},
u(){return A.qA(this)}}
A.ev.prototype={
u(){return A.qC(this)}}
A.cf.prototype={
u(){return A.qE(this)},
c0(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null
if($.mx.ai(e.id)){s=$.mx.k(0,e.id).u()
r=s.d
r===$&&A.b("submobjects")
e.sb_(t.a.a(r))
e.sbj(0,s.gbj(s))
e.go=s.go
e.fx=e.k1=!0
return}r=e.id
q=A.a([],t.bD)
p=t.il
o=A.a([],p)
n=A.a([],t.lB)
o=new A.kA("http://www.w3.org/1999/xhtml",o,new A.fo(n))
o.bo(0)
n=A.ms(t.N)
m=A.a([],t.t)
m=new A.jB(A.tl(d),d,n,m)
m.sig(new A.a9(r))
m.a="utf-8"
m.b=!0
m.bo(0)
r=new A.e5(m,!0,!0,!1,A.ms(t.nU),new A.a2(""),new A.a2(""),new A.a2(""))
r.bo(0)
l=new A.jC(!1,r,o,q)
r.f=l
l.ml()
o=o.b
o===$&&A.b("document")
k=A.a([],p)
r=t.kU
j=A.a([],r)
i=A.qs("memory",!1)
q=t.m3.a(B.a.gmI(j))
r=A.a([],r)
$.fd.b=new A.jZ(q,i,r)
r=new A.a9("svg")
q=A.a([0],t.t)
h=new A.hE(d,q,new Uint32Array(A.mQ(r.aA(r))))
h.hD(r,d)
r=new A.ky(85,117,43,63,new A.a9("CDATA"),h,"svg",!0,0)
q=new A.lo(r)
q.d=t.q.a(r.cB())
r.e=!0
g=q.oW()
if(g==null||j.length!==0)A.N(A.aD("'svg' is not a valid selector: "+A.k(j),d,d))
new A.ex().jI(0,o,g,k)
r=k.length
q=t.a
f=0
for(;f<k.length;k.length===r||(0,A.f)(k),++f)e.aN(q.a(e.ex(k[f],new A.ew(B.ab,d,d))))
$.mx.v(0,e.id,e.u())},
ex(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=null,h=t.hJ,g=A.a([],h),f=a.x,e=f==null?i:f.toLowerCase(),d=b.bI(j.bs(a))
if(e==="defs")j.pF(a)
else if(e!=="style")if(B.a.F(A.a(["g","svg","symbol"],t.s),e)){h=A.a([],h)
for(f=t.v,f=A.j(new A.al(a.giO(a).a,f),!1,f.h("i.E")),s=A.w(f),f=new J.az(f,f.length,s.h("az<1>")),s=s.c;f.n();){r=f.d
B.a.M(h,j.ex(r==null?s.a(r):r,d))}B.a.M(g,h)}else if(e==="path"){q=a.b.k(0,"d")
if(q!=null&&q.length!==0)B.a.p(g,j.ed(q,d,a))}else if(e==="use")B.a.M(g,j.pG(a,d))
else if(e==="rect"){p=j.aO(a.b.k(0,"rx"))
h=a.b
if(p===0){h=j.aO(h.k(0,"width"))
o=A.qz(B.c,j.aO(a.b.k(0,"height")),h)}else{h=j.aO(h.k(0,"width"))
f=j.aO(a.b.k(0,"height"))
s=A.a([B.p,B.aD,B.M,B.aF],t.l)
o=new A.ev(4,0,!1,0.01,!1,0.000001,4,i,i,i,B.c,$,i,$,$,$)
o.ao(B.c,i,i)
o.eP(s,B.c)
o.hC(B.c,f,h)
o.pq(p)}o.aG(o.ar(B.e).K(0,o.ar(B.p)))
B.a.p(g,j.bS(d.bI(j.bs(a)),o))}else if(e==="ellipse"){n=j.aO(a.b.k(0,"cx"))
m=j.aO(a.b.k(0,"cy"))
l=j.aO(a.b.k(0,"rx"))
k=j.aO(a.b.k(0,"ry"))
o=new A.dZ(0,6.283185307179586,1,B.e,9,0.35,B.l,A.aN(i,0,B.c,i,0),i,i,4,0,!1,0.01,!1,0.000001,4,i,i,i,B.c,$,i,$,$,$)
o.ao(B.c,i,i)
o.a9(B.c)
o.eL(l*2,!0)
o.dn(k*2,!0)
o.aG(B.j.B(0,n).R(0,B.o.B(0,m)))
B.a.p(g,j.bS(d.bI(j.bs(a)),o))}else if(e==="circle"){n=j.aO(a.b.k(0,"cx"))
m=j.aO(a.b.k(0,"cy"))
o=A.nq(B.e,B.c,j.aO(a.b.k(0,"r")))
o.aG(B.j.B(0,n).R(0,B.o.B(0,m)))
B.a.p(g,j.bS(d.bI(j.bs(a)),o))}else if(e==="polygon"||e==="polyline")B.a.p(g,j.oR(a,d))
else A.n5("Unknown SVG element "+A.k(e))
j.oi(a,A.hY(g))
return g},
ed(a,b,c){var s=A.qF(a)
if(c!=null)return this.bS(b.bI(this.bs(c)),s)
else return this.bS(b,s)},
jB(a,b){return this.ed(a,b,null)},
pG(a,b){var s,r,q,p=a.b,o=A.A(p).h("aU<1>"),n=A.j(new A.aU(p,o),!0,o.h("i.E"))
o=p.gjX(p)
s=A.j(o,!0,A.A(o).h("i.E"))
r=B.a.jj(n,new A.kj())
if(r>=0){if(!(r<s.length))return A.c(s,r)
q=s[r]}else q=null
o=q==null?null:A.a(q.split("#"),t.s)
if(o==null)o=[]
q=B.a.aD(A.d_(o,t.z),"")
o=this.k2
if(!o.ai(q))A.n5("SVG ref "+q+" not recognized")
o=o.k(0,q)
o.toString
return this.ex(o,b.bI(this.bs(a)))},
aO(a){var s,r,q,p,o,n
if(a===""||a==null||a==="none")a="0.0"
s=A.j(B.ah,!0,t.N)
s.push("+")
s.push("-")
s.push(".")
s.push("e")
s.push("E")
r=A.a([],t.s)
for(q=a.split(""),p=q.length,o=0;o<p;++o){n=q[o]
if(B.a.F(s,n))r.push(n)}return A.bM(B.a.aU(r))},
oR(a,b){var s,r,q,p,o=this,n=a.b.k(0,"points")
n.toString
for(s=n,r=0;r<10;++r){q=B.ah[r]
s=A.bp(s," "+q," L"+q)}b=b.bI(o.bs(a))
p=o.jB("M"+s,b)
return o.bS(b.bI(o.bs(a)),p)},
iW(a){var s,r,q,p,o,n
if(a===""||a==="none")return B.q
if(a==null)return null
s=A.a([3,4,6,8],t.t)
if(a==="currentcolor"){r=this.a
r===$&&A.b("color")
return r}else if(B.b.Z(a,"rgba")){r=A.a(a.split(""),t.s)
q=a.length-1
A.aF(5,q,r.length)
p=A.bb(r,5,q,t.N).aU(0).split(",")
q=p.length
if(0>=q)return A.c(p,0)
r=A.bM(p[0])
if(1>=q)return A.c(p,1)
o=A.bM(p[1])
if(2>=q)return A.c(p,2)
n=A.bM(p[2])
if(3>=q)return A.c(p,3)
return new A.P(r,o,n,A.bM(p[3]))}else if(B.b.Z(a,"rgb")){r=A.a(a.split(""),t.s)
q=a.length-1
A.aF(4,q,r.length)
p=A.bb(r,4,q,t.N).aU(0).split(",")
q=p.length
if(0>=q)return A.c(p,0)
r=A.bM(p[0])
if(1>=q)return A.c(p,1)
o=A.bM(p[1])
if(2>=q)return A.c(p,2)
return new A.P(r,o,A.bM(p[2]),1)}else if(B.b.Z(a,"#")||B.a.F(s,a.length))return A.oy(a)
else{A.n5("unimplented type of color: "+a)
return null}},
bS(a,b){b.l3(a.a,a.b,a.c)
return b},
bs(a){var s,r,q=a.b.k(0,"fill"),p=q==null?null:q.toLowerCase()
q=a.b.k(0,"stroke")
s=q==null?null:q.toLowerCase()
r=a.b.k(0,"stroke-width")
return new A.ew(this.iW(p),this.iW(s),this.aO(r))},
oi(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
if(a2.b.k(0,"x")!=null&&a2.b.k(0,"y")!=null){s=this.aO(a2.b.k(0,"x"))
r=this.aO(a2.b.k(0,"y"))
a3.aG(B.j.B(0,s).R(0,B.o.B(0,r)))}q=a2.b.k(0,"transform")
if(q==null)q=""
p=["matrix","translate","scale","rotate","skewX","skewY"]
o=A.a([],t.s)
for(n=0;n<6;++n)o.push(p[n]+"[^)]*\\)")
m=A.au(B.a.aD(o,"|")).c5(0,q)
l=A.au("[-+]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:[eE][-+]?\\d+)?")
for(o=new A.dt(m.a,m.b,m.c),k=t.lu,j=t.n,i=t.b,h=t.o;o.n();){g=o.d
f=(g==null?k.a(g):g).b
if(0>=f.length)return A.c(f,0)
e=f[0].split("(")
f=e.length
if(0>=f)return A.c(e,0)
d=J.nk(e[0])
c=A.a([],j)
if(1>=f)return A.c(e,1)
f=l.c5(0,e[1])
f=new A.dt(f.a,f.b,f.c)
for(;f.n();){s=f.d
b=(s==null?k.a(s):s).b
if(0>=b.length)return A.c(b,0)
b=b[0]
b.toString
c.push(A.bM(b))}switch(d){case"matrix":a=A.aM(null,A.a([c],i)).pm(3,2)
h.a(new A.O(2,0,h))
f=a.a
f===$&&A.b("values")
if(2>=f.length)return A.c(f,2)
c=J.Z(f[2],0)
h.a(new A.O(2,1,h))
if(2>=f.length)return A.c(f,2)
b=J.Z(f[2],1)
a0=A.dI(3)
h.a(new A.O(0,0,h))
if(!(0<f.length))return A.c(f,0)
a1=J.Z(f[0],0)
a0.bd(h.a(new A.O(0,0,h)),a1)
h.a(new A.O(0,1,h))
if(!(0<f.length))return A.c(f,0)
a1=J.Z(f[0],1)
a0.bd(h.a(new A.O(0,1,h)),a1)
h.a(new A.O(1,0,h))
if(!(1<f.length))return A.c(f,1)
a1=J.Z(f[1],0)
a0.bd(h.a(new A.O(1,0,h)),a1)
h.a(new A.O(1,1,h))
if(!(1<f.length))return A.c(f,1)
f=J.Z(f[1],1)
a0.bd(h.a(new A.O(1,1,h)),f)
f=h.a(new A.O(1,0,h))
a1=a0.a
a1===$&&A.b("values")
if(!(1<a1.length))return A.c(a1,1)
a0.bd(f,J.Z(a1[1],0)*-1)
f=h.a(new A.O(1,1,h))
if(!(1<a1.length))return A.c(a1,1)
a0.bd(f,J.Z(a1[1],1)*-1)
f=h.a(new A.O(1,2,h))
if(!(1<a1.length))return A.c(a1,1)
a0.bd(f,J.Z(a1[1],2)*-1)
f=h.a(new A.O(0,1,h))
if(!(0<a1.length))return A.c(a1,0)
a0.bd(f,J.Z(a1[0],1)*-1)
f=h.a(new A.O(1,1,h))
if(!(1<a1.length))return A.c(a1,1)
a0.bd(f,J.Z(a1[1],1)*-1)
f=h.a(new A.O(2,1,h))
if(2>=a1.length)return A.c(a1,2)
a0.bd(f,J.Z(a1[2],1)*-1)
a3.fd(a0)
a3.aG(B.j.B(0,c).R(0,B.o.B(0,b)))
break
case"scale":f=c.length
if(f===1){if(0>=f)return A.c(c,0)
f=c[0]
a3.he(0,new A.e(f,f,1),B.e)}else if(f===2){if(0>=f)return A.c(c,0)
b=c[0]
if(1>=f)return A.c(c,1)
a3.he(0,new A.e(b,c[1],1),B.e)}break
case"translate":f=c.length
if(0>=f)return A.c(c,0)
s=c[0]
if(f===2){if(1>=f)return A.c(c,1)
r=c[1]}else r=0
a3.aG(B.j.B(0,s).R(0,B.o.B(0,r)))
break}}},
h2(a){var s,r,q=t.il,p=A.a([],q)
if(a.b.ai("id"))return A.a([a],q)
for(q=t.v,q=A.j(new A.al(a.giO(a).a,q),!1,q.h("i.E")),s=A.w(q),q=new J.az(q,q.length,s.h("az<1>")),s=s.c;q.n();){r=q.d
B.a.M(p,this.h2(r==null?s.a(r):r))}return p},
pF(a){var s,r,q,p,o,n
for(s=this.h2(a),r=s.length,q=this.k2,p=0;p<s.length;s.length===r||(0,A.f)(s),++p){o=s[p]
n=o.b.k(0,"id")
n.toString
q.v(0,n,o)}},
fN(){var s,r=this
r.aG(r.ar(B.e).B(0,B.aE).B(0,-1))
if(r.gbj(r)!=null){s=r.gbj(r)
s.toString
r.kW(s)}},
sbj(a,b){this.fy=A.ox(b)},
snD(a,b){this.id=A.aw(b)},
gbj(a){return this.fy}}
A.kj.prototype={
$1(a){var s
t.K.a(a)
s=J.bo(a)
return B.b.F(s.l(a),"href")&&B.b.F(s.l(a),"xlink")},
$S:43}
A.dm.prototype={
u(){return A.qG(this)},
kf(){var s=A.a(["M","L","H","V","C","S","Q","T","A","Z"],t.s),r=A.j(s,!0,t.N)
B.a.M(r,new A.I(s,t.gL.a(new A.kl()),t.gQ))
return r},
c0(){var s,r,q,p,o,n,m,l=this,k=A.au("["+B.a.aU(l.kf())+"]"),j=l.fx,i=k.c5(0,j),h=t.N,g=A.A(i)
g=A.jU(i,g.h("n(i.E)").a(new A.kk()),g.h("i.E"),h)
s=A.j(g,!0,A.A(g).h("i.E"))
r=A.d_(B.b.cj(j,k),h)
for(j=A.K(s.length,0,1),i=j.length,q=null,p=0;p<j.length;j.length===i||(0,A.f)(j),++p,q=n){o=j[p]
n=B.a.k(s,o)
m=B.a.k(r,o)
l.og(n,m,q==null?"":q)}l.eo(0,3.141592653589793,B.e,B.j)},
og(a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a="addCubicBezierCurveTo",a0=a2.toUpperCase(),a1=b.r
a1===$&&A.b("points")
s=J.c6(a1)?J.aL(b.r):new A.e(0,0,0)
r=b.ll(a0,a3,a2!==a2.toUpperCase(),s)
switch(a0){case"M":if(0>=r.length)return A.c(r,0)
a1=t.V
q=t.y.a(A.a([a1.a(r[0])],t.l))
J.am(b.r,q)
for(a1=A.d_(r,a1),q=a1.length,p=0;p<a1.length;a1.length===q||(0,A.f)(a1),++p)b.dI(a1[p])
return
case"H":case"V":case"L":for(a1=r.length,p=0;p<r.length;r.length===a1||(0,A.f)(r),++p)b.dI(r[p])
return
case"C":for(a1=A.K(r.length,0,3),q=a1.length,o=t.l,n=t.y,m=b.at,l=t.V,p=0;p<a1.length;a1.length===q||(0,A.f)(a1),++p){k=a1[p]
if(typeof k!=="number")return k.R()
j=B.a.k(r,k+0)
i=B.a.k(r,k+1)
h=B.a.k(r,k+2)
l.a(j)
l.a(i)
l.a(h)
b.az(a)
if(B.d.a4(J.M(b.r),m)===1){j=n.a(A.a([j,i,h],o))
J.am(b.r,j)}else{j=n.a(A.a([J.aL(b.r),j,i,h],o))
J.am(b.r,j)}}return
case"S":if(B.a.F(A.a(["C","S"],t.s),a4.toUpperCase())){a1=b.r
q=J.Y(a1)
g=q.k(a1,q.gm(a1)-2)}else g=s
for(a1=A.K(r.length,0,2),q=a1.length,o=t.l,n=t.y,m=b.at,l=t.V,p=0;p<a1.length;a1.length===q||(0,A.f)(a1),++p){k=a1[p]
f=s.B(0,2).K(0,g)
j=B.a.k(r,k)
if(typeof k!=="number")return k.R()
i=k+1
h=B.a.k(r,i)
l.a(j)
l.a(h)
b.az(a)
if(B.d.a4(J.M(b.r),m)===1){j=n.a(A.a([f,j,h],o))
J.am(b.r,j)}else{j=n.a(A.a([J.aL(b.r),f,j,h],o))
J.am(b.r,j)}s=B.a.k(r,i)
g=B.a.k(r,k)}return
case"Q":for(a1=A.K(r.length,0,2),q=a1.length,o=t.l,n=t.y,m=b.at,l=t.V,p=0;p<a1.length;a1.length===q||(0,A.f)(a1),++p){k=a1[p]
j=B.a.k(r,k)
if(typeof k!=="number")return k.R()
i=B.a.k(r,k+1)
l.a(j)
l.a(i)
h=j.B(0,0.6666666666666666).R(0,J.aL(b.r).B(0,0.3333333333333333))
j=j.B(0,0.6666666666666666).R(0,i.B(0,0.3333333333333333))
b.az(a)
if(B.d.a4(J.M(b.r),m)===1){j=n.a(A.a([h,j,i],o))
J.am(b.r,j)}else{j=n.a(A.a([J.aL(b.r),h,j,i],o))
J.am(b.r,j)}}return
case"T":if(B.a.F(A.a(["Q","T"],t.s),a4.toUpperCase())){a1=b.r
q=J.Y(a1)
e=J.d0(q.k(a1,q.gm(a1)-2),1.5).K(0,J.d0(J.aL(b.r),0.5))}else e=s
for(a1=r.length,q=t.l,o=t.y,n=b.at,m=t.V,p=0;p<r.length;r.length===a1||(0,A.f)(r),++p,e=c,s=d){d=r[p]
c=s.B(0,2).K(0,e)
m.a(d)
l=c.B(0,0.6666666666666666).R(0,J.aL(b.r).B(0,0.3333333333333333))
j=c.B(0,0.6666666666666666).R(0,d.B(0,0.3333333333333333))
b.az(a)
if(B.d.a4(J.M(b.r),n)===1){l=o.a(A.a([l,j,d],q))
J.am(b.r,l)}else{l=o.a(A.a([J.aL(b.r),l,j,d],q))
J.am(b.r,l)}}return
case"A":for(a1=A.K(r.length,0,3),q=a1.length,o=t.l,n=t.y,m=b.at,l=t.V,p=0;p<a1.length;a1.length===q||(0,A.f)(a1),++p){k=a1[p]
j=B.a.k(r,k)
if(typeof k!=="number")return k.R()
i=B.a.k(r,k+1)
h=B.a.k(r,k+2)
l.a(j)
l.a(i)
l.a(h)
b.az(a)
if(B.d.a4(J.M(b.r),m)===1){j=n.a(A.a([j,i,h],o))
J.am(b.r,j)}else{j=n.a(A.a([J.aL(b.r),j,i,h],o))
J.am(b.r,j)}}return
case"Z":if(!b.iU(J.aG(b.r),J.aL(b.r))){a1=B.a.gt(b.eA(A.j(b.r,!0,t.V)))
if(0>=a1.length)return A.c(a1,0)
b.dI(a1[0])}return}},
ll(a,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=A.tZ(a0),c=t.l,b=A.a([],c)
if(a==="A"){for(c=A.p0(d,2,t.W),s=c.length,r=null,q=0;q<c.length;c.length===s||(0,A.f)(c),++q){p=c[q]
if(r!=null)a2=r
if(a1){if(5>=p.length)return A.c(p,5)
o=p[5]
if(typeof o!=="number")return o.R()
B.a.v(p,5,o+a2.a)
if(6>=p.length)return A.c(p,6)
o=p[6]
if(typeof o!=="number")return o.R()
B.a.v(p,6,o+a2.b)}o=p.length
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
B.a.M(b,A.tu(a2,m,l,k,j,i,new A.e(n,p[6],0)))
n=p.length
if(5>=n)return A.c(p,5)
i=p[5]
if(6>=n)return A.c(p,6)
r=new A.e(i,p[6],0)}return b}else if(a==="H")if(a1){c=A.a([],c)
for(s=d.length,q=0;q<d.length;d.length===s||(0,A.f)(d),++q)c.push(new A.e(d[q],0,0))
b=c
a1=!0}else{c=A.a([],c)
for(s=d.length,o=a2.b,q=0;q<d.length;d.length===s||(0,A.f)(d),++q)c.push(new A.e(d[q],o,0))
b=c
a1=!1}else if(a==="V")if(a1){c=A.a([],c)
for(s=d.length,q=0;q<d.length;d.length===s||(0,A.f)(d),++q)c.push(new A.e(0,d[q],0))
b=c
a1=!0}else{c=A.a([],c)
for(s=d.length,o=a2.a,q=0;q<d.length;d.length===s||(0,A.f)(d),++q)c.push(new A.e(o,d[q],0))
b=c
a1=!1}else{c=A.a([],c)
for(s=A.p0(d,2,t.W),o=s.length,q=0;q<s.length;s.length===o||(0,A.f)(s),++q){h=s[q]
n=h.length
if(0>=n)return A.c(h,0)
m=h[0]
if(1>=n)return A.c(h,1)
c.push(new A.e(m,h[1],0))}b=c}if(!a1)return b
if(a==="Q"||a==="S")g=2
else g=a==="C"?3:1
for(c=A.K(b.length,0,1),s=c.length,f=a2,q=0;q<c.length;c.length===s||(0,A.f)(c),++q){e=c[q]
B.a.v(b,e,B.a.k(b,e).R(0,f))
if(typeof e!=="number")return e.R()
if(B.h.a4(e+1,g)===0)f=B.a.k(b,e)}return b}}
A.kl.prototype={
$1(a){return A.aw(a).toLowerCase()},
$S:20}
A.kk.prototype={
$1(a){var s=t.lu.a(a).b
if(0>=s.length)return A.c(s,0)
s=s[0]
s.toString
return s},
$S:45}
A.ew.prototype={
bI(a){var s,r,q=a.a
if(q==null)q=this.a
s=a.b
if(s==null)s=this.b
r=a.c
return new A.ew(q,s,r==null?this.c:r)},
l(a){return"fill: "+A.k(this.a)+", stroke: "+A.k(this.b)+" "+A.k(this.c)+"pt"}}
A.eH.prototype={
u(){return A.qS(this)}}
A.bQ.prototype={
u(){return A.qI(this)},
iZ(){var s=this,r=s.a7
B.b.eq(r)
s.a7=A.qJ(r)
if(!$.eA.ai(s.a6)||!$.eA.k(0,s.a6).ai(s.a7))throw A.d(s.a7+" need to be preloaded")
r=$.eA.k(0,s.a6).k(0,s.a7)
r.toString
s.snD(0,r)
s.saI(t.y.a(A.a([],t.l)))
s.sb_(t.a.a(A.a([],t.r)))
s.c0()
s.fN()
r=s.a
r===$&&A.b("color")
s.a9(r)
s.kk(0.035)},
l(a){return this.bK()+"("+this.a7+")"},
ed(a,b,c){var s=null,r=new A.eH(a,s,4,0,!1,0.01,!1,0.000001,4,s,s,s,B.c,$,s,$,$,$)
r.ao(B.c,s,s)
if(c!=null)return this.bS(b.bI(this.bs(c)),r)
else return this.bS(b,r)},
jB(a,b){return this.ed(a,b,null)},
sbj(a,b){this.ad=A.ox(b)},
gbj(a){return this.ad}}
A.el.prototype={
u(){return A.ql(this)},
ni(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1="submobjects",a2=A.a([],t.nn)
for(s=a.ba,r=s.length,q=t.a,p=a.aK,o=t.s,n=t.N,m=t.h,l=t.r,k=t.j,j=0,i=0;i<s.length;s.length===r||(0,A.f)(s),++i,j=e){h=new A.bQ(s[i],a.a6,!0,2,a0,"",!0,A.bh(n,m),4,0,!1,0.01,!1,0.000001,4,a0,a0,a0,B.c,$,a0,$,$,$)
h.ao(B.c,a0,a0)
g=h.r
g===$&&A.b("points")
if(J.c6(g))h.fN()
h.a=B.c
h.iZ()
g=h.d
g===$&&A.b(a1)
f=g.length
e=j+f+B.a.aD(A.a(p.split(" "),o),"").length
if(f===0){h.sb_(q.a(A.a([A.o5(B.e)],l)))
g=a.d
g===$&&A.b(a1)
d=g.length
c=Math.min(j,d-1)
if(c>>>0!==c||c>=d)return A.c(g,c)
g=k.a(g[c])
h.cA(g.ar(B.j))}else{g=a.d
g===$&&A.b(a1)
A.aF(j,e,g.length)
d=A.w(g)
b=new A.aK(g,j,e,d.h("aK<1>"))
b.ck(g,j,e,d.c)
h.sb_(q.a(b.aA(0)))}B.a.p(a2,h)}a.sb_(q.a(a2))},
ke(a,b,c){var s,r,q,p=new A.jV(!0,!0),o=A.a([],t.nn),n=this.d
n===$&&A.b("submobjects")
s=n.length
r=0
for(;r<n.length;n.length===s||(0,A.f)(n),++r){q=n[r]
if(q instanceof A.bQ&&A.ax(p.$2(a,q.a7)))o.push(q)}return o},
kT(a,b,c,d){var s,r,q,p=this.ke(a,!0,!0)
for(s=p.length,r=0;r<p.length;p.length===s||(0,A.f)(p),++r){q=p[r]
q.eH(b,!0)
q.eJ(b,!0)
q.hy(b,!0)}},
kU(a){var s,r
t.fg.a(a)
for(s=a.gdV(a),s=new A.cq(s.a(),s.$ti.h("cq<1>"));s.n();){r=s.gq()
this.kT(r.a,r.b,!0,!0)}},
spy(a){this.ba=t.I.a(a)}}
A.jV.prototype={
$2(a,b){var s
if(!this.a){a=a.toLowerCase()
b=b.toLowerCase()}s=B.b.F(b,a)
return s},
$S:46}
A.h6.prototype={
hB(a){this.aN(t.a.a(A.a([this.w],t.r)))
this.dN()},
dH(a,b,c,d){var s,r
A.iA(d,t.e,"IEvent","addEventListener")
s=new A.b5(d.h("B(0)").a(c),b,d.h("b5<0>"))
r=$.dE()
t.d3.a(s)
r=r.gc8().k(0,b)
r.toString
B.a.p(r,s)
return s}}
A.dX.prototype={
dN(){var s=this
s.slS(t.gG.a(s.dH(0,B.C,new A.j8(s),t.gn)))
s.slT(t.m4.a(s.dH(0,B.B,new A.j9(s),t.oJ)))
s.slU(t.Y.a(s.dH(0,B.u,new A.ja(s),t.f)))},
u(){return A.q1(this)},
slS(a){this.ay=t.gG.a(a)},
slT(a){this.ch=t.m4.a(a)},
slU(a){this.CW=t.Y.a(a)}}
A.j8.prototype={
$1(a){var s
t.gn.a(a)
s=this.a
if(s.cx){s.w.cA(a.c)
return!0}return!1},
$S:47}
A.j9.prototype={
$1(a){var s=this.a,r=s.w,q=t.oJ.a(a).c
if(r.js(q)){s.cx=!0
r.cA(q)
return!0}return!1},
$S:48}
A.ja.prototype={
$1(a){t.f.a(a)
return this.a.cx=!1},
$S:21}
A.dQ.prototype={
goI(a){var s=this.ch
s===$&&A.b("onClick")
return s},
lI(a,b){this.slQ(t.M.a(b))},
dN(){this.slR(t.Y.a(this.dH(0,B.u,new A.iY(this),t.f)))},
u(){return A.pU(this)},
slR(a){this.ay=t.Y.a(a)},
slQ(a){this.ch=t.M.a(a)},
oJ(a){return this.goI(this).$0()}}
A.iY.prototype={
$1(a){var s=this.a
if(s.w.js(t.f.a(a).c)){s.oJ(0)
return!0}return!1},
$S:21}
A.G.prototype={
gjV(){var s=this.e
if(s===$){s=A.a([],t.po)
this.slW(s)}return s},
ao(a,b,c){var s=this,r=s.bK()
s.b=r
s.sb_(t.a.a(A.a([],t.r)))
s.f=!1
s.saI(t.y.a(A.a([],t.l)))
s.jk()
s.c0()},
l(a){return this.bK()},
bK(){var s=this.hz(0),r=A.au("^Instance of '(.*?)'$").jg(s).b
if(1>=r.length)return A.c(r,1)
r=r[1]
r.toString
return r},
jk(){},
c0(){},
aN(a){var s,r,q,p,o,n=t.a
n.a(a)
if(B.a.F(a,this))throw A.d("Mobject can't contain itself")
s=A.j(a,!0,t.j)
r=this.d
r===$&&A.b("submobjects")
q=r.length
p=0
for(;p<r.length;r.length===q||(0,A.f)(r),++p){o=r[p]
if(!B.a.F(a,o))s.push(o)}this.sb_(n.a(s))},
mN(a){var s,r,q,p,o,n=t.a
n.a(a)
if(B.a.F(a,this))throw A.d("Mobject can't contain itself")
s=A.a([],t.r)
r=this.d
r===$&&A.b("submobjects")
q=r.length
p=0
for(;p<r.length;r.length===q||(0,A.f)(r),++p){o=r[p]
if(!B.a.F(a,o))s.push(o)}B.a.M(s,a)
this.sb_(n.a(s))},
a_(a,b){var s,r,q,p,o,n=t.a
n.a(b)
s=A.a([],t.r)
r=this.d
r===$&&A.b("submobjects")
q=r.length
p=0
for(;p<r.length;r.length===q||(0,A.f)(r),++p){o=r[p]
if(!B.a.F(b,o))s.push(o)}this.sb_(n.a(s))},
cV(a,b,c){var s,r,q,p,o,n,m,l
t.ew.a(c)
if(b==null)b=this.ar(a)
for(s=this.dk(),r=s.length,q=t.y,p=t.l,o=0;o<s.length;s.length===r||(0,A.f)(s),++o){n=s[o]
m=A.a([],p)
l=n.r
l===$&&A.b("points")
l=J.F(l)
for(;l.n();)m.push(J.me(c.$1(l.gq().K(0,b)),b))
n.saI(q.a(m))}},
iH(a){return this.cV(B.e,null,a)},
u(){return A.qn(this)},
jU(a,b){var s,r,q=this,p=q.f
p===$&&A.b("updatingSuspended")
if(p)return
for(p=q.gjV(),s=p.length,r=0;r<p.length;p.length===s||(0,A.f)(p),++r)p[r].$2(q,a)
p=q.d
p===$&&A.b("submobjects")
s=p.length
r=0
for(;r<p.length;p.length===s||(0,A.f)(p),++r)p[r].jU(a,!0)},
h0(a){return this.jU(a,!0)},
dJ(a){t.k5.a(a)
B.a.p(this.gjV(),a)
this.h0(0)},
aG(a){return this.iH(new A.k6(a))},
he(a,b,c){return this.cV(B.e,c,new A.k5(b))},
cg(a,b,c){return this.cV(b,c,new A.k4(a))},
eD(a,b){return this.cg(a,B.e,b)},
kk(a){return this.cg(a,B.e,null)},
eo(a,b,c,d){this.cV(B.e,c,new A.k3(A.tT(b,d).gjT()))},
fW(a,b){return this.eo(a,b,null,B.l)},
pp(a,b,c){return this.eo(a,b,c,B.l)},
lk(a,b,c,d){return this.cV(c,d,new A.k7(b,a))},
fd(a){var s={},r=A.dI(3)
s.a=r
s.a=r.cz(0,new A.k_(a))
this.iH(new A.k0(s))},
jz(a,b,c){this.aG(a.ar(B.e.R(0,c)).K(0,this.ar(B.e.K(0,c))).R(0,c.B(0,b)).B(0,B.aE))
return null},
jN(a,b,c,d,e){var s,r=this.oy(b)
if(r===0)return
s=a/r
if(e)this.lk(s,b,c,d)
else this.cg(s,c,d)},
eL(a,b){this.jN(a,0,B.e,null,b)},
dn(a,b){this.jN(a,1,B.e,null,b)},
kW(a){return this.dn(a,!1)},
cA(a){this.aG(a.K(0,this.ar(B.e)).B(0,new A.e(1,1,1)))},
cE(a,b){var s,r=this,q=r.aM(),p=r.am(),o=p.K(0,q)
if(q.V(0,p))throw A.d("Cannot position endpoints of a closed loop")
s=b.K(0,a)
r.eD(Math.sqrt(s.aY())/Math.sqrt(o.aY()),q)
r.pp(0,s.cU()-o.cU(),q)
r.aG(a.K(0,q))},
c1(a,b){var s,r,q=this.d
q===$&&A.b("submobjects")
s=q.length
r=0
for(;r<q.length;q.length===s||(0,A.f)(q),++r)q[r].c1(a,!0)
this.a=a},
d1(a,b){var s,r,q=this.d
q===$&&A.b("submobjects")
s=q.length
r=0
for(;r<q.length;q.length===s||(0,A.f)(q),++r)q[r].d1(a,!0)},
j8(a){return this.d1(a,!0)},
bJ(){var s,r,q,p=A.a([this],t.r),o=this.d
o===$&&A.b("submobjects")
s=o.length
r=0
for(;r<o.length;o.length===s||(0,A.f)(o),++r)B.a.M(p,o[r].bJ())
q=A.mr(p,t.j)
return A.j(q,!0,A.A(q).h("aX.E"))},
dk(){var s=this.bJ(),r=A.w(s),q=r.h("ap<1>")
return A.j(new A.ap(s,r.h("B(1)").a(new A.k1()),q),!0,q.h("i.E"))},
h4(){var s,r,q,p,o=A.a([],t.l)
for(s=this.dk(),r=s.length,q=0;q<s.length;s.length===r||(0,A.f)(s),++q){p=s[q].r
p===$&&A.b("points")
B.a.M(o,p)}return o},
ez(){return this.h4()},
dj(a,b,c){var s,r,q
t.fA.a(c)
if(c==null)c=this.ez()
s=A.a([],t.n)
for(r=c.length,q=0;q<c.length;c.length===r||(0,A.f)(c),++q)s.push(c[q].di(a))
if(b<0)return B.a.b5(s,B.Q)
else if(b===0)return(B.a.b5(s,B.Q)+B.a.b5(s,B.E))/2
else return B.a.b5(s,B.E)},
ka(a,b){return this.dj(a,b,null)},
ar(a){var s=this,r=s.ez()
if(r.length===0)return B.e
return new A.e(s.dj(0,B.h.bp(a.a),r),s.dj(1,B.h.bp(a.b),r),s.dj(2,B.h.bp(a.c),r))},
oy(a){var s,r,q,p=this.h4()
if(p.length===0)return 1
s=A.w(p)
r=new A.I(p,s.h("t(1)").a(new A.k2(a)),s.h("I<1,t>"))
q=r.b5(0,B.Q)
return r.b5(0,B.E)-q},
ev(a,b){return this.ka(a,B.h.bp(B.e.di(a)))},
ha(){return new A.e(this.ev(0,null),this.ev(1,null),this.ev(2,null))},
aM(){this.az("getStart")
var s=this.r
s===$&&A.b("points")
return J.aG(s)},
am(){this.az("getEnd")
var s=this.r
s===$&&A.b("points")
return J.aL(s)},
gm(a){var s=A.a([],t.r),r=this.r
r===$&&A.b("points")
if(J.c6(r))s.push(this)
r=this.d
r===$&&A.b("submobjects")
B.a.M(s,r)
return s.length},
eO(a){var s=A.a([],t.r),r=this.r
r===$&&A.b("points")
if(J.c6(r))s.push(this)
r=this.d
r===$&&A.b("submobjects")
B.a.M(s,r)
return s},
fb(a){var s,r,q,p,o,n=this,m="points",l="submobjects",k=n.r
k===$&&A.b(m)
if(J.cy(k)){k=a.r
k===$&&A.b(m)
k=J.c6(k)}else k=!1
if(k)a.jH()
k=a.r
k===$&&A.b(m)
if(J.cy(k)&&J.c6(n.r))n.jH()
s=n.eO(0).length
r=a.eO(0).length
n.iw(Math.max(0,r-s))
a.iw(Math.max(0,s-r))
n.iD(a)
k=n.d
k===$&&A.b(l)
q=a.d
q===$&&A.b(l)
q=new A.at(A.a([k,q],t.Z),t.oS)
q=q.gH(q)
for(;q.n();){p=q.b
if(p==null)p=A.N(A.av("No element"))
k=p.length
if(0>=k)return A.c(p,0)
o=p[0]
if(1>=k)return A.c(p,1)
o.fb(p[1])}},
h9(){throw A.d("getPointMobject not implemented for "+A.k(this.gkd())+"()")},
iD(a){var s,r,q=this.r
q===$&&A.b("points")
s=J.M(q)
q=a.r
q===$&&A.b("points")
r=J.M(q)
if(s<r)this.iE(a)
else if(s>r)a.iE(this)},
iE(a){throw A.d("Not implemented")},
jH(){var s=this.u(),r=t.r,q=t.a
s.sb_(q.a(A.a([],r)))
this.saI(t.y.a(A.a([],t.l)))
this.aN(q.a(A.a([s],r)))},
iw(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
if(a2===0)return
s=a1.eO(0).length
if(s===0){r=A.a([],t.r)
for(q=A.K(a2,0,1),p=q.length,o=0;o<q.length;q.length===p||(0,A.f)(q),++o)r.push(a1.h9())
a1.sb_(t.a.a(r))}n=s+a2
r=t.t
q=A.a([],r)
for(p=A.K(n,0,1),m=p.length,o=0;o<p.length;p.length===m||(0,A.f)(p),++o){l=p[o]
if(typeof l!=="number")return l.B()
q.push(B.h.aZ(l*s,n))}p=A.a([],r)
for(m=A.K(s,0,1),k=m.length,j=t.S,o=0;o<m.length;m.length===k||(0,A.f)(m),++o){i=m[o]
h=A.a([],r)
for(g=q.length,f=J.bo(i),e=0;e<q.length;q.length===g||(0,A.f)(q),++e)if(f.V(i,q[e]))h.push(1)
else h.push(0)
p.push(A.ma(h,j))}d=A.a([],t.r)
r=a1.d
r===$&&A.b("submobjects")
p=new A.at(A.a([r,p],t.bo),t.c2)
p=p.gH(p)
r=t.j
for(;p.n();){c=p.b
if(c==null)c=A.N(A.av("No element"))
q=c.length
if(0>=q)return A.c(c,0)
b=r.a(c[0])
if(1>=q)return A.c(c,1)
a=A.a0(c[1])
B.a.p(d,b)
for(q=A.K(a,1,1),m=q.length,o=0;o<q.length;q.length===m||(0,A.f)(q),++o){a0=b.u()
a0.j8(1)
B.a.p(d,a0)}}a1.sb_(t.a.a(d))},
fL(a,b,c){},
fe(a){var s,r,q,p,o,n,m
this.fb(a)
for(s=new A.at(A.a([this.bJ(),a.bJ()],t.Z),t.oS),s=s.gH(s),r=t.V,q=t.y;s.n();){p=s.b
if(p==null)p=A.N(A.av("No element"))
o=p.length
if(0>=o)return A.c(p,0)
n=p[0]
if(1>=o)return A.c(p,1)
m=p[1]
o=m.r
o===$&&A.b("points")
n.saI(q.a(A.j(o,!0,r)))
n.fL(n,m,1)}},
az(a){var s=this.r
s===$&&A.b("points")
if(J.c6(s))return
throw A.d("Cannot call Mobject."+a+" , the mobject doesn't have any points")},
js(a){var s=this,r=a.a
if(r>=s.ar(B.N).a-0.1)if(r<=s.ar(B.j).a+0.1){r=a.b
r=r>=s.ar(B.o).b-0.1&&r<=s.ar(B.x).b+0.1}else r=!1
else r=!1
return r},
sb_(a){this.d=t.a.a(a)},
slW(a){this.e=t.le.a(a)},
saI(a){this.r=t.y.a(a)}}
A.k6.prototype={
$1(a){return a.R(0,this.a)},
$S:3}
A.k5.prototype={
$1(a){return a.B(0,this.a)},
$S:3}
A.k4.prototype={
$1(a){return a.B(0,this.a)},
$S:3}
A.k3.prototype={
$1(a){return a.bm(this.a)},
$S:3}
A.k7.prototype={
$1(a){var s=this.a
return a.pS(s,a.di(s)*this.b)},
$S:3}
A.k_.prototype={
$2(a,b){var s,r,q,p
t.o.a(b)
s=b.a
r=this.a
q=r.b
q===$&&A.b("shape")
p=q.a
if(typeof s!=="number")return s.es()
if(typeof p!=="number")return A.bA(p)
if(s<p){s=b.b
q=q.b
if(typeof s!=="number")return s.es()
if(typeof q!=="number")return A.bA(q)
q=s>=q
s=q}else s=!0
return s?a:r.bL(b)},
$S:4}
A.k0.prototype={
$1(a){return a.bm(this.a.a)},
$S:3}
A.k1.prototype={
$1(a){var s=t.j.a(a).r
s===$&&A.b("points")
return J.M(s)>0},
$S:12}
A.k2.prototype={
$1(a){return t.V.a(a).di(this.a)},
$S:23}
A.d6.prototype={
u(){return A.q7(this)}}
A.R.prototype={
u(){return A.r1(this)},
jk(){var s=this,r=s.ax
if(r==null){r=s.a
r===$&&A.b("color")
r=A.a([r],t.O)}s.kV(r)
r=s.ay
if(r==null){r=s.a
r===$&&A.b("color")
r=A.a([r],t.O)}s.l0(r,s.gan())
s.kS(s.ch,s.x)},
cL(a,b,c){var s,r,q,p,o,n=this
t.x.a(b)
s=t.O
r=A.a([],s)
if(b!=null)B.a.M(r,b)
if(a!=null)r.push(a)
if(c)for(q=n.eC(),p=q.length,o=0;o<q.length;q.length===p||(0,A.f)(q),++o)q[o].hi(r,!1)
if(r.length!==0){if(n.ax==null)n.sc9(r)
q=n.ax
q.toString
q=J.M(q)
p=r.length
if(q<p){q=n.ax
q.toString
n.sc9(A.cZ(q,p,t.G))}else{q=n.ax
q.toString
if(p<J.M(q)){q=n.ax
q.toString
n.sc9(A.cZ(r,J.M(q),t.G))}}s=A.a([],s)
q=n.ax
q.toString
q=A.K(J.M(q),0,1)
p=q.length
o=0
for(;o<q.length;q.length===p||(0,A.f)(q),++o)s.push(B.a.k(r,q[o]))
n.sc9(s)}},
eH(a,b){return this.cL(a,null,b)},
hi(a,b){return this.cL(null,a,b)},
kV(a){return this.cL(null,a,!0)},
hh(a){return this.cL(a,null,!0)},
bx(a,b,c,d,e){var s,r,q,p,o,n=this
t.x.a(c)
s=t.O
r=A.a([],s)
if(c!=null)B.a.M(r,c)
if(b!=null)r.push(b)
if(d)for(q=n.eC(),p=q.length,o=0;o<q.length;q.length===p||(0,A.f)(q),++o)q[o].l2(a,r,!1,e)
if(r.length!==0)if(a){if(n.ch==null)n.scr(r)
q=n.ch
q.toString
q=J.M(q)
p=r.length
if(q<p){q=n.ch
q.toString
n.scr(A.cZ(q,p,t.G))}else{q=n.ch
q.toString
if(p<J.M(q)){q=n.ch
q.toString
n.scr(A.cZ(r,J.M(q),t.G))}}s=A.a([],s)
q=n.ay
q.toString
q=A.K(J.M(q),0,1)
p=q.length
o=0
for(;o<q.length;q.length===p||(0,A.f)(q),++o)s.push(B.a.k(r,q[o]))
n.sbO(s)}else{if(n.ay==null)n.sbO(r)
q=n.ay
q.toString
q=J.M(q)
p=r.length
if(q<p){q=n.ay
q.toString
n.sbO(A.cZ(q,p,t.G))}else{q=n.ay
q.toString
if(p<J.M(q)){q=n.ay
q.toString
n.sbO(A.cZ(r,J.M(q),t.G))}}s=A.a([],s)
q=n.ay
q.toString
q=A.K(J.M(q),0,1)
p=q.length
o=0
for(;o<q.length;q.length===p||(0,A.f)(q),++o)s.push(B.a.k(r,q[o]))
n.sbO(s)}if(e!=null)if(a)n.x=e
else n.san(e)},
eJ(a,b){return this.bx(!1,a,null,b,null)},
l2(a,b,c,d){return this.bx(a,null,b,c,d)},
l_(a,b){return this.bx(!1,null,a,b,null)},
l0(a,b){return this.bx(!1,null,a,!0,b)},
l1(a,b){return this.bx(!1,null,null,a,b)},
hj(a){return this.bx(!1,null,null,!0,a)},
kZ(a,b){return this.bx(!1,a,null,!0,b)},
eG(a,b,c,d){return this.bx(!0,a,t.x.a(b),c,d)},
kR(a,b){return this.eG(null,a,b,null)},
kS(a,b){return this.eG(null,a,!0,b)},
hm(a,b){return this.l4(a.d,a.e,b,a.a,a.b,a.c)},
eK(a){return this.hm(a,!0)},
hl(a,b,c,d,e,f,g,h){var s=t.x
s.a(e)
s.a(g)
s.a(a)
this.cL(d,e,c)
this.bx(!1,f,g,c,h)
this.eG(null,a,c,b)},
l4(a,b,c,d,e,f){return this.hl(a,b,c,null,d,null,e,f)},
l3(a,b,c){return this.hl(null,null,!0,a,null,b,null,c)},
h5(){var s=J.Z(this.bt(),0)
return s},
c1(a,b){this.eH(a,!0)
this.eJ(a,!0)
this.hy(a,!0)},
a9(a){return this.c1(a,!0)},
jv(a,b){var s,r,q="submobjects",p="removeWhere",o=a.bt(),n=a.cK(),m=a.gan(),l=a.bu(!0),k=a.x
this.hm(new A.cm(o,n,m,l,k),!1)
o=this.d
o===$&&A.b(q)
n=a.d
n===$&&A.b(q)
if(o.length===0)return
else if(n.length===0)s=A.a([a],t.r)
else s=n
n=A.w(o).h("B(1)").a(new A.kT())
if(!!o.fixed$length)A.N(A.T(p))
B.a.f5(o,n,!0)
n=A.w(s).h("B(1)").a(new A.kU())
if(!!s.fixed$length)A.N(A.T(p))
B.a.f5(s,n,!0)
for(n=t.j,n=A.tN(o,s,n,n),n=A.hb([n.a,n.b],!1,t.z),n=new A.at(new A.aR(n,A.w(n).h("aR<1,l<R>>")),t.pn),n=n.gH(n);n.n();){r=n.b
if(r==null)r=A.N(A.av("No element"))
o=r.length
if(0>=o)return A.c(r,0)
m=r[0]
if(1>=o)return A.c(r,1)
m.jv(r[1],!0)}},
ju(a){return this.jv(a,!0)},
d1(a,b){var s,r,q,p=this,o=1-a,n=t.O,m=A.a([],n)
for(s=J.F(p.bt());s.n();){r=s.gq()
q=r.d
m.push(new A.P(r.a,r.b,r.c,q*o))}p.hi(m,!0)
m=A.a([],n)
for(s=J.F(p.cK());s.n();){r=s.gq()
q=r.d
m.push(new A.P(r.a,r.b,r.c,q*o))}p.l_(m,!0)
n=A.a([],n)
for(m=J.F(p.bu(!0));m.n();){s=m.gq()
r=s.d
n.push(new A.P(s.a,s.b,s.c,r*o))}p.kR(n,!0)
p.lz(a,!0)},
j8(a){return this.d1(a,!0)},
bt(){var s=this.ax
return s==null?A.a([B.q],t.O):s},
bu(a){var s=a?this.ch:this.ay
return s==null||J.cy(s)?A.a([B.q],t.O):s},
cK(){return this.bu(!1)},
kb(){var s,r,q,p,o,n=this.ar(B.e),m=A.a([],t.b)
for(s=[B.j,B.x,B.l],r=t.n,q=0;q<3;++q){p=this.ar(s[q]).K(0,n)
m.push(A.a([p.a,p.b,p.c],r))}o=B.j.bm(A.aM(null,m).gjT())
return new A.O(n.K(0,o),n.R(0,o),t.iu)},
hg(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=t.y
g.a(a)
g.a(b)
g.a(c)
g.a(d)
s=h.at
r=a.length
q=A.a([],t.l)
for(r=A.K(s*r,0,1),p=r.length,o=0;o<r.length;r.length===p||(0,A.f)(r),++o)q.push(B.e)
h.saI(g.a(q))
n=A.a([a,b,c,d],t.ng)
for(g=A.K(s,0,1),r=g.length,q=t.S,o=0;o<g.length;g.length===r||(0,A.f)(g),++o){m=g[o]
l=B.a.k(n,m)
p=h.r
p===$&&A.b("points")
for(p=A.fj(A.K(J.M(p),m,s),q),k=p.length,j=0;j<p.length;p.length===k||(0,A.f)(p),++j){i=p[j]
J.iG(h.r,i.b,l[B.d.a4(i.a,l.length)])}}},
mJ(a,b,c){var s,r,q,p=this
p.az("addCubicBezierCurveTo")
s=p.r
s===$&&A.b("points")
r=t.l
q=t.y
if(B.d.a4(J.M(s),p.at)===1){s=q.a(A.a([a,b,c],r))
J.am(p.r,s)}else{s=q.a(A.a([J.aL(p.r),a,b,c],r))
J.am(p.r,s)}},
dI(a){var s,r,q,p,o,n,m=[]
for(s=A.iD(this.at,1,0).jh(),r=s.length,q=0;q<s.length;s.length===r||(0,A.f)(s),++q){p=s[q]
o=this.r
o===$&&A.b("points")
m.push(J.aL(o).B(0,1-p).R(0,a.B(0,p)))}s=m.length
if(1>=s)return A.c(m,1)
r=t.V
o=r.a(m[1])
if(2>=s)return A.c(m,2)
n=r.a(m[2])
if(3>=s)return A.c(m,3)
return this.mJ(o,n,r.a(m[3]))},
eI(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
t.y.a(a)
s=A.iD(this.at,1,0).aW(0)
r=t.V
q=A.iM(A.d_(a,r))
p=A.iM(A.n8(a,r))
r=A.a([],t.fp)
for(o=s.length,n=0;n<s.length;s.length===o||(0,A.f)(s),++n){m=s[n]
r.push(p.B(0,1-m).R(0,q.B(0,m)))}o=A.a([],t.ng)
for(l=r.length,k=t.l,n=0;n<r.length;r.length===l||(0,A.f)(r),++n){j=r[n]
i=A.a([],k)
h=j.a
h===$&&A.b("values")
g=h.length
f=0
for(;f<h.length;h.length===g||(0,A.f)(h),++f){e=h[f]
d=J.Y(e)
i.push(new A.e(d.k(e,0),d.k(e,1),d.k(e,2)))}o.push(i)}r=o.length
if(0>=r)return A.c(o,0)
l=o[0]
if(1>=r)return A.c(o,1)
k=o[1]
if(2>=r)return A.c(o,2)
i=o[2]
if(3>=r)return A.c(o,3)
this.hg(l,k,i,o[3])},
fn(a,b){var s=this.as,r=b.a
if(Math.abs(a.a-r)>s+0.00001*Math.abs(r))return!1
r=b.b
if(Math.abs(a.b-r)>s+0.00001*Math.abs(r))return!1
return!0},
iU(a,b){var s
if(!this.fn(a,b))return!1
s=b.c
if(Math.abs(a.c-s)>this.as+0.00001*Math.abs(s))return!1
return!0},
eu(a){var s,r,q,p,o,n,m,l={}
l.a=a
t.y.a(a)
l.a=a
s=A.jR(a,new A.kN(l,B.d.a4(J.M(a),this.at)),t.V)
l.a=A.j(s,!0,s.$ti.h("i.E"))
s=A.a([],t.ez)
for(r=A.K(J.M(l.a),0,4),q=r.length,p=t.cn,o=0;o<r.length;r.length===q||(0,A.f)(r),++o){n=r[o]
m=l.a
if(typeof n!=="number")return n.R()
s.push(new A.dq(J.Z(m,n+0),J.Z(l.a,n+1),J.Z(l.a,n+2),J.Z(l.a,n+3),p))}return s},
hV(a,b){var s,r,q,p,o,n,m,l,k
t.y.a(a)
t.gw.a(b)
s=this.at
r=A.K(a.length,s,s)
q=A.w(r)
q=A.j(new A.ap(r,q.h("B(1)").a(b),q.h("ap<1>")),!0,t.S)
q.push(a.length)
r=A.a([0],t.t)
B.a.M(r,q)
p=A.a([],t.ng)
for(r=new A.at(A.a([r,q],t.fC),t.lb),r=r.gH(r),q=A.w(a),o=q.c,q=q.h("aK<1>");r.n();){n=r.b
if(n==null)n=A.N(A.av("No element"))
if(1>=n.length)return A.c(n,1)
m=n[1]
l=n[0]
if(typeof m!=="number")return m.K()
if(typeof l!=="number")return A.bA(l)
if(m-l>=s){A.a0(l)
A.a0(m)
A.aF(l,m,a.length)
k=new A.aK(a,l,m,q)
k.ck(a,l,m,o)
p.push(k.aA(0))}}return p},
eA(a){t.y.a(a)
return this.hV(a,new A.kQ(this,a))},
ki(a){t.y.a(a)
return this.hV(a,new A.kP(this,a))},
ef(a){var s,r,q,p=this.r
p===$&&A.b("points")
s=this.at
r=A.n0(0,B.d.aZ(J.M(p),s),a)
q=r.a
return A.mW(J.nh(this.r,s*q,s*(q+1)).aA(0)).$1(r.b)},
f0(a){var s=this.r
s===$&&A.b("points")
s=A.jR(s,new A.kJ(this,a),t.V)
return A.j(s,!0,s.$ti.h("i.E"))},
k7(){var s=this,r=s.r
r===$&&A.b("points")
if(J.M(r)===1)return s.r
r=t.b5
r=A.ny(A.j(new A.at(A.a([s.f0(0),s.f0(s.at-1)],t.ng),r),!0,r.h("i.E")),t.V)
return A.j(r,!0,r.$ti.h("i.E"))},
ez(){var s,r,q,p=A.a([],t.l)
for(s=this.eC(),r=s.length,q=0;q<s.length;s.length===r||(0,A.f)(s),++q)B.a.M(p,s[q].k7())
return p},
k9(){var s,r,q,p,o,n,m=this.r
m===$&&A.b("points")
s=4*B.d.aZ(J.M(m),this.at)+1
m=t.l
r=A.a([],m)
for(q=A.iD(s,1,0).aW(0),p=q.length,o=0;o<q.length;q.length===p||(0,A.f)(q),++o)r.push(this.ef(q[o]))
m=A.a([],m)
for(q=A.K(s-1,0,1),p=q.length,o=0;o<q.length;q.length===p||(0,A.f)(q),++o){n=q[o]
if(typeof n!=="number")return n.R()
m.push(B.a.k(r,n+1).K(0,B.a.k(r,n)))}r=t.aQ
return A.ma(A.j(new A.I(m,t.eL.a(new A.kO()),r),!0,r.h("D.E")),t.W)},
iD(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1="points"
t.bX.a(a2)
a0.mZ(a2)
s=a0.r
s===$&&A.b(a1)
s=J.M(s)
r=a2.r
r===$&&A.b(a1)
if(s===J.M(r))return
for(s=[a0,a2],r=t.l,q=t.y,p=0;p<2;++p){o=s[p]
n=o.r
n===$&&A.b(a1)
if(J.cy(n)){n=q.a(A.a([o.ar(B.e)],r))
J.am(o.r,n)}if(B.d.a4(J.M(o.r),o.at)===1)o.dI(J.aL(o.r))}s=t.V
m=a0.eA(A.j(a0.r,!0,s))
l=a2.eA(A.j(a2.r,!0,s))
k=Math.max(m.length,l.length)
j=A.a([],r)
i=A.a([],r)
h=a0.at
g=new A.kM(h)
for(s=A.K(k,0,1),r=s.length,p=0;p<s.length;s.length===r||(0,A.f)(s),++p){f=s[p]
e=g.$2(m,f)
d=g.$2(l,f)
n=J.Y(d)
c=J.Y(e)
b=Math.max(0,B.d.aZ(n.gm(d)-c.gm(e),h))
a=Math.max(0,B.d.aZ(c.gm(e)-n.gm(d),h))
e=a0.fK(b,e)
d=a0.fK(a,d)
B.a.M(j,e)
B.a.M(i,d)}a0.saI(q.a(j))
a2.saI(q.a(i))},
fK(a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6="No element"
t.y.a(a8)
if(a8.length===1){s=A.a([],t.l)
for(r=A.K(this.at*a7,0,1),q=r.length,p=0;p<r.length;r.length===q||(0,A.f)(r),++p)B.a.M(s,a8)
return s}o=this.eu(a8)
n=o.length
m=n+a7
s=t.t
r=A.a([],s)
for(q=A.K(m,0,1),l=q.length,p=0;p<q.length;q.length===l||(0,A.f)(q),++p){k=q[p]
if(typeof k!=="number")return k.B()
r.push(B.h.aZ(k*n,m))}q=A.a([],s)
for(l=A.K(n,0,1),j=l.length,i=t.S,p=0;p<l.length;l.length===j||(0,A.f)(l),++p){k=l[p]
h=A.a([],s)
for(g=r.length,f=J.bo(k),e=0;e<r.length;r.length===g||(0,A.f)(r),++e)h.push(f.V(k,r[e])?1:0)
q.push(A.ma(h,i))}d=A.a([],t.l)
for(s=new A.at(A.a([o,q],t.bo),t.c2),s=s.gH(s),r=t.W,q=t.b,l=t.lx,j=t.z,i=t.cn;s.n();){c=s.b
if(c==null)c=A.N(A.av(a6))
h=c.length
if(0>=h)return A.c(c,0)
b=i.a(c[0])
if(1>=h)return A.c(c,1)
a=A.iD(A.a0(c[1])+1,1,0).aW(0)
for(h=new A.at(A.a([a,A.d_(a,r)],q),l),h=h.gH(h),g=b.a,f=b.b,a0=b.c,a1=b.d;h.n();){a2=h.b
if(a2==null)a2=A.N(A.av(a6))
a3=A.hb([g,f,a0,a1],!1,j)
a4=a2.length
if(0>=a4)return A.c(a2,0)
a5=a2[0]
if(1>=a4)return A.c(a2,1)
B.a.M(d,A.m7(new A.aR(a3,A.w(a3).h("aR<1,e>")),a5,a2[1]))}}return d},
mZ(a){var s,r,q,p,o,n,m,l,k=new A.kK(),j=new A.kL()
for(s=["fillColors","strokeColors","backgroundStrokeColors"],r=t.G,q=0;q<3;++q){p=s[q]
o=k.$2(p,this)
n=k.$2(p,a)
m=J.Y(o)
l=J.Y(n)
if(m.gm(o)>l.gm(n))j.$3(p,a,A.cZ(n,m.gm(o),r))
else if(l.gm(n)>m.gm(o))j.$3(p,this,A.cZ(o,l.gm(n),r))}},
h9(){var s=this.ar(B.e),r=A.o5(s)
r.ju(this)
return r},
fL(a,b,c){var s,r=this,q=t.bX
q.a(a)
q.a(b)
r.sc9(A.n1(a.bt(),b.bt(),c))
r.sbO(A.n1(a.cK(),b.cK(),c))
r.scr(A.n1(a.bu(!0),b.bu(!0),c))
q=t.W
r.san(A.p2(a.gan(),b.gan(),c,q))
r.sn6(A.p2(a.x,b.x,c,q))
s=new A.kS()
if(c===1){q=b.ax
r.sc9(q!=null?s.$1(q):null)
q=b.ay
r.sbO(q!=null?s.$1(q):null)
q=b.ch
r.scr(q!=null?s.$1(q):null)
r.san(b.gan())
r.x=b.x}},
oQ(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e="points"
if(b<=0&&c>=1){s=a.r
s===$&&A.b(e)
f.saI(t.y.a(A.j(s,!0,t.V)))
return}s=a.r
s===$&&A.b(e)
r=t.y
q=a.eu(r.a(A.j(s,!0,t.V)))
p=q.length
o=A.n0(0,p,b)
n=A.n0(0,p,c)
m=o.a
l=o.b
k=n.a
j=n.b
f.saI(r.a(A.a([],t.l)))
if(p===0)return
s=q.length
if(m===k){if(m>>>0!==m||m>=s)return A.c(q,m)
s=J.fm(q[m])
s=r.a(A.m7(new A.aR(s,A.w(s).h("aR<1,e>")),l,j))
r=f.r
r===$&&A.b(e)
J.am(r,s)}else{if(m>>>0!==m||m>=s)return A.c(q,m)
s=J.fm(q[m])
s=r.a(A.m7(new A.aR(s,A.w(s).h("aR<1,e>")),l,1))
i=f.r
i===$&&A.b(e)
J.am(i,s)
for(s=m+1,A.aF(s,k,q.length),s=A.bb(q,s,k,A.w(q).c),i=s.$ti,s=new A.L(s,s.gm(s),i.h("L<D.E>")),h=t.z,i=i.h("D.E");s.n();){g=s.d
if(g==null)g=i.a(g)
g=A.hb([g.a,g.b,g.c,g.d],!1,h)
g=r.a(new A.aR(g,A.w(g).h("aR<1,e>")))
J.am(f.r,g)}if(k>>>0!==k||k>=q.length)return A.c(q,k)
s=J.fm(q[k])
s=r.a(A.m7(new A.aR(s,A.w(s).h("aR<1,e>")),0,j))
J.am(f.r,s)}},
eC(){var s,r,q,p,o=A.a([],t.hJ)
for(s=this.bJ(),r=s.length,q=0;q<s.length;s.length===r||(0,A.f)(s),++q){p=s[q]
if(p instanceof A.R)o.push(p)}return o},
san(a){this.w=A.cs(a)},
sn6(a){this.x=A.cs(a)},
sc9(a){this.ax=t.x.a(a)},
sbO(a){this.ay=t.x.a(a)},
scr(a){this.ch=t.x.a(a)},
gan(){return this.w},
gdO(){return this.y}}
A.a5.prototype={
$1(a){return t.G.a(a).u()},
$S:8}
A.a6.prototype={
$1(a){return t.G.a(a).u()},
$S:8}
A.a7.prototype={
$1(a){return t.G.a(a).u()},
$S:8}
A.kT.prototype={
$1(a){return!(t.j.a(a) instanceof A.R)},
$S:12}
A.kU.prototype={
$1(a){return!(t.j.a(a) instanceof A.R)},
$S:12}
A.kN.prototype={
$2(a,b){t.V.a(b)
return a<J.M(this.a.a)-this.b},
$S:25}
A.kQ.prototype={
$1(a){var s,r,q
A.a0(a)
s=this.b
r=a-1
q=s.length
if(!(r>=0&&r<q))return A.c(s,r)
r=s[r]
if(!(a>=0&&a<q))return A.c(s,a)
return!this.a.iU(r,s[a])},
$S:10}
A.kP.prototype={
$1(a){var s,r,q
A.a0(a)
s=this.b
r=a-1
q=s.length
if(!(r>=0&&r<q))return A.c(s,r)
r=s[r]
if(!(a>=0&&a<q))return A.c(s,a)
return!this.a.fn(r,s[a])},
$S:10}
A.kJ.prototype={
$2(a,b){t.V.a(b)
return B.d.a4(a,this.a.at)===this.b},
$S:25}
A.kO.prototype={
$1(a){return Math.sqrt(t.V.a(a).aY())},
$S:23}
A.kM.prototype={
$2(a,b){var s,r,q,p
t.ls.a(a)
s=a.length
if(b>=s){s=A.a([],t.l)
for(r=A.K(this.a,0,1),q=r.length,p=0;p<r.length;r.length===q||(0,A.f)(r),++p)s.push(B.a.gt(B.a.gt(a)))
return s}if(!(b>=0))return A.c(a,b)
return a[b]},
$S:56}
A.kK.prototype={
$2(a,b){switch(a){case"fillColors":return b.bt()
case"strokeColors":return b.cK()
case"backgroundStrokeColors":return b.bu(!1)
default:throw A.d(u.v+a)}},
$S:57}
A.kL.prototype={
$3(a,b,c){t.ev.a(c)
switch(a){case"fillColors":b.sc9(c)
break
case"strokeColors":b.sbO(c)
break
case"backgroundStrokeColors":b.scr(c)
break
default:throw A.d(u.v+a)}},
$S:58}
A.kS.prototype={
$1(a){var s=t.G
return A.j(J.v(t.ev.a(a),new A.kR(),s),!0,s)},
$S:59}
A.kR.prototype={
$1(a){return t.G.a(a).u()},
$S:8}
A.cm.prototype={}
A.bX.prototype={
hE(a){var s=a==null?A.a([],t.r):a
this.aN(t.a.a(s))},
u(){return A.r0(this)}}
A.eM.prototype={
u(){return A.r2(this)}}
A.dG.prototype={
l5(a){this.d=a}}
A.fG.prototype={
en(a){var s,r,q=this.d
q===$&&A.b("display")
s=q.b
s===$&&A.b("camera")
r=q.dK(a)
q=this.e
q===$&&A.b("ctx")
B.r.sfH(q,r.df())
q=s.c
s=s.d
this.e.fillRect(0-q/2,0-s/2,q,s)},
pi(a){var s,r,q,p,o,n,m,l,k=this,j=a.r
j===$&&A.b("points")
j=t.y.a(A.j(j,!0,t.V))
s=k.d
s===$&&A.b("display")
s=s.b
s===$&&A.b("camera")
r=s.jS(a,j)
if(r.length===0)return
q=a.ki(r)
for(j=q.length,p="",o=0;o<q.length;q.length===j||(0,A.f)(q),++o)p+=k.kj(a,q[o])
n=A.qq(p)
k.iI(n,a,!0)
m=a.bt()
if(J.M(m)>1){j=k.e
j===$&&A.b("ctx")
B.r.sfH(j,k.j_(a,m))}else{l=k.d.dK(J.Z(a.bt(),0))
j=k.e
j===$&&A.b("ctx")
B.r.sfH(j,l.df())}j=k.e
j===$&&A.b("ctx")
j.fill(n)
k.iI(n,a,!1)},
kj(a,b){var s,r,q,p,o,n,m,l,k,j
t.y.a(b)
s=a.eu(b)
r=J.aP(b)
q=r.gap(b)
p="M "+A.k(q.a)+" "+A.k(q.b)
o=a.fn(r.gap(b),r.gt(b))
for(r=s.length,n=0;n<r;++n){m=s[n]
l=m.b
k=m.c
j=m.d
p+=" C "+A.k(l.a)+" "+A.k(l.b)+" "+A.k(k.a)+" "+A.k(k.b)+" "+A.k(j.a)+" "+A.k(j.b)}return o?p+" Z":p},
j_(a,b){var s,r,q,p,o,n,m,l,k,j,i
t.ev.a(b)
s=a.kb()
r=t.y.a(A.a([s.a,s.b],t.l))
q=this.d
q===$&&A.b("display")
q=q.b
q===$&&A.b("camera")
p=q.jS(a,r)
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
o=J.Y(b)
m=1/(o.gm(b)-1)
l=A.lM(m+1,0,m).aW(0)
for(r=A.K(o.gm(b),0,1),n=r.length,k=0;k<r.length;r.length===n||(0,A.f)(r),++k){j=r[k]
i=this.d.dK(o.k(b,j))
q.addColorStop(B.a.k(l,j),i.df())}return q},
iI(a,b,c){var s,r,q,p,o,n=this,m=c?b.x:b.gan()
if(m===0)return
s=b.bu(c)
r=n.d
r===$&&A.b("display")
r=r.b
r===$&&A.b("camera")
r=r.c
q=n.e
q===$&&A.b("ctx")
q.lineWidth=m*0.01*(r/14.222222222222221)
r=J.aP(s)
p=r.ct(s,new A.j1())
if(r.gag(s)||p)return
if(r.gm(s)>1)B.r.shw(n.e,n.j_(b,s))
else{o=n.d.dK(J.aG(b.bu(c)))
B.r.shw(n.e,o.df())}B.r.lm(n.e,a)}}
A.j1.prototype={
$1(a){return t.G.a(a).d===0},
$S:60}
A.hA.prototype={
lK(){this.id=new A.iZ(B.ab)
new A.im().lM(0)
this.shF(t.a.a(A.a([],t.r)))},
cH(){var s=0,r=A.c2(t.z),q=1,p,o=this,n,m,l,k
var $async$cH=A.c4(function(a,b){if(a===1){p=b
s=q}while(true)switch(s){case 0:l=o.w
l===$&&A.b("display")
l.dN()
s=2
return A.bn(null,$async$cH)
case 2:q=4
s=7
return A.bn(o.bV(),$async$cH)
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
case 6:l=o.id
l===$&&A.b("camera")
m=l.r
m===$&&A.b("display")
m=m.a
m===$&&A.b("renderer")
m.en(l.f)
l=o.id
m=o.d
m===$&&A.b("mobjects")
l.fV(m)
s=8
return A.bn(null,$async$cH)
case 8:o.w.pE()
return A.c0(null,r)
case 1:return A.c_(p,r)}})
return A.c1($async$cH,r)},
ce(a){var s,r,q=this.d
q===$&&A.b("mobjects")
s=q.length
r=0
for(;r<q.length;q.length===s||(0,A.f)(q),++r)q[r].h0(a)},
aN(a){var s
t.a.a(a)
this.pn(a)
s=this.d
s===$&&A.b("mobjects")
B.a.e8(s,0,a)},
po(a,b){var s,r,q=this,p=t.a
p.a(b)
s=A.j(b,!0,t.j)
r=q.id
r===$&&A.b("camera")
B.a.M(s,r.fC(b))
r=q.d
r===$&&A.b("mobjects")
q.shF(p.a(q.kg(r,s)))},
pn(a){return this.po(!0,a)},
kg(a,b){var s,r=t.a
r.a(a)
r.a(b)
s=A.a([],t.r)
new A.km(s).$2(a,A.mr(b,A.w(b).c))
return s},
eh(a){var s=0,r=A.c2(t.z),q=this,p,o,n,m
var $async$eh=A.c4(function(b,c){if(b===1)return A.c_(c,r)
while(true)switch(s){case 0:p=0
case 2:if(!(p<a.a)){s=3
break}o=q.w
o===$&&A.b("display")
s=4
return A.bn(o.da(),$async$eh)
case 4:n=c
p+=n
o=a.a
a.ce(n)
a.d8(p/o)
q.ce(n)
o=q.id
o===$&&A.b("camera")
m=o.r
m===$&&A.b("display")
m=m.a
m===$&&A.b("renderer")
m.en(o.f)
o=q.id
m=q.d
m===$&&A.b("mobjects")
o.fV(m)
q.a+=n
s=2
break
case 3:return A.c0(null,r)}})
return A.c1($async$eh,r)},
ee(a,b){var s=0,r=A.c2(t.z),q=this,p,o,n,m
var $async$ee=A.c4(function(c,d){if(c===1)return A.c_(d,r)
while(true)switch(s){case 0:m=q.id
m===$&&A.b("camera")
p=q.d
p===$&&A.b("mobjects")
o=m.fC(p)
b.cX()
n=b.r
if(!B.a.F(o,n)){q.aN(t.a.a(A.a([n],t.r)))
B.a.M(o,n.bJ())}s=2
return A.bn(q.eh(b),$async$ee)
case 2:b.fI()
b.cY(q)
q.ce(0)
return A.c0(null,r)}})
return A.c1($async$ee,r)},
cI(a){var s=0,r=A.c2(t.z),q=this,p,o,n,m
var $async$cI=A.c4(function(b,c){if(b===1)return A.c_(c,r)
while(true)switch(s){case 0:p=0
case 2:if(!(p<a)){s=3
break}o=q.w
o===$&&A.b("display")
s=4
return A.bn(o.da(),$async$cI)
case 4:n=c
p+=n
q.ce(n)
o=q.id
o===$&&A.b("camera")
m=o.r
m===$&&A.b("display")
m=m.a
m===$&&A.b("renderer")
m.en(o.f)
o=q.id
m=q.d
m===$&&A.b("mobjects")
o.fV(m)
q.a+=n
s=2
break
case 3:return A.c0(null,r)}})
return A.c1($async$cI,r)},
pO(){return this.cI(1)},
dQ(){var s=0,r=A.c2(t.z),q=this
var $async$dQ=A.c4(function(a,b){if(a===1)return A.c_(b,r)
while(true)switch(s){case 0:case 2:if(!!0){s=3
break}s=4
return A.bn(q.pO(),$async$dQ)
case 4:s=2
break
case 3:return A.c0(null,r)}})
return A.c1($async$dQ,r)},
shF(a){this.d=t.a.a(a)}}
A.km.prototype={
$2(a,b){var s,r,q,p,o,n
t.a.a(a)
t.ns.a(b)
for(s=a.length,r=this.a,q=0;q<a.length;a.length===s||(0,A.f)(a),++q){p=a[q]
if(b.F(0,p))continue
o=p.bJ()
n=b.ou(0,A.mr(o,A.w(o).c))
if(n.a!==0){o=p.d
o===$&&A.b("submobjects")
this.$2(o,n)}else B.a.p(r,p)}},
$S:77}
A.mb.prototype={
$2(a,b){var s=this.a
return s.a(s.a(a)+s.a(b))},
$S(){return this.a.h("0(0,0)")}}
A.m9.prototype={
$1(a){return A.a0(a)/this.a*this.b},
$S:62}
A.mc.prototype={
$2(a,b){this.a.a(b)
return a!==0},
$S(){return this.a.h("B(h,0)")}}
A.m1.prototype={
$1(a){return t.G.a(a).aA(0)},
$S:27}
A.m2.prototype={
$1(a){return t.G.a(a).aA(0)},
$S:27}
A.m3.prototype={
$1(a){var s
t.bd.a(a)
s=J.Y(a)
return new A.P(s.k(a,0),s.k(a,1),s.k(a,2),s.k(a,3))},
$S:64}
A.lO.prototype={
$1(a){var s,r,q,p,o,n,m,l=A.a([],t.l)
for(s=A.fj(this.a,t.V),r=s.length,q=1-a,p=this.b,o=0;o<s.length;s.length===r||(0,A.f)(s),++o){n=s[o]
m=n.a
if(typeof m!=="number")return A.bA(m)
l.push(J.d0(n.b,Math.pow(q,p-m)*Math.pow(a,m)*A.oR(p,m,!0)))}return B.a.b5(l,new A.lN())},
$S:65}
A.lN.prototype={
$2(a,b){var s=t.V
return s.a(a).R(0,s.a(b))},
$S:66}
A.P.prototype={
u(){var s=this
return new A.P(s.a,s.b,s.c,s.d)},
aA(a){var s=this,r=A.a([s.a,s.b,s.c],t.n)
r.push(s.d)
return r},
df(){var s=this
return"rgba("+B.h.bp(s.a*255)+", "+B.h.bp(s.b*255)+", "+B.h.bp(s.c*255)+", "+A.k(s.d)+")"},
l(a){return this.df()}}
A.lB.prototype={
$1(a){return A.cv(a,16)/255},
$S:67}
A.d3.prototype={
V(a,b){var s,r=this
if(b==null)return!1
if(!(b instanceof A.d3&&r.a===b.a&&r.b===b.b))s=typeof b=="number"&&r.a===b&&r.b===0
else s=!0
return s}}
A.bt.prototype={
l(a){return"EventType."+this.b}}
A.b4.prototype={}
A.jc.prototype={
gc8(){var s=this.a
s===$&&A.b("eventListeners")
return s},
lJ(){var s,r,q=A.bh(t.cY,t.oR)
for(s=t.fO,r=0;r<6;++r)q.v(0,B.bq[r],A.a([],s))
this.slV(t.fY.a(q))},
cm(a,b,c){var s,r,q
A.iA(c,t.e,"IEvent","_dispatchOnListnersList")
c.a(a)
s=A.j(c.h("l<b5<0>>").a(b),!0,c.h("b5<0>"))
r=!1
while(!0){if(!(!r&&s.length!==0))break
q=B.a.gt(s)
B.a.a_(s,q)
q.$ti.c.a(a)
r=q.a.$1(a)}},
dS(a){var s,r=this
switch(a.a){case B.F:t.m6.a(a)
s=r.gc8().k(0,B.F)
s.toString
r.cm(a,s,t.e)
break
case B.B:t.oJ.a(a)
s=r.gc8().k(0,B.B)
s.toString
r.cm(a,s,t.e)
break
case B.u:t.f.a(a)
s=r.gc8().k(0,B.u)
s.toString
r.cm(a,s,t.e)
break
case B.C:t.gn.a(a)
s=r.gc8().k(0,B.C)
s.toString
r.cm(a,s,t.e)
break
case B.R:t.lY.a(a)
s=r.gc8().k(0,B.R)
s.toString
r.cm(a,s,t.e)
break
case B.S:t.am.a(a)
s=r.gc8().k(0,B.S)
s.toString
r.cm(a,s,t.e)
break}},
slV(a){this.a=t.fY.a(a)}}
A.b5.prototype={}
A.hc.prototype={}
A.en.prototype={}
A.cd.prototype={}
A.ce.prototype={}
A.cc.prototype={}
A.k8.prototype={}
A.kw.prototype={
$1(a){return A.iy(a)!=null},
$S:5}
A.lP.prototype={
$2(a,b){return A.a0(a)*A.a0(b)},
$S:14}
A.lQ.prototype={
$2(a,b){return A.a0(a)*A.a0(b)},
$S:14}
A.bs.prototype={
R(a,b){var s,r
if(typeof b=="number"){s=this.b
s===$&&A.b("shape")
r=A.fy(b,s)}else{t.A.a(b)
r=b}return this.cz(0,new A.iS(r))},
B(a,b){var s,r
if(typeof b=="number"){s=this.b
s===$&&A.b("shape")
r=A.fy(b,s)}else{t.A.a(b)
r=b}return this.cz(0,new A.iT(r))},
cz(a,b){var s,r,q
t.iJ.a(b)
s=this.a
s===$&&A.b("values")
s=A.fj(s,t.bd)
r=A.w(s)
q=r.h("I<1,l<t>>")
q=A.j(new A.I(s,r.h("l<t>(1)").a(new A.iR(b)),q),!0,q.h("D.E"))
r=this.b
r===$&&A.b("shape")
return A.aM(r,q)},
bL(a){var s,r
t.o.a(a)
s=a.a
r=this.a
r===$&&A.b("values")
if(s>>>0!==s||s>=r.length)return A.c(r,s)
return J.Z(r[s],a.b)},
bd(a,b){var s,r,q,p,o
t.o.a(a)
s=a.a
r=this.b
r===$&&A.b("shape")
q=r.a
if(typeof s!=="number")return s.a4()
if(typeof q!=="number")return A.bA(q)
p=B.d.a4(s,q)
q=a.b
r=r.b
if(typeof q!=="number")return q.a4()
if(typeof r!=="number")return A.bA(r)
o=B.h.a4(q,r)
r=this.a
r===$&&A.b("values")
if(!(p>=0&&p<r.length))return A.c(r,p)
J.iG(r[p],o,b)},
mv(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.b
e===$&&A.b("shape")
s=e.a
if(typeof s!=="number")return s.K()
e=e.b
if(typeof e!=="number")return e.K()
r=A.a([],t.b)
for(q=A.K(f.b.a,0,1),p=q.length,o=f.a,n=t.n,m=0;m<q.length;q.length===p||(0,A.f)(q),++m){l=q[m]
if(!J.W(l,a)){k=A.a([],n)
for(j=A.K(f.b.a,0,1),i=j.length,h=0;h<j.length;j.length===i||(0,A.f)(j),++h){g=j[h]
if(!J.W(g,b)){o===$&&A.b("values")
k.push(J.Z(B.a.k(o,l),g))}}r.push(k)}}return A.aM(new A.O(s-1,e-1,t.o),r)},
h7(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.b
h===$&&A.b("shape")
if(J.W(h.a,2)){h=i.a
h===$&&A.b("values")
if(0>=h.length)return A.c(h,0)
s=J.Z(h[0],0)
if(0>=h.length)return A.c(h,0)
r=J.Z(h[0],1)
if(1>=h.length)return A.c(h,1)
q=J.Z(h[1],0)
if(1>=h.length)return A.c(h,1)
return s*J.Z(h[1],1)-r*q}h=i.b
p=h.a
if(typeof p!=="number")return p.K()
h=h.b
if(typeof h!=="number")return h.K()
o=new A.O(p-1,h-1,t.o)
h=A.a([],t.n)
for(p=A.K(i.b.a,0,1),n=p.length,m=i.a,l=0;l<p.length;p.length===n||(0,A.f)(p),++l){k=p[l]
if(typeof k!=="number")return k.a4()
j=B.h.a4(k,2)===0?1:-1
m===$&&A.b("values")
if(0>=m.length)return A.c(m,0)
h.push(j*A.fy(J.Z(m[0],k),o).B(0,i.mv(0,k)).h7())}return A.ma(h,t.W)},
kc(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="values"
if(this.h7()===0)throw A.d("This matrix is not inversible")
s=this.b
s===$&&A.b("shape")
r=s.a
q=s.b
p=this.u()
o=A.dI(r)
for(s=A.K(q,0,1),n=s.length,m=r-1,l=q-1,k=p.a,j=o.a,i=t.o,h=0;h<s.length;s.length===n||(0,A.f)(s),++h){g=s[h]
for(f=g,e=-1,d=-1;f!==r;++f){i.a(new A.O(f,g,i))
k===$&&A.b(b0)
if(!(f>=0&&f<k.length))return A.c(k,f)
c=J.Z(k[f],g)
if(c>d){d=c
e=f}}k===$&&A.b(b0)
b=k.length
if(!(e>=0&&e<b))return A.c(k,e)
a=k[e]
if(g>>>0!==g||g>=b)return A.c(k,g)
k[e]=k[g]
B.a.v(k,g,a)
j===$&&A.b(b0)
b=j.length
if(!(e<b))return A.c(j,e)
a0=j[e]
if(g>>>0!==g||g>=b)return A.c(j,g)
j[e]=j[g]
B.a.v(j,g,a0)
b=J.Y(a)
a1=b.k(a,g)
for(a2=g;a2<q;++a2){a3=b.k(a,a2)
if(typeof a3!=="number")return a3.br()
b.v(a,a2,a3/a1)}for(a3=J.Y(a0),a2=l;a2>=0;--a2){a4=a3.k(a0,a2)
if(typeof a4!=="number")return a4.br()
a3.v(a0,a2,a4/a1)}for(a2=g+1,e=m;e>=0;--e)if(e!==g){if(!(e<k.length))return A.c(k,e)
a5=k[e]
if(!(e<j.length))return A.c(j,e)
a6=j[e]
a4=J.Y(a5)
a1=a4.k(a5,g)
for(a7=a2;a7!==q;++a7){a8=a4.k(a5,a7)
a9=b.k(a,a7)
if(typeof a9!=="number")return a9.B()
if(typeof a8!=="number")return a8.K()
a4.v(a5,a7,a8-a9*a1)}for(a4=J.Y(a6),a7=l;a7>0;--a7){a8=a4.k(a6,a7)
a9=a3.k(a0,a7)
if(typeof a9!=="number")return a9.B()
if(typeof a8!=="number")return a8.K()
a4.v(a6,a7,a8-a9*a1);--a7
a9=a4.k(a6,a7)
a8=a3.k(a0,a7)
if(typeof a8!=="number")return a8.B()
if(typeof a9!=="number")return a9.K()
a4.v(a6,a7,a9-a8*a1)}if(a7===0){a8=a4.k(a6,0)
a9=a3.k(a0,0)
if(typeof a9!=="number")return a9.B()
if(typeof a8!=="number")return a8.K()
a4.v(a6,0,a8-a9*a1)}}}return o},
aW(a){var s,r,q=this.a
q===$&&A.b("values")
s=A.w(q)
r=s.h("I<1,t>")
return A.j(new A.I(q,s.h("t(1)").a(new A.iP(a)),r),!0,r.h("D.E"))},
gjT(){return this.cz(0,new A.iU(this))},
bm(a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="values",a5=this.b
a5===$&&A.b("shape")
s=a5.a
r=a5.b
a5=a6.b
a5===$&&A.b("shape")
q=a5.b
p=A.fy(0,new A.O(s,q,t.o))
for(a5=A.K(s,0,1),o=a5.length,n=p.a,m=this.a,l=a6.a,k=0;k<a5.length;a5.length===o||(0,A.f)(a5),++k){j=a5[k]
for(i=A.K(q,0,1),h=i.length,g=0;g<i.length;i.length===h||(0,A.f)(i),++g){f=i[g]
for(e=A.K(r,0,1),d=e.length,c=0;c<e.length;e.length===d||(0,A.f)(e),++c){b=e[c]
n===$&&A.b(a4)
a=B.a.k(n,j)
a0=J.Y(a)
a1=a0.k(a,f)
m===$&&A.b(a4)
a2=J.Z(B.a.k(m,j),b)
l===$&&A.b(a4)
a3=J.Z(B.a.k(l,b),f)
if(typeof a2!=="number")return a2.B()
if(typeof a3!=="number")return A.bA(a3)
if(typeof a1!=="number")return a1.R()
a0.v(a,f,a1+a2*a3)}}}return p},
u(){return this.dL(new A.iO())},
dL(a){return this.cz(0,new A.iN(t.f3.a(a)))},
jh(){var s,r,q,p=A.a([],t.n),o=this.a
o===$&&A.b("values")
s=o.length
r=0
for(;r<o.length;o.length===s||(0,A.f)(o),++r)for(q=J.F(o[r]);q.n();)p.push(q.gq())
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
for(;o<q.length;q.length===p||(0,A.f)(q),++o)for(n=J.F(q[o]);n.n();)r.push(B.h.h_(n.gq(),6).length)
m=B.a.e5(r,6,B.a6,t.S)
for(r=q.length,p=m+4,n=t.s,l="",o=0;o<q.length;q.length===r||(0,A.f)(q),++o){l+="      "
for(k=J.F(q[o]);k.n();){j=k.gq()
i=j<0?"-":" "
j=Math.abs(j)
h=B.h.h_(j,6)
g=A.a([],n)
for(h=A.K(p-h.length,0,1),f=h.length,e=0;e<h.length;h.length===f||(0,A.f)(h),++e)g.push(" ")
d=B.a.aU(g)
l=l+i+B.h.h_(j,6)+d}l+="\n"}return c+"x"+s+" matrix\n"+l},
pm(a,b){var s,r,q,p,o,n,m,l,k=this.jh(),j=A.fy(0,new A.O(a,b,t.o))
for(s=A.fj(k,t.W),r=s.length,q=j.a,p=0;p<s.length;s.length===r||(0,A.f)(s),++p){o=s[p]
n=o.a
m=B.d.a4(n,a)
l=B.d.aZ(n,a)
q===$&&A.b("values")
if(!(m<q.length))return A.c(q,m)
J.iG(q[m],l,o.b)}return j},
slP(a){this.b=t.o.a(a)}}
A.iS.prototype={
$2(a,b){return a+this.a.bL(t.o.a(b))},
$S:4}
A.iT.prototype={
$2(a,b){return a*this.a.bL(t.o.a(b))},
$S:4}
A.iR.prototype={
$1(a){var s,r,q
t.kk.a(a)
s=A.fj(a.b,t.W)
r=A.w(s)
q=r.h("I<1,t>")
return A.j(new A.I(s,r.h("t(1)").a(new A.iQ(this.a,a)),q),!0,q.h("D.E"))},
$S:69}
A.iQ.prototype={
$1(a){t.d7.a(a)
return this.a.$2(a.b,new A.O(this.b.a,a.a,t.o))},
$S:70}
A.iP.prototype={
$1(a){return J.Z(t.bd.a(a),this.a)},
$S:71}
A.iU.prototype={
$2(a,b){var s=t.o
s.a(b)
return this.a.bL(new A.O(b.b,b.a,s))},
$S:4}
A.iO.prototype={
$1(a){return a},
$S:9}
A.iN.prototype={
$2(a,b){t.o.a(b)
return this.a.$1(a)},
$S:4}
A.m8.prototype={
$2(a,b){var s=t.A
return s.a(a).bm(s.a(b))},
$S:73}
A.e.prototype={
V(a,b){if(b==null)return!1
return b instanceof A.e&&this.a===b.a&&this.b===b.b&&this.c===b.c},
R(a,b){var s=this
if(typeof b=="number")return new A.e(s.a+b,s.b+b,s.c+b)
else if(b instanceof A.e)return new A.e(s.a+b.a,s.b+b.b,s.c+b.c)
else throw A.d("Vector3 only support addition by num or Vector3")},
K(a,b){return new A.e(this.a-b.a,this.b-b.b,this.c-b.c)},
B(a,b){var s=this
if(typeof b=="number")return new A.e(s.a*b,s.b*b,s.c*b)
else if(b instanceof A.e)return new A.e(s.a*b.a,s.b*b.b,s.c*b.c)
else throw A.d("Vector3 only support multiplication by num or Vector3")},
br(a,b){return new A.e(this.a/b,this.b/b,this.c/b)},
aY(){var s=this.a,r=this.b,q=this.c
return s*s+r*r+q*q},
di(a){switch(a){case 0:return this.a
case 1:return this.b
case 2:return this.c
default:throw A.d("No component at index "+a+" on a vector3")}},
pB(){var s=t.n
s=A.aM(null,A.a([A.a([this.a],s),A.a([this.b],s),A.a([this.c],s)],t.b))
return s},
h1(a,b,c){var s=a==null?this.a:a,r=b==null?this.b:b
return new A.e(s,r,c==null?this.c:c)},
k0(a){return this.h1(null,null,a)},
pT(a){return this.h1(a,null,null)},
pU(a){return this.h1(null,a,null)},
pS(a,b){if(a===0)return this.pT(b)
else if(a===1)return this.pU(b)
else if(a===2)return this.k0(b)
else throw A.d("Cannot index a vector3 with index="+a)},
bm(a){var s=A.dI(3).cz(0,new A.kW(a)).bm(this.pB()),r=t.o
return new A.e(s.bL(new A.O(0,0,r)),s.bL(new A.O(1,0,r)),s.bL(new A.O(2,0,r)))},
j3(a){return this.a*a.a+this.b*a.b+this.c*a.c},
nF(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.e(s*r-q*p,q*o-n*r,n*p-s*o)},
dL(a){t.f3.a(a)
return new A.e(a.$1(this.a),a.$1(this.b),a.$1(this.c))},
hn(a){return this.dL(new A.kX())},
mF(a){return this.dL(new A.kV())},
cU(){var s=this.a
if(s===0&&this.b===0)return 0
return Math.atan2(this.b,s)},
l(a){return"vec3("+A.k(this.a)+", "+A.k(this.b)+", "+A.k(this.c)+")"}}
A.kW.prototype={
$2(a,b){var s,r,q,p
t.o.a(b)
s=b.a
r=this.a
q=r.b
q===$&&A.b("shape")
p=q.a
if(typeof s!=="number")return s.es()
if(typeof p!=="number")return A.bA(p)
if(s<p){s=b.b
q=q.b
if(typeof s!=="number")return s.es()
if(typeof q!=="number")return A.bA(q)
q=s>=q
s=q}else s=!0
return s?a:r.bL(b)},
$S:4}
A.kX.prototype={
$1(a){return J.ng(a)},
$S:9}
A.kV.prototype={
$1(a){return Math.abs(a)},
$S:9}
A.j4.prototype={
mG(a,b){var s,r,q=t.D
A.oM("absolute",A.a([b,null,null,null,null,null,null,null,null,null,null,null,null,null,null],q))
s=this.a
s=s.aV(b)>0&&!s.bZ(b)
if(s)return b
s=A.oU()
r=A.a([s,b,null,null,null,null,null,null,null,null,null,null,null,null,null,null],q)
A.oM("join",r)
return this.ox(new A.al(r,t.na))},
ox(a){var s,r,q,p,o,n,m,l,k,j
t.bq.a(a)
for(s=a.$ti,r=s.h("B(i.E)").a(new A.j5()),q=a.gH(a),s=new A.cU(q,r,s.h("cU<i.E>")),r=this.a,p=!1,o=!1,n="";s.n();){m=q.gq()
if(r.bZ(m)&&o){l=A.ho(m,r)
k=n.charCodeAt(0)==0?n:n
n=B.b.A(k,0,r.cG(k,!0))
l.b=n
if(r.d9(n))B.a.v(l.e,0,r.gci())
n=""+l.l(0)}else if(r.aV(m)>0){o=!r.bZ(m)
n=""+m}else{j=m.length
if(j!==0){if(0>=j)return A.c(m,0)
j=r.fo(m[0])}else j=!1
if(!j)if(p)n+=r.gci()
n+=m}p=r.d9(m)}return n.charCodeAt(0)==0?n:n},
cj(a,b){var s=A.ho(b,this.a),r=s.d,q=A.w(r),p=q.h("ap<1>")
s.sjA(A.j(new A.ap(r,q.h("B(1)").a(new A.j6()),p),!0,p.h("i.E")))
r=s.b
if(r!=null)B.a.bF(s.d,0,r)
return s.d},
fP(a){var s
if(!this.mj(a))return a
s=A.ho(a,this.a)
s.fO()
return s.l(0)},
mj(a){var s,r,q,p,o,n,m,l,k=this.a,j=k.aV(a)
if(j!==0){if(k===$.iF())for(s=0;s<j;++s)if(B.b.E(a,s)===47)return!0
r=j
q=47}else{r=0
q=null}for(p=new A.a9(a).a,o=p.length,s=r,n=null;s<o;++s,n=q,q=m){m=B.b.I(p,s)
if(k.bG(m)){if(k===$.iF()&&m===47)return!0
if(q!=null&&k.bG(q))return!0
if(q===46)l=n==null||n===46||k.bG(n)
else l=!1
if(l)return!0}}if(q==null)return!0
if(k.bG(q))return!0
if(q===46)k=n==null||k.bG(n)||n===46
else k=!1
if(k)return!0
return!1},
pf(a){var s,r,q,p,o,n,m=this,l='Unable to find a path to "',k=m.a,j=k.aV(a)
if(j<=0)return m.fP(a)
s=A.oU()
if(k.aV(s)<=0&&k.aV(a)>0)return m.fP(a)
if(k.aV(a)<=0||k.bZ(a))a=m.mG(0,a)
if(k.aV(a)<=0&&k.aV(s)>0)throw A.d(A.nI(l+a+'" from "'+s+'".'))
r=A.ho(s,k)
r.fO()
q=A.ho(a,k)
q.fO()
j=r.d
p=j.length
if(p!==0){if(0>=p)return A.c(j,0)
j=J.W(j[0],".")}else j=!1
if(j)return q.l(0)
j=r.b
p=q.b
if(j!=p)j=j==null||p==null||!k.fT(j,p)
else j=!1
if(j)return q.l(0)
while(!0){j=r.d
p=j.length
if(p!==0){o=q.d
n=o.length
if(n!==0){if(0>=p)return A.c(j,0)
j=j[0]
if(0>=n)return A.c(o,0)
o=k.fT(j,o[0])
j=o}else j=!1}else j=!1
if(!j)break
B.a.em(r.d,0)
B.a.em(r.e,1)
B.a.em(q.d,0)
B.a.em(q.e,1)}j=r.d
p=j.length
if(p!==0){if(0>=p)return A.c(j,0)
j=J.W(j[0],"..")}else j=!1
if(j)throw A.d(A.nI(l+a+'" from "'+s+'".'))
j=t.N
B.a.e8(q.d,0,A.bH(r.d.length,"..",!1,j))
B.a.v(q.e,0,"")
B.a.e8(q.e,1,A.bH(r.d.length,k.gci(),!1,j))
k=q.d
j=k.length
if(j===0)return"."
if(j>1&&J.W(B.a.gt(k),".")){B.a.dd(q.d)
k=q.e
if(0>=k.length)return A.c(k,-1)
k.pop()
if(0>=k.length)return A.c(k,-1)
k.pop()
B.a.p(k,"")}q.b=""
q.jL()
return q.l(0)},
jE(a){var s,r,q=this,p=A.oG(a)
if(p.gaR()==="file"&&q.a===$.fl())return p.l(0)
else if(p.gaR()!=="file"&&p.gaR()!==""&&q.a!==$.fl())return p.l(0)
s=q.fP(q.a.fR(A.oG(p)))
r=q.pf(s)
return q.cj(0,r).length>q.cj(0,s).length?s:r}}
A.j5.prototype={
$1(a){return A.aw(a)!==""},
$S:7}
A.j6.prototype={
$1(a){return A.aw(a).length!==0},
$S:7}
A.lK.prototype={
$1(a){A.iy(a)
return a==null?"null":'"'+a+'"'},
$S:74}
A.cG.prototype={
kh(a){var s,r=this.aV(a)
if(r>0)return B.b.A(a,0,r)
if(this.bZ(a)){if(0>=a.length)return A.c(a,0)
s=a[0]}else s=null
return s},
fT(a,b){return a===b}}
A.kc.prototype={
jL(){var s,r,q=this
while(!0){s=q.d
if(!(s.length!==0&&J.W(B.a.gt(s),"")))break
B.a.dd(q.d)
s=q.e
if(0>=s.length)return A.c(s,-1)
s.pop()}s=q.e
r=s.length
if(r!==0)B.a.v(s,r-1,"")},
fO(){var s,r,q,p,o,n,m=this,l=A.a([],t.s)
for(s=m.d,r=s.length,q=0,p=0;p<s.length;s.length===r||(0,A.f)(s),++p){o=s[p]
n=J.bo(o)
if(!(n.V(o,".")||n.V(o,"")))if(n.V(o,"..")){n=l.length
if(n!==0){if(0>=n)return A.c(l,-1)
l.pop()}else ++q}else B.a.p(l,o)}if(m.b==null)B.a.e8(l,0,A.bH(q,"..",!1,t.N))
if(l.length===0&&m.b==null)B.a.p(l,".")
m.sjA(l)
s=m.a
m.skQ(A.bH(l.length+1,s.gci(),!0,t.N))
r=m.b
if(r==null||l.length===0||!s.d9(r))B.a.v(m.e,0,"")
r=m.b
if(r!=null&&s===$.iF()){r.toString
m.b=A.bp(r,"/","\\")}m.jL()},
l(a){var s,r,q,p=this,o=p.b
o=o!=null?""+o:""
for(s=0;s<p.d.length;++s,o=q){r=p.e
if(!(s<r.length))return A.c(r,s)
r=A.k(r[s])
q=p.d
if(!(s<q.length))return A.c(q,s)
q=o+r+A.k(q[s])}o+=A.k(B.a.gt(p.e))
return o.charCodeAt(0)==0?o:o},
sjA(a){this.d=t.I.a(a)},
skQ(a){this.e=t.I.a(a)}}
A.hq.prototype={
l(a){return"PathException: "+this.a},
$ibN:1}
A.kx.prototype={
l(a){return this.gah(this)}}
A.ht.prototype={
fo(a){return B.b.F(a,"/")},
bG(a){return a===47},
d9(a){var s=a.length
return s!==0&&B.b.I(a,s-1)!==47},
cG(a,b){if(a.length!==0&&B.b.E(a,0)===47)return 1
return 0},
aV(a){return this.cG(a,!1)},
bZ(a){return!1},
fR(a){var s
if(a.gaR()===""||a.gaR()==="file"){s=a.gaQ(a)
return A.mP(s,0,s.length,B.y,!1)}throw A.d(A.a8("Uri "+a.l(0)+" must have scheme 'file:'.",null))},
gah(){return"posix"},
gci(){return"/"}}
A.hV.prototype={
fo(a){return B.b.F(a,"/")},
bG(a){return a===47},
d9(a){var s=a.length
if(s===0)return!1
if(B.b.I(a,s-1)!==47)return!0
return B.b.bh(a,"://")&&this.aV(a)===s},
cG(a,b){var s,r,q,p,o=a.length
if(o===0)return 0
if(B.b.E(a,0)===47)return 1
for(s=0;s<o;++s){r=B.b.E(a,s)
if(r===47)return 0
if(r===58){if(s===0)return 0
q=B.b.aP(a,"/",B.b.aa(a,"//",s+1)?s+3:s)
if(q<=0)return o
if(!b||o<q+3)return q
if(!B.b.Z(a,"file://"))return q
if(!A.p4(a,q+1))return q
p=q+3
return o===p?p:q+4}}return 0},
aV(a){return this.cG(a,!1)},
bZ(a){return a.length!==0&&B.b.E(a,0)===47},
fR(a){return a.l(0)},
gah(){return"url"},
gci(){return"/"}}
A.i0.prototype={
fo(a){return B.b.F(a,"/")},
bG(a){return a===47||a===92},
d9(a){var s=a.length
if(s===0)return!1
s=B.b.I(a,s-1)
return!(s===47||s===92)},
cG(a,b){var s,r,q=a.length
if(q===0)return 0
s=B.b.E(a,0)
if(s===47)return 1
if(s===92){if(q<2||B.b.E(a,1)!==92)return 1
r=B.b.aP(a,"\\",2)
if(r>0){r=B.b.aP(a,"\\",r+1)
if(r>0)return r}return q}if(q<3)return 0
if(!A.p3(s))return 0
if(B.b.E(a,1)!==58)return 0
q=B.b.E(a,2)
if(!(q===47||q===92))return 0
return 3},
aV(a){return this.cG(a,!1)},
bZ(a){return this.aV(a)===1},
fR(a){var s,r
if(a.gaR()!==""&&a.gaR()!=="file")throw A.d(A.a8("Uri "+a.l(0)+" must have scheme 'file:'.",null))
s=a.gaQ(a)
if(a.gbk(a)===""){if(s.length>=3&&B.b.Z(s,"/")&&A.p4(s,1))s=B.b.jM(s,"/","")}else s="\\\\"+a.gbk(a)+s
r=A.bp(s,"/","\\")
return A.mP(r,0,r.length,B.y,!1)},
nr(a,b){var s
if(a===b)return!0
if(a===47)return b===92
if(a===92)return b===47
if((a^b)!==32)return!1
s=a|32
return s>=97&&s<=122},
fT(a,b){var s,r
if(a===b)return!0
s=a.length
if(s!==b.length)return!1
for(r=0;r<s;++r)if(!this.nr(B.b.E(a,r),B.b.E(b,r)))return!1
return!0},
gah(){return"windows"},
gci(){return"\\"}}
A.hE.prototype={
gm(a){return this.c.length},
goz(){return this.b.length},
hD(a,b){var s,r,q,p,o,n,m
for(s=this.c,r=s.length,q=this.b,p=0;p<r;++p){o=s[p]
if(o===13){n=p+1
if(n<r){if(!(n<r))return A.c(s,n)
m=s[n]!==10}else m=!0
if(m)o=10}if(o===10)B.a.p(q,p+1)}},
eN(a,b,c){return A.mD(this,b,c)},
cJ(a){var s,r=this
if(a<0)throw A.d(A.aE("Offset may not be negative, was "+a+"."))
else if(a>r.c.length)throw A.d(A.aE("Offset "+a+u.D+r.gm(r)+"."))
s=r.b
if(a<B.a.gap(s))return-1
if(a>=B.a.gt(s))return s.length-1
if(r.mg(a)){s=r.d
s.toString
return s}return r.d=r.m5(a)-1},
mg(a){var s,r,q,p=this.d
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
m5(a){var s,r,q=this.b,p=q.length,o=p-1
for(s=0;s<o;){r=s+B.d.aT(o-s,2)
if(!(r>=0&&r<p))return A.c(q,r)
if(q[r]>a)o=r
else s=r+1}return o},
aW(a){var s,r,q,p=this
if(a<0)throw A.d(A.aE("Offset may not be negative, was "+a+"."))
else if(a>p.c.length)throw A.d(A.aE("Offset "+a+" must be not be greater than the number of characters in the file, "+p.gm(p)+"."))
s=p.cJ(a)
r=p.b
if(!(s>=0&&s<r.length))return A.c(r,s)
q=r[s]
if(q>a)throw A.d(A.aE("Line "+s+" comes after offset "+a+"."))
return a-q},
dl(a){var s,r,q,p
if(a<0)throw A.d(A.aE("Line may not be negative, was "+a+"."))
else{s=this.b
r=s.length
if(a>=r)throw A.d(A.aE("Line "+a+" must be less than the number of lines in the file, "+this.goz()+"."))}q=s[a]
if(q<=this.c.length){p=a+1
s=p<r&&q>=s[p]}else s=!0
if(s)throw A.d(A.aE("Line "+a+" doesn't have 0 columns."))
return q}}
A.b0.prototype={
ga3(){return this.a.a},
gae(){return this.a.cJ(this.b)},
gal(){return this.a.aW(this.b)},
bf(a,b){var s,r=this.b
if(r<0)throw A.d(A.aE("Offset may not be negative, was "+r+"."))
else{s=this.a
if(r>s.c.length)throw A.d(A.aE("Offset "+r+u.D+s.gm(s)+"."))}},
gaw(a){return this.b}}
A.aq.prototype={
ga3(){return this.a.a},
gm(a){return this.c-this.b},
gS(a){return A.c8(this.a,this.b)},
gU(){return A.c8(this.a,this.c)},
gX(a){return A.ad(B.w.b7(this.a.c,this.b,this.c),0,null)},
gaX(){var s=this,r=s.a,q=s.c,p=r.cJ(q)
if(r.aW(q)===0&&p!==0){if(q-s.b===0)return p===r.b.length-1?"":A.ad(B.w.b7(r.c,r.dl(p),r.dl(p+1)),0,null)}else q=p===r.b.length-1?r.c.length:r.dl(p+1)
return A.ad(B.w.b7(r.c,r.dl(r.cJ(s.b)),q),0,null)},
aH(a,b,c){var s,r=this.c,q=this.b
if(r<q)throw A.d(A.a8("End "+r+" must come after start "+q+".",null))
else{s=this.a
if(r>s.c.length)throw A.d(A.aE("End "+r+u.D+s.gm(s)+"."))
else if(q<0)throw A.d(A.aE("Start may not be negative, was "+q+"."))}},
aB(a,b){var s
t.hs.a(b)
if(!(b instanceof A.aq))return this.lE(0,b)
s=B.d.aB(this.b,b.b)
return s===0?B.d.aB(this.c,b.c):s},
V(a,b){var s=this
if(b==null)return!1
if(!t.lS.b(b))return s.lD(0,b)
return s.b===b.b&&s.c===b.c&&J.W(s.a.a,b.a.a)},
gW(a){return A.cO(this.b,this.c,this.a.a,B.m)},
o0(a,b){var s,r=this,q=r.a
if(!J.W(q.a,b.a.a))throw A.d(A.a8('Source URLs "'+A.k(r.ga3())+'" and  "'+A.k(b.ga3())+"\" don't match.",null))
s=Math.min(r.b,b.b)
return A.mD(q,s,Math.max(r.c,b.c))},
$imk:1,
$ibJ:1}
A.jf.prototype={
ol(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=a.a
a.iu(B.a.gap(a1).c)
s=a.e
r=A.bH(s,a0,!1,t.dd)
for(q=a.r,s=s!==0,p=a.b,o=0;o<a1.length;++o){n=a1[o]
if(o>0){m=a1[o-1]
l=m.c
k=n.c
if(!J.W(l,k)){a.dE("\u2575")
q.a+="\n"
a.iu(k)}else if(m.b+1!==n.b){a.mE("...")
q.a+="\n"}}for(l=n.d,k=A.w(l).h("X<1>"),j=new A.X(l,k),j=new A.L(j,j.gm(j),k.h("L<D.E>")),k=k.h("D.E"),i=n.b,h=n.a;j.n();){g=j.d
if(g==null)g=k.a(g)
f=g.a
if(f.gS(f).gae()!==f.gU().gae()&&f.gS(f).gae()===i&&a.mh(B.b.A(h,0,f.gS(f).gal()))){e=B.a.aj(r,a0)
if(e<0)A.N(A.a8(A.k(r)+" contains no null elements.",a0))
B.a.v(r,e,g)}}a.mD(i)
q.a+=" "
a.mC(n,r)
if(s)q.a+=" "
d=B.a.jj(l,new A.jA())
if(d===-1)c=a0
else{if(!(d>=0&&d<l.length))return A.c(l,d)
c=l[d]}k=c!=null
if(k){j=c.a
g=j.gS(j).gae()===i?j.gS(j).gal():0
a.mA(h,g,j.gU().gae()===i?j.gU().gal():h.length,p)}else a.dG(h)
q.a+="\n"
if(k)a.mB(n,c,r)
for(k=l.length,b=0;b<k;++b){l[b].toString
continue}}a.dE("\u2575")
a1=q.a
return a1.charCodeAt(0)==0?a1:a1},
iu(a){var s=this
if(!s.f||!t.jJ.b(a))s.dE("\u2577")
else{s.dE("\u250c")
s.b0(new A.jn(s),"\x1b[34m",t.H)
s.r.a+=" "+$.nc().jE(a)}s.r.a+="\n"},
dD(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d={}
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
if(s&&j===c){e.b0(new A.ju(e,h,a),r,p)
l=!0}else if(l)e.b0(new A.jv(e,j),r,p)
else if(i)if(d.a)e.b0(new A.jw(e),d.b,m)
else n.a+=" "
else e.b0(new A.jx(d,e,c,h,a,j,f),o,p)}},
mC(a,b){return this.dD(a,b,null)},
mA(a,b,c,d){var s=this
s.dG(B.b.A(a,0,b))
s.b0(new A.jo(s,a,b,c),d,t.H)
s.dG(B.b.A(a,c,a.length))},
mB(a,b,c){var s,r,q,p,o=this
t.eU.a(c)
s=o.b
r=b.a
if(r.gS(r).gae()===r.gU().gae()){o.f7()
r=o.r
r.a+=" "
o.dD(a,c,b)
if(c.length!==0)r.a+=" "
o.iv(b,c,o.b0(new A.jp(o,a,b),s,t.S))}else{q=a.b
if(r.gS(r).gae()===q){if(B.a.F(c,b))return
A.tS(c,b,t.C)
o.f7()
r=o.r
r.a+=" "
o.dD(a,c,b)
o.b0(new A.jq(o,a,b),s,t.H)
r.a+="\n"}else if(r.gU().gae()===q){p=r.gU().gal()===a.a.length
if(p&&!0){A.pf(c,b,t.C)
return}o.f7()
o.r.a+=" "
o.dD(a,c,b)
o.iv(b,c,o.b0(new A.jr(o,p,a,b),s,t.S))
A.pf(c,b,t.C)}}},
it(a,b,c){var s=c?0:1,r=this.r
s=r.a+=B.b.B("\u2500",1+b+this.eX(B.b.A(a.a,0,b+s))*3)
r.a=s+"^"},
mz(a,b){return this.it(a,b,!0)},
iv(a,b,c){t.eU.a(b)
this.r.a+="\n"
return},
dG(a){var s,r,q,p
for(s=new A.a9(a),r=t.E,s=new A.L(s,s.gm(s),r.h("L<u.E>")),q=this.r,r=r.h("u.E");s.n();){p=s.d
if(p==null)p=r.a(p)
if(p===9)q.a+=B.b.B(" ",4)
else q.a+=A.b8(p)}},
dF(a,b,c){var s={}
s.a=c
if(b!=null)s.a=B.d.l(b+1)
this.b0(new A.jy(s,this,a),"\x1b[34m",t.P)},
dE(a){return this.dF(a,null,null)},
mE(a){return this.dF(null,null,a)},
mD(a){return this.dF(null,a,null)},
f7(){return this.dF(null,null,null)},
eX(a){var s,r,q,p
for(s=new A.a9(a),r=t.E,s=new A.L(s,s.gm(s),r.h("L<u.E>")),r=r.h("u.E"),q=0;s.n();){p=s.d
if((p==null?r.a(p):p)===9)++q}return q},
mh(a){var s,r,q
for(s=new A.a9(a),r=t.E,s=new A.L(s,s.gm(s),r.h("L<u.E>")),r=r.h("u.E");s.n();){q=s.d
if(q==null)q=r.a(q)
if(q!==32&&q!==9)return!1}return!0},
b0(a,b,c){var s,r
c.h("0()").a(a)
s=this.b!=null
if(s&&b!=null)this.r.a+=b
r=a.$0()
if(s&&b!=null)this.r.a+="\x1b[0m"
return r}}
A.jz.prototype={
$0(){return this.a},
$S:75}
A.jh.prototype={
$1(a){var s=t.nR.a(a).d,r=A.w(s)
r=new A.ap(s,r.h("B(1)").a(new A.jg()),r.h("ap<1>"))
return r.gm(r)},
$S:76}
A.jg.prototype={
$1(a){var s=t.C.a(a).a
return s.gS(s).gae()!==s.gU().gae()},
$S:11}
A.ji.prototype={
$1(a){return t.nR.a(a).c},
$S:78}
A.jk.prototype={
$1(a){var s=t.C.a(a).a.ga3()
return s==null?new A.H():s},
$S:79}
A.jl.prototype={
$2(a,b){var s=t.C
return s.a(a).a.aB(0,s.a(b).a)},
$S:80}
A.jm.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
t.lO.a(a)
s=a.a
r=a.b
q=A.a([],t.dg)
for(p=J.aP(r),o=p.gH(r),n=t.pg;o.n();){m=o.gq().a
l=m.gaX()
k=A.lU(l,m.gX(m),m.gS(m).gal())
k.toString
k=B.b.c5("\n",B.b.A(l,0,k))
j=k.gm(k)
i=m.gS(m).gae()-j
for(m=l.split("\n"),k=m.length,h=0;h<k;++h){g=m[h]
if(q.length===0||i>B.a.gt(q).b)B.a.p(q,new A.bc(g,i,s,A.a([],n)));++i}}f=A.a([],n)
for(o=q.length,n=t.aP,e=0,h=0;h<q.length;q.length===o||(0,A.f)(q),++h){g=q[h]
m=n.a(new A.jj(g))
if(!!f.fixed$length)A.N(A.T("removeWhere"))
B.a.f5(f,m,!0)
d=f.length
for(m=p.b6(r,e),m=m.gH(m);m.n();){k=m.gq()
c=k.a
if(c.gS(c).gae()>g.b)break
B.a.p(f,k)}e+=f.length-d
B.a.M(g.d,f)}return q},
$S:81}
A.jj.prototype={
$1(a){return t.C.a(a).a.gU().gae()<this.a.b},
$S:11}
A.jA.prototype={
$1(a){t.C.a(a)
return!0},
$S:11}
A.jn.prototype={
$0(){this.a.r.a+=B.b.B("\u2500",2)+">"
return null},
$S:1}
A.ju.prototype={
$0(){var s=this.b===this.c.b?"\u250c":"\u2514"
this.a.r.a+=s},
$S:2}
A.jv.prototype={
$0(){var s=this.b==null?"\u2500":"\u253c"
this.a.r.a+=s},
$S:2}
A.jw.prototype={
$0(){this.a.r.a+="\u2500"
return null},
$S:1}
A.jx.prototype={
$0(){var s,r,q=this,p=q.a,o=p.a?"\u253c":"\u2502"
if(q.c!=null)q.b.r.a+=o
else{s=q.e
r=s.b
if(q.d===r){s=q.b
s.b0(new A.js(p,s),p.b,t.P)
p.a=!0
if(p.b==null)p.b=s.b}else{s=q.r===r&&q.f.a.gU().gal()===s.a.length
r=q.b
if(s)r.r.a+="\u2514"
else r.b0(new A.jt(r,o),p.b,t.P)}}},
$S:2}
A.js.prototype={
$0(){var s=this.a.a?"\u252c":"\u250c"
this.b.r.a+=s},
$S:2}
A.jt.prototype={
$0(){this.a.r.a+=this.b},
$S:2}
A.jo.prototype={
$0(){var s=this
return s.a.dG(B.b.A(s.b,s.c,s.d))},
$S:1}
A.jp.prototype={
$0(){var s,r,q=this.a,p=q.r,o=p.a,n=this.c.a,m=n.gS(n).gal(),l=n.gU().gal()
n=this.b.a
s=q.eX(B.b.A(n,0,m))
r=q.eX(B.b.A(n,m,l))
m+=s*3
p.a+=B.b.B(" ",m)
p=p.a+=B.b.B("^",Math.max(l+(s+r)*3-m,1))
return p.length-o.length},
$S:30}
A.jq.prototype={
$0(){var s=this.c.a
return this.a.mz(this.b,s.gS(s).gal())},
$S:1}
A.jr.prototype={
$0(){var s=this,r=s.a,q=r.r,p=q.a
if(s.b)q.a+=B.b.B("\u2500",3)
else r.it(s.c,Math.max(s.d.a.gU().gal()-1,0),!1)
return q.a.length-p.length},
$S:30}
A.jy.prototype={
$0(){var s=this.b,r=s.r,q=this.a.a
if(q==null)q=""
s=r.a+=B.b.oK(q,s.d)
q=this.c
r.a=s+(q==null?"\u2502":q)},
$S:2}
A.aA.prototype={
l(a){var s=this.a
s=""+"primary "+(""+s.gS(s).gae()+":"+s.gS(s).gal()+"-"+s.gU().gae()+":"+s.gU().gal())
return s.charCodeAt(0)==0?s:s}}
A.lk.prototype={
$0(){var s,r,q,p,o=this.a
if(!(t.ol.b(o)&&A.lU(o.gaX(),o.gX(o),o.gS(o).gal())!=null)){s=o.gS(o)
s=A.hF(s.gaw(s),0,0,o.ga3())
r=o.gU()
r=r.gaw(r)
q=o.ga3()
p=A.ts(o.gX(o),10)
o=A.ks(s,A.hF(r,A.o9(o.gX(o)),p,q),o.gX(o),o.gX(o))}return A.r9(A.rb(A.ra(o)))},
$S:83}
A.bc.prototype={
l(a){return""+this.b+': "'+this.a+'" ('+B.a.aD(this.d,", ")+")"}}
A.bx.prototype={
ft(a){var s=this.a
if(!J.W(s,a.ga3()))throw A.d(A.a8('Source URLs "'+A.k(s)+'" and "'+A.k(a.ga3())+"\" don't match.",null))
return Math.abs(this.b-a.gaw(a))},
aB(a,b){var s
t.hq.a(b)
s=this.a
if(!J.W(s,b.ga3()))throw A.d(A.a8('Source URLs "'+A.k(s)+'" and "'+A.k(b.ga3())+"\" don't match.",null))
return this.b-b.gaw(b)},
V(a,b){if(b==null)return!1
return t.hq.b(b)&&J.W(this.a,b.ga3())&&this.b===b.gaw(b)},
gW(a){var s=this.a
s=s==null?null:s.gW(s)
if(s==null)s=0
return s+this.b},
l(a){var s=this,r=A.dD(s).l(0),q=s.a
return"<"+r+": "+s.b+" "+(A.k(q==null?"unknown source":q)+":"+(s.c+1)+":"+(s.d+1))+">"},
$iaf:1,
ga3(){return this.a},
gaw(a){return this.b},
gae(){return this.c},
gal(){return this.d}}
A.hG.prototype={
ft(a){if(!J.W(this.a.a,a.ga3()))throw A.d(A.a8('Source URLs "'+A.k(this.ga3())+'" and "'+A.k(a.ga3())+"\" don't match.",null))
return Math.abs(this.b-a.gaw(a))},
aB(a,b){t.hq.a(b)
if(!J.W(this.a.a,b.ga3()))throw A.d(A.a8('Source URLs "'+A.k(this.ga3())+'" and "'+A.k(b.ga3())+"\" don't match.",null))
return this.b-b.gaw(b)},
V(a,b){if(b==null)return!1
return t.hq.b(b)&&J.W(this.a.a,b.ga3())&&this.b===b.gaw(b)},
gW(a){var s=this.a.a
s=s==null?null:s.gW(s)
if(s==null)s=0
return s+this.b},
l(a){var s=A.dD(this).l(0),r=this.b,q=this.a,p=q.a
return"<"+s+": "+r+" "+(A.k(p==null?"unknown source":p)+":"+(q.cJ(r)+1)+":"+(q.aW(r)+1))+">"},
$iaf:1,
$ibx:1}
A.hH.prototype={
lL(a,b,c){var s,r=this.b,q=this.a
if(!J.W(r.ga3(),q.ga3()))throw A.d(A.a8('Source URLs "'+A.k(q.ga3())+'" and  "'+A.k(r.ga3())+"\" don't match.",null))
else if(r.gaw(r)<q.gaw(q))throw A.d(A.a8("End "+r.l(0)+" must come after start "+q.l(0)+".",null))
else{s=this.c
if(s.length!==q.ft(r))throw A.d(A.a8('Text "'+s+'" must be '+q.ft(r)+" characters long.",null))}},
gS(a){return this.a},
gU(){return this.b},
gX(a){return this.c}}
A.eC.prototype={
ga3(){return this.gS(this).ga3()},
gm(a){var s,r=this.gU()
r=r.gaw(r)
s=this.gS(this)
return r-s.gaw(s)},
aB(a,b){var s
t.hs.a(b)
s=this.gS(this).aB(0,b.gS(b))
return s===0?this.gU().aB(0,b.gU()):s},
jw(a,b,c){var s,r,q=this,p=""+("line "+(q.gS(q).gae()+1)+", column "+(q.gS(q).gal()+1))
if(q.ga3()!=null){s=q.ga3()
s=p+(" of "+$.nc().jE(s))
p=s}p+=": "+b
r=q.om(c)
if(r.length!==0)p=p+"\n"+r
return p.charCodeAt(0)==0?p:p},
om(a){var s=this
if(!t.ol.b(s)&&s.gm(s)===0)return""
return A.q8(s,a).ol()},
V(a,b){if(b==null)return!1
return t.hs.b(b)&&this.gS(this).V(0,b.gS(b))&&this.gU().V(0,b.gU())},
gW(a){return A.cO(this.gS(this),this.gU(),B.m,B.m)},
l(a){var s=this
return"<"+A.dD(s).l(0)+": from "+s.gS(s).l(0)+" to "+s.gU().l(0)+' "'+s.gX(s)+'">'},
$iaf:1,
$ibj:1}
A.bJ.prototype={
gaX(){return this.d}}
A.O.prototype={
l(a){return"["+A.k(this.a)+", "+A.k(this.b)+"]"},
V(a,b){if(b==null)return!1
return b instanceof A.O&&J.W(b.a,this.a)&&J.W(b.b,this.b)},
gW(a){return A.cO(J.aH(this.a),J.aH(this.b),B.m,B.m)}}
A.cS.prototype={
l(a){return"["+this.a.l(0)+", "+A.k(this.b)+", "+A.k(this.c)+"]"},
V(a,b){if(b==null)return!1
return b instanceof A.cS&&b.a===this.a&&b.b===this.b&&b.c===this.c},
gW(a){return A.cO(A.bI(this.a),B.h.gW(this.b),B.h.gW(this.c),B.m)}}
A.dq.prototype={
aA(a){var s=this
return A.hb([s.a,s.b,s.c,s.d],!1,t.z)},
l(a){var s=this
return"["+s.a.l(0)+", "+s.b.l(0)+", "+s.c.l(0)+", "+s.d.l(0)+"]"},
V(a,b){var s=this
if(b==null)return!1
return b instanceof A.dq&&b.a.V(0,s.a)&&b.b.V(0,s.b)&&b.c.V(0,s.c)&&b.d.V(0,s.d)},
gW(a){var s=this
return A.cO(A.bI(s.a),A.bI(s.b),A.bI(s.c),A.bI(s.d))}}
A.em.prototype={
bV(){var s=0,r=A.c2(t.z),q=this,p
var $async$bV=A.c4(function(a,b){if(a===1)return A.c_(b,r)
while(true)switch(s){case 0:p=q.id
p===$&&A.b("camera")
p.f=A.oy("#191919")
q.x=A.dI(2)
s=2
return A.bn(q.fs(),$async$bV)
case 2:s=3
return A.bn(q.fq(),$async$bV)
case 3:q.cI(1)
p=t.n
s=4
return A.bn(q.ep(A.a([A.a([2,3],p),A.a([2,3],p)],t.b)),$async$bV)
case 4:q.oB()
s=5
return A.bn(q.dQ(),$async$bV)
case 5:return A.c0(null,r)}})
return A.c1($async$bV,r)},
fs(){var s=0,r=A.c2(t.z),q=this,p,o,n,m
var $async$fs=A.c4(function(a,b){if(a===1)return A.c_(b,r)
while(true)switch(s){case 0:p=Math.max(7.111111111111111,4)
o=-p*2.25
n=p*2.25
m=new A.er(B.D.bH(B.P),B.n.bH(B.n),B.a5.bH(B.O),B.e5,null,1,1,1,$,$,B.e,B.D,B.n,B.n,o,n,o,n,4,0,!1,0.01,!1,0.000001,4,null,null,null,B.c,$,null,$,$,$)
m.ao(B.c,null,null)
m.hE(null)
m.lH(B.D,B.e,B.n,n,o,B.n,n,o)
m.Q=!1
m.oo()
m.hj(1)
q.Q=m
m=A.kb(m)
q.y=m
q.aN(t.a.a(A.a([m],t.r)))
return A.c0(null,r)}})
return A.c1($async$fs,r)},
fq(){var s=0,r=A.c2(t.z),q=this,p,o,n,m,l,k,j,i,h
var $async$fq=A.c4(function(a,b){if(a===1)return A.c_(b,r)
while(true)switch(s){case 0:h=q.Q
h===$&&A.b("originalPlane")
h=A.nv(h.c7(B.j))
h.a9(B.A)
q.ax=h
h=A.nv(q.Q.c7(B.x))
h.a9(B.z)
q.ay=h
p=q.Q.c7(B.e)
h=A.bD(0,new A.e(-2,3,0),p)
h.a9(B.t)
q.db=h
h=A.bD(0,h.am().B(0,0.5),p)
h.a9(B.t)
q.dx=h
h=A.bD(0,q.db.am().B(0,-0.5),p)
h.a9(B.t)
q.dy=h
h=A.bD(0,q.db.am().B(0,-1),p)
h.a9(B.t)
q.fr=h
h=q.db.am().B(0,5)
h=A.jN(0,B.c,q.db.am().B(0,-5),null,h)
h.a9(B.t)
q.fx=h
h=t.r
o=A.nx(A.a([q.db,q.dx,q.dy,q.fr],h))
q.as=A.fQ(q.ax)
q.at=A.fQ(q.ay)
n=A.bD(0,q.as.ha(),p)
n.a9(B.A)
q.cx=n
n=A.bD(0,q.at.ha(),p)
n.a9(B.z)
q.cy=n
n=A.nq(B.e,B.c,0.2)
n.hh(B.b3)
n.aG(B.p.hn(0).B(0,new A.e(7.111111111111111,4,0)).K(0,n.ar(B.p)).K(0,B.p.B(0,0.5)).B(0,B.p.hn(0).mF(0)))
q.go=n
q.mK()
n=q.as
m=q.at
l=q.cx
k=q.cy
j=q.ch
j===$&&A.b("texI")
i=q.CW
i===$&&A.b("texJ")
q.aN(A.a([n,m,l,k,j,i,o,q.fx],h))
q.aN(A.a([q.go],h))
return A.c0(null,r)}})
return A.c1($async$fq,r)},
mK(){var s=this,r=A.nH("\\hat{\\imath}")
r.a9(B.A)
r.dJ(new A.jW(s))
s.ch=r
r=A.nH("\\hat{\\jmath}")
r.a9(B.z)
r.dJ(new A.jX(s))
s.CW=r},
ep(a){return this.pD(t.jj.a(a))},
pD(a4){var s=0,r=A.c2(t.z),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
var $async$ep=A.c4(function(a5,a6){if(a5===1)return A.c_(a6,r)
while(true)switch(s){case 0:a2=A.aM(null,a4)
a3=q.y
a3===$&&A.b("plane")
p=A.kb(a3)
p.fd(a2)
a3=q.x
a3===$&&A.b("transformationMatrix")
q.x=a2.bm(a3)
a3=q.Q
a3===$&&A.b("originalPlane")
o=a3.c7(B.j).bm(q.x)
n=q.Q.c7(B.x).bm(q.x)
a3=q.as
a3===$&&A.b("i")
m=A.fQ(a3)
m.cA(o)
a3=q.at
a3===$&&A.b("j")
l=A.fQ(a3)
l.cA(n)
k=q.Q.c7(B.e)
j=A.bD(0,o,k)
j.a9(B.A)
i=A.bD(0,n,k)
i.a9(B.z)
h=A.bD(0.25,k,k)
h.a9(B.t)
a3=A.bV(q.as,m)
g=A.bV(q.at,l)
f=q.cx
f===$&&A.b("arrowI")
f=A.bV(f,j)
e=q.cy
e===$&&A.b("arrowJ")
e=A.bV(e,i)
d=A.bV(q.y,p)
c=q.db
c===$&&A.b("eigen1")
c=A.bV(c,h)
b=q.dx
b===$&&A.b("eigen2")
b=A.bV(b,h)
a=q.dy
a===$&&A.b("eigen3")
a=A.bV(a,h)
a0=q.fr
a0===$&&A.b("eigen4")
a0=A.bV(a0,h)
a1=q.fx
a1===$&&A.b("eigenspace")
a1=t.cG.a(A.a([a3,g,f,e,d,c,b,a,a0,A.bV(a1,h)],t.lq))
a3=A.nx(B.bl)
a3=new A.fw(a1,0,A.pe(),0,a3)
a3.f=a3.bK()
a3.lG(a1,null,0,A.pe(),0)
s=2
return A.bn(q.ee(0,a3),$async$ep)
case 2:return A.c0(null,r)}})
return A.c1($async$ep,r)},
oB(){var s,r,q,p=this,o=p.as
o===$&&A.b("i")
o=A.nw(o)
s=p.at
s===$&&A.b("j")
s=A.nw(s)
r=p.go
r===$&&A.b("btn")
p.aN(t.a.a(A.a([o,s,A.pT(r,p.gpj())],t.r)))
q=new A.jY(p)
p.as.dJ(q)
p.at.dJ(q)},
pk(){var s=this.d
s===$&&A.b("mobjects")
B.a.bB(s)
this.cI(1)
this.bV()}}
A.jW.prototype={
$2(a,b){var s
t.j.a(a)
A.cs(b)
s=this.a.as
s===$&&A.b("i")
a.jz(s,0.1,B.p)
return a},
$S:16}
A.jX.prototype={
$2(a,b){var s
t.j.a(a)
A.cs(b)
s=this.a.at
s===$&&A.b("j")
a.jz(s,0.1,B.p)
return a},
$S:16}
A.jY.prototype={
$2(a,b){var s,r,q,p,o,n,m,l,k
t.j.a(a)
A.cs(b)
s=this.a
r=s.Q
r===$&&A.b("originalPlane")
q=s.as
q===$&&A.b("i")
p=r.jC(q.ar(B.e))
q=s.Q
r=s.at
r===$&&A.b("j")
o=q.jC(r.ar(B.e))
n=A.kb(s.Q)
r=t.n
n.fd(A.aM(null,A.a([A.a([p.a,o.a],r),A.a([p.b,o.b],r)],t.b)))
m=s.Q.c7(B.e)
l=A.bD(0,p,m)
l.a9(B.A)
k=A.bD(0,o,m)
k.a9(B.z)
r=s.y
r===$&&A.b("plane")
r.fe(n)
r=s.cx
r===$&&A.b("arrowI")
r.fe(l)
s=s.cy
s===$&&A.b("arrowJ")
s.fe(k)
return a},
$S:16};(function aliases(){var s=J.ed.prototype
s.lq=s.l
s=J.cI.prototype
s.lv=s.l
s=A.bg.prototype
s.lr=s.jm
s.ls=s.jn
s.lu=s.jp
s.lt=s.jo
s=A.u.prototype
s.lw=s.bB
s=A.H.prototype
s.hz=s.l
s=A.a4.prototype
s.lC=s.a2
s=A.aV.prototype
s.lx=s.v
s.bP=s.p
s.hx=s.bF
s.ly=s.M
s=A.br.prototype
s.lo=s.cX
s.lp=s.cY
s=A.G.prototype
s.lB=s.cg
s.lA=s.cE
s.hy=s.c1
s.lz=s.d1
s.cP=s.aM
s.cO=s.am
s=A.R.prototype
s.lF=s.c1
s=A.dG.prototype
s.ln=s.l5
s=A.eC.prototype
s.lE=s.aB
s.lD=s.V})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._instance_1i,q=hunkHelpers.installInstanceTearOff,p=hunkHelpers._static_1,o=hunkHelpers._static_0,n=hunkHelpers.installStaticTearOff,m=hunkHelpers._instance_1u,l=hunkHelpers._instance_0u
s(J,"rW","qe",31)
r(J.z.prototype,"gmI","p",85)
q(J.bF.prototype,"ghv",1,1,null,["$2","$1"],["aa","Z"],53,0,0)
p(A,"t5","q5",32)
p(A,"ti","r4",15)
p(A,"tj","r5",15)
p(A,"tk","r6",15)
o(A,"oQ","tc",1)
s(A,"oS","rN",88)
p(A,"tn","rO",32)
s(A,"tm","qj",31)
p(A,"tr","qY",20)
n(A,"tO",2,null,["$1$2","$2"],["p9",function(a,b){return A.p9(a,b,t.p)}],18,0)
n(A,"p7",2,null,["$1$2","$2"],["p8",function(a,b){return A.p8(a,b,t.p)}],18,0)
p(A,"oT","a3",5)
p(A,"tp","m4",5)
p(A,"tq","p5",5)
p(A,"bL","pO",90)
m(A.ex.prototype,"gjY","jZ",34)
var k
l(k=A.e5.prototype,"gD","nG",0)
l(k,"gnW","nX",0)
l(k,"gcF","pd",0)
l(k,"gnm","nn",0)
l(k,"gej","p6",0)
l(k,"gbN","kO",0)
l(k,"goO","oP",0)
l(k,"gpv","pw",0)
l(k,"gnp","nq",0)
l(k,"gjR","pu",0)
l(k,"gpb","pc",0)
l(k,"gp9","pa",0)
l(k,"gp7","p8",0)
l(k,"gp0","p5",0)
l(k,"goZ","p_",0)
l(k,"goX","oY",0)
l(k,"gkM","kN",0)
l(k,"gkx","ky",0)
l(k,"gkv","kw",0)
l(k,"gkB","kC",0)
l(k,"gkz","kA",0)
l(k,"gbc","kL",0)
l(k,"gkE","kF",0)
l(k,"ghf","kD",0)
l(k,"geF","kK",0)
l(k,"gkI","kJ",0)
l(k,"gkG","kH",0)
l(k,"gkn","ko",0)
l(k,"gbM","ku",0)
l(k,"gkr","ks",0)
l(k,"gkp","kq",0)
l(k,"geE","kt",0)
l(k,"gkl","km",0)
l(k,"gbA","n7",0)
l(k,"gbT","n0",0)
l(k,"gmO","mP",0)
l(k,"giJ","n8",0)
l(k,"gn1","n2",0)
l(k,"gn3","n4",0)
l(k,"gdM","n5",0)
l(k,"giA","mQ",0)
l(k,"gbw","kP",0)
l(k,"gfh","ng",0)
l(k,"goC","oD",0)
l(k,"gny","nz",0)
l(k,"gnw","nx",0)
l(k,"gbU","nA",0)
l(k,"giR","nu",0)
l(k,"giS","nv",0)
l(k,"gns","nt",0)
l(k,"gnN","nO",0)
l(k,"giK","n9",0)
l(k,"gfu","nI",0)
l(k,"gmR","mS",0)
l(k,"gmU","mV",0)
l(k,"gff","na",0)
l(k,"gnJ","nK",0)
l(k,"gnL","nM",0)
l(k,"giB","mT",0)
l(k,"gnc","nd",0)
l(k,"gmX","mY",0)
l(k,"gfg","nb",0)
l(k,"gfv","nP",0)
l(k,"gfw","nQ",0)
l(k,"giC","mW",0)
l(k,"gcs","nh",0)
l(k,"gnk","nl",0)
l(A.G.prototype,"gkd","bK",6)
l(A.em.prototype,"gpj","pk",1)
n(A,"pc",3,null,["$3"],["tV"],91,0)
n(A,"pe",1,null,["$3$inflection$pauseRatio","$1"],["p6",function(a){return A.p6(a,null,null)}],26,0)
n(A,"tR",1,null,["$3$inflection$pauseRatio","$1"],["ph",function(a){return A.ph(a,null,null)}],26,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.H,null)
q(A.H,[A.mn,J.ed,J.az,A.i,A.dS,A.aS,A.a1,A.eV,A.kr,A.L,A.U,A.e3,A.e0,A.cV,A.be,A.bz,A.d4,A.kB,A.hj,A.e1,A.f_,A.cK,A.jP,A.cJ,A.cH,A.dw,A.dt,A.dp,A.ir,A.l3,A.bv,A.ij,A.f2,A.lr,A.i3,A.dv,A.cq,A.dM,A.i5,A.cW,A.ar,A.i4,A.eE,A.eF,A.hJ,A.ip,A.f9,A.fb,A.ik,A.cX,A.u,A.eW,A.aX,A.eZ,A.iw,A.cC,A.lv,A.l4,A.hn,A.eD,A.ih,A.e4,A.bi,A.ak,A.is,A.hx,A.a2,A.f7,A.kD,A.bm,A.mj,A.im,A.cP,A.eT,A.lo,A.bk,A.kz,A.dd,A.jZ,A.kf,A.S,A.i_,A.aC,A.il,A.ln,A.ib,A.ah,A.jC,A.a4,A.aW,A.ki,A.jb,A.j3,A.jB,A.b3,A.eG,A.e5,A.kA,A.o,A.br,A.iZ,A.dF,A.G,A.aI,A.cm,A.ew,A.dG,A.hA,A.P,A.d3,A.b4,A.jc,A.b5,A.k8,A.bs,A.e,A.j4,A.kx,A.kc,A.hq,A.hE,A.hG,A.eC,A.jf,A.aA,A.bc,A.bx,A.O,A.cS,A.dq])
q(J.ed,[J.h7,J.ef,J.b6,J.z,J.cb,J.bF,A.hf])
q(J.b6,[J.cI,A.aT,A.dR,A.j7,A.dV,A.q,A.hp])
q(J.cI,[J.hs,J.bK,J.bG])
r(J.jL,J.z)
q(J.cb,[J.da,J.eg])
q(A.i,[A.co,A.Q,A.cL,A.ap,A.e2,A.bR,A.al,A.eO,A.ee,A.iq,A.hy])
q(A.co,[A.cB,A.fa])
r(A.eQ,A.cB)
r(A.eN,A.fa)
q(A.aS,[A.fK,A.fJ,A.je,A.ec,A.hK,A.jM,A.lY,A.m_,A.l_,A.kZ,A.ly,A.lb,A.lj,A.kt,A.lq,A.lm,A.jT,A.lD,A.lE,A.kY,A.l6,A.jJ,A.jd,A.jH,A.kp,A.kq,A.ko,A.kn,A.jD,A.j_,A.j0,A.iI,A.iJ,A.iK,A.k9,A.ka,A.kj,A.kl,A.kk,A.j8,A.j9,A.ja,A.iY,A.k6,A.k5,A.k4,A.k3,A.k7,A.k0,A.k1,A.k2,A.a5,A.a6,A.a7,A.kT,A.kU,A.kQ,A.kP,A.kO,A.kL,A.kS,A.kR,A.j1,A.m9,A.m1,A.m2,A.m3,A.lO,A.lB,A.kw,A.iR,A.iQ,A.iP,A.iO,A.kX,A.kV,A.j5,A.j6,A.lK,A.jh,A.jg,A.ji,A.jk,A.jm,A.jj,A.jA])
q(A.fK,[A.l2,A.lZ,A.lz,A.lL,A.lc,A.jQ,A.jS,A.kE,A.kF,A.kG,A.lC,A.ke,A.jG,A.lV,A.iX,A.jV,A.k_,A.kN,A.kJ,A.kM,A.kK,A.km,A.mb,A.mc,A.lN,A.lP,A.lQ,A.iS,A.iT,A.iU,A.iN,A.m8,A.kW,A.jl,A.jW,A.jX,A.jY])
r(A.aR,A.eN)
q(A.a1,[A.eh,A.cl,A.h8,A.hS,A.hz,A.dL,A.ig,A.hi,A.bC,A.hT,A.eL,A.cj,A.fM,A.fO])
r(A.ei,A.eV)
q(A.ei,[A.dr,A.aV])
r(A.a9,A.dr)
q(A.fJ,[A.m6,A.l0,A.l1,A.ls,A.l7,A.lf,A.ld,A.l9,A.le,A.l8,A.li,A.lh,A.lg,A.ku,A.lJ,A.lp,A.kI,A.kH,A.kd,A.jF,A.lT,A.lS,A.jE,A.jz,A.jn,A.ju,A.jv,A.jw,A.jx,A.js,A.jt,A.jo,A.jp,A.jq,A.jr,A.jy,A.lk])
q(A.Q,[A.D,A.e_,A.aU])
q(A.D,[A.aK,A.I,A.X,A.ej])
r(A.dY,A.cL)
q(A.U,[A.cM,A.cU,A.eB])
r(A.d5,A.bR)
q(A.d4,[A.r,A.c9])
r(A.ca,A.ec)
r(A.eq,A.cl)
q(A.hK,[A.hI,A.d1])
r(A.i2,A.dL)
r(A.ek,A.cK)
r(A.bg,A.ek)
q(A.ee,[A.i1,A.f1,A.at,A.ii])
r(A.df,A.hf)
r(A.eX,A.df)
r(A.eY,A.eX)
r(A.eo,A.eY)
q(A.eo,[A.he,A.ep,A.cN])
r(A.f3,A.ig)
r(A.f0,A.i5)
r(A.io,A.f9)
r(A.eU,A.bg)
r(A.dx,A.fb)
q(A.dx,[A.bY,A.fc])
r(A.ey,A.eZ)
r(A.f6,A.fc)
q(A.cC,[A.fT,A.fC])
q(A.fT,[A.fz,A.hW])
r(A.cD,A.hJ)
q(A.cD,[A.it,A.fD,A.hX])
r(A.fA,A.it)
q(A.bC,[A.dk,A.h4])
r(A.i7,A.f7)
q(A.aT,[A.b2,A.ds])
q(A.b2,[A.p,A.bE])
r(A.x,A.p)
q(A.x,[A.fu,A.fx,A.cA,A.fX,A.hB])
r(A.by,A.q)
r(A.b7,A.by)
r(A.eP,A.dV)
r(A.eR,A.eE)
r(A.ic,A.eR)
r(A.eS,A.eF)
r(A.h0,A.bk)
r(A.ky,A.kz)
q(A.l4,[A.de,A.hO,A.bt])
q(A.S,[A.bP,A.cn,A.hM,A.hg,A.hC,A.cg,A.ez,A.aY,A.dn,A.aj])
q(A.aY,[A.cE,A.hd,A.fB,A.h_,A.fI,A.di,A.dj,A.hh])
r(A.et,A.di)
r(A.hu,A.dj)
q(A.aj,[A.hm,A.hl,A.ag])
q(A.ag,[A.hk,A.bl,A.hr,A.fS,A.fV,A.fY])
q(A.bl,[A.h9,A.fv,A.hN,A.fZ,A.hw,A.fH,A.hv,A.hZ])
q(A.ah,[A.i8,A.fP,A.bT,A.id,A.fL])
r(A.i9,A.i8)
r(A.ia,A.i9)
r(A.dU,A.ia)
r(A.ie,A.id)
r(A.V,A.ie)
q(A.aV,[A.ac,A.fo])
r(A.fW,A.ii)
q(A.a4,[A.bu,A.fE,A.dP,A.h2,A.ft,A.d7,A.hL,A.eb,A.d9,A.e6,A.e7,A.cF,A.e9,A.d8,A.ea,A.h3,A.h1,A.fr,A.e8,A.fs,A.fp,A.fq])
r(A.i6,A.ey)
r(A.fR,A.i6)
r(A.ex,A.i_)
q(A.b3,[A.bS,A.ba,A.dT])
q(A.bS,[A.ci,A.J])
q(A.ba,[A.m,A.E,A.cR,A.d2])
q(A.br,[A.fw,A.hQ])
r(A.fn,A.dF)
r(A.fF,A.fn)
q(A.G,[A.R,A.h6,A.d6])
q(A.R,[A.eJ,A.bX,A.es,A.cf,A.dm,A.eM])
q(A.eJ,[A.ao,A.dH])
q(A.ao,[A.dg,A.dJ])
r(A.fN,A.bX)
r(A.dN,A.fN)
r(A.er,A.dN)
r(A.eI,A.cm)
q(A.dH,[A.cz,A.c7])
q(A.c7,[A.dW,A.dZ])
q(A.es,[A.eu,A.dl])
r(A.eK,A.eu)
r(A.dK,A.eK)
r(A.ev,A.dl)
r(A.eH,A.dm)
r(A.bQ,A.cf)
r(A.el,A.bQ)
q(A.h6,[A.dX,A.dQ])
r(A.fG,A.dG)
r(A.hc,A.b4)
q(A.hc,[A.en,A.cd,A.ce,A.cc])
r(A.cG,A.kx)
q(A.cG,[A.ht,A.hV,A.i0])
r(A.b0,A.hG)
q(A.eC,[A.aq,A.hH])
r(A.bJ,A.hH)
r(A.em,A.hA)
s(A.dr,A.bz)
s(A.fa,A.u)
s(A.eX,A.u)
s(A.eY,A.be)
s(A.eV,A.u)
s(A.eZ,A.aX)
s(A.fb,A.aX)
s(A.fc,A.iw)
s(A.i8,A.il)
s(A.i9,A.ln)
s(A.ia,A.ib)
s(A.id,A.il)
s(A.ie,A.ib)
s(A.ii,A.u)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{h:"int",t:"double",ae:"num",n:"String",B:"bool",ak:"Null",l:"List"},mangledNames:{},types:["B()","~()","ak()","e(e)","t(t,O<h,h>)","B(n?)","n()","B(n)","P(P)","t(t)","B(h)","B(aA)","B(G)","~(b7)","h(h,h)","~(~())","G(G,t)","ak(@)","0^(0^,0^)<ae>","ao(ao)","n(n)","B(ce)","@()","t(e)","~(cT,n,h)","B(h,e)","t(t{inflection:t?,pauseRatio:t?})","l<t>(P)","~(H,n)","B(ah)","h()","h(@,@)","h(H?)","~(@,@)","B(cg)","b1<n,l<n>>()","l<n>()","ak(H,ch)","l<G>(G)","B(e)","@(@)","B(@)","aI(aI,aI)","B(H)","@(@,n)","n(cQ)","B(n,n)","B(cc)","B(cd)","~(H?,H?)","@(n)","~(n,h)","~(n,h?)","B(dh[h])","cT(@,@)","ak(~())","l<e>(l<l<e>>,@)","l<P>(n,R)","~(n,R,l<P>)","l<P>(l<P>)","B(P)","~(ae)","t(h)","~(q)","P(l<t>)","e(t)","e(e,e)","t(n)","~(V)","l<t>(O<h,l<t>>)","t(O<h,t>)","t(l<t>)","bf<ak>()","bs(bs,bs)","n(n?)","n?()","h(bc)","~(l<G>,bw<G>)","H(bc)","H(aA)","h(aA,aA)","l<bc>(bi<H,l<aA>>)","B(H?)","bJ()","n(ba)","~(H?)","~(@)","ak(@,ch)","B(H?,H?)","~(h,@)","h(h)","l<e>(l<e>,l<e>,t)","ar<@>(@)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.rr(v.typeUniverse,JSON.parse('{"hs":"cI","bK":"cI","bG":"cI","u3":"q","ua":"q","ue":"p","u4":"x","uf":"x","ub":"b2","u8":"b2","ug":"b7","u6":"by","u5":"bE","um":"bE","h7":{"B":[]},"ef":{"ak":[]},"z":{"l":["1"],"Q":["1"],"i":["1"]},"jL":{"z":["1"],"l":["1"],"Q":["1"],"i":["1"]},"az":{"U":["1"]},"cb":{"t":[],"ae":[],"af":["ae"]},"da":{"t":[],"h":[],"ae":[],"af":["ae"]},"eg":{"t":[],"ae":[],"af":["ae"]},"bF":{"n":[],"af":["n"],"dh":[]},"co":{"i":["2"]},"dS":{"U":["2"]},"cB":{"co":["1","2"],"i":["2"],"i.E":"2"},"eQ":{"cB":["1","2"],"co":["1","2"],"Q":["2"],"i":["2"],"i.E":"2"},"eN":{"u":["2"],"l":["2"],"co":["1","2"],"Q":["2"],"i":["2"]},"aR":{"eN":["1","2"],"u":["2"],"l":["2"],"co":["1","2"],"Q":["2"],"i":["2"],"u.E":"2","i.E":"2"},"eh":{"a1":[]},"a9":{"u":["h"],"bz":["h"],"l":["h"],"Q":["h"],"i":["h"],"u.E":"h","bz.E":"h"},"Q":{"i":["1"]},"D":{"Q":["1"],"i":["1"]},"aK":{"D":["1"],"Q":["1"],"i":["1"],"D.E":"1","i.E":"1"},"L":{"U":["1"]},"cL":{"i":["2"],"i.E":"2"},"dY":{"cL":["1","2"],"Q":["2"],"i":["2"],"i.E":"2"},"cM":{"U":["2"]},"I":{"D":["2"],"Q":["2"],"i":["2"],"D.E":"2","i.E":"2"},"ap":{"i":["1"],"i.E":"1"},"cU":{"U":["1"]},"e2":{"i":["2"],"i.E":"2"},"e3":{"U":["2"]},"bR":{"i":["1"],"i.E":"1"},"d5":{"bR":["1"],"Q":["1"],"i":["1"],"i.E":"1"},"eB":{"U":["1"]},"e_":{"Q":["1"],"i":["1"],"i.E":"1"},"e0":{"U":["1"]},"al":{"i":["1"],"i.E":"1"},"cV":{"U":["1"]},"dr":{"u":["1"],"bz":["1"],"l":["1"],"Q":["1"],"i":["1"]},"X":{"D":["1"],"Q":["1"],"i":["1"],"D.E":"1","i.E":"1"},"d4":{"b1":["1","2"]},"r":{"d4":["1","2"],"b1":["1","2"]},"eO":{"i":["1"],"i.E":"1"},"c9":{"d4":["1","2"],"b1":["1","2"]},"ec":{"aS":[],"bO":[]},"ca":{"aS":[],"bO":[]},"eq":{"cl":[],"a1":[]},"h8":{"a1":[]},"hS":{"a1":[]},"hj":{"bN":[]},"f_":{"ch":[]},"aS":{"bO":[]},"fJ":{"aS":[],"bO":[]},"fK":{"aS":[],"bO":[]},"hK":{"aS":[],"bO":[]},"hI":{"aS":[],"bO":[]},"d1":{"aS":[],"bO":[]},"hz":{"a1":[]},"i2":{"a1":[]},"bg":{"cK":["1","2"],"jO":["1","2"],"b1":["1","2"]},"aU":{"Q":["1"],"i":["1"],"i.E":"1"},"cJ":{"U":["1"]},"cH":{"dh":[]},"dw":{"cQ":[],"dc":[]},"i1":{"i":["cQ"],"i.E":"cQ"},"dt":{"U":["cQ"]},"dp":{"dc":[]},"iq":{"i":["dc"],"i.E":"dc"},"ir":{"U":["dc"]},"df":{"db":["1"]},"eo":{"u":["h"],"db":["h"],"l":["h"],"Q":["h"],"i":["h"],"be":["h"]},"he":{"u":["h"],"db":["h"],"l":["h"],"Q":["h"],"i":["h"],"be":["h"],"u.E":"h","be.E":"h"},"ep":{"u":["h"],"qW":[],"db":["h"],"l":["h"],"Q":["h"],"i":["h"],"be":["h"],"u.E":"h","be.E":"h"},"cN":{"u":["h"],"cT":[],"db":["h"],"l":["h"],"Q":["h"],"i":["h"],"be":["h"],"u.E":"h","be.E":"h"},"f2":{"o_":[]},"ig":{"a1":[]},"f3":{"cl":[],"a1":[]},"ar":{"bf":["1"]},"cq":{"U":["1"]},"f1":{"i":["1"],"i.E":"1"},"dM":{"a1":[]},"f0":{"i5":["1"]},"f9":{"o7":[]},"io":{"f9":[],"o7":[]},"eU":{"bg":["1","2"],"cK":["1","2"],"jO":["1","2"],"b1":["1","2"]},"bY":{"dx":["1"],"aX":["1"],"bw":["1"],"Q":["1"],"i":["1"],"aX.E":"1"},"cX":{"U":["1"]},"ee":{"i":["1"]},"ei":{"u":["1"],"l":["1"],"Q":["1"],"i":["1"]},"ek":{"cK":["1","2"],"b1":["1","2"]},"cK":{"b1":["1","2"]},"ej":{"D":["1"],"nN":["1"],"Q":["1"],"i":["1"],"D.E":"1","i.E":"1"},"eW":{"U":["1"]},"ey":{"aX":["1"],"bw":["1"],"Q":["1"],"i":["1"]},"dx":{"aX":["1"],"bw":["1"],"Q":["1"],"i":["1"]},"f6":{"dx":["1"],"aX":["1"],"iw":["1"],"bw":["1"],"Q":["1"],"i":["1"],"aX.E":"1"},"fz":{"cC":["n","l<h>"]},"it":{"cD":["l<h>","n"]},"fA":{"cD":["l<h>","n"]},"fC":{"cC":["l<h>","n"]},"fD":{"cD":["l<h>","n"]},"fT":{"cC":["n","l<h>"]},"hW":{"cC":["n","l<h>"]},"hX":{"cD":["l<h>","n"]},"t":{"ae":[],"af":["ae"]},"h":{"ae":[],"af":["ae"]},"l":{"Q":["1"],"i":["1"]},"ae":{"af":["ae"]},"cQ":{"dc":[]},"bw":{"Q":["1"],"i":["1"]},"n":{"af":["n"],"dh":[]},"dL":{"a1":[]},"cl":{"a1":[]},"hi":{"a1":[]},"bC":{"a1":[]},"dk":{"a1":[]},"h4":{"a1":[]},"hT":{"a1":[]},"eL":{"a1":[]},"cj":{"a1":[]},"fM":{"a1":[]},"hn":{"a1":[]},"eD":{"a1":[]},"fO":{"a1":[]},"ih":{"bN":[]},"e4":{"bN":[]},"is":{"ch":[]},"hy":{"i":["h"],"i.E":"h"},"hx":{"U":["h"]},"a2":{"qO":[]},"f7":{"hU":[]},"bm":{"hU":[]},"i7":{"hU":[]},"b7":{"q":[]},"x":{"p":[],"aT":[]},"fu":{"p":[],"aT":[]},"fx":{"p":[],"aT":[]},"cA":{"p":[],"aT":[]},"bE":{"aT":[]},"dV":{"mw":["ae"]},"p":{"aT":[]},"fX":{"p":[],"aT":[]},"b2":{"aT":[]},"hB":{"p":[],"aT":[]},"by":{"q":[]},"ds":{"aT":[]},"eP":{"mw":["ae"]},"eR":{"eE":["1"]},"ic":{"eR":["1"],"eE":["1"]},"eS":{"eF":["1"]},"im":{"qy":[]},"at":{"i":["l<1>"],"i.E":"l<1>"},"eT":{"U":["l<1>"]},"h0":{"bk":[]},"cg":{"S":[]},"ez":{"S":[]},"aj":{"S":[]},"bP":{"S":[]},"cn":{"S":[]},"hM":{"S":[]},"hg":{"S":[]},"hC":{"S":[]},"aY":{"S":[]},"cE":{"aY":[],"S":[]},"hd":{"aY":[],"S":[]},"fB":{"aY":[],"S":[]},"h_":{"aY":[],"S":[]},"fI":{"aY":[],"S":[]},"di":{"aY":[],"S":[]},"dj":{"aY":[],"S":[]},"et":{"di":[],"aY":[],"S":[]},"hu":{"dj":[],"aY":[],"S":[]},"dn":{"S":[]},"hh":{"aY":[],"S":[]},"hm":{"aj":[],"S":[]},"hl":{"aj":[],"S":[]},"ag":{"aj":[],"S":[]},"hk":{"ag":[],"aj":[],"S":[]},"bl":{"ag":[],"aj":[],"S":[]},"h9":{"bl":[],"ag":[],"aj":[],"S":[]},"hr":{"ag":[],"aj":[],"S":[]},"fS":{"ag":[],"aj":[],"S":[]},"fV":{"ag":[],"aj":[],"S":[]},"fv":{"bl":[],"ag":[],"aj":[],"S":[]},"hN":{"bl":[],"ag":[],"aj":[],"S":[]},"fZ":{"bl":[],"ag":[],"aj":[],"S":[]},"fY":{"ag":[],"aj":[],"S":[]},"hw":{"bl":[],"ag":[],"aj":[],"S":[]},"fH":{"bl":[],"ag":[],"aj":[],"S":[]},"hv":{"bl":[],"ag":[],"aj":[],"S":[]},"hZ":{"bl":[],"ag":[],"aj":[],"S":[]},"i_":{"o6":[]},"aC":{"af":["H"]},"dU":{"ah":[]},"V":{"ah":[]},"fP":{"ah":[]},"bT":{"ah":[]},"fL":{"ah":[]},"ac":{"aV":["ah"],"u":["ah"],"l":["ah"],"Q":["ah"],"i":["ah"],"u.E":"ah","aV.E":"ah"},"fW":{"u":["V"],"l":["V"],"Q":["V"],"i":["V"],"u.E":"V","i.E":"V"},"aW":{"bN":[]},"bu":{"a4":[]},"fE":{"a4":[]},"dP":{"a4":[]},"h2":{"a4":[]},"ft":{"a4":[]},"d7":{"a4":[]},"hL":{"a4":[]},"eb":{"a4":[]},"d9":{"a4":[]},"e6":{"a4":[]},"e7":{"a4":[]},"cF":{"a4":[]},"e9":{"a4":[]},"d8":{"a4":[]},"ea":{"a4":[]},"h3":{"a4":[]},"h1":{"a4":[]},"fr":{"a4":[]},"e8":{"a4":[]},"fs":{"a4":[]},"fp":{"a4":[]},"fq":{"a4":[]},"fR":{"aX":["n"],"bw":["n"],"Q":["n"],"i":["n"],"aX.E":"n"},"i6":{"aX":["n"],"bw":["n"],"Q":["n"],"i":["n"]},"aV":{"u":["1"],"l":["1"],"Q":["1"],"i":["1"]},"ex":{"o6":[]},"ba":{"b3":[]},"bS":{"b3":[]},"ci":{"bS":[],"b3":[]},"J":{"bS":[],"b3":[]},"m":{"ba":[],"b3":[]},"E":{"ba":[],"b3":[]},"cR":{"ba":[],"b3":[]},"d2":{"ba":[],"b3":[]},"dT":{"b3":[]},"e5":{"U":["b3"]},"fo":{"aV":["V?"],"u":["V?"],"l":["V?"],"Q":["V?"],"i":["V?"],"u.E":"V?","aV.E":"V?"},"fw":{"br":[]},"hQ":{"br":[]},"fn":{"dF":[]},"fF":{"dF":[]},"dg":{"ao":[],"R":[],"G":[]},"fN":{"bX":[],"R":[],"G":[]},"dN":{"bX":[],"R":[],"G":[]},"er":{"bX":[],"R":[],"G":[]},"cz":{"R":[],"G":[]},"ao":{"R":[],"G":[]},"eI":{"cm":[]},"eJ":{"R":[],"G":[]},"dH":{"R":[],"G":[]},"c7":{"R":[],"G":[]},"dW":{"c7":[],"R":[],"G":[]},"dZ":{"c7":[],"R":[],"G":[]},"dJ":{"ao":[],"R":[],"G":[]},"es":{"R":[],"G":[]},"eu":{"R":[],"G":[]},"eK":{"R":[],"G":[]},"dK":{"R":[],"G":[]},"dl":{"R":[],"G":[]},"ev":{"R":[],"G":[]},"cf":{"R":[],"G":[]},"dm":{"R":[],"G":[]},"bQ":{"cf":[],"R":[],"G":[]},"eH":{"R":[],"G":[]},"el":{"bQ":[],"cf":[],"R":[],"G":[]},"h6":{"G":[]},"dX":{"G":[]},"dQ":{"G":[]},"d6":{"G":[]},"R":{"G":[]},"bX":{"R":[],"G":[]},"eM":{"R":[],"G":[]},"fG":{"dG":[]},"cd":{"b4":[]},"ce":{"b4":[]},"cc":{"b4":[]},"hc":{"b4":[]},"en":{"b4":[]},"hq":{"bN":[]},"ht":{"cG":[]},"hV":{"cG":[]},"i0":{"cG":[]},"mk":{"bJ":[],"bj":[],"af":["bj"]},"b0":{"bx":[],"af":["bx"]},"aq":{"mk":[],"bJ":[],"bj":[],"af":["bj"]},"bx":{"af":["bx"]},"hG":{"bx":[],"af":["bx"]},"bj":{"af":["bj"]},"hH":{"bj":[],"af":["bj"]},"eC":{"bj":[],"af":["bj"]},"bJ":{"bj":[],"af":["bj"]},"em":{"hA":[]},"cT":{"l":["h"],"Q":["h"],"i":["h"]}}'))
A.rq(v.typeUniverse,JSON.parse('{"dr":1,"fa":2,"df":1,"hJ":2,"ee":1,"ei":1,"ek":2,"ey":1,"eV":1,"eZ":1,"fb":1,"fc":1}'))
var u={D:" must not be greater than the number of characters in the file, ",U:"Cannot extract a file path from a URI with a fragment component",z:"Cannot extract a file path from a URI with a query component",Q:"Cannot extract a non-Windows file path from a file URI with an authority",w:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",v:"No color list in VMobject with attribute name ",A:"expected-attribute-value-but-got-right-bracket",g:"expected-closing-tag-but-got-right-bracket",f:"expected-doctype-name-but-got-right-bracket",S:"expected-space-or-right-bracket-in-doctype",d:"unexpected-bang-after-double-dash-in-comment",H:"unexpected-character-after-attribute-value",B:"unexpected-character-after-soldius-in-tag",V:"unexpected-character-in-unquoted-attribute-value",K:"unexpected-dash-after-double-dash-in-comment",q:"unexpected-frameset-in-frameset-innerhtml",G:"unexpected-html-element-in-foreign-content",M:"unexpected-start-tag-implies-table-voodoo",r:"unexpected-table-element-end-tag-in-select-in-table",a:"unexpected-table-element-start-tag-in-select-in-table"}
var t=(function rtii(){var s=A.aO
return{pc:s("@<h>"),aY:s("cz"),A:s("bs"),u:s("dM"),fy:s("aI"),jQ:s("cA"),p1:s("E"),E:s("a9"),G:s("P"),cw:s("d2"),bP:s("af<@>"),B:s("r<n,n>"),R:s("r<n,@>"),i:s("dT"),dA:s("dU"),gt:s("Q<@>"),h:s("V"),ia:s("J"),fz:s("a1"),fq:s("q"),d3:s("b5<b4>"),gG:s("b5<cc>"),m4:s("b5<cd>"),Y:s("b5<ce>"),cY:s("bt"),e:s("b4"),mA:s("bN"),lS:s("mk"),gY:s("bO"),g7:s("bf<@>"),ha:s("c9<de,n>"),ek:s("d6"),gx:s("bP"),aB:s("d9"),id:s("ca<t>"),oS:s("at<G>"),c2:s("at<H>"),pn:s("at<R>"),b5:s("at<e>"),lx:s("at<t>"),lb:s("at<h>"),cj:s("i<V>"),hl:s("i<ah>"),bq:s("i<n>"),e7:s("i<@>"),lq:s("z<br>"),nC:s("z<cz>"),fp:s("z<bs>"),iX:s("z<aI>"),O:s("z<P>"),hR:s("z<d3>"),il:s("z<V>"),fO:s("z<b5<b4>>"),oQ:s("z<aj>"),b1:s("z<ao>"),km:s("z<l<ao>>"),Z:s("z<l<G>>"),bo:s("z<l<H>>"),ng:s("z<l<e>>"),b:s("z<l<t>>"),fC:s("z<l<h>>"),bV:s("z<b1<n,@>>"),kU:s("z<dd>"),r:s("z<G>"),d:s("z<ah>"),a8:s("z<o<n,n>>"),eH:s("z<o<@,@>>"),bD:s("z<aW>"),gg:s("z<a4>"),b7:s("z<cg>"),iM:s("z<ez>"),nn:s("z<bQ>"),dw:s("z<eF<@>>"),s:s("z<n>"),ks:s("z<ba>"),kG:s("z<eG>"),bB:s("z<cS<br,t,t>>"),ez:s("z<dq<e,e,e,e>>"),bs:s("z<cT>"),hJ:s("z<R>"),l:s("z<e>"),pg:s("z<aA>"),dg:s("z<bc>"),n:s("z<t>"),m:s("z<@>"),t:s("z<h>"),lB:s("z<V?>"),hg:s("z<ah?>"),D:s("z<n?>"),po:s("z<G(G,t)>"),T:s("ef"),dY:s("bG"),dX:s("db<@>"),lY:s("uc"),am:s("ud"),F:s("ao"),oP:s("jO<H,n>"),cG:s("l<br>"),ev:s("l<P>"),jB:s("l<V>"),oR:s("l<b5<b4>>"),g4:s("l<ao>"),ls:s("l<l<e>>"),jj:s("l<l<t>>"),a:s("l<G>"),I:s("l<n>"),oX:s("l<ba>"),fr:s("l<S>"),dq:s("l<cS<br,t,t>>"),y:s("l<e>"),bd:s("l<t>"),gs:s("l<@>"),L:s("l<h>"),eU:s("l<aA?>"),le:s("l<G(G,t)>"),mH:s("ag"),lO:s("bi<H,l<aA>>"),fg:s("b1<n,P>"),fY:s("b1<bt,l<b5<b4>>>"),gQ:s("I<n,n>"),iZ:s("I<n,@>"),aQ:s("I<e,t>"),j:s("G"),k5:s("G(G,t)"),gn:s("cc"),gD:s("b7"),m6:s("en"),oJ:s("cd"),f:s("ce"),hD:s("cN"),J:s("ah"),P:s("ak"),f7:s("dg"),K:s("H"),w:s("o<n,n>"),nz:s("o<@,@>"),X:s("o<n,n?>"),iA:s("o<n?,n?>"),jK:s("m"),oc:s("dh"),n8:s("cP<ae>"),f_:s("nN<n>"),mx:s("mw<ae>"),lu:s("cQ"),dT:s("cg"),b9:s("dn"),ns:s("bw<G>"),hq:s("bx"),hs:s("bj"),ol:s("bJ"),lH:s("cR"),k:s("ch"),ny:s("ci"),N:s("n"),g:s("ba"),gL:s("n(n)"),mN:s("aK<e>"),fn:s("bS"),oI:s("bT"),q:s("bk"),bF:s("S"),iu:s("O<e,e>"),d7:s("O<h,t>"),o:s("O<h,h>"),kk:s("O<h,l<t>>"),oM:s("cS<br,t,t>"),cn:s("dq<e,e,e,e>"),f5:s("o_"),do:s("cl"),hb:s("cT"),cx:s("bK"),jJ:s("hU"),bX:s("R"),V:s("e"),ew:s("e(e)"),v:s("al<V>"),na:s("al<n>"),pl:s("cV<V>"),eX:s("ic<b7>"),av:s("ar<ak>"),j_:s("ar<@>"),hy:s("ar<h>"),iS:s("ar<ae>"),C:s("aA"),nR:s("bc"),fD:s("f0<ae>"),k4:s("B"),c:s("B()"),cT:s("B(V)"),iW:s("B(H)"),gS:s("B(n)"),aP:s("B(aA)"),gw:s("B(h)"),W:s("t"),iJ:s("t(t,O<h,h>)"),eL:s("t(e)"),f3:s("t(t)"),z:s("@"),mY:s("@()"),mq:s("@(H)"),eK:s("@(H,ch)"),f6:s("@(n)"),S:s("h"),im:s("0&*"),_:s("H*"),mV:s("V?"),gK:s("bf<ak>?"),x:s("l<P>?"),gv:s("l<ao>?"),jq:s("l<eG>?"),fA:s("l<e>?"),lX:s("l<e>(l<e>,l<e>,t)?"),f8:s("l<h>?"),e1:s("ah?"),iD:s("H?"),oA:s("bw<n>?"),g9:s("aY?"),jv:s("n?"),nU:s("b3?"),Q:s("cW<@,@>?"),dd:s("aA?"),nF:s("ik?"),pi:s("B(n)?"),U:s("@(q)?"),dU:s("h(V,V)?"),jE:s("~()?"),p:s("ae"),H:s("~"),M:s("~()"),m3:s("~(dd)"),hv:s("~(ae)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.aa=A.cA.prototype
B.r=A.dR.prototype
B.b4=J.ed.prototype
B.a=J.z.prototype
B.d=J.da.prototype
B.h=J.cb.prototype
B.b=J.bF.prototype
B.b5=J.bG.prototype
B.b6=J.b6.prototype
B.w=A.ep.prototype
B.cO=A.cN.prototype
B.aC=J.hs.prototype
B.a4=J.bK.prototype
B.e6=A.ds.prototype
B.aG=new A.fA(!1,127)
B.N=new A.e(-1,0,0)
B.O=new A.aI(null,null,null,B.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.c=new A.P(1,1,1,1)
B.M=new A.e(1,-1,0)
B.D=new A.aI(B.c,!1,null,B.M,null,!1,null,null,null,null,null,null,null,null,0.5,0.1,null,null,null,2)
B.ac=new A.P(0.73333,0.73333,0.73333,1)
B.o=new A.e(0,-1,0)
B.b7=A.a(s([0]),t.n)
B.P=new A.aI(B.ac,!0,!1,B.o,1,!0,0.1,1,null,B.b7,!1,null,2,0,0.75,0.25,0.25,0.25,null,4)
B.n=new A.aI(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.a5=new A.aI(null,null,null,B.M,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.E=new A.ca(A.p7(),t.id)
B.a6=new A.ca(A.p7(),A.aO("ca<h>"))
B.Q=new A.ca(A.tO(),t.id)
B.aT=new A.fz()
B.e8=new A.fD()
B.aU=new A.fC()
B.a7=new A.e0(A.aO("e0<0&>"))
B.a8=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.aV=function() {
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
B.b_=function(getTagFallback) {
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
B.aW=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.aX=function(hooks) {
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
B.aZ=function(hooks) {
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
B.aY=function(hooks) {
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
B.a9=function(hooks) { return hooks; }

B.b0=new A.hn()
B.m=new A.kr()
B.y=new A.hW()
B.k=new A.io()
B.b1=new A.is()
B.q=new A.P(0,0,0,0)
B.ab=new A.P(0,0,0,1)
B.t=new A.P(1,1,0,1)
B.z=new A.P(0.98824,0.38431,0.33333,1)
B.A=new A.P(0.51373,0.75686,0.40392,1)
B.b3=new A.P(1,0.52549,0.18431,1)
B.F=new A.bt("mouseMovedEvent")
B.B=new A.bt("mousePressedEvent")
B.u=new A.bt("mouseReleasedEvent")
B.C=new A.bt("mouseDraggedEvent")
B.R=new A.bt("keyPressedEvent")
B.S=new A.bt("keyReleasedEvent")
B.G=A.a(s([0,0,32776,33792,1,10240,0,0]),t.t)
B.as=new A.o("http://www.w3.org/1999/xhtml","applet",t.w)
B.au=new A.o("http://www.w3.org/1999/xhtml","caption",t.w)
B.a1=new A.o("http://www.w3.org/1999/xhtml","html",t.w)
B.ax=new A.o("http://www.w3.org/1999/xhtml","marquee",t.w)
B.aB=new A.o("http://www.w3.org/1999/xhtml","object",t.w)
B.a_=new A.o("http://www.w3.org/1999/xhtml","table",t.w)
B.aw=new A.o("http://www.w3.org/1999/xhtml","td",t.w)
B.aq=new A.o("http://www.w3.org/1999/xhtml","th",t.w)
B.ay=new A.o("http://www.w3.org/1998/Math/MathML","mi",t.w)
B.at=new A.o("http://www.w3.org/1998/Math/MathML","mo",t.w)
B.aA=new A.o("http://www.w3.org/1998/Math/MathML","mn",t.w)
B.av=new A.o("http://www.w3.org/1998/Math/MathML","ms",t.w)
B.ar=new A.o("http://www.w3.org/1998/Math/MathML","mtext",t.w)
B.dv=new A.o("http://www.w3.org/1998/Math/MathML","annotation-xml",t.w)
B.a0=new A.o("http://www.w3.org/2000/svg","foreignObject",t.w)
B.az=new A.o("http://www.w3.org/2000/svg","desc",t.w)
B.ap=new A.o("http://www.w3.org/2000/svg","title",t.w)
B.T=A.a(s([B.as,B.au,B.a1,B.ax,B.aB,B.a_,B.aw,B.aq,B.ay,B.at,B.aA,B.av,B.ar,B.dv,B.a0,B.az,B.ap]),t.m)
B.dI=new A.o("http://www.w3.org/1999/xhtml","button",t.nz)
B.b9=A.a(s([B.dI]),t.eH)
B.ba=A.a(s(["b","big","blockquote","body","br","center","code","dd","div","dl","dt","em","embed","h1","h2","h3","h4","h5","h6","head","hr","i","img","li","listing","menu","meta","nobr","ol","p","pre","ruby","s","small","span","strike","strong","sub","sup","table","tt","u","ul","var"]),t.s)
B.H=A.a(s(["h1","h2","h3","h4","h5","h6"]),t.s)
B.U=A.a(s(["dd","dt","li","option","optgroup","p","rp","rt"]),t.s)
B.I=A.a(s([0,0,65490,45055,65535,34815,65534,18431]),t.t)
B.bd=A.a(s(["+//silmaril//dtd html pro v0r11 19970101//","-//advasoft ltd//dtd html 3.0 aswedit + extensions//","-//as//dtd html 3.0 aswedit + extensions//","-//ietf//dtd html 2.0 level 1//","-//ietf//dtd html 2.0 level 2//","-//ietf//dtd html 2.0 strict level 1//","-//ietf//dtd html 2.0 strict level 2//","-//ietf//dtd html 2.0 strict//","-//ietf//dtd html 2.0//","-//ietf//dtd html 2.1e//","-//ietf//dtd html 3.0//","-//ietf//dtd html 3.2 final//","-//ietf//dtd html 3.2//","-//ietf//dtd html 3//","-//ietf//dtd html level 0//","-//ietf//dtd html level 1//","-//ietf//dtd html level 2//","-//ietf//dtd html level 3//","-//ietf//dtd html strict level 0//","-//ietf//dtd html strict level 1//","-//ietf//dtd html strict level 2//","-//ietf//dtd html strict level 3//","-//ietf//dtd html strict//","-//ietf//dtd html//","-//metrius//dtd metrius presentational//","-//microsoft//dtd internet explorer 2.0 html strict//","-//microsoft//dtd internet explorer 2.0 html//","-//microsoft//dtd internet explorer 2.0 tables//","-//microsoft//dtd internet explorer 3.0 html strict//","-//microsoft//dtd internet explorer 3.0 html//","-//microsoft//dtd internet explorer 3.0 tables//","-//netscape comm. corp.//dtd html//","-//netscape comm. corp.//dtd strict html//","-//o'reilly and associates//dtd html 2.0//","-//o'reilly and associates//dtd html extended 1.0//","-//o'reilly and associates//dtd html extended relaxed 1.0//","-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//","-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//","-//spyglass//dtd html 2.0 extended//","-//sq//dtd html 2.0 hotmetal + extensions//","-//sun microsystems corp.//dtd hotjava html//","-//sun microsystems corp.//dtd hotjava strict html//","-//w3c//dtd html 3 1995-03-24//","-//w3c//dtd html 3.2 draft//","-//w3c//dtd html 3.2 final//","-//w3c//dtd html 3.2//","-//w3c//dtd html 3.2s draft//","-//w3c//dtd html 4.0 frameset//","-//w3c//dtd html 4.0 transitional//","-//w3c//dtd html experimental 19960712//","-//w3c//dtd html experimental 970421//","-//w3c//dtd w3 html//","-//w3o//dtd w3 html 3.0//","-//webtechs//dtd mozilla html 2.0//","-//webtechs//dtd mozilla html//"]),t.s)
B.J=A.a(s([0,0,26624,1023,65534,2047,65534,2047]),t.t)
B.be=A.a(s(["uU","bB","lL","iI","cC"]),t.s)
B.bf=A.a(s([11,65534,65535,131070,131071,196606,196607,262142,262143,327678,327679,393214,393215,458750,458751,524286,524287,589822,589823,655358,655359,720894,720895,786430,786431,851966,851967,917502,917503,983038,983039,1048574,1048575,1114110,1114111]),t.t)
B.V=A.a(s(["table","tbody","tfoot","thead","tr"]),t.s)
B.cP=new A.o("http://www.w3.org/1999/xhtml","ol",t.nz)
B.di=new A.o("http://www.w3.org/1999/xhtml","ul",t.nz)
B.bg=A.a(s([B.cP,B.di]),t.eH)
B.i=A.a(s(["unit","value"]),t.s)
B.bJ=new A.r(2,{unit:600,value:"em"},B.i,t.R)
B.c_=new A.r(2,{unit:601,value:"ex"},B.i,t.R)
B.c3=new A.r(2,{unit:602,value:"px"},B.i,t.R)
B.bV=new A.r(2,{unit:603,value:"cm"},B.i,t.R)
B.bY=new A.r(2,{unit:604,value:"mm"},B.i,t.R)
B.bT=new A.r(2,{unit:605,value:"in"},B.i,t.R)
B.bI=new A.r(2,{unit:606,value:"pt"},B.i,t.R)
B.c6=new A.r(2,{unit:607,value:"pc"},B.i,t.R)
B.bS=new A.r(2,{unit:608,value:"deg"},B.i,t.R)
B.c2=new A.r(2,{unit:609,value:"rad"},B.i,t.R)
B.bM=new A.r(2,{unit:610,value:"grad"},B.i,t.R)
B.c0=new A.r(2,{unit:611,value:"turn"},B.i,t.R)
B.bN=new A.r(2,{unit:612,value:"ms"},B.i,t.R)
B.bZ=new A.r(2,{unit:613,value:"s"},B.i,t.R)
B.bP=new A.r(2,{unit:614,value:"hz"},B.i,t.R)
B.c4=new A.r(2,{unit:615,value:"khz"},B.i,t.R)
B.bR=new A.r(2,{unit:617,value:"fr"},B.i,t.R)
B.bL=new A.r(2,{unit:618,value:"dpi"},B.i,t.R)
B.bO=new A.r(2,{unit:619,value:"dpcm"},B.i,t.R)
B.bU=new A.r(2,{unit:620,value:"dppx"},B.i,t.R)
B.bK=new A.r(2,{unit:621,value:"ch"},B.i,t.R)
B.bX=new A.r(2,{unit:622,value:"rem"},B.i,t.R)
B.c1=new A.r(2,{unit:623,value:"vw"},B.i,t.R)
B.bW=new A.r(2,{unit:624,value:"vh"},B.i,t.R)
B.c5=new A.r(2,{unit:625,value:"vmin"},B.i,t.R)
B.bQ=new A.r(2,{unit:626,value:"vmax"},B.i,t.R)
B.ad=A.a(s([B.bJ,B.c_,B.c3,B.bV,B.bY,B.bT,B.bI,B.c6,B.bS,B.c2,B.bM,B.c0,B.bN,B.bZ,B.bP,B.c4,B.bR,B.bL,B.bO,B.bU,B.bK,B.bX,B.c1,B.bW,B.c5,B.bQ]),t.bV)
B.ae=A.a(s(["-//w3c//dtd html 4.01 frameset//","-//w3c//dtd html 4.01 transitional//"]),t.s)
B.bj=A.a(s(["address","div","p"]),t.s)
B.af=A.a(s([B.ay,B.at,B.aA,B.av,B.ar]),t.a8)
B.f=A.a(s(["type","value"]),t.s)
B.cu=new A.r(2,{type:670,value:"top-left-corner"},B.f,t.R)
B.co=new A.r(2,{type:671,value:"top-left"},B.f,t.R)
B.cC=new A.r(2,{type:672,value:"top-center"},B.f,t.R)
B.cD=new A.r(2,{type:673,value:"top-right"},B.f,t.R)
B.ca=new A.r(2,{type:674,value:"top-right-corner"},B.f,t.R)
B.ch=new A.r(2,{type:675,value:"bottom-left-corner"},B.f,t.R)
B.cs=new A.r(2,{type:676,value:"bottom-left"},B.f,t.R)
B.cB=new A.r(2,{type:677,value:"bottom-center"},B.f,t.R)
B.cc=new A.r(2,{type:678,value:"bottom-right"},B.f,t.R)
B.cj=new A.r(2,{type:679,value:"bottom-right-corner"},B.f,t.R)
B.cA=new A.r(2,{type:680,value:"left-top"},B.f,t.R)
B.cl=new A.r(2,{type:681,value:"left-middle"},B.f,t.R)
B.ci=new A.r(2,{type:682,value:"right-bottom"},B.f,t.R)
B.ce=new A.r(2,{type:683,value:"right-top"},B.f,t.R)
B.cw=new A.r(2,{type:684,value:"right-middle"},B.f,t.R)
B.cx=new A.r(2,{type:685,value:"right-bottom"},B.f,t.R)
B.bk=A.a(s([B.cu,B.co,B.cC,B.cD,B.ca,B.ch,B.cs,B.cB,B.cc,B.cj,B.cA,B.cl,B.ci,B.ce,B.cw,B.cx]),t.bV)
B.ah=A.a(s(["0","1","2","3","4","5","6","7","8","9"]),t.s)
B.bl=A.a(s([]),t.r)
B.W=A.a(s([]),t.eH)
B.v=A.a(s([]),t.s)
B.bo=A.a(s([0,0,32722,12287,65534,34815,65534,18431]),t.t)
B.bp=A.a(s(["oO","cC","tT","yY","pP","eE"]),t.s)
B.bq=A.a(s([B.F,B.B,B.u,B.C,B.R,B.S]),A.aO("z<bt>"))
B.br=A.a(s(["-//w3o//dtd w3 html strict 3.0//en//","-/w3c/dtd html 4.0 transitional/en","html"]),t.s)
B.cI=new A.r(2,{type:641,value:"import"},B.f,t.R)
B.cr=new A.r(2,{type:642,value:"media"},B.f,t.R)
B.cp=new A.r(2,{type:643,value:"page"},B.f,t.R)
B.cG=new A.r(2,{type:644,value:"charset"},B.f,t.R)
B.cv=new A.r(2,{type:645,value:"stylet"},B.f,t.R)
B.cd=new A.r(2,{type:646,value:"keyframes"},B.f,t.R)
B.cy=new A.r(2,{type:647,value:"-webkit-keyframes"},B.f,t.R)
B.cH=new A.r(2,{type:648,value:"-moz-keyframes"},B.f,t.R)
B.ct=new A.r(2,{type:649,value:"-ms-keyframes"},B.f,t.R)
B.ck=new A.r(2,{type:650,value:"-o-keyframes"},B.f,t.R)
B.cK=new A.r(2,{type:651,value:"font-face"},B.f,t.R)
B.cn=new A.r(2,{type:652,value:"namespace"},B.f,t.R)
B.cq=new A.r(2,{type:653,value:"host"},B.f,t.R)
B.cb=new A.r(2,{type:654,value:"mixin"},B.f,t.R)
B.cz=new A.r(2,{type:655,value:"include"},B.f,t.R)
B.cF=new A.r(2,{type:656,value:"content"},B.f,t.R)
B.cg=new A.r(2,{type:657,value:"extend"},B.f,t.R)
B.cE=new A.r(2,{type:658,value:"-moz-document"},B.f,t.R)
B.cf=new A.r(2,{type:659,value:"supports"},B.f,t.R)
B.cm=new A.r(2,{type:660,value:"viewport"},B.f,t.R)
B.cJ=new A.r(2,{type:661,value:"-ms-viewport"},B.f,t.R)
B.bs=A.a(s([B.cI,B.cr,B.cp,B.cG,B.cv,B.cd,B.cy,B.cH,B.ct,B.ck,B.cK,B.cn,B.cq,B.cb,B.cz,B.cF,B.cg,B.cE,B.cf,B.cm,B.cJ]),t.bV)
B.bt=A.a(s(["yY","sS","tT","eE","mM"]),t.s)
B.d5=new A.o("http://www.w3.org/1998/Math/MathML","annotaion-xml",t.w)
B.bw=A.a(s([B.d5,B.a0,B.az,B.ap]),t.a8)
B.K=A.a(s([0,0,24576,1023,65534,34815,65534,18431]),t.t)
B.bx=A.a(s(["-//w3c//dtd xhtml 1.0 frameset//","-//w3c//dtd xhtml 1.0 transitional//"]),t.s)
B.by=A.a(s(["pre","listing","textarea"]),t.s)
B.aj=A.a(s([0,0,32754,11263,65534,34815,65534,18431]),t.t)
B.ak=A.a(s([0,0,65490,12287,65535,34815,65534,18431]),t.t)
B.bz=A.a(s(["C","D","A","T","A","["]),t.s)
B.cT=new A.o("http://www.w3.org/1999/xhtml","optgroup",t.w)
B.dZ=new A.o("http://www.w3.org/1999/xhtml","option",t.w)
B.bA=A.a(s([B.cT,B.dZ]),t.m)
B.bB=A.a(s(["tbody","tfoot","thead","html"]),t.s)
B.bE=A.a(s([B.a1,B.a_]),t.m)
B.dN=new A.o("http://www.w3.org/1999/xhtml","address",t.w)
B.cV=new A.o("http://www.w3.org/1999/xhtml","area",t.w)
B.e1=new A.o("http://www.w3.org/1999/xhtml","article",t.w)
B.dl=new A.o("http://www.w3.org/1999/xhtml","aside",t.w)
B.dt=new A.o("http://www.w3.org/1999/xhtml","base",t.w)
B.db=new A.o("http://www.w3.org/1999/xhtml","basefont",t.w)
B.dd=new A.o("http://www.w3.org/1999/xhtml","bgsound",t.w)
B.dF=new A.o("http://www.w3.org/1999/xhtml","blockquote",t.w)
B.da=new A.o("http://www.w3.org/1999/xhtml","body",t.w)
B.dk=new A.o("http://www.w3.org/1999/xhtml","br",t.w)
B.dJ=new A.o("http://www.w3.org/1999/xhtml","button",t.w)
B.dL=new A.o("http://www.w3.org/1999/xhtml","center",t.w)
B.cY=new A.o("http://www.w3.org/1999/xhtml","col",t.w)
B.dQ=new A.o("http://www.w3.org/1999/xhtml","colgroup",t.w)
B.dn=new A.o("http://www.w3.org/1999/xhtml","command",t.w)
B.dV=new A.o("http://www.w3.org/1999/xhtml","dd",t.w)
B.dw=new A.o("http://www.w3.org/1999/xhtml","details",t.w)
B.d6=new A.o("http://www.w3.org/1999/xhtml","dir",t.w)
B.d4=new A.o("http://www.w3.org/1999/xhtml","div",t.w)
B.dT=new A.o("http://www.w3.org/1999/xhtml","dl",t.w)
B.dp=new A.o("http://www.w3.org/1999/xhtml","dt",t.w)
B.cX=new A.o("http://www.w3.org/1999/xhtml","embed",t.w)
B.cS=new A.o("http://www.w3.org/1999/xhtml","fieldset",t.w)
B.dD=new A.o("http://www.w3.org/1999/xhtml","figure",t.w)
B.dU=new A.o("http://www.w3.org/1999/xhtml","footer",t.w)
B.d8=new A.o("http://www.w3.org/1999/xhtml","form",t.w)
B.dq=new A.o("http://www.w3.org/1999/xhtml","frame",t.w)
B.cU=new A.o("http://www.w3.org/1999/xhtml","frameset",t.w)
B.d0=new A.o("http://www.w3.org/1999/xhtml","h1",t.w)
B.e0=new A.o("http://www.w3.org/1999/xhtml","h2",t.w)
B.cW=new A.o("http://www.w3.org/1999/xhtml","h3",t.w)
B.dx=new A.o("http://www.w3.org/1999/xhtml","h4",t.w)
B.dY=new A.o("http://www.w3.org/1999/xhtml","h5",t.w)
B.dC=new A.o("http://www.w3.org/1999/xhtml","h6",t.w)
B.de=new A.o("http://www.w3.org/1999/xhtml","head",t.w)
B.e_=new A.o("http://www.w3.org/1999/xhtml","header",t.w)
B.dm=new A.o("http://www.w3.org/1999/xhtml","hr",t.w)
B.dO=new A.o("http://www.w3.org/1999/xhtml","iframe",t.w)
B.dE=new A.o("http://www.w3.org/1999/xhtml","image",t.w)
B.dr=new A.o("http://www.w3.org/1999/xhtml","img",t.w)
B.dz=new A.o("http://www.w3.org/1999/xhtml","input",t.w)
B.dM=new A.o("http://www.w3.org/1999/xhtml","isindex",t.w)
B.dh=new A.o("http://www.w3.org/1999/xhtml","li",t.w)
B.dg=new A.o("http://www.w3.org/1999/xhtml","link",t.w)
B.dK=new A.o("http://www.w3.org/1999/xhtml","listing",t.w)
B.d1=new A.o("http://www.w3.org/1999/xhtml","men",t.w)
B.dG=new A.o("http://www.w3.org/1999/xhtml","meta",t.w)
B.df=new A.o("http://www.w3.org/1999/xhtml","nav",t.w)
B.dW=new A.o("http://www.w3.org/1999/xhtml","noembed",t.w)
B.du=new A.o("http://www.w3.org/1999/xhtml","noframes",t.w)
B.ds=new A.o("http://www.w3.org/1999/xhtml","noscript",t.w)
B.cQ=new A.o("http://www.w3.org/1999/xhtml","ol",t.w)
B.dP=new A.o("http://www.w3.org/1999/xhtml","p",t.w)
B.cZ=new A.o("http://www.w3.org/1999/xhtml","param",t.w)
B.dA=new A.o("http://www.w3.org/1999/xhtml","plaintext",t.w)
B.cR=new A.o("http://www.w3.org/1999/xhtml","pre",t.w)
B.dy=new A.o("http://www.w3.org/1999/xhtml","script",t.w)
B.dc=new A.o("http://www.w3.org/1999/xhtml","section",t.w)
B.d7=new A.o("http://www.w3.org/1999/xhtml","select",t.w)
B.d2=new A.o("http://www.w3.org/1999/xhtml","style",t.w)
B.dR=new A.o("http://www.w3.org/1999/xhtml","tbody",t.w)
B.d3=new A.o("http://www.w3.org/1999/xhtml","textarea",t.w)
B.dH=new A.o("http://www.w3.org/1999/xhtml","tfoot",t.w)
B.d9=new A.o("http://www.w3.org/1999/xhtml","thead",t.w)
B.dB=new A.o("http://www.w3.org/1999/xhtml","title",t.w)
B.d_=new A.o("http://www.w3.org/1999/xhtml","tr",t.w)
B.dj=new A.o("http://www.w3.org/1999/xhtml","ul",t.w)
B.dX=new A.o("http://www.w3.org/1999/xhtml","wbr",t.w)
B.dS=new A.o("http://www.w3.org/1999/xhtml","xmp",t.w)
B.X=A.a(s([B.dN,B.as,B.cV,B.e1,B.dl,B.dt,B.db,B.dd,B.dF,B.da,B.dk,B.dJ,B.au,B.dL,B.cY,B.dQ,B.dn,B.dV,B.dw,B.d6,B.d4,B.dT,B.dp,B.cX,B.cS,B.dD,B.dU,B.d8,B.dq,B.cU,B.d0,B.e0,B.cW,B.dx,B.dY,B.dC,B.de,B.e_,B.dm,B.a1,B.dO,B.dE,B.dr,B.dz,B.dM,B.dh,B.dg,B.dK,B.ax,B.d1,B.dG,B.df,B.dW,B.du,B.ds,B.aB,B.cQ,B.dP,B.cZ,B.dA,B.cR,B.dy,B.dc,B.d7,B.d2,B.a_,B.dR,B.aw,B.d3,B.dH,B.aq,B.d9,B.dB,B.d_,B.dj,B.dX,B.dS,B.a0]),t.a8)
B.b8=A.a(s(["AElig","AElig;","AMP","AMP;","Aacute","Aacute;","Abreve;","Acirc","Acirc;","Acy;","Afr;","Agrave","Agrave;","Alpha;","Amacr;","And;","Aogon;","Aopf;","ApplyFunction;","Aring","Aring;","Ascr;","Assign;","Atilde","Atilde;","Auml","Auml;","Backslash;","Barv;","Barwed;","Bcy;","Because;","Bernoullis;","Beta;","Bfr;","Bopf;","Breve;","Bscr;","Bumpeq;","CHcy;","COPY","COPY;","Cacute;","Cap;","CapitalDifferentialD;","Cayleys;","Ccaron;","Ccedil","Ccedil;","Ccirc;","Cconint;","Cdot;","Cedilla;","CenterDot;","Cfr;","Chi;","CircleDot;","CircleMinus;","CirclePlus;","CircleTimes;","ClockwiseContourIntegral;","CloseCurlyDoubleQuote;","CloseCurlyQuote;","Colon;","Colone;","Congruent;","Conint;","ContourIntegral;","Copf;","Coproduct;","CounterClockwiseContourIntegral;","Cross;","Cscr;","Cup;","CupCap;","DD;","DDotrahd;","DJcy;","DScy;","DZcy;","Dagger;","Darr;","Dashv;","Dcaron;","Dcy;","Del;","Delta;","Dfr;","DiacriticalAcute;","DiacriticalDot;","DiacriticalDoubleAcute;","DiacriticalGrave;","DiacriticalTilde;","Diamond;","DifferentialD;","Dopf;","Dot;","DotDot;","DotEqual;","DoubleContourIntegral;","DoubleDot;","DoubleDownArrow;","DoubleLeftArrow;","DoubleLeftRightArrow;","DoubleLeftTee;","DoubleLongLeftArrow;","DoubleLongLeftRightArrow;","DoubleLongRightArrow;","DoubleRightArrow;","DoubleRightTee;","DoubleUpArrow;","DoubleUpDownArrow;","DoubleVerticalBar;","DownArrow;","DownArrowBar;","DownArrowUpArrow;","DownBreve;","DownLeftRightVector;","DownLeftTeeVector;","DownLeftVector;","DownLeftVectorBar;","DownRightTeeVector;","DownRightVector;","DownRightVectorBar;","DownTee;","DownTeeArrow;","Downarrow;","Dscr;","Dstrok;","ENG;","ETH","ETH;","Eacute","Eacute;","Ecaron;","Ecirc","Ecirc;","Ecy;","Edot;","Efr;","Egrave","Egrave;","Element;","Emacr;","EmptySmallSquare;","EmptyVerySmallSquare;","Eogon;","Eopf;","Epsilon;","Equal;","EqualTilde;","Equilibrium;","Escr;","Esim;","Eta;","Euml","Euml;","Exists;","ExponentialE;","Fcy;","Ffr;","FilledSmallSquare;","FilledVerySmallSquare;","Fopf;","ForAll;","Fouriertrf;","Fscr;","GJcy;","GT","GT;","Gamma;","Gammad;","Gbreve;","Gcedil;","Gcirc;","Gcy;","Gdot;","Gfr;","Gg;","Gopf;","GreaterEqual;","GreaterEqualLess;","GreaterFullEqual;","GreaterGreater;","GreaterLess;","GreaterSlantEqual;","GreaterTilde;","Gscr;","Gt;","HARDcy;","Hacek;","Hat;","Hcirc;","Hfr;","HilbertSpace;","Hopf;","HorizontalLine;","Hscr;","Hstrok;","HumpDownHump;","HumpEqual;","IEcy;","IJlig;","IOcy;","Iacute","Iacute;","Icirc","Icirc;","Icy;","Idot;","Ifr;","Igrave","Igrave;","Im;","Imacr;","ImaginaryI;","Implies;","Int;","Integral;","Intersection;","InvisibleComma;","InvisibleTimes;","Iogon;","Iopf;","Iota;","Iscr;","Itilde;","Iukcy;","Iuml","Iuml;","Jcirc;","Jcy;","Jfr;","Jopf;","Jscr;","Jsercy;","Jukcy;","KHcy;","KJcy;","Kappa;","Kcedil;","Kcy;","Kfr;","Kopf;","Kscr;","LJcy;","LT","LT;","Lacute;","Lambda;","Lang;","Laplacetrf;","Larr;","Lcaron;","Lcedil;","Lcy;","LeftAngleBracket;","LeftArrow;","LeftArrowBar;","LeftArrowRightArrow;","LeftCeiling;","LeftDoubleBracket;","LeftDownTeeVector;","LeftDownVector;","LeftDownVectorBar;","LeftFloor;","LeftRightArrow;","LeftRightVector;","LeftTee;","LeftTeeArrow;","LeftTeeVector;","LeftTriangle;","LeftTriangleBar;","LeftTriangleEqual;","LeftUpDownVector;","LeftUpTeeVector;","LeftUpVector;","LeftUpVectorBar;","LeftVector;","LeftVectorBar;","Leftarrow;","Leftrightarrow;","LessEqualGreater;","LessFullEqual;","LessGreater;","LessLess;","LessSlantEqual;","LessTilde;","Lfr;","Ll;","Lleftarrow;","Lmidot;","LongLeftArrow;","LongLeftRightArrow;","LongRightArrow;","Longleftarrow;","Longleftrightarrow;","Longrightarrow;","Lopf;","LowerLeftArrow;","LowerRightArrow;","Lscr;","Lsh;","Lstrok;","Lt;","Map;","Mcy;","MediumSpace;","Mellintrf;","Mfr;","MinusPlus;","Mopf;","Mscr;","Mu;","NJcy;","Nacute;","Ncaron;","Ncedil;","Ncy;","NegativeMediumSpace;","NegativeThickSpace;","NegativeThinSpace;","NegativeVeryThinSpace;","NestedGreaterGreater;","NestedLessLess;","NewLine;","Nfr;","NoBreak;","NonBreakingSpace;","Nopf;","Not;","NotCongruent;","NotCupCap;","NotDoubleVerticalBar;","NotElement;","NotEqual;","NotEqualTilde;","NotExists;","NotGreater;","NotGreaterEqual;","NotGreaterFullEqual;","NotGreaterGreater;","NotGreaterLess;","NotGreaterSlantEqual;","NotGreaterTilde;","NotHumpDownHump;","NotHumpEqual;","NotLeftTriangle;","NotLeftTriangleBar;","NotLeftTriangleEqual;","NotLess;","NotLessEqual;","NotLessGreater;","NotLessLess;","NotLessSlantEqual;","NotLessTilde;","NotNestedGreaterGreater;","NotNestedLessLess;","NotPrecedes;","NotPrecedesEqual;","NotPrecedesSlantEqual;","NotReverseElement;","NotRightTriangle;","NotRightTriangleBar;","NotRightTriangleEqual;","NotSquareSubset;","NotSquareSubsetEqual;","NotSquareSuperset;","NotSquareSupersetEqual;","NotSubset;","NotSubsetEqual;","NotSucceeds;","NotSucceedsEqual;","NotSucceedsSlantEqual;","NotSucceedsTilde;","NotSuperset;","NotSupersetEqual;","NotTilde;","NotTildeEqual;","NotTildeFullEqual;","NotTildeTilde;","NotVerticalBar;","Nscr;","Ntilde","Ntilde;","Nu;","OElig;","Oacute","Oacute;","Ocirc","Ocirc;","Ocy;","Odblac;","Ofr;","Ograve","Ograve;","Omacr;","Omega;","Omicron;","Oopf;","OpenCurlyDoubleQuote;","OpenCurlyQuote;","Or;","Oscr;","Oslash","Oslash;","Otilde","Otilde;","Otimes;","Ouml","Ouml;","OverBar;","OverBrace;","OverBracket;","OverParenthesis;","PartialD;","Pcy;","Pfr;","Phi;","Pi;","PlusMinus;","Poincareplane;","Popf;","Pr;","Precedes;","PrecedesEqual;","PrecedesSlantEqual;","PrecedesTilde;","Prime;","Product;","Proportion;","Proportional;","Pscr;","Psi;","QUOT","QUOT;","Qfr;","Qopf;","Qscr;","RBarr;","REG","REG;","Racute;","Rang;","Rarr;","Rarrtl;","Rcaron;","Rcedil;","Rcy;","Re;","ReverseElement;","ReverseEquilibrium;","ReverseUpEquilibrium;","Rfr;","Rho;","RightAngleBracket;","RightArrow;","RightArrowBar;","RightArrowLeftArrow;","RightCeiling;","RightDoubleBracket;","RightDownTeeVector;","RightDownVector;","RightDownVectorBar;","RightFloor;","RightTee;","RightTeeArrow;","RightTeeVector;","RightTriangle;","RightTriangleBar;","RightTriangleEqual;","RightUpDownVector;","RightUpTeeVector;","RightUpVector;","RightUpVectorBar;","RightVector;","RightVectorBar;","Rightarrow;","Ropf;","RoundImplies;","Rrightarrow;","Rscr;","Rsh;","RuleDelayed;","SHCHcy;","SHcy;","SOFTcy;","Sacute;","Sc;","Scaron;","Scedil;","Scirc;","Scy;","Sfr;","ShortDownArrow;","ShortLeftArrow;","ShortRightArrow;","ShortUpArrow;","Sigma;","SmallCircle;","Sopf;","Sqrt;","Square;","SquareIntersection;","SquareSubset;","SquareSubsetEqual;","SquareSuperset;","SquareSupersetEqual;","SquareUnion;","Sscr;","Star;","Sub;","Subset;","SubsetEqual;","Succeeds;","SucceedsEqual;","SucceedsSlantEqual;","SucceedsTilde;","SuchThat;","Sum;","Sup;","Superset;","SupersetEqual;","Supset;","THORN","THORN;","TRADE;","TSHcy;","TScy;","Tab;","Tau;","Tcaron;","Tcedil;","Tcy;","Tfr;","Therefore;","Theta;","ThickSpace;","ThinSpace;","Tilde;","TildeEqual;","TildeFullEqual;","TildeTilde;","Topf;","TripleDot;","Tscr;","Tstrok;","Uacute","Uacute;","Uarr;","Uarrocir;","Ubrcy;","Ubreve;","Ucirc","Ucirc;","Ucy;","Udblac;","Ufr;","Ugrave","Ugrave;","Umacr;","UnderBar;","UnderBrace;","UnderBracket;","UnderParenthesis;","Union;","UnionPlus;","Uogon;","Uopf;","UpArrow;","UpArrowBar;","UpArrowDownArrow;","UpDownArrow;","UpEquilibrium;","UpTee;","UpTeeArrow;","Uparrow;","Updownarrow;","UpperLeftArrow;","UpperRightArrow;","Upsi;","Upsilon;","Uring;","Uscr;","Utilde;","Uuml","Uuml;","VDash;","Vbar;","Vcy;","Vdash;","Vdashl;","Vee;","Verbar;","Vert;","VerticalBar;","VerticalLine;","VerticalSeparator;","VerticalTilde;","VeryThinSpace;","Vfr;","Vopf;","Vscr;","Vvdash;","Wcirc;","Wedge;","Wfr;","Wopf;","Wscr;","Xfr;","Xi;","Xopf;","Xscr;","YAcy;","YIcy;","YUcy;","Yacute","Yacute;","Ycirc;","Ycy;","Yfr;","Yopf;","Yscr;","Yuml;","ZHcy;","Zacute;","Zcaron;","Zcy;","Zdot;","ZeroWidthSpace;","Zeta;","Zfr;","Zopf;","Zscr;","aacute","aacute;","abreve;","ac;","acE;","acd;","acirc","acirc;","acute","acute;","acy;","aelig","aelig;","af;","afr;","agrave","agrave;","alefsym;","aleph;","alpha;","amacr;","amalg;","amp","amp;","and;","andand;","andd;","andslope;","andv;","ang;","ange;","angle;","angmsd;","angmsdaa;","angmsdab;","angmsdac;","angmsdad;","angmsdae;","angmsdaf;","angmsdag;","angmsdah;","angrt;","angrtvb;","angrtvbd;","angsph;","angst;","angzarr;","aogon;","aopf;","ap;","apE;","apacir;","ape;","apid;","apos;","approx;","approxeq;","aring","aring;","ascr;","ast;","asymp;","asympeq;","atilde","atilde;","auml","auml;","awconint;","awint;","bNot;","backcong;","backepsilon;","backprime;","backsim;","backsimeq;","barvee;","barwed;","barwedge;","bbrk;","bbrktbrk;","bcong;","bcy;","bdquo;","becaus;","because;","bemptyv;","bepsi;","bernou;","beta;","beth;","between;","bfr;","bigcap;","bigcirc;","bigcup;","bigodot;","bigoplus;","bigotimes;","bigsqcup;","bigstar;","bigtriangledown;","bigtriangleup;","biguplus;","bigvee;","bigwedge;","bkarow;","blacklozenge;","blacksquare;","blacktriangle;","blacktriangledown;","blacktriangleleft;","blacktriangleright;","blank;","blk12;","blk14;","blk34;","block;","bne;","bnequiv;","bnot;","bopf;","bot;","bottom;","bowtie;","boxDL;","boxDR;","boxDl;","boxDr;","boxH;","boxHD;","boxHU;","boxHd;","boxHu;","boxUL;","boxUR;","boxUl;","boxUr;","boxV;","boxVH;","boxVL;","boxVR;","boxVh;","boxVl;","boxVr;","boxbox;","boxdL;","boxdR;","boxdl;","boxdr;","boxh;","boxhD;","boxhU;","boxhd;","boxhu;","boxminus;","boxplus;","boxtimes;","boxuL;","boxuR;","boxul;","boxur;","boxv;","boxvH;","boxvL;","boxvR;","boxvh;","boxvl;","boxvr;","bprime;","breve;","brvbar","brvbar;","bscr;","bsemi;","bsim;","bsime;","bsol;","bsolb;","bsolhsub;","bull;","bullet;","bump;","bumpE;","bumpe;","bumpeq;","cacute;","cap;","capand;","capbrcup;","capcap;","capcup;","capdot;","caps;","caret;","caron;","ccaps;","ccaron;","ccedil","ccedil;","ccirc;","ccups;","ccupssm;","cdot;","cedil","cedil;","cemptyv;","cent","cent;","centerdot;","cfr;","chcy;","check;","checkmark;","chi;","cir;","cirE;","circ;","circeq;","circlearrowleft;","circlearrowright;","circledR;","circledS;","circledast;","circledcirc;","circleddash;","cire;","cirfnint;","cirmid;","cirscir;","clubs;","clubsuit;","colon;","colone;","coloneq;","comma;","commat;","comp;","compfn;","complement;","complexes;","cong;","congdot;","conint;","copf;","coprod;","copy","copy;","copysr;","crarr;","cross;","cscr;","csub;","csube;","csup;","csupe;","ctdot;","cudarrl;","cudarrr;","cuepr;","cuesc;","cularr;","cularrp;","cup;","cupbrcap;","cupcap;","cupcup;","cupdot;","cupor;","cups;","curarr;","curarrm;","curlyeqprec;","curlyeqsucc;","curlyvee;","curlywedge;","curren","curren;","curvearrowleft;","curvearrowright;","cuvee;","cuwed;","cwconint;","cwint;","cylcty;","dArr;","dHar;","dagger;","daleth;","darr;","dash;","dashv;","dbkarow;","dblac;","dcaron;","dcy;","dd;","ddagger;","ddarr;","ddotseq;","deg","deg;","delta;","demptyv;","dfisht;","dfr;","dharl;","dharr;","diam;","diamond;","diamondsuit;","diams;","die;","digamma;","disin;","div;","divide","divide;","divideontimes;","divonx;","djcy;","dlcorn;","dlcrop;","dollar;","dopf;","dot;","doteq;","doteqdot;","dotminus;","dotplus;","dotsquare;","doublebarwedge;","downarrow;","downdownarrows;","downharpoonleft;","downharpoonright;","drbkarow;","drcorn;","drcrop;","dscr;","dscy;","dsol;","dstrok;","dtdot;","dtri;","dtrif;","duarr;","duhar;","dwangle;","dzcy;","dzigrarr;","eDDot;","eDot;","eacute","eacute;","easter;","ecaron;","ecir;","ecirc","ecirc;","ecolon;","ecy;","edot;","ee;","efDot;","efr;","eg;","egrave","egrave;","egs;","egsdot;","el;","elinters;","ell;","els;","elsdot;","emacr;","empty;","emptyset;","emptyv;","emsp13;","emsp14;","emsp;","eng;","ensp;","eogon;","eopf;","epar;","eparsl;","eplus;","epsi;","epsilon;","epsiv;","eqcirc;","eqcolon;","eqsim;","eqslantgtr;","eqslantless;","equals;","equest;","equiv;","equivDD;","eqvparsl;","erDot;","erarr;","escr;","esdot;","esim;","eta;","eth","eth;","euml","euml;","euro;","excl;","exist;","expectation;","exponentiale;","fallingdotseq;","fcy;","female;","ffilig;","fflig;","ffllig;","ffr;","filig;","fjlig;","flat;","fllig;","fltns;","fnof;","fopf;","forall;","fork;","forkv;","fpartint;","frac12","frac12;","frac13;","frac14","frac14;","frac15;","frac16;","frac18;","frac23;","frac25;","frac34","frac34;","frac35;","frac38;","frac45;","frac56;","frac58;","frac78;","frasl;","frown;","fscr;","gE;","gEl;","gacute;","gamma;","gammad;","gap;","gbreve;","gcirc;","gcy;","gdot;","ge;","gel;","geq;","geqq;","geqslant;","ges;","gescc;","gesdot;","gesdoto;","gesdotol;","gesl;","gesles;","gfr;","gg;","ggg;","gimel;","gjcy;","gl;","glE;","gla;","glj;","gnE;","gnap;","gnapprox;","gne;","gneq;","gneqq;","gnsim;","gopf;","grave;","gscr;","gsim;","gsime;","gsiml;","gt","gt;","gtcc;","gtcir;","gtdot;","gtlPar;","gtquest;","gtrapprox;","gtrarr;","gtrdot;","gtreqless;","gtreqqless;","gtrless;","gtrsim;","gvertneqq;","gvnE;","hArr;","hairsp;","half;","hamilt;","hardcy;","harr;","harrcir;","harrw;","hbar;","hcirc;","hearts;","heartsuit;","hellip;","hercon;","hfr;","hksearow;","hkswarow;","hoarr;","homtht;","hookleftarrow;","hookrightarrow;","hopf;","horbar;","hscr;","hslash;","hstrok;","hybull;","hyphen;","iacute","iacute;","ic;","icirc","icirc;","icy;","iecy;","iexcl","iexcl;","iff;","ifr;","igrave","igrave;","ii;","iiiint;","iiint;","iinfin;","iiota;","ijlig;","imacr;","image;","imagline;","imagpart;","imath;","imof;","imped;","in;","incare;","infin;","infintie;","inodot;","int;","intcal;","integers;","intercal;","intlarhk;","intprod;","iocy;","iogon;","iopf;","iota;","iprod;","iquest","iquest;","iscr;","isin;","isinE;","isindot;","isins;","isinsv;","isinv;","it;","itilde;","iukcy;","iuml","iuml;","jcirc;","jcy;","jfr;","jmath;","jopf;","jscr;","jsercy;","jukcy;","kappa;","kappav;","kcedil;","kcy;","kfr;","kgreen;","khcy;","kjcy;","kopf;","kscr;","lAarr;","lArr;","lAtail;","lBarr;","lE;","lEg;","lHar;","lacute;","laemptyv;","lagran;","lambda;","lang;","langd;","langle;","lap;","laquo","laquo;","larr;","larrb;","larrbfs;","larrfs;","larrhk;","larrlp;","larrpl;","larrsim;","larrtl;","lat;","latail;","late;","lates;","lbarr;","lbbrk;","lbrace;","lbrack;","lbrke;","lbrksld;","lbrkslu;","lcaron;","lcedil;","lceil;","lcub;","lcy;","ldca;","ldquo;","ldquor;","ldrdhar;","ldrushar;","ldsh;","le;","leftarrow;","leftarrowtail;","leftharpoondown;","leftharpoonup;","leftleftarrows;","leftrightarrow;","leftrightarrows;","leftrightharpoons;","leftrightsquigarrow;","leftthreetimes;","leg;","leq;","leqq;","leqslant;","les;","lescc;","lesdot;","lesdoto;","lesdotor;","lesg;","lesges;","lessapprox;","lessdot;","lesseqgtr;","lesseqqgtr;","lessgtr;","lesssim;","lfisht;","lfloor;","lfr;","lg;","lgE;","lhard;","lharu;","lharul;","lhblk;","ljcy;","ll;","llarr;","llcorner;","llhard;","lltri;","lmidot;","lmoust;","lmoustache;","lnE;","lnap;","lnapprox;","lne;","lneq;","lneqq;","lnsim;","loang;","loarr;","lobrk;","longleftarrow;","longleftrightarrow;","longmapsto;","longrightarrow;","looparrowleft;","looparrowright;","lopar;","lopf;","loplus;","lotimes;","lowast;","lowbar;","loz;","lozenge;","lozf;","lpar;","lparlt;","lrarr;","lrcorner;","lrhar;","lrhard;","lrm;","lrtri;","lsaquo;","lscr;","lsh;","lsim;","lsime;","lsimg;","lsqb;","lsquo;","lsquor;","lstrok;","lt","lt;","ltcc;","ltcir;","ltdot;","lthree;","ltimes;","ltlarr;","ltquest;","ltrPar;","ltri;","ltrie;","ltrif;","lurdshar;","luruhar;","lvertneqq;","lvnE;","mDDot;","macr","macr;","male;","malt;","maltese;","map;","mapsto;","mapstodown;","mapstoleft;","mapstoup;","marker;","mcomma;","mcy;","mdash;","measuredangle;","mfr;","mho;","micro","micro;","mid;","midast;","midcir;","middot","middot;","minus;","minusb;","minusd;","minusdu;","mlcp;","mldr;","mnplus;","models;","mopf;","mp;","mscr;","mstpos;","mu;","multimap;","mumap;","nGg;","nGt;","nGtv;","nLeftarrow;","nLeftrightarrow;","nLl;","nLt;","nLtv;","nRightarrow;","nVDash;","nVdash;","nabla;","nacute;","nang;","nap;","napE;","napid;","napos;","napprox;","natur;","natural;","naturals;","nbsp","nbsp;","nbump;","nbumpe;","ncap;","ncaron;","ncedil;","ncong;","ncongdot;","ncup;","ncy;","ndash;","ne;","neArr;","nearhk;","nearr;","nearrow;","nedot;","nequiv;","nesear;","nesim;","nexist;","nexists;","nfr;","ngE;","nge;","ngeq;","ngeqq;","ngeqslant;","nges;","ngsim;","ngt;","ngtr;","nhArr;","nharr;","nhpar;","ni;","nis;","nisd;","niv;","njcy;","nlArr;","nlE;","nlarr;","nldr;","nle;","nleftarrow;","nleftrightarrow;","nleq;","nleqq;","nleqslant;","nles;","nless;","nlsim;","nlt;","nltri;","nltrie;","nmid;","nopf;","not","not;","notin;","notinE;","notindot;","notinva;","notinvb;","notinvc;","notni;","notniva;","notnivb;","notnivc;","npar;","nparallel;","nparsl;","npart;","npolint;","npr;","nprcue;","npre;","nprec;","npreceq;","nrArr;","nrarr;","nrarrc;","nrarrw;","nrightarrow;","nrtri;","nrtrie;","nsc;","nsccue;","nsce;","nscr;","nshortmid;","nshortparallel;","nsim;","nsime;","nsimeq;","nsmid;","nspar;","nsqsube;","nsqsupe;","nsub;","nsubE;","nsube;","nsubset;","nsubseteq;","nsubseteqq;","nsucc;","nsucceq;","nsup;","nsupE;","nsupe;","nsupset;","nsupseteq;","nsupseteqq;","ntgl;","ntilde","ntilde;","ntlg;","ntriangleleft;","ntrianglelefteq;","ntriangleright;","ntrianglerighteq;","nu;","num;","numero;","numsp;","nvDash;","nvHarr;","nvap;","nvdash;","nvge;","nvgt;","nvinfin;","nvlArr;","nvle;","nvlt;","nvltrie;","nvrArr;","nvrtrie;","nvsim;","nwArr;","nwarhk;","nwarr;","nwarrow;","nwnear;","oS;","oacute","oacute;","oast;","ocir;","ocirc","ocirc;","ocy;","odash;","odblac;","odiv;","odot;","odsold;","oelig;","ofcir;","ofr;","ogon;","ograve","ograve;","ogt;","ohbar;","ohm;","oint;","olarr;","olcir;","olcross;","oline;","olt;","omacr;","omega;","omicron;","omid;","ominus;","oopf;","opar;","operp;","oplus;","or;","orarr;","ord;","order;","orderof;","ordf","ordf;","ordm","ordm;","origof;","oror;","orslope;","orv;","oscr;","oslash","oslash;","osol;","otilde","otilde;","otimes;","otimesas;","ouml","ouml;","ovbar;","par;","para","para;","parallel;","parsim;","parsl;","part;","pcy;","percnt;","period;","permil;","perp;","pertenk;","pfr;","phi;","phiv;","phmmat;","phone;","pi;","pitchfork;","piv;","planck;","planckh;","plankv;","plus;","plusacir;","plusb;","pluscir;","plusdo;","plusdu;","pluse;","plusmn","plusmn;","plussim;","plustwo;","pm;","pointint;","popf;","pound","pound;","pr;","prE;","prap;","prcue;","pre;","prec;","precapprox;","preccurlyeq;","preceq;","precnapprox;","precneqq;","precnsim;","precsim;","prime;","primes;","prnE;","prnap;","prnsim;","prod;","profalar;","profline;","profsurf;","prop;","propto;","prsim;","prurel;","pscr;","psi;","puncsp;","qfr;","qint;","qopf;","qprime;","qscr;","quaternions;","quatint;","quest;","questeq;","quot","quot;","rAarr;","rArr;","rAtail;","rBarr;","rHar;","race;","racute;","radic;","raemptyv;","rang;","rangd;","range;","rangle;","raquo","raquo;","rarr;","rarrap;","rarrb;","rarrbfs;","rarrc;","rarrfs;","rarrhk;","rarrlp;","rarrpl;","rarrsim;","rarrtl;","rarrw;","ratail;","ratio;","rationals;","rbarr;","rbbrk;","rbrace;","rbrack;","rbrke;","rbrksld;","rbrkslu;","rcaron;","rcedil;","rceil;","rcub;","rcy;","rdca;","rdldhar;","rdquo;","rdquor;","rdsh;","real;","realine;","realpart;","reals;","rect;","reg","reg;","rfisht;","rfloor;","rfr;","rhard;","rharu;","rharul;","rho;","rhov;","rightarrow;","rightarrowtail;","rightharpoondown;","rightharpoonup;","rightleftarrows;","rightleftharpoons;","rightrightarrows;","rightsquigarrow;","rightthreetimes;","ring;","risingdotseq;","rlarr;","rlhar;","rlm;","rmoust;","rmoustache;","rnmid;","roang;","roarr;","robrk;","ropar;","ropf;","roplus;","rotimes;","rpar;","rpargt;","rppolint;","rrarr;","rsaquo;","rscr;","rsh;","rsqb;","rsquo;","rsquor;","rthree;","rtimes;","rtri;","rtrie;","rtrif;","rtriltri;","ruluhar;","rx;","sacute;","sbquo;","sc;","scE;","scap;","scaron;","sccue;","sce;","scedil;","scirc;","scnE;","scnap;","scnsim;","scpolint;","scsim;","scy;","sdot;","sdotb;","sdote;","seArr;","searhk;","searr;","searrow;","sect","sect;","semi;","seswar;","setminus;","setmn;","sext;","sfr;","sfrown;","sharp;","shchcy;","shcy;","shortmid;","shortparallel;","shy","shy;","sigma;","sigmaf;","sigmav;","sim;","simdot;","sime;","simeq;","simg;","simgE;","siml;","simlE;","simne;","simplus;","simrarr;","slarr;","smallsetminus;","smashp;","smeparsl;","smid;","smile;","smt;","smte;","smtes;","softcy;","sol;","solb;","solbar;","sopf;","spades;","spadesuit;","spar;","sqcap;","sqcaps;","sqcup;","sqcups;","sqsub;","sqsube;","sqsubset;","sqsubseteq;","sqsup;","sqsupe;","sqsupset;","sqsupseteq;","squ;","square;","squarf;","squf;","srarr;","sscr;","ssetmn;","ssmile;","sstarf;","star;","starf;","straightepsilon;","straightphi;","strns;","sub;","subE;","subdot;","sube;","subedot;","submult;","subnE;","subne;","subplus;","subrarr;","subset;","subseteq;","subseteqq;","subsetneq;","subsetneqq;","subsim;","subsub;","subsup;","succ;","succapprox;","succcurlyeq;","succeq;","succnapprox;","succneqq;","succnsim;","succsim;","sum;","sung;","sup1","sup1;","sup2","sup2;","sup3","sup3;","sup;","supE;","supdot;","supdsub;","supe;","supedot;","suphsol;","suphsub;","suplarr;","supmult;","supnE;","supne;","supplus;","supset;","supseteq;","supseteqq;","supsetneq;","supsetneqq;","supsim;","supsub;","supsup;","swArr;","swarhk;","swarr;","swarrow;","swnwar;","szlig","szlig;","target;","tau;","tbrk;","tcaron;","tcedil;","tcy;","tdot;","telrec;","tfr;","there4;","therefore;","theta;","thetasym;","thetav;","thickapprox;","thicksim;","thinsp;","thkap;","thksim;","thorn","thorn;","tilde;","times","times;","timesb;","timesbar;","timesd;","tint;","toea;","top;","topbot;","topcir;","topf;","topfork;","tosa;","tprime;","trade;","triangle;","triangledown;","triangleleft;","trianglelefteq;","triangleq;","triangleright;","trianglerighteq;","tridot;","trie;","triminus;","triplus;","trisb;","tritime;","trpezium;","tscr;","tscy;","tshcy;","tstrok;","twixt;","twoheadleftarrow;","twoheadrightarrow;","uArr;","uHar;","uacute","uacute;","uarr;","ubrcy;","ubreve;","ucirc","ucirc;","ucy;","udarr;","udblac;","udhar;","ufisht;","ufr;","ugrave","ugrave;","uharl;","uharr;","uhblk;","ulcorn;","ulcorner;","ulcrop;","ultri;","umacr;","uml","uml;","uogon;","uopf;","uparrow;","updownarrow;","upharpoonleft;","upharpoonright;","uplus;","upsi;","upsih;","upsilon;","upuparrows;","urcorn;","urcorner;","urcrop;","uring;","urtri;","uscr;","utdot;","utilde;","utri;","utrif;","uuarr;","uuml","uuml;","uwangle;","vArr;","vBar;","vBarv;","vDash;","vangrt;","varepsilon;","varkappa;","varnothing;","varphi;","varpi;","varpropto;","varr;","varrho;","varsigma;","varsubsetneq;","varsubsetneqq;","varsupsetneq;","varsupsetneqq;","vartheta;","vartriangleleft;","vartriangleright;","vcy;","vdash;","vee;","veebar;","veeeq;","vellip;","verbar;","vert;","vfr;","vltri;","vnsub;","vnsup;","vopf;","vprop;","vrtri;","vscr;","vsubnE;","vsubne;","vsupnE;","vsupne;","vzigzag;","wcirc;","wedbar;","wedge;","wedgeq;","weierp;","wfr;","wopf;","wp;","wr;","wreath;","wscr;","xcap;","xcirc;","xcup;","xdtri;","xfr;","xhArr;","xharr;","xi;","xlArr;","xlarr;","xmap;","xnis;","xodot;","xopf;","xoplus;","xotime;","xrArr;","xrarr;","xscr;","xsqcup;","xuplus;","xutri;","xvee;","xwedge;","yacute","yacute;","yacy;","ycirc;","ycy;","yen","yen;","yfr;","yicy;","yopf;","yscr;","yucy;","yuml","yuml;","zacute;","zcaron;","zcy;","zdot;","zeetrf;","zeta;","zfr;","zhcy;","zigrarr;","zopf;","zscr;","zwj;","zwnj;"]),t.s)
B.Y=new A.r(2231,{AElig:"\xc6","AElig;":"\xc6",AMP:"&","AMP;":"&",Aacute:"\xc1","Aacute;":"\xc1","Abreve;":"\u0102",Acirc:"\xc2","Acirc;":"\xc2","Acy;":"\u0410","Afr;":"\ud835\udd04",Agrave:"\xc0","Agrave;":"\xc0","Alpha;":"\u0391","Amacr;":"\u0100","And;":"\u2a53","Aogon;":"\u0104","Aopf;":"\ud835\udd38","ApplyFunction;":"\u2061",Aring:"\xc5","Aring;":"\xc5","Ascr;":"\ud835\udc9c","Assign;":"\u2254",Atilde:"\xc3","Atilde;":"\xc3",Auml:"\xc4","Auml;":"\xc4","Backslash;":"\u2216","Barv;":"\u2ae7","Barwed;":"\u2306","Bcy;":"\u0411","Because;":"\u2235","Bernoullis;":"\u212c","Beta;":"\u0392","Bfr;":"\ud835\udd05","Bopf;":"\ud835\udd39","Breve;":"\u02d8","Bscr;":"\u212c","Bumpeq;":"\u224e","CHcy;":"\u0427",COPY:"\xa9","COPY;":"\xa9","Cacute;":"\u0106","Cap;":"\u22d2","CapitalDifferentialD;":"\u2145","Cayleys;":"\u212d","Ccaron;":"\u010c",Ccedil:"\xc7","Ccedil;":"\xc7","Ccirc;":"\u0108","Cconint;":"\u2230","Cdot;":"\u010a","Cedilla;":"\xb8","CenterDot;":"\xb7","Cfr;":"\u212d","Chi;":"\u03a7","CircleDot;":"\u2299","CircleMinus;":"\u2296","CirclePlus;":"\u2295","CircleTimes;":"\u2297","ClockwiseContourIntegral;":"\u2232","CloseCurlyDoubleQuote;":"\u201d","CloseCurlyQuote;":"\u2019","Colon;":"\u2237","Colone;":"\u2a74","Congruent;":"\u2261","Conint;":"\u222f","ContourIntegral;":"\u222e","Copf;":"\u2102","Coproduct;":"\u2210","CounterClockwiseContourIntegral;":"\u2233","Cross;":"\u2a2f","Cscr;":"\ud835\udc9e","Cup;":"\u22d3","CupCap;":"\u224d","DD;":"\u2145","DDotrahd;":"\u2911","DJcy;":"\u0402","DScy;":"\u0405","DZcy;":"\u040f","Dagger;":"\u2021","Darr;":"\u21a1","Dashv;":"\u2ae4","Dcaron;":"\u010e","Dcy;":"\u0414","Del;":"\u2207","Delta;":"\u0394","Dfr;":"\ud835\udd07","DiacriticalAcute;":"\xb4","DiacriticalDot;":"\u02d9","DiacriticalDoubleAcute;":"\u02dd","DiacriticalGrave;":"`","DiacriticalTilde;":"\u02dc","Diamond;":"\u22c4","DifferentialD;":"\u2146","Dopf;":"\ud835\udd3b","Dot;":"\xa8","DotDot;":"\u20dc","DotEqual;":"\u2250","DoubleContourIntegral;":"\u222f","DoubleDot;":"\xa8","DoubleDownArrow;":"\u21d3","DoubleLeftArrow;":"\u21d0","DoubleLeftRightArrow;":"\u21d4","DoubleLeftTee;":"\u2ae4","DoubleLongLeftArrow;":"\u27f8","DoubleLongLeftRightArrow;":"\u27fa","DoubleLongRightArrow;":"\u27f9","DoubleRightArrow;":"\u21d2","DoubleRightTee;":"\u22a8","DoubleUpArrow;":"\u21d1","DoubleUpDownArrow;":"\u21d5","DoubleVerticalBar;":"\u2225","DownArrow;":"\u2193","DownArrowBar;":"\u2913","DownArrowUpArrow;":"\u21f5","DownBreve;":"\u0311","DownLeftRightVector;":"\u2950","DownLeftTeeVector;":"\u295e","DownLeftVector;":"\u21bd","DownLeftVectorBar;":"\u2956","DownRightTeeVector;":"\u295f","DownRightVector;":"\u21c1","DownRightVectorBar;":"\u2957","DownTee;":"\u22a4","DownTeeArrow;":"\u21a7","Downarrow;":"\u21d3","Dscr;":"\ud835\udc9f","Dstrok;":"\u0110","ENG;":"\u014a",ETH:"\xd0","ETH;":"\xd0",Eacute:"\xc9","Eacute;":"\xc9","Ecaron;":"\u011a",Ecirc:"\xca","Ecirc;":"\xca","Ecy;":"\u042d","Edot;":"\u0116","Efr;":"\ud835\udd08",Egrave:"\xc8","Egrave;":"\xc8","Element;":"\u2208","Emacr;":"\u0112","EmptySmallSquare;":"\u25fb","EmptyVerySmallSquare;":"\u25ab","Eogon;":"\u0118","Eopf;":"\ud835\udd3c","Epsilon;":"\u0395","Equal;":"\u2a75","EqualTilde;":"\u2242","Equilibrium;":"\u21cc","Escr;":"\u2130","Esim;":"\u2a73","Eta;":"\u0397",Euml:"\xcb","Euml;":"\xcb","Exists;":"\u2203","ExponentialE;":"\u2147","Fcy;":"\u0424","Ffr;":"\ud835\udd09","FilledSmallSquare;":"\u25fc","FilledVerySmallSquare;":"\u25aa","Fopf;":"\ud835\udd3d","ForAll;":"\u2200","Fouriertrf;":"\u2131","Fscr;":"\u2131","GJcy;":"\u0403",GT:">","GT;":">","Gamma;":"\u0393","Gammad;":"\u03dc","Gbreve;":"\u011e","Gcedil;":"\u0122","Gcirc;":"\u011c","Gcy;":"\u0413","Gdot;":"\u0120","Gfr;":"\ud835\udd0a","Gg;":"\u22d9","Gopf;":"\ud835\udd3e","GreaterEqual;":"\u2265","GreaterEqualLess;":"\u22db","GreaterFullEqual;":"\u2267","GreaterGreater;":"\u2aa2","GreaterLess;":"\u2277","GreaterSlantEqual;":"\u2a7e","GreaterTilde;":"\u2273","Gscr;":"\ud835\udca2","Gt;":"\u226b","HARDcy;":"\u042a","Hacek;":"\u02c7","Hat;":"^","Hcirc;":"\u0124","Hfr;":"\u210c","HilbertSpace;":"\u210b","Hopf;":"\u210d","HorizontalLine;":"\u2500","Hscr;":"\u210b","Hstrok;":"\u0126","HumpDownHump;":"\u224e","HumpEqual;":"\u224f","IEcy;":"\u0415","IJlig;":"\u0132","IOcy;":"\u0401",Iacute:"\xcd","Iacute;":"\xcd",Icirc:"\xce","Icirc;":"\xce","Icy;":"\u0418","Idot;":"\u0130","Ifr;":"\u2111",Igrave:"\xcc","Igrave;":"\xcc","Im;":"\u2111","Imacr;":"\u012a","ImaginaryI;":"\u2148","Implies;":"\u21d2","Int;":"\u222c","Integral;":"\u222b","Intersection;":"\u22c2","InvisibleComma;":"\u2063","InvisibleTimes;":"\u2062","Iogon;":"\u012e","Iopf;":"\ud835\udd40","Iota;":"\u0399","Iscr;":"\u2110","Itilde;":"\u0128","Iukcy;":"\u0406",Iuml:"\xcf","Iuml;":"\xcf","Jcirc;":"\u0134","Jcy;":"\u0419","Jfr;":"\ud835\udd0d","Jopf;":"\ud835\udd41","Jscr;":"\ud835\udca5","Jsercy;":"\u0408","Jukcy;":"\u0404","KHcy;":"\u0425","KJcy;":"\u040c","Kappa;":"\u039a","Kcedil;":"\u0136","Kcy;":"\u041a","Kfr;":"\ud835\udd0e","Kopf;":"\ud835\udd42","Kscr;":"\ud835\udca6","LJcy;":"\u0409",LT:"<","LT;":"<","Lacute;":"\u0139","Lambda;":"\u039b","Lang;":"\u27ea","Laplacetrf;":"\u2112","Larr;":"\u219e","Lcaron;":"\u013d","Lcedil;":"\u013b","Lcy;":"\u041b","LeftAngleBracket;":"\u27e8","LeftArrow;":"\u2190","LeftArrowBar;":"\u21e4","LeftArrowRightArrow;":"\u21c6","LeftCeiling;":"\u2308","LeftDoubleBracket;":"\u27e6","LeftDownTeeVector;":"\u2961","LeftDownVector;":"\u21c3","LeftDownVectorBar;":"\u2959","LeftFloor;":"\u230a","LeftRightArrow;":"\u2194","LeftRightVector;":"\u294e","LeftTee;":"\u22a3","LeftTeeArrow;":"\u21a4","LeftTeeVector;":"\u295a","LeftTriangle;":"\u22b2","LeftTriangleBar;":"\u29cf","LeftTriangleEqual;":"\u22b4","LeftUpDownVector;":"\u2951","LeftUpTeeVector;":"\u2960","LeftUpVector;":"\u21bf","LeftUpVectorBar;":"\u2958","LeftVector;":"\u21bc","LeftVectorBar;":"\u2952","Leftarrow;":"\u21d0","Leftrightarrow;":"\u21d4","LessEqualGreater;":"\u22da","LessFullEqual;":"\u2266","LessGreater;":"\u2276","LessLess;":"\u2aa1","LessSlantEqual;":"\u2a7d","LessTilde;":"\u2272","Lfr;":"\ud835\udd0f","Ll;":"\u22d8","Lleftarrow;":"\u21da","Lmidot;":"\u013f","LongLeftArrow;":"\u27f5","LongLeftRightArrow;":"\u27f7","LongRightArrow;":"\u27f6","Longleftarrow;":"\u27f8","Longleftrightarrow;":"\u27fa","Longrightarrow;":"\u27f9","Lopf;":"\ud835\udd43","LowerLeftArrow;":"\u2199","LowerRightArrow;":"\u2198","Lscr;":"\u2112","Lsh;":"\u21b0","Lstrok;":"\u0141","Lt;":"\u226a","Map;":"\u2905","Mcy;":"\u041c","MediumSpace;":"\u205f","Mellintrf;":"\u2133","Mfr;":"\ud835\udd10","MinusPlus;":"\u2213","Mopf;":"\ud835\udd44","Mscr;":"\u2133","Mu;":"\u039c","NJcy;":"\u040a","Nacute;":"\u0143","Ncaron;":"\u0147","Ncedil;":"\u0145","Ncy;":"\u041d","NegativeMediumSpace;":"\u200b","NegativeThickSpace;":"\u200b","NegativeThinSpace;":"\u200b","NegativeVeryThinSpace;":"\u200b","NestedGreaterGreater;":"\u226b","NestedLessLess;":"\u226a","NewLine;":"\n","Nfr;":"\ud835\udd11","NoBreak;":"\u2060","NonBreakingSpace;":"\xa0","Nopf;":"\u2115","Not;":"\u2aec","NotCongruent;":"\u2262","NotCupCap;":"\u226d","NotDoubleVerticalBar;":"\u2226","NotElement;":"\u2209","NotEqual;":"\u2260","NotEqualTilde;":"\u2242\u0338","NotExists;":"\u2204","NotGreater;":"\u226f","NotGreaterEqual;":"\u2271","NotGreaterFullEqual;":"\u2267\u0338","NotGreaterGreater;":"\u226b\u0338","NotGreaterLess;":"\u2279","NotGreaterSlantEqual;":"\u2a7e\u0338","NotGreaterTilde;":"\u2275","NotHumpDownHump;":"\u224e\u0338","NotHumpEqual;":"\u224f\u0338","NotLeftTriangle;":"\u22ea","NotLeftTriangleBar;":"\u29cf\u0338","NotLeftTriangleEqual;":"\u22ec","NotLess;":"\u226e","NotLessEqual;":"\u2270","NotLessGreater;":"\u2278","NotLessLess;":"\u226a\u0338","NotLessSlantEqual;":"\u2a7d\u0338","NotLessTilde;":"\u2274","NotNestedGreaterGreater;":"\u2aa2\u0338","NotNestedLessLess;":"\u2aa1\u0338","NotPrecedes;":"\u2280","NotPrecedesEqual;":"\u2aaf\u0338","NotPrecedesSlantEqual;":"\u22e0","NotReverseElement;":"\u220c","NotRightTriangle;":"\u22eb","NotRightTriangleBar;":"\u29d0\u0338","NotRightTriangleEqual;":"\u22ed","NotSquareSubset;":"\u228f\u0338","NotSquareSubsetEqual;":"\u22e2","NotSquareSuperset;":"\u2290\u0338","NotSquareSupersetEqual;":"\u22e3","NotSubset;":"\u2282\u20d2","NotSubsetEqual;":"\u2288","NotSucceeds;":"\u2281","NotSucceedsEqual;":"\u2ab0\u0338","NotSucceedsSlantEqual;":"\u22e1","NotSucceedsTilde;":"\u227f\u0338","NotSuperset;":"\u2283\u20d2","NotSupersetEqual;":"\u2289","NotTilde;":"\u2241","NotTildeEqual;":"\u2244","NotTildeFullEqual;":"\u2247","NotTildeTilde;":"\u2249","NotVerticalBar;":"\u2224","Nscr;":"\ud835\udca9",Ntilde:"\xd1","Ntilde;":"\xd1","Nu;":"\u039d","OElig;":"\u0152",Oacute:"\xd3","Oacute;":"\xd3",Ocirc:"\xd4","Ocirc;":"\xd4","Ocy;":"\u041e","Odblac;":"\u0150","Ofr;":"\ud835\udd12",Ograve:"\xd2","Ograve;":"\xd2","Omacr;":"\u014c","Omega;":"\u03a9","Omicron;":"\u039f","Oopf;":"\ud835\udd46","OpenCurlyDoubleQuote;":"\u201c","OpenCurlyQuote;":"\u2018","Or;":"\u2a54","Oscr;":"\ud835\udcaa",Oslash:"\xd8","Oslash;":"\xd8",Otilde:"\xd5","Otilde;":"\xd5","Otimes;":"\u2a37",Ouml:"\xd6","Ouml;":"\xd6","OverBar;":"\u203e","OverBrace;":"\u23de","OverBracket;":"\u23b4","OverParenthesis;":"\u23dc","PartialD;":"\u2202","Pcy;":"\u041f","Pfr;":"\ud835\udd13","Phi;":"\u03a6","Pi;":"\u03a0","PlusMinus;":"\xb1","Poincareplane;":"\u210c","Popf;":"\u2119","Pr;":"\u2abb","Precedes;":"\u227a","PrecedesEqual;":"\u2aaf","PrecedesSlantEqual;":"\u227c","PrecedesTilde;":"\u227e","Prime;":"\u2033","Product;":"\u220f","Proportion;":"\u2237","Proportional;":"\u221d","Pscr;":"\ud835\udcab","Psi;":"\u03a8",QUOT:'"',"QUOT;":'"',"Qfr;":"\ud835\udd14","Qopf;":"\u211a","Qscr;":"\ud835\udcac","RBarr;":"\u2910",REG:"\xae","REG;":"\xae","Racute;":"\u0154","Rang;":"\u27eb","Rarr;":"\u21a0","Rarrtl;":"\u2916","Rcaron;":"\u0158","Rcedil;":"\u0156","Rcy;":"\u0420","Re;":"\u211c","ReverseElement;":"\u220b","ReverseEquilibrium;":"\u21cb","ReverseUpEquilibrium;":"\u296f","Rfr;":"\u211c","Rho;":"\u03a1","RightAngleBracket;":"\u27e9","RightArrow;":"\u2192","RightArrowBar;":"\u21e5","RightArrowLeftArrow;":"\u21c4","RightCeiling;":"\u2309","RightDoubleBracket;":"\u27e7","RightDownTeeVector;":"\u295d","RightDownVector;":"\u21c2","RightDownVectorBar;":"\u2955","RightFloor;":"\u230b","RightTee;":"\u22a2","RightTeeArrow;":"\u21a6","RightTeeVector;":"\u295b","RightTriangle;":"\u22b3","RightTriangleBar;":"\u29d0","RightTriangleEqual;":"\u22b5","RightUpDownVector;":"\u294f","RightUpTeeVector;":"\u295c","RightUpVector;":"\u21be","RightUpVectorBar;":"\u2954","RightVector;":"\u21c0","RightVectorBar;":"\u2953","Rightarrow;":"\u21d2","Ropf;":"\u211d","RoundImplies;":"\u2970","Rrightarrow;":"\u21db","Rscr;":"\u211b","Rsh;":"\u21b1","RuleDelayed;":"\u29f4","SHCHcy;":"\u0429","SHcy;":"\u0428","SOFTcy;":"\u042c","Sacute;":"\u015a","Sc;":"\u2abc","Scaron;":"\u0160","Scedil;":"\u015e","Scirc;":"\u015c","Scy;":"\u0421","Sfr;":"\ud835\udd16","ShortDownArrow;":"\u2193","ShortLeftArrow;":"\u2190","ShortRightArrow;":"\u2192","ShortUpArrow;":"\u2191","Sigma;":"\u03a3","SmallCircle;":"\u2218","Sopf;":"\ud835\udd4a","Sqrt;":"\u221a","Square;":"\u25a1","SquareIntersection;":"\u2293","SquareSubset;":"\u228f","SquareSubsetEqual;":"\u2291","SquareSuperset;":"\u2290","SquareSupersetEqual;":"\u2292","SquareUnion;":"\u2294","Sscr;":"\ud835\udcae","Star;":"\u22c6","Sub;":"\u22d0","Subset;":"\u22d0","SubsetEqual;":"\u2286","Succeeds;":"\u227b","SucceedsEqual;":"\u2ab0","SucceedsSlantEqual;":"\u227d","SucceedsTilde;":"\u227f","SuchThat;":"\u220b","Sum;":"\u2211","Sup;":"\u22d1","Superset;":"\u2283","SupersetEqual;":"\u2287","Supset;":"\u22d1",THORN:"\xde","THORN;":"\xde","TRADE;":"\u2122","TSHcy;":"\u040b","TScy;":"\u0426","Tab;":"\t","Tau;":"\u03a4","Tcaron;":"\u0164","Tcedil;":"\u0162","Tcy;":"\u0422","Tfr;":"\ud835\udd17","Therefore;":"\u2234","Theta;":"\u0398","ThickSpace;":"\u205f\u200a","ThinSpace;":"\u2009","Tilde;":"\u223c","TildeEqual;":"\u2243","TildeFullEqual;":"\u2245","TildeTilde;":"\u2248","Topf;":"\ud835\udd4b","TripleDot;":"\u20db","Tscr;":"\ud835\udcaf","Tstrok;":"\u0166",Uacute:"\xda","Uacute;":"\xda","Uarr;":"\u219f","Uarrocir;":"\u2949","Ubrcy;":"\u040e","Ubreve;":"\u016c",Ucirc:"\xdb","Ucirc;":"\xdb","Ucy;":"\u0423","Udblac;":"\u0170","Ufr;":"\ud835\udd18",Ugrave:"\xd9","Ugrave;":"\xd9","Umacr;":"\u016a","UnderBar;":"_","UnderBrace;":"\u23df","UnderBracket;":"\u23b5","UnderParenthesis;":"\u23dd","Union;":"\u22c3","UnionPlus;":"\u228e","Uogon;":"\u0172","Uopf;":"\ud835\udd4c","UpArrow;":"\u2191","UpArrowBar;":"\u2912","UpArrowDownArrow;":"\u21c5","UpDownArrow;":"\u2195","UpEquilibrium;":"\u296e","UpTee;":"\u22a5","UpTeeArrow;":"\u21a5","Uparrow;":"\u21d1","Updownarrow;":"\u21d5","UpperLeftArrow;":"\u2196","UpperRightArrow;":"\u2197","Upsi;":"\u03d2","Upsilon;":"\u03a5","Uring;":"\u016e","Uscr;":"\ud835\udcb0","Utilde;":"\u0168",Uuml:"\xdc","Uuml;":"\xdc","VDash;":"\u22ab","Vbar;":"\u2aeb","Vcy;":"\u0412","Vdash;":"\u22a9","Vdashl;":"\u2ae6","Vee;":"\u22c1","Verbar;":"\u2016","Vert;":"\u2016","VerticalBar;":"\u2223","VerticalLine;":"|","VerticalSeparator;":"\u2758","VerticalTilde;":"\u2240","VeryThinSpace;":"\u200a","Vfr;":"\ud835\udd19","Vopf;":"\ud835\udd4d","Vscr;":"\ud835\udcb1","Vvdash;":"\u22aa","Wcirc;":"\u0174","Wedge;":"\u22c0","Wfr;":"\ud835\udd1a","Wopf;":"\ud835\udd4e","Wscr;":"\ud835\udcb2","Xfr;":"\ud835\udd1b","Xi;":"\u039e","Xopf;":"\ud835\udd4f","Xscr;":"\ud835\udcb3","YAcy;":"\u042f","YIcy;":"\u0407","YUcy;":"\u042e",Yacute:"\xdd","Yacute;":"\xdd","Ycirc;":"\u0176","Ycy;":"\u042b","Yfr;":"\ud835\udd1c","Yopf;":"\ud835\udd50","Yscr;":"\ud835\udcb4","Yuml;":"\u0178","ZHcy;":"\u0416","Zacute;":"\u0179","Zcaron;":"\u017d","Zcy;":"\u0417","Zdot;":"\u017b","ZeroWidthSpace;":"\u200b","Zeta;":"\u0396","Zfr;":"\u2128","Zopf;":"\u2124","Zscr;":"\ud835\udcb5",aacute:"\xe1","aacute;":"\xe1","abreve;":"\u0103","ac;":"\u223e","acE;":"\u223e\u0333","acd;":"\u223f",acirc:"\xe2","acirc;":"\xe2",acute:"\xb4","acute;":"\xb4","acy;":"\u0430",aelig:"\xe6","aelig;":"\xe6","af;":"\u2061","afr;":"\ud835\udd1e",agrave:"\xe0","agrave;":"\xe0","alefsym;":"\u2135","aleph;":"\u2135","alpha;":"\u03b1","amacr;":"\u0101","amalg;":"\u2a3f",amp:"&","amp;":"&","and;":"\u2227","andand;":"\u2a55","andd;":"\u2a5c","andslope;":"\u2a58","andv;":"\u2a5a","ang;":"\u2220","ange;":"\u29a4","angle;":"\u2220","angmsd;":"\u2221","angmsdaa;":"\u29a8","angmsdab;":"\u29a9","angmsdac;":"\u29aa","angmsdad;":"\u29ab","angmsdae;":"\u29ac","angmsdaf;":"\u29ad","angmsdag;":"\u29ae","angmsdah;":"\u29af","angrt;":"\u221f","angrtvb;":"\u22be","angrtvbd;":"\u299d","angsph;":"\u2222","angst;":"\xc5","angzarr;":"\u237c","aogon;":"\u0105","aopf;":"\ud835\udd52","ap;":"\u2248","apE;":"\u2a70","apacir;":"\u2a6f","ape;":"\u224a","apid;":"\u224b","apos;":"'","approx;":"\u2248","approxeq;":"\u224a",aring:"\xe5","aring;":"\xe5","ascr;":"\ud835\udcb6","ast;":"*","asymp;":"\u2248","asympeq;":"\u224d",atilde:"\xe3","atilde;":"\xe3",auml:"\xe4","auml;":"\xe4","awconint;":"\u2233","awint;":"\u2a11","bNot;":"\u2aed","backcong;":"\u224c","backepsilon;":"\u03f6","backprime;":"\u2035","backsim;":"\u223d","backsimeq;":"\u22cd","barvee;":"\u22bd","barwed;":"\u2305","barwedge;":"\u2305","bbrk;":"\u23b5","bbrktbrk;":"\u23b6","bcong;":"\u224c","bcy;":"\u0431","bdquo;":"\u201e","becaus;":"\u2235","because;":"\u2235","bemptyv;":"\u29b0","bepsi;":"\u03f6","bernou;":"\u212c","beta;":"\u03b2","beth;":"\u2136","between;":"\u226c","bfr;":"\ud835\udd1f","bigcap;":"\u22c2","bigcirc;":"\u25ef","bigcup;":"\u22c3","bigodot;":"\u2a00","bigoplus;":"\u2a01","bigotimes;":"\u2a02","bigsqcup;":"\u2a06","bigstar;":"\u2605","bigtriangledown;":"\u25bd","bigtriangleup;":"\u25b3","biguplus;":"\u2a04","bigvee;":"\u22c1","bigwedge;":"\u22c0","bkarow;":"\u290d","blacklozenge;":"\u29eb","blacksquare;":"\u25aa","blacktriangle;":"\u25b4","blacktriangledown;":"\u25be","blacktriangleleft;":"\u25c2","blacktriangleright;":"\u25b8","blank;":"\u2423","blk12;":"\u2592","blk14;":"\u2591","blk34;":"\u2593","block;":"\u2588","bne;":"=\u20e5","bnequiv;":"\u2261\u20e5","bnot;":"\u2310","bopf;":"\ud835\udd53","bot;":"\u22a5","bottom;":"\u22a5","bowtie;":"\u22c8","boxDL;":"\u2557","boxDR;":"\u2554","boxDl;":"\u2556","boxDr;":"\u2553","boxH;":"\u2550","boxHD;":"\u2566","boxHU;":"\u2569","boxHd;":"\u2564","boxHu;":"\u2567","boxUL;":"\u255d","boxUR;":"\u255a","boxUl;":"\u255c","boxUr;":"\u2559","boxV;":"\u2551","boxVH;":"\u256c","boxVL;":"\u2563","boxVR;":"\u2560","boxVh;":"\u256b","boxVl;":"\u2562","boxVr;":"\u255f","boxbox;":"\u29c9","boxdL;":"\u2555","boxdR;":"\u2552","boxdl;":"\u2510","boxdr;":"\u250c","boxh;":"\u2500","boxhD;":"\u2565","boxhU;":"\u2568","boxhd;":"\u252c","boxhu;":"\u2534","boxminus;":"\u229f","boxplus;":"\u229e","boxtimes;":"\u22a0","boxuL;":"\u255b","boxuR;":"\u2558","boxul;":"\u2518","boxur;":"\u2514","boxv;":"\u2502","boxvH;":"\u256a","boxvL;":"\u2561","boxvR;":"\u255e","boxvh;":"\u253c","boxvl;":"\u2524","boxvr;":"\u251c","bprime;":"\u2035","breve;":"\u02d8",brvbar:"\xa6","brvbar;":"\xa6","bscr;":"\ud835\udcb7","bsemi;":"\u204f","bsim;":"\u223d","bsime;":"\u22cd","bsol;":"\\","bsolb;":"\u29c5","bsolhsub;":"\u27c8","bull;":"\u2022","bullet;":"\u2022","bump;":"\u224e","bumpE;":"\u2aae","bumpe;":"\u224f","bumpeq;":"\u224f","cacute;":"\u0107","cap;":"\u2229","capand;":"\u2a44","capbrcup;":"\u2a49","capcap;":"\u2a4b","capcup;":"\u2a47","capdot;":"\u2a40","caps;":"\u2229\ufe00","caret;":"\u2041","caron;":"\u02c7","ccaps;":"\u2a4d","ccaron;":"\u010d",ccedil:"\xe7","ccedil;":"\xe7","ccirc;":"\u0109","ccups;":"\u2a4c","ccupssm;":"\u2a50","cdot;":"\u010b",cedil:"\xb8","cedil;":"\xb8","cemptyv;":"\u29b2",cent:"\xa2","cent;":"\xa2","centerdot;":"\xb7","cfr;":"\ud835\udd20","chcy;":"\u0447","check;":"\u2713","checkmark;":"\u2713","chi;":"\u03c7","cir;":"\u25cb","cirE;":"\u29c3","circ;":"\u02c6","circeq;":"\u2257","circlearrowleft;":"\u21ba","circlearrowright;":"\u21bb","circledR;":"\xae","circledS;":"\u24c8","circledast;":"\u229b","circledcirc;":"\u229a","circleddash;":"\u229d","cire;":"\u2257","cirfnint;":"\u2a10","cirmid;":"\u2aef","cirscir;":"\u29c2","clubs;":"\u2663","clubsuit;":"\u2663","colon;":":","colone;":"\u2254","coloneq;":"\u2254","comma;":",","commat;":"@","comp;":"\u2201","compfn;":"\u2218","complement;":"\u2201","complexes;":"\u2102","cong;":"\u2245","congdot;":"\u2a6d","conint;":"\u222e","copf;":"\ud835\udd54","coprod;":"\u2210",copy:"\xa9","copy;":"\xa9","copysr;":"\u2117","crarr;":"\u21b5","cross;":"\u2717","cscr;":"\ud835\udcb8","csub;":"\u2acf","csube;":"\u2ad1","csup;":"\u2ad0","csupe;":"\u2ad2","ctdot;":"\u22ef","cudarrl;":"\u2938","cudarrr;":"\u2935","cuepr;":"\u22de","cuesc;":"\u22df","cularr;":"\u21b6","cularrp;":"\u293d","cup;":"\u222a","cupbrcap;":"\u2a48","cupcap;":"\u2a46","cupcup;":"\u2a4a","cupdot;":"\u228d","cupor;":"\u2a45","cups;":"\u222a\ufe00","curarr;":"\u21b7","curarrm;":"\u293c","curlyeqprec;":"\u22de","curlyeqsucc;":"\u22df","curlyvee;":"\u22ce","curlywedge;":"\u22cf",curren:"\xa4","curren;":"\xa4","curvearrowleft;":"\u21b6","curvearrowright;":"\u21b7","cuvee;":"\u22ce","cuwed;":"\u22cf","cwconint;":"\u2232","cwint;":"\u2231","cylcty;":"\u232d","dArr;":"\u21d3","dHar;":"\u2965","dagger;":"\u2020","daleth;":"\u2138","darr;":"\u2193","dash;":"\u2010","dashv;":"\u22a3","dbkarow;":"\u290f","dblac;":"\u02dd","dcaron;":"\u010f","dcy;":"\u0434","dd;":"\u2146","ddagger;":"\u2021","ddarr;":"\u21ca","ddotseq;":"\u2a77",deg:"\xb0","deg;":"\xb0","delta;":"\u03b4","demptyv;":"\u29b1","dfisht;":"\u297f","dfr;":"\ud835\udd21","dharl;":"\u21c3","dharr;":"\u21c2","diam;":"\u22c4","diamond;":"\u22c4","diamondsuit;":"\u2666","diams;":"\u2666","die;":"\xa8","digamma;":"\u03dd","disin;":"\u22f2","div;":"\xf7",divide:"\xf7","divide;":"\xf7","divideontimes;":"\u22c7","divonx;":"\u22c7","djcy;":"\u0452","dlcorn;":"\u231e","dlcrop;":"\u230d","dollar;":"$","dopf;":"\ud835\udd55","dot;":"\u02d9","doteq;":"\u2250","doteqdot;":"\u2251","dotminus;":"\u2238","dotplus;":"\u2214","dotsquare;":"\u22a1","doublebarwedge;":"\u2306","downarrow;":"\u2193","downdownarrows;":"\u21ca","downharpoonleft;":"\u21c3","downharpoonright;":"\u21c2","drbkarow;":"\u2910","drcorn;":"\u231f","drcrop;":"\u230c","dscr;":"\ud835\udcb9","dscy;":"\u0455","dsol;":"\u29f6","dstrok;":"\u0111","dtdot;":"\u22f1","dtri;":"\u25bf","dtrif;":"\u25be","duarr;":"\u21f5","duhar;":"\u296f","dwangle;":"\u29a6","dzcy;":"\u045f","dzigrarr;":"\u27ff","eDDot;":"\u2a77","eDot;":"\u2251",eacute:"\xe9","eacute;":"\xe9","easter;":"\u2a6e","ecaron;":"\u011b","ecir;":"\u2256",ecirc:"\xea","ecirc;":"\xea","ecolon;":"\u2255","ecy;":"\u044d","edot;":"\u0117","ee;":"\u2147","efDot;":"\u2252","efr;":"\ud835\udd22","eg;":"\u2a9a",egrave:"\xe8","egrave;":"\xe8","egs;":"\u2a96","egsdot;":"\u2a98","el;":"\u2a99","elinters;":"\u23e7","ell;":"\u2113","els;":"\u2a95","elsdot;":"\u2a97","emacr;":"\u0113","empty;":"\u2205","emptyset;":"\u2205","emptyv;":"\u2205","emsp13;":"\u2004","emsp14;":"\u2005","emsp;":"\u2003","eng;":"\u014b","ensp;":"\u2002","eogon;":"\u0119","eopf;":"\ud835\udd56","epar;":"\u22d5","eparsl;":"\u29e3","eplus;":"\u2a71","epsi;":"\u03b5","epsilon;":"\u03b5","epsiv;":"\u03f5","eqcirc;":"\u2256","eqcolon;":"\u2255","eqsim;":"\u2242","eqslantgtr;":"\u2a96","eqslantless;":"\u2a95","equals;":"=","equest;":"\u225f","equiv;":"\u2261","equivDD;":"\u2a78","eqvparsl;":"\u29e5","erDot;":"\u2253","erarr;":"\u2971","escr;":"\u212f","esdot;":"\u2250","esim;":"\u2242","eta;":"\u03b7",eth:"\xf0","eth;":"\xf0",euml:"\xeb","euml;":"\xeb","euro;":"\u20ac","excl;":"!","exist;":"\u2203","expectation;":"\u2130","exponentiale;":"\u2147","fallingdotseq;":"\u2252","fcy;":"\u0444","female;":"\u2640","ffilig;":"\ufb03","fflig;":"\ufb00","ffllig;":"\ufb04","ffr;":"\ud835\udd23","filig;":"\ufb01","fjlig;":"fj","flat;":"\u266d","fllig;":"\ufb02","fltns;":"\u25b1","fnof;":"\u0192","fopf;":"\ud835\udd57","forall;":"\u2200","fork;":"\u22d4","forkv;":"\u2ad9","fpartint;":"\u2a0d",frac12:"\xbd","frac12;":"\xbd","frac13;":"\u2153",frac14:"\xbc","frac14;":"\xbc","frac15;":"\u2155","frac16;":"\u2159","frac18;":"\u215b","frac23;":"\u2154","frac25;":"\u2156",frac34:"\xbe","frac34;":"\xbe","frac35;":"\u2157","frac38;":"\u215c","frac45;":"\u2158","frac56;":"\u215a","frac58;":"\u215d","frac78;":"\u215e","frasl;":"\u2044","frown;":"\u2322","fscr;":"\ud835\udcbb","gE;":"\u2267","gEl;":"\u2a8c","gacute;":"\u01f5","gamma;":"\u03b3","gammad;":"\u03dd","gap;":"\u2a86","gbreve;":"\u011f","gcirc;":"\u011d","gcy;":"\u0433","gdot;":"\u0121","ge;":"\u2265","gel;":"\u22db","geq;":"\u2265","geqq;":"\u2267","geqslant;":"\u2a7e","ges;":"\u2a7e","gescc;":"\u2aa9","gesdot;":"\u2a80","gesdoto;":"\u2a82","gesdotol;":"\u2a84","gesl;":"\u22db\ufe00","gesles;":"\u2a94","gfr;":"\ud835\udd24","gg;":"\u226b","ggg;":"\u22d9","gimel;":"\u2137","gjcy;":"\u0453","gl;":"\u2277","glE;":"\u2a92","gla;":"\u2aa5","glj;":"\u2aa4","gnE;":"\u2269","gnap;":"\u2a8a","gnapprox;":"\u2a8a","gne;":"\u2a88","gneq;":"\u2a88","gneqq;":"\u2269","gnsim;":"\u22e7","gopf;":"\ud835\udd58","grave;":"`","gscr;":"\u210a","gsim;":"\u2273","gsime;":"\u2a8e","gsiml;":"\u2a90",gt:">","gt;":">","gtcc;":"\u2aa7","gtcir;":"\u2a7a","gtdot;":"\u22d7","gtlPar;":"\u2995","gtquest;":"\u2a7c","gtrapprox;":"\u2a86","gtrarr;":"\u2978","gtrdot;":"\u22d7","gtreqless;":"\u22db","gtreqqless;":"\u2a8c","gtrless;":"\u2277","gtrsim;":"\u2273","gvertneqq;":"\u2269\ufe00","gvnE;":"\u2269\ufe00","hArr;":"\u21d4","hairsp;":"\u200a","half;":"\xbd","hamilt;":"\u210b","hardcy;":"\u044a","harr;":"\u2194","harrcir;":"\u2948","harrw;":"\u21ad","hbar;":"\u210f","hcirc;":"\u0125","hearts;":"\u2665","heartsuit;":"\u2665","hellip;":"\u2026","hercon;":"\u22b9","hfr;":"\ud835\udd25","hksearow;":"\u2925","hkswarow;":"\u2926","hoarr;":"\u21ff","homtht;":"\u223b","hookleftarrow;":"\u21a9","hookrightarrow;":"\u21aa","hopf;":"\ud835\udd59","horbar;":"\u2015","hscr;":"\ud835\udcbd","hslash;":"\u210f","hstrok;":"\u0127","hybull;":"\u2043","hyphen;":"\u2010",iacute:"\xed","iacute;":"\xed","ic;":"\u2063",icirc:"\xee","icirc;":"\xee","icy;":"\u0438","iecy;":"\u0435",iexcl:"\xa1","iexcl;":"\xa1","iff;":"\u21d4","ifr;":"\ud835\udd26",igrave:"\xec","igrave;":"\xec","ii;":"\u2148","iiiint;":"\u2a0c","iiint;":"\u222d","iinfin;":"\u29dc","iiota;":"\u2129","ijlig;":"\u0133","imacr;":"\u012b","image;":"\u2111","imagline;":"\u2110","imagpart;":"\u2111","imath;":"\u0131","imof;":"\u22b7","imped;":"\u01b5","in;":"\u2208","incare;":"\u2105","infin;":"\u221e","infintie;":"\u29dd","inodot;":"\u0131","int;":"\u222b","intcal;":"\u22ba","integers;":"\u2124","intercal;":"\u22ba","intlarhk;":"\u2a17","intprod;":"\u2a3c","iocy;":"\u0451","iogon;":"\u012f","iopf;":"\ud835\udd5a","iota;":"\u03b9","iprod;":"\u2a3c",iquest:"\xbf","iquest;":"\xbf","iscr;":"\ud835\udcbe","isin;":"\u2208","isinE;":"\u22f9","isindot;":"\u22f5","isins;":"\u22f4","isinsv;":"\u22f3","isinv;":"\u2208","it;":"\u2062","itilde;":"\u0129","iukcy;":"\u0456",iuml:"\xef","iuml;":"\xef","jcirc;":"\u0135","jcy;":"\u0439","jfr;":"\ud835\udd27","jmath;":"\u0237","jopf;":"\ud835\udd5b","jscr;":"\ud835\udcbf","jsercy;":"\u0458","jukcy;":"\u0454","kappa;":"\u03ba","kappav;":"\u03f0","kcedil;":"\u0137","kcy;":"\u043a","kfr;":"\ud835\udd28","kgreen;":"\u0138","khcy;":"\u0445","kjcy;":"\u045c","kopf;":"\ud835\udd5c","kscr;":"\ud835\udcc0","lAarr;":"\u21da","lArr;":"\u21d0","lAtail;":"\u291b","lBarr;":"\u290e","lE;":"\u2266","lEg;":"\u2a8b","lHar;":"\u2962","lacute;":"\u013a","laemptyv;":"\u29b4","lagran;":"\u2112","lambda;":"\u03bb","lang;":"\u27e8","langd;":"\u2991","langle;":"\u27e8","lap;":"\u2a85",laquo:"\xab","laquo;":"\xab","larr;":"\u2190","larrb;":"\u21e4","larrbfs;":"\u291f","larrfs;":"\u291d","larrhk;":"\u21a9","larrlp;":"\u21ab","larrpl;":"\u2939","larrsim;":"\u2973","larrtl;":"\u21a2","lat;":"\u2aab","latail;":"\u2919","late;":"\u2aad","lates;":"\u2aad\ufe00","lbarr;":"\u290c","lbbrk;":"\u2772","lbrace;":"{","lbrack;":"[","lbrke;":"\u298b","lbrksld;":"\u298f","lbrkslu;":"\u298d","lcaron;":"\u013e","lcedil;":"\u013c","lceil;":"\u2308","lcub;":"{","lcy;":"\u043b","ldca;":"\u2936","ldquo;":"\u201c","ldquor;":"\u201e","ldrdhar;":"\u2967","ldrushar;":"\u294b","ldsh;":"\u21b2","le;":"\u2264","leftarrow;":"\u2190","leftarrowtail;":"\u21a2","leftharpoondown;":"\u21bd","leftharpoonup;":"\u21bc","leftleftarrows;":"\u21c7","leftrightarrow;":"\u2194","leftrightarrows;":"\u21c6","leftrightharpoons;":"\u21cb","leftrightsquigarrow;":"\u21ad","leftthreetimes;":"\u22cb","leg;":"\u22da","leq;":"\u2264","leqq;":"\u2266","leqslant;":"\u2a7d","les;":"\u2a7d","lescc;":"\u2aa8","lesdot;":"\u2a7f","lesdoto;":"\u2a81","lesdotor;":"\u2a83","lesg;":"\u22da\ufe00","lesges;":"\u2a93","lessapprox;":"\u2a85","lessdot;":"\u22d6","lesseqgtr;":"\u22da","lesseqqgtr;":"\u2a8b","lessgtr;":"\u2276","lesssim;":"\u2272","lfisht;":"\u297c","lfloor;":"\u230a","lfr;":"\ud835\udd29","lg;":"\u2276","lgE;":"\u2a91","lhard;":"\u21bd","lharu;":"\u21bc","lharul;":"\u296a","lhblk;":"\u2584","ljcy;":"\u0459","ll;":"\u226a","llarr;":"\u21c7","llcorner;":"\u231e","llhard;":"\u296b","lltri;":"\u25fa","lmidot;":"\u0140","lmoust;":"\u23b0","lmoustache;":"\u23b0","lnE;":"\u2268","lnap;":"\u2a89","lnapprox;":"\u2a89","lne;":"\u2a87","lneq;":"\u2a87","lneqq;":"\u2268","lnsim;":"\u22e6","loang;":"\u27ec","loarr;":"\u21fd","lobrk;":"\u27e6","longleftarrow;":"\u27f5","longleftrightarrow;":"\u27f7","longmapsto;":"\u27fc","longrightarrow;":"\u27f6","looparrowleft;":"\u21ab","looparrowright;":"\u21ac","lopar;":"\u2985","lopf;":"\ud835\udd5d","loplus;":"\u2a2d","lotimes;":"\u2a34","lowast;":"\u2217","lowbar;":"_","loz;":"\u25ca","lozenge;":"\u25ca","lozf;":"\u29eb","lpar;":"(","lparlt;":"\u2993","lrarr;":"\u21c6","lrcorner;":"\u231f","lrhar;":"\u21cb","lrhard;":"\u296d","lrm;":"\u200e","lrtri;":"\u22bf","lsaquo;":"\u2039","lscr;":"\ud835\udcc1","lsh;":"\u21b0","lsim;":"\u2272","lsime;":"\u2a8d","lsimg;":"\u2a8f","lsqb;":"[","lsquo;":"\u2018","lsquor;":"\u201a","lstrok;":"\u0142",lt:"<","lt;":"<","ltcc;":"\u2aa6","ltcir;":"\u2a79","ltdot;":"\u22d6","lthree;":"\u22cb","ltimes;":"\u22c9","ltlarr;":"\u2976","ltquest;":"\u2a7b","ltrPar;":"\u2996","ltri;":"\u25c3","ltrie;":"\u22b4","ltrif;":"\u25c2","lurdshar;":"\u294a","luruhar;":"\u2966","lvertneqq;":"\u2268\ufe00","lvnE;":"\u2268\ufe00","mDDot;":"\u223a",macr:"\xaf","macr;":"\xaf","male;":"\u2642","malt;":"\u2720","maltese;":"\u2720","map;":"\u21a6","mapsto;":"\u21a6","mapstodown;":"\u21a7","mapstoleft;":"\u21a4","mapstoup;":"\u21a5","marker;":"\u25ae","mcomma;":"\u2a29","mcy;":"\u043c","mdash;":"\u2014","measuredangle;":"\u2221","mfr;":"\ud835\udd2a","mho;":"\u2127",micro:"\xb5","micro;":"\xb5","mid;":"\u2223","midast;":"*","midcir;":"\u2af0",middot:"\xb7","middot;":"\xb7","minus;":"\u2212","minusb;":"\u229f","minusd;":"\u2238","minusdu;":"\u2a2a","mlcp;":"\u2adb","mldr;":"\u2026","mnplus;":"\u2213","models;":"\u22a7","mopf;":"\ud835\udd5e","mp;":"\u2213","mscr;":"\ud835\udcc2","mstpos;":"\u223e","mu;":"\u03bc","multimap;":"\u22b8","mumap;":"\u22b8","nGg;":"\u22d9\u0338","nGt;":"\u226b\u20d2","nGtv;":"\u226b\u0338","nLeftarrow;":"\u21cd","nLeftrightarrow;":"\u21ce","nLl;":"\u22d8\u0338","nLt;":"\u226a\u20d2","nLtv;":"\u226a\u0338","nRightarrow;":"\u21cf","nVDash;":"\u22af","nVdash;":"\u22ae","nabla;":"\u2207","nacute;":"\u0144","nang;":"\u2220\u20d2","nap;":"\u2249","napE;":"\u2a70\u0338","napid;":"\u224b\u0338","napos;":"\u0149","napprox;":"\u2249","natur;":"\u266e","natural;":"\u266e","naturals;":"\u2115",nbsp:"\xa0","nbsp;":"\xa0","nbump;":"\u224e\u0338","nbumpe;":"\u224f\u0338","ncap;":"\u2a43","ncaron;":"\u0148","ncedil;":"\u0146","ncong;":"\u2247","ncongdot;":"\u2a6d\u0338","ncup;":"\u2a42","ncy;":"\u043d","ndash;":"\u2013","ne;":"\u2260","neArr;":"\u21d7","nearhk;":"\u2924","nearr;":"\u2197","nearrow;":"\u2197","nedot;":"\u2250\u0338","nequiv;":"\u2262","nesear;":"\u2928","nesim;":"\u2242\u0338","nexist;":"\u2204","nexists;":"\u2204","nfr;":"\ud835\udd2b","ngE;":"\u2267\u0338","nge;":"\u2271","ngeq;":"\u2271","ngeqq;":"\u2267\u0338","ngeqslant;":"\u2a7e\u0338","nges;":"\u2a7e\u0338","ngsim;":"\u2275","ngt;":"\u226f","ngtr;":"\u226f","nhArr;":"\u21ce","nharr;":"\u21ae","nhpar;":"\u2af2","ni;":"\u220b","nis;":"\u22fc","nisd;":"\u22fa","niv;":"\u220b","njcy;":"\u045a","nlArr;":"\u21cd","nlE;":"\u2266\u0338","nlarr;":"\u219a","nldr;":"\u2025","nle;":"\u2270","nleftarrow;":"\u219a","nleftrightarrow;":"\u21ae","nleq;":"\u2270","nleqq;":"\u2266\u0338","nleqslant;":"\u2a7d\u0338","nles;":"\u2a7d\u0338","nless;":"\u226e","nlsim;":"\u2274","nlt;":"\u226e","nltri;":"\u22ea","nltrie;":"\u22ec","nmid;":"\u2224","nopf;":"\ud835\udd5f",not:"\xac","not;":"\xac","notin;":"\u2209","notinE;":"\u22f9\u0338","notindot;":"\u22f5\u0338","notinva;":"\u2209","notinvb;":"\u22f7","notinvc;":"\u22f6","notni;":"\u220c","notniva;":"\u220c","notnivb;":"\u22fe","notnivc;":"\u22fd","npar;":"\u2226","nparallel;":"\u2226","nparsl;":"\u2afd\u20e5","npart;":"\u2202\u0338","npolint;":"\u2a14","npr;":"\u2280","nprcue;":"\u22e0","npre;":"\u2aaf\u0338","nprec;":"\u2280","npreceq;":"\u2aaf\u0338","nrArr;":"\u21cf","nrarr;":"\u219b","nrarrc;":"\u2933\u0338","nrarrw;":"\u219d\u0338","nrightarrow;":"\u219b","nrtri;":"\u22eb","nrtrie;":"\u22ed","nsc;":"\u2281","nsccue;":"\u22e1","nsce;":"\u2ab0\u0338","nscr;":"\ud835\udcc3","nshortmid;":"\u2224","nshortparallel;":"\u2226","nsim;":"\u2241","nsime;":"\u2244","nsimeq;":"\u2244","nsmid;":"\u2224","nspar;":"\u2226","nsqsube;":"\u22e2","nsqsupe;":"\u22e3","nsub;":"\u2284","nsubE;":"\u2ac5\u0338","nsube;":"\u2288","nsubset;":"\u2282\u20d2","nsubseteq;":"\u2288","nsubseteqq;":"\u2ac5\u0338","nsucc;":"\u2281","nsucceq;":"\u2ab0\u0338","nsup;":"\u2285","nsupE;":"\u2ac6\u0338","nsupe;":"\u2289","nsupset;":"\u2283\u20d2","nsupseteq;":"\u2289","nsupseteqq;":"\u2ac6\u0338","ntgl;":"\u2279",ntilde:"\xf1","ntilde;":"\xf1","ntlg;":"\u2278","ntriangleleft;":"\u22ea","ntrianglelefteq;":"\u22ec","ntriangleright;":"\u22eb","ntrianglerighteq;":"\u22ed","nu;":"\u03bd","num;":"#","numero;":"\u2116","numsp;":"\u2007","nvDash;":"\u22ad","nvHarr;":"\u2904","nvap;":"\u224d\u20d2","nvdash;":"\u22ac","nvge;":"\u2265\u20d2","nvgt;":">\u20d2","nvinfin;":"\u29de","nvlArr;":"\u2902","nvle;":"\u2264\u20d2","nvlt;":"<\u20d2","nvltrie;":"\u22b4\u20d2","nvrArr;":"\u2903","nvrtrie;":"\u22b5\u20d2","nvsim;":"\u223c\u20d2","nwArr;":"\u21d6","nwarhk;":"\u2923","nwarr;":"\u2196","nwarrow;":"\u2196","nwnear;":"\u2927","oS;":"\u24c8",oacute:"\xf3","oacute;":"\xf3","oast;":"\u229b","ocir;":"\u229a",ocirc:"\xf4","ocirc;":"\xf4","ocy;":"\u043e","odash;":"\u229d","odblac;":"\u0151","odiv;":"\u2a38","odot;":"\u2299","odsold;":"\u29bc","oelig;":"\u0153","ofcir;":"\u29bf","ofr;":"\ud835\udd2c","ogon;":"\u02db",ograve:"\xf2","ograve;":"\xf2","ogt;":"\u29c1","ohbar;":"\u29b5","ohm;":"\u03a9","oint;":"\u222e","olarr;":"\u21ba","olcir;":"\u29be","olcross;":"\u29bb","oline;":"\u203e","olt;":"\u29c0","omacr;":"\u014d","omega;":"\u03c9","omicron;":"\u03bf","omid;":"\u29b6","ominus;":"\u2296","oopf;":"\ud835\udd60","opar;":"\u29b7","operp;":"\u29b9","oplus;":"\u2295","or;":"\u2228","orarr;":"\u21bb","ord;":"\u2a5d","order;":"\u2134","orderof;":"\u2134",ordf:"\xaa","ordf;":"\xaa",ordm:"\xba","ordm;":"\xba","origof;":"\u22b6","oror;":"\u2a56","orslope;":"\u2a57","orv;":"\u2a5b","oscr;":"\u2134",oslash:"\xf8","oslash;":"\xf8","osol;":"\u2298",otilde:"\xf5","otilde;":"\xf5","otimes;":"\u2297","otimesas;":"\u2a36",ouml:"\xf6","ouml;":"\xf6","ovbar;":"\u233d","par;":"\u2225",para:"\xb6","para;":"\xb6","parallel;":"\u2225","parsim;":"\u2af3","parsl;":"\u2afd","part;":"\u2202","pcy;":"\u043f","percnt;":"%","period;":".","permil;":"\u2030","perp;":"\u22a5","pertenk;":"\u2031","pfr;":"\ud835\udd2d","phi;":"\u03c6","phiv;":"\u03d5","phmmat;":"\u2133","phone;":"\u260e","pi;":"\u03c0","pitchfork;":"\u22d4","piv;":"\u03d6","planck;":"\u210f","planckh;":"\u210e","plankv;":"\u210f","plus;":"+","plusacir;":"\u2a23","plusb;":"\u229e","pluscir;":"\u2a22","plusdo;":"\u2214","plusdu;":"\u2a25","pluse;":"\u2a72",plusmn:"\xb1","plusmn;":"\xb1","plussim;":"\u2a26","plustwo;":"\u2a27","pm;":"\xb1","pointint;":"\u2a15","popf;":"\ud835\udd61",pound:"\xa3","pound;":"\xa3","pr;":"\u227a","prE;":"\u2ab3","prap;":"\u2ab7","prcue;":"\u227c","pre;":"\u2aaf","prec;":"\u227a","precapprox;":"\u2ab7","preccurlyeq;":"\u227c","preceq;":"\u2aaf","precnapprox;":"\u2ab9","precneqq;":"\u2ab5","precnsim;":"\u22e8","precsim;":"\u227e","prime;":"\u2032","primes;":"\u2119","prnE;":"\u2ab5","prnap;":"\u2ab9","prnsim;":"\u22e8","prod;":"\u220f","profalar;":"\u232e","profline;":"\u2312","profsurf;":"\u2313","prop;":"\u221d","propto;":"\u221d","prsim;":"\u227e","prurel;":"\u22b0","pscr;":"\ud835\udcc5","psi;":"\u03c8","puncsp;":"\u2008","qfr;":"\ud835\udd2e","qint;":"\u2a0c","qopf;":"\ud835\udd62","qprime;":"\u2057","qscr;":"\ud835\udcc6","quaternions;":"\u210d","quatint;":"\u2a16","quest;":"?","questeq;":"\u225f",quot:'"',"quot;":'"',"rAarr;":"\u21db","rArr;":"\u21d2","rAtail;":"\u291c","rBarr;":"\u290f","rHar;":"\u2964","race;":"\u223d\u0331","racute;":"\u0155","radic;":"\u221a","raemptyv;":"\u29b3","rang;":"\u27e9","rangd;":"\u2992","range;":"\u29a5","rangle;":"\u27e9",raquo:"\xbb","raquo;":"\xbb","rarr;":"\u2192","rarrap;":"\u2975","rarrb;":"\u21e5","rarrbfs;":"\u2920","rarrc;":"\u2933","rarrfs;":"\u291e","rarrhk;":"\u21aa","rarrlp;":"\u21ac","rarrpl;":"\u2945","rarrsim;":"\u2974","rarrtl;":"\u21a3","rarrw;":"\u219d","ratail;":"\u291a","ratio;":"\u2236","rationals;":"\u211a","rbarr;":"\u290d","rbbrk;":"\u2773","rbrace;":"}","rbrack;":"]","rbrke;":"\u298c","rbrksld;":"\u298e","rbrkslu;":"\u2990","rcaron;":"\u0159","rcedil;":"\u0157","rceil;":"\u2309","rcub;":"}","rcy;":"\u0440","rdca;":"\u2937","rdldhar;":"\u2969","rdquo;":"\u201d","rdquor;":"\u201d","rdsh;":"\u21b3","real;":"\u211c","realine;":"\u211b","realpart;":"\u211c","reals;":"\u211d","rect;":"\u25ad",reg:"\xae","reg;":"\xae","rfisht;":"\u297d","rfloor;":"\u230b","rfr;":"\ud835\udd2f","rhard;":"\u21c1","rharu;":"\u21c0","rharul;":"\u296c","rho;":"\u03c1","rhov;":"\u03f1","rightarrow;":"\u2192","rightarrowtail;":"\u21a3","rightharpoondown;":"\u21c1","rightharpoonup;":"\u21c0","rightleftarrows;":"\u21c4","rightleftharpoons;":"\u21cc","rightrightarrows;":"\u21c9","rightsquigarrow;":"\u219d","rightthreetimes;":"\u22cc","ring;":"\u02da","risingdotseq;":"\u2253","rlarr;":"\u21c4","rlhar;":"\u21cc","rlm;":"\u200f","rmoust;":"\u23b1","rmoustache;":"\u23b1","rnmid;":"\u2aee","roang;":"\u27ed","roarr;":"\u21fe","robrk;":"\u27e7","ropar;":"\u2986","ropf;":"\ud835\udd63","roplus;":"\u2a2e","rotimes;":"\u2a35","rpar;":")","rpargt;":"\u2994","rppolint;":"\u2a12","rrarr;":"\u21c9","rsaquo;":"\u203a","rscr;":"\ud835\udcc7","rsh;":"\u21b1","rsqb;":"]","rsquo;":"\u2019","rsquor;":"\u2019","rthree;":"\u22cc","rtimes;":"\u22ca","rtri;":"\u25b9","rtrie;":"\u22b5","rtrif;":"\u25b8","rtriltri;":"\u29ce","ruluhar;":"\u2968","rx;":"\u211e","sacute;":"\u015b","sbquo;":"\u201a","sc;":"\u227b","scE;":"\u2ab4","scap;":"\u2ab8","scaron;":"\u0161","sccue;":"\u227d","sce;":"\u2ab0","scedil;":"\u015f","scirc;":"\u015d","scnE;":"\u2ab6","scnap;":"\u2aba","scnsim;":"\u22e9","scpolint;":"\u2a13","scsim;":"\u227f","scy;":"\u0441","sdot;":"\u22c5","sdotb;":"\u22a1","sdote;":"\u2a66","seArr;":"\u21d8","searhk;":"\u2925","searr;":"\u2198","searrow;":"\u2198",sect:"\xa7","sect;":"\xa7","semi;":";","seswar;":"\u2929","setminus;":"\u2216","setmn;":"\u2216","sext;":"\u2736","sfr;":"\ud835\udd30","sfrown;":"\u2322","sharp;":"\u266f","shchcy;":"\u0449","shcy;":"\u0448","shortmid;":"\u2223","shortparallel;":"\u2225",shy:"\xad","shy;":"\xad","sigma;":"\u03c3","sigmaf;":"\u03c2","sigmav;":"\u03c2","sim;":"\u223c","simdot;":"\u2a6a","sime;":"\u2243","simeq;":"\u2243","simg;":"\u2a9e","simgE;":"\u2aa0","siml;":"\u2a9d","simlE;":"\u2a9f","simne;":"\u2246","simplus;":"\u2a24","simrarr;":"\u2972","slarr;":"\u2190","smallsetminus;":"\u2216","smashp;":"\u2a33","smeparsl;":"\u29e4","smid;":"\u2223","smile;":"\u2323","smt;":"\u2aaa","smte;":"\u2aac","smtes;":"\u2aac\ufe00","softcy;":"\u044c","sol;":"/","solb;":"\u29c4","solbar;":"\u233f","sopf;":"\ud835\udd64","spades;":"\u2660","spadesuit;":"\u2660","spar;":"\u2225","sqcap;":"\u2293","sqcaps;":"\u2293\ufe00","sqcup;":"\u2294","sqcups;":"\u2294\ufe00","sqsub;":"\u228f","sqsube;":"\u2291","sqsubset;":"\u228f","sqsubseteq;":"\u2291","sqsup;":"\u2290","sqsupe;":"\u2292","sqsupset;":"\u2290","sqsupseteq;":"\u2292","squ;":"\u25a1","square;":"\u25a1","squarf;":"\u25aa","squf;":"\u25aa","srarr;":"\u2192","sscr;":"\ud835\udcc8","ssetmn;":"\u2216","ssmile;":"\u2323","sstarf;":"\u22c6","star;":"\u2606","starf;":"\u2605","straightepsilon;":"\u03f5","straightphi;":"\u03d5","strns;":"\xaf","sub;":"\u2282","subE;":"\u2ac5","subdot;":"\u2abd","sube;":"\u2286","subedot;":"\u2ac3","submult;":"\u2ac1","subnE;":"\u2acb","subne;":"\u228a","subplus;":"\u2abf","subrarr;":"\u2979","subset;":"\u2282","subseteq;":"\u2286","subseteqq;":"\u2ac5","subsetneq;":"\u228a","subsetneqq;":"\u2acb","subsim;":"\u2ac7","subsub;":"\u2ad5","subsup;":"\u2ad3","succ;":"\u227b","succapprox;":"\u2ab8","succcurlyeq;":"\u227d","succeq;":"\u2ab0","succnapprox;":"\u2aba","succneqq;":"\u2ab6","succnsim;":"\u22e9","succsim;":"\u227f","sum;":"\u2211","sung;":"\u266a",sup1:"\xb9","sup1;":"\xb9",sup2:"\xb2","sup2;":"\xb2",sup3:"\xb3","sup3;":"\xb3","sup;":"\u2283","supE;":"\u2ac6","supdot;":"\u2abe","supdsub;":"\u2ad8","supe;":"\u2287","supedot;":"\u2ac4","suphsol;":"\u27c9","suphsub;":"\u2ad7","suplarr;":"\u297b","supmult;":"\u2ac2","supnE;":"\u2acc","supne;":"\u228b","supplus;":"\u2ac0","supset;":"\u2283","supseteq;":"\u2287","supseteqq;":"\u2ac6","supsetneq;":"\u228b","supsetneqq;":"\u2acc","supsim;":"\u2ac8","supsub;":"\u2ad4","supsup;":"\u2ad6","swArr;":"\u21d9","swarhk;":"\u2926","swarr;":"\u2199","swarrow;":"\u2199","swnwar;":"\u292a",szlig:"\xdf","szlig;":"\xdf","target;":"\u2316","tau;":"\u03c4","tbrk;":"\u23b4","tcaron;":"\u0165","tcedil;":"\u0163","tcy;":"\u0442","tdot;":"\u20db","telrec;":"\u2315","tfr;":"\ud835\udd31","there4;":"\u2234","therefore;":"\u2234","theta;":"\u03b8","thetasym;":"\u03d1","thetav;":"\u03d1","thickapprox;":"\u2248","thicksim;":"\u223c","thinsp;":"\u2009","thkap;":"\u2248","thksim;":"\u223c",thorn:"\xfe","thorn;":"\xfe","tilde;":"\u02dc",times:"\xd7","times;":"\xd7","timesb;":"\u22a0","timesbar;":"\u2a31","timesd;":"\u2a30","tint;":"\u222d","toea;":"\u2928","top;":"\u22a4","topbot;":"\u2336","topcir;":"\u2af1","topf;":"\ud835\udd65","topfork;":"\u2ada","tosa;":"\u2929","tprime;":"\u2034","trade;":"\u2122","triangle;":"\u25b5","triangledown;":"\u25bf","triangleleft;":"\u25c3","trianglelefteq;":"\u22b4","triangleq;":"\u225c","triangleright;":"\u25b9","trianglerighteq;":"\u22b5","tridot;":"\u25ec","trie;":"\u225c","triminus;":"\u2a3a","triplus;":"\u2a39","trisb;":"\u29cd","tritime;":"\u2a3b","trpezium;":"\u23e2","tscr;":"\ud835\udcc9","tscy;":"\u0446","tshcy;":"\u045b","tstrok;":"\u0167","twixt;":"\u226c","twoheadleftarrow;":"\u219e","twoheadrightarrow;":"\u21a0","uArr;":"\u21d1","uHar;":"\u2963",uacute:"\xfa","uacute;":"\xfa","uarr;":"\u2191","ubrcy;":"\u045e","ubreve;":"\u016d",ucirc:"\xfb","ucirc;":"\xfb","ucy;":"\u0443","udarr;":"\u21c5","udblac;":"\u0171","udhar;":"\u296e","ufisht;":"\u297e","ufr;":"\ud835\udd32",ugrave:"\xf9","ugrave;":"\xf9","uharl;":"\u21bf","uharr;":"\u21be","uhblk;":"\u2580","ulcorn;":"\u231c","ulcorner;":"\u231c","ulcrop;":"\u230f","ultri;":"\u25f8","umacr;":"\u016b",uml:"\xa8","uml;":"\xa8","uogon;":"\u0173","uopf;":"\ud835\udd66","uparrow;":"\u2191","updownarrow;":"\u2195","upharpoonleft;":"\u21bf","upharpoonright;":"\u21be","uplus;":"\u228e","upsi;":"\u03c5","upsih;":"\u03d2","upsilon;":"\u03c5","upuparrows;":"\u21c8","urcorn;":"\u231d","urcorner;":"\u231d","urcrop;":"\u230e","uring;":"\u016f","urtri;":"\u25f9","uscr;":"\ud835\udcca","utdot;":"\u22f0","utilde;":"\u0169","utri;":"\u25b5","utrif;":"\u25b4","uuarr;":"\u21c8",uuml:"\xfc","uuml;":"\xfc","uwangle;":"\u29a7","vArr;":"\u21d5","vBar;":"\u2ae8","vBarv;":"\u2ae9","vDash;":"\u22a8","vangrt;":"\u299c","varepsilon;":"\u03f5","varkappa;":"\u03f0","varnothing;":"\u2205","varphi;":"\u03d5","varpi;":"\u03d6","varpropto;":"\u221d","varr;":"\u2195","varrho;":"\u03f1","varsigma;":"\u03c2","varsubsetneq;":"\u228a\ufe00","varsubsetneqq;":"\u2acb\ufe00","varsupsetneq;":"\u228b\ufe00","varsupsetneqq;":"\u2acc\ufe00","vartheta;":"\u03d1","vartriangleleft;":"\u22b2","vartriangleright;":"\u22b3","vcy;":"\u0432","vdash;":"\u22a2","vee;":"\u2228","veebar;":"\u22bb","veeeq;":"\u225a","vellip;":"\u22ee","verbar;":"|","vert;":"|","vfr;":"\ud835\udd33","vltri;":"\u22b2","vnsub;":"\u2282\u20d2","vnsup;":"\u2283\u20d2","vopf;":"\ud835\udd67","vprop;":"\u221d","vrtri;":"\u22b3","vscr;":"\ud835\udccb","vsubnE;":"\u2acb\ufe00","vsubne;":"\u228a\ufe00","vsupnE;":"\u2acc\ufe00","vsupne;":"\u228b\ufe00","vzigzag;":"\u299a","wcirc;":"\u0175","wedbar;":"\u2a5f","wedge;":"\u2227","wedgeq;":"\u2259","weierp;":"\u2118","wfr;":"\ud835\udd34","wopf;":"\ud835\udd68","wp;":"\u2118","wr;":"\u2240","wreath;":"\u2240","wscr;":"\ud835\udccc","xcap;":"\u22c2","xcirc;":"\u25ef","xcup;":"\u22c3","xdtri;":"\u25bd","xfr;":"\ud835\udd35","xhArr;":"\u27fa","xharr;":"\u27f7","xi;":"\u03be","xlArr;":"\u27f8","xlarr;":"\u27f5","xmap;":"\u27fc","xnis;":"\u22fb","xodot;":"\u2a00","xopf;":"\ud835\udd69","xoplus;":"\u2a01","xotime;":"\u2a02","xrArr;":"\u27f9","xrarr;":"\u27f6","xscr;":"\ud835\udccd","xsqcup;":"\u2a06","xuplus;":"\u2a04","xutri;":"\u25b3","xvee;":"\u22c1","xwedge;":"\u22c0",yacute:"\xfd","yacute;":"\xfd","yacy;":"\u044f","ycirc;":"\u0177","ycy;":"\u044b",yen:"\xa5","yen;":"\xa5","yfr;":"\ud835\udd36","yicy;":"\u0457","yopf;":"\ud835\udd6a","yscr;":"\ud835\udcce","yucy;":"\u044e",yuml:"\xff","yuml;":"\xff","zacute;":"\u017a","zcaron;":"\u017e","zcy;":"\u0437","zdot;":"\u017c","zeetrf;":"\u2128","zeta;":"\u03b6","zfr;":"\ud835\udd37","zhcy;":"\u0436","zigrarr;":"\u21dd","zopf;":"\ud835\udd6b","zscr;":"\ud835\udccf","zwj;":"\u200d","zwnj;":"\u200c"},B.b8,t.B)
B.bb=A.a(s(["null-character","invalid-codepoint","incorrectly-placed-solidus","incorrect-cr-newline-entity","illegal-windows-1252-entity","cant-convert-numeric-entity","illegal-codepoint-for-numeric-entity","numeric-entity-without-semicolon","expected-numeric-entity-but-got-eof","expected-numeric-entity","named-entity-without-semicolon","expected-named-entity","attributes-in-end-tag","self-closing-flag-on-end-tag","expected-tag-name-but-got-right-bracket","expected-tag-name-but-got-question-mark","expected-tag-name",u.g,"expected-closing-tag-but-got-eof","expected-closing-tag-but-got-char","eof-in-tag-name","expected-attribute-name-but-got-eof","eof-in-attribute-name","invalid-character-in-attribute-name","duplicate-attribute","expected-end-of-tag-name-but-got-eof","expected-attribute-value-but-got-eof",u.A,"equals-in-unquoted-attribute-value",u.V,"invalid-character-after-attribute-name",u.H,"eof-in-attribute-value-double-quote","eof-in-attribute-value-single-quote","eof-in-attribute-value-no-quotes","unexpected-EOF-after-solidus-in-tag",u.B,"expected-dashes-or-doctype",u.d,"unexpected-space-after-double-dash-in-comment","incorrect-comment","eof-in-comment","eof-in-comment-end-dash",u.K,"eof-in-comment-double-dash","eof-in-comment-end-space-state","eof-in-comment-end-bang-state","unexpected-char-in-comment","need-space-after-doctype",u.f,"expected-doctype-name-but-got-eof","eof-in-doctype-name","eof-in-doctype",u.S,"unexpected-end-of-doctype","unexpected-char-in-doctype","eof-in-innerhtml","unexpected-doctype","non-html-root","expected-doctype-but-got-eof","unknown-doctype","expected-doctype-but-got-chars","expected-doctype-but-got-start-tag","expected-doctype-but-got-end-tag","end-tag-after-implied-root","expected-named-closing-tag-but-got-eof","two-heads-are-not-better-than-one","unexpected-end-tag","unexpected-start-tag-out-of-my-head","unexpected-start-tag","missing-end-tag","missing-end-tags","unexpected-start-tag-implies-end-tag","unexpected-start-tag-treated-as","deprecated-tag","unexpected-start-tag-ignored","expected-one-end-tag-but-got-another","end-tag-too-early","end-tag-too-early-named","end-tag-too-early-ignored","adoption-agency-1.1","adoption-agency-1.2","adoption-agency-1.3","unexpected-end-tag-treated-as","no-end-tag","unexpected-implied-end-tag-in-table","unexpected-implied-end-tag-in-table-body","unexpected-char-implies-table-voodoo","unexpected-hidden-input-in-table","unexpected-form-in-table",u.M,"unexpected-end-tag-implies-table-voodoo","unexpected-cell-in-table-body","unexpected-cell-end-tag","unexpected-end-tag-in-table-body","unexpected-implied-end-tag-in-table-row","unexpected-end-tag-in-table-row","unexpected-select-in-select","unexpected-input-in-select","unexpected-start-tag-in-select","unexpected-end-tag-in-select",u.a,u.r,"unexpected-char-after-body","unexpected-start-tag-after-body","unexpected-end-tag-after-body","unexpected-char-in-frameset","unexpected-start-tag-in-frameset",u.q,"unexpected-end-tag-in-frameset","unexpected-char-after-frameset","unexpected-start-tag-after-frameset","unexpected-end-tag-after-frameset","unexpected-end-tag-after-body-innerhtml","expected-eof-but-got-char","expected-eof-but-got-start-tag","expected-eof-but-got-end-tag","eof-in-table","eof-in-select","eof-in-frameset","eof-in-script-in-script","eof-in-foreign-lands","non-void-element-with-trailing-solidus",u.G,"unexpected-end-tag-before-html","undefined-error"]),t.s)
B.bF=new A.r(126,{"null-character":"Null character in input stream, replaced with U+FFFD.","invalid-codepoint":"Invalid codepoint in stream.","incorrectly-placed-solidus":"Solidus (/) incorrectly placed in tag.","incorrect-cr-newline-entity":"Incorrect CR newline entity, replaced with LF.","illegal-windows-1252-entity":"Entity used with illegal number (windows-1252 reference).","cant-convert-numeric-entity":"Numeric entity couldn't be converted to character (codepoint U+%(charAsInt)08x).","illegal-codepoint-for-numeric-entity":"Numeric entity represents an illegal codepoint: U+%(charAsInt)08x.","numeric-entity-without-semicolon":"Numeric entity didn't end with ';'.","expected-numeric-entity-but-got-eof":"Numeric entity expected. Got end of file instead.","expected-numeric-entity":"Numeric entity expected but none found.","named-entity-without-semicolon":"Named entity didn't end with ';'.","expected-named-entity":"Named entity expected. Got none.","attributes-in-end-tag":"End tag contains unexpected attributes.","self-closing-flag-on-end-tag":"End tag contains unexpected self-closing flag.","expected-tag-name-but-got-right-bracket":"Expected tag name. Got '>' instead.","expected-tag-name-but-got-question-mark":"Expected tag name. Got '?' instead. (HTML doesn't support processing instructions.)","expected-tag-name":"Expected tag name. Got something else instead","expected-closing-tag-but-got-right-bracket":"Expected closing tag. Got '>' instead. Ignoring '</>'.","expected-closing-tag-but-got-eof":"Expected closing tag. Unexpected end of file.","expected-closing-tag-but-got-char":"Expected closing tag. Unexpected character '%(data)s' found.","eof-in-tag-name":"Unexpected end of file in the tag name.","expected-attribute-name-but-got-eof":"Unexpected end of file. Expected attribute name instead.","eof-in-attribute-name":"Unexpected end of file in attribute name.","invalid-character-in-attribute-name":"Invalid character in attribute name","duplicate-attribute":"Dropped duplicate attribute on tag.","expected-end-of-tag-name-but-got-eof":"Unexpected end of file. Expected = or end of tag.","expected-attribute-value-but-got-eof":"Unexpected end of file. Expected attribute value.","expected-attribute-value-but-got-right-bracket":"Expected attribute value. Got '>' instead.","equals-in-unquoted-attribute-value":"Unexpected = in unquoted attribute","unexpected-character-in-unquoted-attribute-value":"Unexpected character in unquoted attribute","invalid-character-after-attribute-name":"Unexpected character after attribute name.","unexpected-character-after-attribute-value":"Unexpected character after attribute value.","eof-in-attribute-value-double-quote":'Unexpected end of file in attribute value (".',"eof-in-attribute-value-single-quote":"Unexpected end of file in attribute value (').","eof-in-attribute-value-no-quotes":"Unexpected end of file in attribute value.","unexpected-EOF-after-solidus-in-tag":"Unexpected end of file in tag. Expected >","unexpected-character-after-soldius-in-tag":"Unexpected character after / in tag. Expected >","expected-dashes-or-doctype":"Expected '--' or 'DOCTYPE'. Not found.","unexpected-bang-after-double-dash-in-comment":"Unexpected ! after -- in comment","unexpected-space-after-double-dash-in-comment":"Unexpected space after -- in comment","incorrect-comment":"Incorrect comment.","eof-in-comment":"Unexpected end of file in comment.","eof-in-comment-end-dash":"Unexpected end of file in comment (-)","unexpected-dash-after-double-dash-in-comment":"Unexpected '-' after '--' found in comment.","eof-in-comment-double-dash":"Unexpected end of file in comment (--).","eof-in-comment-end-space-state":"Unexpected end of file in comment.","eof-in-comment-end-bang-state":"Unexpected end of file in comment.","unexpected-char-in-comment":"Unexpected character in comment found.","need-space-after-doctype":"No space after literal string 'DOCTYPE'.","expected-doctype-name-but-got-right-bracket":"Unexpected > character. Expected DOCTYPE name.","expected-doctype-name-but-got-eof":"Unexpected end of file. Expected DOCTYPE name.","eof-in-doctype-name":"Unexpected end of file in DOCTYPE name.","eof-in-doctype":"Unexpected end of file in DOCTYPE.","expected-space-or-right-bracket-in-doctype":"Expected space or '>'. Got '%(data)s'","unexpected-end-of-doctype":"Unexpected end of DOCTYPE.","unexpected-char-in-doctype":"Unexpected character in DOCTYPE.","eof-in-innerhtml":"XXX innerHTML EOF","unexpected-doctype":"Unexpected DOCTYPE. Ignored.","non-html-root":"html needs to be the first start tag.","expected-doctype-but-got-eof":"Unexpected End of file. Expected DOCTYPE.","unknown-doctype":"Erroneous DOCTYPE.","expected-doctype-but-got-chars":"Unexpected non-space characters. Expected DOCTYPE.","expected-doctype-but-got-start-tag":"Unexpected start tag (%(name)s). Expected DOCTYPE.","expected-doctype-but-got-end-tag":"Unexpected end tag (%(name)s). Expected DOCTYPE.","end-tag-after-implied-root":"Unexpected end tag (%(name)s) after the (implied) root element.","expected-named-closing-tag-but-got-eof":"Unexpected end of file. Expected end tag (%(name)s).","two-heads-are-not-better-than-one":"Unexpected start tag head in existing head. Ignored.","unexpected-end-tag":"Unexpected end tag (%(name)s). Ignored.","unexpected-start-tag-out-of-my-head":"Unexpected start tag (%(name)s) that can be in head. Moved.","unexpected-start-tag":"Unexpected start tag (%(name)s).","missing-end-tag":"Missing end tag (%(name)s).","missing-end-tags":"Missing end tags (%(name)s).","unexpected-start-tag-implies-end-tag":"Unexpected start tag (%(startName)s) implies end tag (%(endName)s).","unexpected-start-tag-treated-as":"Unexpected start tag (%(originalName)s). Treated as %(newName)s.","deprecated-tag":"Unexpected start tag %(name)s. Don't use it!","unexpected-start-tag-ignored":"Unexpected start tag %(name)s. Ignored.","expected-one-end-tag-but-got-another":"Unexpected end tag (%(gotName)s). Missing end tag (%(expectedName)s).","end-tag-too-early":"End tag (%(name)s) seen too early. Expected other end tag.","end-tag-too-early-named":"Unexpected end tag (%(gotName)s). Expected end tag (%(expectedName)s).","end-tag-too-early-ignored":"End tag (%(name)s) seen too early. Ignored.","adoption-agency-1.1":"End tag (%(name)s) violates step 1, paragraph 1 of the adoption agency algorithm.","adoption-agency-1.2":"End tag (%(name)s) violates step 1, paragraph 2 of the adoption agency algorithm.","adoption-agency-1.3":"End tag (%(name)s) violates step 1, paragraph 3 of the adoption agency algorithm.","unexpected-end-tag-treated-as":"Unexpected end tag (%(originalName)s). Treated as %(newName)s.","no-end-tag":"This element (%(name)s) has no end tag.","unexpected-implied-end-tag-in-table":"Unexpected implied end tag (%(name)s) in the table phase.","unexpected-implied-end-tag-in-table-body":"Unexpected implied end tag (%(name)s) in the table body phase.","unexpected-char-implies-table-voodoo":"Unexpected non-space characters in table context caused voodoo mode.","unexpected-hidden-input-in-table":"Unexpected input with type hidden in table context.","unexpected-form-in-table":"Unexpected form in table context.","unexpected-start-tag-implies-table-voodoo":"Unexpected start tag (%(name)s) in table context caused voodoo mode.","unexpected-end-tag-implies-table-voodoo":"Unexpected end tag (%(name)s) in table context caused voodoo mode.","unexpected-cell-in-table-body":"Unexpected table cell start tag (%(name)s) in the table body phase.","unexpected-cell-end-tag":"Got table cell end tag (%(name)s) while required end tags are missing.","unexpected-end-tag-in-table-body":"Unexpected end tag (%(name)s) in the table body phase. Ignored.","unexpected-implied-end-tag-in-table-row":"Unexpected implied end tag (%(name)s) in the table row phase.","unexpected-end-tag-in-table-row":"Unexpected end tag (%(name)s) in the table row phase. Ignored.","unexpected-select-in-select":"Unexpected select start tag in the select phase treated as select end tag.","unexpected-input-in-select":"Unexpected input start tag in the select phase.","unexpected-start-tag-in-select":"Unexpected start tag token (%(name)s in the select phase. Ignored.","unexpected-end-tag-in-select":"Unexpected end tag (%(name)s) in the select phase. Ignored.","unexpected-table-element-start-tag-in-select-in-table":"Unexpected table element start tag (%(name)s) in the select in table phase.","unexpected-table-element-end-tag-in-select-in-table":"Unexpected table element end tag (%(name)s) in the select in table phase.","unexpected-char-after-body":"Unexpected non-space characters in the after body phase.","unexpected-start-tag-after-body":"Unexpected start tag token (%(name)s) in the after body phase.","unexpected-end-tag-after-body":"Unexpected end tag token (%(name)s) in the after body phase.","unexpected-char-in-frameset":"Unepxected characters in the frameset phase. Characters ignored.","unexpected-start-tag-in-frameset":"Unexpected start tag token (%(name)s) in the frameset phase. Ignored.","unexpected-frameset-in-frameset-innerhtml":"Unexpected end tag token (frameset) in the frameset phase (innerHTML).","unexpected-end-tag-in-frameset":"Unexpected end tag token (%(name)s) in the frameset phase. Ignored.","unexpected-char-after-frameset":"Unexpected non-space characters in the after frameset phase. Ignored.","unexpected-start-tag-after-frameset":"Unexpected start tag (%(name)s) in the after frameset phase. Ignored.","unexpected-end-tag-after-frameset":"Unexpected end tag (%(name)s) in the after frameset phase. Ignored.","unexpected-end-tag-after-body-innerhtml":"Unexpected end tag after body(innerHtml)","expected-eof-but-got-char":"Unexpected non-space characters. Expected end of file.","expected-eof-but-got-start-tag":"Unexpected start tag (%(name)s). Expected end of file.","expected-eof-but-got-end-tag":"Unexpected end tag (%(name)s). Expected end of file.","eof-in-table":"Unexpected end of file. Expected table content.","eof-in-select":"Unexpected end of file. Expected select content.","eof-in-frameset":"Unexpected end of file. Expected frameset content.","eof-in-script-in-script":"Unexpected end of file. Expected script content.","eof-in-foreign-lands":"Unexpected end of file. Expected foreign content","non-void-element-with-trailing-solidus":"Trailing solidus not allowed on element %(name)s","unexpected-html-element-in-foreign-content":"Element %(name)s not allowed in a non-html context","unexpected-end-tag-before-html":"Unexpected end tag (%(name)s) before html.","undefined-error":"Undefined error (this sucks and should be fixed)"},B.bb,t.B)
B.bc=A.a(s(["altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","clippath","feblend","fecolormatrix","fecomponenttransfer","fecomposite","feconvolvematrix","fediffuselighting","fedisplacementmap","fedistantlight","feflood","fefunca","fefuncb","fefuncg","fefuncr","fegaussianblur","feimage","femerge","femergenode","femorphology","feoffset","fepointlight","fespecularlighting","fespotlight","fetile","feturbulence","foreignobject","glyphref","lineargradient","radialgradient","textpath"]),t.s)
B.bG=new A.r(36,{altglyph:"altGlyph",altglyphdef:"altGlyphDef",altglyphitem:"altGlyphItem",animatecolor:"animateColor",animatemotion:"animateMotion",animatetransform:"animateTransform",clippath:"clipPath",feblend:"feBlend",fecolormatrix:"feColorMatrix",fecomponenttransfer:"feComponentTransfer",fecomposite:"feComposite",feconvolvematrix:"feConvolveMatrix",fediffuselighting:"feDiffuseLighting",fedisplacementmap:"feDisplacementMap",fedistantlight:"feDistantLight",feflood:"feFlood",fefunca:"feFuncA",fefuncb:"feFuncB",fefuncg:"feFuncG",fefuncr:"feFuncR",fegaussianblur:"feGaussianBlur",feimage:"feImage",femerge:"feMerge",femergenode:"feMergeNode",femorphology:"feMorphology",feoffset:"feOffset",fepointlight:"fePointLight",fespecularlighting:"feSpecularLighting",fespotlight:"feSpotLight",fetile:"feTile",feturbulence:"feTurbulence",foreignobject:"foreignObject",glyphref:"glyphRef",lineargradient:"linearGradient",radialgradient:"radialGradient",textpath:"textPath"},B.bc,t.B)
B.bH=new A.c9([0,"\ufffd",13,"\r",128,"\u20ac",129,"\x81",130,"\u201a",131,"\u0192",132,"\u201e",133,"\u2026",134,"\u2020",135,"\u2021",136,"\u02c6",137,"\u2030",138,"\u0160",139,"\u2039",140,"\u0152",141,"\x8d",142,"\u017d",143,"\x8f",144,"\x90",145,"\u2018",146,"\u2019",147,"\u201c",148,"\u201d",149,"\u2022",150,"\u2013",151,"\u2014",152,"\u02dc",153,"\u2122",154,"\u0161",155,"\u203a",156,"\u0153",157,"\x9d",158,"\u017e",159,"\u0178"],A.aO("c9<h,n>"))
B.L=new A.de("severe")
B.ao=new A.de("warning")
B.an=new A.de("info")
B.al=new A.c9([B.L,"\x1b[31m",B.ao,"\x1b[35m",B.an,"\x1b[32m"],t.ha)
B.c7=new A.c9([B.L,"error",B.ao,"warning",B.an,"info"],t.ha)
B.bh=A.a(s(["xlink:actuate","xlink:arcrole","xlink:href","xlink:role","xlink:show","xlink:title","xlink:type","xml:base","xml:lang","xml:space","xmlns","xmlns:xlink"]),t.s)
B.aJ=new A.aC("xlink","actuate","http://www.w3.org/1999/xlink")
B.aM=new A.aC("xlink","arcrole","http://www.w3.org/1999/xlink")
B.aN=new A.aC("xlink","href","http://www.w3.org/1999/xlink")
B.aL=new A.aC("xlink","role","http://www.w3.org/1999/xlink")
B.aK=new A.aC("xlink","show","http://www.w3.org/1999/xlink")
B.aS=new A.aC("xlink","title","http://www.w3.org/1999/xlink")
B.aR=new A.aC("xlink","type","http://www.w3.org/1999/xlink")
B.aQ=new A.aC("xml","base","http://www.w3.org/XML/1998/namespace")
B.aO=new A.aC("xml","lang","http://www.w3.org/XML/1998/namespace")
B.aH=new A.aC("xml","space","http://www.w3.org/XML/1998/namespace")
B.aP=new A.aC(null,"xmlns","http://www.w3.org/2000/xmlns/")
B.aI=new A.aC("xmlns","xlink","http://www.w3.org/2000/xmlns/")
B.c8=new A.r(12,{"xlink:actuate":B.aJ,"xlink:arcrole":B.aM,"xlink:href":B.aN,"xlink:role":B.aL,"xlink:show":B.aK,"xlink:title":B.aS,"xlink:type":B.aR,"xml:base":B.aQ,"xml:lang":B.aO,"xml:space":B.aH,xmlns:B.aP,"xmlns:xlink":B.aI},B.bh,A.aO("r<n,aC>"))
B.Z=new A.r(0,{},B.v,A.aO("r<n,P>"))
B.bm=A.a(s([]),t.m)
B.am=new A.r(0,{},B.bm,A.aO("r<@,@>"))
B.bn=A.a(s(["attributename","attributetype","basefrequency","baseprofile","calcmode","clippathunits","contentscripttype","contentstyletype","diffuseconstant","edgemode","externalresourcesrequired","filterres","filterunits","glyphref","gradienttransform","gradientunits","kernelmatrix","kernelunitlength","keypoints","keysplines","keytimes","lengthadjust","limitingconeangle","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","numoctaves","pathlength","patterncontentunits","patterntransform","patternunits","pointsatx","pointsaty","pointsatz","preservealpha","preserveaspectratio","primitiveunits","refx","refy","repeatcount","repeatdur","requiredextensions","requiredfeatures","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","surfacescale","systemlanguage","tablevalues","targetx","targety","textlength","viewbox","viewtarget","xchannelselector","ychannelselector","zoomandpan"]),t.s)
B.c9=new A.r(62,{attributename:"attributeName",attributetype:"attributeType",basefrequency:"baseFrequency",baseprofile:"baseProfile",calcmode:"calcMode",clippathunits:"clipPathUnits",contentscripttype:"contentScriptType",contentstyletype:"contentStyleType",diffuseconstant:"diffuseConstant",edgemode:"edgeMode",externalresourcesrequired:"externalResourcesRequired",filterres:"filterRes",filterunits:"filterUnits",glyphref:"glyphRef",gradienttransform:"gradientTransform",gradientunits:"gradientUnits",kernelmatrix:"kernelMatrix",kernelunitlength:"kernelUnitLength",keypoints:"keyPoints",keysplines:"keySplines",keytimes:"keyTimes",lengthadjust:"lengthAdjust",limitingconeangle:"limitingConeAngle",markerheight:"markerHeight",markerunits:"markerUnits",markerwidth:"markerWidth",maskcontentunits:"maskContentUnits",maskunits:"maskUnits",numoctaves:"numOctaves",pathlength:"pathLength",patterncontentunits:"patternContentUnits",patterntransform:"patternTransform",patternunits:"patternUnits",pointsatx:"pointsAtX",pointsaty:"pointsAtY",pointsatz:"pointsAtZ",preservealpha:"preserveAlpha",preserveaspectratio:"preserveAspectRatio",primitiveunits:"primitiveUnits",refx:"refX",refy:"refY",repeatcount:"repeatCount",repeatdur:"repeatDur",requiredextensions:"requiredExtensions",requiredfeatures:"requiredFeatures",specularconstant:"specularConstant",specularexponent:"specularExponent",spreadmethod:"spreadMethod",startoffset:"startOffset",stddeviation:"stdDeviation",stitchtiles:"stitchTiles",surfacescale:"surfaceScale",systemlanguage:"systemLanguage",tablevalues:"tableValues",targetx:"targetX",targety:"targetY",textlength:"textLength",viewbox:"viewBox",viewtarget:"viewTarget",xchannelselector:"xChannelSelector",ychannelselector:"yChannelSelector",zoomandpan:"zoomAndPan"},B.bn,t.B)
B.bv=A.a(s(["li","dt","dd"]),t.s)
B.bu=A.a(s(["li"]),t.s)
B.ag=A.a(s(["dt","dd"]),t.s)
B.cL=new A.r(3,{li:B.bu,dt:B.ag,dd:B.ag},B.bv,A.aO("r<n,l<n>>"))
B.bC=A.a(s(["437","850","852","855","857","860","861","862","863","865","866","869","ansix341968","ansix341986","arabic","ascii","asmo708","big5","big5hkscs","chinese","cp037","cp1026","cp154","cp367","cp424","cp437","cp500","cp775","cp819","cp850","cp852","cp855","cp857","cp860","cp861","cp862","cp863","cp864","cp865","cp866","cp869","cp936","cpgr","cpis","csascii","csbig5","cseuckr","cseucpkdfmtjapanese","csgb2312","cshproman8","csibm037","csibm1026","csibm424","csibm500","csibm855","csibm857","csibm860","csibm861","csibm863","csibm864","csibm865","csibm866","csibm869","csiso2022jp","csiso2022jp2","csiso2022kr","csiso58gb231280","csisolatin1","csisolatin2","csisolatin3","csisolatin4","csisolatin5","csisolatin6","csisolatinarabic","csisolatincyrillic","csisolatingreek","csisolatinhebrew","cskoi8r","csksc56011987","cspc775baltic","cspc850multilingual","cspc862latinhebrew","cspc8codepage437","cspcp852","csptcp154","csshiftjis","csunicode11utf7","cyrillic","cyrillicasian","ebcdiccpbe","ebcdiccpca","ebcdiccpch","ebcdiccphe","ebcdiccpnl","ebcdiccpus","ebcdiccpwt","ecma114","ecma118","elot928","eucjp","euckr","extendedunixcodepackedformatforjapanese","gb18030","gb2312","gb231280","gbk","greek","greek8","hebrew","hproman8","hzgb2312","ibm037","ibm1026","ibm367","ibm424","ibm437","ibm500","ibm775","ibm819","ibm850","ibm852","ibm855","ibm857","ibm860","ibm861","ibm862","ibm863","ibm864","ibm865","ibm866","ibm869","iso2022jp","iso2022jp2","iso2022kr","iso646irv1991","iso646us","iso88591","iso885910","iso8859101992","iso885911987","iso885913","iso885914","iso8859141998","iso885915","iso885916","iso8859162001","iso88592","iso885921987","iso88593","iso885931988","iso88594","iso885941988","iso88595","iso885951988","iso88596","iso885961987","iso88597","iso885971987","iso88598","iso885981988","iso88599","iso885991989","isoceltic","isoir100","isoir101","isoir109","isoir110","isoir126","isoir127","isoir138","isoir144","isoir148","isoir149","isoir157","isoir199","isoir226","isoir58","isoir6","koi8r","koi8u","korean","ksc5601","ksc56011987","ksc56011989","l1","l10","l2","l3","l4","l5","l6","l8","latin1","latin10","latin2","latin3","latin4","latin5","latin6","latin8","latin9","ms936","mskanji","pt154","ptcp154","r8","roman8","shiftjis","tis620","unicode11utf7","us","usascii","utf16","utf16be","utf16le","utf8","windows1250","windows1251","windows1252","windows1253","windows1254","windows1255","windows1256","windows1257","windows1258","windows936","x-x-big5"]),t.s)
B.cM=new A.r(227,{"437":"cp437","850":"cp850","852":"cp852","855":"cp855","857":"cp857","860":"cp860","861":"cp861","862":"cp862","863":"cp863","865":"cp865","866":"cp866","869":"cp869",ansix341968:"ascii",ansix341986:"ascii",arabic:"iso8859-6",ascii:"ascii",asmo708:"iso8859-6",big5:"big5",big5hkscs:"big5hkscs",chinese:"gbk",cp037:"cp037",cp1026:"cp1026",cp154:"ptcp154",cp367:"ascii",cp424:"cp424",cp437:"cp437",cp500:"cp500",cp775:"cp775",cp819:"windows-1252",cp850:"cp850",cp852:"cp852",cp855:"cp855",cp857:"cp857",cp860:"cp860",cp861:"cp861",cp862:"cp862",cp863:"cp863",cp864:"cp864",cp865:"cp865",cp866:"cp866",cp869:"cp869",cp936:"gbk",cpgr:"cp869",cpis:"cp861",csascii:"ascii",csbig5:"big5",cseuckr:"cp949",cseucpkdfmtjapanese:"euc_jp",csgb2312:"gbk",cshproman8:"hp-roman8",csibm037:"cp037",csibm1026:"cp1026",csibm424:"cp424",csibm500:"cp500",csibm855:"cp855",csibm857:"cp857",csibm860:"cp860",csibm861:"cp861",csibm863:"cp863",csibm864:"cp864",csibm865:"cp865",csibm866:"cp866",csibm869:"cp869",csiso2022jp:"iso2022_jp",csiso2022jp2:"iso2022_jp_2",csiso2022kr:"iso2022_kr",csiso58gb231280:"gbk",csisolatin1:"windows-1252",csisolatin2:"iso8859-2",csisolatin3:"iso8859-3",csisolatin4:"iso8859-4",csisolatin5:"windows-1254",csisolatin6:"iso8859-10",csisolatinarabic:"iso8859-6",csisolatincyrillic:"iso8859-5",csisolatingreek:"iso8859-7",csisolatinhebrew:"iso8859-8",cskoi8r:"koi8-r",csksc56011987:"cp949",cspc775baltic:"cp775",cspc850multilingual:"cp850",cspc862latinhebrew:"cp862",cspc8codepage437:"cp437",cspcp852:"cp852",csptcp154:"ptcp154",csshiftjis:"shift_jis",csunicode11utf7:"utf-7",cyrillic:"iso8859-5",cyrillicasian:"ptcp154",ebcdiccpbe:"cp500",ebcdiccpca:"cp037",ebcdiccpch:"cp500",ebcdiccphe:"cp424",ebcdiccpnl:"cp037",ebcdiccpus:"cp037",ebcdiccpwt:"cp037",ecma114:"iso8859-6",ecma118:"iso8859-7",elot928:"iso8859-7",eucjp:"euc_jp",euckr:"cp949",extendedunixcodepackedformatforjapanese:"euc_jp",gb18030:"gb18030",gb2312:"gbk",gb231280:"gbk",gbk:"gbk",greek:"iso8859-7",greek8:"iso8859-7",hebrew:"iso8859-8",hproman8:"hp-roman8",hzgb2312:"hz",ibm037:"cp037",ibm1026:"cp1026",ibm367:"ascii",ibm424:"cp424",ibm437:"cp437",ibm500:"cp500",ibm775:"cp775",ibm819:"windows-1252",ibm850:"cp850",ibm852:"cp852",ibm855:"cp855",ibm857:"cp857",ibm860:"cp860",ibm861:"cp861",ibm862:"cp862",ibm863:"cp863",ibm864:"cp864",ibm865:"cp865",ibm866:"cp866",ibm869:"cp869",iso2022jp:"iso2022_jp",iso2022jp2:"iso2022_jp_2",iso2022kr:"iso2022_kr",iso646irv1991:"ascii",iso646us:"ascii",iso88591:"windows-1252",iso885910:"iso8859-10",iso8859101992:"iso8859-10",iso885911987:"windows-1252",iso885913:"iso8859-13",iso885914:"iso8859-14",iso8859141998:"iso8859-14",iso885915:"iso8859-15",iso885916:"iso8859-16",iso8859162001:"iso8859-16",iso88592:"iso8859-2",iso885921987:"iso8859-2",iso88593:"iso8859-3",iso885931988:"iso8859-3",iso88594:"iso8859-4",iso885941988:"iso8859-4",iso88595:"iso8859-5",iso885951988:"iso8859-5",iso88596:"iso8859-6",iso885961987:"iso8859-6",iso88597:"iso8859-7",iso885971987:"iso8859-7",iso88598:"iso8859-8",iso885981988:"iso8859-8",iso88599:"windows-1254",iso885991989:"windows-1254",isoceltic:"iso8859-14",isoir100:"windows-1252",isoir101:"iso8859-2",isoir109:"iso8859-3",isoir110:"iso8859-4",isoir126:"iso8859-7",isoir127:"iso8859-6",isoir138:"iso8859-8",isoir144:"iso8859-5",isoir148:"windows-1254",isoir149:"cp949",isoir157:"iso8859-10",isoir199:"iso8859-14",isoir226:"iso8859-16",isoir58:"gbk",isoir6:"ascii",koi8r:"koi8-r",koi8u:"koi8-u",korean:"cp949",ksc5601:"cp949",ksc56011987:"cp949",ksc56011989:"cp949",l1:"windows-1252",l10:"iso8859-16",l2:"iso8859-2",l3:"iso8859-3",l4:"iso8859-4",l5:"windows-1254",l6:"iso8859-10",l8:"iso8859-14",latin1:"windows-1252",latin10:"iso8859-16",latin2:"iso8859-2",latin3:"iso8859-3",latin4:"iso8859-4",latin5:"windows-1254",latin6:"iso8859-10",latin8:"iso8859-14",latin9:"iso8859-15",ms936:"gbk",mskanji:"shift_jis",pt154:"ptcp154",ptcp154:"ptcp154",r8:"hp-roman8",roman8:"hp-roman8",shiftjis:"shift_jis",tis620:"cp874",unicode11utf7:"utf-7",us:"ascii",usascii:"ascii",utf16:"utf-16",utf16be:"utf-16-be",utf16le:"utf-16-le",utf8:"utf-8",windows1250:"cp1250",windows1251:"cp1251",windows1252:"cp1252",windows1253:"cp1253",windows1254:"cp1254",windows1255:"cp1255",windows1256:"cp1256",windows1257:"cp1257",windows1258:"cp1258",windows936:"gbk","x-x-big5":"big5"},B.bC,t.B)
B.bD=A.a(s(["after","before","first-letter","first-line"]),t.s)
B.cN=new A.r(4,{after:null,before:null,"first-letter":null,"first-line":null},B.bD,A.aO("r<n,ak>"))
B.e2=new A.f6(B.cN,A.aO("f6<n>"))
B.a2=new A.hO("Start")
B.a3=new A.hO("End")
B.e3=A.u1("H")
B.e4=new A.hX(!1)
B.ai=A.a(s([]),t.O)
B.b2=new A.P(0.16078,0.67059,0.79216,1)
B.bi=A.a(s([B.b2]),t.O)
B.e5=new A.cm(B.ai,B.bi,1,B.ai,0)
B.e=new A.e(0,0,0)
B.l=new A.e(0,0,1)
B.x=new A.e(0,1,0)
B.j=new A.e(1,0,0)
B.aD=new A.e(1,1,0)
B.aE=new A.e(1,1,1)
B.p=new A.e(-1,1,0)
B.aF=new A.e(-1,-1,0)
B.e7=new A.dv(null,2)})();(function staticFields(){$.ll=null
$.nK=null
$.no=null
$.nn=null
$.p_=null
$.oP=null
$.pd=null
$.lR=null
$.m0=null
$.n_=null
$.dA=null
$.fe=null
$.ff=null
$.mS=!1
$.aa=B.k
$.bd=A.a([],A.aO("z<H>"))
$.fd=A.r7("messages")
$.mx=A.bh(t.N,A.aO("cf"))
$.eA=A.bh(t.N,A.aO("b1<n,n>"))
$.iz=A.bh(t.S,A.aO("b1<h,h>"))
$.oA=null
$.lF=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"u7","pm",()=>A.tz("_$dart_dartClosure"))
s($,"uP","nd",()=>B.k.jQ(new A.m6(),A.aO("bf<ak>")))
s($,"un","po",()=>A.bW(A.kC({
toString:function(){return"$receiver$"}})))
s($,"uo","pp",()=>A.bW(A.kC({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"up","pq",()=>A.bW(A.kC(null)))
s($,"uq","pr",()=>A.bW(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"ut","pu",()=>A.bW(A.kC(void 0)))
s($,"uu","pv",()=>A.bW(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"us","pt",()=>A.bW(A.o0(null)))
s($,"ur","ps",()=>A.bW(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"uw","px",()=>A.bW(A.o0(void 0)))
s($,"uv","pw",()=>A.bW(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"uz","na",()=>A.r3())
s($,"ux","py",()=>new A.kI().$0())
s($,"uy","pz",()=>new A.kH().$0())
s($,"uA","pA",()=>A.qp(A.mQ(A.a([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"uB","nb",()=>typeof process!="undefined"&&Object.prototype.toString.call(process)=="[object process]"&&process.platform=="win32")
s($,"uK","md",()=>A.n4(B.e3))
s($,"uL","pB",()=>A.rL())
r($,"uO","pC",()=>new A.lT().$0())
r($,"u9","dE",()=>{var q=new A.jc()
q.lJ()
return q})
s($,"uM","nc",()=>new A.j4(A.aO("cG").a($.n9())))
s($,"uj","pn",()=>new A.ht(A.au("/"),A.au("[^/]$"),A.au("^/")))
s($,"ul","iF",()=>new A.i0(A.au("[/\\\\]"),A.au("[^/\\\\]$"),A.au("^(\\\\\\\\[^\\\\]+\\\\[^\\\\/]+|[a-zA-Z]:[/\\\\])"),A.au("^[/\\\\](?![/\\\\])")))
s($,"uk","fl",()=>new A.hV(A.au("/"),A.au("(^[a-zA-Z][-+.a-zA-Z\\d]*://|[^/])$"),A.au("[a-zA-Z][-+.a-zA-Z\\d]*://[^/]*"),A.au("^/")))
s($,"ui","n9",()=>A.qR())})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({CanvasGradient:J.b6,DOMError:J.b6,MediaError:J.b6,Navigator:J.b6,NavigatorConcurrentHardware:J.b6,NavigatorUserMediaError:J.b6,OverconstrainedError:J.b6,PositionError:J.b6,GeolocationPositionError:J.b6,ArrayBufferView:A.hf,Int8Array:A.he,Uint32Array:A.ep,Uint8Array:A.cN,HTMLAudioElement:A.x,HTMLBRElement:A.x,HTMLBaseElement:A.x,HTMLBodyElement:A.x,HTMLButtonElement:A.x,HTMLContentElement:A.x,HTMLDListElement:A.x,HTMLDataElement:A.x,HTMLDataListElement:A.x,HTMLDetailsElement:A.x,HTMLDialogElement:A.x,HTMLDivElement:A.x,HTMLEmbedElement:A.x,HTMLFieldSetElement:A.x,HTMLHRElement:A.x,HTMLHeadElement:A.x,HTMLHeadingElement:A.x,HTMLHtmlElement:A.x,HTMLIFrameElement:A.x,HTMLImageElement:A.x,HTMLInputElement:A.x,HTMLLIElement:A.x,HTMLLabelElement:A.x,HTMLLegendElement:A.x,HTMLLinkElement:A.x,HTMLMapElement:A.x,HTMLMediaElement:A.x,HTMLMenuElement:A.x,HTMLMetaElement:A.x,HTMLMeterElement:A.x,HTMLModElement:A.x,HTMLOListElement:A.x,HTMLObjectElement:A.x,HTMLOptGroupElement:A.x,HTMLOptionElement:A.x,HTMLOutputElement:A.x,HTMLParagraphElement:A.x,HTMLParamElement:A.x,HTMLPictureElement:A.x,HTMLPreElement:A.x,HTMLProgressElement:A.x,HTMLQuoteElement:A.x,HTMLScriptElement:A.x,HTMLShadowElement:A.x,HTMLSlotElement:A.x,HTMLSourceElement:A.x,HTMLSpanElement:A.x,HTMLStyleElement:A.x,HTMLTableCaptionElement:A.x,HTMLTableCellElement:A.x,HTMLTableDataCellElement:A.x,HTMLTableHeaderCellElement:A.x,HTMLTableColElement:A.x,HTMLTableElement:A.x,HTMLTableRowElement:A.x,HTMLTableSectionElement:A.x,HTMLTemplateElement:A.x,HTMLTextAreaElement:A.x,HTMLTimeElement:A.x,HTMLTitleElement:A.x,HTMLTrackElement:A.x,HTMLUListElement:A.x,HTMLUnknownElement:A.x,HTMLVideoElement:A.x,HTMLDirectoryElement:A.x,HTMLFontElement:A.x,HTMLFrameElement:A.x,HTMLFrameSetElement:A.x,HTMLMarqueeElement:A.x,HTMLElement:A.x,HTMLAnchorElement:A.fu,HTMLAreaElement:A.fx,HTMLCanvasElement:A.cA,CanvasRenderingContext2D:A.dR,CDATASection:A.bE,CharacterData:A.bE,Comment:A.bE,ProcessingInstruction:A.bE,Text:A.bE,DOMException:A.j7,DOMRectReadOnly:A.dV,MathMLElement:A.p,SVGAElement:A.p,SVGAnimateElement:A.p,SVGAnimateMotionElement:A.p,SVGAnimateTransformElement:A.p,SVGAnimationElement:A.p,SVGCircleElement:A.p,SVGClipPathElement:A.p,SVGDefsElement:A.p,SVGDescElement:A.p,SVGDiscardElement:A.p,SVGEllipseElement:A.p,SVGFEBlendElement:A.p,SVGFEColorMatrixElement:A.p,SVGFEComponentTransferElement:A.p,SVGFECompositeElement:A.p,SVGFEConvolveMatrixElement:A.p,SVGFEDiffuseLightingElement:A.p,SVGFEDisplacementMapElement:A.p,SVGFEDistantLightElement:A.p,SVGFEFloodElement:A.p,SVGFEFuncAElement:A.p,SVGFEFuncBElement:A.p,SVGFEFuncGElement:A.p,SVGFEFuncRElement:A.p,SVGFEGaussianBlurElement:A.p,SVGFEImageElement:A.p,SVGFEMergeElement:A.p,SVGFEMergeNodeElement:A.p,SVGFEMorphologyElement:A.p,SVGFEOffsetElement:A.p,SVGFEPointLightElement:A.p,SVGFESpecularLightingElement:A.p,SVGFESpotLightElement:A.p,SVGFETileElement:A.p,SVGFETurbulenceElement:A.p,SVGFilterElement:A.p,SVGForeignObjectElement:A.p,SVGGElement:A.p,SVGGeometryElement:A.p,SVGGraphicsElement:A.p,SVGImageElement:A.p,SVGLineElement:A.p,SVGLinearGradientElement:A.p,SVGMarkerElement:A.p,SVGMaskElement:A.p,SVGMetadataElement:A.p,SVGPathElement:A.p,SVGPatternElement:A.p,SVGPolygonElement:A.p,SVGPolylineElement:A.p,SVGRadialGradientElement:A.p,SVGRectElement:A.p,SVGScriptElement:A.p,SVGSetElement:A.p,SVGStopElement:A.p,SVGStyleElement:A.p,SVGElement:A.p,SVGSVGElement:A.p,SVGSwitchElement:A.p,SVGSymbolElement:A.p,SVGTSpanElement:A.p,SVGTextContentElement:A.p,SVGTextElement:A.p,SVGTextPathElement:A.p,SVGTextPositioningElement:A.p,SVGTitleElement:A.p,SVGUseElement:A.p,SVGViewElement:A.p,SVGGradientElement:A.p,SVGComponentTransferFunctionElement:A.p,SVGFEDropShadowElement:A.p,SVGMPathElement:A.p,Element:A.p,AbortPaymentEvent:A.q,AnimationEvent:A.q,AnimationPlaybackEvent:A.q,ApplicationCacheErrorEvent:A.q,BackgroundFetchClickEvent:A.q,BackgroundFetchEvent:A.q,BackgroundFetchFailEvent:A.q,BackgroundFetchedEvent:A.q,BeforeInstallPromptEvent:A.q,BeforeUnloadEvent:A.q,BlobEvent:A.q,CanMakePaymentEvent:A.q,ClipboardEvent:A.q,CloseEvent:A.q,CustomEvent:A.q,DeviceMotionEvent:A.q,DeviceOrientationEvent:A.q,ErrorEvent:A.q,ExtendableEvent:A.q,ExtendableMessageEvent:A.q,FetchEvent:A.q,FontFaceSetLoadEvent:A.q,ForeignFetchEvent:A.q,GamepadEvent:A.q,HashChangeEvent:A.q,InstallEvent:A.q,MediaEncryptedEvent:A.q,MediaKeyMessageEvent:A.q,MediaQueryListEvent:A.q,MediaStreamEvent:A.q,MediaStreamTrackEvent:A.q,MessageEvent:A.q,MIDIConnectionEvent:A.q,MIDIMessageEvent:A.q,MutationEvent:A.q,NotificationEvent:A.q,PageTransitionEvent:A.q,PaymentRequestEvent:A.q,PaymentRequestUpdateEvent:A.q,PopStateEvent:A.q,PresentationConnectionAvailableEvent:A.q,PresentationConnectionCloseEvent:A.q,ProgressEvent:A.q,PromiseRejectionEvent:A.q,PushEvent:A.q,RTCDataChannelEvent:A.q,RTCDTMFToneChangeEvent:A.q,RTCPeerConnectionIceEvent:A.q,RTCTrackEvent:A.q,SecurityPolicyViolationEvent:A.q,SensorErrorEvent:A.q,SpeechRecognitionError:A.q,SpeechRecognitionEvent:A.q,SpeechSynthesisEvent:A.q,StorageEvent:A.q,SyncEvent:A.q,TrackEvent:A.q,TransitionEvent:A.q,WebKitTransitionEvent:A.q,VRDeviceEvent:A.q,VRDisplayEvent:A.q,VRSessionEvent:A.q,MojoInterfaceRequestEvent:A.q,ResourceProgressEvent:A.q,USBConnectionEvent:A.q,IDBVersionChangeEvent:A.q,AudioProcessingEvent:A.q,OfflineAudioCompletionEvent:A.q,WebGLContextEvent:A.q,Event:A.q,InputEvent:A.q,SubmitEvent:A.q,EventTarget:A.aT,HTMLFormElement:A.fX,MouseEvent:A.b7,DragEvent:A.b7,PointerEvent:A.b7,WheelEvent:A.b7,Document:A.b2,DocumentFragment:A.b2,HTMLDocument:A.b2,ShadowRoot:A.b2,XMLDocument:A.b2,Attr:A.b2,DocumentType:A.b2,Node:A.b2,Path2D:A.hp,HTMLSelectElement:A.hB,CompositionEvent:A.by,FocusEvent:A.by,KeyboardEvent:A.by,TextEvent:A.by,TouchEvent:A.by,UIEvent:A.by,Window:A.ds,DOMWindow:A.ds,ClientRect:A.eP,DOMRect:A.eP})
hunkHelpers.setOrUpdateLeafTags({CanvasGradient:true,DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,GeolocationPositionError:true,ArrayBufferView:false,Int8Array:true,Uint32Array:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,DOMException:true,DOMRectReadOnly:false,MathMLElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,EventTarget:false,HTMLFormElement:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,Path2D:true,HTMLSelectElement:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,Window:true,DOMWindow:true,ClientRect:true,DOMRect:true})
A.df.$nativeSuperclassTag="ArrayBufferView"
A.eX.$nativeSuperclassTag="ArrayBufferView"
A.eY.$nativeSuperclassTag="ArrayBufferView"
A.eo.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=A.tL
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=eigenspace.dart.js.map
