import{_ as L,y as I,z as M,B as w,q as g,o as S,A as T,k as a,D as _,P as r,d as m,N as D,G as x,s as k,r as C,a as o,c as n,f as e,n as h,t as y,j as p,F as R,i as N,I as E,J as j,K as A,g as B,b as O,p as F,m as G}from"./index-4f22b176.js";const H={setup(){let d=I(),s=M(),u=w({}),i=w({});const f=window.driver.js.driver,l=f({showProgress:!0,allowClose:!0,onCloseClick:()=>{window.localStorage.setItem("needsDetailsTour","false"),l.destroy(),document.getElementsByClassName("nmBtn")[0].classList.remove("disabled"),document.getElementsByClassName("nfBtn")[0].classList.remove("disabled"),document.getElementsByClassName("ingredient")[0].classList.remove("disabled")},steps:[{element:".img-container",popover:{title:"The Recipe 😎",description:"Here you are viewing all details related to this recipe. Everything you need to know is on this page.",side:"bottom",align:"center"}},{element:".readyInBox",popover:{title:"How long am I cooking? 🥣",description:"Good question. This portion of the page will show you the approximate cooking time of the recipe as well as what this recipe is called.",side:"bottom",align:"center"}},{element:".ingredients-header",popover:{title:"Ingredients & Servings 🍜",description:"Ingredients and servings for this recipe will be displayed here and no where else.",side:"bottom",align:"center",onNextClick:()=>{document.getElementsByClassName("ingredient")[0].classList.add("disabled"),l.moveNext()}}},{element:".ingredient",popover:{title:"The Ingredient 🥕",description:"This is an individual ingredient that will display on page load. Most of the time it will include the quantity needed for this select recipe.",side:"bottom",align:"center"}},{element:".cart",popover:{title:"Adding to a grocery list 🛒",description:"Don't have this ingredient? Don't have the attention span to remember it? No worries. Clicking the cart icon will add this ingredient to your personal shopping list.",side:"bottom",align:"center",onNextClick:()=>{g.getOrCreateInstance("#groceryListModal").show(),document.getElementsByClassName("gmBtn")[0].classList.add("disabled");let t=document.getElementById("groceryUlFake");t.innerHTML=`
                        <div class="li-container d-flex flex-row justify-content-between fs-5">
                            <li class="text-black"><i class="mdi mdi-food"></i> <span class="text-success">SALT</span> - 2 GALLONS </li>
                            <i class="mdi mdi-close text-danger fs-2 close-icon"></i>
                        </div>`,l.moveNext()}}},{element:".grocery-list-modal-body",popover:{title:"Grocery List 📄",description:"Once you log in or create an account you will be able to access your personal grocery list. All ingredients that you add to your grocery list will be displayed here.",side:"top",align:"center"}},{element:".li-container",popover:{title:"There's more? 🤔",description:"Need more ideas for what you already have in your shopping cart or on your list? Clicking on each individual grocery list item will redirect you to a list of recipes using that ingredient.",side:"bottom",align:"center"}},{element:".close-icon",popover:{title:"Removing Groceries 🗑️",description:"Click the X button to remove a grocery from your list.",side:"bottom",align:"center",onNextClick:()=>{let t=document.getElementById("groceryUlFake");t.innerHTML="",g.getOrCreateInstance("#groceryListModal").hide(),l.moveNext(),document.getElementsByClassName("nfBtn")[0].classList.add("disabled")}}},{element:".nutrition-btn-container",popover:{title:"Nutrition Facts 📑",description:"If applicable each recipe will display a nutrition facts label for that specific recipe.",side:"bottom",align:"center",onNextClick:()=>{g.getOrCreateInstance("#nutritionModal").show(),document.getElementsByClassName("nmBtn")[0].classList.add("disabled"),l.moveNext()}}},{element:".modal-content",popover:{title:"Nutrition Facts Label 📑",description:"Self explanatory...",side:"top",align:"center",onNextClick:()=>{g.getOrCreateInstance("#nutritionModal").hide(),document.getElementsByClassName("nmBtn")[0].classList.remove("disabled"),document.getElementsByClassName("nfBtn")[0].classList.remove("disabled"),document.getElementsByClassName("ingredient")[0].classList.remove("disabled"),l.moveNext()}}},{element:".instructions-container",popover:{title:"Instructions ⛏️",description:"The recipe instructions are located here. You can expect to see a detailed breakdown of the recipe, how to prepare and cook it.",side:"top",align:"center"}},{element:".summary-container",popover:{title:"Summary 🗺️",description:"A summary of the recipe. This may provide you a brief history of the recipe, its origins and much more.",side:"top",align:"center",onNextClick:()=>{window.localStorage.setItem("needsDetailsTour","false"),l.moveNext()}}},{element:".reviews-container",popover:{title:"Reviews 💭",description:"Thoughts and comments on this recipe are located here. Once logged in you will be able to review recipes.",side:"top",align:"center"}}]});async function b(){try{a.activeRecipe={},await k.getRecipeById(d.params.recipeId),v(),document.getElementsByClassName("nutrition-label")[0].innerHTML=a.nutritionLabel,document.getElementsByClassName("summary")[0].innerHTML=a.activeRecipe.summary,document.getElementsByClassName("instructions")[0].innerHTML=a.activeRecipe.instructions}catch(t){r.error(t)}}S(()=>{b(),v(),T.init()});async function v(){try{const t=a.activeRecipe.id;await _.getReviewsByRecipe(t)}catch(t){r.error(t)}}return{recipe:m(()=>a.activeRecipe),ingredients:m(()=>a.activeRecipe.ingredients),reviews:m(()=>a.activeReviews),ingredientOnList:m(()=>a.groceryList),account:m(()=>a.account),groceryData:i,reviewData:u,router:s,explode(){new D().addConfetti({emojis:["🍔","🥩","🍗","🍆","🥪","🍲","🍉","🍇","🍟","🍕","🥞","🍪","🥘","🥕","🦐","🥑","🍣","🍜"],confettiRadius:500,confettiNumber:50,emojiSize:75})},async addToList(t){await r.confirm(`Add ${t.name} to grocery list?`)?(i.value.groceryName=t.name,i.value.measureAmount=t.measures.us.amount||"",i.value.measureUnit=t.measures.us.unitShort||"",await x.addGrocery(i.value),r.success(`Added ${t.name} to grocery list!`)):r.toast(`${t.name} not added to grocery list.`)},async removeFromList(t){await r.confirm("Remove from gorcery list?")?await x.removeFromList(t):r.toast("Grocery was not removed from the list.")},async createReview(){try{u.value.recipeId=d.params.recipeId,await _.createReview(u.value),r.toast("Review left","success")}catch(t){r.error(t)}},async cloneRecipe(){try{await r.confirm("Are you sure you want to clone this?")&&(await k.cloneRecipe(a.activeRecipe),s.push({name:"Community Recipe Details",params:{recipeId:a.activeRecipe.id}}),this.explode())}catch(t){r.error(t)}}}}},c=d=>(F("data-v-f4af7842"),d=d(),G(),d),V={key:0,class:"theRecipe position-relative"},P={class:"row p-0 m-0"},U={class:"col-12 p-0 m-0 d-md-flex flex-md-column align-items-md-center my-md-3",id:"recipeTitleBox"},q={class:"text-start ms-4 mt-3 text-success recipe-title"},z={class:"text-black readyInBox",id:"readyInBox"},J={key:0,class:"grocery-btn-container postion-absolute"},Y=c(()=>e("button",{class:"btn btn-success position-fixed grocery-list border border-1 border-black elevation-5 grocery-list-btn","data-bs-toggle":"modal","data-bs-target":"#groceryListModal"},[e("i",{class:"mdi mdi-list-box"})],-1)),K=[Y],W={key:1,class:"position-absolute clone-container"},X={class:"mt-4"},Q={class:"img-container d-flex flex-column align-items-center justify-content-center mb-4"},Z=["src"],$={class:"row p-0 m-0 px-md-5 d-flex flex-row justify-content-center"},ee={key:0,class:"ingredients-container col-12 col-md-4 p-0 m-0 px-4 mt-4"},te={class:"ingredients-header d-flex flex-row justify-content-between align-items-center"},ie=c(()=>e("h1",{class:"p-0 m-0 ingredients-label"},"Ingredients",-1)),se={class:"badge bg-success fs-5 servings elevation-3"},oe={class:"p-0 m-0 list-unstyled"},ne=["onClick"],ae=c(()=>e("input",{type:"checkbox",name:"have",class:"form-check-input m-0 p-0 mx-2 checkbox"},null,-1)),re={class:"fs-5 m-0 p-0 ingredient-name"},ce=c(()=>e("li",{class:"nfBtn"},[e("div",{class:"nutrition-btn-container d-flex flex-column justify-content-center align-items-center mt-4"},[e("button",{class:"btn btn-success fs-2 px-4 rounded rounded-5 elevation-5","data-bs-toggle":"modal","data-bs-target":"#nutritionModal"},[h("SEE NUTRITION FACTS "),e("img",{src:"https://i.imgur.com/WbcjLNE.png",alt:"",height:"30"})])])],-1)),le=O('<div class="modal fade" id="nutritionModal" tabindex="-1" aria-labelledby="nutritionModalLabel" aria-hidden="true" data-v-f4af7842><div class="modal-dialog" data-v-f4af7842><div class="modal-content" data-v-f4af7842><div class="modal-body" data-v-f4af7842><div class="widgets p-0 m-0" data-v-f4af7842><div class="nutrition-label" data-v-f4af7842></div></div></div><div class="modal-footer" data-v-f4af7842><button type="button" class="btn btn-secondary nmBtn" data-bs-dismiss="modal" data-v-f4af7842>Close</button></div></div></div></div>',1),de=c(()=>e("div",{class:"instructions-container col-12 col-md-4 p-0 m-0 px-4 mt-4"},[e("h1",{class:"p-0 m-0"},"Instructions"),e("div",{class:"bg-white p-4 mt-3 rounded rounded-5 elevation-3 fs-5 instructions"})],-1)),me={class:"row p-0 m-0 d-flex flex-row justify-content-center"},pe=c(()=>e("div",{class:"col-12 col-md-4 p-0 m-0"},[e("div",{class:"summary-container p-0 m-0 px-4 mt-4 mb-4"},[e("h1",{class:"p-0 m-0"},"About The Recipe"),e("div",{class:"bg-white p-4 mt-3 rounded rounded-5 elevation-3 fs-5 summary"})])],-1)),ue={class:"col-12 col-md-4 d-flex flex-column align-items-center justify-items-center px-4 py-4"},ve=c(()=>e("h1",{class:"p-0 m-0 m-0"},"Recipe Reviews",-1)),ge={class:"review-btn-container position-absolute"},ye={key:0,"data-bs-toggle":"modal","data-bs-target":"#reviewModal",class:"btn btn-success border border-1 border-black elevation-5 review-btn position-fixed"},be=c(()=>e("i",{class:"mdi mdi-plus"},null,-1)),he={class:"modal fade",id:"reviewModal",tabindex:"-1","aria-labelledby":"reviewModalLabel","aria-hidden":"true"},fe={class:"modal-dialog"},we={class:"modal-content py-3"},_e=c(()=>e("div",{class:"modal-header"},[e("h5",{class:"modal-title",id:"reviewModalLabel"},"Leave A Review"),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1)),xe={class:"modal-body",id:"reviewForm"},ke={class:"d-flex justify-content-center"},Ce={key:0,class:"mdi mdi-star"},Re={key:1,class:"mdi mdi-star-outline"},Ne={key:0,class:"mdi mdi-star"},Be={key:1,class:"mdi mdi-star-outline"},Le={key:0,class:"mdi mdi-star"},Ie={key:1,class:"mdi mdi-star-outline"},Me={key:0,class:"mdi mdi-star"},Se={key:1,class:"mdi mdi-star-outline"},Te={key:0,class:"mdi mdi-star"},De={key:1,class:"mdi mdi-star-outline"},Ee=c(()=>e("button",{class:"btn btn-success border border-1 border-black elevation-5 p-0 m-0 px-3 py-2"},"Post Review",-1));function je(d,s,u,i,f,l){const b=C("ReviewCard"),v=C("GroceryListModal");return i.recipe?(o(),n("div",V,[e("section",P,[e("div",U,[e("h1",q,[h(y(i.recipe.title)+" ",1),e("span",z,"- "+y(i.recipe.readyInMinutes)+" Mins",1)])])]),i.account.id?(o(),n("div",J,K)):p("",!0),i.account.id?(o(),n("div",W,[e("button",{onClick:s[0]||(s[0]=(...t)=>i.cloneRecipe&&i.cloneRecipe(...t)),class:"btn btn-success border border-1 border-dark elevation-5 position-fixed clone-btn"},"Clone Recipe")])):p("",!0),e("div",X,[e("div",Q,[e("img",{src:i.recipe.image,alt:"Recipe Cover Image",height:"300",width:"350",class:"rounded rounded-5 border border-2 border-dark elevation-5 recipe-image"},null,8,Z)])]),e("section",$,[i.recipe.ingredients?(o(),n("div",ee,[e("div",te,[ie,e("h3",se,y(i.recipe.servings)+" SERVINGS",1)]),e("ul",oe,[(o(!0),n(R,null,N(i.ingredients,t=>(o(),n("li",{class:"bg-white p-0 m-0 mt-3 py-3 px-3 rounded rounded-5 elevation-3 d-flex flex-row justify-content-start align-items-center ingredient",key:t,"data-aos":"zoom-out-up"},[e("i",{class:"mdi mdi-cart p-0 m-0 text-success fs-2 cart selectable",onClick:Ae=>i.addToList(t)},null,8,ne),ae,e("span",re,y(t.original),1)]))),128)),ce]),le])):p("",!0),de]),e("section",me,[pe,e("div",ue,[ve,e("div",ge,[i.account.id?(o(),n("button",ye,[h("Add Review "),be])):p("",!0)]),(o(!0),n(R,null,N(i.reviews,t=>(o(),n("div",{key:t.id,class:"col-12"},[B(b,{review:t},null,8,["review"])]))),128))]),e("div",he,[e("div",fe,[e("div",we,[_e,e("div",xe,[e("form",{onSubmit:s[7]||(s[7]=E((...t)=>i.createReview&&i.createReview(...t),["prevent"])),class:"form-control py-4"},[e("div",ke,[e("button",{type:"button",onClick:s[1]||(s[1]=t=>i.reviewData.rating=1),class:"btn text-warning fs-1"},[i.reviewData.rating>=1?(o(),n("i",Ce)):(o(),n("i",Re))]),e("button",{type:"button",onClick:s[2]||(s[2]=t=>i.reviewData.rating=2),class:"btn text-warning fs-1"},[i.reviewData.rating>=2?(o(),n("i",Ne)):(o(),n("i",Be))]),e("button",{type:"button",onClick:s[3]||(s[3]=t=>i.reviewData.rating=3),class:"btn text-warning fs-1"},[i.reviewData.rating>=3?(o(),n("i",Le)):(o(),n("i",Ie))]),e("button",{type:"button",onClick:s[4]||(s[4]=t=>i.reviewData.rating=4),class:"btn text-warning fs-1"},[i.reviewData.rating>=4?(o(),n("i",Me)):(o(),n("i",Se))]),e("button",{type:"button",onClick:s[5]||(s[5]=t=>i.reviewData.rating=5),class:"btn text-warning fs-1"},[i.reviewData.rating>=5?(o(),n("i",Te)):(o(),n("i",De))])]),j(e("input",{"onUpdate:modelValue":s[6]||(s[6]=t=>i.reviewData.comment=t),class:"form-control my-4",placeholder:"Your Comment",type:"text",required:"",maxlength:"200",minlength:"4"},null,512),[[A,i.reviewData.comment]]),Ee],32)])])])])]),B(v)])):p("",!0)}const Fe=L(H,[["render",je],["__scopeId","data-v-f4af7842"]]);export{Fe as default};
