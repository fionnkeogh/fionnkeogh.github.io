!function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/weborg/tool/",n(n.s=0)}([function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function a(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,a,o=[],u=!0,i=!1;try{for(n=n.call(t);!(u=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);u=!0);}catch(c){i=!0,a=c}finally{try{u||null==n.return||n.return()}finally{if(i)throw a}}return o}}(t,e)||a(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){return i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},i(t,e)}function c(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function l(t,e,n){return l=c()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var a=new(Function.bind.apply(t,r));return n&&i(a,n.prototype),a},l.apply(null,arguments)}function f(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||a(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.r(e);var s=Symbol("Comlink.proxy"),d=Symbol("Comlink.endpoint"),p=Symbol("Comlink.releaseProxy"),y=Symbol("Comlink.thrown"),h=function(t){return"object"===typeof t&&null!==t||"function"===typeof t},v=new Map([["proxy",{canHandle:function(t){return h(t)&&t[s]},serialize:function(t){var e=new MessageChannel,n=e.port1,r=e.port2;return g(t,n),[r,[r]]},deserialize:function(t){return t.start(),w(t,[],e);var e}}],["throw",{canHandle:function(t){return h(t)&&y in t},serialize:function(t){var e=t.value;return[e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[]]},deserialize:function(t){if(t.isError)throw Object.assign(new Error(t.value.message),t.value);throw t.value}}]]);function g(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:self;e.addEventListener("message",(function n(r){if(r&&r.data){var a,i=Object.assign({path:[]},r.data),c=i.id,s=i.type,d=i.path,p=(r.data.argumentList||[]).map(P);try{var h=d.slice(0,-1).reduce((function(t,e){return t[e]}),t),v=d.reduce((function(t,e){return t[e]}),t);switch(s){case"GET":a=v;break;case"SET":h[d.slice(-1)[0]]=P(r.data.value),a=!0;break;case"APPLY":a=v.apply(h,p);break;case"CONSTRUCT":var b;a=O(l(v,f(p)));break;case"ENDPOINT":var w=new MessageChannel,S=w.port1,E=w.port2;g(t,E),a=A(S,[S]);break;case"RELEASE":a=void 0;break;default:return}}catch(b){a=u({value:b},y,0)}Promise.resolve(a).catch((function(t){return u({value:t},y,0)})).then((function(t){var r=o(j(t),2),a=r[0],u=r[1];e.postMessage(Object.assign(Object.assign({},a),{id:c}),u),"RELEASE"===s&&(e.removeEventListener("message",n),m(e))}))}})),e.start&&e.start()}function m(t){(function(t){return"MessagePort"===t.constructor.name})(t)&&t.close()}function b(t){if(t)throw new Error("Proxy has been released and is not useable")}function w(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},r=!1,a=new Proxy(n,{get:function(n,o){if(b(r),o===p)return function(){return R(t,{type:"RELEASE",path:e.map((function(t){return t.toString()}))}).then((function(){m(t),r=!0}))};if("then"===o){if(0===e.length)return{then:function(){return a}};var u=R(t,{type:"GET",path:e.map((function(t){return t.toString()}))}).then(P);return u.then.bind(u)}return w(t,[].concat(f(e),[o]))},set:function(n,a,u){b(r);var i=o(j(u),2),c=i[0],l=i[1];return R(t,{type:"SET",path:[].concat(f(e),[a]).map((function(t){return t.toString()})),value:c},l).then(P)},apply:function(n,a,u){b(r);var i=e[e.length-1];if(i===d)return R(t,{type:"ENDPOINT"}).then(P);if("bind"===i)return w(t,e.slice(0,-1));var c=o(S(u),2),l=c[0],f=c[1];return R(t,{type:"APPLY",path:e.map((function(t){return t.toString()})),argumentList:l},f).then(P)},construct:function(n,a){b(r);var u=o(S(a),2),i=u[0],c=u[1];return R(t,{type:"CONSTRUCT",path:e.map((function(t){return t.toString()})),argumentList:i},c).then(P)}});return a}function S(t){var e,n=t.map(j);return[n.map((function(t){return t[0]})),(e=n.map((function(t){return t[1]})),Array.prototype.concat.apply([],e))]}var E=new WeakMap;function A(t,e){return E.set(t,e),t}function O(t){return Object.assign(t,u({},s,!0))}function j(t){var e,n=function(t,e){var n="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=a(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,i=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return i=t.done,t},e:function(t){c=!0,u=t},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw u}}}}(v);try{for(n.s();!(e=n.n()).done;){var r=o(e.value,2),u=r[0],i=r[1];if(i.canHandle(t)){var c=o(i.serialize(t),2);return[{type:"HANDLER",name:u,value:c[0]},c[1]]}}}catch(l){n.e(l)}finally{n.f()}return[{type:"RAW",value:t},E.get(t)||[]]}function P(t){switch(t.type){case"HANDLER":return v.get(t.name).deserialize(t.value);case"RAW":return t.value}}function R(t,e,n){return new Promise((function(r){var a=new Array(4).fill(0).map((function(){return Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)})).join("-");t.addEventListener("message",(function e(n){n.data&&n.data.id&&n.data.id===a&&(t.removeEventListener("message",e),r(n.data))})),t.start&&t.start(),t.postMessage(Object.assign({id:a},e),n)}))}e.default={};g({nodes:[],edges:[],generateGraph:function(t,e,n){var r=void 0;try{for(var a=Array.from(new Int8Array(e)),o=a.length/(2*t.length),u=0;u<t.length;u++){var i={data:{id:t[u],width:50,height:20,color:"#000",level:4}};this.nodes.push(i)}for(var c=0;c<o;c++){var l=a.slice(c*t.length*2,c*t.length*2+2*t.length),f=5;(l.slice(t.length).every((function(t){return 0===t}))||l.slice(0,t.length).every((function(t){return 0===t})))&&(f=0);var s={data:{id:"".concat(c),label:"reaction",width:50,height:20,color:"#000",level:f}};this.nodes.push(s)}for(var d=0,p=0;p<a.length;p+=2*t.length)for(var y=a.slice(p,p+2*t.length),h=0;h<y.length;h++){var v={data:{id:"R".concat(y[h]).concat(p).concat(d++),label:"".concat(1!==y[h]?y[h]:""),source:"",target:""}};h<t.length?(v.data.source=t[h],v.data.target="".concat(p/(2*t.length)),v.data.educts=!0,y.slice(t.length).every((function(t){return 0===t}))&&(v.data.outflow=!0),y[h]>0&&this.edges.push(v)):(v.data.source="".concat(p/(2*t.length)),v.data.target=t[h-t.length],v.data.products=!0,y[h]>0&&this.edges.push(v))}}catch(g){r=g,console.error(g)}n(this.nodes,this.edges,r)}})}]);
//# sourceMappingURL=network.worker.8087369a.js.map