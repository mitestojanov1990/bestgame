import { Document } from 'mongoose';

export interface IVillain extends Document {
    readonly name: string;
    readonly image: string;
    readonly attributes: any;
}