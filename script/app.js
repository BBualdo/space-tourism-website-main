const menuButton = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.nav-bar');


menuButton.addEventListener('click', () => {
  if (menuButton.classList.contains('active')) {
    menu.classList.remove('shown');
    menuButton.classList.remove('active');
  } else {
    menu.classList.add('shown');
    menuButton.classList.add('active');
  }
})