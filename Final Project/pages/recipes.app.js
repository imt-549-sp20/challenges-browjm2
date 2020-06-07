function renderRecipes(recipe_list) {
  var tbody = document.querySelector("tbody"); //selecting the tbody element
  tbody.textContent = ""; //clearing any existing content in the body
  recipe_list.forEach(function (recipe) {
    //for each recipe
    tbody.appendChild(renderRecipe(recipe));
  });
}

function renderRecipe(recipes) {
  RECIPES.sort(function (record1, record2) {
    return record2.time - record1.time; // revenue is the element in the MOVIES array that we are targeting
  }); //to sort all the recipes by time in descending order.

  var tr = document.createElement("tr"); //Creating the < tr > element
  var Prop = renderRecipeProp(recipes.title, true);
  var Prop2 = renderRecipeProp(recipes.time, false);
  var Prop3 = renderRecipeProp(recipes.rating, false);

  tr.appendChild(Prop); //Creating and appending the < td > elements to the < tr > and aded "true" because this is a non-numeric item
  tr.appendChild(Prop2); //Creating and appending the < td > elements to the < tr >
  tr.appendChild(Prop3); //Creating and appending the < td > elements to the < tr >
  return tr;
}

function renderRecipeProp(content, nonNumeric) {
  var td = document.createElement("td"); //Creating the new < td > element
  td.textContent = content; //setting the td contents to the content parameter
  if (nonNumeric) {
    //If the values in < td > should be formatted as non-numeric....
    td.classList.add("non-numeric"); //add the css "non-numeric" style class
  }
  return td; //return the new < td > element to the caller
}

var filterInput = document.getElementById("recipe-filter"); // Selects the filter form field where users can type
//SHould this recipe be in our list?
function isRecipeFound(recipe) {
  //Get the user input
  var userInput = filterInput.value;
  // Make the input lower case
  var lowercaseUserInput = userInput.toLowerCase();
  //make the movie title lower case so we can compare titles
  var lowercaseTitle = recipe.title.toLowerCase();
  //check is the user input is in the lowercase recipe title
  if (lowercaseTitle.indexOf(lowercaseUserInput) >= 0) {
    //see if the lowercase title contains the user input from the user input field.
    return true; //if it matches we will return the recipe in the results
  } else {
    return false; //if it does not match then we won't return the recipe in the results
  }
}
//Listen for when a user types into the filter field.
filterInput.addEventListener("input", function () {
  //find any recipes that match the user input
  var filtered_recipes = RECIPES.filter(isRecipeFound);
  //update the recipe table with the new list
  renderRecipes(filtered_recipes);
});

renderRecipes(RECIPES);
