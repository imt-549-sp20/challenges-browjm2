var nameInput = document.getElementById("name-input"); //variable to select name input area. tested with console.log(nameInput)
var nameOutput = document.getElementById("name-output"); //variable to select name output span area. tested with console.log(nameOutput)
var text = nameInput.value;
nameInput.addEventListener("keyup", function () {
  //keyup event will run this function every time a key released
  var text = nameInput.value; // setting a new text variable that is equal to the value in the nameInput that I will assign to nameOutput
  nameOutput.textContent = text; //sets the text content area of the nameOutput element to "text" which is defined in the above line.
});

//Created a variable for each animation type by selecting each form option
var animateBounce = document.getElementsByTagName("option")[0];
var animateFlash = document.getElementsByTagName("option")[1];
var animatePulse = document.getElementsByTagName("option")[2];
var animateRubberBand = document.getElementsByTagName("option")[3];
var animateShake = document.getElementsByTagName("option")[4];
var animateSwing = document.getElementsByTagName("option")[5];
var animateTada = document.getElementsByTagName("option")[6];
var animateWobble = document.getElementsByTagName("option")[7];
var animateJello = document.getElementsByTagName("option")[8];

var animationSelect = document.getElementById("animation-select"); //console.log works pulls up the class form-control and all the option values
var animateButton = document.getElementById("animate"); //console.log works. pulls up the animate button script.


animateButton.addEventListener("click", function() {
  If (animationSelect = animateBounce) nameOutput.classList.add("bounce");
    nameOutput.addEventListener("animationend", function () {
      nameOutput.classList.remove("bounce"); {once: true});
    })};
