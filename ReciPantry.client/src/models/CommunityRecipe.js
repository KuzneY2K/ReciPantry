export class CommunityRecipe {
    constructor(data){
        this.title = data.title
        this.ingredients = data.extendedIngredients
        this.image = data.image
        this.instructions = data.analyzedInstructions
        this.summary = data.summary
        this.servings = data.servings
        this.glutenFree = data.glutenFree
        this.preparationMinutes = data.preparationMinutes
        this.readyInMinutes = data.readyInMinutes
        this.vegan = data.vegan
        this.vegetarian = data.vegetarian
    }
}