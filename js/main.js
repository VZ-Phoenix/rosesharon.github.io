

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");

        /*------------------
            Gallery filter
        --------------------*/
        $('.gallery-controls li').on('click', function () {
            $('.gallery-controls li').removeClass('active');
            $(this).addClass('active');
        });
        if ($('.gallery-filter').length > 0) {
            var containerEl = document.querySelector('.gallery-filter');
            var mixer = mixitup(containerEl);
        }

    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------------
		Testimonial Slider
    ----------------------- */
    $(".testimonial-slider").owlCarousel({
        items: 2,
        dots: true,
        // autoplay: true,
        loop: true,
        smartSpeed: 1200,
        margin: 0,
        responsive: {
            320: {
                items: 1,
            },
            480: {
                items: 1,
            },
            992: {
                items: 2,
            }
        }
    });



    /*------------------
        Magnific Popup
    --------------------*/
    $('.image-popup').magnificPopup({
        type: 'image'
    });

    /*------------------
        Counter Up
    --------------------*/
    $('.count').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    /*------------------
        About Counter Up
    --------------------*/
    $('.ab-count').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    }); 

})(jQuery);

// Открыть модальное окно
    document.getElementById("row1").addEventListener("click", function() {
    document.getElementById("my-modal").classList.add("open")
    })

    document.getElementById("row2").addEventListener("click", function() {
    document.getElementById("my-modal1").classList.add("open")
    }) 

    document.getElementById("row3").addEventListener("click", function() {
    document.getElementById("my-modal2").classList.add("open")
    })  
    // Закрыть модальное окно при клике вне его
    document.querySelector("#my-modal .modal__box").addEventListener('click', event => {
        event._isClickWithInModal = true;
    });
    document.getElementById("my-modal").addEventListener('click', event => {
        if (event._isClickWithInModal) return;
        event.currentTarget.classList.remove('open');
    });
    document.getElementById("my-modal1").addEventListener('click', event => {
        if (event._isClickWithInModal) return;
        event.currentTarget.classList.remove('open');
    });
     document.getElementById("my-modal2").addEventListener('click', event => {
        if (event._isClickWithInModal) return;
        event.currentTarget.classList.remove('open');
    });

