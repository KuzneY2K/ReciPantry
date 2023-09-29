import { AppState } from "../AppState"
import { Favorite } from "../models/Favorite"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"



class FavoritesService{
    async createFavorite(favData){
        const res = await api.post('api/favorites', favData)
        logger.log('created fav', res.data)
        AppState.favorites.push(new Favorite(res.data))
    }

    async deleteFavorite(favoriteId){
        await api.delete(`api/favorites/${favoriteId}`)
    }

    async getFavoritesByRecipe(recipeId){
        const res = await api.get(`api/recipes/${recipeId}/favorites`)
        logger.log('fetched favs', res.data)
        AppState.favorites = res.data.map(fav=> new Favorite(fav))
    }
}



export const favoritesService = new FavoritesService()