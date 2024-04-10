// find all planet buttons
var planetButtonElements = document.querySelectorAll(".planet-button");
planetButtonElements.forEach(addPlanetButtonListener);

// add an event listener for each button
function addPlanetButtonListener(planetButtonElement) {
    planetButtonElement.addEventListener("click", planetButtonClick);
}

// when a button has been clicked, show its content
function planetButtonClick(event) {
    var clickedButton = event.currentTarget;

    // the rest of the code will go here...
    var detailsElementCssSelector = ".planet-details-" + clickedButton.textContent;
    var detailsElement = document.querySelector(detailsElementCssSelector);
    // remove selected state from all details elements
    var planetDetailElements = document.querySelectorAll(".planet-details");
    planetDetailElements.forEach(updatePlanetDetailState);
// add selected state just to the clicked button
    detailsElement.classList.add("currently-selected-planet");
    function updatePlanetDetailState(planetDetailElement) {
        planetDetailElement.classList.remove("currently-selected-planet");
    }
}

