var selectMantra = document.querySelector("#mantra-button");
var selectAffirmation = document.querySelector("#affirmation-button");
var submitButton = document.querySelector("#get-message");
var messageDisplay = document.querySelector('p');
var image = document.querySelector("#lil-human");
var clearButton = document.querySelector("#clear-message");

submitButton.addEventListener('click', displayMessage);
clearButton.addEventListener('click', clearMessage);


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function chooseMantra() {
  var currentMantra = mantras[getRandomIndex(mantras)];
  messageDisplay.innerText = currentMantra;
};

function chooseAffirmation() {
  var currentAffirmation = affirmations[getRandomIndex(affirmations)];
  messageDisplay.innerText = currentAffirmation;
};

function displayMessage() {
  event.preventDefault();
  messageDisplay.classList.remove("hidden");
  image.classList.add("hidden");
  if(selectMantra.checked === true) {
      clearButton.classList.remove("hidden");
      return chooseMantra();
  } else if (selectAffirmation.checked === true) {
      clearButton.classList.remove("hidden");
      return chooseAffirmation();
  } else {
      messageDisplay.classList.add("hidden");
      image.classList.remove("hidden");
  }
};

function clearMessage() {
  messageDisplay.classList.add("hidden");
  image.classList.remove("hidden");
  clearButton.classList.add("hidden");
  selectMantra.checked = false;
  selectAffirmation.checked = false;
};
