(this.webpackJsonpgtwitter=this.webpackJsonpgtwitter||[]).push([[0],{39:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),r=n(31),s=n.n(r),i=(n(39),n(9)),o=n(21),u=n(6),l=n(10),j=n.n(l),b=n(17),d=n(12),p=n(22),f=n(24);n(45),n(55),n(54);f.a.initializeApp({apiKey:"AIzaSyC354fTkn4FzouHEodJK1Wp8uv2cduykrw",authDomain:"gwitter-e2519.firebaseapp.com",projectId:"gwitter-e2519",storageBucket:"gwitter-e2519.appspot.com",messagingSenderId:"656420529889",appId:"1:656420529889:web:15409148998d0d0058f9a0"});var h=f.a,O=f.a.auth(),m=f.a.firestore(),x=f.a.storage(),g=n(1),v=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(i.a)(r,2),o=s[0],u=s[1],l=Object(a.useState)(""),d=Object(i.a)(l,2),p=d[0],f=d[1],h=Object(a.useState)(!0),m=Object(i.a)(h,2),x=m[0],v=m[1],y=function(e){var t=e.target,n=t.name,a=t.value;"email"===n?c(a):"password"===n&&u(a)},w=function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!0!==x){e.next=8;break}return e.next=5,O.createUserWithEmailAndPassword(n,o);case 5:e.sent,e.next=11;break;case 8:return e.next=10,O.signInWithEmailAndPassword(n,o);case 10:e.sent;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),f(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("form",{onSubmit:w,className:"container",children:[Object(g.jsx)("input",{className:"authInput",name:"email",type:"email",placeholder:"Email",required:!0,value:n,onChange:y}),Object(g.jsx)("input",{className:"authInput",name:"password",type:"password",placeholder:"Password",required:!0,value:o,onChange:y}),Object(g.jsx)("input",{className:"authInput authSubmit",type:"submit",value:x?"Create Account":"Log In"}),p&&Object(g.jsx)("span",{className:"authError",children:p})]}),Object(g.jsx)("span",{onClick:function(){return v((function(e){return!e}))},className:"authSwitch",children:x?"Sign In":"Create Account"})]})},y=function(){var e=function(){var e=Object(b.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?a=new h.auth.GoogleAuthProvider:"github"===n&&(a=new h.auth.GithubAuthProvider),e.next=4,O.signInWithPopup(a);case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)("div",{className:"authContainer",children:[Object(g.jsx)(d.a,{icon:p.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),Object(g.jsx)(v,{}),Object(g.jsxs)("div",{className:"authBtns",children:[Object(g.jsxs)("button",{onClick:e,name:"google",className:"authBtns",children:["Continue with Google ",Object(g.jsx)(d.a,{icon:p.b})]}),Object(g.jsxs)("button",{onClick:e,name:"github",className:"authBtns",children:["Continue with Github ",Object(g.jsx)(d.a,{icon:p.a})]})]})]})},w=n(34),N=n(23),k=function(e){var t=e.gweetObj,n=e.isOwner,c=Object(a.useState)(!1),r=Object(i.a)(c,2),s=r[0],o=r[1],u=Object(a.useState)(t.text),l=Object(i.a)(u,2),p=l[0],f=l[1],h=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("\uc0ad\uc81c \ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")){e.next=7;break}return e.next=4,m.doc("gweet/".concat(t.id)).delete();case 4:if(""===t.attachmentUrl){e.next=7;break}return e.next=7,x.refFromURL(t.attachmentUrl).delete();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){o((function(e){return!e}))},v=function(){var e=Object(b.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,m.doc("gweet/".concat(t.id)).update({text:p});case 3:o(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsx)("div",{className:"nweet",children:s?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("form",{onSubmit:v,className:"container nweetEdit",children:[Object(g.jsx)("input",{value:p,onChange:function(e){var t=e.target.value;f(t)},required:!0,className:"formInput"}),Object(g.jsx)("input",{type:"submit",value:"Update Gweet",className:"formBtn"})]}),Object(g.jsx)("button",{onClick:O,className:"formBtn cancelBtn",children:"Cancel"})]}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("h4",{children:t.text}),t.attachmentUrl&&Object(g.jsx)("img",{src:t.attachmentUrl,width:"50px",height:"50px"}),n&&Object(g.jsxs)("div",{className:"nweet__actions",children:[Object(g.jsx)("span",{onClick:h,children:Object(g.jsx)(d.a,{icon:N.d})}),Object(g.jsx)("span",{onClick:O,children:Object(g.jsx)(d.a,{icon:N.a})})]})]})})},S=n(57),C=function(e){var t=e.userObj,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],s=c[1],o=Object(a.useState)(""),u=Object(i.a)(o,2),l=u[0],p=u[1],f=function(){var e=Object(b.a)(j.a.mark((function e(n){var a,c,i,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("submit"),""!==r){e.next=3;break}return e.abrupt("return");case 3:if(n.preventDefault(),a="",""===l){e.next=14;break}return c=x.ref().child("".concat(t.uid,"/").concat(Object(S.a)())),e.next=9,c.putString(l,"data_url");case 9:return i=e.sent,e.next=12,i.ref.getDownloadURL();case 12:a=e.sent,console.log("submit1");case 14:return o={text:r,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:a},e.next=17,m.collection("gweet").add(o);case 17:console.log("submit2"),s(""),p("");case 20:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)("form",{onSubmit:f,className:"factoryForm",children:[Object(g.jsxs)("div",{className:"factoryInput__container",children:[Object(g.jsx)("input",{className:"factoryInput__input",value:r,onChange:function(e){var t=e.target.value;s(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),Object(g.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})]}),Object(g.jsxs)("label",{htmlFor:"attach-file",className:"factoryInput__label",children:[Object(g.jsx)("span",{children:"Add photos"}),Object(g.jsx)(d.a,{icon:N.b})]}),Object(g.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;p(t)},Boolean(t)&&n.readAsDataURL(t)},style:{opacity:0}}),l&&Object(g.jsxs)("div",{className:"factoryForm__attachment",children:[Object(g.jsx)("img",{src:l,style:{backgroundImage:l}}),Object(g.jsxs)("div",{className:"factoryForm__clear",onClick:function(){return p("")},children:[Object(g.jsx)("span",{children:"Remove"}),Object(g.jsx)(d.a,{icon:N.c})]})]})]})},I=function(e){var t=e.userObj,n=Object(a.useState)([]),c=Object(i.a)(n,2),r=c[0],s=c[1];return Object(a.useEffect)((function(){m.collection("gweet").orderBy("createdAt","desc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(w.a)({id:e.id},e.data())}));s(t)}))}),[]),Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)(C,{userObj:t}),Object(g.jsx)("div",{style:{marginTop:30},children:r.map((function(e){return Object(g.jsx)(k,{gweetObj:e,isOwner:e.createId===t.uid},e.id)}))})]})},A=n(33),F=function(e){var t=e.userObj;return Object(g.jsx)("nav",{children:Object(g.jsxs)("ul",{style:{display:"flex",justifyContent:"center",marginTop:50},children:[Object(g.jsx)("li",{children:Object(g.jsx)(o.b,{to:"/",style:{marginRight:10},children:Object(g.jsx)(d.a,{icon:p.c,color:"04AAFF",size:"2x"})})}),Object(g.jsx)("li",{children:Object(g.jsxs)(o.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(g.jsx)(d.a,{icon:A.a,color:"#04AAFF",size:"2x"}),Object(g.jsx)("span",{style:{margintop:10},children:t.displayName?"".concat(t.displayName,"\uc758 Profile"):"Profile"})]})})]})})},U=function(e){var t=e.userObj,n=e.refreshUser,c=Object(a.useState)(t.displayName),r=Object(i.a)(c,2),s=r[0],o=r[1],l=Object(u.f)(),d=function(){var e=Object(b.a)(j.a.mark((function e(a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),t.displayName===s){e.next=5;break}return e.next=4,t.updateProfile({displayName:s});case 4:n();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)("div",{className:"container",children:[Object(g.jsxs)("form",{onSubmit:d,className:"profileForm",children:[Object(g.jsx)("input",{onChange:function(e){var t=e.target.value;o(t)},type:"text",autoFocus:!0,placeholder:"Display name",value:s,className:"formInput"}),Object(g.jsx)("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})]}),Object(g.jsx)("span",{className:"formBtn cancelBtn logOut",onClick:function(){O.signOut(),l.push("/")},children:"Log Out"})]})},B=function(e){var t=e.isLoggedIn,n=e.userObj,a=e.refreshUser;return Object(g.jsxs)(o.a,{children:[t&&Object(g.jsx)(F,{userObj:n}),Object(g.jsx)(u.c,{children:Object(g.jsx)(g.Fragment,{children:t?Object(g.jsxs)("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:[Object(g.jsx)(u.a,{exact:!0,path:"/",children:Object(g.jsx)(I,{userObj:n})}),Object(g.jsx)(u.a,{exact:!0,path:"/profile",children:Object(g.jsx)(U,{userObj:n,refreshUser:a})})]}):Object(g.jsx)(u.a,{exact:!0,path:"/",children:Object(g.jsx)(y,{})})})})]})};var _=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(null),s=Object(i.a)(r,2),o=s[0],u=s[1];return console.log(o,"App"),Object(a.useEffect)((function(){O.onAuthStateChanged((function(e){u(!!e&&{uid:e.uid,displayName:e.displayName,updateProfile:function(t){return e.updateProfile(t)}}),c(!0)}))}),[]),Object(g.jsx)(g.Fragment,{children:n?Object(g.jsx)(B,{isLoggedIn:Boolean(o),userObj:o,refreshUser:function(){var e=O.currentUser;u({uid:e.uid,displayName:e.displayName,updateProfile:function(t){return e.updateProfile(t)}})}}):"initializing.."})};s.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(_,{})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.1bbddf13.chunk.js.map