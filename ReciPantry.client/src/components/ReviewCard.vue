<template>
  <div class="card-container d-flex p-0 m-0 rounded rounded-5 my-2 border border-1 border-dark elevation-5">
    <section class="col-4 p-2">
      <img class="profile-picture" :src="review.profile.picture" alt="">
      <h1>{{ review.profile.name }}</h1>
    </section>
    <section class="col-4">
      <div v-if="review.rating == 5"><i class="mdi text-warning mdi-star"></i><i class="mdi text-warning mdi-star"></i><i
          class="mdi text-warning mdi-star"></i><i class="mdi text-warning mdi-star"></i><i
          class="mdi text-warning mdi-star"></i></div>
      <div v-if="review.rating == 4"><i class="mdi text-warning mdi-star"></i><i class="mdi text-warning mdi-star"></i><i
          class="mdi text-warning mdi-star"></i><i class="mdi text-warning mdi-star"></i></div>
      <div v-if="review.rating == 3"><i class="mdi text-warning mdi-star"></i><i class="mdi text-warning mdi-star"></i><i
          class="mdi text-warning mdi-star"></i>
      </div>
      <div v-if="review.rating == 2"><i class="mdi text-warning mdi-star"></i><i class="mdi text-warning mdi-star"></i>
      </div>
      <div v-if="review.rating == 1"><i class="mdi text-warning mdi-star"></i></div>
      <p>{{ review.comment }}</p>
    </section>
    <section class="col-4">
      <button v-if="account.id == review.profile.id" class="btn btn-danger" @click="deleteReview">Delete <i
          class="mdi mdi-delete-forever"></i></button>
    </section>
  </div>
</template>

<script>
import { computed } from 'vue';
import { Review } from '../models/Review';
import { AppState } from '../AppState';
import { reviewService } from '../services/ReviewService';

export default {
  props: { review: { type: [Review, Object], required: true } },
  setup() {
    return {
      account: computed(() => AppState.account),

      async deleteReview() {
        const review = AppState.activeReviews.find(review => review.accountId == AppState.account.id)
        const reviewId = review.id
        await reviewService.deleteReview(reviewId)
      }

    };
  },
};
</script>


<style lang="scss" scoped>
.card-container {
  width: 90%;
  height: 8rem;
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
</style>