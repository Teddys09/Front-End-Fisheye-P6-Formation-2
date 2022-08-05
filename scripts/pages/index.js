import { photographerFactory } from '../factories/photographer.js';
import { getPhotographers } from '../utils/getPhotographers.js';

async function displayData(photographers) {
  const photographersSection = document.querySelector('.photographer_section');

  console.log(photographers);
  photographers.forEach((photographer) => {
    console.log(photographer);
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  const { photographers } = await getPhotographers();
  console.log(photographers);
  displayData(photographers);
}

init();
