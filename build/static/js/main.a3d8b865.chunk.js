(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{16:function(e,a,t){e.exports={SignUp:"SignUp_SignUp__3avw1","form-field":"SignUp_form-field__2dEfw"}},18:function(e,a,t){e.exports={Header:"Header_Header__3iYoD",menu__burger:"Header_menu__burger__26T8s",item:"Header_item__3pd91"}},21:function(e,a,t){e.exports={InputField:"InputField_InputField__3anSh",InputArea:"InputField_InputArea__3qY9W",UrlInput:"InputField_UrlInput__12dPY"}},22:function(e,a,t){e.exports={SignIn:"SignIn_SignIn__1FX2n",form__field:"SignIn_form__field__1fnW5"}},27:function(e,a,t){e.exports={Main:"Main_Main__12l2c",mustLogIn:"Main_mustLogIn__14hee"}},28:function(e,a,t){e.exports={photo__box:"PhotoField_photo__box__-J4sC",img__box:"PhotoField_img__box___GbT8"}},39:function(e,a,t){e.exports={Title:"Title_Title__10f5f"}},41:function(e,a,t){e.exports=t.p+"static/media/brain.163ed871.png"},44:function(e,a,t){e.exports={"lds-ripple":"LoadingSpinner_lds-ripple__EGGGy"}},47:function(e,a,t){e.exports=t(82)},52:function(e,a,t){},54:function(e,a,t){},55:function(e,a,t){},78:function(e,a,t){},79:function(e,a,t){},80:function(e,a,t){e.exports=t.p+"static/media/Blanka-Regular.0f9bdc30.otf"},81:function(e,a,t){e.exports=t.p+"static/media/Pixopedia.a4c77f73.ttf"},82:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(19),c=t.n(l),o=(t(52),t(1)),i=t.n(o),u=t(5),s=t(4),m=t(20),d=t(3),p=(t(54),t(14)),g=t(85),f=t(84),E=t(18),b=t.n(E),h=t(39),v=t.n(h);var _=function(e){return r.a.createElement("h1",{className:v.a.Title},"Smartbrain")},w=t(40),S=t.n(w),x=t(41),O=t.n(x),j=function(){return r.a.createElement(S.a,{className:"Tilt",options:{max:35},style:{height:75,width:75}},r.a.createElement("img",{src:O.a,alt:"brain__logo",style:{width:75}}))},y=t(13),N=t(24),C=r.a.createContext({loggedUser:null,signInHandler:function(){},signUpHandler:function(){},signOutHandler:function(){},loadingState:{loading:!1,setLoading:function(){}},serverVal:{email:!1,username:!1}});var k=function(e){return r.a.createElement("div",{style:{position:"fixed",top:0,left:0,minWidth:"100vw",minHeight:"100vh",zIndex:500,backgroundColor:"rgba(0, 0, 0, 0.534)"},onClick:function(){return e.burgerClickedHandler()}})};t(55);var I=function(e){var a=e.burgerClickedHandler,t=e.isClicked,l=Object(n.useContext)(C),c=Object(N.useMediaQuery)({query:"(max-width: 1120px)"});return r.a.createElement(r.a.Fragment,null,t&&c&&r.a.createElement(k,{burgerClickedHandler:a}),r.a.createElement("nav",{className:"Nav ".concat(t?"active":"")},r.a.createElement(y.b,{to:"/",className:"nav__item",onClick:function(){return a()}},"Home"),l.loggedUser?r.a.createElement(y.b,{to:"/",className:"nav__item",onClick:function(){return l.signOutHandler()}},"Sign Out"):r.a.createElement(r.a.Fragment,null,r.a.createElement(y.b,{to:"/sign-in",className:"nav__item",onClick:function(){return a()}},"Sign In"),r.a.createElement(y.b,{to:"/sign-up",className:"nav__item",onClick:function(){return a()}},"Sign Up")),r.a.createElement("div",{className:"exit",onClick:function(){return a()}})))};var H=function(e){var a=Object(n.useState)(!1),t=Object(d.a)(a,2),l=t[0],c=t[1],o=function(){c(!l)};return r.a.createElement("header",{className:b.a.Header},r.a.createElement(j,null),r.a.createElement(_,null),r.a.createElement(I,{burgerClickedHandler:o,isClicked:l}),r.a.createElement("div",{className:b.a.menu__burger,onClick:function(){return o()}},r.a.createElement("div",{className:b.a.item}),r.a.createElement("div",{className:b.a.item}),r.a.createElement("div",{className:b.a.item})))},U=t(6),R=t(27),F=t.n(R),A=t(21),L=t.n(A);var T=function(e){var a=e.url,t=e.inputChangeHandler,n=e.predictHandler;return r.a.createElement("div",{className:L.a.InputField},r.a.createElement("p",null,"Put any image url below and I will try to detect faces on the picture"),r.a.createElement("div",{className:L.a.InputArea},r.a.createElement("input",{type:"url",className:L.a.UrlInput,placeholder:"example: https://...",value:a,onChange:function(e){return t(e)}}),r.a.createElement("button",{type:"submit",onClick:function(e){return n(e)}},"Send")))},P=t(28),M=t.n(P),q=t(44),D=t.n(q),Y=function(){return r.a.createElement("div",{className:D.a["lds-ripple"]},r.a.createElement("div",null),r.a.createElement("div",null))};var V=function(e){var a=e.photo,t=e.faceRect,n=e.loading;return r.a.createElement("div",{className:M.a.photo__box},a||n?n?r.a.createElement(Y,null):r.a.createElement("div",{className:M.a.img__box,style:{backgroundImage:"url(".concat(a,")"),backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}},r.a.createElement("img",{src:a,alt:"DSAG",style:{visibility:"hidden",width:"100%"}}),t?t.map((function(e,a){return r.a.createElement("div",{key:a,style:{position:"absolute",top:"".concat(100*e.top_row,"%"),left:"".concat(100*e.left_col,"%"),height:"".concat(100*(e.bottom_row-e.top_row),"%"),width:"".concat(100*(e.right_col-e.left_col),"%"),border:"2px solid red"}})})):null):r.a.createElement("h1",{style:{color:"#273444"}},"No photo yet"))},J=t(17),Z=t.n(J),z=function(){var e=Object(u.a)(i.a.mark((function e(a){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z.a.post("/api/predict/",{url:a});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();var G=function(e){var a=e.setModalHandler,t=Object(n.useContext)(C),l=Object(n.useState)(""),c=Object(d.a)(l,2),o=c[0],i=c[1],u=Object(n.useState)(null),s=Object(d.a)(u,2),m=s[0],p=s[1],g=Object(n.useState)([]),f=Object(d.a)(g,2),E=f[0],b=f[1];return r.a.createElement("div",{className:F.a.Main},t.loggedUser?r.a.createElement(r.a.Fragment,null,r.a.createElement(T,{url:o,inputChangeHandler:function(e){var a=e.target;i(a.value)},predictHandler:function(e){e.preventDefault(),b([]),p(null),t.loadingState.setLoading(!0),!function(e){var a=new RegExp(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi);return e.match(a)}(o)?(a("ERROR","Input Error","Wrong input type, make sure your url is valid"),t.loadingState.setLoading(!1),i("")):z(o).then((function(e){p(e.outputs[0].input.data.image.url),b(Object(U.a)(e.outputs[0].data.regions.map((function(e){return e.region_info.bounding_box})))),t.loadingState.setLoading(!1),i("")})).catch((function(e){a("ERROR","Nothing found","No face detected, please try another photo"),t.loadingState.setLoading(!1),i("")}))}}),r.a.createElement(V,{photo:m,faceRect:E,loading:t.loadingState.loading})):r.a.createElement("div",{className:F.a.mustLogIn},r.a.createElement("p",null,"You must be logged in to be able to use face detection")))},W=t(22),B=t.n(W);var Q=function(e){var a=e.loginData,t=e.inputChangeHandler,l=Object(n.useContext)(C);return r.a.createElement("form",{method:"submit",className:B.a.SignIn,id:"signIn"},l.loadingState.loading?r.a.createElement(Y,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Sign In"),r.a.createElement("div",{className:B.a.form__field},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("input",{type:"username",value:a.username,name:"username",placeholder:"example: jdoe123",onChange:function(e){return t(e)}})),r.a.createElement("div",{className:B.a.form__field},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",value:a.password,name:"password",placeholder:"example: qwerty12345",onChange:function(e){return t(e)}})),r.a.createElement("button",{type:"submit",onClick:function(e){return l.signInHandler(e)}},"Sign In")))},X=t(45),$=t(16),K=t.n($);var ee=function(e){var a=e.newUser,t=e.inputChangeHandler,l=a.name,c=a.username,o=a.email,i=a.password,u=Object(n.useContext)(C),s=Object(X.a)(),m=s.register,d=s.handleSubmit,p=s.errors,g=s.watch,f=Object(n.useRef)({});return f.current=g("password",""),r.a.createElement("form",{onSubmit:function(e){return e.preventDefault()},className:K.a.SignUp,id:"signUp"},u.loadingState.loading?r.a.createElement(Y,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:K.a["form-field"]},r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{name:"name",ref:m({required:"You must put in your name",maxLength:20}),defaultValue:l,onChange:function(e){return t(e)},placeholder:"example: John Doe",autoFocus:!0}),p.name&&r.a.createElement("p",null,p.name.message)),r.a.createElement("div",{className:K.a["form-field"]},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{name:"email",ref:m({required:"You must provide an existing email",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,message:"invalid email address"}}),defaultValue:o,onChange:function(e){return t(e)},placeholder:"example: jdoe1990@example.com"}),p.email&&r.a.createElement("p",null,p.email.message)||u.serverVal.email&&r.a.createElement("p",null,"This email is already signed to other account")),r.a.createElement("div",{className:K.a["form-field"]},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("input",{name:"username",ref:m({required:"You must specify a unique username"}),defaultValue:c,onChange:function(e){return t(e)},placeholder:"example: jdoe123"}),p.username&&r.a.createElement("p",null,p.username.message)||u.serverVal.username&&r.a.createElement("p",null,"This username is already used")),r.a.createElement("div",{className:K.a["form-field"]},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{name:"password",type:"password",ref:m({required:"You must specify a password",minLength:{value:8,message:"Password must have at least 8 characters"}}),defaultValue:i,onChange:function(e){return t(e)},placeholder:"example: qwerty12345"}),p.password&&r.a.createElement("p",null,p.password.message)),r.a.createElement("div",{className:K.a["form-field"]},r.a.createElement("label",null,"Repeat password"),r.a.createElement("input",{name:"password_repeat",type:"password",ref:m({validate:function(e){return e===f.current||"The passwords do not match"}})}),p.password_repeat&&r.a.createElement("p",null,p.password_repeat.message)),r.a.createElement("button",{type:"submit",onClick:d(u.signUpHandler)},"Sign Up")))};t(78);var ae=function(e){var a=e.error,t=e.animation,n=a.header,l=a.text;return r.a.createElement("div",{className:"ErrorModal",style:{animation:"".concat(t||null)}},r.a.createElement("h3",null,n),r.a.createElement("p",null,l))};t(79);var te=function(e){var a=e.success,t=e.animation,n=a.header,l=a.text;return r.a.createElement("div",{className:"SuccessModal",style:{animation:"".concat(t||null)}},r.a.createElement("h3",null,n),r.a.createElement("p",null,l))},ne=function(){var e=Object(u.a)(i.a.mark((function e(a){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z.a.post("/api/signup",a);case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",Promise.reject(e.t0));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a){return e.apply(this,arguments)}}(),re=function(){var e=Object(u.a)(i.a.mark((function e(a){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z.a.post("/api/signin",a);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();var le=Object(p.f)((function(e){var a=Object(n.useState)({name:"",username:"",email:"",password:""}),t=Object(d.a)(a,2),l=t[0],c=t[1],o=Object(n.useState)({username:"",password:""}),E=Object(d.a)(o,2),b=E[0],h=E[1],v=Object(n.useState)({email:!1,username:!1}),_=Object(d.a)(v,2),w=_[0],S=_[1],x=Object(n.useState)(null),O=Object(d.a)(x,2),j=O[0],y=O[1],N=Object(n.useState)(null),k=Object(d.a)(N,2),I=k[0],U=k[1],R=Object(n.useState)(null),F=Object(d.a)(R,2),A=F[0],L=F[1],T=Object(n.useState)(""),P=Object(d.a)(T,2),M=P[0],q=P[1],D=Object(n.useState)(!1),Y=Object(d.a)(D,2),V=Y[0],J=Y[1];Object(n.useEffect)((function(){return window.localStorage.getItem("loggedFaceRecogAppUser")?function(){var e=JSON.parse(window.localStorage.getItem("loggedFaceRecogAppUser"));y(e.name,e.username,e.token)}():null}),[]);var Z=function(e){switch(e.target.parentNode.parentNode.id){case"signUp":c(Object(m.a)({},l,Object(s.a)({},e.target.name,e.target.value)));break;case"signIn":h(Object(m.a)({},b,Object(s.a)({},e.target.name,e.target.value)))}},z=function(){var a=Object(u.a)(i.a.mark((function a(){return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return S({email:!1,username:!1}),a.prev=1,J(!0),a.next=5,ne(l);case 5:c({name:"",username:"",email:"",password:""}),e.history.push("/"),J(!1),B("SUCCESS","Registration successfull","Sign in to be able to use face detection"),a.next=18;break;case 11:a.prev=11,a.t0=a.catch(1),console.log("kjlgkjg",a.t0.response.data.err),a.t0.response.data.err.errors.email&&S(Object(m.a)({},w,{email:!0})),a.t0.response.data.err.errors.username&&S(Object(m.a)({},w,{username:!0})),B("ERROR","Registration error","Error while data validation"),J(!1);case 18:case"end":return a.stop()}}),a,null,[[1,11]])})));return function(){return a.apply(this,arguments)}}(),W=function(){var a=Object(u.a)(i.a.mark((function a(t){var n;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),a.prev=1,a.next=4,re(b);case 4:n=a.sent,y(n),h({username:"",password:""}),window.localStorage.setItem("loggedFaceRecogAppUser",JSON.stringify(n)),e.history.push("/"),B("SUCCESS","You are now logged in",""),a.next=16;break;case 12:a.prev=12,a.t0=a.catch(1),B("ERROR","Wrong Login Data","Either your username or your password were wrong, try another ones"),h({username:"",password:""});case 16:case"end":return a.stop()}}),a,null,[[1,12]])})));return function(e){return a.apply(this,arguments)}}(),B=function(e,a,t){switch(e){case"SUCCESS":L(null),L({header:a,text:t});break;case"ERROR":U(null),U({header:a,text:t})}q("fadeIn .7s forwards ease"),setTimeout((function(){q("fadeOut 0.7s forwards ease"),setTimeout((function(){U(null),L(null)}),700)}),3e3)};return r.a.createElement(C.Provider,{value:{loggedUser:j,signInHandler:W,signUpHandler:z,signOutHandler:function(){y(null),localStorage.removeItem("loggedFaceRecogAppUser")},loadingState:{loading:V,setLoading:J},serverVal:{email:w.email,username:w.username}}},r.a.createElement("div",{className:"App"},I?r.a.createElement(ae,{error:I,animation:M}):null,A?r.a.createElement(te,{success:A,animation:M}):null,r.a.createElement(H,null),r.a.createElement(g.a,null,r.a.createElement(f.a,{key:e.location.key,timeout:{enter:300,exit:300},classNames:"fade"},r.a.createElement(p.c,{location:e.location},r.a.createElement(p.a,{path:"/",exact:!0,render:function(){return r.a.createElement(G,{error:I,setModalHandler:B})}}),r.a.createElement(p.a,{path:"/sign-in",render:function(){return r.a.createElement(Q,{loginData:b,inputChangeHandler:Z})}}),r.a.createElement(p.a,{path:"/sign-up",render:function(){return r.a.createElement(ee,{newUser:l,inputChangeHandler:Z})}}))))))}));t(80),t(81);c.a.render(r.a.createElement(y.a,null,r.a.createElement(le,null)),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.a3d8b865.chunk.js.map