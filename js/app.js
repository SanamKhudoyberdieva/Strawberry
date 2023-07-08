$().ready(function () {
    let t = $('#back-top')
    $(window).on('scroll', function () {
        $scrollTop = $(window).scrollTop(), t = $('#back-top'), $scrollTop > 350 ? t.addClass('visible') : t.removeClass('visible')

        $scrollTop > 0 ? $('.es-navbar').addClass('es-navbar-fixed') : $('.es-navbar').removeClass('es-navbar-fixed')
    })
    $htmlBody = $('html, body'), t.length && t.on('click', function (t) {
        $htmlBody.animate({scrollTop: 0}, 200), t.preventDefault()
    })
})

// Plugins
$('input[data-plugin=\'phone-mask\']').inputmask({mask: '+\\9\\9\\8 99 999-99-99'})
$('input[data-plugin=\'birthday-mask\']').inputmask({mask: '99.99.9999'})

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true
    });

    $('.product-slick').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
        prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><img src="img/ic_arrow_red_prev.svg" class="img-fluid img-carusel-arrow"/></button>',
        nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><img src="img/ic_arrow_red_next.svg" class="img-fluid img-carusel-arrow"/></button>',
        responsive: [{
        breakpoint: 1024, settings: {
            slidesToShow: 6, slidesToScroll: 1, infinite: true, dots: true
        }
        }, {
        breakpoint: 600, settings: {
            slidesToShow: 4, slidesToScroll: 1
        }
        }, {
        breakpoint: 480, settings: {
            slidesToShow: 2, slidesToScroll: 1
        }
        }]
    })