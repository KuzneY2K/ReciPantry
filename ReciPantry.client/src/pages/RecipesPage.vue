<template>
    <section class="row p-0 m-0 animate__animated animate__fadeInDownBig" id="recipes-page-title">
        <div class="col-12 p-0 m-0 d-flex flex-column align-items-center justify-content-center">
            <h1 class="mt-3 title">Find your perfect <span class="text-success">Recipe</span></h1>
            <!-- Search bar that takes in parameters & filters 🔎 -->
            <section class="row p-0 m-0" id="searchBarBox">
                <SearchBar />
            </section>
        </div>
    </section>
    <section class="row d-flex flex-column align-items-center justify-content-center p-0 m-0 mt-3">
        <!-- For every recipe result a clickable card is rendered out -->
        <div class="col-12 col-md-9 col-md-8 d-flex flex-column align-items-center justify-content-center recipeCardBox">
            <RecipeCard v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" data-aos="flip-down" />
        </div>
    </section>

    <!-- Pagination buttons, for cleaner UI purposes 📕 -->
    <section class="row d-flex flex-row justify-content-center align-items-center p-0 m-0 mt-4 mb-4">
        <div class="col-12 col-md-8 d-flex flex-column p-0 m-0 px-2" v-if="recipes[0]">
            <div class="btn-container d-flex flex-row justify-content-between">
                <!-- Go back -->
                <button v-if="pageNum >= 1" @click="previousPage()"
                    class="btn btn-success text-white border border-1 border-black elevation-5 pag-btn px-1">Previous
                    Page</button>
                <!-- UI prevents user from going into negative pageNum -->
                <button v-if="pageNum < 1" @click="previousPage()"
                    class="btn btn-success text-white border border-1 border-black elevation-5 pag-btn px-1"
                    disabled>Previous Page</button>
                <!-- Go forward -->
                <button @click="nextPage()"
                    class="btn btn-success text-white border border-1 border-black elevation-5 pag-btn px-1">Next
                    Page</button>
            </div>
        </div>
    </section>
    <!-- Filter Modal -->
    <div class="modal fade" id="filterModal" tabindex="-1" aria-labelledby="filterModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="filterModalLabel">Filter Search</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="setFilterData()">
                        <section class="row p-0 m-0">
                            <div class="col-12 p-0 m-0">
                                <h3>Dietary Filters</h3>
                                <div class="input-group flex-nowrap">
                                    <input type="checkbox" name="veganCheck" id="veganCheck"
                                        v-model="filterData.veganCheck">
                                    <label for="veganCheck" class="ms-2">Vegan</label>
                                </div>
                                <div class="input-group flex-nowrap">
                                    <input type="checkbox" name="vegetarianCheck" id="vegeterianCheck"
                                        v-model="filterData.vegetarianCheck">
                                    <label for="vegetarianCheck" class="ms-2">Vegetarian</label>
                                </div>
                                <div class="input-group flex-nowrap">
                                    <input type="checkbox" name="glutenFreeCheck" id="glutenFreeCheck"
                                        v-model="filterData.glutenFreeCheck">
                                    <label for="glutenFreeCheck" class="ms-2">Gluten Free</label>
                                </div>
                                <div class="input-group flex-nowrap">
                                    <input type="checkbox" name="pescetarianCheck" id="pescetarianCheck"
                                        v-model="filterData.pescetarianCheck">
                                    <label for="pescetarianCheck" class="ms-2">Pescetarian</label>
                                </div>
                                <div class="input-group flex-nowrap">
                                    <input type="checkbox" name="ketoCheck" id="ketoCheck" v-model="filterData.ketoCheck">
                                    <label for="ketoCheck" class="ms-2">Ketogenic</label>
                                </div>
                                <h3 class="mt-3">Exclude Intolerances</h3>
                                <div class="input-group flex-nowrap">
                                    <input type="checkbox" name="dairyCheck" id="dairyCheck"
                                        v-model="filterData.dairyCheck">
                                    <label for="dairyCheck" class="ms-2">No Dairy</label>
                                </div>
                                <div class="input-group flex-nowrap">
                                    <input type="checkbox" name="eggCheck" id="eggCheck" v-model="filterData.eggCheck">
                                    <label for="eggCheck" class="ms-2">No Egg</label>
                                </div>
                                <div class="input-group flex-nowrap">
                                    <input type="checkbox" name="grainCheck" id="grainCheck"
                                        v-model="filterData.grainCheck">
                                    <label for="grainCheck" class="ms-2">No Grains</label>
                                </div>
                                <div class="input-group flex-nowrap">
                                    <input type="checkbox" name="peanutCheck" id="peanutCheck"
                                        v-model="filterData.peanutCheck">
                                    <label for="peanutCheck" class="ms-2">No Peanuts</label>
                                </div>
                                <div class="input-group flex-nowrap">
                                    <input type="checkbox" name="seafoodCheck" id="seafoodCheck"
                                        v-model="filterData.seafoodCheck">
                                    <label for="seafoodCheck" class="ms-2">No Seafood</label>
                                </div>
                                <div class="input-group flex-nowrap">
                                    <input type="checkbox" name="shellfishCheck" id="shellfishCheck"
                                        v-model="filterData.shellfishCheck">
                                    <label for="shellfishCheck" class="ms-2">No Shellfish</label>
                                </div>
                                <div class="input-group flex-nowrap">
                                    <input type="checkbox" name="soyCheck" id="soyCheck" v-model="filterData.soyCheck">
                                    <label for="soyCheck" class="ms-2">No Soy</label>
                                </div>
                                <div class="input-group flex-nowrap">
                                    <input type="checkbox" name="sulfiteCheck" id="sulfiteCheck"
                                        v-model="filterData.sulfiteCheck">
                                    <label for="sulfiteCheck" class="ms-2">No Sulfite</label>
                                </div>
                                <div class="input-group flex-nowrap">
                                    <input type="checkbox" name="wheatCheck" id="wheatCheck"
                                        v-model="filterData.wheatCheck">
                                    <label for="wheatCheck" class="ms-2">No Wheat</label>
                                </div>
                            </div>
                        </section>
                        <button type="submit" class="btn btn-primary mt-3">Save changes</button>
                    </form>
                </div>
                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue';
import { AppState } from '../AppState.js';
import { recipesService } from '../services/RecipesService.js';
import Pop from '../utils/Pop.js';
import { logger } from '../utils/Logger.js';
import { Modal } from 'bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
    setup() {
        const driver = window.driver.js.driver
        const driverObj = driver({
            showProgress: true,
            allowClose: true,
            onCloseClick: () => {
                window.localStorage.setItem('needsRecipesTour', false)
                driverObj.destroy()
                document.getElementsByClassName('searchBarBox')[0].disabled = false
                document.getElementsByClassName('searchBarFilterBox')[0].disabled = false
                document.getElementsByClassName('recipeCardBox')[0].disabled = false
                document.getElementById('learnMoreBox').style.pointerEvents = false
            },
            steps: [
                { element: '#recipes-page-title', popover: { title: 'Ready to browse recipes? 🧑‍🍳', description: 'Finding recipes on ReciPantry is super easy.', side: "bottom", align: "center" } },
                { element: '#searchBarBox', popover: { title: 'Search Bar? 🔎', description: 'Use our search bar to find exactly what you need. 👀', side: "bottom", align: "center" } },
                { element: '#filterButtonBox', popover: { title: 'Filtering. 🔦', description: 'Our search filter will help you find that perfect recipe. ', side: "bottom", align: "center" } },
                { element: '#recipeCardBox', popover: { title: 'The Recipe. 🍻', description: 'Each and every recipe from your search will show up as an individual box.', side: "bottom", align: "center" } },
                {
                    element: '#learnMoreBox', popover: {
                        title: 'Details. 🍻', description: `Simply click learn more to see all of the that recipe's details.`, side: "bottom", align: "center",
                        onNextClick: () => {
                            document.getElementsByClassName('searchBarBox')[0].disabled = false
                            document.getElementsByClassName('searchBarFilterBox')[0].disabled = false
                            document.getElementsByClassName('searchBarSubmitBox')[0].disabled = false
                            document.getElementsByClassName('recipeCardBox')[0].disabled = false
                            document.getElementById('learnMoreBox').style.pointerEvents = false
                            window.localStorage.setItem('needsRecipesTour', false),
                                driverObj.moveNext()
                        }
                    },
                },
                { element: '#recipes-page-title', popover: { title: 'Get cooking. 🍻', description: `Click "DONE" to exit this guide.`, side: "bottom", align: "center" } },
            ]
        })

        let filterData = ref([])

        // Gets random recipes so that the Recipes page isnt empty. 
        // Only gets recipes if the appstate selected category is null. Removes conflict with categories
        async function getRandomRecipes() {
            try {
                if (AppState.selectedCategory == null && AppState.selectedIngredient == null) {
                    await recipesService.getRandomRecipes()
                }
            } catch (error) {
                Pop.error(error)
            }
        }

        function scrollFix() {
            window.scroll(0, 1000)
        }

        function recipesOnBoarding() {
            setTimeout(driverObj.drive, 1000)
        }

        onMounted(() => {
            AOS.init()
            if (window.localStorage.getItem('needsRecipesTour') == null || window.localStorage.getItem('needsRecipesTour') == true) {
                document.getElementsByClassName('searchBarBox').disabled = true
                document.getElementsByClassName('searchBarFilterBox')[0].disabled = true
                document.getElementsByClassName('searchBarSubmitBox')[0].disabled = true
                document.getElementsByClassName('recipeCardBox')[0].disabled = true
                setTimeout(function() {
                    document.getElementById('learnMoreBox').style.pointerEvents = 'none'
                }, 1500)
                recipesOnBoarding()
            } else {
                document.getElementsByClassName('searchBarBox')[0].disabled = false
                document.getElementsByClassName('searchBarFilterBox')[0].disabled = false
                document.getElementsByClassName('recipeCardBox')[0].disabled = false
                setTimeout(function() {
                    document.getElementById('learnMoreBox').style.pointerEvents = 'auto'
                }, 1500)
            }

            getRandomRecipes()
        })

        return {
            recipes: computed(() => AppState.recipes),
            pageNum: computed(() => AppState.pageNum),
            // After every recipe search the users query params are sent to the appstate so that these buttons can access them
            query: computed(() => AppState.savedQuery),
            categories: computed(() => AppState.selectedCategory),
            filterData,

            setFilterData() {
                filterData.value.veganCheck == true ? filterData.value.vegan = 'Vegan,' : filterData.value.vegan = ''
                filterData.value.vegetarianCheck == true ? filterData.value.vegetarian = 'Vegetarian,' : filterData.value.vegetarian = ''
                filterData.value.glutenFreeCheck == true ? filterData.value.glutenFree = 'Gluten Free,' : filterData.value.glutenFree = ''
                filterData.value.pescetarianCheck == true ? filterData.value.pescetarian = 'Pescetarian,' : filterData.value.pescetarian = ''
                filterData.value.ketoCheck == true ? filterData.value.keto = 'Ketogenic,' : filterData.value.keto = ''
                filterData.value.dairyCheck == true ? filterData.value.dairy = 'Dairy,' : filterData.value.dairy = ''
                filterData.value.eggCheck == true ? filterData.value.eggs = 'Eggs,' : filterData.value.eggs = ''
                filterData.value.grainCheck == true ? filterData.value.grains = 'Grains,' : filterData.value.grains = ''
                filterData.value.peanutCheck == true ? filterData.value.peanuts = 'Peanuts,' : filterData.value.peanuts = ''
                filterData.value.seafoodCheck == true ? filterData.value.seafood = 'Seafood,' : filterData.value.seafood = ''
                filterData.value.shellfishCheck == true ? filterData.value.shellfish = 'Shellfish,' : filterData.value.shellfish = ''
                filterData.value.soyCheck == true ? filterData.value.soy = 'Soy,' : filterData.value.soy = ''
                filterData.value.sulfiteCheck == true ? filterData.value.sulfite = 'Sulfite,' : filterData.value.sulfite = ''
                filterData.value.wheatCheck == true ? filterData.value.wheat = 'Wheat,' : filterData.value.wheat = ''
                recipesService.setFilterData(filterData)
                logger.log(filterData)
                Modal.getOrCreateInstance('#filterModal').hide()
            },

            // On 'save changes' search recipes
            async searchRecipesByQuery() {
                try {
                    AppState.selectedCategory = null
                    AppState.selectedIngredient = null
                    await recipesService.searchRecipesByQuery(AppState.savedQuery)
                    scrollFix()
                } catch (error) {
                    Pop.error(error)
                }
            },


            // Offset is basically how many results the api skips over. Kinda like a next page / prev page thing
            // Next page, increases page count to increase search offset
            async nextPage() {
                try {
                    AppState.pageNum += 1
                    window.scrollTo(0, 0)
                    await recipesService.paginate(this.query)
                } catch (error) {
                    Pop.error(error)
                }
            },

            // Previous page, decreases page count to decrease search offset
            async previousPage() {
                try {
                    AppState.pageNum -= 1
                    window.scrollTo(0, 0)
                    await recipesService.paginate(this.query)
                } catch (error) {
                    Pop.error(error)
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.searchBarBox.disabled {
    pointer-events: none;
}

.searchBarFilterBox.disabled {
    pointer-events: none;
}

.searchBarSubmitBox.disabled {
    pointer-events: none;
}

.recipeCardBox.disabled {
    pointer-events: none;
}

.title {
    font-size: 4rem;
    text-shadow: 0px 1px 7px rgb(221, 221, 221)
}

@media (max-width: 768px) {
    .title {
        font-size: 2.5rem;
    }
}

.pag-btn {
    width: 8rem;
}</style>