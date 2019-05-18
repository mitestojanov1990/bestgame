import winston from 'winston';
import { Logger } from 'winston';

const logger = new (Logger)({
    transports: [
// tslint:disable-next-line: max-line-length
        new (winston.transports.Console)({ level: process.env.NODE_ENV === 'production' ? 'error' : 'debug' }),
        new (winston.transports.File)({ filename: 'debug.log', level: 'debug'})
    ]
});

if (process.env.NODE_ENV !== 'production') {
    logger.debug('Logging initialized at debug level');
}

export default logger;

