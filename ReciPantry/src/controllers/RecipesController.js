import BaseController from "../utils/BaseController.js";
import { recipesService } from "../services/RecipesService.js"

export class RecipesController extends BaseController {
    constructor() {
        super('api/recipes')
        this.router
            .get('')
    }
}