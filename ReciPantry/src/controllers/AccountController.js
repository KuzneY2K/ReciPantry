import { Auth0Provider } from '@bcwdev/auth0provider'
import { accountService } from '../services/AccountService'
import BaseController from '../utils/BaseController'
import { reviewService } from '../services/ReviewService.js'

export class AccountController extends BaseController {
  constructor() {
    super('account')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getUserAccount)
      .get('/reviews', this.getReviewsByAccount)
  }

  async getUserAccount(req, res, next) {
    try {
      const account = await accountService.getAccount(req.userInfo)
      res.send(account)
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
