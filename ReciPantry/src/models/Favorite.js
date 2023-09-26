import { Schema } from "mongoose";
const ObjectId = Schema.Types.ObjectId

export const FavoriteSchema = new Schema({
    accountId: { type: ObjectId, required: true, ref: 'Account' },
    recipeId: { type: ObjectId, required: true, ref: 'Recipe' }
}, { toJSON: { virtuals: true } })


FavoriteSchema.virtual('profile', {
    localField: 'accountId',
    foreignField: '_id',
    ref: 'Account',
    justOne: true
})

FavoriteSchema.virtual('recipe', {
    localField: 'recipeId',
    foreignField: '_id',
    ref: 'Recipe',
    justOne: true
})