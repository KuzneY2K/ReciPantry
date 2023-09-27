<template>
    <section class="row p-0 m-0">
        <div class="col-12 p-0 m-0 px-5">
            <h1 class="text-center mt-3">Explore <span class="text-success">Community</span></h1>
            <CommunitySearchBar />
        </div>
        <CreateRecipeModalForm />
        <div class="col-2 col-md-4">
            <button data-bs-toggle="modal" data-bs-target="#createRecipe" class="btn btn-success buttonContainer"><i
                    class="mdi mdi-plus"></i></button>
        </div>
    </section>
</template>

<script>
import { onMounted } from 'vue';
import { recipesService } from '../services/RecipesService.js'
import Pop from '../utils/Pop.js';

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

        }
    }
}
</script>

<style lang="scss" scoped>
.buttonContainer {
    position: fixed;

    @media(min-width: 768px) {
        left: 90rem;
        top: 40rem;
    }

    @media(max-width: 768px) {
        left: 20rem;
        top: 38rem;
    }
}
</style>