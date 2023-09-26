<template>
  <section class="row p-0 m-0 container-fluid">
    <div class="col-12 p-0 m-0">
      <h1 class="home-title postion-absolute ms-4 mt-4"><span class="text-success">FIND</span> THE RECIPE THAT <br>SUITS <span class="text-success">YOU</span></h1>
    </div>
  </section>
  <section class="row p-0 m-0 container-fluid">
    
  </section>
  <section class="row p-0 m-0 container-fluid">
    <div class="col-12 p-0 m-0">
      <!-- COMPLETELY SEPARATE FROM RECIPE CARDS. -->
      <!-- These are the cards that can be side scrolled on the home page. -->
      <LandingCard />
    </div>
  </section>
</template>

<script>
import { recipesService } from '../services/RecipesService.js'
export default {
  setup() {
    return {
      async getRecipe(){
        await recipesService.getRecipe()
      }
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
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
}
</style>
