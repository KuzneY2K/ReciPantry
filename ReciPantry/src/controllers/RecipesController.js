import BaseController from "../utils/BaseController.js";
import { recipesService } from "../services/RecipesService.js"
import { Auth0Provider } from "@bcwdev/auth0provider";
import { favoritesService } from "../services/FavoritesService.js";
import { reviewService } from "../services/ReviewService.js";
import { logger } from "../utils/Logger.js";

export class RecipesController extends BaseController {
    constructor() {
        super('api/recipes')
        this.router
            .get('', this.getRecipes)
            .get('/:recipeId', this.getRecipeById)
            .get('/:recipeId/favorites', this.getFavoritesByRecipe)
            .get('/:recipeId/reviews', this.getReviewsByRecipe)
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
    // getting an individual recipe (utilized for the recipe details page)
    async getRecipeById(req, res, next) {
        try {
            const recipe = await recipesService.getRecipeById(req.params.recipeId)
            res.send(recipe)
        } catch (error) {
            next(error)
        }
    }

    async getReviewsByRecipe(req, res, next) {
        try {
            const recipeId = req.params.recipeId
            const reviews = await reviewService.getReviewsByRecipe(recipeId)
            res.send(reviews)
        } catch (error) {
            next(error)
        }
    }
    // allows the user to upload / create a recipe
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
    // allows the user to edit a recipe they have created
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
    // allows a user to delete a recipe that they have created
    async deleteRecipe(req, res, next) {
        try {
            const message = await recipesService.deleteRecipe(req.params.recipeId, req.userInfo.id)
            res.send(message)
        } catch (error) {
            next(error)
        }
    }
}