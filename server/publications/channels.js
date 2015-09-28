/*
 * Publishes the latest Channels, sorted by creation date
 */
Meteor.publish('latestChannels', function(limit) {
  return Channel.getLatest(limit);
});
