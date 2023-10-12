import{_ as C,o as k,w as R,d as p,e as b,M as E,E as F,C as M,r as u,a as c,c as a,f as e,t as A,g as m,h,F as g,i as y,j as S,k as n,l as f,P as v,p as I,m as P,n as r}from"./index-d8677cb3.js";const N={setup(){k(()=>{}),R(()=>{s(),l()});async function s(){try{await f.getMyRecipes()}catch(d){v.error(d)}}async function l(){try{await f.getMyFavorites(n.account.id)}catch(d){v.error(d)}}return{user:p(()=>n.user),account:p(()=>n.account),recipes:p(()=>n.myRecipes),myFavoriteRecipes:p(()=>n.myFavorites),async logout(){b.logout({returnTo:window.location.origin})},async login(){b.loginWithPopup()}}},components:{ModalWrapper:E,EditAccountForm:F,CommunityRecipeCard:M}},i=s=>(I("data-v-882152c3"),s=s(),P(),s),V={key:0,class:"container"},T={class:"row"},W={class:"about text-center p-0 m-0 mt-5 col-12"},j=i(()=>e("h1",{class:"p-2"},"My Account",-1)),B=["src"],D={class:"mt-3"},L={class:"col-12 text-center mt-3"},O=i(()=>e("h1",{class:"fs-2 px-5 py-2 btn btn-outline-dark btn btn-success text-white border border-1 border-black elevation-5"},[r("EDIT ACCOUNT "),e("i",{class:"mdi mdi-head"})],-1)),U={class:"row p-0 m-0 d-flex flex-row justify-content-center align-items-center mb-3"},Y=i(()=>e("div",{class:"col-12 col-md-4 p-0 m-0 text-center mt-2"},[e("button",{class:"p-0 m-0 px-5 py-2 btn btn-success text-white border border-1 border-black elevation-5","data-bs-toggle":"collapse","data-bs-target":"#myRecipes"},[e("h1",{class:"fs-2 pt-2"},[r("MY "),e("i",{class:"mdi mdi-bomb"}),r(" RECIPES ")])])],-1)),q={class:"collapse p-0 m-0",id:"myRecipes"},z={class:"row"},G=i(()=>e("div",{class:"col-12 col-md-4 p-0 m-0 text-center mt-3"},[e("button",{class:"p-0 m-0 px-5 py-2 btn btn-success text-white border border-1 border-black elevation-5","data-bs-toggle":"collapse","data-bs-target":"#favRecipes"},[e("h1",{class:"fs-2 pt-2"},[r("FAV RECIPES "),e("i",{class:"mdi mdi-fire"})])])],-1)),H={class:"collapse p-0 m-0",id:"favRecipes"},J={class:"row"},K=i(()=>e("span",{class:"selectable p-2 btn p-0 m-0 px-4 py-2 btn btn-danger text-white border border-1 border-black elevation-5 mb-3"},[e("i",{class:"mdi mdi-logout"}),r(" Logout ")],-1)),Q=[K];function X(s,l,d,t,Z,$){const x=u("EditAccountForm"),w=u("ModalWrapper"),_=u("CommunityRecipeCard");return t.account?(c(),a("div",V,[e("section",T,[e("div",W,[j,e("img",{class:"profile-pic rounded border border-1 border-black elevation-5",src:t.account.picture,alt:""},null,8,B),e("h2",D,A(t.account.name),1)]),e("div",L,[m(w,{id:"edit-account",class:"p-0 m-0"},{button:h(()=>[O]),body:h(()=>[m(x)]),_:1})]),e("section",U,[Y,e("div",q,[e("section",z,[(c(!0),a(g,null,y(t.recipes,o=>(c(),a("div",{class:"col-12 flex-column d-flex align-items-center",key:o.id},[m(_,{recipe:o},null,8,["recipe"])]))),128))])]),G,e("div",H,[e("section",J,[(c(!0),a(g,null,y(t.myFavoriteRecipes,o=>(c(),a("div",{key:o.id,class:"col-12 d-flex flex-column align-items-center"},[m(_,{recipe:o.recipe},null,8,["recipe"])]))),128))])])]),e("div",{class:"list-group-item dropdown-item list-group-item-action text-dark fs-2 col-12 log-out d-flex flex-row justify-content-center",onClick:l[0]||(l[0]=(...o)=>t.logout&&t.logout(...o))},Q)])])):S("",!0)}const te=C(N,[["render",X],["__scopeId","data-v-882152c3"]]);export{te as default};
