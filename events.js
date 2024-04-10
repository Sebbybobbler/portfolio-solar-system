// find all button elements
var planetButtonElements = document.querySelectorAll(".planet-button");

// loop through all button elements
planetButtonElements.forEach(addPlanetButtonListener);

// add an event listener to each button element
function addPlanetButtonListener(planetButtonElement) {
  planetButtonElement.addEventListener("click", planetButtonClick);
}

// on click, do something with the selected button
function planetButtonClick(event) {
  // find the HTML element that was clicked
  var clickedButton = event.currentTarget;

  // update the result
  var resultElement = document.querySelector(".result");
  resultElement.textContent = "You selected " + clickedButton.textContent;

  // Also display the date on a particular planet a button was clicked.
  //Define Today's earth day and month
  const currentDate = new Date();
  const day = 30* Number(currentDate.getMonth()) + Number(currentDate.getDate());
  let period;
  switch (clickedButton.textContent) {
    case "Mercury":
      period = 87.97;
      break;
    case "Venus":
      period = 224.7;
      break;
    case "Earth":
      period = 365;
      break;
    case "Mars":
      period = 686.98;
      break;
    case "Jupiter":
      period = 4328.9;
      break;
    case "Saturn":
      period = 10752.9;
      break;
    case "Uranus":
      period = 30663;
      break;
    case "Neptune":
      period = 60148;
      break;
  }
  const newDayInMilliseconds= (day/period)*365*24*60*60*1000;
  const beginningOfYearInMilliseconds = Date.parse(new Date("January 1, 2024 00:00:00"));
  const dateOnPlanet = new Date(beginningOfYearInMilliseconds + newDayInMilliseconds); 
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  var dateElement = document.querySelector(".date");
  dateElement.textContent =
    "The date on " +
    clickedButton.textContent +
    " is:" +
    dateOnPlanet.toLocaleDateString("en-GB", options) + "*";

  var asideElement = document.querySelector(".aside");
  asideElement.textContent = "* How far into their own respective year each planet is, assuming circular orbits."  
  // remove selected state from all buttons
  planetButtonElements.forEach(updateClickedButtonState);

  // add selected state just to the clicked button
  clickedButton.classList.add("currently-selected-button");
}

// remove the currently selected state for all buttons
function updateClickedButtonState(planetButtonElement) {
  planetButtonElement.classList.remove("currently-selected-button");
}
