/*
 * Publishes the latest Channels, sorted by creation date
 */
Meteor.publish('latestChannels', function(limit) {
  return Channel.getLatest(limit);
});

/*
 * Publish access to a single channel
 */
Meteor.publish('oneChannel', function(id) {
  check(id, String);
  return Channel.find(id);
});
