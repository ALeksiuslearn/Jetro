$(function () {
    $('.slider__inner').slick({
        nextArrow: '<button class="slick-arrow slick-next"><img src="../images/next.svg" alt="next arrow"></button>',
        prevArrow: '<button class="slick-arrow slick-prev"><img src="../images/previous.png" alt="prev arrow"></button>',
        dots: false,
        arrows: true,
        asNavFor: '.slider__nav',
        // autoplay: true,
        // infinite: true,
        // fade: true,
        // slidesPerRow: 2,
        // centerMode: true,
        // slidesToScroll: 1,
        responsive: [{
            breakpoint: 745,
            settings: {
                arrows: false,
            }
        }, ]

    });
    $('.slider__nav').slick({
        slidesToShow: 6,
        // slidesToScroll: 2,
        asNavFor: '.slider__inner',
        // dots: true,
        // centerMode: true,
        arrows: false,
        infinite: true,
        focusOnSelect: true,
        // variableWidth: true
        responsive: [{
                breakpoint: 970,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 870,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
        ]
    });
    $('.header__menu-btn').on('click', function () {
        // служит для проверки работы кнопки.
        // console.log('test');
        $('.header__menu > ul').slideToggle();
    });

});