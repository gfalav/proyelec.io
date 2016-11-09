Template.tconstructivosList.onCreated(function() {
    Meteor.subscribe('TconstructivosPublish', null);  
});

Template.tconstructivosList.helpers({
	tconstructivosVar: function() {
		return Tconstructivos.find({},{sort: {nombre: 1}});
	}
})

Template.tconstructivosShow.onCreated(function() {
	var Id = FlowRouter.getParam('id');
    Meteor.subscribe('TconstructivosPublish', Id);  
});

Template.tconstructivosShow.helpers({
	tconstructivoVar: function() {
		var Id = FlowRouter.getParam('id');
		return Tconstructivos.findOne({"_id": Id});
	},
	tconstructivoFile: function() {
		var Id = FlowRouter.getParam('id');
		var file = Tconstructivos.findOne({"_id": Id}).file;
		file = "/images/" + file + ".png";
		return file;
	}
})

Template.tconstructivosUpdate.onCreated(function() {
	var proyId = FlowRouter.getParam('id');
    Meteor.subscribe('TconstructivosPublish', proyId);  
});

Template.tconstructivosUpdate.helpers({
	tconstructivoVar: function() {
		var proyId = FlowRouter.getParam('id');
		return Tconstructivos.findOne({"_id": proyId});
	}
})