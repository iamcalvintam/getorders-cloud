import{S as t,i as e,s as n,x as r,c as s,r as a,o,u as l,k as c,h as f,q as i,A as d,V as m,E as g,a1 as u,e as h,t as p,a as $,b as x,d as b,g as Y,y as v,n as j,L as y,j as w,m as A,p as D}from"./Web-e295f046.js";import{d as M}from"./dayjs.min-056200c8.js";function _(t,e,n){const r=t.slice();return r[7]=e[n],r}function k(t,e,n){const r=t.slice();return r[4]=e[n],r}function E(t){let e,n=t[0],a=[];for(let e=0;e<n.length;e+=1)a[e]=C(k(t,n,e));return{c(){for(let t=0;t<a.length;t+=1)a[t].c();e=r()},m(t,n){for(let e=0;e<a.length;e+=1)a[e].m(t,n);s(t,e,n)},p(t,r){if(3&r){let s;for(n=t[0],s=0;s<n.length;s+=1){const o=k(t,n,s);a[s]?a[s].p(o,r):(a[s]=C(o),a[s].c(),a[s].m(e.parentNode,e))}for(;s<a.length;s+=1)a[s].d(1);a.length=n.length}},i:j,o:j,d(t){v(a,t),t&&f(e)}}}function N(t){let e,n;return e=new y({props:{$$slots:{message:[G]},$$scope:{ctx:t}}}),{c(){w(e.$$.fragment)},m(t,r){A(e,t,r),n=!0},p(t,n){const r={};1024&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){n||(c(e.$$.fragment,t),n=!0)},o(t){o(e.$$.fragment,t),n=!1},d(t){D(e,t)}}}function q(t){let e,n,r,a,o,l,c,i,d,m,g,u=M(t[7].createdAt).format("h:mm a")+"",v=t[7].table_name+"",j=t[7].orders.length+"";return{c(){e=h("div"),n=h("div"),r=p(u),a=$(),o=h("div"),l=p("Table "),c=p(v),i=$(),d=h("div"),m=p(j),g=p(" orders"),x(n,"class","w-24 text-gray-600 self-center"),x(o,"class","flex-grow self-center"),x(d,"class","rounded-lg bg-orange-400 text-white p-2 text-sm"),x(e,"class","p-3 flex")},m(t,f){s(t,e,f),b(e,n),b(n,r),b(e,a),b(e,o),b(o,l),b(o,c),b(e,i),b(e,d),b(d,m),b(d,g)},p(t,e){1&e&&u!==(u=M(t[7].createdAt).format("h:mm a")+"")&&Y(r,u),1&e&&v!==(v=t[7].table_name+"")&&Y(c,v),1&e&&j!==(j=t[7].orders.length+"")&&Y(m,j)},d(t){t&&f(e)}}}function C(t){let e,n,r,a,o,l=t[4]+"",c=t[1](t[4]),i=[];for(let e=0;e<c.length;e+=1)i[e]=q(_(t,c,e));return{c(){e=h("div"),n=h("div"),r=p(l),a=$();for(let t=0;t<i.length;t+=1)i[t].c();o=$(),x(n,"class","p-3 bg-gray-500 text-white")},m(t,l){s(t,e,l),b(e,n),b(n,r),b(e,a);for(let t=0;t<i.length;t+=1)i[t].m(e,null);b(e,o)},p(t,n){if(1&n&&l!==(l=t[4]+"")&&Y(r,l),3&n){let r;for(c=t[1](t[4]),r=0;r<c.length;r+=1){const s=_(t,c,r);i[r]?i[r].p(s,n):(i[r]=q(s),i[r].c(),i[r].m(e,o))}for(;r<i.length;r+=1)i[r].d(1);i.length=c.length}},d(t){t&&f(e),v(i,t)}}}function G(t){let e;return{c(){e=h("div"),e.textContent="Generating Report..",x(e,"slot","message")},m(t,n){s(t,e,n)},d(t){t&&f(e)}}}function L(t){let e,n,i,d;const m=[N,E],g=[];function u(t,e){return 0==t[0].length?0:1}return e=u(t),n=g[e]=m[e](t),{c(){n.c(),i=r()},m(t,n){g[e].m(t,n),s(t,i,n),d=!0},p(t,[r]){let s=e;e=u(t),e===s?g[e].p(t,r):(a(),o(g[s],1,1,()=>{g[s]=null}),l(),n=g[e],n||(n=g[e]=m[e](t),n.c()),c(n,1),n.m(i.parentNode,i))},i(t){d||(c(n),d=!0)},o(t){o(n),d=!1},d(t){g[e].d(t),t&&f(i)}}}function O(t,e,n){let r;i(t,d,t=>n(3,r=t));let s=[],a=[];return m(()=>{fetch(g("/report/orders"),u({fran_id:r[0].franchise_id})).then(t=>t.json()).then(t=>{s=t;let e={};t.forEach(t=>{e[M(t.createdAt).format("DD/MM/YYYY")]=""}),n(0,a=Object.keys(e))})}),[a,function(t){return s.filter(e=>t==M(e.createdAt).format("DD/MM/YYYY"))}]}export default class extends t{constructor(t){super(),e(this,t,O,L,n,{})}}
//# sourceMappingURL=Report_Orders-fc350a41.js.map
