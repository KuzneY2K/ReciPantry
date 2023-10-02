<template>
          <!-- Search Form - Search by query with filters -->
          <form @submit.prevent="searchRecipesByQuery()">
            <div class="input-group p-0 m-0 mb-3 elevation-3 border border-black border-1 bg-transparent rounded">
              <!-- Submit Button -->
              <button type="submit" class="btn bg-light p-0 m-0"><span class="input-group-text p-0 m-0 py-1 px-3" id="basic-addon1"><i class="mdi mdi-magnify fs-2"></i></span></button>
                <input v-model="reqData" type="text" class="form-control bg-white" placeholder="Search a recipe" aria-label="searchBar" aria-describedby="basic-addon1" @keydown="logQuery()">
                <!-- FILTER BUTTON - Toggles modal that has all filter options. -->
                <!-- Filters will be options that will set the reqData to their value -->
                <button type="button" class="btn btn-grad px-3 filter-btn"><img src="https://i.imgur.com/Gh9UJij.png" alt="" height="30" data-bs-toggle="modal" data-bs-target="#filterModal"></button>
              </div>
          </form>
</template>

<script>
import { ref } from 'vue'
import { logger } from '../utils/Logger.js'
import { recipesService } from '../services/RecipesService.js'
import Pop from '../utils/Pop.js'
import { AppState } from '../AppState.js'

    export default {
          setup() {

        // Accepts user query
        const reqData = ref('')

        return {
            reqData,

            logQuery() {
                AppState.savedQuery = reqData
                // logger.log(AppState.savedQuery)
            },

            // Just to test if buttons work
            testBtn() {
                logger.log('test')
            },

            // Search recipes by query, autocompletes
            async searchRecipesByQuery() {
                try {
                    AppState.selectedCategory = null
                    AppState.savedQuery = reqData.value
                    await recipesService.searchRecipesByQuery(reqData.value)
                } catch (error) {
                    Pop.error(error)
                }
            }

        }
    }
    }
</script>

<style lang="scss" scoped>
.btn-grad {
    background-color: #19875434;
}

.filter-btn{
    z-index: 5;
}
</style>