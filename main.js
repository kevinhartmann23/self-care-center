//Page Organization
var mainPage = document.querySelector(".main-page")
var favoritesPage = document.querySelector(".favorites-page");
var favMessageGrid = document.querySelector(".fav-message-grid");

//Text & Image Organization
var messageDisplay = document.querySelector('p');
var image = document.querySelector("#lil-human");

//Button Organization
var selectMantra = document.querySelector("#mantra-button");
var selectAffirmation = document.querySelector("#affirmation-button");
var submitButton = document.querySelector("#get-message");
var clearButton = document.querySelector("#clear-message");
var favoriteButton = document.querySelector(".fav-button");
var showFavoritesButton = document.querySelector(".show-favorites");
var backToMain = document.querySelector(".return-home");

//Event Listeners
submitButton.addEventListener('click', displayMessage);
clearButton.addEventListener('click', clearMessage);
favoriteButton.addEventListener('click', addToFavorites);
//showFavoritesButton.addEventListener('click', displayFavorites);
//backToMain.addEventListener('click', displayMainPage);

//Global Variables
var favoritedMessages = [];
var currentMessage;

//Functions & Event Handlers
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
  if(favoritedMessages.length >= 1) {
    showFavoritesButton.classList.remove("hidden");
  }
  createGrid();
};

// function displayFavorites() {
//   event.preventDefault();
//   favoritesPage.classList.remove("hidden");
//   mainPage.classList.add("hidden");
// };
//
// function displayMainPage() {
//   mainPage.classList.remove("hidden");
//   favoritesPage.classList.add("hidden");
//   clearMessage();
// };

function createGrid () {
  favMessageGrid.innerHTML = "";
  for (var i = 0; i < favoritedMessages.length; i++) {
    favMessageGrid.innerHTML +=
      `<article class="favorited-message" id="mini-display">
        <button class= "fav-button" id="favorite-message">&#9825;</button>
        <p class="text" id="mini-message">${favoritedMessages[i]}</p>
      </article>
      `
  }
};
