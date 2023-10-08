import{_ as l,L as m,o as p,A as g,d as u,r as o,a as _,c as b,f as e,g as n,h as v,F as x,k as h,b as f,p as B,m as y,n as C}from"./index-8bf5d2e8.js";const N={setup(){const t=window.driver.js.driver,s=t({showProgress:!0,allowClose:!0,onCloseClick:()=>{localStorage.setItem("needsHomeTour","false"),s.destroy(),document.getElementsByClassName("categoriesBox")[0].classList.remove("disabled"),document.getElementsByClassName("getStartedBox")[0].classList.remove("disabled"),document.getElementsByClassName("navbar")[0].classList.remove("disabled")},steps:[{element:"#homeCard",popover:{title:"Welcome to ReciPantry 🍔",description:"Let us show you around and give you a small tour!!",side:"bottom",align:"center"}},{element:"#titleText",popover:{title:"Let us help you become the best chef. 🧑‍🍳",description:"Finding the perfect recipe and saving money while doing so has never been easier.",side:"bottom",align:"start",onNextClick:()=>{window.scrollBy(0,-window.innerHeight),s.moveNext(),s.refresh()}}},{element:"#categoriesBox",popover:{title:"Not sure where to start? 🍲",description:"Select any category to see all recipes related to that category. Need to see more? Scroll to the side!",side:"top",align:"center"}},{element:"#navbarBox",popover:{title:"Navigating around is simple. ↘️",description:"Select any button to visit its respective webpage!",side:"top",align:"center"}},{element:"#navbarHomeBox",popover:{title:"Home Page. 🏡",description:"You are here!",side:"top",align:"center"}},{element:"#navbarRecipesBox",popover:{title:"Recipe Page. 📃",description:"Explore all of our recipes on this page!",side:"top",align:"center"}},{element:"#navbarCommunityBox",popover:{title:"Community Page. 🫂",description:"Explore all of our custom user created recipes, and be able to create your own!",side:"top",align:"center"}},{element:"#navbarAccountBox",popover:{title:"Account Page. 👳",description:"Access your account here.",side:"top",align:"center"}},{element:"#navbarAboutBox",popover:{title:"About Page 🤔",description:"Get some info on this site over on this tab.",side:"top",align:"center",onNextClick:()=>{document.getElementsByClassName("categoriesBox")[0].classList.remove("disabled"),document.getElementsByClassName("getStartedBox")[0].classList.remove("disabled"),document.getElementsByClassName("navbar")[0].classList.remove("disabled"),localStorage.setItem("needsHomeTour",!1),m.log("END TOUR => "+localStorage.getItem("needsHomeTour")),s.moveNext()}}},{element:"#getStartedBox",popover:{title:"Ready to start?",description:"Get cooking.",side:"top",align:"center"}}]});function i(){setTimeout(s.drive,1e3)}return p(()=>{g.init(),localStorage.getItem("needsHomeTour")==null||localStorage.getItem("needsHomeTour")=="true"?(document.getElementsByClassName("categoriesBox")[0].classList.add("disabled"),document.getElementsByClassName("getStartedBox")[0].classList.add("disabled"),document.getElementsByClassName("navbar")[0].classList.add("disabled"),i()):(document.getElementsByClassName("categoriesBox")[0].classList.remove("disabled"),document.getElementsByClassName("getStartedBox")[0].classList.remove("disabled"),document.getElementsByClassName("navbar")[0].classList.remove("disabled"))}),{categories:u(()=>h.categories)}}},a=t=>(B("data-v-062424eb"),t=t(),y(),t),w={class:"row p-0 m-0"},S=f('<div class="col-12 p-0 m-0 d-flex flex-row justify-content-md-center" id="titleText" data-v-062424eb><h1 class="home-title postion-absolute ms-4 mt-4 animate__animated animate__fadeIn" data-v-062424eb><span class="text-success" data-v-062424eb>FIND</span> THE <span data-v-062424eb>RECIPE THAT SUITS</span> <span class="text-success" data-v-062424eb>YOU</span>, ON <span class="text-success" data-v-062424eb>RECIPANTRY</span><i class="mdi mdi-chef-hat" data-v-062424eb></i></h1></div><hr class="animate__animated animate__fadeIn" data-v-062424eb>',2),E={class:"col-12 p-0 m-0 d-flex flex-row justify-content-center landingCardContainer",id:"homeCard"},I={class:"row p-0 m-0 animate__animated animate__fadeIn"},L=a(()=>e("hr",{class:"animate__animated animate__fadeIn mt-4"},null,-1)),T={class:"col-12 p-0 m-0 d-flex flex-row justify-content-center mb-3 mt-3"},H=a(()=>e("button",{class:"btn btn-success p-0 m-0 px-4 py-2 fs-2 elevation-5 border border-1 border-black getStartedBox",id:"getStartedBox"},[C("Get Started "),e("i",{class:"mdi mdi-arrow-right-bold"})],-1)),R={class:"row p-0 m-0 categoriesBox d-flex flex-row justify-content-md-center",id:"categoriesBox"},P=a(()=>e("div",{class:"col-12 p-0 m-0 mt-md-3"},[e("h1",{class:"text-center categories-title animate__animated animate__fadeIn"},"Browse Categories")],-1)),k={class:"col-12 col-md-9 px-5 p-md-0 m-0 d-flex flex-row justify-content-start justify-content-md-center bubble-container animate__animated animate__fadeInRightBig"},A=a(()=>e("hr",{class:"animate__animated animate__fadeIn"},null,-1));function j(t,s,i,O,F,V){const r=o("LandingCard"),c=o("RouterLink"),d=o("CategoryBubble");return _(),b(x,null,[e("section",w,[S,e("div",E,[n(r)])]),e("section",I,[L,e("div",T,[n(c,{to:{name:"Recipes"}},{default:v(()=>[H]),_:1})])]),e("section",R,[P,e("div",k,[n(d)])]),A],64)}const G=l(N,[["render",j],["__scopeId","data-v-062424eb"]]);export{G as default};