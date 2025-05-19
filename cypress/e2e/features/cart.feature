Feature: Add product to cart

  Scenario: Add single product to cart
    Given I am logged in as "standard_user" with password "secret_sauce"
    When I add "Sauce Labs Backpack" to the cart
    Then the cart should show 1 item
