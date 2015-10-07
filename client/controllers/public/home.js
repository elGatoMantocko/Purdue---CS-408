Template.home.onCreated(function() {
  var self = this;
  self.autorun(function() {
    Meteor.subscribe('latestChannels');
    if (Meteor.userId()) {
      Meteor.subscribe('myChannels');
    }
  });
  
  //TODO: put user data here into this and remove it from the helpers
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
      var latestChannels = Channel.getLatest().fetch();
      var myChannels = user.getSubscriptions().fetch();

      // return 'latestChannels' it is not in 'myChannels'
      return _.reject(latestChannels, function(latestchannel) {
        return _.find(myChannels, function(mychannel) {
          return _.isEqual(mychannel, latestchannel);
        });
      });
    }
    else {
      return Channel.getLatest().fetch();
    }
  }
});

Template.subscribeButton.helpers({
  subscribed: function() {
    if (!Meteor.userId()) return false;

    var user = User.findOne(Meteor.userId());
    return user.isSubscribedTo(this);
  }
});

Template.subscribeButton.events({
  'click button#subscribe': function(e, tmpl) {
    e.preventDefault();

    var user = User.findOne(Meteor.userId());
    user.subscribeTo(this);
  },
  'click button#unsubscribe': function(e, tmpl) {
    e.preventDefault();

    var user = User.findOne(Meteor.userId());
    user.unsubscribeFrom(this);
  }
});
