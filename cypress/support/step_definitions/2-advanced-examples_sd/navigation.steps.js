import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import urls from "../../urls.json";
import locators from "../../locators.json";

Given("example to-do app on Navigation page", () => {
cy.visit(urls.home_navigation)
    cy.get('.navbar-nav').contains('Commands').click()
    cy.get('.dropdown-menu').contains('Navigation').click()
    cy.screenshot('Todo-application-navigation-page');

});

When("go back or forward in the browser's history", () => {
   // https://on.cypress.io/go

    cy.location('pathname').should('include', 'navigation')

    cy.go('back')
    cy.location('pathname').should('not.include', 'navigation')

    cy.go('forward')
    cy.location('pathname').should('include', 'navigation')

    // clicking back
    cy.go(-1)
    cy.location('pathname').should('not.include', 'navigation')

    // clicking forward
    cy.go(1)
    cy.location('pathname').should('include', 'navigation')
});

When("reload the page", () => {
    // https://on.cypress.io/reload
    cy.reload()

    // reload the page without using the cache
    cy.reload(true)
});

When("visit a remote url", () => {
      // https://on.cypress.io/visit

    // Visit any sub-domain of your current domain
    // Pass options to the visit
    cy.visit('https://example.cypress.io/commands/navigation', {
      timeout: 50000, // increase total time for the visit to resolve
      onBeforeLoad (contentWindow) {
        // contentWindow is the remote page's window object
        expect(typeof contentWindow === 'object').to.be.true
      },
      onLoad (contentWindow) {
        // contentWindow is the remote page's window object
        expect(typeof contentWindow === 'object').to.be.true
      },
    })
})