'use strict'

// You can include npm dependencies for support files in tests/cucumber/package.json
var _ = require('underscore');
// You can use normal require here, cucumber is NOT run in a Meteor context (by design)
var url = require('url');

module.exports = function () {

  this.Given(/^I created channel "([^"]*)" with "([^"]*)"$/, function (title, query) {
    client.executeAsync(function(title, query, done) {
      Meteor.call('/fixtures/addChannel', title, query, done);
    }, title, query);
  });

  this.When(/^I click on the "([^"]*)" channel subscribe button$/, function (title) {
    client.waitForVisible("#channels-list");
    // We have to know which row to
    // click on based on the title of the channel
    var index = client.getText(".channel-row h4").indexOf(title) + 1;
    
    // We click the unsubscribe button of the 
    client.click('.channel-row:nth-child(' + index + ') #subscribe')
  });

  this.Then(/^I should be subscribed to "([^"]*)"$/, function (title) {
  });

};
