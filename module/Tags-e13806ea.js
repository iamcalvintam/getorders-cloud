import{S as t,i as e,s,x as n,c as a,r,o,u as c,k as i,h as f,q as l,R as p,T as d,D as u,E as m,F as $,j as h,m as g,p as x,U as y,L as _,e as j,b,V as U,a as k,t as w,d as I,l as v,g as F}from"./App-f68c8e9b.js";import"./UITextField-9a96bf2d.js";import{U as M}from"./UIItem-912d528b.js";function N(t,e,s){const n=t.slice();return n[4]=e[s],n}function T(t){let e,s,l=[],p=new Map,d=t[0];const u=t=>t[4].id;for(let e=0;e<d.length;e+=1){let s=N(t,d,e),n=u(s);p.set(n,l[e]=C(n,s))}return{c(){for(let t=0;t<l.length;t+=1)l[t].c();e=n()},m(t,n){for(let e=0;e<l.length;e+=1)l[e].m(t,n);a(t,e,n),s=!0},p(t,s){if(3&s){const n=t[0];r(),l=y(l,s,u,1,t,n,p,e.parentNode,U,C,e,N),c()}},i(t){if(!s){for(let t=0;t<d.length;t+=1)i(l[t]);s=!0}},o(t){for(let t=0;t<l.length;t+=1)o(l[t]);s=!1},d(t){for(let e=0;e<l.length;e+=1)l[e].d(t);t&&f(e)}}}function q(t){let e;const s=new _({props:{$$slots:{message:[D]},$$scope:{ctx:t}}});return{c(){h(s.$$.fragment)},m(t,n){g(s,t,n),e=!0},p(t,e){const n={};128&e&&(n.$$scope={dirty:e,ctx:t}),s.$set(n)},i(t){e||(i(s.$$.fragment,t),e=!0)},o(t){o(s.$$.fragment,t),e=!1},d(t){x(s,t)}}}function A(t){let e,s,n,r,o,c,i,l=t[4].name+"";function p(...e){return t[3](t[4],...e)}return{c(){e=j("div"),s=j("i"),r=k(),o=w(l),c=k(),b(s,"class",n="pr-3 fas "+(t[4].app_hidden?"fa-eye-slash":"fa-eye")),b(e,"class","m-3")},m(t,n,f){a(t,e,n),I(e,s),I(e,r),I(e,o),a(t,c,n),f&&i(),i=v(s,"click",p)},p(e,a){t=e,1&a&&n!==(n="pr-3 fas "+(t[4].app_hidden?"fa-eye-slash":"fa-eye"))&&b(s,"class",n),1&a&&l!==(l=t[4].name+"")&&F(o,l)},d(t){t&&f(e),t&&f(c),i()}}}function C(t,e){let s,r;const c=new M({props:{$$slots:{default:[A]},$$scope:{ctx:e}}});return{key:t,first:null,c(){s=n(),h(c.$$.fragment),this.first=s},m(t,e){a(t,s,e),g(c,t,e),r=!0},p(t,e){const s={};129&e&&(s.$$scope={dirty:e,ctx:t}),c.$set(s)},i(t){r||(i(c.$$.fragment,t),r=!0)},o(t){o(c.$$.fragment,t),r=!1},d(t){t&&f(s),x(c,t)}}}function D(t){let e;return{c(){e=j("div"),e.textContent="One Moment Please..",b(e,"slot","message")},m(t,s){a(t,e,s)},d(t){t&&f(e)}}}function E(t){let e,s,l,p;const d=[q,T],u=[];function m(t,e){return t[0]?1:0}return e=m(t),s=u[e]=d[e](t),{c(){s.c(),l=n()},m(t,s){u[e].m(t,s),a(t,l,s),p=!0},p(t,[n]){let a=e;e=m(t),e===a?u[e].p(t,n):(r(),o(u[a],1,1,()=>{u[a]=null}),c(),s=u[e],s||(s=u[e]=d[e](t),s.c()),i(s,1),s.m(l.parentNode,l))},i(t){p||(i(s),p=!0)},o(t){o(s),p=!1},d(t){u[e].d(t),t&&f(l)}}}function L(t,e,s){let n,a;function r(t,e){$(p,n=!0),u(m(`/tags/${t}`),{app_hidden:e}).then((function(t){return $(p,n=!1),t.json()})).then((function(t){s(0,a=a.map(e=>e._id===t._id?t:e))}))}l(t,p,t=>s(2,n=t)),d(()=>{u(m("/tags")).then(t=>s(0,a=t))});return[a,r,n,t=>r(t.id,t.app_hidden?"false":"true")]}export default class extends t{constructor(t){super(),e(this,t,L,E,s,{})}}
//# sourceMappingURL=Tags-e13806ea.js.map
