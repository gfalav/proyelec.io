Puntos = new Mongo.Collection("puntos");

PuntoSchema = new SimpleSchema({
    "proyectoId":     {type: String, label: "proyectoId", max: 50},
	"nombre":         { type: String, label: "Nombre:", max: 50 },
    "secuencia":      { type: Number, label: "Secuencia", max: 999999 },
    "latitud":        { type: Number, label: "Latitud", max: 999999, decimal: true },
    "longitud":       { type: Number, label: "Longitud", max: 999999, decimal: true },
    "distancia":      { type: Number, label: "Distancia", max: 999999, decimal: true },
    "angulo":         { type: Number, label: "Angulo", max: 999999, decimal: true },
	"fAlta":       { type: Date, label: "Fecha de Alta",optional: true },
	"fUM":         { type: Date, label: "Fecha Ult Movimiento", optional: true },
	"usuario":     { type: String, label: "usuario:", max: 50, optional: true, defaultValue: ""  }
});

Puntos.attachSchema(PuntoSchema);