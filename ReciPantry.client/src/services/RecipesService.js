import { AppState } from "../AppState.js"
import { Recipe } from "../models/Recipe.js"
import { logger } from "../utils/Logger.js"
import { api, recipeApi } from "./AxiosService.js"

class RecipesService{
    async getOneRecipe(){
        let res = await recipeApi.get('random?number=1')
        // logger.log(res.data.recipes)
        AppState.randomRecipe = res.data.recipes.map(recipe => new Recipe(recipe))
        // logger.log(AppState.randomRecipe)
    }

    async searchRecipesByQuery(reqData){
        let res = await recipeApi.get(`complexSearch?query=${reqData}&number=10&offset=${AppState.pageNum}0`)
        
        AppState.recipes = res.data.results.map(recipe => new Recipe(recipe))
        // logger.log(AppState.recipes)
    }

    async paginate(reqData){
        let res = await recipeApi.get(`complexSearch?query=${reqData}&number=10&offset=${AppState.pageNum}0`)
        AppState.recipes = res.data.results.map(recipe => new Recipe(recipe))
    }

    // click on card. uses recipe id to get the recipe instructions - endpoint => {id}/information

    async getRecipeById(recipeId){
        let res = await recipeApi.get(`${recipeId}/information`)
        AppState.activeRecipe = new Recipe(res.data)  
        // logger.log(AppState.activeRecipe)        
        let nlRes = await recipeApi.get(`${recipeId}/nutritionLabel`)
        AppState.nutritionLabel = nlRes.data
    }
}

export const recipesService = new RecipesService()