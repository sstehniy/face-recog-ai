(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{17:function(e,t,a){e.exports={SignUp:"SignUp_SignUp__3avw1","form-field":"SignUp_form-field__2dEfw"}},18:function(e,t,a){e.exports={Header:"Header_Header__3iYoD",menu__burger:"Header_menu__burger__26T8s",item:"Header_item__3pd91"}},21:function(e,t,a){e.exports={InputField:"InputField_InputField__3anSh",InputArea:"InputField_InputArea__3qY9W",UrlInput:"InputField_UrlInput__12dPY"}},22:function(e,t,a){e.exports={SignIn:"SignIn_SignIn__1FX2n",form__field:"SignIn_form__field__1fnW5"}},27:function(e,t,a){e.exports={Main:"Main_Main__12l2c",mustLogIn:"Main_mustLogIn__14hee"}},28:function(e,t,a){e.exports={photo__box:"PhotoField_photo__box__-J4sC",img__box:"PhotoField_img__box___GbT8"}},29:function(e,t,a){e.exports={History:"History_History__AfAKX","history-list":"History_history-list__1Sp1t"}},30:function(e,t,a){e.exports={"history-list__item":"HistoryItem_history-list__item__1a-G6",img__box:"HistoryItem_img__box__1LsPB"}},41:function(e,t,a){e.exports={Title:"Title_Title__10f5f"}},42:function(e,t,a){e.exports=a.p+"static/media/brain.163ed871.png"},45:function(e,t,a){e.exports={"lds-ripple":"LoadingSpinner_lds-ripple__EGGGy"}},46:function(e,t,a){e.exports={FileInput:"FileInput_FileInput__3eve_"}},49:function(e,t,a){e.exports=a(85)},54:function(e,t,a){},56:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},65:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),o=a.n(l),i=(a(54),a(1)),c=a.n(i),u=a(3),s=a(5),m=a(20),d=a(2),p=(a(56),a(15)),g=a(88),f=a(87),b=a(18),E=a.n(b),h=a(41),v=a.n(h);var _=function(e){return r.a.createElement("h1",{className:v.a.Title},"Smartbrain")},y=(a(57),a(42)),S=a.n(y),w=(a(58),function(){return r.a.createElement("img",{src:S.a,alt:"brain__logo",id:"logo"})}),O=a(12),x=a(24),j=r.a.createContext({loggedUser:null,signInHandler:function(){},signUpHandler:function(){},signOutHandler:function(){},loadingState:{loading:!1,setLoading:function(){}},serverVal:{email:!1,username:!1}});var N=function(e){return r.a.createElement("div",{style:{position:"fixed",top:0,left:0,minWidth:"100vw",minHeight:"100vh",zIndex:500,backgroundColor:"rgba(0, 0, 0, 0.534)"},onClick:function(){return e.burgerClickedHandler()}})};a(59);var k=function(e){var t=e.burgerClickedHandler,a=e.isClicked,l=Object(n.useContext)(j),o=Object(x.useMediaQuery)({query:"(max-width: 1120px)"});return r.a.createElement(r.a.Fragment,null,a&&o&&r.a.createElement(N,{burgerClickedHandler:t}),r.a.createElement("nav",{className:"Nav ".concat(a?"active":"")},r.a.createElement(O.b,{to:"/",className:"nav__item",onClick:function(){return t()}},"Home"),l.loggedUser?r.a.createElement(r.a.Fragment,null,r.a.createElement(O.b,{to:"/history",className:"nav__item"},"History"),r.a.createElement(O.b,{to:"/",className:"nav__item",onClick:function(){return l.signOutHandler()}},"Sign Out")):r.a.createElement(r.a.Fragment,null,r.a.createElement(O.b,{to:"/sign-in",className:"nav__item",onClick:function(){return t()}},"Sign In"),r.a.createElement(O.b,{to:"/sign-up",className:"nav__item",onClick:function(){return t()}},"Sign Up")),r.a.createElement("div",{className:"exit",onClick:function(){return t()}})))};var C=function(e){var t=Object(n.useState)(!1),a=Object(d.a)(t,2),l=a[0],o=a[1],i=function(){o(!l)};return r.a.createElement("header",{className:E.a.Header},r.a.createElement(w,null),r.a.createElement(_,null),r.a.createElement(k,{burgerClickedHandler:i,isClicked:l}),r.a.createElement("div",{className:E.a.menu__burger,onClick:function(){return i()}},r.a.createElement("div",{className:E.a.item}),r.a.createElement("div",{className:E.a.item}),r.a.createElement("div",{className:E.a.item})))},H=a(6),I=a(27),U=a.n(I),F=a(21),R=a.n(F);var L=function(e){var t=e.url,a=e.inputChangeHandler,n=e.URLPredictHandler;return r.a.createElement("div",{className:R.a.InputField},r.a.createElement("p",null,"Put any image url below and I will try to detect faces on the picture"),r.a.createElement("div",{className:R.a.InputArea},r.a.createElement("input",{type:"url",className:R.a.UrlInput,placeholder:"example: https://...",value:t,onChange:function(e){return a(e)}}),r.a.createElement("button",{type:"submit",onClick:function(e){return n(e)}},"Send")))},A=a(28),P=a.n(A),q=a(45),M=a.n(q),T=function(){return r.a.createElement("div",{className:M.a["lds-ripple"]},r.a.createElement("div",null),r.a.createElement("div",null))};var Y=function(e){var t=e.photo,a=e.faceRect,n=e.loading;return r.a.createElement("div",{className:P.a.photo__box},t||n?n?r.a.createElement(T,null):r.a.createElement("div",{className:P.a.img__box,style:{backgroundImage:"url(".concat(t,")"),backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}},r.a.createElement("img",{src:t,alt:"DSAG",style:{visibility:"hidden",width:"100%"}}),a?a.map((function(e,t){return r.a.createElement("div",{key:t,style:{position:"absolute",top:"".concat(100*e.top_row,"%"),left:"".concat(100*e.left_col,"%"),height:"".concat(100*(e.bottom_row-e.top_row),"%"),width:"".concat(100*(e.right_col-e.left_col),"%"),border:"2px solid red"}})})):null):r.a.createElement("h1",{style:{color:"#273444"}},"No photo yet"))},D=(a(65),function(e){var t=e.active,a=e.modeSelectedHandler;return r.a.createElement("div",{className:"ModeChooser"},r.a.createElement("button",{to:"/url",className:"choose-btn ".concat(1===t?"active":null),onClick:function(){return a(1)}},"URL"),r.a.createElement("button",{to:"/upload",className:"choose-btn ".concat(2===t?"active":null),onClick:function(){return a(2)}},"File Upload"))}),V=a(46),J=a.n(V);var z=function(e){var t=e.fileChangeHandler,a=(e.filePredictHandler,Object(n.useRef)());return r.a.createElement("div",{className:J.a.FileInput},r.a.createElement("input",{type:"file",ref:a,accept:".jpg, .jpeg, .png",style:{display:"none"},onChange:function(e){return t(e)}}),r.a.createElement("button",{type:"submit",onClick:function(e){a.current.click()}},"Choose File"))},G=a(13),Z=a.n(G),W={predictUrl:function(){var e=Object(u.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z.a.post("/api/predict/url",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),predictFile:function(){var e=Object(u.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z.a.post("/api/predict/file",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};var B=function(e){var t=e.setModalHandler,a=Object(n.useContext)(j),l=Object(n.useState)(""),o=Object(d.a)(l,2),i=o[0],c=o[1],u=Object(n.useState)(null),s=Object(d.a)(u,2),m=s[0],p=s[1],g=Object(n.useState)(null),f=Object(d.a)(g,2),b=f[0],E=f[1],h=Object(n.useState)([]),v=Object(d.a)(h,2),_=v[0],y=v[1],S=Object(n.useState)(1),w=Object(d.a)(S,2),O=w[0],x=w[1];Object(n.useEffect)((function(){m&&N(m)}),[m]);var N=function(e){y([]),E(null),a.loadingState.setLoading(!0);var n=new FormData;n.append("img",m),n.append("user",JSON.stringify(a.loggedUser)),W.predictFile(n).then((function(e){E(e.outputs[0].input.data.image.url),y(Object(H.a)(e.outputs[0].data.regions.map((function(e){return e.region_info.bounding_box})))),a.loadingState.setLoading(!1)})).catch((function(e){t("ERROR","Nothing found","No face detected, please try another photo"),a.loadingState.setLoading(!1)}))};return r.a.createElement("div",{className:U.a.Main},a.loggedUser?r.a.createElement(r.a.Fragment,null,r.a.createElement(D,{active:O,modeSelectedHandler:function(e){O!==e&&x(e)}}),1===O?r.a.createElement(L,{url:i,inputChangeHandler:function(e){var t=e.target;c(t.value)},URLPredictHandler:function(e){y([]),E(null),a.loadingState.setLoading(!0),!function(e){var t=new RegExp(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi);return e.match(t)}(i)?(t("ERROR","Input Error","Wrong input type, make sure your url is valid"),a.loadingState.setLoading(!1),c("")):W.predictUrl({url:i,user:a.loggedUser}).then((function(e){E(e.outputs[0].input.data.image.url),y(Object(H.a)(e.outputs[0].data.regions.map((function(e){return e.region_info.bounding_box})))),a.loadingState.setLoading(!1),c("")})).catch((function(e){t("ERROR","Nothing found","No face detected, please try another photo"),a.loadingState.setLoading(!1),c("")}))}}):r.a.createElement(z,{fileChangeHandler:function(e){p(e.target.files[0])},filePredictHandler:N}),r.a.createElement(Y,{photo:b,faceRect:_,loading:a.loadingState.loading})):r.a.createElement("div",{className:U.a.mustLogIn},r.a.createElement("p",null,"You must be logged in to be able to use face detection")))},X=a(22),K=a.n(X);var Q=function(e){var t=e.loginData,a=e.inputChangeHandler,l=Object(n.useContext)(j);return r.a.createElement("form",{method:"submit",className:K.a.SignIn,id:"signIn"},l.loadingState.loading?r.a.createElement(T,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Sign In"),r.a.createElement("div",{className:K.a.form__field},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("input",{type:"username",value:t.username,name:"username",placeholder:"example: jdoe123",onChange:function(e){return a(e)}})),r.a.createElement("div",{className:K.a.form__field},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",value:t.password,name:"password",placeholder:"example: qwerty12345",onChange:function(e){return a(e)}})),r.a.createElement("button",{type:"submit",onClick:function(e){return l.signInHandler(e)}},"Sign In")))},$=a(47),ee=a(17),te=a.n(ee);var ae=function(e){var t=e.newUser,a=e.inputChangeHandler,l=t.name,o=t.username,i=t.email,c=t.password,u=Object(n.useContext)(j),s=Object($.a)(),m=s.register,d=s.handleSubmit,p=s.errors,g=s.watch,f=Object(n.useRef)({});return f.current=g("password",""),r.a.createElement("form",{onSubmit:function(e){return e.preventDefault()},className:te.a.SignUp,id:"signUp"},u.loadingState.loading?r.a.createElement(T,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:te.a["form-field"]},r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{name:"name",ref:m({required:"You must put in your name",maxLength:20}),defaultValue:l,onChange:function(e){return a(e)},placeholder:"example: John Doe",autoFocus:!0}),p.name&&r.a.createElement("p",null,p.name.message)),r.a.createElement("div",{className:te.a["form-field"]},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{name:"email",ref:m({required:"You must provide an existing email",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,message:"invalid email address"}}),defaultValue:i,onChange:function(e){return a(e)},placeholder:"example: jdoe1990@example.com"}),p.email&&r.a.createElement("p",null,p.email.message)||u.serverVal.email&&r.a.createElement("p",null,"This email is already signed to other account")),r.a.createElement("div",{className:te.a["form-field"]},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("input",{name:"username",ref:m({required:"You must specify a unique username"}),defaultValue:o,onChange:function(e){return a(e)},placeholder:"example: jdoe123"}),p.username&&r.a.createElement("p",null,p.username.message)||u.serverVal.username&&r.a.createElement("p",null,"This username is already used")),r.a.createElement("div",{className:te.a["form-field"]},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{name:"password",type:"password",ref:m({required:"You must specify a password",minLength:{value:8,message:"Password must have at least 8 characters"}}),defaultValue:c,onChange:function(e){return a(e)},placeholder:"example: qwerty12345"}),p.password&&r.a.createElement("p",null,p.password.message)),r.a.createElement("div",{className:te.a["form-field"]},r.a.createElement("label",null,"Repeat password"),r.a.createElement("input",{name:"password_repeat",type:"password",ref:m({validate:function(e){return e===f.current||"The passwords do not match"}})}),p.password_repeat&&r.a.createElement("p",null,p.password_repeat.message)),r.a.createElement("button",{type:"submit",onClick:d(u.signUpHandler)},"Sign Up")))},ne=a(29),re=a.n(ne),le=a(30),oe=a.n(le);var ie=function(e){var t=e.path;return r.a.createElement("li",{className:oe.a["history-list__item"]},r.a.createElement("div",{className:oe.a.img__box,style:{backgroundImage:"url(".concat(t,")"),backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}},r.a.createElement("img",{src:t,alt:"request-image",style:{visibility:"hidden",width:"100%"}})))},ce=function(){var e=Object(u.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z.a.get("/api/history/"+t.id);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var ue=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],l=t[1],o=Object(n.useContext)(j);return Object(n.useEffect)((function(){console.log(o.loggedUser),o.loadingState.setLoading(!0),ce(o.loggedUser).then((function(e){l(Object(H.a)(e)),o.loadingState.setLoading(!1)}))}),[]),r.a.createElement("div",{className:re.a.History},r.a.createElement("h1",null,"Your request History"),o.loadingState.loading&&r.a.createElement(T,null),!o.loadingState.loading&&r.a.createElement("ul",{className:re.a["history-list"]},a.map((function(e,t){return r.a.createElement(ie,{key:t,path:e})}))))};a(83);var se=function(e){var t=e.error,a=e.animation,n=t.header,l=t.text;return r.a.createElement("div",{className:"ErrorModal",style:{animation:"".concat(a||null)}},r.a.createElement("h3",null,n),r.a.createElement("p",null,l))};a(84);var me=function(e){var t=e.success,a=e.animation,n=t.header,l=t.text;return r.a.createElement("div",{className:"SuccessModal",style:{animation:"".concat(a||null)}},r.a.createElement("h3",null,n),r.a.createElement("p",null,l))},de=function(){var e=Object(u.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z.a.post("/api/signup",t);case 3:return a=e.sent,e.abrupt("return",a.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",Promise.reject(e.t0));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),pe=function(){var e=Object(u.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z.a.post("/api/signin",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var ge=Object(p.f)((function(e){var t=Object(n.useState)({name:"",username:"",email:"",password:""}),a=Object(d.a)(t,2),l=a[0],o=a[1],i=Object(n.useState)({username:"",password:""}),b=Object(d.a)(i,2),E=b[0],h=b[1],v=Object(n.useState)({email:!1,username:!1}),_=Object(d.a)(v,2),y=_[0],S=_[1],w=Object(n.useState)(null),O=Object(d.a)(w,2),x=O[0],N=O[1],k=Object(n.useState)(null),H=Object(d.a)(k,2),I=H[0],U=H[1],F=Object(n.useState)(null),R=Object(d.a)(F,2),L=R[0],A=R[1],P=Object(n.useState)(""),q=Object(d.a)(P,2),M=q[0],T=q[1],Y=Object(n.useState)(!1),D=Object(d.a)(Y,2),V=D[0],J=D[1];Object(n.useEffect)((function(){return window.localStorage.getItem("loggedFaceRecogAppUser")?function(){var e=JSON.parse(window.localStorage.getItem("loggedFaceRecogAppUser"));N({name:e.name,username:e.username,token:e.token,id:e.id})}():null}),[]);var z=function(e){switch(e.target.parentNode.parentNode.id){case"signUp":o(Object(m.a)({},l,Object(s.a)({},e.target.name,e.target.value)));break;case"signIn":h(Object(m.a)({},E,Object(s.a)({},e.target.name,e.target.value)))}},G=function(){var t=Object(u.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return S({email:!1,username:!1}),t.prev=1,J(!0),t.next=5,de(l);case 5:o({name:"",username:"",email:"",password:""}),e.history.push("/"),J(!1),W("SUCCESS","Registration successfull","Sign in to be able to use face detection"),t.next=18;break;case 11:t.prev=11,t.t0=t.catch(1),console.log("kjlgkjg",t.t0.response.data.err),t.t0.response.data.err.errors.email&&S(Object(m.a)({},y,{email:!0})),t.t0.response.data.err.errors.username&&S(Object(m.a)({},y,{username:!0})),W("ERROR","Registration error","Error while data validation"),J(!1);case 18:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(){return t.apply(this,arguments)}}(),Z=function(){var t=Object(u.a)(c.a.mark((function t(a){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,pe(E);case 4:n=t.sent,console.log(n),N(n),h({username:"",password:""}),window.localStorage.setItem("loggedFaceRecogAppUser",JSON.stringify(n)),e.history.push("/"),W("SUCCESS","You are now logged in",""),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(1),W("ERROR","Wrong Login Data","Either your username or your password were wrong, try another ones"),h({username:"",password:""});case 17:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e){return t.apply(this,arguments)}}(),W=function(e,t,a){switch(e){case"SUCCESS":A(null),A({header:t,text:a});break;case"ERROR":U(null),U({header:t,text:a})}T("fadeIn .7s forwards ease"),setTimeout((function(){T("fadeOut 0.7s forwards ease"),setTimeout((function(){U(null),A(null)}),700)}),3e3)};return r.a.createElement(j.Provider,{value:{loggedUser:x,signInHandler:Z,signUpHandler:G,signOutHandler:function(){N(null),localStorage.removeItem("loggedFaceRecogAppUser")},loadingState:{loading:V,setLoading:J},serverVal:{email:y.email,username:y.username}}},r.a.createElement("div",{className:"App"},I?r.a.createElement(se,{error:I,animation:M}):null,L?r.a.createElement(me,{success:L,animation:M}):null,r.a.createElement(C,null),r.a.createElement(g.a,null,r.a.createElement(f.a,{key:e.location.key,timeout:{enter:300,exit:300},classNames:"fade"},r.a.createElement(p.c,{location:e.location},r.a.createElement(p.a,{path:"/",exact:!0,render:function(){return r.a.createElement(B,{error:I,setModalHandler:W})}}),r.a.createElement(p.a,{path:"/sign-in",render:function(){return r.a.createElement(Q,{loginData:E,inputChangeHandler:z})}}),r.a.createElement(p.a,{path:"/sign-up",render:function(){return r.a.createElement(ae,{newUser:l,inputChangeHandler:z})}}),r.a.createElement(p.a,{path:"/history",render:function(){return r.a.createElement(ue,null)}}))))))}));o.a.render(r.a.createElement(O.a,null,r.a.createElement(ge,null)),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.7141099a.chunk.js.map