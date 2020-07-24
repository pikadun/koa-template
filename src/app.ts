import 'module-alias/register';
import './config';
import App from 'koa';
import route from './route';

function start() {
    const app = new App();
    app.proxy = true;
    // 路由
    app.use(route.middleware());

    app.listen(global.CONFIG.app.port);
    console.log(`PTE start: http://127.0.0.1:${global.CONFIG.app.port}`);
}

start();

