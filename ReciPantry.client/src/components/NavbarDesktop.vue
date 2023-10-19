<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light w-100 elevation-5 py-3 ">
  <div class="collapse navbar-collapse d-flex flex-row justify-content-around align-items-center" id="navbarNav">
    <ul class="navbar-nav d-flex flex-row justify-content-center align-items-center">
        <li class="mx-4 p-0 m-0">
            <router-link :to="{ name: 'Home' }">
                <h3 class="p-0 m-0 text-black">HOME</h3>
            </router-link>
        </li>
        <li class="mx-4 p-0 m-0">
            <router-link :to="{ name: 'Recipes' }">
                <h3 class="p-0 m-0 text-black">RECIPES</h3>
            </router-link>
        </li>

        <li class="mx-4 p-0 m-0">
            <router-link :to="{ name: 'Community' }">
                <h3 class="p-0 m-0 text-black">COMMUNITY</h3>
            </router-link>
        </li>
        <li class="mx-4 p-0 m-0">
            <router-link :to="{ name: 'Account' }"
            class="btn text-success p-0 m-0 border-0" id="navbarAccountBox">
            <h3 class="m-0 p-0 border-0" v-if="account.id">ACCOUNT</h3> <h3 class="m-0 p-0 border-0" v-if="!account.id">LOGIN</h3>
          </router-link>
        </li>
    </ul>
  </div>
</nav>
</template>

<script>
import { computed } from 'vue';
import { AppState } from '../AppState.js';

    export default {

        setup(){
            return{
                account: computed(() => AppState.account)
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>