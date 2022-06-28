// Authors: %Author Name%

$(function() {
  hamburger();
  sliderInit();
});

$(window).on('resize', function() {

});

$(window).on('load', function() {

});

function hamburger() {
  const hamburger = document.querySelector('.hamburger');
  const list = document.querySelector('.l-mainNavigation');
  const header = document.querySelector('.l-siteHeader');

  hamburger.addEventListener('click', toggleClass);

  function toggleClass() {
    header.classList.toggle('-overflowX-off');
    hamburger.classList.toggle('is-active');
    list.classList.toggle('-state-open');
    scrollDisable();
  }

  function scrollDisable() {
    if(hamburger.classList.contains('is-active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  window.onresize = function () {
    scrollDisable();
    if (window.innerWidth > 1000) {
      document.querySelector('.l-siteHeader').classList.remove('-overflowX-off');
      document.querySelector('.hamburger').classList.remove('is-active');
      document.querySelector('.l-mainNavigation').classList.remove('-state-open');
    }
  };
}

function sliderInit() {
  $('.js-slider').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  });
}
