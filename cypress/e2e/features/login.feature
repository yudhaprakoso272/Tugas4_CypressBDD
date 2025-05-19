Feature: Login Functionality

  Scenario: Successful login
    Given I visit the login page
    When I login with username "standard_user" and password "secret_sauce"
    And I click login button
    Then I should be redirected to the inventory page

  Scenario: Failed login with invalid credentials
    Given I visit the login page
    When I login with username "invalid_user" and password "wrong_pass"
    And I click login button
    Then I should see an error message
