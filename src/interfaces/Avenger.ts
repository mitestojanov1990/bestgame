import { Document } from "mongoose";
import { ObjectID } from "mongodb";
export interface IAvenger extends Document {
    name: String;
    image: String;
    attributesId: ObjectID;
}
