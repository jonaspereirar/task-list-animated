(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[190],{4701:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cart",function(){return r(8002)}])},8002:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return j}});var n=r(4051),a=r.n(n),i=r(5893),c=r(9008),s=r(7294),o=r(6597),l=r(1664),u=r(1374),d=function(e){var t=e.item,r=e.dispatch,n=e.cart,a=(t.price*t.quantity).toLocaleString("pt",{style:"currency",currency:"EUR"});return(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{style:{width:"100px",overflow:"hidden"},children:(0,i.jsx)("img",{src:t.images[0].url,alt:t.images[0].url,className:"img-thumbnail w-100",style:{minWidth:"80px",height:"80px"}})}),(0,i.jsxs)("td",{style:{minWidth:"200px"},className:"w-50 align-middle",children:[(0,i.jsx)("h5",{className:"text-capitalize text-secondary",children:(0,i.jsx)(l.default,{href:"/product/".concat(t._id),children:(0,i.jsx)("a",{children:t.title})})}),(0,i.jsx)("h6",{className:"text-danger",children:a}),t.inStock>0?(0,i.jsxs)("p",{className:"mb-1 text-danger",children:["Em Stock: ",t.inStock]}):(0,i.jsx)("p",{className:"mb-1 text-danger",children:"Sem Stock"})]}),(0,i.jsxs)("td",{className:"align-middle",style:{minWidth:"150px"},children:[(0,i.jsx)("button",{className:"btn btn-outline-secondary",onClick:function(){return r((0,u.QZ)(n,t._id))},disabled:1===t.quantity,children:" - "}),(0,i.jsx)("span",{className:"px-3",children:t.quantity}),(0,i.jsx)("button",{className:"btn btn-outline-secondary",onClick:function(){return r((0,u.QJ)(n,t._id))},disabled:t.quantity===t.inStock,children:" + "})]}),(0,i.jsx)("td",{className:"align-middle",style:{minWidth:"50px",cursor:"pointer"},children:(0,i.jsx)("i",{className:"far fa-trash-alt text-danger","aria-hidden":"true",style:{fontSize:"18px"},"data-toggle":"modal","data-target":"#exampleModal",onClick:function(){return r({type:"ADD_MODAL",payload:[{data:n,id:t._id,title:t.title,type:"ADD_CART"}]})}})})]})},p=r(9692),f=r(1163),m=r(1621);function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function y(e,t,r,n,a,i,c){try{var s=e[i](c),o=s.value}catch(l){return void r(l)}s.done?t(o):Promise.resolve(o).then(n,a)}function x(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var i=e.apply(t,r);function c(e){y(i,n,a,c,s,"next",e)}function s(e){y(i,n,a,c,s,"throw",e)}c(void 0)}))}}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){v(e,t,r[t])}))}return e}function g(e){return function(e){if(Array.isArray(e))return h(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var j=function(){var e=(0,s.useContext)(o.R),t=e.state,r=e.dispatch,n=t.cart,u=t.auth,h=t.orders,y=(0,s.useState)(0),v=y[0],j=y[1],N=(0,s.useState)(""),k=N[0],_=N[1],w=(0,s.useState)(""),S=w[0],O=w[1],C=(0,s.useState)(!1),A=C[0],E=C[1],D=(0,f.useRouter)(),R=v.toLocaleString("pt",{style:"currency",currency:"EUR"});(0,s.useEffect)((function(){!function(){var e=n.reduce((function(e,t){return e+t.price*t.quantity}),0);j(e)}()}),[n]),(0,s.useEffect)((function(){var e=JSON.parse(localStorage.getItem("__next__cart01__devat"));if(e&&e.length>0){var t=[];m.Gg();var n=function(){var n=x(a().mark((function n(){var i,c,s,o,l,u,d,f,m,h,y,x,v,b;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:i=!0,c=!1,s=void 0,n.prev=1,o=e[Symbol.iterator]();case 3:if(i=(l=o.next()).done){n.next=13;break}return u=l.value,n.next=7,(0,p.Yu)("product/".concat(u._id));case 7:d=n.sent,f=d.product,m=f._id,h=f.title,y=f.images,x=f.price,v=f.inStock,b=f.sold,v>0&&t.push({_id:m,title:h,images:y,price:x,inStock:v,sold:b,quantity:u.quantity>v?1:u.quantity});case 10:i=!0,n.next=3;break;case 13:n.next=19;break;case 15:n.prev=15,n.t0=n.catch(1),c=!0,s=n.t0;case 19:n.prev=19,n.prev=20,i||null==o.return||o.return();case 22:if(n.prev=22,!c){n.next=25;break}throw s;case 25:return n.finish(22);case 26:return n.finish(19);case 27:r({type:"ADD_CART",payload:t});case 28:case"end":return n.stop()}}),n,null,[[1,15,19,27],[20,,22,26]])})));return function(){return n.apply(this,arguments)}}();n()}var i=function(){m.Gg()};return D.events.on("routeChangeComplete",i),function(){D.events.off("routeChangeComplete",i)}}),[A],[D.events]);var q=function(){var e=x(a().mark((function e(){var t,i,c,s,o,l,d;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(k&&S){e.next=2;break}return e.abrupt("return",r({type:"NOTIFY",payload:{error:"Por favor, adicione seu endere\xe7o e contacto."}}));case 2:t=[],i=!0,c=!1,s=void 0,e.prev=4,o=n[Symbol.iterator]();case 6:if(i=(l=o.next()).done){e.next=15;break}return d=l.value,e.next=10,(0,p.Yu)("product/".concat(d._id));case 10:e.sent.product.inStock-d.quantity>=0&&t.push(d);case 12:i=!0,e.next=6;break;case 15:e.next=21;break;case 17:e.prev=17,e.t0=e.catch(4),c=!0,s=e.t0;case 21:e.prev=21,e.prev=22,i||null==o.return||o.return();case 24:if(e.prev=24,!c){e.next=27;break}throw s;case 27:return e.finish(24);case 28:return e.finish(21);case 29:if(!(t.length<n.length)){e.next=32;break}return E(!A),e.abrupt("return",r({type:"NOTIFY",payload:{error:"O produto est\xe1 fora de estoque ou a quantidade \xe9 insuficiente."}}));case 32:r({type:"NOTIFY",payload:{loading:!0}}),(0,p.qC)("order",{address:k,mobile:S,cart:n,total:v},u.token).then((function(e){if(e.err)return r({type:"NOTIFY",payload:{error:e.err}});r({type:"ADD_CART",payload:[]});var t=b({},e.newOrder,{user:u.user});return r({type:"ADD_ORDERS",payload:g(h).concat([t])}),r({type:"NOTIFY",payload:{success:e.msg}}),D.push("/order/".concat(e.newOrder._id))}));case 34:case"end":return e.stop()}}),e,null,[[4,17,21,29],[22,,24,28]])})));return function(){return e.apply(this,arguments)}}();return 0===n.length?(0,i.jsx)("img",{className:"img-responsive w-100",src:"/empty_cart.jpg",alt:"not empty"}):(0,i.jsxs)("div",{className:"row mx-auto",children:[(0,i.jsxs)(c.default,{children:[(0,i.jsx)("meta",{name:"facebook-domain-verification",content:"wrs2vl5k2z6jg7z3jggsa9cv2hzif3"}),(0,i.jsx)("title",{children:"Cart Page"})]}),(0,i.jsxs)("div",{className:"col-md-8 text-secondary table-responsive my-3",children:[(0,i.jsx)("h2",{className:"text-uppercase",children:"CARRINHO DE COMPRAS"}),(0,i.jsx)("table",{className:"table my-3",children:(0,i.jsx)("tbody",{children:n.map((function(e){return(0,i.jsx)(d,{item:e,dispatch:r,cart:n},e._id)}))})})]}),(0,i.jsxs)("div",{className:"col-md-4 my-3 text-right text-uppercase text-secondary",children:[(0,i.jsxs)("form",{children:[(0,i.jsx)("h2",{children:"Envio"}),(0,i.jsx)("label",{htmlFor:"address",children:"Endere\xe7o"}),(0,i.jsx)("input",{placeholder:"digite seu endere\xe7o completo",type:"text",name:"address",id:"address",className:"form-control mb-2",value:k,onChange:function(e){return _(e.target.value)}}),(0,i.jsx)("label",{htmlFor:"mobile",children:"Contacto"}),(0,i.jsx)("input",{placeholder:"digite seu contacto",type:"text",name:"mobile",id:"mobile",className:"form-control mb-2",value:S,onChange:function(e){return O(e.target.value)}})]}),(0,i.jsxs)("h3",{children:["Total: ",(0,i.jsx)("span",{className:"text-danger",children:R})]}),(0,i.jsx)(l.default,{href:u.user?"#!":"/signin",children:(0,i.jsx)("a",{className:"btn btn-dark my-2",onClick:q,children:"Efetuar pagamento"})}),(0,i.jsx)(l.default,{href:u.user?"/":"/signin",children:(0,i.jsx)("a",{className:"btn btn-dark my-2",children:"Retornar as compras"})})]})]})}}},function(e){e.O(0,[774,888,179],(function(){return t=4701,e(e.s=t);var t}));var t=e.O();_N_E=t}]);