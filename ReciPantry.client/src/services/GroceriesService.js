import { AppState } from "../AppState.js"
import { Groceries } from "../models/Groceries.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class GroceriesService{
    async getGroceryList(){
        const res = await api.get('account/groceries')
        AppState.groceryList = res.data.map(grocery => new Groceries(grocery))
    }

    async addGrocery(data){
        const res = await api.post('api/groceries', data)
        AppState.groceryList.push = new Groceries(res.data)
        this.getGroceryList()
    }

    async removeFromList(groceryId){
        await api.delete(`api/groceries/${groceryId}`)
        let filteredGroceries = AppState.groceryList.filter(g => g.id != groceryId)
        AppState.groceryList = filteredGroceries
        this.getGroceryList()
    }
}

export const groceriesService = new GroceriesService()