import { IVillain } from './villains.interface';

export interface IVillainService {
    findAll(): Promise<IVillain[]>;
    findById(ID: number): Promise<IVillain | null>;
    findOne(options: object): Promise<IVillain | null>;
}