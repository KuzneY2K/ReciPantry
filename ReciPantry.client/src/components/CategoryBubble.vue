<template>
    <!-- MAIN COURSE -->
    <div class="main-course-container d-flex flex-column align-items-center justify-content-center me-3">
        <img src="https://plus.unsplash.com/premium_photo-1664391747379-b7d777d02281?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1959&q=80" alt="" class="bubble rounded rounded-pill elevation-5">
        <h5 class="mt-2">Main Courses</h5>
    </div>
    <!-- SIDES -->
    <div class="side-dish-container d-flex flex-column align-items-center justify-content-center me-3">
        <img src="https://images.unsplash.com/photo-1633436375153-d7045cb93e38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80" alt="" class="bubble rounded rounded-pill elevation-5">
        <h5 class="mt-2">Side Dishes</h5>
    </div>
    <!-- SIDES -->
    <div class="dessert-container d-flex flex-column align-items-center justify-content-center me-3">
        <img src="https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80" alt="" class="bubble rounded rounded-pill elevation-5">
        <h5 class="mt-2">Desserts</h5>
    </div>
    <!-- APPETIZER -->
    <div class="appetizer-container d-flex flex-column align-items-center justify-content-center me-3">
        <img src="https://images.unsplash.com/photo-1607098665874-fd193397547b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" class="bubble rounded rounded-pill elevation-5">
        <h5 class="mt-2">Appetizers</h5>
    </div>
    <!-- SALAD -->
    <div class="salad-container d-flex flex-column align-items-center justify-content-center me-3">
        <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" class="bubble rounded rounded-pill elevation-5">
        <h5 class="mt-2">Salads</h5>
    </div>
    <!-- BREAD -->
    <div class="bread-container d-flex flex-column align-items-center justify-content-center me-3">
        <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" alt="" class="bubble rounded rounded-pill elevation-5">
        <h5 class="mt-2">Bread</h5>
    </div>
    <!-- BREAKFAST -->
    <div class="breakfast-container d-flex flex-column align-items-center justify-content-center me-3">
        <img src="https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80" alt="" class="bubble rounded rounded-pill elevation-5">
        <h5 class="mt-2">Breakfast</h5>
    </div>
</template>

<script>
    export default {
        props: { recipe: { type: [], required: true } }, 
        setup(props){
            return{
                props
            }
        }
    }
</script>

<style lang="scss" scoped>

.bubble{
    height: 6rem;
    width: 6rem;
    object-fit: cover;
}

</style>