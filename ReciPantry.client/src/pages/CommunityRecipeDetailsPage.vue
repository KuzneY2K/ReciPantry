<template>
    <div v-if="recipe">
        <!-- Pulls recipe title from active recipe -->
        <h1 class="text-start ms-4 mt-3 text-success position-relative">{{ recipe.title }} <span class="text-black">- {{
            recipe.readyInMinutes }} Mins</span></h1>
        <div class="grocery-btn-container postion-absolute">
            <!-- Grocery List modal toggle -->
            <button class="btn btn-success position-fixed grocery-list border border-1 border-black elevation-5"
                data-bs-toggle="modal" data-bs-target="#groceryListModal"><i class="mdi mdi-list-box"></i></button>
        </div>
        <div class="img-container d-flex flex-column align-items-center justify-content-center">
            <!-- Pulls recipe cover image from active recipe -->
            <img :src="recipe.image" alt="Recipe Cover Image" height="300" width="350"
                class="rounded rounded-5 border border-1 border-dark elevation-5 recipe-image">
        </div>
        <!-- To render only IF there is an active recipe, otherwise error will be thrown -->
        <div class="ingredients-container p-0 m-0 px-4 mt-4" v-if="recipe.ingredients">
            <div class="ingredients-header d-flex flex-row justify-content-between align-items-center">
                <h1 class="p-0 m-0">Ingredients</h1>
                <h3 class="badge bg-success fs-5 servings elevation-3">{{ recipe.servings }} SERVINGS</h3>
            </div>
            <ul class="p-0 m-0 list-unstyled">
                <!-- Dont take this approach, VUE is amazing for its v-for method -->

                <!-- <li class="p-0 m-0">{{ recipe.ingredients[0]?.name }} - Amount: {{ recipe.ingredients[0]?.amount }} <br> {{ recipe.ingredients[0]?.measures?.us.amount + recipe.ingredients[0]?.measures?.us.unitShort }}</li> -->

                <!-- For every recipe available, render it's card out. -->
                <li class="bg-white p-0 m-0 mt-3 py-3 px-3 rounded rounded-5 elevation-3 d-flex flex-row justify-content-start align-items-center"
                    v-for="ingredient in ingredients" :key="ingredient">
                    <!-- Cart icon so user can add ingredient to shopping list -->
                    <i class="mdi mdi-cart p-0 m-0 text-success fs-2" @click="addToList(ingredient)"></i>
                    <!-- Checkbox for checking off what a user has and doesnt has -->
                    <input type="checkbox" name="have" class="form-check-input m-0 p-0 mx-2 checkbox">
                    <span class="fs-5 m-0 p-0 ingredient-name">{{ ingredient.original }}</span>

                </li>
                <li>
                    <!-- Button that pulls up nutrition facts specific to the meal -->
                    <div class="nutrition-btn-container d-flex flex-column justify-content-center align-items-center mt-4">
                        <button class="btn btn-success fs-2 px-4 rounded rounded-5 elevation-5" data-bs-toggle="modal"
                            data-bs-target="#nutritionModal">SEE NUTRITION FACTS <img src="https://i.imgur.com/WbcjLNE.png"
                                alt="" height="30"></button>
                    </div>
                </li>
            </ul>
            <!-- Nutrition facts Modal -->
            <div class="modal fade" id="nutritionModal" tabindex="-1" aria-labelledby="nutritionModalLabel"
                aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <!-- Widget's Containing ALL data for meal, turn into modal -->
                            <div class="widgets p-0 m-0">
                                <div class="nutrition-label">
                                </div>
                            </div>
                        </div>
                        <!-- Closes modal -->
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="instructions-container p-0 m-0 px-4 mt-4">
            <h1 class="p-0 m-0">Instructions</h1>
            <!-- Very primitive REGEX. Needs to be replaced with something cleaner. -->
            <p class="bg-white p-4 mt-3 rounded rounded-5 elevation-3 fs-5">

                INSTRUCTIONS

            </p>
            <!-- <div class="bg-white p-4 mt-3 rounded rounded-5 elevation-3 fs-5 instructions">
                        
                    </div> -->
        </div>

        <!-- Summary of the recipe. Inner HTML is set to the summary to utilize HTML elements within the summary that is returned from the API -->
        <div class="summary-container p-0 m-0 px-4 mt-4 mb-4">
            <h1 class="p-0 m-0">About The Recipe</h1>
            <div class="bg-white p-4 mt-3 rounded rounded-5 elevation-3 fs-5 summary">

            </div>
        </div>
        <div>
            <button class=" m-2 btn btn-danger">Delete Recipe</button>
        </div>
        <div>
            <div v-for="review in reviews" :key="review.id" class="col-12">
                <ReviewCard :review="review" />
            </div>
        </div>
        <!-- MODAL - CONVERT TO COMPONENT -->
        <div class="modal fade" id="groceryListModal" tabindex="-1" aria-labelledby="groceryListModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title fs-2" id="groceryListModalLabel">My <span class="text-success">Grocery</span>
                            List</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <ul class="list-unstyled">
                            <div class="li-container d-flex flex-row justify-content-between fs-5"
                                v-for="i in ingredientOnList" :key="i">
                                <li> {{ i.name }} </li><i class="mdi mdi-close text-danger"
                                    @click="removeFromList(i.id)"></i>
                            </div>
                        </ul>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, onMounted, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { recipesService } from '../services/RecipesService.js';
import { AppState } from '../AppState.js'
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop';
import { reviewService } from '../services/ReviewService';
export default {
    setup() {
        let route = useRoute()


        // Community Recipe function should be different, mayhaps - getCommunityRecipeById()
        // async function getRecipeById() {
        //     try {
        //         AppState.activeRecipe = {}
        //         await recipesService.getRecipeById(route.params.recipeId)
        //         getReviewsByRecipe();
        //         document.getElementsByClassName('nutrition-label')[0].innerHTML = AppState.nutritionLabel
        //         document.getElementsByClassName('summary')[0].innerHTML = AppState.activeRecipe.summary
        //         // document.getElementsByClassName('instructions')[0].innerHTML = AppState.activeRecipe.instructions
        //     } catch (error) {
        //         Pop.error(error)
        //     }
        // }

        // gets recipe info from route params
        onMounted(() => {
            // getRecipeById();
            getCommunityRecipeById();
            getReviewsByRecipe();
        })
        async function getCommunityRecipeById() {
            try {
                await recipesService.getCommunityRecipeById(route.params.recipeId)
            } catch (error) {
                Pop.error(error)
            }
        }

        // watchEffect(()=> {
        // })

        async function getReviewsByRecipe() {
            try {
                const recipeId = AppState.activeRecipe.id
                await reviewService.getReviewsByRecipe(recipeId)
            } catch (error) {
                Pop.error(error)
            }
        }

        return {
            recipe: computed(() => AppState.activeRecipe),
            ingredients: computed(() => AppState.activeRecipe.ingredients),
            reviews: computed(() => AppState.activeReviews),
            ingredientOnList: computed(() => AppState.groceryList),

            // Adds ingredient to shopping list when clicking on cart.
            // Utilizes localStorage
            async addToList(listItem) {
                logger.log
                if (await Pop.confirm(`Add ${listItem.name} to grocery list?`)) {
                    AppState.groceryList.push(listItem)
                    Pop.success(`Added ${listItem.name} to grocery list!`)
                    logger.log(AppState.groceryList)
                } else {
                    Pop.toast(`${listItem.name} not added to grocery list.`)
                }
                // Change pop confirm message that says "you wont be able to revert"

                // Remove ingredient from shopping list by clicking little X symbol
            },
            async removeFromList(ingredientId) {
                logger.log(ingredientId)
                // if(await Pop.confirm(`Remove ${ingredientName} from gorcery list?`)){
                //     let filteredIngredients = AppState.activeRecipe.ingredients.name != ingredientName
                // }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
// .cart-btn{
//     right: -3rem !important;
// }

.grocery-btn-container {}

.grocery-list {
    bottom: 1rem;
    right: 1rem;
}

.checkbox {
    height: 1.25rem;
    width: 1.25rem;
}

.servings {
    font-family: 'Ubuntu' !important;
}

.recipe-image {
    object-fit: cover;
}
</style>