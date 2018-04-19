

$(document).ready(function() {
    $(".blog-watch-slider").owlCarousel({
        loop: true,
        items: 1,
        singleItem: true,
        autoHeight: true,
        center: true,
        autoplay: true,
        autoplaySpeed: 1000,
        autoplayTimeout: 8000
    }).trigger('refresh.owl.carousel');
    $(".testimonial-slider").owlCarousel({
        loop: true,
        items: 1,
        singleItem: true,
        autoHeight: true,
        center: true,
        autoplay: true,
        autoplaySpeed: 1000,
        autoplayTimeout: 8000
    }).trigger('refresh.owl.carousel');
    $('.nav').scrollToFixed();
    $('.footer').scrollToFixed( { bottom: 0, limit: $('.footer').offset().top } );
});

// var rellax = new Rellax('.rellax-sidebar', {
//     speed: -2
// }); 

