$(document).ready(function () {
    var $scrollTopBtn = $('#scrollTopBtn');

    // Show/hide button on scroll
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 200) {
            // Remove d-none, fade it in
            $scrollTopBtn.fadeIn('fast').removeClass('d-none');
        } else {
            // Fade out and add d-none after fade completes
            $scrollTopBtn.fadeOut('fast', function () {
                $scrollTopBtn.addClass('d-none');
            });
        }
    });

    // Click event => smooth scroll to top
    $scrollTopBtn.on('click', function (e) {
        e.preventDefault(); // Prevent any default action (if used in anchor)
        $('html, body').animate({ scrollTop: 0 }, 'smooth');
    });




    var owl = $('.owl2-carousel');
    owl.owlCarousel({
        items: 4,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true
    });
    $('.play').on('click', function () {
        owl.trigger('play.owl.autoplay', [1000])
    })
    $('.stop').on('click', function () {
        owl.trigger('stop.owl.autoplay')
    })
    // // Owl Carousel
    // $('.owl-carousel').owlCarousel({
    //     loop:true,
    //     margin:10,
    //     responsiveClass:true,
    //     responsive:{
    //         0:{
    //             items:2,
    //             nav:true
    //         },
    //         600:{
    //             items:3,
    //             nav:false
    //         },
    //         1000:{
    //             items:4,
    //             nav:true,
    //             loop:true
    //         }
    //     }
    // })

});
