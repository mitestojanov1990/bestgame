import { Connection } from 'mongoose';
import { AttributesSchema } from './schemas/attributes.schema';
import { ATTRIBUTES_MODEL_TOKEN, DB_CONNECTION_TOKEN } from './../../util/constants';

export const attributesProviders = [
  {
    provide: ATTRIBUTES_MODEL_TOKEN,
    useFactory: (connection: Connection) => connection.model('Attributes', AttributesSchema),
    inject: [DB_CONNECTION_TOKEN],
  },
];