(this.webpackJsonpweborg=this.webpackJsonpweborg||[]).push([[0],{379:function(e,t){},381:function(e,t){},396:function(e,t){},398:function(e,t){},426:function(e,t){},428:function(e,t){},429:function(e,t){},434:function(e,t){},436:function(e,t){},442:function(e,t){},444:function(e,t){},463:function(e,t){},475:function(e,t){},478:function(e,t){},664:function(e,t,n){"use strict";n.r(t);var r,a,o=n(0),i=n.n(o),c=n(50),s=n.n(c),u=n(93);!function(e){e[e.XML=0]="XML",e[e.REA=1]="REA"}(r||(r={})),function(e){e[e.ORGNAMES=0]="ORGNAMES",e[e.NOVELTY=1]="NOVELTY",e[e.ALLSPECIES=2]="ALLSPECIES"}(a||(a={}));var l={text:"# Minimal example from Peter Dittrich and Pietro Speroni di Fenizio\n# From 'Chemical Organisation Theory', Bulletin of Mathematical Biology (2007) 69: 1199\u20131231 \n# [accessed Sep. 24 2021]\n# Number of Components\n4\n# Components\nA\nB\nC\nD\n# Number of Reactions\n8\n# Reactions\n1 A 1 B -> 1 A 2 B\n1 A 1 D -> 1 A 2 D\n1 B -> \n1 B 1 C -> 2 C\n1 B 1 D -> 1 C\n1 C -> \n1 C -> 1 B\n1 D -> \n",changedText:!0,core:1,verbose:!1,running:0,currentWindow:"Editor",currentFileType:r.REA,hash:[],networkGraph:[],latticeGraph:[],orgList:[],nodeView:a.ALLSPECIES},d=Object(u.b)({name:"app",initialState:l,reducers:{setText:function(e,t){e.text=t.payload,e.currentFileType="#"===t.payload.split("\n")[0][0]?r.REA:r.XML},setChangedText:function(e,t){e.changedText=t.payload},toggleVerbose:function(e,t){e.verbose=t.payload},setRunning:function(e,t){e.running+=t.payload},setCurrentWindow:function(e,t){e.currentWindow=t.payload},setNetworkGraph:function(e,t){e.networkGraph=t.payload},setLatticeGraph:function(e,t){e.latticeGraph=t.payload},setOrgList:function(e,t){e.orgList=new Array(t.payload).fill(!1)},toggleOrgList:function(e,t){e.orgList[t.payload]=!e.orgList[t.payload]},setNodeView:function(e,t){e.nodeView=t.payload},clearAppState:function(e){console.log("ClearedAppState"),e.text="",e.hash=[],e.networkGraph=[],e.latticeGraph=[],e.orgList=[]}}}),p=d.reducer,h=d.actions,f=h.setText,b=h.setChangedText,j=h.toggleVerbose,g=h.setRunning,x=h.setCurrentWindow,O=h.setNetworkGraph,m=h.setLatticeGraph,v=h.setOrgList,y=h.toggleOrgList,k=h.setNodeView,w=h.clearAppState,S=n(17),C=Object(u.b)({name:"network",initialState:{species:{},reactions:{},SOsToCheck:[],semiOrganisations:[],organizations:[]},reducers:{setSpecies:function(e,t){e.species=t.payload},setReaction:function(e,t){e.reactions=t.payload},addSOtoCheck:function(e,t){var n=t.payload,r=Array.from(e.SOsToCheck);r.push.apply(r,Object(S.a)(n)),e.SOsToCheck=r},removeAtIndex:function(e,t){var n=Array.from(e.SOsToCheck),r=t.payload[0]+t.payload[1]+1;n.splice(t.payload[0],r),e.SOsToCheck=n},setSemiOrganizations:function(e,t){e.semiOrganisations=t.payload},setOrganizations:function(e,t){e.organizations=t.payload},clearState:function(e){e.reactions={},e.species={},e.SOsToCheck=[],e.semiOrganisations=[],e.organizations=[]}}}),L=C.reducer,_=C.actions,A=_.setSpecies,N=_.setReaction,R=(_.addSOtoCheck,_.setSemiOrganizations),E=_.setOrganizations,I=(_.removeAtIndex,_.clearState),T=Object(u.a)({reducer:{app_reducer:p,network_reducer:L},middleware:function(e){return e({serializableCheck:!1,immutableCheck:!1})}}),z=n(111),G=n(13),F=n(336),B=n(6),P=n(19),W=n(724),M=n(5),D=Object(M.a)(W.a,{shouldForwardProp:function(e){return"open"!==e}})((function(e){var t=e.theme,n=e.open;return Object(P.a)({zIndex:t.zIndex.drawer+1,backgroundColor:"#008198",transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen})},n&&{marginLeft:280,width:"calc(100% - ".concat(280,"px)"),transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen})})})),V=n(352),H=n(723),X=n(731),Y=n(710),J=n(732),q=n(733),K=n(115),Q=n(734),U=n(711),Z=n(735),$=n(715),ee=n(736),te=n(722),ne=n(725),re=n(712),ae=n(737),oe=n(349),ie=n.n(oe),ce=n(351),se=n.n(ce),ue=n(350),le=n.n(ue),de=n(720),pe=n(717),he=n(702),fe=n(700),be=n(112),je=n.n(be),ge=n(113),xe=n.n(ge),Oe=n(341),me=n.n(Oe),ve=n(344),ye=n.n(ve),ke=n(345),we=n.n(ke),Se=n(346),Ce=n.n(Se),Le=n(156),_e=n.n(Le),Ae=n(343),Ne=n.n(Ae),Re=n(211),Ee=n.n(Re),Ie=n(209),Te=n.n(Ie),ze=n(210),Ge=n.n(ze),Fe=n(342),Be=n.n(Fe),Pe=function(){return Object(z.b)()},We=z.c,Me=n(726),De=n(727),Ve=n(51),He=n.n(Ve),Xe=n(147),Ye=n(148),Je=function(){function e(t,n){Object(Xe.a)(this,e),this.hashString="",this.cardinality=void 0,this.species=void 0,this.booleanArray=void 0,this.species=t,this.cardinality=t.length,this.booleanArray=new Array(n).fill(!1);for(var r=0,a=t.length;r<a;r++){var o=t[r].index;this.booleanArray[o]=!0}this.hashString=this.arrayToString()}return Object(Ye.a)(e,[{key:"hasSpecies",value:function(e){return this.booleanArray[e.index]}},{key:"addSpecies",value:function(e){return!1===this.hasSpecies(e)&&(this.species.push(e),this.cardinality=this.species.length,this.booleanArray[e.index]=!0,this.hashString=this.arrayToString(),!0)}},{key:"getSpecies",value:function(e){return this.species[e]}},{key:"getSpeciesFromID",value:function(e){for(var t=0;t<this.cardinality;t++)if(this.species[t].index===e)return this.species[t];return this.species[0]}},{key:"getHashString",value:function(){return this.hashString}},{key:"getBooleanArray",value:function(){return this.booleanArray}},{key:"getCardinality",value:function(){return this.cardinality}},{key:"toString",value:function(){for(var e="{",t=0,n=this.cardinality;t<n;t++)e=e+" ["+this.species[t].toString()+"]";return e+=" }"}},{key:"arrayToString",value:function(){for(var e="",t=0,n=this.booleanArray.length;t<n;t++)!0===this.booleanArray[t]?e+="1":e+="0";return e}}]),e}();var qe=function(e,t,n,r){var a="";return e.forEach((function(e){var o=t.findIndex((function(t){return t===e.uid}));a="".concat(a," ").concat(e.uid,"[").concat(n[o+r],"]")})),a.trimStart()};var Ke=n(338),Qe=n.n(Ke);var Ue=function(e){var t={},n={},r=0;try{var a=JSON.parse(Qe.a.xml2json(e,{compact:!0,spaces:4}));a.sbml.model.listOfSpecies.species.forEach((function(e){var n={uid:e._attributes.id,id:e._attributes.name,index:r++,meta:{compartement:e._attributes.compartment}};t["".concat(n.uid)]=n}));var o=Object.keys(t),i=0;a.sbml.model.listOfReactions.reaction.forEach((function(e){var r=[],a=[],c=new Array(2*o.length).fill(0);if(e.listOfReactants){try{e.listOfReactants.speciesReference.forEach((function(e){r.push(t[e._attributes.species]);var n=o.findIndex((function(t){return t===e._attributes.species}));c[n]=e._attributes.stoichiometry?Number.parseFloat(e._attributes.stoichiometry):1}))}catch(f){}if(0===r.length){var s=e.listOfReactants.speciesReference;r.push(t[s._attributes.species]);var u=o.findIndex((function(e){return e===s._attributes.species}));c[u]=s._attributes.stoichiometry?Number.parseFloat(s._attributes.stoichiometry):1}}if(e.listOfProducts){try{e.listOfProducts.speciesReference.forEach((function(e){a.push(t[e._attributes.species]);var n=o.findIndex((function(t){return t===e._attributes.species}));c[o.length+n]=e._attributes.stoichiometry?Number.parseFloat(e._attributes.stoichiometry):1}))}catch(b){}if(0===a.length){var l=e.listOfProducts.speciesReference;a.push(t[l._attributes.species]);var d=o.findIndex((function(e){return e===l._attributes.species}));c[o.length+d]=l._attributes.stoichiometry?Number.parseFloat(l._attributes.stoichiometry):1}}var p=function(e,t){var n="";return e.forEach((function(e){var r=o.findIndex((function(t){return t===e.uid}));n="".concat(n," ").concat(e.uid,"[").concat(c[r+t],"]")})),n.trimStart()},h={index:i++,uid:"".concat(p(r,0)," -> ").concat(p(a,o.length)),reversable:JSON.parse(e._attributes.reversible),reactants:new Je(r,o.length),products:new Je(a,o.length),stoichiometry:c};n["".concat(h.uid)]=h}))}catch(c){console.warn(c)}return{species:t,reactions:n}};function Ze(){var e=T.getState().app_reducer,t=e.text,n=e.currentFileType===r.REA?function(e){for(var t={},n={},r=e.split("\n"),a=0,o=0,i=0,c="",s=0;s<r.length;s++){var u=r[s].trim();if("#"===u[0]&&(c=u),u.includes("# Number of Components"))a=Number.parseInt(r[s+1]);else if(u.includes("# Number of Reactions"))Number.parseInt(r[s+1]);else{for(;c.includes("# Components")&&!u.includes("# Components");){var l=r[s];if("#"===l[0]){c=l;break}if(void 0===l)break;if(0!==l.length){var d={uid:l,id:l,index:o++,meta:{}};t["".concat(d.uid)]=d,s++}else s++}for(var p=function(){var e=r[s];if(void 0===e)return"break";if(0===e.length)return s++,"continue";for(var o=Object.keys(t),u=[],l=[],d=new Array(2*a).fill(0),p=e.split("->").map((function(e){return e.trim().split(" ")})),h=Object(G.a)(p,2),f=h[0],b=h[1],j=function(e){var n=f[e];if(0===n.length)return"continue";if(e%2===0){var r=o.findIndex((function(t){return t===f[e+1]}));d[r]=Number.parseFloat(n)}else u.push(t["".concat(n)])},g=0;g<f.length;g++)j(g);for(var x=function(e){var n=b[e];if(0===n.length)return"continue";if(e%2===0){var r=o.findIndex((function(t){return t===b[e+1]}));d[a+r]=Number.parseFloat(n)}else l.push(t["".concat(n)])},O=0;O<b.length;O++)x(O);var m={index:i++,uid:"".concat(qe(u,o,d,0)," -> ").concat(qe(l,o,d,a)),reversable:!1,reactants:new Je(u,a),products:new Je(l,a),stoichiometry:d};if(n["".concat(m.uid)]=m,"#"===e[0])return c=e,"break";s++};c.includes("# Reactions")&&!u.includes("# Reactions");){if("break"===p())break}}}return{species:t,reactions:n}}(t):Ue(t),a=n.species,o=n.reactions;T.dispatch(b(!1)),T.dispatch(A(a)),T.dispatch(N(o))}var $e=n(32);function et(){return new Worker(n.p+"static/js/network.worker.8087369a.js")}function tt(e,t,n){n?alert(n+"\n\nCheck the console for more information."):(T.dispatch(O([].concat(Object(S.a)(e),Object(S.a)(t)))),T.dispatch(g(-1)))}var nt=n(55);function rt(e,t){for(var n=0;n<t.length;n++)if(t[n]>0&&1!==e[n])return!1;return!0}function at(e,t,n,r,a){for(var o=0,i=1,c=0;c<r.length;c++)rt(e.slice(1),r[c].stoichiometry.slice(0,n.length))&&o++;if(o>0){var s=function(e,t){return{name:t,options:{presol:!0,msglev:e.GLP_MSG_OFF},objective:{direction:e.GLP_MAX,name:"obj",vars:[]},subjectTo:[],bounds:[]}}(a,"linear_programming_problem"),u=[],l=[],d=[];!function(e,t){for(var n=0;n<t;n++){var r;e.objective.vars.push({name:"r".concat(n),coef:0}),null===(r=e.bounds)||void 0===r||r.push({name:"r".concat(n),type:0,ub:0,lb:0})}}(s,o);for(var p=0;p<o;p++)st(s,p,a.GLP_LO,1,0),lt(s,p,0);for(var h=0,f=1;f<=n.length;f++)if(0!==e[f]){for(var b=0,j=0;j<r.length;j++)rt(e.slice(1),r[j].stoichiometry.slice(0,n.length))&&(r[j].stoichiometry.slice(0,n.length)!==r[j].stoichiometry.slice(n.length)&&(i++,u.push(h),l.push(b),d.push(r[j].stoichiometry.slice(n.length)[f-1]-r[j].stoichiometry.slice(0,n.length)[f-1])),b++);h++}!function(e,t){for(var n=0;n<t;n++){for(var r=new Array(e.objective.vars.length),a=0;a<r.length;a++)r[a]={name:"r".concat(a),coef:0};e.subjectTo.push({name:"s".concat(n),vars:r,bnds:{type:0,ub:0,lb:0}})}}(s,h);for(var g=0;g<h;g++)ut(s,g,a.GLP_LO,0,0);!function(e,t,n,r,a){for(var o=0;o<t;o++)e.subjectTo[n[o]].vars[r[o]].coef=a[o]}(s,i-1,u,l,d);var x=a.solve(s);return!(1===x.result.status||3===x.result.status||4===x.result.status)?ot(e,r,n,t):void 0}return ot(e,r,n,t)}function ot(e,t,n,r){for(var a={id:"O".concat(r),species:[],reactions:ct(e,t,n),stoichiometry:it(e,t,n)},o=1;o<e.length;o++)0!==e[o]&&a.species.push(n[o-1]);return a}function it(e,t,n){var r,a=[],o=Object(nt.a)(t);try{for(o.s();!(r=o.n()).done;){for(var i=r.value,c=i.stoichiometry.slice(0,n.length),s=i.stoichiometry.slice(n.length,2*n.length),u=[],l=0;l<c.length;l++)u.push(s[l]-c[l]);a.push(u)}}catch(d){o.e(d)}finally{o.f()}return a=function(e){for(var t,n=e.length,r=0|(null===(t=e[0])||void 0===t?void 0:t.length),a=[],o=0;o<r;o++)a[o]=Array(n);for(var i=0;i<n;i++)for(var c=0;c<r;c++)a[c][i]=e[i][c];return a}(a),a}function ct(e,t,n){var r,a=[],o=Object(nt.a)(t);try{for(o.s();!(r=o.n()).done;){var i=r.value,c=i.stoichiometry.slice(0,n.length);rt(e.slice(1),c)&&a.push(i)}}catch(s){o.e(s)}finally{o.f()}return a}function st(e,t,n,r,a){e.bounds&&(e.bounds[t].type=n,e.bounds[t].lb=r,e.bounds[t].ub=a)}function ut(e,t,n,r,a){e.subjectTo[t].bnds.type=n,e.subjectTo[t].bnds.lb=r,e.subjectTo[t].bnds.ub=a}function lt(e,t,n){e.objective.vars[t].coef=n}function dt(){return new Worker(n.p+"static/js/organization.worker.87d488a9.js")}function pt(e){T.dispatch(g(1));var t=T.getState(),n=t.app_reducer.verbose;console.time("calculateOrganizations");var r=Object.values(t.network_reducer.species),a=Object.values(t.network_reducer.reactions);$e.b(new dt).calculateOrganizations(e,n,r,a,$e.a(ht))}function ht(e,t,r){r&&alert(r+"\n\nCheck the console for more information."),n(391).then((function(n){for(var r=T.getState(),a=Object.values(r.network_reducer.species),o=Object.values(r.network_reducer.reactions),i=a.length,c=[],s=[],u=0;u<e.length;u+=i+1){var l=e.slice(u,u+i+1),d=s.length+1;c.push({id:"SO".concat(u/(i+1)),species:ft(l,a),reactions:bt(l,o,a),stoichiometry:gt(l,o,a)});var p=at(l,d,a,o,n);p&&(t&&console.log(p),s.push(p))}T.dispatch(R(c)),T.dispatch(E(s)),T.dispatch(v(s.length)),T.dispatch(g(-1)),t&&console.log(T.getState()),console.timeEnd("calculateOrganizations")}))}function ft(e,t){for(var n=[],r=1;r<e.length;r++)0!==e[r]&&n.push(t[r-1]);return n}function bt(e,t,n){var r,a=[],o=Object(nt.a)(t);try{for(o.s();!(r=o.n()).done;){var i=r.value,c=i.stoichiometry.slice(0,n.length);jt(e.slice(1),c)&&a.push(i)}}catch(s){o.e(s)}finally{o.f()}return a}function jt(e,t){for(var n=0;n<t.length;n++)if(t[n]>0&&1!==e[n])return!1;return!0}function gt(e,t,n){var r,a=[],o=Object(nt.a)(t);try{for(o.s();!(r=o.n()).done;){for(var i=r.value,c=i.stoichiometry.slice(0,n.length),s=i.stoichiometry.slice(n.length,2*n.length),u=[],l=0;l<c.length;l++)u.push(s[l]-c[l]);a.push(u)}}catch(d){o.e(d)}finally{o.f()}return a=function(e){for(var t,n=e.length,r=0|(null===(t=e[0])||void 0===t?void 0:t.length),a=[],o=0;o<r;o++)a[o]=Array(n);for(var i=0;i<n;i++)for(var c=0;c<r;c++)a[c][i]=e[i][c];return a}(a),a}function xt(){return new Worker(n.p+"static/js/graph.worker.15f60e55.js")}function Ot(e,t){T.dispatch(g(1));var n=T.getState().network_reducer,r=Object.values(n.species),a=n.organizations.map((function(e){return function(e,t){var n,r=[],a=Object(nt.a)(e);try{for(a.s();!(n=a.n()).done;){var o=n.value;r.push(vt(o,t))}}catch(i){a.e(i)}finally{a.f()}return r}(e.species,r)})),o=$e.b(new xt);e&&t&&o.setGraph(e,t),o.generateGraph(a,r,$e.a(mt))}function mt(e,t,n){n?alert(n+"\n\nCheck the console for more information."):(T.dispatch(m([].concat(Object(S.a)(e),Object(S.a)(t)))),T.dispatch(g(-1)))}function vt(e,t){return t.findIndex((function(t){return t.uid===e.uid}))}function yt(){return new Worker(n.p+"static/js/orgml.worker.421488cd.js")}function kt(e){var t=new Blob([e],{type:"text/plain;charset=utf-8"});He.a.saveAs(t,"orgml_org.xml"),T.dispatch(g(-1))}function wt(){return new Worker(n.p+"static/js/lattice.worker.e80a59d2.js")}function St(e){var t=new Blob([e],{type:"text/plain;charset=utf-8"});He.a.saveAs(t,"lattice.ltc"),T.dispatch(g(-1))}function Ct(){var e=T.getState().app_reducer,t=e.text;e.currentFileType===r.REA?function(e){var t=new Blob([e],{type:"text/plain;charset=utf-8"});He.a.saveAs(t,"Network.rea")}(t):function(e){var t=new Blob([e],{type:"text/plain;charset=utf-8"});He.a.saveAs(t,"Network.xml")}(t)}var Lt=n(705),_t=n(339),At=n.n(_t),Nt=n(1),Rt="#002350",Et="#33393961";function It(e){var t=Pe(),n=We((function(e){return e.app_reducer.currentWindow})),r=We((function(e){return e.network_reducer.organizations.length})),a=We((function(e){return e.app_reducer.latticeGraph.length})),o=We((function(e){return e.app_reducer.networkGraph.length})),c=We((function(e){return e.app_reducer.changedText})),s=i.a.useState(!0),u=Object(G.a)(s,2),l=u[0],d=u[1],p=i.a.useState(!1),h=Object(G.a)(p,2),j=h[0],O=h[1],m=i.a.useState(!1),v=Object(G.a)(m,2),y=v[0],k=v[1],S=i.a.useState(!1),C=Object(G.a)(S,2),L=C[0],_=C[1],A=function(e){t(x(e)),"Editor"===e?(d(!0),O(!1),k(!1),_(!1)):"Reaction Network"===e?(d(!1),O(!0),k(!1),_(!1)):"Lattice"===e?(d(!1),O(!1),k(!0),_(!1)):(d(!1),O(!1),k(!1),_(!0))},N=function(e){return n===e?Object(Nt.jsx)(fe.a,{primary:e,sx:{color:Rt}}):Object(Nt.jsx)(fe.a,{primary:e,sx:{color:Et}})},R=function(e,t){return n===e?Object(Nt.jsx)(he.a,{sx:{color:Rt},children:t}):Object(Nt.jsx)(he.a,{sx:{color:Et},children:t})};return Object(Nt.jsxs)(Me.a,{children:[Object(Nt.jsxs)(pe.a,{button:!0,onClick:function(){A("Editor")},children:[R("Editor",Object(Nt.jsx)(me.a,{})),N("Editor"),l?Object(Nt.jsx)(je.a,{sx:{color:Rt}}):Object(Nt.jsx)(xe.a,{sx:{color:Et}})]}),Object(Nt.jsx)(De.a,{in:l,timeout:"auto",unmountOnExit:!0,children:Object(Nt.jsxs)(Me.a,{component:"div",disablePadding:!0,children:[Object(Nt.jsxs)(pe.a,{button:!0,sx:{pl:4},onClick:function(){At()({multiple:!1,accept:[".rea","text/xml"]},(function(e){e[0].text().then((function(e){t(I()),t(w()),t(b(!0)),t(f(e))}))}))},children:[Object(Nt.jsx)(he.a,{sx:{color:Rt},children:Object(Nt.jsx)(Be.a,{})}),Object(Nt.jsx)(fe.a,{primary:"Open File",sx:{color:Rt}})]}),Object(Nt.jsxs)(pe.a,{button:!0,sx:{pl:4},onClick:function(){return Ct()},children:[Object(Nt.jsx)(he.a,{sx:{color:Rt},children:Object(Nt.jsx)(_e.a,{})}),Object(Nt.jsx)(fe.a,{primary:"Save File",sx:{color:Rt}})]}),Object(Nt.jsxs)(pe.a,{disabled:!0,button:!0,sx:{pl:4},onClick:function(){return Ct()},children:[Object(Nt.jsx)(he.a,{sx:{color:Rt},children:Object(Nt.jsx)(Ne.a,{})}),Object(Nt.jsx)(fe.a,{primary:"Convert File",sx:{color:Rt}})]}),Object(Nt.jsxs)(pe.a,{button:!0,sx:{pl:4},onClick:function(){return Ze()},children:[Object(Nt.jsx)(he.a,{sx:{color:c?"#BC4A09":Rt},children:Object(Nt.jsx)(Lt.a,{})}),Object(Nt.jsx)(fe.a,{primary:"Read",sx:{color:c?"#BC4A09":Rt}})]})]})}),Object(Nt.jsxs)(pe.a,{button:!0,onClick:function(){A("Reaction Network")},children:[R("Reaction Network",Object(Nt.jsx)(ye.a,{})),N("Reaction Network"),j?Object(Nt.jsx)(je.a,{sx:{color:Rt}}):Object(Nt.jsx)(xe.a,{sx:{color:Et}})]}),Object(Nt.jsx)(De.a,{in:j,timeout:"auto",unmountOnExit:!0,children:Object(Nt.jsxs)(Me.a,{component:"div",disablePadding:!0,children:[Object(Nt.jsxs)(pe.a,{button:!0,sx:{pl:4},onClick:function(){!function(){T.dispatch(g(1));var e=T.getState().network_reducer,t=Object.keys(e.species),n=new Int8Array(Object.values(e.reactions).map((function(e){return Array.from(e.stoichiometry)})).flat());$e.b(new et).generateGraph(t,n.buffer,$e.a(tt))}()},children:[Object(Nt.jsx)(he.a,{sx:{color:Rt},children:Object(Nt.jsx)(Te.a,{})}),Object(Nt.jsx)(fe.a,{primary:"Draw Network Graph",sx:{color:Rt}})]}),Object(Nt.jsxs)(pe.a,{disabled:!(o>0),button:!0,sx:{pl:4},onClick:function(){return e.saveNetworkImage()},children:[Object(Nt.jsx)(he.a,{sx:{color:Rt},children:Object(Nt.jsx)(Ge.a,{})}),Object(Nt.jsx)(fe.a,{primary:"Save Image",sx:{color:Rt}})]})]})}),Object(Nt.jsxs)(pe.a,{button:!0,onClick:function(){A("Lattice")},children:[R("Lattice",Object(Nt.jsx)(we.a,{style:{transform:"rotate(90deg)"}})),N("Lattice"),y?Object(Nt.jsx)(je.a,{sx:{color:Rt}}):Object(Nt.jsx)(xe.a,{sx:{color:Et}})]}),Object(Nt.jsx)(De.a,{in:y,timeout:"auto",unmountOnExit:!0,children:Object(Nt.jsxs)(Me.a,{component:"div",disablePadding:!0,children:[Object(Nt.jsxs)(pe.a,{disabled:!(r>0),button:!0,sx:{pl:4},onClick:function(){Ot()},children:[Object(Nt.jsx)(he.a,{sx:{color:Rt},children:Object(Nt.jsx)(Te.a,{})}),Object(Nt.jsx)(fe.a,{primary:"Draw Lattice",sx:{color:Rt}})]}),Object(Nt.jsxs)(pe.a,{disabled:!(a>0),button:!0,sx:{pl:4},onClick:function(){!function(){T.dispatch(g(1));var e=T.getState(),t=e.network_reducer.organizations,n=e.app_reducer.latticeGraph.slice(t.length);$e.b(new wt).generateLatticeString(t,n,$e.a(St))}()},children:[Object(Nt.jsx)(he.a,{sx:{color:Rt},children:Object(Nt.jsx)(_e.a,{})}),Object(Nt.jsx)(fe.a,{primary:"Save Lattice",sx:{color:Rt}})]}),Object(Nt.jsxs)(pe.a,{disabled:!(a>0),button:!0,sx:{pl:4},onClick:function(){return e.saveLatticeImage()},children:[Object(Nt.jsx)(he.a,{sx:{color:Rt},children:Object(Nt.jsx)(Ge.a,{})}),Object(Nt.jsx)(fe.a,{primary:"Save Image",sx:{color:Rt}})]})]})}),Object(Nt.jsxs)(pe.a,{button:!0,onClick:function(){A("Organizations")},children:[R("Organizations",Object(Nt.jsx)(Ce.a,{})),N("Organizations"),L?Object(Nt.jsx)(je.a,{sx:{color:Rt}}):Object(Nt.jsx)(xe.a,{sx:{color:Et}})]}),Object(Nt.jsx)(De.a,{in:L,timeout:"auto",unmountOnExit:!0,children:Object(Nt.jsxs)(Me.a,{component:"div",disablePadding:!0,children:[Object(Nt.jsxs)(pe.a,{button:!0,sx:{pl:4},onClick:function(){pt(!1)},children:[Object(Nt.jsx)(he.a,{sx:{color:Rt},children:Object(Nt.jsx)(Ee.a,{})}),Object(Nt.jsx)(fe.a,{primary:"Find Organizations",sx:{color:Rt}})]}),Object(Nt.jsxs)(pe.a,{button:!0,sx:{pl:4},onClick:function(){pt(!0)},children:[Object(Nt.jsx)(he.a,{sx:{color:Rt},children:Object(Nt.jsx)(Ee.a,{})}),Object(Nt.jsx)(fe.a,{primary:"Find Connected Orgs",sx:{color:Rt}})]}),Object(Nt.jsxs)(pe.a,{disabled:!(r>0&&a>0),button:!0,sx:{pl:4},onClick:function(){!function(){T.dispatch(g(1));var e=T.getState(),t=e.network_reducer.organizations,n=e.app_reducer.latticeGraph.slice(t.length);$e.b(new yt).generateOrgMLString(t,n,$e.a(kt))}()},children:[Object(Nt.jsx)(he.a,{sx:{color:Rt},children:Object(Nt.jsx)(_e.a,{})}),Object(Nt.jsx)(fe.a,{primary:"Save Organizations",sx:{color:Rt}})]})]})})]})}var Tt=n(214),zt=n(353);function Gt(){var e=Pe(),t=Object(Tt.b)(),n=We((function(e){return e.app_reducer.text})),a=r[We((function(e){return e.app_reducer.currentFileType}))].toString().toLowerCase(),i=Object(o.useCallback)((function(n){n.forEach((function(n){var a=new FileReader;a.onabort=function(){return console.log("file reading was aborted")},a.onerror=function(){return console.log("file reading has failed")},a.onload=function(){var n=new TextDecoder("utf-8"),o=a.result;o instanceof ArrayBuffer&&function(n){console.log("ClearedNetworkState"),e(I()),e(w()),e(b(!0)),e(f(n)),null===t||void 0===t||t.editor.setTheme("org-theme-".concat(r[T.getState().app_reducer.currentFileType].toLowerCase()))}(n.decode(o))},a.readAsArrayBuffer(n)}))}),[e,null===t||void 0===t?void 0:t.editor]),c=Object(zt.a)({onDrop:i,noClick:!0}),s=c.getRootProps,u=c.getInputProps;return Object(Nt.jsxs)("div",Object(P.a)(Object(P.a)({},s()),{},{style:{height:"100%"},children:[Object(Nt.jsx)("input",Object(P.a)({},u())),Object(Nt.jsx)(Tt.a,{width:"100%",height:"100%",theme:"org-theme-".concat(a),options:{minimap:{enabled:!1}},defaultLanguage:a,onChange:function(n,a){n&&(e(b(!0)),e(f(n)),console.log("org-theme-".concat(r[T.getState().app_reducer.currentFileType].toLowerCase())),null===t||void 0===t||t.editor.setTheme("org-theme-".concat(r[T.getState().app_reducer.currentFileType].toLowerCase())))},beforeMount:function(e){e.languages.register({id:"rea"}),e.languages.setMonarchTokensProvider("rea",{tokenizer:{root:[[/->/,"reaction"],[/# Components/,"components"],[/# Number of Components/,"component-count"],[/# Reactions/,"reactions"],[/# Number of Reactions/,"reaction-count"],[/[0-9.]+ /,"stoichiometry"],[/#.*/,"comment"]]}}),e.editor.defineTheme("org-theme-rea",{base:"vs",inherit:!0,rules:[{token:"comment",foreground:"303030"},{token:"components",foreground:"550000",fontStyle:"bold"},{token:"component-count",foreground:"550000",fontStyle:"bold"},{token:"reactions",foreground:"550000",fontStyle:"bold"},{token:"reaction-count",foreground:"550000",fontStyle:"bold"},{token:"reaction",foreground:"FFA500"},{token:"stoichiometry",foreground:"008800"}],colors:{"editor.background":"#eee","editor.lineHighlightBackground":"#eee","editorLineNumber.foreground":"#008800"}}),e.editor.defineTheme("org-theme-xml",{base:"vs",inherit:!0,rules:[],colors:{"editor.background":"#eee","editor.lineHighlightBackground":"#eee","editorLineNumber.foreground":"#008800"}})},value:n},a)]}))}var Ft=n(24),Bt=n.n(Ft),Pt=n(66),Wt=n.n(Pt);function Mt(e){var t=new Blob([e],{type:"image/svg+xml;charset=utf-8"});He.a.saveAs(t,"graph.svg")}var Dt=function(e,t){var n=Object(o.useRef)(null),r=Object(o.useRef)(),a=Object(o.useRef)(),i=[].concat([{selector:"node",style:{shape:"rectangle"}},{selector:"node[label]",style:{"background-color":"#f00","background-opacity":0,shape:"rectangle",label:"data(id)","text-valign":"top","text-halign":"center","text-opacity":0,"border-opacity":0}},{selector:"node[color]",style:{"background-color":"#fff",shape:"rectangle",label:"data(id)",width:"55px",height:"30px",color:"data(color)","text-valign":"center","text-halign":"center","border-color":"#000","border-width":2,"border-style":"solid"}}],[{selector:"edge",style:{width:3,"line-color":"#ccc",label:"data(label)","curve-style":"bezier","control-point-step-size":50,"source-endpoint":"inside-to-node"}},{selector:"edge[products]",style:{"target-arrow-shape":"triangle-backcurve"}},{selector:"edge[educts]",style:{"target-endpoint":"inside-to-node"}},{selector:"edge[outflow]",style:{"target-arrow-shape":"triangle-backcurve"}}]);Object(o.useEffect)((function(){var e=T.getState().app_reducer.networkGraph;if(e!==[]){try{r.current||(Bt.a.use(Wt.a),r.current=Bt()({elements:e,style:i,container:n.current}))}catch(t){console.error(t)}r.current&&(a.current?a.current.stop():s(e),r.current.addListener("layoutstop",(function(){s(e)})))}}),[]),Object(o.useImperativeHandle)(t,(function(){return{draw:function(){var e=T.getState().app_reducer.networkGraph;try{r.current||(Bt.a.use(Wt.a),r.current=Bt()({elements:e,style:i,container:n.current}))}catch(t){console.error(t)}r.current&&(a.current?a.current.stop():s(e),r.current.addListener("layoutstop",(function(){s(e)})))},takeImage:function(){r.current&&(Bt.a.use(Wt.a),Mt(r.current.svg({full:!0,scale:1})))},toggleGrabbable:function(){}}}));var c={name:"concentric",concentric:function(e){return e.data("level")},levelWidth:function(e){return 1},minNodeSpacing:15},s=function(e){r.current&&(r.current.destroy(),Bt.a.use(Wt.a),r.current=Bt()({elements:e,style:i,container:n.current}),a.current=r.current.elements().makeLayout(c),a.current.run())};return Object(Nt.jsx)("div",{className:"graph",ref:n,style:{width:"100%",height:"100%"}})},Vt=Object(o.forwardRef)(Dt),Ht=n(706),Xt=n(707),Yt=n(728);function Jt(){var e=Pe(),t=We((function(e){return e.network_reducer.organizations})),n=We((function(e){return e.app_reducer.orgList})),r="#002350";return Object(Nt.jsxs)(Me.a,{children:[Object(Nt.jsxs)(Yt.a,{sx:{color:r,backgroundColor:"#eee"},children:["Found ",t.length," Organizations"]}),t.map((function(t){var a=Number.parseInt(t.id.slice(1))-1;return Object(Nt.jsxs)("div",{children:[Object(Nt.jsxs)(pe.a,{button:!0,onClick:function(){e(y(a))},children:[Object(Nt.jsx)(fe.a,{primary:"Organization: ".concat(t.id),sx:{color:r}}),n[a]?Object(Nt.jsx)(Ht.a,{sx:{color:r}}):Object(Nt.jsx)(Xt.a,{sx:{color:"#33393961"}})]}),Object(Nt.jsx)(De.a,{in:n[a],timeout:"auto",unmountOnExit:!0,children:Object(Nt.jsxs)(Me.a,{component:"div",sx:{marginLeft:"50px"},children:[Object(Nt.jsx)(fe.a,{primary:"Species:",sx:{color:r}}),Object(Nt.jsx)(K.a,{sx:{marginLeft:"20px",wordWrap:"normal"},children:0===t.species.length?"{}":t.species.map((function(e){return"".concat(e.id,", ")}))}),Object(Nt.jsx)(fe.a,{primary:"Reactions:",sx:{color:r}}),t.reactions.map((function(e){return Object(Nt.jsx)(K.a,{sx:{marginLeft:"20px",wordWrap:"normal"},children:e.uid},e.uid)}))]})})]},a)}))]})}var qt=n(212),Kt=n.n(qt),Qt=n(213),Ut=n.n(Qt),Zt=function(e,t){var n=Object(o.useRef)(null),r=Object(o.useRef)(),i=Object(o.useRef)(),c=We((function(e){return e.app_reducer.nodeView})),s={name:"dagre",nodeSep:void 0,edgeSep:void 0,rankSep:100,rankDir:"TB",ranker:"longest-path",minLen:function(e){return 2},edgeWeight:function(e){return 1},fit:!0,padding:30,spacingFactor:.9,nodeDimensionsIncludeLabels:!0,animate:!1,animateFilter:function(e,t){return!0},animationDuration:500,animationEasing:void 0,boundingBox:void 0,transform:function(e,t){var n=Number.parseInt(e.data("rank"));return{x:t.x,y:-80*n}},ready:function(){},stop:function(){}},u=[].concat([{selector:"node",style:{shape:"rectangle","font-size":12,"background-color":"#fff",label:function(e){var t="label";return c===a.ALLSPECIES?t="all_species":c===a.NOVELTY&&(t="novelty_species"),e.data(t)},width:function(e){var t="normalWidth";return c===a.ALLSPECIES?t="all_species_width":c===a.NOVELTY&&(t="novelty_species_width"),e.data(t)},height:"30px",color:"data(color)","text-valign":"center","text-halign":"center","border-color":"#000","border-width":2,"border-style":"solid"}}],[{selector:"edge",style:{width:3,"line-color":"#ccc","control-point-step-size":50,"source-endpoint":"inside-to-node"}}]),l={nodesMatching:function(e){return!0},reposition:function(e){var t=Number.parseInt(e.data("rank"));return{x:e.position("x"),y:-80*t}},when:"matching",meanIgnores:function(e){return!1},meanOnSelfPosition:function(e){return!0},dragWith:function(e){return!1}};Object(o.useEffect)((function(){var e=T.getState().app_reducer.latticeGraph;if(e!==[]){try{if(!r.current)Bt.a.use(Ut.a),Bt.a.use(Kt.a),Bt.a.use(Wt.a),r.current=Bt()({elements:e,style:u,container:n.current}),r.current.automove(l).apply()}catch(t){console.error(t)}r.current&&(i.current?i.current.stop():d(e),r.current.addListener("layoutstop",(function(){d(e)})))}}),[]),Object(o.useImperativeHandle)(t,(function(){return{draw:function(){var e=T.getState().app_reducer.latticeGraph;try{if(!r.current)Bt.a.use(Ut.a),Bt.a.use(Kt.a),Bt.a.use(Wt.a),r.current=Bt()({elements:e,style:u,container:n.current}),r.current.automove(l).apply()}catch(t){console.error(t)}r.current&&(i.current?i.current.stop():d(e),r.current.addListener("layoutstop",(function(){d(e)})))},takeImage:function(){r.current&&Mt(r.current.svg({full:!0,scale:1}))},toggleGrabbable:function(){}}}));var d=function(e){r.current&&(r.current.destroy(),r.current=Bt()({elements:e,style:u,container:n.current}),r.current.automove(l).apply(),i.current=r.current.elements().makeLayout(s),i.current.run())};return Object(Nt.jsx)("div",{className:"graph",ref:n,style:{width:"100%",height:"100%"}})},$t=Object(o.forwardRef)(Zt),en=n(729),tn=n(718),nn=n(713),rn=n(730);function an(){var e=Pe(),t=We((function(e){return e.app_reducer.nodeView})),n=We((function(e){return e.app_reducer.latticeGraph})),r=We((function(e){return e.app_reducer.orgList.length}));return Object(Nt.jsxs)(en.a,{sx:{m:1,minWidth:80},children:[Object(Nt.jsx)(tn.a,{id:"demo-simple-select-label",sx:{color:"#BC4A09"},children:"Node Label"}),Object(Nt.jsxs)(nn.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:t.toString(),label:"Node Label",onChange:function(t){e(k(parseInt(t.target.value))),Ot(n.slice(0,r),n.slice(r))},sx:{color:"#fff"},children:[Object(Nt.jsx)(rn.a,{value:a.ALLSPECIES,children:"Species"}),Object(Nt.jsx)(rn.a,{value:a.NOVELTY,children:"Novelty species"}),Object(Nt.jsx)(rn.a,{value:a.ORGNAMES,children:"Org index"})]})]})}var on=["children","value","index"],cn=Object(M.a)(de.a,{shouldForwardProp:function(e){return"open"!==e}})((function(e){var t=e.theme,n=e.open;return{"& .MuiDrawer-paper":Object(P.a)({position:"relative",whiteSpace:"nowrap",width:280,transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen}),boxSizing:"border-box"},!n&&Object(B.a)({overflowX:"hidden",transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),width:t.spacing(7)},t.breakpoints.up("sm"),{width:t.spacing(9)}))}}));function sn(e){var t=e.children,n=e.value,r=e.index,a=Object(F.a)(e,on);return Object(Nt.jsx)("div",Object(P.a)(Object(P.a)({role:"tabpanel",hidden:n!==r,id:"simple-tabpanel-".concat(r),"aria-labelledby":"simple-tab-".concat(r),style:{height:"100%"}},a),{},{children:n===r&&t}))}var un,ln,dn=Object(V.a)();function pn(){var e=i.a.useState(!1),t=Object(G.a)(e,2),n=t[0],r=t[1],a=i.a.useState(!1),c=Object(G.a)(a,2),s=c[0],u=c[1],l=We((function(e){return e.app_reducer.currentWindow})),d=We((function(e){return e.app_reducer.running})),p=We((function(e){return e.app_reducer.verbose})),h=Pe();un=Object(o.useRef)(null),ln=Object(o.useRef)(null);var f=function(){r(!n)},b=function(e,t){"backdropClick"!==t&&u(!1)},g=[],x=[];return T.subscribe((function(){var e,t=T.getState(),n=t.app_reducer.networkGraph,r=t.app_reducer.latticeGraph;g!==n&&(null===(e=un.current)||void 0===e||e.draw(),g=n);x!==r&&ln.current&&(ln.current.draw(),x=r)})),Object(Nt.jsx)(H.a,{theme:dn,children:Object(Nt.jsxs)(X.a,{sx:{display:"flex"},children:[Object(Nt.jsx)(Y.a,{}),Object(Nt.jsx)(D,{position:"absolute",open:n,children:Object(Nt.jsxs)(J.a,{sx:{pr:"24px"},children:[Object(Nt.jsx)(q.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:f,sx:Object(P.a)({marginRight:"36px"},n&&{display:"none"}),children:Object(Nt.jsx)(ie.a,{})}),Object(Nt.jsxs)(X.a,{sx:{flexGrow:1,display:"flex"},children:[Object(Nt.jsx)(K.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,sx:{paddingRight:"25px",marginTop:"Lattice"===l?"3%":"0%"},children:l}),"Lattice"===l?Object(Nt.jsx)(an,{}):Object(Nt.jsx)("div",{})]}),Object(Nt.jsx)(q.a,{color:"inherit",onClick:function(){u(!0)},children:Object(Nt.jsx)(le.a,{})}),Object(Nt.jsxs)(Q.a,{open:s,onClose:b,children:[Object(Nt.jsx)(U.a,{sx:{backgroundColor:"#eee"},children:"Settings"}),Object(Nt.jsx)(Z.a,{sx:{backgroundColor:"#eee"},children:Object(Nt.jsxs)(X.a,{component:"form",sx:{display:"flex",flexWrap:"wrap",backgroundColor:"#eee"},children:[Object(Nt.jsx)(K.a,{sx:{marginTop:"5%"},children:"Verbose Mode: "}),Object(Nt.jsx)($.a,{checked:p,onChange:function(){return h(j(!p))},sx:{marginLeft:"5px"}})]})}),Object(Nt.jsx)(ee.a,{sx:{backgroundColor:"#eee"},children:Object(Nt.jsx)(te.a,{onClick:b,children:"Close"})})]})]})}),Object(Nt.jsx)(cn,{variant:"permanent",open:n,sx:{backgroundColor:"#eee"},children:Object(Nt.jsxs)(ne.a,{sx:{backgroundColor:"#eee",height:"100vh"},children:[Object(Nt.jsx)(J.a,{sx:{display:"flex",alignItems:"center",justifyContent:"flex-end",px:[1],backgroundColor:"#eee"},children:Object(Nt.jsx)(q.a,{onClick:f,children:Object(Nt.jsx)(se.a,{})})}),Object(Nt.jsx)(re.a,{}),Object(Nt.jsx)(It,{saveNetworkImage:function(){un.current&&un.current.takeImage()},saveLatticeImage:function(){ln.current&&ln.current.takeImage()}}),Object(Nt.jsxs)("div",{style:{position:"absolute",bottom:"0px",display:"flex",paddingLeft:"2px",visibility:d>0?"visible":"hidden"},children:[Object(Nt.jsx)(ae.a,{sx:{color:"#BC4A09"},size:15,value:70}),Object(Nt.jsx)(K.a,{fontSize:12,sx:{paddingLeft:"3px",marginBottom:"4px"},children:" Running "})]})]})}),Object(Nt.jsxs)(X.a,{component:"main",sx:{backgroundColor:function(e){return"light"===e.palette.mode?e.palette.grey[100]:e.palette.grey[900]},flexGrow:1,height:"100vh",overflow:"hidden"},children:[Object(Nt.jsx)(J.a,{}),Object(Nt.jsxs)(ne.a,{sx:{p:2,display:"flex",flexDirection:"column",height:"92vh",width:"100%",overflow:"Organizations"===l?"auto":"hidden",backgroundColor:"#eee"},children:[Object(Nt.jsx)(sn,{value:l,index:"Editor",children:Object(Nt.jsx)(Gt,{})}),Object(Nt.jsx)(sn,{value:l,index:"Reaction Network",children:Object(Nt.jsx)(Vt,{ref:un})}),Object(Nt.jsx)(sn,{value:l,index:"Lattice",children:Object(Nt.jsx)($t,{ref:ln})}),Object(Nt.jsx)(sn,{value:l,index:"Organizations",children:Object(Nt.jsx)(Jt,{})})]})]})]})})}s.a.render(Object(Nt.jsx)(i.a.StrictMode,{children:Object(Nt.jsx)(z.a,{store:T,children:Object(Nt.jsx)(pn,{})})}),document.getElementById("root"))}},[[664,1,2]]]);
//# sourceMappingURL=main.8232748e.chunk.js.map