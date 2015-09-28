module.exports = function () {
  this.Before(function () {

    this.AuthenticationHelper = {
      login: function () {
        client.waitForExist('#login-btn');
        client.click('#login-btn');
        //client.setValue('#login-email', 'me@example.com');
        //client.setValue('#login-password', 'letme1n');
        //client.click('.login-button-form-submit');
        //client.waitForExist('#login-name-link');
      },

      logout: function () {
        client.executeAsync(function (done) {
          Meteor.logout(done);
        });
      },

      createAccount: function (profile) {
        return server.call('fixtures/createAccount', {
          email: 'me@example.com',
          password: 'password',
          profile: profile
        });
      },

      createAccountAndLogin : function(profile) {
        this.createAccount(profile);
        this.login();
      }
    };

  });
};
