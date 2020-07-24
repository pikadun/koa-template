import Router from 'koa-router';
import test from 'controller/test';

const router = new Router();

router.get('/test', test.test);

export default router;