<template>
      <section class="row p-0 m-0 animate__animated animate__fadeInDownBig">
        <div class="col-12 p-0 m-0 d-flex flex-column align-items-center justify-content-center">
            <h1 class="mt-3">Find your perfect <span class="text-success">Recipe</span></h1>
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
            <button v-if="pageNum >= 1" @click="previousPage()" class="btn btn-success text-white">Previous Page</button>
            <!-- UI prevents user from going into negative pageNum -->
            <button v-if="pageNum < 1" @click="previousPage()" class="btn btn-success text-white" disabled>Previous Page</button>
            <!-- Go forward -->
            <button @click="nextPage()" class="btn btn-success text-white">Next Page</button>
        </div>
    </div>
      </section>
</template>

<script>
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState.js';
import { recipesService } from '../services/RecipesService.js';
import Pop from '../utils/Pop.js';
import { logger } from '../utils/Logger.js';

    export default {
        setup(){
            // Gets random recipes so that the Recipes page isnt empty. 
            // Only gets recipes if the appstate recipes are empty. Removes conflict with categories
            async function getRandomRecipes(){
                try {
                    logger.log(AppState.selectedCategory)
                    if(AppState.selectedCategory == null){
                        await recipesService.getRandomRecipes()
                    }
                } catch (error) {
                    Pop.error(error)
                }
            }

            onMounted(() => {
                getRandomRecipes()
            })
            return{
                recipes: computed(() => AppState.recipes),
                pageNum: computed(() => AppState.pageNum),
                // After every recipe search the users query params are sent to the appstate so that these buttons can access them
                query: computed(() => AppState.savedQuery),

                // Offset is basically how many results the api skips over. Kinda like a next page / prev page thing
                // Next page, increases page count to increase search offset
                async nextPage(){
                    try {
                        AppState.pageNum += 1
                        await recipesService.paginate(this.query)
                    } catch (error) {
                        Pop.error(error)
                    }
                },

                // Previous page, decreases page count to decrease search offset
                async previousPage(){
                    try {
                        AppState.pageNum -= 1
                        await recipesService.paginate(this.query)
                    } catch (error) {
                        Pop.error(error)
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>