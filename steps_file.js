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
            let from,
                until,
                direction;
            
            if ('from' in params) 
                from = await this.grabElementBoundingRect(params["from"]);
            else
                throw new Error('The "From" argument is required to use doASwipe!');
            if ('until' in params) until = await this.grabElementBoundingRect(params["until"]);
            if ('direction' in params) {
                direction = params["direction"];
            if (typeof direction !== 'string')
              throw new Error('The "direction" argument must be a string'); 
            } else {
              throw new Error('The "direction" argument is required to use doASwipe!');
            }
            
            this.performSwipe(
                await this.getOptions(from, 'to'),
                await this.getOptions(from, direction)
            )
        },

        async getOptions(from, direction) {
            switch (direction) {
                case 'to':
                    return {
                        x: parseInt(from['x']) + parseInt(from['width']) / 2,
                        y: parseInt(from['y']) + parseInt(from['height']) / 2
                    };

                case 'screenUp':
                    return {
                        x: parseInt(from['x']) + parseInt(from['width']) / 2,
                        y: await this.getScreenSize().height
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
                    return {
                        x: await this.getScreenSize().width,
                        y: parseInt(from['y']) + parseInt(from['height']) / 2
                    };

                default:
                    throw new Error(`'${direction}' direction argument is invalid. Use one of the following arguments: ["to", "screenUp", "screenDown", "screenLeft", "screenRight"].`);
            }
        }
    });
};
