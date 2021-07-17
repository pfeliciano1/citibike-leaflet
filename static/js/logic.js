// var newYorkCoords = [40.73, -74.0059];
// var mapZoomLevel = 12;

// Create the createMap function.
function createMap(bikeLayer)
  // Create the tile layer that will be the background of our map.
let background = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});
  // Create a baseMaps object to hold the lightmap layer.
let baseMaps = {
    "Street Map": background
};
  // Create an overlayMaps object to hold the bikeStations layer.
  let overlayMaps = {
    "Bike Stations": 
  }
  // Create the map object with options.
  // Create a layer control, and pass it baseMaps and overlayMaps. Add the layer control to the map.
let myMap = L.map("map", {
  center: [40.73, -74.0059],
  zoom: 12,
  layers: [background, bikeLayer]
});

L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(myMap);
  // Create the createMarkers function.
function createMarkers(response) {}
  // Pull the "stations" property from response.data.
  let stations = response.data.stations;
  console.log(stations);
  // Initialize an array to hold the bike markers.
  let bikeMarkers = [];
  // Loop through the stations array.
  stations.forEach(station => {
    // For each station, create a marker, and bind a popup with the station's name.
    let bikeMerker = L.marker([stations.lat, stations.lon])
    .bindPopup
    // Add the marker to the bikeMarkers array.
  // Create a layer group that's made from the bike markers array, and pass it to the createMap function.
// Perform an API call to the Citi Bike API to get the station information. Call createMarkers when it completes.
d3.json(url).then(createMarkers);



