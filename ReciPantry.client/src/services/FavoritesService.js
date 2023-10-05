import { AppState } from "../AppState"
import { Favorite } from "../models/Favorite"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
import { api } from "./AxiosService"



class FavoritesService{
    // async createFavorite(favData){
    //     const res = await api.post('api/favorites', favData)
    //     logger.log('created fav', res.data)
    //     AppState.favorites.push(new Favorite(res.data))
    // }

    // async deleteFavorite(favoriteId){
    //     await api.delete(`api/favorites/${favoriteId}`)
    // }

    async addOrRemoveFavorite(recipeId){
        let isFavorite = AppState.favorites.find(favorite => favorite.accountId == AppState.account.id)
        if (isFavorite){
            await api.delete(`api/favorites/${isFavorite.id}`)
            AppState.favorites.splice(isFavorite, 1)
            Pop.success('Favorited no longer!')
        } else {
            const res = await api.post('api/favorites', recipeId)
            AppState.favorites.push(new Favorite(res.data))
            Pop.success('New favorite added!')
            
        }
    }

    async getFavoritesByRecipe(recipeId){
        const res = await api.get(`api/recipes/${recipeId}/favorites`)
        AppState.favorites = res.data.map(fav=> new Favorite(fav))
    }
}



export const favoritesService = new FavoritesService()