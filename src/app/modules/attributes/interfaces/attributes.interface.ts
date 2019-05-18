import { Document } from 'mongoose';

export interface IAttributes extends Document {
    readonly health: Number;
    readonly attack: Number;
    readonly defense: Number;
}