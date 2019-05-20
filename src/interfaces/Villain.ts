

import { Document } from "mongoose";
import { ObjectID } from "mongodb";
export interface IVillain extends Document {
    name: String;
    image: String;
    attributesId: ObjectID;
}
