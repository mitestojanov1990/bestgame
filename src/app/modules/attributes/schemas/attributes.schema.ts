import { Schema } from 'mongoose';

export const AttributesSchema = new Schema({
    health: { type: Number, required: true },
    attack: { type: Number, required: true },
    defense: { type: Number, required: true }
});