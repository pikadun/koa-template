import { Logger, configure, getLogger } from 'log4js';

class BaseLogger {
    private infoLogger: Logger;
    private errorLogger: Logger;
    private requestLogger: Logger;
    constructor() {
        configure(global.CONFIG.log);
        this.infoLogger = getLogger('info');
        this.errorLogger = getLogger('error');
        this.requestLogger = getLogger('request');
    }

    info(msg: string | Error) {
        this.infoLogger.info(msg);
    }

    error(msg: string | Error) {
        this.errorLogger.error(msg);
    }

    request(msg: string | Error) {
        this.requestLogger.info(msg);
    }
}

const logger = new BaseLogger();
global.LOGGER = logger;
export default logger;