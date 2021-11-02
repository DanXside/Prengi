new Swiper('.swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    freeMode: true,
    autoplay: {
        delay: 5000,
        stopOnLastSlide: true,
    }
});

const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.promo__items'),
      overlay = document.querySelector('.promo__overlay'),
      link = document.querySelectorAll('.promo__item');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
    overlay.classList.add('active');
});

link.forEach((e) => {
    e.addEventListener('click', () => {
        menu.classList.remove('active');
        overlay.classList.remove('active');
    });
});

overlay.addEventListener('click', () => {
    menu.classList.remove('active');
    overlay.classList.remove('active');
});
