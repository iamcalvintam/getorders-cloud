import{S as t,i as e,s,M as n,j as a,m as o,k as r,o as c,p as l,q as i,z as d,e as p,b as m,c as u,h as f,a as g,d as $,w as x,l as y,T as h,n as v,ah as b,ai as w,r as C,u as T,G as N,H as O,t as D,g as M,v as A,D as E,E as S,a3 as k,L as I}from"./App-0685bfc5.js";import{S as _}from"./UISegmented-5b7e954e.js";import{d as j}from"./dayjs.min-d290c2ff.js";function Y(t){let e;return{c(){e=p("div"),e.textContent="Activate GetPayments",m(e,"slot","title"),m(e,"class","font-semibold text-xl text-gray-600 pb-3")},m(t,s){u(t,e,s)},d(t){t&&f(e)}}}function P(t){let e,s,n,a,o,r,c,l,i;return{c(){e=p("div"),s=p("p"),s.innerHTML="\n            In order to accept payments, your account has to first activate <b>GetPayments</b>.<br>\n            Tap here to contact our support to activate now.\n        ",n=g(),a=p("div"),o=p("button"),o.textContent="Contact Support",r=g(),c=p("div"),l=p("button"),l.textContent="Cancel",m(s,"class","text-gray-800 mb-6 text-center"),m(o,"class","p-2 w-1/2 shadow-md bg-theme text-white rounded-lg capitalize font-bold h-full shadow-md"),m(a,"class","flex justify-center mt-2"),m(l,"class","p-2 w-1/2 shadow-md bg-gray-400 text-white rounded-lg capitalize font-bold h-full shadow-md"),m(c,"class","flex justify-center mt-2"),m(e,"slot","content"),m(e,"class","h-64 p-2")},m(d,p,m){u(d,e,p),$(e,s),$(e,n),$(e,a),$(a,o),$(e,r),$(e,c),$(c,l),m&&x(i),i=[y(o,"click",t[0]),y(l,"click",h)]},p:v,d(t){t&&f(e),x(i)}}}function R(t){let e;return{c(){e=g()},m(t,s){u(t,e,s)},p:v,d(t){t&&f(e)}}}function U(t){let e;const s=new n({props:{$$slots:{default:[R],content:[P],title:[Y]},$$scope:{ctx:t}}});return{c(){a(s.$$.fragment)},m(t,n){o(s,t,n),e=!0},p(t,[e]){const n={};4&e&&(n.$$scope={dirty:e,ctx:t}),s.$set(n)},i(t){e||(r(s.$$.fragment,t),e=!0)},o(t){c(s.$$.fragment,t),e=!1},d(t){l(s,t)}}}function z(t,e,s){let n;return i(t,d,t=>s(1,n=t)),[function(){b(`Hello, I would like to activate payments for my GetOrders account.\n 👉🏻 My ID : ${n.settings.fire_id}`)}]}class H extends t{constructor(t){super(),e(this,t,z,U,s,{})}}function L(t){let e;const s=new I({props:{$$slots:{message:[G]},$$scope:{ctx:t}}});return{c(){a(s.$$.fragment)},m(t,n){o(s,t,n),e=!0},i(t){e||(r(s.$$.fragment,t),e=!0)},o(t){c(s.$$.fragment,t),e=!1},d(t){l(s,t)}}}function G(t){let e;return{c(){e=p("div"),e.textContent="Extracting data..",m(e,"slot","message")},m(t,s){u(t,e,s)},d(t){t&&f(e)}}}function B(t){let e,s,n=t[3]&&L(t);return{c(){e=p("div"),n&&n.c(),m(e,"slot","loader")},m(t,a){u(t,e,a),n&&n.m(e,null),s=!0},p(t,s){t[3]?n?r(n,1):(n=L(t),n.c(),r(n,1),n.m(e,null)):n&&(C(),c(n,1,1,()=>{n=null}),T())},i(t){s||(r(n),s=!0)},o(t){c(n),s=!1},d(t){t&&f(e),n&&n.d()}}}function F(t){let e;return{c(){e=p("div"),e.textContent="Export Orders",m(e,"slot","title"),m(e,"class","font-semibold text-xl text-gray-600 pb-3")},m(t,s){u(t,e,s)},d(t){t&&f(e)}}}function J(t){let e,s,n,i,d,v,b,w,C,T,E,S,k,I,j,Y,P,R,U,z,H,L,G,B,F,J,q,K,W=t[1].format("ddd D/M/YY")+"";function Z(e){t[12].call(null,e)}let Q={style:t[4],label:"",segments:[{name:"Default",value:""},{name:"Zepto",value:"zepto"},{name:"Mr Speedy",value:"speedy"}]};void 0!==t[2]&&(Q.value=t[2]);const V=new _({props:Q});function X(e){t[13].call(null,e)}N.push(()=>O(V,"value",Z));let tt={style:t[4],label:"",segments:[{name:"Paid",value:"paid"},{name:"All",value:""}]};void 0!==t[0].type&&(tt.value=t[0].type);const et=new _({props:tt});return N.push(()=>O(et,"value",X)),{c(){e=p("div"),s=p("p"),s.textContent="Select a day to export from",n=g(),i=p("div"),d=p("button"),d.innerHTML='<i class="far fa-arrow-alt-circle-left"></i>',v=g(),b=p("div"),w=D(W),C=g(),T=p("button"),T.innerHTML='<i class="far fa-arrow-alt-circle-right"></i>',E=g(),S=p("p"),S.textContent="Select format to export to",k=g(),I=p("div"),a(V.$$.fragment),Y=g(),P=p("p"),P.textContent="Export Options",R=g(),U=p("div"),a(et.$$.fragment),H=g(),L=p("div"),G=p("button"),G.textContent="Export Now",B=g(),F=p("div"),J=p("button"),J.textContent="Cancel",m(s,"class","text-gray-800 mb-2 text-center"),m(b,"class","flex-grow self-center text-center"),m(i,"class","flex text-lg font-semibold m-2"),m(S,"class","text-gray-800 my-2 text-center"),m(I,"class","flex justify-center"),m(P,"class","text-gray-800 my-2 text-center"),m(U,"class","flex justify-center"),m(G,"class","p-2 w-1/2 shadow-md bg-theme text-white rounded-lg capitalize font-bold h-full shadow-md"),m(L,"class","flex justify-center mt-2"),m(J,"class","p-2 w-1/2 shadow-md bg-gray-400 text-white rounded-lg capitalize font-bold h-full shadow-md"),m(F,"class","flex justify-center my-2"),m(e,"slot","content"),m(e,"class","p-2")},m(a,r,c){u(a,e,r),$(e,s),$(e,n),$(e,i),$(i,d),$(i,v),$(i,b),$(b,w),$(i,C),$(i,T),$(e,E),$(e,S),$(e,k),$(e,I),o(V,I,null),$(e,Y),$(e,P),$(e,R),$(e,U),o(et,U,null),$(e,H),$(e,L),$(L,G),$(e,B),$(e,F),$(F,J),q=!0,c&&x(K),K=[y(d,"click",t[10]),y(T,"click",t[11]),y(G,"click",t[6]),y(J,"click",h)]},p(t,e){(!q||2&e)&&W!==(W=t[1].format("ddd D/M/YY")+"")&&M(w,W);const s={};!j&&4&e&&(j=!0,s.value=t[2],A(()=>j=!1)),V.$set(s);const n={};!z&&1&e&&(z=!0,n.value=t[0].type,A(()=>z=!1)),et.$set(n)},i(t){q||(r(V.$$.fragment,t),r(et.$$.fragment,t),q=!0)},o(t){c(V.$$.fragment,t),c(et.$$.fragment,t),q=!1},d(t){t&&f(e),l(V),l(et),x(K)}}}function q(t){let e,s;return{c(){e=g(),s=g()},m(t,n){u(t,e,n),u(t,s,n)},p:v,i:v,o:v,d(t){t&&f(e),t&&f(s)}}}function K(t){let e,s,i,d;const x=new n({props:{$$slots:{default:[q],content:[J],title:[F],loader:[B]},$$scope:{ctx:t}}});return{c(){e=p("script"),i=g(),a(x.$$.fragment),e.src!==(s="https://unpkg.com/papaparse@latest/papaparse.min.js")&&m(e,"src","https://unpkg.com/papaparse@latest/papaparse.min.js")},m(t,s){$(document.head,e),u(t,i,s),o(x,t,s),d=!0},p(t,[e]){const s={};16399&e&&(s.$$scope={dirty:e,ctx:t}),x.$set(s)},i(t){d||(r(x.$$.fragment,t),d=!0)},o(t){c(x.$$.fragment,t),d=!1},d(t){f(e),t&&f(i),l(x,t)}}}function W(t,e,s){let n,a;i(t,w,t=>s(7,n=t)),i(t,d,t=>s(8,a=t));let o={type:"paid"},r=j(),c="",l=!1;function p(t){s(1,r=r.add(t,"day"))}function m(t){let e=[];switch(c){case"":e=t.map(t=>({order_date:j(t.createdAt).format("MM/DD hh:mm"),name:t.guest.name,phone:t.guest.phone,address:`${t.guest.address||""} ${t.guest.address2||""}`,postcode:t.guest.postcode,notes:t.notes,isPickUp:t.guest.address?"N":"Y",amount:t.payment?t.payment.amount.toFixed(2):"10.00",paid:t.payment?j(t.payment.paidAt||t.createdAt).format("MM/DD hh:mm"):"",invoice:`https://pay.getorders.app/?i=${t.invoice_id}`}));break;case"speedy":e=t.map(t=>({"Address(mandatory field)":`${t.guest.address||""} ${t.guest.address2||""}`,"Contact person":t.guest.name,"Recipient's phone (mandatory field)":t.guest.phone,"Parcel contents(mandatory field)":"FOOD","Weight in kg(mandatory field)":.5,"Internal order number":t.invoice_id,"Comment for courier":t.notes||"","Apartment / office number":"","Need to return on pickup point":"",'Time "since" on point':j(t.createdAt).format("DD.MM.YYYY hh:mm:ss"),'Time "till" on point':j(t.createdAt).add(1,"hour").format("DD.MM.YYYY hh:mm:ss"),"COD amount":"0","Buyout amount":"0","Do not fill anything in this column":"","Declared value":t.payment?t.payment.amount.toFixed(2):"10.00","Courier needs motorbox":"x"}));break;case"zepto":e=t.map(t=>({UNIT_NO:"",ADDRESS:`${t.guest.address||""} ${t.guest.address2||""}`,CONTACT_PERSON:t.guest.name,CONTACT_NUMBER:t.guest.phone,EMAIL:"",INSTRUCTION_NOTE:t.notes||""})),e=[{UNIT_NO:"",ADDRESS:`${a.settings.address||""} ${a.settings.address2||""} ${a.settings.postcode||""}`,CONTACT_PERSON:a.settings.name,CONTACT_NUMBER:a.settings.phone,EMAIL:"",INSTRUCTION_NOTE:"PICKUP HERE"},...e]}k(Papa.unparse(e),"orders.csv","text/csv;encoding:utf-8")}return[o,r,c,l,{container:"p-2 mb-3",label:"w-32"},p,function(){s(3,l=!0),E(S("/orders"),{sub:n.fire_id,order_type:o.type,from:r.startOf("day").toJSON(),to:r.endOf("day").toJSON()},"GET").then(t=>{s(3,l=!1),m(t.orders)})},n,a,m,()=>p(-1),()=>p(1),function(t){c=t,s(2,c)},function(t){o.type=t,s(0,o)}]}class Z extends t{constructor(t){super(),e(this,t,W,K,s,{})}}export{H as A,Z as O};
//# sourceMappingURL=OrdersExport-e349ff58.js.map
