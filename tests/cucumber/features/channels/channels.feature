Feature: Channels
  As a public user
  I want to browse all channels

  # The background will be run for every scenario
  Background:
    Given I am on the home page

  @dev
  Scenario: Navigate to new channel page 
    When I click on the new channels button
    Then the new channel header should have text "You must log in first"

  @dev
  Scenario: Log in and navigate to new channel page
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
  Scenario: Submit channel with empty title
    Given I am signed in
    When I click on the new channels button
    And I enter "pony+galaxy" into the query field
    And I submit the new channel form
    Then I should see a title required validation error

  @dev
  Scenario: Submit channel with empty query
    Given I am signed in
    When I click on the new channels button
    And I enter "Galaxy" into the title field
    And I submit the new channel form
    Then I should see a query required validation error
