<template>
  <div class="container" v-if="account">
    <section class="row">

      <!-- STUB Account info -->
      <div class="about text-center p-0 m-0 mt-5 col-12">
        <h1 class="p-2">My Account</h1>
        <img class="profile-pic rounded border border-1 border-black elevation-5" :src="account.picture" alt="" />
        <h2 class="mt-3">{{ account.name }}</h2>
      </div>
      <!-- STUB Account page buttons -->
      <!-- Edit account modal -->
      
      <div class="col-12 text-center mt-3">
        <ModalWrapper id="edit-account" class="p-0 m-0">
          <template #button>
            <h1 class="fs-2 px-5 py-2 btn btn-outline-dark btn btn-success text-white border border-1 border-black elevation-5">EDIT ACCOUNT <i class="mdi mdi-head"></i></h1>
          </template>
          <template #body>
            <EditAccountForm />
          </template>
        </ModalWrapper>
      </div>
      
      <section class="row p-0 m-0 d-flex flex-row justify-content-center align-items-center mb-3">
        <div class="col-12 col-md-4 p-0 m-0 text-center mt-2">
          <button class="p-0 m-0 px-5 py-2 btn btn-success text-white border border-1 border-black elevation-5" data-bs-toggle="collapse" data-bs-target="#myRecipes">
            <h1 class="fs-2 pt-2">MY <i class="mdi mdi-bomb"></i> RECIPES </h1>
          </button>
        </div>
      <div class="collapse p-0 m-0" id="myRecipes">
        <section class="row">
          <div class="col-12 flex-column d-flex align-items-center" v-for="recipe in recipes" :key="recipe.id">
            <CommunityRecipeCard :recipe="recipe" />
          </div>
        </section>
      </div>
      
      <div class="col-12 col-md-4 p-0 m-0 text-center mt-3">
        <button class="p-0 m-0 px-5 py-2 btn btn-success text-white border border-1 border-black elevation-5" data-bs-toggle="collapse" data-bs-target="#favRecipes">
          <h1 class="fs-2 pt-2">FAV RECIPES <i class="mdi mdi-fire"></i></h1>
        </button>
      </div>
      <div class="collapse p-0 m-0" id="favRecipes">
        <section class="row">
          <div v-for="recipe in myFavoriteRecipes" :key="recipe.id" class="col-12 d-flex flex-column align-items-center">
            <CommunityRecipeCard :recipe="recipe.recipe" />
          </div>
        </section>
      </div>
    </section>
    <div class="list-group-item dropdown-item list-group-item-action text-dark fs-2 col-12 log-out d-flex flex-row justify-content-center" @click="logout">
      <span class="selectable p-2 btn p-0 m-0 px-4 py-2 btn btn-danger text-white border border-1 border-black elevation-5 mb-3">
        <i class="mdi mdi-logout"></i>
        Logout
      </span>
    </div>
    </section>
  </div>
</template>

<script>
import { computed, onMounted, watchEffect } from 'vue';
import { AppState } from '../AppState';
import { AuthService } from '../services/AuthService'
import ModalWrapper from '../components/ModalWrapper.vue';
import EditAccountForm from '../components/EditAccountForm.vue'
import Pop from '../utils/Pop';
import { accountService } from '../services/AccountService';
import LandingCard from '../components/LandingCard.vue';
import CommunityRecipeCard from '../components/CommunityRecipeCard.vue';
import { logger } from '../utils/Logger.js';
import PreferencesForm from '../components/PreferencesForm.vue';

export default {
  setup() {
    onMounted(() => {

    })
    watchEffect(() => {
      getMyRecipes()
      getMyFavorites()
    })

    async function getMyRecipes() {
      try {
        await accountService.getMyRecipes()
      } catch (error) {
        Pop.error(error)
      }
    }

    async function getMyFavorites() {
      try {
        await accountService.getMyFavorites(AppState.account.id)
      } catch (error) {
        Pop.error(error)
      }
    }
    return {
      user: computed(() => AppState.user),
      account: computed(() => AppState.account),
      recipes: computed(() => AppState.myRecipes),
      myFavoriteRecipes: computed(() => AppState.myFavorites),

      async logout() {
        AuthService.logout({ returnTo: window.location.origin })
      },

      async login() {
        AuthService.loginWithPopup()
      },
    };
  },
  components: { ModalWrapper, EditAccountForm, CommunityRecipeCard }
}
</script>

<style lang="scss" scoped>
.profile-pic {
  height: 250px !important;
  width: 250px !important;
  object-fit: cover;
  object-position: center;
  border-radius: 500px;
}

img {
  max-width: 200px;
}
</style>
