FlowRouter.route('/proyectos', {
  action: function() {
    BlazeLayout.render("mainLayoutTemplate", {content: "proyectos"});
  }
});

FlowRouter.route('/proyectos/new', {
  action: function() {
    BlazeLayout.render("mainLayoutTemplate", {content: "proyectoInsert"});
  }
});