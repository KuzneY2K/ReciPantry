import { Auth0Provider } from "@bcwdev/auth0provider";
import { groceriesService } from "../services/GroceriesService.js";
import BaseController from "../utils/BaseController.js";

export class GroceriesController extends BaseController {
    constructor() {
        super('api/groceries')
        this.router
            .use(Auth0Provider.getAuthorizedUserInfo)
            .get('', this.getGroceryList)
            .post('', this.addGrocery)
    }

    async getGroceryList(req, res, next) {
        try {
            let accountId = req.userInfo.id
            const groceryList = await groceriesService.getGroceryList(accountId)
            res.send(groceryList)
        } catch (error) {
            next(error)
        }
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