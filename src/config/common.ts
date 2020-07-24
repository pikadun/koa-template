const level = 'info';
const config = {
    log: {
        appenders: {
            info: {
                type: 'dateFile',
                filename: './logs/info/info',
                pattern: 'yyyy-MM-dd.log',
                alwaysIncludePattern: true
            },
            error: {
                type: 'dateFile',
                filename: './logs/error/error',
                pattern: 'yyyy-MM-dd.log',
                alwaysIncludePattern: true
            },
            http: {
                type: 'dateFile',
                filename: './logs/http/http',
                pattern: 'yyyy-MM-dd.log',
                alwaysIncludePattern: true
            },
            console: {
                type: 'console'
            }
        },
        categories: {
            default: { appenders: ['console'], level },
            info: { appenders: ['info', 'console'], level },
            error: { appenders: ['error', 'console'], level },
            http: { appenders: ['http'], level }
        },
        replaceConsole: true
    }
};

export default config;