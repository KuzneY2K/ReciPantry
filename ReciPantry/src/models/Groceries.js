import { ObjectId } from "mongodb";
import { Schema } from "mongoose";

export const GroceriesSchema = new Schema({
    accountId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' },
    groceryName: { type: String, required: true },
    groceryId: { type: Number, required: true }
}, { toJSON: { virtuals: true } })

GroceriesSchema.virtual('creatorId', {
    localField: 'accountId',
    foreignField: '_id',
    ref: 'Account',
    justOne: true
})
