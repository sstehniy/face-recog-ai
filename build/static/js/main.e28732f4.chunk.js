(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{17:function(e,t,a){e.exports={SignUp:"SignUp_SignUp__3avw1","form-field":"SignUp_form-field__2dEfw"}},18:function(e,t,a){e.exports={Header:"Header_Header__3iYoD",menu__burger:"Header_menu__burger__26T8s",item:"Header_item__3pd91"}},21:function(e,t,a){e.exports={InputField:"InputField_InputField__3anSh",InputArea:"InputField_InputArea__3qY9W",UrlInput:"InputField_UrlInput__12dPY"}},22:function(e,t,a){e.exports={SignIn:"SignIn_SignIn__1FX2n",form__field:"SignIn_form__field__1fnW5"}},27:function(e,t,a){e.exports={Main:"Main_Main__12l2c",mustLogIn:"Main_mustLogIn__14hee"}},28:function(e,t,a){e.exports={photo__box:"PhotoField_photo__box__-J4sC",img__box:"PhotoField_img__box___GbT8"}},39:function(e,t,a){e.exports={Title:"Title_Title__10f5f"}},41:function(e,t,a){e.exports=a.p+"static/media/brain.163ed871.png"},44:function(e,t,a){e.exports={"lds-ripple":"LoadingSpinner_lds-ripple__EGGGy"}},45:function(e,t,a){e.exports={FileInput:"FileInput_FileInput__3eve_"}},48:function(e,t,a){e.exports=a(84)},53:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},62:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){e.exports=a.p+"static/media/Blanka-Regular.0f9bdc30.otf"},83:function(e,t,a){e.exports=a.p+"static/media/Pixopedia.a4c77f73.ttf"},84:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),c=a.n(l),o=(a(53),a(1)),i=a.n(o),u=a(5),s=a(4),m=a(20),d=a(2),p=(a(55),a(14)),f=a(87),g=a(86),b=a(18),E=a.n(b),h=a(39),v=a.n(h);var _=function(e){return r.a.createElement("h1",{className:v.a.Title},"Smartbrain")},w=a(40),S=a.n(w),O=a(41),x=a.n(O),j=function(){return r.a.createElement(S.a,{className:"Tilt",options:{max:35},style:{height:75,width:75}},r.a.createElement("img",{src:x.a,alt:"brain__logo",style:{width:75}}))},y=a(12),C=a(24),N=r.a.createContext({loggedUser:null,signInHandler:function(){},signUpHandler:function(){},signOutHandler:function(){},loadingState:{loading:!1,setLoading:function(){}},serverVal:{email:!1,username:!1}});var k=function(e){return r.a.createElement("div",{style:{position:"fixed",top:0,left:0,minWidth:"100vw",minHeight:"100vh",zIndex:500,backgroundColor:"rgba(0, 0, 0, 0.534)"},onClick:function(){return e.burgerClickedHandler()}})};a(56);var I=function(e){var t=e.burgerClickedHandler,a=e.isClicked,l=Object(n.useContext)(N),c=Object(C.useMediaQuery)({query:"(max-width: 1120px)"});return r.a.createElement(r.a.Fragment,null,a&&c&&r.a.createElement(k,{burgerClickedHandler:t}),r.a.createElement("nav",{className:"Nav ".concat(a?"active":"")},r.a.createElement(y.b,{to:"/",className:"nav__item",onClick:function(){return t()}},"Home"),l.loggedUser?r.a.createElement(y.b,{to:"/",className:"nav__item",onClick:function(){return l.signOutHandler()}},"Sign Out"):r.a.createElement(r.a.Fragment,null,r.a.createElement(y.b,{to:"/sign-in",className:"nav__item",onClick:function(){return t()}},"Sign In"),r.a.createElement(y.b,{to:"/sign-up",className:"nav__item",onClick:function(){return t()}},"Sign Up")),r.a.createElement("div",{className:"exit",onClick:function(){return t()}})))};var H=function(e){var t=Object(n.useState)(!1),a=Object(d.a)(t,2),l=a[0],c=a[1],o=function(){c(!l)};return r.a.createElement("header",{className:E.a.Header},r.a.createElement(j,null),r.a.createElement(_,null),r.a.createElement(I,{burgerClickedHandler:o,isClicked:l}),r.a.createElement("div",{className:E.a.menu__burger,onClick:function(){return o()}},r.a.createElement("div",{className:E.a.item}),r.a.createElement("div",{className:E.a.item}),r.a.createElement("div",{className:E.a.item})))},U=a(6),R=a(27),F=a.n(R),L=a(21),A=a.n(L);var P=function(e){var t=e.url,a=e.inputChangeHandler,n=e.URLPredictHandler;return r.a.createElement("div",{className:A.a.InputField},r.a.createElement("p",null,"Put any image url below and I will try to detect faces on the picture"),r.a.createElement("div",{className:A.a.InputArea},r.a.createElement("input",{type:"url",className:A.a.UrlInput,placeholder:"example: https://...",value:t,onChange:function(e){return a(e)}}),r.a.createElement("button",{type:"submit",onClick:function(e){return n(e)}},"Send")))},T=a(28),M=a.n(T),q=a(44),D=a.n(q),Y=function(){return r.a.createElement("div",{className:D.a["lds-ripple"]},r.a.createElement("div",null),r.a.createElement("div",null))};var V=function(e){var t=e.photo,a=e.faceRect,n=e.loading;return r.a.createElement("div",{className:M.a.photo__box},t||n?n?r.a.createElement(Y,null):r.a.createElement("div",{className:M.a.img__box,style:{backgroundImage:"url(".concat(t,")"),backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}},r.a.createElement("img",{src:t,alt:"DSAG",style:{visibility:"hidden",width:"100%"}}),a?a.map((function(e,t){return r.a.createElement("div",{key:t,style:{position:"absolute",top:"".concat(100*e.top_row,"%"),left:"".concat(100*e.left_col,"%"),height:"".concat(100*(e.bottom_row-e.top_row),"%"),width:"".concat(100*(e.right_col-e.left_col),"%"),border:"2px solid red"}})})):null):r.a.createElement("h1",{style:{color:"#273444"}},"No photo yet"))},J=(a(62),function(e){var t=e.active,a=e.modeSelectedHandler;return r.a.createElement("div",{className:"ModeChooser"},r.a.createElement("button",{to:"/url",className:"choose-btn ".concat(1===t?"active":null),onClick:function(){return a(1)}},"URL"),r.a.createElement("button",{to:"/upload",className:"choose-btn ".concat(2===t?"active":null),onClick:function(){return a(2)}},"File Upload"))}),Z=a(45),z=a.n(Z);var G=function(e){var t=e.fileChangeHandler,a=(e.filePredictHandler,Object(n.useRef)());return r.a.createElement("div",{className:z.a.FileInput},r.a.createElement("input",{type:"file",ref:a,accept:".jpg, .jpeg, .png",style:{display:"none"},onChange:function(e){return t(e)}}),r.a.createElement("button",{type:"submit",onClick:function(e){a.current.click()}},"Choose File"))},W=a(15),B=a.n(W),Q={predictUrl:function(){var e=Object(u.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.a.post("/api/predict/url",{url:t});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),predictFile:function(){var e=Object(u.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.a.post("/api/predict/file",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};var X=function(e){var t=e.setModalHandler,a=Object(n.useContext)(N),l=Object(n.useState)(""),c=Object(d.a)(l,2),o=c[0],i=c[1],u=Object(n.useState)(null),s=Object(d.a)(u,2),m=s[0],p=s[1],f=Object(n.useState)(null),g=Object(d.a)(f,2),b=g[0],E=g[1],h=Object(n.useState)([]),v=Object(d.a)(h,2),_=v[0],w=v[1],S=Object(n.useState)(1),O=Object(d.a)(S,2),x=O[0],j=O[1];Object(n.useEffect)((function(){m&&y(m)}),[m]);var y=function(e){w([]),E(null),a.loadingState.setLoading(!0);var n=new FormData;n.append("img",m),Q.predictFile(n).then((function(e){E(e.outputs[0].input.data.image.url),w(Object(U.a)(e.outputs[0].data.regions.map((function(e){return e.region_info.bounding_box})))),a.loadingState.setLoading(!1)})).catch((function(e){t("ERROR","Nothing found","No face detected, please try another photo"),a.loadingState.setLoading(!1)}))};return r.a.createElement("div",{className:F.a.Main},a.loggedUser?r.a.createElement(r.a.Fragment,null,r.a.createElement(J,{active:x,modeSelectedHandler:function(e){x!==e&&j(e)}}),1===x?r.a.createElement(P,{url:o,inputChangeHandler:function(e){var t=e.target;i(t.value)},URLPredictHandler:function(e){w([]),E(null),a.loadingState.setLoading(!0),!function(e){var t=new RegExp(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi);return e.match(t)}(o)?(t("ERROR","Input Error","Wrong input type, make sure your url is valid"),a.loadingState.setLoading(!1),i("")):Q.predictUrl(o).then((function(e){E(e.outputs[0].input.data.image.url),w(Object(U.a)(e.outputs[0].data.regions.map((function(e){return e.region_info.bounding_box})))),a.loadingState.setLoading(!1),i("")})).catch((function(e){t("ERROR","Nothing found","No face detected, please try another photo"),a.loadingState.setLoading(!1),i("")}))}}):r.a.createElement(G,{fileChangeHandler:function(e){p(e.target.files[0])},filePredictHandler:y}),r.a.createElement(V,{photo:b,faceRect:_,loading:a.loadingState.loading})):r.a.createElement("div",{className:F.a.mustLogIn},r.a.createElement("p",null,"You must be logged in to be able to use face detection")))},$=a(22),K=a.n($);var ee=function(e){var t=e.loginData,a=e.inputChangeHandler,l=Object(n.useContext)(N);return r.a.createElement("form",{method:"submit",className:K.a.SignIn,id:"signIn"},l.loadingState.loading?r.a.createElement(Y,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Sign In"),r.a.createElement("div",{className:K.a.form__field},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("input",{type:"username",value:t.username,name:"username",placeholder:"example: jdoe123",onChange:function(e){return a(e)}})),r.a.createElement("div",{className:K.a.form__field},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",value:t.password,name:"password",placeholder:"example: qwerty12345",onChange:function(e){return a(e)}})),r.a.createElement("button",{type:"submit",onClick:function(e){return l.signInHandler(e)}},"Sign In")))},te=a(46),ae=a(17),ne=a.n(ae);var re=function(e){var t=e.newUser,a=e.inputChangeHandler,l=t.name,c=t.username,o=t.email,i=t.password,u=Object(n.useContext)(N),s=Object(te.a)(),m=s.register,d=s.handleSubmit,p=s.errors,f=s.watch,g=Object(n.useRef)({});return g.current=f("password",""),r.a.createElement("form",{onSubmit:function(e){return e.preventDefault()},className:ne.a.SignUp,id:"signUp"},u.loadingState.loading?r.a.createElement(Y,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:ne.a["form-field"]},r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{name:"name",ref:m({required:"You must put in your name",maxLength:20}),defaultValue:l,onChange:function(e){return a(e)},placeholder:"example: John Doe",autoFocus:!0}),p.name&&r.a.createElement("p",null,p.name.message)),r.a.createElement("div",{className:ne.a["form-field"]},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{name:"email",ref:m({required:"You must provide an existing email",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,message:"invalid email address"}}),defaultValue:o,onChange:function(e){return a(e)},placeholder:"example: jdoe1990@example.com"}),p.email&&r.a.createElement("p",null,p.email.message)||u.serverVal.email&&r.a.createElement("p",null,"This email is already signed to other account")),r.a.createElement("div",{className:ne.a["form-field"]},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("input",{name:"username",ref:m({required:"You must specify a unique username"}),defaultValue:c,onChange:function(e){return a(e)},placeholder:"example: jdoe123"}),p.username&&r.a.createElement("p",null,p.username.message)||u.serverVal.username&&r.a.createElement("p",null,"This username is already used")),r.a.createElement("div",{className:ne.a["form-field"]},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{name:"password",type:"password",ref:m({required:"You must specify a password",minLength:{value:8,message:"Password must have at least 8 characters"}}),defaultValue:i,onChange:function(e){return a(e)},placeholder:"example: qwerty12345"}),p.password&&r.a.createElement("p",null,p.password.message)),r.a.createElement("div",{className:ne.a["form-field"]},r.a.createElement("label",null,"Repeat password"),r.a.createElement("input",{name:"password_repeat",type:"password",ref:m({validate:function(e){return e===g.current||"The passwords do not match"}})}),p.password_repeat&&r.a.createElement("p",null,p.password_repeat.message)),r.a.createElement("button",{type:"submit",onClick:d(u.signUpHandler)},"Sign Up")))};a(80);var le=function(e){var t=e.error,a=e.animation,n=t.header,l=t.text;return r.a.createElement("div",{className:"ErrorModal",style:{animation:"".concat(a||null)}},r.a.createElement("h3",null,n),r.a.createElement("p",null,l))};a(81);var ce=function(e){var t=e.success,a=e.animation,n=t.header,l=t.text;return r.a.createElement("div",{className:"SuccessModal",style:{animation:"".concat(a||null)}},r.a.createElement("h3",null,n),r.a.createElement("p",null,l))},oe=function(){var e=Object(u.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B.a.post("/api/signup",t);case 3:return a=e.sent,e.abrupt("return",a.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",Promise.reject(e.t0));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),ie=function(){var e=Object(u.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.a.post("/api/signin",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var ue=Object(p.f)((function(e){var t=Object(n.useState)({name:"",username:"",email:"",password:""}),a=Object(d.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)({username:"",password:""}),b=Object(d.a)(o,2),E=b[0],h=b[1],v=Object(n.useState)({email:!1,username:!1}),_=Object(d.a)(v,2),w=_[0],S=_[1],O=Object(n.useState)(null),x=Object(d.a)(O,2),j=x[0],y=x[1],C=Object(n.useState)(null),k=Object(d.a)(C,2),I=k[0],U=k[1],R=Object(n.useState)(null),F=Object(d.a)(R,2),L=F[0],A=F[1],P=Object(n.useState)(""),T=Object(d.a)(P,2),M=T[0],q=T[1],D=Object(n.useState)(!1),Y=Object(d.a)(D,2),V=Y[0],J=Y[1];Object(n.useEffect)((function(){return window.localStorage.getItem("loggedFaceRecogAppUser")?function(){var e=JSON.parse(window.localStorage.getItem("loggedFaceRecogAppUser"));y(e.name,e.username,e.token)}():null}),[]);var Z=function(e){switch(e.target.parentNode.parentNode.id){case"signUp":c(Object(m.a)({},l,Object(s.a)({},e.target.name,e.target.value)));break;case"signIn":h(Object(m.a)({},E,Object(s.a)({},e.target.name,e.target.value)))}},z=function(){var t=Object(u.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return S({email:!1,username:!1}),t.prev=1,J(!0),t.next=5,oe(l);case 5:c({name:"",username:"",email:"",password:""}),e.history.push("/"),J(!1),W("SUCCESS","Registration successfull","Sign in to be able to use face detection"),t.next=18;break;case 11:t.prev=11,t.t0=t.catch(1),console.log("kjlgkjg",t.t0.response.data.err),t.t0.response.data.err.errors.email&&S(Object(m.a)({},w,{email:!0})),t.t0.response.data.err.errors.username&&S(Object(m.a)({},w,{username:!0})),W("ERROR","Registration error","Error while data validation"),J(!1);case 18:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(){return t.apply(this,arguments)}}(),G=function(){var t=Object(u.a)(i.a.mark((function t(a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,ie(E);case 4:n=t.sent,y(n),h({username:"",password:""}),window.localStorage.setItem("loggedFaceRecogAppUser",JSON.stringify(n)),e.history.push("/"),W("SUCCESS","You are now logged in",""),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(1),W("ERROR","Wrong Login Data","Either your username or your password were wrong, try another ones"),h({username:"",password:""});case 16:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e){return t.apply(this,arguments)}}(),W=function(e,t,a){switch(e){case"SUCCESS":A(null),A({header:t,text:a});break;case"ERROR":U(null),U({header:t,text:a})}q("fadeIn .7s forwards ease"),setTimeout((function(){q("fadeOut 0.7s forwards ease"),setTimeout((function(){U(null),A(null)}),700)}),3e3)};return r.a.createElement(N.Provider,{value:{loggedUser:j,signInHandler:G,signUpHandler:z,signOutHandler:function(){y(null),localStorage.removeItem("loggedFaceRecogAppUser")},loadingState:{loading:V,setLoading:J},serverVal:{email:w.email,username:w.username}}},r.a.createElement("div",{className:"App"},I?r.a.createElement(le,{error:I,animation:M}):null,L?r.a.createElement(ce,{success:L,animation:M}):null,r.a.createElement(H,null),r.a.createElement(f.a,null,r.a.createElement(g.a,{key:e.location.key,timeout:{enter:300,exit:300},classNames:"fade"},r.a.createElement(p.c,{location:e.location},r.a.createElement(p.a,{path:"/",exact:!0,render:function(){return r.a.createElement(X,{error:I,setModalHandler:W})}}),r.a.createElement(p.a,{path:"/sign-in",render:function(){return r.a.createElement(ee,{loginData:E,inputChangeHandler:Z})}}),r.a.createElement(p.a,{path:"/sign-up",render:function(){return r.a.createElement(re,{newUser:l,inputChangeHandler:Z})}}))))))}));a(82),a(83);c.a.render(r.a.createElement(y.a,null,r.a.createElement(ue,null)),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.e28732f4.chunk.js.map