<template>
    <div v-if="recipe">
        <!-- Pulls recipe title from active recipe -->
        <h1 class="text-center mt-3 text-success">{{ recipe.title }}</h1>
            <div class="img-container d-flex flex-column align-items-center justify-content-center">
                <!-- Pulls recipe cover image from active recipe -->
                <img :src="recipe.image" alt="Recipe Cover Image" height="300" width="350" class="rounded rounded-5 border border-1 border-dark elevation-5 recipe-image">

            </div>
            <!-- To render only IF there is an active recipe, otherwise error will be thrown -->
            <div class="ingredients-container p-0 m-0 px-4 mt-4" v-if="recipe.ingredients">
                    <h3 class="p-0 m-0">Ingredients</h3>
                    <ul class="p-0 m-0 list-unstyled">
                        <!-- Dont take this approach, VUE is amazing for its v-for method -->

                        <!-- <li class="p-0 m-0">{{ recipe.ingredients[0]?.name }} - Amount: {{ recipe.ingredients[0]?.amount }} <br> {{ recipe.ingredients[0]?.measures?.us.amount + recipe.ingredients[0]?.measures?.us.unitShort }}</li> -->

                        <!-- For every recipe available, render it's card out. -->
                        <li class="bg-white p-0 m-0 mt-3 py-3 px-3 rounded rounded-5 elevation-3 d-flex flex-row justify-content-start align-items-center" v-for="ingredient in ingredients" :key="ingredient">
                        <!-- Cart icon so user can add ingredient to shopping list -->
                            <i class="mdi mdi-cart p-0 m-0 text-success fs-2"></i>
                        <!-- Checkbox for checking off what a user has and doesnt has -->    
                            <input type="checkbox" name="have" class="form-check-input mx-2">
                            <span class="fs-5 ingredient-name">{{ ingredient.original }}</span>
                                
                        </li>
                    </ul>
                </div>
                <div class="instructions-container p-0 m-0 px-4 mt-4">
                    <h3 class="p-0 m-0">Instructions</h3>
                    <!-- Very primitive REGEX. Needs to be replaced with something cleaner. -->
                   <p class="bg-white p-4 mt-3 rounded rounded-5 elevation-3 fs-5"> {{ recipe.instructions?.replaceAll('<ol>', '').replaceAll('</ol>', '').replaceAll('<li>', '').replaceAll('</li>', '') }} </p>
                </div>
    </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { recipesService } from '../services/RecipesService.js';
import {AppState} from '../AppState.js'
    export default {
        setup(){
            let route = useRoute()


            // Community Recipe function should be different, mayhaps - getCommunityRecipeById()
            async function getRecipeById(){
                AppState.activeRecipe = {}
                await recipesService.getRecipeById(route.params.recipeId)
            }

            onMounted(() => {
                getRecipeById()
            })
            return{
                recipe: computed(() => AppState.activeRecipe),
                ingredients: computed(() => AppState.activeRecipe.ingredients)
            }
        }
    }
</script>

<style lang="scss" scoped>

// .cart-btn{
//     right: -3rem !important;
// }

.recipe-image{
    object-fit: cover;
}
</style>