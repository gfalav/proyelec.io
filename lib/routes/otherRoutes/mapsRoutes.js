FlowRouter.route('/map/:proyectoId', {
  action: function() {
    BlazeLayout.render("mainLayoutTemplate", {content: "map"});
  }
});

