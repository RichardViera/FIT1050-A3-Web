const swiper = new Swiper('#cta-51 .swiper', {

    speed: 1000,
    spaceBetween: 0,
    autoplay: true,
    duration: 350,
    loop: true,
    fade: true,
    effect: 'cube',
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});