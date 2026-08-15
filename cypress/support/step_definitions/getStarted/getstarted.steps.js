import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import urls from "../../urls.json";
import locators from "../../locators.json";

Given("I open the dashboard page", () => {
  cy.visit(urls.home);
 // cy.screenshot('dashboard-page');
});

When("I click on Get Started option", () => {
 // cy.allure().feature('Get Started');
 // cy.allure().step('I click on Get Started option');
 // cy.allure().label('type', 'E2E Testing');
cy.get('body').then(($body) => {
    if ($body.find('button:contains("Aceitar"):visible').length) {
        cy.contains('button', 'Aceitar').click();
    }
});
  cy.wait(5000);
cy.contains('Get Started').click({ force: true }); 
 // cy.screenshot('get-started-page');
});

When("I click on Install Cypress section", () => {
  cy.wait(5000);
  cy.get(locators.leftMenu.getStartedMenu.installCypress).click();
 // cy.screenshot('install-cypress-section');
});

When('I click on {string} section', (section) => {
    cy.wait(5000);
    cy.contains(section).click({ force: true });
   // cy.screenshot(`section-${section}`);
});

Then("I confirm Get Started page is on {string}", (pagetitle) => {
//  cy.allure().step(`I confirm Get Started page is on ${pagetitle}`);
  cy.get('h1').should('contain.text', pagetitle);
 // cy.screenshot(`get-started-page-on-${pagetitle}`); // Screenshot with dynamic name
});


Then("I should see the dashboard int the url {string}", (pageRoute) => {
  //cy.allure().step(`I should see the dashboard int the url ${pageRoute}`);
  cy.url().should("include", pageRoute);
 // cy.screenshot(`dashboard-url-should-include-${pageRoute.replace(/\//g, '-')}`); // Screenshot with dynamic name
 // cy.prompt([
//    { type: 'input', name: 'feedback', message: 'Any feedback?' }
 // ])
});
