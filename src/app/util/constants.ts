import { Config, IEnvironmentConfig } from './../config/config';
import logger from './logger';
import dotenv from 'dotenv';

logger.debug('Using .env file to supply config environment variables');
dotenv.config({ path: '.env' });

const env = process.env.NODE_ENV || 'development';

export const SERVER_CONFIG: IEnvironmentConfig = Config[env];

export const DB_CONNECTION_TOKEN: string = 'DbConnectionToken';
export const SERVER_CONFIG_TOKEN: string = 'ServerConfigToken';
export const AVENGERS_MODEL_TOKEN: string = 'AvengersModelToken';
export const VILLAINS_MODEL_TOKEN: string = 'VillainsModelToken';
export const ATTRIBUTES_MODEL_TOKEN: string = 'AttributesModelToken';
