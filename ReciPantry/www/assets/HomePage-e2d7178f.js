import{_ as m,L as r,o as p,A as g,d as u,r as o,a as _,c as b,f as e,g as n,h as v,F as f,k as x,b as h,p as B,m as y,n as C}from"./index-c2d4542d.js";const N={setup(){const t=window.driver.js.driver,a=t({showProgress:!0,allowClose:!0,onCloseClick:()=>{localStorage.setItem("needsHomeTour",!1),a.destroy(),document.getElementsByClassName("categoriesBox")[0].classList.remove("disabled"),document.getElementsByClassName("getStartedBox")[0].classList.remove("disabled"),document.getElementsByClassName("navbar")[0].classList.remove("disabled")},steps:[{element:"#homeCard",popover:{title:"Welcome to ReciPantry 🍔",description:"Let us show you around and give you a small tour!!",side:"bottom",align:"center"}},{element:"#titleText",popover:{title:"Let us help you become the best chef. 🧑‍🍳",description:"Finding the perfect recipe and saving money while doing so has never been easier.",side:"bottom",align:"start",onNextClick:()=>{window.scrollBy(0,-window.innerHeight),a.moveNext(),a.refresh()}}},{element:"#categoriesBox",popover:{title:"Not sure where to start? 🍲",description:"Select any category to see all recipes related to that category. Need to see more? Scroll to the side!",side:"top",align:"center"}},{element:"#navbarBox",popover:{title:"Navigating around is simple. ↘️",description:"Select any button to visit its respective webpage!",side:"top",align:"center"}},{element:"#navbarHomeBox",popover:{title:"Home Page. 🏡",description:"You are here!",side:"top",align:"center"}},{element:"#navbarRecipesBox",popover:{title:"Recipe Page. 📃",description:"Explore all of our recipes on this page!",side:"top",align:"center"}},{element:"#navbarCommunityBox",popover:{title:"Community Page. 🫂",description:"Explore all of our custom user created recipes, and be able to create your own!",side:"top",align:"center"}},{element:"#navbarAccountBox",popover:{title:"Account Page. 👳",description:"Access your account here.",side:"top",align:"center"}},{element:"#navbarAboutBox",popover:{title:"About Page 🤔",description:"Get some info on this site over on this tab.",side:"top",align:"center",onNextClick:()=>{document.getElementsByClassName("categoriesBox")[0].classList.remove("disabled"),document.getElementsByClassName("getStartedBox")[0].classList.remove("disabled"),document.getElementsByClassName("navbar")[0].classList.remove("disabled"),localStorage.setItem("needsHomeTour",!1),r.log("END TOUR => "+localStorage.getItem("needsHomeTour")),a.moveNext()}}},{element:"#getStartedBox",popover:{title:"Ready to start?",description:"Get cooking.",side:"top",align:"center"}}]});function i(){setTimeout(a.drive,1e3)}return p(()=>{g.init(),localStorage.getItem("needsHomeTour")==null||localStorage.getItem("needsHomeTour")==!0?(r.log(localStorage.storedData),document.getElementsByClassName("categoriesBox")[0].classList.add("disabled"),document.getElementsByClassName("getStartedBox")[0].classList.add("disabled"),document.getElementsByClassName("navbar")[0].classList.add("disabled"),i()):(document.getElementsByClassName("categoriesBox")[0].classList.remove("disabled"),document.getElementsByClassName("getStartedBox")[0].classList.remove("disabled"),document.getElementsByClassName("navbar")[0].classList.remove("disabled"))}),{categories:u(()=>x.categories)}}},s=t=>(B("data-v-42a3b53f"),t=t(),y(),t),w={class:"row p-0 m-0"},S=h('<div class="col-12 p-0 m-0 d-flex flex-row justify-content-md-center" id="titleText" data-v-42a3b53f><h1 class="home-title postion-absolute ms-4 mt-4 animate__animated animate__fadeIn" data-v-42a3b53f><span class="text-success" data-v-42a3b53f>FIND</span> THE <span data-v-42a3b53f>RECIPE THAT SUITS</span> <span class="text-success" data-v-42a3b53f>YOU</span>, ON <span class="text-success" data-v-42a3b53f>RECIPANTRY</span><i class="mdi mdi-chef-hat" data-v-42a3b53f></i></h1></div><hr class="animate__animated animate__fadeIn" data-v-42a3b53f>',2),E={class:"col-12 p-0 m-0 d-flex flex-row justify-content-center landingCardContainer",id:"homeCard"},I={class:"row p-0 m-0 animate__animated animate__fadeIn"},L=s(()=>e("hr",{class:"animate__animated animate__fadeIn mt-4"},null,-1)),T={class:"col-12 p-0 m-0 d-flex flex-row justify-content-center mb-3 mt-3"},H=s(()=>e("button",{class:"btn btn-success p-0 m-0 px-4 py-2 fs-2 elevation-5 border border-1 border-black getStartedBox",id:"getStartedBox"},[C("Get Started "),e("i",{class:"mdi mdi-arrow-right-bold"})],-1)),R={class:"row p-0 m-0 categoriesBox d-flex flex-row justify-content-md-center",id:"categoriesBox"},P=s(()=>e("div",{class:"col-12 p-0 m-0 mt-md-3"},[e("h1",{class:"text-center categories-title animate__animated animate__fadeIn"},"Browse Categories")],-1)),k={class:"col-12 col-md-9 px-5 p-md-0 m-0 d-flex flex-row justify-content-start justify-content-md-center bubble-container animate__animated animate__fadeInRightBig"},A=s(()=>e("hr",{class:"animate__animated animate__fadeIn"},null,-1));function j(t,a,i,O,F,V){const c=o("LandingCard"),d=o("RouterLink"),l=o("CategoryBubble");return _(),b(f,null,[e("section",w,[S,e("div",E,[n(c)])]),e("section",I,[L,e("div",T,[n(d,{to:{name:"Recipes"}},{default:v(()=>[H]),_:1})])]),e("section",R,[P,e("div",k,[n(l)])]),A],64)}const D=m(N,[["render",j],["__scopeId","data-v-42a3b53f"]]);export{D as default};