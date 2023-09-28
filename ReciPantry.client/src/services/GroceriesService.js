import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class GroceriesService{
    async getGroceryList(){
        const res = await api.get('api/groceries')
        logger.log(res)
    }
}

export const groceriesService = new GroceriesService()