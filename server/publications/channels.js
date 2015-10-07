/*
 * Publishes the latest Channels, sorted by creation date
 */
Meteor.publish('latestChannels', function(limit) {
  return Channel.getLatest(limit);
});

/*
 * Publish my subscribed channels
 */
Meteor.publish('myChannels', function() {

  if(!this.userId) {
    this.error(new Meteor.Error('unauthorized', 'You must be logged in to get your subscriptions.'));
  }
  let user = User.me();
  return user.getSubscriptions();
});

/*
 * Publish access to a single channel
 */
Meteor.publish('oneChannel', function(id) {
  check(id, String);
  return Channel.find(id);
});
