<template>
    <section class="row p-0 m-0">
        <div class="col-12 p-0 m-0 px-5">
            <h1 class="text-center mt-3">Explore <span class="text-success">Community</span></h1>
            <CommunitySearchBar />
        </div>
        <div class="col-12 p-0 m-0 d-flex flex-column justify-content-center align-items-center">
            <CommunityRecipeCard v-for="recipe in communityRecipes" :key="recipe.id" :recipe="recipe" />
        </div>
        <CreateRecipeModalForm />
        <div class="col-2 col-md-4">
            <button data-bs-toggle="modal" data-bs-target="#createRecipe" class="btn btn-success buttonContainer"><i
                    class="mdi mdi-plus"></i></button>
        </div>
    </section>
</template>

<script>
import { computed, onMounted } from 'vue';
import { recipesService } from '../services/RecipesService.js'
import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js';

export default {
    setup() {
        onMounted(() => {
            getCommunityRecipes()
        })

        async function getCommunityRecipes() {
            try {
                await recipesService.getCommunityRecipes()
            } catch (error) {
                Pop.error(error)
            }
        }
        return {
            communityRecipes: computed(() => AppState.communityRecipes)
        }
    }
}
</script>

<style lang="scss" scoped>
.buttonContainer {
    position: fixed;

    @media(min-width: 768px) {
        left: 110rem;
        top: 52rem;
    }

    @media(max-width: 768px) {
        left: 20rem;
        top: 34rem;
    }
}
</style>