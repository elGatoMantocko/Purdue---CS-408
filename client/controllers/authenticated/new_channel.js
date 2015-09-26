Template.newchannel.helper({
  loggedin: fuction() {
    return Meteor.userId() != null ? true : false;
  }
});
