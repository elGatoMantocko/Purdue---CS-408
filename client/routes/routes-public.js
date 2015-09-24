FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("layoutDefault", {header: "navigation", main: "construction"});
  }
});


