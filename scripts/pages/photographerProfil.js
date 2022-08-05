import {
  getPhotographerById,
  getPhotographerMedia,
} from '../utils/getPhotographers.js';
import {
  makeMediaDiv,
  makePhotograferContact,
  makePhotograferHeader,
  makePhotograferMedia,
} from '../factories/makePhotograferPage.js';
// Call function to get photographer data by id and call function to makeHeader
async function init() {
  const { photographer } = await getPhotographerById();
  const { photographerMedia } = await getPhotographerMedia();

  makePhotograferContact(photographer);
  makePhotograferHeader(photographer);
  makePhotograferMedia(photographerMedia);
  photographerMedia.forEach((media) => {
    makeMediaDiv(media);
  });
}

init();
