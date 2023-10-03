<template>
  <div class="container" v-if="account">
    <section class="row">

      <!-- STUB Account info -->
      <div class="about text-center mt-5 col-12">
        <h1 class="p-2">My Account</h1>
        <img class="profile-pic rounded border border-1 border-black elevation-5" :src="account.picture" alt="" />
        <h2 class="mt-3">{{ account.name }}</h2>
        <div class="list-group-item dropdown-item list-group-item-action text-dark fs-2 col-12" @click="logout">
          <span class="selectable p-2 btn btn-success p-0 m-0 px-4 py-2">
            <i class="mdi mdi-logout"></i>
            Logout
          </span>
        </div>
      </div>
      <!-- STUB Account page buttons -->
      <!-- Edit account modal -->

      <div class="col-12 text-center mt-3">
        <ModalWrapper id="edit-account">
          <template #button>
            <h1 class="fs-2 btn btn-outline-dark">EDIT ACCOUNT <i class="mdi mdi-head"></i></h1>
          </template>
          <template #body>
            <EditAccountForm />
          </template>
        </ModalWrapper>
      </div>
      <div class="col-12 text-center mt-1">
        <ModalWrapper id="preferences">
          <template #button>
            <h1 class="fs-2 btn btn-outline-dark">PREFERENCES <i class="mdi mdi-heart"></i></h1>
          </template>
          <template #body>
            preferences
          </template>
        </ModalWrapper>
      </div>


      <div class="col-12 text-center mt-2">
        <button class="btn btn-outline-dark" data-bs-toggle="collapse" data-bs-target="#myRecipes">
          <h1 class="fs-2 pt-2">MY <i class="mdi mdi-bomb"></i> RECIPES </h1>
        </button>
      </div>
      <div class="collapse" id="myRecipes">
        <section class="row">
          <div class="flex-column align-items-center" v-for="recipe in recipes" :key="recipe.id">
            <CommunityRecipeCard :recipe="recipe" />
          </div>
        </section>
      </div>

      <div class="col-12 text-center mt-3">
        <button class="btn btn-outline-dark" data-bs-toggle="collapse" data-bs-target="#favRecipes">
          <h1 class="fs-2 pt-2">FAV RECIPES <i class="mdi mdi-fire"></i></h1>
        </button>
      </div>
      <div class="collapse" id="favRecipes">
        <section class="row">
          <div v-for="recipe in myFavoriteRecipes" :key="recipe.id" class="col-12 d-flex flex-column align-items-center">
            <CommunityRecipeCard :recipe="recipe.recipe" />
          </div>
        </section>
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
