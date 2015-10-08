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
