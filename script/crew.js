// JSON crew data placeholders
const crewImagePlaceholder = document.querySelector('.crew-image');
const crewRolePlaceholder = document.querySelector('.crew-role');
const crewNamePlaceholder = document.querySelector('.crew-name');
const crewDescriptionPlaceholder = document.querySelector('.crew-description');
// JSON crew data 
const getCrewData = (index) => {
  fetch('/data.json')
  .then((res) => res.json()
  .then((data) => {
    crewImagePlaceholder.innerHTML = `
    <img src=${data.crew[index].images.webp} alt="">
    `;
    crewRolePlaceholder.innerHTML = data.crew[index].role;
    crewNamePlaceholder.innerHTML = data.crew[index].name;
    crewDescriptionPlaceholder.innerHTML = data.crew[index].bio;
  }));
}

// default destination data
getDestinationData(0);