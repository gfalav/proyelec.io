Proyectos = new Mongo.Collection("proyectos");

ProyectoSchema = new SimpleSchema({
	"nombre":         { type: String, label: "Nombre:", max: 50 },
    "comitente":      { type: String, label: "Comitente", max: 50 },
    "constructora":    { type: String, label: "Constructora", max: 50 },
    "proyectista":    { type: String, label: "Proyectista", max: 50 },
    "ubicacion":      { type: String, label: "Ubicación", max: 50 },
    "descripcion":    { type: String, label: "Descripción", max: 50 },
    "expediente ":    { type: String, label: "Expediente", max: 50 },
	"fAlta":       { type: Date, label: "Fecha de Alta",optional: true },
	"fUM":         { type: Date, label: "Fecha Ult Movimiento", optional: true },
	"fBaja":       { type: Date, label: "Fecha Baja", optional: true },
	"usuario":     { type: String, label: "usuario:", max: 50, optional: true, defaultValue: ""  }
});

Proyectos.attachSchema(ProyectoSchema);