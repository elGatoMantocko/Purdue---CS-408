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
    Given the database has "1" channels
    Then I should see "1" channels

  @dev
  Scenario: I am on the home page with 5 channel
    Given the database has "5" channels
    Then I should see "5" channels

  @dev
  Scenario: While logged out, navigate to new channel page 
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
    Then channel "title" should display "Galaxy"
    And channel "query" should display "pony+galaxy"

  @dev
  Scenario: Try to create channel without a title
    Given I am signed in
    When I click on the new channels button
    And I enter "pony+galaxy" into the query field
    And I submit the new channel form
    Then I should see a title required validation error

  @dev
  Scenario: Try to create channel without a query
    Given I am signed in
    When I click on the new channels button
    And I enter "Galaxy" into the title field
    And I submit the new channel form
    Then I should see a query required validation error
