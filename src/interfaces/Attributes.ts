import { Document } from "mongoose";
export interface IAttributes extends Document {
    health: Number;
    attack: Number;
    defense: Number;
}
