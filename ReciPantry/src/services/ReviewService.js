import { dbContext } from "../db/DbContext.js"
import { Forbidden } from "../utils/Errors.js"


class ReviewService {
    async createReview(reviewData) {
        const review = (await dbContext.Reviews.create(reviewData)).populate('profile', '-email')
        return review
    }

    async getReviewsByRecipe(recipeId) {
        const reviews = await dbContext.Reviews.find({ $or: [{ recipeId: recipeId }, { spoonId: recipeId }] }).populate('profile', '-email')
        return reviews
    }

    async getReviewsByAccount(accountId) {
        const reviews = await dbContext.Reviews.find({ accountId }).populate('profile', '-email')
        return reviews
    }

    async deleteReview(reviewId, userId) {
        const review = await dbContext.Reviews.findById(reviewId)
        if (review.accountId != userId) { throw new Forbidden }
        review.remove()
        return 'Review Deleted'
    }
}

export const reviewService = new ReviewService