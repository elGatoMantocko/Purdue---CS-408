Template.channel.onCreated(function() {
  var self = this;
  self.autorun(function() {
    var channelId = FlowRouter.getParam('id');
    Meteor.subscribe('oneChannel', channelId);
  });
});

Template.channel.helpers({
  channel: function() {
    var channelId = FlowRouter.getParam('id');
    return Channel.findOne(channelId);
  }
});
