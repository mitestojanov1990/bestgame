import mongoose from 'mongoose';
import { SERVER_CONFIG, DB_CONNECTION_TOKEN } from './../util/constants';

export const databaseProviders = [
    {
        provide: DB_CONNECTION_TOKEN,
        useFactory: async (): Promise<typeof mongoose> => {
            return await mongoose.connect(SERVER_CONFIG.db, {
                useNewUrlParser: true
            });
        }
    },
];