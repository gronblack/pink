var nav = document.querySelector('.main-nav');
var toggler = nav.querySelector('.main-nav__toggle');

nav.classList.remove('main-nav--nojs');

toggler.addEventListener('click', function(event) {
  event.preventDefault();

  if (nav.classList.contains('main-nav--closed')) {
    nav.classList.remove('main-nav--closed');
    nav.classList.add('main-nav--opened');
  } else {
    nav.classList.remove('main-nav--opened');
    nav.classList.add('main-nav--closed');
  }
});
