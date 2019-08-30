'use strict'

// Grab DOM Elements
const modalTriggers = document.querySelectorAll('.modal-img');

const modal = document.querySelectorAll('.modal');

modalTriggers.forEach(trigger => {
  trigger.addEventListener('click', () => {
    const { popupTrigger } = trigger.dataset;
    const popupModal = document.querySelector(`[data-popup-modal="${popupTrigger}"]`);

    popupModal.style.display = 'block';

    popupModal.querySelector('.close').addEventListener('click', () => {
      popupModal.style.display = 'none';
    });
  });
});


// Sidebar Nav
(function() {

  let hamburger = {
    navToggle: document.querySelector('.nav-toggle'),
    nav: document.querySelector('nav'),

    doToggle: function(e) {
      // e.preventDefault();
      this.navToggle.classList.toggle('expanded');
      this.nav.classList.toggle('expanded');
    }
  };

  hamburger.navToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });
  hamburger.nav.addEventListener('click', function(e) { hamburger.doToggle(e); });

}());
