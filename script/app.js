// Elements
const menuButton = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.nav-bar');
const destinationButtons = document.querySelectorAll('.destination-button');
const crewButtons = document.querySelectorAll('.crew-button');
const technologyButtons = document.querySelectorAll('.technology-button');
  
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
destinationButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    getDestinationData(index);
    toggleOff(destinationButtons);
    button.classList.add('is-toggled');
  });
});

// Crew picker
crewButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    getCrewData(index);
    toggleOff(crewButtons);
    button.classList.add('is-toggled');
  });
});

// Technology picker
technologyButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    getTechnologyData(index);
    toggleOff(technologyButtons);
    button.classList.add('is-toggled');
  });
});

// Toggle off function based on type of button put in parameter
function toggleOff(buttons) {
  buttons.forEach((button) => {
    button.classList.remove('is-toggled');
  });
};