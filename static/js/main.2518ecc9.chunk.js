(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{105:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(27),i=n.n(s),r=(n(70),n(51)),o=n(20),l=n(30),d=n(31),j=n(44),m=n(42),u=n(112),b=n(111),h=n(109),p=n(110),g=n(108),f=n.p+"static/media/react.ef20e673.png",O=n.p+"static/media/node.a8c363ae.png",x=n.p+"static/media/js.d7ba1c2a.png",v=n.p+"static/media/redux.4516fe25.jpg",y=n.p+"static/media/python.2268d87e.jpg",k=n.p+"static/media/django.c32409a0.png",w=n.p+"static/media/drf.58fdf724.png",N=n.p+"static/media/flask.1f0d2157.png",C=n.p+"static/media/jquery.47f38d67.png",S=n.p+"static/media/mysql.c49a8b32.png",T=n.p+"static/media/MongoDB.5e0d4250.jpg",_=n.p+"static/media/docker.30373a85.jpg",I=n.p+"static/media/git.ddc8ea94.jpg",D=n.p+"static/media/bootstrap.fd3cb129.png",M={javascript:{backgroundImage:x,linearGradient:L("#F7E018","#000000"),primaryColor:"#e6892e",color:"#F7E018"},react:{backgroundImage:f,linearGradient:L("#61dafb","#000000"),primaryColor:"#4479a1",color:"#000000"},node:{backgroundImage:O,linearGradient:L("#80BD01","#333333"),primaryColor:"#80BD01",color:"#333333"},python:{backgroundImage:y,linearGradient:L("#3773a7","#ffd241"),primaryColor:"#3773a7",color:"#222222"},django:{backgroundImage:k,linearGradient:L("#0c3c26","#d9c8de"),primaryColor:"#0c3c26",color:"#49D191"},drf:{backgroundImage:w,linearGradient:L("#853636","#2d2d2d"),primaryColor:"#853636",color:"#2d2d2d"},flask:{backgroundImage:N,linearGradient:L("#f3f3f3","#292d35"),primaryColor:"#292d35",color:"#2d2d2d"},jquery:{backgroundImage:C,linearGradient:L("#00598e","#ffffff"),primaryColor:"#00598e",color:"#242A31"},redux:{backgroundImage:v,linearGradient:L("#764ABD","#1E1E1E"),primaryColor:"#764ABD",color:"#1E1E1E"},mysql:{backgroundImage:S,linearGradient:L("#4479a1","#e6892e"),primaryColor:"#4479a1",color:"#e6892e"},mongodb:{backgroundImage:T,linearGradient:L("#80BD01","#e6892e"),primaryColor:"#e6892e",color:"#80BD01"},bootstrap:{backgroundImage:D,linearGradient:L("#62488a","#ffffff"),primaryColor:"#62488a",color:"#e6892e"},docker:{backgroundImage:_,linearGradient:L("#25afdd","#262c3a"),primaryColor:"#234374",color:"#262c3a"},git:{backgroundImage:I,linearGradient:L("#ffffff","#f34f36"),primaryColor:"#f34f36",color:"#000000"}};function L(e,t){return"linear-gradient(to bottom right, ".concat(e," 0%, ").concat(t," 100%)")}var E,R=n(0),A=new u.a,G=E=c.a.createContext(),B=G.Provider,q=(G.Consumer,function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state=Object(o.a)(Object(o.a)({},M.react),{},{type:"react"}),e.subscription=null,e.changeTheme=function(t){M[t]&&e.setState((function(n){return e.setThemeColors(M[t]),n.type!==t?Object(o.a)(Object(o.a)({},M[t]),{},{animate:!0,type:t}):n}))},e.stopThemeChangeTimer=function(){A.next(!1)},e.startThemeChangeTimer=function(){A.next(!0)},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.setThemeColors(M.react),this.subscription=A.pipe(Object(p.a)(!0),Object(g.a)((function(e){return e?Object(b.a)(1e4):h.a}))).subscribe((function(){for(var t=Object.keys(M),n=t[Math.floor(Math.random()*t.length)];n===e.state.type;)n=t[Math.floor(Math.random()*t.length)];e.changeTheme(n)}))}},{key:"setThemeColors",value:function(e){document.documentElement.style.setProperty("--primary-color",e.primaryColor),document.documentElement.style.setProperty("--secondary-color",e.color)}},{key:"render",value:function(){return Object(R.jsx)(B,{value:Object(o.a)(Object(o.a)({},this.state),{},{changeTheme:this.changeTheme,stopThemeChangeTimer:this.stopThemeChangeTimer,startThemeChangeTimer:this.startThemeChangeTimer}),children:this.props.children})}}]),n}(a.Component)),F=n(13);function J(){var e=Object(a.useContext)(E).type,t=Object(a.useState)(""),n=Object(F.a)(t,2),c=n[0],s=n[1],i=Object(a.useState)(null),r=Object(F.a)(i,2),o=r[0],l=r[1];return Object(a.useEffect)((function(){clearTimeout(o),s(""),setTimeout((function(){return s("fade-in")}),500),l(setTimeout((function(){return s("")}),500))}),[e,o]),{animation:c}}n(72);var P=function e(){var t=Object(a.useContext)(E).linearGradient,n=J().animation;return Object(R.jsx)("div",{className:"main ".concat(n),style:{background:t},children:Object(R.jsx)(e.Bubbles,{})})};P.Bubbles=function(){return function(e,t){for(var n=[],a=e;a<=t;a++)n.push(a);return n}(1,30).map((function(e){return Object(R.jsx)("div",{className:"bubble bubble-".concat(e)},e)}))};var W=P,H=(n(73),n(74),function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={text:"",isDeleting:!1,loopNum:1,typingSpeed:150,cursor:"|"},e.handleType=function(){var t=e.props.dataText,n=e.state,a=n.isDeleting,c=n.loopNum,s=n.text,i=n.typingSpeed,r=t[c%t.length];e.setState({text:a?r.substring(0,s.length-1):r.substring(0,s.length+1),typingSpeed:a?30:150}),a||s!==r?a&&""===s&&e.setState({isDeleting:!1,loopNum:c+1}):setTimeout((function(){return e.setState({isDeleting:!0})}),500),setTimeout(e.handleType,i)},e.handleCursor=function(){e.setState((function(e){return{cursor:"|"===e.cursor?"":"|"}})),setTimeout(e.handleCursor,300)},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.handleType(),this.handleCursor()}},{key:"render",value:function(){return Object(R.jsx)(R.Fragment,{children:Object(R.jsxs)("span",{className:"typed-text",children:[this.state.text,Object(R.jsx)("span",{className:"typed-cursor",children:this.state.cursor})]})})}}]),n}(c.a.Component)),Y=(n(75),function e(){return Object(R.jsxs)("div",{className:"social",children:[Object(R.jsx)(e.Link,{url:"https://github.com/ikbal-nayem",type:"github"}),Object(R.jsx)(e.Link,{url:"https://www.linkedin.com/in/ikbal-nayem-457758169",type:"linkedin"}),Object(R.jsx)(e.Link,{url:"https://facebook.com/ikbal.nayem",type:"facebook"}),Object(R.jsx)(e.Link,{url:"https://join.skype.com/invite/Db39pJluZnF5",type:"skype"})]})});Y.Link=function(e){var t=e.url,n=e.type;return Object(R.jsx)("a",{href:t,target:"_blank",children:Object(R.jsx)("span",{className:"fab fa-".concat(n)})})};var Z=Y,z=(n(76),function(){var e=Object(a.useContext)(E),t=e.changeTheme,n=e.startThemeChangeTimer,c=e.stopThemeChangeTimer;return Object(R.jsxs)("div",{className:"skills",children:[Object(R.jsx)("h4",{children:"Technical Skills"}),Object(R.jsxs)("ul",{onMouseEnter:c,onMouseLeave:n,onMouseOver:function(e){var n=e.nativeEvent.target.id;n&&t(n)},children:[Object(R.jsx)("li",{id:"javascript",children:"JavaScript"}),Object(R.jsx)("li",{id:"react",children:"ReactJS"}),Object(R.jsx)("li",{id:"node",children:"NodeJS"}),Object(R.jsx)("li",{id:"redux",children:"Redux"}),Object(R.jsx)("li",{id:"python",children:"Python"}),Object(R.jsx)("li",{id:"django",children:"Django"}),Object(R.jsx)("li",{id:"drf",children:"Rest_Framework"}),Object(R.jsx)("li",{id:"flask",children:"Flask"}),Object(R.jsx)("li",{id:"jquery",children:"jQuery"}),Object(R.jsx)("li",{id:"bootstrap",children:"Bootstrap"}),Object(R.jsx)("li",{id:"mysql",children:"MySQL"}),Object(R.jsx)("li",{id:"mongodb",children:"MongoDB"}),Object(R.jsx)("li",{id:"docker",children:"Docker"}),Object(R.jsx)("li",{id:"git",children:"Git"})]})]})}),V=n.p+"static/media/ami.9e896b91.jpg",X=function(){var e=Object(a.useContext)(E),t=e.backgroundImage,n=e.type,c=J().animation;return Object(R.jsxs)("div",{className:"profile",children:[Object(R.jsxs)("div",{className:"profile__banner",children:[Object(R.jsx)("div",{className:"profile__photo ".concat(c),style:{backgroundImage:"url(".concat(t,")")}}),Object(R.jsx)("img",{src:V,alt:n})]}),Object(R.jsxs)("div",{className:"profile__content",children:[Object(R.jsx)("div",{className:"profile__title",children:"Ikbal Nayem"}),Object(R.jsx)(H,{dataText:["JavaScript Developer","ReactJS Developer","NodeJS Developer","Python Developer","Django Developer","Django_rest_framework"]}),Object(R.jsx)(Z,{}),Object(R.jsx)(z,{})]})]})},Q=n(57),U=(n(84),function e(){return Object(R.jsxs)("ul",{className:"menu",children:[Object(R.jsx)(e.Item,{name:"person",link:"/about",children:"About"}),Object(R.jsx)(e.Item,{name:"android-list",link:"/resume",children:"Resume"}),Object(R.jsx)(e.Item,{name:"paintbrush",link:"/works",children:"Works"}),Object(R.jsx)(e.Item,{name:"at",link:"/contact",children:"Contact"})]})});U.Item=function(e){var t=e.link,n=void 0===t?"":t,a=e.children,c=e.name;return Object(R.jsx)("li",{children:Object(R.jsxs)(Q.NavHashLink,{smooth:!0,to:n,activeClassName:"active",exact:!0,children:[Object(R.jsx)("span",{className:"icon ion-".concat(c)}),a]})})};var $=U,K=n(47),ee=n(4),te=(n(85),n(86),function(e){var t=e.children,n=e.icon;return Object(R.jsxs)("div",{className:"title",children:[n&&Object(R.jsx)("i",{className:n}),Object(R.jsx)("h3",{children:t})]})}),ne=function(){return Object(R.jsxs)("div",{className:"page",id:"about",children:[Object(R.jsx)(te,{children:"About Me"}),Object(R.jsx)("div",{className:"row",children:Object(R.jsxs)("div",{className:"column",children:[Object(R.jsx)("strong",{children:"Hi, I am Ikbal Hossain Nayem"}),Object(R.jsxs)("p",{children:["Self-taught, self-driven, passionate learner and developer focusing on Python, Django, Django Rest Framework, React, Mysql Technologies. Looking forward to working with ingenious teams on challenging projects.",Object(R.jsx)("br",{})," ",Object(R.jsx)("br",{}),"I\u2019m an easy going person that works well with everyone. I enjoy being around different types of people and I like to always challenge myself to improve at everything I do.",Object(R.jsx)("br",{}),Object(R.jsx)("br",{}),"I have a great passion for learning languages and exploring the world and also programming. I have always loved technology and programming. And this is my profession now."]})]})}),Object(R.jsx)(te,{children:"My philosophy of programming"}),Object(R.jsx)("div",{className:"row",children:Object(R.jsx)("div",{className:"column",children:Object(R.jsx)("p",{children:"I have a deep understanding of how JavaScript and Python works. I strongly believe that having a solid understanding of core technologies allows developers to master at any frameworks."})})})]})},ae=n(58),ce=n.n(ae),se=n(59),ie=n.n(se),re=(n(88),n(89),function(e){var t=e.date,n=e.title,a=e.company,c=e.children,s=e.logo,i=e.classNames,r=void 0===i?"":i;return Object(R.jsxs)("div",{className:"resume-item ".concat(r),children:[Object(R.jsxs)("div",{className:"resume-item__experience",children:[Object(R.jsxs)("div",{children:[Object(R.jsx)("div",{className:"resume-item__date",children:t}),Object(R.jsxs)("div",{className:"resume-item__company",children:[Object(R.jsx)("p",{children:n}),Object(R.jsx)("h3",{children:a})]})]}),Object(R.jsx)("img",{src:s,alt:""})]}),Object(R.jsx)("p",{className:"resume-item__desc",children:c})]})}),oe=n.p+"static/media/Ikbal-Nayem.3f60c59d.pdf",le=function(){return Object(R.jsxs)("div",{className:"page",id:"resume",children:[Object(R.jsxs)(te,{icon:"fa fa-briefcase",children:["Resume - Total Experience ",ie()().diff("08/01/2020","years",!0).toFixed(2)," years"]}),Object(R.jsxs)(re,{date:"Aug 2020 - Present",title:"Jr. React Developer",company:"Nice Power and IT Solution LTD",logo:"https://www.nicegroupbd.com/images/icone.png",children:["\u2022 Developing and implementing front-end architecture to support user interface concepts",Object(R.jsx)("br",{}),"\u2022 Implemented ReactJS code to handle cross browser compatibility issues in Mozilla, IE 7, 8, 9, Safari",Object(R.jsx)("br",{}),"\u2022 Writing application interface codes using JavaScript following React.js workflows",Object(R.jsx)("br",{}),"\u2022 Modifying software to fix errors, adapt it to new hardware, improve its performance, or upgrade interfaces",Object(R.jsx)("br",{}),"\u2022 Developing and implementing highly-responsive user interface components using React concepts",Object(R.jsx)("br",{}),"\u2022 Reviewing application requirements and interface designs"]}),Object(R.jsx)(te,{icon:"fa fa-university",children:"Education"}),Object(R.jsx)(re,{date:"2016 \u2013 2020",title:"National University",company:"",logo:"https://seeklogo.com/images/N/national-university-of-bangladesh-logo-105B0CD1FD-seeklogo.com.png",children:"Bachelor of Science in Computer Science and Engineering"}),Object(R.jsx)("div",{className:"download",children:Object(R.jsxs)("button",{className:"download__btn",onClick:function(){return ce()(oe)},children:["Download CV ",Object(R.jsx)("i",{className:"fa fa-download"})]})})]})},de=[{title:"Smart-School",description:"A school management system software using django in backend and ReactJS in frontend.",images:["https://i.ibb.co/7vhVqHW/smart-school-1.png","https://i.ibb.co/dBXNPTF/Smart-school-2.png","https://i.ibb.co/sjYMNM6/smart-school-3.png"],sourceCodeLink:"https://github.com/ikbal-nayem/smart-school/tree/frontend",demoLink:"https://smart-school-3bdcf.web.app/student/newstudent",type:"react"},{title:"Desktop Security",description:"A messenger bot which will keep track and control over a computer with the help of a little application written in python. This application will run in background. A user can handle his/her computer from anyware in the world with the help of messenger bot which is also written in flask (python).",images:["https://i.ibb.co/YTLtyqz/desptop-security-1.png","https://i.ibb.co/gFLTjW9/desktop-security-2.png"],sourceCodeLink:"https://sourceforge.net/p/desktop-security/wiki/Documentation/",demoLink:"https://www.messenger.com/t/desktop404",type:"python"},{title:"Smart-School",description:"A school management system software using django in backend and ReactJS in frontend.",images:["https://i.ibb.co/sjYMNM6/smart-school-3.png","https://i.ibb.co/dBXNPTF/Smart-school-2.png","https://i.ibb.co/7vhVqHW/smart-school-1.png"],sourceCodeLink:"https://github.com/ikbal-nayem/smart-school",demoLink:"https://smart-school-django.herokuapp.com/api/class/",type:"django"},{title:"Class Captain",description:"A messenger bot which is deliver overall class information such as Assignment, Suggestion, Exam date etc. to all student in a class approved by admin(Class captain).",images:["https://i.ibb.co/d7LBGrf/class-captain-1.png","https://i.ibb.co/34RCzWg/class-captain-3.png","https://i.ibb.co/0GvjTjb/class-captain-2.png"],sourceCodeLink:"https://github.com/ikbal-nayem/class-captain",demoLink:"https://www.messenger.com/t/107595967464218",type:"python"}],je=(n(90),n(60)),me=(n(91),n(92),function(e){for(var t=e.len,n=e.activeItem,a=e.changeItem,c=[],s=function(e){var t="owl-dot";n===e&&(t+=" active"),c.push(Object(R.jsx)("button",{onClick:function(){a(e)},className:t,children:Object(R.jsx)("span",{})}))},i=0;i<t;i++)s(i);return Object(R.jsx)("div",{className:"owl-dots",children:c})}),ue=function(e){var t=e.classNames,n=e.images,c=Object(a.useRef)(),s=Object(a.useState)(n[0]),i=Object(F.a)(s,2),r=i[0],o=i[1],l=Object(a.useState)(0),d=Object(F.a)(l,2),j=d[0],m=d[1],u=function(e){var t=("touchmove"===e.type?e.touches[0].clientX:e.clientX)-c.current.getBoundingClientRect().left,a=c.current.clientWidth/n.length,s=Math.ceil(t/a)-1;s<0&&(s=0),s>=n.length&&(s=n.length-1),m(s),o(n[s])},b=function(e){o(n[0]),m(0)};return Object(R.jsxs)("div",{ref:c,className:t,style:{position:"relative"},children:[Object(R.jsx)(je.LazyLoadImage,{src:r,alt:"works",effect:"blur",onMouseMove:u,onMouseOut:b,onTouchMove:u,onTouchEnd:b}),Object(R.jsx)(me,{len:n.length,activeItem:j,changeItem:function(e){o(n[e]),m(e)}})]})},be=function(e){var t=e.images,n=e.title,a=e.description,s=e.sourceCodeLink,i=e.demoLink;return Object(R.jsx)(c.a.Fragment,{children:Object(R.jsxs)("div",{className:"work-item",children:[Object(R.jsx)("h2",{children:n}),Object(R.jsx)("hr",{}),Object(R.jsx)(ue,{images:t,classNames:"work-item__slider"}),Object(R.jsx)("i",{children:a}),Object(R.jsxs)("div",{className:"work-item__links",children:[Object(R.jsxs)("a",{href:s,className:"work-item__source-code",children:[Object(R.jsx)("i",{className:"fas fa-code"}),"Source Code"]}),Object(R.jsxs)("a",{href:i,className:"work-item__demo",children:[Object(R.jsx)("i",{className:"fas fa-rocket"}),"Demo"]})]})]})})},he=(n(93),function(e){var t=e.items,n=e.selected,a=e.clicked;return Object(R.jsx)("div",{className:"works-menu",children:t.map((function(e){return Object(R.jsx)("button",{className:n===e?"active":"",onClick:function(){return a(e)},children:e},e)}))})}),pe=de.filter((function(e){return"react"===e.type})),ge=function(){var e=Object(a.useState)(pe),t=Object(F.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)("react"),i=Object(F.a)(s,2),r=i[0],l=i[1];return Object(R.jsxs)("div",{className:"page",id:"works",children:[Object(R.jsx)(he,{items:["django","react","python"],selected:r,clicked:function(e){c(de.filter((function(t){return t.type===e}))),l(e)}}),Object(R.jsx)("div",{className:"row",children:n.map((function(e){return Object(R.jsx)(be,Object(o.a)({},e),e.sourceCodeLink)}))})]})},fe=n(50),Oe=n.n(fe),xe=n(61),ve=n(65),ye=n(64),ke=n.n(ye),we=(n(97),function(){var e=Object(a.useState)(""),t=Object(F.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),i=Object(F.a)(s,2),r=i[0],o=i[1],l=Object(ve.a)({initialValues:{name:"",email:"",subject:"",message:""},validate:function(e){var t={};return e.name||(t.name="Required"),e.subject||(t.subject="Required"),e.message||(t.message="Required"),e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",t},onSubmit:function(e){return Object(xe.a)(Oe.a.mark((function t(){return Oe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ke.a.send("service_iyiyjnp","template_1q7d53b",e,"user_OQ0o4C7g4PlZJf5Ak91Sw");case 3:l.resetForm(),c("Thank you! Your message has been successfully sent"),setTimeout((function(){c("")}),5e3),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),o("Something went wrong while sending your message!"),setTimeout((function(){o("")}),5e3);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})))()}});function d(e){var t=e.name;return l.errors[t]?Object(R.jsx)("div",{className:"contact-form__err",children:l.errors[t]}):null}return Object(R.jsxs)("form",{onSubmit:l.handleSubmit,children:[Object(R.jsxs)("div",{className:"contact-form",children:[Object(R.jsxs)("div",{className:"contact-form__control",children:[Object(R.jsx)("input",{value:l.values.name,onChange:l.handleChange,type:"text",placeholder:"Full Name",name:"name"}),Object(R.jsx)(d,{name:"name"})]}),Object(R.jsxs)("div",{className:"contact-form__control",children:[Object(R.jsx)("input",{value:l.values.email,onChange:l.handleChange,type:"text",placeholder:"Email Address",name:"email"}),Object(R.jsx)(d,{name:"email"})]}),Object(R.jsxs)("div",{className:"contact-form__control full-row",children:[Object(R.jsx)("input",{value:l.values.subject,onChange:l.handleChange,className:"subject",type:"text",placeholder:"Subject",name:"subject"}),Object(R.jsx)(d,{name:"subject"})]}),Object(R.jsxs)("div",{className:"contact-form__control full-row",children:[Object(R.jsx)("textarea",{value:l.values.message,onChange:l.handleChange,placeholder:"Your Message",name:"message"}),Object(R.jsx)(d,{name:"message"})]})]}),Object(R.jsx)("button",{className:"send-message",type:"submit",children:"SEND MESSAGE"}),Object(R.jsxs)("div",{className:"contact-form__result",children:[n&&Object(R.jsxs)("span",{className:"contact-form__scc",children:[" ",n," "]}),r&&Object(R.jsxs)("span",{className:"contact-form__scc",children:[" ",r," "]})]})]})}),Ne=function(){return Object(R.jsxs)("div",{className:"page",id:"contact",children:[Object(R.jsx)(te,{children:"Contact Me"}),Object(R.jsx)(we,{})]})};var Ce=Object(ee.o)((function(e){var t=e.location;return Object(R.jsx)(r.TransitionGroup,{className:"transition-wrapper",children:Object(R.jsx)(r.CSSTransition,{classNames:"transition",timeout:1e3,unmountOnExit:!0,children:Object(R.jsxs)(ee.g,{children:[Object(R.jsx)(ee.c,{to:"/resume",from:"/",exact:!0}),Object(R.jsx)(ee.d,{exact:!0,path:"/about",children:Object(R.jsx)(ne,{})}),Object(R.jsx)(ee.d,{exact:!0,path:"/resume",children:Object(R.jsx)(le,{})}),Object(R.jsx)(ee.d,{exact:!0,path:"/works",children:Object(R.jsx)(ge,{})}),Object(R.jsx)(ee.d,{exact:!0,path:"/contact",children:Object(R.jsx)(Ne,{})})]})},t.pathname)})})),Se=function(){return Object(R.jsx)(c.a.Fragment,{children:Object(R.jsxs)("div",{className:"page-wrap",children:[Object(R.jsx)(W,{}),Object(R.jsx)(K.HashRouter,{children:Object(R.jsxs)("div",{className:"container",children:[Object(R.jsx)($,{}),Object(R.jsx)(X,{}),Object(R.jsx)(Ce,{})]})})]})})};i.a.render(Object(R.jsx)(c.a.StrictMode,{children:Object(R.jsx)(q,{children:Object(R.jsx)(Se,{})})}),document.getElementById("root"))},70:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},97:function(e,t,n){}},[[105,1,2]]]);
//# sourceMappingURL=main.2518ecc9.chunk.js.map