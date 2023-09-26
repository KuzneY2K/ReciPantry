import { dbContext } from "../db/DbContext.js"
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
}

export const recipesService = new RecipesService()