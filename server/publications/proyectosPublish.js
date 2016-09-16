Meteor.publish('ProyectosPublish', function(proyectoId) {
	if (!proyectoId) {
		return Proyectos.find();
	} else {
		return Proyectos.find({"_id": proyectoId});
	}

})