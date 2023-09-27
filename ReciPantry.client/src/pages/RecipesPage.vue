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
      <section class="row p-0 m-0 mt-4 mb-4">
        <div class="col-12 p-0 m-0 px-2" v-if="recipes[0]">
        <div class="btn-container d-flex flex-row justify-content-between">
            <button v-if="pageNum >= 1" @click="previousPage()">Previous Page</button>
            <button v-if="pageNum <= 1" @click="previousPage()" disabled>Previous Page</button>
            <button @click="nextPage()">Next Page</button>
        </div>
    </div>
      </section>
</template>

<script>
import { computed } from 'vue';
import { AppState } from '../AppState.js';
import { recipesService } from '../services/RecipesService.js';

    export default {
        setup(){
            return{
                recipes: computed(() => AppState.recipes),
                pageNum: computed(() => AppState.pageNum),
                query: computed(() => AppState.savedQuery),

                async nextPage(){
                    AppState.pageNum += 1
                    await recipesService.paginate(this.query)
                },

                async previousPage(){
                    AppState.pageNum -= 1
                    await recipesService.paginate(this.query)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>