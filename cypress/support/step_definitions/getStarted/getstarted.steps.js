import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import urls from "../../urls.json";
import locators from "../../locators.json";

Given("I open the dashboard page", () => {
  cy.visit(urls.home);
  cy.screenshot('dashboard-page');
});

When("I click on Get Started option", () => {
  cy.allure().feature('Get Started');
  cy.allure().step('I click on Get Started option');
  cy.allure().label('type', 'E2E Testing');
  cy.get(locators.accept_cookies).click() // Accept cookies
  cy.wait(5000);
  cy.get(locators.leftMenu.getStarted).click();
  cy.screenshot('get-started-page');
});

When("I click on Install Cypress section", () => {
  cy.wait(5000);
  cy.get(locators.leftMenu.installCypress).click();
  cy.screenshot('install-cypress-section');
});

When("I click on Open the App section", () => {
  cy.wait(5000);
  cy.get(locators.leftMenu.openTheApp).click();
  cy.screenshot('open-the-app-section');
});

When("I confirm Get Started page is on {string}", (pagetitle) => {
  cy.allure().step(`I confirm Get Started page is on ${pagetitle}`);
  cy.get('h1').should('contain.text', pagetitle);
  cy.screenshot(`get-started-page-on-${pagetitle}`); // Screenshot with dynamic name
});


Then("I should see the dashboard int the url {string}", (pageRoute) => {
  cy.allure().step(`I should see the dashboard int the url ${pageRoute}`);
  cy.url().should("include", pageRoute);
  cy.screenshot(`dashboard-url-should-include-${pageRoute.replace(/\//g, '-')}`); // Screenshot with dynamic name
  cy.prompt([
    { type: 'input', name: 'feedback', message: 'Any feedback?' }
  ])
});
