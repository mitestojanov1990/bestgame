import { IAvenger } from './avengers.interface';
import { CreateAvengerDto } from '../dto/createAvenger.dto';

export interface IAvengersService {
    findAll(): Promise<IAvenger[]>;
    findAllWithAttributes(): Promise<IAvenger[]>;
    findById(ID: string): Promise<IAvenger | null>;
    findByIdWithAttributes(ID: String): Promise<IAvenger | null>;
    findOne(options: object): Promise<IAvenger | null>;
    create(avenger: CreateAvengerDto): Promise<IAvenger>;
    deleteAll(): Promise<any>;
}