Feature: Authentication
  As a registered user
  I want to login to my account
  So that I can manage my account, create channels, and subscribe to channels

  Background:
    Given I am on the home page
    Given I am signed out

  @dev
  Scenario: I can see the registration form
    When I click on "#login-dropdown-list"
    And I click on "#signup-link"
    Then I should see the element "#login-email"
    And I should see the element "#login-password"

  @dev
  Scenario: I can register for an account
    When I click on "#login-dropdown-list"
    And I click on "#signup-link"
    And I enter "Galaxy" in "#login-email"
    And I enter "password" in "#login-password"
    And I click on "#login-buttons-password"
    Then "Galaxy" should be signed in
