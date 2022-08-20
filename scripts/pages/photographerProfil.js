import {
  getPhotographerById,
  getPhotographerMedia,
} from '../utils/getPhotographers.js';
import {
  handleClickSort,
  incrementLike,
  makeMediaDiv,
  makeNumberOfLikes,
  makePhotograferContact,
  makePhotograferHeader,
  makePhotograferMedia,
  makePhotograpgerPrice,
} from '../Elements/makePhotograferPage.js';
import { handleClickLightbox } from '../utils/lightbox.js';
// Call function to get photographer data by id and call function to makeHeader
async function init() {
  const { photographer } = await getPhotographerById();
  const { photographerMedia } = await getPhotographerMedia();

  makePhotograferContact(photographer);
  makePhotograferHeader(photographer);
  makeNumberOfLikes(photographerMedia);
  makePhotograpgerPrice(photographer);
  makePhotograferMedia(photographerMedia);
  handleClickSort(photographerMedia);
  photographerMedia.forEach((media) => {
    makeMediaDiv(media);
    incrementLike(media);
  });

  handleClickLightbox(photographerMedia);
}

init();
