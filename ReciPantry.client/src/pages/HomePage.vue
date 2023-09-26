<template>
  <!-- Landing Text -->
  <section class="row p-0 m-0 container-fluid">
    <div class="col-12 p-0 m-0">
      <h1 class="home-title postion-absolute ms-4 mt-4 animate__animated animate__bounceInRight"><span class="text-success">FIND</span> THE RECIPE THAT <br>SUITS <span class="text-success">YOU</span></h1>
    </div>
  </section>
  <!-- Search Bar -->
  <section class="row p-0 m-0 container-fluid animate__animated animate__fadeInDownBig">
    <div class="col-12 p-0 m-0 d-flex flex-row justify-content-center">
      <!-- Search Form - Search by query with filters -->
      <form @submit.prevent="testBtn()">
        <div class="input-group p-0 m-0 mb-3 mt-3 elevation-3 border border-black border-1 bg-transparent rounded">
          <!-- Submit Button -->
          <button type="submit" class="btn bg-light p-0 m-0"><span class="input-group-text p-0 m-0 py-1 px-3" id="basic-addon1"><i class="mdi mdi-magnify fs-2"></i></span></button>
            <input type="text" class="form-control bg-white" placeholder="Search a recipe" aria-label="Username" aria-describedby="basic-addon1">
            <!-- FILTER BUTTON - Toggles modal that has all filter options. -->
            <button class="btn btn-grad px-3"><img src="https://i.imgur.com/Gh9UJij.png" alt="" height="30"></button>
          </div>
      </form>
    </div>
  </section>
  <!-- Landing Card -->
  <section class="row p-0 m-0 container-fluid">
    <div class="col-12 p-0 m-0">
      <!-- COMPLETELY SEPARATE FROM RECIPE CARDS. -->
      <!-- These are the cards that can be side scrolled on the home page. -->
      <LandingCard />
    </div>
  </section>
</template>

<script>
import { onMounted } from 'vue'
import { recipesService } from '../services/RecipesService.js'
import { logger } from '../utils/Logger.js'
export default {
  setup() {
    async function getOneRecipe(){
      await recipesService.getOneRecipe()
    }
    onMounted(() => {
      getOneRecipe()
    })
    return {

      testBtn(){
        logger.log('test')
      },

    }
  }
}
</script>

<style scoped lang="scss">         
.btn-grad {
            background-color: #19875434;
          }
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
      
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
}
</style>
