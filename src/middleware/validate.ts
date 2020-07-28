import { Context, Next } from 'koa';
import path from 'path';
import fs from 'fs';
import Ajv, { ErrorObject } from 'ajv';

class Validator {
    private jsonBasePath = path.resolve(__dirname, '..', '..', 'schema', 'param');
    private jsonSchemaMap = new Map<string, Schema>();

    middleware(position: 'body' | 'query') {
        return async (ctx: Context, next: Next): Promise<void> => {
            const path = ctx.request.path;
            const params = ctx.request[position];
            const schema = this.getSchema(path);

            if (schema !== undefined) {
                const ajv = new Ajv();
                const validate = ajv.compile(schema);
                const valid = validate(params);

                if (valid === false) {
                    const err = (validate.errors as ErrorObject[]).map(e => e.message) as string[];
                    throw new global.ERROR.ValidateError(err);
                }
            }
            await next();
        };
    }

    private getSchema(path: string): Schema | undefined {
        let schema = this.jsonSchemaMap.get(path);
        if (schema === undefined) {
            const basePath = path.replace(/\/api\/v[0-9]+/, this.jsonBasePath) + '.json';
            if (fs.existsSync(basePath)) {
                schema = JSON.parse(fs.readFileSync(basePath).toString());
            }
        }
        return schema;
    }
}

export default new Validator();