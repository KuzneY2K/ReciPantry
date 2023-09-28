import { Auth0Provider } from '@bcwdev/auth0provider'
import { accountService } from '../services/AccountService'
import BaseController from '../utils/BaseController'
import { favoritesService } from '../services/FavoritesService.js'
import { reviewService } from '../services/ReviewService.js'
import { recipesService } from '../services/RecipesService.js'
import { groceriesService } from '../services/GroceriesService.js'

export class AccountController extends BaseController {
  constructor() {
    super('account')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('/groceries', this.getGroceryList)
      .get('', this.getUserAccount)
      .get('/reviews', this.getReviewsByAccount)
      .get('/favorites', this.getFavoritesByAccount)
      .get('/recipes', this.getMyRecipes)
      .put('', this.updateAccount)
  }

  async getUserAccount(req, res, next) {
    try {
      const account = await accountService.getAccount(req.userInfo)
      res.send(account)
    } catch (error) {
      next(error)
    }
  }

  async getFavoritesByAccount(req, res, next) {
    try {
      const fav = await favoritesService.getFavoritesByAccount(req.userInfo.id)
      res.send(fav)
    } catch (error) {
      next(error)
    }
  }

  async getReviewsByAccount(req, res, next) {
    try {
      const accountId = req.userInfo.id
      const reviews = await reviewService.getReviewsByAccount(accountId)
      res.send(reviews)
    } catch (error) {
      next(error)
    }
  }

  async getMyRecipes(req, res, next) {
    try {
      const accountId = req.userInfo.id
      const recipes = await recipesService.getMyRecipes(accountId)
      res.send(recipes)
    } catch (error) {
      next(error)
    }
  }

  async getGroceryList(req, res, next) {
    try {
      let accountId = req.userInfo.id
      const groceryList = await groceriesService.getGroceryList(accountId)
      res.send(groceryList)
    } catch (error) {
      next(error)
    }
  }

  async updateAccount(req, res, next) {
    try {
      let accountId = req.userInfo.id
      let edits = req.body
      let editedAccount = await accountService.updateAccount(accountId, edits)
      res.send(editedAccount)
    } catch (error) {
      next(error)
    }
  }
}
