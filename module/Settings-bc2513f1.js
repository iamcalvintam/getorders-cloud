import{S as e,i as t,s,e as n,a as l,b as o,c as a,d as i,l as r,a4 as c,a5 as u,a6 as d,a7 as g,h as m,t as f,g as p,k as v,r as $,o as h,u as b,y as x,j as y,a8 as w,m as _,v as k,Z as z,a9 as C,p as T,x as L,q as N,R as S,z as j,G as A,H as I,n as D,F as R,D as M,E as P}from"./App-d5ef52e5.js";import{T as U}from"./UITextField-9c8c8c76.js";import{T as B}from"./UIToolbar-c211a841.js";import{S as F}from"./UISegmented-00979522.js";import"./dayjs.min-366cf409.js";function E(e,t,s){const n=e.slice();return n[7]=t[s],n[9]=s,n}function H(e){let t,s,f,p,v,$,h,b,x;function y(...t){return e[6](e[9],...t)}return{c(){t=n("div"),s=n("input"),p=l(),v=n("button"),v.innerHTML='<i class="icon ion-md-close text-xl"></i>',$=l(),o(s,"type","text"),o(s,"class","flex-grow bg-gray-100 self-center"),o(s,"placeholder",e[2]),s.value=f=e[7],o(v,"class","flex-none ml-2"),o(t,"class","flex rounded-lg bg-gray-100 p-2 my-2")},m(e,n,l){a(e,t,n),i(t,s),i(t,p),i(t,v),i(t,$),b=!0,l&&x(),x=r(v,"click",y)},p(t,n){e=t,(!b||4&n)&&o(s,"placeholder",e[2]),(!b||1&n&&f!==(f=e[7])&&s.value!==f)&&(s.value=f)},i(e){b||(c(()=>{h||(h=u(t,g,{duration:300,easing:d},!0)),h.run(1)}),b=!0)},o(e){h||(h=u(t,g,{duration:300,easing:d},!1)),h.run(0),b=!1},d(e){e&&m(t),e&&h&&h.end(),x()}}}function G(e){let t,s,c,u,d,g,y,w,_,k,z=e[0],C=[];for(let t=0;t<z.length;t+=1)C[t]=H(E(e,z,t));const T=e=>h(C[e],1,1,()=>{C[e]=null});return{c(){t=n("div"),s=n("div"),c=n("label"),u=f(e[1]),d=l(),g=n("button"),g.innerHTML='<i class="icon ion-md-add text-xl"></i>',y=l();for(let e=0;e<C.length;e+=1)C[e].c();o(c,"class","flex-grow self-center text-xs uppercase text-gray-500 font-semibold"),o(g,"class","flex-none"),o(s,"class","flex"),o(t,"class",w=e[3].container)},m(n,l,o){a(n,t,l),i(t,s),i(s,c),i(c,u),i(s,d),i(s,g),i(t,y);for(let e=0;e<C.length;e+=1)C[e].m(t,null);_=!0,o&&k(),k=r(g,"click",e[4])},p(e,[s]){if((!_||2&s)&&p(u,e[1]),37&s){let n;for(z=e[0],n=0;n<z.length;n+=1){const l=E(e,z,n);C[n]?(C[n].p(l,s),v(C[n],1)):(C[n]=H(l),C[n].c(),v(C[n],1),C[n].m(t,null))}for($(),n=z.length;n<C.length;n+=1)T(n);b()}(!_||8&s&&w!==(w=e[3].container))&&o(t,"class",w)},i(e){if(!_){for(let e=0;e<z.length;e+=1)v(C[e]);_=!0}},o(e){C=C.filter(Boolean);for(let e=0;e<C.length;e+=1)h(C[e]);_=!1},d(e){e&&m(t),x(C,e),k()}}}function O(e,t,s){let{value:n=[]}=t,{label:l=""}=t,{placeholder:o=""}=t,{style:a={}}=t;function i(e){s(0,n=[...n.slice(0,e),...n.slice(e+1,n.length)])}return e.$set=e=>{"value"in e&&s(0,n=e.value),"label"in e&&s(1,l=e.label),"placeholder"in e&&s(2,o=e.placeholder),"style"in e&&s(3,a=e.style)},[n,l,o,a,function(){s(0,n=[...n,""])},i,e=>i(e)]}class q extends e{constructor(e){super(),t(this,e,O,G,s,{value:0,label:1,placeholder:2,style:3})}}function Y(e,t,s){const n=e.slice();return n[28]=t[s],n}function Z(e){let t,s,c,u,d,g,$,b,x,z,C,L,N,S,j,D,R,M,P,B,E,H,G,O,Y,Z,X,ee,te,se,ne,le,oe,ae,ie,re,ce,ue,de,ge,me,fe,pe,ve,$e,he,be,xe,ye,we,_e,ke,ze,Ce,Te,Le,Ne,Se,je,Ae,Ie,De,Re,Me,Pe,Ue=e[1].settings.short_id+"";function Be(t){e[11].call(null,t)}let Fe={style:e[6],label:"Business Name"};void 0!==e[1].settings.name&&(Fe.value=e[1].settings.name);const Ee=new U({props:Fe});function He(e,t){return e[1].settings.logo_raw?J:K}A.push(()=>I(Ee,"value",Be));let Ge=He(e),Oe=Ge(e),qe=e[1].settings.logo&&Q(e);function Ye(e,t){return e[1].settings.timeslots.length>0?W:V}let Ze=Ye(e),Je=Ze(e);function Ke(t){e[15].call(null,t)}let Qe={style:e[6],label:"Address"};void 0!==e[1].settings.address&&(Qe.value=e[1].settings.address);const Ve=new U({props:Qe});function We(t){e[16].call(null,t)}A.push(()=>I(Ve,"value",Ke));let Xe={style:e[6],label:"Address 2"};void 0!==e[1].settings.address2&&(Xe.value=e[1].settings.address2);const et=new U({props:Xe});function tt(t){e[17].call(null,t)}A.push(()=>I(et,"value",We));let st={style:e[6],label:"Postcode"};void 0!==e[1].settings.postcode&&(st.value=e[1].settings.postcode);const nt=new U({props:st});function lt(t){e[18].call(null,t)}A.push(()=>I(nt,"value",tt));let ot={style:e[6],label:"Identifier"};void 0!==e[1].settings.short_id&&(ot.value=e[1].settings.short_id);const at=new U({props:ot});function it(t){e[19].call(null,t)}A.push(()=>I(at,"value",lt));let rt={style:e[6],label:"Delivery Fees"};void 0!==e[1].settings.delivery_fees&&(rt.value=e[1].settings.delivery_fees);const ct=new U({props:rt});function ut(t){e[20].call(null,t)}A.push(()=>I(ct,"value",it));let dt={style:e[6],label:"Phone Number"};void 0!==e[1].settings.phone&&(dt.value=e[1].settings.phone);const gt=new U({props:dt});function mt(t){e[21].call(null,t)}A.push(()=>I(gt,"value",ut));let ft={style:e[6],label:"Announcement"};void 0!==e[1].settings.announcement&&(ft.value=e[1].settings.announcement);const pt=new U({props:ft});function vt(t){e[22].call(null,t)}A.push(()=>I(pt,"value",mt));let $t={style:e[6],label:"Checkout Notes"};void 0!==e[1].settings.checkout_notes&&($t.value=e[1].settings.checkout_notes);const ht=new U({props:$t});function bt(t){e[23].call(null,t)}A.push(()=>I(ht,"value",vt));let xt={style:e[6],label:"Order Methods",segments:[{name:"All",value:""},{name:"No Delivery",value:"no_delivery"},{name:"No Pickup",value:"no_pickup"}]};void 0!==e[1].settings.order_methods&&(xt.value=e[1].settings.order_methods);const yt=new F({props:xt});function wt(t){e[24].call(null,t)}A.push(()=>I(yt,"value",bt));let _t={style:e[6],label:"List Layout",segments:[{name:"Grid",value:""},{name:"List",value:"list"}]};void 0!==e[1].settings.list_style&&(_t.value=e[1].settings.list_style);const kt=new F({props:_t});function zt(t){e[25].call(null,t)}A.push(()=>I(kt,"value",wt));let Ct={style:e[6],label:"Multiplier"};void 0!==e[1].settings.multiplier&&(Ct.value=e[1].settings.multiplier);const Tt=new U({props:Ct});function Lt(t){e[26].call(null,t)}A.push(()=>I(Tt,"value",zt));let Nt={style:e[6],label:"Rounding",segments:[{name:"No Rounding",value:""},{name:"Round Down",value:"round_down"},{name:"Round Up",value:"round_up"}]};void 0!==e[1].settings.rounding&&(Nt.value=e[1].settings.rounding);const St=new F({props:Nt});function jt(t){e[27].call(null,t)}A.push(()=>I(St,"value",Lt));let At={style:e[6],label:"Deduction Presets",placeholder:"e.g : 100"};void 0!==e[1].settings.deduct_presets&&(At.value=e[1].settings.deduct_presets);const It=new q({props:At});return A.push(()=>I(It,"value",jt)),{c(){t=n("p"),t.textContent="Your Details",s=l(),y(Ee.$$.fragment),u=l(),d=n("div"),g=n("label"),g.textContent="Business Logo",$=l(),b=n("label"),Oe.c(),x=l(),z=n("input"),L=l(),qe&&qe.c(),S=l(),j=n("div"),D=n("label"),R=f("Time Slots"),P=l(),B=n("div"),Je.c(),H=l(),G=n("p"),G.textContent="Pickup Location",O=l(),y(Ve.$$.fragment),Z=l(),y(et.$$.fragment),ee=l(),y(nt.$$.fragment),se=l(),ne=n("p"),ne.textContent="Ensure that the details above is correct, as price estimation and riders depend on the accuracy of this information.",le=l(),oe=n("p"),oe.textContent="Orders",ae=l(),ie=n("div"),y(at.$$.fragment),ce=l(),ue=n("p"),de=n("a"),ge=f("https://instant.getorders.app/?m="),me=f(Ue),pe=l(),y(ct.$$.fragment),$e=l(),y(gt.$$.fragment),be=l(),y(pt.$$.fragment),ye=l(),y(ht.$$.fragment),_e=l(),y(yt.$$.fragment),ze=l(),y(kt.$$.fragment),Te=l(),Le=n("p"),Le.textContent="Loyalty",Ne=l(),Se=n("div"),y(Tt.$$.fragment),Ae=l(),y(St.$$.fragment),De=l(),y(It.$$.fragment),o(t,"class","sect text-theme svelte-12rzu9v"),o(g,"class","block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"),o(z,"type","file"),o(z,"class","hidden"),o(b,"class",C="p-2 block rounded cursor-pointer border shadow-sm "+(e[1].settings.logo_raw?"bg-theme text-white":"")),o(d,"class",N=w(e[6].container)+" svelte-12rzu9v"),o(D,"class",M="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 "+e[6].label+" svelte-12rzu9v"),o(B,"class","border rounded shadow-sm p-2 w-full flex flex-wrap"),o(j,"class",E=w(e[6].container)+" svelte-12rzu9v"),o(G,"class","sect text-theme svelte-12rzu9v"),o(ne,"class","text-xs px-3 mb-3 font-semibold"),o(oe,"class","sect text-theme svelte-12rzu9v"),o(de,"href",fe="https://instant.getorders.app/?m="+e[1].settings.short_id),o(de,"target","_blank"),o(ue,"class","text-xs px-3 mb-3 font-semibold"),o(Le,"class","sect text-theme svelte-12rzu9v")},m(n,l,o){a(n,t,l),a(n,s,l),_(Ee,n,l),a(n,u,l),a(n,d,l),i(d,g),i(d,$),i(d,b),Oe.m(b,null),i(b,x),i(b,z),e[12](z),i(d,L),qe&&qe.m(d,null),a(n,S,l),a(n,j,l),i(j,D),i(D,R),i(j,P),i(j,B),Je.m(B,null),a(n,H,l),a(n,G,l),a(n,O,l),_(Ve,n,l),a(n,Z,l),_(et,n,l),a(n,ee,l),_(nt,n,l),a(n,se,l),a(n,ne,l),a(n,le,l),a(n,oe,l),a(n,ae,l),a(n,ie,l),_(at,ie,null),i(ie,ce),i(ie,ue),i(ue,de),i(de,ge),i(de,me),i(ie,pe),_(ct,ie,null),i(ie,$e),_(gt,ie,null),i(ie,be),_(pt,ie,null),i(ie,ye),_(ht,ie,null),i(ie,_e),_(yt,ie,null),i(ie,ze),_(kt,ie,null),a(n,Te,l),a(n,Le,l),a(n,Ne,l),a(n,Se,l),_(Tt,Se,null),i(Se,Ae),_(St,Se,null),i(Se,De),_(It,Se,null),Me=!0,o&&Pe(),Pe=r(z,"change",e[7])},p(e,t){const s={};!c&&2&t&&(c=!0,s.value=e[1].settings.name,k(()=>c=!1)),Ee.$set(s),Ge!==(Ge=He(e))&&(Oe.d(1),Oe=Ge(e),Oe&&(Oe.c(),Oe.m(b,x))),(!Me||2&t&&C!==(C="p-2 block rounded cursor-pointer border shadow-sm "+(e[1].settings.logo_raw?"bg-theme text-white":"")))&&o(b,"class",C),e[1].settings.logo?qe?qe.p(e,t):(qe=Q(e),qe.c(),qe.m(d,null)):qe&&(qe.d(1),qe=null),Ze===(Ze=Ye(e))&&Je?Je.p(e,t):(Je.d(1),Je=Ze(e),Je&&(Je.c(),Je.m(B,null)));const n={};!Y&&2&t&&(Y=!0,n.value=e[1].settings.address,k(()=>Y=!1)),Ve.$set(n);const l={};!X&&2&t&&(X=!0,l.value=e[1].settings.address2,k(()=>X=!1)),et.$set(l);const a={};!te&&2&t&&(te=!0,a.value=e[1].settings.postcode,k(()=>te=!1)),nt.$set(a);const i={};!re&&2&t&&(re=!0,i.value=e[1].settings.short_id,k(()=>re=!1)),at.$set(i),(!Me||2&t)&&Ue!==(Ue=e[1].settings.short_id+"")&&p(me,Ue),(!Me||2&t&&fe!==(fe="https://instant.getorders.app/?m="+e[1].settings.short_id))&&o(de,"href",fe);const r={};!ve&&2&t&&(ve=!0,r.value=e[1].settings.delivery_fees,k(()=>ve=!1)),ct.$set(r);const u={};!he&&2&t&&(he=!0,u.value=e[1].settings.phone,k(()=>he=!1)),gt.$set(u);const g={};!xe&&2&t&&(xe=!0,g.value=e[1].settings.announcement,k(()=>xe=!1)),pt.$set(g);const m={};!we&&2&t&&(we=!0,m.value=e[1].settings.checkout_notes,k(()=>we=!1)),ht.$set(m);const f={};!ke&&2&t&&(ke=!0,f.value=e[1].settings.order_methods,k(()=>ke=!1)),yt.$set(f);const v={};!Ce&&2&t&&(Ce=!0,v.value=e[1].settings.list_style,k(()=>Ce=!1)),kt.$set(v);const $={};!je&&2&t&&(je=!0,$.value=e[1].settings.multiplier,k(()=>je=!1)),Tt.$set($);const h={};!Ie&&2&t&&(Ie=!0,h.value=e[1].settings.rounding,k(()=>Ie=!1)),St.$set(h);const y={};!Re&&2&t&&(Re=!0,y.value=e[1].settings.deduct_presets,k(()=>Re=!1)),It.$set(y)},i(e){Me||(v(Ee.$$.fragment,e),v(Ve.$$.fragment,e),v(et.$$.fragment,e),v(nt.$$.fragment,e),v(at.$$.fragment,e),v(ct.$$.fragment,e),v(gt.$$.fragment,e),v(pt.$$.fragment,e),v(ht.$$.fragment,e),v(yt.$$.fragment,e),v(kt.$$.fragment,e),v(Tt.$$.fragment,e),v(St.$$.fragment,e),v(It.$$.fragment,e),Me=!0)},o(e){h(Ee.$$.fragment,e),h(Ve.$$.fragment,e),h(et.$$.fragment,e),h(nt.$$.fragment,e),h(at.$$.fragment,e),h(ct.$$.fragment,e),h(gt.$$.fragment,e),h(pt.$$.fragment,e),h(ht.$$.fragment,e),h(yt.$$.fragment,e),h(kt.$$.fragment,e),h(Tt.$$.fragment,e),h(St.$$.fragment,e),h(It.$$.fragment,e),Me=!1},d(n){n&&m(t),n&&m(s),T(Ee,n),n&&m(u),n&&m(d),Oe.d(),e[12](null),qe&&qe.d(),n&&m(S),n&&m(j),Je.d(),n&&m(H),n&&m(G),n&&m(O),T(Ve,n),n&&m(Z),T(et,n),n&&m(ee),T(nt,n),n&&m(se),n&&m(ne),n&&m(le),n&&m(oe),n&&m(ae),n&&m(ie),T(at),T(ct),T(gt),T(pt),T(ht),T(yt),T(kt),n&&m(Te),n&&m(Le),n&&m(Ne),n&&m(Se),T(Tt),T(St),T(It),Pe()}}}function J(e){let t,s,i;return{c(){t=n("i"),s=l(),i=n("span"),i.textContent="Image Selected",o(t,"class","icon ion-md-cloud-done px-1"),o(i,"class","mt-2 text-base leading-normal")},m(e,n){a(e,t,n),a(e,s,n),a(e,i,n)},d(e){e&&m(t),e&&m(s),e&&m(i)}}}function K(e){let t,s,i;return{c(){t=n("i"),s=l(),i=n("span"),i.textContent="Upload Image",o(t,"class","icon ion-md-cloud-upload px-1"),o(i,"class","mt-2 text-base leading-normal")},m(e,n){a(e,t,n),a(e,s,n),a(e,i,n)},d(e){e&&m(t),e&&m(s),e&&m(i)}}}function Q(e){let t;return{c(){t=n("div"),o(t,"class","w-16 h-16 m-1 border bg-cover bg-center"),z(t,"background-image","url("+C+e[1].settings.logo+")")},m(e,s){a(e,t,s)},p(e,s){2&s&&z(t,"background-image","url("+C+e[1].settings.logo+")")},d(e){e&&m(t)}}}function V(e){let t,s;return{c(){t=n("p"),t.textContent="No Time Slots Specified. Tap To Add Time Slots.",o(t,"class","text-gray-500 cursor-pointer")},m(n,l,o){a(n,t,l),o&&s(),s=r(t,"click",e[14])},p:D,d(e){e&&m(t),s()}}}function W(e){let t,s=e[1].settings.timeslots,n=[];for(let t=0;t<s.length;t+=1)n[t]=X(Y(e,s,t));return{c(){for(let e=0;e<n.length;e+=1)n[e].c();t=L()},m(e,s){for(let t=0;t<n.length;t+=1)n[t].m(e,s);a(e,t,s)},p(e,l){if(18&l){let o;for(s=e[1].settings.timeslots,o=0;o<s.length;o+=1){const a=Y(e,s,o);n[o]?n[o].p(a,l):(n[o]=X(a),n[o].c(),n[o].m(t.parentNode,t))}for(;o<n.length;o+=1)n[o].d(1);n.length=s.length}},d(e){x(n,e),e&&m(t)}}}function X(e){let t,s,l,c,u=te(e[28])+"";function d(...t){return e[13](e[28],...t)}return{c(){t=n("span"),s=f(u),l=n("i"),o(l,"class","icon ion-md-close pl-2 font-semibold"),o(t,"class","inline-block p-2 rounded-lg text-xs bg-theme text-white m-1")},m(e,n,o){a(e,t,n),i(t,s),i(t,l),o&&c(),c=r(t,"click",d)},p(t,n){e=t,2&n&&u!==(u=te(e[28])+"")&&p(s,u)},d(e){e&&m(t),c()}}}function ee(e){let t,s,n;const o=new B({props:{class:"border-b border-gray-300",tools:e[2]}});o.$on("selected",e[3]);let i=e[1].settings&&Z(e);return{c(){y(o.$$.fragment),t=l(),i&&i.c(),s=L()},m(e,l){_(o,e,l),a(e,t,l),i&&i.m(e,l),a(e,s,l),n=!0},p(e,[t]){e[1].settings?i?(i.p(e,t),v(i,1)):(i=Z(e),i.c(),v(i,1),i.m(s.parentNode,s)):i&&($(),h(i,1,1,()=>{i=null}),b())},i(e){n||(v(o.$$.fragment,e),v(i),n=!0)},o(e){h(o.$$.fragment,e),h(i),n=!1},d(e){T(o,e),e&&m(t),i&&i.d(e),e&&m(s)}}}function te(e){var t=e.split(":"),s="AM",n=parseInt(t);return n>12&&(n-=12,s="PM"),`${n}:${t[1]}${s}`}function se(e){var t=`${e[1]}`;return e[1]<10&&(t=`0${t}`),`${e[0]}:${t}`}function ne(e,t,s){let n,l;N(e,S,e=>s(8,n=e)),N(e,j,e=>s(1,l=e));let o,a=[8,30],i=[21,30];function r(e){R(j,l.settings.timeslots=l.settings.timeslots.filter(t=>t!=e),l)}function c(e){var t=a.slice();let s=[se(t)];for(var n=1;n<60&&!(t[0]>=i[0]&&t[1]>=i[1]);n++)t[1]+=e,t[1]>=60&&(t[0]+=1,t[1]=t[1]-60),s=[...s,se(t)];R(j,l.settings.timeslots=s,l)}return[o,l,[{name:"Save",icon:"cloud-done",function:"save"}],function(e){switch(e.detail.function){case"save":R(S,n=!0),fetch(M("/settings"),P(l.settings)).then(e=>e.json()).then(e=>{R(j,l=e),R(S,n=!1)}).catch(e=>{})}},r,c,{container:"p-2 md:w-1/2 flex-none",label:"w-32"},function(){let e=new FileReader;e.readAsDataURL(o.files[0]),e.onload=()=>{let t=e.result;R(j,l.settings.logo_raw=t,l)}},n,a,i,function(e){l.settings.name=e,j.set(l)},function(e){A[e?"unshift":"push"](()=>{s(0,o=e)})},e=>r(e),()=>c(30),function(e){l.settings.address=e,j.set(l)},function(e){l.settings.address2=e,j.set(l)},function(e){l.settings.postcode=e,j.set(l)},function(e){l.settings.short_id=e,j.set(l)},function(e){l.settings.delivery_fees=e,j.set(l)},function(e){l.settings.phone=e,j.set(l)},function(e){l.settings.announcement=e,j.set(l)},function(e){l.settings.checkout_notes=e,j.set(l)},function(e){l.settings.order_methods=e,j.set(l)},function(e){l.settings.list_style=e,j.set(l)},function(e){l.settings.multiplier=e,j.set(l)},function(e){l.settings.rounding=e,j.set(l)},function(e){l.settings.deduct_presets=e,j.set(l)}]}export default class extends e{constructor(e){var l;super(),document.getElementById("svelte-12rzu9v-style")||((l=n("style")).id="svelte-12rzu9v-style",l.textContent=".sect.svelte-12rzu9v{font-size:1.25rem;font-weight:700;margin-top:0.75rem}",i(document.head,l)),t(this,e,ne,ee,s,{})}}
//# sourceMappingURL=Settings-bc2513f1.js.map
