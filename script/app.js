// Elements
const menuButton = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.nav-bar');
const destinationButtons = document.querySelectorAll('.destination-button');
  
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
    getdestinationData(index);
    toggleOff();
    button.classList.add('is-toggled');
  });
});

function toggleOff() {
  destinationButtons.forEach((button) => {
    button.classList.remove('is-toggled');
  });
};