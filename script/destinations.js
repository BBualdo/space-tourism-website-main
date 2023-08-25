// JSON destinations data placeholders
const planetImagePlaceholder = document.querySelector('.planet-image');
const planetNamePlaceholder = document.querySelector('.planet-name');
const planetDescriptionPlaceholder = document.querySelector('.planet-description');
const distancePlaceholder = document.querySelector('.distance');
const timePlaceholder = document.querySelector('.travel-time');
// JSON destinations data 
const getDestinationData = (index) => {
  fetch('data.json')
  .then((res) => res.json()
  .then((data) => {
    planetImagePlaceholder.innerHTML = `
    <img src=${data.destinations[index].images.webp} alt="">
    `;
    planetNamePlaceholder.innerHTML = data.destinations[index].name;
    planetDescriptionPlaceholder.innerHTML = data.destinations[index].description;
    distancePlaceholder.innerHTML = data.destinations[index].distance;
    timePlaceholder.innerHTML = data.destinations[index].travel;
  }));
}

// default destination data
getDestinationData(0);