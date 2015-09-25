'use strict';

module.exports = function () {

  this.Then(/^I should see the title "([^"]*)"$/, function (expectedTitle) {
    client.waitForExist('title');
    var actual = client.getTitle();
    expect(actual).toBe(expectedTitle);
  });
}
