<template>
  <div class="container" v-if="account">
    <section class="row">
      <div class="mt-3 list-group-item dropdown-item list-group-item-action  text-dark fs-2 col-12 text-end"
        @click="logout">
        <span class="selectable p-2">
          <i class="mdi mdi-logout"></i>
          Logout
        </span>

      </div>
      <!-- STUB Account info -->
      <div class="about text-center mt-5 col-12">
        <h1 class="p-2">My Account</h1>
        <img class="rounded" :src="account.picture" alt="" />
        <h2 class="mt-3">{{ account.name }}</h2>
      </div>
      <!-- STUB Account page buttons -->
      <!-- Edit account modal -->

      <div class="col-12 text-center mt-5">
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
      <div class="collapse" id="myRecipes" v-for="recipe in recipes" :key="recipe.id">
        <RecipeCard :recipe="recipe" />
      </div>

      <div class="col-12 text-center mt-4">
        <button class="btn btn-outline-dark" data-bs-toggle="collapse" data-bs-target="#favRecipes">
          <h1 class="fs-2 pt-2">FAV RECIPES <i class="mdi mdi-fire"></i></h1>
        </button>
      </div>
      <div class="collapse" id="favRecipes">
        <section class="row">
          Fav recipes
        </section>
      </div>

    </section>
  </div>
</template>

<script>
import { computed, watchEffect } from 'vue';
import { AppState } from '../AppState';
import { AuthService } from '../services/AuthService'
import ModalWrapper from '../components/ModalWrapper.vue';
import EditAccountForm from '../components/EditAccountForm.vue'
import Pop from '../utils/Pop';
import { accountService } from '../services/AccountService';
import LandingCard from '../components/LandingCard.vue';
import RecipeCard from '../components/RecipeCard.vue';

export default {
  setup() {
    watchEffect(() => {
      getMyRecipes()
    })

    async function getMyRecipes() {
      try {

        await accountService.getMyRecipes()
      } catch (error) {
        Pop.error(error)
      }
    }

    return {
      user: computed(() => AppState.user),
      account: computed(() => AppState.account),
      recipes: computed(() => AppState.myRecipes),

      async logout() {
        AuthService.logout({ returnTo: window.location.origin })
      },

      async login() {
        AuthService.loginWithPopup()
      },
    };
  },
  components: { ModalWrapper, EditAccountForm, RecipeCard }
}
</script>

<style scoped>
img {
  max-width: 200px;
}
</style>
