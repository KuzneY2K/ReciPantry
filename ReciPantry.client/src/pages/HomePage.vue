<template>
  <section class="row p-0 m-0">
  <div class="col-10 d-flex flex-column align-items-start justify-content-start p-0 m-0 mt-4 ms-4">
    <h1 class="home-title"><span class="text-success">FIND</span> THE RECIPE THAT <br>SUITS <span class="text-success">YOU</span></h1>
  </div>
  </section>.
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
