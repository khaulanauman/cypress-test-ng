const { defineConfig } = require("cypress");
require("dotenv").config();
const { configureVisualRegression } = require("cypress-visual-regression");


module.exports = defineConfig({
  projectId: 'oe6r7p',
  e2e: {
    baseUrl: process.env.BASE_URL,
    chromeWebSecurity: false,
    viewportWidth: 1366,
    viewportHeight: 768,
    video: true,
    screenshotOnRunFailure: true,
    experimentalStudio: true, // for Cypress Studio requirement
    setupNodeEvents(on, config) {
       configureVisualRegression(on);
      return config;
    },
  },
  env: {
    visualRegressionType: "base",
    visualRegressionBaseDirectory: "cypress/snapshots/base",
    visualRegressionDiffDirectory: "cypress/snapshots/diff",
    visualRegressionGenerateDiff: "always",
    retryCount: 1
  }
});
