(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{19:function(e,a,t){e.exports=t.p+"static/media/img1.bf92c430.jpg"},44:function(e,a,t){e.exports=t(92)},68:function(e,a,t){},69:function(e,a,t){},70:function(e,a,t){},75:function(e,a,t){},76:function(e,a,t){},77:function(e,a,t){},78:function(e,a,t){},79:function(e,a,t){},80:function(e,a,t){},81:function(e,a,t){},82:function(e,a,t){},83:function(e,a,t){},84:function(e,a,t){},90:function(e,a,t){},91:function(e,a,t){},92:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(32),c=t.n(i),r=t(11),o=t.n(r),s=t(33),m=t(34),u=t(42),d=t(35),p=t(43),v=t(36),f=t.n(v),E=t(7),h=Object(n.createContext)(),g=function(){return Object(n.useContext)(h)},b=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(t=Object(u.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(l)))).state={auth0Client:null,isLoading:!0,isAuthenticated:!1,user:null,dbUser:null},t.config={domain:"jlb1999.auth0.com",client_id:"w3yVcHf84CMWy8fm2hBLFQgXLSUq9fjz",redirect_uri:window.location.origin},t.addUser=function(e,a){e.given_name?E.get("http://localhost:5003/api/newuser/".concat(a,"/").concat(e.email,"/").concat(e.given_name,"/").concat(e.family_name,"/").concat(e.nickname),{timeout:200}).then((function(e){return console.log(e.data)})).catch((function(e){console.log(e.toJSON())})):e.email&&E.get("http://localhost:5003/api/newuser/".concat(a,"/").concat(e.email,"/","null","/","null","/").concat(e.nickname),{timeout:200}).then((function(e){return console.log(e.data)})).catch((function(e){console.log(e.toJSON())}))},t.findUser=function(e){t.setState({isLoading:!0}),console.log(e),E.get("http://localhost:5003/api/finduser/".concat(e.email)).then((function(a){if(console.log(a),""===a.data){var n=t.getRandomInt(1e8,1e9);t.addUser(e,n),console.log("added user"),t.findUserAgain(),t.setState({isLoading:!1})}else console.log("user already exists"),console.log(a.data),t.setState({dbUser:a.data,isLoading:!1})})).catch((function(e){console.log(e.toJSON())}))},t.findUserAgain=function(){var e=t.state.user;console.log(e),e?E.get("http://localhost:5003/api/finduser/".concat(e.email)).then((function(e){return t.setState({dbUser:e.data,isLoading:!1})})).catch((function(e){return console.log(e)})):(console.log("no user, cant do it"),t.setState({isLoading:!1}))},t.initializeAuth0=function(){var e,a,n;return o.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,o.a.awrap(f()(t.config));case 2:if(e=l.sent,t.setState({auth0Client:e}),!window.location.search.includes("code=")){l.next=6;break}return l.abrupt("return",t.handleRedirectCallback());case 6:return l.next=9,o.a.awrap(e.isAuthenticated());case 9:if(!(a=l.sent)){l.next=16;break}return l.next=13,o.a.awrap(e.getUser());case 13:l.t0=l.sent,l.next=17;break;case 16:l.t0=null;case 17:n=l.t0,t.setState({isAuthenticated:a,user:n}),t.findUserAgain();case 20:case"end":return l.stop()}}))},t.handleRedirectCallback=function(){var e;return o.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t.setState({isLoading:!0}),a.next=3,o.a.awrap(t.state.auth0Client.handleRedirectCallback());case 3:return a.next=5,o.a.awrap(t.state.auth0Client.getUser());case 5:e=a.sent,t.setState({user:e,isAuthenticated:!0,isLoading:!1}),t.findUser(e),window.history.replaceState({},document.title,window.location.pathname);case 9:case"end":return a.stop()}}))},t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){this.initializeAuth0()}},{key:"getRandomInt",value:function(e,a){return e=Math.ceil(e),a=Math.floor(a),Math.floor(Math.random()*(a-e))+e}},{key:"render",value:function(){var e=this.state,a=e.auth0Client,t=e.isLoading,n=e.isAuthenticated,i=e.user,c=e.dbUser,r=this.props.children,o={isLoading:t,isAuthenticated:n,user:i,dbUser:c,loginWithRedirect:function(){return a.loginWithRedirect.apply(a,arguments)},getTokenSilently:function(){return a.getTokenSilently.apply(a,arguments)},getIdTokenClaims:function(){return a.getIdTokenClaims.apply(a,arguments)},logout:function(){return a.logout.apply(a,arguments)}};return l.a.createElement(h.Provider,{value:o},r)}}]),a}(n.Component),N=(t(68),t(69),t(6)),y=(t(70),function(){var e=g(),a=e.isLoading,t=e.loginWithRedirect,n=e.logout,i=e.user;return l.a.createElement("nav",{className:"navMother"},l.a.createElement("div",{className:"navMain"},l.a.createElement("section",{className:"leftNav"},l.a.createElement("div",{className:"logoDiv"},l.a.createElement(N.b,{to:"/",className:"logo"},"H3 Staffing"))),l.a.createElement("section",{className:"rightNav"},l.a.createElement("div",{className:"loginLogoutSect"},!a&&!i&&l.a.createElement("div",{className:"loggedOutSect"},l.a.createElement("button",{className:"navLogIn",onClick:t},"Log In")),!a&&i&&l.a.createElement("div",{className:"loggedInSect"},l.a.createElement("button",{className:"navLogOut",onClick:n}," Log Out"),l.a.createElement(N.b,{to:"/profile"},l.a.createElement("img",{className:"navPicture",src:i.picture,alt:i.given_name?i.given_name:i.nickname+"'s picture"})))))))}),w=function(){return l.a.createElement("svg",{className:"downArrow",height:"100%",version:"1.1",xmlns:"http://www.w3.org/2000/svg",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLineLoin:"round",strokeMiterLimit:2,display:"inline-block"}},l.a.createElement("path",{d:"M1.789,8.48c-0.099,-0.083 -0.226,-0.123 -0.355,-0.112c-0.128,0.011 -0.247,0.073 -0.329,0.172c-0.098,0.117 -0.207,0.247 -0.306,0.365c-0.086,0.103 -0.128,0.236 -0.116,0.37c0.011,0.135 0.076,0.259 0.179,0.345c1.732,1.45 8.748,7.327 11.063,9.266c0.197,0.166 0.453,0.246 0.709,0.223c0.257,-0.022 0.494,-0.146 0.66,-0.344c0.175,-0.209 0.319,-0.381 0.319,-0.381c0,0 -9.778,-8.191 -11.824,-9.904Z"}),l.a.createElement("path",{d:"M24.148,9.592c0.097,-0.082 0.158,-0.199 0.17,-0.326c0.011,-0.126 -0.029,-0.252 -0.111,-0.35c-0.101,-0.12 -0.214,-0.255 -0.316,-0.377c-0.085,-0.101 -0.206,-0.164 -0.338,-0.175c-0.131,-0.012 -0.262,0.029 -0.363,0.114c-2.064,1.732 -11.807,9.907 -11.807,9.907c0,0 0.144,0.172 0.32,0.381c0.165,0.197 0.403,0.321 0.66,0.343c0.256,0.023 0.512,-0.058 0.709,-0.223c2.323,-1.95 9.383,-7.874 11.076,-9.294Z"}))},k=(t(75),function(){return l.a.createElement("div",{className:"home1Mother"},l.a.createElement("div",{className:"home1Main"},l.a.createElement("div",{className:"home1HeadDiv"},l.a.createElement("h2",null,"or")),l.a.createElement("div",{className:"home1CTADiv"},l.a.createElement(N.b,{to:"/jobs/#!/search?page=1"},l.a.createElement("button",{className:"home1CTA"},"Find A Job"))),l.a.createElement("div",{className:"arrowDiv"},l.a.createElement(w,{className:"downArrow"}))))}),x=t(4),S=(t(76),function(){var e={fill:"none",stroke:"#000",strokeWidth:"1px"},a={fill:"#4698ff",stroke:"#000",strokeWidth:"0.5px"},t={fill:"#ed4f24",stroke:"#000",strokeWidth:"0.5px"},n={fill:"#fff",stroke:"#000",strokeWidth:"1px"};return l.a.createElement("svg",{width:"55px",height:"100%",viewBox:"0 0 50 45",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",space:"preserve",serif:"http://www.serif.com/",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"1.5"}},l.a.createElement("g",{id:"Check"},l.a.createElement("ellipse",{cx:"22.251",cy:"22.247",rx:"21.751",ry:"21.747",style:e}),l.a.createElement("ellipse",{cx:"22.251",cy:"22.247",rx:"19.385",ry:"19.382",style:e}),l.a.createElement("ellipse",{cx:"22.251",cy:"22.247",rx:"20.516",ry:"20.512",style:{fill:"none",stroke:"#fff",strokeWidth:"1px"}}),l.a.createElement("path",{d:"M26.933,32.457c0,0 -11.509,-8.413 -14.636,-10.699c-0.206,-0.151 -0.463,-0.213 -0.715,-0.174c-0.253,0.039 -0.479,0.177 -0.629,0.383c-0.438,0.599 -1.043,1.427 -1.492,2.041c-0.34,0.464 -0.238,1.116 0.226,1.455c2.696,1.97 11.107,8.119 13.761,10.059c0.448,0.327 1.077,0.23 1.404,-0.218c0.788,-1.078 2.081,-2.847 2.081,-2.847Z",style:a}),l.a.createElement("path",{d:"M23.494,35.447c0.192,0.181 0.447,0.278 0.71,0.271c0.263,-0.007 0.513,-0.119 0.694,-0.31c3.573,-3.78 20.111,-21.272 23.699,-25.067c0.183,-0.193 0.281,-0.451 0.274,-0.716c-0.008,-0.266 -0.12,-0.518 -0.313,-0.7c-0.539,-0.51 -1.271,-1.202 -1.815,-1.716c-0.414,-0.392 -1.067,-0.373 -1.459,0.041c-4.078,4.313 -24.361,25.766 -24.361,25.766c0,0 1.602,1.515 2.571,2.431Z",style:a}),l.a.createElement("path",{d:"M26.375,32.757c0,0 -11.155,-8.277 -14.141,-10.493c-0.41,-0.304 -0.984,-0.238 -1.314,0.151c-0.391,0.461 -0.906,1.069 -1.314,1.55c-0.173,0.205 -0.254,0.472 -0.222,0.739c0.032,0.267 0.174,0.508 0.391,0.666c2.689,1.958 11.056,8.049 13.699,9.974c0.211,0.153 0.476,0.214 0.733,0.167c0.256,-0.046 0.483,-0.196 0.626,-0.414c0.62,-0.94 1.542,-2.34 1.542,-2.34Z",style:{fill:"#4698ff"}}),l.a.createElement("path",{d:"M26.593,30.784c0,0 -12.277,-8.877 -15.513,-11.217c-0.428,-0.309 -1.026,-0.215 -1.339,0.211c-0.398,0.544 -0.933,1.273 -1.343,1.833c-0.164,0.223 -0.232,0.503 -0.189,0.777c0.043,0.274 0.194,0.519 0.418,0.682c2.795,2.02 11.674,8.439 14.241,10.294c0.403,0.291 0.958,0.244 1.306,-0.111c0.883,-0.901 2.419,-2.469 2.419,-2.469Z",style:t}),l.a.createElement("path",{d:"M22.909,33.41c0.401,0.349 1.006,0.319 1.372,-0.067c3.581,-3.783 20.779,-21.954 24.475,-25.859c0.185,-0.195 0.283,-0.456 0.274,-0.725c-0.01,-0.268 -0.127,-0.522 -0.326,-0.703c-0.546,-0.499 -1.282,-1.172 -1.83,-1.673c-0.421,-0.385 -1.074,-0.355 -1.458,0.065c-4.081,4.465 -24.717,27.041 -24.717,27.041c0,0 1.343,1.167 2.21,1.921Z",style:t}),l.a.createElement("path",{d:"M25.881,31.292c0,0 -11.884,-8.805 -15.045,-11.146c-0.424,-0.314 -1.021,-0.23 -1.343,0.188c-0.299,0.39 -0.663,0.865 -0.964,1.258c-0.156,0.204 -0.225,0.462 -0.19,0.717c0.034,0.255 0.169,0.486 0.374,0.641c4.655,3.516 9.134,6.83 14.174,10.283c0.408,0.28 0.959,0.22 1.298,-0.14c0.677,-0.719 1.696,-1.801 1.696,-1.801Z",style:{fill:"#ed4f24"}}),l.a.createElement("path",{d:"M25.71,27.779c0,0 -12.277,-9.067 -15.512,-11.456c-0.427,-0.316 -1.029,-0.225 -1.344,0.202c-0.441,0.597 -1.05,1.422 -1.503,2.034c-0.164,0.222 -0.233,0.5 -0.192,0.773c0.041,0.273 0.189,0.519 0.411,0.683c2.809,2.074 11.874,8.77 14.639,10.812c0.447,0.33 1.076,0.235 1.405,-0.211c0.793,-1.074 2.096,-2.837 2.096,-2.837Z",style:n}),l.a.createElement("path",{d:"M22.343,30.695c0.403,0.373 1.031,0.348 1.403,-0.055c3.607,-3.9 20.598,-22.274 24.22,-26.19c0.18,-0.195 0.275,-0.454 0.265,-0.72c-0.01,-0.265 -0.126,-0.516 -0.321,-0.696c-0.544,-0.503 -1.284,-1.187 -1.833,-1.695c-0.419,-0.387 -1.072,-0.362 -1.459,0.057c-4.107,4.441 -24.873,26.897 -24.873,26.897c0,0 1.619,1.497 2.598,2.402Z",style:n}),l.a.createElement("path",{d:"M25.137,28.068c0,0 -11.81,-8.848 -14.954,-11.202c-0.422,-0.317 -1.02,-0.236 -1.343,0.181c-0.298,0.384 -0.66,0.851 -0.961,1.239c-0.16,0.205 -0.23,0.467 -0.194,0.724c0.035,0.258 0.173,0.49 0.383,0.645c2.719,2.008 11.62,8.582 14.296,10.559c0.424,0.314 1.022,0.224 1.336,-0.2c0.592,-0.803 1.437,-1.946 1.437,-1.946Z",style:{fill:"#fff"}}),l.a.createElement("path",{d:"M26.031,28.403l-0.562,-0.535l-2.594,2.723l0.561,0.534l2.595,-2.722Z"})))}),L=function(){var e=Object(n.useState)("seeker"),a=Object(x.a)(e,2),t=a[0],i=a[1],c=(document.getElementById("seekerBtn"),document.getElementsByClassName("slideBtn")),r=[],o=function(e){e.style.boxShadow="inset 2px 2px 2px rgba(51, 51, 51, 0.4)",e.style.outline="none",e.style.border="2px solid #4897fb",e.style.color="#2E5E9B",e.style.fontSize=".95rem"},s=function(e){e.style.boxShadow="none",e.style.outline="none",e.style.border="2px lightgrey solid",e.style.color="#333",e.style.fontSize="1rem"},m=function(e){for(var a=e.target.className,n=document.getElementsByClassName(a),l=0;l<c.length;l++)n[0].className.includes("seekerSlide")?(o(c[0]),s(c[1])):n[0].className.includes("employerSlide")&&(o(c[1]),s(c[0]));return a.includes("seekerSlide")?(i("seeker"),t):a.includes("employerSlide")?(i("employer"),t):void 0};return"seeker"===t?r=["Completely free for job seekers.","Dedicated to getting you a great role.","Close relationships to important decision makers."]:"employer"===t&&(r=["Employer sample phrase 1","Employer sample phrase 2","Employer sample phrase 3"]),l.a.createElement("div",{className:"home2Mother"},l.a.createElement("div",{className:"home2Main"},l.a.createElement("div",{className:"discoverHeadDiv"},l.a.createElement("h1",{className:"discoverHead"},"Discover The")),l.a.createElement("div",{className:"seekerEmployeeDiv"},l.a.createElement("div",{className:"seekerEmployerSlider"},l.a.createElement("button",{onClick:m,id:"seekerBtn",className:"slideBtn seekerSlide"},"Job Seeker"),l.a.createElement("button",{onClick:m,className:"slideBtn employerSlide"},"Employer"))),l.a.createElement("div",{className:"checkListDiv"},l.a.createElement("div",{className:"checkListParent"},l.a.createElement("div",{className:"checkList"},r.map((function(e){return l.a.createElement("div",{className:"checkListItemParent",key:e},l.a.createElement("div",{className:"checkListItem"},l.a.createElement("div",{className:"iconDiv"},l.a.createElement(S,{className:"checkListIcon"})),l.a.createElement("p",{className:"checkListPara"},e)))}))))),l.a.createElement("div",{className:"coreValuesParent"},l.a.createElement("div",{className:"valuesHeadDiv"},l.a.createElement("h1",{className:"valuesHead"},"Our Core Values")),l.a.createElement("div",{className:"valuesContent"},l.a.createElement("div",{className:"valuesParaDiv"},l.a.createElement("div",{className:"valuesPara"},"Our clients and candidates are our only concern. They are why we exist. Everything we do is to help our clients find superior talent and our candidates realize their career ambitions. \u2029\u2029",l.a.createElement("br",null),l.a.createElement("br",null),"Our job at H3 is very simple: to build lasting relationships with everyone we meet, to listen deeply, and to ",l.a.createElement("strong",null,"honestly care"),".")),l.a.createElement("div",{className:"valuesListDiv"},l.a.createElement("div",{className:"valuesList"},l.a.createElement("div",{className:"valueItem"},"Diligence"),l.a.createElement("div",{className:"valueItem"},"Integrity"),l.a.createElement("div",{className:"valueItem"},"Genuine"),l.a.createElement("div",{className:"valueItem"},"Responsiveness"),l.a.createElement("div",{className:"valueItem"},"Synergistic"),l.a.createElement("div",{className:"valueItem"},"Professionalism")))))))},M=(t(77),t(19)),P=t.n(M),H=function(){return l.a.createElement("div",{className:"home3Mother"},l.a.createElement("div",{className:"home3Main"},l.a.createElement("div",{className:"overviewHeadDiv"},l.a.createElement("h2",{className:"overviewHead"},"A Brief Overview of H3 Staffing")),l.a.createElement("div",{className:"overviewSectParent"},l.a.createElement("div",{className:"overviewSect"},l.a.createElement("div",{className:"overviewImgSect2"},l.a.createElement("div",{className:"overviewParaDiv2"},l.a.createElement("p",{className:"overviewPara2"},"At H3 Staffing we work hard to understand your complex staffing needs and work efficiently to find the perfect marriage between employer and employee. ",l.a.createElement("br",null),l.a.createElement("br",null)," \u2029Having a combined total of ",l.a.createElement("strong",null,"10 years")," of Staffing experience, our mission is to build meaningful relationships. It\u2019s what we\u2019re about. ",l.a.createElement("br",null),l.a.createElement("br",null),"\u2029We\u2019ve got connections that count, experience that makes all the difference, deep working relationships that matter and the right recruiting team who\u2019s got your back.")),l.a.createElement("img",{className:"overviewImg2",src:P.a,alt:"Women sitting with computers"})),l.a.createElement("div",{className:"overviewParaDiv"},l.a.createElement("p",{className:"overviewPara"},"At H3 Staffing we work hard to understand your complex staffing needs and work efficiently to find the perfect marriage between employer and employee. ",l.a.createElement("br",null),l.a.createElement("br",null)," \u2029Having a combined total of ",l.a.createElement("strong",null,"10 years")," of Staffing experience, our mission is to build meaningful relationships. It\u2019s what we\u2019re about. ",l.a.createElement("br",null),l.a.createElement("br",null),"\u2029We\u2019ve got connections that count, experience that makes all the difference, deep working relationships that matter and the right recruiting team who\u2019s got your back.")),l.a.createElement("div",{className:"briefSect"},l.a.createElement("div",{className:"briefDiv"},l.a.createElement("h3",{className:"briefHead"},"We Provide Consistent, Professional, Quality Service"),l.a.createElement("p",{className:"briefPara"},"We do whatever it takes to build client and consultant loyalty.")),l.a.createElement("div",{className:"briefDiv"},l.a.createElement("h3",{className:"briefHead"},"We Take Care Of Our People"),l.a.createElement("p",{className:"briefPara"},"We understand that our success is because of our people.")),l.a.createElement("div",{className:"briefDiv"},l.a.createElement("h3",{className:"briefHead"},"We Work Together"),l.a.createElement("p",{className:"briefPara"},"By working as a synchronized, organized team; we are able to provide a better, more\u2029professional service than anyone else.")))),l.a.createElement("div",{className:"overviewImgSect"},l.a.createElement("img",{className:"overviewImg",src:P.a,alt:"Women sitting with computers"}))),l.a.createElement("div",{className:"briefSect2"},l.a.createElement("div",{className:"briefDiv2"},l.a.createElement("h3",{className:"briefHead2"},"We Provide Consistent, Professional, Quality Service"),l.a.createElement("p",{className:"briefPara2"},"We do whatever it takes to build client and consultant loyalty.")),l.a.createElement("div",{className:"briefDiv2"},l.a.createElement("h3",{className:"briefHead2"},"We Take Care Of Our People"),l.a.createElement("p",{className:"briefPara2"},"We understand that our success is because of our people.")),l.a.createElement("div",{className:"briefDiv2"},l.a.createElement("h3",{className:"briefHead2"},"We Work Together"),l.a.createElement("p",{className:"briefPara2"},"By working as a synchronized, organized team; we are able to provide a better, more\u2029 professional service than anyone else.")))))},O=(t(78),function(){return l.a.createElement("div",{className:"home4Mother"},l.a.createElement("div",{className:"home4Main"},l.a.createElement("div",{className:"home4HeadDiv"},l.a.createElement("h2",{className:"home4Head"},"How can we help?")),l.a.createElement("div",{className:"servicesGridDiv"},l.a.createElement("div",{className:"servicesGrid"},l.a.createElement("div",{className:"serviceDiv"},l.a.createElement("h3",{className:"serviceHead"},"Permanent Placements"),l.a.createElement("p",{className:"servicePara"},"Looking for that long term answer \u2029to be an integral part of your \u2029business?")),l.a.createElement("div",{className:"serviceDiv"},l.a.createElement("h3",{className:"serviceHead"},"Contract Services"),l.a.createElement("p",{className:"servicePara"},"Have a short term need?\u2029 Want to ensure that you have \u2029the right cultural fit to go along \u2029with the skills required?")),l.a.createElement("div",{className:"serviceDiv"},l.a.createElement("h3",{className:"serviceHead"},"Consultants"),l.a.createElement("p",{className:"servicePara"},"Whether you prefer the flexibility\u2029 of contract work, or the stability \u2029of full-time placement, we're here \u2029to help you find it.")))),l.a.createElement("div",{className:"letsTalkDiv1"},l.a.createElement("div",{className:"letsTalkHeadDiv"},l.a.createElement("h2",{className:"letsTalkHead"},"Lets make it happen.")))))}),j=(t(79),function(){return l.a.createElement("svg",{width:"12%",height:"9%",viewBox:"0 0 40 34",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",space:"preserve",serif:"http://www.serif.com/",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:2,left:"-20px",top:"-9px"}},l.a.createElement("g",{transform:"matrix(1,0.000239573,-0.000239573,1,-1.33333,0.0944216)"},l.a.createElement("text",{x:"-4.986px",y:"68.625px",style:{fontFamily:"CorsivaHebrew",fontSize:"136.383px",fill:"#4698ff"}},'"')))}),D=function(){return l.a.createElement("div",{className:"home5Mother"},l.a.createElement("div",{className:"home5Main"},l.a.createElement("div",{className:"home5HeadDiv"},l.a.createElement("h1",{className:"home5Head"},"Testimonials")),l.a.createElement("div",{className:"scrollingDiv"},[{testi:"nsectetur adipiscing elit, se do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",role:"Software Engineer"},{testi:"dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",role:"Software Engineer"},{testi:"um dolor sit amenstur adipiscing elit, se do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",role:"Software Engineer"},{testi:"uis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",role:"Software Engineer"},{testi:"Lre et dolore magna aliqua. Ut enim ad minim ve quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",role:"Software Engineer"},{testi:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, se do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qunostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. r. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",role:"Software Engineer"},{testi:"Lorem ipsum dolor sit amet, consectetuscing elit, se do eiusmod tempor incididunt ut labot dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ie velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",role:"Software Engineer"},{testi:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, se iusmod tempor indunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",role:"Software Engineer"},{testi:"Lorem ipsum dlor sit amet, consectetur adipiscing elit, se do eiusmod temp incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",role:"Software Engineer"}].map((function(e){return l.a.createElement("div",{key:e.testi,className:"testimonialBoxParent"},l.a.createElement(j,{className:"quotes"}),l.a.createElement("div",{className:"testimonialBox"},l.a.createElement("p",{className:"testimonialPara"}," ",e.testi," ")),l.a.createElement("div",{className:"testimonialRoleDiv"},l.a.createElement("p",{className:"testimonialRole"},e.role)))})))))},C=t(41),q=t(7),T=t.n(q),W=(t(80),function(){var e=Object(n.useState)([]),a=Object(x.a)(e,2),t=a[0],i=a[1];return Object(n.useEffect)((function(){T.a.get("http://localhost:5003/api/blogpost/get").then((function(e){return i(Object(C.a)(e.data.reverse()))})).catch((function(e){return console.log(e)}))}),[]),l.a.createElement("div",{className:"blogMother"},l.a.createElement("div",{className:"blogMain"},l.a.createElement("h1",{className:"blogHead"},"H3 Blog"),l.a.createElement("div",{className:"postGrid"},t.splice(0,3).map((function(e){return l.a.createElement(N.b,{key:e.uid,to:"/blog/".concat(e.uid)},l.a.createElement("div",{key:e.uid,className:"blogPost"},l.a.createElement("h3",{className:"blogTitle"},e.title),l.a.createElement("div",{className:"dateTimeDiv"},l.a.createElement("p",{className:"blogTime"},e.time_created),l.a.createElement("p",{className:"blogDate"},e.date_created)),l.a.createElement("hr",{className:"blogsHr"}),e.blog_text.length>150?l.a.createElement("p",{className:"blogText"},e.blog_text.slice(0,150),"..."):l.a.createElement("p",{className:"blogText"},e.blog_text)))})))))}),B=(t(81),function(){return l.a.createElement("div",{className:"letsTalkMother"},l.a.createElement("div",{className:"letsTalkMain"},l.a.createElement("div",{className:"letsTalkBar"},l.a.createElement("h1",{className:"letsTalkHead"},"Lets Talk"))))}),I=(t(82),function(){return l.a.createElement("div",{className:"footerMother"},l.a.createElement("div",{className:"footerMain"},l.a.createElement("div",{className:"footerBar"},l.a.createElement("div",{className:"footerLinks"},l.a.createElement("div",{className:"companyArea"},l.a.createElement("h3",{className:"companyHead"},"Company"),l.a.createElement("p",{className:"companyPara"},"About Us"),l.a.createElement("p",{className:"companyPara"},"Blog")),l.a.createElement("div",{className:"careersArea"},l.a.createElement("h3",{className:"careersHead"}," Careers"),l.a.createElement("p",{className:"careersPara"},"Search Jobs"),l.a.createElement("p",{className:"careersPara"},"Join Our Talent Network")),l.a.createElement("div",{className:"connectArea"},l.a.createElement("h3",{className:"connectHead"},"Connect With Us"),l.a.createElement("p",{className:"connectPara"},"704-999-9999"),l.a.createElement("p",{className:"connectPara"},"h3staffing@gmail.com"),l.a.createElement("div",{className:"socialsArea"},l.a.createElement("p",null,"O"),l.a.createElement("p",null,"O"),l.a.createElement("p",null,"O")))),l.a.createElement("hr",null),l.a.createElement("div",{className:"legalDiv"},l.a.createElement("p",{className:"legalPara"},"All Rights Reserved \xa9 2020 | H3 Staffing")))))}),A=function(){return g().isLoading?l.a.createElement("div",null,"Loading..."):l.a.createElement("div",null,l.a.createElement(k,null),l.a.createElement(L,null),l.a.createElement(H,null),l.a.createElement(O,null),l.a.createElement(D,null),l.a.createElement(W,null),l.a.createElement(B,null),l.a.createElement(I,null))},U=(t(83),function(){var e=g(),a=(e.isLoading,e.user),t=e.dbUser,i=Object(n.useState)(""),c=Object(x.a)(i,2),r=c[0],o=c[1],s=Object(n.useState)(""),m=Object(x.a)(s,2),u=m[0],d=m[1],p=function(){console.log(r+" "+u+" "+t.email),T.a.get("http://localhost:5003/api/addname/".concat(r,"/").concat(u,"/").concat(a.email),{timeout:200}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),console.log("Name changed to: ".concat(r," ").concat(u))};return l.a.createElement("div",{className:"profile1Mother"},l.a.createElement("div",{className:"profile1Main"},l.a.createElement("h1",null,"null"!==t.given_name?t.given_name:t.nickname,"'s Profile"),"null"===t.given_name&&"null"===t.family_name&&l.a.createElement("form",{onSubmit:function(e){console.log("Submitting name: ".concat(r," ").concat(u)),p()},value:"Submit"},l.a.createElement("input",{className:"nameInputs",placeholder:"first name",type:"text",value:r,name:"firstname",onChange:function(e){return o(e.target.value)}}),l.a.createElement("input",{className:"nameInputs",placeholder:"last name",type:"text",value:u,name:"lastname",onChange:function(e){return d(e.target.value)}}),l.a.createElement("input",{className:"nameSubmit",placeholder:"submit",type:"submit"}))))}),_=function(){return l.a.createElement("div",null,l.a.createElement(U,null))},R=(t(84),t(16)),Z=t(39),z=t.n(Z),J=function(){Object(n.useEffect)((function(){z()(["https://bb3jobboard.topechelon.com/job_board.js"])}),[]);return l.a.createElement("div",{className:"jobs1Mother"},l.a.createElement("div",{className:"jobs1Main"},l.a.createElement("button",{className:"loadJobBoardBtn",onClick:function(){window.location.reload(!0)}},"Load Job Board"),l.a.createElement("div",{id:"jb--job-board","api-key":"a933e68070daf890"})))},G=function(){return l.a.createElement("div",null,l.a.createElement(J,null))},F=t(40),Q=t(10),V=t(20),X=t.n(V),$=(t(90),function(){var e=Object(n.useState)(""),a=Object(x.a)(e,2),t=a[0],i=a[1],c=Object(n.useState)(""),r=Object(x.a)(c,2),o=r[0],s=r[1],m=g(),u=(m.user,m.dbUser);Object(n.useEffect)((function(){}));return l.a.createElement("div",{className:"blogPostMother"},l.a.createElement("div",{className:"blogPostMain"},l.a.createElement("h1",{className:"blogPostHead"},"Create a Blog Post!"),l.a.createElement("form",{onSubmit:function(e){var a,n,l=(a=1e8,n=1e9,a=Math.ceil(a),n=Math.floor(n),Math.floor(Math.random()*(n-a)+n)).toString(),i=u.uid.toString(),c=X()().format("LT"),r=X()().format("L"),s=c.replace(/\s/g,""),m=r.replace(/\//g,"-");T.a.post("http://localhost:5003/api/blogpost/post",{uid:l,user_uid:i,author:"null",title:t,blog_text:o,date_created:s,time_created:m},{timeout:300}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),e.preventDefault()}},l.a.createElement("input",{type:"text",placeholder:"Enter an engaging title...",className:"blogPostTitle",value:t,onChange:function(e){return i(e.target.value)}}),l.a.createElement("textarea",{type:"text",placeholder:"Let your job seekers know what H3 has going on...",className:"blogPostInput",value:o,onChange:function(e){return s(e.target.value)}}),l.a.createElement("button",{type:"submit",className:"blogPostBtn"},"Post"))))}),K=function(){return l.a.createElement("div",null,l.a.createElement($,null))},Y=(t(91),function(){var e=Object(n.useState)({}),a=Object(x.a)(e,2),t=a[0],i=a[1];return Object(n.useEffect)((function(){var e=window.location.pathname.replace("/blog/","");T.a.get("http://localhost:5003/api/blogpost/get/".concat(e)).then((function(e){return i(e.data)})).catch((function(e){return console.log(e)}))}),[]),l.a.createElement("div",{className:"singleMother"},l.a.createElement("div",{className:"singleMain"},l.a.createElement("div",{className:"singlePostContainer"},l.a.createElement("h1",{className:"singleTitle"},t.title),l.a.createElement("p",{className:"singleText"},t.blog_text),l.a.createElement("hr",{className:"singleHr"}),l.a.createElement("div",{className:"dateTimeSingle"},l.a.createElement("p",{className:"singleTime"},t.time_created),l.a.createElement("p",{className:"singleDate"},t.date_created)))))}),ee=function(){return l.a.createElement("div",null,l.a.createElement(Y,null))},ae=function(e){var a=e.component,t=Object(F.a)(e,["component"]),n=g().user;return l.a.createElement(Q.a,Object.assign({},t,{render:function(e){return n.email=l.a.createElement(a,e)}}))},te=function(){return l.a.createElement(Q.c,null,l.a.createElement(Q.a,{exact:!0,path:"/",component:A}),l.a.createElement(Q.a,{path:"/profile",component:_}),l.a.createElement(Q.a,{path:"/jobs",component:G}),l.a.createElement(Q.a,{path:"/blog/:uid",component:ee}),l.a.createElement(ae,{path:"/blogpost",component:K}))};var ne=function(){return g().isLoading?l.a.createElement("div",null,"Loading..."):l.a.createElement(N.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(y,null),l.a.createElement(te,null),l.a.createElement(R.Helmet,null,l.a.createElement("meta",{charSet:"utf-8"}),l.a.createElement("title",null,"H3 Staffing"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(b,null,l.a.createElement(ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[44,1,2]]]);
//# sourceMappingURL=main.940e00d7.chunk.js.map