!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="/weborg/tool/",e(e.s=0)}([function(t,n,e){"use strict";function r(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function o(t,n){if(t){if("string"===typeof t)return r(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(t,n):void 0}}function a(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var r,o,a=[],u=!0,i=!1;try{for(e=e.call(t);!(u=(r=e.next()).done)&&(a.push(r.value),!n||a.length!==n);u=!0);}catch(c){i=!0,o=c}finally{try{u||null==e.return||e.return()}finally{if(i)throw o}}return a}}(t,n)||o(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function i(t,n){return i=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t},i(t,n)}function c(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function l(t,n,e){return l=c()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&i(o,e.prototype),o},l.apply(null,arguments)}function f(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||o(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}e.r(n);var s=Symbol("Comlink.proxy"),p=Symbol("Comlink.endpoint"),y=Symbol("Comlink.releaseProxy"),d=Symbol("Comlink.thrown"),m=function(t){return"object"===typeof t&&null!==t||"function"===typeof t},v=new Map([["proxy",{canHandle:function(t){return m(t)&&t[s]},serialize:function(t){var n=new MessageChannel,e=n.port1,r=n.port2;return b(t,e),[r,[r]]},deserialize:function(t){return t.start(),S(t,[],n);var n}}],["throw",{canHandle:function(t){return m(t)&&d in t},serialize:function(t){var n=t.value;return[n instanceof Error?{isError:!0,value:{message:n.message,name:n.name,stack:n.stack}}:{isError:!1,value:n},[]]},deserialize:function(t){if(t.isError)throw Object.assign(new Error(t.value.message),t.value);throw t.value}}]]);function b(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:self;n.addEventListener("message",(function e(r){if(r&&r.data){var o,i=Object.assign({path:[]},r.data),c=i.id,s=i.type,p=i.path,y=(r.data.argumentList||[]).map(P);try{var m=p.slice(0,-1).reduce((function(t,n){return t[n]}),t),v=p.reduce((function(t,n){return t[n]}),t);switch(s){case"GET":o=v;break;case"SET":m[p.slice(-1)[0]]=P(r.data.value),o=!0;break;case"APPLY":o=v.apply(m,y);break;case"CONSTRUCT":var h;o=O(l(v,f(y)));break;case"ENDPOINT":var S=new MessageChannel,E=S.port1,w=S.port2;b(t,w),o=A(E,[E]);break;case"RELEASE":o=void 0;break;default:return}}catch(h){o=u({value:h},d,0)}Promise.resolve(o).catch((function(t){return u({value:t},d,0)})).then((function(t){var r=a(j(t),2),o=r[0],u=r[1];n.postMessage(Object.assign(Object.assign({},o),{id:c}),u),"RELEASE"===s&&(n.removeEventListener("message",e),g(n))}))}})),n.start&&n.start()}function g(t){(function(t){return"MessagePort"===t.constructor.name})(t)&&t.close()}function h(t){if(t)throw new Error("Proxy has been released and is not useable")}function S(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},r=!1,o=new Proxy(e,{get:function(e,a){if(h(r),a===y)return function(){return L(t,{type:"RELEASE",path:n.map((function(t){return t.toString()}))}).then((function(){g(t),r=!0}))};if("then"===a){if(0===n.length)return{then:function(){return o}};var u=L(t,{type:"GET",path:n.map((function(t){return t.toString()}))}).then(P);return u.then.bind(u)}return S(t,[].concat(f(n),[a]))},set:function(e,o,u){h(r);var i=a(j(u),2),c=i[0],l=i[1];return L(t,{type:"SET",path:[].concat(f(n),[o]).map((function(t){return t.toString()})),value:c},l).then(P)},apply:function(e,o,u){h(r);var i=n[n.length-1];if(i===p)return L(t,{type:"ENDPOINT"}).then(P);if("bind"===i)return S(t,n.slice(0,-1));var c=a(E(u),2),l=c[0],f=c[1];return L(t,{type:"APPLY",path:n.map((function(t){return t.toString()})),argumentList:l},f).then(P)},construct:function(e,o){h(r);var u=a(E(o),2),i=u[0],c=u[1];return L(t,{type:"CONSTRUCT",path:n.map((function(t){return t.toString()})),argumentList:i},c).then(P)}});return o}function E(t){var n,e=t.map(j);return[e.map((function(t){return t[0]})),(n=e.map((function(t){return t[1]})),Array.prototype.concat.apply([],n))]}var w=new WeakMap;function A(t,n){return w.set(t,n),t}function O(t){return Object.assign(t,u({},s,!0))}function j(t){var n,e=function(t,n){var e="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=o(t))||n&&t&&"number"===typeof t.length){e&&(t=e);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,i=!0,c=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return i=t.done,t},e:function(t){c=!0,u=t},f:function(){try{i||null==e.return||e.return()}finally{if(c)throw u}}}}(v);try{for(e.s();!(n=e.n()).done;){var r=a(n.value,2),u=r[0],i=r[1];if(i.canHandle(t)){var c=a(i.serialize(t),2);return[{type:"HANDLER",name:u,value:c[0]},c[1]]}}}catch(l){e.e(l)}finally{e.f()}return[{type:"RAW",value:t},w.get(t)||[]]}function P(t){switch(t.type){case"HANDLER":return v.get(t.name).deserialize(t.value);case"RAW":return t.value}}function L(t,n,e){return new Promise((function(r){var o=new Array(4).fill(0).map((function(){return Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)})).join("-");t.addEventListener("message",(function n(e){e.data&&e.data.id&&e.data.id===o&&(t.removeEventListener("message",n),r(e.data))})),t.start&&t.start(),t.postMessage(Object.assign({id:o},n),e)}))}n.default={};b({generateLatticeString:function(t,n,e){e("#N= ".concat(t.length,"\n").concat(t.map((function(t){return"Org.Num= ".concat(Number.parseInt(t.id.substring(1))-1," #Elem=").concat(t.species.length," {").concat(t.species.map((function(t){return" ".concat(t.index)}))," }\n")})).toString().replaceAll(",",""),"\n#L= ").concat(n.length,"\n").concat(n.map((function(t){return"( ".concat(Number.parseInt(t.data.target.substring(1))-1," Below ").concat(Number.parseInt(t.data.source.substring(1))-1," ) Upload= 0 , Download= 0\n")})).toString().replaceAll(",","")))}})}]);
//# sourceMappingURL=lattice.worker.e80a59d2.js.map