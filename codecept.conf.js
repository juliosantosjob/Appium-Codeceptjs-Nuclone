const env = require("./support/environment");

exports.config = {
  tests: './src/tests/*.spec.js',
  output: './output',
  helpers: {
    Appium: env.getCapabilities(),
    "AssertWrapper": {
      "require": "codeceptjs-assert",
    }
  },
  include: {
    I: './steps_file.js',
    pages: "./pages.js"
  },
  gherkin: {
    features: "./src/features/**/*.feature",
    steps: "./src/features/**/stepDefinitions/*.steps.js"
  },
  plugins: {
    allure: {
      "enabled": true
    },
    tryTo: {
      enabled: true
    }
  },
  name: 'Appium-Codeceptjs-Nuclone'
}