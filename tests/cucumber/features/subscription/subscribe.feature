Feature: Subscribe
  As a user 
  I want to subscribe to channels
  So that they can be saved to my account

  Background:
    Given I am on the home page
    Given I am signed out

  @dev
  Scenario: Subscribe while logged out
    Given the database has "1" channels
    When I click on the subscribe button
    Then I shouldn't see my channels

  @dev
  Scenario: Subscribe to one channel while logged in
    Given the database has "1" channels
    And I am signed in
    When I click on the subscribe button
    Then I should see "1" channels in "#mychannels"

  @dev
  Scenario: Subscribe to a specific channel
    Given the database has "4" channels
    And I am signed in
    And I create a channel with title "CS408" and query "pony+galaxy"
    And I am on the home page
    When I click on "CS408" subscribe button
    Then the "CS408" channel should be in "#mychannels"

  @dev
  Scenario: Unsubscribe from a specific channel
    Given the database has "4" channels
    And I am signed in
    And I create a channel with title "CS408" and query "pony+galaxy"
    And I am on the home page
    When I click on "CS408" subscribe button
    And I click on "CS408" unsubscribe button
    Then the "CS408" channel should be in "#allchannels"
