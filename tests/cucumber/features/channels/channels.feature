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

  @dev
  Scenario: While logged in, navigate to new channel page
    Given I am signed in
    When I click on the new channels button
    Then the new channel header should have text "Create a new channel"

  @dev
  Scenario: Create new channel
    Given I am signed in
    When I click on the new channels button
    And I enter "Galaxy" into the title field
    And I enter "pony+galaxy" into the query field
    And I submit the new channel form
    Then I should be on the new channel
