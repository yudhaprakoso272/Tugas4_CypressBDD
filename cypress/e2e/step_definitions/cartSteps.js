// import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const { Given, When, Then } = require ('cypress-cucumber-preprocessor/steps');

Given("I am logged in as {string} with password {string}", (user, pass) => {
  cy.visit("/");
  cy.get('[data-test="username"]').type(user);
  cy.get('[data-test="password"]').type(pass);
  cy.get('[data-test="login-button"]').click();
  cy.url().should("include", "/inventory.html");
});

When("I add {string} to the cart", (product) => {
  cy.contains(product).parents(".inventory_item").find("button").click();
});

When("The cart should show 1 item", () => {
  cy.get(".shopping_cart_badge").should("have.text", "1");
});

Then("Check product {string} on cart", (product) => {
  cy.get('[data-test="shopping-cart-link"]').click();
  cy.get('[data-test="inventory-item"]').contains(product);
});

When("I click cart button", () => {
  cy.get('[data-test="shopping-cart-link"]').click();
});

Then("Remove product {string} on cart", (product) => {
  cy.contains(product).parents(".cart_item").find("button").click();
});