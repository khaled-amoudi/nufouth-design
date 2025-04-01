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