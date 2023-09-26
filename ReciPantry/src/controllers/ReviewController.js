import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { reviewService } from "../services/ReviewService.js";


export class ReviewController extends BaseController {
    constructor() {
        super('api/reviews')
        this.router
            .get('/:recipeId', this.getReviewsByRecipe)
            .use(Auth0Provider.getAuthorizedUserInfo)
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
}