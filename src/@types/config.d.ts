// eslint-disable-next-line @typescript-eslint/no-unused-vars
import config from 'src/config';

declare global {
    namespace NodeJS {
        interface Global {
            CONFIG: typeof config
        }
    }
}