<template>
    <!-- For each recipe a card is rendered out, instead of using img a div background image is used for UI enhancement -->
    <div class="card-container p-0 m-0 rounded rounded-5 my-2 border border-2 border-dark elevation-5 position-relative"
        :style="{ backgroundImage: 'url(' + props.recipe.image + ')' }">
        <h2 class="postion-absolute text-white recipe-title postion-absolute ms-3 mt-2">{{ props.recipe.title }}</h2>
        <div class="container">
            <!-- Upon clicking "Learn More =>"  the user is taken to the recipe details page of the specific recipe-->
            <RouterLink :to="{ name: 'Community Recipe Details', params: { recipeId: props.recipe.id } }">
                <span class="learnMore position-absolute text-white">Learn More</span><i
                    class="mdi mdi-arrow-right-bold p-0 m-0 fs-1 text-white position-absolute arrow"></i>
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
.card-container {
    width: 90%;
    height: 14rem;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;


}

@media (max-width: 768px) {
    .card-container {
        height: 7rem;
    }

}

.recipe-title {
    bottom: 8rem;
    font-size: 3rem;
    text-shadow: 1px 1px 5px black;
    height: 4rem;
    overflow-y: scroll !important;
}

@media (max-width: 768px) {
    .recipe-title {
        font-size: 1.75rem;
        bottom: 1.5rem;
    }
}

.arrow {
    font-size: 2.5rem !important;
    bottom: 0rem;
    right: 1rem;
    text-shadow: 1px 1px 5px black;
}

.learnMore {
    font-size: 1.5rem;
    bottom: .8rem;
    right: 4rem;
    text-shadow: 1px 1px 3px black;
}

@media (max-width: 768px){
    .arrow {
        font-size: 2rem !important;
    }
}

@media (max-width: 768px){
    .learnMore {
        font-size: 1rem !important;
        right: 3rem !important;
    }
}
</style>