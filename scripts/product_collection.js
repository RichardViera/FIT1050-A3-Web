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
    spaceBetween: 1,
    loop: true,
    fade: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

$('#collection-1602 .swiper-wrapper').ready(hideButtons)
$('#collection-1602 .swiper').hover(showButtons, hideButtons)

function showButtons() {
    $('#collection-1602 .swiper-button-prev').show(100)
    $('#collection-1602 .swiper-button-next').show(100)
}

function hideButtons() {
    $('#collection-1602 .swiper-button-prev').hide(100)
    $('#collection-1602 .swiper-button-next').hide(100)
}