(this["webpackJsonpgoit-react-hw-09-phonebook"]=this["webpackJsonpgoit-react-hw-09-phonebook"]||[]).push([[0],{114:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(41);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,i=void 0;try{for(var s,o=e[Symbol.iterator]();!(n=(s=o.next()).done)&&(a.push(s.value),!t||a.length!==t);n=!0);}catch(c){r=!0,i=c}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return a}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},116:function(e,t,a){e.exports={container:"RegisterView_container__354mr",title:"RegisterView_title__2aBon",wrapper:"RegisterView_wrapper__1wC69",field:"RegisterView_field__3KDvy",name:"RegisterView_name__2Mec1",email:"RegisterView_email__2c9kD",password:"RegisterView_password__1VFoS",input:"RegisterView_input__F22au",button:"RegisterView_button__2Mn-e"}},128:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));var n=a(114),r=a(0),i=a(8),s=a(31),o=a(116),c=a.n(o),l=a(1);function u(){var e=Object(i.b)(),t=Object(r.useState)(""),a=Object(n.a)(t,2),o=a[0],u=a[1],b=Object(r.useState)(""),p=Object(n.a)(b,2),m=p[0],d=p[1],f=function(e){var t=e.target,a=t.name,n=t.value;switch(a){case"email":u(n);break;case"password":d(n);break;default:return}},w=Object(r.useCallback)((function(t){return e(s.a.logIn(t))}));return Object(l.jsxs)("div",{className:c.a.container,children:[Object(l.jsx)("h1",{className:c.a.title,children:"LogIn"}),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),w({email:o,password:m}),u(""),d("")},className:c.a.wrapper,autoComplete:"off",children:[Object(l.jsxs)("label",{className:c.a.field,children:[Object(l.jsx)("span",{className:c.a.email,children:"Email"}),Object(l.jsx)("input",{className:c.a.input,type:"email",name:"email",value:o,placeholder:"Enter email",onChange:f})]}),Object(l.jsxs)("label",{className:c.a.field,children:[Object(l.jsx)("span",{className:c.a.password,children:"Password"}),Object(l.jsx)("input",{className:c.a.input,type:"password",name:"password",value:m,placeholder:"Enter password",onChange:f,autoComplete:"off"})]}),Object(l.jsx)("button",{className:c.a.button,type:"submit",children:"Login"})]})]})}}}]);
//# sourceMappingURL=Login.1aa9a4ea.chunk.js.map