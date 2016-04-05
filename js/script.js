"use strict";

function initMap() {
  var mapDiv = document.getElementById('search__map');
  var myLatLng = {lat: 34.9032483, lng: -111.7539813};
  var map = new google.maps.Map(mapDiv, {
    center: myLatLng,
    scrollwheel: false,
    zoom: 7
  });
  var image = "img/icons/icon-map-marker.svg";
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });
}
