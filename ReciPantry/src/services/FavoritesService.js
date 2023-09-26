import { dbContext } from "../db/DbContext.js"

class FavoritesService {
    async createFavorite(favBody) {
        const fav = await dbContext.Favorites.create(favBody)
        await fav.populate('recipe')
        await fav.populate('profile', '-email')
        return fav
    }

}



export const favoritesService = new FavoritesService()