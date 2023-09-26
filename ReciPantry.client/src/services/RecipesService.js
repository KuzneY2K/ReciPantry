import { AppState } from "../AppState.js"
import { Recipe } from "../models/Recipe.js"
import { logger } from "../utils/Logger.js"
import { api, recipeApi } from "./AxiosService.js"

class RecipesService{
    async getOneRecipe(){
        let res = await recipeApi.get('random?number=1')
        // logger.log(res.data.recipes)
        AppState.randomRecipe = res.data.recipes.map(recipe => new Recipe(recipe))
        logger.log(AppState.randomRecipe)
    }

    // click on card. uses recipe id to get the recipe instructions - endpoint => {id}/information
}

export const recipesService = new RecipesService()