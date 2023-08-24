// Elements
const menuButton = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.nav-bar');
const destinationButtons = document.querySelectorAll('.destination-button');
  // JSON data placeholders
  const planetImagePlaceholder = document.querySelector('.planet-image');
  const planetNamePlaceholder = document.querySelector('.planet-name');
  const planetDescriptionPlaceholder = document.querySelector('.planet-describtion');
  const distancePlaceholder = document.querySelector('.distance');
  const timePlaceholder = document.querySelector('.travel-time');
  // JSON data 
  const getData = () => {
    fetch('/data.json')
    .then((res) => res.json()
    .then((data) => {
      console.log(data.destinations);
    }));
  }

getData();

// mobile Menu folding
menuButton.addEventListener('click', () => {
  if (menuButton.classList.contains('active')) {
    menu.classList.remove('shown');
    menuButton.classList.remove('active');
  } else {
    menu.classList.add('shown');
    menuButton.classList.add('active');
  }
});
// Destination picker
destinationButtons.forEach((button) => {
  button.addEventListener('click', () => {
    toggleOff();
    button.classList.add('is-toggled')
  });
});

function toggleOff() {
  destinationButtons.forEach((button) => {
    button.classList.remove('is-toggled');
  });
};

