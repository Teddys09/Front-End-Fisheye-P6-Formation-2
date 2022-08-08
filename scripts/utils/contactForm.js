export function displayModal() {
  const modal = document.getElementById('contact_modal');
  const main = document.querySelector('#main');
  const header = document.querySelector('header');
  const likesAndPrice = document.querySelector('.likes-and-price');

  modal.style.display = 'block';
  main.style.opacity = '0.5';
  header.style.opacity = '0.5';
  likesAndPrice.style.opacity = '0.5';
}

export function closeModal() {
  const modal = document.getElementById('contact_modal');
  const main = document.querySelector('#main');
  const header = document.querySelector('header');
  const likesAndPrice = document.querySelector('.likes-and-price');
  modal.style.display = 'none';
  main.style.opacity = '1';
  header.style.opacity = '1';
  likesAndPrice.style.opacity = '1';
}
