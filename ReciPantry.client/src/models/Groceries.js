export class Groceries{
    constructor(data){
        this.id = data.id
        this.name = data.groceryName
        this.creatorId = data.creatorId
        this.measureAmount = data.measureAmount
        this.measureUnit = data.measureUnit
    }
}