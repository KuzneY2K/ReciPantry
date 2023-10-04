import { Schema } from "mongoose"

export const RecipeSchema = new Schema({
    avgRating: { type: Number, required: false },
    creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true },
    // analyzedInstructions: { type: Array, required: false },
    cheap: { type: Boolean, required: false },
    cookingMinutes: { type: Number, required: false },
    cuisines: { type: Array, required: false },
    dairyFree: { type: Boolean, required: false },
    // This needs to be ENUMS !!!
    diets: { type: Array, required: false },
    dishTypes: { type: Array, required: false },
    extendedIngredients: { type: Object, required: false },
    glutenFree: { type: Boolean, required: false },
    healthScore: { type: Number, required: false },
    dishId: { type: Number, required: false },
    image: { type: String, required: false },
    instructions: { type: String, required: true },
    preparationMinutes: { type: Number, required: false },
    pricePerServing: { type: Number, required: false },
    readyInMinutes: { type: Number, required: false },
    servings: { type: Number, required: false },
    summary: { type: String, required: false },
    sustainable: { type: Boolean, required: false },
    title: { type: String, required: false },
    vegan: { type: Boolean, required: false },
    vegetarian: { type: Boolean, required: false },
    veryHealthy: { type: Boolean, required: false },
    veryPopular: { type: Boolean, required: false },
    weightWatcherPoints: { type: Number, required: false },
}, { timestamps: true, toJSON: { virtuals: true } })

RecipeSchema.virtual('creator', {
    localField: 'creatorId',
    foreignField: 'id',
    ref: 'Account',
    justOne: true
})
RecipeSchema.virtual('ratings', {
    localField: '_id',
    foreignField: 'recipeId',
    ref: 'Review',
    justOne: false
})