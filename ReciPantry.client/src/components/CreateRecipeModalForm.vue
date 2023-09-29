<template>
    <!-- Modal Body -->
    <!-- if you want to close by clicking outside the modal, delete the last endpoint:data-bs-backdrop and data-bs-keyboard -->
    <div class="modal fade" id="createRecipe" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" role="dialog"
        aria-labelledby="modalTitleId" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalTitleId">Create Recipe</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="createRecipe" class="row">
                        <div class="col-6">
                            <label for="recipeTitle">Recipe Title:</label>
                            <input v-model="recipeData.title" class="form-control" id="recipeTitle" maxlength="50"
                                type="text" placeholder="Title" required>
                        </div>
                        <div class="col-6">
                            <label for="recipeCookTime">Cooking Time:</label>
                            <input v-model="recipeData.readyInMinutes" class="form-control" type="number" max="1000"
                                placeholder="minutes to cook?" id="recipeCookTime" required>
                        </div>
                        <div class="col-12 d-flex flex-column">
                            <label for="recipeInstructions">Instructions:</label>
                            <textarea v-model="recipeData.analyzedInstructions" class="form-control"
                                name="recipeInstructions" id="recipeInstructions" maxlength="5000"
                                placeholder="Instructions:" cols="100" required></textarea>
                        </div>
                        <div class="col-6">
                            <label for="recipeServings">Servings:</label>
                            <input v-model="recipeData.servings" class="form-control" type="number" max="100"
                                placeholder="# of servings" id="recipeServings" required>
                        </div>
                        <div class="col-6">
                            <label for="recipePrepTime">Prep Time:</label>
                            <input v-model="recipeData.preparationMinutes" class="form-control" type="number" max="1000"
                                placeholder="minutes to prep?" id="recipePrepTime" required>
                        </div>
                        <div class="col-8">
                            <label for="recipeIngredients">Ingredients:</label>
                            <input v-model="recipeData.extendedIngredients" v-for="ingredient in ingredients"
                                :key="ingredient.id" class="form-control" id="recipeIngredients" type="text"
                                maxlength="1000" placeholder="Ingredients" required>
                        </div>
                        <div class="col-2 mt-4">
                            <button @click="addIngredient" type="button" class="btn btn-success"><i
                                    class="mdi mdi-plus"></i></button>
                        </div>
                        <div class="col-2 mt-4">
                            <button @click="removeIngredient" class="btn btn-danger" type="button"><i
                                    class="mdi mdi-minus"></i></button>
                        </div>
                        <div class="col-12">
                            <label for="recipeImg">Img Url:</label>
                            <input v-model="recipeData.image" type="url" id="recipeImg" class="form-control"
                                maxlength="5000" placeholder="ImgURL" required>
                        </div>
                        <div class="col-12">
                            <label for="recipeSummary">Summary:</label>
                            <textarea v-model="recipeData.summary" class="form-control" id="recipeSummary"
                                placeholder="Summary"></textarea>
                        </div>
                        <div class="col-6 form-check">
                            <label for="glutenFree">Gluten Free?</label>
                            <input v-model="recipeData.glutenFree"
                                class="form-check-input border border-1 border-black text-success" type="checkbox" value=""
                                id="glutenFree">
                        </div>
                        <div class="col-6 form-check">
                            <label for="vegan">Vegan?</label>
                            <input v-model="recipeData.vegan" value="" class="form-check-input border border-1 border-black"
                                type="checkbox">
                        </div>
                        <div class="col-6 form-check">
                            <label for="vegetarian">Vegetarian?</label>
                            <input v-model="recipeData.vegetarian" value=""
                                class="form-check-input border border-1 border-black" type="checkbox">
                        </div>
                        <div class="col-2">
                            <button class="btn btn-success">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { useRouter } from 'vue-router';
import { AppState } from '../AppState';
import { computed, reactive, onMounted, ref } from 'vue';
import Pop from '../utils/Pop.js';
import { recipesService } from '../services/RecipesService.js';
import { Modal } from 'bootstrap';
import { logger } from '../utils/Logger.js';
export default {
    setup() {
        const recipeData = ref({})
        const router = useRouter()
        let ingredients = ref(['ingredient'])
        function resetForm() {
            recipeData.value = {}
        }
        return {
            recipeData,
            ingredients,
            async addIngredient() {
                try {
                    ingredients.value.push("ingredient")
                } catch (error) {
                    Pop.error(error)
                }
            },
            async removeIngredient() {
                try {
                    if (ingredients.value.length != 1) {
                        ingredients.value.pop()
                    }
                } catch (error) {
                    Pop.error(error)
                }
            },
            async createRecipe() {
                try {
                    let newRecipe = await recipesService.createRecipe(recipeData.value)
                    Pop.toast('Recipe Created!', 'success')
                    resetForm()
                    Modal.getOrCreateInstance('#createRecipe').hide()
                    logger.log(newRecipe)
                    router.push({ name: "Community Recipe Details", params: { recipeId: newRecipe.id } })
                } catch (error) {
                    Pop.error(error)
                }
            }
        }
    }
};
</script>


<style lang="scss" scoped></style>