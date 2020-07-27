import 'koa-body';
import { Context, Next } from 'koa';
import { ErrorCode, ErrorCodeLabel } from 'common/enum';

class ErrorHanlde {
    /**
     * 全局异常捕获
     */
    middleware() {
        return async (ctx: Context, next: Next) => {
            await next().catch(err => {
                ctx.status = 200;
                this.handleUnknownError(ctx, err);
            });
        };
    }

    /**
     * 处理未知异常
     */
    private handleUnknownError(ctx: Context, err: Error): void {
        ctx.body = this.getResponseBody(ErrorCode.unknown);
        global.LOGGER.error(err);
    }

    /**
     * 根据错误码生成错误信息
     */
    private getResponseBody(code: ErrorCode) {
        return {
            code: code,
            msg: ErrorCodeLabel.get(code)
        };
    }
}

export default new ErrorHanlde();