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
return a?function(c){if(s===null)s=A.mZ(b)
return new s(c,this)}:function(){if(s===null)s=A.mZ(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.mZ(a).prototype
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
a(hunkHelpers,v,w,$)}var A={mo:function mo(){},
j7(a,b,c){if(b.h("Q<0>").b(a))return new A.eS(a,b.h("@<0>").Y(c).h("eS<1,2>"))
return new A.cx(a,b.h("@<0>").Y(c).h("cx<1,2>"))},
qg(a){return new A.ej("Field '"+a+"' has been assigned during initialization.")},
mq(a){return new A.ej("Field '"+a+"' has not been initialized.")},
lY(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
cg(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
mA(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
nV(a,b,c){return A.mA(A.cg(A.cg(c,a),b))},
fk(a,b,c){return a},
bd(a,b,c,d){A.bb(b,"start")
if(c!=null){A.bb(c,"end")
if(b>c)A.N(A.a_(b,0,c,"start",null))}return new A.aK(a,b,c,d.h("aK<0>"))},
jY(a,b,c,d){if(t.gt.b(a))return new A.e_(a,b,c.h("@<0>").Y(d).h("e_<1,2>"))
return new A.cH(a,b,c.h("@<0>").Y(d).h("cH<1,2>"))},
nS(a,b,c){var s="count"
if(t.gt.b(a)){A.iP(b,s,t.S)
A.bb(b,s)
return new A.d7(a,b,c.h("d7<0>"))}A.iP(b,s,t.S)
A.bb(b,s)
return new A.bU(a,b,c.h("bU<0>"))},
an(){return new A.cf("No element")},
qb(){return new A.cf("Too few elements")},
nT(a,b,c){A.hG(a,0,J.M(a)-1,b,c)},
hG(a,b,c,d,e){if(c-b<=32)A.qL(a,b,c,d,e)
else A.qK(a,b,c,d,e)},
qL(a,b,c,d,e){var s,r,q,p,o,n
for(s=b+1,r=J.Y(a);s<=c;++s){q=r.j(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.j(a,p-1),q)
if(typeof o!=="number")return o.bz()
o=o>0}else o=!1
if(!o)break
n=p-1
r.v(a,p,r.j(a,n))
p=n}r.v(a,p,q)}},
qK(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j=B.e.aV(a5-a4+1,6),i=a4+j,h=a5-j,g=B.e.aV(a4+a5,2),f=g-j,e=g+j,d=J.Y(a3),c=d.j(a3,i),b=d.j(a3,f),a=d.j(a3,g),a0=d.j(a3,e),a1=d.j(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.bz()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.bz()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.bz()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.bz()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.bz()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.bz()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.bz()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.bz()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.bz()
if(a2>0){s=a1
a1=a0
a0=s}d.v(a3,i,c)
d.v(a3,g,a)
d.v(a3,h,a1)
d.v(a3,f,d.j(a3,a4))
d.v(a3,e,d.j(a3,a5))
r=a4+1
q=a5-1
if(J.W(a6.$2(b,a0),0)){for(p=r;p<=q;++p){o=d.j(a3,p)
n=a6.$2(o,b)
if(n===0)continue
if(n<0){if(p!==r){d.v(a3,p,d.j(a3,r))
d.v(a3,r,o)}++r}else for(;!0;){n=a6.$2(d.j(a3,q),b)
if(n>0){--q
continue}else{m=q-1
if(n<0){d.v(a3,p,d.j(a3,r))
l=r+1
d.v(a3,r,d.j(a3,q))
d.v(a3,q,o)
q=m
r=l
break}else{d.v(a3,p,d.j(a3,q))
d.v(a3,q,o)
q=m
break}}}}k=!0}else{for(p=r;p<=q;++p){o=d.j(a3,p)
if(a6.$2(o,b)<0){if(p!==r){d.v(a3,p,d.j(a3,r))
d.v(a3,r,o)}++r}else if(a6.$2(o,a0)>0)for(;!0;)if(a6.$2(d.j(a3,q),a0)>0){--q
if(q<p)break
continue}else{m=q-1
if(a6.$2(d.j(a3,q),b)<0){d.v(a3,p,d.j(a3,r))
l=r+1
d.v(a3,r,d.j(a3,q))
d.v(a3,q,o)
r=l}else{d.v(a3,p,d.j(a3,q))
d.v(a3,q,o)}q=m
break}}k=!1}a2=r-1
d.v(a3,a4,d.j(a3,a2))
d.v(a3,a2,b)
a2=q+1
d.v(a3,a5,d.j(a3,a2))
d.v(a3,a2,a0)
A.hG(a3,a4,r-2,a6,a7)
A.hG(a3,q+2,a5,a6,a7)
if(k)return
if(r<i&&q>h){for(;J.W(a6.$2(d.j(a3,r),b),0);)++r
for(;J.W(a6.$2(d.j(a3,q),a0),0);)--q
for(p=r;p<=q;++p){o=d.j(a3,p)
if(a6.$2(o,b)===0){if(p!==r){d.v(a3,p,d.j(a3,r))
d.v(a3,r,o)}++r}else if(a6.$2(o,a0)===0)for(;!0;)if(a6.$2(d.j(a3,q),a0)===0){--q
if(q<p)break
continue}else{m=q-1
if(a6.$2(d.j(a3,q),b)<0){d.v(a3,p,d.j(a3,r))
l=r+1
d.v(a3,r,d.j(a3,q))
d.v(a3,q,o)
r=l}else{d.v(a3,p,d.j(a3,q))
d.v(a3,q,o)}q=m
break}}A.hG(a3,r,q,a6,a7)}else A.hG(a3,r,q,a6,a7)},
ck:function ck(){},
dU:function dU(a,b){this.a=a
this.$ti=b},
cx:function cx(a,b){this.a=a
this.$ti=b},
eS:function eS(a,b){this.a=a
this.$ti=b},
eP:function eP(){},
l3:function l3(a,b){this.a=a
this.b=b},
aS:function aS(a,b){this.a=a
this.$ti=b},
ej:function ej(a){this.a=a},
a9:function a9(a){this.a=a},
m7:function m7(){},
ku:function ku(){},
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
cH:function cH(a,b,c){this.a=a
this.b=b
this.$ti=c},
e_:function e_(a,b,c){this.a=a
this.b=b
this.$ti=c},
cI:function cI(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
I:function I(a,b,c){this.a=a
this.b=b
this.$ti=c},
aq:function aq(a,b,c){this.a=a
this.b=b
this.$ti=c},
cR:function cR(a,b,c){this.a=a
this.b=b
this.$ti=c},
e4:function e4(a,b,c){this.a=a
this.b=b
this.$ti=c},
e5:function e5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bU:function bU(a,b,c){this.a=a
this.b=b
this.$ti=c},
d7:function d7(a,b,c){this.a=a
this.b=b
this.$ti=c},
eC:function eC(a,b,c){this.a=a
this.b=b
this.$ti=c},
e1:function e1(a){this.$ti=a},
e2:function e2(a){this.$ti=a},
al:function al(a,b){this.a=a
this.$ti=b},
cS:function cS(a,b){this.a=a
this.$ti=b},
bg:function bg(){},
bA:function bA(){},
dt:function dt(){},
X:function X(a,b){this.a=a
this.$ti=b},
fc:function fc(){},
q4(a){if(typeof a=="number")return B.h.gW(a)
if(t.f5.b(a))return A.bI(a)
return A.n6(a)},
q5(a){return new A.jj(a)},
pi(a){var s=v.mangledGlobalNames[a]
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
s=J.bC(a)
return s},
bI(a){var s,r=$.nJ
if(r==null)r=$.nJ=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
nK(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
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
qu(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.b.ex(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
kj(a){return A.qs(a)},
qs(a){var s,r,q,p
if(a instanceof A.H)return A.b1(A.ay(a),null)
s=J.bo(a)
if(s===B.b3||s===B.b5||t.cx.b(a)){r=B.a7(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.b1(A.ay(a),null)},
qt(){if(!!self.location)return self.location.href
return null},
nI(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
qv(a){var s,r,q,p=A.a([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.e)(a),++r){q=a[r]
if(!A.lH(q))throw A.d(A.fj(q))
if(q<=65535)B.a.p(p,q)
else if(q<=1114111){B.a.p(p,55296+(B.e.d_(q-65536,10)&1023))
B.a.p(p,56320+(q&1023))}else throw A.d(A.fj(q))}return A.nI(p)},
nL(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!A.lH(q))throw A.d(A.fj(q))
if(q<0)throw A.d(A.fj(q))
if(q>65535)return A.qv(a)}return A.nI(a)},
qw(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
ba(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.e.d_(s,10)|55296)>>>0,s&1023|56320)}}throw A.d(A.a_(a,0,1114111,null,null))},
bB(a){throw A.d(A.fj(a))},
c(a,b){if(a==null)J.M(a)
throw A.d(A.cp(a,b))},
cp(a,b){var s,r="index"
if(!A.lH(b))return new A.bD(!0,b,r,null)
s=A.a0(J.M(a))
if(b<0||b>=s)return A.h7(b,a,r,null,s)
return A.kk(b,r)},
tt(a,b,c){if(a<0||a>c)return A.a_(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.a_(b,a,c,"end",null)
return new A.bD(!0,b,"end",null)},
fj(a){return new A.bD(!0,a,null,null)},
d(a){var s,r
if(a==null)a=new A.hl()
s=new Error()
s.dartException=a
r=A.u0
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
u0(){return J.bC(this.dartException)},
N(a){throw A.d(a)},
e(a){throw A.d(A.at(a))},
bY(a){var s,r,q,p,o,n
a=A.n8(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.a([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.kE(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
kF(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
o_(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
mp(a,b){var s=b==null,r=s?null:b.method
return new A.ha(a,r,s?null:b.receiver)},
bq(a){var s
if(a==null)return new A.hm(a)
if(a instanceof A.e3){s=a.a
return A.cs(a,s==null?t.K.a(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.cs(a,a.dartException)
return A.tg(a)},
cs(a,b){if(t.fz.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
tg(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.e.d_(r,16)&8191)===10)switch(q){case 438:return A.cs(a,A.mp(A.k(s)+" (Error "+q+")",e))
case 445:case 5007:p=A.k(s)
return A.cs(a,new A.er(p+" (Error "+q+")",e))}}if(a instanceof TypeError){o=$.pn()
n=$.po()
m=$.pp()
l=$.pq()
k=$.pt()
j=$.pu()
i=$.ps()
$.pr()
h=$.pw()
g=$.pv()
f=o.br(s)
if(f!=null)return A.cs(a,A.mp(A.aw(s),f))
else{f=n.br(s)
if(f!=null){f.method="call"
return A.cs(a,A.mp(A.aw(s),f))}else{f=m.br(s)
if(f==null){f=l.br(s)
if(f==null){f=k.br(s)
if(f==null){f=j.br(s)
if(f==null){f=i.br(s)
if(f==null){f=l.br(s)
if(f==null){f=h.br(s)
if(f==null){f=g.br(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p){A.aw(s)
return A.cs(a,new A.er(s,f==null?e:f.method))}}}return A.cs(a,new A.hW(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.eE()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return A.cs(a,new A.bD(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.eE()
return a},
cq(a){var s
if(a instanceof A.e3)return a.b
if(a==null)return new A.f1(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new A.f1(a)},
n6(a){if(a==null||typeof a!="object")return J.aH(a)
else return A.bI(a)},
oV(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.v(0,a[s],a[r])}return b},
tG(a,b,c,d,e,f){t.gY.a(a)
switch(A.a0(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(new A.il("Unsupported number of arguments for wrapped closure"))},
dE(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.tG)
a.$identity=s
return s},
q_(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.hL().constructor.prototype):Object.create(new A.d3(null,null).constructor.prototype)
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
p=a0}s.$S=A.pW(a1,h,g)
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
pW(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.pR)}throw A.d("Error in functionType of tearoff")},
pX(a,b,c,d){var s=A.nq
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
nr(a,b,c,d){var s,r
if(c)return A.pZ(a,b,d)
s=b.length
r=A.pX(s,d,a,b)
return r},
pY(a,b,c,d){var s=A.nq,r=A.pS
switch(b?-1:a){case 0:throw A.d(new A.hC("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
pZ(a,b,c){var s,r
if($.no==null)$.no=A.nn("interceptor")
if($.np==null)$.np=A.nn("receiver")
s=b.length
r=A.pY(s,c,a,b)
return r},
mZ(a){return A.q_(a)},
pR(a,b){return A.lu(v.typeUniverse,A.ay(a.a),b)},
nq(a){return a.a},
pS(a){return a.b},
nn(a){var s,r,q,p=new A.d3("receiver","interceptor"),o=J.jP(Object.getOwnPropertyNames(p),t.iD)
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw A.d(A.a8("Field name "+a+" not found.",null))},
ax(a){if(a==null)A.th("boolean expression must not be null")
return a},
th(a){throw A.d(new A.i6(a))},
u_(a){throw A.d(new A.fR(a))},
tz(a){return v.getIsolateTag(a)},
nC(a,b,c){var s=new A.cF(a,b,c.h("cF<0>"))
s.c=a.e
return s},
uN(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
tK(a){var s,r,q,p,o,n=A.aw($.oZ.$1(a)),m=$.lS[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.m1[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.iC($.oO.$2(a,n))
if(q!=null){m=$.lS[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.m1[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.m6(s)
$.lS[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.m1[n]=s
return s}if(p==="-"){o=A.m6(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.pa(a,s)
if(p==="*")throw A.d(A.hV(n))
if(v.leafTags[n]===true){o=A.m6(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.pa(a,s)},
pa(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.n5(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
m6(a){return J.n5(a,!1,null,!!a.$idd)},
tM(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.m6(s)
else return J.n5(s,c,null,null)},
tD(){if(!0===$.n1)return
$.n1=!0
A.tE()},
tE(){var s,r,q,p,o,n,m,l
$.lS=Object.create(null)
$.m1=Object.create(null)
A.tC()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.pc.$1(o)
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
m=A.dD(B.aV,A.dD(B.aW,A.dD(B.a8,A.dD(B.a8,A.dD(B.aX,A.dD(B.aY,A.dD(B.aZ(B.a7),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.oZ=new A.lZ(p)
$.oO=new A.m_(o)
$.pc=new A.m0(n)},
dD(a,b){return a(b)||b},
mn(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw A.d(A.aE("Illegal RegExp pattern ("+String(n)+")",a,null))},
ct(a,b,c){var s
if(typeof b=="string")return a.indexOf(b,c)>=0
else if(b instanceof A.cD){s=B.b.av(a,c)
return b.b.test(s)}else{s=J.mh(b,B.b.av(a,c))
return!s.gag(s)}},
oU(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
n8(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
bp(a,b,c){var s
if(typeof b=="string")return A.tX(a,b,c)
if(b instanceof A.cD){s=b.gi9()
s.lastIndex=0
return a.replace(s,A.oU(c))}return A.tW(a,b,c)},
tW(a,b,c){var s,r,q,p
for(s=J.mh(b,a),s=s.gH(s),r=0,q="";s.n();){p=s.gq()
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
return a.replace(new RegExp(A.n8(b),"g"),A.oU(c))},
tY(a,b,c,d){var s=a.indexOf(b,d)
if(s<0)return a
return A.ph(a,s,s+b.length,c)},
ph(a,b,c,d){return a.substring(0,b)+d+a.substring(c)},
d6:function d6(){},
r:function r(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
eQ:function eQ(a,b){this.a=a
this.$ti=b},
c6:function c6(a,b){this.a=a
this.$ti=b},
jj:function jj(a){this.a=a},
ee:function ee(){},
c7:function c7(a,b){this.a=a
this.$ti=b},
kE:function kE(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
er:function er(a,b){this.a=a
this.b=b},
ha:function ha(a,b,c){this.a=a
this.b=b
this.c=c},
hW:function hW(a){this.a=a},
hm:function hm(a){this.a=a},
e3:function e3(a,b){this.a=a
this.b=b},
f1:function f1(a){this.a=a
this.b=null},
aT:function aT(){},
fM:function fM(){},
fN:function fN(){},
hN:function hN(){},
hL:function hL(){},
d3:function d3(a,b){this.a=a
this.b=b},
hC:function hC(a){this.a=a},
i6:function i6(a){this.a=a},
bi:function bi(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jR:function jR(a){this.a=a},
jT:function jT(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
aV:function aV(a,b){this.a=a
this.$ti=b},
cF:function cF(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
lZ:function lZ(a){this.a=a},
m_:function m_(a){this.a=a},
m0:function m0(a){this.a=a},
cD:function cD(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dy:function dy(a){this.b=a},
i5:function i5(a,b,c){this.a=a
this.b=b
this.c=c},
dv:function dv(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
dr:function dr(a,b){this.a=a
this.c=b},
iu:function iu(a,b,c){this.a=a
this.b=b
this.c=c},
iv:function iv(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
b(a){return A.N(A.mq(a))},
C(a){return A.N(A.qg(a))},
r7(a){var s=new A.l4(a)
return s.b=s},
l4:function l4(a){this.a=a
this.b=null},
mS(a){return a},
qo(a){return new Int8Array(a)},
lB(a,b,c){if(a>>>0!==a||a>=c)throw A.d(A.cp(b,a))},
rK(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.d(A.tt(a,b,c))
return b},
hi:function hi(){},
dh:function dh(){},
ep:function ep(){},
hh:function hh(){},
eq:function eq(){},
cK:function cK(){},
eZ:function eZ(){},
f_:function f_(){},
nP(a,b){var s=b.c
return s==null?b.c=A.mM(a,b.y,!0):s},
nO(a,b){var s=b.c
return s==null?b.c=A.f6(a,"bh",[b.y]):s},
nQ(a){var s=a.x
if(s===6||s===7||s===8)return A.nQ(a.y)
return s===11||s===12},
qC(a){return a.at},
aO(a){return A.iz(v.typeUniverse,a,!1)},
tF(a,b){var s,r,q,p,o
if(a==null)return null
s=b.z
r=a.as
if(r==null)r=a.as=new Map()
q=b.at
p=r.get(q)
if(p!=null)return p
o=A.c2(v.typeUniverse,a.y,s,0)
r.set(q,o)
return o},
c2(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.x
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.y
r=A.c2(a,s,a0,a1)
if(r===s)return b
return A.og(a,r,!0)
case 7:s=b.y
r=A.c2(a,s,a0,a1)
if(r===s)return b
return A.mM(a,r,!0)
case 8:s=b.y
r=A.c2(a,s,a0,a1)
if(r===s)return b
return A.of(a,r,!0)
case 9:q=b.z
p=A.fi(a,q,a0,a1)
if(p===q)return b
return A.f6(a,b.y,p)
case 10:o=b.y
n=A.c2(a,o,a0,a1)
m=b.z
l=A.fi(a,m,a0,a1)
if(n===o&&l===m)return b
return A.mK(a,n,l)
case 11:k=b.y
j=A.c2(a,k,a0,a1)
i=b.z
h=A.td(a,i,a0,a1)
if(j===k&&h===i)return b
return A.oe(a,j,h)
case 12:g=b.z
a1+=g.length
f=A.fi(a,g,a0,a1)
o=b.y
n=A.c2(a,o,a0,a1)
if(f===g&&n===o)return b
return A.mL(a,n,f,!0)
case 13:e=b.y
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw A.d(A.iZ("Attempted to substitute unexpected RTI kind "+c))}},
fi(a,b,c,d){var s,r,q,p,o=b.length,n=A.lx(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.c2(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
te(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.lx(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.c2(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
td(a,b,c,d){var s,r=b.a,q=A.fi(a,r,c,d),p=b.b,o=A.fi(a,p,c,d),n=b.c,m=A.te(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.io()
s.a=q
s.b=o
s.c=m
return s},
a(a,b){a[v.arrayRti]=b
return a},
n_(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.tA(s)
return a.$S()}return null},
p0(a,b){var s
if(A.nQ(b))if(a instanceof A.aT){s=A.n_(a)
if(s!=null)return s}return A.ay(a)},
ay(a){var s
if(a instanceof A.H){s=a.$ti
return s!=null?s:A.mT(a)}if(Array.isArray(a))return A.w(a)
return A.mT(J.bo(a))},
w(a){var s=a[v.arrayRti],r=t.m
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
A(a){var s=a.$ti
return s!=null?s:A.mT(a)},
mT(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.rV(a,s)},
rV(a,b){var s=a instanceof A.aT?a.__proto__.__proto__.constructor:b,r=A.rt(v.typeUniverse,s.name)
b.$ccache=r
return r},
tA(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.iz(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
dF(a){var s=a instanceof A.aT?A.n_(a):null
return A.n0(s==null?A.ay(a):s)},
n0(a){var s,r,q,p=a.w
if(p!=null)return p
s=a.at
r=s.replace(/\*/g,"")
if(r===s)return a.w=new A.f4(a)
q=A.iz(v.typeUniverse,r,!0)
p=q.w
return a.w=p==null?q.w=new A.f4(q):p},
u1(a){return A.n0(A.iz(v.typeUniverse,a,!1))},
rU(a){var s,r,q,p,o=this
if(o===t.K)return A.dB(o,a,A.t0)
if(!A.c3(o))if(!(o===t._))s=!1
else s=!0
else s=!0
if(s)return A.dB(o,a,A.t3)
s=o.x
r=s===6?o.y:o
if(r===t.S)q=A.lH
else if(r===t.W||r===t.p)q=A.t_
else if(r===t.N)q=A.t1
else q=r===t.k4?A.oD:null
if(q!=null)return A.dB(o,a,q)
if(r.x===9){p=r.y
if(r.z.every(A.tJ)){o.r="$i"+p
if(p==="l")return A.dB(o,a,A.rZ)
return A.dB(o,a,A.t2)}}else if(s===7)return A.dB(o,a,A.rS)
return A.dB(o,a,A.rQ)},
dB(a,b,c){a.b=c
return a.b(b)},
rT(a){var s,r=this,q=A.rP
if(!A.c3(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=A.rH
else if(r===t.K)q=A.rG
else{s=A.fm(r)
if(s)q=A.rR}r.a=q
return r.a(a)},
lI(a){var s,r=a.x
if(!A.c3(a))if(!(a===t._))if(!(a===t.im))if(r!==7)s=r===8&&A.lI(a.y)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
rQ(a){var s=this
if(a==null)return A.lI(s)
return A.ai(v.typeUniverse,A.p0(a,s),null,s,null)},
rS(a){if(a==null)return!0
return this.y.b(a)},
t2(a){var s,r=this
if(a==null)return A.lI(r)
s=r.r
if(a instanceof A.H)return!!a[s]
return!!J.bo(a)[s]},
rZ(a){var s,r=this
if(a==null)return A.lI(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.r
if(a instanceof A.H)return!!a[s]
return!!J.bo(a)[s]},
rP(a){var s,r=this
if(a==null){s=A.fm(r)
if(s)return a}else if(r.b(a))return a
A.oB(a,r)},
rR(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.oB(a,s)},
oB(a,b){throw A.d(A.od(A.o7(a,A.p0(a,b),A.b1(b,null))))},
iE(a,b,c,d){var s=null
if(A.ai(v.typeUniverse,a,s,b,s))return a
throw A.d(A.od("The type argument '"+A.b1(a,s)+"' is not a subtype of the type variable bound '"+A.b1(b,s)+"' of type variable '"+c+"' in '"+d+"'."))},
o7(a,b,c){var s=A.fW(a)
return s+": type '"+A.b1(b==null?A.ay(a):b,null)+"' is not a subtype of type '"+c+"'"},
od(a){return new A.f5("TypeError: "+a)},
b0(a,b){return new A.f5("TypeError: "+A.o7(a,null,b))},
t0(a){return a!=null},
rG(a){if(a!=null)return a
throw A.d(A.b0(a,"Object"))},
t3(a){return!0},
rH(a){return a},
oD(a){return!0===a||!1===a},
iB(a){if(!0===a)return!0
if(!1===a)return!1
throw A.d(A.b0(a,"bool"))},
uD(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.b0(a,"bool"))},
uC(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.b0(a,"bool?"))},
co(a){if(typeof a=="number")return a
throw A.d(A.b0(a,"double"))},
uE(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.b0(a,"double"))},
ow(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.b0(a,"double?"))},
lH(a){return typeof a=="number"&&Math.floor(a)===a},
a0(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.d(A.b0(a,"int"))},
uG(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.b0(a,"int"))},
uF(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.b0(a,"int?"))},
t_(a){return typeof a=="number"},
ly(a){if(typeof a=="number")return a
throw A.d(A.b0(a,"num"))},
uI(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.b0(a,"num"))},
uH(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.b0(a,"num?"))},
t1(a){return typeof a=="string"},
aw(a){if(typeof a=="string")return a
throw A.d(A.b0(a,"String"))},
uJ(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.b0(a,"String"))},
iC(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.b0(a,"String?"))},
ta(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.b1(a[q],b)
return s},
oC(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=A.a([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)B.a.p(a5,"T"+(q+p))
for(o=t.iD,n=t._,m="<",l="",p=0;p<s;++p,l=a3){k=a5.length
j=k-1-p
if(!(j>=0))return A.c(a5,j)
m=B.b.J(m+l,a5[j])
i=a6[p]
h=i.x
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+A.b1(i,a5)}m+=">"}else{m=""
r=null}o=a4.y
g=a4.z
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=A.b1(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+A.b1(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+A.b1(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=A.b1(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
b1(a,b){var s,r,q,p,o,n,m,l=a.x
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=A.b1(a.y,b)
return s}if(l===7){r=a.y
s=A.b1(r,b)
q=r.x
return(q===11||q===12?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+A.b1(a.y,b)+">"
if(l===9){p=A.tf(a.y)
o=a.z
return o.length>0?p+("<"+A.ta(o,b)+">"):p}if(l===11)return A.oC(a,b,null)
if(l===12)return A.oC(a.y,b,a.z)
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
if(m==null)return A.iz(a,b,!1)
else if(typeof m=="number"){s=m
r=A.f7(a,5,"#")
q=A.lx(s)
for(p=0;p<s;++p)q[p]=r
o=A.f6(a,b,q)
n[b]=o
return o}else return m},
rr(a,b){return A.ou(a.tR,b)},
rq(a,b){return A.ou(a.eT,b)},
iz(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.ob(A.o9(a,null,b,c))
r.set(b,s)
return s},
lu(a,b,c){var s,r,q=b.Q
if(q==null)q=b.Q=new Map()
s=q.get(c)
if(s!=null)return s
r=A.ob(A.o9(a,b,c,!0))
q.set(c,r)
return r},
rs(a,b,c){var s,r,q,p=b.as
if(p==null)p=b.as=new Map()
s=c.at
r=p.get(s)
if(r!=null)return r
q=A.mK(a,b,c.x===10?c.z:[c])
p.set(s,q)
return q},
cn(a,b){b.a=A.rT
b.b=A.rU
return b},
f7(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.bw(null,null)
s.x=b
s.at=c
r=A.cn(a,s)
a.eC.set(c,r)
return r},
og(a,b,c){var s,r=b.at+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.ro(a,b,r,c)
a.eC.set(r,s)
return s},
ro(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.c3(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new A.bw(null,null)
q.x=6
q.y=b
q.at=c
return A.cn(a,q)},
mM(a,b,c){var s,r=b.at+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.rn(a,b,r,c)
a.eC.set(r,s)
return s},
rn(a,b,c,d){var s,r,q,p
if(d){s=b.x
if(!A.c3(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&A.fm(b.y)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.im)return t.P
else if(s===6){q=b.y
if(q.x===8&&A.fm(q.y))return q
else return A.nP(a,b)}}p=new A.bw(null,null)
p.x=7
p.y=b
p.at=c
return A.cn(a,p)},
of(a,b,c){var s,r=b.at+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.rl(a,b,r,c)
a.eC.set(r,s)
return s},
rl(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.c3(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return A.f6(a,"bh",[b])
else if(b===t.P||b===t.T)return t.gK}q=new A.bw(null,null)
q.x=8
q.y=b
q.at=c
return A.cn(a,q)},
rp(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.bw(null,null)
s.x=13
s.y=b
s.at=q
r=A.cn(a,s)
a.eC.set(q,r)
return r},
iy(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].at
return s},
rk(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].at}return s},
f6(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.iy(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.bw(null,null)
r.x=9
r.y=b
r.z=c
if(c.length>0)r.c=c[0]
r.at=p
q=A.cn(a,r)
a.eC.set(p,q)
return q},
mK(a,b,c){var s,r,q,p,o,n
if(b.x===10){s=b.y
r=b.z.concat(c)}else{r=c
s=b}q=s.at+(";<"+A.iy(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.bw(null,null)
o.x=10
o.y=s
o.z=r
o.at=q
n=A.cn(a,o)
a.eC.set(q,n)
return n},
oe(a,b,c){var s,r,q,p,o,n=b.at,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.iy(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.iy(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.rk(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.bw(null,null)
p.x=11
p.y=b
p.z=c
p.at=r
o=A.cn(a,p)
a.eC.set(r,o)
return o},
mL(a,b,c,d){var s,r=b.at+("<"+A.iy(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.rm(a,b,c,r,d)
a.eC.set(r,s)
return s},
rm(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.lx(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.x===1){r[p]=o;++q}}if(q>0){n=A.c2(a,b,r,0)
m=A.fi(a,c,r,0)
return A.mL(a,n,m,c!==m)}}l=new A.bw(null,null)
l.x=12
l.y=b
l.z=c
l.at=d
return A.cn(a,l)},
o9(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
ob(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=A.rf(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=A.oa(a,r,h,g,!1)
else if(q===46)r=A.oa(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(A.cl(a.u,a.e,g.pop()))
break
case 94:g.push(A.rp(a.u,g.pop()))
break
case 35:g.push(A.f7(a.u,5,"#"))
break
case 64:g.push(A.f7(a.u,2,"@"))
break
case 126:g.push(A.f7(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
A.mJ(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(A.f6(p,n,o))
else{m=A.cl(p,a.e,n)
switch(m.x){case 11:g.push(A.mL(p,m,o,a.n))
break
default:g.push(A.mK(p,m,o))
break}}break
case 38:A.rg(a,g)
break
case 42:p=a.u
g.push(A.og(p,A.cl(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(A.mM(p,A.cl(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(A.of(p,A.cl(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new A.io()
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
A.mJ(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(A.oe(p,A.cl(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
A.mJ(a.u,a.e,o)
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
return A.cl(a.u,a.e,i)},
rf(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
oa(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.x===10)o=o.y
n=A.ru(s,o.y)[p]
if(n==null)A.N('No "'+p+'" in "'+A.qC(o)+'"')
d.push(A.lu(s,o,n))}else d.push(p)
return m},
rg(a,b){var s=b.pop()
if(0===s){b.push(A.f7(a.u,1,"0&"))
return}if(1===s){b.push(A.f7(a.u,4,"1&"))
return}throw A.d(A.iZ("Unexpected extended operation "+A.k(s)))},
cl(a,b,c){if(typeof c=="string")return A.f6(a,c,a.sEA)
else if(typeof c=="number")return A.rh(a,b,c)
else return c},
mJ(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.cl(a,b,c[s])},
ri(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.cl(a,b,c[s])},
rh(a,b,c){var s,r,q=b.x
if(q===10){if(c===0)return b.y
s=b.z
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.y
q=b.x}else if(c===0)return b
if(q!==9)throw A.d(A.iZ("Indexed base must be an interface type"))
s=b.z
if(c<=s.length)return s[c-1]
throw A.d(A.iZ("Bad index "+c+" for "+b.l(0)))},
ai(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!A.c3(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.x
if(r===4)return!0
if(A.c3(b))return!1
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
if(p===6){s=A.nP(a,d)
return A.ai(a,b,c,s,e)}if(r===8){if(!A.ai(a,b.y,c,d,e))return!1
return A.ai(a,A.nO(a,b),c,d,e)}if(r===7){s=A.ai(a,t.P,c,d,e)
return s&&A.ai(a,b.y,c,d,e)}if(p===8){if(A.ai(a,b,c,d.y,e))return!0
return A.ai(a,b,c,A.nO(a,d),e)}if(p===7){s=A.ai(a,b,c,t.P,e)
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
if(!A.ai(a,k,c,j,e)||!A.ai(a,j,e,k,c))return!1}return A.oE(a,b.y,c,d.y,e)}if(p===11){if(b===t.dY)return!0
if(s)return!1
return A.oE(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return A.rY(a,b,c,d,e)}return!1},
oE(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
for(o=0;o<q;++o)p[o]=A.lu(a,b,r[o])
return A.ov(a,p,null,c,d.z,e)}n=b.z
m=d.z
return A.ov(a,n,null,c,m,e)},
ov(a,b,c,d,e,f){var s,r,q,p=b.length
for(s=0;s<p;++s){r=b[s]
q=e[s]
if(!A.ai(a,r,d,q,f))return!1}return!0},
fm(a){var s,r=a.x
if(!(a===t.P||a===t.T))if(!A.c3(a))if(r!==7)if(!(r===6&&A.fm(a.y)))s=r===8&&A.fm(a.y)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
tJ(a){var s
if(!A.c3(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
c3(a){var s=a.x
return s===2||s===3||s===4||s===5||a===t.iD},
ou(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
lx(a){return a>0?new Array(a):v.typeUniverse.sEA},
bw:function bw(a,b){var _=this
_.a=a
_.b=b
_.w=_.r=_.c=null
_.x=0
_.at=_.as=_.Q=_.z=_.y=null},
io:function io(){this.c=this.b=this.a=null},
f4:function f4(a){this.a=a},
ik:function ik(){},
f5:function f5(a){this.a=a},
r3(){var s,r,q={}
if(self.scheduleImmediate!=null)return A.ti()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(A.dE(new A.l0(q),1)).observe(s,{childList:true})
return new A.l_(q,s,r)}else if(self.setImmediate!=null)return A.tj()
return A.tk()},
r4(a){self.scheduleImmediate(A.dE(new A.l1(t.M.a(a)),0))},
r5(a){self.setImmediate(A.dE(new A.l2(t.M.a(a)),0))},
r6(a){t.M.a(a)
A.rj(0,a)},
rj(a,b){var s=new A.ls()
s.lT(a,b)
return s},
cY(a){return new A.i7(new A.as($.aa,a.h("as<0>")),a.h("i7<0>"))},
cX(a,b){a.$2(0,null)
b.b=!0
return b.a},
c1(a,b){A.rI(a,b)},
cW(a,b){b.fq(0,a)},
cV(a,b){b.iV(A.bq(a),A.cq(a))},
rI(a,b){var s,r,q=new A.lz(b),p=new A.lA(b)
if(a instanceof A.as)a.iq(q,p,t.z)
else{s=t.z
if(t.g7.b(a))a.h1(q,p,s)
else{r=new A.as($.aa,t.j_)
r.a=8
r.c=a
r.iq(q,p,s)}}},
d_(a){var s=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(r){e=r
d=c}}}(a,1)
return $.aa.jK(new A.lM(s),t.H,t.S,t.z)},
rc(a){return new A.dx(a,1)},
mG(){return B.e6},
mH(a){return new A.dx(a,3)},
mW(a,b){return new A.f3(a,b.h("f3<0>"))},
j_(a,b){var s=A.fk(a,"error",t.K)
return new A.dO(s,b==null?A.pP(a):b)},
pP(a){var s
if(t.fz.b(a)){s=a.gdC()
if(s!=null)return s}return B.b0},
lb(a,b){var s,r,q
for(s=t.j_;r=a.a,(r&4)!==0;)a=s.a(a.c)
if((r&24)!==0){q=b.dI()
b.f_(a)
A.dw(b,q)}else{q=t.Q.a(b.c)
b.a=b.a&1|4
b.c=a
a.ig(q)}},
dw(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=c.a=a
for(s=t.u,r=t.Q,q=t.g7;!0;){p={}
o=b.a
n=(o&16)===0
m=!n
if(a0==null){if(m&&(o&1)===0){l=s.a(b.c)
A.lJ(l.a,l.b)}return}p.a=a0
k=a0.a
for(b=a0;k!=null;b=k,k=j){b.a=null
A.dw(c.a,b)
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
A.lJ(i.a,i.b)
return}f=$.aa
if(f!==g)$.aa=g
else f=null
b=b.c
if((b&15)===8)new A.lj(p,c,m).$0()
else if(n){if((b&1)!==0)new A.li(p,i).$0()}else if((b&2)!==0)new A.lh(c,p).$0()
if(f!=null)$.aa=f
b=p.c
if(q.b(b)){o=p.a.$ti
o=o.h("bh<2>").b(b)||!o.z[1].b(b)}else o=!1
if(o){q.a(b)
e=p.a.b
if((b.a&24)!==0){d=r.a(e.c)
e.c=null
a0=e.dJ(d)
e.a=b.a&30|e.a&1
e.c=b.c
c.a=b
continue}else A.lb(b,e)
return}}e=p.a.b
d=r.a(e.c)
e.c=null
a0=e.dJ(d)
b=p.b
o=p.c
if(!b){e.$ti.c.a(o)
e.a=8
e.c=o}else{s.a(o)
e.a=e.a&1|16
e.c=o}c.a=e
b=e}},
t8(a,b){var s
if(t.eK.b(a))return b.jK(a,t.z,t.K,t.k)
s=t.mq
if(s.b(a))return s.a(a)
throw A.d(A.mi(a,"onError",u.w))},
t7(){var s,r
for(s=$.dC;s!=null;s=$.dC){$.fh=null
r=s.b
$.dC=r
if(r==null)$.fg=null
s.a.$0()}},
tc(){$.mU=!0
try{A.t7()}finally{$.fh=null
$.mU=!1
if($.dC!=null)$.nc().$1(A.oP())}},
oJ(a){var s=new A.i8(a),r=$.fg
if(r==null){$.dC=$.fg=s
if(!$.mU)$.nc().$1(A.oP())}else $.fg=r.b=s},
tb(a){var s,r,q,p=$.dC
if(p==null){A.oJ(a)
$.fh=$.fg
return}s=new A.i8(a)
r=$.fh
if(r==null){s.b=p
$.dC=$.fh=s}else{q=r.b
s.b=q
$.fh=r.b=s
if(q==null)$.fg=s}},
tU(a){var s,r=null,q=$.aa
if(B.l===q){A.cZ(r,r,B.l,a)
return}s=!1
if(s){A.cZ(r,r,q,t.M.a(a))
return}A.cZ(r,r,q,t.M.a(q.iN(a)))},
uh(a,b){A.fk(a,"stream",t.K)
return new A.it(b.h("it<0>"))},
lJ(a,b){A.tb(new A.lK(a,b))},
oG(a,b,c,d,e){var s,r=$.aa
if(r===c)return d.$0()
$.aa=c
s=r
try{r=d.$0()
return r}finally{$.aa=s}},
oH(a,b,c,d,e,f,g){var s,r=$.aa
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
cZ(a,b,c,d){t.M.a(d)
if(B.l!==c)d=c.iN(d)
A.oJ(d)},
l0:function l0(a){this.a=a},
l_:function l_(a,b,c){this.a=a
this.b=b
this.c=c},
l1:function l1(a){this.a=a},
l2:function l2(a){this.a=a},
ls:function ls(){},
lt:function lt(a,b){this.a=a
this.b=b},
i7:function i7(a,b){this.a=a
this.b=!1
this.$ti=b},
lz:function lz(a){this.a=a},
lA:function lA(a){this.a=a},
lM:function lM(a){this.a=a},
dx:function dx(a,b){this.a=a
this.b=b},
cm:function cm(a,b){var _=this
_.a=a
_.d=_.c=_.b=null
_.$ti=b},
f3:function f3(a,b){this.a=a
this.$ti=b},
dO:function dO(a,b){this.a=a
this.b=b},
i9:function i9(){},
f2:function f2(a,b){this.a=a
this.$ti=b},
cT:function cT(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
as:function as(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
l8:function l8(a,b){this.a=a
this.b=b},
lg:function lg(a,b){this.a=a
this.b=b},
lc:function lc(a){this.a=a},
ld:function ld(a){this.a=a},
le:function le(a,b,c){this.a=a
this.b=b
this.c=c},
la:function la(a,b){this.a=a
this.b=b},
lf:function lf(a,b){this.a=a
this.b=b},
l9:function l9(a,b,c){this.a=a
this.b=b
this.c=c},
lj:function lj(a,b,c){this.a=a
this.b=b
this.c=c},
lk:function lk(a){this.a=a},
li:function li(a,b){this.a=a
this.b=b},
lh:function lh(a,b){this.a=a
this.b=b},
i8:function i8(a){this.a=a
this.b=null},
eF:function eF(){},
kw:function kw(a,b){this.a=a
this.b=b},
kx:function kx(a,b){this.a=a
this.b=b},
eG:function eG(){},
hM:function hM(){},
it:function it(a){this.$ti=a},
fb:function fb(){},
lK:function lK(a,b){this.a=a
this.b=b},
is:function is(){},
lq:function lq(a,b){this.a=a
this.b=b},
lr:function lr(a,b,c){this.a=a
this.b=b
this.c=c},
ab(a,b,c,d){var s
if(b==null){if(a==null)return new A.bi(c.h("@<0>").Y(d).h("bi<1,2>"))
s=A.oR()}else{if(a==null)a=A.tn()
s=A.oR()}return A.rd(s,a,b,c,d)},
y(a,b,c){return b.h("@<0>").Y(c).h("jS<1,2>").a(A.oV(a,new A.bi(b.h("@<0>").Y(c).h("bi<1,2>"))))},
aW(a,b){return new A.bi(a.h("@<0>").Y(b).h("bi<1,2>"))},
rd(a,b,c,d,e){var s=c!=null?c:new A.ln(d)
return new A.eW(a,b,s,d.h("@<0>").Y(e).h("eW<1,2>"))},
ms(a){return new A.c_(a.h("c_<0>"))},
nD(a){return new A.c_(a.h("c_<0>"))},
mI(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
re(a,b,c){var s=new A.cU(a,b,c.h("cU<0>"))
s.c=a.e
return s},
rN(a,b){return J.W(a,b)},
rO(a){return J.aH(a)},
qa(a,b,c){var s,r
if(A.mV(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.a([],t.s)
B.a.p($.bf,a)
try{A.t4(a,s)}finally{if(0>=$.bf.length)return A.c($.bf,-1)
$.bf.pop()}r=A.ky(b,t.e7.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
jN(a,b,c){var s,r
if(A.mV(a))return b+"..."+c
s=new A.a2(b)
B.a.p($.bf,a)
try{r=s
r.a=A.ky(r.a,a,", ")}finally{if(0>=$.bf.length)return A.c($.bf,-1)
$.bf.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
mV(a){var s,r
for(s=$.bf.length,r=0;r<s;++r)if(a===$.bf[r])return!0
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
hc(a,b,c){var s=A.ab(null,null,b,c)
a.bf(0,new A.jU(s,b,c))
return s},
mt(a,b){var s,r,q,p=A.ms(b)
for(s=J.F(a),r=s.$ti.c;s.n();){q=s.d
p.p(0,b.a(q==null?r.a(q):q))}return p},
qi(a,b){var s=t.bP
return J.nh(s.a(a),s.a(b))},
mv(a){var s,r={}
if(A.mV(a))return"{...}"
s=new A.a2("")
try{B.a.p($.bf,a)
s.a+="{"
r.a=!0
a.bf(0,new A.jW(r,s))
s.a+="}"}finally{if(0>=$.bf.length)return A.c($.bf,-1)
$.bf.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
mu(a){return new A.el(A.bH(A.qj(null),null,!1,a.h("0?")),a.h("el<0>"))},
qj(a){return 8},
eW:function eW(a,b,c,d){var _=this
_.w=a
_.x=b
_.y=c
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=d},
ln:function ln(a){this.a=a},
c_:function c_(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ip:function ip(a){this.a=a
this.c=this.b=null},
cU:function cU(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
eg:function eg(){},
jU:function jU(a,b,c){this.a=a
this.b=b
this.c=c},
ek:function ek(){},
v:function v(){},
em:function em(){},
jW:function jW(a,b){this.a=a
this.b=b},
cG:function cG(){},
jX:function jX(a){this.a=a},
el:function el(a,b){var _=this
_.a=a
_.d=_.c=_.b=0
_.$ti=b},
eY:function eY(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.$ti=e},
aZ:function aZ(){},
eA:function eA(){},
dz:function dz(){},
iA:function iA(){},
f8:function f8(a,b){this.a=a
this.$ti=b},
eX:function eX(){},
f0:function f0(){},
fd:function fd(){},
fe:function fe(){},
qZ(a,b,c,d){var s,r
if(b instanceof Uint8Array){s=b
d=s.length
if(d-c<15)return null
r=A.r_(a,s,c,d)
if(r!=null&&a)if(r.indexOf("\ufffd")>=0)return null
return r}return null},
r_(a,b,c,d){var s=a?$.py():$.px()
if(s==null)return null
if(0===c&&d===b.length)return A.o2(s,b)
return A.o2(s,b.subarray(c,A.aF(c,d,b.length)))},
o2(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
nm(a,b,c,d,e,f){if(B.e.a6(f,4)!==0)throw A.d(A.aE("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.d(A.aE("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.d(A.aE("Invalid base64 padding, more than two '=' characters",a,b))},
rF(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
rE(a,b,c){var s,r,q,p=c-b,o=new Uint8Array(p)
for(s=J.Y(a),r=0;r<p;++r){q=s.j(a,b+r)
if((q&4294967040)>>>0!==0)q=255
if(!(r<p))return A.c(o,r)
o[r]=q}return o},
kL:function kL(){},
kK:function kK(){},
fB:function fB(){},
ix:function ix(){},
fC:function fC(a,b){this.a=a
this.b=b},
fE:function fE(){},
fF:function fF(){},
cy:function cy(){},
cz:function cz(){},
fV:function fV(){},
i_:function i_(){},
i0:function i0(a){this.a=a},
lw:function lw(a){this.a=a
this.b=16
this.c=0},
cr(a,b){var s=A.nK(a,b)
if(s!=null)return s
throw A.d(A.aE(a,null,null))},
bO(a){var s=A.qu(a)
if(s!=null)return s
throw A.d(A.aE("Invalid double",a,null))},
q2(a){if(a instanceof A.aT)return a.l(0)
return"Instance of '"+A.kj(a)+"'"},
q3(a,b){a=A.d(a)
if(a==null)a=t.K.a(a)
a.stack=b.l(0)
throw a
throw A.d("unreachable")},
bH(a,b,c,d){var s,r=c?J.mm(a,d):J.ny(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
hd(a,b,c){var s,r=A.a([],c.h("z<0>"))
for(s=J.F(a);s.n();)B.a.p(r,c.a(s.gq()))
if(b)return r
return J.jP(r,c)},
h(a,b,c){var s
if(b)return A.nE(a,c)
s=J.jP(A.nE(a,c),c)
return s},
nE(a,b){var s,r
if(Array.isArray(a))return A.a(a.slice(0),b.h("z<0>"))
s=A.a([],b.h("z<0>"))
for(r=J.F(a);r.n();)B.a.p(s,r.gq())
return s},
nF(a,b){var s=A.hd(a,!1,b)
s.fixed$length=Array
s.immutable$list=Array
return s},
ad(a,b,c){var s,r
if(Array.isArray(a)){s=a
r=s.length
c=A.aF(b,c,r)
return A.nL(b>0||c<r?s.slice(b,c):s)}if(t.hD.b(a))return A.qw(a,b,A.aF(b,c,a.length))
return A.qP(a,b,c)},
qO(a){return A.ba(a)},
qP(a,b,c){var s,r,q,p,o=null
if(b<0)throw A.d(A.a_(b,0,J.M(a),o,o))
s=c==null
if(!s&&c<b)throw A.d(A.a_(c,b,J.M(a),o,o))
r=J.F(a)
for(q=0;q<b;++q)if(!r.n())throw A.d(A.a_(b,0,q,o,o))
p=[]
if(s)for(;r.n();)p.push(r.gq())
else for(q=b;q<c;++q){if(!r.n())throw A.d(A.a_(c,b,q,o,o))
p.push(r.gq())}return A.nL(p)},
ap(a){return new A.cD(a,A.mn(a,!1,!0,!1,!1,!1))},
ky(a,b,c){var s=J.F(b)
if(!s.n())return a
if(c.length===0){do a+=A.k(s.gq())
while(s.n())}else{a+=A.k(s.gq())
for(;s.n();)a=a+c+A.k(s.gq())}return a},
mD(){var s=A.qt()
if(s!=null)return A.mE(s)
throw A.d(A.T("'Uri.base' is not supported"))},
fW(a){if(typeof a=="number"||A.oD(a)||a==null)return J.bC(a)
if(typeof a=="string")return JSON.stringify(a)
return A.q2(a)},
iZ(a){return new A.dN(a)},
a8(a,b){return new A.bD(!1,null,b,a)},
mi(a,b,c){return new A.bD(!0,a,b,c)},
iP(a,b,c){return a},
aA(a){var s=null
return new A.dm(s,s,!1,s,s,a)},
kk(a,b){return new A.dm(null,null,!0,a,b,"Value not in range")},
a_(a,b,c,d,e){return new A.dm(b,c,!0,a,d,"Invalid value")},
nN(a,b,c,d){if(a<b||a>c)throw A.d(A.a_(a,b,c,d,null))
return a},
aF(a,b,c){if(0>a||a>c)throw A.d(A.a_(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.d(A.a_(b,a,c,"end",null))
return b}return c},
bb(a,b){if(a<0)throw A.d(A.a_(a,0,null,b,null))
return a},
h7(a,b,c,d,e){var s=A.a0(e==null?J.M(b):e)
return new A.h6(s,!0,a,c,"Index out of range")},
T(a){return new A.hX(a)},
hV(a){return new A.eN(a)},
av(a){return new A.cf(a)},
at(a){return new A.fP(a)},
aE(a,b,c){return new A.e6(a,b,c)},
cL(a,b,c,d){var s,r
if(B.q===c)return A.nV(J.aH(a),J.aH(b),$.me())
if(B.q===d){s=J.aH(a)
b=J.aH(b)
c=J.aH(c)
return A.mA(A.cg(A.cg(A.cg($.me(),s),b),c))}s=J.aH(a)
b=J.aH(b)
c=J.aH(c)
d=J.aH(d)
r=$.me()
return A.mA(A.cg(A.cg(A.cg(A.cg(r,s),b),c),d))},
n7(a){A.tP(a)},
oy(a,b){return 65536+((a&1023)<<10)+(b&1023)},
mE(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((B.b.E(a5,4)^58)*3|B.b.E(a5,0)^100|B.b.E(a5,1)^97|B.b.E(a5,2)^116|B.b.E(a5,3)^97)>>>0
if(s===0)return A.o0(a4<a4?B.b.B(a5,0,a4):a5,5,a3).gjX()
else if(s===32)return A.o0(B.b.B(a5,5,a4),0,a3).gjX()}r=A.bH(8,0,!1,t.S)
B.a.v(r,0,0)
B.a.v(r,1,-1)
B.a.v(r,2,-1)
B.a.v(r,7,-1)
B.a.v(r,3,0)
B.a.v(r,4,0)
B.a.v(r,5,a4)
B.a.v(r,6,a4)
if(A.oI(a5,0,a4,0,r)>=14)B.a.v(r,7,a4)
q=r[1]
if(q>=0)if(A.oI(a5,0,q,20,r)===20)r[7]=q
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
s=2}a5=g+B.b.B(a5,n,a4)
q-=0
i=s-0
m+=i
l+=i
a4=a5.length
p=7
o=7
n=7}else if(n===m){++l
f=m+1
a5=B.b.ck(a5,n,m,"/");++a4
m=f}j="file"}else if(B.b.aa(a5,"http",0)){if(i&&o+3===n&&B.b.aa(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.b.ck(a5,o,n,"")
a4-=3
n=e}j="http"}else j=a3
else if(q===5&&B.b.aa(a5,"https",0)){if(i&&o+4===n&&B.b.aa(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.b.ck(a5,o,n,"")
a4-=3
n=e}j="https"}else j=a3
k=!0}}}}else j=a3
if(k){if(a4<a5.length){a5=B.b.B(a5,0,a4)
q-=0
p-=0
o-=0
n-=0
m-=0
l-=0}return new A.bn(a5,q,p,o,n,m,l,j)}if(j==null)if(q>0)j=A.rA(a5,0,q)
else{if(q===0)A.dA(a5,0,"Invalid empty scheme")
j=""}if(p>0){d=q+3
c=d<p?A.op(a5,d,p-1):""
b=A.om(a5,p,o,!1)
i=o+1
if(i<n){a=A.nK(B.b.B(a5,i,n),a3)
a0=A.mO(a==null?A.N(A.aE("Invalid port",a5,i)):a,j)}else a0=a3}else{a0=a3
b=a0
c=""}a1=A.on(a5,n,m,a3,j,b!=null)
a2=m<l?A.oo(a5,m+1,l,a3):a3
return A.lv(j,c,b,a0,a1,a2,l<a4?A.ol(a5,l+1,a4):a3)},
qY(a){A.aw(a)
return A.mR(a,0,a.length,B.A,!1)},
qX(a,b,c){var s,r,q,p,o,n,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new A.kH(a),j=new Uint8Array(4)
for(s=b,r=s,q=0;s<c;++s){p=B.b.I(a,s)
if(p!==46){if((p^48)>9)k.$2("invalid character",s)}else{if(q===3)k.$2(m,s)
o=A.cr(B.b.B(a,r,s),null)
if(o>255)k.$2(l,r)
n=q+1
if(!(q<4))return A.c(j,q)
j[q]=o
r=s+1
q=n}}if(q!==3)k.$2(m,c)
o=A.cr(B.b.B(a,r,c),null)
if(o>255)k.$2(l,r)
if(!(q<4))return A.c(j,q)
j[q]=o
return j},
o1(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c=new A.kI(a),b=new A.kJ(c,a)
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
l=B.a.gu(s)
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
h+=2}else{e=B.e.d_(g,8)
if(!(h>=0&&h<16))return A.c(j,h)
j[h]=e
e=h+1
if(!(e<16))return A.c(j,e)
j[e]=g&255
h+=2}}return j},
lv(a,b,c,d,e,f,g){return new A.f9(a,b,c,d,e,f,g)},
oi(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
dA(a,b,c){throw A.d(A.aE(c,a,b))},
rw(a,b){var s,r,q,p,o
for(s=a.length,r=0;r<s;++r){q=a[r]
p=J.Y(q)
o=p.gm(q)
if(0>o)A.N(A.a_(0,0,p.gm(q),null,null))
if(A.ct(q,"/",0)){s=A.T("Illegal path character "+A.k(q))
throw A.d(s)}}},
oh(a,b,c){var s,r,q,p,o
for(s=A.bd(a,c,null,A.w(a).c),r=s.$ti,s=new A.L(s,s.gm(s),r.h("L<D.E>")),r=r.h("D.E");s.n();){q=s.d
if(q==null)q=r.a(q)
p=A.ap('["*/:<>?\\\\|]')
o=q.length
if(A.ct(q,p,0)){s=A.T("Illegal character in path: "+q)
throw A.d(s)}}},
rx(a,b){var s
if(!(65<=a&&a<=90))s=97<=a&&a<=122
else s=!0
if(s)return
s=A.T("Illegal drive letter "+A.qO(a))
throw A.d(s)},
mO(a,b){if(a!=null&&a===A.oi(b))return null
return a},
om(a,b,c,d){var s,r,q,p,o,n
if(a==null)return null
if(b===c)return""
if(B.b.I(a,b)===91){s=c-1
if(B.b.I(a,s)!==93)A.dA(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=A.ry(a,r,s)
if(q<s){p=q+1
o=A.os(a,B.b.aa(a,"25",p)?q+3:p,s,"%25")}else o=""
A.o1(a,r,q)
return B.b.B(a,b,q).toLowerCase()+o+"]"}for(n=b;n<c;++n)if(B.b.I(a,n)===58){q=B.b.aR(a,"%",b)
q=q>=b&&q<c?q:c
if(q<c){p=q+1
o=A.os(a,B.b.aa(a,"25",p)?q+3:p,c,"%25")}else o=""
A.o1(a,b,q)
return"["+B.b.B(a,b,q)+o+"]"}return A.rC(a,b,c)},
ry(a,b,c){var s=B.b.aR(a,"%",b)
return s>=b&&s<c?s:c},
os(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new A.a2(d):null
for(s=b,r=s,q=!0;s<c;){p=B.b.I(a,s)
if(p===37){o=A.mP(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new A.a2("")
m=i.a+=B.b.B(a,r,s)
if(n)o=B.b.B(a,s,s+3)
else if(o==="%")A.dA(a,s,"ZoneID should not contain % anymore")
i.a=m+o
s+=3
r=s
q=!0}else{if(p<127){n=p>>>4
if(!(n<8))return A.c(B.L,n)
n=(B.L[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(i==null)i=new A.a2("")
if(r<s){i.a+=B.b.B(a,r,s)
r=s}q=!1}++s}else{if((p&64512)===55296&&s+1<c){l=B.b.I(a,s+1)
if((l&64512)===56320){p=(p&1023)<<10|l&1023|65536
k=2}else k=1}else k=1
j=B.b.B(a,r,s)
if(i==null){i=new A.a2("")
n=i}else n=i
n.a+=j
n.a+=A.mN(p)
s+=k
r=s}}}if(i==null)return B.b.B(a,b,c)
if(r<c)i.a+=B.b.B(a,r,c)
n=i.a
return n.charCodeAt(0)==0?n:n},
rC(a,b,c){var s,r,q,p,o,n,m,l,k,j,i
for(s=b,r=s,q=null,p=!0;s<c;){o=B.b.I(a,s)
if(o===37){n=A.mP(a,s,!0)
m=n==null
if(m&&p){s+=3
continue}if(q==null)q=new A.a2("")
l=B.b.B(a,r,s)
k=q.a+=!p?l.toLowerCase():l
if(m){n=B.b.B(a,s,s+3)
j=3}else if(n==="%"){n="%25"
j=1}else j=3
q.a=k+n
s+=j
r=s
p=!0}else{if(o<127){m=o>>>4
if(!(m<8))return A.c(B.ai,m)
m=(B.ai[m]&1<<(o&15))!==0}else m=!1
if(m){if(p&&65<=o&&90>=o){if(q==null)q=new A.a2("")
if(r<s){q.a+=B.b.B(a,r,s)
r=s}p=!1}++s}else{if(o<=93){m=o>>>4
if(!(m<8))return A.c(B.H,m)
m=(B.H[m]&1<<(o&15))!==0}else m=!1
if(m)A.dA(a,s,"Invalid character")
else{if((o&64512)===55296&&s+1<c){i=B.b.I(a,s+1)
if((i&64512)===56320){o=(o&1023)<<10|i&1023|65536
j=2}else j=1}else j=1
l=B.b.B(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new A.a2("")
m=q}else m=q
m.a+=l
m.a+=A.mN(o)
s+=j
r=s}}}}if(q==null)return B.b.B(a,b,c)
if(r<c){l=B.b.B(a,r,c)
q.a+=!p?l.toLowerCase():l}m=q.a
return m.charCodeAt(0)==0?m:m},
rA(a,b,c){var s,r,q,p
if(b===c)return""
if(!A.ok(B.b.E(a,b)))A.dA(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=B.b.E(a,s)
if(q<128){p=q>>>4
if(!(p<8))return A.c(B.K,p)
p=(B.K[p]&1<<(q&15))!==0}else p=!1
if(!p)A.dA(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=B.b.B(a,b,c)
return A.rv(r?a.toLowerCase():a)},
rv(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
op(a,b,c){if(a==null)return""
return A.fa(a,b,c,B.bn,!1,!1)},
on(a,b,c,d,e,f){var s=e==="file",r=s||f,q=A.fa(a,b,c,B.aj,!0,!0)
if(q.length===0){if(s)return"/"}else if(r&&!B.b.Z(q,"/"))q="/"+q
return A.rB(q,e,f)},
rB(a,b,c){var s=b.length===0
if(s&&!c&&!B.b.Z(a,"/")&&!B.b.Z(a,"\\"))return A.mQ(a,!s||c)
return A.c0(a)},
oo(a,b,c,d){if(a!=null)return A.fa(a,b,c,B.J,!0,!1)
return null},
ol(a,b,c){if(a==null)return null
return A.fa(a,b,c,B.J,!0,!1)},
mP(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=B.b.I(a,b+1)
r=B.b.I(a,n)
q=A.lY(s)
p=A.lY(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){n=B.e.d_(o,4)
if(!(n<8))return A.c(B.L,n)
n=(B.L[n]&1<<(o&15))!==0}else n=!1
if(n)return A.ba(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return B.b.B(a,b,b+3).toUpperCase()
return null},
mN(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
if(a<128){s=new Uint8Array(3)
s[0]=37
s[1]=B.b.E(k,a>>>4)
s[2]=B.b.E(k,a&15)}else{if(a>2047)if(a>65535){r=240
q=4}else{r=224
q=3}else{r=192
q=2}p=3*q
s=new Uint8Array(p)
for(o=0;--q,q>=0;r=128){n=B.e.mv(a,6*q)&63|r
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
fa(a,b,c,d,e,f){var s=A.or(a,b,c,d,e,f)
return s==null?B.b.B(a,b,c):s},
or(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i=null
for(s=!e,r=b,q=r,p=i;r<c;){o=B.b.I(a,r)
if(o<127){n=o>>>4
if(!(n<8))return A.c(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=A.mP(a,r,!1)
if(m==null){r+=3
continue}if("%"===m){m="%25"
l=1}else l=3}else if(o===92&&f){m="/"
l=1}else{if(s)if(o<=93){n=o>>>4
if(!(n<8))return A.c(B.H,n)
n=(B.H[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){A.dA(a,r,"Invalid character")
l=i
m=l}else{if((o&64512)===55296){n=r+1
if(n<c){k=B.b.I(a,n)
if((k&64512)===56320){o=(o&1023)<<10|k&1023|65536
l=2}else l=1}else l=1}else l=1
m=A.mN(o)}}if(p==null){p=new A.a2("")
n=p}else n=p
j=n.a+=B.b.B(a,q,r)
n.a=j+A.k(m)
if(typeof l!=="number")return A.bB(l)
r+=l
q=r}}if(p==null)return i
if(q<c)p.a+=B.b.B(a,q,c)
s=p.a
return s.charCodeAt(0)==0?s:s},
oq(a){if(B.b.Z(a,"."))return!0
return B.b.ak(a,"/.")!==-1},
c0(a){var s,r,q,p,o,n,m
if(!A.oq(a))return a
s=A.a([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(J.W(n,"..")){m=s.length
if(m!==0){if(0>=m)return A.c(s,-1)
s.pop()
if(s.length===0)B.a.p(s,"")}p=!0}else if("."===n)p=!0
else{B.a.p(s,n)
p=!1}}if(p)B.a.p(s,"")
return B.a.aF(s,"/")},
mQ(a,b){var s,r,q,p,o,n
if(!A.oq(a))return!b?A.oj(a):a
s=A.a([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n)if(s.length!==0&&B.a.gu(s)!==".."){if(0>=s.length)return A.c(s,-1)
s.pop()
p=!0}else{B.a.p(s,"..")
p=!1}else if("."===n)p=!0
else{B.a.p(s,n)
p=!1}}r=s.length
if(r!==0)if(r===1){if(0>=r)return A.c(s,0)
r=s[0].length===0}else r=!1
else r=!0
if(r)return"./"
if(p||B.a.gu(s)==="..")B.a.p(s,"")
if(!b){if(0>=s.length)return A.c(s,0)
B.a.v(s,0,A.oj(s[0]))}return B.a.aF(s,"/")},
oj(a){var s,r,q,p=a.length
if(p>=2&&A.ok(B.b.E(a,0)))for(s=1;s<p;++s){r=B.b.E(a,s)
if(r===58)return B.b.B(a,0,s)+"%3A"+B.b.av(a,s+1)
if(r<=127){q=r>>>4
if(!(q<8))return A.c(B.K,q)
q=(B.K[q]&1<<(r&15))===0}else q=!0
if(q)break}return a},
rD(a,b){if(a.oE("package")&&a.c==null)return A.oK(b,0,b.length)
return-1},
ot(a){var s,r,q,p=a.gfW(),o=p.length
if(o>0&&J.M(p[0])===2&&J.ng(p[0],1)===58){if(0>=o)return A.c(p,0)
A.rx(J.ng(p[0],0),!1)
A.oh(p,!1,1)
s=!0}else{A.oh(p,!1,0)
s=!1}r=a.gec()&&!s?""+"\\":""
if(a.gdd()){q=a.gbp(a)
if(q.length!==0)r=r+"\\"+q+"\\"}r=A.ky(r,p,"\\")
o=s&&o===1?r+"\\":r
return o.charCodeAt(0)==0?o:o},
rz(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=B.b.E(a,b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw A.d(A.a8("Invalid URL encoding",null))}}return s},
mR(a,b,c,d,e){var s,r,q,p,o=b
while(!0){if(!(o<c)){s=!0
break}r=B.b.E(a,o)
if(r<=127)if(r!==37)q=!1
else q=!0
else q=!0
if(q){s=!1
break}++o}if(s){if(B.A!==d)q=!1
else q=!0
if(q)return B.b.B(a,b,c)
else p=new A.a9(B.b.B(a,b,c))}else{p=A.a([],t.t)
for(q=a.length,o=b;o<c;++o){r=B.b.E(a,o)
if(r>127)throw A.d(A.a8("Illegal percent encoding in URI",null))
if(r===37){if(o+3>q)throw A.d(A.a8("Truncated URI",null))
B.a.p(p,A.rz(a,o+1))
o+=2}else B.a.p(p,r)}}return d.dX(0,p)},
ok(a){var s=a|32
return 97<=s&&s<=122},
o0(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.a([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=B.b.E(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.d(A.aE(k,a,r))}}if(q<0&&r>b)throw A.d(A.aE(k,a,r))
for(;p!==44;){B.a.p(j,r);++r
for(o=-1;r<s;++r){p=B.b.E(a,r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)B.a.p(j,o)
else{n=B.a.gu(j)
if(p!==44||r!==n+7||!B.b.aa(a,"base64",n+1))throw A.d(A.aE("Expecting '='",a,r))
break}}B.a.p(j,r)
m=r+1
if((j.length&1)===1)a=B.aT.oP(a,m,s)
else{l=A.or(a,m,s,B.J,!0,!1)
if(l!=null)a=B.b.ck(a,m,s,l)}return new A.kG(a,j,c)},
rL(){var s,r,q,p,o,n,m="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",l=".",k=":",j="/",i="\\",h="?",g="#",f="/\\",e=A.a(new Array(22),t.bs)
for(s=0;s<22;++s)e[s]=new Uint8Array(96)
r=new A.lD(e)
q=new A.lE()
p=new A.lF()
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
oI(a,b,c,d,e){var s,r,q,p,o=$.pA()
for(s=b;s<c;++s){if(!(d>=0&&d<o.length))return A.c(o,d)
r=o[d]
q=B.b.E(a,s)^96
p=r[q>95?31:q]
d=p&31
B.a.v(e,p>>>5,s)}return d},
oc(a){if(a.b===7&&B.b.Z(a.a,"package")&&a.c<=0)return A.oK(a.a,a.e,a.f)
return-1},
oK(a,b,c){var s,r,q
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
l5:function l5(){},
a1:function a1(){},
dN:function dN(a){this.a=a},
ch:function ch(){},
hl:function hl(){},
bD:function bD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dm:function dm(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
h6:function h6(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
hX:function hX(a){this.a=a},
eN:function eN(a){this.a=a},
cf:function cf(a){this.a=a},
fP:function fP(a){this.a=a},
hq:function hq(){},
eE:function eE(){},
fR:function fR(a){this.a=a},
il:function il(a){this.a=a},
e6:function e6(a,b,c){this.a=a
this.b=b
this.c=c},
j:function j(){},
U:function U(){},
bj:function bj(a,b,c){this.a=a
this.b=b
this.$ti=c},
ak:function ak(){},
H:function H(){},
iw:function iw(){},
hB:function hB(a){this.a=a},
hA:function hA(a){var _=this
_.a=a
_.c=_.b=0
_.d=-1},
a2:function a2(a){this.a=a},
kH:function kH(a){this.a=a},
kI:function kI(a){this.a=a},
kJ:function kJ(a,b){this.a=a
this.b=b},
f9:function f9(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.y=_.x=_.w=$},
kG:function kG(a,b,c){this.a=a
this.b=b
this.c=c},
lD:function lD(a){this.a=a},
lE:function lE(){},
lF:function lF(){},
bn:function bn(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
ib:function ib(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.y=_.x=_.w=$},
qp(a){var s=new Path2D(a)
s.toString
return s},
l6(a,b,c,d,e){var s=A.oM(new A.l7(c),t.fq),r=s!=null
if(r&&!0){t.U.a(s)
if(r)J.pC(a,b,s,!1)}return new A.eU(a,b,s,!1,e.h("eU<0>"))},
oM(a,b){var s=$.aa
if(s===B.l)return a
return s.nn(a,b)},
x:function x(){},
fw:function fw(){},
fz:function fz(){},
cw:function cw(){},
dT:function dT(){},
bE:function bE(){},
jc:function jc(){},
dX:function dX(){},
p:function p(){},
q:function q(){},
aU:function aU(){},
fZ:function fZ(){},
b9:function b9(){},
b4:function b4(){},
hs:function hs(){},
hE:function hE(){},
bz:function bz(){},
du:function du(){},
kZ:function kZ(a){this.a=a},
eR:function eR(){},
mk:function mk(a,b){this.a=a
this.$ti=b},
eT:function eT(){},
ih:function ih(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
eU:function eU(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
l7:function l7(a){this.a=a},
p8(a,b,c){A.iE(c,t.p,"T","min")
return Math.min(c.a(a),c.a(b))},
p7(a,b,c){A.iE(c,t.p,"T","max")
return Math.max(c.a(a),c.a(b))},
ir:function ir(){this.b=this.a=0},
cM:function cM(a,b,c){this.a=a
this.b=b
this.$ti=c},
au:function au(a,b){this.a=a
this.$ti=b},
jO:function jO(a){this.a=a},
eV:function eV(a,b){this.a=a
this.b=null
this.$ti=b},
oA(a,b){var s,r,q,p,o,n,m=null
for(s=a.length,r=!b,q=m,p=0;p<s;++p){switch(B.b.E(a,p)){case 34:o=r?'\\"':m
break
case 39:o=b?"\\'":m
break
default:o=m}n=o==null
if(!n&&q==null)q=new A.a2(B.b.B(a,0,p))
if(q!=null)q.a+=n?a[p]:o}if(q==null)s=a
else{s=q.a
s=s.charCodeAt(0)==0?s:s}return s},
mC(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=a.length,r=0;r<s;++r){q=a[r]
p=A.aw(q.j(0,"value"))
o=p.length
if(e===o){for(n=d,m=!0,l=0;l<o;++l,n=j){k=B.b.E(p,l)
j=n+1
i=B.b.I(c,n)
if(m)if(i!==k){h=i>=65&&i<=90&&i+32===k
m=h}else m=!0
else m=!1
if(!m)break}if(m)return A.a0(q.j(0,b))}}return-1},
qU(a){var s,r
if(a===24)return"%"
else for(s=0;s<26;++s){r=B.ac[s]
if(A.a0(r.j(0,"unit"))===a)return A.iC(r.j(0,"value"))}return"<BAD UNIT>"},
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
hS(a){var s
if(!(a>=97&&a<=122))s=a>=65&&a<=90||a===95||a>=160||a===92
else s=!0
return s},
lp:function lp(a){this.a=a
this.c=null
this.d=$},
bl:function bl(a,b){this.a=a
this.b=b},
h2:function h2(a,b,c){this.c=a
this.a=b
this.b=c},
kB:function kB(a,b,c,d,e,f,g,h,i){var _=this
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
kC:function kC(){},
dg:function dg(a){this.b=a},
df:function df(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
k2:function k2(a,b,c){this.a=a
this.b=b
this.c=c},
qr(a,b){return new A.ki(b)},
ki:function ki(a){this.w=a},
bS:function bS(a,b){this.b=a
this.a=b},
cj:function cj(a){this.a=a},
hP:function hP(a){this.a=a},
hj:function hj(a){this.a=a},
hF:function hF(a,b){this.b=a
this.a=b},
cc:function cc(a,b){this.b=a
this.a=b},
eB:function eB(a,b,c){this.b=a
this.c=b
this.a=c},
b_:function b_(){},
cA:function cA(a,b){this.b=a
this.a=b},
hg:function hg(a,b,c){this.d=a
this.b=b
this.a=c},
fD:function fD(a,b,c,d){var _=this
_.d=a
_.e=b
_.b=c
_.a=d},
h1:function h1(a,b){this.b=a
this.a=b},
fL:function fL(a,b){this.b=a
this.a=b},
dk:function dk(a,b){this.b=a
this.a=b},
dl:function dl(a,b,c){this.d=a
this.b=b
this.a=c},
ev:function ev(a,b,c){this.f=a
this.b=b
this.a=c},
hx:function hx(a,b,c){this.d=a
this.b=b
this.a=c},
dq:function dq(a,b){this.b=a
this.a=b},
hk:function hk(a,b,c){this.d=a
this.b=b
this.a=c},
hp:function hp(a){this.a=a},
ho:function ho(a){this.a=a},
ag:function ag(a,b,c){this.c=a
this.d=b
this.a=c},
hn:function hn(a,b,c){this.c=a
this.d=b
this.a=c},
bm:function bm(){},
hb:function hb(a,b,c,d){var _=this
_.f=a
_.c=b
_.d=c
_.a=d},
hu:function hu(a,b,c){this.c=a
this.d=b
this.a=c},
fU:function fU(a,b,c){this.c=a
this.d=b
this.a=c},
fX:function fX(a,b,c){this.c=a
this.d=b
this.a=c},
fx:function fx(a,b,c,d){var _=this
_.f=a
_.c=b
_.d=c
_.a=d},
hQ:function hQ(a,b,c,d){var _=this
_.f=a
_.c=b
_.d=c
_.a=d},
h0:function h0(a,b,c,d){var _=this
_.f=a
_.c=b
_.d=c
_.a=d},
h_:function h_(a,b,c){this.c=a
this.d=b
this.a=c},
hz:function hz(a,b,c,d){var _=this
_.f=a
_.c=b
_.d=c
_.a=d},
fJ:function fJ(a,b,c,d){var _=this
_.f=a
_.c=b
_.d=c
_.a=d},
hy:function hy(a,b,c,d){var _=this
_.f=a
_.c=b
_.d=c
_.a=d},
i2:function i2(a,b,c,d){var _=this
_.f=a
_.c=b
_.d=c
_.a=d},
S:function S(){},
aj:function aj(){},
i3:function i3(){},
nt(){return new A.dW(A.ab(null,null,t.K,t.N))},
nu(a,b,c){return new A.fS(a,b,c,A.ab(null,null,t.K,t.N))},
mB(a){return new A.bW(a,A.ab(null,null,t.K,t.N))},
mj(a,b){return new A.V(b,a,A.ab(null,null,t.K,t.N))},
ns(a){return new A.fO(a,A.ab(null,null,t.K,t.N))},
aD:function aD(a,b,c){this.a=a
this.b=b
this.c=c},
iq:function iq(){},
lo:function lo(){},
ig:function ig(){},
ah:function ah(){},
dW:function dW(a){var _=this
_.a=null
_.b=a
_.d=_.c=$
_.e=null},
fS:function fS(a,b,c,d){var _=this
_.w=a
_.x=b
_.y=c
_.a=null
_.b=d
_.d=_.c=$
_.e=null},
bW:function bW(a,b){var _=this
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
fO:function fO(a,b){var _=this
_.w=a
_.a=null
_.b=b
_.d=_.c=$
_.e=null},
ac:function ac(a,b){this.b=a
this.a=b},
fY:function fY(a){this.a=a},
ji:function ji(){},
ic:function ic(){},
id:function id(){},
ie:function ie(){},
ii:function ii(){},
ij:function ij(){},
im:function im(){},
jH:function jH(a,b,c,d){var _=this
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
a7:function a7(){},
kh:function kh(a){this.a=a},
kg:function kg(a){this.a=a},
bv:function bv(a,b){this.a=a
this.b=b},
fG:function fG(a,b){this.a=a
this.b=b},
dR:function dR(a,b){this.a=a
this.b=b},
h4:function h4(a,b){this.a=a
this.b=b},
fv:function fv(a,b){this.a=a
this.b=b},
d9:function d9(a,b){this.c=!1
this.a=a
this.b=b},
jL:function jL(a){this.a=a},
jK:function jK(a){this.a=a},
hO:function hO(a,b){this.a=a
this.b=b},
ed:function ed(a,b){this.a=a
this.b=b},
db:function db(a,b,c){var _=this
_.c=null
_.d=a
_.a=b
_.b=c},
jM:function jM(){},
e8:function e8(a,b){this.a=a
this.b=b},
e9:function e9(a,b){this.a=a
this.b=b},
cB:function cB(a,b){this.a=a
this.b=b},
eb:function eb(a,b){this.a=a
this.b=b},
da:function da(a,b){this.a=a
this.b=b},
ec:function ec(a,b){this.a=a
this.b=b},
h5:function h5(a,b){this.a=a
this.b=b},
h3:function h3(a,b){this.a=a
this.b=b},
ft:function ft(a,b){this.a=a
this.b=b},
ea:function ea(a,b){this.a=a
this.b=b},
fu:function fu(a,b){this.a=a
this.b=b},
fr:function fr(a,b){this.a=a
this.b=b},
fs:function fs(a,b){this.a=a
this.b=b},
aY:function aY(a,b,c){this.a=a
this.b=b
this.c=c},
qn(a){switch(a){case"http://www.w3.org/1999/xhtml":return"html"
case"http://www.w3.org/1998/Math/MathML":return"math"
case"http://www.w3.org/2000/svg":return"svg"
case"http://www.w3.org/1999/xlink":return"xlink"
case"http://www.w3.org/XML/1998/namespace":return"xml"
case"http://www.w3.org/2000/xmlns/":return"xmlns"
default:return null}},
a6(a){A.iC(a)
if(a==null)return!1
return A.n4(B.b.E(a,0))},
n4(a){switch(a){case 9:case 10:case 12:case 13:case 32:return!0}return!1},
aQ(a){var s,r
if(a==null)return!1
s=B.b.E(a,0)
if(!(s>=97&&s<=122))r=s>=65&&s<=90
else r=!0
return r},
m5(a){var s
if(a==null)return!1
s=B.b.E(a,0)
return s>=48&&s<58},
p4(a){if(a==null)return!1
switch(B.b.E(a,0)){case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:case 65:case 66:case 67:case 68:case 69:case 70:case 97:case 98:case 99:case 100:case 101:case 102:return!0}return!1},
pO(a){A.a0(a)
return a>=65&&a<=90?a+97-65:a},
kl:function kl(){},
fT:function fT(a){this.a=a},
ia:function ia(){},
jg:function jg(a){this.a=a
this.b=-1},
j8:function j8(a){this.a=a},
rX(a){if(1<=a&&a<=8)return!0
if(14<=a&&a<=31)return!0
if(127<=a&&a<=159)return!0
if(55296<=a&&a<=57343)return!0
if(64976<=a&&a<=65007)return!0
switch(a){case 11:case 65534:case 65535:case 131070:case 131071:case 196606:case 196607:case 262142:case 262143:case 327678:case 327679:case 393214:case 393215:case 458750:case 458751:case 524286:case 524287:case 589822:case 589823:case 655358:case 655359:case 720894:case 720895:case 786430:case 786431:case 851966:case 851967:case 917502:case 917503:case 983038:case 983039:case 1048574:case 1048575:case 1114110:case 1114111:return!0}return!1},
tl(a){var s=A.ap("[\t-\r -/:-@[-`{-~]")
if(a==null)return null
return B.cL.j(0,A.bp(a,s,"").toLowerCase())},
rM(a,b){switch(a){case"ascii":return new A.a9(B.aS.dX(0,b))
case"utf-8":return new A.a9(B.A.dX(0,b))
default:throw A.d(A.a8("Encoding "+a+" not supported",null))}},
jG:function jG(a,b,c,d){var _=this
_.a=a
_.b=!0
_.d=b
_.f=_.e=null
_.r=c
_.w=null
_.x=d
_.y=0},
aX:function aX(){},
nR(a){switch(a){case"before":case"after":case"first-line":case"first-letter":return!0
default:return!1}},
qG(a){var s,r
for(;a!=null;){s=a.b.j(0,"lang")
if(s!=null)return s
r=a.a
a=r instanceof A.V?r:null}return null},
ez:function ez(){this.a=null},
ks:function ks(){},
kt:function kt(){},
kr:function kr(){},
kq:function kq(a){this.a=a},
aJ(a,b,c,d){return new A.ce(b==null?A.ab(null,null,t.K,t.N):b,c,a,d)},
b5:function b5(){},
bV:function bV(){},
ce:function ce(a,b,c,d){var _=this
_.e=a
_.r=!1
_.w=b
_.b=c
_.c=d
_.a=null},
J:function J(a,b){this.b=a
this.c=b
this.a=null},
bc:function bc(){},
m:function m(a,b,c){var _=this
_.e=a
_.b=b
_.c=c
_.a=null},
E:function E(a,b){this.b=a
this.c=b
this.a=null},
cO:function cO(a,b){this.b=a
this.c=b
this.a=null},
d4:function d4(a,b){this.b=a
this.c=b
this.a=null},
dV:function dV(a){var _=this
_.c=_.b=null
_.d=""
_.e=a
_.a=null},
eH:function eH(){this.a=null
this.b=$},
lU:function lU(){},
lT:function lT(){},
e7:function e7(a,b,c,d,e,f,g,h){var _=this
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
jI:function jI(a){this.a=a},
jJ:function jJ(a){this.a=a},
t6(a,b){var s,r,q=a.a
if(q!==b.a)return!1
if(q===0)return!0
for(q=A.nC(a,a.r,A.A(a).c);q.n();){s=q.d
r=b.j(0,s)
if(r==null&&!b.aj(s))return!1
if(!J.W(a.j(0,s),r))return!1}return!0},
nY(a,b,c,d){var s,r,q,p,o=a.gal(a)
if(d==null)if(!o.gag(o)&&o.gu(o) instanceof A.bW){s=t.oI.a(o.gu(o))
s.iH(0,b)
if(c!=null){r=c.a
q=s.e
s.e=r.eR(0,A.c5(q.a,q.b).b,A.c5(r,c.c).b)}}else{r=A.mB(b)
r.e=c
o.p(0,r)}else{p=o.ak(o,d)
if(p>0){r=p-1
q=o.a
if(!(r<q.length))return A.c(q,r)
r=q[r] instanceof A.bW}else r=!1
if(r){r=p-1
q=o.a
if(!(r>=0&&r<q.length))return A.c(q,r)
t.oI.a(q[r]).iH(0,b)}else{r=A.mB(b)
r.e=c
o.bJ(0,p,r)}}},
fq:function fq(a){this.a=a},
kD:function kD(a,b,c){var _=this
_.a=a
_.b=$
_.c=b
_.d=c
_.f=_.e=null
_.r=!1},
n9(a,b,c,d){var s
if(c==null)c=a.length
if(c<b)c=b
s=a.length
return B.a.bc(a,b,c>s?s:c)},
mX(a){var s,r
for(s=a.length,r=0;r<s;++r)if(!A.n4(B.b.E(a,r)))return!1
return!0},
p9(a,b){var s,r=a.length
if(r===b)return a
b-=r
for(s=0,r="";s<b;++s)r+="0"
r+=a
return r.charCodeAt(0)==0?r:r},
tv(a,b){var s={}
s.a=a
if(b==null)return a
b.bf(0,new A.lW(s))
return s.a},
o:function o(a,b,c){this.a=a
this.b=b
this.$ti=c},
lW:function lW(a){this.a=a},
hU(a,b){var s=new A.hT(1,A.tR(),0,a)
s.f=s.c6()
s.x=b
s.ox()
return s},
br:function br(){},
fy:function fy(a,b,c,d,e){var _=this
_.x=a
_.z=_.y=$
_.a=b
_.b=c
_.c=d
_.f=$
_.r=e
_.w=$},
hT:function hT(a,b,c,d){var _=this
_.y=_.x=$
_.as=null
_.a=a
_.b=b
_.c=c
_.f=$
_.r=d
_.w=$},
j3:function j3(a){var _=this
_.c=14.222222222222221
_.d=8
_.f=a
_.r=$},
j4:function j4(){},
j5:function j5(){},
dH:function dH(){},
fp:function fp(){},
iM:function iM(a){this.a=a},
iN:function iN(a){this.a=a},
iO:function iO(a){this.a=a},
fH:function fH(a,b,c,d,e,f,g,h){var _=this
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
mx(a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a9.au,a5=a9.e6,a6=A.h(a9.jd,!0,t.W),a7=a9.oc,a8=a9.fJ
if(a8!=null){s=A.w(a8)
s=A.h(new A.I(a8,s.h("ao(1)").a(new A.kd()),s.h("I<1,ao>")),!0,t.F)
a8=s}else a8=a3
s=a9.da
if(s!=null){r=A.w(s)
r=A.h(new A.I(s,r.h("ao(1)").a(new A.ke()),r.h("I<1,ao>")),!0,t.F)
s=r}else s=a3
r=a9.a3
q=a9.a8
A.aN(a3,0,B.c,a3,0)
p=a9.fx
o=a9.fy
n=A.bX(a9.go)
m=a9.id
m=m==null?a3:A.aC(m)
l=a9.k1
l=l==null?a3:A.aC(l)
k=a9.ax
k=k==null?a3:J.u(k,new A.a3(),t.G)
if(k==null)k=A.a([],t.O)
j=t.G
k=A.h(k,!0,j)
i=a9.ay
i=i==null?a3:J.u(i,new A.a4(),j)
i=A.h(i==null?A.a([],t.O):i,!0,j)
h=a9.ch
h=h==null?a3:J.u(h,new A.a5(),j)
j=A.h(h==null?A.a([],t.O):h,!0,j)
h=a9.w
g=a9.x
f=a9.Q
e=a9.a
e===$&&A.b("color")
e=e.t()
d=a9.b
d===$&&A.b("name")
a9.c===$&&A.b("target")
c=A.a([],t.r)
b=a9.d
b===$&&A.b("submobjects")
a=b.length
a0=0
for(;a0<b.length;b.length===a||(0,A.e)(b),++a0)c.push(b[a0].t())
b=a9.f
b===$&&A.b("updatingSuspended")
a=A.a([],t.l)
a1=a9.r
a1===$&&A.b("points")
a1=J.F(a1)
for(;a1.n();){a2=a1.gq()
a.push(new A.f(a2.a,a2.b,a2.c))}return new A.di(a9.c0,a4,a9.ce,a9.aQ,a9.b0,a9.jc,a5,a6,!1,a9.o9,a9.je,a9.oa,a9.ob,new A.f(a7.a,a7.b,a7.c),a9.od,a9.jf,a9.oe,a9.of,a9.og,a9.oh,a8,s,a9.y2,a9.a5,r,q,p,new A.f(o.a,o.b,o.c),n,m,l,h,g,a9.y,a9.z,f,a9.as,a9.at,k,i,j,e,d,a3,c,b,a)},
pQ(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a0.e1,d=A.dQ(a0.e2),c=A.dQ(a0.e3),b=A.dQ(a0.e4),a=a0.ax
a=a==null?f:J.u(a,new A.a3(),t.G)
if(a==null)a=A.a([],t.O)
s=t.G
a=A.h(a,!0,s)
r=a0.ay
r=r==null?f:J.u(r,new A.a4(),s)
r=A.h(r==null?A.a([],t.O):r,!0,s)
q=a0.ch
q=q==null?f:J.u(q,new A.a5(),s)
s=A.h(q==null?A.a([],t.O):q,!0,s)
q=a0.w
p=a0.x
o=a0.Q
n=a0.a
n===$&&A.b("color")
n=n.t()
m=a0.b
m===$&&A.b("name")
a0.c===$&&A.b("target")
l=A.a([],t.r)
k=a0.d
k===$&&A.b("submobjects")
j=k.length
i=0
for(;i<k.length;k.length===j||(0,A.e)(k),++i)l.push(k[i].t())
k=a0.f
k===$&&A.b("updatingSuspended")
j=A.a([],t.l)
h=a0.r
h===$&&A.b("points")
h=J.F(h)
for(;h.n();){g=h.gq()
j.push(new A.f(g.a,g.b,g.c))}e=new A.dP(new A.f(e.a,e.b,e.c),d,c,b,a0.to,a0.x1,a0.x2,a0.xr,q,p,a0.y,a0.z,o,a0.as,a0.at,a,r,s,n,m,f,l,k,j)
e.hA(a0)
return e},
et(a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=null,a1=B.E.bL(B.P),a2=B.r.bL(B.r),a3=B.a4.bL(B.O),a4=t.b1,a5=A.a([],a4),a6=a7.fH
a6===$&&A.b("backgroundLines")
s=a6.length
r=0
for(;r<a6.length;a6.length===s||(0,A.e)(a6),++r)a5.push(a6[r].t())
a4=A.a([],a4)
a6=a7.fI
a6===$&&A.b("fadedLines")
s=a6.length
r=0
for(;r<a6.length;a6.length===s||(0,A.e)(a6),++r)a4.push(a6[r].t())
a6=a7.e7
a6=a6==null?a0:A.o3(a6)
s=A.o3(a7.fK)
q=a7.e1
p=A.dQ(a7.e2)
o=A.dQ(a7.e3)
n=A.dQ(a7.e4)
m=a7.ax
m=m==null?a0:J.u(m,new A.a3(),t.G)
if(m==null)m=A.a([],t.O)
l=t.G
m=A.h(m,!0,l)
k=a7.ay
k=k==null?a0:J.u(k,new A.a4(),l)
k=A.h(k==null?A.a([],t.O):k,!0,l)
j=a7.ch
j=j==null?a0:J.u(j,new A.a5(),l)
l=A.h(j==null?A.a([],t.O):j,!0,l)
j=a7.w
i=a7.x
h=a7.Q
g=a7.a
g===$&&A.b("color")
g=g.t()
f=a7.b
f===$&&A.b("name")
a7.c===$&&A.b("target")
e=A.a([],t.r)
d=a7.d
d===$&&A.b("submobjects")
c=d.length
r=0
for(;r<d.length;d.length===c||(0,A.e)(d),++r)e.push(d[r].t())
d=a7.f
d===$&&A.b("updatingSuspended")
c=A.a([],t.l)
b=a7.r
b===$&&A.b("points")
b=J.F(b)
for(;b.n();){a=b.gq()
c.push(new A.f(a.a,a.b,a.c))}a1=new A.es(a1,a2,a3,s,a6,a7.jg,a7.jh,a7.jb,a5,a4,new A.f(q.a,q.b,q.c),p,o,n,a7.to,a7.x1,a7.x2,a7.xr,j,i,a7.y,a7.z,h,a7.as,a7.at,m,k,l,g,f,a0,e,d,c)
a1.hA(a7)
return a1},
nG(a,b,c,d,e){var s=null,r=new A.es(B.E.bL(B.P),B.r.bL(B.r),B.a4.bL(B.O),B.e4,s,1,1,1,$,$,B.d,B.E,B.r,B.r,c,b,e,d,4,0,!1,0.01,!1,0.000001,4,s,s,s,B.c,$,s,$,$,$)
r.am(B.c,s,s)
r.hF(s)
r.lH(B.E,B.d,B.r,b,c,B.r,d,e)
r.Q=a
r.ow()
r.hl(1)
return r},
dQ(a){return new A.aI(a.a,a.b,a.c,a.d,a.e,a.f,a.r,a.w,a.x,a.y,a.z,a.Q,a.as,a.at,a.ax,a.ay,a.ch,a.CW,a.cx,a.cy)},
di:function di(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7){var _=this
_.c0=a
_.au=b
_.ce=c
_.aQ=d
_.b0=e
_.jc=f
_.e6=g
_.jd=h
_.q_=i
_.o9=j
_.je=k
_.oa=l
_.ob=m
_.oc=n
_.od=o
_.jf=p
_.oe=q
_.of=r
_.og=s
_.oh=a0
_.fJ=a1
_.da=a2
_.y2=a3
_.a5=a4
_.a3=a5
_.a8=a6
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
kd:function kd(){},
ke:function ke(){},
fQ:function fQ(){},
dP:function dP(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4){var _=this
_.e1=a
_.e2=b
_.e3=c
_.e4=d
_.e5=_.bH=_.be=$
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
j0:function j0(){},
es:function es(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
_.da=a
_.oi=b
_.oj=c
_.fK=d
_.e7=e
_.jg=f
_.jh=g
_.jb=h
_.fH=i
_.fI=j
_.e1=k
_.e2=l
_.e3=m
_.e4=n
_.e5=_.bH=_.be=$
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
return new A.eK(r,q,e,a!=null?A.a([a],s):A.a([],s),b)},
bX(a){var s,r,q,p,o=a.a
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
return new A.eK(o,s,a.c,r,a.e)},
qT(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=null
A.aN(a1,0,B.c,a1,0)
s=a2.fx
r=a2.fy
q=A.bX(a2.go)
p=a2.id
p=p==null?a1:A.aC(p)
o=a2.k1
o=o==null?a1:A.aC(o)
n=a2.ax
n=n==null?a1:J.u(n,new A.a3(),t.G)
if(n==null)n=A.a([],t.O)
m=t.G
n=A.h(n,!0,m)
l=a2.ay
l=l==null?a1:J.u(l,new A.a4(),m)
l=A.h(l==null?A.a([],t.O):l,!0,m)
k=a2.ch
k=k==null?a1:J.u(k,new A.a5(),m)
m=A.h(k==null?A.a([],t.O):k,!0,m)
k=a2.gap()
j=a2.x
i=a2.gdV()
h=a2.Q
g=a2.a
g===$&&A.b("color")
g=g.t()
f=a2.b
f===$&&A.b("name")
a2.c===$&&A.b("target")
e=A.a([],t.r)
d=a2.d
d===$&&A.b("submobjects")
c=d.length
b=0
for(;b<d.length;d.length===c||(0,A.e)(d),++b)e.push(d[b].t())
d=a2.f
d===$&&A.b("updatingSuspended")
c=A.a([],t.l)
a=a2.r
a===$&&A.b("points")
a=J.F(a)
for(;a.n();){a0=a.gq()
c.push(new A.f(a0.a,a0.b,a0.c))}return new A.eL(s,new A.f(r.a,r.b,r.c),q,p,o,k,j,i,a2.z,h,a2.as,a2.at,n,l,m,g,f,a1,e,d,c)},
pK(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=null
A.aN(a1,0,B.c,a1,0)
s=a2.fx
r=a2.fy
q=A.bX(a2.go)
p=a2.id
p=p==null?a1:A.aC(p)
o=a2.k1
o=o==null?a1:A.aC(o)
n=a2.ax
n=n==null?a1:J.u(n,new A.a3(),t.G)
if(n==null)n=A.a([],t.O)
m=t.G
n=A.h(n,!0,m)
l=a2.ay
l=l==null?a1:J.u(l,new A.a4(),m)
l=A.h(l==null?A.a([],t.O):l,!0,m)
k=a2.ch
k=k==null?a1:J.u(k,new A.a5(),m)
m=A.h(k==null?A.a([],t.O):k,!0,m)
k=a2.w
j=a2.x
i=a2.gdV()
h=a2.Q
g=a2.a
g===$&&A.b("color")
g=g.t()
f=a2.b
f===$&&A.b("name")
a2.c===$&&A.b("target")
e=A.a([],t.r)
d=a2.d
d===$&&A.b("submobjects")
c=d.length
b=0
for(;b<d.length;d.length===c||(0,A.e)(d),++b)e.push(d[b].t())
d=a2.f
d===$&&A.b("updatingSuspended")
c=A.a([],t.l)
a=a2.r
a===$&&A.b("points")
a=J.F(a)
for(;a.n();){a0=a.gq()
c.push(new A.f(a0.a,a0.b,a0.c))}return new A.dJ(a2.y2,a2.a5,a2.a3,a2.a8,a2.bn,s,new A.f(r.a,r.b,r.c),q,p,o,k,j,i,a2.z,h,a2.as,a2.at,n,l,m,g,f,a1,e,d,c)},
pL(a,b,c){var s=null,r=new A.cv(0,a,1,B.d,9,0.35,B.n,A.aN(s,0,B.c,s,0),s,s,4,0,!1,0.01,!1,0.000001,4,s,s,s,B.c,$,s,$,$,$)
r.am(B.c,s,s)
r.ae(B.c)
if(a===0)r.eN(A.a([B.z,B.j],t.l))
r.cK(c,b)
return r},
pM(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=null
A.aN(a0,0,B.c,a0,0)
s=a1.fx
r=a1.fy
q=A.bX(a1.go)
p=a1.id
p=p==null?a0:A.aC(p)
o=a1.k1
o=o==null?a0:A.aC(o)
n=a1.ax
n=n==null?a0:J.u(n,new A.a3(),t.G)
if(n==null)n=A.a([],t.O)
m=t.G
n=A.h(n,!0,m)
l=a1.ay
l=l==null?a0:J.u(l,new A.a4(),m)
l=A.h(l==null?A.a([],t.O):l,!0,m)
k=a1.ch
k=k==null?a0:J.u(k,new A.a5(),m)
m=A.h(k==null?A.a([],t.O):k,!0,m)
k=a1.w
j=a1.x
i=a1.Q
h=a1.a
h===$&&A.b("color")
h=h.t()
g=a1.b
g===$&&A.b("name")
a1.c===$&&A.b("target")
f=A.a([],t.r)
e=a1.d
e===$&&A.b("submobjects")
d=e.length
c=0
for(;c<e.length;e.length===d||(0,A.e)(e),++c)f.push(e[c].t())
e=a1.f
e===$&&A.b("updatingSuspended")
d=A.a([],t.l)
b=a1.r
b===$&&A.b("points")
b=J.F(b)
for(;b.n();){a=b.gq()
d.push(new A.f(a.a,a.b,a.c))}return new A.cv(a1.y2,a1.a5,a1.a3,a1.a8,a1.bn,s,new A.f(r.a,r.b,r.c),q,p,o,k,j,a1.y,a1.z,i,a1.as,a1.at,n,l,m,h,g,a0,f,e,d)},
fK(a,b,c){var s=null,r=new A.c4(0,6.283185307179586,c,a,9,0.35,B.n,A.aN(s,0,B.c,s,0),s,s,4,0,!1,0.01,!1,0.000001,4,s,s,s,B.c,$,s,$,$,$)
r.am(B.c,s,s)
r.ae(b)
return r},
pV(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=null
A.aN(a0,0,B.c,a0,0)
s=a1.fx
r=a1.fy
q=A.bX(a1.go)
p=a1.id
p=p==null?a0:A.aC(p)
o=a1.k1
o=o==null?a0:A.aC(o)
n=a1.ax
n=n==null?a0:J.u(n,new A.a3(),t.G)
if(n==null)n=A.a([],t.O)
m=t.G
n=A.h(n,!0,m)
l=a1.ay
l=l==null?a0:J.u(l,new A.a4(),m)
l=A.h(l==null?A.a([],t.O):l,!0,m)
k=a1.ch
k=k==null?a0:J.u(k,new A.a5(),m)
m=A.h(k==null?A.a([],t.O):k,!0,m)
k=a1.w
j=a1.x
i=a1.Q
h=a1.a
h===$&&A.b("color")
h=h.t()
g=a1.b
g===$&&A.b("name")
a1.c===$&&A.b("target")
f=A.a([],t.r)
e=a1.d
e===$&&A.b("submobjects")
d=e.length
c=0
for(;c<e.length;e.length===d||(0,A.e)(e),++c)f.push(e[c].t())
e=a1.f
e===$&&A.b("updatingSuspended")
d=A.a([],t.l)
b=a1.r
b===$&&A.b("points")
b=J.F(b)
for(;b.n();){a=b.gq()
d.push(new A.f(a.a,a.b,a.c))}return new A.c4(a1.y2,a1.a5,a1.a3,a1.a8,a1.bn,s,new A.f(r.a,r.b,r.c),q,p,o,k,j,!0,a1.z,i,a1.as,a1.at,n,l,m,h,g,a0,f,e,d)},
nv(a){var s=null,r=new A.dY(0,6.283185307179586,0.08,a,9,0.35,B.n,A.aN(s,0,B.c,s,0),s,s,4,0,!1,0.01,!1,0.000001,4,s,s,s,B.c,$,s,$,$,$)
r.am(B.c,s,s)
r.ae(B.c)
return r},
aM(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=null
A.aN(a0,0,B.c,a0,0)
s=a1.fx
r=a1.fy
q=A.bX(a1.go)
p=a1.id
p=p==null?a0:A.aC(p)
o=a1.k1
o=o==null?a0:A.aC(o)
n=a1.ax
n=n==null?a0:J.u(n,new A.a3(),t.G)
if(n==null)n=A.a([],t.O)
m=t.G
n=A.h(n,!0,m)
l=a1.ay
l=l==null?a0:J.u(l,new A.a4(),m)
l=A.h(l==null?A.a([],t.O):l,!0,m)
k=a1.ch
k=k==null?a0:J.u(k,new A.a5(),m)
m=A.h(k==null?A.a([],t.O):k,!0,m)
k=a1.w
j=a1.x
i=a1.Q
h=a1.a
h===$&&A.b("color")
h=h.t()
g=a1.b
g===$&&A.b("name")
a1.c===$&&A.b("target")
f=A.a([],t.r)
e=a1.d
e===$&&A.b("submobjects")
d=e.length
c=0
for(;c<e.length;e.length===d||(0,A.e)(e),++c)f.push(e[c].t())
e=a1.f
e===$&&A.b("updatingSuspended")
d=A.a([],t.l)
b=a1.r
b===$&&A.b("points")
b=J.F(b)
for(;b.n();){a=b.gq()
d.push(new A.f(a.a,a.b,a.c))}return new A.dY(a1.y2,a1.a5,a1.a3,a1.a8,a1.bn,s,new A.f(r.a,r.b,r.c),q,p,o,k,j,!0,a1.z,i,a1.as,a1.at,n,l,m,h,g,a0,f,e,d)},
q1(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=null
A.aN(a0,0,B.c,a0,0)
s=a1.fx
r=a1.fy
q=A.bX(a1.go)
p=a1.id
p=p==null?a0:A.aC(p)
o=a1.k1
o=o==null?a0:A.aC(o)
n=a1.ax
n=n==null?a0:J.u(n,new A.a3(),t.G)
if(n==null)n=A.a([],t.O)
m=t.G
n=A.h(n,!0,m)
l=a1.ay
l=l==null?a0:J.u(l,new A.a4(),m)
l=A.h(l==null?A.a([],t.O):l,!0,m)
k=a1.ch
k=k==null?a0:J.u(k,new A.a5(),m)
m=A.h(k==null?A.a([],t.O):k,!0,m)
k=a1.w
j=a1.x
i=a1.Q
h=a1.a
h===$&&A.b("color")
h=h.t()
g=a1.b
g===$&&A.b("name")
a1.c===$&&A.b("target")
f=A.a([],t.r)
e=a1.d
e===$&&A.b("submobjects")
d=e.length
c=0
for(;c<e.length;e.length===d||(0,A.e)(e),++c)f.push(e[c].t())
e=a1.f
e===$&&A.b("updatingSuspended")
d=A.a([],t.l)
b=a1.r
b===$&&A.b("points")
b=J.F(b)
for(;b.n();){a=b.gq()
d.push(new A.f(a.a,a.b,a.c))}return new A.e0(a1.y2,a1.a5,a1.a3,a1.a8,a1.bn,s,new A.f(r.a,r.b,r.c),q,p,o,k,j,!0,a1.z,i,a1.as,a1.at,n,l,m,h,g,a0,f,e,d)},
mr(a,b,c,d,e){var s=null,r=new A.ao(a,d,e,c,0.35,B.n,A.aN(s,0,B.c,s,0),s,s,4,0,!1,0.01,!1,0.000001,4,s,s,s,B.c,$,s,$,$,$)
r.am(B.c,s,s)
r.ae(b)
return r},
nB(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=null,a1=a3.a3,a2=a3.a8
A.aN(a0,0,B.c,a0,0)
s=a3.fx
r=a3.fy
q=A.bX(a3.go)
p=a3.id
p=p==null?a0:A.aC(p)
o=a3.k1
o=o==null?a0:A.aC(o)
n=a3.ax
n=n==null?a0:J.u(n,new A.a3(),t.G)
if(n==null)n=A.a([],t.O)
m=t.G
n=A.h(n,!0,m)
l=a3.ay
l=l==null?a0:J.u(l,new A.a4(),m)
l=A.h(l==null?A.a([],t.O):l,!0,m)
k=a3.ch
k=k==null?a0:J.u(k,new A.a5(),m)
m=A.h(k==null?A.a([],t.O):k,!0,m)
k=a3.gap()
j=a3.x
i=a3.Q
h=a3.a
h===$&&A.b("color")
h=h.t()
g=a3.b
g===$&&A.b("name")
a3.c===$&&A.b("target")
f=A.a([],t.r)
e=a3.d
e===$&&A.b("submobjects")
d=e.length
c=0
for(;c<e.length;e.length===d||(0,A.e)(e),++c)f.push(e[c].t())
e=a3.f
e===$&&A.b("updatingSuspended")
d=A.a([],t.l)
b=a3.r
b===$&&A.b("points")
b=J.F(b)
for(;b.n();){a=b.gq()
d.push(new A.f(a.a,a.b,a.c))}return new A.ao(a3.y2,a3.a5,a1,a2,s,new A.f(r.a,r.b,r.c),q,p,o,k,j,a3.y,a3.z,i,a3.as,a3.at,n,l,m,h,g,a0,f,e,d)},
bt(a,b,c){var s=null,r=new A.dL(0.25,5,!0,$,a,s,c,b,0.35,B.n,A.aN(s,0,B.c,s,0),s,s,4,0,!1,0.01,!1,0.000001,4,s,s,s,B.c,$,s,$,$,$)
r.am(B.c,s,s)
r.ae(B.c)
r.b0=r.aQ
r.ff(B.a2)
r.hm()
return r},
pN(a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=null,a3=a4.b0
a3===$&&A.b("initialStrokeWidth")
s=a4.a3
r=a4.a8
A.aN(a2,0,B.c,a2,0)
q=a4.fx
p=a4.fy
o=A.bX(a4.go)
n=a4.id
n=n==null?a2:A.aC(n)
m=a4.k1
m=m==null?a2:A.aC(m)
l=a4.ax
l=l==null?a2:J.u(l,new A.a3(),t.G)
if(l==null)l=A.a([],t.O)
k=t.G
l=A.h(l,!0,k)
j=a4.ay
j=j==null?a2:J.u(j,new A.a4(),k)
j=A.h(j==null?A.a([],t.O):j,!0,k)
i=a4.ch
i=i==null?a2:J.u(i,new A.a5(),k)
k=A.h(i==null?A.a([],t.O):i,!0,k)
i=a4.aQ
h=a4.x
g=a4.Q
f=a4.a
f===$&&A.b("color")
f=f.t()
e=a4.b
e===$&&A.b("name")
a4.c===$&&A.b("target")
d=A.a([],t.r)
c=a4.d
c===$&&A.b("submobjects")
b=c.length
a=0
for(;a<c.length;c.length===b||(0,A.e)(c),++a)d.push(c[a].t())
c=a4.f
c===$&&A.b("updatingSuspended")
b=A.a([],t.l)
a0=a4.r
a0===$&&A.b("points")
a0=J.F(a0)
for(;a0.n();){a1=a0.gq()
b.push(new A.f(a1.a,a1.b,a1.c))}return new A.dL(a4.c0,a4.au,!0,a3,a4.y2,a4.a5,s,r,q,new A.f(p.a,p.b,p.c),o,n,m,i,h,a4.y,a4.z,g,a4.as,a4.at,l,j,k,f,e,a2,d,c,b)},
qq(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.ax
e=e==null?f:J.u(e,new A.a3(),t.G)
if(e==null)e=A.a([],t.O)
s=t.G
e=A.h(e,!0,s)
r=a.ay
r=r==null?f:J.u(r,new A.a4(),s)
r=A.h(r==null?A.a([],t.O):r,!0,s)
q=a.ch
q=q==null?f:J.u(q,new A.a5(),s)
s=A.h(q==null?A.a([],t.O):q,!0,s)
q=a.gap()
p=a.x
o=a.Q
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
h=J.F(h)
for(;h.n();){g=h.gq()
j.push(new A.f(g.a,g.b,g.c))}return new A.eu(q,p,a.y,a.z,o,a.as,a.at,e,r,s,n,m,f,l,k,j)},
qA(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.ax
e=e==null?f:J.u(e,new A.a3(),t.G)
if(e==null)e=A.a([],t.O)
s=t.G
e=A.h(e,!0,s)
r=a.ay
r=r==null?f:J.u(r,new A.a4(),s)
r=A.h(r==null?A.a([],t.O):r,!0,s)
q=a.ch
q=q==null?f:J.u(q,new A.a5(),s)
s=A.h(q==null?A.a([],t.O):q,!0,s)
q=a.gap()
p=a.x
o=a.Q
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
h=J.F(h)
for(;h.n();){g=h.gq()
j.push(new A.f(g.a,g.b,g.c))}return new A.ew(q,p,a.y,a.z,o,a.as,a.at,e,r,s,n,m,f,l,k,j)},
qV(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.ax
e=e==null?f:J.u(e,new A.a3(),t.G)
if(e==null)e=A.a([],t.O)
s=t.G
e=A.h(e,!0,s)
r=a.ay
r=r==null?f:J.u(r,new A.a4(),s)
r=A.h(r==null?A.a([],t.O):r,!0,s)
q=a.ch
q=q==null?f:J.u(q,new A.a5(),s)
s=A.h(q==null?A.a([],t.O):q,!0,s)
q=a.gap()
p=a.x
o=a.Q
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
h=J.F(h)
for(;h.n();){g=h.gq()
j.push(new A.f(g.a,g.b,g.c))}return new A.eM(q,p,a.y,a.z,o,a.as,a.at,e,r,s,n,m,f,l,k,j)},
aC(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.ax
e=e==null?f:J.u(e,new A.a3(),t.G)
if(e==null)e=A.a([],t.O)
s=t.G
e=A.h(e,!0,s)
r=a.ay
r=r==null?f:J.u(r,new A.a4(),s)
r=A.h(r==null?A.a([],t.O):r,!0,s)
q=a.ch
q=q==null?f:J.u(q,new A.a5(),s)
s=A.h(q==null?A.a([],t.O):q,!0,s)
q=a.aQ
p=a.x
o=a.Q
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
h=J.F(h)
for(;h.n();){g=h.gq()
j.push(new A.f(g.a,g.b,g.c))}return new A.dM(q,p,a.y,a.z,o,a.as,a.at,e,r,s,n,m,f,l,k,j)},
qy(a,b,c){var s=null,r=A.a([B.D,B.aC,B.N,B.aE],t.l),q=new A.dn(4,0,!1,0.01,!1,0.000001,4,s,s,s,a,$,s,$,$,$)
q.am(a,s,s)
q.eV(r,a)
q.hD(a,b,c)
return q},
qz(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.ax
e=e==null?f:J.u(e,new A.a3(),t.G)
if(e==null)e=A.a([],t.O)
s=t.G
e=A.h(e,!0,s)
r=a.ay
r=r==null?f:J.u(r,new A.a4(),s)
r=A.h(r==null?A.a([],t.O):r,!0,s)
q=a.ch
q=q==null?f:J.u(q,new A.a5(),s)
s=A.h(q==null?A.a([],t.O):q,!0,s)
q=a.w
p=a.x
o=a.Q
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
h=J.F(h)
for(;h.n();){g=h.gq()
j.push(new A.f(g.a,g.b,g.c))}return new A.dn(q,p,a.y,a.z,o,a.as,a.at,e,r,s,n,m,f,l,k,j)},
qB(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.ax
e=e==null?f:J.u(e,new A.a3(),t.G)
if(e==null)e=A.a([],t.O)
s=t.G
e=A.h(e,!0,s)
r=a.ay
r=r==null?f:J.u(r,new A.a4(),s)
r=A.h(r==null?A.a([],t.O):r,!0,s)
q=a.ch
q=q==null?f:J.u(q,new A.a5(),s)
s=A.h(q==null?A.a([],t.O):q,!0,s)
q=a.w
p=a.x
o=a.Q
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
h=J.F(h)
for(;h.n();){g=h.gq()
j.push(new A.f(g.a,g.b,g.c))}return new A.ex(q,p,a.y,a.z,o,a.as,a.at,e,r,s,n,m,f,l,k,j)},
eK:function eK(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hR:function hR(a){this.b=a},
eL:function eL(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1){var _=this
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
dJ:function dJ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6){var _=this
_.y2=a
_.a5=b
_.a3=c
_.a8=d
_.bn=e
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
cv:function cv(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6){var _=this
_.y2=a
_.a5=b
_.a3=c
_.a8=d
_.bn=e
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
c4:function c4(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6){var _=this
_.y2=a
_.a5=b
_.a3=c
_.a8=d
_.bn=e
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
dY:function dY(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6){var _=this
_.y2=a
_.a5=b
_.a3=c
_.a8=d
_.bn=e
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
e0:function e0(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6){var _=this
_.y2=a
_.a5=b
_.a3=c
_.a8=d
_.bn=e
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
_.a5=b
_.a3=c
_.a8=d
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
dL:function dL(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9){var _=this
_.c0=a
_.au=b
_.ce=c
_.aQ=6
_.b0=d
_.y2=e
_.a5=f
_.a3=g
_.a8=h
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
ew:function ew(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
eM:function eM(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
dM:function dM(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.aQ=0
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
dn:function dn(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ex:function ex(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
qD(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.id,d=a.gbo(a),c=a.go,b=a.ax
b=b==null?f:J.u(b,new A.a3(),t.G)
if(b==null)b=A.a([],t.O)
s=t.G
b=A.h(b,!0,s)
r=a.ay
r=r==null?f:J.u(r,new A.a4(),s)
r=A.h(r==null?A.a([],t.O):r,!0,s)
q=a.ch
q=q==null?f:J.u(q,new A.a5(),s)
s=A.h(q==null?A.a([],t.O):q,!0,s)
q=a.w
p=a.x
o=a.Q
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
h=J.F(h)
for(;h.n();){g=h.gq()
j.push(new A.f(g.a,g.b,g.c))}return new A.bT(!0,d,c,e,!0,A.aW(t.N,t.h),q,p,a.y,a.z,o,a.as,a.at,b,r,s,n,m,f,l,k,j)},
tZ(a){var s,r,q,p,o
a=A.bp(a,"\n",",")
a=A.bp(a,"-",",-")
a=A.bp(a,"e,-","e-")
s=A.a([],t.n)
for(r=B.b.cp(a,A.ap("[ ,]")),q=r.length,p=0;p<r.length;r.length===q||(0,A.e)(r),++p){o=r[p]
if(J.M(o)!==0)s.push(A.bO(o))}return s},
p_(a,b,c){var s,r,q,p,o,n,m,l,k=A.a([],c.h("z<l<0>>"))
for(s=A.K(B.e.b2(a.length,b),0,1),r=s.length,q=A.w(a),p=q.c,q=q.h("aK<1>"),o=0;o<s.length;s.length===r||(0,A.e)(s),++o){n=s[o]
if(typeof n!=="number")return n.A()
m=A.a0(n*b)
l=new A.aK(a,m,null,q)
l.cq(a,m,null,p)
k.push(l.pD(0,b).aC(0))}return k},
pj(a,b,c,d){var s=a*d-b*c<0?-1:1
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
a=A.pj(1,0,q,p)
a0=B.h.a6(A.pj(q,p,(-o-c)/m,(-n-b)/l)/1,360)
if(d9===0&&a0>0)a0-=360
else if(d9===1&&a0<0)a0+=360
a1=[c*s-b*r+(d0+d2)/2,c*r+b*s+(d1+d3)/2,a,a0*0.017453292519943295]
a2=a1[0]
a3=a1[1]
a=a1[2]
a0=a1[3]
k=a0/0.017453292519943295
a4=B.h.fm(Math.abs(k/(B.h.a6(k,90)===0?90:36)))
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
if(J.W(c0,b3)){c8=d3
c9=d2}else{c8=c7
c9=c6}B.a.N(a7,A.a([new A.f(b7+a6*(b0*c3-b1*c2),b6+a6*(a9*c3+b2*c2),0),new A.f(c9-a6*(b0*c5-b1*c4),c8-a6*(a9*c5+b2*c4),0),new A.f(c9,c8,0)],k))}return a7},
qE(a){var s=null,r=new A.dp(a,s,4,0,!1,0.01,!1,0.000001,4,s,s,s,B.c,$,s,$,$,$)
r.am(B.c,s,s)
return r},
qF(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.ax
e=e==null?f:J.u(e,new A.a3(),t.G)
if(e==null)e=A.a([],t.O)
s=t.G
e=A.h(e,!0,s)
r=a.ay
r=r==null?f:J.u(r,new A.a4(),s)
r=A.h(r==null?A.a([],t.O):r,!0,s)
q=a.ch
q=q==null?f:J.u(q,new A.a5(),s)
s=A.h(q==null?A.a([],t.O):q,!0,s)
q=a.w
p=a.x
o=a.Q
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
h=J.F(h)
for(;h.n();){g=h.gq()
j.push(new A.f(g.a,g.b,g.c))}return new A.dp(a.fx,a.fy,q,p,a.y,a.z,o,a.as,a.at,e,r,s,n,m,f,l,k,j)},
bT:function bT(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2){var _=this
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
km:function km(){},
dp:function dp(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
ko:function ko(){},
kn:function kn(){},
ey:function ey(a,b,c){this.a=a
this.b=b
this.c=c},
qS(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.ax
e=e==null?f:J.u(e,new A.a3(),t.G)
if(e==null)e=A.a([],t.O)
s=t.G
e=A.h(e,!0,s)
r=a.ay
r=r==null?f:J.u(r,new A.a4(),s)
r=A.h(r==null?A.a([],t.O):r,!0,s)
q=a.ch
q=q==null?f:J.u(q,new A.a5(),s)
s=A.h(q==null?A.a([],t.O):q,!0,s)
q=a.w
p=a.x
o=a.Q
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
h=J.F(h)
for(;h.n();){g=h.gq()
j.push(new A.f(g.a,g.b,g.c))}return new A.eJ(a.fx,a.fy,q,p,a.y,a.z,o,a.as,a.at,e,r,s,n,m,f,l,k,j)},
qH(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a1.a5,d=a1.a3,c=a1.id,b=a1.a8,a=a1.go,a0=a1.ax
a0=a0==null?f:J.u(a0,new A.a3(),t.G)
if(a0==null)a0=A.a([],t.O)
s=t.G
a0=A.h(a0,!0,s)
r=a1.ay
r=r==null?f:J.u(r,new A.a4(),s)
r=A.h(r==null?A.a([],t.O):r,!0,s)
q=a1.ch
q=q==null?f:J.u(q,new A.a5(),s)
s=A.h(q==null?A.a([],t.O):q,!0,s)
q=a1.w
p=a1.x
o=a1.Q
n=a1.a
n===$&&A.b("color")
n=n.t()
m=a1.b
m===$&&A.b("name")
a1.c===$&&A.b("target")
l=A.a([],t.r)
k=a1.d
k===$&&A.b("submobjects")
j=k.length
i=0
for(;i<k.length;k.length===j||(0,A.e)(k),++i)l.push(k[i].t())
k=a1.f
k===$&&A.b("updatingSuspended")
j=A.a([],t.l)
h=a1.r
h===$&&A.b("points")
h=J.F(h)
for(;h.n();){g=h.gq()
j.push(new A.f(g.a,g.b,g.c))}return new A.bJ(e,d,!0,b,a,c,!0,A.aW(t.N,t.h),q,p,a1.y,a1.z,o,a1.as,a1.at,a0,r,s,n,m,f,l,k,j)},
qI(a){var s,r,q,p,o,n,m,l,k,j="(){}[]|.\\"
if(a==="\\over"||a==="\\overline"||a==="\\sqrt"||a==="\\sqrt{"||B.b.bm(a,"_")||B.b.bm(a,"^")||B.b.bm(a,"dot"))a+="{\\quad}"
if(a==="\\substack")a="\\quad"
if(a.length===0)a="\\quad"
if(B.b.Z(a,"\\\\"))a=A.bp(a,"\\\\","\\quad\\\\")
s=t.s
r=A.a([],s)
for(q=t.N,p=A.d1(A.a(a.split("\\left"),s),q),o=p.length,n=0;n<p.length;p.length===o||(0,A.e)(p),++n){m=p[n]
l=J.Y(m)
if(l.gm(m)!==0){l=l.j(m,0)
l=A.ct(j,l,0)}else l=!1
if(l)r.push(m)}k=r.length
r=A.a([],s)
for(s=A.d1(A.a(a.split("\\right"),s),q),q=s.length,n=0;n<s.length;s.length===q||(0,A.e)(s),++n){m=s[n]
p=J.Y(m)
if(p.gm(m)!==0){p=p.j(m,0)
p=A.ct(j,p,0)}else p=!1
if(p)r.push(m)}if(k!==r.length){a=A.bp(a,"\\left","\\big")
a=A.bp(a,"\\right","\\big")}return A.qJ(a)},
qJ(a){var s=a.split("{").length-1-(a.split("\\{").length-1)+(a.split("\\\\{").length-1),r=a.split("}").length-1-(a.split("\\}").length-1)+(a.split("\\\\}").length-1)
for(;r>s;){a="{"+a;++s}for(;s>r;){a+="}";++r}return a},
he(a,b,c,d,e,f){var s,r=null,q=new A.cJ(b,e,f,A.a([],t.s),"","align*",!0,2,r,"",!0,A.aW(t.N,t.h),4,0,!1,0.01,!1,0.000001,4,r,r,r,B.c,$,r,$,$,$)
q.am(B.c,r,r)
s=q.r
s===$&&A.b("points")
if(J.bP(s))q.ei()
q.a=c
q.hC(a,b,c,d,e,f)
return q},
qk(a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=t.N,d=A.h(a4.ce,!0,e),c=A.h(a4.b0,!0,e),b=a4.a5,a=a4.a3,a0=a4.id,a1=a4.a8,a2=a4.go,a3=a4.ax
a3=a3==null?f:J.u(a3,new A.a3(),t.G)
if(a3==null)a3=A.a([],t.O)
s=t.G
a3=A.h(a3,!0,s)
r=a4.ay
r=r==null?f:J.u(r,new A.a4(),s)
r=A.h(r==null?A.a([],t.O):r,!0,s)
q=a4.ch
q=q==null?f:J.u(q,new A.a5(),s)
s=A.h(q==null?A.a([],t.O):q,!0,s)
q=a4.w
p=a4.x
o=a4.Q
n=a4.a
n===$&&A.b("color")
n=n.t()
m=a4.b
m===$&&A.b("name")
a4.c===$&&A.b("target")
l=A.a([],t.r)
k=a4.d
k===$&&A.b("submobjects")
j=k.length
i=0
for(;i<k.length;k.length===j||(0,A.e)(k),++i)l.push(k[i].t())
k=a4.f
k===$&&A.b("updatingSuspended")
j=A.a([],t.l)
h=a4.r
h===$&&A.b("points")
h=J.F(h)
for(;h.n();){g=h.gq()
j.push(new A.f(g.a,g.b,g.c))}return new A.cJ(a4.au,d,a4.aQ,c,b,a,!0,a1,a2,a0,!0,A.aW(e,t.h),q,p,a4.y,a4.z,o,a4.as,a4.at,a3,r,s,n,m,f,l,k,j)},
ql(a,b,c){var s,r,q,p,o,n,m,l=A.nU(a,A.ap("{{(.*?)}}")),k=t.s,j=A.a([],k)
for(s=A.h(c.gbq(),!0,t.N),B.a.N(s,b),r=s.length,q=0;q<s.length;s.length===r||(0,A.e)(s),++q)j.push("("+A.n8(s[q])+")")
p=B.a.aF(j,"|")
o=A.a([],k)
if(p.length!==0){n=A.ap(p)
for(j=l.length,q=0;q<l.length;l.length===j||(0,A.e)(l),++q)B.a.N(o,A.nU(l[q],n))}else o=l
k=A.a([],k)
for(j=o.length,q=0;q<o.length;o.length===j||(0,A.e)(o),++q){m=o[q]
if(J.M(m)!==0)k.push(m)}return k},
qR(a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=t.N,d=A.h(a4.ce,!0,e),c=A.h(a4.b0,!0,e),b=a4.a5,a=a4.a3,a0=a4.id,a1=a4.a8,a2=a4.go,a3=a4.ax
a3=a3==null?f:J.u(a3,new A.a3(),t.G)
if(a3==null)a3=A.a([],t.O)
s=t.G
a3=A.h(a3,!0,s)
r=a4.ay
r=r==null?f:J.u(r,new A.a4(),s)
r=A.h(r==null?A.a([],t.O):r,!0,s)
q=a4.ch
q=q==null?f:J.u(q,new A.a5(),s)
s=A.h(q==null?A.a([],t.O):q,!0,s)
q=a4.w
p=a4.x
o=a4.Q
n=a4.a
n===$&&A.b("color")
n=n.t()
m=a4.b
m===$&&A.b("name")
a4.c===$&&A.b("target")
l=A.a([],t.r)
k=a4.d
k===$&&A.b("submobjects")
j=k.length
i=0
for(;i<k.length;k.length===j||(0,A.e)(k),++i)l.push(k[i].t())
k=a4.f
k===$&&A.b("updatingSuspended")
j=A.a([],t.l)
h=a4.r
h===$&&A.b("points")
h=J.F(h)
for(;h.n();){g=h.gq()
j.push(new A.f(g.a,g.b,g.c))}return new A.eI(a4.au,d,a4.aQ,c,b,a,!0,a1,a2,a0,!0,A.aW(e,t.h),q,p,a4.y,a4.z,o,a4.as,a4.at,a3,r,s,n,m,f,l,k,j)},
eJ:function eJ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
bJ:function bJ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4){var _=this
_.a5=a
_.a3=b
_.a8=null
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
cJ:function cJ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8){var _=this
_.au=a
_.ce=b
_.aQ=c
_.b0=d
_.a5=e
_.a3=f
_.a8=null
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
jZ:function jZ(a,b){this.a=a
this.b=b},
eI:function eI(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8){var _=this
_.au=a
_.ce=b
_.aQ=c
_.b0=d
_.a5=e
_.a3=f
_.a8=null
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
nw(a){var s=new A.dZ($,$,$,!1,a,B.c,$,null,$,$,$)
s.am(B.c,null,null)
s.hB(a)
return s},
q0(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=a.ay
g===$&&A.b("draggedListener")
s=a.ch
s===$&&A.b("pressedListener")
r=a.CW
r===$&&A.b("releasedListener")
q=a.cx
p=a.w.t()
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
i=J.F(i)
for(;i.n();){h=i.gq()
k.push(new A.f(h.a,h.b,h.c))}return new A.dZ(g,s,r,q,p,o,n,null,m,l,k)},
j1(a,b){var s=new A.dS($,$,a,B.c,$,null,$,$,$)
s.am(B.c,null,null)
s.hB(a)
s.lI(a,b)
return s},
pT(a){var s,r,q,p,o,n,m,l,k,j,i=a.ch
i===$&&A.b("onClick")
s=a.ay
s===$&&A.b("releasedListener")
r=a.w.t()
q=a.a
q===$&&A.b("color")
q=q.t()
p=a.b
p===$&&A.b("name")
a.c===$&&A.b("target")
o=A.a([],t.r)
n=a.d
n===$&&A.b("submobjects")
m=n.length
l=0
for(;l<n.length;n.length===m||(0,A.e)(n),++l)o.push(n[l].t())
n=a.f
n===$&&A.b("updatingSuspended")
m=A.a([],t.l)
k=a.r
k===$&&A.b("points")
k=J.F(k)
for(;k.n();){j=k.gq()
m.push(new A.f(j.a,j.b,j.c))}return new A.dS(s,i,r,q,p,null,o,n,m)},
h8:function h8(){},
dZ:function dZ(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
jd:function jd(a){this.a=a},
je:function je(a){this.a=a},
jf:function jf(a){this.a=a},
dS:function dS(a,b,c,d,e,f,g,h,i){var _=this
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
j2:function j2(a){this.a=a},
qm(a){var s,r,q,p,o,n,m,l=a.a
l===$&&A.b("color")
l=l.t()
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
n=J.F(n)
for(;n.n();){m=n.gq()
p.push(new A.f(m.a,m.b,m.c))}return new A.G(l,s,null,r,q,p)},
q6(a){var s,r,q,p,o,n,m,l=a.a
l===$&&A.b("color")
l=l.t()
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
n=J.F(n)
for(;n.n();){m=n.gq()
p.push(new A.f(m.a,m.b,m.c))}return new A.d8(l,s,null,r,q,p)},
G:function G(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=$
_.f=e
_.r=f},
ka:function ka(a){this.a=a},
k9:function k9(a){this.a=a},
k8:function k8(a){this.a=a},
k7:function k7(a){this.a=a},
kb:function kb(a,b){this.a=a
this.b=b},
k3:function k3(a){this.a=a},
k4:function k4(a){this.a=a},
k5:function k5(){},
k6:function k6(a){this.a=a},
d8:function d8(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=$
_.f=e
_.r=f},
r1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a.ax
d=d==null?e:J.u(d,new A.a3(),t.G)
if(d==null)d=A.a([],t.O)
s=t.G
d=A.h(d,!0,s)
r=a.ay
r=r==null?e:J.u(r,new A.a4(),s)
r=A.h(r==null?A.a([],t.O):r,!0,s)
q=a.ch
q=q==null?e:J.u(q,new A.a5(),s)
s=A.h(q==null?A.a([],t.O):q,!0,s)
q=a.gap()
p=a.x
o=a.gdV()
n=a.Q
m=a.a
m===$&&A.b("color")
m=m.t()
l=a.b
l===$&&A.b("name")
a.c===$&&A.b("target")
k=A.a([],t.r)
j=a.d
j===$&&A.b("submobjects")
i=j.length
h=0
for(;h<j.length;j.length===i||(0,A.e)(j),++h)k.push(j[h].t())
j=a.f
j===$&&A.b("updatingSuspended")
i=A.a([],t.l)
g=a.r
g===$&&A.b("points")
g=J.F(g)
for(;g.n();){f=g.gq()
i.push(new A.f(f.a,f.b,f.c))}return new A.R(q,p,o,a.z,n,a.as,a.at,d,r,s,m,l,e,k,j,i)},
o3(a){var s,r,q,p,o=a.a
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
return new A.ci(o,s,a.c,r,a.e)},
i1(a){var s=null,r=new A.bZ(4,0,!1,0.01,!1,0.000001,4,s,s,s,B.c,$,s,$,$,$)
r.am(B.c,s,s)
r.hF(a)
return r},
r0(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.ax
e=e==null?f:J.u(e,new A.a3(),t.G)
if(e==null)e=A.a([],t.O)
s=t.G
e=A.h(e,!0,s)
r=a.ay
r=r==null?f:J.u(r,new A.a4(),s)
r=A.h(r==null?A.a([],t.O):r,!0,s)
q=a.ch
q=q==null?f:J.u(q,new A.a5(),s)
s=A.h(q==null?A.a([],t.O):q,!0,s)
q=a.w
p=a.x
o=a.Q
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
h=J.F(h)
for(;h.n();){g=h.gq()
j.push(new A.f(g.a,g.b,g.c))}return new A.bZ(q,p,a.y,a.z,o,a.as,a.at,e,r,s,n,m,f,l,k,j)},
o4(a){var s=null,r=new A.eO(0.01,0.01,4,0,!1,0.01,!1,0.000001,4,s,s,s,B.c,$,s,$,$,$)
r.am(B.c,s,s)
r.saJ(t.y.a(A.a([a],t.l)))
return r},
r2(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.ax
e=e==null?f:J.u(e,new A.a3(),t.G)
if(e==null)e=A.a([],t.O)
s=t.G
e=A.h(e,!0,s)
r=a.ay
r=r==null?f:J.u(r,new A.a4(),s)
r=A.h(r==null?A.a([],t.O):r,!0,s)
q=a.ch
q=q==null?f:J.u(q,new A.a5(),s)
s=A.h(q==null?A.a([],t.O):q,!0,s)
q=a.w
p=a.x
o=a.Q
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
h=J.F(h)
for(;h.n();){g=h.gq()
j.push(new A.f(g.a,g.b,g.c))}return new A.eO(a.fx,a.fy,q,p,a.y,a.z,o,a.as,a.at,e,r,s,n,m,f,l,k,j)},
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
a3:function a3(){},
a4:function a4(){},
a5:function a5(){},
kW:function kW(){},
kX:function kX(){},
kQ:function kQ(a,b){this.a=a
this.b=b},
kT:function kT(a,b){this.a=a
this.b=b},
kS:function kS(a,b){this.a=a
this.b=b},
kM:function kM(a,b){this.a=a
this.b=b},
kR:function kR(){},
kP:function kP(a){this.a=a},
kN:function kN(){},
kO:function kO(){},
kV:function kV(){},
kU:function kU(){},
ci:function ci(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
bZ:function bZ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
eO:function eO(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
dI:function dI(){},
pU(){return new A.fI($.dG())},
fI:function fI(a){this.e=$
this.b=a
this.d=$},
j6:function j6(){},
hD:function hD(){},
kp:function kp(a){this.a=a},
K(a,b,c){var s,r=A.a([],t.t)
if(c>0)for(s=b;s<a;s+=c)B.a.p(r,s)
else for(s=b;s>a;s+=c)B.a.p(r,s)
return r},
fl(a,b){var s,r,q,p=J.Y(a)
if(p.gag(a))return A.a([],b.h("z<O<i,0>>"))
s=A.a([],b.h("z<O<i,0>>"))
for(r=t.pc.Y(b).h("O<1,2>"),q=0;q<p.gm(a);++q)B.a.p(s,new A.O(q,p.j(a,q),r))
return s},
mb(a,b){if(a.length===0)return b.a(0)
return B.a.ba(a,new A.mc(b))},
iH(a,b,c){var s,r,q,p,o,n,m,l=A.a([],t.b)
for(s=A.K(a,0,1),r=s.length,q=a-1,p=t.n,o=0;o<s.length;s.length===r||(0,A.e)(s),++o){n=s[o]
if(typeof n!=="number")return n.bv()
m=n/q
l.push(A.a([c*(1-m)+b*m],p))}return A.aR(null,l)},
lN(a,b,c){var s,r,q,p,o=A.K(B.h.fm((a-b)/c),0,1),n=A.a([],t.b)
for(s=o.length,r=t.n,q=0;q<o.length;o.length===s||(0,A.e)(o),++q){p=o[q]
if(typeof p!=="number")return p.A()
n.push(A.a([p*c+b],r))}return A.aR(null,n)},
d0(a,b,c){var s,r,q,p,o,n,m=J.Y(a)
if(m.gag(a))return a
s=m.gm(a)
if(s>b)throw A.d("Trying to stretch an array to a length shorter than its own")
r=A.K(b,0,1)
q=A.w(r)
p=q.h("I<1,t>")
o=new A.I(r,q.h("t(1)").a(new A.ma(b,s)),p)
q=A.a([],c.h("z<0>"))
for(r=new A.L(o,o.gm(o),p.h("L<D.E>")),p=p.h("D.E");r.n();){n=r.d
q.push(m.j(a,B.h.bt(n==null?p.a(n):n)))}return q},
tN(a,b,c,d){var s,r,q,p,o,n,m,l=Math.max(a.length,b.length),k=A.a([],c.h("z<0>"))
for(s=A.K(l,0,1),r=s.length,q=0;q<s.length;s.length===r||(0,A.e)(s),++q){p=s[q]
o=a.length
if(typeof p!=="number")return p.A()
n=B.h.b2(p*o,l)
if(!(n>=0&&n<o))return A.c(a,n)
k.push(a[n])}s=A.a([],d.h("z<0>"))
for(r=A.K(l,0,1),o=r.length,q=0;q<r.length;r.length===o||(0,A.e)(r),++q){p=r[q]
n=b.length
if(typeof p!=="number")return p.A()
m=B.h.b2(p*n,l)
if(!(m>=0&&m<n))return A.c(b,m)
s.push(b[m])}return new A.O(k,s,c.h("@<l<0>>").Y(d.h("l<0>")).h("O<1,2>"))},
d1(a,b){var s=A.jV(a,new A.md(b),b)
return A.h(s,!0,s.$ti.h("j.E"))},
na(a,b){var s=A.h(a,!0,b)
if(0>=s.length)return A.c(s,-1)
s.pop()
return s},
pk(a,b){var s,r,q,p=A.a([],b.h("z<0>")),o=A.nD(b)
for(s=A.w(a).h("X<1>"),r=new A.X(a,s),r=new A.L(r,r.gm(r),s.h("L<D.E>")),s=s.h("D.E");r.n();){q=r.d
if(q==null)q=s.a(q)
if(!o.F(0,q)){B.a.p(p,q)
o.p(0,q)}}s=b.h("X<0>")
return A.h(new A.X(p,s),!0,s.h("D.E"))},
oN(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=A.a([],c.h("z<l<0>>"))
for(s=A.K(a.length,0,1),r=s.length,q=c.h("z<0>"),p=0;p<s.length;s.length===r||(0,A.e)(s),++p){o=s[p]
n=A.a([],q)
for(m=A.K(b,0,1),l=m.length,k=0;k<m.length;m.length===l||(0,A.e)(m),++k){j=m[k]
if(typeof o!=="number")return o.J()
if(typeof j!=="number")return A.bB(j)
n.push(B.a.j(a,B.h.a6(o+j,a.length)))}i.push(n)}return i},
mc:function mc(a){this.a=a},
ma:function ma(a,b){this.a=a
this.b=b},
md:function md(a){this.a=a},
n3(a,b,c){var s,r,q=t.bd
q=A.iG(A.aR(null,J.u(a,new A.m2(),q).aC(0)),A.aR(null,J.u(b,new A.m3(),q).aC(0)),c,t.A).a
q===$&&A.b("values")
s=A.w(q)
r=s.h("I<1,P>")
return A.h(new A.I(q,s.h("P(1)").a(new A.m4()),r),!0,r.h("D.E"))},
iG(a,b,c,d){return d.a(J.mf(J.d2(a,1-c),J.d2(b,c)))},
p1(a,b,c,d){return d.a(J.mf(J.d2(a,1-c),J.d2(b,c)))},
n2(a,b,c){if(c>=1)return new A.O(b-1,1,t.d7)
if(c<=0)return new A.O(a,0,t.d7)
return new A.O(J.pI(A.iG(a,b,c,t.W)),B.h.a6((b-a)*c,1),t.d7)},
mY(a){return new A.lP(a,a.length-1)},
m8(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(b===1){s=A.a([],t.l)
for(r=A.K(J.M(a.a),0,1),q=r.length,p=0;p<r.length;r.length===q||(0,A.e)(r),++p){if(a.gm(a)===0)A.N(A.an())
s.push(a.j(0,a.gm(a)-1))}return s}s=t.l
r=A.a([],s)
for(q=a.a,o=J.Y(q),n=A.K(o.gm(q),0,1),m=n.length,l=a.$ti,k=l.h("v.E"),l=l.h("aK<v.E>"),p=0;p<n.length;n.length===m||(0,A.e)(n),++p){j=A.a0(n[p])
i=new A.aK(a,j,null,l)
i.cq(a,j,null,k)
r.push(A.mY(i.aC(0)).$1(b))}h=(c-b)/(1-b)
s=A.a([],s)
for(q=A.K(o.gm(q),0,1),o=q.length,n=t.V,m=t.mN,p=0;p<q.length;q.length===o||(0,A.e)(q),++p){g=q[p]
if(typeof g!=="number")return g.J()
l=A.a0(g+1)
A.aF(0,l,r.length)
k=new A.aK(r,0,l,m)
k.cq(r,0,l,n)
s.push(A.mY(k.aC(0)).$1(h))}return s},
m2:function m2(){},
m3:function m3(){},
m4:function m4(){},
lP:function lP(a,b){this.a=a
this.b=b},
lO:function lO(){},
ox(a){var s,r,q,p,o,n,m,l,k,j,i
if(B.b.Z(a,"#"))a=B.b.jN(a,"#","")
s=a.length
if(!B.a.F(A.a([3,4,6,8],t.t),s))throw A.d("Hex string #"+a+" not well formated")
if(s===3||s===4){s=t.s
r=A.a([],s)
for(q=a.split(""),p=q.length,o=0;o<p;++o){n=q[o]
B.a.N(r,A.a([n,n],s))}a=B.a.aF(r,"")}if(a.length===6)a+="ff"
m=new A.lC()
l=B.b.B(a,0,2)
k=B.b.B(a,2,4)
j=B.b.B(a,4,6)
i=B.b.B(a,6,8)
return new A.P(m.$1(l),m.$1(k),m.$1(j),m.$1(i))},
P:function P(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lC:function lC(){},
d5:function d5(a,b){this.a=a
this.b=b},
mw(a){switch(a){case 0:break
case 1:break
case 2:break
default:break}return new A.kc(a)},
bu:function bu(a){this.b=a},
b6:function b6(){},
jh:function jh(){this.a=$},
b7:function b7(a,b,c){this.a=a
this.b=b
this.$ti=c},
hf:function hf(){},
eo:function eo(a,b,c){this.c=a
this.a=b
this.b=c},
ca:function ca(a,b,c){this.c=a
this.a=b
this.b=c},
cb:function cb(a,b,c){this.c=a
this.a=b
this.b=c},
c9:function c9(a,b,c){this.c=a
this.a=b
this.b=c},
kc:function kc(a){this.a=a},
nU(a,b){var s,r,q,p,o,n,m,l,k,j,i=B.b.cp(a,b),h=b.cb(0,a),g=A.h(h,!0,A.A(h).h("j.E"))
h=i.length
s=g.length
r=A.a([],t.s)
for(h=A.K(h+s,0,1),s=h.length,q=t.N,p=0;p<h.length;h.length===s||(0,A.e)(h),++p){o=h[p]
if(typeof o!=="number")return o.a6()
if(B.h.a6(o,2)===0){n=B.h.aV(o,2)
if(!(n>=0&&n<i.length))return A.c(i,n)
B.a.p(r,i[n])}else{n=B.h.aV(o-1,2)
if(!(n>=0&&n<g.length))return A.c(g,n)
m=g[n]
l=m.hg(A.K(m.ghf()+1,1,1))
k=A.w(l)
j=k.h("aq<1>")
j=A.j7(new A.aq(l,k.h("B(1)").a(new A.kz()),j),j.h("j.E"),q)
B.a.N(r,A.h(j,!0,A.A(j).h("j.E")))}}return r},
kz:function kz(){},
oQ(a,b,c){var s,r
if(c){if(!$.iD.aj(a)){s=t.S
$.iD.v(0,a,A.aW(s,s))}if(!$.iD.j(0,a).aj(b)){s=$.iD.j(0,a)
s.toString
s.v(0,b,A.oQ(a,b,!1))}s=$.iD.j(0,a).j(0,b)
s.toString
return s}if(a<b)return 0
if(b===0)return 1
s=t.S
r=B.a.ea(A.K(b+1,1,1),1,new A.lQ(),s)
return B.e.b2(B.a.ea(A.K(a-b,a,-1),1,new A.lR(),s),r)},
iI(a,b,c,d,e){return(a-b)/(c-b)*(e-d)+d},
lQ:function lQ(){},
lR:function lR(){},
aR(a,b){var s,r,q=new A.bs(b)
if(a==null){s=b.length
r=s!==0?J.M(B.a.gaq(b)):0
a=new A.O(s,r,t.o)
s=a}else s=a
q.slV(t.o.a(s))
return q},
fA(a,b){var s,r,q,p,o,n,m,l,k=b.b,j=A.a([],t.b)
for(s=A.K(b.a,0,1),r=s.length,q=t.n,p=0;p<s.length;s.length===r||(0,A.e)(s),++p){o=A.a([],q)
for(n=A.K(k,0,1),m=n.length,l=0;l<n.length;n.length===m||(0,A.e)(n),++l)o.push(a)
j.push(o)}return A.aR(b,j)},
iQ(a){var s,r,q,p,o=A.a([],t.b)
for(s=J.aP(a),r=s.gH(a),q=t.n;r.n();){p=r.gq()
o.push(A.a([p.a,p.b,p.c],q))}return A.aR(new A.O(s.gm(a),3,t.o),o)},
dK(a){var s,r,q,p,o,n,m,l,k,j,i=A.a([],t.b)
for(s=A.K(a,0,1),r=s.length,q=t.n,p=0;p<s.length;s.length===r||(0,A.e)(s),++p){o=s[p]
n=A.a([],q)
for(m=A.K(a,0,1),l=m.length,k=J.bo(o),j=0;j<m.length;m.length===l||(0,A.e)(m),++j)if(k.V(o,m[j]))n.push(1)
else n.push(0)
i.push(n)}return A.aR(new A.O(a,a,t.o),i)},
tT(a,b){var s=A.pf(a),r=A.u2(b)
return B.a.ba(A.a([r,s,r.kd()],t.fp),new A.m9())},
pf(a){var s=t.n
return A.aR(null,A.a([A.a([Math.cos(a),-Math.sin(a),0],s),A.a([Math.sin(a),Math.cos(a),0],s),A.a([0,0,1],s)],t.b))},
u2(a){var s,r,q,p,o,n
if(a.b1()===0)return A.dK(3)
s=a.bv(0,Math.sqrt(a.b1()))
r=Math.acos(s.c)
if(s.a!==0||s.b!==0){q=s.k5(0)
p=q.bv(0,Math.sqrt(q.b1()))
o=Math.acos(p.a)
if(p.b<0)o*=-1}else o=0
q=t.n
n=A.aR(null,A.a([A.a([Math.cos(r),0,Math.sin(r)],q),A.a([0,1,0],q),A.a([-Math.sin(r),0,Math.cos(r)],q)],t.b))
return A.pf(o).bg(n)},
tQ(a,b){var s,r,q,p,o=a/2,n=b.bv(0,Math.sqrt(b.b1())).A(0,Math.sin(o)),m=A.a([],t.b)
for(s=[n.a,n.b,n.c],r=s.length,q=t.n,p=0;p<r;++p)m.push(A.a([s[p]],q))
m.push(A.a([Math.cos(o)],q))
return A.aR(null,m)},
to(a,b){var s,r,q,p,o,n,m,l,k,j=6.283185307179586/a,i=t.hR,h=A.a([],i)
for(s=A.K(a,0,1),r=s.length,q=0;q<s.length;s.length===r||(0,A.e)(s),++q){p=s[q]
if(typeof p!=="number")return A.bB(p)
o=j*p
h.push(new A.d5(Math.cos(o),Math.sin(o)))}i=A.a([],i)
for(s=h.length,r=b.a,o=b.b,q=0;q<h.length;h.length===s||(0,A.e)(h),++q){n=h[q]
m=n.a
l=n.b
i.push(new A.d5(m*r-l*o,m*o+l*r))}h=A.a([],t.l)
for(s=i.length,q=0;q<i.length;i.length===s||(0,A.e)(i),++q){k=i[q]
h.push(new A.f(k.a,k.b,0))}return h},
bs:function bs(a){this.a=a
this.b=$},
iW:function iW(a){this.a=a},
iX:function iX(a){this.a=a},
iV:function iV(a){this.a=a},
iU:function iU(a,b){this.a=a
this.b=b},
iT:function iT(a){this.a=a},
iY:function iY(a){this.a=a},
iS:function iS(){},
iR:function iR(a){this.a=a},
m9:function m9(){},
f:function f(a,b,c){this.a=a
this.b=b
this.c=c},
kY:function kY(a){this.a=a},
oF(a){if(t.jJ.b(a))return a
throw A.d(A.mi(a,"uri","Value must be a String or a Uri"))},
oL(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=1;r<s;++r){if(b[r]==null||b[r-1]!=null)continue
for(;s>=1;s=q){q=s-1
if(b[q]!=null)break}p=new A.a2("")
o=""+(a+"(")
p.a=o
n=A.w(b)
m=n.h("aK<1>")
l=new A.aK(b,0,s,m)
l.cq(b,0,s,n.c)
m=o+new A.I(l,m.h("n(D.E)").a(new A.lL()),m.h("I<D.E,n>")).aF(0,", ")
p.a=m
p.a=m+("): part "+(r-1)+" was null, but part "+r+" was not.")
throw A.d(A.a8(p.l(0),null))}},
j9:function j9(a){this.a=a},
ja:function ja(){},
jb:function jb(){},
lL:function lL(){},
cC:function cC(){},
hr(a,b){var s,r,q,p,o,n=b.ki(a)
b.c2(a)
if(n!=null)a=B.b.av(a,n.length)
s=t.s
r=A.a([],s)
q=A.a([],s)
s=a.length
if(s!==0&&b.bK(B.b.E(a,0))){if(0>=s)return A.c(a,0)
B.a.p(q,a[0])
p=1}else{B.a.p(q,"")
p=0}for(o=p;o<s;++o)if(b.bK(B.b.E(a,o))){B.a.p(r,B.b.B(a,p,o))
B.a.p(q,a[o])
p=o+1}if(p<s){B.a.p(r,B.b.av(a,p))
B.a.p(q,"")}return new A.kf(b,n,r,q)},
kf:function kf(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
nH(a){return new A.ht(a)},
ht:function ht(a){this.a=a},
qQ(){var s,r,q,p,o,n,m,l,k=null
if(A.mD().gaT()!=="file")return $.fn()
s=A.mD()
if(!B.b.bm(s.gaS(s),"/"))return $.fn()
r=A.op(k,0,0)
q=A.om(k,0,0,!1)
p=A.oo(k,0,0,k)
o=A.ol(k,0,0)
n=A.mO(k,"")
if(q==null)s=r.length!==0||n!=null||!1
else s=!1
if(s)q=""
s=q==null
m=!s
l=A.on("a/b",0,3,k,"",m)
if(s&&!B.b.Z(l,"/"))l=A.mQ(l,m)
else l=A.c0(l)
if(A.lv("",r,s&&B.b.Z(l,"//")?"":q,n,l,p,o).h2()==="a\\b")return $.iJ()
return $.pm()},
kA:function kA(){},
hw:function hw(a,b,c){this.d=a
this.e=b
this.f=c},
hZ:function hZ(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d},
i4:function i4(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d},
qM(a,b){var s=A.a([0],t.t)
s=new A.hH(b,s,new Uint32Array(A.mS(J.fo(a))))
s.hE(a,b)
return s},
c5(a,b){if(b<0)A.N(A.aA("Offset may not be negative, was "+b+"."))
else if(b>a.c.length)A.N(A.aA("Offset "+b+u.D+a.gm(a)+"."))
return new A.b2(a,b)},
mF(a,b,c){if(c<b)A.N(A.a8("End "+c+" must come after start "+b+".",null))
else if(c>a.c.length)A.N(A.aA("End "+c+u.D+a.gm(a)+"."))
else if(b<0)A.N(A.aA("Start may not be negative, was "+b+"."))
return new A.ar(a,b,c)},
hH:function hH(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
b2:function b2(a,b){this.a=a
this.b=b},
ar:function ar(a,b,c){this.a=a
this.b=b
this.c=c},
q7(a,b){var s=A.q8(A.a([A.r8(a,!0)],t.pg)),r=new A.jE(b).$0(),q=B.e.l(B.a.gu(s).b+1),p=A.q9(s)?0:3,o=A.w(s)
return new A.jk(s,r,null,1+Math.max(q.length,p),new A.I(s,o.h("i(1)").a(new A.jm()),o.h("I<1,i>")).ba(0,B.a5),!A.tH(new A.I(s,o.h("H?(1)").a(new A.jn()),o.h("I<1,H?>"))),new A.a2(""))},
q9(a){var s,r,q
for(s=0;s<a.length-1;){r=a[s];++s
q=a[s]
if(r.b+1!==q.b&&J.W(r.c,q.c))return!1}return!0},
q8(a){var s,r,q,p=A.tB(a,new A.jp(),t.C,t.K)
for(s=p.gjY(p),r=A.A(s),r=r.h("@<1>").Y(r.z[1]),s=new A.cI(J.F(s.a),s.b,r.h("cI<1,2>")),r=r.z[1];s.n();){q=s.a
if(q==null)q=r.a(q)
J.nk(q,new A.jq())}s=p.ge0(p)
r=A.A(s)
q=r.h("e4<j.E,be>")
return A.h(new A.e4(s,r.h("j<be>(j.E)").a(new A.jr()),q),!0,q.h("j.E"))},
r8(a,b){var s=new A.ll(a).$0()
return new A.aB(s,!0,null)},
ra(a){var s,r,q,p,o,n,m=a.gX(a)
if(!B.b.F(m,"\r\n"))return a
s=a.gU()
r=s.gaA(s)
for(s=m.length-1,q=0;q<s;++q)if(B.b.E(m,q)===13&&B.b.E(m,q+1)===10)--r
s=a.gS(a)
p=a.ga4()
o=a.gU().gad()
p=A.hI(r,a.gU().gan(),o,p)
o=A.bp(m,"\r\n","\n")
n=a.gb_()
return A.kv(s,p,o,A.bp(n,"\r\n","\n"))},
rb(a){var s,r,q,p,o,n,m
if(!B.b.bm(a.gb_(),"\n"))return a
if(B.b.bm(a.gX(a),"\n\n"))return a
s=B.b.B(a.gb_(),0,a.gb_().length-1)
r=a.gX(a)
q=a.gS(a)
p=a.gU()
if(B.b.bm(a.gX(a),"\n")){o=A.lV(a.gb_(),a.gX(a),a.gS(a).gan())
o.toString
o=o+a.gS(a).gan()+a.gm(a)===a.gb_().length}else o=!1
if(o){r=B.b.B(a.gX(a),0,a.gX(a).length-1)
if(r.length===0)p=q
else{o=a.gU()
o=o.gaA(o)
n=a.ga4()
m=a.gU().gad()
p=A.hI(o-1,A.o8(s),m-1,n)
o=a.gS(a)
o=o.gaA(o)
n=a.gU()
q=o===n.gaA(n)?p:a.gS(a)}}return A.kv(q,p,r,s)},
r9(a){var s,r,q,p,o
if(a.gU().gan()!==0)return a
if(a.gU().gad()===a.gS(a).gad())return a
s=B.b.B(a.gX(a),0,a.gX(a).length-1)
r=a.gS(a)
q=a.gU()
q=q.gaA(q)
p=a.ga4()
o=a.gU().gad()
p=A.hI(q-1,s.length-B.b.fR(s,"\n")-1,o-1,p)
return A.kv(r,p,s,B.b.bm(a.gb_(),"\n")?B.b.B(a.gb_(),0,a.gb_().length-1):a.gb_())},
o8(a){var s=a.length
if(s===0)return 0
else if(B.b.I(a,s-1)===10)return s===1?0:s-B.b.eg(a,"\n",s-2)-1
else return s-B.b.fR(a,"\n")-1},
jk:function jk(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
jE:function jE(a){this.a=a},
jm:function jm(){},
jl:function jl(){},
jn:function jn(){},
jp:function jp(){},
jq:function jq(){},
jr:function jr(){},
jo:function jo(a){this.a=a},
jF:function jF(){},
js:function js(a){this.a=a},
jz:function jz(a,b,c){this.a=a
this.b=b
this.c=c},
jA:function jA(a,b){this.a=a
this.b=b},
jB:function jB(a){this.a=a},
jC:function jC(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
jx:function jx(a,b){this.a=a
this.b=b},
jy:function jy(a,b){this.a=a
this.b=b},
jt:function jt(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ju:function ju(a,b,c){this.a=a
this.b=b
this.c=c},
jv:function jv(a,b,c){this.a=a
this.b=b
this.c=c},
jw:function jw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jD:function jD(a,b,c){this.a=a
this.b=b
this.c=c},
aB:function aB(a,b,c){this.a=a
this.b=b
this.c=c},
ll:function ll(a){this.a=a},
be:function be(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hI(a,b,c,d){if(a<0)A.N(A.aA("Offset may not be negative, was "+a+"."))
else if(c<0)A.N(A.aA("Line may not be negative, was "+c+"."))
else if(b<0)A.N(A.aA("Column may not be negative, was "+b+"."))
return new A.by(d,a,c,b)},
by:function by(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hJ:function hJ(){},
hK:function hK(){},
eD:function eD(){},
kv(a,b,c,d){var s=new A.bL(d,a,b,c)
s.lR(a,b,c)
if(!B.b.F(d,c))A.N(A.a8('The context line "'+d+'" must contain "'+c+'".',null))
if(A.lV(d,c,a.gan())==null)A.N(A.a8('The span text "'+c+'" must start at column '+(a.gan()+1)+' in a line within "'+d+'".',null))
return s},
bL:function bL(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
O:function O(a,b,c){this.a=a
this.b=b
this.$ti=c},
cP:function cP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ds:function ds(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
tL(){var s,r,q,p,o,n="align*",m="renderer",l=t.N
$.bK.v(0,n,A.aW(l,l))
$.bK.v(0,"center",A.aW(l,l))
$.bK.j(0,n).v(0,"\\hat{\\imath}","<?xml version='1.0' encoding='UTF-8'?>\n<!-- This file was generated by dvisvgm 2.13.4 -->\n<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='4.98132pt' height='6.863061pt' viewBox='169.64163 -6.863061 4.98132 6.863061'>\n<defs>\n<path id='g0-123' d='M2.919054-1.424658C2.919054-1.524284 2.82939-1.524284 2.799502-1.524284C2.699875-1.524284 2.699875-1.494396 2.650062-1.344956C2.470735-.71731 2.141968-.109589 1.633873-.109589C1.464508-.109589 1.39477-.209215 1.39477-.438356C1.39477-.687422 1.454545-.826899 1.683686-1.43462L2.072229-2.480697C2.191781-2.769614 2.191781-2.789539 2.291407-3.058531C2.371108-3.257783 2.420922-3.39726 2.420922-3.58655C2.420922-4.034869 2.102117-4.403487 1.603985-4.403487C.667497-4.403487 .288917-2.958904 .288917-2.86924C.288917-2.769614 .408468-2.769614 .408468-2.769614C.508095-2.769614 .518057-2.789539 .56787-2.948941C.836862-3.88543 1.235367-4.184309 1.574097-4.184309C1.653798-4.184309 1.823163-4.184309 1.823163-3.865504C1.823163-3.656289 1.753425-3.447073 1.713574-3.347447C1.633873-3.088418 1.185554-1.932752 1.026152-1.504359C.926526-1.24533 .797011-.916563 .797011-.707347C.797011-.239103 1.135741 .109589 1.613948 .109589C2.550436 .109589 2.919054-1.334994 2.919054-1.424658Z'/>\n<path id='g1-94' d='M4.004981-5.280199L2.49066-6.894147L.976339-5.280199L1.105853-5.140722L2.49066-6.216687L3.875467-5.140722L4.004981-5.280199Z'/>\n</defs>\n<g id='page1'>\n<use x='169.64163' y='-.000046' xlink:href='#g1-94'/>\n<use x='170.249276' y='0' xlink:href='#g0-123'/>\n</g>\n</svg>")
$.bK.j(0,n).v(0,"\\hat{\\jmath}","<?xml version='1.0' encoding='UTF-8'?>\n<!-- This file was generated by dvisvgm 2.13.4 -->\n<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='5.233882pt' height='8.800243pt' viewBox='169.942565 -6.863061 5.233882 8.800243'>\n<defs>\n<path id='g1-94' d='M4.004981-5.280199L2.49066-6.894147L.976339-5.280199L1.105853-5.140722L2.49066-6.216687L3.875467-5.140722L4.004981-5.280199Z'/>\n<path id='g0-124' d='M3.5467-3.118306C3.596513-3.317559 3.596513-3.457036 3.596513-3.486924C3.596513-4.054795 3.178082-4.403487 2.67995-4.403487C1.653798-4.403487 1.085928-2.948941 1.085928-2.86924C1.085928-2.769614 1.205479-2.769614 1.205479-2.769614C1.285181-2.769614 1.295143-2.779577 1.384807-2.968867C1.723537-3.765878 2.211706-4.184309 2.650062-4.184309C2.789539-4.184309 2.968867-4.154421 2.968867-3.726027C2.968867-3.496887 2.938979-3.387298 2.899128-3.217933L1.96264 .498132C1.783313 1.205479 1.384807 1.823163 .816936 1.823163C.737235 1.823163 .52802 1.8132 .358655 1.733499C.587796 1.673724 .787049 1.454545 .787049 1.205479C.787049 1.046077 .67746 .856787 .408468 .856787C.169365 .856787-.129514 1.066002-.129514 1.424658C-.129514 1.902864 .428394 2.042341 .816936 2.042341C1.574097 2.042341 2.400996 1.444583 2.630137 .52802L3.5467-3.118306Z'/>\n</defs>\n<g id='page1'>\n<use x='170.195127' y='-.000046' xlink:href='#g1-94'/>\n<use x='169.942565' y='0' xlink:href='#g0-124'/>\n</g>\n</svg>")
$.bK.j(0,"center").v(0,"Reset","<?xml version='1.0' encoding='UTF-8'?>\n<!-- This file was generated by dvisvgm 2.13.4 -->\n<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='23.993534pt' height='6.863016pt' viewBox='159.993287 -6.863016 23.993534 6.863016'>\n<defs>\n<path id='g0-82' d='M7.292653-.876712C7.292653-.936488 7.292653-1.046077 7.163138-1.046077C7.053549-1.046077 7.053549-.956413 7.043587-.886675C6.983811-.179328 6.635118 0 6.386052 0C5.897883 0 5.818182-.508095 5.678705-1.43462L5.549191-2.231631C5.369863-2.86924 4.881694-3.198007 4.333748-3.387298C5.300125-3.626401 6.07721-4.234122 6.07721-5.011208C6.07721-5.967621 4.941469-6.804483 3.476961-6.804483H.348692V-6.495641H.587796C1.354919-6.495641 1.374844-6.386052 1.374844-6.027397V-.777086C1.374844-.418431 1.354919-.308842 .587796-.308842H.348692V0C.707347-.029888 1.414695-.029888 1.803238-.029888S2.899128-.029888 3.257783 0V-.308842H3.01868C2.251557-.308842 2.231631-.418431 2.231631-.777086V-3.297634H3.377335C3.536737-3.297634 3.955168-3.297634 4.303861-2.958904C4.682441-2.600249 4.682441-2.291407 4.682441-1.62391C4.682441-.976339 4.682441-.577833 5.090909-.199253C5.499377 .159402 6.047323 .219178 6.346202 .219178C7.123288 .219178 7.292653-.597758 7.292653-.876712ZM5.051059-5.011208C5.051059-4.323786 4.811955-3.516812 3.337484-3.516812H2.231631V-6.097136C2.231631-6.326276 2.231631-6.445828 2.450809-6.475716C2.550436-6.495641 2.839352-6.495641 3.038605-6.495641C3.935243-6.495641 5.051059-6.455791 5.051059-5.011208Z'/>\n<path id='g0-101' d='M4.134496-1.185554C4.134496-1.285181 4.054795-1.305106 4.004981-1.305106C3.915318-1.305106 3.895392-1.24533 3.875467-1.165629C3.526775-.139477 2.630137-.139477 2.530511-.139477C2.032379-.139477 1.633873-.438356 1.404732-.806974C1.105853-1.285181 1.105853-1.942715 1.105853-2.30137H3.88543C4.104608-2.30137 4.134496-2.30137 4.134496-2.510585C4.134496-3.496887 3.596513-4.463263 2.351183-4.463263C1.195517-4.463263 .278954-3.437111 .278954-2.191781C.278954-.856787 1.325031 .109589 2.470735 .109589C3.686177 .109589 4.134496-.996264 4.134496-1.185554ZM3.476961-2.510585H1.115816C1.175592-3.995019 2.012453-4.244085 2.351183-4.244085C3.377335-4.244085 3.476961-2.899128 3.476961-2.510585Z'/>\n<path id='g0-115' d='M3.58655-1.275218C3.58655-1.803238 3.287671-2.102117 3.16812-2.221669C2.839352-2.540473 2.450809-2.620174 2.032379-2.699875C1.474471-2.809465 .806974-2.938979 .806974-3.516812C.806974-3.865504 1.066002-4.273973 1.92279-4.273973C3.01868-4.273973 3.068493-3.377335 3.088418-3.068493C3.098381-2.978829 3.20797-2.978829 3.20797-2.978829C3.337484-2.978829 3.337484-3.028643 3.337484-3.217933V-4.224159C3.337484-4.393524 3.337484-4.463263 3.227895-4.463263C3.178082-4.463263 3.158157-4.463263 3.028643-4.343711C2.998755-4.303861 2.899128-4.214197 2.859278-4.184309C2.480697-4.463263 2.072229-4.463263 1.92279-4.463263C.707347-4.463263 .328767-3.795766 .328767-3.237858C.328767-2.889166 .488169-2.610212 .757161-2.391034C1.075965-2.132005 1.354919-2.072229 2.072229-1.932752C2.291407-1.892902 3.108344-1.733499 3.108344-1.016189C3.108344-.508095 2.759651-.109589 1.982565-.109589C1.145704-.109589 .787049-.67746 .597758-1.524284C.56787-1.653798 .557908-1.693649 .458281-1.693649C.328767-1.693649 .328767-1.62391 .328767-1.444583V-.129514C.328767 .039851 .328767 .109589 .438356 .109589C.488169 .109589 .498132 .099626 .687422-.089664C.707347-.109589 .707347-.129514 .886675-.318804C1.325031 .099626 1.77335 .109589 1.982565 .109589C3.128269 .109589 3.58655-.557908 3.58655-1.275218Z'/>\n<path id='g0-116' d='M3.307597-1.235367V-1.803238H3.058531V-1.255293C3.058531-.518057 2.759651-.139477 2.391034-.139477C1.723537-.139477 1.723537-1.046077 1.723537-1.215442V-3.985056H3.148194V-4.293898H1.723537V-6.127024H1.474471C1.464508-5.310087 1.165629-4.244085 .18929-4.204234V-3.985056H1.036115V-1.235367C1.036115-.009963 1.96264 .109589 2.321295 .109589C3.028643 .109589 3.307597-.597758 3.307597-1.235367Z'/>\n</defs>\n<g id='page1'>\n<use x='159.993287' y='0' xlink:href='#g0-82'/>\n<use x='167.326779' y='0' xlink:href='#g0-101'/>\n<use x='171.754678' y='0' xlink:href='#g0-115'/>\n<use x='175.684443' y='0' xlink:href='#g0-101'/>\n<use x='180.112342' y='0' xlink:href='#g0-116'/>\n</g>\n</svg>")
$.bK.j(0,n).v(0,"1","<?xml version='1.0' encoding='UTF-8'?>\n<!-- This file was generated by dvisvgm 2.13.4 -->\n<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='4.98132pt' height='6.273719pt' viewBox='169.364882 -6.273719 4.98132 6.273719'>\n<defs>\n<path id='g0-49' d='M4.174346 0V-.308842H3.855542C2.958904-.308842 2.929016-.418431 2.929016-.787049V-6.37609C2.929016-6.615193 2.929016-6.635118 2.699875-6.635118C2.082192-5.997509 1.205479-5.997509 .886675-5.997509V-5.688667C1.085928-5.688667 1.673724-5.688667 2.191781-5.947696V-.787049C2.191781-.428394 2.161893-.308842 1.265255-.308842H.946451V0C1.295143-.029888 2.161893-.029888 2.560399-.029888S3.825654-.029888 4.174346 0Z'/>\n</defs>\n<g id='page1'>\n<use x='169.364882' y='0' xlink:href='#g0-49'/>\n</g>\n</svg>")
$.bK.j(0,n).v(0,"2","<?xml version='1.0' encoding='UTF-8'?>\n<!-- This file was generated by dvisvgm 2.13.4 -->\n<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='4.98132pt' height='6.273719pt' viewBox='169.364882 -6.273719 4.98132 6.273719'>\n<defs>\n<path id='g0-50' d='M4.473225-1.733499H4.224159C4.174346-1.43462 4.104608-.996264 4.004981-.846824C3.935243-.767123 3.277709-.767123 3.058531-.767123H1.265255L2.321295-1.793275C3.875467-3.16812 4.473225-3.706102 4.473225-4.702366C4.473225-5.838107 3.576588-6.635118 2.361146-6.635118C1.235367-6.635118 .498132-5.718555 .498132-4.83188C.498132-4.273973 .996264-4.273973 1.026152-4.273973C1.195517-4.273973 1.544209-4.393524 1.544209-4.801993C1.544209-5.061021 1.364882-5.32005 1.016189-5.32005C.936488-5.32005 .916563-5.32005 .886675-5.310087C1.115816-5.957659 1.653798-6.326276 2.231631-6.326276C3.138232-6.326276 3.566625-5.519303 3.566625-4.702366C3.566625-3.905355 3.068493-3.118306 2.520548-2.500623L.607721-.368618C.498132-.259029 .498132-.239103 .498132 0H4.194271L4.473225-1.733499Z'/>\n</defs>\n<g id='page1'>\n<use x='169.364882' y='0' xlink:href='#g0-50'/>\n</g>\n</svg>")
$.bK.j(0,n).v(0,"3","<?xml version='1.0' encoding='UTF-8'?>\n<!-- This file was generated by dvisvgm 2.13.4 -->\n<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='4.98132pt' height='6.273719pt' viewBox='169.364882 -6.273719 4.98132 6.273719'>\n<defs>\n<path id='g0-51' d='M4.552927-1.703611C4.552927-2.520548 3.92528-3.297634 2.889166-3.506849C3.706102-3.775841 4.283935-4.473225 4.283935-5.260274C4.283935-6.07721 3.407223-6.635118 2.450809-6.635118C1.444583-6.635118 .687422-6.03736 .687422-5.280199C.687422-4.951432 .9066-4.762142 1.195517-4.762142C1.504359-4.762142 1.703611-4.98132 1.703611-5.270237C1.703611-5.768369 1.235367-5.768369 1.085928-5.768369C1.39477-6.256538 2.052304-6.386052 2.410959-6.386052C2.819427-6.386052 3.367372-6.166874 3.367372-5.270237C3.367372-5.150685 3.347447-4.572852 3.088418-4.134496C2.789539-3.656289 2.450809-3.626401 2.201743-3.616438C2.122042-3.606476 1.882939-3.58655 1.8132-3.58655C1.733499-3.576588 1.663761-3.566625 1.663761-3.466999C1.663761-3.35741 1.733499-3.35741 1.902864-3.35741H2.34122C3.158157-3.35741 3.526775-2.67995 3.526775-1.703611C3.526775-.348692 2.839352-.059776 2.400996-.059776C1.972603-.059776 1.225405-.229141 .876712-.816936C1.225405-.767123 1.534247-.986301 1.534247-1.364882C1.534247-1.723537 1.265255-1.92279 .976339-1.92279C.737235-1.92279 .418431-1.783313 .418431-1.344956C.418431-.438356 1.344956 .219178 2.430884 .219178C3.646326 .219178 4.552927-.687422 4.552927-1.703611Z'/>\n</defs>\n<g id='page1'>\n<use x='169.364882' y='0' xlink:href='#g0-51'/>\n</g>\n</svg>")
l=document
s=l.getElementById("canvas-container")
s.toString
r=A.a([],t.dw)
q=A.mw(0)
l=l.createElement("canvas")
t.jQ.a(l)
p=new A.fH(l,s,r,B.d,B.d,q,B.d,B.d)
p.a=A.pU()
s.appendChild(l).toString
o=new A.en()
o.lQ()
o.w=p
l=o.k2
l===$&&A.b("camera")
p.iO(l)
l=o.k2
s=o.w
l.r=s
s.iO(l)
s=l.r
r=s.a
r===$&&A.b(m)
r.lo(s)
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
r.ev(l.f)
o.cN()},
en:function en(){var _=this
_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=_.ch=_.ay=_.ax=_.at=_.as=_.Q=_.y=_.x=$
_.a=0
_.w=_.f=_.e=_.d=$},
k_:function k_(a){this.a=a},
k0:function k0(a){this.a=a},
k1:function k1(a){this.a=a},
tP(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
tB(a,b,c,d){var s,r,q,p,o,n=A.aW(d,c.h("l<0>"))
for(s=c.h("z<0>"),r=0;r<1;++r){q=a[r]
p=b.$1(q)
o=n.j(0,p)
if(o==null){o=A.a([],s)
n.v(0,p,o)
p=o}else p=o
J.mg(p,q)}return n},
nx(a,b){return A.qc(a,b,b)},
qc(a,b,c){return A.mW(function(){var s=a,r=b
var q=0,p=1,o,n,m
return function $async$nx(d,e){if(d===1){o=e
q=p}while(true)switch(q){case 0:n=s.length,m=0
case 2:if(!(m<s.length)){q=4
break}q=5
return A.rc(s[m])
case 5:case 3:s.length===n||(0,A.e)(s),++m
q=2
break
case 4:return A.mG()
case 1:return A.mH(o)}}},c)},
jV(a,b,c){return A.qh(a,b,c,c)},
qh(a,b,c,d){return A.mW(function(){var s=a,r=b,q=c
var p=0,o=1,n,m,l,k
return function $async$jV(e,f){if(e===1){n=f
p=o}while(true)switch(p){case 0:m=J.Y(s),l=0
case 2:if(!(l<m.gm(s))){p=4
break}k=m.j(s,l)
p=A.ax(r.$2(l,k))?5:6
break
case 5:p=7
return k
case 7:case 6:case 3:++l
p=2
break
case 4:return A.mG()
case 1:return A.mH(n)}}},d)},
tV(a,b,c){var s,r,q,p,o,n,m=t.y
m.a(a)
m.a(b)
s=A.iG(A.iQ(a),A.iQ(b),c,t.A)
m=A.a([],t.l)
r=s.a
r===$&&A.b("values")
q=r.length
p=0
for(;p<r.length;r.length===q||(0,A.e)(r),++p){o=r[p]
n=J.Y(o)
m.push(new A.f(n.j(o,0),n.j(o,1),n.j(o,2)))}return m},
p5(a,b,c){return a},
pg(a,b,c){var s=1/(1+Math.exp(5))
return Math.min(1,Math.max((1/(1+Math.exp(-(10*(a-0.5))))-s)/(1-2*s),0))},
oT(){var s,r,q,p,o=null
try{o=A.mD()}catch(s){if(t.mA.b(A.bq(s))){r=$.lG
if(r!=null)return r
throw s}else throw s}if(J.W(o,$.oz)){r=$.lG
r.toString
return r}$.oz=o
if($.nb()==$.fn())r=$.lG=o.jQ(".").l(0)
else{q=o.h2()
p=q.length-1
r=$.lG=p===0?q:B.b.B(q,0,p)}return r},
p2(a){var s
if(!(a>=65&&a<=90))s=a>=97&&a<=122
else s=!0
return s},
p3(a,b){var s=a.length,r=b+2
if(s<r)return!1
if(!A.p2(B.b.I(a,b)))return!1
if(B.b.I(a,b+1)!==58)return!1
if(s===r)return!0
return B.b.I(a,r)===47},
tH(a){var s,r,q,p
if(a.gm(a)===0)return!0
s=a.gaq(a)
for(r=A.bd(a,1,null,a.$ti.h("D.E")),q=r.$ti,r=new A.L(r,r.gm(r),q.h("L<D.E>")),q=q.h("D.E");r.n();){p=r.d
if(!J.W(p==null?q.a(p):p,s))return!1}return!0},
tS(a,b,c){var s=B.a.ak(a,null)
if(s<0)throw A.d(A.a8(A.k(a)+" contains no null elements.",null))
B.a.v(a,s,b)},
pe(a,b,c){var s=B.a.ak(a,b)
if(s<0)throw A.d(A.a8(A.k(a)+" contains no elements matching "+b.l(0)+".",null))
B.a.v(a,s,null)},
ts(a,b){var s,r,q,p
for(s=new A.a9(a),r=t.E,s=new A.L(s,s.gm(s),r.h("L<v.E>")),r=r.h("v.E"),q=0;s.n();){p=s.d
if((p==null?r.a(p):p)===b)++q}return q},
lV(a,b,c){var s,r,q
if(b.length===0)for(s=0;!0;){r=B.b.aR(a,"\n",s)
if(r===-1)return a.length-s>=c?s:null
if(r-s>=c)return s
s=r+1}r=B.b.ak(a,b)
for(;r!==-1;){q=r===0?0:B.b.eg(a,"\n",r-1)+1
if(c===r-q)return q
r=B.b.aR(a,b,r+1)}return null}},J={
n5(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iF(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.n1==null){A.tD()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.d(A.hV("Return interceptor for "+A.k(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.lm
if(o==null)o=$.lm=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.tK(a)
if(p!=null)return p
if(typeof a=="function")return B.b4
s=Object.getPrototypeOf(a)
if(s==null)return B.aB
if(s===Object.prototype)return B.aB
if(typeof q=="function"){o=$.lm
if(o==null)o=$.lm=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.a3,enumerable:false,writable:true,configurable:true})
return B.a3}return B.a3},
ny(a,b){if(a<0||a>4294967295)throw A.d(A.a_(a,0,4294967295,"length",null))
return J.nz(new Array(a),b)},
mm(a,b){if(a<0)throw A.d(A.a8("Length must be a non-negative integer: "+a,null))
return A.a(new Array(a),b.h("z<0>"))},
nz(a,b){return J.jP(A.a(a,b.h("z<0>")),b)},
jP(a,b){a.fixed$length=Array
return a},
qd(a,b){var s=t.bP
return J.nh(s.a(a),s.a(b))},
nA(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
qe(a,b){var s,r
for(s=a.length;b<s;){r=B.b.E(a,b)
if(r!==32&&r!==13&&!J.nA(r))break;++b}return b},
qf(a,b){var s,r
for(;b>0;b=s){s=b-1
r=B.b.I(a,s)
if(r!==32&&r!==13&&!J.nA(r))break}return b},
bo(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dc.prototype
return J.ei.prototype}if(typeof a=="string")return J.bF.prototype
if(a==null)return J.eh.prototype
if(typeof a=="boolean")return J.h9.prototype
if(a.constructor==Array)return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bG.prototype
return a}if(a instanceof A.H)return a
return J.iF(a)},
tw(a){if(typeof a=="number")return J.c8.prototype
if(typeof a=="string")return J.bF.prototype
if(a==null)return a
if(a.constructor==Array)return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bG.prototype
return a}if(a instanceof A.H)return a
return J.iF(a)},
Y(a){if(typeof a=="string")return J.bF.prototype
if(a==null)return a
if(a.constructor==Array)return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bG.prototype
return a}if(a instanceof A.H)return a
return J.iF(a)},
aP(a){if(a==null)return a
if(a.constructor==Array)return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bG.prototype
return a}if(a instanceof A.H)return a
return J.iF(a)},
oW(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dc.prototype
return J.ei.prototype}if(a==null)return a
if(!(a instanceof A.H))return J.bM.prototype
return a},
tx(a){if(typeof a=="number")return J.c8.prototype
if(a==null)return a
if(!(a instanceof A.H))return J.bM.prototype
return a},
oX(a){if(typeof a=="number")return J.c8.prototype
if(typeof a=="string")return J.bF.prototype
if(a==null)return a
if(!(a instanceof A.H))return J.bM.prototype
return a},
lX(a){if(typeof a=="string")return J.bF.prototype
if(a==null)return a
if(!(a instanceof A.H))return J.bM.prototype
return a},
oY(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bG.prototype
return a}if(a instanceof A.H)return a
return J.iF(a)},
ty(a){if(a==null)return a
if(!(a instanceof A.H))return J.bM.prototype
return a},
mf(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.tw(a).J(a,b)},
W(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.bo(a).V(a,b)},
d2(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.oX(a).A(a,b)},
Z(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||A.tI(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.Y(a).j(a,b)},
iK(a,b,c){return J.aP(a).v(a,b,c)},
pC(a,b,c,d){return J.oY(a).m7(a,b,c,d)},
pD(a,b,c,d){return J.oY(a).ms(a,b,c,d)},
mg(a,b){return J.aP(a).p(a,b)},
am(a,b){return J.aP(a).N(a,b)},
mh(a,b){return J.lX(a).cb(a,b)},
ng(a,b){return J.lX(a).I(a,b)},
nh(a,b){return J.oX(a).aD(a,b)},
iL(a,b){return J.aP(a).af(a,b)},
aG(a){return J.aP(a).gaq(a)},
aH(a){return J.bo(a).gW(a)},
cu(a){return J.Y(a).gag(a)},
bP(a){return J.Y(a).gcF(a)},
F(a){return J.aP(a).gH(a)},
aL(a){return J.aP(a).gu(a)},
M(a){return J.Y(a).gm(a)},
pE(a){return J.ty(a).gal(a)},
pF(a){if(typeof a==="number")return a>0?1:a<0?-1:a
return J.oW(a).geQ(a)},
ni(a,b,c){return J.aP(a).dz(a,b,c)},
u(a,b,c){return J.aP(a).eh(a,b,c)},
pG(a,b,c){return J.lX(a).ju(a,b,c)},
pH(a,b){return J.Y(a).sm(a,b)},
nj(a,b){return J.aP(a).bb(a,b)},
nk(a,b){return J.aP(a).cU(a,b)},
pI(a){return J.tx(a).bt(a)},
fo(a){return J.aP(a).aC(a)},
bC(a){return J.bo(a).l(a)},
nl(a){return J.lX(a).ex(a)},
pJ(a,b){return J.aP(a).ey(a,b)},
ef:function ef(){},
h9:function h9(){},
eh:function eh(){},
b8:function b8(){},
cE:function cE(){},
hv:function hv(){},
bM:function bM(){},
bG:function bG(){},
z:function z(a){this.$ti=a},
jQ:function jQ(a){this.$ti=a},
az:function az(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
c8:function c8(){},
dc:function dc(){},
ei:function ei(){},
bF:function bF(){}},B={}
var w=[A,J,B]
var $={}
A.mo.prototype={}
J.ef.prototype={
V(a,b){return a===b},
gW(a){return A.bI(a)},
l(a){return"Instance of '"+A.kj(a)+"'"}}
J.h9.prototype={
l(a){return String(a)},
gW(a){return a?519018:218159},
$iB:1}
J.eh.prototype={
V(a,b){return null==b},
l(a){return"null"},
gW(a){return 0},
$iak:1}
J.b8.prototype={}
J.cE.prototype={
gW(a){return 0},
l(a){return String(a)}}
J.hv.prototype={}
J.bM.prototype={}
J.bG.prototype={
l(a){var s=a[$.pl()]
if(s==null)return this.lw(a)
return"JavaScript function for "+J.bC(s)},
$ibR:1}
J.z.prototype={
p(a,b){A.w(a).c.a(b)
if(!!a.fixed$length)A.N(A.T("add"))
a.push(b)},
eu(a,b){if(!!a.fixed$length)A.N(A.T("removeAt"))
if(b<0||b>=a.length)throw A.d(A.kk(b,null))
return a.splice(b,1)[0]},
bJ(a,b,c){A.w(a).c.a(c)
if(!!a.fixed$length)A.N(A.T("insert"))
if(b<0||b>a.length)throw A.d(A.kk(b,null))
a.splice(b,0,c)},
ed(a,b,c){var s,r
A.w(a).h("j<1>").a(c)
if(!!a.fixed$length)A.N(A.T("insertAll"))
A.nN(b,0,a.length,"index")
if(!t.gt.b(c))c=J.fo(c)
s=J.M(c)
a.length=a.length+s
r=b+s
this.dB(a,r,a.length,a,b)
this.kZ(a,b,r,c)},
dl(a){if(!!a.fixed$length)A.N(A.T("removeLast"))
if(a.length===0)throw A.d(A.cp(a,-1))
return a.pop()},
a_(a,b){var s
if(!!a.fixed$length)A.N(A.T("remove"))
for(s=0;s<a.length;++s)if(J.W(a[s],b)){a.splice(s,1)
return!0}return!1},
fb(a,b,c){var s,r,q,p,o
A.w(a).h("B(1)").a(b)
s=[]
r=a.length
for(q=0;q<r;++q){p=a[q]
if(!A.ax(b.$1(p)))s.push(p)
if(a.length!==r)throw A.d(A.at(a))}o=s.length
if(o===r)return
this.sm(a,o)
for(q=0;q<s.length;++q)a[q]=s[q]},
ey(a,b){var s=A.w(a)
return new A.aq(a,s.h("B(1)").a(b),s.h("aq<1>"))},
N(a,b){var s
A.w(a).h("j<1>").a(b)
if(!!a.fixed$length)A.N(A.T("addAll"))
if(Array.isArray(b)){this.m6(a,b)
return}for(s=J.F(b);s.n();)a.push(s.gq())},
m6(a,b){var s,r
t.m.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.d(A.at(a))
for(r=0;r<s;++r)a.push(b[r])},
bY(a){if(!!a.fixed$length)A.N(A.T("clear"))
a.length=0},
bf(a,b){var s,r
A.w(a).h("~(1)").a(b)
s=a.length
for(r=0;r<s;++r){b.$1(a[r])
if(a.length!==s)throw A.d(A.at(a))}},
eh(a,b,c){var s=A.w(a)
return new A.I(a,s.Y(c).h("1(2)").a(b),s.h("@<1>").Y(c).h("I<1,2>"))},
aF(a,b){var s,r=A.bH(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.v(r,s,A.k(a[s]))
return r.join(b)},
aX(a){return this.aF(a,"")},
bb(a,b){return A.bd(a,b,null,A.w(a).c)},
ba(a,b){var s,r,q
A.w(a).h("1(1,1)").a(b)
s=a.length
if(s===0)throw A.d(A.an())
if(0>=s)return A.c(a,0)
r=a[0]
for(q=1;q<s;++q){r=b.$2(r,a[q])
if(s!==a.length)throw A.d(A.at(a))}return r},
ea(a,b,c,d){var s,r,q
d.a(b)
A.w(a).Y(d).h("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.d(A.at(a))}return r},
af(a,b){if(!(b>=0&&b<a.length))return A.c(a,b)
return a[b]},
bc(a,b,c){if(b<0||b>a.length)throw A.d(A.a_(b,0,a.length,"start",null))
if(c<b||c>a.length)throw A.d(A.a_(c,b,a.length,"end",null))
if(b===c)return A.a([],A.w(a))
return A.a(a.slice(b,c),A.w(a))},
dz(a,b,c){A.aF(b,c,a.length)
return A.bd(a,b,c,A.w(a).c)},
gaq(a){if(a.length>0)return a[0]
throw A.d(A.an())},
gu(a){var s=a.length
if(s>0)return a[s-1]
throw A.d(A.an())},
dB(a,b,c,d,e){var s,r,q,p,o
A.w(a).h("j<1>").a(d)
if(!!a.immutable$list)A.N(A.T("setRange"))
A.aF(b,c,a.length)
s=c-b
if(s===0)return
A.bb(e,"skipCount")
if(t.gs.b(d)){r=d
q=e}else{r=J.nj(d,e).bu(0,!1)
q=0}p=J.Y(r)
if(q+s>p.gm(r))throw A.d(A.qb())
if(q<b)for(o=s-1;o>=0;--o)a[b+o]=p.j(r,q+o)
else for(o=0;o<s;++o)a[b+o]=p.j(r,q+o)},
kZ(a,b,c,d){return this.dB(a,b,c,d,0)},
b5(a,b){var s,r
A.w(a).h("B(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(A.ax(b.$1(a[r])))return!0
if(a.length!==s)throw A.d(A.at(a))}return!1},
cC(a,b){var s,r
A.w(a).h("B(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!A.ax(b.$1(a[r])))return!1
if(a.length!==s)throw A.d(A.at(a))}return!0},
cU(a,b){var s,r=A.w(a)
r.h("i(1,1)?").a(b)
if(!!a.immutable$list)A.N(A.T("sort"))
s=b==null?J.rW():b
A.nT(a,s,r.c)},
aR(a,b,c){var s,r=a.length
if(c>=r)return-1
for(s=c;s<r;++s){if(!(s<a.length))return A.c(a,s)
if(J.W(a[s],b))return s}return-1},
ak(a,b){return this.aR(a,b,0)},
F(a,b){var s
for(s=0;s<a.length;++s)if(J.W(a[s],b))return!0
return!1},
gag(a){return a.length===0},
gcF(a){return a.length!==0},
l(a){return A.jN(a,"[","]")},
bu(a,b){var s=A.a(a.slice(0),A.w(a))
return s},
aC(a){return this.bu(a,!0)},
gH(a){return new J.az(a,a.length,A.w(a).h("az<1>"))},
gW(a){return A.bI(a)},
gm(a){return a.length},
sm(a,b){if(!!a.fixed$length)A.N(A.T("set length"))
if(b<0)throw A.d(A.a_(b,0,null,"newLength",null))
if(b>a.length)A.w(a).c.a(null)
a.length=b},
j(a,b){if(!(b>=0&&b<a.length))throw A.d(A.cp(a,b))
return a[b]},
v(a,b,c){A.w(a).c.a(c)
if(!!a.immutable$list)A.N(A.T("indexed set"))
if(!(b>=0&&b<a.length))throw A.d(A.cp(a,b))
a[b]=c},
jk(a,b){var s
A.w(a).h("B(1)").a(b)
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(A.ax(b.$1(a[s])))return s
return-1},
$iQ:1,
$ij:1,
$il:1}
J.jQ.prototype={}
J.az.prototype={
gq(){var s=this.d
return s==null?this.$ti.c.a(s):s},
n(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.d(A.e(q))
s=r.c
if(s>=p){r.shT(null)
return!1}r.shT(q[s]);++r.c
return!0},
shT(a){this.d=this.$ti.h("1?").a(a)},
$iU:1}
J.c8.prototype={
aD(a,b){var s
A.ly(b)
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gef(b)
if(this.gef(a)===s)return 0
if(this.gef(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gef(a){return a===0?1/a<0:a<0},
geQ(a){var s
if(a>0)s=1
else s=a<0?-1:a
return s},
bt(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.d(A.T(""+a+".toInt()"))},
fm(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.d(A.T(""+a+".ceil()"))},
h3(a,b){var s
if(b>20)throw A.d(A.a_(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gef(a))return"-"+s
return s},
pI(a,b){var s,r,q,p
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
p-=q.length}return s+B.b.A("0",p)},
l(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gW(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
J(a,b){A.ly(b)
return a+b},
A(a,b){return a*b},
a6(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
b2(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.im(a,b)},
aV(a,b){return(a|0)===a?a/b|0:this.im(a,b)},
im(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.d(A.T("Result of truncating division is "+A.k(s)+": "+A.k(a)+" ~/ "+b))},
d_(a,b){var s
if(a>0)s=this.ik(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
mv(a,b){if(0>b)throw A.d(A.fj(b))
return this.ik(a,b)},
ik(a,b){return b>31?0:a>>>b},
$iaf:1,
$it:1,
$iae:1}
J.dc.prototype={
geQ(a){var s
if(a>0)s=1
else s=a<0?-1:a
return s},
$ii:1}
J.ei.prototype={}
J.bF.prototype={
I(a,b){if(b<0)throw A.d(A.cp(a,b))
if(b>=a.length)A.N(A.cp(a,b))
return a.charCodeAt(b)},
E(a,b){if(b>=a.length)throw A.d(A.cp(a,b))
return a.charCodeAt(b)},
fi(a,b,c){var s=b.length
if(c>s)throw A.d(A.a_(c,0,s,null,null))
return new A.iu(b,a,c)},
cb(a,b){return this.fi(a,b,0)},
ju(a,b,c){var s,r,q=null
if(c<0||c>b.length)throw A.d(A.a_(c,0,b.length,q,q))
s=a.length
if(c+s>b.length)return q
for(r=0;r<s;++r)if(this.I(b,c+r)!==this.E(a,r))return q
return new A.dr(c,a)},
J(a,b){return a+b},
bm(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.av(a,r-s)},
jN(a,b,c){A.nN(0,0,a.length,"startIndex")
return A.tY(a,b,c,0)},
cp(a,b){if(typeof b=="string")return A.a(a.split(b),t.s)
else if(b instanceof A.cD&&b.gi8().exec("").length-2===0)return A.a(a.split(b.b),t.s)
else return this.mg(a,b)},
ck(a,b,c,d){var s=A.aF(b,c,a.length)
return A.ph(a,b,s,d)},
mg(a,b){var s,r,q,p,o,n,m=A.a([],t.s)
for(s=J.mh(b,a),s=s.gH(s),r=0,q=1;s.n();){p=s.gq()
o=p.gS(p)
n=p.gU()
q=n-o
if(q===0&&r===o)continue
B.a.p(m,this.B(a,r,o))
r=n}if(r<a.length||q>0)B.a.p(m,this.av(a,r))
return m},
aa(a,b,c){var s
t.oc.a(b)
if(c<0||c>a.length)throw A.d(A.a_(c,0,a.length,null,null))
if(typeof b=="string"){s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)}return J.pG(b,a,c)!=null},
Z(a,b){return this.aa(a,b,0)},
B(a,b,c){return a.substring(b,A.aF(b,c,a.length))},
av(a,b){return this.B(a,b,null)},
ex(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(this.E(p,0)===133){s=J.qe(p,1)
if(s===o)return""}else s=0
r=o-1
q=this.I(p,r)===133?J.qf(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
A(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.d(B.b_)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
oS(a,b){var s=b-a.length
if(s<=0)return a
return a+this.A(" ",s)},
aR(a,b,c){var s
if(c<0||c>a.length)throw A.d(A.a_(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
ak(a,b){return this.aR(a,b,0)},
eg(a,b,c){var s,r
if(c==null)c=a.length
else if(c<0||c>a.length)throw A.d(A.a_(c,0,a.length,null,null))
s=b.length
r=a.length
if(c+s>r)c=r-s
return a.lastIndexOf(b,c)},
fR(a,b){return this.eg(a,b,null)},
nK(a,b,c){var s=a.length
if(c>s)throw A.d(A.a_(c,0,s,null,null))
return A.ct(a,b,c)},
F(a,b){return this.nK(a,b,0)},
aD(a,b){var s
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
j(a,b){if(!(b>=0&&b<a.length))throw A.d(A.cp(a,b))
return a[b]},
$iaf:1,
$idj:1,
$in:1}
A.ck.prototype={
gH(a){var s=A.A(this)
return new A.dU(J.F(this.gbl()),s.h("@<1>").Y(s.z[1]).h("dU<1,2>"))},
gm(a){return J.M(this.gbl())},
gag(a){return J.cu(this.gbl())},
gcF(a){return J.bP(this.gbl())},
bb(a,b){var s=A.A(this)
return A.j7(J.nj(this.gbl(),b),s.c,s.z[1])},
af(a,b){return A.A(this).z[1].a(J.iL(this.gbl(),b))},
gaq(a){return A.A(this).z[1].a(J.aG(this.gbl()))},
gu(a){return A.A(this).z[1].a(J.aL(this.gbl()))},
l(a){return J.bC(this.gbl())}}
A.dU.prototype={
n(){return this.a.n()},
gq(){return this.$ti.z[1].a(this.a.gq())},
$iU:1}
A.cx.prototype={
gbl(){return this.a}}
A.eS.prototype={$iQ:1}
A.eP.prototype={
j(a,b){return this.$ti.z[1].a(J.Z(this.a,b))},
v(a,b,c){var s=this.$ti
J.iK(this.a,b,s.c.a(s.z[1].a(c)))},
sm(a,b){J.pH(this.a,b)},
p(a,b){var s=this.$ti
J.mg(this.a,s.c.a(s.z[1].a(b)))},
N(a,b){var s=this.$ti
J.am(this.a,A.j7(s.h("j<2>").a(b),s.z[1],s.c))},
cU(a,b){var s
this.$ti.h("i(2,2)?").a(b)
s=b==null?null:new A.l3(this,b)
J.nk(this.a,s)},
dz(a,b,c){var s=this.$ti
return A.j7(J.ni(this.a,b,c),s.c,s.z[1])},
$iQ:1,
$il:1}
A.l3.prototype={
$2(a,b){var s=this.a.$ti,r=s.c
r.a(a)
r.a(b)
s=s.z[1]
return this.b.$2(s.a(a),s.a(b))},
$S(){return this.a.$ti.h("i(1,1)")}}
A.aS.prototype={
gbl(){return this.a}}
A.ej.prototype={
l(a){return"LateInitializationError: "+this.a}}
A.a9.prototype={
gm(a){return this.a.length},
j(a,b){return B.b.I(this.a,b)}}
A.m7.prototype={
$0(){var s=new A.as($.aa,t.av)
s.hN(null)
return s},
$S:82}
A.ku.prototype={}
A.Q.prototype={}
A.D.prototype={
gH(a){var s=this
return new A.L(s,s.gm(s),A.A(s).h("L<D.E>"))},
gag(a){return this.gm(this)===0},
gaq(a){if(this.gm(this)===0)throw A.d(A.an())
return this.af(0,0)},
gu(a){var s=this
if(s.gm(s)===0)throw A.d(A.an())
return s.af(0,s.gm(s)-1)},
aF(a,b){var s,r,q,p=this,o=p.gm(p)
if(b.length!==0){if(o===0)return""
s=A.k(p.af(0,0))
if(o!==p.gm(p))throw A.d(A.at(p))
for(r=s,q=1;q<o;++q){r=r+b+A.k(p.af(0,q))
if(o!==p.gm(p))throw A.d(A.at(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.k(p.af(0,q))
if(o!==p.gm(p))throw A.d(A.at(p))}return r.charCodeAt(0)==0?r:r}},
aX(a){return this.aF(a,"")},
ba(a,b){var s,r,q,p=this
A.A(p).h("D.E(D.E,D.E)").a(b)
s=p.gm(p)
if(s===0)throw A.d(A.an())
r=p.af(0,0)
for(q=1;q<s;++q){r=b.$2(r,p.af(0,q))
if(s!==p.gm(p))throw A.d(A.at(p))}return r},
bb(a,b){return A.bd(this,b,null,A.A(this).h("D.E"))},
bu(a,b){return A.h(this,b,A.A(this).h("D.E"))},
aC(a){return this.bu(a,!0)}}
A.aK.prototype={
cq(a,b,c,d){var s,r=this.b
A.bb(r,"start")
s=this.c
if(s!=null){A.bb(s,"end")
if(r>s)throw A.d(A.a_(r,0,s,"start",null))}},
gmh(){var s=J.M(this.a),r=this.c
if(r==null||r>s)return s
return r},
gmA(){var s=J.M(this.a),r=this.b
if(r>s)return s
return r},
gm(a){var s,r=J.M(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
if(typeof s!=="number")return s.M()
return s-q},
af(a,b){var s=this,r=s.gmA()+b
if(b<0||r>=s.gmh())throw A.d(A.h7(b,s,"index",null,null))
return J.iL(s.a,r)},
bb(a,b){var s,r,q=this
A.bb(b,"count")
s=q.b+b
r=q.c
if(r!=null&&s>=r)return new A.e1(q.$ti.h("e1<1>"))
return A.bd(q.a,s,r,q.$ti.c)},
pD(a,b){var s,r,q,p=this
A.bb(b,"count")
s=p.c
r=p.b
q=r+b
if(s==null)return A.bd(p.a,r,q,p.$ti.c)
else{if(s<q)return p
return A.bd(p.a,r,q,p.$ti.c)}},
bu(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.Y(n),l=m.gm(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.mm(0,n):J.ny(0,n)}r=A.bH(s,m.af(n,o),b,p.$ti.c)
for(q=1;q<s;++q){B.a.v(r,q,m.af(n,o+q))
if(m.gm(n)<l)throw A.d(A.at(p))}return r},
aC(a){return this.bu(a,!0)}}
A.L.prototype={
gq(){var s=this.d
return s==null?this.$ti.c.a(s):s},
n(){var s,r=this,q=r.a,p=J.Y(q),o=p.gm(q)
if(r.b!==o)throw A.d(A.at(q))
s=r.c
if(s>=o){r.sbU(null)
return!1}r.sbU(p.af(q,s));++r.c
return!0},
sbU(a){this.d=this.$ti.h("1?").a(a)},
$iU:1}
A.cH.prototype={
gH(a){var s=A.A(this)
return new A.cI(J.F(this.a),this.b,s.h("@<1>").Y(s.z[1]).h("cI<1,2>"))},
gm(a){return J.M(this.a)},
gag(a){return J.cu(this.a)},
gaq(a){return this.b.$1(J.aG(this.a))},
gu(a){return this.b.$1(J.aL(this.a))},
af(a,b){return this.b.$1(J.iL(this.a,b))}}
A.e_.prototype={$iQ:1}
A.cI.prototype={
n(){var s=this,r=s.b
if(r.n()){s.sbU(s.c.$1(r.gq()))
return!0}s.sbU(null)
return!1},
gq(){var s=this.a
return s==null?this.$ti.z[1].a(s):s},
sbU(a){this.a=this.$ti.h("2?").a(a)}}
A.I.prototype={
gm(a){return J.M(this.a)},
af(a,b){return this.b.$1(J.iL(this.a,b))}}
A.aq.prototype={
gH(a){return new A.cR(J.F(this.a),this.b,this.$ti.h("cR<1>"))}}
A.cR.prototype={
n(){var s,r
for(s=this.a,r=this.b;s.n();)if(A.ax(r.$1(s.gq())))return!0
return!1},
gq(){return this.a.gq()}}
A.e4.prototype={
gH(a){var s=this.$ti
return new A.e5(J.F(this.a),this.b,B.a6,s.h("@<1>").Y(s.z[1]).h("e5<1,2>"))}}
A.e5.prototype={
gq(){var s=this.d
return s==null?this.$ti.z[1].a(s):s},
n(){var s,r,q=this
if(q.c==null)return!1
for(s=q.a,r=q.b;!q.c.n();){q.sbU(null)
if(s.n()){q.shU(null)
q.shU(J.F(r.$1(s.gq())))}else return!1}q.sbU(q.c.gq())
return!0},
shU(a){this.c=this.$ti.h("U<2>?").a(a)},
sbU(a){this.d=this.$ti.h("2?").a(a)},
$iU:1}
A.bU.prototype={
bb(a,b){A.iP(b,"count",t.S)
A.bb(b,"count")
return new A.bU(this.a,this.b+b,A.A(this).h("bU<1>"))},
gH(a){return new A.eC(J.F(this.a),this.b,A.A(this).h("eC<1>"))}}
A.d7.prototype={
gm(a){var s=J.M(this.a)-this.b
if(s>=0)return s
return 0},
bb(a,b){A.iP(b,"count",t.S)
A.bb(b,"count")
return new A.d7(this.a,this.b+b,this.$ti)},
$iQ:1}
A.eC.prototype={
n(){var s,r
for(s=this.a,r=0;r<this.b;++r)s.n()
this.b=0
return s.n()},
gq(){return this.a.gq()}}
A.e1.prototype={
gH(a){return B.a6},
gag(a){return!0},
gm(a){return 0},
gaq(a){throw A.d(A.an())},
gu(a){throw A.d(A.an())},
af(a,b){throw A.d(A.a_(b,0,0,"index",null))},
bb(a,b){A.bb(b,"count")
return this}}
A.e2.prototype={
n(){return!1},
gq(){throw A.d(A.an())},
$iU:1}
A.al.prototype={
gH(a){return new A.cS(J.F(this.a),this.$ti.h("cS<1>"))}}
A.cS.prototype={
n(){var s,r
for(s=this.a,r=this.$ti.c;s.n();)if(r.b(s.gq()))return!0
return!1},
gq(){return this.$ti.c.a(this.a.gq())},
$iU:1}
A.bg.prototype={
sm(a,b){throw A.d(A.T("Cannot change the length of a fixed-length list"))},
p(a,b){A.ay(a).h("bg.E").a(b)
throw A.d(A.T("Cannot add to a fixed-length list"))},
N(a,b){A.ay(a).h("j<bg.E>").a(b)
throw A.d(A.T("Cannot add to a fixed-length list"))}}
A.bA.prototype={
v(a,b,c){A.A(this).h("bA.E").a(c)
throw A.d(A.T("Cannot modify an unmodifiable list"))},
sm(a,b){throw A.d(A.T("Cannot change the length of an unmodifiable list"))},
p(a,b){A.A(this).h("bA.E").a(b)
throw A.d(A.T("Cannot add to an unmodifiable list"))},
N(a,b){A.A(this).h("j<bA.E>").a(b)
throw A.d(A.T("Cannot add to an unmodifiable list"))},
cU(a,b){A.A(this).h("i(bA.E,bA.E)?").a(b)
throw A.d(A.T("Cannot modify an unmodifiable list"))}}
A.dt.prototype={}
A.X.prototype={
gm(a){return J.M(this.a)},
af(a,b){var s=this.a,r=J.Y(s)
return r.af(s,r.gm(s)-1-b)}}
A.fc.prototype={}
A.d6.prototype={
l(a){return A.mv(this)},
ge0(a){return this.o5(0,A.A(this).h("bj<1,2>"))},
o5(a,b){var s=this
return A.mW(function(){var r=a
var q=0,p=1,o,n,m,l,k,j
return function $async$ge0(c,d){if(c===1){o=d
q=p}while(true)switch(q){case 0:n=s.gbq(),n=n.gH(n),m=A.A(s),l=m.z[1],m=m.h("@<1>").Y(l).h("bj<1,2>")
case 2:if(!n.n()){q=3
break}k=n.gq()
j=s.j(0,k)
q=4
return new A.bj(k,j==null?l.a(j):j,m)
case 4:q=2
break
case 3:return A.mG()
case 1:return A.mH(o)}}},b)},
$ib3:1}
A.r.prototype={
gm(a){return this.a},
aj(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
j(a,b){if(!this.aj(b))return null
return this.b[A.aw(b)]},
bf(a,b){var s,r,q,p,o,n=this.$ti
n.h("~(1,2)").a(b)
s=this.c
for(r=s.length,q=this.b,n=n.z[1],p=0;p<r;++p){o=A.aw(s[p])
b.$2(o,n.a(q[o]))}},
gbq(){return new A.eQ(this,this.$ti.h("eQ<1>"))}}
A.eQ.prototype={
gH(a){var s=this.a.c
return new J.az(s,s.length,A.w(s).h("az<1>"))},
gm(a){return this.a.c.length}}
A.c6.prototype={
cZ(){var s,r,q,p=this,o=p.$map
if(o==null){s=p.$ti
r=s.c
q=A.q5(r)
o=A.ab(A.t5(),q,r,s.z[1])
A.oV(p.a,o)
p.$map=o}return o},
aj(a){return this.cZ().aj(a)},
j(a,b){return this.cZ().j(0,b)},
bf(a,b){this.$ti.h("~(1,2)").a(b)
this.cZ().bf(0,b)},
gbq(){var s=this.cZ()
return new A.aV(s,A.A(s).h("aV<1>"))},
gm(a){return this.cZ().a}}
A.jj.prototype={
$1(a){return this.a.b(a)},
$S:84}
A.ee.prototype={
V(a,b){if(b==null)return!1
return b instanceof A.ee&&this.a.V(0,b.a)&&A.dF(this)===A.dF(b)},
gW(a){return A.cL(this.a,A.dF(this),B.q,B.q)},
l(a){var s=B.a.aF([A.n0(this.$ti.c)],", ")
return this.a.l(0)+" with "+("<"+s+">")}}
A.c7.prototype={
$2(a,b){return this.a.$1$2(a,b,this.$ti.z[0])},
$S(){return A.tF(A.n_(this.a),this.$ti)}}
A.kE.prototype={
br(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.er.prototype={
l(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
A.ha.prototype={
l(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.hW.prototype={
l(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.hm.prototype={
l(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"},
$ibQ:1}
A.e3.prototype={}
A.f1.prototype={
l(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$icd:1}
A.aT.prototype={
l(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.pi(r==null?"unknown":r)+"'"},
$ibR:1,
gpZ(){return this},
$C:"$1",
$R:1,
$D:null}
A.fM.prototype={$C:"$0",$R:0}
A.fN.prototype={$C:"$2",$R:2}
A.hN.prototype={}
A.hL.prototype={
l(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.pi(s)+"'"}}
A.d3.prototype={
V(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.d3))return!1
return this.$_target===b.$_target&&this.a===b.a},
gW(a){return(A.n6(this.a)^A.bI(this.$_target))>>>0},
l(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.kj(this.a)+"'")}}
A.hC.prototype={
l(a){return"RuntimeError: "+this.a}}
A.i6.prototype={
l(a){return"Assertion failed: "+A.fW(this.a)}}
A.bi.prototype={
gm(a){return this.a},
gbq(){return new A.aV(this,A.A(this).h("aV<1>"))},
gjY(a){var s=A.A(this)
return A.jY(new A.aV(this,s.h("aV<1>")),new A.jR(this),s.c,s.z[1])},
aj(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.jn(a)},
jn(a){var s=this.d
if(s==null)return!1
return this.dg(s[this.df(a)],a)>=0},
j(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.jo(b)},
jo(a){var s,r,q=this.d
if(q==null)return null
s=q[this.df(a)]
r=this.dg(s,a)
if(r<0)return null
return s[r].b},
v(a,b,c){var s,r,q=this,p=A.A(q)
p.c.a(b)
p.z[1].a(c)
if(typeof b=="string"){s=q.b
q.hH(s==null?q.b=q.f9():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.hH(r==null?q.c=q.f9():r,b,c)}else q.jq(b,c)},
jq(a,b){var s,r,q,p,o=this,n=A.A(o)
n.c.a(a)
n.z[1].a(b)
s=o.d
if(s==null)s=o.d=o.f9()
r=o.df(a)
q=s[r]
if(q==null)s[r]=[o.eW(a,b)]
else{p=o.dg(q,a)
if(p>=0)q[p].b=b
else q.push(o.eW(a,b))}},
ep(a,b){var s,r,q=this,p=A.A(q)
p.c.a(a)
p.h("2()").a(b)
if(q.aj(a)){s=q.j(0,a)
return s==null?p.z[1].a(s):s}r=b.$0()
q.v(0,a,r)
return r},
a_(a,b){var s=this
if(typeof b=="string")return s.ij(s.b,b)
else if(typeof b=="number"&&(b&0x3fffffff)===b)return s.ij(s.c,b)
else return s.jp(b)},
jp(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.df(a)
r=n[s]
q=o.dg(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.is(p)
if(r.length===0)delete n[s]
return p.b},
bf(a,b){var s,r,q=this
A.A(q).h("~(1,2)").a(b)
s=q.e
r=q.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==q.r)throw A.d(A.at(q))
s=s.c}},
hH(a,b,c){var s,r=A.A(this)
r.c.a(b)
r.z[1].a(c)
s=a[b]
if(s==null)a[b]=this.eW(b,c)
else s.b=c},
ij(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.is(s)
delete a[b]
return s.b},
hJ(){this.r=this.r+1&1073741823},
eW(a,b){var s=this,r=A.A(s),q=new A.jT(r.c.a(a),r.z[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.hJ()
return q},
is(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.hJ()},
df(a){return J.aH(a)&0x3fffffff},
dg(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.W(a[r].a,b))return r
return-1},
l(a){return A.mv(this)},
f9(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$ijS:1}
A.jR.prototype={
$1(a){var s=this.a,r=A.A(s)
s=s.j(0,r.c.a(a))
return s==null?r.z[1].a(s):s},
$S(){return A.A(this.a).h("2(1)")}}
A.jT.prototype={}
A.aV.prototype={
gm(a){return this.a.a},
gag(a){return this.a.a===0},
gH(a){var s=this.a,r=new A.cF(s,s.r,this.$ti.h("cF<1>"))
r.c=s.e
return r},
F(a,b){return this.a.aj(b)}}
A.cF.prototype={
gq(){return this.d},
n(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.at(q))
s=r.c
if(s==null){r.shI(null)
return!1}else{r.shI(s.a)
r.c=s.c
return!0}},
shI(a){this.d=this.$ti.h("1?").a(a)},
$iU:1}
A.lZ.prototype={
$1(a){return this.a(a)},
$S:40}
A.m_.prototype={
$2(a,b){return this.a(a,b)},
$S:44}
A.m0.prototype={
$1(a){return this.a(A.aw(a))},
$S:50}
A.cD.prototype={
l(a){return"RegExp/"+this.a+"/"+this.b.flags},
gi9(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.mn(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,!0)},
gi8(){var s=this,r=s.d
if(r!=null)return r
r=s.b
return s.d=A.mn(s.a+"|()",r.multiline,!r.ignoreCase,r.unicode,r.dotAll,!0)},
fN(a){var s=this.b.exec(a)
if(s==null)return null
return new A.dy(s)},
fi(a,b,c){var s=b.length
if(c>s)throw A.d(A.a_(c,0,s,null,null))
return new A.i5(this,b,c)},
cb(a,b){return this.fi(a,b,0)},
mk(a,b){var s,r=this.gi9()
if(r==null)r=t.K.a(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.dy(s)},
mj(a,b){var s,r=this.gi8()
if(r==null)r=t.K.a(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
if(0>=s.length)return A.c(s,-1)
if(s.pop()!=null)return null
return new A.dy(s)},
ju(a,b,c){if(c<0||c>b.length)throw A.d(A.a_(c,0,b.length,null,null))
return this.mj(b,c)},
$idj:1}
A.dy.prototype={
gS(a){return this.b.index},
gU(){var s=this.b
return s.index+s[0].length},
ghf(){return this.b.length-1},
hg(a){var s,r,q,p,o
t.L.a(a)
s=A.a([],t.D)
for(r=a.length,q=this.b,p=0;p<a.length;a.length===r||(0,A.e)(a),++p){o=A.a0(a[p])
if(!(o>=0&&o<q.length))return A.c(q,o)
B.a.p(s,q[o])}return s},
$ide:1,
$icN:1}
A.i5.prototype={
gH(a){return new A.dv(this.a,this.b,this.c)}}
A.dv.prototype={
gq(){var s=this.d
return s==null?t.lu.a(s):s},
n(){var s,r,q,p,o,n=this,m=n.b
if(m==null)return!1
s=n.c
r=m.length
if(s<=r){q=n.a
p=q.mk(m,s)
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
A.dr.prototype={
gU(){return this.a+this.c.length},
ghf(){return 0},
hg(a){var s,r,q,p,o
t.L.a(a)
s=A.a([],t.s)
for(r=a.length,q=this.c,p=0;p<a.length;a.length===r||(0,A.e)(a),++p){o=A.a0(a[p])
if(o!==0)A.N(A.kk(o,null))
B.a.p(s,q)}return s},
$ide:1,
gS(a){return this.a}}
A.iu.prototype={
gH(a){return new A.iv(this.a,this.b,this.c)},
gaq(a){var s=this.b,r=this.a.indexOf(s,this.c)
if(r>=0)return new A.dr(r,s)
throw A.d(A.an())}}
A.iv.prototype={
n(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.dr(s,o)
q.c=r===q.c?r+1:r
return!0},
gq(){var s=this.d
s.toString
return s},
$iU:1}
A.l4.prototype={
ii(){var s=this.b
if(s===this)throw A.d(A.mq(this.a))
return s}}
A.hi.prototype={}
A.dh.prototype={
gm(a){return a.length},
$idd:1}
A.ep.prototype={
v(a,b,c){A.a0(c)
A.lB(b,a,a.length)
a[b]=c},
$iQ:1,
$ij:1,
$il:1}
A.hh.prototype={
j(a,b){A.lB(b,a,a.length)
return a[b]}}
A.eq.prototype={
j(a,b){A.lB(b,a,a.length)
return a[b]},
bc(a,b,c){return new Uint32Array(a.subarray(b,A.rK(b,c,a.length)))},
$iqW:1}
A.cK.prototype={
gm(a){return a.length},
j(a,b){A.lB(b,a,a.length)
return a[b]},
$icK:1,
$icQ:1}
A.eZ.prototype={}
A.f_.prototype={}
A.bw.prototype={
h(a){return A.lu(v.typeUniverse,this,a)},
Y(a){return A.rs(v.typeUniverse,this,a)}}
A.io.prototype={}
A.f4.prototype={
l(a){return A.b1(this.a,null)},
$inZ:1}
A.ik.prototype={
l(a){return this.a}}
A.f5.prototype={$ich:1}
A.l0.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:17}
A.l_.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:55}
A.l1.prototype={
$0(){this.a.$0()},
$S:2}
A.l2.prototype={
$0(){this.a.$0()},
$S:2}
A.ls.prototype={
lT(a,b){if(self.setTimeout!=null)self.setTimeout(A.dE(new A.lt(this,b),0),a)
else throw A.d(A.T("`setTimeout()` not found."))}}
A.lt.prototype={
$0(){this.b.$0()},
$S:1}
A.i7.prototype={
fq(a,b){var s,r=this,q=r.$ti
q.h("1/?").a(b)
if(b==null)q.c.a(b)
if(!r.b)r.a.hN(b)
else{s=r.a
if(q.h("bh<1>").b(b))s.hQ(b)
else s.f0(q.c.a(b))}},
iV(a,b){var s=this.a
if(this.b)s.cr(a,b)
else s.m8(a,b)}}
A.lz.prototype={
$1(a){return this.a.$2(0,a)},
$S:87}
A.lA.prototype={
$2(a,b){this.a.$2(1,new A.e3(a,t.k.a(b)))},
$S:89}
A.lM.prototype={
$2(a,b){this.a(A.a0(a),b)},
$S:34}
A.dx.prototype={
l(a){return"IterationMarker("+this.b+", "+A.k(this.a)+")"}}
A.cm.prototype={
gq(){var s,r=this.c
if(r==null){s=this.b
return s==null?this.$ti.c.a(s):s}return r.gq()},
n(){var s,r,q,p,o,n,m=this
for(s=m.$ti.h("U<1>");!0;){r=m.c
if(r!=null)if(r.n())return!0
else m.sia(null)
q=function(a,b,c){var l,k=b
while(true)try{return a(k,l)}catch(j){l=j
k=c}}(m.a,0,1)
if(q instanceof A.dx){p=q.b
if(p===2){o=m.d
if(o==null||o.length===0){m.shM(null)
return!1}if(0>=o.length)return A.c(o,-1)
m.a=o.pop()
continue}else{r=q.a
if(p===3)throw r
else{n=s.a(J.F(r))
if(n instanceof A.cm){r=m.d
if(r==null)r=m.d=[]
B.a.p(r,m.a)
m.a=n.a
continue}else{m.sia(n)
continue}}}}else{m.shM(q)
return!0}}return!1},
shM(a){this.b=this.$ti.h("1?").a(a)},
sia(a){this.c=this.$ti.h("U<1>?").a(a)},
$iU:1}
A.f3.prototype={
gH(a){return new A.cm(this.a(),this.$ti.h("cm<1>"))}}
A.dO.prototype={
l(a){return A.k(this.a)},
$ia1:1,
gdC(){return this.b}}
A.i9.prototype={
iV(a,b){var s
A.fk(a,"error",t.K)
s=this.a
if((s.a&30)!==0)throw A.d(A.av("Future already completed"))
s.cr(a,b)}}
A.f2.prototype={
fq(a,b){var s,r=this.$ti
r.h("1/?").a(b)
s=this.a
if((s.a&30)!==0)throw A.d(A.av("Future already completed"))
s.hR(r.h("1/").a(b))}}
A.cT.prototype={
oN(a){if((this.c&15)!==6)return!0
return this.b.b.h0(t.iW.a(this.d),a.a,t.k4,t.K)},
oq(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.eK.b(q))p=l.px(q,m,a.b,o,n,t.k)
else p=l.h0(t.mq.a(q),m,o,n)
try{o=r.$ti.h("2/").a(p)
return o}catch(s){if(t.do.b(A.bq(s))){if((r.c&1)!==0)throw A.d(A.a8("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.d(A.a8("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.as.prototype={
h1(a,b,c){var s,r,q,p=this.$ti
p.Y(c).h("1/(2)").a(a)
s=$.aa
if(s===B.l){if(b!=null&&!t.eK.b(b)&&!t.mq.b(b))throw A.d(A.mi(b,"onError",u.w))}else{c.h("@<0/>").Y(p.c).h("1(2)").a(a)
if(b!=null)b=A.t8(b,s)}r=new A.as(s,c.h("as<0>"))
q=b==null?1:3
this.eX(new A.cT(r,q,a,b,p.h("@<1>").Y(c).h("cT<1,2>")))
return r},
pF(a,b){return this.h1(a,null,b)},
iq(a,b,c){var s,r=this.$ti
r.Y(c).h("1/(2)").a(a)
s=new A.as($.aa,c.h("as<0>"))
this.eX(new A.cT(s,3,a,b,r.h("@<1>").Y(c).h("cT<1,2>")))
return s},
mu(a){this.a=this.a&1|16
this.c=a},
f_(a){this.a=a.a&30|this.a&1
this.c=a.c},
eX(a){var s,r=this,q=r.a
if(q<=3){a.a=t.Q.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.j_.a(r.c)
if((s.a&24)===0){s.eX(a)
return}r.f_(s)}A.cZ(null,null,r.b,t.M.a(new A.l8(r,a)))}},
ig(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.Q.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.j_.a(m.c)
if((n.a&24)===0){n.ig(a)
return}m.f_(n)}l.a=m.dJ(a)
A.cZ(null,null,m.b,t.M.a(new A.lg(l,m)))}},
dI(){var s=t.Q.a(this.c)
this.c=null
return this.dJ(s)},
dJ(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
hP(a){var s,r,q,p=this
p.a^=2
try{a.h1(new A.lc(p),new A.ld(p),t.P)}catch(q){s=A.bq(q)
r=A.cq(q)
A.tU(new A.le(p,s,r))}},
hR(a){var s,r=this,q=r.$ti
q.h("1/").a(a)
if(q.h("bh<1>").b(a))if(q.b(a))A.lb(a,r)
else r.hP(a)
else{s=r.dI()
q.c.a(a)
r.a=8
r.c=a
A.dw(r,s)}},
f0(a){var s,r=this
r.$ti.c.a(a)
s=r.dI()
r.a=8
r.c=a
A.dw(r,s)},
cr(a,b){var s
t.k.a(b)
s=this.dI()
this.mu(A.j_(a,b))
A.dw(this,s)},
hN(a){var s=this.$ti
s.h("1/").a(a)
if(s.h("bh<1>").b(a)){this.hQ(a)
return}this.m9(s.c.a(a))},
m9(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.cZ(null,null,s.b,t.M.a(new A.la(s,a)))},
hQ(a){var s=this,r=s.$ti
r.h("bh<1>").a(a)
if(r.b(a)){if((a.a&16)!==0){s.a^=2
A.cZ(null,null,s.b,t.M.a(new A.lf(s,a)))}else A.lb(a,s)
return}s.hP(a)},
m8(a,b){this.a^=2
A.cZ(null,null,this.b,t.M.a(new A.l9(this,a,b)))},
$ibh:1}
A.l8.prototype={
$0(){A.dw(this.a,this.b)},
$S:1}
A.lg.prototype={
$0(){A.dw(this.b,this.a.a)},
$S:1}
A.lc.prototype={
$1(a){var s,r,q,p=this.a
p.a^=2
try{p.f0(p.$ti.c.a(a))}catch(q){s=A.bq(q)
r=A.cq(q)
p.cr(s,r)}},
$S:17}
A.ld.prototype={
$2(a,b){this.a.cr(t.K.a(a),t.k.a(b))},
$S:37}
A.le.prototype={
$0(){this.a.cr(this.b,this.c)},
$S:1}
A.la.prototype={
$0(){this.a.f0(this.b)},
$S:1}
A.lf.prototype={
$0(){A.lb(this.b,this.a)},
$S:1}
A.l9.prototype={
$0(){this.a.cr(this.b,this.c)},
$S:1}
A.lj.prototype={
$0(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.jR(t.mY.a(q.d),t.z)}catch(p){s=A.bq(p)
r=A.cq(p)
q=m.c&&t.u.a(m.b.a.c).a===s
o=m.a
if(q)o.c=t.u.a(m.b.a.c)
else o.c=A.j_(s,r)
o.b=!0
return}if(l instanceof A.as&&(l.a&24)!==0){if((l.a&16)!==0){q=m.a
q.c=t.u.a(l.c)
q.b=!0}return}if(t.g7.b(l)){n=m.b.a
q=m.a
q.c=l.pF(new A.lk(n),t.z)
q.b=!1}},
$S:1}
A.lk.prototype={
$1(a){return this.a},
$S:92}
A.li.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.h0(o.h("2/(1)").a(p.d),m,o.h("2/"),n)}catch(l){s=A.bq(l)
r=A.cq(l)
q=this.a
q.c=A.j_(s,r)
q.b=!0}},
$S:1}
A.lh.prototype={
$0(){var s,r,q,p,o,n,m=this
try{s=t.u.a(m.a.a.c)
p=m.b
if(p.a.oN(s)&&p.a.e!=null){p.c=p.a.oq(s)
p.b=!1}}catch(o){r=A.bq(o)
q=A.cq(o)
p=t.u.a(m.a.a.c)
n=m.b
if(p.a===r)n.c=p
else n.c=A.j_(r,q)
n.b=!0}},
$S:1}
A.i8.prototype={}
A.eF.prototype={
gm(a){var s,r,q=this,p={},o=new A.as($.aa,t.hy)
p.a=0
s=q.$ti
r=s.h("~(1)?").a(new A.kw(p,q))
t.jE.a(new A.kx(p,o))
A.l6(q.a,q.b,r,!1,s.c)
return o}}
A.kw.prototype={
$1(a){this.b.$ti.c.a(a);++this.a.a},
$S(){return this.b.$ti.h("~(1)")}}
A.kx.prototype={
$0(){this.b.hR(this.a.a)},
$S:1}
A.eG.prototype={}
A.hM.prototype={}
A.it.prototype={}
A.fb.prototype={$io6:1}
A.lK.prototype={
$0(){var s=this.a,r=this.b
A.fk(s,"error",t.K)
A.fk(r,"stackTrace",t.k)
A.q3(s,r)},
$S:1}
A.is.prototype={
py(a){var s,r,q
t.M.a(a)
try{if(B.l===$.aa){a.$0()
return}A.oG(null,null,this,a,t.H)}catch(q){s=A.bq(q)
r=A.cq(q)
A.lJ(t.K.a(s),t.k.a(r))}},
pz(a,b,c){var s,r,q
c.h("~(0)").a(a)
c.a(b)
try{if(B.l===$.aa){a.$1(b)
return}A.oH(null,null,this,a,b,t.H,c)}catch(q){s=A.bq(q)
r=A.cq(q)
A.lJ(t.K.a(s),t.k.a(r))}},
iN(a){return new A.lq(this,t.M.a(a))},
nn(a,b){return new A.lr(this,b.h("~(0)").a(a),b)},
jR(a,b){b.h("0()").a(a)
if($.aa===B.l)return a.$0()
return A.oG(null,null,this,a,b)},
h0(a,b,c,d){c.h("@<0>").Y(d).h("1(2)").a(a)
d.a(b)
if($.aa===B.l)return a.$1(b)
return A.oH(null,null,this,a,b,c,d)},
px(a,b,c,d,e,f){d.h("@<0>").Y(e).Y(f).h("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.aa===B.l)return a.$2(b,c)
return A.t9(null,null,this,a,b,c,d,e,f)},
jK(a,b,c,d){return b.h("@<0>").Y(c).Y(d).h("1(2,3)").a(a)}}
A.lq.prototype={
$0(){return this.a.py(this.b)},
$S:1}
A.lr.prototype={
$1(a){var s=this.c
return this.a.pz(this.b,s.a(a),s)},
$S(){return this.c.h("~(0)")}}
A.eW.prototype={
j(a,b){if(!A.ax(this.y.$1(b)))return null
return this.lt(b)},
v(a,b,c){var s=this.$ti
this.lv(s.c.a(b),s.z[1].a(c))},
aj(a){if(!A.ax(this.y.$1(a)))return!1
return this.ls(a)},
a_(a,b){if(!A.ax(this.y.$1(b)))return null
return this.lu(b)},
df(a){return this.x.$1(this.$ti.c.a(a))&1073741823},
dg(a,b){var s,r,q,p
if(a==null)return-1
s=a.length
for(r=this.$ti.c,q=this.w,p=0;p<s;++p)if(A.ax(q.$2(r.a(a[p].a),r.a(b))))return p
return-1}}
A.ln.prototype={
$1(a){return this.a.b(a)},
$S:41}
A.c_.prototype={
ib(){return new A.c_(A.A(this).h("c_<1>"))},
gH(a){var s=this,r=new A.cU(s,s.r,A.A(s).h("cU<1>"))
r.c=s.e
return r},
gm(a){return this.a},
gag(a){return this.a===0},
gcF(a){return this.a!==0},
F(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.nF.a(s[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return t.nF.a(r[b])!=null}else return this.me(b)},
me(a){var s=this.d
if(s==null)return!1
return this.hV(s[this.hS(a)],a)>=0},
gaq(a){var s=this.e
if(s==null)throw A.d(A.av("No elements"))
return A.A(this).c.a(s.a)},
gu(a){var s=this.f
if(s==null)throw A.d(A.av("No elements"))
return A.A(this).c.a(s.a)},
p(a,b){var s,r,q=this
A.A(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.hK(s==null?q.b=A.mI():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.hK(r==null?q.c=A.mI():r,b)}else return q.dD(b)},
dD(a){var s,r,q,p=this
A.A(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.mI()
r=p.hS(a)
q=s[r]
if(q==null)s[r]=[p.fa(a)]
else{if(p.hV(q,a)>=0)return!1
q.push(p.fa(a))}return!0},
hK(a,b){A.A(this).c.a(b)
if(t.nF.a(a[b])!=null)return!1
a[b]=this.fa(b)
return!0},
mo(){this.r=this.r+1&1073741823},
fa(a){var s,r=this,q=new A.ip(A.A(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.mo()
return q},
hS(a){return J.aH(a)&1073741823},
hV(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.W(a[r].a,b))return r
return-1}}
A.ip.prototype={}
A.cU.prototype={
gq(){var s=this.d
return s==null?this.$ti.c.a(s):s},
n(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.d(A.at(q))
else if(r==null){s.scY(null)
return!1}else{s.scY(s.$ti.h("1?").a(r.a))
s.c=r.b
return!0}},
scY(a){this.d=this.$ti.h("1?").a(a)},
$iU:1}
A.eg.prototype={}
A.jU.prototype={
$2(a,b){this.a.v(0,this.b.a(a),this.c.a(b))},
$S:18}
A.ek.prototype={$iQ:1,$ij:1,$il:1}
A.v.prototype={
gH(a){return new A.L(a,this.gm(a),A.ay(a).h("L<v.E>"))},
af(a,b){return this.j(a,b)},
gag(a){return this.gm(a)===0},
gcF(a){return!this.gag(a)},
gaq(a){if(this.gm(a)===0)throw A.d(A.an())
return this.j(a,0)},
gu(a){if(this.gm(a)===0)throw A.d(A.an())
return this.j(a,this.gm(a)-1)},
F(a,b){var s,r=this.gm(a)
for(s=0;s<r;++s){if(J.W(this.j(a,s),b))return!0
if(r!==this.gm(a))throw A.d(A.at(a))}return!1},
cC(a,b){var s,r
A.ay(a).h("B(v.E)").a(b)
s=this.gm(a)
for(r=0;r<s;++r){if(!A.ax(b.$1(this.j(a,r))))return!1
if(s!==this.gm(a))throw A.d(A.at(a))}return!0},
b5(a,b){var s,r
A.ay(a).h("B(v.E)").a(b)
s=this.gm(a)
for(r=0;r<s;++r){if(A.ax(b.$1(this.j(a,r))))return!0
if(s!==this.gm(a))throw A.d(A.at(a))}return!1},
ey(a,b){var s=A.ay(a)
return new A.aq(a,s.h("B(v.E)").a(b),s.h("aq<v.E>"))},
eh(a,b,c){var s=A.ay(a)
return new A.I(a,s.Y(c).h("1(v.E)").a(b),s.h("@<v.E>").Y(c).h("I<1,2>"))},
bb(a,b){return A.bd(a,b,null,A.ay(a).h("v.E"))},
bu(a,b){var s,r,q,p,o=this
if(o.gag(a)){s=J.mm(0,A.ay(a).h("v.E"))
return s}r=o.j(a,0)
q=A.bH(o.gm(a),r,!0,A.ay(a).h("v.E"))
for(p=1;p<o.gm(a);++p)B.a.v(q,p,o.j(a,p))
return q},
aC(a){return this.bu(a,!0)},
p(a,b){var s
A.ay(a).h("v.E").a(b)
s=this.gm(a)
this.sm(a,s+1)
this.v(a,s,b)},
N(a,b){var s,r
A.ay(a).h("j<v.E>").a(b)
s=this.gm(a)
for(r=J.F(b);r.n();){this.p(a,r.gq());++s}},
bY(a){this.sm(a,0)},
dl(a){var s,r=this
if(r.gm(a)===0)throw A.d(A.an())
s=r.j(a,r.gm(a)-1)
r.sm(a,r.gm(a)-1)
return s},
cU(a,b){var s,r=A.ay(a)
r.h("i(v.E,v.E)?").a(b)
s=b==null?A.tm():b
A.nT(a,s,r.h("v.E"))},
dz(a,b,c){A.aF(b,c,this.gm(a))
return A.bd(a,b,c,A.ay(a).h("v.E"))},
ol(a,b,c,d){var s
A.ay(a).h("v.E?").a(d)
A.aF(b,c,this.gm(a))
for(s=b;s<c;++s)this.v(a,s,d)},
aR(a,b,c){var s
for(s=c;s<this.gm(a);++s)if(J.W(this.j(a,s),b))return s
return-1},
ak(a,b){return this.aR(a,b,0)},
l(a){return A.jN(a,"[","]")}}
A.em.prototype={}
A.jW.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=A.k(a)
r.a=s+": "
r.a+=A.k(b)},
$S:49}
A.cG.prototype={
bf(a,b){var s,r,q,p=A.A(this)
p.h("~(1,2)").a(b)
for(s=this.gbq(),s=s.gH(s),p=p.z[1];s.n();){r=s.gq()
q=this.j(0,r)
b.$2(r,q==null?p.a(q):q)}},
ge0(a){var s=this.gbq(),r=A.A(this).h("bj<1,2>"),q=A.A(s)
return A.jY(s,q.Y(r).h("1(j.E)").a(new A.jX(this)),q.h("j.E"),r)},
aj(a){return this.gbq().F(0,a)},
gm(a){var s=this.gbq()
return s.gm(s)},
l(a){return A.mv(this)},
$ib3:1}
A.jX.prototype={
$1(a){var s=this.a,r=A.A(s)
r.c.a(a)
s=s.j(0,a)
if(s==null)s=r.z[1].a(s)
return new A.bj(a,s,r.h("@<1>").Y(r.z[1]).h("bj<1,2>"))},
$S(){return A.A(this.a).h("bj<1,2>(1)")}}
A.el.prototype={
gH(a){var s=this
return new A.eY(s,s.c,s.d,s.b,s.$ti.h("eY<1>"))},
gag(a){return this.b===this.c},
gm(a){return(this.c-this.b&this.a.length-1)>>>0},
gaq(a){var s,r=this,q=r.b
if(q===r.c)throw A.d(A.an())
s=r.a
if(!(q<s.length))return A.c(s,q)
q=s[q]
return q==null?r.$ti.c.a(q):q},
gu(a){var s,r=this,q=r.b,p=r.c
if(q===p)throw A.d(A.an())
q=r.a
s=q.length
p=(p-1&s-1)>>>0
if(!(p>=0&&p<s))return A.c(q,p)
p=q[p]
return p==null?r.$ti.c.a(p):p},
af(a,b){var s,r,q,p=this,o=p.gm(p)
if(0>b||b>=o)A.N(A.h7(b,p,"index",null,o))
s=p.a
r=s.length
q=(p.b+b&r-1)>>>0
if(!(q>=0&&q<r))return A.c(s,q)
q=s[q]
return q==null?p.$ti.c.a(q):q},
bY(a){var s=this,r=s.b
if(r!==s.c){for(;r!==s.c;r=(r+1&s.a.length-1)>>>0)B.a.v(s.a,r,null)
s.b=s.c=0;++s.d}},
l(a){return A.jN(this,"{","}")},
jL(){var s,r,q=this,p=q.b
if(p===q.c)throw A.d(A.an());++q.d
s=q.a
if(!(p<s.length))return A.c(s,p)
r=s[p]
if(r==null)r=q.$ti.c.a(r)
B.a.v(s,p,null)
q.b=(q.b+1&q.a.length-1)>>>0
return r},
dD(a){var s,r,q,p,o=this,n=o.$ti
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
B.a.dB(q,0,p,n,s)
B.a.dB(q,p,p+o.b,o.a,0)
o.b=0
o.c=o.a.length
o.smC(q)}++o.d},
smC(a){this.a=this.$ti.h("l<1?>").a(a)},
$inM:1}
A.eY.prototype={
gq(){var s=this.e
return s==null?this.$ti.c.a(s):s},
n(){var s,r,q=this,p=q.a
if(q.c!==p.d)A.N(A.at(p))
s=q.d
if(s===q.b){q.scY(null)
return!1}r=p.a
if(!(s<r.length))return A.c(r,s)
q.scY(r[s])
q.d=(q.d+1&p.a.length-1)>>>0
return!0},
scY(a){this.e=this.$ti.h("1?").a(a)},
$iU:1}
A.aZ.prototype={
gag(a){return this.gm(this)===0},
gcF(a){return this.gm(this)!==0},
l(a){return A.jN(this,"{","}")},
aF(a,b){var s,r=this.gH(this)
if(!r.n())return""
if(b===""){s=""
do s+=A.k(r.gq())
while(r.n())}else{s=""+A.k(r.gq())
for(;r.n();)s=s+b+A.k(r.gq())}return s.charCodeAt(0)==0?s:s},
bb(a,b){return A.nS(this,b,A.A(this).h("aZ.E"))},
gaq(a){var s=this.gH(this)
if(!s.n())throw A.d(A.an())
return s.gq()},
gu(a){var s,r=this.gH(this)
if(!r.n())throw A.d(A.an())
do s=r.gq()
while(r.n())
return s},
af(a,b){var s,r,q,p="index"
A.fk(b,p,t.S)
A.bb(b,p)
for(s=this.gH(this),r=0;s.n();){q=s.gq()
if(b===r)return q;++r}throw A.d(A.h7(b,this,p,null,r))}}
A.eA.prototype={$iQ:1,$ij:1,$ibx:1}
A.dz.prototype={
oC(a,b){var s,r,q=this.ib()
for(s=this.gH(this);s.n();){r=s.gq()
if(b.F(0,r))q.p(0,r)}return q},
$iQ:1,
$ij:1,
$ibx:1}
A.iA.prototype={}
A.f8.prototype={
ib(){return A.ms(this.$ti.c)},
gH(a){var s=this.a.gbq()
return s.gH(s)},
gm(a){var s=this.a
return s.gm(s)}}
A.eX.prototype={}
A.f0.prototype={}
A.fd.prototype={}
A.fe.prototype={}
A.kL.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:19}
A.kK.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:19}
A.fB.prototype={
dX(a,b){var s
t.L.a(b)
s=B.aF.fu(b)
return s}}
A.ix.prototype={
fu(a){var s,r,q,p
t.L.a(a)
s=A.aF(0,null,a.gm(a))
for(r=0<s,q=~this.b>>>0;r;){p=a.j(0,0)
p.k6(0,q)
if(!this.a)throw A.d(A.aE("Invalid value in input: "+A.k(p),null,null))
return this.mf(a,0,s)}return A.ad(a,0,s)},
mf(a,b,c){var s,r,q
t.L.a(a)
for(s=~this.b>>>0,r=b,q="";r<c;++r){a.j(0,r).k6(0,s)
q+=A.ba(65533)}return q.charCodeAt(0)==0?q:q}}
A.fC.prototype={}
A.fE.prototype={
oP(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="Invalid base64 encoding length "
a3=A.aF(a2,a3,a1.length)
s=$.pz()
for(r=s.length,q=a2,p=q,o=null,n=-1,m=-1,l=0;q<a3;q=k){k=q+1
j=B.b.E(a1,q)
if(j===37){i=k+2
if(i<=a3){h=A.lY(B.b.E(a1,k))
g=A.lY(B.b.E(a1,k+1))
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
c=d.a+=B.b.B(a1,p,q)
d.a=c+A.ba(j)
p=k
continue}}throw A.d(A.aE("Invalid base64 data",a1,q))}if(o!=null){r=o.a+=B.b.B(a1,p,a3)
d=r.length
if(n>=0)A.nm(a1,m,a3,n,l,d)
else{b=B.e.a6(d-1,4)+1
if(b===1)throw A.d(A.aE(a0,a1,a3))
for(;b<4;){r+="="
o.a=r;++b}}r=o.a
return B.b.ck(a1,a2,a3,r.charCodeAt(0)==0?r:r)}a=a3-a2
if(n>=0)A.nm(a1,m,a3,n,l,a)
else{b=B.e.a6(a,4)
if(b===1)throw A.d(A.aE(a0,a1,a3))
if(b>1)a1=B.b.ck(a1,a3,a3,b===2?"==":"=")}return a1}}
A.fF.prototype={}
A.cy.prototype={}
A.cz.prototype={}
A.fV.prototype={}
A.i_.prototype={
dX(a,b){t.L.a(b)
return B.e3.fu(b)}}
A.i0.prototype={
fu(a){var s,r
t.L.a(a)
s=this.a
r=A.qZ(s,a,0,null)
if(r!=null)return r
return new A.lw(s).nM(a,0,null,!0)}}
A.lw.prototype={
nM(a,b,c,d){var s,r,q,p,o,n=this
t.L.a(a)
s=A.aF(b,c,J.M(a))
if(b===s)return""
r=A.rE(a,b,s)
q=n.f1(r,0,s-b,!0)
p=n.b
if((p&1)!==0){o=A.rF(p)
n.b=0
throw A.d(A.aE(o,a,b+n.c))}return q},
f1(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.e.aV(b+c,2)
r=q.f1(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.f1(a,s,c,d)}return q.nP(a,b,c,d)},
nP(a,b,c,d){var s,r,q,p,o,n,m,l,k=this,j=65533,i=k.b,h=k.c,g=new A.a2(""),f=b+1,e=a.length
if(!(b>=0&&b<e))return A.c(a,b)
s=a[b]
$label0$0:for(r=k.a;!0;){for(;!0;f=o){q=B.b.E("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",s)&31
h=i<=32?s&61694>>>q:(s&63|h<<6)>>>0
i=B.b.E(" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",i+q)
if(i===0){g.a+=A.ba(h)
if(f===c)break $label0$0
break}else if((i&1)!==0){if(r)switch(i){case 69:case 67:g.a+=A.ba(j)
break
case 65:g.a+=A.ba(j);--f
break
default:p=g.a+=A.ba(j)
g.a=p+A.ba(j)
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
g.a+=A.ba(a[l])}else g.a+=A.ad(a,f,n)
if(n===c)break $label0$0
f=o}else f=o}if(d&&i>32)if(r)g.a+=A.ba(j)
else{k.b=77
k.c=c
return""}k.b=i
k.c=h
e=g.a
return e.charCodeAt(0)==0?e:e}}
A.l5.prototype={}
A.a1.prototype={
gdC(){return A.cq(this.$thrownJsError)}}
A.dN.prototype={
l(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.fW(s)
return"Assertion failed"}}
A.ch.prototype={}
A.hl.prototype={
l(a){return"Throw of null."}}
A.bD.prototype={
gf5(){return"Invalid argument"+(!this.a?"(s)":"")},
gf4(){return""},
l(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.k(p),n=s.gf5()+q+o
if(!s.a)return n
return n+s.gf4()+": "+A.fW(s.b)}}
A.dm.prototype={
gf5(){return"RangeError"},
gf4(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.k(q):""
else if(q==null)s=": Not greater than or equal to "+A.k(r)
else if(q>r)s=": Not in inclusive range "+A.k(r)+".."+A.k(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.k(r)
return s}}
A.h6.prototype={
gf5(){return"RangeError"},
gf4(){if(A.a0(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gm(a){return this.f}}
A.hX.prototype={
l(a){return"Unsupported operation: "+this.a}}
A.eN.prototype={
l(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
A.cf.prototype={
l(a){return"Bad state: "+this.a}}
A.fP.prototype={
l(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.fW(s)+"."}}
A.hq.prototype={
l(a){return"Out of Memory"},
gdC(){return null},
$ia1:1}
A.eE.prototype={
l(a){return"Stack Overflow"},
gdC(){return null},
$ia1:1}
A.fR.prototype={
l(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.il.prototype={
l(a){return"Exception: "+this.a},
$ibQ:1}
A.e6.prototype={
l(a){var s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=""!==h?"FormatException: "+h:"FormatException",f=this.c,e=this.b
if(typeof e=="string"){if(f!=null)s=f<0||f>e.length
else s=!1
if(s)f=null
if(f==null){if(e.length>78)e=B.b.B(e,0,75)+"..."
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
i=""}return g+j+B.b.B(e,k,l)+i+"\n"+B.b.A(" ",f-k+j.length)+"^\n"}else return f!=null?g+(" (at offset "+A.k(f)+")"):g},
$ibQ:1}
A.j.prototype={
eh(a,b,c){var s=A.A(this)
return A.jY(this,s.Y(c).h("1(j.E)").a(b),s.h("j.E"),c)},
ey(a,b){var s=A.A(this)
return new A.aq(this,s.h("B(j.E)").a(b),s.h("aq<j.E>"))},
cC(a,b){var s
A.A(this).h("B(j.E)").a(b)
for(s=this.gH(this);s.n();)if(!A.ax(b.$1(s.gq())))return!1
return!0},
b5(a,b){var s
A.A(this).h("B(j.E)").a(b)
for(s=this.gH(this);s.n();)if(A.ax(b.$1(s.gq())))return!0
return!1},
bu(a,b){return A.h(this,b,A.A(this).h("j.E"))},
aC(a){return this.bu(a,!0)},
gm(a){var s,r=this.gH(this)
for(s=0;r.n();)++s
return s},
gag(a){return!this.gH(this).n()},
gcF(a){return!this.gag(this)},
bb(a,b){return A.nS(this,b,A.A(this).h("j.E"))},
gaq(a){var s=this.gH(this)
if(!s.n())throw A.d(A.an())
return s.gq()},
gu(a){var s,r=this.gH(this)
if(!r.n())throw A.d(A.an())
do s=r.gq()
while(r.n())
return s},
af(a,b){var s,r,q
A.bb(b,"index")
for(s=this.gH(this),r=0;s.n();){q=s.gq()
if(b===r)return q;++r}throw A.d(A.h7(b,this,"index",null,r))},
l(a){return A.qa(this,"(",")")}}
A.U.prototype={}
A.bj.prototype={
l(a){return"MapEntry("+A.k(this.a)+": "+A.k(this.b)+")"}}
A.ak.prototype={
gW(a){return A.H.prototype.gW.call(this,this)},
l(a){return"null"}}
A.H.prototype={$iH:1,
V(a,b){return this===b},
gW(a){return A.bI(this)},
l(a){return"Instance of '"+A.kj(this)+"'"},
toString(){return this.l(this)}}
A.iw.prototype={
l(a){return""},
$icd:1}
A.hB.prototype={
gH(a){return new A.hA(this.a)},
gu(a){var s,r,q=this.a,p=q.length
if(p===0)throw A.d(A.av("No elements."))
s=B.b.I(q,p-1)
if((s&64512)===56320&&p>1){r=B.b.I(q,p-2)
if((r&64512)===55296)return A.oy(r,s)}return s}}
A.hA.prototype={
gq(){return this.d},
n(){var s,r,q,p=this,o=p.b=p.c,n=p.a,m=n.length
if(o===m){p.d=-1
return!1}s=B.b.E(n,o)
r=o+1
if((s&64512)===55296&&r<m){q=B.b.E(n,r)
if((q&64512)===56320){p.c=r+1
p.d=A.oy(s,q)
return!0}}p.c=r
p.d=s
return!0},
$iU:1}
A.a2.prototype={
gm(a){return this.a.length},
l(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$iqN:1}
A.kH.prototype={
$2(a,b){throw A.d(A.aE("Illegal IPv4 address, "+a,this.a,b))},
$S:51}
A.kI.prototype={
$2(a,b){throw A.d(A.aE("Illegal IPv6 address, "+a,this.a,b))},
$S:52}
A.kJ.prototype={
$2(a,b){var s
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
s=A.cr(B.b.B(this.b,a,b),16)
if(s<0||s>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return s},
$S:10}
A.f9.prototype={
gio(){var s,r,q,p,o=this,n=o.w
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
gfW(){var s,r,q=this,p=q.x
if(p===$){s=q.e
if(s.length!==0&&B.b.E(s,0)===47)s=B.b.av(s,1)
r=s.length===0?B.o:A.nF(new A.I(A.a(s.split("/"),t.s),t.f6.a(A.tr()),t.iZ),t.N)
q.x!==$&&A.C("pathSegments")
q.sm5(r)
p=r}return p},
gW(a){var s,r=this,q=r.y
if(q===$){s=B.b.gW(r.gio())
r.y!==$&&A.C("hashCode")
r.y=s
q=s}return q},
gdq(){return this.b},
gbp(a){var s=this.c
if(s==null)return""
if(B.b.Z(s,"["))return B.b.B(s,1,s.length-1)
return s},
gcJ(a){var s=this.d
return s==null?A.oi(this.a):s},
gcj(){var s=this.f
return s==null?"":s},
geb(){var s=this.r
return s==null?"":s},
oE(a){var s=this.a
if(a.length!==s.length)return!1
return A.rJ(a,s,0)>=0},
i7(a,b){var s,r,q,p,o,n
for(s=0,r=0;B.b.aa(b,"../",r);){r+=3;++s}q=B.b.fR(a,"/")
while(!0){if(!(q>0&&s>0))break
p=B.b.eg(a,"/",q-1)
if(p<0)break
o=q-p
n=o!==2
if(!n||o===3)if(B.b.I(a,p+1)===46)n=!n||B.b.I(a,p+2)===46
else n=!1
else n=!1
if(n)break;--s
q=p}return B.b.ck(a,q+1,null,B.b.av(b,r-3*s))},
jQ(a){return this.dm(A.mE(a))},
dm(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=null
if(a.gaT().length!==0){s=a.gaT()
if(a.gdd()){r=a.gdq()
q=a.gbp(a)
p=a.gde()?a.gcJ(a):h}else{p=h
q=p
r=""}o=A.c0(a.gaS(a))
n=a.gcD()?a.gcj():h}else{s=i.a
if(a.gdd()){r=a.gdq()
q=a.gbp(a)
p=A.mO(a.gde()?a.gcJ(a):h,s)
o=A.c0(a.gaS(a))
n=a.gcD()?a.gcj():h}else{r=i.b
q=i.c
p=i.d
o=i.e
if(a.gaS(a)==="")n=a.gcD()?a.gcj():i.f
else{m=A.rD(i,o)
if(m>0){l=B.b.B(o,0,m)
o=a.gec()?l+A.c0(a.gaS(a)):l+A.c0(i.i7(B.b.av(o,l.length),a.gaS(a)))}else if(a.gec())o=A.c0(a.gaS(a))
else if(o.length===0)if(q==null)o=s.length===0?a.gaS(a):A.c0(a.gaS(a))
else o=A.c0("/"+a.gaS(a))
else{k=i.i7(o,a.gaS(a))
j=s.length===0
if(!j||q!=null||B.b.Z(o,"/"))o=A.c0(k)
else o=A.mQ(k,!j||q!=null)}n=a.gcD()?a.gcj():h}}}return A.lv(s,r,q,p,o,n,a.gfO()?a.geb():h)},
gdd(){return this.c!=null},
gde(){return this.d!=null},
gcD(){return this.f!=null},
gfO(){return this.r!=null},
gec(){return B.b.Z(this.e,"/")},
h2(){var s,r=this,q=r.a
if(q!==""&&q!=="file")throw A.d(A.T("Cannot extract a file path from a "+q+" URI"))
q=r.f
if((q==null?"":q)!=="")throw A.d(A.T(u.z))
q=r.r
if((q==null?"":q)!=="")throw A.d(A.T(u.U))
q=$.nd()
if(A.ax(q))q=A.ot(r)
else{if(r.c!=null&&r.gbp(r)!=="")A.N(A.T(u.Q))
s=r.gfW()
A.rw(s,!1)
q=A.ky(B.b.Z(r.e,"/")?""+"/":"",s,"/")
q=q.charCodeAt(0)==0?q:q}return q},
l(a){return this.gio()},
V(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(t.jJ.b(b))if(q.a===b.gaT())if(q.c!=null===b.gdd())if(q.b===b.gdq())if(q.gbp(q)===b.gbp(b))if(q.gcJ(q)===b.gcJ(b))if(q.e===b.gaS(b)){s=q.f
r=s==null
if(!r===b.gcD()){if(r)s=""
if(s===b.gcj()){s=q.r
r=s==null
if(!r===b.gfO()){if(r)s=""
s=s===b.geb()}else s=!1}else s=!1}else s=!1}else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s},
sm5(a){this.x=t.I.a(a)},
$ihY:1,
gaT(){return this.a},
gaS(a){return this.e}}
A.kG.prototype={
gjX(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return A.c(m,0)
s=o.a
m=m[0]+1
r=B.b.aR(s,"?",m)
q=s.length
if(r>=0){p=A.fa(s,r+1,q,B.J,!1,!1)
q=r}else p=n
m=o.c=new A.ib("data","",n,n,A.fa(s,m,q,B.aj,!1,!1),p,n)}return m},
l(a){var s,r=this.b
if(0>=r.length)return A.c(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
A.lD.prototype={
$2(a,b){var s=this.a
if(!(a<s.length))return A.c(s,a)
s=s[a]
B.cN.ol(s,0,96,b)
return s},
$S:54}
A.lE.prototype={
$3(a,b,c){var s,r,q
for(s=b.length,r=0;r<s;++r){q=B.b.E(b,r)^96
if(!(q<96))return A.c(a,q)
a[q]=c}},
$S:20}
A.lF.prototype={
$3(a,b,c){var s,r,q
for(s=B.b.E(b,0),r=B.b.E(b,1);s<=r;++s){q=(s^96)>>>0
if(!(q<96))return A.c(a,q)
a[q]=c}},
$S:20}
A.bn.prototype={
gdd(){return this.c>0},
gde(){return this.c>0&&this.d+1<this.e},
gcD(){return this.f<this.r},
gfO(){return this.r<this.a.length},
gec(){return B.b.aa(this.a,"/",this.e)},
gaT(){var s=this.w
return s==null?this.w=this.md():s},
md(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.b.Z(r.a,"http"))return"http"
if(q===5&&B.b.Z(r.a,"https"))return"https"
if(s&&B.b.Z(r.a,"file"))return"file"
if(q===7&&B.b.Z(r.a,"package"))return"package"
return B.b.B(r.a,0,q)},
gdq(){var s=this.c,r=this.b+3
return s>r?B.b.B(this.a,r,s-1):""},
gbp(a){var s=this.c
return s>0?B.b.B(this.a,s,this.d):""},
gcJ(a){var s,r=this
if(r.gde())return A.cr(B.b.B(r.a,r.d+1,r.e),null)
s=r.b
if(s===4&&B.b.Z(r.a,"http"))return 80
if(s===5&&B.b.Z(r.a,"https"))return 443
return 0},
gaS(a){return B.b.B(this.a,this.e,this.f)},
gcj(){var s=this.f,r=this.r
return s<r?B.b.B(this.a,s+1,r):""},
geb(){var s=this.r,r=this.a
return s<r.length?B.b.av(r,s+1):""},
gfW(){var s,r,q=this.e,p=this.f,o=this.a
if(B.b.aa(o,"/",q))++q
if(q===p)return B.o
s=A.a([],t.s)
for(r=q;r<p;++r)if(B.b.I(o,r)===47){B.a.p(s,B.b.B(o,q,r))
q=r+1}B.a.p(s,B.b.B(o,q,p))
return A.nF(s,t.N)},
i1(a){var s=this.d+1
return s+a.length===this.e&&B.b.aa(this.a,a,s)},
po(){var s=this,r=s.r,q=s.a
if(r>=q.length)return s
return new A.bn(B.b.B(q,0,r),s.b,s.c,s.d,s.e,s.f,r,s.w)},
jQ(a){return this.dm(A.mE(a))},
dm(a){if(a instanceof A.bn)return this.mw(this,a)
return this.ir().dm(a)},
mw(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.b
if(c>0)return b
s=b.c
if(s>0){r=a.b
if(r<=0)return b
q=r===4
if(q&&B.b.Z(a.a,"file"))p=b.e!==b.f
else if(q&&B.b.Z(a.a,"http"))p=!b.i1("80")
else p=!(r===5&&B.b.Z(a.a,"https"))||!b.i1("443")
if(p){o=r+1
return new A.bn(B.b.B(a.a,0,o)+B.b.av(b.a,c+1),r,s+o,b.d+o,b.e+o,b.f+o,b.r+o,a.w)}else return this.ir().dm(b)}n=b.e
c=b.f
if(n===c){s=b.r
if(c<s){r=a.f
o=r-c
return new A.bn(B.b.B(a.a,0,r)+B.b.av(b.a,c),a.b,a.c,a.d,a.e,c+o,s+o,a.w)}c=b.a
if(s<c.length){r=a.r
return new A.bn(B.b.B(a.a,0,r)+B.b.av(c,s),a.b,a.c,a.d,a.e,a.f,s+(r-s),a.w)}return a.po()}s=b.a
if(B.b.aa(s,"/",n)){m=a.e
l=A.oc(this)
k=l>0?l:m
o=k-n
return new A.bn(B.b.B(a.a,0,k)+B.b.av(s,n),a.b,a.c,a.d,m,c+o,b.r+o,a.w)}j=a.e
i=a.f
if(j===i&&a.c>0){for(;B.b.aa(s,"../",n);)n+=3
o=j-n+1
return new A.bn(B.b.B(a.a,0,j)+"/"+B.b.av(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.w)}h=a.a
l=A.oc(this)
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
return new A.bn(B.b.B(h,0,i)+d+B.b.av(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.w)},
h2(){var s,r,q=this,p=q.b
if(p>=0){s=!(p===4&&B.b.Z(q.a,"file"))
p=s}else p=!1
if(p)throw A.d(A.T("Cannot extract a file path from a "+q.gaT()+" URI"))
p=q.f
s=q.a
if(p<s.length){if(p<q.r)throw A.d(A.T(u.z))
throw A.d(A.T(u.U))}r=$.nd()
if(A.ax(r))p=A.ot(q)
else{if(q.c<q.d)A.N(A.T(u.Q))
p=B.b.B(s,q.e,p)}return p},
gW(a){var s=this.x
return s==null?this.x=B.b.gW(this.a):s},
V(a,b){if(b==null)return!1
if(this===b)return!0
return t.jJ.b(b)&&this.a===b.l(0)},
ir(){var s=this,r=null,q=s.gaT(),p=s.gdq(),o=s.c>0?s.gbp(s):r,n=s.gde()?s.gcJ(s):r,m=s.a,l=s.f,k=B.b.B(m,s.e,l),j=s.r
l=l<j?s.gcj():r
return A.lv(q,p,o,n,k,l,j<m.length?s.geb():r)},
l(a){return this.a},
$ihY:1}
A.ib.prototype={}
A.x.prototype={}
A.fw.prototype={
l(a){var s=String(a)
s.toString
return s}}
A.fz.prototype={
l(a){var s=String(a)
s.toString
return s}}
A.cw.prototype={
sbo(a,b){a.height=b},
spT(a,b){a.width=b},
$icw:1}
A.dT.prototype={
sfL(a,b){a.fillStyle=b},
shx(a,b){a.strokeStyle=b},
ln(a,b){return a.stroke(b)},
$idT:1}
A.bE.prototype={
gm(a){return a.length}}
A.jc.prototype={
l(a){var s=String(a)
s.toString
return s}}
A.dX.prototype={
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
return A.cL(p,s,r,q)},
$imy:1}
A.p.prototype={
l(a){var s=a.localName
s.toString
return s},
$ip:1}
A.q.prototype={$iq:1}
A.aU.prototype={
m7(a,b,c,d){return a.addEventListener(b,A.dE(t.U.a(c),1),!1)},
ms(a,b,c,d){return a.removeEventListener(b,A.dE(t.U.a(c),1),!1)},
$iaU:1}
A.fZ.prototype={
gm(a){return a.length}}
A.b9.prototype={$ib9:1}
A.b4.prototype={
l(a){var s=a.nodeValue
return s==null?this.lr(a):s}}
A.hs.prototype={$ihs:1}
A.hE.prototype={
gm(a){return a.length}}
A.bz.prototype={}
A.du.prototype={
gn6(a){var s=new A.as($.aa,t.iS),r=t.hv.a(new A.kZ(new A.f2(s,t.fD)))
this.mi(a)
r=A.oM(r,t.p)
r.toString
this.mt(a,r)
return s},
mt(a,b){var s=a.requestAnimationFrame(A.dE(t.hv.a(b),1))
s.toString
return s},
mi(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=["ms","moz","webkit","o"]
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+"RequestAnimationFrame"]
b.cancelAnimationFrame=b[r[q]+"CancelAnimationFrame"]||b[r[q]+"CancelRequestAnimationFrame"]}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
A.kZ.prototype={
$1(a){this.a.fq(0,A.ly(a))},
$S:61}
A.eR.prototype={
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
return A.cL(p,s,r,q)}}
A.mk.prototype={}
A.eT.prototype={}
A.ih.prototype={}
A.eU.prototype={
nr(){var s,r=this,q=r.b
if(q==null)return $.nf()
s=r.d
if(s!=null)J.pD(q,r.c,t.U.a(s),!1)
r.b=null
r.smq(null)
return $.nf()},
smq(a){this.d=t.U.a(a)}}
A.l7.prototype={
$1(a){return this.a.$1(t.fq.a(a))},
$S:63}
A.ir.prototype={
lS(a){var s,r,q,p,o,n,m,l=this,k=4294967296
do{s=a>>>0
a=B.e.aV(a-s,k)
r=a>>>0
a=B.e.aV(a-r,k)
q=(~s>>>0)+(s<<21>>>0)
p=q>>>0
r=(~r>>>0)+((r<<21|s>>>11)>>>0)+B.e.aV(q-p,k)>>>0
q=((p^(p>>>24|r<<8))>>>0)*265
s=q>>>0
r=((r^r>>>24)>>>0)*265+B.e.aV(q-s,k)>>>0
q=((s^(s>>>14|r<<18))>>>0)*21
s=q>>>0
r=((r^r>>>14)>>>0)*21+B.e.aV(q-s,k)>>>0
s=(s^(s>>>28|r<<4))>>>0
r=(r^r>>>28)>>>0
q=(s<<31>>>0)+s
p=q>>>0
o=B.e.aV(q-p,k)
q=l.a*1037
n=l.a=q>>>0
m=l.b*1037+B.e.aV(q-n,k)>>>0
l.b=m
n=(n^p)>>>0
l.a=n
o=(m^r+((r<<31|s>>>1)>>>0)+o>>>0)>>>0
l.b=o}while(a!==0)
if(o===0&&n===0)l.a=23063
l.bD()
l.bD()
l.bD()
l.bD()},
bD(){var s=this,r=s.a,q=4294901760*r,p=q>>>0,o=55905*r,n=o>>>0,m=n+p+s.b
r=m>>>0
s.a=r
s.b=B.e.aV(o-n+(q-p)+(m-r),4294967296)>>>0},
c3(a){var s,r,q,p=this
if(a<=0||a>4294967296)throw A.d(A.aA("max must be in range 0 < max \u2264 2^32, was "+a))
s=a-1
if((a&s)===0){p.bD()
return(p.a&s)>>>0}do{p.bD()
r=p.a
q=r%a}while(r-q+a>=4294967296)
return q},
b9(){var s,r=this
r.bD()
s=r.a
r.bD()
return((s&67108863)*134217728+(r.a&134217727))/9007199254740992},
ej(){this.bD()
return(this.a&1)===0},
$iqx:1}
A.cM.prototype={
l(a){return"Point("+A.k(this.a)+", "+A.k(this.b)+")"},
V(a,b){if(b==null)return!1
return b instanceof A.cM&&this.a===b.a&&this.b===b.b},
gW(a){return A.nV(B.h.gW(this.a),B.h.gW(this.b),0)}}
A.au.prototype={
gH(a){var s=this.$ti,r=J.u(this.a,new A.jO(this),s.h("U<1>"))
return new A.eV(A.h(r,!1,r.$ti.h("D.E")),s.h("eV<1>"))}}
A.jO.prototype={
$1(a){return J.F(this.a.$ti.h("j<1>").a(a))},
$S(){return this.a.$ti.h("U<1>(j<1>)")}}
A.eV.prototype={
n(){var s,r,q,p=this,o=p.a
if(o.length===0)return!1
for(s=0;r=o.length,s<r;++s)if(!o[s].n()){p.si3(null)
return!1}if(r>4294967295)A.N(A.a_(r,0,4294967295,"length",null))
q=J.nz(new Array(r),p.$ti.c)
for(s=0;s<r;++s){if(!(s<o.length))return A.c(o,s)
q[s]=o[s].gq()}p.si3(q)
return!0},
gq(){var s=this.b
return s==null?A.N(A.av("No element")):s},
si3(a){this.b=this.$ti.h("l<1>?").a(a)},
$iU:1}
A.lp.prototype={
bC(){var s=this,r=s.d
r===$&&A.b("_peekToken")
s.c=r
s.d=t.q.a(s.a.ar(!1))
return r},
i6(a,b){var s=this,r=s.d
r===$&&A.b("_peekToken")
if(r.a===a){s.c=r
s.d=t.q.a(s.a.ar(!1))
return!0}else return!1},
dH(a){return this.i6(a,!1)},
aU(a){if(!this.i6(a,!1))this.f3(A.nX(a))},
f3(a){var s,r=this.bC(),q=null
try{q="expected "+a+", but found "+A.k(r)}catch(s){q="parsing error expected "+a}this.ct(q,r.b)},
ct(a,b){$.ff.ii().o6(0,a,b)},
ab(a){var s=this.c
if(s==null||s.b.aD(0,a)<0)return a
return a.o8(0,this.c.b)},
p7(){var s,r,q=this,p=A.a([],t.b7),o=q.d
o===$&&A.b("_peekToken")
s=q.a
s.e=!0
do{r=q.jH()
if(r!=null)B.a.p(p,r)}while(q.dH(19))
s.e=!1
if(p.length!==0)return new A.hF(p,q.ab(o.b))
return null},
jH(){var s,r=A.a([],t.iM),q=this.d
q===$&&A.b("_peekToken")
for(;!0;){s=this.l7(r.length===0)
if(s!=null)B.a.p(r,s)
else break}if(r.length===0)return null
return new A.cc(r,this.ab(q.b))},
p0(){var s,r,q,p,o,n,m=this.jH()
if(m!=null)for(s=m.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.e)(s),++q){p=s[q]
if(p.b!==513){o=$.ff.b
if(o==$.ff)A.N(A.mq($.ff.a))
n=new A.df(B.M,"compound selector can not contain combinator",p.a,o.b.w)
B.a.p(o.c,n)
o.a.$1(n)}}return m},
l7(a){var s,r,q,p,o,n,m=this,l=m.d
l===$&&A.b("_peekToken")
switch(l.a){case 12:m.aU(12)
s=515
r=!1
break
case 13:m.aU(13)
s=516
r=!1
break
case 14:m.aU(14)
s=517
r=!1
break
case 36:m.aU(36)
s=513
r=!0
break
default:s=513
r=!1}if(s===513&&!a){q=m.c
if(q!=null){q=q.b
q=A.c5(q.a,q.c)
p=m.d.b
p=q.b!==A.c5(p.a,p.b).b
q=p}else q=!1
if(q)s=514}o=m.ab(l.b)
n=r?new A.cA(new A.hP(o),o):m.hp()
if(n==null)l=s===515||s===516||s===517
else l=!1
if(l)n=new A.cA(new A.bS("",o),o)
if(n!=null)return new A.eB(s,n,o)
return null},
hp(){var s,r,q,p=this,o=p.d
o===$&&A.b("_peekToken")
s=o.b
o=o.a
switch(o){case 15:r=new A.cj(p.ab(p.bC().b))
break
case 511:r=p.bI()
break
default:if(A.nW(o))r=p.bI()
else{if(o===9)return null
r=null}break}if(p.dH(16)){o=p.d
switch(o.a){case 15:q=new A.cj(p.ab(p.bC().b))
break
case 511:q=p.bI()
break
default:p.ct("expected element name or universal(*), but found "+o.l(0),p.d.b)
q=null
break}return new A.hg(r,new A.cA(q,q.a),p.ab(s))}else if(r!=null)return new A.cA(r,p.ab(s))
else return p.l8()},
hL(a){var s,r=this.c
if(r!=null&&r.a===a){r=r.b
r=A.c5(r.a,r.c)
s=this.d
s===$&&A.b("_peekToken")
s=s.b
return r.b!==A.c5(s.a,s.b).b}return!1},
l8(){var s,r=this,q=r.d
q===$&&A.b("_peekToken")
s=q.b
switch(q.a){case 11:r.aU(11)
if(r.hL(11)){r.ct("Not a valid ID selector expected #id",r.ab(s))
return null}return new A.h1(r.bI(),r.ab(s))
case 8:r.aU(8)
if(r.hL(8)){r.ct("Not a valid class selector expected .className",r.ab(s))
return null}return new A.fL(r.bI(),r.ab(s))
case 17:return r.p5(s)
case 4:return r.p_()
case 62:r.ct("name must start with a alpha character, but found a number",s)
r.bC()
break}return null},
p5(a){var s,r,q,p,o,n,m,l,k=this
k.aU(17)
s=k.dH(17)
r=k.d
r===$&&A.b("_peekToken")
if(r.a===511)q=k.bI()
else return null
p=q.b.toLowerCase()
if(k.d.a===2){r=!s
if(r&&p==="not"){k.aU(2)
o=k.hp()
k.aU(3)
r=k.ab(a)
return new A.hk(o,new A.hj(r),r)}else{if(r)r=p==="host"||p==="host-context"||p==="global-context"||p==="-acx-global-context"
else r=!1
if(r){k.aU(2)
n=k.p0()
if(n==null){k.f3("a selector argument")
return null}k.aU(3)
return new A.ev(n,q,k.ab(a))}else{r=k.a
r.d=!0
k.aU(2)
m=k.ab(a)
l=k.p6()
r.d=!1
if(l instanceof A.dq){k.aU(3)
return s?new A.hx(!1,q,m):new A.ev(l,q,m)}else{k.f3("CSS expression")
return null}}}}r=!s
return!r||B.e1.a.aj(p)?new A.dl(r,q,k.ab(a)):new A.dk(q,k.ab(a))},
p6(){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.d
g===$&&A.b("_peekToken")
s=g.b
r=A.a([],t.oQ)
for(g=i.a,q=t.q,p=h,o=p,n=!0;n;){m=i.d
switch(m.a){case 12:s=m.b
i.c=m
i.d=q.a(g.ar(!1))
B.a.p(r,new A.hp(i.ab(s)))
o=m
break
case 34:s=m.b
i.c=m
i.d=q.a(g.ar(!1))
B.a.p(r,new A.ho(i.ab(s)))
o=m
break
case 60:i.c=m
i.d=q.a(g.ar(!1))
p=A.cr(m.gX(m),h)
o=m
break
case 62:i.c=m
i.d=q.a(g.ar(!1))
p=A.bO(m.gX(m))
o=m
break
case 25:p="'"+A.oA(i.fY(!1),!0)+"'"
return new A.ag(p,p,i.ab(s))
case 26:p='"'+A.oA(i.fY(!1),!1)+'"'
return new A.ag(p,p,i.ab(s))
case 511:p=i.bI()
break
default:n=!1}if(n&&p!=null){l=i.ab(s)
k=i.d.a
switch(k){case 600:j=new A.fU(p,o.gX(o),l)
i.c=i.d
i.d=q.a(g.ar(!1))
break
case 601:j=new A.fX(p,o.gX(o),l)
i.c=i.d
i.d=q.a(g.ar(!1))
break
case 602:case 603:case 604:case 605:case 606:case 607:j=new A.hb(k,p,o.gX(o),l)
i.c=i.d
i.d=q.a(g.ar(!1))
break
case 608:case 609:case 610:case 611:j=new A.fx(k,p,o.gX(o),l)
i.c=i.d
i.d=q.a(g.ar(!1))
break
case 612:case 613:j=new A.hQ(k,p,o.gX(o),l)
i.c=i.d
i.d=q.a(g.ar(!1))
break
case 614:case 615:j=new A.h0(k,p,o.gX(o),l)
i.c=i.d
i.d=q.a(g.ar(!1))
break
case 24:j=new A.hu(p,o.gX(o),l)
i.c=i.d
i.d=q.a(g.ar(!1))
break
case 617:j=new A.h_(p,o.gX(o),l)
i.c=i.d
i.d=q.a(g.ar(!1))
break
case 618:case 619:case 620:j=new A.hz(k,p,o.gX(o),l)
i.c=i.d
i.d=q.a(g.ar(!1))
break
case 621:j=new A.fJ(k,p,o.gX(o),l)
i.c=i.d
i.d=q.a(g.ar(!1))
break
case 622:j=new A.hy(k,p,o.gX(o),l)
i.c=i.d
i.d=q.a(g.ar(!1))
break
case 623:case 624:case 625:case 626:j=new A.i2(k,p,o.gX(o),l)
i.c=i.d
i.d=q.a(g.ar(!1))
break
default:j=p instanceof A.bS?new A.ag(p,p.b,l):new A.hn(p,o.gX(o),l)}B.a.p(r,j)
p=h}}return new A.dq(r,i.ab(s))},
p_(){var s,r,q,p=this,o=p.d
o===$&&A.b("_peekToken")
if(p.dH(4)){s=p.bI()
r=p.d.a
switch(r){case 28:case 530:case 531:case 532:case 533:case 534:p.bC()
break
default:r=535}if(r!==535)q=p.d.a===511?p.bI():p.fY(!1)
else q=null
p.aU(5)
return new A.fD(r,q,s,p.ab(o.b))}return null},
fY(a){var s,r,q,p,o,n,m=this,l=m.d
l===$&&A.b("_peekToken")
s=m.a
r=s.c
s.c=!1
switch(l.a){case 25:m.bC()
q=25
break
case 26:m.bC()
q=26
break
default:m.ct("unexpected string",m.ab(l.b))
q=-1
break}l=t.q
p=""
while(!0){o=m.d
n=o.a
if(!(n!==q&&n!==1))break
m.c=o
m.d=l.a(s.ar(!1))
p+=o.gX(o)}s.c=r
if(q!==3)m.bC()
return p.charCodeAt(0)==0?p:p},
bI(){var s=this.bC(),r=s.a
if(r!==511&&!A.nW(r)){$.ff.ii()
return new A.bS("",this.ab(s.b))}return new A.bS(s.gX(s),this.ab(s.b))}}
A.bl.prototype={
gX(a){var s=this.b
return A.ad(B.y.bc(s.a.c,s.b,s.c),0,null)},
l(a){var s=A.nX(this.a),r=B.b.ex(this.gX(this))
if(s!==r){if(r.length>10)r=B.b.B(r,0,8)+"..."
return s+"("+r+")"}else return s}}
A.h2.prototype={
gX(a){return this.c}}
A.kB.prototype={
ar(a){var s,r,q,p,o,n,m,l,k=this
k.r=k.f
s=k.cv()
switch(s){case 10:case 13:case 32:case 9:return k.oo()
case 0:return k.L(1)
case 64:r=k.cw()
if(A.hS(r)||r===45){q=k.f
p=k.r
k.r=q
k.cv()
k.e8()
o=k.b
n=k.r
m=A.mC(B.br,"type",o,n,k.f-n)
if(m===-1){n=k.r
m=A.mC(B.bj,"type",o,n,k.f-n)}if(m!==-1)return k.L(m)
else{k.r=p
k.f=q}}return k.L(10)
case 46:l=k.r
if(k.oO())if(k.e9().a===60){k.r=l
return k.L(62)}else return k.L(65)
return k.L(8)
case 40:return k.L(2)
case 41:return k.L(3)
case 123:return k.L(6)
case 125:return k.L(7)
case 91:return k.L(4)
case 93:if(k.ac(93)&&k.ac(62))return k.cH()
return k.L(5)
case 35:return k.L(11)
case 43:if(k.ic(s))return k.e9()
return k.L(12)
case 45:if(k.d||!1)return k.L(34)
else if(k.ic(s))return k.e9()
else if(A.hS(s)||s===45)return k.e8()
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
case 47:if(k.ac(42))return k.on()
return k.L(27)
case 60:if(k.ac(33))if(k.ac(45)&&k.ac(45))return k.om()
else{if(k.ac(91)){o=k.Q.a
o=k.ac(B.b.E(o,0))&&k.ac(B.b.E(o,1))&&k.ac(B.b.E(o,2))&&k.ac(B.b.E(o,3))&&k.ac(B.b.E(o,4))&&k.ac(91)}else o=!1
if(o)return k.cH()}return k.L(32)
case 61:return k.L(28)
case 94:if(k.ac(61))return k.L(532)
return k.L(30)
case 36:if(k.ac(61))return k.L(533)
return k.L(31)
case 33:return k.e8()
default:if(!k.e&&s===92)return k.L(35)
if(k.c)o=(s===k.w||s===k.x)&&k.cw()===k.y
else o=!1
if(o){k.cv()
k.r=k.f
return k.L(508)}else{o=s===118
if(o&&k.ac(97)&&k.ac(114)&&k.ac(45))return k.L(400)
else if(o&&k.ac(97)&&k.ac(114)&&k.cw()===45)return k.L(401)
else if(A.hS(s)||s===45)return k.e8()
else if(s>=48&&s<=57)return k.e9()}return k.L(65)}},
cH(){return this.ar(!1)},
e8(){var s,r,q,p,o,n,m,l,k,j=this,i=A.a([],t.t),h=j.f
j.f=j.r
r=j.b
s=r.length
while(!0){q=j.f
if(!(q<s)){s=q
break}p=B.b.I(r,q)
if(p===92&&j.c){o=j.f=q+1
j.nZ(o+6)
q=j.f
if(q!==o){B.a.p(i,A.cr("0x"+B.b.B(r,o,q),null))
q=j.f
if(q===s){s=q
break}p=B.b.I(r,q)
if(q-o!==6)n=p===32||p===9||p===13||p===10
else n=!1
if(n)j.f=q+1}else{if(q===s){s=q
break}j.f=q+1
B.a.p(i,B.b.I(r,q))}}else{if(q>=h)if(j.d)if(!A.hS(p))n=p>=48&&p<=57
else n=!0
else{if(!A.hS(p))n=p>=48&&p<=57
else n=!0
n=n||p===45}else n=!0
if(n){B.a.p(i,p);++j.f}else{s=q
break}}}m=j.a.eR(0,j.r,s)
l=A.ad(i,0,null)
if(!j.d&&!j.e){s=j.r
k=A.mC(B.ac,"unit",r,s,j.f-s)}else k=-1
if(k===-1)k=B.b.B(r,j.r,j.f)==="!important"?505:-1
return new A.h2(l,k>=0?k:511,m)},
e9(){var s,r=this
r.j6()
if(r.cw()===46){r.cv()
s=r.cw()
if(s>=48&&s<=57){r.j6()
return r.L(62)}else --r.f}return r.L(60)},
oO(){var s=this.f,r=this.b
if(s<r.length){r=B.b.I(r,s)
r=r>=48&&r<=57}else r=!1
if(r){this.f=s+1
return!0}return!1},
nZ(a){var s,r,q=this.b
a=Math.min(a,q.length)
for(;s=this.f,s<a;){r=B.b.I(q,s)
if(!(r>=48&&r<=57))if(!(r>=97&&r<=102))r=r>=65&&r<=70
else r=!0
else r=!0
if(r)this.f=s+1
else return}},
om(){var s,r,q,p,o,n=this
for(;!0;){s=n.cv()
if(s===0){r=n.a
q=n.r
p=n.f
o=new A.ar(r,q,p)
o.aI(r,q,p)
return new A.bl(67,o)}else if(s===45)if(n.ac(45))if(n.ac(62))if(n.c)return n.cH()
else{r=n.a
q=n.r
p=n.f
o=new A.ar(r,q,p)
o.aI(r,q,p)
return new A.bl(504,o)}}},
on(){var s,r,q,p,o,n=this
for(;!0;){s=n.cv()
if(s===0){r=n.a
q=n.r
p=n.f
o=new A.ar(r,q,p)
o.aI(r,q,p)
return new A.bl(67,o)}else if(s===42)if(n.ac(47))if(n.c)return n.cH()
else{r=n.a
q=n.r
p=n.f
o=new A.ar(r,q,p)
o.aI(r,q,p)
return new A.bl(64,o)}}}}
A.kC.prototype={
cv(){var s=this.f,r=this.b
if(s<r.length){this.f=s+1
return B.b.I(r,s)}else return 0},
ie(a){var s=this.f+a,r=this.b
if(s<r.length)return B.b.I(r,s)
else return 0},
cw(){return this.ie(0)},
ac(a){var s=this.f,r=this.b
if(s<r.length)if(B.b.I(r,s)===a){this.f=s+1
return!0}else return!1
else return!1},
ic(a){var s,r
if(a>=48&&a<=57)return!0
s=this.cw()
if(a===46)return s>=48&&s<=57
if(a===43||a===45){if(!(s>=48&&s<=57))if(s===46){r=this.ie(1)
r=r>=48&&r<=57}else r=!1
else r=!0
return r}return!1},
L(a){return new A.bl(a,this.a.eR(0,this.r,this.f))},
oo(){var s,r,q,p,o=this,n=--o.f
for(s=o.b,r=s.length;n<r;n=q){q=o.f=n+1
p=B.b.I(s,n)
if(!(p===32||p===9||p===13))if(p===10){if(!o.c){n=o.a
s=o.r
r=new A.ar(n,s,q)
r.aI(n,s,q)
return new A.bl(63,r)}}else{n=o.f=q-1
if(o.c)return o.cH()
else{s=o.a
r=o.r
q=new A.ar(s,r,n)
q.aI(s,r,n)
return new A.bl(63,q)}}}return o.L(1)},
j6(){var s,r,q,p
for(s=this.b,r=s.length;q=this.f,q<r;){p=B.b.I(s,q)
if(p>=48&&p<=57)this.f=q+1
else return}}}
A.dg.prototype={
l(a){return"MessageLevel."+this.b}}
A.df.prototype={
l(a){var s=this,r=s.d&&B.ak.aj(s.a),q=r?B.ak.j(0,s.a):null,p=r?""+A.k(q):""
p=p+A.k(B.c6.j(0,s.a))+" "
if(r)p+="\x1b[0m"
p=p+"on "+s.c.jx(0,s.b,q)
return p.charCodeAt(0)==0?p:p}}
A.k2.prototype={
o6(a,b,c){var s=new A.df(B.M,b,c,this.b.w)
B.a.p(this.c,s)
this.a.$1(s)}}
A.ki.prototype={}
A.bS.prototype={
R(a){return null},
l(a){var s=this.a
s=A.ad(B.y.bc(s.a.c,s.b,s.c),0,null)
return s},
gah(a){return this.b}}
A.cj.prototype={
R(a){return null},
gah(a){return"*"}}
A.hP.prototype={
R(a){return null},
gah(a){return"&"}}
A.hj.prototype={
R(a){return null},
gah(a){return"not"}}
A.hF.prototype={
R(a){return B.a.b5(this.b,a.gjZ())}}
A.cc.prototype={
gm(a){return this.b.length},
R(a){return a.k_(this)}}
A.eB.prototype={
R(a){this.c.R(a)
return null},
l(a){var s=this.c.b
return s.gah(s)}}
A.b_.prototype={
gah(a){var s=this.b
return s.gah(s)},
R(a){return t.bF.a(this.b).R(a)}}
A.cA.prototype={
R(a){var s=this.b
return s instanceof A.cj||a.a.x===s.gah(s).toLowerCase()},
l(a){var s=this.b
return s.gah(s)}}
A.hg.prototype={
gjy(){var s=this.d
if(s instanceof A.cj)s="*"
else s=s==null?"":t.gx.a(s).b
return s},
R(a){return a.pO(this)},
l(a){var s=this.gjy(),r=t.g9.a(this.b).b
return s+"|"+r.gah(r)}}
A.fD.prototype={
oM(){switch(this.d){case 28:return"="
case 530:return"~="
case 531:return"|="
case 532:return"^="
case 533:return"$="
case 534:return"*="
case 535:return""}return null},
pM(){var s=this.e
if(s!=null)if(s instanceof A.bS)return s.l(0)
else return'"'+A.k(s)+'"'
else return""},
R(a){return a.pN(this)},
l(a){var s=this.b
return"["+s.gah(s)+A.k(this.oM())+this.pM()+"]"}}
A.h1.prototype={
R(a){var s=a.a.b.j(0,"id"),r=s==null?"":s,q=this.b
return r===q.gah(q)},
l(a){return"#"+A.k(this.b)}}
A.fL.prototype={
R(a){var s,r=a.a
r.toString
s=this.b
s=s.gah(s)
return new A.fT(r).er().F(0,s)},
l(a){return"."+A.k(this.b)}}
A.dk.prototype={
R(a){return a.pQ(this)},
l(a){var s=this.b
return":"+s.gah(s)}}
A.dl.prototype={
R(a){a.pS(this)
return!1},
l(a){var s=this.d?":":"::",r=this.b
return s+r.gah(r)}}
A.ev.prototype={
R(a){return a.pP(this)}}
A.hx.prototype={
R(a){return a.pR(this)}}
A.dq.prototype={
R(a){a.mE(this.b)
return null}}
A.hk.prototype={
R(a){return!A.iB(this.d.R(a))}}
A.hp.prototype={
R(a){return null}}
A.ho.prototype={
R(a){return null}}
A.ag.prototype={
R(a){return null}}
A.hn.prototype={
R(a){return null}}
A.bm.prototype={
R(a){return null},
l(a){return this.d+A.k(A.qU(this.f))}}
A.hb.prototype={
R(a){return null}}
A.hu.prototype={
R(a){return null}}
A.fU.prototype={
R(a){return null}}
A.fX.prototype={
R(a){return null}}
A.fx.prototype={
R(a){return null}}
A.hQ.prototype={
R(a){return null}}
A.h0.prototype={
R(a){return null}}
A.h_.prototype={
R(a){return null}}
A.hz.prototype={
R(a){return null}}
A.fJ.prototype={
R(a){return null}}
A.hy.prototype={
R(a){return null}}
A.i2.prototype={
R(a){return null}}
A.S.prototype={}
A.aj.prototype={}
A.i3.prototype={
mE(a){var s
t.fr.a(a)
for(s=0;s<a.length;++s)a[s].R(this)},
$io5:1}
A.aD.prototype={
l(a){var s=this.a,r=this.b
return s!=null?s+":"+r:r},
gW(a){return 37*(37*(J.aH(this.a)&2097151)+B.b.gW(this.b)&2097151)+B.b.gW(this.c)&1073741823},
aD(a,b){var s,r,q
if(!(b instanceof A.aD))return 1
s=this.a
if(s==null)s=""
r=b.a
q=B.b.aD(s,r==null?"":r)
if(q!==0)return q
q=B.b.aD(this.b,b.b)
if(q!==0)return q
return B.b.aD(this.c,b.c)},
V(a,b){if(b==null)return!1
return b instanceof A.aD&&this.a==b.a&&this.b===b.b&&this.c===b.c},
$iaf:1}
A.iq.prototype={}
A.lo.prototype={}
A.ig.prototype={}
A.ah.prototype={
gal(a){var s,r=this,q=r.c
if(q===$){s=A.a([],t.d)
r.c!==$&&A.C("nodes")
q=r.c=new A.ac(r,s)}return q},
giQ(a){var s,r=this,q=r.d
if(q===$){s=new A.fY(r.gal(r))
r.d!==$&&A.C("children")
r.sm2(s)
q=s}return q},
es(a){var s=this.a
if(s!=null)B.a.a_(s.gal(s).a,this)
return this},
oz(a,b,c){var s,r,q=this
if(c==null)q.gal(q).p(0,b)
else{s=q.gal(q)
r=q.gal(q)
s.bJ(0,r.ak(r,c),b)}},
dE(a,b,c){var s,r,q,p,o,n,m,l
A.iE(c,t.J,"T","_clone")
c.a(a)
if(b)for(s=this.gal(this).a,r=A.w(s),s=new J.az(s,s.length,r.h("az<1>")),r=r.c,q=t.d;s.n();){p=s.d
p=(p==null?r.a(p):p).d6(0,!0)
o=a.c
if(o===$){n=A.a([],q)
a.c!==$&&A.C("nodes")
o=a.c=new A.ac(a,n)}n=p.a
if(n!=null){m=n.c
if(m===$){l=A.a([],q)
n.c!==$&&A.C("nodes")
m=n.c=new A.ac(n,l)}B.a.a_(m.a,p)}p.a=o.b
o.bT(0,p)}return a},
sd3(a,b){this.b=t.oP.a(b)},
sm2(a){this.d=t.jB.a(a)}}
A.dW.prototype={
l(a){return"#document"},
d6(a,b){return this.dE(A.nt(),!0,t.dA)}}
A.fS.prototype={
l(a){var s,r=this,q=r.x,p=q==null
if(!p||r.y!=null){if(p)q=""
s=r.y
if(s==null)s=""
return"<!DOCTYPE "+A.k(r.w)+' "'+q+'" "'+s+'">'}else return"<!DOCTYPE "+A.k(r.w)+">"},
d6(a,b){return A.nu(this.w,this.x,this.y)}}
A.bW.prototype={
l(a){var s=J.bC(this.w)
this.w=s
return'"'+s+'"'},
d6(a,b){var s=J.bC(this.w)
this.w=s
return A.mB(s)},
iH(a,b){var s=this.w;(!(s instanceof A.a2)?this.w=new A.a2(A.k(s)):s).a+=b}}
A.V.prototype={
gen(a){var s,r,q,p,o=this.a
if(o==null)return null
s=o.gal(o)
for(r=s.ak(s,this)-1,o=s.a,q=o.length;r>=0;--r){if(!(r<q))return A.c(o,r)
p=o[r]
if(p instanceof A.V)return p}return null},
gjz(a){var s,r,q,p,o,n=this.a
if(n==null)return null
s=n.gal(n)
for(r=s.ak(s,this)+1,q=s.a,p=q.length;r<p;++r){if(!(r>=0))return A.c(q,r)
o=q[r]
if(o instanceof A.V)return o}return null},
l(a){var s=A.qn(this.w)
return"<"+(s==null?"":s+" ")+A.k(this.x)+">"},
d6(a,b){var s=this,r=A.mj(s.x,s.w)
r.sd3(0,A.hc(s.b,t.K,t.N))
return s.dE(r,b,t.h)}}
A.fO.prototype={
l(a){return"<!-- "+this.w+" -->"},
d6(a,b){return A.ns(this.w)}}
A.ac.prototype={
p(a,b){t.J.a(b)
b.es(0)
b.a=this.b
this.bT(0,b)},
N(a,b){var s,r,q,p,o,n,m,l,k=this.ml(t.hl.a(b))
for(s=A.w(k).h("X<1>"),r=new A.X(k,s),r=new A.L(r,r.gm(r),s.h("L<D.E>")),q=this.b,s=s.h("D.E"),p=t.d;r.n();){o=r.d
if(o==null)o=s.a(o)
n=o.a
if(n!=null){m=n.c
if(m===$){l=A.a([],p)
n.c!==$&&A.C("nodes")
m=n.c=new A.ac(n,l)}B.a.a_(m.a,o)}o.a=q}this.lz(0,k)},
bJ(a,b,c){c.es(0)
c.a=this.b
this.hy(0,b,c)},
bY(a){var s,r,q
for(s=this.a,r=A.w(s),s=new J.az(s,s.length,r.h("az<1>")),r=r.c;s.n();){q=s.d;(q==null?r.a(q):q).a=null}this.lx(this)},
v(a,b,c){var s
t.J.a(c)
s=this.a
if(!(b>=0&&b<s.length))return A.c(s,b)
s[b].a=null
c.es(0)
c.a=this.b
this.ly(0,b,c)},
ml(a){var s,r
t.hl.a(a)
s=A.a([],t.d)
for(r=J.F(a);r.n();)B.a.p(s,r.gq())
return s}}
A.fY.prototype={
v(a,b,c){var s,r,q
t.h.a(c)
s=t.v
s=A.h(new A.al(this.a,s),!1,s.h("j.E"))
if(!(b>=0&&b<s.length))return A.c(s,b)
s=s[b]
r=s.a
if(r==null)A.N(A.T("Node must have a parent to replace it."))
r=r.gal(r)
q=s.a
q=q.gal(q)
r.v(0,q.ak(q,s),c)},
sm(a,b){var s=t.v,r=A.h(new A.al(this.a,s),!1,s.h("j.E")).length
if(b>=r)return
else if(b<0)throw A.d(A.a8("Invalid list length",null))
this.pp(0,b,r)},
p(a,b){this.a.p(0,t.h.a(b))},
N(a,b){var s,r,q,p,o,n,m
for(s=J.F(t.cj.a(b)),r=this.a,q=t.d;s.n();){p=s.gq()
o=p.a
if(o!=null){n=o.c
if(n===$){m=A.a([],q)
o.c!==$&&A.C("nodes")
n=o.c=new A.ac(o,m)}B.a.a_(n.a,p)}p.a=r.b
r.bT(0,p)}},
cU(a,b){t.dU.a(b)
throw A.d(A.T("TODO(jacobr): should we impl?"))},
pp(a,b,c){var s=t.v
B.a.bf(B.a.bc(A.h(new A.al(this.a,s),!1,s.h("j.E")),b,c),new A.ji())},
eh(a,b,c){var s,r
c.h("0(V)").a(b)
s=t.v
s=A.h(new A.al(this.a,s),!1,s.h("j.E"))
r=A.w(s)
return new A.I(s,r.Y(c).h("1(2)").a(b),r.h("@<1>").Y(c).h("I<1,2>"))},
ey(a,b){var s,r
t.cT.a(b)
s=t.v
s=A.h(new A.al(this.a,s),!1,s.h("j.E"))
r=A.w(s)
return new A.aq(s,r.h("B(1)").a(b),r.h("aq<1>"))},
cC(a,b){var s
t.cT.a(b)
s=t.v
return B.a.cC(A.h(new A.al(this.a,s),!1,s.h("j.E")),b)},
af(a,b){var s=t.v
s=A.h(new A.al(this.a,s),!1,s.h("j.E"))
if(!(b>=0&&b<s.length))return A.c(s,b)
return s[b]},
gag(a){var s=t.v
return A.h(new A.al(this.a,s),!1,s.h("j.E")).length===0},
gm(a){var s=t.v
return A.h(new A.al(this.a,s),!1,s.h("j.E")).length},
j(a,b){var s=t.v
s=A.h(new A.al(this.a,s),!1,s.h("j.E"))
if(!(b>=0&&b<s.length))return A.c(s,b)
return s[b]},
gH(a){var s=t.v
s=A.h(new A.al(this.a,s),!1,s.h("j.E"))
return new J.az(s,s.length,A.w(s).h("az<1>"))},
dz(a,b,c){var s=t.v
s=A.h(new A.al(this.a,s),!1,s.h("j.E"))
A.aF(b,c,s.length)
return A.bd(s,b,c,A.w(s).c)},
gaq(a){var s=t.v
return B.a.gaq(A.h(new A.al(this.a,s),!1,s.h("j.E")))},
gu(a){var s=t.v
return B.a.gu(A.h(new A.al(this.a,s),!1,s.h("j.E")))},
$iQ:1,
$il:1}
A.ji.prototype={
$1(a){return t.h.a(a).es(0)},
$S:68}
A.ic.prototype={}
A.id.prototype={}
A.ie.prototype={}
A.ii.prototype={}
A.ij.prototype={}
A.im.prototype={}
A.jH.prototype={
gaG(){var s=this.x
return s===$?this.x=this.gi0():s},
gi0(){var s=this,r=s.Q
if(r===$){r!==$&&A.C("_initialPhase")
r=s.Q=new A.bv(s,s.d)}return r},
ghO(){var s=this,r=s.as
if(r===$){r!==$&&A.C("_beforeHtmlPhase")
r=s.as=new A.fG(s,s.d)}return r},
gma(){var s=this,r=s.at
if(r===$){r!==$&&A.C("_beforeHeadPhase")
r=s.at=new A.dR(s,s.d)}return r},
gc8(){var s=this,r=s.ax
if(r===$){r!==$&&A.C("_inHeadPhase")
r=s.ax=new A.h4(s,s.d)}return r},
ga7(){var s=this,r=s.ch
if(r===$){r!==$&&A.C("_inBodyPhase")
r=s.ch=new A.d9(s,s.d)}return r},
gip(){var s=this,r=s.CW
if(r===$){r!==$&&A.C("_textPhase")
r=s.CW=new A.hO(s,s.d)}return r},
gaK(){var s=this,r=s.cx
if(r===$){r!==$&&A.C("_inTablePhase")
r=s.cx=new A.ed(s,s.d)}return r},
gdF(){var s,r=this,q=r.cy
if(q===$){s=A.a([],t.ks)
r.cy!==$&&A.C("_inTableTextPhase")
q=r.cy=new A.db(s,r,r.d)}return q},
ghX(){var s=this,r=s.db
if(r===$){r!==$&&A.C("_inCaptionPhase")
r=s.db=new A.e8(s,s.d)}return r},
ghZ(){var s=this,r=s.dx
if(r===$){r!==$&&A.C("_inColumnGroupPhase")
r=s.dx=new A.e9(s,s.d)}return r},
gf8(){var s=this,r=s.dy
if(r===$){r!==$&&A.C("_inTableBodyPhase")
r=s.dy=new A.cB(s,s.d)}return r},
gf7(){var s=this,r=s.fr
if(r===$){r!==$&&A.C("_inRowPhase")
r=s.fr=new A.eb(s,s.d)}return r},
ghY(){var s=this,r=s.fx
if(r===$){r!==$&&A.C("_inCellPhase")
r=s.fx=new A.da(s,s.d)}return r},
gc9(){var s=this,r=s.fy
if(r===$){r!==$&&A.C("_inSelectPhase")
r=s.fy=new A.ec(s,s.d)}return r},
gi_(){var s=this,r=s.k2
if(r===$){r!==$&&A.C("_inFramesetPhase")
r=s.k2=new A.ea(s,s.d)}return r},
mr(){var s
this.bs(0)
for(;!0;)try{this.oI()
break}catch(s){if(A.bq(s) instanceof A.kl)this.bs(0)
else throw s}},
bs(a){var s=this
s.c.bs(0)
s.d.bs(0)
s.f=!1
B.a.bY(s.e)
s.r="no quirks"
s.x=s.gi0()
s.z=!0},
js(a){var s,r,q=a.x
if(q==="annotation-xml"&&a.w==="http://www.w3.org/1998/Math/MathML"){q=a.b.j(0,"encoding")
if(q==null)s=null
else{r=t.E
s=A.ad(new A.I(new A.a9(q),r.h("i(v.E)").a(A.bN()),r.h("I<v.E,i>")),0,null)}return s==="text/html"||s==="application/xhtml+xml"}else return B.a.F(B.bv,new A.o(a.w,q,t.iA))},
ov(a,b){var s,r=this.d,q=r.c
if(q.length===0)return!1
s=B.a.gu(q)
q=s.w
if(q==r.a)return!1
r=s.x
if(B.a.F(B.ae,new A.o(q,r,t.iA))){if(b===2){q=t.ny.a(a).b
q=q!=="mglyph"&&q!=="malignmark"}else q=!1
if(q)return!1
if(b===1||b===0)return!1}if(r==="annotation-xml"&&b===2&&t.ny.a(a).b==="svg")return!1
if(this.js(s))if(b===2||b===1||b===0)return!1
return!0},
oI(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6="_initialPhase"
for(s=a5.c,r=a5.d,q=t.i,p=t.cw,o=t.ia,n=t.ny,m=t.lH,l=t.p1,k=a5.e,j=t.jK,i=s.a,h=t.z;s.n();){g=s.at
g.toString
for(f=g;f!=null;){e=f.gcg(f)
if(e===6){j.a(f)
d=f.a
c=f.c
if(c==null){c=f.c=J.bC(f.b)
f.b=null}if(d==null){b=i.w
if(b==null)d=null
else{a=i.y
new A.b2(b,a).bk(b,a)
d=new A.ar(b,a,a)
d.aI(b,a,a)}}B.a.p(k,new A.aY(c,d,f.e))
f=null}else{a0=a5.x
if(a0===$){a0=a5.Q
if(a0===$){a1=new A.bv(a5,r)
a0!==$&&A.C(a6)
a5.Q=a1
a0=a1}a5.x=a0}if(a5.ov(g,e)){a0=a5.id
if(a0===$){a1=new A.h3(a5,r)
a0!==$&&A.C("_inForeignContentPhase")
a5.id=a1
a0=a1}a2=a0}else a2=a0
switch(e){case 1:f=a2.a2(l.a(f))
break
case 0:f=a2.aM(m.a(f))
break
case 2:f=a2.K(n.a(f))
break
case 3:f=a2.P(o.a(f))
break
case 4:f=a2.ci(p.a(f))
break
case 5:f=a2.jG(q.a(f))
break}}}if(g instanceof A.ce)if(g.c&&!g.r){d=g.a
g=A.y(["name",g.b],h,h)
if(d==null){c=i.w
if(c==null)d=null
else{b=i.y
new A.b2(c,b).bk(c,b)
d=new A.ar(c,b,b)
d.aI(c,b,b)}}B.a.p(k,new A.aY("non-void-element-with-trailing-solidus",d,g))}}a3=A.a([],t.gg)
for(a4=!0;a4;){a0=a5.x
if(a0===$){a0=a5.Q
if(a0===$){a1=new A.bv(a5,r)
a0!==$&&A.C(a6)
a5.Q=a1
a0=a1}a0=a5.x=a0}B.a.p(a3,a0)
a0=a5.x
if(a0===$){a0=a5.Q
if(a0===$){a1=new A.bv(a5,r)
a0!==$&&A.C(a6)
a5.Q=a1
a0=a1}a0=a5.x=a0}a4=a0.a9()}},
gi5(){var s=this.c.a,r=s.w
if(r==null)s=null
else{s=A.c5(r,s.y)
r=s.b
r=A.mF(s.a,r,r)
s=r}return s},
G(a,b,c){var s=new A.aY(b,a==null?this.gi5():a,c)
B.a.p(this.e,s)},
a1(a,b){return this.G(a,b,B.al)},
iz(a){var s=a.e.a_(0,"definitionurl")
if(s!=null)a.e.v(0,"definitionURL",s)},
iA(a){var s,r,q,p,o,n
for(s=a.e,r=A.A(s).h("aV<1>"),r=A.h(new A.aV(s,r),!1,r.h("j.E")),s=r.length,q=0;q<s;++q){p=A.aw(r[q])
o=B.c8.j(0,p)
if(o!=null){n=a.e
p=n.a_(0,p)
p.toString
n.v(0,o,p)}}},
fg(a){var s,r,q,p,o,n
for(s=a.e,r=A.A(s).h("aV<1>"),r=A.h(new A.aV(s,r),!1,r.h("j.E")),s=r.length,q=0;q<s;++q){p=A.aw(r[q])
o=B.c7.j(0,p)
if(o!=null){n=a.e
p=n.a_(0,p)
p.toString
n.v(0,o,p)}}},
jP(){var s,r,q,p,o,n,m,l,k,j=this,i="_inCellPhase",h="_inTableBodyPhase",g="_inBodyPhase"
for(s=j.d,r=s.c,q=A.w(r).h("X<1>"),p=new A.X(r,q),p=new A.L(p,p.gm(p),q.h("L<D.E>")),q=q.h("D.E"),o=s.a;p.n();){n=p.d
if(n==null)n=q.a(n)
m=n.x
if(0>=r.length)return A.c(r,0)
l=n===r[0]
if(l)m=j.w
switch(m){case"select":case"colgroup":case"head":case"html":break}if(!l&&n.w!=o)continue
switch(m){case"select":k=j.fy
if(k===$){k!==$&&A.C("_inSelectPhase")
k=j.fy=new A.ec(j,s)}j.x=k
return
case"td":k=j.fx
if(k===$){k!==$&&A.C(i)
k=j.fx=new A.da(j,s)}j.x=k
return
case"th":k=j.fx
if(k===$){k!==$&&A.C(i)
k=j.fx=new A.da(j,s)}j.x=k
return
case"tr":k=j.fr
if(k===$){k!==$&&A.C("_inRowPhase")
k=j.fr=new A.eb(j,s)}j.x=k
return
case"tbody":k=j.dy
if(k===$){k!==$&&A.C(h)
k=j.dy=new A.cB(j,s)}j.x=k
return
case"thead":k=j.dy
if(k===$){k!==$&&A.C(h)
k=j.dy=new A.cB(j,s)}j.x=k
return
case"tfoot":k=j.dy
if(k===$){k!==$&&A.C(h)
k=j.dy=new A.cB(j,s)}j.x=k
return
case"caption":k=j.db
if(k===$){k!==$&&A.C("_inCaptionPhase")
k=j.db=new A.e8(j,s)}j.x=k
return
case"colgroup":k=j.dx
if(k===$){k!==$&&A.C("_inColumnGroupPhase")
k=j.dx=new A.e9(j,s)}j.x=k
return
case"table":k=j.cx
if(k===$){k!==$&&A.C("_inTablePhase")
k=j.cx=new A.ed(j,s)}j.x=k
return
case"head":k=j.ch
if(k===$){k!==$&&A.C(g)
k=j.ch=new A.d9(j,s)}j.x=k
return
case"body":k=j.ch
if(k===$){k!==$&&A.C(g)
k=j.ch=new A.d9(j,s)}j.x=k
return
case"frameset":k=j.k2
if(k===$){k!==$&&A.C("_inFramesetPhase")
k=j.k2=new A.ea(j,s)}j.x=k
return
case"html":k=j.at
if(k===$){k!==$&&A.C("_beforeHeadPhase")
k=j.at=new A.dR(j,s)}j.x=k
return}}j.x=j.ga7()},
dk(a,b){var s,r,q=this
q.d.O(a)
s=t.c
r=q.c
if(b==="RAWTEXT")r.si(s.a(r.geq()))
else r.si(s.a(r.gcL()))
q.y=q.gaG()
q.x=q.gip()}}
A.a7.prototype={
a9(){throw A.d(A.hV(null))},
ci(a){var s=this.b
s.cE(a,B.a.gu(s.c))
return null},
jG(a){this.a.a1(a.a,"unexpected-doctype")
return null},
a2(a){this.b.c1(a.gaE(a),a.a)
return null},
aM(a){this.b.c1(a.gaE(a),a.a)
return null},
K(a){throw A.d(A.hV(null))},
bj(a){var s,r=this.a
if(!r.f&&a.b==="html")r.a1(a.a,"non-html-root")
s=this.b.c
if(0>=s.length)return A.c(s,0)
s[0].e=a.a
a.e.bf(0,new A.kh(this))
r.f=!1
return null},
P(a){throw A.d(A.hV(null))},
cI(a){var s,r=a.b,q=this.b.c
if(0>=q.length)return A.c(q,-1)
s=q.pop()
for(;s.x!=r;){if(0>=q.length)return A.c(q,-1)
s=q.pop()}}}
A.kh.prototype={
$2(a,b){var s
t.K.a(a)
A.aw(b)
s=this.a.b.c
if(0>=s.length)return A.c(s,0)
s[0].b.ep(a,new A.kg(b))},
$S:21}
A.kg.prototype={
$0(){return this.a},
$S:5}
A.bv.prototype={
aM(a){return null},
ci(a){var s=this.b,r=s.b
r===$&&A.b("document")
s.cE(a,r)
return null},
jG(a){var s,r,q,p,o,n=this,m=a.d,l=a.b
if(l==null)s=null
else{r=t.E
s=A.ad(new A.I(new A.a9(l),r.h("i(v.E)").a(A.bN()),r.h("I<v.E,i>")),0,null)}q=a.c
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
l.gal(l).p(0,o)
if(p)if(a.d==="html"){l=B.b.ghw(s)
if(!B.a.b5(B.bc,l))if(!B.a.F(B.bq,s))if(!(B.a.b5(B.ad,l)&&q==null))l=q!=null&&q.toLowerCase()==="http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd"
else l=!0
else l=!0
else l=!0}else l=!0
else l=!0
if(l)n.a.r="quirks"
else{l=B.b.ghw(s)
if(!B.a.b5(B.bw,l))l=B.a.b5(B.ad,l)&&q!=null
else l=!0
if(l)n.a.r="limited quirks"}l=n.a
l.x=l.ghO()
return null},
bE(){var s=this.a
s.r="quirks"
s.x=s.ghO()},
a2(a){this.a.a1(a.a,"expected-doctype-but-got-chars")
this.bE()
return a},
K(a){var s=t.z
this.a.G(a.a,"expected-doctype-but-got-start-tag",A.y(["name",a.b],s,s))
this.bE()
return a},
P(a){var s=t.z
this.a.G(a.a,"expected-doctype-but-got-end-tag",A.y(["name",a.b],s,s))
this.bE()
return a},
a9(){var s=this.a
s.a1(s.gi5(),"expected-doctype-but-got-eof")
this.bE()
return!0}}
A.fG.prototype={
ee(){var s=this.b,r=s.j_(0,A.aJ("html",A.ab(null,null,t.K,t.N),null,!1))
B.a.p(s.c,r)
s=s.b
s===$&&A.b("document")
s.gal(s).p(0,r)
s=this.a
s.x=s.gma()},
a9(){this.ee()
return!0},
ci(a){var s=this.b,r=s.b
r===$&&A.b("document")
s.cE(a,r)
return null},
aM(a){return null},
a2(a){this.ee()
return a},
K(a){if(a.b==="html")this.a.f=!0
this.ee()
return a},
P(a){var s,r=a.b
switch(r){case"head":case"body":case"html":case"br":this.ee()
return a
default:s=t.z
this.a.G(a.a,"unexpected-end-tag-before-html",A.y(["name",r],s,s))
return null}}}
A.dR.prototype={
K(a){var s=null
switch(a.b){case"html":return this.a.ga7().K(a)
case"head":this.cV(a)
return s
default:this.cV(A.aJ("head",A.ab(s,s,t.K,t.N),s,!1))
return a}},
P(a){var s,r=null,q=a.b
switch(q){case"head":case"body":case"html":case"br":this.cV(A.aJ("head",A.ab(r,r,t.K,t.N),r,!1))
return a
default:s=t.z
this.a.G(a.a,"end-tag-after-implied-root",A.y(["name",q],s,s))
return r}},
a9(){this.cV(A.aJ("head",A.ab(null,null,t.K,t.N),null,!1))
return!0},
aM(a){return null},
a2(a){this.cV(A.aJ("head",A.ab(null,null,t.K,t.N),null,!1))
return a},
cV(a){var s=this.b
s.O(a)
s.sos(B.a.gu(s.c))
s=this.a
s.x=s.gc8()}}
A.h4.prototype={
K(a){var s,r,q,p,o,n=this,m=null
switch(a.b){case"html":return n.a.ga7().K(a)
case"title":n.a.dk(a,"RCDATA")
return m
case"noscript":case"noframes":case"style":n.a.dk(a,"RAWTEXT")
return m
case"script":n.b.O(a)
s=n.a
r=s.c
r.si(t.c.a(r.gbR()))
s.y=s.gaG()
s.x=s.gip()
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
if(!s.b){p=q.j(0,"charset")
o=q.j(0,"content")
if(p!=null)s.iP(p)
else if(o!=null)s.iP(new A.j8(new A.jg(o)).oT())}return m
case"head":n.a.a1(a.a,"two-heads-are-not-better-than-one")
return m
default:n.d8(new A.J("head",!1))
return a}},
P(a){var s,r=a.b
switch(r){case"head":this.d8(a)
return null
case"br":case"html":case"body":this.d8(new A.J("head",!1))
return a
default:s=t.z
this.a.G(a.a,"unexpected-end-tag",A.y(["name",r],s,s))
return null}},
a9(){this.d8(new A.J("head",!1))
return!0},
a2(a){this.d8(new A.J("head",!1))
return a},
d8(a){var s,r=this.a,q=r.d,p=q.c
if(0>=p.length)return A.c(p,-1)
p.pop()
s=r.ay
if(s===$){s!==$&&A.C("_afterHeadPhase")
s=r.ay=new A.fv(r,q)}r.x=s}}
A.fv.prototype={
K(a){var s,r=this,q=null,p=a.b
switch(p){case"html":return r.a.ga7().K(a)
case"body":p=r.a
p.z=!1
r.b.O(a)
p.x=p.ga7()
return q
case"frameset":r.b.O(a)
p=r.a
p.x=p.gi_()
return q
case"base":case"basefont":case"bgsound":case"link":case"meta":case"noframes":case"script":case"style":case"title":r.lc(a)
return q
case"head":s=t.z
r.a.G(a.a,"unexpected-start-tag",A.y(["name",p],s,s))
return q
default:r.bE()
return a}},
P(a){var s,r=a.b
switch(r){case"body":case"html":case"br":this.bE()
return a
default:s=t.z
this.a.G(a.a,"unexpected-end-tag",A.y(["name",r],s,s))
return null}},
a9(){this.bE()
return!0},
a2(a){this.bE()
return a},
lc(a){var s,r,q=this.a,p=t.z
q.G(a.a,"unexpected-start-tag-out-of-my-head",A.y(["name",a.b],p,p))
p=this.b
s=p.c
B.a.p(s,t.h.a(p.e))
q.gc8().K(a)
for(q=A.w(s).h("X<1>"),p=new A.X(s,q),p=new A.L(p,p.gm(p),q.h("L<D.E>")),q=q.h("D.E");p.n();){r=p.d
if(r==null)r=q.a(r)
if(r.x==="head"){B.a.a_(s,r)
break}}},
bE(){this.b.O(A.aJ("body",A.ab(null,null,t.K,t.N),null,!1))
var s=this.a
s.x=s.ga7()
s.z=!0}}
A.d9.prototype={
K(a){var s,r,q,p,o,n,m=this,l=null,k="p",j="button",i="unexpected-start-tag",h="unexpected-start-tag-implies-end-tag",g="RAWTEXT",f=a.b
switch(f){case"html":return m.bj(a)
case"base":case"basefont":case"bgsound":case"command":case"link":case"meta":case"noframes":case"script":case"style":case"title":return m.a.gc8().K(a)
case"body":m.l9(a)
return l
case"frameset":m.lb(a)
return l
case"address":case"article":case"aside":case"blockquote":case"center":case"details":case"dir":case"div":case"dl":case"fieldset":case"figcaption":case"figure":case"footer":case"header":case"hgroup":case"menu":case"nav":case"ol":case"p":case"section":case"summary":case"ul":m.hq(a)
return l
case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":f=m.b
if(f.a0(k,j))m.bG(new A.J(k,!1))
s=f.c
if(B.a.F(B.I,B.a.gu(s).x)){r=t.z
m.a.G(a.a,i,A.y(["name",a.b],r,r))
if(0>=s.length)return A.c(s,-1)
s.pop()}f.O(a)
return l
case"pre":case"listing":f=m.b
if(f.a0(k,j))m.bG(new A.J(k,!1))
f.O(a)
m.a.z=!1
m.c=!0
return l
case"form":f=m.b
if(f.f!=null){f=t.z
m.a.G(a.a,i,A.y(["name","form"],f,f))}else{if(f.a0(k,j))m.bG(new A.J(k,!1))
f.O(a)
f.sjj(B.a.gu(f.c))}return l
case"li":case"dd":case"dt":m.lf(a)
return l
case"plaintext":f=m.b
if(f.a0(k,j))m.bG(new A.J(k,!1))
f.O(a)
f=m.a.c
f.si(t.c.a(f.goW()))
return l
case"a":f=m.b
q=f.j7("a")
if(q!=null){s=t.z
m.a.G(a.a,h,A.y(["startName","a","endName","a"],s,s))
m.j9(new A.J("a",!1))
B.a.a_(f.c,q)
B.a.a_(f.d.a,q)}f.aH()
m.fe(a)
return l
case"b":case"big":case"code":case"em":case"font":case"i":case"s":case"small":case"strike":case"strong":case"tt":case"u":m.b.aH()
m.fe(a)
return l
case"nobr":f=m.b
f.aH()
if(f.b7("nobr")){s=t.z
m.a.G(a.a,h,A.y(["startName","nobr","endName","nobr"],s,s))
m.P(new A.J("nobr",!1))
f.aH()}m.fe(a)
return l
case"button":return m.la(a)
case"applet":case"marquee":case"object":f=m.b
f.aH()
f.O(a)
f.d.p(0,l)
m.a.z=!1
return l
case"xmp":f=m.b
if(f.a0(k,j))m.bG(new A.J(k,!1))
f.aH()
f=m.a
f.z=!1
f.dk(a,g)
return l
case"table":f=m.a
if(f.r!=="quirks")if(m.b.a0(k,j))m.P(new A.J(k,!1))
m.b.O(a)
f.z=!1
f.x=f.gaK()
return l
case"area":case"br":case"embed":case"img":case"keygen":case"wbr":m.hv(a)
return l
case"param":case"source":case"track":f=m.b
f.O(a)
f=f.c
if(0>=f.length)return A.c(f,-1)
f.pop()
a.r=!0
return l
case"input":f=m.a
p=f.z
m.hv(a)
s=a.e.j(0,"type")
if(s==null)s=l
else{r=t.E
r=A.ad(new A.I(new A.a9(s),r.h("i(v.E)").a(A.bN()),r.h("I<v.E,i>")),0,l)
s=r}if(s==="hidden")f.z=p
return l
case"hr":f=m.b
if(f.a0(k,j))m.bG(new A.J(k,!1))
f.O(a)
f=f.c
if(0>=f.length)return A.c(f,-1)
f.pop()
a.r=!0
m.a.z=!1
return l
case"image":f=t.z
m.a.G(a.a,"unexpected-start-tag-treated-as",A.y(["originalName","image","newName","img"],f,f))
m.K(A.aJ("img",a.e,l,a.c))
return l
case"isindex":m.le(a)
return l
case"textarea":m.b.O(a)
f=m.a
s=f.c
s.si(t.c.a(s.gcL()))
m.c=!0
f.z=!1
return l
case"iframe":f=m.a
f.z=!1
f.dk(a,g)
return l
case"noembed":case"noscript":m.a.dk(a,g)
return l
case"select":f=m.b
f.aH()
f.O(a)
f=m.a
f.z=!1
if(f.gaK()===f.gaG()||f.ghX()===f.gaG()||f.ghZ()===f.gaG()||f.gf8()===f.gaG()||f.gf7()===f.gaG()||f.ghY()===f.gaG()){o=f.go
if(o===$){o!==$&&A.C("_inSelectInTablePhase")
o=f.go=new A.h5(f,f.d)}f.x=o}else f.x=f.gc9()
return l
case"rp":case"rt":f=m.b
if(f.b7("ruby")){f.cm()
n=B.a.gu(f.c)
if(n.x!=="ruby")m.a.a1(n.e,"undefined-error")}f.O(a)
return l
case"option":case"optgroup":f=m.b
if(B.a.gu(f.c).x==="option")m.a.gaG().P(new A.J("option",!1))
f.aH()
m.a.d.O(a)
return l
case"math":f=m.b
f.aH()
s=m.a
s.iz(a)
s.fg(a)
a.w="http://www.w3.org/1998/Math/MathML"
f.O(a)
if(a.c){f=f.c
if(0>=f.length)return A.c(f,-1)
f.pop()
a.r=!0}return l
case"svg":f=m.b
f.aH()
s=m.a
s.iA(a)
s.fg(a)
a.w="http://www.w3.org/2000/svg"
f.O(a)
if(a.c){f=f.c
if(0>=f.length)return A.c(f,-1)
f.pop()
a.r=!0}return l
case"caption":case"col":case"colgroup":case"frame":case"head":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":s=t.z
m.a.G(a.a,"unexpected-start-tag-ignored",A.y(["name",f],s,s))
return l
default:f=m.b
f.aH()
f.O(a)
return l}},
P(a){var s,r,q,p,o,n=this,m=null,l="end-tag-too-early",k="unexpected-end-tag",j=a.b
switch(j){case"body":n.j8(a)
return m
case"html":return n.fD(a)
case"address":case"article":case"aside":case"blockquote":case"button":case"center":case"details":case"dir":case"div":case"dl":case"fieldset":case"figcaption":case"figure":case"footer":case"header":case"hgroup":case"listing":case"menu":case"nav":case"ol":case"pre":case"section":case"summary":case"ul":if(j==="pre")n.c=!1
s=n.b
r=s.b7(j)
if(r)s.cm()
j=B.a.gu(s.c).x
s=a.b
if(j!=s){j=t.z
n.a.G(a.a,l,A.y(["name",s],j,j))}if(r)n.cI(a)
return m
case"form":j=n.b
q=j.f
j.f=null
if(q==null||!j.b7(q)){j=t.z
n.a.G(a.a,k,A.y(["name","form"],j,j))}else{j.cm()
j=j.c
if(!J.W(B.a.gu(j),q)){s=t.z
n.a.G(a.a,"end-tag-too-early-ignored",A.y(["name","form"],s,s))}B.a.a_(j,q)}return m
case"p":n.bG(a)
return m
case"dd":case"dt":case"li":p=j==="li"?"list":m
s=n.b
j=s.a0(j,p)
o=a.b
if(!j){j=t.z
n.a.G(a.a,k,A.y(["name",o],j,j))}else{s.c4(o)
j=B.a.gu(s.c).x
s=a.b
if(j!=s){j=t.z
n.a.G(a.a,l,A.y(["name",s],j,j))}n.cI(a)}return m
case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":n.o0(a)
return m
case"a":case"b":case"big":case"code":case"em":case"font":case"i":case"nobr":case"s":case"small":case"strike":case"strong":case"tt":case"u":n.j9(a)
return m
case"applet":case"marquee":case"object":s=n.b
if(s.b7(j))s.cm()
j=B.a.gu(s.c).x
o=a.b
if(j!=o){j=t.z
n.a.G(a.a,l,A.y(["name",o],j,j))}if(s.b7(a.b)){n.cI(a)
s.fn()}return m
case"br":j=t.z
n.a.G(a.a,"unexpected-end-tag-treated-as",A.y(["originalName","br","newName","br element"],j,j))
j=n.b
j.aH()
j.O(A.aJ("br",A.ab(m,m,t.K,t.N),m,!1))
j=j.c
if(0>=j.length)return A.c(j,-1)
j.pop()
return m
default:n.o2(a)
return m}},
oD(a,b){var s,r
if(a.x!=b.x||a.w!=b.w)return!1
else{s=a.b
if(s.a!==b.b.a)return!1
else for(s=A.nC(s,s.r,A.A(s).c);s.n();){r=s.d
if(!J.W(a.b.j(0,r),b.b.j(0,r)))return!1}}return!0},
fe(a){var s,r,q,p,o,n,m=this.b
m.O(a)
s=B.a.gu(m.c)
r=A.a([],t.hg)
for(m=m.d,q=A.A(m).h("X<v.E>"),p=new A.X(m,q),p=new A.L(p,p.gm(p),q.h("L<D.E>")),o=t.h,q=q.h("D.E");p.n();){n=p.d
if(n==null)n=q.a(n)
if(n==null)break
else{o.a(n)
if(this.oD(n,s))B.a.p(r,n)}}if(r.length===3)B.a.a_(m.a,B.a.gu(r))
m.p(0,s)},
a9(){var s,r,q,p
for(s=this.b.c,r=A.w(s).h("X<1>"),s=new A.X(s,r),s=new A.L(s,s.gm(s),r.h("L<D.E>")),r=r.h("D.E");s.n();){q=s.d
if(q==null)q=r.a(q)
switch(q.x){case"dd":case"dt":case"li":case"p":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":case"body":case"html":continue}s=this.a
p=q.e
if(p==null){r=s.c.a
q=r.w
if(q==null)p=null
else{r=r.y
new A.b2(q,r).bk(q,r)
p=new A.ar(q,r,r)
p.aI(q,r,r)}}B.a.p(s.e,new A.aY("expected-closing-tag-but-got-eof",p,B.al))
break}return!1},
a2(a){var s
if(a.gaE(a)==="\x00")return null
s=this.b
s.aH()
s.c1(a.gaE(a),a.a)
s=this.a
if(s.z&&!A.mX(a.gaE(a)))s.z=!1
return null},
aM(a){var s,r,q,p=this
if(p.c){s=a.gaE(a)
r=p.c=!1
if(B.b.Z(s,"\n")){q=B.a.gu(p.b.c)
if(B.a.F(B.bx,q.x)){r=q.gal(q)
r=r.gag(r)}if(r)s=B.b.av(s,1)}if(s.length!==0){r=p.b
r.aH()
r.c1(s,a.a)}}else{r=p.b
r.aH()
r.c1(a.gaE(a),a.a)}return null},
l9(a){var s,r=this.a,q=t.z
r.G(a.a,"unexpected-start-tag",A.y(["name","body"],q,q))
q=this.b.c
s=q.length
if(s!==1){if(1>=s)return A.c(q,1)
q=q[1].x!=="body"}else q=!0
if(!q){r.z=!1
a.e.bf(0,new A.jL(this))}},
lb(a){var s,r,q,p=this.a,o=t.z
p.G(a.a,"unexpected-start-tag",A.y(["name","frameset"],o,o))
o=this.b
s=o.c
r=s.length
if(r!==1){if(1>=r)return A.c(s,1)
q=s[1].x!=="body"}else q=!0
if(!q)if(p.z){if(1>=r)return A.c(s,1)
r=s[1].a
if(r!=null){r=r.gal(r)
if(1>=s.length)return A.c(s,1)
B.a.a_(r.a,s[1])}for(;B.a.gu(s).x!=="html";){if(0>=s.length)return A.c(s,-1)
s.pop()}o.O(a)
p.x=p.gi_()}},
hq(a){var s=this.b
if(s.a0("p","button"))this.bG(new A.J("p",!1))
s.O(a)},
lf(a){var s,r,q,p,o,n,m,l,k,j,i=this.a
i.z=!1
s=a.b
s.toString
s=B.cK.j(0,s)
s.toString
for(r=this.b,q=r.c,p=A.w(q).h("X<1>"),q=new A.X(q,p),q=new A.L(q,q.gm(q),p.h("L<D.E>")),o=t.X,p=p.h("D.E");q.n();){n=q.d
if(n==null)n=p.a(n)
m=n.x
if(B.a.F(s,m)){l=i.x
if(l===$){l=i.Q
if(l===$){k=new A.bv(i,i.d)
l!==$&&A.C("_initialPhase")
i.Q=k
l=k}l=i.x=l}l.P(new A.J(m,!1))
break}j=n.w
if(B.a.F(B.X,new A.o(j==null?"http://www.w3.org/1999/xhtml":j,m,o))&&!B.a.F(B.bi,m))break}if(r.a0("p","button"))i.gaG().P(new A.J("p",!1))
r.O(a)},
la(a){var s=this.b,r=this.a
if(s.b7("button")){s=t.z
r.G(a.a,"unexpected-start-tag-implies-end-tag",A.y(["startName","button","endName","button"],s,s))
this.P(new A.J("button",!1))
return a}else{s.aH()
s.O(a)
r.z=!1}return null},
hv(a){var s=this.b
s.aH()
s.O(a)
s=s.c
if(0>=s.length)return A.c(s,-1)
s.pop()
a.r=!0
this.a.z=!1},
le(a){var s,r,q,p,o,n=this,m=null,l="action",k=t.z
n.a.G(a.a,"deprecated-tag",A.y(["name","isindex"],k,k))
if(n.b.f!=null)return
k=t.K
s=t.N
r=A.ab(m,m,k,s)
q=a.e.j(0,l)
if(q!=null)r.v(0,l,q)
n.K(A.aJ("form",r,m,!1))
n.K(A.aJ("hr",A.ab(m,m,k,s),m,!1))
n.K(A.aJ("label",A.ab(m,m,k,s),m,!1))
p=a.e.j(0,"prompt")
if(p==null)p="This is a searchable index. Enter search keywords: "
n.a2(new A.E(m,p))
o=A.hc(a.e,k,s)
o.a_(0,l)
o.a_(0,"prompt")
o.v(0,"name","isindex")
n.K(A.aJ("input",o,m,a.c))
n.P(new A.J("label",!1))
n.K(A.aJ("hr",A.ab(m,m,k,s),m,!1))
n.P(new A.J("form",!1))},
bG(a){var s=this,r="unexpected-end-tag",q=s.b
if(!q.a0("p","button")){s.hq(A.aJ("p",A.ab(null,null,t.K,t.N),null,!1))
q=t.z
s.a.G(a.a,r,A.y(["name","p"],q,q))
s.bG(new A.J("p",!1))}else{q.c4("p")
if(B.a.gu(q.c).x!=="p"){q=t.z
s.a.G(a.a,r,A.y(["name","p"],q,q))}s.cI(a)}},
j8(a){var s,r,q,p,o,n,m=this,l=m.b
if(!l.b7("body")){m.a.a1(a.a,"undefined-error")
return}else{l=l.c
if(B.a.gu(l).x==="body")B.a.gu(l)
else for(l=A.n9(l,2,null,t.h),s=l.length,r=0;r<s;++r){q=l[r].x
switch(q){case"dd":case"dt":case"li":case"optgroup":case"option":case"p":case"rp":case"rt":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":case"body":case"html":continue}l=m.a
p=a.a
s=t.z
s=A.y(["gotName","body","expectedName",q],s,s)
if(p==null){q=l.c.a
o=q.w
if(o==null)p=null
else{q=q.y
new A.b2(o,q).bk(o,q)
p=new A.ar(o,q,q)
p.aI(o,q,q)}}B.a.p(l.e,new A.aY("expected-one-end-tag-but-got-another",p,s))
break}}l=m.a
n=l.k1
if(n===$){n!==$&&A.C("_afterBodyPhase")
n=l.k1=new A.ft(l,l.d)}l.x=n},
fD(a){if(this.b.b7("body")){this.j8(new A.J("body",!1))
return a}return null},
o0(a){var s,r,q,p,o,n,m
for(s=this.b,r=0;r<6;++r)if(s.b7(B.I[r])){q=s.c
p=B.a.gu(q).x
if(p!=null&&B.a.F(B.U,p)){if(0>=q.length)return A.c(q,-1)
q.pop()
s.c4(null)}break}q=s.c
o=B.a.gu(q).x
n=a.b
if(o!=n){o=t.z
this.a.G(a.a,"end-tag-too-early",A.y(["name",n],o,o))}for(r=0;r<6;++r)if(s.b7(B.I[r])){if(0>=q.length)return A.c(q,-1)
m=q.pop()
for(;!B.a.F(B.I,m.x);){if(0>=q.length)return A.c(q,-1)
m=q.pop()}break}},
j9(b8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7="nodes"
for(s=this.b,r=s.d,q=r.a,p=A.A(r).h("aX.E"),o=s.c,n=t.K,m=t.N,l=t.h,k=t.d,j=t.X,i=this.a,h=t.z,g=i.c.a,i=i.e,f=0;f<8;){++f
e=s.j7(b8.b)
if(e!=null)d=B.a.F(o,e)&&!s.b7(e.x)
else d=!0
if(d){c=b8.a
s=A.y(["name",b8.b],h,h)
if(c==null){r=g.w
if(r==null)c=b6
else{q=g.y
new A.b2(r,q).bk(r,q)
c=new A.ar(r,q,q)
c.aI(r,q,q)}}B.a.p(i,new A.aY("adoption-agency-1.1",c,s))
return}else if(!B.a.F(o,e)){c=b8.a
s=A.y(["name",b8.b],h,h)
if(c==null){r=g.w
if(r==null)c=b6
else{p=g.y
new A.b2(r,p).bk(r,p)
c=new A.ar(r,p,p)
c.aI(r,p,p)}}B.a.p(i,new A.aY("adoption-agency-1.2",c,s))
B.a.a_(q,e)
return}d=B.a.gu(o)
if(e==null?d!=null:e!==d){c=b8.a
d=A.y(["name",b8.b],h,h)
if(c==null){b=g.w
if(b==null)c=b6
else{a=g.y
new A.b2(b,a).bk(b,a)
c=new A.ar(b,a,a)
c.aI(b,a,a)}}B.a.p(i,new A.aY("adoption-agency-1.3",c,d))}a0=B.a.ak(o,e)
d=A.n9(o,a0,b6,l)
b=d.length
a2=0
while(!0){if(!(a2<d.length)){a1=b6
break}a3=d[a2]
a4=a3.w
if(a4==null)a4="http://www.w3.org/1999/xhtml"
if(B.a.F(B.X,new A.o(a4,a3.x,j))){a1=a3
break}d.length===b||(0,A.e)(d);++a2}if(a1==null){if(0>=o.length)return A.c(o,-1)
a3=o.pop()
for(;a3!==e;){if(0>=o.length)return A.c(o,-1)
a3=o.pop()}B.a.a_(q,a3)
return}d=a0-1
if(!(d>=0&&d<o.length))return A.c(o,d)
a5=o[d]
a6=r.ak(r,e)
a7=B.a.ak(o,a1)
for(a8=a1,a9=0;a9<3;){++a9;--a7
if(!(a7>=0&&a7<o.length))return A.c(o,a7)
b0=o[a7]
if(!r.F(r,b0)){B.a.a_(o,b0)
continue}if(b0===e)break
if(a8===a1)a6=r.ak(r,b0)+1
d=b0.x
b1=new A.V(b0.w,d,A.ab(b6,b6,n,m))
b1.sd3(0,A.hc(b0.b,n,m))
b2=b0.dE(b1,!1,l)
B.a.v(q,r.ak(r,b0),p.a(b2))
B.a.v(o,B.a.ak(o,b0),b2)
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
b3.bT(0,a8)
a8=b2}d=a8.a
if(d!=null){b3=d.c
if(b3===$){b=A.a([],k)
d.c!==$&&A.C(b7)
b3=d.c=new A.ac(d,b)}B.a.a_(b3.a,a8)}if(B.a.F(B.V,a5.x)){b5=s.eH()
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
b3.bT(0,a8)}else{if(b3===$){a=A.a([],k)
d.c!==$&&A.C(b7)
b1=d.c=new A.ac(d,a)
b4=b1
b3=b4}else b4=b3
if(b4===$){a=A.a([],k)
d.c!==$&&A.C(b7)
b4=d.c=new A.ac(d,a)}d=b4.ak(b4,b)
b=a8.a
if(b!=null){b4=b.c
if(b4===$){a=A.a([],k)
b.c!==$&&A.C(b7)
b4=b.c=new A.ac(b,a)}B.a.a_(b4.a,a8)}a8.a=b3.b
b3.hy(0,d,a8)}}else{b3=a5.c
if(b3===$){d=A.a([],k)
a5.c!==$&&A.C(b7)
b3=a5.c=new A.ac(a5,d)}d=a8.a
if(d!=null){b4=d.c
if(b4===$){b=A.a([],k)
d.c!==$&&A.C(b7)
b4=d.c=new A.ac(d,b)}B.a.a_(b4.a,a8)}a8.a=b3.b
b3.bT(0,a8)}d=e.x
b1=new A.V(e.w,d,A.ab(b6,b6,n,m))
b1.sd3(0,A.hc(e.b,n,m))
d=e.dE(b1,!1,l)
b3=d.c
if(b3===$){b=A.a([],k)
d.c!==$&&A.C(b7)
b3=d.c=new A.ac(d,b)}b4=a1.c
if(b4===$){b=A.a([],k)
a1.c!==$&&A.C(b7)
b4=a1.c=new A.ac(a1,b)}b3.N(0,b4)
b3=a1.c
if(b3===$){b=A.a([],k)
a1.c!==$&&A.C(b7)
b3=a1.c=new A.ac(a1,b)}b3.bY(0)
b3=a1.c
if(b3===$){b=A.a([],k)
a1.c!==$&&A.C(b7)
b3=a1.c=new A.ac(a1,b)}b=d.a
if(b!=null){b4=b.c
if(b4===$){a=A.a([],k)
b.c!==$&&A.C(b7)
b4=b.c=new A.ac(b,a)}B.a.a_(b4.a,d)}d.a=b3.b
b3.bT(0,d)
B.a.a_(q,e)
B.a.bJ(q,A.a0(Math.min(a6,q.length)),p.a(d))
B.a.a_(o,e)
B.a.bJ(o,B.a.ak(o,a1)+1,d)}},
o2(a){var s,r,q,p,o,n,m,l,k,j,i,h="unexpected-end-tag"
for(s=this.b,r=s.c,q=A.w(r).h("X<1>"),p=new A.X(r,q),p=new A.L(p,p.gm(p),q.h("L<D.E>")),o=t.X,q=q.h("D.E");p.n();){n=p.d
if(n==null)n=q.a(n)
m=n.x
l=a.b
if(m==l){k=B.a.gu(r).x
if(k!=l&&B.a.F(B.U,k)){if(0>=r.length)return A.c(r,-1)
r.pop()
s.c4(l)}s=B.a.gu(r).x
q=a.b
if(s!=q){s=this.a
j=a.a
p=t.z
p=A.y(["name",q],p,p)
if(j==null){q=s.c.a
o=q.w
if(o==null)j=null
else{q=q.y
new A.b2(o,q).bk(o,q)
j=new A.ar(o,q,q)
j.aI(o,q,q)}}B.a.p(s.e,new A.aY(h,j,p))}while(!0){if(0>=r.length)return A.c(r,-1)
if(!!J.W(r.pop(),n))break}break}else{i=n.w
if(B.a.F(B.X,new A.o(i==null?"http://www.w3.org/1999/xhtml":i,m,o))){s=this.a
j=a.a
r=t.z
r=A.y(["name",a.b],r,r)
if(j==null){q=s.c.a
p=q.w
if(p==null)j=null
else{q=q.y
new A.b2(p,q).bk(p,q)
j=new A.ar(p,q,q)
j.aI(p,q,q)}}B.a.p(s.e,new A.aY(h,j,r))
break}}}}}
A.jL.prototype={
$2(a,b){var s
t.K.a(a)
A.aw(b)
s=this.a.b.c
if(1>=s.length)return A.c(s,1)
s[1].b.ep(a,new A.jK(b))},
$S:21}
A.jK.prototype={
$0(){return this.a},
$S:5}
A.hO.prototype={
K(a){throw A.d(A.av("Cannot process start stag in text phase"))},
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
a2(a){this.b.c1(a.gaE(a),a.a)
return null},
a9(){var s=this.b.c,r=B.a.gu(s),q=this.a,p=t.z
q.G(r.e,"expected-named-closing-tag-but-got-eof",A.y(["name",r.x],p,p))
if(0>=s.length)return A.c(s,-1)
s.pop()
s=q.y
s.toString
q.x=s
return!0}}
A.ed.prototype={
K(a){var s,r,q=this,p=null
switch(a.b){case"html":return q.bj(a)
case"caption":q.fp()
s=q.b
s.d.p(0,p)
s.O(a)
s=q.a
s.x=s.ghX()
return p
case"colgroup":q.hr(a)
return p
case"col":q.hr(A.aJ("colgroup",A.ab(p,p,t.K,t.N),p,!1))
return a
case"tbody":case"tfoot":case"thead":q.ht(a)
return p
case"td":case"th":case"tr":q.ht(A.aJ("tbody",A.ab(p,p,t.K,t.N),p,!1))
return a
case"table":return q.lg(a)
case"style":case"script":return q.a.gc8().K(a)
case"input":s=a.e.j(0,"type")
if(s==null)s=p
else{r=t.E
r=A.ad(new A.I(new A.a9(s),r.h("i(v.E)").a(A.bN()),r.h("I<v.E,i>")),0,p)
s=r}if(s==="hidden"){q.a.a1(a.a,"unexpected-hidden-input-in-table")
s=q.b
s.O(a)
s=s.c
if(0>=s.length)return A.c(s,-1)
s.pop()}else q.hs(a)
return p
case"form":q.a.a1(a.a,"unexpected-form-in-table")
s=q.b
if(s.f==null){s.O(a)
r=s.c
s.sjj(B.a.gu(r))
if(0>=r.length)return A.c(r,-1)
r.pop()}return p
default:q.hs(a)
return p}},
P(a){var s,r,q=this,p=a.b
switch(p){case"table":q.c_(a)
return null
case"body":case"caption":case"col":case"colgroup":case"html":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":s=t.z
q.a.G(a.a,"unexpected-end-tag",A.y(["name",p],s,s))
return null
default:s=q.a
r=t.z
s.G(a.a,"unexpected-end-tag-implies-table-voodoo",A.y(["name",p],r,r))
r=q.b
r.r=!0
s.ga7().P(a)
r.r=!1
return null}},
fp(){var s=this.b.c
while(!0){if(!(B.a.gu(s).x!=="table"&&B.a.gu(s).x!=="html"))break
if(0>=s.length)return A.c(s,-1)
s.pop()}},
a9(){var s=B.a.gu(this.b.c)
if(s.x!=="html")this.a.a1(s.e,"eof-in-table")
return!1},
aM(a){var s=this.a,r=s.gaG()
s.x=s.gdF()
s.gdF().c=r
s.gaG().aM(a)
return null},
a2(a){var s=this.a,r=s.gaG()
s.x=s.gdF()
s.gdF().c=r
s.gaG().a2(a)
return null},
hr(a){var s
this.fp()
this.b.O(a)
s=this.a
s.x=s.ghZ()},
ht(a){var s
this.fp()
this.b.O(a)
s=this.a
s.x=s.gf8()},
lg(a){var s=this.a,r=t.z
s.G(a.a,"unexpected-start-tag-implies-end-tag",A.y(["startName","table","endName","table"],r,r))
s.gaG().P(new A.J("table",!1))
return a},
hs(a){var s=this.a,r=t.z
s.G(a.a,u.M,A.y(["name",a.b],r,r))
r=this.b
r.r=!0
s.ga7().K(a)
r.r=!1},
c_(a){var s,r,q=this,p=q.b
if(p.a0("table","table")){p.cm()
p=p.c
s=B.a.gu(p).x
if(s!=="table"){r=t.z
q.a.G(a.a,"end-tag-too-early-named",A.y(["gotName","table","expectedName",s],r,r))}for(;B.a.gu(p).x!=="table";){if(0>=p.length)return A.c(p,-1)
p.pop()}if(0>=p.length)return A.c(p,-1)
p.pop()
q.a.jP()}else q.a.a1(a.a,"undefined-error")}}
A.db.prototype={
dc(){var s,r,q=this,p=q.d
if(p.length===0)return
s=A.w(p)
r=new A.I(p,s.h("n(1)").a(new A.jM()),s.h("I<1,n>")).aF(0,"")
if(!A.mX(r)){p=q.a.gaK()
s=p.b
s.r=!0
p.a.ga7().a2(new A.E(null,r))
s.r=!1}else if(r.length!==0)q.b.c1(r,null)
q.snw(A.a([],t.ks))},
ci(a){var s
this.dc()
s=this.c
s.toString
this.a.x=s
return a},
a9(){this.dc()
var s=this.c
s.toString
this.a.x=s
return!0},
a2(a){if(a.gaE(a)==="\x00")return null
B.a.p(this.d,a)
return null},
aM(a){B.a.p(this.d,a)
return null},
K(a){var s
this.dc()
s=this.c
s.toString
this.a.x=s
return a},
P(a){var s
this.dc()
s=this.c
s.toString
this.a.x=s
return a},
snw(a){this.d=t.oX.a(a)}}
A.jM.prototype={
$1(a){t.g.a(a)
return a.gaE(a)},
$S:85}
A.e8.prototype={
K(a){switch(a.b){case"html":return this.bj(a)
case"caption":case"col":case"colgroup":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":return this.lh(a)
default:return this.a.ga7().K(a)}},
P(a){var s,r=this,q=a.b
switch(q){case"caption":r.o_(a)
return null
case"table":return r.c_(a)
case"body":case"col":case"colgroup":case"html":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":s=t.z
r.a.G(a.a,"unexpected-end-tag",A.y(["name",q],s,s))
return null
default:return r.a.ga7().P(a)}},
a9(){this.a.ga7().a9()
return!1},
a2(a){return this.a.ga7().a2(a)},
lh(a){var s,r=this.a
r.a1(a.a,"undefined-error")
s=this.b.a0("caption","table")
r.gaG().P(new A.J("caption",!1))
if(s)return a
return null},
o_(a){var s,r,q=this,p=q.b
if(p.a0("caption","table")){p.cm()
s=p.c
if(B.a.gu(s).x!=="caption"){r=t.z
q.a.G(a.a,"expected-one-end-tag-but-got-another",A.y(["gotName","caption","expectedName",B.a.gu(s).x],r,r))}for(;B.a.gu(s).x!=="caption";){if(0>=s.length)return A.c(s,-1)
s.pop()}if(0>=s.length)return A.c(s,-1)
s.pop()
p.fn()
p=q.a
p.x=p.gaK()}else q.a.a1(a.a,"undefined-error")},
c_(a){var s,r=this.a
r.a1(a.a,"undefined-error")
s=this.b.a0("caption","table")
r.gaG().P(new A.J("caption",!1))
if(s)return a
return null}}
A.e9.prototype={
K(a){var s,r=this
switch(a.b){case"html":return r.bj(a)
case"col":s=r.b
s.O(a)
s=s.c
if(0>=s.length)return A.c(s,-1)
s.pop()
return null
default:s=B.a.gu(r.b.c).x
r.d7(new A.J("colgroup",!1))
return s==="html"?null:a}},
P(a){var s,r=this
switch(a.b){case"colgroup":r.d7(a)
return null
case"col":s=t.z
r.a.G(a.a,"no-end-tag",A.y(["name","col"],s,s))
return null
default:s=B.a.gu(r.b.c).x
r.d7(new A.J("colgroup",!1))
return s==="html"?null:a}},
a9(){if(B.a.gu(this.b.c).x==="html")return!1
else{this.d7(new A.J("colgroup",!1))
return!0}},
a2(a){var s=B.a.gu(this.b.c).x
this.d7(new A.J("colgroup",!1))
return s==="html"?null:a},
d7(a){var s=this.b.c,r=this.a
if(B.a.gu(s).x==="html")r.a1(a.a,"undefined-error")
else{if(0>=s.length)return A.c(s,-1)
s.pop()
r.x=r.gaK()}}}
A.cB.prototype={
K(a){var s,r=this,q=null,p=a.b
switch(p){case"html":return r.bj(a)
case"tr":r.hu(a)
return q
case"td":case"th":s=t.z
r.a.G(a.a,"unexpected-cell-in-table-body",A.y(["name",p],s,s))
r.hu(A.aJ("tr",A.ab(q,q,t.K,t.N),q,!1))
return a
case"caption":case"col":case"colgroup":case"tbody":case"tfoot":case"thead":return r.c_(a)
default:return r.a.gaK().K(a)}},
P(a){var s,r=this,q=a.b
switch(q){case"tbody":case"tfoot":case"thead":r.dZ(a)
return null
case"table":return r.c_(a)
case"body":case"caption":case"col":case"colgroup":case"html":case"td":case"th":case"tr":s=t.z
r.a.G(a.a,"unexpected-end-tag-in-table-body",A.y(["name",q],s,s))
return null
default:return r.a.gaK().P(a)}},
fo(){for(var s=this.b.c;!B.a.F(B.bA,B.a.gu(s).x);){if(0>=s.length)return A.c(s,-1)
s.pop()}B.a.gu(s).toString},
a9(){this.a.gaK().a9()
return!1},
aM(a){return this.a.gaK().aM(a)},
a2(a){return this.a.gaK().a2(a)},
hu(a){var s
this.fo()
this.b.O(a)
s=this.a
s.x=s.gf7()},
dZ(a){var s=this.b,r=this.a
if(s.a0(a.b,"table")){this.fo()
s=s.c
if(0>=s.length)return A.c(s,-1)
s.pop()
r.x=r.gaK()}else{s=t.z
r.G(a.a,"unexpected-end-tag-in-table-body",A.y(["name",a.b],s,s))}},
c_(a){var s=this,r="table",q=s.b
if(q.a0("tbody",r)||q.a0("thead",r)||q.a0("tfoot",r)){s.fo()
s.dZ(new A.J(B.a.gu(q.c).x,!1))
return a}else s.a.a1(a.a,"undefined-error")
return null}}
A.eb.prototype={
K(a){var s,r,q=this
switch(a.b){case"html":return q.bj(a)
case"td":case"th":q.iR()
s=q.b
s.O(a)
r=q.a
r.x=r.ghY()
s.d.p(0,null)
return null
case"caption":case"col":case"colgroup":case"tbody":case"tfoot":case"thead":case"tr":s=q.b.a0("tr","table")
q.e_(new A.J("tr",!1))
return!s?null:a
default:return q.a.gaK().K(a)}},
P(a){var s,r=this,q=a.b
switch(q){case"tr":r.e_(a)
return null
case"table":q=r.b.a0("tr","table")
r.e_(new A.J("tr",!1))
return!q?null:a
case"tbody":case"tfoot":case"thead":return r.dZ(a)
case"body":case"caption":case"col":case"colgroup":case"html":case"td":case"th":s=t.z
r.a.G(a.a,"unexpected-end-tag-in-table-row",A.y(["name",q],s,s))
return null
default:return r.a.gaK().P(a)}},
iR(){var s,r,q,p,o,n,m,l,k
for(s=this.b.c,r=this.a,q=t.z,p=r.c.a;!0;){o=B.a.gu(s)
n=o.x
if(n==="tr"||n==="html")break
m=o.e
n=A.y(["name",B.a.gu(s).x],q,q)
if(m==null){l=p.w
if(l==null)m=null
else{k=p.y
new A.b2(l,k).bk(l,k)
m=new A.ar(l,k,k)
m.aI(l,k,k)}}B.a.p(r.e,new A.aY("unexpected-implied-end-tag-in-table-row",m,n))
if(0>=s.length)return A.c(s,-1)
s.pop()}},
a9(){this.a.gaK().a9()
return!1},
aM(a){return this.a.gaK().aM(a)},
a2(a){return this.a.gaK().a2(a)},
e_(a){var s=this.b,r=this.a
if(s.a0("tr","table")){this.iR()
s=s.c
if(0>=s.length)return A.c(s,-1)
s.pop()
r.x=r.gf8()}else r.a1(a.a,"undefined-error")},
dZ(a){if(this.b.a0(a.b,"table")){this.e_(new A.J("tr",!1))
return a}else{this.a.a1(a.a,"undefined-error")
return null}}}
A.da.prototype={
K(a){switch(a.b){case"html":return this.bj(a)
case"caption":case"col":case"colgroup":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":return this.li(a)
default:return this.a.ga7().K(a)}},
P(a){var s,r=this,q=a.b
switch(q){case"td":case"th":r.fF(a)
return null
case"body":case"caption":case"col":case"colgroup":case"html":s=t.z
r.a.G(a.a,"unexpected-end-tag",A.y(["name",q],s,s))
return null
case"table":case"tbody":case"tfoot":case"thead":case"tr":return r.o1(a)
default:return r.a.ga7().P(a)}},
iS(){var s=this.b
if(s.a0("td","table"))this.fF(new A.J("td",!1))
else if(s.a0("th","table"))this.fF(new A.J("th",!1))},
a9(){this.a.ga7().a9()
return!1},
a2(a){return this.a.ga7().a2(a)},
li(a){var s=this.b
if(s.a0("td","table")||s.a0("th","table")){this.iS()
return a}else{this.a.a1(a.a,"undefined-error")
return null}},
fF(a){var s,r=this,q=r.b,p=q.a0(a.b,"table"),o=a.b
if(p){q.c4(o)
p=q.c
o=B.a.gu(p).x
s=a.b
if(o!=s){p=t.z
r.a.G(a.a,"unexpected-cell-end-tag",A.y(["name",s],p,p))
r.cI(a)}else{if(0>=p.length)return A.c(p,-1)
p.pop()}q.fn()
q=r.a
q.x=q.gf7()}else{q=t.z
r.a.G(a.a,"unexpected-end-tag",A.y(["name",o],q,q))}},
o1(a){if(this.b.a0(a.b,"table")){this.iS()
return a}else this.a.a1(a.a,"undefined-error")
return null}}
A.ec.prototype={
K(a){var s,r=this,q=null,p=a.b
switch(p){case"html":return r.bj(a)
case"option":p=r.b
s=p.c
if(B.a.gu(s).x==="option"){if(0>=s.length)return A.c(s,-1)
s.pop()}p.O(a)
return q
case"optgroup":p=r.b
s=p.c
if(B.a.gu(s).x==="option"){if(0>=s.length)return A.c(s,-1)
s.pop()}if(B.a.gu(s).x==="optgroup"){if(0>=s.length)return A.c(s,-1)
s.pop()}p.O(a)
return q
case"select":r.a.a1(a.a,"unexpected-select-in-select")
r.fE(new A.J("select",!1))
return q
case"input":case"keygen":case"textarea":return r.ld(a)
case"script":return r.a.gc8().K(a)
default:s=t.z
r.a.G(a.a,"unexpected-start-tag-in-select",A.y(["name",p],s,s))
return q}},
P(a){var s,r,q=this,p=null,o="unexpected-end-tag-in-select",n=a.b
switch(n){case"option":n=q.b.c
if(B.a.gu(n).x==="option"){if(0>=n.length)return A.c(n,-1)
n.pop()}else{n=t.z
q.a.G(a.a,o,A.y(["name","option"],n,n))}return p
case"optgroup":n=q.b.c
if(B.a.gu(n).x==="option"){s=n.length
r=s-2
if(!(r>=0))return A.c(n,r)
r=n[r].x==="optgroup"
s=r}else s=!1
if(s){if(0>=n.length)return A.c(n,-1)
n.pop()}if(B.a.gu(n).x==="optgroup"){if(0>=n.length)return A.c(n,-1)
n.pop()}else{n=t.z
q.a.G(a.a,o,A.y(["name","optgroup"],n,n))}return p
case"select":q.fE(a)
return p
default:s=t.z
q.a.G(a.a,o,A.y(["name",n],s,s))
return p}},
a9(){var s=B.a.gu(this.b.c)
if(s.x!=="html")this.a.a1(s.e,"eof-in-select")
return!1},
a2(a){if(a.gaE(a)==="\x00")return null
this.b.c1(a.gaE(a),a.a)
return null},
ld(a){var s="select"
this.a.a1(a.a,"unexpected-input-in-select")
if(this.b.a0(s,s)){this.fE(new A.J(s,!1))
return a}return null},
fE(a){var s=this.a
if(this.b.a0("select","select")){this.cI(a)
s.jP()}else s.a1(a.a,"undefined-error")}}
A.h5.prototype={
K(a){var s,r,q=a.b
switch(q){case"caption":case"table":case"tbody":case"tfoot":case"thead":case"tr":case"td":case"th":s=this.a
r=t.z
s.G(a.a,u.a,A.y(["name",q],r,r))
s.gc9().P(new A.J("select",!1))
return a
default:return this.a.gc9().K(a)}},
P(a){switch(a.b){case"caption":case"table":case"tbody":case"tfoot":case"thead":case"tr":case"td":case"th":return this.c_(a)
default:return this.a.gc9().P(a)}},
a9(){this.a.gc9().a9()
return!1},
a2(a){return this.a.gc9().a2(a)},
c_(a){var s=this.a,r=t.z
s.G(a.a,u.r,A.y(["name",a.b],r,r))
if(this.b.a0(a.b,"table")){s.gc9().P(new A.J("select",!1))
return a}return null}}
A.h3.prototype={
a2(a){var s
if(a.gaE(a)==="\x00"){a.c="\ufffd"
a.b=null}else{s=this.a
if(s.z&&!A.mX(a.gaE(a)))s.z=!1}return this.lD(a)},
K(a){var s,r,q,p,o,n=this,m=n.b,l=m.c,k=B.a.gu(l)
if(!B.a.F(B.b9,a.b))if(a.b==="font")s=a.e.aj("color")||a.e.aj("face")||a.e.aj("size")
else s=!1
else s=!0
if(s){s=n.a
r=t.z
s.G(a.a,u.G,A.y(["name",a.b],r,r))
m=m.a
r=t.h
q=t.iA
while(!0){if(B.a.gu(l).w!=m)if(!s.js(B.a.gu(l))){p=r.a(B.a.gu(l))
p=!B.a.F(B.ae,new A.o(p.w,p.x,q))}else p=!1
else p=!1
if(!p)break
if(0>=l.length)return A.c(l,-1)
l.pop()}return a}else{s=k.w
if(s==="http://www.w3.org/1998/Math/MathML")n.a.iz(a)
else if(s==="http://www.w3.org/2000/svg"){o=B.bF.j(0,a.b)
if(o!=null)a.b=o
n.a.iA(a)}n.a.fg(a)
a.w=s
m.O(a)
if(a.c){if(0>=l.length)return A.c(l,-1)
l.pop()
a.r=!0}return null}},
P(a){var s,r,q,p,o,n,m=this,l=null,k="_initialPhase",j=m.b,i=j.c,h=i.length-1,g=B.a.gu(i),f=g.x
if(f==null)f=l
else{s=t.E
s=A.ad(new A.I(new A.a9(f),s.h("i(v.E)").a(A.bN()),s.h("I<v.E,i>")),0,l)
f=s}s=a.b
if(f!=s){f=t.z
m.a.G(a.a,"unexpected-end-tag",A.y(["name",s],f,f))}j=j.a
f=t.E
s=f.h("i(v.E)")
f=f.h("I<v.E,i>")
while(!0){if(!!0){r=l
break}c$0:{q=g.x
q=q==null?l:A.ad(new A.I(new A.a9(q),s.a(A.bN()),f),0,l)
if(q==a.b){j=m.a
p=j.x
if(p===$){p=j.Q
if(p===$){o=new A.bv(j,j.d)
p!==$&&A.C(k)
j.Q=o
p=o}p=j.x=p}n=j.cy
if(n===$){f=A.a([],t.ks)
j.cy!==$&&A.C("_inTableTextPhase")
n=j.cy=new A.db(f,j,j.d)}if(p===n){p=j.x
if(p===$){p=j.Q
if(p===$){o=new A.bv(j,j.d)
p!==$&&A.C(k)
j.Q=o
p=o}p=j.x=p}t.aB.a(p)
p.dc()
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
if(p===$){o=new A.bv(j,j.d)
p!==$&&A.C(k)
j.Q=o
p=o}p=j.x=p}r=p.P(a)
break}}}return r}}
A.ft.prototype={
K(a){var s,r,q=a.b
if(q==="html")return this.a.ga7().K(a)
s=this.a
r=t.z
s.G(a.a,"unexpected-start-tag-after-body",A.y(["name",q],r,r))
s.x=s.ga7()
return a},
P(a){var s,r,q=a.b
if(q==="html"){this.fD(a)
return null}s=this.a
r=t.z
s.G(a.a,"unexpected-end-tag-after-body",A.y(["name",q],r,r))
s.x=s.ga7()
return a},
a9(){return!1},
ci(a){var s=this.b,r=s.c
if(0>=r.length)return A.c(r,0)
s.cE(a,r[0])
return null},
a2(a){var s=this.a
s.a1(a.a,"unexpected-char-after-body")
s.x=s.ga7()
return a},
fD(a){var s,r,q,p
for(s=this.b.c,r=A.w(s).h("X<1>"),s=new A.X(s,r),s=new A.L(s,s.gm(s),r.h("L<D.E>")),r=r.h("D.E");s.n();){q=s.d
if((q==null?r.a(q):q).x==="html")break}s=this.a
p=s.k4
if(p===$){p!==$&&A.C("_afterAfterBodyPhase")
p=s.k4=new A.fr(s,s.d)}s.x=p}}
A.ea.prototype={
K(a){var s,r=this,q=a.b
switch(q){case"html":return r.bj(a)
case"frameset":r.b.O(a)
return null
case"frame":q=r.b
q.O(a)
q=q.c
if(0>=q.length)return A.c(q,-1)
q.pop()
return null
case"noframes":return r.a.ga7().K(a)
default:s=t.z
r.a.G(a.a,"unexpected-start-tag-in-frameset",A.y(["name",q],s,s))
return null}},
P(a){var s,r,q=this,p=a.b
switch(p){case"frameset":p=q.b.c
if(B.a.gu(p).x==="html")q.a.a1(a.a,u.q)
else{if(0>=p.length)return A.c(p,-1)
p.pop()}p=B.a.gu(p).x
if(p!=="frameset"){p=q.a
s=p.k3
if(s===$){s!==$&&A.C("_afterFramesetPhase")
s=p.k3=new A.fu(p,p.d)}p.x=s}return null
default:r=t.z
q.a.G(a.a,"unexpected-end-tag-in-frameset",A.y(["name",p],r,r))
return null}},
a9(){var s=B.a.gu(this.b.c)
if(s.x!=="html")this.a.a1(s.e,"eof-in-frameset")
return!1},
a2(a){this.a.a1(a.a,"unexpected-char-in-frameset")
return null}}
A.fu.prototype={
K(a){var s,r=a.b
switch(r){case"html":return this.bj(a)
case"noframes":return this.a.gc8().K(a)
default:s=t.z
this.a.G(a.a,"unexpected-start-tag-after-frameset",A.y(["name",r],s,s))
return null}},
P(a){var s,r,q=a.b,p=this.a
switch(q){case"html":s=p.ok
if(s===$){s!==$&&A.C("_afterAfterFramesetPhase")
s=p.ok=new A.fs(p,p.d)}p.x=s
return null
default:r=t.z
p.G(a.a,"unexpected-end-tag-after-frameset",A.y(["name",q],r,r))
return null}},
a9(){return!1},
a2(a){this.a.a1(a.a,"unexpected-char-after-frameset")
return null}}
A.fr.prototype={
K(a){var s,r,q=a.b
if(q==="html")return this.a.ga7().K(a)
s=this.a
r=t.z
s.G(a.a,"expected-eof-but-got-start-tag",A.y(["name",q],r,r))
s.x=s.ga7()
return a},
a9(){return!1},
ci(a){var s=this.b,r=s.b
r===$&&A.b("document")
s.cE(a,r)
return null},
aM(a){return this.a.ga7().aM(a)},
a2(a){var s=this.a
s.a1(a.a,"expected-eof-but-got-char")
s.x=s.ga7()
return a},
P(a){var s=this.a,r=t.z
s.G(a.a,"expected-eof-but-got-end-tag",A.y(["name",a.b],r,r))
s.x=s.ga7()
return a}}
A.fs.prototype={
K(a){var s,r=a.b,q=this.a
switch(r){case"html":return q.ga7().K(a)
case"noframes":return q.gc8().K(a)
default:s=t.z
q.G(a.a,"expected-eof-but-got-start-tag",A.y(["name",r],s,s))
return null}},
a9(){return!1},
ci(a){var s=this.b,r=s.b
r===$&&A.b("document")
s.cE(a,r)
return null},
aM(a){return this.a.ga7().aM(a)},
a2(a){this.a.a1(a.a,"expected-eof-but-got-char")
return null},
P(a){var s=t.z
this.a.G(a.a,"expected-eof-but-got-end-tag",A.y(["name",a.b],s,s))
return null}}
A.aY.prototype={
l(a){var s,r,q=this.b
q.toString
s=B.bE.j(0,this.a)
s.toString
r=q.jx(0,A.tv(s,this.c),null)
return q.a.a==null?"ParserError on "+r:"On "+r},
$ibQ:1}
A.kl.prototype={}
A.fT.prototype={
er(){var s,r,q,p,o=A.ms(t.N),n=this.a.b.j(0,"class")
for(s=(n==null?"":n).split(" "),r=s.length,q=0;q<r;++q){p=J.nl(s[q])
if(p.length!==0)o.p(0,p)}return o}}
A.ia.prototype={
l(a){return this.er().aF(0," ")},
gH(a){var s=this.er()
return A.re(s,s.r,A.A(s).c)},
gm(a){return this.er().a}}
A.jg.prototype={
saw(a){if(this.b>=this.a.length)throw A.d(A.av("No more elements"))
this.b=a},
gaw(){var s=this.b
if(s>=this.a.length)throw A.d(A.av("No more elements"))
if(s>=0)return s
else return 0},
mx(a){var s,r,q,p,o=this
t.pi.a(a)
if(a==null)a=A.oS()
s=o.gaw()
for(r=o.a,q=r.length;s<q;){if(!(s>=0))return A.c(r,s)
p=r[s]
if(!A.ax(a.$1(p))){o.b=s
return p}++s}o.b=s
return null},
il(){return this.mx(null)},
my(a){var s,r,q,p
t.gS.a(a)
s=this.gaw()
for(r=this.a,q=r.length;s<q;){if(!(s>=0))return A.c(r,s)
p=r[s]
if(A.ax(a.$1(p))){this.b=s
return p}++s}return null},
i4(a){var s=B.b.aR(this.a,a,this.gaw())
if(s>=0){this.b=s+a.length-1
return!0}else throw A.d(A.av("No more elements"))},
fc(a,b){if(b==null)b=this.a.length
if(b<0)b+=this.a.length
return B.b.B(this.a,a,b)},
mz(a){return this.fc(a,null)}}
A.j8.prototype={
oT(){var s,r,q,p,o,n,m,l
try{p=this.a
p.i4("charset")
p.saw(p.gaw()+1)
p.il()
o=p.a
n=p.gaw()
m=o.length
if(!(n>=0&&n<m))return A.c(o,n)
if(o[n]!=="=")return null
p.saw(p.gaw()+1)
p.il()
n=p.gaw()
if(!(n>=0&&n<m))return A.c(o,n)
if(o[n]!=='"'){n=p.gaw()
if(!(n>=0&&n<m))return A.c(o,n)
n=o[n]==="'"}else n=!0
if(n){n=p.gaw()
if(!(n>=0&&n<m))return A.c(o,n)
s=o[n]
p.saw(p.gaw()+1)
r=p.gaw()
p.i4(s)
p=p.fc(r,p.gaw())
return p}else{q=p.gaw()
try{p.my(A.oS())
o=p.fc(q,p.gaw())
return o}catch(l){if(A.bq(l) instanceof A.cf){p=p.mz(q)
return p}else throw l}}}catch(l){if(A.bq(l) instanceof A.cf)return null
else throw l}}}
A.jG.prototype={
bs(a){var s,r,q,p,o,n,m,l,k,j,i=this
i.so7(A.mu(t.N))
s=i.y=0
i.smc(A.a([],t.t))
r=i.f
if(r==null){q=i.a
q.toString
p=i.e
p.toString
r=A.rM(q,p)
i.sih(r)}for(q=r.a,p=q.length,o=t.L,n=!1,m=!1;s<p;++s){l=B.b.E(q,s)
if(n){if(l===10){n=!1
continue}n=!1}o.a(r)
k=s+1
j=k<r.gm(r)&&(r.j(0,s)&64512)===55296&&(r.j(0,k)&64512)===56320
if(!j&&!m)if(A.rX(l)){k=i.r
k.dD(k.$ti.c.a("invalid-codepoint"))
if(55296<=l&&l<=57343)l=65533}if(l===13){n=!0
l=10}B.a.p(i.x,l)
m=j}i.w=A.qM(i.x,i.d)},
iP(a){var s=A.av("cannot change encoding when parsing a String.")
throw A.d(s)},
C(){var s,r,q=this,p=q.y,o=q.x
if(p>=o.length)return null
p=q.i2(o,p)
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
p=A.ba(o[s])}return p},
oV(){var s,r,q=this,p=q.y,o=q.x
if(p>=o.length)return null
p=q.i2(o,p)
o=q.x
s=q.y
r=o.length
if(p){if(!(s>=0&&s<r))return A.c(o,s)
p=o[s];++s
if(!(s<r))return A.c(o,s)
s=A.ad(A.a([p,o[s]],t.t),0,null)
p=s}else{if(!(s>=0&&s<r))return A.c(o,s)
p=A.ba(o[s])}return p},
i2(a,b){var s,r
t.L.a(a)
s=b+1
r=J.Y(a)
return s<r.gm(a)&&(A.a0(r.j(a,b))&64512)===55296&&(A.a0(r.j(a,s))&64512)===56320},
cc(a,b){var s,r,q=this,p=q.y,o=a.length
while(!0){s=q.oV()
if(s!=null)r=A.ct(a,s,0)===b
else r=!1
if(!r)break
q.y=q.y+s.length}return A.ad(B.a.bc(q.x,p,q.y),0,null)},
bd(a){return this.cc(a,!1)},
T(a){if(a!=null)this.y=this.y-a.length},
sih(a){this.f=t.f8.a(a)},
so7(a){this.r=t.f_.a(a)},
smc(a){this.x=t.L.a(a)}}
A.aX.prototype={
gm(a){return this.a.length},
gH(a){var s=this.a
return new J.az(s,s.length,A.w(s).h("az<1>"))},
j(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.c(s,b)
return s[b]},
v(a,b,c){B.a.v(this.a,b,A.A(this).h("aX.E").a(c))},
sm(a,b){B.a.sm(this.a,b)},
p(a,b){B.a.p(this.a,A.A(this).h("aX.E").a(b))},
bJ(a,b,c){return B.a.bJ(this.a,b,A.A(this).h("aX.E").a(c))},
N(a,b){B.a.N(this.a,A.A(this).h("j<aX.E>").a(b))}}
A.ez.prototype={
jJ(a,b,c,d){var s,r,q,p,o,n
t.jB.a(d)
for(s=b.gal(b),s=s.gH(s),r=new A.cS(s,t.pl),q=c.b,p=this.gjZ(),o=t.h;r.n();){n=o.a(s.gq())
this.a=n
if(B.a.b5(q,p))B.a.p(d,n)
this.jJ(0,n,c,d)}},
k_(a){var s,r,q,p,o,n,m,l,k,j,i=this
t.dT.a(a)
s=i.a
for(r=a.b,q=A.w(r).h("X<1>"),r=new A.X(r,q),r=new A.L(r,r.gm(r),q.h("L<D.E>")),q=q.h("D.E"),p=!0,o=null;r.n();){n=r.d
if(n==null)n=q.a(n)
if(o==null)p=A.iB(n.c.R(i))
else if(o===514){m=n.c
do{l=i.a.a
k=l instanceof A.V?l:null
i.a=k}while(k!=null&&!A.iB(m.R(i)))
if(i.a==null)p=!1}else if(o===517){m=n.c
do{k=i.a
k=k.gen(k)
i.a=k}while(k!=null&&!A.iB(m.R(i)))
if(i.a==null)p=!1}if(!p)break
j=n.b
switch(j){case 515:n=i.a
i.a=n.gen(n)
break
case 516:l=i.a.a
i.a=l instanceof A.V?l:null
break
case 514:case 517:o=j
break
case 513:break
default:throw A.d(i.it(a))}if(i.a==null){p=!1
break}}i.a=s
return p},
d0(a){return new A.eN("'"+a.l(0)+"' selector of type "+A.dF(a).l(0)+" is not implemented")},
it(a){return new A.e6("'"+a.l(0)+"' is not a valid selector",null,null)},
pQ(a){var s=this,r=a.b
switch(r.gah(r)){case"root":r=s.a
return r.x==="html"&&r.a==null
case"empty":r=s.a
r=r.gal(r)
return r.b5(r,new A.ks())
case"blank":r=s.a
r=r.gal(r)
return r.b5(r,new A.kt())
case"first-child":r=s.a
return r.gen(r)==null
case"last-child":r=s.a
return r.gjz(r)==null
case"only-child":r=s.a
if(r.gen(r)==null){r=s.a
r=r.gjz(r)==null}else r=!1
return r
case"link":return s.a.b.j(0,"href")!=null
case"visited":return!1}if(A.nR(r.gah(r)))return!1
throw A.d(s.d0(a))},
pS(a){var s=a.b
if(A.nR(s.gah(s)))return!1
throw A.d(this.d0(a))},
pR(a){return A.N(this.d0(a))},
pP(a){var s,r,q,p,o,n,m=this,l=a.b
switch(l.gah(l)){case"nth-child":s=t.b9.a(a.f).b
l=s.length
if(l===1){if(0>=l)return A.c(s,0)
r=s[0] instanceof A.ag}else r=!1
if(r){if(0>=l)return A.c(s,0)
q=t.mH.a(s[0])
p=m.a.a
if(p!=null){l=A.ly(q.c)
if(l>0){r=p.gal(p)
l=r.ak(r,m.a)===l}else l=!1}else l=!1
return l}break
case"lang":l=t.b9.a(a.f)
l=l.a
l.toString
o=A.ad(B.y.bc(l.a.c,l.b,l.c),0,null)
n=A.qG(m.a)
return n!=null&&B.b.Z(n,o)}throw A.d(m.d0(a))},
pO(a){if(!A.iB(t.g9.a(a.b).R(this)))return!1
if(a.d instanceof A.cj)return!0
if(a.gjy()==="")return this.a.w==null
throw A.d(this.d0(a))},
pN(a){var s,r,q=a.b,p=this.a.b.j(0,q.gah(q).toLowerCase())
if(p==null)return!1
q=a.d
if(q===535)return!0
s=A.k(a.e)
switch(q){case 28:return p===s
case 530:return B.a.b5(A.a(p.split(" "),t.s),new A.kq(s))
case 531:if(B.b.Z(p,s)){q=p.length
r=s.length
if(q!==r){if(!(r<q))return A.c(p,r)
q=p[r]==="-"}else q=!0}else q=!1
return q
case 532:return B.b.Z(p,s)
case 533:return B.b.bm(p,s)
case 534:return B.b.F(p,s)
default:throw A.d(this.it(a))}}}
A.ks.prototype={
$1(a){var s
t.J.a(a)
if(!(a instanceof A.V))if(a instanceof A.bW){s=J.bC(a.w)
a.w=s
s=s.length!==0}else s=!1
else s=!0
return!s},
$S:22}
A.kt.prototype={
$1(a){var s
t.J.a(a)
if(!(a instanceof A.V))if(a instanceof A.bW){s=J.bC(a.w)
a.w=s
s=new A.hB(s).b5(0,new A.kr())}else s=!1
else s=!0
return!s},
$S:22}
A.kr.prototype={
$1(a){return!A.n4(A.a0(a))},
$S:11}
A.kq.prototype={
$1(a){A.aw(a)
return a.length!==0&&a===this.a},
$S:6}
A.b5.prototype={}
A.bV.prototype={}
A.ce.prototype={
gcg(a){return 2},
saE(a,b){this.e=t.oP.a(b)}}
A.J.prototype={
gcg(a){return 3}}
A.bc.prototype={
gaE(a){var s=this,r=s.c
if(r==null){r=s.c=J.bC(s.b)
s.b=null}return r}}
A.m.prototype={
gcg(a){return 6}}
A.E.prototype={
gcg(a){return 1}}
A.cO.prototype={
gcg(a){return 0}}
A.d4.prototype={
gcg(a){return 4}}
A.dV.prototype={
gcg(a){return 5}}
A.eH.prototype={}
A.lU.prototype={
$0(){var s,r,q=A.aW(t.N,t.I)
for(s=B.Y.gbq(),s=s.gH(s);s.n();){r=s.gq()
if(0>=r.length)return A.c(r,0)
J.mg(q.ep(r[0],new A.lT()),r)}return q},
$S:35}
A.lT.prototype={
$0(){return A.a([],t.s)},
$S:36}
A.e7.prototype={
glj(a){var s=this.x
s===$&&A.b("state")
return s},
gq(){var s=this.at
s.toString
return s},
dG(a){var s=this.Q
s.toString
B.a.gu(s).b=this.ay.l(0)},
cu(a){},
ca(a){this.dG(a)},
bV(a){var s,r=this
A.aw(a)
if(r.Q==null)r.seZ(0,A.a([],t.kG))
s=r.ax
s.a=""
s.a=a
r.ay.a=""
s=r.Q
s.toString
B.a.p(s,new A.eH())},
n(){var s,r=this,q=r.a,p=r.r
while(!0){s=q.r
if(!(s.b===s.c&&p.b===p.c))break
if(!A.ax(r.lk(0))){r.at=null
return!1}}if(!s.gag(s)){q=q.r.jL()
r.at=new A.m(null,null,q)}else r.smD(p.jL())
return!0},
bs(a){var s=this
s.z=0
s.r.bY(0)
s.w=null
s.y.a=""
s.seZ(0,null)
s.seY(null)
s.si(t.c.a(s.gD()))},
k(a){var s=this.r
s.dD(s.$ti.c.a(a))},
nJ(a){var s,r,q,p,o,n,m,l,k=this,j=null,i="illegal-codepoint-for-numeric-entity"
if(a){s=A.tq()
r=16}else{s=A.tp()
r=10}q=A.a([],t.D)
p=k.a
o=p.C()
while(!0){if(!(A.ax(s.$1(o))&&o!=null))break
B.a.p(q,o)
o=p.C()}n=A.cr(B.a.aX(q),r)
m=B.bG.j(0,n)
if(m!=null){l=t.z
l=A.y(["charAsInt",n],l,l)
k.k(new A.m(l,j,i))}else if(55296<=n&&n<=57343||n>1114111){l=t.z
l=A.y(["charAsInt",n],l,l)
k.k(new A.m(l,j,i))
m="\ufffd"}else{if(!(1<=n&&n<=8))if(!(14<=n&&n<=31))if(!(127<=n&&n<=159))l=64976<=n&&n<=65007||B.a.F(B.be,n)
else l=!0
else l=!0
else l=!0
if(l){l=t.z
l=A.y(["charAsInt",n],l,l)
k.k(new A.m(l,j,i))}m=A.ad(A.a([n],t.t),0,j)}if(o!==";"){k.k(new A.m(j,j,"numeric-entity-without-semicolon"))
p.T(o)}return m},
dW(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.a,g=A.a([h.C()],t.D)
if(0>=g.length)return A.c(g,0)
if(!A.a6(g[0])){if(0>=g.length)return A.c(g,0)
s=g[0]
s=s==="<"||s==="&"||s==null||a===s}else s=!0
if(s){if(0>=g.length)return A.c(g,0)
h.T(g[0])
r="&"}else{if(0>=g.length)return A.c(g,0)
s=g[0]
if(s==="#"){B.a.p(g,h.C())
if(B.a.gu(g)==="x"||B.a.gu(g)==="X"){B.a.p(g,h.C())
q=!0}else q=!1
if(!(q&&A.p4(B.a.gu(g))))s=!q&&A.m5(B.a.gu(g))
else s=!0
if(s){h.T(B.a.gu(g))
r=j.nJ(q)}else{j.k(new A.m(i,i,"expected-numeric-entity"))
if(0>=g.length)return A.c(g,-1)
h.T(g.pop())
r="&"+B.a.aX(g)}}else{p=$.pB()
s.toString
o=p.j(0,s)
if(o==null)o=B.o
for(;B.a.gu(g)!=null;){s=J.pJ(o,new A.jI(B.a.aX(g)))
o=A.h(s,!1,s.$ti.h("j.E"))
if(o.length===0)break
B.a.p(g,h.C())}m=g.length-1
while(!0){if(!(m>1)){n=i
break}l=B.a.aX(B.a.bc(g,0,m))
if(B.Y.aj(l)){n=l
break}--m}if(n!=null){s=n.length
p=s-1
if(!(p>=0))return A.c(n,p)
s=n[p]!==";"
if(s)j.k(new A.m(i,i,"named-entity-without-semicolon"))
if(s)if(b){if(!(m>=0&&m<g.length))return A.c(g,m)
s=g[m]
if(!(A.aQ(s)||A.m5(s))){if(!(m<g.length))return A.c(g,m)
s=g[m]==="="}else s=!0}else s=!1
else s=!1
if(s){if(0>=g.length)return A.c(g,-1)
h.T(g.pop())
r="&"+B.a.aX(g)}else{r=B.Y.j(0,n)
if(0>=g.length)return A.c(g,-1)
h.T(g.pop())
r=A.k(r)+B.a.aX(A.n9(g,m,i,t.jv))}}else{j.k(new A.m(i,i,"expected-named-entity"))
if(0>=g.length)return A.c(g,-1)
h.T(g.pop())
r="&"+B.a.aX(g)}}}if(b)j.ay.a+=r
else{if(A.a6(r))k=new A.cO(i,r)
else k=new A.E(i,r)
j.k(k)}},
iX(){return this.dW(null,!1)},
b8(){var s,r,q,p,o,n,m,l=this,k=null,j=l.w
j.toString
if(j instanceof A.bV){s=j.b
if(s==null)s=k
else{r=t.E
r=A.ad(new A.I(new A.a9(s),r.h("i(v.E)").a(A.bN()),r.h("I<v.E,i>")),0,k)
s=r}j.b=s
if(j instanceof A.J){if(l.Q!=null)l.k(new A.m(k,k,"attributes-in-end-tag"))
if(j.c)l.k(new A.m(k,k,"this-closing-flag-on-end-tag"))
q=j}else if(j instanceof A.ce){j.saE(0,A.ab(k,k,t.K,t.N))
s=l.Q
if(s!=null)for(r=s.length,p=0;p<s.length;s.length===r||(0,A.e)(s),++p){o=s[p]
n=j.e
m=o.a
m.toString
n.ep(m,new A.jJ(o))}q=j}else q=j
l.seZ(0,k)
l.seY(k)}else q=j
l.k(q)
l.si(t.c.a(l.gD()))},
nO(){var s,r=this,q=null,p=r.a,o=p.C()
if(o==="&")r.si(t.c.a(r.go3()))
else if(o==="<")r.si(t.c.a(r.gpB()))
else if(o==="\x00"){r.k(new A.m(q,q,"invalid-codepoint"))
r.k(new A.E(q,"\x00"))}else if(o==null)return!1
else if(A.a6(o)){p=p.cc(" \n\r\t\f",!0)
r.k(new A.cO(q,o+p))}else{s=p.bd("&<\x00")
r.k(new A.E(q,o+s))}return!0},
o4(){this.iX()
this.si(t.c.a(this.gD()))
return!0},
pl(){var s,r=this,q=null,p=r.a,o=p.C()
if(o==="&")r.si(t.c.a(r.gnu()))
else if(o==="<")r.si(t.c.a(r.gpj()))
else if(o==null)return!1
else if(o==="\x00"){r.k(new A.m(q,q,"invalid-codepoint"))
r.k(new A.E(q,"\ufffd"))}else if(A.a6(o)){p=p.cc(" \n\r\t\f",!0)
r.k(new A.cO(q,o+p))}else{s=p.bd("&<")
r.k(new A.E(q,o+s))}return!0},
nv(){this.iX()
this.si(t.c.a(this.gcL()))
return!0},
pe(){var s,r=this,q=null,p=r.a,o=p.C()
if(o==="<")r.si(t.c.a(r.gpc()))
else if(o==="\x00"){r.k(new A.m(q,q,"invalid-codepoint"))
r.k(new A.E(q,"\ufffd"))}else if(o==null)return!1
else{s=p.bd("<\x00")
r.k(new A.E(q,o+s))}return!0},
kP(){var s,r=this,q=null,p=r.a,o=p.C()
if(o==="<")r.si(t.c.a(r.gkN()))
else if(o==="\x00"){r.k(new A.m(q,q,"invalid-codepoint"))
r.k(new A.E(q,"\ufffd"))}else if(o==null)return!1
else{s=p.bd("<\x00")
r.k(new A.E(q,o+s))}return!0},
oX(){var s=this,r=null,q=s.a,p=q.C()
if(p==null)return!1
else if(p==="\x00"){s.k(new A.m(r,r,"invalid-codepoint"))
s.k(new A.E(r,"\ufffd"))}else{q=q.bd("\x00")
s.k(new A.E(r,p+q))}return!0},
pC(){var s=this,r=null,q=s.a,p=q.C()
if(p==="!")s.si(t.c.a(s.goK()))
else if(p==="/")s.si(t.c.a(s.gnx()))
else if(A.aQ(p)){s.w=A.aJ(p,r,r,!1)
s.si(t.c.a(s.gjS()))}else if(p===">"){s.k(new A.m(r,r,"expected-tag-name-but-got-right-bracket"))
s.k(new A.E(r,"<>"))
s.si(t.c.a(s.gD()))}else if(p==="?"){s.k(new A.m(r,r,"expected-tag-name-but-got-question-mark"))
q.T(p)
s.si(t.c.a(s.gfl()))}else{s.k(new A.m(r,r,"expected-tag-name"))
s.k(new A.E(r,"<"))
q.T(p)
s.si(t.c.a(s.gD()))}return!0},
ny(){var s,r=this,q=null,p=r.a,o=p.C()
if(A.aQ(o)){r.w=new A.J(o,!1)
r.si(t.c.a(r.gjS()))}else if(o===">"){r.k(new A.m(q,q,u.g))
r.si(t.c.a(r.gD()))}else if(o==null){r.k(new A.m(q,q,"expected-closing-tag-but-got-eof"))
r.k(new A.E(q,"</"))
r.si(t.c.a(r.gD()))}else{s=t.z
s=A.y(["data",o],s,s)
r.k(new A.m(s,q,"expected-closing-tag-but-got-char"))
p.T(o)
r.si(t.c.a(r.gfl()))}return!0},
pA(){var s,r=this,q=null,p=r.a.C()
if(A.a6(p))r.si(t.c.a(r.gbF()))
else if(p===">")r.b8()
else if(p==null){r.k(new A.m(q,q,"eof-in-tag-name"))
r.si(t.c.a(r.gD()))}else if(p==="/")r.si(t.c.a(r.gbA()))
else if(p==="\x00"){r.k(new A.m(q,q,"invalid-codepoint"))
s=t.fn.a(r.w)
s.b=A.k(s.b)+"\ufffd"}else{s=t.fn.a(r.w)
s.b=A.k(s.b)+p}return!0},
pk(){var s=this,r=s.a,q=r.C()
if(q==="/"){s.y.a=""
s.si(t.c.a(s.gph()))}else{s.k(new A.E(null,"<"))
r.T(q)
s.si(t.c.a(s.gcL()))}return!0},
pi(){var s=this,r=s.a,q=r.C()
if(A.aQ(q)){s.y.a+=A.k(q)
s.si(t.c.a(s.gpf()))}else{s.k(new A.E(null,"</"))
r.T(q)
s.si(t.c.a(s.gcL()))}return!0},
dK(){var s=this.w
return s instanceof A.bV&&s.b.toLowerCase()===this.y.l(0).toLowerCase()},
pg(){var s,r=this,q=r.dK(),p=r.a,o=p.C()
if(A.a6(o)&&q){r.w=new A.J(r.y.l(0),!1)
r.si(t.c.a(r.gbF()))}else if(o==="/"&&q){r.w=new A.J(r.y.l(0),!1)
r.si(t.c.a(r.gbA()))}else if(o===">"&&q){r.w=new A.J(r.y.l(0),!1)
r.b8()
r.si(t.c.a(r.gD()))}else{s=r.y
if(A.aQ(o))s.a+=A.k(o)
else{s=s.l(0)
r.k(new A.E(null,"</"+s))
p.T(o)
r.si(t.c.a(r.gcL()))}}return!0},
pd(){var s=this,r=s.a,q=r.C()
if(q==="/"){s.y.a=""
s.si(t.c.a(s.gpa()))}else{s.k(new A.E(null,"<"))
r.T(q)
s.si(t.c.a(s.geq()))}return!0},
pb(){var s=this,r=s.a,q=r.C()
if(A.aQ(q)){s.y.a+=A.k(q)
s.si(t.c.a(s.gp8()))}else{s.k(new A.E(null,"</"))
r.T(q)
s.si(t.c.a(s.geq()))}return!0},
p9(){var s,r=this,q=r.dK(),p=r.a,o=p.C()
if(A.a6(o)&&q){r.w=new A.J(r.y.l(0),!1)
r.si(t.c.a(r.gbF()))}else if(o==="/"&&q){r.w=new A.J(r.y.l(0),!1)
r.si(t.c.a(r.gbA()))}else if(o===">"&&q){r.w=new A.J(r.y.l(0),!1)
r.b8()
r.si(t.c.a(r.gD()))}else{s=r.y
if(A.aQ(o))s.a+=A.k(o)
else{s=s.l(0)
r.k(new A.E(null,"</"+s))
p.T(o)
r.si(t.c.a(r.geq()))}}return!0},
kO(){var s=this,r=s.a,q=r.C()
if(q==="/"){s.y.a=""
s.si(t.c.a(s.gky()))}else if(q==="!"){s.k(new A.E(null,"<!"))
s.si(t.c.a(s.gkC()))}else{s.k(new A.E(null,"<"))
r.T(q)
s.si(t.c.a(s.gbR()))}return!0},
kz(){var s=this,r=s.a,q=r.C()
if(A.aQ(q)){s.y.a+=A.k(q)
s.si(t.c.a(s.gkw()))}else{s.k(new A.E(null,"</"))
r.T(q)
s.si(t.c.a(s.gbR()))}return!0},
kx(){var s,r=this,q=r.dK(),p=r.a,o=p.C()
if(A.a6(o)&&q){r.w=new A.J(r.y.l(0),!1)
r.si(t.c.a(r.gbF()))}else if(o==="/"&&q){r.w=new A.J(r.y.l(0),!1)
r.si(t.c.a(r.gbA()))}else if(o===">"&&q){r.w=new A.J(r.y.l(0),!1)
r.b8()
r.si(t.c.a(r.gD()))}else{s=r.y
if(A.aQ(o))s.a+=A.k(o)
else{s=s.l(0)
r.k(new A.E(null,"</"+s))
p.T(o)
r.si(t.c.a(r.gbR()))}}return!0},
kD(){var s=this,r=s.a,q=r.C()
if(q==="-"){s.k(new A.E(null,"-"))
s.si(t.c.a(s.gkA()))}else{r.T(q)
s.si(t.c.a(s.gbR()))}return!0},
kB(){var s=this,r=s.a,q=r.C()
if(q==="-"){s.k(new A.E(null,"-"))
s.si(t.c.a(s.ghi()))}else{r.T(q)
s.si(t.c.a(s.gbR()))}return!0},
kM(){var s,r=this,q=null,p=r.a,o=p.C()
if(o==="-"){r.k(new A.E(q,"-"))
r.si(t.c.a(r.gkF()))}else if(o==="<")r.si(t.c.a(r.geL()))
else if(o==="\x00"){r.k(new A.m(q,q,"invalid-codepoint"))
r.k(new A.E(q,"\ufffd"))}else if(o==null)r.si(t.c.a(r.gD()))
else{s=p.bd("<-\x00")
r.k(new A.E(q,o+s))}return!0},
kG(){var s=this,r=null,q=s.a.C()
if(q==="-"){s.k(new A.E(r,"-"))
s.si(t.c.a(s.ghi()))}else if(q==="<")s.si(t.c.a(s.geL()))
else if(q==="\x00"){s.k(new A.m(r,r,"invalid-codepoint"))
s.k(new A.E(r,"\ufffd"))
s.si(t.c.a(s.gbh()))}else if(q==null)s.si(t.c.a(s.gD()))
else{s.k(new A.E(r,q))
s.si(t.c.a(s.gbh()))}return!0},
kE(){var s=this,r=null,q=s.a.C()
if(q==="-")s.k(new A.E(r,"-"))
else if(q==="<")s.si(t.c.a(s.geL()))
else if(q===">"){s.k(new A.E(r,">"))
s.si(t.c.a(s.gbR()))}else if(q==="\x00"){s.k(new A.m(r,r,"invalid-codepoint"))
s.k(new A.E(r,"\ufffd"))
s.si(t.c.a(s.gbh()))}else if(q==null)s.si(t.c.a(s.gD()))
else{s.k(new A.E(r,q))
s.si(t.c.a(s.gbh()))}return!0},
kL(){var s,r=this,q=r.a,p=q.C()
if(p==="/"){r.y.a=""
r.si(t.c.a(r.gkJ()))}else if(A.aQ(p)){q=A.k(p)
r.k(new A.E(null,"<"+q))
s=r.y
s.a=""
s.a=q
r.si(t.c.a(r.gko()))}else{r.k(new A.E(null,"<"))
q.T(p)
r.si(t.c.a(r.gbh()))}return!0},
kK(){var s=this,r=s.a,q=r.C()
if(A.aQ(q)){r=s.y
r.a=""
r.a=A.k(q)
s.si(t.c.a(s.gkH()))}else{s.k(new A.E(null,"</"))
r.T(q)
s.si(t.c.a(s.gbh()))}return!0},
kI(){var s,r=this,q=r.dK(),p=r.a,o=p.C()
if(A.a6(o)&&q){r.w=new A.J(r.y.l(0),!1)
r.si(t.c.a(r.gbF()))}else if(o==="/"&&q){r.w=new A.J(r.y.l(0),!1)
r.si(t.c.a(r.gbA()))}else if(o===">"&&q){r.w=new A.J(r.y.l(0),!1)
r.b8()
r.si(t.c.a(r.gD()))}else{s=r.y
if(A.aQ(o))s.a+=A.k(o)
else{s=s.l(0)
r.k(new A.E(null,"</"+s))
p.T(o)
r.si(t.c.a(r.gbh()))}}return!0},
kp(){var s=this,r=s.a,q=r.C()
if(A.a6(q)||q==="/"||q===">"){s.k(new A.E(q==null?new A.a2(""):null,q))
r=t.c
if(s.y.l(0).toLowerCase()==="script")s.si(r.a(s.gbQ()))
else s.si(r.a(s.gbh()))}else if(A.aQ(q)){s.k(new A.E(q==null?new A.a2(""):null,q))
s.y.a+=A.k(q)}else{r.T(q)
s.si(t.c.a(s.gbh()))}return!0},
kv(){var s=this,r=null,q=s.a.C()
if(q==="-"){s.k(new A.E(r,"-"))
s.si(t.c.a(s.gks()))}else if(q==="<"){s.k(new A.E(r,"<"))
s.si(t.c.a(s.geK()))}else if(q==="\x00"){s.k(new A.m(r,r,"invalid-codepoint"))
s.k(new A.E(r,"\ufffd"))}else if(q==null){s.k(new A.m(r,r,"eof-in-script-in-script"))
s.si(t.c.a(s.gD()))}else s.k(new A.E(r,q))
return!0},
kt(){var s=this,r=null,q=s.a.C()
if(q==="-"){s.k(new A.E(r,"-"))
s.si(t.c.a(s.gkq()))}else if(q==="<"){s.k(new A.E(r,"<"))
s.si(t.c.a(s.geK()))}else if(q==="\x00"){s.k(new A.m(r,r,"invalid-codepoint"))
s.k(new A.E(r,"\ufffd"))
s.si(t.c.a(s.gbQ()))}else if(q==null){s.k(new A.m(r,r,"eof-in-script-in-script"))
s.si(t.c.a(s.gD()))}else{s.k(new A.E(r,q))
s.si(t.c.a(s.gbQ()))}return!0},
kr(){var s=this,r=null,q=s.a.C()
if(q==="-")s.k(new A.E(r,"-"))
else if(q==="<"){s.k(new A.E(r,"<"))
s.si(t.c.a(s.geK()))}else if(q===">"){s.k(new A.E(r,">"))
s.si(t.c.a(s.gbR()))}else if(q==="\x00"){s.k(new A.m(r,r,"invalid-codepoint"))
s.k(new A.E(r,"\ufffd"))
s.si(t.c.a(s.gbQ()))}else if(q==null){s.k(new A.m(r,r,"eof-in-script-in-script"))
s.si(t.c.a(s.gD()))}else{s.k(new A.E(r,q))
s.si(t.c.a(s.gbQ()))}return!0},
ku(){var s=this,r=s.a,q=r.C()
if(q==="/"){s.k(new A.E(null,"/"))
s.y.a=""
s.si(t.c.a(s.gkm()))}else{r.T(q)
s.si(t.c.a(s.gbQ()))}return!0},
kn(){var s=this,r=s.a,q=r.C()
if(A.a6(q)||q==="/"||q===">"){s.k(new A.E(q==null?new A.a2(""):null,q))
r=t.c
if(s.y.l(0).toLowerCase()==="script")s.si(r.a(s.gbh()))
else s.si(r.a(s.gbQ()))}else if(A.aQ(q)){s.k(new A.E(q==null?new A.a2(""):null,q))
s.y.a+=A.k(q)}else{r.T(q)
s.si(t.c.a(s.gbQ()))}return!0},
nf(){var s=this,r=null,q=s.a,p=q.C()
if(A.a6(p))q.cc(" \n\r\t\f",!0)
else{q=p==null
if(!q&&A.aQ(p)){s.bV(p)
s.si(t.c.a(s.gbX()))}else if(p===">")s.b8()
else if(p==="/")s.si(t.c.a(s.gbA()))
else if(q){s.k(new A.m(r,r,"expected-attribute-name-but-got-eof"))
s.si(t.c.a(s.gD()))}else if(B.b.F("'\"=<",p)){s.k(new A.m(r,r,"invalid-character-in-attribute-name"))
s.bV(p)
s.si(t.c.a(s.gbX()))}else if(p==="\x00"){s.k(new A.m(r,r,"invalid-codepoint"))
s.bV("\ufffd")
s.si(t.c.a(s.gbX()))}else{s.bV(p)
s.si(t.c.a(s.gbX()))}}return!0},
n8(){var s,r,q,p,o=this,n=null,m=o.a,l=m.C()
if(l==="="){o.si(t.c.a(o.giL()))
s=!0
r=!1}else if(A.aQ(l)){q=o.ax
q.a+=A.k(l)
q.a+=m.cc("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",!0)
s=!1
r=!1}else if(l===">"){s=!0
r=!0}else{if(A.a6(l)){o.si(t.c.a(o.gmT()))
s=!0}else if(l==="/"){o.si(t.c.a(o.gbA()))
s=!0}else if(l==="\x00"){o.k(new A.m(n,n,"invalid-codepoint"))
o.ax.a+="\ufffd"
s=!1}else if(l==null){o.k(new A.m(n,n,"eof-in-attribute-name"))
o.si(t.c.a(o.gD()))
s=!0}else{if(B.b.F("'\"<",l)){o.k(new A.m(n,n,"invalid-character-in-attribute-name"))
o.ax.a+=l}else o.ax.a+=l
s=!1}r=!1}if(s){o.dG(-1)
m=o.ax.a
q=t.E
p=A.ad(new A.I(new A.a9(m.charCodeAt(0)==0?m:m),q.h("i(v.E)").a(A.bN()),q.h("I<v.E,i>")),0,n)
m=o.Q
m.toString
B.a.gu(m).a=p
if(o.as==null)o.seY(A.nD(t.N))
if(o.as.F(0,p))o.k(new A.m(n,n,"duplicate-attribute"))
o.as.p(0,p)
if(r)o.b8()}return!0},
mU(){var s=this,r=null,q=s.a,p=q.C()
if(A.a6(p))q.cc(" \n\r\t\f",!0)
else if(p==="=")s.si(t.c.a(s.giL()))
else if(p===">")s.b8()
else{q=p==null
if(!q&&A.aQ(p)){s.bV(p)
s.si(t.c.a(s.gbX()))}else if(p==="/")s.si(t.c.a(s.gbA()))
else if(p==="\x00"){s.k(new A.m(r,r,"invalid-codepoint"))
s.bV("\ufffd")
s.si(t.c.a(s.gbX()))}else if(q){s.k(new A.m(r,r,"expected-end-of-tag-but-got-eof"))
s.si(t.c.a(s.gD()))}else if(B.b.F("'\"<",p)){s.k(new A.m(r,r,"invalid-character-after-attribute-name"))
s.bV(p)
s.si(t.c.a(s.gbX()))}else{s.bV(p)
s.si(t.c.a(s.gbX()))}}return!0},
ng(){var s=this,r=null,q=s.a,p=q.C()
if(A.a6(p))q.cc(" \n\r\t\f",!0)
else if(p==='"'){s.cu(0)
s.si(t.c.a(s.gn9()))}else if(p==="&"){s.si(t.c.a(s.gdT()))
q.T(p)
s.cu(0)}else if(p==="'"){s.cu(0)
s.si(t.c.a(s.gnb()))}else if(p===">"){s.k(new A.m(r,r,u.A))
s.b8()}else if(p==="\x00"){s.k(new A.m(r,r,"invalid-codepoint"))
s.cu(-1)
s.ay.a+="\ufffd"
s.si(t.c.a(s.gdT()))}else if(p==null){s.k(new A.m(r,r,"expected-attribute-value-but-got-eof"))
s.si(t.c.a(s.gD()))}else if(B.b.F("=<`",p)){s.k(new A.m(r,r,"equals-in-unquoted-attribute-value"))
s.cu(-1)
s.ay.a+=p
s.si(t.c.a(s.gdT()))}else{s.cu(-1)
s.ay.a+=p
s.si(t.c.a(s.gdT()))}return!0},
na(){var s,r=this,q=null,p=r.a,o=p.C()
if(o==='"'){r.ca(-1)
r.dG(0)
r.si(t.c.a(r.giB()))}else if(o==="&")r.dW('"',!0)
else if(o==="\x00"){r.k(new A.m(q,q,"invalid-codepoint"))
r.ay.a+="\ufffd"}else if(o==null){r.k(new A.m(q,q,"eof-in-attribute-value-double-quote"))
r.ca(-1)
r.si(t.c.a(r.gD()))}else{s=r.ay
s.a+=o
s.a+=p.bd('"&')}return!0},
nc(){var s,r=this,q=null,p=r.a,o=p.C()
if(o==="'"){r.ca(-1)
r.dG(0)
r.si(t.c.a(r.giB()))}else if(o==="&")r.dW("'",!0)
else if(o==="\x00"){r.k(new A.m(q,q,"invalid-codepoint"))
r.ay.a+="\ufffd"}else if(o==null){r.k(new A.m(q,q,"eof-in-attribute-value-single-quote"))
r.ca(-1)
r.si(t.c.a(r.gD()))}else{s=r.ay
s.a+=o
s.a+=p.bd("'&")}return!0},
nd(){var s,r=this,q=null,p=r.a,o=p.C()
if(A.a6(o)){r.ca(-1)
r.si(t.c.a(r.gbF()))}else if(o==="&")r.dW(">",!0)
else if(o===">"){r.ca(-1)
r.b8()}else if(o==null){r.k(new A.m(q,q,"eof-in-attribute-value-no-quotes"))
r.ca(-1)
r.si(t.c.a(r.gD()))}else if(B.b.F("\"'=<`",o)){r.k(new A.m(q,q,u.V))
r.ay.a+=o}else if(o==="\x00"){r.k(new A.m(q,q,"invalid-codepoint"))
r.ay.a+="\ufffd"}else{s=r.ay
s.a+=o
s.a+=p.bd("&>\"'=<` \n\r\t\f")}return!0},
mV(){var s=this,r=null,q=s.a,p=q.C()
if(A.a6(p))s.si(t.c.a(s.gbF()))
else if(p===">")s.b8()
else if(p==="/")s.si(t.c.a(s.gbA()))
else if(p==null){s.k(new A.m(r,r,"unexpected-EOF-after-attribute-value"))
q.T(p)
s.si(t.c.a(s.gD()))}else{s.k(new A.m(r,r,u.H))
q.T(p)
s.si(t.c.a(s.gbF()))}return!0},
kQ(){var s=this,r=null,q=s.a,p=q.C()
if(p===">"){t.fn.a(s.w).c=!0
s.b8()}else if(p==null){s.k(new A.m(r,r,"unexpected-EOF-after-solidus-in-tag"))
q.T(p)
s.si(t.c.a(s.gD()))}else{s.k(new A.m(r,r,u.B))
q.T(p)
s.si(t.c.a(s.gbF()))}return!0},
no(){var s=this,r=s.a,q=r.bd(">")
q=A.bp(q,"\x00","\ufffd")
s.k(new A.d4(null,q))
r.C()
s.si(t.c.a(s.gD()))
return!0},
oL(){var s,r,q,p,o,n=this,m=null,l=n.a,k=A.a([l.C()],t.D)
if(B.a.gu(k)==="-"){B.a.p(k,l.C())
if(B.a.gu(k)==="-"){n.w=new A.d4(new A.a2(""),m)
n.si(t.c.a(n.gnG()))
return!0}}else if(B.a.gu(k)==="d"||B.a.gu(k)==="D"){r=0
while(!0){if(!(r<6)){s=!0
break}q=B.bo[r]
p=l.C()
B.a.p(k,p)
if(p!=null)o=!A.ct(q,p,0)
else o=!0
if(o){s=!1
break}++r}if(s){n.w=new A.dV(!0)
n.si(t.c.a(n.gnV()))
return!0}}else{if(B.a.gu(k)==="["){o=n.f
if(o!=null){o=o.d.c
o=o.length!==0&&B.a.gu(o).w!=n.f.d.a}else o=!1}else o=!1
if(o){r=0
while(!0){if(!(r<6)){s=!0
break}q=B.by[r]
B.a.p(k,l.C())
if(B.a.gu(k)!==q){s=!1
break}++r}if(s){n.si(t.c.a(n.gns()))
return!0}}}n.k(new A.m(m,m,"expected-dashes-or-doctype"))
for(;o=k.length,o!==0;){if(0>=o)return A.c(k,-1)
o=k.pop()
if(o!=null)l.y=l.y-o.length}n.si(t.c.a(n.gfl()))
return!0},
nH(){var s,r=this,q=null,p=r.a.C()
if(p==="-")r.si(t.c.a(r.gnE()))
else if(p==="\x00"){r.k(new A.m(q,q,"invalid-codepoint"))
t.g.a(r.w).b.a+="\ufffd"}else if(p===">"){r.k(new A.m(q,q,"incorrect-comment"))
s=r.w
s.toString
r.k(s)
r.si(t.c.a(r.gD()))}else if(p==null){r.k(new A.m(q,q,"eof-in-comment"))
s=r.w
s.toString
r.k(s)
r.si(t.c.a(r.gD()))}else{t.g.a(r.w).b.a+=p
r.si(t.c.a(r.gbZ()))}return!0},
nF(){var s,r,q=this,p=null,o=q.a.C()
if(o==="-")q.si(t.c.a(q.giU()))
else if(o==="\x00"){q.k(new A.m(p,p,"invalid-codepoint"))
t.g.a(q.w).b.a+="-\ufffd"}else if(o===">"){q.k(new A.m(p,p,"incorrect-comment"))
s=q.w
s.toString
q.k(s)
q.si(t.c.a(q.gD()))}else if(o==null){q.k(new A.m(p,p,"eof-in-comment"))
s=q.w
s.toString
q.k(s)
q.si(t.c.a(q.gD()))}else{s=t.g.a(q.w).b
r=s.a+="-"
s.a=r+o
q.si(t.c.a(q.gbZ()))}return!0},
nI(){var s,r=this,q=null,p=r.a,o=p.C()
if(o==="-")r.si(t.c.a(r.giT()))
else if(o==="\x00"){r.k(new A.m(q,q,"invalid-codepoint"))
t.g.a(r.w).b.a+="\ufffd"}else if(o==null){r.k(new A.m(q,q,"eof-in-comment"))
p=r.w
p.toString
r.k(p)
r.si(t.c.a(r.gD()))}else{s=t.g.a(r.w)
s.b.a+=o
p=p.bd("-\x00")
s.b.a+=p}return!0},
nC(){var s,r,q=this,p=null,o=q.a.C()
if(o==="-")q.si(t.c.a(q.giU()))
else if(o==="\x00"){q.k(new A.m(p,p,"invalid-codepoint"))
t.g.a(q.w).b.a+="-\ufffd"
q.si(t.c.a(q.gbZ()))}else if(o==null){q.k(new A.m(p,p,"eof-in-comment-end-dash"))
s=q.w
s.toString
q.k(s)
q.si(t.c.a(q.gD()))}else{s=t.g.a(q.w).b
r=s.a+="-"
s.a=r+o
q.si(t.c.a(q.gbZ()))}return!0},
nD(){var s,r,q=this,p=null,o=q.a.C()
if(o===">"){s=q.w
s.toString
q.k(s)
q.si(t.c.a(q.gD()))}else if(o==="\x00"){q.k(new A.m(p,p,"invalid-codepoint"))
t.g.a(q.w).b.a+="--\ufffd"
q.si(t.c.a(q.gbZ()))}else if(o==="!"){q.k(new A.m(p,p,u.d))
q.si(t.c.a(q.gnA()))}else if(o==="-"){q.k(new A.m(p,p,u.K))
s=t.g.a(q.w)
o.toString
s.b.a+=o}else if(o==null){q.k(new A.m(p,p,"eof-in-comment-double-dash"))
s=q.w
s.toString
q.k(s)
q.si(t.c.a(q.gD()))}else{q.k(new A.m(p,p,"unexpected-char-in-comment"))
s=t.g.a(q.w).b
r=s.a+="--"
s.a=r+o
q.si(t.c.a(q.gbZ()))}return!0},
nB(){var s,r,q=this,p=null,o=q.a.C()
if(o===">"){s=q.w
s.toString
q.k(s)
q.si(t.c.a(q.gD()))}else if(o==="-"){t.g.a(q.w).b.a+="--!"
q.si(t.c.a(q.giT()))}else if(o==="\x00"){q.k(new A.m(p,p,"invalid-codepoint"))
t.g.a(q.w).b.a+="--!\ufffd"
q.si(t.c.a(q.gbZ()))}else if(o==null){q.k(new A.m(p,p,"eof-in-comment-end-bang-state"))
s=q.w
s.toString
q.k(s)
q.si(t.c.a(q.gD()))}else{s=t.g.a(q.w).b
r=s.a+="--!"
s.a=r+o
q.si(t.c.a(q.gbZ()))}return!0},
nW(){var s=this,r=null,q=s.a,p=q.C()
if(A.a6(p))s.si(t.c.a(s.giM()))
else if(p==null){s.k(new A.m(r,r,"expected-doctype-name-but-got-eof"))
q=t.i.a(s.w)
q.e=!1
s.k(q)
s.si(t.c.a(s.gD()))}else{s.k(new A.m(r,r,"need-space-after-doctype"))
q.T(p)
s.si(t.c.a(s.giM()))}return!0},
nh(){var s,r=this,q=null,p=r.a.C()
if(A.a6(p))return!0
else if(p===">"){r.k(new A.m(q,q,u.f))
s=t.i.a(r.w)
s.e=!1
r.k(s)
r.si(t.c.a(r.gD()))}else if(p==="\x00"){r.k(new A.m(q,q,"invalid-codepoint"))
t.i.a(r.w).d="\ufffd"
r.si(t.c.a(r.gfA()))}else if(p==null){r.k(new A.m(q,q,"expected-doctype-name-but-got-eof"))
s=t.i.a(r.w)
s.e=!1
r.k(s)
r.si(t.c.a(r.gD()))}else{t.i.a(r.w).d=p
r.si(t.c.a(r.gfA()))}return!0},
nQ(){var s,r,q,p=this,o=null,n=p.a.C()
if(A.a6(n)){s=t.i.a(p.w)
r=s.d
if(r==null)r=o
else{q=t.E
q=A.ad(new A.I(new A.a9(r),q.h("i(v.E)").a(A.bN()),q.h("I<v.E,i>")),0,o)
r=q}s.d=r
p.si(t.c.a(p.gmW()))}else if(n===">"){s=t.i.a(p.w)
r=s.d
if(r==null)r=o
else{q=t.E
q=A.ad(new A.I(new A.a9(r),q.h("i(v.E)").a(A.bN()),q.h("I<v.E,i>")),0,o)
r=q}s.d=r
r=p.w
r.toString
p.k(r)
p.si(t.c.a(p.gD()))}else if(n==="\x00"){p.k(new A.m(o,o,"invalid-codepoint"))
s=t.i.a(p.w)
s.d=A.k(s.d)+"\ufffd"
p.si(t.c.a(p.gfA()))}else if(n==null){p.k(new A.m(o,o,"eof-in-doctype-name"))
s=t.i.a(p.w)
s.e=!1
r=s.d
if(r==null)r=o
else{q=t.E
q=A.ad(new A.I(new A.a9(r),q.h("i(v.E)").a(A.bN()),q.h("I<v.E,i>")),0,o)
r=q}s.d=r
r=p.w
r.toString
p.k(r)
p.si(t.c.a(p.gD()))}else{s=t.i.a(p.w)
s.d=A.k(s.d)+n}return!0},
mX(){var s,r,q,p,o=this,n=null,m=o.a,l=m.C()
if(A.a6(l))return!0
else if(l===">"){m=o.w
m.toString
o.k(m)
o.si(t.c.a(o.gD()))}else if(l==null){t.i.a(o.w).e=!1
m.T(l)
o.k(new A.m(n,n,"eof-in-doctype"))
m=o.w
m.toString
o.k(m)
o.si(t.c.a(o.gD()))}else{if(l==="p"||l==="P"){r=0
while(!0){if(!(r<5)){s=!0
break}q=B.bd[r]
l=m.C()
if(l!=null)p=!A.ct(q,l,0)
else p=!0
if(p){s=!1
break}++r}if(s){o.si(t.c.a(o.gmZ()))
return!0}}else if(l==="s"||l==="S"){r=0
while(!0){if(!(r<5)){s=!0
break}q=B.bs[r]
l=m.C()
if(l!=null)p=!A.ct(q,l,0)
else p=!0
if(p){s=!1
break}++r}if(s){o.si(t.c.a(o.gn1()))
return!0}}m.T(l)
m=t.z
m=A.y(["data",l],m,m)
o.k(new A.m(m,n,u.S))
t.i.a(o.w).e=!1
o.si(t.c.a(o.gcA()))}return!0},
n_(){var s=this,r=null,q=s.a,p=q.C()
if(A.a6(p))s.si(t.c.a(s.gfj()))
else if(p==="'"||p==='"'){s.k(new A.m(r,r,"unexpected-char-in-doctype"))
q.T(p)
s.si(t.c.a(s.gfj()))}else if(p==null){s.k(new A.m(r,r,"eof-in-doctype"))
q=t.i.a(s.w)
q.e=!1
s.k(q)
s.si(t.c.a(s.gD()))}else{q.T(p)
s.si(t.c.a(s.gfj()))}return!0},
ni(){var s,r=this,q=null,p=r.a.C()
if(A.a6(p))return!0
else if(p==='"'){t.i.a(r.w).b=""
r.si(t.c.a(r.gnR()))}else if(p==="'"){t.i.a(r.w).b=""
r.si(t.c.a(r.gnT()))}else if(p===">"){r.k(new A.m(q,q,"unexpected-end-of-doctype"))
s=t.i.a(r.w)
s.e=!1
r.k(s)
r.si(t.c.a(r.gD()))}else if(p==null){r.k(new A.m(q,q,"eof-in-doctype"))
s=t.i.a(r.w)
s.e=!1
r.k(s)
r.si(t.c.a(r.gD()))}else{r.k(new A.m(q,q,"unexpected-char-in-doctype"))
t.i.a(r.w).e=!1
r.si(t.c.a(r.gcA()))}return!0},
nS(){var s,r=this,q=null,p=r.a.C()
if(p==='"')r.si(t.c.a(r.giC()))
else if(p==="\x00"){r.k(new A.m(q,q,"invalid-codepoint"))
s=t.i.a(r.w)
s.b=A.k(s.b)+"\ufffd"}else if(p===">"){r.k(new A.m(q,q,"unexpected-end-of-doctype"))
s=t.i.a(r.w)
s.e=!1
r.k(s)
r.si(t.c.a(r.gD()))}else if(p==null){r.k(new A.m(q,q,"eof-in-doctype"))
s=t.i.a(r.w)
s.e=!1
r.k(s)
r.si(t.c.a(r.gD()))}else{s=t.i.a(r.w)
s.b=A.k(s.b)+p}return!0},
nU(){var s,r=this,q=null,p=r.a.C()
if(p==="'")r.si(t.c.a(r.giC()))
else if(p==="\x00"){r.k(new A.m(q,q,"invalid-codepoint"))
s=t.i.a(r.w)
s.b=A.k(s.b)+"\ufffd"}else if(p===">"){r.k(new A.m(q,q,"unexpected-end-of-doctype"))
s=t.i.a(r.w)
s.e=!1
r.k(s)
r.si(t.c.a(r.gD()))}else if(p==null){r.k(new A.m(q,q,"eof-in-doctype"))
s=t.i.a(r.w)
s.e=!1
r.k(s)
r.si(t.c.a(r.gD()))}else{s=t.i.a(r.w)
s.b=A.k(s.b)+p}return!0},
mY(){var s,r=this,q=null,p="unexpected-char-in-doctype",o=r.a.C()
if(A.a6(o))r.si(t.c.a(r.gnk()))
else if(o===">"){s=r.w
s.toString
r.k(s)
r.si(t.c.a(r.gD()))}else if(o==='"'){r.k(new A.m(q,q,p))
t.i.a(r.w).c=""
r.si(t.c.a(r.gfB()))}else if(o==="'"){r.k(new A.m(q,q,p))
t.i.a(r.w).c=""
r.si(t.c.a(r.gfC()))}else if(o==null){r.k(new A.m(q,q,"eof-in-doctype"))
s=t.i.a(r.w)
s.e=!1
r.k(s)
r.si(t.c.a(r.gD()))}else{r.k(new A.m(q,q,p))
t.i.a(r.w).e=!1
r.si(t.c.a(r.gcA()))}return!0},
nl(){var s,r=this,q=null,p=r.a.C()
if(A.a6(p))return!0
else if(p===">"){s=r.w
s.toString
r.k(s)
r.si(t.c.a(r.gD()))}else if(p==='"'){t.i.a(r.w).c=""
r.si(t.c.a(r.gfB()))}else if(p==="'"){t.i.a(r.w).c=""
r.si(t.c.a(r.gfC()))}else if(p==null){r.k(new A.m(q,q,"eof-in-doctype"))
s=t.i.a(r.w)
s.e=!1
r.k(s)
r.si(t.c.a(r.gD()))}else{r.k(new A.m(q,q,"unexpected-char-in-doctype"))
t.i.a(r.w).e=!1
r.si(t.c.a(r.gcA()))}return!0},
n2(){var s=this,r=null,q=s.a,p=q.C()
if(A.a6(p))s.si(t.c.a(s.gfk()))
else if(p==="'"||p==='"'){s.k(new A.m(r,r,"unexpected-char-in-doctype"))
q.T(p)
s.si(t.c.a(s.gfk()))}else if(p==null){s.k(new A.m(r,r,"eof-in-doctype"))
q=t.i.a(s.w)
q.e=!1
s.k(q)
s.si(t.c.a(s.gD()))}else{q.T(p)
s.si(t.c.a(s.gfk()))}return!0},
nj(){var s,r=this,q=null,p="unexpected-char-in-doctype",o=r.a.C()
if(A.a6(o))return!0
else if(o==='"'){t.i.a(r.w).c=""
r.si(t.c.a(r.gfB()))}else if(o==="'"){t.i.a(r.w).c=""
r.si(t.c.a(r.gfC()))}else if(o===">"){r.k(new A.m(q,q,p))
s=t.i.a(r.w)
s.e=!1
r.k(s)
r.si(t.c.a(r.gD()))}else if(o==null){r.k(new A.m(q,q,"eof-in-doctype"))
s=t.i.a(r.w)
s.e=!1
r.k(s)
r.si(t.c.a(r.gD()))}else{r.k(new A.m(q,q,p))
t.i.a(r.w).e=!1
r.si(t.c.a(r.gcA()))}return!0},
nX(){var s,r=this,q=null,p=r.a.C()
if(p==='"')r.si(t.c.a(r.giD()))
else if(p==="\x00"){r.k(new A.m(q,q,"invalid-codepoint"))
s=t.i.a(r.w)
s.c=A.k(s.c)+"\ufffd"}else if(p===">"){r.k(new A.m(q,q,"unexpected-end-of-doctype"))
s=t.i.a(r.w)
s.e=!1
r.k(s)
r.si(t.c.a(r.gD()))}else if(p==null){r.k(new A.m(q,q,"eof-in-doctype"))
s=t.i.a(r.w)
s.e=!1
r.k(s)
r.si(t.c.a(r.gD()))}else{s=t.i.a(r.w)
s.c=A.k(s.c)+p}return!0},
nY(){var s,r=this,q=null,p=r.a.C()
if(p==="'")r.si(t.c.a(r.giD()))
else if(p==="\x00"){r.k(new A.m(q,q,"invalid-codepoint"))
s=t.i.a(r.w)
s.c=A.k(s.c)+"\ufffd"}else if(p===">"){r.k(new A.m(q,q,"unexpected-end-of-doctype"))
s=t.i.a(r.w)
s.e=!1
r.k(s)
r.si(t.c.a(r.gD()))}else if(p==null){r.k(new A.m(q,q,"eof-in-doctype"))
s=t.i.a(r.w)
s.e=!1
r.k(s)
r.si(t.c.a(r.gD()))}else{s=t.i.a(r.w)
s.c=A.k(s.c)+p}return!0},
n0(){var s,r=this,q=null,p=r.a.C()
if(A.a6(p))return!0
else if(p===">"){s=r.w
s.toString
r.k(s)
r.si(t.c.a(r.gD()))}else if(p==null){r.k(new A.m(q,q,"eof-in-doctype"))
s=t.i.a(r.w)
s.e=!1
r.k(s)
r.si(t.c.a(r.gD()))}else{r.k(new A.m(q,q,"unexpected-char-in-doctype"))
r.si(t.c.a(r.gcA()))}return!0},
np(){var s=this,r=s.a,q=r.C()
if(q===">"){r=s.w
r.toString
s.k(r)
s.si(t.c.a(s.gD()))}else if(q==null){r.T(q)
r=s.w
r.toString
s.k(r)
s.si(t.c.a(s.gD()))}return!0},
nt(){var s,r,q,p=this,o=A.a([],t.s)
for(s=p.a,r=0;!0;){q=s.C()
if(q==null)break
if(q==="\x00"){p.k(new A.m(null,null,"invalid-codepoint"))
q="\ufffd"}B.a.p(o,q)
if(q==="]"&&r<2)++r
else{if(q===">"&&r===2){if(0>=o.length)return A.c(o,-1)
o.pop()
if(0>=o.length)return A.c(o,-1)
o.pop()
if(0>=o.length)return A.c(o,-1)
o.pop()
break}r=0}}if(o.length!==0){s=B.a.aX(o)
p.k(new A.E(null,s))}p.si(t.c.a(p.gD()))
return!0},
si(a){this.x=t.c.a(a)},
seZ(a,b){this.Q=t.jq.a(b)},
seY(a){this.as=t.oA.a(a)},
smD(a){this.at=t.nU.a(a)},
$iU:1,
lk(a){return this.glj(this).$0()}}
A.jI.prototype={
$1(a){return B.b.Z(A.aw(a),this.a)},
$S:6}
A.jJ.prototype={
$0(){var s=this.a.b
s===$&&A.b("value")
return s},
$S:5}
A.fq.prototype={
p(a,b){var s,r,q,p,o,n,m,l,k,j=this,i="http://www.w3.org/1999/xhtml"
t.mV.a(b)
if(b!=null)for(s=A.A(j).h("X<v.E>"),r=new A.X(j,s),r=new A.L(r,r.gm(r),s.h("L<D.E>")),q=b.x,p=b.w,s=s.h("D.E"),o=0;r.n();){n=r.d
if(n==null)n=s.a(n)
if(n==null)break
m=n.w
if(m==null)m=i
l=n.x
k=p==null?i:p
if(k===m&&q==l&&A.t6(n.b,b.b))++o
if(o===3){B.a.a_(j.a,n)
break}}j.bT(0,b)}}
A.kD.prototype={
bs(a){var s=this
B.a.bY(s.c)
s.d.sm(0,0)
s.f=s.e=null
s.r=!1
s.b=A.nt()},
a0(a,b){var s,r,q,p,o,n,m,l,k,j,i,h="We should never reach this point",g="http://www.w3.org/1999/xhtml",f=a instanceof A.ah
if(b!=null)switch(b){case"button":s=B.T
r=B.b8
q=!1
break
case"list":s=B.T
r=B.bf
q=!1
break
case"table":s=B.bD
r=B.W
q=!1
break
case"select":s=B.bz
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
b7(a){return this.a0(a,null)},
aH(){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.d
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
p=s[q]}for(r=A.A(g).h("aX.E"),o=t.K,n=t.N;!0;){++q
if(!(q>=0&&q<s.length))return A.c(s,q)
p=s[q]
m=p.x
l=p.w
k=A.hc(p.b,o,n)
j=new A.ce(k,l,m,!1)
j.a=p.e
i=h.O(j)
B.a.v(s,q,r.a(i))
if(g.gm(g)===0)A.N(A.an())
if(i===g.j(0,g.gm(g)-1))break}},
fn(){var s=this.d,r=s.dl(s)
while(!0){if(!(!s.gag(s)&&r!=null))break
r=s.dl(s)}},
j7(a){var s,r,q
for(s=this.d,r=A.A(s).h("X<v.E>"),s=new A.X(s,r),s=new A.L(s,s.gm(s),r.h("L<D.E>")),r=r.h("D.E");s.n();){q=s.d
if(q==null)q=r.a(q)
if(q==null)break
else if(q.x==a)return q}return null},
cE(a,b){var s=b.gal(b),r=A.ns(a.gaE(a))
r.e=a.a
s.p(0,r)},
j_(a,b){var s,r=b.b,q=b.w
if(q==null)q=this.a
this.b===$&&A.b("document")
s=A.mj(r,q===""?null:q)
s.sd3(0,b.e)
s.e=b.a
return s},
O(a){if(this.r)return this.oA(a)
return this.jm(a)},
jm(a){var s,r,q=a.b,p=a.w
if(p==null)p=this.a
this.b===$&&A.b("document")
s=A.mj(q,p===""?null:p)
s.sd3(0,a.e)
s.e=a.a
r=this.c
J.pE(B.a.gu(r)).p(0,s)
B.a.p(r,s)
return s},
oA(a){var s,r,q=this,p=q.j_(0,a),o=q.c
if(!B.a.F(B.V,B.a.gu(o).x))return q.jm(a)
else{s=q.eH()
r=s[1]
if(r==null){r=s[0]
r.gal(r).p(0,p)}else s[0].oz(0,p,r)
B.a.p(o,p)}return p},
c1(a,b){var s,r=this.c,q=B.a.gu(r)
if(this.r)r=!B.a.F(B.V,B.a.gu(r).x)
else r=!0
if(r)A.nY(q,a,b,null)
else{s=this.eH()
r=s[0]
r.toString
A.nY(r,a,b,t.mV.a(s[1]))}},
eH(){var s,r,q,p,o=this.c,n=A.w(o).h("X<1>"),m=new A.X(o,n)
m=new A.L(m,m.gm(m),n.h("L<D.E>"))
n=n.h("D.E")
while(!0){if(!m.n()){s=null
break}r=m.d
s=r==null?n.a(r):r
if(s.x==="table")break}if(s!=null){q=s.a
if(q!=null)p=s
else{n=B.a.ak(o,s)-1
if(!(n>=0&&n<o.length))return A.c(o,n)
q=o[n]
p=null}}else{if(0>=o.length)return A.c(o,0)
q=o[0]
p=null}return A.a([q,p],t.hg)},
c4(a){var s=this.c,r=B.a.gu(s).x
if(r!=a&&B.a.F(B.U,r)){if(0>=s.length)return A.c(s,-1)
s.pop()
this.c4(a)}},
cm(){return this.c4(null)},
sos(a){this.e=t.e1.a(a)},
sjj(a){this.f=t.mV.a(a)}}
A.o.prototype={
gW(a){return 37*J.aH(this.a)+J.aH(this.b)},
V(a,b){if(b==null)return!1
return b instanceof A.o&&b.a==this.a&&b.b==this.b}}
A.lW.prototype={
$2(a,b){var s,r,q,p,o,n,m,l,k,j=new A.a2(""),i="%("+A.k(a)+")"
for(s=this.a,r=i.length,q=J.bo(b),p=0,o="";n=s.a,m=B.b.aR(n,i,p),m>=0;){j.a=o+B.b.B(n,p,m)
m+=r
l=m
while(!0){o=s.a
if(!(l<o.length))return A.c(o,l)
if(!A.m5(o[l]))break;++l}if(l>m){k=A.cr(B.b.B(s.a,m,l),null)
m=l}else k=0
o=s.a
if(!(m<o.length))return A.c(o,m)
o=o[m]
switch(o){case"s":o=j.a+=A.k(b)
break
case"d":o=j.a+=A.p9(q.l(b),k)
break
case"x":o=j.a+=A.p9(B.e.pI(A.a0(b),16),k)
break
default:throw A.d(A.T("formatStr does not support format character "+o))}p=m+1}r=j.a=o+B.b.B(n,p,n.length)
s.a=r.charCodeAt(0)==0?r:r},
$S:18}
A.br.prototype={
l(a){var s=this.c6(),r=this.r.b
r===$&&A.b("name")
return s+"("+r+", runTime: "+A.k(this.a)+"s)"},
c6(){var s=this.eT(0),r=A.ap("^Instance of '(.*?)'$").fN(s).b
if(1>=r.length)return A.c(r,1)
r=r[1]
r.toString
return r},
d4(){this.w=this.r.t()
this.dh(0)},
fM(){this.dh(1)},
d5(a){},
ds(){var s=this.w
s===$&&A.b("startingMobject")
return A.a([this.r,s],t.r)},
h7(){var s,r,q,p=A.a([],t.Z)
for(s=this.ds(),r=s.length,q=0;q<s.length;s.length===r||(0,A.e)(s),++q)p.push(s[q].dv())
s=t.oS
return A.h(new A.au(p,s),!0,s.h("j.E"))},
cl(a){var s,r,q
for(s=this.k7(),r=s.length,q=0;q<s.length;s.length===r||(0,A.e)(s),++q)s[q].h4(a)},
k7(){var s,r,q,p,o=A.a([],t.r)
for(s=this.ds(),r=s.length,q=0;q<s.length;s.length===r||(0,A.e)(s),++q){p=s[q]
o.push(p)}return o},
dh(a){a=Math.min(1,Math.max(a,0))
this.oB(this.b.$1(a))},
oB(a){var s,r,q,p,o,n=this.h7()
for(s=A.K(n.length,0,1),r=s.length,q=this.c,p=0;p<s.length;s.length===r||(0,A.e)(s),++p){o=s[p]
this.jr(B.a.j(n,o),Math.min(1,Math.max(a*((n.length-1)*q+1)-A.a0(o)*q,0)))}},
jr(a,b){t.a.a(a)}}
A.fy.prototype={
giG(){var s=this.y
s===$&&A.b("animationsTiming")
return s},
lG(a,b,c,d,e){var s,r,q=A.a([],t.r)
for(s=this.x,r=0;r<5;++r)q.push(s[r].r)
this.r.aW(t.a.a(A.pk(q,t.j)))
this.oy()},
ds(){var s=t.ek.a(this.r).d
s===$&&A.b("submobjects")
return s},
d4(){var s,r
for(s=this.x,r=0;r<5;++r)s[r].d4()},
fM(){var s,r
for(s=this.x,r=0;r<5;++r)s[r].fM()},
d5(a){var s,r
for(s=this.x,r=0;r<5;++r)s[r].d5(a)},
cl(a){var s,r
for(s=this.x,r=0;r<5;++r)s[r].cl(a)},
oy(){var s,r,q,p,o=this
o.slU(t.dq.a(o.k9()))
s=A.a([],t.n)
for(r=o.giG(),q=r.length,p=0;p<r.length;r.length===q||(0,A.e)(r),++p)s.push(r[p].c)
s=A.co(B.a.ea(s,0,B.F,t.W))
o.z=s
if(o.a===0)o.a=s},
k9(){var s,r,q,p,o,n,m,l,k=A.a([],t.bB)
for(s=this.x,r=t.oM,q=this.c,p=1-q,o=0,n=0;n<5;++n){m=s[n]
l=o+m.a
B.a.p(k,new A.cP(m,o,l,r))
o=o*p+l*q}return k},
dh(a){var s,r,q,p,o,n,m,l=this.z
l===$&&A.b("maxEndTime")
s=a*l
for(l=this.giG(),r=l.length,q=0;q<l.length;l.length===r||(0,A.e)(l),++q){p=l[q]
o=p.b
n=p.c-o
m=n!==0?Math.min(1,Math.max((s-o)/n,0)):0
p.a.dh(m)}},
slU(a){this.y=t.dq.a(a)}}
A.hT.prototype={
ox(){if(this.as!=null)return
this.soU(A.pb())},
d4(){var s=this,r=s.x
r===$&&A.b("targetMobject")
s.x=r
r=r.t()
s.y=r
s.r.fh(r)
s.lp()},
d5(a){this.lq(a)},
ds(){var s,r,q=this,p=q.w
p===$&&A.b("startingMobject")
s=q.x
s===$&&A.b("targetMobject")
r=q.y
r===$&&A.b("targetCopy")
return A.a([q.r,p,s,r],t.r)},
h7(){var s,r,q=A.a([],t.Z),p=this.w
p===$&&A.b("startingMobject")
s=this.y
s===$&&A.b("targetCopy")
s=[this.r,p,s]
r=0
for(;r<3;++r)q.push(s[r].dv())
p=t.oS
return A.h(new A.au(q,p),!0,p.h("j.E"))},
jr(a,b){var s,r,q,p,o,n
t.a.a(a)
s=J.Y(a)
r=s.j(a,0)
q=s.j(a,1)
s=s.j(a,2)
p=this.as
o=t.j
o.a(q)
o.a(s)
t.lX.a(p)
n=p==null?A.pb():p
p=q.r
p===$&&A.b("points")
o=s.r
o===$&&A.b("points")
r.saJ(t.y.a(n.$3(p,o,b)))
r.fQ(q,s,b)},
soU(a){this.as=t.lX.a(a)}}
A.j3.prototype={
fG(a){var s,r,q,p
t.a.a(a)
s=new A.j4()
r=A.a([],t.r)
for(q=a.length,p=0;p<a.length;a.length===q||(0,A.e)(a),++p)B.a.N(r,s.$1(a[p]))
return A.pk(r,t.j)},
fZ(a){var s,r,q,p,o="renderer"
for(s=this.fG(t.a.a(a)),r=A.w(s).h("X<1>"),s=new A.X(s,r),s=new A.L(s,s.gm(s),r.h("L<D.E>")),r=r.h("D.E");s.n();){q=s.d
if(q==null)q=r.a(q)
p=this.r
if(q instanceof A.R){p===$&&A.b("display")
p=p.a
p===$&&A.b(o)
p.pq(q)}else{p===$&&A.b("display")
p.a===$&&A.b(o)}}},
jT(a,b){t.y.a(b)
return!B.a.cC(b,new A.j5())?A.a([B.d],t.l):b}}
A.j4.prototype={
$1(a){return a.bN()},
$S:38}
A.j5.prototype={
$1(a){t.V.a(a)
return isFinite(a.a)&&isFinite(a.b)&&isFinite(a.c)},
$S:39}
A.dH.prototype={
iO(a){var s
this.b=a
s=this.d
B.a9.spT(s,1280)
B.a9.sbo(s,720)},
dS(a){return a},
eC(a,b){var s,r,q=this.b
q===$&&A.b("camera")
s=q.c
r=A.iI(a,0,1280,-s/2,s/2)
q=q.d
return new A.f(r,A.iI(b,720,0,-q/2,q/2),0).J(0,B.d)}}
A.fp.prototype={
dj(){var s=0,r=A.cY(t.W),q,p=this,o,n,m
var $async$dj=A.d_(function(a,b){if(a===1)return A.cV(b,r)
while(true)switch(s){case 0:m=window
m.toString
s=3
return A.c1(B.e5.gn6(m),$async$dj)
case 3:o=b
m=p.f
if(m===0){p.f=o
m=o}n=o-m
p.f=m+n
q=n/1000
s=1
break
case 1:return A.cW(q,r)}})
return A.cX($async$dj,r)},
eE(a){var s,r,q,p
t.n8.a(a)
s=this.d.getBoundingClientRect()
r=s.left
r.toString
q=s.right
q.toString
this.b===$&&A.b("camera")
p=A.iI(a.a,r,q,0,1280)
q=s.top
q.toString
r=s.bottom
r.toString
return new A.f(p,A.iI(a.b,q,r,0,720),0)},
dU(){var s=this,r=s.d,q=t.eX,p=q.h("~(1)?"),o=p.a(new A.iM(s))
t.jE.a(null)
q=q.c
B.a.N(s.r,A.a([A.l6(r,"mousemove",o,!1,q),A.l6(r,"mousedown",p.a(new A.iN(s)),!1,q),A.l6(r,"mouseup",p.a(new A.iO(s)),!1,q)],t.dw))},
pJ(){var s,r,q
for(s=this.r,r=s.length,q=0;q<s.length;s.length===r||(0,A.e)(s),++q)s[q].nr()}}
A.iM.prototype={
$1(a){var s,r,q,p
t.gD.a(a)
s=this.a
r=s.Q
s.as=new A.f(r.a,r.b,r.c)
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.eE(new A.cM(r,q,t.n8))
q=s.eC(p.a,p.b)
s.Q=q
q.M(0,s.as)
q=s.Q
$.dG().dY(new A.eo(q,B.G,"MouseMovedEvent"))
if(s.w){r=s.y=s.Q
s.x.M(0,r)
$.dG().dY(new A.c9(r,B.C,"MouseDraggedEvent"))}},
$S:12}
A.iN.prototype={
$1(a){var s,r,q,p,o
t.gD.a(a)
s=this.a
r=s.Q
s.as=new A.f(r.a,r.b,r.c)
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.eE(new A.cM(r,q,t.n8))
s.Q=s.eC(p.a,p.b)
q=a.button
q.toString
s.z=A.mw(q)
q=s.Q
$.dG().dY(new A.ca(q,B.B,"MousePressedEvent"))
s.w=!0
q=s.Q
r=q.a
o=q.b
q=q.c
s.x=new A.f(r,o,q)
s.y=new A.f(r,o,q)},
$S:12}
A.iO.prototype={
$1(a){var s,r,q,p
t.gD.a(a)
s=this.a
r=s.Q
s.as=new A.f(r.a,r.b,r.c)
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.eE(new A.cM(r,q,t.n8))
s.Q=s.eC(p.a,p.b)
q=a.button
q.toString
s.z=A.mw(q)
q=s.Q
$.dG().dY(new A.cb(q,B.x,"MouseReleasedEvent"))
s.w=!1},
$S:12}
A.fH.prototype={}
A.di.prototype={
t(){return A.mx(this)},
mQ(){var s,r,q,p=this,o=t.b1,n=A.a([],o),m=p.jf?-1:1,l=p.e6
l.toString
s=p.jc
s=A.lN(p.au+m*s/2,l,s).aZ(0)
l=s.length
r=p.b0
q=0
for(;q<s.length;s.length===l||(0,A.e)(s),++q)n.push(p.he(s[q],r))
p.spG(n)
o=A.a([],o)
for(n=p.jd,l=n.length,r*=p.je,q=0;q<n.length;n.length===l||(0,A.e)(n),++q)o.push(p.he(n[q],r))
p.snm(o)
o=p.fJ
o.toString
o=A.h(o,!0,t.j)
n=p.da
n.toString
B.a.N(o,n)
p.aW(t.a.a(o))},
he(a,b){var s,r=this,q=B.k.A(0,b),p=A.mr(0,B.c,B.p.A(0,b),null,q)
p.h_(0,r.aN().M(0,r.aO()).d1())
p.aL(r.fU(a))
p.ae(r.h9())
p.cQ(J.Z(r.bx(),0))
q=J.aG(r.by(!1))
s=r.w
p.l_(q,s)
return p},
fU(a){var s=this,r=A.iI(a,s.c0,s.au,0,1)
return A.iG(s.aO(),s.aN(),r,t.V)},
jE(a){var s,r=this,q=r.aO(),p=r.aN(),o=p.M(0,q),n=o.bv(0,Math.sqrt(o.b1()))
o=n.j5(a.M(0,q))
s=n.j5(p.M(0,q))
return A.iG(r.c0,r.au,o/s,t.W)},
spG(a){this.fJ=t.gv.a(a)},
snm(a){this.da=t.gv.a(a)}}
A.kd.prototype={
$1(a){return t.F.a(a).t()},
$S:23}
A.ke.prototype={
$1(a){return t.F.a(a).t()},
$S:23}
A.fQ.prototype={}
A.dP.prototype={
lH(a,b,c,d,e,f,g,h){var s,r=this
r.be=r.iZ(e,d,r.e3.bL(r.gj3()))
s=r.iZ(h,g,r.e4.bL(r.gj4()))
r.bH=s
s.ew(0,-1.5707963267948966,B.d,B.n)
r.e5=A.i1(A.a([r.be,r.bH],t.hJ))
r.aW(t.a.a(A.a([r.be,r.bH],t.r)))
r.ao(r.e1)},
iZ(a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=B.a.ba(A.a([a4,this.e2,this.gj2()],t.iX),new A.j0()),a1=a0.a
if(a1==null)a1=B.ab
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
if(h==null)h=B.k
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
q=new A.di(a2,a3,s,r,q,p,o,n,m===!0,l,k,j,i,h,g,f,c,b!==!1,e,d,a,a,0,a,B.j,B.z,0.35,B.n,A.aN(a,0,B.c,a,0),a,a,4,0,!1,0.01,!1,0.000001,4,a,a,a,B.c,$,a,$,$,$)
q.am(B.c,a,a)
q.ae(a1)
d=Math.max(e,d)
q.fx=d
if(f)q.au=q.au+d/2
q.a3=B.j.A(0,s).A(0,a2)
a1=B.j.A(0,s).A(0,q.au)
q.a8=a1
q.cK(q.a3,a1)
q.ao(q.fU(j).A(0,-1))
if(q.e6==null)q.e6=p*B.h.fm(a2/p)
if(f)q.mR(q.fx)
if(r)q.mQ()
a1=a0.cy
q.hl(a1==null?4:a1)
return q},
b6(a){var s,r,q,p,o,n,m,l,k="getStart",j=this.be
j===$&&A.b("xAxis")
s=j.fU(0)
r=new A.f(s.a,s.b,s.c)
j=A.a([a.a,a.b,a.c],t.n)
q=this.e5
q===$&&A.b("axes")
q=q.d
q===$&&A.b("submobjects")
q=new A.au(A.a([j,q],t.bo),t.c2)
q=q.gH(q)
j=t.f7
for(;q.n();){p=q.b
if(p==null)p=A.N(A.av("No element"))
if(1>=p.length)return A.c(p,1)
o=j.a(p[1])
n=o.c0
m=(A.co(p[0])-n)/(o.au-n)+0
n=o.id
if(n!=null){n.aB(k)
n=n.r
n===$&&A.b("points")
n=J.aG(n)}else n=o.cX()
l=o.k1
if(l!=null){l.aB(k)
l=l.r
l===$&&A.b("points")
l=J.aG(l)}else l=o.cW()
r=r.J(0,n.A(0,1-m).J(0,l.A(0,m)).M(0,s))}return r},
jD(a){var s,r=this.be
r===$&&A.b("xAxis")
s=r.jE(a)
r=this.bH
r===$&&A.b("yAxis")
return new A.f(s,r.jE(a),0)},
hA(a){var s=this,r=a.be
r===$&&A.b("xAxis")
s.be=A.mx(r)
r=a.bH
r===$&&A.b("yAxis")
r=A.mx(r)
s.bH=r
s.e5=A.i1(A.a([s.be,r],t.hJ))},
t(){return A.pQ(this)},
gj2(){return B.P},
gj3(){return B.r},
gj4(){return B.O}}
A.j0.prototype={
$2(a,b){var s=t.fy
return s.a(a).bL(s.a(b))},
$S:42}
A.es.prototype={
t(){return A.et(this)},
ow(){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(h.e7==null){s=h.fK
r=t.O
q=A.a([],r)
p=A.a([],r)
o=s.b
r=J.F(o==null?A.a([],r):o)
for(;r.n();){o=r.gq()
n=o.d
p.push(new A.P(o.a,o.b,o.c,n*0.5))}h.e7=new A.ci(q,p,s.c*0.5,s.d,s.e*0.5)}s=h.be
s===$&&A.b("xAxis")
r=h.bH
r===$&&A.b("yAxis")
q=h.jb
m=h.hc(s,r,h.jg,q)
l=h.hc(h.bH,h.be,h.jh,q)
q=t.F
r=A.h(m[0],!0,q)
B.a.N(r,l[0])
q=A.h(m[1],!0,q)
B.a.N(q,l[1])
k=[r,q]
q=t.g4
h.sm3(q.a(k[0]))
h.sm4(q.a(k[1]))
q=h.fH
q===$&&A.b("backgroundLines")
j=A.i1(q)
j.eO(h.fK)
q=h.fI
q===$&&A.b("fadedLines")
i=A.i1(q)
q=h.e7
q.toString
i.eO(q)
h.mS(A.a([j,i],t.r))},
hc(a,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="getStart",e=a.aO(),d=A.mr(0,B.c,a.aN(),null,e),c=1+a2,b=1/c*a1
e=t.b1
s=A.a([],e)
r=A.a([],e)
e=a0.c0
q=[A.lN(a0.au,0,b).aZ(0),A.lN(e,0,-b).aZ(0)]
for(p=t.W,o=0;o<2;++o)for(n=A.fl(q[o],p),m=n.length,l=0;l<n.length;n.length===m||(0,A.e)(n),++l){k=n[l]
j=A.nB(d)
i=(k.b-e)/(a0.au-e)+0
h=a0.id
if(h!=null){h.aB(f)
h=h.r
h===$&&A.b("points")
h=J.aG(h)}else h=a0.cX()
g=a0.k1
if(g!=null){g.aB(f)
g=g.r
g===$&&A.b("points")
g=J.aG(g)}else g=a0.cW()
j.ao(h.A(0,1-i).J(0,g.A(0,i)))
if(B.e.a6(k.a,c)===0)B.a.p(s,j)
else B.a.p(r,j)}return A.a([s,r],t.km)},
sm3(a){this.fH=t.g4.a(a)},
sm4(a){this.fI=t.g4.a(a)},
gj2(){return this.da},
gj3(){return this.oi},
gj4(){return this.oj}}
A.aI.prototype={
bL(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.a
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
A.eK.prototype={
k0(a,b){var s,r
if(a==null)s=null
else s=a
if(s==null)s=B.m
if(b==null)r=null
else r=b
if(r==null)r=B.m
return A.aN(B.m,this.e,s,r,this.c)},
pU(a){return this.k0(a,null)},
pV(a){return this.k0(null,a)}}
A.hR.prototype={
l(a){return"TipSide."+this.b}}
A.eL.prototype={
t(){return A.qT(this)},
iy(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1="points"
if(a3==null)a3=a.ha()
s=a.h9()
r=A.bX(a.go)
q=r.a
q=q==null?a0:J.cu(q)
if(q!==!1)r=r.pU(s.t())
q=r.b
q=q==null?a0:J.cu(q)
if(q!==!1)r=r.pV(s.t())
p=A.tQ(3.141592653589793,B.n).aZ(0)
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
h=A.to(3,new A.f(j*l+e*h+g*k-f*q,g*l+e*q+f*h-j*k,f*l+e*k+j*q-g*h))
d=new A.dM(4,0,!1,0.01,!1,0.000001,4,a0,a0,a0,B.c,$,a0,$,$,$)
d.am(B.c,a0,a0)
d.eV(h,B.c)
d.h_(0,3.141592653589793)
d.eP(a3,!0)
d.dA(a3,!0)
d.jv(a)
d.eO(r)
q=a2===B.a1
c=q?a.aO():a.aN()
k=a.r
if(q){k===$&&A.b(a1)
b=J.Z(k,1)}else{k===$&&A.b(a1)
i=J.Y(k)
b=i.j(k,i.gm(k)-2)}k=b.M(0,c).d1()
i=d.r
i===$&&A.b(a1)
d.h_(0,-k-J.aG(i).M(0,d.em(0.5)).d1()-3.141592653589793)
d.ao(c.M(0,J.aG(d.r)))
a.pr(d,a2)
if(q)a.id=d
else a.k1=d
a.aW(t.a.a(A.a([d],t.r)))
return d},
ff(a){return this.iy(a,null)},
mR(a){return this.iy(B.a2,a)},
pr(a,b){var s=this
if(Math.sqrt(s.aO().M(0,s.aN()).b1())===0)return
if(b===B.a1)s.cK(a.em(0.5),s.aN())
else s.cK(s.aO(),a.em(0.5))},
c7(a,b){this.cT(a,!1)
this.cR(B.m,!1)
this.eU(a,!0)},
ae(a){return this.c7(a,!0)},
ha(){return this.fx},
aN(){var s=this.k1
if(s!=null){s.aB("getStart")
s=s.r
s===$&&A.b("points")
s=J.aG(s)}else s=this.cW()
return s},
aO(){var s=this.id
if(s!=null){s.aB("getStart")
s=s.r
s===$&&A.b("points")
s=J.aG(s)}else s=this.cX()
return s},
pm(){var s,r,q,p=this,o=p.id
if(o!=null){p.ff(B.a1)
s=p.id
s.toString
r=A.a([],t.l)
s=s.r
s===$&&A.b("points")
s=J.F(s)
for(;s.n();){q=s.gq()
r.push(new A.f(q.a,q.b,q.c))}o.saJ(t.y.a(r))
p.a_(0,A.a([o],t.r))
p.id=o}o=p.k1
if(o!=null){p.ff(B.a2)
s=p.k1
s.toString
r=A.a([],t.l)
s=s.r
s===$&&A.b("points")
s=J.F(s)
for(;s.n();){q=s.gq()
r.push(new A.f(q.a,q.b,q.c))}o.saJ(t.y.a(r))
p.a_(0,A.a([o],t.r))
p.k1=o}}}
A.dJ.prototype={
t(){return A.pK(this)},
c5(){var s=this
s.kY()
s.eJ(s.a3,B.d)
s.ao(s.a8)},
kY(){var s,r,q,p,o,n,m,l,k,j=this,i=t.l,h=A.a([],i)
for(s=j.y2,r=j.a5,q=j.bn,s=A.iH(q,r+s,s).aZ(0),p=s.length,o=0;o<s.length;s.length===p||(0,A.e)(s),++o){n=s[o]
h.push(B.j.A(0,Math.cos(n)).J(0,B.p.A(0,Math.sin(n))))}s=A.a([],i)
for(p=h.length,o=0;o<h.length;h.length===p||(0,A.e)(h),++o){n=h[o]
s.push(new A.f(-n.b,n.a,n.c))}p=A.a([],i)
for(m=A.K(h.length-1,0,1),l=m.length,q=r/(q-1)/3,o=0;o<m.length;m.length===l||(0,A.e)(m),++o){k=m[o]
p.push(B.a.j(h,k).J(0,B.a.j(s,k).A(0,q)))}i=A.a([],i)
for(r=A.K(h.length,1,1),m=r.length,o=0;o<r.length;r.length===m||(0,A.e)(r),++o){k=r[o]
i.push(B.a.j(h,k).M(0,B.a.j(s,k).A(0,q)))}s=t.V
j.hj(A.na(h,s),p,i,A.d1(h,s))}}
A.cv.prototype={
t(){return A.pM(this)}}
A.c4.prototype={
t(){return A.pV(this)},
gdV(){return!0}}
A.dY.prototype={
t(){return A.aM(this)}}
A.e0.prototype={
t(){return A.q1(this)}}
A.ao.prototype={
t(){return A.nB(this)},
c5(){var s=this
s.eN(A.a([s.a3,s.a8],t.l))
s.mM()},
mM(){var s,r,q=this,p=q.y2
if(p===0)return
s=Math.sqrt(q.aO().M(0,q.aN()).b1())
if(s<2*p)return
r=p/s
q.oY(q,r,1-r)},
cK(a,b){var s=this
if(s.aO().V(0,s.aN())){s.a3=a
s.a8=b
s.c5()}return s.lB(a,b)}}
A.dL.prototype={
cn(a,b,c){var s=this
if(Math.sqrt(s.aO().M(0,s.aN()).b1())===0)return
s.lC(a,b,c)
s.hm()
s.pm()},
eJ(a,b){return this.cn(a,B.d,b)},
ha(){var s=this
return Math.min(s.fx,s.c0*Math.sqrt(s.aO().M(0,s.aN()).b1()))},
hm(){var s=this,r=s.b0
r===$&&A.b("initialStrokeWidth")
return s.l2(!1,Math.min(r,s.au*Math.sqrt(s.aO().M(0,s.aN()).b1())))},
t(){return A.pN(this)},
sap(a){this.aQ=A.co(a)},
gap(){return this.aQ}}
A.eu.prototype={
eV(a,b){var s=A.h(a,!0,t.V)
s.push(B.a.gaq(a))
this.eN(s)},
t(){return A.qq(this)},
pw(b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1="points",b2="getStart",b3=b0.f6(0),b4=t.nC,b5=A.a([],b4)
for(s=t.V,r=A.oN(b3,3,s),q=r.length,p=J.oW(b6),o=0;o<r.length;r.length===q||(0,A.e)(r),++o){n=r[o]
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
d=i.bv(0,Math.sqrt(e))
c=h.a
b=h.b
a=h.c
a0=c*c+b*b+a*a
a1=h.bv(0,Math.sqrt(a0))
a2=Math.acos((m*c+g*b+f*a)/(Math.sqrt(a0)*Math.sqrt(e)))*p.geQ(b6)
a3=b6*Math.tan(a2/2)/2
a4=J.pF(i.nN(h).c)
e=k.M(0,d.A(0,a3))
B.a.p(b5,A.pL(a4*a2,k.J(0,a1.A(0,a3)),e))}r=t.l
q=t.y
b0.saJ(q.a(A.a([],r)))
b4=A.a([B.a.gu(b5)],b4)
p=t.aY
B.a.N(b4,A.na(b5,p))
for(b4=A.oN(b4,2,p),p=b4.length,o=0;o<b4.length;b4.length===p||(0,A.e)(b4),++o){a5=b4[o]
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
J.am(g,m)
m=a6.k1
if(m!=null){m.aB(b2)
m=m.r
m===$&&A.b(b1)
m=J.aG(m)}else m=a6.cW()
g=a7.id
if(g!=null){g.aB(b2)
g=g.r
g===$&&A.b(b1)
g=J.aG(g)}else g=a7.cX()
a8=A.mr(0,B.c,g,null,m)
m=a8.id
if(m!=null){m.aB(b2)
m=m.r
m===$&&A.b(b1)
m=J.aG(m)}else m=a8.cX()
g=a8.k1
if(g!=null){g.aB(b2)
g=g.r
g===$&&A.b(b1)
g=J.aG(g)}else g=a8.cW()
g=m.M(0,g)
m=g.a
f=g.b
g=g.c
g=B.h.bt(Math.sqrt(m*m+f*f+g*g)/a6.ka()*B.e.b2(J.M(a6.r),a6.at))
m=a8.r
m===$&&A.b(b1)
a9=B.e.a6(J.M(m),a8.at)===1?J.aL(a8.r):null
a8.saJ(q.a(a8.fP(g,A.h(a8.r,!0,s))))
if(a9!=null){m=q.a(A.a([a9],r))
J.am(a8.r,m)}m=q.a(A.h(a8.r,!0,s))
J.am(b0.r,m)}}}
A.ew.prototype={
t(){return A.qA(this)}}
A.eM.prototype={
t(){return A.qV(this)}}
A.dM.prototype={
t(){return A.aC(this)},
sap(a){this.aQ=A.co(a)},
gap(){return this.aQ}}
A.dn.prototype={
hD(a,b,c){this.eP(c,!0)
this.dA(b,!0)},
t(){return A.qz(this)}}
A.ex.prototype={
t(){return A.qB(this)}}
A.bT.prototype={
t(){return A.qD(this)},
c5(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null
if($.mz.aj(e.id)){s=$.mz.j(0,e.id).t()
r=s.d
r===$&&A.b("submobjects")
e.sb3(t.a.a(r))
e.sbo(0,s.gbo(s))
e.go=s.go
e.fx=e.k1=!0
return}r=e.id
q=A.a([],t.bD)
p=t.il
o=A.a([],p)
n=A.a([],t.lB)
o=new A.kD("http://www.w3.org/1999/xhtml",o,new A.fq(n))
o.bs(0)
n=A.mu(t.N)
m=A.a([],t.t)
m=new A.jG(A.tl(d),d,n,m)
m.sih(new A.a9(r))
m.a="utf-8"
m.b=!0
m.bs(0)
r=new A.e7(m,!0,!0,!1,A.mu(t.nU),new A.a2(""),new A.a2(""),new A.a2(""))
r.bs(0)
l=new A.jH(!1,r,o,q)
r.f=l
l.mr()
o=o.b
o===$&&A.b("document")
k=A.a([],p)
r=t.kU
j=A.a([],r)
i=A.qr("memory",!1)
q=t.m3.a(B.a.gmN(j))
r=A.a([],r)
$.ff.b=new A.k2(q,i,r)
r=new A.a9("svg")
q=A.a([0],t.t)
h=new A.hH(d,q,new Uint32Array(A.mS(r.aC(r))))
h.hE(r,d)
r=new A.kB(85,117,43,63,new A.a9("CDATA"),h,"svg",!0,0)
q=new A.lp(r)
q.d=t.q.a(r.cH())
r.e=!0
g=q.p7()
if(g==null||j.length!==0)A.N(A.aE("'svg' is not a valid selector: "+A.k(j),d,d))
new A.ez().jJ(0,o,g,k)
r=k.length
q=t.a
f=0
for(;f<k.length;k.length===r||(0,A.e)(k),++f)e.aW(q.a(e.eD(k[f],new A.ey(B.aa,d,d))))
$.mz.v(0,e.id,e.t())},
eD(a,b){var s,r,q,p,o,n,m,l,k,j=this,i=null,h=t.hJ,g=A.a([],h),f=a.x,e=f==null?i:f.toLowerCase(),d=b.bM(j.bw(a))
if(e==="defs")j.pK(a)
else if(e!=="style")if(B.a.F(A.a(["g","svg","symbol"],t.s),e)){h=A.a([],h)
for(f=t.v,f=A.h(new A.al(a.giQ(a).a,f),!1,f.h("j.E")),s=A.w(f),f=new J.az(f,f.length,s.h("az<1>")),s=s.c;f.n();){r=f.d
B.a.N(h,j.eD(r==null?s.a(r):r,d))}B.a.N(g,h)}else if(e==="path"){q=a.b.j(0,"d")
if(q!=null&&q.length!==0)B.a.p(g,j.ek(q,d,a))}else if(e==="use")B.a.N(g,j.pL(a,d))
else if(e==="rect"){p=j.aP(a.b.j(0,"rx"))
h=a.b
if(p===0){h=j.aP(h.j(0,"width"))
o=A.qy(B.c,j.aP(a.b.j(0,"height")),h)}else{h=j.aP(h.j(0,"width"))
f=j.aP(a.b.j(0,"height"))
s=A.a([B.D,B.aC,B.N,B.aE],t.l)
o=new A.ex(4,0,!1,0.01,!1,0.000001,4,i,i,i,B.c,$,i,$,$,$)
o.am(B.c,i,i)
o.eV(s,B.c)
o.hD(B.c,f,h)
o.pw(p)}o.ao(o.ai(B.d).M(0,o.ai(B.D)))
B.a.p(g,j.bW(d.bM(j.bw(a)),o))}else if(e==="ellipse"){n=j.aP(a.b.j(0,"cx"))
m=j.aP(a.b.j(0,"cy"))
l=j.aP(a.b.j(0,"rx"))
k=j.aP(a.b.j(0,"ry"))
o=new A.e0(0,6.283185307179586,1,B.d,9,0.35,B.n,A.aN(i,0,B.c,i,0),i,i,4,0,!1,0.01,!1,0.000001,4,i,i,i,B.c,$,i,$,$,$)
o.am(B.c,i,i)
o.ae(B.c)
o.eP(l*2,!0)
o.dA(k*2,!0)
o.ao(B.j.A(0,n).J(0,B.k.A(0,m)))
B.a.p(g,j.bW(d.bM(j.bw(a)),o))}else if(e==="circle"){n=j.aP(a.b.j(0,"cx"))
m=j.aP(a.b.j(0,"cy"))
o=A.fK(B.d,B.c,j.aP(a.b.j(0,"r")))
o.ao(B.j.A(0,n).J(0,B.k.A(0,m)))
B.a.p(g,j.bW(d.bM(j.bw(a)),o))}else if(e==="polygon"||e==="polyline")B.a.p(g,j.oZ(a,d))
else A.n7("Unknown SVG element "+A.k(e))
j.or(a,A.i1(g))
return g},
ek(a,b,c){var s=A.qE(a)
if(c!=null)return this.bW(b.bM(this.bw(c)),s)
else return this.bW(b,s)},
jC(a,b){return this.ek(a,b,null)},
pL(a,b){var s,r,q,p=a.b,o=A.A(p).h("aV<1>"),n=A.h(new A.aV(p,o),!0,o.h("j.E"))
o=p.gjY(p)
s=A.h(o,!0,A.A(o).h("j.E"))
r=B.a.jk(n,new A.km())
if(r>=0){if(!(r<s.length))return A.c(s,r)
q=s[r]}else q=null
o=q==null?null:A.a(q.split("#"),t.s)
if(o==null)o=[]
q=B.a.aF(A.d1(o,t.z),"")
o=this.k2
if(!o.aj(q))A.n7("SVG ref "+q+" not recognized")
o=o.j(0,q)
o.toString
return this.eD(o,b.bM(this.bw(a)))},
aP(a){var s,r,q,p,o,n
if(a===""||a==null||a==="none")a="0.0"
s=A.h(B.ag,!0,t.N)
s.push("+")
s.push("-")
s.push(".")
s.push("e")
s.push("E")
r=A.a([],t.s)
for(q=a.split(""),p=q.length,o=0;o<p;++o){n=q[o]
if(B.a.F(s,n))r.push(n)}return A.bO(B.a.aX(r))},
oZ(a,b){var s,r,q,p,o=this,n=a.b.j(0,"points")
n.toString
for(s=n,r=0;r<10;++r){q=B.ag[r]
s=A.bp(s," "+q," L"+q)}b=b.bM(o.bw(a))
p=o.jC("M"+s,b)
return o.bW(b.bM(o.bw(a)),p)},
iY(a){var s,r,q,p,o,n
if(a===""||a==="none")return B.m
if(a==null)return null
s=A.a([3,4,6,8],t.t)
if(a==="currentcolor"){r=this.a
r===$&&A.b("color")
return r}else if(B.b.Z(a,"rgba")){r=A.a(a.split(""),t.s)
q=a.length-1
A.aF(5,q,r.length)
p=A.bd(r,5,q,t.N).aX(0).split(",")
q=p.length
if(0>=q)return A.c(p,0)
r=A.bO(p[0])
if(1>=q)return A.c(p,1)
o=A.bO(p[1])
if(2>=q)return A.c(p,2)
n=A.bO(p[2])
if(3>=q)return A.c(p,3)
return new A.P(r,o,n,A.bO(p[3]))}else if(B.b.Z(a,"rgb")){r=A.a(a.split(""),t.s)
q=a.length-1
A.aF(4,q,r.length)
p=A.bd(r,4,q,t.N).aX(0).split(",")
q=p.length
if(0>=q)return A.c(p,0)
r=A.bO(p[0])
if(1>=q)return A.c(p,1)
o=A.bO(p[1])
if(2>=q)return A.c(p,2)
return new A.P(r,o,A.bO(p[2]),1)}else if(B.b.Z(a,"#")||B.a.F(s,a.length))return A.ox(a)
else{A.n7("unimplented type of color: "+a)
return null}},
bW(a,b){b.l4(a.a,a.b,a.c)
return b},
bw(a){var s,r,q=a.b.j(0,"fill"),p=q==null?null:q.toLowerCase()
q=a.b.j(0,"stroke")
s=q==null?null:q.toLowerCase()
r=a.b.j(0,"stroke-width")
return new A.ey(this.iY(p),this.iY(s),this.aP(r))},
or(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
if(a2.b.j(0,"x")!=null&&a2.b.j(0,"y")!=null){s=this.aP(a2.b.j(0,"x"))
r=this.aP(a2.b.j(0,"y"))
a3.ao(B.j.A(0,s).J(0,B.k.A(0,r)))}q=a2.b.j(0,"transform")
if(q==null)q=""
p=["matrix","translate","scale","rotate","skewX","skewY"]
o=A.a([],t.s)
for(n=0;n<6;++n)o.push(p[n]+"[^)]*\\)")
m=A.ap(B.a.aF(o,"|")).cb(0,q)
l=A.ap("[-+]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:[eE][-+]?\\d+)?")
for(o=new A.dv(m.a,m.b,m.c),k=t.lu,j=t.n,i=t.b,h=t.o;o.n();){g=o.d
f=(g==null?k.a(g):g).b
if(0>=f.length)return A.c(f,0)
e=f[0].split("(")
f=e.length
if(0>=f)return A.c(e,0)
d=J.nl(e[0])
c=A.a([],j)
if(1>=f)return A.c(e,1)
f=l.cb(0,e[1])
f=new A.dv(f.a,f.b,f.c)
for(;f.n();){s=f.d
b=(s==null?k.a(s):s).b
if(0>=b.length)return A.c(b,0)
b=b[0]
b.toString
c.push(A.bO(b))}switch(d){case"matrix":a=A.aR(null,A.a([c],i)).ps(3,2)
h.a(new A.O(2,0,h))
f=a.a
f===$&&A.b("values")
if(2>=f.length)return A.c(f,2)
c=J.Z(f[2],0)
h.a(new A.O(2,1,h))
if(2>=f.length)return A.c(f,2)
b=J.Z(f[2],1)
a0=A.dK(3)
h.a(new A.O(0,0,h))
if(!(0<f.length))return A.c(f,0)
a1=J.Z(f[0],0)
a0.bi(h.a(new A.O(0,0,h)),a1)
h.a(new A.O(0,1,h))
if(!(0<f.length))return A.c(f,0)
a1=J.Z(f[0],1)
a0.bi(h.a(new A.O(0,1,h)),a1)
h.a(new A.O(1,0,h))
if(!(1<f.length))return A.c(f,1)
a1=J.Z(f[1],0)
a0.bi(h.a(new A.O(1,0,h)),a1)
h.a(new A.O(1,1,h))
if(!(1<f.length))return A.c(f,1)
f=J.Z(f[1],1)
a0.bi(h.a(new A.O(1,1,h)),f)
f=h.a(new A.O(1,0,h))
a1=a0.a
a1===$&&A.b("values")
if(!(1<a1.length))return A.c(a1,1)
a0.bi(f,J.Z(a1[1],0)*-1)
f=h.a(new A.O(1,1,h))
if(!(1<a1.length))return A.c(a1,1)
a0.bi(f,J.Z(a1[1],1)*-1)
f=h.a(new A.O(1,2,h))
if(!(1<a1.length))return A.c(a1,1)
a0.bi(f,J.Z(a1[1],2)*-1)
f=h.a(new A.O(0,1,h))
if(!(0<a1.length))return A.c(a1,0)
a0.bi(f,J.Z(a1[0],1)*-1)
f=h.a(new A.O(1,1,h))
if(!(1<a1.length))return A.c(a1,1)
a0.bi(f,J.Z(a1[1],1)*-1)
f=h.a(new A.O(2,1,h))
if(2>=a1.length)return A.c(a1,2)
a0.bi(f,J.Z(a1[2],1)*-1)
a3.iI(a0)
a3.ao(B.j.A(0,c).J(0,B.k.A(0,b)))
break
case"scale":f=c.length
if(f===1){if(0>=f)return A.c(c,0)
f=c[0]
a3.hh(0,new A.f(f,f,1),B.d)}else if(f===2){if(0>=f)return A.c(c,0)
b=c[0]
if(1>=f)return A.c(c,1)
a3.hh(0,new A.f(b,c[1],1),B.d)}break
case"translate":f=c.length
if(0>=f)return A.c(c,0)
s=c[0]
if(f===2){if(1>=f)return A.c(c,1)
r=c[1]}else r=0
a3.ao(B.j.A(0,s).J(0,B.k.A(0,r)))
break}}},
h6(a){var s,r,q=t.il,p=A.a([],q)
if(a.b.aj("id"))return A.a([a],q)
for(q=t.v,q=A.h(new A.al(a.giQ(a).a,q),!1,q.h("j.E")),s=A.w(q),q=new J.az(q,q.length,s.h("az<1>")),s=s.c;q.n();){r=q.d
B.a.N(p,this.h6(r==null?s.a(r):r))}return p},
pK(a){var s,r,q,p,o,n
for(s=this.h6(a),r=s.length,q=this.k2,p=0;p<s.length;s.length===r||(0,A.e)(s),++p){o=s[p]
n=o.b.j(0,"id")
n.toString
q.v(0,n,o)}},
ei(){var s,r=this
r.ao(r.ai(B.d).A(0,B.aD).A(0,-1))
if(r.gbo(r)!=null){s=r.gbo(r)
s.toString
r.kX(s)}},
sbo(a,b){this.fy=A.ow(b)},
snL(a,b){this.id=A.aw(b)},
gbo(a){return this.fy}}
A.km.prototype={
$1(a){var s
t.K.a(a)
s=J.bo(a)
return B.b.F(s.l(a),"href")&&B.b.F(s.l(a),"xlink")},
$S:43}
A.dp.prototype={
t(){return A.qF(this)},
kg(){var s=A.a(["M","L","H","V","C","S","Q","T","A","Z"],t.s),r=A.h(s,!0,t.N)
B.a.N(r,new A.I(s,t.gL.a(new A.ko()),t.gQ))
return r},
c5(){var s,r,q,p,o,n,m,l=this,k=A.ap("["+B.a.aX(l.kg())+"]"),j=l.fx,i=k.cb(0,j),h=t.N,g=A.A(i)
g=A.jY(i,g.h("n(j.E)").a(new A.kn()),g.h("j.E"),h)
s=A.h(g,!0,A.A(g).h("j.E"))
r=A.d1(B.b.cp(j,k),h)
for(j=A.K(s.length,0,1),i=j.length,q=null,p=0;p<j.length;j.length===i||(0,A.e)(j),++p,q=n){o=j[p]
n=B.a.j(s,o)
m=B.a.j(r,o)
l.op(n,m,q==null?"":q)}l.ew(0,3.141592653589793,B.d,B.j)},
op(a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a="addCubicBezierCurveTo",a0=a2.toUpperCase(),a1=b.r
a1===$&&A.b("points")
s=J.bP(a1)?J.aL(b.r):new A.f(0,0,0)
r=b.lm(a0,a3,a2!==a2.toUpperCase(),s)
switch(a0){case"M":if(0>=r.length)return A.c(r,0)
a1=t.V
q=t.y.a(A.a([a1.a(r[0])],t.l))
J.am(b.r,q)
for(a1=A.d1(r,a1),q=a1.length,p=0;p<a1.length;a1.length===q||(0,A.e)(a1),++p)b.dQ(a1[p])
return
case"H":case"V":case"L":for(a1=r.length,p=0;p<r.length;r.length===a1||(0,A.e)(r),++p)b.dQ(r[p])
return
case"C":for(a1=A.K(r.length,0,3),q=a1.length,o=t.l,n=t.y,m=b.at,l=t.V,p=0;p<a1.length;a1.length===q||(0,A.e)(a1),++p){k=a1[p]
if(typeof k!=="number")return k.J()
j=B.a.j(r,k+0)
i=B.a.j(r,k+1)
h=B.a.j(r,k+2)
l.a(j)
l.a(i)
l.a(h)
b.aB(a)
if(B.e.a6(J.M(b.r),m)===1){j=n.a(A.a([j,i,h],o))
J.am(b.r,j)}else{j=n.a(A.a([J.aL(b.r),j,i,h],o))
J.am(b.r,j)}}return
case"S":if(B.a.F(A.a(["C","S"],t.s),a4.toUpperCase())){a1=b.r
q=J.Y(a1)
g=q.j(a1,q.gm(a1)-2)}else g=s
for(a1=A.K(r.length,0,2),q=a1.length,o=t.l,n=t.y,m=b.at,l=t.V,p=0;p<a1.length;a1.length===q||(0,A.e)(a1),++p){k=a1[p]
f=s.A(0,2).M(0,g)
j=B.a.j(r,k)
if(typeof k!=="number")return k.J()
i=k+1
h=B.a.j(r,i)
l.a(j)
l.a(h)
b.aB(a)
if(B.e.a6(J.M(b.r),m)===1){j=n.a(A.a([f,j,h],o))
J.am(b.r,j)}else{j=n.a(A.a([J.aL(b.r),f,j,h],o))
J.am(b.r,j)}s=B.a.j(r,i)
g=B.a.j(r,k)}return
case"Q":for(a1=A.K(r.length,0,2),q=a1.length,o=t.l,n=t.y,m=b.at,l=t.V,p=0;p<a1.length;a1.length===q||(0,A.e)(a1),++p){k=a1[p]
j=B.a.j(r,k)
if(typeof k!=="number")return k.J()
i=B.a.j(r,k+1)
l.a(j)
l.a(i)
h=j.A(0,0.6666666666666666).J(0,J.aL(b.r).A(0,0.3333333333333333))
j=j.A(0,0.6666666666666666).J(0,i.A(0,0.3333333333333333))
b.aB(a)
if(B.e.a6(J.M(b.r),m)===1){j=n.a(A.a([h,j,i],o))
J.am(b.r,j)}else{j=n.a(A.a([J.aL(b.r),h,j,i],o))
J.am(b.r,j)}}return
case"T":if(B.a.F(A.a(["Q","T"],t.s),a4.toUpperCase())){a1=b.r
q=J.Y(a1)
e=J.d2(q.j(a1,q.gm(a1)-2),1.5).M(0,J.d2(J.aL(b.r),0.5))}else e=s
for(a1=r.length,q=t.l,o=t.y,n=b.at,m=t.V,p=0;p<r.length;r.length===a1||(0,A.e)(r),++p,e=c,s=d){d=r[p]
c=s.A(0,2).M(0,e)
m.a(d)
l=c.A(0,0.6666666666666666).J(0,J.aL(b.r).A(0,0.3333333333333333))
j=c.A(0,0.6666666666666666).J(0,d.A(0,0.3333333333333333))
b.aB(a)
if(B.e.a6(J.M(b.r),n)===1){l=o.a(A.a([l,j,d],q))
J.am(b.r,l)}else{l=o.a(A.a([J.aL(b.r),l,j,d],q))
J.am(b.r,l)}}return
case"A":for(a1=A.K(r.length,0,3),q=a1.length,o=t.l,n=t.y,m=b.at,l=t.V,p=0;p<a1.length;a1.length===q||(0,A.e)(a1),++p){k=a1[p]
j=B.a.j(r,k)
if(typeof k!=="number")return k.J()
i=B.a.j(r,k+1)
h=B.a.j(r,k+2)
l.a(j)
l.a(i)
l.a(h)
b.aB(a)
if(B.e.a6(J.M(b.r),m)===1){j=n.a(A.a([j,i,h],o))
J.am(b.r,j)}else{j=n.a(A.a([J.aL(b.r),j,i,h],o))
J.am(b.r,j)}}return
case"Z":if(!b.iW(J.aG(b.r),J.aL(b.r))){a1=B.a.gu(b.eG(A.h(b.r,!0,t.V)))
if(0>=a1.length)return A.c(a1,0)
b.dQ(a1[0])}return}},
lm(a,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=A.tZ(a0),c=t.l,b=A.a([],c)
if(a==="A"){for(c=A.p_(d,2,t.W),s=c.length,r=null,q=0;q<c.length;c.length===s||(0,A.e)(c),++q){p=c[q]
if(r!=null)a2=r
if(a1){if(5>=p.length)return A.c(p,5)
o=p[5]
if(typeof o!=="number")return o.J()
B.a.v(p,5,o+a2.a)
if(6>=p.length)return A.c(p,6)
o=p[6]
if(typeof o!=="number")return o.J()
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
B.a.N(b,A.tu(a2,m,l,k,j,i,new A.f(n,p[6],0)))
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
for(c=A.K(b.length,0,1),s=c.length,f=a2,q=0;q<c.length;c.length===s||(0,A.e)(c),++q){e=c[q]
B.a.v(b,e,B.a.j(b,e).J(0,f))
if(typeof e!=="number")return e.J()
if(B.h.a6(e+1,g)===0)f=B.a.j(b,e)}return b}}
A.ko.prototype={
$1(a){return A.aw(a).toLowerCase()},
$S:24}
A.kn.prototype={
$1(a){var s=t.lu.a(a).b
if(0>=s.length)return A.c(s,0)
s=s[0]
s.toString
return s},
$S:45}
A.ey.prototype={
bM(a){var s,r,q=a.a
if(q==null)q=this.a
s=a.b
if(s==null)s=this.b
r=a.c
return new A.ey(q,s,r==null?this.c:r)},
l(a){return"fill: "+A.k(this.a)+", stroke: "+A.k(this.b)+" "+A.k(this.c)+"pt"}}
A.eJ.prototype={
t(){return A.qS(this)}}
A.bJ.prototype={
t(){return A.qH(this)},
j0(){var s=this,r=s.a5
B.b.ex(r)
s.a5=A.qI(r)
if(!$.bK.aj(s.a3)||!$.bK.j(0,s.a3).aj(s.a5))throw A.d(s.a5+" need to be preloaded")
r=$.bK.j(0,s.a3).j(0,s.a5)
r.toString
s.snL(0,r)
s.saJ(t.y.a(A.a([],t.l)))
s.sb3(t.a.a(A.a([],t.r)))
s.c5()
s.ei()
r=s.a
r===$&&A.b("color")
s.ae(r)
s.kl(0.035)},
l(a){return this.c6()+"("+this.a5+")"},
ek(a,b,c){var s=null,r=new A.eJ(a,s,4,0,!1,0.01,!1,0.000001,4,s,s,s,B.c,$,s,$,$,$)
r.am(B.c,s,s)
if(c!=null)return this.bW(b.bM(this.bw(c)),r)
else return this.bW(b,r)},
jC(a,b){return this.ek(a,b,null)},
sbo(a,b){this.a8=A.ow(b)},
gbo(a){return this.a8}}
A.cJ.prototype={
hC(a,b,c,d,e,f){var s,r=this
r.a3=d
s=r.aQ
r.spE(A.ql(a,r.ce,s))
r.a5=B.a.aF(r.b0,r.au)
r.j0()
r.nq()
r.kV(s)},
t(){return A.qk(this)},
nq(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1="submobjects",a2=A.a([],t.nn)
for(s=a.b0,r=s.length,q=t.a,p=a.au,o=t.s,n=t.N,m=t.h,l=t.r,k=t.j,j=0,i=0;i<s.length;s.length===r||(0,A.e)(s),++i,j=e){h=new A.bJ(s[i],a.a3,!0,2,a0,"",!0,A.aW(n,m),4,0,!1,0.01,!1,0.000001,4,a0,a0,a0,B.c,$,a0,$,$,$)
h.am(B.c,a0,a0)
g=h.r
g===$&&A.b("points")
if(J.bP(g))h.ei()
h.a=B.c
h.j0()
g=h.d
g===$&&A.b(a1)
f=g.length
e=j+f+B.a.aF(A.a(p.split(" "),o),"").length
if(f===0){h.sb3(q.a(A.a([A.o4(B.d)],l)))
g=a.d
g===$&&A.b(a1)
d=g.length
c=Math.min(j,d-1)
if(c>>>0!==c||c>=d)return A.c(g,c)
g=k.a(g[c])
h.aL(g.ai(B.j))}else{g=a.d
g===$&&A.b(a1)
A.aF(j,e,g.length)
d=A.w(g)
b=new A.aK(g,j,e,d.h("aK<1>"))
b.cq(g,j,e,d.c)
h.sb3(q.a(b.aC(0)))}B.a.p(a2,h)}a.sb3(q.a(a2))},
kf(a,b,c){var s,r,q,p=new A.jZ(!0,!0),o=A.a([],t.nn),n=this.d
n===$&&A.b("submobjects")
s=n.length
r=0
for(;r<n.length;n.length===s||(0,A.e)(n),++r){q=n[r]
if(q instanceof A.bJ&&A.ax(p.$2(a,q.a5)))o.push(q)}return o},
kU(a,b,c,d){var s,r,q,p=this.kf(a,!0,!0)
for(s=p.length,r=0;r<p.length;p.length===s||(0,A.e)(p),++r){q=p[r]
q.cR(b,!0)
q.cT(b,!0)
q.hz(b,!0)}},
kV(a){var s,r
t.fg.a(a)
for(s=a.ge0(a),s=new A.cm(s.a(),s.$ti.h("cm<1>"));s.n();){r=s.gq()
this.kU(r.a,r.b,!0,!0)}},
spE(a){this.b0=t.I.a(a)}}
A.jZ.prototype={
$2(a,b){var s
if(!this.a){a=a.toLowerCase()
b=b.toLowerCase()}s=B.b.F(b,a)
return s},
$S:46}
A.eI.prototype={
t(){return A.qR(this)}}
A.h8.prototype={
hB(a){this.aW(t.a.a(A.a([this.w],t.r)))
this.dU()},
dP(a,b,c,d){var s,r
A.iE(d,t.e,"IEvent","addEventListener")
s=new A.b7(d.h("B(0)").a(c),b,d.h("b7<0>"))
r=$.dG()
t.d3.a(s)
r=r.gcd().j(0,b)
r.toString
B.a.p(r,s)
return s}}
A.dZ.prototype={
dU(){var s=this
s.slY(t.gG.a(s.dP(0,B.C,new A.jd(s),t.gn)))
s.slZ(t.m4.a(s.dP(0,B.B,new A.je(s),t.oJ)))
s.sm_(t.Y.a(s.dP(0,B.x,new A.jf(s),t.f)))},
t(){return A.q0(this)},
slY(a){this.ay=t.gG.a(a)},
slZ(a){this.ch=t.m4.a(a)},
sm_(a){this.CW=t.Y.a(a)}}
A.jd.prototype={
$1(a){var s
t.gn.a(a)
s=this.a
if(s.cx){s.w.aL(a.c)
return!0}return!1},
$S:47}
A.je.prototype={
$1(a){var s=this.a,r=s.w,q=t.oJ.a(a).c
if(r.jt(q)){s.cx=!0
r.aL(q)
return!0}return!1},
$S:48}
A.jf.prototype={
$1(a){t.f.a(a)
return this.a.cx=!1},
$S:25}
A.dS.prototype={
goQ(a){var s=this.ch
s===$&&A.b("onClick")
return s},
lI(a,b){this.slW(t.M.a(b))},
dU(){this.slX(t.Y.a(this.dP(0,B.x,new A.j2(this),t.f)))},
t(){return A.pT(this)},
slX(a){this.ay=t.Y.a(a)},
slW(a){this.ch=t.M.a(a)},
oR(a){return this.goQ(this).$0()}}
A.j2.prototype={
$1(a){var s=this.a
if(s.w.jt(t.f.a(a).c)){s.oR(0)
return!0}return!1},
$S:25}
A.G.prototype={
gjW(){var s=this.e
if(s===$){s=A.a([],t.po)
this.sm1(s)}return s},
am(a,b,c){var s=this,r=s.c6()
s.b=r
s.sb3(t.a.a(A.a([],t.r)))
s.f=!1
s.saJ(t.y.a(A.a([],t.l)))
s.jl()
s.c5()},
l(a){return this.c6()},
c6(){var s=this.eT(0),r=A.ap("^Instance of '(.*?)'$").fN(s).b
if(1>=r.length)return A.c(r,1)
r=r[1]
r.toString
return r},
jl(){},
c5(){},
aW(a){var s,r,q,p,o,n=t.a
n.a(a)
if(B.a.F(a,this))throw A.d("Mobject can't contain itself")
s=A.h(a,!0,t.j)
r=this.d
r===$&&A.b("submobjects")
q=r.length
p=0
for(;p<r.length;r.length===q||(0,A.e)(r),++p){o=r[p]
if(!B.a.F(a,o))s.push(o)}this.sb3(n.a(s))},
mS(a){var s,r,q,p,o,n=t.a
n.a(a)
if(B.a.F(a,this))throw A.d("Mobject can't contain itself")
s=A.a([],t.r)
r=this.d
r===$&&A.b("submobjects")
q=r.length
p=0
for(;p<r.length;r.length===q||(0,A.e)(r),++p){o=r[p]
if(!B.a.F(a,o))s.push(o)}B.a.N(s,a)
this.sb3(n.a(s))},
a_(a,b){var s,r,q,p,o,n=t.a
n.a(b)
s=A.a([],t.r)
r=this.d
r===$&&A.b("submobjects")
q=r.length
p=0
for(;p<r.length;r.length===q||(0,A.e)(r),++p){o=r[p]
if(!B.a.F(b,o))s.push(o)}this.sb3(n.a(s))},
d2(a,b,c){var s,r,q,p,o,n,m,l
t.ew.a(c)
if(b==null)b=this.ai(a)
for(s=this.dv(),r=s.length,q=t.y,p=t.l,o=0;o<s.length;s.length===r||(0,A.e)(s),++o){n=s[o]
m=A.a([],p)
l=n.r
l===$&&A.b("points")
l=J.F(l)
for(;l.n();)m.push(J.mf(c.$1(l.gq().M(0,b)),b))
n.saJ(q.a(m))}},
iJ(a){return this.d2(B.d,null,a)},
t(){return A.qm(this)},
jV(a,b){var s,r,q=this,p=q.f
p===$&&A.b("updatingSuspended")
if(p)return
for(p=q.gjW(),s=p.length,r=0;r<p.length;p.length===s||(0,A.e)(p),++r)p[r].$2(q,a)
p=q.d
p===$&&A.b("submobjects")
s=p.length
r=0
for(;r<p.length;p.length===s||(0,A.e)(p),++r)p[r].jV(a,!0)},
h4(a){return this.jV(a,!0)},
dR(a){t.k5.a(a)
B.a.p(this.gjW(),a)
this.h4(0)},
ao(a){return this.iJ(new A.ka(a))},
hh(a,b,c){return this.d2(B.d,c,new A.k9(b))},
cn(a,b,c){return this.d2(b,c,new A.k8(a))},
eJ(a,b){return this.cn(a,B.d,b)},
kl(a){return this.cn(a,B.d,null)},
ew(a,b,c,d){this.d2(B.d,c,new A.k7(A.tT(b,d).gjU()))},
h_(a,b){return this.ew(a,b,null,B.n)},
pv(a,b,c){return this.ew(a,b,c,B.n)},
ll(a,b,c,d){return this.d2(c,d,new A.kb(b,a))},
iI(a){var s={},r=A.dK(3)
s.a=r
s.a=r.cG(0,new A.k3(a))
this.iJ(new A.k4(s))},
jA(a,b,c){this.ao(a.ai(B.d.J(0,c)).M(0,this.ai(B.d.M(0,c))).J(0,c.A(0,b)).A(0,B.aD))
return null},
jO(a,b,c,d,e){var s,r=this.oG(b)
if(r===0)return
s=a/r
if(e)this.ll(s,b,c,d)
else this.cn(s,c,d)},
eP(a,b){this.jO(a,0,B.d,null,b)},
dA(a,b){this.jO(a,1,B.d,null,b)},
kX(a){return this.dA(a,!1)},
aL(a){this.ao(a.M(0,this.ai(B.d)).A(0,new A.f(1,1,1)))},
cK(a,b){var s,r=this,q=r.aO(),p=r.aN(),o=p.M(0,q)
if(q.V(0,p))throw A.d("Cannot position endpoints of a closed loop")
s=b.M(0,a)
r.eJ(Math.sqrt(s.b1())/Math.sqrt(o.b1()),q)
r.pv(0,s.d1()-o.d1(),q)
r.ao(a.M(0,q))},
c7(a,b){var s,r,q=this.d
q===$&&A.b("submobjects")
s=q.length
r=0
for(;r<q.length;q.length===s||(0,A.e)(q),++r)q[r].c7(a,!0)
this.a=a},
d9(a,b){var s,r,q=this.d
q===$&&A.b("submobjects")
s=q.length
r=0
for(;r<q.length;q.length===s||(0,A.e)(q),++r)q[r].d9(a,!0)},
ja(a){return this.d9(a,!0)},
bN(){var s,r,q,p=A.a([this],t.r),o=this.d
o===$&&A.b("submobjects")
s=o.length
r=0
for(;r<o.length;o.length===s||(0,A.e)(o),++r)B.a.N(p,o[r].bN())
q=A.mt(p,t.j)
return A.h(q,!0,A.A(q).h("aZ.E"))},
dv(){var s=this.bN(),r=A.w(s),q=r.h("aq<1>")
return A.h(new A.aq(s,r.h("B(1)").a(new A.k5()),q),!0,q.h("j.E"))},
h8(){var s,r,q,p,o=A.a([],t.l)
for(s=this.dv(),r=s.length,q=0;q<s.length;s.length===r||(0,A.e)(s),++q){p=s[q].r
p===$&&A.b("points")
B.a.N(o,p)}return o},
eF(){return this.h8()},
du(a,b,c){var s,r,q
t.fA.a(c)
if(c==null)c=this.eF()
s=A.a([],t.n)
for(r=c.length,q=0;q<c.length;c.length===r||(0,A.e)(c),++q)s.push(c[q].dt(a))
if(b<0)return B.a.ba(s,B.Q)
else if(b===0)return(B.a.ba(s,B.Q)+B.a.ba(s,B.F))/2
else return B.a.ba(s,B.F)},
kb(a,b){return this.du(a,b,null)},
ai(a){var s=this,r=s.eF()
if(r.length===0)return B.d
return new A.f(s.du(0,B.h.bt(a.a),r),s.du(1,B.h.bt(a.b),r),s.du(2,B.h.bt(a.c),r))},
oG(a){var s,r,q,p=this.h8()
if(p.length===0)return 1
s=A.w(p)
r=new A.I(p,s.h("t(1)").a(new A.k6(a)),s.h("I<1,t>"))
q=r.ba(0,B.Q)
return r.ba(0,B.F)-q},
eB(a,b){return this.kb(a,B.h.bt(B.d.dt(a)))},
bO(){return new A.f(this.eB(0,null),this.eB(1,null),this.eB(2,null))},
aO(){this.aB("getStart")
var s=this.r
s===$&&A.b("points")
return J.aG(s)},
aN(){this.aB("getEnd")
var s=this.r
s===$&&A.b("points")
return J.aL(s)},
gm(a){var s=A.a([],t.r),r=this.r
r===$&&A.b("points")
if(J.bP(r))s.push(this)
r=this.d
r===$&&A.b("submobjects")
B.a.N(s,r)
return s.length},
eS(a){var s=A.a([],t.r),r=this.r
r===$&&A.b("points")
if(J.bP(r))s.push(this)
r=this.d
r===$&&A.b("submobjects")
B.a.N(s,r)
return s},
fh(a){var s,r,q,p,o,n=this,m="points",l="submobjects",k=n.r
k===$&&A.b(m)
if(J.cu(k)){k=a.r
k===$&&A.b(m)
k=J.bP(k)}else k=!1
if(k)a.jI()
k=a.r
k===$&&A.b(m)
if(J.cu(k)&&J.bP(n.r))n.jI()
s=n.eS(0).length
r=a.eS(0).length
n.ix(Math.max(0,r-s))
a.ix(Math.max(0,s-r))
n.iE(a)
k=n.d
k===$&&A.b(l)
q=a.d
q===$&&A.b(l)
q=new A.au(A.a([k,q],t.Z),t.oS)
q=q.gH(q)
for(;q.n();){p=q.b
if(p==null)p=A.N(A.av("No element"))
k=p.length
if(0>=k)return A.c(p,0)
o=p[0]
if(1>=k)return A.c(p,1)
o.fh(p[1])}},
hd(){throw A.d("getPointMobject not implemented for "+A.k(this.gke())+"()")},
iE(a){var s,r,q=this.r
q===$&&A.b("points")
s=J.M(q)
q=a.r
q===$&&A.b("points")
r=J.M(q)
if(s<r)this.iF(a)
else if(s>r)a.iF(this)},
iF(a){throw A.d("Not implemented")},
jI(){var s=this.t(),r=t.r,q=t.a
s.sb3(q.a(A.a([],r)))
this.saJ(t.y.a(A.a([],t.l)))
this.aW(q.a(A.a([s],r)))},
ix(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
if(a2===0)return
s=a1.eS(0).length
if(s===0){r=A.a([],t.r)
for(q=A.K(a2,0,1),p=q.length,o=0;o<q.length;q.length===p||(0,A.e)(q),++o)r.push(a1.hd())
a1.sb3(t.a.a(r))}n=s+a2
r=t.t
q=A.a([],r)
for(p=A.K(n,0,1),m=p.length,o=0;o<p.length;p.length===m||(0,A.e)(p),++o){l=p[o]
if(typeof l!=="number")return l.A()
q.push(B.h.b2(l*s,n))}p=A.a([],r)
for(m=A.K(s,0,1),k=m.length,j=t.S,o=0;o<m.length;m.length===k||(0,A.e)(m),++o){i=m[o]
h=A.a([],r)
for(g=q.length,f=J.bo(i),e=0;e<q.length;q.length===g||(0,A.e)(q),++e)if(f.V(i,q[e]))h.push(1)
else h.push(0)
p.push(A.mb(h,j))}d=A.a([],t.r)
r=a1.d
r===$&&A.b("submobjects")
p=new A.au(A.a([r,p],t.bo),t.c2)
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
for(q=A.K(a,1,1),m=q.length,o=0;o<q.length;q.length===m||(0,A.e)(q),++o){a0=b.t()
a0.ja(1)
B.a.p(d,a0)}}a1.sb3(t.a.a(d))},
fQ(a,b,c){},
az(a){var s,r,q,p,o,n,m
this.fh(a)
for(s=new A.au(A.a([this.bN(),a.bN()],t.Z),t.oS),s=s.gH(s),r=t.V,q=t.y;s.n();){p=s.b
if(p==null)p=A.N(A.av("No element"))
o=p.length
if(0>=o)return A.c(p,0)
n=p[0]
if(1>=o)return A.c(p,1)
m=p[1]
o=m.r
o===$&&A.b("points")
n.saJ(q.a(A.h(o,!0,r)))
n.fQ(n,m,1)}},
aB(a){var s=this.r
s===$&&A.b("points")
if(J.bP(s))return
throw A.d("Cannot call Mobject."+a+" , the mobject doesn't have any points")},
jt(a){var s=this,r=a.a
if(r>=s.ai(B.z).a-0.1)if(r<=s.ai(B.j).a+0.1){r=a.b
r=r>=s.ai(B.k).b-0.1&&r<=s.ai(B.p).b+0.1}else r=!1
else r=!1
return r},
sb3(a){this.d=t.a.a(a)},
sm1(a){this.e=t.le.a(a)},
saJ(a){this.r=t.y.a(a)}}
A.ka.prototype={
$1(a){return a.J(0,this.a)},
$S:3}
A.k9.prototype={
$1(a){return a.A(0,this.a)},
$S:3}
A.k8.prototype={
$1(a){return a.A(0,this.a)},
$S:3}
A.k7.prototype={
$1(a){return a.bg(this.a)},
$S:3}
A.kb.prototype={
$1(a){var s=this.a
return a.pW(s,a.dt(s)*this.b)},
$S:3}
A.k3.prototype={
$2(a,b){var s,r,q,p
t.o.a(b)
s=b.a
r=this.a
q=r.b
q===$&&A.b("shape")
p=q.a
if(typeof s!=="number")return s.ez()
if(typeof p!=="number")return A.bB(p)
if(s<p){s=b.b
q=q.b
if(typeof s!=="number")return s.ez()
if(typeof q!=="number")return A.bB(q)
q=s>=q
s=q}else s=!0
return s?a:r.bP(b)},
$S:4}
A.k4.prototype={
$1(a){return a.bg(this.a.a)},
$S:3}
A.k5.prototype={
$1(a){var s=t.j.a(a).r
s===$&&A.b("points")
return J.M(s)>0},
$S:13}
A.k6.prototype={
$1(a){return t.V.a(a).dt(this.a)},
$S:26}
A.d8.prototype={
t(){return A.q6(this)}}
A.R.prototype={
t(){return A.r1(this)},
jl(){var s=this,r=s.ax
if(r==null){r=s.a
r===$&&A.b("color")
r=A.a([r],t.O)}s.kW(r)
r=s.ay
if(r==null){r=s.a
r===$&&A.b("color")
r=A.a([r],t.O)}s.l1(r,s.gap())
s.kT(s.ch,s.x)},
cS(a,b,c){var s,r,q,p,o,n=this
t.x.a(b)
s=t.O
r=A.a([],s)
if(b!=null)B.a.N(r,b)
if(a!=null)r.push(a)
if(c)for(q=n.eI(),p=q.length,o=0;o<q.length;q.length===p||(0,A.e)(q),++o)q[o].hk(r,!1)
if(r.length!==0){if(n.ax==null)n.scf(r)
q=n.ax
q.toString
q=J.M(q)
p=r.length
if(q<p){q=n.ax
q.toString
n.scf(A.d0(q,p,t.G))}else{q=n.ax
q.toString
if(p<J.M(q)){q=n.ax
q.toString
n.scf(A.d0(r,J.M(q),t.G))}}s=A.a([],s)
q=n.ax
q.toString
q=A.K(J.M(q),0,1)
p=q.length
o=0
for(;o<q.length;q.length===p||(0,A.e)(q),++o)s.push(B.a.j(r,q[o]))
n.scf(s)}},
cR(a,b){return this.cS(a,null,b)},
hk(a,b){return this.cS(null,a,b)},
kW(a){return this.cS(null,a,!0)},
cQ(a){return this.cS(a,null,!0)},
bB(a,b,c,d,e){var s,r,q,p,o,n=this
t.x.a(c)
s=t.O
r=A.a([],s)
if(c!=null)B.a.N(r,c)
if(b!=null)r.push(b)
if(d)for(q=n.eI(),p=q.length,o=0;o<q.length;q.length===p||(0,A.e)(q),++o)q[o].l3(a,r,!1,e)
if(r.length!==0)if(a){if(n.ch==null)n.scz(r)
q=n.ch
q.toString
q=J.M(q)
p=r.length
if(q<p){q=n.ch
q.toString
n.scz(A.d0(q,p,t.G))}else{q=n.ch
q.toString
if(p<J.M(q)){q=n.ch
q.toString
n.scz(A.d0(r,J.M(q),t.G))}}s=A.a([],s)
q=n.ay
q.toString
q=A.K(J.M(q),0,1)
p=q.length
o=0
for(;o<q.length;q.length===p||(0,A.e)(q),++o)s.push(B.a.j(r,q[o]))
n.sbS(s)}else{if(n.ay==null)n.sbS(r)
q=n.ay
q.toString
q=J.M(q)
p=r.length
if(q<p){q=n.ay
q.toString
n.sbS(A.d0(q,p,t.G))}else{q=n.ay
q.toString
if(p<J.M(q)){q=n.ay
q.toString
n.sbS(A.d0(r,J.M(q),t.G))}}s=A.a([],s)
q=n.ay
q.toString
q=A.K(J.M(q),0,1)
p=q.length
o=0
for(;o<q.length;q.length===p||(0,A.e)(q),++o)s.push(B.a.j(r,q[o]))
n.sbS(s)}if(e!=null)if(a)n.x=e
else n.sap(e)},
cT(a,b){return this.bB(!1,a,null,b,null)},
l3(a,b,c,d){return this.bB(a,null,b,c,d)},
l0(a,b){return this.bB(!1,null,a,b,null)},
l1(a,b){return this.bB(!1,null,a,!0,b)},
l2(a,b){return this.bB(!1,null,null,a,b)},
hl(a){return this.bB(!1,null,null,!0,a)},
l_(a,b){return this.bB(!1,a,null,!0,b)},
eM(a,b,c,d){return this.bB(!0,a,t.x.a(b),c,d)},
kS(a,b){return this.eM(null,a,b,null)},
kT(a,b){return this.eM(null,a,!0,b)},
ho(a,b){return this.l5(a.d,a.e,b,a.a,a.b,a.c)},
eO(a){return this.ho(a,!0)},
hn(a,b,c,d,e,f,g,h){var s=t.x
s.a(e)
s.a(g)
s.a(a)
this.cS(d,e,c)
this.bB(!1,f,g,c,h)
this.eM(null,a,c,b)},
l5(a,b,c,d,e,f){return this.hn(a,b,c,null,d,null,e,f)},
l4(a,b,c){return this.hn(null,null,!0,a,null,b,null,c)},
h9(){var s=J.Z(this.bx(),0)
return s},
c7(a,b){this.cR(a,!0)
this.cT(a,!0)
this.hz(a,!0)},
ae(a){return this.c7(a,!0)},
jw(a,b){var s,r,q="submobjects",p="removeWhere",o=a.bx(),n=a.cP(),m=a.gap(),l=a.by(!0),k=a.x
this.ho(new A.ci(o,n,m,l,k),!1)
o=this.d
o===$&&A.b(q)
n=a.d
n===$&&A.b(q)
if(o.length===0)return
else if(n.length===0)s=A.a([a],t.r)
else s=n
n=A.w(o).h("B(1)").a(new A.kW())
if(!!o.fixed$length)A.N(A.T(p))
B.a.fb(o,n,!0)
n=A.w(s).h("B(1)").a(new A.kX())
if(!!s.fixed$length)A.N(A.T(p))
B.a.fb(s,n,!0)
for(n=t.j,n=A.tN(o,s,n,n),n=A.hd([n.a,n.b],!1,t.z),n=new A.au(new A.aS(n,A.w(n).h("aS<1,l<R>>")),t.pn),n=n.gH(n);n.n();){r=n.b
if(r==null)r=A.N(A.av("No element"))
o=r.length
if(0>=o)return A.c(r,0)
m=r[0]
if(1>=o)return A.c(r,1)
m.jw(r[1],!0)}},
jv(a){return this.jw(a,!0)},
d9(a,b){var s,r,q,p=this,o=1-a,n=t.O,m=A.a([],n)
for(s=J.F(p.bx());s.n();){r=s.gq()
q=r.d
m.push(new A.P(r.a,r.b,r.c,q*o))}p.hk(m,!0)
m=A.a([],n)
for(s=J.F(p.cP());s.n();){r=s.gq()
q=r.d
m.push(new A.P(r.a,r.b,r.c,q*o))}p.l0(m,!0)
n=A.a([],n)
for(m=J.F(p.by(!0));m.n();){s=m.gq()
r=s.d
n.push(new A.P(s.a,s.b,s.c,r*o))}p.kS(n,!0)
p.lA(a,!0)},
ja(a){return this.d9(a,!0)},
bx(){var s=this.ax
return s==null?A.a([B.m],t.O):s},
by(a){var s=a?this.ch:this.ay
return s==null||J.cu(s)?A.a([B.m],t.O):s},
cP(){return this.by(!1)},
kc(){var s,r,q,p,o,n=this.ai(B.d),m=A.a([],t.b)
for(s=[B.j,B.p,B.n],r=t.n,q=0;q<3;++q){p=this.ai(s[q]).M(0,n)
m.push(A.a([p.a,p.b,p.c],r))}o=B.j.bg(A.aR(null,m).gjU())
return new A.O(n.M(0,o),n.J(0,o),t.iu)},
hj(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=t.y
g.a(a)
g.a(b)
g.a(c)
g.a(d)
s=h.at
r=a.length
q=A.a([],t.l)
for(r=A.K(s*r,0,1),p=r.length,o=0;o<r.length;r.length===p||(0,A.e)(r),++o)q.push(B.d)
h.saJ(g.a(q))
n=A.a([a,b,c,d],t.ng)
for(g=A.K(s,0,1),r=g.length,q=t.S,o=0;o<g.length;g.length===r||(0,A.e)(g),++o){m=g[o]
l=B.a.j(n,m)
p=h.r
p===$&&A.b("points")
for(p=A.fl(A.K(J.M(p),m,s),q),k=p.length,j=0;j<p.length;p.length===k||(0,A.e)(p),++j){i=p[j]
J.iK(h.r,i.b,l[B.e.a6(i.a,l.length)])}}},
mO(a,b,c){var s,r,q,p=this
p.aB("addCubicBezierCurveTo")
s=p.r
s===$&&A.b("points")
r=t.l
q=t.y
if(B.e.a6(J.M(s),p.at)===1){s=q.a(A.a([a,b,c],r))
J.am(p.r,s)}else{s=q.a(A.a([J.aL(p.r),a,b,c],r))
J.am(p.r,s)}},
dQ(a){var s,r,q,p,o,n,m=[]
for(s=A.iH(this.at,1,0).ji(),r=s.length,q=0;q<s.length;s.length===r||(0,A.e)(s),++q){p=s[q]
o=this.r
o===$&&A.b("points")
m.push(J.aL(o).A(0,1-p).J(0,a.A(0,p)))}s=m.length
if(1>=s)return A.c(m,1)
r=t.V
o=r.a(m[1])
if(2>=s)return A.c(m,2)
n=r.a(m[2])
if(3>=s)return A.c(m,3)
return this.mO(o,n,r.a(m[3]))},
eN(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
t.y.a(a)
s=A.iH(this.at,1,0).aZ(0)
r=t.V
q=A.iQ(A.d1(a,r))
p=A.iQ(A.na(a,r))
r=A.a([],t.fp)
for(o=s.length,n=0;n<s.length;s.length===o||(0,A.e)(s),++n){m=s[n]
r.push(p.A(0,1-m).J(0,q.A(0,m)))}o=A.a([],t.ng)
for(l=r.length,k=t.l,n=0;n<r.length;r.length===l||(0,A.e)(r),++n){j=r[n]
i=A.a([],k)
h=j.a
h===$&&A.b("values")
g=h.length
f=0
for(;f<h.length;h.length===g||(0,A.e)(h),++f){e=h[f]
d=J.Y(e)
i.push(new A.f(d.j(e,0),d.j(e,1),d.j(e,2)))}o.push(i)}r=o.length
if(0>=r)return A.c(o,0)
l=o[0]
if(1>=r)return A.c(o,1)
k=o[1]
if(2>=r)return A.c(o,2)
i=o[2]
if(3>=r)return A.c(o,3)
this.hj(l,k,i,o[3])},
fs(a,b){var s=this.as,r=b.a
if(Math.abs(a.a-r)>s+0.00001*Math.abs(r))return!1
r=b.b
if(Math.abs(a.b-r)>s+0.00001*Math.abs(r))return!1
return!0},
iW(a,b){var s
if(!this.fs(a,b))return!1
s=b.c
if(Math.abs(a.c-s)>this.as+0.00001*Math.abs(s))return!1
return!0},
eA(a){var s,r,q,p,o,n,m,l={}
l.a=a
t.y.a(a)
l.a=a
s=A.jV(a,new A.kQ(l,B.e.a6(J.M(a),this.at)),t.V)
l.a=A.h(s,!0,s.$ti.h("j.E"))
s=A.a([],t.ez)
for(r=A.K(J.M(l.a),0,4),q=r.length,p=t.cn,o=0;o<r.length;r.length===q||(0,A.e)(r),++o){n=r[o]
m=l.a
if(typeof n!=="number")return n.J()
s.push(new A.ds(J.Z(m,n+0),J.Z(l.a,n+1),J.Z(l.a,n+2),J.Z(l.a,n+3),p))}return s},
hW(a,b){var s,r,q,p,o,n,m,l,k
t.y.a(a)
t.gw.a(b)
s=this.at
r=A.K(a.length,s,s)
q=A.w(r)
q=A.h(new A.aq(r,q.h("B(1)").a(b),q.h("aq<1>")),!0,t.S)
q.push(a.length)
r=A.a([0],t.t)
B.a.N(r,q)
p=A.a([],t.ng)
for(r=new A.au(A.a([r,q],t.fC),t.lb),r=r.gH(r),q=A.w(a),o=q.c,q=q.h("aK<1>");r.n();){n=r.b
if(n==null)n=A.N(A.av("No element"))
if(1>=n.length)return A.c(n,1)
m=n[1]
l=n[0]
if(typeof m!=="number")return m.M()
if(typeof l!=="number")return A.bB(l)
if(m-l>=s){A.a0(l)
A.a0(m)
A.aF(l,m,a.length)
k=new A.aK(a,l,m,q)
k.cq(a,l,m,o)
p.push(k.aC(0))}}return p},
eG(a){t.y.a(a)
return this.hW(a,new A.kT(this,a))},
kj(a){t.y.a(a)
return this.hW(a,new A.kS(this,a))},
em(a){var s,r,q,p=this.r
p===$&&A.b("points")
s=this.at
r=A.n2(0,B.e.b2(J.M(p),s),a)
q=r.a
return A.mY(J.ni(this.r,s*q,s*(q+1)).aC(0)).$1(r.b)},
f6(a){var s=this.r
s===$&&A.b("points")
s=A.jV(s,new A.kM(this,a),t.V)
return A.h(s,!0,s.$ti.h("j.E"))},
k8(){var s=this,r=s.r
r===$&&A.b("points")
if(J.M(r)===1)return s.r
r=t.b5
r=A.nx(A.h(new A.au(A.a([s.f6(0),s.f6(s.at-1)],t.ng),r),!0,r.h("j.E")),t.V)
return A.h(r,!0,r.$ti.h("j.E"))},
eF(){var s,r,q,p=A.a([],t.l)
for(s=this.eI(),r=s.length,q=0;q<s.length;s.length===r||(0,A.e)(s),++q)B.a.N(p,s[q].k8())
return p},
ka(){var s,r,q,p,o,n,m=this.r
m===$&&A.b("points")
s=4*B.e.b2(J.M(m),this.at)+1
m=t.l
r=A.a([],m)
for(q=A.iH(s,1,0).aZ(0),p=q.length,o=0;o<q.length;q.length===p||(0,A.e)(q),++o)r.push(this.em(q[o]))
m=A.a([],m)
for(q=A.K(s-1,0,1),p=q.length,o=0;o<q.length;q.length===p||(0,A.e)(q),++o){n=q[o]
if(typeof n!=="number")return n.J()
m.push(B.a.j(r,n+1).M(0,B.a.j(r,n)))}r=t.aQ
return A.mb(A.h(new A.I(m,t.eL.a(new A.kR()),r),!0,r.h("D.E")),t.W)},
iE(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1="points"
t.bX.a(a2)
a0.n3(a2)
s=a0.r
s===$&&A.b(a1)
s=J.M(s)
r=a2.r
r===$&&A.b(a1)
if(s===J.M(r))return
for(s=[a0,a2],r=t.l,q=t.y,p=0;p<2;++p){o=s[p]
n=o.r
n===$&&A.b(a1)
if(J.cu(n)){n=q.a(A.a([o.ai(B.d)],r))
J.am(o.r,n)}if(B.e.a6(J.M(o.r),o.at)===1)o.dQ(J.aL(o.r))}s=t.V
m=a0.eG(A.h(a0.r,!0,s))
l=a2.eG(A.h(a2.r,!0,s))
k=Math.max(m.length,l.length)
j=A.a([],r)
i=A.a([],r)
h=a0.at
g=new A.kP(h)
for(s=A.K(k,0,1),r=s.length,p=0;p<s.length;s.length===r||(0,A.e)(s),++p){f=s[p]
e=g.$2(m,f)
d=g.$2(l,f)
n=J.Y(d)
c=J.Y(e)
b=Math.max(0,B.e.b2(n.gm(d)-c.gm(e),h))
a=Math.max(0,B.e.b2(c.gm(e)-n.gm(d),h))
e=a0.fP(b,e)
d=a0.fP(a,d)
B.a.N(j,e)
B.a.N(i,d)}a0.saJ(q.a(j))
a2.saJ(q.a(i))},
fP(a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6="No element"
t.y.a(a8)
if(a8.length===1){s=A.a([],t.l)
for(r=A.K(this.at*a7,0,1),q=r.length,p=0;p<r.length;r.length===q||(0,A.e)(r),++p)B.a.N(s,a8)
return s}o=this.eA(a8)
n=o.length
m=n+a7
s=t.t
r=A.a([],s)
for(q=A.K(m,0,1),l=q.length,p=0;p<q.length;q.length===l||(0,A.e)(q),++p){k=q[p]
if(typeof k!=="number")return k.A()
r.push(B.h.b2(k*n,m))}q=A.a([],s)
for(l=A.K(n,0,1),j=l.length,i=t.S,p=0;p<l.length;l.length===j||(0,A.e)(l),++p){k=l[p]
h=A.a([],s)
for(g=r.length,f=J.bo(k),e=0;e<r.length;r.length===g||(0,A.e)(r),++e)h.push(f.V(k,r[e])?1:0)
q.push(A.mb(h,i))}d=A.a([],t.l)
for(s=new A.au(A.a([o,q],t.bo),t.c2),s=s.gH(s),r=t.W,q=t.b,l=t.lx,j=t.z,i=t.cn;s.n();){c=s.b
if(c==null)c=A.N(A.av(a6))
h=c.length
if(0>=h)return A.c(c,0)
b=i.a(c[0])
if(1>=h)return A.c(c,1)
a=A.iH(A.a0(c[1])+1,1,0).aZ(0)
for(h=new A.au(A.a([a,A.d1(a,r)],q),l),h=h.gH(h),g=b.a,f=b.b,a0=b.c,a1=b.d;h.n();){a2=h.b
if(a2==null)a2=A.N(A.av(a6))
a3=A.hd([g,f,a0,a1],!1,j)
a4=a2.length
if(0>=a4)return A.c(a2,0)
a5=a2[0]
if(1>=a4)return A.c(a2,1)
B.a.N(d,A.m8(new A.aS(a3,A.w(a3).h("aS<1,f>")),a5,a2[1]))}}return d},
n3(a){var s,r,q,p,o,n,m,l,k=new A.kN(),j=new A.kO()
for(s=["fillColors","strokeColors","backgroundStrokeColors"],r=t.G,q=0;q<3;++q){p=s[q]
o=k.$2(p,this)
n=k.$2(p,a)
m=J.Y(o)
l=J.Y(n)
if(m.gm(o)>l.gm(n))j.$3(p,a,A.d0(n,m.gm(o),r))
else if(l.gm(n)>m.gm(o))j.$3(p,this,A.d0(o,l.gm(n),r))}},
hd(){var s=this.ai(B.d),r=A.o4(s)
r.jv(this)
return r},
fQ(a,b,c){var s,r=this,q=t.bX
q.a(a)
q.a(b)
r.scf(A.n3(a.bx(),b.bx(),c))
r.sbS(A.n3(a.cP(),b.cP(),c))
r.scz(A.n3(a.by(!0),b.by(!0),c))
q=t.W
r.sap(A.p1(a.gap(),b.gap(),c,q))
r.sne(A.p1(a.x,b.x,c,q))
s=new A.kV()
if(c===1){q=b.ax
r.scf(q!=null?s.$1(q):null)
q=b.ay
r.sbS(q!=null?s.$1(q):null)
q=b.ch
r.scz(q!=null?s.$1(q):null)
r.sap(b.gap())
r.x=b.x}},
oY(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e="points"
if(b<=0&&c>=1){s=a.r
s===$&&A.b(e)
f.saJ(t.y.a(A.h(s,!0,t.V)))
return}s=a.r
s===$&&A.b(e)
r=t.y
q=a.eA(r.a(A.h(s,!0,t.V)))
p=q.length
o=A.n2(0,p,b)
n=A.n2(0,p,c)
m=o.a
l=o.b
k=n.a
j=n.b
f.saJ(r.a(A.a([],t.l)))
if(p===0)return
s=q.length
if(m===k){if(m>>>0!==m||m>=s)return A.c(q,m)
s=J.fo(q[m])
s=r.a(A.m8(new A.aS(s,A.w(s).h("aS<1,f>")),l,j))
r=f.r
r===$&&A.b(e)
J.am(r,s)}else{if(m>>>0!==m||m>=s)return A.c(q,m)
s=J.fo(q[m])
s=r.a(A.m8(new A.aS(s,A.w(s).h("aS<1,f>")),l,1))
i=f.r
i===$&&A.b(e)
J.am(i,s)
for(s=m+1,A.aF(s,k,q.length),s=A.bd(q,s,k,A.w(q).c),i=s.$ti,s=new A.L(s,s.gm(s),i.h("L<D.E>")),h=t.z,i=i.h("D.E");s.n();){g=s.d
if(g==null)g=i.a(g)
g=A.hd([g.a,g.b,g.c,g.d],!1,h)
g=r.a(new A.aS(g,A.w(g).h("aS<1,f>")))
J.am(f.r,g)}if(k>>>0!==k||k>=q.length)return A.c(q,k)
s=J.fo(q[k])
s=r.a(A.m8(new A.aS(s,A.w(s).h("aS<1,f>")),0,j))
J.am(f.r,s)}},
eI(){var s,r,q,p,o=A.a([],t.hJ)
for(s=this.bN(),r=s.length,q=0;q<s.length;s.length===r||(0,A.e)(s),++q){p=s[q]
if(p instanceof A.R)o.push(p)}return o},
sap(a){this.w=A.co(a)},
sne(a){this.x=A.co(a)},
scf(a){this.ax=t.x.a(a)},
sbS(a){this.ay=t.x.a(a)},
scz(a){this.ch=t.x.a(a)},
gap(){return this.w},
gdV(){return this.y}}
A.a3.prototype={
$1(a){return t.G.a(a).t()},
$S:7}
A.a4.prototype={
$1(a){return t.G.a(a).t()},
$S:7}
A.a5.prototype={
$1(a){return t.G.a(a).t()},
$S:7}
A.kW.prototype={
$1(a){return!(t.j.a(a) instanceof A.R)},
$S:13}
A.kX.prototype={
$1(a){return!(t.j.a(a) instanceof A.R)},
$S:13}
A.kQ.prototype={
$2(a,b){t.V.a(b)
return a<J.M(this.a.a)-this.b},
$S:27}
A.kT.prototype={
$1(a){var s,r,q
A.a0(a)
s=this.b
r=a-1
q=s.length
if(!(r>=0&&r<q))return A.c(s,r)
r=s[r]
if(!(a>=0&&a<q))return A.c(s,a)
return!this.a.iW(r,s[a])},
$S:11}
A.kS.prototype={
$1(a){var s,r,q
A.a0(a)
s=this.b
r=a-1
q=s.length
if(!(r>=0&&r<q))return A.c(s,r)
r=s[r]
if(!(a>=0&&a<q))return A.c(s,a)
return!this.a.fs(r,s[a])},
$S:11}
A.kM.prototype={
$2(a,b){t.V.a(b)
return B.e.a6(a,this.a.at)===this.b},
$S:27}
A.kR.prototype={
$1(a){return Math.sqrt(t.V.a(a).b1())},
$S:26}
A.kP.prototype={
$2(a,b){var s,r,q,p
t.ls.a(a)
s=a.length
if(b>=s){s=A.a([],t.l)
for(r=A.K(this.a,0,1),q=r.length,p=0;p<r.length;r.length===q||(0,A.e)(r),++p)s.push(B.a.gu(B.a.gu(a)))
return s}if(!(b>=0))return A.c(a,b)
return a[b]},
$S:56}
A.kN.prototype={
$2(a,b){switch(a){case"fillColors":return b.bx()
case"strokeColors":return b.cP()
case"backgroundStrokeColors":return b.by(!1)
default:throw A.d(u.v+a)}},
$S:57}
A.kO.prototype={
$3(a,b,c){t.ev.a(c)
switch(a){case"fillColors":b.scf(c)
break
case"strokeColors":b.sbS(c)
break
case"backgroundStrokeColors":b.scz(c)
break
default:throw A.d(u.v+a)}},
$S:58}
A.kV.prototype={
$1(a){var s=t.G
return A.h(J.u(t.ev.a(a),new A.kU(),s),!0,s)},
$S:59}
A.kU.prototype={
$1(a){return t.G.a(a).t()},
$S:7}
A.ci.prototype={}
A.bZ.prototype={
hF(a){var s=a==null?A.a([],t.r):a
this.aW(t.a.a(s))},
t(){return A.r0(this)}}
A.eO.prototype={
t(){return A.r2(this)}}
A.dI.prototype={
l6(a){this.d=a}}
A.fI.prototype={
ev(a){var s,r,q=this.d
q===$&&A.b("display")
s=q.b
s===$&&A.b("camera")
r=q.dS(a)
q=this.e
q===$&&A.b("ctx")
B.w.sfL(q,r.dn())
q=s.c
s=s.d
this.e.fillRect(0-q/2,0-s/2,q,s)},
pq(a){var s,r,q,p,o,n,m,l,k=this,j=a.r
j===$&&A.b("points")
j=t.y.a(A.h(j,!0,t.V))
s=k.d
s===$&&A.b("display")
s=s.b
s===$&&A.b("camera")
r=s.jT(a,j)
if(r.length===0)return
q=a.kj(r)
for(j=q.length,p="",o=0;o<q.length;q.length===j||(0,A.e)(q),++o)p+=k.kk(a,q[o])
n=A.qp(p)
k.iK(n,a,!0)
m=a.bx()
if(J.M(m)>1){j=k.e
j===$&&A.b("ctx")
B.w.sfL(j,k.j1(a,m))}else{l=k.d.dS(J.Z(a.bx(),0))
j=k.e
j===$&&A.b("ctx")
B.w.sfL(j,l.dn())}j=k.e
j===$&&A.b("ctx")
j.fill(n)
k.iK(n,a,!1)},
kk(a,b){var s,r,q,p,o,n,m,l,k,j
t.y.a(b)
s=a.eA(b)
r=J.aP(b)
q=r.gaq(b)
p="M "+A.k(q.a)+" "+A.k(q.b)
o=a.fs(r.gaq(b),r.gu(b))
for(r=s.length,n=0;n<r;++n){m=s[n]
l=m.b
k=m.c
j=m.d
p+=" C "+A.k(l.a)+" "+A.k(l.b)+" "+A.k(k.a)+" "+A.k(k.b)+" "+A.k(j.a)+" "+A.k(j.b)}return o?p+" Z":p},
j1(a,b){var s,r,q,p,o,n,m,l,k,j,i
t.ev.a(b)
s=a.kc()
r=t.y.a(A.a([s.a,s.b],t.l))
q=this.d
q===$&&A.b("display")
q=q.b
q===$&&A.b("camera")
p=q.jT(a,r)
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
l=A.lN(m+1,0,m).aZ(0)
for(r=A.K(o.gm(b),0,1),n=r.length,k=0;k<r.length;r.length===n||(0,A.e)(r),++k){j=r[k]
i=this.d.dS(o.j(b,j))
q.addColorStop(B.a.j(l,j),i.dn())}return q},
iK(a,b,c){var s,r,q,p,o,n=this,m=c?b.x:b.gap()
if(m===0)return
s=b.by(c)
r=n.d
r===$&&A.b("display")
r=r.b
r===$&&A.b("camera")
r=r.c
q=n.e
q===$&&A.b("ctx")
q.lineWidth=m*0.01*(r/14.222222222222221)
r=J.aP(s)
p=r.cC(s,new A.j6())
if(r.gag(s)||p)return
if(r.gm(s)>1)B.w.shx(n.e,n.j1(b,s))
else{o=n.d.dS(J.aG(b.by(c)))
B.w.shx(n.e,o.dn())}B.w.ln(n.e,a)}}
A.j6.prototype={
$1(a){return t.G.a(a).d===0},
$S:60}
A.hD.prototype={
lQ(){this.k2=new A.j3(B.aa)
var s=new A.ir()
s.lS(0)
this.e=s
this.shG(t.a.a(A.a([],t.r)))},
cN(){var s=0,r=A.cY(t.z),q=1,p,o=this,n,m,l,k
var $async$cN=A.d_(function(a,b){if(a===1){p=b
s=q}while(true)switch(s){case 0:l=o.w
l===$&&A.b("display")
l.dU()
s=2
return A.c1(null,$async$cN)
case 2:q=4
s=7
return A.c1(o.cB(),$async$cN)
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
case 6:l=o.k2
l===$&&A.b("camera")
m=l.r
m===$&&A.b("display")
m=m.a
m===$&&A.b("renderer")
m.ev(l.f)
l=o.k2
m=o.d
m===$&&A.b("mobjects")
l.fZ(m)
s=8
return A.c1(null,$async$cN)
case 8:o.w.pJ()
return A.cW(null,r)
case 1:return A.cV(p,r)}})
return A.cX($async$cN,r)},
cl(a){var s,r,q=this.d
q===$&&A.b("mobjects")
s=q.length
r=0
for(;r<q.length;q.length===s||(0,A.e)(q),++r)q[r].h4(a)},
aW(a){var s
t.a.a(a)
this.pt(a)
s=this.d
s===$&&A.b("mobjects")
B.a.ed(s,0,a)},
pu(a,b){var s,r,q=this,p=t.a
p.a(b)
s=A.h(b,!0,t.j)
r=q.k2
r===$&&A.b("camera")
B.a.N(s,r.fG(b))
r=q.d
r===$&&A.b("mobjects")
q.shG(p.a(q.kh(r,s)))},
pt(a){return this.pu(!0,a)},
kh(a,b){var s,r=t.a
r.a(a)
r.a(b)
s=A.a([],t.r)
new A.kp(s).$2(a,A.mt(b,A.w(b).c))
return s},
eo(a){var s=0,r=A.cY(t.z),q=this,p,o,n,m
var $async$eo=A.d_(function(b,c){if(b===1)return A.cV(c,r)
while(true)switch(s){case 0:p=0
case 2:if(!(p<a.a)){s=3
break}o=q.w
o===$&&A.b("display")
s=4
return A.c1(o.dj(),$async$eo)
case 4:n=c
p+=n
o=a.a
a.cl(n)
a.dh(p/o)
q.cl(n)
o=q.k2
o===$&&A.b("camera")
m=o.r
m===$&&A.b("display")
m=m.a
m===$&&A.b("renderer")
m.ev(o.f)
o=q.k2
m=q.d
m===$&&A.b("mobjects")
o.fZ(m)
q.a+=n
s=2
break
case 3:return A.cW(null,r)}})
return A.cX($async$eo,r)},
el(a,b){var s=0,r=A.cY(t.z),q=this,p,o,n,m
var $async$el=A.d_(function(c,d){if(c===1)return A.cV(d,r)
while(true)switch(s){case 0:m=q.k2
m===$&&A.b("camera")
p=q.d
p===$&&A.b("mobjects")
o=m.fG(p)
b.d4()
n=b.r
if(!B.a.F(o,n)){q.aW(t.a.a(A.a([n],t.r)))
B.a.N(o,n.bN())}s=2
return A.c1(q.eo(b),$async$el)
case 2:b.fM()
b.d5(q)
q.cl(0)
return A.cW(null,r)}})
return A.cX($async$el,r)},
dr(a){var s=0,r=A.cY(t.z),q=this,p,o,n,m
var $async$dr=A.d_(function(b,c){if(b===1)return A.cV(c,r)
while(true)switch(s){case 0:p=0
case 2:if(!(p<a)){s=3
break}o=q.w
o===$&&A.b("display")
s=4
return A.c1(o.dj(),$async$dr)
case 4:n=c
p+=n
q.cl(n)
o=q.k2
o===$&&A.b("camera")
m=o.r
m===$&&A.b("display")
m=m.a
m===$&&A.b("renderer")
m.ev(o.f)
o=q.k2
m=q.d
m===$&&A.b("mobjects")
o.fZ(m)
q.a+=n
s=2
break
case 3:return A.cW(null,r)}})
return A.cX($async$dr,r)},
shG(a){this.d=t.a.a(a)}}
A.kp.prototype={
$2(a,b){var s,r,q,p,o,n
t.a.a(a)
t.ns.a(b)
for(s=a.length,r=this.a,q=0;q<a.length;a.length===s||(0,A.e)(a),++q){p=a[q]
if(b.F(0,p))continue
o=p.bN()
n=b.oC(0,A.mt(o,A.w(o).c))
if(n.a!==0){o=p.d
o===$&&A.b("submobjects")
this.$2(o,n)}else B.a.p(r,p)}},
$S:77}
A.mc.prototype={
$2(a,b){var s=this.a
return s.a(s.a(a)+s.a(b))},
$S(){return this.a.h("0(0,0)")}}
A.ma.prototype={
$1(a){return A.a0(a)/this.a*this.b},
$S:62}
A.md.prototype={
$2(a,b){this.a.a(b)
return a!==0},
$S(){return this.a.h("B(i,0)")}}
A.m2.prototype={
$1(a){return t.G.a(a).aC(0)},
$S:29}
A.m3.prototype={
$1(a){return t.G.a(a).aC(0)},
$S:29}
A.m4.prototype={
$1(a){var s
t.bd.a(a)
s=J.Y(a)
return new A.P(s.j(a,0),s.j(a,1),s.j(a,2),s.j(a,3))},
$S:64}
A.lP.prototype={
$1(a){var s,r,q,p,o,n,m,l=A.a([],t.l)
for(s=A.fl(this.a,t.V),r=s.length,q=1-a,p=this.b,o=0;o<s.length;s.length===r||(0,A.e)(s),++o){n=s[o]
m=n.a
if(typeof m!=="number")return A.bB(m)
l.push(J.d2(n.b,Math.pow(q,p-m)*Math.pow(a,m)*A.oQ(p,m,!0)))}return B.a.ba(l,new A.lO())},
$S:65}
A.lO.prototype={
$2(a,b){var s=t.V
return s.a(a).J(0,s.a(b))},
$S:66}
A.P.prototype={
t(){var s=this
return new A.P(s.a,s.b,s.c,s.d)},
aC(a){var s=this,r=A.a([s.a,s.b,s.c],t.n)
r.push(s.d)
return r},
dn(){var s=this
return"rgba("+B.h.bt(s.a*255)+", "+B.h.bt(s.b*255)+", "+B.h.bt(s.c*255)+", "+A.k(s.d)+")"},
l(a){return this.dn()}}
A.lC.prototype={
$1(a){return A.cr(a,16)/255},
$S:67}
A.d5.prototype={
V(a,b){var s,r=this
if(b==null)return!1
if(!(b instanceof A.d5&&r.a===b.a&&r.b===b.b))s=typeof b=="number"&&r.a===b&&r.b===0
else s=!0
return s}}
A.bu.prototype={
l(a){return"EventType."+this.b}}
A.b6.prototype={}
A.jh.prototype={
gcd(){var s=this.a
s===$&&A.b("eventListeners")
return s},
lP(){var s,r,q=A.aW(t.cY,t.oR)
for(s=t.fO,r=0;r<6;++r)q.v(0,B.bp[r],A.a([],s))
this.sm0(t.fY.a(q))},
cs(a,b,c){var s,r,q
A.iE(c,t.e,"IEvent","_dispatchOnListnersList")
c.a(a)
s=A.h(c.h("l<b7<0>>").a(b),!0,c.h("b7<0>"))
r=!1
while(!0){if(!(!r&&s.length!==0))break
q=B.a.gu(s)
B.a.a_(s,q)
q.$ti.c.a(a)
r=q.a.$1(a)}},
dY(a){var s,r=this
switch(a.a){case B.G:t.m6.a(a)
s=r.gcd().j(0,B.G)
s.toString
r.cs(a,s,t.e)
break
case B.B:t.oJ.a(a)
s=r.gcd().j(0,B.B)
s.toString
r.cs(a,s,t.e)
break
case B.x:t.f.a(a)
s=r.gcd().j(0,B.x)
s.toString
r.cs(a,s,t.e)
break
case B.C:t.gn.a(a)
s=r.gcd().j(0,B.C)
s.toString
r.cs(a,s,t.e)
break
case B.R:t.lY.a(a)
s=r.gcd().j(0,B.R)
s.toString
r.cs(a,s,t.e)
break
case B.S:t.am.a(a)
s=r.gcd().j(0,B.S)
s.toString
r.cs(a,s,t.e)
break}},
sm0(a){this.a=t.fY.a(a)}}
A.b7.prototype={}
A.hf.prototype={}
A.eo.prototype={}
A.ca.prototype={}
A.cb.prototype={}
A.c9.prototype={}
A.kc.prototype={}
A.kz.prototype={
$1(a){return A.iC(a)!=null},
$S:8}
A.lQ.prototype={
$2(a,b){return A.a0(a)*A.a0(b)},
$S:10}
A.lR.prototype={
$2(a,b){return A.a0(a)*A.a0(b)},
$S:10}
A.bs.prototype={
J(a,b){var s,r
if(typeof b=="number"){s=this.b
s===$&&A.b("shape")
r=A.fA(b,s)}else{t.A.a(b)
r=b}return this.cG(0,new A.iW(r))},
A(a,b){var s,r
if(typeof b=="number"){s=this.b
s===$&&A.b("shape")
r=A.fA(b,s)}else{t.A.a(b)
r=b}return this.cG(0,new A.iX(r))},
cG(a,b){var s,r,q
t.iJ.a(b)
s=this.a
s===$&&A.b("values")
s=A.fl(s,t.bd)
r=A.w(s)
q=r.h("I<1,l<t>>")
q=A.h(new A.I(s,r.h("l<t>(1)").a(new A.iV(b)),q),!0,q.h("D.E"))
r=this.b
r===$&&A.b("shape")
return A.aR(r,q)},
bP(a){var s,r
t.o.a(a)
s=a.a
r=this.a
r===$&&A.b("values")
if(s>>>0!==s||s>=r.length)return A.c(r,s)
return J.Z(r[s],a.b)},
bi(a,b){var s,r,q,p,o
t.o.a(a)
s=a.a
r=this.b
r===$&&A.b("shape")
q=r.a
if(typeof s!=="number")return s.a6()
if(typeof q!=="number")return A.bB(q)
p=B.e.a6(s,q)
q=a.b
r=r.b
if(typeof q!=="number")return q.a6()
if(typeof r!=="number")return A.bB(r)
o=B.h.a6(q,r)
r=this.a
r===$&&A.b("values")
if(!(p>=0&&p<r.length))return A.c(r,p)
J.iK(r[p],o,b)},
mB(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.b
e===$&&A.b("shape")
s=e.a
if(typeof s!=="number")return s.M()
e=e.b
if(typeof e!=="number")return e.M()
r=A.a([],t.b)
for(q=A.K(f.b.a,0,1),p=q.length,o=f.a,n=t.n,m=0;m<q.length;q.length===p||(0,A.e)(q),++m){l=q[m]
if(!J.W(l,a)){k=A.a([],n)
for(j=A.K(f.b.a,0,1),i=j.length,h=0;h<j.length;j.length===i||(0,A.e)(j),++h){g=j[h]
if(!J.W(g,b)){o===$&&A.b("values")
k.push(J.Z(B.a.j(o,l),g))}}r.push(k)}}return A.aR(new A.O(s-1,e-1,t.o),r)},
hb(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.b
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
if(typeof p!=="number")return p.M()
h=h.b
if(typeof h!=="number")return h.M()
o=new A.O(p-1,h-1,t.o)
h=A.a([],t.n)
for(p=A.K(i.b.a,0,1),n=p.length,m=i.a,l=0;l<p.length;p.length===n||(0,A.e)(p),++l){k=p[l]
if(typeof k!=="number")return k.a6()
j=B.h.a6(k,2)===0?1:-1
m===$&&A.b("values")
if(0>=m.length)return A.c(m,0)
h.push(j*A.fA(J.Z(m[0],k),o).A(0,i.mB(0,k)).hb())}return A.mb(h,t.W)},
kd(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="values"
if(this.hb()===0)throw A.d("This matrix is not inversible")
s=this.b
s===$&&A.b("shape")
r=s.a
q=s.b
p=this.t()
o=A.dK(r)
for(s=A.K(q,0,1),n=s.length,m=r-1,l=q-1,k=p.a,j=o.a,i=t.o,h=0;h<s.length;s.length===n||(0,A.e)(s),++h){g=s[h]
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
a1=b.j(a,g)
for(a2=g;a2<q;++a2){a3=b.j(a,a2)
if(typeof a3!=="number")return a3.bv()
b.v(a,a2,a3/a1)}for(a3=J.Y(a0),a2=l;a2>=0;--a2){a4=a3.j(a0,a2)
if(typeof a4!=="number")return a4.bv()
a3.v(a0,a2,a4/a1)}for(a2=g+1,e=m;e>=0;--e)if(e!==g){if(!(e<k.length))return A.c(k,e)
a5=k[e]
if(!(e<j.length))return A.c(j,e)
a6=j[e]
a4=J.Y(a5)
a1=a4.j(a5,g)
for(a7=a2;a7!==q;++a7){a8=a4.j(a5,a7)
a9=b.j(a,a7)
if(typeof a9!=="number")return a9.A()
if(typeof a8!=="number")return a8.M()
a4.v(a5,a7,a8-a9*a1)}for(a4=J.Y(a6),a7=l;a7>0;--a7){a8=a4.j(a6,a7)
a9=a3.j(a0,a7)
if(typeof a9!=="number")return a9.A()
if(typeof a8!=="number")return a8.M()
a4.v(a6,a7,a8-a9*a1);--a7
a9=a4.j(a6,a7)
a8=a3.j(a0,a7)
if(typeof a8!=="number")return a8.A()
if(typeof a9!=="number")return a9.M()
a4.v(a6,a7,a9-a8*a1)}if(a7===0){a8=a4.j(a6,0)
a9=a3.j(a0,0)
if(typeof a9!=="number")return a9.A()
if(typeof a8!=="number")return a8.M()
a4.v(a6,0,a8-a9*a1)}}}return o},
aZ(a){var s,r,q=this.a
q===$&&A.b("values")
s=A.w(q)
r=s.h("I<1,t>")
return A.h(new A.I(q,s.h("t(1)").a(new A.iT(a)),r),!0,r.h("D.E"))},
gjU(){return this.cG(0,new A.iY(this))},
bg(a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="values",a5=this.b
a5===$&&A.b("shape")
s=a5.a
r=a5.b
a5=a6.b
a5===$&&A.b("shape")
q=a5.b
p=A.fA(0,new A.O(s,q,t.o))
for(a5=A.K(s,0,1),o=a5.length,n=p.a,m=this.a,l=a6.a,k=0;k<a5.length;a5.length===o||(0,A.e)(a5),++k){j=a5[k]
for(i=A.K(q,0,1),h=i.length,g=0;g<i.length;i.length===h||(0,A.e)(i),++g){f=i[g]
for(e=A.K(r,0,1),d=e.length,c=0;c<e.length;e.length===d||(0,A.e)(e),++c){b=e[c]
n===$&&A.b(a4)
a=B.a.j(n,j)
a0=J.Y(a)
a1=a0.j(a,f)
m===$&&A.b(a4)
a2=J.Z(B.a.j(m,j),b)
l===$&&A.b(a4)
a3=J.Z(B.a.j(l,b),f)
if(typeof a2!=="number")return a2.A()
if(typeof a3!=="number")return A.bB(a3)
if(typeof a1!=="number")return a1.J()
a0.v(a,f,a1+a2*a3)}}}return p},
t(){return this.n7(new A.iS())},
n7(a){return this.cG(0,new A.iR(t.f3.a(a)))},
ji(){var s,r,q,p=A.a([],t.n),o=this.a
o===$&&A.b("values")
s=o.length
r=0
for(;r<o.length;o.length===s||(0,A.e)(o),++r)for(q=J.F(o[r]);q.n();)p.push(q.gq())
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
for(;o<q.length;q.length===p||(0,A.e)(q),++o)for(n=J.F(q[o]);n.n();)r.push(B.h.h3(n.gq(),6).length)
m=B.a.ea(r,6,B.a5,t.S)
for(r=q.length,p=m+4,n=t.s,l="",o=0;o<q.length;q.length===r||(0,A.e)(q),++o){l+="      "
for(k=J.F(q[o]);k.n();){j=k.gq()
i=j<0?"-":" "
j=Math.abs(j)
h=B.h.h3(j,6)
g=A.a([],n)
for(h=A.K(p-h.length,0,1),f=h.length,e=0;e<h.length;h.length===f||(0,A.e)(h),++e)g.push(" ")
d=B.a.aX(g)
l=l+i+B.h.h3(j,6)+d}l+="\n"}return c+"x"+s+" matrix\n"+l},
ps(a,b){var s,r,q,p,o,n,m,l,k=this.ji(),j=A.fA(0,new A.O(a,b,t.o))
for(s=A.fl(k,t.W),r=s.length,q=j.a,p=0;p<s.length;s.length===r||(0,A.e)(s),++p){o=s[p]
n=o.a
m=B.e.a6(n,a)
l=B.e.b2(n,a)
q===$&&A.b("values")
if(!(m<q.length))return A.c(q,m)
J.iK(q[m],l,o.b)}return j},
slV(a){this.b=t.o.a(a)}}
A.iW.prototype={
$2(a,b){return a+this.a.bP(t.o.a(b))},
$S:4}
A.iX.prototype={
$2(a,b){return a*this.a.bP(t.o.a(b))},
$S:4}
A.iV.prototype={
$1(a){var s,r,q
t.kk.a(a)
s=A.fl(a.b,t.W)
r=A.w(s)
q=r.h("I<1,t>")
return A.h(new A.I(s,r.h("t(1)").a(new A.iU(this.a,a)),q),!0,q.h("D.E"))},
$S:69}
A.iU.prototype={
$1(a){t.d7.a(a)
return this.a.$2(a.b,new A.O(this.b.a,a.a,t.o))},
$S:70}
A.iT.prototype={
$1(a){return J.Z(t.bd.a(a),this.a)},
$S:71}
A.iY.prototype={
$2(a,b){var s=t.o
s.a(b)
return this.a.bP(new A.O(b.b,b.a,s))},
$S:4}
A.iS.prototype={
$1(a){return a},
$S:72}
A.iR.prototype={
$2(a,b){t.o.a(b)
return this.a.$1(a)},
$S:4}
A.m9.prototype={
$2(a,b){var s=t.A
return s.a(a).bg(s.a(b))},
$S:73}
A.f.prototype={
V(a,b){if(b==null)return!1
return b instanceof A.f&&this.a===b.a&&this.b===b.b&&this.c===b.c},
J(a,b){var s=this
if(typeof b=="number")return new A.f(s.a+b,s.b+b,s.c+b)
else if(b instanceof A.f)return new A.f(s.a+b.a,s.b+b.b,s.c+b.c)
else throw A.d("Vector3 only support addition by num or Vector3")},
M(a,b){return new A.f(this.a-b.a,this.b-b.b,this.c-b.c)},
A(a,b){var s=this
if(typeof b=="number")return new A.f(s.a*b,s.b*b,s.c*b)
else if(b instanceof A.f)return new A.f(s.a*b.a,s.b*b.b,s.c*b.c)
else throw A.d("Vector3 only support multiplication by num or Vector3")},
bv(a,b){return new A.f(this.a/b,this.b/b,this.c/b)},
b1(){var s=this.a,r=this.b,q=this.c
return s*s+r*r+q*q},
dt(a){switch(a){case 0:return this.a
case 1:return this.b
case 2:return this.c
default:throw A.d("No component at index "+a+" on a vector3")}},
pH(){var s=t.n
s=A.aR(null,A.a([A.a([this.a],s),A.a([this.b],s),A.a([this.c],s)],t.b))
return s},
h5(a,b,c){var s=a==null?this.a:a,r=b==null?this.b:b
return new A.f(s,r,c==null?this.c:c)},
k5(a){return this.h5(null,null,a)},
pX(a){return this.h5(a,null,null)},
pY(a){return this.h5(null,a,null)},
pW(a,b){if(a===0)return this.pX(b)
else if(a===1)return this.pY(b)
else if(a===2)return this.k5(b)
else throw A.d("Cannot index a vector3 with index="+a)},
bg(a){var s=A.dK(3).cG(0,new A.kY(a)).bg(this.pH()),r=t.o
return new A.f(s.bP(new A.O(0,0,r)),s.bP(new A.O(1,0,r)),s.bP(new A.O(2,0,r)))},
j5(a){return this.a*a.a+this.b*a.b+this.c*a.c},
nN(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.f(s*r-q*p,q*o-n*r,n*p-s*o)},
d1(){var s=this.a
if(s===0&&this.b===0)return 0
return Math.atan2(this.b,s)},
l(a){return"vec3("+A.k(this.a)+", "+A.k(this.b)+", "+A.k(this.c)+")"}}
A.kY.prototype={
$2(a,b){var s,r,q,p
t.o.a(b)
s=b.a
r=this.a
q=r.b
q===$&&A.b("shape")
p=q.a
if(typeof s!=="number")return s.ez()
if(typeof p!=="number")return A.bB(p)
if(s<p){s=b.b
q=q.b
if(typeof s!=="number")return s.ez()
if(typeof q!=="number")return A.bB(q)
q=s>=q
s=q}else s=!0
return s?a:r.bP(b)},
$S:4}
A.j9.prototype={
mL(a,b){var s,r,q=t.D
A.oL("absolute",A.a([b,null,null,null,null,null,null,null,null,null,null,null,null,null,null],q))
s=this.a
s=s.aY(b)>0&&!s.c2(b)
if(s)return b
s=A.oT()
r=A.a([s,b,null,null,null,null,null,null,null,null,null,null,null,null,null,null],q)
A.oL("join",r)
return this.oF(new A.al(r,t.na))},
oF(a){var s,r,q,p,o,n,m,l,k,j
t.bq.a(a)
for(s=a.$ti,r=s.h("B(j.E)").a(new A.ja()),q=a.gH(a),s=new A.cR(q,r,s.h("cR<j.E>")),r=this.a,p=!1,o=!1,n="";s.n();){m=q.gq()
if(r.c2(m)&&o){l=A.hr(m,r)
k=n.charCodeAt(0)==0?n:n
n=B.b.B(k,0,r.cM(k,!0))
l.b=n
if(r.di(n))B.a.v(l.e,0,r.gco())
n=""+l.l(0)}else if(r.aY(m)>0){o=!r.c2(m)
n=""+m}else{j=m.length
if(j!==0){if(0>=j)return A.c(m,0)
j=r.ft(m[0])}else j=!1
if(!j)if(p)n+=r.gco()
n+=m}p=r.di(m)}return n.charCodeAt(0)==0?n:n},
cp(a,b){var s=A.hr(b,this.a),r=s.d,q=A.w(r),p=q.h("aq<1>")
s.sjB(A.h(new A.aq(r,q.h("B(1)").a(new A.jb()),p),!0,p.h("j.E")))
r=s.b
if(r!=null)B.a.bJ(s.d,0,r)
return s.d},
fT(a){var s
if(!this.mp(a))return a
s=A.hr(a,this.a)
s.fS()
return s.l(0)},
mp(a){var s,r,q,p,o,n,m,l,k=this.a,j=k.aY(a)
if(j!==0){if(k===$.iJ())for(s=0;s<j;++s)if(B.b.E(a,s)===47)return!0
r=j
q=47}else{r=0
q=null}for(p=new A.a9(a).a,o=p.length,s=r,n=null;s<o;++s,n=q,q=m){m=B.b.I(p,s)
if(k.bK(m)){if(k===$.iJ()&&m===47)return!0
if(q!=null&&k.bK(q))return!0
if(q===46)l=n==null||n===46||k.bK(n)
else l=!1
if(l)return!0}}if(q==null)return!0
if(k.bK(q))return!0
if(q===46)k=n==null||k.bK(n)||n===46
else k=!1
if(k)return!0
return!1},
pn(a){var s,r,q,p,o,n,m=this,l='Unable to find a path to "',k=m.a,j=k.aY(a)
if(j<=0)return m.fT(a)
s=A.oT()
if(k.aY(s)<=0&&k.aY(a)>0)return m.fT(a)
if(k.aY(a)<=0||k.c2(a))a=m.mL(0,a)
if(k.aY(a)<=0&&k.aY(s)>0)throw A.d(A.nH(l+a+'" from "'+s+'".'))
r=A.hr(s,k)
r.fS()
q=A.hr(a,k)
q.fS()
j=r.d
p=j.length
if(p!==0){if(0>=p)return A.c(j,0)
j=J.W(j[0],".")}else j=!1
if(j)return q.l(0)
j=r.b
p=q.b
if(j!=p)j=j==null||p==null||!k.fX(j,p)
else j=!1
if(j)return q.l(0)
while(!0){j=r.d
p=j.length
if(p!==0){o=q.d
n=o.length
if(n!==0){if(0>=p)return A.c(j,0)
j=j[0]
if(0>=n)return A.c(o,0)
o=k.fX(j,o[0])
j=o}else j=!1}else j=!1
if(!j)break
B.a.eu(r.d,0)
B.a.eu(r.e,1)
B.a.eu(q.d,0)
B.a.eu(q.e,1)}j=r.d
p=j.length
if(p!==0){if(0>=p)return A.c(j,0)
j=J.W(j[0],"..")}else j=!1
if(j)throw A.d(A.nH(l+a+'" from "'+s+'".'))
j=t.N
B.a.ed(q.d,0,A.bH(r.d.length,"..",!1,j))
B.a.v(q.e,0,"")
B.a.ed(q.e,1,A.bH(r.d.length,k.gco(),!1,j))
k=q.d
j=k.length
if(j===0)return"."
if(j>1&&J.W(B.a.gu(k),".")){B.a.dl(q.d)
k=q.e
if(0>=k.length)return A.c(k,-1)
k.pop()
if(0>=k.length)return A.c(k,-1)
k.pop()
B.a.p(k,"")}q.b=""
q.jM()
return q.l(0)},
jF(a){var s,r,q=this,p=A.oF(a)
if(p.gaT()==="file"&&q.a===$.fn())return p.l(0)
else if(p.gaT()!=="file"&&p.gaT()!==""&&q.a!==$.fn())return p.l(0)
s=q.fT(q.a.fV(A.oF(p)))
r=q.pn(s)
return q.cp(0,r).length>q.cp(0,s).length?s:r}}
A.ja.prototype={
$1(a){return A.aw(a)!==""},
$S:6}
A.jb.prototype={
$1(a){return A.aw(a).length!==0},
$S:6}
A.lL.prototype={
$1(a){A.iC(a)
return a==null?"null":'"'+a+'"'},
$S:74}
A.cC.prototype={
ki(a){var s,r=this.aY(a)
if(r>0)return B.b.B(a,0,r)
if(this.c2(a)){if(0>=a.length)return A.c(a,0)
s=a[0]}else s=null
return s},
fX(a,b){return a===b}}
A.kf.prototype={
jM(){var s,r,q=this
while(!0){s=q.d
if(!(s.length!==0&&J.W(B.a.gu(s),"")))break
B.a.dl(q.d)
s=q.e
if(0>=s.length)return A.c(s,-1)
s.pop()}s=q.e
r=s.length
if(r!==0)B.a.v(s,r-1,"")},
fS(){var s,r,q,p,o,n,m=this,l=A.a([],t.s)
for(s=m.d,r=s.length,q=0,p=0;p<s.length;s.length===r||(0,A.e)(s),++p){o=s[p]
n=J.bo(o)
if(!(n.V(o,".")||n.V(o,"")))if(n.V(o,"..")){n=l.length
if(n!==0){if(0>=n)return A.c(l,-1)
l.pop()}else ++q}else B.a.p(l,o)}if(m.b==null)B.a.ed(l,0,A.bH(q,"..",!1,t.N))
if(l.length===0&&m.b==null)B.a.p(l,".")
m.sjB(l)
s=m.a
m.skR(A.bH(l.length+1,s.gco(),!0,t.N))
r=m.b
if(r==null||l.length===0||!s.di(r))B.a.v(m.e,0,"")
r=m.b
if(r!=null&&s===$.iJ()){r.toString
m.b=A.bp(r,"/","\\")}m.jM()},
l(a){var s,r,q,p=this,o=p.b
o=o!=null?""+o:""
for(s=0;s<p.d.length;++s,o=q){r=p.e
if(!(s<r.length))return A.c(r,s)
r=A.k(r[s])
q=p.d
if(!(s<q.length))return A.c(q,s)
q=o+r+A.k(q[s])}o+=A.k(B.a.gu(p.e))
return o.charCodeAt(0)==0?o:o},
sjB(a){this.d=t.I.a(a)},
skR(a){this.e=t.I.a(a)}}
A.ht.prototype={
l(a){return"PathException: "+this.a},
$ibQ:1}
A.kA.prototype={
l(a){return this.gah(this)}}
A.hw.prototype={
ft(a){return B.b.F(a,"/")},
bK(a){return a===47},
di(a){var s=a.length
return s!==0&&B.b.I(a,s-1)!==47},
cM(a,b){if(a.length!==0&&B.b.E(a,0)===47)return 1
return 0},
aY(a){return this.cM(a,!1)},
c2(a){return!1},
fV(a){var s
if(a.gaT()===""||a.gaT()==="file"){s=a.gaS(a)
return A.mR(s,0,s.length,B.A,!1)}throw A.d(A.a8("Uri "+a.l(0)+" must have scheme 'file:'.",null))},
gah(){return"posix"},
gco(){return"/"}}
A.hZ.prototype={
ft(a){return B.b.F(a,"/")},
bK(a){return a===47},
di(a){var s=a.length
if(s===0)return!1
if(B.b.I(a,s-1)!==47)return!0
return B.b.bm(a,"://")&&this.aY(a)===s},
cM(a,b){var s,r,q,p,o=a.length
if(o===0)return 0
if(B.b.E(a,0)===47)return 1
for(s=0;s<o;++s){r=B.b.E(a,s)
if(r===47)return 0
if(r===58){if(s===0)return 0
q=B.b.aR(a,"/",B.b.aa(a,"//",s+1)?s+3:s)
if(q<=0)return o
if(!b||o<q+3)return q
if(!B.b.Z(a,"file://"))return q
if(!A.p3(a,q+1))return q
p=q+3
return o===p?p:q+4}}return 0},
aY(a){return this.cM(a,!1)},
c2(a){return a.length!==0&&B.b.E(a,0)===47},
fV(a){return a.l(0)},
gah(){return"url"},
gco(){return"/"}}
A.i4.prototype={
ft(a){return B.b.F(a,"/")},
bK(a){return a===47||a===92},
di(a){var s=a.length
if(s===0)return!1
s=B.b.I(a,s-1)
return!(s===47||s===92)},
cM(a,b){var s,r,q=a.length
if(q===0)return 0
s=B.b.E(a,0)
if(s===47)return 1
if(s===92){if(q<2||B.b.E(a,1)!==92)return 1
r=B.b.aR(a,"\\",2)
if(r>0){r=B.b.aR(a,"\\",r+1)
if(r>0)return r}return q}if(q<3)return 0
if(!A.p2(s))return 0
if(B.b.E(a,1)!==58)return 0
q=B.b.E(a,2)
if(!(q===47||q===92))return 0
return 3},
aY(a){return this.cM(a,!1)},
c2(a){return this.aY(a)===1},
fV(a){var s,r
if(a.gaT()!==""&&a.gaT()!=="file")throw A.d(A.a8("Uri "+a.l(0)+" must have scheme 'file:'.",null))
s=a.gaS(a)
if(a.gbp(a)===""){if(s.length>=3&&B.b.Z(s,"/")&&A.p3(s,1))s=B.b.jN(s,"/","")}else s="\\\\"+a.gbp(a)+s
r=A.bp(s,"/","\\")
return A.mR(r,0,r.length,B.A,!1)},
nz(a,b){var s
if(a===b)return!0
if(a===47)return b===92
if(a===92)return b===47
if((a^b)!==32)return!1
s=a|32
return s>=97&&s<=122},
fX(a,b){var s,r
if(a===b)return!0
s=a.length
if(s!==b.length)return!1
for(r=0;r<s;++r)if(!this.nz(B.b.E(a,r),B.b.E(b,r)))return!1
return!0},
gah(){return"windows"},
gco(){return"\\"}}
A.hH.prototype={
gm(a){return this.c.length},
goH(){return this.b.length},
hE(a,b){var s,r,q,p,o,n,m
for(s=this.c,r=s.length,q=this.b,p=0;p<r;++p){o=s[p]
if(o===13){n=p+1
if(n<r){if(!(n<r))return A.c(s,n)
m=s[n]!==10}else m=!0
if(m)o=10}if(o===10)B.a.p(q,p+1)}},
eR(a,b,c){return A.mF(this,b,c)},
cO(a){var s,r=this
if(a<0)throw A.d(A.aA("Offset may not be negative, was "+a+"."))
else if(a>r.c.length)throw A.d(A.aA("Offset "+a+u.D+r.gm(r)+"."))
s=r.b
if(a<B.a.gaq(s))return-1
if(a>=B.a.gu(s))return s.length-1
if(r.mm(a)){s=r.d
s.toString
return s}return r.d=r.mb(a)-1},
mm(a){var s,r,q,p=this.d
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
mb(a){var s,r,q=this.b,p=q.length,o=p-1
for(s=0;s<o;){r=s+B.e.aV(o-s,2)
if(!(r>=0&&r<p))return A.c(q,r)
if(q[r]>a)o=r
else s=r+1}return o},
aZ(a){var s,r,q,p=this
if(a<0)throw A.d(A.aA("Offset may not be negative, was "+a+"."))
else if(a>p.c.length)throw A.d(A.aA("Offset "+a+" must be not be greater than the number of characters in the file, "+p.gm(p)+"."))
s=p.cO(a)
r=p.b
if(!(s>=0&&s<r.length))return A.c(r,s)
q=r[s]
if(q>a)throw A.d(A.aA("Line "+s+" comes after offset "+a+"."))
return a-q},
dw(a){var s,r,q,p
if(a<0)throw A.d(A.aA("Line may not be negative, was "+a+"."))
else{s=this.b
r=s.length
if(a>=r)throw A.d(A.aA("Line "+a+" must be less than the number of lines in the file, "+this.goH()+"."))}q=s[a]
if(q<=this.c.length){p=a+1
s=p<r&&q>=s[p]}else s=!0
if(s)throw A.d(A.aA("Line "+a+" doesn't have 0 columns."))
return q}}
A.b2.prototype={
ga4(){return this.a.a},
gad(){return this.a.cO(this.b)},
gan(){return this.a.aZ(this.b)},
bk(a,b){var s,r=this.b
if(r<0)throw A.d(A.aA("Offset may not be negative, was "+r+"."))
else{s=this.a
if(r>s.c.length)throw A.d(A.aA("Offset "+r+u.D+s.gm(s)+"."))}},
gaA(a){return this.b}}
A.ar.prototype={
ga4(){return this.a.a},
gm(a){return this.c-this.b},
gS(a){return A.c5(this.a,this.b)},
gU(){return A.c5(this.a,this.c)},
gX(a){return A.ad(B.y.bc(this.a.c,this.b,this.c),0,null)},
gb_(){var s=this,r=s.a,q=s.c,p=r.cO(q)
if(r.aZ(q)===0&&p!==0){if(q-s.b===0)return p===r.b.length-1?"":A.ad(B.y.bc(r.c,r.dw(p),r.dw(p+1)),0,null)}else q=p===r.b.length-1?r.c.length:r.dw(p+1)
return A.ad(B.y.bc(r.c,r.dw(r.cO(s.b)),q),0,null)},
aI(a,b,c){var s,r=this.c,q=this.b
if(r<q)throw A.d(A.a8("End "+r+" must come after start "+q+".",null))
else{s=this.a
if(r>s.c.length)throw A.d(A.aA("End "+r+u.D+s.gm(s)+"."))
else if(q<0)throw A.d(A.aA("Start may not be negative, was "+q+"."))}},
aD(a,b){var s
t.hs.a(b)
if(!(b instanceof A.ar))return this.lF(0,b)
s=B.e.aD(this.b,b.b)
return s===0?B.e.aD(this.c,b.c):s},
V(a,b){var s=this
if(b==null)return!1
if(!t.lS.b(b))return s.lE(0,b)
return s.b===b.b&&s.c===b.c&&J.W(s.a.a,b.a.a)},
gW(a){return A.cL(this.b,this.c,this.a.a,B.q)},
o8(a,b){var s,r=this,q=r.a
if(!J.W(q.a,b.a.a))throw A.d(A.a8('Source URLs "'+A.k(r.ga4())+'" and  "'+A.k(b.ga4())+"\" don't match.",null))
s=Math.min(r.b,b.b)
return A.mF(q,s,Math.max(r.c,b.c))},
$iml:1,
$ibL:1}
A.jk.prototype={
ot(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=a.a
a.iv(B.a.gaq(a1).c)
s=a.e
r=A.bH(s,a0,!1,t.dd)
for(q=a.r,s=s!==0,p=a.b,o=0;o<a1.length;++o){n=a1[o]
if(o>0){m=a1[o-1]
l=m.c
k=n.c
if(!J.W(l,k)){a.dM("\u2575")
q.a+="\n"
a.iv(k)}else if(m.b+1!==n.b){a.mK("...")
q.a+="\n"}}for(l=n.d,k=A.w(l).h("X<1>"),j=new A.X(l,k),j=new A.L(j,j.gm(j),k.h("L<D.E>")),k=k.h("D.E"),i=n.b,h=n.a;j.n();){g=j.d
if(g==null)g=k.a(g)
f=g.a
if(f.gS(f).gad()!==f.gU().gad()&&f.gS(f).gad()===i&&a.mn(B.b.B(h,0,f.gS(f).gan()))){e=B.a.ak(r,a0)
if(e<0)A.N(A.a8(A.k(r)+" contains no null elements.",a0))
B.a.v(r,e,g)}}a.mJ(i)
q.a+=" "
a.mI(n,r)
if(s)q.a+=" "
d=B.a.jk(l,new A.jF())
if(d===-1)c=a0
else{if(!(d>=0&&d<l.length))return A.c(l,d)
c=l[d]}k=c!=null
if(k){j=c.a
g=j.gS(j).gad()===i?j.gS(j).gan():0
a.mG(h,g,j.gU().gad()===i?j.gU().gan():h.length,p)}else a.dO(h)
q.a+="\n"
if(k)a.mH(n,c,r)
for(k=l.length,b=0;b<k;++b){l[b].toString
continue}}a.dM("\u2575")
a1=q.a
return a1.charCodeAt(0)==0?a1:a1},
iv(a){var s=this
if(!s.f||!t.jJ.b(a))s.dM("\u2577")
else{s.dM("\u250c")
s.b4(new A.js(s),"\x1b[34m",t.H)
s.r.a+=" "+$.ne().jF(a)}s.r.a+="\n"},
dL(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d={}
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
h=g.gS(g).gad()}f=i?null:j.a.gU().gad()
if(s&&j===c){e.b4(new A.jz(e,h,a),r,p)
l=!0}else if(l)e.b4(new A.jA(e,j),r,p)
else if(i)if(d.a)e.b4(new A.jB(e),d.b,m)
else n.a+=" "
else e.b4(new A.jC(d,e,c,h,a,j,f),o,p)}},
mI(a,b){return this.dL(a,b,null)},
mG(a,b,c,d){var s=this
s.dO(B.b.B(a,0,b))
s.b4(new A.jt(s,a,b,c),d,t.H)
s.dO(B.b.B(a,c,a.length))},
mH(a,b,c){var s,r,q,p,o=this
t.eU.a(c)
s=o.b
r=b.a
if(r.gS(r).gad()===r.gU().gad()){o.fd()
r=o.r
r.a+=" "
o.dL(a,c,b)
if(c.length!==0)r.a+=" "
o.iw(b,c,o.b4(new A.ju(o,a,b),s,t.S))}else{q=a.b
if(r.gS(r).gad()===q){if(B.a.F(c,b))return
A.tS(c,b,t.C)
o.fd()
r=o.r
r.a+=" "
o.dL(a,c,b)
o.b4(new A.jv(o,a,b),s,t.H)
r.a+="\n"}else if(r.gU().gad()===q){p=r.gU().gan()===a.a.length
if(p&&!0){A.pe(c,b,t.C)
return}o.fd()
o.r.a+=" "
o.dL(a,c,b)
o.iw(b,c,o.b4(new A.jw(o,p,a,b),s,t.S))
A.pe(c,b,t.C)}}},
iu(a,b,c){var s=c?0:1,r=this.r
s=r.a+=B.b.A("\u2500",1+b+this.f2(B.b.B(a.a,0,b+s))*3)
r.a=s+"^"},
mF(a,b){return this.iu(a,b,!0)},
iw(a,b,c){t.eU.a(b)
this.r.a+="\n"
return},
dO(a){var s,r,q,p
for(s=new A.a9(a),r=t.E,s=new A.L(s,s.gm(s),r.h("L<v.E>")),q=this.r,r=r.h("v.E");s.n();){p=s.d
if(p==null)p=r.a(p)
if(p===9)q.a+=B.b.A(" ",4)
else q.a+=A.ba(p)}},
dN(a,b,c){var s={}
s.a=c
if(b!=null)s.a=B.e.l(b+1)
this.b4(new A.jD(s,this,a),"\x1b[34m",t.P)},
dM(a){return this.dN(a,null,null)},
mK(a){return this.dN(null,null,a)},
mJ(a){return this.dN(null,a,null)},
fd(){return this.dN(null,null,null)},
f2(a){var s,r,q,p
for(s=new A.a9(a),r=t.E,s=new A.L(s,s.gm(s),r.h("L<v.E>")),r=r.h("v.E"),q=0;s.n();){p=s.d
if((p==null?r.a(p):p)===9)++q}return q},
mn(a){var s,r,q
for(s=new A.a9(a),r=t.E,s=new A.L(s,s.gm(s),r.h("L<v.E>")),r=r.h("v.E");s.n();){q=s.d
if(q==null)q=r.a(q)
if(q!==32&&q!==9)return!1}return!0},
b4(a,b,c){var s,r
c.h("0()").a(a)
s=this.b!=null
if(s&&b!=null)this.r.a+=b
r=a.$0()
if(s&&b!=null)this.r.a+="\x1b[0m"
return r}}
A.jE.prototype={
$0(){return this.a},
$S:75}
A.jm.prototype={
$1(a){var s=t.nR.a(a).d,r=A.w(s)
r=new A.aq(s,r.h("B(1)").a(new A.jl()),r.h("aq<1>"))
return r.gm(r)},
$S:76}
A.jl.prototype={
$1(a){var s=t.C.a(a).a
return s.gS(s).gad()!==s.gU().gad()},
$S:9}
A.jn.prototype={
$1(a){return t.nR.a(a).c},
$S:78}
A.jp.prototype={
$1(a){var s=t.C.a(a).a.ga4()
return s==null?new A.H():s},
$S:79}
A.jq.prototype={
$2(a,b){var s=t.C
return s.a(a).a.aD(0,s.a(b).a)},
$S:80}
A.jr.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
t.lO.a(a)
s=a.a
r=a.b
q=A.a([],t.dg)
for(p=J.aP(r),o=p.gH(r),n=t.pg;o.n();){m=o.gq().a
l=m.gb_()
k=A.lV(l,m.gX(m),m.gS(m).gan())
k.toString
k=B.b.cb("\n",B.b.B(l,0,k))
j=k.gm(k)
i=m.gS(m).gad()-j
for(m=l.split("\n"),k=m.length,h=0;h<k;++h){g=m[h]
if(q.length===0||i>B.a.gu(q).b)B.a.p(q,new A.be(g,i,s,A.a([],n)));++i}}f=A.a([],n)
for(o=q.length,n=t.aP,e=0,h=0;h<q.length;q.length===o||(0,A.e)(q),++h){g=q[h]
m=n.a(new A.jo(g))
if(!!f.fixed$length)A.N(A.T("removeWhere"))
B.a.fb(f,m,!0)
d=f.length
for(m=p.bb(r,e),m=m.gH(m);m.n();){k=m.gq()
c=k.a
if(c.gS(c).gad()>g.b)break
B.a.p(f,k)}e+=f.length-d
B.a.N(g.d,f)}return q},
$S:81}
A.jo.prototype={
$1(a){return t.C.a(a).a.gU().gad()<this.a.b},
$S:9}
A.jF.prototype={
$1(a){t.C.a(a)
return!0},
$S:9}
A.js.prototype={
$0(){this.a.r.a+=B.b.A("\u2500",2)+">"
return null},
$S:1}
A.jz.prototype={
$0(){var s=this.b===this.c.b?"\u250c":"\u2514"
this.a.r.a+=s},
$S:2}
A.jA.prototype={
$0(){var s=this.b==null?"\u2500":"\u253c"
this.a.r.a+=s},
$S:2}
A.jB.prototype={
$0(){this.a.r.a+="\u2500"
return null},
$S:1}
A.jC.prototype={
$0(){var s,r,q=this,p=q.a,o=p.a?"\u253c":"\u2502"
if(q.c!=null)q.b.r.a+=o
else{s=q.e
r=s.b
if(q.d===r){s=q.b
s.b4(new A.jx(p,s),p.b,t.P)
p.a=!0
if(p.b==null)p.b=s.b}else{s=q.r===r&&q.f.a.gU().gan()===s.a.length
r=q.b
if(s)r.r.a+="\u2514"
else r.b4(new A.jy(r,o),p.b,t.P)}}},
$S:2}
A.jx.prototype={
$0(){var s=this.a.a?"\u252c":"\u250c"
this.b.r.a+=s},
$S:2}
A.jy.prototype={
$0(){this.a.r.a+=this.b},
$S:2}
A.jt.prototype={
$0(){var s=this
return s.a.dO(B.b.B(s.b,s.c,s.d))},
$S:1}
A.ju.prototype={
$0(){var s,r,q=this.a,p=q.r,o=p.a,n=this.c.a,m=n.gS(n).gan(),l=n.gU().gan()
n=this.b.a
s=q.f2(B.b.B(n,0,m))
r=q.f2(B.b.B(n,m,l))
m+=s*3
p.a+=B.b.A(" ",m)
p=p.a+=B.b.A("^",Math.max(l+(s+r)*3-m,1))
return p.length-o.length},
$S:30}
A.jv.prototype={
$0(){var s=this.c.a
return this.a.mF(this.b,s.gS(s).gan())},
$S:1}
A.jw.prototype={
$0(){var s=this,r=s.a,q=r.r,p=q.a
if(s.b)q.a+=B.b.A("\u2500",3)
else r.iu(s.c,Math.max(s.d.a.gU().gan()-1,0),!1)
return q.a.length-p.length},
$S:30}
A.jD.prototype={
$0(){var s=this.b,r=s.r,q=this.a.a
if(q==null)q=""
s=r.a+=B.b.oS(q,s.d)
q=this.c
r.a=s+(q==null?"\u2502":q)},
$S:2}
A.aB.prototype={
l(a){var s=this.a
s=""+"primary "+(""+s.gS(s).gad()+":"+s.gS(s).gan()+"-"+s.gU().gad()+":"+s.gU().gan())
return s.charCodeAt(0)==0?s:s}}
A.ll.prototype={
$0(){var s,r,q,p,o=this.a
if(!(t.ol.b(o)&&A.lV(o.gb_(),o.gX(o),o.gS(o).gan())!=null)){s=o.gS(o)
s=A.hI(s.gaA(s),0,0,o.ga4())
r=o.gU()
r=r.gaA(r)
q=o.ga4()
p=A.ts(o.gX(o),10)
o=A.kv(s,A.hI(r,A.o8(o.gX(o)),p,q),o.gX(o),o.gX(o))}return A.r9(A.rb(A.ra(o)))},
$S:83}
A.be.prototype={
l(a){return""+this.b+': "'+this.a+'" ('+B.a.aF(this.d,", ")+")"}}
A.by.prototype={
fz(a){var s=this.a
if(!J.W(s,a.ga4()))throw A.d(A.a8('Source URLs "'+A.k(s)+'" and "'+A.k(a.ga4())+"\" don't match.",null))
return Math.abs(this.b-a.gaA(a))},
aD(a,b){var s
t.hq.a(b)
s=this.a
if(!J.W(s,b.ga4()))throw A.d(A.a8('Source URLs "'+A.k(s)+'" and "'+A.k(b.ga4())+"\" don't match.",null))
return this.b-b.gaA(b)},
V(a,b){if(b==null)return!1
return t.hq.b(b)&&J.W(this.a,b.ga4())&&this.b===b.gaA(b)},
gW(a){var s=this.a
s=s==null?null:s.gW(s)
if(s==null)s=0
return s+this.b},
l(a){var s=this,r=A.dF(s).l(0),q=s.a
return"<"+r+": "+s.b+" "+(A.k(q==null?"unknown source":q)+":"+(s.c+1)+":"+(s.d+1))+">"},
$iaf:1,
ga4(){return this.a},
gaA(a){return this.b},
gad(){return this.c},
gan(){return this.d}}
A.hJ.prototype={
fz(a){if(!J.W(this.a.a,a.ga4()))throw A.d(A.a8('Source URLs "'+A.k(this.ga4())+'" and "'+A.k(a.ga4())+"\" don't match.",null))
return Math.abs(this.b-a.gaA(a))},
aD(a,b){t.hq.a(b)
if(!J.W(this.a.a,b.ga4()))throw A.d(A.a8('Source URLs "'+A.k(this.ga4())+'" and "'+A.k(b.ga4())+"\" don't match.",null))
return this.b-b.gaA(b)},
V(a,b){if(b==null)return!1
return t.hq.b(b)&&J.W(this.a.a,b.ga4())&&this.b===b.gaA(b)},
gW(a){var s=this.a.a
s=s==null?null:s.gW(s)
if(s==null)s=0
return s+this.b},
l(a){var s=A.dF(this).l(0),r=this.b,q=this.a,p=q.a
return"<"+s+": "+r+" "+(A.k(p==null?"unknown source":p)+":"+(q.cO(r)+1)+":"+(q.aZ(r)+1))+">"},
$iaf:1,
$iby:1}
A.hK.prototype={
lR(a,b,c){var s,r=this.b,q=this.a
if(!J.W(r.ga4(),q.ga4()))throw A.d(A.a8('Source URLs "'+A.k(q.ga4())+'" and  "'+A.k(r.ga4())+"\" don't match.",null))
else if(r.gaA(r)<q.gaA(q))throw A.d(A.a8("End "+r.l(0)+" must come after start "+q.l(0)+".",null))
else{s=this.c
if(s.length!==q.fz(r))throw A.d(A.a8('Text "'+s+'" must be '+q.fz(r)+" characters long.",null))}},
gS(a){return this.a},
gU(){return this.b},
gX(a){return this.c}}
A.eD.prototype={
ga4(){return this.gS(this).ga4()},
gm(a){var s,r=this.gU()
r=r.gaA(r)
s=this.gS(this)
return r-s.gaA(s)},
aD(a,b){var s
t.hs.a(b)
s=this.gS(this).aD(0,b.gS(b))
return s===0?this.gU().aD(0,b.gU()):s},
jx(a,b,c){var s,r,q=this,p=""+("line "+(q.gS(q).gad()+1)+", column "+(q.gS(q).gan()+1))
if(q.ga4()!=null){s=q.ga4()
s=p+(" of "+$.ne().jF(s))
p=s}p+=": "+b
r=q.ou(c)
if(r.length!==0)p=p+"\n"+r
return p.charCodeAt(0)==0?p:p},
ou(a){var s=this
if(!t.ol.b(s)&&s.gm(s)===0)return""
return A.q7(s,a).ot()},
V(a,b){if(b==null)return!1
return t.hs.b(b)&&this.gS(this).V(0,b.gS(b))&&this.gU().V(0,b.gU())},
gW(a){return A.cL(this.gS(this),this.gU(),B.q,B.q)},
l(a){var s=this
return"<"+A.dF(s).l(0)+": from "+s.gS(s).l(0)+" to "+s.gU().l(0)+' "'+s.gX(s)+'">'},
$iaf:1,
$ibk:1}
A.bL.prototype={
gb_(){return this.d}}
A.O.prototype={
l(a){return"["+A.k(this.a)+", "+A.k(this.b)+"]"},
V(a,b){if(b==null)return!1
return b instanceof A.O&&J.W(b.a,this.a)&&J.W(b.b,this.b)},
gW(a){return A.cL(J.aH(this.a),J.aH(this.b),B.q,B.q)}}
A.cP.prototype={
l(a){return"["+this.a.l(0)+", "+A.k(this.b)+", "+A.k(this.c)+"]"},
V(a,b){if(b==null)return!1
return b instanceof A.cP&&b.a===this.a&&b.b===this.b&&b.c===this.c},
gW(a){return A.cL(A.bI(this.a),B.h.gW(this.b),B.h.gW(this.c),B.q)}}
A.ds.prototype={
aC(a){var s=this
return A.hd([s.a,s.b,s.c,s.d],!1,t.z)},
l(a){var s=this
return"["+s.a.l(0)+", "+s.b.l(0)+", "+s.c.l(0)+", "+s.d.l(0)+"]"},
V(a,b){var s=this
if(b==null)return!1
return b instanceof A.ds&&b.a.V(0,s.a)&&b.b.V(0,s.b)&&b.c.V(0,s.c)&&b.d.V(0,s.d)},
gW(a){var s=this
return A.cL(A.bI(s.a),A.bI(s.b),A.bI(s.c),A.bI(s.d))}}
A.en.prototype={
cB(){var s=0,r=A.cY(t.z),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$cB=A.d_(function(a1,a2){if(a1===1)return A.cV(a2,r)
while(true)switch(s){case 0:p.x=A.dK(2)
o=p.k2
o===$&&A.b("camera")
o.f=A.ox("#191919")
s=3
return A.c1(p.fw(),$async$cB)
case 3:s=4
return A.c1(p.fv(),$async$cB)
case 4:p.oJ()
o=t.a,n=t.lq,m=t.cG
case 5:if(!!0){s=6
break}l=p.k3
if(l===$?p.k3=!1:l){p.dr(0.25)
k=p.as
k===$&&A.b("i")
j=A.aM(k)
j.aL(B.j)
k=p.at
k===$&&A.b("j")
i=A.aM(k)
i.aL(B.p)
h=A.nG(!0,7.111111111111111,-7.111111111111111,4,-4)
k=p.Q
k===$&&A.b("originalPlane")
g=k.b6(B.d)
f=A.bt(0,B.j,g)
f.cT(B.u,!1)
f.cR(B.m,!1)
f.eU(B.u,!0)
e=A.bt(0,B.p,g)
e.cT(B.t,!1)
e.cR(B.m,!1)
e.eU(B.t,!0)
k=A.hU(p.as,j)
d=A.hU(p.at,i)
c=p.dy
c===$&&A.b("arrowI")
c=A.hU(c,f)
b=p.fr
b===$&&A.b("arrowJ")
b=A.hU(b,e)
a=p.y
a===$&&A.b("plane")
a=m.a(A.a([k,d,c,b,A.hU(a,h)],n))
k=new A.d8(B.c,$,null,$,$,$)
k.am(B.c,null,null)
k.aW(o.a(B.bk))
k=new A.fy(a,0,A.pd(),0,k)
a0=k.eT(0)
d=A.ap("^Instance of '(.*?)'$").fN(a0).b
if(1>=d.length){q=A.c(d,1)
s=1
break}d=d[1]
d.toString
k.f=d
k.lG(a,null,0,A.pd(),0)
p.el(0,k)
p.k3=!1}s=7
return A.c1(p.dr(0.001),$async$cB)
case 7:s=5
break
case 6:case 1:return A.cW(q,r)}})
return A.cX($async$cB,r)},
fw(){var s=0,r=A.cY(t.z),q=this,p,o,n
var $async$fw=A.d_(function(a,b){if(a===1)return A.cV(b,r)
while(true)switch(s){case 0:p=Math.max(7.111111111111111,4)
o=-p*2.25
n=p*2.25
o=A.nG(!1,n,o,n,o)
q.Q=o
o=A.et(o)
q.y=o
q.aW(t.a.a(A.a([o],t.r)))
return A.cW(null,r)}})
return A.cX($async$fw,r)},
fv(){var s=0,r=A.cY(t.z),q=this,p,o,n,m,l,k,j,i,h,g,f
var $async$fv=A.d_(function(a,b){if(a===1)return A.cV(b,r)
while(true)switch(s){case 0:f=q.Q
f===$&&A.b("originalPlane")
f=A.nv(f.b6(B.j))
f.ae(B.u)
q.ax=f
f=A.nv(q.Q.b6(B.p))
f.ae(B.t)
q.ay=f
f=A.fK(B.d,B.c,0.2)
f.cQ(B.b2)
f.ao(B.k.A(0,3.25).J(0,B.z.A(0,6)))
q.fy=f
f=A.fK(B.d,B.c,0.2)
f.cQ(B.m)
f.ao(B.k.A(0,3.25).J(0,B.z.A(0,3)))
q.go=f
f=A.fK(B.d,B.c,0.2)
f.cQ(B.m)
f.ao(B.k.A(0,3.25).J(0,B.j.A(0,3)))
q.id=f
f=A.fK(B.d,B.c,0.2)
f.cQ(B.m)
f.ao(B.k.A(0,3.25).J(0,B.j.A(0,6)))
q.k1=f
p=q.Q.b6(B.d)
q.as=A.aM(q.ax)
q.at=A.aM(q.ay)
f=A.bt(0,q.as.bO(),p)
f.ae(B.u)
q.dy=f
f=A.bt(0,q.at.bO(),p)
f.ae(B.t)
q.fr=f
q.mP()
f=q.as
o=q.dy
n=q.at
m=q.fr
l=q.ch
l===$&&A.b("texI")
k=q.CW
k===$&&A.b("texJ")
j=q.cy
j===$&&A.b("tex1")
i=q.db
i===$&&A.b("tex2")
h=q.dx
h===$&&A.b("tex3")
g=q.cx
g===$&&A.b("texReset")
q.aW(A.a([f,o,n,m,l,k,j,i,h,g],t.r))
return A.cW(null,r)}})
return A.cX($async$fv,r)},
mP(){var s,r=this,q=" ",p="align*",o=null,n=A.he("\\hat{\\imath}",q,B.c,p,B.o,B.v)
n.ae(B.u)
n.dR(new A.k_(r))
r.ch=n
n=A.he("\\hat{\\jmath}",q,B.c,p,B.o,B.v)
n.ae(B.t)
n.dR(new A.k0(r))
r.CW=n
n=new A.eI(q,B.o,B.v,A.a([],t.s),"",p,!0,2,o,"",!0,A.aW(t.N,t.h),4,0,!1,0.01,!1,0.000001,4,o,o,o,B.c,$,o,$,$,$)
n.am(B.c,o,o)
s=n.r
s===$&&A.b("points")
if(J.bP(s))n.ei()
n.a=B.c
n.hC("Reset",q,B.c,"center",B.o,B.v)
s=r.fy
s===$&&A.b("resetBtn")
n.aL(s.ai(B.d))
n.ao(B.k.A(0,0.5))
r.cx=n
n=A.he("1",q,B.c,p,B.o,B.v)
s=r.go
s===$&&A.b("btn1")
n.aL(s.ai(B.d))
r.cy=n
n=A.he("2",q,B.c,p,B.o,B.v)
s=r.id
s===$&&A.b("btn2")
n.aL(s.ai(B.d))
r.db=n
n=A.he("3",q,B.c,p,B.o,B.v)
s=r.k1
s===$&&A.b("btn3")
n.aL(s.ai(B.d))
r.dx=n},
oJ(){var s,r,q,p,o,n,m=this,l=m.as
l===$&&A.b("i")
l=A.nw(l)
s=m.at
s===$&&A.b("j")
s=A.nw(s)
r=m.fy
r===$&&A.b("resetBtn")
r=A.j1(r,m.gn4())
q=m.go
q===$&&A.b("btn1")
q=A.j1(q,m.glN())
p=m.id
p===$&&A.b("btn2")
p=A.j1(p,m.glJ())
o=m.k1
o===$&&A.b("btn3")
m.aW(t.a.a(A.a([l,s,r,q,p,A.j1(o,m.glL())],t.r)))
n=new A.k1(m)
m.as.dR(n)
m.at.dR(n)},
n5(){this.k3=!0},
lO(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.Q
e===$&&A.b("originalPlane")
s=e.b6(B.d)
e=f.e
e===$&&A.b("random")
r=e.c3(13)+-6+f.e.b9()
q=f.e.c3(9)+-4+f.e.b9()
if(r===0)r=f.e.c3(13)+-6+f.e.b9()
if(q===0)q=f.e.c3(1)+f.e.b9()
p=f.e.b9()
o=f.e.b9()
e=f.Q.b6(B.j.A(0,p).A(0,r).J(0,B.p.A(0,p).A(0,q)))
n=f.x
n===$&&A.b("transformationMatrix")
m=e.bg(n)
l=f.Q.b6(B.j.A(0,o).A(0,r).J(0,B.p.A(0,o).A(0,q))).bg(f.x)
n=f.as
n===$&&A.b("i")
k=A.aM(n)
k.aL(m)
n=f.at
n===$&&A.b("j")
j=A.aM(n)
j.aL(l)
i=A.bt(0,f.as.bO(),s)
i.ae(B.u)
h=A.bt(0,f.at.bO(),s)
h.ae(B.t)
g=A.et(f.Q)
n=f.y
n===$&&A.b("plane")
n.az(g)
n=f.dy
n===$&&A.b("arrowI")
n.az(i)
n=f.fr
n===$&&A.b("arrowJ")
n.az(h)
f.as.az(A.aM(k))
f.at.az(A.aM(j))},
lK(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=d.Q
c===$&&A.b("originalPlane")
s=c.b6(B.d)
c=d.e
c===$&&A.b("random")
r=c.c3(13)+-6+d.e.b9()
q=d.e.c3(9)+-4+d.e.b9()
if(r===0)r=d.e.c3(13)+-6+d.e.b9()
if(q===0)q=d.e.c3(1)+d.e.b9()
p=d.e.b9()
o=d.e.b9()
n=d.e.ej()
m=d.e.ej()
for(;n===m;){n=d.e.ej()
m=d.e.ej()}if(n)p=0
if(m)o=0
c=d.Q.b6(B.j.A(0,p).A(0,r).J(0,B.p.A(0,p).A(0,q)))
l=d.x
l===$&&A.b("transformationMatrix")
k=c.bg(l)
j=d.Q.b6(B.j.A(0,o).A(0,r).J(0,B.p.A(0,o).A(0,q))).bg(d.x)
l=d.as
l===$&&A.b("i")
i=A.aM(l)
i.aL(k)
l=d.at
l===$&&A.b("j")
h=A.aM(l)
h.aL(j)
g=A.bt(0,d.as.bO(),s)
g.ae(B.u)
f=A.bt(0,d.at.bO(),s)
f.ae(B.t)
e=A.et(d.Q)
l=d.y
l===$&&A.b("plane")
l.az(e)
l=d.dy
l===$&&A.b("arrowI")
l.az(g)
l=d.fr
l===$&&A.b("arrowJ")
l.az(f)
d.as.az(A.aM(i))
d.at.az(A.aM(h))},
lM(){var s,r,q,p,o,n,m=this,l=m.Q
l===$&&A.b("originalPlane")
s=l.b6(B.d)
l=m.as
l===$&&A.b("i")
r=A.aM(l)
r.aL(s)
l=m.at
l===$&&A.b("j")
q=A.aM(l)
q.aL(s)
p=A.bt(0,m.as.bO(),s)
p.ae(B.u)
o=A.bt(0,m.at.bO(),s)
o.ae(B.t)
n=A.et(m.Q)
l=m.y
l===$&&A.b("plane")
l.az(n)
l=m.dy
l===$&&A.b("arrowI")
l.az(p)
l=m.fr
l===$&&A.b("arrowJ")
l.az(o)
m.as.az(A.aM(r))
m.at.az(A.aM(q))}}
A.k_.prototype={
$2(a,b){var s
t.j.a(a)
A.co(b)
s=this.a.as
s===$&&A.b("i")
a.jA(s,0.1,B.D)
return a},
$S:14}
A.k0.prototype={
$2(a,b){var s
t.j.a(a)
A.co(b)
s=this.a.at
s===$&&A.b("j")
a.jA(s,0.1,B.D)
return a},
$S:14}
A.k1.prototype={
$2(a,b){var s,r,q,p,o,n,m,l,k
t.j.a(a)
A.co(b)
s=this.a
r=s.Q
r===$&&A.b("originalPlane")
q=s.as
q===$&&A.b("i")
p=r.jD(q.ai(B.d))
q=s.Q
r=s.at
r===$&&A.b("j")
o=q.jD(r.ai(B.d))
n=A.et(s.Q)
r=t.n
n.iI(A.aR(null,A.a([A.a([p.a,o.a],r),A.a([p.b,o.b],r)],t.b)))
m=s.Q.b6(B.d)
l=A.bt(0,p,m)
l.ae(B.u)
k=A.bt(0,o,m)
k.ae(B.t)
r=s.y
r===$&&A.b("plane")
r.az(n)
r=s.dy
r===$&&A.b("arrowI")
r.az(l)
s=s.fr
s===$&&A.b("arrowJ")
s.az(k)
return a},
$S:14};(function aliases(){var s=J.ef.prototype
s.lr=s.l
s=J.cE.prototype
s.lw=s.l
s=A.bi.prototype
s.ls=s.jn
s.lt=s.jo
s.lv=s.jq
s.lu=s.jp
s=A.v.prototype
s.lx=s.bY
s=A.H.prototype
s.eT=s.l
s=A.a7.prototype
s.lD=s.a2
s=A.aX.prototype
s.ly=s.v
s.bT=s.p
s.hy=s.bJ
s.lz=s.N
s=A.br.prototype
s.lp=s.d4
s.lq=s.d5
s=A.G.prototype
s.lC=s.cn
s.lB=s.cK
s.hz=s.c7
s.lA=s.d9
s.cX=s.aO
s.cW=s.aN
s=A.R.prototype
s.eU=s.c7
s=A.dI.prototype
s.lo=s.l6
s=A.eD.prototype
s.lF=s.aD
s.lE=s.V})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._instance_1i,q=hunkHelpers.installInstanceTearOff,p=hunkHelpers._static_1,o=hunkHelpers._static_0,n=hunkHelpers.installStaticTearOff,m=hunkHelpers._instance_1u,l=hunkHelpers._instance_0u
s(J,"rW","qd",31)
r(J.z.prototype,"gmN","p",86)
q(J.bF.prototype,"ghw",1,1,null,["$2","$1"],["aa","Z"],53,0,0)
p(A,"t5","q4",32)
p(A,"ti","r4",15)
p(A,"tj","r5",15)
p(A,"tk","r6",15)
o(A,"oP","tc",1)
s(A,"oR","rN",88)
p(A,"tn","rO",32)
s(A,"tm","qi",31)
p(A,"tr","qY",24)
n(A,"tO",2,null,["$1$2","$2"],["p8",function(a,b){return A.p8(a,b,t.p)}],16,0)
n(A,"p6",2,null,["$1$2","$2"],["p7",function(a,b){return A.p7(a,b,t.p)}],16,0)
p(A,"oS","a6",8)
p(A,"tp","m5",8)
p(A,"tq","p4",8)
p(A,"bN","pO",90)
m(A.ez.prototype,"gjZ","k_",33)
var k
l(k=A.e7.prototype,"gD","nO",0)
l(k,"go3","o4",0)
l(k,"gcL","pl",0)
l(k,"gnu","nv",0)
l(k,"geq","pe",0)
l(k,"gbR","kP",0)
l(k,"goW","oX",0)
l(k,"gpB","pC",0)
l(k,"gnx","ny",0)
l(k,"gjS","pA",0)
l(k,"gpj","pk",0)
l(k,"gph","pi",0)
l(k,"gpf","pg",0)
l(k,"gpc","pd",0)
l(k,"gpa","pb",0)
l(k,"gp8","p9",0)
l(k,"gkN","kO",0)
l(k,"gky","kz",0)
l(k,"gkw","kx",0)
l(k,"gkC","kD",0)
l(k,"gkA","kB",0)
l(k,"gbh","kM",0)
l(k,"gkF","kG",0)
l(k,"ghi","kE",0)
l(k,"geL","kL",0)
l(k,"gkJ","kK",0)
l(k,"gkH","kI",0)
l(k,"gko","kp",0)
l(k,"gbQ","kv",0)
l(k,"gks","kt",0)
l(k,"gkq","kr",0)
l(k,"geK","ku",0)
l(k,"gkm","kn",0)
l(k,"gbF","nf",0)
l(k,"gbX","n8",0)
l(k,"gmT","mU",0)
l(k,"giL","ng",0)
l(k,"gn9","na",0)
l(k,"gnb","nc",0)
l(k,"gdT","nd",0)
l(k,"giB","mV",0)
l(k,"gbA","kQ",0)
l(k,"gfl","no",0)
l(k,"goK","oL",0)
l(k,"gnG","nH",0)
l(k,"gnE","nF",0)
l(k,"gbZ","nI",0)
l(k,"giT","nC",0)
l(k,"giU","nD",0)
l(k,"gnA","nB",0)
l(k,"gnV","nW",0)
l(k,"giM","nh",0)
l(k,"gfA","nQ",0)
l(k,"gmW","mX",0)
l(k,"gmZ","n_",0)
l(k,"gfj","ni",0)
l(k,"gnR","nS",0)
l(k,"gnT","nU",0)
l(k,"giC","mY",0)
l(k,"gnk","nl",0)
l(k,"gn1","n2",0)
l(k,"gfk","nj",0)
l(k,"gfB","nX",0)
l(k,"gfC","nY",0)
l(k,"giD","n0",0)
l(k,"gcA","np",0)
l(k,"gns","nt",0)
l(A.G.prototype,"gke","c6",5)
l(k=A.en.prototype,"gn4","n5",1)
l(k,"glN","lO",1)
l(k,"glJ","lK",1)
l(k,"glL","lM",1)
n(A,"pb",3,null,["$3"],["tV"],91,0)
n(A,"pd",1,null,["$3$inflection$pauseRatio","$1"],["p5",function(a){return A.p5(a,null,null)}],28,0)
n(A,"tR",1,null,["$3$inflection$pauseRatio","$1"],["pg",function(a){return A.pg(a,null,null)}],28,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.H,null)
q(A.H,[A.mo,J.ef,J.az,A.j,A.dU,A.aT,A.a1,A.eX,A.ku,A.L,A.U,A.e5,A.e2,A.cS,A.bg,A.bA,A.d6,A.kE,A.hm,A.e3,A.f1,A.cG,A.jT,A.cF,A.cD,A.dy,A.dv,A.dr,A.iv,A.l4,A.bw,A.io,A.f4,A.ls,A.i7,A.dx,A.cm,A.dO,A.i9,A.cT,A.as,A.i8,A.eF,A.eG,A.hM,A.it,A.fb,A.fd,A.ip,A.cU,A.v,A.eY,A.aZ,A.f0,A.iA,A.cy,A.lw,A.l5,A.hq,A.eE,A.il,A.e6,A.bj,A.ak,A.iw,A.hA,A.a2,A.f9,A.kG,A.bn,A.mk,A.ir,A.cM,A.eV,A.lp,A.bl,A.kC,A.df,A.k2,A.ki,A.S,A.i3,A.aD,A.iq,A.lo,A.ig,A.ah,A.jH,A.a7,A.aY,A.kl,A.jg,A.j8,A.jG,A.b5,A.eH,A.e7,A.kD,A.o,A.br,A.j3,A.dH,A.G,A.aI,A.ci,A.ey,A.dI,A.hD,A.P,A.d5,A.b6,A.jh,A.b7,A.kc,A.bs,A.f,A.j9,A.kA,A.kf,A.ht,A.hH,A.hJ,A.eD,A.jk,A.aB,A.be,A.by,A.O,A.cP,A.ds])
q(J.ef,[J.h9,J.eh,J.b8,J.z,J.c8,J.bF,A.hi])
q(J.b8,[J.cE,A.aU,A.dT,A.jc,A.dX,A.q,A.hs])
q(J.cE,[J.hv,J.bM,J.bG])
r(J.jQ,J.z)
q(J.c8,[J.dc,J.ei])
q(A.j,[A.ck,A.Q,A.cH,A.aq,A.e4,A.bU,A.al,A.eQ,A.eg,A.iu,A.hB])
q(A.ck,[A.cx,A.fc])
r(A.eS,A.cx)
r(A.eP,A.fc)
q(A.aT,[A.fN,A.fM,A.jj,A.ee,A.hN,A.jR,A.lZ,A.m0,A.l0,A.l_,A.lz,A.lc,A.lk,A.kw,A.lr,A.ln,A.jX,A.lE,A.lF,A.kZ,A.l7,A.jO,A.ji,A.jM,A.ks,A.kt,A.kr,A.kq,A.jI,A.j4,A.j5,A.iM,A.iN,A.iO,A.kd,A.ke,A.km,A.ko,A.kn,A.jd,A.je,A.jf,A.j2,A.ka,A.k9,A.k8,A.k7,A.kb,A.k4,A.k5,A.k6,A.a3,A.a4,A.a5,A.kW,A.kX,A.kT,A.kS,A.kR,A.kO,A.kV,A.kU,A.j6,A.ma,A.m2,A.m3,A.m4,A.lP,A.lC,A.kz,A.iV,A.iU,A.iT,A.iS,A.ja,A.jb,A.lL,A.jm,A.jl,A.jn,A.jp,A.jr,A.jo,A.jF])
q(A.fN,[A.l3,A.m_,A.lA,A.lM,A.ld,A.jU,A.jW,A.kH,A.kI,A.kJ,A.lD,A.kh,A.jL,A.lW,A.j0,A.jZ,A.k3,A.kQ,A.kM,A.kP,A.kN,A.kp,A.mc,A.md,A.lO,A.lQ,A.lR,A.iW,A.iX,A.iY,A.iR,A.m9,A.kY,A.jq,A.k_,A.k0,A.k1])
r(A.aS,A.eP)
q(A.a1,[A.ej,A.ch,A.ha,A.hW,A.hC,A.dN,A.ik,A.hl,A.bD,A.hX,A.eN,A.cf,A.fP,A.fR])
r(A.ek,A.eX)
q(A.ek,[A.dt,A.aX])
r(A.a9,A.dt)
q(A.fM,[A.m7,A.l1,A.l2,A.lt,A.l8,A.lg,A.le,A.la,A.lf,A.l9,A.lj,A.li,A.lh,A.kx,A.lK,A.lq,A.kL,A.kK,A.kg,A.jK,A.lU,A.lT,A.jJ,A.jE,A.js,A.jz,A.jA,A.jB,A.jC,A.jx,A.jy,A.jt,A.ju,A.jv,A.jw,A.jD,A.ll])
q(A.Q,[A.D,A.e1,A.aV])
q(A.D,[A.aK,A.I,A.X,A.el])
r(A.e_,A.cH)
q(A.U,[A.cI,A.cR,A.eC])
r(A.d7,A.bU)
q(A.d6,[A.r,A.c6])
r(A.c7,A.ee)
r(A.er,A.ch)
q(A.hN,[A.hL,A.d3])
r(A.i6,A.dN)
r(A.em,A.cG)
r(A.bi,A.em)
q(A.eg,[A.i5,A.f3,A.au,A.im])
r(A.dh,A.hi)
r(A.eZ,A.dh)
r(A.f_,A.eZ)
r(A.ep,A.f_)
q(A.ep,[A.hh,A.eq,A.cK])
r(A.f5,A.ik)
r(A.f2,A.i9)
r(A.is,A.fb)
r(A.eW,A.bi)
r(A.dz,A.fd)
q(A.dz,[A.c_,A.fe])
r(A.eA,A.f0)
r(A.f8,A.fe)
q(A.cy,[A.fV,A.fE])
q(A.fV,[A.fB,A.i_])
r(A.cz,A.hM)
q(A.cz,[A.ix,A.fF,A.i0])
r(A.fC,A.ix)
q(A.bD,[A.dm,A.h6])
r(A.ib,A.f9)
q(A.aU,[A.b4,A.du])
q(A.b4,[A.p,A.bE])
r(A.x,A.p)
q(A.x,[A.fw,A.fz,A.cw,A.fZ,A.hE])
r(A.bz,A.q)
r(A.b9,A.bz)
r(A.eR,A.dX)
r(A.eT,A.eF)
r(A.ih,A.eT)
r(A.eU,A.eG)
r(A.h2,A.bl)
r(A.kB,A.kC)
q(A.l5,[A.dg,A.hR,A.bu])
q(A.S,[A.bS,A.cj,A.hP,A.hj,A.hF,A.cc,A.eB,A.b_,A.dq,A.aj])
q(A.b_,[A.cA,A.hg,A.fD,A.h1,A.fL,A.dk,A.dl,A.hk])
r(A.ev,A.dk)
r(A.hx,A.dl)
q(A.aj,[A.hp,A.ho,A.ag])
q(A.ag,[A.hn,A.bm,A.hu,A.fU,A.fX,A.h_])
q(A.bm,[A.hb,A.fx,A.hQ,A.h0,A.hz,A.fJ,A.hy,A.i2])
q(A.ah,[A.ic,A.fS,A.bW,A.ii,A.fO])
r(A.id,A.ic)
r(A.ie,A.id)
r(A.dW,A.ie)
r(A.ij,A.ii)
r(A.V,A.ij)
q(A.aX,[A.ac,A.fq])
r(A.fY,A.im)
q(A.a7,[A.bv,A.fG,A.dR,A.h4,A.fv,A.d9,A.hO,A.ed,A.db,A.e8,A.e9,A.cB,A.eb,A.da,A.ec,A.h5,A.h3,A.ft,A.ea,A.fu,A.fr,A.fs])
r(A.ia,A.eA)
r(A.fT,A.ia)
r(A.ez,A.i3)
q(A.b5,[A.bV,A.bc,A.dV])
q(A.bV,[A.ce,A.J])
q(A.bc,[A.m,A.E,A.cO,A.d4])
q(A.br,[A.fy,A.hT])
r(A.fp,A.dH)
r(A.fH,A.fp)
q(A.G,[A.R,A.h8,A.d8])
q(A.R,[A.eL,A.bZ,A.eu,A.bT,A.dp,A.eO])
q(A.eL,[A.ao,A.dJ])
q(A.ao,[A.di,A.dL])
r(A.fQ,A.bZ)
r(A.dP,A.fQ)
r(A.es,A.dP)
r(A.eK,A.ci)
q(A.dJ,[A.cv,A.c4])
q(A.c4,[A.dY,A.e0])
q(A.eu,[A.ew,A.dn])
r(A.eM,A.ew)
r(A.dM,A.eM)
r(A.ex,A.dn)
r(A.eJ,A.dp)
r(A.bJ,A.bT)
r(A.cJ,A.bJ)
r(A.eI,A.cJ)
q(A.h8,[A.dZ,A.dS])
r(A.fI,A.dI)
r(A.hf,A.b6)
q(A.hf,[A.eo,A.ca,A.cb,A.c9])
r(A.cC,A.kA)
q(A.cC,[A.hw,A.hZ,A.i4])
r(A.b2,A.hJ)
q(A.eD,[A.ar,A.hK])
r(A.bL,A.hK)
r(A.en,A.hD)
s(A.dt,A.bA)
s(A.fc,A.v)
s(A.eZ,A.v)
s(A.f_,A.bg)
s(A.eX,A.v)
s(A.f0,A.aZ)
s(A.fd,A.aZ)
s(A.fe,A.iA)
s(A.ic,A.iq)
s(A.id,A.lo)
s(A.ie,A.ig)
s(A.ii,A.iq)
s(A.ij,A.ig)
s(A.im,A.v)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{i:"int",t:"double",ae:"num",n:"String",B:"bool",ak:"Null",l:"List"},mangledNames:{},types:["B()","~()","ak()","f(f)","t(t,O<i,i>)","n()","B(n)","P(P)","B(n?)","B(aB)","i(i,i)","B(i)","~(b9)","B(G)","G(G,t)","~(~())","0^(0^,0^)<ae>","ak(@)","~(@,@)","@()","~(cQ,n,i)","~(H,n)","B(ah)","ao(ao)","n(n)","B(cb)","t(f)","B(i,f)","t(t{inflection:t?,pauseRatio:t?})","l<t>(P)","i()","i(@,@)","i(H?)","B(cc)","~(i,@)","b3<n,l<n>>()","l<n>()","ak(H,cd)","l<G>(G)","B(f)","@(@)","B(@)","aI(aI,aI)","B(H)","@(@,n)","n(cN)","B(n,n)","B(c9)","B(ca)","~(H?,H?)","@(n)","~(n,i)","~(n,i?)","B(dj[i])","cQ(@,@)","ak(~())","l<f>(l<l<f>>,@)","l<P>(n,R)","~(n,R,l<P>)","l<P>(l<P>)","B(P)","~(ae)","t(i)","~(q)","P(l<t>)","f(t)","f(f,f)","t(n)","~(V)","l<t>(O<i,l<t>>)","t(O<i,t>)","t(l<t>)","t(t)","bs(bs,bs)","n(n?)","n?()","i(be)","~(l<G>,bx<G>)","H(be)","H(aB)","i(aB,aB)","l<be>(bj<H,l<aB>>)","bh<ak>()","bL()","B(H?)","n(bc)","~(H?)","~(@)","B(H?,H?)","ak(@,cd)","i(i)","l<f>(l<f>,l<f>,t)","as<@>(@)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.rr(v.typeUniverse,JSON.parse('{"hv":"cE","bM":"cE","bG":"cE","u3":"q","ua":"q","ue":"p","u4":"x","uf":"x","ub":"b4","u8":"b4","ug":"b9","u6":"bz","u5":"bE","um":"bE","h9":{"B":[]},"eh":{"ak":[]},"z":{"l":["1"],"Q":["1"],"j":["1"]},"jQ":{"z":["1"],"l":["1"],"Q":["1"],"j":["1"]},"az":{"U":["1"]},"c8":{"t":[],"ae":[],"af":["ae"]},"dc":{"t":[],"i":[],"ae":[],"af":["ae"]},"ei":{"t":[],"ae":[],"af":["ae"]},"bF":{"n":[],"af":["n"],"dj":[]},"ck":{"j":["2"]},"dU":{"U":["2"]},"cx":{"ck":["1","2"],"j":["2"],"j.E":"2"},"eS":{"cx":["1","2"],"ck":["1","2"],"Q":["2"],"j":["2"],"j.E":"2"},"eP":{"v":["2"],"l":["2"],"ck":["1","2"],"Q":["2"],"j":["2"]},"aS":{"eP":["1","2"],"v":["2"],"l":["2"],"ck":["1","2"],"Q":["2"],"j":["2"],"v.E":"2","j.E":"2"},"ej":{"a1":[]},"a9":{"v":["i"],"bA":["i"],"l":["i"],"Q":["i"],"j":["i"],"v.E":"i","bA.E":"i"},"Q":{"j":["1"]},"D":{"Q":["1"],"j":["1"]},"aK":{"D":["1"],"Q":["1"],"j":["1"],"D.E":"1","j.E":"1"},"L":{"U":["1"]},"cH":{"j":["2"],"j.E":"2"},"e_":{"cH":["1","2"],"Q":["2"],"j":["2"],"j.E":"2"},"cI":{"U":["2"]},"I":{"D":["2"],"Q":["2"],"j":["2"],"D.E":"2","j.E":"2"},"aq":{"j":["1"],"j.E":"1"},"cR":{"U":["1"]},"e4":{"j":["2"],"j.E":"2"},"e5":{"U":["2"]},"bU":{"j":["1"],"j.E":"1"},"d7":{"bU":["1"],"Q":["1"],"j":["1"],"j.E":"1"},"eC":{"U":["1"]},"e1":{"Q":["1"],"j":["1"],"j.E":"1"},"e2":{"U":["1"]},"al":{"j":["1"],"j.E":"1"},"cS":{"U":["1"]},"dt":{"v":["1"],"bA":["1"],"l":["1"],"Q":["1"],"j":["1"]},"X":{"D":["1"],"Q":["1"],"j":["1"],"D.E":"1","j.E":"1"},"d6":{"b3":["1","2"]},"r":{"d6":["1","2"],"b3":["1","2"]},"eQ":{"j":["1"],"j.E":"1"},"c6":{"d6":["1","2"],"b3":["1","2"]},"ee":{"aT":[],"bR":[]},"c7":{"aT":[],"bR":[]},"er":{"ch":[],"a1":[]},"ha":{"a1":[]},"hW":{"a1":[]},"hm":{"bQ":[]},"f1":{"cd":[]},"aT":{"bR":[]},"fM":{"aT":[],"bR":[]},"fN":{"aT":[],"bR":[]},"hN":{"aT":[],"bR":[]},"hL":{"aT":[],"bR":[]},"d3":{"aT":[],"bR":[]},"hC":{"a1":[]},"i6":{"a1":[]},"bi":{"cG":["1","2"],"jS":["1","2"],"b3":["1","2"]},"aV":{"Q":["1"],"j":["1"],"j.E":"1"},"cF":{"U":["1"]},"cD":{"dj":[]},"dy":{"cN":[],"de":[]},"i5":{"j":["cN"],"j.E":"cN"},"dv":{"U":["cN"]},"dr":{"de":[]},"iu":{"j":["de"],"j.E":"de"},"iv":{"U":["de"]},"dh":{"dd":["1"]},"ep":{"v":["i"],"dd":["i"],"l":["i"],"Q":["i"],"j":["i"],"bg":["i"]},"hh":{"v":["i"],"dd":["i"],"l":["i"],"Q":["i"],"j":["i"],"bg":["i"],"v.E":"i","bg.E":"i"},"eq":{"v":["i"],"qW":[],"dd":["i"],"l":["i"],"Q":["i"],"j":["i"],"bg":["i"],"v.E":"i","bg.E":"i"},"cK":{"v":["i"],"cQ":[],"dd":["i"],"l":["i"],"Q":["i"],"j":["i"],"bg":["i"],"v.E":"i","bg.E":"i"},"f4":{"nZ":[]},"ik":{"a1":[]},"f5":{"ch":[],"a1":[]},"as":{"bh":["1"]},"cm":{"U":["1"]},"f3":{"j":["1"],"j.E":"1"},"dO":{"a1":[]},"f2":{"i9":["1"]},"fb":{"o6":[]},"is":{"fb":[],"o6":[]},"eW":{"bi":["1","2"],"cG":["1","2"],"jS":["1","2"],"b3":["1","2"]},"c_":{"dz":["1"],"aZ":["1"],"bx":["1"],"Q":["1"],"j":["1"],"aZ.E":"1"},"cU":{"U":["1"]},"eg":{"j":["1"]},"ek":{"v":["1"],"l":["1"],"Q":["1"],"j":["1"]},"em":{"cG":["1","2"],"b3":["1","2"]},"cG":{"b3":["1","2"]},"el":{"D":["1"],"nM":["1"],"Q":["1"],"j":["1"],"D.E":"1","j.E":"1"},"eY":{"U":["1"]},"eA":{"aZ":["1"],"bx":["1"],"Q":["1"],"j":["1"]},"dz":{"aZ":["1"],"bx":["1"],"Q":["1"],"j":["1"]},"f8":{"dz":["1"],"aZ":["1"],"iA":["1"],"bx":["1"],"Q":["1"],"j":["1"],"aZ.E":"1"},"fB":{"cy":["n","l<i>"]},"ix":{"cz":["l<i>","n"]},"fC":{"cz":["l<i>","n"]},"fE":{"cy":["l<i>","n"]},"fF":{"cz":["l<i>","n"]},"fV":{"cy":["n","l<i>"]},"i_":{"cy":["n","l<i>"]},"i0":{"cz":["l<i>","n"]},"t":{"ae":[],"af":["ae"]},"i":{"ae":[],"af":["ae"]},"l":{"Q":["1"],"j":["1"]},"ae":{"af":["ae"]},"cN":{"de":[]},"bx":{"Q":["1"],"j":["1"]},"n":{"af":["n"],"dj":[]},"dN":{"a1":[]},"ch":{"a1":[]},"hl":{"a1":[]},"bD":{"a1":[]},"dm":{"a1":[]},"h6":{"a1":[]},"hX":{"a1":[]},"eN":{"a1":[]},"cf":{"a1":[]},"fP":{"a1":[]},"hq":{"a1":[]},"eE":{"a1":[]},"fR":{"a1":[]},"il":{"bQ":[]},"e6":{"bQ":[]},"iw":{"cd":[]},"hB":{"j":["i"],"j.E":"i"},"hA":{"U":["i"]},"a2":{"qN":[]},"f9":{"hY":[]},"bn":{"hY":[]},"ib":{"hY":[]},"b9":{"q":[]},"x":{"p":[],"aU":[]},"fw":{"p":[],"aU":[]},"fz":{"p":[],"aU":[]},"cw":{"p":[],"aU":[]},"bE":{"aU":[]},"dX":{"my":["ae"]},"p":{"aU":[]},"fZ":{"p":[],"aU":[]},"b4":{"aU":[]},"hE":{"p":[],"aU":[]},"bz":{"q":[]},"du":{"aU":[]},"eR":{"my":["ae"]},"eT":{"eF":["1"]},"ih":{"eT":["1"],"eF":["1"]},"eU":{"eG":["1"]},"ir":{"qx":[]},"au":{"j":["l<1>"],"j.E":"l<1>"},"eV":{"U":["l<1>"]},"h2":{"bl":[]},"cc":{"S":[]},"eB":{"S":[]},"aj":{"S":[]},"bS":{"S":[]},"cj":{"S":[]},"hP":{"S":[]},"hj":{"S":[]},"hF":{"S":[]},"b_":{"S":[]},"cA":{"b_":[],"S":[]},"hg":{"b_":[],"S":[]},"fD":{"b_":[],"S":[]},"h1":{"b_":[],"S":[]},"fL":{"b_":[],"S":[]},"dk":{"b_":[],"S":[]},"dl":{"b_":[],"S":[]},"ev":{"dk":[],"b_":[],"S":[]},"hx":{"dl":[],"b_":[],"S":[]},"dq":{"S":[]},"hk":{"b_":[],"S":[]},"hp":{"aj":[],"S":[]},"ho":{"aj":[],"S":[]},"ag":{"aj":[],"S":[]},"hn":{"ag":[],"aj":[],"S":[]},"bm":{"ag":[],"aj":[],"S":[]},"hb":{"bm":[],"ag":[],"aj":[],"S":[]},"hu":{"ag":[],"aj":[],"S":[]},"fU":{"ag":[],"aj":[],"S":[]},"fX":{"ag":[],"aj":[],"S":[]},"fx":{"bm":[],"ag":[],"aj":[],"S":[]},"hQ":{"bm":[],"ag":[],"aj":[],"S":[]},"h0":{"bm":[],"ag":[],"aj":[],"S":[]},"h_":{"ag":[],"aj":[],"S":[]},"hz":{"bm":[],"ag":[],"aj":[],"S":[]},"fJ":{"bm":[],"ag":[],"aj":[],"S":[]},"hy":{"bm":[],"ag":[],"aj":[],"S":[]},"i2":{"bm":[],"ag":[],"aj":[],"S":[]},"i3":{"o5":[]},"aD":{"af":["H"]},"dW":{"ah":[]},"V":{"ah":[]},"fS":{"ah":[]},"bW":{"ah":[]},"fO":{"ah":[]},"ac":{"aX":["ah"],"v":["ah"],"l":["ah"],"Q":["ah"],"j":["ah"],"v.E":"ah","aX.E":"ah"},"fY":{"v":["V"],"l":["V"],"Q":["V"],"j":["V"],"v.E":"V","j.E":"V"},"aY":{"bQ":[]},"bv":{"a7":[]},"fG":{"a7":[]},"dR":{"a7":[]},"h4":{"a7":[]},"fv":{"a7":[]},"d9":{"a7":[]},"hO":{"a7":[]},"ed":{"a7":[]},"db":{"a7":[]},"e8":{"a7":[]},"e9":{"a7":[]},"cB":{"a7":[]},"eb":{"a7":[]},"da":{"a7":[]},"ec":{"a7":[]},"h5":{"a7":[]},"h3":{"a7":[]},"ft":{"a7":[]},"ea":{"a7":[]},"fu":{"a7":[]},"fr":{"a7":[]},"fs":{"a7":[]},"fT":{"aZ":["n"],"bx":["n"],"Q":["n"],"j":["n"],"aZ.E":"n"},"ia":{"aZ":["n"],"bx":["n"],"Q":["n"],"j":["n"]},"aX":{"v":["1"],"l":["1"],"Q":["1"],"j":["1"]},"ez":{"o5":[]},"bc":{"b5":[]},"bV":{"b5":[]},"ce":{"bV":[],"b5":[]},"J":{"bV":[],"b5":[]},"m":{"bc":[],"b5":[]},"E":{"bc":[],"b5":[]},"cO":{"bc":[],"b5":[]},"d4":{"bc":[],"b5":[]},"dV":{"b5":[]},"e7":{"U":["b5"]},"fq":{"aX":["V?"],"v":["V?"],"l":["V?"],"Q":["V?"],"j":["V?"],"v.E":"V?","aX.E":"V?"},"fy":{"br":[]},"hT":{"br":[]},"fp":{"dH":[]},"fH":{"dH":[]},"di":{"ao":[],"R":[],"G":[]},"fQ":{"bZ":[],"R":[],"G":[]},"dP":{"bZ":[],"R":[],"G":[]},"es":{"bZ":[],"R":[],"G":[]},"cv":{"R":[],"G":[]},"ao":{"R":[],"G":[]},"eK":{"ci":[]},"eL":{"R":[],"G":[]},"dJ":{"R":[],"G":[]},"c4":{"R":[],"G":[]},"dY":{"c4":[],"R":[],"G":[]},"e0":{"c4":[],"R":[],"G":[]},"dL":{"ao":[],"R":[],"G":[]},"eu":{"R":[],"G":[]},"ew":{"R":[],"G":[]},"eM":{"R":[],"G":[]},"dM":{"R":[],"G":[]},"dn":{"R":[],"G":[]},"ex":{"R":[],"G":[]},"bT":{"R":[],"G":[]},"dp":{"R":[],"G":[]},"bJ":{"bT":[],"R":[],"G":[]},"eJ":{"R":[],"G":[]},"cJ":{"bJ":[],"bT":[],"R":[],"G":[]},"eI":{"cJ":[],"bJ":[],"bT":[],"R":[],"G":[]},"h8":{"G":[]},"dZ":{"G":[]},"dS":{"G":[]},"d8":{"G":[]},"R":{"G":[]},"bZ":{"R":[],"G":[]},"eO":{"R":[],"G":[]},"fI":{"dI":[]},"ca":{"b6":[]},"cb":{"b6":[]},"c9":{"b6":[]},"hf":{"b6":[]},"eo":{"b6":[]},"ht":{"bQ":[]},"hw":{"cC":[]},"hZ":{"cC":[]},"i4":{"cC":[]},"ml":{"bL":[],"bk":[],"af":["bk"]},"b2":{"by":[],"af":["by"]},"ar":{"ml":[],"bL":[],"bk":[],"af":["bk"]},"by":{"af":["by"]},"hJ":{"by":[],"af":["by"]},"bk":{"af":["bk"]},"hK":{"bk":[],"af":["bk"]},"eD":{"bk":[],"af":["bk"]},"bL":{"bk":[],"af":["bk"]},"en":{"hD":[]},"cQ":{"l":["i"],"Q":["i"],"j":["i"]}}'))
A.rq(v.typeUniverse,JSON.parse('{"dt":1,"fc":2,"dh":1,"hM":2,"eg":1,"ek":1,"em":2,"eA":1,"eX":1,"f0":1,"fd":1,"fe":1}'))
var u={D:" must not be greater than the number of characters in the file, ",U:"Cannot extract a file path from a URI with a fragment component",z:"Cannot extract a file path from a URI with a query component",Q:"Cannot extract a non-Windows file path from a file URI with an authority",w:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",v:"No color list in VMobject with attribute name ",A:"expected-attribute-value-but-got-right-bracket",g:"expected-closing-tag-but-got-right-bracket",f:"expected-doctype-name-but-got-right-bracket",S:"expected-space-or-right-bracket-in-doctype",d:"unexpected-bang-after-double-dash-in-comment",H:"unexpected-character-after-attribute-value",B:"unexpected-character-after-soldius-in-tag",V:"unexpected-character-in-unquoted-attribute-value",K:"unexpected-dash-after-double-dash-in-comment",q:"unexpected-frameset-in-frameset-innerhtml",G:"unexpected-html-element-in-foreign-content",M:"unexpected-start-tag-implies-table-voodoo",r:"unexpected-table-element-end-tag-in-select-in-table",a:"unexpected-table-element-start-tag-in-select-in-table"}
var t=(function rtii(){var s=A.aO
return{pc:s("@<i>"),aY:s("cv"),A:s("bs"),u:s("dO"),fy:s("aI"),jQ:s("cw"),p1:s("E"),E:s("a9"),G:s("P"),cw:s("d4"),bP:s("af<@>"),B:s("r<n,n>"),R:s("r<n,@>"),i:s("dV"),dA:s("dW"),gt:s("Q<@>"),h:s("V"),ia:s("J"),fz:s("a1"),fq:s("q"),d3:s("b7<b6>"),gG:s("b7<c9>"),m4:s("b7<ca>"),Y:s("b7<cb>"),cY:s("bu"),e:s("b6"),mA:s("bQ"),lS:s("ml"),gY:s("bR"),g7:s("bh<@>"),ha:s("c6<dg,n>"),ek:s("d8"),gx:s("bS"),aB:s("db"),id:s("c7<t>"),oS:s("au<G>"),c2:s("au<H>"),pn:s("au<R>"),b5:s("au<f>"),lx:s("au<t>"),lb:s("au<i>"),cj:s("j<V>"),hl:s("j<ah>"),bq:s("j<n>"),e7:s("j<@>"),lq:s("z<br>"),nC:s("z<cv>"),fp:s("z<bs>"),iX:s("z<aI>"),O:s("z<P>"),hR:s("z<d5>"),il:s("z<V>"),fO:s("z<b7<b6>>"),oQ:s("z<aj>"),b1:s("z<ao>"),km:s("z<l<ao>>"),Z:s("z<l<G>>"),bo:s("z<l<H>>"),ng:s("z<l<f>>"),b:s("z<l<t>>"),fC:s("z<l<i>>"),bV:s("z<b3<n,@>>"),kU:s("z<df>"),r:s("z<G>"),d:s("z<ah>"),a8:s("z<o<n,n>>"),eH:s("z<o<@,@>>"),bD:s("z<aY>"),gg:s("z<a7>"),b7:s("z<cc>"),iM:s("z<eB>"),nn:s("z<bJ>"),dw:s("z<eG<@>>"),s:s("z<n>"),ks:s("z<bc>"),kG:s("z<eH>"),bB:s("z<cP<br,t,t>>"),ez:s("z<ds<f,f,f,f>>"),bs:s("z<cQ>"),hJ:s("z<R>"),l:s("z<f>"),pg:s("z<aB>"),dg:s("z<be>"),n:s("z<t>"),m:s("z<@>"),t:s("z<i>"),lB:s("z<V?>"),hg:s("z<ah?>"),D:s("z<n?>"),po:s("z<G(G,t)>"),T:s("eh"),dY:s("bG"),dX:s("dd<@>"),lY:s("uc"),am:s("ud"),F:s("ao"),oP:s("jS<H,n>"),cG:s("l<br>"),ev:s("l<P>"),jB:s("l<V>"),oR:s("l<b7<b6>>"),g4:s("l<ao>"),ls:s("l<l<f>>"),a:s("l<G>"),I:s("l<n>"),oX:s("l<bc>"),fr:s("l<S>"),dq:s("l<cP<br,t,t>>"),y:s("l<f>"),bd:s("l<t>"),gs:s("l<@>"),L:s("l<i>"),eU:s("l<aB?>"),le:s("l<G(G,t)>"),mH:s("ag"),lO:s("bj<H,l<aB>>"),fg:s("b3<n,P>"),fY:s("b3<bu,l<b7<b6>>>"),gQ:s("I<n,n>"),iZ:s("I<n,@>"),aQ:s("I<f,t>"),j:s("G"),k5:s("G(G,t)"),gn:s("c9"),gD:s("b9"),m6:s("eo"),oJ:s("ca"),f:s("cb"),hD:s("cK"),J:s("ah"),P:s("ak"),f7:s("di"),K:s("H"),w:s("o<n,n>"),nz:s("o<@,@>"),X:s("o<n,n?>"),iA:s("o<n?,n?>"),jK:s("m"),oc:s("dj"),n8:s("cM<ae>"),f_:s("nM<n>"),mx:s("my<ae>"),lu:s("cN"),dT:s("cc"),b9:s("dq"),ns:s("bx<G>"),hq:s("by"),hs:s("bk"),ol:s("bL"),lH:s("cO"),k:s("cd"),ny:s("ce"),N:s("n"),g:s("bc"),gL:s("n(n)"),mN:s("aK<f>"),fn:s("bV"),oI:s("bW"),q:s("bl"),bF:s("S"),iu:s("O<f,f>"),d7:s("O<i,t>"),o:s("O<i,i>"),kk:s("O<i,l<t>>"),oM:s("cP<br,t,t>"),cn:s("ds<f,f,f,f>"),f5:s("nZ"),do:s("ch"),hb:s("cQ"),cx:s("bM"),jJ:s("hY"),bX:s("R"),V:s("f"),ew:s("f(f)"),v:s("al<V>"),na:s("al<n>"),pl:s("cS<V>"),eX:s("ih<b9>"),av:s("as<ak>"),j_:s("as<@>"),hy:s("as<i>"),iS:s("as<ae>"),C:s("aB"),nR:s("be"),fD:s("f2<ae>"),k4:s("B"),c:s("B()"),cT:s("B(V)"),iW:s("B(H)"),gS:s("B(n)"),aP:s("B(aB)"),gw:s("B(i)"),W:s("t"),iJ:s("t(t,O<i,i>)"),eL:s("t(f)"),f3:s("t(t)"),z:s("@"),mY:s("@()"),mq:s("@(H)"),eK:s("@(H,cd)"),f6:s("@(n)"),S:s("i"),im:s("0&*"),_:s("H*"),mV:s("V?"),gK:s("bh<ak>?"),x:s("l<P>?"),gv:s("l<ao>?"),jq:s("l<eH>?"),fA:s("l<f>?"),lX:s("l<f>(l<f>,l<f>,t)?"),f8:s("l<i>?"),e1:s("ah?"),iD:s("H?"),oA:s("bx<n>?"),g9:s("b_?"),jv:s("n?"),nU:s("b5?"),Q:s("cT<@,@>?"),dd:s("aB?"),nF:s("ip?"),pi:s("B(n)?"),U:s("@(q)?"),dU:s("i(V,V)?"),jE:s("~()?"),p:s("ae"),H:s("~"),M:s("~()"),m3:s("~(df)"),hv:s("~(ae)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.a9=A.cw.prototype
B.w=A.dT.prototype
B.b3=J.ef.prototype
B.a=J.z.prototype
B.e=J.dc.prototype
B.h=J.c8.prototype
B.b=J.bF.prototype
B.b4=J.bG.prototype
B.b5=J.b8.prototype
B.y=A.eq.prototype
B.cN=A.cK.prototype
B.aB=J.hv.prototype
B.a3=J.bM.prototype
B.e5=A.du.prototype
B.aF=new A.fC(!1,127)
B.z=new A.f(-1,0,0)
B.O=new A.aI(null,null,null,B.z,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.c=new A.P(1,1,1,1)
B.N=new A.f(1,-1,0)
B.E=new A.aI(B.c,!1,null,B.N,null,!1,null,null,null,null,null,null,null,null,0.5,0.1,null,null,null,2)
B.ab=new A.P(0.73333,0.73333,0.73333,1)
B.k=new A.f(0,-1,0)
B.b6=A.a(s([0]),t.n)
B.P=new A.aI(B.ab,!0,!1,B.k,1,!0,0.1,1,null,B.b6,!1,null,2,0,0.75,0.25,0.25,0.25,null,4)
B.r=new A.aI(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.a4=new A.aI(null,null,null,B.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.F=new A.c7(A.p6(),t.id)
B.a5=new A.c7(A.p6(),A.aO("c7<i>"))
B.Q=new A.c7(A.tO(),t.id)
B.aS=new A.fB()
B.e7=new A.fF()
B.aT=new A.fE()
B.a6=new A.e2(A.aO("e2<0&>"))
B.a7=function getTagFallback(o) {
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
B.a8=function(hooks) { return hooks; }

B.b_=new A.hq()
B.q=new A.ku()
B.A=new A.i_()
B.l=new A.is()
B.b0=new A.iw()
B.m=new A.P(0,0,0,0)
B.aa=new A.P(0,0,0,1)
B.t=new A.P(0.98824,0.38431,0.33333,1)
B.u=new A.P(0.51373,0.75686,0.40392,1)
B.b2=new A.P(1,0.52549,0.18431,1)
B.G=new A.bu("mouseMovedEvent")
B.B=new A.bu("mousePressedEvent")
B.x=new A.bu("mouseReleasedEvent")
B.C=new A.bu("mouseDraggedEvent")
B.R=new A.bu("keyPressedEvent")
B.S=new A.bu("keyReleasedEvent")
B.H=A.a(s([0,0,32776,33792,1,10240,0,0]),t.t)
B.ar=new A.o("http://www.w3.org/1999/xhtml","applet",t.w)
B.at=new A.o("http://www.w3.org/1999/xhtml","caption",t.w)
B.a0=new A.o("http://www.w3.org/1999/xhtml","html",t.w)
B.aw=new A.o("http://www.w3.org/1999/xhtml","marquee",t.w)
B.aA=new A.o("http://www.w3.org/1999/xhtml","object",t.w)
B.Z=new A.o("http://www.w3.org/1999/xhtml","table",t.w)
B.av=new A.o("http://www.w3.org/1999/xhtml","td",t.w)
B.ap=new A.o("http://www.w3.org/1999/xhtml","th",t.w)
B.ax=new A.o("http://www.w3.org/1998/Math/MathML","mi",t.w)
B.as=new A.o("http://www.w3.org/1998/Math/MathML","mo",t.w)
B.az=new A.o("http://www.w3.org/1998/Math/MathML","mn",t.w)
B.au=new A.o("http://www.w3.org/1998/Math/MathML","ms",t.w)
B.aq=new A.o("http://www.w3.org/1998/Math/MathML","mtext",t.w)
B.du=new A.o("http://www.w3.org/1998/Math/MathML","annotation-xml",t.w)
B.a_=new A.o("http://www.w3.org/2000/svg","foreignObject",t.w)
B.ay=new A.o("http://www.w3.org/2000/svg","desc",t.w)
B.ao=new A.o("http://www.w3.org/2000/svg","title",t.w)
B.T=A.a(s([B.ar,B.at,B.a0,B.aw,B.aA,B.Z,B.av,B.ap,B.ax,B.as,B.az,B.au,B.aq,B.du,B.a_,B.ay,B.ao]),t.m)
B.dH=new A.o("http://www.w3.org/1999/xhtml","button",t.nz)
B.b8=A.a(s([B.dH]),t.eH)
B.b9=A.a(s(["b","big","blockquote","body","br","center","code","dd","div","dl","dt","em","embed","h1","h2","h3","h4","h5","h6","head","hr","i","img","li","listing","menu","meta","nobr","ol","p","pre","ruby","s","small","span","strike","strong","sub","sup","table","tt","u","ul","var"]),t.s)
B.I=A.a(s(["h1","h2","h3","h4","h5","h6"]),t.s)
B.U=A.a(s(["dd","dt","li","option","optgroup","p","rp","rt"]),t.s)
B.J=A.a(s([0,0,65490,45055,65535,34815,65534,18431]),t.t)
B.bc=A.a(s(["+//silmaril//dtd html pro v0r11 19970101//","-//advasoft ltd//dtd html 3.0 aswedit + extensions//","-//as//dtd html 3.0 aswedit + extensions//","-//ietf//dtd html 2.0 level 1//","-//ietf//dtd html 2.0 level 2//","-//ietf//dtd html 2.0 strict level 1//","-//ietf//dtd html 2.0 strict level 2//","-//ietf//dtd html 2.0 strict//","-//ietf//dtd html 2.0//","-//ietf//dtd html 2.1e//","-//ietf//dtd html 3.0//","-//ietf//dtd html 3.2 final//","-//ietf//dtd html 3.2//","-//ietf//dtd html 3//","-//ietf//dtd html level 0//","-//ietf//dtd html level 1//","-//ietf//dtd html level 2//","-//ietf//dtd html level 3//","-//ietf//dtd html strict level 0//","-//ietf//dtd html strict level 1//","-//ietf//dtd html strict level 2//","-//ietf//dtd html strict level 3//","-//ietf//dtd html strict//","-//ietf//dtd html//","-//metrius//dtd metrius presentational//","-//microsoft//dtd internet explorer 2.0 html strict//","-//microsoft//dtd internet explorer 2.0 html//","-//microsoft//dtd internet explorer 2.0 tables//","-//microsoft//dtd internet explorer 3.0 html strict//","-//microsoft//dtd internet explorer 3.0 html//","-//microsoft//dtd internet explorer 3.0 tables//","-//netscape comm. corp.//dtd html//","-//netscape comm. corp.//dtd strict html//","-//o'reilly and associates//dtd html 2.0//","-//o'reilly and associates//dtd html extended 1.0//","-//o'reilly and associates//dtd html extended relaxed 1.0//","-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//","-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//","-//spyglass//dtd html 2.0 extended//","-//sq//dtd html 2.0 hotmetal + extensions//","-//sun microsystems corp.//dtd hotjava html//","-//sun microsystems corp.//dtd hotjava strict html//","-//w3c//dtd html 3 1995-03-24//","-//w3c//dtd html 3.2 draft//","-//w3c//dtd html 3.2 final//","-//w3c//dtd html 3.2//","-//w3c//dtd html 3.2s draft//","-//w3c//dtd html 4.0 frameset//","-//w3c//dtd html 4.0 transitional//","-//w3c//dtd html experimental 19960712//","-//w3c//dtd html experimental 970421//","-//w3c//dtd w3 html//","-//w3o//dtd w3 html 3.0//","-//webtechs//dtd mozilla html 2.0//","-//webtechs//dtd mozilla html//"]),t.s)
B.K=A.a(s([0,0,26624,1023,65534,2047,65534,2047]),t.t)
B.bd=A.a(s(["uU","bB","lL","iI","cC"]),t.s)
B.be=A.a(s([11,65534,65535,131070,131071,196606,196607,262142,262143,327678,327679,393214,393215,458750,458751,524286,524287,589822,589823,655358,655359,720894,720895,786430,786431,851966,851967,917502,917503,983038,983039,1048574,1048575,1114110,1114111]),t.t)
B.V=A.a(s(["table","tbody","tfoot","thead","tr"]),t.s)
B.cO=new A.o("http://www.w3.org/1999/xhtml","ol",t.nz)
B.dh=new A.o("http://www.w3.org/1999/xhtml","ul",t.nz)
B.bf=A.a(s([B.cO,B.dh]),t.eH)
B.i=A.a(s(["unit","value"]),t.s)
B.bI=new A.r(2,{unit:600,value:"em"},B.i,t.R)
B.bZ=new A.r(2,{unit:601,value:"ex"},B.i,t.R)
B.c2=new A.r(2,{unit:602,value:"px"},B.i,t.R)
B.bU=new A.r(2,{unit:603,value:"cm"},B.i,t.R)
B.bX=new A.r(2,{unit:604,value:"mm"},B.i,t.R)
B.bS=new A.r(2,{unit:605,value:"in"},B.i,t.R)
B.bH=new A.r(2,{unit:606,value:"pt"},B.i,t.R)
B.c5=new A.r(2,{unit:607,value:"pc"},B.i,t.R)
B.bR=new A.r(2,{unit:608,value:"deg"},B.i,t.R)
B.c1=new A.r(2,{unit:609,value:"rad"},B.i,t.R)
B.bL=new A.r(2,{unit:610,value:"grad"},B.i,t.R)
B.c_=new A.r(2,{unit:611,value:"turn"},B.i,t.R)
B.bM=new A.r(2,{unit:612,value:"ms"},B.i,t.R)
B.bY=new A.r(2,{unit:613,value:"s"},B.i,t.R)
B.bO=new A.r(2,{unit:614,value:"hz"},B.i,t.R)
B.c3=new A.r(2,{unit:615,value:"khz"},B.i,t.R)
B.bQ=new A.r(2,{unit:617,value:"fr"},B.i,t.R)
B.bK=new A.r(2,{unit:618,value:"dpi"},B.i,t.R)
B.bN=new A.r(2,{unit:619,value:"dpcm"},B.i,t.R)
B.bT=new A.r(2,{unit:620,value:"dppx"},B.i,t.R)
B.bJ=new A.r(2,{unit:621,value:"ch"},B.i,t.R)
B.bW=new A.r(2,{unit:622,value:"rem"},B.i,t.R)
B.c0=new A.r(2,{unit:623,value:"vw"},B.i,t.R)
B.bV=new A.r(2,{unit:624,value:"vh"},B.i,t.R)
B.c4=new A.r(2,{unit:625,value:"vmin"},B.i,t.R)
B.bP=new A.r(2,{unit:626,value:"vmax"},B.i,t.R)
B.ac=A.a(s([B.bI,B.bZ,B.c2,B.bU,B.bX,B.bS,B.bH,B.c5,B.bR,B.c1,B.bL,B.c_,B.bM,B.bY,B.bO,B.c3,B.bQ,B.bK,B.bN,B.bT,B.bJ,B.bW,B.c0,B.bV,B.c4,B.bP]),t.bV)
B.ad=A.a(s(["-//w3c//dtd html 4.01 frameset//","-//w3c//dtd html 4.01 transitional//"]),t.s)
B.bi=A.a(s(["address","div","p"]),t.s)
B.ae=A.a(s([B.ax,B.as,B.az,B.au,B.aq]),t.a8)
B.f=A.a(s(["type","value"]),t.s)
B.ct=new A.r(2,{type:670,value:"top-left-corner"},B.f,t.R)
B.cn=new A.r(2,{type:671,value:"top-left"},B.f,t.R)
B.cB=new A.r(2,{type:672,value:"top-center"},B.f,t.R)
B.cC=new A.r(2,{type:673,value:"top-right"},B.f,t.R)
B.c9=new A.r(2,{type:674,value:"top-right-corner"},B.f,t.R)
B.cg=new A.r(2,{type:675,value:"bottom-left-corner"},B.f,t.R)
B.cr=new A.r(2,{type:676,value:"bottom-left"},B.f,t.R)
B.cA=new A.r(2,{type:677,value:"bottom-center"},B.f,t.R)
B.cb=new A.r(2,{type:678,value:"bottom-right"},B.f,t.R)
B.ci=new A.r(2,{type:679,value:"bottom-right-corner"},B.f,t.R)
B.cz=new A.r(2,{type:680,value:"left-top"},B.f,t.R)
B.ck=new A.r(2,{type:681,value:"left-middle"},B.f,t.R)
B.ch=new A.r(2,{type:682,value:"right-bottom"},B.f,t.R)
B.cd=new A.r(2,{type:683,value:"right-top"},B.f,t.R)
B.cv=new A.r(2,{type:684,value:"right-middle"},B.f,t.R)
B.cw=new A.r(2,{type:685,value:"right-bottom"},B.f,t.R)
B.bj=A.a(s([B.ct,B.cn,B.cB,B.cC,B.c9,B.cg,B.cr,B.cA,B.cb,B.ci,B.cz,B.ck,B.ch,B.cd,B.cv,B.cw]),t.bV)
B.ag=A.a(s(["0","1","2","3","4","5","6","7","8","9"]),t.s)
B.bk=A.a(s([]),t.r)
B.W=A.a(s([]),t.eH)
B.o=A.a(s([]),t.s)
B.bn=A.a(s([0,0,32722,12287,65534,34815,65534,18431]),t.t)
B.bo=A.a(s(["oO","cC","tT","yY","pP","eE"]),t.s)
B.bp=A.a(s([B.G,B.B,B.x,B.C,B.R,B.S]),A.aO("z<bu>"))
B.bq=A.a(s(["-//w3o//dtd w3 html strict 3.0//en//","-/w3c/dtd html 4.0 transitional/en","html"]),t.s)
B.cH=new A.r(2,{type:641,value:"import"},B.f,t.R)
B.cq=new A.r(2,{type:642,value:"media"},B.f,t.R)
B.co=new A.r(2,{type:643,value:"page"},B.f,t.R)
B.cF=new A.r(2,{type:644,value:"charset"},B.f,t.R)
B.cu=new A.r(2,{type:645,value:"stylet"},B.f,t.R)
B.cc=new A.r(2,{type:646,value:"keyframes"},B.f,t.R)
B.cx=new A.r(2,{type:647,value:"-webkit-keyframes"},B.f,t.R)
B.cG=new A.r(2,{type:648,value:"-moz-keyframes"},B.f,t.R)
B.cs=new A.r(2,{type:649,value:"-ms-keyframes"},B.f,t.R)
B.cj=new A.r(2,{type:650,value:"-o-keyframes"},B.f,t.R)
B.cJ=new A.r(2,{type:651,value:"font-face"},B.f,t.R)
B.cm=new A.r(2,{type:652,value:"namespace"},B.f,t.R)
B.cp=new A.r(2,{type:653,value:"host"},B.f,t.R)
B.ca=new A.r(2,{type:654,value:"mixin"},B.f,t.R)
B.cy=new A.r(2,{type:655,value:"include"},B.f,t.R)
B.cE=new A.r(2,{type:656,value:"content"},B.f,t.R)
B.cf=new A.r(2,{type:657,value:"extend"},B.f,t.R)
B.cD=new A.r(2,{type:658,value:"-moz-document"},B.f,t.R)
B.ce=new A.r(2,{type:659,value:"supports"},B.f,t.R)
B.cl=new A.r(2,{type:660,value:"viewport"},B.f,t.R)
B.cI=new A.r(2,{type:661,value:"-ms-viewport"},B.f,t.R)
B.br=A.a(s([B.cH,B.cq,B.co,B.cF,B.cu,B.cc,B.cx,B.cG,B.cs,B.cj,B.cJ,B.cm,B.cp,B.ca,B.cy,B.cE,B.cf,B.cD,B.ce,B.cl,B.cI]),t.bV)
B.bs=A.a(s(["yY","sS","tT","eE","mM"]),t.s)
B.d4=new A.o("http://www.w3.org/1998/Math/MathML","annotaion-xml",t.w)
B.bv=A.a(s([B.d4,B.a_,B.ay,B.ao]),t.a8)
B.L=A.a(s([0,0,24576,1023,65534,34815,65534,18431]),t.t)
B.bw=A.a(s(["-//w3c//dtd xhtml 1.0 frameset//","-//w3c//dtd xhtml 1.0 transitional//"]),t.s)
B.bx=A.a(s(["pre","listing","textarea"]),t.s)
B.ai=A.a(s([0,0,32754,11263,65534,34815,65534,18431]),t.t)
B.aj=A.a(s([0,0,65490,12287,65535,34815,65534,18431]),t.t)
B.by=A.a(s(["C","D","A","T","A","["]),t.s)
B.cS=new A.o("http://www.w3.org/1999/xhtml","optgroup",t.w)
B.dY=new A.o("http://www.w3.org/1999/xhtml","option",t.w)
B.bz=A.a(s([B.cS,B.dY]),t.m)
B.bA=A.a(s(["tbody","tfoot","thead","html"]),t.s)
B.bD=A.a(s([B.a0,B.Z]),t.m)
B.dM=new A.o("http://www.w3.org/1999/xhtml","address",t.w)
B.cU=new A.o("http://www.w3.org/1999/xhtml","area",t.w)
B.e0=new A.o("http://www.w3.org/1999/xhtml","article",t.w)
B.dk=new A.o("http://www.w3.org/1999/xhtml","aside",t.w)
B.ds=new A.o("http://www.w3.org/1999/xhtml","base",t.w)
B.da=new A.o("http://www.w3.org/1999/xhtml","basefont",t.w)
B.dc=new A.o("http://www.w3.org/1999/xhtml","bgsound",t.w)
B.dE=new A.o("http://www.w3.org/1999/xhtml","blockquote",t.w)
B.d9=new A.o("http://www.w3.org/1999/xhtml","body",t.w)
B.dj=new A.o("http://www.w3.org/1999/xhtml","br",t.w)
B.dI=new A.o("http://www.w3.org/1999/xhtml","button",t.w)
B.dK=new A.o("http://www.w3.org/1999/xhtml","center",t.w)
B.cX=new A.o("http://www.w3.org/1999/xhtml","col",t.w)
B.dP=new A.o("http://www.w3.org/1999/xhtml","colgroup",t.w)
B.dm=new A.o("http://www.w3.org/1999/xhtml","command",t.w)
B.dU=new A.o("http://www.w3.org/1999/xhtml","dd",t.w)
B.dv=new A.o("http://www.w3.org/1999/xhtml","details",t.w)
B.d5=new A.o("http://www.w3.org/1999/xhtml","dir",t.w)
B.d3=new A.o("http://www.w3.org/1999/xhtml","div",t.w)
B.dS=new A.o("http://www.w3.org/1999/xhtml","dl",t.w)
B.dn=new A.o("http://www.w3.org/1999/xhtml","dt",t.w)
B.cW=new A.o("http://www.w3.org/1999/xhtml","embed",t.w)
B.cR=new A.o("http://www.w3.org/1999/xhtml","fieldset",t.w)
B.dC=new A.o("http://www.w3.org/1999/xhtml","figure",t.w)
B.dT=new A.o("http://www.w3.org/1999/xhtml","footer",t.w)
B.d7=new A.o("http://www.w3.org/1999/xhtml","form",t.w)
B.dp=new A.o("http://www.w3.org/1999/xhtml","frame",t.w)
B.cT=new A.o("http://www.w3.org/1999/xhtml","frameset",t.w)
B.d_=new A.o("http://www.w3.org/1999/xhtml","h1",t.w)
B.e_=new A.o("http://www.w3.org/1999/xhtml","h2",t.w)
B.cV=new A.o("http://www.w3.org/1999/xhtml","h3",t.w)
B.dw=new A.o("http://www.w3.org/1999/xhtml","h4",t.w)
B.dX=new A.o("http://www.w3.org/1999/xhtml","h5",t.w)
B.dB=new A.o("http://www.w3.org/1999/xhtml","h6",t.w)
B.dd=new A.o("http://www.w3.org/1999/xhtml","head",t.w)
B.dZ=new A.o("http://www.w3.org/1999/xhtml","header",t.w)
B.dl=new A.o("http://www.w3.org/1999/xhtml","hr",t.w)
B.dN=new A.o("http://www.w3.org/1999/xhtml","iframe",t.w)
B.dD=new A.o("http://www.w3.org/1999/xhtml","image",t.w)
B.dq=new A.o("http://www.w3.org/1999/xhtml","img",t.w)
B.dy=new A.o("http://www.w3.org/1999/xhtml","input",t.w)
B.dL=new A.o("http://www.w3.org/1999/xhtml","isindex",t.w)
B.dg=new A.o("http://www.w3.org/1999/xhtml","li",t.w)
B.df=new A.o("http://www.w3.org/1999/xhtml","link",t.w)
B.dJ=new A.o("http://www.w3.org/1999/xhtml","listing",t.w)
B.d0=new A.o("http://www.w3.org/1999/xhtml","men",t.w)
B.dF=new A.o("http://www.w3.org/1999/xhtml","meta",t.w)
B.de=new A.o("http://www.w3.org/1999/xhtml","nav",t.w)
B.dV=new A.o("http://www.w3.org/1999/xhtml","noembed",t.w)
B.dt=new A.o("http://www.w3.org/1999/xhtml","noframes",t.w)
B.dr=new A.o("http://www.w3.org/1999/xhtml","noscript",t.w)
B.cP=new A.o("http://www.w3.org/1999/xhtml","ol",t.w)
B.dO=new A.o("http://www.w3.org/1999/xhtml","p",t.w)
B.cY=new A.o("http://www.w3.org/1999/xhtml","param",t.w)
B.dz=new A.o("http://www.w3.org/1999/xhtml","plaintext",t.w)
B.cQ=new A.o("http://www.w3.org/1999/xhtml","pre",t.w)
B.dx=new A.o("http://www.w3.org/1999/xhtml","script",t.w)
B.db=new A.o("http://www.w3.org/1999/xhtml","section",t.w)
B.d6=new A.o("http://www.w3.org/1999/xhtml","select",t.w)
B.d1=new A.o("http://www.w3.org/1999/xhtml","style",t.w)
B.dQ=new A.o("http://www.w3.org/1999/xhtml","tbody",t.w)
B.d2=new A.o("http://www.w3.org/1999/xhtml","textarea",t.w)
B.dG=new A.o("http://www.w3.org/1999/xhtml","tfoot",t.w)
B.d8=new A.o("http://www.w3.org/1999/xhtml","thead",t.w)
B.dA=new A.o("http://www.w3.org/1999/xhtml","title",t.w)
B.cZ=new A.o("http://www.w3.org/1999/xhtml","tr",t.w)
B.di=new A.o("http://www.w3.org/1999/xhtml","ul",t.w)
B.dW=new A.o("http://www.w3.org/1999/xhtml","wbr",t.w)
B.dR=new A.o("http://www.w3.org/1999/xhtml","xmp",t.w)
B.X=A.a(s([B.dM,B.ar,B.cU,B.e0,B.dk,B.ds,B.da,B.dc,B.dE,B.d9,B.dj,B.dI,B.at,B.dK,B.cX,B.dP,B.dm,B.dU,B.dv,B.d5,B.d3,B.dS,B.dn,B.cW,B.cR,B.dC,B.dT,B.d7,B.dp,B.cT,B.d_,B.e_,B.cV,B.dw,B.dX,B.dB,B.dd,B.dZ,B.dl,B.a0,B.dN,B.dD,B.dq,B.dy,B.dL,B.dg,B.df,B.dJ,B.aw,B.d0,B.dF,B.de,B.dV,B.dt,B.dr,B.aA,B.cP,B.dO,B.cY,B.dz,B.cQ,B.dx,B.db,B.d6,B.d1,B.Z,B.dQ,B.av,B.d2,B.dG,B.ap,B.d8,B.dA,B.cZ,B.di,B.dW,B.dR,B.a_]),t.a8)
B.b7=A.a(s(["AElig","AElig;","AMP","AMP;","Aacute","Aacute;","Abreve;","Acirc","Acirc;","Acy;","Afr;","Agrave","Agrave;","Alpha;","Amacr;","And;","Aogon;","Aopf;","ApplyFunction;","Aring","Aring;","Ascr;","Assign;","Atilde","Atilde;","Auml","Auml;","Backslash;","Barv;","Barwed;","Bcy;","Because;","Bernoullis;","Beta;","Bfr;","Bopf;","Breve;","Bscr;","Bumpeq;","CHcy;","COPY","COPY;","Cacute;","Cap;","CapitalDifferentialD;","Cayleys;","Ccaron;","Ccedil","Ccedil;","Ccirc;","Cconint;","Cdot;","Cedilla;","CenterDot;","Cfr;","Chi;","CircleDot;","CircleMinus;","CirclePlus;","CircleTimes;","ClockwiseContourIntegral;","CloseCurlyDoubleQuote;","CloseCurlyQuote;","Colon;","Colone;","Congruent;","Conint;","ContourIntegral;","Copf;","Coproduct;","CounterClockwiseContourIntegral;","Cross;","Cscr;","Cup;","CupCap;","DD;","DDotrahd;","DJcy;","DScy;","DZcy;","Dagger;","Darr;","Dashv;","Dcaron;","Dcy;","Del;","Delta;","Dfr;","DiacriticalAcute;","DiacriticalDot;","DiacriticalDoubleAcute;","DiacriticalGrave;","DiacriticalTilde;","Diamond;","DifferentialD;","Dopf;","Dot;","DotDot;","DotEqual;","DoubleContourIntegral;","DoubleDot;","DoubleDownArrow;","DoubleLeftArrow;","DoubleLeftRightArrow;","DoubleLeftTee;","DoubleLongLeftArrow;","DoubleLongLeftRightArrow;","DoubleLongRightArrow;","DoubleRightArrow;","DoubleRightTee;","DoubleUpArrow;","DoubleUpDownArrow;","DoubleVerticalBar;","DownArrow;","DownArrowBar;","DownArrowUpArrow;","DownBreve;","DownLeftRightVector;","DownLeftTeeVector;","DownLeftVector;","DownLeftVectorBar;","DownRightTeeVector;","DownRightVector;","DownRightVectorBar;","DownTee;","DownTeeArrow;","Downarrow;","Dscr;","Dstrok;","ENG;","ETH","ETH;","Eacute","Eacute;","Ecaron;","Ecirc","Ecirc;","Ecy;","Edot;","Efr;","Egrave","Egrave;","Element;","Emacr;","EmptySmallSquare;","EmptyVerySmallSquare;","Eogon;","Eopf;","Epsilon;","Equal;","EqualTilde;","Equilibrium;","Escr;","Esim;","Eta;","Euml","Euml;","Exists;","ExponentialE;","Fcy;","Ffr;","FilledSmallSquare;","FilledVerySmallSquare;","Fopf;","ForAll;","Fouriertrf;","Fscr;","GJcy;","GT","GT;","Gamma;","Gammad;","Gbreve;","Gcedil;","Gcirc;","Gcy;","Gdot;","Gfr;","Gg;","Gopf;","GreaterEqual;","GreaterEqualLess;","GreaterFullEqual;","GreaterGreater;","GreaterLess;","GreaterSlantEqual;","GreaterTilde;","Gscr;","Gt;","HARDcy;","Hacek;","Hat;","Hcirc;","Hfr;","HilbertSpace;","Hopf;","HorizontalLine;","Hscr;","Hstrok;","HumpDownHump;","HumpEqual;","IEcy;","IJlig;","IOcy;","Iacute","Iacute;","Icirc","Icirc;","Icy;","Idot;","Ifr;","Igrave","Igrave;","Im;","Imacr;","ImaginaryI;","Implies;","Int;","Integral;","Intersection;","InvisibleComma;","InvisibleTimes;","Iogon;","Iopf;","Iota;","Iscr;","Itilde;","Iukcy;","Iuml","Iuml;","Jcirc;","Jcy;","Jfr;","Jopf;","Jscr;","Jsercy;","Jukcy;","KHcy;","KJcy;","Kappa;","Kcedil;","Kcy;","Kfr;","Kopf;","Kscr;","LJcy;","LT","LT;","Lacute;","Lambda;","Lang;","Laplacetrf;","Larr;","Lcaron;","Lcedil;","Lcy;","LeftAngleBracket;","LeftArrow;","LeftArrowBar;","LeftArrowRightArrow;","LeftCeiling;","LeftDoubleBracket;","LeftDownTeeVector;","LeftDownVector;","LeftDownVectorBar;","LeftFloor;","LeftRightArrow;","LeftRightVector;","LeftTee;","LeftTeeArrow;","LeftTeeVector;","LeftTriangle;","LeftTriangleBar;","LeftTriangleEqual;","LeftUpDownVector;","LeftUpTeeVector;","LeftUpVector;","LeftUpVectorBar;","LeftVector;","LeftVectorBar;","Leftarrow;","Leftrightarrow;","LessEqualGreater;","LessFullEqual;","LessGreater;","LessLess;","LessSlantEqual;","LessTilde;","Lfr;","Ll;","Lleftarrow;","Lmidot;","LongLeftArrow;","LongLeftRightArrow;","LongRightArrow;","Longleftarrow;","Longleftrightarrow;","Longrightarrow;","Lopf;","LowerLeftArrow;","LowerRightArrow;","Lscr;","Lsh;","Lstrok;","Lt;","Map;","Mcy;","MediumSpace;","Mellintrf;","Mfr;","MinusPlus;","Mopf;","Mscr;","Mu;","NJcy;","Nacute;","Ncaron;","Ncedil;","Ncy;","NegativeMediumSpace;","NegativeThickSpace;","NegativeThinSpace;","NegativeVeryThinSpace;","NestedGreaterGreater;","NestedLessLess;","NewLine;","Nfr;","NoBreak;","NonBreakingSpace;","Nopf;","Not;","NotCongruent;","NotCupCap;","NotDoubleVerticalBar;","NotElement;","NotEqual;","NotEqualTilde;","NotExists;","NotGreater;","NotGreaterEqual;","NotGreaterFullEqual;","NotGreaterGreater;","NotGreaterLess;","NotGreaterSlantEqual;","NotGreaterTilde;","NotHumpDownHump;","NotHumpEqual;","NotLeftTriangle;","NotLeftTriangleBar;","NotLeftTriangleEqual;","NotLess;","NotLessEqual;","NotLessGreater;","NotLessLess;","NotLessSlantEqual;","NotLessTilde;","NotNestedGreaterGreater;","NotNestedLessLess;","NotPrecedes;","NotPrecedesEqual;","NotPrecedesSlantEqual;","NotReverseElement;","NotRightTriangle;","NotRightTriangleBar;","NotRightTriangleEqual;","NotSquareSubset;","NotSquareSubsetEqual;","NotSquareSuperset;","NotSquareSupersetEqual;","NotSubset;","NotSubsetEqual;","NotSucceeds;","NotSucceedsEqual;","NotSucceedsSlantEqual;","NotSucceedsTilde;","NotSuperset;","NotSupersetEqual;","NotTilde;","NotTildeEqual;","NotTildeFullEqual;","NotTildeTilde;","NotVerticalBar;","Nscr;","Ntilde","Ntilde;","Nu;","OElig;","Oacute","Oacute;","Ocirc","Ocirc;","Ocy;","Odblac;","Ofr;","Ograve","Ograve;","Omacr;","Omega;","Omicron;","Oopf;","OpenCurlyDoubleQuote;","OpenCurlyQuote;","Or;","Oscr;","Oslash","Oslash;","Otilde","Otilde;","Otimes;","Ouml","Ouml;","OverBar;","OverBrace;","OverBracket;","OverParenthesis;","PartialD;","Pcy;","Pfr;","Phi;","Pi;","PlusMinus;","Poincareplane;","Popf;","Pr;","Precedes;","PrecedesEqual;","PrecedesSlantEqual;","PrecedesTilde;","Prime;","Product;","Proportion;","Proportional;","Pscr;","Psi;","QUOT","QUOT;","Qfr;","Qopf;","Qscr;","RBarr;","REG","REG;","Racute;","Rang;","Rarr;","Rarrtl;","Rcaron;","Rcedil;","Rcy;","Re;","ReverseElement;","ReverseEquilibrium;","ReverseUpEquilibrium;","Rfr;","Rho;","RightAngleBracket;","RightArrow;","RightArrowBar;","RightArrowLeftArrow;","RightCeiling;","RightDoubleBracket;","RightDownTeeVector;","RightDownVector;","RightDownVectorBar;","RightFloor;","RightTee;","RightTeeArrow;","RightTeeVector;","RightTriangle;","RightTriangleBar;","RightTriangleEqual;","RightUpDownVector;","RightUpTeeVector;","RightUpVector;","RightUpVectorBar;","RightVector;","RightVectorBar;","Rightarrow;","Ropf;","RoundImplies;","Rrightarrow;","Rscr;","Rsh;","RuleDelayed;","SHCHcy;","SHcy;","SOFTcy;","Sacute;","Sc;","Scaron;","Scedil;","Scirc;","Scy;","Sfr;","ShortDownArrow;","ShortLeftArrow;","ShortRightArrow;","ShortUpArrow;","Sigma;","SmallCircle;","Sopf;","Sqrt;","Square;","SquareIntersection;","SquareSubset;","SquareSubsetEqual;","SquareSuperset;","SquareSupersetEqual;","SquareUnion;","Sscr;","Star;","Sub;","Subset;","SubsetEqual;","Succeeds;","SucceedsEqual;","SucceedsSlantEqual;","SucceedsTilde;","SuchThat;","Sum;","Sup;","Superset;","SupersetEqual;","Supset;","THORN","THORN;","TRADE;","TSHcy;","TScy;","Tab;","Tau;","Tcaron;","Tcedil;","Tcy;","Tfr;","Therefore;","Theta;","ThickSpace;","ThinSpace;","Tilde;","TildeEqual;","TildeFullEqual;","TildeTilde;","Topf;","TripleDot;","Tscr;","Tstrok;","Uacute","Uacute;","Uarr;","Uarrocir;","Ubrcy;","Ubreve;","Ucirc","Ucirc;","Ucy;","Udblac;","Ufr;","Ugrave","Ugrave;","Umacr;","UnderBar;","UnderBrace;","UnderBracket;","UnderParenthesis;","Union;","UnionPlus;","Uogon;","Uopf;","UpArrow;","UpArrowBar;","UpArrowDownArrow;","UpDownArrow;","UpEquilibrium;","UpTee;","UpTeeArrow;","Uparrow;","Updownarrow;","UpperLeftArrow;","UpperRightArrow;","Upsi;","Upsilon;","Uring;","Uscr;","Utilde;","Uuml","Uuml;","VDash;","Vbar;","Vcy;","Vdash;","Vdashl;","Vee;","Verbar;","Vert;","VerticalBar;","VerticalLine;","VerticalSeparator;","VerticalTilde;","VeryThinSpace;","Vfr;","Vopf;","Vscr;","Vvdash;","Wcirc;","Wedge;","Wfr;","Wopf;","Wscr;","Xfr;","Xi;","Xopf;","Xscr;","YAcy;","YIcy;","YUcy;","Yacute","Yacute;","Ycirc;","Ycy;","Yfr;","Yopf;","Yscr;","Yuml;","ZHcy;","Zacute;","Zcaron;","Zcy;","Zdot;","ZeroWidthSpace;","Zeta;","Zfr;","Zopf;","Zscr;","aacute","aacute;","abreve;","ac;","acE;","acd;","acirc","acirc;","acute","acute;","acy;","aelig","aelig;","af;","afr;","agrave","agrave;","alefsym;","aleph;","alpha;","amacr;","amalg;","amp","amp;","and;","andand;","andd;","andslope;","andv;","ang;","ange;","angle;","angmsd;","angmsdaa;","angmsdab;","angmsdac;","angmsdad;","angmsdae;","angmsdaf;","angmsdag;","angmsdah;","angrt;","angrtvb;","angrtvbd;","angsph;","angst;","angzarr;","aogon;","aopf;","ap;","apE;","apacir;","ape;","apid;","apos;","approx;","approxeq;","aring","aring;","ascr;","ast;","asymp;","asympeq;","atilde","atilde;","auml","auml;","awconint;","awint;","bNot;","backcong;","backepsilon;","backprime;","backsim;","backsimeq;","barvee;","barwed;","barwedge;","bbrk;","bbrktbrk;","bcong;","bcy;","bdquo;","becaus;","because;","bemptyv;","bepsi;","bernou;","beta;","beth;","between;","bfr;","bigcap;","bigcirc;","bigcup;","bigodot;","bigoplus;","bigotimes;","bigsqcup;","bigstar;","bigtriangledown;","bigtriangleup;","biguplus;","bigvee;","bigwedge;","bkarow;","blacklozenge;","blacksquare;","blacktriangle;","blacktriangledown;","blacktriangleleft;","blacktriangleright;","blank;","blk12;","blk14;","blk34;","block;","bne;","bnequiv;","bnot;","bopf;","bot;","bottom;","bowtie;","boxDL;","boxDR;","boxDl;","boxDr;","boxH;","boxHD;","boxHU;","boxHd;","boxHu;","boxUL;","boxUR;","boxUl;","boxUr;","boxV;","boxVH;","boxVL;","boxVR;","boxVh;","boxVl;","boxVr;","boxbox;","boxdL;","boxdR;","boxdl;","boxdr;","boxh;","boxhD;","boxhU;","boxhd;","boxhu;","boxminus;","boxplus;","boxtimes;","boxuL;","boxuR;","boxul;","boxur;","boxv;","boxvH;","boxvL;","boxvR;","boxvh;","boxvl;","boxvr;","bprime;","breve;","brvbar","brvbar;","bscr;","bsemi;","bsim;","bsime;","bsol;","bsolb;","bsolhsub;","bull;","bullet;","bump;","bumpE;","bumpe;","bumpeq;","cacute;","cap;","capand;","capbrcup;","capcap;","capcup;","capdot;","caps;","caret;","caron;","ccaps;","ccaron;","ccedil","ccedil;","ccirc;","ccups;","ccupssm;","cdot;","cedil","cedil;","cemptyv;","cent","cent;","centerdot;","cfr;","chcy;","check;","checkmark;","chi;","cir;","cirE;","circ;","circeq;","circlearrowleft;","circlearrowright;","circledR;","circledS;","circledast;","circledcirc;","circleddash;","cire;","cirfnint;","cirmid;","cirscir;","clubs;","clubsuit;","colon;","colone;","coloneq;","comma;","commat;","comp;","compfn;","complement;","complexes;","cong;","congdot;","conint;","copf;","coprod;","copy","copy;","copysr;","crarr;","cross;","cscr;","csub;","csube;","csup;","csupe;","ctdot;","cudarrl;","cudarrr;","cuepr;","cuesc;","cularr;","cularrp;","cup;","cupbrcap;","cupcap;","cupcup;","cupdot;","cupor;","cups;","curarr;","curarrm;","curlyeqprec;","curlyeqsucc;","curlyvee;","curlywedge;","curren","curren;","curvearrowleft;","curvearrowright;","cuvee;","cuwed;","cwconint;","cwint;","cylcty;","dArr;","dHar;","dagger;","daleth;","darr;","dash;","dashv;","dbkarow;","dblac;","dcaron;","dcy;","dd;","ddagger;","ddarr;","ddotseq;","deg","deg;","delta;","demptyv;","dfisht;","dfr;","dharl;","dharr;","diam;","diamond;","diamondsuit;","diams;","die;","digamma;","disin;","div;","divide","divide;","divideontimes;","divonx;","djcy;","dlcorn;","dlcrop;","dollar;","dopf;","dot;","doteq;","doteqdot;","dotminus;","dotplus;","dotsquare;","doublebarwedge;","downarrow;","downdownarrows;","downharpoonleft;","downharpoonright;","drbkarow;","drcorn;","drcrop;","dscr;","dscy;","dsol;","dstrok;","dtdot;","dtri;","dtrif;","duarr;","duhar;","dwangle;","dzcy;","dzigrarr;","eDDot;","eDot;","eacute","eacute;","easter;","ecaron;","ecir;","ecirc","ecirc;","ecolon;","ecy;","edot;","ee;","efDot;","efr;","eg;","egrave","egrave;","egs;","egsdot;","el;","elinters;","ell;","els;","elsdot;","emacr;","empty;","emptyset;","emptyv;","emsp13;","emsp14;","emsp;","eng;","ensp;","eogon;","eopf;","epar;","eparsl;","eplus;","epsi;","epsilon;","epsiv;","eqcirc;","eqcolon;","eqsim;","eqslantgtr;","eqslantless;","equals;","equest;","equiv;","equivDD;","eqvparsl;","erDot;","erarr;","escr;","esdot;","esim;","eta;","eth","eth;","euml","euml;","euro;","excl;","exist;","expectation;","exponentiale;","fallingdotseq;","fcy;","female;","ffilig;","fflig;","ffllig;","ffr;","filig;","fjlig;","flat;","fllig;","fltns;","fnof;","fopf;","forall;","fork;","forkv;","fpartint;","frac12","frac12;","frac13;","frac14","frac14;","frac15;","frac16;","frac18;","frac23;","frac25;","frac34","frac34;","frac35;","frac38;","frac45;","frac56;","frac58;","frac78;","frasl;","frown;","fscr;","gE;","gEl;","gacute;","gamma;","gammad;","gap;","gbreve;","gcirc;","gcy;","gdot;","ge;","gel;","geq;","geqq;","geqslant;","ges;","gescc;","gesdot;","gesdoto;","gesdotol;","gesl;","gesles;","gfr;","gg;","ggg;","gimel;","gjcy;","gl;","glE;","gla;","glj;","gnE;","gnap;","gnapprox;","gne;","gneq;","gneqq;","gnsim;","gopf;","grave;","gscr;","gsim;","gsime;","gsiml;","gt","gt;","gtcc;","gtcir;","gtdot;","gtlPar;","gtquest;","gtrapprox;","gtrarr;","gtrdot;","gtreqless;","gtreqqless;","gtrless;","gtrsim;","gvertneqq;","gvnE;","hArr;","hairsp;","half;","hamilt;","hardcy;","harr;","harrcir;","harrw;","hbar;","hcirc;","hearts;","heartsuit;","hellip;","hercon;","hfr;","hksearow;","hkswarow;","hoarr;","homtht;","hookleftarrow;","hookrightarrow;","hopf;","horbar;","hscr;","hslash;","hstrok;","hybull;","hyphen;","iacute","iacute;","ic;","icirc","icirc;","icy;","iecy;","iexcl","iexcl;","iff;","ifr;","igrave","igrave;","ii;","iiiint;","iiint;","iinfin;","iiota;","ijlig;","imacr;","image;","imagline;","imagpart;","imath;","imof;","imped;","in;","incare;","infin;","infintie;","inodot;","int;","intcal;","integers;","intercal;","intlarhk;","intprod;","iocy;","iogon;","iopf;","iota;","iprod;","iquest","iquest;","iscr;","isin;","isinE;","isindot;","isins;","isinsv;","isinv;","it;","itilde;","iukcy;","iuml","iuml;","jcirc;","jcy;","jfr;","jmath;","jopf;","jscr;","jsercy;","jukcy;","kappa;","kappav;","kcedil;","kcy;","kfr;","kgreen;","khcy;","kjcy;","kopf;","kscr;","lAarr;","lArr;","lAtail;","lBarr;","lE;","lEg;","lHar;","lacute;","laemptyv;","lagran;","lambda;","lang;","langd;","langle;","lap;","laquo","laquo;","larr;","larrb;","larrbfs;","larrfs;","larrhk;","larrlp;","larrpl;","larrsim;","larrtl;","lat;","latail;","late;","lates;","lbarr;","lbbrk;","lbrace;","lbrack;","lbrke;","lbrksld;","lbrkslu;","lcaron;","lcedil;","lceil;","lcub;","lcy;","ldca;","ldquo;","ldquor;","ldrdhar;","ldrushar;","ldsh;","le;","leftarrow;","leftarrowtail;","leftharpoondown;","leftharpoonup;","leftleftarrows;","leftrightarrow;","leftrightarrows;","leftrightharpoons;","leftrightsquigarrow;","leftthreetimes;","leg;","leq;","leqq;","leqslant;","les;","lescc;","lesdot;","lesdoto;","lesdotor;","lesg;","lesges;","lessapprox;","lessdot;","lesseqgtr;","lesseqqgtr;","lessgtr;","lesssim;","lfisht;","lfloor;","lfr;","lg;","lgE;","lhard;","lharu;","lharul;","lhblk;","ljcy;","ll;","llarr;","llcorner;","llhard;","lltri;","lmidot;","lmoust;","lmoustache;","lnE;","lnap;","lnapprox;","lne;","lneq;","lneqq;","lnsim;","loang;","loarr;","lobrk;","longleftarrow;","longleftrightarrow;","longmapsto;","longrightarrow;","looparrowleft;","looparrowright;","lopar;","lopf;","loplus;","lotimes;","lowast;","lowbar;","loz;","lozenge;","lozf;","lpar;","lparlt;","lrarr;","lrcorner;","lrhar;","lrhard;","lrm;","lrtri;","lsaquo;","lscr;","lsh;","lsim;","lsime;","lsimg;","lsqb;","lsquo;","lsquor;","lstrok;","lt","lt;","ltcc;","ltcir;","ltdot;","lthree;","ltimes;","ltlarr;","ltquest;","ltrPar;","ltri;","ltrie;","ltrif;","lurdshar;","luruhar;","lvertneqq;","lvnE;","mDDot;","macr","macr;","male;","malt;","maltese;","map;","mapsto;","mapstodown;","mapstoleft;","mapstoup;","marker;","mcomma;","mcy;","mdash;","measuredangle;","mfr;","mho;","micro","micro;","mid;","midast;","midcir;","middot","middot;","minus;","minusb;","minusd;","minusdu;","mlcp;","mldr;","mnplus;","models;","mopf;","mp;","mscr;","mstpos;","mu;","multimap;","mumap;","nGg;","nGt;","nGtv;","nLeftarrow;","nLeftrightarrow;","nLl;","nLt;","nLtv;","nRightarrow;","nVDash;","nVdash;","nabla;","nacute;","nang;","nap;","napE;","napid;","napos;","napprox;","natur;","natural;","naturals;","nbsp","nbsp;","nbump;","nbumpe;","ncap;","ncaron;","ncedil;","ncong;","ncongdot;","ncup;","ncy;","ndash;","ne;","neArr;","nearhk;","nearr;","nearrow;","nedot;","nequiv;","nesear;","nesim;","nexist;","nexists;","nfr;","ngE;","nge;","ngeq;","ngeqq;","ngeqslant;","nges;","ngsim;","ngt;","ngtr;","nhArr;","nharr;","nhpar;","ni;","nis;","nisd;","niv;","njcy;","nlArr;","nlE;","nlarr;","nldr;","nle;","nleftarrow;","nleftrightarrow;","nleq;","nleqq;","nleqslant;","nles;","nless;","nlsim;","nlt;","nltri;","nltrie;","nmid;","nopf;","not","not;","notin;","notinE;","notindot;","notinva;","notinvb;","notinvc;","notni;","notniva;","notnivb;","notnivc;","npar;","nparallel;","nparsl;","npart;","npolint;","npr;","nprcue;","npre;","nprec;","npreceq;","nrArr;","nrarr;","nrarrc;","nrarrw;","nrightarrow;","nrtri;","nrtrie;","nsc;","nsccue;","nsce;","nscr;","nshortmid;","nshortparallel;","nsim;","nsime;","nsimeq;","nsmid;","nspar;","nsqsube;","nsqsupe;","nsub;","nsubE;","nsube;","nsubset;","nsubseteq;","nsubseteqq;","nsucc;","nsucceq;","nsup;","nsupE;","nsupe;","nsupset;","nsupseteq;","nsupseteqq;","ntgl;","ntilde","ntilde;","ntlg;","ntriangleleft;","ntrianglelefteq;","ntriangleright;","ntrianglerighteq;","nu;","num;","numero;","numsp;","nvDash;","nvHarr;","nvap;","nvdash;","nvge;","nvgt;","nvinfin;","nvlArr;","nvle;","nvlt;","nvltrie;","nvrArr;","nvrtrie;","nvsim;","nwArr;","nwarhk;","nwarr;","nwarrow;","nwnear;","oS;","oacute","oacute;","oast;","ocir;","ocirc","ocirc;","ocy;","odash;","odblac;","odiv;","odot;","odsold;","oelig;","ofcir;","ofr;","ogon;","ograve","ograve;","ogt;","ohbar;","ohm;","oint;","olarr;","olcir;","olcross;","oline;","olt;","omacr;","omega;","omicron;","omid;","ominus;","oopf;","opar;","operp;","oplus;","or;","orarr;","ord;","order;","orderof;","ordf","ordf;","ordm","ordm;","origof;","oror;","orslope;","orv;","oscr;","oslash","oslash;","osol;","otilde","otilde;","otimes;","otimesas;","ouml","ouml;","ovbar;","par;","para","para;","parallel;","parsim;","parsl;","part;","pcy;","percnt;","period;","permil;","perp;","pertenk;","pfr;","phi;","phiv;","phmmat;","phone;","pi;","pitchfork;","piv;","planck;","planckh;","plankv;","plus;","plusacir;","plusb;","pluscir;","plusdo;","plusdu;","pluse;","plusmn","plusmn;","plussim;","plustwo;","pm;","pointint;","popf;","pound","pound;","pr;","prE;","prap;","prcue;","pre;","prec;","precapprox;","preccurlyeq;","preceq;","precnapprox;","precneqq;","precnsim;","precsim;","prime;","primes;","prnE;","prnap;","prnsim;","prod;","profalar;","profline;","profsurf;","prop;","propto;","prsim;","prurel;","pscr;","psi;","puncsp;","qfr;","qint;","qopf;","qprime;","qscr;","quaternions;","quatint;","quest;","questeq;","quot","quot;","rAarr;","rArr;","rAtail;","rBarr;","rHar;","race;","racute;","radic;","raemptyv;","rang;","rangd;","range;","rangle;","raquo","raquo;","rarr;","rarrap;","rarrb;","rarrbfs;","rarrc;","rarrfs;","rarrhk;","rarrlp;","rarrpl;","rarrsim;","rarrtl;","rarrw;","ratail;","ratio;","rationals;","rbarr;","rbbrk;","rbrace;","rbrack;","rbrke;","rbrksld;","rbrkslu;","rcaron;","rcedil;","rceil;","rcub;","rcy;","rdca;","rdldhar;","rdquo;","rdquor;","rdsh;","real;","realine;","realpart;","reals;","rect;","reg","reg;","rfisht;","rfloor;","rfr;","rhard;","rharu;","rharul;","rho;","rhov;","rightarrow;","rightarrowtail;","rightharpoondown;","rightharpoonup;","rightleftarrows;","rightleftharpoons;","rightrightarrows;","rightsquigarrow;","rightthreetimes;","ring;","risingdotseq;","rlarr;","rlhar;","rlm;","rmoust;","rmoustache;","rnmid;","roang;","roarr;","robrk;","ropar;","ropf;","roplus;","rotimes;","rpar;","rpargt;","rppolint;","rrarr;","rsaquo;","rscr;","rsh;","rsqb;","rsquo;","rsquor;","rthree;","rtimes;","rtri;","rtrie;","rtrif;","rtriltri;","ruluhar;","rx;","sacute;","sbquo;","sc;","scE;","scap;","scaron;","sccue;","sce;","scedil;","scirc;","scnE;","scnap;","scnsim;","scpolint;","scsim;","scy;","sdot;","sdotb;","sdote;","seArr;","searhk;","searr;","searrow;","sect","sect;","semi;","seswar;","setminus;","setmn;","sext;","sfr;","sfrown;","sharp;","shchcy;","shcy;","shortmid;","shortparallel;","shy","shy;","sigma;","sigmaf;","sigmav;","sim;","simdot;","sime;","simeq;","simg;","simgE;","siml;","simlE;","simne;","simplus;","simrarr;","slarr;","smallsetminus;","smashp;","smeparsl;","smid;","smile;","smt;","smte;","smtes;","softcy;","sol;","solb;","solbar;","sopf;","spades;","spadesuit;","spar;","sqcap;","sqcaps;","sqcup;","sqcups;","sqsub;","sqsube;","sqsubset;","sqsubseteq;","sqsup;","sqsupe;","sqsupset;","sqsupseteq;","squ;","square;","squarf;","squf;","srarr;","sscr;","ssetmn;","ssmile;","sstarf;","star;","starf;","straightepsilon;","straightphi;","strns;","sub;","subE;","subdot;","sube;","subedot;","submult;","subnE;","subne;","subplus;","subrarr;","subset;","subseteq;","subseteqq;","subsetneq;","subsetneqq;","subsim;","subsub;","subsup;","succ;","succapprox;","succcurlyeq;","succeq;","succnapprox;","succneqq;","succnsim;","succsim;","sum;","sung;","sup1","sup1;","sup2","sup2;","sup3","sup3;","sup;","supE;","supdot;","supdsub;","supe;","supedot;","suphsol;","suphsub;","suplarr;","supmult;","supnE;","supne;","supplus;","supset;","supseteq;","supseteqq;","supsetneq;","supsetneqq;","supsim;","supsub;","supsup;","swArr;","swarhk;","swarr;","swarrow;","swnwar;","szlig","szlig;","target;","tau;","tbrk;","tcaron;","tcedil;","tcy;","tdot;","telrec;","tfr;","there4;","therefore;","theta;","thetasym;","thetav;","thickapprox;","thicksim;","thinsp;","thkap;","thksim;","thorn","thorn;","tilde;","times","times;","timesb;","timesbar;","timesd;","tint;","toea;","top;","topbot;","topcir;","topf;","topfork;","tosa;","tprime;","trade;","triangle;","triangledown;","triangleleft;","trianglelefteq;","triangleq;","triangleright;","trianglerighteq;","tridot;","trie;","triminus;","triplus;","trisb;","tritime;","trpezium;","tscr;","tscy;","tshcy;","tstrok;","twixt;","twoheadleftarrow;","twoheadrightarrow;","uArr;","uHar;","uacute","uacute;","uarr;","ubrcy;","ubreve;","ucirc","ucirc;","ucy;","udarr;","udblac;","udhar;","ufisht;","ufr;","ugrave","ugrave;","uharl;","uharr;","uhblk;","ulcorn;","ulcorner;","ulcrop;","ultri;","umacr;","uml","uml;","uogon;","uopf;","uparrow;","updownarrow;","upharpoonleft;","upharpoonright;","uplus;","upsi;","upsih;","upsilon;","upuparrows;","urcorn;","urcorner;","urcrop;","uring;","urtri;","uscr;","utdot;","utilde;","utri;","utrif;","uuarr;","uuml","uuml;","uwangle;","vArr;","vBar;","vBarv;","vDash;","vangrt;","varepsilon;","varkappa;","varnothing;","varphi;","varpi;","varpropto;","varr;","varrho;","varsigma;","varsubsetneq;","varsubsetneqq;","varsupsetneq;","varsupsetneqq;","vartheta;","vartriangleleft;","vartriangleright;","vcy;","vdash;","vee;","veebar;","veeeq;","vellip;","verbar;","vert;","vfr;","vltri;","vnsub;","vnsup;","vopf;","vprop;","vrtri;","vscr;","vsubnE;","vsubne;","vsupnE;","vsupne;","vzigzag;","wcirc;","wedbar;","wedge;","wedgeq;","weierp;","wfr;","wopf;","wp;","wr;","wreath;","wscr;","xcap;","xcirc;","xcup;","xdtri;","xfr;","xhArr;","xharr;","xi;","xlArr;","xlarr;","xmap;","xnis;","xodot;","xopf;","xoplus;","xotime;","xrArr;","xrarr;","xscr;","xsqcup;","xuplus;","xutri;","xvee;","xwedge;","yacute","yacute;","yacy;","ycirc;","ycy;","yen","yen;","yfr;","yicy;","yopf;","yscr;","yucy;","yuml","yuml;","zacute;","zcaron;","zcy;","zdot;","zeetrf;","zeta;","zfr;","zhcy;","zigrarr;","zopf;","zscr;","zwj;","zwnj;"]),t.s)
B.Y=new A.r(2231,{AElig:"\xc6","AElig;":"\xc6",AMP:"&","AMP;":"&",Aacute:"\xc1","Aacute;":"\xc1","Abreve;":"\u0102",Acirc:"\xc2","Acirc;":"\xc2","Acy;":"\u0410","Afr;":"\ud835\udd04",Agrave:"\xc0","Agrave;":"\xc0","Alpha;":"\u0391","Amacr;":"\u0100","And;":"\u2a53","Aogon;":"\u0104","Aopf;":"\ud835\udd38","ApplyFunction;":"\u2061",Aring:"\xc5","Aring;":"\xc5","Ascr;":"\ud835\udc9c","Assign;":"\u2254",Atilde:"\xc3","Atilde;":"\xc3",Auml:"\xc4","Auml;":"\xc4","Backslash;":"\u2216","Barv;":"\u2ae7","Barwed;":"\u2306","Bcy;":"\u0411","Because;":"\u2235","Bernoullis;":"\u212c","Beta;":"\u0392","Bfr;":"\ud835\udd05","Bopf;":"\ud835\udd39","Breve;":"\u02d8","Bscr;":"\u212c","Bumpeq;":"\u224e","CHcy;":"\u0427",COPY:"\xa9","COPY;":"\xa9","Cacute;":"\u0106","Cap;":"\u22d2","CapitalDifferentialD;":"\u2145","Cayleys;":"\u212d","Ccaron;":"\u010c",Ccedil:"\xc7","Ccedil;":"\xc7","Ccirc;":"\u0108","Cconint;":"\u2230","Cdot;":"\u010a","Cedilla;":"\xb8","CenterDot;":"\xb7","Cfr;":"\u212d","Chi;":"\u03a7","CircleDot;":"\u2299","CircleMinus;":"\u2296","CirclePlus;":"\u2295","CircleTimes;":"\u2297","ClockwiseContourIntegral;":"\u2232","CloseCurlyDoubleQuote;":"\u201d","CloseCurlyQuote;":"\u2019","Colon;":"\u2237","Colone;":"\u2a74","Congruent;":"\u2261","Conint;":"\u222f","ContourIntegral;":"\u222e","Copf;":"\u2102","Coproduct;":"\u2210","CounterClockwiseContourIntegral;":"\u2233","Cross;":"\u2a2f","Cscr;":"\ud835\udc9e","Cup;":"\u22d3","CupCap;":"\u224d","DD;":"\u2145","DDotrahd;":"\u2911","DJcy;":"\u0402","DScy;":"\u0405","DZcy;":"\u040f","Dagger;":"\u2021","Darr;":"\u21a1","Dashv;":"\u2ae4","Dcaron;":"\u010e","Dcy;":"\u0414","Del;":"\u2207","Delta;":"\u0394","Dfr;":"\ud835\udd07","DiacriticalAcute;":"\xb4","DiacriticalDot;":"\u02d9","DiacriticalDoubleAcute;":"\u02dd","DiacriticalGrave;":"`","DiacriticalTilde;":"\u02dc","Diamond;":"\u22c4","DifferentialD;":"\u2146","Dopf;":"\ud835\udd3b","Dot;":"\xa8","DotDot;":"\u20dc","DotEqual;":"\u2250","DoubleContourIntegral;":"\u222f","DoubleDot;":"\xa8","DoubleDownArrow;":"\u21d3","DoubleLeftArrow;":"\u21d0","DoubleLeftRightArrow;":"\u21d4","DoubleLeftTee;":"\u2ae4","DoubleLongLeftArrow;":"\u27f8","DoubleLongLeftRightArrow;":"\u27fa","DoubleLongRightArrow;":"\u27f9","DoubleRightArrow;":"\u21d2","DoubleRightTee;":"\u22a8","DoubleUpArrow;":"\u21d1","DoubleUpDownArrow;":"\u21d5","DoubleVerticalBar;":"\u2225","DownArrow;":"\u2193","DownArrowBar;":"\u2913","DownArrowUpArrow;":"\u21f5","DownBreve;":"\u0311","DownLeftRightVector;":"\u2950","DownLeftTeeVector;":"\u295e","DownLeftVector;":"\u21bd","DownLeftVectorBar;":"\u2956","DownRightTeeVector;":"\u295f","DownRightVector;":"\u21c1","DownRightVectorBar;":"\u2957","DownTee;":"\u22a4","DownTeeArrow;":"\u21a7","Downarrow;":"\u21d3","Dscr;":"\ud835\udc9f","Dstrok;":"\u0110","ENG;":"\u014a",ETH:"\xd0","ETH;":"\xd0",Eacute:"\xc9","Eacute;":"\xc9","Ecaron;":"\u011a",Ecirc:"\xca","Ecirc;":"\xca","Ecy;":"\u042d","Edot;":"\u0116","Efr;":"\ud835\udd08",Egrave:"\xc8","Egrave;":"\xc8","Element;":"\u2208","Emacr;":"\u0112","EmptySmallSquare;":"\u25fb","EmptyVerySmallSquare;":"\u25ab","Eogon;":"\u0118","Eopf;":"\ud835\udd3c","Epsilon;":"\u0395","Equal;":"\u2a75","EqualTilde;":"\u2242","Equilibrium;":"\u21cc","Escr;":"\u2130","Esim;":"\u2a73","Eta;":"\u0397",Euml:"\xcb","Euml;":"\xcb","Exists;":"\u2203","ExponentialE;":"\u2147","Fcy;":"\u0424","Ffr;":"\ud835\udd09","FilledSmallSquare;":"\u25fc","FilledVerySmallSquare;":"\u25aa","Fopf;":"\ud835\udd3d","ForAll;":"\u2200","Fouriertrf;":"\u2131","Fscr;":"\u2131","GJcy;":"\u0403",GT:">","GT;":">","Gamma;":"\u0393","Gammad;":"\u03dc","Gbreve;":"\u011e","Gcedil;":"\u0122","Gcirc;":"\u011c","Gcy;":"\u0413","Gdot;":"\u0120","Gfr;":"\ud835\udd0a","Gg;":"\u22d9","Gopf;":"\ud835\udd3e","GreaterEqual;":"\u2265","GreaterEqualLess;":"\u22db","GreaterFullEqual;":"\u2267","GreaterGreater;":"\u2aa2","GreaterLess;":"\u2277","GreaterSlantEqual;":"\u2a7e","GreaterTilde;":"\u2273","Gscr;":"\ud835\udca2","Gt;":"\u226b","HARDcy;":"\u042a","Hacek;":"\u02c7","Hat;":"^","Hcirc;":"\u0124","Hfr;":"\u210c","HilbertSpace;":"\u210b","Hopf;":"\u210d","HorizontalLine;":"\u2500","Hscr;":"\u210b","Hstrok;":"\u0126","HumpDownHump;":"\u224e","HumpEqual;":"\u224f","IEcy;":"\u0415","IJlig;":"\u0132","IOcy;":"\u0401",Iacute:"\xcd","Iacute;":"\xcd",Icirc:"\xce","Icirc;":"\xce","Icy;":"\u0418","Idot;":"\u0130","Ifr;":"\u2111",Igrave:"\xcc","Igrave;":"\xcc","Im;":"\u2111","Imacr;":"\u012a","ImaginaryI;":"\u2148","Implies;":"\u21d2","Int;":"\u222c","Integral;":"\u222b","Intersection;":"\u22c2","InvisibleComma;":"\u2063","InvisibleTimes;":"\u2062","Iogon;":"\u012e","Iopf;":"\ud835\udd40","Iota;":"\u0399","Iscr;":"\u2110","Itilde;":"\u0128","Iukcy;":"\u0406",Iuml:"\xcf","Iuml;":"\xcf","Jcirc;":"\u0134","Jcy;":"\u0419","Jfr;":"\ud835\udd0d","Jopf;":"\ud835\udd41","Jscr;":"\ud835\udca5","Jsercy;":"\u0408","Jukcy;":"\u0404","KHcy;":"\u0425","KJcy;":"\u040c","Kappa;":"\u039a","Kcedil;":"\u0136","Kcy;":"\u041a","Kfr;":"\ud835\udd0e","Kopf;":"\ud835\udd42","Kscr;":"\ud835\udca6","LJcy;":"\u0409",LT:"<","LT;":"<","Lacute;":"\u0139","Lambda;":"\u039b","Lang;":"\u27ea","Laplacetrf;":"\u2112","Larr;":"\u219e","Lcaron;":"\u013d","Lcedil;":"\u013b","Lcy;":"\u041b","LeftAngleBracket;":"\u27e8","LeftArrow;":"\u2190","LeftArrowBar;":"\u21e4","LeftArrowRightArrow;":"\u21c6","LeftCeiling;":"\u2308","LeftDoubleBracket;":"\u27e6","LeftDownTeeVector;":"\u2961","LeftDownVector;":"\u21c3","LeftDownVectorBar;":"\u2959","LeftFloor;":"\u230a","LeftRightArrow;":"\u2194","LeftRightVector;":"\u294e","LeftTee;":"\u22a3","LeftTeeArrow;":"\u21a4","LeftTeeVector;":"\u295a","LeftTriangle;":"\u22b2","LeftTriangleBar;":"\u29cf","LeftTriangleEqual;":"\u22b4","LeftUpDownVector;":"\u2951","LeftUpTeeVector;":"\u2960","LeftUpVector;":"\u21bf","LeftUpVectorBar;":"\u2958","LeftVector;":"\u21bc","LeftVectorBar;":"\u2952","Leftarrow;":"\u21d0","Leftrightarrow;":"\u21d4","LessEqualGreater;":"\u22da","LessFullEqual;":"\u2266","LessGreater;":"\u2276","LessLess;":"\u2aa1","LessSlantEqual;":"\u2a7d","LessTilde;":"\u2272","Lfr;":"\ud835\udd0f","Ll;":"\u22d8","Lleftarrow;":"\u21da","Lmidot;":"\u013f","LongLeftArrow;":"\u27f5","LongLeftRightArrow;":"\u27f7","LongRightArrow;":"\u27f6","Longleftarrow;":"\u27f8","Longleftrightarrow;":"\u27fa","Longrightarrow;":"\u27f9","Lopf;":"\ud835\udd43","LowerLeftArrow;":"\u2199","LowerRightArrow;":"\u2198","Lscr;":"\u2112","Lsh;":"\u21b0","Lstrok;":"\u0141","Lt;":"\u226a","Map;":"\u2905","Mcy;":"\u041c","MediumSpace;":"\u205f","Mellintrf;":"\u2133","Mfr;":"\ud835\udd10","MinusPlus;":"\u2213","Mopf;":"\ud835\udd44","Mscr;":"\u2133","Mu;":"\u039c","NJcy;":"\u040a","Nacute;":"\u0143","Ncaron;":"\u0147","Ncedil;":"\u0145","Ncy;":"\u041d","NegativeMediumSpace;":"\u200b","NegativeThickSpace;":"\u200b","NegativeThinSpace;":"\u200b","NegativeVeryThinSpace;":"\u200b","NestedGreaterGreater;":"\u226b","NestedLessLess;":"\u226a","NewLine;":"\n","Nfr;":"\ud835\udd11","NoBreak;":"\u2060","NonBreakingSpace;":"\xa0","Nopf;":"\u2115","Not;":"\u2aec","NotCongruent;":"\u2262","NotCupCap;":"\u226d","NotDoubleVerticalBar;":"\u2226","NotElement;":"\u2209","NotEqual;":"\u2260","NotEqualTilde;":"\u2242\u0338","NotExists;":"\u2204","NotGreater;":"\u226f","NotGreaterEqual;":"\u2271","NotGreaterFullEqual;":"\u2267\u0338","NotGreaterGreater;":"\u226b\u0338","NotGreaterLess;":"\u2279","NotGreaterSlantEqual;":"\u2a7e\u0338","NotGreaterTilde;":"\u2275","NotHumpDownHump;":"\u224e\u0338","NotHumpEqual;":"\u224f\u0338","NotLeftTriangle;":"\u22ea","NotLeftTriangleBar;":"\u29cf\u0338","NotLeftTriangleEqual;":"\u22ec","NotLess;":"\u226e","NotLessEqual;":"\u2270","NotLessGreater;":"\u2278","NotLessLess;":"\u226a\u0338","NotLessSlantEqual;":"\u2a7d\u0338","NotLessTilde;":"\u2274","NotNestedGreaterGreater;":"\u2aa2\u0338","NotNestedLessLess;":"\u2aa1\u0338","NotPrecedes;":"\u2280","NotPrecedesEqual;":"\u2aaf\u0338","NotPrecedesSlantEqual;":"\u22e0","NotReverseElement;":"\u220c","NotRightTriangle;":"\u22eb","NotRightTriangleBar;":"\u29d0\u0338","NotRightTriangleEqual;":"\u22ed","NotSquareSubset;":"\u228f\u0338","NotSquareSubsetEqual;":"\u22e2","NotSquareSuperset;":"\u2290\u0338","NotSquareSupersetEqual;":"\u22e3","NotSubset;":"\u2282\u20d2","NotSubsetEqual;":"\u2288","NotSucceeds;":"\u2281","NotSucceedsEqual;":"\u2ab0\u0338","NotSucceedsSlantEqual;":"\u22e1","NotSucceedsTilde;":"\u227f\u0338","NotSuperset;":"\u2283\u20d2","NotSupersetEqual;":"\u2289","NotTilde;":"\u2241","NotTildeEqual;":"\u2244","NotTildeFullEqual;":"\u2247","NotTildeTilde;":"\u2249","NotVerticalBar;":"\u2224","Nscr;":"\ud835\udca9",Ntilde:"\xd1","Ntilde;":"\xd1","Nu;":"\u039d","OElig;":"\u0152",Oacute:"\xd3","Oacute;":"\xd3",Ocirc:"\xd4","Ocirc;":"\xd4","Ocy;":"\u041e","Odblac;":"\u0150","Ofr;":"\ud835\udd12",Ograve:"\xd2","Ograve;":"\xd2","Omacr;":"\u014c","Omega;":"\u03a9","Omicron;":"\u039f","Oopf;":"\ud835\udd46","OpenCurlyDoubleQuote;":"\u201c","OpenCurlyQuote;":"\u2018","Or;":"\u2a54","Oscr;":"\ud835\udcaa",Oslash:"\xd8","Oslash;":"\xd8",Otilde:"\xd5","Otilde;":"\xd5","Otimes;":"\u2a37",Ouml:"\xd6","Ouml;":"\xd6","OverBar;":"\u203e","OverBrace;":"\u23de","OverBracket;":"\u23b4","OverParenthesis;":"\u23dc","PartialD;":"\u2202","Pcy;":"\u041f","Pfr;":"\ud835\udd13","Phi;":"\u03a6","Pi;":"\u03a0","PlusMinus;":"\xb1","Poincareplane;":"\u210c","Popf;":"\u2119","Pr;":"\u2abb","Precedes;":"\u227a","PrecedesEqual;":"\u2aaf","PrecedesSlantEqual;":"\u227c","PrecedesTilde;":"\u227e","Prime;":"\u2033","Product;":"\u220f","Proportion;":"\u2237","Proportional;":"\u221d","Pscr;":"\ud835\udcab","Psi;":"\u03a8",QUOT:'"',"QUOT;":'"',"Qfr;":"\ud835\udd14","Qopf;":"\u211a","Qscr;":"\ud835\udcac","RBarr;":"\u2910",REG:"\xae","REG;":"\xae","Racute;":"\u0154","Rang;":"\u27eb","Rarr;":"\u21a0","Rarrtl;":"\u2916","Rcaron;":"\u0158","Rcedil;":"\u0156","Rcy;":"\u0420","Re;":"\u211c","ReverseElement;":"\u220b","ReverseEquilibrium;":"\u21cb","ReverseUpEquilibrium;":"\u296f","Rfr;":"\u211c","Rho;":"\u03a1","RightAngleBracket;":"\u27e9","RightArrow;":"\u2192","RightArrowBar;":"\u21e5","RightArrowLeftArrow;":"\u21c4","RightCeiling;":"\u2309","RightDoubleBracket;":"\u27e7","RightDownTeeVector;":"\u295d","RightDownVector;":"\u21c2","RightDownVectorBar;":"\u2955","RightFloor;":"\u230b","RightTee;":"\u22a2","RightTeeArrow;":"\u21a6","RightTeeVector;":"\u295b","RightTriangle;":"\u22b3","RightTriangleBar;":"\u29d0","RightTriangleEqual;":"\u22b5","RightUpDownVector;":"\u294f","RightUpTeeVector;":"\u295c","RightUpVector;":"\u21be","RightUpVectorBar;":"\u2954","RightVector;":"\u21c0","RightVectorBar;":"\u2953","Rightarrow;":"\u21d2","Ropf;":"\u211d","RoundImplies;":"\u2970","Rrightarrow;":"\u21db","Rscr;":"\u211b","Rsh;":"\u21b1","RuleDelayed;":"\u29f4","SHCHcy;":"\u0429","SHcy;":"\u0428","SOFTcy;":"\u042c","Sacute;":"\u015a","Sc;":"\u2abc","Scaron;":"\u0160","Scedil;":"\u015e","Scirc;":"\u015c","Scy;":"\u0421","Sfr;":"\ud835\udd16","ShortDownArrow;":"\u2193","ShortLeftArrow;":"\u2190","ShortRightArrow;":"\u2192","ShortUpArrow;":"\u2191","Sigma;":"\u03a3","SmallCircle;":"\u2218","Sopf;":"\ud835\udd4a","Sqrt;":"\u221a","Square;":"\u25a1","SquareIntersection;":"\u2293","SquareSubset;":"\u228f","SquareSubsetEqual;":"\u2291","SquareSuperset;":"\u2290","SquareSupersetEqual;":"\u2292","SquareUnion;":"\u2294","Sscr;":"\ud835\udcae","Star;":"\u22c6","Sub;":"\u22d0","Subset;":"\u22d0","SubsetEqual;":"\u2286","Succeeds;":"\u227b","SucceedsEqual;":"\u2ab0","SucceedsSlantEqual;":"\u227d","SucceedsTilde;":"\u227f","SuchThat;":"\u220b","Sum;":"\u2211","Sup;":"\u22d1","Superset;":"\u2283","SupersetEqual;":"\u2287","Supset;":"\u22d1",THORN:"\xde","THORN;":"\xde","TRADE;":"\u2122","TSHcy;":"\u040b","TScy;":"\u0426","Tab;":"\t","Tau;":"\u03a4","Tcaron;":"\u0164","Tcedil;":"\u0162","Tcy;":"\u0422","Tfr;":"\ud835\udd17","Therefore;":"\u2234","Theta;":"\u0398","ThickSpace;":"\u205f\u200a","ThinSpace;":"\u2009","Tilde;":"\u223c","TildeEqual;":"\u2243","TildeFullEqual;":"\u2245","TildeTilde;":"\u2248","Topf;":"\ud835\udd4b","TripleDot;":"\u20db","Tscr;":"\ud835\udcaf","Tstrok;":"\u0166",Uacute:"\xda","Uacute;":"\xda","Uarr;":"\u219f","Uarrocir;":"\u2949","Ubrcy;":"\u040e","Ubreve;":"\u016c",Ucirc:"\xdb","Ucirc;":"\xdb","Ucy;":"\u0423","Udblac;":"\u0170","Ufr;":"\ud835\udd18",Ugrave:"\xd9","Ugrave;":"\xd9","Umacr;":"\u016a","UnderBar;":"_","UnderBrace;":"\u23df","UnderBracket;":"\u23b5","UnderParenthesis;":"\u23dd","Union;":"\u22c3","UnionPlus;":"\u228e","Uogon;":"\u0172","Uopf;":"\ud835\udd4c","UpArrow;":"\u2191","UpArrowBar;":"\u2912","UpArrowDownArrow;":"\u21c5","UpDownArrow;":"\u2195","UpEquilibrium;":"\u296e","UpTee;":"\u22a5","UpTeeArrow;":"\u21a5","Uparrow;":"\u21d1","Updownarrow;":"\u21d5","UpperLeftArrow;":"\u2196","UpperRightArrow;":"\u2197","Upsi;":"\u03d2","Upsilon;":"\u03a5","Uring;":"\u016e","Uscr;":"\ud835\udcb0","Utilde;":"\u0168",Uuml:"\xdc","Uuml;":"\xdc","VDash;":"\u22ab","Vbar;":"\u2aeb","Vcy;":"\u0412","Vdash;":"\u22a9","Vdashl;":"\u2ae6","Vee;":"\u22c1","Verbar;":"\u2016","Vert;":"\u2016","VerticalBar;":"\u2223","VerticalLine;":"|","VerticalSeparator;":"\u2758","VerticalTilde;":"\u2240","VeryThinSpace;":"\u200a","Vfr;":"\ud835\udd19","Vopf;":"\ud835\udd4d","Vscr;":"\ud835\udcb1","Vvdash;":"\u22aa","Wcirc;":"\u0174","Wedge;":"\u22c0","Wfr;":"\ud835\udd1a","Wopf;":"\ud835\udd4e","Wscr;":"\ud835\udcb2","Xfr;":"\ud835\udd1b","Xi;":"\u039e","Xopf;":"\ud835\udd4f","Xscr;":"\ud835\udcb3","YAcy;":"\u042f","YIcy;":"\u0407","YUcy;":"\u042e",Yacute:"\xdd","Yacute;":"\xdd","Ycirc;":"\u0176","Ycy;":"\u042b","Yfr;":"\ud835\udd1c","Yopf;":"\ud835\udd50","Yscr;":"\ud835\udcb4","Yuml;":"\u0178","ZHcy;":"\u0416","Zacute;":"\u0179","Zcaron;":"\u017d","Zcy;":"\u0417","Zdot;":"\u017b","ZeroWidthSpace;":"\u200b","Zeta;":"\u0396","Zfr;":"\u2128","Zopf;":"\u2124","Zscr;":"\ud835\udcb5",aacute:"\xe1","aacute;":"\xe1","abreve;":"\u0103","ac;":"\u223e","acE;":"\u223e\u0333","acd;":"\u223f",acirc:"\xe2","acirc;":"\xe2",acute:"\xb4","acute;":"\xb4","acy;":"\u0430",aelig:"\xe6","aelig;":"\xe6","af;":"\u2061","afr;":"\ud835\udd1e",agrave:"\xe0","agrave;":"\xe0","alefsym;":"\u2135","aleph;":"\u2135","alpha;":"\u03b1","amacr;":"\u0101","amalg;":"\u2a3f",amp:"&","amp;":"&","and;":"\u2227","andand;":"\u2a55","andd;":"\u2a5c","andslope;":"\u2a58","andv;":"\u2a5a","ang;":"\u2220","ange;":"\u29a4","angle;":"\u2220","angmsd;":"\u2221","angmsdaa;":"\u29a8","angmsdab;":"\u29a9","angmsdac;":"\u29aa","angmsdad;":"\u29ab","angmsdae;":"\u29ac","angmsdaf;":"\u29ad","angmsdag;":"\u29ae","angmsdah;":"\u29af","angrt;":"\u221f","angrtvb;":"\u22be","angrtvbd;":"\u299d","angsph;":"\u2222","angst;":"\xc5","angzarr;":"\u237c","aogon;":"\u0105","aopf;":"\ud835\udd52","ap;":"\u2248","apE;":"\u2a70","apacir;":"\u2a6f","ape;":"\u224a","apid;":"\u224b","apos;":"'","approx;":"\u2248","approxeq;":"\u224a",aring:"\xe5","aring;":"\xe5","ascr;":"\ud835\udcb6","ast;":"*","asymp;":"\u2248","asympeq;":"\u224d",atilde:"\xe3","atilde;":"\xe3",auml:"\xe4","auml;":"\xe4","awconint;":"\u2233","awint;":"\u2a11","bNot;":"\u2aed","backcong;":"\u224c","backepsilon;":"\u03f6","backprime;":"\u2035","backsim;":"\u223d","backsimeq;":"\u22cd","barvee;":"\u22bd","barwed;":"\u2305","barwedge;":"\u2305","bbrk;":"\u23b5","bbrktbrk;":"\u23b6","bcong;":"\u224c","bcy;":"\u0431","bdquo;":"\u201e","becaus;":"\u2235","because;":"\u2235","bemptyv;":"\u29b0","bepsi;":"\u03f6","bernou;":"\u212c","beta;":"\u03b2","beth;":"\u2136","between;":"\u226c","bfr;":"\ud835\udd1f","bigcap;":"\u22c2","bigcirc;":"\u25ef","bigcup;":"\u22c3","bigodot;":"\u2a00","bigoplus;":"\u2a01","bigotimes;":"\u2a02","bigsqcup;":"\u2a06","bigstar;":"\u2605","bigtriangledown;":"\u25bd","bigtriangleup;":"\u25b3","biguplus;":"\u2a04","bigvee;":"\u22c1","bigwedge;":"\u22c0","bkarow;":"\u290d","blacklozenge;":"\u29eb","blacksquare;":"\u25aa","blacktriangle;":"\u25b4","blacktriangledown;":"\u25be","blacktriangleleft;":"\u25c2","blacktriangleright;":"\u25b8","blank;":"\u2423","blk12;":"\u2592","blk14;":"\u2591","blk34;":"\u2593","block;":"\u2588","bne;":"=\u20e5","bnequiv;":"\u2261\u20e5","bnot;":"\u2310","bopf;":"\ud835\udd53","bot;":"\u22a5","bottom;":"\u22a5","bowtie;":"\u22c8","boxDL;":"\u2557","boxDR;":"\u2554","boxDl;":"\u2556","boxDr;":"\u2553","boxH;":"\u2550","boxHD;":"\u2566","boxHU;":"\u2569","boxHd;":"\u2564","boxHu;":"\u2567","boxUL;":"\u255d","boxUR;":"\u255a","boxUl;":"\u255c","boxUr;":"\u2559","boxV;":"\u2551","boxVH;":"\u256c","boxVL;":"\u2563","boxVR;":"\u2560","boxVh;":"\u256b","boxVl;":"\u2562","boxVr;":"\u255f","boxbox;":"\u29c9","boxdL;":"\u2555","boxdR;":"\u2552","boxdl;":"\u2510","boxdr;":"\u250c","boxh;":"\u2500","boxhD;":"\u2565","boxhU;":"\u2568","boxhd;":"\u252c","boxhu;":"\u2534","boxminus;":"\u229f","boxplus;":"\u229e","boxtimes;":"\u22a0","boxuL;":"\u255b","boxuR;":"\u2558","boxul;":"\u2518","boxur;":"\u2514","boxv;":"\u2502","boxvH;":"\u256a","boxvL;":"\u2561","boxvR;":"\u255e","boxvh;":"\u253c","boxvl;":"\u2524","boxvr;":"\u251c","bprime;":"\u2035","breve;":"\u02d8",brvbar:"\xa6","brvbar;":"\xa6","bscr;":"\ud835\udcb7","bsemi;":"\u204f","bsim;":"\u223d","bsime;":"\u22cd","bsol;":"\\","bsolb;":"\u29c5","bsolhsub;":"\u27c8","bull;":"\u2022","bullet;":"\u2022","bump;":"\u224e","bumpE;":"\u2aae","bumpe;":"\u224f","bumpeq;":"\u224f","cacute;":"\u0107","cap;":"\u2229","capand;":"\u2a44","capbrcup;":"\u2a49","capcap;":"\u2a4b","capcup;":"\u2a47","capdot;":"\u2a40","caps;":"\u2229\ufe00","caret;":"\u2041","caron;":"\u02c7","ccaps;":"\u2a4d","ccaron;":"\u010d",ccedil:"\xe7","ccedil;":"\xe7","ccirc;":"\u0109","ccups;":"\u2a4c","ccupssm;":"\u2a50","cdot;":"\u010b",cedil:"\xb8","cedil;":"\xb8","cemptyv;":"\u29b2",cent:"\xa2","cent;":"\xa2","centerdot;":"\xb7","cfr;":"\ud835\udd20","chcy;":"\u0447","check;":"\u2713","checkmark;":"\u2713","chi;":"\u03c7","cir;":"\u25cb","cirE;":"\u29c3","circ;":"\u02c6","circeq;":"\u2257","circlearrowleft;":"\u21ba","circlearrowright;":"\u21bb","circledR;":"\xae","circledS;":"\u24c8","circledast;":"\u229b","circledcirc;":"\u229a","circleddash;":"\u229d","cire;":"\u2257","cirfnint;":"\u2a10","cirmid;":"\u2aef","cirscir;":"\u29c2","clubs;":"\u2663","clubsuit;":"\u2663","colon;":":","colone;":"\u2254","coloneq;":"\u2254","comma;":",","commat;":"@","comp;":"\u2201","compfn;":"\u2218","complement;":"\u2201","complexes;":"\u2102","cong;":"\u2245","congdot;":"\u2a6d","conint;":"\u222e","copf;":"\ud835\udd54","coprod;":"\u2210",copy:"\xa9","copy;":"\xa9","copysr;":"\u2117","crarr;":"\u21b5","cross;":"\u2717","cscr;":"\ud835\udcb8","csub;":"\u2acf","csube;":"\u2ad1","csup;":"\u2ad0","csupe;":"\u2ad2","ctdot;":"\u22ef","cudarrl;":"\u2938","cudarrr;":"\u2935","cuepr;":"\u22de","cuesc;":"\u22df","cularr;":"\u21b6","cularrp;":"\u293d","cup;":"\u222a","cupbrcap;":"\u2a48","cupcap;":"\u2a46","cupcup;":"\u2a4a","cupdot;":"\u228d","cupor;":"\u2a45","cups;":"\u222a\ufe00","curarr;":"\u21b7","curarrm;":"\u293c","curlyeqprec;":"\u22de","curlyeqsucc;":"\u22df","curlyvee;":"\u22ce","curlywedge;":"\u22cf",curren:"\xa4","curren;":"\xa4","curvearrowleft;":"\u21b6","curvearrowright;":"\u21b7","cuvee;":"\u22ce","cuwed;":"\u22cf","cwconint;":"\u2232","cwint;":"\u2231","cylcty;":"\u232d","dArr;":"\u21d3","dHar;":"\u2965","dagger;":"\u2020","daleth;":"\u2138","darr;":"\u2193","dash;":"\u2010","dashv;":"\u22a3","dbkarow;":"\u290f","dblac;":"\u02dd","dcaron;":"\u010f","dcy;":"\u0434","dd;":"\u2146","ddagger;":"\u2021","ddarr;":"\u21ca","ddotseq;":"\u2a77",deg:"\xb0","deg;":"\xb0","delta;":"\u03b4","demptyv;":"\u29b1","dfisht;":"\u297f","dfr;":"\ud835\udd21","dharl;":"\u21c3","dharr;":"\u21c2","diam;":"\u22c4","diamond;":"\u22c4","diamondsuit;":"\u2666","diams;":"\u2666","die;":"\xa8","digamma;":"\u03dd","disin;":"\u22f2","div;":"\xf7",divide:"\xf7","divide;":"\xf7","divideontimes;":"\u22c7","divonx;":"\u22c7","djcy;":"\u0452","dlcorn;":"\u231e","dlcrop;":"\u230d","dollar;":"$","dopf;":"\ud835\udd55","dot;":"\u02d9","doteq;":"\u2250","doteqdot;":"\u2251","dotminus;":"\u2238","dotplus;":"\u2214","dotsquare;":"\u22a1","doublebarwedge;":"\u2306","downarrow;":"\u2193","downdownarrows;":"\u21ca","downharpoonleft;":"\u21c3","downharpoonright;":"\u21c2","drbkarow;":"\u2910","drcorn;":"\u231f","drcrop;":"\u230c","dscr;":"\ud835\udcb9","dscy;":"\u0455","dsol;":"\u29f6","dstrok;":"\u0111","dtdot;":"\u22f1","dtri;":"\u25bf","dtrif;":"\u25be","duarr;":"\u21f5","duhar;":"\u296f","dwangle;":"\u29a6","dzcy;":"\u045f","dzigrarr;":"\u27ff","eDDot;":"\u2a77","eDot;":"\u2251",eacute:"\xe9","eacute;":"\xe9","easter;":"\u2a6e","ecaron;":"\u011b","ecir;":"\u2256",ecirc:"\xea","ecirc;":"\xea","ecolon;":"\u2255","ecy;":"\u044d","edot;":"\u0117","ee;":"\u2147","efDot;":"\u2252","efr;":"\ud835\udd22","eg;":"\u2a9a",egrave:"\xe8","egrave;":"\xe8","egs;":"\u2a96","egsdot;":"\u2a98","el;":"\u2a99","elinters;":"\u23e7","ell;":"\u2113","els;":"\u2a95","elsdot;":"\u2a97","emacr;":"\u0113","empty;":"\u2205","emptyset;":"\u2205","emptyv;":"\u2205","emsp13;":"\u2004","emsp14;":"\u2005","emsp;":"\u2003","eng;":"\u014b","ensp;":"\u2002","eogon;":"\u0119","eopf;":"\ud835\udd56","epar;":"\u22d5","eparsl;":"\u29e3","eplus;":"\u2a71","epsi;":"\u03b5","epsilon;":"\u03b5","epsiv;":"\u03f5","eqcirc;":"\u2256","eqcolon;":"\u2255","eqsim;":"\u2242","eqslantgtr;":"\u2a96","eqslantless;":"\u2a95","equals;":"=","equest;":"\u225f","equiv;":"\u2261","equivDD;":"\u2a78","eqvparsl;":"\u29e5","erDot;":"\u2253","erarr;":"\u2971","escr;":"\u212f","esdot;":"\u2250","esim;":"\u2242","eta;":"\u03b7",eth:"\xf0","eth;":"\xf0",euml:"\xeb","euml;":"\xeb","euro;":"\u20ac","excl;":"!","exist;":"\u2203","expectation;":"\u2130","exponentiale;":"\u2147","fallingdotseq;":"\u2252","fcy;":"\u0444","female;":"\u2640","ffilig;":"\ufb03","fflig;":"\ufb00","ffllig;":"\ufb04","ffr;":"\ud835\udd23","filig;":"\ufb01","fjlig;":"fj","flat;":"\u266d","fllig;":"\ufb02","fltns;":"\u25b1","fnof;":"\u0192","fopf;":"\ud835\udd57","forall;":"\u2200","fork;":"\u22d4","forkv;":"\u2ad9","fpartint;":"\u2a0d",frac12:"\xbd","frac12;":"\xbd","frac13;":"\u2153",frac14:"\xbc","frac14;":"\xbc","frac15;":"\u2155","frac16;":"\u2159","frac18;":"\u215b","frac23;":"\u2154","frac25;":"\u2156",frac34:"\xbe","frac34;":"\xbe","frac35;":"\u2157","frac38;":"\u215c","frac45;":"\u2158","frac56;":"\u215a","frac58;":"\u215d","frac78;":"\u215e","frasl;":"\u2044","frown;":"\u2322","fscr;":"\ud835\udcbb","gE;":"\u2267","gEl;":"\u2a8c","gacute;":"\u01f5","gamma;":"\u03b3","gammad;":"\u03dd","gap;":"\u2a86","gbreve;":"\u011f","gcirc;":"\u011d","gcy;":"\u0433","gdot;":"\u0121","ge;":"\u2265","gel;":"\u22db","geq;":"\u2265","geqq;":"\u2267","geqslant;":"\u2a7e","ges;":"\u2a7e","gescc;":"\u2aa9","gesdot;":"\u2a80","gesdoto;":"\u2a82","gesdotol;":"\u2a84","gesl;":"\u22db\ufe00","gesles;":"\u2a94","gfr;":"\ud835\udd24","gg;":"\u226b","ggg;":"\u22d9","gimel;":"\u2137","gjcy;":"\u0453","gl;":"\u2277","glE;":"\u2a92","gla;":"\u2aa5","glj;":"\u2aa4","gnE;":"\u2269","gnap;":"\u2a8a","gnapprox;":"\u2a8a","gne;":"\u2a88","gneq;":"\u2a88","gneqq;":"\u2269","gnsim;":"\u22e7","gopf;":"\ud835\udd58","grave;":"`","gscr;":"\u210a","gsim;":"\u2273","gsime;":"\u2a8e","gsiml;":"\u2a90",gt:">","gt;":">","gtcc;":"\u2aa7","gtcir;":"\u2a7a","gtdot;":"\u22d7","gtlPar;":"\u2995","gtquest;":"\u2a7c","gtrapprox;":"\u2a86","gtrarr;":"\u2978","gtrdot;":"\u22d7","gtreqless;":"\u22db","gtreqqless;":"\u2a8c","gtrless;":"\u2277","gtrsim;":"\u2273","gvertneqq;":"\u2269\ufe00","gvnE;":"\u2269\ufe00","hArr;":"\u21d4","hairsp;":"\u200a","half;":"\xbd","hamilt;":"\u210b","hardcy;":"\u044a","harr;":"\u2194","harrcir;":"\u2948","harrw;":"\u21ad","hbar;":"\u210f","hcirc;":"\u0125","hearts;":"\u2665","heartsuit;":"\u2665","hellip;":"\u2026","hercon;":"\u22b9","hfr;":"\ud835\udd25","hksearow;":"\u2925","hkswarow;":"\u2926","hoarr;":"\u21ff","homtht;":"\u223b","hookleftarrow;":"\u21a9","hookrightarrow;":"\u21aa","hopf;":"\ud835\udd59","horbar;":"\u2015","hscr;":"\ud835\udcbd","hslash;":"\u210f","hstrok;":"\u0127","hybull;":"\u2043","hyphen;":"\u2010",iacute:"\xed","iacute;":"\xed","ic;":"\u2063",icirc:"\xee","icirc;":"\xee","icy;":"\u0438","iecy;":"\u0435",iexcl:"\xa1","iexcl;":"\xa1","iff;":"\u21d4","ifr;":"\ud835\udd26",igrave:"\xec","igrave;":"\xec","ii;":"\u2148","iiiint;":"\u2a0c","iiint;":"\u222d","iinfin;":"\u29dc","iiota;":"\u2129","ijlig;":"\u0133","imacr;":"\u012b","image;":"\u2111","imagline;":"\u2110","imagpart;":"\u2111","imath;":"\u0131","imof;":"\u22b7","imped;":"\u01b5","in;":"\u2208","incare;":"\u2105","infin;":"\u221e","infintie;":"\u29dd","inodot;":"\u0131","int;":"\u222b","intcal;":"\u22ba","integers;":"\u2124","intercal;":"\u22ba","intlarhk;":"\u2a17","intprod;":"\u2a3c","iocy;":"\u0451","iogon;":"\u012f","iopf;":"\ud835\udd5a","iota;":"\u03b9","iprod;":"\u2a3c",iquest:"\xbf","iquest;":"\xbf","iscr;":"\ud835\udcbe","isin;":"\u2208","isinE;":"\u22f9","isindot;":"\u22f5","isins;":"\u22f4","isinsv;":"\u22f3","isinv;":"\u2208","it;":"\u2062","itilde;":"\u0129","iukcy;":"\u0456",iuml:"\xef","iuml;":"\xef","jcirc;":"\u0135","jcy;":"\u0439","jfr;":"\ud835\udd27","jmath;":"\u0237","jopf;":"\ud835\udd5b","jscr;":"\ud835\udcbf","jsercy;":"\u0458","jukcy;":"\u0454","kappa;":"\u03ba","kappav;":"\u03f0","kcedil;":"\u0137","kcy;":"\u043a","kfr;":"\ud835\udd28","kgreen;":"\u0138","khcy;":"\u0445","kjcy;":"\u045c","kopf;":"\ud835\udd5c","kscr;":"\ud835\udcc0","lAarr;":"\u21da","lArr;":"\u21d0","lAtail;":"\u291b","lBarr;":"\u290e","lE;":"\u2266","lEg;":"\u2a8b","lHar;":"\u2962","lacute;":"\u013a","laemptyv;":"\u29b4","lagran;":"\u2112","lambda;":"\u03bb","lang;":"\u27e8","langd;":"\u2991","langle;":"\u27e8","lap;":"\u2a85",laquo:"\xab","laquo;":"\xab","larr;":"\u2190","larrb;":"\u21e4","larrbfs;":"\u291f","larrfs;":"\u291d","larrhk;":"\u21a9","larrlp;":"\u21ab","larrpl;":"\u2939","larrsim;":"\u2973","larrtl;":"\u21a2","lat;":"\u2aab","latail;":"\u2919","late;":"\u2aad","lates;":"\u2aad\ufe00","lbarr;":"\u290c","lbbrk;":"\u2772","lbrace;":"{","lbrack;":"[","lbrke;":"\u298b","lbrksld;":"\u298f","lbrkslu;":"\u298d","lcaron;":"\u013e","lcedil;":"\u013c","lceil;":"\u2308","lcub;":"{","lcy;":"\u043b","ldca;":"\u2936","ldquo;":"\u201c","ldquor;":"\u201e","ldrdhar;":"\u2967","ldrushar;":"\u294b","ldsh;":"\u21b2","le;":"\u2264","leftarrow;":"\u2190","leftarrowtail;":"\u21a2","leftharpoondown;":"\u21bd","leftharpoonup;":"\u21bc","leftleftarrows;":"\u21c7","leftrightarrow;":"\u2194","leftrightarrows;":"\u21c6","leftrightharpoons;":"\u21cb","leftrightsquigarrow;":"\u21ad","leftthreetimes;":"\u22cb","leg;":"\u22da","leq;":"\u2264","leqq;":"\u2266","leqslant;":"\u2a7d","les;":"\u2a7d","lescc;":"\u2aa8","lesdot;":"\u2a7f","lesdoto;":"\u2a81","lesdotor;":"\u2a83","lesg;":"\u22da\ufe00","lesges;":"\u2a93","lessapprox;":"\u2a85","lessdot;":"\u22d6","lesseqgtr;":"\u22da","lesseqqgtr;":"\u2a8b","lessgtr;":"\u2276","lesssim;":"\u2272","lfisht;":"\u297c","lfloor;":"\u230a","lfr;":"\ud835\udd29","lg;":"\u2276","lgE;":"\u2a91","lhard;":"\u21bd","lharu;":"\u21bc","lharul;":"\u296a","lhblk;":"\u2584","ljcy;":"\u0459","ll;":"\u226a","llarr;":"\u21c7","llcorner;":"\u231e","llhard;":"\u296b","lltri;":"\u25fa","lmidot;":"\u0140","lmoust;":"\u23b0","lmoustache;":"\u23b0","lnE;":"\u2268","lnap;":"\u2a89","lnapprox;":"\u2a89","lne;":"\u2a87","lneq;":"\u2a87","lneqq;":"\u2268","lnsim;":"\u22e6","loang;":"\u27ec","loarr;":"\u21fd","lobrk;":"\u27e6","longleftarrow;":"\u27f5","longleftrightarrow;":"\u27f7","longmapsto;":"\u27fc","longrightarrow;":"\u27f6","looparrowleft;":"\u21ab","looparrowright;":"\u21ac","lopar;":"\u2985","lopf;":"\ud835\udd5d","loplus;":"\u2a2d","lotimes;":"\u2a34","lowast;":"\u2217","lowbar;":"_","loz;":"\u25ca","lozenge;":"\u25ca","lozf;":"\u29eb","lpar;":"(","lparlt;":"\u2993","lrarr;":"\u21c6","lrcorner;":"\u231f","lrhar;":"\u21cb","lrhard;":"\u296d","lrm;":"\u200e","lrtri;":"\u22bf","lsaquo;":"\u2039","lscr;":"\ud835\udcc1","lsh;":"\u21b0","lsim;":"\u2272","lsime;":"\u2a8d","lsimg;":"\u2a8f","lsqb;":"[","lsquo;":"\u2018","lsquor;":"\u201a","lstrok;":"\u0142",lt:"<","lt;":"<","ltcc;":"\u2aa6","ltcir;":"\u2a79","ltdot;":"\u22d6","lthree;":"\u22cb","ltimes;":"\u22c9","ltlarr;":"\u2976","ltquest;":"\u2a7b","ltrPar;":"\u2996","ltri;":"\u25c3","ltrie;":"\u22b4","ltrif;":"\u25c2","lurdshar;":"\u294a","luruhar;":"\u2966","lvertneqq;":"\u2268\ufe00","lvnE;":"\u2268\ufe00","mDDot;":"\u223a",macr:"\xaf","macr;":"\xaf","male;":"\u2642","malt;":"\u2720","maltese;":"\u2720","map;":"\u21a6","mapsto;":"\u21a6","mapstodown;":"\u21a7","mapstoleft;":"\u21a4","mapstoup;":"\u21a5","marker;":"\u25ae","mcomma;":"\u2a29","mcy;":"\u043c","mdash;":"\u2014","measuredangle;":"\u2221","mfr;":"\ud835\udd2a","mho;":"\u2127",micro:"\xb5","micro;":"\xb5","mid;":"\u2223","midast;":"*","midcir;":"\u2af0",middot:"\xb7","middot;":"\xb7","minus;":"\u2212","minusb;":"\u229f","minusd;":"\u2238","minusdu;":"\u2a2a","mlcp;":"\u2adb","mldr;":"\u2026","mnplus;":"\u2213","models;":"\u22a7","mopf;":"\ud835\udd5e","mp;":"\u2213","mscr;":"\ud835\udcc2","mstpos;":"\u223e","mu;":"\u03bc","multimap;":"\u22b8","mumap;":"\u22b8","nGg;":"\u22d9\u0338","nGt;":"\u226b\u20d2","nGtv;":"\u226b\u0338","nLeftarrow;":"\u21cd","nLeftrightarrow;":"\u21ce","nLl;":"\u22d8\u0338","nLt;":"\u226a\u20d2","nLtv;":"\u226a\u0338","nRightarrow;":"\u21cf","nVDash;":"\u22af","nVdash;":"\u22ae","nabla;":"\u2207","nacute;":"\u0144","nang;":"\u2220\u20d2","nap;":"\u2249","napE;":"\u2a70\u0338","napid;":"\u224b\u0338","napos;":"\u0149","napprox;":"\u2249","natur;":"\u266e","natural;":"\u266e","naturals;":"\u2115",nbsp:"\xa0","nbsp;":"\xa0","nbump;":"\u224e\u0338","nbumpe;":"\u224f\u0338","ncap;":"\u2a43","ncaron;":"\u0148","ncedil;":"\u0146","ncong;":"\u2247","ncongdot;":"\u2a6d\u0338","ncup;":"\u2a42","ncy;":"\u043d","ndash;":"\u2013","ne;":"\u2260","neArr;":"\u21d7","nearhk;":"\u2924","nearr;":"\u2197","nearrow;":"\u2197","nedot;":"\u2250\u0338","nequiv;":"\u2262","nesear;":"\u2928","nesim;":"\u2242\u0338","nexist;":"\u2204","nexists;":"\u2204","nfr;":"\ud835\udd2b","ngE;":"\u2267\u0338","nge;":"\u2271","ngeq;":"\u2271","ngeqq;":"\u2267\u0338","ngeqslant;":"\u2a7e\u0338","nges;":"\u2a7e\u0338","ngsim;":"\u2275","ngt;":"\u226f","ngtr;":"\u226f","nhArr;":"\u21ce","nharr;":"\u21ae","nhpar;":"\u2af2","ni;":"\u220b","nis;":"\u22fc","nisd;":"\u22fa","niv;":"\u220b","njcy;":"\u045a","nlArr;":"\u21cd","nlE;":"\u2266\u0338","nlarr;":"\u219a","nldr;":"\u2025","nle;":"\u2270","nleftarrow;":"\u219a","nleftrightarrow;":"\u21ae","nleq;":"\u2270","nleqq;":"\u2266\u0338","nleqslant;":"\u2a7d\u0338","nles;":"\u2a7d\u0338","nless;":"\u226e","nlsim;":"\u2274","nlt;":"\u226e","nltri;":"\u22ea","nltrie;":"\u22ec","nmid;":"\u2224","nopf;":"\ud835\udd5f",not:"\xac","not;":"\xac","notin;":"\u2209","notinE;":"\u22f9\u0338","notindot;":"\u22f5\u0338","notinva;":"\u2209","notinvb;":"\u22f7","notinvc;":"\u22f6","notni;":"\u220c","notniva;":"\u220c","notnivb;":"\u22fe","notnivc;":"\u22fd","npar;":"\u2226","nparallel;":"\u2226","nparsl;":"\u2afd\u20e5","npart;":"\u2202\u0338","npolint;":"\u2a14","npr;":"\u2280","nprcue;":"\u22e0","npre;":"\u2aaf\u0338","nprec;":"\u2280","npreceq;":"\u2aaf\u0338","nrArr;":"\u21cf","nrarr;":"\u219b","nrarrc;":"\u2933\u0338","nrarrw;":"\u219d\u0338","nrightarrow;":"\u219b","nrtri;":"\u22eb","nrtrie;":"\u22ed","nsc;":"\u2281","nsccue;":"\u22e1","nsce;":"\u2ab0\u0338","nscr;":"\ud835\udcc3","nshortmid;":"\u2224","nshortparallel;":"\u2226","nsim;":"\u2241","nsime;":"\u2244","nsimeq;":"\u2244","nsmid;":"\u2224","nspar;":"\u2226","nsqsube;":"\u22e2","nsqsupe;":"\u22e3","nsub;":"\u2284","nsubE;":"\u2ac5\u0338","nsube;":"\u2288","nsubset;":"\u2282\u20d2","nsubseteq;":"\u2288","nsubseteqq;":"\u2ac5\u0338","nsucc;":"\u2281","nsucceq;":"\u2ab0\u0338","nsup;":"\u2285","nsupE;":"\u2ac6\u0338","nsupe;":"\u2289","nsupset;":"\u2283\u20d2","nsupseteq;":"\u2289","nsupseteqq;":"\u2ac6\u0338","ntgl;":"\u2279",ntilde:"\xf1","ntilde;":"\xf1","ntlg;":"\u2278","ntriangleleft;":"\u22ea","ntrianglelefteq;":"\u22ec","ntriangleright;":"\u22eb","ntrianglerighteq;":"\u22ed","nu;":"\u03bd","num;":"#","numero;":"\u2116","numsp;":"\u2007","nvDash;":"\u22ad","nvHarr;":"\u2904","nvap;":"\u224d\u20d2","nvdash;":"\u22ac","nvge;":"\u2265\u20d2","nvgt;":">\u20d2","nvinfin;":"\u29de","nvlArr;":"\u2902","nvle;":"\u2264\u20d2","nvlt;":"<\u20d2","nvltrie;":"\u22b4\u20d2","nvrArr;":"\u2903","nvrtrie;":"\u22b5\u20d2","nvsim;":"\u223c\u20d2","nwArr;":"\u21d6","nwarhk;":"\u2923","nwarr;":"\u2196","nwarrow;":"\u2196","nwnear;":"\u2927","oS;":"\u24c8",oacute:"\xf3","oacute;":"\xf3","oast;":"\u229b","ocir;":"\u229a",ocirc:"\xf4","ocirc;":"\xf4","ocy;":"\u043e","odash;":"\u229d","odblac;":"\u0151","odiv;":"\u2a38","odot;":"\u2299","odsold;":"\u29bc","oelig;":"\u0153","ofcir;":"\u29bf","ofr;":"\ud835\udd2c","ogon;":"\u02db",ograve:"\xf2","ograve;":"\xf2","ogt;":"\u29c1","ohbar;":"\u29b5","ohm;":"\u03a9","oint;":"\u222e","olarr;":"\u21ba","olcir;":"\u29be","olcross;":"\u29bb","oline;":"\u203e","olt;":"\u29c0","omacr;":"\u014d","omega;":"\u03c9","omicron;":"\u03bf","omid;":"\u29b6","ominus;":"\u2296","oopf;":"\ud835\udd60","opar;":"\u29b7","operp;":"\u29b9","oplus;":"\u2295","or;":"\u2228","orarr;":"\u21bb","ord;":"\u2a5d","order;":"\u2134","orderof;":"\u2134",ordf:"\xaa","ordf;":"\xaa",ordm:"\xba","ordm;":"\xba","origof;":"\u22b6","oror;":"\u2a56","orslope;":"\u2a57","orv;":"\u2a5b","oscr;":"\u2134",oslash:"\xf8","oslash;":"\xf8","osol;":"\u2298",otilde:"\xf5","otilde;":"\xf5","otimes;":"\u2297","otimesas;":"\u2a36",ouml:"\xf6","ouml;":"\xf6","ovbar;":"\u233d","par;":"\u2225",para:"\xb6","para;":"\xb6","parallel;":"\u2225","parsim;":"\u2af3","parsl;":"\u2afd","part;":"\u2202","pcy;":"\u043f","percnt;":"%","period;":".","permil;":"\u2030","perp;":"\u22a5","pertenk;":"\u2031","pfr;":"\ud835\udd2d","phi;":"\u03c6","phiv;":"\u03d5","phmmat;":"\u2133","phone;":"\u260e","pi;":"\u03c0","pitchfork;":"\u22d4","piv;":"\u03d6","planck;":"\u210f","planckh;":"\u210e","plankv;":"\u210f","plus;":"+","plusacir;":"\u2a23","plusb;":"\u229e","pluscir;":"\u2a22","plusdo;":"\u2214","plusdu;":"\u2a25","pluse;":"\u2a72",plusmn:"\xb1","plusmn;":"\xb1","plussim;":"\u2a26","plustwo;":"\u2a27","pm;":"\xb1","pointint;":"\u2a15","popf;":"\ud835\udd61",pound:"\xa3","pound;":"\xa3","pr;":"\u227a","prE;":"\u2ab3","prap;":"\u2ab7","prcue;":"\u227c","pre;":"\u2aaf","prec;":"\u227a","precapprox;":"\u2ab7","preccurlyeq;":"\u227c","preceq;":"\u2aaf","precnapprox;":"\u2ab9","precneqq;":"\u2ab5","precnsim;":"\u22e8","precsim;":"\u227e","prime;":"\u2032","primes;":"\u2119","prnE;":"\u2ab5","prnap;":"\u2ab9","prnsim;":"\u22e8","prod;":"\u220f","profalar;":"\u232e","profline;":"\u2312","profsurf;":"\u2313","prop;":"\u221d","propto;":"\u221d","prsim;":"\u227e","prurel;":"\u22b0","pscr;":"\ud835\udcc5","psi;":"\u03c8","puncsp;":"\u2008","qfr;":"\ud835\udd2e","qint;":"\u2a0c","qopf;":"\ud835\udd62","qprime;":"\u2057","qscr;":"\ud835\udcc6","quaternions;":"\u210d","quatint;":"\u2a16","quest;":"?","questeq;":"\u225f",quot:'"',"quot;":'"',"rAarr;":"\u21db","rArr;":"\u21d2","rAtail;":"\u291c","rBarr;":"\u290f","rHar;":"\u2964","race;":"\u223d\u0331","racute;":"\u0155","radic;":"\u221a","raemptyv;":"\u29b3","rang;":"\u27e9","rangd;":"\u2992","range;":"\u29a5","rangle;":"\u27e9",raquo:"\xbb","raquo;":"\xbb","rarr;":"\u2192","rarrap;":"\u2975","rarrb;":"\u21e5","rarrbfs;":"\u2920","rarrc;":"\u2933","rarrfs;":"\u291e","rarrhk;":"\u21aa","rarrlp;":"\u21ac","rarrpl;":"\u2945","rarrsim;":"\u2974","rarrtl;":"\u21a3","rarrw;":"\u219d","ratail;":"\u291a","ratio;":"\u2236","rationals;":"\u211a","rbarr;":"\u290d","rbbrk;":"\u2773","rbrace;":"}","rbrack;":"]","rbrke;":"\u298c","rbrksld;":"\u298e","rbrkslu;":"\u2990","rcaron;":"\u0159","rcedil;":"\u0157","rceil;":"\u2309","rcub;":"}","rcy;":"\u0440","rdca;":"\u2937","rdldhar;":"\u2969","rdquo;":"\u201d","rdquor;":"\u201d","rdsh;":"\u21b3","real;":"\u211c","realine;":"\u211b","realpart;":"\u211c","reals;":"\u211d","rect;":"\u25ad",reg:"\xae","reg;":"\xae","rfisht;":"\u297d","rfloor;":"\u230b","rfr;":"\ud835\udd2f","rhard;":"\u21c1","rharu;":"\u21c0","rharul;":"\u296c","rho;":"\u03c1","rhov;":"\u03f1","rightarrow;":"\u2192","rightarrowtail;":"\u21a3","rightharpoondown;":"\u21c1","rightharpoonup;":"\u21c0","rightleftarrows;":"\u21c4","rightleftharpoons;":"\u21cc","rightrightarrows;":"\u21c9","rightsquigarrow;":"\u219d","rightthreetimes;":"\u22cc","ring;":"\u02da","risingdotseq;":"\u2253","rlarr;":"\u21c4","rlhar;":"\u21cc","rlm;":"\u200f","rmoust;":"\u23b1","rmoustache;":"\u23b1","rnmid;":"\u2aee","roang;":"\u27ed","roarr;":"\u21fe","robrk;":"\u27e7","ropar;":"\u2986","ropf;":"\ud835\udd63","roplus;":"\u2a2e","rotimes;":"\u2a35","rpar;":")","rpargt;":"\u2994","rppolint;":"\u2a12","rrarr;":"\u21c9","rsaquo;":"\u203a","rscr;":"\ud835\udcc7","rsh;":"\u21b1","rsqb;":"]","rsquo;":"\u2019","rsquor;":"\u2019","rthree;":"\u22cc","rtimes;":"\u22ca","rtri;":"\u25b9","rtrie;":"\u22b5","rtrif;":"\u25b8","rtriltri;":"\u29ce","ruluhar;":"\u2968","rx;":"\u211e","sacute;":"\u015b","sbquo;":"\u201a","sc;":"\u227b","scE;":"\u2ab4","scap;":"\u2ab8","scaron;":"\u0161","sccue;":"\u227d","sce;":"\u2ab0","scedil;":"\u015f","scirc;":"\u015d","scnE;":"\u2ab6","scnap;":"\u2aba","scnsim;":"\u22e9","scpolint;":"\u2a13","scsim;":"\u227f","scy;":"\u0441","sdot;":"\u22c5","sdotb;":"\u22a1","sdote;":"\u2a66","seArr;":"\u21d8","searhk;":"\u2925","searr;":"\u2198","searrow;":"\u2198",sect:"\xa7","sect;":"\xa7","semi;":";","seswar;":"\u2929","setminus;":"\u2216","setmn;":"\u2216","sext;":"\u2736","sfr;":"\ud835\udd30","sfrown;":"\u2322","sharp;":"\u266f","shchcy;":"\u0449","shcy;":"\u0448","shortmid;":"\u2223","shortparallel;":"\u2225",shy:"\xad","shy;":"\xad","sigma;":"\u03c3","sigmaf;":"\u03c2","sigmav;":"\u03c2","sim;":"\u223c","simdot;":"\u2a6a","sime;":"\u2243","simeq;":"\u2243","simg;":"\u2a9e","simgE;":"\u2aa0","siml;":"\u2a9d","simlE;":"\u2a9f","simne;":"\u2246","simplus;":"\u2a24","simrarr;":"\u2972","slarr;":"\u2190","smallsetminus;":"\u2216","smashp;":"\u2a33","smeparsl;":"\u29e4","smid;":"\u2223","smile;":"\u2323","smt;":"\u2aaa","smte;":"\u2aac","smtes;":"\u2aac\ufe00","softcy;":"\u044c","sol;":"/","solb;":"\u29c4","solbar;":"\u233f","sopf;":"\ud835\udd64","spades;":"\u2660","spadesuit;":"\u2660","spar;":"\u2225","sqcap;":"\u2293","sqcaps;":"\u2293\ufe00","sqcup;":"\u2294","sqcups;":"\u2294\ufe00","sqsub;":"\u228f","sqsube;":"\u2291","sqsubset;":"\u228f","sqsubseteq;":"\u2291","sqsup;":"\u2290","sqsupe;":"\u2292","sqsupset;":"\u2290","sqsupseteq;":"\u2292","squ;":"\u25a1","square;":"\u25a1","squarf;":"\u25aa","squf;":"\u25aa","srarr;":"\u2192","sscr;":"\ud835\udcc8","ssetmn;":"\u2216","ssmile;":"\u2323","sstarf;":"\u22c6","star;":"\u2606","starf;":"\u2605","straightepsilon;":"\u03f5","straightphi;":"\u03d5","strns;":"\xaf","sub;":"\u2282","subE;":"\u2ac5","subdot;":"\u2abd","sube;":"\u2286","subedot;":"\u2ac3","submult;":"\u2ac1","subnE;":"\u2acb","subne;":"\u228a","subplus;":"\u2abf","subrarr;":"\u2979","subset;":"\u2282","subseteq;":"\u2286","subseteqq;":"\u2ac5","subsetneq;":"\u228a","subsetneqq;":"\u2acb","subsim;":"\u2ac7","subsub;":"\u2ad5","subsup;":"\u2ad3","succ;":"\u227b","succapprox;":"\u2ab8","succcurlyeq;":"\u227d","succeq;":"\u2ab0","succnapprox;":"\u2aba","succneqq;":"\u2ab6","succnsim;":"\u22e9","succsim;":"\u227f","sum;":"\u2211","sung;":"\u266a",sup1:"\xb9","sup1;":"\xb9",sup2:"\xb2","sup2;":"\xb2",sup3:"\xb3","sup3;":"\xb3","sup;":"\u2283","supE;":"\u2ac6","supdot;":"\u2abe","supdsub;":"\u2ad8","supe;":"\u2287","supedot;":"\u2ac4","suphsol;":"\u27c9","suphsub;":"\u2ad7","suplarr;":"\u297b","supmult;":"\u2ac2","supnE;":"\u2acc","supne;":"\u228b","supplus;":"\u2ac0","supset;":"\u2283","supseteq;":"\u2287","supseteqq;":"\u2ac6","supsetneq;":"\u228b","supsetneqq;":"\u2acc","supsim;":"\u2ac8","supsub;":"\u2ad4","supsup;":"\u2ad6","swArr;":"\u21d9","swarhk;":"\u2926","swarr;":"\u2199","swarrow;":"\u2199","swnwar;":"\u292a",szlig:"\xdf","szlig;":"\xdf","target;":"\u2316","tau;":"\u03c4","tbrk;":"\u23b4","tcaron;":"\u0165","tcedil;":"\u0163","tcy;":"\u0442","tdot;":"\u20db","telrec;":"\u2315","tfr;":"\ud835\udd31","there4;":"\u2234","therefore;":"\u2234","theta;":"\u03b8","thetasym;":"\u03d1","thetav;":"\u03d1","thickapprox;":"\u2248","thicksim;":"\u223c","thinsp;":"\u2009","thkap;":"\u2248","thksim;":"\u223c",thorn:"\xfe","thorn;":"\xfe","tilde;":"\u02dc",times:"\xd7","times;":"\xd7","timesb;":"\u22a0","timesbar;":"\u2a31","timesd;":"\u2a30","tint;":"\u222d","toea;":"\u2928","top;":"\u22a4","topbot;":"\u2336","topcir;":"\u2af1","topf;":"\ud835\udd65","topfork;":"\u2ada","tosa;":"\u2929","tprime;":"\u2034","trade;":"\u2122","triangle;":"\u25b5","triangledown;":"\u25bf","triangleleft;":"\u25c3","trianglelefteq;":"\u22b4","triangleq;":"\u225c","triangleright;":"\u25b9","trianglerighteq;":"\u22b5","tridot;":"\u25ec","trie;":"\u225c","triminus;":"\u2a3a","triplus;":"\u2a39","trisb;":"\u29cd","tritime;":"\u2a3b","trpezium;":"\u23e2","tscr;":"\ud835\udcc9","tscy;":"\u0446","tshcy;":"\u045b","tstrok;":"\u0167","twixt;":"\u226c","twoheadleftarrow;":"\u219e","twoheadrightarrow;":"\u21a0","uArr;":"\u21d1","uHar;":"\u2963",uacute:"\xfa","uacute;":"\xfa","uarr;":"\u2191","ubrcy;":"\u045e","ubreve;":"\u016d",ucirc:"\xfb","ucirc;":"\xfb","ucy;":"\u0443","udarr;":"\u21c5","udblac;":"\u0171","udhar;":"\u296e","ufisht;":"\u297e","ufr;":"\ud835\udd32",ugrave:"\xf9","ugrave;":"\xf9","uharl;":"\u21bf","uharr;":"\u21be","uhblk;":"\u2580","ulcorn;":"\u231c","ulcorner;":"\u231c","ulcrop;":"\u230f","ultri;":"\u25f8","umacr;":"\u016b",uml:"\xa8","uml;":"\xa8","uogon;":"\u0173","uopf;":"\ud835\udd66","uparrow;":"\u2191","updownarrow;":"\u2195","upharpoonleft;":"\u21bf","upharpoonright;":"\u21be","uplus;":"\u228e","upsi;":"\u03c5","upsih;":"\u03d2","upsilon;":"\u03c5","upuparrows;":"\u21c8","urcorn;":"\u231d","urcorner;":"\u231d","urcrop;":"\u230e","uring;":"\u016f","urtri;":"\u25f9","uscr;":"\ud835\udcca","utdot;":"\u22f0","utilde;":"\u0169","utri;":"\u25b5","utrif;":"\u25b4","uuarr;":"\u21c8",uuml:"\xfc","uuml;":"\xfc","uwangle;":"\u29a7","vArr;":"\u21d5","vBar;":"\u2ae8","vBarv;":"\u2ae9","vDash;":"\u22a8","vangrt;":"\u299c","varepsilon;":"\u03f5","varkappa;":"\u03f0","varnothing;":"\u2205","varphi;":"\u03d5","varpi;":"\u03d6","varpropto;":"\u221d","varr;":"\u2195","varrho;":"\u03f1","varsigma;":"\u03c2","varsubsetneq;":"\u228a\ufe00","varsubsetneqq;":"\u2acb\ufe00","varsupsetneq;":"\u228b\ufe00","varsupsetneqq;":"\u2acc\ufe00","vartheta;":"\u03d1","vartriangleleft;":"\u22b2","vartriangleright;":"\u22b3","vcy;":"\u0432","vdash;":"\u22a2","vee;":"\u2228","veebar;":"\u22bb","veeeq;":"\u225a","vellip;":"\u22ee","verbar;":"|","vert;":"|","vfr;":"\ud835\udd33","vltri;":"\u22b2","vnsub;":"\u2282\u20d2","vnsup;":"\u2283\u20d2","vopf;":"\ud835\udd67","vprop;":"\u221d","vrtri;":"\u22b3","vscr;":"\ud835\udccb","vsubnE;":"\u2acb\ufe00","vsubne;":"\u228a\ufe00","vsupnE;":"\u2acc\ufe00","vsupne;":"\u228b\ufe00","vzigzag;":"\u299a","wcirc;":"\u0175","wedbar;":"\u2a5f","wedge;":"\u2227","wedgeq;":"\u2259","weierp;":"\u2118","wfr;":"\ud835\udd34","wopf;":"\ud835\udd68","wp;":"\u2118","wr;":"\u2240","wreath;":"\u2240","wscr;":"\ud835\udccc","xcap;":"\u22c2","xcirc;":"\u25ef","xcup;":"\u22c3","xdtri;":"\u25bd","xfr;":"\ud835\udd35","xhArr;":"\u27fa","xharr;":"\u27f7","xi;":"\u03be","xlArr;":"\u27f8","xlarr;":"\u27f5","xmap;":"\u27fc","xnis;":"\u22fb","xodot;":"\u2a00","xopf;":"\ud835\udd69","xoplus;":"\u2a01","xotime;":"\u2a02","xrArr;":"\u27f9","xrarr;":"\u27f6","xscr;":"\ud835\udccd","xsqcup;":"\u2a06","xuplus;":"\u2a04","xutri;":"\u25b3","xvee;":"\u22c1","xwedge;":"\u22c0",yacute:"\xfd","yacute;":"\xfd","yacy;":"\u044f","ycirc;":"\u0177","ycy;":"\u044b",yen:"\xa5","yen;":"\xa5","yfr;":"\ud835\udd36","yicy;":"\u0457","yopf;":"\ud835\udd6a","yscr;":"\ud835\udcce","yucy;":"\u044e",yuml:"\xff","yuml;":"\xff","zacute;":"\u017a","zcaron;":"\u017e","zcy;":"\u0437","zdot;":"\u017c","zeetrf;":"\u2128","zeta;":"\u03b6","zfr;":"\ud835\udd37","zhcy;":"\u0436","zigrarr;":"\u21dd","zopf;":"\ud835\udd6b","zscr;":"\ud835\udccf","zwj;":"\u200d","zwnj;":"\u200c"},B.b7,t.B)
B.ba=A.a(s(["null-character","invalid-codepoint","incorrectly-placed-solidus","incorrect-cr-newline-entity","illegal-windows-1252-entity","cant-convert-numeric-entity","illegal-codepoint-for-numeric-entity","numeric-entity-without-semicolon","expected-numeric-entity-but-got-eof","expected-numeric-entity","named-entity-without-semicolon","expected-named-entity","attributes-in-end-tag","self-closing-flag-on-end-tag","expected-tag-name-but-got-right-bracket","expected-tag-name-but-got-question-mark","expected-tag-name",u.g,"expected-closing-tag-but-got-eof","expected-closing-tag-but-got-char","eof-in-tag-name","expected-attribute-name-but-got-eof","eof-in-attribute-name","invalid-character-in-attribute-name","duplicate-attribute","expected-end-of-tag-name-but-got-eof","expected-attribute-value-but-got-eof",u.A,"equals-in-unquoted-attribute-value",u.V,"invalid-character-after-attribute-name",u.H,"eof-in-attribute-value-double-quote","eof-in-attribute-value-single-quote","eof-in-attribute-value-no-quotes","unexpected-EOF-after-solidus-in-tag",u.B,"expected-dashes-or-doctype",u.d,"unexpected-space-after-double-dash-in-comment","incorrect-comment","eof-in-comment","eof-in-comment-end-dash",u.K,"eof-in-comment-double-dash","eof-in-comment-end-space-state","eof-in-comment-end-bang-state","unexpected-char-in-comment","need-space-after-doctype",u.f,"expected-doctype-name-but-got-eof","eof-in-doctype-name","eof-in-doctype",u.S,"unexpected-end-of-doctype","unexpected-char-in-doctype","eof-in-innerhtml","unexpected-doctype","non-html-root","expected-doctype-but-got-eof","unknown-doctype","expected-doctype-but-got-chars","expected-doctype-but-got-start-tag","expected-doctype-but-got-end-tag","end-tag-after-implied-root","expected-named-closing-tag-but-got-eof","two-heads-are-not-better-than-one","unexpected-end-tag","unexpected-start-tag-out-of-my-head","unexpected-start-tag","missing-end-tag","missing-end-tags","unexpected-start-tag-implies-end-tag","unexpected-start-tag-treated-as","deprecated-tag","unexpected-start-tag-ignored","expected-one-end-tag-but-got-another","end-tag-too-early","end-tag-too-early-named","end-tag-too-early-ignored","adoption-agency-1.1","adoption-agency-1.2","adoption-agency-1.3","unexpected-end-tag-treated-as","no-end-tag","unexpected-implied-end-tag-in-table","unexpected-implied-end-tag-in-table-body","unexpected-char-implies-table-voodoo","unexpected-hidden-input-in-table","unexpected-form-in-table",u.M,"unexpected-end-tag-implies-table-voodoo","unexpected-cell-in-table-body","unexpected-cell-end-tag","unexpected-end-tag-in-table-body","unexpected-implied-end-tag-in-table-row","unexpected-end-tag-in-table-row","unexpected-select-in-select","unexpected-input-in-select","unexpected-start-tag-in-select","unexpected-end-tag-in-select",u.a,u.r,"unexpected-char-after-body","unexpected-start-tag-after-body","unexpected-end-tag-after-body","unexpected-char-in-frameset","unexpected-start-tag-in-frameset",u.q,"unexpected-end-tag-in-frameset","unexpected-char-after-frameset","unexpected-start-tag-after-frameset","unexpected-end-tag-after-frameset","unexpected-end-tag-after-body-innerhtml","expected-eof-but-got-char","expected-eof-but-got-start-tag","expected-eof-but-got-end-tag","eof-in-table","eof-in-select","eof-in-frameset","eof-in-script-in-script","eof-in-foreign-lands","non-void-element-with-trailing-solidus",u.G,"unexpected-end-tag-before-html","undefined-error"]),t.s)
B.bE=new A.r(126,{"null-character":"Null character in input stream, replaced with U+FFFD.","invalid-codepoint":"Invalid codepoint in stream.","incorrectly-placed-solidus":"Solidus (/) incorrectly placed in tag.","incorrect-cr-newline-entity":"Incorrect CR newline entity, replaced with LF.","illegal-windows-1252-entity":"Entity used with illegal number (windows-1252 reference).","cant-convert-numeric-entity":"Numeric entity couldn't be converted to character (codepoint U+%(charAsInt)08x).","illegal-codepoint-for-numeric-entity":"Numeric entity represents an illegal codepoint: U+%(charAsInt)08x.","numeric-entity-without-semicolon":"Numeric entity didn't end with ';'.","expected-numeric-entity-but-got-eof":"Numeric entity expected. Got end of file instead.","expected-numeric-entity":"Numeric entity expected but none found.","named-entity-without-semicolon":"Named entity didn't end with ';'.","expected-named-entity":"Named entity expected. Got none.","attributes-in-end-tag":"End tag contains unexpected attributes.","self-closing-flag-on-end-tag":"End tag contains unexpected self-closing flag.","expected-tag-name-but-got-right-bracket":"Expected tag name. Got '>' instead.","expected-tag-name-but-got-question-mark":"Expected tag name. Got '?' instead. (HTML doesn't support processing instructions.)","expected-tag-name":"Expected tag name. Got something else instead","expected-closing-tag-but-got-right-bracket":"Expected closing tag. Got '>' instead. Ignoring '</>'.","expected-closing-tag-but-got-eof":"Expected closing tag. Unexpected end of file.","expected-closing-tag-but-got-char":"Expected closing tag. Unexpected character '%(data)s' found.","eof-in-tag-name":"Unexpected end of file in the tag name.","expected-attribute-name-but-got-eof":"Unexpected end of file. Expected attribute name instead.","eof-in-attribute-name":"Unexpected end of file in attribute name.","invalid-character-in-attribute-name":"Invalid character in attribute name","duplicate-attribute":"Dropped duplicate attribute on tag.","expected-end-of-tag-name-but-got-eof":"Unexpected end of file. Expected = or end of tag.","expected-attribute-value-but-got-eof":"Unexpected end of file. Expected attribute value.","expected-attribute-value-but-got-right-bracket":"Expected attribute value. Got '>' instead.","equals-in-unquoted-attribute-value":"Unexpected = in unquoted attribute","unexpected-character-in-unquoted-attribute-value":"Unexpected character in unquoted attribute","invalid-character-after-attribute-name":"Unexpected character after attribute name.","unexpected-character-after-attribute-value":"Unexpected character after attribute value.","eof-in-attribute-value-double-quote":'Unexpected end of file in attribute value (".',"eof-in-attribute-value-single-quote":"Unexpected end of file in attribute value (').","eof-in-attribute-value-no-quotes":"Unexpected end of file in attribute value.","unexpected-EOF-after-solidus-in-tag":"Unexpected end of file in tag. Expected >","unexpected-character-after-soldius-in-tag":"Unexpected character after / in tag. Expected >","expected-dashes-or-doctype":"Expected '--' or 'DOCTYPE'. Not found.","unexpected-bang-after-double-dash-in-comment":"Unexpected ! after -- in comment","unexpected-space-after-double-dash-in-comment":"Unexpected space after -- in comment","incorrect-comment":"Incorrect comment.","eof-in-comment":"Unexpected end of file in comment.","eof-in-comment-end-dash":"Unexpected end of file in comment (-)","unexpected-dash-after-double-dash-in-comment":"Unexpected '-' after '--' found in comment.","eof-in-comment-double-dash":"Unexpected end of file in comment (--).","eof-in-comment-end-space-state":"Unexpected end of file in comment.","eof-in-comment-end-bang-state":"Unexpected end of file in comment.","unexpected-char-in-comment":"Unexpected character in comment found.","need-space-after-doctype":"No space after literal string 'DOCTYPE'.","expected-doctype-name-but-got-right-bracket":"Unexpected > character. Expected DOCTYPE name.","expected-doctype-name-but-got-eof":"Unexpected end of file. Expected DOCTYPE name.","eof-in-doctype-name":"Unexpected end of file in DOCTYPE name.","eof-in-doctype":"Unexpected end of file in DOCTYPE.","expected-space-or-right-bracket-in-doctype":"Expected space or '>'. Got '%(data)s'","unexpected-end-of-doctype":"Unexpected end of DOCTYPE.","unexpected-char-in-doctype":"Unexpected character in DOCTYPE.","eof-in-innerhtml":"XXX innerHTML EOF","unexpected-doctype":"Unexpected DOCTYPE. Ignored.","non-html-root":"html needs to be the first start tag.","expected-doctype-but-got-eof":"Unexpected End of file. Expected DOCTYPE.","unknown-doctype":"Erroneous DOCTYPE.","expected-doctype-but-got-chars":"Unexpected non-space characters. Expected DOCTYPE.","expected-doctype-but-got-start-tag":"Unexpected start tag (%(name)s). Expected DOCTYPE.","expected-doctype-but-got-end-tag":"Unexpected end tag (%(name)s). Expected DOCTYPE.","end-tag-after-implied-root":"Unexpected end tag (%(name)s) after the (implied) root element.","expected-named-closing-tag-but-got-eof":"Unexpected end of file. Expected end tag (%(name)s).","two-heads-are-not-better-than-one":"Unexpected start tag head in existing head. Ignored.","unexpected-end-tag":"Unexpected end tag (%(name)s). Ignored.","unexpected-start-tag-out-of-my-head":"Unexpected start tag (%(name)s) that can be in head. Moved.","unexpected-start-tag":"Unexpected start tag (%(name)s).","missing-end-tag":"Missing end tag (%(name)s).","missing-end-tags":"Missing end tags (%(name)s).","unexpected-start-tag-implies-end-tag":"Unexpected start tag (%(startName)s) implies end tag (%(endName)s).","unexpected-start-tag-treated-as":"Unexpected start tag (%(originalName)s). Treated as %(newName)s.","deprecated-tag":"Unexpected start tag %(name)s. Don't use it!","unexpected-start-tag-ignored":"Unexpected start tag %(name)s. Ignored.","expected-one-end-tag-but-got-another":"Unexpected end tag (%(gotName)s). Missing end tag (%(expectedName)s).","end-tag-too-early":"End tag (%(name)s) seen too early. Expected other end tag.","end-tag-too-early-named":"Unexpected end tag (%(gotName)s). Expected end tag (%(expectedName)s).","end-tag-too-early-ignored":"End tag (%(name)s) seen too early. Ignored.","adoption-agency-1.1":"End tag (%(name)s) violates step 1, paragraph 1 of the adoption agency algorithm.","adoption-agency-1.2":"End tag (%(name)s) violates step 1, paragraph 2 of the adoption agency algorithm.","adoption-agency-1.3":"End tag (%(name)s) violates step 1, paragraph 3 of the adoption agency algorithm.","unexpected-end-tag-treated-as":"Unexpected end tag (%(originalName)s). Treated as %(newName)s.","no-end-tag":"This element (%(name)s) has no end tag.","unexpected-implied-end-tag-in-table":"Unexpected implied end tag (%(name)s) in the table phase.","unexpected-implied-end-tag-in-table-body":"Unexpected implied end tag (%(name)s) in the table body phase.","unexpected-char-implies-table-voodoo":"Unexpected non-space characters in table context caused voodoo mode.","unexpected-hidden-input-in-table":"Unexpected input with type hidden in table context.","unexpected-form-in-table":"Unexpected form in table context.","unexpected-start-tag-implies-table-voodoo":"Unexpected start tag (%(name)s) in table context caused voodoo mode.","unexpected-end-tag-implies-table-voodoo":"Unexpected end tag (%(name)s) in table context caused voodoo mode.","unexpected-cell-in-table-body":"Unexpected table cell start tag (%(name)s) in the table body phase.","unexpected-cell-end-tag":"Got table cell end tag (%(name)s) while required end tags are missing.","unexpected-end-tag-in-table-body":"Unexpected end tag (%(name)s) in the table body phase. Ignored.","unexpected-implied-end-tag-in-table-row":"Unexpected implied end tag (%(name)s) in the table row phase.","unexpected-end-tag-in-table-row":"Unexpected end tag (%(name)s) in the table row phase. Ignored.","unexpected-select-in-select":"Unexpected select start tag in the select phase treated as select end tag.","unexpected-input-in-select":"Unexpected input start tag in the select phase.","unexpected-start-tag-in-select":"Unexpected start tag token (%(name)s in the select phase. Ignored.","unexpected-end-tag-in-select":"Unexpected end tag (%(name)s) in the select phase. Ignored.","unexpected-table-element-start-tag-in-select-in-table":"Unexpected table element start tag (%(name)s) in the select in table phase.","unexpected-table-element-end-tag-in-select-in-table":"Unexpected table element end tag (%(name)s) in the select in table phase.","unexpected-char-after-body":"Unexpected non-space characters in the after body phase.","unexpected-start-tag-after-body":"Unexpected start tag token (%(name)s) in the after body phase.","unexpected-end-tag-after-body":"Unexpected end tag token (%(name)s) in the after body phase.","unexpected-char-in-frameset":"Unepxected characters in the frameset phase. Characters ignored.","unexpected-start-tag-in-frameset":"Unexpected start tag token (%(name)s) in the frameset phase. Ignored.","unexpected-frameset-in-frameset-innerhtml":"Unexpected end tag token (frameset) in the frameset phase (innerHTML).","unexpected-end-tag-in-frameset":"Unexpected end tag token (%(name)s) in the frameset phase. Ignored.","unexpected-char-after-frameset":"Unexpected non-space characters in the after frameset phase. Ignored.","unexpected-start-tag-after-frameset":"Unexpected start tag (%(name)s) in the after frameset phase. Ignored.","unexpected-end-tag-after-frameset":"Unexpected end tag (%(name)s) in the after frameset phase. Ignored.","unexpected-end-tag-after-body-innerhtml":"Unexpected end tag after body(innerHtml)","expected-eof-but-got-char":"Unexpected non-space characters. Expected end of file.","expected-eof-but-got-start-tag":"Unexpected start tag (%(name)s). Expected end of file.","expected-eof-but-got-end-tag":"Unexpected end tag (%(name)s). Expected end of file.","eof-in-table":"Unexpected end of file. Expected table content.","eof-in-select":"Unexpected end of file. Expected select content.","eof-in-frameset":"Unexpected end of file. Expected frameset content.","eof-in-script-in-script":"Unexpected end of file. Expected script content.","eof-in-foreign-lands":"Unexpected end of file. Expected foreign content","non-void-element-with-trailing-solidus":"Trailing solidus not allowed on element %(name)s","unexpected-html-element-in-foreign-content":"Element %(name)s not allowed in a non-html context","unexpected-end-tag-before-html":"Unexpected end tag (%(name)s) before html.","undefined-error":"Undefined error (this sucks and should be fixed)"},B.ba,t.B)
B.bb=A.a(s(["altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","clippath","feblend","fecolormatrix","fecomponenttransfer","fecomposite","feconvolvematrix","fediffuselighting","fedisplacementmap","fedistantlight","feflood","fefunca","fefuncb","fefuncg","fefuncr","fegaussianblur","feimage","femerge","femergenode","femorphology","feoffset","fepointlight","fespecularlighting","fespotlight","fetile","feturbulence","foreignobject","glyphref","lineargradient","radialgradient","textpath"]),t.s)
B.bF=new A.r(36,{altglyph:"altGlyph",altglyphdef:"altGlyphDef",altglyphitem:"altGlyphItem",animatecolor:"animateColor",animatemotion:"animateMotion",animatetransform:"animateTransform",clippath:"clipPath",feblend:"feBlend",fecolormatrix:"feColorMatrix",fecomponenttransfer:"feComponentTransfer",fecomposite:"feComposite",feconvolvematrix:"feConvolveMatrix",fediffuselighting:"feDiffuseLighting",fedisplacementmap:"feDisplacementMap",fedistantlight:"feDistantLight",feflood:"feFlood",fefunca:"feFuncA",fefuncb:"feFuncB",fefuncg:"feFuncG",fefuncr:"feFuncR",fegaussianblur:"feGaussianBlur",feimage:"feImage",femerge:"feMerge",femergenode:"feMergeNode",femorphology:"feMorphology",feoffset:"feOffset",fepointlight:"fePointLight",fespecularlighting:"feSpecularLighting",fespotlight:"feSpotLight",fetile:"feTile",feturbulence:"feTurbulence",foreignobject:"foreignObject",glyphref:"glyphRef",lineargradient:"linearGradient",radialgradient:"radialGradient",textpath:"textPath"},B.bb,t.B)
B.bG=new A.c6([0,"\ufffd",13,"\r",128,"\u20ac",129,"\x81",130,"\u201a",131,"\u0192",132,"\u201e",133,"\u2026",134,"\u2020",135,"\u2021",136,"\u02c6",137,"\u2030",138,"\u0160",139,"\u2039",140,"\u0152",141,"\x8d",142,"\u017d",143,"\x8f",144,"\x90",145,"\u2018",146,"\u2019",147,"\u201c",148,"\u201d",149,"\u2022",150,"\u2013",151,"\u2014",152,"\u02dc",153,"\u2122",154,"\u0161",155,"\u203a",156,"\u0153",157,"\x9d",158,"\u017e",159,"\u0178"],A.aO("c6<i,n>"))
B.M=new A.dg("severe")
B.an=new A.dg("warning")
B.am=new A.dg("info")
B.ak=new A.c6([B.M,"\x1b[31m",B.an,"\x1b[35m",B.am,"\x1b[32m"],t.ha)
B.c6=new A.c6([B.M,"error",B.an,"warning",B.am,"info"],t.ha)
B.bg=A.a(s(["xlink:actuate","xlink:arcrole","xlink:href","xlink:role","xlink:show","xlink:title","xlink:type","xml:base","xml:lang","xml:space","xmlns","xmlns:xlink"]),t.s)
B.aI=new A.aD("xlink","actuate","http://www.w3.org/1999/xlink")
B.aL=new A.aD("xlink","arcrole","http://www.w3.org/1999/xlink")
B.aM=new A.aD("xlink","href","http://www.w3.org/1999/xlink")
B.aK=new A.aD("xlink","role","http://www.w3.org/1999/xlink")
B.aJ=new A.aD("xlink","show","http://www.w3.org/1999/xlink")
B.aR=new A.aD("xlink","title","http://www.w3.org/1999/xlink")
B.aQ=new A.aD("xlink","type","http://www.w3.org/1999/xlink")
B.aP=new A.aD("xml","base","http://www.w3.org/XML/1998/namespace")
B.aN=new A.aD("xml","lang","http://www.w3.org/XML/1998/namespace")
B.aG=new A.aD("xml","space","http://www.w3.org/XML/1998/namespace")
B.aO=new A.aD(null,"xmlns","http://www.w3.org/2000/xmlns/")
B.aH=new A.aD("xmlns","xlink","http://www.w3.org/2000/xmlns/")
B.c7=new A.r(12,{"xlink:actuate":B.aI,"xlink:arcrole":B.aL,"xlink:href":B.aM,"xlink:role":B.aK,"xlink:show":B.aJ,"xlink:title":B.aR,"xlink:type":B.aQ,"xml:base":B.aP,"xml:lang":B.aN,"xml:space":B.aG,xmlns:B.aO,"xmlns:xlink":B.aH},B.bg,A.aO("r<n,aD>"))
B.v=new A.r(0,{},B.o,A.aO("r<n,P>"))
B.bl=A.a(s([]),t.m)
B.al=new A.r(0,{},B.bl,A.aO("r<@,@>"))
B.bm=A.a(s(["attributename","attributetype","basefrequency","baseprofile","calcmode","clippathunits","contentscripttype","contentstyletype","diffuseconstant","edgemode","externalresourcesrequired","filterres","filterunits","glyphref","gradienttransform","gradientunits","kernelmatrix","kernelunitlength","keypoints","keysplines","keytimes","lengthadjust","limitingconeangle","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","numoctaves","pathlength","patterncontentunits","patterntransform","patternunits","pointsatx","pointsaty","pointsatz","preservealpha","preserveaspectratio","primitiveunits","refx","refy","repeatcount","repeatdur","requiredextensions","requiredfeatures","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","surfacescale","systemlanguage","tablevalues","targetx","targety","textlength","viewbox","viewtarget","xchannelselector","ychannelselector","zoomandpan"]),t.s)
B.c8=new A.r(62,{attributename:"attributeName",attributetype:"attributeType",basefrequency:"baseFrequency",baseprofile:"baseProfile",calcmode:"calcMode",clippathunits:"clipPathUnits",contentscripttype:"contentScriptType",contentstyletype:"contentStyleType",diffuseconstant:"diffuseConstant",edgemode:"edgeMode",externalresourcesrequired:"externalResourcesRequired",filterres:"filterRes",filterunits:"filterUnits",glyphref:"glyphRef",gradienttransform:"gradientTransform",gradientunits:"gradientUnits",kernelmatrix:"kernelMatrix",kernelunitlength:"kernelUnitLength",keypoints:"keyPoints",keysplines:"keySplines",keytimes:"keyTimes",lengthadjust:"lengthAdjust",limitingconeangle:"limitingConeAngle",markerheight:"markerHeight",markerunits:"markerUnits",markerwidth:"markerWidth",maskcontentunits:"maskContentUnits",maskunits:"maskUnits",numoctaves:"numOctaves",pathlength:"pathLength",patterncontentunits:"patternContentUnits",patterntransform:"patternTransform",patternunits:"patternUnits",pointsatx:"pointsAtX",pointsaty:"pointsAtY",pointsatz:"pointsAtZ",preservealpha:"preserveAlpha",preserveaspectratio:"preserveAspectRatio",primitiveunits:"primitiveUnits",refx:"refX",refy:"refY",repeatcount:"repeatCount",repeatdur:"repeatDur",requiredextensions:"requiredExtensions",requiredfeatures:"requiredFeatures",specularconstant:"specularConstant",specularexponent:"specularExponent",spreadmethod:"spreadMethod",startoffset:"startOffset",stddeviation:"stdDeviation",stitchtiles:"stitchTiles",surfacescale:"surfaceScale",systemlanguage:"systemLanguage",tablevalues:"tableValues",targetx:"targetX",targety:"targetY",textlength:"textLength",viewbox:"viewBox",viewtarget:"viewTarget",xchannelselector:"xChannelSelector",ychannelselector:"yChannelSelector",zoomandpan:"zoomAndPan"},B.bm,t.B)
B.bu=A.a(s(["li","dt","dd"]),t.s)
B.bt=A.a(s(["li"]),t.s)
B.af=A.a(s(["dt","dd"]),t.s)
B.cK=new A.r(3,{li:B.bt,dt:B.af,dd:B.af},B.bu,A.aO("r<n,l<n>>"))
B.bB=A.a(s(["437","850","852","855","857","860","861","862","863","865","866","869","ansix341968","ansix341986","arabic","ascii","asmo708","big5","big5hkscs","chinese","cp037","cp1026","cp154","cp367","cp424","cp437","cp500","cp775","cp819","cp850","cp852","cp855","cp857","cp860","cp861","cp862","cp863","cp864","cp865","cp866","cp869","cp936","cpgr","cpis","csascii","csbig5","cseuckr","cseucpkdfmtjapanese","csgb2312","cshproman8","csibm037","csibm1026","csibm424","csibm500","csibm855","csibm857","csibm860","csibm861","csibm863","csibm864","csibm865","csibm866","csibm869","csiso2022jp","csiso2022jp2","csiso2022kr","csiso58gb231280","csisolatin1","csisolatin2","csisolatin3","csisolatin4","csisolatin5","csisolatin6","csisolatinarabic","csisolatincyrillic","csisolatingreek","csisolatinhebrew","cskoi8r","csksc56011987","cspc775baltic","cspc850multilingual","cspc862latinhebrew","cspc8codepage437","cspcp852","csptcp154","csshiftjis","csunicode11utf7","cyrillic","cyrillicasian","ebcdiccpbe","ebcdiccpca","ebcdiccpch","ebcdiccphe","ebcdiccpnl","ebcdiccpus","ebcdiccpwt","ecma114","ecma118","elot928","eucjp","euckr","extendedunixcodepackedformatforjapanese","gb18030","gb2312","gb231280","gbk","greek","greek8","hebrew","hproman8","hzgb2312","ibm037","ibm1026","ibm367","ibm424","ibm437","ibm500","ibm775","ibm819","ibm850","ibm852","ibm855","ibm857","ibm860","ibm861","ibm862","ibm863","ibm864","ibm865","ibm866","ibm869","iso2022jp","iso2022jp2","iso2022kr","iso646irv1991","iso646us","iso88591","iso885910","iso8859101992","iso885911987","iso885913","iso885914","iso8859141998","iso885915","iso885916","iso8859162001","iso88592","iso885921987","iso88593","iso885931988","iso88594","iso885941988","iso88595","iso885951988","iso88596","iso885961987","iso88597","iso885971987","iso88598","iso885981988","iso88599","iso885991989","isoceltic","isoir100","isoir101","isoir109","isoir110","isoir126","isoir127","isoir138","isoir144","isoir148","isoir149","isoir157","isoir199","isoir226","isoir58","isoir6","koi8r","koi8u","korean","ksc5601","ksc56011987","ksc56011989","l1","l10","l2","l3","l4","l5","l6","l8","latin1","latin10","latin2","latin3","latin4","latin5","latin6","latin8","latin9","ms936","mskanji","pt154","ptcp154","r8","roman8","shiftjis","tis620","unicode11utf7","us","usascii","utf16","utf16be","utf16le","utf8","windows1250","windows1251","windows1252","windows1253","windows1254","windows1255","windows1256","windows1257","windows1258","windows936","x-x-big5"]),t.s)
B.cL=new A.r(227,{"437":"cp437","850":"cp850","852":"cp852","855":"cp855","857":"cp857","860":"cp860","861":"cp861","862":"cp862","863":"cp863","865":"cp865","866":"cp866","869":"cp869",ansix341968:"ascii",ansix341986:"ascii",arabic:"iso8859-6",ascii:"ascii",asmo708:"iso8859-6",big5:"big5",big5hkscs:"big5hkscs",chinese:"gbk",cp037:"cp037",cp1026:"cp1026",cp154:"ptcp154",cp367:"ascii",cp424:"cp424",cp437:"cp437",cp500:"cp500",cp775:"cp775",cp819:"windows-1252",cp850:"cp850",cp852:"cp852",cp855:"cp855",cp857:"cp857",cp860:"cp860",cp861:"cp861",cp862:"cp862",cp863:"cp863",cp864:"cp864",cp865:"cp865",cp866:"cp866",cp869:"cp869",cp936:"gbk",cpgr:"cp869",cpis:"cp861",csascii:"ascii",csbig5:"big5",cseuckr:"cp949",cseucpkdfmtjapanese:"euc_jp",csgb2312:"gbk",cshproman8:"hp-roman8",csibm037:"cp037",csibm1026:"cp1026",csibm424:"cp424",csibm500:"cp500",csibm855:"cp855",csibm857:"cp857",csibm860:"cp860",csibm861:"cp861",csibm863:"cp863",csibm864:"cp864",csibm865:"cp865",csibm866:"cp866",csibm869:"cp869",csiso2022jp:"iso2022_jp",csiso2022jp2:"iso2022_jp_2",csiso2022kr:"iso2022_kr",csiso58gb231280:"gbk",csisolatin1:"windows-1252",csisolatin2:"iso8859-2",csisolatin3:"iso8859-3",csisolatin4:"iso8859-4",csisolatin5:"windows-1254",csisolatin6:"iso8859-10",csisolatinarabic:"iso8859-6",csisolatincyrillic:"iso8859-5",csisolatingreek:"iso8859-7",csisolatinhebrew:"iso8859-8",cskoi8r:"koi8-r",csksc56011987:"cp949",cspc775baltic:"cp775",cspc850multilingual:"cp850",cspc862latinhebrew:"cp862",cspc8codepage437:"cp437",cspcp852:"cp852",csptcp154:"ptcp154",csshiftjis:"shift_jis",csunicode11utf7:"utf-7",cyrillic:"iso8859-5",cyrillicasian:"ptcp154",ebcdiccpbe:"cp500",ebcdiccpca:"cp037",ebcdiccpch:"cp500",ebcdiccphe:"cp424",ebcdiccpnl:"cp037",ebcdiccpus:"cp037",ebcdiccpwt:"cp037",ecma114:"iso8859-6",ecma118:"iso8859-7",elot928:"iso8859-7",eucjp:"euc_jp",euckr:"cp949",extendedunixcodepackedformatforjapanese:"euc_jp",gb18030:"gb18030",gb2312:"gbk",gb231280:"gbk",gbk:"gbk",greek:"iso8859-7",greek8:"iso8859-7",hebrew:"iso8859-8",hproman8:"hp-roman8",hzgb2312:"hz",ibm037:"cp037",ibm1026:"cp1026",ibm367:"ascii",ibm424:"cp424",ibm437:"cp437",ibm500:"cp500",ibm775:"cp775",ibm819:"windows-1252",ibm850:"cp850",ibm852:"cp852",ibm855:"cp855",ibm857:"cp857",ibm860:"cp860",ibm861:"cp861",ibm862:"cp862",ibm863:"cp863",ibm864:"cp864",ibm865:"cp865",ibm866:"cp866",ibm869:"cp869",iso2022jp:"iso2022_jp",iso2022jp2:"iso2022_jp_2",iso2022kr:"iso2022_kr",iso646irv1991:"ascii",iso646us:"ascii",iso88591:"windows-1252",iso885910:"iso8859-10",iso8859101992:"iso8859-10",iso885911987:"windows-1252",iso885913:"iso8859-13",iso885914:"iso8859-14",iso8859141998:"iso8859-14",iso885915:"iso8859-15",iso885916:"iso8859-16",iso8859162001:"iso8859-16",iso88592:"iso8859-2",iso885921987:"iso8859-2",iso88593:"iso8859-3",iso885931988:"iso8859-3",iso88594:"iso8859-4",iso885941988:"iso8859-4",iso88595:"iso8859-5",iso885951988:"iso8859-5",iso88596:"iso8859-6",iso885961987:"iso8859-6",iso88597:"iso8859-7",iso885971987:"iso8859-7",iso88598:"iso8859-8",iso885981988:"iso8859-8",iso88599:"windows-1254",iso885991989:"windows-1254",isoceltic:"iso8859-14",isoir100:"windows-1252",isoir101:"iso8859-2",isoir109:"iso8859-3",isoir110:"iso8859-4",isoir126:"iso8859-7",isoir127:"iso8859-6",isoir138:"iso8859-8",isoir144:"iso8859-5",isoir148:"windows-1254",isoir149:"cp949",isoir157:"iso8859-10",isoir199:"iso8859-14",isoir226:"iso8859-16",isoir58:"gbk",isoir6:"ascii",koi8r:"koi8-r",koi8u:"koi8-u",korean:"cp949",ksc5601:"cp949",ksc56011987:"cp949",ksc56011989:"cp949",l1:"windows-1252",l10:"iso8859-16",l2:"iso8859-2",l3:"iso8859-3",l4:"iso8859-4",l5:"windows-1254",l6:"iso8859-10",l8:"iso8859-14",latin1:"windows-1252",latin10:"iso8859-16",latin2:"iso8859-2",latin3:"iso8859-3",latin4:"iso8859-4",latin5:"windows-1254",latin6:"iso8859-10",latin8:"iso8859-14",latin9:"iso8859-15",ms936:"gbk",mskanji:"shift_jis",pt154:"ptcp154",ptcp154:"ptcp154",r8:"hp-roman8",roman8:"hp-roman8",shiftjis:"shift_jis",tis620:"cp874",unicode11utf7:"utf-7",us:"ascii",usascii:"ascii",utf16:"utf-16",utf16be:"utf-16-be",utf16le:"utf-16-le",utf8:"utf-8",windows1250:"cp1250",windows1251:"cp1251",windows1252:"cp1252",windows1253:"cp1253",windows1254:"cp1254",windows1255:"cp1255",windows1256:"cp1256",windows1257:"cp1257",windows1258:"cp1258",windows936:"gbk","x-x-big5":"big5"},B.bB,t.B)
B.bC=A.a(s(["after","before","first-letter","first-line"]),t.s)
B.cM=new A.r(4,{after:null,before:null,"first-letter":null,"first-line":null},B.bC,A.aO("r<n,ak>"))
B.e1=new A.f8(B.cM,A.aO("f8<n>"))
B.a1=new A.hR("Start")
B.a2=new A.hR("End")
B.e2=A.u1("H")
B.e3=new A.i0(!1)
B.ah=A.a(s([]),t.O)
B.b1=new A.P(0.16078,0.67059,0.79216,1)
B.bh=A.a(s([B.b1]),t.O)
B.e4=new A.ci(B.ah,B.bh,1,B.ah,0)
B.d=new A.f(0,0,0)
B.n=new A.f(0,0,1)
B.p=new A.f(0,1,0)
B.j=new A.f(1,0,0)
B.aC=new A.f(1,1,0)
B.aD=new A.f(1,1,1)
B.D=new A.f(-1,1,0)
B.aE=new A.f(-1,-1,0)
B.e6=new A.dx(null,2)})();(function staticFields(){$.lm=null
$.nJ=null
$.np=null
$.no=null
$.oZ=null
$.oO=null
$.pc=null
$.lS=null
$.m1=null
$.n1=null
$.dC=null
$.fg=null
$.fh=null
$.mU=!1
$.aa=B.l
$.bf=A.a([],A.aO("z<H>"))
$.ff=A.r7("messages")
$.mz=A.aW(t.N,A.aO("bT"))
$.bK=A.aW(t.N,A.aO("b3<n,n>"))
$.iD=A.aW(t.S,A.aO("b3<i,i>"))
$.oz=null
$.lG=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"u7","pl",()=>A.tz("_$dart_dartClosure"))
s($,"uP","nf",()=>B.l.jR(new A.m7(),A.aO("bh<ak>")))
s($,"un","pn",()=>A.bY(A.kF({
toString:function(){return"$receiver$"}})))
s($,"uo","po",()=>A.bY(A.kF({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"up","pp",()=>A.bY(A.kF(null)))
s($,"uq","pq",()=>A.bY(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"ut","pt",()=>A.bY(A.kF(void 0)))
s($,"uu","pu",()=>A.bY(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"us","ps",()=>A.bY(A.o_(null)))
s($,"ur","pr",()=>A.bY(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"uw","pw",()=>A.bY(A.o_(void 0)))
s($,"uv","pv",()=>A.bY(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"uz","nc",()=>A.r3())
s($,"ux","px",()=>new A.kL().$0())
s($,"uy","py",()=>new A.kK().$0())
s($,"uA","pz",()=>A.qo(A.mS(A.a([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"uB","nd",()=>typeof process!="undefined"&&Object.prototype.toString.call(process)=="[object process]"&&process.platform=="win32")
s($,"uK","me",()=>A.n6(B.e2))
s($,"uL","pA",()=>A.rL())
r($,"uO","pB",()=>new A.lU().$0())
r($,"u9","dG",()=>{var q=new A.jh()
q.lP()
return q})
s($,"uM","ne",()=>new A.j9(A.aO("cC").a($.nb())))
s($,"uj","pm",()=>new A.hw(A.ap("/"),A.ap("[^/]$"),A.ap("^/")))
s($,"ul","iJ",()=>new A.i4(A.ap("[/\\\\]"),A.ap("[^/\\\\]$"),A.ap("^(\\\\\\\\[^\\\\]+\\\\[^\\\\/]+|[a-zA-Z]:[/\\\\])"),A.ap("^[/\\\\](?![/\\\\])")))
s($,"uk","fn",()=>new A.hZ(A.ap("/"),A.ap("(^[a-zA-Z][-+.a-zA-Z\\d]*://|[^/])$"),A.ap("[a-zA-Z][-+.a-zA-Z\\d]*://[^/]*"),A.ap("^/")))
s($,"ui","nb",()=>A.qQ())})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({CanvasGradient:J.b8,DOMError:J.b8,MediaError:J.b8,Navigator:J.b8,NavigatorConcurrentHardware:J.b8,NavigatorUserMediaError:J.b8,OverconstrainedError:J.b8,PositionError:J.b8,GeolocationPositionError:J.b8,ArrayBufferView:A.hi,Int8Array:A.hh,Uint32Array:A.eq,Uint8Array:A.cK,HTMLAudioElement:A.x,HTMLBRElement:A.x,HTMLBaseElement:A.x,HTMLBodyElement:A.x,HTMLButtonElement:A.x,HTMLContentElement:A.x,HTMLDListElement:A.x,HTMLDataElement:A.x,HTMLDataListElement:A.x,HTMLDetailsElement:A.x,HTMLDialogElement:A.x,HTMLDivElement:A.x,HTMLEmbedElement:A.x,HTMLFieldSetElement:A.x,HTMLHRElement:A.x,HTMLHeadElement:A.x,HTMLHeadingElement:A.x,HTMLHtmlElement:A.x,HTMLIFrameElement:A.x,HTMLImageElement:A.x,HTMLInputElement:A.x,HTMLLIElement:A.x,HTMLLabelElement:A.x,HTMLLegendElement:A.x,HTMLLinkElement:A.x,HTMLMapElement:A.x,HTMLMediaElement:A.x,HTMLMenuElement:A.x,HTMLMetaElement:A.x,HTMLMeterElement:A.x,HTMLModElement:A.x,HTMLOListElement:A.x,HTMLObjectElement:A.x,HTMLOptGroupElement:A.x,HTMLOptionElement:A.x,HTMLOutputElement:A.x,HTMLParagraphElement:A.x,HTMLParamElement:A.x,HTMLPictureElement:A.x,HTMLPreElement:A.x,HTMLProgressElement:A.x,HTMLQuoteElement:A.x,HTMLScriptElement:A.x,HTMLShadowElement:A.x,HTMLSlotElement:A.x,HTMLSourceElement:A.x,HTMLSpanElement:A.x,HTMLStyleElement:A.x,HTMLTableCaptionElement:A.x,HTMLTableCellElement:A.x,HTMLTableDataCellElement:A.x,HTMLTableHeaderCellElement:A.x,HTMLTableColElement:A.x,HTMLTableElement:A.x,HTMLTableRowElement:A.x,HTMLTableSectionElement:A.x,HTMLTemplateElement:A.x,HTMLTextAreaElement:A.x,HTMLTimeElement:A.x,HTMLTitleElement:A.x,HTMLTrackElement:A.x,HTMLUListElement:A.x,HTMLUnknownElement:A.x,HTMLVideoElement:A.x,HTMLDirectoryElement:A.x,HTMLFontElement:A.x,HTMLFrameElement:A.x,HTMLFrameSetElement:A.x,HTMLMarqueeElement:A.x,HTMLElement:A.x,HTMLAnchorElement:A.fw,HTMLAreaElement:A.fz,HTMLCanvasElement:A.cw,CanvasRenderingContext2D:A.dT,CDATASection:A.bE,CharacterData:A.bE,Comment:A.bE,ProcessingInstruction:A.bE,Text:A.bE,DOMException:A.jc,DOMRectReadOnly:A.dX,MathMLElement:A.p,SVGAElement:A.p,SVGAnimateElement:A.p,SVGAnimateMotionElement:A.p,SVGAnimateTransformElement:A.p,SVGAnimationElement:A.p,SVGCircleElement:A.p,SVGClipPathElement:A.p,SVGDefsElement:A.p,SVGDescElement:A.p,SVGDiscardElement:A.p,SVGEllipseElement:A.p,SVGFEBlendElement:A.p,SVGFEColorMatrixElement:A.p,SVGFEComponentTransferElement:A.p,SVGFECompositeElement:A.p,SVGFEConvolveMatrixElement:A.p,SVGFEDiffuseLightingElement:A.p,SVGFEDisplacementMapElement:A.p,SVGFEDistantLightElement:A.p,SVGFEFloodElement:A.p,SVGFEFuncAElement:A.p,SVGFEFuncBElement:A.p,SVGFEFuncGElement:A.p,SVGFEFuncRElement:A.p,SVGFEGaussianBlurElement:A.p,SVGFEImageElement:A.p,SVGFEMergeElement:A.p,SVGFEMergeNodeElement:A.p,SVGFEMorphologyElement:A.p,SVGFEOffsetElement:A.p,SVGFEPointLightElement:A.p,SVGFESpecularLightingElement:A.p,SVGFESpotLightElement:A.p,SVGFETileElement:A.p,SVGFETurbulenceElement:A.p,SVGFilterElement:A.p,SVGForeignObjectElement:A.p,SVGGElement:A.p,SVGGeometryElement:A.p,SVGGraphicsElement:A.p,SVGImageElement:A.p,SVGLineElement:A.p,SVGLinearGradientElement:A.p,SVGMarkerElement:A.p,SVGMaskElement:A.p,SVGMetadataElement:A.p,SVGPathElement:A.p,SVGPatternElement:A.p,SVGPolygonElement:A.p,SVGPolylineElement:A.p,SVGRadialGradientElement:A.p,SVGRectElement:A.p,SVGScriptElement:A.p,SVGSetElement:A.p,SVGStopElement:A.p,SVGStyleElement:A.p,SVGElement:A.p,SVGSVGElement:A.p,SVGSwitchElement:A.p,SVGSymbolElement:A.p,SVGTSpanElement:A.p,SVGTextContentElement:A.p,SVGTextElement:A.p,SVGTextPathElement:A.p,SVGTextPositioningElement:A.p,SVGTitleElement:A.p,SVGUseElement:A.p,SVGViewElement:A.p,SVGGradientElement:A.p,SVGComponentTransferFunctionElement:A.p,SVGFEDropShadowElement:A.p,SVGMPathElement:A.p,Element:A.p,AbortPaymentEvent:A.q,AnimationEvent:A.q,AnimationPlaybackEvent:A.q,ApplicationCacheErrorEvent:A.q,BackgroundFetchClickEvent:A.q,BackgroundFetchEvent:A.q,BackgroundFetchFailEvent:A.q,BackgroundFetchedEvent:A.q,BeforeInstallPromptEvent:A.q,BeforeUnloadEvent:A.q,BlobEvent:A.q,CanMakePaymentEvent:A.q,ClipboardEvent:A.q,CloseEvent:A.q,CustomEvent:A.q,DeviceMotionEvent:A.q,DeviceOrientationEvent:A.q,ErrorEvent:A.q,ExtendableEvent:A.q,ExtendableMessageEvent:A.q,FetchEvent:A.q,FontFaceSetLoadEvent:A.q,ForeignFetchEvent:A.q,GamepadEvent:A.q,HashChangeEvent:A.q,InstallEvent:A.q,MediaEncryptedEvent:A.q,MediaKeyMessageEvent:A.q,MediaQueryListEvent:A.q,MediaStreamEvent:A.q,MediaStreamTrackEvent:A.q,MessageEvent:A.q,MIDIConnectionEvent:A.q,MIDIMessageEvent:A.q,MutationEvent:A.q,NotificationEvent:A.q,PageTransitionEvent:A.q,PaymentRequestEvent:A.q,PaymentRequestUpdateEvent:A.q,PopStateEvent:A.q,PresentationConnectionAvailableEvent:A.q,PresentationConnectionCloseEvent:A.q,ProgressEvent:A.q,PromiseRejectionEvent:A.q,PushEvent:A.q,RTCDataChannelEvent:A.q,RTCDTMFToneChangeEvent:A.q,RTCPeerConnectionIceEvent:A.q,RTCTrackEvent:A.q,SecurityPolicyViolationEvent:A.q,SensorErrorEvent:A.q,SpeechRecognitionError:A.q,SpeechRecognitionEvent:A.q,SpeechSynthesisEvent:A.q,StorageEvent:A.q,SyncEvent:A.q,TrackEvent:A.q,TransitionEvent:A.q,WebKitTransitionEvent:A.q,VRDeviceEvent:A.q,VRDisplayEvent:A.q,VRSessionEvent:A.q,MojoInterfaceRequestEvent:A.q,ResourceProgressEvent:A.q,USBConnectionEvent:A.q,IDBVersionChangeEvent:A.q,AudioProcessingEvent:A.q,OfflineAudioCompletionEvent:A.q,WebGLContextEvent:A.q,Event:A.q,InputEvent:A.q,SubmitEvent:A.q,EventTarget:A.aU,HTMLFormElement:A.fZ,MouseEvent:A.b9,DragEvent:A.b9,PointerEvent:A.b9,WheelEvent:A.b9,Document:A.b4,DocumentFragment:A.b4,HTMLDocument:A.b4,ShadowRoot:A.b4,XMLDocument:A.b4,Attr:A.b4,DocumentType:A.b4,Node:A.b4,Path2D:A.hs,HTMLSelectElement:A.hE,CompositionEvent:A.bz,FocusEvent:A.bz,KeyboardEvent:A.bz,TextEvent:A.bz,TouchEvent:A.bz,UIEvent:A.bz,Window:A.du,DOMWindow:A.du,ClientRect:A.eR,DOMRect:A.eR})
hunkHelpers.setOrUpdateLeafTags({CanvasGradient:true,DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,GeolocationPositionError:true,ArrayBufferView:false,Int8Array:true,Uint32Array:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,DOMException:true,DOMRectReadOnly:false,MathMLElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,EventTarget:false,HTMLFormElement:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,Path2D:true,HTMLSelectElement:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,Window:true,DOMWindow:true,ClientRect:true,DOMRect:true})
A.dh.$nativeSuperclassTag="ArrayBufferView"
A.eZ.$nativeSuperclassTag="ArrayBufferView"
A.f_.$nativeSuperclassTag="ArrayBufferView"
A.ep.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=A.tL
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=playground.dart.js.map
