import { closeModal, displayModal } from '../utils/contactForm.js';

export function makePhotograferHeader(data) {
  const { name, portrait, city, country, tagline } = data;

  const header = document.querySelector('.photograph-header');
  const div = document.createElement('div');
  div.classList.add('photograph-text-container');
  header.appendChild(div);
  const headerTitle = document.createElement('h1');
  headerTitle.textContent = name;
  div.append(headerTitle);
  const cityCountry = document.createElement('h2');
  cityCountry.textContent = `${city}, ${country}`;
  div.append(cityCountry);
  const p = document.createElement('p');
  p.textContent = tagline;
  div.append(p);
  //
  const buttonContact = document.createElement('button');
  buttonContact.textContent = 'Contactez-moi';
  buttonContact.classList.add('contact_button');
  header.appendChild(buttonContact);
  buttonContact.addEventListener('click', () => displayModal());
  //
  const img = document.createElement('img');
  img.setAttribute('src', `assets/photographers/${portrait}`);
  img.setAttribute('alt', 'Photo de ' + name);
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
  const { id, date, title, image, likes, price, video } = data;
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
  divSortBy.appendChild(p1);
  const ul = document.createElement('ul');
  ul.classList.add('choice');
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
      // add style to border for all
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
  divLikes.classList.add('likes');
  divMediaInfo.appendChild(divLikes);
  const pLikes = document.createElement('p');
  pLikes.textContent = likes;
  divLikes.appendChild(pLikes);
  const likeIcon = document.createElement('img');
  likeIcon.setAttribute('src', 'assets/icons/like.svg');
  likeIcon.setAttribute('alt', 'Heart icons');
  divLikes.appendChild(likeIcon);
}
