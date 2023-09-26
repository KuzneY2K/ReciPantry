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
}