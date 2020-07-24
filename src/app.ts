import App from 'koa';
import config from './config';

function start() {
    const app = new App();
    app.proxy = true;
    app.listen(config.app.port);
    
}

start();

