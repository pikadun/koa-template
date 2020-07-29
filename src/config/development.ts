import common from './common';

const config = Object.assign(common, {
    app: {
        port: 11600
    }
});

config.wechat.touser = 'WangGang';

export default config;