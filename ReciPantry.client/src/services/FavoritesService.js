import { AppState } from "../AppState"
import { Favorite } from "../models/Favorite"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"



class FavoritesService{
    async createFavorite(favData){
        const res = await api.post('api/favorites', favData)
        logger.log('created fav', res.data)
        AppState.myFavorites.push(new Favorite(res.data))
    }
}



export const favoritesService = new FavoritesService()