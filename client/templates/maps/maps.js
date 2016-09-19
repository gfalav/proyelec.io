
Meteor.startup(function() {  
  GoogleMaps.load({key: 'AIzaSyC_w8ZKICz_EKvpPrSJYNAVjlxRhdVQftE'});
});

Template.map.helpers({  
  mapOptions: function() {
    if (GoogleMaps.loaded()) {
      return {
        center: new google.maps.LatLng(-37.8136, 144.9631),
        zoom: 8
      };
    }
  }
});

Template.map.onCreated(function() {  
  GoogleMaps.ready('map', function(map) {
    console.log("I'm ready!");

	google.maps.event.addListener(map.instance, 'click', function(event) {
      	Puntos.insert({ proyectoId: "proyecto",
      					nombre: "punto",
      					secuencia: 10,
      					angulo: 0, distancia: 0,
       				  	latitud: event.latLng.lat(), 
       				  	longitud: event.latLng.lng() });
    });

  });
});