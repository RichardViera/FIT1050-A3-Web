$('.cs-button').click(filterItems);

function filterItems() {
    let button = this;
    let selector = $(button).data('filter');
    $('#collection-1602 .cs-listing .cs-item').not(selector).hide(500);
    $(selector).show(500);
}

const product_swiper = new Swiper('#collection-1602 .swiper', {

    speed: 1100,
    slidesPerView: 4,
    spaceBetween: 0,
    autoplay: true,
    duration: 350,
    loop: true,
    fade: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});