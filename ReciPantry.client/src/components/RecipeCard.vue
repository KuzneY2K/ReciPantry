<template>
    <!-- Add router link with params being the props.recipe.id -->
    <div class="card-container p-0 m-0 rounded rounded-5 my-2 border border-1 border-dark elevation-5 animate__animated animate__fadeInLeftBig postion-relative" :style="{ backgroundImage: 'url(' + props.recipe.image + ')' }">
        <h2 class="postion-absolute text-white recipe-title position-absolute ms-3">{{ props.recipe.title }}</h2>
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
    width: 90%;
    height: 7rem;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.recipe-title {
    bottom: 3rem;
    text-shadow: 1px 1px 5px black;
}
</style>