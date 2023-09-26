import BaseController from "../utils/BaseController.js";
import { recipesService } from "../services/RecipesService.js"
import { Auth0Provider } from "@bcwdev/auth0provider";

export class RecipesController extends BaseController {
    constructor() {
        super('api/recipes')
        this.router
            .get('', this.getRecipes)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createRecipe)
            .put('/:recipeId', this.editRecipe)
    }

    // pretty simple here, get request to our DB
    async getRecipes(req, res, next) {
        try {
            const recipes = await recipesService.getRecipes(req.query)
        } catch (error) {
            next(error)
        }
    }

    async createRecipe(req, res, next) {
        try {
            let recipeBody = req.body
            recipeBody.creatorId = req.userInfo.id
            const recipe = await recipesService.createRecipe(recipeBody)
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
}