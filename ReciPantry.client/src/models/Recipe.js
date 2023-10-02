export class Recipe {
    constructor(data){
        this.analyzedInstructions = data.analyzedInstructions
        this.cheap = data.cheap
        this.cookingMinutes = data.cookingMinutes
        this.cuisines = data.cuisines
        this.dairyFree = data.dairyFree
        this.diets = data.diets
        this.dishTypes = data.dishTypes
        this.ingredients = data.extendedIngredients
        this.ingredientsCount = data.extendedIngredients?.length
        this.glutenFree = data.glutenFree
        this.healthScore = data.healthScore
        this.id = data.id
        this.image = data.image
        this.instructions = data.instructions
        this.preparationMinutes = data.preparationMinutes
        this.pricePerServing = data.pricePerServing
        this.readyInMinutes = data.readyInMinutes
        this.servings = data.servings
        this.summary = data.summary
        this.sustainable = data.sustainable
        this.title = data.title
        this.vegan = data.vegan
        this.vegetarian = data.vegetarian
        this.veryHealthy = data.veryHealthy
        this.veryPopular = data.veryPopular
        this.weightWatcherPoints = data.weightWatcherSmartPoints
        this.creator = data.creator
        this.creatorId=data.creatorId
    }
}