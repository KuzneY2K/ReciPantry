import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"

class GroceriesService {
    async getAllGroceries() {
        const groceries = await dbContext.Groceries.find().populate('creatorId', 'name id _id')
        return groceries
    }
    async addGrocery(groceryData) {
        const newGrocery = await dbContext.Groceries.create(groceryData)
        await newGrocery.populate('creatorId', 'name id _id')
        return newGrocery
    }

    async getGroceryList(accountId) {
        const myGroceries = await dbContext.Groceries.find({ accountId }).populate('creatorId', 'name id _id')
        return myGroceries
    }

    async removeGrocery(groceryId, accountId) {
        const removedGrocery = await dbContext.Groceries.findById(groceryId).populate('creatorId')
        if (!removedGrocery) {
            throw new BadRequest('Invalid Grocery')
        }
        if (removedGrocery.accountId != accountId) {
            throw new BadRequest('Unauthorized Request')
        }
        removedGrocery.remove()
        return `Removed ${removedGrocery.id}`
    }

}

export const groceriesService = new GroceriesService()