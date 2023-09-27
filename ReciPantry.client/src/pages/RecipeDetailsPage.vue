<template>
    <div v-if="recipe">
        <h1 class="text-center mt-3 text-success">{{ recipe.title }}</h1>
            <div class="img-container d-flex flex-column align-items-center justify-content-center">
                <img :src="recipe.image" alt="Recipe Cover Image" height="300" width="350" class="rounded rounded-5 border border-1 border-dark elevation-5 recipe-image">
                <div class="ingredients-container">
                    
                </div>
                <div class="instructions-container px-4 mt-4">
                    <h3>Instructions</h3>
                   <p> {{ recipe.instructions?.replaceAll('<ol>', '').replaceAll('</ol>', '').replaceAll('<li>', '').replaceAll('</li>', '') }} </p>
                </div>
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
                recipe: computed(() => AppState.activeRecipe)
            }
        }
    }
</script>

<style lang="scss" scoped>
.recipe-image{
    object-fit: cover;
}
</style>