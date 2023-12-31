import { reactive } from 'vue'
import { Review } from './models/Review.js'
import { Favorite } from './models/Favorite.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},
  /** @type {import('./models/Recipe.js').Recipe} */
  recipes: [],
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
  selectedIngredient: null,
  groceryList: [],
  /**@type {Recipe[]} */
  myRecipes: [],
  /**@type {Favorite[]}*/
  myFavorites: [],
  /**@type {Favorite[]} */
  favorites: [],
  filterData: [],
  needsHomeTour: window.localStorage.getItem('needsHomeTour'),
  needsRecipesTour: window.localStorage.getItem('needsRecipesTour'),
  needsDetailsTour: window.localStorage.getItem('needsDetailsTour'),
  needsCreateTour: window.localStorage.getItem('needsCreateTour')
})
