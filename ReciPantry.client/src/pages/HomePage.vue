<template>
  <!-- Landing Text -->
  <section class="row p-0 m-0">
    <div class="col-12 p-0 m-0">
      <h1 class="home-title postion-absolute ms-4 mt-4 animate__animated animate__bounceInRight"><span
          class="text-success">FIND</span> THE RECIPE THAT <br>SUITS <span class="text-success">YOU</span> <i
          class="mdi mdi-chef-hat"></i></h1>
    </div>
  </section>
  <!-- Landing Card -->
  <section class="row p-0 m-0">
    <div class="col-12 p-0 m-0 d-flex flex-row justify-content-center landingCardContainer">
      <!-- COMPLETELY SEPARATE FROM RECIPE CARDS. -->
      <!-- These are the cards that can be side scrolled on the home page. -->
      <LandingCard />
    </div>
  </section>
  <!-- GET STARTED BUTTON - Redirects to recipes Search -->
  <section class="row p-0 m-0 animate__animated animate__fadeInDownBig">
    <div class="col-12 p-0 m-0 d-flex flex-row justify-content-center mt-4">
      <RouterLink :to="{ name: 'Recipes' }">
        <button class="btn btn-success p-0 m-0 px-4 py-2 fs-2 elevation-5 border border-1 border-black">Get Started <i
            class="mdi mdi-arrow-right-bold"></i></button>
      </RouterLink>
    </div>
  </section>
  <hr class="animate__animated animate__fadeIn">
  <section class="row p-0 m-0">
    <div class="col-12 p-0 m-0">
      <h1 class="text-center categories-title animate__animated animate__fadeIn">Browse Categories</h1>
    </div>
    <div
      class="col-12 p-0 m-0 d-flex flex-row justify-content-start bubble-container animate__animated animate__fadeInRightBig">
      <CategoryBubble />
    </div>
  </section>
  <hr class="animate__animated animate__fadeIn">
  <section class="row p-0 m-0">
    <div class="col-12 p-0 m-0">
      <h1 class="text-center categories-title animate__animated animate__fadeIn">HOT COMMUNITY PICKS</h1>
    </div>
  </section>
  <!-- FORM PROTOTYPE -->
  <!-- <button @click="addToArray()">+</button>
    <form action="">
      <input v-for="ingredient in ingredientArray" :key="ingredient" v-model="ingredient.body" type="text">
    </form> -->
</template>

<script>
import { computed, ref } from 'vue';
import { AppState } from '../AppState.js';

export default {
  setup() {
    // const ingredientArray = ref([{}])
    return {
      categories: computed(() => AppState.categories),
      // ingredientArray,
      addToArray() {
        // ingredientArray.value.push({})
      }
    }
  }
}
</script>

<style scoped lang="scss">
.bubble-container {
  overflow-x: scroll !important;
}

.categories-title {
  font-size: 2.5rem !important;
}

hr {
  height: 4px;
  width: 75%;
  background-color: black;
  position: relative;
  margin: 20px auto;
}

.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .landingCardContainer {
    overflow-x: scroll !important;
  }

  .home-card {
    width: 50vw;



    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}</style>
