$('.owl-Car').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})
var owl = $('.owl-Car');
owl.owlCarousel();
// Go to the next item
$('.carousel-control-next').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.carousel-control-prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})