<template>
    <div class="card-container p-0 m-0 text-center mt-3 rounded rounded-5 elevation-5 position-relative" v-if="randomRecipe[0]" :style="{ backgroundImage: 'url(' + randomRecipe[0].image + ')' }">
        <h2 class="p-0 m-0 position-absolute card-title text-white fs-1">{{randomRecipe[0].title}}</h2>
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
    bottom: 2rem;
}

</style>