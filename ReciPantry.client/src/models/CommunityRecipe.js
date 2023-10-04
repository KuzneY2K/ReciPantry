export class CommunityRecipe {
    constructor(data){
        this.avgRating = data.avgRating
        this.id = data.id
        this.creator = data.creator
        this.creatorId = data.creatorId
        this.title = data.title
        this.ingredients = data.extendedIngredients
        this.image = data.image
        this.instructions = data.instructions
        this.summary = data.summary
        this.servings = data.servings
        this.glutenFree = data.glutenFree
        this.preparationMinutes = data.preparationMinutes
        this.readyInMinutes = data.readyInMinutes
        this.vegan = data.vegan
        this.vegetarian = data.vegetarian
    }
}