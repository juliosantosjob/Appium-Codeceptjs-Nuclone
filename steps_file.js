module.exports = function () {
    return actor({

        waitAndTap: function (locator, timeout = 5) {
            this.waitForElement(locator, timeout);
            this.tap(locator);
        },

        assert: async function (locator, text) {
            let btnTopHeader = this.grabTextFrom(locator);
            this.assertOk(btnTopHeader.includes(text));
        },

        async doASwipe(params = {}) {
            let
                from,
                to,
                direction = 'elementCenter -> screenCenter';
            if (params.hasOwnProperty('from'))
                from = await this.grabElementBoundingRect(params['from']);
            else
                throw new Error('[doASwipe] param "from" are required');
            if (params.hasOwnProperty('to')) to = await this.grabElementBoundingRect(params['to']);
            if (params.hasOwnProperty('direction')) {
                direction = params['direction'];
                if (typeof direction != 'string')
                    throw new Error('[doASwipe] param "direction" need to be a string');
            }

            if (to == undefined) {  // To undefined
                if (direction.includes('->')) { // Direction are two
                    let dirs = direction.split('->');
                    return this.performSwipe(
                        await this.getOptions(from, dirs[0]),
                        await this.getOptions(from, dirs[1]));
                } else  // Direction are just a string
                    return this.performSwipe(
                        await this.getOptions(from, 'elementCenter'),
                        await this.getOptions(from, direction));
            } else {  // To exists
                if (direction.includes('->')) { // Direction are two
                    let dirs = direction.split('->');
                    return this.touchPerform(
                        await this.getOptions(from, dirs[0]),
                        await this.getOptions(undefined, dirs[1]));
                } else  // Direction are just a string
                    return this.touchPerform(
                        await this.getOptions(from, direction),
                        await this.getOptions(to, direction));
            }
        },

        async getOptions(elementBoundies, strategy) {
            if (screenSize == undefined)
                screenSize = await this.getScreenSize();
            switch (strategy.trim().toLowerCase()) {
            case 'elementcenter':
                return {
                    x: parseInt(elementBoundies['x']) + parseInt(elementBoundies['width']) / 2,
                    y: parseInt(elementBoundies['y']) + parseInt(elementBoundies['height']) / 2
                };
            case 'elementleft':
                return {
                    x: parseInt(elementBoundies['x']),
                    y: parseInt(elementBoundies['y']) + parseInt(elementBoundies['height']) / 2
                };
            case 'elementright':
                return {
                    x: parseInt(elementBoundies['x']) + parseInt(elementBoundies['width']),
                    y: parseInt(elementBoundies['y']) + parseInt(elementBoundies['height']) / 2
                };
            case 'elementtop':
                return {
                    x: parseInt(elementBoundies['x']) + parseInt(elementBoundies['width']) / 2,
                    y: parseInt(elementBoundies['y'])
                };
            case 'elementbottom':
                return {
                    x: parseInt(elementBoundies['x']) + parseInt(elementBoundies['width']) / 2,
                    y: parseInt(elementBoundies['y']) + parseInt(elementBoundies['height'])
                };
            case 'screencenter':
                return {
                    x: screenSize.width / 2,
                    y: screenSize.height / 2
                };
            case 'screenleft':
                return {
                    x: 0,
                    y: screenSize.height / 2
                };
            case 'screenright':
                return {
                    x: screenSize.width,
                    y: screenSize.height / 2
                };
            case 'screentop':
                return {
                    x: screenSize.width / 2,
                    y: 0
                };
            case 'screenbottom':
                return {
                    x: screenSize.width / 2,
                    y: screenSize.height
                };
            case 'left':
                return {
                    x: 0,
                    y: parseInt(elementBoundies['y']) + parseInt(elementBoundies['height']) / 2
                };
            case 'right':
                return {
                    x: screenSize.width,
                    y: parseInt(elementBoundies['y']) + parseInt(elementBoundies['height']) / 2
                };
            case 'top':
                return {
                    x: parseInt(elementBoundies['x']) + parseInt(elementBoundies['width']) / 2,
                    y: 0
                };
            case 'bottom':
                return {
                    x: parseInt(elementBoundies['x']) + parseInt(elementBoundies['width']) / 2,
                    y: screenSize.height
                };
            default:
                throw new Error(
                    `[doASwipe] direction '${strategy}' are not recognized.`);
            }
        }

    });
};