import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { reviewService } from "../services/ReviewService.js";


export class ReviewController extends BaseController {
    constructor() {
        super('api/reviews')
        this.router
            .get('/:recipeId', this.getReviewsByRecipe)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createReview)
            .delete('/:reviewId', this.deleteReview)
    }
    async createReview(req, res, next) {
        try {
            const reviewData = req.body
            reviewData.accountId = req.userInfo.id
            const review = await reviewService.createReview(reviewData)
            res.send(review)
        } catch (error) {
            next(error)
        }
    }

    async getReviewsByRecipe(req, res, next) {
        try {
            const recipeId = req.params.recipeId
            const reviews = await reviewService.getReviewsByRecipe(recipeId)
            res.send(reviews)
        } catch (error) {
            next(error)
        }
    }

    async deleteReview(req, res, next) {
        try {
            const reviewId = req.params.reviewId
            const userId = req.userInfo.id
            const message = await reviewService.deleteReview(reviewId, userId)
            res.send(message)
        } catch (error) {
            next(error)
        }
    }
}