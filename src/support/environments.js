require('dotenv').config();
const { resolve } = require('path');

function getCapabilities() {
    const apkPath = resolve('./app/nuclone.apk');
    let { CLOUD, PLATFORM } = process.env;
    const { BS_HASH, BS_USER, BS_KEY, DEVICE_NAME } = process.env;

    CLOUD = CLOUD.toLowerCase();
    PLATFORM = PLATFORM.toLowerCase();

    const appiumCapabilities = {
        android: {
            app: apkPath,
            platform: 'Android',
            device: 'emulator'
        },
        ios: {
            app: "appPath",
            platformName: 'iOS',
            deviceName: 'iPhone Simulator',
            automationName: 'XCUITest'
        }
    };

    const browserstackCapabilities = {
        android: {
            app: `bs://${BS_HASH}`,
            user: BS_USER,
            key: BS_KEY,
            host: 'hub-cloud.browserstack.com',
            port: 4444,
            platform: 'Android',
            device: DEVICE_NAME,
            os_version: '9.0'
        },
        ios: {
            app: `bs://${BS_HASH}`,
            user: BS_USER,
            key: BS_KEY,
            host: 'hub-cloud.browserstack.com',
            port: 4444,
            platform: 'iOS',
            device: DEVICE_NAME,
            os_version: '14.0'
        }
    };

    if (CLOUD === undefined)
        return appiumCapabilities[PLATFORM];
    else if (CLOUD === 'false')
        return appiumCapabilities[PLATFORM];
    else if (CLOUD === 'true')
        return browserstackCapabilities[PLATFORM];
    else
        throw new Error(`Invalid CLOUD value: ${CLOUD}. Expected "true" or "false"!`);
}

module.exports = {
    getCapabilities
};