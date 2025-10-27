import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import urls from "../../urls.json";
import locators from "../../locators.json";

Given("example to-do app on Connectors page", () => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit(urls.home_connectors)
    cy.screenshot('Todo-application-connectors-page');
});

When("iterate over an array of elements", () => {
    // https://on.cypress.io/each
    cy.get('.connectors-each-ul>li')
        .each(($el, index, $list) => {
            console.log($el, index, $list)
        })
});

When("get properties on the current subject", () => {
    // https://on.cypress.io/its
    cy.get('.connectors-its-ul>li')
        // calls the 'length' property yielding that value
        .its('length')
        .should('be.gt', 2)
});

When("invoke a function on the current subject", () => {
    // our div is hidden in our script.js
    // $('.connectors-div').hide()
    cy.get('.connectors-div').should('be.hidden')

    // https://on.cypress.io/invoke
    // call the jquery method 'show' on the 'div.container'
    cy.get('.connectors-div').invoke('show')

    cy.get('.connectors-div').should('be.visible')
});

When("spread an array as individual args to callback function", () => {
    // https://on.cypress.io/spread
    const arr = ['foo', 'bar', 'baz']

    cy.wrap(arr).spread((foo, bar, baz) => {
        expect(foo).to.eq('foo')
        expect(bar).to.eq('bar')
        expect(baz).to.eq('baz')
    })
});

When("invokes a callback function with the current subject", () => {
    // https://on.cypress.io/then
    cy.get('.connectors-list > li')
        .then(($lis) => {
            expect($lis, '3 items').to.have.length(3)
            expect($lis.eq(0), 'first item').to.contain('Walk the dog')
            expect($lis.eq(1), 'second item').to.contain('Feed the cat')
            expect($lis.eq(2), 'third item').to.contain('Write JavaScript')
        })
});



When("yields the returned value to the next command", () => {
    cy.wrap(1)
        .then((num) => {
            expect(num).to.equal(1)

            return 2
        })
        .then((num) => {
            expect(num).to.equal(2)
        })
});

When("yields the original subject without return", () => {
    cy.wrap(1)
        .then((num) => {
            expect(num).to.equal(1)
            // note that nothing is returned from this callback
        })
        .then((num) => {
            // this callback receives the original unchanged value 1
            expect(num).to.equal(1)
        })
});

When("yields the value yielded by the last Cypress command inside", () => {
    cy.wrap(1)
        .then((num) => {
            expect(num).to.equal(1)
            // note how we run a Cypress command
            // the result yielded by this Cypress command
            // will be passed to the second ".then"
            cy.wrap(2)
        })
        .then((num) => {
            // this callback receives the value yielded by "cy.wrap(2)"
            expect(num).to.equal(2)
        })
});

