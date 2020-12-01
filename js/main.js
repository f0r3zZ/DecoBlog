document.addEventListener('DOMContentLoaded', () => {
  const mainSlider = new Swiper('.main-slider_container', {
    loop: true,
    speed: 300,
    longSwipes: true,
    pagination: {
      el: '.main-slider-pagination'
    },
    navigation: {
      nextEl: '#main-next',
      prevEl: '#main-prev'
    }
  });

  const postSlider = new Swiper('.blog-recomended-slider_container', {
    loop: true,
    speed: 300,
    slidesPerView: 3,
    navigation: {
      nextEl: '.blog-recomended__arrow_next',
      prevEl: '.blog-recomended__arrow_prev'
    }
  })
  // sliders

  // burger
  const burger = document.querySelector('.burger'),
        nav = document.querySelector('.nav');
  
  burger.addEventListener('click', () => {
    burger.classList.toggle('burger_active');
    nav.classList.toggle('nav_active');
    document.body.classList.toggle('lock');
  })
  nav.addEventListener('click', event => {
    if (event.target.classList.contains('nav__link')) {
      burger.classList.remove('burger_active');
      nav.classList.remove('nav_active');
      document.body.classList.remove('lock');
    }
  })
})