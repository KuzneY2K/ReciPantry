import { Schema } from "mongoose";


export const ReviewSchema = new Schema({
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, minLength: 1, maxLength: 144 },
    accountId: { type: Schema.Types.ObjectId, ref: 'Account', required: true },
    recipeId: { type: String, required: true }
}, { timestamps: true, toJSON: { virtuals: true } })

ReviewSchema.virtual('profile', {
    localField: 'accountId',
    foreignField: 'id',
    ref: 'Account',
    justOne: true
})

// ReviewSchema.virtual('recipe', {
//     localField: 'recipeId',
//     foreignField: 'id',
//     ref: 'Recipe',
//     justOne: true
// })