import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { CreateAttributesDto } from '../../attributes/dto/createAttributes.dto';

export class CreateAvengerDto {
    @ApiModelProperty()
    readonly name!: string;
    @ApiModelProperty()
    readonly image!: string;
    @ApiModelProperty()
    readonly attributes!: CreateAttributesDto;
    constructor({ name, image, attributes }: CreateAvengerDto) {
        this.name = name;
        this.image = image;
        this.attributes = attributes;
    }
}