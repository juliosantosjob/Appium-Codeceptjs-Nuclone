require('dotenv').config();
const { resolve } = require('path');
const pathApk = resolve('./app/nuclone.apk');

module.exports = {
    getCapabilities() {
        if (process.env.LOCAL == 'appium') {
            caps = {
                app: pathApk,
                platform: 'Android',
                device: 'emulator'
            }
        } else if ((process.env.LOCAL == 'cloud') || (process.env.LOCAL === '') || (process.env.LOCAL === undefined)) {
            caps = {
                app: `bs://${process.env.BS_HASH}`,
                user: process.env.BS_USER,
                key: process.env.BS_KEY,
                host: 'hub-cloud.browserstack.com',
                port: 4444,
                platform: 'Android',
                device: 'Google Pixel 3',
                os_version: '9.0'
            } 
        }
        return caps;
    }
}
