"use strict";

/**
 * Using the MOVIES array, print to console.log()
 * the items in comments below:
 */

// Example
// 1. First movie name
console.log("1. First movie name:");
console.log(MOVIES[0].title); //From the example video I added the title of the first movie
// Answer: The Royal Tenenbaums

// 2. Last movie name
console.log("2. Last movie name:");
console.log(MOVIES[5].title); //I added the code for getting the last movie up. Last movie is array position no. 5 and I want the title so I added .title
// Answer: Toy Story

// 3. Count of movies
console.log("3. Count of movies:");
console.log(MOVIES.length); //Code to get the number of movie entries .length is a JS built in feature to return a number of items in an array
// Answer: 6

// 4. Add a movie to the list
console.log("4. Add movie to list:");
const newMovie = {
  youtubeId: "eZbzbC9285I",
  title: "The Incredibles",
  released: 2004,
  rated: "PG",
  runningTime: 115,
  posterUrl: "https://i.imgur.com/YiMwigk.jpg",
};
MOVIES.push(newMovie); //pushing one new entry into the array. .push is a built in JS function to add the array with a const. of newMovie into our current array.
console.log(MOVIES.length); //need this code to ask the computer to give us the new length of our MOVIES array with the addition film we pushed in above.
// Answer: 7

// 5. List all movie titles
console.log("5. List all movie titles:");
for (var i = 0; i < MOVIES.length; i++) {
  //This is a loop which starts at array position 0 and runs until variable i < the MOVIES array length (so for an array with 7 items there are 0-6 positions. i++ tells the loop to repeat until the conditions are met (i<MOVIES array length))
  console.log(MOVIES[i].title); //to get our answer to spit out, we console.log [i] which is our loop. This runs our for loop.
}
// Answer:
// The Royal Tenenbaums
// Requiem for a Dream
// The Graduate
// 8½
// The Big Lebowski
// Toy Story
// The Incredibles

// 6. Create the URL to view the trailer on YouTube
// https://www.youtube.com/watch?v={youtubeId}
console.log("6. Movie trailers on YouTube:");
MOVIES.forEach((movie) => {
  //this is a "for each" because we want a URL for each movie (movie is what we are calling this "for each" call)
  console.log("https://www.youtube.com/watch?v=" + movie.youtubeId); // answer will add the text string "https://....." in front of each youtubeID for each MOVIE because we are calling the "movie" for each loop here.
});

// Answer:
// https://www.youtube.com/watch?v=8Eg6yIwP2vs
// https://www.youtube.com/watch?v=lgo3Hb5vWLE
// https://www.youtube.com/watch?v=hsdvhJTqLak
// https://www.youtube.com/watch?v=OtDQOF_pU8A
// https://www.youtube.com/watch?v=r_GCRFRcWxA
// https://www.youtube.com/watch?v=KYz2wyBy3kc
// https://www.youtube.com/watch?v=eZbzbC9285I

// 7. How many movies are R rated?
console.log('7. "R" rated titles:');
//function isratedR(number) {
//    return MOVIES;
//}
//console.log(MOVIES.findIndex(isratedR));
const RratedMovies = []; //making our own array within an array called RratedMovies
var RratedTotal = 0; //Set the variable of RratedTotal to zero
for (let i = 0; i < MOVIES.length; i++) {
  //here is our loop again because we want to go through each movie in our MOVIES array to find the R rated ones
  RratedMovies.push(MOVIES[i].rated); //as our loop runs, we want it to push all the ratings into our RratedMovies array following the conditions below
  if (RratedMovies.includes("R", i)) {
    //This is how we decide which ratings go into our new array. We are looking for only those movies in our "i" variable with the text string "R"
    RratedTotal++; //anything meeting the above criteria goes into our RratedTotal variable
  }
  //else
  //console.log('Not R');
}
//console.log('R rated movies');
console.log(RratedTotal); //gives us the total number of movies that are R rated

// Answer: 5

// 8. Total time of all movies
console.log("8. Total time of all movies:");
var TotalTime = 0; //I named this variable
var RunTime = []; //I named this variable too
for (let i = 0; i < MOVIES.length; i++) {
  //loop, starting with movie in position 0 and continuing until i is less than the total number of movies
  RunTime.push(MOVIES[i].runningTime); //The RunTIme is a new list created as we push the runningTime values from the MOVIES array. This will be a list of numbers
  TotalTime += RunTime[i]; //The variable TotalTime is the sum of all the RunTime numbers
}
console.log(TotalTime); //Asking program to give me the TotalTime by doing the RunTime.push function for all the movies in MOVIES
// Answer: 751

// 9. Order the movies by year released from oldest to newest
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
console.log("9. Oldest to newest:");

MOVIES.sort(function (a, b) {
  return a.released - b.released; // released is the element in the MOVIES array that we are targeting
}); //to sort all the movies by release date. Note there is no command.log to do anything so if you stop here nothing shows up in the console.
MOVIES.forEach((sorted) => {
  //for each sorted element (which will be each movie)
  console.log(sorted.title); //this tells the program to return only the titles in sorted order as defined above (by release date)
});
// Answer:
// 8½
// The Graduate
// Toy Story
// The Big Lebowski
// Requiem for a Dream
// The Royal Tenenbaums
// The Incredibles

// 10. Create a function named "formattedName"
// that takes the movie as a parameter and
// outputs the movie in this format:
// "The Royal Tenenbaums", released in 2001, rated "R" and runs 92 minutes
console.log("10. Description of all movies:");

function formattedName(movie) {
  //This is the function.
  console.log(
    //What follows is the action the function will perform
    movie.title + //give the movie title
    " was released in " + // plus the string here. Spaces and other punctuation need to be added before and after strings as necessary
    movie.released + // then the release year
    ", rated " + //plus this string
    movie.rated + //then the rating
    " and runs " + //plus this string
    movie.runningTime + //then the run time
      " minutes" //plus this string
  );
}
MOVIES.forEach(function (movie) {
  formattedName(movie);
});
// Answer:
// "8½" was released in 1963, rated "R" and runs 138 minutes
// "The Graduate" was released in 1967, rated "R" and runs 106 minutes
// "Toy Story" was released in 1995, rated "G" and runs 81 minutes
// "The Big Lebowski" was released in 1998, rated "R" and runs 117 minutes
// "Requiem for a Dream" was released in 2000, rated "R" and runs 102 minutes
// "The Royal Tenenbaums" was released in 2001, rated "R" and runs 92 minutes
// "The Incredibles" was released in 2004, rated "PG" and runs 115 minutes

console.log("-------");
