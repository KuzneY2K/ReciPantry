import { AppState } from '../AppState'
import { Account } from '../models/Account.js'
import { CommunityRecipe } from '../models/CommunityRecipe.js'
import { Favorite } from '../models/Favorite.js'
import { Recipe } from '../models/Recipe'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
import { api } from './AxiosService'

class AccountService {
  async getAccount() {
    try {
      const res = await api.get('/account')
      AppState.account = new Account(res.data)
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }

  async editAccount(updatedData){
    const res = await api.put('/account', updatedData)
    AppState.account = new Account(res.data)
  }

  async getMyRecipes(){
    try {
      AppState.myRecipes = []
      const res = await api.get('account/recipes')
      AppState.myRecipes = res.data.map(recipe => new Recipe(recipe))
    } catch (error) {
      Pop.error(error)
    }
  }
  async getMyFavorites(){
    try {
      const res = await api.get('account/favorites')
      AppState.myFavorites = res.data.map(favorite => new Favorite(favorite))
    } catch (error) {
      Pop.error(error)
    }
  }
}

export const accountService = new AccountService()
