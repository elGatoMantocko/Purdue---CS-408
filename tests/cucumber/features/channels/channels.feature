Feature: Channels
  As a public user
  I want to browse all channels

  # The background will be run for every scenario
  Background:
    Given I am on the home page
    Given I am signed out

  @dev
  Scenario: There are currently no channels in the collection
    When I navigate to "/"
    Then I should see "0" channels 

  @dev
  Scenario: While logged out, navigate to new channel page 
    Given I am on the home page
    When I click on the new channels button
    Then the new channel header should have text "You must log in first"
