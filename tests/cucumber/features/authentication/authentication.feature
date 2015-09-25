Feature: Login
  As a registered user
  I want to login to my account
  So that I can manage my account, create channels, and subscribe to channels

  #Background:
    #Given I am signed out

  @dev
  Scenario: A user can login with valid information
    Given I am on the home page
    When I click the login button
    And I enter my authentication information
    Then I should be logged in
