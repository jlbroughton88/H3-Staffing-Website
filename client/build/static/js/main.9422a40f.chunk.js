(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/img1.bf92c430.jpg"},44:function(e,t,a){e.exports=a(89)},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(32),r=a.n(l),c=a(11),o=a.n(c),s=a(33),m=a(34),u=a(42),d=a(35),p=a(43),v=a(36),f=a.n(v),h=a(9),g=Object(n.createContext)(),E=function(){return Object(n.useContext)(g)},b=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={auth0Client:null,isLoading:!0,isAuthenticated:!1,user:null,dbUser:null},a.config={domain:"jlb1999.auth0.com",client_id:"w3yVcHf84CMWy8fm2hBLFQgXLSUq9fjz",redirect_uri:window.location.origin},a.addUser=function(e,t){e.given_name?h.get("http://localhost:5003/api/newuser/".concat(t,"/").concat(e.email,"/").concat(e.given_name,"/").concat(e.family_name,"/").concat(e.nickname),{timeout:200}).then((function(e){return console.log(e.data)})).catch((function(e){console.log(e.toJSON())})):e.email&&h.get("http://localhost:5003/api/newuser/".concat(t,"/").concat(e.email,"/","null","/","null","/").concat(e.nickname),{timeout:200}).then((function(e){return console.log(e.data)})).catch((function(e){console.log(e.toJSON())}))},a.findUser=function(e){a.setState({isLoading:!0}),console.log(e),h.get("http://localhost:5003/api/finduser/".concat(e.email)).then((function(t){if(console.log(t),""===t.data){var n=a.getRandomInt(1e8,1e9);a.addUser(e,n),console.log("added user"),a.findUserAgain(),a.setState({isLoading:!1})}else console.log("user already exists"),console.log(t.data),a.setState({dbUser:t.data,isLoading:!1})})).catch((function(e){console.log(e.toJSON())}))},a.findUserAgain=function(){var e=a.state.user;console.log(e),e?h.get("http://localhost:5003/api/finduser/".concat(e.email)).then((function(e){return a.setState({dbUser:e.data,isLoading:!1})})).catch((function(e){return console.log(e)})):(console.log("no user, cant do it"),a.setState({isLoading:!1}))},a.initializeAuth0=function(){var e,t,n;return o.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,o.a.awrap(f()(a.config));case 2:if(e=i.sent,a.setState({auth0Client:e}),!window.location.search.includes("code=")){i.next=6;break}return i.abrupt("return",a.handleRedirectCallback());case 6:return i.next=9,o.a.awrap(e.isAuthenticated());case 9:if(!(t=i.sent)){i.next=16;break}return i.next=13,o.a.awrap(e.getUser());case 13:i.t0=i.sent,i.next=17;break;case 16:i.t0=null;case 17:n=i.t0,a.setState({isAuthenticated:t,user:n}),a.findUserAgain();case 20:case"end":return i.stop()}}))},a.handleRedirectCallback=function(){var e;return o.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return a.setState({isLoading:!0}),t.next=3,o.a.awrap(a.state.auth0Client.handleRedirectCallback());case 3:return t.next=5,o.a.awrap(a.state.auth0Client.getUser());case 5:e=t.sent,a.setState({user:e,isAuthenticated:!0,isLoading:!1}),a.findUser(e),window.history.replaceState({},document.title,window.location.pathname);case 9:case"end":return t.stop()}}))},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.initializeAuth0()}},{key:"getRandomInt",value:function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e}},{key:"render",value:function(){var e=this.state,t=e.auth0Client,a=e.isLoading,n=e.isAuthenticated,l=e.user,r=e.dbUser,c=this.props.children,o={isLoading:a,isAuthenticated:n,user:l,dbUser:r,loginWithRedirect:function(){return t.loginWithRedirect.apply(t,arguments)},getTokenSilently:function(){return t.getTokenSilently.apply(t,arguments)},getIdTokenClaims:function(){return t.getIdTokenClaims.apply(t,arguments)},logout:function(){return t.logout.apply(t,arguments)}};return i.a.createElement(g.Provider,{value:o},c)}}]),t}(n.Component),N=(a(68),a(69),a(7)),w=(a(70),function(){var e=E(),t=e.isLoading,a=e.loginWithRedirect,n=e.logout,l=e.user;return i.a.createElement("nav",{className:"navMother"},i.a.createElement("div",{className:"navMain"},i.a.createElement("section",{className:"leftNav"},i.a.createElement("div",{className:"logoDiv"},i.a.createElement(N.b,{to:"/",className:"logo"},"H3 Staffing"))),i.a.createElement("section",{className:"rightNav"},i.a.createElement("div",{className:"loginLogoutSect"},!t&&!l&&i.a.createElement("div",{className:"loggedOutSect"},i.a.createElement("button",{className:"navLogIn",onClick:a},"Log In")),!t&&l&&i.a.createElement("div",{className:"loggedInSect"},i.a.createElement("button",{className:"navLogOut",onClick:n}," Log Out"),i.a.createElement(N.b,{to:"/profile"},i.a.createElement("img",{className:"navPicture",src:l.picture,alt:l.given_name?l.given_name:l.nickname+"'s picture"})))))))}),y=function(){return i.a.createElement("svg",{className:"downArrow",height:"100%",version:"1.1",xmlns:"http://www.w3.org/2000/svg",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLineLoin:"round",strokeMiterLimit:2,display:"inline-block"}},i.a.createElement("path",{d:"M1.789,8.48c-0.099,-0.083 -0.226,-0.123 -0.355,-0.112c-0.128,0.011 -0.247,0.073 -0.329,0.172c-0.098,0.117 -0.207,0.247 -0.306,0.365c-0.086,0.103 -0.128,0.236 -0.116,0.37c0.011,0.135 0.076,0.259 0.179,0.345c1.732,1.45 8.748,7.327 11.063,9.266c0.197,0.166 0.453,0.246 0.709,0.223c0.257,-0.022 0.494,-0.146 0.66,-0.344c0.175,-0.209 0.319,-0.381 0.319,-0.381c0,0 -9.778,-8.191 -11.824,-9.904Z"}),i.a.createElement("path",{d:"M24.148,9.592c0.097,-0.082 0.158,-0.199 0.17,-0.326c0.011,-0.126 -0.029,-0.252 -0.111,-0.35c-0.101,-0.12 -0.214,-0.255 -0.316,-0.377c-0.085,-0.101 -0.206,-0.164 -0.338,-0.175c-0.131,-0.012 -0.262,0.029 -0.363,0.114c-2.064,1.732 -11.807,9.907 -11.807,9.907c0,0 0.144,0.172 0.32,0.381c0.165,0.197 0.403,0.321 0.66,0.343c0.256,0.023 0.512,-0.058 0.709,-0.223c2.323,-1.95 9.383,-7.874 11.076,-9.294Z"}))},k=(a(75),function(){return i.a.createElement("div",{className:"home1Mother"},i.a.createElement("div",{className:"home1Main"},i.a.createElement("div",{className:"home1HeadDiv"},i.a.createElement("h2",null,"or")),i.a.createElement("div",{className:"home1CTADiv"},i.a.createElement(N.b,{to:"/jobs/#!/search?page=1"},i.a.createElement("button",{className:"home1CTA"},"Find A Job"))),i.a.createElement("div",{className:"arrowDiv"},i.a.createElement(y,{className:"downArrow"}))))}),x=a(5),S=(a(76),function(){var e={fill:"none",stroke:"#000",strokeWidth:"1px"},t={fill:"#4698ff",stroke:"#000",strokeWidth:"0.5px"},a={fill:"#ed4f24",stroke:"#000",strokeWidth:"0.5px"},n={fill:"#fff",stroke:"#000",strokeWidth:"1px"};return i.a.createElement("svg",{width:"55px",height:"100%",viewBox:"0 0 50 45",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",space:"preserve",serif:"http://www.serif.com/",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"1.5"}},i.a.createElement("g",{id:"Check"},i.a.createElement("ellipse",{cx:"22.251",cy:"22.247",rx:"21.751",ry:"21.747",style:e}),i.a.createElement("ellipse",{cx:"22.251",cy:"22.247",rx:"19.385",ry:"19.382",style:e}),i.a.createElement("ellipse",{cx:"22.251",cy:"22.247",rx:"20.516",ry:"20.512",style:{fill:"none",stroke:"#fff",strokeWidth:"1px"}}),i.a.createElement("path",{d:"M26.933,32.457c0,0 -11.509,-8.413 -14.636,-10.699c-0.206,-0.151 -0.463,-0.213 -0.715,-0.174c-0.253,0.039 -0.479,0.177 -0.629,0.383c-0.438,0.599 -1.043,1.427 -1.492,2.041c-0.34,0.464 -0.238,1.116 0.226,1.455c2.696,1.97 11.107,8.119 13.761,10.059c0.448,0.327 1.077,0.23 1.404,-0.218c0.788,-1.078 2.081,-2.847 2.081,-2.847Z",style:t}),i.a.createElement("path",{d:"M23.494,35.447c0.192,0.181 0.447,0.278 0.71,0.271c0.263,-0.007 0.513,-0.119 0.694,-0.31c3.573,-3.78 20.111,-21.272 23.699,-25.067c0.183,-0.193 0.281,-0.451 0.274,-0.716c-0.008,-0.266 -0.12,-0.518 -0.313,-0.7c-0.539,-0.51 -1.271,-1.202 -1.815,-1.716c-0.414,-0.392 -1.067,-0.373 -1.459,0.041c-4.078,4.313 -24.361,25.766 -24.361,25.766c0,0 1.602,1.515 2.571,2.431Z",style:t}),i.a.createElement("path",{d:"M26.375,32.757c0,0 -11.155,-8.277 -14.141,-10.493c-0.41,-0.304 -0.984,-0.238 -1.314,0.151c-0.391,0.461 -0.906,1.069 -1.314,1.55c-0.173,0.205 -0.254,0.472 -0.222,0.739c0.032,0.267 0.174,0.508 0.391,0.666c2.689,1.958 11.056,8.049 13.699,9.974c0.211,0.153 0.476,0.214 0.733,0.167c0.256,-0.046 0.483,-0.196 0.626,-0.414c0.62,-0.94 1.542,-2.34 1.542,-2.34Z",style:{fill:"#4698ff"}}),i.a.createElement("path",{d:"M26.593,30.784c0,0 -12.277,-8.877 -15.513,-11.217c-0.428,-0.309 -1.026,-0.215 -1.339,0.211c-0.398,0.544 -0.933,1.273 -1.343,1.833c-0.164,0.223 -0.232,0.503 -0.189,0.777c0.043,0.274 0.194,0.519 0.418,0.682c2.795,2.02 11.674,8.439 14.241,10.294c0.403,0.291 0.958,0.244 1.306,-0.111c0.883,-0.901 2.419,-2.469 2.419,-2.469Z",style:a}),i.a.createElement("path",{d:"M22.909,33.41c0.401,0.349 1.006,0.319 1.372,-0.067c3.581,-3.783 20.779,-21.954 24.475,-25.859c0.185,-0.195 0.283,-0.456 0.274,-0.725c-0.01,-0.268 -0.127,-0.522 -0.326,-0.703c-0.546,-0.499 -1.282,-1.172 -1.83,-1.673c-0.421,-0.385 -1.074,-0.355 -1.458,0.065c-4.081,4.465 -24.717,27.041 -24.717,27.041c0,0 1.343,1.167 2.21,1.921Z",style:a}),i.a.createElement("path",{d:"M25.881,31.292c0,0 -11.884,-8.805 -15.045,-11.146c-0.424,-0.314 -1.021,-0.23 -1.343,0.188c-0.299,0.39 -0.663,0.865 -0.964,1.258c-0.156,0.204 -0.225,0.462 -0.19,0.717c0.034,0.255 0.169,0.486 0.374,0.641c4.655,3.516 9.134,6.83 14.174,10.283c0.408,0.28 0.959,0.22 1.298,-0.14c0.677,-0.719 1.696,-1.801 1.696,-1.801Z",style:{fill:"#ed4f24"}}),i.a.createElement("path",{d:"M25.71,27.779c0,0 -12.277,-9.067 -15.512,-11.456c-0.427,-0.316 -1.029,-0.225 -1.344,0.202c-0.441,0.597 -1.05,1.422 -1.503,2.034c-0.164,0.222 -0.233,0.5 -0.192,0.773c0.041,0.273 0.189,0.519 0.411,0.683c2.809,2.074 11.874,8.77 14.639,10.812c0.447,0.33 1.076,0.235 1.405,-0.211c0.793,-1.074 2.096,-2.837 2.096,-2.837Z",style:n}),i.a.createElement("path",{d:"M22.343,30.695c0.403,0.373 1.031,0.348 1.403,-0.055c3.607,-3.9 20.598,-22.274 24.22,-26.19c0.18,-0.195 0.275,-0.454 0.265,-0.72c-0.01,-0.265 -0.126,-0.516 -0.321,-0.696c-0.544,-0.503 -1.284,-1.187 -1.833,-1.695c-0.419,-0.387 -1.072,-0.362 -1.459,0.057c-4.107,4.441 -24.873,26.897 -24.873,26.897c0,0 1.619,1.497 2.598,2.402Z",style:n}),i.a.createElement("path",{d:"M25.137,28.068c0,0 -11.81,-8.848 -14.954,-11.202c-0.422,-0.317 -1.02,-0.236 -1.343,0.181c-0.298,0.384 -0.66,0.851 -0.961,1.239c-0.16,0.205 -0.23,0.467 -0.194,0.724c0.035,0.258 0.173,0.49 0.383,0.645c2.719,2.008 11.62,8.582 14.296,10.559c0.424,0.314 1.022,0.224 1.336,-0.2c0.592,-0.803 1.437,-1.946 1.437,-1.946Z",style:{fill:"#fff"}}),i.a.createElement("path",{d:"M26.031,28.403l-0.562,-0.535l-2.594,2.723l0.561,0.534l2.595,-2.722Z"})))}),M=function(){var e=Object(n.useState)("seeker"),t=Object(x.a)(e,2),a=t[0],l=t[1],r=(document.getElementById("seekerBtn"),document.getElementsByClassName("slideBtn"));Object(n.useEffect)((function(){console.log(r[0]),"rgb(46, 94, 155)"!==r[0].style.color&&o(r[0])}));var c=[],o=function(e){e.style.boxShadow="inset 2px 2px 2px rgba(51, 51, 51, 0.4)",e.style.outline="none",e.style.border="2px solid #4897fb",e.style.color="#2E5E9B",e.style.fontSize=".95rem"},s=function(e){e.style.boxShadow="none",e.style.outline="none",e.style.border="2px lightgrey solid",e.style.color="#333",e.style.fontSize="1rem"},m=function(e){for(var t=e.target.className,n=document.getElementsByClassName(t),i=0;i<r.length;i++)n[0].className.includes("seekerSlide")?(o(r[0]),s(r[1])):n[0].className.includes("employerSlide")&&(o(r[1]),s(r[0]));return t.includes("seekerSlide")?(l("seeker"),a):t.includes("employerSlide")?(l("employer"),a):void 0};return"seeker"===a?c=["Completely free for job seekers.","Dedicated to getting you a great role.","Close relationships to important decision makers."]:"employer"===a&&(c=["Employer sample phrase 1","Employer sample phrase 2","Employer sample phrase 3"]),i.a.createElement("div",{className:"home2Mother"},i.a.createElement("div",{className:"home2Main"},i.a.createElement("div",{className:"discoverHeadDiv"},i.a.createElement("h1",{className:"discoverHead"},"Discover The")),i.a.createElement("div",{className:"seekerEmployeeDiv"},i.a.createElement("div",{className:"seekerEmployerSlider"},i.a.createElement("button",{onClick:m,id:"seekerBtn",className:"slideBtn seekerSlide"},"Job Seeker"),i.a.createElement("button",{onClick:m,className:"slideBtn employerSlide"},"Employer"))),i.a.createElement("div",{className:"checkListDiv"},i.a.createElement("div",{className:"checkListParent"},i.a.createElement("div",{className:"checkList"},c.map((function(e){return i.a.createElement("div",{className:"checkListItemParent",key:e},i.a.createElement("div",{className:"checkListItem"},i.a.createElement("div",{className:"iconDiv"},i.a.createElement(S,{className:"checkListIcon"})),i.a.createElement("p",{className:"checkListPara"},e)))}))))),i.a.createElement("div",{className:"coreValuesParent"},i.a.createElement("div",{className:"valuesHeadDiv"},i.a.createElement("h1",{className:"valuesHead"},"Our Core Values")),i.a.createElement("div",{className:"valuesContent"},i.a.createElement("div",{className:"valuesParaDiv"},i.a.createElement("div",{className:"valuesPara"},"Our clients and candidates are our only concern. They are why we exist. Everything we do is to help our clients find superior talent and our candidates realize their career ambitions. \u2029\u2029",i.a.createElement("br",null),i.a.createElement("br",null),"Our job at H3 is very simple: to build lasting relationships with everyone we meet, to listen deeply, and to ",i.a.createElement("strong",null,"honestly care"),".")),i.a.createElement("div",{className:"valuesListDiv"},i.a.createElement("div",{className:"valuesList"},i.a.createElement("div",{className:"valueItem"},"Diligence"),i.a.createElement("div",{className:"valueItem"},"Integrity"),i.a.createElement("div",{className:"valueItem"},"Genuine"),i.a.createElement("div",{className:"valueItem"},"Responsiveness"),i.a.createElement("div",{className:"valueItem"},"Synergistic"),i.a.createElement("div",{className:"valueItem"},"Professionalism")))))))},L=(a(77),a(19)),q=a.n(L),D=function(){return i.a.createElement("div",{className:"home3Mother"},i.a.createElement("div",{className:"home3Main"},i.a.createElement("div",{className:"overviewHeadDiv"},i.a.createElement("h2",{className:"overviewHead"},"A Brief Overview of H3 Staffing")),i.a.createElement("div",{className:"overviewSectParent"},i.a.createElement("div",{className:"overviewSect"},i.a.createElement("div",{className:"overviewImgSect2"},i.a.createElement("div",{className:"overviewParaDiv2"},i.a.createElement("p",{className:"overviewPara2"},"At H3 Staffing we work hard to understand your complex staffing needs and work efficiently to find the perfect marriage between employer and employee. ",i.a.createElement("br",null),i.a.createElement("br",null)," \u2029Having a combined total of ",i.a.createElement("strong",null,"10 years")," of Staffing experience, our mission is to build meaningful relationships. It\u2019s what we\u2019re about. ",i.a.createElement("br",null),i.a.createElement("br",null),"\u2029We\u2019ve got connections that count, experience that makes all the difference, deep working relationships that matter and the right recruiting team who\u2019s got your back.")),i.a.createElement("img",{className:"overviewImg2",src:q.a,alt:"Women sitting with computers"})),i.a.createElement("div",{className:"overviewParaDiv"},i.a.createElement("p",{className:"overviewPara"},"At H3 Staffing we work hard to understand your complex staffing needs and work efficiently to find the perfect marriage between employer and employee. ",i.a.createElement("br",null),i.a.createElement("br",null)," \u2029Having a combined total of ",i.a.createElement("strong",null,"10 years")," of Staffing experience, our mission is to build meaningful relationships. It\u2019s what we\u2019re about. ",i.a.createElement("br",null),i.a.createElement("br",null),"\u2029We\u2019ve got connections that count, experience that makes all the difference, deep working relationships that matter and the right recruiting team who\u2019s got your back.")),i.a.createElement("div",{className:"briefSect"},i.a.createElement("div",{className:"briefDiv"},i.a.createElement("h3",{className:"briefHead"},"We Provide Consistent, Professional, Quality Service"),i.a.createElement("p",{className:"briefPara"},"We do whatever it takes to build client and consultant loyalty.")),i.a.createElement("div",{className:"briefDiv"},i.a.createElement("h3",{className:"briefHead"},"We Take Care Of Our People"),i.a.createElement("p",{className:"briefPara"},"We understand that our success is because of our people.")),i.a.createElement("div",{className:"briefDiv"},i.a.createElement("h3",{className:"briefHead"},"We Work Together"),i.a.createElement("p",{className:"briefPara"},"By working as a synchronized, organized team; we are able to provide a better, more\u2029professional service than anyone else.")))),i.a.createElement("div",{className:"overviewImgSect"},i.a.createElement("img",{className:"overviewImg",src:q.a,alt:"Women sitting with computers"}))),i.a.createElement("div",{className:"briefSect2"},i.a.createElement("div",{className:"briefDiv2"},i.a.createElement("h3",{className:"briefHead2"},"We Provide Consistent, Professional, Quality Service"),i.a.createElement("p",{className:"briefPara2"},"We do whatever it takes to build client and consultant loyalty.")),i.a.createElement("div",{className:"briefDiv2"},i.a.createElement("h3",{className:"briefHead2"},"We Take Care Of Our People"),i.a.createElement("p",{className:"briefPara2"},"We understand that our success is because of our people.")),i.a.createElement("div",{className:"briefDiv2"},i.a.createElement("h3",{className:"briefHead2"},"We Work Together"),i.a.createElement("p",{className:"briefPara2"},"By working as a synchronized, organized team; we are able to provide a better, more\u2029 professional service than anyone else.")))))},P=(a(78),function(){return i.a.createElement("div",{className:"home4Mother"},i.a.createElement("div",{className:"home4Main"},i.a.createElement("div",{className:"home4HeadDiv"},i.a.createElement("h2",{className:"home4Head"},"How can we help?")),i.a.createElement("div",{className:"servicesGridDiv"},i.a.createElement("div",{className:"servicesGrid"},i.a.createElement("div",{className:"serviceDiv"},i.a.createElement("h3",{className:"serviceHead"},"Permanent Placements"),i.a.createElement("p",{className:"servicePara"},"Looking for that long term answer \u2029to be an integral part of your \u2029business?")),i.a.createElement("div",{className:"serviceDiv"},i.a.createElement("h3",{className:"serviceHead"},"Contract Services"),i.a.createElement("p",{className:"servicePara"},"Have a short term need?\u2029 Want to ensure that you have \u2029the right cultural fit to go along \u2029with the skills required?")),i.a.createElement("div",{className:"serviceDiv"},i.a.createElement("h3",{className:"serviceHead"},"Consultants"),i.a.createElement("p",{className:"servicePara"},"Whether you prefer the flexibility\u2029 of contract work, or the stability \u2029of full-time placement, we're here \u2029to help you find it.")))),i.a.createElement("div",{className:"letsTalkDiv1"},i.a.createElement("div",{className:"letsTalkHeadDiv"},i.a.createElement("h2",{className:"letsTalkHead"},"Lets make it happen.")))))}),j=(a(79),function(){return i.a.createElement("svg",{width:"12%",height:"9%",viewBox:"0 0 40 34",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",space:"preserve",serif:"http://www.serif.com/",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:2,left:"-20px",top:"-9px"}},i.a.createElement("g",{transform:"matrix(1,0.000239573,-0.000239573,1,-1.33333,0.0944216)"},i.a.createElement("text",{x:"-4.986px",y:"68.625px",style:{fontFamily:"CorsivaHebrew",fontSize:"136.383px",fill:"#4698ff"}},'"')))}),C=function(){return i.a.createElement("div",{className:"home5Mother"},i.a.createElement("div",{className:"home5Main"},i.a.createElement("div",{className:"home5HeadDiv"},i.a.createElement("h1",{className:"home5Head"},"Testimonials")),i.a.createElement("div",{className:"scrollingDiv"},[{testi:"nsectetur adipiscing elit, se do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",role:"Software Engineer"},{testi:"dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",role:"Software Engineer"},{testi:"um dolor sit amenstur adipiscing elit, se do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",role:"Software Engineer"},{testi:"uis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",role:"Software Engineer"},{testi:"Lre et dolore magna aliqua. Ut enim ad minim ve quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",role:"Software Engineer"},{testi:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, se do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qunostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. r. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",role:"Software Engineer"},{testi:"Lorem ipsum dolor sit amet, consectetuscing elit, se do eiusmod tempor incididunt ut labot dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ie velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",role:"Software Engineer"},{testi:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, se iusmod tempor indunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",role:"Software Engineer"},{testi:"Lorem ipsum dlor sit amet, consectetur adipiscing elit, se do eiusmod temp incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",role:"Software Engineer"}].map((function(e){return i.a.createElement("div",{key:e.testi,className:"testimonialBoxParent"},i.a.createElement(j,{className:"quotes"}),i.a.createElement("div",{className:"testimonialBox"},i.a.createElement("p",{className:"testimonialPara"}," ",e.testi," ")),i.a.createElement("div",{className:"testimonialRoleDiv"},i.a.createElement("p",{className:"testimonialRole"},e.role)))})))))},O=a(41),H=a(9),W=a.n(H),I=(a(80),function(){var e=Object(n.useState)([]),t=Object(x.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){W.a.get("http://localhost:5003/api/blogpost/get").then((function(e){return l(Object(O.a)(e.data))})).catch((function(e){return console.log(e)}))}),[]),i.a.createElement("div",{className:"blogMother"},i.a.createElement("div",{className:"blogMain"},i.a.createElement("h1",{className:"blogHead"},"Upcoming Events"),i.a.createElement("div",{className:"postGrid"},a.map((function(e){return i.a.createElement("div",{key:e.uid,className:"blogPost"},i.a.createElement("h2",{className:"blogTitle"},e.title),i.a.createElement("h4",{className:"blogText"},e.blog_text),i.a.createElement("h6",{className:"blogDate"},e.date_created),i.a.createElement("h6",{className:"blogTime"},e.time_created))})))))}),U=function(){return E().isLoading?i.a.createElement("div",null,"Loading..."):i.a.createElement("div",null,i.a.createElement(k,null),i.a.createElement(M,null),i.a.createElement(D,null),i.a.createElement(P,null),i.a.createElement(C,null),i.a.createElement(I,null))},B=(a(81),function(){var e=E(),t=(e.isLoading,e.user),a=e.dbUser,l=Object(n.useState)(""),r=Object(x.a)(l,2),c=r[0],o=r[1],s=Object(n.useState)(""),m=Object(x.a)(s,2),u=m[0],d=m[1],p=function(){console.log(c+" "+u+" "+a.email),W.a.get("http://localhost:5003/api/addname/".concat(c,"/").concat(u,"/").concat(t.email),{timeout:200}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),console.log("Name changed to: ".concat(c," ").concat(u))};return i.a.createElement("div",{className:"profile1Mother"},i.a.createElement("div",{className:"profile1Main"},i.a.createElement("h1",null,"null"!==a.given_name?a.given_name:a.nickname,"'s Profile"),"null"===a.given_name&&"null"===a.family_name&&i.a.createElement("form",{onSubmit:function(e){console.log("Submitting name: ".concat(c," ").concat(u)),p()},value:"Submit"},i.a.createElement("input",{className:"nameInputs",placeholder:"first name",type:"text",value:c,name:"firstname",onChange:function(e){return o(e.target.value)}}),i.a.createElement("input",{className:"nameInputs",placeholder:"last name",type:"text",value:u,name:"lastname",onChange:function(e){return d(e.target.value)}}),i.a.createElement("input",{className:"nameSubmit",placeholder:"submit",type:"submit"}))))}),A=function(){return i.a.createElement("div",null,i.a.createElement(B,null))},T=(a(82),a(16)),_=a(39),R=a.n(_),Z=function(){Object(n.useEffect)((function(){R()(["https://bb3jobboard.topechelon.com/job_board.js"])}),[]);return i.a.createElement("div",{className:"jobs1Mother"},i.a.createElement("div",{className:"jobs1Main"},i.a.createElement("button",{className:"loadJobBoardBtn",onClick:function(){window.location.reload(!0)}},"Load Job Board"),i.a.createElement("div",{id:"jb--job-board","api-key":"a933e68070daf890"})))},z=function(){return i.a.createElement("div",null,i.a.createElement(Z,null))},J=a(40),G=a(10),Y=a(20),F=a.n(Y),Q=(a(88),function(){var e=Object(n.useState)(""),t=Object(x.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(""),c=Object(x.a)(r,2),o=c[0],s=c[1],m=E(),u=(m.user,m.dbUser);Object(n.useEffect)((function(){}));return i.a.createElement("div",{className:"blogPostMother"},i.a.createElement("div",{className:"blogPostMain"},i.a.createElement("h1",{className:"blogPostHead"},"Create a Blog Post!"),i.a.createElement("form",{onSubmit:function(e){var t,n,i=(t=1e8,n=1e9,t=Math.ceil(t),n=Math.floor(n),Math.floor(Math.random()*(n-t)+n)).toString(),l=u.uid.toString(),r=F()().format("LT"),c=F()().format("MMMM Do YYYY"),s=r.replace(/\s/g,""),m=c.replace(/\//g,"-");W.a.post("http://localhost:5003/api/blogpost/post",{uid:i,user_uid:l,author:"null",title:a,blog_text:o,date_created:s,time_created:m},{timeout:300}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),e.preventDefault()}},i.a.createElement("input",{type:"text",className:"blogPostTitle",value:a,onChange:function(e){return l(e.target.value)}}),i.a.createElement("textarea",{type:"text",className:"blogPostInput",value:o,onChange:function(e){return s(e.target.value)}}),i.a.createElement("button",{type:"submit",className:"blogPostBtn"},"Post"))))}),V=function(){return i.a.createElement("div",null,i.a.createElement(Q,null))},X=function(e){var t=e.component,a=Object(J.a)(e,["component"]),n=E().user;return i.a.createElement(G.a,Object.assign({},a,{render:function(e){return n.email=i.a.createElement(t,e)}}))},$=function(){return i.a.createElement(G.c,null,i.a.createElement(G.a,{exact:!0,path:"/",component:U}),i.a.createElement(G.a,{path:"/profile",component:A}),i.a.createElement(G.a,{path:"/jobs",component:z}),i.a.createElement(X,{path:"/blogpost",component:V}))};var K=function(){return E().isLoading?i.a.createElement("div",null,"Loading..."):i.a.createElement(N.a,null,i.a.createElement("div",{className:"App"},i.a.createElement(w,null),i.a.createElement($,null),i.a.createElement(T.Helmet,null,i.a.createElement("meta",{charSet:"utf-8"}),i.a.createElement("title",null,"H3 Staffing"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(b,null,i.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[44,1,2]]]);
//# sourceMappingURL=main.9422a40f.chunk.js.map