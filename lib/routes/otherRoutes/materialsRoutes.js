FlowRouter.route('/materials', {
  action: function() {
    BlazeLayout.render("mainLayoutTemplate", {content: "materialsList"});
  }
});

FlowRouter.route('/materials/new', {
  action: function() {
    BlazeLayout.render("mainLayoutTemplate", {content: "materialInsert"});
  }
});

FlowRouter.route('/materials/:id/edit', {
  action: function() {
    BlazeLayout.render("mainLayoutTemplate", {content: "materialsUpdate"});
  }
});

FlowRouter.route('/materials/:id', {
  action: function() {
    BlazeLayout.render("mainLayoutTemplate", {content: "materialsShow"});
  }
});
