import { extractKey } from '../util/keys';
import dotenv from 'dotenv';
import fs from 'fs';

if (fs.existsSync('.env')) {
    dotenv.config({ path: '.env' });
}

export const ENVIRONMENT = process.env.NODE_ENV;
const prod = ENVIRONMENT === 'production'; // Anything else is treated as 'dev'

export const MONGODB_URI = prod ? process.env.MONGODB_URI : process.env.MONGODB_URI;
if (!MONGODB_URI) {
  throw Error('Please check your .env file!');
}

interface IEnvironmentConfig {
  rootPath: string;
  db: string;
  httpPort: number;
  wsPort: number;
  jwtSecret: string;
  domain: string;
  httpProtocol: string;
  wsProtocol: string;
}

interface IConfig {
  [key: string]: IEnvironmentConfig;
  development: IEnvironmentConfig;
  production: IEnvironmentConfig;
}

const rootPath = process.cwd();
const jwtSecret = extractKey(`${rootPath}/keys/game.private.key`);

const Config: IConfig = {
  development: {
    rootPath,
    db: MONGODB_URI,
    httpPort: 3001,
    wsPort: 3003,
    jwtSecret,
    domain: 'localhost',
    httpProtocol: 'http',
    wsProtocol: 'ws'
  },
  production: {
    rootPath,
    db: MONGODB_URI,
    httpPort: 3001,
    wsPort: 3003,
    jwtSecret,
    domain: 'localhost',
    httpProtocol: 'http',
    wsProtocol: 'ws'
  }
};

export {
  IEnvironmentConfig,
  IConfig,
  Config
};