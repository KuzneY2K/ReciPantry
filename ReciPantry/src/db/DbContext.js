import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { RecipeSchema } from '../models/Recipe.js';
import { FavoriteSchema } from '../models/Favorite.js';
import { ReviewSchema } from '../models/Review.js';
import { GroceriesSchema } from '../models/Groceries.js';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Recipes = mongoose.model('Recipe', RecipeSchema);
  Reviews = mongoose.model('Review', ReviewSchema);
  Favorites = mongoose.model('Favorite', FavoriteSchema)
  Groceries = mongoose.model('Grocery', GroceriesSchema)
}

export const dbContext = new DbContext()
