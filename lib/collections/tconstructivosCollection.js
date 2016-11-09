Tconstructivos = new Mongo.Collection("tconstructivos");

TconstructivoSchema = new SimpleSchema({
	"nombre":      { type: String, label: "Name:", max: 50 },
    "file":        { type: String, label: "File", max: 50 }
});

Tconstructivos.attachSchema(TconstructivoSchema);