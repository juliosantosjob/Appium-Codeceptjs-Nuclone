require('dotenv').config();
const { resolve } = require('path');

function getCapabilities() {
    const apkPath = resolve('./app/nuclone.apk');
    const { LOCAL, PLATFORM, BS_HASH, BS_USER, BS_KEY, DEVICE } = process.env;

    if (LOCAL === 'appium') {
        if (PLATFORM === 'android') {
            return {
                app: apkPath,
                platform: 'Android',
                device: 'emulator'
            };
        } else if (PLATFORM === 'ios') {
            return {
                app: "appPath",
                platformName: 'iOS',
                deviceName: 'iPhone Simulator',
                automationName: 'XCUITest'
            };
        } else {
            throw new Error(`The platform [${PLATFORM}] is incorrect. It should be "android" or "ios"`);
        }
    } else if (LOCAL === 'bs') {
        if (PLATFORM === 'android') {
            return {
                app: `bs://${BS_HASH}`,
                user: BS_USER,
                key: BS_KEY,
                host: 'hub-cloud.browserstack.com',
                port: 4444,
                platform: 'Android',
                device: DEVICE,
                os_version: '9.0'
            };
        } else if (PLATFORM === 'ios') {
            return {
                app: `bs://${BS_HASH}`,
                user: BS_USER,
                key: BS_KEY,
                host: 'hub-cloud.browserstack.com',
                port: 4444,
                platform: 'iOS',
                device: DEVICE,
                os_version: '14.0'
            };
        } else {
            throw new Error(`The platform [${PLATFORM}] is incorrect. It should be "android" or "ios"`);
        }
    } else {
        throw new Error(`The argument [${LOCAL}] is incorrect. It should be "appium" or "bs"`);
    }
}

module.exports = {
    getCapabilities
};