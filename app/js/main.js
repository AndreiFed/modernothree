$(function() {
    $(".rate-star").rateYo({
        rating: 5,
        starWidth: "12px",
        readOnly: true
    });
    $(".rate-starone").rateYo({
        rating: 4,
        starWidth: "12px",
        readOnly: true
    });
    $('.product-slider__inner').slick({
        dots: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4
    });
    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000,
        from: 200,
        to: 500

    });
    $(".icon-th-list").on('click', function() {
        $('.product__item').addClass('list');
        $(".icon-th-list").addClass('active');
        $(".icon-th-large").removeClass('active');
    });
    $(".icon-th-large").on('click', function() {
        $('.product__item').removeClass('list');
        $(".icon-th-list").removeClass('active');
        $(".icon-th-large").addClass('active');
    });

    var mixer = mixitup('.products__inner-box');

});