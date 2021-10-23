(this["webpackJsonpcontact-list"]=this["webpackJsonpcontact-list"]||[]).push([[0],{26:function(t,e,c){},48:function(t,e,c){"use strict";c.r(e);var n=c(1),a=c.n(n),s=c(19),r=c.n(s),i=(c(26),c(27),c(4)),o=c(21),l=c(5),u=c.n(l),j=c(8),d=c(2),b=Object(d.a)(Object(d.a)({},{culture:{nat:"US",alphabet:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]},contactCount:500}),{SITE_NAME:"Contact List "}),O=c(20),f=c.n(O).a.create({baseURL:"https://randomuser.me/api"}),h=function(){var t=Object(j.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.get("",{params:{results:b.contactCount,nat:b.culture.nat}});case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),x={CONTACTS:{SET_CONTACTS:"SET_CONTACTS"}},m=function(t){var e={};return null==t||(t.forEach((function(t){var c=t.name.last[0].toLocaleLowerCase();e[c]||(e[[c]]=[]),e[c].push(t)})),Object.keys(e).forEach((function(t){e[t].sort((function(t,e){return t.name.last>e.name.last?1:-1}))}))),e},p=function(t){return{type:x.CONTACTS.SET_SELECTED_TAB,payload:t}},C=function(t){return{type:x.CONTACTS.SET_CONTACTS,payload:t}};var T,v=function(t){var e=Object(n.useState)(!1),c=Object(i.a)(e,2),a=c[0],s=c[1],r=Object(n.useReducer)(t,{}),o=Object(i.a)(r,2),l=o[0],u=o[1],j=Object(n.useCallback)((function(){return JSON.parse(JSON.stringify(l))}),[l]),d=Object(n.useMemo)((function(){return function(t,e){return function(c){return c instanceof Function?c(t,e):t(c)}}(u,j)}),[u,j]);return a||(u({type:"@INIT"}),s(!0)),[l,d]},g=c(9),_={contacts:[],pending:!0},S=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case x.CONTACTS.SET_CONTACTS:return Object(d.a)(Object(d.a)({},t),{},{contacts:e.payload,pending:!1});case x.CONTACTS.SET_SELECTED_TAB:return Object(d.a)(Object(d.a)({},t),{},{selectedTab:e.payload});default:return t}},N=(T={contacts:S},function(t,e){return Object.keys(T).reduce((function(t,c){return Object(d.a)(Object(d.a)({},t),{},Object(g.a)({},c,T[c](t[c],e)))}),t)}),y=c(0),E=a.a.createContext(),k=a.a.createContext(),w=function(t){var e=t.children,c=v(N),a=Object(i.a)(c,2),s=a[0],r=a[1],o=Object(n.useCallback)((function(t){return t(s)}),[s]);return Object(y.jsx)(E.Provider,{value:o,children:Object(y.jsx)(k.Provider,{value:function(t){return r(t)},children:e})})},A=function(t){var e,c,a=t.setOpen,s=t.contact,r=t.modalStyle,i=Object(n.useRef)(null);return e=i,c=function(){a(!1)},Object(n.useEffect)((function(){function t(t){e.current&&!e.current.contains(t.target)&&c()}return document.addEventListener("mousedown",t),function(){document.removeEventListener("mousedown",t)}}),[e]),Object(y.jsxs)("div",{className:"contact-detail",ref:i,style:r,"data-testid":"contact-detail",children:[Object(y.jsx)("span",{className:"contact-detail__close-button",onClick:function(){a(!1)},children:"\u2716"}),Object(y.jsx)("div",{className:"contact-detail__image-container",children:Object(y.jsx)("img",{className:"contact-detail__image ",src:s.picture.medium,alt:"contact","data-testid":"user-image"})}),Object(y.jsxs)("div",{children:[Object(y.jsx)("span",{className:"contact-detail__full-name",children:"".concat(s.name.last,", ").concat(s.name.first)}),Object(y.jsxs)("div",{className:"contact-detail__username-badge",children:["username ",s.login.username]}),Object(y.jsx)("table",{className:"contact-detail__info-table",children:Object(y.jsxs)("tbody",{children:[Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{children:Object(y.jsx)("strong",{children:"email"})}),Object(y.jsx)("td",{children:s.email})]}),Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{children:Object(y.jsx)("strong",{children:"phone"})}),Object(y.jsx)("td",{children:s.phone})]}),Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{children:Object(y.jsx)("strong",{children:"street"})}),Object(y.jsx)("td",{children:s.location.street.name})]}),Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{children:Object(y.jsx)("strong",{children:"city"})}),Object(y.jsx)("td",{children:s.location.city})]}),Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{children:Object(y.jsx)("strong",{children:"state"})}),Object(y.jsx)("td",{children:s.location.state})]}),Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{children:Object(y.jsx)("strong",{children:"postcode"})}),Object(y.jsx)("td",{children:s.location.postcode})]})]})})]})]})},L=function(t){var e=t.contacts,c=t.selectTab,n=t.selectedTab;return Object(y.jsx)("ul",{className:"contact-list-header",children:b.culture.alphabet.map((function(t){t=t.toLocaleLowerCase();var a=e[t]?e[t].length:0;return Object(y.jsx)("li",{"data-testid":"contact-list-header-item",className:"contact-list-header__item px-2 py-2 ".concat(a<1?"contact-list-header__item--disabled":""," ").concat(n===t?"contact-list-header__item--active":""),onClick:function(){a>0&&c(t)},children:Object(y.jsxs)("span",{children:[t,Object(y.jsx)("sub",{className:"ml-2",children:a})]})},t)}))})},F=function(t){var e=t.contact,c=t.onClick;return Object(y.jsx)("li",{className:"contact-list__item ",onClick:c,"data-testid":"contact-list-item",children:"".concat(e.name.last,", ").concat(e.name.first)})},I=function(){var t,e=(t=function(t){return t.contacts},Object(n.useContext)(E).apply(null,[t])),c=e.contacts,a=e.pending,s=e.selectedTab,r=Object(n.useState)(!1),l=Object(i.a)(r,2),d=l[0],b=l[1],O=Object(n.useState)(!1),f=Object(i.a)(O,2),x=f[0],T=f[1],v=Object(n.useState)({}),g=Object(i.a)(v,2),_=g[0],S=g[1],N=Object(n.useContext)(k);Object(n.useEffect)((function(){N(function(){var t=Object(j.a)(u.a.mark((function t(e){var c,n,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h();case 2:c=t.sent,n=m(c.data.results),a=Object.keys(n).sort()[0],e(p(a)),e(C(n));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[]);return Object(y.jsx)("div",{className:"d-flex",children:Object(y.jsxs)("div",{className:"contact-list-container",children:[Object(y.jsx)(L,{contacts:c,selectTab:function(t){N(p(t))},selectedTab:s}),Object(y.jsx)("ul",{className:"contact-list",children:a?new Array(10).fill("loading...").map((function(t,e){return Object(y.jsx)("li",{className:"contact-list__item","data-testid":"loading-contacts",children:Object(y.jsx)(o.a,{})},e)})):c[s].map((function(t){return Object(y.jsx)(F,{contact:t,onClick:function(e){!function(t,e){b(!0),S({top:t.target.offsetTop+t.target.offsetHeight,left:t.target.offsetLeft,width:"500px"}),T(e)}(e,t)}},t.id.value)}))}),d&&Object(y.jsx)(A,{setOpen:b,contact:x,modalStyle:_})]})})};var B=function(){return Object(y.jsx)(w,{children:Object(y.jsx)(I,{})})},J=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,49)).then((function(e){var c=e.getCLS,n=e.getFID,a=e.getFCP,s=e.getLCP,r=e.getTTFB;c(t),n(t),a(t),s(t),r(t)}))};r.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(B,{})}),document.getElementById("root")),J()}},[[48,1,2]]]);
//# sourceMappingURL=main.68613368.chunk.js.map