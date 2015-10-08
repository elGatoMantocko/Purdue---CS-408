Meteor.methods({
  /*
   * Subscribes the logged in User to the given Channel
   *
   * @param {Channel} channel The Channel to subscribe to
   * @return {User} the newly saved User
   */
  '/users/subscribe': function(channel) {
    check(channel, Channel);

    if(!Meteor.user()) {
      throw new Meteor.Error('unauthorized', 'You must be logged in to subscribe to channels.');
    }

    // Check that the channel exists
    if(Channel.findOne(channel.get("_id"))) {
      User.me().subscribeTo(channel);
      return User.me();
    } else {
      throw new Meteor.Error('channel-not-found', 'That channel does not exist.');
    }
  }
});
