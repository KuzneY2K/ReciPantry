<template>
      <section class="row p-0 m-0 animate__animated animate__fadeInDownBig">
        <div class="col-12 p-0 m-0 d-flex flex-column align-items-center justify-content-center">
            <h1 class="mt-3">Explore <span class="text-success">Recipes</span></h1>
        <!-- Search bar that takes in parameters & filters 🔎 -->
              <SearchBar />
        </div>
      </section>
      <section class="row p-0 m-0">
        <!-- For every recipe result a clickable card is rendered out -->
        <div class="col-12 d-flex flex-column align-items-center justify-content-center">
            <RecipeCard v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
        </div>
      </section>

      <!-- Pagination buttons, for cleaner UI purposes 📕 -->
      <section class="row p-0 m-0 mt-4 mb-4">
        <div class="col-12 p-0 m-0 px-2" v-if="recipes[0]">
        <div class="btn-container d-flex flex-row justify-content-between">
            <!-- Go back -->
            <button v-if="pageNum >= 1" @click="previousPage()">Previous Page</button>
            <!-- UI prevents user from going into negative pageNum -->
            <button v-if="pageNum < 1" @click="previousPage()" disabled>Previous Page</button>
            <!-- Go forward -->
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
                // After every recipe search the users query params are sent to the appstate so that these buttons can access them
                query: computed(() => AppState.savedQuery),

                // Offset is basically how many results the api skips over. Kinda like a next page / prev page thing
                // Next page, increases page count to increase search offset
                async nextPage(){
                    AppState.pageNum += 1
                    await recipesService.paginate(this.query)
                },

                // Previous page, decreases page count to decrease search offset
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