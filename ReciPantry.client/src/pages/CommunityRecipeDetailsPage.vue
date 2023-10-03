<template>
    <div>
        <!-- Pulls recipe title from active recipe -->
        <h1 class="text-start ms-4 mt-3 text-success position-relative recipe-title">{{ recipe.title }} <span class="text-black">- {{
            recipe.readyInMinutes }} Mins</span></h1>
        <div class="grocery-btn-container position-absolute">
            <!-- Grocery List modal toggle -->
            <button class="btn btn-success position-fixed grocery-list border border-1 border-black elevation-5"
            data-bs-toggle="modal" data-bs-target="#groceryListModal"><i class="mdi mdi-list-box"></i></button>
        </div>
        <div class="img-container d-flex flex-column align-items-center justify-content-center">
            <!-- Pulls recipe cover image from active recipe -->
            <img :src="recipe.image" alt="Recipe Cover Image" height="300" width="350"
            class="rounded rounded-5 border border-2 border-dark elevation-5 recipe-image">
        </div>
        <div class="btn-container d-flex flex-row justify-content-start ms-3 mt-4">

            <!-- <div class="ms-2">
                <button class="btn btn-success" @click="createFavorite"><i class="mdi mdi-heart-outline"></i></button>
            </div>
            <div class="ms-2">
                <button class="btn btn-success" @click="deleteFavorite"><i class="mdi mdi-heart"></i></button>
            </div> -->
            <div class="ms-2">
                <button class="btn btn-success" @click="addOrRemoveFavorite"><i v-if="!isFavorite"
                        class="mdi mdi-heart-outline"></i> <i v-if="isFavorite" class="mdi mdi-heart"></i></button>
            </div>
            <div class="ms-2" v-if="account.id == recipe.creatorId">
                <button @click="deleteRecipe" class="btn btn-danger">Delete Recipe</button>
            </div>
        </div>
        <!-- To render only IF there is an active recipe, otherwise error will be thrown -->
        <div class="ingredients-container p-0 m-0 px-4 mt-3" v-if="recipe.ingredients">
            <div class="ingredients-header d-flex flex-row justify-content-between align-items-center">
                <h1 class="p-0 m-0 ingredients-label">Ingredients</h1>
                <h3 class="badge bg-success fs-5 servings elevation-3">{{ recipe.servings }} SERVINGS</h3>
            </div>
            <ul class="p-0 m-0 list-unstyled">
                <!-- Dont take this approach, VUE is amazing for its v-for method -->

                <!-- <li class="p-0 m-0">{{ recipe.ingredients[0]?.name }} - Amount: {{ recipe.ingredients[0]?.amount }} <br> {{ recipe.ingredients[0]?.measures?.us.amount + recipe.ingredients[0]?.measures?.us.unitShort }}</li> -->

                <!-- For every recipe available, render it's card out. -->
                <li class="bg-white p-0 m-0 mt-3 py-3 px-3 rounded rounded-5 elevation-3 d-flex flex-row justify-content-start align-items-center"
                    v-for="ingredient in ingredients" :key="ingredient">
                    <!-- Cart icon so user can add ingredient to shopping list -->
                    <i class="mdi mdi-cart p-0 m-0 text-success fs-2" @click="addToList(ingredient)"></i>
                    <!-- Checkbox for checking off what a user has and doesnt has -->
                    <input type="checkbox" name="have" class="form-check-input m-0 p-0 mx-2 checkbox">
                    <span class="fs-5 m-0 p-0 ingredient-name">{{ ingredient.name }}</span>

                </li>
            </ul>
            <!-- Nutrition facts Modal -->
        </div>

        <div class="instructions-container p-0 m-0 px-4 mt-4">
            <h1 class="p-0 m-0">Instructions</h1>
            <!-- Very primitive REGEX. Needs to be replaced with something cleaner. -->
            <p class="bg-white p-4 mt-3 rounded rounded-5 elevation-3 fs-5">

                {{ recipe.instructions?.toString() }}

            </p>
            <!-- <div class="bg-white p-4 mt-3 rounded rounded-5 elevation-3 fs-5 instructions">
                        
                    </div> -->
        </div>

        <!-- Summary of the recipe. Inner HTML is set to the summary to utilize HTML elements within the summary that is returned from the API -->
        <div class="summary-container p-0 m-0 px-4 mt-4 mb-4">
            <h1 class="p-0 m-0">About The Recipe</h1>
            <div class="bg-white p-4 mt-3 rounded rounded-5 elevation-3 fs-5 summary">
                {{ recipe.summary }}
            </div>
        </div>
        <div class="col-12 d-flex flex-row justify-content-between align-items-between px-4 py-4">
            <h1 class="p-0 m-0m-0">Recipe Reviews </h1>
                <button data-bs-toggle="collapse" data-bs-target="#reviewForm"
                    class="btn btn-success">Add Review <i class="mdi mdi-plus"></i></button>
        </div>
        <div class="collapse" id="reviewForm">
            <form @submit.prevent="createReview" class="form-control">
                <input v-model="reviewData.comment" class="form-control" placeholder="Your Comment" type="text" required
                    maxlength="200" minlength="4">
                <!-- <input type="number" min="1" max="5" class="form-control" required v-model="reviewData.rating"> -->
                <select v-model="reviewData.rating" class="form-control">
                    <option disabled selected value="">rating</option>
                    <option value="1">1/5 stars</option>
                    <option value="2">2/5 stars</option>
                    <option value="3">3/5 stars</option>
                    <option value="4">4/5 stars</option>
                    <option value="5">5/5 stars</option>
                </select>
                <button class="btn btn-success">Post Review</button>
            </form>
        </div>

        <!-- STUB review cards  -->
        <div class="p-0 m-0 px-3">
            <div v-for="review in reviews" :key="review.id" class="col-12">
                <ReviewCard :review="review" />
            </div>
        </div>
        <!-- MODAL - CONVERT TO COMPONENT -->
        <div class="modal fade" id="groceryListModal" tabindex="-1" aria-labelledby="groceryListModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title fs-2" id="groceryListModalLabel">My <span class="text-success">Grocery</span>
                            List</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <ul class="list-unstyled">
                            <ul class="list-unstyled">
                                <div class="li-container d-flex flex-row justify-content-between fs-5"
                                    v-for="i in ingredientOnList" :key="i.name">
                                    <li><i class="mdi mdi-food"></i> <span class="text-success">{{ i.name }}</span> -
                                        {{ i.measureAmount }} {{ i.measureUnit }} </li><i
                                        class="mdi mdi-close text-danger fs-2" @click="removeFromList(i.id)"></i>
                                </div>
                            </ul>
                        </ul>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, onMounted, watchEffect, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { recipesService } from '../services/RecipesService.js';
import { AppState } from '../AppState.js'
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop';
import { reviewService } from '../services/ReviewService';
import { favoritesService } from '../services/FavoritesService';
export default {
    setup() {
        let route = useRoute()
        let router = useRouter()
        let reviewData = ref({})

        // gets recipe info from route params
        onMounted(() => {
            getCommunityRecipeById();
        })
        async function getCommunityRecipeById() {
            try {
                await recipesService.getCommunityRecipeById(route.params.recipeId)
                getReviewsByRecipe()
                getFavoritesByRecipe()
            } catch (error) {
                Pop.error(error)
            }
        }

        async function getFavoritesByRecipe() {
            try {
                await favoritesService.getFavoritesByRecipe(route.params.recipeId)
            } catch (error) {
                Pop.error(error)
            }
        }

        async function getReviewsByRecipe() {
            try {
                const recipeId = AppState.activeRecipe.id
                await reviewService.getReviewsByRecipe(recipeId)
            } catch (error) {
                Pop.error(error)
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
            ref,

            // Adds ingredient to shopping list when clicking on cart.
            // Utilizes localStorage
            async addToList(listItem) {
                logger.log
                if (await Pop.confirm(`Add ${listItem} to grocery list?`)) {
                    AppState.groceryList.push(listItem)
                    Pop.success(`Added ${listItem} to grocery list!`)
                    logger.log(AppState.groceryList)
                } else {
                    Pop.toast(`${listItem.name} not added to grocery list.`)
                }
                // Change pop confirm message that says "you wont be able to revert"

                // Remove ingredient from shopping list by clicking little X symbol
            },
            async removeFromList(ingredientId) {
                logger.log(ingredientId)
                // if(await Pop.confirm(`Remove ${ingredientName} from gorcery list?`)){
                //     let filteredIngredients = AppState.activeRecipe.ingredients.name != ingredientName
                // }
            },

            async deleteRecipe() {
                try {
                    const recipeId = AppState.activeRecipe.id
                    await recipesService.deleteRecipe(recipeId)
                    router.push({ name: 'Account' })
                } catch (error) {
                    Pop.error(error)
                }
            },

            // async createFavorite() {
            //     try {
            //         let favData = { recipeId: route.params.recipeId }
            //         await favoritesService.createFavorite(favData)
            //     } catch (error) {
            //         Pop.error(error)
            //     }
            // },

            // async deleteFavorite() {
            //     try {
            //         const favorite = AppState.favorites.find(fav => fav.accountId == AppState.account.id)
            //         await favoritesService.deleteFavorite(favorite.id)
            //     } catch (error) {
            //         Pop.error(error)
            //     }
            // },

            async addOrRemoveFavorite() {
                try {
                    let favData = { recipeId: route.params.recipeId }
                    await favoritesService.addOrRemoveFavorite(favData)
                } catch (error) {
                    Pop.error(error)
                }
            },

            async createReview() {
                try {
                    logger.log(reviewData.value)
                    reviewData.value.recipeId = route.params.recipeId
                    await reviewService.createReview(reviewData.value)
                    this.clearForm()
                    Pop.toast('Review left')
                } catch (error) {
                    Pop.error(error)
                }
            },

            async clearForm() {

            }
        }
    }
}
</script>

<style lang="scss" scoped>
.recipe-title{
    font-size: 2.5rem;
    text-shadow: 0px 0px 5px rgb(255, 255, 255);
}
.grocery-list {
    bottom: 5rem;
    right: 1rem;
    z-index: 5 !important;
}

.ingredients-label{
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
    object-fit: cover;
}
</style>