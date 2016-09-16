Template.proyectosList.onCreated(function() {
    Meteor.subscribe('ProyectosPublish', null);  
});

Template.proyectosList.helpers({
	proyectosVar: function() {
		return Proyectos.find();
	}
})

Template.proyectosShow.onCreated(function() {
	var proyId = FlowRouter.getParam('id');
    Meteor.subscribe('ProyectosPublish', proyId);  
});

Template.proyectosShow.helpers({
	proyectoVar: function() {
		var proyId = FlowRouter.getParam('id');
		return Proyectos.findOne({"_id": proyId});
	}
})

Template.proyectosUpdate.onCreated(function() {
	var proyId = FlowRouter.getParam('id');
    Meteor.subscribe('ProyectosPublish', proyId);  
});

Template.proyectosUpdate.helpers({
	proyectoVar: function() {
		var proyId = FlowRouter.getParam('id');
		return Proyectos.findOne({"_id": proyId});
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