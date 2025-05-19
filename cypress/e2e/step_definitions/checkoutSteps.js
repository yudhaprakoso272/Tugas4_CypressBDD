// import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const { Given, When, Then } = require ('cypress-cucumber-preprocessor/steps');

Given("I have 1 product in my cart", () => {
  cy.visit("/");
  cy.get('[data-test="username"]').type("standard_user");
  cy.get('[data-test="password"]').type("secret_sauce");
  cy.get('[data-test="login-button"]').click();
  cy.contains("Add to cart").first().click();
  cy.get(".shopping_cart_link").click();
  cy.url().should("include", "/cart.html");
});

When("I proceed to checkout and enter first name {string}, last name {string}, and zip {string}", (first, last, zip) => {
  cy.get('[data-test="checkout"]').click();
  cy.get('[data-test="firstName"]').type(first);
  cy.get('[data-test="lastName"]').type(last);
  cy.get('[data-test="postalCode"]').type(zip);
  cy.get('[data-test="continue"]').click();
});

Then("I should see the order overview and finish the purchase", () => {
  cy.contains("Checkout: Overview").should("exist");
  cy.get('[data-test="finish"]').click();
  cy.contains("Thank you for your order!").should("be.visible");
});
