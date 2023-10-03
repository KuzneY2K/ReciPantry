<template>
    <section class="row p-0 m-0 animate__animated animate__fadeInDownBig">
        <div class="col-12 p-0 m-0 d-flex flex-column align-items-center justify-content-center">
            <h1 class="mt-3 title">From Our <span class="text-success">Community</span></h1>
            <!-- Search bar that takes in parameters & filters 🔎 -->
            <section class="row p-0 m-0">
                <CommunitySearchBar />
            </section>
        </div>
    </section>
    <section class="row p-0 m-0">
        <div class="col-12 p-0 m-0 d-flex flex-column justify-content-center align-items-center mt-3">
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
.title {
    font-size: 2.25rem;
    text-shadow: 0px 1px 7px rgb(221, 221, 221)
}

.pag-btn {
    width: 8rem;
}

.buttonContainer {
    position: fixed;

    @media(min-width: 768px) {
        bottom: 5em;
        right: 1em;
    }

    @media(max-width: 768px) {
        bottom: 5em;
        right: 1em;
    }
}
</style>