import { json, urlencoded } from 'body-parser';
import cookieParser from 'cookie-parser';
import { NestFastifyApplication } from '@nestjs/platform-fastify';
import { IEnvironmentConfig } from './config';
import bodyParser from 'body-parser';
import methodOverride = require('method-override');
import compression = require('compression');
import errorHandler from 'errorhandler';

module.exports = (config: IEnvironmentConfig, app: NestFastifyApplication) => {
  app.use(cookieParser())
  .use(errorHandler())
  .use(compression())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(methodOverride());
};