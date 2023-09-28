import { Auth0Provider } from "@bcwdev/auth0provider";
import { groceriesService } from "../services/GroceriesService.js";
import BaseController from "../utils/BaseController.js";

export class GroceriesController extends BaseController {
    constructor() {
        super('api/groceries')
        this.router
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.addGrocery)
            .delete('/:groceryId')
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

    async removeGrocery(req, res, next) {
        try {
            const groceryId = req.params.groceryId
            const removedGrocery = await groceriesService.removeGrocery(groceryId)
            res.send(removedGrocery)
        } catch (error) {
            next(error)
        }
    }
}