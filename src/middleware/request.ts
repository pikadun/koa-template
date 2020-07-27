import 'koa-body';
import { Context, Next } from 'koa';

export default () => {
    return async (ctx: Context, next: Next): Promise<void> => {
        const start = Date.now();
        await next();
        const logInfo = {
            request: {
                method: ctx.request.method,
                url: ctx.request.url,
                query: ctx.request.query,
                body: ctx.request.body
            },
            response: {
                status: ctx.response.status,
                body: ctx.response.body,
                time: Date.now() - start + 'ms'
            }
        };
        global.LOGGER.request(JSON.stringify(logInfo));
    };
};