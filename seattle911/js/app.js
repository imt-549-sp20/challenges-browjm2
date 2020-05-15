// API endpoint for JSON response
const seattle911API =
  "https://data.seattle.gov/resource/grwu-wqtk.json?$where=datetime%20is%20not%20null&$order=datetime%20desc&$limit=50";

// Create the map object, set the view and zoom
const mymap = L.map("mapid").setView([47.604311, -122.331734], 11.5);

// Add the background tiles to the map
L.tileLayer(
  "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken:
      "pk.eyJ1Ijoibmlja2RlbmFyZGlzIiwiYSI6ImNqaGRla2pjMjBvYXgzNm13Yzc3aGIwM3kifQ.G2Tr-B7ppCNdj6xuM0Qc5A"
  }
).addTo(mymap);

// Parse the JSON response
function parseAsJSON(response) {
  // Return the JSON from the response
}

// What to do if there is an error
function handleError(err) {
  // Show the error to the user
  console.error(err);
  alert(err.message);
}

// Render the map on screen
function renderMap(data) {
  // `data` is an array of objects
  // Add each object to the map if `latitude` and `longitude` are available
  // Use `bindPopup()` to add `type`, `datetime`, and `address` properties
}

// Fetch the API datasource, parse JSON, render the map, and handle errors