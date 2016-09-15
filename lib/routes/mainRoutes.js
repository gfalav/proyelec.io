FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("mainLayoutTemplate", {content: "homeTemplate"});
  }
});