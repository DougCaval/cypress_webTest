import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import locators from "../../locators.json";

When("I click on End-to-end Testing option", () => {
  cy.allure().step('I click on End-to-end Testing option');
  cy.get(locators.accept_cookies).click(); // Accept cookies
  cy.wait(5000);
  cy.get(locators.leftMenu.e2eTesting).click();
  cy.screenshot('end-to-end-testing-page');
});

When("I click on Your first Test section", () => {
    cy.allure().step('I click on End-to-end Testing option');
  //cy.get(locators.accept_cookies).click(); // Accept cookies
  cy.wait(5000);
  cy.get(locators.leftMenu.yourFirstTest).click();
  cy.screenshot('your-first-test-section');
});

When("I click on Testing your App section", () => {
    cy.allure().step('I click on End-to-end Testing option');
  //cy.get(locators.accept_cookies).click(); // Accept cookies
  cy.wait(5000);
  cy.get(locators.leftMenu.testingYourApp).click();
  cy.screenshot('testing-your-app-section');
});