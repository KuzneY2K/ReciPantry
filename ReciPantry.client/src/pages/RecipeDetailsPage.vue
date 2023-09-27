<template>
    <div v-if="recipe">
        <h1 class="text-center mt-3 text-success">{{ recipe.title }}</h1>
            <div class="img-container d-flex flex-column align-items-center justify-content-center">
                <img :src="recipe.image" alt="Recipe Cover Image" height="300" width="350" class="rounded rounded-5 border border-1 border-dark elevation-5 recipe-image">

            </div>                
            <div class="ingredients-container p-0 m-0 px-4 mt-4" v-if="recipe.ingredients">
                    <h3 class="p-0 m-0">Ingredients</h3>
                    <ul class="p-0 m-0 list-unstyled">
                        <!-- <li class="p-0 m-0">{{ recipe.ingredients[0]?.name }} - Amount: {{ recipe.ingredients[0]?.amount }} <br> {{ recipe.ingredients[0]?.measures?.us.amount + recipe.ingredients[0]?.measures?.us.unitShort }}</li> -->
                        <li class="bg-white p-0 m-0 mt-3 py-2 px-2 rounded rounded-5 elevation-3 " v-for="ingredient in ingredients" :key="ingredient"><input type="checkbox" name="have" class="form-check-input ms-2">
                            {{ ingredient.original }} 
                        </li>
                    </ul>
                </div>
                <div class="instructions-container p-0 m-0 px-4 mt-4">
                    <h3 class="p-0 m-0">Instructions</h3>
                   <p> {{ recipe.instructions?.replaceAll('<ol>', '').replaceAll('</ol>', '').replaceAll('<li>', '').replaceAll('</li>', '') }} </p>
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


            // Communite Recipe function should be different, mayhaps - getCommunityRecipeById()
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
.recipe-image{
    object-fit: cover;
}
</style>