Feature: Browse Channels
  As a public user
  I want to browse all channels

  # The background will be run for every scenario
  #Background:
    #Given I am signed out

  @dev
  Scenario: There are no channels in the collection
    Given I am on "/"
    Then I should see "0" channels 

  # The @ignore tag is a convenience tag included by meteor-cucumber. See the docs for more on tags
  @ignore
  Scenario: This scenario will not run anywhere
    When I navigate to "/"
    Then I should see the title "it really doesn't matter"
