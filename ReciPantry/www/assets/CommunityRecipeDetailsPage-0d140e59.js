import{k as n,v as g,P as c,x as R,_ as B,y as L,z as j,B as w,w as E,o as N,A as O,s as k,D as C,d as v,G as T,H as P,r as y,a as o,c as a,f as t,n as S,t as u,j as p,g as b,h as D,F,i as I,I as V,J as G,K as U,p as H,m as z}from"./index-00ca8941.js";class W{async addOrRemoveFavorite(s){let d=n.favorites.find(e=>e.accountId==n.account.id);if(d)await g.delete(`api/favorites/${d.id}`),n.favorites.splice(d,1),c.success("Favorited no longer!");else{const e=await g.post("api/favorites",s);n.favorites.push(new R(e.data)),c.success("New favorite added!")}}async getFavoritesByRecipe(s){const d=await g.get(`api/recipes/${s}/favorites`);n.favorites=d.data.map(e=>new R(e))}}const M=new W;const q={setup(){let l=L(),s=j(),d=w({rating:null}),e=w({}),h=w(0);E(()=>{_()}),N(()=>{x(),O.init()});async function x(){try{await k.getCommunityRecipeById(l.params.recipeId),document.getElementById("instructions").innerHTML=n.activeRecipe.instructions,document.getElementById("summary").innerHTML=n.activeRecipe.summary,f(),_()}catch(i){c.error(i)}}async function _(){try{await M.getFavoritesByRecipe(l.params.recipeId)}catch(i){c.error(i)}}async function f(){try{const i=n.activeRecipe.id;await C.getReviewsByRecipe(i)}catch(i){c.error(i)}}return{recipe:v(()=>n.activeRecipe),ingredients:v(()=>n.activeRecipe.ingredients),account:v(()=>n.account),user:v(()=>n.user),reviews:v(()=>n.activeReviews),ingredientOnList:v(()=>n.groceryList),router:s,favorite:v(()=>n.favorites),isFavorite:v(()=>n.favorites.find(i=>i.accountId==n.account.id)),reviewData:d,groceryData:e,rating:h,async addToList(i){this.account.id?await c.confirm(`Add ${i.name} to grocery list?`)?(e.value.groceryName=i.name,e.value.measureAmount=i.measureAmount,e.value.measureUnit=i.measureUnit,await T.addGrocery(e.value),c.success(`Added ${i.name} to grocery list!`)):c.toast(`${i.name} not added to grocery list.`):c.error(`Must be logged in to add ${i.name} to list!`)},async deleteRecipe(){try{if(await c.confirm("Are you sure you want to delete this recipe?")){const i=n.activeRecipe.id;await k.deleteRecipe(i),s.push({name:"Account"}),c.toast("Recipe Deleted","success")}else c.toast("Recipe deletion cancelled.")}catch(i){c.error(i)}},async addOrRemoveFavorite(){try{let i={recipeId:l.params.recipeId};await M.addOrRemoveFavorite(i)}catch(i){c.error(i)}},async createReview(){try{if(d.value.rating==null){c.error("Please leave a rating");return}d.value.recipeId=l.params.recipeId,await C.createReview(d.value),d.value={},c.toast("Review left.","success")}catch(i){c.error(i)}}}},components:{EditRecipeForm:P}},m=l=>(H("data-v-ecdf8d60"),l=l(),z(),l),J={id:"crdCanvas"},K={class:"text-start ms-4 mt-3 text-success position-relative recipe-title text-md-center"},Y={class:"text-black"},Q={key:0,class:"grocery-btn-container position-absolute"},X=m(()=>t("button",{class:"btn btn-success position-fixed grocery-list border border-1 border-black elevation-5","data-bs-toggle":"modal","data-bs-target":"#groceryListModal"},[t("i",{class:"mdi mdi-list-box"})],-1)),Z=[X],$={class:"img-container d-flex flex-column align-items-center justify-content-center"},ee=["src"],te={class:"btn-container d-flex flex-row justify-content-start justify-content-md-center ms-3 mt-4"},ie={key:0,class:"ms-2"},se={key:0,class:"mdi mdi-heart-outline"},oe={key:1,class:"mdi mdi-heart"},ae={key:1,class:"ms-2"},re={key:2,class:"ms-2"},ne=m(()=>t("button",{class:"btn btn-primary border border-1 border-black p-0 m-0 px-3 py-2 elevation-5"}," Edit Recipe",-1)),ce={class:"row p-0 m-0 d-flex flex-row justify-content-center"},de={key:0,class:"ingredients-container col-12 col-md-4 p-0 m-0 px-4 mt-4"},le={class:"ingredients-header d-flex flex-row justify-content-between align-items-center"},me=m(()=>t("h1",{class:"p-0 m-0 ingredients-label"},"Ingredients",-1)),ve={class:"badge bg-success fs-5 servings elevation-3"},ue={class:"p-0 m-0 list-unstyled"},pe=["onClick"],_e=m(()=>t("input",{type:"checkbox",name:"have",class:"form-check-input m-0 p-0 mx-2 checkbox"},null,-1)),ye={class:"fs-5 m-0 p-0 ingredient-name"},be=m(()=>t("div",{class:"instructions-container col-12 col-md-4 p-0 m-0 px-4 mt-4"},[t("h1",{class:"p-0 m-0"},"Instructions"),t("p",{class:"bg-white p-4 mt-3 rounded rounded-5 elevation-3 fs-5",id:"instructions"})],-1)),fe={class:"row p-0 m-0 d-flex flex-row justify-content-center"},ge=m(()=>t("div",{class:"col-12 col-md-4 p-0 m-0"},[t("div",{class:"summary-container p-0 m-0 px-4 mt-4 mb-4"},[t("h1",{class:"p-0 m-0"},"About The Recipe"),t("div",{class:"bg-white p-4 mt-3 rounded rounded-5 elevation-3 fs-5 summary",id:"summary"})])],-1)),we={class:"col-12 col-md-4 d-flex flex-column justify-content-between align-items-between px-4 py-4"},he=m(()=>t("h1",{class:"p-0 m-0 m-0 text-center"},"Recipe Reviews ",-1)),xe={class:"modal fade",id:"reviewModal",tabindex:"-1","aria-labelledby":"reviewModalLabel","aria-hidden":"true"},Re={class:"modal-dialog"},ke={class:"modal-content py-3"},Ce=m(()=>t("div",{class:"modal-header"},[t("h5",{class:"modal-title",id:"reviewModalLabel"},"Leave A Review"),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1)),De={class:"modal-body",id:"reviewForm"},Fe={class:"d-flex justify-content-center"},Ie={key:0,class:"mdi mdi-star"},Me={key:1,class:"mdi mdi-star-outline"},Se={key:0,class:"mdi mdi-star"},Ae={key:1,class:"mdi mdi-star-outline"},Be={key:0,class:"mdi mdi-star"},Le={key:1,class:"mdi mdi-star-outline"},je={key:0,class:"mdi mdi-star"},Ee={key:1,class:"mdi mdi-star-outline"},Ne={key:0,class:"mdi mdi-star"},Oe={key:1,class:"mdi mdi-star-outline"},Te=m(()=>t("button",{class:"btn btn-success border border-1 border-black elevation-5 p-0 m-0 px-3 py-2"},"Post Review",-1)),Pe={key:0,class:"review-btn-container position-absolute"},Ve=m(()=>t("button",{"data-bs-toggle":"modal","data-bs-target":"#reviewModal",class:"btn btn-success ms-md-5 position-fixed review-btn border border-1 border-black elevation-5"},[S("Add Review "),t("i",{class:"mdi mdi-plus"})],-1)),Ge=[Ve];function Ue(l,s,d,e,h,x){const _=y("EditRecipeForm"),f=y("ModalWrapper"),i=y("ReviewCard"),A=y("GroceryListModal");return o(),a("div",J,[t("h1",K,[S(u(e.recipe.title)+" ",1),t("span",Y,"- "+u(e.recipe.readyInMinutes)+" Mins",1)]),e.account.id?(o(),a("div",Q,Z)):p("",!0),t("div",$,[t("img",{src:e.recipe.image,alt:"Recipe Cover Image",height:"300",width:"350",class:"rounded rounded-5 border border-2 border-dark elevation-5 recipe-image"},null,8,ee)]),t("div",te,[e.account.id?(o(),a("div",ie,[t("button",{class:"btn btn-success border border-1 border-black elevation-5 p-0 m-0 px-3 py-2",onClick:s[0]||(s[0]=(...r)=>e.addOrRemoveFavorite&&e.addOrRemoveFavorite(...r))},[e.isFavorite?(o(),a("i",oe)):(o(),a("i",se))])])):p("",!0),e.account.id==e.recipe.creatorId?(o(),a("div",ae,[t("button",{onClick:s[1]||(s[1]=(...r)=>e.deleteRecipe&&e.deleteRecipe(...r)),class:"btn btn-danger border border-1 border-black p-0 m-0 px-3 py-2 elevation-5"},"Delete Recipe")])):p("",!0),e.account.id==e.recipe.creatorId?(o(),a("div",re,[b(f,{id:"editRecipe"},{button:D(()=>[ne]),body:D(()=>[b(_)]),_:1})])):p("",!0)]),t("section",ce,[e.recipe.ingredients?(o(),a("div",de,[t("div",le,[me,t("h3",ve,u(e.recipe.servings)+" SERVINGS",1)]),t("ul",ue,[(o(!0),a(F,null,I(e.ingredients,r=>(o(),a("li",{class:"bg-white p-0 m-0 mt-3 py-3 px-3 rounded rounded-5 elevation-3 d-flex flex-row justify-content-start align-items-center",key:r,"data-aos":"zoom-out-up"},[t("i",{class:"mdi mdi-cart p-0 m-0 text-success fs-2 selectable",onClick:He=>e.addToList(r)},null,8,pe),_e,t("span",ye,u(r.name)+" - "+u(r.measureAmount)+" "+u(r.measureUnit),1)]))),128))])])):p("",!0),be]),t("section",fe,[ge,t("div",we,[he,(o(!0),a(F,null,I(e.reviews,r=>(o(),a("div",{key:r.id,class:"col-12"},[b(i,{review:r},null,8,["review"])]))),128)),t("div",xe,[t("div",Re,[t("div",ke,[Ce,t("div",De,[t("form",{onSubmit:s[8]||(s[8]=V((...r)=>e.createReview&&e.createReview(...r),["prevent"])),class:"form-control py-4"},[t("div",Fe,[t("button",{type:"button",onClick:s[2]||(s[2]=r=>e.reviewData.rating=1),class:"btn text-warning fs-1"},[e.reviewData.rating>=1?(o(),a("i",Ie)):(o(),a("i",Me))]),t("button",{type:"button",onClick:s[3]||(s[3]=r=>e.reviewData.rating=2),class:"btn text-warning fs-1"},[e.reviewData.rating>=2?(o(),a("i",Se)):(o(),a("i",Ae))]),t("button",{type:"button",onClick:s[4]||(s[4]=r=>e.reviewData.rating=3),class:"btn text-warning fs-1"},[e.reviewData.rating>=3?(o(),a("i",Be)):(o(),a("i",Le))]),t("button",{type:"button",onClick:s[5]||(s[5]=r=>e.reviewData.rating=4),class:"btn text-warning fs-1"},[e.reviewData.rating>=4?(o(),a("i",je)):(o(),a("i",Ee))]),t("button",{type:"button",onClick:s[6]||(s[6]=r=>e.reviewData.rating=5),class:"btn text-warning fs-1"},[e.reviewData.rating>=5?(o(),a("i",Ne)):(o(),a("i",Oe))])]),G(t("input",{"onUpdate:modelValue":s[7]||(s[7]=r=>e.reviewData.comment=r),class:"form-control my-4",placeholder:"Your Comment",type:"text",required:"",maxlength:"200",minlength:"4"},null,512),[[U,e.reviewData.comment]]),Te],32)])])])]),e.account.id?(o(),a("div",Pe,Ge)):p("",!0)])]),b(A)])}const We=B(q,[["render",Ue],["__scopeId","data-v-ecdf8d60"]]);export{We as default};