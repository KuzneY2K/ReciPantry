<template>
    <div class="card-container p-0 m-0 text-center mt-3 rounded rounded-5 elevation-5 position-relative animate__animated animate__bounceInUp" v-if="randomRecipe[0]" :style="{ backgroundImage: 'url(' + randomRecipe[0].image + ')' }">
        <div class="title-container p-0 m-0 text-start ms-4">
            <h2 class="p-0 m-0 position-absolute card-title text-white fs-1 w-75">{{randomRecipe[0].title}}</h2>
            <h4 class="p-0 m-0 position-absolute ingredientsCount text-white fs-3">{{ randomRecipe[0].ingredientsCount }} Ingredients</h4>
        </div>
    </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState.js';
import {recipesService} from '../services/RecipesService.js'

    export default {
        setup(){
                async function getOneRecipe() {
            await recipesService.getOneRecipe()
        }
        onMounted(() => {
            getOneRecipe()
        })
            return{
                
                randomRecipe: computed(() => AppState.randomRecipe)
            }
        }
    }
</script>

<style lang="scss" scoped>

.card-container {
    height: 23rem;
    width: 18rem;
    background-size: cover;
    background-position: center;
}

.card-title{
    bottom: 4rem;
    text-shadow: 1px 1px 5px black;
}

.ingredientsCount{
    bottom: 2rem;
        text-shadow: 1px 1px 5px black;
}

</style>