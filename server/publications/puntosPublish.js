Meteor.publish('PuntosPublish', function(proyectoId) {
	return Puntos.find({"proyectoId": proyectoId});
})