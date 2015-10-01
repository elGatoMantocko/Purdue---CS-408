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
    When I register "test@test.com" with password "testpass"
    And "test@test.com" signs in with password "testpass"
    Then "test@test.com" should be signed in
    And The element "a.dropdown-toggle" should have text "test@test.com"
