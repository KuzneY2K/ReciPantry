<template>
  <nav class="navbar position-relative navbar-dark bg-white d-flex flex-row justify-content-center elevation-5"
    id="navbarBox">
    <div id="navbarText d-flex flew-row justify-content-around">
      <ul class="navbar-nav d-flex flex-row justify-content-between m-auto">
        <li class="mx-2">
          <router-link :to="{ name: 'Home' }"
            class="btn text-success selectable text-uppercase animate__animated animate__bounce" id="navbarHomeBox">
            <img src="https://i.imgur.com/rNYQdS7.png" alt="" height="30">
          </router-link>
        </li>
        <li class="mx-2">
          <router-link :to="{ name: 'Recipes' }"
            class="btn text-success selectable text-uppercase animate__animated animate__bounce" id="navbarRecipesBox">
            <img src="https://i.imgur.com/HkbRCBE.png" alt="" height="30">
          </router-link>
        </li>

        <li class="mx-2">
          <router-link :to="{ name: 'Community' }"
            class="btn text-success selectable text-uppercase animate__animated animate__bounce" id="navbarCommunityBox">
            <img src="https://i.imgur.com/msy9hgt.png" alt="" height="30">
          </router-link>
        </li>

        <li class="mx-2">
          <router-link :to="{ name: 'Account' }"
            class="btn text-success selectable text-uppercase animate__animated animate__bounce" id="navbarAccountBox">
            <img src="https://i.imgur.com/3bXnC5K.png" v-if="account.id" alt="" height="30"> <span class="fs-4 loginText"
              v-if="!account.id">Login</span>
          </router-link>
        </li>

        <li class="mx-2">
          <router-link :to="{ name: 'About' }"
            class="btn text-dark selectable text-uppercase animate__animated animate__bounce" height="35"
            id="navbarAboutBox">
            <img src="https://i.imgur.com/4divXgR.png" alt="" height="30">
          </router-link>
        </li>

      </ul>
      <!-- LOGIN COMPONENT HERE -->
    </div>
  </nav>
</template>

<script>
import { AppState } from '../AppState';
import { computed, watchEffect, ref, onMounted } from 'vue';
import { logger } from '../utils/Logger.js';
import AboutPage from '../pages/AboutPage.vue';
export default {
  setup() {

    return {
      account: computed(() => AppState.account)
    }
  },
}
</script>

<style scoped>
.navbar.disabled {
  pointer-events: none;
}

a:hover {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
}

@media screen and (min-width: 768px) {
  nav {
    height: 64px;
  }
}
</style>
