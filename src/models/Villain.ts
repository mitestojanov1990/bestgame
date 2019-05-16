import { IVillain } from "../interfaces/Villain";
import { Document, Schema, Model, model, Error } from "mongoose";

const villainSchema: Schema = new Schema({
    name: { type: String, unique: true, required: true },
    image: { type: String },
    attributesId: {
        ref: "Attributes",
        type: Schema.Types.ObjectId
    }
}, { timestamps: true });
export const Villain = model<IVillain>("Villain", villainSchema);
