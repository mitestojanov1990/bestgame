import { Mongoose, Schema, Document, HookNextFunction } from 'mongoose';

export const AvengerSchema = new Schema({
    name: { type: String, required: true },
    image: String,
    attributes: { type: Schema.Types.ObjectId, ref: 'Attributes' }
});