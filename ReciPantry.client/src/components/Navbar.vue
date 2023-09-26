<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-white px-3 d-flex flex-row justify-content-center">
    <div id="navbarText d-flex flew-row justify-content-around">
      <ul class="navbar-nav d-flex flex-row justify-content-around">
        <li class="px-3">
          <router-link :to="{ name: 'Home' }" class="btn text-success selectable text-uppercase">
            <img src="https://i.imgur.com/rNYQdS7.png" alt="" height="35">
          </router-link>
        </li>
        <li class="px-3">
          <router-link :to="{ name: 'Home' }" class="btn text-success selectable text-uppercase">
            <img src="https://i.imgur.com/HkbRCBE.png" alt="" height="35">
          </router-link>
        </li>
        <li class="px-3">
          <router-link :to="{ name: 'Home' }" class="btn text-success selectable text-uppercase">
            <img src="https://i.imgur.com/msy9hgt.png" alt="" height="35">
          </router-link>
        </li>
        <li class="px-3">
          <router-link :to="{ name: 'Account' }" class="btn text-success selectable text-uppercase">
            <img src="https://i.imgur.com/3bXnC5K.png" alt="" height="35">
          </router-link>
        </li>
      </ul>
      <!-- LOGIN COMPONENT HERE -->
    </div>
  </nav>
</template>

<script>
import Login from './Login.vue';
export default {
  setup() {
    return {}
  },
}
</script>

<style scoped>
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
