<template>
    <section class="row p-0 m-0">
        <div class="col-12 p-0 m-0 px-5">
            <h1 class="text-center mt-3">Explore <span class="text-success">Community</span></h1>
            <CommunitySearchBar />
        </div>
    </section>
</template>

<script>
import { onMounted } from 'vue';
import {recipesService} from '../services/RecipesService.js'

    export default {
        setup(){

            async function getCommunityRecipes(){
                await recipesService.getCommunityRecipes()
            }

            onMounted(() => {
                getCommunityRecipes()
            })
            return{

            }
        }
    }
</script>

<style lang="scss" scoped>

</style>