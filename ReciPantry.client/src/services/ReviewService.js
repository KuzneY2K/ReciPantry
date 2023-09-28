import { AppState } from "../AppState"
import { Review } from "../models/Review"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"


class ReviewService {
    async createReview(reviewData) {
        const res = await api.post('api/reviews', reviewData)
        AppState.activeReviews.unshift(new Review(res.data))
    }

    async getReviewsByRecipe(recipeId) {
        const res = await api.get(`api/recipes/${recipeId}/reviews`)
        logger.log('fetched reviews ✅', res.data)
        AppState.activeReviews = res.data.map(review => new Review(review))
    }

    async getReviewsByAccount() {
        const res = await api.get('account/reviews')
        AppState.myReviews = res.data.map(review => new Review(review))
    }

    async deleteReview(reviewId) {
        await api.delete(`api/reviews/${reviewId}`)
    }
}

export const reviewService = new ReviewService