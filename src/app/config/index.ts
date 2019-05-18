import { IEnvironmentConfig } from './config';
import { NestFastifyApplication } from '@nestjs/platform-fastify';

module.exports = (config: IEnvironmentConfig, fastify: NestFastifyApplication) => {
  require('./middlewares')(config, fastify);
};