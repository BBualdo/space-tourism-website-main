// JSON technology data placeholders
const technologyImagePlaceholder = document.querySelector('.technology-image');
const technologyNamePlaceholder = document.querySelector('.technology-name');
const technologyDescriptionPlaceholder = document.querySelector('.technology-description');
// JSON technology data 
const getTechnologyData = (index) => {
  fetch('data.json')
  .then((res) => res.json()
  .then((data) => {
    technologyImagePlaceholder.innerHTML = `
    <img src=${data.technology[index].images.landscape} alt="">
    `;
    technologyNamePlaceholder.innerHTML = data.technology[index].name;
    technologyDescriptionPlaceholder.innerHTML = data.technology[index].description;
  }));
}
// default technology data
getTechnologyData(0);