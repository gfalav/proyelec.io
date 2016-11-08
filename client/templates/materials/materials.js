Template.materialsList.onCreated(function() {
    Meteor.subscribe('MaterialsPublish', null);  
});

Template.materialsList.helpers({
	materialsVar: function() {
		return Materials.find({},{sort: {nombre: 1}});
	}
})

Template.materialsShow.onCreated(function() {
	var Id = FlowRouter.getParam('id');
    Meteor.subscribe('MaterialsPublish', Id);  
});

Template.materialsShow.helpers({
	materialVar: function() {
		var Id = FlowRouter.getParam('id');
		return Materials.findOne({"_id": Id});
	},
	materialFile: function() {
		var Id = FlowRouter.getParam('id');
		var file = Materials.findOne({"_id": Id}).file;
		file = "/pdfs/" + file + ".pdf";
		return file;
	}
})

Template.materialsUpdate.onCreated(function() {
	var proyId = FlowRouter.getParam('id');
    Meteor.subscribe('MaterialsPublish', proyId);  
});

Template.materialsUpdate.helpers({
	materialVar: function() {
		var proyId = FlowRouter.getParam('id');
		return Materials.findOne({"_id": proyId});
	}
})