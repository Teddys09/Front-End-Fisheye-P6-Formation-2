const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

// Get photographers data
const photographers = [];
const photographerMedia = [];
const photographerMediaContent = [];
export async function getPhotographers() {
  function getDataPhotographers() {
    return axios
      .get('./data/photographers.json')
      .then((res) => dispatchData(res.data.photographers))

      .catch((error) => console.log(error));
  }
  await getDataPhotographers();
  function dispatchData(data) {
    for (let i = 0; i < data.length; i++) {
      photographers.push(data[i]);
    }
  }
  return { photographers };
}

// Get photographers data by id
export async function getPhotographerById() {
  const { photographers } = await getPhotographers();

  // find photographer with id = id
  const photographer = photographers.find((photographer) => {
    return photographer.id == id;
  });

  return { photographer };
}
export async function getPhotographerMedia() {
  function getDataPhotographerByIdMedia() {
    return axios
      .get('./data/photographers.json')
      .then((res) => dispatchData(res.data.media))

      .catch((error) => console.log(error));
  }
  await getDataPhotographerByIdMedia();
  function dispatchData(data) {
    // for each data in data who contains id = data.photographerId push data in photographersMedia
    for (let i = 0; i < data.length; i++) {
      if (data[i].photographerId == id) {
        photographerMedia.push(data[i]);
      }
    }
    for (let i = 0; i < photographerMedia.length; i++) {
      photographerMediaContent.push(photographerMedia[i]);
    }

    return { photographerMedia };
  }

  return { photographerMedia };
}
