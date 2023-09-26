import { Schema } from "mongoose";


export class ReviewSchema = new Schema({
    rating: { type: Number, required: true, min: 1, max: 5, },
    comment: {},
    accountId: {},
    recipeId: {}
}, { timestamps: true, toJSON: { virtuals: true } })