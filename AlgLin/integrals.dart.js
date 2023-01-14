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
a[c]=function(){a[c]=function(){A.l8(b)}
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
if(a[b]!==s)A.l9(b)
a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.hl(b)
return new s(c,this)}:function(){if(s===null)s=A.hl(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.hl(a).prototype
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
a(hunkHelpers,v,w,$)}var A={h1:function h1(){},
j8(a,b,c){if(b.h("D<0>").b(a))return new A.cl(a,b.h("@<0>").C(c).h("cl<1,2>"))
return new A.b1(a,b.h("@<0>").C(c).h("b1<1,2>"))},
js(a){return new A.bY("Field '"+a+"' has not been initialized.")},
aR(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
h8(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
i1(a,b,c){return A.h8(A.aR(A.aR(c,a),b))},
dF(a,b,c){return a},
cd(a,b,c,d){A.an(b,"start")
if(c!=null){A.an(c,"end")
if(b>c)A.I(A.at(b,0,c,"start",null))}return new A.ap(a,b,c,d.h("ap<0>"))},
jy(a,b,c,d){if(t.X.b(a))return new A.bM(a,b,c.h("@<0>").C(d).h("bM<1,2>"))
return new A.b3(a,b,c.h("@<0>").C(d).h("b3<1,2>"))},
i_(a,b,c){var s="count"
if(t.X.b(a)){A.dO(b,s,t.S)
A.an(b,s)
return new A.bd(a,b,c.h("bd<0>"))}A.dO(b,s,t.S)
A.an(b,s)
return new A.aB(a,b,c.h("aB<0>"))},
a2(){return new A.bh("No element")},
jo(){return new A.bh("Too few elements")},
jM(a,b,c){A.de(a,0,J.B(a)-1,b,c)},
de(a,b,c,d,e){if(c-b<=32)A.jL(a,b,c,d,e)
else A.jK(a,b,c,d,e)},
jL(a,b,c,d,e){var s,r,q,p,o,n
for(s=b+1,r=J.O(a);s<=c;++s){q=r.i(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.i(a,p-1),q)
if(typeof o!=="number")return o.a7()
o=o>0}else o=!1
if(!o)break
n=p-1
r.n(a,p,r.i(a,n))
p=n}r.n(a,p,q)}},
jK(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j=B.e.a_(a5-a4+1,6),i=a4+j,h=a5-j,g=B.e.a_(a4+a5,2),f=g-j,e=g+j,d=J.O(a3),c=d.i(a3,i),b=d.i(a3,f),a=d.i(a3,g),a0=d.i(a3,e),a1=d.i(a3,h),a2=a6.$2(c,b)
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
A.de(a3,a4,r-2,a6,a7)
A.de(a3,q+2,a5,a6,a7)
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
break}}A.de(a3,r,q,a6,a7)}else A.de(a3,r,q,a6,a7)},
aU:function aU(){},
bE:function bE(a,b){this.a=a
this.$ti=b},
b1:function b1(a,b){this.a=a
this.$ti=b},
cl:function cl(a,b){this.a=a
this.$ti=b},
cj:function cj(){},
a_:function a_(a,b){this.a=a
this.$ti=b},
bY:function bY(a){this.a=a},
fN:function fN(){},
eF:function eF(){},
D:function D(){},
C:function C(){},
ap:function ap(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
a3:function a3(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
b3:function b3(a,b,c){this.a=a
this.b=b
this.$ti=c},
bM:function bM(a,b,c){this.a=a
this.b=b
this.$ti=c},
c1:function c1(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
K:function K(a,b,c){this.a=a
this.b=b
this.$ti=c},
aD:function aD(a,b,c){this.a=a
this.b=b
this.$ti=c},
ci:function ci(a,b,c){this.a=a
this.b=b
this.$ti=c},
aB:function aB(a,b,c){this.a=a
this.b=b
this.$ti=c},
bd:function bd(a,b,c){this.a=a
this.b=b
this.$ti=c},
c9:function c9(a,b,c){this.a=a
this.b=b
this.$ti=c},
bN:function bN(a){this.$ti=a},
bO:function bO(a){this.$ti=a},
aA:function aA(a,b){this.a=a
this.$ti=b},
cx:function cx(){},
iK(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
q(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.cN(a)
return s},
aP(a){var s,r=$.hV
if(r==null)r=$.hV=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
jE(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(m==null)return n
if(3>=m.length)return A.k(m,3)
s=m[3]
if(b<2||b>36)throw A.e(A.at(b,2,36,"radix",n))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=m[1]
for(p=q.length,o=0;o<p;++o)if((B.j.eh(q,o)|32)>r)return n}return parseInt(a,b)},
eC(a){return A.jD(a)},
jD(a){var s,r,q,p
if(a instanceof A.z)return A.a6(A.cJ(a),null)
s=J.aH(a)
if(s===B.W||s===B.Y||t.ak.b(a)){r=B.D(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.a6(A.cJ(a),null)},
cI(a){throw A.e(A.kH(a))},
k(a,b){if(a==null)J.B(a)
throw A.e(A.fB(a,b))},
fB(a,b){var s,r="index"
if(!A.io(b))return new A.av(!0,b,r,null)
s=A.Y(J.B(a))
if(b<0||b>=s)return A.h_(b,a,r,null,s)
return A.jG(b,r)},
kH(a){return new A.av(!0,a,null,null)},
e(a){var s,r
if(a==null)a=new A.d8()
s=new Error()
s.dartException=a
r=A.la
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
la(){return J.cN(this.dartException)},
I(a){throw A.e(a)},
c(a){throw A.e(A.ah(a))},
aC(a){var s,r,q,p,o,n
a=A.l3(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.b([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.eI(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
eJ(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
i2(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
h2(a,b){var s=b==null,r=s?null:b.method
return new A.d5(a,r,s?null:b.receiver)},
aZ(a){var s
if(a==null)return new A.ex(a)
if(a instanceof A.bP){s=a.a
return A.aY(a,s==null?t.K.a(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.aY(a,a.dartException)
return A.kG(a)},
aY(a,b){if(t.Y.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
kG(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.e.es(r,16)&8191)===10)switch(q){case 438:return A.aY(a,A.h2(A.q(s)+" (Error "+q+")",e))
case 445:case 5007:p=A.q(s)
return A.aY(a,new A.c3(p+" (Error "+q+")",e))}}if(a instanceof TypeError){o=$.iN()
n=$.iO()
m=$.iP()
l=$.iQ()
k=$.iT()
j=$.iU()
i=$.iS()
$.iR()
h=$.iW()
g=$.iV()
f=o.a1(s)
if(f!=null)return A.aY(a,A.h2(A.cz(s),f))
else{f=n.a1(s)
if(f!=null){f.method="call"
return A.aY(a,A.h2(A.cz(s),f))}else{f=m.a1(s)
if(f==null){f=l.a1(s)
if(f==null){f=k.a1(s)
if(f==null){f=j.a1(s)
if(f==null){f=i.a1(s)
if(f==null){f=l.a1(s)
if(f==null){f=h.a1(s)
if(f==null){f=g.a1(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p){A.cz(s)
return A.aY(a,new A.c3(s,f==null?e:f.method))}}}return A.aY(a,new A.dl(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.ca()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return A.aY(a,new A.av(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.ca()
return a},
aX(a){var s
if(a instanceof A.bP)return a.b
if(a==null)return new A.cq(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new A.cq(a)},
iG(a){if(a==null||typeof a!="object")return J.a7(a)
else return A.aP(a)},
kV(a,b,c,d,e,f){t.Z.a(a)
switch(A.Y(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.e(new A.f3("Unsupported number of arguments for wrapped closure"))},
bs(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.kV)
a.$identity=s
return s},
je(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.df().constructor.prototype):Object.create(new A.bb(null,null).constructor.prototype)
s.$initialize=s.constructor
if(h)r=function static_tear_off(){this.$initialize()}
else r=function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.hI(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.ja(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.hI(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
ja(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.e("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.j5)}throw A.e("Error in functionType of tearoff")},
jb(a,b,c,d){var s=A.hH
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
hI(a,b,c,d){var s,r
if(c)return A.jd(a,b,d)
s=b.length
r=A.jb(s,d,a,b)
return r},
jc(a,b,c,d){var s=A.hH,r=A.j6
switch(b?-1:a){case 0:throw A.e(new A.dc("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
jd(a,b,c){var s,r
if($.hF==null)$.hF=A.hE("interceptor")
if($.hG==null)$.hG=A.hE("receiver")
s=b.length
r=A.jc(s,c,a,b)
return r},
hl(a){return A.je(a)},
j5(a,b){return A.fn(v.typeUniverse,A.cJ(a.a),b)},
hH(a){return a.a},
j6(a){return a.b},
hE(a){var s,r,q,p=new A.bb("receiver","interceptor"),o=J.ee(Object.getOwnPropertyNames(p),t.R)
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw A.e(A.dN("Field name "+a+" not found.",null))},
br(a){if(a==null)A.kI("boolean expression must not be null")
return a},
kI(a){throw A.e(new A.dn(a))},
l8(a){throw A.e(new A.cY(a))},
kO(a){return v.getIsolateTag(a)},
lR(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
kX(a){var s,r,q,p,o,n=A.cz($.iA.$1(a)),m=$.fC[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.fH[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.kd($.iu.$2(a,n))
if(q!=null){m=$.fC[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.fH[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.fM(s)
$.fC[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.fH[n]=s
return s}if(p==="-"){o=A.fM(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.iH(a,s)
if(p==="*")throw A.e(A.i3(n))
if(v.leafTags[n]===true){o=A.fM(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.iH(a,s)},
iH(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.hu(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
fM(a){return J.hu(a,!1,null,!!a.$iln)},
kZ(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.fM(s)
else return J.hu(s,c,null,null)},
kR(){if(!0===$.hr)return
$.hr=!0
A.kS()},
kS(){var s,r,q,p,o,n,m,l
$.fC=Object.create(null)
$.fH=Object.create(null)
A.kQ()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.iI.$1(o)
if(n!=null){m=A.kZ(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
kQ(){var s,r,q,p,o,n,m=B.O()
m=A.bq(B.P,A.bq(B.Q,A.bq(B.E,A.bq(B.E,A.bq(B.R,A.bq(B.S,A.bq(B.T(B.D),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.iA=new A.fE(p)
$.iu=new A.fF(o)
$.iI=new A.fG(n)},
bq(a,b){return a(b)||b},
jr(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw A.e(A.hL("Illegal RegExp pattern ("+String(n)+")",a))},
l3(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
l6(a,b,c,d){var s=a.indexOf(b,d)
if(s<0)return a
return A.l7(a,s,s+b.length,c)},
l7(a,b,c,d){return a.substring(0,b)+d+a.substring(c)},
bS:function bS(){},
aJ:function aJ(a,b){this.a=a
this.$ti=b},
eI:function eI(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
c3:function c3(a,b){this.a=a
this.b=b},
d5:function d5(a,b,c){this.a=a
this.b=b
this.c=c},
dl:function dl(a){this.a=a},
ex:function ex(a){this.a=a},
bP:function bP(a,b){this.a=a
this.b=b},
cq:function cq(a){this.a=a
this.b=null},
a0:function a0(){},
cU:function cU(){},
cV:function cV(){},
di:function di(){},
df:function df(){},
bb:function bb(a,b){this.a=a
this.b=b},
dc:function dc(a){this.a=a},
dn:function dn(a){this.a=a},
bX:function bX(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
eg:function eg(a,b){this.a=a
this.b=b
this.c=null},
bZ:function bZ(a,b){this.a=a
this.$ti=b},
c_:function c_(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fE:function fE(a){this.a=a},
fF:function fF(a){this.a=a},
fG:function fG(a){this.a=a},
d4:function d4(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dw:function dw(a){this.b=a},
dh:function dh(a,b){this.a=a
this.c=b},
fk:function fk(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
hY(a,b){var s=b.c
return s==null?b.c=A.he(a,b.y,!0):s},
hX(a,b){var s=b.c
return s==null?b.c=A.cu(a,"ai",[b.y]):s},
hZ(a){var s=a.x
if(s===6||s===7||s===8)return A.hZ(a.y)
return s===11||s===12},
jJ(a){return a.at},
bt(a){return A.dD(v.typeUniverse,a,!1)},
kT(a,b){var s,r,q,p,o
if(a==null)return null
s=b.z
r=a.as
if(r==null)r=a.as=new Map()
q=b.at
p=r.get(q)
if(p!=null)return p
o=A.aG(v.typeUniverse,a.y,s,0)
r.set(q,o)
return o},
aG(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.x
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.y
r=A.aG(a,s,a0,a1)
if(r===s)return b
return A.ig(a,r,!0)
case 7:s=b.y
r=A.aG(a,s,a0,a1)
if(r===s)return b
return A.he(a,r,!0)
case 8:s=b.y
r=A.aG(a,s,a0,a1)
if(r===s)return b
return A.ie(a,r,!0)
case 9:q=b.z
p=A.cG(a,q,a0,a1)
if(p===q)return b
return A.cu(a,b.y,p)
case 10:o=b.y
n=A.aG(a,o,a0,a1)
m=b.z
l=A.cG(a,m,a0,a1)
if(n===o&&l===m)return b
return A.hc(a,n,l)
case 11:k=b.y
j=A.aG(a,k,a0,a1)
i=b.z
h=A.kD(a,i,a0,a1)
if(j===k&&h===i)return b
return A.id(a,j,h)
case 12:g=b.z
a1+=g.length
f=A.cG(a,g,a0,a1)
o=b.y
n=A.aG(a,o,a0,a1)
if(f===g&&n===o)return b
return A.hd(a,n,f,!0)
case 13:e=b.y
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw A.e(A.dZ("Attempted to substitute unexpected RTI kind "+c))}},
cG(a,b,c,d){var s,r,q,p,o=b.length,n=A.fo(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.aG(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
kE(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.fo(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.aG(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
kD(a,b,c,d){var s,r=b.a,q=A.cG(a,r,c,d),p=b.b,o=A.cG(a,p,c,d),n=b.c,m=A.kE(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.du()
s.a=q
s.b=o
s.c=m
return s},
b(a,b){a[v.arrayRti]=b
return a},
hm(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.kP(s)
return a.$S()}return null},
iB(a,b){var s
if(A.hZ(b))if(a instanceof A.a0){s=A.hm(a)
if(s!=null)return s}return A.cJ(a)},
cJ(a){var s
if(a instanceof A.z){s=a.$ti
return s!=null?s:A.hg(a)}if(Array.isArray(a))return A.w(a)
return A.hg(J.aH(a))},
w(a){var s=a[v.arrayRti],r=t.gn
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
F(a){var s=a.$ti
return s!=null?s:A.hg(a)},
hg(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.kn(a,s)},
kn(a,b){var s=a instanceof A.a0?a.__proto__.__proto__.constructor:b,r=A.ka(v.typeUniverse,s.name)
b.$ccache=r
return r},
kP(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.dD(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
hq(a){var s=a instanceof A.a0?A.hm(a):null
return A.hn(s==null?A.cJ(a):s)},
hn(a){var s,r,q,p=a.w
if(p!=null)return p
s=a.at
r=s.replace(/\*/g,"")
if(r===s)return a.w=new A.dB(a)
q=A.dD(v.typeUniverse,r,!0)
p=q.w
return a.w=p==null?q.w=new A.dB(q):p},
lb(a){return A.hn(A.dD(v.typeUniverse,a,!1))},
km(a){var s,r,q,p,o=this
if(o===t.K)return A.bo(o,a,A.ks)
if(!A.aI(o))if(!(o===t._))s=!1
else s=!0
else s=!0
if(s)return A.bo(o,a,A.kv)
s=o.x
r=s===6?o.y:o
if(r===t.S)q=A.io
else if(r===t.V||r===t.H)q=A.kr
else if(r===t.aw)q=A.kt
else q=r===t.cJ?A.il:null
if(q!=null)return A.bo(o,a,q)
if(r.x===9){p=r.y
if(r.z.every(A.kW)){o.r="$i"+p
if(p==="m")return A.bo(o,a,A.kq)
return A.bo(o,a,A.ku)}}else if(s===7)return A.bo(o,a,A.kk)
return A.bo(o,a,A.ki)},
bo(a,b,c){a.b=c
return a.b(b)},
kl(a){var s,r=this,q=A.kh
if(!A.aI(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=A.ke
else if(r===t.K)q=A.kc
else{s=A.cK(r)
if(s)q=A.kj}r.a=q
return r.a(a)},
fs(a){var s,r=a.x
if(!A.aI(a))if(!(a===t._))if(!(a===t.cF))if(r!==7)s=r===8&&A.fs(a.y)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
ki(a){var s=this
if(a==null)return A.fs(s)
return A.L(v.typeUniverse,A.iB(a,s),null,s,null)},
kk(a){if(a==null)return!0
return this.y.b(a)},
ku(a){var s,r=this
if(a==null)return A.fs(r)
s=r.r
if(a instanceof A.z)return!!a[s]
return!!J.aH(a)[s]},
kq(a){var s,r=this
if(a==null)return A.fs(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.r
if(a instanceof A.z)return!!a[s]
return!!J.aH(a)[s]},
kh(a){var s,r=this
if(a==null){s=A.cK(r)
if(s)return a}else if(r.b(a))return a
A.ij(a,r)},
kj(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.ij(a,s)},
ij(a,b){throw A.e(A.ic(A.i6(a,A.iB(a,b),A.a6(b,null))))},
fy(a,b,c,d){var s=null
if(A.L(v.typeUniverse,a,s,b,s))return a
throw A.e(A.ic("The type argument '"+A.a6(a,s)+"' is not a subtype of the type variable bound '"+A.a6(b,s)+"' of type variable '"+c+"' in '"+d+"'."))},
i6(a,b,c){var s=A.cZ(a)
return s+": type '"+A.a6(b==null?A.cJ(a):b,null)+"' is not a subtype of type '"+c+"'"},
ic(a){return new A.ct("TypeError: "+a)},
a5(a,b){return new A.ct("TypeError: "+A.i6(a,null,b))},
ks(a){return a!=null},
kc(a){if(a!=null)return a
throw A.e(A.a5(a,"Object"))},
kv(a){return!0},
ke(a){return a},
il(a){return!0===a||!1===a},
lG(a){if(!0===a)return!0
if(!1===a)return!1
throw A.e(A.a5(a,"bool"))},
lI(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.e(A.a5(a,"bool"))},
lH(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.e(A.a5(a,"bool?"))},
aF(a){if(typeof a=="number")return a
throw A.e(A.a5(a,"double"))},
lK(a){if(typeof a=="number")return a
if(a==null)return a
throw A.e(A.a5(a,"double"))},
lJ(a){if(typeof a=="number")return a
if(a==null)return a
throw A.e(A.a5(a,"double?"))},
io(a){return typeof a=="number"&&Math.floor(a)===a},
Y(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.e(A.a5(a,"int"))},
lM(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.e(A.a5(a,"int"))},
lL(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.e(A.a5(a,"int?"))},
kr(a){return typeof a=="number"},
hf(a){if(typeof a=="number")return a
throw A.e(A.a5(a,"num"))},
lO(a){if(typeof a=="number")return a
if(a==null)return a
throw A.e(A.a5(a,"num"))},
lN(a){if(typeof a=="number")return a
if(a==null)return a
throw A.e(A.a5(a,"num?"))},
kt(a){return typeof a=="string"},
cz(a){if(typeof a=="string")return a
throw A.e(A.a5(a,"String"))},
lP(a){if(typeof a=="string")return a
if(a==null)return a
throw A.e(A.a5(a,"String"))},
kd(a){if(typeof a=="string")return a
if(a==null)return a
throw A.e(A.a5(a,"String?"))},
kA(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.a6(a[q],b)
return s},
ik(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=A.b([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)B.a.u(a5,"T"+(q+p))
for(o=t.R,n=t._,m="<",l="",p=0;p<s;++p,l=a3){k=a5.length
j=k-1-p
if(!(j>=0))return A.k(a5,j)
m=B.j.B(m+l,a5[j])
i=a6[p]
h=i.x
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+A.a6(i,a5)}m+=">"}else{m=""
r=null}o=a4.y
g=a4.z
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=A.a6(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+A.a6(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+A.a6(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=A.a6(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
a6(a,b){var s,r,q,p,o,n,m,l=a.x
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=A.a6(a.y,b)
return s}if(l===7){r=a.y
s=A.a6(r,b)
q=r.x
return(q===11||q===12?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+A.a6(a.y,b)+">"
if(l===9){p=A.kF(a.y)
o=a.z
return o.length>0?p+("<"+A.kA(o,b)+">"):p}if(l===11)return A.ik(a,b,null)
if(l===12)return A.ik(a.y,b,a.z)
if(l===13){n=a.y
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.k(b,n)
return b[n]}return"?"},
kF(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
kb(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
ka(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.dD(a,b,!1)
else if(typeof m=="number"){s=m
r=A.cv(a,5,"#")
q=A.fo(s)
for(p=0;p<s;++p)q[p]=r
o=A.cu(a,b,q)
n[b]=o
return o}else return m},
k8(a,b){return A.ih(a.tR,b)},
k7(a,b){return A.ih(a.eT,b)},
dD(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.ib(A.i9(a,null,b,c))
r.set(b,s)
return s},
fn(a,b,c){var s,r,q=b.Q
if(q==null)q=b.Q=new Map()
s=q.get(c)
if(s!=null)return s
r=A.ib(A.i9(a,b,c,!0))
q.set(c,r)
return r},
k9(a,b,c){var s,r,q,p=b.as
if(p==null)p=b.as=new Map()
s=c.at
r=p.get(s)
if(r!=null)return r
q=A.hc(a,b,c.x===10?c.z:[c])
p.set(s,q)
return q},
aW(a,b){b.a=A.kl
b.b=A.km
return b},
cv(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.ao(null,null)
s.x=b
s.at=c
r=A.aW(a,s)
a.eC.set(c,r)
return r},
ig(a,b,c){var s,r=b.at+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.k5(a,b,r,c)
a.eC.set(r,s)
return s},
k5(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.aI(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new A.ao(null,null)
q.x=6
q.y=b
q.at=c
return A.aW(a,q)},
he(a,b,c){var s,r=b.at+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.k4(a,b,r,c)
a.eC.set(r,s)
return s},
k4(a,b,c,d){var s,r,q,p
if(d){s=b.x
if(!A.aI(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&A.cK(b.y)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.cF)return t.P
else if(s===6){q=b.y
if(q.x===8&&A.cK(q.y))return q
else return A.hY(a,b)}}p=new A.ao(null,null)
p.x=7
p.y=b
p.at=c
return A.aW(a,p)},
ie(a,b,c){var s,r=b.at+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.k2(a,b,r,c)
a.eC.set(r,s)
return s},
k2(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.aI(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return A.cu(a,"ai",[b])
else if(b===t.P||b===t.T)return t.eH}q=new A.ao(null,null)
q.x=8
q.y=b
q.at=c
return A.aW(a,q)},
k6(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.ao(null,null)
s.x=13
s.y=b
s.at=q
r=A.aW(a,s)
a.eC.set(q,r)
return r},
dC(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].at
return s},
k1(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].at}return s},
cu(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.dC(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.ao(null,null)
r.x=9
r.y=b
r.z=c
if(c.length>0)r.c=c[0]
r.at=p
q=A.aW(a,r)
a.eC.set(p,q)
return q},
hc(a,b,c){var s,r,q,p,o,n
if(b.x===10){s=b.y
r=b.z.concat(c)}else{r=c
s=b}q=s.at+(";<"+A.dC(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.ao(null,null)
o.x=10
o.y=s
o.z=r
o.at=q
n=A.aW(a,o)
a.eC.set(q,n)
return n},
id(a,b,c){var s,r,q,p,o,n=b.at,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.dC(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.dC(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.k1(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.ao(null,null)
p.x=11
p.y=b
p.z=c
p.at=r
o=A.aW(a,p)
a.eC.set(r,o)
return o},
hd(a,b,c,d){var s,r=b.at+("<"+A.dC(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.k3(a,b,c,r,d)
a.eC.set(r,s)
return s},
k3(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.fo(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.x===1){r[p]=o;++q}}if(q>0){n=A.aG(a,b,r,0)
m=A.cG(a,c,r,0)
return A.hd(a,n,m,c!==m)}}l=new A.ao(null,null)
l.x=12
l.y=b
l.z=c
l.at=d
return A.aW(a,l)},
i9(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
ib(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=A.jX(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=A.ia(a,r,h,g,!1)
else if(q===46)r=A.ia(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(A.aV(a.u,a.e,g.pop()))
break
case 94:g.push(A.k6(a.u,g.pop()))
break
case 35:g.push(A.cv(a.u,5,"#"))
break
case 64:g.push(A.cv(a.u,2,"@"))
break
case 126:g.push(A.cv(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
A.hb(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(A.cu(p,n,o))
else{m=A.aV(p,a.e,n)
switch(m.x){case 11:g.push(A.hd(p,m,o,a.n))
break
default:g.push(A.hc(p,m,o))
break}}break
case 38:A.jY(a,g)
break
case 42:p=a.u
g.push(A.ig(p,A.aV(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(A.he(p,A.aV(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(A.ie(p,A.aV(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new A.du()
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
A.hb(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(A.id(p,A.aV(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
A.hb(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
A.k_(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return A.aV(a.u,a.e,i)},
jX(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
ia(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.x===10)o=o.y
n=A.kb(s,o.y)[p]
if(n==null)A.I('No "'+p+'" in "'+A.jJ(o)+'"')
d.push(A.fn(s,o,n))}else d.push(p)
return m},
jY(a,b){var s=b.pop()
if(0===s){b.push(A.cv(a.u,1,"0&"))
return}if(1===s){b.push(A.cv(a.u,4,"1&"))
return}throw A.e(A.dZ("Unexpected extended operation "+A.q(s)))},
aV(a,b,c){if(typeof c=="string")return A.cu(a,c,a.sEA)
else if(typeof c=="number")return A.jZ(a,b,c)
else return c},
hb(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.aV(a,b,c[s])},
k_(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.aV(a,b,c[s])},
jZ(a,b,c){var s,r,q=b.x
if(q===10){if(c===0)return b.y
s=b.z
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.y
q=b.x}else if(c===0)return b
if(q!==9)throw A.e(A.dZ("Indexed base must be an interface type"))
s=b.z
if(c<=s.length)return s[c-1]
throw A.e(A.dZ("Bad index "+c+" for "+b.k(0)))},
L(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!A.aI(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.x
if(r===4)return!0
if(A.aI(b))return!1
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
if(!A.L(a,k,c,j,e)||!A.L(a,j,e,k,c))return!1}return A.im(a,b.y,c,d.y,e)}if(p===11){if(b===t.cj)return!0
if(s)return!1
return A.im(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return A.kp(a,b,c,d,e)}return!1},
im(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
kp(a,b,c,d,e){var s,r,q,p,o,n,m,l=b.y,k=d.y
for(;l!==k;){s=a.tR[l]
if(s==null)return!1
if(typeof s=="string"){l=s
continue}r=s[k]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.fn(a,b,r[o])
return A.ii(a,p,null,c,d.z,e)}n=b.z
m=d.z
return A.ii(a,n,null,c,m,e)},
ii(a,b,c,d,e,f){var s,r,q,p=b.length
for(s=0;s<p;++s){r=b[s]
q=e[s]
if(!A.L(a,r,d,q,f))return!1}return!0},
cK(a){var s,r=a.x
if(!(a===t.P||a===t.T))if(!A.aI(a))if(r!==7)if(!(r===6&&A.cK(a.y)))s=r===8&&A.cK(a.y)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
kW(a){var s
if(!A.aI(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
aI(a){var s=a.x
return s===2||s===3||s===4||s===5||a===t.R},
ih(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
fo(a){return a>0?new Array(a):v.typeUniverse.sEA},
ao:function ao(a,b){var _=this
_.a=a
_.b=b
_.w=_.r=_.c=null
_.x=0
_.at=_.as=_.Q=_.z=_.y=null},
du:function du(){this.c=this.b=this.a=null},
dB:function dB(a){this.a=a},
dt:function dt(){},
ct:function ct(a){this.a=a},
jS(){var s,r,q={}
if(self.scheduleImmediate!=null)return A.kJ()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(A.bs(new A.eY(q),1)).observe(s,{childList:true})
return new A.eX(q,s,r)}else if(self.setImmediate!=null)return A.kK()
return A.kL()},
jT(a){self.scheduleImmediate(A.bs(new A.eZ(t.M.a(a)),0))},
jU(a){self.setImmediate(A.bs(new A.f_(t.M.a(a)),0))},
jV(a){t.M.a(a)
A.k0(0,a)},
k0(a,b){var s=new A.fl()
s.e5(a,b)
return s},
cF(a){return new A.dp(new A.N($.H,a.h("N<0>")),a.h("dp<0>"))},
cC(a,b){a.$2(0,null)
b.b=!0
return b.a},
b8(a,b){A.kf(a,b)},
cB(a,b){b.bt(0,a)},
cA(a,b){b.cK(A.aZ(a),A.aX(a))},
kf(a,b){var s,r,q=new A.fp(b),p=new A.fq(b)
if(a instanceof A.N)a.cA(q,p,t.z)
else{s=t.z
if(t.v.b(a))a.bM(q,p,s)
else{r=new A.N($.H,t.c)
r.a=8
r.c=a
r.cA(q,p,s)}}},
cH(a){var s=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(r){e=r
d=c}}}(a,1)
return $.H.d5(new A.fv(s),t.J,t.S,t.z)},
jW(a){return new A.bm(a,1)},
i7(){return B.a5},
i8(a){return new A.bm(a,3)},
ip(a,b){return new A.cs(a,b.h("cs<0>"))},
e_(a,b){var s=A.dF(a,"error",t.K)
return new A.bB(s,b==null?A.j3(a):b)},
j3(a){var s
if(t.Y.b(a)){s=a.gbf()
if(s!=null)return s}return B.U},
f7(a,b){var s,r,q
for(s=t.c;r=a.a,(r&4)!==0;)a=s.a(a.c)
if((r&24)!==0){q=b.aU()
b.bj(a)
A.bl(b,q)}else{q=t.F.a(b.c)
b.a=b.a&1|4
b.c=a
a.cv(q)}},
bl(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=c.a=a
for(s=t.u,r=t.F,q=t.v;!0;){p={}
o=b.a
n=(o&16)===0
m=!n
if(a0==null){if(m&&(o&1)===0){l=s.a(b.c)
A.ft(l.a,l.b)}return}p.a=a0
k=a0.a
for(b=a0;k!=null;b=k,k=j){b.a=null
A.bl(c.a,b)
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
A.ft(i.a,i.b)
return}f=$.H
if(f!==g)$.H=g
else f=null
b=b.c
if((b&15)===8)new A.ff(p,c,m).$0()
else if(n){if((b&1)!==0)new A.fe(p,i).$0()}else if((b&2)!==0)new A.fd(c,p).$0()
if(f!=null)$.H=f
b=p.c
if(q.b(b)){o=p.a.$ti
o=o.h("ai<2>").b(b)||!o.z[1].b(b)}else o=!1
if(o){q.a(b)
e=p.a.b
if((b.a&24)!==0){d=r.a(e.c)
e.c=null
a0=e.aV(d)
e.a=b.a&30|e.a&1
e.c=b.c
c.a=b
continue}else A.f7(b,e)
return}}e=p.a.b
d=r.a(e.c)
e.c=null
a0=e.aV(d)
b=p.b
o=p.c
if(!b){e.$ti.c.a(o)
e.a=8
e.c=o}else{s.a(o)
e.a=e.a&1|16
e.c=o}c.a=e
b=e}},
ky(a,b){var s
if(t.C.b(a))return b.d5(a,t.z,t.K,t.k)
s=t.I
if(s.b(a))return s.a(a)
throw A.e(A.hB(a,"onError",u.c))},
kx(){var s,r
for(s=$.bp;s!=null;s=$.bp){$.cE=null
r=s.b
$.bp=r
if(r==null)$.cD=null
s.a.$0()}},
kC(){$.hh=!0
try{A.kx()}finally{$.cE=null
$.hh=!1
if($.bp!=null)$.hw().$1(A.iv())}},
is(a){var s=new A.dq(a),r=$.cD
if(r==null){$.bp=$.cD=s
if(!$.hh)$.hw().$1(A.iv())}else $.cD=r.b=s},
kB(a){var s,r,q,p=$.bp
if(p==null){A.is(a)
$.cE=$.cD
return}s=new A.dq(a)
r=$.cE
if(r==null){s.b=p
$.bp=$.cE=s}else{q=r.b
s.b=q
$.cE=r.b=s
if(q==null)$.cD=s}},
l5(a){var s,r=null,q=$.H
if(B.f===q){A.b9(r,r,B.f,a)
return}s=!1
if(s){A.b9(r,r,q,t.M.a(a))
return}A.b9(r,r,q,t.M.a(q.cH(a)))},
lt(a,b){A.dF(a,"stream",t.K)
return new A.dz(b.h("dz<0>"))},
ft(a,b){A.kB(new A.fu(a,b))},
iq(a,b,c,d,e){var s,r=$.H
if(r===c)return d.$0()
$.H=c
s=r
try{r=d.$0()
return r}finally{$.H=s}},
ir(a,b,c,d,e,f,g){var s,r=$.H
if(r===c)return d.$1(e)
$.H=c
s=r
try{r=d.$1(e)
return r}finally{$.H=s}},
kz(a,b,c,d,e,f,g,h,i){var s,r=$.H
if(r===c)return d.$2(e,f)
$.H=c
s=r
try{r=d.$2(e,f)
return r}finally{$.H=s}},
b9(a,b,c,d){t.M.a(d)
if(B.f!==c)d=c.cH(d)
A.is(d)},
eY:function eY(a){this.a=a},
eX:function eX(a,b,c){this.a=a
this.b=b
this.c=c},
eZ:function eZ(a){this.a=a},
f_:function f_(a){this.a=a},
fl:function fl(){},
fm:function fm(a,b){this.a=a
this.b=b},
dp:function dp(a,b){this.a=a
this.b=!1
this.$ti=b},
fp:function fp(a){this.a=a},
fq:function fq(a){this.a=a},
fv:function fv(a){this.a=a},
bm:function bm(a,b){this.a=a
this.b=b},
bn:function bn(a,b){var _=this
_.a=a
_.d=_.c=_.b=null
_.$ti=b},
cs:function cs(a,b){this.a=a
this.$ti=b},
bB:function bB(a,b){this.a=a
this.b=b},
dr:function dr(){},
cr:function cr(a,b){this.a=a
this.$ti=b},
b6:function b6(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
N:function N(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
f4:function f4(a,b){this.a=a
this.b=b},
fc:function fc(a,b){this.a=a
this.b=b},
f8:function f8(a){this.a=a},
f9:function f9(a){this.a=a},
fa:function fa(a,b,c){this.a=a
this.b=b
this.c=c},
f6:function f6(a,b){this.a=a
this.b=b},
fb:function fb(a,b){this.a=a
this.b=b},
f5:function f5(a,b,c){this.a=a
this.b=b
this.c=c},
ff:function ff(a,b,c){this.a=a
this.b=b
this.c=c},
fg:function fg(a){this.a=a},
fe:function fe(a,b){this.a=a
this.b=b},
fd:function fd(a,b){this.a=a
this.b=b},
dq:function dq(a){this.a=a
this.b=null},
cb:function cb(){},
eG:function eG(a,b){this.a=a
this.b=b},
eH:function eH(a,b){this.a=a
this.b=b},
cc:function cc(){},
dz:function dz(a){this.$ti=a},
cw:function cw(){},
fu:function fu(a,b){this.a=a
this.b=b},
dy:function dy(){},
fi:function fi(a,b){this.a=a
this.b=b},
fj:function fj(a,b,c){this.a=a
this.b=b
this.c=c},
h3(a,b){return new A.bX(a.h("@<0>").C(b).h("bX<1,2>"))},
jv(a){return new A.aE(a.h("aE<0>"))},
jw(a){return new A.aE(a.h("aE<0>"))},
ha(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
h9(a,b,c){var s=new A.b7(a,b,c.h("b7<0>"))
s.c=a.e
return s},
jn(a,b,c){var s,r
if(A.hi(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.b([],t.s)
B.a.u($.ag,a)
try{A.kw(a,s)}finally{if(0>=$.ag.length)return A.k($.ag,-1)
$.ag.pop()}r=A.i0(b,t.hf.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
h0(a,b,c){var s,r
if(A.hi(a))return b+"..."+c
s=new A.dg(b)
B.a.u($.ag,a)
try{r=s
r.a=A.i0(r.a,a,", ")}finally{if(0>=$.ag.length)return A.k($.ag,-1)
$.ag.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
hi(a){var s,r
for(s=$.ag.length,r=0;r<s;++r)if(a===$.ag[r])return!0
return!1},
kw(a,b){var s,r,q,p,o,n,m,l=a.gv(a),k=0,j=0
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
h4(a,b){var s,r,q=A.jv(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.c)(a),++r)q.u(0,b.a(a[r]))
return q},
hT(a){var s,r={}
if(A.hi(a))return"{...}"
s=new A.dg("")
try{B.a.u($.ag,a)
s.a+="{"
r.a=!0
a.cW(0,new A.ej(r,s))
s.a+="}"}finally{if(0>=$.ag.length)return A.k($.ag,-1)
$.ag.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
aE:function aE(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
dv:function dv(a){this.a=a
this.c=this.b=null},
b7:function b7(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
bU:function bU(){},
ae:function ae(){},
c0:function c0(){},
ej:function ej(a,b){this.a=a
this.b=b},
be:function be(){},
c8:function c8(){},
cp:function cp(){},
cy:function cy(){},
kU(a,b){var s=A.jE(a,b)
if(s!=null)return s
throw A.e(A.hL(a,null))},
ji(a){if(a instanceof A.a0)return a.k(0)
return"Instance of '"+A.eC(a)+"'"},
jj(a,b){a=A.e(a)
if(a==null)a=t.K.a(a)
a.stack=b.k(0)
throw a
throw A.e("unreachable")},
hS(a,b,c,d){var s,r=c?J.hP(a,d):J.hO(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
ei(a,b,c){var s,r=A.b([],c.h("t<0>"))
for(s=J.U(a);s.m();)B.a.u(r,c.a(s.gp()))
if(b)return r
return J.ee(r,c)},
f(a,b,c){var s
if(b)return A.hR(a,c)
s=J.ee(A.hR(a,c),c)
return s},
hR(a,b){var s,r
if(Array.isArray(a))return A.b(a.slice(0),b.h("t<0>"))
s=A.b([],b.h("t<0>"))
for(r=J.U(a);r.m();)B.a.u(s,r.gp())
return s},
jH(a){return new A.d4(a,A.jr(a,!1,!0,!1,!1,!1))},
i0(a,b,c){var s=J.U(b)
if(!s.m())return a
if(c.length===0){do a+=A.q(s.gp())
while(s.m())}else{a+=A.q(s.gp())
for(;s.m();)a=a+c+A.q(s.gp())}return a},
cZ(a){if(typeof a=="number"||A.il(a)||a==null)return J.cN(a)
if(typeof a=="string")return JSON.stringify(a)
return A.ji(a)},
dZ(a){return new A.bA(a)},
dN(a,b){return new A.av(!1,null,b,a)},
hB(a,b,c){return new A.av(!0,a,b,c)},
dO(a,b,c){return a},
jG(a,b){return new A.c5(null,null,!0,a,b,"Value not in range")},
at(a,b,c,d,e){return new A.c5(b,c,!0,a,d,"Invalid value")},
hW(a,b,c,d){if(a<b||a>c)throw A.e(A.at(a,b,c,d,null))
return a},
bg(a,b,c){if(0>a||a>c)throw A.e(A.at(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.e(A.at(b,a,c,"end",null))
return b}return c},
an(a,b){if(a<0)throw A.e(A.at(a,0,null,b,null))
return a},
h_(a,b,c,d,e){var s=A.Y(e==null?J.B(b):e)
return new A.d0(s,!0,a,c,"Index out of range")},
a4(a){return new A.dm(a)},
i3(a){return new A.dk(a)},
aj(a){return new A.bh(a)},
ah(a){return new A.cW(a)},
hL(a,b){return new A.eb(a,b)},
d9(a,b,c,d){var s,r
if(B.l===c)return A.i1(J.a7(a),J.a7(b),$.fV())
if(B.l===d){s=J.a7(a)
b=J.a7(b)
c=J.a7(c)
return A.h8(A.aR(A.aR(A.aR($.fV(),s),b),c))}s=J.a7(a)
b=J.a7(b)
c=J.a7(c)
d=J.a7(d)
r=$.fV()
return A.h8(A.aR(A.aR(A.aR(A.aR(r,s),b),c),d))},
fP(a){A.l1(A.q(a))},
f0:function f0(){},
G:function G(){},
bA:function bA(a){this.a=a},
aS:function aS(){},
d8:function d8(){},
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
d0:function d0(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
dm:function dm(a){this.a=a},
dk:function dk(a){this.a=a},
bh:function bh(a){this.a=a},
cW:function cW(a){this.a=a},
ca:function ca(){},
cY:function cY(a){this.a=a},
f3:function f3(a){this.a=a},
eb:function eb(a,b){this.a=a
this.b=b},
n:function n(){},
E:function E(){},
M:function M(){},
z:function z(){},
dA:function dA(){},
dg:function dg(a){this.a=a},
jB(a){var s=new Path2D(a)
s.toString
return s},
f1(a,b,c,d,e){var s=A.it(new A.f2(c),t.L),r=s!=null
if(r&&!0){t.B.a(s)
if(r)J.iZ(a,b,s,!1)}return new A.cn(a,b,s,!1,e.h("cn<0>"))},
it(a,b){var s=$.H
if(s===B.f)return a
return s.eF(a,b)},
j:function j(){},
cP:function cP(){},
cQ:function cQ(){},
b0:function b0(){},
bD:function bD(){},
as:function as(){},
e6:function e6(){},
bI:function bI(){},
h:function h(){},
i:function i(){},
a1:function a1(){},
d_:function d_(){},
af:function af(){},
a9:function a9(){},
da:function da(){},
dd:function dd(){},
ar:function ar(){},
bk:function bk(){},
eW:function eW(a){this.a=a},
ck:function ck(){},
fZ:function fZ(a,b){this.a=a
this.$ti=b},
cm:function cm(){},
ds:function ds(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
cn:function cn(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
f2:function f2(a){this.a=a},
iF(a,b,c){A.fy(c,t.H,"T","min")
return Math.min(c.a(a),c.a(b))},
iE(a,b,c){A.fy(c,t.H,"T","max")
return Math.max(c.a(a),c.a(b))},
dx:function dx(){this.b=this.a=0},
b4:function b4(a,b,c){this.a=a
this.b=b
this.$ti=c},
V:function V(a,b){this.a=a
this.$ti=b},
ed:function ed(a){this.a=a},
co:function co(a,b){this.a=a
this.b=null
this.$ti=b},
e1:function e1(a){var _=this
_.c=14.222222222222221
_.d=8
_.f=a
_.r=$},
e2:function e2(){},
e3:function e3(){},
bv:function bv(){},
cO:function cO(){},
dK:function dK(a){this.a=a},
dL:function dL(a){this.a=a},
dM:function dM(a){this.a=a},
cS:function cS(a,b,c,d,e,f,g,h){var _=this
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
h6(a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a9.a0,a5=a9.b2,a6=A.f(a9.cU,!0,t.V),a7=a9.eO,a8=a9.bx
if(a8!=null){s=A.w(a8)
s=A.f(new A.K(a8,s.h("T(1)").a(new A.ey()),s.h("K<1,T>")),!0,t.f)
a8=s}else a8=a3
s=a9.by
if(s!=null){r=A.w(s)
r=A.f(new A.K(s,r.h("T(1)").a(new A.ez()),r.h("K<1,T>")),!0,t.f)
s=r}else s=a3
r=a9.K
q=a9.N
A.aq(a3,0,B.b,a3,0)
p=a9.fx
o=a9.fy
n=A.b5(a9.go)
m=a9.id
m=m==null?a3:A.a8(m)
l=a9.k1
l=l==null?a3:A.a8(l)
k=a9.ax
k=k==null?a3:J.o(k,new A.P(),t.G)
if(k==null)k=A.b([],t.O)
j=t.G
k=A.f(k,!0,j)
i=a9.ay
i=i==null?a3:J.o(i,new A.Q(),j)
i=A.f(i==null?A.b([],t.O):i,!0,j)
h=a9.ch
h=h==null?a3:J.o(h,new A.R(),j)
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
b.push(new A.d(a2.a,a2.b,a2.c))}return new A.bf(a9.al,a4,a9.b0,!0,a9.cS,a9.cT,a5,a6,!1,a9.eL,a9.cV,a9.eM,a9.eN,new A.d(a7.a,a7.b,a7.c),a9.eP,!0,a9.eQ,a9.eR,a9.eS,a9.eT,a8,s,a9.y2,a9.J,r,q,p,new A.d(o.a,o.b,o.c),n,m,l,h,g,a9.y,a9.z,!1,a9.as,a9.at,k,i,j,f,e,a3,d,c,b)},
hD(a,b,c,d,e,f){var s,r=null,q=new A.bC(B.c,a,B.w,d,c,b,f,e,4,0,!1,0.01,!1,0.000001,4,r,r,r,B.b,$,r,$,$,$)
q.S(B.b,r,r)
q.cc(r)
q.ak=q.cM(c,b,B.w.bF(B.w))
s=q.cM(f,e,d.bF(B.K))
q.aw=s
s.bK(0,-1.5707963267948966,B.c,B.h)
q.bw=A.i4(A.b([q.ak,q.aw],t.U))
q.U(t.a.a(A.b([q.ak,q.aw],t.r)))
q.ah(B.c)
return q},
j4(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a0.eI,d=A.fY(a0.cR),c=A.fY(a0.eJ),b=A.fY(a0.eK),a=a0.ax
a=a==null?f:J.o(a,new A.P(),t.G)
if(a==null)a=A.b([],t.O)
s=t.G
a=A.f(a,!0,s)
r=a0.ay
r=r==null?f:J.o(r,new A.Q(),s)
r=A.f(r==null?A.b([],t.O):r,!0,s)
q=a0.ch
q=q==null?f:J.o(q,new A.R(),s)
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
k.push(new A.d(g.a,g.b,g.c))}e=new A.bC(new A.d(e.a,e.b,e.c),d,c,b,a0.to,a0.x1,a0.x2,a0.xr,q,p,a0.y,a0.z,!1,a0.as,a0.at,a,r,s,o,n,f,m,l,k)
d=a0.ak
d===$&&A.a("xAxis")
d=A.h6(d)
e.ak=d
c=a0.aw
c===$&&A.a("yAxis")
c=A.h6(c)
e.aw=c
e.bw=A.i4(A.b([d,c],t.U))
return e},
cR(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0){return new A.Z(a,f,c,g,a0,e,q,p,h,n,d,m,j,k,l,i,s,r,b,o)},
fY(a){return new A.Z(a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.w,a.x,a.y,a.z,a.Q,a.as,a.at,a.ax,a.ay,a.ch,a.CW,a.cx,a.cy)},
bf:function bf(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7){var _=this
_.al=a
_.a0=b
_.b0=c
_.b1=d
_.cS=e
_.cT=f
_.b2=g
_.cU=h
_.ft=i
_.eL=j
_.cV=k
_.eM=l
_.eN=m
_.eO=n
_.eP=o
_.fu=p
_.eQ=q
_.eR=r
_.eS=s
_.eT=a0
_.bx=a1
_.by=a2
_.y2=a3
_.J=a4
_.K=a5
_.N=a6
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
ey:function ey(){},
ez:function ez(){},
cX:function cX(){},
e5:function e5(a){this.a=a},
bC:function bC(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4){var _=this
_.eI=a
_.cR=b
_.eJ=c
_.eK=d
_.bw=_.aw=_.ak=$
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
e0:function e0(){},
Z:function Z(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0){var _=this
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
jA(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=A.f(a.k1,!0,t.V),d=a.ax
d=d==null?f:J.o(d,new A.P(),t.G)
if(d==null)d=A.b([],t.O)
s=t.G
d=A.f(d,!0,s)
r=a.ay
r=r==null?f:J.o(r,new A.Q(),s)
r=A.f(r==null?A.b([],t.O):r,!0,s)
q=a.ch
q=q==null?f:J.o(q,new A.R(),s)
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
k.push(new A.d(g.a,g.b,g.c))}return new A.c4(a.fx,a.fy,a.go,a.id,e,a.k2,q,p,a.y,a.z,!1,a.as,a.at,d,r,s,o,n,f,m,l,k)},
jk(a,b,c,d,e,f,g){var s=null,r=new A.bQ(d,e,g,f,c,b,new A.ec(d),4,0,!1,0.01,!1,0.000001,4,s,s,s,a,$,s,$,$,$)
r.S(a,s,s)
r.c1(B.i)
return r},
jl(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=A.f(a.k1,!0,t.V),d=a.ax
d=d==null?f:J.o(d,new A.P(),t.G)
if(d==null)d=A.b([],t.O)
s=t.G
d=A.f(d,!0,s)
r=a.ay
r=r==null?f:J.o(r,new A.Q(),s)
r=A.f(r==null?A.b([],t.O):r,!0,s)
q=a.ch
q=q==null?f:J.o(q,new A.R(),s)
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
k.push(new A.d(g.a,g.b,g.c))}return new A.bQ(a.J,a.fx,a.fy,a.go,a.id,e,a.k2,q,p,a.y,a.z,!1,a.as,a.at,d,r,s,o,n,f,m,l,k)},
c4:function c4(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2){var _=this
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
eA:function eA(a){this.a=a},
bQ:function bQ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3){var _=this
_.J=a
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
ec:function ec(a){this.a=a},
aq(a,b,c,d,e){var s=t.O,r=A.b([c],s),q=d!=null?A.b([d],s):A.b([],s)
return new A.ce(r,q,e,a!=null?A.b([a],s):A.b([],s),b)},
b5(a){var s,r,q,p,o=a.a
if(o!=null){s=A.b([],t.O)
for(o=J.U(o);o.m();){r=o.gp()
s.push(new A.u(r.a,r.b,r.c,r.d))}o=s}else o=null
s=a.b
if(s!=null){r=A.b([],t.O)
for(s=J.U(s);s.m();){q=s.gp()
r.push(new A.u(q.a,q.b,q.c,q.d))}s=r}else s=null
r=a.d
if(r!=null){q=A.b([],t.O)
for(r=J.U(r);r.m();){p=r.gp()
q.push(new A.u(p.a,p.b,p.c,p.d))}r=q}else r=null
return new A.ce(o,s,a.c,r,a.e)},
jN(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=null
A.aq(a1,0,B.b,a1,0)
s=a2.fx
r=a2.fy
q=A.b5(a2.go)
p=a2.id
p=p==null?a1:A.a8(p)
o=a2.k1
o=o==null?a1:A.a8(o)
n=a2.ax
n=n==null?a1:J.o(n,new A.P(),t.G)
if(n==null)n=A.b([],t.O)
m=t.G
n=A.f(n,!0,m)
l=a2.ay
l=l==null?a1:J.o(l,new A.Q(),m)
l=A.f(l==null?A.b([],t.O):l,!0,m)
k=a2.ch
k=k==null?a1:J.o(k,new A.R(),m)
m=A.f(k==null?A.b([],t.O):k,!0,m)
k=a2.w
j=a2.x
i=a2.gaX()
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
d.push(new A.d(a0.a,a0.b,a0.c))}return new A.bi(s,new A.d(r.a,r.b,r.c),q,p,o,k,j,i,a2.z,!1,a2.as,a2.at,n,l,m,h,g,a1,f,e,d)},
j2(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=null
A.aq(a1,0,B.b,a1,0)
s=a2.fx
r=a2.fy
q=A.b5(a2.go)
p=a2.id
p=p==null?a1:A.a8(p)
o=a2.k1
o=o==null?a1:A.a8(o)
n=a2.ax
n=n==null?a1:J.o(n,new A.P(),t.G)
if(n==null)n=A.b([],t.O)
m=t.G
n=A.f(n,!0,m)
l=a2.ay
l=l==null?a1:J.o(l,new A.Q(),m)
l=A.f(l==null?A.b([],t.O):l,!0,m)
k=a2.ch
k=k==null?a1:J.o(k,new A.R(),m)
m=A.f(k==null?A.b([],t.O):k,!0,m)
k=a2.w
j=a2.x
i=a2.gaX()
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
d.push(new A.d(a0.a,a0.b,a0.c))}return new A.bx(a2.y2,a2.J,a2.K,a2.N,a2.av,s,new A.d(r.a,r.b,r.c),q,p,o,k,j,i,a2.z,!1,a2.as,a2.at,n,l,m,h,g,a1,f,e,d)},
j9(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=null
A.aq(a0,0,B.b,a0,0)
s=a1.fx
r=a1.fy
q=A.b5(a1.go)
p=a1.id
p=p==null?a0:A.a8(p)
o=a1.k1
o=o==null?a0:A.a8(o)
n=a1.ax
n=n==null?a0:J.o(n,new A.P(),t.G)
if(n==null)n=A.b([],t.O)
m=t.G
n=A.f(n,!0,m)
l=a1.ay
l=l==null?a0:J.o(l,new A.Q(),m)
l=A.f(l==null?A.b([],t.O):l,!0,m)
k=a1.ch
k=k==null?a0:J.o(k,new A.R(),m)
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
e.push(new A.d(a.a,a.b,a.c))}return new A.bF(a1.y2,a1.J,a1.K,a1.N,a1.av,s,new A.d(r.a,r.b,r.c),q,p,o,k,j,!0,a1.z,!1,a1.as,a1.at,n,l,m,i,h,a0,g,f,e)},
bK(a,b){var s=null,r=new A.bJ(0,6.283185307179586,0.08,a,9,0.35,B.h,A.aq(s,0,B.b,s,0),s,s,4,0,!1,0.01,!1,0.000001,4,s,s,s,B.b,$,s,$,$,$)
r.S(B.b,s,s)
r.ao(b)
return r},
hK(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=null
A.aq(a0,0,B.b,a0,0)
s=a1.fx
r=a1.fy
q=A.b5(a1.go)
p=a1.id
p=p==null?a0:A.a8(p)
o=a1.k1
o=o==null?a0:A.a8(o)
n=a1.ax
n=n==null?a0:J.o(n,new A.P(),t.G)
if(n==null)n=A.b([],t.O)
m=t.G
n=A.f(n,!0,m)
l=a1.ay
l=l==null?a0:J.o(l,new A.Q(),m)
l=A.f(l==null?A.b([],t.O):l,!0,m)
k=a1.ch
k=k==null?a0:J.o(k,new A.R(),m)
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
e.push(new A.d(a.a,a.b,a.c))}return new A.bJ(a1.y2,a1.J,a1.K,a1.N,a1.av,s,new A.d(r.a,r.b,r.c),q,p,o,k,j,!0,a1.z,!1,a1.as,a1.at,n,l,m,i,h,a0,g,f,e)},
jt(a,b,c,d,e){var s=null,r=new A.T(a,d,e,c,0.35,B.h,A.aq(s,0,B.b,s,0),s,s,4,0,!1,0.01,!1,0.000001,4,s,s,s,B.b,$,s,$,$,$)
r.S(B.b,s,s)
r.ao(b)
return r},
ju(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=null,a1=a3.K,a2=a3.N
A.aq(a0,0,B.b,a0,0)
s=a3.fx
r=a3.fy
q=A.b5(a3.go)
p=a3.id
p=p==null?a0:A.a8(p)
o=a3.k1
o=o==null?a0:A.a8(o)
n=a3.ax
n=n==null?a0:J.o(n,new A.P(),t.G)
if(n==null)n=A.b([],t.O)
m=t.G
n=A.f(n,!0,m)
l=a3.ay
l=l==null?a0:J.o(l,new A.Q(),m)
l=A.f(l==null?A.b([],t.O):l,!0,m)
k=a3.ch
k=k==null?a0:J.o(k,new A.R(),m)
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
e.push(new A.d(a.a,a.b,a.c))}return new A.T(a3.y2,a3.J,a1,a2,s,new A.d(r.a,r.b,r.c),q,p,o,k,j,a3.y,a3.z,!1,a3.as,a3.at,n,l,m,i,h,a0,g,f,e)},
hJ(a,b,c){var s,r,q,p=null,o=new A.bG(0.05,p,0.5,0,p,c,b,0.35,B.h,A.aq(p,0,B.b,p,0),p,p,4,0,!1,0.01,!1,0.000001,4,p,p,p,B.b,$,p,$,$,$)
o.S(B.b,p,p)
o.ao(a)
s=o.dl()
r=new A.bH(4,0,!1,0.01,!1,0.000001,4,p,p,p,B.b,$,p,$,$,$)
r.S(B.b,p,p)
r.e0(o,B.b,s,0.5)
o.sW(t.y.a(A.b([],t.l)))
q=r.d
q===$&&A.a("submobjects")
o.U(t.a.a(q))
return o},
jf(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=null,a1=a3.K,a2=a3.N
A.aq(a0,0,B.b,a0,0)
s=a3.fx
r=a3.fy
q=A.b5(a3.go)
p=a3.id
p=p==null?a0:A.a8(p)
o=a3.k1
o=o==null?a0:A.a8(o)
n=a3.ax
n=n==null?a0:J.o(n,new A.P(),t.G)
if(n==null)n=A.b([],t.O)
m=t.G
n=A.f(n,!0,m)
l=a3.ay
l=l==null?a0:J.o(l,new A.Q(),m)
l=A.f(l==null?A.b([],t.O):l,!0,m)
k=a3.ch
k=k==null?a0:J.o(k,new A.R(),m)
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
e.push(new A.d(a.a,a.b,a.c))}return new A.bG(a3.al,a3.a0,a3.b0,a3.y2,a3.J,a1,a2,s,new A.d(r.a,r.b,r.c),q,p,o,k,j,a3.y,a3.z,!1,a3.as,a3.at,n,l,m,i,h,a0,g,f,e)},
hU(a,b){var s=null,r=new A.az(4,0,!1,0.01,!1,0.000001,4,s,s,s,b,$,s,$,$,$)
r.S(b,s,s)
r.cb(a,b)
return r},
jC(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.ax
e=e==null?f:J.o(e,new A.P(),t.G)
if(e==null)e=A.b([],t.O)
s=t.G
e=A.f(e,!0,s)
r=a.ay
r=r==null?f:J.o(r,new A.Q(),s)
r=A.f(r==null?A.b([],t.O):r,!0,s)
q=a.ch
q=q==null?f:J.o(q,new A.R(),s)
s=A.f(q==null?A.b([],t.O):q,!0,s)
q=a.gI()
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
k.push(new A.d(g.a,g.b,g.c))}return new A.az(q,p,a.y,a.z,!1,a.as,a.at,e,r,s,o,n,f,m,l,k)},
jI(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.ax
e=e==null?f:J.o(e,new A.P(),t.G)
if(e==null)e=A.b([],t.O)
s=t.G
e=A.f(e,!0,s)
r=a.ay
r=r==null?f:J.o(r,new A.Q(),s)
r=A.f(r==null?A.b([],t.O):r,!0,s)
q=a.ch
q=q==null?f:J.o(q,new A.R(),s)
s=A.f(q==null?A.b([],t.O):q,!0,s)
q=a.gI()
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
jO(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.ax
e=e==null?f:J.o(e,new A.P(),t.G)
if(e==null)e=A.b([],t.O)
s=t.G
e=A.f(e,!0,s)
r=a.ay
r=r==null?f:J.o(r,new A.Q(),s)
r=A.f(r==null?A.b([],t.O):r,!0,s)
q=a.ch
q=q==null?f:J.o(q,new A.R(),s)
s=A.f(q==null?A.b([],t.O):q,!0,s)
q=a.gI()
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
k.push(new A.d(g.a,g.b,g.c))}return new A.cf(q,p,a.y,a.z,!1,a.as,a.at,e,r,s,o,n,f,m,l,k)},
a8(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.ax
e=e==null?f:J.o(e,new A.P(),t.G)
if(e==null)e=A.b([],t.O)
s=t.G
e=A.f(e,!0,s)
r=a.ay
r=r==null?f:J.o(r,new A.Q(),s)
r=A.f(r==null?A.b([],t.O):r,!0,s)
q=a.ch
q=q==null?f:J.o(q,new A.R(),s)
s=A.f(q==null?A.b([],t.O):q,!0,s)
q=a.b1
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
k.push(new A.d(g.a,g.b,g.c))}return new A.bz(q,p,a.y,a.z,!1,a.as,a.at,e,r,s,o,n,f,m,l,k)},
ce:function ce(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dj:function dj(a){this.b=a},
bi:function bi(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1){var _=this
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
bx:function bx(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6){var _=this
_.y2=a
_.J=b
_.K=c
_.N=d
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
bF:function bF(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6){var _=this
_.y2=a
_.J=b
_.K=c
_.N=d
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
bJ:function bJ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6){var _=this
_.y2=a
_.J=b
_.K=c
_.N=d
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
T:function T(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5){var _=this
_.y2=a
_.J=b
_.K=c
_.N=d
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
bG:function bG(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8){var _=this
_.al=a
_.a0=b
_.b0=c
_.y2=d
_.J=e
_.K=f
_.N=g
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
az:function az(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cf:function cf(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
bz:function bz(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.b1=0
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
jh(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=a.ay
f===$&&A.a("draggedListener")
s=a.ch
s===$&&A.a("pressedListener")
r=a.CW
r===$&&A.a("releasedListener")
q=a.cx
p=A.hK(a.w)
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
k.push(new A.d(g.a,g.b,g.c))}return new A.bL(f,s,r,q,p,o,n,null,m,l,k)},
d1:function d1(){},
bL:function bL(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
e7:function e7(a){this.a=a},
e8:function e8(a){this.a=a},
e9:function e9(a){this.a=a},
jz(a){var s,r,q,p,o,n,m,l,k=a.a
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
hM(a){var s=new A.bR(B.b,$,null,$,$,$)
s.S(B.b,null,null)
s.U(t.a.a(a))
return s},
jm(a){var s,r,q,p,o,n,m,l,k=a.a
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
p.push(new A.d(l.a,l.b,l.c))}return new A.bR(k,s,null,r,q,p)},
p:function p(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=$
_.f=e
_.r=f},
eu:function eu(a){this.a=a},
et:function et(a){this.a=a},
es:function es(a){this.a=a},
ev:function ev(a,b){this.a=a
this.b=b},
eq:function eq(){},
er:function er(a){this.a=a},
bR:function bR(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=$
_.f=e
_.r=f},
jQ(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a.ax
d=d==null?e:J.o(d,new A.P(),t.G)
if(d==null)d=A.b([],t.O)
s=t.G
d=A.f(d,!0,s)
r=a.ay
r=r==null?e:J.o(r,new A.Q(),s)
r=A.f(r==null?A.b([],t.O):r,!0,s)
q=a.ch
q=q==null?e:J.o(q,new A.R(),s)
s=A.f(q==null?A.b([],t.O):q,!0,s)
q=a.gI()
p=a.x
o=a.gaX()
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
j.push(new A.d(f.a,f.b,f.c))}return new A.y(q,p,o,a.z,!1,a.as,a.at,d,r,s,n,m,e,l,k,j)},
i4(a){var s=null,r=new A.aT(4,0,!1,0.01,!1,0.000001,4,s,s,s,B.b,$,s,$,$,$)
r.S(B.b,s,s)
r.cc(a)
return r},
jP(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.ax
e=e==null?f:J.o(e,new A.P(),t.G)
if(e==null)e=A.b([],t.O)
s=t.G
e=A.f(e,!0,s)
r=a.ay
r=r==null?f:J.o(r,new A.Q(),s)
r=A.f(r==null?A.b([],t.O):r,!0,s)
q=a.ch
q=q==null?f:J.o(q,new A.R(),s)
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
jR(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.ax
e=e==null?f:J.o(e,new A.P(),t.G)
if(e==null)e=A.b([],t.O)
s=t.G
e=A.f(e,!0,s)
r=a.ay
r=r==null?f:J.o(r,new A.Q(),s)
r=A.f(r==null?A.b([],t.O):r,!0,s)
q=a.ch
q=q==null?f:J.o(q,new A.R(),s)
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
k.push(new A.d(g.a,g.b,g.c))}return new A.ch(a.fx,a.fy,q,p,a.y,a.z,!1,a.as,a.at,e,r,s,o,n,f,m,l,k)},
jg(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.ax
e=e==null?f:J.o(e,new A.P(),t.G)
if(e==null)e=A.b([],t.O)
s=t.G
e=A.f(e,!0,s)
r=a.ay
r=r==null?f:J.o(r,new A.Q(),s)
r=A.f(r==null?A.b([],t.O):r,!0,s)
q=a.ch
q=q==null?f:J.o(q,new A.R(),s)
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
k.push(new A.d(g.a,g.b,g.c))}return new A.bH(q,p,a.y,a.z,!1,a.as,a.at,e,r,s,o,n,f,m,l,k)},
y:function y(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
P:function P(){},
Q:function Q(){},
R:function R(){},
eT:function eT(){},
eU:function eU(){},
eO:function eO(a,b){this.a=a
this.b=b},
eQ:function eQ(a,b){this.a=a
this.b=b},
eP:function eP(a,b){this.a=a
this.b=b},
eK:function eK(a,b){this.a=a
this.b=b},
eN:function eN(a){this.a=a},
eL:function eL(){},
eM:function eM(){},
eS:function eS(){},
eR:function eR(){},
cg:function cg(a,b,c,d,e){var _=this
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
ch:function ch(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
bH:function bH(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
bw:function bw(){},
j7(){return new A.cT($.bu())},
cT:function cT(a){this.e=$
this.b=a
this.d=$},
e4:function e4(){},
eD:function eD(){},
eE:function eE(a){this.a=a},
v(a,b,c){var s,r=A.b([],t.t)
if(c>0)for(s=b;s<a;s+=c)B.a.u(r,s)
else for(s=b;s>a;s+=c)B.a.u(r,s)
return r},
fD(a,b){var s,r,q,p=J.ho(a)
if(p.gT(a))return A.b([],b.h("t<x<r,0>>"))
s=A.b([],b.h("t<x<r,0>>"))
for(r=t.dq.C(b).h("x<1,2>"),q=0;q<p.gl(a);++q)B.a.u(s,new A.x(q,p.i(a,q),r))
return s},
hv(a,b){if(a.length===0)return b.a(0)
return B.a.X(a,new A.fS(b))},
dG(a,b,c){var s,r,q,p,o,n,m,l=A.b([],t.b)
for(s=A.v(a,0,1),r=s.length,q=a-1,p=t.n,o=0;o<s.length;s.length===r||(0,A.c)(s),++o){n=s[o]
if(typeof n!=="number")return n.a3()
m=n/q
l.push(A.b([c*(1-m)+b*m],p))}return A.X(null,l)},
hj(a,b,c){var s,r,q,p,o=A.v(B.d.bs((a-b)/c),0,1),n=A.b([],t.b)
for(s=o.length,r=t.n,q=0;q<o.length;o.length===s||(0,A.c)(o),++q){p=o[q]
if(typeof p!=="number")return p.q()
n.push(A.b([p*c+b],r))}return A.X(null,n)},
ba(a,b,c){var s,r,q,p,o,n,m=J.ho(a)
if(m.gT(a))return a
s=m.gl(a)
if(s>b)throw A.e("Trying to stretch an array to a length shorter than its own")
r=A.v(b,0,1)
q=A.w(r)
p=q.h("K<1,l>")
o=new A.K(r,q.h("l(1)").a(new A.fR(b,s)),p)
q=A.b([],c.h("t<0>"))
for(r=new A.a3(o,o.gl(o),p.h("a3<C.E>")),p=p.h("C.E");r.m();){n=r.d
q.push(m.i(a,B.d.aa(n==null?p.a(n):n)))}return q},
l_(a,b,c,d){var s,r,q,p,o,n,m,l=Math.max(a.length,b.length),k=A.b([],c.h("t<0>"))
for(s=A.v(l,0,1),r=s.length,q=0;q<s.length;s.length===r||(0,A.c)(s),++q){p=s[q]
o=a.length
if(typeof p!=="number")return p.q()
n=B.d.ad(p*o,l)
if(!(n>=0&&n<o))return A.k(a,n)
k.push(a[n])}s=A.b([],d.h("t<0>"))
for(r=A.v(l,0,1),o=r.length,q=0;q<r.length;r.length===o||(0,A.c)(r),++q){p=r[q]
n=b.length
if(typeof p!=="number")return p.q()
m=B.d.ad(p*n,l)
if(!(m>=0&&m<n))return A.k(b,m)
s.push(b[m])}return new A.x(k,s,c.h("@<m<0>>").C(d.h("m<0>")).h("x<1,2>"))},
fT(a,b){var s=A.eh(a,new A.fU(b),b)
return A.f(s,!0,s.$ti.h("n.E"))},
iL(a,b){var s=A.f(a,!0,b)
if(0>=s.length)return A.k(s,-1)
s.pop()
return s},
lc(a,b){var s,r,q,p=A.b([],b.h("t<0>")),o=A.jw(b)
for(s=A.w(a).h("aA<1>"),r=new A.aA(a,s),r=new A.a3(r,r.gl(r),s.h("a3<C.E>")),s=s.h("C.E");r.m();){q=r.d
if(q==null)q=s.a(q)
if(!o.ai(0,q)){B.a.u(p,q)
o.u(0,q)}}s=b.h("aA<0>")
return A.f(new A.aA(p,s),!0,s.h("C.E"))},
fS:function fS(a){this.a=a},
fR:function fR(a,b){this.a=a
this.b=b},
fU:function fU(a){this.a=a},
ht(a,b,c){var s,r,q=t.p
q=A.fI(A.X(null,J.o(a,new A.fJ(),q).R(0)),A.X(null,J.o(b,new A.fK(),q).R(0)),c,t.A).a
q===$&&A.a("values")
s=A.w(q)
r=s.h("K<1,u>")
return A.f(new A.K(q,s.h("u(1)").a(new A.fL()),r),!0,r.h("C.E"))},
fI(a,b,c,d){return d.a(J.fW(J.cL(a,1-c),J.cL(b,c)))},
iC(a,b,c,d){return d.a(J.fW(J.cL(a,1-c),J.cL(b,c)))},
hs(a,b,c){if(c>=1)return new A.x(b-1,1,t.d)
if(c<=0)return new A.x(a,0,t.d)
return new A.x(J.j1(A.fI(a,b,c,t.V)),B.d.a8((b-a)*c,1),t.d)},
hk(a){return new A.fx(a,a.length-1)},
fO(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(b===1){s=A.b([],t.l)
for(r=a.a,q=J.aa(r),p=A.v(q.gl(r),0,1),o=p.length,n=a.$ti.z[1],m=0;m<p.length;p.length===o||(0,A.c)(p),++m){if(q.gl(r)===0)A.I(A.a2())
s.push(n.a(q.i(r,q.gl(r)-1)))}return s}s=t.l
r=A.b([],s)
for(q=a.a,p=J.aa(q),o=A.v(p.gl(q),0,1),n=o.length,l=a.$ti,k=l.h("ae.E"),l=l.h("ap<ae.E>"),m=0;m<o.length;o.length===n||(0,A.c)(o),++m){j=A.Y(o[m])
i=new A.ap(a,j,null,l)
i.bg(a,j,null,k)
r.push(A.hk(i.R(0)).$1(b))}h=(c-b)/(1-b)
s=A.b([],s)
for(q=A.v(p.gl(q),0,1),p=q.length,o=t.i,n=t.e3,m=0;m<q.length;q.length===p||(0,A.c)(q),++m){g=q[m]
if(typeof g!=="number")return g.B()
l=A.Y(g+1)
A.bg(0,l,r.length)
k=new A.ap(r,0,l,n)
k.bg(r,0,l,o)
s.push(A.hk(k.R(0)).$1(h))}return s},
fJ:function fJ(){},
fK:function fK(){},
fL:function fL(){},
fx:function fx(a,b){this.a=a
this.b=b},
fw:function fw(){},
kg(a){var s,r,q,p,o,n,m,l,k,j,i
if(B.j.dN(a,"#")){A.hW(0,0,a.length,"startIndex")
a=A.l6(a,"#","",0)}s=a.length
if(!B.a.ai(A.b([3,4,6,8],t.t),s))throw A.e("Hex string #"+a+" not well formated")
if(s===3||s===4){s=t.s
r=A.b([],s)
for(q=a.split(""),p=q.length,o=0;o<p;++o){n=q[o]
B.a.A(r,A.b([n,n],s))}a=B.a.bC(r,"")}if(a.length===6)a+="ff"
m=new A.fr()
l=B.j.aE(a,0,2)
k=B.j.aE(a,2,4)
j=B.j.aE(a,4,6)
i=B.j.aE(a,6,8)
return new A.u(m.$1(l),m.$1(k),m.$1(j),m.$1(i))},
u:function u(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fr:function fr(){},
bc:function bc(a,b){this.a=a
this.b=b},
h5(a){switch(a){case 0:break
case 1:break
case 2:break
default:break}return new A.ew(a)},
al:function al(a){this.b=a},
ac:function ac(){},
ea:function ea(){this.a=$},
ad:function ad(a,b,c){this.a=a
this.b=b
this.$ti=c},
d7:function d7(){},
c2:function c2(a,b){this.c=a
this.a=b},
aN:function aN(a,b){this.c=a
this.a=b},
aO:function aO(a,b){this.c=a
this.a=b},
aM:function aM(a,b){this.c=a
this.a=b},
ew:function ew(a){this.a=a},
iw(a,b,c){var s,r
if(c){if(!$.dE.cL(a)){s=t.S
$.dE.n(0,a,A.h3(s,s))}if(!$.dE.i(0,a).cL(b)){s=$.dE.i(0,a)
s.toString
s.n(0,b,A.iw(a,b,!1))}s=$.dE.i(0,a).i(0,b)
s.toString
return s}if(a<b)return 0
if(b===0)return 1
s=t.S
r=B.a.bA(A.v(b+1,1,1),1,new A.fz(),s)
return B.e.ad(B.a.bA(A.v(a-b,a,-1),1,new A.fA(),s),r)},
dH(a,b,c,d,e){return(a-b)/(c-b)*(e-d)+d},
fz:function fz(){},
fA:function fA(){},
X(a,b){var s,r,q=new A.ak(b)
if(a==null){s=b.length
r=s!==0?J.B(B.a.gD(b)):0
a=new A.x(s,r,t.o)
s=a}else s=a
q.se6(t.o.a(s))
return q},
b_(a,b){var s,r,q,p,o,n,m,l,k=b.b,j=A.b([],t.b)
for(s=A.v(b.a,0,1),r=s.length,q=t.n,p=0;p<s.length;s.length===r||(0,A.c)(s),++p){o=A.b([],q)
for(n=A.v(k,0,1),m=n.length,l=0;l<n.length;n.length===m||(0,A.c)(n),++l)o.push(a)
j.push(o)}return A.X(b,j)},
hC(a){var s,r,q,p,o,n=A.b([],t.b)
for(s=a.length,r=t.n,q=0;p=a.length,q<p;a.length===s||(0,A.c)(a),++q){o=a[q]
n.push(A.b([o.a,o.b,o.c],r))}return A.X(new A.x(p,3,t.o),n)},
fX(a){var s,r,q,p,o,n,m,l,k,j,i=A.b([],t.b)
for(s=A.v(a,0,1),r=s.length,q=t.n,p=0;p<s.length;s.length===r||(0,A.c)(s),++p){o=s[p]
n=A.b([],q)
for(m=A.v(a,0,1),l=m.length,k=J.aH(o),j=0;j<m.length;m.length===l||(0,A.c)(m),++j)if(k.E(o,m[j]))n.push(1)
else n.push(0)
i.push(n)}return A.X(new A.x(a,a,t.o),i)},
l4(a,b){var s=A.iJ(a),r=A.ld(b)
return B.a.X(A.b([r,s,r.dq()],t.aM),new A.fQ())},
iJ(a){var s=t.n
return A.X(null,A.b([A.b([Math.cos(a),-Math.sin(a),0],s),A.b([Math.sin(a),Math.cos(a),0],s),A.b([0,0,1],s)],t.b))},
ld(a){var s,r,q,p,o,n
if(a.a2()===0)return A.fX(3)
s=a.a3(0,Math.sqrt(a.a2()))
r=Math.acos(s.c)
if(s.a!==0||s.b!==0){q=s.dh(0)
p=q.a3(0,Math.sqrt(q.a2()))
o=Math.acos(p.a)
if(p.b<0)o*=-1}else o=0
q=t.n
n=A.X(null,A.b([A.b([Math.cos(r),0,Math.sin(r)],q),A.b([0,1,0],q),A.b([-Math.sin(r),0,Math.cos(r)],q)],t.b))
return A.iJ(o).az(n)},
l2(a,b){var s,r,q,p,o=a/2,n=b.a3(0,Math.sqrt(b.a2())).q(0,Math.sin(o)),m=A.b([],t.b)
for(s=[n.a,n.b,n.c],r=s.length,q=t.n,p=0;p<r;++p)m.push(A.b([s[p]],q))
m.push(A.b([Math.cos(o)],q))
return A.X(null,m)},
kM(a,b){var s,r,q,p,o,n,m,l,k,j=6.283185307179586/a,i=t.bN,h=A.b([],i)
for(s=A.v(a,0,1),r=s.length,q=0;q<s.length;s.length===r||(0,A.c)(s),++q){p=s[q]
if(typeof p!=="number")return A.cI(p)
o=j*p
h.push(new A.bc(Math.cos(o),Math.sin(o)))}i=A.b([],i)
for(s=h.length,r=b.a,o=b.b,q=0;q<h.length;h.length===s||(0,A.c)(h),++q){n=h[q]
m=n.a
l=n.b
i.push(new A.bc(m*r-l*o,m*o+l*r))}h=A.b([],t.l)
for(s=i.length,q=0;q<i.length;i.length===s||(0,A.c)(i),++q){k=i[q]
h.push(new A.d(k.a,k.b,0))}return h},
ak:function ak(a){this.a=a
this.b=$},
dU:function dU(a){this.a=a},
dX:function dX(a){this.a=a},
dW:function dW(a){this.a=a},
dV:function dV(a){this.a=a},
dT:function dT(a){this.a=a},
dS:function dS(a,b){this.a=a
this.b=b},
dR:function dR(a){this.a=a},
dY:function dY(a){this.a=a},
dQ:function dQ(){},
dP:function dP(a){this.a=a},
fQ:function fQ(){},
d:function d(a,b,c){this.a=a
this.b=b
this.c=c},
eV:function eV(a){this.a=a},
x:function x(a,b,c){this.a=a
this.b=b
this.$ti=c},
bj:function bj(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
kY(){var s,r,q,p,o="renderer",n=document,m=n.getElementById("canvas-container")
m.toString
s=A.b([],t.db)
r=A.h5(0)
n=n.createElement("canvas")
t.gA.a(n)
q=new A.cS(n,m,s,B.c,B.c,r,B.c,B.c)
q.a=A.j7()
m.appendChild(n).toString
p=new A.el()
p.e3()
p.w=q
n=p.f
n===$&&A.a("camera")
q.cI(n)
n=p.f
m=p.w
n.r=m
m.cI(n)
m=n.r
s=m.a
s===$&&A.a(o)
s.dQ(m)
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
el:function el(){var _=this
_.CW=_.ch=_.ay=_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=$
_.a=0
_.w=_.f=_.d=$},
em:function em(){},
en:function en(){},
ep:function ep(a){this.a=a},
eo:function eo(a){this.a=a},
l1(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
a(a){return A.I(A.js(a))},
l9(a){return A.I(new A.bY("Field '"+a+"' has been assigned during initialization."))},
hN(a,b){return A.jp(a,b,b)},
jp(a,b,c){return A.ip(function(){var s=a,r=b
var q=0,p=1,o,n,m
return function $async$hN(d,e){if(d===1){o=e
q=p}while(true)switch(q){case 0:n=s.length,m=0
case 2:if(!(m<s.length)){q=4
break}q=5
return A.jW(s[m])
case 5:case 3:s.length===n||(0,A.c)(s),++m
q=2
break
case 4:return A.i7()
case 1:return A.i8(o)}}},c)},
eh(a,b,c){return A.jx(a,b,c,c)},
jx(a,b,c,d){return A.ip(function(){var s=a,r=b,q=c
var p=0,o=1,n,m,l,k
return function $async$eh(e,f){if(e===1){n=f
p=o}while(true)switch(p){case 0:m=J.aa(s),l=0
case 2:if(!(l<m.gl(s))){p=4
break}k=m.i(s,l)
p=A.br(r.$2(l,k))?5:6
break
case 5:p=7
return k
case 7:case 6:case 3:++l
p=2
break
case 4:return A.i7()
case 1:return A.i8(n)}}},d)}},J={
hu(a,b,c,d){return{i:a,p:b,e:c,x:d}},
hp(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.hr==null){A.kR()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.e(A.i3("Return interceptor for "+A.q(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.fh
if(o==null)o=$.fh=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.kX(a)
if(p!=null)return p
if(typeof a=="function")return B.X
s=Object.getPrototypeOf(a)
if(s==null)return B.J
if(s===Object.prototype)return B.J
if(typeof q=="function"){o=$.fh
if(o==null)o=$.fh=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.C,enumerable:false,writable:true,configurable:true})
return B.C}return B.C},
hO(a,b){if(a<0||a>4294967295)throw A.e(A.at(a,0,4294967295,"length",null))
return J.hQ(new Array(a),b)},
hP(a,b){if(a<0)throw A.e(A.dN("Length must be a non-negative integer: "+a,null))
return A.b(new Array(a),b.h("t<0>"))},
hQ(a,b){return J.ee(A.b(a,b.h("t<0>")),b)},
ee(a,b){a.fixed$length=Array
return a},
jq(a,b){var s=t.e8
return J.j0(s.a(a),s.a(b))},
aH(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.bV.prototype
return J.d3.prototype}if(typeof a=="string")return J.ay.prototype
if(a==null)return J.bW.prototype
if(typeof a=="boolean")return J.d2.prototype
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aL.prototype
return a}if(a instanceof A.z)return a
return J.hp(a)},
O(a){if(a==null)return a
if(a.constructor==Array)return J.t.prototype
if(!(a instanceof A.z))return J.au.prototype
return a},
kN(a){if(typeof a=="number")return J.aK.prototype
if(typeof a=="string")return J.ay.prototype
if(a==null)return a
if(a.constructor==Array)return J.t.prototype
if(!(a instanceof A.z))return J.au.prototype
return a},
ho(a){if(typeof a=="string")return J.ay.prototype
if(a==null)return a
if(a.constructor==Array)return J.t.prototype
if(!(a instanceof A.z))return J.au.prototype
return a},
aa(a){if(typeof a=="string")return J.ay.prototype
if(a==null)return a
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aL.prototype
return a}if(a instanceof A.z)return a
return J.hp(a)},
ix(a){if(typeof a=="number")return J.aK.prototype
if(a==null)return a
if(!(a instanceof A.z))return J.au.prototype
return a},
iy(a){if(typeof a=="number")return J.aK.prototype
if(typeof a=="string")return J.ay.prototype
if(a==null)return a
if(!(a instanceof A.z))return J.au.prototype
return a},
iz(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aL.prototype
return a}if(a instanceof A.z)return a
return J.hp(a)},
fW(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.kN(a).B(a,b)},
ab(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.aH(a).E(a,b)},
cL(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.iy(a).q(a,b)},
iX(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.ix(a).t(a,b)},
S(a,b){if(typeof b==="number")if(a.constructor==Array)if(b>>>0===b&&b<a.length)return a[b]
return J.O(a).i(a,b)},
iY(a,b,c){return J.O(a).n(a,b,c)},
iZ(a,b,c,d){return J.iz(a).ee(a,b,c,d)},
j_(a,b,c,d){return J.iz(a).eo(a,b,c,d)},
j0(a,b){return J.iy(a).cJ(a,b)},
hy(a,b){return J.O(a).P(a,b)},
dI(a){return J.O(a).gD(a)},
a7(a){return J.aH(a).gH(a)},
cM(a){return J.ho(a).gT(a)},
U(a){return J.O(a).gv(a)},
hz(a){return J.O(a).gF(a)},
B(a){return J.aa(a).gl(a)},
o(a,b,c){return J.O(a).bD(a,b,c)},
hA(a,b){return J.O(a).Z(a,b)},
j1(a){return J.ix(a).aa(a)},
dJ(a){return J.O(a).R(a)},
cN(a){return J.aH(a).k(a)},
bT:function bT(){},
d2:function d2(){},
bW:function bW(){},
am:function am(){},
b2:function b2(){},
db:function db(){},
au:function au(){},
aL:function aL(){},
t:function t(a){this.$ti=a},
ef:function ef(a){this.$ti=a},
by:function by(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aK:function aK(){},
bV:function bV(){},
d3:function d3(){},
ay:function ay(){}},B={}
var w=[A,J,B]
var $={}
A.h1.prototype={}
J.bT.prototype={
E(a,b){return a===b},
gH(a){return A.aP(a)},
k(a){return"Instance of '"+A.eC(a)+"'"}}
J.d2.prototype={
k(a){return String(a)},
gH(a){return a?519018:218159},
$iA:1}
J.bW.prototype={
E(a,b){return null==b},
k(a){return"null"},
gH(a){return 0},
$iM:1}
J.am.prototype={}
J.b2.prototype={
gH(a){return 0},
k(a){return String(a)}}
J.db.prototype={}
J.au.prototype={}
J.aL.prototype={
k(a){var s=a[$.iM()]
if(s==null)return this.dS(a)
return"JavaScript function for "+J.cN(s)},
$iax:1}
J.t.prototype={
u(a,b){A.w(a).c.a(b)
if(!!a.fixed$length)A.I(A.a4("add"))
a.push(b)},
f0(a,b,c){var s,r
A.w(a).h("n<1>").a(c)
if(!!a.fixed$length)A.I(A.a4("insertAll"))
A.hW(b,0,a.length,"index")
if(!t.X.b(c))c=J.dJ(c)
s=J.B(c)
a.length=a.length+s
r=b+s
this.c5(a,r,a.length,a,b)
this.dD(a,b,r,c)},
f8(a,b){var s
if(!!a.fixed$length)A.I(A.a4("remove"))
for(s=0;s<a.length;++s)if(J.ab(a[s],b)){a.splice(s,1)
return!0}return!1},
cw(a,b,c){var s,r,q,p,o
A.w(a).h("A(1)").a(b)
s=[]
r=a.length
for(q=0;q<r;++q){p=a[q]
if(!A.br(b.$1(p)))s.push(p)
if(a.length!==r)throw A.e(A.ah(a))}o=s.length
if(o===r)return
this.sl(a,o)
for(q=0;q<s.length;++q)a[q]=s[q]},
A(a,b){var s
A.w(a).h("n<1>").a(b)
if(!!a.fixed$length)A.I(A.a4("addAll"))
if(Array.isArray(b)){this.ed(a,b)
return}for(s=J.U(b);s.m();)a.push(s.gp())},
ed(a,b){var s,r
t.gn.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.e(A.ah(a))
for(r=0;r<s;++r)a.push(b[r])},
bD(a,b,c){var s=A.w(a)
return new A.K(a,s.C(c).h("1(2)").a(b),s.h("@<1>").C(c).h("K<1,2>"))},
bC(a,b){var s,r=A.hS(a.length,"",!1,t.aw)
for(s=0;s<a.length;++s)this.n(r,s,A.q(a[s]))
return r.join(b)},
f4(a){return this.bC(a,"")},
Z(a,b){return A.cd(a,b,null,A.w(a).c)},
X(a,b){var s,r,q
A.w(a).h("1(1,1)").a(b)
s=a.length
if(s===0)throw A.e(A.a2())
if(0>=s)return A.k(a,0)
r=a[0]
for(q=1;q<s;++q){r=b.$2(r,a[q])
if(s!==a.length)throw A.e(A.ah(a))}return r},
bA(a,b,c,d){var s,r,q
d.a(b)
A.w(a).C(d).h("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.e(A.ah(a))}return r},
P(a,b){if(!(b>=0&&b<a.length))return A.k(a,b)
return a[b]},
gD(a){if(a.length>0)return a[0]
throw A.e(A.a2())},
gF(a){var s=a.length
if(s>0)return a[s-1]
throw A.e(A.a2())},
f9(a,b,c){if(!!a.fixed$length)A.I(A.a4("removeRange"))
A.bg(b,c,a.length)
a.splice(b,c-b)},
c5(a,b,c,d,e){var s,r,q,p,o
A.w(a).h("n<1>").a(d)
if(!!a.immutable$list)A.I(A.a4("setRange"))
A.bg(b,c,a.length)
s=c-b
if(s===0)return
A.an(e,"skipCount")
if(t.aH.b(d)){r=d
q=e}else{r=J.hA(d,e).af(0,!1)
q=0}p=J.aa(r)
if(q+s>p.gl(r))throw A.e(A.jo())
if(q<b)for(o=s-1;o>=0;--o)a[b+o]=p.i(r,q+o)
else for(o=0;o<s;++o)a[b+o]=p.i(r,q+o)},
dD(a,b,c,d){return this.c5(a,b,c,d,0)},
b_(a,b){var s,r
A.w(a).h("A(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!A.br(b.$1(a[r])))return!1
if(a.length!==s)throw A.e(A.ah(a))}return!0},
dM(a,b){var s,r=A.w(a)
r.h("r(1,1)?").a(b)
if(!!a.immutable$list)A.I(A.a4("sort"))
s=b==null?J.ko():b
A.jM(a,s,r.c)},
dL(a){return this.dM(a,null)},
eZ(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s){if(!(s<a.length))return A.k(a,s)
if(J.ab(a[s],b))return s}return-1},
ai(a,b){var s
for(s=0;s<a.length;++s)if(J.ab(a[s],b))return!0
return!1},
gT(a){return a.length===0},
k(a){return A.h0(a,"[","]")},
af(a,b){var s=A.b(a.slice(0),A.w(a))
return s},
R(a){return this.af(a,!0)},
gv(a){return new J.by(a,a.length,A.w(a).h("by<1>"))},
gH(a){return A.aP(a)},
gl(a){return a.length},
sl(a,b){if(!!a.fixed$length)A.I(A.a4("set length"))
if(b<0)throw A.e(A.at(b,0,null,"newLength",null))
if(b>a.length)A.w(a).c.a(null)
a.length=b},
i(a,b){if(!(b>=0&&b<a.length))throw A.e(A.fB(a,b))
return a[b]},
n(a,b,c){A.w(a).c.a(c)
if(!!a.immutable$list)A.I(A.a4("indexed set"))
if(!(b>=0&&b<a.length))throw A.e(A.fB(a,b))
a[b]=c},
f_(a,b){var s
A.w(a).h("A(1)").a(b)
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(A.br(b.$1(a[s])))return s
return-1},
$iD:1,
$in:1,
$im:1}
J.ef.prototype={}
J.by.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.e(A.c(q))
s=r.c
if(s>=p){r.scq(null)
return!1}r.scq(q[s]);++r.c
return!0},
scq(a){this.d=this.$ti.h("1?").a(a)},
$iE:1}
J.aK.prototype={
cJ(a,b){var s
A.hf(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gb3(b)
if(this.gb3(a)===s)return 0
if(this.gb3(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gb3(a){return a===0?1/a<0:a<0},
aa(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.e(A.a4(""+a+".toInt()"))},
bs(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.e(A.a4(""+a+".ceil()"))},
eW(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.e(A.a4(""+a+".floor()"))},
bN(a,b){var s
if(b>20)throw A.e(A.at(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gb3(a))return"-"+s
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
B(a,b){A.hf(b)
return a+b},
q(a,b){return a*b},
a8(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
ad(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cz(a,b)},
a_(a,b){return(a|0)===a?a/b|0:this.cz(a,b)},
cz(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.e(A.a4("Result of truncating division is "+A.q(s)+": "+A.q(a)+" ~/ "+b))},
es(a,b){var s
if(a>0)s=this.er(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
er(a,b){return b>31?0:a>>>b},
$iaw:1,
$il:1,
$iJ:1}
J.bV.prototype={$ir:1}
J.d3.prototype={}
J.ay.prototype={
eh(a,b){if(b>=a.length)throw A.e(A.fB(a,b))
return a.charCodeAt(b)},
B(a,b){return a+b},
dN(a,b){var s=a.length,r=b.length
if(r>s)return!1
return b===a.substring(0,r)},
aE(a,b,c){return a.substring(b,A.bg(b,c,a.length))},
cJ(a,b){var s
A.cz(b)
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
$ieB:1,
$iW:1}
A.aU.prototype={
gv(a){var s=A.F(this)
return new A.bE(J.U(this.gae()),s.h("@<1>").C(s.z[1]).h("bE<1,2>"))},
gl(a){return J.B(this.gae())},
gT(a){return J.cM(this.gae())},
Z(a,b){var s=A.F(this)
return A.j8(J.hA(this.gae(),b),s.c,s.z[1])},
gD(a){return A.F(this).z[1].a(J.dI(this.gae()))},
gF(a){return A.F(this).z[1].a(J.hz(this.gae()))},
k(a){return J.cN(this.gae())}}
A.bE.prototype={
m(){return this.a.m()},
gp(){return this.$ti.z[1].a(this.a.gp())},
$iE:1}
A.b1.prototype={
gae(){return this.a}}
A.cl.prototype={$iD:1}
A.cj.prototype={
i(a,b){return this.$ti.z[1].a(J.S(this.a,b))},
n(a,b,c){var s=this.$ti
J.iY(this.a,b,s.c.a(s.z[1].a(c)))},
$iD:1,
$im:1}
A.a_.prototype={
gae(){return this.a}}
A.bY.prototype={
k(a){return"LateInitializationError: "+this.a}}
A.fN.prototype={
$0(){var s=new A.N($.H,t.ck)
s.ck(null)
return s},
$S:18}
A.eF.prototype={}
A.D.prototype={}
A.C.prototype={
gv(a){var s=this
return new A.a3(s,s.gl(s),A.F(s).h("a3<C.E>"))},
gT(a){return this.gl(this)===0},
gD(a){if(this.gl(this)===0)throw A.e(A.a2())
return this.P(0,0)},
gF(a){var s=this
if(s.gl(s)===0)throw A.e(A.a2())
return s.P(0,s.gl(s)-1)},
X(a,b){var s,r,q,p=this
A.F(p).h("C.E(C.E,C.E)").a(b)
s=p.gl(p)
if(s===0)throw A.e(A.a2())
r=p.P(0,0)
for(q=1;q<s;++q){r=b.$2(r,p.P(0,q))
if(s!==p.gl(p))throw A.e(A.ah(p))}return r},
Z(a,b){return A.cd(this,b,null,A.F(this).h("C.E"))},
af(a,b){return A.f(this,b,A.F(this).h("C.E"))},
R(a){return this.af(a,!0)}}
A.ap.prototype={
bg(a,b,c,d){var s,r=this.b
A.an(r,"start")
s=this.c
if(s!=null){A.an(s,"end")
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
if(b<0||r>=s.gej())throw A.e(A.h_(b,s,"index",null,null))
return J.hy(s.a,r)},
Z(a,b){var s,r,q=this
A.an(b,"count")
s=q.b+b
r=q.c
if(r!=null&&s>=r)return new A.bN(q.$ti.h("bN<1>"))
return A.cd(q.a,s,r,q.$ti.c)},
af(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.aa(n),l=m.gl(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.hP(0,n):J.hO(0,n)}r=A.hS(s,m.P(n,o),b,p.$ti.c)
for(q=1;q<s;++q){B.a.n(r,q,m.P(n,o+q))
if(m.gl(n)<l)throw A.e(A.ah(p))}return r},
R(a){return this.af(a,!0)}}
A.a3.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=q.gl(q)
if(r.b!==p)throw A.e(A.ah(q))
s=r.c
if(s>=p){r.saG(null)
return!1}r.saG(q.P(0,s));++r.c
return!0},
saG(a){this.d=this.$ti.h("1?").a(a)},
$iE:1}
A.b3.prototype={
gv(a){var s=A.F(this)
return new A.c1(J.U(this.a),this.b,s.h("@<1>").C(s.z[1]).h("c1<1,2>"))},
gl(a){return J.B(this.a)},
gT(a){return J.cM(this.a)},
gD(a){return this.b.$1(J.dI(this.a))},
gF(a){return this.b.$1(J.hz(this.a))}}
A.bM.prototype={$iD:1}
A.c1.prototype={
m(){var s=this,r=s.b
if(r.m()){s.saG(s.c.$1(r.gp()))
return!0}s.saG(null)
return!1},
gp(){var s=this.a
return s==null?this.$ti.z[1].a(s):s},
saG(a){this.a=this.$ti.h("2?").a(a)}}
A.K.prototype={
gl(a){return J.B(this.a)},
P(a,b){return this.b.$1(J.hy(this.a,b))}}
A.aD.prototype={
gv(a){return new A.ci(J.U(this.a),this.b,this.$ti.h("ci<1>"))}}
A.ci.prototype={
m(){var s,r
for(s=this.a,r=this.b;s.m();)if(A.br(r.$1(s.gp())))return!0
return!1},
gp(){return this.a.gp()}}
A.aB.prototype={
Z(a,b){A.dO(b,"count",t.S)
A.an(b,"count")
return new A.aB(this.a,this.b+b,A.F(this).h("aB<1>"))},
gv(a){return new A.c9(J.U(this.a),this.b,A.F(this).h("c9<1>"))}}
A.bd.prototype={
gl(a){var s=J.B(this.a)-this.b
if(s>=0)return s
return 0},
Z(a,b){A.dO(b,"count",t.S)
A.an(b,"count")
return new A.bd(this.a,this.b+b,this.$ti)},
$iD:1}
A.c9.prototype={
m(){var s,r
for(s=this.a,r=0;r<this.b;++r)s.m()
this.b=0
return s.m()},
gp(){return this.a.gp()}}
A.bN.prototype={
gv(a){return B.N},
gT(a){return!0},
gl(a){return 0},
gD(a){throw A.e(A.a2())},
gF(a){throw A.e(A.a2())},
Z(a,b){A.an(b,"count")
return this}}
A.bO.prototype={
m(){return!1},
gp(){throw A.e(A.a2())},
$iE:1}
A.aA.prototype={
gl(a){return J.B(this.a)},
P(a,b){var s=this.a,r=J.aa(s)
return r.P(s,r.gl(s)-1-b)}}
A.cx.prototype={}
A.bS.prototype={
E(a,b){if(b==null)return!1
return b instanceof A.bS&&this.a.E(0,b.a)&&A.hq(this)===A.hq(b)},
gH(a){return A.d9(this.a,A.hq(this),B.l,B.l)},
k(a){var s=B.a.bC([A.hn(this.$ti.c)],", ")
return this.a.k(0)+" with "+("<"+s+">")}}
A.aJ.prototype={
$2(a,b){return this.a.$1$2(a,b,this.$ti.z[0])},
$S(){return A.kT(A.hm(this.a),this.$ti)}}
A.eI.prototype={
a1(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.c3.prototype={
k(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
A.d5.prototype={
k(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.dl.prototype={
k(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.ex.prototype={
k(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.bP.prototype={}
A.cq.prototype={
k(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iaQ:1}
A.a0.prototype={
k(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.iK(r==null?"unknown":r)+"'"},
$iax:1,
gfs(){return this},
$C:"$1",
$R:1,
$D:null}
A.cU.prototype={$C:"$0",$R:0}
A.cV.prototype={$C:"$2",$R:2}
A.di.prototype={}
A.df.prototype={
k(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.iK(s)+"'"}}
A.bb.prototype={
E(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.bb))return!1
return this.$_target===b.$_target&&this.a===b.a},
gH(a){return(A.iG(this.a)^A.aP(this.$_target))>>>0},
k(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.eC(this.a)+"'")}}
A.dc.prototype={
k(a){return"RuntimeError: "+this.a}}
A.dn.prototype={
k(a){return"Assertion failed: "+A.cZ(this.a)}}
A.bX.prototype={
gl(a){return this.a},
gd_(){return new A.bZ(this,this.$ti.h("bZ<1>"))},
cL(a){var s
if((a&0x3fffffff)===a){s=this.c
if(s==null)return!1
return s[a]!=null}else return this.f1(a)},
f1(a){var s=this.d
if(s==null)return!1
return this.bB(s[B.e.gH(a)&0x3fffffff],a)>=0},
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
s=q[J.a7(a)&0x3fffffff]
r=this.bB(s,a)
if(r<0)return null
return s[r].b},
n(a,b,c){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(b)
l.z[1].a(c)
if(typeof b=="string"){s=m.b
m.cf(s==null?m.b=m.bo():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=m.c
m.cf(r==null?m.c=m.bo():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.bo()
p=J.a7(b)&0x3fffffff
o=q[p]
if(o==null)q[p]=[m.bh(b,c)]
else{n=m.bB(o,b)
if(n>=0)o[n].b=c
else o.push(m.bh(b,c))}}},
cW(a,b){var s,r,q=this
q.$ti.h("~(1,2)").a(b)
s=q.e
r=q.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==q.r)throw A.e(A.ah(q))
s=s.c}},
cf(a,b,c){var s,r=this.$ti
r.c.a(b)
r.z[1].a(c)
s=a[b]
if(s==null)a[b]=this.bh(b,c)
else s.b=c},
bh(a,b){var s=this,r=s.$ti,q=new A.eg(r.c.a(a),r.z[1].a(b))
if(s.e==null)s.e=s.f=q
else s.f=s.f.c=q;++s.a
s.r=s.r+1&1073741823
return q},
bB(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ab(a[r].a,b))return r
return-1},
k(a){return A.hT(this)},
bo(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s}}
A.eg.prototype={}
A.bZ.prototype={
gl(a){return this.a.a},
gT(a){return this.a.a===0},
gv(a){var s=this.a,r=new A.c_(s,s.r,this.$ti.h("c_<1>"))
r.c=s.e
return r}}
A.c_.prototype={
gp(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.e(A.ah(q))
s=r.c
if(s==null){r.scg(null)
return!1}else{r.scg(s.a)
r.c=s.c
return!0}},
scg(a){this.d=this.$ti.h("1?").a(a)},
$iE:1}
A.fE.prototype={
$1(a){return this.a(a)},
$S:49}
A.fF.prototype={
$2(a,b){return this.a(a,b)},
$S:40}
A.fG.prototype={
$1(a){return this.a(A.cz(a))},
$S:20}
A.d4.prototype={
k(a){return"RegExp/"+this.a+"/"+this.b.flags},
eU(a){var s=this.b.exec(a)
if(s==null)return null
return new A.dw(s)},
$ieB:1}
A.dw.prototype={$iek:1}
A.dh.prototype={$iek:1}
A.fk.prototype={
m(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.dh(s,o)
q.c=r===q.c?r+1:r
return!0},
gp(){var s=this.d
s.toString
return s},
$iE:1}
A.ao.prototype={
h(a){return A.fn(v.typeUniverse,this,a)},
C(a){return A.k9(v.typeUniverse,this,a)}}
A.du.prototype={}
A.dB.prototype={
k(a){return A.a6(this.a,null)}}
A.dt.prototype={
k(a){return this.a}}
A.ct.prototype={$iaS:1}
A.eY.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:14}
A.eX.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:53}
A.eZ.prototype={
$0(){this.a.$0()},
$S:8}
A.f_.prototype={
$0(){this.a.$0()},
$S:8}
A.fl.prototype={
e5(a,b){if(self.setTimeout!=null)self.setTimeout(A.bs(new A.fm(this,b),0),a)
else throw A.e(A.a4("`setTimeout()` not found."))}}
A.fm.prototype={
$0(){this.b.$0()},
$S:0}
A.dp.prototype={
bt(a,b){var s,r=this,q=r.$ti
q.h("1/?").a(b)
if(b==null)q.c.a(b)
if(!r.b)r.a.ck(b)
else{s=r.a
if(q.h("ai<1>").b(b))s.cm(b)
else s.bk(q.c.a(b))}},
cK(a,b){var s=this.a
if(this.b)s.aq(a,b)
else s.ef(a,b)}}
A.fp.prototype={
$1(a){return this.a.$2(0,a)},
$S:44}
A.fq.prototype={
$2(a,b){this.a.$2(1,new A.bP(a,t.k.a(b)))},
$S:27}
A.fv.prototype={
$2(a,b){this.a(A.Y(a),b)},
$S:36}
A.bm.prototype={
k(a){return"IterationMarker("+this.b+", "+A.q(this.a)+")"}}
A.bn.prototype={
gp(){var s,r=this.c
if(r==null){s=this.b
return s==null?this.$ti.c.a(s):s}return r.gp()},
m(){var s,r,q,p,o,n,m=this
for(s=m.$ti.h("E<1>");!0;){r=m.c
if(r!=null)if(r.m())return!0
else m.scu(null)
q=function(a,b,c){var l,k=b
while(true)try{return a(k,l)}catch(j){l=j
k=c}}(m.a,0,1)
if(q instanceof A.bm){p=q.b
if(p===2){o=m.d
if(o==null||o.length===0){m.scj(null)
return!1}if(0>=o.length)return A.k(o,-1)
m.a=o.pop()
continue}else{r=q.a
if(p===3)throw r
else{n=s.a(J.U(r))
if(n instanceof A.bn){r=m.d
if(r==null)r=m.d=[]
B.a.u(r,m.a)
m.a=n.a
continue}else{m.scu(n)
continue}}}}else{m.scj(q)
return!0}}return!1},
scj(a){this.b=this.$ti.h("1?").a(a)},
scu(a){this.c=this.$ti.h("E<1>?").a(a)},
$iE:1}
A.cs.prototype={
gv(a){return new A.bn(this.a(),this.$ti.h("bn<1>"))}}
A.bB.prototype={
k(a){return A.q(this.a)},
$iG:1,
gbf(){return this.b}}
A.dr.prototype={
cK(a,b){var s
A.dF(a,"error",t.K)
s=this.a
if((s.a&30)!==0)throw A.e(A.aj("Future already completed"))
s.aq(a,b)}}
A.cr.prototype={
bt(a,b){var s,r=this.$ti
r.h("1/?").a(b)
s=this.a
if((s.a&30)!==0)throw A.e(A.aj("Future already completed"))
s.co(r.h("1/").a(b))}}
A.b6.prototype={
f7(a){if((this.c&15)!==6)return!0
return this.b.b.bL(t.al.a(this.d),a.a,t.cJ,t.K)},
eX(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.C.b(q))p=l.fd(q,m,a.b,o,n,t.k)
else p=l.bL(t.I.a(q),m,o,n)
try{o=r.$ti.h("2/").a(p)
return o}catch(s){if(t.eK.b(A.aZ(s))){if((r.c&1)!==0)throw A.e(A.dN("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.e(A.dN("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.N.prototype={
bM(a,b,c){var s,r,q,p=this.$ti
p.C(c).h("1/(2)").a(a)
s=$.H
if(s===B.f){if(b!=null&&!t.C.b(b)&&!t.I.b(b))throw A.e(A.hB(b,"onError",u.c))}else{c.h("@<0/>").C(p.c).h("1(2)").a(a)
if(b!=null)b=A.ky(b,s)}r=new A.N(s,c.h("N<0>"))
q=b==null?1:3
this.bi(new A.b6(r,q,a,b,p.h("@<1>").C(c).h("b6<1,2>")))
return r},
fg(a,b){return this.bM(a,null,b)},
cA(a,b,c){var s,r=this.$ti
r.C(c).h("1/(2)").a(a)
s=new A.N($.H,c.h("N<0>"))
this.bi(new A.b6(s,3,a,b,r.h("@<1>").C(c).h("b6<1,2>")))
return s},
eq(a){this.a=this.a&1|16
this.c=a},
bj(a){this.a=a.a&30|this.a&1
this.c=a.c},
bi(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.c.a(r.c)
if((s.a&24)===0){s.bi(a)
return}r.bj(s)}A.b9(null,null,r.b,t.M.a(new A.f4(r,a)))}},
cv(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.c.a(m.c)
if((n.a&24)===0){n.cv(a)
return}m.bj(n)}l.a=m.aV(a)
A.b9(null,null,m.b,t.M.a(new A.fc(l,m)))}},
aU(){var s=t.F.a(this.c)
this.c=null
return this.aV(s)},
aV(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
cl(a){var s,r,q,p=this
p.a^=2
try{a.bM(new A.f8(p),new A.f9(p),t.P)}catch(q){s=A.aZ(q)
r=A.aX(q)
A.l5(new A.fa(p,s,r))}},
co(a){var s,r=this,q=r.$ti
q.h("1/").a(a)
if(q.h("ai<1>").b(a))if(q.b(a))A.f7(a,r)
else r.cl(a)
else{s=r.aU()
q.c.a(a)
r.a=8
r.c=a
A.bl(r,s)}},
bk(a){var s,r=this
r.$ti.c.a(a)
s=r.aU()
r.a=8
r.c=a
A.bl(r,s)},
aq(a,b){var s
t.k.a(b)
s=this.aU()
this.eq(A.e_(a,b))
A.bl(this,s)},
ck(a){var s=this.$ti
s.h("1/").a(a)
if(s.h("ai<1>").b(a)){this.cm(a)
return}this.eg(s.c.a(a))},
eg(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.b9(null,null,s.b,t.M.a(new A.f6(s,a)))},
cm(a){var s=this,r=s.$ti
r.h("ai<1>").a(a)
if(r.b(a)){if((a.a&16)!==0){s.a^=2
A.b9(null,null,s.b,t.M.a(new A.fb(s,a)))}else A.f7(a,s)
return}s.cl(a)},
ef(a,b){this.a^=2
A.b9(null,null,this.b,t.M.a(new A.f5(this,a,b)))},
$iai:1}
A.f4.prototype={
$0(){A.bl(this.a,this.b)},
$S:0}
A.fc.prototype={
$0(){A.bl(this.b,this.a.a)},
$S:0}
A.f8.prototype={
$1(a){var s,r,q,p=this.a
p.a^=2
try{p.bk(p.$ti.c.a(a))}catch(q){s=A.aZ(q)
r=A.aX(q)
p.aq(s,r)}},
$S:14}
A.f9.prototype={
$2(a,b){this.a.aq(t.K.a(a),t.k.a(b))},
$S:32}
A.fa.prototype={
$0(){this.a.aq(this.b,this.c)},
$S:0}
A.f6.prototype={
$0(){this.a.bk(this.b)},
$S:0}
A.fb.prototype={
$0(){A.f7(this.b,this.a)},
$S:0}
A.f5.prototype={
$0(){this.a.aq(this.b,this.c)},
$S:0}
A.ff.prototype={
$0(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.d8(t.fO.a(q.d),t.z)}catch(p){s=A.aZ(p)
r=A.aX(p)
q=m.c&&t.u.a(m.b.a.c).a===s
o=m.a
if(q)o.c=t.u.a(m.b.a.c)
else o.c=A.e_(s,r)
o.b=!0
return}if(l instanceof A.N&&(l.a&24)!==0){if((l.a&16)!==0){q=m.a
q.c=t.u.a(l.c)
q.b=!0}return}if(t.v.b(l)){n=m.b.a
q=m.a
q.c=l.fg(new A.fg(n),t.z)
q.b=!1}},
$S:0}
A.fg.prototype={
$1(a){return this.a},
$S:31}
A.fe.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.bL(o.h("2/(1)").a(p.d),m,o.h("2/"),n)}catch(l){s=A.aZ(l)
r=A.aX(l)
q=this.a
q.c=A.e_(s,r)
q.b=!0}},
$S:0}
A.fd.prototype={
$0(){var s,r,q,p,o,n,m=this
try{s=t.u.a(m.a.a.c)
p=m.b
if(p.a.f7(s)&&p.a.e!=null){p.c=p.a.eX(s)
p.b=!1}}catch(o){r=A.aZ(o)
q=A.aX(o)
p=t.u.a(m.a.a.c)
n=m.b
if(p.a===r)n.c=p
else n.c=A.e_(r,q)
n.b=!0}},
$S:0}
A.dq.prototype={}
A.cb.prototype={
gl(a){var s,r,q=this,p={},o=new A.N($.H,t.fJ)
p.a=0
s=q.$ti
r=s.h("~(1)?").a(new A.eG(p,q))
t.g5.a(new A.eH(p,o))
A.f1(q.a,q.b,r,!1,s.c)
return o}}
A.eG.prototype={
$1(a){this.b.$ti.c.a(a);++this.a.a},
$S(){return this.b.$ti.h("~(1)")}}
A.eH.prototype={
$0(){this.b.co(this.a.a)},
$S:0}
A.cc.prototype={}
A.dz.prototype={}
A.cw.prototype={$ii5:1}
A.fu.prototype={
$0(){var s=this.a,r=this.b
A.dF(s,"error",t.K)
A.dF(r,"stackTrace",t.k)
A.jj(s,r)},
$S:0}
A.dy.prototype={
fe(a){var s,r,q
t.M.a(a)
try{if(B.f===$.H){a.$0()
return}A.iq(null,null,this,a,t.J)}catch(q){s=A.aZ(q)
r=A.aX(q)
A.ft(t.K.a(s),t.k.a(r))}},
ff(a,b,c){var s,r,q
c.h("~(0)").a(a)
c.a(b)
try{if(B.f===$.H){a.$1(b)
return}A.ir(null,null,this,a,b,t.J,c)}catch(q){s=A.aZ(q)
r=A.aX(q)
A.ft(t.K.a(s),t.k.a(r))}},
cH(a){return new A.fi(this,t.M.a(a))},
eF(a,b){return new A.fj(this,b.h("~(0)").a(a),b)},
d8(a,b){b.h("0()").a(a)
if($.H===B.f)return a.$0()
return A.iq(null,null,this,a,b)},
bL(a,b,c,d){c.h("@<0>").C(d).h("1(2)").a(a)
d.a(b)
if($.H===B.f)return a.$1(b)
return A.ir(null,null,this,a,b,c,d)},
fd(a,b,c,d,e,f){d.h("@<0>").C(e).C(f).h("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.H===B.f)return a.$2(b,c)
return A.kz(null,null,this,a,b,c,d,e,f)},
d5(a,b,c,d){return b.h("@<0>").C(c).C(d).h("1(2,3)").a(a)}}
A.fi.prototype={
$0(){return this.a.fe(this.b)},
$S:0}
A.fj.prototype={
$1(a){var s=this.c
return this.a.ff(this.b,s.a(a),s)},
$S(){return this.c.h("~(0)")}}
A.aE.prototype={
em(){return new A.aE(A.F(this).h("aE<1>"))},
gv(a){var s=this,r=new A.b7(s,s.r,A.F(s).h("b7<1>"))
r.c=s.e
return r},
gl(a){return this.a},
gT(a){return this.a===0},
ai(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.g.a(s[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return t.g.a(r[b])!=null}else return this.ei(b)},
ei(a){var s=this.d
if(s==null)return!1
return this.cr(s[this.cp(a)],a)>=0},
gD(a){var s=this.e
if(s==null)throw A.e(A.aj("No elements"))
return A.F(this).c.a(s.a)},
gF(a){var s=this.f
if(s==null)throw A.e(A.aj("No elements"))
return A.F(this).c.a(s.a)},
u(a,b){var s,r,q=this
A.F(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.ci(s==null?q.b=A.ha():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.ci(r==null?q.c=A.ha():r,b)}else return q.ec(b)},
ec(a){var s,r,q,p=this
A.F(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.ha()
r=p.cp(a)
q=s[r]
if(q==null)s[r]=[p.bp(a)]
else{if(p.cr(q,a)>=0)return!1
q.push(p.bp(a))}return!0},
ci(a,b){A.F(this).c.a(b)
if(t.g.a(a[b])!=null)return!1
a[b]=this.bp(b)
return!0},
el(){this.r=this.r+1&1073741823},
bp(a){var s,r=this,q=new A.dv(A.F(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.el()
return q},
cp(a){return J.a7(a)&1073741823},
cr(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ab(a[r].a,b))return r
return-1}}
A.dv.prototype={}
A.b7.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.e(A.ah(q))
else if(r==null){s.scn(null)
return!1}else{s.scn(s.$ti.h("1?").a(r.a))
s.c=r.b
return!0}},
scn(a){this.d=this.$ti.h("1?").a(a)},
$iE:1}
A.bU.prototype={}
A.ae.prototype={
gv(a){var s=this
return new A.a3(s,s.gl(s),s.$ti.h("a3<ae.E>"))},
P(a,b){return this.$ti.z[1].a(J.S(this.a,b))},
gT(a){return J.B(this.a)===0},
gD(a){var s=this.a,r=J.aa(s)
if(r.gl(s)===0)throw A.e(A.a2())
return this.$ti.z[1].a(r.i(s,0))},
gF(a){var s=this.a,r=J.aa(s)
if(r.gl(s)===0)throw A.e(A.a2())
return this.$ti.z[1].a(r.i(s,r.gl(s)-1))},
b_(a,b){var s,r,q,p,o=this.$ti
o.h("A(ae.E)").a(b)
s=this.a
r=J.aa(s)
q=r.gl(s)
for(o=o.z[1],p=0;p<q;++p){if(!A.br(b.$1(o.a(r.i(s,p)))))return!1
if(q!==r.gl(s))throw A.e(A.ah(this))}return!0},
bD(a,b,c){var s=this.$ti
return new A.K(this,s.C(c).h("1(ae.E)").a(b),s.h("@<ae.E>").C(c).h("K<1,2>"))},
Z(a,b){return A.cd(this,b,null,this.$ti.h("ae.E"))},
k(a){return A.h0(this,"[","]")}}
A.c0.prototype={}
A.ej.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=A.q(a)
r.a=s+": "
r.a+=A.q(b)},
$S:30}
A.be.prototype={
cW(a,b){var s,r,q,p=A.F(this)
p.h("~(1,2)").a(b)
for(s=this.gd_(),s=s.gv(s),p=p.z[1];s.m();){r=s.gp()
q=this.i(0,r)
b.$2(r,q==null?p.a(q):q)}},
gl(a){var s=this.gd_()
return s.gl(s)},
k(a){return A.hT(this)},
$id6:1}
A.c8.prototype={
gT(a){return this.a===0},
k(a){return A.h0(this,"{","}")},
Z(a,b){return A.i_(this,b,A.F(this).c)},
gD(a){var s,r=A.h9(this,this.r,A.F(this).c)
if(!r.m())throw A.e(A.a2())
s=r.d
return s==null?r.$ti.c.a(s):s},
gF(a){var s,r,q=A.h9(this,this.r,A.F(this).c)
if(!q.m())throw A.e(A.a2())
s=q.$ti.c
do{r=q.d
if(r==null)r=s.a(r)}while(q.m())
return r}}
A.cp.prototype={
f3(a,b){var s,r,q,p=this,o=p.em()
for(s=A.h9(p,p.r,A.F(p).c),r=s.$ti.c;s.m();){q=s.d
if(q==null)q=r.a(q)
if(b.ai(0,q))o.u(0,q)}return o},
$iD:1,
$in:1,
$ic7:1}
A.cy.prototype={}
A.f0.prototype={}
A.G.prototype={
gbf(){return A.aX(this.$thrownJsError)}}
A.bA.prototype={
k(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.cZ(s)
return"Assertion failed"}}
A.aS.prototype={}
A.d8.prototype={
k(a){return"Throw of null."}}
A.av.prototype={
gbm(){return"Invalid argument"+(!this.a?"(s)":"")},
gbl(){return""},
k(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+p,n=s.gbm()+q+o
if(!s.a)return n
return n+s.gbl()+": "+A.cZ(s.b)}}
A.c5.prototype={
gbm(){return"RangeError"},
gbl(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.q(q):""
else if(q==null)s=": Not greater than or equal to "+A.q(r)
else if(q>r)s=": Not in inclusive range "+A.q(r)+".."+A.q(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.q(r)
return s}}
A.d0.prototype={
gbm(){return"RangeError"},
gbl(){if(A.Y(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gl(a){return this.f}}
A.dm.prototype={
k(a){return"Unsupported operation: "+this.a}}
A.dk.prototype={
k(a){return"UnimplementedError: "+this.a}}
A.bh.prototype={
k(a){return"Bad state: "+this.a}}
A.cW.prototype={
k(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.cZ(s)+"."}}
A.ca.prototype={
k(a){return"Stack Overflow"},
gbf(){return null},
$iG:1}
A.cY.prototype={
k(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.f3.prototype={
k(a){return"Exception: "+this.a}}
A.eb.prototype={
k(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(typeof q=="string"){if(q.length>78)q=B.j.aE(q,0,75)+"..."
return r+"\n"+q}else return r}}
A.n.prototype={
bD(a,b,c){var s=A.F(this)
return A.jy(this,s.C(c).h("1(n.E)").a(b),s.h("n.E"),c)},
b_(a,b){var s
A.F(this).h("A(n.E)").a(b)
for(s=this.gv(this);s.m();)if(!A.br(b.$1(s.gp())))return!1
return!0},
af(a,b){return A.f(this,b,A.F(this).h("n.E"))},
R(a){return this.af(a,!0)},
gl(a){var s,r=this.gv(this)
for(s=0;r.m();)++s
return s},
gT(a){return!this.gv(this).m()},
Z(a,b){return A.i_(this,b,A.F(this).h("n.E"))},
gD(a){var s=this.gv(this)
if(!s.m())throw A.e(A.a2())
return s.gp()},
gF(a){var s,r=this.gv(this)
if(!r.m())throw A.e(A.a2())
do s=r.gp()
while(r.m())
return s},
P(a,b){var s,r,q
A.an(b,"index")
for(s=this.gv(this),r=0;s.m();){q=s.gp()
if(b===r)return q;++r}throw A.e(A.h_(b,this,"index",null,r))},
k(a){return A.jn(this,"(",")")}}
A.E.prototype={}
A.M.prototype={
gH(a){return A.z.prototype.gH.call(this,this)},
k(a){return"null"}}
A.z.prototype={$iz:1,
E(a,b){return this===b},
gH(a){return A.aP(this)},
k(a){return"Instance of '"+A.eC(this)+"'"},
toString(){return this.k(this)}}
A.dA.prototype={
k(a){return""},
$iaQ:1}
A.dg.prototype={
gl(a){return this.a.length},
k(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.j.prototype={}
A.cP.prototype={
k(a){var s=String(a)
s.toString
return s}}
A.cQ.prototype={
k(a){var s=String(a)
s.toString
return s}}
A.b0.prototype={
seY(a,b){a.height=b},
sfl(a,b){a.width=b},
$ib0:1}
A.bD.prototype={
sbz(a,b){a.fillStyle=b},
sc8(a,b){a.strokeStyle=b},
dP(a,b){return a.stroke(b)},
$ibD:1}
A.as.prototype={
gl(a){return a.length}}
A.e6.prototype={
k(a){var s=String(a)
s.toString
return s}}
A.bI.prototype={
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
return A.d9(p,s,r,q)},
$ih7:1}
A.h.prototype={
k(a){var s=a.localName
s.toString
return s},
$ih:1}
A.i.prototype={$ii:1}
A.a1.prototype={
ee(a,b,c,d){return a.addEventListener(b,A.bs(t.B.a(c),1),!1)},
eo(a,b,c,d){return a.removeEventListener(b,A.bs(t.B.a(c),1),!1)},
$ia1:1}
A.d_.prototype={
gl(a){return a.length}}
A.af.prototype={$iaf:1}
A.a9.prototype={
k(a){var s=a.nodeValue
return s==null?this.dR(a):s}}
A.da.prototype={$ida:1}
A.dd.prototype={
gl(a){return a.length}}
A.ar.prototype={}
A.bk.prototype={
geA(a){var s=new A.N($.H,t.dL),r=t.c4.a(new A.eW(new A.cr(s,t.g4)))
this.ek(a)
r=A.it(r,t.H)
r.toString
this.ep(a,r)
return s},
ep(a,b){var s=a.requestAnimationFrame(A.bs(t.c4.a(b),1))
s.toString
return s},
ek(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=["ms","moz","webkit","o"]
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+"RequestAnimationFrame"]
b.cancelAnimationFrame=b[r[q]+"CancelAnimationFrame"]||b[r[q]+"CancelRequestAnimationFrame"]}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
A.eW.prototype={
$1(a){this.a.bt(0,A.hf(a))},
$S:28}
A.ck.prototype={
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
return A.d9(p,s,r,q)}}
A.fZ.prototype={}
A.cm.prototype={}
A.ds.prototype={}
A.cn.prototype={
eG(){var s,r=this,q=r.b
if(q==null)return $.hx()
s=r.d
if(s!=null)J.j_(q,r.c,t.B.a(s),!1)
r.b=null
r.sen(null)
return $.hx()},
sen(a){this.d=t.B.a(a)}}
A.f2.prototype={
$1(a){return this.a.$1(t.L.a(a))},
$S:23}
A.dx.prototype={
e4(a){var s,r,q,p,o,n,m,l=this,k=4294967296
do{s=a>>>0
a=B.e.a_(a-s,k)
r=a>>>0
a=B.e.a_(a-r,k)
q=(~s>>>0)+(s<<21>>>0)
p=q>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+B.e.a_(q-p,k)>>>0
q=((p^(p>>>24|r<<8))>>>0)*265
s=q>>>0
r=((r^r>>>24)>>>0)*265+B.e.a_(q-s,k)>>>0
q=((s^(s>>>14|r<<18))>>>0)*21
s=q>>>0
r=((r^r>>>14)>>>0)*21+B.e.a_(q-s,k)>>>0
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=q>>>0
o=B.e.a_(q-p,k)
q=l.a*1037
n=l.a=q>>>0
m=l.b*1037+B.e.a_(q-n,k)>>>0
l.b=m
n=(n^p)>>>0
l.a=n
o=(m^r+((r<<31|s>>>1)>>>0)+o>>>0)>>>0
l.b=o}while(a!==0)
if(o===0&&n===0)l.a=23063
l.aT()
l.aT()
l.aT()
l.aT()},
aT(){var s=this,r=s.a,q=4294901760*r,p=q>>>0,o=55905*r,n=o>>>0,m=n+p+s.b
r=m>>>0
s.a=r
s.b=B.e.a_(o-n+(q-p)+(m-r),4294967296)>>>0},
$ijF:1}
A.b4.prototype={
k(a){return"Point("+A.q(this.a)+", "+A.q(this.b)+")"},
E(a,b){if(b==null)return!1
return b instanceof A.b4&&this.a===b.a&&this.b===b.b},
gH(a){return A.i1(B.d.gH(this.a),B.d.gH(this.b),0)}}
A.V.prototype={
gv(a){var s=this.$ti,r=J.o(this.a,new A.ed(this),s.h("E<1>"))
return new A.co(A.f(r,!1,r.$ti.h("C.E")),s.h("co<1>"))}}
A.ed.prototype={
$1(a){return J.U(this.a.$ti.h("n<1>").a(a))},
$S(){return this.a.$ti.h("E<1>(n<1>)")}}
A.co.prototype={
m(){var s,r,q,p=this,o=p.a
if(o.length===0)return!1
for(s=0;r=o.length,s<r;++s)if(!o[s].m()){p.sct(null)
return!1}if(r>4294967295)A.I(A.at(r,0,4294967295,"length",null))
q=J.hQ(new Array(r),p.$ti.c)
for(s=0;s<r;++s){if(!(s<o.length))return A.k(o,s)
q[s]=o[s].gp()}p.sct(q)
return!0},
gp(){var s=this.b
return s==null?A.I(A.aj("No element")):s},
sct(a){this.b=this.$ti.h("m<1>?").a(a)},
$iE:1}
A.e1.prototype={
cP(a){var s,r,q,p
t.a.a(a)
s=new A.e2()
r=A.b([],t.r)
for(q=a.length,p=0;p<a.length;a.length===q||(0,A.c)(a),++p)B.a.A(r,s.$1(a[p]))
return A.lc(r,t.j)},
d6(a){var s,r,q,p,o="renderer"
for(s=this.cP(t.a.a(a)),r=A.w(s).h("aA<1>"),s=new A.aA(s,r),s=new A.a3(s,s.gl(s),r.h("a3<C.E>")),r=r.h("C.E");s.m();){q=s.d
if(q==null)q=r.a(q)
p=this.r
if(q instanceof A.y){p===$&&A.a("display")
p=p.a
p===$&&A.a(o)
p.fa(q)}else{p===$&&A.a("display")
p.a===$&&A.a(o)}}},
d9(a,b){t.y.a(b)
return!B.a.b_(b,new A.e3())?A.b([B.c],t.l):b}}
A.e2.prototype={
$1(a){return a.ag()},
$S:19}
A.e3.prototype={
$1(a){t.i.a(a)
return isFinite(a.a)&&isFinite(a.b)&&isFinite(a.c)},
$S:17}
A.bv.prototype={
cI(a){var s
this.b=a
s=this.d
B.F.sfl(s,1280)
B.F.seY(s,720)},
aW(a){return a},
b7(a,b){var s,r,q=this.b
q===$&&A.a("camera")
s=q.c
r=A.dH(a,0,1280,-s/2,s/2)
q=q.d
return new A.d(r,A.dH(b,720,0,-q/2,q/2),0).B(0,B.c)}}
A.cO.prototype={
b4(){var s=0,r=A.cF(t.V),q,p=this,o,n,m
var $async$b4=A.cH(function(a,b){if(a===1)return A.cA(b,r)
while(true)switch(s){case 0:m=window
m.toString
s=3
return A.b8(B.a4.geA(m),$async$b4)
case 3:o=b
m=p.f
if(m===0){p.f=o
m=o}n=o-m
p.f=m+n
q=n/1000
s=1
break
case 1:return A.cB(q,r)}})
return A.cC($async$b4,r)},
b8(a){var s,r,q,p
t.q.a(a)
s=this.d.getBoundingClientRect()
r=s.left
r.toString
q=s.right
q.toString
this.b===$&&A.a("camera")
p=A.dH(a.a,r,q,0,1280)
q=s.top
q.toString
r=s.bottom
r.toString
return new A.d(p,A.dH(a.b,q,r,0,720),0)},
br(){var s=this,r=s.d,q=t.do,p=q.h("~(1)?"),o=p.a(new A.dK(s))
t.g5.a(null)
q=q.c
B.a.A(s.r,A.b([A.f1(r,"mousemove",o,!1,q),A.f1(r,"mousedown",p.a(new A.dL(s)),!1,q),A.f1(r,"mouseup",p.a(new A.dM(s)),!1,q)],t.db))},
fj(){var s,r,q
for(s=this.r,r=s.length,q=0;q<s.length;s.length===r||(0,A.c)(s),++q)s[q].eG()}}
A.dK.prototype={
$1(a){var s,r,q,p
t.E.a(a)
s=this.a
r=s.Q
s.as=new A.d(r.a,r.b,r.c)
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.b8(new A.b4(r,q,t.q))
q=s.b7(p.a,p.b)
s.Q=q
q.t(0,s.as)
q=s.Q
$.bu().aZ(new A.c2(q,B.v))
if(s.w){r=s.y=s.Q
s.x.t(0,r)
$.bu().aZ(new A.aM(r,B.p))}},
$S:4}
A.dL.prototype={
$1(a){var s,r,q,p,o
t.E.a(a)
s=this.a
r=s.Q
s.as=new A.d(r.a,r.b,r.c)
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.b8(new A.b4(r,q,t.q))
s.Q=s.b7(p.a,p.b)
q=a.button
q.toString
s.z=A.h5(q)
q=s.Q
$.bu().aZ(new A.aN(q,B.n))
s.w=!0
q=s.Q
r=q.a
o=q.b
q=q.c
s.x=new A.d(r,o,q)
s.y=new A.d(r,o,q)},
$S:4}
A.dM.prototype={
$1(a){var s,r,q,p
t.E.a(a)
s=this.a
r=s.Q
s.as=new A.d(r.a,r.b,r.c)
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.b8(new A.b4(r,q,t.q))
s.Q=s.b7(p.a,p.b)
q=a.button
q.toString
s.z=A.h5(q)
q=s.Q
$.bu().aZ(new A.aO(q,B.o))
s.w=!1},
$S:4}
A.cS.prototype={}
A.bf.prototype={
j(){return A.h6(this)},
ey(){var s,r,q,p=this,o=t.aW,n=A.b([],o),m=p.b2
m.toString
s=p.cT
s=A.hj(p.a0+-1*s/2,m,s).ab(0)
m=s.length
r=p.cS
q=0
for(;q<s.length;s.length===m||(0,A.c)(s),++q)n.push(p.bW(s[q],r))
p.sfh(n)
o=A.b([],o)
for(n=p.cU,m=n.length,r*=p.cV,q=0;q<n.length;n.length===m||(0,A.c)(n),++q)o.push(p.bW(n[q],r))
p.seE(o)
o=p.bx
o.toString
o=A.f(o,!0,t.j)
n=p.by
n.toString
B.a.A(o,n)
p.U(t.a.a(o))},
bW(a,b){var s,r=this,q=B.r.q(0,b),p=A.jt(0,B.b,B.q.q(0,b),null,q)
p.bJ(0,r.L().t(0,r.O()).aH())
p.aN(r.bG(a))
p.ao(r.bQ())
p.c1(J.S(r.a4(),0))
q=J.dI(r.a5(!1))
s=r.w
p.dF(q,s)
return p},
bG(a){var s=this,r=A.dH(a,s.al,s.a0,0,1)
return A.fI(s.O(),s.L(),r,t.i)},
d2(a){var s,r=this,q=r.O(),p=r.L(),o=p.t(0,q),n=o.a3(0,Math.sqrt(o.a2()))
o=n.cO(a.t(0,q))
s=n.cO(p.t(0,q))
return A.fI(r.al,r.a0,o/s,t.V)},
sfh(a){this.bx=t.g2.a(a)},
seE(a){this.by=t.g2.a(a)}}
A.ey.prototype={
$1(a){return t.f.a(a).j()},
$S:16}
A.ez.prototype={
$1(a){return t.f.a(a).j()},
$S:16}
A.cX.prototype={
bT(a,b,c){var s,r,q
t.ao.a(a)
s=A.jk(B.b,B.a_,1e-8,a,0.01,b,c)
r=t.cD.a(new A.e5(this))
q=s.z
s.bX(q)
s.dT(B.c,B.c,r)
s.bX(1/q)
return s}}
A.e5.prototype={
$1(a){return this.a.aL(a)},
$S:2}
A.bC.prototype={
cM(b8,b9,c0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=B.a.X(A.b([c0,this.cR,B.L],t.f_),new A.e0()),b7=b6.a
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
if(h==null)h=B.r
g=b6.ay
if(g==null)g=0.25
f=b6.b
e=b6.ch
if(e==null)e=0.25
d=b6.CW
if(d==null)d=0.25
c=b6.cx
b=b6.c
a=A.aq(b5,0,B.b,b5,0)
b=new A.bf(b8,b9,s,r!==!1,q,p,o,n,m===!0,l,k,j,i,h,g,f!==!1,c,b!==!1,e,d,b5,b5,0,b5,B.k,B.t,0.35,B.h,a,b5,b5,4,0,!1,0.01,!1,0.000001,4,b5,b5,b5,B.b,$,b5,$,$,$)
b.S(B.b,b5,b5)
b.ao(b7)
d=Math.max(e,d)
b.fx=d
b.a0=b.a0+d/2
b.K=B.k.q(0,s).q(0,b8)
b7=B.k.q(0,s).q(0,b.a0)
b.N=b7
b.aO(b.K,b7)
b.ah(b.bG(j).q(0,-1))
if(b.b2==null)b.b2=p*B.d.bs(b8/p)
a0=b.fx
a1=b.bQ()
a2=A.b5(a)
b7=a2.a
b7=b7==null?b5:J.cM(b7)
if(b7!==!1)a2=a2.fm(a1.j())
b7=a2.b
b7=b7==null?b5:J.cM(b7)
if(b7!==!1)a2=a2.fn(a1.j())
a3=A.l2(3.141592653589793,B.h).ab(0)
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
q=A.kM(3,new A.d(a8*a7+b1*q+a9*s-b0*b7,a9*a7+b1*b7+b0*q-a8*s,b0*a7+b1*s+a8*b7-a9*q))
b2=new A.bz(4,0,!1,0.01,!1,0.000001,4,b5,b5,b5,B.b,$,b5,$,$,$)
b2.S(B.b,b5,b5)
b2.cb(q,B.b)
b2.bJ(0,3.141592653589793)
b2.d7(a0,0,B.c,b5,!0)
b2.d7(a0,1,B.c,b5,!0)
b2.d0(b)
b2.dJ(a2)
b3=b.L()
b4=b.dr()
b7=b4.t(0,b3).aH()
s=b2.r
s===$&&A.a("points")
b2.bJ(0,-b7-B.a.gD(s).t(0,b2.bH(0.5)).aH()-3.141592653589793)
b2.ah(b3.t(0,B.a.gD(b2.r)))
b.fb(b2,B.a2)
b.k1=b2
b.U(t.a.a(A.b([b2],t.r)))
b.ey()
b7=b6.cy
b.dE(b7==null?4:b7)
return b},
aL(a){var s,r,q,p,o,n,m,l,k="getStart",j=this.ak
j===$&&A.a("xAxis")
s=j.bG(0)
r=new A.d(s.a,s.b,s.c)
j=A.b([a.a,a.b,a.c],t.n)
q=this.bw
q===$&&A.a("axes")
q=q.d
q===$&&A.a("submobjects")
q=new A.V(A.b([j,q],t.Q),t.m)
q=q.gv(q)
j=t.f4
for(;q.m();){p=q.b
if(p==null)p=A.I(A.aj("No element"))
if(1>=p.length)return A.k(p,1)
o=j.a(p[1])
n=o.al
m=(A.aF(p[0])-n)/(o.a0-n)+0
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
d1(a){var s,r=this.ak
r===$&&A.a("xAxis")
s=r.d2(a)
r=this.aw
r===$&&A.a("yAxis")
return new A.d(s,r.d2(a),0)},
j(){return A.j4(this)}}
A.e0.prototype={
$2(a,b){var s=t.dK
return s.a(a).bF(s.a(b))},
$S:21}
A.Z.prototype={
bF(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.a
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
return A.cR(b,a.cx,e,n,r,h,j,a.x,i,m,l,k,a.Q,o,d,p,q,f,g,s)}}
A.c4.prototype={
du(a){var s=this.fx
if(s>0)return s
return Math.pow(10,(a===0?0:B.d.eW(Math.min(0,Math.log(Math.abs(a))/2.302585092994046)))-2)},
aB(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=d.k1,b=A.w(c)
b=A.f(new A.aD(c,b.h("A(1)").a(new A.eA(d)),b.h("aD<1>")),!0,t.V)
c=t.n
s=A.b([d.fy,d.go],c)
for(r=b.length,q=d.id,p=0;p<r;++p){o=b[p]
if(typeof o!=="number")return o.t()
B.a.A(s,A.b([o-q,o+q],c))}B.a.dL(s)
for(c=A.v(s.length/2|0,0,1),b=c.length,r=t.l,q=t.y,n=t.i,p=0;p<c.length;c.length===b||(0,A.c)(c),++p){m=c[p]
if(typeof m!=="number")return m.B()
l=B.a.i(s,m+0)
k=B.a.i(s,m+1)
j=A.hj(k,l,d.du(l)).ab(0)
if(!J.ab(B.a.gF(j),k))B.a.u(j,k)
i=A.b([],r)
for(h=j.length,g=0;g<j.length;j.length===h||(0,A.c)(j),++g){f=A.aF(j[g])
i.push(d.k2.$1(f))}h=A.b([],r)
for(f=i.length,g=0;g<i.length;i.length===f||(0,A.c)(i),++g){e=i[g]
l=e.a
if(!(isNaN(l)||isNaN(e.b)||isNaN(e.c))&&isFinite(l)&&isFinite(e.b)&&isFinite(e.c))h.push(e)}if(h.length!==0){i=q.a(A.b([B.a.gD(h)],r))
f=d.r
f===$&&A.a("points")
B.a.A(f,i)
d.ex(A.fT(h,n))}}},
j(){return A.jA(this)}}
A.eA.prototype={
$1(a){var s
A.aF(a)
s=this.a
return a>=s.fy&&a<=s.go},
$S:22}
A.bQ.prototype={
j(){return A.jl(this)}}
A.ec.prototype={
$1(a){A.aF(a)
return new A.d(a,this.a.$1(a),0)},
$S:15}
A.ce.prototype={
df(a,b){var s,r
if(a==null)s=null
else s=a
if(s==null)s=B.i
if(b==null)r=null
else r=b
if(r==null)r=B.i
return A.aq(B.i,this.e,s,r,this.c)},
fm(a){return this.df(a,null)},
fn(a){return this.df(null,a)}}
A.dj.prototype={
k(a){return"TipSide."+this.b}}
A.bi.prototype={
j(){return A.jN(this)},
fb(a,b){var s=this
if(Math.sqrt(s.O().t(0,s.L()).a2())===0)return
if(b===B.a1)s.aO(a.bH(0.5),s.L())
else s.aO(s.O(),a.bH(0.5))},
ap(a,b){this.c6(a,!1)
this.c2(B.i,!1)
this.e_(a,!0)},
ao(a){return this.ap(a,!0)},
dr(){var s,r,q=this.r
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
A.bx.prototype={
j(){return A.j2(this)},
aB(){var s=this
s.dC()
s.bZ(s.K,B.c)
s.ah(s.N)},
dC(){var s,r,q,p,o,n,m,l,k,j=this,i=t.l,h=A.b([],i)
for(s=j.y2,r=j.J,q=j.av,s=A.dG(q,r+s,s).ab(0),p=s.length,o=0;o<s.length;s.length===p||(0,A.c)(s),++o){n=s[o]
h.push(B.k.q(0,Math.cos(n)).B(0,B.q.q(0,Math.sin(n))))}s=A.b([],i)
for(p=h.length,o=0;o<h.length;h.length===p||(0,A.c)(h),++o){n=h[o]
s.push(new A.d(-n.b,n.a,n.c))}p=A.b([],i)
for(m=A.v(h.length-1,0,1),l=m.length,q=r/(q-1)/3,o=0;o<m.length;m.length===l||(0,A.c)(m),++o){k=m[o]
p.push(B.a.i(h,k).B(0,B.a.i(s,k).q(0,q)))}i=A.b([],i)
for(r=A.v(h.length,1,1),m=r.length,o=0;o<r.length;r.length===m||(0,A.c)(r),++o){k=r[o]
i.push(B.a.i(h,k).t(0,B.a.i(s,k).q(0,q)))}s=t.i
j.bb(A.iL(h,s),p,i,A.fT(h,s))}}
A.bF.prototype={
j(){return A.j9(this)},
gaX(){return!0}}
A.bJ.prototype={
j(){return A.hK(this)}}
A.T.prototype={
j(){return A.ju(this)},
aB(){var s=this
s.c4(A.b([s.K,s.N],t.l))
s.ew()},
ew(){var s,r,q=this,p=q.y2
if(p===0)return
s=Math.sqrt(q.O().t(0,q.L()).a2())
if(s<2*p)return
r=p/s
q.d3(q,r,1-r)},
aO(a,b){var s=this
if(s.O().E(0,s.L())){s.K=a
s.N=b
s.aB()}return s.dV(a,b)}}
A.bG.prototype={
dl(){var s=this,r=s.al/s.b0,q=Math.sqrt(s.O().t(0,s.L()).a2())/r
if(r==1/0||r==-1/0||q==1/0||q==-1/0)return 1
return B.d.bs(q)},
O(){var s=this.d
s===$&&A.a("submobjects")
if(s.length!==0)return B.a.gD(s).O()
else return this.dZ()},
L(){var s=this.d
s===$&&A.a("submobjects")
if(s.length!==0)return B.a.gF(s).L()
else return this.dY()},
j(){return A.jf(this)}}
A.az.prototype={
cb(a,b){var s=A.f(a,!0,t.i)
s.push(B.a.gD(a))
this.c4(s)},
j(){return A.jC(this)}}
A.c6.prototype={
j(){return A.jI(this)}}
A.cf.prototype={
j(){return A.jO(this)}}
A.bz.prototype={
j(){return A.a8(this)},
sI(a){this.b1=A.aF(a)},
gI(){return this.b1}}
A.d1.prototype={
e2(a){this.U(t.a.a(A.b([this.w],t.r)))
this.br()},
bq(a,b,c,d){var s,r
A.fy(d,t.e,"IEvent","addEventListener")
s=new A.ad(d.h("A(0)").a(c),b,d.h("ad<0>"))
r=$.bu()
t.gc.a(s)
r=r.gaj().i(0,b)
r.toString
B.a.u(r,s)
return s}}
A.bL.prototype={
br(){var s=this
s.se7(t.gl.a(s.bq(0,B.p,new A.e7(s),t.w)))
s.se8(t.c3.a(s.bq(0,B.n,new A.e8(s),t.N)))
s.se9(t.eL.a(s.bq(0,B.o,new A.e9(s),t.D)))},
j(){return A.jh(this)},
se7(a){this.ay=t.gl.a(a)},
se8(a){this.ch=t.c3.a(a)},
se9(a){this.CW=t.eL.a(a)}}
A.e7.prototype={
$1(a){var s
t.w.a(a)
s=this.a
if(s.cx){s.w.aN(a.c)
return!0}return!1},
$S:24}
A.e8.prototype={
$1(a){var s,r=this.a,q=r.w,p=t.N.a(a).c,o=p.a
if(o>=q.Y(B.t).a-0.1)if(o<=q.Y(B.k).a+0.1){o=p.b
o=o>=q.Y(B.r).b-0.1&&o<=q.Y(B.q).b+0.1
s=o}else s=!1
else s=!1
if(s){r.cx=!0
q.aN(p)
return!0}return!1},
$S:25}
A.e9.prototype={
$1(a){t.D.a(a)
return this.a.cx=!1},
$S:26}
A.p.prototype={
gde(){var s=this.e
if(s===$){s=A.b([],t.eM)
this.seb(s)}return s},
S(a,b,c){var s=this,r=s.b9()
s.b=r
s.saF(t.a.a(A.b([],t.r)))
s.f=!1
s.sW(t.y.a(A.b([],t.l)))
s.cX()
s.aB()},
k(a){return this.b9()},
b9(){var s=this.dX(0),r=A.jH("^Instance of '(.*?)'$").eU(s).b
if(1>=r.length)return A.k(r,1)
r=r[1]
r.toString
return r},
cX(){},
aB(){},
U(a){var s,r,q,p,o,n=t.a
n.a(a)
if(B.a.ai(a,this))throw A.e("Mobject can't contain itself")
s=A.f(a,!0,t.j)
r=this.d
r===$&&A.a("submobjects")
q=r.length
p=0
for(;p<r.length;r.length===q||(0,A.c)(r),++p){o=r[p]
if(!B.a.ai(a,o))s.push(o)}this.saF(n.a(s))},
aI(a,b,c){var s,r,q,p,o,n,m,l,k,j
t.cD.a(c)
if(b==null)b=this.Y(a)
for(s=this.bS(),r=s.length,q=t.y,p=t.l,o=0;o<s.length;s.length===r||(0,A.c)(s),++o){n=s[o]
m=A.b([],p)
l=n.r
l===$&&A.a("points")
k=l.length
j=0
for(;j<l.length;l.length===k||(0,A.c)(l),++j)m.push(J.fW(c.$1(J.iX(l[j],b)),b))
n.sW(q.a(m))}},
eC(a){return this.aI(B.c,null,a)},
j(){return A.jz(this)},
dd(a,b){var s,r,q,p=this
p.f===$&&A.a("updatingSuspended")
for(s=p.gde(),r=s.length,q=0;q<s.length;s.length===r||(0,A.c)(s),++q)s[q].$2(p,a)
s=p.d
s===$&&A.a("submobjects")
r=s.length
q=0
for(;q<s.length;s.length===r||(0,A.c)(s),++q)s[q].dd(a,!0)},
dc(a){return this.dd(a,!0)},
ah(a){return this.eC(new A.eu(a))},
c_(a,b,c){return this.aI(b,c,new A.et(a))},
bZ(a,b){return this.c_(a,B.c,b)},
bY(a){return this.c_(a,B.c,null)},
bK(a,b,c,d){this.aI(B.c,c,new A.es(A.l4(b,d).gda()))},
bJ(a,b){return this.bK(a,b,null,B.h)},
fc(a,b,c){return this.bK(a,b,c,B.h)},
dO(a,b,c,d){return this.aI(c,d,new A.ev(b,a))},
d7(a,b,c,d,e){var s=this.f5(b)
if(s===0)return
this.dO(a/s,b,c,d)},
c0(a,b,c){this.ah(B.c.dg(b,a-this.aQ(b,B.c)))},
aN(a){this.ah(a.t(0,this.Y(B.c)).q(0,new A.d(1,1,1)))},
aO(a,b){var s,r=this,q=r.O(),p=r.L(),o=p.t(0,q)
if(q.E(0,p))throw A.e("Cannot position endpoints of a closed loop")
s=b.t(0,a)
r.bZ(Math.sqrt(s.a2())/Math.sqrt(o.a2()),q)
r.fc(0,s.aH()-o.aH(),q)
r.ah(a.t(0,q))},
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
cQ(a){return this.aM(a,!0)},
ag(){var s,r,q,p=A.b([this],t.r),o=this.d
o===$&&A.a("submobjects")
s=o.length
r=0
for(;r<o.length;o.length===s||(0,A.c)(o),++r)B.a.A(p,o[r].ag())
q=A.h4(p,t.j)
return A.f(q,!0,A.F(q).c)},
bS(){var s=this.ag(),r=A.w(s),q=r.h("aD<1>")
return A.f(new A.aD(s,r.h("A(1)").a(new A.eq()),q),!0,q.h("n.E"))},
bP(){var s,r,q,p,o=A.b([],t.l)
for(s=this.bS(),r=s.length,q=0;q<s.length;s.length===r||(0,A.c)(s),++q){p=s[q].r
p===$&&A.a("points")
B.a.A(o,p)}return o},
ba(){return this.bP()},
aR(a,b,c){var s,r,q
t.bG.a(c)
if(c==null)c=this.ba()
s=A.b([],t.n)
for(r=c.length,q=0;q<c.length;c.length===r||(0,A.c)(c),++q)s.push(c[q].G(a))
if(b<0)return B.a.X(s,B.x)
else if(b===0)return(B.a.X(s,B.x)+B.a.X(s,B.y))/2
else return B.a.X(s,B.y)},
dm(a,b){return this.aR(a,b,null)},
Y(a){var s=this,r=s.ba()
if(r.length===0)return B.c
return new A.d(s.aR(0,B.d.aa(a.a),r),s.aR(1,B.d.aa(a.b),r),s.aR(2,B.d.aa(a.c),r))},
f5(a){var s,r,q,p=this.bP()
if(p.length===0)return 1
s=A.w(p)
r=new A.K(p,s.h("l(1)").a(new A.er(a)),s.h("K<1,l>"))
q=r.X(0,B.x)
return r.X(0,B.y)-q},
aQ(a,b){return this.dm(a,B.d.aa((b==null?B.c:b).G(a)))},
M(){return new A.d(this.aQ(0,null),this.aQ(1,null),this.aQ(2,null))},
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
be(a){var s=A.b([],t.r),r=this.r
r===$&&A.a("points")
if(r.length!==0)s.push(this)
r=this.d
r===$&&A.a("submobjects")
B.a.A(s,r)
return s},
cD(a){var s,r,q,p,o,n=this,m="points",l="submobjects",k=n.r
k===$&&A.a(m)
if(k.length===0){k=a.r
k===$&&A.a(m)
k=k.length!==0}else k=!1
if(k)a.d4()
k=a.r
k===$&&A.a(m)
if(k.length===0&&n.r.length!==0)n.d4()
s=n.be(0).length
r=a.be(0).length
n.cC(Math.max(0,r-s))
a.cC(Math.max(0,s-r))
n.cE(a)
k=n.d
k===$&&A.a(l)
q=a.d
q===$&&A.a(l)
q=new A.V(A.b([k,q],t.ae),t.fk)
q=q.gv(q)
for(;q.m();){p=q.b
if(p==null)p=A.I(A.aj("No element"))
k=p.length
if(0>=k)return A.k(p,0)
o=p[0]
if(1>=k)return A.k(p,1)
o.cD(p[1])}},
bU(){throw A.e("getPointMobject not implemented for "+A.q(this.gds())+"()")},
cE(a){var s,r,q=this.r
q===$&&A.a("points")
s=q.length
q=a.r
q===$&&A.a("points")
r=q.length
if(s<r)this.cF(a)
else if(s>r)a.cF(this)},
cF(a){throw A.e("Not implemented")},
d4(){var s=this.j(),r=t.r,q=t.a
s.saF(q.a(A.b([],r)))
this.sW(t.y.a(A.b([],t.l)))
this.U(q.a(A.b([s],r)))},
cC(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
if(a2===0)return
s=a1.be(0).length
if(s===0){r=A.b([],t.r)
for(q=A.v(a2,0,1),p=q.length,o=0;o<q.length;q.length===p||(0,A.c)(q),++o)r.push(a1.bU())
a1.saF(t.a.a(r))}n=s+a2
r=t.t
q=A.b([],r)
for(p=A.v(n,0,1),m=p.length,o=0;o<p.length;p.length===m||(0,A.c)(p),++o){l=p[o]
if(typeof l!=="number")return l.q()
q.push(B.d.ad(l*s,n))}p=A.b([],r)
for(m=A.v(s,0,1),k=m.length,j=t.S,o=0;o<m.length;m.length===k||(0,A.c)(m),++o){i=m[o]
h=A.b([],r)
for(g=q.length,f=J.aH(i),e=0;e<q.length;q.length===g||(0,A.c)(q),++e)if(f.E(i,q[e]))h.push(1)
else h.push(0)
p.push(A.hv(h,j))}d=A.b([],t.r)
r=a1.d
r===$&&A.a("submobjects")
p=new A.V(A.b([r,p],t.Q),t.m)
p=p.gv(p)
r=t.j
for(;p.m();){c=p.b
if(c==null)c=A.I(A.aj("No element"))
q=c.length
if(0>=q)return A.k(c,0)
b=r.a(c[0])
if(1>=q)return A.k(c,1)
a=A.Y(c[1])
B.a.u(d,b)
for(q=A.v(a,1,1),m=q.length,o=0;o<q.length;q.length===m||(0,A.c)(q),++o){a0=b.j()
a0.cQ(1)
B.a.u(d,a0)}}a1.saF(t.a.a(d))},
cZ(a,b,c){},
aJ(a){var s,r,q,p,o,n,m
this.cD(a)
for(s=new A.V(A.b([this.ag(),a.ag()],t.ae),t.fk),s=s.gv(s),r=t.i,q=t.y;s.m();){p=s.b
if(p==null)p=A.I(A.aj("No element"))
o=p.length
if(0>=o)return A.k(p,0)
n=p[0]
if(1>=o)return A.k(p,1)
m=p[1]
o=m.r
o===$&&A.a("points")
n.sW(q.a(A.f(o,!0,r)))
n.cZ(n,m,1)}},
V(a){var s=this.r
s===$&&A.a("points")
if(s.length!==0)return
throw A.e("Cannot call Mobject."+a+" , the mobject doesn't have any points")},
saF(a){this.d=t.a.a(a)},
seb(a){this.e=t.cS.a(a)},
sW(a){this.r=t.y.a(a)}}
A.eu.prototype={
$1(a){return a.B(0,this.a)},
$S:2}
A.et.prototype={
$1(a){return a.q(0,this.a)},
$S:2}
A.es.prototype={
$1(a){return a.az(this.a)},
$S:2}
A.ev.prototype={
$1(a){var s=this.a
return a.dg(s,a.G(s)*this.b)},
$S:2}
A.eq.prototype={
$1(a){var s=t.j.a(a).r
s===$&&A.a("points")
return s.length>0},
$S:7}
A.er.prototype={
$1(a){return t.i.a(a).G(this.a)},
$S:29}
A.bR.prototype={
j(){return A.jm(this)}}
A.y.prototype={
j(){return A.jQ(this)},
cX(){var s=this,r=s.ax
if(r==null){r=s.a
r===$&&A.a("color")
r=A.b([r],t.O)}s.dB(r)
r=s.ay
if(r==null){r=s.a
r===$&&A.a("color")
r=A.b([r],t.O)}s.dH(r,s.gI())
s.dA(s.ch,s.x)},
aD(a,b,c){var s,r,q,p,o,n=this
t.x.a(b)
s=t.O
r=A.b([],s)
if(b!=null)B.a.A(r,b)
if(a!=null)r.push(a)
if(c)for(q=n.aS(),p=q.length,o=0;o<q.length;q.length===p||(0,A.c)(q),++o)q[o].c3(r,!1)
if(r.length!==0){if(n.ax==null)n.sam(r)
q=n.ax
q.toString
q=J.B(q)
p=r.length
if(q<p){q=n.ax
q.toString
n.sam(A.ba(q,p,t.G))}else{q=n.ax
q.toString
if(p<J.B(q)){q=n.ax
q.toString
n.sam(A.ba(r,J.B(q),t.G))}}s=A.b([],s)
q=n.ax
q.toString
q=A.v(J.B(q),0,1)
p=q.length
o=0
for(;o<q.length;q.length===p||(0,A.c)(q),++o)s.push(B.a.i(r,q[o]))
n.sam(s)}},
c2(a,b){return this.aD(a,null,b)},
c3(a,b){return this.aD(null,a,b)},
dB(a){return this.aD(null,a,!0)},
c1(a){return this.aD(a,null,!0)},
a9(a,b,c,d,e){var s,r,q,p,o,n=this
t.x.a(c)
s=t.O
r=A.b([],s)
if(c!=null)B.a.A(r,c)
if(b!=null)r.push(b)
if(d)for(q=n.aS(),p=q.length,o=0;o<q.length;q.length===p||(0,A.c)(q),++o)q[o].dI(a,r,!1,e)
if(r.length!==0)if(a){if(n.ch==null)n.sau(r)
q=n.ch
q.toString
q=J.B(q)
p=r.length
if(q<p){q=n.ch
q.toString
n.sau(A.ba(q,p,t.G))}else{q=n.ch
q.toString
if(p<J.B(q)){q=n.ch
q.toString
n.sau(A.ba(r,J.B(q),t.G))}}s=A.b([],s)
q=n.ay
q.toString
q=A.v(J.B(q),0,1)
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
n.sac(A.ba(q,p,t.G))}else{q=n.ay
q.toString
if(p<J.B(q)){q=n.ay
q.toString
n.sac(A.ba(r,J.B(q),t.G))}}s=A.b([],s)
q=n.ay
q.toString
q=A.v(J.B(q),0,1)
p=q.length
o=0
for(;o<q.length;q.length===p||(0,A.c)(q),++o)s.push(B.a.i(r,q[o]))
n.sac(s)}if(e!=null)if(a)n.x=e
else n.sI(e)},
bd(a){return this.a9(!1,a,null,!0,null)},
dI(a,b,c,d){return this.a9(a,null,b,c,d)},
c6(a,b){return this.a9(!1,a,null,b,null)},
dG(a,b){return this.a9(!1,null,a,b,null)},
dH(a,b){return this.a9(!1,null,a,!0,b)},
dE(a){return this.a9(!1,null,null,!0,a)},
dF(a,b){return this.a9(!1,a,null,!0,b)},
bc(a,b,c,d){return this.a9(!0,a,t.x.a(b),c,d)},
dz(a,b){return this.bc(null,a,b,null)},
dA(a,b){return this.bc(null,a,!0,b)},
c7(a,b){var s=null,r=t.x,q=r.a(a.d),p=r.a(a.a)
r=r.a(a.b)
this.aD(s,p,b)
this.a9(!1,s,r,b,a.c)
this.bc(s,q,b,a.e)
return s},
dJ(a){return this.c7(a,!0)},
bQ(){var s=J.S(this.a4(),0)
return s},
ap(a,b){this.c2(a,!0)
this.c6(a,!0)
this.dW(a,!0)},
bE(a,b){var s,r,q="submobjects",p="removeWhere",o=a.a4(),n=a.aC(),m=a.gI(),l=a.a5(!0),k=a.x
this.c7(new A.cg(o,n,m,l,k),!1)
if(b){o=this.d
o===$&&A.a(q)
n=a.d
n===$&&A.a(q)
if(o.length===0)return
else if(n.length===0)s=A.b([a],t.r)
else s=n
n=A.w(o).h("A(1)").a(new A.eT())
if(!!o.fixed$length)A.I(A.a4(p))
B.a.cw(o,n,!0)
n=A.w(s).h("A(1)").a(new A.eU())
if(!!s.fixed$length)A.I(A.a4(p))
B.a.cw(s,n,!0)
for(n=t.j,n=A.l_(o,s,n,n),n=A.ei([n.a,n.b],!1,t.z),n=new A.V(new A.a_(n,A.w(n).h("a_<1,m<y>>")),t.eX),n=n.gv(n);n.m();){r=n.b
if(r==null)r=A.I(A.aj("No element"))
o=r.length
if(0>=o)return A.k(r,0)
m=r[0]
if(1>=o)return A.k(r,1)
m.bE(r[1],!0)}}},
d0(a){return this.bE(a,!0)},
aM(a,b){var s,r,q,p=this,o=1-a,n=t.O,m=A.b([],n)
for(s=J.U(p.a4());s.m();){r=s.gp()
q=r.d
m.push(new A.u(r.a,r.b,r.c,q*o))}p.c3(m,!0)
m=A.b([],n)
for(s=J.U(p.aC());s.m();){r=s.gp()
q=r.d
m.push(new A.u(r.a,r.b,r.c,q*o))}p.dG(m,!0)
n=A.b([],n)
for(m=J.U(p.a5(!0));m.m();){s=m.gp()
r=s.d
n.push(new A.u(s.a,s.b,s.c,r*o))}p.dz(n,!0)
p.dU(a,!0)},
cQ(a){return this.aM(a,!0)},
a4(){var s=this.ax
return s==null?A.b([B.i],t.O):s},
a5(a){var s=a?this.ch:this.ay
return s==null||J.cM(s)?A.b([B.i],t.O):s},
aC(){return this.a5(!1)},
dn(){var s,r,q,p,o,n=this.Y(B.c),m=A.b([],t.b)
for(s=[B.k,B.q,B.h],r=t.n,q=0;q<3;++q){p=this.Y(s[q]).t(0,n)
m.push(A.b([p.a,p.b,p.c],r))}o=B.k.az(A.X(null,m).gda())
return new A.x(n.t(0,o),n.B(0,o),t.hd)},
bb(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=t.y
g.a(a)
g.a(b)
g.a(c)
g.a(d)
s=h.at
r=a.length
q=A.b([],t.l)
for(r=A.v(s*r,0,1),p=r.length,o=0;o<r.length;r.length===p||(0,A.c)(r),++o)q.push(B.c)
h.sW(g.a(q))
n=A.b([a,b,c,d],t.h)
for(g=A.v(s,0,1),r=g.length,q=t.S,o=0;o<g.length;g.length===r||(0,A.c)(g),++o){m=g[o]
l=B.a.i(n,m)
p=h.r
p===$&&A.a("points")
for(p=A.fD(A.v(p.length,m,s),q),k=p.length,j=0;j<p.length;p.length===k||(0,A.c)(p),++j){i=p[j]
B.a.n(h.r,i.b,l[B.e.a8(i.a,l.length)])}}},
cB(a){var s,r,q,p,o,n,m,l=this,k=l.at,j=[]
for(s=A.dG(k,1,0).eV(),r=s.length,q=0;q<s.length;s.length===r||(0,A.c)(s),++q){p=s[q]
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
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.c)(a),++r)this.cB(a[r])},
c4(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
t.y.a(a)
s=A.dG(this.at,1,0).ab(0)
r=t.i
q=A.hC(A.fT(a,r))
p=A.hC(A.iL(a,r))
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
d=J.O(e)
i.push(new A.d(d.i(e,0),d.i(e,1),d.i(e,2)))}o.push(i)}r=o.length
if(0>=r)return A.k(o,0)
l=o[0]
if(1>=r)return A.k(o,1)
k=o[1]
if(2>=r)return A.k(o,2)
i=o[2]
if(3>=r)return A.k(o,3)
this.bb(l,k,i,o[3])},
bX(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=null
for(s=this.aS(),r=s.length,q=t.l,p=t.n,o=t.b,n=this.at,m=0;m<s.length;s.length===r||(0,A.c)(s),++m){l=s[m]
k=l.r
k===$&&A.a("points")
if(k.length<n)continue
j=l.dk()
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
a2=J.O(a1)
k.push(new A.d(a2.i(a1,0),a2.i(a1,1),a2.i(a1,2)))}i=A.b([],q)
h=a0.b
h===$&&A.a("shape")
h=b.B(0,A.b_(a5,h).q(0,a0)).a
h===$&&A.a("values")
a2=h.length
g=0
for(;g<h.length;h.length===a2||(0,A.c)(h),++g){a1=h[g]
a3=J.O(a1)
i.push(new A.d(a3.i(a1,0),a3.i(a1,1),a3.i(a1,2)))}h=j.length
if(0>=h)return A.k(j,0)
a2=j[0]
if(3>=h)return A.k(j,3)
l.bb(a2,k,i,j[3])}},
bu(a,b){var s=this.as,r=b.a
if(Math.abs(a.a-r)>s+0.00001*Math.abs(r))return!1
r=b.b
if(Math.abs(a.b-r)>s+0.00001*Math.abs(r))return!1
return!0},
eH(a,b){var s
if(!this.bu(a,b))return!1
s=b.c
if(Math.abs(a.c-s)>this.as+0.00001*Math.abs(s))return!1
return!0},
b6(a){var s,r,q,p,o,n,m,l={}
l.a=a
t.y.a(a)
l.a=a
s=A.eh(a,new A.eO(l,B.e.a8(J.B(a),this.at)),t.i)
l.a=A.f(s,!0,s.$ti.h("n.E"))
s=A.b([],t.dm)
for(r=A.v(J.B(l.a),0,4),q=r.length,p=t.bl,o=0;o<r.length;r.length===q||(0,A.c)(r),++o){n=r[o]
m=l.a
if(typeof n!=="number")return n.B()
s.push(new A.bj(J.S(m,n+0),J.S(l.a,n+1),J.S(l.a,n+2),J.S(l.a,n+3),p))}return s},
cs(a,b){var s,r,q,p,o,n,m,l,k
t.y.a(a)
t.fT.a(b)
s=this.at
r=A.v(a.length,s,s)
q=A.w(r)
q=A.f(new A.aD(r,q.h("A(1)").a(b),q.h("aD<1>")),!0,t.S)
q.push(a.length)
r=A.b([0],t.t)
B.a.A(r,q)
p=A.b([],t.h)
for(r=new A.V(A.b([r,q],t.gL),t.eN),r=r.gv(r),q=A.w(a),o=q.c,q=q.h("ap<1>");r.m();){n=r.b
if(n==null)n=A.I(A.aj("No element"))
if(1>=n.length)return A.k(n,1)
m=n[1]
l=n[0]
if(typeof m!=="number")return m.t()
if(typeof l!=="number")return A.cI(l)
if(m-l>=s){A.Y(l)
A.Y(m)
A.bg(l,m,a.length)
k=new A.ap(a,l,m,q)
k.bg(a,l,m,o)
p.push(k.R(0))}}return p},
bV(a){t.y.a(a)
return this.cs(a,new A.eQ(this,a))},
dv(a){t.y.a(a)
return this.cs(a,new A.eP(this,a))},
bH(a){var s,r,q,p,o=this.r
o===$&&A.a("points")
s=this.at
r=A.hs(0,B.e.ad(o.length,s),a)
q=r.a
o=this.r
p=s*q
s*=q+1
A.bg(p,s,o.length)
return A.hk(A.cd(o,p,s,A.w(o).c).R(0)).$1(r.b)},
dk(){var s,r,q,p=A.b([],t.h)
for(s=A.v(this.at,0,1),r=s.length,q=0;q<s.length;s.length===r||(0,A.c)(s),++q)p.push(this.bn(s[q]))
return p},
bn(a){var s=this.r
s===$&&A.a("points")
s=A.eh(s,new A.eK(this,a),t.i)
return A.f(s,!0,s.$ti.h("n.E"))},
dj(){var s=this,r=s.r
r===$&&A.a("points")
if(r.length===1)return r
r=t.eR
r=A.hN(A.f(new A.V(A.b([s.bn(0),s.bn(s.at-1)],t.h),r),!0,r.h("n.E")),t.i)
return A.f(r,!0,r.$ti.h("n.E"))},
ba(){var s,r,q,p=A.b([],t.l)
for(s=this.aS(),r=s.length,q=0;q<s.length;s.length===r||(0,A.c)(s),++q)B.a.A(p,s[q].dj())
return p},
cE(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1="points"
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
if(n.length===0){n=q.a(A.b([o.Y(B.c)],r))
B.a.A(o.r,n)}n=o.r
if(B.e.a8(n.length,o.at)===1)o.cB(B.a.gF(n))}s=t.i
m=a0.bV(A.f(a0.r,!0,s))
l=a2.bV(A.f(a2.r,!0,s))
k=Math.max(m.length,l.length)
j=A.b([],r)
i=A.b([],r)
h=a0.at
g=new A.eN(h)
for(s=A.v(k,0,1),r=s.length,p=0;p<s.length;s.length===r||(0,A.c)(s),++p){f=s[p]
e=g.$2(m,f)
d=g.$2(l,f)
n=J.aa(d)
c=J.aa(e)
b=Math.max(0,B.e.ad(n.gl(d)-c.gl(e),h))
a=Math.max(0,B.e.ad(c.gl(e)-n.gl(d),h))
e=a0.cY(b,e)
d=a0.cY(a,d)
B.a.A(j,e)
B.a.A(i,d)}a0.sW(q.a(j))
a2.sW(q.a(i))},
cY(a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6="No element"
t.y.a(a8)
if(a8.length===1){s=A.b([],t.l)
for(r=A.v(this.at*a7,0,1),q=r.length,p=0;p<r.length;r.length===q||(0,A.c)(r),++p)B.a.A(s,a8)
return s}o=this.b6(a8)
n=o.length
m=n+a7
s=t.t
r=A.b([],s)
for(q=A.v(m,0,1),l=q.length,p=0;p<q.length;q.length===l||(0,A.c)(q),++p){k=q[p]
if(typeof k!=="number")return k.q()
r.push(B.d.ad(k*n,m))}q=A.b([],s)
for(l=A.v(n,0,1),j=l.length,i=t.S,p=0;p<l.length;l.length===j||(0,A.c)(l),++p){k=l[p]
h=A.b([],s)
for(g=r.length,f=J.aH(k),e=0;e<r.length;r.length===g||(0,A.c)(r),++e)h.push(f.E(k,r[e])?1:0)
q.push(A.hv(h,i))}d=A.b([],t.l)
for(s=new A.V(A.b([o,q],t.Q),t.m),s=s.gv(s),r=t.V,q=t.b,l=t.ca,j=t.z,i=t.bl;s.m();){c=s.b
if(c==null)c=A.I(A.aj(a6))
h=c.length
if(0>=h)return A.k(c,0)
b=i.a(c[0])
if(1>=h)return A.k(c,1)
a=A.dG(A.Y(c[1])+1,1,0).ab(0)
for(h=new A.V(A.b([a,A.fT(a,r)],q),l),h=h.gv(h),g=b.a,f=b.b,a0=b.c,a1=b.d;h.m();){a2=h.b
if(a2==null)a2=A.I(A.aj(a6))
a3=A.ei([g,f,a0,a1],!1,j)
a4=a2.length
if(0>=a4)return A.k(a2,0)
a5=a2[0]
if(1>=a4)return A.k(a2,1)
B.a.A(d,A.fO(new A.a_(a3,A.w(a3).h("a_<1,d>")),a5,a2[1]))}}return d},
ez(a){var s,r,q,p,o,n,m,l,k=new A.eL(),j=new A.eM()
for(s=["fillColors","strokeColors","backgroundStrokeColors"],r=t.G,q=0;q<3;++q){p=s[q]
o=k.$2(p,this)
n=k.$2(p,a)
m=J.aa(o)
l=J.aa(n)
if(m.gl(o)>l.gl(n))j.$3(p,a,A.ba(n,m.gl(o),r))
else if(l.gl(n)>m.gl(o))j.$3(p,this,A.ba(o,l.gl(n),r))}},
bU(){var s=null,r=this.Y(B.c),q=new A.ch(0.01,0.01,4,0,!1,0.01,!1,0.000001,4,s,s,s,B.b,$,s,$,$,$)
q.S(B.b,s,s)
q.sW(t.y.a(A.b([r],t.l)))
q.d0(this)
return q},
cZ(a,b,c){var s,r=this,q=t.dT
q.a(a)
q.a(b)
r.sam(A.ht(a.a4(),b.a4(),c))
r.sac(A.ht(a.aC(),b.aC(),c))
r.sau(A.ht(a.a5(!0),b.a5(!0),c))
q=t.V
r.sI(A.iC(a.gI(),b.gI(),c,q))
r.seD(A.iC(a.x,b.x,c,q))
s=new A.eS()
if(c===1){q=b.ax
r.sam(q!=null?s.$1(q):null)
q=b.ay
r.sac(q!=null?s.$1(q):null)
q=b.ch
r.sau(q!=null?s.$1(q):null)
r.sI(b.gI())
r.x=b.x}},
d3(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e="points"
if(b<=0&&c>=1){s=a.r
s===$&&A.a(e)
f.sW(t.y.a(A.f(s,!0,t.i)))
return}s=a.r
s===$&&A.a(e)
r=t.y
q=a.b6(r.a(A.f(s,!0,t.i)))
p=q.length
o=A.hs(0,p,b)
n=A.hs(0,p,c)
m=o.a
l=o.b
k=n.a
j=n.b
f.sW(r.a(A.b([],t.l)))
if(p===0)return
s=q.length
if(m===k){if(m>>>0!==m||m>=s)return A.k(q,m)
s=J.dJ(q[m])
s=r.a(A.fO(new A.a_(s,A.w(s).h("a_<1,d>")),l,j))
r=f.r
r===$&&A.a(e)
B.a.A(r,s)}else{if(m>>>0!==m||m>=s)return A.k(q,m)
s=J.dJ(q[m])
s=r.a(A.fO(new A.a_(s,A.w(s).h("a_<1,d>")),l,1))
i=f.r
i===$&&A.a(e)
B.a.A(i,s)
for(s=m+1,A.bg(s,k,q.length),s=A.cd(q,s,k,A.w(q).c),i=s.$ti,s=new A.a3(s,s.gl(s),i.h("a3<C.E>")),h=t.z,i=i.h("C.E");s.m();){g=s.d
if(g==null)g=i.a(g)
g=A.ei([g.a,g.b,g.c,g.d],!1,h)
g=r.a(new A.a_(g,A.w(g).h("a_<1,d>")))
B.a.A(f.r,g)}if(k>>>0!==k||k>=q.length)return A.k(q,k)
s=J.dJ(q[k])
s=r.a(A.fO(new A.a_(s,A.w(s).h("a_<1,d>")),0,j))
B.a.A(f.r,s)}},
aS(){var s,r,q,p,o=A.b([],t.U)
for(s=this.ag(),r=s.length,q=0;q<s.length;s.length===r||(0,A.c)(s),++q){p=s[q]
if(p instanceof A.y)o.push(p)}return o},
sI(a){this.w=A.aF(a)},
seD(a){this.x=A.aF(a)},
sam(a){this.ax=t.x.a(a)},
sac(a){this.ay=t.x.a(a)},
sau(a){this.ch=t.x.a(a)},
gI(){return this.w},
gaX(){return this.y}}
A.P.prototype={
$1(a){return t.G.a(a).j()},
$S:3}
A.Q.prototype={
$1(a){return t.G.a(a).j()},
$S:3}
A.R.prototype={
$1(a){return t.G.a(a).j()},
$S:3}
A.eT.prototype={
$1(a){return!(t.j.a(a) instanceof A.y)},
$S:7}
A.eU.prototype={
$1(a){return!(t.j.a(a) instanceof A.y)},
$S:7}
A.eO.prototype={
$2(a,b){t.i.a(b)
return a<J.B(this.a.a)-this.b},
$S:13}
A.eQ.prototype={
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
A.eP.prototype={
$1(a){var s,r,q
A.Y(a)
s=this.b
r=a-1
q=s.length
if(!(r>=0&&r<q))return A.k(s,r)
r=s[r]
if(!(a>=0&&a<q))return A.k(s,a)
return!this.a.bu(r,s[a])},
$S:12}
A.eK.prototype={
$2(a,b){t.i.a(b)
return B.e.a8(a,this.a.at)===this.b},
$S:13}
A.eN.prototype={
$2(a,b){var s,r,q,p
t.dF.a(a)
s=a.length
if(b>=s){s=A.b([],t.l)
for(r=A.v(this.a,0,1),q=r.length,p=0;p<r.length;r.length===q||(0,A.c)(r),++p)s.push(B.a.gF(B.a.gF(a)))
return s}if(!(b>=0))return A.k(a,b)
return a[b]},
$S:33}
A.eL.prototype={
$2(a,b){switch(a){case"fillColors":return b.a4()
case"strokeColors":return b.aC()
case"backgroundStrokeColors":return b.a5(!1)
default:throw A.e(u.b+a)}},
$S:34}
A.eM.prototype={
$3(a,b,c){t.W.a(c)
switch(a){case"fillColors":b.sam(c)
break
case"strokeColors":b.sac(c)
break
case"backgroundStrokeColors":b.sau(c)
break
default:throw A.e(u.b+a)}},
$S:35}
A.eS.prototype={
$1(a){var s=t.G
return A.f(J.o(t.W.a(a),new A.eR(),s),!0,s)},
$S:45}
A.eR.prototype={
$1(a){return t.G.a(a).j()},
$S:3}
A.cg.prototype={}
A.aT.prototype={
cc(a){var s=a==null?A.b([],t.r):a
this.U(t.a.a(s))},
j(){return A.jP(this)}}
A.ch.prototype={
j(){return A.jR(this)}}
A.bH.prototype={
e0(a,b,c,d){var s,r,q,p,o,n,m,l
if(c>0){s=1/c
r=s*d
q=A.dG(c+1,1,0).a3(0,1).t(0,s).B(0,r).ab(0)
p=A.b([],t.r)
for(o=q.length,n=0;n<q.length;q.length===o||(0,A.c)(q),++n){m=q[n]
if(typeof m!=="number")return m.B()
l=a.j()
l.d3(a,m,m+r)
p.push(l)}this.U(t.a.a(p))}this.bE(a,!1)},
j(){return A.jg(this)}}
A.bw.prototype={
dK(a){this.d=a}}
A.cT.prototype={
bI(a){var s,r,q=this.d
q===$&&A.a("display")
s=q.b
s===$&&A.a("camera")
r=q.aW(a)
q=this.e
q===$&&A.a("ctx")
B.m.sbz(q,r.aP())
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
r=s.d9(a,j)
if(r.length===0)return
q=a.dv(r)
for(j=q.length,p="",o=0;o<q.length;q.length===j||(0,A.c)(q),++o)p+=k.dw(a,q[o])
n=A.jB(p)
k.cG(n,a,!0)
m=a.a4()
if(J.B(m)>1){j=k.e
j===$&&A.a("ctx")
B.m.sbz(j,k.cN(a,m))}else{l=k.d.aW(J.S(a.a4(),0))
j=k.e
j===$&&A.a("ctx")
B.m.sbz(j,l.aP())}j=k.e
j===$&&A.a("ctx")
j.fill(n)
k.cG(n,a,!1)},
dw(a,b){var s,r,q,p,o,n,m,l,k,j
t.y.a(b)
s=a.b6(b)
r=J.O(b)
q=r.gD(b)
p="M "+A.q(q.a)+" "+A.q(q.b)
o=a.bu(r.gD(b),r.gF(b))
for(r=s.length,n=0;n<r;++n){m=s[n]
l=m.b
k=m.c
j=m.d
p+=" C "+A.q(l.a)+" "+A.q(l.b)+" "+A.q(k.a)+" "+A.q(k.b)+" "+A.q(j.a)+" "+A.q(j.b)}return o?p+" Z":p},
cN(a,b){var s,r,q,p,o,n,m,l,k,j,i
t.W.a(b)
s=a.dn()
r=t.y.a(A.b([s.a,s.b],t.l))
q=this.d
q===$&&A.a("display")
q=q.b
q===$&&A.a("camera")
p=q.d9(a,r)
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
l=A.hj(m+1,0,m).ab(0)
for(r=A.v(o.gl(b),0,1),n=r.length,k=0;k<r.length;r.length===n||(0,A.c)(r),++k){j=r[k]
i=this.d.aW(o.i(b,j))
q.addColorStop(B.a.i(l,j),i.aP())}return q},
cG(a,b,c){var s,r,q,p,o,n=this,m=c?b.x:b.gI()
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
r=J.O(s)
p=r.b_(s,new A.e4())
if(r.gT(s)||p)return
if(r.gl(s)>1)B.m.sc8(n.e,n.cN(b,s))
else{o=n.d.aW(J.dI(b.a5(c)))
B.m.sc8(n.e,o.aP())}B.m.dP(n.e,a)}}
A.e4.prototype={
$1(a){return t.G.a(a).d===0},
$S:37}
A.eD.prototype={
e3(){this.f=new A.e1(B.V)
new A.dx().e4(0)
this.sce(t.a.a(A.b([],t.r)))},
aA(){var s=0,r=A.cF(t.z),q=1,p,o=this,n,m,l,k
var $async$aA=A.cH(function(a,b){if(a===1){p=b
s=q}while(true)switch(s){case 0:l=o.w
l===$&&A.a("display")
l.br()
s=2
return A.b8(null,$async$aA)
case 2:q=4
s=7
return A.b8(o.aK(),$async$aA)
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
l.d6(m)
s=8
return A.b8(null,$async$aA)
case 8:o.w.fj()
return A.cB(null,r)
case 1:return A.cA(p,r)}})
return A.cC($async$aA,r)},
fk(a){var s,r,q=this.d
q===$&&A.a("mobjects")
s=q.length
r=0
for(;r<q.length;q.length===s||(0,A.c)(q),++r)q[r].dc(a)},
U(a){var s,r,q=this,p=t.a
p.a(a)
s=A.f(a,!0,t.j)
r=q.f
r===$&&A.a("camera")
B.a.A(s,r.cP(a))
r=q.d
r===$&&A.a("mobjects")
q.sce(p.a(q.dt(r,s)))
B.a.f0(q.d,0,a)},
dt(a,b){var s,r=t.a
r.a(a)
r.a(b)
s=A.b([],t.r)
new A.eE(s).$2(a,A.h4(b,A.w(b).c))
return s},
b5(){var s=0,r=A.cF(t.z),q=this,p,o,n,m
var $async$b5=A.cH(function(a,b){if(a===1)return A.cA(b,r)
while(true)switch(s){case 0:p=0
case 2:if(!(p<1)){s=3
break}o=q.w
o===$&&A.a("display")
s=4
return A.b8(o.b4(),$async$b5)
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
o.d6(m)
q.a+=n
s=2
break
case 3:return A.cB(null,r)}})
return A.cC($async$b5,r)},
aY(){var s=0,r=A.cF(t.z),q=this
var $async$aY=A.cH(function(a,b){if(a===1)return A.cA(b,r)
while(true)switch(s){case 0:case 2:if(!!0){s=3
break}s=4
return A.b8(q.b5(),$async$aY)
case 4:s=2
break
case 3:return A.cB(null,r)}})
return A.cC($async$aY,r)},
sce(a){this.d=t.a.a(a)}}
A.eE.prototype={
$2(a,b){var s,r,q,p,o,n
t.a.a(a)
t.bA.a(b)
for(s=a.length,r=this.a,q=0;q<a.length;a.length===s||(0,A.c)(a),++q){p=a[q]
if(b.ai(0,p))continue
o=p.ag()
n=b.f3(0,A.h4(o,A.w(o).c))
if(n.a!==0){o=p.d
o===$&&A.a("submobjects")
this.$2(o,n)}else B.a.u(r,p)}},
$S:38}
A.fS.prototype={
$2(a,b){var s=this.a
return s.a(s.a(a)+s.a(b))},
$S(){return this.a.h("0(0,0)")}}
A.fR.prototype={
$1(a){return A.Y(a)/this.a*this.b},
$S:39}
A.fU.prototype={
$2(a,b){this.a.a(b)
return a!==0},
$S(){return this.a.h("A(r,0)")}}
A.fJ.prototype={
$1(a){return t.G.a(a).R(0)},
$S:10}
A.fK.prototype={
$1(a){return t.G.a(a).R(0)},
$S:10}
A.fL.prototype={
$1(a){var s
t.p.a(a)
s=J.O(a)
return new A.u(s.i(a,0),s.i(a,1),s.i(a,2),s.i(a,3))},
$S:41}
A.fx.prototype={
$1(a){var s,r,q,p,o,n,m,l=A.b([],t.l)
for(s=A.fD(this.a,t.i),r=s.length,q=1-a,p=this.b,o=0;o<s.length;s.length===r||(0,A.c)(s),++o){n=s[o]
m=n.a
if(typeof m!=="number")return A.cI(m)
l.push(J.cL(n.b,Math.pow(q,p-m)*Math.pow(a,m)*A.iw(p,m,!0)))}return B.a.X(l,new A.fw())},
$S:15}
A.fw.prototype={
$2(a,b){var s=t.i
return s.a(a).B(0,s.a(b))},
$S:42}
A.u.prototype={
fq(a){return new A.u(this.a,this.b,this.c,a)},
j(){var s=this
return new A.u(s.a,s.b,s.c,s.d)},
R(a){var s=this,r=A.b([s.a,s.b,s.c],t.n)
r.push(s.d)
return r},
aP(){var s=this
return"rgba("+B.d.aa(s.a*255)+", "+B.d.aa(s.b*255)+", "+B.d.aa(s.c*255)+", "+A.q(s.d)+")"},
k(a){return this.aP()}}
A.fr.prototype={
$1(a){return A.kU(a,16)/255},
$S:43}
A.bc.prototype={
E(a,b){var s,r=this
if(b==null)return!1
if(!(b instanceof A.bc&&r.a===b.a&&r.b===b.b))s=typeof b=="number"&&r.a===b&&r.b===0
else s=!0
return s}}
A.al.prototype={
k(a){return"EventType."+this.b}}
A.ac.prototype={}
A.ea.prototype={
gaj(){var s=this.a
s===$&&A.a("eventListeners")
return s},
e1(){var s,r,q=A.h3(t.en,t.gF)
for(s=t.aE,r=0;r<6;++r)q.n(0,B.a0[r],A.b([],s))
this.sea(t.cH.a(q))},
ar(a,b,c){var s,r,q
A.fy(c,t.e,"IEvent","_dispatchOnListnersList")
c.a(a)
s=A.f(c.h("m<ad<0>>").a(b),!0,c.h("ad<0>"))
r=!1
while(!0){if(!(!r&&s.length!==0))break
q=B.a.gF(s)
B.a.f8(s,q)
q.$ti.c.a(a)
r=q.a.$1(a)}},
aZ(a){var s,r=this
switch(a.a){case B.v:t.gt.a(a)
s=r.gaj().i(0,B.v)
s.toString
r.ar(a,s,t.e)
break
case B.n:t.N.a(a)
s=r.gaj().i(0,B.n)
s.toString
r.ar(a,s,t.e)
break
case B.o:t.D.a(a)
s=r.gaj().i(0,B.o)
s.toString
r.ar(a,s,t.e)
break
case B.p:t.w.a(a)
s=r.gaj().i(0,B.p)
s.toString
r.ar(a,s,t.e)
break
case B.A:t.fw.a(a)
s=r.gaj().i(0,B.A)
s.toString
r.ar(a,s,t.e)
break
case B.B:t.bf.a(a)
s=r.gaj().i(0,B.B)
s.toString
r.ar(a,s,t.e)
break}},
sea(a){this.a=t.cH.a(a)}}
A.ad.prototype={}
A.d7.prototype={}
A.c2.prototype={}
A.aN.prototype={}
A.aO.prototype={}
A.aM.prototype={}
A.ew.prototype={}
A.fz.prototype={
$2(a,b){return A.Y(a)*A.Y(b)},
$S:9}
A.fA.prototype={
$2(a,b){return A.Y(a)*A.Y(b)},
$S:9}
A.ak.prototype={
B(a,b){var s,r
if(typeof b=="number"){s=this.b
s===$&&A.a("shape")
r=A.b_(b,s)}else{t.A.a(b)
r=b}return this.an(0,new A.dU(r))},
t(a,b){var s,r
if(typeof b=="number"){s=this.b
s===$&&A.a("shape")
r=A.b_(b,s)}else{t.A.a(b)
r=b}return this.an(0,new A.dX(r))},
q(a,b){var s,r
if(typeof b=="number"){s=this.b
s===$&&A.a("shape")
r=A.b_(b,s)}else{t.A.a(b)
r=b}return this.an(0,new A.dW(r))},
a3(a,b){var s,r=this.b
r===$&&A.a("shape")
s=A.b_(b,r)
return this.an(0,new A.dV(s))},
an(a,b){var s,r,q
t.fA.a(b)
s=this.a
s===$&&A.a("values")
s=A.fD(s,t.p)
r=A.w(s)
q=r.h("K<1,m<l>>")
q=A.f(new A.K(s,r.h("m<l>(1)").a(new A.dT(b)),q),!0,q.h("C.E"))
r=this.b
r===$&&A.a("shape")
return A.X(r,q)},
a6(a){var s,r
t.o.a(a)
s=a.a
r=this.a
r===$&&A.a("values")
if(s>>>0!==s||s>=r.length)return A.k(r,s)
return J.S(r[s],a.b)},
ev(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.b
e===$&&A.a("shape")
s=e.a
if(typeof s!=="number")return s.t()
e=e.b
if(typeof e!=="number")return e.t()
r=A.b([],t.b)
for(q=A.v(f.b.a,0,1),p=q.length,o=t.n,n=0;n<q.length;q.length===p||(0,A.c)(q),++n){m=q[n]
if(!J.ab(m,a)){l=A.b([],o)
for(k=A.v(f.b.a,0,1),j=k.length,i=0;i<k.length;k.length===j||(0,A.c)(k),++i){h=k[i]
if(!J.ab(h,b)){g=f.a
g===$&&A.a("values")
l.push(J.S(B.a.i(g,m),h))}}r.push(l)}}return A.X(new A.x(s-1,e-1,t.o),r)},
bR(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.b
h===$&&A.a("shape")
if(J.ab(h.a,2)){h=i.a
h===$&&A.a("values")
if(0>=h.length)return A.k(h,0)
s=J.S(h[0],0)
h=i.a
if(0>=h.length)return A.k(h,0)
r=J.S(h[0],1)
h=i.a
if(1>=h.length)return A.k(h,1)
q=J.S(h[1],0)
h=i.a
if(1>=h.length)return A.k(h,1)
return s*J.S(h[1],1)-r*q}h=i.b
p=h.a
if(typeof p!=="number")return p.t()
h=h.b
if(typeof h!=="number")return h.t()
o=new A.x(p-1,h-1,t.o)
h=A.b([],t.n)
for(p=A.v(i.b.a,0,1),n=p.length,m=0;m<p.length;p.length===n||(0,A.c)(p),++m){l=p[m]
if(typeof l!=="number")return l.a8()
k=B.d.a8(l,2)===0?1:-1
j=i.a
j===$&&A.a("values")
if(0>=j.length)return A.k(j,0)
h.push(k*A.b_(J.S(j[0],l),o).q(0,i.ev(0,l)).bR())}return A.hv(h,t.V)},
dq(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8="values"
if(this.bR()===0)throw A.e("This matrix is not inversible")
s=this.b
s===$&&A.a("shape")
r=s.a
q=s.b
p=this.j()
o=A.fX(r)
for(s=A.v(q,0,1),n=s.length,m=r-1,l=q-1,k=t.o,j=0;j<s.length;s.length===n||(0,A.c)(s),++j){i=s[j]
for(h=i,g=-1,f=-1;h!==r;++h){k.a(new A.x(h,i,k))
e=p.a
e===$&&A.a(a8)
if(!(h>=0&&h<e.length))return A.k(e,h)
d=J.S(e[h],i)
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
e=J.O(b)
a0=e.i(b,i)
for(a1=i;a1<q;++a1){c=e.i(b,a1)
if(typeof c!=="number")return c.a3()
e.n(b,a1,c/a0)}for(c=J.O(a),a1=l;a1>=0;--a1){a2=c.i(a,a1)
if(typeof a2!=="number")return a2.a3()
c.n(a,a1,a2/a0)}for(a1=i+1,g=m;g>=0;--g)if(g!==i){a2=p.a
if(!(g<a2.length))return A.k(a2,g)
a3=a2[g]
a2=o.a
if(!(g<a2.length))return A.k(a2,g)
a4=a2[g]
a2=J.O(a3)
a0=a2.i(a3,i)
for(a5=a1;a5!==q;++a5){a6=a2.i(a3,a5)
a7=e.i(b,a5)
if(typeof a7!=="number")return a7.q()
if(typeof a6!=="number")return a6.t()
a2.n(a3,a5,a6-a7*a0)}for(a2=J.O(a4),a5=l;a5>0;--a5){a6=a2.i(a4,a5)
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
return A.f(new A.K(q,s.h("l(1)").a(new A.dR(a)),r),!0,r.h("C.E"))},
gda(){return this.an(0,new A.dY(this))},
az(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1="values",a2=this.b
a2===$&&A.a("shape")
s=a2.a
r=a2.b
a2=a3.b
a2===$&&A.a("shape")
q=a2.b
p=A.b_(0,new A.x(s,q,t.o))
for(a2=A.v(s,0,1),o=a2.length,n=0;n<a2.length;a2.length===o||(0,A.c)(a2),++n){m=a2[n]
for(l=A.v(q,0,1),k=l.length,j=0;j<l.length;l.length===k||(0,A.c)(l),++j){i=l[j]
for(h=A.v(r,0,1),g=h.length,f=0;f<h.length;h.length===g||(0,A.c)(h),++f){e=h[f]
d=p.a
d===$&&A.a(a1)
d=B.a.i(d,m)
c=J.O(d)
b=c.i(d,i)
a=this.a
a===$&&A.a(a1)
a=J.S(B.a.i(a,m),e)
a0=a3.a
a0===$&&A.a(a1)
a0=J.S(B.a.i(a0,e),i)
if(typeof a!=="number")return a.q()
if(typeof a0!=="number")return A.cI(a0)
if(typeof b!=="number")return b.B()
c.n(d,i,b+a*a0)}}}return p},
j(){return this.eB(new A.dQ())},
eB(a){return this.an(0,new A.dP(t.ao.a(a)))},
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
m=B.a.bA(r,6,B.M,t.S)
for(r=c.a,q=r.length,p=m+4,n=t.s,l="",o=0;o<r.length;r.length===q||(0,A.c)(r),++o){l+="      "
for(k=J.U(r[o]);k.m();){j=k.gp()
i=j<0?"-":" "
j=Math.abs(j)
h=B.d.bN(j,6)
g=A.b([],n)
for(h=A.v(p-h.length,0,1),f=h.length,e=0;e<h.length;h.length===f||(0,A.c)(h),++e)g.push(" ")
d=B.a.f4(g)
l=l+i+B.d.bN(j,6)+d}l+="\n"}return b+"x"+s+" matrix\n"+l},
se6(a){this.b=t.o.a(a)}}
A.dU.prototype={
$2(a,b){return a+this.a.a6(t.o.a(b))},
$S:1}
A.dX.prototype={
$2(a,b){return a-this.a.a6(t.o.a(b))},
$S:1}
A.dW.prototype={
$2(a,b){return a*this.a.a6(t.o.a(b))},
$S:1}
A.dV.prototype={
$2(a,b){return a/this.a.a6(t.o.a(b))},
$S:1}
A.dT.prototype={
$1(a){var s,r,q
t.fz.a(a)
s=A.fD(a.b,t.V)
r=A.w(s)
q=r.h("K<1,l>")
return A.f(new A.K(s,r.h("l(1)").a(new A.dS(this.a,a)),q),!0,q.h("C.E"))},
$S:46}
A.dS.prototype={
$1(a){t.d.a(a)
return this.a.$2(a.b,new A.x(this.b.a,a.a,t.o))},
$S:47}
A.dR.prototype={
$1(a){return J.S(t.p.a(a),this.a)},
$S:48}
A.dY.prototype={
$2(a,b){var s=t.o
s.a(b)
return this.a.a6(new A.x(b.b,b.a,s))},
$S:1}
A.dQ.prototype={
$1(a){return a},
$S:6}
A.dP.prototype={
$2(a,b){t.o.a(b)
return this.a.$1(a)},
$S:1}
A.fQ.prototype={
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
a2(){var s=this.a,r=this.b,q=this.c
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
dh(a){return this.bO(null,null,a)},
dg(a,b){if(a===0)return this.fo(b)
else if(a===1)return this.fp(b)
else if(a===2)return this.dh(b)
else throw A.e("Cannot index a vector3 with index="+a)},
az(a){var s=A.fX(3).an(0,new A.eV(a)).az(this.fi()),r=t.o
return new A.d(s.a6(new A.x(0,0,r)),s.a6(new A.x(1,0,r)),s.a6(new A.x(2,0,r)))},
cO(a){return this.a*a.a+this.b*a.b+this.c*a.c},
aH(){var s=this.a
if(s===0&&this.b===0)return 0
return Math.atan2(this.b,s)},
k(a){return"vec3("+A.q(this.a)+", "+A.q(this.b)+", "+A.q(this.c)+")"}}
A.eV.prototype={
$2(a,b){var s,r,q,p
t.o.a(b)
s=b.a
r=this.a
q=r.b
q===$&&A.a("shape")
p=q.a
if(typeof s!=="number")return s.di()
if(typeof p!=="number")return A.cI(p)
if(s<p){s=b.b
q=q.b
if(typeof s!=="number")return s.di()
if(typeof q!=="number")return A.cI(q)
q=s>=q
s=q}else s=!0
return s?a:r.a6(b)},
$S:1}
A.x.prototype={
k(a){return"["+A.q(this.a)+", "+A.q(this.b)+"]"},
E(a,b){if(b==null)return!1
return b instanceof A.x&&J.ab(b.a,this.a)&&J.ab(b.b,this.b)},
gH(a){return A.d9(J.a7(this.a),J.a7(this.b),B.l,B.l)}}
A.bj.prototype={
R(a){var s=this
return A.ei([s.a,s.b,s.c,s.d],!1,t.z)},
k(a){var s=this
return"["+s.a.k(0)+", "+s.b.k(0)+", "+s.c.k(0)+", "+s.d.k(0)+"]"},
E(a,b){var s=this
if(b==null)return!1
return b instanceof A.bj&&b.a.E(0,s.a)&&b.b.E(0,s.b)&&b.c.E(0,s.c)&&b.d.E(0,s.d)},
gH(a){var s=this
return A.d9(A.aP(s.a),A.aP(s.b),A.aP(s.c),A.aP(s.d))}}
A.el.prototype={
aK(){var s=0,r=A.cF(t.z),q=this,p
var $async$aK=A.cH(function(a,b){if(a===1)return A.cA(b,r)
while(true)switch(s){case 0:p=q.f
p===$&&A.a("camera")
p.f=A.kg("#191919")
s=2
return A.b8(q.bv(),$async$aK)
case 2:q.f6()
s=3
return A.b8(q.aY(),$async$aK)
case 3:return A.cB(null,r)}})
return A.cC($async$aK,r)},
bv(){var s=0,r=A.cF(t.z),q=this,p,o,n,m,l,k,j,i
var $async$bv=A.cH(function(a,b){if(a===1)return A.cA(b,r)
while(true)switch(s){case 0:i=A.hD(A.cR(null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null),6,-1,A.cR(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,0.7),6,-1)
q.as=i
i=i.bT(new A.em(),5,0.2)
i.bd(B.u)
q.ax=i
i=A.hD(A.cR(null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null),6,-1,A.cR(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,0.7),11,-1)
q.at=i
i=i.bT(new A.en(),5,0.2)
i.bd(B.z)
q.ay=i
i=A.bK(new A.d(-6,0,0),B.b)
i.ao(B.G)
q.x=i
q.y=A.bK(new A.d(0,0,0),B.u)
q.z=A.bK(new A.d(0,0,0),B.z)
i=q.x.M()
q.Q=A.hJ(B.H,q.z.M(),i)
i=t.r
p=A.hM(A.b([q.ax,q.as],i))
p.bY(0.4)
p.aN(B.r.q(0,2).B(0,B.t.q(0,0)))
o=A.hM(A.b([q.at,q.ay],i))
o.bY(0.4)
o.aN(B.q.q(0,2).B(0,B.t.q(0,0)))
n=q.ax
n.V("getStart")
n=n.r
n===$&&A.a("points")
q.scd(t.y.a(A.b([new A.d(B.a.gD(n).G(0),q.as.aL(q.x.M()).G(1),0)],t.l)))
n=q.ax.r
n===$&&A.a("points")
m=n.length
l=0
for(;l<n.length;n.length===m||(0,A.c)(n),++l){k=n[l]
j=q.ax.r
j===$&&A.a("points")
if(B.e.a8(B.a.eZ(j,k),10)===0){j=q.CW
j===$&&A.a("vertices")
B.a.u(j,k)}}A.fP("end")
n=q.CW
n===$&&A.a("vertices")
A.fP(n.length)
n=A.hU(q.CW,B.b)
q.ch=n
q.U(A.b([q.x,p,q.Q,q.y,o,q.z,n],i))
return A.cB(null,r)}})
return A.cC($async$bv,r)},
f6(){var s,r=this,q=r.x
q===$&&A.a("slider")
s=new A.bL($,$,$,!1,q,B.b,$,null,$,$,$)
s.S(B.b,null,null)
s.e2(q)
r.U(t.a.a(A.b([s],t.r)))
s=r.x
q=t.he.a(new A.ep(r))
B.a.u(s.gde(),q)
s.dc(0)},
scd(a){this.CW=t.y.a(a)}}
A.em.prototype={
$1(a){A.aF(a)
return 2},
$S:6}
A.en.prototype={
$1(a){return 2*A.aF(a)},
$S:6}
A.ep.prototype={
$2(a,b){var s,r,q,p,o,n,m,l,k,j,i="points",h="getStart"
t.j.a(a)
A.aF(b)
s=this.a
r=s.x
r===$&&A.a("slider")
r=r.M().G(0)
q=s.ax
q===$&&A.a("graph")
q.V("getEnd")
q=q.r
q===$&&A.a(i)
if(r>B.a.gF(q).G(0)){r=s.x
q=s.ax
q.V("getEnd")
q=q.r
q===$&&A.a(i)
r.c0(B.a.gF(q).G(0),0,null)}r=s.x.M().G(0)
q=s.ax
q.V(h)
q=q.r
q===$&&A.a(i)
if(r<B.a.gD(q).G(0)){r=s.x
q=s.ax
q.V(h)
q=q.r
q===$&&A.a(i)
r.c0(B.a.gD(q).G(0),0,null)}r=s.x.M().G(0)
q=s.as
q===$&&A.a("axes")
a.aJ(A.bK(new A.d(r,q.aL(B.c).G(1),0),B.G))
p=s.as.d1(s.x.M()).G(0)
q=s.ax.J.$1(p)
o=s.as.aL(new A.d(p,q,0))
q=s.y
q===$&&A.a("Corresponding")
q.aJ(A.bK(o,B.u))
q=s.at
q===$&&A.a("axesDerivative")
n=q.d1(s.x.M()).G(0)
q=s.ay
q===$&&A.a("graph2")
q=q.J.$1(n)
m=s.at.aL(new A.d(n,q,0))
q=s.z
q===$&&A.a("derivativePoint")
q.aJ(A.bK(m,B.z))
q=s.x.M()
l=A.hJ(B.H,s.z.M(),q)
q=s.Q
q===$&&A.a("line")
q.aJ(l)
A.fP("ha")
k=A.b([],t.l)
q=s.CW
q===$&&A.a("vertices")
B.a.A(k,q)
r=B.a.gF(s.CW).G(0)
q=s.x.M().G(0)
j=s.CW
if(r>q){B.a.f9(j,B.a.f_(j,new A.eo(s)),s.CW.length)
B.a.u(s.CW,s.y.M())
B.a.u(s.CW,s.x.M())}else B.a.u(j,s.x.M())
A.fP(s.CW.length)
r=s.ch
r===$&&A.a("area")
q=A.hU(s.CW,B.u.fq(0.5))
q.bd(B.i)
r.aJ(q)
s.scd(t.y.a(k))
return a},
$S:51}
A.eo.prototype={
$1(a){var s=t.i.a(a).G(0),r=this.a.x
r===$&&A.a("slider")
return s>r.M().G(0)},
$S:17};(function aliases(){var s=J.bT.prototype
s.dR=s.k
s=J.b2.prototype
s.dS=s.k
s=A.z.prototype
s.dX=s.k
s=A.bi.prototype
s.dY=s.L
s.dZ=s.O
s=A.p.prototype
s.dT=s.aI
s.dV=s.aO
s.dW=s.ap
s.dU=s.aM
s.ca=s.O
s.c9=s.L
s=A.y.prototype
s.e_=s.ap
s=A.bw.prototype
s.dQ=s.dK})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installStaticTearOff,o=hunkHelpers._instance_0u
s(J,"ko","jq",52)
r(A,"kJ","jT",5)
r(A,"kK","jU",5)
r(A,"kL","jV",5)
q(A,"iv","kC",0)
p(A,"l0",2,null,["$1$2","$2"],["iF",function(a,b){return A.iF(a,b,t.H)}],11,0)
p(A,"iD",2,null,["$1$2","$2"],["iE",function(a,b){return A.iE(a,b,t.H)}],11,0)
o(A.p.prototype,"gds","b9",54)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.z,null)
q(A.z,[A.h1,J.bT,J.by,A.n,A.bE,A.G,A.a0,A.eF,A.a3,A.E,A.bO,A.eI,A.ex,A.bP,A.cq,A.be,A.eg,A.c_,A.d4,A.dw,A.dh,A.fk,A.ao,A.du,A.dB,A.fl,A.dp,A.bm,A.bn,A.bB,A.dr,A.b6,A.N,A.dq,A.cb,A.cc,A.dz,A.cw,A.cy,A.dv,A.b7,A.ae,A.c8,A.f0,A.ca,A.f3,A.eb,A.M,A.dA,A.dg,A.fZ,A.dx,A.b4,A.co,A.e1,A.bv,A.p,A.Z,A.cg,A.bw,A.eD,A.u,A.bc,A.ac,A.ea,A.ad,A.ew,A.ak,A.d,A.x,A.bj])
q(J.bT,[J.d2,J.bW,J.am,J.t,J.aK,J.ay])
q(J.am,[J.b2,A.a1,A.bD,A.e6,A.bI,A.i,A.da])
q(J.b2,[J.db,J.au,J.aL])
r(J.ef,J.t)
q(J.aK,[J.bV,J.d3])
q(A.n,[A.aU,A.D,A.b3,A.aD,A.aB,A.bU])
q(A.aU,[A.b1,A.cx])
r(A.cl,A.b1)
r(A.cj,A.cx)
r(A.a_,A.cj)
q(A.G,[A.bY,A.aS,A.d5,A.dl,A.dc,A.bA,A.dt,A.d8,A.av,A.dm,A.dk,A.bh,A.cW,A.cY])
q(A.a0,[A.cU,A.bS,A.cV,A.di,A.fE,A.fG,A.eY,A.eX,A.fp,A.f8,A.fg,A.eG,A.fj,A.eW,A.f2,A.ed,A.e2,A.e3,A.dK,A.dL,A.dM,A.ey,A.ez,A.e5,A.eA,A.ec,A.e7,A.e8,A.e9,A.eu,A.et,A.es,A.ev,A.eq,A.er,A.P,A.Q,A.R,A.eT,A.eU,A.eQ,A.eP,A.eM,A.eS,A.eR,A.e4,A.fR,A.fJ,A.fK,A.fL,A.fx,A.fr,A.dT,A.dS,A.dR,A.dQ,A.em,A.en,A.eo])
q(A.cU,[A.fN,A.eZ,A.f_,A.fm,A.f4,A.fc,A.fa,A.f6,A.fb,A.f5,A.ff,A.fe,A.fd,A.eH,A.fu,A.fi])
q(A.D,[A.C,A.bN,A.bZ])
q(A.C,[A.ap,A.K,A.aA])
r(A.bM,A.b3)
q(A.E,[A.c1,A.ci,A.c9])
r(A.bd,A.aB)
r(A.aJ,A.bS)
r(A.c3,A.aS)
q(A.di,[A.df,A.bb])
r(A.dn,A.bA)
r(A.c0,A.be)
r(A.bX,A.c0)
q(A.cV,[A.fF,A.fq,A.fv,A.f9,A.ej,A.e0,A.eO,A.eK,A.eN,A.eL,A.eE,A.fS,A.fU,A.fw,A.fz,A.fA,A.dU,A.dX,A.dW,A.dV,A.dY,A.dP,A.fQ,A.eV,A.ep])
r(A.ct,A.dt)
q(A.bU,[A.cs,A.V])
r(A.cr,A.dr)
r(A.dy,A.cw)
r(A.cp,A.cy)
r(A.aE,A.cp)
q(A.av,[A.c5,A.d0])
q(A.a1,[A.a9,A.bk])
q(A.a9,[A.h,A.as])
r(A.j,A.h)
q(A.j,[A.cP,A.cQ,A.b0,A.d_,A.dd])
r(A.ar,A.i)
r(A.af,A.ar)
r(A.ck,A.bI)
r(A.cm,A.cb)
r(A.ds,A.cm)
r(A.cn,A.cc)
r(A.cO,A.bv)
r(A.cS,A.cO)
q(A.p,[A.y,A.d1,A.bR])
q(A.y,[A.bi,A.aT,A.c4,A.az,A.ch,A.bH])
q(A.bi,[A.T,A.bx])
q(A.T,[A.bf,A.bG])
r(A.cX,A.aT)
r(A.bC,A.cX)
r(A.bQ,A.c4)
r(A.ce,A.cg)
q(A.f0,[A.dj,A.al])
r(A.bF,A.bx)
r(A.bJ,A.bF)
r(A.c6,A.az)
r(A.cf,A.c6)
r(A.bz,A.cf)
r(A.bL,A.d1)
r(A.cT,A.bw)
r(A.d7,A.ac)
q(A.d7,[A.c2,A.aN,A.aO,A.aM])
r(A.el,A.eD)
s(A.cx,A.ae)
s(A.cy,A.c8)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{r:"int",l:"double",J:"num",W:"String",A:"bool",M:"Null",m:"List"},mangledNames:{},types:["~()","l(l,x<r,r>)","d(d)","u(u)","~(af)","~(~())","l(l)","A(p)","M()","r(r,r)","m<l>(u)","0^(0^,0^)<J>","A(r)","A(r,d)","M(@)","d(l)","T(T)","A(d)","ai<M>()","m<p>(p)","@(W)","Z(Z,Z)","A(l)","~(i)","A(aM)","A(aN)","A(aO)","M(@,aQ)","~(J)","l(d)","~(z?,z?)","N<@>(@)","M(z,aQ)","m<d>(m<m<d>>,@)","m<u>(W,y)","~(W,y,m<u>)","~(r,@)","A(u)","~(m<p>,c7<p>)","l(r)","@(@,W)","u(m<l>)","d(d,d)","l(W)","~(@)","m<u>(m<u>)","m<l>(x<r,m<l>>)","l(x<r,l>)","l(m<l>)","@(@)","ak(ak,ak)","p(p,l)","r(@,@)","M(~())","W()"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.k8(v.typeUniverse,JSON.parse('{"db":"b2","au":"b2","aL":"b2","le":"i","ll":"i","lq":"h","lf":"j","lr":"j","lm":"a9","lj":"a9","ls":"af","lh":"ar","lg":"as","lu":"as","d2":{"A":[]},"bW":{"M":[]},"t":{"m":["1"],"D":["1"],"n":["1"]},"ef":{"t":["1"],"m":["1"],"D":["1"],"n":["1"]},"by":{"E":["1"]},"aK":{"l":[],"J":[],"aw":["J"]},"bV":{"l":[],"r":[],"J":[],"aw":["J"]},"d3":{"l":[],"J":[],"aw":["J"]},"ay":{"W":[],"aw":["W"],"eB":[]},"aU":{"n":["2"]},"bE":{"E":["2"]},"b1":{"aU":["1","2"],"n":["2"],"n.E":"2"},"cl":{"b1":["1","2"],"aU":["1","2"],"D":["2"],"n":["2"],"n.E":"2"},"cj":{"ae":["2"],"m":["2"],"aU":["1","2"],"D":["2"],"n":["2"]},"a_":{"cj":["1","2"],"ae":["2"],"m":["2"],"aU":["1","2"],"D":["2"],"n":["2"],"n.E":"2","ae.E":"2"},"bY":{"G":[]},"D":{"n":["1"]},"C":{"D":["1"],"n":["1"]},"ap":{"C":["1"],"D":["1"],"n":["1"],"C.E":"1","n.E":"1"},"a3":{"E":["1"]},"b3":{"n":["2"],"n.E":"2"},"bM":{"b3":["1","2"],"D":["2"],"n":["2"],"n.E":"2"},"c1":{"E":["2"]},"K":{"C":["2"],"D":["2"],"n":["2"],"C.E":"2","n.E":"2"},"aD":{"n":["1"],"n.E":"1"},"ci":{"E":["1"]},"aB":{"n":["1"],"n.E":"1"},"bd":{"aB":["1"],"D":["1"],"n":["1"],"n.E":"1"},"c9":{"E":["1"]},"bN":{"D":["1"],"n":["1"],"n.E":"1"},"bO":{"E":["1"]},"aA":{"C":["1"],"D":["1"],"n":["1"],"C.E":"1","n.E":"1"},"bS":{"a0":[],"ax":[]},"aJ":{"a0":[],"ax":[]},"c3":{"aS":[],"G":[]},"d5":{"G":[]},"dl":{"G":[]},"cq":{"aQ":[]},"a0":{"ax":[]},"cU":{"a0":[],"ax":[]},"cV":{"a0":[],"ax":[]},"di":{"a0":[],"ax":[]},"df":{"a0":[],"ax":[]},"bb":{"a0":[],"ax":[]},"dc":{"G":[]},"dn":{"G":[]},"bX":{"be":["1","2"],"d6":["1","2"]},"bZ":{"D":["1"],"n":["1"],"n.E":"1"},"c_":{"E":["1"]},"d4":{"eB":[]},"dw":{"ek":[]},"dh":{"ek":[]},"fk":{"E":["ek"]},"dt":{"G":[]},"ct":{"aS":[],"G":[]},"N":{"ai":["1"]},"bn":{"E":["1"]},"cs":{"n":["1"],"n.E":"1"},"bB":{"G":[]},"cr":{"dr":["1"]},"cw":{"i5":[]},"dy":{"cw":[],"i5":[]},"aE":{"c8":["1"],"c7":["1"],"D":["1"],"n":["1"]},"b7":{"E":["1"]},"bU":{"n":["1"]},"c0":{"be":["1","2"],"d6":["1","2"]},"be":{"d6":["1","2"]},"cp":{"c8":["1"],"c7":["1"],"D":["1"],"n":["1"]},"l":{"J":[],"aw":["J"]},"r":{"J":[],"aw":["J"]},"m":{"D":["1"],"n":["1"]},"J":{"aw":["J"]},"c7":{"D":["1"],"n":["1"]},"W":{"aw":["W"],"eB":[]},"bA":{"G":[]},"aS":{"G":[]},"d8":{"G":[]},"av":{"G":[]},"c5":{"G":[]},"d0":{"G":[]},"dm":{"G":[]},"dk":{"G":[]},"bh":{"G":[]},"cW":{"G":[]},"ca":{"G":[]},"cY":{"G":[]},"dA":{"aQ":[]},"af":{"i":[]},"j":{"h":[],"a1":[]},"cP":{"h":[],"a1":[]},"cQ":{"h":[],"a1":[]},"b0":{"h":[],"a1":[]},"as":{"a1":[]},"bI":{"h7":["J"]},"h":{"a1":[]},"d_":{"h":[],"a1":[]},"a9":{"a1":[]},"dd":{"h":[],"a1":[]},"ar":{"i":[]},"bk":{"a1":[]},"ck":{"h7":["J"]},"cm":{"cb":["1"]},"ds":{"cm":["1"],"cb":["1"]},"cn":{"cc":["1"]},"dx":{"jF":[]},"V":{"n":["m<1>"],"n.E":"m<1>"},"co":{"E":["m<1>"]},"cO":{"bv":[]},"cS":{"bv":[]},"bf":{"T":[],"y":[],"p":[]},"cX":{"aT":[],"y":[],"p":[]},"bC":{"aT":[],"y":[],"p":[]},"c4":{"y":[],"p":[]},"bQ":{"y":[],"p":[]},"T":{"y":[],"p":[]},"ce":{"cg":[]},"bi":{"y":[],"p":[]},"bx":{"y":[],"p":[]},"bF":{"y":[],"p":[]},"bJ":{"y":[],"p":[]},"bG":{"T":[],"y":[],"p":[]},"az":{"y":[],"p":[]},"c6":{"az":[],"y":[],"p":[]},"cf":{"az":[],"y":[],"p":[]},"bz":{"az":[],"y":[],"p":[]},"d1":{"p":[]},"bL":{"p":[]},"bR":{"p":[]},"y":{"p":[]},"aT":{"y":[],"p":[]},"ch":{"y":[],"p":[]},"bH":{"y":[],"p":[]},"cT":{"bw":[]},"aN":{"ac":[]},"aO":{"ac":[]},"aM":{"ac":[]},"d7":{"ac":[]},"c2":{"ac":[]}}'))
A.k7(v.typeUniverse,JSON.parse('{"cx":2,"bU":1,"c0":2,"cp":1,"cy":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",b:"No color list in VMobject with attribute name "}
var t=(function rtii(){var s=A.bt
return{dq:s("@<r>"),A:s("ak"),u:s("bB"),dK:s("Z"),gA:s("b0"),G:s("u"),e8:s("aw<@>"),X:s("D<@>"),Y:s("G"),L:s("i"),gc:s("ad<ac>"),gl:s("ad<aM>"),c3:s("ad<aN>"),eL:s("ad<aO>"),en:s("al"),e:s("ac"),Z:s("ax"),v:s("ai<@>"),bL:s("aJ<l>"),fk:s("V<p>"),m:s("V<z>"),eX:s("V<y>"),eR:s("V<d>"),ca:s("V<l>"),eN:s("V<r>"),hf:s("n<@>"),aM:s("t<ak>"),f_:s("t<Z>"),O:s("t<u>"),bN:s("t<bc>"),aE:s("t<ad<ac>>"),aW:s("t<T>"),ae:s("t<m<p>>"),Q:s("t<m<z>>"),h:s("t<m<d>>"),b:s("t<m<l>>"),gL:s("t<m<r>>"),r:s("t<p>"),db:s("t<cc<@>>"),s:s("t<W>"),dm:s("t<bj<d,d,d,d>>"),U:s("t<y>"),l:s("t<d>"),n:s("t<l>"),gn:s("t<@>"),t:s("t<r>"),eM:s("t<p(p,l)>"),T:s("bW"),cj:s("aL"),fw:s("lo"),bf:s("lp"),f:s("T"),W:s("m<u>"),gF:s("m<ad<ac>>"),dF:s("m<m<d>>"),a:s("m<p>"),y:s("m<d>"),p:s("m<l>"),aH:s("m<@>"),cS:s("m<p(p,l)>"),cH:s("d6<al,m<ad<ac>>>"),j:s("p"),he:s("p(p,l)"),w:s("aM"),E:s("af"),gt:s("c2"),N:s("aN"),D:s("aO"),P:s("M"),f4:s("bf"),K:s("z"),q:s("b4<J>"),eU:s("h7<J>"),bA:s("c7<p>"),k:s("aQ"),aw:s("W"),e3:s("ap<d>"),hd:s("x<d,d>"),d:s("x<r,l>"),o:s("x<r,r>"),fz:s("x<r,m<l>>"),bl:s("bj<d,d,d,d>"),eK:s("aS"),ak:s("au"),dT:s("y"),i:s("d"),cD:s("d(d)"),do:s("ds<af>"),ck:s("N<M>"),c:s("N<@>"),fJ:s("N<r>"),dL:s("N<J>"),g4:s("cr<J>"),cJ:s("A"),al:s("A(z)"),fT:s("A(r)"),V:s("l"),fA:s("l(l,x<r,r>)"),ao:s("l(l)"),z:s("@"),fO:s("@()"),I:s("@(z)"),C:s("@(z,aQ)"),S:s("r"),cF:s("0&*"),_:s("z*"),eH:s("ai<M>?"),x:s("m<u>?"),g2:s("m<T>?"),bG:s("m<d>?"),R:s("z?"),F:s("b6<@,@>?"),g:s("dv?"),B:s("@(i)?"),g5:s("~()?"),H:s("J"),J:s("~"),M:s("~()"),c4:s("~(J)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.F=A.b0.prototype
B.m=A.bD.prototype
B.W=J.bT.prototype
B.a=J.t.prototype
B.e=J.bV.prototype
B.d=J.aK.prototype
B.j=J.ay.prototype
B.X=J.aL.prototype
B.Y=J.am.prototype
B.J=J.db.prototype
B.C=J.au.prototype
B.a4=A.bk.prototype
B.t=new A.d(-1,0,0)
B.K=new A.Z(null,null,null,B.t,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.I=new A.u(0.73333,0.73333,0.73333,1)
B.r=new A.d(0,-1,0)
B.Z=A.b(s([0]),t.n)
B.L=new A.Z(B.I,!0,!1,B.r,1,!0,0.1,1,null,B.Z,!1,null,2,0,0.75,0.25,0.25,0.25,null,4)
B.w=new A.Z(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.y=new A.aJ(A.iD(),t.bL)
B.M=new A.aJ(A.iD(),A.bt("aJ<r>"))
B.x=new A.aJ(A.l0(),t.bL)
B.N=new A.bO(A.bt("bO<0&>"))
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

B.l=new A.eF()
B.f=new A.dy()
B.U=new A.dA()
B.i=new A.u(0,0,0,0)
B.V=new A.u(0,0,0,1)
B.z=new A.u(1,1,0,1)
B.b=new A.u(1,1,1,1)
B.G=new A.u(0.51373,0.75686,0.40392,1)
B.H=new A.u(0.3451,0.76863,0.86667,1)
B.u=new A.u(1,0.52549,0.18431,1)
B.v=new A.al("mouseMovedEvent")
B.n=new A.al("mousePressedEvent")
B.o=new A.al("mouseReleasedEvent")
B.p=new A.al("mouseDraggedEvent")
B.A=new A.al("keyPressedEvent")
B.B=new A.al("keyReleasedEvent")
B.a6=A.b(s([]),t.r)
B.a_=A.b(s([]),t.n)
B.a0=A.b(s([B.v,B.n,B.o,B.p,B.A,B.B]),A.bt("t<al>"))
B.a1=new A.dj("Start")
B.a2=new A.dj("End")
B.a3=A.lb("z")
B.c=new A.d(0,0,0)
B.h=new A.d(0,0,1)
B.q=new A.d(0,1,0)
B.k=new A.d(1,0,0)
B.a5=new A.bm(null,2)})();(function staticFields(){$.fh=null
$.hV=null
$.hG=null
$.hF=null
$.iA=null
$.iu=null
$.iI=null
$.fC=null
$.fH=null
$.hr=null
$.bp=null
$.cD=null
$.cE=null
$.hh=!1
$.H=B.f
$.ag=A.b([],A.bt("t<z>"))
$.dE=A.h3(t.S,A.bt("d6<r,r>"))})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"li","iM",()=>A.kO("_$dart_dartClosure"))
s($,"lS","hx",()=>B.f.d8(new A.fN(),A.bt("ai<M>")))
s($,"lv","iN",()=>A.aC(A.eJ({
toString:function(){return"$receiver$"}})))
s($,"lw","iO",()=>A.aC(A.eJ({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"lx","iP",()=>A.aC(A.eJ(null)))
s($,"ly","iQ",()=>A.aC(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"lB","iT",()=>A.aC(A.eJ(void 0)))
s($,"lC","iU",()=>A.aC(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"lA","iS",()=>A.aC(A.i2(null)))
s($,"lz","iR",()=>A.aC(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"lE","iW",()=>A.aC(A.i2(void 0)))
s($,"lD","iV",()=>A.aC(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"lF","hw",()=>A.jS())
s($,"lQ","fV",()=>A.iG(B.a3))
r($,"lk","bu",()=>{var q=new A.ea()
q.e1()
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
hunkHelpers.setOrUpdateInterceptorsByTag({CanvasGradient:J.am,DOMError:J.am,MediaError:J.am,NavigatorUserMediaError:J.am,OverconstrainedError:J.am,PositionError:J.am,GeolocationPositionError:J.am,HTMLAudioElement:A.j,HTMLBRElement:A.j,HTMLBaseElement:A.j,HTMLBodyElement:A.j,HTMLButtonElement:A.j,HTMLContentElement:A.j,HTMLDListElement:A.j,HTMLDataElement:A.j,HTMLDataListElement:A.j,HTMLDetailsElement:A.j,HTMLDialogElement:A.j,HTMLDivElement:A.j,HTMLEmbedElement:A.j,HTMLFieldSetElement:A.j,HTMLHRElement:A.j,HTMLHeadElement:A.j,HTMLHeadingElement:A.j,HTMLHtmlElement:A.j,HTMLIFrameElement:A.j,HTMLImageElement:A.j,HTMLInputElement:A.j,HTMLLIElement:A.j,HTMLLabelElement:A.j,HTMLLegendElement:A.j,HTMLLinkElement:A.j,HTMLMapElement:A.j,HTMLMediaElement:A.j,HTMLMenuElement:A.j,HTMLMetaElement:A.j,HTMLMeterElement:A.j,HTMLModElement:A.j,HTMLOListElement:A.j,HTMLObjectElement:A.j,HTMLOptGroupElement:A.j,HTMLOptionElement:A.j,HTMLOutputElement:A.j,HTMLParagraphElement:A.j,HTMLParamElement:A.j,HTMLPictureElement:A.j,HTMLPreElement:A.j,HTMLProgressElement:A.j,HTMLQuoteElement:A.j,HTMLScriptElement:A.j,HTMLShadowElement:A.j,HTMLSlotElement:A.j,HTMLSourceElement:A.j,HTMLSpanElement:A.j,HTMLStyleElement:A.j,HTMLTableCaptionElement:A.j,HTMLTableCellElement:A.j,HTMLTableDataCellElement:A.j,HTMLTableHeaderCellElement:A.j,HTMLTableColElement:A.j,HTMLTableElement:A.j,HTMLTableRowElement:A.j,HTMLTableSectionElement:A.j,HTMLTemplateElement:A.j,HTMLTextAreaElement:A.j,HTMLTimeElement:A.j,HTMLTitleElement:A.j,HTMLTrackElement:A.j,HTMLUListElement:A.j,HTMLUnknownElement:A.j,HTMLVideoElement:A.j,HTMLDirectoryElement:A.j,HTMLFontElement:A.j,HTMLFrameElement:A.j,HTMLFrameSetElement:A.j,HTMLMarqueeElement:A.j,HTMLElement:A.j,HTMLAnchorElement:A.cP,HTMLAreaElement:A.cQ,HTMLCanvasElement:A.b0,CanvasRenderingContext2D:A.bD,CDATASection:A.as,CharacterData:A.as,Comment:A.as,ProcessingInstruction:A.as,Text:A.as,DOMException:A.e6,DOMRectReadOnly:A.bI,MathMLElement:A.h,SVGAElement:A.h,SVGAnimateElement:A.h,SVGAnimateMotionElement:A.h,SVGAnimateTransformElement:A.h,SVGAnimationElement:A.h,SVGCircleElement:A.h,SVGClipPathElement:A.h,SVGDefsElement:A.h,SVGDescElement:A.h,SVGDiscardElement:A.h,SVGEllipseElement:A.h,SVGFEBlendElement:A.h,SVGFEColorMatrixElement:A.h,SVGFEComponentTransferElement:A.h,SVGFECompositeElement:A.h,SVGFEConvolveMatrixElement:A.h,SVGFEDiffuseLightingElement:A.h,SVGFEDisplacementMapElement:A.h,SVGFEDistantLightElement:A.h,SVGFEFloodElement:A.h,SVGFEFuncAElement:A.h,SVGFEFuncBElement:A.h,SVGFEFuncGElement:A.h,SVGFEFuncRElement:A.h,SVGFEGaussianBlurElement:A.h,SVGFEImageElement:A.h,SVGFEMergeElement:A.h,SVGFEMergeNodeElement:A.h,SVGFEMorphologyElement:A.h,SVGFEOffsetElement:A.h,SVGFEPointLightElement:A.h,SVGFESpecularLightingElement:A.h,SVGFESpotLightElement:A.h,SVGFETileElement:A.h,SVGFETurbulenceElement:A.h,SVGFilterElement:A.h,SVGForeignObjectElement:A.h,SVGGElement:A.h,SVGGeometryElement:A.h,SVGGraphicsElement:A.h,SVGImageElement:A.h,SVGLineElement:A.h,SVGLinearGradientElement:A.h,SVGMarkerElement:A.h,SVGMaskElement:A.h,SVGMetadataElement:A.h,SVGPathElement:A.h,SVGPatternElement:A.h,SVGPolygonElement:A.h,SVGPolylineElement:A.h,SVGRadialGradientElement:A.h,SVGRectElement:A.h,SVGScriptElement:A.h,SVGSetElement:A.h,SVGStopElement:A.h,SVGStyleElement:A.h,SVGElement:A.h,SVGSVGElement:A.h,SVGSwitchElement:A.h,SVGSymbolElement:A.h,SVGTSpanElement:A.h,SVGTextContentElement:A.h,SVGTextElement:A.h,SVGTextPathElement:A.h,SVGTextPositioningElement:A.h,SVGTitleElement:A.h,SVGUseElement:A.h,SVGViewElement:A.h,SVGGradientElement:A.h,SVGComponentTransferFunctionElement:A.h,SVGFEDropShadowElement:A.h,SVGMPathElement:A.h,Element:A.h,AbortPaymentEvent:A.i,AnimationEvent:A.i,AnimationPlaybackEvent:A.i,ApplicationCacheErrorEvent:A.i,BackgroundFetchClickEvent:A.i,BackgroundFetchEvent:A.i,BackgroundFetchFailEvent:A.i,BackgroundFetchedEvent:A.i,BeforeInstallPromptEvent:A.i,BeforeUnloadEvent:A.i,BlobEvent:A.i,CanMakePaymentEvent:A.i,ClipboardEvent:A.i,CloseEvent:A.i,CustomEvent:A.i,DeviceMotionEvent:A.i,DeviceOrientationEvent:A.i,ErrorEvent:A.i,ExtendableEvent:A.i,ExtendableMessageEvent:A.i,FetchEvent:A.i,FontFaceSetLoadEvent:A.i,ForeignFetchEvent:A.i,GamepadEvent:A.i,HashChangeEvent:A.i,InstallEvent:A.i,MediaEncryptedEvent:A.i,MediaKeyMessageEvent:A.i,MediaQueryListEvent:A.i,MediaStreamEvent:A.i,MediaStreamTrackEvent:A.i,MessageEvent:A.i,MIDIConnectionEvent:A.i,MIDIMessageEvent:A.i,MutationEvent:A.i,NotificationEvent:A.i,PageTransitionEvent:A.i,PaymentRequestEvent:A.i,PaymentRequestUpdateEvent:A.i,PopStateEvent:A.i,PresentationConnectionAvailableEvent:A.i,PresentationConnectionCloseEvent:A.i,ProgressEvent:A.i,PromiseRejectionEvent:A.i,PushEvent:A.i,RTCDataChannelEvent:A.i,RTCDTMFToneChangeEvent:A.i,RTCPeerConnectionIceEvent:A.i,RTCTrackEvent:A.i,SecurityPolicyViolationEvent:A.i,SensorErrorEvent:A.i,SpeechRecognitionError:A.i,SpeechRecognitionEvent:A.i,SpeechSynthesisEvent:A.i,StorageEvent:A.i,SyncEvent:A.i,TrackEvent:A.i,TransitionEvent:A.i,WebKitTransitionEvent:A.i,VRDeviceEvent:A.i,VRDisplayEvent:A.i,VRSessionEvent:A.i,MojoInterfaceRequestEvent:A.i,ResourceProgressEvent:A.i,USBConnectionEvent:A.i,IDBVersionChangeEvent:A.i,AudioProcessingEvent:A.i,OfflineAudioCompletionEvent:A.i,WebGLContextEvent:A.i,Event:A.i,InputEvent:A.i,SubmitEvent:A.i,EventTarget:A.a1,HTMLFormElement:A.d_,MouseEvent:A.af,DragEvent:A.af,PointerEvent:A.af,WheelEvent:A.af,Document:A.a9,DocumentFragment:A.a9,HTMLDocument:A.a9,ShadowRoot:A.a9,XMLDocument:A.a9,Attr:A.a9,DocumentType:A.a9,Node:A.a9,Path2D:A.da,HTMLSelectElement:A.dd,CompositionEvent:A.ar,FocusEvent:A.ar,KeyboardEvent:A.ar,TextEvent:A.ar,TouchEvent:A.ar,UIEvent:A.ar,Window:A.bk,DOMWindow:A.bk,ClientRect:A.ck,DOMRect:A.ck})
hunkHelpers.setOrUpdateLeafTags({CanvasGradient:true,DOMError:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,GeolocationPositionError:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,DOMException:true,DOMRectReadOnly:false,MathMLElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,EventTarget:false,HTMLFormElement:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,Path2D:true,HTMLSelectElement:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,Window:true,DOMWindow:true,ClientRect:true,DOMRect:true})})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=A.kY
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=integrals.dart.js.map
