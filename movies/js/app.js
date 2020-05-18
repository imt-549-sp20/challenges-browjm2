function renderMovies(movie_list) {
  var tbody = document.querySelector("tbody"); //selecting the tbody element
  tbody.textContent = ""; //clearing any existing content in the body
  movie_list.forEach(function (movie) {
    //for each movie
    tbody.appendChild(renderMovie(movie));
  });
}

function renderMovie(movies) {
  MOVIES.sort(function (record1, record2) {
    return record2.revenue - record1.revenue; // revenue is the element in the MOVIES array that we are targeting
  }); //to sort all the movies by revenue in descending order.

  var tr = document.createElement("tr"); //Creating the < tr > element
  var Prop = renderMovieProp(movies.title, true);
  var Prop2 = renderMovieProp(movies.revenue, false);
  var Prop3 = renderMovieProp(movies.rating, false);

  tr.appendChild(Prop); //Creating and appending the < td > elements to the < tr > and aded "true" because this is a non-numeric item
  tr.appendChild(Prop2); //Creating and appending the < td > elements to the < tr >
  tr.appendChild(Prop3); //Creating and appending the < td > elements to the < tr >
  return tr;
}

function renderMovieProp(content, nonNumeric) {
  var td = document.createElement("td"); //Creating the new < td > element
  td.textContent = content; //setting the td contents to the content parameter
  if (nonNumeric) {
    //If the values in < td > should be formatted as non-numeric....
    td.classList.add("non-numeric"); //add the css "non-numeric" style class
  }
  return td; //return the new < td > element to the caller
}

var filterInput = document.getElementById("movie-filter"); // Selects the filter form field where users can type
//SHould this movie be in our list?
function isMovieFound(movie) {
  //Get the user input
  var userInput = filterInput.value;
  // Make the input lower case
  var lowercaseUserInput = userInput.toLowerCase();
  //make the movie title lower case so we can compare titles
  var lowercaseTitle = movie.title.toLowerCase();
  //check is the user input is in the lowercase movie title
  if (lowercaseTitle.indexOf(lowercaseUserInput) >= 0) {
    //see if the lowercase title contains the user input from the user input field.
    return true; //if it matches we will return the movie in the results
  } else {
    return false; //if it does not match then we won't return the movie in the results
  }
}
//Listen for when a user types into the filter field.
filterInput.addEventListener("input", function () {
  //find any movies that match the user input
  var filtered_movies = MOVIES.filter(isMovieFound);
  //update the movie table with the new list
  renderMovies(filtered_movies);
});

renderMovies(MOVIES);
