Feature: Channel unsubscription
  As an authenticated user
  I want to subscribe to channels
  So that I can set them as my background

  Background:
    Given I am on the home page
    And I am signed in

  # Test channel subscription
  @dev
  Scenario: I can subscribe to a single channel
    Given I created channel "Galaxy" with "galaxy pony"
    And I am subscribed to "Galaxy"
    When I click on the "Galaxy" channel's unsubscribe button
    Then I should be unsubscribed from "Galaxy"
