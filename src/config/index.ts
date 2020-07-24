const env = process.env.NODE_ENV === 'production' ? 'production' : 'development';
import dev from './development';
import prod from './production';
const CONFIG = env === 'production' ? prod : dev;
global.CONFIG = CONFIG;
export default CONFIG;