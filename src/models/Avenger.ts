import { IAvenger } from "../interfaces/Avenger";
import { Document, Schema, Model, model, Error } from "mongoose";
import { Attributes } from "./../models/Attributes";

const avengerSchema: Schema = new Schema({
    name: { type: String, unique: true, required: true },
    image: { type: String },
    attributesId: {
        ref: "Attributes",
        type: Schema.Types.ObjectId
    }

}, { timestamps: true });

// avengerSchema.pre("remove", (next) => {
//     console.log('hook called');
//     Attributes.deleteOne({ _id: this.attributesId }, (err: Error) => {
//         if(err) { return next("Error removing attributes from middleware hook"); }
//     });
// });
export const Avenger = model<IAvenger>("Avenger", avengerSchema);
