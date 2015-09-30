Feature: Authentication
  As a registered user
  I want to login to my account
  So that I can manage my account, create channels, and subscribe to channels

  Background:
    Given I am on the home page
    Given I am signed out

  @dev
  Scenario: Create account
    Given "test@test.com" has not registered
    When I click on "a.dropdown-toggle"
    And I click on "#signup-link"
    And I enter "test@test.com" in "#login-email"
    And I enter "testpass" in "#login-password"
    And I click on "button#login-buttons-password"
    # Then The element "a.dropdown-toggle" should have text "test@test.com"
