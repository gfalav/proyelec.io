FlowRouter.route('/', {
	name: "home",
  	action: function() {
    	BlazeLayout.render("mainLayoutTemplate", {content: "homeTemplate"});
  	}
});