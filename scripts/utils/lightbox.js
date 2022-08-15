function makeLightboxContainer(data, actualData) {
  const lightBoxContainer = document.createElement('div');
  lightBoxContainer.classList.add('lightbox-container');
  lightBoxContainer.setAttribute('tabindex', '1');
  lightBoxContainer.setAttribute(
    'aria-label',
    `Lightbox for ${actualData.title}`
  );

  const divCloseIcon = document.createElement('div');
  divCloseIcon.classList.add('close-icon');
  divCloseIcon.setAttribute('tabindex', '1');
  divCloseIcon.setAttribute('aria-label', 'Close lightbox');
  lightBoxContainer.appendChild(divCloseIcon);
  const closeIcon = document.createElement('img');
  closeIcon.setAttribute('src', 'assets/icons/close.svg');
  closeIcon.setAttribute('alt', 'Close icon');

  divCloseIcon.appendChild(closeIcon);
  const chevronLeft = document.createElement('img');
  chevronLeft.setAttribute('src', 'assets/icons/chevron-left-solid.svg');
  chevronLeft.setAttribute('alt', 'Chevron left icon');
  chevronLeft.setAttribute('tabindex', '1');
  chevronLeft.setAttribute('aria-label', 'Previous image');
  chevronLeft.classList.add('chevron-left');
  lightBoxContainer.appendChild(chevronLeft);
  const chevronRight = document.createElement('img');
  chevronRight.setAttribute('src', 'assets/icons/chevron-right-solid.svg');
  chevronRight.setAttribute('alt', 'Chevron right icon');
  chevronRight.setAttribute('tabindex', '1');
  chevronRight.setAttribute('aria-label', 'Next image');
  chevronRight.classList.add('chevron-right');
  lightBoxContainer.appendChild(chevronRight);
  document.body.prepend(lightBoxContainer);
  lightBoxContainer.focus();
  handleCloseLightbox();

  handleChevron(data, actualData);
}

function makeLightbox(data) {
  if (document.querySelector('.lightbox')) {
    document.querySelector('.lightbox').remove();
  }
  console.log(data);
  const lightBoxContainer = document.querySelector('.lightbox-container');

  const { id, image, title } = data;
  const lightbox = document.createElement('div');
  lightbox.classList.add('lightbox', `b${id}`);
  lightbox.setAttribute('tabindex', '2');
  lightbox.setAttribute('aria-hidden', 'true');
  lightBoxContainer.appendChild(lightbox);

  const lightboxImg = document.createElement('img');
  lightboxImg.setAttribute('src', `assets/media/${image}`);
  lightboxImg.setAttribute('alt', `${title}`);
  lightboxImg.classList.add('lightbox-img');
  lightbox.appendChild(lightboxImg);
}
function handleCloseLightbox() {
  const lightbox = document.querySelector('.lightbox-container');
  console.log(lightbox);
  const closeIcon = document.querySelector('.close-icon');
  console.log(closeIcon);

  closeIcon.addEventListener('click', () => {
    lightbox.remove();
  });
  closeIcon.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      lightbox.remove();
    }
  });
}

function handleChevron(data, actualData) {
  const chevronRight = document.querySelector('.chevron-right');
  const chevronLeft = document.querySelector('.chevron-left');
  const lightBoxContainer = document.querySelector('.lightbox-container');

  console.log(actualData);
  console.log(data);
  //const lightbox = document.querySelector('.lightbox .b' + id);

  chevronRight.addEventListener('click', () => {
    let indexs = data.indexOf(actualData);
    if (indexs === data.length - 1) {
      actualData = data[0];
    } else {
      actualData = data[indexs + 1];
    }

    console.log(actualData);
    // find in data === actualData and log it
    const nextData = data.findIndex((item) => item.id === actualData.id);

    console.log(nextData);
    makeLightbox(data[nextData]);
  });
  chevronRight.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      let indexs = data.indexOf(actualData);
      if (indexs === data.length - 1) {
        actualData = data[0];
      } else {
        actualData = data[indexs + 1];
      }

      console.log(actualData);
      // find in data === actualData and log it
      const nextData = data.findIndex((item) => item.id === actualData.id);

      console.log(nextData);
      makeLightbox(data[nextData]);
    }
  });

  chevronLeft.addEventListener('click', () => {
    let indexs = data.indexOf(actualData);
    if (indexs === 0) {
      actualData = data[data.length - 1];
    } else {
      actualData = data[indexs - 1];
    }

    console.log(actualData);
    // find in data === actualData and log it
    const nextData = data.findIndex((item) => item.id === actualData.id);

    console.log(nextData);
    makeLightbox(data[nextData]);
  });
}

// make function to on click on id bid display the light box
export function handleClickLightbox(data) {
  console.log(data);
  for (let i = 0; i < data.length; i++) {
    const id = data[i].id;
    console.log(id);
    const mediaImg = document.querySelector('.media-card .b' + id);
    mediaImg.addEventListener('click', () => {
      makeLightboxContainer(data, data[i]);
      makeLightbox(data[i]);
    });
    mediaImg.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        makeLightboxContainer(data, data[i]);
        makeLightbox(data[i]);
      }
    });
  }
}
