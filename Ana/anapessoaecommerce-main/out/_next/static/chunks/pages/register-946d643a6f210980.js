(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[495],{8740:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/register",function(){return n(3187)}])},3187:function(e,r,n){"use strict";n.r(r);var t=n(4051),a=n.n(t),s=n(5893),o=n(9008),i=n(1664),l=n(7294),c=n(3517),u=n(6597),m=n(9692),p=n(1163);function d(e,r,n,t,a,s,o){try{var i=e[s](o),l=i.value}catch(c){return void n(c)}i.done?r(l):Promise.resolve(l).then(t,a)}function f(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}r.default=function(){var e=(0,l.useState)({name:"",email:"",password:"",cf_password:""}),r=e[0],n=e[1],t=r.name,h=r.email,x=r.password,v=r.cf_password,y=(0,l.useContext)(u.R),b=y.state,j=y.dispatch,w=b.auth,g=(0,p.useRouter)(),N=function(e){var t=e.target,a=t.name,s=t.value;n(function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){f(e,r,n[r])}))}return e}({},r,f({},a,s))),j({type:"NOTIFY",payload:{}})},O=function(){var e,n=(e=a().mark((function e(n){var s,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),!(s=(0,c.Z)(t,h,x,v))){e.next=4;break}return e.abrupt("return",j({type:"NOTIFY",payload:{error:s}}));case 4:return j({type:"NOTIFY",payload:{loading:!0}}),e.next=7,(0,m.qC)("auth/register",r);case 7:if(!(o=e.sent).err){e.next=10;break}return e.abrupt("return",j({type:"NOTIFY",payload:{error:o.err}}));case 10:return e.abrupt("return",j({type:"NOTIFY",payload:{success:o.msg}}));case 11:case"end":return e.stop()}}),e)})),function(){var r=this,n=arguments;return new Promise((function(t,a){var s=e.apply(r,n);function o(e){d(s,t,a,o,i,"next",e)}function i(e){d(s,t,a,o,i,"throw",e)}o(void 0)}))});return function(e){return n.apply(this,arguments)}}();return(0,l.useEffect)((function(){0!==Object.keys(w).length&&g.push("/")}),[w]),(0,s.jsxs)("div",{children:[(0,s.jsxs)(o.default,{children:[(0,s.jsx)("title",{children:"Register Page"}),(0,s.jsx)("meta",{name:"facebook-domain-verification",content:"wrs2vl5k2z6jg7z3jggsa9cv2hzif3"})]}),(0,s.jsxs)("form",{className:"mx-auto my-4",style:{maxWidth:"500px"},onSubmit:O,children:[(0,s.jsxs)("div",{className:"form-group",children:[(0,s.jsx)("label",{htmlFor:"name",children:"Nome"}),(0,s.jsx)("input",{type:"text",className:"form-control",id:"name",name:"name",value:t,onChange:N})]}),(0,s.jsxs)("div",{className:"form-group",children:[(0,s.jsx)("label",{htmlFor:"exampleInputEmail1",children:"Endere\xe7o de Email"}),(0,s.jsx)("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",name:"email",value:h,onChange:N}),(0,s.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Nunca compartilharemos seu e-mail"})]}),(0,s.jsxs)("div",{className:"form-group",children:[(0,s.jsx)("label",{htmlFor:"exampleInputPassword1",children:"Senha"}),(0,s.jsx)("input",{type:"password",className:"form-control",id:"exampleInputPassword1",name:"password",value:x,onChange:N})]}),(0,s.jsxs)("div",{className:"form-group",children:[(0,s.jsx)("label",{htmlFor:"exampleInputPassword2",children:"Confirmar senha"}),(0,s.jsx)("input",{type:"password",className:"form-control",id:"exampleInputPassword2",name:"cf_password",value:v,onChange:N})]}),(0,s.jsx)("button",{type:"submit",className:"btn btn-dark w-100",children:"Registar"}),(0,s.jsxs)("p",{className:"my-2",children:["Voc\xea j\xe1 tem uma conta? ",(0,s.jsx)(i.default,{href:"/signin",children:(0,s.jsx)("a",{style:{color:"crimson"},children:"Entrar"})})]})]})]})}},3517:function(e,r){"use strict";r.Z=function(e,r,n,t){return e&&r&&n?function(e){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}(r)?n.length<6?"A senha deve ter pelo menos 6 caracteres.":n!==t?"Confirmar senha n\xe3o corresponde.":void 0:"E-mail inv\xe1lido.":"Por favor, preencha todos os campos."}}},function(e){e.O(0,[774,888,179],(function(){return r=8740,e(e.s=r);var r}));var r=e.O();_N_E=r}]);