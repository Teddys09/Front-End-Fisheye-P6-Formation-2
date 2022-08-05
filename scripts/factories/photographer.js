export function photographerFactory(data) {
  const { name, portrait, city, country, id, price, tagline } = data;
  console.log(data);

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement('article');

    article.setAttribute('data-index', id);
    const link = document.createElement('a');
    link.setAttribute('href', `./photographer.html?id=${id}`);
    //add arial-label to the link
    link.setAttribute('aria-label', `Voir la page de ${name}`);

    article.appendChild(link);

    const img = document.createElement('img');
    img.setAttribute('src', picture);
    img.setAttribute('alt', 'Photo de ' + name);
    link.append(img);
    const h2 = document.createElement('h2');
    h2.textContent = name;

    link.appendChild(h2);
    const p0 = document.createElement('p0');
    p0.textContent = `${city}, ${country}`;
    //add class to p0
    p0.classList.add('city-country');

    article.appendChild(p0);
    const p = document.createElement('p');

    p.classList.add('tagline');
    p.textContent = tagline;
    article.appendChild(p);
    const p2 = document.createElement('p');
    p2.classList.add('price');
    p2.textContent = `${price}€`;
    article.appendChild(p2);

    return article;
  }
  return { getUserCardDOM };
}
