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
      "pk.eyJ1Ijoibmlja2RlbmFyZGlzIiwiYSI6ImNqaGRla2pjMjBvYXgzNm13Yzc3aGIwM3kifQ.G2Tr-B7ppCNdj6xuM0Qc5A",
  }
).addTo(mymap);
// Render the map on screen
const dataLocation = []; //making my own array within an array
var locationTotal = 0; //etting the variable of dataLocation to zero
function renderMap(data) {
  for (var i = 0; i < data.length; i++) {
    dataLocation.push(data[i].latitude); //I thought this was pushing this data
    dataLocation.push(data[i].longitude); //and this data into dataLocation
    if (dataLocation.includes("", i)) {
      //so that any sting inside of there counted
      locationTotal++;
    }
  }
  console.log(locationTotal); //gives me 0 - I don't understand why?

  // `data` is an array of objects
  // Add each object to the map if `latitude` and `longitude` are available
  // Use `bindPopup()` to add `type`, `datetime`, and `address` properties
}
// Fetch the API data source, parse JSON, render the map, and handle errors
var dataSrc =
  "https://data.seattle.gov/resource/grwu-wqtk.json?$where=datetime%20is%20not%20null&$order=datetime%20desc&$limit=50"; //creating a variable for the data source which is the url we want to pull data from
var Map = [];
function parseAsJson(response) {
  //parse the JSON response
  return response.json(); //return the JSON from the response
}
function callRenderMap(data) {
  Map = data;
  renderMap(data);
}
function handleError(err) {
  //What do to if there is an error
  console.error(err); //show the error to the user
  alert(err.message); //provides a "failed to fetch" error message
}
fetch(dataSrc).then(parseAsJson).then(callRenderMap).catch(handleError); //fetching data source, then parsing the JSON, then call RenderMaps, otherwise we are going to catch any errors by handling that error
