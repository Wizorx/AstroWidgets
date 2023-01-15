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
a[c]=function(){a[c]=function(){A.la(b)}
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
if(a[b]!==s)A.lb(b)
a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.hm(b)
return new s(c,this)}:function(){if(s===null)s=A.hm(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.hm(a).prototype
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
a(hunkHelpers,v,w,$)}var A={h2:function h2(){},
j9(a,b,c){if(b.h("D<0>").b(a))return new A.cm(a,b.h("@<0>").C(c).h("cm<1,2>"))
return new A.b1(a,b.h("@<0>").C(c).h("b1<1,2>"))},
jt(a){return new A.bX("Field '"+a+"' has not been initialized.")},
aQ(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
h9(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
i1(a,b,c){return A.h9(A.aQ(A.aQ(c,a),b))},
dG(a,b,c){return a},
cd(a,b,c,d){A.ao(b,"start")
if(c!=null){A.ao(c,"end")
if(b>c)A.I(A.at(b,0,c,"start",null))}return new A.aq(a,b,c,d.h("aq<0>"))},
jz(a,b,c,d){if(t.X.b(a))return new A.bL(a,b,c.h("@<0>").C(d).h("bL<1,2>"))
return new A.b3(a,b,c.h("@<0>").C(d).h("b3<1,2>"))},
i_(a,b,c){var s="count"
if(t.X.b(a)){A.dP(b,s,t.S)
A.ao(b,s)
return new A.bc(a,b,c.h("bc<0>"))}A.dP(b,s,t.S)
A.ao(b,s)
return new A.aA(a,b,c.h("aA<0>"))},
a3(){return new A.bg("No element")},
jp(){return new A.bg("Too few elements")},
jN(a,b,c){A.df(a,0,J.B(a)-1,b,c)},
df(a,b,c,d,e){if(c-b<=32)A.jM(a,b,c,d,e)
else A.jL(a,b,c,d,e)},
jM(a,b,c,d,e){var s,r,q,p,o,n
for(s=b+1,r=J.R(a);s<=c;++s){q=r.i(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.i(a,p-1),q)
if(typeof o!=="number")return o.a7()
o=o>0}else o=!1
if(!o)break
n=p-1
r.n(a,p,r.i(a,n))
p=n}r.n(a,p,q)}},
jL(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j=B.e.a0(a5-a4+1,6),i=a4+j,h=a5-j,g=B.e.a0(a4+a5,2),f=g-j,e=g+j,d=J.R(a3),c=d.i(a3,i),b=d.i(a3,f),a=d.i(a3,g),a0=d.i(a3,e),a1=d.i(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.a7()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.a7()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.a7()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.a7()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.a7()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.a7()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.a7()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.a7()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.a7()
if(a2>0){s=a1
a1=a0
a0=s}d.n(a3,i,c)
d.n(a3,g,a)
d.n(a3,h,a1)
d.n(a3,f,d.i(a3,a4))
d.n(a3,e,d.i(a3,a5))
r=a4+1
q=a5-1
if(J.ab(a6.$2(b,a0),0)){for(p=r;p<=q;++p){o=d.i(a3,p)
n=a6.$2(o,b)
if(n===0)continue
if(n<0){if(p!==r){d.n(a3,p,d.i(a3,r))
d.n(a3,r,o)}++r}else for(;!0;){n=a6.$2(d.i(a3,q),b)
if(n>0){--q
continue}else{m=q-1
if(n<0){d.n(a3,p,d.i(a3,r))
l=r+1
d.n(a3,r,d.i(a3,q))
d.n(a3,q,o)
q=m
r=l
break}else{d.n(a3,p,d.i(a3,q))
d.n(a3,q,o)
q=m
break}}}}k=!0}else{for(p=r;p<=q;++p){o=d.i(a3,p)
if(a6.$2(o,b)<0){if(p!==r){d.n(a3,p,d.i(a3,r))
d.n(a3,r,o)}++r}else if(a6.$2(o,a0)>0)for(;!0;)if(a6.$2(d.i(a3,q),a0)>0){--q
if(q<p)break
continue}else{m=q-1
if(a6.$2(d.i(a3,q),b)<0){d.n(a3,p,d.i(a3,r))
l=r+1
d.n(a3,r,d.i(a3,q))
d.n(a3,q,o)
r=l}else{d.n(a3,p,d.i(a3,q))
d.n(a3,q,o)}q=m
break}}k=!1}a2=r-1
d.n(a3,a4,d.i(a3,a2))
d.n(a3,a2,b)
a2=q+1
d.n(a3,a5,d.i(a3,a2))
d.n(a3,a2,a0)
A.df(a3,a4,r-2,a6,a7)
A.df(a3,q+2,a5,a6,a7)
if(k)return
if(r<i&&q>h){for(;J.ab(a6.$2(d.i(a3,r),b),0);)++r
for(;J.ab(a6.$2(d.i(a3,q),a0),0);)--q
for(p=r;p<=q;++p){o=d.i(a3,p)
if(a6.$2(o,b)===0){if(p!==r){d.n(a3,p,d.i(a3,r))
d.n(a3,r,o)}++r}else if(a6.$2(o,a0)===0)for(;!0;)if(a6.$2(d.i(a3,q),a0)===0){--q
if(q<p)break
continue}else{m=q-1
if(a6.$2(d.i(a3,q),b)<0){d.n(a3,p,d.i(a3,r))
l=r+1
d.n(a3,r,d.i(a3,q))
d.n(a3,q,o)
r=l}else{d.n(a3,p,d.i(a3,q))
d.n(a3,q,o)}q=m
break}}A.df(a3,r,q,a6,a7)}else A.df(a3,r,q,a6,a7)},
aU:function aU(){},
bD:function bD(a,b){this.a=a
this.$ti=b},
b1:function b1(a,b){this.a=a
this.$ti=b},
cm:function cm(a,b){this.a=a
this.$ti=b},
ck:function ck(){},
a0:function a0(a,b){this.a=a
this.$ti=b},
bX:function bX(a){this.a=a},
fO:function fO(){},
eG:function eG(){},
D:function D(){},
C:function C(){},
aq:function aq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
a4:function a4(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
b3:function b3(a,b,c){this.a=a
this.b=b
this.$ti=c},
bL:function bL(a,b,c){this.a=a
this.b=b
this.$ti=c},
c0:function c0(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
K:function K(a,b,c){this.a=a
this.b=b
this.$ti=c},
aC:function aC(a,b,c){this.a=a
this.b=b
this.$ti=c},
cj:function cj(a,b,c){this.a=a
this.b=b
this.$ti=c},
aA:function aA(a,b,c){this.a=a
this.b=b
this.$ti=c},
bc:function bc(a,b,c){this.a=a
this.b=b
this.$ti=c},
c9:function c9(a,b,c){this.a=a
this.b=b
this.$ti=c},
bM:function bM(a){this.$ti=a},
bN:function bN(a){this.$ti=a},
az:function az(a,b){this.a=a
this.$ti=b},
cy:function cy(){},
iL(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
q(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.cO(a)
return s},
aO(a){var s,r=$.hV
if(r==null)r=$.hV=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
jF(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(m==null)return n
if(3>=m.length)return A.k(m,3)
s=m[3]
if(b<2||b>36)throw A.e(A.at(b,2,36,"radix",n))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=m[1]
for(p=q.length,o=0;o<p;++o)if((B.i.eh(q,o)|32)>r)return n}return parseInt(a,b)},
eD(a){return A.jE(a)},
jE(a){var s,r,q,p
if(a instanceof A.z)return A.a7(A.cK(a),null)
s=J.aG(a)
if(s===B.W||s===B.Y||t.ak.b(a)){r=B.D(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.a7(A.cK(a),null)},
cJ(a){throw A.e(A.kJ(a))},
k(a,b){if(a==null)J.B(a)
throw A.e(A.fC(a,b))},
fC(a,b){var s,r="index"
if(!A.ip(b))return new A.av(!0,b,r,null)
s=A.Y(J.B(a))
if(b<0||b>=s)return A.h0(b,a,r,null,s)
return A.jH(b,r)},
kJ(a){return new A.av(!0,a,null,null)},
e(a){var s,r
if(a==null)a=new A.d9()
s=new Error()
s.dartException=a
r=A.lc
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
lc(){return J.cO(this.dartException)},
I(a){throw A.e(a)},
c(a){throw A.e(A.ai(a))},
aB(a){var s,r,q,p,o,n
a=A.l5(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.b([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.eJ(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
eK(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
i3(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
h3(a,b){var s=b==null,r=s?null:b.method
return new A.d6(a,r,s?null:b.receiver)},
aZ(a){var s
if(a==null)return new A.ey(a)
if(a instanceof A.bO){s=a.a
return A.aY(a,s==null?t.K.a(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.aY(a,a.dartException)
return A.kI(a)},
aY(a,b){if(t.Y.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
kI(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.e.es(r,16)&8191)===10)switch(q){case 438:return A.aY(a,A.h3(A.q(s)+" (Error "+q+")",e))
case 445:case 5007:p=A.q(s)
return A.aY(a,new A.c2(p+" (Error "+q+")",e))}}if(a instanceof TypeError){o=$.iO()
n=$.iP()
m=$.iQ()
l=$.iR()
k=$.iU()
j=$.iV()
i=$.iT()
$.iS()
h=$.iX()
g=$.iW()
f=o.a2(s)
if(f!=null)return A.aY(a,A.h3(A.cA(s),f))
else{f=n.a2(s)
if(f!=null){f.method="call"
return A.aY(a,A.h3(A.cA(s),f))}else{f=m.a2(s)
if(f==null){f=l.a2(s)
if(f==null){f=k.a2(s)
if(f==null){f=j.a2(s)
if(f==null){f=i.a2(s)
if(f==null){f=l.a2(s)
if(f==null){f=h.a2(s)
if(f==null){f=g.a2(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p){A.cA(s)
return A.aY(a,new A.c2(s,f==null?e:f.method))}}}return A.aY(a,new A.dm(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.ca()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return A.aY(a,new A.av(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.ca()
return a},
aX(a){var s
if(a instanceof A.bO)return a.b
if(a==null)return new A.cr(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new A.cr(a)},
iH(a){if(a==null||typeof a!="object")return J.a8(a)
else return A.aO(a)},
kX(a,b,c,d,e,f){t.Z.a(a)
switch(A.Y(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.e(new A.f4("Unsupported number of arguments for wrapped closure"))},
br(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.kX)
a.$identity=s
return s},
jf(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.dg().constructor.prototype):Object.create(new A.ba(null,null).constructor.prototype)
s.$initialize=s.constructor
if(h)r=function static_tear_off(){this.$initialize()}
else r=function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.hJ(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.jb(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.hJ(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
jb(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.e("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.j6)}throw A.e("Error in functionType of tearoff")},
jc(a,b,c,d){var s=A.hI
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
hJ(a,b,c,d){var s,r
if(c)return A.je(a,b,d)
s=b.length
r=A.jc(s,d,a,b)
return r},
jd(a,b,c,d){var s=A.hI,r=A.j7
switch(b?-1:a){case 0:throw A.e(new A.dd("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
je(a,b,c){var s,r
if($.hG==null)$.hG=A.hF("interceptor")
if($.hH==null)$.hH=A.hF("receiver")
s=b.length
r=A.jd(s,c,a,b)
return r},
hm(a){return A.jf(a)},
j6(a,b){return A.fo(v.typeUniverse,A.cK(a.a),b)},
hI(a){return a.a},
j7(a){return a.b},
hF(a){var s,r,q,p=new A.ba("receiver","interceptor"),o=J.ef(Object.getOwnPropertyNames(p),t.R)
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw A.e(A.dO("Field name "+a+" not found.",null))},
bq(a){if(a==null)A.kK("boolean expression must not be null")
return a},
kK(a){throw A.e(new A.dp(a))},
la(a){throw A.e(new A.cZ(a))},
kQ(a){return v.getIsolateTag(a)},
lT(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
kZ(a){var s,r,q,p,o,n=A.cA($.iB.$1(a)),m=$.fD[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.fI[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.kf($.iv.$2(a,n))
if(q!=null){m=$.fD[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.fI[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.fN(s)
$.fD[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.fI[n]=s
return s}if(p==="-"){o=A.fN(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.iI(a,s)
if(p==="*")throw A.e(A.i4(n))
if(v.leafTags[n]===true){o=A.fN(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.iI(a,s)},
iI(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.hv(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
fN(a){return J.hv(a,!1,null,!!a.$ilp)},
l0(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.fN(s)
else return J.hv(s,c,null,null)},
kT(){if(!0===$.hs)return
$.hs=!0
A.kU()},
kU(){var s,r,q,p,o,n,m,l
$.fD=Object.create(null)
$.fI=Object.create(null)
A.kS()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.iJ.$1(o)
if(n!=null){m=A.l0(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
kS(){var s,r,q,p,o,n,m=B.O()
m=A.bp(B.P,A.bp(B.Q,A.bp(B.E,A.bp(B.E,A.bp(B.R,A.bp(B.S,A.bp(B.T(B.D),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.iB=new A.fF(p)
$.iv=new A.fG(o)
$.iJ=new A.fH(n)},
bp(a,b){return a(b)||b},
js(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw A.e(A.hM("Illegal RegExp pattern ("+String(n)+")",a))},
l5(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
l8(a,b,c,d){var s=a.indexOf(b,d)
if(s<0)return a
return A.l9(a,s,s+b.length,c)},
l9(a,b,c,d){return a.substring(0,b)+d+a.substring(c)},
bR:function bR(){},
aI:function aI(a,b){this.a=a
this.$ti=b},
eJ:function eJ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
c2:function c2(a,b){this.a=a
this.b=b},
d6:function d6(a,b,c){this.a=a
this.b=b
this.c=c},
dm:function dm(a){this.a=a},
ey:function ey(a){this.a=a},
bO:function bO(a,b){this.a=a
this.b=b},
cr:function cr(a){this.a=a
this.b=null},
a1:function a1(){},
cV:function cV(){},
cW:function cW(){},
dj:function dj(){},
dg:function dg(){},
ba:function ba(a,b){this.a=a
this.b=b},
dd:function dd(a){this.a=a},
dp:function dp(a){this.a=a},
bW:function bW(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
eh:function eh(a,b){this.a=a
this.b=b
this.c=null},
bY:function bY(a,b){this.a=a
this.$ti=b},
bZ:function bZ(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fF:function fF(a){this.a=a},
fG:function fG(a){this.a=a},
fH:function fH(a){this.a=a},
d5:function d5(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dx:function dx(a){this.b=a},
di:function di(a,b){this.a=a
this.c=b},
fl:function fl(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
hY(a,b){var s=b.c
return s==null?b.c=A.hf(a,b.y,!0):s},
hX(a,b){var s=b.c
return s==null?b.c=A.cv(a,"aj",[b.y]):s},
hZ(a){var s=a.x
if(s===6||s===7||s===8)return A.hZ(a.y)
return s===11||s===12},
jK(a){return a.at},
bs(a){return A.dE(v.typeUniverse,a,!1)},
kV(a,b){var s,r,q,p,o
if(a==null)return null
s=b.z
r=a.as
if(r==null)r=a.as=new Map()
q=b.at
p=r.get(q)
if(p!=null)return p
o=A.aF(v.typeUniverse,a.y,s,0)
r.set(q,o)
return o},
aF(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.x
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.y
r=A.aF(a,s,a0,a1)
if(r===s)return b
return A.ih(a,r,!0)
case 7:s=b.y
r=A.aF(a,s,a0,a1)
if(r===s)return b
return A.hf(a,r,!0)
case 8:s=b.y
r=A.aF(a,s,a0,a1)
if(r===s)return b
return A.ig(a,r,!0)
case 9:q=b.z
p=A.cH(a,q,a0,a1)
if(p===q)return b
return A.cv(a,b.y,p)
case 10:o=b.y
n=A.aF(a,o,a0,a1)
m=b.z
l=A.cH(a,m,a0,a1)
if(n===o&&l===m)return b
return A.hd(a,n,l)
case 11:k=b.y
j=A.aF(a,k,a0,a1)
i=b.z
h=A.kF(a,i,a0,a1)
if(j===k&&h===i)return b
return A.ie(a,j,h)
case 12:g=b.z
a1+=g.length
f=A.cH(a,g,a0,a1)
o=b.y
n=A.aF(a,o,a0,a1)
if(f===g&&n===o)return b
return A.he(a,n,f,!0)
case 13:e=b.y
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw A.e(A.e_("Attempted to substitute unexpected RTI kind "+c))}},
cH(a,b,c,d){var s,r,q,p,o=b.length,n=A.fp(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.aF(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
kG(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.fp(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.aF(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
kF(a,b,c,d){var s,r=b.a,q=A.cH(a,r,c,d),p=b.b,o=A.cH(a,p,c,d),n=b.c,m=A.kG(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.dv()
s.a=q
s.b=o
s.c=m
return s},
b(a,b){a[v.arrayRti]=b
return a},
hn(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.kR(s)
return a.$S()}return null},
iC(a,b){var s
if(A.hZ(b))if(a instanceof A.a1){s=A.hn(a)
if(s!=null)return s}return A.cK(a)},
cK(a){var s
if(a instanceof A.z){s=a.$ti
return s!=null?s:A.hh(a)}if(Array.isArray(a))return A.w(a)
return A.hh(J.aG(a))},
w(a){var s=a[v.arrayRti],r=t.gn
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
F(a){var s=a.$ti
return s!=null?s:A.hh(a)},
hh(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.kp(a,s)},
kp(a,b){var s=a instanceof A.a1?a.__proto__.__proto__.constructor:b,r=A.kc(v.typeUniverse,s.name)
b.$ccache=r
return r},
kR(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.dE(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
hr(a){var s=a instanceof A.a1?A.hn(a):null
return A.ho(s==null?A.cK(a):s)},
ho(a){var s,r,q,p=a.w
if(p!=null)return p
s=a.at
r=s.replace(/\*/g,"")
if(r===s)return a.w=new A.dC(a)
q=A.dE(v.typeUniverse,r,!0)
p=q.w
return a.w=p==null?q.w=new A.dC(q):p},
ld(a){return A.ho(A.dE(v.typeUniverse,a,!1))},
ko(a){var s,r,q,p,o=this
if(o===t.K)return A.bn(o,a,A.ku)
if(!A.aH(o))if(!(o===t._))s=!1
else s=!0
else s=!0
if(s)return A.bn(o,a,A.kx)
s=o.x
r=s===6?o.y:o
if(r===t.S)q=A.ip
else if(r===t.V||r===t.H)q=A.kt
else if(r===t.aw)q=A.kv
else q=r===t.cJ?A.im:null
if(q!=null)return A.bn(o,a,q)
if(r.x===9){p=r.y
if(r.z.every(A.kY)){o.r="$i"+p
if(p==="m")return A.bn(o,a,A.ks)
return A.bn(o,a,A.kw)}}else if(s===7)return A.bn(o,a,A.km)
return A.bn(o,a,A.kk)},
bn(a,b,c){a.b=c
return a.b(b)},
kn(a){var s,r=this,q=A.kj
if(!A.aH(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=A.kg
else if(r===t.K)q=A.ke
else{s=A.cL(r)
if(s)q=A.kl}r.a=q
return r.a(a)},
ft(a){var s,r=a.x
if(!A.aH(a))if(!(a===t._))if(!(a===t.cF))if(r!==7)s=r===8&&A.ft(a.y)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
kk(a){var s=this
if(a==null)return A.ft(s)
return A.L(v.typeUniverse,A.iC(a,s),null,s,null)},
km(a){if(a==null)return!0
return this.y.b(a)},
kw(a){var s,r=this
if(a==null)return A.ft(r)
s=r.r
if(a instanceof A.z)return!!a[s]
return!!J.aG(a)[s]},
ks(a){var s,r=this
if(a==null)return A.ft(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.r
if(a instanceof A.z)return!!a[s]
return!!J.aG(a)[s]},
kj(a){var s,r=this
if(a==null){s=A.cL(r)
if(s)return a}else if(r.b(a))return a
A.ik(a,r)},
kl(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.ik(a,s)},
ik(a,b){throw A.e(A.id(A.i7(a,A.iC(a,b),A.a7(b,null))))},
fz(a,b,c,d){var s=null
if(A.L(v.typeUniverse,a,s,b,s))return a
throw A.e(A.id("The type argument '"+A.a7(a,s)+"' is not a subtype of the type variable bound '"+A.a7(b,s)+"' of type variable '"+c+"' in '"+d+"'."))},
i7(a,b,c){var s=A.d_(a)
return s+": type '"+A.a7(b==null?A.cK(a):b,null)+"' is not a subtype of type '"+c+"'"},
id(a){return new A.cu("TypeError: "+a)},
a6(a,b){return new A.cu("TypeError: "+A.i7(a,null,b))},
ku(a){return a!=null},
ke(a){if(a!=null)return a
throw A.e(A.a6(a,"Object"))},
kx(a){return!0},
kg(a){return a},
im(a){return!0===a||!1===a},
lI(a){if(!0===a)return!0
if(!1===a)return!1
throw A.e(A.a6(a,"bool"))},
lK(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.e(A.a6(a,"bool"))},
lJ(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.e(A.a6(a,"bool?"))},
aE(a){if(typeof a=="number")return a
throw A.e(A.a6(a,"double"))},
lM(a){if(typeof a=="number")return a
if(a==null)return a
throw A.e(A.a6(a,"double"))},
lL(a){if(typeof a=="number")return a
if(a==null)return a
throw A.e(A.a6(a,"double?"))},
ip(a){return typeof a=="number"&&Math.floor(a)===a},
Y(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.e(A.a6(a,"int"))},
lO(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.e(A.a6(a,"int"))},
lN(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.e(A.a6(a,"int?"))},
kt(a){return typeof a=="number"},
hg(a){if(typeof a=="number")return a
throw A.e(A.a6(a,"num"))},
lQ(a){if(typeof a=="number")return a
if(a==null)return a
throw A.e(A.a6(a,"num"))},
lP(a){if(typeof a=="number")return a
if(a==null)return a
throw A.e(A.a6(a,"num?"))},
kv(a){return typeof a=="string"},
cA(a){if(typeof a=="string")return a
throw A.e(A.a6(a,"String"))},
lR(a){if(typeof a=="string")return a
if(a==null)return a
throw A.e(A.a6(a,"String"))},
kf(a){if(typeof a=="string")return a
if(a==null)return a
throw A.e(A.a6(a,"String?"))},
kC(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.a7(a[q],b)
return s},
il(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=A.b([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)B.a.u(a5,"T"+(q+p))
for(o=t.R,n=t._,m="<",l="",p=0;p<s;++p,l=a3){k=a5.length
j=k-1-p
if(!(j>=0))return A.k(a5,j)
m=B.i.B(m+l,a5[j])
i=a6[p]
h=i.x
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+A.a7(i,a5)}m+=">"}else{m=""
r=null}o=a4.y
g=a4.z
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=A.a7(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+A.a7(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+A.a7(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=A.a7(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
a7(a,b){var s,r,q,p,o,n,m,l=a.x
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=A.a7(a.y,b)
return s}if(l===7){r=a.y
s=A.a7(r,b)
q=r.x
return(q===11||q===12?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+A.a7(a.y,b)+">"
if(l===9){p=A.kH(a.y)
o=a.z
return o.length>0?p+("<"+A.kC(o,b)+">"):p}if(l===11)return A.il(a,b,null)
if(l===12)return A.il(a.y,b,a.z)
if(l===13){n=a.y
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.k(b,n)
return b[n]}return"?"},
kH(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
kd(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
kc(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.dE(a,b,!1)
else if(typeof m=="number"){s=m
r=A.cw(a,5,"#")
q=A.fp(s)
for(p=0;p<s;++p)q[p]=r
o=A.cv(a,b,q)
n[b]=o
return o}else return m},
ka(a,b){return A.ii(a.tR,b)},
k9(a,b){return A.ii(a.eT,b)},
dE(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.ic(A.ia(a,null,b,c))
r.set(b,s)
return s},
fo(a,b,c){var s,r,q=b.Q
if(q==null)q=b.Q=new Map()
s=q.get(c)
if(s!=null)return s
r=A.ic(A.ia(a,b,c,!0))
q.set(c,r)
return r},
kb(a,b,c){var s,r,q,p=b.as
if(p==null)p=b.as=new Map()
s=c.at
r=p.get(s)
if(r!=null)return r
q=A.hd(a,b,c.x===10?c.z:[c])
p.set(s,q)
return q},
aW(a,b){b.a=A.kn
b.b=A.ko
return b},
cw(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.ap(null,null)
s.x=b
s.at=c
r=A.aW(a,s)
a.eC.set(c,r)
return r},
ih(a,b,c){var s,r=b.at+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.k7(a,b,r,c)
a.eC.set(r,s)
return s},
k7(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.aH(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new A.ap(null,null)
q.x=6
q.y=b
q.at=c
return A.aW(a,q)},
hf(a,b,c){var s,r=b.at+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.k6(a,b,r,c)
a.eC.set(r,s)
return s},
k6(a,b,c,d){var s,r,q,p
if(d){s=b.x
if(!A.aH(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&A.cL(b.y)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.cF)return t.P
else if(s===6){q=b.y
if(q.x===8&&A.cL(q.y))return q
else return A.hY(a,b)}}p=new A.ap(null,null)
p.x=7
p.y=b
p.at=c
return A.aW(a,p)},
ig(a,b,c){var s,r=b.at+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.k4(a,b,r,c)
a.eC.set(r,s)
return s},
k4(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.aH(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return A.cv(a,"aj",[b])
else if(b===t.P||b===t.T)return t.eH}q=new A.ap(null,null)
q.x=8
q.y=b
q.at=c
return A.aW(a,q)},
k8(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.ap(null,null)
s.x=13
s.y=b
s.at=q
r=A.aW(a,s)
a.eC.set(q,r)
return r},
dD(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].at
return s},
k3(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].at}return s},
cv(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.dD(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.ap(null,null)
r.x=9
r.y=b
r.z=c
if(c.length>0)r.c=c[0]
r.at=p
q=A.aW(a,r)
a.eC.set(p,q)
return q},
hd(a,b,c){var s,r,q,p,o,n
if(b.x===10){s=b.y
r=b.z.concat(c)}else{r=c
s=b}q=s.at+(";<"+A.dD(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.ap(null,null)
o.x=10
o.y=s
o.z=r
o.at=q
n=A.aW(a,o)
a.eC.set(q,n)
return n},
ie(a,b,c){var s,r,q,p,o,n=b.at,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.dD(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.dD(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.k3(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.ap(null,null)
p.x=11
p.y=b
p.z=c
p.at=r
o=A.aW(a,p)
a.eC.set(r,o)
return o},
he(a,b,c,d){var s,r=b.at+("<"+A.dD(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.k5(a,b,c,r,d)
a.eC.set(r,s)
return s},
k5(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.fp(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.x===1){r[p]=o;++q}}if(q>0){n=A.aF(a,b,r,0)
m=A.cH(a,c,r,0)
return A.he(a,n,m,c!==m)}}l=new A.ap(null,null)
l.x=12
l.y=b
l.z=c
l.at=d
return A.aW(a,l)},
ia(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
ic(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=A.jZ(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=A.ib(a,r,h,g,!1)
else if(q===46)r=A.ib(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(A.aV(a.u,a.e,g.pop()))
break
case 94:g.push(A.k8(a.u,g.pop()))
break
case 35:g.push(A.cw(a.u,5,"#"))
break
case 64:g.push(A.cw(a.u,2,"@"))
break
case 126:g.push(A.cw(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
A.hc(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(A.cv(p,n,o))
else{m=A.aV(p,a.e,n)
switch(m.x){case 11:g.push(A.he(p,m,o,a.n))
break
default:g.push(A.hd(p,m,o))
break}}break
case 38:A.k_(a,g)
break
case 42:p=a.u
g.push(A.ih(p,A.aV(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(A.hf(p,A.aV(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(A.ig(p,A.aV(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new A.dv()
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
A.hc(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(A.ie(p,A.aV(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
A.hc(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
A.k1(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return A.aV(a.u,a.e,i)},
jZ(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
ib(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.x===10)o=o.y
n=A.kd(s,o.y)[p]
if(n==null)A.I('No "'+p+'" in "'+A.jK(o)+'"')
d.push(A.fo(s,o,n))}else d.push(p)
return m},
k_(a,b){var s=b.pop()
if(0===s){b.push(A.cw(a.u,1,"0&"))
return}if(1===s){b.push(A.cw(a.u,4,"1&"))
return}throw A.e(A.e_("Unexpected extended operation "+A.q(s)))},
aV(a,b,c){if(typeof c=="string")return A.cv(a,c,a.sEA)
else if(typeof c=="number")return A.k0(a,b,c)
else return c},
hc(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.aV(a,b,c[s])},
k1(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.aV(a,b,c[s])},
k0(a,b,c){var s,r,q=b.x
if(q===10){if(c===0)return b.y
s=b.z
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.y
q=b.x}else if(c===0)return b
if(q!==9)throw A.e(A.e_("Indexed base must be an interface type"))
s=b.z
if(c<=s.length)return s[c-1]
throw A.e(A.e_("Bad index "+c+" for "+b.k(0)))},
L(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!A.aH(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.x
if(r===4)return!0
if(A.aH(b))return!1
if(b.x!==1)s=!1
else s=!0
if(s)return!0
q=r===13
if(q)if(A.L(a,c[b.y],c,d,e))return!0
p=d.x
s=b===t.P||b===t.T
if(s){if(p===8)return A.L(a,b,c,d.y,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return A.L(a,b.y,c,d,e)
if(r===6)return A.L(a,b.y,c,d,e)
return r!==7}if(r===6)return A.L(a,b.y,c,d,e)
if(p===6){s=A.hY(a,d)
return A.L(a,b,c,s,e)}if(r===8){if(!A.L(a,b.y,c,d,e))return!1
return A.L(a,A.hX(a,b),c,d,e)}if(r===7){s=A.L(a,t.P,c,d,e)
return s&&A.L(a,b.y,c,d,e)}if(p===8){if(A.L(a,b,c,d.y,e))return!0
return A.L(a,b,c,A.hX(a,d),e)}if(p===7){s=A.L(a,b,c,t.P,e)
return s||A.L(a,b,c,d.y,e)}if(q)return!1
s=r!==11
if((!s||r===12)&&d===t.Z)return!0
if(p===12){if(b===t.cj)return!0
if(r!==12)return!1
o=b.z
n=d.z
m=o.length
if(m!==n.length)return!1
c=c==null?o:o.concat(c)
e=e==null?n:n.concat(e)
for(l=0;l<m;++l){k=o[l]
j=n[l]
if(!A.L(a,k,c,j,e)||!A.L(a,j,e,k,c))return!1}return A.io(a,b.y,c,d.y,e)}if(p===11){if(b===t.cj)return!0
if(s)return!1
return A.io(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return A.kr(a,b,c,d,e)}return!1},
io(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.L(a3,a4.y,a5,a6.y,a7))return!1
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
if(!A.L(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.L(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.L(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.L(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
kr(a,b,c,d,e){var s,r,q,p,o,n,m,l=b.y,k=d.y
for(;l!==k;){s=a.tR[l]
if(s==null)return!1
if(typeof s=="string"){l=s
continue}r=s[k]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.fo(a,b,r[o])
return A.ij(a,p,null,c,d.z,e)}n=b.z
m=d.z
return A.ij(a,n,null,c,m,e)},
ij(a,b,c,d,e,f){var s,r,q,p=b.length
for(s=0;s<p;++s){r=b[s]
q=e[s]
if(!A.L(a,r,d,q,f))return!1}return!0},
cL(a){var s,r=a.x
if(!(a===t.P||a===t.T))if(!A.aH(a))if(r!==7)if(!(r===6&&A.cL(a.y)))s=r===8&&A.cL(a.y)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
kY(a){var s
if(!A.aH(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
aH(a){var s=a.x
return s===2||s===3||s===4||s===5||a===t.R},
ii(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
fp(a){return a>0?new Array(a):v.typeUniverse.sEA},
ap:function ap(a,b){var _=this
_.a=a
_.b=b
_.w=_.r=_.c=null
_.x=0
_.at=_.as=_.Q=_.z=_.y=null},
dv:function dv(){this.c=this.b=this.a=null},
dC:function dC(a){this.a=a},
du:function du(){},
cu:function cu(a){this.a=a},
jU(){var s,r,q={}
if(self.scheduleImmediate!=null)return A.kL()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(A.br(new A.eZ(q),1)).observe(s,{childList:true})
return new A.eY(q,s,r)}else if(self.setImmediate!=null)return A.kM()
return A.kN()},
jV(a){self.scheduleImmediate(A.br(new A.f_(t.M.a(a)),0))},
jW(a){self.setImmediate(A.br(new A.f0(t.M.a(a)),0))},
jX(a){t.M.a(a)
A.k2(0,a)},
k2(a,b){var s=new A.fm()
s.e5(a,b)
return s},
cG(a){return new A.dq(new A.Q($.H,a.h("Q<0>")),a.h("dq<0>"))},
cD(a,b){a.$2(0,null)
b.b=!0
return b.a},
b7(a,b){A.kh(a,b)},
cC(a,b){b.bu(0,a)},
cB(a,b){b.cJ(A.aZ(a),A.aX(a))},
kh(a,b){var s,r,q=new A.fq(b),p=new A.fr(b)
if(a instanceof A.Q)a.cz(q,p,t.z)
else{s=t.z
if(t.v.b(a))a.bM(q,p,s)
else{r=new A.Q($.H,t.c)
r.a=8
r.c=a
r.cz(q,p,s)}}},
cI(a){var s=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(r){e=r
d=c}}}(a,1)
return $.H.d4(new A.fw(s),t.J,t.S,t.z)},
jY(a){return new A.bl(a,1)},
i8(){return B.a5},
i9(a){return new A.bl(a,3)},
iq(a,b){return new A.ct(a,b.h("ct<0>"))},
e0(a,b){var s=A.dG(a,"error",t.K)
return new A.bA(s,b==null?A.j4(a):b)},
j4(a){var s
if(t.Y.b(a)){s=a.gbg()
if(s!=null)return s}return B.U},
f8(a,b){var s,r,q
for(s=t.c;r=a.a,(r&4)!==0;)a=s.a(a.c)
if((r&24)!==0){q=b.aV()
b.bk(a)
A.bk(b,q)}else{q=t.F.a(b.c)
b.a=b.a&1|4
b.c=a
a.cu(q)}},
bk(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=c.a=a
for(s=t.u,r=t.F,q=t.v;!0;){p={}
o=b.a
n=(o&16)===0
m=!n
if(a0==null){if(m&&(o&1)===0){l=s.a(b.c)
A.fu(l.a,l.b)}return}p.a=a0
k=a0.a
for(b=a0;k!=null;b=k,k=j){b.a=null
A.bk(c.a,b)
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
A.fu(i.a,i.b)
return}f=$.H
if(f!==g)$.H=g
else f=null
b=b.c
if((b&15)===8)new A.fg(p,c,m).$0()
else if(n){if((b&1)!==0)new A.ff(p,i).$0()}else if((b&2)!==0)new A.fe(c,p).$0()
if(f!=null)$.H=f
b=p.c
if(q.b(b)){o=p.a.$ti
o=o.h("aj<2>").b(b)||!o.z[1].b(b)}else o=!1
if(o){q.a(b)
e=p.a.b
if((b.a&24)!==0){d=r.a(e.c)
e.c=null
a0=e.aW(d)
e.a=b.a&30|e.a&1
e.c=b.c
c.a=b
continue}else A.f8(b,e)
return}}e=p.a.b
d=r.a(e.c)
e.c=null
a0=e.aW(d)
b=p.b
o=p.c
if(!b){e.$ti.c.a(o)
e.a=8
e.c=o}else{s.a(o)
e.a=e.a&1|16
e.c=o}c.a=e
b=e}},
kA(a,b){var s
if(t.C.b(a))return b.d4(a,t.z,t.K,t.k)
s=t.I
if(s.b(a))return s.a(a)
throw A.e(A.hC(a,"onError",u.c))},
kz(){var s,r
for(s=$.bo;s!=null;s=$.bo){$.cF=null
r=s.b
$.bo=r
if(r==null)$.cE=null
s.a.$0()}},
kE(){$.hi=!0
try{A.kz()}finally{$.cF=null
$.hi=!1
if($.bo!=null)$.hx().$1(A.iw())}},
it(a){var s=new A.dr(a),r=$.cE
if(r==null){$.bo=$.cE=s
if(!$.hi)$.hx().$1(A.iw())}else $.cE=r.b=s},
kD(a){var s,r,q,p=$.bo
if(p==null){A.it(a)
$.cF=$.cE
return}s=new A.dr(a)
r=$.cF
if(r==null){s.b=p
$.bo=$.cF=s}else{q=r.b
s.b=q
$.cF=r.b=s
if(q==null)$.cE=s}},
l7(a){var s,r=null,q=$.H
if(B.f===q){A.b8(r,r,B.f,a)
return}s=!1
if(s){A.b8(r,r,q,t.M.a(a))
return}A.b8(r,r,q,t.M.a(q.cG(a)))},
lv(a,b){A.dG(a,"stream",t.K)
return new A.dA(b.h("dA<0>"))},
fu(a,b){A.kD(new A.fv(a,b))},
ir(a,b,c,d,e){var s,r=$.H
if(r===c)return d.$0()
$.H=c
s=r
try{r=d.$0()
return r}finally{$.H=s}},
is(a,b,c,d,e,f,g){var s,r=$.H
if(r===c)return d.$1(e)
$.H=c
s=r
try{r=d.$1(e)
return r}finally{$.H=s}},
kB(a,b,c,d,e,f,g,h,i){var s,r=$.H
if(r===c)return d.$2(e,f)
$.H=c
s=r
try{r=d.$2(e,f)
return r}finally{$.H=s}},
b8(a,b,c,d){t.M.a(d)
if(B.f!==c)d=c.cG(d)
A.it(d)},
eZ:function eZ(a){this.a=a},
eY:function eY(a,b,c){this.a=a
this.b=b
this.c=c},
f_:function f_(a){this.a=a},
f0:function f0(a){this.a=a},
fm:function fm(){},
fn:function fn(a,b){this.a=a
this.b=b},
dq:function dq(a,b){this.a=a
this.b=!1
this.$ti=b},
fq:function fq(a){this.a=a},
fr:function fr(a){this.a=a},
fw:function fw(a){this.a=a},
bl:function bl(a,b){this.a=a
this.b=b},
bm:function bm(a,b){var _=this
_.a=a
_.d=_.c=_.b=null
_.$ti=b},
ct:function ct(a,b){this.a=a
this.$ti=b},
bA:function bA(a,b){this.a=a
this.b=b},
ds:function ds(){},
cs:function cs(a,b){this.a=a
this.$ti=b},
b5:function b5(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
Q:function Q(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
f5:function f5(a,b){this.a=a
this.b=b},
fd:function fd(a,b){this.a=a
this.b=b},
f9:function f9(a){this.a=a},
fa:function fa(a){this.a=a},
fb:function fb(a,b,c){this.a=a
this.b=b
this.c=c},
f7:function f7(a,b){this.a=a
this.b=b},
fc:function fc(a,b){this.a=a
this.b=b},
f6:function f6(a,b,c){this.a=a
this.b=b
this.c=c},
fg:function fg(a,b,c){this.a=a
this.b=b
this.c=c},
fh:function fh(a){this.a=a},
ff:function ff(a,b){this.a=a
this.b=b},
fe:function fe(a,b){this.a=a
this.b=b},
dr:function dr(a){this.a=a
this.b=null},
cb:function cb(){},
eH:function eH(a,b){this.a=a
this.b=b},
eI:function eI(a,b){this.a=a
this.b=b},
cc:function cc(){},
dA:function dA(a){this.$ti=a},
cx:function cx(){},
fv:function fv(a,b){this.a=a
this.b=b},
dz:function dz(){},
fj:function fj(a,b){this.a=a
this.b=b},
fk:function fk(a,b,c){this.a=a
this.b=b
this.c=c},
h4(a,b){return new A.bW(a.h("@<0>").C(b).h("bW<1,2>"))},
jw(a){return new A.aD(a.h("aD<0>"))},
jx(a){return new A.aD(a.h("aD<0>"))},
hb(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
ha(a,b,c){var s=new A.b6(a,b,c.h("b6<0>"))
s.c=a.e
return s},
jo(a,b,c){var s,r
if(A.hj(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.b([],t.s)
B.a.u($.ah,a)
try{A.ky(a,s)}finally{if(0>=$.ah.length)return A.k($.ah,-1)
$.ah.pop()}r=A.i0(b,t.hf.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
h1(a,b,c){var s,r
if(A.hj(a))return b+"..."+c
s=new A.dh(b)
B.a.u($.ah,a)
try{r=s
r.a=A.i0(r.a,a,", ")}finally{if(0>=$.ah.length)return A.k($.ah,-1)
$.ah.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
hj(a){var s,r
for(s=$.ah.length,r=0;r<s;++r)if(a===$.ah[r])return!0
return!1},
ky(a,b){var s,r,q,p,o,n,m,l=a.gv(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.m())return
s=A.q(l.gp())
B.a.u(b,s)
k+=s.length+2;++j}if(!l.m()){if(j<=5)return
if(0>=b.length)return A.k(b,-1)
r=b.pop()
if(0>=b.length)return A.k(b,-1)
q=b.pop()}else{p=l.gp();++j
if(!l.m()){if(j<=4){B.a.u(b,A.q(p))
return}r=A.q(p)
if(0>=b.length)return A.k(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gp();++j
for(;l.m();p=o,o=n){n=l.gp();++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return A.k(b,-1)
k-=b.pop().length+2;--j}B.a.u(b,"...")
return}}q=A.q(p)
r=A.q(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.k(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.u(b,m)
B.a.u(b,q)
B.a.u(b,r)},
h5(a,b){var s,r,q=A.jw(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.c)(a),++r)q.u(0,b.a(a[r]))
return q},
hU(a){var s,r={}
if(A.hj(a))return"{...}"
s=new A.dh("")
try{B.a.u($.ah,a)
s.a+="{"
r.a=!0
a.cV(0,new A.ek(r,s))
s.a+="}"}finally{if(0>=$.ah.length)return A.k($.ah,-1)
$.ah.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
aD:function aD(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
dw:function dw(a){this.a=a
this.c=this.b=null},
b6:function b6(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
bT:function bT(){},
ae:function ae(){},
c_:function c_(){},
ek:function ek(a,b){this.a=a
this.b=b},
bd:function bd(){},
c8:function c8(){},
cq:function cq(){},
cz:function cz(){},
kW(a,b){var s=A.jF(a,b)
if(s!=null)return s
throw A.e(A.hM(a,null))},
jj(a){if(a instanceof A.a1)return a.k(0)
return"Instance of '"+A.eD(a)+"'"},
jk(a,b){a=A.e(a)
if(a==null)a=t.K.a(a)
a.stack=b.k(0)
throw a
throw A.e("unreachable")},
hT(a,b,c,d){var s,r=c?J.hQ(a,d):J.hP(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
ej(a,b,c){var s,r=A.b([],c.h("t<0>"))
for(s=J.U(a);s.m();)B.a.u(r,c.a(s.gp()))
if(b)return r
return J.ef(r,c)},
f(a,b,c){var s
if(b)return A.hS(a,c)
s=J.ef(A.hS(a,c),c)
return s},
hS(a,b){var s,r
if(Array.isArray(a))return A.b(a.slice(0),b.h("t<0>"))
s=A.b([],b.h("t<0>"))
for(r=J.U(a);r.m();)B.a.u(s,r.gp())
return s},
jI(a){return new A.d5(a,A.js(a,!1,!0,!1,!1,!1))},
i0(a,b,c){var s=J.U(b)
if(!s.m())return a
if(c.length===0){do a+=A.q(s.gp())
while(s.m())}else{a+=A.q(s.gp())
for(;s.m();)a=a+c+A.q(s.gp())}return a},
d_(a){if(typeof a=="number"||A.im(a)||a==null)return J.cO(a)
if(typeof a=="string")return JSON.stringify(a)
return A.jj(a)},
e_(a){return new A.bz(a)},
dO(a,b){return new A.av(!1,null,b,a)},
hC(a,b,c){return new A.av(!0,a,b,c)},
dP(a,b,c){return a},
jH(a,b){return new A.c5(null,null,!0,a,b,"Value not in range")},
at(a,b,c,d,e){return new A.c5(b,c,!0,a,d,"Invalid value")},
hW(a,b,c,d){if(a<b||a>c)throw A.e(A.at(a,b,c,d,null))
return a},
bf(a,b,c){if(0>a||a>c)throw A.e(A.at(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.e(A.at(b,a,c,"end",null))
return b}return c},
ao(a,b){if(a<0)throw A.e(A.at(a,0,null,b,null))
return a},
h0(a,b,c,d,e){var s=A.Y(e==null?J.B(b):e)
return new A.d1(s,!0,a,c,"Index out of range")},
a5(a){return new A.dn(a)},
i4(a){return new A.dl(a)},
ak(a){return new A.bg(a)},
ai(a){return new A.cX(a)},
hM(a,b){return new A.ec(a,b)},
da(a,b,c,d){var s,r
if(B.l===c)return A.i1(J.a8(a),J.a8(b),$.fW())
if(B.l===d){s=J.a8(a)
b=J.a8(b)
c=J.a8(c)
return A.h9(A.aQ(A.aQ(A.aQ($.fW(),s),b),c))}s=J.a8(a)
b=J.a8(b)
c=J.a8(c)
d=J.a8(d)
r=$.fW()
return A.h9(A.aQ(A.aQ(A.aQ(A.aQ(r,s),b),c),d))},
fQ(a){A.l3(A.q(a))},
f1:function f1(){},
G:function G(){},
bz:function bz(a){this.a=a},
aS:function aS(){},
d9:function d9(){},
av:function av(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c5:function c5(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
d1:function d1(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
dn:function dn(a){this.a=a},
dl:function dl(a){this.a=a},
bg:function bg(a){this.a=a},
cX:function cX(a){this.a=a},
ca:function ca(){},
cZ:function cZ(a){this.a=a},
f4:function f4(a){this.a=a},
ec:function ec(a,b){this.a=a
this.b=b},
n:function n(){},
E:function E(){},
M:function M(){},
z:function z(){},
dB:function dB(){},
dh:function dh(a){this.a=a},
jC(a){var s=new Path2D(a)
s.toString
return s},
f2(a,b,c,d,e){var s=A.iu(new A.f3(c),t.L),r=s!=null
if(r&&!0){t.B.a(s)
if(r)J.j_(a,b,s,!1)}return new A.co(a,b,s,!1,e.h("co<0>"))},
iu(a,b){var s=$.H
if(s===B.f)return a
return s.eF(a,b)},
j:function j(){},
cQ:function cQ(){},
cR:function cR(){},
b0:function b0(){},
bC:function bC(){},
as:function as(){},
e7:function e7(){},
bH:function bH(){},
h:function h(){},
i:function i(){},
a2:function a2(){},
d0:function d0(){},
af:function af(){},
a9:function a9(){},
db:function db(){},
de:function de(){},
ar:function ar(){},
bj:function bj(){},
eX:function eX(a){this.a=a},
cl:function cl(){},
h_:function h_(a,b){this.a=a
this.$ti=b},
cn:function cn(){},
dt:function dt(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
co:function co(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
f3:function f3(a){this.a=a},
iG(a,b,c){A.fz(c,t.H,"T","min")
return Math.min(c.a(a),c.a(b))},
iF(a,b,c){A.fz(c,t.H,"T","max")
return Math.max(c.a(a),c.a(b))},
dy:function dy(){this.b=this.a=0},
b4:function b4(a,b,c){this.a=a
this.b=b
this.$ti=c},
V:function V(a,b){this.a=a
this.$ti=b},
ee:function ee(a){this.a=a},
cp:function cp(a,b){this.a=a
this.b=null
this.$ti=b},
e2:function e2(a){var _=this
_.c=14.222222222222221
_.d=8
_.f=a
_.r=$},
e3:function e3(){},
e4:function e4(){},
bu:function bu(){},
cP:function cP(){},
dL:function dL(a){this.a=a},
dM:function dM(a){this.a=a},
dN:function dN(a){this.a=a},
cT:function cT(a,b,c,d,e,f,g,h){var _=this
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
h7(a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a9.a1,a5=a9.b3,a6=A.f(a9.cT,!0,t.V),a7=a9.eO,a8=a9.by
if(a8!=null){s=A.w(a8)
s=A.f(new A.K(a8,s.h("S(1)").a(new A.ez()),s.h("K<1,S>")),!0,t.f)
a8=s}else a8=a3
s=a9.bz
if(s!=null){r=A.w(s)
r=A.f(new A.K(s,r.h("S(1)").a(new A.eA()),r.h("K<1,S>")),!0,t.f)
s=r}else s=a3
r=a9.J
q=a9.K
A.ag(a3,0,B.b,a3,0)
p=a9.fx
o=a9.fy
n=A.aR(a9.go)
m=a9.id
m=m==null?a3:A.Z(m)
l=a9.k1
l=l==null?a3:A.Z(l)
k=a9.ax
k=k==null?a3:J.o(k,new A.N(),t.G)
if(k==null)k=A.b([],t.O)
j=t.G
k=A.f(k,!0,j)
i=a9.ay
i=i==null?a3:J.o(i,new A.O(),j)
i=A.f(i==null?A.b([],t.O):i,!0,j)
h=a9.ch
h=h==null?a3:J.o(h,new A.P(),j)
j=A.f(h==null?A.b([],t.O):h,!0,j)
h=a9.w
g=a9.x
f=a9.a
f===$&&A.a("color")
f=f.j()
e=a9.b
e===$&&A.a("name")
a9.c===$&&A.a("target")
d=A.b([],t.r)
c=a9.d
c===$&&A.a("submobjects")
b=c.length
a=0
for(;a<c.length;c.length===b||(0,A.c)(c),++a)d.push(c[a].j())
c=a9.f
c===$&&A.a("updatingSuspended")
b=A.b([],t.l)
a0=a9.r
a0===$&&A.a("points")
a1=a0.length
a=0
for(;a<a0.length;a0.length===a1||(0,A.c)(a0),++a){a2=a0[a]
b.push(new A.d(a2.a,a2.b,a2.c))}return new A.be(a9.am,a4,a9.b1,!0,a9.cR,a9.cS,a5,a6,!1,a9.eL,a9.cU,a9.eM,a9.eN,new A.d(a7.a,a7.b,a7.c),a9.eP,!0,a9.eQ,a9.eR,a9.eS,a9.eT,a8,s,a9.y2,a9.I,r,q,p,new A.d(o.a,o.b,o.c),n,m,l,h,g,a9.y,a9.z,!1,a9.as,a9.at,k,i,j,f,e,a3,d,c,b)},
hE(a,b,c,d,e,f){var s,r=null,q=new A.bB(B.c,a,B.w,d,c,b,f,e,4,0,!1,0.01,!1,0.000001,4,r,r,r,B.b,$,r,$,$,$)
q.S(B.b,r,r)
q.cb(r)
q.al=q.cL(c,b,B.w.bG(B.w))
s=q.cL(f,e,d.bG(B.K))
q.aw=s
s.bK(0,-1.5707963267948966,B.c,B.h)
q.bx=A.i5(A.b([q.al,q.aw],t.U))
q.U(t.a.a(A.b([q.al,q.aw],t.r)))
q.ai(B.c)
return q},
j5(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a0.eI,d=A.fZ(a0.cQ),c=A.fZ(a0.eJ),b=A.fZ(a0.eK),a=a0.ax
a=a==null?f:J.o(a,new A.N(),t.G)
if(a==null)a=A.b([],t.O)
s=t.G
a=A.f(a,!0,s)
r=a0.ay
r=r==null?f:J.o(r,new A.O(),s)
r=A.f(r==null?A.b([],t.O):r,!0,s)
q=a0.ch
q=q==null?f:J.o(q,new A.P(),s)
s=A.f(q==null?A.b([],t.O):q,!0,s)
q=a0.w
p=a0.x
o=a0.a
o===$&&A.a("color")
o=o.j()
n=a0.b
n===$&&A.a("name")
a0.c===$&&A.a("target")
m=A.b([],t.r)
l=a0.d
l===$&&A.a("submobjects")
k=l.length
j=0
for(;j<l.length;l.length===k||(0,A.c)(l),++j)m.push(l[j].j())
l=a0.f
l===$&&A.a("updatingSuspended")
k=A.b([],t.l)
i=a0.r
i===$&&A.a("points")
h=i.length
j=0
for(;j<i.length;i.length===h||(0,A.c)(i),++j){g=i[j]
k.push(new A.d(g.a,g.b,g.c))}e=new A.bB(new A.d(e.a,e.b,e.c),d,c,b,a0.to,a0.x1,a0.x2,a0.xr,q,p,a0.y,a0.z,!1,a0.as,a0.at,a,r,s,o,n,f,m,l,k)
d=a0.al
d===$&&A.a("xAxis")
d=A.h7(d)
e.al=d
c=a0.aw
c===$&&A.a("yAxis")
c=A.h7(c)
e.aw=c
e.bx=A.i5(A.b([d,c],t.U))
return e},
cS(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0){return new A.a_(a,f,c,g,a0,e,q,p,h,n,d,m,j,k,l,i,s,r,b,o)},
fZ(a){return new A.a_(a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.w,a.x,a.y,a.z,a.Q,a.as,a.at,a.ax,a.ay,a.ch,a.CW,a.cx,a.cy)},
be:function be(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7){var _=this
_.am=a
_.a1=b
_.b1=c
_.b2=d
_.cR=e
_.cS=f
_.b3=g
_.cT=h
_.fs=i
_.eL=j
_.cU=k
_.eM=l
_.eN=m
_.eO=n
_.eP=o
_.ft=p
_.eQ=q
_.eR=r
_.eS=s
_.eT=a0
_.by=a1
_.bz=a2
_.y2=a3
_.I=a4
_.J=a5
_.K=a6
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
ez:function ez(){},
eA:function eA(){},
cY:function cY(){},
e6:function e6(a){this.a=a},
bB:function bB(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4){var _=this
_.eI=a
_.cQ=b
_.eJ=c
_.eK=d
_.bx=_.aw=_.al=$
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
e1:function e1(){},
a_:function a_(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0){var _=this
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
jB(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=A.f(a.k1,!0,t.V),d=a.ax
d=d==null?f:J.o(d,new A.N(),t.G)
if(d==null)d=A.b([],t.O)
s=t.G
d=A.f(d,!0,s)
r=a.ay
r=r==null?f:J.o(r,new A.O(),s)
r=A.f(r==null?A.b([],t.O):r,!0,s)
q=a.ch
q=q==null?f:J.o(q,new A.P(),s)
s=A.f(q==null?A.b([],t.O):q,!0,s)
q=a.w
p=a.x
o=a.a
o===$&&A.a("color")
o=o.j()
n=a.b
n===$&&A.a("name")
a.c===$&&A.a("target")
m=A.b([],t.r)
l=a.d
l===$&&A.a("submobjects")
k=l.length
j=0
for(;j<l.length;l.length===k||(0,A.c)(l),++j)m.push(l[j].j())
l=a.f
l===$&&A.a("updatingSuspended")
k=A.b([],t.l)
i=a.r
i===$&&A.a("points")
h=i.length
j=0
for(;j<i.length;i.length===h||(0,A.c)(i),++j){g=i[j]
k.push(new A.d(g.a,g.b,g.c))}return new A.c3(a.fx,a.fy,a.go,a.id,e,a.k2,q,p,a.y,a.z,!1,a.as,a.at,d,r,s,o,n,f,m,l,k)},
jl(a,b,c,d,e,f,g){var s=null,r=new A.bP(d,e,g,f,c,b,new A.ed(d),4,0,!1,0.01,!1,0.000001,4,s,s,s,a,$,s,$,$,$)
r.S(a,s,s)
r.c0(B.j)
return r},
jm(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=A.f(a.k1,!0,t.V),d=a.ax
d=d==null?f:J.o(d,new A.N(),t.G)
if(d==null)d=A.b([],t.O)
s=t.G
d=A.f(d,!0,s)
r=a.ay
r=r==null?f:J.o(r,new A.O(),s)
r=A.f(r==null?A.b([],t.O):r,!0,s)
q=a.ch
q=q==null?f:J.o(q,new A.P(),s)
s=A.f(q==null?A.b([],t.O):q,!0,s)
q=a.w
p=a.x
o=a.a
o===$&&A.a("color")
o=o.j()
n=a.b
n===$&&A.a("name")
a.c===$&&A.a("target")
m=A.b([],t.r)
l=a.d
l===$&&A.a("submobjects")
k=l.length
j=0
for(;j<l.length;l.length===k||(0,A.c)(l),++j)m.push(l[j].j())
l=a.f
l===$&&A.a("updatingSuspended")
k=A.b([],t.l)
i=a.r
i===$&&A.a("points")
h=i.length
j=0
for(;j<i.length;i.length===h||(0,A.c)(i),++j){g=i[j]
k.push(new A.d(g.a,g.b,g.c))}return new A.bP(a.I,a.fx,a.fy,a.go,a.id,e,a.k2,q,p,a.y,a.z,!1,a.as,a.at,d,r,s,o,n,f,m,l,k)},
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
eB:function eB(a){this.a=a},
bP:function bP(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3){var _=this
_.I=a
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
ed:function ed(a){this.a=a},
ag(a,b,c,d,e){var s=t.O,r=A.b([c],s),q=d!=null?A.b([d],s):A.b([],s)
return new A.cf(r,q,e,a!=null?A.b([a],s):A.b([],s),b)},
aR(a){var s,r,q,p,o=a.a
if(o!=null){s=A.b([],t.O)
for(o=J.U(o);o.m();){r=o.gp()
s.push(new A.v(r.a,r.b,r.c,r.d))}o=s}else o=null
s=a.b
if(s!=null){r=A.b([],t.O)
for(s=J.U(s);s.m();){q=s.gp()
r.push(new A.v(q.a,q.b,q.c,q.d))}s=r}else s=null
r=a.d
if(r!=null){q=A.b([],t.O)
for(r=J.U(r);r.m();){p=r.gp()
q.push(new A.v(p.a,p.b,p.c,p.d))}r=q}else r=null
return new A.cf(o,s,a.c,r,a.e)},
jP(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=null
A.ag(a1,0,B.b,a1,0)
s=a2.fx
r=a2.fy
q=A.aR(a2.go)
p=a2.id
p=p==null?a1:A.Z(p)
o=a2.k1
o=o==null?a1:A.Z(o)
n=a2.ax
n=n==null?a1:J.o(n,new A.N(),t.G)
if(n==null)n=A.b([],t.O)
m=t.G
n=A.f(n,!0,m)
l=a2.ay
l=l==null?a1:J.o(l,new A.O(),m)
l=A.f(l==null?A.b([],t.O):l,!0,m)
k=a2.ch
k=k==null?a1:J.o(k,new A.P(),m)
m=A.f(k==null?A.b([],t.O):k,!0,m)
k=a2.w
j=a2.x
i=a2.gaY()
h=a2.a
h===$&&A.a("color")
h=h.j()
g=a2.b
g===$&&A.a("name")
a2.c===$&&A.a("target")
f=A.b([],t.r)
e=a2.d
e===$&&A.a("submobjects")
d=e.length
c=0
for(;c<e.length;e.length===d||(0,A.c)(e),++c)f.push(e[c].j())
e=a2.f
e===$&&A.a("updatingSuspended")
d=A.b([],t.l)
b=a2.r
b===$&&A.a("points")
a=b.length
c=0
for(;c<b.length;b.length===a||(0,A.c)(b),++c){a0=b[c]
d.push(new A.d(a0.a,a0.b,a0.c))}return new A.bh(s,new A.d(r.a,r.b,r.c),q,p,o,k,j,i,a2.z,!1,a2.as,a2.at,n,l,m,h,g,a1,f,e,d)},
j3(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=null
A.ag(a1,0,B.b,a1,0)
s=a2.fx
r=a2.fy
q=A.aR(a2.go)
p=a2.id
p=p==null?a1:A.Z(p)
o=a2.k1
o=o==null?a1:A.Z(o)
n=a2.ax
n=n==null?a1:J.o(n,new A.N(),t.G)
if(n==null)n=A.b([],t.O)
m=t.G
n=A.f(n,!0,m)
l=a2.ay
l=l==null?a1:J.o(l,new A.O(),m)
l=A.f(l==null?A.b([],t.O):l,!0,m)
k=a2.ch
k=k==null?a1:J.o(k,new A.P(),m)
m=A.f(k==null?A.b([],t.O):k,!0,m)
k=a2.w
j=a2.x
i=a2.gaY()
h=a2.a
h===$&&A.a("color")
h=h.j()
g=a2.b
g===$&&A.a("name")
a2.c===$&&A.a("target")
f=A.b([],t.r)
e=a2.d
e===$&&A.a("submobjects")
d=e.length
c=0
for(;c<e.length;e.length===d||(0,A.c)(e),++c)f.push(e[c].j())
e=a2.f
e===$&&A.a("updatingSuspended")
d=A.b([],t.l)
b=a2.r
b===$&&A.a("points")
a=b.length
c=0
for(;c<b.length;b.length===a||(0,A.c)(b),++c){a0=b[c]
d.push(new A.d(a0.a,a0.b,a0.c))}return new A.bw(a2.y2,a2.I,a2.J,a2.K,a2.av,s,new A.d(r.a,r.b,r.c),q,p,o,k,j,i,a2.z,!1,a2.as,a2.at,n,l,m,h,g,a1,f,e,d)},
ja(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=null
A.ag(a0,0,B.b,a0,0)
s=a1.fx
r=a1.fy
q=A.aR(a1.go)
p=a1.id
p=p==null?a0:A.Z(p)
o=a1.k1
o=o==null?a0:A.Z(o)
n=a1.ax
n=n==null?a0:J.o(n,new A.N(),t.G)
if(n==null)n=A.b([],t.O)
m=t.G
n=A.f(n,!0,m)
l=a1.ay
l=l==null?a0:J.o(l,new A.O(),m)
l=A.f(l==null?A.b([],t.O):l,!0,m)
k=a1.ch
k=k==null?a0:J.o(k,new A.P(),m)
m=A.f(k==null?A.b([],t.O):k,!0,m)
k=a1.w
j=a1.x
i=a1.a
i===$&&A.a("color")
i=i.j()
h=a1.b
h===$&&A.a("name")
a1.c===$&&A.a("target")
g=A.b([],t.r)
f=a1.d
f===$&&A.a("submobjects")
e=f.length
d=0
for(;d<f.length;f.length===e||(0,A.c)(f),++d)g.push(f[d].j())
f=a1.f
f===$&&A.a("updatingSuspended")
e=A.b([],t.l)
c=a1.r
c===$&&A.a("points")
b=c.length
d=0
for(;d<c.length;c.length===b||(0,A.c)(c),++d){a=c[d]
e.push(new A.d(a.a,a.b,a.c))}return new A.bE(a1.y2,a1.I,a1.J,a1.K,a1.av,s,new A.d(r.a,r.b,r.c),q,p,o,k,j,!0,a1.z,!1,a1.as,a1.at,n,l,m,i,h,a0,g,f,e)},
bJ(a,b){var s=null,r=new A.bI(0,6.283185307179586,0.08,a,9,0.35,B.h,A.ag(s,0,B.b,s,0),s,s,4,0,!1,0.01,!1,0.000001,4,s,s,s,B.b,$,s,$,$,$)
r.S(B.b,s,s)
r.ah(b)
return r},
hL(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=null
A.ag(a0,0,B.b,a0,0)
s=a1.fx
r=a1.fy
q=A.aR(a1.go)
p=a1.id
p=p==null?a0:A.Z(p)
o=a1.k1
o=o==null?a0:A.Z(o)
n=a1.ax
n=n==null?a0:J.o(n,new A.N(),t.G)
if(n==null)n=A.b([],t.O)
m=t.G
n=A.f(n,!0,m)
l=a1.ay
l=l==null?a0:J.o(l,new A.O(),m)
l=A.f(l==null?A.b([],t.O):l,!0,m)
k=a1.ch
k=k==null?a0:J.o(k,new A.P(),m)
m=A.f(k==null?A.b([],t.O):k,!0,m)
k=a1.w
j=a1.x
i=a1.a
i===$&&A.a("color")
i=i.j()
h=a1.b
h===$&&A.a("name")
a1.c===$&&A.a("target")
g=A.b([],t.r)
f=a1.d
f===$&&A.a("submobjects")
e=f.length
d=0
for(;d<f.length;f.length===e||(0,A.c)(f),++d)g.push(f[d].j())
f=a1.f
f===$&&A.a("updatingSuspended")
e=A.b([],t.l)
c=a1.r
c===$&&A.a("points")
b=c.length
d=0
for(;d<c.length;c.length===b||(0,A.c)(c),++d){a=c[d]
e.push(new A.d(a.a,a.b,a.c))}return new A.bI(a1.y2,a1.I,a1.J,a1.K,a1.av,s,new A.d(r.a,r.b,r.c),q,p,o,k,j,!0,a1.z,!1,a1.as,a1.at,n,l,m,i,h,a0,g,f,e)},
ju(a,b,c,d,e){var s=null,r=new A.S(a,d,e,c,0.35,B.h,A.ag(s,0,B.b,s,0),s,s,4,0,!1,0.01,!1,0.000001,4,s,s,s,B.b,$,s,$,$,$)
r.S(B.b,s,s)
r.ah(b)
return r},
jv(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=null,a1=a3.J,a2=a3.K
A.ag(a0,0,B.b,a0,0)
s=a3.fx
r=a3.fy
q=A.aR(a3.go)
p=a3.id
p=p==null?a0:A.Z(p)
o=a3.k1
o=o==null?a0:A.Z(o)
n=a3.ax
n=n==null?a0:J.o(n,new A.N(),t.G)
if(n==null)n=A.b([],t.O)
m=t.G
n=A.f(n,!0,m)
l=a3.ay
l=l==null?a0:J.o(l,new A.O(),m)
l=A.f(l==null?A.b([],t.O):l,!0,m)
k=a3.ch
k=k==null?a0:J.o(k,new A.P(),m)
m=A.f(k==null?A.b([],t.O):k,!0,m)
k=a3.w
j=a3.x
i=a3.a
i===$&&A.a("color")
i=i.j()
h=a3.b
h===$&&A.a("name")
a3.c===$&&A.a("target")
g=A.b([],t.r)
f=a3.d
f===$&&A.a("submobjects")
e=f.length
d=0
for(;d<f.length;f.length===e||(0,A.c)(f),++d)g.push(f[d].j())
f=a3.f
f===$&&A.a("updatingSuspended")
e=A.b([],t.l)
c=a3.r
c===$&&A.a("points")
b=c.length
d=0
for(;d<c.length;c.length===b||(0,A.c)(c),++d){a=c[d]
e.push(new A.d(a.a,a.b,a.c))}return new A.S(a3.y2,a3.I,a1,a2,s,new A.d(r.a,r.b,r.c),q,p,o,k,j,a3.y,a3.z,!1,a3.as,a3.at,n,l,m,i,h,a0,g,f,e)},
hK(a,b,c){var s,r,q,p=null,o=new A.bF(0.05,p,0.5,0,p,c,b,0.35,B.h,A.ag(p,0,B.b,p,0),p,p,4,0,!1,0.01,!1,0.000001,4,p,p,p,B.b,$,p,$,$,$)
o.S(B.b,p,p)
o.ah(a)
s=o.dk()
r=new A.bG(4,0,!1,0.01,!1,0.000001,4,p,p,p,B.b,$,p,$,$,$)
r.S(B.b,p,p)
r.e_(o,B.b,s,0.5)
o.sW(t.y.a(A.b([],t.l)))
q=r.d
q===$&&A.a("submobjects")
o.U(t.a.a(q))
return o},
jg(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=null,a1=a3.J,a2=a3.K
A.ag(a0,0,B.b,a0,0)
s=a3.fx
r=a3.fy
q=A.aR(a3.go)
p=a3.id
p=p==null?a0:A.Z(p)
o=a3.k1
o=o==null?a0:A.Z(o)
n=a3.ax
n=n==null?a0:J.o(n,new A.N(),t.G)
if(n==null)n=A.b([],t.O)
m=t.G
n=A.f(n,!0,m)
l=a3.ay
l=l==null?a0:J.o(l,new A.O(),m)
l=A.f(l==null?A.b([],t.O):l,!0,m)
k=a3.ch
k=k==null?a0:J.o(k,new A.P(),m)
m=A.f(k==null?A.b([],t.O):k,!0,m)
k=a3.w
j=a3.x
i=a3.a
i===$&&A.a("color")
i=i.j()
h=a3.b
h===$&&A.a("name")
a3.c===$&&A.a("target")
g=A.b([],t.r)
f=a3.d
f===$&&A.a("submobjects")
e=f.length
d=0
for(;d<f.length;f.length===e||(0,A.c)(f),++d)g.push(f[d].j())
f=a3.f
f===$&&A.a("updatingSuspended")
e=A.b([],t.l)
c=a3.r
c===$&&A.a("points")
b=c.length
d=0
for(;d<c.length;c.length===b||(0,A.c)(c),++d){a=c[d]
e.push(new A.d(a.a,a.b,a.c))}return new A.bF(a3.am,a3.a1,a3.b1,a3.y2,a3.I,a1,a2,s,new A.d(r.a,r.b,r.c),q,p,o,k,j,a3.y,a3.z,!1,a3.as,a3.at,n,l,m,i,h,a0,g,f,e)},
i2(a,b,c,d){var s=null,r=new A.ce(0,s,a.aO(Math.min(1,Math.max(b-0.000001,0))),a.aO(Math.min(1,Math.max(b+0.000001,0))),0.35,B.h,A.ag(s,0,B.b,s,0),s,s,4,0,!1,0.01,!1,0.000001,4,s,s,s,B.b,$,s,$,$,$)
r.S(B.b,s,s)
r.ah(c)
r.bc(d/Math.sqrt(r.O().t(0,r.L()).X()))
return r},
jO(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=null,a1=a3.J,a2=a3.K
A.ag(a0,0,B.b,a0,0)
s=a3.fx
r=a3.fy
q=A.aR(a3.go)
p=a3.id
p=p==null?a0:A.Z(p)
o=a3.k1
o=o==null?a0:A.Z(o)
n=a3.ax
n=n==null?a0:J.o(n,new A.N(),t.G)
if(n==null)n=A.b([],t.O)
m=t.G
n=A.f(n,!0,m)
l=a3.ay
l=l==null?a0:J.o(l,new A.O(),m)
l=A.f(l==null?A.b([],t.O):l,!0,m)
k=a3.ch
k=k==null?a0:J.o(k,new A.P(),m)
m=A.f(k==null?A.b([],t.O):k,!0,m)
k=a3.w
j=a3.x
i=a3.a
i===$&&A.a("color")
i=i.j()
h=a3.b
h===$&&A.a("name")
a3.c===$&&A.a("target")
g=A.b([],t.r)
f=a3.d
f===$&&A.a("submobjects")
e=f.length
d=0
for(;d<f.length;f.length===e||(0,A.c)(f),++d)g.push(f[d].j())
f=a3.f
f===$&&A.a("updatingSuspended")
e=A.b([],t.l)
c=a3.r
c===$&&A.a("points")
b=c.length
d=0
for(;d<c.length;c.length===b||(0,A.c)(c),++d){a=c[d]
e.push(new A.d(a.a,a.b,a.c))}return new A.ce(a3.y2,a3.I,a1,a2,s,new A.d(r.a,r.b,r.c),q,p,o,k,j,a3.y,a3.z,!1,a3.as,a3.at,n,l,m,i,h,a0,g,f,e)},
jD(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.ax
e=e==null?f:J.o(e,new A.N(),t.G)
if(e==null)e=A.b([],t.O)
s=t.G
e=A.f(e,!0,s)
r=a.ay
r=r==null?f:J.o(r,new A.O(),s)
r=A.f(r==null?A.b([],t.O):r,!0,s)
q=a.ch
q=q==null?f:J.o(q,new A.P(),s)
s=A.f(q==null?A.b([],t.O):q,!0,s)
q=a.gM()
p=a.x
o=a.a
o===$&&A.a("color")
o=o.j()
n=a.b
n===$&&A.a("name")
a.c===$&&A.a("target")
m=A.b([],t.r)
l=a.d
l===$&&A.a("submobjects")
k=l.length
j=0
for(;j<l.length;l.length===k||(0,A.c)(l),++j)m.push(l[j].j())
l=a.f
l===$&&A.a("updatingSuspended")
k=A.b([],t.l)
i=a.r
i===$&&A.a("points")
h=i.length
j=0
for(;j<i.length;i.length===h||(0,A.c)(i),++j){g=i[j]
k.push(new A.d(g.a,g.b,g.c))}return new A.c4(q,p,a.y,a.z,!1,a.as,a.at,e,r,s,o,n,f,m,l,k)},
jJ(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.ax
e=e==null?f:J.o(e,new A.N(),t.G)
if(e==null)e=A.b([],t.O)
s=t.G
e=A.f(e,!0,s)
r=a.ay
r=r==null?f:J.o(r,new A.O(),s)
r=A.f(r==null?A.b([],t.O):r,!0,s)
q=a.ch
q=q==null?f:J.o(q,new A.P(),s)
s=A.f(q==null?A.b([],t.O):q,!0,s)
q=a.gM()
p=a.x
o=a.a
o===$&&A.a("color")
o=o.j()
n=a.b
n===$&&A.a("name")
a.c===$&&A.a("target")
m=A.b([],t.r)
l=a.d
l===$&&A.a("submobjects")
k=l.length
j=0
for(;j<l.length;l.length===k||(0,A.c)(l),++j)m.push(l[j].j())
l=a.f
l===$&&A.a("updatingSuspended")
k=A.b([],t.l)
i=a.r
i===$&&A.a("points")
h=i.length
j=0
for(;j<i.length;i.length===h||(0,A.c)(i),++j){g=i[j]
k.push(new A.d(g.a,g.b,g.c))}return new A.c6(q,p,a.y,a.z,!1,a.as,a.at,e,r,s,o,n,f,m,l,k)},
jQ(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.ax
e=e==null?f:J.o(e,new A.N(),t.G)
if(e==null)e=A.b([],t.O)
s=t.G
e=A.f(e,!0,s)
r=a.ay
r=r==null?f:J.o(r,new A.O(),s)
r=A.f(r==null?A.b([],t.O):r,!0,s)
q=a.ch
q=q==null?f:J.o(q,new A.P(),s)
s=A.f(q==null?A.b([],t.O):q,!0,s)
q=a.gM()
p=a.x
o=a.a
o===$&&A.a("color")
o=o.j()
n=a.b
n===$&&A.a("name")
a.c===$&&A.a("target")
m=A.b([],t.r)
l=a.d
l===$&&A.a("submobjects")
k=l.length
j=0
for(;j<l.length;l.length===k||(0,A.c)(l),++j)m.push(l[j].j())
l=a.f
l===$&&A.a("updatingSuspended")
k=A.b([],t.l)
i=a.r
i===$&&A.a("points")
h=i.length
j=0
for(;j<i.length;i.length===h||(0,A.c)(i),++j){g=i[j]
k.push(new A.d(g.a,g.b,g.c))}return new A.cg(q,p,a.y,a.z,!1,a.as,a.at,e,r,s,o,n,f,m,l,k)},
Z(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.ax
e=e==null?f:J.o(e,new A.N(),t.G)
if(e==null)e=A.b([],t.O)
s=t.G
e=A.f(e,!0,s)
r=a.ay
r=r==null?f:J.o(r,new A.O(),s)
r=A.f(r==null?A.b([],t.O):r,!0,s)
q=a.ch
q=q==null?f:J.o(q,new A.P(),s)
s=A.f(q==null?A.b([],t.O):q,!0,s)
q=a.b2
p=a.x
o=a.a
o===$&&A.a("color")
o=o.j()
n=a.b
n===$&&A.a("name")
a.c===$&&A.a("target")
m=A.b([],t.r)
l=a.d
l===$&&A.a("submobjects")
k=l.length
j=0
for(;j<l.length;l.length===k||(0,A.c)(l),++j)m.push(l[j].j())
l=a.f
l===$&&A.a("updatingSuspended")
k=A.b([],t.l)
i=a.r
i===$&&A.a("points")
h=i.length
j=0
for(;j<i.length;i.length===h||(0,A.c)(i),++j){g=i[j]
k.push(new A.d(g.a,g.b,g.c))}return new A.by(q,p,a.y,a.z,!1,a.as,a.at,e,r,s,o,n,f,m,l,k)},
cf:function cf(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dk:function dk(a){this.b=a},
bh:function bh(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1){var _=this
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
bw:function bw(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6){var _=this
_.y2=a
_.I=b
_.J=c
_.K=d
_.av=e
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
bE:function bE(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6){var _=this
_.y2=a
_.I=b
_.J=c
_.K=d
_.av=e
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
bI:function bI(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6){var _=this
_.y2=a
_.I=b
_.J=c
_.K=d
_.av=e
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
S:function S(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5){var _=this
_.y2=a
_.I=b
_.J=c
_.K=d
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
bF:function bF(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8){var _=this
_.am=a
_.a1=b
_.b1=c
_.y2=d
_.I=e
_.J=f
_.K=g
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
ce:function ce(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5){var _=this
_.y2=a
_.I=b
_.J=c
_.K=d
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
c4:function c4(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
c6:function c6(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cg:function cg(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
by:function by(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.b2=0
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
ji(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=a.ay
f===$&&A.a("draggedListener")
s=a.ch
s===$&&A.a("pressedListener")
r=a.CW
r===$&&A.a("releasedListener")
q=a.cx
p=A.hL(a.w)
o=a.a
o===$&&A.a("color")
o=o.j()
n=a.b
n===$&&A.a("name")
a.c===$&&A.a("target")
m=A.b([],t.r)
l=a.d
l===$&&A.a("submobjects")
k=l.length
j=0
for(;j<l.length;l.length===k||(0,A.c)(l),++j)m.push(l[j].j())
l=a.f
l===$&&A.a("updatingSuspended")
k=A.b([],t.l)
i=a.r
i===$&&A.a("points")
h=i.length
j=0
for(;j<i.length;i.length===h||(0,A.c)(i),++j){g=i[j]
k.push(new A.d(g.a,g.b,g.c))}return new A.bK(f,s,r,q,p,o,n,null,m,l,k)},
d2:function d2(){},
bK:function bK(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
e8:function e8(a){this.a=a},
e9:function e9(a){this.a=a},
ea:function ea(a){this.a=a},
jA(a){var s,r,q,p,o,n,m,l,k=a.a
k===$&&A.a("color")
k=k.j()
s=a.b
s===$&&A.a("name")
a.c===$&&A.a("target")
r=A.b([],t.r)
q=a.d
q===$&&A.a("submobjects")
p=q.length
o=0
for(;o<q.length;q.length===p||(0,A.c)(q),++o)r.push(q[o].j())
q=a.f
q===$&&A.a("updatingSuspended")
p=A.b([],t.l)
n=a.r
n===$&&A.a("points")
m=n.length
o=0
for(;o<n.length;n.length===m||(0,A.c)(n),++o){l=n[o]
p.push(new A.d(l.a,l.b,l.c))}return new A.p(k,s,null,r,q,p)},
hN(a){var s=new A.bQ(B.b,$,null,$,$,$)
s.S(B.b,null,null)
s.U(t.a.a(a))
return s},
jn(a){var s,r,q,p,o,n,m,l,k=a.a
k===$&&A.a("color")
k=k.j()
s=a.b
s===$&&A.a("name")
a.c===$&&A.a("target")
r=A.b([],t.r)
q=a.d
q===$&&A.a("submobjects")
p=q.length
o=0
for(;o<q.length;q.length===p||(0,A.c)(q),++o)r.push(q[o].j())
q=a.f
q===$&&A.a("updatingSuspended")
p=A.b([],t.l)
n=a.r
n===$&&A.a("points")
m=n.length
o=0
for(;o<n.length;n.length===m||(0,A.c)(n),++o){l=n[o]
p.push(new A.d(l.a,l.b,l.c))}return new A.bQ(k,s,null,r,q,p)},
p:function p(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=$
_.f=e
_.r=f},
ev:function ev(a){this.a=a},
eu:function eu(a){this.a=a},
et:function et(a){this.a=a},
ew:function ew(a,b){this.a=a
this.b=b},
er:function er(){},
es:function es(a){this.a=a},
bQ:function bQ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=$
_.f=e
_.r=f},
jS(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a.ax
d=d==null?e:J.o(d,new A.N(),t.G)
if(d==null)d=A.b([],t.O)
s=t.G
d=A.f(d,!0,s)
r=a.ay
r=r==null?e:J.o(r,new A.O(),s)
r=A.f(r==null?A.b([],t.O):r,!0,s)
q=a.ch
q=q==null?e:J.o(q,new A.P(),s)
s=A.f(q==null?A.b([],t.O):q,!0,s)
q=a.gM()
p=a.x
o=a.gaY()
n=a.a
n===$&&A.a("color")
n=n.j()
m=a.b
m===$&&A.a("name")
a.c===$&&A.a("target")
l=A.b([],t.r)
k=a.d
k===$&&A.a("submobjects")
j=k.length
i=0
for(;i<k.length;k.length===j||(0,A.c)(k),++i)l.push(k[i].j())
k=a.f
k===$&&A.a("updatingSuspended")
j=A.b([],t.l)
h=a.r
h===$&&A.a("points")
g=h.length
i=0
for(;i<h.length;h.length===g||(0,A.c)(h),++i){f=h[i]
j.push(new A.d(f.a,f.b,f.c))}return new A.x(q,p,o,a.z,!1,a.as,a.at,d,r,s,n,m,e,l,k,j)},
i5(a){var s=null,r=new A.aT(4,0,!1,0.01,!1,0.000001,4,s,s,s,B.b,$,s,$,$,$)
r.S(B.b,s,s)
r.cb(a)
return r},
jR(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.ax
e=e==null?f:J.o(e,new A.N(),t.G)
if(e==null)e=A.b([],t.O)
s=t.G
e=A.f(e,!0,s)
r=a.ay
r=r==null?f:J.o(r,new A.O(),s)
r=A.f(r==null?A.b([],t.O):r,!0,s)
q=a.ch
q=q==null?f:J.o(q,new A.P(),s)
s=A.f(q==null?A.b([],t.O):q,!0,s)
q=a.w
p=a.x
o=a.a
o===$&&A.a("color")
o=o.j()
n=a.b
n===$&&A.a("name")
a.c===$&&A.a("target")
m=A.b([],t.r)
l=a.d
l===$&&A.a("submobjects")
k=l.length
j=0
for(;j<l.length;l.length===k||(0,A.c)(l),++j)m.push(l[j].j())
l=a.f
l===$&&A.a("updatingSuspended")
k=A.b([],t.l)
i=a.r
i===$&&A.a("points")
h=i.length
j=0
for(;j<i.length;i.length===h||(0,A.c)(i),++j){g=i[j]
k.push(new A.d(g.a,g.b,g.c))}return new A.aT(q,p,a.y,a.z,!1,a.as,a.at,e,r,s,o,n,f,m,l,k)},
jT(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.ax
e=e==null?f:J.o(e,new A.N(),t.G)
if(e==null)e=A.b([],t.O)
s=t.G
e=A.f(e,!0,s)
r=a.ay
r=r==null?f:J.o(r,new A.O(),s)
r=A.f(r==null?A.b([],t.O):r,!0,s)
q=a.ch
q=q==null?f:J.o(q,new A.P(),s)
s=A.f(q==null?A.b([],t.O):q,!0,s)
q=a.w
p=a.x
o=a.a
o===$&&A.a("color")
o=o.j()
n=a.b
n===$&&A.a("name")
a.c===$&&A.a("target")
m=A.b([],t.r)
l=a.d
l===$&&A.a("submobjects")
k=l.length
j=0
for(;j<l.length;l.length===k||(0,A.c)(l),++j)m.push(l[j].j())
l=a.f
l===$&&A.a("updatingSuspended")
k=A.b([],t.l)
i=a.r
i===$&&A.a("points")
h=i.length
j=0
for(;j<i.length;i.length===h||(0,A.c)(i),++j){g=i[j]
k.push(new A.d(g.a,g.b,g.c))}return new A.ci(a.fx,a.fy,q,p,a.y,a.z,!1,a.as,a.at,e,r,s,o,n,f,m,l,k)},
jh(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.ax
e=e==null?f:J.o(e,new A.N(),t.G)
if(e==null)e=A.b([],t.O)
s=t.G
e=A.f(e,!0,s)
r=a.ay
r=r==null?f:J.o(r,new A.O(),s)
r=A.f(r==null?A.b([],t.O):r,!0,s)
q=a.ch
q=q==null?f:J.o(q,new A.P(),s)
s=A.f(q==null?A.b([],t.O):q,!0,s)
q=a.w
p=a.x
o=a.a
o===$&&A.a("color")
o=o.j()
n=a.b
n===$&&A.a("name")
a.c===$&&A.a("target")
m=A.b([],t.r)
l=a.d
l===$&&A.a("submobjects")
k=l.length
j=0
for(;j<l.length;l.length===k||(0,A.c)(l),++j)m.push(l[j].j())
l=a.f
l===$&&A.a("updatingSuspended")
k=A.b([],t.l)
i=a.r
i===$&&A.a("points")
h=i.length
j=0
for(;j<i.length;i.length===h||(0,A.c)(i),++j){g=i[j]
k.push(new A.d(g.a,g.b,g.c))}return new A.bG(q,p,a.y,a.z,!1,a.as,a.at,e,r,s,o,n,f,m,l,k)},
x:function x(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
N:function N(){},
O:function O(){},
P:function P(){},
eU:function eU(){},
eV:function eV(){},
eP:function eP(a,b){this.a=a
this.b=b},
eR:function eR(a,b){this.a=a
this.b=b},
eQ:function eQ(a,b){this.a=a
this.b=b},
eL:function eL(a,b){this.a=a
this.b=b},
eO:function eO(a){this.a=a},
eM:function eM(){},
eN:function eN(){},
eT:function eT(){},
eS:function eS(){},
ch:function ch(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
aT:function aT(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ci:function ci(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
bG:function bG(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
bv:function bv(){},
j8(){return new A.cU($.bt())},
cU:function cU(a){this.e=$
this.b=a
this.d=$},
e5:function e5(){},
eE:function eE(){},
eF:function eF(a){this.a=a},
u(a,b,c){var s,r=A.b([],t.t)
if(c>0)for(s=b;s<a;s+=c)B.a.u(r,s)
else for(s=b;s>a;s+=c)B.a.u(r,s)
return r},
fE(a,b){var s,r,q,p=J.hp(a)
if(p.gT(a))return A.b([],b.h("t<y<r,0>>"))
s=A.b([],b.h("t<y<r,0>>"))
for(r=t.dq.C(b).h("y<1,2>"),q=0;q<p.gl(a);++q)B.a.u(s,new A.y(q,p.i(a,q),r))
return s},
hw(a,b){if(a.length===0)return b.a(0)
return B.a.Y(a,new A.fT(b))},
dH(a,b,c){var s,r,q,p,o,n,m,l=A.b([],t.b)
for(s=A.u(a,0,1),r=s.length,q=a-1,p=t.n,o=0;o<s.length;s.length===r||(0,A.c)(s),++o){n=s[o]
if(typeof n!=="number")return n.a3()
m=n/q
l.push(A.b([c*(1-m)+b*m],p))}return A.X(null,l)},
hk(a,b,c){var s,r,q,p,o=A.u(B.d.bt((a-b)/c),0,1),n=A.b([],t.b)
for(s=o.length,r=t.n,q=0;q<o.length;o.length===s||(0,A.c)(o),++q){p=o[q]
if(typeof p!=="number")return p.q()
n.push(A.b([p*c+b],r))}return A.X(null,n)},
b9(a,b,c){var s,r,q,p,o,n,m=J.hp(a)
if(m.gT(a))return a
s=m.gl(a)
if(s>b)throw A.e("Trying to stretch an array to a length shorter than its own")
r=A.u(b,0,1)
q=A.w(r)
p=q.h("K<1,l>")
o=new A.K(r,q.h("l(1)").a(new A.fS(b,s)),p)
q=A.b([],c.h("t<0>"))
for(r=new A.a4(o,o.gl(o),p.h("a4<C.E>")),p=p.h("C.E");r.m();){n=r.d
q.push(m.i(a,B.d.aa(n==null?p.a(n):n)))}return q},
l1(a,b,c,d){var s,r,q,p,o,n,m,l=Math.max(a.length,b.length),k=A.b([],c.h("t<0>"))
for(s=A.u(l,0,1),r=s.length,q=0;q<s.length;s.length===r||(0,A.c)(s),++q){p=s[q]
o=a.length
if(typeof p!=="number")return p.q()
n=B.d.ad(p*o,l)
if(!(n>=0&&n<o))return A.k(a,n)
k.push(a[n])}s=A.b([],d.h("t<0>"))
for(r=A.u(l,0,1),o=r.length,q=0;q<r.length;r.length===o||(0,A.c)(r),++q){p=r[q]
n=b.length
if(typeof p!=="number")return p.q()
m=B.d.ad(p*n,l)
if(!(m>=0&&m<n))return A.k(b,m)
s.push(b[m])}return new A.y(k,s,c.h("@<m<0>>").C(d.h("m<0>")).h("y<1,2>"))},
fU(a,b){var s=A.ei(a,new A.fV(b),b)
return A.f(s,!0,s.$ti.h("n.E"))},
iM(a,b){var s=A.f(a,!0,b)
if(0>=s.length)return A.k(s,-1)
s.pop()
return s},
le(a,b){var s,r,q,p=A.b([],b.h("t<0>")),o=A.jx(b)
for(s=A.w(a).h("az<1>"),r=new A.az(a,s),r=new A.a4(r,r.gl(r),s.h("a4<C.E>")),s=s.h("C.E");r.m();){q=r.d
if(q==null)q=s.a(q)
if(!o.aj(0,q)){B.a.u(p,q)
o.u(0,q)}}s=b.h("az<0>")
return A.f(new A.az(p,s),!0,s.h("C.E"))},
fT:function fT(a){this.a=a},
fS:function fS(a,b){this.a=a
this.b=b},
fV:function fV(a){this.a=a},
hu(a,b,c){var s,r,q=t.p
q=A.fJ(A.X(null,J.o(a,new A.fK(),q).R(0)),A.X(null,J.o(b,new A.fL(),q).R(0)),c,t.A).a
q===$&&A.a("values")
s=A.w(q)
r=s.h("K<1,v>")
return A.f(new A.K(q,s.h("v(1)").a(new A.fM()),r),!0,r.h("C.E"))},
fJ(a,b,c,d){return d.a(J.fX(J.cM(a,1-c),J.cM(b,c)))},
iD(a,b,c,d){return d.a(J.fX(J.cM(a,1-c),J.cM(b,c)))},
ht(a,b,c){if(c>=1)return new A.y(b-1,1,t.d)
if(c<=0)return new A.y(a,0,t.d)
return new A.y(J.j2(A.fJ(a,b,c,t.V)),B.d.a8((b-a)*c,1),t.d)},
hl(a){return new A.fy(a,a.length-1)},
fP(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(b===1){s=A.b([],t.l)
for(r=a.a,q=J.aa(r),p=A.u(q.gl(r),0,1),o=p.length,n=a.$ti.z[1],m=0;m<p.length;p.length===o||(0,A.c)(p),++m){if(q.gl(r)===0)A.I(A.a3())
s.push(n.a(q.i(r,q.gl(r)-1)))}return s}s=t.l
r=A.b([],s)
for(q=a.a,p=J.aa(q),o=A.u(p.gl(q),0,1),n=o.length,l=a.$ti,k=l.h("ae.E"),l=l.h("aq<ae.E>"),m=0;m<o.length;o.length===n||(0,A.c)(o),++m){j=A.Y(o[m])
i=new A.aq(a,j,null,l)
i.bh(a,j,null,k)
r.push(A.hl(i.R(0)).$1(b))}h=(c-b)/(1-b)
s=A.b([],s)
for(q=A.u(p.gl(q),0,1),p=q.length,o=t.i,n=t.e3,m=0;m<q.length;q.length===p||(0,A.c)(q),++m){g=q[m]
if(typeof g!=="number")return g.B()
l=A.Y(g+1)
A.bf(0,l,r.length)
k=new A.aq(r,0,l,n)
k.bh(r,0,l,o)
s.push(A.hl(k.R(0)).$1(h))}return s},
fK:function fK(){},
fL:function fL(){},
fM:function fM(){},
fy:function fy(a,b){this.a=a
this.b=b},
fx:function fx(){},
ki(a){var s,r,q,p,o,n,m,l,k,j,i
if(B.i.dM(a,"#")){A.hW(0,0,a.length,"startIndex")
a=A.l8(a,"#","",0)}s=a.length
if(!B.a.aj(A.b([3,4,6,8],t.t),s))throw A.e("Hex string #"+a+" not well formated")
if(s===3||s===4){s=t.s
r=A.b([],s)
for(q=a.split(""),p=q.length,o=0;o<p;++o){n=q[o]
B.a.A(r,A.b([n,n],s))}a=B.a.bD(r,"")}if(a.length===6)a+="ff"
m=new A.fs()
l=B.i.aE(a,0,2)
k=B.i.aE(a,2,4)
j=B.i.aE(a,4,6)
i=B.i.aE(a,6,8)
return new A.v(m.$1(l),m.$1(k),m.$1(j),m.$1(i))},
v:function v(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fs:function fs(){},
bb:function bb(a,b){this.a=a
this.b=b},
h6(a){switch(a){case 0:break
case 1:break
case 2:break
default:break}return new A.ex(a)},
am:function am(a){this.b=a},
ac:function ac(){},
eb:function eb(){this.a=$},
ad:function ad(a,b,c){this.a=a
this.b=b
this.$ti=c},
d8:function d8(){},
c1:function c1(a,b){this.c=a
this.a=b},
aM:function aM(a,b){this.c=a
this.a=b},
aN:function aN(a,b){this.c=a
this.a=b},
aL:function aL(a,b){this.c=a
this.a=b},
ex:function ex(a){this.a=a},
ix(a,b,c){var s,r
if(c){if(!$.dF.cK(a)){s=t.S
$.dF.n(0,a,A.h4(s,s))}if(!$.dF.i(0,a).cK(b)){s=$.dF.i(0,a)
s.toString
s.n(0,b,A.ix(a,b,!1))}s=$.dF.i(0,a).i(0,b)
s.toString
return s}if(a<b)return 0
if(b===0)return 1
s=t.S
r=B.a.bB(A.u(b+1,1,1),1,new A.fA(),s)
return B.e.ad(B.a.bB(A.u(a-b,a,-1),1,new A.fB(),s),r)},
dI(a,b,c,d,e){return(a-b)/(c-b)*(e-d)+d},
fA:function fA(){},
fB:function fB(){},
X(a,b){var s,r,q=new A.al(b)
if(a==null){s=b.length
r=s!==0?J.B(B.a.gD(b)):0
a=new A.y(s,r,t.o)
s=a}else s=a
q.se6(t.o.a(s))
return q},
b_(a,b){var s,r,q,p,o,n,m,l,k=b.b,j=A.b([],t.b)
for(s=A.u(b.a,0,1),r=s.length,q=t.n,p=0;p<s.length;s.length===r||(0,A.c)(s),++p){o=A.b([],q)
for(n=A.u(k,0,1),m=n.length,l=0;l<n.length;n.length===m||(0,A.c)(n),++l)o.push(a)
j.push(o)}return A.X(b,j)},
hD(a){var s,r,q,p,o,n=A.b([],t.b)
for(s=a.length,r=t.n,q=0;p=a.length,q<p;a.length===s||(0,A.c)(a),++q){o=a[q]
n.push(A.b([o.a,o.b,o.c],r))}return A.X(new A.y(p,3,t.o),n)},
fY(a){var s,r,q,p,o,n,m,l,k,j,i=A.b([],t.b)
for(s=A.u(a,0,1),r=s.length,q=t.n,p=0;p<s.length;s.length===r||(0,A.c)(s),++p){o=s[p]
n=A.b([],q)
for(m=A.u(a,0,1),l=m.length,k=J.aG(o),j=0;j<m.length;m.length===l||(0,A.c)(m),++j)if(k.E(o,m[j]))n.push(1)
else n.push(0)
i.push(n)}return A.X(new A.y(a,a,t.o),i)},
l6(a,b){var s=A.iK(a),r=A.lf(b)
return B.a.Y(A.b([r,s,r.dn()],t.aM),new A.fR())},
iK(a){var s=t.n
return A.X(null,A.b([A.b([Math.cos(a),-Math.sin(a),0],s),A.b([Math.sin(a),Math.cos(a),0],s),A.b([0,0,1],s)],t.b))},
lf(a){var s,r,q,p,o,n
if(a.X()===0)return A.fY(3)
s=a.a3(0,Math.sqrt(a.X()))
r=Math.acos(s.c)
if(s.a!==0||s.b!==0){q=s.dg(0)
p=q.a3(0,Math.sqrt(q.X()))
o=Math.acos(p.a)
if(p.b<0)o*=-1}else o=0
q=t.n
n=A.X(null,A.b([A.b([Math.cos(r),0,Math.sin(r)],q),A.b([0,1,0],q),A.b([-Math.sin(r),0,Math.cos(r)],q)],t.b))
return A.iK(o).az(n)},
l4(a,b){var s,r,q,p,o=a/2,n=b.a3(0,Math.sqrt(b.X())).q(0,Math.sin(o)),m=A.b([],t.b)
for(s=[n.a,n.b,n.c],r=s.length,q=t.n,p=0;p<r;++p)m.push(A.b([s[p]],q))
m.push(A.b([Math.cos(o)],q))
return A.X(null,m)},
kO(a,b){var s,r,q,p,o,n,m,l,k,j=6.283185307179586/a,i=t.bN,h=A.b([],i)
for(s=A.u(a,0,1),r=s.length,q=0;q<s.length;s.length===r||(0,A.c)(s),++q){p=s[q]
if(typeof p!=="number")return A.cJ(p)
o=j*p
h.push(new A.bb(Math.cos(o),Math.sin(o)))}i=A.b([],i)
for(s=h.length,r=b.a,o=b.b,q=0;q<h.length;h.length===s||(0,A.c)(h),++q){n=h[q]
m=n.a
l=n.b
i.push(new A.bb(m*r-l*o,m*o+l*r))}h=A.b([],t.l)
for(s=i.length,q=0;q<i.length;i.length===s||(0,A.c)(i),++q){k=i[q]
h.push(new A.d(k.a,k.b,0))}return h},
al:function al(a){this.a=a
this.b=$},
dV:function dV(a){this.a=a},
dY:function dY(a){this.a=a},
dX:function dX(a){this.a=a},
dW:function dW(a){this.a=a},
dU:function dU(a){this.a=a},
dT:function dT(a,b){this.a=a
this.b=b},
dS:function dS(a){this.a=a},
dZ:function dZ(a){this.a=a},
dR:function dR(){},
dQ:function dQ(a){this.a=a},
fR:function fR(){},
d:function d(a,b,c){this.a=a
this.b=b
this.c=c},
eW:function eW(a){this.a=a},
y:function y(a,b,c){this.a=a
this.b=b
this.$ti=c},
bi:function bi(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
l_(){var s,r,q,p,o="renderer",n=document,m=n.getElementById("canvas-container")
m.toString
s=A.b([],t.db)
r=A.h6(0)
n=n.createElement("canvas")
t.gA.a(n)
q=new A.cT(n,m,s,B.c,B.c,r,B.c,B.c)
q.a=A.j8()
m.appendChild(n).toString
p=new A.em()
p.e3()
p.w=q
n=p.f
n===$&&A.a("camera")
q.cH(n)
n=p.f
m=p.w
n.r=m
m.cH(n)
m=n.r
s=m.a
s===$&&A.a(o)
s.dP(m)
m=m.d.getContext("2d")
m.toString
s.e=m
m=n.c
s=n.d=m/1.7777777777777777
r=n.r.a
r===$&&A.a(o)
r=r.e
r===$&&A.a("ctx")
r.setTransform(1280/m,0,0,-720/s,640-0/m,360-0/s)
s=n.r.a
s===$&&A.a(o)
s.bI(n.f)
p.aA()},
em:function em(){var _=this
_.CW=_.ch=_.ay=_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=$
_.a=0
_.w=_.f=_.d=$},
en:function en(){},
eo:function eo(){},
eq:function eq(a){this.a=a},
ep:function ep(a){this.a=a},
l3(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
a(a){return A.I(A.jt(a))},
lb(a){return A.I(new A.bX("Field '"+a+"' has been assigned during initialization."))},
hO(a,b){return A.jq(a,b,b)},
jq(a,b,c){return A.iq(function(){var s=a,r=b
var q=0,p=1,o,n,m
return function $async$hO(d,e){if(d===1){o=e
q=p}while(true)switch(q){case 0:n=s.length,m=0
case 2:if(!(m<s.length)){q=4
break}q=5
return A.jY(s[m])
case 5:case 3:s.length===n||(0,A.c)(s),++m
q=2
break
case 4:return A.i8()
case 1:return A.i9(o)}}},c)},
ei(a,b,c){return A.jy(a,b,c,c)},
jy(a,b,c,d){return A.iq(function(){var s=a,r=b,q=c
var p=0,o=1,n,m,l,k
return function $async$ei(e,f){if(e===1){n=f
p=o}while(true)switch(p){case 0:m=J.aa(s),l=0
case 2:if(!(l<m.gl(s))){p=4
break}k=m.i(s,l)
p=A.bq(r.$2(l,k))?5:6
break
case 5:p=7
return k
case 7:case 6:case 3:++l
p=2
break
case 4:return A.i8()
case 1:return A.i9(n)}}},d)}},J={
hv(a,b,c,d){return{i:a,p:b,e:c,x:d}},
hq(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.hs==null){A.kT()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.e(A.i4("Return interceptor for "+A.q(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.fi
if(o==null)o=$.fi=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.kZ(a)
if(p!=null)return p
if(typeof a=="function")return B.X
s=Object.getPrototypeOf(a)
if(s==null)return B.J
if(s===Object.prototype)return B.J
if(typeof q=="function"){o=$.fi
if(o==null)o=$.fi=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.C,enumerable:false,writable:true,configurable:true})
return B.C}return B.C},
hP(a,b){if(a<0||a>4294967295)throw A.e(A.at(a,0,4294967295,"length",null))
return J.hR(new Array(a),b)},
hQ(a,b){if(a<0)throw A.e(A.dO("Length must be a non-negative integer: "+a,null))
return A.b(new Array(a),b.h("t<0>"))},
hR(a,b){return J.ef(A.b(a,b.h("t<0>")),b)},
ef(a,b){a.fixed$length=Array
return a},
jr(a,b){var s=t.e8
return J.j1(s.a(a),s.a(b))},
aG(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.bU.prototype
return J.d4.prototype}if(typeof a=="string")return J.ay.prototype
if(a==null)return J.bV.prototype
if(typeof a=="boolean")return J.d3.prototype
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aK.prototype
return a}if(a instanceof A.z)return a
return J.hq(a)},
R(a){if(a==null)return a
if(a.constructor==Array)return J.t.prototype
if(!(a instanceof A.z))return J.au.prototype
return a},
kP(a){if(typeof a=="number")return J.aJ.prototype
if(typeof a=="string")return J.ay.prototype
if(a==null)return a
if(a.constructor==Array)return J.t.prototype
if(!(a instanceof A.z))return J.au.prototype
return a},
hp(a){if(typeof a=="string")return J.ay.prototype
if(a==null)return a
if(a.constructor==Array)return J.t.prototype
if(!(a instanceof A.z))return J.au.prototype
return a},
aa(a){if(typeof a=="string")return J.ay.prototype
if(a==null)return a
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aK.prototype
return a}if(a instanceof A.z)return a
return J.hq(a)},
iy(a){if(typeof a=="number")return J.aJ.prototype
if(a==null)return a
if(!(a instanceof A.z))return J.au.prototype
return a},
iz(a){if(typeof a=="number")return J.aJ.prototype
if(typeof a=="string")return J.ay.prototype
if(a==null)return a
if(!(a instanceof A.z))return J.au.prototype
return a},
iA(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aK.prototype
return a}if(a instanceof A.z)return a
return J.hq(a)},
fX(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.kP(a).B(a,b)},
ab(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.aG(a).E(a,b)},
cM(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.iz(a).q(a,b)},
iY(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.iy(a).t(a,b)},
T(a,b){if(typeof b==="number")if(a.constructor==Array)if(b>>>0===b&&b<a.length)return a[b]
return J.R(a).i(a,b)},
iZ(a,b,c){return J.R(a).n(a,b,c)},
j_(a,b,c,d){return J.iA(a).ee(a,b,c,d)},
j0(a,b,c,d){return J.iA(a).eo(a,b,c,d)},
j1(a,b){return J.iz(a).cI(a,b)},
hz(a,b){return J.R(a).P(a,b)},
dJ(a){return J.R(a).gD(a)},
a8(a){return J.aG(a).gH(a)},
cN(a){return J.hp(a).gT(a)},
U(a){return J.R(a).gv(a)},
hA(a){return J.R(a).gF(a)},
B(a){return J.aa(a).gl(a)},
o(a,b,c){return J.R(a).bE(a,b,c)},
hB(a,b){return J.R(a).a_(a,b)},
j2(a){return J.iy(a).aa(a)},
dK(a){return J.R(a).R(a)},
cO(a){return J.aG(a).k(a)},
bS:function bS(){},
d3:function d3(){},
bV:function bV(){},
an:function an(){},
b2:function b2(){},
dc:function dc(){},
au:function au(){},
aK:function aK(){},
t:function t(a){this.$ti=a},
eg:function eg(a){this.$ti=a},
bx:function bx(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aJ:function aJ(){},
bU:function bU(){},
d4:function d4(){},
ay:function ay(){}},B={}
var w=[A,J,B]
var $={}
A.h2.prototype={}
J.bS.prototype={
E(a,b){return a===b},
gH(a){return A.aO(a)},
k(a){return"Instance of '"+A.eD(a)+"'"}}
J.d3.prototype={
k(a){return String(a)},
gH(a){return a?519018:218159},
$iA:1}
J.bV.prototype={
E(a,b){return null==b},
k(a){return"null"},
gH(a){return 0},
$iM:1}
J.an.prototype={}
J.b2.prototype={
gH(a){return 0},
k(a){return String(a)}}
J.dc.prototype={}
J.au.prototype={}
J.aK.prototype={
k(a){var s=a[$.iN()]
if(s==null)return this.dR(a)
return"JavaScript function for "+J.cO(s)},
$iax:1}
J.t.prototype={
u(a,b){A.w(a).c.a(b)
if(!!a.fixed$length)A.I(A.a5("add"))
a.push(b)},
f0(a,b,c){var s,r
A.w(a).h("n<1>").a(c)
if(!!a.fixed$length)A.I(A.a5("insertAll"))
A.hW(b,0,a.length,"index")
if(!t.X.b(c))c=J.dK(c)
s=J.B(c)
a.length=a.length+s
r=b+s
this.c4(a,r,a.length,a,b)
this.dC(a,b,r,c)},
f8(a,b){var s
if(!!a.fixed$length)A.I(A.a5("remove"))
for(s=0;s<a.length;++s)if(J.ab(a[s],b)){a.splice(s,1)
return!0}return!1},
cv(a,b,c){var s,r,q,p,o
A.w(a).h("A(1)").a(b)
s=[]
r=a.length
for(q=0;q<r;++q){p=a[q]
if(!A.bq(b.$1(p)))s.push(p)
if(a.length!==r)throw A.e(A.ai(a))}o=s.length
if(o===r)return
this.sl(a,o)
for(q=0;q<s.length;++q)a[q]=s[q]},
A(a,b){var s
A.w(a).h("n<1>").a(b)
if(!!a.fixed$length)A.I(A.a5("addAll"))
if(Array.isArray(b)){this.ed(a,b)
return}for(s=J.U(b);s.m();)a.push(s.gp())},
ed(a,b){var s,r
t.gn.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.e(A.ai(a))
for(r=0;r<s;++r)a.push(b[r])},
bE(a,b,c){var s=A.w(a)
return new A.K(a,s.C(c).h("1(2)").a(b),s.h("@<1>").C(c).h("K<1,2>"))},
bD(a,b){var s,r=A.hT(a.length,"",!1,t.aw)
for(s=0;s<a.length;++s)this.n(r,s,A.q(a[s]))
return r.join(b)},
f4(a){return this.bD(a,"")},
a_(a,b){return A.cd(a,b,null,A.w(a).c)},
Y(a,b){var s,r,q
A.w(a).h("1(1,1)").a(b)
s=a.length
if(s===0)throw A.e(A.a3())
if(0>=s)return A.k(a,0)
r=a[0]
for(q=1;q<s;++q){r=b.$2(r,a[q])
if(s!==a.length)throw A.e(A.ai(a))}return r},
bB(a,b,c,d){var s,r,q
d.a(b)
A.w(a).C(d).h("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.e(A.ai(a))}return r},
P(a,b){if(!(b>=0&&b<a.length))return A.k(a,b)
return a[b]},
gD(a){if(a.length>0)return a[0]
throw A.e(A.a3())},
gF(a){var s=a.length
if(s>0)return a[s-1]
throw A.e(A.a3())},
f9(a,b,c){if(!!a.fixed$length)A.I(A.a5("removeRange"))
A.bf(b,c,a.length)
a.splice(b,c-b)},
c4(a,b,c,d,e){var s,r,q,p,o
A.w(a).h("n<1>").a(d)
if(!!a.immutable$list)A.I(A.a5("setRange"))
A.bf(b,c,a.length)
s=c-b
if(s===0)return
A.ao(e,"skipCount")
if(t.aH.b(d)){r=d
q=e}else{r=J.hB(d,e).af(0,!1)
q=0}p=J.aa(r)
if(q+s>p.gl(r))throw A.e(A.jp())
if(q<b)for(o=s-1;o>=0;--o)a[b+o]=p.i(r,q+o)
else for(o=0;o<s;++o)a[b+o]=p.i(r,q+o)},
dC(a,b,c,d){return this.c4(a,b,c,d,0)},
b0(a,b){var s,r
A.w(a).h("A(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!A.bq(b.$1(a[r])))return!1
if(a.length!==s)throw A.e(A.ai(a))}return!0},
dL(a,b){var s,r=A.w(a)
r.h("r(1,1)?").a(b)
if(!!a.immutable$list)A.I(A.a5("sort"))
s=b==null?J.kq():b
A.jN(a,s,r.c)},
dK(a){return this.dL(a,null)},
eZ(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.k(a,s)
if(J.ab(a[s],b))return s}return-1},
aj(a,b){var s
for(s=0;s<a.length;++s)if(J.ab(a[s],b))return!0
return!1},
gT(a){return a.length===0},
k(a){return A.h1(a,"[","]")},
af(a,b){var s=A.b(a.slice(0),A.w(a))
return s},
R(a){return this.af(a,!0)},
gv(a){return new J.bx(a,a.length,A.w(a).h("bx<1>"))},
gH(a){return A.aO(a)},
gl(a){return a.length},
sl(a,b){if(!!a.fixed$length)A.I(A.a5("set length"))
if(b<0)throw A.e(A.at(b,0,null,"newLength",null))
if(b>a.length)A.w(a).c.a(null)
a.length=b},
i(a,b){if(!(b>=0&&b<a.length))throw A.e(A.fC(a,b))
return a[b]},
n(a,b,c){A.w(a).c.a(c)
if(!!a.immutable$list)A.I(A.a5("indexed set"))
if(!(b>=0&&b<a.length))throw A.e(A.fC(a,b))
a[b]=c},
f_(a,b){var s
A.w(a).h("A(1)").a(b)
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(A.bq(b.$1(a[s])))return s
return-1},
$iD:1,
$in:1,
$im:1}
J.eg.prototype={}
J.bx.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.e(A.c(q))
s=r.c
if(s>=p){r.scp(null)
return!1}r.scp(q[s]);++r.c
return!0},
scp(a){this.d=this.$ti.h("1?").a(a)},
$iE:1}
J.aJ.prototype={
cI(a,b){var s
A.hg(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gb4(b)
if(this.gb4(a)===s)return 0
if(this.gb4(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gb4(a){return a===0?1/a<0:a<0},
aa(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.e(A.a5(""+a+".toInt()"))},
bt(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.e(A.a5(""+a+".ceil()"))},
eW(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.e(A.a5(""+a+".floor()"))},
bN(a,b){var s
if(b>20)throw A.e(A.at(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gb4(a))return"-"+s
return s},
k(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gH(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
B(a,b){A.hg(b)
return a+b},
q(a,b){return a*b},
a8(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
ad(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cw(a,b)},
a0(a,b){return(a|0)===a?a/b|0:this.cw(a,b)},
cw(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.e(A.a5("Result of truncating division is "+A.q(s)+": "+A.q(a)+" ~/ "+b))},
es(a,b){var s
if(a>0)s=this.er(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
er(a,b){return b>31?0:a>>>b},
$iaw:1,
$il:1,
$iJ:1}
J.bU.prototype={$ir:1}
J.d4.prototype={}
J.ay.prototype={
eh(a,b){if(b>=a.length)throw A.e(A.fC(a,b))
return a.charCodeAt(b)},
B(a,b){return a+b},
dM(a,b){var s=a.length,r=b.length
if(r>s)return!1
return b===a.substring(0,r)},
aE(a,b,c){return a.substring(b,A.bf(b,c,a.length))},
cI(a,b){var s
A.cA(b)
if(a===b)s=0
else s=a<b?-1:1
return s},
k(a){return a},
gH(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gl(a){return a.length},
$iaw:1,
$ieC:1,
$iW:1}
A.aU.prototype={
gv(a){var s=A.F(this)
return new A.bD(J.U(this.gae()),s.h("@<1>").C(s.z[1]).h("bD<1,2>"))},
gl(a){return J.B(this.gae())},
gT(a){return J.cN(this.gae())},
a_(a,b){var s=A.F(this)
return A.j9(J.hB(this.gae(),b),s.c,s.z[1])},
gD(a){return A.F(this).z[1].a(J.dJ(this.gae()))},
gF(a){return A.F(this).z[1].a(J.hA(this.gae()))},
k(a){return J.cO(this.gae())}}
A.bD.prototype={
m(){return this.a.m()},
gp(){return this.$ti.z[1].a(this.a.gp())},
$iE:1}
A.b1.prototype={
gae(){return this.a}}
A.cm.prototype={$iD:1}
A.ck.prototype={
i(a,b){return this.$ti.z[1].a(J.T(this.a,b))},
n(a,b,c){var s=this.$ti
J.iZ(this.a,b,s.c.a(s.z[1].a(c)))},
$iD:1,
$im:1}
A.a0.prototype={
gae(){return this.a}}
A.bX.prototype={
k(a){return"LateInitializationError: "+this.a}}
A.fO.prototype={
$0(){var s=new A.Q($.H,t.ck)
s.cj(null)
return s},
$S:18}
A.eG.prototype={}
A.D.prototype={}
A.C.prototype={
gv(a){var s=this
return new A.a4(s,s.gl(s),A.F(s).h("a4<C.E>"))},
gT(a){return this.gl(this)===0},
gD(a){if(this.gl(this)===0)throw A.e(A.a3())
return this.P(0,0)},
gF(a){var s=this
if(s.gl(s)===0)throw A.e(A.a3())
return s.P(0,s.gl(s)-1)},
Y(a,b){var s,r,q,p=this
A.F(p).h("C.E(C.E,C.E)").a(b)
s=p.gl(p)
if(s===0)throw A.e(A.a3())
r=p.P(0,0)
for(q=1;q<s;++q){r=b.$2(r,p.P(0,q))
if(s!==p.gl(p))throw A.e(A.ai(p))}return r},
a_(a,b){return A.cd(this,b,null,A.F(this).h("C.E"))},
af(a,b){return A.f(this,b,A.F(this).h("C.E"))},
R(a){return this.af(a,!0)}}
A.aq.prototype={
bh(a,b,c,d){var s,r=this.b
A.ao(r,"start")
s=this.c
if(s!=null){A.ao(s,"end")
if(r>s)throw A.e(A.at(r,0,s,"start",null))}},
gej(){var s=J.B(this.a),r=this.c
if(r==null||r>s)return s
return r},
geu(){var s=J.B(this.a),r=this.b
if(r>s)return s
return r},
gl(a){var s,r=J.B(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
if(typeof s!=="number")return s.t()
return s-q},
P(a,b){var s=this,r=s.geu()+b
if(b<0||r>=s.gej())throw A.e(A.h0(b,s,"index",null,null))
return J.hz(s.a,r)},
a_(a,b){var s,r,q=this
A.ao(b,"count")
s=q.b+b
r=q.c
if(r!=null&&s>=r)return new A.bM(q.$ti.h("bM<1>"))
return A.cd(q.a,s,r,q.$ti.c)},
af(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.aa(n),l=m.gl(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.hQ(0,n):J.hP(0,n)}r=A.hT(s,m.P(n,o),b,p.$ti.c)
for(q=1;q<s;++q){B.a.n(r,q,m.P(n,o+q))
if(m.gl(n)<l)throw A.e(A.ai(p))}return r},
R(a){return this.af(a,!0)}}
A.a4.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=q.gl(q)
if(r.b!==p)throw A.e(A.ai(q))
s=r.c
if(s>=p){r.saG(null)
return!1}r.saG(q.P(0,s));++r.c
return!0},
saG(a){this.d=this.$ti.h("1?").a(a)},
$iE:1}
A.b3.prototype={
gv(a){var s=A.F(this)
return new A.c0(J.U(this.a),this.b,s.h("@<1>").C(s.z[1]).h("c0<1,2>"))},
gl(a){return J.B(this.a)},
gT(a){return J.cN(this.a)},
gD(a){return this.b.$1(J.dJ(this.a))},
gF(a){return this.b.$1(J.hA(this.a))}}
A.bL.prototype={$iD:1}
A.c0.prototype={
m(){var s=this,r=s.b
if(r.m()){s.saG(s.c.$1(r.gp()))
return!0}s.saG(null)
return!1},
gp(){var s=this.a
return s==null?this.$ti.z[1].a(s):s},
saG(a){this.a=this.$ti.h("2?").a(a)}}
A.K.prototype={
gl(a){return J.B(this.a)},
P(a,b){return this.b.$1(J.hz(this.a,b))}}
A.aC.prototype={
gv(a){return new A.cj(J.U(this.a),this.b,this.$ti.h("cj<1>"))}}
A.cj.prototype={
m(){var s,r
for(s=this.a,r=this.b;s.m();)if(A.bq(r.$1(s.gp())))return!0
return!1},
gp(){return this.a.gp()}}
A.aA.prototype={
a_(a,b){A.dP(b,"count",t.S)
A.ao(b,"count")
return new A.aA(this.a,this.b+b,A.F(this).h("aA<1>"))},
gv(a){return new A.c9(J.U(this.a),this.b,A.F(this).h("c9<1>"))}}
A.bc.prototype={
gl(a){var s=J.B(this.a)-this.b
if(s>=0)return s
return 0},
a_(a,b){A.dP(b,"count",t.S)
A.ao(b,"count")
return new A.bc(this.a,this.b+b,this.$ti)},
$iD:1}
A.c9.prototype={
m(){var s,r
for(s=this.a,r=0;r<this.b;++r)s.m()
this.b=0
return s.m()},
gp(){return this.a.gp()}}
A.bM.prototype={
gv(a){return B.N},
gT(a){return!0},
gl(a){return 0},
gD(a){throw A.e(A.a3())},
gF(a){throw A.e(A.a3())},
a_(a,b){A.ao(b,"count")
return this}}
A.bN.prototype={
m(){return!1},
gp(){throw A.e(A.a3())},
$iE:1}
A.az.prototype={
gl(a){return J.B(this.a)},
P(a,b){var s=this.a,r=J.aa(s)
return r.P(s,r.gl(s)-1-b)}}
A.cy.prototype={}
A.bR.prototype={
E(a,b){if(b==null)return!1
return b instanceof A.bR&&this.a.E(0,b.a)&&A.hr(this)===A.hr(b)},
gH(a){return A.da(this.a,A.hr(this),B.l,B.l)},
k(a){var s=B.a.bD([A.ho(this.$ti.c)],", ")
return this.a.k(0)+" with "+("<"+s+">")}}
A.aI.prototype={
$2(a,b){return this.a.$1$2(a,b,this.$ti.z[0])},
$S(){return A.kV(A.hn(this.a),this.$ti)}}
A.eJ.prototype={
a2(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.c2.prototype={
k(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
A.d6.prototype={
k(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.dm.prototype={
k(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.ey.prototype={
k(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.bO.prototype={}
A.cr.prototype={
k(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iaP:1}
A.a1.prototype={
k(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.iL(r==null?"unknown":r)+"'"},
$iax:1,
gfq(){return this},
$C:"$1",
$R:1,
$D:null}
A.cV.prototype={$C:"$0",$R:0}
A.cW.prototype={$C:"$2",$R:2}
A.dj.prototype={}
A.dg.prototype={
k(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.iL(s)+"'"}}
A.ba.prototype={
E(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.ba))return!1
return this.$_target===b.$_target&&this.a===b.a},
gH(a){return(A.iH(this.a)^A.aO(this.$_target))>>>0},
k(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.eD(this.a)+"'")}}
A.dd.prototype={
k(a){return"RuntimeError: "+this.a}}
A.dp.prototype={
k(a){return"Assertion failed: "+A.d_(this.a)}}
A.bW.prototype={
gl(a){return this.a},
gcZ(){return new A.bY(this,this.$ti.h("bY<1>"))},
cK(a){var s
if((a&0x3fffffff)===a){s=this.c
if(s==null)return!1
return s[a]!=null}else return this.f1(a)},
f1(a){var s=this.d
if(s==null)return!1
return this.bC(s[B.e.gH(a)&0x3fffffff],a)>=0},
i(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.f2(b)},
f2(a){var s,r,q=this.d
if(q==null)return null
s=q[J.a8(a)&0x3fffffff]
r=this.bC(s,a)
if(r<0)return null
return s[r].b},
n(a,b,c){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(b)
l.z[1].a(c)
if(typeof b=="string"){s=m.b
m.ce(s==null?m.b=m.bp():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=m.c
m.ce(r==null?m.c=m.bp():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.bp()
p=J.a8(b)&0x3fffffff
o=q[p]
if(o==null)q[p]=[m.bi(b,c)]
else{n=m.bC(o,b)
if(n>=0)o[n].b=c
else o.push(m.bi(b,c))}}},
cV(a,b){var s,r,q=this
q.$ti.h("~(1,2)").a(b)
s=q.e
r=q.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==q.r)throw A.e(A.ai(q))
s=s.c}},
ce(a,b,c){var s,r=this.$ti
r.c.a(b)
r.z[1].a(c)
s=a[b]
if(s==null)a[b]=this.bi(b,c)
else s.b=c},
bi(a,b){var s=this,r=s.$ti,q=new A.eh(r.c.a(a),r.z[1].a(b))
if(s.e==null)s.e=s.f=q
else s.f=s.f.c=q;++s.a
s.r=s.r+1&1073741823
return q},
bC(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ab(a[r].a,b))return r
return-1},
k(a){return A.hU(this)},
bp(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s}}
A.eh.prototype={}
A.bY.prototype={
gl(a){return this.a.a},
gT(a){return this.a.a===0},
gv(a){var s=this.a,r=new A.bZ(s,s.r,this.$ti.h("bZ<1>"))
r.c=s.e
return r}}
A.bZ.prototype={
gp(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.e(A.ai(q))
s=r.c
if(s==null){r.scf(null)
return!1}else{r.scf(s.a)
r.c=s.c
return!0}},
scf(a){this.d=this.$ti.h("1?").a(a)},
$iE:1}
A.fF.prototype={
$1(a){return this.a(a)},
$S:49}
A.fG.prototype={
$2(a,b){return this.a(a,b)},
$S:40}
A.fH.prototype={
$1(a){return this.a(A.cA(a))},
$S:20}
A.d5.prototype={
k(a){return"RegExp/"+this.a+"/"+this.b.flags},
eU(a){var s=this.b.exec(a)
if(s==null)return null
return new A.dx(s)},
$ieC:1}
A.dx.prototype={$iel:1}
A.di.prototype={$iel:1}
A.fl.prototype={
m(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.di(s,o)
q.c=r===q.c?r+1:r
return!0},
gp(){var s=this.d
s.toString
return s},
$iE:1}
A.ap.prototype={
h(a){return A.fo(v.typeUniverse,this,a)},
C(a){return A.kb(v.typeUniverse,this,a)}}
A.dv.prototype={}
A.dC.prototype={
k(a){return A.a7(this.a,null)}}
A.du.prototype={
k(a){return this.a}}
A.cu.prototype={$iaS:1}
A.eZ.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:14}
A.eY.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:53}
A.f_.prototype={
$0(){this.a.$0()},
$S:8}
A.f0.prototype={
$0(){this.a.$0()},
$S:8}
A.fm.prototype={
e5(a,b){if(self.setTimeout!=null)self.setTimeout(A.br(new A.fn(this,b),0),a)
else throw A.e(A.a5("`setTimeout()` not found."))}}
A.fn.prototype={
$0(){this.b.$0()},
$S:0}
A.dq.prototype={
bu(a,b){var s,r=this,q=r.$ti
q.h("1/?").a(b)
if(b==null)q.c.a(b)
if(!r.b)r.a.cj(b)
else{s=r.a
if(q.h("aj<1>").b(b))s.cl(b)
else s.bl(q.c.a(b))}},
cJ(a,b){var s=this.a
if(this.b)s.aq(a,b)
else s.ef(a,b)}}
A.fq.prototype={
$1(a){return this.a.$2(0,a)},
$S:44}
A.fr.prototype={
$2(a,b){this.a.$2(1,new A.bO(a,t.k.a(b)))},
$S:27}
A.fw.prototype={
$2(a,b){this.a(A.Y(a),b)},
$S:36}
A.bl.prototype={
k(a){return"IterationMarker("+this.b+", "+A.q(this.a)+")"}}
A.bm.prototype={
gp(){var s,r=this.c
if(r==null){s=this.b
return s==null?this.$ti.c.a(s):s}return r.gp()},
m(){var s,r,q,p,o,n,m=this
for(s=m.$ti.h("E<1>");!0;){r=m.c
if(r!=null)if(r.m())return!0
else m.sct(null)
q=function(a,b,c){var l,k=b
while(true)try{return a(k,l)}catch(j){l=j
k=c}}(m.a,0,1)
if(q instanceof A.bl){p=q.b
if(p===2){o=m.d
if(o==null||o.length===0){m.sci(null)
return!1}if(0>=o.length)return A.k(o,-1)
m.a=o.pop()
continue}else{r=q.a
if(p===3)throw r
else{n=s.a(J.U(r))
if(n instanceof A.bm){r=m.d
if(r==null)r=m.d=[]
B.a.u(r,m.a)
m.a=n.a
continue}else{m.sct(n)
continue}}}}else{m.sci(q)
return!0}}return!1},
sci(a){this.b=this.$ti.h("1?").a(a)},
sct(a){this.c=this.$ti.h("E<1>?").a(a)},
$iE:1}
A.ct.prototype={
gv(a){return new A.bm(this.a(),this.$ti.h("bm<1>"))}}
A.bA.prototype={
k(a){return A.q(this.a)},
$iG:1,
gbg(){return this.b}}
A.ds.prototype={
cJ(a,b){var s
A.dG(a,"error",t.K)
s=this.a
if((s.a&30)!==0)throw A.e(A.ak("Future already completed"))
s.aq(a,b)}}
A.cs.prototype={
bu(a,b){var s,r=this.$ti
r.h("1/?").a(b)
s=this.a
if((s.a&30)!==0)throw A.e(A.ak("Future already completed"))
s.cn(r.h("1/").a(b))}}
A.b5.prototype={
f7(a){if((this.c&15)!==6)return!0
return this.b.b.bL(t.al.a(this.d),a.a,t.cJ,t.K)},
eX(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.C.b(q))p=l.fd(q,m,a.b,o,n,t.k)
else p=l.bL(t.I.a(q),m,o,n)
try{o=r.$ti.h("2/").a(p)
return o}catch(s){if(t.eK.b(A.aZ(s))){if((r.c&1)!==0)throw A.e(A.dO("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.e(A.dO("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.Q.prototype={
bM(a,b,c){var s,r,q,p=this.$ti
p.C(c).h("1/(2)").a(a)
s=$.H
if(s===B.f){if(b!=null&&!t.C.b(b)&&!t.I.b(b))throw A.e(A.hC(b,"onError",u.c))}else{c.h("@<0/>").C(p.c).h("1(2)").a(a)
if(b!=null)b=A.kA(b,s)}r=new A.Q(s,c.h("Q<0>"))
q=b==null?1:3
this.bj(new A.b5(r,q,a,b,p.h("@<1>").C(c).h("b5<1,2>")))
return r},
fg(a,b){return this.bM(a,null,b)},
cz(a,b,c){var s,r=this.$ti
r.C(c).h("1/(2)").a(a)
s=new A.Q($.H,c.h("Q<0>"))
this.bj(new A.b5(s,3,a,b,r.h("@<1>").C(c).h("b5<1,2>")))
return s},
eq(a){this.a=this.a&1|16
this.c=a},
bk(a){this.a=a.a&30|this.a&1
this.c=a.c},
bj(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.c.a(r.c)
if((s.a&24)===0){s.bj(a)
return}r.bk(s)}A.b8(null,null,r.b,t.M.a(new A.f5(r,a)))}},
cu(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.c.a(m.c)
if((n.a&24)===0){n.cu(a)
return}m.bk(n)}l.a=m.aW(a)
A.b8(null,null,m.b,t.M.a(new A.fd(l,m)))}},
aV(){var s=t.F.a(this.c)
this.c=null
return this.aW(s)},
aW(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
ck(a){var s,r,q,p=this
p.a^=2
try{a.bM(new A.f9(p),new A.fa(p),t.P)}catch(q){s=A.aZ(q)
r=A.aX(q)
A.l7(new A.fb(p,s,r))}},
cn(a){var s,r=this,q=r.$ti
q.h("1/").a(a)
if(q.h("aj<1>").b(a))if(q.b(a))A.f8(a,r)
else r.ck(a)
else{s=r.aV()
q.c.a(a)
r.a=8
r.c=a
A.bk(r,s)}},
bl(a){var s,r=this
r.$ti.c.a(a)
s=r.aV()
r.a=8
r.c=a
A.bk(r,s)},
aq(a,b){var s
t.k.a(b)
s=this.aV()
this.eq(A.e0(a,b))
A.bk(this,s)},
cj(a){var s=this.$ti
s.h("1/").a(a)
if(s.h("aj<1>").b(a)){this.cl(a)
return}this.eg(s.c.a(a))},
eg(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.b8(null,null,s.b,t.M.a(new A.f7(s,a)))},
cl(a){var s=this,r=s.$ti
r.h("aj<1>").a(a)
if(r.b(a)){if((a.a&16)!==0){s.a^=2
A.b8(null,null,s.b,t.M.a(new A.fc(s,a)))}else A.f8(a,s)
return}s.ck(a)},
ef(a,b){this.a^=2
A.b8(null,null,this.b,t.M.a(new A.f6(this,a,b)))},
$iaj:1}
A.f5.prototype={
$0(){A.bk(this.a,this.b)},
$S:0}
A.fd.prototype={
$0(){A.bk(this.b,this.a.a)},
$S:0}
A.f9.prototype={
$1(a){var s,r,q,p=this.a
p.a^=2
try{p.bl(p.$ti.c.a(a))}catch(q){s=A.aZ(q)
r=A.aX(q)
p.aq(s,r)}},
$S:14}
A.fa.prototype={
$2(a,b){this.a.aq(t.K.a(a),t.k.a(b))},
$S:32}
A.fb.prototype={
$0(){this.a.aq(this.b,this.c)},
$S:0}
A.f7.prototype={
$0(){this.a.bl(this.b)},
$S:0}
A.fc.prototype={
$0(){A.f8(this.b,this.a)},
$S:0}
A.f6.prototype={
$0(){this.a.aq(this.b,this.c)},
$S:0}
A.fg.prototype={
$0(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.d7(t.fO.a(q.d),t.z)}catch(p){s=A.aZ(p)
r=A.aX(p)
q=m.c&&t.u.a(m.b.a.c).a===s
o=m.a
if(q)o.c=t.u.a(m.b.a.c)
else o.c=A.e0(s,r)
o.b=!0
return}if(l instanceof A.Q&&(l.a&24)!==0){if((l.a&16)!==0){q=m.a
q.c=t.u.a(l.c)
q.b=!0}return}if(t.v.b(l)){n=m.b.a
q=m.a
q.c=l.fg(new A.fh(n),t.z)
q.b=!1}},
$S:0}
A.fh.prototype={
$1(a){return this.a},
$S:31}
A.ff.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.bL(o.h("2/(1)").a(p.d),m,o.h("2/"),n)}catch(l){s=A.aZ(l)
r=A.aX(l)
q=this.a
q.c=A.e0(s,r)
q.b=!0}},
$S:0}
A.fe.prototype={
$0(){var s,r,q,p,o,n,m=this
try{s=t.u.a(m.a.a.c)
p=m.b
if(p.a.f7(s)&&p.a.e!=null){p.c=p.a.eX(s)
p.b=!1}}catch(o){r=A.aZ(o)
q=A.aX(o)
p=t.u.a(m.a.a.c)
n=m.b
if(p.a===r)n.c=p
else n.c=A.e0(r,q)
n.b=!0}},
$S:0}
A.dr.prototype={}
A.cb.prototype={
gl(a){var s,r,q=this,p={},o=new A.Q($.H,t.fJ)
p.a=0
s=q.$ti
r=s.h("~(1)?").a(new A.eH(p,q))
t.g5.a(new A.eI(p,o))
A.f2(q.a,q.b,r,!1,s.c)
return o}}
A.eH.prototype={
$1(a){this.b.$ti.c.a(a);++this.a.a},
$S(){return this.b.$ti.h("~(1)")}}
A.eI.prototype={
$0(){this.b.cn(this.a.a)},
$S:0}
A.cc.prototype={}
A.dA.prototype={}
A.cx.prototype={$ii6:1}
A.fv.prototype={
$0(){var s=this.a,r=this.b
A.dG(s,"error",t.K)
A.dG(r,"stackTrace",t.k)
A.jk(s,r)},
$S:0}
A.dz.prototype={
fe(a){var s,r,q
t.M.a(a)
try{if(B.f===$.H){a.$0()
return}A.ir(null,null,this,a,t.J)}catch(q){s=A.aZ(q)
r=A.aX(q)
A.fu(t.K.a(s),t.k.a(r))}},
ff(a,b,c){var s,r,q
c.h("~(0)").a(a)
c.a(b)
try{if(B.f===$.H){a.$1(b)
return}A.is(null,null,this,a,b,t.J,c)}catch(q){s=A.aZ(q)
r=A.aX(q)
A.fu(t.K.a(s),t.k.a(r))}},
cG(a){return new A.fj(this,t.M.a(a))},
eF(a,b){return new A.fk(this,b.h("~(0)").a(a),b)},
d7(a,b){b.h("0()").a(a)
if($.H===B.f)return a.$0()
return A.ir(null,null,this,a,b)},
bL(a,b,c,d){c.h("@<0>").C(d).h("1(2)").a(a)
d.a(b)
if($.H===B.f)return a.$1(b)
return A.is(null,null,this,a,b,c,d)},
fd(a,b,c,d,e,f){d.h("@<0>").C(e).C(f).h("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.H===B.f)return a.$2(b,c)
return A.kB(null,null,this,a,b,c,d,e,f)},
d4(a,b,c,d){return b.h("@<0>").C(c).C(d).h("1(2,3)").a(a)}}
A.fj.prototype={
$0(){return this.a.fe(this.b)},
$S:0}
A.fk.prototype={
$1(a){var s=this.c
return this.a.ff(this.b,s.a(a),s)},
$S(){return this.c.h("~(0)")}}
A.aD.prototype={
em(){return new A.aD(A.F(this).h("aD<1>"))},
gv(a){var s=this,r=new A.b6(s,s.r,A.F(s).h("b6<1>"))
r.c=s.e
return r},
gl(a){return this.a},
gT(a){return this.a===0},
aj(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.g.a(s[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return t.g.a(r[b])!=null}else return this.ei(b)},
ei(a){var s=this.d
if(s==null)return!1
return this.cq(s[this.co(a)],a)>=0},
gD(a){var s=this.e
if(s==null)throw A.e(A.ak("No elements"))
return A.F(this).c.a(s.a)},
gF(a){var s=this.f
if(s==null)throw A.e(A.ak("No elements"))
return A.F(this).c.a(s.a)},
u(a,b){var s,r,q=this
A.F(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.cg(s==null?q.b=A.hb():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.cg(r==null?q.c=A.hb():r,b)}else return q.ec(b)},
ec(a){var s,r,q,p=this
A.F(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.hb()
r=p.co(a)
q=s[r]
if(q==null)s[r]=[p.bq(a)]
else{if(p.cq(q,a)>=0)return!1
q.push(p.bq(a))}return!0},
cg(a,b){A.F(this).c.a(b)
if(t.g.a(a[b])!=null)return!1
a[b]=this.bq(b)
return!0},
el(){this.r=this.r+1&1073741823},
bq(a){var s,r=this,q=new A.dw(A.F(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.el()
return q},
co(a){return J.a8(a)&1073741823},
cq(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ab(a[r].a,b))return r
return-1}}
A.dw.prototype={}
A.b6.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.e(A.ai(q))
else if(r==null){s.scm(null)
return!1}else{s.scm(s.$ti.h("1?").a(r.a))
s.c=r.b
return!0}},
scm(a){this.d=this.$ti.h("1?").a(a)},
$iE:1}
A.bT.prototype={}
A.ae.prototype={
gv(a){var s=this
return new A.a4(s,s.gl(s),s.$ti.h("a4<ae.E>"))},
P(a,b){return this.$ti.z[1].a(J.T(this.a,b))},
gT(a){return J.B(this.a)===0},
gD(a){var s=this.a,r=J.aa(s)
if(r.gl(s)===0)throw A.e(A.a3())
return this.$ti.z[1].a(r.i(s,0))},
gF(a){var s=this.a,r=J.aa(s)
if(r.gl(s)===0)throw A.e(A.a3())
return this.$ti.z[1].a(r.i(s,r.gl(s)-1))},
b0(a,b){var s,r,q,p,o=this.$ti
o.h("A(ae.E)").a(b)
s=this.a
r=J.aa(s)
q=r.gl(s)
for(o=o.z[1],p=0;p<q;++p){if(!A.bq(b.$1(o.a(r.i(s,p)))))return!1
if(q!==r.gl(s))throw A.e(A.ai(this))}return!0},
bE(a,b,c){var s=this.$ti
return new A.K(this,s.C(c).h("1(ae.E)").a(b),s.h("@<ae.E>").C(c).h("K<1,2>"))},
a_(a,b){return A.cd(this,b,null,this.$ti.h("ae.E"))},
k(a){return A.h1(this,"[","]")}}
A.c_.prototype={}
A.ek.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=A.q(a)
r.a=s+": "
r.a+=A.q(b)},
$S:30}
A.bd.prototype={
cV(a,b){var s,r,q,p=A.F(this)
p.h("~(1,2)").a(b)
for(s=this.gcZ(),s=s.gv(s),p=p.z[1];s.m();){r=s.gp()
q=this.i(0,r)
b.$2(r,q==null?p.a(q):q)}},
gl(a){var s=this.gcZ()
return s.gl(s)},
k(a){return A.hU(this)},
$id7:1}
A.c8.prototype={
gT(a){return this.a===0},
k(a){return A.h1(this,"{","}")},
a_(a,b){return A.i_(this,b,A.F(this).c)},
gD(a){var s,r=A.ha(this,this.r,A.F(this).c)
if(!r.m())throw A.e(A.a3())
s=r.d
return s==null?r.$ti.c.a(s):s},
gF(a){var s,r,q=A.ha(this,this.r,A.F(this).c)
if(!q.m())throw A.e(A.a3())
s=q.$ti.c
do{r=q.d
if(r==null)r=s.a(r)}while(q.m())
return r}}
A.cq.prototype={
f3(a,b){var s,r,q,p=this,o=p.em()
for(s=A.ha(p,p.r,A.F(p).c),r=s.$ti.c;s.m();){q=s.d
if(q==null)q=r.a(q)
if(b.aj(0,q))o.u(0,q)}return o},
$iD:1,
$in:1,
$ic7:1}
A.cz.prototype={}
A.f1.prototype={}
A.G.prototype={
gbg(){return A.aX(this.$thrownJsError)}}
A.bz.prototype={
k(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.d_(s)
return"Assertion failed"}}
A.aS.prototype={}
A.d9.prototype={
k(a){return"Throw of null."}}
A.av.prototype={
gbn(){return"Invalid argument"+(!this.a?"(s)":"")},
gbm(){return""},
k(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+p,n=s.gbn()+q+o
if(!s.a)return n
return n+s.gbm()+": "+A.d_(s.b)}}
A.c5.prototype={
gbn(){return"RangeError"},
gbm(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.q(q):""
else if(q==null)s=": Not greater than or equal to "+A.q(r)
else if(q>r)s=": Not in inclusive range "+A.q(r)+".."+A.q(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.q(r)
return s}}
A.d1.prototype={
gbn(){return"RangeError"},
gbm(){if(A.Y(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gl(a){return this.f}}
A.dn.prototype={
k(a){return"Unsupported operation: "+this.a}}
A.dl.prototype={
k(a){return"UnimplementedError: "+this.a}}
A.bg.prototype={
k(a){return"Bad state: "+this.a}}
A.cX.prototype={
k(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.d_(s)+"."}}
A.ca.prototype={
k(a){return"Stack Overflow"},
gbg(){return null},
$iG:1}
A.cZ.prototype={
k(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.f4.prototype={
k(a){return"Exception: "+this.a}}
A.ec.prototype={
k(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(typeof q=="string"){if(q.length>78)q=B.i.aE(q,0,75)+"..."
return r+"\n"+q}else return r}}
A.n.prototype={
bE(a,b,c){var s=A.F(this)
return A.jz(this,s.C(c).h("1(n.E)").a(b),s.h("n.E"),c)},
b0(a,b){var s
A.F(this).h("A(n.E)").a(b)
for(s=this.gv(this);s.m();)if(!A.bq(b.$1(s.gp())))return!1
return!0},
af(a,b){return A.f(this,b,A.F(this).h("n.E"))},
R(a){return this.af(a,!0)},
gl(a){var s,r=this.gv(this)
for(s=0;r.m();)++s
return s},
gT(a){return!this.gv(this).m()},
a_(a,b){return A.i_(this,b,A.F(this).h("n.E"))},
gD(a){var s=this.gv(this)
if(!s.m())throw A.e(A.a3())
return s.gp()},
gF(a){var s,r=this.gv(this)
if(!r.m())throw A.e(A.a3())
do s=r.gp()
while(r.m())
return s},
P(a,b){var s,r,q
A.ao(b,"index")
for(s=this.gv(this),r=0;s.m();){q=s.gp()
if(b===r)return q;++r}throw A.e(A.h0(b,this,"index",null,r))},
k(a){return A.jo(this,"(",")")}}
A.E.prototype={}
A.M.prototype={
gH(a){return A.z.prototype.gH.call(this,this)},
k(a){return"null"}}
A.z.prototype={$iz:1,
E(a,b){return this===b},
gH(a){return A.aO(this)},
k(a){return"Instance of '"+A.eD(this)+"'"},
toString(){return this.k(this)}}
A.dB.prototype={
k(a){return""},
$iaP:1}
A.dh.prototype={
gl(a){return this.a.length},
k(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.j.prototype={}
A.cQ.prototype={
k(a){var s=String(a)
s.toString
return s}}
A.cR.prototype={
k(a){var s=String(a)
s.toString
return s}}
A.b0.prototype={
seY(a,b){a.height=b},
sfl(a,b){a.width=b},
$ib0:1}
A.bC.prototype={
sbA(a,b){a.fillStyle=b},
sc8(a,b){a.strokeStyle=b},
dO(a,b){return a.stroke(b)},
$ibC:1}
A.as.prototype={
gl(a){return a.length}}
A.e7.prototype={
k(a){var s=String(a)
s.toString
return s}}
A.bH.prototype={
k(a){var s,r,q,p=a.left
p.toString
s=a.top
s.toString
r=a.width
r.toString
q=a.height
q.toString
return"Rectangle ("+A.q(p)+", "+A.q(s)+") "+A.q(r)+" x "+A.q(q)},
E(a,b){var s,r
if(b==null)return!1
if(t.eU.b(b)){s=a.left
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
gH(a){var s,r,q,p=a.left
p.toString
s=a.top
s.toString
r=a.width
r.toString
q=a.height
q.toString
return A.da(p,s,r,q)},
$ih8:1}
A.h.prototype={
k(a){var s=a.localName
s.toString
return s},
$ih:1}
A.i.prototype={$ii:1}
A.a2.prototype={
ee(a,b,c,d){return a.addEventListener(b,A.br(t.B.a(c),1),!1)},
eo(a,b,c,d){return a.removeEventListener(b,A.br(t.B.a(c),1),!1)},
$ia2:1}
A.d0.prototype={
gl(a){return a.length}}
A.af.prototype={$iaf:1}
A.a9.prototype={
k(a){var s=a.nodeValue
return s==null?this.dQ(a):s}}
A.db.prototype={$idb:1}
A.de.prototype={
gl(a){return a.length}}
A.ar.prototype={}
A.bj.prototype={
geA(a){var s=new A.Q($.H,t.dL),r=t.c4.a(new A.eX(new A.cs(s,t.g4)))
this.ek(a)
r=A.iu(r,t.H)
r.toString
this.ep(a,r)
return s},
ep(a,b){var s=a.requestAnimationFrame(A.br(t.c4.a(b),1))
s.toString
return s},
ek(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=["ms","moz","webkit","o"]
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+"RequestAnimationFrame"]
b.cancelAnimationFrame=b[r[q]+"CancelAnimationFrame"]||b[r[q]+"CancelRequestAnimationFrame"]}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
A.eX.prototype={
$1(a){this.a.bu(0,A.hg(a))},
$S:28}
A.cl.prototype={
k(a){var s,r,q,p=a.left
p.toString
s=a.top
s.toString
r=a.width
r.toString
q=a.height
q.toString
return"Rectangle ("+A.q(p)+", "+A.q(s)+") "+A.q(r)+" x "+A.q(q)},
E(a,b){var s,r
if(b==null)return!1
if(t.eU.b(b)){s=a.left
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
gH(a){var s,r,q,p=a.left
p.toString
s=a.top
s.toString
r=a.width
r.toString
q=a.height
q.toString
return A.da(p,s,r,q)}}
A.h_.prototype={}
A.cn.prototype={}
A.dt.prototype={}
A.co.prototype={
eG(){var s,r=this,q=r.b
if(q==null)return $.hy()
s=r.d
if(s!=null)J.j0(q,r.c,t.B.a(s),!1)
r.b=null
r.sen(null)
return $.hy()},
sen(a){this.d=t.B.a(a)}}
A.f3.prototype={
$1(a){return this.a.$1(t.L.a(a))},
$S:23}
A.dy.prototype={
e4(a){var s,r,q,p,o,n,m,l=this,k=4294967296
do{s=a>>>0
a=B.e.a0(a-s,k)
r=a>>>0
a=B.e.a0(a-r,k)
q=(~s>>>0)+(s<<21>>>0)
p=q>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+B.e.a0(q-p,k)>>>0
q=((p^(p>>>24|r<<8))>>>0)*265
s=q>>>0
r=((r^r>>>24)>>>0)*265+B.e.a0(q-s,k)>>>0
q=((s^(s>>>14|r<<18))>>>0)*21
s=q>>>0
r=((r^r>>>14)>>>0)*21+B.e.a0(q-s,k)>>>0
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=q>>>0
o=B.e.a0(q-p,k)
q=l.a*1037
n=l.a=q>>>0
m=l.b*1037+B.e.a0(q-n,k)>>>0
l.b=m
n=(n^p)>>>0
l.a=n
o=(m^r+((r<<31|s>>>1)>>>0)+o>>>0)>>>0
l.b=o}while(a!==0)
if(o===0&&n===0)l.a=23063
l.aU()
l.aU()
l.aU()
l.aU()},
aU(){var s=this,r=s.a,q=4294901760*r,p=q>>>0,o=55905*r,n=o>>>0,m=n+p+s.b
r=m>>>0
s.a=r
s.b=B.e.a0(o-n+(q-p)+(m-r),4294967296)>>>0},
$ijG:1}
A.b4.prototype={
k(a){return"Point("+A.q(this.a)+", "+A.q(this.b)+")"},
E(a,b){if(b==null)return!1
return b instanceof A.b4&&this.a===b.a&&this.b===b.b},
gH(a){return A.i1(B.d.gH(this.a),B.d.gH(this.b),0)}}
A.V.prototype={
gv(a){var s=this.$ti,r=J.o(this.a,new A.ee(this),s.h("E<1>"))
return new A.cp(A.f(r,!1,r.$ti.h("C.E")),s.h("cp<1>"))}}
A.ee.prototype={
$1(a){return J.U(this.a.$ti.h("n<1>").a(a))},
$S(){return this.a.$ti.h("E<1>(n<1>)")}}
A.cp.prototype={
m(){var s,r,q,p=this,o=p.a
if(o.length===0)return!1
for(s=0;r=o.length,s<r;++s)if(!o[s].m()){p.scs(null)
return!1}if(r>4294967295)A.I(A.at(r,0,4294967295,"length",null))
q=J.hR(new Array(r),p.$ti.c)
for(s=0;s<r;++s){if(!(s<o.length))return A.k(o,s)
q[s]=o[s].gp()}p.scs(q)
return!0},
gp(){var s=this.b
return s==null?A.I(A.ak("No element")):s},
scs(a){this.b=this.$ti.h("m<1>?").a(a)},
$iE:1}
A.e2.prototype={
cO(a){var s,r,q,p
t.a.a(a)
s=new A.e3()
r=A.b([],t.r)
for(q=a.length,p=0;p<a.length;a.length===q||(0,A.c)(a),++p)B.a.A(r,s.$1(a[p]))
return A.le(r,t.j)},
d5(a){var s,r,q,p,o="renderer"
for(s=this.cO(t.a.a(a)),r=A.w(s).h("az<1>"),s=new A.az(s,r),s=new A.a4(s,s.gl(s),r.h("a4<C.E>")),r=r.h("C.E");s.m();){q=s.d
if(q==null)q=r.a(q)
p=this.r
if(q instanceof A.x){p===$&&A.a("display")
p=p.a
p===$&&A.a(o)
p.fa(q)}else{p===$&&A.a("display")
p.a===$&&A.a(o)}}},
d8(a,b){t.y.a(b)
return!B.a.b0(b,new A.e4())?A.b([B.c],t.l):b}}
A.e3.prototype={
$1(a){return a.ag()},
$S:19}
A.e4.prototype={
$1(a){t.i.a(a)
return isFinite(a.a)&&isFinite(a.b)&&isFinite(a.c)},
$S:17}
A.bu.prototype={
cH(a){var s
this.b=a
s=this.d
B.F.sfl(s,1280)
B.F.seY(s,720)},
aX(a){return a},
b8(a,b){var s,r,q=this.b
q===$&&A.a("camera")
s=q.c
r=A.dI(a,0,1280,-s/2,s/2)
q=q.d
return new A.d(r,A.dI(b,720,0,-q/2,q/2),0).B(0,B.c)}}
A.cP.prototype={
b5(){var s=0,r=A.cG(t.V),q,p=this,o,n,m
var $async$b5=A.cI(function(a,b){if(a===1)return A.cB(b,r)
while(true)switch(s){case 0:m=window
m.toString
s=3
return A.b7(B.a4.geA(m),$async$b5)
case 3:o=b
m=p.f
if(m===0){p.f=o
m=o}n=o-m
p.f=m+n
q=n/1000
s=1
break
case 1:return A.cC(q,r)}})
return A.cD($async$b5,r)},
b9(a){var s,r,q,p
t.q.a(a)
s=this.d.getBoundingClientRect()
r=s.left
r.toString
q=s.right
q.toString
this.b===$&&A.a("camera")
p=A.dI(a.a,r,q,0,1280)
q=s.top
q.toString
r=s.bottom
r.toString
return new A.d(p,A.dI(a.b,q,r,0,720),0)},
bs(){var s=this,r=s.d,q=t.do,p=q.h("~(1)?"),o=p.a(new A.dL(s))
t.g5.a(null)
q=q.c
B.a.A(s.r,A.b([A.f2(r,"mousemove",o,!1,q),A.f2(r,"mousedown",p.a(new A.dM(s)),!1,q),A.f2(r,"mouseup",p.a(new A.dN(s)),!1,q)],t.db))},
fj(){var s,r,q
for(s=this.r,r=s.length,q=0;q<s.length;s.length===r||(0,A.c)(s),++q)s[q].eG()}}
A.dL.prototype={
$1(a){var s,r,q,p
t.E.a(a)
s=this.a
r=s.Q
s.as=new A.d(r.a,r.b,r.c)
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.b9(new A.b4(r,q,t.q))
q=s.b8(p.a,p.b)
s.Q=q
q.t(0,s.as)
q=s.Q
$.bt().b_(new A.c1(q,B.v))
if(s.w){r=s.y=s.Q
s.x.t(0,r)
$.bt().b_(new A.aL(r,B.q))}},
$S:4}
A.dM.prototype={
$1(a){var s,r,q,p,o
t.E.a(a)
s=this.a
r=s.Q
s.as=new A.d(r.a,r.b,r.c)
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.b9(new A.b4(r,q,t.q))
s.Q=s.b8(p.a,p.b)
q=a.button
q.toString
s.z=A.h6(q)
q=s.Q
$.bt().b_(new A.aM(q,B.o))
s.w=!0
q=s.Q
r=q.a
o=q.b
q=q.c
s.x=new A.d(r,o,q)
s.y=new A.d(r,o,q)},
$S:4}
A.dN.prototype={
$1(a){var s,r,q,p
t.E.a(a)
s=this.a
r=s.Q
s.as=new A.d(r.a,r.b,r.c)
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.b9(new A.b4(r,q,t.q))
s.Q=s.b8(p.a,p.b)
q=a.button
q.toString
s.z=A.h6(q)
q=s.Q
$.bt().b_(new A.aN(q,B.p))
s.w=!1},
$S:4}
A.cT.prototype={}
A.be.prototype={
j(){return A.h7(this)},
ey(){var s,r,q,p=this,o=t.aW,n=A.b([],o),m=p.b3
m.toString
s=p.cS
s=A.hk(p.a1+-1*s/2,m,s).ab(0)
m=s.length
r=p.cR
q=0
for(;q<s.length;s.length===m||(0,A.c)(s),++q)n.push(p.bW(s[q],r))
p.sfh(n)
o=A.b([],o)
for(n=p.cT,m=n.length,r*=p.cU,q=0;q<n.length;n.length===m||(0,A.c)(n),++q)o.push(p.bW(n[q],r))
p.seE(o)
o=p.by
o.toString
o=A.f(o,!0,t.j)
n=p.bz
n.toString
B.a.A(o,n)
p.U(t.a.a(o))},
bW(a,b){var s,r=this,q=B.t.q(0,b),p=A.ju(0,B.b,B.r.q(0,b),null,q)
p.bJ(0,r.L().t(0,r.O()).aH())
p.aN(r.bH(a))
p.ah(r.bQ())
p.c0(J.T(r.a4(),0))
q=J.dJ(r.a5(!1))
s=r.w
p.dE(q,s)
return p},
bH(a){var s=this,r=A.dI(a,s.am,s.a1,0,1)
return A.fJ(s.O(),s.L(),r,t.i)},
d1(a){var s,r=this,q=r.O(),p=r.L(),o=p.t(0,q),n=o.a3(0,Math.sqrt(o.X()))
o=n.cN(a.t(0,q))
s=n.cN(p.t(0,q))
return A.fJ(r.am,r.a1,o/s,t.V)},
sfh(a){this.by=t.g2.a(a)},
seE(a){this.bz=t.g2.a(a)}}
A.ez.prototype={
$1(a){return t.f.a(a).j()},
$S:16}
A.eA.prototype={
$1(a){return t.f.a(a).j()},
$S:16}
A.cY.prototype={
bT(a,b,c){var s,r,q
t.ao.a(a)
s=A.jl(B.b,B.a_,1e-8,a,0.01,b,c)
r=t.cD.a(new A.e6(this))
q=s.z
s.bX(q)
s.dS(B.c,B.c,r)
s.bX(1/q)
return s}}
A.e6.prototype={
$1(a){return this.a.aL(a)},
$S:2}
A.bB.prototype={
cL(b8,b9,c0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=B.a.Y(A.b([c0,this.cQ,B.L],t.f_),new A.e1()),b7=b6.a
if(b7==null)b7=B.I
s=b6.e
if(s==null)s=1
r=b6.f
q=b6.r
if(q==null)q=0.1
p=b6.w
if(p==null)p=1
o=b6.x
n=b6.y
if(n==null)n=A.b([0],t.n)
m=b6.z
l=b6.Q
k=b6.as
if(k==null)k=2
j=b6.at
if(j==null)j=0
i=b6.ax
if(i==null)i=0.75
h=b6.d
if(h==null)h=B.t
g=b6.ay
if(g==null)g=0.25
f=b6.b
e=b6.ch
if(e==null)e=0.25
d=b6.CW
if(d==null)d=0.25
c=b6.cx
b=b6.c
a=A.ag(b5,0,B.b,b5,0)
b=new A.be(b8,b9,s,r!==!1,q,p,o,n,m===!0,l,k,j,i,h,g,f!==!1,c,b!==!1,e,d,b5,b5,0,b5,B.k,B.u,0.35,B.h,a,b5,b5,4,0,!1,0.01,!1,0.000001,4,b5,b5,b5,B.b,$,b5,$,$,$)
b.S(B.b,b5,b5)
b.ah(b7)
d=Math.max(e,d)
b.fx=d
b.a1=b.a1+d/2
b.J=B.k.q(0,s).q(0,b8)
b7=B.k.q(0,s).q(0,b.a1)
b.K=b7
b.aP(b.J,b7)
b.ai(b.bH(j).q(0,-1))
if(b.b3==null)b.b3=p*B.d.bt(b8/p)
a0=b.fx
a1=b.bQ()
a2=A.aR(a)
b7=a2.a
b7=b7==null?b5:J.cN(b7)
if(b7!==!1)a2=a2.fm(a1.j())
b7=a2.b
b7=b7==null?b5:J.cN(b7)
if(b7!==!1)a2=a2.fn(a1.j())
a3=A.l4(3.141592653589793,B.h).ab(0)
b7=a3.length
if(0>=b7)return A.k(a3,0)
a4=a3[0]
if(1>=b7)return A.k(a3,1)
a5=a3[1]
if(2>=b7)return A.k(a3,2)
a6=a3[2]
if(3>=b7)return A.k(a3,3)
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
q=A.kO(3,new A.d(a8*a7+b1*q+a9*s-b0*b7,a9*a7+b1*b7+b0*q-a8*s,b0*a7+b1*s+a8*b7-a9*q))
b2=new A.by(4,0,!1,0.01,!1,0.000001,4,b5,b5,b5,B.b,$,b5,$,$,$)
b2.S(B.b,b5,b5)
b2.e2(q,B.b)
b2.bJ(0,3.141592653589793)
b2.d6(a0,0,B.c,b5,!0)
b2.d6(a0,1,B.c,b5,!0)
b2.d_(b)
b2.dI(a2)
b3=b.L()
b4=b.dq()
b7=b4.t(0,b3).aH()
s=b2.r
s===$&&A.a("points")
b2.bJ(0,-b7-B.a.gD(s).t(0,b2.aO(0.5)).aH()-3.141592653589793)
b2.ai(b3.t(0,B.a.gD(b2.r)))
b.fb(b2,B.a2)
b.k1=b2
b.U(t.a.a(A.b([b2],t.r)))
b.ey()
b7=b6.cy
b.dD(b7==null?4:b7)
return b},
aL(a){var s,r,q,p,o,n,m,l,k="getStart",j=this.al
j===$&&A.a("xAxis")
s=j.bH(0)
r=new A.d(s.a,s.b,s.c)
j=A.b([a.a,a.b,a.c],t.n)
q=this.bx
q===$&&A.a("axes")
q=q.d
q===$&&A.a("submobjects")
q=new A.V(A.b([j,q],t.Q),t.m)
q=q.gv(q)
j=t.f4
for(;q.m();){p=q.b
if(p==null)p=A.I(A.ak("No element"))
if(1>=p.length)return A.k(p,1)
o=j.a(p[1])
n=o.am
m=(A.aE(p[0])-n)/(o.a1-n)+0
n=o.id
if(n!=null){n.V(k)
n=n.r
n===$&&A.a("points")
n=B.a.gD(n)}else n=o.ca()
l=o.k1
if(l!=null){l.V(k)
l=l.r
l===$&&A.a("points")
l=B.a.gD(l)}else l=o.c9()
r=r.B(0,n.q(0,1-m).B(0,l.q(0,m)).t(0,s))}return r},
d0(a){var s,r=this.al
r===$&&A.a("xAxis")
s=r.d1(a)
r=this.aw
r===$&&A.a("yAxis")
return new A.d(s,r.d1(a),0)},
j(){return A.j5(this)}}
A.e1.prototype={
$2(a,b){var s=t.dK
return s.a(a).bG(s.a(b))},
$S:21}
A.a_.prototype={
bG(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.a
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
return A.cS(b,a.cx,e,n,r,h,j,a.x,i,m,l,k,a.Q,o,d,p,q,f,g,s)}}
A.c3.prototype={
dt(a){var s=this.fx
if(s>0)return s
return Math.pow(10,(a===0?0:B.d.eW(Math.min(0,Math.log(Math.abs(a))/2.302585092994046)))-2)},
aB(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=d.k1,b=A.w(c)
b=A.f(new A.aC(c,b.h("A(1)").a(new A.eB(d)),b.h("aC<1>")),!0,t.V)
c=t.n
s=A.b([d.fy,d.go],c)
for(r=b.length,q=d.id,p=0;p<r;++p){o=b[p]
if(typeof o!=="number")return o.t()
B.a.A(s,A.b([o-q,o+q],c))}B.a.dK(s)
for(c=A.u(s.length/2|0,0,1),b=c.length,r=t.l,q=t.y,n=t.i,p=0;p<c.length;c.length===b||(0,A.c)(c),++p){m=c[p]
if(typeof m!=="number")return m.B()
l=B.a.i(s,m+0)
k=B.a.i(s,m+1)
j=A.hk(k,l,d.dt(l)).ab(0)
if(!J.ab(B.a.gF(j),k))B.a.u(j,k)
i=A.b([],r)
for(h=j.length,g=0;g<j.length;j.length===h||(0,A.c)(j),++g){f=A.aE(j[g])
i.push(d.k2.$1(f))}h=A.b([],r)
for(f=i.length,g=0;g<i.length;i.length===f||(0,A.c)(i),++g){e=i[g]
l=e.a
if(!(isNaN(l)||isNaN(e.b)||isNaN(e.c))&&isFinite(l)&&isFinite(e.b)&&isFinite(e.c))h.push(e)}if(h.length!==0){i=q.a(A.b([B.a.gD(h)],r))
f=d.r
f===$&&A.a("points")
B.a.A(f,i)
d.ex(A.fU(h,n))}}},
j(){return A.jB(this)}}
A.eB.prototype={
$1(a){var s
A.aE(a)
s=this.a
return a>=s.fy&&a<=s.go},
$S:22}
A.bP.prototype={
j(){return A.jm(this)}}
A.ed.prototype={
$1(a){A.aE(a)
return new A.d(a,this.a.$1(a),0)},
$S:15}
A.cf.prototype={
de(a,b){var s,r
if(a==null)s=null
else s=a
if(s==null)s=B.j
if(b==null)r=null
else r=b
if(r==null)r=B.j
return A.ag(B.j,this.e,s,r,this.c)},
fm(a){return this.de(a,null)},
fn(a){return this.de(null,a)}}
A.dk.prototype={
k(a){return"TipSide."+this.b}}
A.bh.prototype={
j(){return A.jP(this)},
fb(a,b){var s=this
if(Math.sqrt(s.O().t(0,s.L()).X())===0)return
if(b===B.a1)s.aP(a.aO(0.5),s.L())
else s.aP(s.O(),a.aO(0.5))},
ap(a,b){this.c6(a,!1)
this.c1(B.j,!1)
this.dZ(a,!0)},
ah(a){return this.ap(a,!0)},
dq(){var s,r,q=this.r
q===$&&A.a("points")
s=q.length
r=s-2
if(!(r>=0))return A.k(q,r)
return q[r]},
L(){var s=this.k1
if(s!=null){s.V("getStart")
s=s.r
s===$&&A.a("points")
s=B.a.gD(s)}else s=this.c9()
return s},
O(){var s=this.id
if(s!=null){s.V("getStart")
s=s.r
s===$&&A.a("points")
s=B.a.gD(s)}else s=this.ca()
return s}}
A.bw.prototype={
j(){return A.j3(this)},
aB(){var s=this
s.dB()
s.bY(s.J,B.c)
s.ai(s.K)},
dB(){var s,r,q,p,o,n,m,l,k,j=this,i=t.l,h=A.b([],i)
for(s=j.y2,r=j.I,q=j.av,s=A.dH(q,r+s,s).ab(0),p=s.length,o=0;o<s.length;s.length===p||(0,A.c)(s),++o){n=s[o]
h.push(B.k.q(0,Math.cos(n)).B(0,B.r.q(0,Math.sin(n))))}s=A.b([],i)
for(p=h.length,o=0;o<h.length;h.length===p||(0,A.c)(h),++o){n=h[o]
s.push(new A.d(-n.b,n.a,n.c))}p=A.b([],i)
for(m=A.u(h.length-1,0,1),l=m.length,q=r/(q-1)/3,o=0;o<m.length;m.length===l||(0,A.c)(m),++o){k=m[o]
p.push(B.a.i(h,k).B(0,B.a.i(s,k).q(0,q)))}i=A.b([],i)
for(r=A.u(h.length,1,1),m=r.length,o=0;o<r.length;r.length===m||(0,A.c)(r),++o){k=r[o]
i.push(B.a.i(h,k).t(0,B.a.i(s,k).q(0,q)))}s=t.i
j.bd(A.iM(h,s),p,i,A.fU(h,s))}}
A.bE.prototype={
j(){return A.ja(this)},
gaY(){return!0}}
A.bI.prototype={
j(){return A.hL(this)}}
A.S.prototype={
j(){return A.jv(this)},
aB(){var s=this
s.c3(A.b([s.J,s.K],t.l))
s.ew()},
ew(){var s,r,q=this,p=q.y2
if(p===0)return
s=Math.sqrt(q.O().t(0,q.L()).X())
if(s<2*p)return
r=p/s
q.d2(q,r,1-r)},
aP(a,b){var s=this
if(s.O().E(0,s.L())){s.J=a
s.K=b
s.aB()}return s.dU(a,b)}}
A.bF.prototype={
dk(){var s=this,r=s.am/s.b1,q=Math.sqrt(s.O().t(0,s.L()).X())/r
if(r==1/0||r==-1/0||q==1/0||q==-1/0)return 1
return B.d.bt(q)},
O(){var s=this.d
s===$&&A.a("submobjects")
if(s.length!==0)return B.a.gD(s).O()
else return this.dY()},
L(){var s=this.d
s===$&&A.a("submobjects")
if(s.length!==0)return B.a.gF(s).L()
else return this.dX()},
j(){return A.jg(this)}}
A.ce.prototype={
j(){return A.jO(this)}}
A.c4.prototype={
e2(a,b){var s=A.f(a,!0,t.i)
s.push(B.a.gD(a))
this.c3(s)},
j(){return A.jD(this)}}
A.c6.prototype={
j(){return A.jJ(this)}}
A.cg.prototype={
j(){return A.jQ(this)}}
A.by.prototype={
j(){return A.Z(this)},
sM(a){this.b2=A.aE(a)},
gM(){return this.b2}}
A.d2.prototype={
e1(a){this.U(t.a.a(A.b([this.w],t.r)))
this.bs()},
br(a,b,c,d){var s,r
A.fz(d,t.e,"IEvent","addEventListener")
s=new A.ad(d.h("A(0)").a(c),b,d.h("ad<0>"))
r=$.bt()
t.gc.a(s)
r=r.gak().i(0,b)
r.toString
B.a.u(r,s)
return s}}
A.bK.prototype={
bs(){var s=this
s.se7(t.gl.a(s.br(0,B.q,new A.e8(s),t.w)))
s.se8(t.c3.a(s.br(0,B.o,new A.e9(s),t.N)))
s.se9(t.eL.a(s.br(0,B.p,new A.ea(s),t.D)))},
j(){return A.ji(this)},
se7(a){this.ay=t.gl.a(a)},
se8(a){this.ch=t.c3.a(a)},
se9(a){this.CW=t.eL.a(a)}}
A.e8.prototype={
$1(a){var s
t.w.a(a)
s=this.a
if(s.cx){s.w.aN(a.c)
return!0}return!1},
$S:24}
A.e9.prototype={
$1(a){var s,r=this.a,q=r.w,p=t.N.a(a).c,o=p.a
if(o>=q.Z(B.u).a-0.1)if(o<=q.Z(B.k).a+0.1){o=p.b
o=o>=q.Z(B.t).b-0.1&&o<=q.Z(B.r).b+0.1
s=o}else s=!1
else s=!1
if(s){r.cx=!0
q.aN(p)
return!0}return!1},
$S:25}
A.ea.prototype={
$1(a){t.D.a(a)
return this.a.cx=!1},
$S:26}
A.p.prototype={
gdd(){var s=this.e
if(s===$){s=A.b([],t.eM)
this.seb(s)}return s},
S(a,b,c){var s=this,r=s.ba()
s.b=r
s.saF(t.a.a(A.b([],t.r)))
s.f=!1
s.sW(t.y.a(A.b([],t.l)))
s.cW()
s.aB()},
k(a){return this.ba()},
ba(){var s=this.dW(0),r=A.jI("^Instance of '(.*?)'$").eU(s).b
if(1>=r.length)return A.k(r,1)
r=r[1]
r.toString
return r},
cW(){},
aB(){},
U(a){var s,r,q,p,o,n=t.a
n.a(a)
if(B.a.aj(a,this))throw A.e("Mobject can't contain itself")
s=A.f(a,!0,t.j)
r=this.d
r===$&&A.a("submobjects")
q=r.length
p=0
for(;p<r.length;r.length===q||(0,A.c)(r),++p){o=r[p]
if(!B.a.aj(a,o))s.push(o)}this.saF(n.a(s))},
aI(a,b,c){var s,r,q,p,o,n,m,l,k,j
t.cD.a(c)
if(b==null)b=this.Z(a)
for(s=this.bS(),r=s.length,q=t.y,p=t.l,o=0;o<s.length;s.length===r||(0,A.c)(s),++o){n=s[o]
m=A.b([],p)
l=n.r
l===$&&A.a("points")
k=l.length
j=0
for(;j<l.length;l.length===k||(0,A.c)(l),++j)m.push(J.fX(c.$1(J.iY(l[j],b)),b))
n.sW(q.a(m))}},
eC(a){return this.aI(B.c,null,a)},
j(){return A.jA(this)},
dc(a,b){var s,r,q,p=this
p.f===$&&A.a("updatingSuspended")
for(s=p.gdd(),r=s.length,q=0;q<s.length;s.length===r||(0,A.c)(s),++q)s[q].$2(p,a)
s=p.d
s===$&&A.a("submobjects")
r=s.length
q=0
for(;q<s.length;s.length===r||(0,A.c)(s),++q)s[q].dc(a,!0)},
da(a){return this.dc(a,!0)},
ai(a){return this.eC(new A.ev(a))},
bZ(a,b,c){return this.aI(b,c,new A.eu(a))},
bc(a){return this.bZ(a,B.c,null)},
bY(a,b){return this.bZ(a,B.c,b)},
bK(a,b,c,d){this.aI(B.c,c,new A.et(A.l6(b,d).gd9()))},
bJ(a,b){return this.bK(a,b,null,B.h)},
fc(a,b,c){return this.bK(a,b,c,B.h)},
dN(a,b,c,d){return this.aI(c,d,new A.ew(b,a))},
d6(a,b,c,d,e){var s=this.f5(b)
if(s===0)return
this.dN(a/s,b,c,d)},
c_(a,b,c){this.ai(B.c.df(b,a-this.aR(b,B.c)))},
aN(a){this.ai(a.t(0,this.Z(B.c)).q(0,new A.d(1,1,1)))},
aP(a,b){var s,r=this,q=r.O(),p=r.L(),o=p.t(0,q)
if(q.E(0,p))throw A.e("Cannot position endpoints of a closed loop")
s=b.t(0,a)
r.bY(Math.sqrt(s.X())/Math.sqrt(o.X()),q)
r.fc(0,s.aH()-o.aH(),q)
r.ai(a.t(0,q))},
ap(a,b){var s,r,q=this.d
q===$&&A.a("submobjects")
s=q.length
r=0
for(;r<q.length;q.length===s||(0,A.c)(q),++r)q[r].ap(a,!0)
this.a=a},
aM(a,b){var s,r,q=this.d
q===$&&A.a("submobjects")
s=q.length
r=0
for(;r<q.length;q.length===s||(0,A.c)(q),++r)q[r].aM(a,!0)},
cP(a){return this.aM(a,!0)},
ag(){var s,r,q,p=A.b([this],t.r),o=this.d
o===$&&A.a("submobjects")
s=o.length
r=0
for(;r<o.length;o.length===s||(0,A.c)(o),++r)B.a.A(p,o[r].ag())
q=A.h5(p,t.j)
return A.f(q,!0,A.F(q).c)},
bS(){var s=this.ag(),r=A.w(s),q=r.h("aC<1>")
return A.f(new A.aC(s,r.h("A(1)").a(new A.er()),q),!0,q.h("n.E"))},
bP(){var s,r,q,p,o=A.b([],t.l)
for(s=this.bS(),r=s.length,q=0;q<s.length;s.length===r||(0,A.c)(s),++q){p=s[q].r
p===$&&A.a("points")
B.a.A(o,p)}return o},
bb(){return this.bP()},
aS(a,b,c){var s,r,q
t.bG.a(c)
if(c==null)c=this.bb()
s=A.b([],t.n)
for(r=c.length,q=0;q<c.length;c.length===r||(0,A.c)(c),++q)s.push(c[q].G(a))
if(b<0)return B.a.Y(s,B.x)
else if(b===0)return(B.a.Y(s,B.x)+B.a.Y(s,B.y))/2
else return B.a.Y(s,B.y)},
dl(a,b){return this.aS(a,b,null)},
Z(a){var s=this,r=s.bb()
if(r.length===0)return B.c
return new A.d(s.aS(0,B.d.aa(a.a),r),s.aS(1,B.d.aa(a.b),r),s.aS(2,B.d.aa(a.c),r))},
f5(a){var s,r,q,p=this.bP()
if(p.length===0)return 1
s=A.w(p)
r=new A.K(p,s.h("l(1)").a(new A.es(a)),s.h("K<1,l>"))
q=r.Y(0,B.x)
return r.Y(0,B.y)-q},
aR(a,b){return this.dl(a,B.d.aa((b==null?B.c:b).G(a)))},
N(){return new A.d(this.aR(0,null),this.aR(1,null),this.aR(2,null))},
O(){this.V("getStart")
var s=this.r
s===$&&A.a("points")
return B.a.gD(s)},
L(){this.V("getEnd")
var s=this.r
s===$&&A.a("points")
return B.a.gF(s)},
gl(a){var s=A.b([],t.r),r=this.r
r===$&&A.a("points")
if(r.length!==0)s.push(this)
r=this.d
r===$&&A.a("submobjects")
B.a.A(s,r)
return s.length},
bf(a){var s=A.b([],t.r),r=this.r
r===$&&A.a("points")
if(r.length!==0)s.push(this)
r=this.d
r===$&&A.a("submobjects")
B.a.A(s,r)
return s},
cC(a){var s,r,q,p,o,n=this,m="points",l="submobjects",k=n.r
k===$&&A.a(m)
if(k.length===0){k=a.r
k===$&&A.a(m)
k=k.length!==0}else k=!1
if(k)a.d3()
k=a.r
k===$&&A.a(m)
if(k.length===0&&n.r.length!==0)n.d3()
s=n.bf(0).length
r=a.bf(0).length
n.cB(Math.max(0,r-s))
a.cB(Math.max(0,s-r))
n.cD(a)
k=n.d
k===$&&A.a(l)
q=a.d
q===$&&A.a(l)
q=new A.V(A.b([k,q],t.ae),t.fk)
q=q.gv(q)
for(;q.m();){p=q.b
if(p==null)p=A.I(A.ak("No element"))
k=p.length
if(0>=k)return A.k(p,0)
o=p[0]
if(1>=k)return A.k(p,1)
o.cC(p[1])}},
bU(){throw A.e("getPointMobject not implemented for "+A.q(this.gdr())+"()")},
cD(a){var s,r,q=this.r
q===$&&A.a("points")
s=q.length
q=a.r
q===$&&A.a("points")
r=q.length
if(s<r)this.cE(a)
else if(s>r)a.cE(this)},
cE(a){throw A.e("Not implemented")},
d3(){var s=this.j(),r=t.r,q=t.a
s.saF(q.a(A.b([],r)))
this.sW(t.y.a(A.b([],t.l)))
this.U(q.a(A.b([s],r)))},
cB(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
if(a2===0)return
s=a1.bf(0).length
if(s===0){r=A.b([],t.r)
for(q=A.u(a2,0,1),p=q.length,o=0;o<q.length;q.length===p||(0,A.c)(q),++o)r.push(a1.bU())
a1.saF(t.a.a(r))}n=s+a2
r=t.t
q=A.b([],r)
for(p=A.u(n,0,1),m=p.length,o=0;o<p.length;p.length===m||(0,A.c)(p),++o){l=p[o]
if(typeof l!=="number")return l.q()
q.push(B.d.ad(l*s,n))}p=A.b([],r)
for(m=A.u(s,0,1),k=m.length,j=t.S,o=0;o<m.length;m.length===k||(0,A.c)(m),++o){i=m[o]
h=A.b([],r)
for(g=q.length,f=J.aG(i),e=0;e<q.length;q.length===g||(0,A.c)(q),++e)if(f.E(i,q[e]))h.push(1)
else h.push(0)
p.push(A.hw(h,j))}d=A.b([],t.r)
r=a1.d
r===$&&A.a("submobjects")
p=new A.V(A.b([r,p],t.Q),t.m)
p=p.gv(p)
r=t.j
for(;p.m();){c=p.b
if(c==null)c=A.I(A.ak("No element"))
q=c.length
if(0>=q)return A.k(c,0)
b=r.a(c[0])
if(1>=q)return A.k(c,1)
a=A.Y(c[1])
B.a.u(d,b)
for(q=A.u(a,1,1),m=q.length,o=0;o<q.length;q.length===m||(0,A.c)(q),++o){a0=b.j()
a0.cP(1)
B.a.u(d,a0)}}a1.saF(t.a.a(d))},
cY(a,b,c){},
aJ(a){var s,r,q,p,o,n,m
this.cC(a)
for(s=new A.V(A.b([this.ag(),a.ag()],t.ae),t.fk),s=s.gv(s),r=t.i,q=t.y;s.m();){p=s.b
if(p==null)p=A.I(A.ak("No element"))
o=p.length
if(0>=o)return A.k(p,0)
n=p[0]
if(1>=o)return A.k(p,1)
m=p[1]
o=m.r
o===$&&A.a("points")
n.sW(q.a(A.f(o,!0,r)))
n.cY(n,m,1)}},
V(a){var s=this.r
s===$&&A.a("points")
if(s.length!==0)return
throw A.e("Cannot call Mobject."+a+" , the mobject doesn't have any points")},
saF(a){this.d=t.a.a(a)},
seb(a){this.e=t.cS.a(a)},
sW(a){this.r=t.y.a(a)}}
A.ev.prototype={
$1(a){return a.B(0,this.a)},
$S:2}
A.eu.prototype={
$1(a){return a.q(0,this.a)},
$S:2}
A.et.prototype={
$1(a){return a.az(this.a)},
$S:2}
A.ew.prototype={
$1(a){var s=this.a
return a.df(s,a.G(s)*this.b)},
$S:2}
A.er.prototype={
$1(a){var s=t.j.a(a).r
s===$&&A.a("points")
return s.length>0},
$S:7}
A.es.prototype={
$1(a){return t.i.a(a).G(this.a)},
$S:29}
A.bQ.prototype={
j(){return A.jn(this)}}
A.x.prototype={
j(){return A.jS(this)},
cW(){var s=this,r=s.ax
if(r==null){r=s.a
r===$&&A.a("color")
r=A.b([r],t.O)}s.dA(r)
r=s.ay
if(r==null){r=s.a
r===$&&A.a("color")
r=A.b([r],t.O)}s.dG(r,s.gM())
s.dz(s.ch,s.x)},
aD(a,b,c){var s,r,q,p,o,n=this
t.x.a(b)
s=t.O
r=A.b([],s)
if(b!=null)B.a.A(r,b)
if(a!=null)r.push(a)
if(c)for(q=n.aT(),p=q.length,o=0;o<q.length;q.length===p||(0,A.c)(q),++o)q[o].c2(r,!1)
if(r.length!==0){if(n.ax==null)n.san(r)
q=n.ax
q.toString
q=J.B(q)
p=r.length
if(q<p){q=n.ax
q.toString
n.san(A.b9(q,p,t.G))}else{q=n.ax
q.toString
if(p<J.B(q)){q=n.ax
q.toString
n.san(A.b9(r,J.B(q),t.G))}}s=A.b([],s)
q=n.ax
q.toString
q=A.u(J.B(q),0,1)
p=q.length
o=0
for(;o<q.length;q.length===p||(0,A.c)(q),++o)s.push(B.a.i(r,q[o]))
n.san(s)}},
c1(a,b){return this.aD(a,null,b)},
c2(a,b){return this.aD(null,a,b)},
dA(a){return this.aD(null,a,!0)},
c0(a){return this.aD(a,null,!0)},
a9(a,b,c,d,e){var s,r,q,p,o,n=this
t.x.a(c)
s=t.O
r=A.b([],s)
if(c!=null)B.a.A(r,c)
if(b!=null)r.push(b)
if(d)for(q=n.aT(),p=q.length,o=0;o<q.length;q.length===p||(0,A.c)(q),++o)q[o].dH(a,r,!1,e)
if(r.length!==0)if(a){if(n.ch==null)n.sau(r)
q=n.ch
q.toString
q=J.B(q)
p=r.length
if(q<p){q=n.ch
q.toString
n.sau(A.b9(q,p,t.G))}else{q=n.ch
q.toString
if(p<J.B(q)){q=n.ch
q.toString
n.sau(A.b9(r,J.B(q),t.G))}}s=A.b([],s)
q=n.ay
q.toString
q=A.u(J.B(q),0,1)
p=q.length
o=0
for(;o<q.length;q.length===p||(0,A.c)(q),++o)s.push(B.a.i(r,q[o]))
n.sac(s)}else{if(n.ay==null)n.sac(r)
q=n.ay
q.toString
q=J.B(q)
p=r.length
if(q<p){q=n.ay
q.toString
n.sac(A.b9(q,p,t.G))}else{q=n.ay
q.toString
if(p<J.B(q)){q=n.ay
q.toString
n.sac(A.b9(r,J.B(q),t.G))}}s=A.b([],s)
q=n.ay
q.toString
q=A.u(J.B(q),0,1)
p=q.length
o=0
for(;o<q.length;q.length===p||(0,A.c)(q),++o)s.push(B.a.i(r,q[o]))
n.sac(s)}if(e!=null)if(a)n.x=e
else n.sM(e)},
c6(a,b){return this.a9(!1,a,null,b,null)},
dH(a,b,c,d){return this.a9(a,null,b,c,d)},
dF(a,b){return this.a9(!1,null,a,b,null)},
dG(a,b){return this.a9(!1,null,a,!0,b)},
c5(a){return this.a9(!1,a,null,!0,null)},
dD(a){return this.a9(!1,null,null,!0,a)},
dE(a,b){return this.a9(!1,a,null,!0,b)},
be(a,b,c,d){return this.a9(!0,a,t.x.a(b),c,d)},
dw(a,b){return this.be(null,a,b,null)},
dz(a,b){return this.be(null,a,!0,b)},
c7(a,b){var s=null,r=t.x,q=r.a(a.d),p=r.a(a.a)
r=r.a(a.b)
this.aD(s,p,b)
this.a9(!1,s,r,b,a.c)
this.be(s,q,b,a.e)
return s},
dI(a){return this.c7(a,!0)},
bQ(){var s=J.T(this.a4(),0)
return s},
ap(a,b){this.c1(a,!0)
this.c6(a,!0)
this.dV(a,!0)},
bF(a,b){var s,r,q="submobjects",p="removeWhere",o=a.a4(),n=a.aC(),m=a.gM(),l=a.a5(!0),k=a.x
this.c7(new A.ch(o,n,m,l,k),!1)
if(b){o=this.d
o===$&&A.a(q)
n=a.d
n===$&&A.a(q)
if(o.length===0)return
else if(n.length===0)s=A.b([a],t.r)
else s=n
n=A.w(o).h("A(1)").a(new A.eU())
if(!!o.fixed$length)A.I(A.a5(p))
B.a.cv(o,n,!0)
n=A.w(s).h("A(1)").a(new A.eV())
if(!!s.fixed$length)A.I(A.a5(p))
B.a.cv(s,n,!0)
for(n=t.j,n=A.l1(o,s,n,n),n=A.ej([n.a,n.b],!1,t.z),n=new A.V(new A.a0(n,A.w(n).h("a0<1,m<x>>")),t.eX),n=n.gv(n);n.m();){r=n.b
if(r==null)r=A.I(A.ak("No element"))
o=r.length
if(0>=o)return A.k(r,0)
m=r[0]
if(1>=o)return A.k(r,1)
m.bF(r[1],!0)}}},
d_(a){return this.bF(a,!0)},
aM(a,b){var s,r,q,p=this,o=1-a,n=t.O,m=A.b([],n)
for(s=J.U(p.a4());s.m();){r=s.gp()
q=r.d
m.push(new A.v(r.a,r.b,r.c,q*o))}p.c2(m,!0)
m=A.b([],n)
for(s=J.U(p.aC());s.m();){r=s.gp()
q=r.d
m.push(new A.v(r.a,r.b,r.c,q*o))}p.dF(m,!0)
n=A.b([],n)
for(m=J.U(p.a5(!0));m.m();){s=m.gp()
r=s.d
n.push(new A.v(s.a,s.b,s.c,r*o))}p.dw(n,!0)
p.dT(a,!0)},
cP(a){return this.aM(a,!0)},
a4(){var s=this.ax
return s==null?A.b([B.j],t.O):s},
a5(a){var s=a?this.ch:this.ay
return s==null||J.cN(s)?A.b([B.j],t.O):s},
aC(){return this.a5(!1)},
dm(){var s,r,q,p,o,n=this.Z(B.c),m=A.b([],t.b)
for(s=[B.k,B.r,B.h],r=t.n,q=0;q<3;++q){p=this.Z(s[q]).t(0,n)
m.push(A.b([p.a,p.b,p.c],r))}o=B.k.az(A.X(null,m).gd9())
return new A.y(n.t(0,o),n.B(0,o),t.hd)},
bd(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=t.y
g.a(a)
g.a(b)
g.a(c)
g.a(d)
s=h.at
r=a.length
q=A.b([],t.l)
for(r=A.u(s*r,0,1),p=r.length,o=0;o<r.length;r.length===p||(0,A.c)(r),++o)q.push(B.c)
h.sW(g.a(q))
n=A.b([a,b,c,d],t.h)
for(g=A.u(s,0,1),r=g.length,q=t.S,o=0;o<g.length;g.length===r||(0,A.c)(g),++o){m=g[o]
l=B.a.i(n,m)
p=h.r
p===$&&A.a("points")
for(p=A.fE(A.u(p.length,m,s),q),k=p.length,j=0;j<p.length;p.length===k||(0,A.c)(p),++j){i=p[j]
B.a.n(h.r,i.b,l[B.e.a8(i.a,l.length)])}}},
cA(a){var s,r,q,p,o,n,m,l=this,k=l.at,j=[]
for(s=A.dH(k,1,0).eV(),r=s.length,q=0;q<s.length;s.length===r||(0,A.c)(s),++q){p=s[q]
o=l.r
o===$&&A.a("points")
j.push(B.a.gF(o).q(0,1-p).B(0,a.q(0,p)))}s=j.length
if(1>=s)return A.k(j,1)
r=t.i
o=r.a(j[1])
if(2>=s)return A.k(j,2)
n=r.a(j[2])
if(3>=s)return A.k(j,3)
j=r.a(j[3])
l.V("addCubicBezierCurveTo")
s=l.r
s===$&&A.a("points")
r=t.l
m=t.y
if(B.e.a8(s.length,k)===1){j=m.a(A.b([o,n,j],r))
B.a.A(l.r,j)}else{j=m.a(A.b([B.a.gF(s),o,n,j],r))
B.a.A(l.r,j)}return null},
ex(a){var s,r
t.y.a(a)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.c)(a),++r)this.cA(a[r])},
c3(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
t.y.a(a)
s=A.dH(this.at,1,0).ab(0)
r=t.i
q=A.hD(A.fU(a,r))
p=A.hD(A.iM(a,r))
r=A.b([],t.aM)
for(o=s.length,n=0;n<s.length;s.length===o||(0,A.c)(s),++n){m=s[n]
r.push(p.q(0,1-m).B(0,q.q(0,m)))}o=A.b([],t.h)
for(l=r.length,k=t.l,n=0;n<r.length;r.length===l||(0,A.c)(r),++n){j=r[n]
i=A.b([],k)
h=j.a
h===$&&A.a("values")
g=h.length
f=0
for(;f<h.length;h.length===g||(0,A.c)(h),++f){e=h[f]
d=J.R(e)
i.push(new A.d(d.i(e,0),d.i(e,1),d.i(e,2)))}o.push(i)}r=o.length
if(0>=r)return A.k(o,0)
l=o[0]
if(1>=r)return A.k(o,1)
k=o[1]
if(2>=r)return A.k(o,2)
i=o[2]
if(3>=r)return A.k(o,3)
this.bd(l,k,i,o[3])},
bX(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=null
for(s=this.aT(),r=s.length,q=t.l,p=t.n,o=t.b,n=this.at,m=0;m<s.length;s.length===r||(0,A.c)(s),++m){l=s[m]
k=l.r
k===$&&A.a("points")
if(k.length<n)continue
j=l.dj()
k=A.b([],o)
if(0>=j.length)return A.k(j,0)
i=j[0]
h=i.length
g=0
for(;g<i.length;i.length===h||(0,A.c)(i),++g){f=i[g]
k.push(A.b([f.a,f.b,f.c],p))}e=A.X(a4,k)
k=A.b([],o)
if(1>=j.length)return A.k(j,1)
i=j[1]
h=i.length
g=0
for(;g<i.length;i.length===h||(0,A.c)(i),++g){f=i[g]
k.push(A.b([f.a,f.b,f.c],p))}d=A.X(a4,k)
k=A.b([],o)
if(2>=j.length)return A.k(j,2)
i=j[2]
h=i.length
g=0
for(;g<i.length;i.length===h||(0,A.c)(i),++g){f=i[g]
k.push(A.b([f.a,f.b,f.c],p))}c=A.X(a4,k)
k=A.b([],o)
if(3>=j.length)return A.k(j,3)
i=j[3]
h=i.length
g=0
for(;g<i.length;i.length===h||(0,A.c)(i),++g){f=i[g]
k.push(A.b([f.a,f.b,f.c],p))}b=A.X(a4,k)
a=d.t(0,e)
a0=c.t(0,b)
k=A.b([],q)
i=a.b
i===$&&A.a("shape")
i=e.B(0,A.b_(a5,i).q(0,a)).a
i===$&&A.a("values")
h=i.length
g=0
for(;g<i.length;i.length===h||(0,A.c)(i),++g){a1=i[g]
a2=J.R(a1)
k.push(new A.d(a2.i(a1,0),a2.i(a1,1),a2.i(a1,2)))}i=A.b([],q)
h=a0.b
h===$&&A.a("shape")
h=b.B(0,A.b_(a5,h).q(0,a0)).a
h===$&&A.a("values")
a2=h.length
g=0
for(;g<h.length;h.length===a2||(0,A.c)(h),++g){a1=h[g]
a3=J.R(a1)
i.push(new A.d(a3.i(a1,0),a3.i(a1,1),a3.i(a1,2)))}h=j.length
if(0>=h)return A.k(j,0)
a2=j[0]
if(3>=h)return A.k(j,3)
l.bd(a2,k,i,j[3])}},
bv(a,b){var s=this.as,r=b.a
if(Math.abs(a.a-r)>s+0.00001*Math.abs(r))return!1
r=b.b
if(Math.abs(a.b-r)>s+0.00001*Math.abs(r))return!1
return!0},
eH(a,b){var s
if(!this.bv(a,b))return!1
s=b.c
if(Math.abs(a.c-s)>this.as+0.00001*Math.abs(s))return!1
return!0},
b7(a){var s,r,q,p,o,n,m,l={}
l.a=a
t.y.a(a)
l.a=a
s=A.ei(a,new A.eP(l,B.e.a8(J.B(a),this.at)),t.i)
l.a=A.f(s,!0,s.$ti.h("n.E"))
s=A.b([],t.dm)
for(r=A.u(J.B(l.a),0,4),q=r.length,p=t.bl,o=0;o<r.length;r.length===q||(0,A.c)(r),++o){n=r[o]
m=l.a
if(typeof n!=="number")return n.B()
s.push(new A.bi(J.T(m,n+0),J.T(l.a,n+1),J.T(l.a,n+2),J.T(l.a,n+3),p))}return s},
cr(a,b){var s,r,q,p,o,n,m,l,k
t.y.a(a)
t.fT.a(b)
s=this.at
r=A.u(a.length,s,s)
q=A.w(r)
q=A.f(new A.aC(r,q.h("A(1)").a(b),q.h("aC<1>")),!0,t.S)
q.push(a.length)
r=A.b([0],t.t)
B.a.A(r,q)
p=A.b([],t.h)
for(r=new A.V(A.b([r,q],t.gL),t.eN),r=r.gv(r),q=A.w(a),o=q.c,q=q.h("aq<1>");r.m();){n=r.b
if(n==null)n=A.I(A.ak("No element"))
if(1>=n.length)return A.k(n,1)
m=n[1]
l=n[0]
if(typeof m!=="number")return m.t()
if(typeof l!=="number")return A.cJ(l)
if(m-l>=s){A.Y(l)
A.Y(m)
A.bf(l,m,a.length)
k=new A.aq(a,l,m,q)
k.bh(a,l,m,o)
p.push(k.R(0))}}return p},
bV(a){t.y.a(a)
return this.cr(a,new A.eR(this,a))},
du(a){t.y.a(a)
return this.cr(a,new A.eQ(this,a))},
aO(a){var s,r,q,p,o=this.r
o===$&&A.a("points")
s=this.at
r=A.ht(0,B.e.ad(o.length,s),a)
q=r.a
o=this.r
p=s*q
s*=q+1
A.bf(p,s,o.length)
return A.hl(A.cd(o,p,s,A.w(o).c).R(0)).$1(r.b)},
dj(){var s,r,q,p=A.b([],t.h)
for(s=A.u(this.at,0,1),r=s.length,q=0;q<s.length;s.length===r||(0,A.c)(s),++q)p.push(this.bo(s[q]))
return p},
bo(a){var s=this.r
s===$&&A.a("points")
s=A.ei(s,new A.eL(this,a),t.i)
return A.f(s,!0,s.$ti.h("n.E"))},
di(){var s=this,r=s.r
r===$&&A.a("points")
if(r.length===1)return r
r=t.eR
r=A.hO(A.f(new A.V(A.b([s.bo(0),s.bo(s.at-1)],t.h),r),!0,r.h("n.E")),t.i)
return A.f(r,!0,r.$ti.h("n.E"))},
bb(){var s,r,q,p=A.b([],t.l)
for(s=this.aT(),r=s.length,q=0;q<s.length;s.length===r||(0,A.c)(s),++q)B.a.A(p,s[q].di())
return p},
cD(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1="points"
t.dT.a(a2)
a0.ez(a2)
s=a0.r
s===$&&A.a(a1)
s=s.length
r=a2.r
r===$&&A.a(a1)
if(s===r.length)return
for(s=[a0,a2],r=t.l,q=t.y,p=0;p<2;++p){o=s[p]
n=o.r
n===$&&A.a(a1)
if(n.length===0){n=q.a(A.b([o.Z(B.c)],r))
B.a.A(o.r,n)}n=o.r
if(B.e.a8(n.length,o.at)===1)o.cA(B.a.gF(n))}s=t.i
m=a0.bV(A.f(a0.r,!0,s))
l=a2.bV(A.f(a2.r,!0,s))
k=Math.max(m.length,l.length)
j=A.b([],r)
i=A.b([],r)
h=a0.at
g=new A.eO(h)
for(s=A.u(k,0,1),r=s.length,p=0;p<s.length;s.length===r||(0,A.c)(s),++p){f=s[p]
e=g.$2(m,f)
d=g.$2(l,f)
n=J.aa(d)
c=J.aa(e)
b=Math.max(0,B.e.ad(n.gl(d)-c.gl(e),h))
a=Math.max(0,B.e.ad(c.gl(e)-n.gl(d),h))
e=a0.cX(b,e)
d=a0.cX(a,d)
B.a.A(j,e)
B.a.A(i,d)}a0.sW(q.a(j))
a2.sW(q.a(i))},
cX(a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6="No element"
t.y.a(a8)
if(a8.length===1){s=A.b([],t.l)
for(r=A.u(this.at*a7,0,1),q=r.length,p=0;p<r.length;r.length===q||(0,A.c)(r),++p)B.a.A(s,a8)
return s}o=this.b7(a8)
n=o.length
m=n+a7
s=t.t
r=A.b([],s)
for(q=A.u(m,0,1),l=q.length,p=0;p<q.length;q.length===l||(0,A.c)(q),++p){k=q[p]
if(typeof k!=="number")return k.q()
r.push(B.d.ad(k*n,m))}q=A.b([],s)
for(l=A.u(n,0,1),j=l.length,i=t.S,p=0;p<l.length;l.length===j||(0,A.c)(l),++p){k=l[p]
h=A.b([],s)
for(g=r.length,f=J.aG(k),e=0;e<r.length;r.length===g||(0,A.c)(r),++e)h.push(f.E(k,r[e])?1:0)
q.push(A.hw(h,i))}d=A.b([],t.l)
for(s=new A.V(A.b([o,q],t.Q),t.m),s=s.gv(s),r=t.V,q=t.b,l=t.ca,j=t.z,i=t.bl;s.m();){c=s.b
if(c==null)c=A.I(A.ak(a6))
h=c.length
if(0>=h)return A.k(c,0)
b=i.a(c[0])
if(1>=h)return A.k(c,1)
a=A.dH(A.Y(c[1])+1,1,0).ab(0)
for(h=new A.V(A.b([a,A.fU(a,r)],q),l),h=h.gv(h),g=b.a,f=b.b,a0=b.c,a1=b.d;h.m();){a2=h.b
if(a2==null)a2=A.I(A.ak(a6))
a3=A.ej([g,f,a0,a1],!1,j)
a4=a2.length
if(0>=a4)return A.k(a2,0)
a5=a2[0]
if(1>=a4)return A.k(a2,1)
B.a.A(d,A.fP(new A.a0(a3,A.w(a3).h("a0<1,d>")),a5,a2[1]))}}return d},
ez(a){var s,r,q,p,o,n,m,l,k=new A.eM(),j=new A.eN()
for(s=["fillColors","strokeColors","backgroundStrokeColors"],r=t.G,q=0;q<3;++q){p=s[q]
o=k.$2(p,this)
n=k.$2(p,a)
m=J.aa(o)
l=J.aa(n)
if(m.gl(o)>l.gl(n))j.$3(p,a,A.b9(n,m.gl(o),r))
else if(l.gl(n)>m.gl(o))j.$3(p,this,A.b9(o,l.gl(n),r))}},
bU(){var s=null,r=this.Z(B.c),q=new A.ci(0.01,0.01,4,0,!1,0.01,!1,0.000001,4,s,s,s,B.b,$,s,$,$,$)
q.S(B.b,s,s)
q.sW(t.y.a(A.b([r],t.l)))
q.d_(this)
return q},
cY(a,b,c){var s,r=this,q=t.dT
q.a(a)
q.a(b)
r.san(A.hu(a.a4(),b.a4(),c))
r.sac(A.hu(a.aC(),b.aC(),c))
r.sau(A.hu(a.a5(!0),b.a5(!0),c))
q=t.V
r.sM(A.iD(a.gM(),b.gM(),c,q))
r.seD(A.iD(a.x,b.x,c,q))
s=new A.eT()
if(c===1){q=b.ax
r.san(q!=null?s.$1(q):null)
q=b.ay
r.sac(q!=null?s.$1(q):null)
q=b.ch
r.sau(q!=null?s.$1(q):null)
r.sM(b.gM())
r.x=b.x}},
d2(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e="points"
if(b<=0&&c>=1){s=a.r
s===$&&A.a(e)
f.sW(t.y.a(A.f(s,!0,t.i)))
return}s=a.r
s===$&&A.a(e)
r=t.y
q=a.b7(r.a(A.f(s,!0,t.i)))
p=q.length
o=A.ht(0,p,b)
n=A.ht(0,p,c)
m=o.a
l=o.b
k=n.a
j=n.b
f.sW(r.a(A.b([],t.l)))
if(p===0)return
s=q.length
if(m===k){if(m>>>0!==m||m>=s)return A.k(q,m)
s=J.dK(q[m])
s=r.a(A.fP(new A.a0(s,A.w(s).h("a0<1,d>")),l,j))
r=f.r
r===$&&A.a(e)
B.a.A(r,s)}else{if(m>>>0!==m||m>=s)return A.k(q,m)
s=J.dK(q[m])
s=r.a(A.fP(new A.a0(s,A.w(s).h("a0<1,d>")),l,1))
i=f.r
i===$&&A.a(e)
B.a.A(i,s)
for(s=m+1,A.bf(s,k,q.length),s=A.cd(q,s,k,A.w(q).c),i=s.$ti,s=new A.a4(s,s.gl(s),i.h("a4<C.E>")),h=t.z,i=i.h("C.E");s.m();){g=s.d
if(g==null)g=i.a(g)
g=A.ej([g.a,g.b,g.c,g.d],!1,h)
g=r.a(new A.a0(g,A.w(g).h("a0<1,d>")))
B.a.A(f.r,g)}if(k>>>0!==k||k>=q.length)return A.k(q,k)
s=J.dK(q[k])
s=r.a(A.fP(new A.a0(s,A.w(s).h("a0<1,d>")),0,j))
B.a.A(f.r,s)}},
aT(){var s,r,q,p,o=A.b([],t.U)
for(s=this.ag(),r=s.length,q=0;q<s.length;s.length===r||(0,A.c)(s),++q){p=s[q]
if(p instanceof A.x)o.push(p)}return o},
sM(a){this.w=A.aE(a)},
seD(a){this.x=A.aE(a)},
san(a){this.ax=t.x.a(a)},
sac(a){this.ay=t.x.a(a)},
sau(a){this.ch=t.x.a(a)},
gM(){return this.w},
gaY(){return this.y}}
A.N.prototype={
$1(a){return t.G.a(a).j()},
$S:3}
A.O.prototype={
$1(a){return t.G.a(a).j()},
$S:3}
A.P.prototype={
$1(a){return t.G.a(a).j()},
$S:3}
A.eU.prototype={
$1(a){return!(t.j.a(a) instanceof A.x)},
$S:7}
A.eV.prototype={
$1(a){return!(t.j.a(a) instanceof A.x)},
$S:7}
A.eP.prototype={
$2(a,b){t.i.a(b)
return a<J.B(this.a.a)-this.b},
$S:13}
A.eR.prototype={
$1(a){var s,r,q
A.Y(a)
s=this.b
r=a-1
q=s.length
if(!(r>=0&&r<q))return A.k(s,r)
r=s[r]
if(!(a>=0&&a<q))return A.k(s,a)
return!this.a.eH(r,s[a])},
$S:12}
A.eQ.prototype={
$1(a){var s,r,q
A.Y(a)
s=this.b
r=a-1
q=s.length
if(!(r>=0&&r<q))return A.k(s,r)
r=s[r]
if(!(a>=0&&a<q))return A.k(s,a)
return!this.a.bv(r,s[a])},
$S:12}
A.eL.prototype={
$2(a,b){t.i.a(b)
return B.e.a8(a,this.a.at)===this.b},
$S:13}
A.eO.prototype={
$2(a,b){var s,r,q,p
t.dF.a(a)
s=a.length
if(b>=s){s=A.b([],t.l)
for(r=A.u(this.a,0,1),q=r.length,p=0;p<r.length;r.length===q||(0,A.c)(r),++p)s.push(B.a.gF(B.a.gF(a)))
return s}if(!(b>=0))return A.k(a,b)
return a[b]},
$S:33}
A.eM.prototype={
$2(a,b){switch(a){case"fillColors":return b.a4()
case"strokeColors":return b.aC()
case"backgroundStrokeColors":return b.a5(!1)
default:throw A.e(u.b+a)}},
$S:34}
A.eN.prototype={
$3(a,b,c){t.W.a(c)
switch(a){case"fillColors":b.san(c)
break
case"strokeColors":b.sac(c)
break
case"backgroundStrokeColors":b.sau(c)
break
default:throw A.e(u.b+a)}},
$S:35}
A.eT.prototype={
$1(a){var s=t.G
return A.f(J.o(t.W.a(a),new A.eS(),s),!0,s)},
$S:45}
A.eS.prototype={
$1(a){return t.G.a(a).j()},
$S:3}
A.ch.prototype={}
A.aT.prototype={
cb(a){var s=a==null?A.b([],t.r):a
this.U(t.a.a(s))},
j(){return A.jR(this)}}
A.ci.prototype={
j(){return A.jT(this)}}
A.bG.prototype={
e_(a,b,c,d){var s,r,q,p,o,n,m,l
if(c>0){s=1/c
r=s*d
q=A.dH(c+1,1,0).a3(0,1).t(0,s).B(0,r).ab(0)
p=A.b([],t.r)
for(o=q.length,n=0;n<q.length;q.length===o||(0,A.c)(q),++n){m=q[n]
if(typeof m!=="number")return m.B()
l=a.j()
l.d2(a,m,m+r)
p.push(l)}this.U(t.a.a(p))}this.bF(a,!1)},
j(){return A.jh(this)}}
A.bv.prototype={
dJ(a){this.d=a}}
A.cU.prototype={
bI(a){var s,r,q=this.d
q===$&&A.a("display")
s=q.b
s===$&&A.a("camera")
r=q.aX(a)
q=this.e
q===$&&A.a("ctx")
B.m.sbA(q,r.aQ())
q=s.c
s=s.d
this.e.fillRect(0-q/2,0-s/2,q,s)},
fa(a){var s,r,q,p,o,n,m,l,k=this,j=a.r
j===$&&A.a("points")
j=t.y.a(A.f(j,!0,t.i))
s=k.d
s===$&&A.a("display")
s=s.b
s===$&&A.a("camera")
r=s.d8(a,j)
if(r.length===0)return
q=a.du(r)
for(j=q.length,p="",o=0;o<q.length;q.length===j||(0,A.c)(q),++o)p+=k.dv(a,q[o])
n=A.jC(p)
k.cF(n,a,!0)
m=a.a4()
if(J.B(m)>1){j=k.e
j===$&&A.a("ctx")
B.m.sbA(j,k.cM(a,m))}else{l=k.d.aX(J.T(a.a4(),0))
j=k.e
j===$&&A.a("ctx")
B.m.sbA(j,l.aQ())}j=k.e
j===$&&A.a("ctx")
j.fill(n)
k.cF(n,a,!1)},
dv(a,b){var s,r,q,p,o,n,m,l,k,j
t.y.a(b)
s=a.b7(b)
r=J.R(b)
q=r.gD(b)
p="M "+A.q(q.a)+" "+A.q(q.b)
o=a.bv(r.gD(b),r.gF(b))
for(r=s.length,n=0;n<r;++n){m=s[n]
l=m.b
k=m.c
j=m.d
p+=" C "+A.q(l.a)+" "+A.q(l.b)+" "+A.q(k.a)+" "+A.q(k.b)+" "+A.q(j.a)+" "+A.q(j.b)}return o?p+" Z":p},
cM(a,b){var s,r,q,p,o,n,m,l,k,j,i
t.W.a(b)
s=a.dm()
r=t.y.a(A.b([s.a,s.b],t.l))
q=this.d
q===$&&A.a("display")
q=q.b
q===$&&A.a("camera")
p=q.d8(a,r)
r=this.e
r===$&&A.a("ctx")
q=p.length
if(0>=q)return A.k(p,0)
o=p[0]
n=o.a
o=o.b
if(1>=q)return A.k(p,1)
q=p[1]
q=r.createLinearGradient(n,o,q.a,q.b)
q.toString
o=J.aa(b)
m=1/(o.gl(b)-1)
l=A.hk(m+1,0,m).ab(0)
for(r=A.u(o.gl(b),0,1),n=r.length,k=0;k<r.length;r.length===n||(0,A.c)(r),++k){j=r[k]
i=this.d.aX(o.i(b,j))
q.addColorStop(B.a.i(l,j),i.aQ())}return q},
cF(a,b,c){var s,r,q,p,o,n=this,m=c?b.x:b.gM()
if(m===0)return
s=b.a5(c)
r=n.d
r===$&&A.a("display")
r=r.b
r===$&&A.a("camera")
r=r.c
q=n.e
q===$&&A.a("ctx")
q.lineWidth=m*0.01*(r/14.222222222222221)
r=J.R(s)
p=r.b0(s,new A.e5())
if(r.gT(s)||p)return
if(r.gl(s)>1)B.m.sc8(n.e,n.cM(b,s))
else{o=n.d.aX(J.dJ(b.a5(c)))
B.m.sc8(n.e,o.aQ())}B.m.dO(n.e,a)}}
A.e5.prototype={
$1(a){return t.G.a(a).d===0},
$S:37}
A.eE.prototype={
e3(){this.f=new A.e2(B.V)
new A.dy().e4(0)
this.scd(t.a.a(A.b([],t.r)))},
aA(){var s=0,r=A.cG(t.z),q=1,p,o=this,n,m,l,k
var $async$aA=A.cI(function(a,b){if(a===1){p=b
s=q}while(true)switch(s){case 0:l=o.w
l===$&&A.a("display")
l.bs()
s=2
return A.b7(null,$async$aA)
case 2:q=4
s=7
return A.b7(o.aK(),$async$aA)
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
l===$&&A.a("camera")
m=l.r
m===$&&A.a("display")
m=m.a
m===$&&A.a("renderer")
m.bI(l.f)
l=o.f
m=o.d
m===$&&A.a("mobjects")
l.d5(m)
s=8
return A.b7(null,$async$aA)
case 8:o.w.fj()
return A.cC(null,r)
case 1:return A.cB(p,r)}})
return A.cD($async$aA,r)},
fk(a){var s,r,q=this.d
q===$&&A.a("mobjects")
s=q.length
r=0
for(;r<q.length;q.length===s||(0,A.c)(q),++r)q[r].da(a)},
U(a){var s,r,q=this,p=t.a
p.a(a)
s=A.f(a,!0,t.j)
r=q.f
r===$&&A.a("camera")
B.a.A(s,r.cO(a))
r=q.d
r===$&&A.a("mobjects")
q.scd(p.a(q.ds(r,s)))
B.a.f0(q.d,0,a)},
ds(a,b){var s,r=t.a
r.a(a)
r.a(b)
s=A.b([],t.r)
new A.eF(s).$2(a,A.h5(b,A.w(b).c))
return s},
b6(){var s=0,r=A.cG(t.z),q=this,p,o,n,m
var $async$b6=A.cI(function(a,b){if(a===1)return A.cB(b,r)
while(true)switch(s){case 0:p=0
case 2:if(!(p<1)){s=3
break}o=q.w
o===$&&A.a("display")
s=4
return A.b7(o.b5(),$async$b6)
case 4:n=b
p+=n
q.fk(n)
o=q.f
o===$&&A.a("camera")
m=o.r
m===$&&A.a("display")
m=m.a
m===$&&A.a("renderer")
m.bI(o.f)
o=q.f
m=q.d
m===$&&A.a("mobjects")
o.d5(m)
q.a+=n
s=2
break
case 3:return A.cC(null,r)}})
return A.cD($async$b6,r)},
aZ(){var s=0,r=A.cG(t.z),q=this
var $async$aZ=A.cI(function(a,b){if(a===1)return A.cB(b,r)
while(true)switch(s){case 0:case 2:if(!!0){s=3
break}s=4
return A.b7(q.b6(),$async$aZ)
case 4:s=2
break
case 3:return A.cC(null,r)}})
return A.cD($async$aZ,r)},
scd(a){this.d=t.a.a(a)}}
A.eF.prototype={
$2(a,b){var s,r,q,p,o,n
t.a.a(a)
t.bA.a(b)
for(s=a.length,r=this.a,q=0;q<a.length;a.length===s||(0,A.c)(a),++q){p=a[q]
if(b.aj(0,p))continue
o=p.ag()
n=b.f3(0,A.h5(o,A.w(o).c))
if(n.a!==0){o=p.d
o===$&&A.a("submobjects")
this.$2(o,n)}else B.a.u(r,p)}},
$S:38}
A.fT.prototype={
$2(a,b){var s=this.a
return s.a(s.a(a)+s.a(b))},
$S(){return this.a.h("0(0,0)")}}
A.fS.prototype={
$1(a){return A.Y(a)/this.a*this.b},
$S:39}
A.fV.prototype={
$2(a,b){this.a.a(b)
return a!==0},
$S(){return this.a.h("A(r,0)")}}
A.fK.prototype={
$1(a){return t.G.a(a).R(0)},
$S:10}
A.fL.prototype={
$1(a){return t.G.a(a).R(0)},
$S:10}
A.fM.prototype={
$1(a){var s
t.p.a(a)
s=J.R(a)
return new A.v(s.i(a,0),s.i(a,1),s.i(a,2),s.i(a,3))},
$S:41}
A.fy.prototype={
$1(a){var s,r,q,p,o,n,m,l=A.b([],t.l)
for(s=A.fE(this.a,t.i),r=s.length,q=1-a,p=this.b,o=0;o<s.length;s.length===r||(0,A.c)(s),++o){n=s[o]
m=n.a
if(typeof m!=="number")return A.cJ(m)
l.push(J.cM(n.b,Math.pow(q,p-m)*Math.pow(a,m)*A.ix(p,m,!0)))}return B.a.Y(l,new A.fx())},
$S:15}
A.fx.prototype={
$2(a,b){var s=t.i
return s.a(a).B(0,s.a(b))},
$S:42}
A.v.prototype={
j(){var s=this
return new A.v(s.a,s.b,s.c,s.d)},
R(a){var s=this,r=A.b([s.a,s.b,s.c],t.n)
r.push(s.d)
return r},
aQ(){var s=this
return"rgba("+B.d.aa(s.a*255)+", "+B.d.aa(s.b*255)+", "+B.d.aa(s.c*255)+", "+A.q(s.d)+")"},
k(a){return this.aQ()}}
A.fs.prototype={
$1(a){return A.kW(a,16)/255},
$S:43}
A.bb.prototype={
E(a,b){var s,r=this
if(b==null)return!1
if(!(b instanceof A.bb&&r.a===b.a&&r.b===b.b))s=typeof b=="number"&&r.a===b&&r.b===0
else s=!0
return s}}
A.am.prototype={
k(a){return"EventType."+this.b}}
A.ac.prototype={}
A.eb.prototype={
gak(){var s=this.a
s===$&&A.a("eventListeners")
return s},
e0(){var s,r,q=A.h4(t.en,t.gF)
for(s=t.aE,r=0;r<6;++r)q.n(0,B.a0[r],A.b([],s))
this.sea(t.cH.a(q))},
ar(a,b,c){var s,r,q
A.fz(c,t.e,"IEvent","_dispatchOnListnersList")
c.a(a)
s=A.f(c.h("m<ad<0>>").a(b),!0,c.h("ad<0>"))
r=!1
while(!0){if(!(!r&&s.length!==0))break
q=B.a.gF(s)
B.a.f8(s,q)
q.$ti.c.a(a)
r=q.a.$1(a)}},
b_(a){var s,r=this
switch(a.a){case B.v:t.gt.a(a)
s=r.gak().i(0,B.v)
s.toString
r.ar(a,s,t.e)
break
case B.o:t.N.a(a)
s=r.gak().i(0,B.o)
s.toString
r.ar(a,s,t.e)
break
case B.p:t.D.a(a)
s=r.gak().i(0,B.p)
s.toString
r.ar(a,s,t.e)
break
case B.q:t.w.a(a)
s=r.gak().i(0,B.q)
s.toString
r.ar(a,s,t.e)
break
case B.A:t.fw.a(a)
s=r.gak().i(0,B.A)
s.toString
r.ar(a,s,t.e)
break
case B.B:t.bf.a(a)
s=r.gak().i(0,B.B)
s.toString
r.ar(a,s,t.e)
break}},
sea(a){this.a=t.cH.a(a)}}
A.ad.prototype={}
A.d8.prototype={}
A.c1.prototype={}
A.aM.prototype={}
A.aN.prototype={}
A.aL.prototype={}
A.ex.prototype={}
A.fA.prototype={
$2(a,b){return A.Y(a)*A.Y(b)},
$S:9}
A.fB.prototype={
$2(a,b){return A.Y(a)*A.Y(b)},
$S:9}
A.al.prototype={
B(a,b){var s,r
if(typeof b=="number"){s=this.b
s===$&&A.a("shape")
r=A.b_(b,s)}else{t.A.a(b)
r=b}return this.ao(0,new A.dV(r))},
t(a,b){var s,r
if(typeof b=="number"){s=this.b
s===$&&A.a("shape")
r=A.b_(b,s)}else{t.A.a(b)
r=b}return this.ao(0,new A.dY(r))},
q(a,b){var s,r
if(typeof b=="number"){s=this.b
s===$&&A.a("shape")
r=A.b_(b,s)}else{t.A.a(b)
r=b}return this.ao(0,new A.dX(r))},
a3(a,b){var s,r=this.b
r===$&&A.a("shape")
s=A.b_(b,r)
return this.ao(0,new A.dW(s))},
ao(a,b){var s,r,q
t.fA.a(b)
s=this.a
s===$&&A.a("values")
s=A.fE(s,t.p)
r=A.w(s)
q=r.h("K<1,m<l>>")
q=A.f(new A.K(s,r.h("m<l>(1)").a(new A.dU(b)),q),!0,q.h("C.E"))
r=this.b
r===$&&A.a("shape")
return A.X(r,q)},
a6(a){var s,r
t.o.a(a)
s=a.a
r=this.a
r===$&&A.a("values")
if(s>>>0!==s||s>=r.length)return A.k(r,s)
return J.T(r[s],a.b)},
ev(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.b
e===$&&A.a("shape")
s=e.a
if(typeof s!=="number")return s.t()
e=e.b
if(typeof e!=="number")return e.t()
r=A.b([],t.b)
for(q=A.u(f.b.a,0,1),p=q.length,o=t.n,n=0;n<q.length;q.length===p||(0,A.c)(q),++n){m=q[n]
if(!J.ab(m,a)){l=A.b([],o)
for(k=A.u(f.b.a,0,1),j=k.length,i=0;i<k.length;k.length===j||(0,A.c)(k),++i){h=k[i]
if(!J.ab(h,b)){g=f.a
g===$&&A.a("values")
l.push(J.T(B.a.i(g,m),h))}}r.push(l)}}return A.X(new A.y(s-1,e-1,t.o),r)},
bR(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.b
h===$&&A.a("shape")
if(J.ab(h.a,2)){h=i.a
h===$&&A.a("values")
if(0>=h.length)return A.k(h,0)
s=J.T(h[0],0)
h=i.a
if(0>=h.length)return A.k(h,0)
r=J.T(h[0],1)
h=i.a
if(1>=h.length)return A.k(h,1)
q=J.T(h[1],0)
h=i.a
if(1>=h.length)return A.k(h,1)
return s*J.T(h[1],1)-r*q}h=i.b
p=h.a
if(typeof p!=="number")return p.t()
h=h.b
if(typeof h!=="number")return h.t()
o=new A.y(p-1,h-1,t.o)
h=A.b([],t.n)
for(p=A.u(i.b.a,0,1),n=p.length,m=0;m<p.length;p.length===n||(0,A.c)(p),++m){l=p[m]
if(typeof l!=="number")return l.a8()
k=B.d.a8(l,2)===0?1:-1
j=i.a
j===$&&A.a("values")
if(0>=j.length)return A.k(j,0)
h.push(k*A.b_(J.T(j[0],l),o).q(0,i.ev(0,l)).bR())}return A.hw(h,t.V)},
dn(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8="values"
if(this.bR()===0)throw A.e("This matrix is not inversible")
s=this.b
s===$&&A.a("shape")
r=s.a
q=s.b
p=this.j()
o=A.fY(r)
for(s=A.u(q,0,1),n=s.length,m=r-1,l=q-1,k=t.o,j=0;j<s.length;s.length===n||(0,A.c)(s),++j){i=s[j]
for(h=i,g=-1,f=-1;h!==r;++h){k.a(new A.y(h,i,k))
e=p.a
e===$&&A.a(a8)
if(!(h>=0&&h<e.length))return A.k(e,h)
d=J.T(e[h],i)
if(d>f){f=d
g=h}}e=p.a
e===$&&A.a(a8)
c=e.length
if(!(g>=0&&g<c))return A.k(e,g)
b=e[g]
if(i>>>0!==i||i>=c)return A.k(e,i)
e[g]=e[i]
B.a.n(e,i,b)
e=o.a
e===$&&A.a(a8)
c=e.length
if(!(g<c))return A.k(e,g)
a=e[g]
if(i>>>0!==i||i>=c)return A.k(e,i)
e[g]=e[i]
B.a.n(e,i,a)
e=J.R(b)
a0=e.i(b,i)
for(a1=i;a1<q;++a1){c=e.i(b,a1)
if(typeof c!=="number")return c.a3()
e.n(b,a1,c/a0)}for(c=J.R(a),a1=l;a1>=0;--a1){a2=c.i(a,a1)
if(typeof a2!=="number")return a2.a3()
c.n(a,a1,a2/a0)}for(a1=i+1,g=m;g>=0;--g)if(g!==i){a2=p.a
if(!(g<a2.length))return A.k(a2,g)
a3=a2[g]
a2=o.a
if(!(g<a2.length))return A.k(a2,g)
a4=a2[g]
a2=J.R(a3)
a0=a2.i(a3,i)
for(a5=a1;a5!==q;++a5){a6=a2.i(a3,a5)
a7=e.i(b,a5)
if(typeof a7!=="number")return a7.q()
if(typeof a6!=="number")return a6.t()
a2.n(a3,a5,a6-a7*a0)}for(a2=J.R(a4),a5=l;a5>0;--a5){a6=a2.i(a4,a5)
a7=c.i(a,a5)
if(typeof a7!=="number")return a7.q()
if(typeof a6!=="number")return a6.t()
a2.n(a4,a5,a6-a7*a0);--a5
a7=a2.i(a4,a5)
a6=c.i(a,a5)
if(typeof a6!=="number")return a6.q()
if(typeof a7!=="number")return a7.t()
a2.n(a4,a5,a7-a6*a0)}if(a5===0){a6=a2.i(a4,0)
a7=c.i(a,0)
if(typeof a7!=="number")return a7.q()
if(typeof a6!=="number")return a6.t()
a2.n(a4,0,a6-a7*a0)}}}return o},
ab(a){var s,r,q=this.a
q===$&&A.a("values")
s=A.w(q)
r=s.h("K<1,l>")
return A.f(new A.K(q,s.h("l(1)").a(new A.dS(a)),r),!0,r.h("C.E"))},
gd9(){return this.ao(0,new A.dZ(this))},
az(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1="values",a2=this.b
a2===$&&A.a("shape")
s=a2.a
r=a2.b
a2=a3.b
a2===$&&A.a("shape")
q=a2.b
p=A.b_(0,new A.y(s,q,t.o))
for(a2=A.u(s,0,1),o=a2.length,n=0;n<a2.length;a2.length===o||(0,A.c)(a2),++n){m=a2[n]
for(l=A.u(q,0,1),k=l.length,j=0;j<l.length;l.length===k||(0,A.c)(l),++j){i=l[j]
for(h=A.u(r,0,1),g=h.length,f=0;f<h.length;h.length===g||(0,A.c)(h),++f){e=h[f]
d=p.a
d===$&&A.a(a1)
d=B.a.i(d,m)
c=J.R(d)
b=c.i(d,i)
a=this.a
a===$&&A.a(a1)
a=J.T(B.a.i(a,m),e)
a0=a3.a
a0===$&&A.a(a1)
a0=J.T(B.a.i(a0,e),i)
if(typeof a!=="number")return a.q()
if(typeof a0!=="number")return A.cJ(a0)
if(typeof b!=="number")return b.B()
c.n(d,i,b+a*a0)}}}return p},
j(){return this.eB(new A.dR())},
eB(a){return this.ao(0,new A.dQ(t.ao.a(a)))},
eV(){var s,r,q,p=A.b([],t.n),o=this.a
o===$&&A.a("values")
s=o.length
r=0
for(;r<o.length;o.length===s||(0,A.c)(o),++r)for(q=J.U(o[r]);q.m();)p.push(q.gp())
return p},
k(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.b
b===$&&A.a("shape")
b=A.q(b.a)
s=A.q(c.b.b)
r=A.b([],t.t)
q=c.a
q===$&&A.a("values")
p=q.length
o=0
for(;o<q.length;q.length===p||(0,A.c)(q),++o)for(n=J.U(q[o]);n.m();)r.push(B.d.bN(n.gp(),6).length)
m=B.a.bB(r,6,B.M,t.S)
for(r=c.a,q=r.length,p=m+4,n=t.s,l="",o=0;o<r.length;r.length===q||(0,A.c)(r),++o){l+="      "
for(k=J.U(r[o]);k.m();){j=k.gp()
i=j<0?"-":" "
j=Math.abs(j)
h=B.d.bN(j,6)
g=A.b([],n)
for(h=A.u(p-h.length,0,1),f=h.length,e=0;e<h.length;h.length===f||(0,A.c)(h),++e)g.push(" ")
d=B.a.f4(g)
l=l+i+B.d.bN(j,6)+d}l+="\n"}return b+"x"+s+" matrix\n"+l},
se6(a){this.b=t.o.a(a)}}
A.dV.prototype={
$2(a,b){return a+this.a.a6(t.o.a(b))},
$S:1}
A.dY.prototype={
$2(a,b){return a-this.a.a6(t.o.a(b))},
$S:1}
A.dX.prototype={
$2(a,b){return a*this.a.a6(t.o.a(b))},
$S:1}
A.dW.prototype={
$2(a,b){return a/this.a.a6(t.o.a(b))},
$S:1}
A.dU.prototype={
$1(a){var s,r,q
t.fz.a(a)
s=A.fE(a.b,t.V)
r=A.w(s)
q=r.h("K<1,l>")
return A.f(new A.K(s,r.h("l(1)").a(new A.dT(this.a,a)),q),!0,q.h("C.E"))},
$S:46}
A.dT.prototype={
$1(a){t.d.a(a)
return this.a.$2(a.b,new A.y(this.b.a,a.a,t.o))},
$S:47}
A.dS.prototype={
$1(a){return J.T(t.p.a(a),this.a)},
$S:48}
A.dZ.prototype={
$2(a,b){var s=t.o
s.a(b)
return this.a.a6(new A.y(b.b,b.a,s))},
$S:1}
A.dR.prototype={
$1(a){return a},
$S:6}
A.dQ.prototype={
$2(a,b){t.o.a(b)
return this.a.$1(a)},
$S:1}
A.fR.prototype={
$2(a,b){var s=t.A
return s.a(a).az(s.a(b))},
$S:50}
A.d.prototype={
E(a,b){if(b==null)return!1
return b instanceof A.d&&this.a===b.a&&this.b===b.b&&this.c===b.c},
B(a,b){var s=this
if(typeof b=="number")return new A.d(s.a+b,s.b+b,s.c+b)
else if(b instanceof A.d)return new A.d(s.a+b.a,s.b+b.b,s.c+b.c)
else throw A.e("Vector3 only support addition by num or Vector3")},
t(a,b){return new A.d(this.a-b.a,this.b-b.b,this.c-b.c)},
q(a,b){var s=this
if(typeof b=="number")return new A.d(s.a*b,s.b*b,s.c*b)
else if(b instanceof A.d)return new A.d(s.a*b.a,s.b*b.b,s.c*b.c)
else throw A.e("Vector3 only support multiplication by num or Vector3")},
a3(a,b){return new A.d(this.a/b,this.b/b,this.c/b)},
X(){var s=this.a,r=this.b,q=this.c
return s*s+r*r+q*q},
G(a){switch(a){case 0:return this.a
case 1:return this.b
case 2:return this.c
default:throw A.e("No component at index "+a+" on a vector3")}},
fi(){var s=t.n
s=A.X(null,A.b([A.b([this.a],s),A.b([this.b],s),A.b([this.c],s)],t.b))
return s},
bO(a,b,c){var s=a==null?this.a:a,r=b==null?this.b:b
return new A.d(s,r,c==null?this.c:c)},
fo(a){return this.bO(a,null,null)},
fp(a){return this.bO(null,a,null)},
dg(a){return this.bO(null,null,a)},
df(a,b){if(a===0)return this.fo(b)
else if(a===1)return this.fp(b)
else if(a===2)return this.dg(b)
else throw A.e("Cannot index a vector3 with index="+a)},
az(a){var s=A.fY(3).ao(0,new A.eW(a)).az(this.fi()),r=t.o
return new A.d(s.a6(new A.y(0,0,r)),s.a6(new A.y(1,0,r)),s.a6(new A.y(2,0,r)))},
cN(a){return this.a*a.a+this.b*a.b+this.c*a.c},
aH(){var s=this.a
if(s===0&&this.b===0)return 0
return Math.atan2(this.b,s)},
k(a){return"vec3("+A.q(this.a)+", "+A.q(this.b)+", "+A.q(this.c)+")"}}
A.eW.prototype={
$2(a,b){var s,r,q,p
t.o.a(b)
s=b.a
r=this.a
q=r.b
q===$&&A.a("shape")
p=q.a
if(typeof s!=="number")return s.dh()
if(typeof p!=="number")return A.cJ(p)
if(s<p){s=b.b
q=q.b
if(typeof s!=="number")return s.dh()
if(typeof q!=="number")return A.cJ(q)
q=s>=q
s=q}else s=!0
return s?a:r.a6(b)},
$S:1}
A.y.prototype={
k(a){return"["+A.q(this.a)+", "+A.q(this.b)+"]"},
E(a,b){if(b==null)return!1
return b instanceof A.y&&J.ab(b.a,this.a)&&J.ab(b.b,this.b)},
gH(a){return A.da(J.a8(this.a),J.a8(this.b),B.l,B.l)}}
A.bi.prototype={
R(a){var s=this
return A.ej([s.a,s.b,s.c,s.d],!1,t.z)},
k(a){var s=this
return"["+s.a.k(0)+", "+s.b.k(0)+", "+s.c.k(0)+", "+s.d.k(0)+"]"},
E(a,b){var s=this
if(b==null)return!1
return b instanceof A.bi&&b.a.E(0,s.a)&&b.b.E(0,s.b)&&b.c.E(0,s.c)&&b.d.E(0,s.d)},
gH(a){var s=this
return A.da(A.aO(s.a),A.aO(s.b),A.aO(s.c),A.aO(s.d))}}
A.em.prototype={
aK(){var s=0,r=A.cG(t.z),q=this,p
var $async$aK=A.cI(function(a,b){if(a===1)return A.cB(b,r)
while(true)switch(s){case 0:p=q.f
p===$&&A.a("camera")
p.f=A.ki("#191919")
s=2
return A.b7(q.bw(),$async$aK)
case 2:q.f6()
s=3
return A.b7(q.aZ(),$async$aK)
case 3:return A.cC(null,r)}})
return A.cD($async$aK,r)},
bw(){var s=0,r=A.cG(t.z),q=this,p,o,n,m,l,k,j,i
var $async$bw=A.cI(function(a,b){if(a===1)return A.cB(b,r)
while(true)switch(s){case 0:i=A.hE(A.cS(null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null),11,-1,A.cS(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,0.7),11,-1)
q.as=i
i=i.bT(new A.en(),10,0.2)
i.c5(B.n)
q.ax=i
i=A.hE(A.cS(null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null),11,-1,A.cS(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,0.7),11,-1)
q.at=i
i=i.bT(new A.eo(),10,0.2)
i.c5(B.z)
q.ay=i
i=A.bJ(new A.d(-6,0,0),B.b)
i.ah(B.G)
q.x=i
q.y=A.bJ(new A.d(0,0,0),B.n)
q.z=A.bJ(new A.d(0,0,0),B.z)
i=q.x.N()
q.Q=A.hK(B.H,q.z.N(),i)
i=A.i2(q.ax,0.5,B.b,1)
q.ch=i
p=t.r
o=A.hN(A.b([q.ax,q.as,i],p))
o.bc(0.4)
o.aN(B.t.q(0,2).B(0,B.u.q(0,0)))
n=A.hN(A.b([q.at,q.ay],p))
n.bc(0.4)
n.aN(B.r.q(0,2).B(0,B.u.q(0,0)))
i=q.ax
i.V("getStart")
i=i.r
i===$&&A.a("points")
q.scc(t.y.a(A.b([new A.d(B.a.gD(i).G(0),q.as.aL(q.x.N()).G(1),0)],t.l)))
i=q.ax.r
i===$&&A.a("points")
m=i.length
l=0
for(;l<i.length;i.length===m||(0,A.c)(i),++l){k=i[l]
j=q.ax.r
j===$&&A.a("points")
if(B.e.a8(B.a.eZ(j,k),10)===0){j=q.CW
j===$&&A.a("vertices")
B.a.u(j,k)}}A.fQ("end")
i=q.CW
i===$&&A.a("vertices")
A.fQ(i.length)
q.U(A.b([q.x,o,q.Q,q.y,n,q.z],p))
return A.cC(null,r)}})
return A.cD($async$bw,r)},
f6(){var s,r=this,q=r.x
q===$&&A.a("slider")
s=new A.bK($,$,$,!1,q,B.b,$,null,$,$,$)
s.S(B.b,null,null)
s.e1(q)
r.U(t.a.a(A.b([s],t.r)))
s=r.x
q=t.he.a(new A.eq(r))
B.a.u(s.gdd(),q)
s.da(0)},
scc(a){this.CW=t.y.a(a)}}
A.en.prototype={
$1(a){var s=A.aE(a)-5
return Math.pow(s,3)/8-2*s+5},
$S:6}
A.eo.prototype={
$1(a){return 3*(Math.pow(A.aE(a)-5,2)/8)-2},
$S:6}
A.eq.prototype={
$2(a,b){var s,r,q,p,o,n,m,l,k,j,i,h="points",g="getStart"
t.j.a(a)
A.aE(b)
s=this.a
r=s.x
r===$&&A.a("slider")
r=r.N().G(0)
q=s.ax
q===$&&A.a("graph")
q.V("getEnd")
q=q.r
q===$&&A.a(h)
if(r>B.a.gF(q).G(0)){r=s.x
q=s.ax
q.V("getEnd")
q=q.r
q===$&&A.a(h)
r.c_(B.a.gF(q).G(0),0,null)}r=s.x.N().G(0)
q=s.ax
q.V(g)
q=q.r
q===$&&A.a(h)
if(r<B.a.gD(q).G(0)){r=s.x
q=s.ax
q.V(g)
q=q.r
q===$&&A.a(h)
r.c_(B.a.gD(q).G(0),0,null)}r=s.x.N().G(0)
q=s.as
q===$&&A.a("axes")
a.aJ(A.bJ(new A.d(r,q.aL(B.c).G(1),0),B.G))
p=s.as.d0(s.x.N()).G(0)
q=s.ax.I.$1(p)
o=s.as.aL(new A.d(p,q,0))
q=s.y
q===$&&A.a("Corresponding")
q.aJ(A.bJ(o,B.n))
q=s.at
q===$&&A.a("axesDerivative")
n=q.d0(s.x.N()).G(0)
q=s.ay
q===$&&A.a("graph2")
q=q.I.$1(n)
m=s.at.aL(new A.d(n,q,0))
q=s.z
q===$&&A.a("derivativePoint")
q.aJ(A.bJ(m,B.z))
q=s.x.N()
l=A.hK(B.H,s.z.N(),q)
q=s.Q
q===$&&A.a("line")
q.aJ(l)
A.fQ("ha")
k=A.b([],t.l)
q=s.CW
q===$&&A.a("vertices")
B.a.A(k,q)
r=B.a.gF(s.CW).G(0)
q=s.x.N().G(0)
j=s.CW
if(r>q){B.a.f9(j,B.a.f_(j,new A.ep(s)),s.CW.length)
B.a.u(s.CW,s.y.N())
B.a.u(s.CW,s.x.N())}else B.a.u(j,s.x.N())
r=s.CW.length
q=k.length
i=A.i2(s.ax,(r-3)/q,B.n,1.7)
q=s.ch
q===$&&A.a("tangent")
q.aJ(i)
A.fQ(B.n)
s.scc(t.y.a(k))
return a},
$S:51}
A.ep.prototype={
$1(a){var s=t.i.a(a).G(0),r=this.a.x
r===$&&A.a("slider")
return s>r.N().G(0)},
$S:17};(function aliases(){var s=J.bS.prototype
s.dQ=s.k
s=J.b2.prototype
s.dR=s.k
s=A.z.prototype
s.dW=s.k
s=A.bh.prototype
s.dX=s.L
s.dY=s.O
s=A.p.prototype
s.dS=s.aI
s.dU=s.aP
s.dV=s.ap
s.dT=s.aM
s.ca=s.O
s.c9=s.L
s=A.x.prototype
s.dZ=s.ap
s=A.bv.prototype
s.dP=s.dJ})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installStaticTearOff,o=hunkHelpers._instance_0u
s(J,"kq","jr",52)
r(A,"kL","jV",5)
r(A,"kM","jW",5)
r(A,"kN","jX",5)
q(A,"iw","kE",0)
p(A,"l2",2,null,["$1$2","$2"],["iG",function(a,b){return A.iG(a,b,t.H)}],11,0)
p(A,"iE",2,null,["$1$2","$2"],["iF",function(a,b){return A.iF(a,b,t.H)}],11,0)
o(A.p.prototype,"gdr","ba",54)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.z,null)
q(A.z,[A.h2,J.bS,J.bx,A.n,A.bD,A.G,A.a1,A.eG,A.a4,A.E,A.bN,A.eJ,A.ey,A.bO,A.cr,A.bd,A.eh,A.bZ,A.d5,A.dx,A.di,A.fl,A.ap,A.dv,A.dC,A.fm,A.dq,A.bl,A.bm,A.bA,A.ds,A.b5,A.Q,A.dr,A.cb,A.cc,A.dA,A.cx,A.cz,A.dw,A.b6,A.ae,A.c8,A.f1,A.ca,A.f4,A.ec,A.M,A.dB,A.dh,A.h_,A.dy,A.b4,A.cp,A.e2,A.bu,A.p,A.a_,A.ch,A.bv,A.eE,A.v,A.bb,A.ac,A.eb,A.ad,A.ex,A.al,A.d,A.y,A.bi])
q(J.bS,[J.d3,J.bV,J.an,J.t,J.aJ,J.ay])
q(J.an,[J.b2,A.a2,A.bC,A.e7,A.bH,A.i,A.db])
q(J.b2,[J.dc,J.au,J.aK])
r(J.eg,J.t)
q(J.aJ,[J.bU,J.d4])
q(A.n,[A.aU,A.D,A.b3,A.aC,A.aA,A.bT])
q(A.aU,[A.b1,A.cy])
r(A.cm,A.b1)
r(A.ck,A.cy)
r(A.a0,A.ck)
q(A.G,[A.bX,A.aS,A.d6,A.dm,A.dd,A.bz,A.du,A.d9,A.av,A.dn,A.dl,A.bg,A.cX,A.cZ])
q(A.a1,[A.cV,A.bR,A.cW,A.dj,A.fF,A.fH,A.eZ,A.eY,A.fq,A.f9,A.fh,A.eH,A.fk,A.eX,A.f3,A.ee,A.e3,A.e4,A.dL,A.dM,A.dN,A.ez,A.eA,A.e6,A.eB,A.ed,A.e8,A.e9,A.ea,A.ev,A.eu,A.et,A.ew,A.er,A.es,A.N,A.O,A.P,A.eU,A.eV,A.eR,A.eQ,A.eN,A.eT,A.eS,A.e5,A.fS,A.fK,A.fL,A.fM,A.fy,A.fs,A.dU,A.dT,A.dS,A.dR,A.en,A.eo,A.ep])
q(A.cV,[A.fO,A.f_,A.f0,A.fn,A.f5,A.fd,A.fb,A.f7,A.fc,A.f6,A.fg,A.ff,A.fe,A.eI,A.fv,A.fj])
q(A.D,[A.C,A.bM,A.bY])
q(A.C,[A.aq,A.K,A.az])
r(A.bL,A.b3)
q(A.E,[A.c0,A.cj,A.c9])
r(A.bc,A.aA)
r(A.aI,A.bR)
r(A.c2,A.aS)
q(A.dj,[A.dg,A.ba])
r(A.dp,A.bz)
r(A.c_,A.bd)
r(A.bW,A.c_)
q(A.cW,[A.fG,A.fr,A.fw,A.fa,A.ek,A.e1,A.eP,A.eL,A.eO,A.eM,A.eF,A.fT,A.fV,A.fx,A.fA,A.fB,A.dV,A.dY,A.dX,A.dW,A.dZ,A.dQ,A.fR,A.eW,A.eq])
r(A.cu,A.du)
q(A.bT,[A.ct,A.V])
r(A.cs,A.ds)
r(A.dz,A.cx)
r(A.cq,A.cz)
r(A.aD,A.cq)
q(A.av,[A.c5,A.d1])
q(A.a2,[A.a9,A.bj])
q(A.a9,[A.h,A.as])
r(A.j,A.h)
q(A.j,[A.cQ,A.cR,A.b0,A.d0,A.de])
r(A.ar,A.i)
r(A.af,A.ar)
r(A.cl,A.bH)
r(A.cn,A.cb)
r(A.dt,A.cn)
r(A.co,A.cc)
r(A.cP,A.bu)
r(A.cT,A.cP)
q(A.p,[A.x,A.d2,A.bQ])
q(A.x,[A.bh,A.aT,A.c3,A.c4,A.ci,A.bG])
q(A.bh,[A.S,A.bw])
q(A.S,[A.be,A.bF,A.ce])
r(A.cY,A.aT)
r(A.bB,A.cY)
r(A.bP,A.c3)
r(A.cf,A.ch)
q(A.f1,[A.dk,A.am])
r(A.bE,A.bw)
r(A.bI,A.bE)
r(A.c6,A.c4)
r(A.cg,A.c6)
r(A.by,A.cg)
r(A.bK,A.d2)
r(A.cU,A.bv)
r(A.d8,A.ac)
q(A.d8,[A.c1,A.aM,A.aN,A.aL])
r(A.em,A.eE)
s(A.cy,A.ae)
s(A.cz,A.c8)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{r:"int",l:"double",J:"num",W:"String",A:"bool",M:"Null",m:"List"},mangledNames:{},types:["~()","l(l,y<r,r>)","d(d)","v(v)","~(af)","~(~())","l(l)","A(p)","M()","r(r,r)","m<l>(v)","0^(0^,0^)<J>","A(r)","A(r,d)","M(@)","d(l)","S(S)","A(d)","aj<M>()","m<p>(p)","@(W)","a_(a_,a_)","A(l)","~(i)","A(aL)","A(aM)","A(aN)","M(@,aP)","~(J)","l(d)","~(z?,z?)","Q<@>(@)","M(z,aP)","m<d>(m<m<d>>,@)","m<v>(W,x)","~(W,x,m<v>)","~(r,@)","A(v)","~(m<p>,c7<p>)","l(r)","@(@,W)","v(m<l>)","d(d,d)","l(W)","~(@)","m<v>(m<v>)","m<l>(y<r,m<l>>)","l(y<r,l>)","l(m<l>)","@(@)","al(al,al)","p(p,l)","r(@,@)","M(~())","W()"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.ka(v.typeUniverse,JSON.parse('{"dc":"b2","au":"b2","aK":"b2","lg":"i","ln":"i","ls":"h","lh":"j","lt":"j","lo":"a9","ll":"a9","lu":"af","lj":"ar","li":"as","lw":"as","d3":{"A":[]},"bV":{"M":[]},"t":{"m":["1"],"D":["1"],"n":["1"]},"eg":{"t":["1"],"m":["1"],"D":["1"],"n":["1"]},"bx":{"E":["1"]},"aJ":{"l":[],"J":[],"aw":["J"]},"bU":{"l":[],"r":[],"J":[],"aw":["J"]},"d4":{"l":[],"J":[],"aw":["J"]},"ay":{"W":[],"aw":["W"],"eC":[]},"aU":{"n":["2"]},"bD":{"E":["2"]},"b1":{"aU":["1","2"],"n":["2"],"n.E":"2"},"cm":{"b1":["1","2"],"aU":["1","2"],"D":["2"],"n":["2"],"n.E":"2"},"ck":{"ae":["2"],"m":["2"],"aU":["1","2"],"D":["2"],"n":["2"]},"a0":{"ck":["1","2"],"ae":["2"],"m":["2"],"aU":["1","2"],"D":["2"],"n":["2"],"n.E":"2","ae.E":"2"},"bX":{"G":[]},"D":{"n":["1"]},"C":{"D":["1"],"n":["1"]},"aq":{"C":["1"],"D":["1"],"n":["1"],"C.E":"1","n.E":"1"},"a4":{"E":["1"]},"b3":{"n":["2"],"n.E":"2"},"bL":{"b3":["1","2"],"D":["2"],"n":["2"],"n.E":"2"},"c0":{"E":["2"]},"K":{"C":["2"],"D":["2"],"n":["2"],"C.E":"2","n.E":"2"},"aC":{"n":["1"],"n.E":"1"},"cj":{"E":["1"]},"aA":{"n":["1"],"n.E":"1"},"bc":{"aA":["1"],"D":["1"],"n":["1"],"n.E":"1"},"c9":{"E":["1"]},"bM":{"D":["1"],"n":["1"],"n.E":"1"},"bN":{"E":["1"]},"az":{"C":["1"],"D":["1"],"n":["1"],"C.E":"1","n.E":"1"},"bR":{"a1":[],"ax":[]},"aI":{"a1":[],"ax":[]},"c2":{"aS":[],"G":[]},"d6":{"G":[]},"dm":{"G":[]},"cr":{"aP":[]},"a1":{"ax":[]},"cV":{"a1":[],"ax":[]},"cW":{"a1":[],"ax":[]},"dj":{"a1":[],"ax":[]},"dg":{"a1":[],"ax":[]},"ba":{"a1":[],"ax":[]},"dd":{"G":[]},"dp":{"G":[]},"bW":{"bd":["1","2"],"d7":["1","2"]},"bY":{"D":["1"],"n":["1"],"n.E":"1"},"bZ":{"E":["1"]},"d5":{"eC":[]},"dx":{"el":[]},"di":{"el":[]},"fl":{"E":["el"]},"du":{"G":[]},"cu":{"aS":[],"G":[]},"Q":{"aj":["1"]},"bm":{"E":["1"]},"ct":{"n":["1"],"n.E":"1"},"bA":{"G":[]},"cs":{"ds":["1"]},"cx":{"i6":[]},"dz":{"cx":[],"i6":[]},"aD":{"c8":["1"],"c7":["1"],"D":["1"],"n":["1"]},"b6":{"E":["1"]},"bT":{"n":["1"]},"c_":{"bd":["1","2"],"d7":["1","2"]},"bd":{"d7":["1","2"]},"cq":{"c8":["1"],"c7":["1"],"D":["1"],"n":["1"]},"l":{"J":[],"aw":["J"]},"r":{"J":[],"aw":["J"]},"m":{"D":["1"],"n":["1"]},"J":{"aw":["J"]},"c7":{"D":["1"],"n":["1"]},"W":{"aw":["W"],"eC":[]},"bz":{"G":[]},"aS":{"G":[]},"d9":{"G":[]},"av":{"G":[]},"c5":{"G":[]},"d1":{"G":[]},"dn":{"G":[]},"dl":{"G":[]},"bg":{"G":[]},"cX":{"G":[]},"ca":{"G":[]},"cZ":{"G":[]},"dB":{"aP":[]},"af":{"i":[]},"j":{"h":[],"a2":[]},"cQ":{"h":[],"a2":[]},"cR":{"h":[],"a2":[]},"b0":{"h":[],"a2":[]},"as":{"a2":[]},"bH":{"h8":["J"]},"h":{"a2":[]},"d0":{"h":[],"a2":[]},"a9":{"a2":[]},"de":{"h":[],"a2":[]},"ar":{"i":[]},"bj":{"a2":[]},"cl":{"h8":["J"]},"cn":{"cb":["1"]},"dt":{"cn":["1"],"cb":["1"]},"co":{"cc":["1"]},"dy":{"jG":[]},"V":{"n":["m<1>"],"n.E":"m<1>"},"cp":{"E":["m<1>"]},"cP":{"bu":[]},"cT":{"bu":[]},"be":{"S":[],"x":[],"p":[]},"cY":{"aT":[],"x":[],"p":[]},"bB":{"aT":[],"x":[],"p":[]},"c3":{"x":[],"p":[]},"bP":{"x":[],"p":[]},"S":{"x":[],"p":[]},"cf":{"ch":[]},"bh":{"x":[],"p":[]},"bw":{"x":[],"p":[]},"bE":{"x":[],"p":[]},"bI":{"x":[],"p":[]},"bF":{"S":[],"x":[],"p":[]},"ce":{"S":[],"x":[],"p":[]},"c4":{"x":[],"p":[]},"c6":{"x":[],"p":[]},"cg":{"x":[],"p":[]},"by":{"x":[],"p":[]},"d2":{"p":[]},"bK":{"p":[]},"bQ":{"p":[]},"x":{"p":[]},"aT":{"x":[],"p":[]},"ci":{"x":[],"p":[]},"bG":{"x":[],"p":[]},"cU":{"bv":[]},"aM":{"ac":[]},"aN":{"ac":[]},"aL":{"ac":[]},"d8":{"ac":[]},"c1":{"ac":[]}}'))
A.k9(v.typeUniverse,JSON.parse('{"cy":2,"bT":1,"c_":2,"cq":1,"cz":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",b:"No color list in VMobject with attribute name "}
var t=(function rtii(){var s=A.bs
return{dq:s("@<r>"),A:s("al"),u:s("bA"),dK:s("a_"),gA:s("b0"),G:s("v"),e8:s("aw<@>"),X:s("D<@>"),Y:s("G"),L:s("i"),gc:s("ad<ac>"),gl:s("ad<aL>"),c3:s("ad<aM>"),eL:s("ad<aN>"),en:s("am"),e:s("ac"),Z:s("ax"),v:s("aj<@>"),bL:s("aI<l>"),fk:s("V<p>"),m:s("V<z>"),eX:s("V<x>"),eR:s("V<d>"),ca:s("V<l>"),eN:s("V<r>"),hf:s("n<@>"),aM:s("t<al>"),f_:s("t<a_>"),O:s("t<v>"),bN:s("t<bb>"),aE:s("t<ad<ac>>"),aW:s("t<S>"),ae:s("t<m<p>>"),Q:s("t<m<z>>"),h:s("t<m<d>>"),b:s("t<m<l>>"),gL:s("t<m<r>>"),r:s("t<p>"),db:s("t<cc<@>>"),s:s("t<W>"),dm:s("t<bi<d,d,d,d>>"),U:s("t<x>"),l:s("t<d>"),n:s("t<l>"),gn:s("t<@>"),t:s("t<r>"),eM:s("t<p(p,l)>"),T:s("bV"),cj:s("aK"),fw:s("lq"),bf:s("lr"),f:s("S"),W:s("m<v>"),gF:s("m<ad<ac>>"),dF:s("m<m<d>>"),a:s("m<p>"),y:s("m<d>"),p:s("m<l>"),aH:s("m<@>"),cS:s("m<p(p,l)>"),cH:s("d7<am,m<ad<ac>>>"),j:s("p"),he:s("p(p,l)"),w:s("aL"),E:s("af"),gt:s("c1"),N:s("aM"),D:s("aN"),P:s("M"),f4:s("be"),K:s("z"),q:s("b4<J>"),eU:s("h8<J>"),bA:s("c7<p>"),k:s("aP"),aw:s("W"),e3:s("aq<d>"),hd:s("y<d,d>"),d:s("y<r,l>"),o:s("y<r,r>"),fz:s("y<r,m<l>>"),bl:s("bi<d,d,d,d>"),eK:s("aS"),ak:s("au"),dT:s("x"),i:s("d"),cD:s("d(d)"),do:s("dt<af>"),ck:s("Q<M>"),c:s("Q<@>"),fJ:s("Q<r>"),dL:s("Q<J>"),g4:s("cs<J>"),cJ:s("A"),al:s("A(z)"),fT:s("A(r)"),V:s("l"),fA:s("l(l,y<r,r>)"),ao:s("l(l)"),z:s("@"),fO:s("@()"),I:s("@(z)"),C:s("@(z,aP)"),S:s("r"),cF:s("0&*"),_:s("z*"),eH:s("aj<M>?"),x:s("m<v>?"),g2:s("m<S>?"),bG:s("m<d>?"),R:s("z?"),F:s("b5<@,@>?"),g:s("dw?"),B:s("@(i)?"),g5:s("~()?"),H:s("J"),J:s("~"),M:s("~()"),c4:s("~(J)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.F=A.b0.prototype
B.m=A.bC.prototype
B.W=J.bS.prototype
B.a=J.t.prototype
B.e=J.bU.prototype
B.d=J.aJ.prototype
B.i=J.ay.prototype
B.X=J.aK.prototype
B.Y=J.an.prototype
B.J=J.dc.prototype
B.C=J.au.prototype
B.a4=A.bj.prototype
B.u=new A.d(-1,0,0)
B.K=new A.a_(null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.I=new A.v(0.73333,0.73333,0.73333,1)
B.t=new A.d(0,-1,0)
B.Z=A.b(s([0]),t.n)
B.L=new A.a_(B.I,!0,!1,B.t,1,!0,0.1,1,null,B.Z,!1,null,2,0,0.75,0.25,0.25,0.25,null,4)
B.w=new A.a_(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.y=new A.aI(A.iE(),t.bL)
B.M=new A.aI(A.iE(),A.bs("aI<r>"))
B.x=new A.aI(A.l2(),t.bL)
B.N=new A.bN(A.bs("bN<0&>"))
B.D=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.O=function() {
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
B.T=function(getTagFallback) {
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
B.P=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.Q=function(hooks) {
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
B.S=function(hooks) {
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
B.R=function(hooks) {
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
B.E=function(hooks) { return hooks; }

B.l=new A.eG()
B.f=new A.dz()
B.U=new A.dB()
B.j=new A.v(0,0,0,0)
B.V=new A.v(0,0,0,1)
B.z=new A.v(1,1,0,1)
B.b=new A.v(1,1,1,1)
B.G=new A.v(0.51373,0.75686,0.40392,1)
B.H=new A.v(0.3451,0.76863,0.86667,1)
B.n=new A.v(1,0.52549,0.18431,1)
B.v=new A.am("mouseMovedEvent")
B.o=new A.am("mousePressedEvent")
B.p=new A.am("mouseReleasedEvent")
B.q=new A.am("mouseDraggedEvent")
B.A=new A.am("keyPressedEvent")
B.B=new A.am("keyReleasedEvent")
B.a6=A.b(s([]),t.r)
B.a_=A.b(s([]),t.n)
B.a0=A.b(s([B.v,B.o,B.p,B.q,B.A,B.B]),A.bs("t<am>"))
B.a1=new A.dk("Start")
B.a2=new A.dk("End")
B.a3=A.ld("z")
B.c=new A.d(0,0,0)
B.h=new A.d(0,0,1)
B.r=new A.d(0,1,0)
B.k=new A.d(1,0,0)
B.a5=new A.bl(null,2)})();(function staticFields(){$.fi=null
$.hV=null
$.hH=null
$.hG=null
$.iB=null
$.iv=null
$.iJ=null
$.fD=null
$.fI=null
$.hs=null
$.bo=null
$.cE=null
$.cF=null
$.hi=!1
$.H=B.f
$.ah=A.b([],A.bs("t<z>"))
$.dF=A.h4(t.S,A.bs("d7<r,r>"))})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"lk","iN",()=>A.kQ("_$dart_dartClosure"))
s($,"lU","hy",()=>B.f.d7(new A.fO(),A.bs("aj<M>")))
s($,"lx","iO",()=>A.aB(A.eK({
toString:function(){return"$receiver$"}})))
s($,"ly","iP",()=>A.aB(A.eK({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"lz","iQ",()=>A.aB(A.eK(null)))
s($,"lA","iR",()=>A.aB(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"lD","iU",()=>A.aB(A.eK(void 0)))
s($,"lE","iV",()=>A.aB(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"lC","iT",()=>A.aB(A.i3(null)))
s($,"lB","iS",()=>A.aB(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"lG","iX",()=>A.aB(A.i3(void 0)))
s($,"lF","iW",()=>A.aB(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"lH","hx",()=>A.jU())
s($,"lS","fW",()=>A.iH(B.a3))
r($,"lm","bt",()=>{var q=new A.eb()
q.e0()
return q})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({CanvasGradient:J.an,DOMError:J.an,MediaError:J.an,NavigatorUserMediaError:J.an,OverconstrainedError:J.an,PositionError:J.an,GeolocationPositionError:J.an,HTMLAudioElement:A.j,HTMLBRElement:A.j,HTMLBaseElement:A.j,HTMLBodyElement:A.j,HTMLButtonElement:A.j,HTMLContentElement:A.j,HTMLDListElement:A.j,HTMLDataElement:A.j,HTMLDataListElement:A.j,HTMLDetailsElement:A.j,HTMLDialogElement:A.j,HTMLDivElement:A.j,HTMLEmbedElement:A.j,HTMLFieldSetElement:A.j,HTMLHRElement:A.j,HTMLHeadElement:A.j,HTMLHeadingElement:A.j,HTMLHtmlElement:A.j,HTMLIFrameElement:A.j,HTMLImageElement:A.j,HTMLInputElement:A.j,HTMLLIElement:A.j,HTMLLabelElement:A.j,HTMLLegendElement:A.j,HTMLLinkElement:A.j,HTMLMapElement:A.j,HTMLMediaElement:A.j,HTMLMenuElement:A.j,HTMLMetaElement:A.j,HTMLMeterElement:A.j,HTMLModElement:A.j,HTMLOListElement:A.j,HTMLObjectElement:A.j,HTMLOptGroupElement:A.j,HTMLOptionElement:A.j,HTMLOutputElement:A.j,HTMLParagraphElement:A.j,HTMLParamElement:A.j,HTMLPictureElement:A.j,HTMLPreElement:A.j,HTMLProgressElement:A.j,HTMLQuoteElement:A.j,HTMLScriptElement:A.j,HTMLShadowElement:A.j,HTMLSlotElement:A.j,HTMLSourceElement:A.j,HTMLSpanElement:A.j,HTMLStyleElement:A.j,HTMLTableCaptionElement:A.j,HTMLTableCellElement:A.j,HTMLTableDataCellElement:A.j,HTMLTableHeaderCellElement:A.j,HTMLTableColElement:A.j,HTMLTableElement:A.j,HTMLTableRowElement:A.j,HTMLTableSectionElement:A.j,HTMLTemplateElement:A.j,HTMLTextAreaElement:A.j,HTMLTimeElement:A.j,HTMLTitleElement:A.j,HTMLTrackElement:A.j,HTMLUListElement:A.j,HTMLUnknownElement:A.j,HTMLVideoElement:A.j,HTMLDirectoryElement:A.j,HTMLFontElement:A.j,HTMLFrameElement:A.j,HTMLFrameSetElement:A.j,HTMLMarqueeElement:A.j,HTMLElement:A.j,HTMLAnchorElement:A.cQ,HTMLAreaElement:A.cR,HTMLCanvasElement:A.b0,CanvasRenderingContext2D:A.bC,CDATASection:A.as,CharacterData:A.as,Comment:A.as,ProcessingInstruction:A.as,Text:A.as,DOMException:A.e7,DOMRectReadOnly:A.bH,MathMLElement:A.h,SVGAElement:A.h,SVGAnimateElement:A.h,SVGAnimateMotionElement:A.h,SVGAnimateTransformElement:A.h,SVGAnimationElement:A.h,SVGCircleElement:A.h,SVGClipPathElement:A.h,SVGDefsElement:A.h,SVGDescElement:A.h,SVGDiscardElement:A.h,SVGEllipseElement:A.h,SVGFEBlendElement:A.h,SVGFEColorMatrixElement:A.h,SVGFEComponentTransferElement:A.h,SVGFECompositeElement:A.h,SVGFEConvolveMatrixElement:A.h,SVGFEDiffuseLightingElement:A.h,SVGFEDisplacementMapElement:A.h,SVGFEDistantLightElement:A.h,SVGFEFloodElement:A.h,SVGFEFuncAElement:A.h,SVGFEFuncBElement:A.h,SVGFEFuncGElement:A.h,SVGFEFuncRElement:A.h,SVGFEGaussianBlurElement:A.h,SVGFEImageElement:A.h,SVGFEMergeElement:A.h,SVGFEMergeNodeElement:A.h,SVGFEMorphologyElement:A.h,SVGFEOffsetElement:A.h,SVGFEPointLightElement:A.h,SVGFESpecularLightingElement:A.h,SVGFESpotLightElement:A.h,SVGFETileElement:A.h,SVGFETurbulenceElement:A.h,SVGFilterElement:A.h,SVGForeignObjectElement:A.h,SVGGElement:A.h,SVGGeometryElement:A.h,SVGGraphicsElement:A.h,SVGImageElement:A.h,SVGLineElement:A.h,SVGLinearGradientElement:A.h,SVGMarkerElement:A.h,SVGMaskElement:A.h,SVGMetadataElement:A.h,SVGPathElement:A.h,SVGPatternElement:A.h,SVGPolygonElement:A.h,SVGPolylineElement:A.h,SVGRadialGradientElement:A.h,SVGRectElement:A.h,SVGScriptElement:A.h,SVGSetElement:A.h,SVGStopElement:A.h,SVGStyleElement:A.h,SVGElement:A.h,SVGSVGElement:A.h,SVGSwitchElement:A.h,SVGSymbolElement:A.h,SVGTSpanElement:A.h,SVGTextContentElement:A.h,SVGTextElement:A.h,SVGTextPathElement:A.h,SVGTextPositioningElement:A.h,SVGTitleElement:A.h,SVGUseElement:A.h,SVGViewElement:A.h,SVGGradientElement:A.h,SVGComponentTransferFunctionElement:A.h,SVGFEDropShadowElement:A.h,SVGMPathElement:A.h,Element:A.h,AbortPaymentEvent:A.i,AnimationEvent:A.i,AnimationPlaybackEvent:A.i,ApplicationCacheErrorEvent:A.i,BackgroundFetchClickEvent:A.i,BackgroundFetchEvent:A.i,BackgroundFetchFailEvent:A.i,BackgroundFetchedEvent:A.i,BeforeInstallPromptEvent:A.i,BeforeUnloadEvent:A.i,BlobEvent:A.i,CanMakePaymentEvent:A.i,ClipboardEvent:A.i,CloseEvent:A.i,CustomEvent:A.i,DeviceMotionEvent:A.i,DeviceOrientationEvent:A.i,ErrorEvent:A.i,ExtendableEvent:A.i,ExtendableMessageEvent:A.i,FetchEvent:A.i,FontFaceSetLoadEvent:A.i,ForeignFetchEvent:A.i,GamepadEvent:A.i,HashChangeEvent:A.i,InstallEvent:A.i,MediaEncryptedEvent:A.i,MediaKeyMessageEvent:A.i,MediaQueryListEvent:A.i,MediaStreamEvent:A.i,MediaStreamTrackEvent:A.i,MessageEvent:A.i,MIDIConnectionEvent:A.i,MIDIMessageEvent:A.i,MutationEvent:A.i,NotificationEvent:A.i,PageTransitionEvent:A.i,PaymentRequestEvent:A.i,PaymentRequestUpdateEvent:A.i,PopStateEvent:A.i,PresentationConnectionAvailableEvent:A.i,PresentationConnectionCloseEvent:A.i,ProgressEvent:A.i,PromiseRejectionEvent:A.i,PushEvent:A.i,RTCDataChannelEvent:A.i,RTCDTMFToneChangeEvent:A.i,RTCPeerConnectionIceEvent:A.i,RTCTrackEvent:A.i,SecurityPolicyViolationEvent:A.i,SensorErrorEvent:A.i,SpeechRecognitionError:A.i,SpeechRecognitionEvent:A.i,SpeechSynthesisEvent:A.i,StorageEvent:A.i,SyncEvent:A.i,TrackEvent:A.i,TransitionEvent:A.i,WebKitTransitionEvent:A.i,VRDeviceEvent:A.i,VRDisplayEvent:A.i,VRSessionEvent:A.i,MojoInterfaceRequestEvent:A.i,ResourceProgressEvent:A.i,USBConnectionEvent:A.i,IDBVersionChangeEvent:A.i,AudioProcessingEvent:A.i,OfflineAudioCompletionEvent:A.i,WebGLContextEvent:A.i,Event:A.i,InputEvent:A.i,SubmitEvent:A.i,EventTarget:A.a2,HTMLFormElement:A.d0,MouseEvent:A.af,DragEvent:A.af,PointerEvent:A.af,WheelEvent:A.af,Document:A.a9,DocumentFragment:A.a9,HTMLDocument:A.a9,ShadowRoot:A.a9,XMLDocument:A.a9,Attr:A.a9,DocumentType:A.a9,Node:A.a9,Path2D:A.db,HTMLSelectElement:A.de,CompositionEvent:A.ar,FocusEvent:A.ar,KeyboardEvent:A.ar,TextEvent:A.ar,TouchEvent:A.ar,UIEvent:A.ar,Window:A.bj,DOMWindow:A.bj,ClientRect:A.cl,DOMRect:A.cl})
hunkHelpers.setOrUpdateLeafTags({CanvasGradient:true,DOMError:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,GeolocationPositionError:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,DOMException:true,DOMRectReadOnly:false,MathMLElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,EventTarget:false,HTMLFormElement:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,Path2D:true,HTMLSelectElement:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,Window:true,DOMWindow:true,ClientRect:true,DOMRect:true})})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=A.l_
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=derivative.dart.js.map
