import{S as t,i as e,s as n,M as s,j as o,m as l,k as r,o as a,p as c,e as i,b as d,c as u,r as p,u as g,h as f,a as m,t as x,d as h,g as w,f as $,w as b,l as y,n as v,J as C,L as k}from"./App-d72961d7.js";function A(t){let e;const n=new k({props:{$$slots:{message:[P]},$$scope:{ctx:t}}});return{c(){o(n.$$.fragment)},m(t,s){l(n,t,s),e=!0},i(t){e||(r(n.$$.fragment,t),e=!0)},o(t){a(n.$$.fragment,t),e=!1},d(t){c(n,t)}}}function P(t){let e;return{c(){e=i("div"),e.textContent="One Moment Please..",d(e,"slot","message")},m(t,n){u(t,e,n)},d(t){t&&f(e)}}}function S(t){let e,n,s=t[3]&&A(t);return{c(){e=i("div"),s&&s.c(),d(e,"slot","loader")},m(t,o){u(t,e,o),s&&s.m(e,null),n=!0},p(t,n){t[3]?s?r(s,1):(s=A(t),s.c(),r(s,1),s.m(e,null)):s&&(p(),a(s,1,1,()=>{s=null}),g())},i(t){n||(r(s),n=!0)},o(t){a(s),n=!1},d(t){t&&f(e),s&&s.d()}}}function j(t){let e;return{c(){e=i("div"),e.textContent="Welcome",d(e,"slot","title"),d(e,"class","text-center font-semibold text-2xl text-gray-600 m-2")},m(t,n){u(t,e,n)},d(t){t&&f(e)}}}function I(t){let e,n,s,o;return{c(){e=i("div"),n=i("i"),s=m(),o=x(t[2]),d(n,"class","icon ion-md-warning text-xl"),d(e,"class","rounded-lg bg-red-600 text-white p-2")},m(t,l){u(t,e,l),h(e,n),h(e,s),h(e,o)},p(t,e){4&e&&w(o,t[2])},d(t){t&&f(e)}}}function O(t){let e,n,s,o,l,r,a,c,p,g,x,w,v,C,k,A,P,S,j,O,E=""!=t[2]&&I(t);return{c(){e=i("div"),n=i("p"),n.textContent="Sign In Your GetOrders Account",s=m(),E&&E.c(),o=m(),l=i("div"),r=i("label"),r.textContent="Email",a=m(),c=i("input"),p=m(),g=i("div"),x=i("label"),x.textContent="Password",w=m(),v=i("input"),C=m(),k=i("button"),k.textContent="Sign In",A=m(),P=i("a"),P.textContent="Forgot Password?",S=m(),j=i("a"),j.textContent="No Account Yet? Tap here to Sign Up.",d(n,"class","text-theme"),d(r,"class","flex-none w-20 self-center text-xs uppercase text-gray-500 font-semibold"),d(c,"class","flex-grow focus:outline-none"),d(c,"type","email"),d(c,"placeholder","johndoe@getorders.app"),d(l,"class","border border-gray-300 rounded-lg p-2 my-2 bg-white flex"),d(x,"class","flex-none w-20 self-center text-xs uppercase text-gray-500 font-semibold"),d(v,"class","flex-grow focus:outline-none"),d(v,"type","password"),d(v,"placeholder","********"),d(g,"class","border border-gray-300 rounded-lg p-2 my-2 bg-white flex"),d(k,"class","bg-theme font-semibold text-white w-full p-3 my-5 rounded"),d(P,"href","https://www.getorders.app"),d(P,"class","text-theme block w-full text-center p-3 bg-white hover:bg-gray-300 rounded-lg"),d(j,"href","https://www.getorders.app"),d(j,"class","text-theme block w-full text-center p-3 bg-white hover:bg-gray-300 rounded-lg"),d(e,"slot","content"),d(e,"class","p-5")},m(i,d,f){u(i,e,d),h(e,n),h(e,s),E&&E.m(e,null),h(e,o),h(e,l),h(l,r),h(l,a),h(l,c),$(c,t[0]),h(e,p),h(e,g),h(g,x),h(g,w),h(g,v),$(v,t[1]),h(e,C),h(e,k),h(e,A),h(e,P),h(e,S),h(e,j),f&&b(O),O=[y(c,"input",t[7]),y(v,"input",t[8]),y(k,"click",t[4])]},p(t,n){""!=t[2]?E?E.p(t,n):(E=I(t),E.c(),E.m(e,o)):E&&(E.d(1),E=null),1&n&&c.value!==t[0]&&$(c,t[0]),2&n&&v.value!==t[1]&&$(v,t[1])},d(t){t&&f(e),E&&E.d(),b(O)}}}function E(t){let e,n;return{c(){e=m(),n=m()},m(t,s){u(t,e,s),u(t,n,s)},p:v,i:v,o:v,d(t){t&&f(e),t&&f(n)}}}function L(t){let e;const n=new s({props:{style:t[5],dismiss:"false",$$slots:{default:[E],content:[O],title:[j],loader:[S]},$$scope:{ctx:t}}});return{c(){o(n.$$.fragment)},m(t,s){l(n,t,s),e=!0},p(t,[e]){const s={};527&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){e||(r(n.$$.fragment,t),e=!0)},o(t){a(n.$$.fragment,t),e=!1},d(t){c(n,t)}}}function M(t,e,n){let s="",o="",l="",r=!1;return t.$$.update=()=>{7&t.$$.dirty&&""!=s&&""!=o&&""!=l&&(console.log("clear error"),n(2,l=""))},[s,o,l,r,function(){n(3,r=!0),C.auth().signInWithEmailAndPassword(s,o).catch((function(t){n(3,r=!1),n(1,o=""),n(2,l=t.message),console.log(l)}))},{},["Link Account","Verifying...","Retrieving Outlets","Done"],function(){s=this.value,n(0,s)},function(){o=this.value,n(1,o)}]}export default class extends t{constructor(t){super(),e(this,t,M,L,n,{})}}
//# sourceMappingURL=Login-f35f690c.js.map
