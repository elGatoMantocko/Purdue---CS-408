Meteor.methods({
  /*
   * Reads a Channel and searches for its images
   *
   * @param {Channel} the Channel object to read
   * @return {Images} an array of image objects
   */
  '/channels/': function(channel) {
    // Check Arguments
    check(channel, Channel);

    // Check if the user is logged in? Not sure this is necessary
    // if(!Meteor.user()) throw new Meteor.Error('logged-out','You must be logged in to create a channel.');
    
    if (channel.validate()) {
      return Modules.both.getImages(channel);
    } else {
      channel.throwValidationsException();
    }
  },
  
  getUrls: function(channel) {
    // Check Arguments
    check(channel, Channel);

    // Check if the user is logged in? Not sure this is necessary
    // if(!Meteor.user()) throw new Meteor.Error('logged-out','You must be logged in to create a channel.');
    
    if (channel.validate()) {
      return Modules.both.getUrls(channel);
    } else {
      channel.throwValidationsException();
    }
  }
});
