FlowRouter.route('/proyectos', {
  action: function() {
    BlazeLayout.render("mainLayoutTemplate", {content: "proyectosList"});
  }
});

FlowRouter.route('/proyectos/new', {
  action: function() {
    BlazeLayout.render("mainLayoutTemplate", {content: "proyectoInsert"});
  }
});