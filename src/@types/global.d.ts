/* eslint-disable @typescript-eslint/no-unused-vars */
import config from 'src/config';
import logger from 'common/logger';
import * as error from 'common/error';

declare global {
    namespace NodeJS {
        interface Global {
            CONFIG: typeof config
            LOGGER: typeof logger
            ERROR: typeof error
        }
    }
}