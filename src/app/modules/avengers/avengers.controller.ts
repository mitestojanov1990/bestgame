import { Controller, Get, Param, HttpStatus,
    Post, Body, Response, Type, Delete } from '@nestjs/common';
import { ApiUseTags, ApiResponse } from '@nestjs/swagger';
import { AvengersService } from './avengers.service';
import { CreateAvengerDto } from './dto/createAvenger.dto';
import { StaticData } from './../../../staticData';

@ApiUseTags('avengers')
@Controller('avengers')
export class AvengersController {
    constructor(private readonly avengersService: AvengersService) { }

    @Get()
    async getAvengers() {
        const avengers = await this.avengersService.findAll();
        return avengers;
    }
    @Get('/attributes')
    async getAvengersWithAttributes() {
        const avengrs = await this.avengersService.findAllWithAttributes();
        return avengrs;
    }
    @Get(':id')
    async getAvenger(@Param('id') id: string) {
        const avenger = await this.avengersService.findById(id);
        return avenger;
    }
    @Get(':id/attributes')
    async getAvengerWithAttributes(@Param('id') id: string) {
        const avenger = await this.avengersService.findByIdWithAttributes(id);
        return avenger;
    }
    @Post()
    @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    public async createAvenger(@Response() res: any, @Body() createAvengerDto: CreateAvengerDto) {
        const avenger = await this.avengersService.create(createAvengerDto);
        return res.send(avenger);

        // const avenger = await this.avengersService.create(createAvengerDto).catch((err) => {
        //     if (err) {
        //         return res.status(HttpStatus.BAD_REQUEST);
        //     }
        // });
        // try {
        //     return res.send(avenger);
        // } catch (exc) {
        //     const a = exc;
        //     return res.status(HttpStatus.BAD_REQUEST);
        // }
    }

    @Post('/migration')
    public async bulkCreateAvengers(@Response() res: any) {
        await Promise.all(StaticData.Avengers.map(async element => {
            await this.avengersService.create(new CreateAvengerDto(element));
        })).then(() => {
            return res.HttpStatus(HttpStatus.OK);
        });
    }
    @Delete('/migration')
    public async bulkDeleteAvengers() {
        await this.avengersService.deleteAll();
    }
}