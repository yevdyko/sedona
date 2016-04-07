"use strict";

// google maps

function initMap() {
  var mapDiv = document.getElementById("search__map");
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

// hamburger

var nojs = document.querySelector(".no-js");
var menu = document.querySelector(".menu");
var hamburger = document.querySelector(".hamburger");
var close = document.querySelector(".is-active");

document.addEventListener("DOMContentLoaded", function(event) {
  nojs.classList.remove("no-js");
});

if (hamburger != null) {
  hamburger.addEventListener("click", function(event) {
    event.preventDefault();
    menu.classList.toggle("menu--show");
    hamburger.classList.toggle("is-active");
  });
}
