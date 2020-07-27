import { Context } from 'koa';

class Test {
    async test(ctx: Context) {
        throw Error('test');
        ctx.body = 200;
    }
}

export default new Test();