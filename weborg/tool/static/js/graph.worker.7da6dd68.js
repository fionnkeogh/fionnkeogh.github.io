!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}function o(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=a(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return u=e.done,e},e:function(e){c=!0,i=e},f:function(){try{u||null==n.return||n.return()}finally{if(c)throw i}}}}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],i=!0,u=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(c){u=!0,a=c}finally{try{i||null==n.return||n.return()}finally{if(u)throw a}}return o}}(e,t)||a(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){return c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},c(e,t)}function l(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function s(e,t,n){return s=l()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var a=new(Function.bind.apply(e,r));return n&&c(a,n.prototype),a},s.apply(null,arguments)}function f(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||a(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.r(t);var d=Symbol("Comlink.proxy"),v=Symbol("Comlink.endpoint"),h=Symbol("Comlink.releaseProxy"),y=Symbol("Comlink.thrown"),p=function(e){return"object"===typeof e&&null!==e||"function"===typeof e},g=new Map([["proxy",{canHandle:function(e){return p(e)&&e[d]},serialize:function(e){var t=new MessageChannel,n=t.port1,r=t.port2;return m(e,n),[r,[r]]},deserialize:function(e){return e.start(),w(e,[],t);var t}}],["throw",{canHandle:function(e){return p(e)&&y in e},serialize:function(e){var t=e.value;return[t instanceof Error?{isError:!0,value:{message:t.message,name:t.name,stack:t.stack}}:{isError:!1,value:t},[]]},deserialize:function(e){if(e.isError)throw Object.assign(new Error(e.value.message),e.value);throw e.value}}]]);function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:self;t.addEventListener("message",(function n(r){if(r&&r.data){var a,o=Object.assign({path:[]},r.data),c=o.id,l=o.type,d=o.path,v=(r.data.argumentList||[]).map(P);try{var h=d.slice(0,-1).reduce((function(e,t){return e[t]}),e),p=d.reduce((function(e,t){return e[t]}),e);switch(l){case"GET":a=p;break;case"SET":h[d.slice(-1)[0]]=P(r.data.value),a=!0;break;case"APPLY":a=p.apply(h,v);break;case"CONSTRUCT":var g;a=j(s(p,f(v)));break;case"ENDPOINT":var S=new MessageChannel,w=S.port1,E=S.port2;m(e,E),a=A(w,[w]);break;case"RELEASE":a=void 0;break;default:return}}catch(g){a=u({value:g},y,0)}Promise.resolve(a).catch((function(e){return u({value:e},y,0)})).then((function(e){var r=i(_(e),2),a=r[0],o=r[1];t.postMessage(Object.assign(Object.assign({},a),{id:c}),o),"RELEASE"===l&&(t.removeEventListener("message",n),b(t))}))}})),t.start&&t.start()}function b(e){(function(e){return"MessagePort"===e.constructor.name})(e)&&e.close()}function S(e){if(e)throw new Error("Proxy has been released and is not useable")}function w(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},r=!1,a=new Proxy(n,{get:function(n,o){if(S(r),o===h)return function(){return k(e,{type:"RELEASE",path:t.map((function(e){return e.toString()}))}).then((function(){b(e),r=!0}))};if("then"===o){if(0===t.length)return{then:function(){return a}};var i=k(e,{type:"GET",path:t.map((function(e){return e.toString()}))}).then(P);return i.then.bind(i)}return w(e,[].concat(f(t),[o]))},set:function(n,a,o){S(r);var u=i(_(o),2),c=u[0],l=u[1];return k(e,{type:"SET",path:[].concat(f(t),[a]).map((function(e){return e.toString()})),value:c},l).then(P)},apply:function(n,a,o){S(r);var u=t[t.length-1];if(u===v)return k(e,{type:"ENDPOINT"}).then(P);if("bind"===u)return w(e,t.slice(0,-1));var c=i(E(o),2),l=c[0],s=c[1];return k(e,{type:"APPLY",path:t.map((function(e){return e.toString()})),argumentList:l},s).then(P)},construct:function(n,a){S(r);var o=i(E(a),2),u=o[0],c=o[1];return k(e,{type:"CONSTRUCT",path:t.map((function(e){return e.toString()})),argumentList:u},c).then(P)}});return a}function E(e){var t,n=e.map(_);return[n.map((function(e){return e[0]})),(t=n.map((function(e){return e[1]})),Array.prototype.concat.apply([],t))]}var O=new WeakMap;function A(e,t){return O.set(e,t),e}function j(e){return Object.assign(e,u({},d,!0))}function _(e){var t,n=o(g);try{for(n.s();!(t=n.n()).done;){var r=i(t.value,2),a=r[0],u=r[1];if(u.canHandle(e)){var c=i(u.serialize(e),2);return[{type:"HANDLER",name:a,value:c[0]},c[1]]}}}catch(l){n.e(l)}finally{n.f()}return[{type:"RAW",value:e},O.get(e)||[]]}function P(e){switch(e.type){case"HANDLER":return g.get(e.name).deserialize(e.value);case"RAW":return e.value}}function k(e,t,n){return new Promise((function(r){var a=new Array(4).fill(0).map((function(){return Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)})).join("-");e.addEventListener("message",(function t(n){n.data&&n.data.id&&n.data.id===a&&(e.removeEventListener("message",t),r(n.data))})),e.start&&e.start(),e.postMessage(Object.assign({id:a},t),n)}))}t.default={};m({nodes:[],edges:[],setGraph:function(e,t){this.nodes=e,this.edges=t},generateGraph:function(e,t,n){var r=this,a=void 0;if((void 0===this.nodes||0===this.nodes.length)&&(void 0===this.edges||0===this.edges.length))try{for(var i=new Array(e.length).fill(0),u=0;u<e.length;u++)i[e[u].length]=i[e[u].length]?i[e[u].length]+1:1;var c,l=1,s=o(e);try{for(s.s();!(c=s.n()).done;){var f=c.value,d=20,v="";0===f.length&&(v="{}, ");for(var h=0;h<f.length;h++)d+=12*t[f[h]].id.length,v+=t[f[h]].id+", ";var y=f.length,p={data:{id:"O".concat(l),label:"O".concat(l,": ").concat(y),normalWidth:50,all_species:v.substring(0,v.length-2),all_species_width:d,novelty_species:"",novelty_species_width:20,rank:y,height:20,color:"#000"},rank:y};this.nodes.push(p),l++}}catch(M){s.e(M)}finally{s.f()}var g,m=this.getOrgsSmallerContaining(e,t),b=m.edges,S=m.map,w=o(b);try{for(w.s();!(g=w.n()).done;){var E,O=o(g.value);try{for(O.s();!(E=O.n()).done;){var A=E.value,j={data:{id:"O".concat(A[0],"O").concat(A[1]),source:"O".concat(A[0]),target:"O".concat(A[1])}};this.edges.push(j)}}catch(M){O.e(M)}finally{O.f()}}}catch(M){w.e(M)}finally{w.f()}var _,P=o(S.keys());try{var k=function(){var e=_.value,t=r.nodes.find((function(t){return t.data.id===e})),n=r.nodes.findIndex((function(t){return t.data.id===e}));if(t&&n){var a=S.get(e);if(a){var i=20,u="";0===a.size&&(u=", ");var c,l=o(a);try{for(l.s();!(c=l.n()).done;){var s=c.value;i+=12*s.id.length,u+=s.id+", "}}catch(M){l.e(M)}finally{l.f()}t.data.novelty_species=u.substring(0,u.length-2),t.data.novelty_species_width=i}r.nodes[n]=t}};for(P.s();!(_=P.n()).done;)k()}catch(M){P.e(M)}finally{P.f()}}catch(M){a=M,console.error(M)}n(this.nodes,this.edges,a)},getOrgsSmallerContaining:function(e,t){var n,r=this,a=[],i=new Map,u=[],c=1,l=o(e);try{for(l.s();!(n=l.n()).done;){var s,f=n.value,d=new Set(f),v=[],h=o(e);try{for(h.s();!(s=h.n()).done;){var y=s.value,p=new Set(y);f.length>y.length&&this.isSuperset(d,p)&&v.push(p)}}catch(j){h.e(j)}finally{h.f()}u.push(v);for(var g=new Set,m=0;m<f.length;m++)g.add(t[f[m]]);i.set("O".concat(c),g),c++}}catch(j){l.e(j)}finally{l.f()}for(var b=0;b<u.length;b++){var S,w=u[b],E=[],O=o(w);try{var A=function(){var n,a=S.value,u=!1,c=o(w);try{for(c.s();!(n=c.n()).done;){var l=n.value;r.isEqual(a,l)||r.isSuperset(l,a)&&(u=!0)}}catch(j){c.e(j)}finally{c.f()}if(!u){var s=i.get("O".concat(b+1)),f=e.find((function(e){return r.isEqual(new Set(e),a)})),d=new Set;if(f){for(var v=0;v<f.length;v++)d.add(t[f[v]]);var h,y=o(d);try{for(y.s();!(h=y.n()).done;){var p=h.value;null!==s&&void 0!==s&&s.has(p)&&s.delete(p)}}catch(j){y.e(j)}finally{y.f()}}s&&i.set("O".concat(b+1),s),E.push([b+1,e.findIndex((function(e){return r.isEqual(new Set(e),a)}))+1])}};for(O.s();!(S=O.n()).done;)A()}catch(j){O.e(j)}finally{O.f()}a.push(E)}return{edges:a,map:i}},isSuperset:function(e,t){var n,r=o(t);try{for(r.s();!(n=r.n()).done;){var a=n.value;if(!1===e.has(a))return!1}}catch(i){r.e(i)}finally{r.f()}return!0},isEqual:function(e,t){if(e.size!==t.size)return!1;var n,r=o(e);try{for(r.s();!(n=r.n()).done;){var a=n.value;if(!1===t.has(a))return!1}}catch(i){r.e(i)}finally{r.f()}return!0}})}]);
//# sourceMappingURL=graph.worker.7da6dd68.js.map