(this["webpackJsonpcontact-list"]=this["webpackJsonpcontact-list"]||[]).push([[0],{27:function(t,e,c){},49:function(t,e,c){"use strict";c.r(e);var n=c(1),a=c.n(n),r=c(19),s=c.n(r),i=(c(27),c(28),c(4)),o=c(22),l=c(5),u=c.n(l),j=c(8),d=c(2),b=Object(d.a)(Object(d.a)({},{culture:{nat:"US",alphabet:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]},contactCount:500}),{SITE_NAME:"Contact List "}),O=c(20),f=c.n(O).a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL}),h=function(){var t=Object(j.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.get("",{params:{results:b.contactCount,nat:b.culture.nat}});case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),x={CONTACTS:{SET_CONTACTS:"SET_CONTACTS"}},m=function(t){var e={};return null==t||(t.forEach((function(t){var c=t.name.last[0].toLocaleLowerCase();e[c]||(e[[c]]=[]),e[c].push(t)})),Object.keys(e).forEach((function(t){e[t].sort((function(t,e){return t.name.last>e.name.last?1:-1}))}))),e},p=function(t){return{type:x.CONTACTS.SET_SELECTED_TAB,payload:t}},T=function(t){return{type:x.CONTACTS.SET_CONTACTS,payload:t}},C=c(21);var _,v=function(t){var e=Object(n.useState)(!1),c=Object(i.a)(e,2),a=c[0],r=c[1],s=Object(n.useReducer)(t,{}),o=Object(i.a)(s,2),l=o[0],u=o[1],j=Object(C.useCallback)((function(){return JSON.parse(JSON.stringify(l))}),[l]),d=Object(n.useMemo)((function(){return function(t,e){return function(c){return c instanceof Function?c(t,e):t(c)}}(u,j)}),[u,j]);return a||(u({type:"@INIT"}),r(!0)),[l,d]},S=c(9),g={contacts:[],pending:!0},N=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case x.CONTACTS.SET_CONTACTS:return Object(d.a)(Object(d.a)({},t),{},{contacts:e.payload,pending:!1});case x.CONTACTS.SET_SELECTED_TAB:return Object(d.a)(Object(d.a)({},t),{},{selectedTab:e.payload});default:return t}},E=(_={contacts:N},function(t,e){return Object.keys(_).reduce((function(t,c){return Object(d.a)(Object(d.a)({},t),{},Object(S.a)({},c,_[c](t[c],e)))}),t)}),y=c(0),A=a.a.createContext(),L=a.a.createContext(),k=function(t){var e=t.children,c=v(E),a=Object(i.a)(c,2),r=a[0],s=a[1],o=Object(n.useCallback)((function(t){return t(r)}),[r]);return Object(y.jsx)(A.Provider,{value:o,children:Object(y.jsx)(L.Provider,{value:function(t){return s(t)},children:e})})},w=function(t){var e,c,a=t.setOpen,r=t.contact,s=t.modalStyle,i=Object(n.useRef)(null);return e=i,c=function(){a(!1)},Object(n.useEffect)((function(){function t(t){e.current&&!e.current.contains(t.target)&&c()}return document.addEventListener("mousedown",t),function(){document.removeEventListener("mousedown",t)}}),[e]),Object(y.jsxs)("div",{className:"contact-detail",ref:i,style:s,"data-testid":"contact-detail",children:[Object(y.jsx)("span",{className:"contact-detail__close-button",onClick:function(){a(!1)},children:"\u2716"}),Object(y.jsx)("div",{className:"contact-detail__image-container",children:Object(y.jsx)("img",{className:"contact-detail__image ",src:r.picture.medium,alt:"contact","data-testid":"user-image"})}),Object(y.jsxs)("div",{children:[Object(y.jsx)("span",{className:"contact-detail__full-name",children:"".concat(r.name.last,", ").concat(r.name.first)}),Object(y.jsxs)("div",{className:"contact-detail__username-badge",children:["username ",r.login.username]}),Object(y.jsx)("table",{className:"contact-detail__info-table",children:Object(y.jsxs)("tbody",{children:[Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{children:Object(y.jsx)("strong",{children:"email"})}),Object(y.jsx)("td",{children:r.email})]}),Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{children:Object(y.jsx)("strong",{children:"phone"})}),Object(y.jsx)("td",{children:r.phone})]}),Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{children:Object(y.jsx)("strong",{children:"street"})}),Object(y.jsx)("td",{children:r.location.street.name})]}),Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{children:Object(y.jsx)("strong",{children:"city"})}),Object(y.jsx)("td",{children:r.location.city})]}),Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{children:Object(y.jsx)("strong",{children:"state"})}),Object(y.jsx)("td",{children:r.location.state})]}),Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{children:Object(y.jsx)("strong",{children:"postcode"})}),Object(y.jsx)("td",{children:r.location.postcode})]})]})})]})]})},P=function(t){var e=t.contacts,c=t.selectTab,n=t.selectedTab;return Object(y.jsx)("ul",{className:"contact-list-header",children:b.culture.alphabet.map((function(t){t=t.toLocaleLowerCase();var a=e[t]?e[t].length:0;return Object(y.jsx)("li",{"data-testid":"contact-list-header-item",className:"contact-list-header__item px-2 py-2 ".concat(a<1?"contact-list-header__item--disabled":""," ").concat(n===t?"contact-list-header__item--active":""),onClick:function(){a>0&&c(t)},children:Object(y.jsxs)("span",{children:[t,Object(y.jsx)("sub",{className:"ml-2",children:a})]})},t)}))})},R=function(t){var e=t.contact,c=t.onClick;return Object(y.jsx)("li",{className:"contact-list__item ",onClick:c,"data-testid":"contact-list-item",children:"".concat(e.name.last,", ").concat(e.name.first)})},D=function(){var t,e=(t=function(t){return t.contacts},Object(n.useContext)(A).apply(null,[t])),c=e.contacts,a=e.pending,r=e.selectedTab,s=Object(n.useState)(!1),l=Object(i.a)(s,2),d=l[0],b=l[1],O=Object(n.useState)(!1),f=Object(i.a)(O,2),x=f[0],C=f[1],_=Object(n.useState)({}),v=Object(i.a)(_,2),S=v[0],g=v[1],N=Object(n.useContext)(L);Object(n.useEffect)((function(){N(function(){var t=Object(j.a)(u.a.mark((function t(e){var c,n,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h();case 2:c=t.sent,n=m(c.data.results),a=Object.keys(n).sort()[0],e(p(a)),e(T(n));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[]);return Object(y.jsx)("div",{className:"d-flex",children:Object(y.jsxs)("div",{className:"contact-list-container",children:[Object(y.jsx)(P,{contacts:c,selectTab:function(t){N(p(t))},selectedTab:r}),Object(y.jsx)("ul",{className:"contact-list",children:a?new Array(10).fill("loading...").map((function(t,e){return Object(y.jsx)("li",{className:"contact-list__item","data-testid":"loading-contacts",children:Object(y.jsx)(o.a,{})},e)})):c[r].map((function(t){return Object(y.jsx)(R,{contact:t,onClick:function(e){!function(t,e){b(!0),g({top:t.target.offsetTop+t.target.offsetHeight,left:t.target.offsetLeft,width:"500px"}),C(e)}(e,t)}},t.id.value)}))}),d&&Object(y.jsx)(w,{setOpen:b,contact:x,modalStyle:S})]})})};var F=function(){return Object(y.jsx)(k,{children:Object(y.jsx)(D,{})})},I=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,50)).then((function(e){var c=e.getCLS,n=e.getFID,a=e.getFCP,r=e.getLCP,s=e.getTTFB;c(t),n(t),a(t),r(t),s(t)}))};s.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(F,{})}),document.getElementById("root")),I()}},[[49,1,2]]]);
//# sourceMappingURL=main.5ccd73de.chunk.js.map