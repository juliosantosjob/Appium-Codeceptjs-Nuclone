const env = require('./src/support/environments');

exports.config = {
  tests: './src/specs/*.spec.js',
  output: './output',
  helpers: {
    Appium: env.getCapabilities(),
    AssertWrapper: {
      require: 'codeceptjs-assert',
    },
    AppiumHelper: {
      require: "./src/support/appiumHelper"
    }
  },
  include: {
    I: './steps_file.js',
    pages: './pages.js',
  },
  gherkin: {
    features: './src/features/**/*.feature',
    steps: './src/features/**/stepDefinitions/*.steps.js',
  },
  plugins: {
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy',
    },
    stepByStepReport: {
      enabled: true,
      fullPageScreenshots: true,
      screenshotsForAllureReport: true,
    },
    retryFailedStep: {
      enabled: true,
    },
    tryTo: {
      enabled: true,
    },
  },
  name: 'Appium-Codeceptjs-Nuclone',
};