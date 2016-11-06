Materials = new Mongo.Collection("materials");

MaterialSchema = new SimpleSchema({
	"nombre":      { type: String, label: "Name:", max: 50 },
    "file":        { type: String, label: "File", max: 50 }
});

Materials.attachSchema(MaterialSchema);