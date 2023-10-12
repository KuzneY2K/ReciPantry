import{k as n,v as w,P as c,x as R,_ as B,y as L,z as j,B as g,w as E,o as N,A as O,s as k,D as C,d as v,G as T,H as P,r as _,a,c as r,f as e,n as S,t as p,j as y,g as b,h as D,F as I,i as F,I as V,J as G,K as U,p as H,m as z}from"./index-4af7b98d.js";class W{async addOrRemoveFavorite(s){let d=n.favorites.find(t=>t.accountId==n.account.id);if(d)await w.delete(`api/favorites/${d.id}`),n.favorites.splice(d,1),c.success("Favorited no longer!");else{const t=await w.post("api/favorites",s);n.favorites.push(new R(t.data)),c.success("New favorite added!")}}async getFavoritesByRecipe(s){const d=await w.get(`api/recipes/${s}/favorites`);n.favorites=d.data.map(t=>new R(t))}}const M=new W;const q={setup(){let l=L(),s=j(),d=g({rating:null}),t=g({}),h=g(0);E(()=>{u()}),N(()=>{x(),O.init()});async function x(){try{await k.getCommunityRecipeById(l.params.recipeId),document.getElementById("instructions").innerHTML=n.activeRecipe.instructions,document.getElementById("summary").innerHTML=n.activeRecipe.summary,f(),u()}catch(i){c.error(i)}}async function u(){try{await M.getFavoritesByRecipe(l.params.recipeId)}catch(i){c.error(i)}}async function f(){try{const i=n.activeRecipe.id;await C.getReviewsByRecipe(i)}catch(i){c.error(i)}}return{recipe:v(()=>n.activeRecipe),ingredients:v(()=>n.activeRecipe.ingredients),account:v(()=>n.account),user:v(()=>n.user),reviews:v(()=>n.activeReviews),ingredientOnList:v(()=>n.groceryList),router:s,favorite:v(()=>n.favorites),isFavorite:v(()=>n.favorites.find(i=>i.accountId==n.account.id)),reviewData:d,groceryData:t,rating:h,async addToList(i){await c.confirm(`Add ${i.name} to grocery list?`)?(t.value.groceryName=i.name,t.value.measureAmount=i.measureAmount,t.value.measureUnit=i.measureUnit,await T.addGrocery(t.value),c.success(`Added ${i.name} to grocery list!`)):c.toast(`${i.name} not added to grocery list.`)},async deleteRecipe(){try{if(await c.confirm("Are you sure you want to delete this recipe?")){const i=n.activeRecipe.id;await k.deleteRecipe(i),s.push({name:"Account"}),c.toast("Recipe Deleted","success")}else c.toast("Recipe deletion cancelled.")}catch(i){c.error(i)}},async addOrRemoveFavorite(){try{let i={recipeId:l.params.recipeId};await M.addOrRemoveFavorite(i)}catch(i){c.error(i)}},async createReview(){try{if(d.value.rating==null){c.error("Please leave a rating");return}d.value.recipeId=l.params.recipeId,await C.createReview(d.value),d.value={},c.toast("Review left","success")}catch(i){c.error(i)}}}},components:{EditRecipeForm:P}},m=l=>(H("data-v-4df0a821"),l=l(),z(),l),J={id:"crdCanvas"},K={class:"text-start ms-4 mt-3 text-success position-relative recipe-title text-md-center"},Y={class:"text-black"},Q=m(()=>e("div",{class:"grocery-btn-container position-absolute"},[e("button",{class:"btn btn-success position-fixed grocery-list border border-1 border-black elevation-5","data-bs-toggle":"modal","data-bs-target":"#groceryListModal"},[e("i",{class:"mdi mdi-list-box"})])],-1)),X={class:"img-container d-flex flex-column align-items-center justify-content-center"},Z=["src"],$={class:"btn-container d-flex flex-row justify-content-start justify-content-md-center ms-3 mt-4"},ee={key:0,class:"ms-2"},te={key:0,class:"mdi mdi-heart-outline"},ie={key:1,class:"mdi mdi-heart"},se={key:1,class:"ms-2"},oe={key:2,class:"ms-2"},ae=m(()=>e("button",{class:"btn btn-primary border border-1 border-black p-0 m-0 px-3 py-2 elevation-5"}," Edit Recipe",-1)),re={class:"row p-0 m-0 d-flex flex-row justify-content-center"},ne={key:0,class:"ingredients-container col-12 col-md-4 p-0 m-0 px-4 mt-4"},ce={class:"ingredients-header d-flex flex-row justify-content-between align-items-center"},de=m(()=>e("h1",{class:"p-0 m-0 ingredients-label"},"Ingredients",-1)),le={class:"badge bg-success fs-5 servings elevation-3"},me={class:"p-0 m-0 list-unstyled"},ve=["onClick"],pe=m(()=>e("input",{type:"checkbox",name:"have",class:"form-check-input m-0 p-0 mx-2 checkbox"},null,-1)),ue={class:"fs-5 m-0 p-0 ingredient-name"},_e=m(()=>e("div",{class:"instructions-container col-12 col-md-4 p-0 m-0 px-4 mt-4"},[e("h1",{class:"p-0 m-0"},"Instructions"),e("p",{class:"bg-white p-4 mt-3 rounded rounded-5 elevation-3 fs-5",id:"instructions"})],-1)),ye={class:"row p-0 m-0 d-flex flex-row justify-content-center"},be=m(()=>e("div",{class:"col-12 col-md-4 p-0 m-0"},[e("div",{class:"summary-container p-0 m-0 px-4 mt-4 mb-4"},[e("h1",{class:"p-0 m-0"},"About The Recipe"),e("div",{class:"bg-white p-4 mt-3 rounded rounded-5 elevation-3 fs-5 summary",id:"summary"})])],-1)),fe={class:"col-12 col-md-4 d-flex flex-column justify-content-between align-items-between px-4 py-4"},we=m(()=>e("h1",{class:"p-0 m-0 m-0 text-center"},"Recipe Reviews ",-1)),ge={class:"modal fade",id:"reviewModal",tabindex:"-1","aria-labelledby":"reviewModalLabel","aria-hidden":"true"},he={class:"modal-dialog"},xe={class:"modal-content py-3"},Re=m(()=>e("div",{class:"modal-header"},[e("h5",{class:"modal-title",id:"reviewModalLabel"},"Leave A Review"),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1)),ke={class:"modal-body",id:"reviewForm"},Ce={class:"d-flex justify-content-center"},De={key:0,class:"mdi mdi-star"},Ie={key:1,class:"mdi mdi-star-outline"},Fe={key:0,class:"mdi mdi-star"},Me={key:1,class:"mdi mdi-star-outline"},Se={key:0,class:"mdi mdi-star"},Ae={key:1,class:"mdi mdi-star-outline"},Be={key:0,class:"mdi mdi-star"},Le={key:1,class:"mdi mdi-star-outline"},je={key:0,class:"mdi mdi-star"},Ee={key:1,class:"mdi mdi-star-outline"},Ne=m(()=>e("button",{class:"btn btn-success border border-1 border-black elevation-5 p-0 m-0 px-3 py-2"},"Post Review",-1)),Oe=m(()=>e("div",{class:"review-btn-container position-absolute"},[e("button",{"data-bs-toggle":"modal","data-bs-target":"#reviewModal",class:"btn btn-success ms-md-5 position-fixed review-btn border border-1 border-black elevation-5"},[S("Add Review "),e("i",{class:"mdi mdi-plus"})])],-1));function Te(l,s,d,t,h,x){const u=_("EditRecipeForm"),f=_("ModalWrapper"),i=_("ReviewCard"),A=_("GroceryListModal");return a(),r("div",J,[e("h1",K,[S(p(t.recipe.title)+" ",1),e("span",Y,"- "+p(t.recipe.readyInMinutes)+" Mins",1)]),Q,e("div",X,[e("img",{src:t.recipe.image,alt:"Recipe Cover Image",height:"300",width:"350",class:"rounded rounded-5 border border-2 border-dark elevation-5 recipe-image"},null,8,Z)]),e("div",$,[t.account.id?(a(),r("div",ee,[e("button",{class:"btn btn-success border border-1 border-black elevation-5 p-0 m-0 px-3 py-2",onClick:s[0]||(s[0]=(...o)=>t.addOrRemoveFavorite&&t.addOrRemoveFavorite(...o))},[t.isFavorite?(a(),r("i",ie)):(a(),r("i",te))])])):y("",!0),t.account.id==t.recipe.creatorId?(a(),r("div",se,[e("button",{onClick:s[1]||(s[1]=(...o)=>t.deleteRecipe&&t.deleteRecipe(...o)),class:"btn btn-danger border border-1 border-black p-0 m-0 px-3 py-2 elevation-5"},"Delete Recipe")])):y("",!0),t.account.id==t.recipe.creatorId?(a(),r("div",oe,[b(f,{id:"editRecipe"},{button:D(()=>[ae]),body:D(()=>[b(u)]),_:1})])):y("",!0)]),e("section",re,[t.recipe.ingredients?(a(),r("div",ne,[e("div",ce,[de,e("h3",le,p(t.recipe.servings)+" SERVINGS",1)]),e("ul",me,[(a(!0),r(I,null,F(t.ingredients,o=>(a(),r("li",{class:"bg-white p-0 m-0 mt-3 py-3 px-3 rounded rounded-5 elevation-3 d-flex flex-row justify-content-start align-items-center",key:o,"data-aos":"zoom-out-up"},[e("i",{class:"mdi mdi-cart p-0 m-0 text-success fs-2 selectable",onClick:Pe=>t.addToList(o)},null,8,ve),pe,e("span",ue,p(o.name)+" - "+p(o.measureAmount)+" "+p(o.measureUnit),1)]))),128))])])):y("",!0),_e]),e("section",ye,[be,e("div",fe,[we,(a(!0),r(I,null,F(t.reviews,o=>(a(),r("div",{key:o.id,class:"col-12"},[b(i,{review:o},null,8,["review"])]))),128)),e("div",ge,[e("div",he,[e("div",xe,[Re,e("div",ke,[e("form",{onSubmit:s[8]||(s[8]=V((...o)=>t.createReview&&t.createReview(...o),["prevent"])),class:"form-control py-4"},[e("div",Ce,[e("button",{type:"button",onClick:s[2]||(s[2]=o=>t.reviewData.rating=1),class:"btn text-warning fs-1"},[t.reviewData.rating>=1?(a(),r("i",De)):(a(),r("i",Ie))]),e("button",{type:"button",onClick:s[3]||(s[3]=o=>t.reviewData.rating=2),class:"btn text-warning fs-1"},[t.reviewData.rating>=2?(a(),r("i",Fe)):(a(),r("i",Me))]),e("button",{type:"button",onClick:s[4]||(s[4]=o=>t.reviewData.rating=3),class:"btn text-warning fs-1"},[t.reviewData.rating>=3?(a(),r("i",Se)):(a(),r("i",Ae))]),e("button",{type:"button",onClick:s[5]||(s[5]=o=>t.reviewData.rating=4),class:"btn text-warning fs-1"},[t.reviewData.rating>=4?(a(),r("i",Be)):(a(),r("i",Le))]),e("button",{type:"button",onClick:s[6]||(s[6]=o=>t.reviewData.rating=5),class:"btn text-warning fs-1"},[t.reviewData.rating>=5?(a(),r("i",je)):(a(),r("i",Ee))])]),G(e("input",{"onUpdate:modelValue":s[7]||(s[7]=o=>t.reviewData.comment=o),class:"form-control my-4",placeholder:"Your Comment",type:"text",required:"",maxlength:"200",minlength:"4"},null,512),[[U,t.reviewData.comment]]),Ne],32)])])])]),Oe])]),b(A)])}const Ge=B(q,[["render",Te],["__scopeId","data-v-4df0a821"]]);export{Ge as default};