function ZC(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Sm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function zw(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Zs={},e_={get exports(){return Zs},set exports(e){Zs=e}},Uc={},w={},t_={get exports(){return w},set exports(e){w=e}},fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ua=Symbol.for("react.element"),n_=Symbol.for("react.portal"),r_=Symbol.for("react.fragment"),i_=Symbol.for("react.strict_mode"),o_=Symbol.for("react.profiler"),s_=Symbol.for("react.provider"),a_=Symbol.for("react.context"),l_=Symbol.for("react.forward_ref"),u_=Symbol.for("react.suspense"),c_=Symbol.for("react.memo"),d_=Symbol.for("react.lazy"),a0=Symbol.iterator;function h_(e){return e===null||typeof e!="object"?null:(e=a0&&e[a0]||e["@@iterator"],typeof e=="function"?e:null)}var Vw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Bw=Object.assign,Hw={};function ts(e,t,n){this.props=e,this.context=t,this.refs=Hw,this.updater=n||Vw}ts.prototype.isReactComponent={};ts.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ts.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ww(){}Ww.prototype=ts.prototype;function bm(e,t,n){this.props=e,this.context=t,this.refs=Hw,this.updater=n||Vw}var Tm=bm.prototype=new Ww;Tm.constructor=bm;Bw(Tm,ts.prototype);Tm.isPureReactComponent=!0;var l0=Array.isArray,qw=Object.prototype.hasOwnProperty,xm={current:null},Gw={key:!0,ref:!0,__self:!0,__source:!0};function Kw(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)qw.call(t,r)&&!Gw.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ua,type:e,key:o,ref:s,props:i,_owner:xm.current}}function f_(e,t){return{$$typeof:Ua,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Cm(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ua}function p_(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var u0=/\/+/g;function lh(e,t){return typeof e=="object"&&e!==null&&e.key!=null?p_(""+e.key):t.toString(36)}function nu(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Ua:case n_:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+lh(s,0):r,l0(i)?(n="",e!=null&&(n=e.replace(u0,"$&/")+"/"),nu(i,t,n,"",function(u){return u})):i!=null&&(Cm(i)&&(i=f_(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(u0,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",l0(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+lh(o,a);s+=nu(o,t,n,l,i)}else if(l=h_(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+lh(o,a++),s+=nu(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function xl(e,t,n){if(e==null)return e;var r=[],i=0;return nu(e,r,"","",function(o){return t.call(n,o,i++)}),r}function m_(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Pt={current:null},ru={transition:null},g_={ReactCurrentDispatcher:Pt,ReactCurrentBatchConfig:ru,ReactCurrentOwner:xm};fe.Children={map:xl,forEach:function(e,t,n){xl(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return xl(e,function(){t++}),t},toArray:function(e){return xl(e,function(t){return t})||[]},only:function(e){if(!Cm(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};fe.Component=ts;fe.Fragment=r_;fe.Profiler=o_;fe.PureComponent=bm;fe.StrictMode=i_;fe.Suspense=u_;fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=g_;fe.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Bw({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=xm.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)qw.call(t,l)&&!Gw.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ua,type:e.type,key:i,ref:o,props:r,_owner:s}};fe.createContext=function(e){return e={$$typeof:a_,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:s_,_context:e},e.Consumer=e};fe.createElement=Kw;fe.createFactory=function(e){var t=Kw.bind(null,e);return t.type=e,t};fe.createRef=function(){return{current:null}};fe.forwardRef=function(e){return{$$typeof:l_,render:e}};fe.isValidElement=Cm;fe.lazy=function(e){return{$$typeof:d_,_payload:{_status:-1,_result:e},_init:m_}};fe.memo=function(e,t){return{$$typeof:c_,type:e,compare:t===void 0?null:t}};fe.startTransition=function(e){var t=ru.transition;ru.transition={};try{e()}finally{ru.transition=t}};fe.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};fe.useCallback=function(e,t){return Pt.current.useCallback(e,t)};fe.useContext=function(e){return Pt.current.useContext(e)};fe.useDebugValue=function(){};fe.useDeferredValue=function(e){return Pt.current.useDeferredValue(e)};fe.useEffect=function(e,t){return Pt.current.useEffect(e,t)};fe.useId=function(){return Pt.current.useId()};fe.useImperativeHandle=function(e,t,n){return Pt.current.useImperativeHandle(e,t,n)};fe.useInsertionEffect=function(e,t){return Pt.current.useInsertionEffect(e,t)};fe.useLayoutEffect=function(e,t){return Pt.current.useLayoutEffect(e,t)};fe.useMemo=function(e,t){return Pt.current.useMemo(e,t)};fe.useReducer=function(e,t,n){return Pt.current.useReducer(e,t,n)};fe.useRef=function(e){return Pt.current.useRef(e)};fe.useState=function(e){return Pt.current.useState(e)};fe.useSyncExternalStore=function(e,t,n){return Pt.current.useSyncExternalStore(e,t,n)};fe.useTransition=function(){return Pt.current.useTransition()};fe.version="18.2.0";(function(e){e.exports=fe})(t_);const ve=zw(w),Iu=ZC({__proto__:null,default:ve},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v_=w,y_=Symbol.for("react.element"),w_=Symbol.for("react.fragment"),E_=Object.prototype.hasOwnProperty,S_=v_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,b_={key:!0,ref:!0,__self:!0,__source:!0};function Qw(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)E_.call(t,r)&&!b_.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:y_,type:e,key:o,ref:s,props:i,_owner:S_.current}}Uc.Fragment=w_;Uc.jsx=Qw;Uc.jsxs=Qw;(function(e){e.exports=Uc})(e_);const sr=Zs.Fragment,m=Zs.jsx,C=Zs.jsxs;var bf={},xi={},T_={get exports(){return xi},set exports(e){xi=e}},Yt={},Tf={},x_={get exports(){return Tf},set exports(e){Tf=e}},Yw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,L){var B=_.length;_.push(L);e:for(;0<B;){var ee=B-1>>>1,R=_[ee];if(0<i(R,L))_[ee]=L,_[B]=R,B=ee;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var L=_[0],B=_.pop();if(B!==L){_[0]=B;e:for(var ee=0,R=_.length,F=R>>>1;ee<F;){var V=2*(ee+1)-1,Y=_[V],x=V+1,le=_[x];if(0>i(Y,B))x<R&&0>i(le,Y)?(_[ee]=le,_[x]=B,ee=x):(_[ee]=Y,_[V]=B,ee=V);else if(x<R&&0>i(le,B))_[ee]=le,_[x]=B,ee=x;else break e}}return L}function i(_,L){var B=_.sortIndex-L.sortIndex;return B!==0?B:_.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,d=null,h=3,f=!1,v=!1,p=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E(_){for(var L=n(u);L!==null;){if(L.callback===null)r(u);else if(L.startTime<=_)r(u),L.sortIndex=L.expirationTime,t(l,L);else break;L=n(u)}}function b(_){if(p=!1,E(_),!v)if(n(l)!==null)v=!0,J(T);else{var L=n(u);L!==null&&j(b,L.startTime-_)}}function T(_,L){v=!1,p&&(p=!1,y($),$=-1),f=!0;var B=h;try{for(E(L),d=n(l);d!==null&&(!(d.expirationTime>L)||_&&!me());){var ee=d.callback;if(typeof ee=="function"){d.callback=null,h=d.priorityLevel;var R=ee(d.expirationTime<=L);L=e.unstable_now(),typeof R=="function"?d.callback=R:d===n(l)&&r(l),E(L)}else r(l);d=n(l)}if(d!==null)var F=!0;else{var V=n(u);V!==null&&j(b,V.startTime-L),F=!1}return F}finally{d=null,h=B,f=!1}}var A=!1,I=null,$=-1,H=5,P=-1;function me(){return!(e.unstable_now()-P<H)}function Oe(){if(I!==null){var _=e.unstable_now();P=_;var L=!0;try{L=I(!0,_)}finally{L?G():(A=!1,I=null)}}else A=!1}var G;if(typeof g=="function")G=function(){g(Oe)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,O=z.port2;z.port1.onmessage=Oe,G=function(){O.postMessage(null)}}else G=function(){S(Oe,0)};function J(_){I=_,A||(A=!0,G())}function j(_,L){$=S(function(){_(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){v||f||(v=!0,J(T))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(_){switch(h){case 1:case 2:case 3:var L=3;break;default:L=h}var B=h;h=L;try{return _()}finally{h=B}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,L){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var B=h;h=_;try{return L()}finally{h=B}},e.unstable_scheduleCallback=function(_,L,B){var ee=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?ee+B:ee):B=ee,_){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=B+R,_={id:c++,callback:L,priorityLevel:_,startTime:B,expirationTime:R,sortIndex:-1},B>ee?(_.sortIndex=B,t(u,_),n(l)===null&&_===n(u)&&(p?(y($),$=-1):p=!0,j(b,B-ee))):(_.sortIndex=R,t(l,_),v||f||(v=!0,J(T))),_},e.unstable_shouldYield=me,e.unstable_wrapCallback=function(_){var L=h;return function(){var B=h;h=L;try{return _.apply(this,arguments)}finally{h=B}}}})(Yw);(function(e){e.exports=Yw})(x_);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xw=w,Gt=Tf;function D(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Jw=new Set,ea={};function ji(e,t){Po(e,t),Po(e+"Capture",t)}function Po(e,t){for(ea[e]=t,e=0;e<t.length;e++)Jw.add(t[e])}var Yn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xf=Object.prototype.hasOwnProperty,C_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,c0={},d0={};function __(e){return xf.call(d0,e)?!0:xf.call(c0,e)?!1:C_.test(e)?d0[e]=!0:(c0[e]=!0,!1)}function k_(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function I_(e,t,n,r){if(t===null||typeof t>"u"||k_(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Dt(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var mt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){mt[e]=new Dt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];mt[t]=new Dt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){mt[e]=new Dt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){mt[e]=new Dt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){mt[e]=new Dt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){mt[e]=new Dt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){mt[e]=new Dt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){mt[e]=new Dt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){mt[e]=new Dt(e,5,!1,e.toLowerCase(),null,!1,!1)});var _m=/[\-:]([a-z])/g;function km(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(_m,km);mt[t]=new Dt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(_m,km);mt[t]=new Dt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(_m,km);mt[t]=new Dt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){mt[e]=new Dt(e,1,!1,e.toLowerCase(),null,!1,!1)});mt.xlinkHref=new Dt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){mt[e]=new Dt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Im(e,t,n,r){var i=mt.hasOwnProperty(t)?mt[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(I_(t,n,i,r)&&(n=null),r||i===null?__(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ar=Xw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Cl=Symbol.for("react.element"),ro=Symbol.for("react.portal"),io=Symbol.for("react.fragment"),$m=Symbol.for("react.strict_mode"),Cf=Symbol.for("react.profiler"),Zw=Symbol.for("react.provider"),eE=Symbol.for("react.context"),Am=Symbol.for("react.forward_ref"),_f=Symbol.for("react.suspense"),kf=Symbol.for("react.suspense_list"),Rm=Symbol.for("react.memo"),mr=Symbol.for("react.lazy"),tE=Symbol.for("react.offscreen"),h0=Symbol.iterator;function gs(e){return e===null||typeof e!="object"?null:(e=h0&&e[h0]||e["@@iterator"],typeof e=="function"?e:null)}var Ue=Object.assign,uh;function ks(e){if(uh===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);uh=t&&t[1]||""}return`
`+uh+e}var ch=!1;function dh(e,t){if(!e||ch)return"";ch=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{ch=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ks(e):""}function $_(e){switch(e.tag){case 5:return ks(e.type);case 16:return ks("Lazy");case 13:return ks("Suspense");case 19:return ks("SuspenseList");case 0:case 2:case 15:return e=dh(e.type,!1),e;case 11:return e=dh(e.type.render,!1),e;case 1:return e=dh(e.type,!0),e;default:return""}}function If(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case io:return"Fragment";case ro:return"Portal";case Cf:return"Profiler";case $m:return"StrictMode";case _f:return"Suspense";case kf:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case eE:return(e.displayName||"Context")+".Consumer";case Zw:return(e._context.displayName||"Context")+".Provider";case Am:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Rm:return t=e.displayName||null,t!==null?t:If(e.type)||"Memo";case mr:t=e._payload,e=e._init;try{return If(e(t))}catch{}}return null}function A_(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return If(t);case 8:return t===$m?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Wr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function nE(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function R_(e){var t=nE(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function _l(e){e._valueTracker||(e._valueTracker=R_(e))}function rE(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=nE(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function $u(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function $f(e,t){var n=t.checked;return Ue({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function f0(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Wr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function iE(e,t){t=t.checked,t!=null&&Im(e,"checked",t,!1)}function Af(e,t){iE(e,t);var n=Wr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Rf(e,t.type,n):t.hasOwnProperty("defaultValue")&&Rf(e,t.type,Wr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function p0(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Rf(e,t,n){(t!=="number"||$u(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Is=Array.isArray;function wo(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Wr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Nf(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(D(91));return Ue({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function m0(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(D(92));if(Is(n)){if(1<n.length)throw Error(D(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Wr(n)}}function oE(e,t){var n=Wr(t.value),r=Wr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function g0(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function sE(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Of(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?sE(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var kl,aE=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(kl=kl||document.createElement("div"),kl.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=kl.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ta(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Fs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},N_=["Webkit","ms","Moz","O"];Object.keys(Fs).forEach(function(e){N_.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Fs[t]=Fs[e]})});function lE(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Fs.hasOwnProperty(e)&&Fs[e]?(""+t).trim():t+"px"}function uE(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=lE(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var O_=Ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pf(e,t){if(t){if(O_[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(D(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(D(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(D(61))}if(t.style!=null&&typeof t.style!="object")throw Error(D(62))}}function Df(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mf=null;function Nm(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Lf=null,Eo=null,So=null;function v0(e){if(e=Va(e)){if(typeof Lf!="function")throw Error(D(280));var t=e.stateNode;t&&(t=Hc(t),Lf(e.stateNode,e.type,t))}}function cE(e){Eo?So?So.push(e):So=[e]:Eo=e}function dE(){if(Eo){var e=Eo,t=So;if(So=Eo=null,v0(e),t)for(e=0;e<t.length;e++)v0(t[e])}}function hE(e,t){return e(t)}function fE(){}var hh=!1;function pE(e,t,n){if(hh)return e(t,n);hh=!0;try{return hE(e,t,n)}finally{hh=!1,(Eo!==null||So!==null)&&(fE(),dE())}}function na(e,t){var n=e.stateNode;if(n===null)return null;var r=Hc(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(D(231,t,typeof n));return n}var Ff=!1;if(Yn)try{var vs={};Object.defineProperty(vs,"passive",{get:function(){Ff=!0}}),window.addEventListener("test",vs,vs),window.removeEventListener("test",vs,vs)}catch{Ff=!1}function P_(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Us=!1,Au=null,Ru=!1,Uf=null,D_={onError:function(e){Us=!0,Au=e}};function M_(e,t,n,r,i,o,s,a,l){Us=!1,Au=null,P_.apply(D_,arguments)}function L_(e,t,n,r,i,o,s,a,l){if(M_.apply(this,arguments),Us){if(Us){var u=Au;Us=!1,Au=null}else throw Error(D(198));Ru||(Ru=!0,Uf=u)}}function zi(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function mE(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y0(e){if(zi(e)!==e)throw Error(D(188))}function F_(e){var t=e.alternate;if(!t){if(t=zi(e),t===null)throw Error(D(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return y0(i),e;if(o===r)return y0(i),t;o=o.sibling}throw Error(D(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(D(189))}}if(n.alternate!==r)throw Error(D(190))}if(n.tag!==3)throw Error(D(188));return n.stateNode.current===n?e:t}function gE(e){return e=F_(e),e!==null?vE(e):null}function vE(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=vE(e);if(t!==null)return t;e=e.sibling}return null}var yE=Gt.unstable_scheduleCallback,w0=Gt.unstable_cancelCallback,U_=Gt.unstable_shouldYield,j_=Gt.unstable_requestPaint,He=Gt.unstable_now,z_=Gt.unstable_getCurrentPriorityLevel,Om=Gt.unstable_ImmediatePriority,wE=Gt.unstable_UserBlockingPriority,Nu=Gt.unstable_NormalPriority,V_=Gt.unstable_LowPriority,EE=Gt.unstable_IdlePriority,jc=null,Rn=null;function B_(e){if(Rn&&typeof Rn.onCommitFiberRoot=="function")try{Rn.onCommitFiberRoot(jc,e,void 0,(e.current.flags&128)===128)}catch{}}var wn=Math.clz32?Math.clz32:q_,H_=Math.log,W_=Math.LN2;function q_(e){return e>>>=0,e===0?32:31-(H_(e)/W_|0)|0}var Il=64,$l=4194304;function $s(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ou(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=$s(a):(o&=s,o!==0&&(r=$s(o)))}else s=n&~i,s!==0?r=$s(s):o!==0&&(r=$s(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-wn(t),i=1<<n,r|=e[n],t&=~i;return r}function G_(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function K_(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-wn(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=G_(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function jf(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function SE(){var e=Il;return Il<<=1,!(Il&4194240)&&(Il=64),e}function fh(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ja(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-wn(t),e[t]=n}function Q_(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-wn(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Pm(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-wn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var xe=0;function bE(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var TE,Dm,xE,CE,_E,zf=!1,Al=[],_r=null,kr=null,Ir=null,ra=new Map,ia=new Map,vr=[],Y_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function E0(e,t){switch(e){case"focusin":case"focusout":_r=null;break;case"dragenter":case"dragleave":kr=null;break;case"mouseover":case"mouseout":Ir=null;break;case"pointerover":case"pointerout":ra.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ia.delete(t.pointerId)}}function ys(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Va(t),t!==null&&Dm(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function X_(e,t,n,r,i){switch(t){case"focusin":return _r=ys(_r,e,t,n,r,i),!0;case"dragenter":return kr=ys(kr,e,t,n,r,i),!0;case"mouseover":return Ir=ys(Ir,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return ra.set(o,ys(ra.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ia.set(o,ys(ia.get(o)||null,e,t,n,r,i)),!0}return!1}function kE(e){var t=hi(e.target);if(t!==null){var n=zi(t);if(n!==null){if(t=n.tag,t===13){if(t=mE(n),t!==null){e.blockedOn=t,_E(e.priority,function(){xE(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function iu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Vf(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Mf=r,n.target.dispatchEvent(r),Mf=null}else return t=Va(n),t!==null&&Dm(t),e.blockedOn=n,!1;t.shift()}return!0}function S0(e,t,n){iu(e)&&n.delete(t)}function J_(){zf=!1,_r!==null&&iu(_r)&&(_r=null),kr!==null&&iu(kr)&&(kr=null),Ir!==null&&iu(Ir)&&(Ir=null),ra.forEach(S0),ia.forEach(S0)}function ws(e,t){e.blockedOn===t&&(e.blockedOn=null,zf||(zf=!0,Gt.unstable_scheduleCallback(Gt.unstable_NormalPriority,J_)))}function oa(e){function t(i){return ws(i,e)}if(0<Al.length){ws(Al[0],e);for(var n=1;n<Al.length;n++){var r=Al[n];r.blockedOn===e&&(r.blockedOn=null)}}for(_r!==null&&ws(_r,e),kr!==null&&ws(kr,e),Ir!==null&&ws(Ir,e),ra.forEach(t),ia.forEach(t),n=0;n<vr.length;n++)r=vr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<vr.length&&(n=vr[0],n.blockedOn===null);)kE(n),n.blockedOn===null&&vr.shift()}var bo=ar.ReactCurrentBatchConfig,Pu=!0;function Z_(e,t,n,r){var i=xe,o=bo.transition;bo.transition=null;try{xe=1,Mm(e,t,n,r)}finally{xe=i,bo.transition=o}}function ek(e,t,n,r){var i=xe,o=bo.transition;bo.transition=null;try{xe=4,Mm(e,t,n,r)}finally{xe=i,bo.transition=o}}function Mm(e,t,n,r){if(Pu){var i=Vf(e,t,n,r);if(i===null)Th(e,t,r,Du,n),E0(e,r);else if(X_(i,e,t,n,r))r.stopPropagation();else if(E0(e,r),t&4&&-1<Y_.indexOf(e)){for(;i!==null;){var o=Va(i);if(o!==null&&TE(o),o=Vf(e,t,n,r),o===null&&Th(e,t,r,Du,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Th(e,t,r,null,n)}}var Du=null;function Vf(e,t,n,r){if(Du=null,e=Nm(r),e=hi(e),e!==null)if(t=zi(e),t===null)e=null;else if(n=t.tag,n===13){if(e=mE(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Du=e,null}function IE(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(z_()){case Om:return 1;case wE:return 4;case Nu:case V_:return 16;case EE:return 536870912;default:return 16}default:return 16}}var Tr=null,Lm=null,ou=null;function $E(){if(ou)return ou;var e,t=Lm,n=t.length,r,i="value"in Tr?Tr.value:Tr.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return ou=i.slice(e,1<r?1-r:void 0)}function su(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Rl(){return!0}function b0(){return!1}function Xt(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Rl:b0,this.isPropagationStopped=b0,this}return Ue(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Rl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Rl)},persist:function(){},isPersistent:Rl}),t}var ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fm=Xt(ns),za=Ue({},ns,{view:0,detail:0}),tk=Xt(za),ph,mh,Es,zc=Ue({},za,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Um,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Es&&(Es&&e.type==="mousemove"?(ph=e.screenX-Es.screenX,mh=e.screenY-Es.screenY):mh=ph=0,Es=e),ph)},movementY:function(e){return"movementY"in e?e.movementY:mh}}),T0=Xt(zc),nk=Ue({},zc,{dataTransfer:0}),rk=Xt(nk),ik=Ue({},za,{relatedTarget:0}),gh=Xt(ik),ok=Ue({},ns,{animationName:0,elapsedTime:0,pseudoElement:0}),sk=Xt(ok),ak=Ue({},ns,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),lk=Xt(ak),uk=Ue({},ns,{data:0}),x0=Xt(uk),ck={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fk(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=hk[e])?!!t[e]:!1}function Um(){return fk}var pk=Ue({},za,{key:function(e){if(e.key){var t=ck[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=su(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?dk[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Um,charCode:function(e){return e.type==="keypress"?su(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?su(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mk=Xt(pk),gk=Ue({},zc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),C0=Xt(gk),vk=Ue({},za,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Um}),yk=Xt(vk),wk=Ue({},ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ek=Xt(wk),Sk=Ue({},zc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),bk=Xt(Sk),Tk=[9,13,27,32],jm=Yn&&"CompositionEvent"in window,js=null;Yn&&"documentMode"in document&&(js=document.documentMode);var xk=Yn&&"TextEvent"in window&&!js,AE=Yn&&(!jm||js&&8<js&&11>=js),_0=String.fromCharCode(32),k0=!1;function RE(e,t){switch(e){case"keyup":return Tk.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function NE(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var oo=!1;function Ck(e,t){switch(e){case"compositionend":return NE(t);case"keypress":return t.which!==32?null:(k0=!0,_0);case"textInput":return e=t.data,e===_0&&k0?null:e;default:return null}}function _k(e,t){if(oo)return e==="compositionend"||!jm&&RE(e,t)?(e=$E(),ou=Lm=Tr=null,oo=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return AE&&t.locale!=="ko"?null:t.data;default:return null}}var kk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function I0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!kk[e.type]:t==="textarea"}function OE(e,t,n,r){cE(r),t=Mu(t,"onChange"),0<t.length&&(n=new Fm("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var zs=null,sa=null;function Ik(e){HE(e,0)}function Vc(e){var t=lo(e);if(rE(t))return e}function $k(e,t){if(e==="change")return t}var PE=!1;if(Yn){var vh;if(Yn){var yh="oninput"in document;if(!yh){var $0=document.createElement("div");$0.setAttribute("oninput","return;"),yh=typeof $0.oninput=="function"}vh=yh}else vh=!1;PE=vh&&(!document.documentMode||9<document.documentMode)}function A0(){zs&&(zs.detachEvent("onpropertychange",DE),sa=zs=null)}function DE(e){if(e.propertyName==="value"&&Vc(sa)){var t=[];OE(t,sa,e,Nm(e)),pE(Ik,t)}}function Ak(e,t,n){e==="focusin"?(A0(),zs=t,sa=n,zs.attachEvent("onpropertychange",DE)):e==="focusout"&&A0()}function Rk(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Vc(sa)}function Nk(e,t){if(e==="click")return Vc(t)}function Ok(e,t){if(e==="input"||e==="change")return Vc(t)}function Pk(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var bn=typeof Object.is=="function"?Object.is:Pk;function aa(e,t){if(bn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!xf.call(t,i)||!bn(e[i],t[i]))return!1}return!0}function R0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function N0(e,t){var n=R0(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=R0(n)}}function ME(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ME(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function LE(){for(var e=window,t=$u();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=$u(e.document)}return t}function zm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Dk(e){var t=LE(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ME(n.ownerDocument.documentElement,n)){if(r!==null&&zm(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=N0(n,o);var s=N0(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Mk=Yn&&"documentMode"in document&&11>=document.documentMode,so=null,Bf=null,Vs=null,Hf=!1;function O0(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hf||so==null||so!==$u(r)||(r=so,"selectionStart"in r&&zm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Vs&&aa(Vs,r)||(Vs=r,r=Mu(Bf,"onSelect"),0<r.length&&(t=new Fm("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=so)))}function Nl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ao={animationend:Nl("Animation","AnimationEnd"),animationiteration:Nl("Animation","AnimationIteration"),animationstart:Nl("Animation","AnimationStart"),transitionend:Nl("Transition","TransitionEnd")},wh={},FE={};Yn&&(FE=document.createElement("div").style,"AnimationEvent"in window||(delete ao.animationend.animation,delete ao.animationiteration.animation,delete ao.animationstart.animation),"TransitionEvent"in window||delete ao.transitionend.transition);function Bc(e){if(wh[e])return wh[e];if(!ao[e])return e;var t=ao[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in FE)return wh[e]=t[n];return e}var UE=Bc("animationend"),jE=Bc("animationiteration"),zE=Bc("animationstart"),VE=Bc("transitionend"),BE=new Map,P0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ei(e,t){BE.set(e,t),ji(t,[e])}for(var Eh=0;Eh<P0.length;Eh++){var Sh=P0[Eh],Lk=Sh.toLowerCase(),Fk=Sh[0].toUpperCase()+Sh.slice(1);ei(Lk,"on"+Fk)}ei(UE,"onAnimationEnd");ei(jE,"onAnimationIteration");ei(zE,"onAnimationStart");ei("dblclick","onDoubleClick");ei("focusin","onFocus");ei("focusout","onBlur");ei(VE,"onTransitionEnd");Po("onMouseEnter",["mouseout","mouseover"]);Po("onMouseLeave",["mouseout","mouseover"]);Po("onPointerEnter",["pointerout","pointerover"]);Po("onPointerLeave",["pointerout","pointerover"]);ji("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ji("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ji("onBeforeInput",["compositionend","keypress","textInput","paste"]);ji("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ji("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ji("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var As="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Uk=new Set("cancel close invalid load scroll toggle".split(" ").concat(As));function D0(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,L_(r,t,void 0,e),e.currentTarget=null}function HE(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;D0(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;D0(i,a,u),o=l}}}if(Ru)throw e=Uf,Ru=!1,Uf=null,e}function Re(e,t){var n=t[Qf];n===void 0&&(n=t[Qf]=new Set);var r=e+"__bubble";n.has(r)||(WE(t,e,2,!1),n.add(r))}function bh(e,t,n){var r=0;t&&(r|=4),WE(n,e,r,t)}var Ol="_reactListening"+Math.random().toString(36).slice(2);function la(e){if(!e[Ol]){e[Ol]=!0,Jw.forEach(function(n){n!=="selectionchange"&&(Uk.has(n)||bh(n,!1,e),bh(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ol]||(t[Ol]=!0,bh("selectionchange",!1,t))}}function WE(e,t,n,r){switch(IE(t)){case 1:var i=Z_;break;case 4:i=ek;break;default:i=Mm}n=i.bind(null,t,n,e),i=void 0,!Ff||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Th(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=hi(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}pE(function(){var u=o,c=Nm(n),d=[];e:{var h=BE.get(e);if(h!==void 0){var f=Fm,v=e;switch(e){case"keypress":if(su(n)===0)break e;case"keydown":case"keyup":f=mk;break;case"focusin":v="focus",f=gh;break;case"focusout":v="blur",f=gh;break;case"beforeblur":case"afterblur":f=gh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=T0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=rk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=yk;break;case UE:case jE:case zE:f=sk;break;case VE:f=Ek;break;case"scroll":f=tk;break;case"wheel":f=bk;break;case"copy":case"cut":case"paste":f=lk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=C0}var p=(t&4)!==0,S=!p&&e==="scroll",y=p?h!==null?h+"Capture":null:h;p=[];for(var g=u,E;g!==null;){E=g;var b=E.stateNode;if(E.tag===5&&b!==null&&(E=b,y!==null&&(b=na(g,y),b!=null&&p.push(ua(g,b,E)))),S)break;g=g.return}0<p.length&&(h=new f(h,v,null,n,c),d.push({event:h,listeners:p}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",f=e==="mouseout"||e==="pointerout",h&&n!==Mf&&(v=n.relatedTarget||n.fromElement)&&(hi(v)||v[Xn]))break e;if((f||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,f?(v=n.relatedTarget||n.toElement,f=u,v=v?hi(v):null,v!==null&&(S=zi(v),v!==S||v.tag!==5&&v.tag!==6)&&(v=null)):(f=null,v=u),f!==v)){if(p=T0,b="onMouseLeave",y="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(p=C0,b="onPointerLeave",y="onPointerEnter",g="pointer"),S=f==null?h:lo(f),E=v==null?h:lo(v),h=new p(b,g+"leave",f,n,c),h.target=S,h.relatedTarget=E,b=null,hi(c)===u&&(p=new p(y,g+"enter",v,n,c),p.target=E,p.relatedTarget=S,b=p),S=b,f&&v)t:{for(p=f,y=v,g=0,E=p;E;E=Ki(E))g++;for(E=0,b=y;b;b=Ki(b))E++;for(;0<g-E;)p=Ki(p),g--;for(;0<E-g;)y=Ki(y),E--;for(;g--;){if(p===y||y!==null&&p===y.alternate)break t;p=Ki(p),y=Ki(y)}p=null}else p=null;f!==null&&M0(d,h,f,p,!1),v!==null&&S!==null&&M0(d,S,v,p,!0)}}e:{if(h=u?lo(u):window,f=h.nodeName&&h.nodeName.toLowerCase(),f==="select"||f==="input"&&h.type==="file")var T=$k;else if(I0(h))if(PE)T=Ok;else{T=Rk;var A=Ak}else(f=h.nodeName)&&f.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(T=Nk);if(T&&(T=T(e,u))){OE(d,T,n,c);break e}A&&A(e,h,u),e==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&Rf(h,"number",h.value)}switch(A=u?lo(u):window,e){case"focusin":(I0(A)||A.contentEditable==="true")&&(so=A,Bf=u,Vs=null);break;case"focusout":Vs=Bf=so=null;break;case"mousedown":Hf=!0;break;case"contextmenu":case"mouseup":case"dragend":Hf=!1,O0(d,n,c);break;case"selectionchange":if(Mk)break;case"keydown":case"keyup":O0(d,n,c)}var I;if(jm)e:{switch(e){case"compositionstart":var $="onCompositionStart";break e;case"compositionend":$="onCompositionEnd";break e;case"compositionupdate":$="onCompositionUpdate";break e}$=void 0}else oo?RE(e,n)&&($="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&($="onCompositionStart");$&&(AE&&n.locale!=="ko"&&(oo||$!=="onCompositionStart"?$==="onCompositionEnd"&&oo&&(I=$E()):(Tr=c,Lm="value"in Tr?Tr.value:Tr.textContent,oo=!0)),A=Mu(u,$),0<A.length&&($=new x0($,e,null,n,c),d.push({event:$,listeners:A}),I?$.data=I:(I=NE(n),I!==null&&($.data=I)))),(I=xk?Ck(e,n):_k(e,n))&&(u=Mu(u,"onBeforeInput"),0<u.length&&(c=new x0("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=I))}HE(d,t)})}function ua(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Mu(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=na(e,n),o!=null&&r.unshift(ua(e,o,i)),o=na(e,t),o!=null&&r.push(ua(e,o,i))),e=e.return}return r}function Ki(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function M0(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=na(n,o),l!=null&&s.unshift(ua(n,l,a))):i||(l=na(n,o),l!=null&&s.push(ua(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var jk=/\r\n?/g,zk=/\u0000|\uFFFD/g;function L0(e){return(typeof e=="string"?e:""+e).replace(jk,`
`).replace(zk,"")}function Pl(e,t,n){if(t=L0(t),L0(e)!==t&&n)throw Error(D(425))}function Lu(){}var Wf=null,qf=null;function Gf(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Kf=typeof setTimeout=="function"?setTimeout:void 0,Vk=typeof clearTimeout=="function"?clearTimeout:void 0,F0=typeof Promise=="function"?Promise:void 0,Bk=typeof queueMicrotask=="function"?queueMicrotask:typeof F0<"u"?function(e){return F0.resolve(null).then(e).catch(Hk)}:Kf;function Hk(e){setTimeout(function(){throw e})}function xh(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),oa(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);oa(t)}function $r(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function U0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var rs=Math.random().toString(36).slice(2),kn="__reactFiber$"+rs,ca="__reactProps$"+rs,Xn="__reactContainer$"+rs,Qf="__reactEvents$"+rs,Wk="__reactListeners$"+rs,qk="__reactHandles$"+rs;function hi(e){var t=e[kn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Xn]||n[kn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=U0(e);e!==null;){if(n=e[kn])return n;e=U0(e)}return t}e=n,n=e.parentNode}return null}function Va(e){return e=e[kn]||e[Xn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function lo(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(D(33))}function Hc(e){return e[ca]||null}var Yf=[],uo=-1;function ti(e){return{current:e}}function Ne(e){0>uo||(e.current=Yf[uo],Yf[uo]=null,uo--)}function $e(e,t){uo++,Yf[uo]=e.current,e.current=t}var qr={},It=ti(qr),jt=ti(!1),Ci=qr;function Do(e,t){var n=e.type.contextTypes;if(!n)return qr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function zt(e){return e=e.childContextTypes,e!=null}function Fu(){Ne(jt),Ne(It)}function j0(e,t,n){if(It.current!==qr)throw Error(D(168));$e(It,t),$e(jt,n)}function qE(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(D(108,A_(e)||"Unknown",i));return Ue({},n,r)}function Uu(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||qr,Ci=It.current,$e(It,e),$e(jt,jt.current),!0}function z0(e,t,n){var r=e.stateNode;if(!r)throw Error(D(169));n?(e=qE(e,t,Ci),r.__reactInternalMemoizedMergedChildContext=e,Ne(jt),Ne(It),$e(It,e)):Ne(jt),$e(jt,n)}var Bn=null,Wc=!1,Ch=!1;function GE(e){Bn===null?Bn=[e]:Bn.push(e)}function Gk(e){Wc=!0,GE(e)}function ni(){if(!Ch&&Bn!==null){Ch=!0;var e=0,t=xe;try{var n=Bn;for(xe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Bn=null,Wc=!1}catch(i){throw Bn!==null&&(Bn=Bn.slice(e+1)),yE(Om,ni),i}finally{xe=t,Ch=!1}}return null}var co=[],ho=0,ju=null,zu=0,en=[],tn=0,_i=null,Hn=1,Wn="";function ai(e,t){co[ho++]=zu,co[ho++]=ju,ju=e,zu=t}function KE(e,t,n){en[tn++]=Hn,en[tn++]=Wn,en[tn++]=_i,_i=e;var r=Hn;e=Wn;var i=32-wn(r)-1;r&=~(1<<i),n+=1;var o=32-wn(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Hn=1<<32-wn(t)+i|n<<i|r,Wn=o+e}else Hn=1<<o|n<<i|r,Wn=e}function Vm(e){e.return!==null&&(ai(e,1),KE(e,1,0))}function Bm(e){for(;e===ju;)ju=co[--ho],co[ho]=null,zu=co[--ho],co[ho]=null;for(;e===_i;)_i=en[--tn],en[tn]=null,Wn=en[--tn],en[tn]=null,Hn=en[--tn],en[tn]=null}var qt=null,Wt=null,De=!1,gn=null;function QE(e,t){var n=nn(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function V0(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,qt=e,Wt=$r(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,qt=e,Wt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=_i!==null?{id:Hn,overflow:Wn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=nn(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,qt=e,Wt=null,!0):!1;default:return!1}}function Xf(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Jf(e){if(De){var t=Wt;if(t){var n=t;if(!V0(e,t)){if(Xf(e))throw Error(D(418));t=$r(n.nextSibling);var r=qt;t&&V0(e,t)?QE(r,n):(e.flags=e.flags&-4097|2,De=!1,qt=e)}}else{if(Xf(e))throw Error(D(418));e.flags=e.flags&-4097|2,De=!1,qt=e}}}function B0(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;qt=e}function Dl(e){if(e!==qt)return!1;if(!De)return B0(e),De=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Gf(e.type,e.memoizedProps)),t&&(t=Wt)){if(Xf(e))throw YE(),Error(D(418));for(;t;)QE(e,t),t=$r(t.nextSibling)}if(B0(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(D(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Wt=$r(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Wt=null}}else Wt=qt?$r(e.stateNode.nextSibling):null;return!0}function YE(){for(var e=Wt;e;)e=$r(e.nextSibling)}function Mo(){Wt=qt=null,De=!1}function Hm(e){gn===null?gn=[e]:gn.push(e)}var Kk=ar.ReactCurrentBatchConfig;function pn(e,t){if(e&&e.defaultProps){t=Ue({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Vu=ti(null),Bu=null,fo=null,Wm=null;function qm(){Wm=fo=Bu=null}function Gm(e){var t=Vu.current;Ne(Vu),e._currentValue=t}function Zf(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function To(e,t){Bu=e,Wm=fo=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ut=!0),e.firstContext=null)}function an(e){var t=e._currentValue;if(Wm!==e)if(e={context:e,memoizedValue:t,next:null},fo===null){if(Bu===null)throw Error(D(308));fo=e,Bu.dependencies={lanes:0,firstContext:e}}else fo=fo.next=e;return t}var fi=null;function Km(e){fi===null?fi=[e]:fi.push(e)}function XE(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Km(t)):(n.next=i.next,i.next=n),t.interleaved=n,Jn(e,r)}function Jn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var gr=!1;function Qm(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function JE(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ar(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,we&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Jn(e,n)}return i=r.interleaved,i===null?(t.next=t,Km(r)):(t.next=i.next,i.next=t),r.interleaved=t,Jn(e,n)}function au(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Pm(e,n)}}function H0(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Hu(e,t,n,r){var i=e.updateQueue;gr=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var d=i.baseState;s=0,c=u=l=null,a=o;do{var h=a.lane,f=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,p=a;switch(h=t,f=n,p.tag){case 1:if(v=p.payload,typeof v=="function"){d=v.call(f,d,h);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=p.payload,h=typeof v=="function"?v.call(f,d,h):v,h==null)break e;d=Ue({},d,h);break e;case 2:gr=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else f={eventTime:f,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=f,l=d):c=c.next=f,s|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Ii|=s,e.lanes=s,e.memoizedState=d}}function W0(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(D(191,i));i.call(r)}}}var ZE=new Xw.Component().refs;function ep(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ue({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var qc={isMounted:function(e){return(e=e._reactInternals)?zi(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ot(),i=Nr(e),o=Qn(r,i);o.payload=t,n!=null&&(o.callback=n),t=Ar(e,o,i),t!==null&&(En(t,e,i,r),au(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ot(),i=Nr(e),o=Qn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Ar(e,o,i),t!==null&&(En(t,e,i,r),au(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ot(),r=Nr(e),i=Qn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Ar(e,i,r),t!==null&&(En(t,e,r,n),au(t,e,r))}};function q0(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!aa(n,r)||!aa(i,o):!0}function eS(e,t,n){var r=!1,i=qr,o=t.contextType;return typeof o=="object"&&o!==null?o=an(o):(i=zt(t)?Ci:It.current,r=t.contextTypes,o=(r=r!=null)?Do(e,i):qr),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=qc,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function G0(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&qc.enqueueReplaceState(t,t.state,null)}function tp(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=ZE,Qm(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=an(o):(o=zt(t)?Ci:It.current,i.context=Do(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ep(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&qc.enqueueReplaceState(i,i.state,null),Hu(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ss(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(D(309));var r=n.stateNode}if(!r)throw Error(D(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;a===ZE&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(D(284));if(!n._owner)throw Error(D(290,e))}return e}function Ml(e,t){throw e=Object.prototype.toString.call(t),Error(D(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function K0(e){var t=e._init;return t(e._payload)}function tS(e){function t(y,g){if(e){var E=y.deletions;E===null?(y.deletions=[g],y.flags|=16):E.push(g)}}function n(y,g){if(!e)return null;for(;g!==null;)t(y,g),g=g.sibling;return null}function r(y,g){for(y=new Map;g!==null;)g.key!==null?y.set(g.key,g):y.set(g.index,g),g=g.sibling;return y}function i(y,g){return y=Or(y,g),y.index=0,y.sibling=null,y}function o(y,g,E){return y.index=E,e?(E=y.alternate,E!==null?(E=E.index,E<g?(y.flags|=2,g):E):(y.flags|=2,g)):(y.flags|=1048576,g)}function s(y){return e&&y.alternate===null&&(y.flags|=2),y}function a(y,g,E,b){return g===null||g.tag!==6?(g=Nh(E,y.mode,b),g.return=y,g):(g=i(g,E),g.return=y,g)}function l(y,g,E,b){var T=E.type;return T===io?c(y,g,E.props.children,b,E.key):g!==null&&(g.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===mr&&K0(T)===g.type)?(b=i(g,E.props),b.ref=Ss(y,g,E),b.return=y,b):(b=fu(E.type,E.key,E.props,null,y.mode,b),b.ref=Ss(y,g,E),b.return=y,b)}function u(y,g,E,b){return g===null||g.tag!==4||g.stateNode.containerInfo!==E.containerInfo||g.stateNode.implementation!==E.implementation?(g=Oh(E,y.mode,b),g.return=y,g):(g=i(g,E.children||[]),g.return=y,g)}function c(y,g,E,b,T){return g===null||g.tag!==7?(g=Ei(E,y.mode,b,T),g.return=y,g):(g=i(g,E),g.return=y,g)}function d(y,g,E){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Nh(""+g,y.mode,E),g.return=y,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Cl:return E=fu(g.type,g.key,g.props,null,y.mode,E),E.ref=Ss(y,null,g),E.return=y,E;case ro:return g=Oh(g,y.mode,E),g.return=y,g;case mr:var b=g._init;return d(y,b(g._payload),E)}if(Is(g)||gs(g))return g=Ei(g,y.mode,E,null),g.return=y,g;Ml(y,g)}return null}function h(y,g,E,b){var T=g!==null?g.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return T!==null?null:a(y,g,""+E,b);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Cl:return E.key===T?l(y,g,E,b):null;case ro:return E.key===T?u(y,g,E,b):null;case mr:return T=E._init,h(y,g,T(E._payload),b)}if(Is(E)||gs(E))return T!==null?null:c(y,g,E,b,null);Ml(y,E)}return null}function f(y,g,E,b,T){if(typeof b=="string"&&b!==""||typeof b=="number")return y=y.get(E)||null,a(g,y,""+b,T);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Cl:return y=y.get(b.key===null?E:b.key)||null,l(g,y,b,T);case ro:return y=y.get(b.key===null?E:b.key)||null,u(g,y,b,T);case mr:var A=b._init;return f(y,g,E,A(b._payload),T)}if(Is(b)||gs(b))return y=y.get(E)||null,c(g,y,b,T,null);Ml(g,b)}return null}function v(y,g,E,b){for(var T=null,A=null,I=g,$=g=0,H=null;I!==null&&$<E.length;$++){I.index>$?(H=I,I=null):H=I.sibling;var P=h(y,I,E[$],b);if(P===null){I===null&&(I=H);break}e&&I&&P.alternate===null&&t(y,I),g=o(P,g,$),A===null?T=P:A.sibling=P,A=P,I=H}if($===E.length)return n(y,I),De&&ai(y,$),T;if(I===null){for(;$<E.length;$++)I=d(y,E[$],b),I!==null&&(g=o(I,g,$),A===null?T=I:A.sibling=I,A=I);return De&&ai(y,$),T}for(I=r(y,I);$<E.length;$++)H=f(I,y,$,E[$],b),H!==null&&(e&&H.alternate!==null&&I.delete(H.key===null?$:H.key),g=o(H,g,$),A===null?T=H:A.sibling=H,A=H);return e&&I.forEach(function(me){return t(y,me)}),De&&ai(y,$),T}function p(y,g,E,b){var T=gs(E);if(typeof T!="function")throw Error(D(150));if(E=T.call(E),E==null)throw Error(D(151));for(var A=T=null,I=g,$=g=0,H=null,P=E.next();I!==null&&!P.done;$++,P=E.next()){I.index>$?(H=I,I=null):H=I.sibling;var me=h(y,I,P.value,b);if(me===null){I===null&&(I=H);break}e&&I&&me.alternate===null&&t(y,I),g=o(me,g,$),A===null?T=me:A.sibling=me,A=me,I=H}if(P.done)return n(y,I),De&&ai(y,$),T;if(I===null){for(;!P.done;$++,P=E.next())P=d(y,P.value,b),P!==null&&(g=o(P,g,$),A===null?T=P:A.sibling=P,A=P);return De&&ai(y,$),T}for(I=r(y,I);!P.done;$++,P=E.next())P=f(I,y,$,P.value,b),P!==null&&(e&&P.alternate!==null&&I.delete(P.key===null?$:P.key),g=o(P,g,$),A===null?T=P:A.sibling=P,A=P);return e&&I.forEach(function(Oe){return t(y,Oe)}),De&&ai(y,$),T}function S(y,g,E,b){if(typeof E=="object"&&E!==null&&E.type===io&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case Cl:e:{for(var T=E.key,A=g;A!==null;){if(A.key===T){if(T=E.type,T===io){if(A.tag===7){n(y,A.sibling),g=i(A,E.props.children),g.return=y,y=g;break e}}else if(A.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===mr&&K0(T)===A.type){n(y,A.sibling),g=i(A,E.props),g.ref=Ss(y,A,E),g.return=y,y=g;break e}n(y,A);break}else t(y,A);A=A.sibling}E.type===io?(g=Ei(E.props.children,y.mode,b,E.key),g.return=y,y=g):(b=fu(E.type,E.key,E.props,null,y.mode,b),b.ref=Ss(y,g,E),b.return=y,y=b)}return s(y);case ro:e:{for(A=E.key;g!==null;){if(g.key===A)if(g.tag===4&&g.stateNode.containerInfo===E.containerInfo&&g.stateNode.implementation===E.implementation){n(y,g.sibling),g=i(g,E.children||[]),g.return=y,y=g;break e}else{n(y,g);break}else t(y,g);g=g.sibling}g=Oh(E,y.mode,b),g.return=y,y=g}return s(y);case mr:return A=E._init,S(y,g,A(E._payload),b)}if(Is(E))return v(y,g,E,b);if(gs(E))return p(y,g,E,b);Ml(y,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,g!==null&&g.tag===6?(n(y,g.sibling),g=i(g,E),g.return=y,y=g):(n(y,g),g=Nh(E,y.mode,b),g.return=y,y=g),s(y)):n(y,g)}return S}var Lo=tS(!0),nS=tS(!1),Ba={},Nn=ti(Ba),da=ti(Ba),ha=ti(Ba);function pi(e){if(e===Ba)throw Error(D(174));return e}function Ym(e,t){switch($e(ha,t),$e(da,e),$e(Nn,Ba),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Of(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Of(t,e)}Ne(Nn),$e(Nn,t)}function Fo(){Ne(Nn),Ne(da),Ne(ha)}function rS(e){pi(ha.current);var t=pi(Nn.current),n=Of(t,e.type);t!==n&&($e(da,e),$e(Nn,n))}function Xm(e){da.current===e&&(Ne(Nn),Ne(da))}var Le=ti(0);function Wu(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _h=[];function Jm(){for(var e=0;e<_h.length;e++)_h[e]._workInProgressVersionPrimary=null;_h.length=0}var lu=ar.ReactCurrentDispatcher,kh=ar.ReactCurrentBatchConfig,ki=0,Fe=null,Qe=null,rt=null,qu=!1,Bs=!1,fa=0,Qk=0;function yt(){throw Error(D(321))}function Zm(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!bn(e[n],t[n]))return!1;return!0}function eg(e,t,n,r,i,o){if(ki=o,Fe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,lu.current=e===null||e.memoizedState===null?Zk:eI,e=n(r,i),Bs){o=0;do{if(Bs=!1,fa=0,25<=o)throw Error(D(301));o+=1,rt=Qe=null,t.updateQueue=null,lu.current=tI,e=n(r,i)}while(Bs)}if(lu.current=Gu,t=Qe!==null&&Qe.next!==null,ki=0,rt=Qe=Fe=null,qu=!1,t)throw Error(D(300));return e}function tg(){var e=fa!==0;return fa=0,e}function _n(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rt===null?Fe.memoizedState=rt=e:rt=rt.next=e,rt}function ln(){if(Qe===null){var e=Fe.alternate;e=e!==null?e.memoizedState:null}else e=Qe.next;var t=rt===null?Fe.memoizedState:rt.next;if(t!==null)rt=t,Qe=e;else{if(e===null)throw Error(D(310));Qe=e,e={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},rt===null?Fe.memoizedState=rt=e:rt=rt.next=e}return rt}function pa(e,t){return typeof t=="function"?t(e):t}function Ih(e){var t=ln(),n=t.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=e;var r=Qe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((ki&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,s=r):l=l.next=d,Fe.lanes|=c,Ii|=c}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,bn(r,t.memoizedState)||(Ut=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Fe.lanes|=o,Ii|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function $h(e){var t=ln(),n=t.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);bn(o,t.memoizedState)||(Ut=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function iS(){}function oS(e,t){var n=Fe,r=ln(),i=t(),o=!bn(r.memoizedState,i);if(o&&(r.memoizedState=i,Ut=!0),r=r.queue,ng(lS.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||rt!==null&&rt.memoizedState.tag&1){if(n.flags|=2048,ma(9,aS.bind(null,n,r,i,t),void 0,null),it===null)throw Error(D(349));ki&30||sS(n,t,i)}return i}function sS(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Fe.updateQueue,t===null?(t={lastEffect:null,stores:null},Fe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function aS(e,t,n,r){t.value=n,t.getSnapshot=r,uS(t)&&cS(e)}function lS(e,t,n){return n(function(){uS(t)&&cS(e)})}function uS(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!bn(e,n)}catch{return!0}}function cS(e){var t=Jn(e,1);t!==null&&En(t,e,1,-1)}function Q0(e){var t=_n();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:e},t.queue=e,e=e.dispatch=Jk.bind(null,Fe,e),[t.memoizedState,e]}function ma(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Fe.updateQueue,t===null?(t={lastEffect:null,stores:null},Fe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function dS(){return ln().memoizedState}function uu(e,t,n,r){var i=_n();Fe.flags|=e,i.memoizedState=ma(1|t,n,void 0,r===void 0?null:r)}function Gc(e,t,n,r){var i=ln();r=r===void 0?null:r;var o=void 0;if(Qe!==null){var s=Qe.memoizedState;if(o=s.destroy,r!==null&&Zm(r,s.deps)){i.memoizedState=ma(t,n,o,r);return}}Fe.flags|=e,i.memoizedState=ma(1|t,n,o,r)}function Y0(e,t){return uu(8390656,8,e,t)}function ng(e,t){return Gc(2048,8,e,t)}function hS(e,t){return Gc(4,2,e,t)}function fS(e,t){return Gc(4,4,e,t)}function pS(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function mS(e,t,n){return n=n!=null?n.concat([e]):null,Gc(4,4,pS.bind(null,t,e),n)}function rg(){}function gS(e,t){var n=ln();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Zm(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function vS(e,t){var n=ln();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Zm(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function yS(e,t,n){return ki&21?(bn(n,t)||(n=SE(),Fe.lanes|=n,Ii|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ut=!0),e.memoizedState=n)}function Yk(e,t){var n=xe;xe=n!==0&&4>n?n:4,e(!0);var r=kh.transition;kh.transition={};try{e(!1),t()}finally{xe=n,kh.transition=r}}function wS(){return ln().memoizedState}function Xk(e,t,n){var r=Nr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ES(e))SS(t,n);else if(n=XE(e,t,n,r),n!==null){var i=Ot();En(n,e,r,i),bS(n,t,r)}}function Jk(e,t,n){var r=Nr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ES(e))SS(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,bn(a,s)){var l=t.interleaved;l===null?(i.next=i,Km(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=XE(e,t,i,r),n!==null&&(i=Ot(),En(n,e,r,i),bS(n,t,r))}}function ES(e){var t=e.alternate;return e===Fe||t!==null&&t===Fe}function SS(e,t){Bs=qu=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function bS(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Pm(e,n)}}var Gu={readContext:an,useCallback:yt,useContext:yt,useEffect:yt,useImperativeHandle:yt,useInsertionEffect:yt,useLayoutEffect:yt,useMemo:yt,useReducer:yt,useRef:yt,useState:yt,useDebugValue:yt,useDeferredValue:yt,useTransition:yt,useMutableSource:yt,useSyncExternalStore:yt,useId:yt,unstable_isNewReconciler:!1},Zk={readContext:an,useCallback:function(e,t){return _n().memoizedState=[e,t===void 0?null:t],e},useContext:an,useEffect:Y0,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,uu(4194308,4,pS.bind(null,t,e),n)},useLayoutEffect:function(e,t){return uu(4194308,4,e,t)},useInsertionEffect:function(e,t){return uu(4,2,e,t)},useMemo:function(e,t){var n=_n();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=_n();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Xk.bind(null,Fe,e),[r.memoizedState,e]},useRef:function(e){var t=_n();return e={current:e},t.memoizedState=e},useState:Q0,useDebugValue:rg,useDeferredValue:function(e){return _n().memoizedState=e},useTransition:function(){var e=Q0(!1),t=e[0];return e=Yk.bind(null,e[1]),_n().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Fe,i=_n();if(De){if(n===void 0)throw Error(D(407));n=n()}else{if(n=t(),it===null)throw Error(D(349));ki&30||sS(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Y0(lS.bind(null,r,o,e),[e]),r.flags|=2048,ma(9,aS.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=_n(),t=it.identifierPrefix;if(De){var n=Wn,r=Hn;n=(r&~(1<<32-wn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=fa++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Qk++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},eI={readContext:an,useCallback:gS,useContext:an,useEffect:ng,useImperativeHandle:mS,useInsertionEffect:hS,useLayoutEffect:fS,useMemo:vS,useReducer:Ih,useRef:dS,useState:function(){return Ih(pa)},useDebugValue:rg,useDeferredValue:function(e){var t=ln();return yS(t,Qe.memoizedState,e)},useTransition:function(){var e=Ih(pa)[0],t=ln().memoizedState;return[e,t]},useMutableSource:iS,useSyncExternalStore:oS,useId:wS,unstable_isNewReconciler:!1},tI={readContext:an,useCallback:gS,useContext:an,useEffect:ng,useImperativeHandle:mS,useInsertionEffect:hS,useLayoutEffect:fS,useMemo:vS,useReducer:$h,useRef:dS,useState:function(){return $h(pa)},useDebugValue:rg,useDeferredValue:function(e){var t=ln();return Qe===null?t.memoizedState=e:yS(t,Qe.memoizedState,e)},useTransition:function(){var e=$h(pa)[0],t=ln().memoizedState;return[e,t]},useMutableSource:iS,useSyncExternalStore:oS,useId:wS,unstable_isNewReconciler:!1};function Uo(e,t){try{var n="",r=t;do n+=$_(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Ah(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function np(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var nI=typeof WeakMap=="function"?WeakMap:Map;function TS(e,t,n){n=Qn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Qu||(Qu=!0,hp=r),np(e,t)},n}function xS(e,t,n){n=Qn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){np(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){np(e,t),typeof r!="function"&&(Rr===null?Rr=new Set([this]):Rr.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function X0(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new nI;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=gI.bind(null,e,t,n),t.then(e,e))}function J0(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Z0(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Qn(-1,1),t.tag=2,Ar(n,t,1))),n.lanes|=1),e)}var rI=ar.ReactCurrentOwner,Ut=!1;function Rt(e,t,n,r){t.child=e===null?nS(t,null,n,r):Lo(t,e.child,n,r)}function ey(e,t,n,r,i){n=n.render;var o=t.ref;return To(t,i),r=eg(e,t,n,r,o,i),n=tg(),e!==null&&!Ut?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Zn(e,t,i)):(De&&n&&Vm(t),t.flags|=1,Rt(e,t,r,i),t.child)}function ty(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!dg(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,CS(e,t,o,r,i)):(e=fu(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:aa,n(s,r)&&e.ref===t.ref)return Zn(e,t,i)}return t.flags|=1,e=Or(o,r),e.ref=t.ref,e.return=t,t.child=e}function CS(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(aa(o,r)&&e.ref===t.ref)if(Ut=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ut=!0);else return t.lanes=e.lanes,Zn(e,t,i)}return rp(e,t,n,r,i)}function _S(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},$e(mo,Bt),Bt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,$e(mo,Bt),Bt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,$e(mo,Bt),Bt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,$e(mo,Bt),Bt|=r;return Rt(e,t,i,n),t.child}function kS(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function rp(e,t,n,r,i){var o=zt(n)?Ci:It.current;return o=Do(t,o),To(t,i),n=eg(e,t,n,r,o,i),r=tg(),e!==null&&!Ut?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Zn(e,t,i)):(De&&r&&Vm(t),t.flags|=1,Rt(e,t,n,i),t.child)}function ny(e,t,n,r,i){if(zt(n)){var o=!0;Uu(t)}else o=!1;if(To(t,i),t.stateNode===null)cu(e,t),eS(t,n,r),tp(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=an(u):(u=zt(n)?Ci:It.current,u=Do(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&G0(t,s,r,u),gr=!1;var h=t.memoizedState;s.state=h,Hu(t,r,s,i),l=t.memoizedState,a!==r||h!==l||jt.current||gr?(typeof c=="function"&&(ep(t,n,c,r),l=t.memoizedState),(a=gr||q0(t,n,a,r,h,l,u))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,JE(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:pn(t.type,a),s.props=u,d=t.pendingProps,h=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=an(l):(l=zt(n)?Ci:It.current,l=Do(t,l));var f=n.getDerivedStateFromProps;(c=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||h!==l)&&G0(t,s,r,l),gr=!1,h=t.memoizedState,s.state=h,Hu(t,r,s,i);var v=t.memoizedState;a!==d||h!==v||jt.current||gr?(typeof f=="function"&&(ep(t,n,f,r),v=t.memoizedState),(u=gr||q0(t,n,u,r,h,v,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),s.props=r,s.state=v,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return ip(e,t,n,r,o,i)}function ip(e,t,n,r,i,o){kS(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&z0(t,n,!1),Zn(e,t,o);r=t.stateNode,rI.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Lo(t,e.child,null,o),t.child=Lo(t,null,a,o)):Rt(e,t,a,o),t.memoizedState=r.state,i&&z0(t,n,!0),t.child}function IS(e){var t=e.stateNode;t.pendingContext?j0(e,t.pendingContext,t.pendingContext!==t.context):t.context&&j0(e,t.context,!1),Ym(e,t.containerInfo)}function ry(e,t,n,r,i){return Mo(),Hm(i),t.flags|=256,Rt(e,t,n,r),t.child}var op={dehydrated:null,treeContext:null,retryLane:0};function sp(e){return{baseLanes:e,cachePool:null,transitions:null}}function $S(e,t,n){var r=t.pendingProps,i=Le.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),$e(Le,i&1),e===null)return Jf(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Yc(s,r,0,null),e=Ei(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=sp(n),t.memoizedState=op,e):ig(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return iI(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Or(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Or(a,o):(o=Ei(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?sp(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=op,r}return o=e.child,e=o.sibling,r=Or(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ig(e,t){return t=Yc({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ll(e,t,n,r){return r!==null&&Hm(r),Lo(t,e.child,null,n),e=ig(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function iI(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=Ah(Error(D(422))),Ll(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Yc({mode:"visible",children:r.children},i,0,null),o=Ei(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Lo(t,e.child,null,s),t.child.memoizedState=sp(s),t.memoizedState=op,o);if(!(t.mode&1))return Ll(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(D(419)),r=Ah(o,r,void 0),Ll(e,t,s,r)}if(a=(s&e.childLanes)!==0,Ut||a){if(r=it,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Jn(e,i),En(r,e,i,-1))}return cg(),r=Ah(Error(D(421))),Ll(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=vI.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Wt=$r(i.nextSibling),qt=t,De=!0,gn=null,e!==null&&(en[tn++]=Hn,en[tn++]=Wn,en[tn++]=_i,Hn=e.id,Wn=e.overflow,_i=t),t=ig(t,r.children),t.flags|=4096,t)}function iy(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Zf(e.return,t,n)}function Rh(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function AS(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Rt(e,t,r.children,n),r=Le.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&iy(e,n,t);else if(e.tag===19)iy(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if($e(Le,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Wu(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Rh(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Wu(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Rh(t,!0,n,null,o);break;case"together":Rh(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function cu(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Zn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ii|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(D(153));if(t.child!==null){for(e=t.child,n=Or(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Or(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function oI(e,t,n){switch(t.tag){case 3:IS(t),Mo();break;case 5:rS(t);break;case 1:zt(t.type)&&Uu(t);break;case 4:Ym(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;$e(Vu,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?($e(Le,Le.current&1),t.flags|=128,null):n&t.child.childLanes?$S(e,t,n):($e(Le,Le.current&1),e=Zn(e,t,n),e!==null?e.sibling:null);$e(Le,Le.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return AS(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),$e(Le,Le.current),r)break;return null;case 22:case 23:return t.lanes=0,_S(e,t,n)}return Zn(e,t,n)}var RS,ap,NS,OS;RS=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ap=function(){};NS=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,pi(Nn.current);var o=null;switch(n){case"input":i=$f(e,i),r=$f(e,r),o=[];break;case"select":i=Ue({},i,{value:void 0}),r=Ue({},r,{value:void 0}),o=[];break;case"textarea":i=Nf(e,i),r=Nf(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Lu)}Pf(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ea.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ea.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Re("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};OS=function(e,t,n,r){n!==r&&(t.flags|=4)};function bs(e,t){if(!De)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function wt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function sI(e,t,n){var r=t.pendingProps;switch(Bm(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wt(t),null;case 1:return zt(t.type)&&Fu(),wt(t),null;case 3:return r=t.stateNode,Fo(),Ne(jt),Ne(It),Jm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Dl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,gn!==null&&(mp(gn),gn=null))),ap(e,t),wt(t),null;case 5:Xm(t);var i=pi(ha.current);if(n=t.type,e!==null&&t.stateNode!=null)NS(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(D(166));return wt(t),null}if(e=pi(Nn.current),Dl(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[kn]=t,r[ca]=o,e=(t.mode&1)!==0,n){case"dialog":Re("cancel",r),Re("close",r);break;case"iframe":case"object":case"embed":Re("load",r);break;case"video":case"audio":for(i=0;i<As.length;i++)Re(As[i],r);break;case"source":Re("error",r);break;case"img":case"image":case"link":Re("error",r),Re("load",r);break;case"details":Re("toggle",r);break;case"input":f0(r,o),Re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Re("invalid",r);break;case"textarea":m0(r,o),Re("invalid",r)}Pf(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Pl(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Pl(r.textContent,a,e),i=["children",""+a]):ea.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Re("scroll",r)}switch(n){case"input":_l(r),p0(r,o,!0);break;case"textarea":_l(r),g0(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Lu)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=sE(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[kn]=t,e[ca]=r,RS(e,t,!1,!1),t.stateNode=e;e:{switch(s=Df(n,r),n){case"dialog":Re("cancel",e),Re("close",e),i=r;break;case"iframe":case"object":case"embed":Re("load",e),i=r;break;case"video":case"audio":for(i=0;i<As.length;i++)Re(As[i],e);i=r;break;case"source":Re("error",e),i=r;break;case"img":case"image":case"link":Re("error",e),Re("load",e),i=r;break;case"details":Re("toggle",e),i=r;break;case"input":f0(e,r),i=$f(e,r),Re("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Ue({},r,{value:void 0}),Re("invalid",e);break;case"textarea":m0(e,r),i=Nf(e,r),Re("invalid",e);break;default:i=r}Pf(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?uE(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&aE(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ta(e,l):typeof l=="number"&&ta(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ea.hasOwnProperty(o)?l!=null&&o==="onScroll"&&Re("scroll",e):l!=null&&Im(e,o,l,s))}switch(n){case"input":_l(e),p0(e,r,!1);break;case"textarea":_l(e),g0(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Wr(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?wo(e,!!r.multiple,o,!1):r.defaultValue!=null&&wo(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Lu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return wt(t),null;case 6:if(e&&t.stateNode!=null)OS(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(D(166));if(n=pi(ha.current),pi(Nn.current),Dl(t)){if(r=t.stateNode,n=t.memoizedProps,r[kn]=t,(o=r.nodeValue!==n)&&(e=qt,e!==null))switch(e.tag){case 3:Pl(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Pl(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[kn]=t,t.stateNode=r}return wt(t),null;case 13:if(Ne(Le),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(De&&Wt!==null&&t.mode&1&&!(t.flags&128))YE(),Mo(),t.flags|=98560,o=!1;else if(o=Dl(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(D(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(D(317));o[kn]=t}else Mo(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;wt(t),o=!1}else gn!==null&&(mp(gn),gn=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Le.current&1?Ye===0&&(Ye=3):cg())),t.updateQueue!==null&&(t.flags|=4),wt(t),null);case 4:return Fo(),ap(e,t),e===null&&la(t.stateNode.containerInfo),wt(t),null;case 10:return Gm(t.type._context),wt(t),null;case 17:return zt(t.type)&&Fu(),wt(t),null;case 19:if(Ne(Le),o=t.memoizedState,o===null)return wt(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)bs(o,!1);else{if(Ye!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Wu(e),s!==null){for(t.flags|=128,bs(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return $e(Le,Le.current&1|2),t.child}e=e.sibling}o.tail!==null&&He()>jo&&(t.flags|=128,r=!0,bs(o,!1),t.lanes=4194304)}else{if(!r)if(e=Wu(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),bs(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!De)return wt(t),null}else 2*He()-o.renderingStartTime>jo&&n!==1073741824&&(t.flags|=128,r=!0,bs(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=He(),t.sibling=null,n=Le.current,$e(Le,r?n&1|2:n&1),t):(wt(t),null);case 22:case 23:return ug(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Bt&1073741824&&(wt(t),t.subtreeFlags&6&&(t.flags|=8192)):wt(t),null;case 24:return null;case 25:return null}throw Error(D(156,t.tag))}function aI(e,t){switch(Bm(t),t.tag){case 1:return zt(t.type)&&Fu(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Fo(),Ne(jt),Ne(It),Jm(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Xm(t),null;case 13:if(Ne(Le),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(D(340));Mo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ne(Le),null;case 4:return Fo(),null;case 10:return Gm(t.type._context),null;case 22:case 23:return ug(),null;case 24:return null;default:return null}}var Fl=!1,bt=!1,lI=typeof WeakSet=="function"?WeakSet:Set,q=null;function po(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){je(e,t,r)}else n.current=null}function lp(e,t,n){try{n()}catch(r){je(e,t,r)}}var oy=!1;function uI(e,t){if(Wf=Pu,e=LE(),zm(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,d=e,h=null;t:for(;;){for(var f;d!==n||i!==0&&d.nodeType!==3||(a=s+i),d!==o||r!==0&&d.nodeType!==3||(l=s+r),d.nodeType===3&&(s+=d.nodeValue.length),(f=d.firstChild)!==null;)h=d,d=f;for(;;){if(d===e)break t;if(h===n&&++u===i&&(a=s),h===o&&++c===r&&(l=s),(f=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=f}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(qf={focusedElem:e,selectionRange:n},Pu=!1,q=t;q!==null;)if(t=q,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,q=e;else for(;q!==null;){t=q;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var p=v.memoizedProps,S=v.memoizedState,y=t.stateNode,g=y.getSnapshotBeforeUpdate(t.elementType===t.type?p:pn(t.type,p),S);y.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var E=t.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(D(163))}}catch(b){je(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,q=e;break}q=t.return}return v=oy,oy=!1,v}function Hs(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&lp(t,n,o)}i=i.next}while(i!==r)}}function Kc(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function up(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function PS(e){var t=e.alternate;t!==null&&(e.alternate=null,PS(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[kn],delete t[ca],delete t[Qf],delete t[Wk],delete t[qk])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function DS(e){return e.tag===5||e.tag===3||e.tag===4}function sy(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||DS(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function cp(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Lu));else if(r!==4&&(e=e.child,e!==null))for(cp(e,t,n),e=e.sibling;e!==null;)cp(e,t,n),e=e.sibling}function dp(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(dp(e,t,n),e=e.sibling;e!==null;)dp(e,t,n),e=e.sibling}var ct=null,mn=!1;function hr(e,t,n){for(n=n.child;n!==null;)MS(e,t,n),n=n.sibling}function MS(e,t,n){if(Rn&&typeof Rn.onCommitFiberUnmount=="function")try{Rn.onCommitFiberUnmount(jc,n)}catch{}switch(n.tag){case 5:bt||po(n,t);case 6:var r=ct,i=mn;ct=null,hr(e,t,n),ct=r,mn=i,ct!==null&&(mn?(e=ct,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ct.removeChild(n.stateNode));break;case 18:ct!==null&&(mn?(e=ct,n=n.stateNode,e.nodeType===8?xh(e.parentNode,n):e.nodeType===1&&xh(e,n),oa(e)):xh(ct,n.stateNode));break;case 4:r=ct,i=mn,ct=n.stateNode.containerInfo,mn=!0,hr(e,t,n),ct=r,mn=i;break;case 0:case 11:case 14:case 15:if(!bt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&lp(n,t,s),i=i.next}while(i!==r)}hr(e,t,n);break;case 1:if(!bt&&(po(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){je(n,t,a)}hr(e,t,n);break;case 21:hr(e,t,n);break;case 22:n.mode&1?(bt=(r=bt)||n.memoizedState!==null,hr(e,t,n),bt=r):hr(e,t,n);break;default:hr(e,t,n)}}function ay(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new lI),t.forEach(function(r){var i=yI.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function fn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:ct=a.stateNode,mn=!1;break e;case 3:ct=a.stateNode.containerInfo,mn=!0;break e;case 4:ct=a.stateNode.containerInfo,mn=!0;break e}a=a.return}if(ct===null)throw Error(D(160));MS(o,s,i),ct=null,mn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){je(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)LS(t,e),t=t.sibling}function LS(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(fn(t,e),Cn(e),r&4){try{Hs(3,e,e.return),Kc(3,e)}catch(p){je(e,e.return,p)}try{Hs(5,e,e.return)}catch(p){je(e,e.return,p)}}break;case 1:fn(t,e),Cn(e),r&512&&n!==null&&po(n,n.return);break;case 5:if(fn(t,e),Cn(e),r&512&&n!==null&&po(n,n.return),e.flags&32){var i=e.stateNode;try{ta(i,"")}catch(p){je(e,e.return,p)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&iE(i,o),Df(a,s);var u=Df(a,o);for(s=0;s<l.length;s+=2){var c=l[s],d=l[s+1];c==="style"?uE(i,d):c==="dangerouslySetInnerHTML"?aE(i,d):c==="children"?ta(i,d):Im(i,c,d,u)}switch(a){case"input":Af(i,o);break;case"textarea":oE(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var f=o.value;f!=null?wo(i,!!o.multiple,f,!1):h!==!!o.multiple&&(o.defaultValue!=null?wo(i,!!o.multiple,o.defaultValue,!0):wo(i,!!o.multiple,o.multiple?[]:"",!1))}i[ca]=o}catch(p){je(e,e.return,p)}}break;case 6:if(fn(t,e),Cn(e),r&4){if(e.stateNode===null)throw Error(D(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(p){je(e,e.return,p)}}break;case 3:if(fn(t,e),Cn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{oa(t.containerInfo)}catch(p){je(e,e.return,p)}break;case 4:fn(t,e),Cn(e);break;case 13:fn(t,e),Cn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(ag=He())),r&4&&ay(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(bt=(u=bt)||c,fn(t,e),bt=u):fn(t,e),Cn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(q=e,c=e.child;c!==null;){for(d=q=c;q!==null;){switch(h=q,f=h.child,h.tag){case 0:case 11:case 14:case 15:Hs(4,h,h.return);break;case 1:po(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(p){je(r,n,p)}}break;case 5:po(h,h.return);break;case 22:if(h.memoizedState!==null){uy(d);continue}}f!==null?(f.return=h,q=f):uy(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=lE("display",s))}catch(p){je(e,e.return,p)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(p){je(e,e.return,p)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:fn(t,e),Cn(e),r&4&&ay(e);break;case 21:break;default:fn(t,e),Cn(e)}}function Cn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(DS(n)){var r=n;break e}n=n.return}throw Error(D(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ta(i,""),r.flags&=-33);var o=sy(e);dp(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=sy(e);cp(e,a,s);break;default:throw Error(D(161))}}catch(l){je(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function cI(e,t,n){q=e,FS(e)}function FS(e,t,n){for(var r=(e.mode&1)!==0;q!==null;){var i=q,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Fl;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||bt;a=Fl;var u=bt;if(Fl=s,(bt=l)&&!u)for(q=i;q!==null;)s=q,l=s.child,s.tag===22&&s.memoizedState!==null?cy(i):l!==null?(l.return=s,q=l):cy(i);for(;o!==null;)q=o,FS(o),o=o.sibling;q=i,Fl=a,bt=u}ly(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,q=o):ly(e)}}function ly(e){for(;q!==null;){var t=q;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:bt||Kc(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!bt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:pn(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&W0(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}W0(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&oa(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(D(163))}bt||t.flags&512&&up(t)}catch(h){je(t,t.return,h)}}if(t===e){q=null;break}if(n=t.sibling,n!==null){n.return=t.return,q=n;break}q=t.return}}function uy(e){for(;q!==null;){var t=q;if(t===e){q=null;break}var n=t.sibling;if(n!==null){n.return=t.return,q=n;break}q=t.return}}function cy(e){for(;q!==null;){var t=q;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Kc(4,t)}catch(l){je(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){je(t,i,l)}}var o=t.return;try{up(t)}catch(l){je(t,o,l)}break;case 5:var s=t.return;try{up(t)}catch(l){je(t,s,l)}}}catch(l){je(t,t.return,l)}if(t===e){q=null;break}var a=t.sibling;if(a!==null){a.return=t.return,q=a;break}q=t.return}}var dI=Math.ceil,Ku=ar.ReactCurrentDispatcher,og=ar.ReactCurrentOwner,rn=ar.ReactCurrentBatchConfig,we=0,it=null,Ge=null,ht=0,Bt=0,mo=ti(0),Ye=0,ga=null,Ii=0,Qc=0,sg=0,Ws=null,Lt=null,ag=0,jo=1/0,Vn=null,Qu=!1,hp=null,Rr=null,Ul=!1,xr=null,Yu=0,qs=0,fp=null,du=-1,hu=0;function Ot(){return we&6?He():du!==-1?du:du=He()}function Nr(e){return e.mode&1?we&2&&ht!==0?ht&-ht:Kk.transition!==null?(hu===0&&(hu=SE()),hu):(e=xe,e!==0||(e=window.event,e=e===void 0?16:IE(e.type)),e):1}function En(e,t,n,r){if(50<qs)throw qs=0,fp=null,Error(D(185));ja(e,n,r),(!(we&2)||e!==it)&&(e===it&&(!(we&2)&&(Qc|=n),Ye===4&&yr(e,ht)),Vt(e,r),n===1&&we===0&&!(t.mode&1)&&(jo=He()+500,Wc&&ni()))}function Vt(e,t){var n=e.callbackNode;K_(e,t);var r=Ou(e,e===it?ht:0);if(r===0)n!==null&&w0(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&w0(n),t===1)e.tag===0?Gk(dy.bind(null,e)):GE(dy.bind(null,e)),Bk(function(){!(we&6)&&ni()}),n=null;else{switch(bE(r)){case 1:n=Om;break;case 4:n=wE;break;case 16:n=Nu;break;case 536870912:n=EE;break;default:n=Nu}n=qS(n,US.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function US(e,t){if(du=-1,hu=0,we&6)throw Error(D(327));var n=e.callbackNode;if(xo()&&e.callbackNode!==n)return null;var r=Ou(e,e===it?ht:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Xu(e,r);else{t=r;var i=we;we|=2;var o=zS();(it!==e||ht!==t)&&(Vn=null,jo=He()+500,wi(e,t));do try{pI();break}catch(a){jS(e,a)}while(1);qm(),Ku.current=o,we=i,Ge!==null?t=0:(it=null,ht=0,t=Ye)}if(t!==0){if(t===2&&(i=jf(e),i!==0&&(r=i,t=pp(e,i))),t===1)throw n=ga,wi(e,0),yr(e,r),Vt(e,He()),n;if(t===6)yr(e,r);else{if(i=e.current.alternate,!(r&30)&&!hI(i)&&(t=Xu(e,r),t===2&&(o=jf(e),o!==0&&(r=o,t=pp(e,o))),t===1))throw n=ga,wi(e,0),yr(e,r),Vt(e,He()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(D(345));case 2:li(e,Lt,Vn);break;case 3:if(yr(e,r),(r&130023424)===r&&(t=ag+500-He(),10<t)){if(Ou(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ot(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Kf(li.bind(null,e,Lt,Vn),t);break}li(e,Lt,Vn);break;case 4:if(yr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-wn(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=He()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*dI(r/1960))-r,10<r){e.timeoutHandle=Kf(li.bind(null,e,Lt,Vn),r);break}li(e,Lt,Vn);break;case 5:li(e,Lt,Vn);break;default:throw Error(D(329))}}}return Vt(e,He()),e.callbackNode===n?US.bind(null,e):null}function pp(e,t){var n=Ws;return e.current.memoizedState.isDehydrated&&(wi(e,t).flags|=256),e=Xu(e,t),e!==2&&(t=Lt,Lt=n,t!==null&&mp(t)),e}function mp(e){Lt===null?Lt=e:Lt.push.apply(Lt,e)}function hI(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!bn(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yr(e,t){for(t&=~sg,t&=~Qc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-wn(t),r=1<<n;e[n]=-1,t&=~r}}function dy(e){if(we&6)throw Error(D(327));xo();var t=Ou(e,0);if(!(t&1))return Vt(e,He()),null;var n=Xu(e,t);if(e.tag!==0&&n===2){var r=jf(e);r!==0&&(t=r,n=pp(e,r))}if(n===1)throw n=ga,wi(e,0),yr(e,t),Vt(e,He()),n;if(n===6)throw Error(D(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,li(e,Lt,Vn),Vt(e,He()),null}function lg(e,t){var n=we;we|=1;try{return e(t)}finally{we=n,we===0&&(jo=He()+500,Wc&&ni())}}function $i(e){xr!==null&&xr.tag===0&&!(we&6)&&xo();var t=we;we|=1;var n=rn.transition,r=xe;try{if(rn.transition=null,xe=1,e)return e()}finally{xe=r,rn.transition=n,we=t,!(we&6)&&ni()}}function ug(){Bt=mo.current,Ne(mo)}function wi(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Vk(n)),Ge!==null)for(n=Ge.return;n!==null;){var r=n;switch(Bm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Fu();break;case 3:Fo(),Ne(jt),Ne(It),Jm();break;case 5:Xm(r);break;case 4:Fo();break;case 13:Ne(Le);break;case 19:Ne(Le);break;case 10:Gm(r.type._context);break;case 22:case 23:ug()}n=n.return}if(it=e,Ge=e=Or(e.current,null),ht=Bt=t,Ye=0,ga=null,sg=Qc=Ii=0,Lt=Ws=null,fi!==null){for(t=0;t<fi.length;t++)if(n=fi[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}fi=null}return e}function jS(e,t){do{var n=Ge;try{if(qm(),lu.current=Gu,qu){for(var r=Fe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}qu=!1}if(ki=0,rt=Qe=Fe=null,Bs=!1,fa=0,og.current=null,n===null||n.return===null){Ye=1,ga=t,Ge=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=ht,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=J0(s);if(f!==null){f.flags&=-257,Z0(f,s,a,o,t),f.mode&1&&X0(o,u,t),t=f,l=u;var v=t.updateQueue;if(v===null){var p=new Set;p.add(l),t.updateQueue=p}else v.add(l);break e}else{if(!(t&1)){X0(o,u,t),cg();break e}l=Error(D(426))}}else if(De&&a.mode&1){var S=J0(s);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Z0(S,s,a,o,t),Hm(Uo(l,a));break e}}o=l=Uo(l,a),Ye!==4&&(Ye=2),Ws===null?Ws=[o]:Ws.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var y=TS(o,l,t);H0(o,y);break e;case 1:a=l;var g=o.type,E=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(Rr===null||!Rr.has(E)))){o.flags|=65536,t&=-t,o.lanes|=t;var b=xS(o,a,t);H0(o,b);break e}}o=o.return}while(o!==null)}BS(n)}catch(T){t=T,Ge===n&&n!==null&&(Ge=n=n.return);continue}break}while(1)}function zS(){var e=Ku.current;return Ku.current=Gu,e===null?Gu:e}function cg(){(Ye===0||Ye===3||Ye===2)&&(Ye=4),it===null||!(Ii&268435455)&&!(Qc&268435455)||yr(it,ht)}function Xu(e,t){var n=we;we|=2;var r=zS();(it!==e||ht!==t)&&(Vn=null,wi(e,t));do try{fI();break}catch(i){jS(e,i)}while(1);if(qm(),we=n,Ku.current=r,Ge!==null)throw Error(D(261));return it=null,ht=0,Ye}function fI(){for(;Ge!==null;)VS(Ge)}function pI(){for(;Ge!==null&&!U_();)VS(Ge)}function VS(e){var t=WS(e.alternate,e,Bt);e.memoizedProps=e.pendingProps,t===null?BS(e):Ge=t,og.current=null}function BS(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=aI(n,t),n!==null){n.flags&=32767,Ge=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ye=6,Ge=null;return}}else if(n=sI(n,t,Bt),n!==null){Ge=n;return}if(t=t.sibling,t!==null){Ge=t;return}Ge=t=e}while(t!==null);Ye===0&&(Ye=5)}function li(e,t,n){var r=xe,i=rn.transition;try{rn.transition=null,xe=1,mI(e,t,n,r)}finally{rn.transition=i,xe=r}return null}function mI(e,t,n,r){do xo();while(xr!==null);if(we&6)throw Error(D(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(D(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Q_(e,o),e===it&&(Ge=it=null,ht=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ul||(Ul=!0,qS(Nu,function(){return xo(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=rn.transition,rn.transition=null;var s=xe;xe=1;var a=we;we|=4,og.current=null,uI(e,n),LS(n,e),Dk(qf),Pu=!!Wf,qf=Wf=null,e.current=n,cI(n),j_(),we=a,xe=s,rn.transition=o}else e.current=n;if(Ul&&(Ul=!1,xr=e,Yu=i),o=e.pendingLanes,o===0&&(Rr=null),B_(n.stateNode),Vt(e,He()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Qu)throw Qu=!1,e=hp,hp=null,e;return Yu&1&&e.tag!==0&&xo(),o=e.pendingLanes,o&1?e===fp?qs++:(qs=0,fp=e):qs=0,ni(),null}function xo(){if(xr!==null){var e=bE(Yu),t=rn.transition,n=xe;try{if(rn.transition=null,xe=16>e?16:e,xr===null)var r=!1;else{if(e=xr,xr=null,Yu=0,we&6)throw Error(D(331));var i=we;for(we|=4,q=e.current;q!==null;){var o=q,s=o.child;if(q.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(q=u;q!==null;){var c=q;switch(c.tag){case 0:case 11:case 15:Hs(8,c,o)}var d=c.child;if(d!==null)d.return=c,q=d;else for(;q!==null;){c=q;var h=c.sibling,f=c.return;if(PS(c),c===u){q=null;break}if(h!==null){h.return=f,q=h;break}q=f}}}var v=o.alternate;if(v!==null){var p=v.child;if(p!==null){v.child=null;do{var S=p.sibling;p.sibling=null,p=S}while(p!==null)}}q=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,q=s;else e:for(;q!==null;){if(o=q,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Hs(9,o,o.return)}var y=o.sibling;if(y!==null){y.return=o.return,q=y;break e}q=o.return}}var g=e.current;for(q=g;q!==null;){s=q;var E=s.child;if(s.subtreeFlags&2064&&E!==null)E.return=s,q=E;else e:for(s=g;q!==null;){if(a=q,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Kc(9,a)}}catch(T){je(a,a.return,T)}if(a===s){q=null;break e}var b=a.sibling;if(b!==null){b.return=a.return,q=b;break e}q=a.return}}if(we=i,ni(),Rn&&typeof Rn.onPostCommitFiberRoot=="function")try{Rn.onPostCommitFiberRoot(jc,e)}catch{}r=!0}return r}finally{xe=n,rn.transition=t}}return!1}function hy(e,t,n){t=Uo(n,t),t=TS(e,t,1),e=Ar(e,t,1),t=Ot(),e!==null&&(ja(e,1,t),Vt(e,t))}function je(e,t,n){if(e.tag===3)hy(e,e,n);else for(;t!==null;){if(t.tag===3){hy(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Rr===null||!Rr.has(r))){e=Uo(n,e),e=xS(t,e,1),t=Ar(t,e,1),e=Ot(),t!==null&&(ja(t,1,e),Vt(t,e));break}}t=t.return}}function gI(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ot(),e.pingedLanes|=e.suspendedLanes&n,it===e&&(ht&n)===n&&(Ye===4||Ye===3&&(ht&130023424)===ht&&500>He()-ag?wi(e,0):sg|=n),Vt(e,t)}function HS(e,t){t===0&&(e.mode&1?(t=$l,$l<<=1,!($l&130023424)&&($l=4194304)):t=1);var n=Ot();e=Jn(e,t),e!==null&&(ja(e,t,n),Vt(e,n))}function vI(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),HS(e,n)}function yI(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(D(314))}r!==null&&r.delete(t),HS(e,n)}var WS;WS=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||jt.current)Ut=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ut=!1,oI(e,t,n);Ut=!!(e.flags&131072)}else Ut=!1,De&&t.flags&1048576&&KE(t,zu,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;cu(e,t),e=t.pendingProps;var i=Do(t,It.current);To(t,n),i=eg(null,t,r,e,i,n);var o=tg();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,zt(r)?(o=!0,Uu(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Qm(t),i.updater=qc,t.stateNode=i,i._reactInternals=t,tp(t,r,e,n),t=ip(null,t,r,!0,o,n)):(t.tag=0,De&&o&&Vm(t),Rt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(cu(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=EI(r),e=pn(r,e),i){case 0:t=rp(null,t,r,e,n);break e;case 1:t=ny(null,t,r,e,n);break e;case 11:t=ey(null,t,r,e,n);break e;case 14:t=ty(null,t,r,pn(r.type,e),n);break e}throw Error(D(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:pn(r,i),rp(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:pn(r,i),ny(e,t,r,i,n);case 3:e:{if(IS(t),e===null)throw Error(D(387));r=t.pendingProps,o=t.memoizedState,i=o.element,JE(e,t),Hu(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Uo(Error(D(423)),t),t=ry(e,t,r,n,i);break e}else if(r!==i){i=Uo(Error(D(424)),t),t=ry(e,t,r,n,i);break e}else for(Wt=$r(t.stateNode.containerInfo.firstChild),qt=t,De=!0,gn=null,n=nS(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Mo(),r===i){t=Zn(e,t,n);break e}Rt(e,t,r,n)}t=t.child}return t;case 5:return rS(t),e===null&&Jf(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Gf(r,i)?s=null:o!==null&&Gf(r,o)&&(t.flags|=32),kS(e,t),Rt(e,t,s,n),t.child;case 6:return e===null&&Jf(t),null;case 13:return $S(e,t,n);case 4:return Ym(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Lo(t,null,r,n):Rt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:pn(r,i),ey(e,t,r,i,n);case 7:return Rt(e,t,t.pendingProps,n),t.child;case 8:return Rt(e,t,t.pendingProps.children,n),t.child;case 12:return Rt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,$e(Vu,r._currentValue),r._currentValue=s,o!==null)if(bn(o.value,s)){if(o.children===i.children&&!jt.current){t=Zn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Qn(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Zf(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(D(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Zf(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Rt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,To(t,n),i=an(i),r=r(i),t.flags|=1,Rt(e,t,r,n),t.child;case 14:return r=t.type,i=pn(r,t.pendingProps),i=pn(r.type,i),ty(e,t,r,i,n);case 15:return CS(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:pn(r,i),cu(e,t),t.tag=1,zt(r)?(e=!0,Uu(t)):e=!1,To(t,n),eS(t,r,i),tp(t,r,i,n),ip(null,t,r,!0,e,n);case 19:return AS(e,t,n);case 22:return _S(e,t,n)}throw Error(D(156,t.tag))};function qS(e,t){return yE(e,t)}function wI(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nn(e,t,n,r){return new wI(e,t,n,r)}function dg(e){return e=e.prototype,!(!e||!e.isReactComponent)}function EI(e){if(typeof e=="function")return dg(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Am)return 11;if(e===Rm)return 14}return 2}function Or(e,t){var n=e.alternate;return n===null?(n=nn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function fu(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")dg(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case io:return Ei(n.children,i,o,t);case $m:s=8,i|=8;break;case Cf:return e=nn(12,n,t,i|2),e.elementType=Cf,e.lanes=o,e;case _f:return e=nn(13,n,t,i),e.elementType=_f,e.lanes=o,e;case kf:return e=nn(19,n,t,i),e.elementType=kf,e.lanes=o,e;case tE:return Yc(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Zw:s=10;break e;case eE:s=9;break e;case Am:s=11;break e;case Rm:s=14;break e;case mr:s=16,r=null;break e}throw Error(D(130,e==null?e:typeof e,""))}return t=nn(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Ei(e,t,n,r){return e=nn(7,e,r,t),e.lanes=n,e}function Yc(e,t,n,r){return e=nn(22,e,r,t),e.elementType=tE,e.lanes=n,e.stateNode={isHidden:!1},e}function Nh(e,t,n){return e=nn(6,e,null,t),e.lanes=n,e}function Oh(e,t,n){return t=nn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function SI(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fh(0),this.expirationTimes=fh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function hg(e,t,n,r,i,o,s,a,l){return e=new SI(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=nn(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qm(o),e}function bI(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ro,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function GS(e){if(!e)return qr;e=e._reactInternals;e:{if(zi(e)!==e||e.tag!==1)throw Error(D(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(zt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(D(171))}if(e.tag===1){var n=e.type;if(zt(n))return qE(e,n,t)}return t}function KS(e,t,n,r,i,o,s,a,l){return e=hg(n,r,!0,e,i,o,s,a,l),e.context=GS(null),n=e.current,r=Ot(),i=Nr(n),o=Qn(r,i),o.callback=t??null,Ar(n,o,i),e.current.lanes=i,ja(e,i,r),Vt(e,r),e}function Xc(e,t,n,r){var i=t.current,o=Ot(),s=Nr(i);return n=GS(n),t.context===null?t.context=n:t.pendingContext=n,t=Qn(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ar(i,t,s),e!==null&&(En(e,i,s,o),au(e,i,s)),s}function Ju(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function fy(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function fg(e,t){fy(e,t),(e=e.alternate)&&fy(e,t)}function TI(){return null}var QS=typeof reportError=="function"?reportError:function(e){console.error(e)};function pg(e){this._internalRoot=e}Jc.prototype.render=pg.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(D(409));Xc(e,t,null,null)};Jc.prototype.unmount=pg.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;$i(function(){Xc(null,e,null,null)}),t[Xn]=null}};function Jc(e){this._internalRoot=e}Jc.prototype.unstable_scheduleHydration=function(e){if(e){var t=CE();e={blockedOn:null,target:e,priority:t};for(var n=0;n<vr.length&&t!==0&&t<vr[n].priority;n++);vr.splice(n,0,e),n===0&&kE(e)}};function mg(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Zc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function py(){}function xI(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Ju(s);o.call(u)}}var s=KS(t,r,e,0,null,!1,!1,"",py);return e._reactRootContainer=s,e[Xn]=s.current,la(e.nodeType===8?e.parentNode:e),$i(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Ju(l);a.call(u)}}var l=hg(e,0,!1,null,null,!1,!1,"",py);return e._reactRootContainer=l,e[Xn]=l.current,la(e.nodeType===8?e.parentNode:e),$i(function(){Xc(t,l,n,r)}),l}function ed(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=Ju(s);a.call(l)}}Xc(t,s,e,i)}else s=xI(n,t,e,i,r);return Ju(s)}TE=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=$s(t.pendingLanes);n!==0&&(Pm(t,n|1),Vt(t,He()),!(we&6)&&(jo=He()+500,ni()))}break;case 13:$i(function(){var r=Jn(e,1);if(r!==null){var i=Ot();En(r,e,1,i)}}),fg(e,1)}};Dm=function(e){if(e.tag===13){var t=Jn(e,134217728);if(t!==null){var n=Ot();En(t,e,134217728,n)}fg(e,134217728)}};xE=function(e){if(e.tag===13){var t=Nr(e),n=Jn(e,t);if(n!==null){var r=Ot();En(n,e,t,r)}fg(e,t)}};CE=function(){return xe};_E=function(e,t){var n=xe;try{return xe=e,t()}finally{xe=n}};Lf=function(e,t,n){switch(t){case"input":if(Af(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Hc(r);if(!i)throw Error(D(90));rE(r),Af(r,i)}}}break;case"textarea":oE(e,n);break;case"select":t=n.value,t!=null&&wo(e,!!n.multiple,t,!1)}};hE=lg;fE=$i;var CI={usingClientEntryPoint:!1,Events:[Va,lo,Hc,cE,dE,lg]},Ts={findFiberByHostInstance:hi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},_I={bundleType:Ts.bundleType,version:Ts.version,rendererPackageName:Ts.rendererPackageName,rendererConfig:Ts.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ar.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=gE(e),e===null?null:e.stateNode},findFiberByHostInstance:Ts.findFiberByHostInstance||TI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jl.isDisabled&&jl.supportsFiber)try{jc=jl.inject(_I),Rn=jl}catch{}}Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=CI;Yt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mg(t))throw Error(D(200));return bI(e,t,null,n)};Yt.createRoot=function(e,t){if(!mg(e))throw Error(D(299));var n=!1,r="",i=QS;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=hg(e,1,!1,null,null,n,!1,r,i),e[Xn]=t.current,la(e.nodeType===8?e.parentNode:e),new pg(t)};Yt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(D(188)):(e=Object.keys(e).join(","),Error(D(268,e)));return e=gE(t),e=e===null?null:e.stateNode,e};Yt.flushSync=function(e){return $i(e)};Yt.hydrate=function(e,t,n){if(!Zc(t))throw Error(D(200));return ed(null,e,t,!0,n)};Yt.hydrateRoot=function(e,t,n){if(!mg(e))throw Error(D(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=QS;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=KS(t,null,e,1,n??null,i,!1,o,s),e[Xn]=t.current,la(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Jc(t)};Yt.render=function(e,t,n){if(!Zc(t))throw Error(D(200));return ed(null,e,t,!1,n)};Yt.unmountComponentAtNode=function(e){if(!Zc(e))throw Error(D(40));return e._reactRootContainer?($i(function(){ed(null,null,e,!1,function(){e._reactRootContainer=null,e[Xn]=null})}),!0):!1};Yt.unstable_batchedUpdates=lg;Yt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Zc(n))throw Error(D(200));if(e==null||e._reactInternals===void 0)throw Error(D(38));return ed(e,t,n,!1,r)};Yt.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Yt})(T_);const kI=zw(xi);var my=xi;bf.createRoot=my.createRoot,bf.hydrateRoot=my.hydrateRoot;var gp={},II={get exports(){return gp},set exports(e){gp=e}},YS={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zo=w;function $I(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var AI=typeof Object.is=="function"?Object.is:$I,RI=zo.useState,NI=zo.useEffect,OI=zo.useLayoutEffect,PI=zo.useDebugValue;function DI(e,t){var n=t(),r=RI({inst:{value:n,getSnapshot:t}}),i=r[0].inst,o=r[1];return OI(function(){i.value=n,i.getSnapshot=t,Ph(i)&&o({inst:i})},[e,n,t]),NI(function(){return Ph(i)&&o({inst:i}),e(function(){Ph(i)&&o({inst:i})})},[e]),PI(n),n}function Ph(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!AI(e,n)}catch{return!0}}function MI(e,t){return t()}var LI=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?MI:DI;YS.useSyncExternalStore=zo.useSyncExternalStore!==void 0?zo.useSyncExternalStore:LI;(function(e){e.exports=YS})(II);var vp={},FI={get exports(){return vp},set exports(e){vp=e}},XS={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var td=w,UI=gp;function jI(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var zI=typeof Object.is=="function"?Object.is:jI,VI=UI.useSyncExternalStore,BI=td.useRef,HI=td.useEffect,WI=td.useMemo,qI=td.useDebugValue;XS.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=BI(null);if(o.current===null){var s={hasValue:!1,value:null};o.current=s}else s=o.current;o=WI(function(){function l(f){if(!u){if(u=!0,c=f,f=r(f),i!==void 0&&s.hasValue){var v=s.value;if(i(v,f))return d=v}return d=f}if(v=d,zI(c,f))return v;var p=r(f);return i!==void 0&&i(v,p)?v:(c=f,d=p)}var u=!1,c,d,h=n===void 0?null:n;return[function(){return l(t())},h===null?void 0:function(){return l(h())}]},[t,n,r,i]);var a=VI(e,o[0],o[1]);return HI(function(){s.hasValue=!0,s.value=a},[a]),qI(a),a};(function(e){e.exports=XS})(FI);function GI(e){e()}let JS=GI;const KI=e=>JS=e,QI=()=>JS,Gr=w.createContext(null);function ZS(){return w.useContext(Gr)}const YI=()=>{throw new Error("uSES not initialized!")};let e2=YI;const XI=e=>{e2=e},JI=(e,t)=>e===t;function ZI(e=Gr){const t=e===Gr?ZS:()=>w.useContext(e);return function(r,i=JI){const{store:o,subscription:s,getServerState:a}=t(),l=e2(s.addNestedSub,o.getState,a||o.getState,r,i);return w.useDebugValue(l),l}}const lr=ZI();function Ce(){return Ce=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ce.apply(this,arguments)}var yp={},e$={get exports(){return yp},set exports(e){yp=e}},_e={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var st=typeof Symbol=="function"&&Symbol.for,gg=st?Symbol.for("react.element"):60103,vg=st?Symbol.for("react.portal"):60106,nd=st?Symbol.for("react.fragment"):60107,rd=st?Symbol.for("react.strict_mode"):60108,id=st?Symbol.for("react.profiler"):60114,od=st?Symbol.for("react.provider"):60109,sd=st?Symbol.for("react.context"):60110,yg=st?Symbol.for("react.async_mode"):60111,ad=st?Symbol.for("react.concurrent_mode"):60111,ld=st?Symbol.for("react.forward_ref"):60112,ud=st?Symbol.for("react.suspense"):60113,t$=st?Symbol.for("react.suspense_list"):60120,cd=st?Symbol.for("react.memo"):60115,dd=st?Symbol.for("react.lazy"):60116,n$=st?Symbol.for("react.block"):60121,r$=st?Symbol.for("react.fundamental"):60117,i$=st?Symbol.for("react.responder"):60118,o$=st?Symbol.for("react.scope"):60119;function Jt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case gg:switch(e=e.type,e){case yg:case ad:case nd:case id:case rd:case ud:return e;default:switch(e=e&&e.$$typeof,e){case sd:case ld:case dd:case cd:case od:return e;default:return t}}case vg:return t}}}function t2(e){return Jt(e)===ad}_e.AsyncMode=yg;_e.ConcurrentMode=ad;_e.ContextConsumer=sd;_e.ContextProvider=od;_e.Element=gg;_e.ForwardRef=ld;_e.Fragment=nd;_e.Lazy=dd;_e.Memo=cd;_e.Portal=vg;_e.Profiler=id;_e.StrictMode=rd;_e.Suspense=ud;_e.isAsyncMode=function(e){return t2(e)||Jt(e)===yg};_e.isConcurrentMode=t2;_e.isContextConsumer=function(e){return Jt(e)===sd};_e.isContextProvider=function(e){return Jt(e)===od};_e.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===gg};_e.isForwardRef=function(e){return Jt(e)===ld};_e.isFragment=function(e){return Jt(e)===nd};_e.isLazy=function(e){return Jt(e)===dd};_e.isMemo=function(e){return Jt(e)===cd};_e.isPortal=function(e){return Jt(e)===vg};_e.isProfiler=function(e){return Jt(e)===id};_e.isStrictMode=function(e){return Jt(e)===rd};_e.isSuspense=function(e){return Jt(e)===ud};_e.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===nd||e===ad||e===id||e===rd||e===ud||e===t$||typeof e=="object"&&e!==null&&(e.$$typeof===dd||e.$$typeof===cd||e.$$typeof===od||e.$$typeof===sd||e.$$typeof===ld||e.$$typeof===r$||e.$$typeof===i$||e.$$typeof===o$||e.$$typeof===n$)};_e.typeOf=Jt;(function(e){e.exports=_e})(e$);var wg=yp,s$={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a$={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},l$={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},n2={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Eg={};Eg[wg.ForwardRef]=l$;Eg[wg.Memo]=n2;function gy(e){return wg.isMemo(e)?n2:Eg[e.$$typeof]||s$}var u$=Object.defineProperty,c$=Object.getOwnPropertyNames,vy=Object.getOwnPropertySymbols,d$=Object.getOwnPropertyDescriptor,h$=Object.getPrototypeOf,yy=Object.prototype;function r2(e,t,n){if(typeof t!="string"){if(yy){var r=h$(t);r&&r!==yy&&r2(e,r,n)}var i=c$(t);vy&&(i=i.concat(vy(t)));for(var o=gy(e),s=gy(t),a=0;a<i.length;++a){var l=i[a];if(!a$[l]&&!(n&&n[l])&&!(s&&s[l])&&!(o&&o[l])){var u=d$(t,l);try{u$(e,l,u)}catch{}}}}return e}var f$=r2,Zu={},p$={get exports(){return Zu},set exports(e){Zu=e}},ke={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sg=Symbol.for("react.element"),bg=Symbol.for("react.portal"),hd=Symbol.for("react.fragment"),fd=Symbol.for("react.strict_mode"),pd=Symbol.for("react.profiler"),md=Symbol.for("react.provider"),gd=Symbol.for("react.context"),m$=Symbol.for("react.server_context"),vd=Symbol.for("react.forward_ref"),yd=Symbol.for("react.suspense"),wd=Symbol.for("react.suspense_list"),Ed=Symbol.for("react.memo"),Sd=Symbol.for("react.lazy"),g$=Symbol.for("react.offscreen"),i2;i2=Symbol.for("react.module.reference");function cn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Sg:switch(e=e.type,e){case hd:case pd:case fd:case yd:case wd:return e;default:switch(e=e&&e.$$typeof,e){case m$:case gd:case vd:case Sd:case Ed:case md:return e;default:return t}}case bg:return t}}}ke.ContextConsumer=gd;ke.ContextProvider=md;ke.Element=Sg;ke.ForwardRef=vd;ke.Fragment=hd;ke.Lazy=Sd;ke.Memo=Ed;ke.Portal=bg;ke.Profiler=pd;ke.StrictMode=fd;ke.Suspense=yd;ke.SuspenseList=wd;ke.isAsyncMode=function(){return!1};ke.isConcurrentMode=function(){return!1};ke.isContextConsumer=function(e){return cn(e)===gd};ke.isContextProvider=function(e){return cn(e)===md};ke.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Sg};ke.isForwardRef=function(e){return cn(e)===vd};ke.isFragment=function(e){return cn(e)===hd};ke.isLazy=function(e){return cn(e)===Sd};ke.isMemo=function(e){return cn(e)===Ed};ke.isPortal=function(e){return cn(e)===bg};ke.isProfiler=function(e){return cn(e)===pd};ke.isStrictMode=function(e){return cn(e)===fd};ke.isSuspense=function(e){return cn(e)===yd};ke.isSuspenseList=function(e){return cn(e)===wd};ke.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===hd||e===pd||e===fd||e===yd||e===wd||e===g$||typeof e=="object"&&e!==null&&(e.$$typeof===Sd||e.$$typeof===Ed||e.$$typeof===md||e.$$typeof===gd||e.$$typeof===vd||e.$$typeof===i2||e.getModuleId!==void 0)};ke.typeOf=cn;(function(e){e.exports=ke})(p$);function v$(){const e=QI();let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let r=t;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=t;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,o=n={callback:r,next:null,prev:n};return o.prev?o.prev.next=o:t=o,function(){!i||t===null||(i=!1,o.next?o.next.prev=o.prev:n=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}const wy={notify(){},get:()=>[]};function y$(e,t){let n,r=wy;function i(d){return l(),r.subscribe(d)}function o(){r.notify()}function s(){c.onStateChange&&c.onStateChange()}function a(){return Boolean(n)}function l(){n||(n=t?t.addNestedSub(s):e.subscribe(s),r=v$())}function u(){n&&(n(),n=void 0,r.clear(),r=wy)}const c={addNestedSub:i,notifyNestedSubs:o,handleChangeWrapper:s,isSubscribed:a,trySubscribe:l,tryUnsubscribe:u,getListeners:()=>r};return c}const w$=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",E$=w$?w.useLayoutEffect:w.useEffect;function S$({store:e,context:t,children:n,serverState:r}){const i=w.useMemo(()=>{const a=y$(e);return{store:e,subscription:a,getServerState:r?()=>r:void 0}},[e,r]),o=w.useMemo(()=>e.getState(),[e]);E$(()=>{const{subscription:a}=i;return a.onStateChange=a.notifyNestedSubs,a.trySubscribe(),o!==e.getState()&&a.notifyNestedSubs(),()=>{a.tryUnsubscribe(),a.onStateChange=void 0}},[i,o]);const s=t||Gr;return ve.createElement(s.Provider,{value:i},n)}function o2(e=Gr){const t=e===Gr?ZS:()=>w.useContext(e);return function(){const{store:r}=t();return r}}const b$=o2();function T$(e=Gr){const t=e===Gr?b$:o2(e);return function(){return t().dispatch}}const s2=T$();XI(vp.useSyncExternalStoreWithSelector);KI(xi.unstable_batchedUpdates);var x$=function(t,n,r,i){var o=r?r.call(i,t,n):void 0;if(o!==void 0)return!!o;if(t===n)return!0;if(typeof t!="object"||!t||typeof n!="object"||!n)return!1;var s=Object.keys(t),a=Object.keys(n);if(s.length!==a.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(n),u=0;u<s.length;u++){var c=s[u];if(!l(c))return!1;var d=t[c],h=n[c];if(o=r?r.call(i,d,h,c):void 0,o===!1||o===void 0&&d!==h)return!1}return!0};function C$(e){function t(R,F,V,Y,x){for(var le=0,U=0,ce=0,ue=0,ye,ne,at=0,Mt=0,Ee,vt=Ee=ye=0,be=0,lt=0,ps=0,ut=0,Tl=V.length,ms=Tl-1,hn,oe="",Ve="",sh="",ah="",dr;be<Tl;){if(ne=V.charCodeAt(be),be===ms&&U+ue+ce+le!==0&&(U!==0&&(ne=U===47?10:47),ue=ce=le=0,Tl++,ms++),U+ue+ce+le===0){if(be===ms&&(0<lt&&(oe=oe.replace(h,"")),0<oe.trim().length)){switch(ne){case 32:case 9:case 59:case 13:case 10:break;default:oe+=V.charAt(be)}ne=59}switch(ne){case 123:for(oe=oe.trim(),ye=oe.charCodeAt(0),Ee=1,ut=++be;be<Tl;){switch(ne=V.charCodeAt(be)){case 123:Ee++;break;case 125:Ee--;break;case 47:switch(ne=V.charCodeAt(be+1)){case 42:case 47:e:{for(vt=be+1;vt<ms;++vt)switch(V.charCodeAt(vt)){case 47:if(ne===42&&V.charCodeAt(vt-1)===42&&be+2!==vt){be=vt+1;break e}break;case 10:if(ne===47){be=vt+1;break e}}be=vt}}break;case 91:ne++;case 40:ne++;case 34:case 39:for(;be++<ms&&V.charCodeAt(be)!==ne;);}if(Ee===0)break;be++}switch(Ee=V.substring(ut,be),ye===0&&(ye=(oe=oe.replace(d,"").trim()).charCodeAt(0)),ye){case 64:switch(0<lt&&(oe=oe.replace(h,"")),ne=oe.charCodeAt(1),ne){case 100:case 109:case 115:case 45:lt=F;break;default:lt=J}if(Ee=t(F,lt,Ee,ne,x+1),ut=Ee.length,0<_&&(lt=n(J,oe,ps),dr=a(3,Ee,lt,F,G,Oe,ut,ne,x,Y),oe=lt.join(""),dr!==void 0&&(ut=(Ee=dr.trim()).length)===0&&(ne=0,Ee="")),0<ut)switch(ne){case 115:oe=oe.replace(A,s);case 100:case 109:case 45:Ee=oe+"{"+Ee+"}";break;case 107:oe=oe.replace(g,"$1 $2"),Ee=oe+"{"+Ee+"}",Ee=O===1||O===2&&o("@"+Ee,3)?"@-webkit-"+Ee+"@"+Ee:"@"+Ee;break;default:Ee=oe+Ee,Y===112&&(Ee=(Ve+=Ee,""))}else Ee="";break;default:Ee=t(F,n(F,oe,ps),Ee,Y,x+1)}sh+=Ee,Ee=ps=lt=vt=ye=0,oe="",ne=V.charCodeAt(++be);break;case 125:case 59:if(oe=(0<lt?oe.replace(h,""):oe).trim(),1<(ut=oe.length))switch(vt===0&&(ye=oe.charCodeAt(0),ye===45||96<ye&&123>ye)&&(ut=(oe=oe.replace(" ",":")).length),0<_&&(dr=a(1,oe,F,R,G,Oe,Ve.length,Y,x,Y))!==void 0&&(ut=(oe=dr.trim()).length)===0&&(oe="\0\0"),ye=oe.charCodeAt(0),ne=oe.charCodeAt(1),ye){case 0:break;case 64:if(ne===105||ne===99){ah+=oe+V.charAt(be);break}default:oe.charCodeAt(ut-1)!==58&&(Ve+=i(oe,ye,ne,oe.charCodeAt(2)))}ps=lt=vt=ye=0,oe="",ne=V.charCodeAt(++be)}}switch(ne){case 13:case 10:U===47?U=0:1+ye===0&&Y!==107&&0<oe.length&&(lt=1,oe+="\0"),0<_*B&&a(0,oe,F,R,G,Oe,Ve.length,Y,x,Y),Oe=1,G++;break;case 59:case 125:if(U+ue+ce+le===0){Oe++;break}default:switch(Oe++,hn=V.charAt(be),ne){case 9:case 32:if(ue+le+U===0)switch(at){case 44:case 58:case 9:case 32:hn="";break;default:ne!==32&&(hn=" ")}break;case 0:hn="\\0";break;case 12:hn="\\f";break;case 11:hn="\\v";break;case 38:ue+U+le===0&&(lt=ps=1,hn="\f"+hn);break;case 108:if(ue+U+le+z===0&&0<vt)switch(be-vt){case 2:at===112&&V.charCodeAt(be-3)===58&&(z=at);case 8:Mt===111&&(z=Mt)}break;case 58:ue+U+le===0&&(vt=be);break;case 44:U+ce+ue+le===0&&(lt=1,hn+="\r");break;case 34:case 39:U===0&&(ue=ue===ne?0:ue===0?ne:ue);break;case 91:ue+U+ce===0&&le++;break;case 93:ue+U+ce===0&&le--;break;case 41:ue+U+le===0&&ce--;break;case 40:if(ue+U+le===0){if(ye===0)switch(2*at+3*Mt){case 533:break;default:ye=1}ce++}break;case 64:U+ce+ue+le+vt+Ee===0&&(Ee=1);break;case 42:case 47:if(!(0<ue+le+ce))switch(U){case 0:switch(2*ne+3*V.charCodeAt(be+1)){case 235:U=47;break;case 220:ut=be,U=42}break;case 42:ne===47&&at===42&&ut+2!==be&&(V.charCodeAt(ut+2)===33&&(Ve+=V.substring(ut,be+1)),hn="",U=0)}}U===0&&(oe+=hn)}Mt=at,at=ne,be++}if(ut=Ve.length,0<ut){if(lt=F,0<_&&(dr=a(2,Ve,lt,R,G,Oe,ut,Y,x,Y),dr!==void 0&&(Ve=dr).length===0))return ah+Ve+sh;if(Ve=lt.join(",")+"{"+Ve+"}",O*z!==0){switch(O!==2||o(Ve,2)||(z=0),z){case 111:Ve=Ve.replace(b,":-moz-$1")+Ve;break;case 112:Ve=Ve.replace(E,"::-webkit-input-$1")+Ve.replace(E,"::-moz-$1")+Ve.replace(E,":-ms-input-$1")+Ve}z=0}}return ah+Ve+sh}function n(R,F,V){var Y=F.trim().split(S);F=Y;var x=Y.length,le=R.length;switch(le){case 0:case 1:var U=0;for(R=le===0?"":R[0]+" ";U<x;++U)F[U]=r(R,F[U],V).trim();break;default:var ce=U=0;for(F=[];U<x;++U)for(var ue=0;ue<le;++ue)F[ce++]=r(R[ue]+" ",Y[U],V).trim()}return F}function r(R,F,V){var Y=F.charCodeAt(0);switch(33>Y&&(Y=(F=F.trim()).charCodeAt(0)),Y){case 38:return F.replace(y,"$1"+R.trim());case 58:return R.trim()+F.replace(y,"$1"+R.trim());default:if(0<1*V&&0<F.indexOf("\f"))return F.replace(y,(R.charCodeAt(0)===58?"":"$1")+R.trim())}return R+F}function i(R,F,V,Y){var x=R+";",le=2*F+3*V+4*Y;if(le===944){R=x.indexOf(":",9)+1;var U=x.substring(R,x.length-1).trim();return U=x.substring(0,R).trim()+U+";",O===1||O===2&&o(U,1)?"-webkit-"+U+U:U}if(O===0||O===2&&!o(x,1))return x;switch(le){case 1015:return x.charCodeAt(10)===97?"-webkit-"+x+x:x;case 951:return x.charCodeAt(3)===116?"-webkit-"+x+x:x;case 963:return x.charCodeAt(5)===110?"-webkit-"+x+x:x;case 1009:if(x.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+x+x;case 978:return"-webkit-"+x+"-moz-"+x+x;case 1019:case 983:return"-webkit-"+x+"-moz-"+x+"-ms-"+x+x;case 883:if(x.charCodeAt(8)===45)return"-webkit-"+x+x;if(0<x.indexOf("image-set(",11))return x.replace(me,"$1-webkit-$2")+x;break;case 932:if(x.charCodeAt(4)===45)switch(x.charCodeAt(5)){case 103:return"-webkit-box-"+x.replace("-grow","")+"-webkit-"+x+"-ms-"+x.replace("grow","positive")+x;case 115:return"-webkit-"+x+"-ms-"+x.replace("shrink","negative")+x;case 98:return"-webkit-"+x+"-ms-"+x.replace("basis","preferred-size")+x}return"-webkit-"+x+"-ms-"+x+x;case 964:return"-webkit-"+x+"-ms-flex-"+x+x;case 1023:if(x.charCodeAt(8)!==99)break;return U=x.substring(x.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+U+"-webkit-"+x+"-ms-flex-pack"+U+x;case 1005:return v.test(x)?x.replace(f,":-webkit-")+x.replace(f,":-moz-")+x:x;case 1e3:switch(U=x.substring(13).trim(),F=U.indexOf("-")+1,U.charCodeAt(0)+U.charCodeAt(F)){case 226:U=x.replace(T,"tb");break;case 232:U=x.replace(T,"tb-rl");break;case 220:U=x.replace(T,"lr");break;default:return x}return"-webkit-"+x+"-ms-"+U+x;case 1017:if(x.indexOf("sticky",9)===-1)break;case 975:switch(F=(x=R).length-10,U=(x.charCodeAt(F)===33?x.substring(0,F):x).substring(R.indexOf(":",7)+1).trim(),le=U.charCodeAt(0)+(U.charCodeAt(7)|0)){case 203:if(111>U.charCodeAt(8))break;case 115:x=x.replace(U,"-webkit-"+U)+";"+x;break;case 207:case 102:x=x.replace(U,"-webkit-"+(102<le?"inline-":"")+"box")+";"+x.replace(U,"-webkit-"+U)+";"+x.replace(U,"-ms-"+U+"box")+";"+x}return x+";";case 938:if(x.charCodeAt(5)===45)switch(x.charCodeAt(6)){case 105:return U=x.replace("-items",""),"-webkit-"+x+"-webkit-box-"+U+"-ms-flex-"+U+x;case 115:return"-webkit-"+x+"-ms-flex-item-"+x.replace($,"")+x;default:return"-webkit-"+x+"-ms-flex-line-pack"+x.replace("align-content","").replace($,"")+x}break;case 973:case 989:if(x.charCodeAt(3)!==45||x.charCodeAt(4)===122)break;case 931:case 953:if(P.test(R)===!0)return(U=R.substring(R.indexOf(":")+1)).charCodeAt(0)===115?i(R.replace("stretch","fill-available"),F,V,Y).replace(":fill-available",":stretch"):x.replace(U,"-webkit-"+U)+x.replace(U,"-moz-"+U.replace("fill-",""))+x;break;case 962:if(x="-webkit-"+x+(x.charCodeAt(5)===102?"-ms-"+x:"")+x,V+Y===211&&x.charCodeAt(13)===105&&0<x.indexOf("transform",10))return x.substring(0,x.indexOf(";",27)+1).replace(p,"$1-webkit-$2")+x}return x}function o(R,F){var V=R.indexOf(F===1?":":"{"),Y=R.substring(0,F!==3?V:10);return V=R.substring(V+1,R.length-1),L(F!==2?Y:Y.replace(H,"$1"),V,F)}function s(R,F){var V=i(F,F.charCodeAt(0),F.charCodeAt(1),F.charCodeAt(2));return V!==F+";"?V.replace(I," or ($1)").substring(4):"("+F+")"}function a(R,F,V,Y,x,le,U,ce,ue,ye){for(var ne=0,at=F,Mt;ne<_;++ne)switch(Mt=j[ne].call(c,R,at,V,Y,x,le,U,ce,ue,ye)){case void 0:case!1:case!0:case null:break;default:at=Mt}if(at!==F)return at}function l(R){switch(R){case void 0:case null:_=j.length=0;break;default:if(typeof R=="function")j[_++]=R;else if(typeof R=="object")for(var F=0,V=R.length;F<V;++F)l(R[F]);else B=!!R|0}return l}function u(R){return R=R.prefix,R!==void 0&&(L=null,R?typeof R!="function"?O=1:(O=2,L=R):O=0),u}function c(R,F){var V=R;if(33>V.charCodeAt(0)&&(V=V.trim()),ee=V,V=[ee],0<_){var Y=a(-1,F,V,V,G,Oe,0,0,0,0);Y!==void 0&&typeof Y=="string"&&(F=Y)}var x=t(J,V,F,0,0);return 0<_&&(Y=a(-2,x,V,V,G,Oe,x.length,0,0,0),Y!==void 0&&(x=Y)),ee="",z=0,Oe=G=1,x}var d=/^\0+/g,h=/[\0\r\f]/g,f=/: */g,v=/zoo|gra/,p=/([,: ])(transform)/g,S=/,\r+?/g,y=/([\t\r\n ])*\f?&/g,g=/@(k\w+)\s*(\S*)\s*/,E=/::(place)/g,b=/:(read-only)/g,T=/[svh]\w+-[tblr]{2}/,A=/\(\s*(.*)\s*\)/g,I=/([\s\S]*?);/g,$=/-self|flex-/g,H=/[^]*?(:[rp][el]a[\w-]+)[^]*/,P=/stretch|:\s*\w+\-(?:conte|avail)/,me=/([^-])(image-set\()/,Oe=1,G=1,z=0,O=1,J=[],j=[],_=0,L=null,B=0,ee="";return c.use=l,c.set=u,e!==void 0&&u(e),c}var _$={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function k$(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var I$=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Ey=k$(function(e){return I$.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function yn(){return(yn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Sy=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},wp=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Zu.typeOf(e)},ec=Object.freeze([]),Pr=Object.freeze({});function Vo(e){return typeof e=="function"}function by(e){return e.displayName||e.name||"Component"}function Tg(e){return e&&typeof e.styledComponentId=="string"}var Bo=typeof process<"u"&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",xg=typeof window<"u"&&"HTMLElement"in window,$$=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1),A$={};function Ai(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var R$=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,s=o;n>=s;)(s<<=1)<0&&Ai(16,""+n);this.groupSizes=new Uint32Array(s),this.groupSizes.set(i),this.length=s;for(var a=o;a<s;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var s=i;s<o;s++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),s=o+i,a=o;a<s;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},e}(),pu=new Map,tc=new Map,Gs=1,zl=function(e){if(pu.has(e))return pu.get(e);for(;tc.has(Gs);)Gs++;var t=Gs++;return pu.set(e,t),tc.set(t,e),t},N$=function(e){return tc.get(e)},O$=function(e,t){t>=Gs&&(Gs=t+1),pu.set(e,t),tc.set(t,e)},P$="style["+Bo+'][data-styled-version="5.3.6"]',D$=new RegExp("^"+Bo+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),M$=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},L$=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var s=n[i].trim();if(s){var a=s.match(D$);if(a){var l=0|parseInt(a[1],10),u=a[2];l!==0&&(O$(u,l),M$(e,u,a[3]),e.getTag().insertRules(l,r)),r.length=0}else r.push(s)}}},F$=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},a2=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){for(var l=a.childNodes,u=l.length;u>=0;u--){var c=l[u];if(c&&c.nodeType===1&&c.hasAttribute(Bo))return c}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Bo,"active"),r.setAttribute("data-styled-version","5.3.6");var s=F$();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},U$=function(){function e(n){var r=this.element=a2(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,s=0,a=o.length;s<a;s++){var l=o[s];if(l.ownerNode===i)return l}Ai(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),j$=function(){function e(n){var r=this.element=a2(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),z$=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Ty=xg,V$={isServer:!xg,useCSSOMInjection:!$$},nc=function(){function e(n,r,i){n===void 0&&(n=Pr),r===void 0&&(r={}),this.options=yn({},V$,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&xg&&Ty&&(Ty=!1,function(o){for(var s=document.querySelectorAll(P$),a=0,l=s.length;a<l;a++){var u=s[a];u&&u.getAttribute(Bo)!=="active"&&(L$(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return zl(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(yn({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,s=r.target,n=i?new z$(s):o?new U$(s):new j$(s),new R$(n)));var n,r,i,o,s},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(zl(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(zl(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(zl(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",s=0;s<i;s++){var a=N$(s);if(a!==void 0){var l=n.names.get(a),u=r.getGroup(s);if(l&&u&&l.size){var c=Bo+".g"+s+'[id="'+a+'"]',d="";l!==void 0&&l.forEach(function(h){h.length>0&&(d+=h+",")}),o+=""+u+c+'{content:"'+d+`"}/*!sc*/
`}}}return o}(this)},e}(),B$=/(a)(d)/gi,xy=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ep(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=xy(t%52)+n;return(xy(t%52)+n).replace(B$,"$1-$2")}var go=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},l2=function(e){return go(5381,e)};function u2(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Vo(n)&&!Tg(n))return!1}return!0}var H$=l2("5.3.6"),W$=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&u2(t),this.componentId=n,this.baseHash=go(H$,n),this.baseStyle=r,nc.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var s=Ri(this.rules,t,n,r).join(""),a=Ep(go(this.baseHash,s)>>>0);if(!n.hasNameForId(i,a)){var l=r(s,"."+a,void 0,i);n.insertRules(i,a,l)}o.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,c=go(this.baseHash,r.hash),d="",h=0;h<u;h++){var f=this.rules[h];if(typeof f=="string")d+=f;else if(f){var v=Ri(f,t,n,r),p=Array.isArray(v)?v.join(""):v;c=go(c,p+h),d+=p}}if(d){var S=Ep(c>>>0);if(!n.hasNameForId(i,S)){var y=r(d,"."+S,void 0,i);n.insertRules(i,S,y)}o.push(S)}}return o.join(" ")},e}(),q$=/^\s*\/\/.*$/gm,G$=[":","[",".","#"];function K$(e){var t,n,r,i,o=e===void 0?Pr:e,s=o.options,a=s===void 0?Pr:s,l=o.plugins,u=l===void 0?ec:l,c=new C$(a),d=[],h=function(p){function S(y){if(y)try{p(y+"}")}catch{}}return function(y,g,E,b,T,A,I,$,H,P){switch(y){case 1:if(H===0&&g.charCodeAt(0)===64)return p(g+";"),"";break;case 2:if($===0)return g+"/*|*/";break;case 3:switch($){case 102:case 112:return p(E[0]+g),"";default:return g+(P===0?"/*|*/":"")}case-2:g.split("/*|*/}").forEach(S)}}}(function(p){d.push(p)}),f=function(p,S,y){return S===0&&G$.indexOf(y[n.length])!==-1||y.match(i)?p:"."+t};function v(p,S,y,g){g===void 0&&(g="&");var E=p.replace(q$,""),b=S&&y?y+" "+S+" { "+E+" }":E;return t=g,n=S,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(y||!S?"":S,b)}return c.use([].concat(u,[function(p,S,y){p===2&&y.length&&y[0].lastIndexOf(n)>0&&(y[0]=y[0].replace(r,f))},h,function(p){if(p===-2){var S=d;return d=[],S}}])),v.hash=u.length?u.reduce(function(p,S){return S.name||Ai(15),go(p,S.name)},5381).toString():"",v}var c2=ve.createContext();c2.Consumer;var d2=ve.createContext(),Q$=(d2.Consumer,new nc),Sp=K$();function h2(){return w.useContext(c2)||Q$}function f2(){return w.useContext(d2)||Sp}var Y$=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Sp);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.toString=function(){return Ai(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Sp),this.name+t.hash},e}(),X$=/([A-Z])/,J$=/([A-Z])/g,Z$=/^ms-/,eA=function(e){return"-"+e.toLowerCase()};function Cy(e){return X$.test(e)?e.replace(J$,eA).replace(Z$,"-ms-"):e}var _y=function(e){return e==null||e===!1||e===""};function Ri(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],s=0,a=e.length;s<a;s+=1)(i=Ri(e[s],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(_y(e))return"";if(Tg(e))return"."+e.styledComponentId;if(Vo(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var l=e(t);return Ri(l,t,n,r)}var u;return e instanceof Y$?n?(e.inject(n,r),e.getName(r)):e:wp(e)?function c(d,h){var f,v,p=[];for(var S in d)d.hasOwnProperty(S)&&!_y(d[S])&&(Array.isArray(d[S])&&d[S].isCss||Vo(d[S])?p.push(Cy(S)+":",d[S],";"):wp(d[S])?p.push.apply(p,c(d[S],S)):p.push(Cy(S)+": "+(f=S,(v=d[S])==null||typeof v=="boolean"||v===""?"":typeof v!="number"||v===0||f in _$?String(v).trim():v+"px")+";"));return h?[h+" {"].concat(p,["}"]):p}(e):e.toString()}var ky=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function p2(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Vo(e)||wp(e)?ky(Ri(Sy(ec,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:ky(Ri(Sy(e,n)))}var m2=function(e,t,n){return n===void 0&&(n=Pr),e.theme!==n.theme&&e.theme||t||n.theme},tA=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,nA=/(^-|-$)/g;function Dh(e){return e.replace(tA,"-").replace(nA,"")}var g2=function(e){return Ep(l2(e)>>>0)};function Vl(e){return typeof e=="string"&&!0}var bp=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},rA=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function iA(e,t,n){var r=e[n];bp(t)&&bp(r)?v2(r,t):e[n]=t}function v2(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var s=o[i];if(bp(s))for(var a in s)rA(a)&&iA(e,s[a],a)}return e}var va=ve.createContext();va.Consumer;function oA(e){var t=w.useContext(va),n=w.useMemo(function(){return function(r,i){if(!r)return Ai(14);if(Vo(r)){var o=r(i);return o}return Array.isArray(r)||typeof r!="object"?Ai(8):i?yn({},i,{},r):r}(e.theme,t)},[e.theme,t]);return e.children?ve.createElement(va.Provider,{value:n},e.children):null}var Mh={};function y2(e,t,n){var r=Tg(e),i=!Vl(e),o=t.attrs,s=o===void 0?ec:o,a=t.componentId,l=a===void 0?function(g,E){var b=typeof g!="string"?"sc":Dh(g);Mh[b]=(Mh[b]||0)+1;var T=b+"-"+g2("5.3.6"+b+Mh[b]);return E?E+"-"+T:T}(t.displayName,t.parentComponentId):a,u=t.displayName,c=u===void 0?function(g){return Vl(g)?"styled."+g:"Styled("+by(g)+")"}(e):u,d=t.displayName&&t.componentId?Dh(t.displayName)+"-"+t.componentId:t.componentId||l,h=r&&e.attrs?Array.prototype.concat(e.attrs,s).filter(Boolean):s,f=t.shouldForwardProp;r&&e.shouldForwardProp&&(f=t.shouldForwardProp?function(g,E,b){return e.shouldForwardProp(g,E,b)&&t.shouldForwardProp(g,E,b)}:e.shouldForwardProp);var v,p=new W$(n,d,r?e.componentStyle:void 0),S=p.isStatic&&s.length===0,y=function(g,E){return function(b,T,A,I){var $=b.attrs,H=b.componentStyle,P=b.defaultProps,me=b.foldedComponentIds,Oe=b.shouldForwardProp,G=b.styledComponentId,z=b.target,O=function(Y,x,le){Y===void 0&&(Y=Pr);var U=yn({},x,{theme:Y}),ce={};return le.forEach(function(ue){var ye,ne,at,Mt=ue;for(ye in Vo(Mt)&&(Mt=Mt(U)),Mt)U[ye]=ce[ye]=ye==="className"?(ne=ce[ye],at=Mt[ye],ne&&at?ne+" "+at:ne||at):Mt[ye]}),[U,ce]}(m2(T,w.useContext(va),P)||Pr,T,$),J=O[0],j=O[1],_=function(Y,x,le,U){var ce=h2(),ue=f2(),ye=x?Y.generateAndInjectStyles(Pr,ce,ue):Y.generateAndInjectStyles(le,ce,ue);return ye}(H,I,J),L=A,B=j.$as||T.$as||j.as||T.as||z,ee=Vl(B),R=j!==T?yn({},T,{},j):T,F={};for(var V in R)V[0]!=="$"&&V!=="as"&&(V==="forwardedAs"?F.as=R[V]:(Oe?Oe(V,Ey,B):!ee||Ey(V))&&(F[V]=R[V]));return T.style&&j.style!==T.style&&(F.style=yn({},T.style,{},j.style)),F.className=Array.prototype.concat(me,G,_!==G?_:null,T.className,j.className).filter(Boolean).join(" "),F.ref=L,w.createElement(B,F)}(v,g,E,S)};return y.displayName=c,(v=ve.forwardRef(y)).attrs=h,v.componentStyle=p,v.displayName=c,v.shouldForwardProp=f,v.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):ec,v.styledComponentId=d,v.target=r?e.target:e,v.withComponent=function(g){var E=t.componentId,b=function(A,I){if(A==null)return{};var $,H,P={},me=Object.keys(A);for(H=0;H<me.length;H++)$=me[H],I.indexOf($)>=0||(P[$]=A[$]);return P}(t,["componentId"]),T=E&&E+"-"+(Vl(g)?g:Dh(by(g)));return y2(g,yn({},b,{attrs:h,componentId:T}),n)},Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(g){this._foldedDefaultProps=r?v2({},e.defaultProps,g):g}}),v.toString=function(){return"."+v.styledComponentId},i&&f$(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),v}var Tp=function(e){return function t(n,r,i){if(i===void 0&&(i=Pr),!Zu.isValidElementType(r))return Ai(1,String(r));var o=function(){return n(r,i,p2.apply(void 0,arguments))};return o.withConfig=function(s){return t(n,r,yn({},i,{},s))},o.attrs=function(s){return t(n,r,yn({},i,{attrs:Array.prototype.concat(i.attrs,s).filter(Boolean)}))},o}(y2,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Tp[e]=Tp(e)});var sA=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=u2(n),nc.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,i,o){var s=o(Ri(this.rules,r,i,o).join(""),""),a=this.componentId+n;i.insertRules(a,a,s)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,i,o){n>2&&nc.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,o)},e}();function aA(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=p2.apply(void 0,[e].concat(n)),o="sc-global-"+g2(JSON.stringify(i)),s=new sA(i,o);function a(u){var c=h2(),d=f2(),h=w.useContext(va),f=w.useRef(c.allocateGSInstance(o)).current;return c.server&&l(f,u,c,h,d),w.useLayoutEffect(function(){if(!c.server)return l(f,u,c,h,d),function(){return s.removeStyles(f,c)}},[f,u,c,h,d]),null}function l(u,c,d,h,f){if(s.isStatic)s.renderStyles(u,A$,d,f);else{var v=yn({},c,{theme:m2(c,h,a.defaultProps)});s.renderStyles(u,v,d,f)}}return ve.memo(a)}const N=Tp,lA={bg:"#15202B",text:"#ffffff",bgHover:"#25303B",accent:"#1D9BF0",textAlt:"#8B98A5",retweet:"#00BA7C",like:"#F91880",accentHover:"rgba(29, 155, 240, 0.2)",likeHover:"rgba(249, 24, 128, 0.2)",retweetHover:"rgba(0, 186, 124, 0.2)",bg2:"#1E2732",bg2Hover:"#252E38",brandColor:"#dddddd",borderColor:"#5555"},w2={accentHover:"rgba(29, 155, 240, 0.2)",likeHover:"rgba(249, 24, 128, 0.2)",retweetHover:"rgba(0, 186, 124, 0.2)",bg:"#000000",text:"#ffffff",textAlt:"#71767B",bgHover:"#101010",accent:"#1D9BF0",retweet:"#00BA7C",like:"#F91880",bg2:"#16181C",bg2Hover:"#1D1F23",brandColor:"#ffffff",borderColor:"#222"},Ho={bg2Hover:"#EFF1F1",accentHover:"rgba(29, 155, 240, 0.2)",likeHover:"rgba(249, 24, 128, 0.2)",retweetHover:"rgba(0, 186, 124, 0.2)",textAlt:"#536471",bg:"#ffffff",text:"#000000",bgHover:"#efefef",accent:"#1D9BF0",brandColor:"#1D9BF0",retweet:"#00BA7C",borderColor:"#dddddd",bg2:"#F7F9F9",like:"#F91880"},uA=aA`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Inter', sans-serif;
  }

  body {
    background: ${({theme:e})=>e.bg};
    color: ${({theme:e})=>e.text};
  }

  #root {
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  button, a {
    cursor: pointer
  }
`;function vn(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function Kr(e){return!!e&&!!e[Pe]}function er(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var i=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===yA}(e)||Array.isArray(e)||!!e[Py]||!!(!((t=e.constructor)===null||t===void 0)&&t[Py])||Cg(e)||_g(e))}function Ni(e,t,n){n===void 0&&(n=!1),is(e)===0?(n?Object.keys:_o)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,i){return t(i,r,e)})}function is(e){var t=e[Pe];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:Cg(e)?2:_g(e)?3:0}function Co(e,t){return is(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function cA(e,t){return is(e)===2?e.get(t):e[t]}function E2(e,t,n){var r=is(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function S2(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function Cg(e){return gA&&e instanceof Map}function _g(e){return vA&&e instanceof Set}function ui(e){return e.o||e.t}function kg(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=T2(e);delete t[Pe];for(var n=_o(t),r=0;r<n.length;r++){var i=n[r],o=t[i];o.writable===!1&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function Ig(e,t){return t===void 0&&(t=!1),$g(e)||Kr(e)||!er(e)||(is(e)>1&&(e.set=e.add=e.clear=e.delete=dA),Object.freeze(e),t&&Ni(e,function(n,r){return Ig(r,!0)},!0)),e}function dA(){vn(2)}function $g(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function On(e){var t=kp[e];return t||vn(18,e),t}function hA(e,t){kp[e]||(kp[e]=t)}function xp(){return ya}function Lh(e,t){t&&(On("Patches"),e.u=[],e.s=[],e.v=t)}function rc(e){Cp(e),e.p.forEach(fA),e.p=null}function Cp(e){e===ya&&(ya=e.l)}function Iy(e){return ya={p:[],l:ya,h:e,m:!0,_:0}}function fA(e){var t=e[Pe];t.i===0||t.i===1?t.j():t.O=!0}function Fh(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.g||On("ES5").S(t,e,r),r?(n[Pe].P&&(rc(t),vn(4)),er(e)&&(e=ic(t,e),t.l||oc(t,e)),t.u&&On("Patches").M(n[Pe].t,e,t.u,t.s)):e=ic(t,n,[]),rc(t),t.u&&t.v(t.u,t.s),e!==b2?e:void 0}function ic(e,t,n){if($g(t))return t;var r=t[Pe];if(!r)return Ni(t,function(a,l){return $y(e,r,t,a,l,n)},!0),t;if(r.A!==e)return t;if(!r.P)return oc(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=kg(r.k):r.o,o=i,s=!1;r.i===3&&(o=new Set(i),i.clear(),s=!0),Ni(o,function(a,l){return $y(e,r,i,a,l,n,s)}),oc(e,i,!1),n&&e.u&&On("Patches").N(r,n,e.u,e.s)}return r.o}function $y(e,t,n,r,i,o,s){if(Kr(i)){var a=ic(e,i,o&&t&&t.i!==3&&!Co(t.R,r)?o.concat(r):void 0);if(E2(n,r,a),!Kr(a))return;e.m=!1}else s&&n.add(i);if(er(i)&&!$g(i)){if(!e.h.D&&e._<1)return;ic(e,i),t&&t.A.l||oc(e,i)}}function oc(e,t,n){n===void 0&&(n=!1),e.h.D&&e.m&&Ig(t,n)}function Uh(e,t){var n=e[Pe];return(n?ui(n):e)[t]}function Ay(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function wr(e){e.P||(e.P=!0,e.l&&wr(e.l))}function jh(e){e.o||(e.o=kg(e.t))}function _p(e,t,n){var r=Cg(t)?On("MapSet").F(t,n):_g(t)?On("MapSet").T(t,n):e.g?function(i,o){var s=Array.isArray(i),a={i:s?1:0,A:o?o.A:xp(),P:!1,I:!1,R:{},l:o,t:i,k:null,o:null,j:null,C:!1},l=a,u=wa;s&&(l=[a],u=Rs);var c=Proxy.revocable(l,u),d=c.revoke,h=c.proxy;return a.k=h,a.j=d,h}(t,n):On("ES5").J(t,n);return(n?n.A:xp()).p.push(r),r}function pA(e){return Kr(e)||vn(22,e),function t(n){if(!er(n))return n;var r,i=n[Pe],o=is(n);if(i){if(!i.P&&(i.i<4||!On("ES5").K(i)))return i.t;i.I=!0,r=Ry(n,o),i.I=!1}else r=Ry(n,o);return Ni(r,function(s,a){i&&cA(i.t,s)===a||E2(r,s,t(a))}),o===3?new Set(r):r}(e)}function Ry(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return kg(e)}function mA(){function e(o,s){var a=i[o];return a?a.enumerable=s:i[o]=a={configurable:!0,enumerable:s,get:function(){var l=this[Pe];return wa.get(l,o)},set:function(l){var u=this[Pe];wa.set(u,o,l)}},a}function t(o){for(var s=o.length-1;s>=0;s--){var a=o[s][Pe];if(!a.P)switch(a.i){case 5:r(a)&&wr(a);break;case 4:n(a)&&wr(a)}}}function n(o){for(var s=o.t,a=o.k,l=_o(a),u=l.length-1;u>=0;u--){var c=l[u];if(c!==Pe){var d=s[c];if(d===void 0&&!Co(s,c))return!0;var h=a[c],f=h&&h[Pe];if(f?f.t!==d:!S2(h,d))return!0}}var v=!!s[Pe];return l.length!==_o(s).length+(v?0:1)}function r(o){var s=o.k;if(s.length!==o.t.length)return!0;var a=Object.getOwnPropertyDescriptor(s,s.length-1);if(a&&!a.get)return!0;for(var l=0;l<s.length;l++)if(!s.hasOwnProperty(l))return!0;return!1}var i={};hA("ES5",{J:function(o,s){var a=Array.isArray(o),l=function(c,d){if(c){for(var h=Array(d.length),f=0;f<d.length;f++)Object.defineProperty(h,""+f,e(f,!0));return h}var v=T2(d);delete v[Pe];for(var p=_o(v),S=0;S<p.length;S++){var y=p[S];v[y]=e(y,c||!!v[y].enumerable)}return Object.create(Object.getPrototypeOf(d),v)}(a,o),u={i:a?5:4,A:s?s.A:xp(),P:!1,I:!1,R:{},l:s,t:o,k:l,o:null,O:!1,C:!1};return Object.defineProperty(l,Pe,{value:u,writable:!0}),l},S:function(o,s,a){a?Kr(s)&&s[Pe].A===o&&t(o.p):(o.u&&function l(u){if(u&&typeof u=="object"){var c=u[Pe];if(c){var d=c.t,h=c.k,f=c.R,v=c.i;if(v===4)Ni(h,function(E){E!==Pe&&(d[E]!==void 0||Co(d,E)?f[E]||l(h[E]):(f[E]=!0,wr(c)))}),Ni(d,function(E){h[E]!==void 0||Co(h,E)||(f[E]=!1,wr(c))});else if(v===5){if(r(c)&&(wr(c),f.length=!0),h.length<d.length)for(var p=h.length;p<d.length;p++)f[p]=!1;else for(var S=d.length;S<h.length;S++)f[S]=!0;for(var y=Math.min(h.length,d.length),g=0;g<y;g++)h.hasOwnProperty(g)||(f[g]=!0),f[g]===void 0&&l(h[g])}}}}(o.p[0]),t(o.p))},K:function(o){return o.i===4?n(o):r(o)}})}var Ny,ya,Ag=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",gA=typeof Map<"u",vA=typeof Set<"u",Oy=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",b2=Ag?Symbol.for("immer-nothing"):((Ny={})["immer-nothing"]=!0,Ny),Py=Ag?Symbol.for("immer-draftable"):"__$immer_draftable",Pe=Ag?Symbol.for("immer-state"):"__$immer_state",yA=""+Object.prototype.constructor,_o=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,T2=Object.getOwnPropertyDescriptors||function(e){var t={};return _o(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},kp={},wa={get:function(e,t){if(t===Pe)return e;var n=ui(e);if(!Co(n,t))return function(i,o,s){var a,l=Ay(o,s);return l?"value"in l?l.value:(a=l.get)===null||a===void 0?void 0:a.call(i.k):void 0}(e,n,t);var r=n[t];return e.I||!er(r)?r:r===Uh(e.t,t)?(jh(e),e.o[t]=_p(e.A.h,r,e)):r},has:function(e,t){return t in ui(e)},ownKeys:function(e){return Reflect.ownKeys(ui(e))},set:function(e,t,n){var r=Ay(ui(e),t);if(r!=null&&r.set)return r.set.call(e.k,n),!0;if(!e.P){var i=Uh(ui(e),t),o=i==null?void 0:i[Pe];if(o&&o.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(S2(n,i)&&(n!==void 0||Co(e.t,t)))return!0;jh(e),wr(e)}return e.o[t]===n&&(n!==void 0||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return Uh(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,jh(e),wr(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=ui(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){vn(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){vn(12)}},Rs={};Ni(wa,function(e,t){Rs[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),Rs.deleteProperty=function(e,t){return Rs.set.call(this,e,t,void 0)},Rs.set=function(e,t,n){return wa.set.call(this,e[0],t,n,e[0])};var wA=function(){function e(n){var r=this;this.g=Oy,this.D=!0,this.produce=function(i,o,s){if(typeof i=="function"&&typeof o!="function"){var a=o;o=i;var l=r;return function(p){var S=this;p===void 0&&(p=a);for(var y=arguments.length,g=Array(y>1?y-1:0),E=1;E<y;E++)g[E-1]=arguments[E];return l.produce(p,function(b){var T;return(T=o).call.apply(T,[S,b].concat(g))})}}var u;if(typeof o!="function"&&vn(6),s!==void 0&&typeof s!="function"&&vn(7),er(i)){var c=Iy(r),d=_p(r,i,void 0),h=!0;try{u=o(d),h=!1}finally{h?rc(c):Cp(c)}return typeof Promise<"u"&&u instanceof Promise?u.then(function(p){return Lh(c,s),Fh(p,c)},function(p){throw rc(c),p}):(Lh(c,s),Fh(u,c))}if(!i||typeof i!="object"){if((u=o(i))===void 0&&(u=i),u===b2&&(u=void 0),r.D&&Ig(u,!0),s){var f=[],v=[];On("Patches").M(i,u,f,v),s(f,v)}return u}vn(21,i)},this.produceWithPatches=function(i,o){if(typeof i=="function")return function(u){for(var c=arguments.length,d=Array(c>1?c-1:0),h=1;h<c;h++)d[h-1]=arguments[h];return r.produceWithPatches(u,function(f){return i.apply(void 0,[f].concat(d))})};var s,a,l=r.produce(i,o,function(u,c){s=u,a=c});return typeof Promise<"u"&&l instanceof Promise?l.then(function(u){return[u,s,a]}):[l,s,a]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){er(n)||vn(8),Kr(n)&&(n=pA(n));var r=Iy(this),i=_p(this,n,void 0);return i[Pe].C=!0,Cp(r),i},t.finishDraft=function(n,r){var i=n&&n[Pe],o=i.A;return Lh(o,r),Fh(void 0,o)},t.setAutoFreeze=function(n){this.D=n},t.setUseProxies=function(n){n&&!Oy&&vn(20),this.g=n},t.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var o=r[i];if(o.path.length===0&&o.op==="replace"){n=o.value;break}}i>-1&&(r=r.slice(i+1));var s=On("Patches").$;return Kr(n)?s(n,r):this.produce(n,function(a){return s(a,r)})},e}(),Kt=new wA,x2=Kt.produce;Kt.produceWithPatches.bind(Kt);Kt.setAutoFreeze.bind(Kt);Kt.setUseProxies.bind(Kt);Kt.applyPatches.bind(Kt);Kt.createDraft.bind(Kt);Kt.finishDraft.bind(Kt);function Ea(e){return Ea=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ea(e)}function EA(e,t){if(Ea(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Ea(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function SA(e){var t=EA(e,"string");return Ea(t)==="symbol"?t:String(t)}function bA(e,t,n){return t=SA(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Dy(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function My(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Dy(Object(n),!0).forEach(function(r){bA(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Dy(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Et(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var Ly=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),zh=function(){return Math.random().toString(36).substring(7).split("").join(".")},sc={INIT:"@@redux/INIT"+zh(),REPLACE:"@@redux/REPLACE"+zh(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+zh()}};function TA(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function C2(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Et(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Et(1));return n(C2)(e,t)}if(typeof e!="function")throw new Error(Et(2));var i=e,o=t,s=[],a=s,l=!1;function u(){a===s&&(a=s.slice())}function c(){if(l)throw new Error(Et(3));return o}function d(p){if(typeof p!="function")throw new Error(Et(4));if(l)throw new Error(Et(5));var S=!0;return u(),a.push(p),function(){if(S){if(l)throw new Error(Et(6));S=!1,u();var g=a.indexOf(p);a.splice(g,1),s=null}}}function h(p){if(!TA(p))throw new Error(Et(7));if(typeof p.type>"u")throw new Error(Et(8));if(l)throw new Error(Et(9));try{l=!0,o=i(o,p)}finally{l=!1}for(var S=s=a,y=0;y<S.length;y++){var g=S[y];g()}return p}function f(p){if(typeof p!="function")throw new Error(Et(10));i=p,h({type:sc.REPLACE})}function v(){var p,S=d;return p={subscribe:function(g){if(typeof g!="object"||g===null)throw new Error(Et(11));function E(){g.next&&g.next(c())}E();var b=S(E);return{unsubscribe:b}}},p[Ly]=function(){return this},p}return h({type:sc.INIT}),r={dispatch:h,subscribe:d,getState:c,replaceReducer:f},r[Ly]=v,r}function xA(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:sc.INIT});if(typeof r>"u")throw new Error(Et(12));if(typeof n(void 0,{type:sc.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Et(13))})}function CA(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];typeof e[i]=="function"&&(n[i]=e[i])}var o=Object.keys(n),s;try{xA(n)}catch(a){s=a}return function(l,u){if(l===void 0&&(l={}),s)throw s;for(var c=!1,d={},h=0;h<o.length;h++){var f=o[h],v=n[f],p=l[f],S=v(p,u);if(typeof S>"u")throw u&&u.type,new Error(Et(14));d[f]=S,c=c||S!==p}return c=c||o.length!==Object.keys(l).length,c?d:l}}function ac(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function _A(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),o=function(){throw new Error(Et(15))},s={getState:i.getState,dispatch:function(){return o.apply(void 0,arguments)}},a=t.map(function(l){return l(s)});return o=ac.apply(void 0,a)(i.dispatch),My(My({},i),{},{dispatch:o})}}}function _2(e){var t=function(r){var i=r.dispatch,o=r.getState;return function(s){return function(a){return typeof a=="function"?a(i,o,e):s(a)}}};return t}var k2=_2();k2.withExtraArgument=_2;const Fy=k2;var kA=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),IA=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(o=u[0]&2?i.return:u[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,u[1])).done)return o;switch(i=0,o&&(u=[u[0]&2,o.value]),u[0]){case 0:case 1:o=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!o||u[1]>o[0]&&u[1]<o[3])){n.label=u[1];break}if(u[0]===6&&n.label<o[1]){n.label=o[1],o=u;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(u);break}o[2]&&n.ops.pop(),n.trys.pop();continue}u=t.call(e,n)}catch(c){u=[6,c],i=0}finally{r=o=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}},lc=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e},$A=Object.defineProperty,AA=Object.defineProperties,RA=Object.getOwnPropertyDescriptors,Uy=Object.getOwnPropertySymbols,NA=Object.prototype.hasOwnProperty,OA=Object.prototype.propertyIsEnumerable,jy=function(e,t,n){return t in e?$A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},Dr=function(e,t){for(var n in t||(t={}))NA.call(t,n)&&jy(e,n,t[n]);if(Uy)for(var r=0,i=Uy(t);r<i.length;r++){var n=i[r];OA.call(t,n)&&jy(e,n,t[n])}return e},Vh=function(e,t){return AA(e,RA(t))},PA=function(e,t,n){return new Promise(function(r,i){var o=function(l){try{a(n.next(l))}catch(u){i(u)}},s=function(l){try{a(n.throw(l))}catch(u){i(u)}},a=function(l){return l.done?r(l.value):Promise.resolve(l.value).then(o,s)};a((n=n.apply(e,t)).next())})},DA=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?ac:ac.apply(null,arguments)};function MA(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var n=t;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return t===n}var LA=function(e){kA(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,lc([void 0],n[0].concat(this)))):new(t.bind.apply(t,lc([void 0],n.concat(this))))},t}(Array);function Ip(e){return er(e)?x2(e,function(){}):e}function FA(e){return typeof e=="boolean"}function UA(){return function(t){return jA(t)}}function jA(e){e===void 0&&(e={});var t=e.thunk,n=t===void 0?!0:t;e.immutableCheck,e.serializableCheck;var r=new LA;return n&&(FA(n)?r.push(Fy):r.push(Fy.withExtraArgument(n.extraArgument))),r}var zA=!0;function VA(e){var t=UA(),n=e||{},r=n.reducer,i=r===void 0?void 0:r,o=n.middleware,s=o===void 0?t():o,a=n.devTools,l=a===void 0?!0:a,u=n.preloadedState,c=u===void 0?void 0:u,d=n.enhancers,h=d===void 0?void 0:d,f;if(typeof i=="function")f=i;else if(MA(i))f=CA(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var v=s;typeof v=="function"&&(v=v(t));var p=_A.apply(void 0,v),S=ac;l&&(S=DA(Dr({trace:!zA},typeof l=="object"&&l)));var y=[p];Array.isArray(h)?y=lc([p],h):typeof h=="function"&&(y=h(y));var g=S.apply(void 0,y);return C2(f,c,g)}function Mr(e,t){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(t){var o=t.apply(void 0,r);if(!o)throw new Error("prepareAction did not return an object");return Dr(Dr({type:e,payload:o.payload},"meta"in o&&{meta:o.meta}),"error"in o&&{error:o.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}function I2(e){var t={},n=[],r,i={addCase:function(o,s){var a=typeof o=="string"?o:o.type;if(a in t)throw new Error("addCase cannot be called with two reducers for the same action type");return t[a]=s,i},addMatcher:function(o,s){return n.push({matcher:o,reducer:s}),i},addDefaultCase:function(o){return r=o,i}};return e(i),[t,n,r]}function BA(e){return typeof e=="function"}function HA(e,t,n,r){n===void 0&&(n=[]);var i=typeof t=="function"?I2(t):[t,n,r],o=i[0],s=i[1],a=i[2],l;if(BA(e))l=function(){return Ip(e())};else{var u=Ip(e);l=function(){return u}}function c(d,h){d===void 0&&(d=l());var f=lc([o[h.type]],s.filter(function(v){var p=v.matcher;return p(h)}).map(function(v){var p=v.reducer;return p}));return f.filter(function(v){return!!v}).length===0&&(f=[a]),f.reduce(function(v,p){if(p)if(Kr(v)){var S=v,y=p(S,h);return y===void 0?v:y}else{if(er(v))return x2(v,function(g){return p(g,h)});var y=p(v,h);if(y===void 0){if(v===null)return v;throw Error("A case reducer on a non-draftable value must not return undefined")}return y}return v},d)}return c.getInitialState=l,c}function WA(e,t){return e+"/"+t}function qA(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof e.initialState=="function"?e.initialState:Ip(e.initialState),r=e.reducers||{},i=Object.keys(r),o={},s={},a={};i.forEach(function(c){var d=r[c],h=WA(t,c),f,v;"reducer"in d?(f=d.reducer,v=d.prepare):f=d,o[c]=f,s[h]=f,a[c]=v?Mr(h,v):Mr(h)});function l(){var c=typeof e.extraReducers=="function"?I2(e.extraReducers):[e.extraReducers],d=c[0],h=d===void 0?{}:d,f=c[1],v=f===void 0?[]:f,p=c[2],S=p===void 0?void 0:p,y=Dr(Dr({},h),s);return HA(n,function(g){for(var E in y)g.addCase(E,y[E]);for(var b=0,T=v;b<T.length;b++){var A=T[b];g.addMatcher(A.matcher,A.reducer)}S&&g.addDefaultCase(S)})}var u;return{name:t,reducer:function(c,d){return u||(u=l()),u(c,d)},actions:a,caseReducers:o,getInitialState:function(){return u||(u=l()),u.getInitialState()}}}var GA="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",KA=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=GA[Math.random()*64|0];return t},QA=["name","message","stack","code"],Bh=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),zy=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),YA=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,r=QA;n<r.length;n++){var i=r[n];typeof e[i]=="string"&&(t[i]=e[i])}return t}return{message:String(e)}};(function(){function e(t,n,r){var i=Mr(t+"/fulfilled",function(u,c,d,h){return{payload:u,meta:Vh(Dr({},h||{}),{arg:d,requestId:c,requestStatus:"fulfilled"})}}),o=Mr(t+"/pending",function(u,c,d){return{payload:void 0,meta:Vh(Dr({},d||{}),{arg:c,requestId:u,requestStatus:"pending"})}}),s=Mr(t+"/rejected",function(u,c,d,h,f){return{payload:h,error:(r&&r.serializeError||YA)(u||"Rejected"),meta:Vh(Dr({},f||{}),{arg:d,requestId:c,rejectedWithValue:!!h,requestStatus:"rejected",aborted:(u==null?void 0:u.name)==="AbortError",condition:(u==null?void 0:u.name)==="ConditionError"})}}),a=typeof AbortController<"u"?AbortController:function(){function u(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return u.prototype.abort=function(){},u}();function l(u){return function(c,d,h){var f=r!=null&&r.idGenerator?r.idGenerator(u):KA(),v=new a,p;function S(g){p=g,v.abort()}var y=function(){return PA(this,null,function(){var g,E,b,T,A,I,$;return IA(this,function(H){switch(H.label){case 0:return H.trys.push([0,4,,5]),T=(g=r==null?void 0:r.condition)==null?void 0:g.call(r,u,{getState:d,extra:h}),JA(T)?[4,T]:[3,2];case 1:T=H.sent(),H.label=2;case 2:if(T===!1||v.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return A=new Promise(function(P,me){return v.signal.addEventListener("abort",function(){return me({name:"AbortError",message:p||"Aborted"})})}),c(o(f,u,(E=r==null?void 0:r.getPendingMeta)==null?void 0:E.call(r,{requestId:f,arg:u},{getState:d,extra:h}))),[4,Promise.race([A,Promise.resolve(n(u,{dispatch:c,getState:d,extra:h,requestId:f,signal:v.signal,abort:S,rejectWithValue:function(P,me){return new Bh(P,me)},fulfillWithValue:function(P,me){return new zy(P,me)}})).then(function(P){if(P instanceof Bh)throw P;return P instanceof zy?i(P.payload,f,u,P.meta):i(P,f,u)})])];case 3:return b=H.sent(),[3,5];case 4:return I=H.sent(),b=I instanceof Bh?s(null,f,u,I.payload,I.meta):s(I,f,u),[3,5];case 5:return $=r&&!r.dispatchConditionRejection&&s.match(b)&&b.meta.condition,$||c(b),[2,b]}})})}();return Object.assign(y,{abort:S,requestId:f,arg:u,unwrap:function(){return y.then(XA)}})}}return Object.assign(l,{pending:o,rejected:s,fulfilled:i,typePrefix:t})}return e.withTypes=function(){return e},e})();function XA(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function JA(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var Rg="listenerMiddleware";Mr(Rg+"/add");Mr(Rg+"/removeAll");Mr(Rg+"/remove");var Vy;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);mA();const ZA={user:null},$2=qA({name:"auth",initialState:ZA,reducers:{login:(e,t)=>{e.user=t.payload.user},logout:e=>{e.user=null},setUserTheme:(e,t)=>{e.user&&(e.user.theme=t.payload.theme)}}}),{login:bd,logout:e4,setUserTheme:t4}=$2.actions,ur=e=>e.auth;var A2={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},By=ve.createContext&&ve.createContext(A2),Lr=globalThis&&globalThis.__assign||function(){return Lr=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Lr.apply(this,arguments)},n4=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function R2(e){return e&&e.map(function(t,n){return ve.createElement(t.tag,Lr({key:n},t.attr),R2(t.child))})}function pe(e){return function(t){return ve.createElement(r4,Lr({attr:Lr({},e.attr)},t),R2(e.child))}}function r4(e){var t=function(n){var r=e.attr,i=e.size,o=e.title,s=n4(e,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),ve.createElement("svg",Lr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:l,style:Lr(Lr({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),o&&ve.createElement("title",null,o),e.children)};return By!==void 0?ve.createElement(By.Consumer,null,function(n){return t(n)}):t(A2)}function Ng(e){return pe({tag:"svg",attr:{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFC107",d:`M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z`}},{tag:"path",attr:{fill:"#FF3D00",d:`M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z`}},{tag:"path",attr:{fill:"#4CAF50",d:`M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z`}},{tag:"path",attr:{fill:"#1976D2",d:`M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z`}}]})(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N2=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},i4=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},O2={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=o>>2,d=(o&3)<<4|a>>4;let h=(a&15)<<2|u>>6,f=u&63;l||(f=64,s||(h=64)),r.push(n[c],n[d],n[h],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(N2(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i4(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const d=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||a==null||u==null||d==null)throw Error();const h=o<<2|a>>4;if(r.push(h),u!==64){const f=a<<4&240|u>>2;if(r.push(f),d!==64){const v=u<<6&192|d;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},o4=function(e){const t=N2(e);return O2.encodeByteArray(t,!0)},uc=function(e){return o4(e).replace(/\./g,"")},P2=function(e){try{return O2.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function s4(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($t())}function a4(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function l4(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function u4(){const e=$t();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function c4(){try{return typeof indexedDB=="object"}catch{return!1}}function d4(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}function h4(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f4=()=>h4().__FIREBASE_DEFAULTS__,p4=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},m4=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&P2(e[1]);return t&&JSON.parse(t)},Og=()=>{try{return f4()||p4()||m4()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},D2=e=>{var t,n;return(n=(t=Og())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},g4=e=>{const t=D2(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},v4=()=>{var e;return(e=Og())===null||e===void 0?void 0:e.config},M2=e=>{var t;return(t=Og())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y4{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w4(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[uc(JSON.stringify(n)),uc(JSON.stringify(s)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E4="FirebaseError";class cr extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=E4,Object.setPrototypeOf(this,cr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ha.prototype.create)}}class Ha{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?S4(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new cr(i,a,r)}}function S4(e,t){return e.replace(b4,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const b4=/\{\$([^}]+)}/g;function T4(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function cc(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],s=t[i];if(Hy(o)&&Hy(s)){if(!cc(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Hy(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Ns(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(o)}}),t}function Os(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function x4(e,t){const n=new C4(e,t);return n.subscribe.bind(n)}class C4{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");_4(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Hh),i.error===void 0&&(i.error=Hh),i.complete===void 0&&(i.complete=Hh);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function _4(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Hh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(e){return e&&e._delegate?e._delegate:e}class Oi{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let k4=class{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new y4;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if($4(t))try{this.getOrInitializeService({instanceIdentifier:ci})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=ci){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ci){return this.instances.has(t)}getOptions(t=ci){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&t(s,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:I4(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=ci){return this.component?this.component.multipleInstances?t:ci:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function I4(e){return e===ci?void 0:e}function $4(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A4{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new k4(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Se;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(Se||(Se={}));const R4={debug:Se.DEBUG,verbose:Se.VERBOSE,info:Se.INFO,warn:Se.WARN,error:Se.ERROR,silent:Se.SILENT},N4=Se.INFO,O4={[Se.DEBUG]:"log",[Se.VERBOSE]:"log",[Se.INFO]:"info",[Se.WARN]:"warn",[Se.ERROR]:"error"},P4=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=O4[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Pg{constructor(t){this.name=t,this._logLevel=N4,this._logHandler=P4,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Se))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?R4[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Se.DEBUG,...t),this._logHandler(this,Se.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Se.VERBOSE,...t),this._logHandler(this,Se.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Se.INFO,...t),this._logHandler(this,Se.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Se.WARN,...t),this._logHandler(this,Se.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Se.ERROR,...t),this._logHandler(this,Se.ERROR,...t)}}const D4=(e,t)=>t.some(n=>e instanceof n);let Wy,qy;function M4(){return Wy||(Wy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function L4(){return qy||(qy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const L2=new WeakMap,$p=new WeakMap,F2=new WeakMap,Wh=new WeakMap,Dg=new WeakMap;function F4(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(Fr(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&L2.set(n,e)}).catch(()=>{}),Dg.set(t,e),t}function U4(e){if($p.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});$p.set(e,t)}let Ap={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return $p.get(e);if(t==="objectStoreNames")return e.objectStoreNames||F2.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Fr(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function j4(e){Ap=e(Ap)}function z4(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(qh(this),t,...n);return F2.set(r,t.sort?t.sort():[t]),Fr(r)}:L4().includes(e)?function(...t){return e.apply(qh(this),t),Fr(L2.get(this))}:function(...t){return Fr(e.apply(qh(this),t))}}function V4(e){return typeof e=="function"?z4(e):(e instanceof IDBTransaction&&U4(e),D4(e,M4())?new Proxy(e,Ap):e)}function Fr(e){if(e instanceof IDBRequest)return F4(e);if(Wh.has(e))return Wh.get(e);const t=V4(e);return t!==e&&(Wh.set(e,t),Dg.set(t,e)),t}const qh=e=>Dg.get(e);function B4(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=Fr(s);return r&&s.addEventListener("upgradeneeded",l=>{r(Fr(s.result),l.oldVersion,l.newVersion,Fr(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const H4=["get","getKey","getAll","getAllKeys","count"],W4=["put","add","delete","clear"],Gh=new Map;function Gy(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Gh.get(t))return Gh.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=W4.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||H4.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Gh.set(t,o),o}j4(e=>({...e,get:(t,n,r)=>Gy(t,n)||e.get(t,n,r),has:(t,n)=>!!Gy(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q4{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(G4(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function G4(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Rp="@firebase/app",Ky="0.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi=new Pg("@firebase/app"),K4="@firebase/app-compat",Q4="@firebase/analytics-compat",Y4="@firebase/analytics",X4="@firebase/app-check-compat",J4="@firebase/app-check",Z4="@firebase/auth",eR="@firebase/auth-compat",tR="@firebase/database",nR="@firebase/database-compat",rR="@firebase/functions",iR="@firebase/functions-compat",oR="@firebase/installations",sR="@firebase/installations-compat",aR="@firebase/messaging",lR="@firebase/messaging-compat",uR="@firebase/performance",cR="@firebase/performance-compat",dR="@firebase/remote-config",hR="@firebase/remote-config-compat",fR="@firebase/storage",pR="@firebase/storage-compat",mR="@firebase/firestore",gR="@firebase/firestore-compat",vR="firebase",yR="9.15.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Np="[DEFAULT]",wR={[Rp]:"fire-core",[K4]:"fire-core-compat",[Y4]:"fire-analytics",[Q4]:"fire-analytics-compat",[J4]:"fire-app-check",[X4]:"fire-app-check-compat",[Z4]:"fire-auth",[eR]:"fire-auth-compat",[tR]:"fire-rtdb",[nR]:"fire-rtdb-compat",[rR]:"fire-fn",[iR]:"fire-fn-compat",[oR]:"fire-iid",[sR]:"fire-iid-compat",[aR]:"fire-fcm",[lR]:"fire-fcm-compat",[uR]:"fire-perf",[cR]:"fire-perf-compat",[dR]:"fire-rc",[hR]:"fire-rc-compat",[fR]:"fire-gcs",[pR]:"fire-gcs-compat",[mR]:"fire-fst",[gR]:"fire-fst-compat","fire-js":"fire-js",[vR]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc=new Map,Op=new Map;function ER(e,t){try{e.container.addComponent(t)}catch(n){Pi.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Wo(e){const t=e.name;if(Op.has(t))return Pi.debug(`There were multiple attempts to register component ${t}.`),!1;Op.set(t,e);for(const n of dc.values())ER(n,e);return!0}function Mg(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SR={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ur=new Ha("app","Firebase",SR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Oi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ur.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa=yR;function U2(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Np,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Ur.create("bad-app-name",{appName:String(i)});if(n||(n=v4()),!n)throw Ur.create("no-options");const o=dc.get(i);if(o){if(cc(n,o.options)&&cc(r,o.config))return o;throw Ur.create("duplicate-app",{appName:i})}const s=new A4(i);for(const l of Op.values())s.addComponent(l);const a=new bR(n,r,s);return dc.set(i,a),a}function j2(e=Np){const t=dc.get(e);if(!t&&e===Np)return U2();if(!t)throw Ur.create("no-app",{appName:e});return t}function jr(e,t,n){var r;let i=(r=wR[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${t}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Pi.warn(a.join(" "));return}Wo(new Oi(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TR="firebase-heartbeat-database",xR=1,Sa="firebase-heartbeat-store";let Kh=null;function z2(){return Kh||(Kh=B4(TR,xR,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Sa)}}}).catch(e=>{throw Ur.create("idb-open",{originalErrorMessage:e.message})})),Kh}async function CR(e){try{return(await z2()).transaction(Sa).objectStore(Sa).get(V2(e))}catch(t){if(t instanceof cr)Pi.warn(t.message);else{const n=Ur.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Pi.warn(n.message)}}}async function Qy(e,t){try{const r=(await z2()).transaction(Sa,"readwrite");return await r.objectStore(Sa).put(t,V2(e)),r.done}catch(n){if(n instanceof cr)Pi.warn(n.message);else{const r=Ur.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Pi.warn(r.message)}}}function V2(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _R=1024,kR=30*24*60*60*1e3;class IR{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new AR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Yy();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=kR}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Yy(),{heartbeatsToSend:n,unsentEntries:r}=$R(this._heartbeatsCache.heartbeats),i=uc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Yy(){return new Date().toISOString().substring(0,10)}function $R(e,t=_R){const n=[];let r=e.slice();for(const i of e){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),Xy(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Xy(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class AR{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return c4()?d4().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await CR(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qy(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qy(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Xy(e){return uc(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RR(e){Wo(new Oi("platform-logger",t=>new q4(t),"PRIVATE")),Wo(new Oi("heartbeat",t=>new IR(t),"PRIVATE")),jr(Rp,Ky,e),jr(Rp,Ky,"esm2017"),jr("fire-js","")}RR("");var In=function(){return In=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},In.apply(this,arguments)};function Ga(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function NR(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}function B2(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const OR=B2,H2=new Ha("auth","Firebase",B2());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jy=new Pg("@firebase/auth");function mu(e,...t){Jy.logLevel<=Se.ERROR&&Jy.error(`Auth (${qa}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(e,...t){throw Lg(e,...t)}function Pn(e,...t){return Lg(e,...t)}function W2(e,t,n){const r=Object.assign(Object.assign({},OR()),{[t]:n});return new Ha("auth","Firebase",r).create(t,{appName:e.name})}function PR(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&un(e,"argument-error"),W2(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Lg(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return H2.create(e,...t)}function te(e,t,...n){if(!e)throw Lg(t,...n)}function qn(e){const t="INTERNAL ASSERTION FAILED: "+e;throw mu(t),new Error(t)}function tr(e,t){e||qn(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zy=new Map;function Gn(e){tr(e instanceof Function,"Expected a class definition");let t=Zy.get(e);return t?(tr(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Zy.set(e,t),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DR(e,t){const n=Mg(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(cc(o,t??{}))return i;un(i,"already-initialized")}return n.initialize({options:t})}function MR(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Gn);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pp(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function LR(){return e1()==="http:"||e1()==="https:"}function e1(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(LR()||a4()||"connection"in navigator)?navigator.onLine:!0}function UR(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(t,n){this.shortDelay=t,this.longDelay=n,tr(n>t,"Short delay should be less than long delay!"),this.isMobile=s4()||l4()}get(){return FR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fg(e,t){tr(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q2{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;qn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;qn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;qn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zR=new Ka(3e4,6e4);function Qa(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function os(e,t,n,r,i={}){return G2(e,i,async()=>{let o={},s={};r&&(t==="GET"?s=r:o={body:JSON.stringify(r)});const a=Wa(Object.assign({key:e.config.apiKey},s)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),q2.fetch()(K2(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},o))})}async function G2(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},jR),t);try{const i=new VR(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw Bl(e,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Bl(e,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw Bl(e,"email-already-in-use",s);if(l==="USER_DISABLED")throw Bl(e,"user-disabled",s);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw W2(e,c,u);un(e,c)}}catch(i){if(i instanceof cr)throw i;un(e,"network-request-failed")}}async function Ya(e,t,n,r,i={}){const o=await os(e,t,n,r,i);return"mfaPendingCredential"in o&&un(e,"multi-factor-auth-required",{_serverResponse:o}),o}function K2(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Fg(e.config,i):`${e.config.apiScheme}://${i}`}class VR{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Pn(this.auth,"network-request-failed")),zR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Bl(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Pn(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BR(e,t){return os(e,"POST","/v1/accounts:delete",t)}async function HR(e,t){return os(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ks(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function WR(e,t=!1){const n=et(e),r=await n.getIdToken(t),i=Ug(r);te(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Ks(Qh(i.auth_time)),issuedAtTime:Ks(Qh(i.iat)),expirationTime:Ks(Qh(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Qh(e){return Number(e)*1e3}function Ug(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return mu("JWT malformed, contained fewer than 3 sections"),null;try{const i=P2(n);return i?JSON.parse(i):(mu("Failed to decode base64 JWT payload"),null)}catch(i){return mu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function qR(e){const t=Ug(e);return te(t,"internal-error"),te(typeof t.exp<"u","internal-error"),te(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qo(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof cr&&GR(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function GR({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q2{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ks(this.lastLoginAt),this.creationTime=Ks(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hc(e){var t;const n=e.auth,r=await e.getIdToken(),i=await qo(e,HR(n,{idToken:r}));te(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?XR(o.providerUserInfo):[],a=YR(e.providerData,s),l=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Q2(o.createdAt,o.lastLoginAt),isAnonymous:c};Object.assign(e,d)}async function QR(e){const t=et(e);await hc(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function YR(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function XR(e){return e.map(t=>{var{providerId:n}=t,r=Ga(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JR(e,t){const n=await G2(e,{},async()=>{const r=Wa({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=K2(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",q2.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){te(t.idToken,"internal-error"),te(typeof t.idToken<"u","internal-error"),te(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):qR(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return te(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await JR(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new ba;return r&&(te(typeof r=="string","internal-error",{appName:t}),s.refreshToken=r),i&&(te(typeof i=="string","internal-error",{appName:t}),s.accessToken=i),o&&(te(typeof o=="number","internal-error",{appName:t}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ba,this.toJSON())}_performRefresh(){return qn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(e,t){te(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Si{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=Ga(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new KR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Q2(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await qo(this,this.stsTokenManager.getToken(this.auth,t));return te(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return WR(this,t)}reload(){return QR(this)}_assign(t){this!==t&&(te(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new Si(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await hc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await qo(this,BR(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,s,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,f=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,v=(s=n.photoURL)!==null&&s!==void 0?s:void 0,p=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,y=(u=n.createdAt)!==null&&u!==void 0?u:void 0,g=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:E,emailVerified:b,isAnonymous:T,providerData:A,stsTokenManager:I}=n;te(E&&I,t,"internal-error");const $=ba.fromJSON(this.name,I);te(typeof E=="string",t,"internal-error"),fr(d,t.name),fr(h,t.name),te(typeof b=="boolean",t,"internal-error"),te(typeof T=="boolean",t,"internal-error"),fr(f,t.name),fr(v,t.name),fr(p,t.name),fr(S,t.name),fr(y,t.name),fr(g,t.name);const H=new Si({uid:E,auth:t,email:h,emailVerified:b,displayName:d,isAnonymous:T,photoURL:v,phoneNumber:f,tenantId:p,stsTokenManager:$,createdAt:y,lastLoginAt:g});return A&&Array.isArray(A)&&(H.providerData=A.map(P=>Object.assign({},P))),S&&(H._redirectEventId=S),H}static async _fromIdTokenResponse(t,n,r=!1){const i=new ba;i.updateFromServerResponse(n);const o=new Si({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await hc(o),o}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y2{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Y2.type="NONE";const t1=Y2;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gu(e,t,n){return`firebase:${e}:${t}:${n}`}class ko{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=gu(this.userKey,i.apiKey,o),this.fullPersistenceKey=gu("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Si._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new ko(Gn(t1),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||Gn(t1);const s=gu(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const c=await u._get(s);if(c){const d=Si._fromJSON(t,c);u!==o&&(a=d),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new ko(o,t,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new ko(o,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n1(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Z2(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(X2(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(tb(t))return"Blackberry";if(nb(t))return"Webos";if(jg(t))return"Safari";if((t.includes("chrome/")||J2(t))&&!t.includes("edge/"))return"Chrome";if(eb(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function X2(e=$t()){return/firefox\//i.test(e)}function jg(e=$t()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function J2(e=$t()){return/crios\//i.test(e)}function Z2(e=$t()){return/iemobile/i.test(e)}function eb(e=$t()){return/android/i.test(e)}function tb(e=$t()){return/blackberry/i.test(e)}function nb(e=$t()){return/webos/i.test(e)}function Td(e=$t()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ZR(e=$t()){var t;return Td(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function e3(){return u4()&&document.documentMode===10}function rb(e=$t()){return Td(e)||eb(e)||nb(e)||tb(e)||/windows phone/i.test(e)||Z2(e)}function t3(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ib(e,t=[]){let n;switch(e){case"Browser":n=n1($t());break;case"Worker":n=`${n1($t())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${qa}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n3{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((s,a)=>{try{const l=t(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r3{constructor(t,n,r){this.app=t,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new r1(this),this.idTokenSubscription=new r1(this),this.beforeStateQueue=new n3(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=H2,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Gn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ko.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await hc(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=UR()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?et(t):null;return n&&te(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&te(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Gn(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Ha("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Gn(t)||this._popupRedirectResolver;te(n,this,"argument-error"),this.redirectPersistenceManager=await ko.create(this,[Gn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n),s=this._isInitialized?Promise.resolve():this._initializationPromise;return te(s,this,"internal-error"),s.then(()=>o(this.currentUser)),typeof n=="function"?t.addObserver(n,r,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=ib(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function ss(e){return et(e)}class r1{constructor(t){this.auth=t,this.observer=null,this.addObserver=x4(n=>this.observer=n)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function i3(e,t,n){const r=ss(e);te(r._canInitEmulator,r,"emulator-config-failed"),te(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=ob(t),{host:s,port:a}=o3(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||s3()}function ob(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function o3(e){const t=ob(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:i1(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:i1(s)}}}function i1(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function s3(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return qn("not implemented")}_getIdTokenResponse(t){return qn("not implemented")}_linkToIdToken(t,n){return qn("not implemented")}_getReauthenticationResolver(t){return qn("not implemented")}}async function a3(e,t){return os(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l3(e,t){return Ya(e,"POST","/v1/accounts:signInWithPassword",Qa(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u3(e,t){return Ya(e,"POST","/v1/accounts:signInWithEmailLink",Qa(e,t))}async function c3(e,t){return Ya(e,"POST","/v1/accounts:signInWithEmailLink",Qa(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta extends zg{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new Ta(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Ta(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return l3(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return u3(t,{email:this._email,oobCode:this._password});default:un(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return a3(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return c3(t,{idToken:n,email:this._email,oobCode:this._password});default:un(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Io(e,t){return Ya(e,"POST","/v1/accounts:signInWithIdp",Qa(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d3="http://localhost";class Di extends zg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Di(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):un("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=Ga(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new Di(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(t){const n=this.buildRequest();return Io(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Io(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Io(t,n)}buildRequest(){const t={requestUri:d3,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Wa(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h3(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function f3(e){const t=Ns(Os(e)).link,n=t?Ns(Os(t)).deep_link_id:null,r=Ns(Os(e)).deep_link_id;return(r?Ns(Os(r)).link:null)||r||n||t||e}class Vg{constructor(t){var n,r,i,o,s,a;const l=Ns(Os(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=h3((i=l.mode)!==null&&i!==void 0?i:null);te(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=f3(t);try{return new Vg(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(){this.providerId=as.PROVIDER_ID}static credential(t,n){return Ta._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=Vg.parseLink(n);return te(r,"argument-error"),Ta._fromEmailAndCode(t,r.code,r.tenantId)}}as.PROVIDER_ID="password";as.EMAIL_PASSWORD_SIGN_IN_METHOD="password";as.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa extends Bg{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er extends Xa{constructor(){super("facebook.com")}static credential(t){return Di._fromParams({providerId:Er.PROVIDER_ID,signInMethod:Er.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Er.credentialFromTaggedObject(t)}static credentialFromError(t){return Er.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Er.credential(t.oauthAccessToken)}catch{return null}}}Er.FACEBOOK_SIGN_IN_METHOD="facebook.com";Er.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends Xa{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Di._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return $n.credentialFromTaggedObject(t)}static credentialFromError(t){return $n.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return $n.credential(n,r)}catch{return null}}}$n.GOOGLE_SIGN_IN_METHOD="google.com";$n.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr extends Xa{constructor(){super("github.com")}static credential(t){return Di._fromParams({providerId:Sr.PROVIDER_ID,signInMethod:Sr.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Sr.credentialFromTaggedObject(t)}static credentialFromError(t){return Sr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Sr.credential(t.oauthAccessToken)}catch{return null}}}Sr.GITHUB_SIGN_IN_METHOD="github.com";Sr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br extends Xa{constructor(){super("twitter.com")}static credential(t,n){return Di._fromParams({providerId:br.PROVIDER_ID,signInMethod:br.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return br.credentialFromTaggedObject(t)}static credentialFromError(t){return br.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return br.credential(n,r)}catch{return null}}}br.TWITTER_SIGN_IN_METHOD="twitter.com";br.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p3(e,t){return Ya(e,"POST","/v1/accounts:signUp",Qa(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await Si._fromIdTokenResponse(t,r,i),s=o1(r);return new Mi({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=o1(r);return new Mi({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function o1(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc extends cr{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,fc.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new fc(t,n,r,i)}}function sb(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?fc._fromErrorAndOperation(e,o,t,r):o})}async function m3(e,t,n=!1){const r=await qo(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Mi._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function g3(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await qo(e,sb(r,i,t,e),n);te(o.idToken,r,"internal-error");const s=Ug(o.idToken);te(s,r,"internal-error");const{sub:a}=s;return te(e.uid===a,r,"user-mismatch"),Mi._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&un(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ab(e,t,n=!1){const r="signIn",i=await sb(e,r,t),o=await Mi._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function v3(e,t){return ab(ss(e),t)}async function y3(e,t,n){const r=ss(e),i=await p3(r,{returnSecureToken:!0,email:t,password:n}),o=await Mi._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(o.user),o}function w3(e,t,n){return v3(et(e),as.credential(t,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E3(e,t){return os(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function S3(e,{displayName:t,photoURL:n}){if(t===void 0&&n===void 0)return;const r=et(e),o={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},s=await qo(r,E3(r.auth,o));r.displayName=s.displayName||null,r.photoURL=s.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(s)}function b3(e,t,n,r){return et(e).onIdTokenChanged(t,n,r)}function T3(e,t,n){return et(e).beforeAuthStateChanged(t,n)}function x3(e){return et(e).signOut()}const pc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(pc,"1"),this.storage.removeItem(pc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C3(){const e=$t();return jg(e)||Td(e)}const _3=1e3,k3=10;class ub extends lb{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=C3()&&t3(),this.fallbackToPolling=rb(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(t.newValue!==s)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);e3()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,k3):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},_3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}ub.type="LOCAL";const I3=ub;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb extends lb{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}cb.type="SESSION";const db=cb;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $3(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new xd(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await $3(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hg(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A3{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=Hg("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(h.data.response);break;default:clearTimeout(c),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(){return window}function R3(e){Dn().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hb(){return typeof Dn().WorkerGlobalScope<"u"&&typeof Dn().importScripts=="function"}async function N3(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function O3(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function P3(){return hb()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fb="firebaseLocalStorageDb",D3=1,mc="firebaseLocalStorage",pb="fbase_key";class Ja{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Cd(e,t){return e.transaction([mc],t?"readwrite":"readonly").objectStore(mc)}function M3(){const e=indexedDB.deleteDatabase(fb);return new Ja(e).toPromise()}function Dp(){const e=indexedDB.open(fb,D3);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(mc,{keyPath:pb})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(mc)?t(r):(r.close(),await M3(),t(await Dp()))})})}async function s1(e,t,n){const r=Cd(e,!0).put({[pb]:t,value:n});return new Ja(r).toPromise()}async function L3(e,t){const n=Cd(e,!1).get(t),r=await new Ja(n).toPromise();return r===void 0?null:r.value}function a1(e,t){const n=Cd(e,!0).delete(t);return new Ja(n).toPromise()}const F3=800,U3=3;class mb{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Dp(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>U3)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hb()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xd._getInstance(P3()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await N3(),!this.activeServiceWorker)return;this.sender=new A3(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||O3()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Dp();return await s1(t,pc,"1"),await a1(t,pc),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>s1(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>L3(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>a1(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=Cd(i,!1).getAll();return new Ja(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),F3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}mb.type="LOCAL";const j3=mb;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z3(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function V3(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=Pn("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",z3().appendChild(r)})}function B3(e){return`__${e}${Math.floor(Math.random()*1e6)}`}new Ka(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gb(e,t){return t?Gn(t):(te(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg extends zg{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Io(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Io(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Io(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function H3(e){return ab(e.auth,new Wg(e),e.bypassAuthState)}function W3(e){const{auth:t,user:n}=e;return te(n,t,"internal-error"),g3(n,new Wg(e),e.bypassAuthState)}async function q3(e){const{auth:t,user:n}=e;return te(n,t,"internal-error"),m3(n,new Wg(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vb{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=t;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return H3;case"linkViaPopup":case"linkViaRedirect":return q3;case"reauthViaPopup":case"reauthViaRedirect":return W3;default:un(this.auth,"internal-error")}}resolve(t){tr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){tr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G3=new Ka(2e3,1e4);async function K3(e,t,n){const r=ss(e);PR(e,t,Bg);const i=gb(r,n);return new mi(r,"signInViaPopup",t,i).executeNotNull()}class mi extends vb{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,mi.currentPopupAction&&mi.currentPopupAction.cancel(),mi.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return te(t,this.auth,"internal-error"),t}async onExecution(){tr(this.filter.length===1,"Popup operations only handle one event");const t=Hg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Pn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Pn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,mi.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Pn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(t,G3.get())};t()}}mi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q3="pendingRedirect",vu=new Map;class Y3 extends vb{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=vu.get(this.auth._key());if(!t){try{const r=await X3(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}vu.set(this.auth._key(),t)}return this.bypassAuthState||vu.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function X3(e,t){const n=eN(t),r=Z3(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function J3(e,t){vu.set(e._key(),t)}function Z3(e){return Gn(e._redirectPersistence)}function eN(e){return gu(Q3,e.config.apiKey,e.name)}async function tN(e,t,n=!1){const r=ss(e),i=gb(r,t),s=await new Y3(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nN=10*60*1e3;class rN{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!iN(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!yb(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Pn(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=nN&&this.cachedEventUids.clear(),this.cachedEventUids.has(l1(t))}saveEventToCache(t){this.cachedEventUids.add(l1(t)),this.lastProcessedEventTime=Date.now()}}function l1(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function yb({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function iN(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return yb(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oN(e,t={}){return os(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,aN=/^https?/;async function lN(e){if(e.config.emulator)return;const{authorizedDomains:t}=await oN(e);for(const n of t)try{if(uN(n))return}catch{}un(e,"unauthorized-domain")}function uN(e){const t=Pp(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return s.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!aN.test(n))return!1;if(sN.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cN=new Ka(3e4,6e4);function u1(){const e=Dn().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function dN(e){return new Promise((t,n)=>{var r,i,o;function s(){u1(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{u1(),n(Pn(e,"network-request-failed"))},timeout:cN.get()})}if(!((i=(r=Dn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=Dn().gapi)===null||o===void 0)&&o.load)s();else{const a=B3("iframefcb");return Dn()[a]=()=>{gapi.load?s():n(Pn(e,"network-request-failed"))},V3(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw yu=null,t})}let yu=null;function hN(e){return yu=yu||dN(e),yu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fN=new Ka(5e3,15e3),pN="__/auth/iframe",mN="emulator/auth/iframe",gN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},vN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function yN(e){const t=e.config;te(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Fg(t,mN):`https://${e.config.authDomain}/${pN}`,r={apiKey:t.apiKey,appName:e.name,v:qa},i=vN.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Wa(r).slice(1)}`}async function wN(e){const t=await hN(e),n=Dn().gapi;return te(n,e,"internal-error"),t.open({where:document.body,url:yN(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gN,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=Pn(e,"network-request-failed"),a=Dn().setTimeout(()=>{o(s)},fN.get());function l(){Dn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},SN=500,bN=600,TN="_blank",xN="http://localhost";class c1{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function CN(e,t,n,r=SN,i=bN){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},EN),{width:r.toString(),height:i.toString(),top:o,left:s}),u=$t().toLowerCase();n&&(a=J2(u)?TN:n),X2(u)&&(t=t||xN,l.scrollbars="yes");const c=Object.entries(l).reduce((h,[f,v])=>`${h}${f}=${v},`,"");if(ZR(u)&&a!=="_self")return _N(t||"",a),new c1(null);const d=window.open(t||"",a,c);te(d,e,"popup-blocked");try{d.focus()}catch{}return new c1(d)}function _N(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kN="__/auth/handler",IN="emulator/auth/handler";function d1(e,t,n,r,i,o){te(e.config.authDomain,e,"auth-domain-config-required"),te(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:qa,eventId:i};if(t instanceof Bg){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",T4(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[l,u]of Object.entries(o||{}))s[l]=u}if(t instanceof Xa){const l=t.getScopes().filter(u=>u!=="");l.length>0&&(s.scopes=l.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${$N(e)}?${Wa(a).slice(1)}`}function $N({config:e}){return e.emulator?Fg(e,IN):`https://${e.authDomain}/${kN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yh="webStorageSupport";class AN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=db,this._completeRedirectFn=tN,this._overrideRedirectResult=J3}async _openPopup(t,n,r,i){var o;tr((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=d1(t,n,r,Pp(),i);return CN(t,s,Hg())}async _openRedirect(t,n,r,i){return await this._originValidation(t),R3(d1(t,n,r,Pp(),i)),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(tr(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await wN(t),r=new rN(t);return n.register("authEvent",i=>(te(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Yh,{type:Yh},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Yh];s!==void 0&&n(!!s),un(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=lN(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return rb()||jg()||Td()}}const RN=AN;var h1="@firebase/auth",f1="0.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NN{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ON(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function PN(e){Wo(new Oi("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:o,authDomain:s}=r.options;return((a,l)=>{te(o&&!o.includes(":"),"invalid-api-key",{appName:a.name}),te(!(s!=null&&s.includes(":")),"argument-error",{appName:a.name});const u={apiKey:o,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ib(e)},c=new r3(a,l,u);return MR(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Wo(new Oi("auth-internal",t=>{const n=ss(t.getProvider("auth").getImmediate());return(r=>new NN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),jr(h1,f1,ON(e)),jr(h1,f1,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DN=5*60,MN=M2("authIdTokenMaxAge")||DN;let p1=null;const LN=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>MN)return;const i=n==null?void 0:n.token;p1!==i&&(p1=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function FN(e=j2()){const t=Mg(e,"auth");if(t.isInitialized())return t.getImmediate();const n=DR(e,{popupRedirectResolver:RN,persistence:[j3,I3,db]}),r=M2("authTokenSyncURL");if(r){const o=LN(r);T3(n,o,()=>o(n.currentUser)),b3(n,s=>o(s))}const i=D2("auth");return i&&i3(n,`http://${i}`),n}PN("Browser");var UN=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},K,qg=qg||{},ie=UN||self;function gc(){}function _d(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Za(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function jN(e){return Object.prototype.hasOwnProperty.call(e,Xh)&&e[Xh]||(e[Xh]=++zN)}var Xh="closure_uid_"+(1e9*Math.random()>>>0),zN=0;function VN(e,t,n){return e.call.apply(e.bind,arguments)}function BN(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function Ct(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ct=VN:Ct=BN,Ct.apply(null,arguments)}function Hl(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function gt(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(r,i,o){for(var s=Array(arguments.length-2),a=2;a<arguments.length;a++)s[a-2]=arguments[a];return t.prototype[i].apply(r,s)}}function ri(){this.s=this.s,this.o=this.o}var HN=0;ri.prototype.s=!1;ri.prototype.na=function(){!this.s&&(this.s=!0,this.M(),HN!=0)&&jN(this)};ri.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const wb=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Gg(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function m1(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(_d(r)){const i=e.length||0,o=r.length||0;e.length=i+o;for(let s=0;s<o;s++)e[i+s]=r[s]}else e.push(r)}}function _t(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}_t.prototype.h=function(){this.defaultPrevented=!0};var WN=function(){if(!ie.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{ie.addEventListener("test",gc,t),ie.removeEventListener("test",gc,t)}catch{}return e}();function vc(e){return/^[\s\xa0]*$/.test(e)}var g1=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function Jh(e,t){return e<t?-1:e>t?1:0}function kd(){var e=ie.navigator;return e&&(e=e.userAgent)?e:""}function An(e){return kd().indexOf(e)!=-1}function Kg(e){return Kg[" "](e),e}Kg[" "]=gc;function qN(e){var t=QN;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var GN=An("Opera"),Go=An("Trident")||An("MSIE"),Eb=An("Edge"),Mp=Eb||Go,Sb=An("Gecko")&&!(kd().toLowerCase().indexOf("webkit")!=-1&&!An("Edge"))&&!(An("Trident")||An("MSIE"))&&!An("Edge"),KN=kd().toLowerCase().indexOf("webkit")!=-1&&!An("Edge");function bb(){var e=ie.document;return e?e.documentMode:void 0}var yc;e:{var Zh="",ef=function(){var e=kd();if(Sb)return/rv:([^\);]+)(\)|;)/.exec(e);if(Eb)return/Edge\/([\d\.]+)/.exec(e);if(Go)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(KN)return/WebKit\/(\S+)/.exec(e);if(GN)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(ef&&(Zh=ef?ef[1]:""),Go){var tf=bb();if(tf!=null&&tf>parseFloat(Zh)){yc=String(tf);break e}}yc=Zh}var QN={};function YN(){return qN(function(){let e=0;const t=g1(String(yc)).split("."),n=g1("9").split("."),r=Math.max(t.length,n.length);for(let s=0;e==0&&s<r;s++){var i=t[s]||"",o=n[s]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],i[0].length==0&&o[0].length==0)break;e=Jh(i[1].length==0?0:parseInt(i[1],10),o[1].length==0?0:parseInt(o[1],10))||Jh(i[2].length==0,o[2].length==0)||Jh(i[2],o[2]),i=i[3],o=o[3]}while(e==0)}return 0<=e})}var Lp;if(ie.document&&Go){var v1=bb();Lp=v1||parseInt(yc,10)||void 0}else Lp=void 0;var XN=Lp;function xa(e,t){if(_t.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Sb){e:{try{Kg(t.nodeName);var i=!0;break e}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:JN[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&xa.X.h.call(this)}}gt(xa,_t);var JN={2:"touch",3:"pen",4:"mouse"};xa.prototype.h=function(){xa.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var el="closure_listenable_"+(1e6*Math.random()|0),ZN=0;function eO(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++ZN,this.ba=this.ea=!1}function Id(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function Qg(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function Tb(e){const t={};for(const n in e)t[n]=e[n];return t}const y1="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function xb(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let o=0;o<y1.length;o++)n=y1[o],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function $d(e){this.src=e,this.g={},this.h=0}$d.prototype.add=function(e,t,n,r,i){var o=e.toString();e=this.g[o],e||(e=this.g[o]=[],this.h++);var s=Up(e,t,r,i);return-1<s?(t=e[s],n||(t.ea=!1)):(t=new eO(t,this.src,o,!!r,i),t.ea=n,e.push(t)),t};function Fp(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=wb(r,t),o;(o=0<=i)&&Array.prototype.splice.call(r,i,1),o&&(Id(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Up(e,t,n,r){for(var i=0;i<e.length;++i){var o=e[i];if(!o.ba&&o.listener==t&&o.capture==!!n&&o.ha==r)return i}return-1}var Yg="closure_lm_"+(1e6*Math.random()|0),nf={};function Cb(e,t,n,r,i){if(r&&r.once)return kb(e,t,n,r,i);if(Array.isArray(t)){for(var o=0;o<t.length;o++)Cb(e,t[o],n,r,i);return null}return n=Zg(n),e&&e[el]?e.N(t,n,Za(r)?!!r.capture:!!r,i):_b(e,t,n,!1,r,i)}function _b(e,t,n,r,i,o){if(!t)throw Error("Invalid event type");var s=Za(i)?!!i.capture:!!i,a=Jg(e);if(a||(e[Yg]=a=new $d(e)),n=a.add(t,n,r,s,o),n.proxy)return n;if(r=tO(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)WN||(i=s),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent($b(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function tO(){function e(n){return t.call(e.src,e.listener,n)}const t=nO;return e}function kb(e,t,n,r,i){if(Array.isArray(t)){for(var o=0;o<t.length;o++)kb(e,t[o],n,r,i);return null}return n=Zg(n),e&&e[el]?e.O(t,n,Za(r)?!!r.capture:!!r,i):_b(e,t,n,!0,r,i)}function Ib(e,t,n,r,i){if(Array.isArray(t))for(var o=0;o<t.length;o++)Ib(e,t[o],n,r,i);else r=Za(r)?!!r.capture:!!r,n=Zg(n),e&&e[el]?(e=e.i,t=String(t).toString(),t in e.g&&(o=e.g[t],n=Up(o,n,r,i),-1<n&&(Id(o[n]),Array.prototype.splice.call(o,n,1),o.length==0&&(delete e.g[t],e.h--)))):e&&(e=Jg(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Up(t,n,r,i)),(n=-1<e?t[e]:null)&&Xg(n))}function Xg(e){if(typeof e!="number"&&e&&!e.ba){var t=e.src;if(t&&t[el])Fp(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent($b(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Jg(t))?(Fp(n,e),n.h==0&&(n.src=null,t[Yg]=null)):Id(e)}}}function $b(e){return e in nf?nf[e]:nf[e]="on"+e}function nO(e,t){if(e.ba)e=!0;else{t=new xa(t,this);var n=e.listener,r=e.ha||e.src;e.ea&&Xg(e),e=n.call(r,t)}return e}function Jg(e){return e=e[Yg],e instanceof $d?e:null}var rf="__closure_events_fn_"+(1e9*Math.random()>>>0);function Zg(e){return typeof e=="function"?e:(e[rf]||(e[rf]=function(t){return e.handleEvent(t)}),e[rf])}function ot(){ri.call(this),this.i=new $d(this),this.P=this,this.I=null}gt(ot,ri);ot.prototype[el]=!0;ot.prototype.removeEventListener=function(e,t,n,r){Ib(this,e,t,n,r)};function ft(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,typeof t=="string")t=new _t(t,e);else if(t instanceof _t)t.target=t.target||e;else{var i=t;t=new _t(r,e),xb(t,i)}if(i=!0,n)for(var o=n.length-1;0<=o;o--){var s=t.g=n[o];i=Wl(s,r,!0,t)&&i}if(s=t.g=e,i=Wl(s,r,!0,t)&&i,i=Wl(s,r,!1,t)&&i,n)for(o=0;o<n.length;o++)s=t.g=n[o],i=Wl(s,r,!1,t)&&i}ot.prototype.M=function(){if(ot.X.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Id(n[r]);delete e.g[t],e.h--}}this.I=null};ot.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};ot.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function Wl(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,o=0;o<t.length;++o){var s=t[o];if(s&&!s.ba&&s.capture==n){var a=s.listener,l=s.ha||s.src;s.ea&&Fp(e.i,s),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var ev=ie.JSON.stringify;function rO(){var e=Nb;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class iO{constructor(){this.h=this.g=null}add(t,n){const r=Ab.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Ab=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new oO,e=>e.reset());class oO{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function sO(e){ie.setTimeout(()=>{throw e},0)}function Rb(e,t){jp||aO(),zp||(jp(),zp=!0),Nb.add(e,t)}var jp;function aO(){var e=ie.Promise.resolve(void 0);jp=function(){e.then(lO)}}var zp=!1,Nb=new iO;function lO(){for(var e;e=rO();){try{e.h.call(e.g)}catch(n){sO(n)}var t=Ab;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}zp=!1}function Ad(e,t){ot.call(this),this.h=e||1,this.g=t||ie,this.j=Ct(this.lb,this),this.l=Date.now()}gt(Ad,ot);K=Ad.prototype;K.ca=!1;K.R=null;K.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),ft(this,"tick"),this.ca&&(tv(this),this.start()))}};K.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function tv(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}K.M=function(){Ad.X.M.call(this),tv(this),delete this.g};function nv(e,t,n){if(typeof e=="function")n&&(e=Ct(e,n));else if(e&&typeof e.handleEvent=="function")e=Ct(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:ie.setTimeout(e,t||0)}function Ob(e){e.g=nv(()=>{e.g=null,e.i&&(e.i=!1,Ob(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class uO extends ri{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Ob(this)}M(){super.M(),this.g&&(ie.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ca(e){ri.call(this),this.h=e,this.g={}}gt(Ca,ri);var w1=[];function Pb(e,t,n,r){Array.isArray(n)||(n&&(w1[0]=n.toString()),n=w1);for(var i=0;i<n.length;i++){var o=Cb(t,n[i],r||e.handleEvent,!1,e.h||e);if(!o)break;e.g[o.key]=o}}function Db(e){Qg(e.g,function(t,n){this.g.hasOwnProperty(n)&&Xg(t)},e),e.g={}}Ca.prototype.M=function(){Ca.X.M.call(this),Db(this)};Ca.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Rd(){this.g=!0}Rd.prototype.Aa=function(){this.g=!1};function cO(e,t,n,r,i,o){e.info(function(){if(e.g)if(o)for(var s="",a=o.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var d=c.split("_");s=2<=d.length&&d[1]=="type"?s+(c+"="+u+"&"):s+(c+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+s})}function dO(e,t,n,r,i,o,s){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+o+" "+s})}function vo(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+fO(e,n)+(r?" "+r:"")})}function hO(e,t){e.info(function(){return"TIMEOUT: "+t})}Rd.prototype.info=function(){};function fO(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var o=i[0];if(o!="noop"&&o!="stop"&&o!="close")for(var s=1;s<i.length;s++)i[s]=""}}}}return ev(n)}catch{return t}}var Vi={},E1=null;function Nd(){return E1=E1||new ot}Vi.Pa="serverreachability";function Mb(e){_t.call(this,Vi.Pa,e)}gt(Mb,_t);function _a(e){const t=Nd();ft(t,new Mb(t))}Vi.STAT_EVENT="statevent";function Lb(e,t){_t.call(this,Vi.STAT_EVENT,e),this.stat=t}gt(Lb,_t);function Nt(e){const t=Nd();ft(t,new Lb(t,e))}Vi.Qa="timingevent";function Fb(e,t){_t.call(this,Vi.Qa,e),this.size=t}gt(Fb,_t);function tl(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return ie.setTimeout(function(){e()},t)}var Od={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Ub={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function rv(){}rv.prototype.h=null;function S1(e){return e.h||(e.h=e.i())}function jb(){}var nl={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function iv(){_t.call(this,"d")}gt(iv,_t);function ov(){_t.call(this,"c")}gt(ov,_t);var Vp;function Pd(){}gt(Pd,rv);Pd.prototype.g=function(){return new XMLHttpRequest};Pd.prototype.i=function(){return{}};Vp=new Pd;function rl(e,t,n,r){this.l=e,this.j=t,this.m=n,this.U=r||1,this.S=new Ca(this),this.O=pO,e=Mp?125:void 0,this.T=new Ad(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new zb}function zb(){this.i=null,this.g="",this.h=!1}var pO=45e3,Bp={},wc={};K=rl.prototype;K.setTimeout=function(e){this.O=e};function Hp(e,t,n){e.K=1,e.v=Md(nr(t)),e.s=n,e.P=!0,Vb(e,null)}function Vb(e,t){e.F=Date.now(),il(e),e.A=nr(e.v);var n=e.A,r=e.U;Array.isArray(r)||(r=[String(r)]),Yb(n.i,"t",r),e.C=0,n=e.l.H,e.h=new zb,e.g=vT(e.l,n?t:null,!e.s),0<e.N&&(e.L=new uO(Ct(e.La,e,e.g),e.N)),Pb(e.S,e.g,"readystatechange",e.ib),t=e.H?Tb(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),_a(),cO(e.j,e.u,e.A,e.m,e.U,e.s)}K.ib=function(e){e=e.target;const t=this.L;t&&Kn(e)==3?t.l():this.La(e)};K.La=function(e){try{if(e==this.g)e:{const c=Kn(this.g);var t=this.g.Ea();const d=this.g.aa();if(!(3>c)&&(c!=3||Mp||this.g&&(this.h.h||this.g.fa()||C1(this.g)))){this.I||c!=4||t==7||(t==8||0>=d?_a(3):_a(2)),Dd(this);var n=this.g.aa();this.Y=n;t:if(Bb(this)){var r=C1(this.g);e="";var i=r.length,o=Kn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){gi(this),Qs(this);var s="";break t}this.h.i=new ie.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:o&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,s=this.h.g}else s=this.g.fa();if(this.i=n==200,dO(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!vc(a)){var u=a;break t}}u=null}if(n=u)vo(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Wp(this,n);else{this.i=!1,this.o=3,Nt(12),gi(this),Qs(this);break e}}this.P?(Hb(this,c,s),Mp&&this.i&&c==3&&(Pb(this.S,this.T,"tick",this.hb),this.T.start())):(vo(this.j,this.m,s,null),Wp(this,s)),c==4&&gi(this),this.i&&!this.I&&(c==4?fT(this.l,this):(this.i=!1,il(this)))}else n==400&&0<s.indexOf("Unknown SID")?(this.o=3,Nt(12)):(this.o=0,Nt(13)),gi(this),Qs(this)}}}catch{}finally{}};function Bb(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Da:!1}function Hb(e,t,n){let r=!0,i;for(;!e.I&&e.C<n.length;)if(i=mO(e,n),i==wc){t==4&&(e.o=4,Nt(14),r=!1),vo(e.j,e.m,null,"[Incomplete Response]");break}else if(i==Bp){e.o=4,Nt(15),vo(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else vo(e.j,e.m,i,null),Wp(e,i);Bb(e)&&i!=wc&&i!=Bp&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,Nt(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),hv(t),t.K=!0,Nt(11))):(vo(e.j,e.m,n,"[Invalid Chunked Response]"),gi(e),Qs(e))}K.hb=function(){if(this.g){var e=Kn(this.g),t=this.g.fa();this.C<t.length&&(Dd(this),Hb(this,e,t),this.i&&e!=4&&il(this))}};function mO(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?wc:(n=Number(t.substring(n,r)),isNaN(n)?Bp:(r+=1,r+n>t.length?wc:(t=t.substr(r,n),e.C=r+n,t)))}K.cancel=function(){this.I=!0,gi(this)};function il(e){e.V=Date.now()+e.O,Wb(e,e.O)}function Wb(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=tl(Ct(e.gb,e),t)}function Dd(e){e.B&&(ie.clearTimeout(e.B),e.B=null)}K.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(hO(this.j,this.A),this.K!=2&&(_a(),Nt(17)),gi(this),this.o=2,Qs(this)):Wb(this,this.V-e)};function Qs(e){e.l.G==0||e.I||fT(e.l,e)}function gi(e){Dd(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,tv(e.T),Db(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Wp(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||qp(n.h,e))){if(!e.J&&qp(n.h,e)&&n.G==3){try{var r=n.Fa.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)bc(n),Ud(n);else break e;dv(n),Nt(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=tl(Ct(n.cb,n),6e3));if(1>=Zb(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else vi(n,11)}else if((e.J||n.g==e)&&bc(n),!vc(t))for(i=n.Fa.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const c=u[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const d=u[4];d!=null&&(n.Ca=d,n.j.info("SVER="+n.Ca));const h=u[5];h!=null&&typeof h=="number"&&0<h&&(r=1.5*h,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=e.g;if(f){const v=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var o=r.h;o.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(o.j=o.l,o.g=new Set,o.h&&(sv(o,o.h),o.h=null))}if(r.D){const p=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;p&&(r.za=p,Me(r.F,r.D,p))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var s=e;if(r.sa=gT(r,r.H?r.ka:null,r.V),s.J){eT(r.h,s);var a=s,l=r.J;l&&a.setTimeout(l),a.B&&(Dd(a),il(a)),r.g=s}else dT(r);0<n.i.length&&jd(n)}else u[0]!="stop"&&u[0]!="close"||vi(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?vi(n,7):cv(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}_a(4)}catch{}}function gO(e){if(e.W&&typeof e.W=="function")return e.W();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(_d(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function vO(e){if(e.oa&&typeof e.oa=="function")return e.oa();if(!e.W||typeof e.W!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(_d(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function qb(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(_d(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=vO(e),r=gO(e),i=r.length,o=0;o<i;o++)t.call(void 0,r[o],n&&n[o],e)}var Gb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function yO(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var o=e[n].substring(0,r);i=e[n].substring(r+1)}else o=e[n];t(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function bi(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof bi){this.h=t!==void 0?t:e.h,Ec(this,e.j),this.s=e.s,this.g=e.g,Sc(this,e.m),this.l=e.l,t=e.i;var n=new ka;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),b1(this,n),this.o=e.o}else e&&(n=String(e).match(Gb))?(this.h=!!t,Ec(this,n[1]||"",!0),this.s=Ps(n[2]||""),this.g=Ps(n[3]||"",!0),Sc(this,n[4]),this.l=Ps(n[5]||"",!0),b1(this,n[6]||"",!0),this.o=Ps(n[7]||"")):(this.h=!!t,this.i=new ka(null,this.h))}bi.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Ds(t,T1,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Ds(t,T1,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Ds(n,n.charAt(0)=="/"?SO:EO,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Ds(n,TO)),e.join("")};function nr(e){return new bi(e)}function Ec(e,t,n){e.j=n?Ps(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Sc(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function b1(e,t,n){t instanceof ka?(e.i=t,xO(e.i,e.h)):(n||(t=Ds(t,bO)),e.i=new ka(t,e.h))}function Me(e,t,n){e.i.set(t,n)}function Md(e){return Me(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Ps(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Ds(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,wO),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function wO(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var T1=/[#\/\?@]/g,EO=/[#\?:]/g,SO=/[#\?]/g,bO=/[#\?@]/g,TO=/#/g;function ka(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function ii(e){e.g||(e.g=new Map,e.h=0,e.i&&yO(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}K=ka.prototype;K.add=function(e,t){ii(this),this.i=null,e=ls(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Kb(e,t){ii(e),t=ls(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Qb(e,t){return ii(e),t=ls(e,t),e.g.has(t)}K.forEach=function(e,t){ii(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};K.oa=function(){ii(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let o=0;o<i.length;o++)n.push(t[r])}return n};K.W=function(e){ii(this);let t=[];if(typeof e=="string")Qb(this,e)&&(t=t.concat(this.g.get(ls(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};K.set=function(e,t){return ii(this),this.i=null,e=ls(this,e),Qb(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};K.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t};function Yb(e,t,n){Kb(e,t),0<n.length&&(e.i=null,e.g.set(ls(e,t),Gg(n)),e.h+=n.length)}K.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const o=encodeURIComponent(String(r)),s=this.W(r);for(r=0;r<s.length;r++){var i=o;s[r]!==""&&(i+="="+encodeURIComponent(String(s[r]))),e.push(i)}}return this.i=e.join("&")};function ls(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function xO(e,t){t&&!e.j&&(ii(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Kb(this,r),Yb(this,i,n))},e)),e.j=t}var CO=class{constructor(t,n){this.h=t,this.g=n}};function Xb(e){this.l=e||_O,ie.PerformanceNavigationTiming?(e=ie.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(ie.g&&ie.g.Ga&&ie.g.Ga()&&ie.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var _O=10;function Jb(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Zb(e){return e.h?1:e.g?e.g.size:0}function qp(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function sv(e,t){e.g?e.g.add(t):e.h=t}function eT(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Xb.prototype.cancel=function(){if(this.i=tT(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function tT(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return Gg(e.i)}function av(){}av.prototype.stringify=function(e){return ie.JSON.stringify(e,void 0)};av.prototype.parse=function(e){return ie.JSON.parse(e,void 0)};function kO(){this.g=new av}function IO(e,t,n){const r=n||"";try{qb(e,function(i,o){let s=i;Za(i)&&(s=ev(i)),t.push(r+o+"="+encodeURIComponent(s))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function $O(e,t){const n=new Rd;if(ie.Image){const r=new Image;r.onload=Hl(ql,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Hl(ql,n,r,"TestLoadImage: error",!1,t),r.onabort=Hl(ql,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Hl(ql,n,r,"TestLoadImage: timeout",!1,t),ie.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function ql(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function ol(e){this.l=e.ac||null,this.j=e.jb||!1}gt(ol,rv);ol.prototype.g=function(){return new Ld(this.l,this.j)};ol.prototype.i=function(e){return function(){return e}}({});function Ld(e,t){ot.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=lv,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}gt(Ld,ot);var lv=0;K=Ld.prototype;K.open=function(e,t){if(this.readyState!=lv)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Ia(this)};K.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||ie).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))};K.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,sl(this)),this.readyState=lv};K.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Ia(this)),this.g&&(this.readyState=3,Ia(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof ie.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;nT(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))};function nT(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}K.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?sl(this):Ia(this),this.readyState==3&&nT(this)}};K.Va=function(e){this.g&&(this.response=this.responseText=e,sl(this))};K.Ua=function(e){this.g&&(this.response=e,sl(this))};K.ga=function(){this.g&&sl(this)};function sl(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Ia(e)}K.setRequestHeader=function(e,t){this.v.append(e,t)};K.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};K.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Ia(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Ld.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var AO=ie.JSON.parse;function ze(e){ot.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=rT,this.K=this.L=!1}gt(ze,ot);var rT="",RO=/^https?$/i,NO=["POST","PUT"];K=ze.prototype;K.Ka=function(e){this.L=e};K.da=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Vp.g(),this.C=this.u?S1(this.u):S1(Vp),this.g.onreadystatechange=Ct(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(o){x1(this,o);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const o of r.keys())n.set(o,r.get(o));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(o=>o.toLowerCase()=="content-type"),i=ie.FormData&&e instanceof ie.FormData,!(0<=wb(NO,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,s]of n)this.g.setRequestHeader(o,s);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{sT(this),0<this.B&&((this.K=OO(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ct(this.qa,this)):this.A=nv(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(o){x1(this,o)}};function OO(e){return Go&&YN()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}K.qa=function(){typeof qg<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ft(this,"timeout"),this.abort(8))};function x1(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,iT(e),Fd(e)}function iT(e){e.D||(e.D=!0,ft(e,"complete"),ft(e,"error"))}K.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,ft(this,"complete"),ft(this,"abort"),Fd(this))};K.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Fd(this,!0)),ze.X.M.call(this)};K.Ha=function(){this.s||(this.F||this.v||this.l?oT(this):this.fb())};K.fb=function(){oT(this)};function oT(e){if(e.h&&typeof qg<"u"&&(!e.C[1]||Kn(e)!=4||e.aa()!=2)){if(e.v&&Kn(e)==4)nv(e.Ha,0,e);else if(ft(e,"readystatechange"),Kn(e)==4){e.h=!1;try{const a=e.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=a===0){var i=String(e.H).match(Gb)[1]||null;if(!i&&ie.self&&ie.self.location){var o=ie.self.location.protocol;i=o.substr(0,o.length-1)}r=!RO.test(i?i.toLowerCase():"")}n=r}if(n)ft(e,"complete"),ft(e,"success");else{e.m=6;try{var s=2<Kn(e)?e.g.statusText:""}catch{s=""}e.j=s+" ["+e.aa()+"]",iT(e)}}finally{Fd(e)}}}}function Fd(e,t){if(e.g){sT(e);const n=e.g,r=e.C[0]?gc:null;e.g=null,e.C=null,t||ft(e,"ready");try{n.onreadystatechange=r}catch{}}}function sT(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(ie.clearTimeout(e.A),e.A=null)}function Kn(e){return e.g?e.g.readyState:0}K.aa=function(){try{return 2<Kn(this)?this.g.status:-1}catch{return-1}};K.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};K.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),AO(t)}};function C1(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case rT:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}K.Ea=function(){return this.m};K.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function aT(e){let t="";return Qg(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function uv(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=aT(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):Me(e,t,n))}function xs(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function lT(e){this.Ca=0,this.i=[],this.j=new Rd,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=xs("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=xs("baseRetryDelayMs",5e3,e),this.bb=xs("retryDelaySeedMs",1e4,e),this.$a=xs("forwardChannelMaxRetries",2,e),this.ta=xs("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new Xb(e&&e.concurrentRequestLimit),this.Fa=new kO,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}K=lT.prototype;K.ma=8;K.G=1;function cv(e){if(uT(e),e.G==3){var t=e.U++,n=nr(e.F);Me(n,"SID",e.I),Me(n,"RID",t),Me(n,"TYPE","terminate"),al(e,n),t=new rl(e,e.j,t,void 0),t.K=2,t.v=Md(nr(n)),n=!1,ie.navigator&&ie.navigator.sendBeacon&&(n=ie.navigator.sendBeacon(t.v.toString(),"")),!n&&ie.Image&&(new Image().src=t.v,n=!0),n||(t.g=vT(t.l,null),t.g.da(t.v)),t.F=Date.now(),il(t)}mT(e)}function Ud(e){e.g&&(hv(e),e.g.cancel(),e.g=null)}function uT(e){Ud(e),e.u&&(ie.clearTimeout(e.u),e.u=null),bc(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&ie.clearTimeout(e.m),e.m=null)}function jd(e){Jb(e.h)||e.m||(e.m=!0,Rb(e.Ja,e),e.C=0)}function PO(e,t){return Zb(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.D.concat(e.i),!0):e.G==1||e.G==2||e.C>=(e.Za?0:e.$a)?!1:(e.m=tl(Ct(e.Ja,e,t),pT(e,e.C)),e.C++,!0)}K.Ja=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new rl(this,this.j,e,void 0);let o=this.s;if(this.S&&(o?(o=Tb(o),xb(o,this.S)):o=this.S),this.o!==null||this.N||(i.H=o,o=null),this.O)e:{for(var t=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break e}if(t===4096||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=cT(this,i,t),n=nr(this.F),Me(n,"RID",e),Me(n,"CVER",22),this.D&&Me(n,"X-HTTP-Session-Id",this.D),al(this,n),o&&(this.N?t="headers="+encodeURIComponent(String(aT(o)))+"&"+t:this.o&&uv(n,this.o,o)),sv(this.h,i),this.Ya&&Me(n,"TYPE","init"),this.O?(Me(n,"$req",t),Me(n,"SID","null"),i.Z=!0,Hp(i,n,null)):Hp(i,n,t),this.G=2}}else this.G==3&&(e?_1(this,e):this.i.length==0||Jb(this.h)||_1(this))};function _1(e,t){var n;t?n=t.m:n=e.U++;const r=nr(e.F);Me(r,"SID",e.I),Me(r,"RID",n),Me(r,"AID",e.T),al(e,r),e.o&&e.s&&uv(r,e.o,e.s),n=new rl(e,e.j,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=cT(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),sv(e.h,n),Hp(n,r,t)}function al(e,t){e.ia&&Qg(e.ia,function(n,r){Me(t,r,n)}),e.l&&qb({},function(n,r){Me(t,r,n)})}function cT(e,t,n){n=Math.min(e.i.length,n);var r=e.l?Ct(e.l.Ra,e.l,e):null;e:{var i=e.i;let o=-1;for(;;){const s=["count="+n];o==-1?0<n?(o=i[0].h,s.push("ofs="+o)):o=0:s.push("ofs="+o);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=o,0>u)o=Math.max(0,i[l].h-100),a=!1;else try{IO(c,s,"req"+u+"_")}catch{r&&r(c)}}if(a){r=s.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function dT(e){e.g||e.u||(e.Z=1,Rb(e.Ia,e),e.A=0)}function dv(e){return e.g||e.u||3<=e.A?!1:(e.Z++,e.u=tl(Ct(e.Ia,e),pT(e,e.A)),e.A++,!0)}K.Ia=function(){if(this.u=null,hT(this),this.$&&!(this.K||this.g==null||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=tl(Ct(this.eb,this),e)}};K.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Nt(10),Ud(this),hT(this))};function hv(e){e.B!=null&&(ie.clearTimeout(e.B),e.B=null)}function hT(e){e.g=new rl(e,e.j,"rpc",e.Z),e.o===null&&(e.g.H=e.s),e.g.N=0;var t=nr(e.sa);Me(t,"RID","rpc"),Me(t,"SID",e.I),Me(t,"CI",e.L?"0":"1"),Me(t,"AID",e.T),Me(t,"TYPE","xmlhttp"),al(e,t),e.o&&e.s&&uv(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=Md(nr(t)),n.s=null,n.P=!0,Vb(n,e)}K.cb=function(){this.v!=null&&(this.v=null,Ud(this),dv(this),Nt(19))};function bc(e){e.v!=null&&(ie.clearTimeout(e.v),e.v=null)}function fT(e,t){var n=null;if(e.g==t){bc(e),hv(e),e.g=null;var r=2}else if(qp(e.h,t))n=t.D,eT(e.h,t),r=1;else return;if(e.G!=0){if(e.pa=t.Y,t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;r=Nd(),ft(r,new Fb(r,n)),jd(e)}else dT(e);else if(i=t.o,i==3||i==0&&0<e.pa||!(r==1&&PO(e,t)||r==2&&dv(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:vi(e,5);break;case 4:vi(e,10);break;case 3:vi(e,6);break;default:vi(e,2)}}}function pT(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function vi(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var r=Ct(e.kb,e);n||(n=new bi("//www.google.com/images/cleardot.gif"),ie.location&&ie.location.protocol=="http"||Ec(n,"https"),Md(n)),$O(n.toString(),r)}else Nt(2);e.G=0,e.l&&e.l.va(t),mT(e),uT(e)}K.kb=function(e){e?(this.j.info("Successfully pinged google.com"),Nt(2)):(this.j.info("Failed to ping google.com"),Nt(1))};function mT(e){if(e.G=0,e.la=[],e.l){const t=tT(e.h);(t.length!=0||e.i.length!=0)&&(m1(e.la,t),m1(e.la,e.i),e.h.i.length=0,Gg(e.i),e.i.length=0),e.l.ua()}}function gT(e,t,n){var r=n instanceof bi?nr(n):new bi(n,void 0);if(r.g!="")t&&(r.g=t+"."+r.g),Sc(r,r.m);else{var i=ie.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var o=new bi(null,void 0);r&&Ec(o,r),t&&(o.g=t),i&&Sc(o,i),n&&(o.l=n),r=o}return n=e.D,t=e.za,n&&t&&Me(r,n,t),Me(r,"VER",e.ma),al(e,r),r}function vT(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new ze(new ol({jb:!0})):new ze(e.ra),t.Ka(e.H),t}function yT(){}K=yT.prototype;K.xa=function(){};K.wa=function(){};K.va=function(){};K.ua=function(){};K.Ra=function(){};function Tc(){if(Go&&!(10<=Number(XN)))throw Error("Environmental error: no available transport.")}Tc.prototype.g=function(e,t){return new Qt(e,t)};function Qt(e,t){ot.call(this),this.g=new lT(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!vc(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!vc(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new us(this)}gt(Qt,ot);Qt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;Nt(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=gT(e,null,e.V),jd(e)};Qt.prototype.close=function(){cv(this.g)};Qt.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=ev(e),e=n);t.i.push(new CO(t.ab++,e)),t.G==3&&jd(t)};Qt.prototype.M=function(){this.g.l=null,delete this.j,cv(this.g),delete this.g,Qt.X.M.call(this)};function wT(e){iv.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}gt(wT,iv);function ET(){ov.call(this),this.status=1}gt(ET,ov);function us(e){this.g=e}gt(us,yT);us.prototype.xa=function(){ft(this.g,"a")};us.prototype.wa=function(e){ft(this.g,new wT(e))};us.prototype.va=function(e){ft(this.g,new ET)};us.prototype.ua=function(){ft(this.g,"b")};Tc.prototype.createWebChannel=Tc.prototype.g;Qt.prototype.send=Qt.prototype.u;Qt.prototype.open=Qt.prototype.m;Qt.prototype.close=Qt.prototype.close;Od.NO_ERROR=0;Od.TIMEOUT=8;Od.HTTP_ERROR=6;Ub.COMPLETE="complete";jb.EventType=nl;nl.OPEN="a";nl.CLOSE="b";nl.ERROR="c";nl.MESSAGE="d";ot.prototype.listen=ot.prototype.N;ze.prototype.listenOnce=ze.prototype.O;ze.prototype.getLastError=ze.prototype.Oa;ze.prototype.getLastErrorCode=ze.prototype.Ea;ze.prototype.getStatus=ze.prototype.aa;ze.prototype.getResponseJson=ze.prototype.Sa;ze.prototype.getResponseText=ze.prototype.fa;ze.prototype.send=ze.prototype.da;ze.prototype.setWithCredentials=ze.prototype.Ka;var DO=function(){return new Tc},MO=function(){return Nd()},of=Od,LO=Ub,FO=Vi,k1={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},UO=ol,Gl=jb,jO=ze;const I1="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let St=class{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}};St.UNAUTHENTICATED=new St(null),St.GOOGLE_CREDENTIALS=new St("google-credentials-uid"),St.FIRST_PARTY=new St("first-party-uid"),St.MOCK_USER=new St("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cs="9.15.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Li=new Pg("@firebase/firestore");function $1(){return Li.logLevel}function Q(e,...t){if(Li.logLevel<=Se.DEBUG){const n=t.map(fv);Li.debug(`Firestore (${cs}): ${e}`,...n)}}function rr(e,...t){if(Li.logLevel<=Se.ERROR){const n=t.map(fv);Li.error(`Firestore (${cs}): ${e}`,...n)}}function Gp(e,...t){if(Li.logLevel<=Se.WARN){const n=t.map(fv);Li.warn(`Firestore (${cs}): ${e}`,...n)}}function fv(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(e="Unexpected state"){const t=`FIRESTORE (${cs}) INTERNAL ASSERTION FAILED: `+e;throw rr(t),new Error(t)}function Ae(e,t){e||re()}function ae(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};let W=class extends cr{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zr=class{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ST=class{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}},zO=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(St.UNAUTHENTICATED))}shutdown(){}},VO=class{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}};class BO{constructor(t){this.t=t,this.currentUser=St.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let o=new zr;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new zr,t.enqueueRetryable(()=>i(this.currentUser))};const s=()=>{const l=o;t.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{Q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(Q("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new zr)}},0),s()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(Q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ae(typeof r.accessToken=="string"),new ST(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Ae(t===null||typeof t=="string"),new St(t)}}let HO=class{constructor(t,n,r,i){this.h=t,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=St.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Ae(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}},WO=class{constructor(t,n,r,i){this.h=t,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new HO(this.h,this.l,this.m,this.g))}start(t,n){t.enqueueRetryable(()=>n(St.FIRST_PARTY))}shutdown(){}invalidateToken(){}},qO=class{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}},GO=class{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,n){const r=o=>{o.error!=null&&Q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const s=o.token!==this.A;return this.A=o.token,Q("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?n(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const i=o=>{Q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.T.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.T.getImmediate({optional:!0});o?i(o):Q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Ae(typeof n.token=="string"),this.A=n.token,new qO(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KO(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bT{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=KO(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<n&&(r+=t.charAt(i[o]%t.length))}return r}}function Te(e,t){return e<t?-1:e>t?1:0}function Ko(e,t,n){return e.length===t.length&&e.every((r,i)=>n(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new W(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new W(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new W(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Xe.fromMillis(Date.now())}static fromDate(t){return Xe.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new Xe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Te(this.nanoseconds,t.nanoseconds):Te(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(t){this.timestamp=t}static fromTimestamp(t){return new se(t)}static min(){return new se(new Xe(0,0))}static max(){return new se(new Xe(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(t,n,r){n===void 0?n=0:n>t.length&&re(),r===void 0?r=t.length-n:r>t.length-n&&re(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return $a.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof $a?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let i=0;i<r;i++){const o=t.get(i),s=n.get(i);if(o<s)return-1;if(o>s)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class Ie extends $a{construct(t,n,r){return new Ie(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new W(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ie(n)}static emptyPath(){return new Ie([])}}const QO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class xt extends $a{construct(t,n,r){return new xt(t,n,r)}static isValidIdentifier(t){return QO.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),xt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new xt(["__name__"])}static fromServerFormat(t){const n=[];let r="",i=0;const o=()=>{if(r.length===0)throw new W(k.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let s=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new W(k.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new W(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=l,i+=2}else a==="`"?(s=!s,i++):a!=="."||s?(r+=a,i++):(o(),i++)}if(o(),s)throw new W(k.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new xt(n)}static emptyPath(){return new xt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t){this.path=t}static fromPath(t){return new X(Ie.fromString(t))}static fromName(t){return new X(Ie.fromString(t).popFirst(5))}static empty(){return new X(Ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Ie.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return Ie.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new X(new Ie(t.slice()))}}function YO(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=se.fromTimestamp(r===1e9?new Xe(n+1,0):new Xe(n,r));return new Qr(i,X.empty(),t)}function XO(e){return new Qr(e.readTime,e.key,-1)}class Qr{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new Qr(se.min(),X.empty(),-1)}static max(){return new Qr(se.max(),X.empty(),-1)}}function JO(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=X.comparator(e.documentKey,t.documentKey),n!==0?n:Te(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class eP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ll(e){if(e.code!==k.FAILED_PRECONDITION||e.message!==ZO)throw e;Q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&re(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new M((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(n,o).next(r,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):M.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):M.reject(n)}static resolve(t){return new M((n,r)=>{n(t)})}static reject(t){return new M((n,r)=>{r(t)})}static waitFor(t){return new M((n,r)=>{let i=0,o=0,s=!1;t.forEach(a=>{++i,a.next(()=>{++o,s&&o===i&&n()},l=>r(l))}),s=!0,o===i&&n()})}static or(t){let n=M.resolve(!1);for(const r of t)n=n.next(i=>i?M.resolve(i):r());return n}static forEach(t,n){const r=[];return t.forEach((i,o)=>{r.push(n.call(this,i,o))}),this.waitFor(r)}static mapArray(t,n){return new M((r,i)=>{const o=t.length,s=new Array(o);let a=0;for(let l=0;l<o;l++){const u=l;n(t[u]).next(c=>{s[u]=c,++a,a===o&&r(s)},c=>i(c))}})}static doWhile(t,n){return new M((r,i)=>{const o=()=>{t()===!0?n().next(()=>{o()},i):r()};o()})}}function ul(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}}pv.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tP{constructor(t,n,r,i,o,s,a,l){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Aa{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Aa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Aa&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A1(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Bi(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function TT(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zd(e){return e==null}function xc(e){return e===0&&1/e==-1/0}function nP(e){return typeof e=="number"&&Number.isInteger(e)&&!xc(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t){this.binaryString=t}static fromBase64String(t){const n=atob(t);return new At(n)}static fromUint8Array(t){const n=function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i}(t);return new At(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Te(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}At.EMPTY_BYTE_STRING=new At("");const rP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Yr(e){if(Ae(!!e),typeof e=="string"){let t=0;const n=rP.exec(e);if(Ae(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:qe(e.seconds),nanos:qe(e.nanos)}}function qe(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Qo(e){return typeof e=="string"?At.fromBase64String(e):At.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xT(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function CT(e){const t=e.mapValue.fields.__previous_value__;return xT(t)?CT(t):t}function Ra(e){const t=Yr(e.mapValue.fields.__local_write_time__.timestampValue);return new Xe(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Fi(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?xT(e)?4:iP(e)?9007199254740991:10:re()}function Ln(e,t){if(e===t)return!0;const n=Fi(e);if(n!==Fi(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Ra(e).isEqual(Ra(t));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const o=Yr(r.timestampValue),s=Yr(i.timestampValue);return o.seconds===s.seconds&&o.nanos===s.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(r,i){return Qo(r.bytesValue).isEqual(Qo(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(r,i){return qe(r.geoPointValue.latitude)===qe(i.geoPointValue.latitude)&&qe(r.geoPointValue.longitude)===qe(i.geoPointValue.longitude)}(e,t);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return qe(r.integerValue)===qe(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const o=qe(r.doubleValue),s=qe(i.doubleValue);return o===s?xc(o)===xc(s):isNaN(o)&&isNaN(s)}return!1}(e,t);case 9:return Ko(e.arrayValue.values||[],t.arrayValue.values||[],Ln);case 10:return function(r,i){const o=r.mapValue.fields||{},s=i.mapValue.fields||{};if(A1(o)!==A1(s))return!1;for(const a in o)if(o.hasOwnProperty(a)&&(s[a]===void 0||!Ln(o[a],s[a])))return!1;return!0}(e,t);default:return re()}}function Na(e,t){return(e.values||[]).find(n=>Ln(n,t))!==void 0}function Yo(e,t){if(e===t)return 0;const n=Fi(e),r=Fi(t);if(n!==r)return Te(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Te(e.booleanValue,t.booleanValue);case 2:return function(i,o){const s=qe(i.integerValue||i.doubleValue),a=qe(o.integerValue||o.doubleValue);return s<a?-1:s>a?1:s===a?0:isNaN(s)?isNaN(a)?0:-1:1}(e,t);case 3:return R1(e.timestampValue,t.timestampValue);case 4:return R1(Ra(e),Ra(t));case 5:return Te(e.stringValue,t.stringValue);case 6:return function(i,o){const s=Qo(i),a=Qo(o);return s.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(i,o){const s=i.split("/"),a=o.split("/");for(let l=0;l<s.length&&l<a.length;l++){const u=Te(s[l],a[l]);if(u!==0)return u}return Te(s.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,o){const s=Te(qe(i.latitude),qe(o.latitude));return s!==0?s:Te(qe(i.longitude),qe(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,o){const s=i.values||[],a=o.values||[];for(let l=0;l<s.length&&l<a.length;++l){const u=Yo(s[l],a[l]);if(u)return u}return Te(s.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,o){if(i===Kl.mapValue&&o===Kl.mapValue)return 0;if(i===Kl.mapValue)return 1;if(o===Kl.mapValue)return-1;const s=i.fields||{},a=Object.keys(s),l=o.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const d=Te(a[c],u[c]);if(d!==0)return d;const h=Yo(s[a[c]],l[u[c]]);if(h!==0)return h}return Te(a.length,u.length)}(e.mapValue,t.mapValue);default:throw re()}}function R1(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return Te(e,t);const n=Yr(e),r=Yr(t),i=Te(n.seconds,r.seconds);return i!==0?i:Te(n.nanos,r.nanos)}function Xo(e){return Kp(e)}function Kp(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(r){const i=Yr(r);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Qo(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,X.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(r){let i="[",o=!0;for(const s of r.values||[])o?o=!1:i+=",",i+=Kp(s);return i+"]"}(e.arrayValue):"mapValue"in e?function(r){const i=Object.keys(r.fields||{}).sort();let o="{",s=!0;for(const a of i)s?s=!1:o+=",",o+=`${a}:${Kp(r.fields[a])}`;return o+"}"}(e.mapValue):re();var t,n}function N1(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Qp(e){return!!e&&"integerValue"in e}function mv(e){return!!e&&"arrayValue"in e}function O1(e){return!!e&&"nullValue"in e}function P1(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function wu(e){return!!e&&"mapValue"in e}function Ys(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Bi(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=Ys(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Ys(e.arrayValue.values[n]);return t}return Object.assign({},e)}function iP(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(t,n){this.position=t,this.inclusive=n}}function D1(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const o=t[i],s=e.position[i];if(o.field.isKeyField()?r=X.comparator(X.fromName(s.referenceValue),n.key):r=Yo(s,n.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function M1(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Ln(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _T{}class Ke extends _T{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new aP(t,n,r):n==="array-contains"?new cP(t,r):n==="in"?new dP(t,r):n==="not-in"?new hP(t,r):n==="array-contains-any"?new fP(t,r):new Ke(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new lP(t,r):new uP(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Yo(n,this.value)):n!==null&&Fi(this.value)===Fi(n)&&this.matchesComparison(Yo(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return re()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Tn extends _T{constructor(t,n){super(),this.filters=t,this.op=n,this.ht=null}static create(t,n){return new Tn(t,n)}matches(t){return kT(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.lt(n=>n.isInequality());return t!==null?t.field:null}lt(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function kT(e){return e.op==="and"}function oP(e){return sP(e)&&kT(e)}function sP(e){for(const t of e.filters)if(t instanceof Tn)return!1;return!0}function IT(e){if(e instanceof Ke)return e.field.canonicalString()+e.op.toString()+Xo(e.value);{const t=e.filters.map(n=>IT(n)).join(",");return`${e.op}(${t})`}}function $T(e,t){return e instanceof Ke?function(n,r){return r instanceof Ke&&n.op===r.op&&n.field.isEqual(r.field)&&Ln(n.value,r.value)}(e,t):e instanceof Tn?function(n,r){return r instanceof Tn&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,o,s)=>i&&$T(o,r.filters[s]),!0):!1}(e,t):void re()}function AT(e){return e instanceof Ke?function(t){return`${t.field.canonicalString()} ${t.op} ${Xo(t.value)}`}(e):e instanceof Tn?function(t){return t.op.toString()+" {"+t.getFilters().map(AT).join(" ,")+"}"}(e):"Filter"}class aP extends Ke{constructor(t,n,r){super(t,n,r),this.key=X.fromName(r.referenceValue)}matches(t){const n=X.comparator(t.key,this.key);return this.matchesComparison(n)}}class lP extends Ke{constructor(t,n){super(t,"in",n),this.keys=RT("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class uP extends Ke{constructor(t,n){super(t,"not-in",n),this.keys=RT("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function RT(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>X.fromName(r.referenceValue))}class cP extends Ke{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return mv(n)&&Na(n.arrayValue,this.value)}}class dP extends Ke{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Na(this.value.arrayValue,n)}}class hP extends Ke{constructor(t,n){super(t,"not-in",n)}matches(t){if(Na(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Na(this.value.arrayValue,n)}}class fP extends Ke{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!mv(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Na(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(t,n="asc"){this.field=t,this.dir=n}}function pP(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(t,n){this.comparator=t,this.root=n||dt.EMPTY}insert(t,n){return new tt(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,dt.BLACK,null,null))}remove(t){return new tt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,dt.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ql(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ql(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ql(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ql(this.root,t,this.comparator,!0)}}class Ql{constructor(t,n,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=n?r(t.key,n):1,n&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class dt{constructor(t,n,r,i,o){this.key=t,this.value=n,this.color=r??dt.RED,this.left=i??dt.EMPTY,this.right=o??dt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,i,o){return new dt(t??this.key,n??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const o=r(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,n,r),null):o===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return dt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return dt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw re();const t=this.left.check();if(t!==this.right.check())throw re();return t+(this.isRed()?0:1)}}dt.EMPTY=null,dt.RED=!0,dt.BLACK=!1;dt.EMPTY=new class{constructor(){this.size=0}get key(){throw re()}get value(){throw re()}get color(){throw re()}get left(){throw re()}get right(){throw re()}copy(e,t,n,r,i){return this}insert(e,t,n){return new dt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(t){this.comparator=t,this.data=new tt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new L1(this.data.getIterator())}getIteratorFrom(t){return new L1(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof Je)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Je(this.comparator);return n.data=t,n}}class L1{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(t){this.fields=t,t.sort(xt.comparator)}static empty(){return new on([])}unionWith(t){let n=new Je(xt.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new on(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Ko(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(t){this.value=t}static empty(){return new Ft({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!wu(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ys(n)}setAll(t){let n=xt.emptyPath(),r={},i=[];t.forEach((s,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}s?r[a.lastSegment()]=Ys(s):i.push(a.lastSegment())});const o=this.getFieldsMap(n);this.applyChanges(o,r,i)}delete(t){const n=this.field(t.popLast());wu(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Ln(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=n.mapValue.fields[t.get(r)];wu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,r){Bi(n,(i,o)=>t[i]=o);for(const i of r)delete t[i]}clone(){return new Ft(Ys(this.value))}}function NT(e){const t=[];return Bi(e.fields,(n,r)=>{const i=new xt([n]);if(wu(r)){const o=NT(r.mapValue).fields;if(o.length===0)t.push(i);else for(const s of o)t.push(i.child(s))}else t.push(i)}),new on(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(t,n,r,i,o,s,a){this.key=t,this.documentType=n,this.version=r,this.readTime=i,this.createTime=o,this.data=s,this.documentState=a}static newInvalidDocument(t){return new Tt(t,0,se.min(),se.min(),se.min(),Ft.empty(),0)}static newFoundDocument(t,n,r,i){return new Tt(t,1,n,se.min(),r,i,0)}static newNoDocument(t,n){return new Tt(t,2,n,se.min(),se.min(),Ft.empty(),0)}static newUnknownDocument(t,n){return new Tt(t,3,n,se.min(),se.min(),Ft.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ft.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ft.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=se.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Tt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mP{constructor(t,n=null,r=[],i=[],o=null,s=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=s,this.endAt=a,this.ft=null}}function F1(e,t=null,n=[],r=[],i=null,o=null,s=null){return new mP(e,t,n,r,i,o,s)}function gv(e){const t=ae(e);if(t.ft===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>IT(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),zd(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>Xo(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>Xo(r)).join(",")),t.ft=n}return t.ft}function vv(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!pP(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!$T(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!M1(e.startAt,t.startAt)&&M1(e.endAt,t.endAt)}function Yp(e){return X.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(t,n=null,r=[],i=[],o=null,s="F",a=null,l=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=s,this.startAt=a,this.endAt=l,this.dt=null,this._t=null,this.startAt,this.endAt}}function gP(e,t,n,r,i,o,s,a){return new Hi(e,t,n,r,i,o,s,a)}function Vd(e){return new Hi(e)}function U1(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function yv(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Bd(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function OT(e){return e.collectionGroup!==null}function Ao(e){const t=ae(e);if(t.dt===null){t.dt=[];const n=Bd(t),r=yv(t);if(n!==null&&r===null)n.isKeyField()||t.dt.push(new $o(n)),t.dt.push(new $o(xt.keyField(),"asc"));else{let i=!1;for(const o of t.explicitOrderBy)t.dt.push(o),o.field.isKeyField()&&(i=!0);if(!i){const o=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new $o(xt.keyField(),o))}}}return t.dt}function ir(e){const t=ae(e);if(!t._t)if(t.limitType==="F")t._t=F1(t.path,t.collectionGroup,Ao(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const o of Ao(t)){const s=o.dir==="desc"?"asc":"desc";n.push(new $o(o.field,s))}const r=t.endAt?new Cc(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new Cc(t.startAt.position,t.startAt.inclusive):null;t._t=F1(t.path,t.collectionGroup,n,t.filters,t.limit,r,i)}return t._t}function Xp(e,t){t.getFirstInequalityField(),Bd(e);const n=e.filters.concat([t]);return new Hi(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Jp(e,t,n){return new Hi(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Hd(e,t){return vv(ir(e),ir(t))&&e.limitType===t.limitType}function PT(e){return`${gv(ir(e))}|lt:${e.limitType}`}function Zp(e){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(r=>AT(r)).join(", ")}]`),zd(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>Xo(r)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>Xo(r)).join(",")),`Target(${n})`}(ir(e))}; limitType=${e.limitType})`}function wv(e,t){return t.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):X.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(e,t)&&function(n,r){for(const i of Ao(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(e,t)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(e,t)&&function(n,r){return!(n.startAt&&!function(i,o,s){const a=D1(i,o,s);return i.inclusive?a<=0:a<0}(n.startAt,Ao(n),r)||n.endAt&&!function(i,o,s){const a=D1(i,o,s);return i.inclusive?a>=0:a>0}(n.endAt,Ao(n),r))}(e,t)}function vP(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function DT(e){return(t,n)=>{let r=!1;for(const i of Ao(e)){const o=yP(i,t,n);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function yP(e,t,n){const r=e.field.isKeyField()?X.comparator(t.key,n.key):function(i,o,s){const a=o.data.field(i),l=s.data.field(i);return a!==null&&l!==null?Yo(a,l):re()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return re()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MT(e,t){if(e.wt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xc(t)?"-0":t}}function LT(e){return{integerValue:""+e}}function wP(e,t){return nP(t)?LT(t):MT(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(){this._=void 0}}function EP(e,t,n){return e instanceof Oa?function(r,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,t):e instanceof Pa?UT(e,t):e instanceof Da?jT(e,t):function(r,i){const o=FT(r,i),s=j1(o)+j1(r.gt);return Qp(o)&&Qp(r.gt)?LT(s):MT(r.yt,s)}(e,t)}function SP(e,t,n){return e instanceof Pa?UT(e,t):e instanceof Da?jT(e,t):n}function FT(e,t){return e instanceof _c?Qp(n=t)||function(r){return!!r&&"doubleValue"in r}(n)?t:{integerValue:0}:null;var n}class Oa extends Wd{}class Pa extends Wd{constructor(t){super(),this.elements=t}}function UT(e,t){const n=zT(t);for(const r of e.elements)n.some(i=>Ln(i,r))||n.push(r);return{arrayValue:{values:n}}}class Da extends Wd{constructor(t){super(),this.elements=t}}function jT(e,t){let n=zT(t);for(const r of e.elements)n=n.filter(i=>!Ln(i,r));return{arrayValue:{values:n}}}class _c extends Wd{constructor(t,n){super(),this.yt=t,this.gt=n}}function j1(e){return qe(e.integerValue||e.doubleValue)}function zT(e){return mv(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bP{constructor(t,n){this.field=t,this.transform=n}}function TP(e,t){return e.field.isEqual(t.field)&&function(n,r){return n instanceof Pa&&r instanceof Pa||n instanceof Da&&r instanceof Da?Ko(n.elements,r.elements,Ln):n instanceof _c&&r instanceof _c?Ln(n.gt,r.gt):n instanceof Oa&&r instanceof Oa}(e.transform,t.transform)}class xP{constructor(t,n){this.version=t,this.transformResults=n}}class Sn{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Sn}static exists(t){return new Sn(void 0,t)}static updateTime(t){return new Sn(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Eu(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class qd{}function VT(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new HT(e.key,Sn.none()):new cl(e.key,e.data,Sn.none());{const n=e.data,r=Ft.empty();let i=new Je(xt.comparator);for(let o of t.fields)if(!i.has(o)){let s=n.field(o);s===null&&o.length>1&&(o=o.popLast(),s=n.field(o)),s===null?r.delete(o):r.set(o,s),i=i.add(o)}return new oi(e.key,r,new on(i.toArray()),Sn.none())}}function CP(e,t,n){e instanceof cl?function(r,i,o){const s=r.value.clone(),a=V1(r.fieldTransforms,i,o.transformResults);s.setAll(a),i.convertToFoundDocument(o.version,s).setHasCommittedMutations()}(e,t,n):e instanceof oi?function(r,i,o){if(!Eu(r.precondition,i))return void i.convertToUnknownDocument(o.version);const s=V1(r.fieldTransforms,i,o.transformResults),a=i.data;a.setAll(BT(r)),a.setAll(s),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function Xs(e,t,n,r){return e instanceof cl?function(i,o,s,a){if(!Eu(i.precondition,o))return s;const l=i.value.clone(),u=B1(i.fieldTransforms,a,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(e,t,n,r):e instanceof oi?function(i,o,s,a){if(!Eu(i.precondition,o))return s;const l=B1(i.fieldTransforms,a,o),u=o.data;return u.setAll(BT(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),s===null?null:s.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(e,t,n,r):function(i,o,s){return Eu(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):s}(e,t,n)}function _P(e,t){let n=null;for(const r of e.fieldTransforms){const i=t.data.field(r.field),o=FT(r.transform,i||null);o!=null&&(n===null&&(n=Ft.empty()),n.set(r.field,o))}return n||null}function z1(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Ko(n,r,(i,o)=>TP(i,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class cl extends qd{constructor(t,n,r,i=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class oi extends qd{constructor(t,n,r,i,o=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function BT(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function V1(e,t,n){const r=new Map;Ae(e.length===n.length);for(let i=0;i<n.length;i++){const o=e[i],s=o.transform,a=t.data.field(o.field);r.set(o.field,SP(s,a,n[i]))}return r}function B1(e,t,n){const r=new Map;for(const i of e){const o=i.transform,s=n.data.field(i.field);r.set(i.field,EP(o,s,t))}return r}let HT=class extends qd{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}};class kP extends qd{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IP{constructor(t){this.count=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var We,ge;function $P(e){switch(e){default:return re();case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0}}function WT(e){if(e===void 0)return rr("GRPC error has no .code"),k.UNKNOWN;switch(e){case We.OK:return k.OK;case We.CANCELLED:return k.CANCELLED;case We.UNKNOWN:return k.UNKNOWN;case We.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case We.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case We.INTERNAL:return k.INTERNAL;case We.UNAVAILABLE:return k.UNAVAILABLE;case We.UNAUTHENTICATED:return k.UNAUTHENTICATED;case We.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case We.NOT_FOUND:return k.NOT_FOUND;case We.ALREADY_EXISTS:return k.ALREADY_EXISTS;case We.PERMISSION_DENIED:return k.PERMISSION_DENIED;case We.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case We.ABORTED:return k.ABORTED;case We.OUT_OF_RANGE:return k.OUT_OF_RANGE;case We.UNIMPLEMENTED:return k.UNIMPLEMENTED;case We.DATA_LOSS:return k.DATA_LOSS;default:return re()}}(ge=We||(We={}))[ge.OK=0]="OK",ge[ge.CANCELLED=1]="CANCELLED",ge[ge.UNKNOWN=2]="UNKNOWN",ge[ge.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ge[ge.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ge[ge.NOT_FOUND=5]="NOT_FOUND",ge[ge.ALREADY_EXISTS=6]="ALREADY_EXISTS",ge[ge.PERMISSION_DENIED=7]="PERMISSION_DENIED",ge[ge.UNAUTHENTICATED=16]="UNAUTHENTICATED",ge[ge.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ge[ge.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ge[ge.ABORTED=10]="ABORTED",ge[ge.OUT_OF_RANGE=11]="OUT_OF_RANGE",ge[ge.UNIMPLEMENTED=12]="UNIMPLEMENTED",ge[ge.INTERNAL=13]="INTERNAL",ge[ge.UNAVAILABLE=14]="UNAVAILABLE",ge[ge.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Bi(this.inner,(n,r)=>{for(const[i,o]of r)t(i,o)})}isEmpty(){return TT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AP=new tt(X.comparator);function or(){return AP}const qT=new tt(X.comparator);function Ms(...e){let t=qT;for(const n of e)t=t.insert(n.key,n);return t}function GT(e){let t=qT;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function yi(){return Js()}function KT(){return Js()}function Js(){return new ds(e=>e.toString(),(e,t)=>e.isEqual(t))}const RP=new tt(X.comparator),NP=new Je(X.comparator);function he(...e){let t=NP;for(const n of e)t=t.add(n);return t}const OP=new Je(Te);function QT(){return OP}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(t,n,r,i,o){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const i=new Map;return i.set(t,dl.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new Gd(se.min(),i,QT(),or(),he())}}class dl{constructor(t,n,r,i,o){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new dl(r,n,he(),he(),he())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(t,n,r,i){this.It=t,this.removedTargetIds=n,this.key=r,this.Tt=i}}class YT{constructor(t,n){this.targetId=t,this.Et=n}}class XT{constructor(t,n,r=At.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=i}}class H1{constructor(){this.At=0,this.Rt=q1(),this.bt=At.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(t){t.approximateByteSize()>0&&(this.vt=!0,this.bt=t)}Ct(){let t=he(),n=he(),r=he();return this.Rt.forEach((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:re()}}),new dl(this.bt,this.Pt,t,n,r)}xt(){this.vt=!1,this.Rt=q1()}Nt(t,n){this.vt=!0,this.Rt=this.Rt.insert(t,n)}kt(t){this.vt=!0,this.Rt=this.Rt.remove(t)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class PP{constructor(t){this.$t=t,this.Bt=new Map,this.Lt=or(),this.qt=W1(),this.Ut=new Je(Te)}Kt(t){for(const n of t.It)t.Tt&&t.Tt.isFoundDocument()?this.Gt(n,t.Tt):this.Qt(n,t.key,t.Tt);for(const n of t.removedTargetIds)this.Qt(n,t.key,t.Tt)}jt(t){this.forEachTarget(t,n=>{const r=this.Wt(n);switch(t.state){case 0:this.zt(n)&&r.Dt(t.resumeToken);break;case 1:r.Mt(),r.Vt||r.xt(),r.Dt(t.resumeToken);break;case 2:r.Mt(),r.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(r.Ft(),r.Dt(t.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),r.Dt(t.resumeToken));break;default:re()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Bt.forEach((r,i)=>{this.zt(i)&&n(i)})}Jt(t){const n=t.targetId,r=t.Et.count,i=this.Yt(n);if(i){const o=i.target;if(Yp(o))if(r===0){const s=new X(o.path);this.Qt(n,s,Tt.newNoDocument(s,se.min()))}else Ae(r===1);else this.Xt(n)!==r&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(t){const n=new Map;this.Bt.forEach((o,s)=>{const a=this.Yt(s);if(a){if(o.current&&Yp(a.target)){const l=new X(a.target.path);this.Lt.get(l)!==null||this.te(s,l)||this.Qt(s,l,Tt.newNoDocument(l,t))}o.St&&(n.set(s,o.Ct()),o.xt())}});let r=he();this.qt.forEach((o,s)=>{let a=!0;s.forEachWhile(l=>{const u=this.Yt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(o))}),this.Lt.forEach((o,s)=>s.setReadTime(t));const i=new Gd(t,n,this.Ut,this.Lt,r);return this.Lt=or(),this.qt=W1(),this.Ut=new Je(Te),i}Gt(t,n){if(!this.zt(t))return;const r=this.te(t,n.key)?2:0;this.Wt(t).Nt(n.key,r),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(t))}Qt(t,n,r){if(!this.zt(t))return;const i=this.Wt(t);this.te(t,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(t)),r&&(this.Lt=this.Lt.insert(n,r))}removeTarget(t){this.Bt.delete(t)}Xt(t){const n=this.Wt(t).Ct();return this.$t.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ot(t){this.Wt(t).Ot()}Wt(t){let n=this.Bt.get(t);return n||(n=new H1,this.Bt.set(t,n)),n}ee(t){let n=this.qt.get(t);return n||(n=new Je(Te),this.qt=this.qt.insert(t,n)),n}zt(t){const n=this.Yt(t)!==null;return n||Q("WatchChangeAggregator","Detected inactive target",t),n}Yt(t){const n=this.Bt.get(t);return n&&n.Vt?null:this.$t.ne(t)}Ht(t){this.Bt.set(t,new H1),this.$t.getRemoteKeysForTarget(t).forEach(n=>{this.Qt(t,n,null)})}te(t,n){return this.$t.getRemoteKeysForTarget(t).has(n)}}function W1(){return new tt(X.comparator)}function q1(){return new tt(X.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DP=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),MP=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),LP=(()=>({and:"AND",or:"OR"}))();class FP{constructor(t,n){this.databaseId=t,this.wt=n}}function kc(e,t){return e.wt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function JT(e,t){return e.wt?t.toBase64():t.toUint8Array()}function UP(e,t){return kc(e,t.toTimestamp())}function Mn(e){return Ae(!!e),se.fromTimestamp(function(t){const n=Yr(t);return new Xe(n.seconds,n.nanos)}(e))}function Ev(e,t){return function(n){return new Ie(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function ZT(e){const t=Ie.fromString(e);return Ae(rx(t)),t}function em(e,t){return Ev(e.databaseId,t.path)}function sf(e,t){const n=ZT(t);if(n.get(1)!==e.databaseId.projectId)throw new W(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new W(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new X(ex(n))}function tm(e,t){return Ev(e.databaseId,t)}function jP(e){const t=ZT(e);return t.length===4?Ie.emptyPath():ex(t)}function nm(e){return new Ie(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function ex(e){return Ae(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function G1(e,t,n){return{name:em(e,t),fields:n.value.mapValue.fields}}function zP(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:re()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(l,u){return l.wt?(Ae(u===void 0||typeof u=="string"),At.fromBase64String(u||"")):(Ae(u===void 0||u instanceof Uint8Array),At.fromUint8Array(u||new Uint8Array))}(e,t.targetChange.resumeToken),s=t.targetChange.cause,a=s&&function(l){const u=l.code===void 0?k.UNKNOWN:WT(l.code);return new W(u,l.message||"")}(s);n=new XT(r,i,o,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=sf(e,r.document.name),o=Mn(r.document.updateTime),s=r.document.createTime?Mn(r.document.createTime):se.min(),a=new Ft({mapValue:{fields:r.document.fields}}),l=Tt.newFoundDocument(i,o,s,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Su(u,c,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=sf(e,r.document),o=r.readTime?Mn(r.readTime):se.min(),s=Tt.newNoDocument(i,o),a=r.removedTargetIds||[];n=new Su([],a,s.key,s)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=sf(e,r.document),o=r.removedTargetIds||[];n=new Su([],o,i,null)}else{if(!("filter"in t))return re();{t.filter;const r=t.filter;r.targetId;const i=r.count||0,o=new IP(i),s=r.targetId;n=new YT(s,o)}}return n}function VP(e,t){let n;if(t instanceof cl)n={update:G1(e,t.key,t.value)};else if(t instanceof HT)n={delete:em(e,t.key)};else if(t instanceof oi)n={update:G1(e,t.key,t.data),updateMask:XP(t.fieldMask)};else{if(!(t instanceof kP))return re();n={verify:em(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(i,o){const s=o.transform;if(s instanceof Oa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(s instanceof Pa)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:s.elements}};if(s instanceof Da)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:s.elements}};if(s instanceof _c)return{fieldPath:o.field.canonicalString(),increment:s.gt};throw re()}(0,r))),t.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:UP(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:re()}(e,t.precondition)),n}function BP(e,t){return e&&e.length>0?(Ae(t!==void 0),e.map(n=>function(r,i){let o=r.updateTime?Mn(r.updateTime):Mn(i);return o.isEqual(se.min())&&(o=Mn(i)),new xP(o,r.transformResults||[])}(n,t))):[]}function HP(e,t){return{documents:[tm(e,t.path)]}}function WP(e,t){const n={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(n.parent=tm(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=tm(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return nx(Tn.create(l,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const o=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:eo(c.field),direction:KP(c.dir)}}(u))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const s=function(l,u){return l.wt||zd(u)?u:{value:u}}(e,t.limit);var a;return s!==null&&(n.structuredQuery.limit=s),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(t.endAt)),n}function qP(e){let t=jP(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ae(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:t=t.child(c.collectionId)}let o=[];n.where&&(o=function(c){const d=tx(c);return d instanceof Tn&&oP(d)?d.getFilters():[d]}(n.where));let s=[];n.orderBy&&(s=n.orderBy.map(c=>function(d){return new $o(to(d.field),function(h){switch(h){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(d.direction))}(c)));let a=null;n.limit&&(a=function(c){let d;return d=typeof c=="object"?c.value:c,zd(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(c){const d=!!c.before,h=c.values||[];return new Cc(h,d)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const d=!c.before,h=c.values||[];return new Cc(h,d)}(n.endAt)),gP(t,i,s,o,a,"F",l,u)}function GP(e,t){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return re()}}(0,t.purpose);return n==null?null:{"goog-listen-tags":n}}function tx(e){return e.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=to(t.unaryFilter.field);return Ke.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=to(t.unaryFilter.field);return Ke.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=to(t.unaryFilter.field);return Ke.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=to(t.unaryFilter.field);return Ke.create(o,"!=",{nullValue:"NULL_VALUE"});default:return re()}}(e):e.fieldFilter!==void 0?function(t){return Ke.create(to(t.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return re()}}(t.fieldFilter.op),t.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(t){return Tn.create(t.compositeFilter.filters.map(n=>tx(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return re()}}(t.compositeFilter.op))}(e):re()}function KP(e){return DP[e]}function QP(e){return MP[e]}function YP(e){return LP[e]}function eo(e){return{fieldPath:e.canonicalString()}}function to(e){return xt.fromServerFormat(e.fieldPath)}function nx(e){return e instanceof Ke?function(t){if(t.op==="=="){if(P1(t.value))return{unaryFilter:{field:eo(t.field),op:"IS_NAN"}};if(O1(t.value))return{unaryFilter:{field:eo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(P1(t.value))return{unaryFilter:{field:eo(t.field),op:"IS_NOT_NAN"}};if(O1(t.value))return{unaryFilter:{field:eo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:eo(t.field),op:QP(t.op),value:t.value}}}(e):e instanceof Tn?function(t){const n=t.getFilters().map(r=>nx(r));return n.length===1?n[0]:{compositeFilter:{op:YP(t.op),filters:n}}}(e):re()}function XP(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function rx(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JP{constructor(t,n,r,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&CP(o,t,r[i])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=Xs(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=Xs(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=KT();return this.mutations.forEach(i=>{const o=t.get(i.key),s=o.overlayedDocument;let a=this.applyToLocalView(s,o.mutatedFields);a=n.has(i.key)?null:a;const l=VT(s,a);l!==null&&r.set(i.key,l),s.isValidDocument()||s.convertToNoDocument(se.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),he())}isEqual(t){return this.batchId===t.batchId&&Ko(this.mutations,t.mutations,(n,r)=>z1(n,r))&&Ko(this.baseMutations,t.baseMutations,(n,r)=>z1(n,r))}}class Sv{constructor(t,n,r,i){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(t,n,r){Ae(t.mutations.length===r.length);let i=RP;const o=t.mutations;for(let s=0;s<o.length;s++)i=i.insert(o[s].key,r[s].version);return new Sv(t,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZP{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(t,n,r,i,o=se.min(),s=se.min(),a=At.EMPTY_BYTE_STRING){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a}withSequenceNumber(t){return new Ti(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,n){return new Ti(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Ti(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD{constructor(t){this.ie=t}}function tD(e){const t=qP({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Jp(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD{constructor(){this.Je=new rD}addToCollectionParentIndex(t,n){return this.Je.add(n),M.resolve()}getCollectionParents(t,n){return M.resolve(this.Je.getEntries(n))}addFieldIndex(t,n){return M.resolve()}deleteFieldIndex(t,n){return M.resolve()}getDocumentsMatchingTarget(t,n){return M.resolve(null)}getIndexType(t,n){return M.resolve(0)}getFieldIndexes(t,n){return M.resolve([])}getNextCollectionGroupToUpdate(t){return M.resolve(null)}getMinOffset(t,n){return M.resolve(Qr.min())}getMinOffsetFromCollectionGroup(t,n){return M.resolve(Qr.min())}updateCollectionGroup(t,n,r){return M.resolve()}updateIndexEntries(t,n){return M.resolve()}}class rD{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n]||new Je(Ie.comparator),o=!i.has(r);return this.index[n]=i.add(r),o}has(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(t){return(this.index[t]||new Je(Ie.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(t){this.bn=t}next(){return this.bn+=2,this.bn}static Pn(){return new Jo(0)}static vn(){return new Jo(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iD{constructor(){this.changes=new ds(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Tt.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oD{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sD{constructor(t,n,r,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(r!==null&&Xs(r.mutation,i,on.empty(),Xe.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,he()).next(()=>r))}getLocalViewOfDocuments(t,n,r=he()){const i=yi();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,r).next(o=>{let s=Ms();return o.forEach((a,l)=>{s=s.insert(a,l.overlayedDocument)}),s}))}getOverlayedDocuments(t,n){const r=yi();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,he()))}populateOverlays(t,n,r){const i=[];return r.forEach(o=>{n.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((s,a)=>{n.set(s,a)})})}computeViews(t,n,r,i){let o=or();const s=Js(),a=Js();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof oi)?o=o.insert(u.key,u):c!==void 0&&(s.set(u.key,c.mutation.getFieldMask()),Xs(c.mutation,u,c.mutation.getFieldMask(),Xe.now()))}),this.recalculateAndSaveOverlays(t,o).next(l=>(l.forEach((u,c)=>s.set(u,c)),n.forEach((u,c)=>{var d;return a.set(u,new oD(c,(d=s.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(t,n){const r=Js();let i=new tt((s,a)=>s-a),o=he();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(s=>{for(const a of s)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||on.empty();c=a.applyToLocalView(u,c),r.set(l,c);const d=(i.get(a.batchId)||he()).add(l);i=i.insert(a.batchId,d)})}).next(()=>{const s=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,d=KT();c.forEach(h=>{if(!o.has(h)){const f=VT(n.get(h),r.get(h));f!==null&&d.set(h,f),o=o.add(h)}}),s.push(this.documentOverlayCache.saveOverlays(t,u,d))}return M.waitFor(s)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r){return function(i){return X.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):OT(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r):this.getDocumentsMatchingCollectionQuery(t,n,r)}getNextDocuments(t,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,i).next(o=>{const s=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,i-o.size):M.resolve(yi());let a=-1,l=o;return s.next(u=>M.forEach(u,(c,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),o.get(c)?M.resolve():this.remoteDocumentCache.getEntry(t,c).next(h=>{l=l.insert(c,h)}))).next(()=>this.populateOverlays(t,u,o)).next(()=>this.computeViews(t,l,u,he())).next(c=>({batchId:a,changes:GT(c)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new X(n)).next(r=>{let i=Ms();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,r){const i=n.collectionGroup;let o=Ms();return this.indexManager.getCollectionParents(t,i).next(s=>M.forEach(s,a=>{const l=function(u,c){return new Hi(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(t,l,r).next(u=>{u.forEach((c,d)=>{o=o.insert(c,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(t,n.path,r).next(o=>(i=o,this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId))).next(o=>{o.forEach((a,l)=>{const u=l.getKey();i.get(u)===null&&(i=i.insert(u,Tt.newInvalidDocument(u)))});let s=Ms();return i.forEach((a,l)=>{const u=o.get(a);u!==void 0&&Xs(u.mutation,l,on.empty(),Xe.now()),wv(n,l)&&(s=s.insert(a,l))}),s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aD{constructor(t){this.yt=t,this.Zn=new Map,this.ts=new Map}getBundleMetadata(t,n){return M.resolve(this.Zn.get(n))}saveBundleMetadata(t,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:Mn(r.createTime)}),M.resolve()}getNamedQuery(t,n){return M.resolve(this.ts.get(n))}saveNamedQuery(t,n){return this.ts.set(n.name,function(r){return{name:r.name,query:tD(r.bundledQuery),readTime:Mn(r.readTime)}}(n)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lD{constructor(){this.overlays=new tt(X.comparator),this.es=new Map}getOverlay(t,n){return M.resolve(this.overlays.get(n))}getOverlays(t,n){const r=yi();return M.forEach(n,i=>this.getOverlay(t,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((i,o)=>{this.oe(t,n,o)}),M.resolve()}removeOverlaysForBatchId(t,n,r){const i=this.es.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.es.delete(r)),M.resolve()}getOverlaysForCollection(t,n,r){const i=yi(),o=n.length+1,s=new X(n.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===o&&l.largestBatchId>r&&i.set(l.getKey(),l)}return M.resolve(i)}getOverlaysForCollectionGroup(t,n,r,i){let o=new tt((u,c)=>u-c);const s=this.overlays.getIterator();for(;s.hasNext();){const u=s.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=o.get(u.largestBatchId);c===null&&(c=yi(),o=o.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=yi(),l=o.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return M.resolve(a)}oe(t,n,r){const i=this.overlays.get(r.key);if(i!==null){const s=this.es.get(i.largestBatchId).delete(r.key);this.es.set(i.largestBatchId,s)}this.overlays=this.overlays.insert(r.key,new ZP(n,r));let o=this.es.get(n);o===void 0&&(o=he(),this.es.set(n,o)),this.es.set(n,o.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(){this.ns=new Je(nt.ss),this.rs=new Je(nt.os)}isEmpty(){return this.ns.isEmpty()}addReference(t,n){const r=new nt(t,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.cs(new nt(t,n))}hs(t,n){t.forEach(r=>this.removeReference(r,n))}ls(t){const n=new X(new Ie([])),r=new nt(n,t),i=new nt(n,t+1),o=[];return this.rs.forEachInRange([r,i],s=>{this.cs(s),o.push(s.key)}),o}fs(){this.ns.forEach(t=>this.cs(t))}cs(t){this.ns=this.ns.delete(t),this.rs=this.rs.delete(t)}ds(t){const n=new X(new Ie([])),r=new nt(n,t),i=new nt(n,t+1);let o=he();return this.rs.forEachInRange([r,i],s=>{o=o.add(s.key)}),o}containsKey(t){const n=new nt(t,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class nt{constructor(t,n){this.key=t,this._s=n}static ss(t,n){return X.comparator(t.key,n.key)||Te(t._s,n._s)}static os(t,n){return Te(t._s,n._s)||X.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uD{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Je(nt.ss)}checkEmpty(t){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,i){const o=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new JP(o,n,r,i);this.mutationQueue.push(s);for(const a of i)this.gs=this.gs.add(new nt(a.key,o)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return M.resolve(s)}lookupMutationBatch(t,n){return M.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,i=this.ps(r),o=i<0?0:i;return M.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(t){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new nt(n,0),i=new nt(n,Number.POSITIVE_INFINITY),o=[];return this.gs.forEachInRange([r,i],s=>{const a=this.ys(s._s);o.push(a)}),M.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new Je(Te);return n.forEach(i=>{const o=new nt(i,0),s=new nt(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([o,s],a=>{r=r.add(a._s)})}),M.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,i=r.length+1;let o=r;X.isDocumentKey(o)||(o=o.child(""));const s=new nt(new X(o),0);let a=new Je(Te);return this.gs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l._s)),!0)},s),M.resolve(this.Is(a))}Is(t){const n=[];return t.forEach(r=>{const i=this.ys(r);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){Ae(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return M.forEach(n.mutations,i=>{const o=new nt(i.key,n.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.gs=r})}An(t){}containsKey(t,n){const r=new nt(n,0),i=this.gs.firstAfterOrEqual(r);return M.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,M.resolve()}Ts(t,n){return this.ps(t)}ps(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}ys(t){const n=this.ps(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cD{constructor(t){this.Es=t,this.docs=new tt(X.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,i=this.docs.get(r),o=i?i.size:0,s=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:s}),this.size+=s-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():Tt.newInvalidDocument(n))}getEntries(t,n){let r=or();return n.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():Tt.newInvalidDocument(i))}),M.resolve(r)}getAllFromCollection(t,n,r){let i=or();const o=new X(n.child("")),s=this.docs.getIteratorFrom(o);for(;s.hasNext();){const{key:a,value:{document:l}}=s.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||JO(XO(l),r)<=0||(i=i.insert(l.key,l.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(t,n,r,i){re()}As(t,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new dD(this)}getSize(t){return M.resolve(this.size)}}class dD extends iD{constructor(t){super(),this.Yn=t}applyChanges(t){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(t,i)):this.Yn.removeEntry(r)}),M.waitFor(n)}getFromCache(t,n){return this.Yn.getEntry(t,n)}getAllFromCache(t,n){return this.Yn.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hD{constructor(t){this.persistence=t,this.Rs=new ds(n=>gv(n),vv),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this.bs=0,this.Ps=new bv,this.targetCount=0,this.vs=Jo.Pn()}forEachTarget(t,n){return this.Rs.forEach((r,i)=>n(i)),M.resolve()}getLastRemoteSnapshotVersion(t){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return M.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.vs.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),M.resolve()}Dn(t){this.Rs.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.vs=new Jo(n),this.highestTargetId=n),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,n){return this.Dn(n),this.targetCount+=1,M.resolve()}updateTargetData(t,n){return this.Dn(n),M.resolve()}removeTargetData(t,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(t,n,r){let i=0;const o=[];return this.Rs.forEach((s,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(s),o.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),M.waitFor(o).next(()=>i)}getTargetCount(t){return M.resolve(this.targetCount)}getTargetData(t,n){const r=this.Rs.get(n)||null;return M.resolve(r)}addMatchingKeys(t,n,r){return this.Ps.us(n,r),M.resolve()}removeMatchingKeys(t,n,r){this.Ps.hs(n,r);const i=this.persistence.referenceDelegate,o=[];return i&&n.forEach(s=>{o.push(i.markPotentiallyOrphaned(t,s))}),M.waitFor(o)}removeMatchingKeysForTargetId(t,n){return this.Ps.ls(n),M.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Ps.ds(n);return M.resolve(r)}containsKey(t,n){return M.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fD{constructor(t,n){this.Vs={},this.overlays={},this.Ss=new pv(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=t(this),this.Cs=new hD(this),this.indexManager=new nD,this.remoteDocumentCache=function(r){return new cD(r)}(r=>this.referenceDelegate.xs(r)),this.yt=new eD(n),this.Ns=new aD(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new lD,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Vs[t.toKey()];return r||(r=new uD(n,this.referenceDelegate),this.Vs[t.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(t,n,r){Q("MemoryPersistence","Starting transaction:",t);const i=new pD(this.Ss.next());return this.referenceDelegate.ks(),r(i).next(o=>this.referenceDelegate.Os(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Ms(t,n){return M.or(Object.values(this.Vs).map(r=>()=>r.containsKey(t,n)))}}class pD extends eP{constructor(t){super(),this.currentSequenceNumber=t}}class Tv{constructor(t){this.persistence=t,this.Fs=new bv,this.$s=null}static Bs(t){return new Tv(t)}get Ls(){if(this.$s)return this.$s;throw re()}addReference(t,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),M.resolve()}removeReference(t,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),M.resolve()}markPotentiallyOrphaned(t,n){return this.Ls.add(n.toString()),M.resolve()}removeTarget(t,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(o=>this.Ls.add(o.toString()))}).next(()=>r.removeTargetData(t,n))}ks(){this.$s=new Set}Os(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.Ls,r=>{const i=X.fromPath(r);return this.qs(t,i).next(o=>{o||n.removeEntry(i,se.min())})}).next(()=>(this.$s=null,n.apply(t)))}updateLimboDocument(t,n){return this.qs(t,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(t){return 0}qs(t,n){return M.or([()=>M.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ms(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xv{constructor(t,n,r,i){this.targetId=t,this.fromCache=n,this.Si=r,this.Di=i}static Ci(t,n){let r=he(),i=he();for(const o of n.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new xv(t,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mD{constructor(){this.xi=!1}initialize(t,n){this.Ni=t,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(t,n,r,i){return this.ki(t,n).next(o=>o||this.Oi(t,n,i,r)).next(o=>o||this.Mi(t,n))}ki(t,n){if(U1(n))return M.resolve(null);let r=ir(n);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Jp(n,null,"F"),r=ir(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const s=he(...o);return this.Ni.getDocuments(t,s).next(a=>this.indexManager.getMinOffset(t,r).next(l=>{const u=this.Fi(n,a);return this.$i(n,u,s,l.readTime)?this.ki(t,Jp(n,null,"F")):this.Bi(t,u,n,l)}))})))}Oi(t,n,r,i){return U1(n)||i.isEqual(se.min())?this.Mi(t,n):this.Ni.getDocuments(t,r).next(o=>{const s=this.Fi(n,o);return this.$i(n,s,r,i)?this.Mi(t,n):($1()<=Se.DEBUG&&Q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Zp(n)),this.Bi(t,s,n,YO(i,-1)))})}Fi(t,n){let r=new Je(DT(t));return n.forEach((i,o)=>{wv(t,o)&&(r=r.add(o))}),r}$i(t,n,r,i){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const o=t.limitType==="F"?n.last():n.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Mi(t,n){return $1()<=Se.DEBUG&&Q("QueryEngine","Using full collection scan to execute query:",Zp(n)),this.Ni.getDocumentsMatchingQuery(t,n,Qr.min())}Bi(t,n,r,i){return this.Ni.getDocumentsMatchingQuery(t,r,i).next(o=>(n.forEach(s=>{o=o.insert(s.key,s)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gD{constructor(t,n,r,i){this.persistence=t,this.Li=n,this.yt=i,this.qi=new tt(Te),this.Ui=new ds(o=>gv(o),vv),this.Ki=new Map,this.Gi=t.getRemoteDocumentCache(),this.Cs=t.getTargetCache(),this.Ns=t.getBundleCache(),this.Qi(r)}Qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new sD(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.qi))}}function vD(e,t,n,r){return new gD(e,t,n,r)}async function ix(e,t){const n=ae(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,n.Qi(t),n.mutationQueue.getAllMutationBatches(r))).next(o=>{const s=[],a=[];let l=he();for(const u of i){s.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of o){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({ji:u,removedBatchIds:s,addedBatchIds:a}))})})}function yD(e,t){const n=ae(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),o=n.Gi.newChangeBuffer({trackRemovals:!0});return function(s,a,l,u){const c=l.batch,d=c.keys();let h=M.resolve();return d.forEach(f=>{h=h.next(()=>u.getEntry(a,f)).next(v=>{const p=l.docVersions.get(f);Ae(p!==null),v.version.compareTo(p)<0&&(c.applyToRemoteDocument(v,l),v.isValidDocument()&&(v.setReadTime(l.commitVersion),u.addEntry(v)))})}),h.next(()=>s.mutationQueue.removeMutationBatch(a,c))}(n,r,t,o).next(()=>o.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(s){let a=he();for(let l=0;l<s.mutationResults.length;++l)s.mutationResults[l].transformResults.length>0&&(a=a.add(s.batch.mutations[l].key));return a}(t))).next(()=>n.localDocuments.getDocuments(r,i))})}function ox(e){const t=ae(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Cs.getLastRemoteSnapshotVersion(n))}function wD(e,t){const n=ae(e),r=t.snapshotVersion;let i=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const s=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.qi;const a=[];t.targetChanges.forEach((c,d)=>{const h=i.get(d);if(!h)return;a.push(n.Cs.removeMatchingKeys(o,c.removedDocuments,d).next(()=>n.Cs.addMatchingKeys(o,c.addedDocuments,d)));let f=h.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.has(d)?f=f.withResumeToken(At.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):c.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(c.resumeToken,r)),i=i.insert(d,f),function(v,p,S){return v.resumeToken.approximateByteSize()===0||p.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(h,f,c)&&a.push(n.Cs.updateTargetData(o,f))});let l=or(),u=he();if(t.documentUpdates.forEach(c=>{t.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(o,c))}),a.push(ED(o,s,t.documentUpdates).next(c=>{l=c.Wi,u=c.zi})),!r.isEqual(se.min())){const c=n.Cs.getLastRemoteSnapshotVersion(o).next(d=>n.Cs.setTargetsMetadata(o,o.currentSequenceNumber,r));a.push(c)}return M.waitFor(a).next(()=>s.apply(o)).next(()=>n.localDocuments.getLocalViewOfDocuments(o,l,u)).next(()=>l)}).then(o=>(n.qi=i,o))}function ED(e,t,n){let r=he(),i=he();return n.forEach(o=>r=r.add(o)),t.getEntries(e,r).next(o=>{let s=or();return n.forEach((a,l)=>{const u=o.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(se.min())?(t.removeEntry(a,l.readTime),s=s.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(l),s=s.insert(a,l)):Q("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Wi:s,zi:i}})}function SD(e,t){const n=ae(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function bD(e,t){const n=ae(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Cs.getTargetData(r,t).next(o=>o?(i=o,M.resolve(i)):n.Cs.allocateTargetId(r).next(s=>(i=new Ti(t,s,0,r.currentSequenceNumber),n.Cs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.qi.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.qi=n.qi.insert(r.targetId,r),n.Ui.set(t,r.targetId)),r})}async function rm(e,t,n){const r=ae(e),i=r.qi.get(t),o=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",o,s=>r.persistence.referenceDelegate.removeTarget(s,i))}catch(s){if(!ul(s))throw s;Q("LocalStore",`Failed to update sequence numbers for target ${t}: ${s}`)}r.qi=r.qi.remove(t),r.Ui.delete(i.target)}function K1(e,t,n){const r=ae(e);let i=se.min(),o=he();return r.persistence.runTransaction("Execute query","readonly",s=>function(a,l,u){const c=ae(a),d=c.Ui.get(u);return d!==void 0?M.resolve(c.qi.get(d)):c.Cs.getTargetData(l,u)}(r,s,ir(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(s,a.targetId).next(l=>{o=l})}).next(()=>r.Li.getDocumentsMatchingQuery(s,t,n?i:se.min(),n?o:he())).next(a=>(TD(r,vP(t),a),{documents:a,Hi:o})))}function TD(e,t,n){let r=e.Ki.get(t)||se.min();n.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),e.Ki.set(t,r)}class Q1{constructor(){this.activeTargetIds=QT()}er(t){this.activeTargetIds=this.activeTargetIds.add(t)}nr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}tr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class xD{constructor(){this.Lr=new Q1,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.Lr.er(t),this.qr[t]||"not-current"}updateQueryState(t,n,r){this.qr[t]=n}removeLocalQueryTarget(t){this.Lr.nr(t)}isLocalQueryTarget(t){return this.Lr.activeTargetIds.has(t)}clearQueryState(t){delete this.qr[t]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(t){return this.Lr.activeTargetIds.has(t)}start(){return this.Lr=new Q1,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CD{Ur(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y1{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(t){this.Wr.push(t)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){Q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Wr)t(0)}jr(){Q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Wr)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _D={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kD{constructor(t){this.Hr=t.Hr,this.Jr=t.Jr}Yr(t){this.Xr=t}Zr(t){this.eo=t}onMessage(t){this.no=t}close(){this.Jr()}send(t){this.Hr(t)}so(){this.Xr()}io(t){this.eo(t)}ro(t){this.no(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ID extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.oo=n+"://"+t.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(t,n,r,i,o){const s=this.ho(t,n);Q("RestConnection","Sending: ",s,r);const a={};return this.lo(a,i,o),this.fo(t,s,a,r).then(l=>(Q("RestConnection","Received: ",l),l),l=>{throw Gp("RestConnection",`${t} failed with error: `,l,"url: ",s,"request:",r),l})}_o(t,n,r,i,o,s){return this.ao(t,n,r,i,o)}lo(t,n,r){t["X-Goog-Api-Client"]="gl-js/ fire/"+cs,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,o)=>t[o]=i),r&&r.headers.forEach((i,o)=>t[o]=i)}ho(t,n){const r=_D[t];return`${this.oo}/v1/${n}:${r}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}fo(t,n,r,i){return new Promise((o,s)=>{const a=new jO;a.setWithCredentials(!0),a.listenOnce(LO.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case of.NO_ERROR:const u=a.getResponseJson();Q("Connection","XHR received:",JSON.stringify(u)),o(u);break;case of.TIMEOUT:Q("Connection",'RPC "'+t+'" timed out'),s(new W(k.DEADLINE_EXCEEDED,"Request time out"));break;case of.HTTP_ERROR:const c=a.getStatus();if(Q("Connection",'RPC "'+t+'" failed with status:',c,"response text:",a.getResponseText()),c>0){let d=a.getResponseJson();Array.isArray(d)&&(d=d[0]);const h=d==null?void 0:d.error;if(h&&h.status&&h.message){const f=function(v){const p=v.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(p)>=0?p:k.UNKNOWN}(h.status);s(new W(f,h.message))}else s(new W(k.UNKNOWN,"Server responded with status "+a.getStatus()))}else s(new W(k.UNAVAILABLE,"Connection failed."));break;default:re()}}finally{Q("Connection",'RPC "'+t+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}wo(t,n,r){const i=[this.oo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=DO(),s=MO(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new UO({})),this.lo(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const l=i.join("");Q("Connection","Creating WebChannel: "+l,a);const u=o.createWebChannel(l,a);let c=!1,d=!1;const h=new kD({Hr:v=>{d?Q("Connection","Not sending because WebChannel is closed:",v):(c||(Q("Connection","Opening WebChannel transport."),u.open(),c=!0),Q("Connection","WebChannel sending:",v),u.send(v))},Jr:()=>u.close()}),f=(v,p,S)=>{v.listen(p,y=>{try{S(y)}catch(g){setTimeout(()=>{throw g},0)}})};return f(u,Gl.EventType.OPEN,()=>{d||Q("Connection","WebChannel transport opened.")}),f(u,Gl.EventType.CLOSE,()=>{d||(d=!0,Q("Connection","WebChannel transport closed"),h.io())}),f(u,Gl.EventType.ERROR,v=>{d||(d=!0,Gp("Connection","WebChannel transport errored:",v),h.io(new W(k.UNAVAILABLE,"The operation could not be completed")))}),f(u,Gl.EventType.MESSAGE,v=>{var p;if(!d){const S=v.data[0];Ae(!!S);const y=S,g=y.error||((p=y[0])===null||p===void 0?void 0:p.error);if(g){Q("Connection","WebChannel received error:",g);const E=g.status;let b=function(A){const I=We[A];if(I!==void 0)return WT(I)}(E),T=g.message;b===void 0&&(b=k.INTERNAL,T="Unknown error status: "+E+" with message "+g.message),d=!0,h.io(new W(b,T)),u.close()}else Q("Connection","WebChannel received:",S),h.ro(S)}}),f(s,FO.STAT_EVENT,v=>{v.stat===k1.PROXY?Q("Connection","Detected buffering proxy"):v.stat===k1.NOPROXY&&Q("Connection","Detected no buffering proxy")}),setTimeout(()=>{h.so()},0),h}}function af(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kd(e){return new FP(e,!0)}class sx{constructor(t,n,r=1e3,i=1.5,o=6e4){this.Hs=t,this.timerId=n,this.mo=r,this.yo=i,this.po=o,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-r);i>0&&Q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),t())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ax{constructor(t,n,r,i,o,s,a,l){this.Hs=t,this.vo=r,this.Vo=i,this.connection=o,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new sx(t,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(t){this.Lo(),this.stream.send(t)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(t,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,t!==4?this.xo.reset():n&&n.code===k.RESOURCE_EXHAUSTED?(rr(n.toString()),rr("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const t=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.So===n&&this.Go(r,i)},r=>{t(()=>{const i=new W(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Qo(i)})})}Go(t,n){const r=this.Ko(this.So);this.stream=this.jo(t,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{r(()=>this.Qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(t){return Q("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Ko(t){return n=>{this.Hs.enqueueAndForget(()=>this.So===t?n():(Q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class $D extends ax{constructor(t,n,r,i,o,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,s),this.yt=o}jo(t,n){return this.connection.wo("Listen",t,n)}onMessage(t){this.xo.reset();const n=zP(this.yt,t),r=function(i){if(!("targetChange"in i))return se.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?se.min():o.readTime?Mn(o.readTime):se.min()}(t);return this.listener.Wo(n,r)}zo(t){const n={};n.database=nm(this.yt),n.addTarget=function(i,o){let s;const a=o.target;return s=Yp(a)?{documents:HP(i,a)}:{query:WP(i,a)},s.targetId=o.targetId,o.resumeToken.approximateByteSize()>0?s.resumeToken=JT(i,o.resumeToken):o.snapshotVersion.compareTo(se.min())>0&&(s.readTime=kc(i,o.snapshotVersion.toTimestamp())),s}(this.yt,t);const r=GP(this.yt,t);r&&(n.labels=r),this.Bo(n)}Ho(t){const n={};n.database=nm(this.yt),n.removeTarget=t,this.Bo(n)}}class AD extends ax{constructor(t,n,r,i,o,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,s),this.yt=o,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(t,n){return this.connection.wo("Write",t,n)}onMessage(t){if(Ae(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Jo){this.xo.reset();const n=BP(t.writeResults,t.commitTime),r=Mn(t.commitTime);return this.listener.Zo(r,n)}return Ae(!t.writeResults||t.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const t={};t.database=nm(this.yt),this.Bo(t)}Xo(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>VP(this.yt,r))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RD extends class{}{constructor(t,n,r,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.yt=i,this.nu=!1}su(){if(this.nu)throw new W(k.FAILED_PRECONDITION,"The client has already been terminated.")}ao(t,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.ao(t,n,r,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new W(k.UNKNOWN,i.toString())})}_o(t,n,r,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,s])=>this.connection._o(t,n,r,o,s,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(k.UNKNOWN,o.toString())})}terminate(){this.nu=!0}}class ND{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(t){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.cu("Offline")))}set(t){this.lu(),this.iu=0,t==="Online"&&(this.ou=!1),this.cu(t)}cu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}au(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(rr(n),this.ou=!1):Q("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OD{constructor(t,n,r,i,o){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=o,this.mu.Ur(s=>{r.enqueueAndForget(async()=>{Wi(this)&&(Q("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=ae(a);l._u.add(4),await hl(l),l.gu.set("Unknown"),l._u.delete(4),await Qd(l)}(this))})}),this.gu=new ND(r,i)}}async function Qd(e){if(Wi(e))for(const t of e.wu)await t(!0)}async function hl(e){for(const t of e.wu)await t(!1)}function lx(e,t){const n=ae(e);n.du.has(t.targetId)||(n.du.set(t.targetId,t),kv(n)?_v(n):hs(n).ko()&&Cv(n,t))}function ux(e,t){const n=ae(e),r=hs(n);n.du.delete(t),r.ko()&&cx(n,t),n.du.size===0&&(r.ko()?r.Fo():Wi(n)&&n.gu.set("Unknown"))}function Cv(e,t){e.yu.Ot(t.targetId),hs(e).zo(t)}function cx(e,t){e.yu.Ot(t),hs(e).Ho(t)}function _v(e){e.yu=new PP({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ne:t=>e.du.get(t)||null}),hs(e).start(),e.gu.uu()}function kv(e){return Wi(e)&&!hs(e).No()&&e.du.size>0}function Wi(e){return ae(e)._u.size===0}function dx(e){e.yu=void 0}async function PD(e){e.du.forEach((t,n)=>{Cv(e,t)})}async function DD(e,t){dx(e),kv(e)?(e.gu.hu(t),_v(e)):e.gu.set("Unknown")}async function MD(e,t,n){if(e.gu.set("Online"),t instanceof XT&&t.state===2&&t.cause)try{await async function(r,i){const o=i.cause;for(const s of i.targetIds)r.du.has(s)&&(await r.remoteSyncer.rejectListen(s,o),r.du.delete(s),r.yu.removeTarget(s))}(e,t)}catch(r){Q("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Ic(e,r)}else if(t instanceof Su?e.yu.Kt(t):t instanceof YT?e.yu.Jt(t):e.yu.jt(t),!n.isEqual(se.min()))try{const r=await ox(e.localStore);n.compareTo(r)>=0&&await function(i,o){const s=i.yu.Zt(o);return s.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.du.get(l);u&&i.du.set(l,u.withResumeToken(a.resumeToken,o))}}),s.targetMismatches.forEach(a=>{const l=i.du.get(a);if(!l)return;i.du.set(a,l.withResumeToken(At.EMPTY_BYTE_STRING,l.snapshotVersion)),cx(i,a);const u=new Ti(l.target,a,1,l.sequenceNumber);Cv(i,u)}),i.remoteSyncer.applyRemoteEvent(s)}(e,n)}catch(r){Q("RemoteStore","Failed to raise snapshot:",r),await Ic(e,r)}}async function Ic(e,t,n){if(!ul(t))throw t;e._u.add(1),await hl(e),e.gu.set("Offline"),n||(n=()=>ox(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{Q("RemoteStore","Retrying IndexedDB access"),await n(),e._u.delete(1),await Qd(e)})}function hx(e,t){return t().catch(n=>Ic(e,n,t))}async function Yd(e){const t=ae(e),n=Xr(t);let r=t.fu.length>0?t.fu[t.fu.length-1].batchId:-1;for(;LD(t);)try{const i=await SD(t.localStore,r);if(i===null){t.fu.length===0&&n.Fo();break}r=i.batchId,FD(t,i)}catch(i){await Ic(t,i)}fx(t)&&px(t)}function LD(e){return Wi(e)&&e.fu.length<10}function FD(e,t){e.fu.push(t);const n=Xr(e);n.ko()&&n.Yo&&n.Xo(t.mutations)}function fx(e){return Wi(e)&&!Xr(e).No()&&e.fu.length>0}function px(e){Xr(e).start()}async function UD(e){Xr(e).eu()}async function jD(e){const t=Xr(e);for(const n of e.fu)t.Xo(n.mutations)}async function zD(e,t,n){const r=e.fu.shift(),i=Sv.from(r,t,n);await hx(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await Yd(e)}async function VD(e,t){t&&Xr(e).Yo&&await async function(n,r){if(i=r.code,$P(i)&&i!==k.ABORTED){const o=n.fu.shift();Xr(n).Mo(),await hx(n,()=>n.remoteSyncer.rejectFailedWrite(o.batchId,r)),await Yd(n)}var i}(e,t),fx(e)&&px(e)}async function X1(e,t){const n=ae(e);n.asyncQueue.verifyOperationInProgress(),Q("RemoteStore","RemoteStore received new credentials");const r=Wi(n);n._u.add(3),await hl(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n._u.delete(3),await Qd(n)}async function BD(e,t){const n=ae(e);t?(n._u.delete(2),await Qd(n)):t||(n._u.add(2),await hl(n),n.gu.set("Unknown"))}function hs(e){return e.pu||(e.pu=function(t,n,r){const i=ae(t);return i.su(),new $D(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,r)}(e.datastore,e.asyncQueue,{Yr:PD.bind(null,e),Zr:DD.bind(null,e),Wo:MD.bind(null,e)}),e.wu.push(async t=>{t?(e.pu.Mo(),kv(e)?_v(e):e.gu.set("Unknown")):(await e.pu.stop(),dx(e))})),e.pu}function Xr(e){return e.Iu||(e.Iu=function(t,n,r){const i=ae(t);return i.su(),new AD(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,r)}(e.datastore,e.asyncQueue,{Yr:UD.bind(null,e),Zr:VD.bind(null,e),tu:jD.bind(null,e),Zo:zD.bind(null,e)}),e.wu.push(async t=>{t?(e.Iu.Mo(),await Yd(e)):(await e.Iu.stop(),e.fu.length>0&&(Q("RemoteStore",`Stopping write stream with ${e.fu.length} pending writes`),e.fu=[]))})),e.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{constructor(t,n,r,i,o){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new zr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(s=>{})}static createAndSchedule(t,n,r,i,o){const s=Date.now()+r,a=new Iv(t,n,s,i,o);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(k.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $v(e,t){if(rr("AsyncQueue",`${t}: ${e}`),ul(e))return new W(k.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(t){this.comparator=t?(n,r)=>t(n,r)||X.comparator(n.key,r.key):(n,r)=>X.comparator(n.key,r.key),this.keyedMap=Ms(),this.sortedSet=new tt(this.comparator)}static emptySet(t){return new Ro(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Ro)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new Ro;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{constructor(){this.Tu=new tt(X.comparator)}track(t){const n=t.doc.key,r=this.Tu.get(n);r?t.type!==0&&r.type===3?this.Tu=this.Tu.insert(n,t):t.type===3&&r.type!==1?this.Tu=this.Tu.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.Tu=this.Tu.remove(n):t.type===1&&r.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:t.doc}):re():this.Tu=this.Tu.insert(n,t)}Eu(){const t=[];return this.Tu.inorderTraversal((n,r)=>{t.push(r)}),t}}class Zo{constructor(t,n,r,i,o,s,a,l,u){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(t,n,r,i,o){const s=[];return n.forEach(a=>{s.push({type:0,doc:a})}),new Zo(t,n,Ro.emptySet(n),s,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Hd(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HD{constructor(){this.Au=void 0,this.listeners=[]}}class WD{constructor(){this.queries=new ds(t=>PT(t),Hd),this.onlineState="Unknown",this.Ru=new Set}}async function mx(e,t){const n=ae(e),r=t.query;let i=!1,o=n.queries.get(r);if(o||(i=!0,o=new HD),i)try{o.Au=await n.onListen(r)}catch(s){const a=$v(s,`Initialization of query '${Zp(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,o),o.listeners.push(t),t.bu(n.onlineState),o.Au&&t.Pu(o.Au)&&Av(n)}async function gx(e,t){const n=ae(e),r=t.query;let i=!1;const o=n.queries.get(r);if(o){const s=o.listeners.indexOf(t);s>=0&&(o.listeners.splice(s,1),i=o.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function qD(e,t){const n=ae(e);let r=!1;for(const i of t){const o=i.query,s=n.queries.get(o);if(s){for(const a of s.listeners)a.Pu(i)&&(r=!0);s.Au=i}}r&&Av(n)}function GD(e,t,n){const r=ae(e),i=r.queries.get(t);if(i)for(const o of i.listeners)o.onError(n);r.queries.delete(t)}function Av(e){e.Ru.forEach(t=>{t.next()})}class vx{constructor(t,n,r){this.query=t,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new Zo(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Vu?this.Du(t)&&(this.vu.next(t),n=!0):this.Cu(t,this.onlineState)&&(this.xu(t),n=!0),this.Su=t,n}onError(t){this.vu.error(t)}bu(t){this.onlineState=t;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,t)&&(this.xu(this.Su),n=!0),n}Cu(t,n){if(!t.fromCache)return!0;const r=n!=="Offline";return(!this.options.Nu||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Du(t){if(t.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(t){t=Zo.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Vu=!0,this.vu.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yx{constructor(t){this.key=t}}class wx{constructor(t){this.key=t}}class KD{constructor(t,n){this.query=t,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=he(),this.mutatedKeys=he(),this.Gu=DT(t),this.Qu=new Ro(this.Gu)}get ju(){return this.qu}Wu(t,n){const r=n?n.zu:new J1,i=n?n.Qu:this.Qu;let o=n?n.mutatedKeys:this.mutatedKeys,s=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((c,d)=>{const h=i.get(c),f=wv(this.query,d)?d:null,v=!!h&&this.mutatedKeys.has(h.key),p=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let S=!1;h&&f?h.data.isEqual(f.data)?v!==p&&(r.track({type:3,doc:f}),S=!0):this.Hu(h,f)||(r.track({type:2,doc:f}),S=!0,(l&&this.Gu(f,l)>0||u&&this.Gu(f,u)<0)&&(a=!0)):!h&&f?(r.track({type:0,doc:f}),S=!0):h&&!f&&(r.track({type:1,doc:h}),S=!0,(l||u)&&(a=!0)),S&&(f?(s=s.add(f),o=p?o.add(c):o.delete(c)):(s=s.delete(c),o=o.delete(c)))}),this.query.limit!==null)for(;s.size>this.query.limit;){const c=this.query.limitType==="F"?s.last():s.first();s=s.delete(c.key),o=o.delete(c.key),r.track({type:1,doc:c})}return{Qu:s,zu:r,$i:a,mutatedKeys:o}}Hu(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r){const i=this.Qu;this.Qu=t.Qu,this.mutatedKeys=t.mutatedKeys;const o=t.zu.Eu();o.sort((u,c)=>function(d,h){const f=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return re()}};return f(d)-f(h)}(u.type,c.type)||this.Gu(u.doc,c.doc)),this.Ju(r);const s=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,l=a!==this.Uu;return this.Uu=a,o.length!==0||l?{snapshot:new Zo(this.query,t.Qu,i,o,t.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Xu:s}:{Xu:s}}bu(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new J1,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(t){return!this.qu.has(t)&&!!this.Qu.has(t)&&!this.Qu.get(t).hasLocalMutations}Ju(t){t&&(t.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=t.current)}Yu(){if(!this.current)return[];const t=this.Ku;this.Ku=he(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const n=[];return t.forEach(r=>{this.Ku.has(r)||n.push(new wx(r))}),this.Ku.forEach(r=>{t.has(r)||n.push(new yx(r))}),n}tc(t){this.qu=t.Hi,this.Ku=he();const n=this.Wu(t.documents);return this.applyChanges(n,!0)}ec(){return Zo.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class QD{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class YD{constructor(t){this.key=t,this.nc=!1}}class XD{constructor(t,n,r,i,o,s){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=s,this.sc={},this.ic=new ds(a=>PT(a),Hd),this.rc=new Map,this.oc=new Set,this.uc=new tt(X.comparator),this.cc=new Map,this.ac=new bv,this.hc={},this.lc=new Map,this.fc=Jo.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function JD(e,t){const n=lM(e);let r,i;const o=n.ic.get(t);if(o)r=o.targetId,n.sharedClientState.addLocalQueryTarget(r),i=o.view.ec();else{const s=await bD(n.localStore,ir(t));n.isPrimaryClient&&lx(n.remoteStore,s);const a=n.sharedClientState.addLocalQueryTarget(s.targetId);r=s.targetId,i=await ZD(n,t,r,a==="current",s.resumeToken)}return i}async function ZD(e,t,n,r,i){e._c=(d,h,f)=>async function(v,p,S,y){let g=p.view.Wu(S);g.$i&&(g=await K1(v.localStore,p.query,!1).then(({documents:T})=>p.view.Wu(T,g)));const E=y&&y.targetChanges.get(p.targetId),b=p.view.applyChanges(g,v.isPrimaryClient,E);return ew(v,p.targetId,b.Xu),b.snapshot}(e,d,h,f);const o=await K1(e.localStore,t,!0),s=new KD(t,o.Hi),a=s.Wu(o.documents),l=dl.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",i),u=s.applyChanges(a,e.isPrimaryClient,l);ew(e,n,u.Xu);const c=new QD(t,n,s);return e.ic.set(t,c),e.rc.has(n)?e.rc.get(n).push(t):e.rc.set(n,[t]),u.snapshot}async function eM(e,t){const n=ae(e),r=n.ic.get(t),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter(o=>!Hd(o,t))),void n.ic.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await rm(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),ux(n.remoteStore,r.targetId),im(n,r.targetId)}).catch(ll)):(im(n,r.targetId),await rm(n.localStore,r.targetId,!0))}async function tM(e,t,n){const r=uM(e);try{const i=await function(o,s){const a=ae(o),l=Xe.now(),u=s.reduce((h,f)=>h.add(f.key),he());let c,d;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>{let f=or(),v=he();return a.Gi.getEntries(h,u).next(p=>{f=p,f.forEach((S,y)=>{y.isValidDocument()||(v=v.add(S))})}).next(()=>a.localDocuments.getOverlayedDocuments(h,f)).next(p=>{c=p;const S=[];for(const y of s){const g=_P(y,c.get(y.key).overlayedDocument);g!=null&&S.push(new oi(y.key,g,NT(g.value.mapValue),Sn.exists(!0)))}return a.mutationQueue.addMutationBatch(h,l,S,s)}).next(p=>{d=p;const S=p.applyToLocalDocumentSet(c,v);return a.documentOverlayCache.saveOverlays(h,p.batchId,S)})}).then(()=>({batchId:d.batchId,changes:GT(c)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(o,s,a){let l=o.hc[o.currentUser.toKey()];l||(l=new tt(Te)),l=l.insert(s,a),o.hc[o.currentUser.toKey()]=l}(r,i.batchId,n),await fl(r,i.changes),await Yd(r.remoteStore)}catch(i){const o=$v(i,"Failed to persist write");n.reject(o)}}async function Ex(e,t){const n=ae(e);try{const r=await wD(n.localStore,t);t.targetChanges.forEach((i,o)=>{const s=n.cc.get(o);s&&(Ae(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?s.nc=!0:i.modifiedDocuments.size>0?Ae(s.nc):i.removedDocuments.size>0&&(Ae(s.nc),s.nc=!1))}),await fl(n,r,t)}catch(r){await ll(r)}}function Z1(e,t,n){const r=ae(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ic.forEach((o,s)=>{const a=s.view.bu(t);a.snapshot&&i.push(a.snapshot)}),function(o,s){const a=ae(o);a.onlineState=s;let l=!1;a.queries.forEach((u,c)=>{for(const d of c.listeners)d.bu(s)&&(l=!0)}),l&&Av(a)}(r.eventManager,t),i.length&&r.sc.Wo(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function nM(e,t,n){const r=ae(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.cc.get(t),o=i&&i.key;if(o){let s=new tt(X.comparator);s=s.insert(o,Tt.newNoDocument(o,se.min()));const a=he().add(o),l=new Gd(se.min(),new Map,new Je(Te),s,a);await Ex(r,l),r.uc=r.uc.remove(o),r.cc.delete(t),Rv(r)}else await rm(r.localStore,t,!1).then(()=>im(r,t,n)).catch(ll)}async function rM(e,t){const n=ae(e),r=t.batch.batchId;try{const i=await yD(n.localStore,t);bx(n,r,null),Sx(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await fl(n,i)}catch(i){await ll(i)}}async function iM(e,t,n){const r=ae(e);try{const i=await function(o,s){const a=ae(o);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,s).next(c=>(Ae(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,s)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,t);bx(r,t,n),Sx(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await fl(r,i)}catch(i){await ll(i)}}function Sx(e,t){(e.lc.get(t)||[]).forEach(n=>{n.resolve()}),e.lc.delete(t)}function bx(e,t,n){const r=ae(e);let i=r.hc[r.currentUser.toKey()];if(i){const o=i.get(t);o&&(n?o.reject(n):o.resolve(),i=i.remove(t)),r.hc[r.currentUser.toKey()]=i}}function im(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.rc.get(t))e.ic.delete(r),n&&e.sc.wc(r,n);e.rc.delete(t),e.isPrimaryClient&&e.ac.ls(t).forEach(r=>{e.ac.containsKey(r)||Tx(e,r)})}function Tx(e,t){e.oc.delete(t.path.canonicalString());const n=e.uc.get(t);n!==null&&(ux(e.remoteStore,n),e.uc=e.uc.remove(t),e.cc.delete(n),Rv(e))}function ew(e,t,n){for(const r of n)r instanceof yx?(e.ac.addReference(r.key,t),oM(e,r)):r instanceof wx?(Q("SyncEngine","Document no longer in limbo: "+r.key),e.ac.removeReference(r.key,t),e.ac.containsKey(r.key)||Tx(e,r.key)):re()}function oM(e,t){const n=t.key,r=n.path.canonicalString();e.uc.get(n)||e.oc.has(r)||(Q("SyncEngine","New document in limbo: "+n),e.oc.add(r),Rv(e))}function Rv(e){for(;e.oc.size>0&&e.uc.size<e.maxConcurrentLimboResolutions;){const t=e.oc.values().next().value;e.oc.delete(t);const n=new X(Ie.fromString(t)),r=e.fc.next();e.cc.set(r,new YD(n)),e.uc=e.uc.insert(n,r),lx(e.remoteStore,new Ti(ir(Vd(n.path)),r,2,pv.at))}}async function fl(e,t,n){const r=ae(e),i=[],o=[],s=[];r.ic.isEmpty()||(r.ic.forEach((a,l)=>{s.push(r._c(l,t,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=xv.Ci(l.targetId,u);o.push(c)}}))}),await Promise.all(s),r.sc.Wo(i),await async function(a,l){const u=ae(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>M.forEach(l,d=>M.forEach(d.Si,h=>u.persistence.referenceDelegate.addReference(c,d.targetId,h)).next(()=>M.forEach(d.Di,h=>u.persistence.referenceDelegate.removeReference(c,d.targetId,h)))))}catch(c){if(!ul(c))throw c;Q("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const d=c.targetId;if(!c.fromCache){const h=u.qi.get(d),f=h.snapshotVersion,v=h.withLastLimboFreeSnapshotVersion(f);u.qi=u.qi.insert(d,v)}}}(r.localStore,o))}async function sM(e,t){const n=ae(e);if(!n.currentUser.isEqual(t)){Q("SyncEngine","User change. New user:",t.toKey());const r=await ix(n.localStore,t);n.currentUser=t,function(i,o){i.lc.forEach(s=>{s.forEach(a=>{a.reject(new W(k.CANCELLED,o))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await fl(n,r.ji)}}function aM(e,t){const n=ae(e),r=n.cc.get(t);if(r&&r.nc)return he().add(r.key);{let i=he();const o=n.rc.get(t);if(!o)return i;for(const s of o){const a=n.ic.get(s);i=i.unionWith(a.view.ju)}return i}}function lM(e){const t=ae(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Ex.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=aM.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=nM.bind(null,t),t.sc.Wo=qD.bind(null,t.eventManager),t.sc.wc=GD.bind(null,t.eventManager),t}function uM(e){const t=ae(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=rM.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=iM.bind(null,t),t}class cM{constructor(){this.synchronizeTabs=!1}async initialize(t){this.yt=Kd(t.databaseInfo.databaseId),this.sharedClientState=this.gc(t),this.persistence=this.yc(t),await this.persistence.start(),this.localStore=this.Ic(t),this.gcScheduler=this.Tc(t,this.localStore),this.indexBackfillerScheduler=this.Ec(t,this.localStore)}Tc(t,n){return null}Ec(t,n){return null}Ic(t){return vD(this.persistence,new mD,t.initialUser,this.yt)}yc(t){return new fD(Tv.Bs,this.yt)}gc(t){return new xD}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class dM{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Z1(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=sM.bind(null,this.syncEngine),await BD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new WD}createDatastore(t){const n=Kd(t.databaseInfo.databaseId),r=(i=t.databaseInfo,new ID(i));var i;return function(o,s,a,l){return new RD(o,s,a,l)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return n=this.localStore,r=this.datastore,i=t.asyncQueue,o=a=>Z1(this.syncEngine,a,0),s=Y1.C()?new Y1:new CD,new OD(n,r,i,o,s);var n,r,i,o,s}createSyncEngine(t,n){return function(r,i,o,s,a,l,u){const c=new XD(r,i,o,s,a,l);return u&&(c.dc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=ae(t);Q("RemoteStore","RemoteStore shutting down."),n._u.add(5),await hl(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nv(e,t,n){if(!n)throw new W(k.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function hM(e,t,n,r){if(t===!0&&r===!0)throw new W(k.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function tw(e){if(!X.isDocumentKey(e))throw new W(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function nw(e){if(X.isDocumentKey(e))throw new W(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Xd(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":re()}function sn(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new W(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Xd(e);throw new W(k.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rw=new Map;class iw{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new W(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new W(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,hM("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new iw({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new W(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new W(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new iw(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new zO;switch(n.type){case"gapi":const r=n.client;return new WO(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new W(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=rw.get(t);n&&(Q("ComponentProvider","Removing Datastore"),rw.delete(t),n.terminate())}(this),Promise.resolve()}}function fM(e,t,n,r={}){var i;const o=(e=sn(e,pl))._getSettings();if(o.host!=="firestore.googleapis.com"&&o.host!==t&&Gp("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},o),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let s,a;if(typeof r.mockUserToken=="string")s=r.mockUserToken,a=St.MOCK_USER;else{s=w4(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new W(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new St(l)}e._authCredentials=new VO(new ST(s,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Vr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new kt(this.firestore,t,this._key)}}class si{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new si(this.firestore,t,this._query)}}class Vr extends si{constructor(t,n,r){super(t,n,Vd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new kt(this.firestore,null,new X(t))}withConverter(t){return new Vr(this.firestore,t,this._path)}}function xx(e,t,...n){if(e=et(e),Nv("collection","path",t),e instanceof pl){const r=Ie.fromString(t,...n);return nw(r),new Vr(e,null,r)}{if(!(e instanceof kt||e instanceof Vr))throw new W(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Ie.fromString(t,...n));return nw(r),new Vr(e.firestore,null,r)}}function pM(e,t){if(e=sn(e,pl),Nv("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new W(k.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new si(e,null,function(n){return new Hi(Ie.emptyPath(),n)}(t))}function Jr(e,t,...n){if(e=et(e),arguments.length===1&&(t=bT.R()),Nv("doc","path",t),e instanceof pl){const r=Ie.fromString(t,...n);return tw(r),new kt(e,null,new X(r))}{if(!(e instanceof kt||e instanceof Vr))throw new W(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Ie.fromString(t,...n));return tw(r),new kt(e.firestore,e instanceof Vr?e.converter:null,new X(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cx{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Rc(this.observer.next,t)}error(t){this.observer.error?this.Rc(this.observer.error,t):rr("Uncaught Error in snapshot listener:",t.toString())}bc(){this.muted=!0}Rc(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mM{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=St.UNAUTHENTICATED,this.clientId=bT.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{Q("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Q("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new W(k.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new zr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=$v(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function gM(e,t){e.asyncQueue.verifyOperationInProgress(),Q("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async i=>{r.isEqual(i)||(await ix(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function vM(e,t){e.asyncQueue.verifyOperationInProgress();const n=await yM(e);Q("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(i=>X1(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,o)=>X1(t.remoteStore,o)),e.onlineComponents=t}async function yM(e){return e.offlineComponents||(Q("FirestoreClient","Using default OfflineComponentProvider"),await gM(e,new cM)),e.offlineComponents}async function _x(e){return e.onlineComponents||(Q("FirestoreClient","Using default OnlineComponentProvider"),await vM(e,new dM)),e.onlineComponents}function wM(e){return _x(e).then(t=>t.syncEngine)}async function om(e){const t=await _x(e),n=t.eventManager;return n.onListen=JD.bind(null,t.syncEngine),n.onUnlisten=eM.bind(null,t.syncEngine),n}function EM(e,t,n={}){const r=new zr;return e.asyncQueue.enqueueAndForget(async()=>function(i,o,s,a,l){const u=new Cx({next:d=>{o.enqueueAndForget(()=>gx(i,c));const h=d.docs.has(s);!h&&d.fromCache?l.reject(new W(k.UNAVAILABLE,"Failed to get document because the client is offline.")):h&&d.fromCache&&a&&a.source==="server"?l.reject(new W(k.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(d)},error:d=>l.reject(d)}),c=new vx(Vd(s.path),u,{includeMetadataChanges:!0,Nu:!0});return mx(i,c)}(await om(e),e.asyncQueue,t,n,r)),r.promise}class SM{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new sx(this,"async_queue_retry"),this.Wc=()=>{const n=af();n&&Q("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const t=af();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.qc){this.qc=!0,this.Qc=t||!1;const n=af();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.qc)return new Promise(()=>{});const n=new zr;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Lc.push(t),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(t){if(!ul(t))throw t;Q("AsyncQueue","Operation failed with retryable error: "+t)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(t){const n=this.Bc.then(()=>(this.Gc=!0,t().catch(r=>{this.Kc=r,this.Gc=!1;const i=function(o){let s=o.message||"";return o.stack&&(s=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),s}(r);throw rr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(t,n,r){this.zc(),this.jc.indexOf(t)>-1&&(n=0);const i=Iv.createAndSchedule(this,t,n,r,o=>this.Yc(o));return this.Uc.push(i),i}zc(){this.Kc&&re()}verifyOperationInProgress(){}async Xc(){let t;do t=this.Bc,await t;while(t!==this.Bc)}Zc(t){for(const n of this.Uc)if(n.timerId===t)return!0;return!1}ta(t){return this.Xc().then(()=>{this.Uc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Xc()})}ea(t){this.jc.push(t)}Yc(t){const n=this.Uc.indexOf(t);this.Uc.splice(n,1)}}function ow(e){return function(t,n){if(typeof t!="object"||t===null)return!1;const r=t;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(e,["next","error","complete"])}class Ui extends pl{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=new SM,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||kx(this),this._firestoreClient.terminate()}}function bM(e,t){const n=typeof e=="object"?e:j2(),r=typeof e=="string"?e:t||"(default)",i=Mg(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=g4("firestore");o&&fM(i,...o)}return i}function Ov(e){return e._firestoreClient||kx(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function kx(e){var t;const n=e._freezeSettings(),r=function(i,o,s,a){return new tP(i,o,s,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new mM(e._authCredentials,e._appCheckCredentials,e._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(t){this._byteString=t}static fromBase64String(t){try{return new es(At.fromBase64String(t))}catch(n){throw new W(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new es(At.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new W(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new xt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new W(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new W(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Te(this._lat,t._lat)||Te(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TM=/^__.*__$/;class xM{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new oi(t,this.data,this.fieldMask,n,this.fieldTransforms):new cl(t,this.data,n,this.fieldTransforms)}}class Ix{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return new oi(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function $x(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw re()}}class Dv{constructor(t,n,r,i,o,s){this.settings=t,this.databaseId=n,this.yt=r,this.ignoreUndefinedProperties=i,o===void 0&&this.na(),this.fieldTransforms=o||[],this.fieldMask=s||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(t){return new Dv(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.ia({path:r,oa:!1});return i.ua(t),i}ca(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.ia({path:r,oa:!1});return i.na(),i}aa(t){return this.ia({path:void 0,oa:!0})}ha(t){return $c(t,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let t=0;t<this.path.length;t++)this.ua(this.path.get(t))}ua(t){if(t.length===0)throw this.ha("Document fields must not be empty");if($x(this.sa)&&TM.test(t))throw this.ha('Document fields cannot begin and end with "__"')}}class CM{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.yt=r||Kd(t)}da(t,n,r,i=!1){return new Dv({sa:t,methodName:n,fa:r,path:xt.emptyPath(),oa:!1,la:i},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function eh(e){const t=e._freezeSettings(),n=Kd(e._databaseId);return new CM(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Ax(e,t,n,r,i,o={}){const s=e.da(o.merge||o.mergeFields?2:0,t,n,i);Lv("Data must be an object, but it was:",s,r);const a=Rx(r,s);let l,u;if(o.merge)l=new on(s.fieldMask),u=s.fieldTransforms;else if(o.mergeFields){const c=[];for(const d of o.mergeFields){const h=sm(t,d,n);if(!s.contains(h))throw new W(k.INVALID_ARGUMENT,`Field '${h}' is specified in your field mask but missing from your input data.`);Ox(c,h)||c.push(h)}l=new on(c),u=s.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=s.fieldTransforms;return new xM(new Ft(a),l,u)}class th extends Zd{_toFieldTransform(t){if(t.sa!==2)throw t.sa===1?t.ha(`${this._methodName}() can only appear at the top level of your update data`):t.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof th}}class Mv extends Zd{_toFieldTransform(t){return new bP(t.path,new Oa)}isEqual(t){return t instanceof Mv}}function _M(e,t,n,r){const i=e.da(1,t,n);Lv("Data must be an object, but it was:",i,r);const o=[],s=Ft.empty();Bi(r,(l,u)=>{const c=Fv(t,l,n);u=et(u);const d=i.ca(c);if(u instanceof th)o.push(c);else{const h=ml(u,d);h!=null&&(o.push(c),s.set(c,h))}});const a=new on(o);return new Ix(s,a,i.fieldTransforms)}function kM(e,t,n,r,i,o){const s=e.da(1,t,n),a=[sm(t,r,n)],l=[i];if(o.length%2!=0)throw new W(k.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let h=0;h<o.length;h+=2)a.push(sm(t,o[h])),l.push(o[h+1]);const u=[],c=Ft.empty();for(let h=a.length-1;h>=0;--h)if(!Ox(u,a[h])){const f=a[h];let v=l[h];v=et(v);const p=s.ca(f);if(v instanceof th)u.push(f);else{const S=ml(v,p);S!=null&&(u.push(f),c.set(f,S))}}const d=new on(u);return new Ix(c,d,s.fieldTransforms)}function IM(e,t,n,r=!1){return ml(n,e.da(r?4:3,t))}function ml(e,t){if(Nx(e=et(e)))return Lv("Unsupported field value:",t,e),Rx(e,t);if(e instanceof Zd)return function(n,r){if(!$x(r.sa))throw r.ha(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.oa&&t.sa!==4)throw t.ha("Nested arrays are not supported");return function(n,r){const i=[];let o=0;for(const s of n){let a=ml(s,r.aa(o));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),o++}return{arrayValue:{values:i}}}(e,t)}return function(n,r){if((n=et(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return wP(r.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Xe.fromDate(n);return{timestampValue:kc(r.yt,i)}}if(n instanceof Xe){const i=new Xe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:kc(r.yt,i)}}if(n instanceof Pv)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof es)return{bytesValue:JT(r.yt,n._byteString)};if(n instanceof kt){const i=r.databaseId,o=n.firestore._databaseId;if(!o.isEqual(i))throw r.ha(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ev(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ha(`Unsupported field value: ${Xd(n)}`)}(e,t)}function Rx(e,t){const n={};return TT(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Bi(e,(r,i)=>{const o=ml(i,t.ra(r));o!=null&&(n[r]=o)}),{mapValue:{fields:n}}}function Nx(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof Xe||e instanceof Pv||e instanceof es||e instanceof kt||e instanceof Zd)}function Lv(e,t,n){if(!Nx(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Xd(n);throw r==="an object"?t.ha(e+" a custom object"):t.ha(e+" "+r)}}function sm(e,t,n){if((t=et(t))instanceof Jd)return t._internalPath;if(typeof t=="string")return Fv(e,t);throw $c("Field path arguments must be of type string or ",e,!1,void 0,n)}const $M=new RegExp("[~\\*/\\[\\]]");function Fv(e,t,n){if(t.search($M)>=0)throw $c(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Jd(...t.split("."))._internalPath}catch{throw $c(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function $c(e,t,n,r,i){const o=r&&!r.isEmpty(),s=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(o||s)&&(l+=" (found",o&&(l+=` in field ${r}`),s&&(l+=` in document ${i}`),l+=")"),new W(k.INVALID_ARGUMENT,a+e+l)}function Ox(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Px{constructor(t,n,r,i,o){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new kt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new AM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Uv("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class AM extends Px{data(){return super.data()}}function Uv(e,t){return typeof t=="string"?Fv(e,t):t instanceof Jd?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RM(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new W(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class jv{}class Dx extends jv{}function Mx(e,t,...n){let r=[];t instanceof jv&&r.push(t),r=r.concat(n),function(i){const o=i.filter(a=>a instanceof Vv).length,s=i.filter(a=>a instanceof zv).length;if(o>1||o>0&&s>0)throw new W(k.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)e=i._apply(e);return e}class zv extends Dx{constructor(t,n,r){super(),this._field=t,this._op=n,this._value=r,this.type="where"}static _create(t,n,r){return new zv(t,n,r)}_apply(t){const n=this._parse(t);return Fx(t._query,n),new si(t.firestore,t.converter,Xp(t._query,n))}_parse(t){const n=eh(t.firestore);return function(i,o,s,a,l,u,c){let d;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new W(k.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){aw(c,u);const h=[];for(const f of c)h.push(sw(a,i,f));d={arrayValue:{values:h}}}else d=sw(a,i,c)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||aw(c,u),d=IM(s,o,c,u==="in"||u==="not-in");return Ke.create(l,u,d)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}class Vv extends jv{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new Vv(t,n)}_parse(t){const n=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Tn.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(r,i){let o=r;const s=i.getFlattenedFilters();for(const a of s)Fx(o,a),o=Xp(o,a)}(t._query,n),new si(t.firestore,t.converter,Xp(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Bv extends Dx{constructor(t,n){super(),this._field=t,this._direction=n,this.type="orderBy"}static _create(t,n){return new Bv(t,n)}_apply(t){const n=function(r,i,o){if(r.startAt!==null)throw new W(k.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new W(k.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const s=new $o(i,o);return function(a,l){if(yv(a)===null){const u=Bd(a);u!==null&&Ux(a,u,l.field)}}(r,s),s}(t._query,this._field,this._direction);return new si(t.firestore,t.converter,function(r,i){const o=r.explicitOrderBy.concat([i]);return new Hi(r.path,r.collectionGroup,o,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(t._query,n))}}function Lx(e,t="asc"){const n=t,r=Uv("orderBy",e);return Bv._create(r,n)}function sw(e,t,n){if(typeof(n=et(n))=="string"){if(n==="")throw new W(k.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!OT(t)&&n.indexOf("/")!==-1)throw new W(k.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(Ie.fromString(n));if(!X.isDocumentKey(r))throw new W(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return N1(e,new X(r))}if(n instanceof kt)return N1(e,n._key);throw new W(k.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Xd(n)}.`)}function aw(e,t){if(!Array.isArray(e)||e.length===0)throw new W(k.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new W(k.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function Fx(e,t){if(t.isInequality()){const r=Bd(e),i=t.field;if(r!==null&&!r.isEqual(i))throw new W(k.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const o=yv(e);o!==null&&Ux(e,i,o)}const n=function(r,i){for(const o of r)for(const s of o.getFlattenedFilters())if(i.indexOf(s.op)>=0)return s.op;return null}(e.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new W(k.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new W(k.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function Ux(e,t,n){if(!n.isEqual(t))throw new W(k.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class NM{convertValue(t,n="none"){switch(Fi(t)){case 0:return null;case 1:return t.booleanValue;case 2:return qe(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Qo(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw re()}}convertObject(t,n){const r={};return Bi(t.fields,(i,o)=>{r[i]=this.convertValue(o,n)}),r}convertGeoPoint(t){return new Pv(qe(t.latitude),qe(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=CT(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ra(t));default:return null}}convertTimestamp(t){const n=Yr(t);return new Xe(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=Ie.fromString(t);Ae(rx(r));const i=new Aa(r.get(1),r.get(3)),o=new X(r.popFirst(5));return i.isEqual(n)||rr(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jx(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class zx extends Px{constructor(t,n,r,i,o,s){super(t,n,r,i,s),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new bu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(Uv("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class bu extends zx{data(t={}){return super.data(t)}}class OM{constructor(t,n,r,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ls(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new bu(this._firestore,this._userDataWriter,r.key,r,new Ls(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(s=>{const a=new bu(r._firestore,r._userDataWriter,s.doc.key,s.doc,new Ls(r._snapshot.mutatedKeys.has(s.doc.key),r._snapshot.fromCache),r.query.converter);return s.doc,{type:"added",doc:a,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(s=>i||s.type!==3).map(s=>{const a=new bu(r._firestore,r._userDataWriter,s.doc.key,s.doc,new Ls(r._snapshot.mutatedKeys.has(s.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return s.type!==0&&(l=o.indexOf(s.doc.key),o=o.delete(s.doc.key)),s.type!==1&&(o=o.add(s.doc),u=o.indexOf(s.doc.key)),{type:PM(s.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function PM(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return re()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ac(e){e=sn(e,kt);const t=sn(e.firestore,Ui);return EM(Ov(t),e._key).then(n=>Wx(t,e,n))}class Vx extends NM{constructor(t){super(),this.firestore=t}convertBytes(t){return new es(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new kt(this.firestore,null,n)}}function Bx(e,t,n){e=sn(e,kt);const r=sn(e.firestore,Ui),i=jx(e.converter,t,n);return Hv(r,[Ax(eh(r),"setDoc",e._key,i,e.converter!==null,n).toMutation(e._key,Sn.none())])}function DM(e,t,n,...r){e=sn(e,kt);const i=sn(e.firestore,Ui),o=eh(i);let s;return s=typeof(t=et(t))=="string"||t instanceof Jd?kM(o,"updateDoc",e._key,t,n,r):_M(o,"updateDoc",e._key,t),Hv(i,[s.toMutation(e._key,Sn.exists(!0))])}function MM(e,t){const n=sn(e.firestore,Ui),r=Jr(e),i=jx(e.converter,t);return Hv(n,[Ax(eh(e.firestore),"addDoc",r._key,i,e.converter!==null,{}).toMutation(r._key,Sn.exists(!1))]).then(()=>r)}function Hx(e,...t){var n,r,i;e=et(e);let o={includeMetadataChanges:!1},s=0;typeof t[s]!="object"||ow(t[s])||(o=t[s],s++);const a={includeMetadataChanges:o.includeMetadataChanges};if(ow(t[s])){const d=t[s];t[s]=(n=d.next)===null||n===void 0?void 0:n.bind(d),t[s+1]=(r=d.error)===null||r===void 0?void 0:r.bind(d),t[s+2]=(i=d.complete)===null||i===void 0?void 0:i.bind(d)}let l,u,c;if(e instanceof kt)u=sn(e.firestore,Ui),c=Vd(e._key.path),l={next:d=>{t[s]&&t[s](Wx(u,e,d))},error:t[s+1],complete:t[s+2]};else{const d=sn(e,si);u=sn(d.firestore,Ui),c=d._query;const h=new Vx(u);l={next:f=>{t[s]&&t[s](new OM(u,h,d,f))},error:t[s+1],complete:t[s+2]},RM(e._query)}return function(d,h,f,v){const p=new Cx(v),S=new vx(h,p,f);return d.asyncQueue.enqueueAndForget(async()=>mx(await om(d),S)),()=>{p.bc(),d.asyncQueue.enqueueAndForget(async()=>gx(await om(d),S))}}(Ov(u),c,a,l)}function Hv(e,t){return function(n,r){const i=new zr;return n.asyncQueue.enqueueAndForget(async()=>tM(await wM(n),r,i)),i.promise}(Ov(e),t)}function Wx(e,t,n){const r=n.docs.get(t._key),i=new Vx(e);return new zx(e,i,t._key,r,new Ls(n.hasPendingWrites,n.fromCache),t.converter)}function LM(){return new Mv("serverTimestamp")}(function(e,t=!0){(function(n){cs=n})(qa),Wo(new Oi("firestore",(n,{instanceIdentifier:r,options:i})=>{const o=n.getProvider("app").getImmediate(),s=new Ui(new BO(n.getProvider("auth-internal")),new GO(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new W(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Aa(a.options.projectId,l)}(o,r),o);return i=Object.assign({useFetchStreams:t},i),s._setSettings(i),s},"PUBLIC").setMultipleInstances(!0)),jr(I1,"3.8.0",e),jr(I1,"3.8.0","esm2017")})();var FM="firebase",UM="9.15.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jr(FM,UM,"app");const jM={apiKey:"AIzaSyDErTPV9mmY8K1IyG9gsdogtCO9RmArkQk",authDomain:"twitter-clone-789e0.firebaseapp.com",projectId:"twitter-clone-789e0",storageBucket:"twitter-clone-789e0.appspot.com",messagingSenderId:"8238254908",appId:"1:8238254908:web:cf650d56d83053e9cfec39"},qx=U2(jM),nh=FN(qx),Fn=bM(qx),fs=VA({reducer:{auth:$2.reducer}}),zM=new $n,Wv=async()=>{try{const e=await K3(nh,zM),t=$n.credentialFromResult(e),n=t==null?void 0:t.accessToken,r=e.user,i=await Ac(Jr(Fn,"users",r.uid));if(r&&n){const o={uid:r.uid,photoURL:r.photoURL,displayName:r.displayName,email:r.email,theme:i.exists()?i.data().theme:Ho};if(sessionStorage.setItem("@AuthFirebase:user",JSON.stringify(o)),fs.dispatch(bd({user:o})),!i.exists()){const s=Jr(Fn,"users",o.uid);await Bx(s,o)}}}catch{alert("Um erro ocorreu")}},VM=async(e,t,n)=>{const r=e.trim(),i=t.trim(),o=await y3(nh,r,n);await S3(o.user,{displayName:i,photoURL:"https://cdn-icons-png.flaticon.com/512/149/149071.png"});const s={displayName:o.user.displayName,photoURL:o.user.photoURL,uid:o.user.uid,email:o.user.email,theme:Ho};fs.dispatch(bd({user:s}));const a=Jr(Fn,"users",s.uid);await Bx(a,s)},BM=async(e,t)=>{try{const r=(await w3(nh,e,t)).user,i=await Ac(Jr(Fn,"users",r.uid));if(r){const o={uid:r.uid,photoURL:r.photoURL,displayName:r.displayName,theme:i.data().theme};sessionStorage.setItem("@AuthFirebase:user",JSON.stringify(o)),fs.dispatch(bd({user:o}))}}catch{alert("Credenciais inválidas")}},HM=async()=>{await x3(nh),sessionStorage.removeItem("@AuthFirebase:token"),sessionStorage.removeItem("@AuthFirebase:user"),fs.dispatch(e4())},Gx=N.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
`,Kx=N.div`
  display: flex;
  flex-direction: column;
  width: 300px;

  h2 {
    font-size: 28px;
  }

  button {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    outline: none;
    border: none;
    padding: 10px;
    font-weight: 600;
    font-size: 14px;
    margin: 10px 0;
    gap: 4px;
    background-color: #fff;
    border: 1px solid ${({theme:e})=>e.borderColor};

    :hover {
      opacity: 0.8;
    }

    svg {
      width: 20px;
      height: 20px;
    }
  }

  > p {
    font-size: 14px;
    margin-top: 30px;

    a {
      color: ${({theme:e})=>e.accent};
      text-decoration: none;

      :hover {
        text-decoration: underline;
      }
    }
  }

  input {
    width: 100%;
    margin-top: 16px;
    padding: 12px 8px;
    font-size: 14px;
    font-weight: 500;
    border-radius: 5px;
    border: 1px solid ${({theme:e})=>e.borderColor};

    :focus {
      outline-color: ${({theme:e})=>e.accent};

      ::placeholder {
        color: ${({theme:e})=>e.accent};
      }
    }
  }
`,Qx=N.div`
  display: flex;
  align-items: center;
  gap: 10px;

  hr {
    flex-grow: 1;
    size: 3;
  }
`,WM=()=>{const[e,t]=w.useState(""),[n,r]=w.useState(""),i=async o=>{o.preventDefault(),await BM(e,n),r("")};return m(Gx,{children:C(Kx,{children:[m("h2",{children:"Entrar no Twitter"}),C("button",{type:"button",onClick:Wv,children:[m(Ng,{}),m("p",{children:"Fazer login com o Google"})]}),C(Qx,{children:[m("hr",{}),m("span",{children:"ou"}),m("hr",{})]}),C("form",{onSubmit:o=>{i(o)},children:[m("input",{type:"email",name:"email",id:"email",placeholder:"Email",value:e,onChange:o=>t(o.target.value)}),m("input",{type:"password",name:"senha",id:"senha",placeholder:"Senha",value:n,onChange:o=>r(o.target.value)}),m("button",{type:"submit",children:"Entrar"})]}),C("p",{children:["Não tem uma conta? ",m("a",{href:"",children:"Inscreva-se"})]})]})})},qM=()=>{const[e,t]=w.useState(""),[n,r]=w.useState(""),[i,o]=w.useState(""),[s,a]=w.useState(""),l=async u=>{if(u.preventDefault(),i!==s){alert("As senhas são diferentes");return}await VM(e,n,i)};return m(Gx,{children:C(Kx,{children:[m("h2",{children:"Entre hoje mesmo para o Twitter"}),C("button",{type:"button",onClick:Wv,children:[m(Ng,{}),m("p",{children:"Inscrever-se no Google"})]}),C(Qx,{children:[m("hr",{}),m("span",{children:"ou"}),m("hr",{})]}),C("form",{onSubmit:u=>{l(u)},children:[m("input",{type:"email",name:"email",id:"emailSignup",placeholder:"Email",value:e,onChange:u=>t(u.target.value)}),m("input",{type:"text",name:"displayName",id:"nameSignup",placeholder:"Nome",value:n,onChange:u=>r(u.target.value)}),m("input",{type:"password",name:"senha",id:"senhasignup",placeholder:"Senha",value:i,onChange:u=>o(u.target.value)}),m("input",{type:"password",name:"senha2",id:"senha2signup",placeholder:"Confirmação de senha",value:s,onChange:u=>a(u.target.value)}),m("button",{type:"submit",children:"Cadastrar-se"})]}),C("p",{children:["Já tem uma conta? ",m("a",{href:"",children:"Entre"})]})]})})};function pt(e,t,{checkForDefaultPrevented:n=!0}={}){return function(i){if(e==null||e(i),n===!1||!i.defaultPrevented)return t==null?void 0:t(i)}}function GM(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function Yx(...e){return t=>e.forEach(n=>GM(n,t))}function xn(...e){return w.useCallback(Yx(...e),e)}function gl(e,t=[]){let n=[];function r(o,s){const a=w.createContext(s),l=n.length;n=[...n,s];function u(d){const{scope:h,children:f,...v}=d,p=(h==null?void 0:h[e][l])||a,S=w.useMemo(()=>v,Object.values(v));return w.createElement(p.Provider,{value:S},f)}function c(d,h){const f=(h==null?void 0:h[e][l])||a,v=w.useContext(f);if(v)return v;if(s!==void 0)return s;throw new Error(`\`${d}\` must be used within \`${o}\``)}return u.displayName=o+"Provider",[u,c]}const i=()=>{const o=n.map(s=>w.createContext(s));return function(a){const l=(a==null?void 0:a[e])||o;return w.useMemo(()=>({[`__scope${e}`]:{...a,[e]:l}}),[a,l])}};return i.scopeName=e,[r,KM(i,...t)]}function KM(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(i=>({useScope:i(),scopeName:i.scopeName}));return function(o){const s=r.reduce((a,{useScope:l,scopeName:u})=>{const d=l(o)[`__scope${u}`];return{...a,...d}},{});return w.useMemo(()=>({[`__scope${t.scopeName}`]:s}),[s])}};return n.scopeName=t.scopeName,n}const Rc=Boolean(globalThis==null?void 0:globalThis.document)?w.useLayoutEffect:()=>{},QM=Iu["useId".toString()]||(()=>{});let YM=0;function Tu(e){const[t,n]=w.useState(QM());return Rc(()=>{e||n(r=>r??String(YM++))},[e]),e||(t?`radix-${t}`:"")}function Zr(e){const t=w.useRef(e);return w.useEffect(()=>{t.current=e}),w.useMemo(()=>(...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}function qv({prop:e,defaultProp:t,onChange:n=()=>{}}){const[r,i]=XM({defaultProp:t,onChange:n}),o=e!==void 0,s=o?e:r,a=Zr(n),l=w.useCallback(u=>{if(o){const d=typeof u=="function"?u(e):u;d!==e&&a(d)}else i(u)},[o,e,i,a]);return[s,l]}function XM({defaultProp:e,onChange:t}){const n=w.useState(e),[r]=n,i=w.useRef(r),o=Zr(t);return w.useEffect(()=>{i.current!==r&&(o(r),i.current=r)},[r,i,o]),n}const Ma=w.forwardRef((e,t)=>{const{children:n,...r}=e,i=w.Children.toArray(n),o=i.find(ZM);if(o){const s=o.props.children,a=i.map(l=>l===o?w.Children.count(s)>1?w.Children.only(null):w.isValidElement(s)?s.props.children:null:l);return w.createElement(am,Ce({},r,{ref:t}),w.isValidElement(s)?w.cloneElement(s,void 0,a):null)}return w.createElement(am,Ce({},r,{ref:t}),n)});Ma.displayName="Slot";const am=w.forwardRef((e,t)=>{const{children:n,...r}=e;return w.isValidElement(n)?w.cloneElement(n,{...eL(r,n.props),ref:Yx(t,n.ref)}):w.Children.count(n)>1?w.Children.only(null):null});am.displayName="SlotClone";const JM=({children:e})=>w.createElement(w.Fragment,null,e);function ZM(e){return w.isValidElement(e)&&e.type===JM}function eL(e,t){const n={...t};for(const r in t){const i=e[r],o=t[r];/^on[A-Z]/.test(r)?i&&o?n[r]=(...a)=>{o(...a),i(...a)}:i&&(n[r]=i):r==="style"?n[r]={...i,...o}:r==="className"&&(n[r]=[i,o].filter(Boolean).join(" "))}return{...e,...n}}const tL=["a","button","div","h2","h3","img","label","li","nav","ol","p","span","svg","ul"],dn=tL.reduce((e,t)=>{const n=w.forwardRef((r,i)=>{const{asChild:o,...s}=r,a=o?Ma:t;return w.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),w.createElement(a,Ce({},s,{ref:i}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function nL(e,t){e&&xi.flushSync(()=>e.dispatchEvent(t))}function rL(e,t=globalThis==null?void 0:globalThis.document){const n=Zr(e);w.useEffect(()=>{const r=i=>{i.key==="Escape"&&n(i)};return t.addEventListener("keydown",r),()=>t.removeEventListener("keydown",r)},[n,t])}const lm="dismissableLayer.update",iL="dismissableLayer.pointerDownOutside",oL="dismissableLayer.focusOutside";let lw;const sL=w.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),aL=w.forwardRef((e,t)=>{var n;const{disableOutsidePointerEvents:r=!1,onEscapeKeyDown:i,onPointerDownOutside:o,onFocusOutside:s,onInteractOutside:a,onDismiss:l,...u}=e,c=w.useContext(sL),[d,h]=w.useState(null),f=(n=d==null?void 0:d.ownerDocument)!==null&&n!==void 0?n:globalThis==null?void 0:globalThis.document,[,v]=w.useState({}),p=xn(t,$=>h($)),S=Array.from(c.layers),[y]=[...c.layersWithOutsidePointerEventsDisabled].slice(-1),g=S.indexOf(y),E=d?S.indexOf(d):-1,b=c.layersWithOutsidePointerEventsDisabled.size>0,T=E>=g,A=lL($=>{const H=$.target,P=[...c.branches].some(me=>me.contains(H));!T||P||(o==null||o($),a==null||a($),$.defaultPrevented||l==null||l())},f),I=uL($=>{const H=$.target;[...c.branches].some(me=>me.contains(H))||(s==null||s($),a==null||a($),$.defaultPrevented||l==null||l())},f);return rL($=>{E===c.layers.size-1&&(i==null||i($),!$.defaultPrevented&&l&&($.preventDefault(),l()))},f),w.useEffect(()=>{if(d)return r&&(c.layersWithOutsidePointerEventsDisabled.size===0&&(lw=f.body.style.pointerEvents,f.body.style.pointerEvents="none"),c.layersWithOutsidePointerEventsDisabled.add(d)),c.layers.add(d),uw(),()=>{r&&c.layersWithOutsidePointerEventsDisabled.size===1&&(f.body.style.pointerEvents=lw)}},[d,f,r,c]),w.useEffect(()=>()=>{d&&(c.layers.delete(d),c.layersWithOutsidePointerEventsDisabled.delete(d),uw())},[d,c]),w.useEffect(()=>{const $=()=>v({});return document.addEventListener(lm,$),()=>document.removeEventListener(lm,$)},[]),w.createElement(dn.div,Ce({},u,{ref:p,style:{pointerEvents:b?T?"auto":"none":void 0,...e.style},onFocusCapture:pt(e.onFocusCapture,I.onFocusCapture),onBlurCapture:pt(e.onBlurCapture,I.onBlurCapture),onPointerDownCapture:pt(e.onPointerDownCapture,A.onPointerDownCapture)}))});function lL(e,t=globalThis==null?void 0:globalThis.document){const n=Zr(e),r=w.useRef(!1),i=w.useRef(()=>{});return w.useEffect(()=>{const o=a=>{if(a.target&&!r.current){let c=function(){Xx(iL,n,u,{discrete:!0})};var l=c;const u={originalEvent:a};a.pointerType==="touch"?(t.removeEventListener("click",i.current),i.current=c,t.addEventListener("click",i.current,{once:!0})):c()}r.current=!1},s=window.setTimeout(()=>{t.addEventListener("pointerdown",o)},0);return()=>{window.clearTimeout(s),t.removeEventListener("pointerdown",o),t.removeEventListener("click",i.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function uL(e,t=globalThis==null?void 0:globalThis.document){const n=Zr(e),r=w.useRef(!1);return w.useEffect(()=>{const i=o=>{o.target&&!r.current&&Xx(oL,n,{originalEvent:o},{discrete:!1})};return t.addEventListener("focusin",i),()=>t.removeEventListener("focusin",i)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function uw(){const e=new CustomEvent(lm);document.dispatchEvent(e)}function Xx(e,t,n,{discrete:r}){const i=n.originalEvent.target,o=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&i.addEventListener(e,t,{once:!0}),r?nL(i,o):i.dispatchEvent(o)}const lf="focusScope.autoFocusOnMount",uf="focusScope.autoFocusOnUnmount",cw={bubbles:!1,cancelable:!0},cL=w.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:i,onUnmountAutoFocus:o,...s}=e,[a,l]=w.useState(null),u=Zr(i),c=Zr(o),d=w.useRef(null),h=xn(t,p=>l(p)),f=w.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;w.useEffect(()=>{if(r){let y=function(E){if(f.paused||!a)return;const b=E.target;a.contains(b)?d.current=b:di(d.current,{select:!0})},g=function(E){f.paused||!a||a.contains(E.relatedTarget)||di(d.current,{select:!0})};var p=y,S=g;return document.addEventListener("focusin",y),document.addEventListener("focusout",g),()=>{document.removeEventListener("focusin",y),document.removeEventListener("focusout",g)}}},[r,a,f.paused]),w.useEffect(()=>{if(a){hw.add(f);const p=document.activeElement;if(!a.contains(p)){const y=new CustomEvent(lf,cw);a.addEventListener(lf,u),a.dispatchEvent(y),y.defaultPrevented||(dL(gL(Jx(a)),{select:!0}),document.activeElement===p&&di(a))}return()=>{a.removeEventListener(lf,u),setTimeout(()=>{const y=new CustomEvent(uf,cw);a.addEventListener(uf,c),a.dispatchEvent(y),y.defaultPrevented||di(p??document.body,{select:!0}),a.removeEventListener(uf,c),hw.remove(f)},0)}}},[a,u,c,f]);const v=w.useCallback(p=>{if(!n&&!r||f.paused)return;const S=p.key==="Tab"&&!p.altKey&&!p.ctrlKey&&!p.metaKey,y=document.activeElement;if(S&&y){const g=p.currentTarget,[E,b]=hL(g);E&&b?!p.shiftKey&&y===b?(p.preventDefault(),n&&di(E,{select:!0})):p.shiftKey&&y===E&&(p.preventDefault(),n&&di(b,{select:!0})):y===g&&p.preventDefault()}},[n,r,f.paused]);return w.createElement(dn.div,Ce({tabIndex:-1},s,{ref:h,onKeyDown:v}))});function dL(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(di(r,{select:t}),document.activeElement!==n)return}function hL(e){const t=Jx(e),n=dw(t,e),r=dw(t.reverse(),e);return[n,r]}function Jx(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const i=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||i?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function dw(e,t){for(const n of e)if(!fL(n,{upTo:t}))return n}function fL(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function pL(e){return e instanceof HTMLInputElement&&"select"in e}function di(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&pL(e)&&t&&e.select()}}const hw=mL();function mL(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=fw(e,t),e.unshift(t)},remove(t){var n;e=fw(e,t),(n=e[0])===null||n===void 0||n.resume()}}}function fw(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function gL(e){return e.filter(t=>t.tagName!=="A")}const vL=w.forwardRef((e,t)=>{var n;const{container:r=globalThis==null||(n=globalThis.document)===null||n===void 0?void 0:n.body,...i}=e;return r?kI.createPortal(w.createElement(dn.div,Ce({},i,{ref:t})),r):null});function yL(e,t){return w.useReducer((n,r)=>{const i=t[n][r];return i??n},e)}const vl=e=>{const{present:t,children:n}=e,r=wL(t),i=typeof n=="function"?n({present:r.isPresent}):w.Children.only(n),o=xn(r.ref,i.ref);return typeof n=="function"||r.isPresent?w.cloneElement(i,{ref:o}):null};vl.displayName="Presence";function wL(e){const[t,n]=w.useState(),r=w.useRef({}),i=w.useRef(e),o=w.useRef("none"),s=e?"mounted":"unmounted",[a,l]=yL(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return w.useEffect(()=>{const u=Yl(r.current);o.current=a==="mounted"?u:"none"},[a]),Rc(()=>{const u=r.current,c=i.current;if(c!==e){const h=o.current,f=Yl(u);e?l("MOUNT"):f==="none"||(u==null?void 0:u.display)==="none"?l("UNMOUNT"):l(c&&h!==f?"ANIMATION_OUT":"UNMOUNT"),i.current=e}},[e,l]),Rc(()=>{if(t){const u=d=>{const f=Yl(r.current).includes(d.animationName);d.target===t&&f&&xi.flushSync(()=>l("ANIMATION_END"))},c=d=>{d.target===t&&(o.current=Yl(r.current))};return t.addEventListener("animationstart",c),t.addEventListener("animationcancel",u),t.addEventListener("animationend",u),()=>{t.removeEventListener("animationstart",c),t.removeEventListener("animationcancel",u),t.removeEventListener("animationend",u)}}else l("ANIMATION_END")},[t,l]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:w.useCallback(u=>{u&&(r.current=getComputedStyle(u)),n(u)},[])}}function Yl(e){return(e==null?void 0:e.animationName)||"none"}let cf=0;function EL(){w.useEffect(()=>{var e,t;const n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",(e=n[0])!==null&&e!==void 0?e:pw()),document.body.insertAdjacentElement("beforeend",(t=n[1])!==null&&t!==void 0?t:pw()),cf++,()=>{cf===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(r=>r.remove()),cf--}},[])}function pw(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}var xu="right-scroll-bar-position",Cu="width-before-scroll-bar",SL="with-scroll-bars-hidden",bL="--removed-body-scroll-bar-size";function TL(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function xL(e,t){var n=w.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var i=n.value;i!==r&&(n.value=r,n.callback(r,i))}}}})[0];return n.callback=t,n.facade}function CL(e,t){return xL(t||null,function(n){return e.forEach(function(r){return TL(r,n)})})}function _L(e){return e}function kL(e,t){t===void 0&&(t=_L);var n=[],r=!1,i={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(o){var s=t(o,r);return n.push(s),function(){n=n.filter(function(a){return a!==s})}},assignSyncMedium:function(o){for(r=!0;n.length;){var s=n;n=[],s.forEach(o)}n={push:function(a){return o(a)},filter:function(){return n}}},assignMedium:function(o){r=!0;var s=[];if(n.length){var a=n;n=[],a.forEach(o),s=n}var l=function(){var c=s;s=[],c.forEach(o)},u=function(){return Promise.resolve().then(l)};u(),n={push:function(c){s.push(c),u()},filter:function(c){return s=s.filter(c),n}}}};return i}function IL(e){e===void 0&&(e={});var t=kL(null);return t.options=In({async:!0,ssr:!1},e),t}var Zx=function(e){var t=e.sideCar,n=Ga(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return w.createElement(r,In({},n))};Zx.isSideCarExport=!0;function $L(e,t){return e.useMedium(t),Zx}var eC=IL(),df=function(){},rh=w.forwardRef(function(e,t){var n=w.useRef(null),r=w.useState({onScrollCapture:df,onWheelCapture:df,onTouchMoveCapture:df}),i=r[0],o=r[1],s=e.forwardProps,a=e.children,l=e.className,u=e.removeScrollBar,c=e.enabled,d=e.shards,h=e.sideCar,f=e.noIsolation,v=e.inert,p=e.allowPinchZoom,S=e.as,y=S===void 0?"div":S,g=Ga(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),E=h,b=CL([n,t]),T=In(In({},g),i);return w.createElement(w.Fragment,null,c&&w.createElement(E,{sideCar:eC,removeScrollBar:u,shards:d,noIsolation:f,inert:v,setCallbacks:o,allowPinchZoom:!!p,lockRef:n}),s?w.cloneElement(w.Children.only(a),In(In({},T),{ref:b})):w.createElement(y,In({},T,{className:l,ref:b}),a))});rh.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};rh.classNames={fullWidth:Cu,zeroRight:xu};var AL=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function RL(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=AL();return t&&e.setAttribute("nonce",t),e}function NL(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function OL(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var PL=function(){var e=0,t=null;return{add:function(n){e==0&&(t=RL())&&(NL(t,n),OL(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},DL=function(){var e=PL();return function(t,n){w.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},tC=function(){var e=DL(),t=function(n){var r=n.styles,i=n.dynamic;return e(r,i),null};return t},ML={left:0,top:0,right:0,gap:0},hf=function(e){return parseInt(e||"",10)||0},LL=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],i=t[e==="padding"?"paddingRight":"marginRight"];return[hf(n),hf(r),hf(i)]},FL=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return ML;var t=LL(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},UL=tC(),jL=function(e,t,n,r){var i=e.left,o=e.top,s=e.right,a=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(SL,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(a,"px ").concat(r,`;
  }
  body {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(i,`px;
    padding-top: `).concat(o,`px;
    padding-right: `).concat(s,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(a,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(xu,` {
    right: `).concat(a,"px ").concat(r,`;
  }
  
  .`).concat(Cu,` {
    margin-right: `).concat(a,"px ").concat(r,`;
  }
  
  .`).concat(xu," .").concat(xu,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(Cu," .").concat(Cu,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body {
    `).concat(bL,": ").concat(a,`px;
  }
`)},zL=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,i=r===void 0?"margin":r,o=w.useMemo(function(){return FL(i)},[i]);return w.createElement(UL,{styles:jL(o,!t,i,n?"":"!important")})},um=!1;if(typeof window<"u")try{var Xl=Object.defineProperty({},"passive",{get:function(){return um=!0,!0}});window.addEventListener("test",Xl,Xl),window.removeEventListener("test",Xl,Xl)}catch{um=!1}var Qi=um?{passive:!1}:!1,VL=function(e){return e.tagName==="TEXTAREA"},nC=function(e,t){var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!VL(e)&&n[t]==="visible")},BL=function(e){return nC(e,"overflowY")},HL=function(e){return nC(e,"overflowX")},mw=function(e,t){var n=t;do{typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&(n=n.host);var r=rC(e,n);if(r){var i=iC(e,n),o=i[1],s=i[2];if(o>s)return!0}n=n.parentNode}while(n&&n!==document.body);return!1},WL=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},qL=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},rC=function(e,t){return e==="v"?BL(t):HL(t)},iC=function(e,t){return e==="v"?WL(t):qL(t)},GL=function(e,t){return e==="h"&&t==="rtl"?-1:1},KL=function(e,t,n,r,i){var o=GL(e,window.getComputedStyle(t).direction),s=o*r,a=n.target,l=t.contains(a),u=!1,c=s>0,d=0,h=0;do{var f=iC(e,a),v=f[0],p=f[1],S=f[2],y=p-S-o*v;(v||y)&&rC(e,a)&&(d+=y,h+=v),a=a.parentNode}while(!l&&a!==document.body||l&&(t.contains(a)||t===a));return(c&&(i&&d===0||!i&&s>d)||!c&&(i&&h===0||!i&&-s>h))&&(u=!0),u},Jl=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},gw=function(e){return[e.deltaX,e.deltaY]},vw=function(e){return e&&"current"in e?e.current:e},QL=function(e,t){return e[0]===t[0]&&e[1]===t[1]},YL=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},XL=0,Yi=[];function JL(e){var t=w.useRef([]),n=w.useRef([0,0]),r=w.useRef(),i=w.useState(XL++)[0],o=w.useState(function(){return tC()})[0],s=w.useRef(e);w.useEffect(function(){s.current=e},[e]),w.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(i));var p=NR([e.lockRef.current],(e.shards||[]).map(vw),!0).filter(Boolean);return p.forEach(function(S){return S.classList.add("allow-interactivity-".concat(i))}),function(){document.body.classList.remove("block-interactivity-".concat(i)),p.forEach(function(S){return S.classList.remove("allow-interactivity-".concat(i))})}}},[e.inert,e.lockRef.current,e.shards]);var a=w.useCallback(function(p,S){if("touches"in p&&p.touches.length===2)return!s.current.allowPinchZoom;var y=Jl(p),g=n.current,E="deltaX"in p?p.deltaX:g[0]-y[0],b="deltaY"in p?p.deltaY:g[1]-y[1],T,A=p.target,I=Math.abs(E)>Math.abs(b)?"h":"v";if("touches"in p&&I==="h"&&A.type==="range")return!1;var $=mw(I,A);if(!$)return!0;if($?T=I:(T=I==="v"?"h":"v",$=mw(I,A)),!$)return!1;if(!r.current&&"changedTouches"in p&&(E||b)&&(r.current=T),!T)return!0;var H=r.current||T;return KL(H,S,p,H==="h"?E:b,!0)},[]),l=w.useCallback(function(p){var S=p;if(!(!Yi.length||Yi[Yi.length-1]!==o)){var y="deltaY"in S?gw(S):Jl(S),g=t.current.filter(function(T){return T.name===S.type&&T.target===S.target&&QL(T.delta,y)})[0];if(g&&g.should){S.cancelable&&S.preventDefault();return}if(!g){var E=(s.current.shards||[]).map(vw).filter(Boolean).filter(function(T){return T.contains(S.target)}),b=E.length>0?a(S,E[0]):!s.current.noIsolation;b&&S.cancelable&&S.preventDefault()}}},[]),u=w.useCallback(function(p,S,y,g){var E={name:p,delta:S,target:y,should:g};t.current.push(E),setTimeout(function(){t.current=t.current.filter(function(b){return b!==E})},1)},[]),c=w.useCallback(function(p){n.current=Jl(p),r.current=void 0},[]),d=w.useCallback(function(p){u(p.type,gw(p),p.target,a(p,e.lockRef.current))},[]),h=w.useCallback(function(p){u(p.type,Jl(p),p.target,a(p,e.lockRef.current))},[]);w.useEffect(function(){return Yi.push(o),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:h}),document.addEventListener("wheel",l,Qi),document.addEventListener("touchmove",l,Qi),document.addEventListener("touchstart",c,Qi),function(){Yi=Yi.filter(function(p){return p!==o}),document.removeEventListener("wheel",l,Qi),document.removeEventListener("touchmove",l,Qi),document.removeEventListener("touchstart",c,Qi)}},[]);var f=e.removeScrollBar,v=e.inert;return w.createElement(w.Fragment,null,v?w.createElement(o,{styles:YL(i)}):null,f?w.createElement(zL,{gapMode:"margin"}):null)}const ZL=$L(eC,JL);var oC=w.forwardRef(function(e,t){return w.createElement(rh,In({},e,{ref:t,sideCar:ZL}))});oC.classNames=rh.classNames;const e5=oC;var t5=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},Xi=new WeakMap,Zl=new WeakMap,eu={},ff=0,sC=function(e){return e&&(e.host||sC(e.parentNode))},n5=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=sC(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return Boolean(n)})},r5=function(e,t,n,r){var i=n5(t,Array.isArray(e)?e:[e]);eu[n]||(eu[n]=new WeakMap);var o=eu[n],s=[],a=new Set,l=new Set(i),u=function(d){!d||a.has(d)||(a.add(d),u(d.parentNode))};i.forEach(u);var c=function(d){!d||l.has(d)||Array.prototype.forEach.call(d.children,function(h){if(a.has(h))c(h);else{var f=h.getAttribute(r),v=f!==null&&f!=="false",p=(Xi.get(h)||0)+1,S=(o.get(h)||0)+1;Xi.set(h,p),o.set(h,S),s.push(h),p===1&&v&&Zl.set(h,!0),S===1&&h.setAttribute(n,"true"),v||h.setAttribute(r,"true")}})};return c(t),a.clear(),ff++,function(){s.forEach(function(d){var h=Xi.get(d)-1,f=o.get(d)-1;Xi.set(d,h),o.set(d,f),h||(Zl.has(d)||d.removeAttribute(r),Zl.delete(d)),f||d.removeAttribute(n)}),ff--,ff||(Xi=new WeakMap,Xi=new WeakMap,Zl=new WeakMap,eu={})}},i5=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),i=t||t5(e);return i?(r.push.apply(r,Array.from(i.querySelectorAll("[aria-live]"))),r5(r,i,n,"aria-hidden")):function(){return null}};const aC="Dialog",[lC,_U]=gl(aC),[o5,Un]=lC(aC),s5=e=>{const{__scopeDialog:t,children:n,open:r,defaultOpen:i,onOpenChange:o,modal:s=!0}=e,a=w.useRef(null),l=w.useRef(null),[u=!1,c]=qv({prop:r,defaultProp:i,onChange:o});return w.createElement(o5,{scope:t,triggerRef:a,contentRef:l,contentId:Tu(),titleId:Tu(),descriptionId:Tu(),open:u,onOpenChange:c,onOpenToggle:w.useCallback(()=>c(d=>!d),[c]),modal:s},n)},a5="DialogTrigger",l5=w.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,i=Un(a5,n),o=xn(t,i.triggerRef);return w.createElement(dn.button,Ce({type:"button","aria-haspopup":"dialog","aria-expanded":i.open,"aria-controls":i.contentId,"data-state":Gv(i.open)},r,{ref:o,onClick:pt(e.onClick,i.onOpenToggle)}))}),uC="DialogPortal",[u5,cC]=lC(uC,{forceMount:void 0}),c5=e=>{const{__scopeDialog:t,forceMount:n,children:r,container:i}=e,o=Un(uC,t);return w.createElement(u5,{scope:t,forceMount:n},w.Children.map(r,s=>w.createElement(vl,{present:n||o.open},w.createElement(vL,{asChild:!0,container:i},s))))},cm="DialogOverlay",d5=w.forwardRef((e,t)=>{const n=cC(cm,e.__scopeDialog),{forceMount:r=n.forceMount,...i}=e,o=Un(cm,e.__scopeDialog);return o.modal?w.createElement(vl,{present:r||o.open},w.createElement(h5,Ce({},i,{ref:t}))):null}),h5=w.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,i=Un(cm,n);return w.createElement(e5,{as:Ma,allowPinchZoom:!0,shards:[i.contentRef]},w.createElement(dn.div,Ce({"data-state":Gv(i.open)},r,{ref:t,style:{pointerEvents:"auto",...r.style}})))}),La="DialogContent",f5=w.forwardRef((e,t)=>{const n=cC(La,e.__scopeDialog),{forceMount:r=n.forceMount,...i}=e,o=Un(La,e.__scopeDialog);return w.createElement(vl,{present:r||o.open},o.modal?w.createElement(p5,Ce({},i,{ref:t})):w.createElement(m5,Ce({},i,{ref:t})))}),p5=w.forwardRef((e,t)=>{const n=Un(La,e.__scopeDialog),r=w.useRef(null),i=xn(t,n.contentRef,r);return w.useEffect(()=>{const o=r.current;if(o)return i5(o)},[]),w.createElement(dC,Ce({},e,{ref:i,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:pt(e.onCloseAutoFocus,o=>{var s;o.preventDefault(),(s=n.triggerRef.current)===null||s===void 0||s.focus()}),onPointerDownOutside:pt(e.onPointerDownOutside,o=>{const s=o.detail.originalEvent,a=s.button===0&&s.ctrlKey===!0;(s.button===2||a)&&o.preventDefault()}),onFocusOutside:pt(e.onFocusOutside,o=>o.preventDefault())}))}),m5=w.forwardRef((e,t)=>{const n=Un(La,e.__scopeDialog),r=w.useRef(!1);return w.createElement(dC,Ce({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:i=>{var o;if((o=e.onCloseAutoFocus)===null||o===void 0||o.call(e,i),!i.defaultPrevented){var s;r.current||(s=n.triggerRef.current)===null||s===void 0||s.focus(),i.preventDefault()}r.current=!1},onInteractOutside:i=>{var o,s;(o=e.onInteractOutside)===null||o===void 0||o.call(e,i),i.defaultPrevented||(r.current=!0);const a=i.target;((s=n.triggerRef.current)===null||s===void 0?void 0:s.contains(a))&&i.preventDefault()}}))}),dC=w.forwardRef((e,t)=>{const{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:i,onCloseAutoFocus:o,...s}=e,a=Un(La,n),l=w.useRef(null),u=xn(t,l);return EL(),w.createElement(w.Fragment,null,w.createElement(cL,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:i,onUnmountAutoFocus:o},w.createElement(aL,Ce({role:"dialog",id:a.contentId,"aria-describedby":a.descriptionId,"aria-labelledby":a.titleId,"data-state":Gv(a.open)},s,{ref:u,onDismiss:()=>a.onOpenChange(!1)}))),!1)}),g5="DialogTitle",v5=w.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,i=Un(g5,n);return w.createElement(dn.h2,Ce({id:i.titleId},r,{ref:t}))}),y5="DialogClose",w5=w.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,i=Un(y5,n);return w.createElement(dn.button,Ce({type:"button"},r,{ref:t,onClick:pt(e.onClick,()=>i.onOpenChange(!1))}))});function Gv(e){return e?"open":"closed"}const E5=s5,S5=l5,b5=c5,T5=d5,x5=f5,C5=v5,_5=w5;function k5(e){return pe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M9 6h2v14H9zm4 2h2v12h-2zm4-4h2v16h-2zM5 12h2v8H5z"}}]})(e)}function I5(e){return pe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14H6.667L4 18V4h16v12z"}}]})(e)}function $5(e){return pe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}}]})(e)}function yw(e){return pe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16.018 3.815 15.232 8h-4.966l.716-3.815-1.964-.37L8.232 8H4v2h3.857l-.751 4H3v2h3.731l-.714 3.805 1.965.369L8.766 16h4.966l-.714 3.805 1.965.369.783-4.174H20v-2h-3.859l.751-4H21V8h-3.733l.716-3.815-1.965-.37zM14.106 14H9.141l.751-4h4.966l-.752 4z"}}]})(e)}function A5(e){return pe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"}},{tag:"path",attr:{d:"M11.42 21.814a.998.998 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.005.021 4.438-4.388 8.423-6 9.73-1.611-1.308-6.021-5.294-6-9.735 0-3.309 2.691-6 6-6z"}}]})(e)}function R5(e){return pe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20 2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3v3.767L13.277 18H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14h-7.277L9 18.233V16H4V4h16v12z"}},{tag:"path",attr:{d:"M11 14h2v-3h3V9h-3V6h-2v3H8v2h3z"}}]})(e)}function dm(e){return pe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"}}]})(e)}function N5(e){return pe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"}}]})(e)}function O5(e){return pe({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"}}]})(e)}function P5(e){return pe({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"}}]})(e)}function D5(e){return pe({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}},{tag:"path",attr:{d:"M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"}}]})(e)}function M5(e){return pe({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"}}]})(e)}function L5(e){return pe({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"}}]})(e)}function hC(e){return pe({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}}]})(e)}function F5(e){return pe({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"}}]})(e)}function U5(e){return pe({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z"}}]})(e)}function fC(e){return pe({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"}}]})(e)}function Kv(e){return pe({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"}}]})(e)}const j5=N(T5)`
  width: 100vw;
  height: 100vh;
  background-color: #2225;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`,z5=N(x5)`
  background-color: ${({theme:e})=>e.bg};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  display: relative;
  top: 0px;
  left: 0px;
  padding: 10px;
  width: min(100%, 400px);
  margin: 16px 0;
`,V5=N.div`
  display: flex;
  min-width: 350px;
  position: relative;
  justify-content: center;
  align-items: center;

  svg {
    width: 32px;
    height: 32px;
    object-fit: contain;
    margin-top: 4px;
  }

  button {
    position: absolute;
    top: 0px;
    left: 0px;
    background: none;
    outline: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;

    svg {
      margin-top: 0;
      width: 24px;
      height: 24px;
      object-fit: contain;
    }

    :hover {
      background-color: #0002;
      border-radius: 50%;
    }
  }
`,Nc=({children:e,triggerContent:t,showHeader:n=!0,...r})=>C(E5,{...r,children:[m(S5,{children:t}),m(b5,{children:m(j5,{children:C(z5,{children:[n??C(V5,{children:[m(_5,{children:m(N5,{})}),m(C5,{children:m(Kv,{})})]}),e]})})})]});N.div`
  width: 100%;
  max-width: 1200px;
`;const yl=N.div`
  width: 100%;
  max-width: 600px;
  border-left: 1px solid ${({theme:e})=>e.borderColor};
  border-right: 1px solid ${({theme:e})=>e.borderColor};
`;N.div`
  width: 100%;
  max-width: 320px;
  border-left: 1px solid ${({theme:e})=>e.borderColor};
  border-right: 1px solid ${({theme:e})=>e.borderColor};
`;const B5=N.div`
  width: 100%;
  max-width: 920px;
`,H5=N.div`
  position: fixed;
  bottom: 0px;
  width: 100%;
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({theme:e})=>e.accent};
  color: #fff;

  & > div {
    gap: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`,W5=N.div`
  display: none;
  flex-direction: column;

  @media screen and (min-width: 721px) {
    display: flex;
  }
`,q5=N.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  button {
    padding: 8px 16px;
    border-radius: 40px;
    text-decoration: none;
    font-weight: 600;
    text-align: center;

    :hover {
      opacity: 0.85;
    }

    :first-of-type {
      background: ${({theme:e})=>e.accent};
      color: #fff;
      border: 1px solid #fff;
    }

    :last-of-type {
      color: #000;
      background: #fff;
      border: 1px solid #fff;
    }

    @media screen and (max-width: 720px) {
      flex-grow: 1;
    }
  }

  @media screen and (max-width: 720px) {
    flex-grow: 1;
  }
`,G5=()=>{const{user:e}=lr(ur);return e?null:m(H5,{children:C(B5,{children:[C(W5,{children:[m("h2",{children:"Não perca o que está acontecendo"}),m("p",{children:"As pessoas que usam o Twitter são as primeiras a saber."})]}),C(q5,{children:[m(Nc,{triggerContent:"Entrar",children:m(WM,{})}),m(Nc,{triggerContent:"Inscrever-se",children:m(qM,{})})]})]})})},K5=w.createContext({setCurrentTheme:()=>{}}),Q5=({children:e})=>{const{user:t}=lr(ur),[n,r]=w.useState(Ho);return w.useEffect(()=>{const o=t?t.theme:(()=>window.matchMedia("(prefers-color-scheme: dark)").matches?w2:Ho)();r(o);const s=document.querySelector("meta[name=theme-color]");s==null||s.setAttribute("content",o.bg)},[t]),m(K5.Provider,{value:{setCurrentTheme:r},children:m(oA,{theme:n,children:e})})};/**
 * @remix-run/router v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Oc(){return Oc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Oc.apply(this,arguments)}var Cr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Cr||(Cr={}));const ww="popstate";function Y5(e){e===void 0&&(e={});function t(i,o){let{pathname:s="/",search:a="",hash:l=""}=qi(i.location.hash.substr(1));return hm("",{pathname:s,search:a,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(i,o){let s=i.document.querySelector("base"),a="";if(s&&s.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof o=="string"?o:Fa(o))}function r(i,o){X5(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return e6(t,n,r,e)}function Ze(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function X5(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function J5(){return Math.random().toString(36).substr(2,8)}function Ew(e){return{usr:e.state,key:e.key}}function hm(e,t,n,r){return n===void 0&&(n=null),Oc({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?qi(t):t,{state:n,key:t&&t.key||r||J5()})}function Fa(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function qi(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Z5(e){let t=typeof window<"u"&&typeof window.location<"u"&&window.location.origin!=="null"?window.location.origin:window.location.href,n=typeof e=="string"?e:Fa(e);return Ze(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}function e6(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=Cr.Pop,l=null;function u(){a=Cr.Pop,l&&l({action:a,location:h.location})}function c(f,v){a=Cr.Push;let p=hm(h.location,f,v);n&&n(p,f);let S=Ew(p),y=h.createHref(p);try{s.pushState(S,"",y)}catch{i.location.assign(y)}o&&l&&l({action:a,location:h.location})}function d(f,v){a=Cr.Replace;let p=hm(h.location,f,v);n&&n(p,f);let S=Ew(p),y=h.createHref(p);s.replaceState(S,"",y),o&&l&&l({action:a,location:h.location})}let h={get action(){return a},get location(){return e(i,s)},listen(f){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(ww,u),l=f,()=>{i.removeEventListener(ww,u),l=null}},createHref(f){return t(i,f)},encodeLocation(f){let v=Z5(typeof f=="string"?f:Fa(f));return{pathname:v.pathname,search:v.search,hash:v.hash}},push:c,replace:d,go(f){return s.go(f)}};return h}var Sw;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Sw||(Sw={}));function t6(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?qi(t):t,i=gC(r.pathname||"/",n);if(i==null)return null;let o=pC(e);n6(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=d6(o[a],p6(i));return s}function pC(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(Ze(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Br([r,l.relativePath]),c=n.concat(l);o.children&&o.children.length>0&&(Ze(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),pC(o.children,t,c,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:u6(u,o.index),routesMeta:c})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of mC(o.path))i(o,s,l)}),t}function mC(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=mC(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function n6(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:c6(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const r6=/^:\w+$/,i6=3,o6=2,s6=1,a6=10,l6=-2,bw=e=>e==="*";function u6(e,t){let n=e.split("/"),r=n.length;return n.some(bw)&&(r+=l6),t&&(r+=o6),n.filter(i=>!bw(i)).reduce((i,o)=>i+(r6.test(o)?i6:o===""?s6:a6),r)}function c6(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function d6(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=h6({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;o.push({params:r,pathname:Br([i,c.pathname]),pathnameBase:y6(Br([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=Br([i,c.pathnameBase]))}return o}function h6(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=f6(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let h=a[d]||"";s=o.slice(0,o.length-h.length).replace(/(.)\/+$/,"$1")}return u[c]=m6(a[d]||"",c),u},{}),pathname:o,pathnameBase:s,pattern:e}}function f6(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Qv(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(s,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function p6(e){try{return decodeURI(e)}catch(t){return Qv(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function m6(e,t){try{return decodeURIComponent(e)}catch(n){return Qv(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function gC(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Qv(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function g6(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?qi(e):e;return{pathname:n?n.startsWith("/")?n:v6(n,t):t,search:w6(r),hash:E6(i)}}function v6(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function pf(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function vC(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function yC(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=qi(e):(i=Oc({},e),Ze(!i.pathname||!i.pathname.includes("?"),pf("?","pathname","search",i)),Ze(!i.pathname||!i.pathname.includes("#"),pf("#","pathname","hash",i)),Ze(!i.search||!i.search.includes("#"),pf("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(r||s==null)a=n;else{let d=t.length-1;if(s.startsWith("..")){let h=s.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}a=d>=0?t[d]:"/"}let l=g6(i,a),u=s&&s!=="/"&&s.endsWith("/"),c=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Br=e=>e.join("/").replace(/\/\/+/g,"/"),y6=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),w6=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,E6=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class S6{constructor(t,n,r,i){i===void 0&&(i=!1),this.status=t,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function b6(e){return e instanceof S6}const T6=["post","put","patch","delete"];[...T6];/**
 * React Router v6.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fm(){return fm=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fm.apply(this,arguments)}function x6(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const C6=typeof Object.is=="function"?Object.is:x6,{useState:_6,useEffect:k6,useLayoutEffect:I6,useDebugValue:$6}=Iu;function A6(e,t,n){const r=t(),[{inst:i},o]=_6({inst:{value:r,getSnapshot:t}});return I6(()=>{i.value=r,i.getSnapshot=t,mf(i)&&o({inst:i})},[e,r,t]),k6(()=>(mf(i)&&o({inst:i}),e(()=>{mf(i)&&o({inst:i})})),[e]),$6(r),r}function mf(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!C6(n,r)}catch{return!0}}function R6(e,t,n){return t()}const N6=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",O6=!N6,P6=O6?R6:A6;"useSyncExternalStore"in Iu&&(e=>e.useSyncExternalStore)(Iu);const wC=w.createContext(null),Yv=w.createContext(null),wl=w.createContext(null),ih=w.createContext(null),Gi=w.createContext({outlet:null,matches:[]}),EC=w.createContext(null);function D6(e,t){let{relative:n}=t===void 0?{}:t;El()||Ze(!1);let{basename:r,navigator:i}=w.useContext(wl),{hash:o,pathname:s,search:a}=Xv(e,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:Br([r,s])),i.createHref({pathname:l,search:a,hash:o})}function El(){return w.useContext(ih)!=null}function Sl(){return El()||Ze(!1),w.useContext(ih).location}function SC(){El()||Ze(!1);let{basename:e,navigator:t}=w.useContext(wl),{matches:n}=w.useContext(Gi),{pathname:r}=Sl(),i=JSON.stringify(vC(n).map(a=>a.pathnameBase)),o=w.useRef(!1);return w.useEffect(()=>{o.current=!0}),w.useCallback(function(a,l){if(l===void 0&&(l={}),!o.current)return;if(typeof a=="number"){t.go(a);return}let u=yC(a,JSON.parse(i),r,l.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:Br([e,u.pathname])),(l.replace?t.replace:t.push)(u,l.state,l)},[e,t,i,r])}const M6=w.createContext(null);function L6(e){let t=w.useContext(Gi).outlet;return t&&w.createElement(M6.Provider,{value:e},t)}function Xv(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=w.useContext(Gi),{pathname:i}=Sl(),o=JSON.stringify(vC(r).map(s=>s.pathnameBase));return w.useMemo(()=>yC(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function F6(e,t){El()||Ze(!1);let{navigator:n}=w.useContext(wl),r=w.useContext(Yv),{matches:i}=w.useContext(Gi),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let l=Sl(),u;if(t){var c;let p=typeof t=="string"?qi(t):t;a==="/"||(c=p.pathname)!=null&&c.startsWith(a)||Ze(!1),u=p}else u=l;let d=u.pathname||"/",h=a==="/"?d:d.slice(a.length)||"/",f=t6(e,{pathname:h}),v=V6(f&&f.map(p=>Object.assign({},p,{params:Object.assign({},s,p.params),pathname:Br([a,n.encodeLocation?n.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?a:Br([a,n.encodeLocation?n.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),i,r||void 0);return t&&v?w.createElement(ih.Provider,{value:{location:fm({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Cr.Pop}},v):v}function U6(){let e=q6(),t=b6(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},o={padding:"2px 4px",backgroundColor:r};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unhandled Thrown Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),n?w.createElement("pre",{style:i},n):null,w.createElement("p",null,"💿 Hey developer 👋"),w.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",w.createElement("code",{style:o},"errorElement")," props on ",w.createElement("code",{style:o},"<Route>")))}class j6 extends w.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?w.createElement(Gi.Provider,{value:this.props.routeContext},w.createElement(EC.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function z6(e){let{routeContext:t,match:n,children:r}=e,i=w.useContext(wC);return i&&i.static&&i.staticContext&&n.route.errorElement&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(Gi.Provider,{value:t},r)}function V6(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n==null?void 0:n.errors;if(i!=null){let o=r.findIndex(s=>s.route.id&&(i==null?void 0:i[s.route.id]));o>=0||Ze(!1),r=r.slice(0,Math.min(r.length,o+1))}return r.reduceRight((o,s,a)=>{let l=s.route.id?i==null?void 0:i[s.route.id]:null,u=n?s.route.errorElement||w.createElement(U6,null):null,c=t.concat(r.slice(0,a+1)),d=()=>w.createElement(z6,{match:s,routeContext:{outlet:o,matches:c}},l?u:s.route.element!==void 0?s.route.element:o);return n&&(s.route.errorElement||a===0)?w.createElement(j6,{location:n.location,component:u,error:l,children:d(),routeContext:{outlet:null,matches:c}}):d()},null)}var Tw;(function(e){e.UseRevalidator="useRevalidator"})(Tw||(Tw={}));var Pc;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(Pc||(Pc={}));function B6(e){let t=w.useContext(Yv);return t||Ze(!1),t}function H6(e){let t=w.useContext(Gi);return t||Ze(!1),t}function W6(e){let t=H6(),n=t.matches[t.matches.length-1];return n.route.id||Ze(!1),n.route.id}function q6(){var e;let t=w.useContext(EC),n=B6(Pc.UseRouteError),r=W6(Pc.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function G6(e){return L6(e.context)}function zn(e){Ze(!1)}function K6(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Cr.Pop,navigator:o,static:s=!1}=e;El()&&Ze(!1);let a=t.replace(/^\/*/,"/"),l=w.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof r=="string"&&(r=qi(r));let{pathname:u="/",search:c="",hash:d="",state:h=null,key:f="default"}=r,v=w.useMemo(()=>{let p=gC(u,a);return p==null?null:{pathname:p,search:c,hash:d,state:h,key:f}},[a,u,c,d,h,f]);return v==null?null:w.createElement(wl.Provider,{value:l},w.createElement(ih.Provider,{children:n,value:{location:v,navigationType:i}}))}function Q6(e){let{children:t,location:n}=e,r=w.useContext(wC),i=r&&!t?r.router.routes:pm(t);return F6(i,n)}var xw;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(xw||(xw={}));new Promise(()=>{});function pm(e,t){t===void 0&&(t=[]);let n=[];return w.Children.forEach(e,(r,i)=>{if(!w.isValidElement(r))return;if(r.type===w.Fragment){n.push.apply(n,pm(r.props.children,t));return}r.type!==zn&&Ze(!1),!r.props.index||!r.props.children||Ze(!1);let o=[...t,i],s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(s.children=pm(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Dc(){return Dc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Dc.apply(this,arguments)}function bC(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Y6(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function X6(e,t){return e.button===0&&(!t||t==="_self")&&!Y6(e)}const J6=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],Z6=["aria-current","caseSensitive","className","end","style","to","children"];function e8(e){let{basename:t,children:n,window:r}=e,i=w.useRef();i.current==null&&(i.current=Y5({window:r,v5Compat:!0}));let o=i.current,[s,a]=w.useState({action:o.action,location:o.location});return w.useLayoutEffect(()=>o.listen(a),[o]),w.createElement(K6,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o})}const Jv=w.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:c}=t,d=bC(t,J6),h=D6(u,{relative:i}),f=t8(u,{replace:s,state:a,target:l,preventScrollReset:c,relative:i});function v(p){r&&r(p),p.defaultPrevented||f(p)}return w.createElement("a",Dc({},d,{href:h,onClick:o?r:v,ref:n,target:l}))}),No=w.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:s=!1,style:a,to:l,children:u}=t,c=bC(t,Z6),d=Xv(l,{relative:c.relative}),h=Sl(),f=w.useContext(Yv),{navigator:v}=w.useContext(wl),p=v.encodeLocation?v.encodeLocation(d).pathname:d.pathname,S=h.pathname,y=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;i||(S=S.toLowerCase(),y=y?y.toLowerCase():null,p=p.toLowerCase());let g=S===p||!s&&S.startsWith(p)&&S.charAt(p.length)==="/",E=y!=null&&(y===p||!s&&y.startsWith(p)&&y.charAt(p.length)==="/"),b=g?r:void 0,T;typeof o=="function"?T=o({isActive:g,isPending:E}):T=[o,g?"active":null,E?"pending":null].filter(Boolean).join(" ");let A=typeof a=="function"?a({isActive:g,isPending:E}):a;return w.createElement(Jv,Dc({},c,{"aria-current":b,className:T,ref:n,style:A,to:l}),typeof u=="function"?u({isActive:g,isPending:E}):u)});var Cw;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Cw||(Cw={}));var _w;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(_w||(_w={}));function t8(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s}=t===void 0?{}:t,a=SC(),l=Sl(),u=Xv(e,{relative:s});return w.useCallback(c=>{if(X6(c,n)){c.preventDefault();let d=r!==void 0?r:Fa(l)===Fa(u);a(e,{replace:d,state:i,preventScrollReset:o,relative:s})}},[l,a,u,r,i,n,e,o,s])}var de={},n8={get exports(){return de},set exports(e){de=e}},r8="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",i8=r8,o8=i8;function TC(){}function xC(){}xC.resetWarningCache=TC;var s8=function(){function e(r,i,o,s,a,l){if(l!==o8){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:xC,resetWarningCache:TC};return n.PropTypes=n,n};n8.exports=s8();var a8=typeof Element<"u",l8=typeof Map=="function",u8=typeof Set=="function",c8=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function _u(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,r,i;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!_u(e[r],t[r]))return!1;return!0}var o;if(l8&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(o=e.entries();!(r=o.next()).done;)if(!t.has(r.value[0]))return!1;for(o=e.entries();!(r=o.next()).done;)if(!_u(r.value[1],t.get(r.value[0])))return!1;return!0}if(u8&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(o=e.entries();!(r=o.next()).done;)if(!t.has(r.value[0]))return!1;return!0}if(c8&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if(i=Object.keys(e),n=i.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,i[r]))return!1;if(a8&&e instanceof Element)return!1;for(r=n;r--!==0;)if(!((i[r]==="_owner"||i[r]==="__v"||i[r]==="__o")&&e.$$typeof)&&!_u(e[i[r]],t[i[r]]))return!1;return!0}return e!==e&&t!==t}var d8=function(t,n){try{return _u(t,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}},h8=function(e,t,n,r,i,o,s,a){if(!e){var l;if(t===void 0)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,i,o,s,a],c=0;l=new Error(t.replace(/%s/g,function(){return u[c++]})),l.name="Invariant Violation"}throw l.framesToPop=1,l}},kw=h8;function Be(){return Be=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Be.apply(this,arguments)}function Zv(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,mm(e,t)}function mm(e,t){return mm=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n},mm(e,t)}function Iw(e,t){if(e==null)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t.indexOf(n=o[r])>=0||(i[n]=e[n]);return i}var Z={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title",FRAGMENT:"Symbol(react.fragment)"},f8={rel:["amphtml","canonical","alternate"]},p8={type:["application/ld+json"]},m8={charset:"",name:["robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]},$w=Object.keys(Z).map(function(e){return Z[e]}),Mc={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},g8=Object.keys(Mc).reduce(function(e,t){return e[Mc[t]]=t,e},{}),Oo=function(e,t){for(var n=e.length-1;n>=0;n-=1){var r=e[n];if(Object.prototype.hasOwnProperty.call(r,t))return r[t]}return null},v8=function(e){var t=Oo(e,Z.TITLE),n=Oo(e,"titleTemplate");if(Array.isArray(t)&&(t=t.join("")),n&&t)return n.replace(/%s/g,function(){return t});var r=Oo(e,"defaultTitle");return t||r||void 0},y8=function(e){return Oo(e,"onChangeClientState")||function(){}},gf=function(e,t){return t.filter(function(n){return n[e]!==void 0}).map(function(n){return n[e]}).reduce(function(n,r){return Be({},n,r)},{})},w8=function(e,t){return t.filter(function(n){return n[Z.BASE]!==void 0}).map(function(n){return n[Z.BASE]}).reverse().reduce(function(n,r){if(!n.length)for(var i=Object.keys(r),o=0;o<i.length;o+=1){var s=i[o].toLowerCase();if(e.indexOf(s)!==-1&&r[s])return n.concat(r)}return n},[])},Cs=function(e,t,n){var r={};return n.filter(function(i){return!!Array.isArray(i[e])||(i[e]!==void 0&&console&&typeof console.warn=="function"&&console.warn("Helmet: "+e+' should be of type "Array". Instead found type "'+typeof i[e]+'"'),!1)}).map(function(i){return i[e]}).reverse().reduce(function(i,o){var s={};o.filter(function(d){for(var h,f=Object.keys(d),v=0;v<f.length;v+=1){var p=f[v],S=p.toLowerCase();t.indexOf(S)===-1||h==="rel"&&d[h].toLowerCase()==="canonical"||S==="rel"&&d[S].toLowerCase()==="stylesheet"||(h=S),t.indexOf(p)===-1||p!=="innerHTML"&&p!=="cssText"&&p!=="itemprop"||(h=p)}if(!h||!d[h])return!1;var y=d[h].toLowerCase();return r[h]||(r[h]={}),s[h]||(s[h]={}),!r[h][y]&&(s[h][y]=!0,!0)}).reverse().forEach(function(d){return i.push(d)});for(var a=Object.keys(s),l=0;l<a.length;l+=1){var u=a[l],c=Be({},r[u],s[u]);r[u]=c}return i},[]).reverse()},E8=function(e,t){if(Array.isArray(e)&&e.length){for(var n=0;n<e.length;n+=1)if(e[n][t])return!0}return!1},CC=function(e){return Array.isArray(e)?e.join(""):e},vf=function(e,t){return Array.isArray(e)?e.reduce(function(n,r){return function(i,o){for(var s=Object.keys(i),a=0;a<s.length;a+=1)if(o[s[a]]&&o[s[a]].includes(i[s[a]]))return!0;return!1}(r,t)?n.priority.push(r):n.default.push(r),n},{priority:[],default:[]}):{default:e}},Aw=function(e,t){var n;return Be({},e,((n={})[t]=void 0,n))},S8=[Z.NOSCRIPT,Z.SCRIPT,Z.STYLE],yf=function(e,t){return t===void 0&&(t=!0),t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Rw=function(e){return Object.keys(e).reduce(function(t,n){var r=e[n]!==void 0?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},Nw=function(e,t){return t===void 0&&(t={}),Object.keys(e).reduce(function(n,r){return n[Mc[r]||r]=e[r],n},t)},ku=function(e,t){return t.map(function(n,r){var i,o=((i={key:r})["data-rh"]=!0,i);return Object.keys(n).forEach(function(s){var a=Mc[s]||s;a==="innerHTML"||a==="cssText"?o.dangerouslySetInnerHTML={__html:n.innerHTML||n.cssText}:o[a]=n[s]}),ve.createElement(e,o)})},Zt=function(e,t,n){switch(e){case Z.TITLE:return{toComponent:function(){return i=t.titleAttributes,(o={key:r=t.title})["data-rh"]=!0,s=Nw(i,o),[ve.createElement(Z.TITLE,s,r)];var r,i,o,s},toString:function(){return function(r,i,o,s){var a=Rw(o),l=CC(i);return a?"<"+r+' data-rh="true" '+a+">"+yf(l,s)+"</"+r+">":"<"+r+' data-rh="true">'+yf(l,s)+"</"+r+">"}(e,t.title,t.titleAttributes,n)}};case"bodyAttributes":case"htmlAttributes":return{toComponent:function(){return Nw(t)},toString:function(){return Rw(t)}};default:return{toComponent:function(){return ku(e,t)},toString:function(){return function(r,i,o){return i.reduce(function(s,a){var l=Object.keys(a).filter(function(d){return!(d==="innerHTML"||d==="cssText")}).reduce(function(d,h){var f=a[h]===void 0?h:h+'="'+yf(a[h],o)+'"';return d?d+" "+f:f},""),u=a.innerHTML||a.cssText||"",c=S8.indexOf(r)===-1;return s+"<"+r+' data-rh="true" '+l+(c?"/>":">"+u+"</"+r+">")},"")}(e,t,n)}}}},gm=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,i=e.htmlAttributes,o=e.noscriptTags,s=e.styleTags,a=e.title,l=a===void 0?"":a,u=e.titleAttributes,c=e.linkTags,d=e.metaTags,h=e.scriptTags,f={toComponent:function(){},toString:function(){return""}};if(e.prioritizeSeoTags){var v=function(p){var S=p.linkTags,y=p.scriptTags,g=p.encode,E=vf(p.metaTags,m8),b=vf(S,f8),T=vf(y,p8);return{priorityMethods:{toComponent:function(){return[].concat(ku(Z.META,E.priority),ku(Z.LINK,b.priority),ku(Z.SCRIPT,T.priority))},toString:function(){return Zt(Z.META,E.priority,g)+" "+Zt(Z.LINK,b.priority,g)+" "+Zt(Z.SCRIPT,T.priority,g)}},metaTags:E.default,linkTags:b.default,scriptTags:T.default}}(e);f=v.priorityMethods,c=v.linkTags,d=v.metaTags,h=v.scriptTags}return{priority:f,base:Zt(Z.BASE,t,r),bodyAttributes:Zt("bodyAttributes",n,r),htmlAttributes:Zt("htmlAttributes",i,r),link:Zt(Z.LINK,c,r),meta:Zt(Z.META,d,r),noscript:Zt(Z.NOSCRIPT,o,r),script:Zt(Z.SCRIPT,h,r),style:Zt(Z.STYLE,s,r),title:Zt(Z.TITLE,{title:l,titleAttributes:u},r)}},tu=[],vm=function(e,t){var n=this;t===void 0&&(t=typeof document<"u"),this.instances=[],this.value={setHelmet:function(r){n.context.helmet=r},helmetInstances:{get:function(){return n.canUseDOM?tu:n.instances},add:function(r){(n.canUseDOM?tu:n.instances).push(r)},remove:function(r){var i=(n.canUseDOM?tu:n.instances).indexOf(r);(n.canUseDOM?tu:n.instances).splice(i,1)}}},this.context=e,this.canUseDOM=t,t||(e.helmet=gm({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))},_C=ve.createContext({}),b8=de.shape({setHelmet:de.func,helmetInstances:de.shape({get:de.func,add:de.func,remove:de.func})}),T8=typeof document<"u",yo=function(e){function t(n){var r;return(r=e.call(this,n)||this).helmetData=new vm(r.props.context,t.canUseDOM),r}return Zv(t,e),t.prototype.render=function(){return ve.createElement(_C.Provider,{value:this.helmetData.value},this.props.children)},t}(w.Component);yo.canUseDOM=T8,yo.propTypes={context:de.shape({helmet:de.shape()}),children:de.node.isRequired},yo.defaultProps={context:{}},yo.displayName="HelmetProvider";var Ji=function(e,t){var n,r=document.head||document.querySelector(Z.HEAD),i=r.querySelectorAll(e+"[data-rh]"),o=[].slice.call(i),s=[];return t&&t.length&&t.forEach(function(a){var l=document.createElement(e);for(var u in a)Object.prototype.hasOwnProperty.call(a,u)&&(u==="innerHTML"?l.innerHTML=a.innerHTML:u==="cssText"?l.styleSheet?l.styleSheet.cssText=a.cssText:l.appendChild(document.createTextNode(a.cssText)):l.setAttribute(u,a[u]===void 0?"":a[u]));l.setAttribute("data-rh","true"),o.some(function(c,d){return n=d,l.isEqualNode(c)})?o.splice(n,1):s.push(l)}),o.forEach(function(a){return a.parentNode.removeChild(a)}),s.forEach(function(a){return r.appendChild(a)}),{oldTags:o,newTags:s}},wf=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-rh"),i=r?r.split(","):[],o=[].concat(i),s=Object.keys(t),a=0;a<s.length;a+=1){var l=s[a],u=t[l]||"";n.getAttribute(l)!==u&&n.setAttribute(l,u),i.indexOf(l)===-1&&i.push(l);var c=o.indexOf(l);c!==-1&&o.splice(c,1)}for(var d=o.length-1;d>=0;d-=1)n.removeAttribute(o[d]);i.length===o.length?n.removeAttribute("data-rh"):n.getAttribute("data-rh")!==s.join(",")&&n.setAttribute("data-rh",s.join(","))}},Ow=function(e,t){var n=e.baseTag,r=e.htmlAttributes,i=e.linkTags,o=e.metaTags,s=e.noscriptTags,a=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,c=e.title,d=e.titleAttributes;wf(Z.BODY,e.bodyAttributes),wf(Z.HTML,r),function(p,S){p!==void 0&&document.title!==p&&(document.title=CC(p)),wf(Z.TITLE,S)}(c,d);var h={baseTag:Ji(Z.BASE,n),linkTags:Ji(Z.LINK,i),metaTags:Ji(Z.META,o),noscriptTags:Ji(Z.NOSCRIPT,s),scriptTags:Ji(Z.SCRIPT,l),styleTags:Ji(Z.STYLE,u)},f={},v={};Object.keys(h).forEach(function(p){var S=h[p],y=S.newTags,g=S.oldTags;y.length&&(f[p]=y),g.length&&(v[p]=h[p].oldTags)}),t&&t(),a(e,f,v)},_s=null,Lc=function(e){function t(){for(var r,i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return(r=e.call.apply(e,[this].concat(o))||this).rendered=!1,r}Zv(t,e);var n=t.prototype;return n.shouldComponentUpdate=function(r){return!x$(r,this.props)},n.componentDidUpdate=function(){this.emitChange()},n.componentWillUnmount=function(){this.props.context.helmetInstances.remove(this),this.emitChange()},n.emitChange=function(){var r,i,o=this.props.context,s=o.setHelmet,a=null,l=(r=o.helmetInstances.get().map(function(u){var c=Be({},u.props);return delete c.context,c}),{baseTag:w8(["href"],r),bodyAttributes:gf("bodyAttributes",r),defer:Oo(r,"defer"),encode:Oo(r,"encodeSpecialCharacters"),htmlAttributes:gf("htmlAttributes",r),linkTags:Cs(Z.LINK,["rel","href"],r),metaTags:Cs(Z.META,["name","charset","http-equiv","property","itemprop"],r),noscriptTags:Cs(Z.NOSCRIPT,["innerHTML"],r),onChangeClientState:y8(r),scriptTags:Cs(Z.SCRIPT,["src","innerHTML"],r),styleTags:Cs(Z.STYLE,["cssText"],r),title:v8(r),titleAttributes:gf("titleAttributes",r),prioritizeSeoTags:E8(r,"prioritizeSeoTags")});yo.canUseDOM?(i=l,_s&&cancelAnimationFrame(_s),i.defer?_s=requestAnimationFrame(function(){Ow(i,function(){_s=null})}):(Ow(i),_s=null)):gm&&(a=gm(l)),s(a)},n.init=function(){this.rendered||(this.rendered=!0,this.props.context.helmetInstances.add(this),this.emitChange())},n.render=function(){return this.init(),null},t}(w.Component);Lc.propTypes={context:b8.isRequired},Lc.displayName="HelmetDispatcher";var x8=["children"],C8=["children"],Hr=function(e){function t(){return e.apply(this,arguments)||this}Zv(t,e);var n=t.prototype;return n.shouldComponentUpdate=function(r){return!d8(Aw(this.props,"helmetData"),Aw(r,"helmetData"))},n.mapNestedChildrenToProps=function(r,i){if(!i)return null;switch(r.type){case Z.SCRIPT:case Z.NOSCRIPT:return{innerHTML:i};case Z.STYLE:return{cssText:i};default:throw new Error("<"+r.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")}},n.flattenArrayTypeChildren=function(r){var i,o=r.child,s=r.arrayTypeChildren;return Be({},s,((i={})[o.type]=[].concat(s[o.type]||[],[Be({},r.newChildProps,this.mapNestedChildrenToProps(o,r.nestedChildren))]),i))},n.mapObjectTypeChildren=function(r){var i,o,s=r.child,a=r.newProps,l=r.newChildProps,u=r.nestedChildren;switch(s.type){case Z.TITLE:return Be({},a,((i={})[s.type]=u,i.titleAttributes=Be({},l),i));case Z.BODY:return Be({},a,{bodyAttributes:Be({},l)});case Z.HTML:return Be({},a,{htmlAttributes:Be({},l)});default:return Be({},a,((o={})[s.type]=Be({},l),o))}},n.mapArrayTypeChildrenToProps=function(r,i){var o=Be({},i);return Object.keys(r).forEach(function(s){var a;o=Be({},o,((a={})[s]=r[s],a))}),o},n.warnOnInvalidChildren=function(r,i){return kw($w.some(function(o){return r.type===o}),typeof r.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":"Only elements types "+$w.join(", ")+" are allowed. Helmet does not support rendering <"+r.type+"> elements. Refer to our API for more information."),kw(!i||typeof i=="string"||Array.isArray(i)&&!i.some(function(o){return typeof o!="string"}),"Helmet expects a string as a child of <"+r.type+">. Did you forget to wrap your children in braces? ( <"+r.type+">{``}</"+r.type+"> ) Refer to our API for more information."),!0},n.mapChildrenToProps=function(r,i){var o=this,s={};return ve.Children.forEach(r,function(a){if(a&&a.props){var l=a.props,u=l.children,c=Iw(l,x8),d=Object.keys(c).reduce(function(f,v){return f[g8[v]||v]=c[v],f},{}),h=a.type;switch(typeof h=="symbol"?h=h.toString():o.warnOnInvalidChildren(a,u),h){case Z.FRAGMENT:i=o.mapChildrenToProps(u,i);break;case Z.LINK:case Z.META:case Z.NOSCRIPT:case Z.SCRIPT:case Z.STYLE:s=o.flattenArrayTypeChildren({child:a,arrayTypeChildren:s,newChildProps:d,nestedChildren:u});break;default:i=o.mapObjectTypeChildren({child:a,newProps:i,newChildProps:d,nestedChildren:u})}}}),this.mapArrayTypeChildrenToProps(s,i)},n.render=function(){var r=this.props,i=r.children,o=Iw(r,C8),s=Be({},o),a=o.helmetData;return i&&(s=this.mapChildrenToProps(i,s)),!a||a instanceof vm||(a=new vm(a.context,a.instances)),a?ve.createElement(Lc,Be({},s,{context:a.value,helmetData:void 0})):ve.createElement(_C.Consumer,null,function(l){return ve.createElement(Lc,Be({},s,{context:l}))})},t}(w.Component);Hr.propTypes={base:de.object,bodyAttributes:de.object,children:de.oneOfType([de.arrayOf(de.node),de.node]),defaultTitle:de.string,defer:de.bool,encodeSpecialCharacters:de.bool,htmlAttributes:de.object,link:de.arrayOf(de.object),meta:de.arrayOf(de.object),noscript:de.arrayOf(de.object),onChangeClientState:de.func,script:de.arrayOf(de.object),style:de.arrayOf(de.object),title:de.string,titleAttributes:de.object,titleTemplate:de.string,prioritizeSeoTags:de.bool,helmetData:de.object},Hr.defaultProps={defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1},Hr.displayName="Helmet";const kC=N.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  background: ${({theme:e})=>e.bg2};
  border-radius: 16px;
  width: 100%;

  h3 {
    padding: 16px;
    padding-bottom: 8px;
    border-radius: 16px 16px 0 0;
  }

  & > a {
    padding: 12px 16px;
    border-radius: 0 0 16px 16px;
    text-decoration: none;
    color: ${({theme:e})=>e.accent};
    font-size: 0.95rem;

    :hover {
      background: ${({theme:e})=>e.bg2Hover};
    }
  }
`,_8=N.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 4px 16px;
  padding-bottom: 12px;
  cursor: pointer;

  background: ${({isOnSidebar:e,theme:t})=>e?t.bg2:t.bg};

  h4 {
    font-size: 1rem;
    font-weight: 700;
    margin-top: -5px;
    margin-bottom: 3px;
  }

  :hover {
    background: ${({theme:e})=>e.bg2Hover};
  }
`,Pw=N.p`
  color: ${({theme:e})=>e.textAlt};
  font-size: 0.85rem;
`,k8=N.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    padding: 8px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s all ease;

    :hover {
      background: ${({theme:e})=>e.accentHover};

      svg {
        color: ${({theme:e})=>e.accent};
      }
    }
  }

  svg {
    width: 19px;
    height: 19px;
    color: ${({theme:e})=>e.textAlt};
  }
`,no=({sidebar:e=!0})=>C(_8,{isOnSidebar:e,children:[C(k8,{children:[m(Pw,{children:"Assuntos do momento"}),m("a",{href:"#",title:"Menu",children:m(fC,{})})]}),m("h4",{children:"Lorem ipsum"}),C(Pw,{children:[Math.floor(Math.random()*95)+5," mil tweets"]})]}),I8=()=>C(kC,{children:[m("h3",{children:"O que está acontecendo"}),m(no,{}),m(no,{}),m(no,{}),m(no,{}),m(no,{}),m("a",{href:"",children:"Mostrar mais"})]}),$8=N.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  cursor: pointer;

  :hover {
    background: ${({theme:e})=>e.bg2Hover};
  }

  button {
    background: ${({theme:e})=>e.text};
    color: ${({theme:e})=>e.bg};
    border-radius: 20px;
    padding: 6px 16px;

    :hover {
      opacity: 0.8;
      cursor: pointer;
    }
  }
`,A8=N.div`
  display: flex;
  gap: 8px;
  align-items: center;

  img {
    border-radius: 50%;
  }
`,R8=N.p`
  font-weight: 600;
  text-overflow: ellipsis;
`,N8=N.p`
  font-size: 0.85rem;
  color: ${({theme:e})=>e.textAlt};
  text-overflow: ellipsis;
`,Ef=()=>C($8,{children:[C(A8,{children:[m("img",{src:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",alt:"",width:"48px",height:"48px"}),C("div",{children:[m(R8,{children:"Dolor Sit"}),m(N8,{children:"email@example.com"})]})]}),m("button",{children:"Seguir"})]}),IC=()=>C(kC,{children:[m("h3",{children:"Quem seguir"}),m(Ef,{}),m(Ef,{}),m(Ef,{}),m("a",{href:"",children:"Mostrar mais"})]}),O8=N.footer`
  padding: 16px;
  font-size: 0.75rem;
  color: ${({theme:e})=>e.textAlt};
  display: flex;
  flex-direction: column;
  gap: 6px;

  div {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  a {
    text-decoration: none;
    color: inherit;

    :hover {
      text-decoration: underline;
    }
  }
`,$C=()=>C(O8,{children:[m("p",{children:"Essa página não tem qualquer relação com o twitter, e foi construída para parecer com o site oficial com a finalidade de praticar as habilidades de desenvolvimento frontend do desenvolvedor"}),C("div",{children:[m("a",{href:"https://github.com/br-adriel",target:"_blank",rel:"noopener noreferrer",children:"Github"}),m("a",{href:"https://www.linkedin.com/in/adriel-fsantos/",target:"_blank",rel:"noopener noreferrer",children:"Linkedin"}),m("a",{href:"https://br-adriel.github.io/site/",target:"_blank",rel:"noopener noreferrer",children:"Site"})]}),C("p",{children:[new Date().getFullYear()," Adriel Santos"]})]});function P8(e){return pe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"}}]})(e)}function D8(e){return pe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 48C140.559 48 48 140.559 48 256c0 115.436 92.559 208 208 208 115.435 0 208-92.564 208-208 0-115.441-92.564-208-208-208zm104.002 282.881l-29.12 29.117L256 285.117l-74.881 74.881-29.121-29.117L226.881 256l-74.883-74.881 29.121-29.116L256 226.881l74.881-74.878 29.12 29.116L285.119 256l74.883 74.881z"}}]})(e)}const M8=N.div`
  width: 100%;
  background: ${({theme:e})=>e.bg};
  position: relative;

  form {
    width: 100%;
  }
`,L8=N.div`
  margin: 4px 0;
  background: ${({theme:e})=>e.bg2Hover};
  display: flex;
  align-items: center;
  padding: 12px 20px;
  border-radius: 30px;
  color: ${({theme:e})=>e.textAlt};
  gap: 12px;
  border: 1px solid transparent;

  & > div {
    width: 100%;
    display: flex;
    align-items: center;
  }

  :focus-within {
    background: ${({theme:e})=>e.bg};
    border: 1px solid ${({theme:e})=>e.accent};

    svg {
      color: ${({theme:e})=>e.accent};
    }
  }

  input {
    outline: none;
    flex-grow: 1;
    font-size: 1rem;
    border: none;
    background: inherit;
  }

  input:placeholder-shown + div {
    button {
      display: none;
    }
  }

  svg {
    font-size: 20px;
  }
`,F8=N.div`
  position: absolute;
  top: 0;
  right: 12px;
  display: flex;
  align-items: center;
  height: 100%;

  button[type='reset'] {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: none;
    cursor: pointer;

    svg {
      width: 28px;
      height: 28px;
    }
  }
`,AC=()=>m(M8,{children:m("form",{children:C(L8,{children:[m(dm,{}),C("div",{children:[m("input",{type:"text",placeholder:"Buscar no Twitter"}),m(F8,{children:m("button",{type:"reset",title:"Limpar",children:m(D8,{})})})]})]})})}),RC=N.section`
  flex-direction: column;
  flex-grow: 1;
  max-width: 350px;
  display: none;
  margin-left: 30px;

  @media screen and (min-width: 1021px) {
    display: flex;
  }
`,Dw=N.div`
  width: 100%;
  display: flex;
  position: sticky;
  flex-direction: column;
  top: ${e=>e.top};
`,e0=()=>C(RC,{children:[m(Dw,{top:"0px",children:m(AC,{})}),m(I8,{}),C(Dw,{top:"54px",children:[m(IC,{}),m($C,{})]})]});function U8(e){return pe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"}},{tag:"line",attr:{x1:"16",y1:"8",x2:"2",y2:"22"}},{tag:"line",attr:{x1:"17.5",y1:"15",x2:"9",y2:"15"}}]})(e)}function t0(e){return pe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"3"}},{tag:"path",attr:{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"}}]})(e)}function j8(e){return pe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"}},{tag:"polyline",attr:{points:"16 6 12 2 8 6"}},{tag:"line",attr:{x1:"12",y1:"2",x2:"12",y2:"15"}}]})(e)}const z8=async e=>{const{auth:t}=fs.getState(),{user:n}=t;if(n){const r=xx(Fn,"users",n.uid,"posts");await MM(r,{content:e,timestamp:LM(),likes:[],retweetsCount:0,isRetweet:!1,author:n.uid})}},NC=async e=>{const t={...e.data(),id:e.id},n=Jr(Fn,"users",t.author),i=(await Ac(n)).data();let o=null;if(t.isRetweet&&t.retweeter){const s=Jr(Fn,"users",t.retweeter.uid);o=(await Ac(s)).data()}return{...t,author:{displayName:i.displayName,email:i.email,photoURL:i.photoURL,uid:i.uid},retweeter:o}},V8=N.div`
  display: flex;
  gap: 12px;
  padding: 8px 16px;
  border-bottom: 1px solid ${({theme:e})=>e.borderColor};
  border-top: none;
  width: 100%;

  & > img {
    border-radius: 50%;
  }
`;function B8(e){return pe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M19 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9H0l10.327-9.388a1 1 0 0 1 1.346 0L22 11h-3v9zm-8-5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"}}]}]})(e)}function H8(e){return pe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M19 21H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1zM6 19h12V9.157l-6-5.454-6 5.454V19zm6-4a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"}}]}]})(e)}function W8(e){return pe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm6.355-6.048v-.105c0-.922 0-1.343-.652-1.716a7.374 7.374 0 0 0-.645-.325c-.367-.167-.61-.276-.938-.756a12.014 12.014 0 0 1-.116-.172c-.345-.525-.594-.903-1.542-.753-1.865.296-2.003.624-2.085 1.178l-.013.091c-.121.81-.143 1.082.195 1.437 1.265 1.327 2.023 2.284 2.253 2.844.112.273.4 1.1.202 1.918a8.185 8.185 0 0 0 3.151-2.237c.11-.374.19-.84.19-1.404zM12 3.833c-2.317 0-4.41.966-5.896 2.516.177.123.331.296.437.534.204.457.204.928.204 1.345 0 .328 0 .64.105.865.144.308.766.44 1.315.554.197.042.399.084.583.135.506.14.898.595 1.211.96.13.151.323.374.42.43.05-.036.211-.211.29-.498.062-.22.044-.414-.045-.52-.56-.66-.529-1.93-.356-2.399.272-.739 1.122-.684 1.744-.644.232.015.45.03.614.009.622-.078.814-1.025.949-1.21.292-.4 1.186-1.003 1.74-1.375A8.138 8.138 0 0 0 12 3.833z"}}]}]})(e)}function OC(e){return pe({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M816 768h-24V428c0-141.1-104.3-257.8-240-277.2V112c0-22.1-17.9-40-40-40s-40 17.9-40 40v38.8C336.3 170.2 232 286.9 232 428v340h-24c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h216c0 61.8 50.2 112 112 112s112-50.2 112-112h216c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM512 888c-26.5 0-48-21.5-48-48h96c0 26.5-21.5 48-48 48z"}}]})(e)}function q8(e){return pe({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M816 768h-24V428c0-141.1-104.3-257.7-240-277.1V112c0-22.1-17.9-40-40-40s-40 17.9-40 40v38.9c-135.7 19.4-240 136-240 277.1v340h-24c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h216c0 61.8 50.2 112 112 112s112-50.2 112-112h216c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM512 888c-26.5 0-48-21.5-48-48h96c0 26.5-21.5 48-48 48zM304 768V428c0-55.6 21.6-107.8 60.9-147.1S456.4 220 512 220c55.6 0 107.8 21.6 147.1 60.9S720 372.4 720 428v340H304z"}}]})(e)}function G8(e){return pe({tag:"svg",attr:{t:"1569683725598",viewBox:"0 0 1024 1024",version:"1.1"},child:[{tag:"defs",attr:{},child:[]},{tag:"path",attr:{d:"M551.5 490.5H521c-4.6 0-8.4 3.7-8.4 8.4V720c0 4.6 3.7 8.4 8.4 8.4h30.5c4.6 0 8.4-3.7 8.4-8.4V498.9c-0.1-4.6-3.8-8.4-8.4-8.4zM477.3 600h-88.1c-4.6 0-8.4 3.7-8.4 8.4v23.8c0 4.6 3.7 8.4 8.4 8.4h47.6v0.7c-0.6 29.9-23 49.8-56.5 49.8-39.2 0-63.6-30.7-63.6-81.4 0-50.1 23.9-80.6 62.3-80.6 28.1 0 47.5 13.5 55.4 38.3l0.9 2.8h49.2l-0.7-4.6C475.9 515.9 434.7 484 379 484c-68.8 0-113 49.4-113 125.9 0 77.5 43.7 126.1 113.6 126.1 64.4 0 106-40.3 106-102.9v-24.8c0-4.6-3.7-8.3-8.3-8.3z"}},{tag:"path",attr:{d:"M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM602 137.8L790.2 326H602V137.8zM792 888H232V136h302v216c0 23.2 18.8 42 42 42h216v494z"}},{tag:"path",attr:{d:"M608.2 727.8h32.3c4.6 0 8.4-3.7 8.4-8.4v-84.8h87.8c4.6 0 8.4-3.7 8.4-8.4v-25.5c0-4.6-3.7-8.4-8.4-8.4h-87.8v-58.9h96.8c4.6 0 8.4-3.7 8.4-8.4v-26.8c0-4.6-3.7-8.4-8.4-8.4H608.2c-4.6 0-8.4 3.7-8.4 8.4v221.1c0 4.8 3.8 8.5 8.4 8.5z"}}]})(e)}function PC(e){return pe({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M136 552h63.6c4.4 0 8-3.6 8-8V288.7h528.6v72.6c0 1.9.6 3.7 1.8 5.2a8.3 8.3 0 0 0 11.7 1.4L893 255.4c4.3-5 3.6-10.3 0-13.2L749.7 129.8a8.22 8.22 0 0 0-5.2-1.8c-4.6 0-8.4 3.8-8.4 8.4V209H199.7c-39.5 0-71.7 32.2-71.7 71.8V544c0 4.4 3.6 8 8 8zm752-80h-63.6c-4.4 0-8 3.6-8 8v255.3H287.8v-72.6c0-1.9-.6-3.7-1.8-5.2a8.3 8.3 0 0 0-11.7-1.4L131 768.6c-4.3 5-3.6 10.3 0 13.2l143.3 112.4c1.5 1.2 3.3 1.8 5.2 1.8 4.6 0 8.4-3.8 8.4-8.4V815h536.6c39.5 0 71.7-32.2 71.7-71.8V480c-.2-4.4-3.8-8-8.2-8z"}}]})(e)}function K8(e){return pe({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"desc",attr:{},child:[]},{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4"}},{tag:"circle",attr:{cx:"18",cy:"18",r:"4"}},{tag:"path",attr:{d:"M15 3v4"}},{tag:"path",attr:{d:"M7 3v4"}},{tag:"path",attr:{d:"M3 11h16"}},{tag:"path",attr:{d:"M18 16.496v1.504l1 1"}}]})(e)}function Q8(e){return pe({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"desc",attr:{},child:[]},{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"line",attr:{x1:"15",y1:"8",x2:"15.01",y2:"8"}},{tag:"rect",attr:{x:"4",y:"4",width:"16",height:"16",rx:"3"}},{tag:"path",attr:{d:"M4 15l4 -4a3 5 0 0 1 3 0l5 5"}},{tag:"path",attr:{d:"M14 14l1 -1a3 5 0 0 1 3 0l2 2"}}]})(e)}function Y8(e){return pe({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M17 4v1h-12v-1h12zM3 4.5c0 0.827-0.673 1.5-1.5 1.5s-1.5-0.673-1.5-1.5 0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5zM2 4.5c0-0.275-0.224-0.5-0.5-0.5s-0.5 0.225-0.5 0.5 0.224 0.5 0.5 0.5 0.5-0.225 0.5-0.5zM5 9h12v-1h-12v1zM3 8.5c0 0.827-0.673 1.5-1.5 1.5s-1.5-0.673-1.5-1.5 0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5zM2 8.5c0-0.275-0.224-0.5-0.5-0.5s-0.5 0.225-0.5 0.5 0.224 0.5 0.5 0.5 0.5-0.225 0.5-0.5zM5 13h12v-1h-12v1zM3 12.5c0 0.827-0.673 1.5-1.5 1.5s-1.5-0.673-1.5-1.5 0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5zM2 12.5c0-0.275-0.224-0.5-0.5-0.5s-0.5 0.225-0.5 0.5 0.224 0.5 0.5 0.5 0.5-0.225 0.5-0.5z"}}]})(e)}const X8=N.div`
  display: flex;
  align-items: center;

  & > div {
    padding: 8px;
    border-radius: 50%;

    :hover {
      background: ${({theme:e})=>e.accentHover};
    }

    button {
      background: none;
      border: none;
      color: ${({theme:e})=>e.accent};
      cursor: pointer;
      padding: 0;
      font-size: 1.15rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`,J8=()=>C(X8,{children:[m("div",{children:m("button",{type:"button",title:"Adicionar imagem",children:m(Q8,{})})}),m("div",{children:m("button",{type:"button",title:"Adicionar GIF",children:m(G8,{})})}),m("div",{children:m("button",{type:"button",title:"Adicionar enquete",children:m(Y8,{})})}),m("div",{children:m("button",{type:"button",title:"Adicionar emoji",children:m(D5,{})})}),m("div",{children:m("button",{type:"button",title:"Programar envio",children:m(K8,{})})}),m("div",{children:m("button",{type:"button",title:"Adicionar localização",children:m(A5,{})})})]}),Z8=N.form`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  textarea {
    border: none;
    font-size: 1.2rem;
    width: 100%;
    resize: none;
    padding: 0;
    outline: none;
    border: 2px solid transparent;
    background: ${({theme:e})=>e.bg};
    color: ${({theme:e})=>e.text};

    &.invalid {
      border: 2px red solid;
      border-radius: 5px;
    }
  }
`,e7=N.button`
  border-radius: 20px;
  padding: 2px 12px;
  border: 1px solid ${({theme:e})=>e.borderColor};
  background: ${({theme:e})=>e.bg};
  color: ${({theme:e})=>e.accent};
  font-weight: 700;
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 4px;
  margin-bottom: 20px;

  :hover {
    background: ${({theme:e})=>`${e.accent}10`};
  }
`,t7=N.button`
  border: none;
  font-weight: 700;
  background: none;
  color: ${({theme:e})=>e.accent};
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  border-radius: 20px;
  cursor: pointer;

  :hover {
    background: ${({theme:e})=>`${e.accent}10`};
  }

  svg {
    font-size: 1.1rem;
  }
`,n7=N.div`
  width: 100%;
  border-top: 1px solid ${({theme:e})=>e.borderColor};
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
`,r7=N.button`
  padding: 10px 16px;
  font-weight: 600;
  border: none;
  border-radius: 20px;
  color: #fff;
  background: ${({theme:e})=>e.accent};
  cursor: pointer;
  transition: opacity 0.3s ease;

  :hover {
    opacity: 0.9;
  }
`,i7=N.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`,o7=N.p`
  font-size: 12px;
  font-weight: 600;
  color: ${({theme:e})=>e.accent};

  &.invalid {
    color: red;
  }
`,s7=({...e})=>{const[t,n]=w.useState(""),[r,i]=w.useState(!1);return C(Z8,{onSubmit:s=>{!r&&e.onSubmit&&e.onSubmit(s),i(!1),n("")},children:[C(e7,{type:"button",children:[m("p",{children:"Qualquer pessoa"}),m(P8,{})]}),m("textarea",{name:"tweet-content",id:"",placeholder:"O que está acontecendo?",rows:4,value:t,onChange:s=>{const a=s.target.value;i(a.length>140),n(s.target.value)},className:r?"invalid":""}),C(i7,{children:[C(t7,{type:"button",children:[m(W8,{}),"Qualquer pessoa pode responder"]}),m(o7,{className:r?"invalid":"",children:t&&t.length})]}),C(n7,{children:[m(J8,{}),m(r7,{type:"submit",children:"Tweetar"})]})]})},DC=()=>{const{user:e}=lr(ur),t=async n=>{n.preventDefault();const r=n.target["tweet-content"].value.trim();r.length&&await z8(r)};return e?C(V8,{children:[m("img",{src:e.photoURL??"#",alt:"",width:"48px",height:"48px"}),m(s7,{onSubmit:n=>t(n)})]}):null};function a7(e){return pe({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor"},child:[{tag:"path",attr:{d:"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"}},{tag:"path",attr:{d:"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"}}]})(e)}function l7(e){return pe({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"}}]})(e)}const u7=N.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.2s all ease;
  ${e=>e.hideSmall?`@media screen and (max-width: 1020px) {
    display: none;
  }
    `:null}
  ${e=>e.hideLarge?`@media screen and (min-width: 1021px) {
    display: none;
  }
    `:null}

  :hover {
    background: ${({theme:e})=>`${e.text}11`};
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: inherit;

    svg {
      width: 27px;
      height: 27px;
    }
  }
`,Zi=e=>{const{link:t,icon:n,iconActive:r,hideSmall:i=!1,hideLarge:o=!1,title:s}=e;return m(u7,{hideSmall:i,hideLarge:o,children:m(No,{to:t,title:s,children:({isActive:a})=>a?r:n})})},c7=N.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,d7=()=>{const{user:e}=lr(ur);return C(c7,{children:[e?m(Zi,{icon:m(H8,{}),iconActive:m(B8,{}),link:"/",title:"Página inicial"}):null,m(Zi,{icon:m(yw,{}),iconActive:m(yw,{style:{strokeWidth:"1px"}}),link:"/explore",hideSmall:!0,title:"Explorar"}),m(Zi,{icon:m(dm,{}),iconActive:m(dm,{style:{strokeWidth:"1px"}}),link:"/explore",hideLarge:!0,title:"Pesquisar"}),e?C(sr,{children:[m(Zi,{icon:m(q8,{}),iconActive:m(OC,{}),link:"/notifications",title:"Notificações"}),m(Zi,{icon:m(l7,{}),iconActive:m(a7,{}),link:"/messages",title:"Mensagens"}),m(Zi,{icon:m(F5,{}),iconActive:m(hC,{}),link:"/profile",title:"Perfil"})]}):null]})};function h7(e){const t=e+"CollectionProvider",[n,r]=gl(t),[i,o]=n(t,{collectionRef:{current:null},itemMap:new Map}),s=f=>{const{scope:v,children:p}=f,S=ve.useRef(null),y=ve.useRef(new Map).current;return ve.createElement(i,{scope:v,itemMap:y,collectionRef:S},p)},a=e+"CollectionSlot",l=ve.forwardRef((f,v)=>{const{scope:p,children:S}=f,y=o(a,p),g=xn(v,y.collectionRef);return ve.createElement(Ma,{ref:g},S)}),u=e+"CollectionItemSlot",c="data-radix-collection-item",d=ve.forwardRef((f,v)=>{const{scope:p,children:S,...y}=f,g=ve.useRef(null),E=xn(v,g),b=o(u,p);return ve.useEffect(()=>(b.itemMap.set(g,{ref:g,...y}),()=>void b.itemMap.delete(g))),ve.createElement(Ma,{[c]:"",ref:E},S)});function h(f){const v=o(e+"CollectionConsumer",f);return ve.useCallback(()=>{const S=v.collectionRef.current;if(!S)return[];const y=Array.from(S.querySelectorAll(`[${c}]`));return Array.from(v.itemMap.values()).sort((b,T)=>y.indexOf(b.ref.current)-y.indexOf(T.ref.current))},[v.collectionRef,v.itemMap])}return[{Provider:s,Slot:l,ItemSlot:d},h,r]}const f7=w.createContext(void 0);function MC(e){const t=w.useContext(f7);return e||t||"ltr"}const Sf="rovingFocusGroup.onEntryFocus",p7={bubbles:!1,cancelable:!0},n0="RovingFocusGroup",[ym,LC,m7]=h7(n0),[g7,FC]=gl(n0,[m7]),[v7,y7]=g7(n0),w7=w.forwardRef((e,t)=>w.createElement(ym.Provider,{scope:e.__scopeRovingFocusGroup},w.createElement(ym.Slot,{scope:e.__scopeRovingFocusGroup},w.createElement(E7,Ce({},e,{ref:t}))))),E7=w.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,orientation:r,loop:i=!1,dir:o,currentTabStopId:s,defaultCurrentTabStopId:a,onCurrentTabStopIdChange:l,onEntryFocus:u,...c}=e,d=w.useRef(null),h=xn(t,d),f=MC(o),[v=null,p]=qv({prop:s,defaultProp:a,onChange:l}),[S,y]=w.useState(!1),g=Zr(u),E=LC(n),b=w.useRef(!1),[T,A]=w.useState(0);return w.useEffect(()=>{const I=d.current;if(I)return I.addEventListener(Sf,g),()=>I.removeEventListener(Sf,g)},[g]),w.createElement(v7,{scope:n,orientation:r,dir:f,loop:i,currentTabStopId:v,onItemFocus:w.useCallback(I=>p(I),[p]),onItemShiftTab:w.useCallback(()=>y(!0),[]),onFocusableItemAdd:w.useCallback(()=>A(I=>I+1),[]),onFocusableItemRemove:w.useCallback(()=>A(I=>I-1),[])},w.createElement(dn.div,Ce({tabIndex:S||T===0?-1:0,"data-orientation":r},c,{ref:h,style:{outline:"none",...e.style},onMouseDown:pt(e.onMouseDown,()=>{b.current=!0}),onFocus:pt(e.onFocus,I=>{const $=!b.current;if(I.target===I.currentTarget&&$&&!S){const H=new CustomEvent(Sf,p7);if(I.currentTarget.dispatchEvent(H),!H.defaultPrevented){const P=E().filter(O=>O.focusable),me=P.find(O=>O.active),Oe=P.find(O=>O.id===v),z=[me,Oe,...P].filter(Boolean).map(O=>O.ref.current);UC(z)}}b.current=!1}),onBlur:pt(e.onBlur,()=>y(!1))})))}),S7="RovingFocusGroupItem",b7=w.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,focusable:r=!0,active:i=!1,tabStopId:o,...s}=e,a=Tu(),l=o||a,u=y7(S7,n),c=u.currentTabStopId===l,d=LC(n),{onFocusableItemAdd:h,onFocusableItemRemove:f}=u;return w.useEffect(()=>{if(r)return h(),()=>f()},[r,h,f]),w.createElement(ym.ItemSlot,{scope:n,id:l,focusable:r,active:i},w.createElement(dn.span,Ce({tabIndex:c?0:-1,"data-orientation":u.orientation},s,{ref:t,onMouseDown:pt(e.onMouseDown,v=>{r?u.onItemFocus(l):v.preventDefault()}),onFocus:pt(e.onFocus,()=>u.onItemFocus(l)),onKeyDown:pt(e.onKeyDown,v=>{if(v.key==="Tab"&&v.shiftKey){u.onItemShiftTab();return}if(v.target!==v.currentTarget)return;const p=C7(v,u.orientation,u.dir);if(p!==void 0){v.preventDefault();let y=d().filter(g=>g.focusable).map(g=>g.ref.current);if(p==="last")y.reverse();else if(p==="prev"||p==="next"){p==="prev"&&y.reverse();const g=y.indexOf(v.currentTarget);y=u.loop?_7(y,g+1):y.slice(g+1)}setTimeout(()=>UC(y))}})})))}),T7={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function x7(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function C7(e,t,n){const r=x7(e.key,n);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(r))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(r)))return T7[r]}function UC(e){const t=document.activeElement;for(const n of e)if(n===t||(n.focus(),document.activeElement!==t))return}function _7(e,t){return e.map((n,r)=>e[(t+r)%e.length])}const k7=w7,I7=b7;function $7(e){const[t,n]=w.useState(void 0);return Rc(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(i=>{if(!Array.isArray(i)||!i.length)return;const o=i[0];let s,a;if("borderBoxSize"in o){const l=o.borderBoxSize,u=Array.isArray(l)?l[0]:l;s=u.inlineSize,a=u.blockSize}else s=e.offsetWidth,a=e.offsetHeight;n({width:s,height:a})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}function A7(e){const t=w.useRef({value:e,previous:e});return w.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}const jC="Radio",[R7,zC]=gl(jC),[N7,O7]=R7(jC),P7=w.forwardRef((e,t)=>{const{__scopeRadio:n,name:r,checked:i=!1,required:o,disabled:s,value:a="on",onCheck:l,...u}=e,[c,d]=w.useState(null),h=xn(t,p=>d(p)),f=w.useRef(!1),v=c?Boolean(c.closest("form")):!0;return w.createElement(N7,{scope:n,checked:i,disabled:s},w.createElement(dn.button,Ce({type:"button",role:"radio","aria-checked":i,"data-state":VC(i),"data-disabled":s?"":void 0,disabled:s,value:a},u,{ref:h,onClick:pt(e.onClick,p=>{i||l==null||l(),v&&(f.current=p.isPropagationStopped(),f.current||p.stopPropagation())})})),v&&w.createElement(L7,{control:c,bubbles:!f.current,name:r,value:a,checked:i,required:o,disabled:s,style:{transform:"translateX(-100%)"}}))}),D7="RadioIndicator",M7=w.forwardRef((e,t)=>{const{__scopeRadio:n,forceMount:r,...i}=e,o=O7(D7,n);return w.createElement(vl,{present:r||o.checked},w.createElement(dn.span,Ce({"data-state":VC(o.checked),"data-disabled":o.disabled?"":void 0},i,{ref:t})))}),L7=e=>{const{control:t,checked:n,bubbles:r=!0,...i}=e,o=w.useRef(null),s=A7(n),a=$7(t);return w.useEffect(()=>{const l=o.current,u=window.HTMLInputElement.prototype,d=Object.getOwnPropertyDescriptor(u,"checked").set;if(s!==n&&d){const h=new Event("click",{bubbles:r});d.call(l,n),l.dispatchEvent(h)}},[s,n,r]),w.createElement("input",Ce({type:"radio","aria-hidden":!0,defaultChecked:n},i,{tabIndex:-1,ref:o,style:{...e.style,...a,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function VC(e){return e?"checked":"unchecked"}const F7=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],BC="RadioGroup",[U7,kU]=gl(BC,[FC,zC]),HC=FC(),WC=zC(),[j7,z7]=U7(BC),V7=w.forwardRef((e,t)=>{const{__scopeRadioGroup:n,name:r,defaultValue:i,value:o,required:s=!1,disabled:a=!1,orientation:l,dir:u,loop:c=!0,onValueChange:d,...h}=e,f=HC(n),v=MC(u),[p,S]=qv({prop:o,defaultProp:i,onChange:d});return w.createElement(j7,{scope:n,name:r,required:s,disabled:a,value:p,onValueChange:S},w.createElement(k7,Ce({asChild:!0},f,{orientation:l,dir:v,loop:c}),w.createElement(dn.div,Ce({role:"radiogroup","aria-required":s,"aria-orientation":l,"data-disabled":a?"":void 0,dir:v},h,{ref:t}))))}),B7="RadioGroupItem",H7=w.forwardRef((e,t)=>{const{__scopeRadioGroup:n,disabled:r,...i}=e,o=z7(B7,n),s=o.disabled||r,a=HC(n),l=WC(n),u=w.useRef(null),c=xn(t,u),d=o.value===i.value,h=w.useRef(!1);return w.useEffect(()=>{const f=p=>{F7.includes(p.key)&&(h.current=!0)},v=()=>h.current=!1;return document.addEventListener("keydown",f),document.addEventListener("keyup",v),()=>{document.removeEventListener("keydown",f),document.removeEventListener("keyup",v)}},[]),w.createElement(I7,Ce({asChild:!0},a,{focusable:!s,active:d}),w.createElement(P7,Ce({disabled:s,required:o.required,checked:d},l,i,{name:o.name,ref:c,onCheck:()=>o.onValueChange(i.value),onKeyDown:pt(f=>{f.key==="Enter"&&f.preventDefault()}),onFocus:pt(i.onFocus,()=>{var f;h.current&&((f=u.current)===null||f===void 0||f.click())})})))}),W7=w.forwardRef((e,t)=>{const{__scopeRadioGroup:n,...r}=e,i=WC(n);return w.createElement(M7,Ce({},i,r,{ref:t}))}),q7=V7,qC=H7,GC=W7,G7=N.div`
  padding: 10px;

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  fieldset {
    all: unset;
    width: 100%;
  }

  legend {
    margin: 10px 0;
  }

  form > button {
    padding: 8px;
    border-radius: 5px;
    border: none;
    background: ${({theme:e})=>e.accent};
    color: #fff;

    :hover {
      opacity: 0.8;
    }
  }
`,Mw=N(q7)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`,K7=N(qC)`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
`,Q7=N(qC)`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  height: 50px;
  border-radius: 10px;
  border: 1px solid ${({theme:e})=>e.borderColor};
  box-sizing: border-box;
`,Y7=N(GC)`
  width: 85%;
  height: 85%;
  border: 2px solid #fff;
  border-radius: 50%;
`,X7=N(GC)`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border: 2px solid ${({theme:e})=>e.accent};
  border-radius: 10px;
`,Lw=[{title:"Azul",color:"#1D9BF0"},{title:"Amarelo",color:"#FFD400"},{title:"Rosa",color:"#F91880"},{title:"Roxo",color:"#7856FF"},{title:"Laranja",color:"#FF7A00"},{title:"Verde",color:"#00BA7C"}],J7=[Ho,lA,w2],Z7=["#ffffff","#15202B","#000000"],eF=()=>{const{user:e}=lr(ur),t=s2();return m(G7,{children:C("form",{onSubmit:async r=>{r.preventDefault();let i=r.target.fundo.value,o=J7.filter(u=>u.bg===i)[0];o=o||Ho;let s=r.target.cor.value||Lw[0].color;o={...o,accent:s};const a=Jr(Fn,"users",e.uid);await DM(a,{theme:{...o}}),t(t4({theme:o})),sessionStorage.setItem("@AuthFirebase:user",JSON.stringify({...e,theme:o}));const l=document.querySelector("meta[name=theme-color]");l==null||l.setAttribute("content",o.bg)},children:[C("fieldset",{children:[m("legend",{children:"Cor"}),m(Mw,{name:"cor",defaultValue:e==null?void 0:e.theme.accent,children:Lw.map(r=>m(K7,{value:r.color,style:{background:r.color},children:m(Y7,{})},r.title))})]}),C("fieldset",{children:[m("legend",{children:"Plano de fundo"}),m(Mw,{name:"fundo",defaultValue:e==null?void 0:e.theme.bg,children:Z7.map(r=>m(Q7,{value:r,style:{background:r},children:m(X7,{})},r))})]}),m("button",{type:"submit",children:"Aplicar alterações"})]})})},tF=N.header`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: sticky;
  top: 0;
  padding: 4px 2px;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  button {
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    outline: none;
    border: none;
    background: none;
    cursor: pointer;

    svg {
      color: ${({theme:e})=>e.text};
    }

    :hover {
      background: ${({theme:e})=>`${e.text}11`};
    }

    svg {
      box-sizing: content-box;
      width: 24px;
      height: 24px;
      padding: 2px;
    }

    :first-of-type svg {
      border-radius: 50%;
      padding: 0;
      border: 2px solid ${({theme:e})=>e.text};
    }

    :last-of-type {
      background: ${({theme:e})=>e.accent};
      margin-top: 10px;

      :hover {
        opacity: 0.8;
      }

      svg {
        color: #fff;
      }
    }
  }
`,nF=N.div`
  padding: 12px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.2s all ease;

  :hover {
    background: ${({theme:e})=>`${e.text}11`};
  }

  img {
    border-radius: 50%;
  }
`,rF=N.div`
  padding: 12px;
  color: ${({theme:e})=>e.brandColor};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background: ${({theme:e})=>e.accentHover};
  }

  a,
  svg {
    color: inherit;
  }

  a {
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  svg {
    width: 28px;
    height: 28px;
  }
`,bl=()=>{const{user:e}=lr(ur);return C(tF,{children:[C("div",{children:[m(rF,{children:m(Jv,{to:"/",title:"Página inicial",children:m(Kv,{})})}),m(d7,{}),e?C(sr,{children:[m(Nc,{title:"Menu",triggerContent:m($5,{}),children:m(eF,{})}),m(Nc,{title:"Novo tweet",triggerContent:m(U8,{}),children:m(DC,{})})]}):null]}),e?m(nF,{onClick:HM,title:"Sair",children:m("img",{src:e.photoURL??"#",alt:"",width:"40px",height:"40px"})}):null]})},iF=N.div`
  margin-top: 12px;
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid ${({theme:e})=>e.borderColor};
  padding: 16px;
  border-radius: 16px;
  gap: 8px;

  h2 {
    font-size: 1.25rem;
  }

  p {
    font-size: 0.75rem;
    color: ${({theme:e})=>e.textAlt};
  }

  button {
    border-radius: 25px;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    border: none;
    outline: none;
    cursor: pointer;
    font-weight: 600;
    background: #fff;
    color: #000;
    border: 1px solid ${({theme:e})=>e.borderColor};
    word-spacing: 1px;

    svg {
      width: 19px;
      height: 19px;
    }

    :hover {
      opacity: 0.85;
    }
  }
`,oF=()=>C(iF,{children:[m("h2",{children:"Novo no Twitter?"}),m("p",{children:"Inscreva-se para ter sua própria timeline personalizada!"}),C("button",{type:"button",onClick:Wv,children:[m(Ng,{}),m("span",{children:"Inscrever-se no Google"})]})]}),r0=N.nav`
  display: flex;
  justify-content: space-evenly;

  .active {
    font-weight: 700;
    opacity: 1;

    & > div > div {
      display: block;
    }
  }

  a {
    text-align: center;
    text-decoration: none;
    color: inherit;
    opacity: 0.75;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;

    & > div {
      display: flex;
      flex-direction: column;
      justify-content: stretch;
      position: relative;
      padding: 16px 0;

      & > div {
        background: ${({theme:e})=>`${e.accent}`};
        height: 4px;
        border-radius: 4px;
        width: 100%;
        position: absolute;
        bottom: 0px;
        left: 0px;
        display: none;
      }
    }

    :hover {
      background: ${({theme:e})=>`${e.bgHover}`};
    }
  }
`,jn=N(no)`
  background: ${({theme:e})=>e.bg};
`,sF=N(r0)`
  justify-content: flex-start;

  > a {
    flex-grow: 0;
    padding: 0 16px;
  }
`,aF=N.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`,lF=N.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 16px;
  gap: 16px;

  input {
    color: ${({theme:e})=>e.text};
  }

  svg {
    color: ${({theme:e})=>e.text};
  }
`,uF=N.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${({theme:e})=>e.borderColor};
`,cF=N.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 50%;
  cursor: pointer;

  :hover {
    background: ${({theme:e})=>e.bgHover};
  }

  button {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: none;
    outline: none;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`,dF=N(yl)`
  min-height: 100vh;
  flex-direction: column;
  border-right: 1px solid ${({theme:e})=>e.borderColor};
  border-left: 1px solid ${({theme:e})=>e.borderColor};
  padding-bottom: 100px;
`,KC=()=>{const{user:e}=lr(ur);return C(aF,{children:[m(Hr,{children:m("title",{children:"Explorar / Not twitter"})}),m(bl,{}),C(dF,{children:[C(uF,{children:[C(lF,{children:[m(AC,{}),m(cF,{children:m("button",{children:m(t0,{})})})]}),m(sF,{children:m(No,{to:"",children:C("div",{children:[m("span",{children:"Assuntos do momento"}),m("div",{})]})})})]}),m(jn,{sidebar:!1}),m(jn,{sidebar:!1}),m(jn,{sidebar:!1}),m(jn,{sidebar:!1}),m(jn,{sidebar:!1}),m(jn,{sidebar:!1}),m(jn,{sidebar:!1}),m(jn,{sidebar:!1}),m(jn,{sidebar:!1})]}),C(RC,{children:[e?m(IC,{}):m(oF,{}),m($C,{})]})]})},hF=N.div`
  display: flex;
  border-bottom: 1px solid ${({theme:e})=>e.borderColor};
  width: 100%;
  flex-direction: column;
  padding: 6px;
`,fF=N.div`
  display: grid;
  grid-template-columns: 48px 1fr;
  gap: 12px;
  padding: 4px;
  margin-bottom: 4px;
  align-items: center;
  color: ${({theme:e})=>e.textAlt};
  font-weight: 600;
  font-size: 0.9rem;

  svg {
    justify-self: end;
  }
`,pF=N.img`
  border-radius: 50%;
`,mF=N.div`
  padding: 0 4px;
  display: flex;
  gap: 12px;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 4px;
    flex-grow: 1;
  }
`,gF=N.div`
  display: flex;
  justify-content: space-between;
  color: ${({theme:e})=>e.textAlt};

  & > div {
    cursor: pointer;
    display: flex;
    gap: 5px;
    align-items: center;
    font-size: 0.9rem;

    :hover {
      color: ${({theme:e})=>e.accent};

      div {
        background: ${({theme:e})=>e.accentHover};
      }
    }

    :nth-of-type(3):hover {
      color: ${({theme:e})=>e.retweet};

      div {
        background: ${({theme:e})=>e.retweetHover};
      }
    }

    :nth-of-type(4):hover {
      color: ${({theme:e})=>e.like};

      div {
        background: ${({theme:e})=>e.likeHover};
      }
    }

    div {
      padding: 8px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
    }

    p {
      margin-left: -4px;
    }
  }

  svg {
    width: 19px;
    height: 19px;
  }
`,QC=({likes:e,retweets:t})=>C(gF,{children:[m("div",{children:m("div",{children:m(k5,{})})}),m("div",{children:m("div",{children:m(I5,{})})}),C("div",{children:[m("div",{children:m(PC,{})}),m("p",{children:t>0&&t})]}),C("div",{children:[m("div",{children:m(L5,{})}),m("p",{children:e>0&&e})]}),m("div",{children:m("div",{children:m(j8,{})})})]});var Fc={},vF={get exports(){return Fc},set exports(e){Fc=e}};(function(e,t){(function(n,r){e.exports=r()})(Sm,function(){var n=1e3,r=6e4,i=36e5,o="millisecond",s="second",a="minute",l="hour",u="day",c="week",d="month",h="quarter",f="year",v="date",p="Invalid Date",S=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(G){var z=["th","st","nd","rd"],O=G%100;return"["+G+(z[(O-20)%10]||z[O]||z[0])+"]"}},E=function(G,z,O){var J=String(G);return!J||J.length>=z?G:""+Array(z+1-J.length).join(O)+G},b={s:E,z:function(G){var z=-G.utcOffset(),O=Math.abs(z),J=Math.floor(O/60),j=O%60;return(z<=0?"+":"-")+E(J,2,"0")+":"+E(j,2,"0")},m:function G(z,O){if(z.date()<O.date())return-G(O,z);var J=12*(O.year()-z.year())+(O.month()-z.month()),j=z.clone().add(J,d),_=O-j<0,L=z.clone().add(J+(_?-1:1),d);return+(-(J+(O-j)/(_?j-L:L-j))||0)},a:function(G){return G<0?Math.ceil(G)||0:Math.floor(G)},p:function(G){return{M:d,y:f,w:c,d:u,D:v,h:l,m:a,s,ms:o,Q:h}[G]||String(G||"").toLowerCase().replace(/s$/,"")},u:function(G){return G===void 0}},T="en",A={};A[T]=g;var I=function(G){return G instanceof me},$=function G(z,O,J){var j;if(!z)return T;if(typeof z=="string"){var _=z.toLowerCase();A[_]&&(j=_),O&&(A[_]=O,j=_);var L=z.split("-");if(!j&&L.length>1)return G(L[0])}else{var B=z.name;A[B]=z,j=B}return!J&&j&&(T=j),j||!J&&T},H=function(G,z){if(I(G))return G.clone();var O=typeof z=="object"?z:{};return O.date=G,O.args=arguments,new me(O)},P=b;P.l=$,P.i=I,P.w=function(G,z){return H(G,{locale:z.$L,utc:z.$u,x:z.$x,$offset:z.$offset})};var me=function(){function G(O){this.$L=$(O.locale,null,!0),this.parse(O)}var z=G.prototype;return z.parse=function(O){this.$d=function(J){var j=J.date,_=J.utc;if(j===null)return new Date(NaN);if(P.u(j))return new Date;if(j instanceof Date)return new Date(j);if(typeof j=="string"&&!/Z$/i.test(j)){var L=j.match(S);if(L){var B=L[2]-1||0,ee=(L[7]||"0").substring(0,3);return _?new Date(Date.UTC(L[1],B,L[3]||1,L[4]||0,L[5]||0,L[6]||0,ee)):new Date(L[1],B,L[3]||1,L[4]||0,L[5]||0,L[6]||0,ee)}}return new Date(j)}(O),this.$x=O.x||{},this.init()},z.init=function(){var O=this.$d;this.$y=O.getFullYear(),this.$M=O.getMonth(),this.$D=O.getDate(),this.$W=O.getDay(),this.$H=O.getHours(),this.$m=O.getMinutes(),this.$s=O.getSeconds(),this.$ms=O.getMilliseconds()},z.$utils=function(){return P},z.isValid=function(){return this.$d.toString()!==p},z.isSame=function(O,J){var j=H(O);return this.startOf(J)<=j&&j<=this.endOf(J)},z.isAfter=function(O,J){return H(O)<this.startOf(J)},z.isBefore=function(O,J){return this.endOf(J)<H(O)},z.$g=function(O,J,j){return P.u(O)?this[J]:this.set(j,O)},z.unix=function(){return Math.floor(this.valueOf()/1e3)},z.valueOf=function(){return this.$d.getTime()},z.startOf=function(O,J){var j=this,_=!!P.u(J)||J,L=P.p(O),B=function(U,ce){var ue=P.w(j.$u?Date.UTC(j.$y,ce,U):new Date(j.$y,ce,U),j);return _?ue:ue.endOf(u)},ee=function(U,ce){return P.w(j.toDate()[U].apply(j.toDate("s"),(_?[0,0,0,0]:[23,59,59,999]).slice(ce)),j)},R=this.$W,F=this.$M,V=this.$D,Y="set"+(this.$u?"UTC":"");switch(L){case f:return _?B(1,0):B(31,11);case d:return _?B(1,F):B(0,F+1);case c:var x=this.$locale().weekStart||0,le=(R<x?R+7:R)-x;return B(_?V-le:V+(6-le),F);case u:case v:return ee(Y+"Hours",0);case l:return ee(Y+"Minutes",1);case a:return ee(Y+"Seconds",2);case s:return ee(Y+"Milliseconds",3);default:return this.clone()}},z.endOf=function(O){return this.startOf(O,!1)},z.$set=function(O,J){var j,_=P.p(O),L="set"+(this.$u?"UTC":""),B=(j={},j[u]=L+"Date",j[v]=L+"Date",j[d]=L+"Month",j[f]=L+"FullYear",j[l]=L+"Hours",j[a]=L+"Minutes",j[s]=L+"Seconds",j[o]=L+"Milliseconds",j)[_],ee=_===u?this.$D+(J-this.$W):J;if(_===d||_===f){var R=this.clone().set(v,1);R.$d[B](ee),R.init(),this.$d=R.set(v,Math.min(this.$D,R.daysInMonth())).$d}else B&&this.$d[B](ee);return this.init(),this},z.set=function(O,J){return this.clone().$set(O,J)},z.get=function(O){return this[P.p(O)]()},z.add=function(O,J){var j,_=this;O=Number(O);var L=P.p(J),B=function(F){var V=H(_);return P.w(V.date(V.date()+Math.round(F*O)),_)};if(L===d)return this.set(d,this.$M+O);if(L===f)return this.set(f,this.$y+O);if(L===u)return B(1);if(L===c)return B(7);var ee=(j={},j[a]=r,j[l]=i,j[s]=n,j)[L]||1,R=this.$d.getTime()+O*ee;return P.w(R,this)},z.subtract=function(O,J){return this.add(-1*O,J)},z.format=function(O){var J=this,j=this.$locale();if(!this.isValid())return j.invalidDate||p;var _=O||"YYYY-MM-DDTHH:mm:ssZ",L=P.z(this),B=this.$H,ee=this.$m,R=this.$M,F=j.weekdays,V=j.months,Y=function(ce,ue,ye,ne){return ce&&(ce[ue]||ce(J,_))||ye[ue].slice(0,ne)},x=function(ce){return P.s(B%12||12,ce,"0")},le=j.meridiem||function(ce,ue,ye){var ne=ce<12?"AM":"PM";return ye?ne.toLowerCase():ne},U={YY:String(this.$y).slice(-2),YYYY:this.$y,M:R+1,MM:P.s(R+1,2,"0"),MMM:Y(j.monthsShort,R,V,3),MMMM:Y(V,R),D:this.$D,DD:P.s(this.$D,2,"0"),d:String(this.$W),dd:Y(j.weekdaysMin,this.$W,F,2),ddd:Y(j.weekdaysShort,this.$W,F,3),dddd:F[this.$W],H:String(B),HH:P.s(B,2,"0"),h:x(1),hh:x(2),a:le(B,ee,!0),A:le(B,ee,!1),m:String(ee),mm:P.s(ee,2,"0"),s:String(this.$s),ss:P.s(this.$s,2,"0"),SSS:P.s(this.$ms,3,"0"),Z:L};return _.replace(y,function(ce,ue){return ue||U[ce]||L.replace(":","")})},z.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},z.diff=function(O,J,j){var _,L=P.p(J),B=H(O),ee=(B.utcOffset()-this.utcOffset())*r,R=this-B,F=P.m(this,B);return F=(_={},_[f]=F/12,_[d]=F,_[h]=F/3,_[c]=(R-ee)/6048e5,_[u]=(R-ee)/864e5,_[l]=R/i,_[a]=R/r,_[s]=R/n,_)[L]||R,j?F:P.a(F)},z.daysInMonth=function(){return this.endOf(d).$D},z.$locale=function(){return A[this.$L]},z.locale=function(O,J){if(!O)return this.$L;var j=this.clone(),_=$(O,J,!0);return _&&(j.$L=_),j},z.clone=function(){return P.w(this.$d,this)},z.toDate=function(){return new Date(this.valueOf())},z.toJSON=function(){return this.isValid()?this.toISOString():null},z.toISOString=function(){return this.$d.toISOString()},z.toString=function(){return this.$d.toUTCString()},G}(),Oe=me.prototype;return H.prototype=Oe,[["$ms",o],["$s",s],["$m",a],["$H",l],["$W",u],["$M",d],["$y",f],["$D",v]].forEach(function(G){Oe[G[1]]=function(z){return this.$g(z,G[0],G[1])}}),H.extend=function(G,z){return G.$i||(G(z,me,H),G.$i=!0),H},H.locale=$,H.isDayjs=I,H.unix=function(G){return H(1e3*G)},H.en=A[T],H.Ls=A,H.p={},H})})(vF);const i0=Fc,yF=N.div`
  display: flex;
  justify-content: space-between;

  p {
    display: flex;
    gap: 4px;
    align-items: center;
    max-width: 100%;

    a {
      font-weight: 600;
    }

    span {
      display: flex;
      align-items: center;
      opacity: 0.75;
    }
  }
`,YC=({displayName:e,email:t,timestamp:n})=>C(yF,{children:[C("p",{children:[m("a",{children:e}),C("span",{children:[t," ",m(P5,{})," ",i0(n).fromNow()]})]}),m("a",{href:"",children:m(fC,{})})]}),XC=({tweet:e})=>{var t;return C(hF,{children:[m(fF,{children:e.isRetweet?C(sr,{children:[m(PC,{}),C("p",{children:[(t=e.retweeter)==null?void 0:t.displayName," deu retweet"]})]}):null}),C(mF,{children:[m(pF,{src:e.author.photoURL,alt:"",width:"48px",height:"48px"}),C("div",{children:[m(YC,{email:e.author.email,displayName:e.author.displayName,timestamp:e.timestamp&&e.timestamp.toDate()}),m("p",{children:e.content}),m(QC,{likes:e.likes.length,retweets:e.retweetsCount})]})]})]})},wF=N.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 16px;
  border-bottom: 1px solid ${({theme:e})=>e.borderColor};
  position: sticky;
  top: 0;
  background: ${({theme:e})=>`${e.bg}aa`};
  backdrop-filter: blur(10px);
  z-index: 1;

  h2 {
    font-size: 1.2rem;
    font-weight: 700;
  }

  & > div,
  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > div {
    border-radius: 50%;
    padding: 10px;

    :hover {
      background: ${({theme:e})=>`${e.text}11`};
    }
  }

  a,
  svg {
    color: inherit;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`,EF=()=>{const[e,t]=w.useState(!1),[n,r]=w.useState([]);return w.useEffect(()=>{(async()=>{const o=Mx(pM(Fn,"posts"),Lx("timestamp","desc"));Hx(o,async s=>{const a=await Promise.all(s.docs.map(async l=>NC(l)));r(a)}),t(!1)})()},[]),e?null:C(yl,{children:[C(wF,{children:[m("h2",{children:"Página inicial"}),m("div",{children:m("a",{href:"#",title:"Vendo tweets mais recentes",children:m(U5,{})})})]}),m(DC,{}),n.map(i=>m(XC,{tweet:i},i.id))]})},SF=N.main`
  display: flex;
  justify-content: center;
  width: 100%;
`,bF=()=>{const{user:e}=lr(ur);return e?C(SF,{children:[m(Hr,{children:m("title",{children:"Página inicial / Not twitter"})}),m(bl,{}),m(EF,{}),m(e0,{})]}):m(KC,{})},TF=N.div`
  padding: 12px 16px;
  display: flex;
  border-bottom: 1px solid ${({theme:e})=>e.borderColor};
  ${e=>e.type==="response"?"padding-bottom: 4px;":null};
`,xF=N.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 12px;
`,o0=N.div`
  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    margin-bottom: 12px;

    img {
      border-radius: 50%;
    }
  }
`,s0=N.p`
  a {
    font-weight: 700;
    color: inherit;
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }
`,CF=({img:e})=>C(sr,{children:[m(o0,{children:m("a",{href:"",children:m("img",{src:e,alt:"",width:"32px",height:"32px"})})}),C(s0,{children:[m("a",{href:"",children:"Lorem Ipsum"})," seguiu você"]})]}),oh=N.div`
  width: 52px;
  flex-grow: 0;
  display: flex;
  justify-content: flex-end;

  svg {
    width: 25px;
    height: 25px;
  }

  img {
    border-radius: 50%;
  }
`,_F=N(oh)`
  svg {
    color: ${({theme:e})=>e.like};
  }
`,Fw=N(oh)`
  svg {
    color: ${({theme:e})=>e.accent};
  }
`,kF=N(oh)`
  svg {
    color: ${({theme:e})=>e.text};
  }
`,IF=({type:e,src:t})=>{switch(e){case"notification":return m(Fw,{children:m(OC,{})});case"like":return m(_F,{children:m(M5,{})});case"device":return m(kF,{children:m(Kv,{})});case"follow":return m(Fw,{children:m(hC,{})});case"response":return m(oh,{children:m(Jv,{to:"",children:m("img",{src:t,alt:"",width:"48px",height:"48px"})})});default:return null}},$F=N.p`
  color: ${({theme:e})=>e.textAlt};
  margin-top: 10px;
`,AF=({img:e})=>C(sr,{children:[m(o0,{children:m("a",{href:"",children:m("img",{src:e,alt:"",width:"32px",height:"32px"})})}),C(s0,{children:[m("a",{href:"",children:"Lorem Ipsum"})," curtiu seu tweet"]}),m($F,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, perferendis."})]}),RF=({img:e})=>C(sr,{children:[m(o0,{children:m("a",{href:"",children:m("img",{src:e,alt:"",width:"32px",height:"32px"})})}),C(s0,{children:["Novas notificações de ",m("a",{href:"",children:"Lorem Ipsum"})]})]}),NF=N.p`
  font-size: 0.9rem;
  color: ${({theme:e})=>e.textAlt};

  a {
    text-decoration: none;
    color: ${({theme:e})=>e.accent};
    font-weight: 500;

    :hover {
      text-decoration: underline;
    }
  }
`,OF=()=>C(sr,{children:[m(YC,{displayName:"Lorem Ipsum",email:"elpmaxe@email.com"}),C(NF,{children:["Em resposta a ",m("a",{href:"#",children:"example@email.com"})]}),m("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quasi expedita accusamus quos laboriosam iusto, maxime labore sequi iure laborum."}),m(QC,{likes:20,retweets:2})]}),pr=["https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1674601658~exp=1674602258~hmac=e93af533e61e59091dd8d3447bb05c2df4096a8f1aa312411847b9dab36bb990","https://img.freepik.com/free-psd/3d-illustration-person_23-2149436179.jpg?w=740&t=st=1674601667~exp=1674602267~hmac=ca389aaabeb87367c4b93e751a0eed2b8cf694a303148e6d4b34547463fba2b2","https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436185.jpg?w=740&t=st=1674601676~exp=1674602276~hmac=4324b456014d8846cbaf30843ef48123c64f48cc157686de291fc9f731c2cd09","https://img.freepik.com/free-psd/3d-illustration-bald-person-with-glasses_23-2149436184.jpg?w=740&t=st=1674601683~exp=1674602283~hmac=13d05585af52bb025e1cc828f6ba8da7e252130d2e4c0678d7b2392f04ed966e"],Ht=({type:e})=>C(TF,{type:e,children:[m(IF,{type:e,src:pr[Math.floor(Math.random()*pr.length)]}),C(xF,{children:[e!=="response"?null:m(OF,{}),e!=="follow"?null:m(CF,{img:pr[Math.floor(Math.random()*pr.length)]}),e!=="notification"?null:m(RF,{img:pr[Math.floor(Math.random()*pr.length)]}),e!=="like"?null:m(AF,{img:pr[Math.floor(Math.random()*pr.length)]}),e!=="device"?null:m("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, delectus?"})]})]}),PF=()=>C(sr,{children:[m(Ht,{type:"notification"}),m(Ht,{type:"like"}),m(Ht,{type:"device"}),m(Ht,{type:"follow"}),m(Ht,{type:"response"}),m(Ht,{type:"like"}),m(Ht,{type:"like"})]}),DF=()=>C(sr,{children:[m(Ht,{type:"response"}),m(Ht,{type:"response"}),m(Ht,{type:"response"}),m(Ht,{type:"response"}),m(Ht,{type:"response"}),m(Ht,{type:"response"})]}),MF=N.div`
  display: flex;
  justify-content: center;
  width: 100%;
`,LF=N.div`
  background: ${({theme:e})=>`${e.bg}aa`};
  backdrop-filter: blur(10px);
  width: 100%;
  display: flex;
  flex-direction: column;
  position: sticky;
  z-index: 2;
  top: 0;
  border-bottom: 1px solid ${({theme:e})=>e.borderColor};

  h2 {
    font-size: 1.2rem;
    font-weight: 600px;
  }
`,FF=N.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${({theme:e})=>e.borderColor};
  border-left: 1px solid ${({theme:e})=>e.borderColor};
  height: 100%;
`,JC=N.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 16px;
  width: 100%;

  h2 {
    flex-grow: 1;
  }
`,wm=N.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  display: flex;

  :hover {
    background: ${({theme:e})=>`${e.text}11`};
    border-radius: 50%;
  }

  a {
    justify-content: center;
    align-items: center;
    display: flex;
    color: inherit;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`,UF=()=>C(MF,{children:[m(Hr,{children:m("title",{children:"Notificações / Not twitter"})}),m(bl,{}),m(yl,{children:C(FF,{children:[C(LF,{children:[C(JC,{children:[m("h2",{children:"Notificações"}),m(wm,{children:m("a",{href:"",children:m(t0,{})})})]}),C(r0,{children:[m(No,{to:"/notifications/",children:C("div",{children:[m("span",{children:"Tudo"}),m("div",{})]})}),m(No,{to:"verified",children:C("div",{children:[m("span",{children:"Verificadas"}),m("div",{})]})}),m(No,{to:"mentions",children:C("div",{children:[m("span",{children:"Menções"}),m("div",{})]})})]})]}),m(G6,{})]})}),m(e0,{})]}),jF=N.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  height: 70vh;

  > div {
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0 16px;

    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 0.95rem;
      color: ${({theme:e})=>e.textAlt};

      a {
        color: ${({theme:e})=>e.text};
        font-weight: 600;
      }
    }

    img {
      width: 100%;
    }
  }
`,zF=()=>m(jF,{children:C("div",{children:[m("img",{src:"https://abs.twimg.com/responsive-web/client-web/verification-check-800x400.v1.52677a99.png",alt:""}),C("div",{children:[C("h2",{children:["Nada para ver aqui.",m("br",{}),"Ainda."]}),C("p",{children:["Curtidas, menções, Retweets e muito mais — quando se trata de uma conta verificada, você encontra aqui."," ",m("a",{href:"https://help.twitter.com/managing-your-account/about-twitter-verified-accounts",target:"_blank",rel:"noopener noreferrer",children:"Saiba mais"})]})]})]})}),VF=N.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  max-width: 1100px;
`,BF=N.div`
  width: 100%;
  max-width: 600px;
  flex-shrink: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    min-height: 100vh;

    > div:last-of-type {
      max-width: 320px;

      > h3,
      p {
        padding: 0 16px;
      }

      > h3 {
        font-size: 1.75rem;
        margin-top: 30px;
      }

      p {
        color: ${({theme:e})=>e.textAlt};
        font-size: 14px;
        margin: 10px 0;
      }
    }
  }

  @media screen and (min-width: 1020px) {
    width: 320px;
  }
`,HF=N.div`
  display: flex;
  align-items: center;
`,WF=N.div`
  display: none;
  border-right: 1px solid ${({theme:e})=>e.borderColor};
  min-height: 100vh;
  justify-content: center;
  align-items: center;

  div {
    max-width: 336px;
    margin: 20px auto;

    h3 {
      font-size: 2rem;
    }

    p {
      color: ${({theme:e})=>e.textAlt};
      margin-top: 10px;
      font-size: 0.9rem;
    }

    button {
      margin-left: 0;
      margin-right: 0;
    }
  }

  @media screen and (min-width: 1020px) {
    display: flex;
    flex-grow: 1;
  }
`,Uw=N.button`
  margin: 15px 20px;
  font-weight: 600;
  font-size: 1.1rem;
  border-radius: 30px;
  padding: 16px;
  background-color: ${({theme:e})=>e.accent};
  color: ${({theme:e})=>e.text};
  border: none;
  outline: none;

  :hover {
    opacity: 0.9;
  }
`,qF=()=>C(VF,{children:[m(Hr,{children:m("title",{children:"Mensagens / Not twitter"})}),m(bl,{}),m(BF,{children:C(yl,{children:[C(JC,{children:[m("h3",{children:"Mensagens"}),C(HF,{children:[m(wm,{children:m("a",{href:"#",children:m(t0,{})})}),m(wm,{children:m("a",{href:"#",children:m(R5,{})})})]})]}),C("div",{children:[m("h3",{children:"Receba as boas-vindas à sua caixa de entrada!"}),m("p",{children:"Escreva, compartilhe Tweets e muito mais com conversas privadas entre você e outras pessoas no Twitter."}),m(Uw,{children:"Escrever uma mensagem"})]})]})}),m(WF,{children:C("div",{children:[m("h3",{children:"Selecione uma mensagem"}),m("p",{children:"Escolha entre as conversas existentes, inicie uma nova ou continue explorando."}),m(Uw,{children:"Nova mensagem"})]})})]}),GF=()=>{const e=SC();return m(KF,{onClick:()=>e(-1),children:m(O5,{})})},KF=N.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  outline: none;
  color: ${({theme:e})=>e.text};
  padding: 10px;

  svg {
    width: 20px;
    height: 20px;
  }
`,QF=({displayName:e,tweetsCount:t})=>C(YF,{children:[m(GF,{}),C(XF,{children:[m("h2",{children:e}),C("p",{children:[t," Tweet",t!==1&&"s"]})]})]}),YF=N.div`
  width: 100%;
  padding: 8px 4px;
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 10px;
  background-color: ${({theme:e})=>`${e.bg}bb`};
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  left: 0;
  z-index: 200;
`,XF=N.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  h2 {
    font-size: 18px;
    font-weight: 600;
  }

  p {
    font-size: 12px;
    color: ${({theme:e})=>e.textAlt};
  }
`,JF=N.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  align-items: stretch;
  justify-content: center;
`,ZF=N(yl)`
  min-height: 100%;
`,eU=N.div`
  min-height: 100vh;
`,tU=N.div`
  width: 100%;
  height: 150px;
  background: ${({theme:e})=>e.accent};
`,nU=N.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: -15px;

  button {
    margin-right: 15px;
    padding: 8px 14px;
    border-radius: 30px;
    font-weight: 600;
    color: ${({theme:e})=>e.text};
    background-color: ${({theme:e})=>e.bg};
    border: 1px solid ${({theme:e})=>e.textAlt};

    :hover {
      opacity: 0.9;
    }
  }
`,rU=N.img`
  width: 25%;
  height: 25%;
  min-width: 64px;
  min-height: 64px;
  object-fit: contain;
  border-radius: 50%;
  position: relative;
  margin-top: -10%;
  margin-left: 5%;
  border: 5px solid ${({theme:e})=>e.bg};
`,iU=N.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 16px;

  h2 {
    font-weight: 600;
    font-size: 20px;
  }

  h3 {
    font-weight: 400;
    font-size: 0.9rem;
    color: ${({theme:e})=>e.textAlt};
  }

  div:last-of-type {
    display: flex;
    align-items: center;
    gap: 20px;

    p {
      font-size: 14px;
      color: ${({theme:e})=>e.textAlt};
    }

    p span {
      font-weight: 600;
      color: ${({theme:e})=>e.text};
    }
  }
`,oU=N(r0)`
  border-bottom: 1px solid ${({theme:e})=>e.borderColor};

  span {
    font-size: 0.95rem;
  }
`,sU=N.div`
  display: flex;
  flex-direction: column;
`,aU=()=>{const{user:e}=lr(ur),[t,n]=w.useState(!0),[r,i]=w.useState([]);return w.useEffect(()=>{(async()=>{const s=Mx(xx(Fn,"users",e.uid,"posts"),Lx("timestamp","desc"));Hx(s,async a=>{const l=await Promise.all(a.docs.map(async u=>NC(u)));i(l)}),n(!1)})()},[]),C(JF,{children:[m(Hr,{children:C("title",{children:[e==null?void 0:e.displayName," / Not twitter"]})}),m(bl,{}),C(ZF,{children:[m(QF,{displayName:e.displayName,tweetsCount:20}),C(eU,{children:[m(tU,{}),C(nU,{children:[m(rU,{src:(e==null?void 0:e.photoURL)||"#",alt:"Sua foto de perfil"}),m("button",{children:"Configurar perfil"})]}),C(iU,{children:[C("div",{children:[m("h2",{children:e==null?void 0:e.displayName}),m("h3",{children:e==null?void 0:e.email})]}),C("div",{children:[C("p",{children:[m("span",{children:"2"})," seguindo"]}),C("p",{children:[m("span",{children:"10"})," seguidores"]})]})]}),C(oU,{children:[m(No,{to:"/profile",children:C("div",{children:[m("span",{children:"Tweets"}),m("div",{})]})}),m("a",{href:"/#/profile",children:C("div",{children:[m("span",{children:"Tweets e respostas"}),m("div",{})]})}),m("a",{href:"/#/profile",children:C("div",{children:[m("span",{children:"Mídias"}),m("div",{})]})}),m("a",{href:"/#/profile",children:C("div",{children:[m("span",{children:"Curtidas"}),m("div",{})]})})]}),m(sU,{children:t?"LOADING...":r.map(o=>m(XC,{tweet:o},o.id))})]})]}),m(e0,{})]})},lU=()=>m(e8,{children:C(Q6,{children:[m(zn,{path:"",element:m(bF,{})}),m(zn,{path:"explore",element:m(KC,{})}),C(zn,{path:"notifications",element:m(UF,{}),children:[m(zn,{path:"",element:m(PF,{})}),m(zn,{path:"verified",element:m(zF,{})}),m(zn,{path:"mentions",element:m(DF,{})})]}),m(zn,{path:"messages",element:m(qF,{})}),m(zn,{path:"profile",element:m(aU,{})})]})});var jw={},uU={get exports(){return jw},set exports(e){jw=e}};(function(e,t){(function(n,r){e.exports=r(Fc)})(Sm,function(n){function r(s){return s&&typeof s=="object"&&"default"in s?s:{default:s}}var i=r(n),o={name:"pt-br",weekdays:"domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"),weekdaysShort:"dom_seg_ter_qua_qui_sex_sáb".split("_"),weekdaysMin:"Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),months:"janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),monthsShort:"jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),ordinal:function(s){return s+"º"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY [às] HH:mm",LLLL:"dddd, D [de] MMMM [de] YYYY [às] HH:mm"},relativeTime:{future:"em %s",past:"há %s",s:"poucos segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um mês",MM:"%d meses",y:"um ano",yy:"%d anos"}};return i.default.locale(o,null,!0),o})})(uU);var Em={},cU={get exports(){return Em},set exports(e){Em=e}};(function(e,t){(function(n,r){e.exports=r()})(Sm,function(){return function(n,r,i){n=n||{};var o=r.prototype,s={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function a(u,c,d,h){return o.fromToBase(u,c,d,h)}i.en.relativeTime=s,o.fromToBase=function(u,c,d,h,f){for(var v,p,S,y=d.$locale().relativeTime||s,g=n.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],E=g.length,b=0;b<E;b+=1){var T=g[b];T.d&&(v=h?i(u).diff(d,T.d,!0):d.diff(u,T.d,!0));var A=(n.rounding||Math.round)(Math.abs(v));if(S=v>0,A<=T.r||!T.r){A<=1&&b>0&&(T=g[b-1]);var I=y[T.l];f&&(A=f(""+A)),p=typeof I=="string"?I.replace("%d",A):I(A,c,T.l,S);break}}if(c)return p;var $=S?y.future:y.past;return typeof $=="function"?$(p):$.replace("%s",p)},o.to=function(u,c){return a(u,c,this,!0)},o.from=function(u,c){return a(u,c,this)};var l=function(u){return u.$u?i.utc():i()};o.toNow=function(u){return this.to(l(this),u)},o.fromNow=function(u){return this.from(l(this),u)}}})})(cU);const dU=Em;i0.locale("pt-br");i0.extend(dU);function hU(){const e=s2();return w.useEffect(()=>{const t=sessionStorage.getItem("@AuthFirebase:user"),n=t?JSON.parse(t):null;n&&e(bd({user:n}))},[]),C(Q5,{children:[m(uA,{}),m(yo,{children:m(lU,{})}),m(G5,{})]})}bf.createRoot(document.getElementById("root")).render(m(ve.StrictMode,{children:m(S$,{store:fs,children:m(hU,{})})}));
