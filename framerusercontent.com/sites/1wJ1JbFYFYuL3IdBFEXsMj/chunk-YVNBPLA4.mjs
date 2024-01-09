import{a as j}from"./chunk-ELYU6EKT.mjs";var Oe={};j(Oe,{Children:()=>G,Component:()=>J,Fragment:()=>K,Profiler:()=>Q,PureComponent:()=>X,StrictMode:()=>Z,Suspense:()=>ee,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:()=>te,cloneElement:()=>re,createContext:()=>ne,createElement:()=>ue,createFactory:()=>oe,createRef:()=>ae,default:()=>r,forwardRef:()=>se,isValidElement:()=>ce,lazy:()=>ie,memo:()=>fe,startTransition:()=>le,unstable_act:()=>pe,useCallback:()=>ye,useContext:()=>de,useDebugValue:()=>_e,useDeferredValue:()=>me,useEffect:()=>Ee,useId:()=>Se,useImperativeHandle:()=>he,useInsertionEffect:()=>ve,useLayoutEffect:()=>be,useMemo:()=>Re,useReducer:()=>Ce,useRef:()=>ge,useState:()=>we,useSyncExternalStore:()=>ke,useTransition:()=>$e,version:()=>Ie});var r={},y=Symbol.for("react.element"),P=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),L=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),F=Symbol.for("react.provider"),N=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),M=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),R=Symbol.iterator;function z(e){return e===null||typeof e!="object"?null:(e=R&&e[R]||e["@@iterator"],typeof e=="function"?e:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,$={};function p(e,t,n){this.props=e,this.context=t,this.refs=$,this.updater=n||w}p.prototype.isReactComponent={};p.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};p.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function I(){}I.prototype=p.prototype;function S(e,t,n){this.props=e,this.context=t,this.refs=$,this.updater=n||w}var h=S.prototype=new I;h.constructor=S;k(h,p.prototype);h.isPureReactComponent=!0;var C=Array.isArray,O=Object.prototype.hasOwnProperty,v={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function T(e,t,n){var o,u={},s=null,i=null;if(t!=null)for(o in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(s=""+t.key),t)O.call(t,o)&&!x.hasOwnProperty(o)&&(u[o]=t[o]);var c=arguments.length-2;if(c===1)u.children=n;else if(1<c){for(var a=Array(c),l=0;l<c;l++)a[l]=arguments[l+2];u.children=a}if(e&&e.defaultProps)for(o in c=e.defaultProps,c)u[o]===void 0&&(u[o]=c[o]);return{$$typeof:y,type:e,key:s,ref:i,props:u,_owner:v.current}}function B(e,t){return{$$typeof:y,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function b(e){return typeof e=="object"&&e!==null&&e.$$typeof===y}function H(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var g=/\/+/g;function E(e,t){return typeof e=="object"&&e!==null&&e.key!=null?H(""+e.key):t.toString(36)}function _(e,t,n,o,u){var s=typeof e;s!=="undefined"&&s!=="boolean"||(e=null);var i=!1;if(e===null)i=!0;else switch(s){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case y:case P:i=!0}}if(i)return i=e,u=u(i),e=o===""?"."+E(i,0):o,C(u)?(n="",e!=null&&(n=e.replace(g,"$&/")+"/"),_(u,t,n,"",function(l){return l})):u!=null&&(b(u)&&(u=B(u,n+(!u.key||i&&i.key===u.key?"":(""+u.key).replace(g,"$&/")+"/")+e)),t.push(u)),1;if(i=0,o=o===""?".":o+":",C(e))for(var c=0;c<e.length;c++){s=e[c];var a=o+E(s,c);i+=_(s,t,n,a,u)}else if(a=z(e),typeof a=="function")for(e=a.call(e),c=0;!(s=e.next()).done;)s=s.value,a=o+E(s,c++),i+=_(s,t,n,a,u);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function d(e,t,n){if(e==null)return e;var o=[],u=0;return _(e,o,"","",function(s){return t.call(n,s,u++)}),o}function W(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){e._status!==0&&e._status!==-1||(e._status=1,e._result=n)},function(n){e._status!==0&&e._status!==-1||(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var f={current:null},m={transition:null},Y={ReactCurrentDispatcher:f,ReactCurrentBatchConfig:m,ReactCurrentOwner:v};r.Children={map:d,forEach:function(e,t,n){d(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return d(e,function(){t++}),t},toArray:function(e){return d(e,function(t){return t})||[]},only:function(e){if(!b(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};r.Component=p;r.Fragment=D;r.Profiler=V;r.PureComponent=S;r.StrictMode=L;r.Suspense=A;r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y;r.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=k({},e.props),u=e.key,s=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,i=v.current),t.key!==void 0&&(u=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(a in t)O.call(t,a)&&!x.hasOwnProperty(a)&&(o[a]=t[a]===void 0&&c!==void 0?c[a]:t[a])}var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){c=Array(a);for(var l=0;l<a;l++)c[l]=arguments[l+2];o.children=c}return{$$typeof:y,type:e.type,key:u,ref:s,props:o,_owner:i}};r.createContext=function(e){return e={$$typeof:N,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:F,_context:e},e.Consumer=e};r.createElement=T;r.createFactory=function(e){var t=T.bind(null,e);return t.type=e,t};r.createRef=function(){return{current:null}};r.forwardRef=function(e){return{$$typeof:U,render:e}};r.isValidElement=b;r.lazy=function(e){return{$$typeof:q,_payload:{_status:-1,_result:e},_init:W}};r.memo=function(e,t){return{$$typeof:M,type:e,compare:t===void 0?null:t}};r.startTransition=function(e){var t=m.transition;m.transition={};try{e()}finally{m.transition=t}};r.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};r.useCallback=function(e,t){return f.current.useCallback(e,t)};r.useContext=function(e){return f.current.useContext(e)};r.useDebugValue=function(){};r.useDeferredValue=function(e){return f.current.useDeferredValue(e)};r.useEffect=function(e,t){return f.current.useEffect(e,t)};r.useId=function(){return f.current.useId()};r.useImperativeHandle=function(e,t,n){return f.current.useImperativeHandle(e,t,n)};r.useInsertionEffect=function(e,t){return f.current.useInsertionEffect(e,t)};r.useLayoutEffect=function(e,t){return f.current.useLayoutEffect(e,t)};r.useMemo=function(e,t){return f.current.useMemo(e,t)};r.useReducer=function(e,t,n){return f.current.useReducer(e,t,n)};r.useRef=function(e){return f.current.useRef(e)};r.useState=function(e){return f.current.useState(e)};r.useSyncExternalStore=function(e,t,n){return f.current.useSyncExternalStore(e,t,n)};r.useTransition=function(){return f.current.useTransition()};r.version="18.1.0";var G=r.Children,J=r.Component,K=r.Fragment,Q=r.Profiler,X=r.PureComponent,Z=r.StrictMode,ee=r.Suspense,te=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,re=r.cloneElement,ne=r.createContext,ue=r.createElement,oe=r.createFactory,ae=r.createRef,se=r.forwardRef,ce=r.isValidElement,ie=r.lazy,fe=r.memo,le=r.startTransition,pe=r.unstable_act,ye=r.useCallback,de=r.useContext,_e=r.useDebugValue,me=r.useDeferredValue,Ee=r.useEffect,Se=r.useId,he=r.useImperativeHandle,ve=r.useInsertionEffect,be=r.useLayoutEffect,Re=r.useMemo,Ce=r.useReducer,ge=r.useRef,we=r.useState,ke=r.useSyncExternalStore,$e=r.useTransition,Ie=r.version;export{r as a,G as b,J as c,K as d,re as e,ne as f,ue as g,ae as h,se as i,ce as j,fe as k,le as l,ye as m,de as n,Ee as o,Se as p,ve as q,be as r,Re as s,ge as t,we as u,Oe as v};
//# sourceMappingURL=chunk-YVNBPLA4.mjs.map
