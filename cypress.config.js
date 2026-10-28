const { defineConfig } = require("cypress");
 
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
 
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
 
const {
  createEsbuildPlugin,
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");
 
const { allureCypress } = require("allure-cypress/reporter");
 
const cypressOnFix = require("cypress-on-fix");
 
module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com",
 
    specPattern: "cypress/e2e/**/*.feature",
 
    screenshotOnRunFailure: true,
 
    async setupNodeEvents(on, config) {
 
      // Permite que Cucumber e Allure utilizem os eventos do Cypress
      on = cypressOnFix(on);
 
      // Cucumber
      await addCucumberPreprocessorPlugin(on, config);
 
      // Esbuild
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
 
      // Allure
      allureCypress(on, config, {
        resultsDir: "allure-results",
      });
 
      return config;
    },
 
    cucumber: {
      stepDefinitions: [
        "cypress/support/step_definitions/end2endTesting/**/*.steps.js",
        "cypress/support/step_definitions/end2endTesting/**/*.js"
      ],
    },
  },
});