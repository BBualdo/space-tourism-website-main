// JSON technology data placeholders
const technologyLandscapePlaceholder = document.querySelector('.technology-landscape');
const technologyPortraitPlaceholder = document.querySelector('.technology-portrait');
const technologyNamePlaceholder = document.querySelector('.technology-name');
const technologyDescriptionPlaceholder = document.querySelector('.technology-description');
// JSON technology data 
const getTechnologyData = (index) => {
  fetch('../script/data.json')
  .then((res) => res.json()
  .then((data) => {
    technologyLandscapePlaceholder.innerHTML = `
    <img src=${data.technology[index].images.landscape} alt="">
    `;
    technologyPortraitPlaceholder.innerHTML = `
    <img src=${data.technology[index].images.portrait} alt="">
    `
    technologyNamePlaceholder.innerHTML = data.technology[index].name;
    technologyDescriptionPlaceholder.innerHTML = data.technology[index].description;
  }));
}
// default technology data
getTechnologyData(0);