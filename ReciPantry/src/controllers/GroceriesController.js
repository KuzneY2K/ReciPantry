import { Auth0Provider } from "@bcwdev/auth0provider";
import { groceriesService } from "../services/GroceriesService.js";
import BaseController from "../utils/BaseController.js";

export class GroceriesController extends BaseController {
    constructor() {
        super('api/groceries')
        this.router
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.addGrocery)
    }

    async addGrocery(req, res, next) {
        try {
            const groceryData = req.body
            groceryData.accountId = req.userInfo.id
            const newGrocery = await groceriesService.addGrocery(groceryData)
            res.send(newGrocery)
        } catch (error) {
            next(error)
        }
    }
}