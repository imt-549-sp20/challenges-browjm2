var nameInput = document.getElementById("name-input"); //variable to select name input area. tested with console.log(nameInput)
var nameOutput = document.getElementById("name-output"); //variable to select name output span area. tested with console.log(nameOutput)
nameInput.addEventListener("keyup", function () {
  //keyup event will run this function every time a key released
  var text = nameInput.value; // setting a new text variable that is equal to the value in the nameInput that I will assign to nameOutput
  nameOutput.textContent = text; //sets the text content area of the nameOutput element to "text" which is defined in the above line.
});

var animationSelect = document.getElementById("animation-select"); //console.log works pulls up the class form-control and all the option values
var animateButton = document.getElementById("animate"); //console.log works. pulls up the animate button script.
var helloText = document.getElementById("welcome"); //console.log works. selects all the text in the H1 header with the ID of welcome including the name-input

animateButton.addEventListener("click", function () {
  helloText.classList.add(animationSelect.value); //If you console.log(helloText.classlist.value) you get a list of all the dropdown selections. This function adds the selected animation value to the helloText value
  helloText.addEventListener(
    //We need to add another event listener to remove the function above so we can select a new animation and try it.
    "animationend", //animation-end is a JS built in function (like click, add, and remove)
    function () {
      helloText.classList.remove(animationSelect.value); //Our function removes the animation value from the helloText
    },
    { once: true } // the entire function is only allowed to run once
  );
});
