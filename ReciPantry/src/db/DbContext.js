import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { RecipeSchema } from '../models/Recipe.js';
import { FavoriteSchema } from '../models/Favorite.js';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Recipes = mongoose.model('Recipe', RecipeSchema)
  Favorites = mongoose.model('Favorite', FavoriteSchema)
}

export const dbContext = new DbContext()
