export function makeImgOrVideo(data) {
  const divMedia = document.querySelector('.media');

  const { id, title, image, likes, video } = data;

  const mediaCard = document.createElement('div');
  mediaCard.classList.add('media-card');
  divMedia.appendChild(mediaCard);
  const divMediaImg = document.createElement('div');
  divMediaImg.classList.add('media-img', 'b' + id);
  mediaCard.appendChild(divMediaImg);
  if (image) {
    divMediaImg.style.backgroundImage = `url(assets/media/${image})`;
    divMediaImg.setAttribute('tabindex', '9');

    divMediaImg.setAttribute('alt', `${title}`);
  }
  if (video) {
    const videoDisplay = document.createElement('video');
    videoDisplay.setAttribute('src', `assets/media/${video}`);
    videoDisplay.setAttribute('controls', 'controls');
    videoDisplay.setAttribute('tabindex', '9');
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
  h2Title.setAttribute('tabindex', '9');
  divMediaInfo.appendChild(h2Title);
  const divLikes = document.createElement('div');
  divLikes.classList.add('likes', `b${id}`);
  divMediaInfo.appendChild(divLikes);
  const pLikes = document.createElement('p');
  pLikes.textContent = likes;
  pLikes.setAttribute('tabindex', '9');
  pLikes.setAttribute('aria-label', `${likes} likes`);
  divLikes.appendChild(pLikes);
  const likeIcon = document.createElement('img');
  likeIcon.setAttribute('src', 'assets/icons/like.svg');
  likeIcon.setAttribute('alt', 'Like');
  likeIcon.setAttribute('tabindex', '9');
  likeIcon.setAttribute('aria-label', 'Appuyer sur entrée pour aimer');
  divLikes.appendChild(likeIcon);
}
