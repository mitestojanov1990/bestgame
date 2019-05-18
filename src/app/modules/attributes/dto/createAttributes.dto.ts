import { ApiModelProperty } from '@nestjs/swagger';

export class CreateAttributesDto {
    @ApiModelProperty()
    readonly health!: number;

    @ApiModelProperty()
    readonly attack!: number;

    @ApiModelProperty()
    readonly defense!: number;
}