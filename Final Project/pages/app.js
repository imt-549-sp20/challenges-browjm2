// API endpoint for JSON response
const dcstoresAPI =
  "https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Business_and_Economic_Development_WebMercator/MapServer/4/query?where=1%3D1&outFields=STORENAME,ADDRESS,PHONE,X_COORD,Y_COORD,ZIPCODE&outSR=4326&f=json";

// Create the map object, set the view and zoom
const mymap = L.map("mapid").setView([38.89037, -77.03196], 11.5);

// Add the background tiles to the map
L.tileLayer(
  "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken:
      "pk.eyJ1Ijoibmlja2RlbmFyZGlzIiwiYSI6ImNqaGRla2pjMjBvYXgzNm13Yzc3aGIwM3kifQ.G2Tr-B7ppCNdj6xuM0Qc5A",
  }
).addTo(mymap);

// Parse the JSON response
function parseAsJSON(response) {
  // Return the JSON from the response
  return response.json();
}

// What to do if there is an error
function handleError(err) {
  // Show the error to the user
  console.error(err);
  alert(err.message);
}

// Render the map on screen
function renderMap(data) {
  console.log(data);
  //console.log(data);
  // `data` is an array of objects
  // Add each object to the map if `latitude` and `longitude` are available
  //data.forEach(function (features) {
  //console.log(features);//this isn't loading the data....not sure what is wrong.
  //if (location.x !== undefined && location.y !== undefined) {
  //var marker = L.marker([geometry.y, geometry.x]).addTo(mymap);
  //marker.bindPopup(
  // "<b>" + location.type + "</b><br>" + fromnow + "<br>" + location.address
  //);
} //);
//}
//});
// Use `bindPopup()` to add `type`, `datetime`, and `address` properties

// Fetch the API datasource, parse JSON, render the map, and handle errors
fetch(dcstoresAPI).then(parseAsJSON).then(renderMap).catch(handleError);
