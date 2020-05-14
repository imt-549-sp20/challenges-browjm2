function renderMovies(movie_list) {
  var tbody = document.querySelector("tbody"); //selecting the tbody element
  tbody.textContent = ""; //clearing any existing content in the body
  movie_list.forEach(function (movie) {
    tbody.appendChild(renderMovie(movie));
  });
}

function renderMovie(movies) {
  MOVIES.sort(function (n1, n2) {
    return n2.revenue - n1.revenue; // revenue is the element in the MOVIES array that we are targeting
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

function renderMovieProp(value, nonNumeric) {
  var td = document.createElement("td"); //Creating the new < td > element
  td.textContent = value; //setting the td contents to the value parameter
  if (nonNumeric) {
    //If the values in < td > should be formatted as non-numeric....
    td.classList.add("non-numeric"); //add the css "non-numeric" style class
  }
  return td; //return the new < td > element to the caller
}

renderMovies(MOVIES);
