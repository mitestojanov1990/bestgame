import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { SERVER_CONFIG } from './app/util/constants';
import { AppModule } from './app.module';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());
  app.enableCors();

  const options = new DocumentBuilder()
    .setTitle('Avengers vs Villains')
    .setDescription('Turn based game')
    .setVersion('1.0')
    .build();
  const avengersDocument = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, avengersDocument);

  await app.listen(SERVER_CONFIG.httpPort);
}
bootstrap();