describe('Channel publications', function() {
  it('publishes the latest channels', function() {
    Meteor.subscribe('latestChannels');
  });
});
