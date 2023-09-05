const Helper = require('@codeceptjs/helper');

class AppiumHelper extends Helper {
    getScreenSize(){
        const browser = this.helpers['Appium'].browser;
        return browser.capabilities.viewportRect;
    }
}

module.exports = AppiumHelper;