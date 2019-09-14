(window.webpackJsonpresume=window.webpackJsonpresume||[]).push([[0],{13:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(7),l=t.n(i),o=(t(13),t(1)),s=t(2),c=t(4),m=t(3),d=t(5),u=function(e){function a(){return Object(o.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{id:"home"},r.a.createElement("nav",{id:"nav-wrap"},r.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"}," Show navigation "),r.a.createElement("a",{className:"mobile-btn",href:"#nowhere",title:"Hide navigation"}," Hide navigation "),r.a.createElement("ul",{id:"nav",className:"nav"},r.a.createElement("li",{className:"current"},r.a.createElement("a",{id:"homeLink",className:"smoothscroll",href:"#home"}," Home ")),r.a.createElement("li",null,r.a.createElement("a",{id:"aboutLink",className:"smoothscroll",href:"#about"}," About ")),r.a.createElement("li",null,r.a.createElement("a",{id:"resumeLink",className:"smoothscroll",href:"#resume"}," Resume ")),r.a.createElement("li",null,r.a.createElement("a",{id:"portfolioLink",className:"smoothscroll",href:"#portfolio"}," Works ")),r.a.createElement("li",null,r.a.createElement("a",{id:"contactLink",className:"smoothscroll",href:"#contact"}," Contact ")))),r.a.createElement("div",{className:"row banner"},r.a.createElement("div",{className:"banner-text"},r.a.createElement("h1",{className:"responsive-headline"}," ",e.name," "),r.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif"}},e.roleDescription),r.a.createElement("hr",null),r.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:e.className}," ")))}))))),r.a.createElement("p",{className:"scrolldown"},r.a.createElement("a",{className:"smoothscroll",href:"#about"},r.a.createElement("i",{className:"icon-down-circle"}," ")))))}}]),a}(n.Component),p=function(e){function a(){return Object(o.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return r.a.createElement("section",{id:"about"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"three columns"},r.a.createElement("img",{className:"profile-pic",src:"images/profilepic.jpg",alt:""})),r.a.createElement("div",{className:"nine columns main-col"},r.a.createElement("h2",null," About Me "),r.a.createElement("p",null," ",e.about," "),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"columns contact-details"},r.a.createElement("h2",null," Contact Details "),r.a.createElement("p",{className:"address"},r.a.createElement("span",null," ",e.name," "),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("a",{href:"mailto:".concat(e.email)}," ",e.email," ")),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("a",{href:e.linkedIn}," ",e.linkedIn," "))))))))}}]),a}(n.Component),h=function(e){function a(){return Object(o.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return r.a.createElement("section",{id:"resume"},r.a.createElement("div",{className:"row education"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null," Education "))),r.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map((function(e,a){return r.a.createElement("div",{className:"row item",key:a},r.a.createElement("div",{className:"twelve columns"},r.a.createElement("h3",null," ",e.UniversityName," "),r.a.createElement("p",{className:"info"},e.Major,r.a.createElement("span",null," \u2022 "),r.a.createElement("em",{className:"date"},e.MonthOfStarting," ",e.YearOfStarting," - ",e.MonthOfPassing," ",e.YearOfPassing)),r.a.createElement("p",null," ",e.Achievements," ")))})))),r.a.createElement("div",{className:"row work"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null," Work "))),r.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map((function(e,a){return r.a.createElement("div",{className:"row item",key:a},r.a.createElement("div",{className:"twelve columns"},r.a.createElement("h3",null," ",e.CompanyName," "),r.a.createElement("p",{className:"info"},e.Title,r.a.createElement("span",null," \u2022 "),r.a.createElement("em",{className:"date"},e.MonthOfStarting," ",e.YearOfStarting," - ",e.MonthOfLeaving," ",e.YearOfLeaving)),r.a.createElement("ul",{className:"job-description dashed"},e.Description&&e.Description.map((function(e,a){return r.a.createElement("li",{key:a},e)})))))})))),r.a.createElement("div",{className:"row skill"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null," Skills "))),r.a.createElement("div",{className:"nine columns main-col"},r.a.createElement("p",null," ",e.skillsDescription," "),r.a.createElement("div",{className:"bars"},r.a.createElement("ul",{className:"skills"},e.skills&&e.skills.map((function(e,a){return r.a.createElement("li",{key:a},r.a.createElement("span",{className:"bar-expand ".concat(e.toLowerCase())}),r.a.createElement("em",null,e))})))))))}}]),a}(n.Component),f=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(c.a)(this,Object(m.a)(a).call(this,e))).state={name:"test",description:"test",longDescription:[]},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"changeModal",value:function(e){var a=e.name,t=e.description,n=e.longDescription;this.setState({name:a,description:t,longDescription:n})}},{key:"render",value:function(){var e=this,a=this.props.resumeData;return r.a.createElement("section",{id:"portfolio"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"twelve columns collapsed"},r.a.createElement("h1",null," Check Out Some of My Works. "),r.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},a.portfolio&&a.portfolio.map((function(a,t){return r.a.createElement("div",{className:"columns portfolio-item",key:t},r.a.createElement("div",{className:"item-wrap"},r.a.createElement("a",{href:"#portfolioModal",onClick:function(){return e.changeModal({name:a.name,description:a.description,longDescription:a.longDescription})}},r.a.createElement("img",{src:"".concat(a.imgUrl),className:"item-img"}),r.a.createElement("div",{className:"overlay"},r.a.createElement("div",{className:"portfolio-item-meta"},r.a.createElement("h5",null," ",a.name," "),r.a.createElement("p",null," ",a.description," "))))))}))))),r.a.createElement("div",{id:"portfolioModal",className:"popup-modal mfp-hide"},r.a.createElement("i",{className:"fa fa-times close","aria-hidden":"true"}),r.a.createElement("div",{className:"description-box"},r.a.createElement("h4",null," ",this.state.name," "),r.a.createElement("p",null," ",this.state.description," "),r.a.createElement("ul",{className:"description-list dashed"},this.state.longDescription&&this.state.longDescription.map((function(e,a){return r.a.createElement("li",{key:a},r.a.createElement("em",null," ",e," "))}))))))}}]),a}(n.Component),g=function(e){function a(){return Object(o.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return r.a.createElement("section",{id:"contact"},r.a.createElement("div",{className:"row section-head"},r.a.createElement("div",{className:"ten columns"},r.a.createElement("p",{className:"lead"},"Feel free to contact me for any work or suggestions below"))),r.a.createElement("div",{className:"row"},r.a.createElement("aside",{className:"eigth columns footer-widgets"},r.a.createElement("div",{className:"widget"},r.a.createElement("h4",null," Email: ",r.a.createElement("a",{href:"mailto:".concat(e.email)}," peter.cardenas@utexas.edu ")),r.a.createElement("h4",null," LinkedIn: ",r.a.createElement("a",{href:e.linkedIn}," ",e.linkedInId," "))))))}}]),a}(n.Component),E=function(e){function a(){return Object(o.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return r.a.createElement("footer",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"twelve columns"},r.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map((function(e,a){return r.a.createElement("li",{key:a},r.a.createElement("a",{href:e.url},r.a.createElement("i",{className:e.className})))})))),r.a.createElement("div",{id:"go-top"},r.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},r.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),v={imagebaseurl:"https://petercardenas.github.io/",name:"Peter Cardenas",linkedInId:"peter-cardenas",linkedIn:"https://www.linkedin.com/in/peter-cardenas/",skypeid:"petercardenas441",roleDescription:"I am a fervent learner and engineer, and I desire to work with others who share my passion for technology and innovation. I am currently experienced in full-stack development, with an emphasis in backend architecture. Currently looking for software engineer internships.",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/peter-cardenas/",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/PeterCardenas",className:"fa fa-github"},{name:"email",url:"mailto:peter.cardenas@utexas.edu",className:"fa fa-envelope"}],about:"I am currently a freshman at the University of Texas at Austin. I love creating and learning new things, especially in regards to Computer Science. In my free time, I like play the violin, watch movies, and go jogging.",email:"peter.cardenas@utexas.edu",education:[{UniversityName:"The University of Texas at Austin",Major:"Bachelor of Science in Computer Science",MonthOfStarting:"Aug",YearOfStarting:"2019",MonthOfPassing:"Present",YearOfPassing:""}],work:[{CompanyName:"7-Eleven, Inc.",Title:"Software Engineer Intern",MonthOfStarting:"May",YearOfStarting:"2019",MonthOfLeaving:"Aug",YearOfLeaving:"2019",Description:["Collaborated in a 3-intern pod to develop a customer facing React Native application with a Git version control system as beach-head to new customer market","Conceptualized, architected, and developed complete backend for entire React Native Application","Leveraged a NodeJS version of the OpenCV library to create a unique customer engagement experience using computer vision","Architected front-end, including animations, actively iterating alongside UX and Design team","Explored back-end and large-scale database technologies such as NodeJS and MongoDB","Presented to company executive and senior VP\u2019s on future business impact of product, resulting in senior leadership alignment to scale project to broader US market via integration with 7Rewards app","Employed Scrum and Agile methodologies, while incorporating Design Thinking and Lean Experimentation to validate product hypotheses","Deployed server on AWS EC2 Instance and stored video and image data on S3 Storage","Developed APIs for real time video streaming on multiple user devices from S3 Storage"]},{CompanyName:"Daisuki Coaching",Title:"App Developer Intern",MonthOfStarting:"Jun",YearOfStarting:"2019",MonthOfLeaving:"Sep",YearOfLeaving:"2018",Description:["Aided in the development of an asset portfolio application using C# with Xamarin.Forms","Implemented Syncfusion library for the creation of charts and graphs","Styled and edited on front-end using XAML","Performed manual QA on several devices for compatibility testing"]}],skillsDescription:"",skills:["HTML5","CSS","ReactJS","C#","NodeJS","Java"],portfolio:[{name:"Model Scheduler",description:"PHP Web Application",longDescription:["Aided in the development of the scheduling application for the new scheduling system which would serve the Allen High School population of over 4,700 students","Applied knowledge of MySQL, JavaScript with JQuery, CSS, HTML, and PHP throughout the application","Performed and analyzed several rounds of constructive user testing"],imgUrl:"images/portfolio/schedule.jpg"},{name:"Music Sequencer",description:"NodeJS Web Application",longDescription:["Developing a music sequencer web application with NodeJS, HTML, CSS, and JavaScript with JQuery","Hosting with Heroku with a PostgreSQL database for user storage","Used Wavesurfer.js library for audio manipulation and display"],imgUrl:"images/portfolio/music.jpg"},{name:"Ping Pong Competitive Website",description:"Web Application with Firebase",longDescription:["Developed club website hosted with GitHub Pages with ranking system","Applied knowledge of JavaScript with JQuery, CSS, and HTML","Used Firebase NoSQL database to store and live update rankings"],imgUrl:"images/portfolio/ping_pong.jpg"},{name:"Digital Card Game",description:"Unity Multiplayer Game",longDescription:["Developed an original card game using the Unity Game Engine","Implemented the Unity Networking API for state synchronization and remote procedure calls","Used Object Oriented Programming concepts for players and player objects"],imgUrl:"images/portfolio/card.jpg"},{name:"Portfolio Website",description:"ReactJS Web Application",longDescription:["Developed portfolio website using ReactJS framework hosted on GitHub Pages","Optimized JSX and CSS for styling purposes","Used Magnific Popup library to handle modals along with state management"],imgUrl:"images/portfolio/portfolio.jpg"}]},b=function(e){function a(){return Object(o.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(u,{resumeData:v}),r.a.createElement(p,{resumeData:v}),r.a.createElement(h,{resumeData:v}),r.a.createElement(f,{resumeData:v}),r.a.createElement(g,{resumeData:v}),r.a.createElement(E,{resumeData:v}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,a,t){e.exports=t(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.0e26ac9e.chunk.js.map