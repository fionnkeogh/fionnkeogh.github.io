var pe=Object.defineProperty;var we=(t,e,n)=>e in t?pe(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var V=(t,e,n)=>(we(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function w(){}function he(t){return t()}function ue(){return Object.create(null)}function L(t){t.forEach(he)}function ee(t){return typeof t=="function"}function B(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function _e(t){return Object.keys(t).length===0}function ye(t){return t&&ee(t.destroy)?t.destroy:w}function f(t,e){t.appendChild(e)}function G(t,e,n){t.insertBefore(e,n||null)}function M(t){t.parentNode&&t.parentNode.removeChild(t)}function c(t){return document.createElement(t)}function te(t){return document.createTextNode(t)}function p(){return te(" ")}function ve(){return te("")}function Q(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function m(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function be(t){return Array.from(t.childNodes)}function Se(t,e){e=""+e,t.data!==e&&(t.data=e)}function le(t,e){t.value=e??""}function $(t,e,n,s){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}function fe(t,e){return new t(e)}let ne;function k(t){ne=t}const O=[],de=[];let W=[];const ce=[],$e=Promise.resolve();let X=!1;function Ce(){X||(X=!0,$e.then(me))}function Z(t){W.push(t)}const Y=new Set;let H=0;function me(){if(H!==0)return;const t=ne;do{try{for(;H<O.length;){const e=O[H];H++,k(e),xe(e.$$)}}catch(e){throw O.length=0,H=0,e}for(k(null),O.length=0,H=0;de.length;)de.pop()();for(let e=0;e<W.length;e+=1){const n=W[e];Y.has(n)||(Y.add(n),n())}W.length=0}while(O.length);for(;ce.length;)ce.pop()();X=!1,Y.clear(),k(t)}function xe(t){if(t.fragment!==null){t.update(),L(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Z)}}function Ee(t){const e=[],n=[];W.forEach(s=>t.indexOf(s)===-1?e.push(s):n.push(s)),n.forEach(s=>s()),W=e}const D=new Set;let C;function Ne(){C={r:0,c:[],p:C}}function Pe(){C.r||L(C.c),C=C.p}function _(t,e){t&&t.i&&(D.delete(t),t.i(e))}function b(t,e,n,s){if(t&&t.o){if(D.has(t))return;D.add(t),C.c.push(()=>{D.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function S(t){t&&t.c()}function y(t,e,n){const{fragment:s,after_update:r}=t.$$;s&&s.m(e,n),Z(()=>{const i=t.$$.on_mount.map(he).filter(ee);t.$$.on_destroy?t.$$.on_destroy.push(...i):L(i),t.$$.on_mount=[]}),r.forEach(Z)}function v(t,e){const n=t.$$;n.fragment!==null&&(Ee(n.after_update),L(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Te(t,e){t.$$.dirty[0]===-1&&(O.push(t),Ce(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function z(t,e,n,s,r,i,o,u=[-1]){const l=ne;k(t);const a=t.$$={fragment:null,ctx:[],props:i,update:w,not_equal:r,bound:ue(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:ue(),dirty:u,skip_bound:!1,root:e.target||l.$$.root};o&&o(a.root);let g=!1;if(a.ctx=n?n(t,e.props||{},(d,x,...E)=>{const A=E.length?E[0]:x;return a.ctx&&r(a.ctx[d],a.ctx[d]=A)&&(!a.skip_bound&&a.bound[d]&&a.bound[d](A),g&&Te(t,d)),x}):[],a.update(),g=!0,L(a.before_update),a.fragment=s?s(a.ctx):!1,e.target){if(e.hydrate){const d=be(e.target);a.fragment&&a.fragment.l(d),d.forEach(M)}else a.fragment&&a.fragment.c();e.intro&&_(t.$$.fragment),y(t,e.target,e.anchor),me()}k(l)}class F{constructor(){V(this,"$$");V(this,"$$set")}$destroy(){v(this,1),this.$destroy=w}$on(e,n){if(!ee(n))return w;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(e){this.$$set&&!_e(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Je="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Je);function He(t){let e,n,s,r,i,o,u;return{c(){e=c("div"),n=c("input"),s=p(),r=c("label"),i=te(t[2]),m(n,"id",t[1]),m(n,"type","text"),m(n,"inputmode","numeric"),m(n,"pattern","[0-9]*"),$(n,"margin-left","140px"),$(n,"width","40px"),$(n,"box-shadow","none"),$(n,"border-bottom","none"),m(r,"for",t[1]),m(r,"style",t[3]),m(e,"class","input-field col s6")},m(l,a){G(l,e,a),f(e,n),le(n,t[0]),f(e,s),f(e,r),f(r,i),o||(u=[Q(n,"input",t[4]),Q(n,"invalid",t[5])],o=!0)},p(l,[a]){a&2&&m(n,"id",l[1]),a&1&&n.value!==l[0]&&le(n,l[0]),a&4&&Se(i,l[2]),a&2&&m(r,"for",l[1]),a&8&&m(r,"style",l[3])},i:w,o:w,d(l){l&&M(e),o=!1,L(u)}}}function Oe(t,e,n){let{id:s}=e,{value:r}=e,{label:i}=e,{style:o=""}=e;function u(){r=this.value,n(0,r)}const l=()=>alert("You must enter only numbers!");return t.$$set=a=>{"id"in a&&n(1,s=a.id),"value"in a&&n(0,r=a.value),"label"in a&&n(2,i=a.label),"style"in a&&n(3,o=a.style)},[r,s,i,o,u,l]}class j extends F{constructor(e){super(),z(this,e,Oe,He,B,{id:1,value:0,label:2,style:3})}}function We(t){let e,n,s,r,i,o,u,l,a,g,d,x,E,A,N,P,ie,T,re,K,oe,R,J,se,I,q,U,ae;return a=new j({props:{id:"x",value:Le,label:"Number of Columns:"}}),d=new j({props:{id:"y",value:Me,label:"Number of Rows:"}}),P=new j({props:{id:"macrophages",value:Ae,label:"Macrophages:"}}),T=new j({props:{id:"candida",value:Ie,label:"Candida:"}}),J=new j({props:{id:"steps",value:je,label:"Steps:",style:"padding-left: 170px;"}}),{c(){e=c("main"),n=c("h1"),n.textContent="Welcome to SCAM",s=p(),r=c("form"),i=c("div"),o=c("h5"),o.textContent="Size of the grid:",u=p(),l=c("div"),S(a.$$.fragment),g=p(),S(d.$$.fragment),x=p(),E=c("h5"),E.textContent="Number of Agents:",A=p(),N=c("div"),S(P.$$.fragment),ie=p(),S(T.$$.fragment),re=p(),K=c("h5"),K.textContent="Number of Steps to Simulate:",oe=p(),R=c("div"),S(J.$$.fragment),se=p(),I=c("div"),I.innerHTML=`<button class="btn waves-effect waves-light" type="submit" name="action">Submit
                <i class="material-icons right">send</i></button>`,m(l,"class","row"),m(N,"class","row"),m(R,"class","row"),m(I,"class","row"),$(I,"margin","10px")},m(h,ge){G(h,e,ge),f(e,n),f(e,s),f(e,r),f(r,i),f(i,o),f(i,u),f(i,l),y(a,l,null),f(l,g),y(d,l,null),f(i,x),f(i,E),f(i,A),f(i,N),y(P,N,null),f(N,ie),y(T,N,null),f(i,re),f(i,K),f(i,oe),f(i,R),y(J,R,null),f(r,se),f(r,I),q=!0,U||(ae=Q(r,"submit",t[0]),U=!0)},p:w,i(h){q||(_(a.$$.fragment,h),_(d.$$.fragment,h),_(P.$$.fragment,h),_(T.$$.fragment,h),_(J.$$.fragment,h),q=!0)},o(h){b(a.$$.fragment,h),b(d.$$.fragment,h),b(P.$$.fragment,h),b(T.$$.fragment,h),b(J.$$.fragment,h),q=!1},d(h){h&&M(e),v(a),v(d),v(P),v(T),v(J),U=!1,ae()}}}let Le=10,Me=10,Ae=3,Ie=5,je=100;function ke(t,e,n){let{openPage:s}=e,{pythonToJS:r}=e;function i(o){o.preventDefault();const u=[[Number(o.target[0].value),Number(o.target[1].value)],Number(o.target[3].value),Number(o.target[2].value),Number(o.target[4].value)];return pyodideGlobals.get("init_simulation")(u[0][0],u[0][1],u[1],u[2],u[3]),s(1),!1}return t.$$set=o=>{"openPage"in o&&n(1,s=o.openPage),"pythonToJS"in o&&n(2,r=o.pythonToJS)},[i,s,r]}class Be extends F{constructor(e){super(),z(this,e,ke,We,B,{openPage:1,pythonToJS:2})}}function Ge(t){let e,n,s;return{c(){e=c("canvas"),m(e,"id","view"),$(e,"border-style","solid"),$(e,"border-width","1px"),$(e,"border-color","black")},m(r,i){G(r,e,i),n||(s=ye(t[0].call(null,e)),n=!0)},p:w,i:w,o:w,d(r){r&&M(e),n=!1,s()}}}function ze(t,e,n){let{simulation:s}=e,{pythonToJS:r}=e,{updateSimulation:i}=e;function o(u){const l=initCanvas(),a=l.getContext("2d");loop(a,l);const g=r(s.get_grid_size()),d=new Grid(g.x,g.y,l.width,l.height);console.log(l.width),addCanvasObject(d),l.addEventListener("contextrestored",x=>{i()},!1)}return t.$$set=u=>{"simulation"in u&&n(1,s=u.simulation),"pythonToJS"in u&&n(2,r=u.pythonToJS),"updateSimulation"in u&&n(3,i=u.updateSimulation)},[o,s,r,i]}class Fe extends F{constructor(e){super(),z(this,e,ze,Ge,B,{simulation:1,pythonToJS:2,updateSimulation:3})}}function Re(t){let e,n,s;return n=new Fe({props:{simulation:t[1],pythonToJS:t[0],updateSimulation:t[2]}}),{c(){e=c("main"),S(n.$$.fragment)},m(r,i){G(r,e,i),y(n,e,null),s=!0},p(r,[i]){const o={};i&1&&(o.pythonToJS=r[0]),n.$set(o)},i(r){s||(_(n.$$.fragment,r),s=!0)},o(r){b(n.$$.fragment,r),s=!1},d(r){r&&M(e),v(n)}}}function qe(t,e){let n=getCanvasMacrophages();const s=[],r=[];e.forEach(i=>{s.push(i.id)}),n.forEach(i=>{r.push(i.id)}),n.forEach(i=>{s.find(o=>o===i.id)===void 0&&removeCanvasMacrophages(i)}),e.forEach(i=>{if(r.find(o=>o===i.id)===void 0){let o=(window.innerHeight<window.innerWidth?window.innerHeight:window.innerWidth)*.75,u=(window.innerHeight<window.innerWidth?window.innerHeight:window.innerWidth)*.75;addCanvasMacrophages(new Macrophage(i.id,i.x,i.y,o/t.x,u/t.y))}}),n=getCanvasMacrophages(),n.forEach(i=>{let o=e.find(u=>u.id===i.id);i.update(o.x,o.y)})}function De(t,e){let n=getCanvasCandida();const s=[],r=[];e.forEach(i=>{s.push(i.id)}),n.forEach(i=>{r.push(i.id)}),n.forEach(i=>{s.find(o=>o===i.id)===void 0&&removeCanvasCandida(i)}),e.forEach(i=>{if(r.find(o=>o===i.id)===void 0){let o=(window.innerHeight<window.innerWidth?window.innerHeight:window.innerWidth)*.75,u=(window.innerHeight<window.innerWidth?window.innerHeight:window.innerWidth)*.75;addCanvasCandida(new Candida(i.id,i.x,i.y,o/t.x,u/t.y))}}),n=getCanvasCandida(),n.forEach(i=>{i.update()})}function Ke(t,e){getCanvasCytokines().forEach(i=>{removeCanvasCytokines(i)});let s=(window.innerHeight<window.innerWidth?window.innerHeight:window.innerWidth)*.75,r=(window.innerHeight<window.innerWidth?window.innerHeight:window.innerWidth)*.75;for(let i=0;i<e.length;i++)for(let o=0;o<e[i].length;o++){const u=Number(e[i][o][1]),l=e[i][o][1];addCanvasCytokines(new Cytokine(l,o,i,s/t.x,r/t.y,u))}}function Ue(t,e,n){let{openPage:s}=e,{pythonToJS:r}=e;const i=pyodideGlobals.get("get_simulation")();function o(){const u=r(i.get_max_steps());if(r(i.get_current_step())<=u){const a=r(i.run_step()),g=r(i.get_grid_size());qe(g,a.macrophages),De(g,a.candida),Ke(g,a.c_grid),console.log(a)}}return t.$$set=u=>{"openPage"in u&&n(3,s=u.openPage),"pythonToJS"in u&&n(0,r=u.pythonToJS)},[r,i,o,s]}class Ve extends F{constructor(e){super(),z(this,e,Ue,Re,B,{openPage:3,pythonToJS:0})}}function Ye(t){let e,n,s;var r=t[1][t[0]];function i(o,u){return{props:{openPage:o[2],pythonToJS:Qe}}}return r&&(e=fe(r,i(t))),{c(){e&&S(e.$$.fragment),n=ve()},m(o,u){e&&y(e,o,u),G(o,n,u),s=!0},p(o,[u]){if(u&1&&r!==(r=o[1][o[0]])){if(e){Ne();const l=e;b(l.$$.fragment,1,0,()=>{v(l,1)}),Pe()}r?(e=fe(r,i(o)),S(e.$$.fragment),_(e.$$.fragment,1),y(e,n.parentNode,n)):e=null}},i(o){s||(e&&_(e.$$.fragment,o),s=!0)},o(o){e&&b(e.$$.fragment,o),s=!1},d(o){o&&M(n),e&&v(e,o)}}}function Qe(t){if(t.toString()!="None")return JSON.parse(t.toString().replaceAll(/'/g,'"'))}function Xe(t,e,n){const s=[Be,Ve];let r=0;function i(o){return n(0,r=o),r}return[r,s,i]}class Ze extends F{constructor(e){super(),z(this,e,Xe,Ye,B,{})}}new Ze({target:document.getElementById("app")});