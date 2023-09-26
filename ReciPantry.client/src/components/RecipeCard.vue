<template>
    <!-- Add router link with params being the props.recipe.id -->
    <div class="card-container p-0 m-0 rounded rounded-5 my-2 border border-1 border-dark elevation-5" :style="{ backgroundImage: 'url(' + props.recipe.image + ')' }">
    </div>
</template>

<script>
import { computed } from 'vue';
import { AppState } from '../AppState.js';
import { Recipe } from '../models/Recipe.js';

    export default {
        props: {recipe: {type: [Recipe, Object], required: true}},
        setup(props){
            return{
                props
            }
        }
    }
</script>

<style lang="scss" scoped>
.card-container{
    width: 100%;
    height: 7rem;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
</style>