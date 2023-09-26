import BaseController from "../utils/BaseController.js";
import { recipesService } from "../services/RecipesService.js"
import { Auth0Provider } from "@bcwdev/auth0provider";
import { favoritesService } from "../services/FavoritesService.js";

export class RecipesController extends BaseController {
    constructor() {
        super('api/recipes')
        this.router
            .get('', this.getRecipes)
            .get('/:recipeId', this.getRecipeById)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createRecipe)
            .put('/:recipeId', this.editRecipe)
            .delete('/:recipeId', this.deleteRecipe)
    }

    // pretty simple here, get request to our DB
    async getRecipes(req, res, next) {
        try {
            const recipes = await recipesService.getRecipes(req.query)
            res.send(recipes)
        } catch (error) {
            next(error)
        }
    }

    async getRecipeById(req, res, next) {
        try {
            const recipe = await recipesService.getRecipeById(req.params.recipeId)
            res.send(recipe)
        } catch (error) {
            next(error)
        }
    }

    async createRecipe(req, res, next) {
        try {
            let recipeBody = req.body
            recipeBody.creatorId = req.userInfo.id
            const recipe = await recipesService.createRecipe(recipeBody)
            res.send(recipe)
        } catch (error) {
            next(error)
        }
    }

    async editRecipe(req, res, next) {
        try {
            const updates = req.body
            const recipeId = req.params.recipeId
            const userId = req.userInfo.id
            const editedRecipe = await recipesService.editRecipe(recipeId, updates, userId)
            res.send(editedRecipe)
        } catch (error) {
            next(error)
        }
    }

    async getFavoritesByRecipe(req, res, next) {
        try {
            const favs = await favoritesService.getFavoriteByRecipe(req.params.recipeId)
            res.send(favs)
        } catch (error) {
            next(error)
        }
    }

    async deleteRecipe(req, res, next) {
        try {
            const message = await recipesService.deleteRecipe(req.params.recipeId, req.userInfo.id)
            res.send(message)

        } catch (error) {
            next(error)
        }
    }
}