import { Module } from '@nestjs/common';
import { AttributesController } from './attributes.controller';
import { AttributesService } from './attributes.service';
import { DatabaseModule } from './../../database/database.module';
import { attributesProviders } from './attributes.provider';
@Module({
    imports: [DatabaseModule],
    controllers: [AttributesController],
    providers: [
        ...attributesProviders,
        AttributesService
    ],
    exports: [
        ...attributesProviders,
        AttributesService
    ]
})
export class AttributesModule {
}