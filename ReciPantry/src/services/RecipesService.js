import { dbContext } from "../db/DbContext.js"
import { ReviewSchema } from "../models/Review.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"
import { logger } from "../utils/Logger.js"

class RecipesService {
    async searchRecipes(query) {
        let regex = new RegExp(query, 'i')
        const recipes = await dbContext.Recipes.find({ title: regex })
        logger.log(query)
        return recipes
    }
    // gets the recipes from the db
    async getRecipes() {
        const recipes = await dbContext.Recipes.find()
        return recipes
    }
    //gets an individual recipe from the db
    async getRecipeById(recipeId) {
        const recipe = await dbContext.Recipes.findById(recipeId)
        const agg = await dbContext.Recipes.aggregate([{
            $lookup: {
                from: "Review",
                localField: "_id",
                foreignField: "recipeId",
                as: "testSomething"
            }
        }])
        logger.log('agg', agg)
        if (!recipe) throw new BadRequest(`No recipe at id ${recipeId}`)
        return recipe
    }
    // creates a recipe in the db
    async createRecipe(body) {
        const recipe = (await dbContext.Recipes.create(body)).populate('creator')
        return recipe
    }
    //edits a recipe in the db, finds by ID, error handling, then updates/ saves
    async editRecipe(recipeId, updates, userId) {
        const originalRecipe = await dbContext.Recipes.findById(recipeId)
        if (!originalRecipe) throw new BadRequest(`No event at id ${recipeId}`)
        if (originalRecipe.creatorId != userId) throw new Forbidden('This is not your recipe to edit!')
        originalRecipe.instructions = updates.instructions || originalRecipe.instructions
        originalRecipe.cheap = updates.cheap || originalRecipe.cheap
        originalRecipe.cookingMinutes = updates.cookingMinutes || originalRecipe.cookingMinutes
        originalRecipe.cuisines = updates.cuisines || originalRecipe.cuisines
        originalRecipe.dairyFree = updates.dairyFree || originalRecipe.dairyFree
        originalRecipe.diets = updates.diets || originalRecipe.diets
        originalRecipe.dishTypes = updates.dishTypes || originalRecipe.dishTypes
        originalRecipe.extendedIngredients = updates.extendedIngredients || originalRecipe.extendedIngredients
        originalRecipe.glutenFree = updates.glutenFree || originalRecipe.glutenFree
        originalRecipe.healthScore = updates.healthScore || originalRecipe.healthScore
        originalRecipe.image = updates.image || originalRecipe.image
        originalRecipe.instructions = updates.instructions || originalRecipe.instructions
        originalRecipe.preparationMinutes = updates.preparationMinutes || originalRecipe.preparationMinutes
        originalRecipe.pricePerServing = updates.pricePerServing || originalRecipe.pricePerServing
        originalRecipe.readyInMinutes = updates.readyInMinutes || originalRecipe.readyInMinutes
        originalRecipe.servings = updates.servings || originalRecipe.servings
        originalRecipe.summary = updates.summary || originalRecipe.summary
        originalRecipe.sustainable = updates.sustainable || originalRecipe.sustainable
        originalRecipe.title = updates.title || originalRecipe.title
        originalRecipe.vegan = updates.vegan || originalRecipe.vegan
        originalRecipe.vegetarian = updates.vegetarian || originalRecipe.vegetarian
        originalRecipe.veryHealthy = updates.veryHealthy || originalRecipe.veryHealthy
        originalRecipe.veryPopular = updates.veryPopular || originalRecipe.veryPopular
        originalRecipe.weightWatcherPoints = updates.weightWatcherPoints || originalRecipe.weightWatcherPoints

        await originalRecipe.save()
        return originalRecipe
    }

    // finds a recipe by its Id then allows the user to delete the recipe if it is one that they have created
    async deleteRecipe(recipeId, userId) {
        const recipeToRemove = await this.getRecipeById(recipeId)
        if (recipeToRemove.creatorId != userId) throw new Forbidden('This is not your recipe to delete!')
        await recipeToRemove.remove()
        return `Remove the recipe at id ${recipeId}`
    }
    async getMyRecipes(accountId) {
        const myRecipes = await dbContext.Recipes.find({ creatorId: accountId })
        return myRecipes
    }
}
export const recipesService = new RecipesService()