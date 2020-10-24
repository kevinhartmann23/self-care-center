var selectMantra = document.querySelector("#mantra-button");
var selectAffirmation = document.querySelector("#affirmation-button");
var submitButton = document.querySelector("#get-message");
var messageDisplay = document.querySelector('p');
var image = document.querySelector("#lil-human");
var clearButton = document.querySelector("#clear-message");
var favoriteButton = document.querySelector(".fav-button");
var showFavoritesPage = document.querySelector(".show-favorites");

submitButton.addEventListener('click', displayMessage);
clearButton.addEventListener('click', clearMessage);
favoriteButton.addEventListener('click', addToFavorites);
//showFavoritesPage.addEventListener('click', displayFavorites);


var favoritedMessages = [];
var currentMessage;

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function chooseMantra() {
  messageDisplay.innerText = mantras[getRandomIndex(mantras)];
  currentMessage = messageDisplay.innerText;
};

function chooseAffirmation() {
  messageDisplay.innerText = affirmations[getRandomIndex(affirmations)];
  currentMessage = messageDisplay.innerText;
};

function displayMessage() {
  event.preventDefault();
  messageDisplay.classList.remove("hidden");
  image.classList.add("hidden");
  if(selectMantra.checked === true) {
      clearButton.classList.remove("hidden");
      favoriteButton.classList.remove("hidden");
      return chooseMantra();
  } else if (selectAffirmation.checked === true) {
      clearButton.classList.remove("hidden");
      favoriteButton.classList.remove("hidden");
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
  favoriteButton.classList.add("hidden");
  selectMantra.checked = false;
  selectAffirmation.checked = false;
};

function addToFavorites() {
  if(!favoritedMessages.includes(currentMessage)){
    favoritedMessages.push(currentMessage);
  }
};
