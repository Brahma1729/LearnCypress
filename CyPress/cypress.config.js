const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",

  reporterOptions: {
    //charts: true,
    //reportPageTitle: 'custom-title',
    //embeddedScreenshots: true,
    //inlineAssets: true,
    //saveAllAttempts: false,
    autoOpen: true,
    saveJson: true,
  },

  
  watchForFileChanges: false,

  retries: {
    runMode: 0,
    openMode: 0,
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      //require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});

//Spec reporter is the default reporter, but mostly used reporter is Awesome-Mocha Reporter.
//This url provides mocha-reporter flags : https://github.com/adamgruber/mochawesome-report-generator#cli-flags
