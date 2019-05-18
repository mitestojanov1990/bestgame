import { Connection } from 'mongoose';
import { VillainSchema } from './schemas/villains.schema';
import { VILLAINS_MODEL_TOKEN, DB_CONNECTION_TOKEN } from './../../util/constants';

export const villainsProviders = [
  {
    provide: VILLAINS_MODEL_TOKEN,
    useFactory: (connection: Connection) => connection.model('Villain', VillainSchema),
    inject: [DB_CONNECTION_TOKEN],
  },
];