<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-start justify-content-start mt-4 ms-4">
    <h2>Home Page</h2>
  </div>
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
