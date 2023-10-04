<template>
  <section
    class="row p-0 m-0 bg-white position-relative mb-3 mt-3 rounded rounded-3 border border-2 border-black elevation-5">
    <div class="col-3 p-0 m-0">
      <div class="card-container p-0 m-0 d-flex flex-column align-items-center justify-content-center">
        <div class="card-info p-0 m-0 mt-3">
          <img class="profile-picture p-0 m-0" :src="review.profile.picture" alt="">
          <h1 class="p-0 m-0 mt-1">{{ review.profile.name }}</h1>
        </div>
        <div class="rating-container p-0 m-0 mb-3">
          <div v-if="review.rating == 5" class="p-0 m-0"><i class="mdi text-warning mdi-star"></i><i
              class="mdi text-warning mdi-star"></i><i class="mdi text-warning mdi-star"></i><i
              class="mdi text-warning mdi-star"></i><i class="mdi text-warning mdi-star"></i></div>
          <div v-if="review.rating == 4" class="p-0 m-0"><i class="mdi text-warning mdi-star"></i><i
              class="mdi text-warning mdi-star"></i><i class="mdi text-warning mdi-star"></i><i
              class="mdi text-warning mdi-star"></i></div>
          <div v-if="review.rating == 3" class="p-0 m-0"><i class="mdi text-warning mdi-star"></i><i
              class="mdi text-warning mdi-star"></i><i class="mdi text-warning mdi-star"></i>
          </div>
          <div v-if="review.rating == 2" class="p-0 m-0"><i class="mdi text-warning mdi-star"></i><i
              class="mdi text-warning mdi-star"></i>
          </div>
          <div v-if="review.rating == 1" class="p-0 m-0"><i class="mdi text-warning mdi-star"></i></div>
        </div>
      </div>
    </div>
    <div class="col-9 p-0 m-0 d-flex flex-column justify-content-start align-items-start mt-3">
      <p class="fs-4">{{ review.comment }}</p>
    </div>
    <div class="delete-btn-container p-0 m-0">
      <button v-if="account.id == review.profile.id"
        class="btn btn-sm btn-danger delete-btn px-2 m-0 rounded rounded-pill position-absolute" @click="deleteReview"><i
          class="mdi mdi-delete-forever"></i>
      </button>
    </div>
  </section>
</template>

<script>
import { computed } from 'vue';
import { Review } from '../models/Review';
import { AppState } from '../AppState';
import { reviewService } from '../services/ReviewService';
import Pop from '../utils/Pop';
import { logger } from '../utils/Logger';

export default {
  props: { review: { type: [Review, Object], required: true } },
  setup() {
    return {
      account: computed(() => AppState.account),

      async deleteReview() {
        try {
          if (await Pop.confirm('Delete Review?')) {
            const review = AppState.activeReviews.find(review => review.accountId == AppState.account.id)
            const reviewId = review.id
            logger.log(review)
            await reviewService.deleteReview(reviewId)
            Pop.toast('Review Deleted!', 'success')
          }
        } catch (error) {
          Pop.error(error)
        }
      }

    };
  },
};
</script>


<style lang="scss" scoped>
.card-container {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.profile-picture {
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  height: 50px;
  width: 50px;
}

.delete-btn {
  right: -0.75rem;
  top: -0.75rem;
}
</style>