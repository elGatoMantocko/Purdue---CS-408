Feature: Channel creation
  As an authenticated user
  I want to create a channel

  Background:
    Given I am on the home page
    And I am signed in
    When I click on the new channels button

  # Test creation and validation of new channels
  @dev
  Scenario: Create a valid new channel
    When I enter "Galaxy" into the title field
    And I enter "pony+galaxy" into the query field
    And I submit the new channel form
    Then channel "title" should display "Galaxy"
    And channel "query" should display "pony+galaxy"

  @dev
  Scenario: Submit channel with empty title
    When I enter "pony+galaxy" into the query field
    And I submit the new channel form
    Then I should see a title required validation error

  @dev
  Scenario: Submit channel with empty query
    When I enter "Galaxy" into the title field
    And I submit the new channel form
    Then I should see a query required validation error

