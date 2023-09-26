import { AppState } from "../AppState"
import { Review } from "../models/Review"
import { api } from "./AxiosService"


class ReviewService {
    async createReview(reviewData) {
        const res = await api.post('api/reviews', reviewData)
        AppState.activeReviews.unshift(new Review(res.data))
    }

    async getReviewsByRecipe() {
        const res = await api.get()
        AppState.activeReviews = res.data.map(review => new Review(review))
    }

    async getReviewsByAccount() {
        const res = await api.get()
        AppState.myReviews = res.data.map(review => new Review(review))
    }

    async deleteReview() {

    }
}

export const reviewService = new ReviewService