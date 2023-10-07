<template>
    <div class="modal fade" id="groceryListModal" tabindex="-1" aria-labelledby="groceryListModalLabel" aria-hidden="true">
        <div class="modal-dialog grocery-list-modal-body">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title fs-2" id="groceryListModalLabel">My <span class="text-success">Grocery</span>
                        List</h5>
                </div>
                <div class="modal-body">
                    <ul class="list-unstyled">
                        <ul class="list-unstyled" id="groceryUl">
                            <ul class="list-unstyled" id="groceryUlFake"></ul>
                            <div class="li-container d-flex flex-row justify-content-between fs-5"
                                v-for="i in ingredientOnList" :key="i.name">
                                <RouterLink :to="{ name: 'Recipes' }" @click="setIngredient(`${i.name}`)">
                                    <li class="text-black"><i class="mdi mdi-food"></i> <span class="text-success">{{ i.name
                                    }}</span> -
                                        {{ i.measureAmount }} {{ i.measureUnit }} </li>
                                </RouterLink>
                                <i class="mdi mdi-close text-danger fs-2" @click="removeFromList(i.id)"></i>
                            </div>
                        </ul>
                    </ul>
                </div>
                <div class="modal-footer d-flex flex-row justify-content-between">
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Grocery Tips
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <p class="dropdown-item">Clicking a grocery list item will redirect<br> you to a list of recipes
                                utilizing that ingredient!</p>
                        </ul>
                    </div>
                    <button type="button" class="btn btn-secondary gmBtn" data-bs-dismiss="modal">Close List</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue';
import { AppState } from '../AppState.js';
import { logger } from '../utils/Logger.js';
import { groceriesService } from '../services/GroceriesService.js';
import Pop from '../utils/Pop.js';
import { recipesService } from '../services/RecipesService.js'
import { Modal } from 'bootstrap';

export default {
    setup() {
        return {
            ingredientOnList: computed(() => AppState.groceryList),

            async removeFromList(groceryId) {
                if (await Pop.confirm(`Remove from gorcery list?`)) {
                    await groceriesService.removeFromList(groceryId)
                } else {
                    Pop.toast('Grocery was not removed from the list.')
                }
            },

            async setIngredient(name) {
                try {
                    AppState.selectedIngredient = name
                    AppState.recipes = {}
                    Modal.getOrCreateInstance('#groceryListModal').hide()
                    await recipesService.searchRecipesByIngredient()
                } catch (error) {
                    Pop.error(error)
                }
            }

        }
    }
}
</script>

<style lang="scss" scoped></style>