(this.webpackJsonpPortfolio=this.webpackJsonpPortfolio||[]).push([[0],{106:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),s=n.n(c),i=n(27),r=n.n(i),o=(n(70),n(51)),l=n(20),d=n(30),j=n(31),m=n(44),u=n(42),b=n(113),h=n(112),p=n(110),f=n(111),g=n(109),O=n.p+"static/media/react.ef20e673.png",x=n.p+"static/media/node.a8c363ae.png",v=n.p+"static/media/js.e35fa00e.png",y=n.p+"static/media/redux.4516fe25.jpg",k=n.p+"static/media/python.b3530ca9.jpg",w=n.p+"static/media/django.c32409a0.png",N=n.p+"static/media/drf.58fdf724.png",C=n.p+"static/media/flask.1f0d2157.png",T=n.p+"static/media/jquery.2aafa853.png",S=n.p+"static/media/mysql.4676ad98.png",_=n.p+"static/media/c.e6a0c0de.jpg",I=n.p+"static/media/cpp.8eb73fde.jpg",L=n.p+"static/media/bootstrap.fd3cb129.png",D={python:{backgroundImage:k,linearGradient:E("#3773a7","#ffd241"),primaryColor:"#3773a7",color:"#222222"},django:{backgroundImage:w,linearGradient:E("#0c3c26","#d9c8de"),primaryColor:"#0c3c26",color:"#49D191"},drf:{backgroundImage:N,linearGradient:E("#853636","#2d2d2d"),primaryColor:"#853636",color:"#2d2d2d"},flask:{backgroundImage:C,linearGradient:E("#f3f3f3","#292d35"),primaryColor:"#292d35",color:"#2d2d2d"},react:{backgroundImage:O,linearGradient:E("#61dafb","#222222"),primaryColor:"#61dafb",color:"#222222"},node:{backgroundImage:x,linearGradient:E("#80BD01","#333333"),primaryColor:"#80BD01",color:"#80BD01"},javascript:{backgroundImage:v,linearGradient:E("#F7E018","#000000"),primaryColor:"#F7E018",color:"#000000"},jquery:{backgroundImage:T,linearGradient:E("#00598e","#ffffff"),primaryColor:"#00598e",color:"#242A31"},redux:{backgroundImage:y,linearGradient:E("#764ABD","#1E1E1E"),primaryColor:"#764ABD",color:"#1E1E1E"},mysql:{backgroundImage:S,linearGradient:E("#4479a1","#e6892e"),primaryColor:"#4479a1",color:"#e6892e"},bootstrap:{backgroundImage:L,linearGradient:E("#62488a","#ffffff"),primaryColor:"#62488a",color:"#e6892e"},cpp:{backgroundImage:I,linearGradient:E("#234374","#262c3a"),primaryColor:"#234374",color:"#262c3a"},c:{backgroundImage:_,linearGradient:E("#3f47cc","#fefefe"),primaryColor:"#3f47cc",color:"#e6892e"}};function E(e,t){return"linear-gradient(to bottom right, ".concat(e," 0%, ").concat(t," 100%)")}var M,A=new b.a,R=M=s.a.createContext(),F=R.Provider,G=(R.Consumer,function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state=Object(l.a)(Object(l.a)({},D.react),{},{type:"react"}),e.subscription=null,e.changeTheme=function(t){D[t]&&e.setState((function(n){return e.setThemeColors(D[t]),n.type!==t?Object(l.a)(Object(l.a)({},D[t]),{},{animate:!0,type:t}):n}))},e.stopThemeChangeTimer=function(){A.next(!1)},e.startThemeChangeTimer=function(){A.next(!0)},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.setThemeColors(D.react),this.subscription=A.pipe(Object(f.a)(!0),Object(g.a)((function(e){return e?Object(h.a)(1e4):p.a}))).subscribe((function(){for(var t=Object.keys(D),n=t[Math.floor(Math.random()*t.length)];n===e.state.type;)n=t[Math.floor(Math.random()*t.length)];e.changeTheme(n)}))}},{key:"setThemeColors",value:function(e){document.documentElement.style.setProperty("--primary-color",e.primaryColor),document.documentElement.style.setProperty("--secondary-color",e.color)}},{key:"render",value:function(){return Object(a.jsx)(F,{value:Object(l.a)(Object(l.a)({},this.state),{},{changeTheme:this.changeTheme,stopThemeChangeTimer:this.stopThemeChangeTimer,startThemeChangeTimer:this.startThemeChangeTimer}),children:this.props.children})}}]),n}(c.Component)),P=n(9);function q(){var e=Object(c.useContext)(M).type,t=Object(c.useState)(""),n=Object(P.a)(t,2),a=n[0],s=n[1],i=Object(c.useState)(null),r=Object(P.a)(i,2);r[0],r[1];return Object(c.useEffect)((function(){s(""),setTimeout((function(){return s("fade-in")}),500)}),[e]),{animation:a}}n(71);var B=function e(){var t=Object(c.useContext)(M).linearGradient,n=q().animation;return Object(a.jsx)("div",{className:"main ".concat(n),style:{background:t},children:Object(a.jsx)(e.Bubbles,{})})};B.Bubbles=function(){return function(e,t){for(var n=[],a=e;a<=t;a++)n.push(a);return n}(1,30).map((function(e){return Object(a.jsx)("div",{className:"bubble bubble-".concat(e)},e)}))};var J=B,W=(n(72),n(73),function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={text:"",isDeleting:!1,loopNum:1,typingSpeed:150,cursor:"|"},e.handleType=function(){var t=e.props.dataText,n=e.state,a=n.isDeleting,c=n.loopNum,s=n.text,i=n.typingSpeed,r=t[c%t.length];e.setState({text:a?r.substring(0,s.length-1):r.substring(0,s.length+1),typingSpeed:a?30:150}),a||s!==r?a&&""===s&&e.setState({isDeleting:!1,loopNum:c+1}):setTimeout((function(){return e.setState({isDeleting:!0})}),500),setTimeout(e.handleType,i)},e.handleCursor=function(){e.setState((function(e){return{cursor:"|"===e.cursor?"":"|"}})),setTimeout(e.handleCursor,300)},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.handleType(),this.handleCursor()}},{key:"render",value:function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("span",{className:"typed-text",children:[this.state.text,Object(a.jsx)("span",{className:"typed-cursor",children:this.state.cursor})]})})}}]),n}(s.a.Component)),H=(n(74),function e(){return Object(a.jsxs)("div",{className:"social",children:[Object(a.jsx)(e.Link,{url:"https://github.com/ikbal-nayem",type:"github"}),Object(a.jsx)(e.Link,{url:"https://www.linkedin.com/in/ikbal-nayem-457758169",type:"linkedin"}),Object(a.jsx)(e.Link,{url:"https://facebook.com/ikbal.nayem",type:"facebook"}),Object(a.jsx)(e.Link,{url:"https://join.skype.com/invite/Db39pJluZnF5",type:"skype"})]})});H.Link=function(e){var t=e.url,n=e.type;return Object(a.jsx)("a",{href:t,target:"_blank",children:Object(a.jsx)("span",{className:"fab fa-".concat(n)})})};var Y=H,X=(n(75),n(76),function(){var e=Object(c.useContext)(M),t=e.changeTheme,n=e.startThemeChangeTimer,s=e.stopThemeChangeTimer;return Object(a.jsxs)("div",{className:"skills",children:[Object(a.jsx)("h6",{children:"Skills"}),Object(a.jsxs)("ul",{onMouseEnter:s,onMouseLeave:n,onMouseOver:function(e){var n=e.nativeEvent.target.id;n&&t(n)},children:[Object(a.jsx)("li",{id:"python",children:"Python"}),Object(a.jsx)("li",{id:"django",children:"Django"}),Object(a.jsx)("li",{id:"drf",children:"Rest_Framework"}),Object(a.jsx)("li",{id:"flask",children:"Flask"}),Object(a.jsx)("li",{id:"react",children:"React"}),Object(a.jsx)("li",{id:"redux",children:"Redux"}),Object(a.jsx)("li",{id:"jquery",children:"jQuery"}),Object(a.jsx)("li",{id:"node",children:"Node"}),Object(a.jsx)("li",{id:"javascript",children:"JavaScript"}),Object(a.jsx)("li",{id:"bootstrap",children:"Bootstrap"}),Object(a.jsx)("li",{id:"mysql",children:"MySQL"}),Object(a.jsx)("li",{id:"c",children:"C"}),Object(a.jsx)("li",{id:"cpp",children:"C++"})]})]})}),Z=n.p+"static/media/ami.fc318601.jpg",z=function(){var e=Object(c.useContext)(M),t=e.backgroundImage,n=e.type,s=q().animation;return Object(a.jsxs)("div",{className:"profile",children:[Object(a.jsxs)("div",{className:"profile__banner",children:[Object(a.jsx)("div",{className:"profile__photo ".concat(s),style:{backgroundImage:"url(".concat(t,")")}}),Object(a.jsx)("img",{src:Z,alt:n})]}),Object(a.jsxs)("div",{className:"profile__content",children:[Object(a.jsx)("div",{className:"profile__title",children:"Ikbal Nayem"}),Object(a.jsx)(W,{dataText:["Python Development","Django Development","Django_rest_framework","React Development","JavaScript Development"]}),Object(a.jsx)(Y,{}),Object(a.jsx)(X,{})]})]})},Q=n(57),V=(n(84),function e(){return Object(a.jsxs)("ul",{className:"menu",children:[Object(a.jsx)(e.Item,{name:"person",link:"/#about",children:"About"}),Object(a.jsx)(e.Item,{name:"android-list",link:"/resume#resume",children:"Resume"}),Object(a.jsx)(e.Item,{name:"paintbrush",link:"/works#works",children:"Works"}),Object(a.jsx)(e.Item,{name:"at",link:"/contact#contact",children:"Contact"})]})});V.Item=function(e){var t=e.link,n=void 0===t?"#":t,c=e.children,s=e.name;return Object(a.jsx)("li",{children:Object(a.jsxs)(Q.NavHashLink,{smooth:!0,to:n,activeClassName:"active",exact:!0,children:[Object(a.jsx)("span",{className:"icon ion-".concat(s)}),c]})})};var U=V,$=n(47),K=n(4),ee=(n(85),n(86),function(e){var t=e.children,n=e.icon;return Object(a.jsxs)("div",{className:"title",children:[n&&Object(a.jsx)("i",{className:n}),Object(a.jsx)("h3",{children:t})]})}),te=function(){return Object(a.jsxs)("div",{className:"page",id:"about",children:[Object(a.jsx)(ee,{children:"About Me"}),Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"column",children:[Object(a.jsx)("strong",{children:"Hi, I am Ikbal Hossain Nayem"}),Object(a.jsxs)("p",{children:["Self-taught, self-driven, passionate learner and developer focusing on Python, Django, Django Rest Framework, React, Mysql Technologies. Looking forward to working with ingenious teams on challenging projects.",Object(a.jsx)("br",{})," ",Object(a.jsx)("br",{}),"I\u2019m an easy going person that works well with everyone. I enjoy being around different types of people and I like to always challenge myself to improve at everything I do.",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"I have a great passion for learning languages and exploring the world and also programming. I have always loved technology and programming. And this is my profession now."]})]})}),Object(a.jsx)(ee,{children:"My philosophy of programming"}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"column",children:Object(a.jsx)("p",{children:"I have a deep understanding of how JavaScript and Python works. I strongly believe that having a solid understanding of core technologies allows developers to master at any frameworks."})})})]})},ne=n(58),ae=n.n(ne),ce=(n(88),n(89),function(e){var t=e.date,n=e.title,c=e.company,s=e.children,i=e.logo,r=e.classNames,o=void 0===r?"":r;return Object(a.jsxs)("div",{className:"resume-item ".concat(o),children:[Object(a.jsxs)("div",{className:"resume-item__experience",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"resume-item__date",children:t}),Object(a.jsxs)("div",{className:"resume-item__company",children:[Object(a.jsx)("p",{children:n}),Object(a.jsx)("h3",{children:c})]})]}),Object(a.jsx)("img",{src:i,alt:""})]}),Object(a.jsx)("p",{className:"resume-item__desc",children:s})]})}),se=function(){return Object(a.jsxs)("div",{className:"page",id:"resume",children:[Object(a.jsxs)(ee,{icon:"fa fa-briefcase",children:["Resume - Total Commercial Experience ",ae()().diff("08/01/2020","years",!0).toFixed(2)," years"]}),Object(a.jsxs)(ce,{date:"Aug 2020 - Present",title:"Jr. Programmer",company:"Nice Power and IT Solution LTD",logo:"https://www.nicegroupbd.com/images/icone.png",children:["\u2022 Work on front-end with extensive use of React, Material-UI, Redux etc.",Object(a.jsx)("br",{}),"\u2022 Work on mobile application with use of React-Native",Object(a.jsx)("br",{}),"\u2022 Develop several management system."]}),Object(a.jsx)(ee,{icon:"fa fa-university",children:"Education"}),Object(a.jsx)(ce,{date:"2016 \u2013 2020",title:"National University",company:"",logo:"http://www.nu.ac.bd/assets/images/logo.png",children:"Bachelor of Science in Computer Science and Engineering"}),Object(a.jsx)("div",{className:"download",children:Object(a.jsxs)("a",{href:"https://drive.google.com/file/d/19mMozCLwcoayBEUxl7X3gdRlJe5Sy0Q3/view",target:"_blank",rel:"noreferrer",className:"download__btn",children:["Download CV ",Object(a.jsx)("i",{className:"fa fa-download"})]})})]})},ie=[{title:"Smart-School",description:"A school management system software using django in backend and ReactJS in frontend.",images:["https://i.ibb.co/7vhVqHW/smart-school-1.png","https://i.ibb.co/dBXNPTF/Smart-school-2.png","https://i.ibb.co/sjYMNM6/smart-school-3.png"],sourceCodeLink:"https://github.com/ikbal-nayem/smart-school/tree/frontend",demoLink:"https://smart-school-3bdcf.web.app/student/newstudent",type:"react"},{title:"Desktop Security",description:"A messenger bot which will keep track and control over a computer with the help of a little application written in python. This application will run in background. A user can handle his/her computer from anyware in the world with the help of messenger bot which is also written in flask (python).",images:["https://i.ibb.co/YTLtyqz/desptop-security-1.png","https://i.ibb.co/gFLTjW9/desktop-security-2.png"],sourceCodeLink:"https://sourceforge.net/p/desktop-security/wiki/Documentation/",demoLink:"https://www.messenger.com/t/desktop404",type:"python"},{title:"Smart-School",description:"A school management system software using django in backend and ReactJS in frontend.",images:["https://i.ibb.co/sjYMNM6/smart-school-3.png","https://i.ibb.co/dBXNPTF/Smart-school-2.png","https://i.ibb.co/7vhVqHW/smart-school-1.png"],sourceCodeLink:"https://github.com/ikbal-nayem/smart-school",demoLink:"https://smart-school-django.herokuapp.com/api/class/",type:"django"},{title:"Class Captain",description:"A messenger bot which is deliver overall class information such as Assignment, Suggestion, Exam date etc. to all student in a class approved by admin(Class captain).",images:["https://i.ibb.co/d7LBGrf/class-captain-1.png","https://i.ibb.co/34RCzWg/class-captain-3.png","https://i.ibb.co/0GvjTjb/class-captain-2.png"],sourceCodeLink:"https://github.com/ikbal-nayem/class-captain",demoLink:"https://www.messenger.com/t/107595967464218",type:"python"}],re=(n(90),n(59)),oe=(n(91),n(92),function(e){for(var t=e.len,n=e.activeItem,c=e.changeItem,s=[],i=function(e){var t="owl-dot";n===e&&(t+=" active"),s.push(Object(a.jsx)("button",{onClick:function(){c(e)},className:t,children:Object(a.jsx)("span",{})}))},r=0;r<t;r++)i(r);return Object(a.jsx)("div",{className:"owl-dots",children:s})}),le=function(e){var t=e.classNames,n=e.images,s=Object(c.useRef)(),i=Object(c.useState)(n[0]),r=Object(P.a)(i,2),o=r[0],l=r[1],d=Object(c.useState)(0),j=Object(P.a)(d,2),m=j[0],u=j[1],b=function(e){var t=("touchmove"===e.type?e.touches[0].clientX:e.clientX)-s.current.getBoundingClientRect().left,a=s.current.clientWidth/n.length,c=Math.ceil(t/a)-1;c<0&&(c=0),c>=n.length&&(c=n.length-1),u(c),l(n[c])},h=function(e){l(n[0]),u(0)};return Object(a.jsxs)("div",{ref:s,className:t,style:{position:"relative"},children:[Object(a.jsx)(re.LazyLoadImage,{src:o,alt:"works",effect:"blur",onMouseMove:b,onMouseOut:h,onTouchMove:b,onTouchEnd:h}),Object(a.jsx)(oe,{len:n.length,activeItem:m,changeItem:function(e){l(n[e]),u(e)}})]})},de=function(e){var t=e.images,n=e.title,c=e.description,i=e.sourceCodeLink,r=e.demoLink;return Object(a.jsx)(s.a.Fragment,{children:Object(a.jsxs)("div",{className:"work-item",children:[Object(a.jsx)("h2",{children:n}),Object(a.jsx)("hr",{}),Object(a.jsx)(le,{images:t,classNames:"work-item__slider"}),Object(a.jsx)("i",{children:c}),Object(a.jsxs)("div",{className:"work-item__links",children:[Object(a.jsxs)("a",{href:i,className:"work-item__source-code",children:[Object(a.jsx)("i",{className:"fas fa-code"}),"Source Code"]}),Object(a.jsxs)("a",{href:r,className:"work-item__demo",children:[Object(a.jsx)("i",{className:"fas fa-rocket"}),"Demo"]})]})]})})},je=(n(93),function(e){var t=e.items,n=e.selected,c=e.clicked;return Object(a.jsx)("div",{className:"works-menu",children:t.map((function(e){return Object(a.jsx)("button",{className:n===e?"active":"",onClick:function(){return c(e)},children:e},e)}))})}),me=ie.filter((function(e){return"react"===e.type})),ue=function(){var e=Object(c.useState)(me),t=Object(P.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)("react"),r=Object(P.a)(i,2),o=r[0],d=r[1];return Object(a.jsxs)("div",{className:"page",id:"works",children:[Object(a.jsx)(je,{items:["django","react","python"],selected:o,clicked:function(e){s(ie.filter((function(t){return t.type===e}))),d(e)}}),Object(a.jsx)("div",{className:"row",children:n.map((function(e){return Object(a.jsx)(de,Object(l.a)({},e),e.sourceCodeLink)}))})]})},be=n(50),he=n.n(be),pe=n(60),fe=n(64),ge=n(63),Oe=n.n(ge),xe=(n(97),function(){var e=Object(c.useState)(""),t=Object(P.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)(""),r=Object(P.a)(i,2),o=r[0],l=r[1],d=Object(fe.a)({initialValues:{name:"",email:"",subject:"",message:""},validate:function(e){var t={};return e.name||(t.name="Required"),e.subject||(t.subject="Required"),e.message||(t.message="Required"),e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",t},onSubmit:function(e){return Object(pe.a)(he.a.mark((function t(){return he.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Oe.a.send("service_iyiyjnp","template_1q7d53b",e,"user_OQ0o4C7g4PlZJf5Ak91Sw");case 3:d.resetForm(),s("Thank you! Your message has been successfully sent"),setTimeout((function(){s("")}),5e3),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),l("Something went wrong while sending your message!"),setTimeout((function(){l("")}),5e3);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})))()}});function j(e){var t=e.name;return d.errors[t]?Object(a.jsx)("div",{className:"contact-form__err",children:d.errors[t]}):null}return Object(a.jsxs)("form",{onSubmit:d.handleSubmit,children:[Object(a.jsxs)("div",{className:"contact-form",children:[Object(a.jsxs)("div",{className:"contact-form__control",children:[Object(a.jsx)("input",{value:d.values.name,onChange:d.handleChange,type:"text",placeholder:"Full Name",name:"name"}),Object(a.jsx)(j,{name:"name"})]}),Object(a.jsxs)("div",{className:"contact-form__control",children:[Object(a.jsx)("input",{value:d.values.email,onChange:d.handleChange,type:"text",placeholder:"Email Address",name:"email"}),Object(a.jsx)(j,{name:"email"})]}),Object(a.jsxs)("div",{className:"contact-form__control full-row",children:[Object(a.jsx)("input",{value:d.values.subject,onChange:d.handleChange,className:"subject",type:"text",placeholder:"Subject",name:"subject"}),Object(a.jsx)(j,{name:"subject"})]}),Object(a.jsxs)("div",{className:"contact-form__control full-row",children:[Object(a.jsx)("textarea",{value:d.values.message,onChange:d.handleChange,placeholder:"Your Message",name:"message"}),Object(a.jsx)(j,{name:"message"})]})]}),Object(a.jsx)("button",{className:"send-message",type:"submit",children:"SEND MESSAGE"}),Object(a.jsxs)("div",{className:"contact-form__result",children:[n&&Object(a.jsxs)("span",{className:"contact-form__scc",children:[" ",n," "]}),o&&Object(a.jsxs)("span",{className:"contact-form__scc",children:[" ",o," "]})]})]})}),ve=function(){return Object(a.jsxs)("div",{className:"page",id:"contact",children:[Object(a.jsx)(ee,{children:"Contact Me"}),Object(a.jsx)(xe,{})]})},ye=(n(98),function e(){var t=document.documentElement.scrollTop||document.body.scrollTop;t>0&&(window.requestAnimationFrame(e),window.scrollTo(0,t-t/10))}),ke=function(){var e=Object(c.useState)(""),t=Object(P.a)(e,2),n=t[0],s=t[1];return Object(c.useEffect)((function(){function e(e){window.scrollY>0?s("show"):s("hide")}return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]),Object(a.jsx)("div",{onClick:ye,className:"back-to-top ".concat(n),children:Object(a.jsx)("i",{className:"fas fa-arrow-circle-up"})})};var we=Object(K.o)((function(e){var t=e.location;return Object(a.jsx)(o.TransitionGroup,{className:"transition-wrapper",children:Object(a.jsx)(o.CSSTransition,{classNames:"transition",timeout:1e3,unmountOnExit:!0,children:Object(a.jsxs)(K.g,{children:[Object(a.jsx)(K.d,{exact:!0,path:"/",children:Object(a.jsx)(te,{})}),Object(a.jsx)(K.d,{exact:!0,path:"/resume",children:Object(a.jsx)(se,{})}),Object(a.jsx)(K.d,{exact:!0,path:"/works",children:Object(a.jsx)(ue,{})}),Object(a.jsx)(K.d,{exact:!0,path:"/contact",children:Object(a.jsx)(ve,{})})]})},t.pathname)})})),Ne=function(){return Object(a.jsxs)(s.a.Fragment,{children:[Object(a.jsx)(ke,{}),Object(a.jsxs)("div",{className:"page-wrap",children:[Object(a.jsx)(J,{}),Object(a.jsx)($.HashRouter,{children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(U,{}),Object(a.jsx)(z,{}),Object(a.jsx)(we,{})]})})]})]})},Ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,114)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(G,{children:Object(a.jsx)(Ne,{})})}),document.getElementById("root")),Ce()},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){}},[[106,1,2]]]);
//# sourceMappingURL=main.d5ca84ee.chunk.js.map