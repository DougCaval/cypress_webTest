import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


Given("the user is logged into saucedemo", () => {
  cy.visit("https://www.saucedemo.com/");
  cy.get('[data-test="username"]').type("standard_user");
  cy.get('[data-test="password"]').type("secret_sauce");
  cy.get('[data-test="login-button"]').click();
  cy.url().should("include", "/inventory.html");
});

Given("the user has at least one product in the cart", () => {
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  cy.get('.shopping_cart_badge').should('contain', '1');
});

Given("is on the checkout page", () => {
  cy.get('.shopping_cart_link').click();
  cy.get('[data-test="checkout"]').click();
  cy.url().should("include", "/checkout-step-one.html");
});


When('fills in the "First Name" field with "Alexandre"', () => {
  cy.get('[data-test="firstName"]').type("Alexandre");
});

When('fills in the "Last Name" field with "Martins"', () => {
  cy.get('[data-test="lastName"]').type("Martins");
});

When('fills in the "Postal Code" field with "12345"', () => {
  cy.get('[data-test="postalCode"]').type("12345");
});

When('clicks on "Continue"', () => {
  cy.get('[data-test="continue"]').click();
});

Then("should be redirected to the order overview page", () => {
  cy.url().should("include", "/checkout-step-two.html");
});

When('leaves the "First Name" field empty', () => {

});

When('leaves the "Last Name" field empty', () => {

});

When('leaves the "Postal Code" field empty', () => {

});

Then('the message "Error: First Name is required" should be displayed', () => {
  cy.get('[data-test="error"]').should("contain", "Error: First Name is required");
});

Then('the message "Error: Last Name is required" should be displayed', () => {
  cy.get('[data-test="error"]').should("contain", "Error: Last Name is required");
});

Then('the message "Error: Postal Code is required" should be displayed', () => {
  cy.get('[data-test="error"]').should("contain", "Error: Postal Code is required");
});



When('clicks on the "Cancel" button', () => {
  cy.get('[data-test="cancel"]').click();
});

Then("should be redirected to the cart page", () => {
  cy.url().should("include", "/cart.html");
});