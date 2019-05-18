import { Module } from '@nestjs/common';
import { AvengersController } from './avengers.controller';
import { AvengersService } from './avengers.service';
import { DatabaseModule } from './../../database/database.module';
import { avengersProviders } from './avengers.provider';
import { AttributesService } from '../attributes/attributes.service';
import { attributesProviders } from '../attributes/attributes.provider';
@Module({
    imports: [DatabaseModule],
    controllers: [AvengersController],
    providers: [
        ...avengersProviders,
        ...attributesProviders,
        AttributesService,
        AvengersService
    ],
    exports: [
        ...avengersProviders
    ]
})
export class AvengersModule {
}