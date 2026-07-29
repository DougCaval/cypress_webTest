import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import locators from "../../locators.json";

    Given("estou na pagina de login", () => {
    cy.visit("https://www.saucedemo.com/");
    })    
    
    When("eu inserir o usuário "locked_out_user"", () => { 
    cy.get(locators.login.username).type("locked_out_user");
    })

    And("inserir uma senha valida", () => {
    cy.get(locators.login.password).type("secret_sauce");
    })

    And("clicar no botao "Login"", () => {
    cy.get(locators.login.loginButton).click();
    })

    Then("devo ver a mensagem "Sorry, this user has been locked out." na tela.", () => {
    cy.get(locators.login.errorMessage).should("contain.text", "Sorry, this user has been locked out.");
    })  

    And("devo permanecer na pagina de login.", () => { 
    cy.url().should("eq", "https://www.saucedemo.com/");
    }):