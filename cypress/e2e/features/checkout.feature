Feature: Checkout process

  Scenario: Successful checkout
    Given I have 1 product in my cart
    When I proceed to checkout and enter first name "John", last name "Doe", and zip "12345"
    Then I should see the order overview and finish the purchase

  Scenario: Fill in the fields in the checkout process incorrectly
    Given I have 1 product in my cart
    When I proceed to checkout and enter first name "!@#$%", last name "^&*()", and zip "abcd"
    Then I should see the order overview and finish the purchase