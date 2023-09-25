import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { api, recipeApi } from "./AxiosService.js"

class RecipesService{
    async getRecipe(){
        let res = await recipeApi.get('recipe?query=all')
        logger.log(res)
    }
}

export const recipesService = new RecipesService()