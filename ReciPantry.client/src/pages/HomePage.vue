<template>
  <!-- Landing Text -->
  <section class="row p-0 m-0">
    <div class="col-12 p-0 m-0 d-flex flex-row justify-content-md-center" id="titleText">
      <h1 class="home-title postion-absolute ms-4 mt-4 animate__animated animate__fadeIn"><span
        class="text-success">FIND</span> THE <span>RECIPE THAT SUITS</span> <span class="text-success">YOU</span>, ON <span class="text-success">RECIPANTRY</span><i
          class="mdi mdi-chef-hat"></i></h1>
      </div>
      <hr class="animate__animated animate__fadeIn">
      <!-- GET STARTED BUTTON - Redirects to recipes Search -->
      <!-- Landing Card -->
      <div class="col-12 p-0 m-0 d-flex flex-row justify-content-center landingCardContainer" id="homeCard">
        <!-- COMPLETELY SEPARATE FROM RECIPE CARDS. -->
        <!-- These are the cards that can be side scrolled on the home page. -->
        <LandingCard  />
      </div>
    </section>
  <section class="row p-0 m-0 animate__animated animate__fadeIn">
    <hr class="animate__animated animate__fadeIn mt-4">
    <div class="col-12 p-0 m-0 d-flex flex-row justify-content-center mb-3 mt-3">
      <RouterLink :to="{ name: 'Recipes' }">
        <button class="btn btn-success p-0 m-0 px-4 py-2 fs-2 elevation-5 border border-1 border-black getStartedBox" id="getStartedBox">Get Started <i
            class="mdi mdi-arrow-right-bold"></i></button>
      </RouterLink>
    </div>
  </section>
  <!-- Categories Section -->
  <section class="row p-0 m-0 categoriesBox d-flex flex-row justify-content-md-center" id="categoriesBox">
    <div class="col-12 p-0 m-0 mt-md-3">
      <h1 class="text-center categories-title animate__animated animate__fadeIn">Browse Categories</h1>
    </div>
    <div
      class="col-12 col-md-9 px-5 p-md-0 m-0 d-flex flex-row justify-content-start justify-content-md-center bubble-container animate__animated animate__fadeInRightBig">
      <CategoryBubble />
    </div>
  </section>
  <hr class="animate__animated animate__fadeIn">
</template>

<script>
import { computed, onMounted, ref } from 'vue';
import { AppState } from '../AppState.js';
import { logger } from '../utils/Logger.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  setup() {
    const driver = window.driver.js.driver
    const driverObj = driver({
      showProgress: true,
      allowClose: true,
      onCloseClick: () => { 
        localStorage.setItem('needsHomeTour', 'false')
        driverObj.destroy()
        document.getElementsByClassName('categoriesBox')[0].classList.remove('disabled')
        document.getElementsByClassName('getStartedBox')[0].classList.remove('disabled')
        document.getElementsByClassName('navbar')[0].classList.remove('disabled')
      },
      steps: [
        { element: '#homeCard', popover: { title: 'Welcome to ReciPantry 🍔', description: 'Let us show you around and give you a small tour!!', side: "bottom", align: "center" } },
        { element: '#titleText', popover: { title: 'Let us help you become the best chef. 🧑‍🍳', description: 'Finding the perfect recipe and saving money while doing so has never been easier.', side: "bottom", align: "start", onNextClick: () => {
          window.scrollBy(0, -window.innerHeight), driverObj.moveNext(), driverObj.refresh()
        } }},
        { element: '#categoriesBox', popover: { title: 'Not sure where to start? 🍲', description: 'Select any category to see all recipes related to that category. Need to see more? Scroll to the side!', side: "top", align: "center" } },
        { element: '#navbarBox', popover: { title: 'Navigating around is simple. ↘️', description: 'Select any button to visit its respective webpage!', side: "top", align: "center" } },
        { element: '#navbarHomeBox', popover: { title: 'Home Page. 🏡', description: 'You are here!', side: "top", align: "center" } },
        { element: '#navbarRecipesBox', popover: { title: 'Recipe Page. 📃', description: 'Explore all of our recipes on this page!', side: "top", align: "center" } },
        { element: '#navbarCommunityBox', popover: { title: 'Community Page. 🫂', description: 'Explore all of our custom user created recipes, and be able to create your own!', side: "top", align: "center" } },
        { element: '#navbarAccountBox', popover: { title: 'Account Page. 👳', description: 'Access your account here.', side: "top", align: "center", }},
        { element: '#navbarAboutBox', popover: { title: 'About Page 🤔', description: 'Get some info on this site over on this tab.', side: "top", align: "center", 
        onNextClick: () => {
          document.getElementsByClassName('categoriesBox')[0].classList.remove('disabled')
          document.getElementsByClassName('getStartedBox')[0].classList.remove('disabled')
          document.getElementsByClassName('navbar')[0].classList.remove('disabled')
          localStorage.setItem('needsHomeTour', false),
            logger.log('END TOUR => ' + localStorage.getItem('needsHomeTour'))
          driverObj.moveNext()
            } } },
        { element: '#getStartedBox', popover: { title: 'Ready to start?', description: 'Get cooking.', side: "top", align: "center",
        }, 
        }
        
      ]
    })
    
    function onboarding() {
      setTimeout(driverObj.drive, 1000)
    }

  onMounted(() => {
    AOS.init()
    // if(localStorage.getItem('needsHomeTour') == null || localStorage.getItem('needsHomeTour') == 'true'){
    //   logger.log(localStorage.storedData)
    //   document.getElementsByClassName('categoriesBox')[0].classList.add('disabled')
    //   document.getElementsByClassName('getStartedBox')[0].classList.add('disabled')
    //   document.getElementsByClassName('navbar')[0].classList.add('disabled')
    //   onboarding()
    // } else {
    //   document.getElementsByClassName('categoriesBox')[0].classList.remove('disabled')
    //   document.getElementsByClassName('getStartedBox')[0].classList.remove('disabled')
    //   document.getElementsByClassName('navbar')[0].classList.remove('disabled')
    // }
  })
    
    return {
      categories: computed(() => AppState.categories),
      
    }
    
  }
}
</script>

<style scoped lang="scss">

// DRIVER JS - DONT TOUCH!

.recipantry-theme{
  background-color: rgb(49, 163, 66) !important;
}

// 

.categoriesBox.disabled{
  pointer-events: none;
}

.home-title {
  font-size: 4rem !important;
}

@media (max-width: 768px){
  .home-title{
    font-size: 2.5rem !important;
  }
}

.getStartedBox.disabled {
  pointer-events: none;
}

.bubble-container {
  overflow-x: scroll !important;
}

.categories-title {
  font-size: 2.5rem !important;
}

hr {
  height: 4px;
  width: 75%;
  background-color: black;
  position: relative;
  margin: 20px auto;
}

.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .landingCardContainer {
    overflow-x: scroll !important;
  }

  .home-card {
    width: 50vw;



    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}</style>
