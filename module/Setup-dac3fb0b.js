import{S as t,i as e,s as n,e as s,f as l,z as r,B as a,t as c,o as i,C as o,D as d,b as u,d as p,E as f,F as m,p as g,a as x,v as h,y as b,G as w,w as v,r as y,l as $,H as k,x as C,I as S,J as j,K as M,L as _,M as P,N as T,O as E,P as L,Q as A,R as H,T as I}from"./App-030e40b2.js";import{M as O}from"./UIModalView-308fca9c.js";import{T as N}from"./UITextField-bc893901.js";function D(t,e,n){const s=t.slice();return s[33]=e[n],s}function F(t,e,n){const s=t.slice();return s[36]=e[n],s}function R(t,e,n){const s=t.slice();return s[36]=e[n],s[40]=n,s}function q(t){let e;const n=new A({props:{$$slots:{message:[B]},$$scope:{ctx:t}}});return{c(){r(n.$$.fragment)},m(t,s){a(n,t,s),e=!0},i(t){e||(c(n.$$.fragment,t),e=!0)},o(t){i(n.$$.fragment,t),e=!1},d(t){o(n,t)}}}function B(t){let e;return{c(){e=s("div"),e.textContent="One Moment Please..",u(e,"slot","message")},m(t,n){p(t,e,n)},d(t){t&&g(e)}}}function Y(t){let e,n,l=t[9]&&q(t);return{c(){e=s("div"),l&&l.c(),u(e,"slot","loader")},m(t,s){p(t,e,s),l&&l.m(e,null),n=!0},p(t,n){t[9]?l?c(l,1):(l=q(t),l.c(),c(l,1),l.m(e,null)):l&&(f(),i(l,1,1,()=>{l=null}),m())},i(t){n||(c(l),n=!0)},o(t){i(l),n=!1},d(t){t&&g(e),l&&l.d()}}}function G(t){let e;return{c(){e=s("div"),e.textContent="Setup",u(e,"slot","title"),u(e,"class","text-center font-semibold text-2xl text-gray-600 m-2 flex")},m(t,n){p(t,e,n)},d(t){t&&g(e)}}}function J(t){let e;return{c(){e=s("span"),e.innerHTML='<i class="fa fa-check w-full fill-current white"></i>',u(e,"class","text-white text-center w-full")},m(t,n){p(t,e,n)},d(t){t&&g(e)}}}function U(t){let e;return{c(){e=s("span"),e.innerHTML='<i class="fa fa-ellipsis-h w-full fill-current white"></i>',u(e,"class","text-white text-center w-full")},m(t,n){p(t,e,n)},d(t){t&&g(e)}}}function z(t){let e;return{c(){e=s("span"),e.innerHTML='<i class="fa fa-check w-full fill-current white"></i>',u(e,"class","text-white text-center w-full")},m(t,n){p(t,e,n)},d(t){t&&g(e)}}}function K(t){let e,n,r,a,c;function i(t,e){return t[10].settings.step>t[40]+2?z:t[10].settings.step>t[40]+1?U:void 0}let o=i(t),d=o&&o(t);return{c(){e=s("div"),e.innerHTML='<div class="w-full bg-gray-300 rounded items-center align-middle align-center flex-1"><div class="bg-green-light text-xs leading-none py-1 text-center text-grey-darkest rounded w-full"></div></div>',n=x(),r=s("div"),a=s("div"),d&&d.c(),u(e,"class","w-1/6 align-center items-center align-middle content-center flex"),u(a,"class",c="w-10 h-10 bg-"+(t[10].settings.step>t[40]+2?"green":"gray")+"-500 mx-auto rounded-full text-lg text-white flex items-center"),u(r,"class","flex-1")},m(t,s){p(t,e,s),p(t,n,s),p(t,r,s),l(r,a),d&&d.m(a,null)},p(t,e){o!==(o=i(t))&&(d&&d.d(1),d=o&&o(t),d&&(d.c(),d.m(a,null))),1024&e[0]&&c!==(c="w-10 h-10 bg-"+(t[10].settings.step>t[40]+2?"green":"gray")+"-500 mx-auto rounded-full text-lg text-white flex items-center")&&u(a,"class",c)},d(t){t&&g(e),t&&g(n),t&&g(r),d&&d.d()}}}function Q(t){let e,n,r,a=t[36]+"";return{c(){e=s("div"),n=h(a),r=x(),u(e,"class","w-1/4")},m(t,s){p(t,e,s),l(e,n),l(e,r)},p:b,d(t){t&&g(e)}}}function V(t){let e,n,l,d,f,m,h,b;function v(e){t[24].call(null,e)}let y={style:t[13],label:"Company Name"};void 0!==t[10].settings.name&&(y.value=t[10].settings.name);const $=new N({props:y});function k(e){t[25].call(null,e)}L.push(()=>H($,"value",v));let C={style:t[13],label:"Billing Email"};void 0!==t[10].settings.billing_email&&(C.value=t[10].settings.billing_email);const S=new N({props:C});return L.push(()=>H(S,"value",k)),{c(){e=s("div"),e.textContent="Account Info",n=x(),l=s("p"),l.textContent="Fill in your details below to complete your account information.",d=x(),r($.$$.fragment),m=x(),r(S.$$.fragment),u(e,"class","border-b border-gray-300 m-3 text-teal-700 text-xl text-bold"),u(l,"class","text-center text-gray-600 mb-3")},m(t,s){p(t,e,s),p(t,n,s),p(t,l,s),p(t,d,s),a($,t,s),p(t,m,s),a(S,t,s),b=!0},p(t,e){const n={};!f&&1024&e[0]&&(f=!0,n.value=t[10].settings.name,w(()=>f=!1)),$.$set(n);const s={};!h&&1024&e[0]&&(h=!0,s.value=t[10].settings.billing_email,w(()=>h=!1)),S.$set(s)},i(t){b||(c($.$$.fragment,t),c(S.$$.fragment,t),b=!0)},o(t){i($.$$.fragment,t),i(S.$$.fragment,t),b=!1},d(t){t&&g(e),t&&g(n),t&&g(l),t&&g(d),o($,t),t&&g(m),o(S,t)}}}function W(t){let e,n,r,a,c,i,o,d,f,m,h,b,w,k,C,S,j,M,_,P,T,E,L,A;return{c(){e=s("p"),e.textContent="Fill in billing details to proceed. You will not be charged until your subscription starts.",n=x(),r=s("form"),a=s("div"),c=s("div"),i=s("label"),i.textContent="Name",o=x(),d=s("input"),f=x(),m=s("div"),h=s("label"),h.textContent="Email Address",b=x(),w=s("input"),k=x(),C=s("div"),S=s("div"),j=s("label"),j.textContent="Card Details",M=x(),_=s("div"),P=x(),T=s("div"),E=x(),L=s("div"),L.innerHTML='<img alt="Powered by Stripe" style="width:350px;height:60px;" src="https://cdn.glitch.com/6e0f0f76-4d72-45e5-ac7d-1057233d751f%2Fsecure-payments-powered-by-stripe.png?v=1574239488502">',u(e,"class","text-center text-gray-500"),u(i,"for","name"),u(i,"class","block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"),u(d,"class","w-64 px-3"),u(d,"placeholder","Jenny Rosen"),d.required=!0,u(c,"class","w-full p-3"),u(h,"for","email"),u(h,"class","block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"),u(w,"class","w-64 px-3"),u(w,"type","email"),u(w,"placeholder","jenny.rosen@example.com"),w.required=!0,u(m,"class","w-full p-3"),u(a,"class","flex flex-wrap -mx-3 mb-6"),u(j,"class","block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"),u(_,"class","px-3 pt-5"),u(T,"role","alert"),u(L,"class","w-full mt-3"),u(S,"class","w-full px-3"),u(C,"class","flex flex-wrap -mx-3 mb-6"),u(r,"action","/charge"),u(r,"method","post"),u(r,"id","payment-form"),u(r,"class","svelte-r9anwp")},m(s,u,g){p(s,e,u),p(s,n,u),p(s,r,u),l(r,a),l(a,c),l(c,i),l(c,o),l(c,d),v(d,t[2]),l(a,f),l(a,m),l(m,h),l(m,b),l(m,w),v(w,t[3]),l(r,k),l(r,C),l(C,S),l(S,j),l(S,M),l(S,_),t[28](_),l(S,P),l(S,T),t[29](T),l(S,E),l(S,L),g&&y(A),A=[$(d,"input",t[26]),$(w,"input",t[27])]},p(t,e){4&e[0]&&d.value!==t[2]&&v(d,t[2]),8&e[0]&&w.value!==t[3]&&v(w,t[3])},d(s){s&&g(e),s&&g(n),s&&g(r),t[28](null),t[29](null),y(A)}}}function X(t){let e,n,l;function r(t,e){return t[4]?Z:tt}let a=r(t),c=a(t);return{c(){e=s("p"),e.textContent="Select a Subscription Plan.",n=x(),c.c(),l=k(),u(e,"class","text-center text-gray-500")},m(t,s){p(t,e,s),p(t,n,s),c.m(t,s),p(t,l,s)},p(t,e){a===(a=r(t))&&c?c.p(t,e):(c.d(1),c=a(t),c&&(c.c(),c.m(l.parentNode,l)))},d(t){t&&g(e),t&&g(n),c.d(t),t&&g(l)}}}function Z(t){let e,n=t[4],l=[];for(let e=0;e<n.length;e+=1)l[e]=et(D(t,n,e));return{c(){e=s("div");for(let t=0;t<l.length;t+=1)l[t].c();u(e,"class","font-sans container m-auto flex flex-col flex-wrap sm:flex-row justify-center")},m(t,n){p(t,e,n);for(let t=0;t<l.length;t+=1)l[t].m(e,null)},p(t,s){if(48&s[0]){let r;for(n=t[4],r=0;r<n.length;r+=1){const a=D(t,n,r);l[r]?l[r].p(a,s):(l[r]=et(a),l[r].c(),l[r].m(e,null))}for(;r<l.length;r+=1)l[r].d(1);l.length=n.length}},d(t){t&&g(e),S(l,t)}}}function tt(t){let e;return{c(){e=h("Loading plans.. One moment.")},m(t,n){p(t,e,n)},p:b,d(t){t&&g(e)}}}function et(t){let e,n,r,a,c,i,o,d,f,m,b,w,v,y,k=t[33].nickname+"",S=I(t[33].metadata.desc)+"",j=t[33].amount/100+"",M=t[33].interval+"";function _(...e){return t[30](t[33],...e)}return{c(){e=s("div"),n=s("h2"),r=h(k),a=x(),c=s("p"),i=x(),o=s("p"),d=h("RM"),f=h(j),m=h(" / "),b=h(M),w=x(),u(n,"class","font-bold text-teal-600 text-xl"),u(o,"class","text-gray-500 font-bold"),u(e,"class",v="border mx-3 my-3 p-3 shadow w-1/3 cursor-pointer"+(t[5]==t[33].id?" border-green-500":""))},m(t,s,u){p(t,e,s),l(e,n),l(n,r),l(e,a),l(e,c),c.innerHTML=S,l(e,i),l(e,o),l(o,d),l(o,f),l(o,m),l(o,b),l(e,w),u&&y(),y=$(e,"click",_)},p(n,s){t=n,16&s[0]&&k!==(k=t[33].nickname+"")&&C(r,k),16&s[0]&&S!==(S=I(t[33].metadata.desc)+"")&&(c.innerHTML=S),16&s[0]&&j!==(j=t[33].amount/100+"")&&C(f,j),16&s[0]&&M!==(M=t[33].interval+"")&&C(b,M),48&s[0]&&v!==(v="border mx-3 my-3 p-3 shadow w-1/3 cursor-pointer"+(t[5]==t[33].id?" border-green-500":""))&&u(e,"class",v)},d(t){t&&g(e),y()}}}function nt(t){let e,n,r,a,c,i,o,d,f,m,h,b,w,k,C,S=""!=t[6].error&&st(t);return{c(){e=s("p"),e.innerHTML="\n    Your account is almost done! What&#39;s left now is to link <b>GetOrders</b> to a POS Cloud. \n  ",n=x(),r=s("form"),a=s("div"),c=s("div"),i=s("label"),i.textContent="Account Email",o=x(),d=s("input"),f=x(),m=s("div"),h=s("label"),h.textContent="Password",b=x(),w=s("input"),k=x(),S&&S.c(),u(e,"class","text-center text-gray-500"),u(i,"class","block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"),u(d,"class","border rounded shadow w-64 p-3"),u(d,"type","email"),u(d,"placeholder","johnyappleseed@example.com"),d.required=!0,u(c,"class","w-full p-3"),u(h,"class","block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"),u(w,"class","border rounded shadow w-64 p-3"),u(w,"type","password"),u(w,"placeholder","∙∙∙∙∙∙∙∙∙∙"),w.required=!0,u(m,"class","w-full p-3"),u(a,"class","flex flex-wrap mb-6"),u(r,"action","/login"),u(r,"method","post")},m(s,u,g){p(s,e,u),p(s,n,u),p(s,r,u),l(r,a),l(a,c),l(c,i),l(c,o),l(c,d),v(d,t[6].username),l(a,f),l(a,m),l(m,h),l(m,b),l(m,w),v(w,t[6].password),l(r,k),S&&S.m(r,null),g&&y(C),C=[$(d,"input",t[31]),$(w,"input",t[32])]},p(t,e){64&e[0]&&d.value!==t[6].username&&v(d,t[6].username),64&e[0]&&w.value!==t[6].password&&v(w,t[6].password),""!=t[6].error?S?S.p(t,e):(S=st(t),S.c(),S.m(r,null)):S&&(S.d(1),S=null)},d(t){t&&g(e),t&&g(n),t&&g(r),S&&S.d(),y(C)}}}function st(t){let e,n,r,a,c,i=t[6].error+"";return{c(){e=s("div"),n=s("strong"),n.textContent="Error",r=x(),a=s("span"),c=h(i),u(n,"class","font-bold"),u(a,"class","block sm:inline"),u(e,"class","bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"),u(e,"role","alert")},m(t,s){p(t,e,s),l(e,n),l(e,r),l(e,a),l(a,c)},p(t,e){64&e[0]&&i!==(i=t[6].error+"")&&C(c,i)},d(t){t&&g(e)}}}function lt(t){let e,n,r,a,c,i,o,d,f,m,h,b,w,v,y,$,k,C,S;function j(t,e){return t[7]||5!=t[10].settings.step?rt:at}let M=j(t),_=M(t);function P(t,e){return t[7]?t[8]+1<t[7].length?it:ct:ot}let T=P(t),E=T(t);function L(t,e){return t[7]?dt:ut}let A=L(t),H=A(t);function I(t,e){return 5==t[10].settings.step?ft:pt}let O=I(t),N=O(t);return{c(){e=s("div"),e.textContent="Preparing Your Account",n=x(),r=s("div"),a=s("table"),c=s("tbody"),i=s("tr"),o=s("td"),_.c(),d=x(),f=s("span"),f.textContent="Retrieve Outlets Information",m=x(),h=s("tr"),b=s("td"),E.c(),w=x(),v=s("span"),H.c(),y=x(),$=s("tr"),k=s("td"),N.c(),C=x(),S=s("span"),S.textContent="Save Changes",u(e,"class","border-b border-gray-300 m-3 text-teal-700 text-xl text-bold"),u(f,"class","pl-3"),u(o,"class","border px-4 py-2"),u(v,"class","pl-3"),u(b,"class","border px-4 py-2"),u(h,"class","bg-gray-100"),u(S,"class","pl-3"),u(k,"class","border px-4 py-2"),u(a,"class","table-auto"),u(r,"class","p-3")},m(t,s){p(t,e,s),p(t,n,s),p(t,r,s),l(r,a),l(a,c),l(c,i),l(i,o),_.m(o,null),l(o,d),l(o,f),l(c,m),l(c,h),l(h,b),E.m(b,null),l(b,w),l(b,v),H.m(v,null),l(c,y),l(c,$),l($,k),N.m(k,null),l(k,C),l(k,S)},p(t,e){M!==(M=j(t))&&(_.d(1),_=M(t),_&&(_.c(),_.m(o,d))),T!==(T=P(t))&&(E.d(1),E=T(t),E&&(E.c(),E.m(b,w))),A===(A=L(t))&&H?H.p(t,e):(H.d(1),H=A(t),H&&(H.c(),H.m(v,null))),O!==(O=I(t))&&(N.d(1),N=O(t),N&&(N.c(),N.m(k,C)))},d(t){t&&g(e),t&&g(n),t&&g(r),_.d(),E.d(),H.d(),N.d()}}}function rt(t){let e;return{c(){e=s("i"),u(e,"class","fas fa-check-circle text-teal-700")},m(t,n){p(t,e,n)},d(t){t&&g(e)}}}function at(t){let e;return{c(){e=s("i"),u(e,"class","fas fa-spinner fa-spin")},m(t,n){p(t,e,n)},d(t){t&&g(e)}}}function ct(t){let e;return{c(){e=s("i"),u(e,"class","fas fa-check-circle text-teal-700")},m(t,n){p(t,e,n)},d(t){t&&g(e)}}}function it(t){let e;return{c(){e=s("i"),u(e,"class","fas fa-spinner fa-spin")},m(t,n){p(t,e,n)},d(t){t&&g(e)}}}function ot(t){let e;return{c(){e=s("i"),u(e,"class","fas fa-ellipsis-h")},m(t,n){p(t,e,n)},d(t){t&&g(e)}}}function dt(t){let e,n,r,a,c,i,o,d,u=t[7][t[8]].name+"",f=t[8]+1+"",m=t[7].length+"";return{c(){e=h("Now Syncing "),n=s("b"),r=h(u),a=h(" ("),c=h(f),i=h(" / "),o=h(m),d=h(")")},m(t,s){p(t,e,s),p(t,n,s),l(n,r),p(t,a,s),p(t,c,s),p(t,i,s),p(t,o,s),p(t,d,s)},p(t,e){384&e[0]&&u!==(u=t[7][t[8]].name+"")&&C(r,u),256&e[0]&&f!==(f=t[8]+1+"")&&C(c,f),128&e[0]&&m!==(m=t[7].length+"")&&C(o,m)},d(t){t&&g(e),t&&g(n),t&&g(a),t&&g(c),t&&g(i),t&&g(o),t&&g(d)}}}function ut(t){let e;return{c(){e=h("Sync Outlet Products")},m(t,n){p(t,e,n)},p:b,d(t){t&&g(e)}}}function pt(t){let e;return{c(){e=s("i"),u(e,"class","fas fa-check-circle text-teal-700")},m(t,n){p(t,e,n)},d(t){t&&g(e)}}}function ft(t){let e;return{c(){e=s("i"),u(e,"class","fas fa-spinner fa-spin")},m(t,n){p(t,e,n)},d(t){t&&g(e)}}}function mt(t){let e,n,r,a,c=t[10].settings.step>5?"Done":"Next";return{c(){e=s("div"),n=s("button"),r=h(c),u(n,"class","rounded bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 w-1/2 h-12 my-4"),u(n,"type","button"),u(e,"class","text-center w-full")},m(s,c,i){p(s,e,c),l(e,n),l(n,r),i&&a(),a=$(n,"click",t[12])},p(t,e){1024&e[0]&&c!==(c=t[10].settings.step>5?"Done":"Next")&&C(r,c)},d(t){t&&g(e),a()}}}function gt(t){let e,n,r,a,o,d,h,b,w,v,y,$,k,C,j,M,_,P,T,E,L,A,H,I=t[10].settings.step>1&&J(),O=t[11],N=[];for(let e=0;e<O.length;e+=1)N[e]=K(R(t,O,e));let D=t[11],q=[];for(let e=0;e<D.length;e+=1)q[e]=Q(F(t,D,e));let B=1==t[10].settings.step&&V(t),Y=2==t[10].settings.step&&W(t),G=3==t[10].settings.step&&X(t),U=4==t[10].settings.step&&nt(t),z=t[10].settings.step>4&&lt(t),Z=5!=t[10].settings.step&&mt(t);return{c(){e=s("div"),n=s("div"),r=s("div"),a=s("div"),o=x(),d=s("div"),h=s("div"),I&&I.c(),w=x();for(let t=0;t<N.length;t+=1)N[t].c();v=x(),y=s("div"),$=x(),k=s("div"),C=s("div"),C.textContent="Setup Profile",j=x();for(let t=0;t<q.length;t+=1)q[t].c();M=x(),_=s("div"),B&&B.c(),P=x(),Y&&Y.c(),T=x(),G&&G.c(),E=x(),U&&U.c(),L=x(),z&&z.c(),A=x(),Z&&Z.c(),u(a,"class","flex-1"),u(h,"class",b="w-10 h-10 bg-"+(t[10].settings.step>1?"green":"gray")+"-500 mx-auto rounded-full text-lg text-white flex items-center"),u(d,"class","flex-1"),u(y,"class","flex-1"),u(r,"class","flex pb-3"),u(C,"class","w-1/4"),u(k,"class","flex text-xs content-center text-center"),u(n,"class","max-w-xl mx-auto my-4 pb-4"),u(_,"class","border mx-3 my-3 p-3 shadow overflow-hidden"),u(e,"slot","content")},m(t,s){p(t,e,s),l(e,n),l(n,r),l(r,a),l(r,o),l(r,d),l(d,h),I&&I.m(h,null),l(r,w);for(let t=0;t<N.length;t+=1)N[t].m(r,null);l(r,v),l(r,y),l(n,$),l(n,k),l(k,C),l(k,j);for(let t=0;t<q.length;t+=1)q[t].m(k,null);l(e,M),l(e,_),B&&B.m(_,null),l(_,P),Y&&Y.m(_,null),l(_,T),G&&G.m(_,null),l(_,E),U&&U.m(_,null),l(_,L),z&&z.m(_,null),l(_,A),Z&&Z.m(_,null),H=!0},p(t,e){if(t[10].settings.step>1?I||(I=J(),I.c(),I.m(h,null)):I&&(I.d(1),I=null),(!H||1024&e[0]&&b!==(b="w-10 h-10 bg-"+(t[10].settings.step>1?"green":"gray")+"-500 mx-auto rounded-full text-lg text-white flex items-center"))&&u(h,"class",b),1024&e[0]){let n;for(O=t[11],n=0;n<O.length;n+=1){const s=R(t,O,n);N[n]?N[n].p(s,e):(N[n]=K(s),N[n].c(),N[n].m(r,v))}for(;n<N.length;n+=1)N[n].d(1);N.length=O.length}if(2048&e[0]){let n;for(D=t[11],n=0;n<D.length;n+=1){const s=F(t,D,n);q[n]?q[n].p(s,e):(q[n]=Q(s),q[n].c(),q[n].m(k,null))}for(;n<q.length;n+=1)q[n].d(1);q.length=D.length}1==t[10].settings.step?B?(B.p(t,e),c(B,1)):(B=V(t),B.c(),c(B,1),B.m(_,P)):B&&(f(),i(B,1,1,()=>{B=null}),m()),2==t[10].settings.step?Y?Y.p(t,e):(Y=W(t),Y.c(),Y.m(_,T)):Y&&(Y.d(1),Y=null),3==t[10].settings.step?G?G.p(t,e):(G=X(t),G.c(),G.m(_,E)):G&&(G.d(1),G=null),4==t[10].settings.step?U?U.p(t,e):(U=nt(t),U.c(),U.m(_,L)):U&&(U.d(1),U=null),t[10].settings.step>4?z?z.p(t,e):(z=lt(t),z.c(),z.m(_,A)):z&&(z.d(1),z=null),5!=t[10].settings.step?Z?Z.p(t,e):(Z=mt(t),Z.c(),Z.m(_,null)):Z&&(Z.d(1),Z=null)},i(t){H||(c(B),H=!0)},o(t){i(B),H=!1},d(t){t&&g(e),I&&I.d(),S(N,t),S(q,t),B&&B.d(),Y&&Y.d(),G&&G.d(),U&&U.d(),z&&z.d(),Z&&Z.d()}}}function xt(t){let e,n;return{c(){e=x(),n=x()},m(t,s){p(t,e,s),p(t,n,s)},p:b,i:b,o:b,d(t){t&&g(e),t&&g(n)}}}function ht(t){let e;const n=new O({props:{dismiss:"false",$$slots:{default:[xt],content:[gt],title:[G],loader:[Y]},$$scope:{ctx:t}}});return{c(){r(n.$$.fragment)},m(t,s){a(n,t,s),e=!0},p(t,e){const s={};2047&e[0]|1024&e[1]&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){e||(c(n.$$.fragment,t),e=!0)},o(t){i(n.$$.fragment,t),e=!1},d(t){o(n,t)}}}function bt(t,e,n){let s,l,r;d(t,j,t=>n(10,s=t)),d(t,M,t=>n(16,l=t)),d(t,_,t=>n(17,r=t));let a,c,i,o,u,p,f="",m="",g=!1,x={username:"",password:"",error:""},h=0,b=!1;function w(){n(9,b=!0),fetch(P("/plans"),T()).then(t=>t.json()).then(t=>{t.errorMessage?w():(n(4,o=t.data.sort((t,e)=>parseInt(t.metadata.sort)-parseInt(e.metadata.sort))),n(9,b=!1))})}function v(t){n(8,h=t);let e=p[t].id;fetch(P("/accounts/refresh"),T({outlet_id:e})).then(t=>t.json()).then(e=>{t+1==p.length?y({step:s.settings.step+1}):v(t+1)})}function y(t){(async()=>{n(9,b=!0),await fetch(P("/settings"),T(t)).then(t=>t.json()).then(t=>{E(j,s=t),n(9,b=!1),console.log(t)}).catch(t=>{})})()}return t.$$.update=()=>{64&t.$$.dirty[0]&&""!=x.password&&""!=x.error&&n(6,x.error="",x),33937&t.$$.dirty[0]&&s.settings&&(2==s.settings.step&&!g&&a&&((async()=>{n(9,b=!0),await fetch(P("/billing/intent"),T({customer:s.id})).then(t=>t.json()).then(t=>{i=t.client_secret,n(9,b=!1)}).catch(t=>{})})(),n(15,g=!0)),3!=s.settings.step||o||w(),5!=s.settings.step||p||(n(9,b=!0),fetch(P("/accounts"),T()).then(t=>t.json()).then(t=>{n(9,b=!1),E(M,l=t),n(7,p=[]),t.forEach(t=>{n(7,p=[...p,...t.outlets])}),console.log(p),v(0)}).catch(t=>{})))},[a,c,f,m,o,u,x,p,h,b,s,["Provide Billing Details","Select a Plan","Link Account"],function(){switch(s.settings.step){case 1:y({...s.settings,step:s.settings.step+3});case 2:if(g){n(9,b=!0);let t={name:f,email:m};(void 0).confirmCardSetup(i,{payment_method:{card:void 0,billing_details:t}}).then((function(e){n(9,b=!1),console.log(e),e.error||(n(9,b=!0),t.customer=s.id,t.payment_method=e.setupIntent.payment_method,fetch(P("/billing/confirm"),T(t)).then(t=>t.json()).then(t=>{n(9,b=!1),y({step:s.settings.step+1})}).catch(t=>{}))}))}break;case 3:u&&(n(9,b=!0),fetch(P("/billing/subscribe"),T({plan_id:u})).then(t=>t.json()).then(t=>{n(9,b=!1),y({step:s.settings.step+1})}).catch(t=>{}));break;case 4:""!=x.username&&""!=x.password&&(n(9,b=!0),fetch(P("/accounts/link"),T(x)).then(t=>t.json()).then(t=>{n(9,b=!1),t.status?y({step:s.settings.step+1}):(n(6,x.password="",x),n(6,x.error=t.error||"An Error Occured. Try Again.",x))}).catch(t=>{}));break;case 6:E(_,r=[])}},{label:"w-32",container:"p-2"},i,g,l,r,void 0,void 0,w,v,{Account:{name:{desc:"Account name",value:""}},Points:{multiplier:{desc:"Points awarded per spending",value:1},rounding:{desc:"Rounding for spending amount",value:["no_rounding","round_down","round_up"]}}},y,function(t){s.settings.name=t,j.set(s)},function(t){s.settings.billing_email=t,j.set(s)},function(){f=this.value,n(2,f)},function(){m=this.value,n(3,m)},function(t){L[t?"unshift":"push"](()=>{n(0,a=t)})},function(t){L[t?"unshift":"push"](()=>{n(1,c=t)})},t=>n(5,u=t.id),function(){x.username=this.value,n(6,x)},function(){x.password=this.value,n(6,x)}]}export default class extends t{constructor(t){var r;super(),document.getElementById("svelte-r9anwp-style")||((r=s("style")).id="svelte-r9anwp-style",r.textContent="#payment-form.svelte-r9anwp input, .StripeElement{height:40px;color:#32325d;background-color:white;border:1px solid transparent;border-radius:4px;box-shadow:0 1px 3px 0 #e6ebf1;-webkit-transition:box-shadow 150ms ease;transition:box-shadow 150ms ease}#payment-form.svelte-r9anwp input:focus, .StripeElement--focus{box-shadow:0 1px 3px 0 #cfd7df}#payment-form.svelte-r9anwp .StripeElement--invalid{border-color:#fa755a}",l(document.head,r)),e(this,t,bt,ht,n,{},[-1,-1])}}
//# sourceMappingURL=Setup-dac3fb0b.js.map
