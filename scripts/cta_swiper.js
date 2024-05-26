const cta_swiper = new Swiper('#cta-51 .swiper', {

    speed: 1100,
    spaceBetween: 0,
    autoplay: true,
    duration: 350,
    loop: true,
    fade: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    keyboard: {
        enabled: true,
    }
});