

export class Review {
    constructor(data) {
        this.id = data.id
        this.rating = data.rating
        this.comment = data.comment
        this.accountId = data.accountId
        this.recipeId = data.recipeId
        this.profile = data.profile
        this.recipe = data.recipe
    }
}