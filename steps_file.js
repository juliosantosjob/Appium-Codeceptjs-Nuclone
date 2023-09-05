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

        swipeLeftScreen: async function (locator) {
            let to,
                screenSize = await this.getScreenSize(),
                screenWidth = screenSize.width;

            const element = await this.grabElementBoundingRect(locator),
                positionX = parseInt(element['x']) + parseInt(element['width']) / 2,
                positionY = parseInt(element['y']) + parseInt(element['height']) / 2;

            to = (screenWidth * 6) / 100;

            this.performSwipe(
                { x: positionX, y: positionY },
                { x: to, y: positionY }
            );
        }
    });
};