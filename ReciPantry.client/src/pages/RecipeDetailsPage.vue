<template>
    <div>
        recipe details
    </div>
</template>

<script>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { recipesService } from '../services/RecipesService.js';

    export default {
        setup(){
            let route = useRoute()


            // Communite Recipe function should be different, mayhaps - getCommunityRecipeById()
            async function getRecipeById(){
                await recipesService.getRecipeById(route.params.recipeId)
            }

            onMounted(() => {
                getRecipeById()
            })
            return{

            }
        }
    }
</script>

<style lang="scss" scoped>

</style>