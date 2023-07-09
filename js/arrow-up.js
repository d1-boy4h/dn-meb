"use strict";

window.addEventListener('scroll', function() {
  var headerHeight = document.querySelector('.header').offsetHeight;

  if (window.scrollY > headerHeight / 2) {
    document.querySelector('.arrow_up').classList.add('visible');
  }
  else {
    document.querySelector('.arrow_up').classList.remove('visible');
  }
});