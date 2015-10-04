Feature: Channels
  As a public user
  I want to browse all channels

  # The background will be run for every scenario
  Background:
    Given I am on the home page
    Given I am signed out

  @dev
  Scenario: I am on the home page with 0 channels
    Then I should see "0" channels 

  @dev
  Scenario: I am on the home page with 1 channel
    When the database has "1" channels
    Then I should see "1" channels

  @dev
  Scenario: I am on the home page with 5 channel
    When the database has "5" channels
    Then I should see "5" channels

  @dev
  Scenario: While logged out, navigate to new channel page 
    When I click on the new channels button
    Then the new channel header should have text "You must log in first"

