<template>
  <!-- Landing Text -->
  <section class="row p-0 m-0 container-fluid">
    <div class="col-12 p-0 m-0">
      <h1 class="home-title postion-absolute ms-4 mt-4 animate__animated animate__bounceInRight"><span class="text-success">FIND</span> THE RECIPE THAT <br>SUITS <span class="text-success">YOU</span></h1>
    </div>
  </section>
  <!-- Landing Card -->
  <section class="row p-0 m-0 container-fluid">
    <div class="col-12 p-0 m-0 d-flex flex-row justify-content-center landingCardContainer">
      <!-- COMPLETELY SEPARATE FROM RECIPE CARDS. -->
      <!-- These are the cards that can be side scrolled on the home page. -->
      <LandingCard />
    </div>
  </section>
  <!-- GET STARTED BUTTON - Redirects to recipes Search -->
    <section class="row p-0 m-0 container-fluid animate__animated animate__fadeInDownBig">
      <div class="col-12 p-0 m-0 d-flex flex-row justify-content-center mt-4">
        <RouterLink :to="{ name: 'Recipes' }">
            <button class="btn btn-success p-0 m-0 px-4 py-2 fs-2">Get Started</button>
        </RouterLink>
      </div>
    </section>
</template>

<script>
export default {
  setup() {
    return {
    }
  }
}
</script>

<style scoped lang="scss">         
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .landingCardContainer{
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
}
</style>
