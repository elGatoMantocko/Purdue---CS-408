Feature: Static Pages

  As a developer
  I want to know the app is serving properly
  So that I can sleep at night

  @dev
  Scenario: Visit home page
    When I navigate to "/"
    Then I should see the title "BetterBackground"
