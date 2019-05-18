import { IAttributes } from './attributes.interface';
import { CreateAttributesDto } from '../dto/createAttributes.dto';

export interface IAttributesService {
    findAll(): Promise<IAttributes[]>;
    findById(ID: string): Promise<IAttributes | null>;
    findOne(options: object): Promise<IAttributes | null>;
    create(attributes: CreateAttributesDto): Promise<IAttributes>;
    delete(ID: string): Promise<IAttributes | null>;
}