<template>
    <!-- MAIN COURSE -->
    <RouterLink :to="{ name: 'Recipes' }">
    <div class="main-course-container d-flex flex-column align-items-center justify-content-center me-3">
        <img src="https://plus.unsplash.com/premium_photo-1664391747379-b7d777d02281?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1959&q=80" alt="" class="bubble rounded rounded-pill elevation-5">
        <h5 class="mt-2 category-name">Main Courses</h5>
    </div>
    </RouterLink>
    <!-- SIDES -->
    <div class="side-dish-container d-flex flex-column align-items-center justify-content-center me-3">
        <img src="https://images.unsplash.com/photo-1633436375153-d7045cb93e38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80" alt="" class="bubble rounded rounded-pill elevation-5">
        <h5 class="mt-2 category-name">Side Dishes</h5>
    </div>
    <!-- SIDES -->
    <div class="dessert-container d-flex flex-column align-items-center justify-content-center me-3">
        <img src="https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80" alt="" class="bubble rounded rounded-pill elevation-5">
        <h5 class="mt-2 category-name">Desserts</h5>
    </div>
    <!-- APPETIZER -->
    <div class="appetizer-container d-flex flex-column align-items-center justify-content-center me-3">
        <img src="https://images.unsplash.com/photo-1607098665874-fd193397547b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" class="bubble rounded rounded-pill elevation-5">
        <h5 class="mt-2 category-name">Appetizers</h5>
    </div>
    <!-- SALAD -->
    <div class="salad-container d-flex flex-column align-items-center justify-content-center me-3">
        <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" class="bubble rounded rounded-pill elevation-5">
        <h5 class="mt-2 category-name">Salads</h5>
    </div>
    <!-- BREAD -->
    <div class="bread-container d-flex flex-column align-items-center justify-content-center me-3">
        <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" alt="" class="bubble rounded rounded-pill elevation-5">
        <h5 class="mt-2 category-name">Bread</h5>
    </div>
    <!-- BREAKFAST -->
    <div class="breakfast-container d-flex flex-column align-items-center justify-content-center me-3">
        <img src="https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80" alt="" class="bubble rounded rounded-pill elevation-5">
        <h5 class="mt-2 category-name">Breakfast</h5>
    </div>
    <!-- Soups -->
    <div class="soup-container d-flex flex-column align-items-center justify-content-center me-3">
        <img src="https://images.unsplash.com/photo-1613844237701-8f3664fc2eff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80" alt="" class="bubble rounded rounded-pill elevation-5">
        <h5 class="mt-2 category-name">Soups</h5>
    </div>
    <!-- Beverages -->
    <div class="beverages-container d-flex flex-column align-items-center justify-content-center me-3">
        <img src="https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" class="bubble rounded rounded-pill elevation-5">
        <h5 class="mt-2 category-name">Beverages</h5>
    </div>
    <!-- Sauces -->
    <div class="sauces-container d-flex flex-column align-items-center justify-content-center me-3">
        <img src="https://images.unsplash.com/photo-1563599175592-c58dc214deff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" class="bubble rounded rounded-pill elevation-5">
        <h5 class="mt-2 category-name">Sauces</h5>
    </div>
    <!-- Marinades -->
    <div class="marinades-container d-flex flex-column align-items-center justify-content-center me-3">
        <img src="https://images.unsplash.com/photo-1631991506046-f83d71a68a9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="" class="bubble rounded rounded-pill elevation-5">
        <h5 class="mt-2 category-name">Marinades</h5>
    </div>
    <!-- Fingerfood -->
    <div class="fingerfood-container d-flex flex-column align-items-center justify-content-center me-3">
        <img src="https://images.unsplash.com/photo-1518619745898-93e765966dcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1868&q=80" alt="" class="bubble rounded rounded-pill elevation-5">
        <h5 class="mt-2 category-name">Fingerfood</h5>
    </div>
    <!-- Snack -->
    <div class="snacks-container d-flex flex-column align-items-center justify-content-center me-3">
        <img src="https://images.unsplash.com/photo-1521986329282-0436c1f1e212?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80" alt="" class="bubble rounded rounded-pill elevation-5">
        <h5 class="mt-2 category-name">Snacks</h5>
    </div>
    <!-- Drink -->
    <div class="drinks-container d-flex flex-column align-items-center justify-content-center me-3">
        <img src="https://plus.unsplash.com/premium_photo-1679436985567-24325ae4bbf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" alt="" class="bubble rounded rounded-pill elevation-5">
        <h5 class="mt-2 category-name">Drinks</h5>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';

    export default {
    props: { recipe: { type: [], required: true } },
    setup(props) {
        return {
            props,
            setCategory(){
                
            }
        };
    },
    components: { RouterLink }
}
</script>

<style lang="scss" scoped>

.category-name{
    text-decoration: none !important;
    color: black !important;
}

.bubble{
    height: 6rem;
    width: 6rem;
    object-fit: cover;
    border: 1px solid black;
}

</style>