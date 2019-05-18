import { Mongoose, Schema, Document } from 'mongoose';
import { AttributesSchema } from '../../attributes/schemas/attributes.schema';

export const VillainSchema = new Schema({
    name: { type: String, required: true },
    image: String,
    attributes: { type: Schema.Types.ObjectId, ref: 'Attributes' }
});