import { reactive } from 'vue'
import { Review } from './models/Review.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},
  /** @type {import('./models/Recipe.js').Recipe} */
  recipes: {},
  /** @type {import('./models/Recipe.js').Recipe[]} */
  communityRecipes: [],
  /** @type {import('./models/Recipe.js').Recipe} */
  randomRecipe: {},
  /** @type {import('./models/Recipe.js').Recipe} */
  activeRecipe: {},
  nutritionLabel: null,
  tasteWidget: null,
  /**@type {Review[]} */
  activeReviews: [],
  /**@type {Review[]} */
  myReviews: [],
  pageNum: 0,
  savedQuery: null,
  selectedCategory: null,
  groceryList: [],
  /**@type {Recipe[]} */
  myRecipes: []
})
