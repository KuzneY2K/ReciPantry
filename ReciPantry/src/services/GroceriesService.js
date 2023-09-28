import { dbContext } from "../db/DbContext.js"

class GroceriesService {
    async addGrocery(groceryData) {
        const newGrocery = await dbContext.Groceries.create(groceryData)
        await newGrocery.populate('creatorId', 'name id _id')
        return newGrocery
    }

    async getGroceryList(accountId) {
        const myGroceries = await dbContext.Groceries.find({ accountId }).populate('creatorId', 'name id _id')
        return myGroceries
    }

}

export const groceriesService = new GroceriesService()