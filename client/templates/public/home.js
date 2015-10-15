Template.home.onCreated(function() {
  Meteor.subscribe('latestChannels');
});

Template.home.helpers({
  channels: function() {
    return Channel.getLatest().fetch();
  }
});
