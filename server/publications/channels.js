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
  console.log("IN PUB: " + this.userId);
  if(!this.userId) {
    this.error(new Meteor.Error('unauthorized', 'You must be logged in to get your subscriptions.'));
  }
  let user = User.findOne(this.userId);
  return user.getSubscriptions();
});

/*
 * Publish access to a single channel
 */
Meteor.publish('oneChannel', function(id) {
  check(id, String);
  return Channel.find(id);
});
