(this["webpackJsonpaegis-of-the-renren"]=this["webpackJsonpaegis-of-the-renren"]||[]).push([[0],{132:function(e,t,n){},133:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(11),o=n.n(c),i=n(203),l=n(64),s=n(37),j=n(204),u=n(7),b=n(200),O=n(201),h=n(177),p=n(208),f=n(108),d=n(202),m=n(8),g=n(175),x=Object.freeze({maxAge:2592e3,path:"/",secure:!0});function v(e){var t,n=Object(g.a)([e]),a=Object(m.a)(n,3),r=a[0],c=a[1],o=a[2];return{cookie:null!==(t=r[e])&&void 0!==t?t:"",setCookie:function(t,n){c(e,t,Object(u.a)(Object(u.a)({},x),n))},removeCookie:function(){o(e)}}}function k(){var e=v("language");return{appLanguageCookie:e.cookie,setAppLanguageCookie:e.setCookie,removeAppLanguageCookie:e.removeCookie}}function y(){var e=v("theme_mode");return{appThemeModeCookie:e.cookie,setAppThemeModeCookie:e.setCookie,removeAppThemeModeCookie:e.removeCookie}}var N=Object.freeze({cn:"cn",eng:"eng"}),C=N.cn;function T(){var e=k(),t=e.appLanguageCookie,n=e.setAppLanguageCookie,r=function(e){if(!e)return C;var t=e.toLowerCase();return Object.keys(N).includes(t)?t:C}(t);return Object(a.useEffect)((function(){r!==t&&n(r)}),[r,t,n]),{appLanguage:r,setAppLanguage:n}}function z(e){var t=e.cn,n=e.eng,a=T().appLanguage;switch(a){case N.cn:return t;case N.eng:return n;default:throw new Error("Unsupported language: ".concat(a,"!"))}}var L=n(25),E=n(14),w=Object.freeze({read_user_blog:"read_user_blog"}),A="access_token",F="expires_in",M="scope";function G(){var e=Object(E.e)(),t=function(e,t){var n=new URL(e,"https://obwang49.github.io");return n.search=t,n.href}(e.pathname,e.search),n=Object.values(w).join(" "),a=new URL("/oauth/authorize","https://graph.renren.com"),r=a.searchParams;return r.append("client_id","c3810b73b4b14ba594967c670f87ece6"),r.append("display","page"),r.append("redirect_uri",t),r.append("response_type","token"),r.append("scope",n),a.href}function P(){var e=Object(E.d)(),t=Object(E.e)(),n=I().setAccessToken;Object(a.useEffect)((function(){var a=t.hash;if(a){var r=function(e){var t,n,a,r,c=new URLSearchParams(e.slice(1)),o=null!==(t=c.get(A))&&void 0!==t?t:"",i=null!==(n=c.get(F))&&void 0!==n?n:"",l=parseInt(i),s=isNaN(l)?0:l,j=(null!==(a=c.get(M))&&void 0!==a?a:"").split("+").filter(Boolean);return r={},Object(L.a)(r,A,o),Object(L.a)(r,F,s),Object(L.a)(r,M,j),r}(a);n(r),e.replace(Object(u.a)(Object(u.a)({},t),{},{hash:""}))}}),[t,n,e])}function I(){var e=function(){var e=v("access_token");return{appAccessTokenCookie:e.cookie,setAppAccessTokenCookie:e.setCookie,removeAppAccessTokenCookie:e.removeCookie}}(),t=e.appAccessTokenCookie,n=e.setAppAccessTokenCookie,a=e.removeAppAccessTokenCookie;return{accessToken:t,setAccessToken:function(e){var t=e.access_token,r=e.expires_in;t?n(t,{maxAge:r}):a()},removeAccessToken:a}}function R(){var e=function(e){var t,n=Object(E.d)(),a=Object(E.e)(),r=a.search,c=new URLSearchParams(r);return{param:null!==(t=c.get(e))&&void 0!==t?t:"",setParam:function(t){t?c.set(e,t):c.delete(e),n.replace(Object(u.a)(Object(u.a)({},a),{},{search:c.toString()}))}}}("path");return{appPathURLSearchParam:e.param,setAppPathURLSearchParam:e.setParam}}var U=Object.freeze({blog:"blog",faq:"faq",home:"home",profile:"profile"}),B=U.home,D=U.profile,Y=Object.freeze({noAccessToken:[U.faq,U.home],withAccessToken:[U.blog,U.faq,U.profile]});function S(){var e=R(),t=e.appPathURLSearchParam,n=e.setAppPathURLSearchParam;return{appPath:function(e,t){var n=t?D:B;if(!e)return n;var a=e.toLowerCase();return(t?Y.withAccessToken:Y.noAccessToken).includes(a)?a:n}(t,I().accessToken),setAppPath:n}}function Z(e){var t=e.blog,n=e.faq,a=e.home,r=e.profile,c=S().appPath;switch(c){case U.blog:return t;case U.faq:return n;case U.home:return a;case U.profile:return r;default:throw new Error("Unsupported path: ".concat(c,"!"))}}var H=Object(s.b)({key:"AppBlogCount",default:0});function X(){var e=Object(s.c)(H),t=Object(m.a)(e,2);return{blogCount:t[0],setBlogCount:t[1]}}function W(e,t,n){var a=Object(u.a)(Object(u.a)({},null!==n&&void 0!==n?n:{}),{},Object(L.a)({},"access_token",e));if(!Object.values(a).every(Boolean))return"";var r,c=new URL(t,"https://api.renren.com"),o=c.searchParams;return Object.entries(a).map((function(e){var t=Object(m.a)(e,2),n=t[0],a=t[1];return o.append(n,a)})),r=c.href,"".concat("https://api.allorigins.win/get?url=").concat(encodeURIComponent(r))}function V(e,t,n){var r=I().accessToken,c=Object(a.useState)(!1),o=Object(m.a)(c,2),i=o[0],l=o[1],s=Object(a.useState)(null),j=Object(m.a)(s,2),u=j[0],b=j[1],O=Object(a.useState)(null),h=Object(m.a)(O,2),p=h[0],f=h[1],d=W(r,e,n);return{load:function(){if(b(null),f(null),l(!0),console.log(d),!d)throw new Error("Invalid empty URL to ".concat(e));fetch(d,{method:t}).then((function(e){return e.json()})).then((function(e){var t=function(e){var t=e.contents,n=e.status.http_code;if(200!==n){return{data:null,error:{code:n}}}return{data:JSON.parse(t).response,error:null}}(e),n=t.data,a=t.error;b(n),f(a),l(!1)})).catch((function(e){f(e),l(!1)}))},isLoading:i,data:u,error:p}}var q=Object(s.b)({key:"AppSignInUserID",default:0}),Q=Object(s.b)({key:"AppSignInUserName",default:""});function J(){var e=Object(s.c)(q),t=Object(m.a)(e,2),n=t[0],a=t[1],r=Object(s.c)(Q),c=Object(m.a)(r,2);return{userID:n,setUserID:a,userName:c[0],setUserName:c[1]}}function K(){var e=J(),t=e.setUserID,n=e.setUserName;return{load:function(){t(0),n("")}}}function _(){var e=I().accessToken,t=function(){var e=V("/v2/user/login/get","GET"),t=e.load,n=e.isLoading,a=e.data,r=e.error;return{load:t,isLoading:n,userID:a?a.id:0,userName:a?a.name:"",error:r}}(),n=t.load,r=t.isLoading,c=t.userID,o=t.userName,i=t.error,l=J(),s=l.userID,j=l.setUserID,u=l.userName,b=l.setUserName,O=K().load;return Object(a.useEffect)((function(){!e||r||s||u||i||(O(),n())}),[e,r,s,u,i,O,n]),Object(a.useEffect)((function(){c&&o&&(j(c),b(o))}),[c,o,j,b]),{isLoading:r,error:i}}function $(){var e=X().setBlogCount;return{load:function(){e(0)}}}function ee(){var e=I().accessToken,t=J().userID,n=function(e){var t=V("/v2/profile/get","GET",Object(L.a)({},"userId",e)),n=t.load,a=t.isLoading,r=t.data,c=t.error;return{load:n,isLoading:a,blogCount:r?r.blogCount:0,error:c}}(t),r=n.load,c=n.isLoading,o=n.blogCount,i=n.error,l=X(),s=l.blogCount,j=l.setBlogCount,u=$().load;return Object(a.useEffect)((function(){!e||!t||c||s||i||(u(),r())}),[e,t,c,s,i,u,r]),Object(a.useEffect)((function(){o&&j(o)}),[o,j]),{isLoading:c,error:i}}var te=n(176),ne=Object.freeze({dark:"dark",light:"light"}),ae=ne.light;function re(){var e=Object(te.a)("(prefers-color-scheme: dark)"),t=y(),n=t.appThemeModeCookie,r=t.setAppThemeModeCookie,c=function(e,t){if(!e)return t?ne.dark:ne.light;var n=e.toLowerCase();return Object.keys(ne).includes(n)?n:ae}(n,e);return Object(a.useEffect)((function(){c!==n&&r(c)}),[c,n,r]),{appThemeMode:c,setAppThemeMode:r}}var ce=n(137),oe=n(205),ie=n(178),le=n(31),se=n(2),je=Object.freeze({MozUserSelect:"none",msUserSelect:"none",UserDrag:"none",UserSelect:"none",WebkitUserDrag:"none",WebkitUserSelect:"none"}),ue=Object(h.a)((function(e){return{box:je}}));function be(e){var t=e.children,n=ue();return Object(se.jsx)(oe.a,{className:n.box,children:t})}var Oe=Object.freeze({cn:"\u52aa\u529b\u52a0\u8f7d\u4e2d...",eng:"Working Hard Loading..."}),he=Object(h.a)((function(e){return{backdrop:{zIndex:e.zIndex.tooltip+1},box:{alignItems:"center",display:"flex",flexDirection:"column"},backdropText:{marginTop:e.spacing(1)}}}));function pe(e){var t=e.isLoading,n=he(),a=z(Oe);return Object(se.jsx)(ce.a,{className:n.backdrop,open:t,children:Object(se.jsx)(be,{children:Object(se.jsxs)(oe.a,{className:n.box,children:[Object(se.jsx)(ie.a,{color:"inherit"}),Object(se.jsx)(le.a,{className:n.backdropText,children:a})]})})})}function fe(e){return e.join(" ")}var de=n.p+"static/media/cover.d932cb61.png",me=Object(h.a)((function(e){return{cover:{height:"100%",position:"absolute",top:"0",width:"100%"},image:{backgroundImage:"url(".concat(de,")"),backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"},shade:{backgroundColor:"".concat(Wn,"44")}}}));function ge(){var e=me();return Object(se.jsxs)(se.Fragment,{children:[Object(se.jsx)(oe.a,{className:fe([e.cover,e.image])}),Object(se.jsx)(oe.a,{className:fe([e.cover,e.shade])})]})}var xe=n(109),ve=Object.freeze({cn:"\u671d\u82b1\u5915\u62fe",eng:"Ready For"}),ke=Object.freeze({cn:"\u4e00\u5982\u5e74\u5c11\u6a21\u6837",eng:"Flashbacks?"}),ye=Object(xe.a)(le.a)({color:"white",fontSize:"min( 20vmin, 15vw )",fontWeight:"bold"}),Ne=Object(h.a)((function(e){return{box:{marginLeft:e.spacing(2),marginTop:e.spacing(2)},divider:{height:e.spacing(2)}}}));function Ce(){var e=Ne(),t=z(ve),n=z(ke);return Object(se.jsxs)(oe.a,{className:e.box,children:[Object(se.jsx)(ye,{noWrap:!0,variant:"h1",children:t}),Object(se.jsx)(oe.a,{className:e.divider}),Object(se.jsx)(ye,{noWrap:!0,variant:"h1",children:n})]})}var Te=n(179),ze=n(98),Le=n.n(ze),Ee=Object.freeze({cn:"\u5373\u523b\u5f00\u542f",eng:"Enter Now"}),we=Object(h.a)((function(e){return{button:{borderRadius:50,height:e.spacing(6)}}}));function Ae(e){var t=e.onClick,n=we(),a=z(Ee);return Object(se.jsx)(Te.a,{className:n.button,color:"secondary",endIcon:Object(se.jsx)(Le.a,{style:{fontSize:"2rem"}}),onClick:t,variant:"contained",children:Object(se.jsx)(le.a,{noWrap:!0,variant:"h4",children:a})})}var Fe=n(182),Me=n(187),Ge=n(185),Pe=n(186),Ie=n(184),Re=n(88),Ue=n(180),Be=Object(h.a)((function(e){return{button:{marginBottom:e.spacing(1)},img:Object(u.a)(Object(u.a)({},je),{},{height:e.spacing(4),width:"auto"})}}));function De(){var e=Be(),t=G();return Object(se.jsx)(Ue.a,{href:t,children:Object(se.jsx)(Re.a,{className:e.button,focusRipple:!0,children:Object(se.jsx)("img",{alt:"404",className:e.img,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPIAAAAwCAYAAAArSCcbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2tpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowQTgwMTE3NDA3MjA2ODExODA4M0FEQzYyRjJCM0E3NyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEQkZCNTIwODMzRDYxMUUzQkI3Nzk2M0IzMDQzODU2NiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEQkZCNTIwNzMzRDYxMUUzQkI3Nzk2M0IzMDQzODU2NiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4MGU5NGRhOC1jNzlhLTQxNzEtYThiNi1lMWY2ODlmYTMwMTYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTA0MDg4RjMxQjk3MTFFM0E5MjhFOThDQTI4QTZGM0UiLz4gPC9yZGY6RGVz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"})})})}var Ye=n(181),Se=n(206),Ze=n(213),He=Object.freeze({cn:["\u70b9\u51fb\u4e0b\u65b9\u6309\u94ae\u4f20\u9001\u81f3\u4eba\u4eba\u7f51\u5b98\u65b9\u767b\u5f55\u754c\u9762","\u767b\u9646\u4e2a\u4eba\u8d26\u53f7\u5e76\u786e\u8ba4\u76f8\u5173\u6388\u6743","\u6210\u529f\u540e\u5c06\u4f1a\u81ea\u52a8\u8df3\u8f6c\u56de\u672c\u9875\u9762"],eng:["Click on the button at the bottom that will open the official sign in page of renren.com","Sign in to your personal account and confirm the authorization request","Once authorized, you will be automatically redirected back to this page"]});function Xe(){var e=z(He);return Object(se.jsx)(Ze.a,{activeStep:0,alternativeLabel:!0,children:e.map((function(e,t){return Object(se.jsx)(Ye.a,{children:Object(se.jsx)(Se.a,{children:e})},t)}))})}var We=Object.freeze({cn:"\u767b\u9646\u4eba\u4eba\u8d26\u53f7",eng:"Sign In To RenRen Account"}),Ve=Object.freeze({cn:"\u8bf7\u4f9d\u7167\u4ee5\u4e0b\u6b65\u9aa4\u767b\u5f55\u60a8\u7684\u4eba\u4eba\u8d26\u53f7\u4ee5\u8bbf\u95ee\u4e2a\u4eba\u6570\u636e",eng:"Please follow the steps below to sign in to your renren.com account, in order to access your personal data."}),qe=Object(h.a)((function(e){return{actions:{justifyContent:"center"}}}));function Qe(e){var t=e.isOpen,n=e.onClose,a=qe(),r=z(We),c=z(Ve);return Object(se.jsx)(Fe.a,{onClose:n,open:t,children:Object(se.jsxs)(be,{children:[Object(se.jsx)(Ie.a,{children:r}),Object(se.jsxs)(Ge.a,{children:[Object(se.jsx)(Pe.a,{children:c}),Object(se.jsx)(Xe,{})]}),Object(se.jsx)(Me.a,{classes:{root:a.actions},children:Object(se.jsx)(De,{})})]})})}var Je=Object(h.a)((function(e){return{body:{position:"relative"},signInButton:{bottom:"calc( 25vh - 10vw )",display:"flex",left:"0",justifyContent:"center",position:"absolute",right:"0"}}}));function Ke(){var e=Je(),t=Object(a.useState)(!1),n=Object(m.a)(t,2),r=n[0],c=n[1],o=function(){c(!r)};return Object(se.jsxs)(be,{children:[Object(se.jsx)(ge,{}),Object(se.jsx)(oe.a,{className:e.body,children:Object(se.jsx)(Ce,{})}),Object(se.jsx)(oe.a,{className:e.signInButton,children:Object(se.jsx)(Ae,{onClick:o})}),Object(se.jsx)(Qe,{isOpen:r,onClose:o})]})}var _e=n(196),$e=n(197),et=n(192),tt=n(189),nt=n(207),at=n(188),rt=n(112),ct=n(209),ot=n(191),it=n(100),lt=n.n(it);function st(){return(st=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function jt(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var ut=a.createElement("style",{type:"text/css"},"\n\t.st0{fill:#D80027;}\n\t.st1{fill:#FFDA44;}\n"),bt=a.createElement("circle",{className:"st0",cx:207,cy:397,r:256}),Ot=a.createElement("g",null,a.createElement("polygon",{className:"st1",points:"91.1,296.8 113.2,364.8 184.7,364.8 126.9,406.9 149,474.9 91.1,432.9 33.2,474.9 55.4,406.9  -2.5,364.8 69,364.8  "}),a.createElement("polygon",{className:"st1",points:"254.5,537.5 237.6,516.7 212.6,526.4 227.1,503.9 210.2,483 236.1,489.9 250.7,467.4 252.1,494.2  278.1,501.1 253,510.7  "}),a.createElement("polygon",{className:"st1",points:"288.1,476.5 296.1,450.9 274.2,435.4 301,435 308.9,409.4 317.6,434.8 344.4,434.5 322.9,450.5  331.5,475.9 309.6,460.4  "}),a.createElement("polygon",{className:"st1",points:"333.4,328.9 321.6,353 340.8,371.7 314.3,367.9 302.5,391.9 297.9,365.5 271.3,361.7 295.1,349.2  290.5,322.7 309.7,341.4  "}),a.createElement("polygon",{className:"st1",points:"255.2,255.9 253.2,282.6 278.1,292.7 252,299.1 250.1,325.9 236,303.1 209.9,309.5 227.2,289  213,266.3 237.9,276.4  "}));function ht(e,t){var n=e.title,r=e.titleId,c=jt(e,["title","titleId"]);return a.createElement("svg",st({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"-49 141 512 512",style:{enableBackground:"new -49 141 512 512"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},c),n?a.createElement("title",{id:r},n):null,ut,bt,Ot)}var pt=a.forwardRef(ht);n.p;function ft(){return(ft=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function dt(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var mt=a.createElement("g",null),gt=a.createElement("g",null),xt=a.createElement("g",null),vt=a.createElement("g",null),kt=a.createElement("g",null),yt=a.createElement("g",null),Nt=a.createElement("g",null),Ct=a.createElement("g",null),Tt=a.createElement("g",null),zt=a.createElement("g",null),Lt=a.createElement("g",null),Et=a.createElement("g",null),wt=a.createElement("g",null),At=a.createElement("g",null),Ft=a.createElement("g",null);function Mt(e,t){var n=e.title,r=e.titleId,c=dt(e,["title","titleId"]);return a.createElement("svg",ft({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512",style:{enableBackground:"new 0 0 512 512"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},c),n?a.createElement("title",{id:r},n):null,a.createElement("circle",{style:{fill:"#F0F0F0"},cx:256,cy:256,r:256}),a.createElement("g",null,a.createElement("path",{style:{fill:"#D80027"},d:"M244.87,256H512c0-23.106-3.08-45.49-8.819-66.783H244.87V256z"}),a.createElement("path",{style:{fill:"#D80027"},d:"M244.87,122.435h229.556c-15.671-25.572-35.708-48.175-59.07-66.783H244.87V122.435z"}),a.createElement("path",{style:{fill:"#D80027"},d:"M256,512c60.249,0,115.626-20.824,159.356-55.652H96.644C140.374,491.176,195.751,512,256,512z"}),a.createElement("path",{style:{fill:"#D80027"},d:"M37.574,389.565h436.852c12.581-20.529,22.338-42.969,28.755-66.783H8.819 C15.236,346.596,24.993,369.036,37.574,389.565z"})),a.createElement("path",{style:{fill:"#0052B4"},d:"M118.584,39.978h23.329l-21.7,15.765l8.289,25.509l-21.699-15.765L85.104,81.252l7.16-22.037 C73.158,75.13,56.412,93.776,42.612,114.552h7.475l-13.813,10.035c-2.152,3.59-4.216,7.237-6.194,10.938l6.596,20.301l-12.306-8.941 c-3.059,6.481-5.857,13.108-8.372,19.873l7.267,22.368h26.822l-21.7,15.765l8.289,25.509l-21.699-15.765l-12.998,9.444 C0.678,234.537,0,245.189,0,256h256c0-141.384,0-158.052,0-256C205.428,0,158.285,14.67,118.584,39.978z M128.502,230.4 l-21.699-15.765L85.104,230.4l8.289-25.509l-21.7-15.765h26.822l8.288-25.509l8.288,25.509h26.822l-21.7,15.765L128.502,230.4z  M120.213,130.317l8.289,25.509l-21.699-15.765l-21.699,15.765l8.289-25.509l-21.7-15.765h26.822l8.288-25.509l8.288,25.509h26.822 L120.213,130.317z M220.328,230.4l-21.699-15.765L176.93,230.4l8.289-25.509l-21.7-15.765h26.822l8.288-25.509l8.288,25.509h26.822 l-21.7,15.765L220.328,230.4z M212.039,130.317l8.289,25.509l-21.699-15.765l-21.699,15.765l8.289-25.509l-21.7-15.765h26.822 l8.288-25.509l8.288,25.509h26.822L212.039,130.317z M212.039,55.743l8.289,25.509l-21.699-15.765L176.93,81.252l8.289-25.509 l-21.7-15.765h26.822l8.288-25.509l8.288,25.509h26.822L212.039,55.743z"}),mt,gt,xt,vt,kt,yt,Nt,Ct,Tt,zt,Lt,Et,wt,At,Ft)}var Gt=a.forwardRef(Mt),Pt=(n.p,Object.freeze({cn:"\u66f4\u6539\u8bed\u8a00",eng:"Change Language"})),It=Object.freeze({cn:{fontFamily:"ZCOOL KuaiLe",icon:Object(se.jsx)(pt,{}),text:"\u7b80\u4f53\u4e2d\u6587",value:N.cn},eng:{fontFamily:"Carter One",icon:Object(se.jsx)(Gt,{}),text:"English",value:N.eng}}),Rt=Object(h.a)((function(e){return{menu:{marginTop:e.spacing(1)}}}));function Ut(){var e=Rt(),t=T().setAppLanguage,n=Object(a.useState)(null),r=Object(m.a)(n,2),c=r[0],o=r[1],i=function(){o(null)},l=z(Pt);return Object(se.jsxs)(se.Fragment,{children:[Object(se.jsx)(ct.a,{arrow:!0,placement:"bottom",title:l,TransitionComponent:ot.a,children:Object(se.jsx)(et.a,{color:"inherit",onClick:function(e){o(e.currentTarget)},children:Object(se.jsx)(lt.a,{})})}),Object(se.jsx)(nt.a,{anchorEl:c,anchorOrigin:{vertical:"bottom",horizontal:"right"},className:e.menu,getContentAnchorEl:null,keepMounted:!0,onClose:i,open:Boolean(c),transformOrigin:{vertical:"top",horizontal:"right"},children:Object.values(It).map((function(e){return function(e,t,n){var a=e.icon,r=e.fontFamily,c=e.text,o=e.value,i=Object(xe.a)(le.a)({fontFamily:r});return Object(se.jsxs)(at.a,{onClick:function(){t(o),n()},children:[Object(se.jsx)(tt.a,{children:Object(se.jsxs)(rt.a,{children:[a,">"]})}),Object(se.jsx)(i,{noWrap:!0,variant:"h6",children:c})]},o)}(e,t,i)}))})]})}var Bt=n(195),Dt=n(210),Yt=n(104),St=n.n(Yt),Zt=n(138),Ht=n(194),Xt=n(101),Wt=n.n(Xt),Vt=Object.freeze({cn:"\u767b\u51fa",eng:"Log Out"}),qt=Object(h.a)((function(e){return{listItem:Object(u.a)({},e.mixins.toolbar)}}));function Qt(e){var t=e.onClose,n=qt(),a=z(Vt);return Object(se.jsxs)(Zt.a,{button:!0,className:n.toolbar,onClick:function(){t()},children:[Object(se.jsx)(tt.a,{children:Object(se.jsx)(Wt.a,{})}),Object(se.jsx)(Ht.a,{primary:a})]})}var Jt=n(193),Kt=n(51),_t=n.n(Kt),$t=n(73),en=n.n($t),tn=n(102),nn=n.n(tn);function an(e){var t=e.icon,n=e.onClose,a=e.targetPage,r=z(e.text),c=S().setAppPath;return Object(se.jsxs)(Zt.a,{button:!0,onClick:function(){c(a),n()},children:[Object(se.jsx)(tt.a,{children:t}),Object(se.jsx)(Ht.a,{primary:r})]})}var rn=Object.freeze({profile:{icon:Object(se.jsx)(_t.a,{}),targetPage:U.profile,text:{cn:"\u4e2a\u4eba\u8d44\u6599",eng:"Profile"}},blog:{icon:Object(se.jsx)(en.a,{}),targetPage:U.blog,text:{cn:"\u65e5\u5fd7",eng:"Blog"}},faq:{icon:Object(se.jsx)(nn.a,{}),targetPage:U.faq,text:{cn:"\u5e38\u89c1\u95ee\u9898",eng:"FAQ"}}});function cn(e){var t=e.onClose;return Object(se.jsx)(Jt.a,{children:Object.values(rn).map((function(e){var n=e.icon,a=e.targetPage,r=e.text;return Object(se.jsx)(an,{icon:n,onClose:t,targetPage:a,text:r},a)}))})}var on=n(103),ln=n.n(on),sn=Object.freeze({cn:"\u767b\u5f55",eng:"Sign In"}),jn=Object(h.a)((function(e){return{listItem:Object(u.a)({},e.mixins.toolbar)}}));function un(e){var t=e.onClose,n=jn(),r=z(sn),c=Object(a.useState)(!1),o=Object(m.a)(c,2),i=o[0],l=o[1],s=function(){l(!i)};return Object(se.jsxs)(se.Fragment,{children:[Object(se.jsxs)(Zt.a,{button:!0,className:n.toolbar,onClick:function(){s(),t()},children:[Object(se.jsx)(tt.a,{children:Object(se.jsx)(ln.a,{})}),Object(se.jsx)(Ht.a,{primary:r})]}),Object(se.jsx)(Qe,{isOpen:i,onClose:s})]})}var bn=Object.freeze({cn:"\u6253\u5f00\u83dc\u5355\u680f",eng:"Open Menu"}),On=Object(h.a)((function(e){return{drawer:{paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},toolbar:Object(u.a)({},e.mixins.toolbar)}}));function hn(){var e=On(),t=S().appPath===U.home,n=z(bn),r=Object(a.useState)(!1),c=Object(m.a)(r,2),o=c[0],i=c[1],l=function(){i(!o)};return Object(se.jsxs)(se.Fragment,{children:[Object(se.jsx)(ct.a,{arrow:!0,placement:"bottom",title:n,TransitionComponent:ot.a,children:Object(se.jsx)(et.a,{color:"inherit",onClick:l,children:Object(se.jsx)(St.a,{})})}),Object(se.jsx)(Dt.a,{anchor:"right",className:e.drawer,onClose:l,open:o,children:Object(se.jsxs)(be,{children:[t?Object(se.jsx)(un,{onClose:l}):Object(se.jsx)(Qt,{onClose:l}),Object(se.jsx)(Bt.a,{}),Object(se.jsx)(cn,{onClose:l})]})})]})}var pn=n(106),fn=n.n(pn),dn=n(105),mn=n.n(dn),gn=Object.freeze({cn:"\u5728\u4eae\u8272\u548c\u6697\u8272\u4e3b\u9898\u95f4\u5207\u6362",eng:"Toggle light/dark theme"}),xn=Object.freeze({dark:Object(se.jsx)(mn.a,{}),light:Object(se.jsx)(fn.a,{})});function vn(){var e=z(gn),t=function(e){var t=e.light,n=e.dark,a=re().appThemeMode;switch(a){case ne.light:return t;case ne.dark:return n;default:throw new Error("Unsupported theme mode: ".concat(a,"!"))}}(xn),n=re(),a=n.appThemeMode,r=n.setAppThemeMode;return Object(se.jsx)(ct.a,{arrow:!0,placement:"bottom",title:e,TransitionComponent:ot.a,children:Object(se.jsx)(et.a,{color:"inherit",onClick:function(){switch(a){case ne.light:return void r(ne.dark);case ne.dark:return void r(ne.light);default:return}},children:t})})}var kn=n(211),yn=n.p+"static/media/logo.afd802fa.jpg",Nn=Object(h.a)((function(e){return{img:je}}));function Cn(){var e=Nn();return Object(se.jsx)(kn.a,{classes:{img:e.img},src:yn,variant:"square"})}var Tn=Object.freeze({blog:{cn:"\u65e5\u5fd7\u4e4b\u5b88\u62a4",eng:"AEGIS OF THE BLOG"},faq:{cn:"\u5e38\u89c1\u95ee\u9898\u4e4b\u5b88\u62a4",eng:"AEGIS OF THE FAQ"},home:{cn:"\u4eba\u4eba\u4e4b\u5b88\u62a4",eng:"AEGIS OF THE RENREN"},profile:{cn:"\u4e2a\u4eba\u8d44\u6599\u4e4b\u5b88\u62a4",eng:"AEGIS OF THE PROFILE"}}),zn=Object(xe.a)(le.a)({fontWeight:"bold"});function Ln(){var e=z(Z(Tn));return Object(se.jsx)(zn,{variant:"h4",children:e})}var En=Object(h.a)((function(e){return{title:{flexGrow:1},item:{marginLeft:e.spacing(1)}}}));function wn(){var e=En();return Object(se.jsx)(_e.a,{position:"sticky",children:Object(se.jsx)(be,{children:Object(se.jsxs)($e.a,{children:[Object(se.jsx)(Cn,{}),Object(se.jsx)(oe.a,{className:fe([e.title,e.item]),children:Object(se.jsx)(Ln,{})}),Object(se.jsx)(oe.a,{className:e.item,children:Object(se.jsx)(Ut,{})}),Object(se.jsx)(oe.a,{className:e.item,children:Object(se.jsx)(vn,{})}),Object(se.jsx)(oe.a,{className:e.item,children:Object(se.jsx)(hn,{})})]})})})}var An=n(198),Fn=n(199),Mn=n(107),Gn=n.n(Mn),Pn=Object.freeze({cn:"\u5237\u65b0\u6570\u636e",eng:"Refresh data"});function In(e){var t=e.onClick,n=z(Pn);return Object(se.jsx)(ct.a,{arrow:!0,placement:"bottom",title:n,TransitionComponent:ot.a,children:Object(se.jsx)(et.a,{onClick:t,children:Object(se.jsx)(Gn.a,{})})})}var Rn=Object.freeze({cn:"\u53d1\u5e03\u7684\u65e5\u5fd7\u6570",eng:"Number of Blogs Posted"});function Un(){var e=z(Rn),t=X().blogCount,n=$().load;return Object(se.jsx)(An.a,{children:Object(se.jsx)(Fn.a,{avatar:Object(se.jsx)(kn.a,{children:Object(se.jsx)(en.a,{})}),action:Object(se.jsx)(In,{onClick:function(){n()}}),title:e,subheader:t})})}var Bn=Object.freeze({cn:"\u7528\u6237 ID",eng:"User ID"});function Dn(){var e=z(Bn),t=J().userID,n=K().load,a=$().load;return Object(se.jsx)(An.a,{children:Object(se.jsx)(Fn.a,{avatar:Object(se.jsx)(kn.a,{children:Object(se.jsx)(_t.a,{})}),action:Object(se.jsx)(In,{onClick:function(){n(),a()}}),title:e,subheader:t})})}var Yn=Object.freeze({cn:"\u7528\u6237\u540d",eng:"User Name"});function Sn(){var e=z(Yn),t=J().userName,n=K().load,a=$().load;return Object(se.jsx)(An.a,{children:Object(se.jsx)(Fn.a,{avatar:Object(se.jsx)(kn.a,{children:Object(se.jsx)(_t.a,{})}),action:Object(se.jsx)(In,{onClick:function(){n(),a()}}),title:e,subheader:t})})}var Zn=Object(h.a)((function(e){return{page:{padding:e.spacing(3)},card:{marginBottom:e.spacing(2),maxWidth:e.spacing(50)}}}));function Hn(){var e=Zn();return Object(se.jsxs)(oe.a,{className:e.page,children:[Object(se.jsx)(oe.a,{className:e.card,children:Object(se.jsx)(Dn,{})}),Object(se.jsx)(oe.a,{className:e.card,children:Object(se.jsx)(Sn,{})}),Object(se.jsx)(oe.a,{className:e.card,children:Object(se.jsx)(Un,{})})]})}var Xn=n(87),Wn=b.a[900],Vn=Object.freeze({palette:{primary:{main:Wn,dark:"#121212"},secondary:O.a,type:""},typography:{fontFamily:""}}),qn=Object.freeze({cn:"ZCOOL KuaiLe",eng:"Carter One"}),Qn=Object(h.a)((function(e){return{page:{minHeight:"100vh"}}}));function Jn(){var e=Qn(),t=z(qn),n=re().appThemeMode,r=Object(p.a)(Object(f.a)(Object(u.a)(Object(u.a)({},Vn),{},{palette:Object(u.a)(Object(u.a)({},Vn.palette),{},{type:n}),typography:Object(u.a)(Object(u.a)({},Vn.typography),{},{fontFamily:t})}))),c=Z({blog:Object(se.jsx)("h1",{children:"Aegis Of The Blog"}),faq:Object(se.jsx)("h1",{children:"Aegis Of The FAQ"}),home:Object(se.jsx)(Ke,{}),profile:Object(se.jsx)(Hn,{})});!function(){var e=k(),t=e.appLanguageCookie,n=e.setAppLanguageCookie,r=T().appLanguage;Object(a.useEffect)((function(){r!==t&&n(r)}),[r,t,n])}(),function(){var e=R(),t=e.appPathURLSearchParam,n=e.setAppPathURLSearchParam,r=S().appPath;Object(a.useEffect)((function(){r!==t&&n(r)}),[r,t,n])}(),function(){var e=y(),t=e.appThemeModeCookie,n=e.setAppThemeModeCookie,r=re().appThemeMode;Object(a.useEffect)((function(){r!==t&&n(r)}),[r,t,n])}(),P();var o=_().isLoading,i=ee().isLoading;return console.log("!!!"),Object(se.jsx)(d.a,{theme:r,children:Object(se.jsxs)(Xn.a,{className:e.page,children:[Object(se.jsx)(wn,{}),c,Object(se.jsx)(pe,{isLoading:o||i})]})})}function Kn(){return Object(se.jsx)(i.a,{children:Object(se.jsx)(l.a,{children:Object(se.jsxs)(s.a,{children:[Object(se.jsx)(j.a,{}),Object(se.jsx)(Jn,{})]})})})}n(132);o.a.render(Object(se.jsx)(r.a.StrictMode,{children:Object(se.jsx)(Kn,{})}),document.getElementById("root"))}},[[133,1,2]]]);
//# sourceMappingURL=main.ed5b5531.chunk.js.map