<template>
      <section class="row p-0 m-0 container-fluid animate__animated animate__fadeInDownBig">
        <div class="col-12 p-0 m-0 d-flex flex-row justify-content-center">
              <SearchBar />
        </div>
      </section>
      <section class="row p-0 m-0">
        <div class="col-12 d-flex flex-column align-items-center justify-content-center">
            <RecipeCard v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
        </div>
      </section>
</template>

<script>
import { computed } from 'vue';
import { AppState } from '../AppState.js';

    export default {
        setup(){
            return{
                recipes: computed(() => AppState.recipes)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>