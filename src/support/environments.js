require('dotenv').config();
const { resolve } = require('path');

function getCapabilities() {
    const apkPath = resolve('./app/nuclone.apk');
    const { LOCAL, BS_HASH, BS_USER, BS_KEY, DEVICE } = process.env;
    let caps;

    const capsAppium = {
        app: apkPath,
        platform: 'Android',
        device: 'emulator'
    };

    const capsBrowserStack = {
        app: `bs://${BS_HASH}`,
        user: BS_USER,
        key: BS_KEY,
        host: 'hub-cloud.browserstack.com',
        port: 4444,
        platform: 'Android',
        device: DEVICE,
        os_version: '9.0'
    };

    if (LOCAL === 'appium') {
        caps = capsAppium;
    } else if (!LOCAL || LOCAL === 'bs') {
        caps = capsBrowserStack;
    } else {
        throw new Error('Invalid given argument!');
    }

    return caps;
}

module.exports = {
    getCapabilities
};