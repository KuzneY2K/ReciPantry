import { dbContext } from "../db/DbContext.js"

class RecipesService {
    async postRecipe(dataBody) {
        let newRecipe = await dbContext.Recipes.create(dataBody)
        return newRecipe
    }

}

export const recipesService = new RecipesService()