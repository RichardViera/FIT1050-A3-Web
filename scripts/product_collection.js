const product_swiper = new Swiper('#collection-1602 .swiper', {

    speed: 1100,
    slidesPerView: 4,
    spaceBetween: 1,
    rewind: true,
    fade: true,
    loopAdditionalSlides: 4,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

function filterItems() {
    let button = this;
    let selector = $(button).data('filter');
    $('#collection-1602 .cs-listing').not(selector).hide(500);
    $(selector).show(500);
}

$('#collection-1602 .cs-button').click(filterItems);
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