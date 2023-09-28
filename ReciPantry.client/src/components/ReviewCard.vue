<template>
  {{ review }}
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


<style></style>