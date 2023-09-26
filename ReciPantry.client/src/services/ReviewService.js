import { api } from "./AxiosService"


class ReviewService {
    async createReview(reviewData) {
        const res = await api.post('api/reviews/')
    }

    async getReviewsByRecipe() {

    }

    async getReviewsByAccount() {

    }

    async deleteReview() {

    }
}

export const reviewService = new ReviewService