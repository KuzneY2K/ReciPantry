import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  {
    path: '/about',
    name: 'About',
    component: loadPage('AboutPage')
  },
  {
    path: '/recipes',
    name: 'Recipes',
    component: loadPage('RecipesPage')
  },
  {
    path: '/recipes/:recipeId',
    name: 'Recipe Details',
    component: loadPage('RecipeDetailsPage')
  },
  {
    path: '/community/recipes/:recipeId',
    name: 'Community Recipe Details',
    component: loadPage('CommunityRecipeDetailsPage')
  },
  {
    path: '/account',
    name: 'Account',
    component: loadPage('AccountPage'),
    beforeEnter: authGuard
  },
  {
    path: '/community',
    name: 'Community',
    component: loadPage('CommunityPage'),
  }
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
