import{S as e,i as t,s,e as n,v as a,a as o,b as l,d as i,f as r,x as d,y as p,p as x,M as c,N as u}from"./App-030e40b2.js";function f(e){let t,s,c,u,f,b,m,g,y,v,h,w,T,R,M,Q,k,S,C,L,O,P,A,N=(e[0][0]||"-")+"",W=(e[0][1]||"-")+"",j=(e[0][2]||"-")+"";return{c(){t=n("div"),s=n("div"),c=n("div"),u=n("p"),f=a(N),b=o(),m=n("p"),m.textContent="Total Sessions",g=o(),y=n("div"),v=n("p"),h=a(W),w=o(),T=n("p"),T.textContent="Total Customers",R=o(),M=n("div"),Q=n("p"),k=a(j),S=o(),C=n("p"),C.textContent="Total Transactions",L=o(),O=n("div"),O.innerHTML='<p class="text-xl font-bold">\n      What&#39;s New\n    </p> \n    <div class="p-2 overflow-x-auto w-full flex flex-no-wrap"><div class="flex-none w-1/3 p-2 mx-2 bg-gray-100 rounded-lg"><p class="text-sm font-semibold text-teal-500">\n          2020/02/30\n        </p> \n        <p>\n          New addition to loyalty (beta). We have added credit balance into loyalty! This will allow your customer to\n          pre-purchase credits to be used at your store.\n        </p></div> \n      <div class="flex-none w-1/3 p-2 mx-2 bg-gray-100 rounded-lg"><p class="text-sm font-semibold text-teal-500">\n          2020/02/21\n        </p> \n        <p>\n          This new release enhances the loyalty experience. With this release we have added an option for points\n          deduction via the screen itself.\n        </p></div> \n      <div class="flex-none w-1/3 p-2 mx-2 bg-gray-100 rounded-lg"><p class="text-sm font-semibold text-teal-500">\n          2019/01/20\n        </p> \n        <p>\n          Update on the POS module, this update addresses stability issues. Also QR generation should be quicker.\n        </p></div> \n      <div class="flex-none w-1/3 p-2 mx-2 bg-gray-100 rounded-lg"><p class="text-sm font-semibold text-teal-500">\n          2019/01/12\n        </p> \n        <p>\n          Product search is now available from the QR Ordering App.\n        </p></div></div>',P=o(),A=n("div"),A.innerHTML='<p class="text-xl font-bold">\n      Quick Tips\n    </p> \n    <div class="p-2 overflow-x-auto w-full flex flex-no-wrap"><div class="flex-none w-1/3 p-2 mx-2 bg-gray-100 rounded-lg"><p class="text-sm font-semibold text-teal-500">\n          Boosting Loyalty Registrations\n        </p> \n        <p>\n          Do you know about <b>QR Loyalty Registration</b>? It&#39;s a feature where your customers can scan on a QR code,\n          and instantly be able to sign up for loyalty at your restaurant.\n        </p></div> \n      <div class="flex-none w-1/3 p-2 mx-2 bg-gray-100 rounded-lg"><p class="text-sm font-semibold text-teal-500">\n          Deduction Presets\n        </p> \n        <p>\n          If you have a fixed amount of points that can be redeemed by your customers, put it in at <b>Settings</b>.\n          This way, your cashier does not need to manually enter point redemptions.\n        </p></div> \n      <div class="flex-none w-1/3 p-2 mx-2 bg-gray-100 rounded-lg"><p class="text-sm font-semibold text-teal-500">\n          Points Multiplier\n        </p> \n        <p>\n          By default the system assigns RM1 = 1 points. To offer a greater point multiplier, configure it in\n          <b>Settings</b>.\n        </p></div> \n      <div class="flex-none w-1/3 p-2 mx-2 bg-gray-100 rounded-lg"><p class="text-sm font-semibold text-teal-500">\n          QR Ordering with limited menu\n        </p> \n        <p>\n          You can specify what is to be shown to customers in QR Ordering. Make sure to hide <b>tags</b> that are only\n          used by staffs.\n        </p></div></div>',l(u,"class","text-3xl text-green-600 font-bold"),l(m,"class","text-xs text-gray-600 font-semibold uppercase"),l(c,"class","w-1/3 p-2"),l(v,"class","text-3xl text-orange-600 font-bold"),l(T,"class","text-xs text-gray-600 font-semibold uppercase"),l(y,"class","w-1/3 border-l border-r border-gray-200 p-2"),l(Q,"class","text-3xl text-pink-600 font-bold"),l(C,"class","text-xs text-gray-600 font-semibold uppercase"),l(M,"class","w-1/3 p-2"),l(s,"class","mx-3 mb-5 shadow-lg rounded-lg border border-gray-200 flex text-center"),l(O,"class","my-5"),l(A,"class","my-3"),l(t,"class","p-3")},m(e,n){i(e,t,n),r(t,s),r(s,c),r(c,u),r(u,f),r(c,b),r(c,m),r(s,g),r(s,y),r(y,v),r(v,h),r(y,w),r(y,T),r(s,R),r(s,M),r(M,Q),r(Q,k),r(M,S),r(M,C),r(t,L),r(t,O),r(t,P),r(t,A)},p(e,[t]){1&t&&N!==(N=(e[0][0]||"-")+"")&&d(f,N),1&t&&W!==(W=(e[0][1]||"-")+"")&&d(h,W),1&t&&j!==(j=(e[0][2]||"-")+"")&&d(k,j)},i:p,o:p,d(e){e&&x(t)}}}function b(e,t,s){let n=[];return fetch(c("/summary"),u()).then(e=>e.json()).then(e=>{e.errorMessage||s(0,n=e)}),[n]}export default class extends e{constructor(e){super(),t(this,e,b,f,s,{})}}
//# sourceMappingURL=Home-90ad2f65.js.map
