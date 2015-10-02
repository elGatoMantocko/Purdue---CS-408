describe('Channel publications', function() {
  it('publishes the latest channels', function() {
    Meteor.subscribe('latestChannels');
  });

  it('publishes my subscribed channels', function() {
    Meteor.subscribe('myChannels');
  });
});
