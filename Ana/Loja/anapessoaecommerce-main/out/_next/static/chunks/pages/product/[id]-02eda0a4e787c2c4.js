(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[360],{2379:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product/[id]",function(){return n(8972)}])},8972:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return u}});var s=n(5893),r=n(9008),c=n(1664),i=n(7294),a=n(6597),l=n(1374),u=!0;t.default=function(e){var t=(0,i.useState)(e.product)[0],n=(0,i.useState)(0),u=n[0],d=n[1],o=t.price.toLocaleString("pt",{style:"currency",currency:"EUR"}),m=(0,i.useContext)(a.R),h=m.state,x=m.dispatch,f=h.cart,p=h.auth,N=function(e){return u===e?" active":""};return(0,s.jsxs)("div",{className:"row detail_page",children:[(0,s.jsx)(r.default,{children:(0,s.jsx)("title",{children:"Detail Product"})}),(0,s.jsxs)("div",{className:"col-md-6",children:[(0,s.jsx)("img",{src:t.images[u].url,alt:t.images[u].url,className:"img-view-product d-block img-thumbnail rounded mt-4 w-100",style:{height:"auto"}}),(0,s.jsx)("div",{className:"row mx-0",style:{cursor:"pointer"},children:t.images.map((function(e,t){return(0,s.jsx)("img",{src:e.url,alt:e.url,className:"img-thumbnail rounded ".concat(N(t)),style:{height:"60px",width:"20%"},onClick:function(){return d(t)}},t)}))})]}),(0,s.jsxs)("div",{className:"col-md-6 mt-3",children:[(0,s.jsx)("h2",{className:"text-uppercase",children:t.title}),(0,s.jsx)("h5",{className:"text-danger",children:o}),(0,s.jsx)("div",{className:"row mx-0 d-flex justify-content-between"}),(0,s.jsx)("div",{className:"my-2",children:t.description}),(0,s.jsx)("div",{className:"my-2",children:t.content}),(0,s.jsx)(c.default,{href:p.user?"/cart":"/signin",children:(0,s.jsx)("a",{className:"btn btn-info",style:{marginRight:"5px",flex:1},onClick:function(){return x((0,l.Xq)(t,f))},children:"Comprar agora"})}),(0,s.jsx)("button",{className:"btn btn-success",style:{marginLeft:"5px",flex:1},disabled:0===t.inStock,onClick:function(){return x((0,l.Xq)(t,f))},children:"Adicionar ao carrinho"}),(0,s.jsx)(c.default,{href:"/",children:(0,s.jsx)("a",{className:"btn btn-dark my-2",children:"Retornar as compras"})})]})]})}}},function(e){e.O(0,[774,888,179],(function(){return t=2379,e(e.s=t);var t}));var t=e.O();_N_E=t}]);