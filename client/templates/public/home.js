Template.home.onCreated(function() {
  Meteor.subscribe('latestChannels');
});

Template.home.helpers({
  channels: function() {
    return Channel.getLatest().fetch();
  }
});

Template.subscribeButton.helpers({
  subscribed: function() {
    return User.me().isSubscribedTo(this);
  }
});

Template.subscribeButton.events({
  'click button#subscribe': function(e, tmpl) {
    e.preventDefault();
    Meteor.call('/users/subscribe', this);
  }
});
