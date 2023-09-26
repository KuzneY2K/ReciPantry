import BaseController from "../utils/BaseController.js";
import { recipesService } from "../services/RecipesService.js"

export class RecipesController extends BaseController {
    constructor() {
        super('api/recipes')
        this.router
            .get('', this.postRecipe)
    }

    async postRecipe(req, res, next) {
        try {
            let dataBody = req.body
            const newRecipe = await recipesService.postRecipe(dataBody)
            res.send(newRecipe)
        } catch (error) {
            next(error)
        }
    }
}