import { closeModal, displayModal } from '../utils/contactForm.js';

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

  console.log(price);
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
  const img = document.createElement('img');
  img.setAttribute('src', 'assets/icons/close.svg');
  img.setAttribute('alt', 'Fermer');
  img.addEventListener('click', () => closeModal());
  header.append(h2, img);
  divClass.append(header);
  //
  const form = document.createElement('form');
  // create div with label and input
  const divFirstName = document.createElement('div');
  const label = document.createElement('label');
  label.textContent = 'Prénom';
  const input = document.createElement('input');
  divFirstName.append(label, input);
  // create div with label and input
  const divLastName = document.createElement('div');
  const label2 = document.createElement('label');
  label2.textContent = 'Nom';
  const input2 = document.createElement('input');
  divLastName.append(label2, input2);
  // create div with label and input
  const divEmail = document.createElement('div');
  const label3 = document.createElement('label');
  label3.textContent = 'Email';
  const input3 = document.createElement('input');
  divEmail.append(label3, input3);
  // create div with label and input
  const divMessage = document.createElement('div');
  const label4 = document.createElement('label');
  label4.textContent = 'Votre message';
  const input4 = document.createElement('input');
  divMessage.append(label4, input4);
  form.append(divFirstName, divLastName, divEmail, divMessage);
  divClass.append(form);
  //
  const button = document.createElement('button');
  button.classList.add('contact_button');
  button.textContent = 'Envoyer';
  form.append(button);
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
  ul.appendChild(liPopular);
  // create div border
  const divBorder = document.createElement('div');
  divBorder.classList.add('border');
  ul.appendChild(divBorder);
  const liDate = document.createElement('li');
  liDate.textContent = 'Date';
  liDate.classList.add('date');
  ul.appendChild(liDate);
  const divBorder2 = document.createElement('div');
  divBorder2.classList.add('border');
  ul.appendChild(divBorder2);
  const liTitle = document.createElement('li');
  liTitle.textContent = 'Titre';
  liTitle.classList.add('title');
  ul.appendChild(liTitle);
  // add icon to ul
  const divIcon = document.createElement('div');
  divIcon.classList.add('icon-dropdown');
  ul.appendChild(divIcon);
  const iconDropDown = document.createElement('img');
  iconDropDown.setAttribute('src', 'assets/icons/angle-down-solid.svg');
  iconDropDown.setAttribute('alt', 'Flèche vers le bas');
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
}

export function makeMediaDiv(data) {
  const { id, date, title, image, likes, price, video } = data;
  // for each element in data

  const divMedia = document.querySelector('.media');

  const mediaCard = document.createElement('div');
  mediaCard.classList.add('media-card');
  divMedia.appendChild(mediaCard);
  const divMediaImg = document.createElement('div');
  divMediaImg.classList.add('media-img');
  mediaCard.appendChild(divMediaImg);
  if (image) {
    divMediaImg.style.backgroundImage = `url(assets/media/${image})`;
    divMediaImg.setAttribute('tabindex', '9');
    divMediaImg.setAttribute('aria-label', `photo ${title}`);
  }
  if (video) {
    const videoDisplay = document.createElement('video');
    console.log(video);
    videoDisplay.setAttribute('src', `assets/media/${video}`);
    videoDisplay.setAttribute('controls', 'controls');
    divMediaImg.appendChild(videoDisplay);
  } else if (image === 'undefined' || video === 'undefined') {
    const noContent = document.createElement('p');
    noContent.textContent = 'Pas de contenu disponible';
    divMediaImg.appendChild(noContent);
  }
  const divMediaInfo = document.createElement('div');
  divMediaInfo.classList.add('media-info');
  mediaCard.appendChild(divMediaInfo);
  const h2Title = document.createElement('h2');
  h2Title.textContent = title;
  divMediaInfo.appendChild(h2Title);
  const divLikes = document.createElement('div');
  divLikes.classList.add('likes', `b${id}`);
  divMediaInfo.appendChild(divLikes);
  const pLikes = document.createElement('p');
  pLikes.textContent = likes;
  divLikes.appendChild(pLikes);
  const likeIcon = document.createElement('img');
  likeIcon.setAttribute('src', 'assets/icons/like.svg');
  likeIcon.setAttribute('alt', 'Heart icons');
  divLikes.appendChild(likeIcon);
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

export function handleClickImg(data) {
  const { id, image } = data;
  const mediaImg = document.querySelector('.media-img');

  mediaImg.addEventListener('input', () => {
    console.log('hi');
  });
}

export function handleClickSort(data) {
  sortMediaByDate(data);
  sortByPopularity(data);
  sortByTitle(data);
}
function sortMediaByDate(data) {
  const dateDiv = document.querySelector('.date');
  console.log(data);
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
    });
  });

  console.log(data);
}
function sortByPopularity(data) {
  const popularityDiv = document.querySelector('.popular');
  popularityDiv.addEventListener('click', () => {
    const media = document.querySelectorAll('.media-card');
    media.forEach((media) => {
      media.remove();
    });
    data.sort((a, b) => {
      return b.likes - a.likes;
    });
    data.forEach((data) => {
      makeMediaDiv(data);
    });
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
    });
  });
}

export function incrementLike(data) {
  const media = document.querySelectorAll('.media-card .media-info');
  let asClicked = false;

  const { likes, id } = data;
  const likeIcon = document.querySelector(`.likes.b${id} img`);

  likeIcon.addEventListener('click', () => {
    if (asClicked === false) {
      console.log(likes);

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
}
