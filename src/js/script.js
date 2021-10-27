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