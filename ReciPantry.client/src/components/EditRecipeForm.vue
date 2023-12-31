<template>
    <form @submit.prevent="editRecipe" class="row">
        <div class="col-12">
            <label for="recipeTitle">Recipe Title:</label>
            <input v-model="recipeData.title" class="form-control" id="recipeTitle" maxlength="50" type="text"
                placeholder="Title" required>
        </div>
        <div class="col-12">
            <label for="recipeIngredients">Ingredients:</label>
            <div class="ingredient-container d-flex flex-row justify-content-start" v-for="ingredient in recipeIngredients"
                :key="ingredient.id">
                <input v-model="ingredient.name" class="form-control" id="recipeIngredients" type="text" maxlength="1000"
                    placeholder="Ingredients" required>
                <input type="number" v-model="ingredient.measureAmount" :key="ingredient.id" placeholder="ex: 2"
                    class="form-control">
                <input type="text" v-model="ingredient.measureUnit" :key="ingredient.id" placeholder="TBSP"
                    class="form-control">
            </div>
        </div>
        <div class="add-remove-container d-flex flex-row justify-content-between my-2">
            <div class="col-6 p-0 m-0 d-flex flex-row justify-content-center">
                <button @click="addIngredient" type="button" class="btn btn-success">Add<i
                        class="mdi mdi-plus"></i></button>
            </div>
            <div class="col-6 p-0 m-0 d-flex flex-row justify-content-center">
                <button @click="removeIngredient" class="btn btn-danger" type="button">Remove <i
                        class="mdi mdi-minus"></i></button>
            </div>
        </div>
        <div class="col-12 d-flex flex-column">
            <label for="recipeInstructions">Instructions:</label>
            <textarea v-model="recipeData.instructions" class="form-control" name="recipeInstructions"
                id="recipeInstructions" maxlength="5000" placeholder="Instructions:" cols="100" required></textarea>
        </div>
        <div class="col-6">
            <label for="recipeServings">Servings:</label>
            <input v-model="recipeData.servings" class="form-control" type="number" max="100" placeholder="# of servings"
                id="recipeServings" required>
        </div>
        <div class="col-6">
            <label for="recipePrepTime">Prep Time:</label>
            <input v-model="recipeData.preparationMinutes" class="form-control" type="number" max="1000"
                placeholder="In minutes." id="recipePrepTime" required>
        </div>
        <div class="col-6">
            <label for="recipeCookTime">Cook Time:</label>
            <input v-model="recipeData.readyInMinutes" class="form-control" type="number" id="recipeCookTime"
                placeholder="In minutes.">
        </div>
        <div class="col-12">
            <label for="recipeImg">Img Url:</label>
            <input v-model="recipeData.image" type="url" id="recipeImg" class="form-control" maxlength="5000"
                placeholder="Insert your recipe image." required>
        </div>
        <div class="col-12">
            <label for="recipeSummary">Summary:</label>
            <textarea v-model="recipeData.summary" class="form-control" id="recipeSummary"
                placeholder="Tell everyone something about the recipe. ex: Where it comes from."></textarea>
        </div>
        <div class="check-container d-flex flex-column ms-4 my-3">
            <div class="col-4 form-check p-0 m-0">
                <label for="glutenFree">Gluten Free?</label>
                <input v-model="recipeData.glutenFree" class="form-check-input border border-1 border-black text-success"
                    type="checkbox" value="" id="glutenFree">
            </div>
            <div class="col-4 form-check p-0 m-0">
                <label for="vegan">Vegan?</label>
                <input v-model="recipeData.vegan" value="" class="form-check-input border border-1 border-black"
                    type="checkbox">
            </div>
            <div class="col-4 form-check p-0 m-0">
                <label for="vegetarian">Vegetarian?</label>
                <input v-model="recipeData.vegetarian" value="" class="form-check-input border border-1 border-black"
                    type="checkbox">
            </div>
        </div>
        <div class="col-2">
            <button class="btn btn-success">Submit</button>
        </div>
    </form>
</template>

<script>
import { computed, onMounted, ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import Pop from '../utils/Pop';
import { recipesService } from '../services/RecipesService';
import { AppState } from '../AppState';
import { Modal } from 'bootstrap';

export default {
    setup() {
        const recipeData = ref({})
        const router = useRouter()
        let ingredients = ref([{}])

        watchEffect(() => {
            populateForm();
        })

        async function populateForm() {
            recipeData.value.title = AppState.activeRecipe.title
            recipeData.value.image = AppState.activeRecipe.image
            // recipeData.value.ingredient.name = AppState.activeRecipe.ingredient.name
            // recipeData.value.ingredient.measureAmount = AppState.activeRecipe.ingredient.measureAmount
            // recipeData.value.ingredient.measureUnit = AppState.activeRecipe.ingredient.measureUnit
            recipeData.value.instructions = AppState.activeRecipe.instructions
            recipeData.value.servings = AppState.activeRecipe.servings
            recipeData.value.preparationMinutes = AppState.activeRecipe.preparationMinutes
            recipeData.value.readyInMinutes = AppState.activeRecipe.readyInMinutes
            recipeData.value.summary = AppState.activeRecipe.summary
            recipeData.value.glutenFree = AppState.activeRecipe.glutenFree
            recipeData.value.vegan = AppState.activeRecipe.vegan
            recipeData.value.vegetarian = AppState.activeRecipe.vegetarian
        }

        return {

            recipeData,
            ingredients,
            recipeIngredients: computed(() => AppState.activeRecipe.ingredients),
            router,

            async addIngredient() {
                try {
                    this.recipeIngredients.push({})
                } catch (error) {
                    Pop.error(error)
                }
            },

            async removeIngredient() {
                try {
                    if (this.recipeIngredients.length != 1) {
                        this.recipeIngredients.pop()
                    }
                } catch (error) {
                    Pop.error(error)
                }
            },

            async editRecipe() {
                try {
                    const recipeId = AppState.activeRecipe.id
                    await recipesService.editRecipe(recipeData.value, recipeId)
                    Modal.getOrCreateInstance('#editRecipe').hide()
                } catch (error) {
                    Pop.error(error)
                }
            }
        };
    },
};
</script>


<style lang="scss" scoped>
.create-form {
    font-family: 'Ubuntu' !important;
}
</style>