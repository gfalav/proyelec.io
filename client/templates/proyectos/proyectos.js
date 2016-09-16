Template.proyectosList.helpers({
	proyectosVar: function() {
		return Proyectos.find();
	}
})


AutoForm.hooks({
	proyectosInsert: {

		onSuccess: function(formType, result) {
			FlowRouter.go('/proyectos');
		},

		onError: function(formType, error) {
			alert(error);
		}
   
	}
});