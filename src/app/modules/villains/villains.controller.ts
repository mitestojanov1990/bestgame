import { Controller, Get, Param } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { VillainsService } from './villains.service';

@ApiUseTags('villains')
@Controller('villains')
export class VillainsController {
    constructor(private readonly villainsService: VillainsService) { }

    @Get()
    async getVillains() {
        const villains = await this.villainsService.findAll();
        return villains;
    }
    @Get(':id')
    async getVillain(@Param('id') id: number) {
        const villain = await this.villainsService.findById(id);
        return villain;
    }
}