import 'module-alias/register'; // hook require
import './config';
import 'common/logger';

import App from 'koa';
import body from 'koa-body';
import route from './route';    
import middleware from './middleware';

function start() {
    const app = new App();
    app.proxy = true;

    //  body parser
    app.use(body());
    // 请求日志
    app.use(middleware.request());
    // 路由
    app.use(route.middleware());

    app.listen(global.CONFIG.app.port);
    global.LOGGER.info(`PTE start: http://127.0.0.1:${global.CONFIG.app.port}`);
}

start();

