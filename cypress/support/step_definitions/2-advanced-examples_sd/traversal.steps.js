import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import urls from "../../urls.json";
import locators from "../../locators.json";

Given("example to-do app on Traversal Request page", () => {
    // Although localStorage is automatically cleared
    // in between tests to maintain a clean state
    // sometimes we need to clear localStorage manually
    cy.visit(urls.home_traversal)

});

When("get child DOM elements", () => {
    // https://on.cypress.io/children
    cy.get('.traversal-breadcrumb')
      .children('.active')
      .should('contain', 'Data')
});

When("get closest ancestor DOM element", () => {
    // https://on.cypress.io/closest
    cy.get('.traversal-badge')
      .closest('ul')
      .should('have.class', 'list-group')

});

When("get a DOM element at a specific index", () => {
    // https://on.cypress.io/eq
    cy.get('.traversal-list>li')
      .eq(1).should('contain', 'siamese')
})

When("get DOM elements that match the selector", () => {
    // https://on.cypress.io/filter
    cy.get('.traversal-nav>li')
      .filter('.active').should('contain', 'About')
});

When("get descendant DOM elements of the selector", () => {
   // https://on.cypress.io/find
    cy.get('.traversal-pagination')
      .find('li').find('a')
      .should('have.length', 7)
});


When("get first DOM element", () => {
    // https://on.cypress.io/first
    cy.get('.traversal-table td')
      .first().should('contain', '1')
});


When("get last DOM element", () => {
    // https://on.cypress.io/last
    cy.get('.traversal-buttons .btn')
      .last().should('contain', 'Submit')
});


When("get next sibling DOM element", () => {
    // https://on.cypress.io/next
    cy.get('.traversal-ul')
      .contains('apples').next().should('contain', 'oranges')
});


When("get all next sibling DOM elements", () => {
    // https://on.cypress.io/nextall
    cy.get('.traversal-next-all')
      .contains('oranges')
      .nextAll().should('have.length', 3)
});


When("get next sibling DOM elements until next element", () => {
    // https://on.cypress.io/nextuntil
    cy.get('#veggies')
      .nextUntil('#nuts').should('have.length', 3)
});


When("remove DOM elements from set of DOM elements", () => {
    // https://on.cypress.io/not
    cy.get('.traversal-disabled .btn')
      .not('[disabled]').should('not.contain', 'Disabled')
});


When("get parent DOM element from DOM elements", () => {
    // https://on.cypress.io/parent
    cy.get('.traversal-mark')
      .parent().should('contain', 'Morbi leo risus')
});


When("get parent DOM elements from DOM elements", () => {
    // https://on.cypress.io/parents
    cy.get('.traversal-cite')
      .parents().should('match', 'blockquote')
});


When("get parent DOM elements from DOM elements until element", () => {
    // https://on.cypress.io/parentsuntil
    cy.get('.clothes-nav')
      .find('.active')
      .parentsUntil('.clothes-nav')
      .should('have.length', 2)
});


When("get previous sibling DOM element", () => {
    // https://on.cypress.io/prev
    cy.get('.birds').find('.active')
      .prev().should('contain', 'Lorikeets')
});


When("get all previous sibling DOM elements", () => {
    // https://on.cypress.io/prevall
    cy.get('.fruits-list').find('.third')
      .prevAll().should('have.length', 2)
});


When("get all previous sibling DOM elements until element", () => {
    // https://on.cypress.io/prevuntil
    cy.get('.foods-list').find('#nuts')
      .prevUntil('#veggies').should('have.length', 3)
});

When("get all sibling DOM elements", () => {
    // https://on.cypress.io/siblings
    cy.get('.traversal-pills .active')
      .siblings().should('have.length', 2)
});
