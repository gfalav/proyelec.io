
Meteor.startup(function() {  
	Meteor.subscribe('PuntosPublish', "proyecto");  
	GoogleMaps.load({key: 'AIzaSyC_w8ZKICz_EKvpPrSJYNAVjlxRhdVQftE'});
});

Template.map.helpers({  
  mapOptions: function() {
    if (GoogleMaps.loaded()) {
      return {
        center: new google.maps.LatLng(-33.30213065004473, -66.3369297994359),
        zoom: 12
      };
    }
  }
});

Template.map.onCreated(function() {  

  GoogleMaps.ready('map', function(map) {
    console.log("I'm ready!");

	google.maps.event.addListener(map.instance, 'click', function(event) {
		var maxPunto = Puntos.findOne({}, {sort:{secuencia: -1}});
		var maxSecuencia=0;

		if (maxPunto == null) {
			maxSecuencia=0;
		} else {
			maxSecuencia = maxPunto.secuencia;
		}

      	Puntos.insert({ proyectoId: "proyecto",
      					nombre: "Punto-" + (maxSecuencia + 10).toString(),
      					secuencia: maxSecuencia + 10,
      					angulo: 0, distancia: 0,
       				  	latitud: event.latLng.lat(), 
       				  	longitud: event.latLng.lng() });
    });

  });
});