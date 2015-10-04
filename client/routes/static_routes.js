FlowRouter.route('/', {
  subscriptions: function() {
    this.register('latestChannels', Channel.getLatest());
  },
  action: function() {
    BlazeLayout.render("layoutDefault", {header: "navigation", main: "home"});
  }
});

FlowRouter.route('/newchannel', {
  action: function() {
    BlazeLayout.render("layoutDefault", {header: "navigation", main: "newchannel"})
  }
});


