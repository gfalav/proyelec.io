Template.materialsList.onCreated(function() {
    Meteor.subscribe('MaterialsPublish', null);  
});

Template.materialsList.helpers({
	materialsVar: function() {
		return Materials.find();
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
		return Materials.findOne({"_id": Id}).file;
	}
})
