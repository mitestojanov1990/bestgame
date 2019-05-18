import { Document } from 'mongoose';

export interface IAvenger extends Document {
    readonly name: string;
    readonly image: string;
    readonly attributes: any;
}