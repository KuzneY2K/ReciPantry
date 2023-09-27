<template>
  <div class="container">
    <section class="row">
        <button class="btn selectable text-success lighten-30 text-uppercase my-2 my-lg-0" @click="login"
        v-if="!user.isAuthenticated">
        Login
        </button>
      <div class="mt-3 list-group-item dropdown-item list-group-item-action text-danger selectable text-dark fs-2 col-12 text-end" @click="logout">
                <i class="mdi mdi-logout"></i>
                Logout
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
        <ModalWrapper id="edit-account" btnColor="dark-outline">
          <template #button>
            <h1 class="fs-2 btn btn-outline-dark">EDIT ACCOUNT <i class="mdi mdi-head"></i></h1>
          </template>
          <template #body>
edit here
          </template>
          </ModalWrapper>
      </div>
      <div class="col-12 text-center mt-3">
          <ModalWrapper id="preferences" btnColor="dark-outline">
            <template #button>
              <h1 class="fs-2 btn btn-outline-dark">PREFERENCES <i class="mdi mdi-heart"></i></h1>
            </template>
            <template #body>
  preferences
            </template>
          </ModalWrapper>
      </div>
      <div class="col-12 text-center mt-3">
        <button class="btn btn-outline-dark">
          <h1>MY RECIPES</h1>
        </button>
      </div>
      <div class="col-12 text-center mt-3">
        <button class="btn btn-outline-dark">
          <h1>FAV RECIPES</h1>
        </button>
      </div>
    </section>
  </div>
</template>

<script>
import { computed } from 'vue';
import { AppState } from '../AppState';
import { AuthService } from '../services/AuthService'
import ModalWrapper from '../components/ModalWrapper.vue';
export default {
    setup() {
        return {
          user: computed(() => AppState.user),
            account: computed(() => AppState.account),

      async logout() {
        AuthService.logout({ returnTo: window.location.origin })
      },

      async login() {
        AuthService.loginWithPopup()
      },
        };
    },
    components: { ModalWrapper }
}
</script>

<style scoped>
img {
  max-width: 200px;
}
</style>
