import { IAttributes } from "../interfaces/Attributes";
import { Document, Schema, Model, model, Error } from "mongoose";

const attributesSchema: Schema = new Schema({
    health: { type: Number, required: true },
    attack: { type: Number, required: true },
    defense: { type: Number, required: true }
}, { timestamps: true });
export const Attributes = model<IAttributes>("Attributes", attributesSchema);
