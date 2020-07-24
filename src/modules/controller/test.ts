import { Context } from 'koa';

class Test {
    async test(ctx: Context) {
        ctx.body = 200;
    }
}

export default new Test();