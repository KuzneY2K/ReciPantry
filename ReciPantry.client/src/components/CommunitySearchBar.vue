<template>
    <div class="col-12 p-0 m-0 d-flex flex-row">
        <!-- Search Form - Search by query with filters -->
        <form @submit.prevent="searchCommunityRecipes()" class="form">
            <div class="input-group p-0 m-0 elevation-5 border border-black border-1 bg-transparent rounded">
                <!-- Submit Button -->
                <button type="submit" class="btn bg-light p-0 m-0"><span class="input-group-text p-0 m-0 py-1 px-3"
                        id="basic-addon1"><i class="mdi mdi-magnify fs-2"></i></span></button>
                <input type="text" class="form-control bg-white" placeholder="Search a recipe" aria-label="searchBar"
                    aria-describedby="basic-addon1" v-model="query">
                <!-- FILTER BUTTON - Toggles modal that has all filter options. -->
                <!-- Filters will be options that will set the reqData to their value -->
            </div>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue';
import { AppState } from '../AppState.js';
import { recipesService } from '../services/RecipesService.js';
import Pop from '../utils/Pop.js';

export default {
    setup() {

        const query = ref('')

        return {
            query,

            async searchCommunityRecipes() {
                try {
                    AppState.selectedCategory = null
                    await recipesService.searchCommunityRecipes(query.value)
                } catch (error) {
                    Pop.error(error)
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.form {
    width: 60rem;
}

@media (max-width: 768px) {
    .form {
        width: 20rem;
    }
}

.btn-grad {
    background-color: rgb(156, 211, 185)
}

.filter-btn {
    z-index: 100;
}
</style>