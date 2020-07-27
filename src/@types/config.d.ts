/* eslint-disable @typescript-eslint/no-unused-vars */
import config from 'src/config';
import logger from 'src/common/logger';

declare global {
    namespace NodeJS {
        interface Global {
            CONFIG: typeof config
            LOGGER: typeof logger
        }
    }
}