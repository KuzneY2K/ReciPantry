import { AppState } from "../AppState.js"
import { CommunityRecipe } from "../models/CommunityRecipe.js"
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
        AppState.pageNum = 1
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
        AppState.communityRecipes = res.data.map(recipe => new CommunityRecipe(recipe))
    }

    async searchRecipesByCategory(){
        let res = await recipeApi.get(`complexSearch?query=${AppState.selectedCategory}&number=10&offset=${AppState.pageNum}0`)
        AppState.recipes = res.data.results.map(recipe => new Recipe(recipe))
    }

    // next page, previous page function
    async paginate(reqData){
        let res = await recipeApi.get(`complexSearch?query=${reqData || AppState.selectedCategory || 'main course'}&number=10&offset=${AppState.pageNum}0`)
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

    async getCommunityRecipeById(recipeId){
        AppState.activeRecipe = {}
        const res = await api.get(`api/recipes/${recipeId}`)
        AppState.activeRecipe = new CommunityRecipe(res.data)
        logger.log(AppState.activeRecipe)
    }
    async createRecipe(recipeData){
        const res = await api.post('api/recipes', recipeData)
        logger.log('Created Recipe', res.data)
        const newRecipe = new CommunityRecipe(res.data)
        AppState.communityRecipes.push(newRecipe)
        logger.log('new recipe', newRecipe)
        return newRecipe
    }

    async deleteRecipe(recipeId){
        await api.delete(`api/recipes/${recipeId}`)
        // let indexToRemove = AppState.recipes.findIndex(recipe=> recipe.id == recipeId)
        // AppState.recipes.splice(indexToRemove, 1)
        let recipes = AppState.recipes.filter(r => r.id != AppState.activeRecipe.id)
        AppState.recipes = recipes
        AppState.activeRecipe = {}
    }
}

export const recipesService = new RecipesService()