<template>
  <div class="card-container p-0 m-0 rounded rounded-5 my-2 border border-1 border-dark elevation-5 animate__animated
    animate__fadeInRightBig position-relative">
    <h1 class="p-2">
      {{ review.profile.name }}
    </h1>
  </div>
</template>

<script>
import { Review } from '../models/Review';

export default {
  props: { review: { type: [Review, Object], required: true } },
  setup() {
    return {};
  },
};
</script>


<style lang="scss" scoped>
.card-container {
  width: 90%;
  height: 7rem;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>