import { AppState } from "../AppState.js"
import { Recipe } from "../models/Recipe.js"
import { logger } from "../utils/Logger.js"
import { api, recipeApi } from "./AxiosService.js"

class RecipesService{

    // for home page, just gets a random recipe
    async getOneRecipe(){
        let res = await recipeApi.get('random?number=1')
        // logger.log(res.data.recipes)
        AppState.randomRecipe = res.data.recipes.map(recipe => new Recipe(recipe))
        // logger.log(AppState.randomRecipe)
    }

    async getRandomRecipes(){
        AppState.pageNum = 0
        let res = await recipeApi.get(`random?number=10&offset=${AppState.pageNum}0`)
        AppState.recipes = res.data.recipes.map(recipe => new Recipe(recipe))
    }

    // search recipes using search parameters
    async searchRecipesByQuery(reqData){
        AppState.pageNum = 0
        let res = await recipeApi.get(`complexSearch?query=${reqData}&number=10&offset=${AppState.pageNum}0`)
        
        AppState.recipes = res.data.results.map(recipe => new Recipe(recipe))
        logger.log(AppState.recipes)
    }

    // get Community Recipes
    async getCommunityRecipes(){
        let res = await api.get(`api/recipes`)
        logger.log(res)
    }

    async searchRecipesByCategory(){
        let res = await recipeApi.get(`complexSearch?query=${AppState.selectedCategory}&number=10&offset=${AppState.pageNum}0`)
        AppState.recipes = res.data.results.map(recipe => new Recipe(recipe))
    }

    // next page, previous page function
    async paginate(reqData){
        let res = await recipeApi.get(`complexSearch?query=${reqData || AppState.selectedCategory}&number=10&offset=${AppState.pageNum}0`)
        AppState.recipes = res.data.results.map(recipe => new Recipe(recipe))
    }

    // after clicking on recipe card, the recipe specific to the recipe card's id is gotten and rendered
    async getRecipeById(recipeId){
        let res = await recipeApi.get(`${recipeId}/information`)
        AppState.activeRecipe = new Recipe(res.data)  
        logger.log(AppState.activeRecipe)        
        let nlRes = await recipeApi.get(`${recipeId}/nutritionLabel`)
        AppState.nutritionLabel = nlRes.data
    }
}

export const recipesService = new RecipesService()