Template.newchannel.events({
  'change input': function(e, tmpl) {
    e.preventDefault();

    var field = e.currentTarget;
    this[field.id] = field.value;
    this.validate(field.id);
  },
  'click [name=submit]': function(e, tmpl) {
    e.preventDefault();

    if (this.validate()) {
      this.save();
    }
  }
});
