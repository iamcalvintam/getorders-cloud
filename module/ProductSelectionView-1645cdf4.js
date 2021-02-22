import{S as e,i as t,s,M as n,j as o,m as l,k as c,o as r,p as a,q as i,X as f,e as d,b as u,c as m,h as p,r as $,u as g,y as h,n as x,a as _,R as v,C as b,t as y,d as j,l as k,g as q}from"./Web-e295f046.js";import"./UITextField-99997e85.js";import{T as w}from"./UIToolbar-5535454f.js";import{U as I}from"./UIItem-4ddab414.js";function U(e,t,s){const n=e.slice();return n[12]=t[s],n}function C(e){let t;return{c(){t=d("div"),t.textContent="Select Products",u(t,"slot","title"),u(t,"class","font-semibold text-xl text-gray-600 pb-3")},m(e,s){m(e,t,s)},d(e){e&&p(t)}}}function S(e){let t,s,n,o,l,c,r,a,i=e[12].name+"";function f(...t){return e[9](e[12],...t)}return{c(){t=d("div"),s=d("i"),o=_(),l=y(i),c=_(),u(s,"class",n="pr-3 self-center fas "+(e[5](e[12])?"fa-check-square":"fa-square")),u(t,"class","flex w-full m-3")},m(e,n){m(e,t,n),j(t,s),j(t,o),j(t,l),m(e,c,n),r||(a=k(t,"click",f),r=!0)},p(t,o){e=t,1&o&&n!==(n="pr-3 self-center fas "+(e[5](e[12])?"fa-check-square":"fa-square"))&&u(s,"class",n),1&o&&i!==(i=e[12].name+"")&&q(l,i)},d(e){e&&p(t),e&&p(c),r=!1,a()}}}function T(e){let t,s;return t=new I({props:{$$slots:{default:[S]},$$scope:{ctx:e}}}),{c(){o(t.$$.fragment)},m(e,n){l(t,e,n),s=!0},p(e,s){const n={};32769&s&&(n.$$scope={dirty:s,ctx:e}),t.$set(n)},i(e){s||(c(t.$$.fragment,e),s=!0)},o(e){r(t.$$.fragment,e),s=!1},d(e){a(t,e)}}}function P(e){let t,s,n=e[0],o=[];for(let t=0;t<n.length;t+=1)o[t]=T(U(e,n,t));const l=e=>r(o[e],1,1,()=>{o[e]=null});return{c(){t=d("div");for(let e=0;e<o.length;e+=1)o[e].c();u(t,"slot","content"),u(t,"class","p-2")},m(e,n){m(e,t,n);for(let e=0;e<o.length;e+=1)o[e].m(t,null);s=!0},p(e,s){if(97&s){let r;for(n=e[0],r=0;r<n.length;r+=1){const l=U(e,n,r);o[r]?(o[r].p(l,s),c(o[r],1)):(o[r]=T(l),o[r].c(),c(o[r],1),o[r].m(t,null))}for($(),r=n.length;r<o.length;r+=1)l(r);g()}},i(e){if(!s){for(let e=0;e<n.length;e+=1)c(o[e]);s=!0}},o(e){o=o.filter(Boolean);for(let e=0;e<o.length;e+=1)r(o[e]);s=!1},d(e){e&&p(t),h(o,e)}}}function B(e){let t,s,n;return s=new w({props:{tools:e[2],style:e[3]}}),s.$on("selected",e[4]),{c(){t=d("div"),o(s.$$.fragment),u(t,"slot","toolbar")},m(e,o){m(e,t,o),l(s,t,null),n=!0},p:x,i(e){n||(c(s.$$.fragment,e),n=!0)},o(e){r(s.$$.fragment,e),n=!1},d(e){e&&p(t),a(s)}}}function F(e){let t,s;return{c(){t=_(),s=_()},m(e,n){m(e,t,n),m(e,s,n)},p:x,i:x,o:x,d(e){e&&p(t),e&&p(s)}}}function M(e){let t,s;return t=new n({props:{style:e[1],$$slots:{default:[F],toolbar:[B],content:[P],title:[C]},$$scope:{ctx:e}}}),{c(){o(t.$$.fragment)},m(e,n){l(t,e,n),s=!0},p(e,[s]){const n={};32769&s&&(n.$$scope={dirty:s,ctx:e}),t.$set(n)},i(e){s||(c(t.$$.fragment,e),s=!0)},o(e){r(t.$$.fragment,e),s=!1},d(e){a(t,e)}}}function R(e,t,s){let n;i(e,f,e=>s(10,n=e));let{products:o=[]}=t,{selected_prods:l=[]}=t,{max_selection:c=0}=t;function r(e){let t=l.length;s(7,l=l.filter(t=>t.id!=e.id)),l.length==t&&s(7,l=[...l,{id:""+e.id,name:e.name,variants:e.variants||[]}]),s(0,o)}return e.$$set=e=>{"products"in e&&s(0,o=e.products),"selected_prods"in e&&s(7,l=e.selected_prods),"max_selection"in e&&s(8,c=e.max_selection)},[o,{body:"screen-height-xs",content:"overflow-y-scroll scrolling-touch"},[{name:"Close",icon:"close-circle",function:"pop_modal"},{name:"Save",icon:"checkmark-circle",function:"save"}],{container:"justify-end"},function(e){"pop_modal"==e.detail.function&&v(),"save"==e.detail.function&&(b(f,n={selected_prods:l}),v())},function(e){return l.find(t=>t.id==e.id)},r,l,c,e=>{r(e)}]}class W extends e{constructor(e){super(),t(this,e,R,M,s,{products:0,selected_prods:7,max_selection:8})}}export{W as P};
//# sourceMappingURL=ProductSelectionView-1645cdf4.js.map
