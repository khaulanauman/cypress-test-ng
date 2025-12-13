const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL,
    chromeWebSecurity: false,
    viewportWidth: 1366,
    viewportHeight: 768,
    video: true,
    screenshotOnRunFailure: true,
    experimentalStudio: true, // for Cypress Studio requirement
    setupNodeEvents(on, config) {
      return config;
    },
  },
  env: {
    // put non-secret test flags here
    retryCount: 1
  }
});
