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
                              <!-- Filter Modal -->
                <div class="modal fade" id="filterModal" tabindex="-1" aria-labelledby="filterModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="filterModalLabel">Filter Search</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <form @submit.prevent="setFilterData()">
                            <section class="row p-0 m-0">
                                <div class="col-12 p-0 m-0">
                                    <h3>Dietary Filters</h3>
                                    <div class="input-group flex-nowrap">
                                        <input type="checkbox" name="veganCheck" id="veganCheck" v-model="filterData.veganCheck">
                                        <label for="veganCheck" class="ms-2">Vegan</label>
                                    </div>
                                    <div class="input-group flex-nowrap">
                                        <input type="checkbox" name="vegetarianCheck" id="vegeterianCheck" v-model="filterData.vegetarianCheck">
                                        <label for="vegetarianCheck" class="ms-2">Vegetarian</label>
                                    </div>
                                    <div class="input-group flex-nowrap">
                                        <input type="checkbox" name="glutenFreeCheck" id="glutenFreeCheck" v-model="filterData.glutenFreeCheck">
                                        <label for="glutenFreeCheck" class="ms-2">Gluten Free</label>
                                    </div>
                                    <div class="input-group flex-nowrap">
                                        <input type="checkbox" name="pescetarianCheck" id="pescetarianCheck" v-model="filterData.pescetarianCheck">
                                        <label for="pescetarianCheck" class="ms-2">Pescetarian</label>
                                    </div>       
                                    <div class="input-group flex-nowrap">
                                        <input type="checkbox" name="ketoCheck" id="ketoCheck" v-model="filterData.ketoCheck">
                                        <label for="ketoCheck" class="ms-2">Ketogenic</label>
                                    </div>
                                    <h3>Exclude Intolerances</h3>
                                    <div class="input-group flex-nowrap">
                                        <input type="checkbox" name="dairyCheck" id="dairyCheck" v-model="filterData.dairyCheck">
                                        <label for="dairyCheck" class="ms-2">No Dairy</label>
                                    </div>             
                                </div>
                            </section>
                            <button type="submit" class="btn btn-primary" @click="searchRecipesByQuery()">Save changes</button>
                        </form>
                      </div>
                      <div class="modal-footer">
                      </div>
                    </div>
                  </div>
                </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue';
import { AppState } from '../AppState.js';
import { recipesService } from '../services/RecipesService.js';
import Pop from '../utils/Pop.js';
import { logger } from '../utils/Logger.js';
import { Modal } from 'bootstrap';

    export default {
        setup(){

            let filterData = ref([])

            // Gets random recipes so that the Recipes page isnt empty. 
            // Only gets recipes if the appstate selected category is null. Removes conflict with categories
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
                categories: computed(() => AppState.selectedCategory),
                filterData,

                setFilterData(){
                    filterData.value.veganCheck == true ? filterData.value.vegan = '&diet=Vegan' : filterData.value.vegan = ''
                    filterData.value.vegetarianCheck == true ? filterData.value.vegetarian = '&diet=Vegetarian' : filterData.value.vegetarian = ''
                    filterData.value.glutenFreeCheck == true ? filterData.value.glutenFree = '&diet=Gluten Free' : filterData.value.glutenFree = ''
                    filterData.value.pescetarianCheck == true ? filterData.value.pescetarian = '&diet=Pescetarian' : filterData.value.pescetarian = ''
                    filterData.value.ketoCheck == true ? filterData.value.keto = '&diet=Ketogenic' : filterData.value.keto = ''
                    logger.log(filterData.value)
                    recipesService.setFilterData(filterData)
                    Modal.getOrCreateInstance('#filterModal').hide()
                },

                // On 'save changes' search recipes
                async searchRecipesByQuery() {
                try {
                    AppState.selectedCategory = null
                    await recipesService.searchRecipesByQuery(AppState.savedQuery)
                } catch (error) {
                    Pop.error(error)
                }
            },


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