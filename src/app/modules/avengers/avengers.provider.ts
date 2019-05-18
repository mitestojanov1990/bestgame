import { Connection } from 'mongoose';
import { AvengerSchema } from './schemas/avengers.schema';
import { AVENGERS_MODEL_TOKEN, DB_CONNECTION_TOKEN } from './../../util/constants';

export const avengersProviders = [
  {
    provide: AVENGERS_MODEL_TOKEN,
    useFactory: (connection: Connection) => connection.model('Avenger', AvengerSchema),
    inject: [DB_CONNECTION_TOKEN],
  },
];