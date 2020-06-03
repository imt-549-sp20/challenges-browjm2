// API endpoint for JSON response
const dcstoresAPI =
  "https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Business_and_Economic_Development_WebMercator/MapServer/4/query?where=1%3D1&outFields=STORENAME,ADDRESS,PHONE,X_COORD,Y_COORD,ZIPCODE&outSR=4326&f=json"; //Can change the limit to 500 (the "limit" is at the end of this url")

// Create the map object, set the view and zoom
const mymap = L.map("mapid").setView([38.8951, -77.0364], 11.5); //coordinates for Washington DC

// Add the background tiles to the map
L.tileLayer(
  "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken:
      "pk.eyJ1IjoiYnJvd25qbTIiLCJhIjoiY2them9xdnhnMDA2bTJ0bnh4ZmYwMHg0YiJ9.Y7Jd5iGZkJ-ERP-s1Mfj7A",
  }
).addTo(mymap);

//parse the JSON response
//function parseAsJson(response) {
//return the JSON from the response
//return response.json();
//}

//What do to if there is an error
//function handleError(err) {
//show the error to the user
//console.error(err);
//alert(err.message); //provides a "failed to fetch" error message
//}
// Render the map on screen
//function renderMap(data) {
// `data` is an array of objects
// Add each object to the map if `latitude` and `longitude` are available
//data.forEach(function (location) {
//if (location.longitude !== undefined && location.latitude !== undefined) {
//this makes sure there is some value in longitude and some value in latitude before we start to add this to the map
//var marker = L.marker([location.latitude, location.longitude]).addTo(
// mymap
//);
//var fromnow = moment(location.datetime).fromNow();

// Use `bindPopup()` to add `type`, `datetime`, and `address` properties
//marker.bindPopup(
//"<b>" + location.type + "</b><br>" + fromnow + "<br>" + location.address
//);
//}
//});
//}

// Fetch the API data source, parse JSON, render the map, and handle errors
//fetch(dcstoresAPI).then(parseAsJson).then(renderMap).catch(handleError); //Orders the page to run the following functions in order: fetching data source, then parsing the JSON, then call renderMap, otherwise we are going to catch any errors by handling that error
