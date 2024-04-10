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
  const day = Number(
    currentDate.toLocaleDateString("en-GB", {
      day: "2-digit",
    })
  );
  const month = Number(
    currentDate.toLocaleDateString("en-GB", {
      month: "numeric",
    })
  );
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
  console.log(period);
  let otherPlanetYear = 2024;
  let earthDays = 30 * month + day;
  let inEarthDays = (period / 365) * earthDays;
  if (period < 365) {
    otherPlanetYear = Math.floor(2024 + 365 / period);
  }
  console.log(inEarthDays);
  let otherPlanetMonths = Math.floor(((inEarthDays / period) * 365) / 12);
  if (otherPlanetMonths === 0) {
    otherPlanetMonths++;
  }
  if (otherPlanetMonths > 12 && period < 365) {
    otherPlanetYear = otherPlanetYear + Math.floor(otherPlanetMonths / 12);
    otherPlanetMonths = otherPlanetMonths % 12;
  }
  let otherPlanetDays = Math.ceil(((inEarthDays / period) * 365) % 30);
  var dateElement = document.querySelector(".date");
  dateElement.textContent =
    "The date on " +
    clickedButton.textContent +
    " is:" +
    otherPlanetDays +
    "/" +
    otherPlanetMonths +
    "/" +
    otherPlanetYear;
  console.log(period);

  // remove selected state from all buttons
  planetButtonElements.forEach(updateClickedButtonState);

  // add selected state just to the clicked button
  clickedButton.classList.add("currently-selected-button");
}

// remove the currently selected state for all buttons
function updateClickedButtonState(planetButtonElement) {
  planetButtonElement.classList.remove("currently-selected-button");
}

function otherPlanetDate(period) {
  let otherPlanetYear = 2024;
  let inEarthDays = ((30 * month + day) / period) * 365;
  if (inEarthDays > 365) {
    inEarthDays = inEarthDays - 365;
    otherPlanetYear++;
  }
  console.log(inEarthDays);
  let otherPlanetMonths = Math.floor(inEarthDays / 30);
  let otherPlanetDays = Math.floor(inEarthDays - otherPlanetMonths * 30);
  console.log(inEarthDays);
  return (
    "The date on other planet is " +
    otherPlanetDays +
    "/" +
    otherPlanetMonths +
    "/" +
    otherPlanetYear
  );
}
