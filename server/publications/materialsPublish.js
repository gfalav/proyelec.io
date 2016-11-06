Meteor.publish('MaterialsPublish', function(Id) {
	if (!Id) {
		return Materials.find();
	} else {
		return Materials.find({"_id": Id});
	}

})