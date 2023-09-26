import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"
import { logger } from "../utils/Logger.js"

class RecipesService {
    async getRecipes(query) {
        const recipes = await dbContext.Recipes.find(query)
        return recipes
    }

    async createRecipe(body) {
        const recipe = await dbContext.Recipes.create(body)
        return recipe
    }
    async editRecipe(recipeId, updates, userId) {
        const originalRecipe = await dbContext.Recipes.findById(recipeId)
        if (!originalRecipe) throw new BadRequest(`No event at id ${recipeId}`)
        if (originalRecipe.creatorId != userId) throw new Forbidden('This is not your recipe to edit!')
        originalRecipe.analyzedInstructions = updates.analyzedInstructions || originalRecipe.analyzedInstructions
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

    }
}
export const recipesService = new RecipesService()