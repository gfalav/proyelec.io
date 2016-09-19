FlowRouter.route('/map', {
  action: function() {
    BlazeLayout.render("mainLayoutTemplate", {content: "map"});
  }
});

