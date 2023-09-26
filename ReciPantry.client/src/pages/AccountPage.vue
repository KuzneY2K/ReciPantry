<template>
  <div class="container">
    <section class="row">
      <!-- STUB Account info -->
      <div class="about text-center mt-5 col-12">
        <h1 class="p-2">My Account</h1>
        <img class="rounded" :src="account.picture" alt="" />
        <h2 class="mt-3">{{ account.name }}</h2>
      </div>
      <!-- STUB Account page buttons -->
      <div class="col-12 text-center mt-5">
        <button class="btn btn-outline-dark">
          <h1>EDIT ACCOUNT</h1>
        </button>
      </div>
      <div class="col-12 text-center mt-3">
        <button class="btn btn-outline-dark">
          <h1>PREFERENCES</h1>
        </button>
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
    <!-- STUB  insert recipe card here-->

  </div>
</template>

<script>
import { computed } from 'vue';
import { AppState } from '../AppState';
export default {
  setup() {
    return {
      account: computed(() => AppState.account)
    }
  }
}
</script>

<style scoped>
img {
  max-width: 200px;
}
</style>
