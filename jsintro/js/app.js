"use strict";

/**
 * Using the MOVIES array, print to console.log()
 * the items in comments below:
 */

// Example
// First movie name
console.log('1. First movie name:');
console.log(MOVIES[0].title);
// Answer: The Royal Tenenbaums

console.log('-------');




// Last movie name
console.log('2. Last movie name:');

// Answer: Toy Story

console.log('-------');




// Count of movies
console.log('3. Count of movies:');

// Answer: 6

console.log('-------');




// Add a movie to the list
console.log('4. Add movie to list:');
const newMovie = {
    youtubeId: "eZbzbC9285I",
    title: "The Incredibles",
    released: 2004,
    rated: "PG",
    runningTime: 115,
    posterUrl: "https://i.imgur.com/YiMwigk.jpg"
};

console.log(MOVIES.length);
// Answer: 7

console.log('-------');





// List all movie titles
console.log('5. List all movie titles:');

// Answer:
// The Royal Tenenbaums
// Requiem for a Dream
// The Graduate
// 8½
// The Big Lebowski
// Toy Story
// The Incredibles

console.log('-------');





// Create the URL to view the trailer on YouTube
// https://www.youtube.com/watch?v={youtubeId}
console.log('6. Movie trailers on YouTube:');

// Answer:
// https://www.youtube.com/watch?v=8Eg6yIwP2vs
// https://www.youtube.com/watch?v=lgo3Hb5vWLE
// https://www.youtube.com/watch?v=hsdvhJTqLak
// https://www.youtube.com/watch?v=OtDQOF_pU8A
// https://www.youtube.com/watch?v=r_GCRFRcWxA
// https://www.youtube.com/watch?v=KYz2wyBy3kc
// https://www.youtube.com/watch?v=eZbzbC9285I

console.log('-------');





// How many movies are R rated?
console.log('7. "R" rated titles:');

// Answer: 5

console.log('-------');






// Total time of all movies
console.log('8. Total time of all movies:');

// Answer: 751

console.log('-------');





// Order the movies by year released from oldest to newest
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
console.log('9. Oldest to newest:');

// Answer: 
// 8½
// The Graduate
// Toy Story
// The Big Lebowski
// Requiem for a Dream
// The Royal Tenenbaums
// The Incredibles

console.log('-------');





// Create a function named "formattedName" 
// that takes the movie as a parameter and 
// outputs the movie in this format:
// "The Royal Tenenbaums", released in 2001, rated "R" and runs 92 minutes
console.log('10. Description of all movies:');


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

console.log('-------');