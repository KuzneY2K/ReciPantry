import{_ as C,q as m,o as v,A as I,s as w,P as b,d as p,r as s,a as i,c,f as e,g as u,F as g,i as B,j as R,k as a,u as x,p as k,m as S,n as E}from"./index-76e5e2aa.js";const A={setup(){const t=window.driver.js.driver,o=t({showProgress:!0,allowClose:!0,disableActiveInteraction:!0,onCloseClick:()=>{window.localStorage.setItem("needsCreateTour",!1),o.destroy()},steps:[{element:"#createRecipeBtn",popover:{title:"Ready To Chef? 🧑‍🍳",description:"Clicking this button will allow you to create and share your own recipes with everyone else.",side:"top",align:"center",onNextClick:()=>{m.getOrCreateInstance("#createRecipe").show(),o.moveNext()}}},{element:".createRecipeModal",popover:{title:"It's Easy 📝",description:"Use this form to post your recipe for everyone else to see and cook with.",side:"bottom",align:"right"}},{element:"#addIngredientBtn",popover:{title:"Adding Ingredients ➕",description:"Clicking [Add +] will allow you add as many ingredients as you want.",side:"bottom",align:"right"}},{element:"#addIngredientBtn",popover:{title:"Removing Ingredients ➖",description:"Clicking [Remove] will simply remove the ingredient from your list. Easy.",side:"bottom",align:"right"}},{element:"#recipeImg",popover:{title:"Adding images 🖼️",description:"Currently this app only supports image url's. Make sure to include a picture of your dish.",side:"bottom",align:"right",onNextClick:()=>{m.getOrCreateInstance("#createRecipe").hide(),document.getElementById("createRecipeBtn").disabled=!1,document.getElementById("addIngredientBtn").disabled=!1,document.getElementById("removeIngredientBtn").disabled=!1,document.getElementById("createRecipeSubmitBtn").disabled=!1,window.localStorage.setItem("needsCreateTour",!1),o.moveNext()}}},{element:"#page",popover:{title:"And done.",description:"Creating recipes is simple.",side:"bottom",align:"right"}}]});function r(){a.account.id&&(window.localStorage.getItem("needsCreateTour")==null||window.localStorage.getItem("needsCreateTour")==!0)&&(o.drive(),document.getElementById("createRecipeBtn").disabled=!0,document.getElementById("addIngredientBtn").disabled=!0,document.getElementById("removeIngredientBtn").disabled=!0,document.getElementById("createRecipeSubmitBtn").disabled=!0)}v(()=>{n(),I.init(),setTimeout(r,2e3)});async function n(){try{await w.getCommunityRecipes()}catch(d){b.error(d)}}return{communityRecipes:p(()=>a.communityRecipes),account:p(()=>a.account)}}},_=t=>(k("data-v-3d0c0819"),t=t(),S(),t),N={class:"row p-0 m-0 animate__animated animate__fadeInDownBig"},T={class:"col-12 p-0 m-0 d-flex flex-column align-items-center justify-content-center"},j=_(()=>e("h1",{class:"mt-3 title"},[E("From Our "),e("span",{class:"text-success"},"Community")],-1)),M={class:"row p-0 m-0"},O={class:"row d-flex flex-column align-items-center justify-content-center p-0 m-0 mt-3"},F={class:"col-12 col-md-9 col-md-8 d-flex flex-column align-items-center justify-content-center"},P={key:0,class:"col-2 col-md-4"},V=_(()=>e("button",{id:"createRecipeBtn","data-bs-toggle":"modal","data-bs-target":"#createRecipe",class:"btn btn-success buttonContainer border border-1 border-black elevation-5 py-2 px-3"},[e("i",{class:"mdi mdi-plus-thick"})],-1)),$=[V];function q(t,o,r,n,d,D){const y=s("CommunitySearchBar"),h=s("CommunityRecipeCard"),f=s("CreateRecipeModalForm");return i(),c(g,null,[e("section",N,[e("div",T,[j,e("section",M,[u(y)])])]),e("section",O,[e("div",F,[(i(!0),c(g,null,B(n.communityRecipes,l=>(i(),x(h,{key:l.id,recipe:l,"data-aos":"flip-down"},null,8,["recipe"]))),128))]),u(f),n.account.id?(i(),c("div",P,$)):R("",!0)])],64)}const U=C(A,[["render",q],["__scopeId","data-v-3d0c0819"]]);export{U as default};
