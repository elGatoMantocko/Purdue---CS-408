Feature: Login
  As a registered user
  I want to login to my account
  So that I can manage my account

  Background:
    Given I am signed out
    And I am on "/"

  @dev
  Scenario: A user can navigate to the login page
    When I click the Login button
    Then I am redirected to "/login"
