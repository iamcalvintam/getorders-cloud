import{S as e,i as t,s,ag as l,e as n,d as a,G as r,H as o,t as c,a as d,x as i,b as f,c as u,g as p,h as g,y as m,j as h,m as b,w as y,l as v,v as $,k as j,o as x,p as O,q as k,R as w,z as E,D as T,E as A,F as M,af as I,a1 as P}from"./App-a0a8461c.js";import{T as S}from"./UIToolbar-83f55ec3.js";import"./UIItem-790861f3.js";import{S as F}from"./UISegmented-8d5fa24d.js";import{d as H}from"./dayjs.min-d290c2ff.js";const{document:N}=l;function q(e,t,s){const l=e.slice();return l[35]=t[s],l}function D(e,t,s){const l=e.slice();return l[32]=t[s],l}function U(e,t,s){const l=e.slice();return l[29]=t[s],l}function V(e,t,s){const l=e.slice();return l[26]=t[s],l}function Y(e){let t,s,l,r,o,i,m,h,b,y,v,$,j,x,O,k,w=e[8](e[29]).name+"",E=e[32]+"",T=e[35]+"",A=e[2][e[29]][e[32]][e[35]].quantity+"",M=e[2][e[29]][e[32]][e[35]].amount.toFixed(2)+"";return{c(){t=n("tr"),s=n("td"),l=c(w),r=d(),o=n("td"),i=c(E),m=d(),h=n("td"),b=c(T),y=d(),v=n("td"),$=c(A),j=d(),x=n("td"),O=c(M),k=d(),f(s,"class","svelte-41lobs"),f(o,"class","svelte-41lobs"),f(h,"class","svelte-41lobs"),f(v,"class","svelte-41lobs"),f(x,"class","svelte-41lobs")},m(e,n){u(e,t,n),a(t,s),a(s,l),a(t,r),a(t,o),a(o,i),a(t,m),a(t,h),a(h,b),a(t,y),a(t,v),a(v,$),a(t,j),a(t,x),a(x,O),a(t,k)},p(e,t){8&t[0]&&w!==(w=e[8](e[29]).name+"")&&p(l,w),12&t[0]&&E!==(E=e[32]+"")&&p(i,E),12&t[0]&&T!==(T=e[35]+"")&&p(b,T),12&t[0]&&A!==(A=e[2][e[29]][e[32]][e[35]].quantity+"")&&p($,A),12&t[0]&&M!==(M=e[2][e[29]][e[32]][e[35]].amount.toFixed(2)+"")&&p(O,M)},d(e){e&&g(t)}}}function B(e){let t,s=Object.keys(e[2][e[29]][e[32]]),l=[];for(let t=0;t<s.length;t+=1)l[t]=Y(q(e,s,t));return{c(){for(let e=0;e<l.length;e+=1)l[e].c();t=i()},m(e,s){for(let t=0;t<l.length;t+=1)l[t].m(e,s);u(e,t,s)},p(e,n){if(780&n[0]){let a;for(s=Object.keys(e[2][e[29]][e[32]]),a=0;a<s.length;a+=1){const r=q(e,s,a);l[a]?l[a].p(r,n):(l[a]=Y(r),l[a].c(),l[a].m(t.parentNode,t))}for(;a<l.length;a+=1)l[a].d(1);l.length=s.length}},d(e){m(l,e),e&&g(t)}}}function L(e){let t,s=Object.keys(e[2][e[29]]),l=[];for(let t=0;t<s.length;t+=1)l[t]=B(D(e,s,t));return{c(){for(let e=0;e<l.length;e+=1)l[e].c();t=i()},m(e,s){for(let t=0;t<l.length;t+=1)l[t].m(e,s);u(e,t,s)},p(e,n){if(780&n[0]){let a;for(s=Object.keys(e[2][e[29]]),a=0;a<s.length;a+=1){const r=D(e,s,a);l[a]?l[a].p(r,n):(l[a]=B(r),l[a].c(),l[a].m(t.parentNode,t))}for(;a<l.length;a+=1)l[a].d(1);l.length=s.length}},d(e){m(l,e),e&&g(t)}}}function R(e){let t,s,l,r,o,h,b,y,v,$=e[26]+"",j=e[9](e[26]),x=[];for(let t=0;t<j.length;t+=1)x[t]=L(U(e,j,t));return{c(){t=n("tr"),s=n("td"),l=c($),r=n("td"),o=n("td"),h=n("td"),b=n("td"),y=d();for(let e=0;e<x.length;e+=1)x[e].c();v=i(),f(s,"class","svelte-41lobs"),f(r,"class","svelte-41lobs"),f(o,"class","svelte-41lobs"),f(h,"class","svelte-41lobs"),f(b,"class","svelte-41lobs"),f(t,"class","bg-gray-600 text-white")},m(e,n){u(e,t,n),a(t,s),a(s,l),a(t,r),a(t,o),a(t,h),a(t,b),u(e,y,n);for(let t=0;t<x.length;t+=1)x[t].m(e,n);u(e,v,n)},p(e,t){if(8&t[0]&&$!==($=e[26]+"")&&p(l,$),780&t[0]){let s;for(j=e[9](e[26]),s=0;s<j.length;s+=1){const l=U(e,j,s);x[s]?x[s].p(l,t):(x[s]=L(l),x[s].c(),x[s].m(v.parentNode,v))}for(;s<x.length;s+=1)x[s].d(1);x.length=j.length}},d(e){e&&g(t),e&&g(y),m(x,e),e&&g(v)}}}function _(e){let t,s,l,i,k,w,E,T,A,M,I,P,H,q,D,U,Y,B,L,_,C,G,J,Q=e[0].format("ddd D/M/YY")+"";const W=new S({props:{class:"border-b border-gray-300",tools:e[6]}});function z(t){e[22].call(null,t)}W.$on("selected",e[7]);let K={style:e[11],label:"Orders Filter",segments:[{name:"Paid",value:"paid"},{name:"All",value:"all"}]};void 0!==e[4].type&&(K.value=e[4].type);const X=new F({props:K});function Z(t){e[23].call(null,t)}r.push(()=>o(X,"value",z));let ee={style:e[11],label:"Display",segments:[{name:"All",value:""},{name:"By Vendor",value:"true"}]};void 0!==e[1]&&(ee.value=e[1]);const te=new F({props:ee});r.push(()=>o(te,"value",Z));let se=Object.keys(e[3]),le=[];for(let t=0;t<se.length;t+=1)le[t]=R(V(e,se,t));return{c(){t=n("script"),l=d(),h(W.$$.fragment),i=d(),k=n("div"),h(X.$$.fragment),E=d(),h(te.$$.fragment),A=d(),M=n("div"),I=n("button"),I.innerHTML='<i class="far fa-arrow-alt-circle-left"></i>',P=d(),H=n("div"),q=c(Q),D=d(),U=n("button"),U.innerHTML='<i class="far fa-arrow-alt-circle-right"></i>',Y=d(),B=n("div"),L=n("table"),_=n("tr"),_.innerHTML='<td class="svelte-41lobs">Product</td> \n            <td class="svelte-41lobs">Variant</td> \n            <td class="svelte-41lobs">Modifiers</td> \n            <td class="svelte-41lobs">Quantity</td> \n            <td class="svelte-41lobs">Total Price</td>',C=d();for(let e=0;e<le.length;e+=1)le[e].c();t.src!==(s="https://unpkg.com/papaparse@latest/papaparse.min.js")&&f(t,"src","https://unpkg.com/papaparse@latest/papaparse.min.js"),f(k,"class","border-t border-b border-gray-200 flex"),f(H,"class","flex-grow self-center text-center"),f(M,"class","flex text-lg font-semibold m-2"),f(_,"class","bg-theme text-white rounded-lg"),f(L,"class","w-full"),f(B,"class","m-2")},m(s,n,r){a(N.head,t),u(s,l,n),b(W,s,n),u(s,i,n),u(s,k,n),b(X,k,null),a(k,E),b(te,k,null),u(s,A,n),u(s,M,n),a(M,I),a(M,P),a(M,H),a(H,q),a(M,D),a(M,U),u(s,Y,n),u(s,B,n),a(B,L),a(L,_),a(L,C);for(let e=0;e<le.length;e+=1)le[e].m(L,null);G=!0,r&&y(J),J=[v(I,"click",e[24]),v(U,"click",e[25])]},p(e,t){const s={};!w&&16&t[0]&&(w=!0,s.value=e[4].type,$(()=>w=!1)),X.$set(s);const l={};if(!T&&2&t[0]&&(T=!0,l.value=e[1],$(()=>T=!1)),te.$set(l),(!G||1&t[0])&&Q!==(Q=e[0].format("ddd D/M/YY")+"")&&p(q,Q),780&t[0]){let s;for(se=Object.keys(e[3]),s=0;s<se.length;s+=1){const l=V(e,se,s);le[s]?le[s].p(l,t):(le[s]=R(l),le[s].c(),le[s].m(L,null))}for(;s<le.length;s+=1)le[s].d(1);le.length=se.length}},i(e){G||(j(W.$$.fragment,e),j(X.$$.fragment,e),j(te.$$.fragment,e),G=!0)},o(e){x(W.$$.fragment,e),x(X.$$.fragment,e),x(te.$$.fragment,e),G=!1},d(e){g(t),e&&g(l),O(W,e),e&&g(i),e&&g(k),O(X),O(te),e&&g(A),e&&g(M),e&&g(Y),e&&g(B),m(le,e),y(J)}}}function C(e,t,s){let l,n,a;k(e,w,e=>s(16,l=e)),k(e,E,e=>s(17,a=e));let r=H(),o=I({type:"paid"}),c="";k(e,o,e=>s(4,n=e));let d=0,i=!0,f={},u=[],p=[],g={"All Orders":[]};function m(e){0==e&&(i=!0),d=e,M(w,l=!0),T(A("/orders"),{groupBy:"products",order_type:n.type,from:r.startOf("day").toJSON(),to:r.endOf("day").toJSON()},"GET").then(e=>{M(w,l=!1),s(2,f=e.variants),u=e.products,process_products()})}function h(e){return u.find(t=>t.id.toString()==e)||{name:"-"}}function b(e){return"All Orders"==e?Object.keys(f):Object.keys(f).filter(t=>g[e].includes(t))}m(0),T(A("/vendor")).then(e=>{s(15,p=e)}),o.subscribe(e=>{m(0)});function y(e){s(0,r=r.add(e,"day")),m(0)}return e.$$.update=()=>{if(32770&e.$$.dirty[0])if("true"==c){let e={};p.forEach(t=>{e[t.name]=t.products.map(e=>e.id)}),s(3,g=e)}else s(3,g={"All Orders":[]})},[r,c,f,g,n,o,[{name:"Refresh",icon:"refresh",function:"refresh"},{name:"Export",icon:"cloud-download",function:"export"}],function(e){switch(e.detail.function){case"refresh":m(0);break;case"export":{let e=[];Object.keys(g).forEach(t=>{b(t).forEach(s=>{Object.keys(f[s]).forEach(l=>{Object.keys(f[s][l]).forEach(n=>{let a={Product:h(s).name,Variant:l,Modifiers:n,Quantity:f[s][l][n].quantity,"Total Price":f[s][l][n].amount.toFixed(2)};"All Orders"!=t&&(a.Vendor=t),e=[...e,a]})})})}),P(Papa.unparse(e),"orders.csv","text/csv;encoding:utf-8")}}},h,b,y,{container:"p-2 flex-none",label:"w-32"},d,i,u,p,l,a,{},m,function(e){let t=e.guest.phone;t.startsWith("01")&&(t="6"+t);let s=`https://api.whatsapp.com/send?phone=${t}&text=`,l="";e.payment&&(l=`Hey there! We *(${a.settings.name})* have received your order, tap here to pay now.`,l=`${l} 👉🏻 https://pay.getorders.app/?i=${e.invoice_id}\n\n`);let n=encodeURIComponent(l);document.location.href=`${s}${n}`},["bg-gray-400","bg-gray-400","bg-gray-400","bg-yellow-500","bg-red-400","bg-green-500","bg-pink-500","bg-theme"],function(e){n.type=e,o.set(n)},function(e){c=e,s(1,c)},()=>y(-1),()=>y(1)]}export default class extends e{constructor(e){var l;super(),N.getElementById("svelte-41lobs-style")||((l=n("style")).id="svelte-41lobs-style",l.textContent="td.svelte-41lobs{padding:0.5rem}",a(N.head,l)),t(this,e,C,_,s,{},[-1,-1])}}
//# sourceMappingURL=OrderSummary-4726714e.js.map
