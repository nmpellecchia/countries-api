(this["webpackJsonpcountries-api"]=this["webpackJsonpcountries-api"]||[]).push([[0],{48:function(e,t,n){},49:function(e,t,n){},56:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(15),s=n.n(r),i=(n(48),n(49),n(17)),l=n(7),o=(n(50),n(32)),u=n(24),j=n(1);function h(){return Object(j.jsx)(o.a,{bg:"dark",variant:"dark",children:Object(j.jsxs)(u.a,{className:"h-50 inline-block",children:[Object(j.jsx)(i.b,{to:"/",style:{textDecoration:"none"},children:Object(j.jsx)(o.a.Brand,{children:"\ud83c\udf0e World Countries"})}),Object(j.jsxs)("div",{children:[Object(j.jsx)("a",{href:"https://github.com/nmpellecchia",rel:"external",style:{textDecoration:"none"},children:Object(j.jsx)("i",{className:"devicon-github-original",style:{color:"white",fontSize:"2rem",padding:"1rem"}})}),Object(j.jsx)("a",{href:"https://www.linkedin.com/in/nicolas-pellecchia-440a01217/",rel:"external",style:{textDecoration:"none"},children:Object(j.jsx)("i",{className:"devicon-linkedin-plain",style:{color:"white",fontSize:"2rem",padding:"1rem"}})})]})]})})}var d=n(9),b=(n(56),n(16)),f=n.n(b),p=n(20);function m(e){for(var t=function(e){var t=[];for(;e.length;)t.push(e.splice(0,25));return t}(e),n=0,c=0;c<t.length;c++){var a=n+t[c].length;localStorage.setItem("countries_".concat(n+1,"_").concat(a),JSON.stringify(t[c])),n=a}}function x(e){var t="countries_".concat(e,"_").concat(e+25-1),n=JSON.parse(localStorage.getItem(t));if(null===n)throw new Error("Countries not found inside local storage");return n}var O=n(31),g=n.n(O),v="https://restcountries.com/v3.1/";function y(){return N.apply(this,arguments)}function N(){return(N=Object(p.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get("".concat(v,"all"));case 3:return t=e.sent,e.abrupt("return",t);case 7:throw e.prev=7,e.t0=e.catch(0),new Error("Couldn't access the service");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function k(){return(k=Object(p.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("Countries from local storage!"),e.abrupt("return",x(1));case 5:return e.prev=5,e.t0=e.catch(0),console.log("Countries from API!"),e.next=10,y();case 10:return m(t=e.sent),e.abrupt("return",t);case 13:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}var w=n(22);function P(e){var t=Object(c.useState)([]),n=Object(d.a)(t,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){for(var t=parseInt(e.pages),n=[],c=1;c<t;c++)n.push(c);r(n)}),[e.pages]),Object(j.jsx)("div",{children:Object(j.jsx)(w.a,{style:{background:"black"},className:"m-0 w-100",children:a.map((function(t,n){var c=[];return 0===n&&c.push(Object(j.jsx)(w.a.Prev,{disabled:!(e.currentPage>1),onClick:function(t){t.preventDefault(),e.clickHandler(e.currentPage-1)}},"page-prev")),c.push(Object(j.jsx)(w.a.Item,{active:e.currentPage===t,onClick:function(n){n.preventDefault(),e.clickHandler(t)},children:n+1},n)),n===a.length-1&&c.push(Object(j.jsx)(w.a.Next,{disabled:!(e.currentPage<e.pages-1),onClick:function(t){t.preventDefault(),e.clickHandler(e.currentPage+1)}},"page-next")),c}))})})}var S=n(21),C=n(19),I=n(23),D=n(42);function F(e){var t=Object(c.useState)([]),n=Object(d.a)(t,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){var t,n=[];for(t=1===e.currentPage?x(parseInt(e.currentPage)):x(25*parseInt(e.currentPage)+1);t.length;)n.push(t.splice(0,5));r(n)}),[e.currentPage]),Object(j.jsx)(u.a,{fluid:!0,className:"m-0 w-100",children:a.map((function(e,t){var n=[];return n.push(Object(j.jsx)(S.a,{children:e.map((function(e,t){return Object(j.jsx)(E,{country:e},t)}))},t)),n}))})}function E(e){var t=e.country;return Object(j.jsx)(C.a,{children:Object(j.jsxs)(I.a,{className:"bg-dark text-white m-1",style:{height:"90%"},children:[Object(j.jsx)(I.a.Img,{variant:"top",src:t.flags.svg,alt:"Flag of ".concat(t.name.common),style:{objectFit:"cover",height:"50%"}}),Object(j.jsxs)(I.a.Body,{className:"d-flex flex-column justify-content-around",children:[Object(j.jsx)(I.a.Text,{children:t.name.common}),Object(j.jsx)(i.b,{to:{pathname:"/selected-country/"+t.altSpellings[0],country:t},children:Object(j.jsx)(D.a,{variant:"outline-light",children:"View more"})})]})]})})}function _(){var e=Object(c.useState)(1),t=Object(d.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),s=Object(d.a)(r,2),i=s[0],l=s[1];return Object(c.useEffect)((function(){(function(){return k.apply(this,arguments)})().then((function(){return l(!0)}))}),[]),Object(j.jsxs)("main",{className:"d-flex flex-column align-items-center",children:[Object(j.jsx)(P,{pages:function(){for(var e=0,t=0;t<localStorage.length;t++){localStorage.key(t).match(/(countries_)/gi)&&e++}return e}(),currentPage:n,clickHandler:a}),i?Object(j.jsx)(F,{currentPage:n}):Object(j.jsx)("div",{children:"loading"})]})}n(58);var z=n(43);function B(){var e=Object(l.f)().country;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(u.a,{fluid:!0,children:[Object(j.jsxs)(S.a,{className:"main-info",children:[Object(j.jsxs)(C.a,{className:"d-flex flex-column justify-content-around align-items-center",children:[Object(j.jsxs)("h1",{className:"cty-title",children:[" ",e.name.common]}),Object(j.jsxs)("h2",{className:"cty-capital",children:["Capital: ",e.capital]})]}),Object(j.jsx)(C.a,{className:"d-flex justify-content-center",children:Object(j.jsx)(z.a,{className:"country-img",src:e.flags.svg,fluid:!0})})]}),Object(j.jsxs)(S.a,{className:"complement-info",children:[Object(j.jsxs)(C.a,{className:"p-2",children:[Object(j.jsxs)("h3",{className:"cty-continent p-3",children:["Continent: ",e.region]}),Object(j.jsxs)("h3",{className:"cty-off-name p-3",children:["Official name: ",e.name.official]}),Object(j.jsxs)("h3",{className:"cty-lang p-3",children:["Languages: ",Object.values(e.languages)]})]}),Object(j.jsxs)(C.a,{className:"p-2",children:[Object(j.jsxs)("h3",{className:"cty-pop p-3",children:["Population: ",e.population," inhabitants"]}),Object(j.jsxs)("h3",{className:"cty-ar p-3",children:["Area: ",e.area," km"]}),Object(j.jsxs)("h3",{className:"cty-time p-3",children:["Timezones: ",e.timezones]})]})]})]})})}var H=function(){return Object(j.jsx)(i.a,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(h,{}),Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{path:"/selected-country",children:Object(j.jsx)(B,{})}),Object(j.jsx)(l.a,{path:"/",children:Object(j.jsx)(_,{})})]})]})})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,62)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(H,{})}),document.getElementById("root")),J()}},[[59,1,2]]]);
//# sourceMappingURL=main.a4de5a58.chunk.js.map