export function displayModal() {
  const modal = document.getElementById('contact_modal');
  const headerForm = document.querySelector('.modal header h2');

  const main = document.querySelector('#main');
  const header = document.querySelector('header');
  const likesAndPrice = document.querySelector('.likes-and-price');

  modal.style.display = 'block';
  main.style.opacity = '0.5';
  header.style.opacity = '0.5';
  likesAndPrice.style.opacity = '0.5';
  headerForm.focus();
}

export function closeModal() {
  console.log('hi');
  const button = document.querySelector('.contact_button');

  const modal = document.getElementById('contact_modal');
  const main = document.querySelector('#main');
  const header = document.querySelector('header');
  const likesAndPrice = document.querySelector('.likes-and-price');
  modal.style.display = 'none';
  main.style.opacity = '1';
  header.style.opacity = '1';
  likesAndPrice.style.opacity = '1';
  button.focus();
}

export function sendForm(e) {
  e.preventDefault();
  const form = document.querySelector('.modal');
  const fName = form.querySelector('#first_name');
  const lName = form.querySelector('#last_name');
  const email = form.querySelector('#email');
  const message = form.querySelector('#message');
  const fnameValue = fName.value;
  const lnameValue = lName.value;
  const emailValue = email.value;
  const messageValue = message.value;
  const data = {
    fName: fnameValue,
    lName: lnameValue,
    email: emailValue,
    message: messageValue,
  };
  console.log(data);
  closeModal();
}
