<template>
    <!-- For each recipe a card is rendered out, instead of using img a div background image is used for UI enhancement -->
    <div class="card-container p-0 m-0 rounded rounded-5 my-2 border border-1 border-dark elevation-5 animate__animated animate__fadeInRightBig postion-relative " :style="{ backgroundImage: 'url(' + props.recipe.image + ')' }">
        <h2 class="postion-absolute text-white recipe-title position-absolute ms-3">{{ props.recipe.title }}</h2>
        <div class="container">
            <!-- Upon clicking "Learn More =>"  the user is taken to the recipe details page of the specific recipe-->
            <RouterLink :to="{ name: 'Recipe Details', params: {recipeId: props.recipe.id} }">
                <span class="learnMore position-absolute text-white">Learn More</span><i class="mdi mdi-arrow-right-bold p-0 m-0 fs-1 text-white position-absolute arrow"></i>
            </RouterLink>
        </div>
    </div>
    
</template>

<script>
import { computed } from 'vue';
import { AppState } from '../AppState.js';
import { Recipe } from '../models/Recipe.js';
import { RouterLink } from 'vue-router';

    export default {
    // Recipe Prop from spoonacular
    props: { recipe: { type: [Recipe, Object], required: true } },
    setup(props) {
        return {
            props
        };
    },
    components: { RouterLink }
}
</script>

<style lang="scss" scoped>
.card-container{
    width: 90%;
    height: 14rem;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    
}

@media (max-width: 768px){
    .card-container{
        height: 7rem;
    }

    .recipe-title{
        bottom: 3.5rem !important;
        font-size: 2rem !important;
        height: 2rem;
    }
    
}

.recipe-title {
    bottom: 8.5rem;
    text-shadow: 1px 1px 5px black;
    height: 4rem;
    overflow-y: scroll !important;
    font-size: 4rem;
}

.arrow {
    font-size: 2rem !important;
    bottom: 0rem;
    right: 1rem;
    text-shadow: 1px 1px 5px black;
}

.learnMore{
    bottom: .8rem;
    right: 3rem;
    text-shadow: 1px 1px 3px black;
}
</style>