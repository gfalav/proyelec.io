Meteor.startup(function() {  
	GoogleMaps.load({key: 'AIzaSyC_w8ZKICz_EKvpPrSJYNAVjlxRhdVQftE'});
  Meteor.subscribe('PuntosPublish', FlowRouter.getParam('proyectoId'));  
});

Template.map.helpers({  
  mapOptions: function() {
    if (GoogleMaps.loaded()) {
      return {
        center: new google.maps.LatLng(-33.30213065004473, -66.3369297994359),
        zoom: 12
      };
    }
  },
  puntosarr: function() {
    Meteor.subscribe('PuntosPublish', FlowRouter.getParam('proyectoId'));  
    var proyectoId = FlowRouter.getParam('proyectoId');
    return Puntos.find({"proyectoId": proyectoId}, {sort:{secuencia: 1}});

  }
});

Template.puntoDetalle.helpers({
  latitud: function() {
    return this.latitud.toFixed(6);
  },
  longitud: function() {
    return this.longitud.toFixed(6);
  },
  angulo: function() {
    return this.angulo.toFixed(1);
  },
  distancia: function() {
    return this.distancia.toFixed(1);
  } 



})

Template.map.onCreated(function() {  

  GoogleMaps.ready('map', function(map) {
    Meteor.subscribe('PuntosPublish', FlowRouter.getParam('proyectoId'));  

    grafica(map);

  	google.maps.event.addListener(map.instance, 'click', function(event) {
      var proyectoId = FlowRouter.getParam('proyectoId');
  		var maxPunto = Puntos.findOne({"proyectoId": proyectoId}, {sort:{secuencia: -1}});
  		var maxSecuencia=0;

  		if (maxPunto == null) {
  			maxSecuencia=0;
  		} else {
  			maxSecuencia = maxPunto.secuencia;
  		}

     	Puntos.insert({ proyectoId: proyectoId,
     					        nombre: "Punto-" + (maxSecuencia + 10).toString(),
     					        secuencia: maxSecuencia + 10,
     					        angulo: 0, distancia: 0,
     				  	      latitud: event.latLng.lat(), 
     				  	      longitud: event.latLng.lng() });
     	grafica(map);
    });

  });
});

function grafica(map) {
    var proyectoId = FlowRouter.getParam('proyectoId');
    var puntosarr = Puntos.find({"proyectoId": proyectoId}, {sort:{secuencia: 1}});
    var trazaarr = [];

    puntosarr.forEach(function(punto) {
    	var marker = new google.maps.Marker({
    		map: map.instance,
    		draggable: true,
    		animation: google.maps.Animation.DROP,
    		position: {lat: punto.latitud, lng: punto.longitud}
  		});

  		trazaarr.push({lat: punto.latitud, lng: punto.longitud});
  		map.instance.setCenter(new google.maps.LatLng(punto.latitud, punto.longitud));
    });

    var traza = new google.maps.Polyline({
	    path: trazaarr,
	    strokeColor: "#FF0000",
	    strokeOpacity: 1.0,
	    strokeWeight: 2
	});
	traza.setMap(map.instance);

	return true;
}