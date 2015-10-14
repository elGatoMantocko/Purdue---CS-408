Feature: Home channels
  As a public user
  I want to browse all channels

  Background:
    Given I am on the home page

  # Test channels visible on the home page
  @dev
  Scenario: Can't see any channels when DB is empty
    Given the database has "0" channels
    Then I should see "0" channels

  @dev
  Scenario: Can see 2 channels on the home page
    Given the database has "2" channels
    Then I should see "2" channels

