Template.newchannel.events({

  'change input': function(e, tmpl) {
    e.preventDefault();

    if (!this.channel) 
      this.channel = new Channel();

    var field = e.currentTarget;
    this.channel.set(field.id, field.value);
    console.log(this.channel);
  },

  'submit form': function(e, tmpl) {
    e.preventDefault();

    $("#add-channel").validate();
    Meteor.call('/channels/new', this.channel, function(err, res) {
      if (err) this.channel.catchValidationException();
      FlowRouter.go('/channels/' + res._id);
    });
  }

});
