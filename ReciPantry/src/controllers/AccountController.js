import { Auth0Provider } from '@bcwdev/auth0provider'
import { accountService } from '../services/AccountService'
import BaseController from '../utils/BaseController'
import { favoritesService } from '../services/FavoritesService.js'
import { reviewService } from '../services/ReviewService.js'

export class AccountController extends BaseController {
  constructor() {
    super('account')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getUserAccount)
      .get('/reviews', this.getReviewsByAccount)
      .get('/favorites', this.getFavoritesByAccount)
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
}
