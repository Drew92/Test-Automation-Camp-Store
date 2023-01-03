const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:'https://ui-automation-camp.vercel.app/',
    viewportWidth: 1000,
    viewportHeight: 660,
    chromeWebSecurity: false
  },
});
