Template.newchannel.events({

  'change input': function(e, tmpl) {
    e.preventDefault();

    var field = e.currentTarget;
    this[field.id] = field.value;
  },

  'submit form': function(e, tmpl) {
    e.preventDefault();

    var channel = new Channel({title: this.title, query: this.query});
    Meteor.call('/channels/new', channel, function(err, res) {
      FlowRouter.go('/channels/' + res._id);
    });
  }

});
