Feature: Add product to cart

  Scenario: Add single product to cart
    Given I am logged in as "standard_user" with password "secret_sauce"
    When I add "Sauce Labs Backpack" to the cart
    And The cart should show 1 item
    Then Check product "Sauce Labs Backpack" on cart

  Scenario: Remove product on cart
    Given I am logged in as "standard_user" with password "secret_sauce"
    When I add "Sauce Labs Backpack" to the cart
    And I click cart button
    Then Remove product "Sauce Labs Backpack" on cart
