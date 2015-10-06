Template.channel.onCreated(function() {
  Meteor.subscribe('oneChannel', FlowRouter.getParam('id'));
});

Template.channel.helpers({
  channel: function() {
    return Channel.getChannel(FlowRouter.getParam('id')).fetch()[0];
  }
});
