import { makeImgOrVideo } from '../Factory/imgOrVideo.js';
import { closeModal, displayModal, sendForm } from '../utils/contactForm.js';
import { handleClickLightbox } from '../utils/lightbox.js';

export function makePhotograferHeader(data) {
  const { name, portrait, city, country, tagline, price } = data;

  const header = document.querySelector('.photograph-header');
  const div = document.createElement('div');
  div.classList.add('photograph-text-container');
  header.appendChild(div);
  const headerTitle = document.createElement('h1');
  headerTitle.textContent = name;
  headerTitle.setAttribute('tabindex', '2');
  div.append(headerTitle);
  const cityCountry = document.createElement('h2');
  cityCountry.textContent = `${city}, ${country}`;
  cityCountry.setAttribute('tabindex', '3');
  div.append(cityCountry);
  const p = document.createElement('p');
  p.textContent = tagline;
  p.setAttribute('tabindex', '3');
  div.append(p);
  //
  const buttonContact = document.createElement('button');
  buttonContact.textContent = 'Contactez-moi';
  buttonContact.classList.add('contact_button');
  buttonContact.setAttribute('tabindex', '4');
  header.appendChild(buttonContact);
  buttonContact.addEventListener('click', () => displayModal());
  //
  const img = document.createElement('img');
  img.setAttribute('src', `assets/photographers/${portrait}`);
  img.setAttribute('alt', 'Photo de ' + name);
  img.setAttribute('tabindex', '5');
  header.appendChild(img);
  //
}

export function makePhotograferContact(data) {
  const { name } = data;
  const body = document.querySelector('body');
  //
  const divId = document.createElement('div');
  divId.id = 'contact_modal';
  body.appendChild(divId);
  const divClass = document.createElement('div');
  divClass.classList.add('modal');
  divId.append(divClass);
  const header = document.createElement('header');
  const h2 = document.createElement('h2');
  h2.textContent = 'Contactez-moi ' + name;
  h2.setAttribute('tabindex', '4');
  const img = document.createElement('img');
  img.setAttribute('src', 'assets/icons/close.svg');
  img.setAttribute('alt', 'Fermer');
  img.setAttribute('tabindex', '4');
  img.addEventListener('click', () => closeModal());
  img.addEventListener('keypress', (e) => closeModal(e));
  header.append(h2, img);
  divClass.append(header);
  //
  const form = document.createElement('form');
  // create div with label and input
  const divFirstName = document.createElement('div');
  const label = document.createElement('label');
  label.textContent = 'Prénom';
  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('aria-label', 'Prénom');
  input.setAttribute('tabindex', '4');
  input.setAttribute('id', 'first_name');
  divFirstName.append(label, input);
  // create div with label and input
  const divLastName = document.createElement('div');
  const label2 = document.createElement('label');
  label2.textContent = 'Nom';
  const input2 = document.createElement('input');
  input2.setAttribute('type', 'text');
  input2.setAttribute('aria-label', 'Nom');
  input2.setAttribute('tabindex', '4');
  input2.setAttribute('id', 'last_name');
  divLastName.append(label2, input2);
  // create div with label and input
  const divEmail = document.createElement('div');
  const label3 = document.createElement('label');
  label3.textContent = 'Email';
  const input3 = document.createElement('input');
  input3.setAttribute('type', 'email');
  input3.setAttribute('aria-label', 'Email');
  input3.setAttribute('tabindex', '4');
  input3.setAttribute('id', 'email');
  divEmail.append(label3, input3);
  // create div with label and input
  const divMessage = document.createElement('div');
  const label4 = document.createElement('label');
  label4.textContent = 'Votre message';
  const input4 = document.createElement('input');
  input4.setAttribute('type', 'text');
  input4.setAttribute('aria-label', 'Votre message');
  input4.setAttribute('tabindex', '4');
  input4.setAttribute('id', 'message');
  divMessage.append(label4, input4);
  form.append(divFirstName, divLastName, divEmail, divMessage);
  divClass.append(form);
  //
  const button = document.createElement('button');
  button.classList.add('contact_button');
  button.textContent = 'Envoyer';
  button.setAttribute('tabindex', '4');
  button.addEventListener('click', (e) => sendForm(e));

  form.append(button);
  divClass.focus();
}

export function makePhotograferMedia(data) {
  const main = document.querySelector('#main');
  const mediaContainer = document.createElement('div');
  mediaContainer.classList.add('media-container');
  main.appendChild(mediaContainer);
  makeSortBy(data);

  //
}
function makeSortBy(data) {
  const { id, date, title, image, likes, price, video } = data;
  const mediaContainer = document.querySelector('.media-container');

  const divSortBy = document.createElement('div');
  divSortBy.classList.add('sort-by');
  mediaContainer.appendChild(divSortBy);
  const p1 = document.createElement('p');
  p1.textContent = 'Trier par  ';
  p1.setAttribute('tabindex', '7');
  divSortBy.appendChild(p1);
  const ul = document.createElement('ul');
  ul.classList.add('choice');
  ul.setAttribute('tabindex', '8');
  divSortBy.appendChild(ul);
  const liPopular = document.createElement('li');
  liPopular.textContent = 'Popularité';
  liPopular.classList.add('popular');
  liPopular.setAttribute('tabindex', '9 ');
  ul.appendChild(liPopular);
  // create div border
  const divBorder = document.createElement('div');
  divBorder.classList.add('border');
  ul.appendChild(divBorder);
  const liDate = document.createElement('li');
  liDate.textContent = 'Date';
  liDate.classList.add('date');
  liDate.setAttribute('tabindex', '9');
  ul.appendChild(liDate);
  const divBorder2 = document.createElement('div');
  divBorder2.classList.add('border');
  ul.appendChild(divBorder2);
  const liTitle = document.createElement('li');
  liTitle.textContent = 'Titre';
  liTitle.classList.add('title');
  liTitle.setAttribute('tabindex', '9');
  ul.appendChild(liTitle);
  // add icon to ul
  const divIcon = document.createElement('div');
  divIcon.classList.add('icon-dropdown');
  divIcon.setAttribute('tabindex', '8');
  ul.appendChild(divIcon);
  const iconDropDown = document.createElement('img');
  iconDropDown.setAttribute('src', 'assets/icons/angle-down-solid.svg');
  iconDropDown.setAttribute(
    'alt',
    'Flèche vers le bas appuyer sur entrée pour afficher les choix'
  );
  divIcon.appendChild(iconDropDown);
  const divMedia = document.createElement('div');
  divMedia.classList.add('media');
  mediaContainer.appendChild(divMedia);
  handleClickDropDown();
}

function handleClickDropDown() {
  const dropdown = document.querySelector('.icon-dropdown');

  // select all border
  const border = document.querySelectorAll('.border');
  let isClicked = false;
  const date = document.querySelector('.date');
  const title = document.querySelector('.title');
  dropdown.addEventListener('click', () => {
    isClicked = !isClicked;
    if (isClicked) {
      date.style.display = 'block';

      border.forEach((border) => {
        border.style.display = 'block';
      });

      title.style.display = 'block';
    } else {
      date.style.display = 'none';

      border.forEach((border) => {
        border.style.display = 'none';
      });
      title.style.display = 'none';
    }
  });
  dropdown.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      isClicked = !isClicked;
      if (isClicked) {
        date.style.display = 'block';

        border.forEach((border) => {
          border.style.display = 'block';
        });

        title.style.display = 'block';
      } else {
        date.style.display = 'none';

        border.forEach((border) => {
          border.style.display = 'none';
        });
        title.style.display = 'none';
      }
    }
  });
}

export function makeMediaDiv(data) {
  makeImgOrVideo(data);
  // incrementLike(data);
}

export function makeNumberOfLikes(data) {
  // reduce is an accumulator in this case he take number of likes of each element and increment them
  const totalLikes = data.reduce((prev, curr) => {
    return prev + curr.likes;
  }, 0);
  const body = document.querySelector('body');
  const divLikesAndPrice = document.createElement('div');
  divLikesAndPrice.classList.add('likes-and-price');
  divLikesAndPrice.setAttribute('tabindex', '6');
  body.appendChild(divLikesAndPrice);
  const likesDiv = document.createElement('div');
  likesDiv.classList.add('total-likes');

  divLikesAndPrice.appendChild(likesDiv);
  const pLikes = document.createElement('p');
  pLikes.textContent = `${totalLikes} `;

  likesDiv.appendChild(pLikes);
  const likeIcon = document.createElement('img');
  likeIcon.setAttribute('src', 'assets/icons/likeBlack.svg');
  likeIcon.setAttribute('alt', 'Heart icons');

  likesDiv.appendChild(likeIcon);
}

export function makePhotograpgerPrice(data) {
  const { price } = data;

  const divLikesAndPrice = document.querySelector('.likes-and-price');
  const priceDiv = document.createElement('div');
  priceDiv.classList.add('price-bottom');
  divLikesAndPrice.appendChild(priceDiv);

  const pPrice = document.createElement('p');
  pPrice.textContent = `${price} € /jour`;
  priceDiv.appendChild(pPrice);
}

export function handleClickSort(data) {
  sortMediaByDate(data);
  sortByPopularity(data);
  sortByTitle(data);
}
function sortMediaByDate(data) {
  const dateDiv = document.querySelector('.date');

  // event listener on dateDiv to sort all elements by date
  dateDiv.addEventListener('click', () => {
    const media = document.querySelectorAll('.media-card');
    media.forEach((media) => {
      media.remove();
    });
    data.sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    });
    data.forEach((data) => {
      makeMediaDiv(data);
      incrementLike(data);
    });
    handleClickLightbox(data);
  });
  dateDiv.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const media = document.querySelectorAll('.media-card');
      media.forEach((media) => {
        media.remove();
      });
      data.sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
      });
      data.forEach((data) => {
        makeMediaDiv(data);
        incrementLike(data);
      });
      handleClickLightbox(data);
    }
  });
}
function sortByPopularity(data) {
  const popularityDiv = document.querySelector('.popular');
  popularityDiv.addEventListener('click', () => {
    const media = document.querySelectorAll('.media-card');
    media.forEach((media) => {
      media.remove();
    });
    data.sort((a, b) => {
      return new Number(b.likes) - new Number(a.likes);
    });
    data.forEach((data) => {
      makeMediaDiv(data);
      incrementLike(data);
    });
    handleClickLightbox(data);
  });
  popularityDiv.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const media = document.querySelectorAll('.media-card');
      media.forEach((media) => {
        media.remove();
      });
      data.sort((a, b) => {
        return new Number(b.likes) - new Number(a.likes);
      });
      data.forEach((data) => {
        makeMediaDiv(data);
        incrementLike(data);
      });
      handleClickLightbox(data);
    }
  });
}

function sortByTitle(data) {
  const titleDiv = document.querySelector('.title');
  titleDiv.addEventListener('click', () => {
    const media = document.querySelectorAll('.media-card');
    media.forEach((media) => {
      media.remove();
    });
    data.sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
    data.forEach((data) => {
      makeMediaDiv(data);
      incrementLike(data);
    });
    handleClickLightbox(data);
  });
  titleDiv.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const media = document.querySelectorAll('.media-card');
      media.forEach((media) => {
        media.remove();
      });
      data.sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
      data.forEach((data) => {
        makeMediaDiv(data);
        incrementLike(data);
      });
      handleClickLightbox(data);
    }
  });
}

export function incrementLike(data) {
  const media = document.querySelectorAll('.media-card .media-info');
  let asClicked = false;

  const { likes, id } = data;
  const likeIcon = document.querySelector(`.likes.b${id} img`);

  likeIcon.addEventListener('click', () => {
    if (asClicked === false) {
      const newLikes = Number(likes) + 1;
      media.likes = newLikes;
      const pLikes = document.querySelector(`.likes.b${id} p`);
      pLikes.textContent = newLikes;
      // increment likeDiv +1
      const likeDiv = document.querySelector(`.likes-and-price div p`);
      const newLikeDiv = Number(likeDiv.textContent) + 1;

      likeDiv.textContent = newLikeDiv;
      asClicked = true;
    } else {
      media.likes = likes;
      const pLikes = document.querySelector(`.likes.b${id} p`);
      pLikes.textContent = likes;
      // increment likeDiv -1
      const likeDiv = document.querySelector(`.likes-and-price div p`);

      likeDiv.textContent = Number(likeDiv.textContent) - 1;
      asClicked = false;
    }
  });
  likeIcon.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      if (asClicked === false) {
        const newLikes = Number(likes) + 1;
        media.likes = newLikes;
        const pLikes = document.querySelector(`.likes.b${id} p`);
        pLikes.textContent = newLikes;
        // increment likeDiv +1
        const likeDiv = document.querySelector(`.likes-and-price div p`);
        const newLikeDiv = Number(likeDiv.textContent) + 1;

        likeDiv.textContent = newLikeDiv;
        asClicked = true;
      } else {
        media.likes = likes;
        const pLikes = document.querySelector(`.likes.b${id} p`);
        pLikes.textContent = likes;
        // increment likeDiv -1
        const likeDiv = document.querySelector(`.likes-and-price div p`);

        likeDiv.textContent = Number(likeDiv.textContent) - 1;
        asClicked = false;
      }
    }
  });
}
