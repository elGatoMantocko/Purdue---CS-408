Feature: Authentication
  As a registered user
  I want to login to my account
  So that I can manage my account, create channels, and subscribe to channels

  Background:
    Given I am on the home page
    Given I am signed out

  @dev
  Scenario: I can register for an account
    When I click on the signup link
    And I enter "Galaxy" into the username field
    And I enter "password" into the password field
    And I submit the registration form
    Then "Galaxy" should be signed in
