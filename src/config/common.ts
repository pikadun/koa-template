import { Configuration } from 'log4js';

const log: Configuration = {
    appenders: {
        info: {
            type: 'dateFile',
            filename: './log/info/info.log',
            keepFileExt: true
        },
        error: {
            type: 'dateFile',
            filename: './log/error/error.log',
            keepFileExt: true
        },
        request: {
            type: 'dateFile',
            filename: './log/request/request.log',
            keepFileExt: true
        },
        console: {
            type: 'console'
        }
    },
    categories: {
        default: { appenders: ['console'], level: 'info' },
        info: { appenders: ['info', 'console'], level: 'info' },
        error: { appenders: ['error', 'console'], level: 'info' },
        request: { appenders: ['request'], level: 'info' }
    }
};

export default { log };