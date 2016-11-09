FlowRouter.route('/tconstructivos', {
  action: function() {
    BlazeLayout.render("mainLayoutTemplate", {content: "tconstructivosList"});
  }
});

FlowRouter.route('/tconstructivos/new', {
  action: function() {
    BlazeLayout.render("mainLayoutTemplate", {content: "tconstructivoInsert"});
  }
});

FlowRouter.route('/tconstructivos/:id/edit', {
  action: function() {
    BlazeLayout.render("mainLayoutTemplate", {content: "tconstructivosUpdate"});
  }
});

FlowRouter.route('/tconstructivos/:id', {
  action: function() {
    BlazeLayout.render("mainLayoutTemplate", {content: "tconstructivosShow"});
  }
});
