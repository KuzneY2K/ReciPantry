<template>
    <!-- Modal Body -->
    <!-- if you want to close by clicking outside the modal, delete the last endpoint:data-bs-backdrop and data-bs-keyboard -->
    <div class="modal fade" id="createRecipe" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" role="dialog"
        aria-labelledby="modalTitleId" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalTitleId">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="createRecipe" class="row">
                        <div class="col-6">
                            <label for="recipeTitle">Recipe Title:</label>
                            <input class="form-control" id="recipeTitle" maxlength="50" type="text" placeholder="Title">
                        </div>
                        <div class="col-6">
                            <label for="recipeIngredients">Ingredients</label>
                            <input class="form-control" id="recipeIngredients" type="text" maxlength="1000">
                        </div>
                        <div class="col-12">
                            <label for="recipeInstructions">Instructions:</label>
                            <textarea name="recipeInstructions" id="recipeInstructions" maxlength="5000"
                                placeholder="Instructions:"></textarea>
                        </div>
                        <div class="col-6">
                            <label for="recipeServings">Servings:</label>
                            <input class="form-control" type="number" max="100" placeholder="# of servings"
                                id="recipeServings">
                        </div>
                        <div class="col-6">
                            <label for="recipePrepTime">Prep Time:</label>
                            <input class="form-control" type="number" max="1000" placeholder="how many minutes to prep?"
                                id="recipePrepTime">
                        </div>
                        <div class="col-6">
                            <label for="recipeCookTime">Cooking Time:</label>
                            <input class="form-control" type="number" max="1000" placeholder="how many minutes to cook?"
                                id="recipeCookTime">
                        </div>
                        <div class="col-6">
                            <label for="glutenFree">Gluten Free?</label>
                            <input class="form-check-input" type="checkbox">
                        </div>
                        <div class="col-6">
                            <label for="vegan">Vegan?</label>
                            <input class="form-check-input" type="checkbox">
                        </div>
                        <div class="col-6">
                            <label for="vegetarian">Vegetarian?</label>
                            <input class="form-check-input" type="checkbox">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
export default {
    setup() {
        return {}
    }
};
</script>


<style lang="scss" scoped></style>