module.exports = function () {
    return actor({

        waitAndTap: function (locator, timeout = 5) {
            this.waitForElement(locator, timeout);
            this.tap(locator);
        },

        assert: async function (locator, text) {
            let assertion = await this.grabTextFrom(locator);
            this.assertOk(assertion.includes(text));
        },

        doASwipe: async function (params = {}) {
            let from = params.from,
                direction = params.direction,
                locatorTwo = params.locatorTwo || null;

            if ('from' in params)
                from = await this.grabElementBoundingRect(from);

            async function init(from) {
                return {
                    x: parseInt(from['x']) + parseInt(from['width']) / 2,
                    y: parseInt(from['y']) + parseInt(from['height']) / 2
                }
            }

            this.performSwipe(await init(from), await this.getOptions(direction, from))      
        },

        async getOptions(direction, from) {
            switch (direction) {
                case 'to':
                    return {
                        x: parseInt(from['x']) + parseInt(from['width']) / 2,
                        y: parseInt(from['y']) + parseInt(from['height']) / 2
                    };
        
                case 'screenUp':
                    const screenSizeUp = await this.getScreenSize();
                    return {
                        x: parseInt(from['x']) + parseInt(from['width']) / 2,
                        y: screenSizeUp.height
                    };
        
                case 'screenDown':
                    return {
                        x: parseInt(from['x']) + parseInt(from['width']) / 2,
                        y: 0
                    };
        
                case 'screenLeft':
                    return {
                        x: 0,
                        y: parseInt(from['y']) + parseInt(from['height']) / 2
                    };
        
                case 'screenRight':
                    const screenSizeRight = await this.getScreenSize();
                    return {
                        x: screenSizeRight.width,
                        y: parseInt(from['y']) + parseInt(from['height']) / 2
                    };
        
                default:
                    throw new Error(`'${direction}' direction argument is invalid. Use one of the following arguments: ["to", "screenUp", "screenDown", "screenLeft", "screenRight"].`);
            }
        }        
    });
};