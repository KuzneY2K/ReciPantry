import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { api, recipeApi } from "./AxiosService.js"

class RecipesService{
    async getRecipe(){
        let res = await recipeApi.get('9473/information')
        logger.log(res.data)
    }

    // click on card. uses recipe id to get the recipe instructions - endpoint => {id}/information
}

export const recipesService = new RecipesService()