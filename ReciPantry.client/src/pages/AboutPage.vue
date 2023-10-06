<template>
  <div class="container-fluid about-bios">

    <div class="about row justify-content-around">
      <h1 class="text-center mt-4">The Chefs <i class="mdi mdi-chef-hat"></i></h1>
      <div class="p-1 col-10 col-md-2 card mt-4 elevation-5" data-aos="fade-right">
        <img src="../assets/img/tyler-pic.jpg" alt="Tyler">
        <span class="fs-3 ms-2 mt-3">Tyler:</span>
        <span class="p-2">Hello, my name is Tyler! I am a prospective full stack developer and a student at Boise CodeWorks. After
          graduating High School I attended CSU Channel Islands for a year before realizing I wanted something different
          for myself. I decided to take a leap forward and jump-started my career as a software developer, and it has
          truly been a life changing experience. </span>
        <div class="links-container fs-1">
        <span class="text-end"><a target="_blank" href="https://github.com/TylerChristiansen22"><i
              class="text-success mdi mdi-github"></i></a> <a target="_blank"
            href="https://www.linkedin.com/in/tyler-christiansen-58555328a/"><i
              class="text-success mdi mdi-linkedin"></i></a></span>
        </div>
      </div>
      <div class="p-1 m-1 col-10 col-md-2 card mt-4 elevation-5" data-aos="fade-left">
        <img src="../assets/img/jason-pic.jpg" alt="Jason">
        <span class="fs-3 ms-2 mt-3">Jason:</span>
        <span class="p-2">Born and raised in California, Jason has always had an interest in computers and the idea of building
          applications. His ambition led him to Boise, Idaho to attend Boise CodeWorks. He will pursue a career in web
          development upon completion of the course.</span>
        <div class="links-container fs-1"></div>
      </div>
      <div class="p-1 m-1 col-10 col-md-2 card mt-4 elevation-5" data-aos="fade-right">
        <img src="../assets/img/image0.jpeg" alt="Mark">
        <span class="fs-3 ms-2 mt-3">Mark:</span>
        <span class="p-2">Hi my name is Mark. Im originally from Florida and got stationed out in Mountain Home, ID while serving in the United States Air Force.After my military contract was over I was unsure of what exactly I wanted to do with my life and was for some time, lost. That was until one day, I figured I'd give coding a shot and discovered my life's true passion. I am very excited for what the future has in store for my self and my classmates.</span>
      <div class="links-container fs-1">
      <span class="text-end"><a target="_blank" href="https://github.com/KuzneY2K"><i
              class="text-success mdi mdi-github"></i></a> <a target="_blank"
            href="https://www.linkedin.com/"><i
              class="text-success mdi mdi-linkedin"></i></a></span>
            </div>
      </div>
      <div class="p-1 m-1 col-10 col-md-2 card mt-4 elevation-5" data-aos="fade-left">
        <img src="../assets/img/linc-pic.jpeg" alt="Lincoln">
        <span class="fs-3 ms-2 mt-3">Lincoln:</span>
        <span class="p-2">Raised here in the great state of Idaho, I've spent my first couple adult years working a multitude of
          different construction and labor jobs before realizing I needed a more sustaining and steady career. I am now a
          student at Codeworks Boise, excited to take the leap into the Software Development world.</span>
        <div class="links-container fs-1">
        <span class="text-end"><a target="_blank" href="https://github.com/lincmarler?tab=repositories"><i
              class="text-success mdi mdi-github"></i></a> <a target="_blank"
            href="www.linkedin.com/in/lincoln-marler-920a34287"><i class="text-success mdi mdi-linkedin"></i></a></span>
        </div>
      </div>
      <h1 class="mt-1 text-center mt-4">About The Site</h1>
      <div class="card col-11 mt-4 mb-4 elevation-5 bg-white py-3" data-aos="fade-right">
        <span class="fs-4">Problem Statement:</span>
        <span class="fs-6">Find recipes instantly & learn to cook</span>
        <span class="fs-4">Concepts:</span>
        <span class="fs-6">Collection of Recipes, User uploaded & "chef" picked</span>
        <span class="fs-4">Target Audience:</span>
        <span class="fs-6">Home Cooks / Aspiring Chefs</span>
        <span class="fs-4">Why:</span>
        <span class="fs-6">Help Home Cooks -> Eating out is expensive -> Learn to cook better than restaurants</span>
        <span class="fs-4">The Planning Stage:</span>
        <span class=" fs-6"><a class="text-success" target="_blank"
            href="https://www.figma.com/file/rQXArisUQj8ExCffrfGemZ/RECIPANTRY-V2?type=design&node-id=0-1&mode=design&t=8mHQE07ewG6lqaX5-0">Figma
            Mock</a></span>
        <span class=" fs-6"><a class="text-success" target="_blank"
            href="https://www.figma.com/file/2ipRFOXKY3djWvZokaSYFq/ReciPantry-UML?type=whiteboard&t=ZJCUPUUwpcnDvkoO-6">UML</a></span>
        <span class=" fs-6"><a class="text-success" target="_blank"
            href="https://trello.com/invite/b/Js5URoUv/ATTIab8c4b01e59d1e6cc26ee0c7dbc05e1aCD363637/recipantry">Trello</a></span>
        <span class="fs-4">Technologies Used:</span>
        <span class="fs-6">MongoDB / Mongoose || Vue || ES6 || Express || NodeJS || AOS || Bootstrap || VueUse/Motion ||
          JSConfetti || DriverJS || Auth0 || SASS || PATTERN</span>

      </div>
    </div>
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
import { onMounted } from 'vue';

export default {
  setup() {
    onMounted(() => {
      AOS.init()
    })
    return {

    }
  }
}
</script>

<style>

.about-bios{
  overflow-x: hidden !important;
}

</style>
