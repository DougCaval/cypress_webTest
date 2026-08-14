const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
     // allureWriter(on, config);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        }),
        'after: screenshot', (details) => {
        }
      );

      return config;
    },
    screenshotOnRunFailure: true,
    specPattern: "**/*.feature",
    baseUrl: "https://docs.cypress.io/app/get-started/why-cypress",

    cucumber: {
      stepDefinitions: [
        "cypress/support/step_definitions/**/*.steps.js",
        "cypress/support/step_definitions/**/*.js"
      ]
    }
  },
});
