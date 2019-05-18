import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { debug } from 'console';
import { IAttributesService } from './interfaces/iattributes.service';
import { IAttributes } from './interfaces/attributes.interface';
import { ATTRIBUTES_MODEL_TOKEN } from './../../util/constants';
import { CreateAttributesDto } from './dto/createAttributes.dto';

@Injectable()
export class AttributesService implements IAttributesService {
    constructor(@Inject(ATTRIBUTES_MODEL_TOKEN)
        private readonly attributesModel: Model<IAttributes>) {}
    async findAll(): Promise<IAttributes[]> {
        return await this.attributesModel.find().exec();
    }

    async findOne(options: object): Promise<IAttributes | null> {
        return await this.attributesModel.findOne(options).exec();
    }

    async findById(ID: string): Promise<IAttributes | null> {
        return await this.attributesModel.findById(ID).exec();
    }
    async create(attributes: CreateAttributesDto): Promise<IAttributes> {
        const createdAttributes = new this.attributesModel(attributes);
        return await createdAttributes.save();
    }
    async delete(ID: string): Promise<any> {
        return await this.attributesModel.remove({_id: ID}).exec();
    }
}