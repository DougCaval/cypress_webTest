import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import urls from "../../urls.json";
import locators from "../../locators.json";

Given("example to-do app on Storage Request page", () => {
    // Although localStorage is automatically cleared
    // in between tests to maintain a clean state
    // sometimes we need to clear localStorage manually
    cy.visit(urls.home_storage)

});

When("clear all data in localStorage for the current origin", () => {
    // https://on.cypress.io/clearlocalstorage
    cy.get('.ls-btn').click()
    cy.get('.ls-btn').should(() => {
        expect(localStorage.getItem('prop1')).to.eq('red')
        expect(localStorage.getItem('prop2')).to.eq('blue')
        expect(localStorage.getItem('prop3')).to.eq('magenta')
    })

    cy.clearLocalStorage()
    cy.getAllLocalStorage().should(() => {
        expect(localStorage.getItem('prop1')).to.be.null
        expect(localStorage.getItem('prop2')).to.be.null
        expect(localStorage.getItem('prop3')).to.be.null
    })

    cy.get('.ls-btn').click()
    cy.get('.ls-btn').should(() => {
        expect(localStorage.getItem('prop1')).to.eq('red')
        expect(localStorage.getItem('prop2')).to.eq('blue')
        expect(localStorage.getItem('prop3')).to.eq('magenta')
    })

    // Clear key matching string in localStorage
    cy.clearLocalStorage('prop1')
    cy.getAllLocalStorage().should(() => {
        expect(localStorage.getItem('prop1')).to.be.null
        expect(localStorage.getItem('prop2')).to.eq('blue')
        expect(localStorage.getItem('prop3')).to.eq('magenta')
    })

    cy.get('.ls-btn').click()
    cy.get('.ls-btn').should(() => {
        expect(localStorage.getItem('prop1')).to.eq('red')
        expect(localStorage.getItem('prop2')).to.eq('blue')
        expect(localStorage.getItem('prop3')).to.eq('magenta')
    })

    // Clear keys matching regex in localStorage
    cy.clearLocalStorage(/prop1|2/)
    cy.getAllLocalStorage().should(() => {
        expect(localStorage.getItem('prop1')).to.be.null
        expect(localStorage.getItem('prop2')).to.be.null
        expect(localStorage.getItem('prop3')).to.eq('magenta')
    })
});

When("get all data in localStorage for all origins", () => {
    // https://on.cypress.io/getalllocalstorage
    cy.get('.ls-btn').click()

    // getAllLocalStorage() yields a map of origins to localStorage values
    cy.getAllLocalStorage().should((storageMap) => {
        expect(storageMap).to.deep.equal({
            // other origins will also be present if localStorage is set on them
            'https://example.cypress.io': {
                'prop1': 'red',
                'prop2': 'blue',
                'prop3': 'magenta',
            },
        });

    });

});

When("clear all data in localStorage for all origins", () => {
    // https://on.cypress.io/getallsessionstorage
    cy.get('.ls-btn').click()

    // getAllSessionStorage() yields a map of origins to sessionStorage values
    cy.getAllSessionStorage().should((storageMap) => {
        expect(storageMap).to.deep.equal({
            // other origins will also be present if sessionStorage is set on them
            'https://example.cypress.io': {
                'prop4': 'cyan',
                'prop5': 'yellow',
                'prop6': 'black',
            },
        })
    })
})

When("clear all data in sessionStorage for all origins", () => {
    // https://on.cypress.io/clearallsessionstorage
    cy.get('.ls-btn').click()

    // clearAllSessionStorage() yields null
    cy.clearAllSessionStorage()
    cy.getAllSessionStorage().should(() => {
        expect(sessionStorage.getItem('prop4')).to.be.null
        expect(sessionStorage.getItem('prop5')).to.be.null
        expect(sessionStorage.getItem('prop6')).to.be.null
    })
});
