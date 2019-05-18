import { extractKey } from '../util/keys';

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
    db: 'mongodb://localhost:27017/myapp',
    httpPort: 3000,
    wsPort: 3003,
    jwtSecret,
    domain: 'localhost',
    httpProtocol: 'http',
    wsProtocol: 'ws'
  },
  production: {
    rootPath,
    db: 'mongodb://localhost:27017/myapp',
    httpPort: 3000,
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