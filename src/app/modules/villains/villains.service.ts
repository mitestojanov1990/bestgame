import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { IVillainService } from './interfaces/ivillains.service';
import { IVillain } from './interfaces/villains.interface';
import { VILLAINS_MODEL_TOKEN } from './../../util/constants';

@Injectable()
export class VillainsService implements IVillainService {
    constructor(@Inject(VILLAINS_MODEL_TOKEN)
        private readonly villainModel: Model<IVillain>) {}
    async findAll(): Promise<IVillain[]> {
        return await this.villainModel.find().exec();
    }

    async findOne(options: object): Promise<IVillain | null> {
        return await this.villainModel.findOne(options).exec();
    }

    async findById(ID: number): Promise<IVillain | null> {
        return await this.villainModel.findById(ID).exec();
    }
}