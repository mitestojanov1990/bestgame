import { Module } from '@nestjs/common';
import { VillainsController } from './villains.controller';
import { VillainsService } from './villains.service';
import { villainsProviders } from './villains.provider';
import { DatabaseModule } from './../../database/database.module';
@Module({
    imports: [DatabaseModule],
    controllers: [VillainsController],
    providers: [
        ...villainsProviders,
        VillainsService],
    exports: [
        ...villainsProviders
    ],
})
export class VillainsModule {
}