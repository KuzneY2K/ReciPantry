import { AppState } from "../AppState"
import { Review } from "../models/Review"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"


class ReviewService {
    async createReview(reviewData) {
        const res = await api.post('api/reviews', reviewData)
        const newReview = new Review(res.data)
        AppState.activeReviews.unshift(newReview)
        
    }

    async getReviewsByRecipe(recipeId) {
        const res = await api.get(`api/recipes/${recipeId}/reviews`)
        AppState.activeReviews = res.data.map(review => new Review(review))
    }

    async getReviewsByAccount() {
        const res = await api.get('account/reviews')
        AppState.myReviews = res.data.map(review => new Review(review))
    }

    async deleteReview(reviewId) {
        await api.delete(`api/reviews/${reviewId}`)
        let indexToRemove = AppState.activeReviews.findIndex(review => review.id == reviewId)
        AppState.activeReviews.splice(indexToRemove, 1)
    }
}

export const reviewService = new ReviewService