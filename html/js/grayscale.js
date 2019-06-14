/*jshint esversion: 6 */
(function($) {
    "use strict";
    var screen_width = $(window).width();
    if ( screen_width > 1000) {
        console.log("Screen width = " + screen_width + ": not mobile.");
    // BNHLegal Image Append on Hover
    $("div#bnhlegal-inner").hover(
        function () {
            $(".bnhlegal-outer").append($("<img class='bnhlegal' src='../img/work/bnhlegal.png' />"));
        },
        function () {
            $("img.bnhlegal").remove();
        });
    
    // Linear Regression Image Append on Hover
    $("div#linear-regression-inner").hover(
        function() {
            $(".linear-regression-outer").append($("<img class='linear-regression-code' src='../img/work/linear-regression-code.png' />"));
            $(".linear-regression-outer").append($("<img class='linear-regression-plot' src='../img/work/linear-regression-plot.png' />"));
        },
        function() {
            $("img.linear-regression-code").remove();
            $("img.linear-regression-plot").remove();
        });

    // Made Image Append on Hover
    $("div#cb-inner").hover(
        function() {
            $(".cb-outer").append($("<img class='cb-image'src='../img/work/crate-and-barrel.png' />"));
        },
        function() {
            $("img.cb-image").remove();
        });

     // Crate & Barrel Image Append on Hover
     $("div#made-inner").hover(
        function() {
            $(".made-outer").append($("<img class='made-image'src='../img/work/made.cloudtagslite.png' />"));
        },
        function() {
            $("img.made-image").remove();
        });

         // C Image Append on Hover
     $("div#cprog-inner").hover(
        function() {
            $(".cprog-outer").append($("<img class='cprog-image'src='../img/work/C-avg-word.png' />"));
        },
        function() {
            $("img.cprog-image").remove();
        });

        // Oak & Cord Image Append on Hover
     $("div#oac-inner").hover(
        function() {
            $(".oac-outer").append($("<img class='oac-image'src='../img/work/oac.jpg' />"));
        },
        function() {
            $("img.oac-image").remove();
        });

        // PBS Image Append on Hover
     $("div#pbs-inner").hover(
        function() {
            $(".pbs-outer").append($("<img class='pbs-image'src='../img/work/pbstjs.png' />"));
        },
        function() {
            $("img.pbs-image").remove();
        });

         // Java Image Append on Hover
     $("div#java-inner").hover(
        function() {
            $(".java-outer").append($("<img class='java-image'src='../img/work/card-game.png' />"));
        },
        function() {
            $("img.java-image").remove();
        });

       // UNIX Image Append on Hover
       $("div#unix-inner").hover(
        function() {
            $(".unix-outer").append($("<img class='unix-image'src='../img/work/UNIX.png' />"));
        },
        function() {
            $("img.unix-image").remove();
        });

        // x86 Image Append on Hover
       $("div#x86-inner").hover(
        function() {
            $(".x86-outer").append($("<img class='x86-image'src='../img/work/x86.png' />"));
        },
        function() {
            $("img.x86-image").remove();
        });
    }


    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 48)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 54
    });

    // Collapse Navbar
    var navbarCollapse = function() {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict

// Google Maps Scripts
var map = null;
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);
google.maps.event.addDomListener(window, 'resize', function() {
    map.setCenter(new google.maps.LatLng(33.802508, -84.39311));
});

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(33.802508, -84.39311),

        // Disables the default Google Maps UI components
        disableDefaultUI: true,
        scrollwheel: false,
        draggable: true,

        // How you would like to style the map.
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 29
            }, {
                "weight": 0.2
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 18
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 21
            }]
        }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": 36
            }, {
                "color": "#000000"
            }, {
                "lightness": 40
            }]
        }, {
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 19
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }, {
                "weight": 1.2
            }]
        }]
    };

    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using  element and options defined above
    map = new google.maps.Map(mapElement, mapOptions);

    // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
    var image = 'img/map-marker.svg';
    var myLatLng = new google.maps.LatLng(33.802508, -84.39311);
    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image
    });
}