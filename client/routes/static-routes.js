FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("layoutDefault", {header: "navigation", main: "home"});
  }
});

FlowRouter.route('/login', {
  action: function() {
    BlazeLayout.render("layoutDefault", {header: "navigation", main: "login"})
  }
});


