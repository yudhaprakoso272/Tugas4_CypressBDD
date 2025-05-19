// import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const { Given, When, Then } = require ('cypress-cucumber-preprocessor/steps');

Given("I visit the login page", () => {
  cy.visit("/");
});

When("I login with username {string} and password {string}", (username, password) => {
  cy.get('[data-test="username"]').type(username);
  cy.get('[data-test="password"]').type(password);
});

When("I click login button", () => {
  cy.get('[data-test="login-button"]').click();
});

Then("I should be redirected to the inventory page", () => {
  cy.url().should("include", "/inventory.html");
});

Then("I should see an error message", () => {
  cy.get('[data-test="error"]').should("contain", "Username and password do not match");
});
