import { Module } from '@nestjs/common';
import { AvengersModule } from './app/modules/avengers/avengers.module';
import { DatabaseModule } from './app/database/database.module';
import { VillainsModule } from './app/modules/villains/villains.module';
import { AttributesModule } from './app/modules/attributes/attributes.module';

@Module({
  imports: [
    DatabaseModule,
    AvengersModule,
    VillainsModule,
    AttributesModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}