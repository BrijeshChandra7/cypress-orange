const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
 // baseUrl : "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  pageLoadTimeout: 30000,
  requestTimeout: 20000,
  assertionTimeout: 5000,
  viewportWidth: 1280,
  viewportHeight: 720,
  watchForFileChanges: false,
  includeShadowDom: true,
  taskTimeout:70000,
  chromeWebSecurity : true,
  testIsolation : true,
  retries: {
    runMode: 2, // Number of times to retry commands in run mode
    openMode: 1, // Number of times to retry commands in open mode
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      this.screenshotOnRunFailure=true;
    },
  },
});
