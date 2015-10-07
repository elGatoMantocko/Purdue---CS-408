describe('Channel publications', function() {

  var channels = [];
  var sub;

  afterEach(function() {
    // Make sure to cancel the subscription after each test
    if(sub) {
      sub.stop();
      sub = undefined;
    }
  });

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

  it('publishes the latest channels', function(done) {
    sub = Meteor.subscribe('latestChannels', {
      onReady() {
        expect(Channel.getLatest().count()).toBe(10);
        done();
      }
    });
  });

  it('stops when trying to subscribe to my subscriptions while logged out', function(done) {
    sub = Meteor.subscribe('myChannels', {
      onReady() {
        fail('should stop');
        done();
      },
      onStop(err) {
        expect(err.error).toBe('unauthorized');
        done();
      }
    });
  });

  it('should publish my subscribed channels', function(done) {
    Meteor.loginWithPassword('Phony', 'password', function(){
      // Subscribe the user to some channels
      User.me().subscribeTo(channels[0]);
      User.me().subscribeTo(channels[1]);
      User.me().subscribeTo(channels[2]);

      sub = Meteor.subscribe('myChannels', {
        onReady() {
          expect(User.getSuscriptions().count()).toBe(3);
          done();
        },
        onStop(err) {
          fail(err);
          done();
        }
      });
    });
  });

});
