const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElement = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', () => {
  header.classList.contains('open')
    ? (body.classList.remove('noscroll'),
      header.classList.remove('open'),
      fadeElement.forEach((element) => {
        element.classList.remove('fade-in'), element.classList.add('fade-out');
      }))
    : (body.classList.add('noscroll'),
      header.classList.add('open'),
      fadeElement.forEach((element) => {
        element.classList.add('fade-in'), element.classList.remove('fade-out');
      }));
});
