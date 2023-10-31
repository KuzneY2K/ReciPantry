<template>
    <div id="crdCanvas">
        <!-- Pulls recipe title from active recipe -->
        <h1 class="text-start ms-4 mt-3 text-success position-relative recipe-title text-md-center">{{ recipe.title }} <span
                class="text-black">- {{
                    recipe.readyInMinutes }} Mins</span></h1>
        <div class="grocery-btn-container position-absolute" v-if="account.id">
            <!-- Grocery List modal toggle -->
            <button class="btn btn-success position-fixed grocery-list border border-1 border-black elevation-5"
                data-bs-toggle="modal" data-bs-target="#groceryListModal"><i class="mdi mdi-list-box"></i></button>
        </div>
        <div class="img-container d-flex flex-column align-items-center justify-content-center">
            <!-- Pulls recipe cover image from active recipe -->
            <img :src="recipe.image" alt="Recipe Cover Image" height="300" width="350"
                class="rounded rounded-5 border border-2 border-dark elevation-5 recipe-image">
        </div>
        <div class="btn-container d-flex flex-row justify-content-start justify-content-md-center ms-3 mt-4">
            <div class="ms-2" v-if="account.id">
                <button class="btn btn-success border border-1 border-black elevation-5 p-0 m-0 px-3 py-2"
                    @click="addOrRemoveFavorite"><i v-if="!isFavorite" class="mdi mdi-heart-outline"></i> <i v-else
                        class="mdi mdi-heart"></i></button>
            </div>
            <div class="ms-2" v-if="account.id == recipe.creatorId">
                <button @click="deleteRecipe"
                    class="btn btn-danger border border-1 border-black p-0 m-0 px-3 py-2 elevation-5">Delete Recipe</button>
            </div>
            <div class="ms-2" v-if="account.id == recipe.creatorId">
                <ModalWrapper id="editRecipe">
                    <template #button>
                        <button class="btn btn-primary border border-1 border-black p-0 m-0 px-3 py-2 elevation-5">
                            Edit
                            Recipe</button>
                    </template>
                    <template #body>
                        <EditRecipeForm />
                    </template>
                </ModalWrapper>
            </div>
        </div>
        
        <section class="row p-0 m-0 d-flex flex-row justify-content-center">
        <!-- To render only IF there is an active recipe, otherwise error will be thrown -->
        <div class="ingredients-container col-12 col-md-4 p-0 m-0 px-4 mt-4" v-if="recipe.ingredients">
            <div class="ingredients-header d-flex flex-row justify-content-between align-items-center">
                <h1 class="p-0 m-0 ingredients-label">Ingredients</h1>
                <h3 class="badge bg-success fs-5 servings elevation-3">{{ recipe.servings }} SERVINGS</h3>
            </div>
            <ul class="p-0 m-0 list-unstyled">
                <!-- Dont take this approach, VUE is amazing for its v-for method -->

                <!-- <li class="p-0 m-0">{{ recipe.ingredients[0]?.name }} - Amount: {{ recipe.ingredients[0]?.amount }} <br> {{ recipe.ingredients[0]?.measures?.us.amount + recipe.ingredients[0]?.measures?.us.unitShort }}</li> -->

                <!-- For every recipe available, render it's card out. -->
                <li class="bg-white p-0 m-0 mt-3 py-3 px-3 rounded rounded-5 elevation-3 d-flex flex-row justify-content-start align-items-center" v-for="ingredient in ingredients" :key="ingredient">
                    <!-- Cart icon so user can add ingredient to shopping list -->
                    <i class="mdi mdi-cart p-0 m-0 text-success fs-2 selectable" @click="addToList(ingredient)"></i>
                    <!-- Checkbox for checking off what a user has and doesnt has -->
                    <input type="checkbox" name="have" class="form-check-input m-0 p-0 mx-2 checkbox">
                    <span class="fs-5 m-0 p-0 ingredient-name">{{ ingredient.name }} - {{ ingredient.measureAmount }} {{
                        ingredient.measureUnit }}</span>

                </li>
            </ul>
            <!-- Nutrition facts Modal -->
        </div>

        <div class="instructions-container col-12 col-md-4 p-0 m-0 px-4 mt-4">
            <h1 class="p-0 m-0">Instructions</h1>
            <!-- Very primitive REGEX. Needs to be replaced with something cleaner. -->
            <p class="bg-white p-4 mt-3 rounded rounded-5 elevation-3 fs-5" id="instructions">

                <!-- {{ recipe.instructions?.toString() }} -->

            </p>
            <!-- <div class="bg-white p-4 mt-3 rounded rounded-5 elevation-3 fs-5 instructions">
                        
                    </div> -->
        </div>
        </section>


        <section class="row p-0 m-0 d-flex flex-row justify-content-center">
        <!-- Summary of the recipe. Inner HTML is set to the summary to utilize HTML elements within the summary that is returned from the API -->
        <div class="col-12 col-md-4 p-0 m-0">
            <div class="summary-container p-0 m-0 px-4 mt-4 mb-4">
                <h1 class="p-0 m-0">About The Recipe</h1>
                    <div class="bg-white p-4 mt-3 rounded rounded-5 elevation-3 fs-5 summary" id="summary">
                <!-- {{ recipe.summary }} -->
                    </div>
            </div>
        </div>

        <div class="col-12 col-md-4 d-flex flex-column justify-content-between align-items-between px-4 py-4">
            <h1 class="p-0 m-0 m-0 text-center">Recipe Reviews </h1>
            <div v-for="review in reviews" :key="review.id" class="col-12">
                    <ReviewCard :review="review" />
            </div>
            <div class="modal fade" id="reviewModal" tabindex="-1" aria-labelledby="reviewModalLabel" aria-hidden="true">
            <div class="modal-dialog">
            <div class="modal-content py-3">
            <div class="modal-header">
                <h5 class="modal-title" id="reviewModalLabel">Leave A Review</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
                    <div class="modal-body" id="reviewForm">
                        <form @submit.prevent="createReview" class="form-control py-4">
                            <div class="d-flex justify-content-center">
                            <button type="button" @click="reviewData.rating = 1" class="btn text-warning fs-1">
                                <i v-if="reviewData.rating >= 1" class="mdi mdi-star"></i>
                                <i v-else class="mdi mdi-star-outline"></i>
                            </button>
                            <button type="button" @click="reviewData.rating = 2" class="btn text-warning fs-1">
                                <i v-if="reviewData.rating >= 2" class="mdi mdi-star"></i>
                                <i v-else class="mdi mdi-star-outline"></i>
                            </button>
                            <button type="button" @click="reviewData.rating = 3" class="btn text-warning fs-1">
                                <i v-if="reviewData.rating >= 3" class="mdi mdi-star"></i>
                                <i v-else class="mdi mdi-star-outline"></i>
                            </button>
                            <button type="button" @click="reviewData.rating = 4" class="btn text-warning fs-1">
                                <i v-if="reviewData.rating >= 4" class="mdi mdi-star"></i>
                                <i v-else class="mdi mdi-star-outline"></i>
                            </button>
                            <button type="button" @click="reviewData.rating = 5" class="btn text-warning fs-1">
                                <i v-if="reviewData.rating >= 5" class="mdi mdi-star"></i>
                                <i v-else class="mdi mdi-star-outline"></i>
                            </button>
                        </div>
                        <input v-model="reviewData.comment" class="form-control my-4" placeholder="Your Comment" type="text" required
                        maxlength="200" minlength="4">
                        <!-- <input type="number" min="1" max="5" class="form-control" required v-model="reviewData.rating"> -->
                        <button class="btn btn-success border border-1 border-black elevation-5 p-0 m-0 px-3 py-2">Post Review</button>
                    </form>
                </div>
            </div>
          </div>
        </div>
        
        <!-- STUB review cards  -->
        <div class="review-btn-container position-absolute" v-if="account.id">
                <button data-bs-toggle="modal" data-bs-target="#reviewModal" class="btn btn-success ms-md-5 position-fixed review-btn border border-1 border-black elevation-5">Add Review <i
                class="mdi mdi-plus"></i>
                </button>
            </div>
        </div>


        </section>
        <!-- MODAL - CONVERT TO COMPONENT -->
        <GroceryListModal />
    </div>
</template>

<script>
import { computed, onMounted, ref, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { recipesService } from '../services/RecipesService.js';
import { AppState } from '../AppState.js'
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop';
import { reviewService } from '../services/ReviewService';
import { favoritesService } from '../services/FavoritesService';
import { groceriesService } from '../services/GroceriesService.js';
import EditRecipeForm from '../components/EditRecipeForm.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
    setup() {
        let route = useRoute();
        let router = useRouter();
        let reviewData = ref({ rating: null });
        let groceryData = ref({});
        let rating = ref(0);
        // gets recipe info from route params
        watchEffect(() => {
            getFavoritesByRecipe()
        })
        onMounted(() => {
            getCommunityRecipeById();
            AOS.init()
        });
        async function getCommunityRecipeById() {
            try {
                await recipesService.getCommunityRecipeById(route.params.recipeId);
                document.getElementById('instructions').innerHTML = AppState.activeRecipe.instructions
                document.getElementById('summary').innerHTML = AppState.activeRecipe.summary
                getReviewsByRecipe();
                getFavoritesByRecipe();
            }
            catch (error) {
                Pop.error(error);
            }
        }
        async function getFavoritesByRecipe() {
            try {
                await favoritesService.getFavoritesByRecipe(route.params.recipeId);
            }
            catch (error) {
                Pop.error(error);
            }
        }
        async function getReviewsByRecipe() {
            try {
                const recipeId = AppState.activeRecipe.id;
                await reviewService.getReviewsByRecipe(recipeId);
            }
            catch (error) {
                Pop.error(error);
            }
        }
        return {
            recipe: computed(() => AppState.activeRecipe),
            ingredients: computed(() => AppState.activeRecipe.ingredients),
            account: computed(() => AppState.account),
            user: computed(() => AppState.user),
            reviews: computed(() => AppState.activeReviews),
            ingredientOnList: computed(() => AppState.groceryList),
            router,
            favorite: computed(() => AppState.favorites),
            isFavorite: computed(() => AppState.favorites.find(favorite => favorite.accountId == AppState.account.id)),
            reviewData,
            groceryData,
            rating,
            // Adds ingredient to shopping list when clicking on cart.
            // Utilizes localStorage
            async addToList(listItem) {
                if(this.account.id){
                if (await Pop.confirm(`Add ${listItem.name} to grocery list?`)) {
                    groceryData.value.groceryName = listItem.name;
                    groceryData.value.measureAmount = listItem.measureAmount;
                    groceryData.value.measureUnit = listItem.measureUnit;
                    await groceriesService.addGrocery(groceryData.value);
                    // AppState.groceryList.push(listItem)
                    Pop.success(`Added ${listItem.name} to grocery list!`);
                    // logger.log(AppState.groceryList)
                }
                else {
                    Pop.toast(`${listItem.name} not added to grocery list.`);
                }
            } else {
                Pop.error(`Must be logged in to add ${listItem.name} to list!`)
            }
                // Change pop confirm message that says "you wont be able to revert"
                // Remove ingredient from shopping list by clicking little X symbol
            },
            async deleteRecipe() {
                try {
                    if (await Pop.confirm('Are you sure you want to delete this recipe?')) {
                        const recipeId = AppState.activeRecipe.id;
                        await recipesService.deleteRecipe(recipeId);
                        router.push({ name: 'Account' });
                        Pop.toast('Recipe Deleted', 'success')
                    }
                    else {
                        Pop.toast('Recipe deletion cancelled.');
                    }
                }
                catch (error) {
                    Pop.error(error);
                }
            },
            async addOrRemoveFavorite() {
                try {
                    let favData = { recipeId: route.params.recipeId };
                    await favoritesService.addOrRemoveFavorite(favData);
                }
                catch (error) {
                    Pop.error(error);
                }
            },
            async createReview() {
                try {
                    if (reviewData.value.rating == null) {
                        Pop.error("Please leave a rating")
                        return
                    }
                    reviewData.value.recipeId = route.params.recipeId;
                    await reviewService.createReview(reviewData.value);
                    reviewData.value = {};
                    Pop.toast('Review left.', 'success');
                }
                catch (error) {
                    Pop.error(error);
                }
            },
        };
    },
    components: { EditRecipeForm }
}
</script>

<style lang="scss" scoped>
.recipe-title {
    font-size: 3.5rem;
    text-shadow: 0px 0px 5px rgb(255, 255, 255);
}

@media (max-width: 768px){
    .recipe-title{
        font-size: 2.5rem;
    }
}

.grocery-list {
    bottom: 5rem;
    right: 1rem;
    z-index: 5 !important;
}

.ingredients-label {
    text-shadow: 0px 0px 5px white;
    font-size: 2.25rem !important;
}

.checkbox {
    height: 1.25rem;
    width: 1.25rem;
}

.servings {
    font-family: 'Ubuntu' !important;
}

.recipe-image {
    height: 26rem;
    width: 60rem;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    object-fit: cover;
}

@media (max-width: 768px){
    .recipe-image{
        width: 20rem;
        height: 20rem;
    }
}

.crdCanvas{
    overflow-x: hidden !important;
}

.review-btn{
    bottom: 5rem;
    right: 4rem;
    z-index: 5 !important;
}
</style>