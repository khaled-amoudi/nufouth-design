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

});


const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 1000,
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 4,
            spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 6,
            spaceBetween: 40
        }
    },
    // If we need pagination
    // pagination: {
    //     el: ".swiper-pagination",
    // },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    // scrollbar: {
    //     el: ".swiper-scrollbar",
    // },
});




const swiper2 = new Swiper(".swiper2", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    grabCursor: true,

    // effect: "coverflow",
    // grabCursor: true,
    // centeredSlides: true,
    // coverflowEffect: {
    //     rotate: 50,
    //     stretch: 0,
    //     depth: 100,
    //     modifier: 1,
    //     slideShadows: true,
    // },

    
    autoplay: {
        delay: 3000,
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 3,
            spaceBetween: 40
        }
    },
    // If we need pagination
    // pagination: {
    //     el: ".swiper-pagination",
    // },

    // Navigation arrows
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    // },

    // And if we need scrollbar
    // scrollbar: {
    //     el: ".swiper-scrollbar",
    // },
});





const allSkeleton = document.querySelectorAll(".__skeleton");

window.addEventListener("load", function () {
  /* setTimeout(function () { */
    allSkeleton.forEach((item) => {
      item.classList.remove("__skeleton");
    });
  /* }, 2000); */
});
