<template id="page">
    <section class="row p-0 m-0 animate__animated animate__fadeInDownBig">
        <div class="col-12 p-0 m-0 d-flex flex-column align-items-center justify-content-center">
            <h1 class="mt-3 title">From Our <span class="text-success">Community</span></h1>
            <!-- Search bar that takes in parameters & filters 🔎 -->
            <section class="row p-0 m-0">
                <CommunitySearchBar />
            </section>
        </div>
    </section>
    <section class="row d-flex flex-column align-items-center justify-content-center p-0 m-0 mt-3">
        <div class="col-12 col-md-9 col-md-8 d-flex flex-column align-items-center justify-content-center">
            <CommunityRecipeCard v-for="recipe in communityRecipes" :key="recipe.id" :recipe="recipe" data-aos="flip-down"/>
        </div>
        <CreateRecipeModalForm />
        <div class="col-2 col-md-4" v-if="account.id">
            <button id="createRecipeBtn" data-bs-toggle="modal" data-bs-target="#createRecipe" class="btn btn-success buttonContainer border border-1 border-black elevation-5 py-2 px-3" ><i class="mdi mdi-plus-thick"></i></button>
        </div>
    </section>
</template>

<script>
import { computed, onMounted } from 'vue';
import { recipesService } from '../services/RecipesService.js'
import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { logger } from '../utils/Logger.js';
import { Modal } from 'bootstrap';

export default {
    setup() {

        const driver = window.driver.js.driver
        const driverObj = driver({
            showProgress: true,
            allowClose: true,
            disableActiveInteraction: true,
            onCloseClick: () => {
                window.localStorage.setItem('needsCreateTour', false)
                driverObj.destroy()
            },
            steps: [
                { element: '#createRecipeBtn', popover: { title: `Ready To Chef? 🧑‍🍳`, description: `Clicking this button will allow you to create and share your own recipes with everyone else.`, side: "top", align: "center", onNextClick: () => {
                    Modal.getOrCreateInstance('#createRecipe').show()
                    driverObj.moveNext()
                } } },
                { element: '.createRecipeModal', popover: { title: `It's Easy 📝`, description: `Use this form to post your recipe for everyone else to see and cook with.`, side: "bottom", align: "right" } },
                { element: '#addIngredientBtn', popover: { title: `Adding Ingredients ➕`, description: `Clicking [Add +] will allow you add as many ingredients as you want.`, side: "bottom", align: "right" } },
                { element: '#addIngredientBtn', popover: { title: `Removing Ingredients ➖`, description: `Clicking [Remove] will simply remove the ingredient from your list. Easy.`, side: "bottom", align: "right" } },
                { element: '#recipeImg', popover: { title: `Adding images 🖼️`, description: `Currently this app only supports image url's. Make sure to include a picture of your dish.`, side: "bottom", align: "right", onNextClick:() => {
                            Modal.getOrCreateInstance('#createRecipe').hide()
                            document.getElementById('createRecipeBtn').disabled = false
                            document.getElementById('addIngredientBtn').disabled = false
                            document.getElementById('removeIngredientBtn').disabled = false
                            document.getElementById('createRecipeSubmitBtn').disabled = false
                            window.localStorage.setItem('needsCreateTour', false)
                            driverObj.moveNext()
                } } },
                { element: '#page', popover: { title: `And done.`, description: `Creating recipes is simple.`, side: "bottom", align: "right" } },
            ]
        })
        
        function communityOnBoarding(){
            if(AppState.account.id){
                // logger.log('logged on')
                if (window.localStorage.getItem('needsCreateTour') == null || window.localStorage.getItem('needsCreateTour') == true) {
                driverObj.drive()
                document.getElementById('createRecipeBtn').disabled = true
                document.getElementById('addIngredientBtn').disabled = true
                document.getElementById('removeIngredientBtn').disabled = true
                document.getElementById('createRecipeSubmitBtn').disabled = true
                }
            } else {
                // logger.log('logged out')
            }
        }


        onMounted(() => {
            getCommunityRecipes()
            AOS.init()
            setTimeout(communityOnBoarding, 2000)
        })

        async function getCommunityRecipes() {
            try {
                await recipesService.getCommunityRecipes()

            } catch (error) {
                Pop.error(error)
            }
        }
        return {
            communityRecipes: computed(() => AppState.communityRecipes),
            account: computed(() => AppState.account)
        }
    }
}
</script>

<style lang="scss" scoped>
.title {
    font-size: 4rem;
    text-shadow: 0px 1px 7px rgb(221, 221, 221)
}

@media (max-width: 768px){
    .title{
        font-size: 2.5rem;
    }
}

.pag-btn {
    width: 8rem;
}

.disabled{
    pointer-events: none;
}

.buttonContainer {
    position: fixed;

    @media(min-width: 768px) {
        bottom: 5em;
        right: 1em;
    }

    @media(max-width: 768px) {
        bottom: 5em;
        right: 1em;
    }
}
</style>