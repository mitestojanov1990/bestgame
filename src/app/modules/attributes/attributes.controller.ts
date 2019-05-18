import { Controller, Get, Param } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { AttributesService } from './attributes.service';

@ApiUseTags('attributes')
@Controller('attributes')
export class AttributesController {
    constructor(private readonly attributesService: AttributesService) { }

    @Get()
    async getAllAttributes() {
        const attributes = await this.attributesService.findAll();
        return attributes;
    }
    @Get(':id')
    async getAttributes(@Param('id') id: string) {
        const attributes = await this.attributesService.findById(id);
        return attributes;
    }
}