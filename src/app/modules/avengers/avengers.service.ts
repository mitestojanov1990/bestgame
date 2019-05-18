import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { debug } from 'console';
import { IAvengersService } from './interfaces/iavengers.service';
import { IAvenger } from './interfaces/avengers.interface';
import { AVENGERS_MODEL_TOKEN } from './../../util/constants';
import { CreateAvengerDto } from './dto/createAvenger.dto';
import { AttributesService } from '../attributes/attributes.service';

@Injectable()
export class AvengersService implements IAvengersService {
    constructor(@Inject(AVENGERS_MODEL_TOKEN)
        private readonly avengerModel: Model<IAvenger>,
        private readonly attributesService: AttributesService) {}
    async findAll(): Promise<IAvenger[]> {
        return await this.avengerModel.find().exec();
    }
    async findAllWithAttributes(): Promise<IAvenger[]> {
        return await this.avengerModel.find().populate('attributes').exec();
    }

    async findOne(options: object): Promise<IAvenger | null> {
        return await this.avengerModel.findOne(options).exec();
    }

    async findById(ID: string): Promise<IAvenger | null> {
        return await this.avengerModel.findById(ID).exec();
    }
    async findByIdWithAttributes(ID: string): Promise<IAvenger | null> {
        return await this.avengerModel.findById(ID).populate('attributes').exec();
    }
    async create(avenger: CreateAvengerDto): Promise<IAvenger> {
        const createdAttributes = await this.attributesService.create(avenger.attributes);
        const createdAvenger = new this.avengerModel(avenger);
        createdAvenger.set('attributes', createdAttributes);
        return await createdAvenger.save();
    }
    async deleteAll(): Promise<any> {
        const avengersForDelete = await this.avengerModel.find().exec();
        return await avengersForDelete.map(async (avenger) => {
            await this.attributesService.delete(avenger.attributes.toString());
            return await avenger.remove();
        });
    }
}