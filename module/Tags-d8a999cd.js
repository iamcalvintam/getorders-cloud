import{S as e,i as t,s,x as n,c as a,r,o,u as c,k as l,h as f,q as i,U as p,V as d,D as m,E as u,C as $,j as g,m as h,p as x,y,L as _,e as j,b as U,a as b,t as I,d as k,l as v,g as w}from"./Web-e295f046.js";import"./UITextField-99997e85.js";import{U as C}from"./UIItem-4ddab414.js";function N(e,t,s){const n=e.slice();return n[4]=t[s],n}function q(e){let t,s,i=e[0],p=[];for(let t=0;t<i.length;t+=1)p[t]=E(N(e,i,t));const d=e=>o(p[e],1,1,()=>{p[e]=null});return{c(){for(let e=0;e<p.length;e+=1)p[e].c();t=n()},m(e,n){for(let t=0;t<p.length;t+=1)p[t].m(e,n);a(e,t,n),s=!0},p(e,s){if(3&s){let n;for(i=e[0],n=0;n<i.length;n+=1){const a=N(e,i,n);p[n]?(p[n].p(a,s),l(p[n],1)):(p[n]=E(a),p[n].c(),l(p[n],1),p[n].m(t.parentNode,t))}for(r(),n=i.length;n<p.length;n+=1)d(n);c()}},i(e){if(!s){for(let e=0;e<i.length;e+=1)l(p[e]);s=!0}},o(e){p=p.filter(Boolean);for(let e=0;e<p.length;e+=1)o(p[e]);s=!1},d(e){y(p,e),e&&f(t)}}}function B(e){let t,s;return t=new _({props:{type:"h-64",$$slots:{message:[F]},$$scope:{ctx:e}}}),{c(){g(t.$$.fragment)},m(e,n){h(t,e,n),s=!0},p(e,s){const n={};128&s&&(n.$$scope={dirty:s,ctx:e}),t.$set(n)},i(e){s||(l(t.$$.fragment,e),s=!0)},o(e){o(t.$$.fragment,e),s=!1},d(e){x(t,e)}}}function D(e){let t,s,n,r,o,c,l,i,p=e[4].name+"";function d(...t){return e[2](e[4],...t)}return{c(){t=j("div"),s=j("i"),r=b(),o=I(p),c=b(),U(s,"class",n="pr-3 fas "+(e[4].app_hidden?"fa-eye-slash":"fa-eye")),U(t,"class","m-3")},m(e,n){a(e,t,n),k(t,s),k(t,r),k(t,o),a(e,c,n),l||(i=v(s,"click",d),l=!0)},p(t,a){e=t,1&a&&n!==(n="pr-3 fas "+(e[4].app_hidden?"fa-eye-slash":"fa-eye"))&&U(s,"class",n),1&a&&p!==(p=e[4].name+"")&&w(o,p)},d(e){e&&f(t),e&&f(c),l=!1,i()}}}function E(e){let t,s;return t=new C({props:{$$slots:{default:[D]},$$scope:{ctx:e}}}),{c(){g(t.$$.fragment)},m(e,n){h(t,e,n),s=!0},p(e,s){const n={};129&s&&(n.$$scope={dirty:s,ctx:e}),t.$set(n)},i(e){s||(l(t.$$.fragment,e),s=!0)},o(e){o(t.$$.fragment,e),s=!1},d(e){x(t,e)}}}function F(e){let t;return{c(){t=j("div"),t.textContent="One Moment Please..",U(t,"slot","message")},m(e,s){a(e,t,s)},d(e){e&&f(t)}}}function L(e){let t,s,i,p;const d=[B,q],m=[];function u(e,t){return e[0]?1:0}return t=u(e),s=m[t]=d[t](e),{c(){s.c(),i=n()},m(e,s){m[t].m(e,s),a(e,i,s),p=!0},p(e,[n]){let a=t;t=u(e),t===a?m[t].p(e,n):(r(),o(m[a],1,1,()=>{m[a]=null}),c(),s=m[t],s||(s=m[t]=d[t](e),s.c()),l(s,1),s.m(i.parentNode,i))},i(e){p||(l(s),p=!0)},o(e){o(s),p=!1},d(e){m[t].d(e),e&&f(i)}}}function M(e,t,s){let n,a;function r(e,t){$(p,n=!0),m(u("/tags/"+e),{app_hidden:t}).then(e=>{$(p,n=!1),s(0,a=a.map(t=>t._id==e._id?e:t))})}i(e,p,e=>s(3,n=e)),d(()=>{m(u("/tags")).then(e=>s(0,a=e))});return[a,r,e=>r(e.id||e._id,e.app_hidden?"false":"true")]}export default class extends e{constructor(e){super(),t(this,e,M,L,s,{})}}
//# sourceMappingURL=Tags-d8a999cd.js.map
