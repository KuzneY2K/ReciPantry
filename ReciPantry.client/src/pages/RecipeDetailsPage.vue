<template>
    <div v-if="recipe">
        <!-- Pulls recipe title from active recipe -->
        <section class="row p-0 m-0">
            <div class="col-12 p-0 m-0" id="recipeTitleBox">
                <h1 class="text-start ms-4 mt-3 text-success position-relative recipe-title">{{ recipe.title }} <span
                        class="text-black readyInBox" id="readyInBox">- {{
                            recipe.readyInMinutes }} Mins</span></h1>
            </div>
        </section>
        <div class="grocery-btn-container postion-absolute" v-if="account.id">
            <!-- Grocery List modal toggle -->
            <button
                class="btn btn-success position-fixed grocery-list border border-1 border-black elevation-5 grocery-list-btn"
                data-bs-toggle="modal" data-bs-target="#groceryListModal"><i class="mdi mdi-list-box"></i></button>
        </div>
        <div class="img-container d-flex flex-column align-items-center justify-content-center">
            <!-- Pulls recipe cover image from active recipe -->
            <img :src="recipe.image" alt="Recipe Cover Image" height="300" width="350"
                class="rounded rounded-5 border border-2 border-dark elevation-5 recipe-image">
        </div>
        <div class="ms-5 mt-4" v-if="account.id">
            <button @click="cloneRecipe" class="btn btn-success border border-1 border-dark elevation-5">Clone
                Recipe</button>
        </div>
        <!-- To render only IF there is an active recipe, otherwise error will be thrown -->
        <div class="ingredients-container p-0 m-0 px-4 mt-4" v-if="recipe.ingredients">
            <div class="ingredients-header d-flex flex-row justify-content-between align-items-center">
                <h1 class="p-0 m-0 ingredients-label">Ingredients</h1>
                <h3 class="badge bg-success fs-5 servings elevation-3">{{ recipe.servings }} SERVINGS</h3>
            </div>
            <ul class="p-0 m-0 list-unstyled">
                <!-- Dont take this approach, VUE is amazing for its v-for method -->

                <!-- <li class="p-0 m-0">{{ recipe.ingredients[0]?.name }} - Amount: {{ recipe.ingredients[0]?.amount }} <br> {{ recipe.ingredients[0]?.measures?.us.amount + recipe.ingredients[0]?.measures?.us.unitShort }}</li> -->

                <!-- For every recipe available, render it's card out. -->
                <li class="bg-white p-0 m-0 mt-3 py-3 px-3 rounded rounded-5 elevation-3 d-flex flex-row justify-content-start align-items-center ingredient"
                    v-for="ingredient in ingredients" :key="ingredient">
                    <!-- Cart icon so user can add ingredient to shopping list -->
                    <i class="mdi mdi-cart p-0 m-0 text-success fs-2 cart selectable" @click="addToList(ingredient)"></i>
                    <!-- Checkbox for checking off what a user has and doesnt has -->
                    <input type="checkbox" name="have" class="form-check-input m-0 p-0 mx-2 checkbox">
                    <span class="fs-5 m-0 p-0 ingredient-name">{{ ingredient.original }}</span>
                </li>
                <li class="nfBtn">
                    <!-- Button that pulls up nutrition facts specific to the meal -->
                    <div class="nutrition-btn-container d-flex flex-column justify-content-center align-items-center mt-4">
                        <button class="btn btn-success fs-2 px-4 rounded rounded-5 elevation-5" data-bs-toggle="modal"
                            data-bs-target="#nutritionModal">SEE NUTRITION FACTS <img src="https://i.imgur.com/WbcjLNE.png"
                                alt="" height="30"></button>
                    </div>
                </li>
            </ul>
            <!-- Nutrition facts Modal -->
            <div class="modal fade" id="nutritionModal" tabindex="-1" aria-labelledby="nutritionModalLabel"
                aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-body">
                            <!-- Widget's Containing ALL data for meal, turn into modal -->
                            <div class="widgets p-0 m-0">
                                <div class="nutrition-label">
                                </div>
                            </div>
                        </div>
                        <!-- Closes modal -->
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary nmBtn" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="instructions-container p-0 m-0 px-4 mt-4">
            <h1 class="p-0 m-0">Instructions</h1>
            <!-- Set the inner HTML of this div to the active recipe instructions. -->
            <div class="bg-white p-4 mt-3 rounded rounded-5 elevation-3 fs-5 instructions">

            </div>
        </div>

        <!-- Summary of the recipe. Inner HTML is set to the summary to utilize HTML elements within the summary that is returned from the API -->
        <div class="summary-container p-0 m-0 px-4 mt-4 mb-4">
            <h1 class="p-0 m-0">About The Recipe</h1>
            <div class="bg-white p-4 mt-3 rounded rounded-5 elevation-3 fs-5 summary">

            </div>
        </div>

        <!-- STUB review card component -->
        <div class="p-0 m-0">
            <div class="col-12 d-flex flex-row justify-content-between align-items-between px-4 py-4">
                <h1 class="p-0 m-0m-0">Recipe Reviews</h1>
                <button data-bs-toggle="collapse" data-bs-target="#reviewForm"
                    class="btn btn-success  border border-1 border-black elevation-5" v-if="account.id">Add Review <i
                        class="mdi mdi-plus"></i></button>
            </div>
            <!-- STUB create review form -->
            <div class="collapse" id="reviewForm">
                <form @submit.prevent="createReview" class="form-control">
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
                    <input v-model="reviewData.comment" class="form-control" placeholder="Your Comment" type="text" required
                        maxlength="200" minlength="4">
                    <!-- <input type="number" min="1" max="5" class="form-control" required v-model="reviewData.rating"> -->
                    <button class="btn btn-success mt-2">Post Review</button>
                </form>
            </div>

            <!-- STUB review card -->
            <div class="p-0 m-0 px-3 reviews-container">
                <div v-for="review in reviews" :key="review.id" class="col-12">
                    <ReviewCard :review="review" />
                </div>
            </div>
        </div>

        <!-- MODAL - CONVERT TO COMPONENT -->
        <GroceryListModal />
    </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { recipesService } from '../services/RecipesService.js';
import { AppState } from '../AppState.js'
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop';
import { reviewService } from '../services/ReviewService';
import { groceriesService } from '../services/GroceriesService.js'
import JSConfetti from 'js-confetti'
import { Modal } from 'bootstrap';

export default {
    setup() {
        let route = useRoute()
        let router = useRouter()
        let reviewData = ref({})
        let groceryData = ref({})

        async function detailsOnBoarding() {
            await driverObj.drive()
        }
        const driver = window.driver.js.driver
        const driverObj = driver({
            showProgress: true,
            allowClose: true,
            onCloseClick: () => {
                localStorage.setItem('needsDetailsTour', 'false')
                driverObj.destroy()
                document.getElementsByClassName('nmBtn')[0].classList.remove('disabled')
                document.getElementsByClassName('nfBtn')[0].classList.remove('disabled')
                document.getElementsByClassName('ingredient')[0].classList.remove('disabled')
            },
            steps: [
                { element: '.img-container', popover: { title: `The Recipe 😎`, description: `Here you are viewing all details related to this recipe. Everything you need to know is on this page.`, side: "bottom", align: "center" } },
                { element: '.readyInBox', popover: { title: 'How long am I cooking? 🥣', description: 'Good question. This portion of the page will show you the approximate cooking time of the recipe as well as what this recipe is called.', side: "bottom", align: "center" } },
                {
                    element: '.ingredients-header', popover: {
                        title: `Ingredients & Servings 🍜`, description: `Ingredients and servings for this recipe will be displayed here and no where else.`, side: "bottom", align: "center", onNextClick: () => {
                            document.getElementsByClassName('ingredient')[0].classList.add('disabled')
                            driverObj.moveNext()
                        }
                    }
                },
                { element: '.ingredient', popover: { title: `The Ingredient 🥕`, description: `This is an individual ingredient that will display on page load. Most of the time it will include the quantity needed for this select recipe.`, side: "bottom", align: "center" } },
                {
                    element: '.cart', popover: {
                        title: `Adding to a grocery list 🛒`, description: `Don't have this ingredient? Don't have the attention span to remember it? No worries. Clicking the cart icon will add this ingredient to your personal shopping list.`, side: "bottom", align: "center", onNextClick: () => {
                            Modal.getOrCreateInstance('#groceryListModal').show()
                            document.getElementsByClassName('gmBtn')[0].classList.add('disabled')
                            let modalBody = document.getElementById('groceryUl')
                            modalBody.innerHTML = `
                        <div class="li-container d-flex flex-row justify-content-between fs-5">
                            <li class="text-black"><i class="mdi mdi-food"></i> <span class="text-success">SALT</span> - 2 GALLONS </li>
                            <i class="mdi mdi-close text-danger fs-2 close-icon"></i>
                        </div>`
                            driverObj.moveNext()
                        }
                    }
                },
                { element: '.grocery-list-modal-body', popover: { title: `Grocery List 📄`, description: `Once you log in or create an account you will be able to access your personal grocery list. All ingredients that you add to your grocery list will be displayed here.`, side: "top", align: "center" } },
                { element: '.li-container', popover: { title: `There's more? 🤔`, description: `Need more ideas for what you already have in your shopping cart or on your list? Clicking on each individual grocery list item will redirect you to a list of recipes using that ingredient.`, side: "bottom", align: "center" } },
                {
                    element: '.close-icon', popover: {
                        title: `Removing Groceries 🗑️`, description: `Click the X button to remove a grocery from your list.`, side: "bottom", align: "center", onNextClick: () => {
                            let modalBody = document.getElementById('groceryUl')
                            modalBody.innerHTML = ``
                            Modal.getOrCreateInstance('#groceryListModal').hide()
                            driverObj.moveNext()
                            document.getElementsByClassName('nfBtn')[0].classList.add('disabled')
                        }
                    }
                },
                {
                    element: '.nutrition-btn-container', popover: {
                        title: `Nutrition Facts 📑`, description: `If applicable each recipe will display a nutrition facts label for that specific recipe.`, side: "bottom", align: "center", onNextClick: () => {
                            Modal.getOrCreateInstance('#nutritionModal').show()
                            document.getElementsByClassName('nmBtn')[0].classList.add('disabled')
                            driverObj.moveNext()
                        }
                    }
                },
                {
                    element: '.modal-content', popover: {
                        title: `Nutrition Facts Label 📑`, description: `Self explanatory...`, side: "top", align: "center", onNextClick: () => {
                            Modal.getOrCreateInstance('#nutritionModal').hide()
                            document.getElementsByClassName('nmBtn')[0].classList.remove('disabled')
                            document.getElementsByClassName('nfBtn')[0].classList.remove('disabled')
                            document.getElementsByClassName('ingredient')[0].classList.remove('disabled')
                            driverObj.moveNext()
                        }
                    }
                },
                { element: '.instructions-container', popover: { title: `Instructions ⛏️`, description: `The recipe instructions are located here. You can expect to see a detailed breakdown of the recipe, how to prepare and cook it.`, side: "top", align: "center" } },
                {
                    element: '.summary-container', popover: {
                        title: `Summary 🗺️`, description: `A summary of the recipe. This may provide you a brief history of the recipe, its origins and much more.`, side: "top", align: "center", onNextClick: () => {
                            localStorage.setItem('needsDetailsTour', 'false')
                            driverObj.moveNext()
                        }
                    }
                },
                { element: '.reviews-container', popover: { title: `Reviews 💭`, description: `Thoughts and comments on this recipe are located here. Once logged in you will be able to review recipes.`, side: "top", align: "center" } },
            ]
        })



        // Community Recipe function should be different, mayhaps - getCommunityRecipeById()
        async function getRecipeById() {
            try {
                AppState.activeRecipe = {}
                await recipesService.getRecipeById(route.params.recipeId)
                getReviewsByRecipe();
                document.getElementsByClassName('nutrition-label')[0].innerHTML = AppState.nutritionLabel
                document.getElementsByClassName('summary')[0].innerHTML = AppState.activeRecipe.summary
                document.getElementsByClassName('instructions')[0].innerHTML = AppState.activeRecipe.instructions
            } catch (error) {
                Pop.error(error)
            }
        }

        // gets recipe info from route params
        onMounted(() => {
            getRecipeById();
            getReviewsByRecipe();
            // localStorage.clear()
            if (localStorage.getItem('needsDetailsTour') == null || localStorage.getItem('needsDetailsTour') == 'true') {
                detailsOnBoarding()
            }
        })

        // watchEffect(()=> {
        // })


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
            reviews: computed(() => AppState.activeReviews),
            ingredientOnList: computed(() => AppState.groceryList),
            account: computed(() => AppState.account),
            groceryData,
            reviewData,
            router,

            // JS CONFETTI function
            explode() {
                const jsConfetti = new JSConfetti()
                jsConfetti.addConfetti({
                    emojis: ['🍔', '🥩', '🍗', '🍆', '🥪', '🍲', '🍉', '🍇', '🍟', '🍕', '🥞', '🍪', '🥘', '🥕', '🦐', '🥑', '🍣', '🍜'],
                    confettiRadius: 500,
                    confettiNumber: 50,
                    emojiSize: 75
                })
            },

            // Adds ingredient to shopping list when clicking on cart.
            async addToList(grocery) {
                if (await Pop.confirm(`Add ${grocery.name} to grocery list?`)) {
                    groceryData.value.groceryName = grocery.name
                    groceryData.value.measureAmount = grocery.measures.us.amount || ''
                    groceryData.value.measureUnit = grocery.measures.us.unitShort || ''
                    await groceriesService.addGrocery(groceryData.value)
                    Pop.success(`Added ${grocery.name} to grocery list!`)
                } else {
                    Pop.toast(`${grocery.name} not added to grocery list.`)
                }

                // Remove ingredient from shopping list by clicking little X symbol
            },
            async removeFromList(groceryId) {
                if (await Pop.confirm(`Remove from gorcery list?`)) {
                    await groceriesService.removeFromList(groceryId)
                } else {
                    Pop.toast('Grocery was not removed from the list.')
                }
            },
            // STUB create review function - takes data fro input form in dropdown menu
            async createReview() {
                try {
                    reviewData.value.recipeId = route.params.recipeId
                    await reviewService.createReview(reviewData.value)
                    Pop.toast('Review left', 'success')
                } catch (error) {
                    Pop.error(error)
                }
            },

            async cloneRecipe() {
                try {
                    if (await Pop.confirm('Are you sure you want to clone this?')) {
                        await recipesService.cloneRecipe(AppState.activeRecipe)
                        router.push({ name: "Community Recipe Details", params: { recipeId: AppState.activeRecipe.id } })
                        this.explode()
                    }
                } catch (error) {
                    Pop.error(error)
                }
            },
        }
    }
}
</script>

<style lang="scss" scoped>
.recipe-title {
    font-size: 2.5rem;
    text-shadow: 0px 0px 5px rgb(255, 255, 255);
}

.disabled {
    pointer-events: none;
}

.ingredients-label {
    text-shadow: 0px 0px 5px white;
    font-size: 2.25rem !important;
}

.grocery-list {
    bottom: 5rem;
    right: 1rem;
    z-index: 5 !important;
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