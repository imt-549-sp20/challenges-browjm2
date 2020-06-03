// API endpoint for JSON response
const seattle911API =
  "https://data.seattle.gov/resource/grwu-wqtk.json?$where=datetime%20is%20not%20null&$order=datetime%20desc&$limit=50"; //Can change the limit to 500 (the "limit" is at the end of this url")

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

//parse the JSON response
function parseAsJson(response) {
  //return the JSON from the response
  return response.json();
}

//What do to if there is an error
function handleError(err) {
  //show the error to the user
  console.error(err);
  alert(err.message); //provides a "failed to fetch" error message
}
// Render the map on screen
function renderMap(data) {
  // `data` is an array of objects
  // Add each object to the map if `latitude` and `longitude` are available
  data.forEach(function (location) {
    if (location.longitude !== undefined && location.latitude !== undefined) {
      //this makes sure there is some value in longitude and some value in latitude before we start to add this to the map
      var marker = L.marker([location.latitude, location.longitude]).addTo(
        mymap
      );
      var fromnow = moment(location.datetime).fromNow();

      // Use `bindPopup()` to add `type`, `datetime`, and `address` properties
      marker.bindPopup(
        "<b>" + location.type + "</b><br>" + fromnow + "<br>" + location.address
      );
    }
  });
}

// Fetch the API data source, parse JSON, render the map, and handle errors
fetch(seattle911API).then(parseAsJson).then(renderMap).catch(handleError); //Orders the page to run the following functions in order: fetching data source, then parsing the JSON, then call renderMap, otherwise we are going to catch any errors by handling that error
