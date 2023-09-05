require('dotenv').config();
const { resolve } = require('path');
const apkPath = resolve('./app/nuclone.apk');
const local = process.env.LOCAL;

function getCapabilities() {
    let caps = {};

    if (local === 'appium') {
        caps = {
            app: apkPath,
            platform: 'Android',
            device: 'emulator'
        };
    } else if (!local || local === 'bs') {
        caps = {
            app: `bs://${process.env.BS_HASH}`,
            user: process.env.BS_USER,
            key: process.env.BS_KEY,
            host: 'hub-cloud.browserstack.com',
            port: 4444,
            platform: 'Android',
            device: process.env.DEVICE, // Galaxy S21
            os_version: '9.0'
        };
    }
    return caps;
}

module.exports = {
    getCapabilities
};