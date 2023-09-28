import { AppState } from "../AppState.js"
import { Grocery } from "../models/Grocery.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class GroceriesService{
    async getGroceryList(){
        const res = await api.get('account/groceries')
        AppState.groceryList = res.data.map(grocery => new Grocery(grocery))
        logger.log(AppState.groceryList)
    }

    async addGrocery(data){
        const res = await api.post('api/groceries', data)
        AppState.groceryList.push = new Grocery(res.data)
        // this.getGroceryList()
    }
}

export const groceriesService = new GroceriesService()