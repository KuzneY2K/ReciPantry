import { Schema } from "mongoose";

export const GroceriesSchema = new Schema({
    accountId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' },
    groceryName: { type: String, required: true },
    measureAmount: { type: Number, required: false },
    measureUnit: { type: String, required: false }
}, { toJSON: { virtuals: true } })

GroceriesSchema.virtual('creatorId', {
    localField: 'accountId',
    foreignField: '_id',
    ref: 'Account',
    justOne: true
})
