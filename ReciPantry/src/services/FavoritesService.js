import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"

class FavoritesService {

    // STUB getting all the favorties for a specific recipe
    async getFavoriteByRecipe(recipeId) {
        const favs = await dbContext.Favorites.find({ recipeId }).populate('profile')
        return favs
    }

    // STUB getting all favorited recipes by account
    async getFavoritesByAccount(userId) {
        const fav = await dbContext.Favorites.find({ accountId: userId })
        return fav
    }

    // STUB creating a favorite 
    async createFavorite(favBody) {
        const fav = await dbContext.Favorites.create(favBody)
        await fav.populate('recipe')
        await fav.populate('profile', '-email')
        return fav
    }

    // STUB removing a favorite
    async removeFavorite(favoriteId, userId) {
        const fav = await dbContext.Favorites.findById(favoriteId).populate('recipe profile')
        if (!fav) throw new BadRequest(`this ain't here at ${favoriteId}`)
        if (userId != fav.accountId) throw new Forbidden(`None of that`)
        await fav.remove()
        return `No longer a favorite`
    }
}



export const favoritesService = new FavoritesService()