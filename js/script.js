/*
 Template Name: Mulan / CV Template + RTL
 Template URI: https://elmanawy.info/demo/mulan
 Description: Mulan for resume / cv / portfolio template that's suitable for freelanner and anyone want to create online portflolio
 Author: Marwa El-Manawy
 Author URL: https://elmanawy.info
 Version: 1.0
 */

/*================================================
 [  Table of contents  ]
 ================================================
 :: Preloader
 :: Site Header
 :: Page loader
 :: Typing Text
 :: Text rotation
 :: Counter - Fun Fact
 :: Testenomials
 :: Clients
 :: Portfolio Filter
 :: LightBox
 :: AJAX Contact Form
 :: Google Map
 :: WOW Animation
 ======================================
 [ End table content ]
 ======================================*/

jQuery(document).ready(function () {
    "use strict";

    /*======================================
     Site Header
     ======================================*/
    $('#header-main-menu li a, .home-buttons a').on("click", function (e) {
        if ($(e.target).is('.header-main-menu a, .home-buttons a')) {
            $('.header-main-menu li a').removeClass('active');
            $(this).addClass('active');
            $(".sub-page").hide();
            if (location.pathname.replace(/^\//, '') == e.target.pathname.replace(/^\//, '') && location.hostname == e.target.hostname) {
                var target = $(e.target.hash);
                target = target.length ? target : $('[name=' + e.target.hash.slice(1) + ']');
                if (target.length) {
                    var gap = 0;
                    $(e.target.hash, 'html', 'body').animate({
                        opacity: 'show',
                        duration: "slow",
                        scrollTop: target.offset().top - gap
                    });
                }
            }
            if ($(e.target).is('.home-buttons a')) {
                $("#header-main-menu li a[href='#contact']").addClass('active');
            }
        }
    });


    /*************************
     Responsive Menu
     *************************/
    $('.responsive-icon').on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
            $('.header').animate({'margin-left': 285}, 300);
        } else {
            $(this).removeClass('active');
            $('.header').animate({'margin-left': 0}, 300);
        }
        return false;
    });

    $('.header a').on("click", function (e) {
        $('.responsive-icon').removeClass('active');
        $('.header').animate({'margin-left': 0}, 300);

    });
    /*======================================
     Typing Text
     ======================================*/
    $(".typed").typed({
        stringsElement: $('.typed-strings'),
        typeSpeed: 20,
        backDelay: 500,
        loop: true,
        autoplay: true,
        autoplayTimeout: 500,
        contentType: 'html',
        loopCount: true,
        resetCallback: function () {
            newTyped();
        }
    });


    /*======================================
     Text rotation
     ======================================*/
    $('.text-rotation').owlCarousel({
        dots: !1,
        nav: !1,
        margin: 0,
        items: 1,
        autoplay: true,
        autoplayHoverPause: !1,
        autoplayTimeout: 1000,
        loop: true,
        animateOut: 'zoomOut',
        animateIn: 'zoomIn'
    });


    /*======================================
     Counter - Fun Fact
     ======================================*/
    $('.counter-block-value').each(function () {
        var $this = $(this),
                countTo = $this.attr('data-count');
        $({countNum: $this.text()}).animate({
            countNum: countTo
        },
        {
            duration: 8000,
            easing: 'linear',
            step: function () {
                $this.text(Math.floor(this.countNum));
            },
            complete: function () {
                $this.text(this.countNum);
            }
        });
    });


    /*======================================
     Testenomials
     ======================================*/
    $('.testimonials').owlCarousel({
        navigation: false,
        pagination: false,
        autoPlay: true,
        items: 2,
        loop: !1,
        dots: true,
        margin: 25,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            768: {
                items: 1
            },
            1200: {
                items: 2
            }
        }
    });


    /*======================================
     Clients
     ======================================*/
    $('.clients').owlCarousel({
        navigation: false,
        pagination: false,
        dots: false,
        loop: true,
//        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        margin: 10,
        autoHeight: !1,
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 4
            },
            1200: {
                items: 6
            }
        }
    });


    /*======================================
     Portfolio Filter
     ======================================*/
    $(function () {
        var selectedClass = "";
        $(".filter-tabs").find('button:first-child').addClass('active-filter');
        $(".fil-cat").click(function () {
            $(".filter-tabs").find('button').removeClass('active-filter');
            $(this).addClass('active-filter');
            selectedClass = $(this).attr("data-rel");
            $("#portfolio-page").fadeTo(100, 0.1);
            $("#portfolio-page .portfolio-item").not("." + selectedClass).fadeOut().removeClass('portfolio-item');
            setTimeout(function () {
                $("." + selectedClass).fadeIn().addClass('portfolio-item');
                $("#portfolio-page").fadeTo(300, 1);
            }, 300);

        });
    });


    /*======================================
     LightBox
     ======================================*/
    $('[data-rel^=lightcase]').lightcase({
        maxWidth: 1100,
        maxHeight: 800
    });


    /*======================================
     AJAX Contact Form
     ======================================*/

    $("#contact-form").on("submit", function (e)
    {
        $('#show_contact_msg').html('<div class=loading>Sending Message..</div>');
        var name = $('#name').val();
        var email = $('#email').val();
        var comment = $('#comment').val();
        var formURL = $(this).attr("action");
        var data = {
            name: name,
            email: email,
            comment: comment,
        }
        $.ajax(
                {
                    url: formURL,
                    type: "POST",
                    data: data,
                    success: function (res) {
                        if (res === '1') {
                            $('#show_contact_msg').html('<div class=gen><i class="fa fa-smile-o" aria-hidden="true"></i> Thank you very much, We will notify you when we lunch</div>');
                            $("#contact-form")[0].reset();
                        }

                        if (res === '5') {
                            $('#show_contact_msg').html('<div class=err><i class="fa fa-frown-o" aria-hidden="true"></i> Please enter a valid email address</div>');
                        }
                    }
                });
        e.preventDefault();
    });


    /*======================================
     Google Map
     ======================================*/
    if ($('#google-map').length > 0) {
        //set your google maps parameters
        var latitude = 51.5255069,
                longitude = -0.0836207,
                map_zoom = 14;

        //google map custom marker icon 
        var marker_url = 'images/map-marker.png';

        //we define here the style of the map
        var style = [{"featureType": "landscape", "stylers": [{"saturation": -100}, {"lightness": 65}, {"visibility": "on"}]}, {"featureType": "poi", "stylers": [{"saturation": -100}, {"lightness": 51}, {"visibility": "simplified"}]}, {"featureType": "road.highway", "stylers": [{"saturation": -100}, {"visibility": "simplified"}]}, {"featureType": "road.arterial", "stylers": [{"saturation": -100}, {"lightness": 30}, {"visibility": "on"}]}, {"featureType": "road.local", "stylers": [{"saturation": -100}, {"lightness": 40}, {"visibility": "on"}]}, {"featureType": "transit", "stylers": [{"saturation": -100}, {"visibility": "simplified"}]}, {"featureType": "administrative.province", "stylers": [{"visibility": "off"}]}, {"featureType": "water", "elementType": "labels", "stylers": [{"visibility": "on"}, {"lightness": -25}, {"saturation": -100}]}, {"featureType": "water", "elementType": "geometry", "stylers": [{"hue": "#ffff00"}, {"lightness": -25}, {"saturation": -97}]}];

        //set google map options
        var map_options = {
            center: new google.maps.LatLng(latitude, longitude),
            zoom: map_zoom,
            panControl: true,
            zoomControl: true,
            mapTypeControl: true,
            streetViewControl: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false,
            styles: style,
        }
        //inizialize the map
        var map = new google.maps.Map(document.getElementById('google-map'), map_options);
        //add a custom marker to the map				
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(latitude, longitude),
            map: map,
            visible: true,
            icon: marker_url,
        });
    }

    /*======================================
     WOW Animation
     ======================================*/
    new WOW().init();
    /*======================================
     Preloader
     ======================================*/
    $('#preloader').fadeOut('slow', function () {
        $(this).remove();
    });
});
 