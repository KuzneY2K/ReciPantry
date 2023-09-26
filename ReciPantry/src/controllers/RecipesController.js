import BaseController from "../utils/BaseController.js";
import { recipesService } from "../services/RecipesService.js"

export class RecipesController extends BaseController {
    constructor() {
        super('api/recipes')
        this.router
            .get('', this.getRecipes)
    }

    // pretty simple here, get request to our DB
    async getRecipes(req, res, next) {
        try {
            const recipes = await recipesService.getRecipes(req.query)
        } catch (error) {
            next(error)
        }
    }
}