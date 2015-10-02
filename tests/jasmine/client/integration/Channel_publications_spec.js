describe('Channel publications', function() {

  var channels = [];
  beforeAll(function(done){
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

  afterAll(function(done) {
    Meteor.call('/fixtures/reset', function(err, res) {
      done();
    });
  });

  it('publishes the latest channels', function() {
    var sub = Meteor.subscribe('latestChannels', {
      onReady() {
        expect(Channel.getLatest().count()).toBe(10);
      }
    });
    sub.stop();
  });

  it('stops when trying to subscribe to my subscriptions while logged out', function() {
    var sub = Meteor.subscribe('myChannels', {
      onReady() {
        fail('should stop');
      },
      onStop(err) {
        expect(err.error).toBe('unauthorized');
      }
    });
  });

  it('should publish my subscribed channels', function() {
    Meteor.loginWithPassword('Phony', 'password', function(){
      // Subscribe the user to some channels
      User.me().subscribeTo(channels[0]);
      User.me().subscribeTo(channels[1]);
      User.me().subscribeTo(channels[2]);

      Meteor.subscribe('myChannels', {
        onReady() {
          expect(User.getSuscriptions().count()).toBe(3);
        }
      });
    });
  });

});
