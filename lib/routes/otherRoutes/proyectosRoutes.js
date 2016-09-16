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

FlowRouter.route('/proyectos/:id/edit', {
  action: function() {
    BlazeLayout.render("mainLayoutTemplate", {content: "proyectosUpdate"});
  }
});

FlowRouter.route('/proyectos/:id', {
  action: function() {
    BlazeLayout.render("mainLayoutTemplate", {content: "proyectosShow"});
  }
});
