<template>
    <div class="modal fade" id="reviewModal" tabindex="-1" aria-labelledby="reviewModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="reviewModalLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
                <div class="modal-body" id="reviewForm">
                    <form @submit.prevent="createReview" class="form-control">
                        <div class="d-flex justify-content-center">
                        <button type="button" @click="reviewData.rating = 1" class="btn text-warning fs-1">
                            <i v-if="reviewData.rating >= 1" class="mdi mdi-star"></i>
                            <i v-else class="mdi mdi-star-outline"></i>
                        </button>
                        <button type="button" @click="reviewData.rating = 2" class="btn text-warning fs-1">
                            <i v-if="reviewData.rating >= 2" class="mdi mdi-star"></i>
                            <i v-else class="mdi mdi-star-outline"></i>
                        </button>
                        <button type="button" @click="reviewData.rating = 3" class="btn text-warning fs-1">
                            <i v-if="reviewData.rating >= 3" class="mdi mdi-star"></i>
                            <i v-else class="mdi mdi-star-outline"></i>
                        </button>
                        <button type="button" @click="reviewData.rating = 4" class="btn text-warning fs-1">
                            <i v-if="reviewData.rating >= 4" class="mdi mdi-star"></i>
                            <i v-else class="mdi mdi-star-outline"></i>
                        </button>
                        <button type="button" @click="reviewData.rating = 5" class="btn text-warning fs-1">
                            <i v-if="reviewData.rating >= 5" class="mdi mdi-star"></i>
                            <i v-else class="mdi mdi-star-outline"></i>
                        </button>
                    </div>
                    <input v-model="reviewData.comment" class="form-control" placeholder="Your Comment" type="text" required
                    maxlength="200" minlength="4">
                    <!-- <input type="number" min="1" max="5" class="form-control" required v-model="reviewData.rating"> -->
                    <button class="btn btn-success mt-2">Post Review</button>
                </form>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>