<template>
  <header class="sticky-top">
    <NavbarDesktop class="d-md-flex d-none" />
  </header>
  <main class="p-0 m-0 pattern-cross-dots-sm" id="main">
    <router-view />
  </main>
  <footer class="sticky-bottom">
    <Navbar class="d-md-none" />
  </footer>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'

export default {
  setup() {
    onMounted(() => {
    })
    return {
      appState: computed(() => AppState)
    }
  },
  components: { Navbar }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

:root {
  --main-height: calc(100vh - 32px - 64px);
}
</style>
