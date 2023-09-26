import { reactive } from 'vue'
import { Review } from './models/Review.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},
  /** @type {import('./models/Recipe.js').Recipe} */
  recipes: {},
  /**@type {Review[]} */
  activeReviews: [],
})
