Template.home.onCreated(function() {
  var self = this;
  self.autorun(function() {
    Meteor.subscribe('latestChannels');
    Meteor.subscribe('myChannels');
  });
});

Template.home.helpers({
  mysubs: function() {
    var user = User.findOne(Meteor.userId());
    return user.getSubscriptions().fetch().sort(function(a, b) {
      return (a.title).localeCompare(b.title);
    });
  },
  channels: function() {
    var user = User.findOne(Meteor.userId());
    if (user) {
      console.log(user.getSubscriptions().fetch());
      return _.difference(Channel.getLatest().fetch(), user.getSubscriptions().fetch());
    }
    else {
      return Channel.getLatest().fetch();
    }
  }
});

Template.subscribeButton.events({
  'click button#subscribe': function(e, tmpl) {
    e.preventDefault();

    var user = User.findOne(Meteor.userId());
    user.subscribeTo(this);
  }
});
