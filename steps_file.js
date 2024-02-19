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

            let x_, y_, x, y;

            if ('from' in params)
                from = await this.grabElementBoundingRect(from);

            x = parseInt(from['x']) + parseInt(from['width']) / 2;
            y = parseInt(from['y']) + parseInt(from['height']) / 2;


            switch (direction) {
                case 'to':
                    x_ = parseInt(from['x']) + parseInt(from['width']) / 2;
                    y_ = parseInt(from['y']) + parseInt(from['height']) / 2;
                    break;

                case 'screenUp':
                    x_ = parseInt(from['x']) + parseInt(from['width']) / 2;
                    y_ = await this.getScreenSize().height;
                    break;

                case 'screenDown':
                    x_ = parseInt(from['x']) + parseInt(from['width']) / 2;
                    y_ = 0;
                    break;

                case 'screenLeft':
                    x_ = 0;
                    y_ = parseInt(from['y']) + parseInt(from['height']) / 2;
                    break;

                case 'screenRight':
                    x_ = await this.getScreenSize().width;
                    y_ = parseInt(from['y']) + parseInt(from['height']) / 2;
                    break;

                default:
                    throw new Error(`'${direction}' direction argument is invalid. Use one of the following arguments: ["to", "screenUp", "screenDown", "screenLeft", "screenRight"].`);
            }

            this.performSwipe({ x: x, y: y }, { x: x_, y: y });
        }
    });
};