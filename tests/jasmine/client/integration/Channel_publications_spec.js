describe('Channel publications', function() {

  var channels = [];

  beforeEach(function(done){
    // Navigate to a page that has 0 subscriptions
    FlowRouter.go('/blank');

    // Start fresh
    Meteor.call('/fixtures/reset', function(err, res) {
      // Create 10 fake channels
      Meteor.call('/fixtures/addChannels', 10, function(err, res) {
        channels = res;
        // Create a fake user
        Meteor.call('/fixtures/addUser', {
          username: 'Phony',
          password: 'password'
        }, function(err, res) {
          done();
        });
      });
    });
  });

  afterEach(function(done) {
    // End fresh
    Meteor.call('/fixtures/reset', function(err, res) {
      done();
    });
  });

  it('publishes the latest channels', function(done) {
    var sub = Meteor.subscribe('latestChannels', {
      onReady() {
        expect(Channel.getLatest().count()).toBe(10);
        sub.stop();
      },
      onStop(err) {
        if(err) {
          fail(err);
        }
        done();
      }
    });
  });
});
