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
        // await this.setFilterData()
        let res = await recipeApi.get(`complexSearch?query=${reqData}&diet=${AppState.filterData.vegan}${AppState.filterData.vegetarian}${AppState.filterData.glutenFree}${AppState.filterData.pescetarian}${AppState.filterData.keto}&intolerances=${AppState.filterData.dairy}${AppState.filterData.eggs}${AppState.filterData.grains}${AppState.filterData.peanuts}${AppState.filterData.seafood}${AppState.filterData.shellfish}${AppState.filterData.soy}${AppState.filterData.sulfite}${AppState.filterData.wheat}&number=10&offset=${AppState.pageNum}0`)
        
        AppState.recipes = res.data.results.map(recipe => new Recipe(recipe))
        logger.log(AppState.recipes)
    }

    // get Community Recipes
    async getCommunityRecipes(){
        let res = await api.get(`api/recipes`)
        logger.log(res)
        AppState.communityRecipes = res.data.map(recipe => new CommunityRecipe(recipe))
    }

    // async getRandomCommunityRecipes(){
    //     let rand = Math.floor(Math.random() * 10)
    //     let res = await api.get(`recipes`)
    // }

    async searchRecipesByCategory(){
        AppState.pageNum = 1
        AppState.selectedIngredient = null
        let res = await recipeApi.get(`complexSearch?query=${AppState.selectedCategory}&number=10&offset=${AppState.pageNum}0`)
        AppState.recipes = res.data.results.map(recipe => new Recipe(recipe))
    }

    async searchRecipesByIngredient(){
        AppState.pageNum = 1
        AppState.selectedCategory = null
        let res = await recipeApi.get(`complexSearch?query=${AppState.selectedIngredient}&number=10&offset=${AppState.pageNum}`)
        AppState.recipes = res.data.results.map(recipe => new Recipe(recipe))
    }

    // next page, previous page function
    async paginate(reqData){
        let res = await recipeApi.get(`complexSearch?query=${reqData || AppState.selectedCategory || AppState.selectedIngredient}&number=10&offset=${AppState.pageNum}0`)
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

    setFilterData(filterData){
        AppState.filterData = filterData
        logger.log(AppState.filterData)
    }

    async editRecipe(recipeData, recipeId){
        const res = await api.put(`api/recipes/${recipeId}`, recipeData)
        AppState.activeRecipe = new Recipe(res.data)
    }

    async cloneRecipe(originalRecipe){
        const newRecipe = new CommunityRecipe(originalRecipe)
        newRecipe.creator = AppState.account
        newRecipe.creatorId = AppState.account.id
        newRecipe.ingredients = Object.values(originalRecipe.ingredients)
        newRecipe.instructions = originalRecipe.instructions
        
        logger.log(originalRecipe)
    
        logger.log(newRecipe)
        this.createRecipe(newRecipe)
    }
}

export const recipesService = new RecipesService()