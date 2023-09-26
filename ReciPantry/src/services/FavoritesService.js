import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"

class FavoritesService {
    async createFavorite(favBody) {
        const fav = await dbContext.Favorites.create(favBody)
        await fav.populate('recipe')
        await fav.populate('profile', '-email')
        return fav
    }


    async removeFavorite(favoriteId, userId) {
        const fav = await dbContext.Favorites.findById(favoriteId).populate('recipe profile')
        if (!fav) throw new BadRequest(`this ain't here at ${favoriteId}`)
        if (userId != fav.accountId) throw new Forbidden(`None of that`)
        await fav.remove()
        return `No longer a favorite`
    }
}



export const favoritesService = new FavoritesService()